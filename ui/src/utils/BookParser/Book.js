export default class Book {
    constructor(text, chapters) {
        this.text = text;
        this.chapters = chapters;
    }

    getChapter(index) {
        if (index < 0 || index >= this.chapters.length) {
            return '';
        }

        let ch = this.chapters[index];
        return this.text.slice(ch.start, ch.end);
    }

    getChapterTitle(index) {
        if (index < 0 || index >= this.chapters.length) {
            return '';
        }

        return this.chapters[index].title;
    }

    getChapterCount() {
        return this.chapters.length;
    }
}