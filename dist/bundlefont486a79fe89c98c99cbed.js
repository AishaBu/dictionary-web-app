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

/*CHANGE FONT TYPE ON CLICK*/
/*Event Listeners to change font text displayed*/
/*Displays each font on click*/
/*Change Font To Sans Serif*/
function changeFontToSansSerif() {
  /*Change font text displayed*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.innerHTML;
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "sans-serif");

  /*Change searchfield text to font style on input*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontWeight = "bold";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";

  /*Vocabulary Definitions To Font*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontSize = "32px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.fontSize = "32px";

  /*Phonetic Spelling*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.lineHeight = "24px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.color = "var(--purple)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.lineHeight = "24px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.color = "var(--purple)";

  /*Parts of Speech and Style Lines*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontStyle = "Italic";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontWeight = "bold";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontStyle = "Italic";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontWeight = "bold";

  /*Meaning Text and Word Definitions*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.color = "var(--gray-num-one)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.color = "var(--gray-num-one)";

  /*Set defintion font styes*/
  function setDefinitionFontStyles(definition) {
    definition.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
    definition.style.fontSize = "15px";
    definition.style.lineHeight = "24px";
    definition.style.color = "var( --off-black-one)";
  }
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);

  /*Synonyms Text*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.color = "var(--gray-num-one)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.color = "var(--gray-num-one)";

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
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo);

  /*Error Message Font for Sans Serif*/
  /*No Definitions Found Text*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.fontFamily = "var(--inter-font), var( --static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.fontWeight = "bold";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.color = "var( --off-black-one)";
  /*Error Message*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.fontFamily = "var(--inter-font), var(--static-inter-regular-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.fontSize = "13px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.color = "var(--gray-num-one)";
}
changeFontToSansSerif(); //Set As Default Font Style

/*Change Font To Serif*/
function changeFontToSerif() {
  /*Change font text displayed*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.serif.innerHTML;
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "serif");

  /*Change searchfield text to font style on input*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontWeight = "bold";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";

  /*Vocabulary Definitions To Font*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontSize = "32px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.fontSize = "32px";

  /*Phonetic Spelling*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.lineHeight = "24px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.color = "var(--purple)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.lineHeight = "24px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.color = "var(--purple)";

  /*Parts of Speech and Style Lines*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontStyle = "Italic";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontWeight = "bold";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontFamily = "var(--lora-font),var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontStyle = "Italic";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontWeight = "bold";

  /*Meaning Text and Word Definitions*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.color = "var(--gray-num-one)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.color = "var(--gray-num-one)";

  /*Set defintion font styes*/
  function setDefinitionFontStyles(definition) {
    definition.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
    definition.style.fontSize = "15px";
    definition.style.lineHeight = "24px";
    definition.style.color = "var( --off-black-one)";
  }
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);

  /*Synonyms Text*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.color = "var(--gray-num-one)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.color = "var(--gray-num-one)";

  /*Synonyms Words*/
  function setSynonymWordsFontStyles(synonym) {
    synonym.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
    synonym.style.fontSize = "16px";
    synonym.style.fontWeight = "bold";
    synonym.style.color = "var(--purple)";
  }
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo);

  /*Error Message Font for Serif*/
  /*No Definitions Found Text*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.fontWeight = "bold";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.color = "var( --off-black-one)";
  /*Error Message*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.fontFamily = "var(--lora-font), var(--lora-static-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.fontSize = "13px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.color = "var(--gray-num-one)";
}

/*Change Font To Mono*/
function changeFontToMono() {
  /*Change font text displayed*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.mono.innerHTML;
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "mono");

  /*Change searchfield text to font style on input*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontWeight = "bold";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";

  /*Vocabulary Definitions To Font*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.fontSize = "32px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.fontSize = "32px";

  /*Phonetic Spelling*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.lineHeight = "24px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.color = "var(--purple)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.lineHeight = "24px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.color = "var(--purple)";

  /*Parts of Speech and Style Lines*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontStyle = "Italic";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.fontWeight = "bold";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontFamily = "var(--inconsolata-font),var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontStyle = "Italic";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontSize = "18px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontWeight = "bold";

  /*Meaning Text and Word Definitions*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.color = "var(--gray-num-one)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.color = "var(--gray-num-one)";

  /*Set defintion font styes*/
  function setDefinitionFontStyles(definition) {
    definition.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
    definition.style.fontSize = "15px";
    definition.style.lineHeight = "24px";
    definition.style.color = "var( --off-black-one)";
  }
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
  setDefinitionFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);

  /*Synonyms Text*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.color = "var(--gray-num-one)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.color = "var(--gray-num-one)";

  /*Synonyms Words*/
  function setSynonymWordsFontStyles(synonym) {
    synonym.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
    synonym.style.fontSize = "16px";
    synonym.style.fontWeight = "bold";
    synonym.style.color = "var(--purple)";
  }
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo);
  setSynonymWordsFontStyles(_global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo);

  /*Error Message Font for Mono*/
  /*No Definitions Found Text*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.fontSize = "16px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.fontWeight = "bold";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.color = "var( --off-black-one)";
  /*Error Message*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.fontFamily = "var(--inconsolata-font), var(--static-inconsolata-bold-font)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.fontSize = "13px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.color = "var(--gray-num-one)";
}

/*Change font style on click*/
function changeFontDisplayedAndStyleOnClick() {
  /*Sans Serif*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.addEventListener('click', function () {
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.innerHTML;
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "sans-serif");
    changeFontToSansSerif();
  });

  /*Serif*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.serif.addEventListener('click', function () {
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.serif.innerHTML;
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "serif");
    changeFontToSerif();
  });

  /*Mono*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.mono.addEventListener('click', function () {
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.innerHTML = _global_variables__WEBPACK_IMPORTED_MODULE_0__.mono.innerHTML;
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder.setAttribute("id", "mono");
    changeFontToMono();
  });
}
changeFontDisplayedAndStyleOnClick();
})();

/******/ })()
;
//# sourceMappingURL=bundlefont486a79fe89c98c99cbed.js.map