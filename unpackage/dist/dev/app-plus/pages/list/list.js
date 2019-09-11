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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
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
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/*!****************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/main.js?{"page":"pages%2Flist%2Flist"} ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_list_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/list/list.nvue?mpType=page */ 44);


_pages_list_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_pages_list_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'pages/list/list'
_pages_list_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'
_pages_list_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle = {}
Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 18).default,_pages_list_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle)

new Vue(_pages_list_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 44 */
/*!**********************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list.nvue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_nvue_vue_type_template_id_4155ff7a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.nvue?vue&type=template&id=4155ff7a&mpType=page */ 45);
/* harmony import */ var _list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.nvue?vue&type=script&lang=js&mpType=page */ 47);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 57).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 57).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_nvue_vue_type_template_id_4155ff7a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_nvue_vue_type_template_id_4155ff7a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "bf97d454"
  
)

component.options.__file = "E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 45 */
/*!****************************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list.nvue?vue&type=template&id=4155ff7a&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_template_id_4155ff7a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!./list.nvue?vue&type=template&id=4155ff7a&mpType=page */ 46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_template_id_4155ff7a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_template_id_4155ff7a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 46 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list.nvue?vue&type=template&id=4155ff7a&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "view",
        { staticClass: ["tabs"] },
        [
          _c(
            "scroll-view",
            {
              staticClass: ["scroll-h"],
              attrs: {
                id: "tab-bar",
                scrollX: true,
                showScrollbar: false,
                scrollIntoView: _vm.scrollInto
              }
            },
            _vm._l(_vm.tabBars, function(tab, index) {
              return _c(
                "view",
                {
                  key: tab.id,
                  staticClass: ["uni-tab-item"],
                  attrs: { id: tab.id, dataCurrent: index },
                  on: { click: _vm.ontabtap }
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["uni-tab-item-title"],
                      class:
                        _vm.tabIndex == index ? "uni-tab-item-title-active" : ""
                    },
                    [_vm._v(_vm._s(tab.name))]
                  )
                ],
                1
              )
            }),
            0
          ),
          _c("view", { staticClass: ["line-h"] }),
          _c(
            "swiper",
            {
              staticClass: ["swiper-box"],
              staticStyle: { flex: "1" },
              attrs: { current: _vm.tabIndex, duration: 300 },
              on: { change: _vm.ontabchange }
            },
            _vm._l(_vm.newsList, function(tab, index1) {
              return _c(
                "swiper-item",
                { key: index1, staticClass: ["swiper-item"] },
                [
                  _c(
                    "list",
                    {
                      staticClass: ["scroll-v", "list"],
                      attrs: {
                        enableBackToTop: "true",
                        scrollY: true,
                        loadmoreoffset: "10"
                      },
                      on: {
                        loadmore: function($event) {
                          return _vm.loadMore(index1)
                        }
                      }
                    },
                    [
                      _c(
                        "refresh",
                        {
                          staticClass: ["refresh"],
                          attrs: { display: tab.refreshing ? "show" : "hide" },
                          on: {
                            refresh: function($event) {
                              return _vm.onrefresh(index1)
                            },
                            pullingdown: _vm.onpullingdown
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: ["refresh-view"] },
                            [
                              _c("u-image", {
                                staticClass: ["refresh-icon"],
                                class: {
                                  "refresh-icon-active": tab.refreshFlag
                                },
                                style: {
                                  width:
                                    tab.refreshing || _vm.pulling ? 0 : "30px"
                                },
                                attrs: { src: _vm.refreshIcon }
                              }),
                              tab.refreshing
                                ? _c("loading-indicator", {
                                    staticClass: ["loading-icon"],
                                    attrs: { animating: "true" }
                                  })
                                : _vm._e(),
                              _c("u-text", { staticClass: ["loading-text"] }, [
                                _vm._v(_vm._s(tab.refreshText))
                              ])
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._l(tab.data, function(newsitem, index2) {
                        return _c(
                          "cell",
                          {
                            key: newsitem.id,
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [
                            _c("media-item", {
                              attrs: { options: newsitem },
                              on: {
                                close: function($event) {
                                  return _vm.dislike(index1, index2)
                                },
                                click: function($event) {
                                  return _vm.goDetail(newsitem)
                                }
                              }
                            })
                          ],
                          1
                        )
                      }),
                      tab.isLoading
                        ? _c(
                            "cell",
                            {
                              staticClass: ["loading-more"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [
                              _c(
                                "u-text",
                                { staticClass: ["loading-more-text"] },
                                [_vm._v(_vm._s(tab.loadingText))]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    2
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 47 */
/*!**********************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!./list.nvue?vue&type=script&lang=js&mpType=page */ 48);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 48 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































var _util = __webpack_require__(/*! @/common/util.js */ 49);



var _listItem = _interopRequireDefault(__webpack_require__(/*! ./list-item.nvue */ 50));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
// 缓存每页最多
var MAX_CACHE_DATA = 100; // 缓存页签数量
var MAX_CACHE_PAGE = 3;var _default = { components: { mediaItem: _listItem.default }, data: function data() {return { newsList: [], cacheTab: [], tabIndex: 0, tabBars: [{ id: "tab01", name: '最新', newsid: 0 }, { id: "tab02", name: '大公司', newsid: 23 }, { id: "tab03", name: '内容', newsid: 223 }, { id: "tab04", name: '消费', newsid: 221 }, { id: "tab05", name: '娱乐', newsid: 225 }, { id: "tab06", name: '区块链', newsid: 208 }], scrollInto: "", showTips: false, navigateFlag: false,
      pulling: false,
      refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==" };

  },
  onLoad: function onLoad() {var _this = this;
    this.tabBars.forEach(function (tabBar) {
      _this.newsList.push({
        data: [],
        refreshing: false,
        refreshFlag: false,
        refreshText: "",
        requestParams: {
          columnId: tabBar.newsid,
          minId: 0,
          pageSize: 10,
          column: 'id,post_id,title,author_name,cover,published_at,comments_count' },

        isLoading: false,
        loadingText: '加载中...' });

    });
    this.getList(0);
  },
  methods: {
    getList: function getList(index) {var _this2 = this;var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var activeTab = this.newsList[index];
      activeTab.requestParams.time = new Date().getTime() + '';
      if (action === 1) {
        activeTab.requestParams.minId = 0;
      }
      activeTab.isLoading = true;
      uni.request({
        url: 'https://unidemo.dcloud.net.cn/api/news',
        data: activeTab.requestParams,
        success: function success(result) {
          if (result.statusCode !== 200) {
            return;
          }
          var data = result.data.map(function (news) {
            return {
              id: _this2.newGuid() + news.id,
              newsid: news.id,
              article_type: 1,
              datetime: (0, _util.friendlyDate)(new Date(news.published_at.replace(/\-/g, '/')).getTime()),
              title: news.title,
              image_url: news.cover,
              source: news.author_name,
              comment_count: news.comments_count,
              post_id: news.post_id };

          });
          if (action === 1) {
            activeTab.data = data;
            _this2.refreshing = false;
          } else {
            data.forEach(function (news) {
              activeTab.data.push(news);
            });
          }
          activeTab.requestParams.minId = data[data.length - 1].newsid;
        },
        fail: function fail(err) {
          uni.showModal({
            content: err.errMsg,
            showCancel: false });

        },
        complete: function complete(e) {
          activeTab.isLoading = false;
        } });

    },
    goDetail: function goDetail(detail) {var _this3 = this;
      if (this.navigateFlag) {
        return;
      }
      this.navigateFlag = true;
      uni.navigateTo({
        url: '/pages/detail/detail?query=' + encodeURIComponent(JSON.stringify(detail)) });

      setTimeout(function () {
        _this3.navigateFlag = false;
      }, 200);
    },
    dislike: function dislike(tabIndex, newsIndex) {var _this4 = this;
      uni.showModal({
        content: '不感兴趣？',
        success: function success(res) {
          if (res.confirm) {
            _this4.newsList[tabIndex].data.splice(newsIndex, 1);
          }
        } });

    },
    loadMore: function loadMore(e) {
      this.getList(this.tabIndex, 2);
    },
    ontabtap: function ontabtap(e) {
      var index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index);
    },
    ontabchange: function ontabchange(e) {
      var index = e.target.current || e.detail.current;
      this.switchTab(index);
    },
    switchTab: function switchTab(index) {
      if (this.newsList[index].data.length === 0) {
        this.getList(index);
      }

      if (this.tabIndex === index) {
        return;
      }

      // 缓存 tabId
      if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
        var isExist = this.cacheTab.indexOf(this.tabIndex);
        if (isExist < 0) {
          this.cacheTab.push(this.tabIndex);
          //console.log("cache index:: " + this.tabIndex);
        }
      }

      this.tabIndex = index;
      this.scrollInto = this.tabBars[index].id;

      // 释放 tabId
      if (this.cacheTab.length > MAX_CACHE_PAGE) {
        var cacheIndex = this.cacheTab[0];
        this.clearTabData(cacheIndex);
        this.cacheTab.splice(0, 1);
        //console.log("remove cache index:: " + cacheIndex);
      }
    },
    clearTabData: function clearTabData(e) {
      this.newsList[e].data.length = 0;
      this.newsList[e].loadingText = "加载更多...";
    },
    refreshData: function refreshData() {
      this.getList(this.tabIndex);
    },
    onrefresh: function onrefresh(e) {var _this5 = this;
      var tab = this.newsList[this.tabIndex];
      if (!tab.refreshFlag) {
        return;
      }
      tab.refreshing = true;
      tab.refreshText = "正在刷新...";

      setTimeout(function () {
        _this5.refreshData();
        _this5.pulling = true;
        tab.refreshing = false;
        tab.refreshText = "已刷新";
        tab.refreshFlag = false;
        setTimeout(function () {// TODO fix ios和Android 动画时间相反问题
          _this5.pulling = false;
        }, 500);
      }, 2000);
    },
    onpullingdown: function onpullingdown(e) {
      var tab = this.newsList[this.tabIndex];
      if (tab.refreshing || this.pulling) {
        return;
      }
      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
        tab.refreshFlag = true;
        tab.refreshText = "释放立即刷新";
      } else {
        tab.refreshFlag = false;
        tab.refreshText = "下拉可以刷新";
      }
    },
    newGuid: function newGuid() {
      var s4 = function s4() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      };
      return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
    } } };exports.default = _default;

/***/ }),
/* 49 */
/*!****************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/common/util.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.friendlyDate = friendlyDate;function friendlyDate(timestamp) {
  var formats = {
    'year': '%n% 年前',
    'month': '%n% 月前',
    'day': '%n% 天前',
    'hour': '%n% 小时前',
    'minute': '%n% 分钟前',
    'second': '%n% 秒前' };


  var now = Date.now();
  var seconds = Math.floor((now - timestamp) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var months = Math.floor(days / 30);
  var years = Math.floor(months / 12);

  var diffType = '';
  var diffValue = 0;
  if (years > 0) {
    diffType = 'year';
    diffValue = years;
  } else {
    if (months > 0) {
      diffType = 'month';
      diffValue = months;
    } else {
      if (days > 0) {
        diffType = 'day';
        diffValue = days;
      } else {
        if (hours > 0) {
          diffType = 'hour';
          diffValue = hours;
        } else {
          if (minutes > 0) {
            diffType = 'minute';
            diffValue = minutes;
          } else {
            diffType = 'second';
            diffValue = seconds === 0 ? seconds = 1 : seconds;
          }
        }
      }
    }
  }
  return formats[diffType].replace('%n%', diffValue);
}

/***/ }),
/* 50 */
/*!***************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list-item.nvue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_item_nvue_vue_type_template_id_5cfaf20e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item.nvue?vue&type=template&id=5cfaf20e& */ 51);
/* harmony import */ var _list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item.nvue?vue&type=script&lang=js& */ 53);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./list-item.nvue?vue&type=style&index=0&lang=css& */ 55).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./list-item.nvue?vue&type=style&index=0&lang=css& */ 55).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_item_nvue_vue_type_template_id_5cfaf20e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_item_nvue_vue_type_template_id_5cfaf20e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "6c8240c6"
  
)

component.options.__file = "E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list-item.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 51 */
/*!**********************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list-item.nvue?vue&type=template&id=5cfaf20e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_template_id_5cfaf20e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!./list-item.nvue?vue&type=template&id=5cfaf20e& */ 52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_template_id_5cfaf20e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_template_id_5cfaf20e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 52 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list-item.nvue?vue&type=template&id=5cfaf20e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.options.title
    ? _c(
        "view",
        { staticClass: ["media-item", "view"], on: { click: _vm.click } },
        [
          _c(
            "view",
            {
              staticClass: ["view"],
              style: {
                flexDirection:
                  _vm.options.article_type === 1 ||
                  _vm.options.article_type === 2
                    ? _vm.options.article_type === 2
                      ? "row"
                      : "row-reverse"
                    : "column"
              }
            },
            [
              _c(
                "u-text",
                {
                  staticClass: ["media-title"],
                  class: {
                    "media-title2":
                      _vm.options.article_type === 1 ||
                      _vm.options.article_type === 2
                  }
                },
                [_vm._v(_vm._s(_vm.options.title))]
              ),
              _vm.options.image_list || _vm.options.image_url
                ? _c(
                    "view",
                    {
                      staticClass: ["image-section", "flex-row"],
                      class: {
                        "image-section-right": _vm.options.article_type === 2,
                        "image-section-left": _vm.options.article_type === 1
                      },
                      style: { flexDirection: "row" }
                    },
                    [
                      _vm.options.image_url
                        ? _c("u-image", {
                            staticClass: ["image-list1"],
                            class: {
                              "image-list2":
                                _vm.options.article_type === 1 ||
                                _vm.options.article_type === 2
                            },
                            attrs: { src: _vm.options.image_url }
                          })
                        : _vm._e(),
                      _vm._l(_vm.options.image_list, function(source, i) {
                        return _vm.options.image_list
                          ? _c("u-image", {
                              key: i,
                              staticClass: ["image-list3"],
                              attrs: { src: source.url }
                            })
                          : _vm._e()
                      })
                    ],
                    2
                  )
                : _vm._e()
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: ["media-foot", "flex-row"],
              staticStyle: { flexDirection: "row" }
            },
            [
              _c(
                "view",
                {
                  staticClass: ["media-info", "flex-row"],
                  staticStyle: { flexDirection: "row" }
                },
                [
                  _c("u-text", { staticClass: ["info-text"] }, [
                    _vm._v(_vm._s(_vm.options.source))
                  ]),
                  _c("u-text", { staticClass: ["info-text"] }, [
                    _vm._v(_vm._s(_vm.options.comment_count) + "条评论")
                  ]),
                  _c("u-text", { staticClass: ["info-text"] }, [
                    _vm._v(_vm._s(_vm.options.datetime))
                  ])
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: ["max-close-view"],
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.close($event)
                    }
                  }
                },
                [
                  _c("view", { staticClass: ["close-l", "close-h"] }),
                  _c("view", { staticClass: ["close-l", "close-v"] })
                ]
              )
            ]
          ),
          _c("view", {
            staticClass: ["media-item-line"],
            staticStyle: { position: "absolute" }
          })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 53 */
/*!****************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list-item.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!./list-item.nvue?vue&type=script&lang=js& */ 54);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list-item.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default2 =
{
  props: {
    options: {
      type: Object,
      default: function _default(e) {
        return {};
      } } },


  methods: {
    click: function click() {
      this.$emit('click');
    },
    close: function close(e) {
      this.$emit('close');
    } } };exports.default = _default2;

/***/ }),
/* 55 */
/*!************************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list-item.nvue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!./list-item.nvue?vue&type=style&index=0&lang=css& */ 56);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 56 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list-item.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "view": {
    "flexDirection": "column"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-col": {
    "flexDirection": "column"
  },
  "list-cell": {
    "width": "750rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-hover": {
    "backgroundColor": "#eeeeee"
  },
  "media-item": {
    "position": "relative",
    "flex": 1,
    "flexDirection": "column",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "21rpx",
    "paddingLeft": "30rpx"
  },
  "media-item-line": {
    "position": "absolute",
    "left": "30rpx",
    "right": "30rpx",
    "bottom": 0,
    "height": "1rpx",
    "backgroundColor": "#ebebeb"
  },
  "media-image-right": {
    "flexDirection": "row"
  },
  "media-image-left": {
    "flexDirection": "row-reverse"
  },
  "media-title": {
    "flex": 1,
    "lines": 3,
    "textOverflow": "ellipsis",
    "fontSize": "30rpx",
    "color": "#555555"
  },
  "media-title2": {
    "flex": 1,
    "marginTop": "6rpx",
    "lineHeight": "40rpx"
  },
  "image-section": {
    "marginTop": "20rpx",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "image-section-right": {
    "marginTop": "0rpx",
    "marginLeft": "10rpx",
    "width": "225rpx",
    "height": "146rpx"
  },
  "image-section-left": {
    "marginTop": "0rpx",
    "marginRight": "10rpx",
    "width": "225rpx",
    "height": "146rpx"
  },
  "image-list1": {
    "width": "690rpx",
    "height": "481rpx"
  },
  "image-list2": {
    "width": "225rpx",
    "height": "146rpx"
  },
  "image-list3": {
    "width": "225rpx",
    "height": "146rpx"
  },
  "media-info": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "info-text": {
    "marginRight": "20rpx",
    "color": "#999999",
    "fontSize": "24rpx"
  },
  "media-foot": {
    "marginTop": "25rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "max-close-view": {
    "position": "relative",
    "alignItems": "center",
    "flexDirection": "row",
    "width": "40rpx",
    "height": "30rpx",
    "lineHeight": "30rpx",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#aaaaaa",
    "borderRadius": "4",
    "justifyContent": "center",
    "textAlign": "center"
  },
  "close-l": {
    "position": "absolute",
    "width": "18rpx",
    "height": "1rpx",
    "backgroundColor": "#aaaaaa"
  },
  "close-h": {
    "transform": "rotate(45deg)"
  },
  "close-v": {
    "transform": "rotate(-45deg)"
  }
}

/***/ }),
/* 57 */
/*!******************************************************************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!./list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 58);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 58 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!E:/msy/code/node/appStore/appStore2/前端小工具/pages/list/list.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "tabs": {
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden",
    "backgroundColor": "#ffffff"
  },
  "scroll-h": {
    "width": "750rpx",
    "height": "80rpx",
    "flexDirection": "row"
  },
  "line-h": {
    "height": "1rpx",
    "backgroundColor": "#cccccc"
  },
  "uni-tab-item": {
    "flexWrap": "nowrap",
    "paddingLeft": "34rpx",
    "paddingRight": "34rpx"
  },
  "uni-tab-item-title": {
    "color": "#555555",
    "fontSize": "30rpx",
    "height": "80rpx",
    "lineHeight": "80rpx",
    "flexWrap": "nowrap"
  },
  "uni-tab-item-title-active": {
    "color": "#007AFF"
  },
  "swiper-box": {
    "flex": 1
  },
  "swiper-item": {
    "flex": 1
  },
  "scroll-v": {
    "flex": 1,
    "flexDirection": "column",
    "width": "750rpx"
  },
  "update-tips": {
    "position": "absolute",
    "left": 0,
    "top": "41",
    "right": 0,
    "paddingTop": "5",
    "paddingBottom": "5",
    "backgroundColor": "#FDDD9B",
    "alignItems": "center",
    "justifyContent": "center",
    "textAlign": "center"
  },
  "update-tips-text": {
    "fontSize": "14",
    "color": "#ffffff"
  },
  "refresh": {
    "width": "750rpx",
    "height": "64",
    "justifyContent": "center"
  },
  "refresh-view": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refresh-icon": {
    "width": "30",
    "height": "30",
    "transitionDuration": 500,
    "transitionProperty": "transform",
    "transform": "rotate(0deg)",
    "transformOrigin": "15px 15px"
  },
  "@TRANSITION": {
    "refresh-icon": {
      "duration": 500,
      "property": "transform"
    }
  },
  "refresh-icon-active": {
    "transform": "rotate(180deg)"
  },
  "loading-icon": {
    "width": "20",
    "height": "20",
    "marginRight": "5",
    "color": "#999999"
  },
  "loading-text": {
    "marginLeft": "2",
    "fontSize": "16",
    "color": "#999999"
  },
  "loading-more": {
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "10",
    "paddingBottom": "10",
    "textAlign": "center"
  },
  "loading-more-text": {
    "fontSize": "28rpx",
    "color": "#999999"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzPzI4NzciLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9BcHAudnVlPzdlOTMiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9BcHAudnVlP2ZkNDkiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9tYWluLmpzP2Y5MmMiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QubnZ1ZT8yODQ1Iiwid2VicGFjazovLy9FOi9tc3kvY29kZS9ub2RlL2FwcFN0b3JlL2FwcFN0b3JlMi/liY3nq6/lsI/lt6XlhbcvcGFnZXMvbGlzdC9saXN0Lm52dWU/ZTY1NCIsIndlYnBhY2s6Ly8vRTovbXN5L2NvZGUvbm9kZS9hcHBTdG9yZS9hcHBTdG9yZTIv5YmN56uv5bCP5bel5YW3L3BhZ2VzL2xpc3QvbGlzdC5udnVlPzg5ZTAiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QubnZ1ZT9hZDUzIiwidW5pLWFwcDovLy9wYWdlcy9saXN0L2xpc3QubnZ1ZSIsInVuaS1hcHA6Ly8vY29tbW9uL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QtaXRlbS5udnVlPzZjMDciLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QtaXRlbS5udnVlP2QxMjgiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QtaXRlbS5udnVlP2FhZjAiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QtaXRlbS5udnVlP2FlYzMiLCJ1bmktYXBwOi8vL3BhZ2VzL2xpc3QvbGlzdC1pdGVtLm52dWUiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QtaXRlbS5udnVlP2FhYTEiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QtaXRlbS5udnVlP2YzMzgiLCJ3ZWJwYWNrOi8vL0U6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QubnZ1ZT9hNWIwIiwid2VicGFjazovLy9FOi9tc3kvY29kZS9ub2RlL2FwcFN0b3JlL2FwcFN0b3JlMi/liY3nq6/lsI/lt6XlhbcvcGFnZXMvbGlzdC9saXN0Lm52dWU/YjQxOSJdLCJuYW1lcyI6WyJmcmllbmRseURhdGUiLCJ0aW1lc3RhbXAiLCJmb3JtYXRzIiwibm93IiwiRGF0ZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwibW9udGhzIiwieWVhcnMiLCJkaWZmVHlwZSIsImRpZmZWYWx1ZSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDN0hBO0FBQUE7QUFBQTtBQUFBO0FBQThxQixDQUFnQixvc0JBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQWxzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicGFnZXMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQzKTtcbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHt9IiwiXG5pbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvbGlzdC9saXN0Lm52dWU/bXBUeXBlPXBhZ2UnXG5BcHAubXBUeXBlID0gJ3BhZ2UnXG5BcHAucm91dGUgPSAncGFnZXMvbGlzdC9saXN0J1xuQXBwLmVsID0gJyNyb290J1xuQXBwLmFwcFN0eWxlID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxBcHAuYXBwU3R5bGUpXG5cbm5ldyBWdWUoQXBwKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9saXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDE1NWZmN2EmbXBUeXBlPXBhZ2VcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2xpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9saXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCJiZjk3ZDQ1NFwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L21zeS9jb2RlL25vZGUvYXBwU3RvcmUvYXBwU3RvcmUyL+WJjeerr+Wwj+W3peWFty9wYWdlcy9saXN0L2xpc3QubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2xpc3QubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MTU1ZmY3YSZtcFR5cGU9cGFnZVwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFic1wiXSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNjcm9sbC12aWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzY3JvbGwtaFwiXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJ0YWItYmFyXCIsXG4gICAgICAgICAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93U2Nyb2xsYmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbnRvVmlldzogX3ZtLnNjcm9sbEludG9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFiQmFycywgZnVuY3Rpb24odGFiLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiB0YWIuaWQsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXRhYi1pdGVtXCJdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IHRhYi5pZCwgZGF0YUN1cnJlbnQ6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9udGFidGFwIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS10YWItaXRlbS10aXRsZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJJbmRleCA9PSBpbmRleCA/IFwidW5pLXRhYi1pdGVtLXRpdGxlLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJsaW5lLWhcIl0gfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInN3aXBlclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wic3dpcGVyLWJveFwiXSxcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZmxleDogXCIxXCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY3VycmVudDogX3ZtLnRhYkluZGV4LCBkdXJhdGlvbjogMzAwIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9udGFiY2hhbmdlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLm5ld3NMaXN0LCBmdW5jdGlvbih0YWIsIGluZGV4MSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJzd2lwZXItaXRlbVwiLFxuICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleDEsIHN0YXRpY0NsYXNzOiBbXCJzd2lwZXItaXRlbVwiXSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzY3JvbGwtdlwiLCBcImxpc3RcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tUb1RvcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZG1vcmVvZmZzZXQ6IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRtb3JlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkTW9yZShpbmRleDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlZnJlc2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInJlZnJlc2hcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc3BsYXk6IHRhYi5yZWZyZXNoaW5nID8gXCJzaG93XCIgOiBcImhpZGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbnJlZnJlc2goaW5kZXgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVsbGluZ2Rvd246IF92bS5vbnB1bGxpbmdkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wicmVmcmVzaC12aWV3XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInJlZnJlc2gtaWNvblwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZnJlc2gtaWNvbi1hY3RpdmVcIjogdGFiLnJlZnJlc2hGbGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIucmVmcmVzaGluZyB8fCBfdm0ucHVsbGluZyA/IDAgOiBcIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5yZWZyZXNoSWNvbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5yZWZyZXNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsb2FkaW5nLWluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibG9hZGluZy1pY29uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYW5pbWF0aW5nOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImxvYWRpbmctdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGFiLnJlZnJlc2hUZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCh0YWIuZGF0YSwgZnVuY3Rpb24obmV3c2l0ZW0sIGluZGV4Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbmV3c2l0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZWRpYS1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9wdGlvbnM6IG5ld3NpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaXNsaWtlKGluZGV4MSwgaW5kZXgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb0RldGFpbChuZXdzaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICB0YWIuaXNMb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJsb2FkaW5nLW1vcmVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJsb2FkaW5nLW1vcmUtdGV4dFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWIubG9hZGluZ1RleHQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJ0YWJzXCI+XG5cdFx0PHNjcm9sbC12aWV3IGlkPVwidGFiLWJhclwiIGNsYXNzPVwic2Nyb2xsLWhcIiA6c2Nyb2xsLXg9XCJ0cnVlXCIgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiA6c2Nyb2xsLWludG8tdmlldz1cInNjcm9sbEludG9cIj5cblx0XHRcdDx2aWV3IHYtZm9yPVwiKHRhYixpbmRleCkgaW4gdGFiQmFyc1wiIDprZXk9XCJ0YWIuaWRcIiBjbGFzcz1cInVuaS10YWItaXRlbVwiIDppZD1cInRhYi5pZFwiIDpkYXRhLWN1cnJlbnQ9XCJpbmRleFwiIEBjbGljaz1cIm9udGFidGFwXCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLXRhYi1pdGVtLXRpdGxlXCIgOmNsYXNzPVwidGFiSW5kZXg9PWluZGV4ID8gJ3VuaS10YWItaXRlbS10aXRsZS1hY3RpdmUnIDogJydcIj57e3RhYi5uYW1lfX08L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC9zY3JvbGwtdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cImxpbmUtaFwiPjwvdmlldz5cblx0XHQ8c3dpcGVyIDpjdXJyZW50PVwidGFiSW5kZXhcIiBjbGFzcz1cInN3aXBlci1ib3hcIiBzdHlsZT1cImZsZXg6IDE7XCIgOmR1cmF0aW9uPVwiMzAwXCIgQGNoYW5nZT1cIm9udGFiY2hhbmdlXCI+XG5cdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJzd2lwZXItaXRlbVwiIHYtZm9yPVwiKHRhYixpbmRleDEpIGluIG5ld3NMaXN0XCIgOmtleT1cImluZGV4MVwiPlxuXHRcdFx0XHQ8IS0tICNpZmRlZiBBUFAtUExVUy1OVlVFIC0tPlxuXHRcdFx0XHQ8bGlzdCBjbGFzcz1cInNjcm9sbC12IGxpc3RcIiBlbmFibGVCYWNrVG9Ub3A9XCJ0cnVlXCIgc2Nyb2xsLXkgbG9hZG1vcmVvZmZzZXQ9XCIxMFwiIEBsb2FkbW9yZT1cImxvYWRNb3JlKGluZGV4MSlcIj5cblx0XHRcdFx0XHQ8cmVmcmVzaCBjbGFzcz1cInJlZnJlc2hcIiBAcmVmcmVzaD1cIm9ucmVmcmVzaChpbmRleDEpXCIgQHB1bGxpbmdkb3duPVwib25wdWxsaW5nZG93blwiIDpkaXNwbGF5PVwidGFiLnJlZnJlc2hpbmcgPyAnc2hvdycgOiAnaGlkZSdcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyZWZyZXNoLXZpZXdcIj5cblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwicmVmcmVzaC1pY29uXCIgOnNyYz1cInJlZnJlc2hJY29uXCIgOnN0eWxlPVwie3dpZHRoOiAodGFiLnJlZnJlc2hpbmcgfHwgcHVsbGluZykgPyAwOiAnMzBweCd9XCIgOmNsYXNzPVwieydyZWZyZXNoLWljb24tYWN0aXZlJzogdGFiLnJlZnJlc2hGbGFnfVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdDxsb2FkaW5nLWluZGljYXRvciBjbGFzcz1cImxvYWRpbmctaWNvblwiIGFuaW1hdGluZz1cInRydWVcIiB2LWlmPVwidGFiLnJlZnJlc2hpbmdcIj48L2xvYWRpbmctaW5kaWNhdG9yPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxvYWRpbmctdGV4dFwiPnt7dGFiLnJlZnJlc2hUZXh0fX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3JlZnJlc2g+XG5cdFx0XHRcdFx0PGNlbGwgdi1mb3I9XCIobmV3c2l0ZW0saW5kZXgyKSBpbiB0YWIuZGF0YVwiIDprZXk9XCJuZXdzaXRlbS5pZFwiPlxuXHRcdFx0XHRcdFx0PG1lZGlhLWl0ZW0gOm9wdGlvbnM9XCJuZXdzaXRlbVwiIEBjbG9zZT1cImRpc2xpa2UoaW5kZXgxLGluZGV4MilcIiBAY2xpY2s9XCJnb0RldGFpbChuZXdzaXRlbSlcIj48L21lZGlhLWl0ZW0+XG5cdFx0XHRcdFx0PC9jZWxsPlxuXHRcdFx0XHRcdDxjZWxsIGNsYXNzPVwibG9hZGluZy1tb3JlXCIgdi1pZj1cInRhYi5pc0xvYWRpbmdcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibG9hZGluZy1tb3JlLXRleHRcIj57e3RhYi5sb2FkaW5nVGV4dH19PC90ZXh0PlxuXHRcdFx0XHRcdDwvY2VsbD5cblx0XHRcdFx0PC9saXN0PlxuXHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cblx0XHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgLS0+XG5cdFx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cInNjcm9sbC12IGxpc3RcIiBlbmFibGVCYWNrVG9Ub3A9XCJ0cnVlXCIgc2Nyb2xsLXkgQHNjcm9sbHRvbG93ZXI9XCJsb2FkTW9yZShpbmRleDEpXCI+XG5cdFx0XHRcdFx0PHZpZXcgdi1mb3I9XCIobmV3c2l0ZW0saW5kZXgyKSBpbiB0YWIuZGF0YVwiIDprZXk9XCJuZXdzaXRlbS5pZFwiPlxuXHRcdFx0XHRcdFx0PG1lZGlhLWl0ZW0gOm9wdGlvbnM9XCJuZXdzaXRlbVwiIEBjbG9zZT1cImRpc2xpa2UoaW5kZXgxLGluZGV4MilcIiBAY2xpY2s9XCJnb0RldGFpbChuZXdzaXRlbSlcIj48L21lZGlhLWl0ZW0+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibG9hZGluZy1tb3JlXCIgdi1pZj1cInRhYi5pc0xvYWRpbmdcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibG9hZGluZy1tb3JlLXRleHRcIj57e3RhYi5sb2FkaW5nVGV4dH19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cblx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxuXHRcdDwvc3dpcGVyPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0aW1wb3J0IHtcblx0XHRmcmllbmRseURhdGVcblx0fSBmcm9tICdAL2NvbW1vbi91dGlsLmpzJztcblxuXHRpbXBvcnQgbWVkaWFJdGVtIGZyb20gJy4vbGlzdC1pdGVtLm52dWUnO1xuXG5cdC8vIOe8k+WtmOavj+mhteacgOWkmlxuXHRjb25zdCBNQVhfQ0FDSEVfREFUQSA9IDEwMDtcblx0Ly8g57yT5a2Y6aG1562+5pWw6YePXG5cdGNvbnN0IE1BWF9DQUNIRV9QQUdFID0gMztcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0bWVkaWFJdGVtXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bmV3c0xpc3Q6IFtdLFxuXHRcdFx0XHRjYWNoZVRhYjogW10sXG5cdFx0XHRcdHRhYkluZGV4OiAwLFxuXHRcdFx0XHR0YWJCYXJzOiBbe1xuXHRcdFx0XHRcdGlkOiBcInRhYjAxXCIsXG5cdFx0XHRcdFx0bmFtZTogJ+acgOaWsCcsXG5cdFx0XHRcdFx0bmV3c2lkOiAwXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRpZDogXCJ0YWIwMlwiLFxuXHRcdFx0XHRcdG5hbWU6ICflpKflhazlj7gnLFxuXHRcdFx0XHRcdG5ld3NpZDogMjNcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGlkOiBcInRhYjAzXCIsXG5cdFx0XHRcdFx0bmFtZTogJ+WGheWuuScsXG5cdFx0XHRcdFx0bmV3c2lkOiAyMjNcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGlkOiBcInRhYjA0XCIsXG5cdFx0XHRcdFx0bmFtZTogJ+a2iOi0uScsXG5cdFx0XHRcdFx0bmV3c2lkOiAyMjFcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGlkOiBcInRhYjA1XCIsXG5cdFx0XHRcdFx0bmFtZTogJ+WoseS5kCcsXG5cdFx0XHRcdFx0bmV3c2lkOiAyMjVcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGlkOiBcInRhYjA2XCIsXG5cdFx0XHRcdFx0bmFtZTogJ+WMuuWdl+mTvicsXG5cdFx0XHRcdFx0bmV3c2lkOiAyMDhcblx0XHRcdFx0fSwgXSxcblx0XHRcdFx0c2Nyb2xsSW50bzogXCJcIixcblx0XHRcdFx0c2hvd1RpcHM6IGZhbHNlLFxuXHRcdFx0XHRuYXZpZ2F0ZUZsYWc6IGZhbHNlLFxuXHRcdFx0XHRwdWxsaW5nOiBmYWxzZSxcblx0XHRcdFx0cmVmcmVzaEljb246IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFCNVFURlJGY0hCdzNOemN0N2UzOXZiMnljbkppb3FLN2UzdHBxYW0yOXZiLy8vL0Q4b0s3d0FBQUFwMFVrNVQvLy8vLy8vLy8vLy9BTExNTE04QUFBQnhTVVJCVkhqYTdKVkJEb0FnREFTcmpxai8vN0NKQmk5MGl5WWVPSFRQTXdtRlpySGpZeXlGWVlVeTFid1VacXRKSVlWeGhmMWE2dTBSN2lVdldzQ2NyRXR3SkhwOE13TWR2aDJhbUhkdWlaRDNycFdJZDkrQmdQZDdDYzJMSWtQeXF2bFF2S3hLQkovL1F3cS9DYWNBQXdEVXYwYTBZdUtoemdBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKCkge1xuXHRcdFx0dGhpcy50YWJCYXJzLmZvckVhY2goKHRhYkJhcikgPT4ge1xuXHRcdFx0XHR0aGlzLm5ld3NMaXN0LnB1c2goe1xuXHRcdFx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0XHRcdHJlZnJlc2hpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdHJlZnJlc2hGbGFnOiBmYWxzZSxcblx0XHRcdFx0XHRyZWZyZXNoVGV4dDogXCJcIixcblx0XHRcdFx0XHRyZXF1ZXN0UGFyYW1zOiB7XG5cdFx0XHRcdFx0XHRjb2x1bW5JZDogdGFiQmFyLm5ld3NpZCxcblx0XHRcdFx0XHRcdG1pbklkOiAwLFxuXHRcdFx0XHRcdFx0cGFnZVNpemU6IDEwLFxuXHRcdFx0XHRcdFx0Y29sdW1uOiAnaWQscG9zdF9pZCx0aXRsZSxhdXRob3JfbmFtZSxjb3ZlcixwdWJsaXNoZWRfYXQsY29tbWVudHNfY291bnQnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdGxvYWRpbmdUZXh0OiAn5Yqg6L295LitLi4uJ1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5nZXRMaXN0KDApO1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Z2V0TGlzdChpbmRleCwgYWN0aW9uID0gMSkge1xuXHRcdFx0XHRsZXQgYWN0aXZlVGFiID0gdGhpcy5uZXdzTGlzdFtpbmRleF07XG5cdFx0XHRcdGFjdGl2ZVRhYi5yZXF1ZXN0UGFyYW1zLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICcnO1xuXHRcdFx0XHRpZiAoYWN0aW9uID09PSAxKSB7XG5cdFx0XHRcdFx0YWN0aXZlVGFiLnJlcXVlc3RQYXJhbXMubWluSWQgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFjdGl2ZVRhYi5pc0xvYWRpbmcgPSB0cnVlO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly91bmlkZW1vLmRjbG91ZC5uZXQuY24vYXBpL25ld3MnLFxuXHRcdFx0XHRcdGRhdGE6IGFjdGl2ZVRhYi5yZXF1ZXN0UGFyYW1zLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YS5tYXAoKG5ld3MpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRpZDogdGhpcy5uZXdHdWlkKCkgKyBuZXdzLmlkLFxuXHRcdFx0XHRcdFx0XHRcdG5ld3NpZDogbmV3cy5pZCxcblx0XHRcdFx0XHRcdFx0XHRhcnRpY2xlX3R5cGU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0ZGF0ZXRpbWU6IGZyaWVuZGx5RGF0ZShuZXcgRGF0ZShuZXdzLnB1Ymxpc2hlZF9hdC5yZXBsYWNlKC9cXC0vZywgJy8nKSkuZ2V0VGltZSgpKSxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogbmV3cy50aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRpbWFnZV91cmw6IG5ld3MuY292ZXIsXG5cdFx0XHRcdFx0XHRcdFx0c291cmNlOiBuZXdzLmF1dGhvcl9uYW1lLFxuXHRcdFx0XHRcdFx0XHRcdGNvbW1lbnRfY291bnQ6IG5ld3MuY29tbWVudHNfY291bnQsXG5cdFx0XHRcdFx0XHRcdFx0cG9zdF9pZDogbmV3cy5wb3N0X2lkXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGlmIChhY3Rpb24gPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0YWN0aXZlVGFiLmRhdGEgPSBkYXRhO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGRhdGEuZm9yRWFjaCgobmV3cykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZVRhYi5kYXRhLnB1c2gobmV3cyk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YWN0aXZlVGFiLnJlcXVlc3RQYXJhbXMubWluSWQgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ubmV3c2lkO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbDogKGVycikgPT4ge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGVyci5lcnJNc2csXG5cdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y29tcGxldGU6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRhY3RpdmVUYWIuaXNMb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRnb0RldGFpbChkZXRhaWwpIHtcblx0XHRcdFx0aWYgKHRoaXMubmF2aWdhdGVGbGFnKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubmF2aWdhdGVGbGFnID0gdHJ1ZTtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9kZXRhaWwvZGV0YWlsP3F1ZXJ5PScgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZGV0YWlsKSlcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubmF2aWdhdGVGbGFnID0gZmFsc2U7XG5cdFx0XHRcdH0sIDIwMClcblx0XHRcdH0sXG5cdFx0XHRkaXNsaWtlKHRhYkluZGV4LCBuZXdzSW5kZXgpIHtcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0Y29udGVudDogJ+S4jeaEn+WFtOi2o++8nycsXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubmV3c0xpc3RbdGFiSW5kZXhdLmRhdGEuc3BsaWNlKG5ld3NJbmRleCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGxvYWRNb3JlKGUpIHtcblx0XHRcdFx0dGhpcy5nZXRMaXN0KHRoaXMudGFiSW5kZXgsIDIpO1xuXHRcdFx0fSxcblx0XHRcdG9udGFidGFwKGUpIHtcblx0XHRcdFx0bGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50IHx8IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmN1cnJlbnQ7XG5cdFx0XHRcdHRoaXMuc3dpdGNoVGFiKGluZGV4KTtcblx0XHRcdH0sXG5cdFx0XHRvbnRhYmNoYW5nZShlKSB7XG5cdFx0XHRcdGxldCBpbmRleCA9IGUudGFyZ2V0LmN1cnJlbnQgfHwgZS5kZXRhaWwuY3VycmVudDtcblx0XHRcdFx0dGhpcy5zd2l0Y2hUYWIoaW5kZXgpO1xuXHRcdFx0fSxcblx0XHRcdHN3aXRjaFRhYihpbmRleCkge1xuXHRcdFx0XHRpZiAodGhpcy5uZXdzTGlzdFtpbmRleF0uZGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmdldExpc3QoaW5kZXgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMudGFiSW5kZXggPT09IGluZGV4KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8g57yT5a2YIHRhYklkXG5cdFx0XHRcdGlmICh0aGlzLm5ld3NMaXN0W3RoaXMudGFiSW5kZXhdLmRhdGEubGVuZ3RoID4gTUFYX0NBQ0hFX0RBVEEpIHtcblx0XHRcdFx0XHRsZXQgaXNFeGlzdCA9IHRoaXMuY2FjaGVUYWIuaW5kZXhPZih0aGlzLnRhYkluZGV4KTtcblx0XHRcdFx0XHRpZiAoaXNFeGlzdCA8IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuY2FjaGVUYWIucHVzaCh0aGlzLnRhYkluZGV4KTtcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJjYWNoZSBpbmRleDo6IFwiICsgdGhpcy50YWJJbmRleCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy50YWJJbmRleCA9IGluZGV4O1xuXHRcdFx0XHR0aGlzLnNjcm9sbEludG8gPSB0aGlzLnRhYkJhcnNbaW5kZXhdLmlkO1xuXG5cdFx0XHRcdC8vIOmHiuaUviB0YWJJZFxuXHRcdFx0XHRpZiAodGhpcy5jYWNoZVRhYi5sZW5ndGggPiBNQVhfQ0FDSEVfUEFHRSkge1xuXHRcdFx0XHRcdGxldCBjYWNoZUluZGV4ID0gdGhpcy5jYWNoZVRhYlswXTtcblx0XHRcdFx0XHR0aGlzLmNsZWFyVGFiRGF0YShjYWNoZUluZGV4KTtcblx0XHRcdFx0XHR0aGlzLmNhY2hlVGFiLnNwbGljZSgwLCAxKTtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwicmVtb3ZlIGNhY2hlIGluZGV4OjogXCIgKyBjYWNoZUluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNsZWFyVGFiRGF0YShlKSB7XG5cdFx0XHRcdHRoaXMubmV3c0xpc3RbZV0uZGF0YS5sZW5ndGggPSAwO1xuXHRcdFx0XHR0aGlzLm5ld3NMaXN0W2VdLmxvYWRpbmdUZXh0ID0gXCLliqDovb3mm7TlpJouLi5cIjtcblx0XHRcdH0sXG5cdFx0XHRyZWZyZXNoRGF0YSgpIHtcblx0XHRcdFx0dGhpcy5nZXRMaXN0KHRoaXMudGFiSW5kZXgpO1xuXHRcdFx0fSxcblx0XHRcdG9ucmVmcmVzaChlKSB7XG5cdFx0XHRcdHZhciB0YWIgPSB0aGlzLm5ld3NMaXN0W3RoaXMudGFiSW5kZXhdO1xuXHRcdFx0XHRpZiAoIXRhYi5yZWZyZXNoRmxhZykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YWIucmVmcmVzaGluZyA9IHRydWU7XG5cdFx0XHRcdHRhYi5yZWZyZXNoVGV4dCA9IFwi5q2j5Zyo5Yi35pawLi4uXCI7XG5cblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoRGF0YSgpO1xuXHRcdFx0XHRcdHRoaXMucHVsbGluZyA9IHRydWU7XG5cdFx0XHRcdFx0dGFiLnJlZnJlc2hpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR0YWIucmVmcmVzaFRleHQgPSBcIuW3suWIt+aWsFwiO1xuXHRcdFx0XHRcdHRhYi5yZWZyZXNoRmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAvLyBUT0RPIGZpeCBpb3PlkoxBbmRyb2lkIOWKqOeUu+aXtumXtOebuOWPjemXrumimFxuXHRcdFx0XHRcdFx0dGhpcy5wdWxsaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0fSwgMjAwMCk7XG5cdFx0XHR9LFxuXHRcdFx0b25wdWxsaW5nZG93bihlKSB7XG5cdFx0XHRcdHZhciB0YWIgPSB0aGlzLm5ld3NMaXN0W3RoaXMudGFiSW5kZXhdO1xuXHRcdFx0XHRpZiAodGFiLnJlZnJlc2hpbmcgfHwgdGhpcy5wdWxsaW5nKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChNYXRoLmFicyhlLnB1bGxpbmdEaXN0YW5jZSkgPiBNYXRoLmFicyhlLnZpZXdIZWlnaHQpKSB7XG5cdFx0XHRcdFx0dGFiLnJlZnJlc2hGbGFnID0gdHJ1ZTtcblx0XHRcdFx0XHR0YWIucmVmcmVzaFRleHQgPSBcIumHiuaUvueri+WNs+WIt+aWsFwiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhYi5yZWZyZXNoRmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHRhYi5yZWZyZXNoVGV4dCA9IFwi5LiL5ouJ5Y+v5Lul5Yi35pawXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRuZXdHdWlkKCkge1xuXHRcdFx0XHRsZXQgczQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gKDY1NTM2ICogKDEgKyBNYXRoLnJhbmRvbSgpKSB8IDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChzNCgpICsgczQoKSArIFwiLVwiICsgczQoKSArIFwiLTRcIiArIHM0KCkuc3Vic3RyKDAsIDMpICsgXCItXCIgKyBzNCgpICsgXCItXCIgKyBzNCgpICsgczQoKSArIHM0KCkpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdHBhZ2Uge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0fVxuXG5cdC8qICNlbmRpZiAqL1xuXG5cdC50YWJzIHtcblx0XHRmbGV4OiAxO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRcdC8qICNpZmRlZiBNUC1BTElQQVkgfHwgTVAtQkFJRFUgKi9cblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LnNjcm9sbC1oIHtcblx0XHR3aWR0aDogNzUwdXB4O1xuXHRcdGhlaWdodDogODB1cHg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHQvKiBmbGV4LXdyYXA6IG5vd3JhcDsgKi9cblx0XHQvKiBib3JkZXItY29sb3I6ICNjY2NjY2M7XG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4OyAqL1xuXHR9XG5cblx0LmxpbmUtaCB7XG5cdFx0aGVpZ2h0OiAxdXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG5cdH1cblxuXHQudW5pLXRhYi1pdGVtIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdHBhZGRpbmctbGVmdDogMzR1cHg7XG5cdFx0cGFkZGluZy1yaWdodDogMzR1cHg7XG5cdH1cblxuXHQudW5pLXRhYi1pdGVtLXRpdGxlIHtcblx0XHRjb2xvcjogIzU1NTtcblx0XHRmb250LXNpemU6IDMwdXB4O1xuXHRcdGhlaWdodDogODB1cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDgwdXB4O1xuXHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LnVuaS10YWItaXRlbS10aXRsZS1hY3RpdmUge1xuXHRcdGNvbG9yOiAjMDA3QUZGO1xuXHR9XG5cblx0LnN3aXBlci1ib3gge1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHQuc3dpcGVyLWl0ZW0ge1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHQuc2Nyb2xsLXYge1xuXHRcdGZsZXg6IDE7XG5cdFx0LyogI2lmbmRlZiBNUC1BTElQQVkgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdHdpZHRoOiA3NTB1cHg7XG5cdH1cblxuXHQudXBkYXRlLXRpcHMge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogNDFweDtcblx0XHRyaWdodDogMDtcblx0XHRwYWRkaW5nLXRvcDogNXB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZEREQ5Qjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdC51cGRhdGUtdGlwcy10ZXh0IHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Y29sb3I6ICNmZmZmZmY7XG5cdH1cblxuXHQucmVmcmVzaCB7XG5cdFx0d2lkdGg6IDc1MHVweDtcblx0XHRoZWlnaHQ6IDY0cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblxuXHQucmVmcmVzaC12aWV3IHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblxuXHQucmVmcmVzaC1pY29uIHtcblx0XHR3aWR0aDogMzBweDtcblx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiAxNXB4IDE1cHg7XG5cdH1cblxuXHQucmVmcmVzaC1pY29uLWFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblx0fVxuXG5cdC5sb2FkaW5nLWljb24ge1xuXHRcdHdpZHRoOiAyMHB4O1xuXHRcdGhlaWdodDogMjBweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcblx0XHRjb2xvcjogIzk5OTk5OTtcblx0fVxuXG5cdC5sb2FkaW5nLXRleHQge1xuXHRcdG1hcmdpbi1sZWZ0OiAycHg7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGNvbG9yOiAjOTk5OTk5O1xuXHR9XG5cblx0LmxvYWRpbmctbW9yZSB7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nLXRvcDogMTBweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQubG9hZGluZy1tb3JlLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMjh1cHg7XG5cdFx0Y29sb3I6ICM5OTk7XG5cdH1cbjwvc3R5bGU+XG4iLCJmdW5jdGlvbiBmcmllbmRseURhdGUodGltZXN0YW1wKSB7XG5cdHZhciBmb3JtYXRzID0ge1xuXHRcdCd5ZWFyJzogJyVuJSDlubTliY0nLFxuXHRcdCdtb250aCc6ICclbiUg5pyI5YmNJyxcblx0XHQnZGF5JzogJyVuJSDlpKnliY0nLFxuXHRcdCdob3VyJzogJyVuJSDlsI/ml7bliY0nLFxuXHRcdCdtaW51dGUnOiAnJW4lIOWIhumSn+WJjScsXG5cdFx0J3NlY29uZCc6ICclbiUg56eS5YmNJyxcblx0fTtcblxuXHR2YXIgbm93ID0gRGF0ZS5ub3coKTtcblx0dmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChub3cgLSB0aW1lc3RhbXApIC8gMTAwMCk7XG5cdHZhciBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuXHR2YXIgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XG5cdHZhciBkYXlzID0gTWF0aC5mbG9vcihob3VycyAvIDI0KTtcblx0dmFyIG1vbnRocyA9IE1hdGguZmxvb3IoZGF5cyAvIDMwKTtcblx0dmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7XG5cblx0dmFyIGRpZmZUeXBlID0gJyc7XG5cdHZhciBkaWZmVmFsdWUgPSAwO1xuXHRpZiAoeWVhcnMgPiAwKSB7XG5cdFx0ZGlmZlR5cGUgPSAneWVhcic7XG5cdFx0ZGlmZlZhbHVlID0geWVhcnM7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG1vbnRocyA+IDApIHtcblx0XHRcdGRpZmZUeXBlID0gJ21vbnRoJztcblx0XHRcdGRpZmZWYWx1ZSA9IG1vbnRocztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGRheXMgPiAwKSB7XG5cdFx0XHRcdGRpZmZUeXBlID0gJ2RheSc7XG5cdFx0XHRcdGRpZmZWYWx1ZSA9IGRheXM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoaG91cnMgPiAwKSB7XG5cdFx0XHRcdFx0ZGlmZlR5cGUgPSAnaG91cic7XG5cdFx0XHRcdFx0ZGlmZlZhbHVlID0gaG91cnM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKG1pbnV0ZXMgPiAwKSB7XG5cdFx0XHRcdFx0XHRkaWZmVHlwZSA9ICdtaW51dGUnO1xuXHRcdFx0XHRcdFx0ZGlmZlZhbHVlID0gbWludXRlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZGlmZlR5cGUgPSAnc2Vjb25kJztcblx0XHRcdFx0XHRcdGRpZmZWYWx1ZSA9IHNlY29uZHMgPT09IDAgPyAoc2Vjb25kcyA9IDEpIDogc2Vjb25kcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGZvcm1hdHNbZGlmZlR5cGVdLnJlcGxhY2UoJyVuJScsIGRpZmZWYWx1ZSk7XG59XG5leHBvcnQge1xuXHRmcmllbmRseURhdGVcbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGlzdC1pdGVtLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNmYWYyMGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGlzdC1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xpc3QtaXRlbS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9saXN0LWl0ZW0ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJG9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vbGlzdC1pdGVtLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIG51bGwsXG4gIFwiNmM4MjQwYzZcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9tc3kvY29kZS9ub2RlL2FwcFN0b3JlL2FwcFN0b3JlMi/liY3nq6/lsI/lt6XlhbcvcGFnZXMvbGlzdC9saXN0LWl0ZW0ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2xpc3QtaXRlbS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjZmFmMjBlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ub3B0aW9ucy50aXRsZVxuICAgID8gX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJtZWRpYS1pdGVtXCIsIFwidmlld1wiXSwgb246IHsgY2xpY2s6IF92bS5jbGljayB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widmlld1wiXSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlxuICAgICAgICAgICAgICAgICAgX3ZtLm9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAxIHx8XG4gICAgICAgICAgICAgICAgICBfdm0ub3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgPyBfdm0ub3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicm93LXJldmVyc2VcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiY29sdW1uXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibWVkaWEtdGl0bGVcIl0sXG4gICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBcIm1lZGlhLXRpdGxlMlwiOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5vcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMSB8fFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5vcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm9wdGlvbnMudGl0bGUpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLm9wdGlvbnMuaW1hZ2VfbGlzdCB8fCBfdm0ub3B0aW9ucy5pbWFnZV91cmxcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpbWFnZS1zZWN0aW9uXCIsIFwiZmxleC1yb3dcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2Utc2VjdGlvbi1yaWdodFwiOiBfdm0ub3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlLXNlY3Rpb24tbGVmdFwiOiBfdm0ub3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwicm93XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wdGlvbnMuaW1hZ2VfdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImltYWdlLWxpc3QxXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlLWxpc3QyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLm9wdGlvbnMuaW1hZ2VfdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5vcHRpb25zLmltYWdlX2xpc3QsIGZ1bmN0aW9uKHNvdXJjZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcHRpb25zLmltYWdlX2xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImltYWdlLWxpc3QzXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBzb3VyY2UudXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibWVkaWEtZm9vdFwiLCBcImZsZXgtcm93XCJdLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtZWRpYS1pbmZvXCIsIFwiZmxleC1yb3dcIl0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImluZm8tdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm9wdGlvbnMuc291cmNlKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiaW5mby10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ub3B0aW9ucy5jb21tZW50X2NvdW50KSArIFwi5p2h6K+E6K66XCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImluZm8tdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm9wdGlvbnMuZGF0ZXRpbWUpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm1heC1jbG9zZS12aWV3XCJdLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiY2xvc2UtbFwiLCBcImNsb3NlLWhcIl0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiY2xvc2UtbFwiLCBcImNsb3NlLXZcIl0gfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwidmlld1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibWVkaWEtaXRlbS1saW5lXCJdLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vbGlzdC1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTMtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9saXN0LWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PCEtLSByZW1vdmUgbGlzdC1jZWxsIGxheWVyIGZpeCBhbmRyb2lkIDQueCBvdmVyZmxvdyBsaW1pdCBlcnJvcjogMjggbGF5ZXJzISAtLT5cblx0PCEtLSA8dmlldyBjbGFzcz1cImxpc3QtY2VsbCB2aWV3XCIgQGNsaWNrPVwiY2xpY2tcIj48L3ZpZXc+IC0tPlxuXHQ8dmlldyBjbGFzcz1cIm1lZGlhLWl0ZW0gdmlld1wiIHYtaWY9XCJvcHRpb25zLnRpdGxlXCIgQGNsaWNrPVwiY2xpY2tcIj5cblx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwidmlld1wiIDpzdHlsZT1cIm9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAyID8gJ2ZsZXgtZGlyZWN0aW9uOiByb3cnO1wiIDpjbGFzcz1cInsnbWVkaWEtaW1hZ2UtcmlnaHQnOiBvcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMiwgJ21lZGlhLWltYWdlLWxlZnQnOiBvcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMX1cIj4gLS0+XG5cdFx0PCEtLSBUT0RPIOWcqOaUr+S7mOWuneWwj+eoi+W6j+S4iyDpnIDopoHnlKggc3R5bGUg6KaG55uW5qCH562+55qE6buY6K6k5qC35byPIC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwidmlld1wiIDpzdHlsZT1cIntmbGV4RGlyZWN0aW9uOiAob3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDEgfHwgb3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDIpPyhvcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMiA/J3Jvdyc6J3Jvdy1yZXZlcnNlJyk6J2NvbHVtbicgfVwiPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJtZWRpYS10aXRsZVwiIDpjbGFzcz1cInsnbWVkaWEtdGl0bGUyJzogb3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDEgfHwgb3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDJ9XCI+e3tvcHRpb25zLnRpdGxlfX08L3RleHQ+XG5cdFx0XHQ8dmlldyB2LWlmPVwib3B0aW9ucy5pbWFnZV9saXN0IHx8IG9wdGlvbnMuaW1hZ2VfdXJsXCIgY2xhc3M9XCJpbWFnZS1zZWN0aW9uIGZsZXgtcm93XCIgOmNsYXNzPVwieydpbWFnZS1zZWN0aW9uLXJpZ2h0Jzogb3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDIsICdpbWFnZS1zZWN0aW9uLWxlZnQnOiBvcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMX1cIlxuXHRcdFx0IDpzdHlsZT1cIntmbGV4RGlyZWN0aW9uOiAncm93JyB9XCI+XG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cImltYWdlLWxpc3QxXCIgOmNsYXNzPVwieydpbWFnZS1saXN0Mic6IG9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAxIHx8IG9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAyfVwiIHYtaWY9XCJvcHRpb25zLmltYWdlX3VybFwiXG5cdFx0XHRcdCA6c3JjPVwib3B0aW9ucy5pbWFnZV91cmxcIj48L2ltYWdlPlxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpbWFnZS1saXN0M1wiIHYtaWY9XCJvcHRpb25zLmltYWdlX2xpc3RcIiA6c3JjPVwic291cmNlLnVybFwiIHYtZm9yPVwiKHNvdXJjZSwgaSkgaW4gb3B0aW9ucy5pbWFnZV9saXN0XCJcblx0XHRcdFx0IDprZXk9XCJpXCIgLz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJtZWRpYS1mb290IGZsZXgtcm93XCIgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtZWRpYS1pbmZvIGZsZXgtcm93XCIgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImluZm8tdGV4dFwiPnt7b3B0aW9ucy5zb3VyY2V9fTwvdGV4dD5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJpbmZvLXRleHRcIj57e29wdGlvbnMuY29tbWVudF9jb3VudH195p2h6K+E6K66PC90ZXh0PlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImluZm8tdGV4dFwiPnt7b3B0aW9ucy5kYXRldGltZX19PC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtYXgtY2xvc2Utdmlld1wiIEBjbGljay5zdG9wPVwiY2xvc2VcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjbG9zZS1sIGNsb3NlLWhcIj48L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2xvc2UtbCBjbG9zZS12XCI+PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cIm1lZGlhLWl0ZW0tbGluZVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO1wiPjwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdHJldHVybiB7fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjbGljaygpIHtcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKTtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZShlKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQudmlldyB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXG5cdC5mbGV4LXJvdyB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxuXG5cdC5mbGV4LWNvbCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXG5cdC5saXN0LWNlbGwge1xuXHRcdHdpZHRoOiA3NTB1cHg7XG5cdFx0cGFkZGluZzogMCAzMHVweDtcblx0fVxuXG5cdC51bmktbGlzdC1jZWxsLWhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuXHR9XG5cblx0Lm1lZGlhLWl0ZW0ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRmbGV4OiAxO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0LyogYm9yZGVyLWJvdHRvbS13aWR0aDogMXVweDtcblx0XHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjZWJlYmViOyAqL1xuXHRcdHBhZGRpbmc6IDIwdXB4IDMwdXB4IDIxdXB4IDMwdXB4O1xuXHR9XG5cblx0Lm1lZGlhLWl0ZW0tbGluZSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDMwdXB4O1xuXHRcdHJpZ2h0OiAzMHVweDtcblx0XHRib3R0b206IDA7XG5cdFx0aGVpZ2h0OiAxdXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG5cdH1cblxuXHQubWVkaWEtaW1hZ2UtcmlnaHQge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cblxuXHQubWVkaWEtaW1hZ2UtbGVmdCB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXHR9XG5cblx0Lm1lZGlhLXRpdGxlIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cblx0Lm1lZGlhLXRpdGxlIHtcblx0XHRsaW5lczogMztcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRmb250LXNpemU6IDMwdXB4O1xuXHRcdGNvbG9yOiAjNTU1NTU1O1xuXHR9XG5cblx0Lm1lZGlhLXRpdGxlMiB7XG5cdFx0ZmxleDogMTtcblx0XHRtYXJnaW4tdG9wOiA2dXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA0MHVweDtcblx0fVxuXG5cdC5pbWFnZS1zZWN0aW9uIHtcblx0XHRtYXJnaW4tdG9wOiAyMHVweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXG5cdC5pbWFnZS1zZWN0aW9uLXJpZ2h0IHtcblx0XHRtYXJnaW4tdG9wOiAwdXB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAxMHVweDtcblx0XHR3aWR0aDogMjI1dXB4O1xuXHRcdGhlaWdodDogMTQ2dXB4O1xuXHR9XG5cblx0LmltYWdlLXNlY3Rpb24tbGVmdCB7XG5cdFx0bWFyZ2luLXRvcDogMHVweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDEwdXB4O1xuXHRcdHdpZHRoOiAyMjV1cHg7XG5cdFx0aGVpZ2h0OiAxNDZ1cHg7XG5cdH1cblxuXHQuaW1hZ2UtbGlzdDEge1xuXHRcdHdpZHRoOiA2OTB1cHg7XG5cdFx0aGVpZ2h0OiA0ODF1cHg7XG5cdH1cblxuXHQuaW1hZ2UtbGlzdDIge1xuXHRcdHdpZHRoOiAyMjV1cHg7XG5cdFx0aGVpZ2h0OiAxNDZ1cHg7XG5cdH1cblxuXHQuaW1hZ2UtbGlzdDMge1xuXHRcdHdpZHRoOiAyMjV1cHg7XG5cdFx0aGVpZ2h0OiAxNDZ1cHg7XG5cdH1cblxuXHQubWVkaWEtaW5mbyB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cblx0LmluZm8tdGV4dCB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHVweDtcblx0XHRjb2xvcjogIzk5OTk5OTtcblx0XHRmb250LXNpemU6IDI0dXB4O1xuXHR9XG5cblx0Lm1lZGlhLWZvb3Qge1xuXHRcdG1hcmdpbi10b3A6IDI1dXB4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblxuXHQubWF4LWNsb3NlLXZpZXcge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0d2lkdGg6IDQwdXB4O1xuXHRcdGhlaWdodDogMzB1cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDMwdXB4O1xuXHRcdGJvcmRlci13aWR0aDogMXVweDtcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci1jb2xvcjogI2FhYWFhYTtcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0LmNsb3NlLWwge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR3aWR0aDogMTh1cHg7XG5cdFx0aGVpZ2h0OiAxdXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7XG5cdH1cblxuXHQuY2xvc2UtaCB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHR9XG5cblx0LmNsb3NlLXYge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2xpc3QtaXRlbS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vbGlzdC1pdGVtLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInZpZXdcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiZmxleC1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1jb2xcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwibGlzdC1jZWxsXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbC1ob3ZlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVlZWVlXCJcbiAgfSxcbiAgXCJtZWRpYS1pdGVtXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMXJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWVkaWEtaXRlbS1saW5lXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogXCIzMHJweFwiLFxuICAgIFwicmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJoZWlnaHRcIjogXCIxcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWJlYmViXCJcbiAgfSxcbiAgXCJtZWRpYS1pbWFnZS1yaWdodFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJtZWRpYS1pbWFnZS1sZWZ0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3ctcmV2ZXJzZVwiXG4gIH0sXG4gIFwibWVkaWEtdGl0bGVcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwibGluZXNcIjogMyxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIlxuICB9LFxuICBcIm1lZGlhLXRpdGxlMlwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI2cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcImltYWdlLXNlY3Rpb25cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiaW1hZ2Utc2VjdGlvbi1yaWdodFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMjI1cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDZycHhcIlxuICB9LFxuICBcImltYWdlLXNlY3Rpb24tbGVmdFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjIyNXJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ2cnB4XCJcbiAgfSxcbiAgXCJpbWFnZS1saXN0MVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY5MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDgxcnB4XCJcbiAgfSxcbiAgXCJpbWFnZS1saXN0MlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIyNXJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ2cnB4XCJcbiAgfSxcbiAgXCJpbWFnZS1saXN0M1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIyNXJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ2cnB4XCJcbiAgfSxcbiAgXCJtZWRpYS1pbmZvXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImluZm8tdGV4dFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIlxuICB9LFxuICBcIm1lZGlhLWZvb3RcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjVycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwibWF4LWNsb3NlLXZpZXdcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwid2lkdGhcIjogXCI0MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNhYWFhYWFcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjRcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNsb3NlLWxcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwid2lkdGhcIjogXCIxOHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMXJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2FhYWFhYVwiXG4gIH0sXG4gIFwiY2xvc2UtaFwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJyb3RhdGUoNDVkZWcpXCJcbiAgfSxcbiAgXCJjbG9zZS12XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInJvdGF0ZSgtNDVkZWcpXCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9saXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidGFic1wiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwic2Nyb2xsLWhcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJsaW5lLWhcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMXJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2NjY2NjY1wiXG4gIH0sXG4gIFwidW5pLXRhYi1pdGVtXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjM0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzNHJweFwiXG4gIH0sXG4gIFwidW5pLXRhYi1pdGVtLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzU1NTU1NVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJub3dyYXBcIlxuICB9LFxuICBcInVuaS10YWItaXRlbS10aXRsZS1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3QUZGXCJcbiAgfSxcbiAgXCJzd2lwZXItYm94XCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInN3aXBlci1pdGVtXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInNjcm9sbC12XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCJcbiAgfSxcbiAgXCJ1cGRhdGUtdGlwc1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ0b3BcIjogXCI0MVwiLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZEREQ5QlwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidXBkYXRlLXRpcHMtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInJlZnJlc2hcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwicmVmcmVzaC12aWV3XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwicmVmcmVzaC1pY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogNTAwLFxuICAgIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IFwidHJhbnNmb3JtXCIsXG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJyb3RhdGUoMGRlZylcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpblwiOiBcIjE1cHggMTVweFwiXG4gIH0sXG4gIFwiQFRSQU5TSVRJT05cIjoge1xuICAgIFwicmVmcmVzaC1pY29uXCI6IHtcbiAgICAgIFwiZHVyYXRpb25cIjogNTAwLFxuICAgICAgXCJwcm9wZXJ0eVwiOiBcInRyYW5zZm9ybVwiXG4gICAgfVxuICB9LFxuICBcInJlZnJlc2gtaWNvbi1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwicm90YXRlKDE4MGRlZylcIlxuICB9LFxuICBcImxvYWRpbmctaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICB9LFxuICBcImxvYWRpbmctdGV4dFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNlwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgfSxcbiAgXCJsb2FkaW5nLW1vcmVcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImxvYWRpbmctbW9yZS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9