/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Const/const */ \"./src/modules/Const/const.js\");\n/* harmony import */ var _modules_Classes_FieldStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Classes/FieldStorage */ \"./src/modules/Classes/FieldStorage.js\");\n/* harmony import */ var _modules_Functions_initCells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Functions/initCells */ \"./src/modules/Functions/initCells.js\");\n/* harmony import */ var _modules_Functions_initStones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Functions/initStones */ \"./src/modules/Functions/initStones.js\");\n\r\n;\r\n\r\n\r\n\r\n\r\n(0,_modules_Functions_initCells__WEBPACK_IMPORTED_MODULE_2__.initCells)(_modules_Const_const__WEBPACK_IMPORTED_MODULE_0__.playField, _modules_Const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth, _modules_Const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight); //Инициализация игровых ячеек\r\n(0,_modules_Functions_initStones__WEBPACK_IMPORTED_MODULE_3__.initStones)(); //Заполнение поля камнями\r\n\n\n//# sourceURL=webpack://game/./src/index.js?");

/***/ }),

/***/ "./src/modules/Classes/FieldStorage.js":
/*!*********************************************!*\
  !*** ./src/modules/Classes/FieldStorage.js ***!
  \*********************************************/
/*! namespace exports */
/*! export FieldStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FieldStorage\": () => /* binding */ FieldStorage\n/* harmony export */ });\nclass FieldStorage {\r\n    constructor(fieldWidth, fieldHeight) {\r\n        this.fieldWidth = fieldWidth;\r\n        this.fieldHeight = fieldHeight;\r\n        this.fieldStorage = [];\r\n    }\r\n    addStone(stone) {\r\n        this.fieldStorage.push(stone);\r\n    }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/Classes/FieldStorage.js?");

/***/ }),

/***/ "./src/modules/Classes/Stone.js":
/*!**************************************!*\
  !*** ./src/modules/Classes/Stone.js ***!
  \**************************************/
/*! namespace exports */
/*! export Stone [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stone\": () => /* binding */ Stone\n/* harmony export */ });\nclass Stone {\r\n    constructor(cordX, cordY) {\r\n        this.cordX = cordX;\r\n        this.cordY = cordY;\r\n        this.typeAmmount = 7 // Проблема статика с вебпаком?\r\n        this.type = this.randomiseType();\r\n    }\r\n    \r\n    randomiseType() {\r\n        const type = Math.floor(1 + Math.random() * (this.typeAmmount));\r\n        switch (type) {\r\n            case 1:\r\n                return \"crimson\";\r\n            case 2:\r\n                return \"limegreen\";\r\n            case 3:\r\n                return \"orange\";\r\n            case 4:\r\n                return \"turquoise\";\r\n            case 5:\r\n                return \"blue\";\r\n            case 6:\r\n                return \"violet\";\r\n            case 7:\r\n                return \"sienna\";\r\n            default:\r\n                console.log(\"Неверное количество типов камней!\")\r\n                return \"Undefined type of stone\"\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/Classes/Stone.js?");

/***/ }),

/***/ "./src/modules/Const/const.js":
/*!************************************!*\
  !*** ./src/modules/Const/const.js ***!
  \************************************/
/*! namespace exports */
/*! export fieldHeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fieldWidth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playField [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fieldWidth\": () => /* binding */ fieldWidth,\n/* harmony export */   \"fieldHeight\": () => /* binding */ fieldHeight,\n/* harmony export */   \"playField\": () => /* binding */ playField\n/* harmony export */ });\n// Размеры по ширине\r\nconst fieldWidth = 8;\r\n\r\n// Размеры по высоте\r\nconst fieldHeight = 8;\r\n\r\n// Получение игрового поля из документа для последующей инициализации\r\nconst playField = document.getElementsByClassName('play-field')[0];\r\n\r\n\n\n//# sourceURL=webpack://game/./src/modules/Const/const.js?");

/***/ }),

/***/ "./src/modules/Functions/initCells.js":
/*!********************************************!*\
  !*** ./src/modules/Functions/initCells.js ***!
  \********************************************/
/*! namespace exports */
/*! export initCells [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initCells\": () => /* binding */ initCells\n/* harmony export */ });\nlet initCells = function(playField, fieldWidth, fieldHeight) {\r\n    let rowIndex = 1;\r\n    let columnIndex = 1;\r\n    while (true) {\r\n        let cell = document.createElement('div');\r\n        cell.classList.add('play-field__cell');\r\n        cell.setAttribute('x', rowIndex);\r\n        cell.setAttribute('y', columnIndex);\r\n        playField.append(cell);\r\n        if (rowIndex === fieldWidth) {\r\n            if (columnIndex === fieldHeight) {\r\n                break;\r\n            } else {\r\n                rowIndex = 1;\r\n                columnIndex++; \r\n            }\r\n        } else {\r\n            rowIndex++;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/Functions/initCells.js?");

/***/ }),

/***/ "./src/modules/Functions/initStones.js":
/*!*********************************************!*\
  !*** ./src/modules/Functions/initStones.js ***!
  \*********************************************/
/*! namespace exports */
/*! export initStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initStones\": () => /* binding */ initStones\n/* harmony export */ });\n/* harmony import */ var _Classes_Stone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Stone */ \"./src/modules/Classes/Stone.js\");\n\r\nlet initStones = function() {\r\n    const cellList = Array.from(document.getElementsByClassName('play-field__cell')); \r\n    cellList.forEach(cell => {\r\n        const stoneData = new _Classes_Stone__WEBPACK_IMPORTED_MODULE_0__.Stone(cell.getAttribute('x'), cell.getAttribute('y'));\r\n        const stone = document.createElement('div');\r\n        stone.classList.add('stone');\r\n        stone.classList.add('stone_color_' + stoneData.type)\r\n        cell.append(stone)\r\n    })\r\n}\n\n//# sourceURL=webpack://game/./src/modules/Functions/initStones.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;