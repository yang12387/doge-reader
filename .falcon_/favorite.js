import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png__ } from './back-1c1e0aad.js';
import { H as HistoryCard } from './history-card-013636db.js';
import { S as Setting } from './Setting-5fce32b4.js';
import { _ as __$_require_assets_delete_png__ } from './delete-9180b5e9.js';
import 'storage';

//

const setting = new Setting();

var script = {
    name: 'Favorite',
    components: {
        ButtonColumn,
        IconButton,
        HistoryCard,
    },
    data() {
        return {
            favorite: [],
        }
    },
    methods: {
        back() {
            this.$page.finish();
        },
        clear() {
            setting.clearItems('favorite').then(() => {
                this.favorite = [];
            });
        },
        open(path, progress) {
            $falcon.navTo('reader', { path, progress: JSON.stringify(progress) });
        },
        onShow() {
            setting.getAllItems('favorite').then(items => {
                this.favorite = items;
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
      "icon": __$_require_assets_back_png__
    },
    on: {
      "click": _vm.back
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_delete_png__
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
  }, [_vm._v("书签")]), _c('text', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.favorite.length === 0),
      expression: "favorite.length === 0"
    }],
    staticClass: ["loading"]
  }, [_vm._v("什么也没有喵...")]), _c('div', {
    staticClass: ["list"]
  }, _vm._l((_vm.favorite), function(item, index) {
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
  
const __file = 'src/pages/favorite/favorite.vue';
const _scopeId = 'data-v-aa51e94a';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

export { _exports as default };
