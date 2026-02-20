export default class Book {
    constructor(text, chapters) {
        this.text = text;
        this.chapters = chapters;
    }

    getChapter(index) {
        if (index < 0 || index >= this.chapters.length) {
            return '';
        }

        var ch = this.chapters[index];
        return this.text.slice(ch.start, ch.end);
    }

    getChapterName(index) {
        if (index < 0 || index >= this.chapters.length) {
            return '';
        }

        return this.chapters[index].name;
    }

    getChapterCount() {
        return this.chapters.length;
    }
}