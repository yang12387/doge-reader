import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png_base64__ } from './back-aa1a3b26.js';
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
//
//

var script$2 = {
    name: "SettingCard",
    props: {
        item: { type: String, required: true },
        desc: { type: String, required: true },
    }
};

var style_0$2 = { "_": {
  "card": {
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
  "desc-text": {
    "color": "#8e918f",
    "fontSize": "8vh"
  }
} };

var render$2 = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["card"]
  }, [_c('div', {
    staticStyle: {
      maxWidth: "60%"
    }
  }, [_c('text', {
    staticClass: ["item-text"]
  }, [_vm._v(_vm._s(_vm.item))]), _c('text', {
    staticClass: ["desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))])]), _vm._t("default")], 2)
};

var staticRenderFns$2=[];
render$2._withStripped = true;
  
const __file$2 = 'src/components/setting-card.vue';
const _scopeId$2 = 'data-v-391951fd';

const _exports$2 = script$2;

_exports$2.render = render$2;
_exports$2.staticRenderFns = staticRenderFns$2;
_exports$2._compiled = true;
_exports$2._scopeId = _scopeId$2;
_exports$2.themes = {};
_exports$2.style = Object.assign({}, style_0$2['_']);
_exports$2.__file = __file$2;

var SettingCard = _exports$2;

//
//
//
//
//
//
//

var script$1 = {
    name: 'Toggle',
    props: {
        defaultValue: { type: Boolean, default: false }
    },
    data() {
        return {
            checked: this.defaultValue
        }
    },
    methods: {
        toggle() {
            this.checked = !this.checked;
            this.$emit('click', this.checked);
        }
    }
};

var style_0$1 = { "_": {
  "toggle": {
    "position": "relative",
    "width": "32vh",
    "height": "18vh"
  },
  "track": {
    "position": "absolute",
    "top": "3vh",
    "left": 0,
    "width": "100%",
    "height": "12vh",
    "borderRadius": "6vh",
    "backgroundColor": "#8e918f",
    "transitionProperty": "backgroundColor",
    "transitionDuration": 150,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "track": {
      "property": "backgroundColor",
      "duration": 150,
      "timingFunction": "ease-in-out"
    },
    "thumb": {
      "property": "all",
      "duration": 150,
      "timingFunction": "ease-in-out"
    }
  },
  "track-on": {
    "backgroundColor": "#004a77"
  },
  "thumb": {
    "position": "absolute",
    "top": "1vh",
    "left": "2vh",
    "width": "16vh",
    "height": "16vh",
    "borderRadius": "100vh",
    "backgroundColor": "#e3e3e3",
    "transitionProperty": "all",
    "transitionDuration": 150,
    "transitionTimingFunction": "ease-in-out"
  },
  "thumb-on": {
    "transform": "translateX(14vh)",
    "backgroundColor": "#c2e7ff"
  }
} };

var render$1 = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["toggle"],
    on: {
      "click": _vm.toggle
    }
  }, [_c('div', {
    staticClass: ["track"],
    class: {
      'track-on': _vm.checked
    }
  }), _c('div', {
    staticClass: ["thumb"],
    class: {
      'thumb-on': _vm.checked
    }
  })])
};

var staticRenderFns$1=[];
render$1._withStripped = true;
  
const __file$1 = 'src/components/toggle.vue';
const _scopeId$1 = 'data-v-425dbb64';

const _exports$1 = script$1;

_exports$1.render = render$1;
_exports$1.staticRenderFns = staticRenderFns$1;
_exports$1._compiled = true;
_exports$1._scopeId = _scopeId$1;
_exports$1.themes = {};
_exports$1.style = Object.assign({}, style_0$1['_']);
_exports$1.__file = __file$1;

var Toggle = _exports$1;

//

const setting = new Setting();

var script = {
    name: 'setting',
    components: {
        ButtonColumn,
        IconButton,
        SettingCard,
        Toggle
    },
    data() {
        return {
            loading: true,
            isScroll: false,
            isLarger: false
        }
    },
    methods: {
        back() {
            this.$page.finish();
        },
        onShow() {
            setting.getMode().then(mode => {
                this.isScroll = mode === 'scroll';
                this.loading = false;
            });
            setting.isLargerFont().then(larger => {
                this.isLarger = larger;
            });
        },
        switchMode(checked) {
            setting.setMode(checked ? 'scroll' : 'page');
        },
        switchFontSize(checked) {
            setting.setLargerFont(checked);
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
  "card": {
    "marginRight": "6vh"
  }
} };

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
  }, [_vm._v("设置")]), _c('SettingCard', {
    staticClass: ["card"],
    attrs: {
      "item": "启用滚动翻页",
      "desc": "在阅读界面通过上下滚动浏览整个章节"
    }
  }, [(!_vm.loading) ? _c('Toggle', {
    attrs: {
      "defaultValue": _vm.isScroll
    },
    on: {
      "click": _vm.switchMode
    }
  }) : _vm._e()], 1), _c('SettingCard', {
    staticClass: ["card"],
    attrs: {
      "item": "更大的字体",
      "desc": "将字体放大到默认的约1.5倍"
    }
  }, [(!_vm.loading) ? _c('Toggle', {
    attrs: {
      "defaultValue": _vm.isLarger
    },
    on: {
      "click": _vm.switchFontSize
    }
  }) : _vm._e()], 1)], 1)], 1)
};

var staticRenderFns=[];
render._withStripped = true;
  
const __file = 'src/pages/setting/setting.vue';
const _scopeId = 'data-v-f4898f86';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

export { _exports as default };
