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
/*!***************************************!*\
  !*** ./src/scripts/dictionary-api.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "displayE": () => (/* binding */ displayE),
/* harmony export */   "fetchSynonymsThesaurus": () => (/* binding */ fetchSynonymsThesaurus),
/* harmony export */   "fetchVocabularyWords": () => (/* binding */ fetchVocabularyWords),
/* harmony export */   "hideE": () => (/* binding */ hideE)
/* harmony export */ });
/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variables */ "./src/scripts/global-variables.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }













/*API CALL*/
/*Dictionary Api Call*/
function fetchVocabularyWords(_x) {
  return _fetchVocabularyWords.apply(this, arguments);
}
/*Thesaurus Api Call*/
function _fetchVocabularyWords() {
  _fetchVocabularyWords = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchFieldValue) {
    var apiKeyDictionary, response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiKeyDictionary = "585651c1-6ea4-4761-b3e7-d7af4eea540e";
          _context.prev = 1;
          _context.next = 4;
          return fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/".concat(searchFieldValue, "?key=").concat(apiKeyDictionary));
        case 4:
          response = _context.sent;
          if (response.ok) {
            _context.next = 7;
            break;
          }
          throw new Error("HTTP error: ".concat(response.status));
        case 7:
          _context.next = 9;
          return response.json();
        case 9:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.error("Could not get word: ".concat(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value));
          /*Hide Vocab Section One*/
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIcon.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLine.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree.style.display = "none";

          /*Hide Vocab Section Two*/
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIconTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineThree.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo.style.display = "none";
          _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo.style.display = "none";
          displayE();
        case 44:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _fetchVocabularyWords.apply(this, arguments);
}
function fetchSynonymsThesaurus(_x2) {
  return _fetchSynonymsThesaurus.apply(this, arguments);
}
/*HERE*/
function _fetchSynonymsThesaurus() {
  _fetchSynonymsThesaurus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(searchFieldValue) {
    var apiKeyThesaurus, response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          apiKeyThesaurus = "8363280d-d79a-44a4-b9a8-7bdc11d4e5b4";
          _context2.prev = 1;
          _context2.next = 4;
          return fetch("https://www.dictionaryapi.com/api/v3/references/thesaurus/json//".concat(searchFieldValue, "?key=").concat(apiKeyThesaurus));
        case 4:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 7;
            break;
          }
          throw new Error("HTTP error: ".concat(response.status));
        case 7:
          _context2.next = 9;
          return response.json();
        case 9:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          console.error("Could not get word: ".concat(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value));
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 13]]);
  }));
  return _fetchSynonymsThesaurus.apply(this, arguments);
}
function displayE() {
  /*Display Error Message*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.frownFaceEmoji.style.display = "block", _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.display = "block", _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.display = "block", _global_variables__WEBPACK_IMPORTED_MODULE_0__.frownFaceEmoji.textContent = String.fromCodePoint(128577), _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.textContent = "No Definitions Found", _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.textContent = "Sorry pal, we couldn't find definitions for the word you were looking for." + "You can try the search again at later time or head to the web instead.";
}
function hideE() {
  /*Display Error Message*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.frownFaceEmoji.style.display = "none", _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.style.display = "none", _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.display = "none", _global_variables__WEBPACK_IMPORTED_MODULE_0__.frownFaceEmoji.textContent = String.fromCodePoint(128577), _global_variables__WEBPACK_IMPORTED_MODULE_0__.noDefinitionsFoundText.textContent = "No Definitions Found", _global_variables__WEBPACK_IMPORTED_MODULE_0__.errorMessage.textContent = "Sorry pal, we couldn't find definitions for the word you were looking for." + "You can try the search again at later time or head to the web instead.";
}

/*Create audio on click of icon*/
//Moving audio value outside of function creates sound only once.
var globalAudio = new Audio();
function playAudioOne() {
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  promise.then(function (data) {
    var audioURL = "https://media.merriam-webster.com/audio/prons/en/us/mp3/".concat(data[0].hwi.prs[0].sound.audio[0], "/").concat(data[0].hwi.prs[0].sound.audio, ".mp3");
    globalAudio.src = audioURL;
    globalAudio.preload = "none";
    globalAudio.play();
  });
}

/*Audio Two*/
function playAudioTwo() {
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  promise.then(function (data) {
    var audioURL = "https://media.merriam-webster.com/audio/prons/en/us/mp3/".concat(data[1].hwi.prs[0].sound.audio[0], "/").concat(data[1].hwi.prs[0].sound.audio, ".mp3");
    globalAudio.src = audioURL;
    globalAudio.preload = "none";
    globalAudio.play();
  });
}

/*Capitalize First Letter of each paragraph*/
function capitalizeFirstLetter(string) {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
}

/*Check if no data is available for list*/
function removeBulletListIfNoData() {
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);

  /*WORD SECTION ONE -check if data list empty*/
  /*If data for defone is empty*/
  promise.then(function (data) {
    if (data[0].shortdef[0] == undefined) {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne.style.display = "none";
    } else {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne.style.display = "block";
    }
  });

  /*If data for deftwo is empty*/
  promise.then(function (data) {
    if (data[0].shortdef[1] == undefined) {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo.style.display = "none";
    } else {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo.style.display = "block";
    }
  });

  /*If data for defthree is empty*/
  promise.then(function (data) {
    if (data[0].shortdef[2] == undefined) {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree.style.display = "none";
    } else {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree.style.display = "block";
    }
  });

  /*WORD SECTION TWO-check if data list empty*/
  promise.then(function (data) {
    if (data[1].shortdef[0] == undefined) {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo.style.display = "none";
    } else {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo.style.display = "block";
    }
  });

  /*If data for deftwooftwo is empty*/
  promise.then(function (data) {
    if (data[1].shortdef[1] == undefined) {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo.style.display = "none";
    } else {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo.style.display = "block";
    }
  });

  /*If data for defthreeoftwo is empty*/
  promise.then(function (data) {
    if (data[1].shortdef[2] == undefined) {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo.style.display = "none";
    } else {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo.style.display = "block";
    }
  });
}
function hideEntireSecondWordSectionIfNoData() {
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  /*If all of data are missing/undefined for word sections*/
  promise.then(function (data) {
    /*WORD SECTION ONE-If all data missing*/
    if (data[0].shortdef[0] == undefined && data[0].shortdef[1] == undefined && data[0].shortdef[2] == undefined) {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIcon.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLine.style.display = "none";
    } else {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIcon.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLine.style.display = "block";
    }

    /*WORD SECTION TWO -if all data is empty*/
    if (data[1].shortdef[0] == undefined && data[1].shortdef[1] == undefined && data[1].shortdef[2] == undefined) {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIconTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineThree.style.display = "none";
    } else {
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIconTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.display = "block";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineThree.style.display = "block";

      /*Decrease margin top for definition*/
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.opacity = "0.3%";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.marginTop = "-50px";
    }
  });
}

