class MockDirent {
    constructor(name, type) {
        this.name = name;
        this.type = type; // 'file' | 'dir'
    }

    isDirectory() {
        return this.type === 'dir';
    }
    isFile() {
        return this.type === 'file';
    }
}

const mockFileTree = {
    "/userdisk/Favorites": [
        new MockDirent("小说", "dir"),
        new MockDirent("笔记.txt", "file"),
        new MockDirent("readme.md", "file"),
    ],
    "/userdisk/Favorites/小说": [
        new MockDirent("第一章.txt", "file"),
        new MockDirent("第二章.txt", "file"),
        new MockDirent("第三章.txt", "file"),
    ]
};

const fs = {
    async readdir(path, options = {}) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (!mockFileTree[path]) {
            throw new Error("Path not found: " + path);
        }

        if (options.withFileTypes) {
            return mockFileTree[path];
        }

        return mockFileTree[path].map(node => node.name);
    }
};

export default fs;
