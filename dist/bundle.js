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

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_init_init_field_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions/init/init-field-size */ \"./src/modules/functions/init/init-field-size.js\");\n/* harmony import */ var _modules_const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _modules_functions_init_init_cells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/functions/init/init-cells */ \"./src/modules/functions/init/init-cells.js\");\n/* harmony import */ var _modules_functions_init_init_stones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/functions/init/init-stones */ \"./src/modules/functions/init/init-stones.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_functions_init_init_field_size__WEBPACK_IMPORTED_MODULE_0__.initFieldSize)();\r\n(0,_modules_functions_init_init_cells__WEBPACK_IMPORTED_MODULE_2__.initCells)(); // Инициализация игровых ячеек\r\n(0,_modules_functions_init_init_stones__WEBPACK_IMPORTED_MODULE_3__.initStones)(); // Заполнение / Перезаполнение поля и массива камнями\r\n\r\nstone.addEventListener('click', () => { moveStones(stoneData) }); // Переделать на делегировании\n\n//# sourceURL=webpack://game/./src/init.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FieldStorage\": () => /* binding */ FieldStorage\n/* harmony export */ });\nclass FieldStorage {\r\n  constructor(fieldWidth, fieldHeight) {\r\n    this.fieldWidth = fieldWidth;\r\n    this.fieldHeight = fieldHeight;\r\n    this.fieldStorage = [];\r\n  }\r\n  addStone(stone) {\r\n    this.fieldStorage.push(stone);\r\n  }\r\n  // findStone(cordX, cordY) {\r\n  //   return this.fieldStorage.find(item => item.cordX === cordX && item.cordY === cordY);\r\n  // }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/classes/field-storage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stone\": () => /* binding */ Stone\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\nclass Stone {\r\n  constructor(cordX, cordY) {\r\n    this.cordX = cordX;\r\n    this.cordY = cordY;\r\n    this.type = this.randomiseType();\r\n    this.selected = false;\r\n  }\r\n  randomiseType() {\r\n    const type = Math.floor(1 + Math.random() * (_const_const__WEBPACK_IMPORTED_MODULE_0__.typeAmmount));\r\n    if (_const_const__WEBPACK_IMPORTED_MODULE_0__.stoneColors.length < (_const_const__WEBPACK_IMPORTED_MODULE_0__.typeAmmount - 1)) {\r\n      return 'Undefined type of stone';\r\n    } else {\r\n      return _const_const__WEBPACK_IMPORTED_MODULE_0__.stoneColors[type - 1];\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/classes/stone.js?");

/***/ }),

/***/ "./src/modules/const/const.js":
/*!************************************!*\
  !*** ./src/modules/const/const.js ***!
  \************************************/
/*! namespace exports */
/*! export fieldHeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fieldStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fieldWidth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gameplayHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playField [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stoneColors [provided] [no usage info] [missing usage info prevents renaming] */
/*! export typeAmmount [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fieldWidth\": () => /* binding */ fieldWidth,\n/* harmony export */   \"fieldHeight\": () => /* binding */ fieldHeight,\n/* harmony export */   \"playField\": () => /* binding */ playField,\n/* harmony export */   \"typeAmmount\": () => /* binding */ typeAmmount,\n/* harmony export */   \"stoneColors\": () => /* binding */ stoneColors,\n/* harmony export */   \"gameplayHandler\": () => /* binding */ gameplayHandler,\n/* harmony export */   \"fieldStorage\": () => /* binding */ fieldStorage\n/* harmony export */ });\n/* harmony import */ var _classes_field_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/field-storage */ \"./src/modules/classes/field-storage.js\");\n\r\n\r\n// Размеры поля\r\nconst fieldWidth = 8;\r\nconst fieldHeight = 8;\r\n// Получение игрового поля из документа для инициализации\r\nconst playField = document.querySelector('.play-field');\r\n// Количество типов камней (при изменении нужно добавить соответствующие стили в scss и массив stoneColors)\r\nconst typeAmmount = 7;\r\n// Цвета камней\r\nconst stoneColors = [\r\n  'crimson',\r\n  'limegreen',\r\n  'orange',\r\n  'turquoise',\r\n  'blue',\r\n  'violet',\r\n  'sienna',\r\n];\r\n// Игровой обработчик событий\r\nconst gameplayHandler = {\r\n  isSelectedFlag: false,\r\n  selectedStone: null\r\n};\r\nconst fieldStorage = new _classes_field_storage__WEBPACK_IMPORTED_MODULE_0__.FieldStorage(fieldWidth, fieldHeight);\r\n\n\n//# sourceURL=webpack://game/./src/modules/const/const.js?");

