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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_init_init_field_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions/init/init-field-size */ \"./src/modules/functions/init/init-field-size.js\");\n/* harmony import */ var _modules_classes_field_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/classes/field-storage */ \"./src/modules/classes/field-storage.js\");\n/* harmony import */ var _modules_const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _modules_functions_init_init_cells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/functions/init/init-cells */ \"./src/modules/functions/init/init-cells.js\");\n/* harmony import */ var _modules_functions_init_init_stones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/functions/init/init-stones */ \"./src/modules/functions/init/init-stones.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_functions_init_init_field_size__WEBPACK_IMPORTED_MODULE_0__.initFieldSize)(_modules_const_const__WEBPACK_IMPORTED_MODULE_2__.playField, _modules_const_const__WEBPACK_IMPORTED_MODULE_2__.fieldWidth, _modules_const_const__WEBPACK_IMPORTED_MODULE_2__.fieldHeight);\r\n(0,_modules_functions_init_init_cells__WEBPACK_IMPORTED_MODULE_3__.initCells)(_modules_const_const__WEBPACK_IMPORTED_MODULE_2__.playField, _modules_const_const__WEBPACK_IMPORTED_MODULE_2__.fieldWidth, _modules_const_const__WEBPACK_IMPORTED_MODULE_2__.fieldHeight); // Инициализация игровых ячеек\r\nconst fieldStorage = new _modules_classes_field_storage__WEBPACK_IMPORTED_MODULE_1__.FieldStorage(_modules_const_const__WEBPACK_IMPORTED_MODULE_2__.fieldWidth, _modules_const_const__WEBPACK_IMPORTED_MODULE_2__.fieldHeight); // Инициализация пустого массива камней\r\n(0,_modules_functions_init_init_stones__WEBPACK_IMPORTED_MODULE_4__.initStones)(fieldStorage); // Заполнение / Перезаполнение поля и массива камнями\r\n\n\n//# sourceURL=webpack://game/./src/index.js?");

/***/ }),

/***/ "./src/modules/classes/field-storage.js":
/*!**********************************************!*\
  !*** ./src/modules/classes/field-storage.js ***!
  \**********************************************/
/*! namespace exports */
/*! export FieldStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FieldStorage\": () => /* binding */ FieldStorage\n/* harmony export */ });\nclass FieldStorage {\r\n  constructor(fieldWidth, fieldHeight) {\r\n    this.fieldWidth = fieldWidth;\r\n    this.fieldHeight = fieldHeight;\r\n    this.fieldStorage = [];\r\n  }\r\n  addStone(stone) {\r\n    this.fieldStorage.push(stone);\r\n  }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/classes/field-storage.js?");

/***/ }),

/***/ "./src/modules/classes/stone.js":
/*!**************************************!*\
  !*** ./src/modules/classes/stone.js ***!
  \**************************************/
/*! namespace exports */
/*! export Stone [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stone\": () => /* binding */ Stone\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\nclass Stone {\r\n  constructor(cordX, cordY) {\r\n    this.cordX = cordX;\r\n    this.cordY = cordY;\r\n    this.type = this.randomiseType();\r\n    this.selected = false;\r\n  }\r\n  randomiseType() {\r\n    const type = Math.floor(1 + Math.random() * (_const_const__WEBPACK_IMPORTED_MODULE_0__.typeAmmount));\r\n    switch (type) {\r\n      case 1:\r\n        return \"crimson\";\r\n      case 2:\r\n        return \"limegreen\";\r\n      case 3:\r\n        return \"orange\";\r\n      case 4:\r\n        return \"turquoise\";\r\n      case 5:\r\n        return \"blue\";\r\n      case 6:\r\n        return \"violet\";\r\n      case 7:\r\n        return \"sienna\";\r\n      default:\r\n        console.log(\"Неверное количество типов камней!\")\r\n        return \"Undefined type of stone\"\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/classes/stone.js?");

/***/ }),

/***/ "./src/modules/const/const.js":
/*!************************************!*\
  !*** ./src/modules/const/const.js ***!
  \************************************/
/*! namespace exports */
/*! export fieldHeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fieldWidth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gameplayHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playField [provided] [no usage info] [missing usage info prevents renaming] */
/*! export typeAmmount [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fieldWidth\": () => /* binding */ fieldWidth,\n/* harmony export */   \"fieldHeight\": () => /* binding */ fieldHeight,\n/* harmony export */   \"playField\": () => /* binding */ playField,\n/* harmony export */   \"typeAmmount\": () => /* binding */ typeAmmount,\n/* harmony export */   \"gameplayHandler\": () => /* binding */ gameplayHandler\n/* harmony export */ });\n// Размеры поля\r\nconst fieldWidth = 8;\r\nconst fieldHeight = 8;\r\n// Получение игрового поля из документа для последующей инициализации\r\nconst playField = document.getElementsByClassName('play-field')[0];\r\n// Количество типов камней (при изменении нужно добавить соответствующие стили в scss и класс Stone)\r\nconst typeAmmount = 7; \r\n// Игровой обработчик событий\r\nconst gameplayHandler = {\r\n  flag: false,\r\n  selectedStone: undefined\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/const/const.js?");

