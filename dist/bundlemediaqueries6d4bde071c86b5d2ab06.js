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
/* harmony export */   "defListofTwo": () => (/* binding */ defListofTwo),
/* harmony export */   "defOne": () => (/* binding */ defOne),
/* harmony export */   "defOneOfTwo": () => (/* binding */ defOneOfTwo),
/* harmony export */   "defThree": () => (/* binding */ defThree),
/* harmony export */   "defThreeofTwo": () => (/* binding */ defThreeofTwo),
/* harmony export */   "defTwo": () => (/* binding */ defTwo),
/* harmony export */   "defTwoofTwo": () => (/* binding */ defTwoofTwo),
/* harmony export */   "defaultWord": () => (/* binding */ defaultWord),
/* harmony export */   "errorMessage": () => (/* binding */ errorMessage),
/* harmony export */   "errorSearchMessage": () => (/* binding */ errorSearchMessage),
/* harmony export */   "fontDropdownList": () => (/* binding */ fontDropdownList),
/* harmony export */   "fontDropdownMenu": () => (/* binding */ fontDropdownMenu),
/* harmony export */   "fontPlaceholder": () => (/* binding */ fontPlaceholder),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "frownFaceEmoji": () => (/* binding */ frownFaceEmoji),
/* harmony export */   "meaningText": () => (/* binding */ meaningText),
/* harmony export */   "meaningTextTwo": () => (/* binding */ meaningTextTwo),
/* harmony export */   "mono": () => (/* binding */ mono),
/* harmony export */   "moonIcon": () => (/* binding */ moonIcon),
/* harmony export */   "noDefinitionsFoundText": () => (/* binding */ noDefinitionsFoundText),
/* harmony export */   "partsOfSpeech": () => (/* binding */ partsOfSpeech),
/* harmony export */   "partsOfSpeechTwo": () => (/* binding */ partsOfSpeechTwo),
/* harmony export */   "playIcon": () => (/* binding */ playIcon),
/* harmony export */   "playIconTwo": () => (/* binding */ playIconTwo),
/* harmony export */   "sansSerif": () => (/* binding */ sansSerif),
/* harmony export */   "searchField": () => (/* binding */ searchField),
/* harmony export */   "serif": () => (/* binding */ serif),
/* harmony export */   "soundOutPhonetic": () => (/* binding */ soundOutPhonetic),
/* harmony export */   "soundOutPhoneticTwo": () => (/* binding */ soundOutPhoneticTwo),
/* harmony export */   "styleLine": () => (/* binding */ styleLine),
/* harmony export */   "styleLineThree": () => (/* binding */ styleLineThree),
/* harmony export */   "styleLineTwo": () => (/* binding */ styleLineTwo),
/* harmony export */   "synonymOne": () => (/* binding */ synonymOne),
/* harmony export */   "synonymOneofTwo": () => (/* binding */ synonymOneofTwo),
/* harmony export */   "synonymThree": () => (/* binding */ synonymThree),
/* harmony export */   "synonymThreeofTwo": () => (/* binding */ synonymThreeofTwo),
/* harmony export */   "synonymTwo": () => (/* binding */ synonymTwo),
/* harmony export */   "synonymTwoofTwo": () => (/* binding */ synonymTwoofTwo),
/* harmony export */   "synonymsText": () => (/* binding */ synonymsText),
/* harmony export */   "synonymsTextofTwo": () => (/* binding */ synonymsTextofTwo),
/* harmony export */   "vocabWord": () => (/* binding */ vocabWord),
/* harmony export */   "vocabWordTwo": () => (/* binding */ vocabWordTwo)
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

/*Moon Icon*/
var moonIcon = document.getElementById('moon-icon');

/*Default Word*/
var defaultWord = "Hello";

