import fs from 'fs';

export default class FileManager {
    constructor(root = "/userdisk/Favorites") {
        this.pathStack = root.split('/').filter(Boolean);
        this.nodeList = [];
        this.handler = null;

        this._refresh();
    }

    get workDir() {
        return '/' + this.pathStack.join('/');
    }

    async _refresh() {
        if (this.handler) {
            this.handler(null);
        }

        try {
            const list = await fs.readdir(this.workDir, { withFileTypes: true });

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
            console.error(e);
            this.nodeList = [];
        }

        if (this.handler) {
            this.handler(this.nodeList);
        }
    }

    chooseFile(index) {
        const node = this.nodeList[index];
        if (!node) return null;

        if (node.isDirectory()) {
            this.pathStack.push(node.name);
            this._refresh();
            return null;
        }

        return `${this.workDir}/${node.name}`;
    }

    goBack() {
        if (this.pathStack.length <= 1) return false;

        this.pathStack.pop();
        this._refresh();
        return true;
    }
}
