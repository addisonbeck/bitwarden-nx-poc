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

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst common_service_1 = __webpack_require__(/*! @bitwarden/common/common.service */ \"../../libs/common/common.service.ts\");\nconst commonService = new common_service_1.CommonService();\nlet mainWindow;\nfunction createWindow() {\n    mainWindow = new electron_1.BrowserWindow({\n        width: 800,\n        height: 600,\n        webPreferences: {\n            nodeIntegration: true,\n            contextIsolation: false,\n        },\n    });\n    mainWindow.loadFile(path.join(__dirname, 'index.html'));\n    console.log(commonService.getMessage('desktop-main'));\n}\nelectron_1.app.whenReady().then(() => {\n    createWindow();\n});\nelectron_1.app.on('window-all-closed', () => {\n    if (process.platform !== 'darwin') {\n        electron_1.app.quit();\n    }\n});\nelectron_1.app.on('activate', () => {\n    if (electron_1.BrowserWindow.getAllWindows().length === 0) {\n        createWindow();\n    }\n});\n\n\n//# sourceURL=webpack://@bitwarden/desktop/./src/main/index.ts?");

/***/ }),

/***/ "../../libs/common/common.service.ts":
/*!*******************************************!*\
  !*** ../../libs/common/common.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CommonService = void 0;\nclass CommonService {\n    getMessage(lib = \"common\") {\n        return `Hello from the ${lib} library!`;\n    }\n}\nexports.CommonService = CommonService;\n\n\n//# sourceURL=webpack://@bitwarden/desktop/../../libs/common/common.service.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/index.ts");
/******/ 	
/******/ })()
;