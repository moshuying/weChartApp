"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  const s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function formatLog (...args) {
  const msgs = args.map((v) => {
    const type = Object.prototype.toString.call(v)
    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        const vType = typof(v).toUpperCase()
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }
    return v
  })
  let msg = ''
  if (msgs.length > 1) {
    const lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }
  return msg
}


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/*!**********************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/main.js?{"page":"pages%2Fucenter%2Fucenter"} ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_ucenter_ucenter_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/ucenter/ucenter.nvue?mpType=page */ 11);


_pages_ucenter_ucenter_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_pages_ucenter_ucenter_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'pages/ucenter/ucenter'
_pages_ucenter_ucenter_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'
_pages_ucenter_ucenter_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle = {}
Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 18).default,_pages_ucenter_ucenter_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle)

new Vue(_pages_ucenter_ucenter_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 11 */
/*!****************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/ucenter/ucenter.nvue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ucenter_nvue_vue_type_template_id_41b2606d_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ucenter.nvue?vue&type=template&id=41b2606d&mpType=page */ 12);
/* harmony import */ var _ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucenter.nvue?vue&type=script&lang=js&mpType=page */ 14);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./ucenter.nvue?vue&type=style&index=0&lang=css&mpType=page */ 16).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./ucenter.nvue?vue&type=style&index=0&lang=css&mpType=page */ 16).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ucenter_nvue_vue_type_template_id_41b2606d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ucenter_nvue_vue_type_template_id_41b2606d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "6bbe0d8c"
  
)

