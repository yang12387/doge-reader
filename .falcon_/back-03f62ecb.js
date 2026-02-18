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

var script$1 = {
    name: 'ButtonColumn',
};

var style_0$1 = { "_": {
  "wrapper": {
    "minWidth": "33vh",
    "height": "100vh",
    "paddingTop": "7vh",
    "paddingRight": "12vh",
    "paddingBottom": "7vh",
    "paddingLeft": "5vh",
    "flexDirection": "column",
    "justifyContent": "space-between"
  }
} };

var render$1 = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_vm._t("default")], 2)
};

var staticRenderFns$1=[];
render$1._withStripped = true;
  
const __file$1 = 'src/components/button-column.vue';
const _scopeId$1 = 'data-v-25fc2df1';

const _exports$1 = script$1;

_exports$1.render = render$1;
_exports$1.staticRenderFns = staticRenderFns$1;
_exports$1._compiled = true;
_exports$1._scopeId = _scopeId$1;
_exports$1.themes = {};
_exports$1.style = Object.assign({}, style_0$1['_']);
_exports$1.__file = __file$1;

var ButtonColumn = _exports$1;

//
//
//
//
//
//

var script = {
    name: 'IconButton',
    props: {
        icon: { type: String, required: true },
        color: { type: String, required: false, default: '#1a1b1f' },
    },
};

var style_0 = { "_": {
  "button": {
    "width": "22vh",
    "height": "22vh",
    "borderRadius": "7vh",
    "justifyContent": "center",
    "alignItems": "center",
    "opacity:active": 0.6
  },
  "icon": {
    "width": "60%",
    "height": "60%"
  }
} };

var render = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["button"],
    style: {
      backgroundColor: _vm.color
    },
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.icon
    }
  })])
};

var staticRenderFns=[];
render._withStripped = true;
  
const __file = 'src/components/icon-button.vue';
const _scopeId = 'data-v-5c279e26';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

var IconButton = _exports;

var __$_require_assets_back_png__ = "images/36d8aa5c9c5167c039ee7f9585652a67.png";

export { ButtonColumn as B, IconButton as I, __$_require_assets_back_png__ as _ };
