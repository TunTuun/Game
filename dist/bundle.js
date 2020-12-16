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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_init_init_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions/init/init-field */ \"./src/modules/functions/init/init-field.js\");\n/* harmony import */ var _modules_functions_init_init_cells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions/init/init-cells */ \"./src/modules/functions/init/init-cells.js\");\n/* harmony import */ var _modules_functions_init_init_stones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/functions/init/init-stones */ \"./src/modules/functions/init/init-stones.js\");\n/* harmony import */ var _modules_functions_conjuction_check_conjuctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/functions/conjuction/check-conjuctions */ \"./src/modules/functions/conjuction/check-conjuctions.js\");\n/* harmony import */ var _modules_functions_lock_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/functions/lock-field */ \"./src/modules/functions/lock-field.js\");\n/* harmony import */ var _modules_functions_unlock_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/functions/unlock-field */ \"./src/modules/functions/unlock-field.js\");\n\n\n\n\n\n\n\n(0,_modules_functions_init_init_field__WEBPACK_IMPORTED_MODULE_0__.initField)();\n(0,_modules_functions_init_init_cells__WEBPACK_IMPORTED_MODULE_1__.initCells)();\n(0,_modules_functions_lock_field__WEBPACK_IMPORTED_MODULE_4__.lockField)();\n(0,_modules_functions_init_init_stones__WEBPACK_IMPORTED_MODULE_2__.initStones)();\n(0,_modules_functions_unlock_field__WEBPACK_IMPORTED_MODULE_5__.unlockField)();\n(0,_modules_functions_conjuction_check_conjuctions__WEBPACK_IMPORTED_MODULE_3__.checkConjuctions)(true);\n\n\n//# sourceURL=webpack://game/./src/init.js?");

/***/ }),

/***/ "./src/modules/classes/Stone.js":
/*!**************************************!*\
  !*** ./src/modules/classes/Stone.js ***!
  \**************************************/
/*! namespace exports */
/*! export Stone [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stone\": () => /* binding */ Stone\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/modules/const/const.js\");\n\n\nclass Stone {\n  constructor(cordX, cordY) {\n    this.cordX = cordX;\n    this.cordY = cordY;\n    this.type = this.randomiseType();\n    this.selected = false;\n  }\n  randomiseType() {\n    const type = Math.floor(1 + Math.random() * (_const_const__WEBPACK_IMPORTED_MODULE_0__.typeAmmount));\n    if (_const_const__WEBPACK_IMPORTED_MODULE_0__.stoneColors.length < (_const_const__WEBPACK_IMPORTED_MODULE_0__.typeAmmount - 1)) {\n      return 'Undefined type of stone';\n    } else {\n      return _const_const__WEBPACK_IMPORTED_MODULE_0__.stoneColors[type - 1];\n    }\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/classes/Stone.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConjuctionStack\": () => /* binding */ ConjuctionStack\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/modules/const/const.js\");\n\n\nclass ConjuctionStack {\n  constructor(fieldWidth, fieldHeight) {\n    this.columnAmmount = fieldWidth;\n    this.rowAmmount = fieldHeight;\n    this.storage = [];\n  }\n  addConjuction(conjuction) {\n    this.storage.push(conjuction);\n  }\n  resetStorage() {\n    this.storage.length = 0;\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/classes/conjuction-stack.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Conjuction\": () => /* binding */ Conjuction\n/* harmony export */ });\nclass Conjuction {\n  constructor(stoneType, lineSize, cords, direction) {\n    this.type = stoneType;\n    this.size = lineSize;\n    this.cords = cords;\n    this.direction = direction === 'horizontal' ?  'horizontal' : 'vertical';\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/classes/conjuction.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Field\": () => /* binding */ Field\n/* harmony export */ });\nclass Field {\n  constructor(fieldWidth, fieldHeight) {\n    this.width = fieldWidth;\n    this.height = fieldHeight;\n    this.storage = [];\n  }\n  addStone(stone) {\n    this.storage.push(stone);\n  }\n  findStone(cordX, cordY) {\n    return this.storage.find(item => item.cordX == cordX && item.cordY == cordY);\n  }\n  dropStone(cordX, cordY) {\n    this.findStone(cordX, cordY).cordY = String(+(this.findStone(cordX, cordY).cordY) + 1);\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/classes/field-storage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stone\": () => /* binding */ Stone\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ \"./src/modules/const/const.js\");\n\n\nclass Stone {\n  constructor(cordX, cordY) {\n    this.cordX = cordX;\n    this.cordY = cordY;\n    this.type = this.randomiseType();\n    this.selected = false;\n  }\n  randomiseType() {\n    const type = Math.floor(1 + Math.random() * (_const_const__WEBPACK_IMPORTED_MODULE_0__.typeAmmount));\n    if (_const_const__WEBPACK_IMPORTED_MODULE_0__.stoneColors.length < (_const_const__WEBPACK_IMPORTED_MODULE_0__.typeAmmount - 1)) {\n      return 'Undefined type of stone';\n    } else {\n      return _const_const__WEBPACK_IMPORTED_MODULE_0__.stoneColors[type - 1];\n    }\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/classes/stone.js?");

