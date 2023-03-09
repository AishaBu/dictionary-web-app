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
/*!*************************************!*\
  !*** ./src/scripts/toggle-theme.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variables */ "./src/scripts/global-variables.js");






/*TOGGLE COLOR THEME CHANGE*/
var checkBoxInput = document.getElementById("checkbox-input");
var body = document.querySelector("body");
function toggleDarkTheme() {
  body.classList.toggle("dark-mode");
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.moonIcon.classList.toggle('moon-dark-theme');
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.setAttribute("id", "valid-value");
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontDropdownList.style.backgroundColor = "var(--black-num-two)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontDropdownList.style.boxShadow = "var(--dark-theme-box-shadow)";

  /*Functions*/
  function setListTextColorWhite(listPar) {
    listPar.style.color = "var(--white)";
  }
  function setFontHoverColor(param) {
    param.addEventListener('mouseover', function () {
      param.style.color = "var(--purple)";
    });
    param.addEventListener('mouseleave', function () {
      param.style.color = "var(--white)";
    });
  }

  /*Bullet Lists Paragraphs*/
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);

  /*SansSerif, Serif, and Mono Fonts*/
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder);
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif);
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.serif);
  setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.mono);

  /*Set Hover on Fonts*/
  setFontHoverColor(_global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif);
  setFontHoverColor(_global_variables__WEBPACK_IMPORTED_MODULE_0__.serif);
  setFontHoverColor(_global_variables__WEBPACK_IMPORTED_MODULE_0__.mono);

  /*Set moon icon color for dark theme*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.moonIcon.style.marginLeft = "10px";

  /*Switch font color to white for
  dark theme when font style changes*/
  function changeFontColorWithFontStyleDarkTheme() {
    /*Sans Serif*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.addEventListener('click', function () {
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);
    });

    /*Serif*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.serif.addEventListener('click', function () {
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);
    });

    /*Mono*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.mono.addEventListener('click', function () {
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);
    });

    /*Change Error Message Color To White*/
    setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText);
    setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage);
  }
  changeFontColorWithFontStyleDarkTheme();
  function changeErrorMessageColorOnClickDarkTheme() {
    /*Sans Serif*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.addEventListener('click', function () {
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage);
    });
    /*Serif*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.serif.addEventListener('click', function () {
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage);
    });

    /*Mono*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.mono.addEventListener('click', function () {
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText);
      setListTextColorWhite(_global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage);
    });
  }
  changeErrorMessageColorOnClickDarkTheme();
}

/*DEFAULT HERE*/
function setDefaultTheme() {
  body.classList.toggle("light-mode");
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.setAttribute("id", "valid-value");
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontDropdownList.style.backgroundColor = "var(--white)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.fontDropdownList.style.boxShadow = "var(--box-shadow)";

  /*Functions*/
  function setListTextColorBlack(par) {
    par.style.color = "var(--black-num-one)";
  }
  function setFontHover(hoverParam) {
    hoverParam.addEventListener('mouseover', function () {
      hoverParam.style.color = "var(--purple)";
    });
    hoverParam.addEventListener('mouseleave', function () {
      hoverParam.style.color = "var(--black-num-one)";
    });
  }

  /*Bullet Lists Paragraphs*/
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);

  /*SansSerif, Serif, and Mono Fonts*/
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.fontPlaceholder);
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif);
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.serif);
  setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.mono);

  /*Set Hover on Fonts*/
  setFontHover(_global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif);
  setFontHover(_global_variables__WEBPACK_IMPORTED_MODULE_0__.serif);
  setFontHover(_global_variables__WEBPACK_IMPORTED_MODULE_0__.mono);

  /*Set moon icon color for dark theme*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.moonIcon.style.marginLeft = "10px";

  /*Switch font color to white for
  dark theme when font style changes*/
  function changeFontColor() {
    /*Sans Serif*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.addEventListener('click', function () {
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);
    });

    /*Serif*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.serif.addEventListener('click', function () {
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);
    });

    /*Mono*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.mono.addEventListener('click', function () {
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo);
    });

    /*Change Error Message Color To White*/
    setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText);
    setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage);
  }
  changeFontColor();

  /*Change Error Message Color To Black On Click*/
  function changeErrorMessageColorOnClickDefaultTheme() {
    /*Sans Serif*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.sansSerif.addEventListener('click', function () {
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage);
    });
    /*Serif*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.serif.addEventListener('click', function () {
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage);
    });

    /*Mono*/
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.mono.addEventListener('click', function () {
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText);
      setListTextColorBlack(_global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage);
    });
  }
  changeErrorMessageColorOnClickDefaultTheme();
}
setDefaultTheme(); //Set Default Theme for Toggle*/

/*Toggle Theme On and Off*/
/*Checks if light-mode theme is active click, if it, is remove class,
 and toggle dark-mode, if dark-mode is active instead on click,
 remove light-mode class and set default theme.*/
checkBoxInput.addEventListener('click', function () {
  if (body.classList.contains('light-mode')) {
    body.classList.remove("light-mode");
    toggleDarkTheme();
  } else {
    body.classList.remove("dark-mode");
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.moonIcon.classList.remove('moon-dark-theme');
    setDefaultTheme();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundletogglethemed44bee7e3ea7e4d44301.js.map