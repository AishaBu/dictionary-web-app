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
/* harmony export */   "defList": () => (/* binding */ defList),
/* harmony export */   "defOne": () => (/* binding */ defOne),
/* harmony export */   "defThree": () => (/* binding */ defThree),
/* harmony export */   "defTwo": () => (/* binding */ defTwo),
/* harmony export */   "errorSearchMessage": () => (/* binding */ errorSearchMessage),
/* harmony export */   "fontDropdownList": () => (/* binding */ fontDropdownList),
/* harmony export */   "fontDropdownMenu": () => (/* binding */ fontDropdownMenu),
/* harmony export */   "fontPlaceholder": () => (/* binding */ fontPlaceholder),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "meaningText": () => (/* binding */ meaningText),
/* harmony export */   "mono": () => (/* binding */ mono),
/* harmony export */   "noun": () => (/* binding */ noun),
/* harmony export */   "nounLine": () => (/* binding */ nounLine),
/* harmony export */   "playIcon": () => (/* binding */ playIcon),
/* harmony export */   "sansSerif": () => (/* binding */ sansSerif),
/* harmony export */   "searchField": () => (/* binding */ searchField),
/* harmony export */   "serif": () => (/* binding */ serif),
/* harmony export */   "soundOutPhonetic": () => (/* binding */ soundOutPhonetic),
/* harmony export */   "synonymOne": () => (/* binding */ synonymOne),
/* harmony export */   "synonymThree": () => (/* binding */ synonymThree),
/* harmony export */   "synonymTwo": () => (/* binding */ synonymTwo),
/* harmony export */   "synonymsText": () => (/* binding */ synonymsText),
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
var noun = document.getElementById('noun');
var nounLine = document.getElementById('noun-line');
var playIcon = document.getElementById('play-icon');
var meaningText = document.querySelector('.meaning-text');
var defOne = document.getElementById('def-one');
var defTwo = document.getElementById('def-two');
var defThree = document.getElementById('def-three');
var defList = document.getElementById('def-list');
var synonymsText = document.getElementById('synonyms-text');
var synonymOne = document.getElementById('synonym-one');
var synonymTwo = document.getElementById('synonym-two');
var synonymThree = document.getElementById('synonym-three');

























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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/*CHANGE FONT TYPE ON CLICK*/
/*Event Listeners to change font text displayed*/
/*Displays each font on click*/
function changeFontToSansSerif() {
  /*Change font text displayed*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.innerHTML;
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "sans-serif");

  /*Change input field to font*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.addEventListener("input", function () {
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontSize = "16px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontWeight = "bold";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";

    /*Vocabulary Definitions To Font*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontSize = "32px";
    /*Phonetic Spelling*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.color = "var(--purple)";
    /*Noun and Noun Line*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.noun.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.noun.style.fontStyle = "Italic";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.noun.style.fontSize = "18px";
    /*Meaning Text and Word Definitions*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontSize = "16px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.color = "var(--gray-num-one)";

    /*Set defintion font styes -defOne, defTwo, defThree fonts*/
    function setDefinitionFontStyles(definition) {
      definition.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
      definition.style.fontSize = "15px";
      definition.style.lineHeight = "24px";
      definition.style.color = "var( --off-black-one)";
    }
    setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
    setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
    setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);

    /*Synonyms Text*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontSize = "16px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.color = "var(--gray-num-one)";

    /*Synonyms Words*/
    function setSynonymWordsFontStyles(synonym) {
      synonym.style.fontFamily = "var(--inter-font), var( --static-inter-bold)";
      synonym.style.fontSize = "16px";
      synonym.style.fontWeight = "bold";
      synonym.style.color = "var(--purple)";
    }
    setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne);
    setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo);
    setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeFontToSansSerif());
})();

/******/ })()
;
//# sourceMappingURL=bundlefont2331d46db001345d5de9.js.map