/***/ }),

/***/ "./src/modules/functions/animation/animation-init.js":
/*!***********************************************************!*\
  !*** ./src/modules/functions/animation/animation-init.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export animationInit [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animationInit\": () => /* binding */ animationInit\n/* harmony export */ });\n/* harmony import */ var _get_animate_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-animate-direction */ \"./src/modules/functions/animation/get-animate-direction.js\");\n/* harmony import */ var _stone_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stone-animation */ \"./src/modules/functions/animation/stone-animation.js\");\n\r\n\r\n\r\nconst animationInit = (firstCell, secondCell, returnStones) => {\r\n  const animateDirection = (0,_get_animate_direction__WEBPACK_IMPORTED_MODULE_0__.getAnimateDirection)(firstCell, secondCell);\r\n  let firstStoneStyle;\r\n  let secondStoneStyle;\r\n  switch (animateDirection) {\r\n    case 'moveRight':\r\n      firstStoneStyle = 'left';\r\n      secondStoneStyle = 'right';\r\n      (0,_stone_animation__WEBPACK_IMPORTED_MODULE_1__.stoneAnimation)(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);\r\n      break;\r\n    case 'moveLeft':\r\n      firstStoneStyle = 'right';\r\n      secondStoneStyle = 'left';\r\n      (0,_stone_animation__WEBPACK_IMPORTED_MODULE_1__.stoneAnimation)(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);\r\n      break;\r\n    case 'moveBottom':\r\n      firstStoneStyle = 'top';\r\n      secondStoneStyle = 'bottom';\r\n      (0,_stone_animation__WEBPACK_IMPORTED_MODULE_1__.stoneAnimation)(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);\r\n      break;\r\n    case 'moveUp':\r\n      firstStoneStyle = 'bottom';\r\n      secondStoneStyle = 'top';\r\n      (0,_stone_animation__WEBPACK_IMPORTED_MODULE_1__.stoneAnimation)(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);\r\n      break;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/animation/animation-init.js?");

/***/ }),