/***/ }),

/***/ "./src/modules/const/const.js":
/*!************************************!*\
  !*** ./src/modules/const/const.js ***!
  \************************************/
/*! namespace exports */
/*! export conjuctionStack [provided] [no usage info] [missing usage info prevents renaming] */
/*! export destroySound [provided] [no usage info] [missing usage info prevents renaming] */
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fieldWidth\": () => /* binding */ fieldWidth,\n/* harmony export */   \"fieldHeight\": () => /* binding */ fieldHeight,\n/* harmony export */   \"playField\": () => /* binding */ playField,\n/* harmony export */   \"typeAmmount\": () => /* binding */ typeAmmount,\n/* harmony export */   \"stoneColors\": () => /* binding */ stoneColors,\n/* harmony export */   \"gameplayHandler\": () => /* binding */ gameplayHandler,\n/* harmony export */   \"field\": () => /* binding */ field,\n/* harmony export */   \"conjuctionStack\": () => /* binding */ conjuctionStack,\n/* harmony export */   \"destroySound\": () => /* binding */ destroySound\n/* harmony export */ });\n/* harmony import */ var _classes_conjuction_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/conjuction-stack */ \"./src/modules/classes/conjuction-stack.js\");\n/* harmony import */ var _classes_field_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/field-storage */ \"./src/modules/classes/field-storage.js\");\n\n\n\nconst fieldWidth = 7;\nconst fieldHeight = 7;\nconst playField = document.querySelector('.play-field');\nconst typeAmmount = 7;\nconst stoneColors = [\n  'crimson',\n  'limegreen',\n  'orange',\n  'turquoise',\n  'blue',\n  'violet',\n  'sienna',\n];\nconst gameplayHandler = {\n  isSelectedFlag: false,\n  selectedStone: null,\n  score: 0,\n};\nconst field = new _classes_field_storage__WEBPACK_IMPORTED_MODULE_1__.Field(fieldWidth, fieldHeight);\nconst conjuctionStack = new _classes_conjuction_stack__WEBPACK_IMPORTED_MODULE_0__.ConjuctionStack(fieldWidth, fieldHeight);\n\nconst destroySound = new Audio();\ndestroySound.src = './audio/pop.mp3';\ndestroySound.volume = 0.25;\n\n\n//# sourceURL=webpack://game/./src/modules/const/const.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animationInit\": () => /* binding */ animationInit\n/* harmony export */ });\n/* harmony import */ var _get_animate_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-animate-direction */ \"./src/modules/functions/animation/get-animate-direction.js\");\n/* harmony import */ var _stone_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stone-animation */ \"./src/modules/functions/animation/stone-animation.js\");\n\n\n\nconst animationInit = (firstCell, secondCell, returnStones) => {\n  const animateDirection = (0,_get_animate_direction__WEBPACK_IMPORTED_MODULE_0__.getAnimateDirection)(firstCell, secondCell);\n  let firstStoneStyle;\n  let secondStoneStyle;\n  switch (animateDirection) {\n    case 'moveRight':\n      firstStoneStyle = 'left';\n      secondStoneStyle = 'right';\n      (0,_stone_animation__WEBPACK_IMPORTED_MODULE_1__.stoneAnimation)(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);\n      break;\n    case 'moveLeft':\n      firstStoneStyle = 'right';\n      secondStoneStyle = 'left';\n      (0,_stone_animation__WEBPACK_IMPORTED_MODULE_1__.stoneAnimation)(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);\n      break;\n    case 'moveBottom':\n      firstStoneStyle = 'top';\n      secondStoneStyle = 'bottom';\n      (0,_stone_animation__WEBPACK_IMPORTED_MODULE_1__.stoneAnimation)(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);\n      break;\n    case 'moveUp':\n      firstStoneStyle = 'bottom';\n      secondStoneStyle = 'top';\n      (0,_stone_animation__WEBPACK_IMPORTED_MODULE_1__.stoneAnimation)(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);\n      break;\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/animation/animation-init.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAnimateDirection\": () => /* binding */ getAnimateDirection\n/* harmony export */ });\nconst getAnimateDirection = (firstCell, secondCell) => {\n  const direction = firstCell.getAttribute('y') === secondCell.getAttribute('y') ? 'horizontal' : 'vertical';\n  if (direction === 'horizontal') {\n    if (firstCell.getAttribute('x') < secondCell.getAttribute('x')) {\n      return 'moveRight';\n    } else {\n      return 'moveLeft';\n    }\n  } else {\n    if (firstCell.getAttribute('y') < secondCell.getAttribute('y')) {\n      return 'moveBottom';\n    } else {\n      return 'moveUp';\n    }\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/animation/get-animate-direction.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stoneAnimation\": () => /* binding */ stoneAnimation\n/* harmony export */ });\n/* harmony import */ var _unlock_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unlock-field */ \"./src/modules/functions/unlock-field.js\");\n/* harmony import */ var _conjuction_destroy_conjuctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conjuction/destroy-conjuctions */ \"./src/modules/functions/conjuction/destroy-conjuctions.js\");\n/* harmony import */ var _stone_functions_drop_stones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stone-functions/drop-stones */ \"./src/modules/functions/stone-functions/drop-stones.js\");\n/* harmony import */ var _conjuction_check_conjuctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conjuction/check-conjuctions */ \"./src/modules/functions/conjuction/check-conjuctions.js\");\n/* harmony import */ var _stone_functions_create_stones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stone-functions/create-stones */ \"./src/modules/functions/stone-functions/create-stones.js\");\n\n\n\n\n\n\nconst stoneAnimation = (firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones) => {\n  const animate = new Promise((resolve) => {\n    const start = Date.now();\n    const timer = setInterval(function () { \n      const timePassed = Date.now() - start;\n      firstCell.firstChild.style[firstStoneStyle] = 5 + (timePassed / 10) + '%';\n      if (secondCell.firstChild)\n        secondCell.firstChild.style[secondStoneStyle] = 5 + (timePassed / 10) + '%';\n      if (timePassed > 1000) {\n        clearInterval(timer);\n        resolve();\n      }\n    }, 20);\n  })\n    .then((resolve) => {\n      if (returnStones) { // Обработчик, если метод проходки не вернул совпадений (returnStones = true)\n        const start = Date.now();\n        const timer = setInterval(function () {\n          const timePassed = Date.now() - start;\n          firstCell.firstChild.style[firstStoneStyle] = 105 - (timePassed / 10) + '%';\n          secondCell.firstChild.style[secondStoneStyle] = 105 - (timePassed / 10) + '%';\n          if (timePassed > 1000) {\n            clearInterval(timer);\n            firstCell.firstChild.style = '';\n            secondCell.firstChild.style = '';\n            (0,_unlock_field__WEBPACK_IMPORTED_MODULE_0__.unlockField)();\n          }\n        }, 20);\n      } else {\n          secondCell.append(firstCell.firstChild);\n          firstCell.append(secondCell.firstChild);\n          firstCell.firstChild.style = '';\n          secondCell.firstChild.style = '';\n        (0,_conjuction_destroy_conjuctions__WEBPACK_IMPORTED_MODULE_1__.destroyConjuctions)();\n        (0,_stone_functions_drop_stones__WEBPACK_IMPORTED_MODULE_2__.dropStones)();\n        (0,_stone_functions_create_stones__WEBPACK_IMPORTED_MODULE_4__.createStones)();\n        (0,_conjuction_check_conjuctions__WEBPACK_IMPORTED_MODULE_3__.checkConjuctions)();\n      }\n    })\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/animation/stone-animation.js?");

