import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png_base64__ } from './back-aa1a3b26.js';
import fs from 'fs';
import { S as Setting } from './Setting-f0074df3.js';
import 'storage';

//
//
//
//
//
//
//
//

var script$3 = {
    name: 'Drawer',
    data() {
        return {
            showDrawer: false
        }
    },
    created() {
        this.onDrawer = (e) => {
            this.showDrawer = e.data.show;
        };

        $falcon.on('drawer', this.onDrawer);
    },
    beforeDestroy() {
        $falcon.off('drawer', this.onDrawer);
    },
    methods: {
        closeDrawer() {
            this.showDrawer = false;
        }
    }
};

var style_0$3 = { "_": {
  "container": {
    "width": "100vw",
    "height": "100vh",
    "flexDirection": "row"
  },
  "title": {
    "marginTop": "10vh",
    "marginBottom": "8vh",
    "color": "#8e918f",
    "fontSize": "12vh",
    "lineHeight": "15vh"
  },
  "loading": {
    "fontSize": "12vh",
    "textAlign": "center",
    "color": "#8e918f"
  },
  "link": {
    "marginTop": 0,
    "marginRight": "1vh",
    "marginBottom": 0,
    "marginLeft": "1vh",
    "color": "#0842a0",
    "fontSize": "10vh",
    "textDecoration": "underline",
    "opacity:active": 0.6
  },
  "mask": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "width": 0,
    "height": "100vh",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  "mask-open": {
    "width": "100vw"
  },
  "drawer": {
    "position": "absolute",
    "right": 0,
    "top": 0,
    "width": "80vw",
    "height": "100vh",
    "paddingTop": 0,
    "paddingRight": "8vh",
    "paddingBottom": 0,
    "paddingLeft": "18vh",
    "backgroundColor": "#080a0c",
    "transform": "translateX(100%)",
    "transitionProperty": "transform",
    "transitionDuration": 300,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "drawer": {
      "property": "transform",
      "duration": 300,
      "timingFunction": "ease-in-out"
    }
  },
  "drawer-open": {
    "transform": "translateX(0)"
  }
} };

var render$3 = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["mask"],
    class: {
      'mask-open': _vm.showDrawer
    },
    on: {
      "click": _vm.closeDrawer
    }
  }, [_c('div', {
    staticClass: ["drawer"],
    class: {
      'drawer-open': _vm.showDrawer
    }
  }, [_vm._t("default")], 2)])
};

var staticRenderFns$3=[];
render$3._withStripped = true;
  
const __file$3 = 'src/components/drawer.vue';
const _scopeId$3 = 'data-v-e3143afe';

const _exports$3 = script$3;

_exports$3.render = render$3;
_exports$3.staticRenderFns = staticRenderFns$3;
_exports$3._compiled = true;
_exports$3._scopeId = _scopeId$3;
_exports$3.themes = {};
_exports$3.style = Object.assign({}, style_0$3['_']);
_exports$3.__file = __file$3;

var Drawer = _exports$3;

//
//
//
//
//
//

var script$2 = {
    name: "MenuCard",
    props: {
        text: { type: String, required: true },
        active: { type: Boolean, default: false }
    }
};

var style_0$2 = { "_": {
  "card": {
    "marginBottom": "5vh",
    "paddingTop": "6vh",
    "paddingRight": "8vh",
    "paddingBottom": "6vh",
    "paddingLeft": "8vh",
    "borderRadius": "8vh",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#1a1b1f"
  },
  "card-active": {
    "backgroundColor": "#004a77"
  },
  "text": {
    "color": "#e3e3e3",
    "fontSize": "10vh"
  }
} };

var render$2 = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["card"],
    class: {
      'card-active': _vm.active
    },
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.text))])])
};

var staticRenderFns$2=[];
render$2._withStripped = true;
  
const __file$2 = 'src/components/menu-card.vue';
const _scopeId$2 = 'data-v-2a497844';

const _exports$2 = script$2;

_exports$2.render = render$2;
_exports$2.staticRenderFns = staticRenderFns$2;
_exports$2._compiled = true;
_exports$2._scopeId = _scopeId$2;
_exports$2.themes = {};
_exports$2.style = Object.assign({}, style_0$2['_']);
_exports$2.__file = __file$2;

var MenuCard = _exports$2;

//
//
//
//
//
//

