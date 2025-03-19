/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content/index.ts":
/*!******************************!*\
  !*** ./src/content/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bitwarden_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/common.service */ \"../../libs/common/common.service.ts\");\n\nconst commonService = new _bitwarden_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService();\nconsole.log(commonService.getMessage('browser-content'));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudC9pbmRleC50cyIsIm1hcHBpbmdzIjoiOztBQUFpRTtBQUVqRSxNQUFNLGFBQWEsR0FBRyxJQUFJLDJFQUFhLEVBQUUsQ0FBQztBQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGJpdHdhcmRlbi9icm93c2VyLy4vc3JjL2NvbnRlbnQvaW5kZXgudHM/N2Y1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnQGJpdHdhcmRlbi9jb21tb24vY29tbW9uLnNlcnZpY2UnO1xuXG5jb25zdCBjb21tb25TZXJ2aWNlID0gbmV3IENvbW1vblNlcnZpY2UoKTtcblxuY29uc29sZS5sb2coY29tbW9uU2VydmljZS5nZXRNZXNzYWdlKCdicm93c2VyLWNvbnRlbnQnKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/content/index.ts\n");

/***/ }),

/***/ "../../libs/common/common.service.ts":
/*!*******************************************!*\
  !*** ../../libs/common/common.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CommonService: () => (/* binding */ CommonService)\n/* harmony export */ });\nclass CommonService {\n    getMessage(lib = \"common\") {\n        return `Hello from the ${lib} library!`;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbGlicy9jb21tb24vY29tbW9uLnNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU0sYUFBYTtJQUN4QixVQUFVLENBQUMsTUFBYyxRQUFRO1FBQy9CLE9BQU8sa0JBQWtCLEdBQUcsV0FBVyxDQUFDO0lBQzFDLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0BiaXR3YXJkZW4vYnJvd3Nlci8uLi8uLi9saWJzL2NvbW1vbi9jb21tb24uc2VydmljZS50cz9mOWExIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tb25TZXJ2aWNlIHtcbiAgZ2V0TWVzc2FnZShsaWI6IHN0cmluZyA9IFwiY29tbW9uXCIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgSGVsbG8gZnJvbSB0aGUgJHtsaWJ9IGxpYnJhcnkhYDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../libs/common/common.service.ts\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/content/index.ts");
/******/ 	
/******/ })()
;