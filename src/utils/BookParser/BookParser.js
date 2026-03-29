import fs from 'fs';
import Book from './Book.js';

export default class BookParser {
    constructor(path) {
        this.path = path;
        this.text = '';
        this.chapters = [];
    }

    async load() {
        this.text = await fs.readFile(this.path);
        this._parseChapters();
        return new Book(this.text, this.chapters);
    }

    _parseChapters() {
        // 中文 + 英文章节
        const regex = /^(\s*第[零一二三四五六七八九十百千万\d]{1,10}章.*$)|(^\s*Chapter\s+[0-9IVXLCDM]+[:\-–]?\s*.*$)/gim;
        const matches = [...this.text.matchAll(regex)];

        if (matches.length >= 3) {
            // 正常章节识别
            this.chapters = matches.map((m, i) => {
                const start = m.index;
                const end = i + 1 < matches.length ? matches[i + 1].index : this.text.length;
                return {
                    title: m[0].trim(),
                    start,
                    end
                };
            });
        } else {
            // fallback：按空行切分，每段最多 3000 字
            this.chapters = [];
            let start = 0;
            let count = 1;

            const segments = this.text.split(/\n{2,}/); // 空行分段
            for (let seg of segments) {
                let segStart = start;
                while (seg.length > 3000) {
                    this.chapters.push({
                        title: `第${count}节`,
                        start: segStart,
                        end: segStart + 3000
                    });
                    segStart += 3000;
                    seg = seg.slice(3000);
                    count++;
                }
                if (seg.length > 0) {
                    this.chapters.push({
                        title: `第${count}节`,
                        start: segStart,
                        end: segStart + seg.length
                    });
                    count++;
                }
                start = segStart + seg.length;
            }
        }
    }
}
