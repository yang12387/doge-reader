import fs from 'fs';
import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png_base64__ } from './back-aa1a3b26.js';

//

var script = {
    name: 'license',
    components: {
        ButtonColumn,
        IconButton,
    },
    data() {
        return {
            license: '',
        };
    },
    methods: {
        back() {
            this.$page.finish();
        },
        onShow() {
            const licensePath = `${$workspace}/assets/license.txt`;

            fs.readFile(licensePath)
                .then(data => {
                    this.license = data;
                })
                .catch(error => {
                    this.license = "读取许可证文件失败，请务必联系作者 adogecheems 。";
                });
        },
    },
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
  "wrapper": {
    "alignItems": "center"
  },
  "license": {
    "width": "80%",
    "color": "#8e918f",
    "fontSize": "10vh"
  }
} };

var render = function (){
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('ButtonColumn', [_c('IconButton', {
    staticClass: ["button"],
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
      "overScroll": "50px",
      "overFling": "50px"
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("许可证")]), _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["license"]
  }, [_vm._v(_vm._s(_vm.license))])])])], 1)
};

var staticRenderFns=[];
render._withStripped = true;
  
const __file = 'src/pages/license/license.vue';
const _scopeId = 'data-v-d79d3bc2';

const _exports = script;

_exports.render = render;
_exports.staticRenderFns = staticRenderFns;
_exports._compiled = true;
_exports._scopeId = _scopeId;
_exports.themes = {};
_exports.style = Object.assign({}, style_0['_']);
_exports.__file = __file;

export { _exports as default };
