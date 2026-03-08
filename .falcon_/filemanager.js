import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png_base64__ } from './back-aa1a3b26.js';
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

const img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+oCDw0sISQoOdEAAAgkSURBVHja7Z1dbBxXFcfPmZ31x5KQirR21Nr74Xi7TiPVBayQpdCGByh1KydtqCsekKiE/ABC5QG1QjzEgqgtRYggBJVaCQMVAluFxE0TFKoKN1GTCtlK4+Ikm/hjd7YLKA6JgThe7+zcw4uLxJd8Zz27M2v/fy9+ud6duf//Pefee2buEgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWCdwNT40k8lsbW5ufpiZP0ZEd4hICzOHa3VTIuIQ0VUi+jMRnSqVSm90dna+B7mrbIC5ubm7DcM4yMy9zBwKyk2uGOKoUuo78Xj8bcjusQHGxsYaE4nEIWYeYGYjqDcrIkpEXiyVSk8lk8l/QH4PDDA1NdW6efPmw8ycrpebFpHLSqn+eDz+DgywBi5evLgpEom8xcx31+G9L4vI09Fo9Acb2QAVh+vBwUGORCIv16n4RESNzHwon8//anx8/IOIAC6xLKufmYfXST9ky+Xy44lE4g+IABqMjIyEiejgOuqHuGmaJy3LehIRQG+512ea5uh67BCl1EipVPpKMpm8CgP8H/L5/E+I6AkXa/DLzLxYy/xORMmVv5WwICI/V0r9XkT+pJRyqnWhoVBo0bbtgl/L0ooMYFnWe8x8h4b4h5eXlwf8GE0ru5HPMPNAnQzGv4nI70RkdGFh4XB3d/fNQBpgZGQkvHv37uJqGz4ikikUCvek0+mir7O7bPbxUCj0IhHVzUxfRAoicmBubu6ne/bscQJlgJmZmfaGhgZL4yaej0ajTwehQzOZTLy5uXmYmXfVWYo+VSqV9m/fvn0+MKsApdQmzaZ/CUovplKpbKFQuJ+IXqgzA3wyHA6fzmQy8UAtA+uRdDpdbG9v/7LjOI8S0ULdzNKZOyORyLFqbVZtGAP8a8Efjx+2bXuXiJyto8u+q6Wl5QUYwCM6OjouFwqFjyulniMiu04u+/O5XC4NA3iYEmKx2DfK5XKPiJwQEQl4KmBmfgYG8JhEIjEZjUY/q5TaISLfE5FJEVEBvdz7p6en27z8QJPA+3ODDBF9nYjowoULH4pEIl0ichsz31rNp5tEpJWZ9zHzR3SigGmafUT0YxigiuzYseMaEZ2u1feNj48/29ra+hIRfVHDBLu8NIABuf2np6envLi4+FUiWnXX1DCM25EC1iFdXV03crncs6vVWEQkDwOsU2Kx2Ldq/Z1IARscGAAGADAAgAEADABgAAADgA2F7xtB2Wy2yzCMvUS0i4hambkJsugjIleIKK+Uetu27VfcPl7umwFmZ2eTpmkeIqIHmZkhZWW833WhUGjAMIwfWpb1o0KhcED3aWxfUkAul9tvmuY7KwdJQHzvzPABZn6qra1tYnp6ensgDZDNZvcx8wgzRyBZ1birsbHx9UuXLt0eKAPMzMy0G4bxcpBPEVlHJJqamn4ZKAOEw+HnmHkTtKlZSrjPsqzHAmGA2dnZFmb+HGSpOU8GwgChUOgxImqAHjUnPTU11eq7AVbW+qD2acCIRCLdvu4DTE5O3kJEezSaLhPRHyGbHiKymZnv1Ii+t/hqgC1btjxERGGNGzoWjUb3Q1o9LMv6GhF9f7V2SinD1xTAzI9oNj0CWV2xT6eR4zjv+maAM2fONBHRAxqjv7y4uHgMmuqRyWS2EtG9Gv26NDExcck3A2zbtu0zmmv/N1deyAAaNDY29jHzqimcmV/v7++3fTOAaZpaYUpERiGrq2W11qrKcZxR3/YBxsbGQiLysE7bYrF4FLLqce7cuYiIfFpjUDmO4xz1zQDxePwTzHybRtOJVCqVhbTaq6oHNItpb612vlBVDcDMWuFfKYXw765f93rVr1U1gO7un+M4WP65SKvM/JBOW9u2j/hmABG5h4gSGk2zHR0d70Ja7bR6HzPfqtH/k8lkctY3A+i6lIh+A1ld9WufZlOttFpNA2z1KkwB92lVRI74agDNi7xqWdZpyKpHLpf7sE5aFRFraGjobOANQESj1T4LdyPO/onoyODgoNSFASCrKzzfVfXNACJy8/r1629AUz0ymUycmbs1+vXa/Pz8ycAbgIh+W6sz8dcDzc3Nj2gOrNd6enrK9WAAhH937K1Gv/piABEpLy0tHYem2uFfu/Z/48aNE4E3ABG9mUql/gpp9XBT+9+5c+diPUQAhH8XeFX7D4wBUPvXx8vaf1AMgNq/C7ys/QfCAKj9u8PL2n8gDIDavz5e1/6DYADU/l3gde3fdwOIyK8hq/fhn9bwQk1NDVAul5H/3YhjGH2aA2u0ZgYIh8OqwtE/j9q/i1yZzWo9Uuem9u+JAZaWlir9GdNXUft3Nfr3aTbVrv17YoDh4eHrpPHTJv8DhH931OSNqoqOaMvn8+NE9FEX4b9cLpc/JSJL0FVr9G81TfOERr9eu3LlSqub8u9/UtH5AEqpVw3D0DYAM5vhcPgUpPV8VfXaWsSveBVg2/YrQf+lzQ3CmtNqRQbo7Ow8z8zD6H9fR/9Nt7V/T/cBisXiNyucDAIPYOZht7V/Tw2QTCZnlVJfQirwhZLjOM97MuFcyz/HYrFfENG3oUdtUUodjMfjF303ABFRNBo9oJQaIKISpKmJ+D8bGho66NmS04sPicViL9m2fa+InIREVcNWSh0YGhp6Yi07f/81l/D6KrPZ7IOGYXyBmXuJaAt0W/tsn5mHi8Xid5PJ5AXPJ5PVuvDjx483dHV1pQzDaCOiVsMwcE6wu1D/dyKaO3/+/Nne3l6kVwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDv/BM0WDYx0q/MywAAAABJRU5ErkJggg==";
  var __$_require_assets_folder_icon_png_base64__ = img$2;

const img$1 = "data:image/png;base64,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";
  var __$_require_assets_file_icon_png_base64__ = img$1;

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
        __$_require_assets_folder_icon_png_base64__ :
        __$_require_assets_file_icon_png_base64__
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.node.name))])])
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

const img = "data:image/png;base64,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";
  var __$_require_assets_home_png_base64__ = img;

var render = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('ButtonColumn', [_c('IconButton', {
    attrs: {
      "icon": __$_require_assets_back_png_base64__
    },
    on: {
      "click": _vm.back
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_home_png_base64__
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
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
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
