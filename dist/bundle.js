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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_init_init_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions/init/init-field */ \"./src/modules/functions/init/init-field.js\");\n/* harmony import */ var _modules_functions_init_init_cells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions/init/init-cells */ \"./src/modules/functions/init/init-cells.js\");\n/* harmony import */ var _modules_functions_init_init_stones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/functions/init/init-stones */ \"./src/modules/functions/init/init-stones.js\");\n/* harmony import */ var _modules_functions_conjuction_find_conjuctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/functions/conjuction/find-conjuctions */ \"./src/modules/functions/conjuction/find-conjuctions.js\");\n/* harmony import */ var _modules_functions_conjuction_find_conjuctions_vertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/functions/conjuction/find-conjuctions-vertical */ \"./src/modules/functions/conjuction/find-conjuctions-vertical.js\");\n\r\n\r\n\r\n\r\n //\r\n //\r\n\r\n(0,_modules_functions_init_init_field__WEBPACK_IMPORTED_MODULE_0__.initField)();\r\n(0,_modules_functions_init_init_cells__WEBPACK_IMPORTED_MODULE_1__.initCells)(); // Инициализация игровых ячеек\r\n(0,_modules_functions_init_init_stones__WEBPACK_IMPORTED_MODULE_2__.initStones)(); // Заполнение / Перезаполнение поля и массива камнями\r\n\r\n// findConjuctions();\n\n//# sourceURL=webpack://game/./src/init.js?");

/***/ }),

/***/ "./src/modules/classes/conjuction-stack.js":
/*!*************************************************!*\
  !*** ./src/modules/classes/conjuction-stack.js ***!
  \*************************************************/
/*! namespace exports */
/*! export ConjuctionStack [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConjuctionStack\": () => /* binding */ ConjuctionStack\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\nclass ConjuctionStack {\r\n  constructor(fieldWidth, fieldHeight) {\r\n    this.columnAmmount = fieldWidth;\r\n    this.rowAmmount = fieldHeight;\r\n    this.storage = [];\r\n  }\r\n  addConjuction(conjuction) {\r\n    this.storage.push(conjuction);\r\n  }\r\n  resetStorage() {\r\n    this.storage.length = 0;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/classes/conjuction-stack.js?");

/***/ }),

/***/ "./src/modules/classes/conjuction.js":
/*!*******************************************!*\
  !*** ./src/modules/classes/conjuction.js ***!
  \*******************************************/
/*! namespace exports */
/*! export Conjuction [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Conjuction\": () => /* binding */ Conjuction\n/* harmony export */ });\nclass Conjuction {\r\n  constructor(stoneType, lineSize, cords, horizontal) {\r\n    this.type = stoneType;\r\n    this.size = lineSize;\r\n    this.cords = cords;\r\n    horizontal === true ? this.direction = 'horizontal' : this.direction = 'vertical';\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/classes/conjuction.js?");

/***/ }),

/***/ "./src/modules/classes/field-storage.js":
/*!**********************************************!*\
  !*** ./src/modules/classes/field-storage.js ***!
  \**********************************************/