/***/ }),

/***/ "./src/modules/functions/animate-stone.js":
/*!************************************************!*\
  !*** ./src/modules/functions/animate-stone.js ***!
  \************************************************/
/*! namespace exports */
/*! export animateStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animateStones\": () => /* binding */ animateStones\n/* harmony export */ });\nconst animateStones = function (firstCell, secondCell, returnStones) {\r\n  // if (firstCell.getAttribute('x') === secondCell.getAttribute('x') {\r\n\r\n  // }\r\n\r\n  // } else {\r\n\r\n    // firstCell.animate({\r\n    //   duration: 1000,\r\n    //   timing: function(timeFraction) {\r\n    //     return timeFraction;\r\n    //   },\r\n    //   draw: function(progress) {\r\n    //     firstCell.style. = progress * 100 + '%';\r\n    //   }\r\n    // });  \r\n  // }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/functions/animate-stone.js?");

/***/ }),

/***/ "./src/modules/functions/find-cell.js":
/*!********************************************!*\
  !*** ./src/modules/functions/find-cell.js ***!
  \********************************************/
/*! namespace exports */
/*! export findCell [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findCell\": () => /* binding */ findCell\n/* harmony export */ });\nconst findCell = function (cordX, cordY) {\r\n  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));\r\n  return cellList.find(element => (element.getAttribute('x') === cordX && element.getAttribute('y') === cordY))\r\n}\n\n//# sourceURL=webpack://game/./src/modules/functions/find-cell.js?");

/***/ }),

/***/ "./src/modules/functions/init/init-cells.js":
/*!**************************************************!*\
  !*** ./src/modules/functions/init/init-cells.js ***!
  \**************************************************/
/*! namespace exports */
/*! export initCells [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initCells\": () => /* binding */ initCells\n/* harmony export */ });\nconst initCells = function (playField, fieldWidth, fieldHeight) {\r\n  const cellWidth = (100 / fieldWidth) + '%';\r\n  let rowIndex = 1;\r\n  let columnIndex = 1;\r\n  while (true) {\r\n    const cell = document.createElement('div');\r\n    cell.classList.add('play-field__cell');\r\n    cell.style.width = cellWidth;\r\n    cell.setAttribute('x', rowIndex);\r\n    cell.setAttribute('y', columnIndex);\r\n    playField.append(cell);\r\n    if (rowIndex === fieldWidth) {\r\n      if (columnIndex === fieldHeight) {\r\n        break;\r\n      } else {\r\n        rowIndex = 1;\r\n        columnIndex++;\r\n      }\r\n    } else {\r\n      rowIndex++;\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-cells.js?");

/***/ }),

/***/ "./src/modules/functions/init/init-field-size.js":
/*!*******************************************************!*\
  !*** ./src/modules/functions/init/init-field-size.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export initFieldSize [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFieldSize\": () => /* binding */ initFieldSize\n/* harmony export */ });\nconst initFieldSize = function (playField, fieldWidth, fieldHeight) {\r\n  playField.style.flexBasis = (fieldWidth * 100) + 'px';\r\n  playField.style.maxHeight = (fieldHeight * 100) + 'px';\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-field-size.js?");

/***/ }),

/***/ "./src/modules/functions/init/init-stones.js":
/*!***************************************************!*\
  !*** ./src/modules/functions/init/init-stones.js ***!
  \***************************************************/
/*! namespace exports */
/*! export initStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initStones\": () => /* binding */ initStones\n/* harmony export */ });\n/* harmony import */ var _classes_stone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/stone */ \"./src/modules/classes/stone.js\");\n/* harmony import */ var _move_stones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../move-stones */ \"./src/modules/functions/move-stones.js\");\n\r\n\r\n\r\nconst initStones = function (fieldStorage) {\r\n  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));\r\n  if (fieldStorage.fieldStorage.length) {\r\n    fieldStorage.fieldStorage.length = 0;\r\n    cellList.forEach(cell => {\r\n      cell.removeChild(cell.firstChild);\r\n    });\r\n  }\r\n  cellList.forEach(cell => {\r\n    const stoneData = new _classes_stone__WEBPACK_IMPORTED_MODULE_0__.Stone(cell.getAttribute('x'), cell.getAttribute('y'));\r\n    fieldStorage.addStone(stoneData);\r\n    const stone = document.createElement('div');\r\n    stone.classList.add('stone', 'stone_color_' + stoneData.type);\r\n    cell.append(stone);\r\n    stone.addEventListener( \"click\" , () => { (0,_move_stones__WEBPACK_IMPORTED_MODULE_1__.moveStones)(stoneData) });\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-stones.js?");

