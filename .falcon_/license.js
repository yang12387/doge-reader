import fs from 'fs';
import { B as ButtonColumn, I as IconButton, _ as __$_require_assets_back_png__ } from './back-03f62ecb.js';

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
  "license": {
    "width": "80%",
    "color": "#8e918f",
    "fontSize": "10vh"
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
    staticClass: ["button"],
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