/***/ }),

/***/ "./src/modules/functions/conjuction/check-conjuctions.js":
/*!***************************************************************!*\
  !*** ./src/modules/functions/conjuction/check-conjuctions.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export checkConjuctions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkConjuctions\": () => /* binding */ checkConjuctions\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _conjuction_find_conjuctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conjuction/find-conjuctions */ \"./src/modules/functions/conjuction/find-conjuctions.js\");\n/* harmony import */ var _conjuction_destroy_conjuctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conjuction/destroy-conjuctions */ \"./src/modules/functions/conjuction/destroy-conjuctions.js\");\n/* harmony import */ var _stone_functions_drop_stones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stone-functions/drop-stones */ \"./src/modules/functions/stone-functions/drop-stones.js\");\n/* harmony import */ var _unlock_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unlock-field */ \"./src/modules/functions/unlock-field.js\");\n/* harmony import */ var _stone_functions_create_stones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stone-functions/create-stones */ \"./src/modules/functions/stone-functions/create-stones.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst checkConjuctions = (initCheck) => {\r\n  (0,_conjuction_find_conjuctions__WEBPACK_IMPORTED_MODULE_1__.findConjuctions)();\r\n  if (!(_const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack.storage.length === 0)) {\r\n    if (initCheck) { (0,_conjuction_destroy_conjuctions__WEBPACK_IMPORTED_MODULE_2__.destroyConjuctions)(initCheck) }\r\n    else { (0,_conjuction_destroy_conjuctions__WEBPACK_IMPORTED_MODULE_2__.destroyConjuctions)() }\r\n    (0,_stone_functions_drop_stones__WEBPACK_IMPORTED_MODULE_3__.dropStones)();\r\n    (0,_stone_functions_create_stones__WEBPACK_IMPORTED_MODULE_5__.createStones)();\r\n    if (initCheck) { checkConjuctions(true) }\r\n    else { checkConjuctions() }\r\n  } else {\r\n    (0,_unlock_field__WEBPACK_IMPORTED_MODULE_4__.unlockField)();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/conjuction/check-conjuctions.js?");