component.options.__file = "E:/msy/code/node/appStore/appStore2/前端小工具/pages/ucenter/ucenter.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/*!**********************************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/ucenter/ucenter.nvue?vue&type=template&id=41b2606d&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_template_id_41b2606d_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!./ucenter.nvue?vue&type=template&id=41b2606d&mpType=page */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_template_id_41b2606d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_template_id_41b2606d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 13 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/ucenter/ucenter.nvue?vue&type=template&id=41b2606d&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c("view", { staticClass: ["center"] }, [
        _c(
          "view",
          {
            staticClass: ["logo"],
            attrs: { hoverClass: !_vm.login ? "logo-hover" : "" },
            on: { click: _vm.goLogin }
          },
          [
            _c("u-image", {
              staticClass: ["logo-img"],
              attrs: { src: _vm.login ? _vm.uerInfo.avatarUrl : _vm.avatarUrl }
            }),
            _c(
              "view",
              { staticClass: ["logo-title"] },
              [
                _c("u-text", { staticClass: ["uer-name"] }, [
                  _vm._v(
                    "Hi，" + _vm._s(_vm.login ? _vm.uerInfo.name : "您未登录")
                  )
                ]),
                !_vm.login
                  ? _c(
                      "u-text",
                      {
                        staticClass: ["go-login-navigat-arrow", "navigat-arrow"]
                      },
                      [_vm._v("")]
                    )
                  : _vm._e()
              ],
              1
            )
          ],
          1
        ),
        _c("view", { staticClass: ["center-list"] }, [
          _c(
            "view",
            { staticClass: ["center-list-item", "border-bottom"] },
            [
              _c("u-text", { staticClass: ["list-icon"] }, [_vm._v("")]),
              _c("u-text", { staticClass: ["list-text"] }, [
                _vm._v("账号管理")
              ]),
              _c("u-text", { staticClass: ["navigat-arrow"] }, [_vm._v("")])
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["center-list-item"] },
            [
              _c("u-text", { staticClass: ["list-icon"] }, [_vm._v("")]),
              _c("u-text", { staticClass: ["list-text"] }, [
                _vm._v("新消息通知")
              ]),
              _c("u-text", { staticClass: ["navigat-arrow"] }, [_vm._v("")])
            ],
            1
          )
        ]),
        _c("view", { staticClass: ["center-list"] }, [
          _c(
            "view",
            { staticClass: ["center-list-item", "border-bottom"] },
            [
              _c("u-text", { staticClass: ["list-icon"] }, [_vm._v("")]),
              _c("u-text", { staticClass: ["list-text"] }, [
                _vm._v("帮助与反馈")
              ]),
              _c("u-text", { staticClass: ["navigat-arrow"] }, [_vm._v("")])
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["center-list-item"] },
            [
              _c("u-text", { staticClass: ["list-icon"] }, [_vm._v("")]),
              _c("u-text", { staticClass: ["list-text"] }, [
                _vm._v("服务条款及隐私")
              ]),
              _c("u-text", { staticClass: ["navigat-arrow"] }, [_vm._v("")])
            ],
            1
          )
        ]),
        _c("view", { staticClass: ["center-list"] }, [
          _c(
            "view",
            { staticClass: ["center-list-item"] },
            [
              _c("u-text", { staticClass: ["list-icon"] }, [_vm._v("")]),
              _c("u-text", { staticClass: ["list-text"] }, [
                _vm._v("关于应用")
              ]),
              _c("u-text", { staticClass: ["navigat-arrow"] }, [_vm._v("")])
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!****************************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/ucenter/ucenter.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!./ucenter.nvue?vue&type=script&lang=js&mpType=page */ 15);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/ucenter/ucenter.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  data: function data() {
    return {
      login: false,
      avatarUrl: '/static/logo.png',
      uerInfo: {} };

  },
  methods: {
    goLogin: function goLogin() {
      if (!this.login) {
        console.log(__f__('点击前往登录', " at pages\\ucenter\\ucenter.nvue:56"));
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 6)["default"]))

/***/ }),
/* 16 */
/*!************************************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/ucenter/ucenter.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!./ucenter.nvue?vue&type=style&index=0&lang=css&mpType=page */ 17);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_ucenter_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/ucenter/ucenter.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "center": {
    "flex": 1,
    "flexDirection": "column",
    "backgroundColor": "#f8f8f8"
  },
  "logo": {
    "width": "750rpx",
    "height": "240rpx",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "backgroundColor": "#2F85FC",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "logo-hover": {
    "opacity": 0.8
  },
  "logo-img": {
    "width": "150rpx",
    "height": "150rpx",
    "borderRadius": "150rpx"
  },
  "logo-title": {
    "height": "150rpx",
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "marginLeft": "20rpx"
  },
  "uer-name": {
    "height": "60rpx",
    "lineHeight": "60rpx",
    "fontSize": "38rpx",
    "color": "#FFFFFF"
  },
  "go-login-navigat-arrow": {
    "fontSize": "38rpx",
    "color": "#FFFFFF"
  },
  "login-title": {
    "height": "150rpx",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "marginLeft": "20rpx"
  },
  "center-list": {
    "flexDirection": "column",
    "backgroundColor": "#FFFFFF",
    "marginTop": "20rpx",
    "width": "750rpx"
  },
  "center-list-item": {
    "height": "90rpx",
    "width": "750rpx",
    "flexDirection": "row",
    "paddingTop": "0rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "20rpx"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderColor": "#c8c7cc",
    "borderBottomStyle": "solid"
  },
  "list-icon": {
    "width": "40rpx",
    "height": "90rpx",
    "lineHeight": "90rpx",
    "fontSize": "34rpx",
    "color": "#2F85FC",
    "textAlign": "center",
    "fontFamily": "texticons",
    "marginRight": "20rpx"
  },
  "list-text": {
    "height": "90rpx",
    "lineHeight": "90rpx",
    "fontSize": "34rpx",
    "color": "#555555",
    "flex": 1
  },
  "navigat-arrow": {
    "height": "90rpx",
    "width": "40rpx",
    "lineHeight": "90rpx",
    "fontSize": "34rpx",
    "color": "#555555",
    "textAlign": "right",
    "fontFamily": "texticons"
  }
}