/*API*/
/*Word Version 1*/
var vocabWord = document.getElementById('vocabulary-word');
var soundOutPhonetic = document.getElementById('phonetic');
var partsOfSpeech = document.getElementById('parts-of-speech');
var styleLine = document.getElementById('style-line');
var playIcon = document.getElementById('play-icon');
var meaningText = document.querySelector('.meaning-text');
var meaningTextTwo = document.querySelector('.meaning-text-two');
var defOne = document.getElementById('def-one');
var defTwo = document.getElementById('def-two');
var defThree = document.getElementById('def-three');
var defList = document.getElementById('def-list');
var synonymsText = document.getElementById('synonyms-text');
var synonymOne = document.getElementById('synonym-one');
var synonymTwo = document.getElementById('synonym-two');
var synonymThree = document.getElementById('synonym-three');

/*Word Version 2*/
var styleLineTwo = document.getElementById('style-line-two');
var vocabWordTwo = document.getElementById('vocabulary-word-two');
var soundOutPhoneticTwo = document.getElementById('phonetic-two');
var partsOfSpeechTwo = document.getElementById('parts-of-speech-two');
var styleLineThree = document.getElementById('style-line-three');
var playIconTwo = document.getElementById('play-icon-two');
var defOneOfTwo = document.getElementById('def-one-of-two');
var defTwoofTwo = document.getElementById('def-two-of-two');
var defThreeofTwo = document.getElementById('def-three-of-two');
var defListofTwo = document.getElementById('def-list-two');
var synonymsTextofTwo = document.getElementById('synonyms-text-two');
var synonymOneofTwo = document.getElementById('synonym-one-of-two');
var synonymTwoofTwo = document.getElementById('synonym-two-of-two');
var synonymThreeofTwo = document.getElementById('synonym-three');

/*Error Message*/
var frownFaceEmoji = document.getElementById('frown-face-emoji');
var errorMessage = document.getElementById('error-message');
var noDefinitionsFoundText = document.getElementById('no-definitions-found-text');

























/*Word 2*/
















/*Error Message*/




/*Moon Icon*/


/*Default Word*/


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
/*!**************************************!*\
  !*** ./src/scripts/media-queries.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variables */ "./src/scripts/global-variables.js");








/*Function*/
function setMobileMediaQuery(queryWidthMobile) {
  var mediaQuery = window.matchMedia(queryWidthMobile);
  if (mediaQuery.matches) {
    /*List Paragraphs*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo.style.lineHeight = "24px";

    /*Sound Phonetic*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.lineHeight = "24px";

    /*Parts of Speech*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.lineHeight = "29px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.lineHeight = "29px";

    /*Meaning Text*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.lineHeight = "24px";

    /*Synonyms Text*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.lineHeight = "24px";

    /*Synonyms Lists*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.style.lineHeight = "24px";
  }
}
setMobileMediaQuery('(width:414px)');
setMobileMediaQuery('(width:412px)');
setMobileMediaQuery('(width:393px)');
setMobileMediaQuery('(width:390px)');

/*Mobile Error Message Width 280 and below*/
function setMediaQueryErrorMessage() {
  var mediaQuery = window.matchMedia("(max-width:280px)");
  if (mediaQuery.matches) {
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.width = "200px";
  }
}
setMediaQueryErrorMessage();

/*Tablet 500 And Above*/
function setMediaQueryTablet() {
  var mediaQuery = window.matchMedia("(min-width:500px)");
  if (mediaQuery.matches) {
    /*Vocab Word*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontSize = "64px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.fontSize = "64px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.lineHeight = "77px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.lineHeight = "77px";

    /*Sound Phonetic*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontSize = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.fontSize = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.lineHeight = "29px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.lineHeight = "29px";

    /*List Paragraphs*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo.style.fontSize = "18px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo.style.lineHeight = "24px";

    /*Parts of Speech*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontSize = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.lineHeight = "29px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontSize = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.lineHeight = "29px";

    /*Meaning Text*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.lineHeight = "24px";

    /*Synonyms Text*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.lineHeight = "24px";

    /*Synonyms Lists*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.style.fontSize = "20px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.style.lineHeight = "24px";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.style.lineHeight = "24px";
  }
}
setMediaQueryTablet();
})();

/******/ })()
;
//# sourceMappingURL=bundlemediaqueries6d4bde071c86b5d2ab06.js.map