var script$1 = {
    name: 'Toast',
    data() {
        return {
            show: false,
            text: ''
        }
    },
    created() {
        this.onToast = (e) => {
            this.text = e.data.text;
            this.show = true;

            setTimeout(() => {
                this.show = false;
            }, 1000);
        };

        $falcon.on('toast', this.onToast);
    },
    beforeDestroy() {
        $falcon.off('toast', this.onToast);
    }
};

var style_0$1 = { "_": {
  "toast": {
    "position": "fixed",
    "width": "100%",
    "height": "22vh",
    "left": 0,
    "bottom": 0,
    "backgroundColor": "#004a77",
    "justifyContent": "center",
    "alignItems": "center",
    "transform": "translateY(100%)",
    "transitionProperty": "transform",
    "transitionDuration": 300,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "toast": {
      "property": "transform",
      "duration": 300,
      "timingFunction": "ease-in-out"
    }
  },
  "toast-show": {
    "transform": "translateY(0)"
  },
  "toast-text": {
    "color": "#c2e7ff",
    "fontSize": "10vh"
  }
} };

var render$1 = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["toast"],
    class: {
      'toast-show': _vm.show
    }
  }, [_c('text', {
    staticClass: ["toast-text"]
  }, [_vm._v(_vm._s(_vm.text))])])
};

var staticRenderFns$1=[];
render$1._withStripped = true;
  
const __file$1 = 'src/components/toast.vue';
const _scopeId$1 = 'data-v-f2061272';

const _exports$1 = script$1;

_exports$1.render = render$1;
_exports$1.staticRenderFns = staticRenderFns$1;
_exports$1._compiled = true;
_exports$1._scopeId = _scopeId$1;
_exports$1.themes = {};
_exports$1.style = Object.assign({}, style_0$1['_']);
_exports$1.__file = __file$1;

var Toast = _exports$1;

class Book {
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

class BookParser {
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
        var regex = /^(第[零一二三四五六七八九十百千万\d]{1,10}[部章回节卷][^\n]{0,40}|序章?|前言|楔子|引子|Chapter\s+[0-9IVXLCDM]+[^\n]{0,40}|Part\s+[0-9IVXLCDM]+[^\n]{0,40}|Prologue|Foreword)\s*$/gim;

        var matches = [];
        var m;