/***/ "./src/modules/functions/animation/get-animate-direction.js":
/*!******************************************************************!*\
  !*** ./src/modules/functions/animation/get-animate-direction.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export getAnimateDirection [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAnimateDirection\": () => /* binding */ getAnimateDirection\n/* harmony export */ });\nconst getAnimateDirection = (firstCell, secondCell) => {\r\n  const direction = firstCell.getAttribute('y') === secondCell.getAttribute('y') ? 'horizontal' : 'vertical';\r\n  if (direction === 'horizontal') {\r\n    if (firstCell.getAttribute('x') < secondCell.getAttribute('x')) {\r\n      return 'moveRight';\r\n    } else {\r\n      return 'moveLeft';\r\n    }\r\n  } else {\r\n    if (firstCell.getAttribute('y') < secondCell.getAttribute('y')) {\r\n      return 'moveBottom';\r\n    } else {\r\n      return 'moveUp';\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/animation/get-animate-direction.js?");

/***/ }),

/***/ "./src/modules/functions/animation/stone-animation.js":
/*!************************************************************!*\
  !*** ./src/modules/functions/animation/stone-animation.js ***!
  \************************************************************/
/*! namespace exports */
/*! export stoneAnimation [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stoneAnimation\": () => /* binding */ stoneAnimation\n/* harmony export */ });\n/* harmony import */ var _forbide_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forbide-actions */ \"./src/modules/functions/forbide-actions.js\");\n\r\n\r\nconst stoneAnimation = (firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones) => {\r\n  const animate = new Promise((resolve) => {\r\n    const start = Date.now();\r\n    const timer = setInterval(function () {\r\n      const timePassed = Date.now() - start;\r\n      firstCell.firstChild.style[firstStoneStyle] = 5 + (timePassed / 10) + '%';\r\n      if (secondCell.firstChild)\r\n        secondCell.firstChild.style[secondStoneStyle] = 5 + (timePassed / 10) + '%';\r\n      if (timePassed > 1000) {\r\n        clearInterval(timer);\r\n        resolve();\r\n      }\r\n    }, 20);\r\n  })\r\n    .then((resolve) => {\r\n      if (returnStones) { // Обработчик, если метод проходки не вернул совпадений (returnStones = true)\r\n        const start = Date.now();\r\n        const timer = setInterval(function () {\r\n          const timePassed = Date.now() - start;\r\n          firstCell.firstChild.style[firstStoneStyle] = 105 - (timePassed / 10) + '%';\r\n          secondCell.firstChild.style[secondStoneStyle] = 105 - (timePassed / 10) + '%';\r\n          if (timePassed > 1000) {\r\n            clearInterval(timer);\r\n            firstCell.firstChild.style = '';\r\n            secondCell.firstChild.style = '';\r\n            (0,_forbide_actions__WEBPACK_IMPORTED_MODULE_0__.forbideActions)();\r\n          }\r\n        }, 20);\r\n      } else {\r\n        if (secondCell.firstChild) {\r\n          secondCell.append(firstCell.firstChild);\r\n          firstCell.append(secondCell.firstChild);\r\n          firstCell.firstChild.style = '';\r\n          secondCell.firstChild.style = '';\r\n        }\r\n        else {\r\n          secondCell.append(firstCell.firstChild);\r\n          secondCell.firstChild.style = '';\r\n        }\r\n        (0,_forbide_actions__WEBPACK_IMPORTED_MODULE_0__.forbideActions)()\r\n      }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/animation/stone-animation.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findCell\": () => /* binding */ findCell\n/* harmony export */ });\nconst findCell = (cordX, cordY) => {\r\n  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));\r\n  return cellList.find(element => (element.getAttribute('x') === cordX && element.getAttribute('y') === cordY));\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/find-cell.js?");

/***/ }),

/***/ "./src/modules/functions/forbide-actions.js":
/*!**************************************************!*\
  !*** ./src/modules/functions/forbide-actions.js ***!
  \**************************************************/
/*! namespace exports */
/*! export forbideActions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forbideActions\": () => /* binding */ forbideActions\n/* harmony export */ });\nconst forbideActions = () => {\r\n  const playField = document.getElementsByClassName('play-field')[0];\r\n  if (playField.style.pointerEvents === '') {\r\n    playField.style.pointerEvents = 'none';\r\n  } else {\r\n    playField.style.pointerEvents = '';\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/forbide-actions.js?");

/***/ }),

/***/ "./src/modules/functions/init/create-cell.js":
/*!***************************************************!*\
  !*** ./src/modules/functions/init/create-cell.js ***!
  \***************************************************/
/*! namespace exports */
/*! export createCell [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCell\": () => /* binding */ createCell\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\nconst createCell = () => {\r\n  const cellWidth = (100 / _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth) + '%';\r\n  const cell = document.createElement('div');\r\n  cell.classList.add('play-field__cell');\r\n  cell.style.width = cellWidth;\r\n  return cell;\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/create-cell.js?");

/***/ }),

