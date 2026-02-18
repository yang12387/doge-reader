import fs from 'fs';

export default class FileManager {
    constructor(root = "/userdisk/Favorites") {
        this._stack = root.split('/').filter(Boolean);
        this.loading = true
        this.nodeList = [];
        this._version = 0;
    }

    get workDir() {
        return '/' + this._stack.join('/');
    }

    async _refresh() {
        const version = ++this._version;
        this.loading = true;

        try {
            const list = await fs.readdir(this.workDir, { withFileTypes: true });

            if (version !== this._version) return;

            this.nodeList = list
                .filter(node =>
                    node.isDirectory() || node.name.endsWith('.txt')
                )
                .sort((a, b) => {
                    if (a.isDirectory() && !b.isDirectory()) return -1;
                    if (!a.isDirectory() && b.isDirectory()) return 1;
                    return a.name.localeCompare(b.name);
                });

        } catch (e) {
            if (version !== this._version) return;
            this.nodeList = [];
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

        return `${this.workDir}/${node.name}`;
    }

    goBack() {
        if (this._stack.length <= 1) return false;

        this._stack.pop();
        this._refresh();
        return true;
    }
}
