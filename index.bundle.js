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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/bg2.jpg */ \"./src/asset/bg2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"::-webkit-scrollbar {\\r\\n  width: 3px;\\r\\n  background-color: rgb(7, 2, 13);\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  width: 3px;\\r\\n  background-color: var(--blend-color);\\r\\n  border-radius: 30px;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --text-color: #000;\\r\\n  --light-text: rgb(255, 255, 255);\\r\\n  --dark-bg: rgb(7, 2, 13);\\r\\n  --blend-color: gold;\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  color: var(--light-text);\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: var(--text-color);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  justify-content: center;\\r\\n  background-color: rgb(3, 0, 7);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n  background-color: var(--blend-color);\\r\\n  color: rgb(18, 4, 29);\\r\\n  padding: 0.8em 1.5em;\\r\\n  border: none;\\r\\n  font-family: inherit;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nnav i {\\r\\n  font-size: 1.5rem;\\r\\n  color: var(--blend-color);\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.nav-menu {\\r\\n  position: fixed;\\r\\n  bottom: -100%;\\r\\n  left: 50%;\\r\\n  transform: translateX(-50%);\\r\\n  width: 70%;\\r\\n  background-color: #000;\\r\\n  padding: 0.5em;\\r\\n  justify-content: center;\\r\\n  gap: 2rem;\\r\\n  z-index: 10;\\r\\n  transition: 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.nav-menu.slide {\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  font-size: 0.788rem;\\r\\n  letter-spacing: 2px;\\r\\n  margin: 1rem;\\r\\n  color: var(--light-text);\\r\\n}\\r\\n\\r\\n.nav-item {\\r\\n  transition: all 0.4s ease-in-out;\\r\\n}\\r\\n\\r\\n.nav-item:hover {\\r\\n  transform: scale(1.08);\\r\\n}\\r\\n\\r\\n.harmburger {\\r\\n  position: fixed;\\r\\n  background-color: var(--dark-bg);\\r\\n  bottom: 4%;\\r\\n  right: 6%;\\r\\n  z-index: 11;\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  border-radius: 50%;\\r\\n  display: block;\\r\\n  padding: 0.04em;\\r\\n  text-align: center;\\r\\n  transition: 0.4s ease-in-out;\\r\\n  border: 1px solid var(--blend-color);\\r\\n}\\r\\n\\r\\n.harmburger.slide {\\r\\n  bottom: 14%;\\r\\n}\\r\\n\\r\\n.bx-grid-alt {\\r\\n  color: rgba(255, 255, 255, 0.884);\\r\\n  font-size: 1.5rem;\\r\\n  line-height: 40px;\\r\\n}\\r\\n\\r\\n.harmburger:hover .bx-grid-alt {\\r\\n  color: var(--blend-color);\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  nav {\\r\\n    height: 100vh;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 6rem;\\r\\n    position: fixed;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    background-color: var(--dark-bg);\\r\\n  }\\r\\n\\r\\n  a.logo {\\r\\n    color: var(--light-text);\\r\\n    position: absolute;\\r\\n    display: block;\\r\\n    top: 1rem;\\r\\n    font-size: 1.2rem;\\r\\n  }\\r\\n\\r\\n  .ban {\\r\\n    color: var(--blend-color);\\r\\n  }\\r\\n\\r\\n  .nav-menu {\\r\\n    position: relative;\\r\\n    left: 3rem;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    width: initial;\\r\\n    background: none;\\r\\n    bottom: 0;\\r\\n    transition: unset;\\r\\n  }\\r\\n\\r\\n  .nav-link i {\\r\\n    font-size: 2rem;\\r\\n  }\\r\\n\\r\\n  .harmburger {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n.headline {\\r\\n  width: 100%;\\r\\n  height: 78vh;\\r\\n}\\r\\n\\r\\n.headline-img {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-position: 38% 0;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n.cards {\\r\\n  width: 100%;\\r\\n  max-width: 1200px;\\r\\n  padding: 0 1em;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: 100%;\\r\\n  max-width: 350px;\\r\\n  padding: 0.5em 0.5em;\\r\\n  margin: 1rem;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.card button {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.card-img {\\r\\n  width: 100%;\\r\\n  height: 270px;\\r\\n  background: white;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  color: rgb(224, 221, 221);\\r\\n  align-items: flex-end;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.like .bxs-heart,\\r\\n.like .bx-heart {\\r\\n  font-size: 2rem;\\r\\n  margin-right: 0.2rem;\\r\\n  color: rgb(255, 28, 28);\\r\\n}\\r\\n\\r\\n.social {\\r\\n  justify-content: space-between;\\r\\n  padding: 0.6em 1em;\\r\\n}\\r\\n\\r\\n.social .details {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .headline-img {\\r\\n    background-position: 0;\\r\\n  }\\r\\n\\r\\n  .cards {\\r\\n    width: calc(100% - 6rem);\\r\\n    margin-left: 6rem;\\r\\n  }\\r\\n\\r\\n  .card {\\r\\n    max-width: 300px;\\r\\n  }\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: var(--dark-bg);\\r\\n  justify-content: space-around;\\r\\n  padding: 2.5em 1em 2em;\\r\\n  flex-direction: column;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.footer-details {\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.footer-details p {\\r\\n  font-size: 1.5rem;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.app {\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n\\r\\n.footer-link {\\r\\n  color: rgb(216, 210, 210);\\r\\n  align-items: flex-end;\\r\\n  font-size: 0.9rem;\\r\\n  margin-bottom: 0.6rem;\\r\\n}\\r\\n\\r\\n.bxl-play-store,\\r\\n.bxl-apple {\\r\\n  font-size: 2rem;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.social-links i {\\r\\n  font-size: 1.3rem;\\r\\n  color: rgb(7, 2, 13);\\r\\n  background-color: rgb(233, 227, 227);\\r\\n  border-radius: 50%;\\r\\n  padding: 0.2em;\\r\\n  margin: 0.6rem 0.5rem;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background-color: rgba(58, 47, 66, 0.253);\\r\\n  padding: 1em;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n  z-index: 100;\\r\\n}\\r\\n\\r\\n.modal.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  background-color: var(--dark-bg);\\r\\n  max-width: 100%;\\r\\n  max-height: 600px;\\r\\n  padding: 1.5em 0;\\r\\n  overflow-y: auto;\\r\\n  transform: scale(0);\\r\\n  transition: transform 1s ease-in-out;\\r\\n  border-radius: 8px;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.modal-content.active {\\r\\n  transform: scale(1);\\r\\n}\\r\\n\\r\\n.modal-img {\\r\\n  width: 100%;\\r\\n  max-width: 300px;\\r\\n  background-color: white;\\r\\n  height: 200px;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.modal-details {\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.modal-details p {\\r\\n  font-size: 0.75rem;\\r\\n  width: auto;\\r\\n  max-width: 430px;\\r\\n  line-height: 1.7;\\r\\n  text-align: center;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.bx-x {\\r\\n  position: absolute;\\r\\n  top: 1%;\\r\\n  right: 2%;\\r\\n  color: var(--blend-color);\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  text-align: center;\\r\\n  font-weight: 300;\\r\\n  font-size: 1.4rem;\\r\\n  margin: 0.7rem 0;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n  gap: 1rem;\\r\\n  font-size: 0.7rem;\\r\\n  color: rgb(194, 186, 186);\\r\\n  margin-bottom: 0.7rem;\\r\\n}\\r\\n\\r\\n.comment-msg {\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 60%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  background-color: transparent;\\r\\n  border: 1px solid rgb(230, 228, 228);\\r\\n  border-radius: 8px;\\r\\n  padding: 0.5em 0.7em;\\r\\n  color: white;\\r\\n  font-family: inherit;\\r\\n  margin-bottom: 0.4rem;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  footer {\\r\\n    width: 100%;\\r\\n    flex-direction: row;\\r\\n  }\\r\\n\\r\\n  footer .logo {\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .modal-img {\\r\\n    max-width: 400px;\\r\\n    background-color: white;\\r\\n    height: 300px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/getData.js */ \"./src/module/getData.js\");\n\n\n\n(0,_module_getData_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\n\nconst hamburger = document.querySelector('.harmburger');\nconst nav = document.querySelector('.nav-menu');\nhamburger.addEventListener('click', () => {\n  hamburger.classList.toggle('slide');\n  nav.classList.toggle('slide');\n});\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/module/cards.js":
/*!*****************************!*\
  !*** ./src/module/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/module/modal.js\");\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData.js */ \"./src/module/getData.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nconst cards = (games, data) => {\n  const cards = document.querySelector('.cards');\n  cards.innerHTML = '';\n  games.forEach((game, index) => {\n    const id = data.findIndex((like) => +like.item_id === index);\n    const msgLikes = id >= 0 ? data[id].likes : 0;\n    const innerHtml = `\n    <div class=\"card\" id=\"card\">\n      <img src=\"${game.image.original}\" class=\"card-img\" />\n      <div class=\"social flex\">\n        <span class=\"details\">${game.name}</span>\n        <div class=\"like flex\">\n          <i class=\"bx bx-heart\" data-id=\"${index}\"></i>\n          <span>${msgLikes} Likes</span>\n        </div>\n      </div>\n      <button id=\"pop-up\" data-id=\"${index}\">Comments</button>\n    </div>`;\n    cards.innerHTML += innerHtml;\n  });\n\n  const popUp = document.querySelectorAll('#pop-up');\n  popUp.forEach((pop) => {\n    pop.addEventListener('click', async (e) => {\n      const modalPanel = document.querySelector('.modal');\n      const modalContent = document.querySelector('.modal-content');\n      modalPanel.classList.remove('hidden');\n      modalContent.classList.add('active');\n      await (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(games, e.target.dataset.id);\n\n      const closeBtn = document.querySelector('.bx-x');\n      closeBtn.addEventListener('click', () => {\n        modalPanel.classList.add('hidden');\n        modalContent.classList.remove('active');\n      });\n    });\n  });\n\n  const likeBtn = document.querySelectorAll('.bx-heart');\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5cAzmpr4jeQVeyEjNyKs/likes';\n  likeBtn.forEach((like) => {\n    like.addEventListener('click', (e) => {\n      (0,_getData_js__WEBPACK_IMPORTED_MODULE_1__.requestLikes)(url, e.target.dataset.id);\n      like.classList.remove('bx-heart');\n      like.classList.add('bxs-heart');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/cards.js?");

