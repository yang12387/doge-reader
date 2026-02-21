//
//
//
//
//
//
//
//
//

var script = {
    name: "HistoryCard",
    props: {
        name: { type: String, required: true },
        time: { type: String, required: true },
    },
};

var style_0 = { "_": {
  "wrapper": {
    "height": "30vh",
    "backgroundColor": "#1a1b1f",
    "borderRadius": "6vh",
    "paddingTop": "3vh",
    "paddingRight": "10vh",
    "paddingBottom": "3vh",
    "paddingLeft": "10vh",
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row",
    "opacity:active": 0.6
  },
  "name": {
    "fontSize": "10vh",
    "color": "#e3e3e3"
  },
  "time": {
    "fontSize": "8vh",
    "color": "#8e918f"
  }
} };

var render = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_c('scroller', {
    attrs: {
      "scrollDirection": "horizontal"
    },
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_c('text', {
    staticClass: ["name"]
  }, [_vm._v(_vm._s(_vm.name))])]), _c('text', {
    staticClass: ["time"]
  }, [_vm._v(_vm._s(_vm.time))])])
};

var staticRenderFns=[];
render._withStripped = true;
  
const __file = 'src/components/history-card.vue';
const _scopeId = 'data-v-87696f8e';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

var HistoryCard = _exports;

export { HistoryCard as H };
