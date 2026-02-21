import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png__ } from './back-1c1e0aad.js';
import fs from 'fs';

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

var script$1 = {
    name: "FileCard",
    props: {
        node: { type: Object, required: true },
    },
};

var style_0$1 = { "_": {
  "wrapper": {
    "height": "30vh",
    "backgroundColor": "#1a1b1f",
    "borderRadius": "6vh",
    "paddingTop": "3vh",
    "paddingRight": "7vh",
    "paddingBottom": "3vh",
    "paddingLeft": "7vh",
    "alignItems": "center",
    "flexDirection": "row",
    "opacity:active": 0.6
  },
  "icon": {
    "width": "15vh",
    "height": "15vh",
    "marginRight": "6vh"
  },
  "text": {
    "fontSize": "10vh",
    "color": "#e3e3e3"
  }
} };

var __$_require_assets_folder_icon_png__ = "images/6bc56a938378dceb66172c2e90444f54.png";

var __$_require_assets_file_icon_png__ = "images/6a2eb561a9b634d8f865d5fd822b5136.png";

var render$1 = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.node.isDirectory() ?
        __$_require_assets_folder_icon_png__ :
        __$_require_assets_file_icon_png__
    }
  }), _c('scroller', {
    attrs: {
      "scrollDirection": "horizontal"
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.node.name))])])])
};

var staticRenderFns$1=[];
render$1._withStripped = true;
  
const __file$1 = 'src/components/file-card.vue';
const _scopeId$1 = 'data-v-15ac3461';

const _exports$1 = script$1;

_exports$1.render = render$1;
_exports$1.staticRenderFns = staticRenderFns$1;
_exports$1._compiled = true;
_exports$1._scopeId = _scopeId$1;
_exports$1.themes = {};
_exports$1.style = Object.assign({}, style_0$1['_']);
_exports$1.__file = __file$1;

var FileCard = _exports$1;

class FileManager {
    constructor(root = "/userdisk/Favorite") {
        this._stack = root.split('/').filter(Boolean);
        this._version = 0;

        this.loading = true;
        this.error = false;
        this.nodeList = [];

        this._refresh();
    }

    get cwd() {
        return '/' + this._stack.join('/');
    }

    async _refresh() {
        const version = ++this._version;
        this.loading = true;
        this.error = false;

        try {
            const list = await fs.readdir(this.cwd, { withFileTypes: true });
            if (version !== this._version) return;

            this.nodeList = list
                .filter(node =>
                    node.isDirectory() || node.name.endsWith('.txt')
                )
                .sort((a, b) => {
                    if (a.isDirectory() && !b.isDirectory()) return -1;
                    if (!a.isDirectory() && b.isDirectory()) return 1;
                    return a.name.localeCompare(b.name);
                });

        } catch (e) {
            if (version !== this._version) return;
            this.nodeList = [];
            this.error = true;
        }

        this.loading = false;
    }

    chooseFile(index) {
        const node = this.nodeList[index];
        if (!node) return null;

        if (node.isDirectory()) {
            this._stack.push(node.name);
            this._refresh();
            return null;
        }

        return `${this.cwd}/${node.name}`;
    }

    goBack() {
        if (this._stack.length <= 1) return false;

        this._stack.pop();
        this._refresh();
        return true;
    }
}

//

var script = {
    name: 'filemanager',
    components: {
        ButtonColumn,
        IconButton,
        FileCard,
    },
    data() {
        return {
            manager: new FileManager(),
        }
    },
    methods: {
        openLink(link) {
            $falcon.navTo(link);
        },
        home() {
            this.$page.finish();
        },
        back() {
            if (!this.manager.goBack()) {
                this.$page.finish();
            }
        },
        open(index) {
            let path = this.manager.chooseFile(index);

            if (path) {
                $falcon.navTo('reader', { path });
            }
        },
        onShow() {
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
  "file-list": {
    "paddingRight": "7vh"
  },
  "file-card": {
    "marginBottom": "4vh"
  },
  "error": {
    "fontSize": "12vh",
    "textAlign": "center",
    "color": "#7a0f1c"
  }
} };

var __$_require_assets_home_png__ = "images/cfa3abe8a68835c659f0c5c188825870.png";

var render = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('ButtonColumn', [_c('IconButton', {
    attrs: {
      "icon": __$_require_assets_back_png__
    },
    on: {
      "click": _vm.back
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_home_png__
    },
    on: {
      "click": _vm.home
    }
  })], 1), _c('scroller', {
    staticClass: ["scroller"],
    staticStyle: {
      flex: "1"
    },
    attrs: {
      "overScroll": "50px",
      "overFling": "50px"
    }
  }, [_c('scroller', {
    attrs: {
      "scrollDirection": "horizontal"
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.manager.cwd))])]), (_vm.manager.error) ? _c('text', {
    staticClass: ["error"]
  }, [_vm._v("啊勒,出错了喵!")]) : (_vm.manager.loading) ? _c('text', {
    staticClass: ["loading"]
  }, [_vm._v("少女祈祷中...")]) : (_vm.manager.nodeList.length === 0) ? _c('text', {
    staticClass: ["loading"]
  }, [_vm._v("什么也没有喵...")]) : _c('div', {
    staticClass: ["file-list"]
  }, _vm._l((_vm.manager.nodeList), function(node, index) {
    return _c('FileCard', {
      key: node.name,
      staticClass: ["file-card"],
      attrs: {
        "node": node
      },
      on: {
        "click": function($event) {
          return _vm.open(index)
        }
      }
    })
  }), 1)])], 1)
};

var staticRenderFns=[];
render._withStripped = true;
  
const __file = 'src/pages/filemanager/filemanager.vue';
const _scopeId = 'data-v-0d4271ff';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

export { _exports as default };
