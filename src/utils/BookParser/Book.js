export default class Book {
    constructor(text, chapters) {
        this.text = text;
        this.chapters = chapters;  // [{ title, start, end }]
    }

    getChapter(index) {
        const ch = this.chapters[index];
        return this.text.slice(ch.start, ch.end);
    }
}