/***/ "./src/modules/functions/init/init-cells.js":
/*!**************************************************!*\
  !*** ./src/modules/functions/init/init-cells.js ***!
  \**************************************************/
/*! namespace exports */
/*! export initCells [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initCells\": () => /* binding */ initCells\n/* harmony export */ });\n/* harmony import */ var _create_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cell */ \"./src/modules/functions/init/create-cell.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\n\r\nconst initCells = () => {\r\n  let rowIndex = 1;\r\n  let columnIndex = 1;\r\n  for (let i = 0; i < _const_const__WEBPACK_IMPORTED_MODULE_1__.fieldWidth * _const_const__WEBPACK_IMPORTED_MODULE_1__.fieldHeight; i++) {\r\n    const cell = (0,_create_cell__WEBPACK_IMPORTED_MODULE_0__.createCell)();\r\n    cell.setAttribute('x', rowIndex);\r\n    cell.setAttribute('y', columnIndex);\r\n    _const_const__WEBPACK_IMPORTED_MODULE_1__.playField.append(cell);\r\n    if (rowIndex === _const_const__WEBPACK_IMPORTED_MODULE_1__.fieldWidth) {\r\n      rowIndex = 1;\r\n      columnIndex++;\r\n    } else {\r\n      rowIndex++;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-cells.js?");

/***/ }),

/***/ "./src/modules/functions/init/init-field-size.js":
/*!*******************************************************!*\
  !*** ./src/modules/functions/init/init-field-size.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export initFieldSize [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFieldSize\": () => /* binding */ initFieldSize\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\nconst initFieldSize = () => {\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.playField.style.flexBasis = (_const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth * 100) + 'px';\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.playField.style.maxHeight = (_const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight * 100) + 'px';\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-field-size.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initStones\": () => /* binding */ initStones\n/* harmony export */ });\n/* harmony import */ var _classes_stone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/stone */ \"./src/modules/classes/stone.js\");\n/* harmony import */ var _stone_functions_move_stones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stone-functions/move-stones */ \"./src/modules/functions/stone-functions/move-stones.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\n\r\n\r\nconst initStones = () => {\r\n  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));\r\n  if (_const_const__WEBPACK_IMPORTED_MODULE_2__.fieldStorage.fieldStorage.length) {\r\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.fieldStorage.fieldStorage.length = 0;\r\n    cellList.forEach(cell => cell.removeChild(cell.firstChild));\r\n  }\r\n  cellList.forEach(cell => {\r\n    const stoneData = new _classes_stone__WEBPACK_IMPORTED_MODULE_0__.Stone(cell.getAttribute('x'), cell.getAttribute('y'));\r\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.fieldStorage.addStone(stoneData);\r\n    const stone = document.createElement('div');\r\n    stone.classList.add('stone', 'stone_color_' + stoneData.type);\r\n    cell.append(stone);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-stones.js?");

/***/ }),

/***/ "./src/modules/functions/stone-functions/is-swappable.js":
/*!***************************************************************!*\
  !*** ./src/modules/functions/stone-functions/is-swappable.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export isSwappable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isSwappable\": () => /* binding */ isSwappable\n/* harmony export */ });\nconst isSwappable = (firstStone, secondStone) => {\r\n  if (firstStone.cordX === secondStone.cordX) {\r\n    return (Math.abs(firstStone.cordY - secondStone.cordY) === 1);\r\n  } else if (firstStone.cordY === secondStone.cordY) {\r\n    return (Math.abs(firstStone.cordX - secondStone.cordX) === 1);\r\n  } else {\r\n    return false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/is-swappable.js?");

/***/ }),