/***/ }),

/***/ "./src/modules/functions/conjuction/destroy-conjuctions.js":
/*!*****************************************************************!*\
  !*** ./src/modules/functions/conjuction/destroy-conjuctions.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export destroyConjuctions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"destroyConjuctions\": () => /* binding */ destroyConjuctions\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _stone_functions_destroy_stone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stone-functions/destroy-stone */ \"./src/modules/functions/stone-functions/destroy-stone.js\");\n\r\n\r\n\r\n\r\nconst destroyConjuctions = (initCheck) => {\r\n  if (!initCheck) {\r\n    const score = _const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack.storage.reduce((sum, element) => {\r\n      if (element.size === 3) {\r\n        return sum + 30;\r\n      } else {\r\n        return sum + (element.size * 30 + 100);\r\n      }\r\n    }, 0);\r\n    _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.score = _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.score + score;\r\n  }\r\n\r\n  document.querySelector('.score__value').textContent = _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.score; \r\n  if (localStorage.getItem('record') < _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.score) {\r\n    localStorage.setItem('record', _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.score);\r\n    document.querySelector('.record__value').textContent = localStorage.getItem('record');\r\n  }\r\n\r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack.storage.forEach(element => {\r\n    element.cords.forEach(element => {\r\n      (0,_stone_functions_destroy_stone__WEBPACK_IMPORTED_MODULE_1__.destroyStone)(_const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(element[0], element[1]));\r\n    });\r\n    _const_const__WEBPACK_IMPORTED_MODULE_0__.destroySound.play();\r\n  });\r\n  \r\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack.storage.length = 0;\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/conjuction/destroy-conjuctions.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findConjuctions\": () => /* binding */ findConjuctions\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _classes_conjuction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/conjuction */ \"./src/modules/classes/conjuction.js\");\n/* harmony import */ var _conjuction_destroy_conjuctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conjuction/destroy-conjuctions */ \"./src/modules/functions/conjuction/destroy-conjuctions.js\");\n\n\n\n\n\nconst findConjuctions = () => {\n  let columnIndex = 1;\n  let rowIndex = 1;\n  let previousStone;\n  let conjuctionLength = 1;\n  let conjuctionFlag = false;\n\n  const pushConjuction = (mainAxis, crossAxis, axisSize, direction) => {\n    let conjuction;\n    const conjuctionType = previousStone?.type;\n    let cords = [];\n    let endOfLine;\n\n    if (direction === 'horizontal') {\n      if (mainAxis === axisSize && _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(mainAxis, crossAxis).type === previousStone?.type) {\n        endOfLine = 1;\n      } else { endOfLine = 0; }\n    }\n    else {\n      if (mainAxis === axisSize && _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(crossAxis, mainAxis).type === previousStone?.type) {\n        endOfLine = 1;\n      } else { endOfLine = 0; }\n    }\n\n    for (let index = conjuctionLength; index > 0; index--) {\n      if (direction === 'horizontal') {\n        cords.push([(mainAxis - index + endOfLine), crossAxis]);\n      } else {\n        cords.push([crossAxis, (mainAxis - index + endOfLine)]);\n      }\n    }\n\n    if (direction === 'horizontal') {\n      conjuction = new _classes_conjuction__WEBPACK_IMPORTED_MODULE_1__.Conjuction(conjuctionType, conjuctionLength, cords, 'horizontal');\n    } else {\n      conjuction = new _classes_conjuction__WEBPACK_IMPORTED_MODULE_1__.Conjuction(conjuctionType, conjuctionLength, cords, 'vertical');\n    }\n    _const_const__WEBPACK_IMPORTED_MODULE_0__.conjuctionStack.addConjuction(conjuction);\n  }\n\n  const findPrevious = (mainAxis, crossAxis, direction) => {\n    if (mainAxis === 1) {\n      previousStone = null;\n    } else {\n      if (direction === 'horizontal') {\n        previousStone = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(mainAxis - 1, crossAxis);\n      }\n      else {\n        previousStone = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(crossAxis, mainAxis - 1);\n      }\n    }\n  }\n\n  const equalToPrevious = (mainAxis, crossAxis, direction) => {\n    let currentStone;\n    direction === 'horizontal' ? currentStone = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(mainAxis, crossAxis) : currentStone = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(crossAxis, mainAxis);\n    if (currentStone.type === previousStone?.type) {\n      conjuctionLength++;\n    } else {\n      if (conjuctionFlag) {\n        if (direction === 'horizontal') {\n          pushConjuction(columnIndex, rowIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth, direction);\n        } else {\n          pushConjuction(rowIndex, columnIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight, direction);\n        }\n      }\n      conjuctionFlag = false;\n      conjuctionLength = 1;\n    }\n  }\n\n  const conjuctionCheck = () => {\n    if (conjuctionLength >= 3) {\n      conjuctionFlag = true;\n    } else {\n      conjuctionFlag = false;\n    }\n  }\n\n  const endOfLineCheck = (mainAxis, axisSize, direction) => {\n    if (mainAxis === axisSize) {\n      if (conjuctionFlag) {\n        if (direction === 'horizontal') {\n          pushConjuction(columnIndex, rowIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth, direction);\n        } else {\n          pushConjuction(rowIndex, columnIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight, direction);\n        }\n        conjuctionFlag = false;\n      }\n      if (direction === 'horizontal') {\n        columnIndex = 1;\n        rowIndex++;\n      } else {\n        rowIndex = 1;\n        columnIndex++;\n      }\n    }\n    else {\n      if (direction === 'horizontal') {\n        columnIndex++;\n      } else {\n        rowIndex++;\n      }\n    }\n  }\n\n  const resetVariables = () => {\n    columnIndex = 1;\n    rowIndex = 1;\n    previousStone;\n    conjuctionLength = 1;\n    conjuctionFlag = false;\n  }\n\n  const checkStone = (direction) => {\n    if (direction === 'horizontal') {\n      findPrevious(columnIndex, rowIndex, direction);\n      equalToPrevious(columnIndex, rowIndex, direction);\n      conjuctionCheck();\n      endOfLineCheck(columnIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth, direction);\n    } else {\n      findPrevious(rowIndex, columnIndex, direction);\n      equalToPrevious(rowIndex, columnIndex, direction);\n      conjuctionCheck();\n      endOfLineCheck(rowIndex, _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight, direction);\n    }\n  }\n\n  while (true) {\n    if (rowIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight && columnIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth) {\n      checkStone('horizontal');\n      break;\n    }\n    checkStone('horizontal');\n  }\n\n  resetVariables();\n\n  while (true) {\n    if (rowIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight && columnIndex === _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth) {\n      checkStone('vertical');\n      break;\n    }\n    checkStone('vertical');\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/conjuction/find-conjuctions.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findCell\": () => /* binding */ findCell\n/* harmony export */ });\nconst findCell = (cordX, cordY) => {\n  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));\n  return cellList.find(element => (element.getAttribute('x') === cordX && element.getAttribute('y') === cordY));\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/find-cell.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCell\": () => /* binding */ createCell\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\n\nconst createCell = () => {\n  const cellWidth = (100 / _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth) + '%';\n  const cell = document.createElement('div');\n  cell.classList.add('play-field__cell');\n  cell.style.width = cellWidth;\n  return cell;\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/create-cell.js?");

