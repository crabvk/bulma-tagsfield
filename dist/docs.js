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
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/index.js":
/*!***********************!*\
  !*** ./docs/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_tagsfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/tagsfield */ \"./src/tagsfield.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./docs/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndocument.querySelectorAll('.tagsfield').forEach(el => new _src_tagsfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el));\n\n//# sourceURL=webpack:///./docs/index.js?");

/***/ }),

/***/ "./docs/index.scss":
/*!*************************!*\
  !*** ./docs/index.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./docs/index.scss?");

/***/ }),

/***/ "./src/tagsfield.js":
/*!**************************!*\
  !*** ./src/tagsfield.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tagsfield_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagsfield.scss */ \"./src/tagsfield.scss\");\n/* harmony import */ var _tagsfield_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tagsfield_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nconst tagFormat = /^(?!.*(__|--|_-|-_|\\s).*)[^\\W_][\\w\\-\\s]+[^\\W_]$/;\n\nclass Tagsfield {\n  constructor(el) {\n    this.el = el;\n    this.input = el.querySelector('input[type=\"hidden\"]');\n    this.editable = el.querySelector('span[contenteditable]');\n    el.addEventListener('click', () => this.editable.focus());\n    this.editable.addEventListener('focus', () => el.classList.add('is-focused'));\n    this.editable.addEventListener('blur', () => el.classList.remove('is-focused'));\n    this.editable.addEventListener('keydown', this.onKeyDown.bind(this)); // Load tags from input.value\n\n    this.input.value.split(',').filter(v => v.length > 0).forEach(v => this.addTag(v));\n  }\n\n  validateTag(value, tagsValues) {\n    if (value.length > 2 && value.length <= 30 && tagsValues.indexOf(value) === -1 && tagFormat.test(value)) {\n      return true;\n    }\n  }\n\n  removeTag(tag) {\n    const values = this.input.value.split(',');\n    const index = Array.from(this.el.children).indexOf(tag);\n    values.splice(index, 1);\n    this.input.value = values.join(',');\n    this.el.removeChild(tag);\n  }\n\n  addTag(value) {\n    const tag = document.createElement('div');\n    tag.className = 'control';\n    tag.innerHTML = \"<div class=\\\"tags has-addons\\\">\\n      <span class=\\\"tag is-success\\\">\".concat(value, \"</span>\\n      <a class=\\\"tag is-delete\\\"></a>\\n    </div>\");\n    tag.querySelector('.is-delete').addEventListener('click', this.removeTag.bind(this, tag));\n    const inputs = this.el.children[this.el.children.length - 1];\n    this.el.insertBefore(tag, inputs);\n  }\n\n  onKeyDown(event) {\n    if (['Enter', ' ', ','].indexOf(event.key) >= 0) {\n      event.preventDefault();\n      const value = this.editable.textContent.trim();\n      const tagsValues = this.input.value.split(',').filter(v => v.length > 0);\n\n      if (!this.validateTag(value, tagsValues)) {\n        return;\n      }\n\n      tagsValues.push(value);\n      this.input.value = tagsValues.join(',');\n      this.addTag(value);\n      this.editable.innerHTML = '';\n    } else if (event.key === 'Backspace' && this.editable.textContent.length === 0 && this.el.children.length > 1) {\n      const index = this.el.children.length - 2;\n      const tag = this.el.children[index];\n      this.removeTag(tag);\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tagsfield);\n\n//# sourceURL=webpack:///./src/tagsfield.js?");

/***/ }),

/***/ "./src/tagsfield.scss":
/*!****************************!*\
  !*** ./src/tagsfield.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/tagsfield.scss?");

/***/ })

/******/ });