/*! namespace exports */
/*! export Field [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Field\": () => /* binding */ Field\n/* harmony export */ });\nclass Field {\r\n  constructor(fieldWidth, fieldHeight) {\r\n    this.width = fieldWidth;\r\n    this.height = fieldHeight;\r\n    this.storage = [];\r\n  }\r\n  addStone(stone) {\r\n    this.storage.push(stone);\r\n  }\r\n  findStone(cordX, cordY) {\r\n    return this.storage.find(item => item.cordX == cordX && item.cordY == cordY);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/classes/field-storage.js?");

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
/*! export conjuctionStack [provided] [no usage info] [missing usage info prevents renaming] */
/*! export field [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fieldHeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fieldWidth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gameplayHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playField [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stoneColors [provided] [no usage info] [missing usage info prevents renaming] */
/*! export typeAmmount [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fieldWidth\": () => /* binding */ fieldWidth,\n/* harmony export */   \"fieldHeight\": () => /* binding */ fieldHeight,\n/* harmony export */   \"playField\": () => /* binding */ playField,\n/* harmony export */   \"typeAmmount\": () => /* binding */ typeAmmount,\n/* harmony export */   \"stoneColors\": () => /* binding */ stoneColors,\n/* harmony export */   \"gameplayHandler\": () => /* binding */ gameplayHandler,\n/* harmony export */   \"field\": () => /* binding */ field,\n/* harmony export */   \"conjuctionStack\": () => /* binding */ conjuctionStack\n/* harmony export */ });\n/* harmony import */ var _classes_conjuction_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/conjuction-stack */ \"./src/modules/classes/conjuction-stack.js\");\n/* harmony import */ var _classes_field_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/field-storage */ \"./src/modules/classes/field-storage.js\");\n\r\n\r\n\r\n// Размеры поля\r\nconst fieldWidth = 5;\r\nconst fieldHeight = 5;\r\n// Получение игрового поля из документа для инициализации\r\nconst playField = document.querySelector('.play-field');\r\n// Количество типов камней (при изменении нужно добавить соответствующие стили в scss и массив stoneColors)\r\nconst typeAmmount = 3;\r\n// Цвета камней\r\nconst stoneColors = [\r\n  'crimson',\r\n  'limegreen',\r\n  'orange',\r\n  'turquoise',\r\n  'blue',\r\n  'violet',\r\n  'sienna',\r\n];\r\n// Игровой обработчик событий\r\nconst gameplayHandler = {\r\n  isSelectedFlag: false,\r\n  selectedStone: null\r\n};\r\nconst field = new _classes_field_storage__WEBPACK_IMPORTED_MODULE_1__.Field(fieldWidth, fieldHeight);\r\nconst conjuctionStack = new _classes_conjuction_stack__WEBPACK_IMPORTED_MODULE_0__.ConjuctionStack(fieldWidth, fieldHeight);\r\n\n\n//# sourceURL=webpack://game/./src/modules/const/const.js?");

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

/***/ "./src/modules/functions/conjuction/find-conjuctions-vertical.js":
/*!***********************************************************************!*\
  !*** ./src/modules/functions/conjuction/find-conjuctions-vertical.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export findConjuctionsVertical [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findConjuctionsVertical\": () => /* binding */ findConjuctionsVertical\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _classes_conjuction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/conjuction */ \"./src/modules/classes/conjuction.js\");\n\r\n\r\n\r\n\r\nconst findConjuctionsVertical = () => {\r\n  let columnIndex = 1;\r\n  let rowIndex = 1;\r\n  let previousStone;\r\n  let conjuctionLength = 1;\r\n  let conjuctionFlag = false;\r\n\r\n  const pushConjuction = () => {\r\n    const conjuctionType = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(columnIndex, rowIndex - 1)?.type;\r\n    let cords = [];\r\n    let endOfLine;\r\n    if (rowIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight && _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(columnIndex, rowIndex).type === previousStone?.type) {\r\n      endOfLine = 1;\r\n    } else { endOfLine = 0; }\r\n\r\n    for (let index = conjuctionLength; index > 0; index--) {\r\n      cords.push([columnIndex, (rowIndex - index + endOfLine)]);\r\n    }\r\n    const conjuction = new _classes_conjuction__WEBPACK_IMPORTED_MODULE_1__.Conjuction(conjuctionType, conjuctionLength, cords, false);\r\n    _const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack.addConjuction(conjuction);\r\n  }\r\n\r\n  const findPrevious = () => {\r\n    if (rowIndex === 1) {\r\n      previousStone = null;\r\n    } else {\r\n      previousStone = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(columnIndex, rowIndex - 1);\r\n    }\r\n  }\r\n\r\n  const equalToPrevious = () => {\r\n    if (_const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(columnIndex, rowIndex).type === previousStone?.type) {\r\n      conjuctionLength++;\r\n    }\r\n    else {\r\n      if (conjuctionFlag) {\r\n        pushConjuction();\r\n      }\r\n      conjuctionFlag = false;\r\n      conjuctionLength = 1;\r\n    }\r\n  }\r\n\r\n  const conjuctionCheck = () => {\r\n    if (conjuctionLength >= 3) {\r\n      conjuctionFlag = true;\r\n    } else {\r\n      conjuctionFlag = false;\r\n    }\r\n  }\r\n\r\n  const endOfLineCheck = () => {\r\n    if (rowIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight) {\r\n      if (conjuctionFlag) {\r\n        pushConjuction();\r\n        conjuctionFlag = false;\r\n      }\r\n      rowIndex = 1;\r\n      columnIndex++;\r\n    }\r\n    else {\r\n      rowIndex++;\r\n    }\r\n  }\r\n\r\n  const checkStone = (direction) => {\r\n    findPrevious();\r\n    equalToPrevious();\r\n    conjuctionCheck();\r\n    endOfLineCheck();\r\n  }\r\n\r\n  while (true) {\r\n    if (rowIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight && columnIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth) {\r\n      checkStone();\r\n      console.log(_const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack);\r\n      break;\r\n    }\r\n    checkStone();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/conjuction/find-conjuctions-vertical.js?");