/***/ }),

/***/ "./src/modules/functions/init/init-audio.js":
/*!**************************************************!*\
  !*** ./src/modules/functions/init/init-audio.js ***!
  \**************************************************/
/*! namespace exports */
/*! export initAudio [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initAudio\": () => /* binding */ initAudio\n/* harmony export */ });\nconst initAudio = () => {\r\n  const rand = 0.5 + Math.random() * 3;\r\n  const backgroundMusic = Math.round(rand);\r\n  const audio = new Audio();\r\n  audio.src = './audio/background' + backgroundMusic + '.mp3';\r\n  audio.volume = 0.1;\r\n  audio.loop = true;\r\n  audio.play();\r\n}\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-audio.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initCells\": () => /* binding */ initCells\n/* harmony export */ });\n/* harmony import */ var _create_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-cell */ \"./src/modules/functions/init/create-cell.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\n\n\nconst initCells = () => {\n  let rowIndex = 1;\n  let columnIndex = 1;\n  for (let i = 0; i < _const_const__WEBPACK_IMPORTED_MODULE_1__.fieldWidth * _const_const__WEBPACK_IMPORTED_MODULE_1__.fieldHeight; i++) {\n    const cell = (0,_create_cell__WEBPACK_IMPORTED_MODULE_0__.createCell)();\n    cell.setAttribute('x', rowIndex);\n    cell.setAttribute('y', columnIndex);\n    _const_const__WEBPACK_IMPORTED_MODULE_1__.playField.append(cell);\n    if (rowIndex === _const_const__WEBPACK_IMPORTED_MODULE_1__.fieldWidth) {\n      rowIndex = 1;\n      columnIndex++;\n    } else {\n      rowIndex++;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-cells.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initField\": () => /* binding */ initField\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _stone_functions_select_stone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stone-functions/select-stone */ \"./src/modules/functions/stone-functions/select-stone.js\");\n/* harmony import */ var _reset_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-field */ \"./src/modules/functions/init/reset-field.js\");\n/* harmony import */ var _init_audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init-audio */ \"./src/modules/functions/init/init-audio.js\");\n\n\n\n\n\nconst initField = () => {\n  document.querySelector('.game-wrapper').style.width = (_const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth * 100) + 4 + 'px';\n  document.querySelector('.reset').addEventListener('click', (event) => (0,_reset_field__WEBPACK_IMPORTED_MODULE_2__.resetField)());\n  document.querySelector('.record__value').textContent = localStorage.getItem('record');\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.playField.style.width = (_const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth * 100) + 'px';\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.playField.style.height = (_const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight * 100) + 'px';\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.playField.addEventListener('click', (event) => {\n    if (event.target.classList.contains('stone')) {\n      const stoneData = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(event.target.parentNode.getAttribute('x'), event.target.parentNode.getAttribute('y'));\n      (0,_stone_functions_select_stone__WEBPACK_IMPORTED_MODULE_1__.selectStone)(stoneData);\n    }\n  });\n  \n  document.querySelector('.game-wrapper').addEventListener('click', (event) => {\n    (0,_init_audio__WEBPACK_IMPORTED_MODULE_3__.initAudio)();\n  }, { once: true });\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-field.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initStones\": () => /* binding */ initStones\n/* harmony export */ });\n/* harmony import */ var _classes_stone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/stone */ \"./src/modules/classes/stone.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\n\n\nconst initStones = () => {\n  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));\n  if (_const_const__WEBPACK_IMPORTED_MODULE_1__.field.storage.length) {\n    _const_const__WEBPACK_IMPORTED_MODULE_1__.field.storage.length = 0;\n    cellList.forEach(cell => cell.removeChild(cell.firstChild));\n  }\n  cellList.forEach(cell => {\n    const stoneData = new _classes_stone__WEBPACK_IMPORTED_MODULE_0__.Stone(cell.getAttribute('x'), cell.getAttribute('y'));\n    _const_const__WEBPACK_IMPORTED_MODULE_1__.field.addStone(stoneData);\n    const stone = document.createElement('div');\n    stone.classList.add('stone', 'stone_color_' + stoneData.type);\n    cell.append(stone);\n  });\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/init-stones.js?");

