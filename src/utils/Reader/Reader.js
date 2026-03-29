export default class Reader {
    constructor(book, options = {}) {
        this.book = book;
        this.mode = options.mode || 'page'; // page|scroll
        this.fontSize = options.fontSize || 10; // vh
        this.lineHeight = options.lineHeight || 14; // vh
        this.viewportWidth = options.viewportWidth || 930; // px
        this.viewportHeight = options.viewportHeight || 240; // px

        this.chapterIndex = 0;
        this.chapterText = '';
        this.offset = 0;
        this.offsetY = 0;
        this.content = '';

        if (options.progress) {
            this.setProgress(options.progress);
        } else {
            this.go(0);
        }
    }

    go(chapterIndex, offset = 0, offsetY = 0) {
        if (chapterIndex < 0 || chapterIndex >= this.book.chapters.length) return;
        this.chapterIndex = chapterIndex;
        this.chapterText = this.book.getChapter(chapterIndex);

        if (this.mode === 'scroll') { this.offsetY = offsetY; this.offset = 0; }
        else { this.offset = offset; this.offsetY = 0; }

        this.render(this.offset);
    }

    render(startOffset = this.offset) {
        if (this.mode === 'scroll') {
            this.content = this.chapterText;
            return this.chapterText.length;
        }

        const linePx = (this.lineHeight / 100) * this.viewportHeight;
        const fontPx = (this.fontSize / 100) * this.viewportHeight;
        const linesPerPage = Math.max(1, Math.floor(this.viewportHeight / linePx));
        const charsPerLine = Math.max(1, Math.floor(this.viewportWidth / fontPx));

        const paragraphs = this.chapterText.split('\n');
        let pageText = '';
        let linesThisPage = 0;
        let charsProcessed = 0;

        for (const para of paragraphs) {
            let i = 0;
            while (i < para.length && linesThisPage < linesPerPage) {
                let end = i + charsPerLine;
                if (/[a-zA-Z0-9]/.test(para[i])) {
                    const slice = para.slice(i, end);
                    const lastSpace = slice.lastIndexOf(' ');
                    if (lastSpace > 0 && end < para.length) end = i + lastSpace;
                }
                const line = para.slice(i, end);
                if (charsProcessed >= startOffset) {
                    pageText += line + '\n';
                    linesThisPage++;
                }
                charsProcessed += line.length;
                i = end;
            }
            if (linesThisPage >= linesPerPage) break;
            charsProcessed++;
        }

        this.content = pageText;
        return charsProcessed;
    }

    next() {
        if (this.mode !== 'page') return;

        const endOffset = this.render(this.offset);

        if (endOffset >= this.chapterText.length) {
            this.go(this.chapterIndex + 1);
        } else {
            this.offset = endOffset;
            this.render(this.offset);
        }
    }

    prev() {
        if (this.mode !== 'page') return;

        if (this.offset <= 0) {
            const prevIndex = this.chapterIndex - 1;
            if (prevIndex < 0) return;
            this.chapterIndex = prevIndex;
            this.chapterText = this.book.getChapter(prevIndex);

            let start = 0, lastStart = 0;
            while (true) {
                const end = this.render(start);
                if (end >= this.chapterText.length) break;
                lastStart = end;
                start = end;
            }

            this.offset = lastStart;
            this.render(this.offset);
            return;
        }

        let start = 0, lastStart = 0;
        while (start < this.offset) {
            lastStart = start;
            start = this.render(start);
        }
        this.offset = lastStart;
        this.render(this.offset);
    }

    nextChapter() {
        if (this.chapterIndex >= this.book.chapters.length - 1) return;
        this.go(this.chapterIndex + 1);
    }

    prevChapter() {
        if (this.chapterIndex <= 0) return;
        this.go(this.chapterIndex - 1);
    }

    getOffsetY() { return this.offsetY; }
    setOffsetY(y) { this.offsetY = y; }

    getProgress() { return { chapterIndex: this.chapterIndex, offset: this.offset, offsetY: this.offsetY, lineHeight: this.lineHeight }; }
    setProgress(p) { if (!p) return; this.go(p.chapterIndex || 0, p.offset || 0, this.lineHeight === p.lineHeight ? p.offsetY || 0 : 0); }
}
