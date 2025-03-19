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

/***/ "./src/renderer/index.ts":
/*!*******************************!*\
  !*** ./src/renderer/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst common_service_1 = __webpack_require__(/*! @bitwarden/common/common.service */ \"../../libs/common/common.service.ts\");\nconst angular_service_1 = __webpack_require__(/*! @bitwarden/angular/angular.service */ \"../../libs/angular/angular.service.ts\");\nconst commonService = new common_service_1.CommonService();\nconst angularService = new angular_service_1.AngularService();\ndocument.getElementById('commonMessage').textContent = commonService.getMessage();\ndocument.getElementById('angularMessage').textContent = angularService.getMessage();\n\n\n//# sourceURL=webpack://@bitwarden/desktop/./src/renderer/index.ts?");

/***/ }),

/***/ "../../libs/angular/angular.service.ts":
/*!*********************************************!*\
  !*** ../../libs/angular/angular.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AngularService = void 0;\nconst common_service_1 = __webpack_require__(/*! @bitwarden/common/common.service */ \"../../libs/common/common.service.ts\");\nclass AngularService {\n    constructor() {\n        this.commonService = new common_service_1.CommonService();\n    }\n    getMessage() {\n        return this.commonService.getMessage(\"angular\");\n    }\n}\nexports.AngularService = AngularService;\n\n\n//# sourceURL=webpack://@bitwarden/desktop/../../libs/angular/angular.service.ts?");

/***/ }),

/***/ "../../libs/common/common.service.ts":
/*!*******************************************!*\
  !*** ../../libs/common/common.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CommonService = void 0;\nclass CommonService {\n    getMessage(lib = \"common\") {\n        return `Hello from the ${lib} library!`;\n    }\n}\nexports.CommonService = CommonService;\n\n\n//# sourceURL=webpack://@bitwarden/desktop/../../libs/common/common.service.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/renderer/index.ts");
/******/ 	
/******/ })()
;