/***/ "./src/modules/functions/stone-functions/move-stones.js":
/*!**************************************************************!*\
  !*** ./src/modules/functions/stone-functions/move-stones.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export moveStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveStones\": () => /* binding */ moveStones\n/* harmony export */ });\n/* harmony import */ var _is_swappable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-swappable */ \"./src/modules/functions/stone-functions/is-swappable.js\");\n/* harmony import */ var _reset_stones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-stones */ \"./src/modules/functions/stone-functions/reset-stones.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _swap_stones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swap-stones */ \"./src/modules/functions/stone-functions/swap-stones.js\");\n/* harmony import */ var _forbide_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forbide-actions */ \"./src/modules/functions/forbide-actions.js\");\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst moveStones = (stone) => {\r\n  if (stone.selected && stone === _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone) {\r\n    (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY)\r\n    .firstChild.classList.toggle('stone_selected');\r\n    stone.selected = false;\r\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.isSelectedFlag = false;\r\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone = null;\r\n  } else {\r\n    if (_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.isSelectedFlag) {\r\n      if ((0,_is_swappable__WEBPACK_IMPORTED_MODULE_0__.isSwappable)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone, stone)) {\r\n        (0,_forbide_actions__WEBPACK_IMPORTED_MODULE_4__.forbideActions)();\r\n        (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');\r\n        (0,_swap_stones__WEBPACK_IMPORTED_MODULE_3__.swapStones)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone, stone);\r\n        (0,_reset_stones__WEBPACK_IMPORTED_MODULE_1__.resetStones)(stone);\r\n      } else {\r\n        (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');\r\n        (0,_reset_stones__WEBPACK_IMPORTED_MODULE_1__.resetStones)(stone);\r\n      }\r\n    } else {\r\n      stone.selected = true;\r\n      _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.isSelectedFlag = true;\r\n      _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone = stone;\r\n      (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY)\r\n      .firstChild.classList.toggle('stone_selected');\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/move-stones.js?");

/***/ }),

/***/ "./src/modules/functions/stone-functions/reset-stones.js":
/*!***************************************************************!*\
  !*** ./src/modules/functions/stone-functions/reset-stones.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export resetStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetStones\": () => /* binding */ resetStones\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n\r\n\r\n\r\nconst resetStones = (stone) => {\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone.selected = false;\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone = undefined;\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.isSelectedFlag = false;\r\n  stone.selected = false;\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/reset-stones.js?");

/***/ }),

/***/ "./src/modules/functions/stone-functions/swap-stones.js":
/*!**************************************************************!*\
  !*** ./src/modules/functions/stone-functions/swap-stones.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export swapStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"swapStones\": () => /* binding */ swapStones\n/* harmony export */ });\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n/* harmony import */ var _animation_animation_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation/animation-init */ \"./src/modules/functions/animation/animation-init.js\");\n\r\n\r\n\r\nconst swapStones = (firstStone, secondStone) => {\r\n  const firstCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_0__.findCell)(firstStone.cordX, firstStone.cordY);\r\n  const secondCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_0__.findCell)(secondStone.cordX, secondStone.cordY);\r\n  const swap = [firstStone.cordX, firstStone.cordY];\r\n  firstStone.cordX = secondStone.cordX;\r\n  firstStone.cordY = secondStone.cordY;\r\n  secondStone.cordX = swap[0];\r\n  secondStone.cordY = swap[1];\r\n  const returnStones = false; // Нужно ли возвращать камни на место (появится после разработки обработчика)\r\n  if (returnStones) {\r\n    (0,_animation_animation_init__WEBPACK_IMPORTED_MODULE_1__.animationInit)(firstCell, secondCell, returnStones);\r\n    firstStone.cordX = secondStone.cordX;\r\n    firstStone.cordY = secondStone.cordY;\r\n    secondStone.cordX = swap[0];\r\n    secondStone.cordY = swap[1];\r\n  } else {\r\n    (0,_animation_animation_init__WEBPACK_IMPORTED_MODULE_1__.animationInit)(firstCell, secondCell, returnStones);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/swap-stones.js?");

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
/******/ 	__webpack_require__("./src/init.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;