/***/ }),

/***/ "./src/modules/functions/conjuction/find-conjuctions.js":
/*!**************************************************************!*\
  !*** ./src/modules/functions/conjuction/find-conjuctions.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export findConjuctions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findConjuctions\": () => /* binding */ findConjuctions\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _classes_conjuction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/conjuction */ \"./src/modules/classes/conjuction.js\");\n\r\n\r\n\r\n\r\nconst findConjuctions = () => {\r\n\r\n  const pushConjuction = (mainAxis, crossAxis, axisSize, direction) => {\r\n    let conjuction;\r\n    const conjuctionType = previousStone?.type;\r\n    let cords = [];\r\n    let endOfLine;\r\n    if (mainAxis === axisSize && _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(columnIndex, rowIndex).type === previousStone?.type) {\r\n      endOfLine = 1;\r\n    } else { endOfLine = 0; }\r\n\r\n    for (let index = conjuctionLength; index > 0; index--) {\r\n      if (direction === 'horizontal') {\r\n        cords.push([(mainAxis - index + endOfLine), crossAxis]);\r\n      } else {\r\n        cords.push([crossAxis, (mainAxis - index + endOfLine)]);\r\n      }\r\n    }\r\n\r\n    if (direction === 'horizontal') {\r\n      conjuction = new _classes_conjuction__WEBPACK_IMPORTED_MODULE_1__.Conjuction(conjuctionType, conjuctionLength, cords, true);\r\n    } else {\r\n      conjuction = new _classes_conjuction__WEBPACK_IMPORTED_MODULE_1__.Conjuction(conjuctionType, conjuctionLength, cords, false);\r\n    }\r\n    _const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack.addConjuction(conjuction);\r\n  }\r\n\r\n  const findPrevious = (mainAxis, crossAxis) => {\r\n    if (mainAxis === 1) {\r\n      previousStone = null;\r\n    } else {\r\n      previousStone = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(mainAxis - 1, crossAxis);\r\n    }\r\n  }\r\n\r\n  const equalToPrevious = (direction) => {\r\n    if (_const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(columnIndex, rowIndex).type === previousStone?.type) {\r\n      conjuctionLength++;\r\n    } else {\r\n      if (conjuctionFlag) {\r\n        if (direction === 'horizontal') {\r\n          pushConjuction(columnIndex, rowIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth, direction);\r\n        } else {\r\n          pushConjuction(rowIndex, columnIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight, direction);\r\n        }\r\n      }\r\n      conjuctionFlag = false;\r\n      conjuctionLength = 1;\r\n    }\r\n  }\r\n\r\n  const conjuctionCheck = () => {\r\n    if (conjuctionLength >= 3) {\r\n      conjuctionFlag = true;\r\n    } else {\r\n      conjuctionFlag = false;\r\n    }\r\n  }\r\n\r\n  const endOfLineCheck = (mainAxis, axisSize, direction) => {\r\n    if (mainAxis === axisSize) {\r\n      if (conjuctionFlag) {\r\n        if (direction === 'horizontal') {\r\n          pushConjuction(columnIndex, rowIndex);\r\n        } else {\r\n          pushConjuction(rowIndex, columnIndex);\r\n        }\r\n        conjuctionFlag = false;\r\n      }\r\n      if (direction === 'horizontal') {\r\n        columnIndex = 1;\r\n        rowIndex++;\r\n      } else {\r\n        rowIndex = 1;\r\n        columnIndex++;\r\n      }\r\n    }\r\n    else {\r\n      if (direction === 'horizontal') {\r\n        columnIndex++;\r\n      } else {\r\n        rowIndex++;\r\n      }\r\n    }\r\n  }\r\n\r\n  const checkStone = (direction) => {\r\n    if (direction === 'horizontal') {\r\n      findPrevious(columnIndex, rowIndex);\r\n      equalToPrevious(direction);\r\n      conjuctionCheck();\r\n      endOfLineCheck(columnIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth, direction);\r\n    } else {\r\n      findPrevious(rowIndex, columnIndex);\r\n      equalToPrevious(direction);\r\n      conjuctionCheck();\r\n      endOfLineCheck(rowIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight, direction);\r\n    }\r\n  }\r\n  \r\n  let columnIndex = 1;\r\n  let rowIndex = 1;\r\n  let previousStone;\r\n  let conjuctionLength = 1;\r\n  let conjuctionFlag = false;\r\n\r\n  while (true) {\r\n    if (rowIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight && columnIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth) {\r\n      checkStone('horizontal');\r\n      console.log(_const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack); //\r\n      break;\r\n    }\r\n    checkStone('horizontal');\r\n  }\r\n\r\n  columnIndex = 1;\r\n  rowIndex = 1;\r\n  previousStone;\r\n  conjuctionLength = 1;\r\n  conjuctionFlag = false;\r\n\r\n  while (true) {\r\n    if (rowIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight && columnIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth) {\r\n      checkStone('vertical');\r\n      console.log(_const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack); //\r\n      break;\r\n    }\r\n    checkStone('vertical');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/conjuction/find-conjuctions.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forbideActions\": () => /* binding */ forbideActions\n/* harmony export */ });\nconst forbideActions = () => {\r\n  const playField = document.querySelector('.play-field');\r\n  if (playField.style.pointerEvents === '') {\r\n    playField.style.pointerEvents = 'none';\r\n  } else {\r\n    playField.style.pointerEvents = '';\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/forbide-actions.js?");

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

