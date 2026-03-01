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

const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+oCDQwFLywdKYEAAAIQSURBVHja7Zq9jhMxEMfHzl3FO9hOKh7gUJTXACk6CYkj4gpEcYEKyggqKo4PAQXZrShwwWuk5UPpN/YDQJ/IQxMQOp2ye9J6b+zMr0xWsv8/zWzGkQEYhmEYhmEYhmGIsFwub1RVddNae7hXwa210jn3wjm39t6j9/5XVVXHMdcUlMIPh8NSSnnvwlfrzWZz1O/3f8RYVxIKX1wSHgDgsNfr3Y61tiQU/mTHYxhr/QOiZX+xBb5mJ6BJeETEEMJ0MBj8zKoFanr+X3hEnBpjPmT1K9Ck5/+G11q/jb0fsc/hOxXQNDwAPFZKvelqX2Kfw3cigHL46AKoh48qIIXw0QSkEj6KgJTCRxHgvS8B4H4K4VsfhVer1d2UwrcuQAhxnFL41gVsQ5I6e3R9GvyyozoEALxyzp1lK0Br/RkRixoJ55QktP5/QFEUpyGEjw0kTCkIiNKTs9lMTCaT91LKhzXviydKqdfZCUhJgowoAMuyfFTXDkKIc+fc0+wq4CqVsK2GZ0qpl9kJoC6hs8GEqoROJzOKEjofTalJuJbZnJKEazucWGvlaDT6BACTXXMCIp5prd9lJ+AKEjYhhCNjzPekBqEmjMfjMJ/PH9QMSwdSyjvJTYJtTowQ8X4AqSsyl7XDtgVuGWO+ZVkB/7fDYrE4RcTnALDefvwbEU9ihSfL3l6TYxiGYRiGYRimM/4AMcRu5fcJXR4AAAAASUVORK5CYII=";
  var __$_require_assets_back_png_base64__ = img;

export { ButtonColumn as B, IconButton as I, __$_require_assets_back_png_base64__ as _ };
