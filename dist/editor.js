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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/firstblock/index.js":
/*!****************************************!*\
  !*** ./src/blocks/firstblock/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;
registerBlockType('mytheme-blocks/firstblock', {
  title: __('First Block', 'mytheme-blocks'),
  description: __('Our First Block', 'mytheme-blocks'),
  category: 'layout',
  // adding icon from developer.wordpress.org/resource/dashicons
  icon: 'admin-network',
  // keywords is a searchable terms, here we are making it translatable
  keywords: [__('photo', 'mytheme-blocks'), __('image', 'mytheme-blocks')],
  edit: function edit() {
    return el('p', null, 'Editor');
  },
  save: function save() {
    return el('p', null, 'Saved content');
  }
});

/***/ }),

/***/ "./src/blocks/secondblock/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/secondblock/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _jsxFileName = "/var/www/html/gutenberg/training/wp-content/plugins/mytheme-blocks/src/blocks/secondblock/index.js";
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
registerBlockType('mytheme-blocks/secondblock', {
  title: __('Second Block', 'mytheme-blocks'),
  description: __('Our Second Block', 'mytheme-blocks'),
  category: 'layout',
  // adding icon from developer.wordpress.org/resource/dashicons
  icon: wp.element.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, wp.element.createElement("path", {
    d: "M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), wp.element.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })),
  // keywords is a searchable terms, here we are making it translatable
  keywords: [__('photo', 'mytheme-blocks'), __('image', 'mytheme-blocks')],
  edit: function edit() {
    return wp.element.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Editor");
  },
  save: function save() {
    return wp.element.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Saved Content");
  }
});

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/firstblock */ "./src/blocks/firstblock/index.js");
/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_secondblock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/secondblock */ "./src/blocks/secondblock/index.js");
/* harmony import */ var _blocks_secondblock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_secondblock__WEBPACK_IMPORTED_MODULE_1__);
// this file is repsonsible to import all developed blocks



/***/ })

/******/ });
//# sourceMappingURL=editor.js.map