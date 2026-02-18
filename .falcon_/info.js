import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png__ } from './back-03f62ecb.js';

//
//
//
//
//
//
//

var script$1 = {
    name: "InfoCard",
    props: {
        item: { type: String, required: true },
        value: { type: String, required: true }
    }
};

var style_0$1 = { "_": {
  "info-card": {
    "width": "80%",
    "marginBottom": "5vh",
    "paddingTop": "8vh",
    "paddingRight": "12vh",
    "paddingBottom": "8vh",
    "paddingLeft": "12vh",
    "borderRadius": "8vh",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#1a1b1f"
  },
  "item-text": {
    "color": "#e3e3e3",
    "fontSize": "12vh"
  },
  "value-text": {
    "textAlign": "right",
    "maxWidth": "60%",
    "color": "#8e918f",
    "fontSize": "10vh"
  }
} };

var render$1 = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["info-card"]
  }, [_c('text', {
    staticClass: ["item-text"]
  }, [_vm._v(_vm._s(_vm.item))]), _c('text', {
    staticClass: ["value-text"]
  }, [_vm._v(_vm._s(_vm.value))])])
};

var staticRenderFns$1=[];
render$1._withStripped = true;
  
const __file$1 = 'src/components/info-card.vue';
const _scopeId$1 = 'data-v-152fbd6f';

const _exports$1 = script$1;

_exports$1.render = render$1;
_exports$1.staticRenderFns = staticRenderFns$1;
_exports$1._compiled = true;
_exports$1._scopeId = _scopeId$1;
_exports$1.themes = {};
_exports$1.style = Object.assign({}, style_0$1['_']);
_exports$1.__file = __file$1;

var InfoCard = _exports$1;

//
const meta = $falcon.$app.$meta;

var script = {
    name: 'info',
    components: {
        ButtonColumn,
        IconButton,
        InfoCard,
    },
    data() {
        return {
            appName: meta.name,
            info: {
                '作者': 'adogecheems',
                '版本': meta.version,
                '许可证': 'AGPLv3',
                'GitHub': 'https://github.com/adogecheems/doge-calculator',
                '程序路径': meta.appPath,
            },
        };
    },
    methods: {
        openLicense() {
            $falcon.navTo('license');
        },
        back() {
            this.$page.finish();
        }
    },
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
  "wrapper": {
    "alignItems": "center"
  },
  "intro": {
    "marginBottom": "15vh",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "description": {
    "marginBottom": "15vh",
    "alignItems": "center"
  },
  "description-text": {
    "color": "#8e918f",
    "fontSize": "10vh"
  },
  "app-name": {
    "marginLeft": "10vh",
    "color": "#e3e3e3",
    "fontSize": "15vh",
    "fontWeight": "bold"
  }
} };

var __$_require_assets_app_icon_png__ = "images/78d469f92a290861ee17c59985a24f24.png";

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
  })], 1), _c('scroller', {
    staticStyle: {
      flex: "1"
    },
    attrs: {
      "showScrollbar": "false",
      "overScroll": "50px",
      "overFling": "50px"
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("关于")]), _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["intro"]
  }, [_c('image', {
    staticStyle: {
      width: "40vh",
      height: "40vh"
    },
    attrs: {
      "src": __$_require_assets_app_icon_png__
    }
  }), _c('text', {
    staticClass: ["app-name"]
  }, [_vm._v(_vm._s(_vm.appName))])]), _c('div', {
    staticClass: ["description"]
  }, [_c('text', {
    staticClass: ["description-text"]
  }, [_vm._v("一款为有道词典笔OS设计的小说阅读器")]), _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["description-text"]
  }, [_vm._v("基于")]), _c('text', {
    staticClass: ["link"],
    on: {
      "click": _vm.openLicense
    }
  }, [_vm._v("AGPLv3")]), _c('text', {
    staticClass: ["description-text"]
  }, [_vm._v("许可证共享")])])]), _vm._l((_vm.info), function(value, item) {
    return _c('InfoCard', {
      key: item,
      attrs: {
        "value": value,
        "item": item
      }
    })
  })], 2)])], 1)
};

var staticRenderFns=[];
render._withStripped = true;
  
const __file = 'src/pages/info/info.vue';
const _scopeId = 'data-v-e0fbc7ca';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

export { _exports as default };
