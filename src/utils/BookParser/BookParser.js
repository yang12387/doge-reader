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
        this.text = this.text.replace(/\r\n/g, '\n').trim();
        this._parse();
        return new Book(this.text, this.chapters);
    }

    _parse() {
        // 更严格的章节识别
        const regex = /^(第[零一二三四五六七八九十百千万\d]{1,10}[部章回节卷][^\n]{0,40}|序章?|前言|楔子|引子|Chapter\s+[0-9IVXLCDM]+[^\n]{0,40}|Part\s+[0-9IVXLCDM]+[^\n]{0,40}|Prologue|Foreword)\s*$/gim;

        let matches = [];
        let m;

        while ((m = regex.exec(this.text)) !== null) {

            let name = m[0].trim();

            // 排除异常标题
            if (name.length === 0 || name.length > 50) continue;

            matches.push({
                name: name,
                start: m.index
            });
        }

        // 如果匹配太少，直接 fallback
        if (matches.length < 2) {
            this._fallback();
            return;
        }

        for (let i = 0; i < matches.length; i++) {

            let start = matches[i].start;
            let end = (i + 1 < matches.length)
                ? matches[i + 1].start
                : this.text.length;

            // 正文长度必须足够（防止连续标题）
            if (end - start < 200) continue;

            this.chapters.push({
                name: matches[i].name,
                start: start,
                end: end
            });
        }

        // 没有有效章节则 fallback
        if (this.chapters.length === 0) {
            this._fallback();
            return;
        }

        // 修复前置正文
        if (this.chapters[0].start > 0) {
            this.chapters.unshift({
                name: '前言',
                start: 0,
                end: this.chapters[0].start
            });
        }

        // 删除尾部异常空章节
        let last = this.chapters[this.chapters.length - 1];
        if (last.end - last.start < 100) {
            this.chapters.pop();
        }
    }

    _fallback() {

        let size = 3000;
        let cursor = 0;
        let index = 1;

        while (cursor < this.text.length) {

            let end = cursor + size;
            if (end > this.text.length) end = this.text.length;

            if (end - cursor > 100) {
                this.chapters.push({
                    name: '第' + index + '节',
                    start: cursor,
                    end: end
                });
                index++;
            }

            cursor = end;
        }
    }
}