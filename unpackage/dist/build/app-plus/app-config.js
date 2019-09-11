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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************!*\
  !*** E:/msy/code/node/appStore/appStore2/前端小工具/pages.json ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

__registerConfig({"pages":["pages/list/list","pages/detail/detail","pages/lxr/main","pages/lxr/weather","pages/tool/main","pages/ucenter/ucenter"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"新闻资讯","navigationBarBackgroundColor":"#2F85FC","backgroundColor":"#FFFFFF"},"usingComponents":{},"tabBar":{"color":"#000000","selectedColor":"#2F85FC","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/list/list","iconPath":"static/home.png","selectedIconPath":"static/home-active.png","text":"资讯"},{"pagePath":"pages/ucenter/ucenter","iconPath":"static/center.png","selectedIconPath":"static/center-active.png","text":"我的"},{"pagePath":"pages/tool/main","iconPath":"static/center.png","selectedIconPath":"static/center-active.png","text":"工具箱"},{"pagePath":"pages/lxr/main","iconPath":"static/center.png","selectedIconPath":"static/center-active.png","text":"小实验"}]},"nvueCompiler":"uni-app","renderer":"native","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"前端小工具","compilerVersion":"2.2.2","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000},"page":{"pages/list/list":{"window":{"usingComponents":{}},"nvue":true},"pages/detail/detail":{"window":{"usingComponents":{}},"nvue":true},"pages/lxr/main":{"window":{"usingComponents":{}},"nvue":true},"pages/lxr/weather":{"window":{"usingComponents":{},"navigationStyle":"custom"},"nvue":true},"pages/tool/main":{"window":{"usingComponents":{},"navigationBarTitleText":"前端工具箱","backgroundColor":"#ffffff"},"nvue":true},"pages/ucenter/ucenter":{"window":{"usingComponents":{},"navigationBarTitleText":"个人中心","backgroundColor":"#ffffff"},"nvue":true}}});

/***/ })
/******/ ]);