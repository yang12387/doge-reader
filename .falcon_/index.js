import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png_base64__ } from './back-aa1a3b26.js';
import { H as HistoryCard } from './history-card-83d1effb.js';
import { S as Setting } from './Setting-f0074df3.js';
import 'storage';

//
//
//
//
//
//
//

var script$1 = {
    name: 'MainButton',
    props: {
        text: { type: String, required: true },
        icon: { type: String, required: true },
        color: { type: Array, required: true},
    },
};

var style_0$1 = { "_": {
  "button": {
    "borderRadius": "12vh",
    "justifyContent": "center",
    "alignItems": "center",
    "opacity:active": 0.6
  },
  "icon": {
    "width": "100%",
    "height": "40%",
    "marginBottom": "5%"
  },
  "text": {
    "fontSize": "9.5vh"
  }
} };

var render$1 = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["button"],
    style: {
      backgroundColor: _vm.color[0]
    },
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "resize": "contain",
      "src": _vm.icon
    }
  }), _c('text', {
    staticClass: ["text"],
    style: {
      color: _vm.color[1]
    }
  }, [_vm._v(_vm._s(_vm.text))])])
};

var staticRenderFns$1=[];
render$1._withStripped = true;
  
const __file$1 = 'src/components/main-button.vue';
const _scopeId$1 = 'data-v-68c78ce6';

const _exports$1 = script$1;

_exports$1.render = render$1;
_exports$1.staticRenderFns = staticRenderFns$1;
_exports$1._compiled = true;
_exports$1._scopeId = _scopeId$1;
_exports$1.themes = {};
_exports$1.style = Object.assign({}, style_0$1['_']);
_exports$1.__file = __file$1;

var MainButton = _exports$1;

//

const setting = new Setting();

var script = {
    name: 'index',
    components: {
        MainButton,
        ButtonColumn,
        IconButton,
        HistoryCard
    },
    data() {
        return {
            history: []
        }
    },
    computed: {
        historyList() {
            return this.history.slice(-2).reverse();
        }
    },
    methods: {
        openLink(link) {
            $falcon.navTo(link);
        },
        back() {
            this.$page.finish();
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
  "title-area": {
    "marginRight": "6vh",
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row"
  },
  "content": {
    "flex": 1,
    "marginRight": "6vh",
    "flexDirection": "row"
  },
  "cards-area": {
    "flex": 2,
    "justifyContent": "space-between",
    "paddingBottom": "3vh"
  },
  "main-button": {
    "flex": 1,
    "marginLeft": "7vh"
  }
} };

const img$4 = "data:image/png;base64,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";
  var __$_require_assets_setting_png_base64__ = img$4;

const img$3 = "data:image/png;base64,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";
  var __$_require_assets_info_png_base64__ = img$3;

const img$2 = "data:image/png;base64,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";
  var __$_require_assets_history_png_base64__ = img$2;

const img$1 = "data:image/png;base64,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";
  var __$_require_assets_folder_png_base64__ = img$1;

const img = "data:image/png;base64,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";
  var __$_require_assets_heart_png_base64__ = img;

var render = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
      "icon": __$_require_assets_setting_png_base64__
    },
    on: {
      "click": function($event) {
        return _vm.openLink('setting')
      }
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_info_png_base64__
    },
    on: {
      "click": function($event) {
        return _vm.openLink('info')
      }
    }
  })], 1), _c('div', {
    staticStyle: {
      flex: "1"
    }
  }, [_c('div', {
    staticClass: ["title-area"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("最近阅读")]), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_history_png_base64__
    },
    on: {
      "click": function($event) {
        return _vm.openLink('history')
      }
    }
  })], 1), _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["cards-area"]
  }, [_c('text', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.history.length === 0),
      expression: "history.length === 0"
    }],
    staticClass: ["loading"],
    staticStyle: {
      transform: "translateY(22vh)"
    }
  }, [_vm._v("什么也没有喵...")]), _vm._l((_vm.historyList), function(item, index) {
    return _c('HistoryCard', {
      key: index,
      attrs: {
        "item": item,
        "name": item.path.split('/').pop(),
        "time": ""
      },
      on: {
        "click": function($event) {
          return _vm.open(item.path, item.progress)
        }
      }
    })
  })], 2), _c('MainButton', {
    staticClass: ["main-button"],
    attrs: {
      "icon": __$_require_assets_folder_png_base64__,
      "text": "本地文件",
      "color": ['#004a77', '#c2e7ff']
    },
    on: {
      "click": function($event) {
        return _vm.openLink('filemanager')
      }
    }
  }), _c('MainButton', {
    staticClass: ["main-button"],
    attrs: {
      "icon": __$_require_assets_heart_png_base64__,
      "text": "书签",
      "color": ['#7a0f1c', '#ffd6db']
    },
    on: {
      "click": function($event) {
        return _vm.openLink('favorite')
      }
    }
  })], 1)])], 1)
};

var staticRenderFns=[];
render._withStripped = true;
  
const __file = 'src/pages/index/index.vue';
const _scopeId = 'data-v-1badc801';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

export { _exports as default };