/***/ }),
/* 18 */
/*!*****************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 19);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??vue-loader-options!E:/msy/code/node/appStore/appStore2/前端小工具/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L21haW4uanM/MGJiYSIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL3VjZW50ZXIvdWNlbnRlci5udnVlP2FhMTYiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy91Y2VudGVyL3VjZW50ZXIubnZ1ZT81MWE4Iiwid2VicGFjazovLy9FOi9tc3kvY29kZS9ub2RlL2FwcFN0b3JlL2FwcFN0b3JlMi/liY3nq6/lsI/lt6XlhbcvcGFnZXMvdWNlbnRlci91Y2VudGVyLm52dWU/M2I3OSIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL3VjZW50ZXIvdWNlbnRlci5udnVlP2YyZGQiLCJ1bmktYXBwOi8vL3BhZ2VzL3VjZW50ZXIvdWNlbnRlci5udnVlIiwid2VicGFjazovLy9FOi9tc3kvY29kZS9ub2RlL2FwcFN0b3JlL2FwcFN0b3JlMi/liY3nq6/lsI/lt6XlhbcvcGFnZXMvdWNlbnRlci91Y2VudGVyLm52dWU/YjhkMSIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL3VjZW50ZXIvdWNlbnRlci5udnVlPzdlN2QiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9BcHAudnVlPzdlOTMiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9BcHAudnVlP2ZkNDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ2hHQTtBQUFBO0FBQUE7QUFBQTtBQUEwcUIsQ0FBZ0IsaXNCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E5ckIsbUIiLCJmaWxlIjoicGFnZXMvdWNlbnRlci91Y2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsImZ1bmN0aW9uIHR5cG9mICh2KSB7XHJcbiAgY29uc3QgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoLi4uYXJncykge1xyXG4gIGNvbnN0IG1zZ3MgPSBhcmdzLm1hcCgodikgPT4ge1xyXG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2ID0gJy0tLUJFR0lOOkpTT04tLS0nICsgSlNPTi5zdHJpbmdpZnkodikgKyAnLS0tRU5EOkpTT04tLS0nXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHYgPT09IG51bGwpIHtcclxuICAgICAgICB2ID0gJy0tLU5VTEwtLS0nXHJcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XHJcbiAgICAgICAgICB2ID0gJy0tLUJFR0lOOicgKyB2VHlwZSArICctLS0nICsgdiArICctLS1FTkQ6JyArIHZUeXBlICsgJy0tLSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZcclxuICB9KVxyXG4gIGxldCBtc2cgPSAnJ1xyXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcclxuICAgIGNvbnN0IGxhc3RNc2cgPSBtc2dzLnBvcCgpXHJcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcclxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xyXG4gICAgICBtc2cgKz0gbGFzdE1zZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1zZyA9IG1zZ3NbMF1cclxuICB9XHJcbiAgcmV0dXJuIG1zZ1xyXG59XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiXG5pbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdWNlbnRlci91Y2VudGVyLm52dWU/bXBUeXBlPXBhZ2UnXG5BcHAubXBUeXBlID0gJ3BhZ2UnXG5BcHAucm91dGUgPSAncGFnZXMvdWNlbnRlci91Y2VudGVyJ1xuQXBwLmVsID0gJyNyb290J1xuQXBwLmFwcFN0eWxlID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxBcHAuYXBwU3R5bGUpXG5cbm5ldyBWdWUoQXBwKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi91Y2VudGVyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDFiMjYwNmQmbXBUeXBlPXBhZ2VcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91Y2VudGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdWNlbnRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VjZW50ZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91Y2VudGVyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCI2YmJlMGQ4Y1wiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy91Y2VudGVyL3VjZW50ZXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL3VjZW50ZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MWIyNjA2ZCZtcFR5cGU9cGFnZVwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJjZW50ZXJcIl0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibG9nb1wiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IGhvdmVyQ2xhc3M6ICFfdm0ubG9naW4gPyBcImxvZ28taG92ZXJcIiA6IFwiXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZ29Mb2dpbiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibG9nby1pbWdcIl0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmxvZ2luID8gX3ZtLnVlckluZm8uYXZhdGFyVXJsIDogX3ZtLmF2YXRhclVybCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wibG9nby10aXRsZVwiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widWVyLW5hbWVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIkhp77yMXCIgKyBfdm0uX3MoX3ZtLmxvZ2luID8gX3ZtLnVlckluZm8ubmFtZSA6IFwi5oKo5pyq55m75b2VXCIpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgIV92bS5sb2dpblxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJnby1sb2dpbi1uYXZpZ2F0LWFycm93XCIsIFwibmF2aWdhdC1hcnJvd1wiXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIu6ZnlwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJjZW50ZXItbGlzdFwiXSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImNlbnRlci1saXN0LWl0ZW1cIiwgXCJib3JkZXItYm90dG9tXCJdIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImxpc3QtaWNvblwiXSB9LCBbX3ZtLl92KFwi7piPXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImxpc3QtdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi6LSm5Y+3566h55CGXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJuYXZpZ2F0LWFycm93XCJdIH0sIFtfdm0uX3YoXCLumZ5cIildKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJjZW50ZXItbGlzdC1pdGVtXCJdIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImxpc3QtaWNvblwiXSB9LCBbX3ZtLl92KFwi7pi5XCIpXSksXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImxpc3QtdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5paw5raI5oGv6YCa55+lXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJuYXZpZ2F0LWFycm93XCJdIH0sIFtfdm0uX3YoXCLumZ5cIildKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiY2VudGVyLWxpc3RcIl0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJjZW50ZXItbGlzdC1pdGVtXCIsIFwiYm9yZGVyLWJvdHRvbVwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJsaXN0LWljb25cIl0gfSwgW192bS5fdihcIu6Yi1wiKV0pLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJsaXN0LXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuW4ruWKqeS4juWPjemmiFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibmF2aWdhdC1hcnJvd1wiXSB9LCBbX3ZtLl92KFwi7pmeXCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY2VudGVyLWxpc3QtaXRlbVwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJsaXN0LWljb25cIl0gfSwgW192bS5fdihcIu6Zn1wiKV0pLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJsaXN0LXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuacjeWKoeadoeasvuWPiumakOengVwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibmF2aWdhdC1hcnJvd1wiXSB9LCBbX3ZtLl92KFwi7pmeXCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImNlbnRlci1saXN0XCJdIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY2VudGVyLWxpc3QtaXRlbVwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJsaXN0LWljb25cIl0gfSwgW192bS5fdihcIu6YlFwiKV0pLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJsaXN0LXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuWFs+S6juW6lOeUqFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibmF2aWdhdC1hcnJvd1wiXSB9LCBbX3ZtLl92KFwi7pmeXCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vdWNlbnRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi91Y2VudGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjZW50ZXJcIj5cblx0XHQ8dmlldyBjbGFzcz1cImxvZ29cIiBAY2xpY2s9XCJnb0xvZ2luXCIgOmhvdmVyLWNsYXNzPVwiIWxvZ2luID8gJ2xvZ28taG92ZXInIDogJydcIj5cblx0XHRcdDxpbWFnZSBjbGFzcz1cImxvZ28taW1nXCIgOnNyYz1cImxvZ2luID8gdWVySW5mby5hdmF0YXJVcmwgOmF2YXRhclVybFwiPjwvaW1hZ2U+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImxvZ28tdGl0bGVcIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1ZXItbmFtZVwiPkhp77yMe3tsb2dpbiA/IHVlckluZm8ubmFtZSA6ICfmgqjmnKrnmbvlvZUnfX08L3RleHQ+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZ28tbG9naW4tbmF2aWdhdC1hcnJvdyBuYXZpZ2F0LWFycm93XCIgdi1pZj1cIiFsb2dpblwiPiYjeGU2NWU7PC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0XCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0LWl0ZW0gYm9yZGVyLWJvdHRvbVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpc3QtaWNvblwiPiYjeGU2MGY7PC90ZXh0PlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpc3QtdGV4dFwiPui0puWPt+euoeeQhjwvdGV4dD5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJuYXZpZ2F0LWFycm93XCI+JiN4ZTY1ZTs8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0LWl0ZW1cIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LWljb25cIj4mI3hlNjM5OzwvdGV4dD5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LXRleHRcIj7mlrDmtojmga/pgJrnn6U8L3RleHQ+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibmF2aWdhdC1hcnJvd1wiPiYjeGU2NWU7PC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0XCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0LWl0ZW0gYm9yZGVyLWJvdHRvbVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpc3QtaWNvblwiPiYjeGU2MGI7PC90ZXh0PlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpc3QtdGV4dFwiPuW4ruWKqeS4juWPjemmiDwvdGV4dD5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJuYXZpZ2F0LWFycm93XCI+JiN4ZTY1ZTs8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0LWl0ZW1cIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LWljb25cIj4mI3hlNjVmOzwvdGV4dD5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LXRleHRcIj7mnI3liqHmnaHmrL7lj4rpmpDnp4E8L3RleHQ+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibmF2aWdhdC1hcnJvd1wiPiYjeGU2NWU7PC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0XCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNlbnRlci1saXN0LWl0ZW1cIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LWljb25cIj4mI3hlNjE0OzwvdGV4dD5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXN0LXRleHRcIj7lhbPkuo7lupTnlKg8L3RleHQ+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwibmF2aWdhdC1hcnJvd1wiPiYjeGU2NWU7PC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsb2dpbjogZmFsc2UsXG5cdFx0XHRcdGF2YXRhclVybDogJy9zdGF0aWMvbG9nby5wbmcnLFxuXHRcdFx0XHR1ZXJJbmZvOiB7fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Z29Mb2dpbigpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmxvZ2luKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eCueWHu+WJjeW+gOeZu+W9lScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cblx0QGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6IHRleHRpY29ucztcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL3RleHQtaWNvbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdH1cblxuXHRwYWdlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuXHR9XG5cblx0LyogI2VuZGlmKi9cblxuXHQvKiDop6PlhrPlpLTmnaHlsI/nqIvluo/lrZfkvZPlm77moIfkuI3mmL7npLrpl67popjvvIzlm6DkuLrlpLTmnaHov5DooYzml7boh6rliqjmj5LlhaXkuoZzcGFu5qCH562+77yM5LiU5pyJ5YWo5bGA5a2X5L2TICovXG5cdC8qICNpZmRlZiBNUC1UT1VUSUFPICovXG5cdHRleHQgOm5vdCh2aWV3KSB7XG5cdFx0Zm9udC1mYW1pbHk6IHRleHRpY29ucztcblx0fVxuXG5cdC8qICNlbmRpZiAqL1xuXG5cdC5jZW50ZXIge1xuXHRcdGZsZXg6IDE7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuXHR9XG5cblx0LmxvZ28ge1xuXHRcdHdpZHRoOiA3NTB1cHg7XG5cdFx0aGVpZ2h0OiAyNDB1cHg7XG5cdFx0cGFkZGluZzogMjB1cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzJGODVGQztcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblxuXHQubG9nby1ob3ZlciB7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cblx0LmxvZ28taW1nIHtcblx0XHR3aWR0aDogMTUwdXB4O1xuXHRcdGhlaWdodDogMTUwdXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDE1MHVweDtcblx0fVxuXG5cdC5sb2dvLXRpdGxlIHtcblx0XHRoZWlnaHQ6IDE1MHVweDtcblx0XHRmbGV4OiAxO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0bWFyZ2luLWxlZnQ6IDIwdXB4O1xuXHR9XG5cblx0LnVlci1uYW1lIHtcblx0XHRoZWlnaHQ6IDYwdXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA2MHVweDtcblx0XHRmb250LXNpemU6IDM4dXB4O1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHR9XG5cblx0LmdvLWxvZ2luLW5hdmlnYXQtYXJyb3cge1xuXHRcdGZvbnQtc2l6ZTogMzh1cHg7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdH1cblxuXHQubG9naW4tdGl0bGUge1xuXHRcdGhlaWdodDogMTUwdXB4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRtYXJnaW4tbGVmdDogMjB1cHg7XG5cdH1cblxuXHQuY2VudGVyLWxpc3Qge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0XHRtYXJnaW4tdG9wOiAyMHVweDtcblx0XHR3aWR0aDogNzUwdXB4O1xuXHR9XG5cblx0LmNlbnRlci1saXN0LWl0ZW0ge1xuXHRcdGhlaWdodDogOTB1cHg7XG5cdFx0d2lkdGg6IDc1MHVweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdHBhZGRpbmc6IDB1cHggMjB1cHg7XG5cdH1cblxuXHQuYm9yZGVyLWJvdHRvbSB7XG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXVweDtcblx0XHRib3JkZXItY29sb3I6ICNjOGM3Y2M7XG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdH1cblxuXHQubGlzdC1pY29uIHtcblx0XHR3aWR0aDogNDB1cHg7XG5cdFx0aGVpZ2h0OiA5MHVweDtcblx0XHRsaW5lLWhlaWdodDogOTB1cHg7XG5cdFx0Zm9udC1zaXplOiAzNHVweDtcblx0XHRjb2xvcjogIzJGODVGQztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1mYW1pbHk6IHRleHRpY29ucztcblx0XHRtYXJnaW4tcmlnaHQ6IDIwdXB4O1xuXHR9XG5cblx0Lmxpc3QtdGV4dCB7XG5cdFx0aGVpZ2h0OiA5MHVweDtcblx0XHRsaW5lLWhlaWdodDogOTB1cHg7XG5cdFx0Zm9udC1zaXplOiAzNHVweDtcblx0XHRjb2xvcjogIzU1NTtcblx0XHRmbGV4OiAxO1xuXHR9XG5cblx0Lm5hdmlnYXQtYXJyb3cge1xuXHRcdGhlaWdodDogOTB1cHg7XG5cdFx0d2lkdGg6IDQwdXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA5MHVweDtcblx0XHRmb250LXNpemU6IDM0dXB4O1xuXHRcdGNvbG9yOiAjNTU1O1xuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdGZvbnQtZmFtaWx5OiB0ZXh0aWNvbnM7XG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL3VjZW50ZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vdWNlbnRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNlbnRlclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCJcbiAgfSxcbiAgXCJsb2dvXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNDBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzJGODVGQ1wiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwibG9nby1ob3ZlclwiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDAuOFxuICB9LFxuICBcImxvZ28taW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNTBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE1MHJweFwiXG4gIH0sXG4gIFwibG9nby10aXRsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxNTBycHhcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJ1ZXItbmFtZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2MHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjYwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcImdvLWxvZ2luLW5hdmlnYXQtYXJyb3dcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzOHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJsb2dpbi10aXRsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxNTBycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcImNlbnRlci1saXN0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwiY2VudGVyLWxpc3QtaXRlbVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI5MHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcImJvcmRlci1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNjOGM3Y2NcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIlxuICB9LFxuICBcImxpc3QtaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI5MHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjkwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMyRjg1RkNcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcInRleHRpY29uc1wiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibGlzdC10ZXh0XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjkwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiOTBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzU1NTU1NVwiLFxuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwibmF2aWdhdC1hcnJvd1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI5MHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI0MHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjkwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwidGV4dGljb25zXCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge30iXSwic291cmNlUm9vdCI6IiJ9