/***/ }),

/***/ "./src/modules/functions/init/reset-field.js":
/*!***************************************************!*\
  !*** ./src/modules/functions/init/reset-field.js ***!
  \***************************************************/
/*! namespace exports */
/*! export resetField [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetField\": () => /* binding */ resetField\n/* harmony export */ });\n/* harmony import */ var _init_init_stones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init/init-stones */ \"./src/modules/functions/init/init-stones.js\");\n/* harmony import */ var _conjuction_check_conjuctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conjuction/check-conjuctions */ \"./src/modules/functions/conjuction/check-conjuctions.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\r\n\r\n\r\n\r\nconst resetField = () => {\r\n  _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.score = 0;\r\n  (0,_init_init_stones__WEBPACK_IMPORTED_MODULE_0__.initStones)()\r\n  ;(0,_conjuction_check_conjuctions__WEBPACK_IMPORTED_MODULE_1__.checkConjuctions)(true);\r\n  document.querySelector('.score__value').textContent = _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.score;\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/init/reset-field.js?");

/***/ }),

/***/ "./src/modules/functions/lock-field.js":
/*!*********************************************!*\
  !*** ./src/modules/functions/lock-field.js ***!
  \*********************************************/
/*! namespace exports */
/*! export lockField [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lockField\": () => /* binding */ lockField\n/* harmony export */ });\nconst lockField = () => {\n  const playField = document.querySelector('.play-field');\n  if (playField.style.pointerEvents === '') {\n    playField.style.pointerEvents = 'none';\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/lock-field.js?");

/***/ }),