/*Create Definitions Lists*/
function createList() {
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.textContent = "Meaning";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.defList.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.textContent = "Meaning";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.defListofTwo.style.display = "block";

  /*Definitions List One*/
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne.textContent = capitalizeFirstLetter(data[0].shortdef[0]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo.textContent = capitalizeFirstLetter(data[0].shortdef[1]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree.textContent = capitalizeFirstLetter(data[0].shortdef[2]);
  });

  /*Definitions List Two*/
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo.textContent = capitalizeFirstLetter(data[1].shortdef[0]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo.textContent = capitalizeFirstLetter(data[1].shortdef[1]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo.textContent = capitalizeFirstLetter(data[1].shortdef[2]);
  });
  removeBulletListIfNoData(); /*Fine*/
  hideEntireSecondWordSectionIfNoData();
}

/*Display Synonyms for Words One and Two*/
function displaySynonyms() {
  var promise = fetchSynonymsThesaurus(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);

  /*Synonyms List One*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.textContent = "Synonyms";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.style.display = "block";
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.textContent = capitalizeFirstLetter(data[0].meta.syns[0][0]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.textContent = capitalizeFirstLetter(data[0].meta.syns[0][1]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.textContent = capitalizeFirstLetter(data[0].meta.syns[0][2]);
  });

  /*Synonyms List Two*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.textContent = "Synonyms";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.style.display = "block";
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.textContent = capitalizeFirstLetter(data[1].meta.syns[0][0]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.textContent = capitalizeFirstLetter(data[1].meta.syns[0][1]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.textContent = capitalizeFirstLetter(data[1].meta.syns[0][2]);
  });
}

/*Check Headword for Extra Strings*/
function checkHeadwordForExtraStringsBeforeDisplaying() {
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  /*Remove Extra Words After Headword*/
  var targetString = _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value;
  var extraString = _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value;
  var index = extraString.indexOf(targetString);
  if (index !== -1) {
    var result = extraString.substring(0, index + targetString.length);
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.textContent = " ";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.textContent = " ";
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.textContent = capitalizeFirstLetter(result);
    _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.textContent = capitalizeFirstLetter(result);
  } else {
    /*Display Headword One and Two*/
    /*Vocab Word One*/
    promise.then(function (data) {
      return _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.textContent = capitalizeFirstLetter(data[1].meta.stems[0]);
    });

    /*Vocab Word Two*/
    promise.then(function (data) {
      return _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.textContent = capitalizeFirstLetter(data[1].meta.stems[0]);
    });
  }
}
;

/*Create Definitions*/
/*Display words searched in the search field*/
function createDictionaryOne() {
  hideE();
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLine.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIcon.style.display = "block";

  /*Check Strings And Remove Extra Strings
   If Available Before Displaying - Headword One*/
  checkHeadwordForExtraStringsBeforeDisplaying();

  /*Display Phonetic Sound*/
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.textContent = "/" + capitalizeFirstLetter(data[0].hwi.prs[0].mw + "/");
  });

  /*Display noun and noun-line*/
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.textContent = capitalizeFirstLetter(data[0].fl);
  });
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLine.style.width = "70%";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLine.style.height = "0.5px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLine.style.backgroundColor = "var(--gray-num-two)";

  /*Play audio on icon click*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIcon.addEventListener("click", function () {
    playAudioOne();
  });
  /*Create Definitions List*/
  createList();

  /*Display Synonyms Section*/
  displaySynonyms();
}

