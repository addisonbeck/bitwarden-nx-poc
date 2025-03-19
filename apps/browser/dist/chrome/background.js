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

/***/ "./src/background/index.ts":
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bitwarden_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/common.service */ \"../../libs/common/common.service.ts\");\n\nconst commonService = new _bitwarden_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService();\nconsole.log(commonService.getMessage());\nchrome.runtime.onMessage.addListener((message, sender, sendResponse) => {\n    if (message.action === 'getHello') {\n        sendResponse({ message: commonService.getMessage('browser-background') });\n    }\n    return true;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2dyb3VuZC9pbmRleC50cyIsIm1hcHBpbmdzIjoiOztBQUFpRTtBQUVqRSxNQUFNLGFBQWEsR0FBRyxJQUFJLDJFQUFhLEVBQUUsQ0FBQztBQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQVksRUFBRSxNQUFvQyxFQUFFLFlBQXFDLEVBQUUsRUFBRTtJQUNqSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFLENBQUM7UUFDbEMsWUFBWSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYml0d2FyZGVuL2Jyb3dzZXIvLi9zcmMvYmFja2dyb3VuZC9pbmRleC50cz82N2I1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICdAYml0d2FyZGVuL2NvbW1vbi9jb21tb24uc2VydmljZSc7XG5cbmNvbnN0IGNvbW1vblNlcnZpY2UgPSBuZXcgQ29tbW9uU2VydmljZSgpO1xuXG5jb25zb2xlLmxvZyhjb21tb25TZXJ2aWNlLmdldE1lc3NhZ2UoKSk7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZTogYW55LCBzZW5kZXI6IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXIsIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpID0+IHtcbiAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZ2V0SGVsbG8nKSB7XG4gICAgc2VuZFJlc3BvbnNlKHsgbWVzc2FnZTogY29tbW9uU2VydmljZS5nZXRNZXNzYWdlKCdicm93c2VyLWJhY2tncm91bmQnKSB9KTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/background/index.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/background/index.ts");
/******/ 	
/******/ })()
;