/***/ }),

/***/ "./src/module/counter.js":
/*!*******************************!*\
  !*** ./src/module/counter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countMovies = (count) => {\n  const counter = document.querySelector('#game-count');\n  counter.innerHTML = `(${count})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countMovies);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/counter.js?");

/***/ }),

/***/ "./src/module/getData.js":
/*!*******************************!*\
  !*** ./src/module/getData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"requestLikes\": () => (/* binding */ requestLikes)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/module/cards.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/module/counter.js\");\n/* eslint-disable import/no-cycle */\n\n\n\nconst getData = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const getJsonObj = await response.json();\n  const result = getJsonObj.slice(0, 18);\n  (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result.length);\n\n  const likes = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5cAzmpr4jeQVeyEjNyKs/likes');\n  const res = await likes.json();\n  (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(result, res);\n};\n\nconst requestLikes = async (url, id) => {\n  await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n  getData();\n};\n\nrequestLikes();\n\nconst getComments = async (id) => {\n  const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5cAzmpr4jeQVeyEjNyKs/comments?item_id=item${id}`);\n  const response = comments.json();\n  return response;\n};\n\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/getData.js?");

/***/ }),

/***/ "./src/module/modal.js":
/*!*****************************!*\
  !*** ./src/module/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _requestComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestComment.js */ \"./src/module/requestComment.js\");\n/* eslint-disable no-return-assign */\n\n\n\nconst modal = async (data, index) => {\n  let commentData = await (0,_requestComment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(index);\n  if (commentData.length === undefined) {\n    commentData = [];\n  }\n  const modalContainer = document.querySelector('.modal-content');\n  modalContainer.innerHTML = `\n    <div class=\"modal-details flex\">\n      <img src=\"${data[index].image.original}\" class=\"modal-img\" />\n      <h2 class=\"heading\">${data[index].name}</h2>\n      <p class=\"movie-desc\">\n        ${data[index].summary}\n      </p>\n    </div>\n    <div class=\"comments\">\n      <div class=\"comment-details\">\n        <h2 class=\"heading\">Comments <span>(${commentData.length})</span></h2>`;\n  commentData.map((comment) => modalContainer.innerHTML += `<div class=\"comment flex\">\n          <p class=\"comment-date\">${comment.creation_date} ${comment.username} :</p>\n          <p class=\"comment-msg\">${comment.comment}</p>\n          </div>\n          `);\n  modalContainer.innerHTML += `</div>\n    </div>\n    <div class=\"comment-form\">\n      <form class=\"\">\n      <h2 class=\"heading\">Add a comment</h2>\n        <input type=\"text\" placeholder=\"Enter your name\" required />\n        <textarea placeholder=\"Enter your comment here\" required></textarea>\n        <button type=\"submit\" class=\"btn flex\">Submit</button>\n      </form>\n      <i class='bx bx-x'></i>\n    </div>`;\n\n  const form = document.querySelector('form');\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const name = document.querySelector('input').value;\n    const commentMsg = document.querySelector('textarea').value;\n    const commentData = {\n      item_id: index.toString(),\n      username: name,\n      comment: commentMsg,\n    };\n    form.reset();\n    (0,_requestComment_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(commentData);\n    (0,_requestComment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(index);\n    setTimeout(() => {\n      window.location.reload();\n    }, 2000);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/modal.js?");

/***/ }),

/***/ "./src/module/requestComment.js":
/*!**************************************!*\
  !*** ./src/module/requestComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5cAzmpr4jeQVeyEjNyKs/comments';\n\nconst postComment = async (data) => {\n  await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json',\n      Accept: 'application/json',\n    },\n  });\n};\n\nconst getComments = async (id) => {\n  const getUrl = `?item_id=${id}`;\n  const response = await fetch(url + getUrl);\n  const data = await response.json();\n  return data;\n};\n\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/requestComment.js?");

/***/ }),

/***/ "./src/asset/bg2.jpg":
/*!***************************!*\
  !*** ./src/asset/bg2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4cb026337dc569f9db59.jpg\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/asset/bg2.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;