        while ((m = regex.exec(this.text)) !== null) {

            var name = m[0].trim();

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

        for (var i = 0; i < matches.length; i++) {

            var start = matches[i].start;
            var end = (i + 1 < matches.length)
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
        var last = this.chapters[this.chapters.length - 1];
        if (last.end - last.start < 100) {
            this.chapters.pop();
        }
    }

    _fallback() {

        var size = 3000;
        var cursor = 0;
        var index = 1;

        while (cursor < this.text.length) {

            var end = cursor + size;
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

class Reader {
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
        this.content = '';
        this._pageEndOffset = 0;

        if (options.progress) {
            this.go(
                options.progress.chapterIndex || 0,
                options.progress.offset || 0,
                options.progress.mode
            );
        } else {
            this.loadChapter(0);
        }
    }

    loadChapter(index) {
        if (index < 0 || index >= this.book.chapters.length) return;
        this.chapterIndex = index;
        this.chapterText = this.book.getChapter(index);
        this.offset = 0;
        this.render(this.offset);
    }

    go(chapterIndex, offset = 0, mode = this.mode) {
        if (chapterIndex < 0 || chapterIndex >= this.book.chapters.length) return;
        this.mode = mode;
        this.chapterIndex = chapterIndex;
        this.chapterText = this.book.getChapter(chapterIndex);
        this.offset = Math.max(0, offset);
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
            charsProcessed++; // 换行
        }

        this._pageEndOffset = charsProcessed;
        this.content = pageText;
        return charsProcessed;
    }

    next() {
        if (this.mode !== 'page') return;

        const endOffset = this.render(this.offset);

        if (endOffset >= this.chapterText.length) {
            this.loadChapter(this.chapterIndex + 1);
        } else {
            this.offset = endOffset;
            this.render(this.offset);
        }
    }

    prev() {
        if (this.mode !== 'page') return;

        if (this.offset <= 0) {
            const prevIndex = this.chapterIndex - 1;
            if (prevIndex < 0) return; // 第一章
            this.chapterIndex = prevIndex;
            this.chapterText = this.book.getChapter(prevIndex);

            // 计算上一章最后一页 offset
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

        // 当前章节上一页
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

        this.chapterIndex++;
        this.chapterText = this.book.getChapter(this.chapterIndex);
        this.offset = 0;

        this.render(this.offset);
    }

    prevChapter() {
        if (this.chapterIndex <= 0) return;

        this.chapterIndex--;
        this.chapterText = this.book.getChapter(this.chapterIndex);
        this.offset = 0;

        this.render(this.offset);
    }

    getProgress() { return { chapterIndex: this.chapterIndex, offset: this.offset }; }
    setProgress(p) { if (!p) return; this.go(p.chapterIndex || 0, p.offset || 0); }
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const env = $falcon.env;
const w = env.deviceWidth;
const h = env.deviceHeight;

const setting = new Setting();

var script = {
    name: 'reader',
    components: {
        ButtonColumn,
        IconButton,
        MenuCard,
        Toast,
        Drawer
    },
    data() {
        return {
            loading: true,
            reader: null,
            isLarger: false
        }
    },
    async created() {
        const parser = new BookParser(this.$page.options.path);
        const book = await parser.load();

        this.isLarger = await setting.isLargerFont();

        this.reader = new Reader(book, {
            mode: await setting.getMode() || 'page',
            fontSize: this.isLarger ? 12 : 10,
            lineHeight: this.isLarger ? 16: 14,
            viewportWidth: w - 0.39 * h,
            viewportHeight: h
        });

        if (this.$page.options.progress) {
            this.reader.setProgress(JSON.parse(this.$page.options.progress));
        } else {
            setting.getItem(this.$page.options.path).then(progress => {
                if (progress) {
                    this.reader.setProgress(progress);
                }
            });
        }

        this.loading = false;
    },
    methods: {
        back() {
            this.$page.finish();
        },
        love() {
            setting.addItem(this.$page.options.path, this.reader.getProgress(), 'favorite').then(() => {
                $falcon.trigger('toast', { text: '书签已保存' });
            });
        },
        prev() {
            this.reader.prev();
        },
        next() {
            this.reader.next();
        },
        prevChapter() {
            this.reader.prevChapter();
            this.loading = true;
            this.$page.$dom.scrollToElement(this.$refs['end'], { offset: 0 });
            setTimeout(() => {
                this.loading = false;
            }, 500);
        },
        nextChapter() {
            this.reader.nextChapter();
            this.loading = true;
            this.$page.$dom.scrollToElement(this.$refs['start'], { offset: 0 });
            setTimeout(() => {
                this.loading = false;
            }, 500);
        },
        openMenu() {
            $falcon.trigger('drawer', { show: true });
        },
        loadChapter(index) {
            this.reader.loadChapter(index);
            $falcon.trigger('drawer', { show: false });
        },
        onHide() {
            setting.addItem(this.$page.options.path, this.reader.getProgress());
        },
    }
};

var style_0 = { "_": {
  "container": {
    "width": "100vw",
    "height": "100vh",
    "flexDirection": "row"
  },
  "title": {
    "marginTop": "10vh",
    "marginBottom": "8vh",
    "color": "#8e918f",
    "fontSize": "12vh",
    "lineHeight": "15vh"
  },
  "loading": {
    "fontSize": "12vh",
    "textAlign": "center",
    "color": "#8e918f"
  },
  "link": {
    "marginTop": 0,
    "marginRight": "1vh",
    "marginBottom": 0,
    "marginLeft": "1vh",
    "color": "#0842a0",
    "fontSize": "10vh",
    "textDecoration": "underline",
    "opacity:active": 0.6
  },
  "loading-area": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "content": {
    "width": "100%",
    "fontSize": "10vh",
    "lineHeight": "14vh",
    "marginTop": "1.5vh",
    "color": "#e3e3e3"
  },
  "content-larger": {
    "fontSize": "12vh",
    "lineHeight": "16vh"
  },
  "prev": {
    "position": "absolute",
    "width": "50%",
    "height": "100%",
    "top": 0,
    "left": 0
  },
  "next": {
    "position": "absolute",
    "width": "50%",
    "height": "100%",
    "top": 0,
    "left": "50%"
  },
  "lower-title": {
    "marginTop": "8vh",
    "marginRight": 0,
    "marginBottom": "6vh",
    "marginLeft": 0,
    "fontSize": "10vh",
    "color": "#8e918f"
  }
} };

const img$2 = "data:image/png;base64,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";
  var __$_require_assets_love_png_base64__ = img$2;

const img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+oCFAILH7PIAbwAAAIRSURBVHja7dyxahRRFAbgsxt2ZwtTWmixqYYENk+QVILBF9BKbH0KW3ttrbXSBxBRq7yBKTYsIbCFNul0l7sEZmxMq4bMwA33+x5gGOY/995hBv4IAAAAAAAAAAAAAAAAbqVBnxdfLBbbo9HoMCLuDYfDkcf9/5qmuYyIHyml4729vV+3agAWi8V2VVUvB4PB84ioxHkjqW3bN5vN5kVd1z+zH4Czs7O74/H4a0Tsy65TJymlB3VdX3R50WHXdzkej98Jvxf7VVW97fqinQ7A+fn5UUQcyaqn83oweLRcLh9mOwBbW1tPxNSvtm0f53wE7Iqo911gN+cBaEXU/yaQ8wCcyqf3I+A05wF4L6Lefch2AKbT6eeI+CSj3lb/x52dnS9ZfwdIKT2NiBNxdR7+t81m8yzr7wAREXVdX6SUDpqmeR0RSXQ3X1NN07xar9cHXX8FjOj5Z9B8Pr8zmUwOI+K+n0HX8+dn0PfVanU8m81WnggAAAAAAAAAAPBv+gEypR+AK/oBiAj9AMXTD1D8C5t+APQD2AX0A5S+CeQ8APoB+j8C9AMUTj9AwatfP0DB4esHKJR+gBLpBwAAAAAAAAAAAK5PP0Cm9ANwRT8AEaEfoHj6AYp/YdMPgH4Au4B+gNI3gZwHQD9A/0eAfoDC6QcoePXrByg4fP0AhdIPUCL9AAAAAAAAAAAAAAAAAPzVbw/fOCIHtnEgAAAAAElFTkSuQmCC";
  var __$_require_assets_menu_png_base64__ = img$1;

const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+oCFAsFCKFJknoAAAPwSURBVHja7d1Na1xVGMDx57k3k/HO2IV1EaVIJiQhBjHTghTiRjStlW5atfgl/AC6dSEFdwr9Am59a11YXyqi4kIMKGJMJkMydxISXDjOTGASM8yZ46aLGmpbewfx3Of/W4aZMMPzzzlnMm8iAAAAAAAAAAAAAAAAAAAAAAAACJLm4U7UarVKkiSnvffHvPc73W73m2q1us94cx7AxsbGE4VC4W1VXbr15977fe/9O7u7u28sLi7+yZhzGECaps9GUfSxqj74T5fx3n/f6/XOz8/P/8GocxTA2trao6VS6RdVPX63y3rvf+z1emeI4PaiEG90kiSv3cvwRURU9VS5XL6xurp6nHHnJABVvfQvL08EeQmgXq8fU9UT9xHNqXK5/GWtVnuYsQccQL/fH2ZYOU4mSXKDCAI/BG5tbW2p6mP3e30OhuGfAd7LeH3OBCEHsLe395b3/nciMLoFiIikafpMFEXXVTXJ8nusbwdRqDe8Uql87Zy74L0/GMFKYPbRQfBPBjUajbNxHF8bwUrw08HBwZm5ubkWARBBiwCIoEUARNAiACJoEQAR5DaCKI93ampq6gvn3MURPETM/XMHKjnWaDSej+P4KiuB0QCIwOgWcGQ7+Nw5d1FEMr04NK/bQe5XgFtXgrGxsWsi8gArgcEAiIAAiIAAiIAAiIAAiIAAiIAAiIAAiIAArEdAAEekaXoujuOrViKIGPnfVSqVz5xzL4nIYaa/LNWTpVLp0+Xl5YQAwovgunPuxawRiMhTExMTV9gCAtVsNs9HUfShiBQzbAXDfr//5MzMzK+sAIGZnJz8ZDgcZtoOVDUqFAovswUEHIFz7oJkeD2Bqj5OAGHLulX6/+sdG2O2/8k5YJ0VwPAhcDAYfEAABod/c/9/d3p6eoUtwODwvfc/tNvtV/k/QEDSNH0hjuOPJPu/goP44AkCMDx8AjA+fAIwPnwCMD588wFYH77pABi+4QAYvuEARviSr1x8wKQyfLvDNxUAwzccAMM3HADDNxwAwzccAMM3HADDNxwAwzccAMM3HADDNxwAwzccAMM3HADDzy7Y9wU0m82lOI4zf5qHiCx3Op3nrH5tXJArQL1eP1EsFn++16+Qv9Pw2+322YWFhY4YFeQKUCwWX2f4hgNQ1UsMfzSCe2vYysrKQyLySMYD3zmGH/ghkNO+4UPg9vb2byIywbJvdAXw3r/P8A0HcHh4eFlEOgzfaACzs7M7g8HgFe997y4rxXcMP6eHwJtfDvm09/6r2wy+JyJvbm5uLjH8HB4Cj1pfX58aHx8/LSJlEdnpdrvfVqvVfcYLAAAAAAAAAAAAAAAAAAAAAACA3PoLh4REIPgK0N4AAAAASUVORK5CYII=";
  var __$_require_assets_next_png_base64__ = img;

var render = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["container"]
  }, [_c('ButtonColumn', [_c('IconButton', {
    attrs: {
      "icon": __$_require_assets_back_png_base64__
    },
    on: {
      "click": _vm.back
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_love_png_base64__
    },
    on: {
      "click": _vm.love
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_menu_png_base64__
    },
    on: {
      "click": _vm.openMenu
    }
  })], 1), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: ["loading-area"]
  }, [_c('text', {
    staticClass: ["loading"]
  }, [_vm._v("少女祈祷中...")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.reader.mode === 'page' && !_vm.loading),
      expression: "reader.mode === 'page' && !loading"
    }],
    staticStyle: {
      flex: "1"
    }
  }, [_c('text', {
    staticClass: ["content"],
    class: {
      'content-larger': _vm.isLarger
    }
  }, [_vm._v(_vm._s(_vm.reader.content))]), _c('div', {
    staticClass: ["prev"],
    on: {
      "click": _vm.prev
    }
  }), _c('div', {
    staticClass: ["next"],
    on: {
      "click": _vm.next
    }
  })]), _c('scroller', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.reader.mode === 'scroll' && !_vm.loading),
      expression: "reader.mode === 'scroll' && !loading"
    }],
    staticStyle: {
      flex: "1"
    },
    attrs: {
      "overScroll": "50px",
      "overFling": "50px"
    }
  }, [_c('div', {
    staticStyle: {
      minHeight: "100vh"
    }
  }, [_c('div', {
    staticStyle: {
      margin: "8vh 0 8vh 0"
    }
  }, [_c('IconButton', {
    attrs: {
      "icon": __$_require_assets_back_png_base64__
    },
    on: {
      "click": _vm.prevChapter
    }
  })], 1), _c('text', {
    ref: "start",
    staticClass: ["content"],
    class: {
      'content-larger': _vm.isLarger
    }
  }, [_vm._v(_vm._s(_vm.reader.content))]), _c('div', {
    ref: "end",
    staticStyle: {
      margin: "8vh 6vh 8vh 0",
      alignItems: "flex-end"
    }
  }, [_c('IconButton', {
    attrs: {
      "icon": __$_require_assets_next_png_base64__
    },
    on: {
      "click": _vm.nextChapter
    }
  })], 1)])])], 1), _c('Drawer', [_c('scroller', {
    staticStyle: {
      height: "100%"
    },
    attrs: {
      "overScroll": "50px",
      "overFling": "50px"
    }
  }, [_c('text', {
    staticClass: ["lower-title"]
  }, [_vm._v("章节")]), _vm._l((_vm.reader.book.getChapterCount() - 1), function(index) {
    return _c('MenuCard', {
      key: index,
      attrs: {
        "text": _vm.reader.book.getChapterName(index),
        "active": index === _vm.reader.chapterIndex
      },
      on: {
        "click": function($event) {
          return _vm.loadChapter(index)
        }
      }
    })
  })], 2)]), _c('Toast')], 1)
};

var staticRenderFns=[];
render._withStripped = true;
  
const __file = 'src/pages/reader/reader.vue';
const _scopeId = 'data-v-7523243b';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

export { _exports as default };