/***/ }),

/***/ "./src/modules/functions/is-swappable.js":
/*!***********************************************!*\
  !*** ./src/modules/functions/is-swappable.js ***!
  \***********************************************/
/*! namespace exports */
/*! export isSwappable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isSwappable\": () => /* binding */ isSwappable\n/* harmony export */ });\nconst isSwappable = function (firstStone, secondStone) {\r\n  if (firstStone.cordX === secondStone.cordX) {\r\n    return (Math.abs(firstStone.cordY - secondStone.cordY) === 1)\r\n  } else if (firstStone.cordY === secondStone.cordY){\r\n    return (Math.abs(firstStone.cordX - secondStone.cordX) === 1)\r\n  } else {\r\n    return false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/is-swappable.js?");

/***/ }),

/***/ "./src/modules/functions/move-stones.js":
/*!**********************************************!*\
  !*** ./src/modules/functions/move-stones.js ***!
  \**********************************************/
/*! namespace exports */
/*! export moveStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveStones\": () => /* binding */ moveStones\n/* harmony export */ });\n/* harmony import */ var _is_swappable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-swappable */ \"./src/modules/functions/is-swappable.js\");\n/* harmony import */ var _reset_stones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-stones */ \"./src/modules/functions/reset-stones.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _swap_stones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swap-stones */ \"./src/modules/functions/swap-stones.js\");\n\r\n\r\n\r\n\r\n\r\nconst moveStones = function (stone) {\r\n  if (stone.selected && stone === _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone) {\r\n    stone.selected = false;\r\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.flag = false;\r\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone = undefined;\r\n  } else {\r\n    if (_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.flag) {\r\n      if ((0,_is_swappable__WEBPACK_IMPORTED_MODULE_0__.isSwappable)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone, stone)) {\r\n        (0,_swap_stones__WEBPACK_IMPORTED_MODULE_3__.swapStones)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone, stone, true);\r\n        (0,_reset_stones__WEBPACK_IMPORTED_MODULE_1__.resetStones)(stone);\r\n      } else {\r\n        (0,_swap_stones__WEBPACK_IMPORTED_MODULE_3__.swapStones)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone, stone, false);\r\n        (0,_reset_stones__WEBPACK_IMPORTED_MODULE_1__.resetStones)(stone);\r\n      }\r\n    } else {\r\n      stone.selected = true;\r\n      _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.flag = true;\r\n      _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone = stone;\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/functions/move-stones.js?");

/***/ }),

/***/ "./src/modules/functions/reset-stones.js":
/*!***********************************************!*\
  !*** ./src/modules/functions/reset-stones.js ***!
  \***********************************************/
/*! namespace exports */
/*! export resetStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetStones\": () => /* binding */ resetStones\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\nconst resetStones = function (stone){\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone.selected = false;\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone = undefined;\r\n  stone.selected = false;\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.flag = false;\r\n}\n\n//# sourceURL=webpack://game/./src/modules/functions/reset-stones.js?");

/***/ }),

/***/ "./src/modules/functions/swap-stones.js":
/*!**********************************************!*\
  !*** ./src/modules/functions/swap-stones.js ***!
  \**********************************************/
/*! namespace exports */
/*! export swapStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"swapStones\": () => /* binding */ swapStones\n/* harmony export */ });\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-cell */ \"./src/modules/functions/find-cell.js\");\n/* harmony import */ var _animate_stone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate-stone */ \"./src/modules/functions/animate-stone.js\");\n\r\n\r\n\r\nconst swapStones = function (firstStone, secondStone, isSwappable) {\r\n  const firstCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_0__.findCell)(firstStone.cordX, firstStone.cordY);\r\n  const secondCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_0__.findCell)(secondStone.cordX, secondStone.cordY);\r\n  if (isSwappable) {\r\n    (0,_animate_stone__WEBPACK_IMPORTED_MODULE_1__.animateStones)(firstCell, secondCell, true)\r\n  } else {\r\n    (0,_animate_stone__WEBPACK_IMPORTED_MODULE_1__.animateStones)(firstCell, secondCell, false)\r\n  }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/functions/swap-stones.js?");

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