/*Dictionary Two*/
function createDictionaryTwo() {
  hideE();
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineThree.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIconTwo.style.display = "block";

  /*Check Strings And Remove Extra Strings
   If Available Before Displaying - Headword Two*/
  checkHeadwordForExtraStringsBeforeDisplaying();

  /*Display Phonetic Sound Two*/
  /*Phonetics Two Checked Inside of
  form submit at bottom*/

  /*Display parts of speech and style-lines*/
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.textContent = capitalizeFirstLetter(data[1].fl);
  });
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineThree.style.width = "70%";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineThree.style.height = "0.5px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineThree.style.backgroundColor = "var(--gray-num-two)";

  /*Style Line Two*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.width = "100%";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.height = "0.30px";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.backgroundColor = "var(--gray-num-two)";

  /*Play audio on icon click*/
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIconTwo.addEventListener("click", function () {
    playAudioTwo();
  });
  /*Create Definitions List*/
  createList();

  /*Display Synonyms Section*/
  displaySynonyms();
}

/*Create Dictionary Function*/
function createDictionary() {
  createDictionaryOne();
  createDictionaryTwo();
}

/*Hide Display of elements if data is undefined*/
_global_variables__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener('submit', function (event) {
  event.preventDefault(); //stops default action
  event.stopPropagation(); //stops further propogation in event/bubbling phases
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  promise.then(function (data) {
    if (data[0] == undefined) {
      console.log('UNDEFINED');
      /*Hide Vocab Section One*/
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhonetic.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIcon.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningText.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeech.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsText.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOne.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLine.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOne.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThree.style.display = "none";

      /*Hide Vocab Section Two*/
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIconTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.meaningTextTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymsTextofTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymOneofTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineThree.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defOneOfTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defTwoofTwo.style.display = "none";
      _global_variables__WEBPACK_IMPORTED_MODULE_0__.defThreeofTwo.style.display = "none";
      displayE();
    }
    /*If phonetics Are Not Equal*/
    if (data[1].hwi.prs[0].mw !== data[0].hwi.prs[0].mw) {
      /*Display Phonetic Sound Two*/
      promise.then(function (data) {
        return _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.textContent = "/" + capitalizeFirstLetter(data[0].hwi.prs[0].mw + "/");
      });
    }
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDictionary);





})();

/******/ })()
;
//# sourceMappingURL=bundleapi653b90bca67f6cd103f7.js.map