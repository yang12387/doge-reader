import fs from 'fs';
import Book from './Book.js';

export default class BookParser {
    constructor(path) {
        this.path = path;
        this.text = '';
        this.chapters = [];
    }

    async load() {
        this.text = await fs.readFile(this.path, 'utf-8');
        this.text = this.text.replace(/\r\n/g, '\n');
        this._parse();
        return new Book(this.text, this.chapters);
    }

    _parse() {
        const regex = /^\s*(第[零一二三四五六七八九十百千万\d]{1,10}[部章回节卷].*|序|前言|楔子|引子|Chapter\s+[0-9IVXLCDM]+.*|Part\s+[0-9IVXLCDM]+.*|Prologue|Foreword)\s*$/gim;

        const matches = [];
        let m;

        while ((m = regex.exec(this.text)) !== null) {
            const name = m[0].trim();
            if (name) { // 忽略空行
                matches.push({
                    name,
                    start: m.index
                });
            }
        }

        if (matches.length >= 1) {
            for (let i = 0; i < matches.length; i++) {
                const start = matches[i].start;
                const end = i + 1 < matches.length ? matches[i + 1].start : this.text.length;

                // 忽略零长度章节
                if (end > start) {
                    this.chapters.push({
                        name: matches[i].name,
                        start,
                        end
                    });
                }
            }

            // 如果第一个章节不是从 0 开始，作为前言处理
            if (this.chapters[0].start > 0) {
                this.chapters.unshift({
                    name: '前言',
                    start: 0,
                    end: this.chapters[0].start
                });
            }
        } else {
            this._fallback();
        }
    }

    _fallback() {
        const size = 3000;
        let cursor = 0;
        let index = 1;

        while (cursor < this.text.length) {
            let end = cursor + size;
            if (end > this.text.length) end = this.text.length;

            if (end > cursor) { // 确保不产生空章节
                this.chapters.push({
                    name: '第' + index + '节',
                    start: cursor,
                    end: end
                });
            }

            cursor = end;
            index++;
        }
    }
}