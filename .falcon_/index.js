import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png__ } from './back-03f62ecb.js';

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
    "borderRadius": "14vh",
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

var script = {
    name: 'index',
    components: {
        MainButton,
        ButtonColumn,
        IconButton,
    },
    data() { },
    methods: {
        openLink(link) {
            $falcon.navTo(link);
        },
        back() {
            this.$page.finish();
        }
    }
};

var style_0 = { "_": {
  "container": {
    "backgroundColor": "#000000",
    "height": "100vh"
  },
  "title": {
    "marginTop": "9vh",
    "marginBottom": "7vh",
    "color": "#8e918f",
    "fontSize": "12vh"
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
  "content": {
    "flex": 1,
    "marginRight": "12vh",
    "flexDirection": "row"
  },
  "main-button": {
    "flex": 1,
    "marginLeft": "7vh"
  }
} };

var __$_require_assets_history_png__ = "images/dc03d95e3a26ea9eef57f81d8b1b3bce.png";

var __$_require_assets_info_png__ = "images/81ac1726dd18b34e4b68c49ae7680a47.png";

var __$_require_assets_folder_png__ = "images/6299f20683241591d31ade5a7702baa1.png";

var __$_require_assets_heart_png__ = "images/1973abf6acba1cf149cccab19da1e6f5.png";

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
      "icon": __$_require_assets_history_png__
    },
    on: {
      "click": function($event) {
        return _vm.openLink('history')
      }
    }
  }), _c('IconButton', {
    attrs: {
      "icon": __$_require_assets_info_png__
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
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("最近阅读")]), _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticStyle: {
      flex: "2"
    }
  }), _c('MainButton', {
    staticClass: ["main-button"],
    attrs: {
      "icon": __$_require_assets_folder_png__,
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
      "icon": __$_require_assets_heart_png__,
      "text": "收藏",
      "color": ['#7a0f1c', '#ffd6db']
    },
    on: {
      "click": function($event) {
        return _vm.openLink('favorites')
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
