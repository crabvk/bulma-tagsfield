/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/index.js":
/*!***********************!*\
  !*** ./docs/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_tagsfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/tagsfield */ \"./src/tagsfield.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./docs/index.scss\");\ndocument.querySelectorAll(\".tagsfield\").forEach(a=>new _src_tagsfield__WEBPACK_IMPORTED_MODULE_0__.default(a));\n\n//# sourceURL=webpack://bulma-tagsfield/./docs/index.js?");

/***/ }),

/***/ "./src/tagsfield.js":
/*!**************************!*\
  !*** ./src/tagsfield.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tagsfield_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagsfield.scss */ \"./src/tagsfield.scss\");\nconst tagFormat=/^(?!.*(__|--|_-|-_|\\s).*)[^\\W_][\\w\\-\\s]+[^\\W_]$/;class Tagsfield{constructor(a){// Load tags from input.value\nthis.el=a,this.input=a.querySelector(\"input[type=\\\"hidden\\\"]\"),this.editable=a.querySelector(\"span[contenteditable]\"),a.addEventListener(\"click\",()=>this.editable.focus()),this.editable.addEventListener(\"focus\",()=>a.classList.add(\"is-focused\")),this.editable.addEventListener(\"blur\",()=>a.classList.remove(\"is-focused\")),this.editable.addEventListener(\"keydown\",this.onKeyDown.bind(this)),this.editable.addEventListener(\"paste\",a=>{a.preventDefault();const b=a.clipboardData.getData(\"text/plain\"),c=document.createElement(\"div\");c.innerHTML=b,document.execCommand(\"insertHTML\",!1,c.textContent.trim())}),this.input.value.split(\",\").filter(a=>0<a.length).forEach(a=>this.addTag(a))}validateTag(a,b){if(2<a.length&&30>=a.length&&-1===b.indexOf(a)&&tagFormat.test(a))return!0}removeTag(a){const b=this.input.value.split(\",\"),c=Array.from(this.el.children).indexOf(a);b.splice(c,1),this.input.value=b.join(\",\"),this.el.removeChild(a)}addTag(a){const b=document.createElement(\"div\");b.className=\"control\",b.innerHTML=\"<div class=\\\"tags has-addons\\\">\\n      <span class=\\\"tag is-success\\\">\".concat(a,\"</span>\\n      <a class=\\\"tag is-delete\\\"></a>\\n    </div>\"),b.querySelector(\".is-delete\").addEventListener(\"click\",this.removeTag.bind(this,b));const c=this.el.children[this.el.children.length-1];this.el.insertBefore(b,c)}onKeyDown(a){if(0<=[\"Enter\",\" \",\",\"].indexOf(a.key)){a.preventDefault();const b=this.editable.textContent.trim(),c=this.input.value.split(\",\").filter(a=>0<a.length);if(!this.validateTag(b,c))return;c.push(b),this.input.value=c.join(\",\"),this.addTag(b),this.editable.innerHTML=\"\"}else if(\"Backspace\"===a.key&&0===this.editable.textContent.length&&1<this.el.children.length){const a=this.el.children.length-2,b=this.el.children[a];this.removeTag(b)}}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tagsfield);\n\n//# sourceURL=webpack://bulma-tagsfield/./src/tagsfield.js?");

/***/ }),

/***/ "./docs/index.scss":
/*!*************************!*\
  !*** ./docs/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bulma-tagsfield/./docs/index.scss?");

/***/ }),

/***/ "./src/tagsfield.scss":
/*!****************************!*\
  !*** ./src/tagsfield.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bulma-tagsfield/./src/tagsfield.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./docs/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;