/***/ "./src/modules/functions/init/init-field.js":
/*!**************************************************!*\
  !*** ./src/modules/functions/init/init-field.js ***!
  \**************************************************/
/*! namespace exports */
/*! export initField [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initField\": () => /* binding */ initField\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _stone_functions_select_stone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stone-functions/select-stone */ \"./src/modules/functions/stone-functions/select-stone.js\");\n\r\n\r\n\r\nconst initField = () => {\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.playField.style.flexBasis = (_const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth * 100) + 'px';\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.playField.style.maxHeight = (_const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight * 100) + 'px';\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.playField.addEventListener('click', (event) => {\r\n    if (event.target.classList.contains(\"stone\")) {\r\n      const stoneData = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(event.target.parentNode.getAttribute('x'), event.target.parentNode.getAttribute('y'));\r\n      (0,_stone_functions_select_stone__WEBPACK_IMPORTED_MODULE_1__.selectStone)(stoneData);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-field.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initStones\": () => /* binding */ initStones\n/* harmony export */ });\n/* harmony import */ var _classes_stone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/stone */ \"./src/modules/classes/stone.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\n\r\nconst initStones = () => {\r\n  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));\r\n  if (_const_const__WEBPACK_IMPORTED_MODULE_1__.field.storage.length) {\r\n    _const_const__WEBPACK_IMPORTED_MODULE_1__.field.storage.length = 0;\r\n    cellList.forEach(cell => cell.removeChild(cell.firstChild));\r\n  }\r\n  cellList.forEach(cell => {\r\n    const stoneData = new _classes_stone__WEBPACK_IMPORTED_MODULE_0__.Stone(cell.getAttribute('x'), cell.getAttribute('y'));\r\n    _const_const__WEBPACK_IMPORTED_MODULE_1__.field.addStone(stoneData);\r\n    const stone = document.createElement('div');\r\n    stone.classList.add('stone', 'stone_color_' + stoneData.type);\r\n    cell.append(stone);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-stones.js?");

/***/ }),

/***/ "./src/modules/functions/stone-functions/first-stone-selector.js":
/*!***********************************************************************!*\
  !*** ./src/modules/functions/stone-functions/first-stone-selector.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export firstStoneSelector [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstStoneSelector\": () => /* binding */ firstStoneSelector\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n\r\n\r\n\r\nconst firstStoneSelector = (stone) => {\r\n  stone.selected = true;\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.isSelectedFlag = true;\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone = stone;\r\n  (0,_find_cell__WEBPACK_IMPORTED_MODULE_1__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone.cordY)\r\n    .firstChild.classList.toggle('stone_selected');\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/first-stone-selector.js?");

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

/***/ "./src/modules/functions/stone-functions/reset-stones.js":
/*!***************************************************************!*\
  !*** ./src/modules/functions/stone-functions/reset-stones.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export resetStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetStones\": () => /* binding */ resetStones\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\nconst resetStones = (stone) => {\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone.selected = false;\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone = undefined;\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.isSelectedFlag = false;\r\n  stone.selected = false;\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/reset-stones.js?");

/***/ }),

