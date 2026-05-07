import { Shell } from 'shell';

let shellInitialized = false;

function parseLsLine(line) {
    if (!line.trim()) return null;
    const parts = line.trim().split(/\s+/);
    if (parts.length < 6) return null;
    const permissions = parts[0];
    const name = parts[parts.length - 1];
    if (name === '.' || name === '..') return null;
    const isDir = permissions[0] === 'd';
    const isFile = permissions[0] === '-';
    let size = 0;
    if (!isDir) {
        for (let i = 1; i < parts.length - 1; i++) {
            const num = parseInt(parts[i], 10);
            if (!isNaN(num) && num > 0) {
                size = num;
                break;
            }
        }
    }
    return {
        name,
        isDirectory: () => isDir,
        isFile: () => isFile,
        size
    };
}

export default class FileManager {
    constructor(root = "/userdisk/Favorite") {
        this._stack = root.split('/').filter(Boolean);
        this._version = 0;

        this.loading = true;
        this.error = false;
        this.nodeList = [];

        this._refresh();
    }

    get cwd() {
        return '/' + this._stack.join('/');
    }

    async _refresh() {
        const version = ++this._version;
        this.loading = true;
        this.error = false;

        try {
            if (!shellInitialized) {
                await Shell.initialize();
                shellInitialized = true;
            }

            const output = await Shell.exec(`ls -la "${this.cwd}"`);
            const lines = output.split('\n');
            const list = [];

            for (let i = 1; i < lines.length; i++) {
                const node = parseLsLine(lines[i]);
                if (!node) continue;
                if (node.isDirectory() || node.name.endsWith('.txt')) {
                    list.push(node);
                }
            }

            if (version !== this._version) return;

            list.sort((a, b) => {
                if (a.isDirectory() && !b.isDirectory()) return -1;
                if (!a.isDirectory() && b.isDirectory()) return 1;
                return a.name.localeCompare(b.name);
            });

            this.nodeList = list;
        } catch (e) {
            if (version !== this._version) return;
            this.nodeList = [];
            this.error = true;
            console.error('FileManager refresh error:', e);
        }

        this.loading = false;
    }

    chooseFile(index) {
        const node = this.nodeList[index];
        if (!node) return null;

        if (node.isDirectory()) {
            this._stack.push(node.name);
            this._refresh();
            return null;
        }

        return `${this.cwd}/${node.name}`;
    }

    goBack() {
        if (this._stack.length <= 1) return false;

        this._stack.pop();
        this._refresh();
        return true;
    }
}