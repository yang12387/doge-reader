import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png_base64__ } from './back-d53c5241.js';
import { H as HistoryCard } from './history-card-83d1effb.js';
import { S as Setting } from './Setting-07631832.js';
import { _ as __$_require_assets_delete_png_base64__ } from './delete-73cf201b.js';
import 'storage';

//

const setting = new Setting();

var script = {
    name: 'History',
    components: {
        ButtonColumn,
        IconButton,
        HistoryCard,
    },
    data() {
        return {
            history: [],
        }
    },
    methods: {
        back() {
            this.$page.finish();
        },
        clear() {
            setting.clearItems().then(() => {
                this.history = [];
            });
        },
        open(path, progress) {
            $falcon.navTo('reader', { path, progress: JSON.stringify(progress) });
        },
        onShow() {
            setting.getAllItems().then(items => {
                this.history = items;
            });
        }
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
  "list": {
    "paddingRight": "7vh",
    "flexDirection": "column-reverse"
  },
  "card": {
    "marginBottom": "4vh"
  }
} };

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
      "icon": __$_require_assets_delete_png_base64__
    },
    on: {
      "click": _vm.clear
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
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("历史记录")]), _c('text', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.history.length === 0),
      expression: "history.length === 0"
    }],
    staticClass: ["loading"]
  }, [_vm._v("什么也没有喵...")]), _c('div', {
    staticClass: ["list"]
  }, _vm._l((_vm.history), function(item, index) {
    return _c('HistoryCard', {
      key: index,
      staticClass: ["card"],
      attrs: {
        "item": item,
        "name": item.path.split('/').pop(),
        "time": item.time
      },
      on: {
        "click": function($event) {
          return _vm.open(item.path, item.progress)
        }
      }
    })
  }), 1)])], 1)
};

var staticRenderFns=[];
render._withStripped = true;
  
const __file = 'src/pages/history/history.vue';
const _scopeId = 'data-v-15c64676';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

export { _exports as default };