/***/ "./src/modules/functions/stone-functions/select-stone.js":
/*!***************************************************************!*\
  !*** ./src/modules/functions/stone-functions/select-stone.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export selectStone [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectStone\": () => /* binding */ selectStone\n/* harmony export */ });\n/* harmony import */ var _is_swappable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-swappable */ \"./src/modules/functions/stone-functions/is-swappable.js\");\n/* harmony import */ var _reset_stones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-stones */ \"./src/modules/functions/stone-functions/reset-stones.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _swap_stones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swap-stones */ \"./src/modules/functions/stone-functions/swap-stones.js\");\n/* harmony import */ var _forbide_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forbide-actions */ \"./src/modules/functions/forbide-actions.js\");\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n/* harmony import */ var _first_stone_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first-stone-selector */ \"./src/modules/functions/stone-functions/first-stone-selector.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst selectStone = (stone) => {\r\n  if (stone.selected && stone === _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone) {\r\n    (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY)\r\n      .firstChild.classList.toggle('stone_selected');\r\n    stone.selected = false;\r\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.isSelectedFlag = false;\r\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone = null;\r\n  } else {\r\n    if (_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.isSelectedFlag) {\r\n      if ((0,_is_swappable__WEBPACK_IMPORTED_MODULE_0__.isSwappable)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone, stone)) {\r\n        (0,_forbide_actions__WEBPACK_IMPORTED_MODULE_4__.forbideActions)();\r\n        (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');\r\n        (0,_swap_stones__WEBPACK_IMPORTED_MODULE_3__.swapStones)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone, stone);\r\n        (0,_reset_stones__WEBPACK_IMPORTED_MODULE_1__.resetStones)(stone);\r\n      } else {\r\n        (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');\r\n        (0,_reset_stones__WEBPACK_IMPORTED_MODULE_1__.resetStones)(stone);\r\n        (0,_first_stone_selector__WEBPACK_IMPORTED_MODULE_6__.firstStoneSelector)(stone);\r\n      }\r\n    } else {\r\n      (0,_first_stone_selector__WEBPACK_IMPORTED_MODULE_6__.firstStoneSelector)(stone);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/select-stone.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"swapStones\": () => /* binding */ swapStones\n/* harmony export */ });\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n/* harmony import */ var _animation_animation_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation/animation-init */ \"./src/modules/functions/animation/animation-init.js\");\n/* harmony import */ var _conjuction_find_conjuctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conjuction/find-conjuctions */ \"./src/modules/functions/conjuction/find-conjuctions.js\");\n/* harmony import */ var _conjuction_find_conjuctions_vertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conjuction/find-conjuctions-vertical */ \"./src/modules/functions/conjuction/find-conjuctions-vertical.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst swapStones = (firstStone, secondStone) => {\r\n  const firstCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_0__.findCell)(firstStone.cordX, firstStone.cordY);\r\n  const secondCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_0__.findCell)(secondStone.cordX, secondStone.cordY);\r\n\r\n  const swap = [firstStone.cordX, firstStone.cordY];\r\n  firstStone.cordX = secondStone.cordX;\r\n  firstStone.cordY = secondStone.cordY;\r\n  secondStone.cordX = swap[0];\r\n  secondStone.cordY = swap[1];\r\n\r\n  let returnStones = true;\r\n  // findConjuctions();\r\n  // findConjuctionsVertical();\r\n  // if (!conjuctionStack.storage.length === 0) {\r\n  //   console.log('Совпадения найдены!');\r\n  //   returnStones = false;\r\n  // } else {\r\n  //   returnStones = true;\r\n  // }\r\n  \r\n  if (returnStones) {\r\n    (0,_animation_animation_init__WEBPACK_IMPORTED_MODULE_1__.animationInit)(firstCell, secondCell, returnStones);\r\n    firstStone.cordX = secondStone.cordX;\r\n    firstStone.cordY = secondStone.cordY;\r\n    secondStone.cordX = swap[0];\r\n    secondStone.cordY = swap[1];\r\n  } else {\r\n    (0,_animation_animation_init__WEBPACK_IMPORTED_MODULE_1__.animationInit)(firstCell, secondCell, returnStones);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/swap-stones.js?");

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