/***/ "./src/modules/functions/stone-functions/create-stones.js":
/*!****************************************************************!*\
  !*** ./src/modules/functions/stone-functions/create-stones.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export createStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createStones\": () => /* binding */ createStones\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n/* harmony import */ var _classes_Stone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/Stone */ \"./src/modules/classes/Stone.js\");\n\r\n\r\n\r\n\r\nconst createStones = () => {\r\n  for (let y = 1; y <= _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight; y++) {\r\n    for (let x = 1; x <= _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth; x++) {\r\n      if (!(_const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(String(x), String(y)))) {\r\n        const stone = new _classes_Stone__WEBPACK_IMPORTED_MODULE_2__.Stone(String(x), String(y));\r\n        _const_const__WEBPACK_IMPORTED_MODULE_0__.field.addStone(stone);\r\n        const stoneCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_1__.findCell)(String(x), String(y));\r\n        const stoneOnField = document.createElement('div');\r\n        stoneOnField.classList.add('stone', 'stone_color_' + stone.type);\r\n        stoneCell.append(stoneOnField);\r\n        // const start = Date.now();\r\n        // stoneCell.firstChild.style.width = '0%';\r\n        // const timer = setInterval(function () {\r\n        //   const timePassed = Date.now() - start;\r\n        //   if (parseInt(stoneCell.firstChild.style.width, 10) < 90) {\r\n        //     stoneCell.firstChild.style.width = (timePassed / 5.555) + '%';\r\n        //     stoneCell.firstChild.style.height = (timePassed / 5.555) + '%';\r\n        //   }\r\n        //   if (timePassed > 500) {\r\n        //     clearInterval(timer);\r\n        //   }\r\n        // }, 20);\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/create-stones.js?");

/***/ }),

/***/ "./src/modules/functions/stone-functions/destroy-stone.js":
/*!****************************************************************!*\
  !*** ./src/modules/functions/stone-functions/destroy-stone.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export destroyStone [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"destroyStone\": () => /* binding */ destroyStone\n/* harmony export */ });\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\n\n\nconst destroyStone = (stone) => {\n  if (stone) {\n    const cell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_0__.findCell)(stone.cordX, stone.cordY);\n    const destroyIndex = _const_const__WEBPACK_IMPORTED_MODULE_1__.field.storage.findIndex(item => item === stone);\n    _const_const__WEBPACK_IMPORTED_MODULE_1__.field.storage.splice(destroyIndex, 1);\n    cell.firstChild.remove();\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/destroy-stone.js?");

/***/ }),

