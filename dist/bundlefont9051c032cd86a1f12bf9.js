/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/global-variables.js":
/*!*****************************************!*\
  !*** ./src/scripts/global-variables.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrowSvgBtn": () => (/* binding */ arrowSvgBtn),
/* harmony export */   "errorSearchMessage": () => (/* binding */ errorSearchMessage),
/* harmony export */   "fontDropdownList": () => (/* binding */ fontDropdownList),
/* harmony export */   "fontDropdownMenu": () => (/* binding */ fontDropdownMenu),
/* harmony export */   "fontPlaceholder": () => (/* binding */ fontPlaceholder),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "mono": () => (/* binding */ mono),
/* harmony export */   "sansSerif": () => (/* binding */ sansSerif),
/* harmony export */   "searchField": () => (/* binding */ searchField),
/* harmony export */   "serif": () => (/* binding */ serif),
/* harmony export */   "soundOutPhonetic": () => (/* binding */ soundOutPhonetic),
/* harmony export */   "vocabWord": () => (/* binding */ vocabWord)
/* harmony export */ });
/*Dropdown List*/
var arrowSvgBtn = document.getElementById("arrow-svg");
var fontDropdownList = document.getElementById("font-dropdown-list");
var fontDropdownMenu = document.getElementById("font-dropdown-menu");

/*Change font name for placeholder*/
var fontPlaceholder = document.getElementById("font-choice-placeholder");
var sansSerif = document.getElementById("sans-serif");
var serif = document.getElementById("serif");
var mono = document.getElementById("mono");

/*Form Input*/
var form = document.getElementById("form");
var searchField = document.getElementById("search-field");
var errorSearchMessage = document.querySelector("#search-field + span#error");

/*API*/
var vocabWord = document.getElementById('vocabulary-word');
var soundOutPhonetic = document.getElementById('phonetic');













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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/scripts/switch-font-style.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variables */ "./src/scripts/global-variables.js");











/* FONT DROPDOWN MENU*/
/*Show font list on hover-mouseover*/
function displayFontList() {
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontDropdownList.style.display = "block";
}

/*Hide font list when mouse is off arrow*/
function hideFontList() {
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontDropdownList.style.display = "none";
}

/*Show font dropdown list when arrow is hovered*/
_global_variables__WEBPACK_IMPORTED_MODULE_0__.arrowSvgBtn.addEventListener("mouseover", displayFontList);

/*Hide font list when arrow is clicked*/
_global_variables__WEBPACK_IMPORTED_MODULE_0__.fontDropdownMenu.addEventListener("mouseleave", hideFontList);

/*Display default font and input font*/
function defaultDisplay() {
  /*Set sansSerif as default input font to show*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.innerHTML;
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "sans-serif");

  /*Display sansSerif as default input font*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.addEventListener('input', function () {
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontSize = "16px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontWeight = "bold";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  });

  /*Set Definitions Default Font Styles*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontSize = "32px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.lineHeight = "24px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.color = "var(--purple)";
}
defaultDisplay();

/*CHANGE FONT TYPE ON CLICK*/
/*Event Listeners to change font text displayed*/
/*Displays each font on click*/
_global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.addEventListener("click", function () {
  /*Change font text displayed*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.innerHTML;
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "sans-serif");

  /*Change input field to font*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.addEventListener('input', function () {
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontSize = "16px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontWeight = "bold";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";

    /*Vocabulary Definitions To Font*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontSize = "32px";
  });
});
_global_variables__WEBPACK_IMPORTED_MODULE_0__.serif.addEventListener("click", function () {
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.serif.innerHTML;
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "serif");
});
_global_variables__WEBPACK_IMPORTED_MODULE_0__.mono.addEventListener("click", function () {
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.mono.innerHTML;
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "mono");
});
})();

/******/ })()
;
//# sourceMappingURL=bundlefont9051c032cd86a1f12bf9.js.map