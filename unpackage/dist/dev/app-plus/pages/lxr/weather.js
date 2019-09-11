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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
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

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/*!******************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/main.js?{"page":"pages%2Flxr%2Fweather"} ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_lxr_weather_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/lxr/weather.nvue?mpType=page */ 27);


_pages_lxr_weather_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_pages_lxr_weather_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'pages/lxr/weather'
_pages_lxr_weather_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'
_pages_lxr_weather_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle = {}
Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 18).default,_pages_lxr_weather_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle)

new Vue(_pages_lxr_weather_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 27 */
/*!************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/lxr/weather.nvue?mpType=page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_nvue_vue_type_template_id_523fd4e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.nvue?vue&type=template&id=523fd4e7&mpType=page */ 28);
/* harmony import */ var _weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.nvue?vue&type=script&lang=js&mpType=page */ 30);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./weather.nvue?vue&type=style&index=0&lang=css&mpType=page */ 32).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./weather.nvue?vue&type=style&index=0&lang=css&mpType=page */ 32).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _weather_nvue_vue_type_template_id_523fd4e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _weather_nvue_vue_type_template_id_523fd4e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "47e73db4"
  
)

component.options.__file = "E:/msy/code/node/appStore/appStore2/前端小工具/pages/lxr/weather.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
/*!******************************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/lxr/weather.nvue?vue&type=template&id=523fd4e7&mpType=page ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_template_id_523fd4e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!./weather.nvue?vue&type=template&id=523fd4e7&mpType=page */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_template_id_523fd4e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_template_id_523fd4e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 29 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/lxr/weather.nvue?vue&type=template&id=523fd4e7&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticStyle: { height: "100%" } }, [
        _vm.weather == 1
          ? _c(
              "view",
              {
                staticClass: ["bg", "weather", "rain", "viewBg"],
                on: {
                  click: function($event) {
                    return _vm.toDo()
                  }
                }
              },
              [
                _c("view", { staticClass: ["wt_date"] }, [
                  _c(
                    "view",
                    {
                      staticClass: ["text"],
                      style: "padding-top:" + 4 + "rem;"
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.City) +
                          " " +
                          _vm._s(_vm.date) +
                          " " +
                          _vm._s(_vm.Desc)
                      )
                    ]
                  )
                ]),
                _c(
                  "view",
                  { staticClass: ["pm"], style: "padding-top:" + 0.1 + "rem;" },
                  [_vm._v("PM2.5：" + _vm._s(_vm.pm25))]
                ),
                _c("view", { staticClass: ["tips"] }, [
                  _vm._v(_vm._s(_vm.tips))
                ]),
                _c("u-image", {
                  staticClass: ["rainImgText"],
                  attrs: {
                    dataWeather: "2",
                    mode: "widthFix",
                    src: "../../static/lxr/rain_text.png"
                  }
                }),
                _c("u-image", {
                  staticClass: ["rainImgWindows"],
                  attrs: {
                    mode: "widthFix",
                    src: "../../static/lxr/rain_windows.png"
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm.weather == 2
          ? _c(
              "view",
              {
                staticClass: ["bg", "weather", "snow", "viewBg"],
                on: {
                  click: function($event) {
                    return _vm.toDo()
                  }
                }
              },
              [
                _c("view", { staticClass: ["wt_date"] }, [
                  _c(
                    "view",
                    {
                      staticClass: ["text"],
                      style: "padding-top:" + 4 + "rem;"
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.City) +
                          " " +
                          _vm._s(_vm.date) +
                          " " +
                          _vm._s(_vm.Desc)
                      )
                    ]
                  )
                ]),
                _c(
                  "view",
                  { staticClass: ["pm"], style: "padding-top:" + 0.1 + "rem;" },
                  [_vm._v("PM2.5：" + _vm._s(_vm.pm25))]
                ),
                _c("view", { staticClass: ["tips"] }, [
                  _vm._v(_vm._s(_vm.tips))
                ]),
                _c("u-image", {
                  staticClass: ["rainImgText"],
                  attrs: {
                    dataWeather: "1",
                    mode: "widthFix",
                    src: "../../static/lxr/snow_text.png"
                  }
                }),
                _c("u-image", {
                  staticClass: ["rainImgWindows"],
                  attrs: {
                    mode: "widthFix",
                    src: "../../static/lxr/snow_decorate.png"
                  }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 30 */
/*!************************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/lxr/weather.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!./weather.nvue?vue&type=script&lang=js&mpType=page */ 31);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/lxr/weather.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
//
var _default =
{
  data: function data() {
    return {
      weather: 1, //1为下雨 2为下雪
      City: "", //城市
      pm25: 0, //PM2.5
      Desc: "", //天气
      wind: 0, //分级
      temperature: 0, //温度
      date: "", //日期
      tips: "" //穿衣提醒
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      var that = this;
      uni.getLocation({
        //获取位置经纬度
        type: "wgs84",
        success: function success(res) {
          var apiData = {
            location: res.longitude + "," + res.latitude,
            output: "json",
            ak: "zsi4wd2qXIx5ZqODu27XwEfiBFBeCI6o" };

          // 获取天气信息
          uni.request({
            url: "https://api.map.baidu.com/telematics/v3/weather?",
            data: apiData,
            method: "GET",
            success: function success(res) {
              console.log(__f__(res.data, " at pages\\lxr\\weather.nvue:80"));
              if (res.data.error == 0) {
                var baiduAPIdata = res.data.results[0];
                var weather_data = baiduAPIdata.weather_data[0];
                that.City = baiduAPIdata.currentCity; //城市
                that.pm25 = baiduAPIdata.pm25; //PM2.5
                that.Desc = weather_data.weather; //天气
                that.wind = weather_data.wind; //分级
                that.temperature = weather_data.temperature; //温度
                that.date = weather_data.date; //日期
                that.tips = baiduAPIdata.index[0].des; //穿衣提醒
                console.log(__f__(that.tips, " at pages\\lxr\\weather.nvue:91"));
              }
            } });

        },
        cancel: function cancel(res) {
          console.log(__f__("wgs84cacel", res, " at pages\\lxr\\weather.nvue:97"));
        },
        fail: function fail(res) {
          //返回fail:invalid data
          console.log(__f__("wgs84fail", res, " at pages\\lxr\\weather.nvue:101"));
        } });

    },
    toDo: function toDo() {
      this.weather === 1 ? this.weather = 2 : this.weather = 1;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 6)["default"]))

/***/ }),
/* 32 */
/*!********************************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/lxr/weather.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!./weather.nvue?vue&type=style&index=0&lang=css&mpType=page */ 33);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_weather_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/lxr/weather.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "viewBg": {
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "height": 100
  },
  "weather": {
    "position": "relative",
    "overflow": "hidden",
    "content:before": "\"\"",
    "position:before": "absolute",
    "left:before": -50,
    "top:before": -50,
    "right:before": -50,
    "bottom:before": -50,
    "zIndex:before": 1,
    "pointerEvents:before": "none",
    "background:before": "transparent repeat",
    "opacity:before": 0.5,
    "transform:before": "rotate(0deg)",
    "animationName:before": "w",
    "animationTimingFunction:before": "linear",
    "animationIterationCount:before": "infinite",
    "content:before:after": "\"\"",
    "position:before:after": "absolute",
    "left:before:after": -50,
    "top:before:after": -50,
    "right:before:after": -50,
    "bottom:before:after": -50,
    "zIndex:before:after": 1,
    "pointerEvents:before:after": "none",
    "background:before:after": "transparent repeat",
    "opacity:before:after": 0.5,
    "transform:before:after": "rotate(0deg)",
    "animationName:before:after": "w",
    "animationTimingFunction:before:after": "linear",
    "animationIterationCount:before:after": "infinite",
    "opacity:after": 0.6,
    "backgroundPosition:after": "64rpx 64rpx",
    "animationName:after": "x"
  },
  "Bweather": {
    "width": 100,
    "textAlign": "center",
    "lineHeight": "40",
    "paddingTop": "150",
    "color": "#ffffff",
    "fontWeight": "600"
  },
  "bg": {
    "height": 100,
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "100% 100%",
    "width": 100
  },
  "rainImgWindows": {
    "display": "flex",
    "position": "fixed",
    "bottom": "0rpx",
    "width": 100
  },
  "rainImgText": {
    "zIndex": 10,
    "width": 100
  },
  "wt_date": {
    "display": "flex",
    "alignItems": "center"
  },
  "text": {
    "color": "#ffffff",
    "opacity": 0.8,
    "paddingLeft": "25rpx",
    "fontSize": "30rpx",
    "fontFamily": "\"cyqk\""
  },
  "tips": {
    "color": "#ffffff",
    "opacity": 0.8,
    "fontSize": "30rpx",
    "textIndent": "60rpx",
    "paddingTop": 0,
    "paddingRight": "40rpx",
    "paddingBottom": 0,
    "paddingLeft": "40rpx",
    "lineHeight": "50rpx",
    "fontFamily": "\"cyqk\""
  },
  "pm": {
    "color": "#ffffff",
    "opacity": 0.8,
    "paddingLeft": "25rpx",
    "fontSize": "30rpx",
    "display": "flex",
    "position": "fixed",
    "left": "8rpx",
    "top": "95rpx"
  },
  "@FONT-FACE": [
    {
      "fontFamily": "cyqk",
      "src": "url(\"http://download.tpengyun.cn/res/WeatherTop/font.ttf\")",
      "fontWeight": "normal",
      "fontStyle": "normal"
    }
  ]
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L0FwcC52dWU/N2U5MyIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L0FwcC52dWU/ZmQ0OSIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L21haW4uanM/Y2YxZiIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL2x4ci93ZWF0aGVyLm52dWU/ZTJmNCIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL2x4ci93ZWF0aGVyLm52dWU/NzhhNCIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL2x4ci93ZWF0aGVyLm52dWU/NzlhNiIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL2x4ci93ZWF0aGVyLm52dWU/OTBhOCIsInVuaS1hcHA6Ly8vcGFnZXMvbHhyL3dlYXRoZXIubnZ1ZSIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL2x4ci93ZWF0aGVyLm52dWU/YzFhOSIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL2x4ci93ZWF0aGVyLm52dWU/ZmIxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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RTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQWlyQixDQUFnQix1c0JBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXJzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy9seHIvd2VhdGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNik7XG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xyXG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKC4uLmFyZ3MpIHtcclxuICBjb25zdCBtc2dzID0gYXJncy5tYXAoKHYpID0+IHtcclxuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XHJcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xyXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xyXG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHYgPSBTdHJpbmcodilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2XHJcbiAgfSlcclxuICBsZXQgbXNnID0gJydcclxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBsYXN0TXNnID0gbXNncy5wb3AoKVxyXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXHJcbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcclxuICAgICAgbXNnICs9IGxhc3RNc2dcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPSBtc2dzWzBdXHJcbiAgfVxyXG4gIHJldHVybiBtc2dcclxufVxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge30iLCJcbmltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9seHIvd2VhdGhlci5udnVlP21wVHlwZT1wYWdlJ1xuQXBwLm1wVHlwZSA9ICdwYWdlJ1xuQXBwLnJvdXRlID0gJ3BhZ2VzL2x4ci93ZWF0aGVyJ1xuQXBwLmVsID0gJyNyb290J1xuQXBwLmFwcFN0eWxlID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxBcHAuYXBwU3R5bGUpXG5cbm5ldyBWdWUoQXBwKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi93ZWF0aGVyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTIzZmQ0ZTcmbXBUeXBlPXBhZ2VcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93ZWF0aGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vd2VhdGhlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3dlYXRoZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi93ZWF0aGVyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCI0N2U3M2RiNFwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9seHIvd2VhdGhlci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vd2VhdGhlci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyM2ZkNGU3Jm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwJVwiIH0gfSwgW1xuICAgICAgICBfdm0ud2VhdGhlciA9PSAxXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYmdcIiwgXCJ3ZWF0aGVyXCIsIFwicmFpblwiLCBcInZpZXdCZ1wiXSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRG8oKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ3dF9kYXRlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0ZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcInBhZGRpbmctdG9wOlwiICsgNCArIFwicmVtO1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLkNpdHkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRhdGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLkRlc2MpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInBtXCJdLCBzdHlsZTogXCJwYWRkaW5nLXRvcDpcIiArIDAuMSArIFwicmVtO1wiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUE0yLjXvvJpcIiArIF92bS5fcyhfdm0ucG0yNSkpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRpcHNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGlwcykpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJyYWluSW1nVGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFXZWF0aGVyOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJ3aWR0aEZpeFwiLFxuICAgICAgICAgICAgICAgICAgICBzcmM6IFwiLi4vLi4vc3RhdGljL2x4ci9yYWluX3RleHQucG5nXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInJhaW5JbWdXaW5kb3dzXCJdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJ3aWR0aEZpeFwiLFxuICAgICAgICAgICAgICAgICAgICBzcmM6IFwiLi4vLi4vc3RhdGljL2x4ci9yYWluX3dpbmRvd3MucG5nXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLndlYXRoZXIgPT0gMlxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImJnXCIsIFwid2VhdGhlclwiLCBcInNub3dcIiwgXCJ2aWV3QmdcIl0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0RvKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wid3RfZGF0ZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJwYWRkaW5nLXRvcDpcIiArIDQgKyBcInJlbTtcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5DaXR5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kYXRlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5EZXNjKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwbVwiXSwgc3R5bGU6IFwicGFkZGluZy10b3A6XCIgKyAwLjEgKyBcInJlbTtcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlBNMi4177yaXCIgKyBfdm0uX3MoX3ZtLnBtMjUpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0aXBzXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpcHMpKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wicmFpbkltZ1RleHRcIl0sXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhV2VhdGhlcjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwid2lkdGhGaXhcIixcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi4uLy4uL3N0YXRpYy9seHIvc25vd190ZXh0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJyYWluSW1nV2luZG93c1wiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwid2lkdGhGaXhcIixcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi4uLy4uL3N0YXRpYy9seHIvc25vd19kZWNvcmF0ZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi93ZWF0aGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL3dlYXRoZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwJVwiPlxyXG4gICAgPHZpZXdcclxuICAgICAgQGNsaWNrPVwidG9EbygpXCJcclxuICAgICAgdi1pZj1cIndlYXRoZXI9PTFcIlxyXG4gICAgICBjbGFzcz1cImJnIHdlYXRoZXIgcmFpbiB2aWV3QmdcIlxyXG4gICAgICBzdHlsZT1cImJhY2tncm91bmQ6IHVybCgnaHR0cDovL2Rvd25sb2FkLnRwZW5neXVuLmNuL3Jlcy9XZWF0aGVyVG9wL3JhaW5fYmFja2dyb3VuZC5qcGcnKTtcIlxyXG4gICAgPlxyXG4gICAgICA8dmlldyBjbGFzcz1cInd0X2RhdGVcIiA+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0XCIgOnN0eWxlPVwiJ3BhZGRpbmctdG9wOicrNCsncmVtOydcIj57e0NpdHl9fSB7e2RhdGV9fSB7e0Rlc2N9fTwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cInBtXCIgOnN0eWxlPVwiJ3BhZGRpbmctdG9wOicrMC4xKydyZW07J1wiPlBNMi4177yae3twbTI1fX08L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwidGlwc1wiPnt7dGlwc319PC92aWV3PlxyXG4gICAgICA8aW1hZ2VcclxuICAgICAgICBkYXRhLXdlYXRoZXI9XCIyXCJcclxuICAgICAgICBjbGFzcz1cInJhaW5JbWdUZXh0XCJcclxuICAgICAgICBtb2RlPVwid2lkdGhGaXhcIlxyXG4gICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9seHIvcmFpbl90ZXh0LnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbWFnZSBjbGFzcz1cInJhaW5JbWdXaW5kb3dzXCIgbW9kZT1cIndpZHRoRml4XCIgc3JjPVwiLi4vLi4vc3RhdGljL2x4ci9yYWluX3dpbmRvd3MucG5nXCIgLz5cclxuICAgIDwvdmlldz5cclxuICAgIDwhLS0g5LiL6Zuq5aSpIC0tPlxyXG4gICAgPHZpZXdcclxuICAgICAgQGNsaWNrPVwidG9EbygpXCJcclxuICAgICAgdi1pZj1cIndlYXRoZXI9PTJcIlxyXG4gICAgICBjbGFzcz1cImJnIHdlYXRoZXIgc25vdyB2aWV3QmdcIlxyXG4gICAgICBzdHlsZT1cIiBiYWNrZ3JvdW5kOiB1cmwoICdodHRwOi8vZG93bmxvYWQudHBlbmd5dW4uY24vcmVzL1dlYXRoZXJUb3Avc25vd19iYWNrZ3JvdW5kLmpwZycpO1wiXHJcbiAgICA+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwid3RfZGF0ZVwiID5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInRleHRcIiA6c3R5bGU9XCIncGFkZGluZy10b3A6Jys0KydyZW07J1wiPnt7Q2l0eX19IHt7ZGF0ZX19IHt7RGVzY319PC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwicG1cIiA6c3R5bGU9XCIncGFkZGluZy10b3A6JyswLjErJ3JlbTsnXCI+UE0yLjXvvJp7e3BtMjV9fTwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJ0aXBzXCI+e3t0aXBzfX08L3ZpZXc+XHJcbiAgICAgIDxpbWFnZVxyXG4gICAgICAgIGRhdGEtd2VhdGhlcj1cIjFcIlxyXG4gICAgICAgIGNsYXNzPVwicmFpbkltZ1RleHRcIlxyXG4gICAgICAgIG1vZGU9XCJ3aWR0aEZpeFwiXHJcbiAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2x4ci9zbm93X3RleHQucG5nXCJcclxuICAgICAgLz5cclxuICAgICAgPGltYWdlIGNsYXNzPVwicmFpbkltZ1dpbmRvd3NcIiBtb2RlPVwid2lkdGhGaXhcIiBzcmM9XCIuLi8uLi9zdGF0aWMvbHhyL3Nub3dfZGVjb3JhdGUucG5nXCIgLz5cclxuICAgIDwvdmlldz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2VhdGhlcjogMSwgLy8x5Li65LiL6ZuoIDLkuLrkuIvpm6pcclxuICAgICAgQ2l0eTogXCJcIiwgLy/ln47luIJcclxuICAgICAgcG0yNTogMCwgLy9QTTIuNVxyXG4gICAgICBEZXNjOiBcIlwiLCAvL+WkqeawlFxyXG4gICAgICB3aW5kOiAwLCAvL+WIhue6p1xyXG4gICAgICB0ZW1wZXJhdHVyZTogMCwgLy/muKnluqZcclxuICAgICAgZGF0ZTogXCJcIiwgLy/ml6XmnJ9cclxuICAgICAgdGlwczogXCJcIiAvL+epv+iho+aPkOmGklxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgdW5pLmdldExvY2F0aW9uKHtcclxuICAgICAgICAvL+iOt+WPluS9jee9rue7j+e6rOW6plxyXG4gICAgICAgIHR5cGU6IFwid2dzODRcIixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIHZhciBhcGlEYXRhID0ge1xyXG4gICAgICAgICAgICBsb2NhdGlvbjogcmVzLmxvbmdpdHVkZSArIFwiLFwiICsgcmVzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IFwianNvblwiLFxyXG4gICAgICAgICAgICBhazogXCJ6c2k0d2QycVhJeDVacU9EdTI3WHdFZmlCRkJlQ0k2b1wiXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgLy8g6I635Y+W5aSp5rCU5L+h5oGvXHJcbiAgICAgICAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL3RlbGVtYXRpY3MvdjMvd2VhdGhlcj9cIixcclxuICAgICAgICAgICAgZGF0YTogYXBpRGF0YSxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycm9yID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBiYWlkdUFQSWRhdGEgPSByZXMuZGF0YS5yZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdlYXRoZXJfZGF0YSA9IGJhaWR1QVBJZGF0YS53ZWF0aGVyX2RhdGFbMF07XHJcbiAgICAgICAgICAgICAgICB0aGF0LkNpdHkgPSBiYWlkdUFQSWRhdGEuY3VycmVudENpdHk7IC8v5Z+O5biCXHJcbiAgICAgICAgICAgICAgICB0aGF0LnBtMjUgPSBiYWlkdUFQSWRhdGEucG0yNTsgLy9QTTIuNVxyXG4gICAgICAgICAgICAgICAgdGhhdC5EZXNjID0gd2VhdGhlcl9kYXRhLndlYXRoZXI7IC8v5aSp5rCUXHJcbiAgICAgICAgICAgICAgICB0aGF0LndpbmQgPSB3ZWF0aGVyX2RhdGEud2luZDsgLy/liIbnuqdcclxuICAgICAgICAgICAgICAgIHRoYXQudGVtcGVyYXR1cmUgPSB3ZWF0aGVyX2RhdGEudGVtcGVyYXR1cmU7IC8v5rip5bqmXHJcbiAgICAgICAgICAgICAgICB0aGF0LmRhdGUgPSB3ZWF0aGVyX2RhdGEuZGF0ZTsgLy/ml6XmnJ9cclxuICAgICAgICAgICAgICAgIHRoYXQudGlwcyA9IGJhaWR1QVBJZGF0YS5pbmRleFswXS5kZXM7IC8v56m/6KGj5o+Q6YaSXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LnRpcHMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ3Z3M4NGNhY2VsXCIsIHJlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIC8v6L+U5ZueZmFpbDppbnZhbGlkIGRhdGFcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwid2dzODRmYWlsXCIsIHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB0b0RvKCkge1xyXG4gICAgICB0aGlzLndlYXRoZXI9PT0xP3RoaXMud2VhdGhlcj0yOnRoaXMud2VhdGhlcj0xXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnZpZXdCZyB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4vKiBcclxuICrov5nkuKrmmK/nm7TmjqXku47nvZHkuIrmiZLkuIvmnaXnmoTvvIznqI3lvq7lgZrkuobngrnnsr7nroAuXHJcbiAq5Yqo55S75YiG5Li65Lik5bGCLOS4gOWxguS4uui+g+aFoizkuIDlsYLkuLrovoPlv6vnmoQs6L+Z5qC35pu06YC855yf5LiA5LqbIVxyXG4gKi9cclxuLndlYXRoZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ud2VhdGhlcjpiZWZvcmUsXHJcbi53ZWF0aGVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtNTAlO1xyXG4gIHRvcDogLTUwJTtcclxuICByaWdodDogLTUwJTtcclxuICBib3R0b206IC01MCU7XHJcbiAgei1pbmRleDogMTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCByZXBlYXQ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAvKuS4i+mbqCjkuIvpm6op55qE5Y+N5ZCRKi9cclxuICBhbmltYXRpb24tbmFtZTogdztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi53ZWF0aGVyOmFmdGVyIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNjRycHggNjRycHg7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHg7XHJcbn1cclxuXHJcbi8qIOS4i+mbqCAqL1xyXG4ud2VhdGhlci5yYWluOmJlZm9yZSxcclxuLndlYXRoZXIucmFpbjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vc3RhdGljL2x4ci9yYWluLnBuZ1wiKTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAvKuS4i+mbqOi+g+aFouWxgu+8jOiHquihjOiwg+aVtCovXHJcbn1cclxuXHJcbi53ZWF0aGVyLnJhaW46YWZ0ZXIge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41czsgLyrkuIvpm6jovoPlv6vlsYLvvIzoh6rooYzosIPmlbQqL1xyXG59XHJcblxyXG4vKiDkuIvpm6ogKi9cclxuLndlYXRoZXIuc25vdzpiZWZvcmUsXHJcbi53ZWF0aGVyLnNub3c6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL3N0YXRpYy9seHIvc25vdy5wbmdcIik7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7IC8q5LiL6Zuo6L6D5oWi5bGC77yM6Ieq6KGM6LCD5pW0Ki9cclxufVxyXG5cclxuLndlYXRoZXIuc25vdzphZnRlciB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7IC8q5LiL6Zuq6L6D5b+r5bGC77yM6Ieq6KGM6LCD5pW0Ki9cclxufVxyXG5cclxuLyog5Yqo55S76K6+572uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyB3IHtcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHJweDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMjA0OHJweDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdyB7XHJcbiAgZnJvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBycHg7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDIwNDhycHg7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgeCB7XHJcbiAgZnJvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMjhycHggMTI4cnB4O1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTI4cnB4IDIxNzZycHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHgge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjE4cnB4IDEyOHJweDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyOHJweCAyMTc2cnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyog5qC35byP5qC55o2u6Ieq5bex6ZyA5rGC5pS55ZCnICovXHJcbi5Cd2VhdGhlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5wYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yYWluSW1nV2luZG93cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwcnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmFpbkltZ1RleHQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud3RfZGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHBhZGRpbmctbGVmdDogMjVycHg7XHJcbiAgZm9udC1zaXplOiAzMHJweDtcclxuICBmb250LWZhbWlseTogXCJjeXFrXCI7XHJcbn1cclxuLnRpcHMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBmb250LXNpemU6IDMwcnB4O1xyXG4gIHRleHQtaW5kZW50OiA2MHJweDtcclxuICBwYWRkaW5nOiAwIDQwcnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuICBmb250LWZhbWlseTogXCJjeXFrXCI7XHJcbn1cclxuXHJcbi5wbSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHBhZGRpbmctbGVmdDogMjVycHg7XHJcbiAgZm9udC1zaXplOiAzMHJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA4cnB4O1xyXG4gIHRvcDogOTVycHg7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiY3lxa1wiO1xyXG4gIHNyYzogdXJsKFwiaHR0cDovL2Rvd25sb2FkLnRwZW5neXVuLmNuL3Jlcy9XZWF0aGVyVG9wL2ZvbnQudHRmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi93ZWF0aGVyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL3dlYXRoZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ2aWV3QmdcIjoge1xuICAgIFwiYmFja2dyb3VuZFJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCJjb3ZlclwiLFxuICAgIFwiaGVpZ2h0XCI6IDEwMFxuICB9LFxuICBcIndlYXRoZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXCJcIixcbiAgICBcInBvc2l0aW9uOmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0OmJlZm9yZVwiOiAtNTAsXG4gICAgXCJ0b3A6YmVmb3JlXCI6IC01MCxcbiAgICBcInJpZ2h0OmJlZm9yZVwiOiAtNTAsXG4gICAgXCJib3R0b206YmVmb3JlXCI6IC01MCxcbiAgICBcInpJbmRleDpiZWZvcmVcIjogMSxcbiAgICBcInBvaW50ZXJFdmVudHM6YmVmb3JlXCI6IFwibm9uZVwiLFxuICAgIFwiYmFja2dyb3VuZDpiZWZvcmVcIjogXCJ0cmFuc3BhcmVudCByZXBlYXRcIixcbiAgICBcIm9wYWNpdHk6YmVmb3JlXCI6IDAuNSxcbiAgICBcInRyYW5zZm9ybTpiZWZvcmVcIjogXCJyb3RhdGUoMGRlZylcIixcbiAgICBcImFuaW1hdGlvbk5hbWU6YmVmb3JlXCI6IFwid1wiLFxuICAgIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246YmVmb3JlXCI6IFwibGluZWFyXCIsXG4gICAgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudDpiZWZvcmVcIjogXCJpbmZpbml0ZVwiLFxuICAgIFwiY29udGVudDpiZWZvcmU6YWZ0ZXJcIjogXCJcXFwiXFxcIlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnQ6YmVmb3JlOmFmdGVyXCI6IC01MCxcbiAgICBcInRvcDpiZWZvcmU6YWZ0ZXJcIjogLTUwLFxuICAgIFwicmlnaHQ6YmVmb3JlOmFmdGVyXCI6IC01MCxcbiAgICBcImJvdHRvbTpiZWZvcmU6YWZ0ZXJcIjogLTUwLFxuICAgIFwiekluZGV4OmJlZm9yZTphZnRlclwiOiAxLFxuICAgIFwicG9pbnRlckV2ZW50czpiZWZvcmU6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJiYWNrZ3JvdW5kOmJlZm9yZTphZnRlclwiOiBcInRyYW5zcGFyZW50IHJlcGVhdFwiLFxuICAgIFwib3BhY2l0eTpiZWZvcmU6YWZ0ZXJcIjogMC41LFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZTphZnRlclwiOiBcInJvdGF0ZSgwZGVnKVwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZTpiZWZvcmU6YWZ0ZXJcIjogXCJ3XCIsXG4gICAgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbjpiZWZvcmU6YWZ0ZXJcIjogXCJsaW5lYXJcIixcbiAgICBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OmJlZm9yZTphZnRlclwiOiBcImluZmluaXRlXCIsXG4gICAgXCJvcGFjaXR5OmFmdGVyXCI6IDAuNixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbjphZnRlclwiOiBcIjY0cnB4IDY0cnB4XCIsXG4gICAgXCJhbmltYXRpb25OYW1lOmFmdGVyXCI6IFwieFwiXG4gIH0sXG4gIFwiQndlYXRoZXJcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNTBcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiXG4gIH0sXG4gIFwiYmdcIjoge1xuICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICBcImJhY2tncm91bmRSZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IFwiMTAwJSAxMDAlXCIsXG4gICAgXCJ3aWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJyYWluSW1nV2luZG93c1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwid2lkdGhcIjogMTAwXG4gIH0sXG4gIFwicmFpbkltZ1RleHRcIjoge1xuICAgIFwiekluZGV4XCI6IDEwLFxuICAgIFwid2lkdGhcIjogMTAwXG4gIH0sXG4gIFwid3RfZGF0ZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIm9wYWNpdHlcIjogMC44LFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNXJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIlxcXCJjeXFrXFxcIlwiXG4gIH0sXG4gIFwidGlwc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIm9wYWNpdHlcIjogMC44LFxuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiLFxuICAgIFwidGV4dEluZGVudFwiOiBcIjYwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiXFxcImN5cWtcXFwiXCJcbiAgfSxcbiAgXCJwbVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIm9wYWNpdHlcIjogMC44LFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNXJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogXCI4cnB4XCIsXG4gICAgXCJ0b3BcIjogXCI5NXJweFwiXG4gIH0sXG4gIFwiQEZPTlQtRkFDRVwiOiBbXG4gICAge1xuICAgICAgXCJmb250RmFtaWx5XCI6IFwiY3lxa1wiLFxuICAgICAgXCJzcmNcIjogXCJ1cmwoXFxcImh0dHA6Ly9kb3dubG9hZC50cGVuZ3l1bi5jbi9yZXMvV2VhdGhlclRvcC9mb250LnR0ZlxcXCIpXCIsXG4gICAgICBcImZvbnRXZWlnaHRcIjogXCJub3JtYWxcIixcbiAgICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCJcbiAgICB9XG4gIF1cbn0iXSwic291cmNlUm9vdCI6IiJ9