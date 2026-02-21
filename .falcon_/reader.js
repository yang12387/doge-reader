import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png__ } from './back-1c1e0aad.js';
import fs from 'fs';
import { S as Setting } from './Setting-5fce32b4.js';
import 'storage';

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
    props: {
        text: { type: String, required: true },
        show: { type: Boolean, default: false }
    },
};

var style_0$1 = { "_": {
  "toast": {
    "position": "fixed",
    "width": "100%",
    "height": "20vh",
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
    "fontSize": "8vh"
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

    setFont(vh) { this.fontSize = vh; this.render(this.offset); }
    setLine(vh) { this.lineHeight = vh; this.render(this.offset); }
    setViewport(w, h) { this.viewportWidth = w; this.viewportHeight = h; this.render(this.offset); }
    setMode(mode) { this.mode = mode; this.render(this.offset); }

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
    },
    data() {
        return {
            loading: true,
            showMenu: false,
            reader: null,
            toastShow: false,
        }
    },
    methods: {
        back() {
            setting.addItem(this.$page.options.path, this.reader.getProgress()).then(() => {
                this.$page.finish();
            });
        },
        love() {
            setting.addItem(this.$page.options.path, this.reader.getProgress(), 'favorite').then(() => {
                this.toastShow = true;
                setTimeout(() => {
                    this.toastShow = false;
                }, 1000);
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
        },
        nextChapter() {
            this.reader.nextChapter();
            this.$page.$dom.scrollToElement(this.$refs['target'], { offset: 0 });
        },
        switchMenu() {
            this.showMenu = !this.showMenu;
        },
        loadChapter(index) {
            this.reader.loadChapter(index);
            this.showMenu = false;
        },
        onShow() {
            const parser = new BookParser(this.$page.options.path);
            parser.load().then(book => {
                this.reader = new Reader(book, {
                    mode: 'page',
                    fontSize: 10,
                    lineHeight: 14,
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
            });

            this._backpressed = () => {
                this.back();
            };
            this.$page.$npage.setSupportBack(false);
            this.$page.$npage.on("backpressed", this._backpressed);
        },
        onHide() {
            this.$page.$npage.setSupportBack(true);
            this.$page.$npage.off("backpressed", this._backpressed);
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
  "mask": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": 0,
    "height": "100vh",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  "mask-open": {
    "width": "100vw"
  },
  "menu": {
    "position": "absolute",
    "right": 0,
    "top": 0,
    "width": "80vw",
    "height": "100vh",
    "paddingTop": "8vh",
    "paddingRight": "8vh",
    "paddingBottom": "8vh",
    "paddingLeft": "18vh",
    "backgroundColor": "#080a0c",
    "transform": "translateX(100%)",
    "transitionProperty": "transform",
    "transitionDuration": 300,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "menu": {
      "property": "transform",
      "duration": 300,
      "timingFunction": "ease-in-out"
    }
  },
  "menu-open": {
    "transform": "translateX(0)"
  },
  "menu-scroller": {
    "height": "100%"
  },
  "lower-title": {
    "marginBottom": "6vh",
    "fontSize": "10vh",
    "color": "#8e918f"
  },
  "button-line": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginTop": "8vh",
    "marginRight": "8vh",
    "marginBottom": "8vh",
    "marginLeft": 0
  }
} };

var __$_require_assets_love_png__ = "images/221f2a6a5dedecaefd6ab73db82d676e.png";

var __$_require_assets_menu_png__ = "images/3951d363b86ba932375d1b2952ad99ff.png";

var __$_require_assets_next_png__ = "images/f3ca481ecf4c5332a4e48d0a777a42ca.png";

var render = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["container"]
  }, [_c('ButtonColumn', [_c('IconButton', {
    attrs: {
      "icon": __$_require_assets_back_png__
    },
    on: {
      "click": _vm.back
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_love_png__
    },
    on: {
      "click": _vm.love
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_menu_png__
    },
    on: {
      "click": _vm.switchMenu
    }
  })], 1), (_vm.loading) ? _c('div', {
    staticClass: ["loading-area"]
  }, [_c('text', {
    staticClass: ["loading"]
  }, [_vm._v("少女祈祷中...")])]) : (_vm.reader.mode === 'page') ? _c('div', {
    staticStyle: {
      flex: "1"
    }
  }, [_c('text', {
    staticClass: ["content"]
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
  })]) : (_vm.reader.mode === 'scroll') ? _c('scroller', {
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
  }, [_c('text', {
    ref: "target",
    staticClass: ["content"]
  }, [_vm._v(_vm._s(_vm.reader.content))]), _c('div', {
    staticClass: ["button-line"]
  }, [_c('IconButton', {
    attrs: {
      "icon": __$_require_assets_back_png__
    },
    on: {
      "click": _vm.prevChapter
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_next_png__
    },
    on: {
      "click": _vm.nextChapter
    }
  })], 1)])]) : _vm._e()], 1), _c('div', {
    staticClass: ["mask"],
    class: {
      'mask-open': _vm.showMenu
    },
    on: {
      "click": _vm.switchMenu
    }
  }), (!_vm.loading) ? _c('div', {
    staticClass: ["menu"],
    class: {
      'menu-open': _vm.showMenu
    }
  }, [_c('scroller', {
    staticClass: ["menu-scroller"]
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
  })], 2)]) : _vm._e(), _c('Toast', {
    attrs: {
      "text": "书签已保存",
      "show": _vm.toastShow
    }
  })], 1)
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