/***/ "./src/modules/functions/stone-functions/drop-stones.js":
/*!**************************************************************!*\
  !*** ./src/modules/functions/stone-functions/drop-stones.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export dropStones [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropStones\": () => /* binding */ dropStones\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n\n\n\nconst dropStones = () => {\n  const dropAnimation = (currentCell) => {\n    return new Promise((resolve) => {\n      const start = Date.now();\n      const timer = setInterval(function () {\n        const timePassed = Date.now() - start;\n        currentCell.firstChild.style.top = 5 % + 16.2 % + 'px';\n        if (timePassed > 300) {\n          clearInterval(timer);\n          resolve();\n        }\n      }, 10);\n    })\n  }\n  const checkColumn = (columnIndex, rowIndex) => {\n    while (rowIndex >= 1) {\n      if (_const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(columnIndex, rowIndex)) {\n        if (_const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(columnIndex, rowIndex + 1)) {\n          rowIndex--;\n        } else {\n          const currentStone = _const_const__WEBPACK_IMPORTED_MODULE_0__.field.findStone(columnIndex, rowIndex);\n          const currentCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_1__.findCell)(currentStone.cordX, currentStone.cordY);\n          const dropCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_1__.findCell)(currentStone.cordX, String(+currentStone.cordY + 1));\n          dropAnimation(currentCell);\n          dropCell.append(currentCell.firstChild);\n          currentStone.cordY = String(+currentStone.cordY + 1);\n          rowIndex = _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight - 1;\n        }\n      } else {\n        rowIndex--;\n      }\n    }\n  }\n  const rowIndex = _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldHeight - 1;\n  for (let columnIndex = 1; columnIndex <= _const_const__WEBPACK_IMPORTED_MODULE_0__.fieldWidth; columnIndex++) {\n    checkColumn(columnIndex, rowIndex);\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/drop-stones.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstStoneSelector\": () => /* binding */ firstStoneSelector\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n\n\n\nconst firstStoneSelector = (stone) => {\n  stone.selected = true;\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.isSelectedFlag = true;\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone = stone;\n  (0,_find_cell__WEBPACK_IMPORTED_MODULE_1__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone.cordY)\n    .firstChild.classList.toggle('stone_selected');\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/first-stone-selector.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isSwappable\": () => /* binding */ isSwappable\n/* harmony export */ });\nconst isSwappable = (firstStone, secondStone) => {\n  if (firstStone.cordX === secondStone.cordX) {\n    return (Math.abs(firstStone.cordY - secondStone.cordY) === 1);\n  } else if (firstStone.cordY === secondStone.cordY) {\n    return (Math.abs(firstStone.cordX - secondStone.cordX) === 1);\n  } else {\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/is-swappable.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetStones\": () => /* binding */ resetStones\n/* harmony export */ });\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n\n\nconst resetStones = (stone) => {\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone.selected = false;\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.selectedStone = undefined;\n  _const_const__WEBPACK_IMPORTED_MODULE_0__.gameplayHandler.isSelectedFlag = false;\n  stone.selected = false;\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/reset-stones.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectStone\": () => /* binding */ selectStone\n/* harmony export */ });\n/* harmony import */ var _is_swappable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-swappable */ \"./src/modules/functions/stone-functions/is-swappable.js\");\n/* harmony import */ var _reset_stones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-stones */ \"./src/modules/functions/stone-functions/reset-stones.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _swap_stones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swap-stones */ \"./src/modules/functions/stone-functions/swap-stones.js\");\n/* harmony import */ var _lock_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lock-field */ \"./src/modules/functions/lock-field.js\");\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n/* harmony import */ var _first_stone_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first-stone-selector */ \"./src/modules/functions/stone-functions/first-stone-selector.js\");\n\n\n\n\n\n\n\n\nconst selectStone = (stone) => {\n  if (stone.selected && stone === _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone) {\n    (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY)\n      .firstChild.classList.toggle('stone_selected');\n    stone.selected = false;\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.isSelectedFlag = false;\n    _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone = null;\n  } else {\n    if (_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.isSelectedFlag) {\n      if ((0,_is_swappable__WEBPACK_IMPORTED_MODULE_0__.isSwappable)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone, stone)) {\n        (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');\n        (0,_swap_stones__WEBPACK_IMPORTED_MODULE_3__.swapStones)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone, stone);\n        (0,_reset_stones__WEBPACK_IMPORTED_MODULE_1__.resetStones)(stone);\n      } else {\n        (0,_find_cell__WEBPACK_IMPORTED_MODULE_5__.findCell)(_const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordX, _const_const__WEBPACK_IMPORTED_MODULE_2__.gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');\n        (0,_reset_stones__WEBPACK_IMPORTED_MODULE_1__.resetStones)(stone);\n        (0,_first_stone_selector__WEBPACK_IMPORTED_MODULE_6__.firstStoneSelector)(stone);\n      }\n    } else {\n      (0,_first_stone_selector__WEBPACK_IMPORTED_MODULE_6__.firstStoneSelector)(stone);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/select-stone.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"swapStones\": () => /* binding */ swapStones\n/* harmony export */ });\n/* harmony import */ var _find_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../find-cell */ \"./src/modules/functions/find-cell.js\");\n/* harmony import */ var _animation_animation_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation/animation-init */ \"./src/modules/functions/animation/animation-init.js\");\n/* harmony import */ var _conjuction_find_conjuctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conjuction/find-conjuctions */ \"./src/modules/functions/conjuction/find-conjuctions.js\");\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../const/const */ \"./src/modules/const/const.js\");\n/* harmony import */ var _lock_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lock-field */ \"./src/modules/functions/lock-field.js\");\n\n\n\n\n\n\nconst swapStones = (firstStone, secondStone) => {\n  (0,_lock_field__WEBPACK_IMPORTED_MODULE_4__.lockField)();\n  const firstCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_0__.findCell)(firstStone.cordX, firstStone.cordY);\n  const secondCell = (0,_find_cell__WEBPACK_IMPORTED_MODULE_0__.findCell)(secondStone.cordX, secondStone.cordY);\n\n  const swap = [firstStone.cordX, firstStone.cordY, secondStone.cordX, secondStone.cordY];\n  firstStone.cordX = swap[2];\n  firstStone.cordY = swap[3];\n  secondStone.cordX = swap[0];\n  secondStone.cordY = swap[1];\n\n  (0,_conjuction_find_conjuctions__WEBPACK_IMPORTED_MODULE_2__.findConjuctions)();\n  const returnStones = _const_const__WEBPACK_IMPORTED_MODULE_3__.conjuctionStack.storage.length === 0 ? true : false;\n  if (returnStones) {\n    (0,_animation_animation_init__WEBPACK_IMPORTED_MODULE_1__.animationInit)(firstCell, secondCell, returnStones);\n    firstStone.cordX = swap[0];\n    firstStone.cordY = swap[1];\n    secondStone.cordX = swap[2];\n    secondStone.cordY = swap[3];\n  } else {\n    (0,_animation_animation_init__WEBPACK_IMPORTED_MODULE_1__.animationInit)(firstCell, secondCell, returnStones);\n  }\n}\n\n\n//# sourceURL=webpack://game/./src/modules/functions/stone-functions/swap-stones.js?");

/***/ }),

/***/ "./src/modules/functions/unlock-field.js":
/*!***********************************************!*\
  !*** ./src/modules/functions/unlock-field.js ***!
  \***********************************************/
/*! namespace exports */
/*! export unlockField [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unlockField\": () => /* binding */ unlockField\n/* harmony export */ });\nconst unlockField = () => {\r\n  const playField = document.querySelector('.play-field');\r\n  if (playField.style.pointerEvents === 'none') {\r\n    playField.style.pointerEvents = '';\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/modules/functions/unlock-field.js?");

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