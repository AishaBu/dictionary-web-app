/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/dictionary-api.js":
/*!***************************************!*\
  !*** ./src/scripts/dictionary-api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
          console.error("Could not get word: ".concat(_context.t0));
        case 16:
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
/*Create audio on click of icon*/
//Moving audio value outside of function creates sound only once.
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
          console.error("Could not get word: ".concat(_context2.t0));
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 13]]);
  }));
  return _fetchSynonymsThesaurus.apply(this, arguments);
}
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
  return string.charAt(0).toUpperCase() + string.slice(1);
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
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwo.textContent = capitalizeFirstLetter(data[0].meta.syns[1][3]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThree.textContent = capitalizeFirstLetter(data[0].meta.syns[3][6]);
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
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymTwoofTwo.textContent = capitalizeFirstLetter(data[1].meta.syns[1][3]);
  });
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.synonymThreeofTwo.textContent = capitalizeFirstLetter(data[1].meta.syns[3][6]);
  });
}

/*Create Definitions*/
/*Display words searched in the search field*/
function createDictionaryOne() {
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLine.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIcon.style.display = "block";

  /*Display Headword One*/
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWord.textContent = capitalizeFirstLetter(data[1].meta.stems[0]);
  });
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
  var promise = fetchVocabularyWords(_global_variables__WEBPACK_IMPORTED_MODULE_0__.searchField.value);
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineTwo.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.styleLineThree.style.display = "block";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.playIconTwo.style.display = "block";

  /*Display Headword Two*/
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.vocabWordTwo.textContent = capitalizeFirstLetter(data[1].meta.stems[0]);
  });
  /*Display Phonetic Sound Two*/
  promise.then(function (data) {
    return _global_variables__WEBPACK_IMPORTED_MODULE_0__.soundOutPhoneticTwo.textContent = "/" + capitalizeFirstLetter(data[1].hwi.prs[0].mw + "/");
  });

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDictionary);

/*Console Logs*/
//const promise = fetchVocabularyWords("hello");
//promise.then((data) => console.log(data[0]));
//promise.then((data) => (data[0].shortdef[0]))

//const promise = fetchSynonymsThesaurus('umpire');
//promise.then((data) => console.log(data[0]));
//promise.then((data) => console.log(data[0].meta.syns[0]))

/***/ }),

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
/* harmony export */   "errorSearchMessage": () => (/* binding */ errorSearchMessage),
/* harmony export */   "fontDropdownList": () => (/* binding */ fontDropdownList),
/* harmony export */   "fontDropdownMenu": () => (/* binding */ fontDropdownMenu),
/* harmony export */   "fontPlaceholder": () => (/* binding */ fontPlaceholder),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "meaningText": () => (/* binding */ meaningText),
/* harmony export */   "meaningTextTwo": () => (/* binding */ meaningTextTwo),
/* harmony export */   "mono": () => (/* binding */ mono),
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

























/*Word 2*/
















/***/ }),

/***/ "./src/scripts/switch-font-style.js":
/*!******************************************!*\
  !*** ./src/scripts/switch-font-style.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontFamily = "var(--inter-font),var(--static-inter-bold)";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontStyle = "Italic";
  _global_variables__WEBPACK_IMPORTED_MODULE_0__.partsOfSpeechTwo.style.fontSize = "18px";

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
}
changeFontToSansSerif(); //Default Font Style

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.woff2 */ "./src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.woff */ "./src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf */ "./src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inconsolata/static/Inconsolata-Regular.woff2 */ "./src/assets/fonts/inconsolata/static/Inconsolata-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inconsolata/static/Inconsolata-Regular.woff */ "./src/assets/fonts/inconsolata/static/Inconsolata-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inconsolata/static/Inconsolata-Regular.ttf */ "./src/assets/fonts/inconsolata/static/Inconsolata-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inconsolata/static/Inconsolata-Bold.woff2 */ "./src/assets/fonts/inconsolata/static/Inconsolata-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inconsolata/static/Inconsolata-Bold.woff */ "./src/assets/fonts/inconsolata/static/Inconsolata-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inconsolata/static/Inconsolata-Bold.ttf */ "./src/assets/fonts/inconsolata/static/Inconsolata-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets//fonts/inter/Inter-VariableFont_slnt,wght.woff2 */ "./src/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets//fonts/inter/Inter-VariableFont_slnt,wght.woff */ "./src/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inter/Inter-VariableFont_slnt,wght.ttf */ "./src/assets/fonts/inter/Inter-VariableFont_slnt,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets//fonts/inter/static/Inter-Regular.woff2 */ "./src/assets/fonts/inter/static/Inter-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets//fonts/inter/static/Inter-Regular.woff */ "./src/assets/fonts/inter/static/Inter-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inter/static/Inter-Regular.ttf */ "./src/assets/fonts/inter/static/Inter-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../assets//fonts/inter/static/Inter-Bold.woff2 */ "./src/assets/fonts/inter/static/Inter-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../assets//fonts/inter/static/Inter-Bold.woff */ "./src/assets/fonts/inter/static/Inter-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/inter/static/Inter-Bold.ttf */ "./src/assets/fonts/inter/static/Inter-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../assets//fonts/lora/Lora-VariableFont_wght.woff2 */ "./src/assets/fonts/lora/Lora-VariableFont_wght.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/Lora-VariableFont_wght.woff */ "./src/assets/fonts/lora/Lora-VariableFont_wght.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/Lora-VariableFont_wght.ttf */ "./src/assets/fonts/lora/Lora-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/static/Lora-Regular.woff2 */ "./src/assets/fonts/lora/static/Lora-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../assets//fonts/lora/static/Lora-Regular.woff */ "./src/assets/fonts/lora/static/Lora-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/static/Lora-Regular.ttf */ "./src/assets/fonts/lora/static/Lora-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/static/Lora-Bold.woff2 */ "./src/assets/fonts/lora/static/Lora-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/static/Lora-Bold.woff */ "./src/assets/fonts/lora/static/Lora-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/static/Lora-Bold.ttf */ "./src/assets/fonts/lora/static/Lora-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/Lora-Italic-VariableFont_wght.woff2 */ "./src/assets/fonts/lora/Lora-Italic-VariableFont_wght.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/Lora-Italic-VariableFont_wght.woff */ "./src/assets/fonts/lora/Lora-Italic-VariableFont_wght.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/Lora-Italic-VariableFont_wght.ttf */ "./src/assets/fonts/lora/Lora-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/static/Lora-BoldItalic.woff2 */ "./src/assets/fonts/lora/static/Lora-BoldItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/static/Lora-BoldItalic.woff */ "./src/assets/fonts/lora/static/Lora-BoldItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/lora/static/Lora-BoldItalic.ttf */ "./src/assets/fonts/lora/static/Lora-BoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/icon-search.svg */ "./src/assets/images/icon-search.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /*Colors*/\n  --black-num-one: #050505;\n  --black-num-two: #1f1f1f;\n  --off-black-one: #2d2d2d;\n  --off-black-two: #3a3a3a;\n  --gray-num-one: #757575;\n  --gray-num-two: #e9e9e9;\n  --off-white-one: #f4f4f4;\n  --white: #ffffff;\n  --purple: #a445ed;\n  --red: #ff5252;\n\n  /*Shadow*/\n  --box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.23);\n\n  /*Fonts*/\n  --inconsolata-font: \"Inconsolata\";\n  --static-inconsolata-regular-font: \"Static Inconsolata Regular\";\n  --static-inconsolata-bold-font: \"Static Inconsolata Bold\";\n  /*Inter Font*/\n  --inter-font: \"Inter\";\n  --static-inter-regular-font: \"Static Inter Regular\";\n  --static-inter-bold: \"Static Inter Bold\";\n  /*Lora Font*/\n  --lora-font: \"Lora\";\n  --lora-static-regular-font: \"Static Lora Regular\";\n  --lora-static-bold-font: \"Static Lora Bold\";\n  --lora-italic-font: \"Lora Italic\";\n  --lora-italic-bold-font: \"Static Lora Bold Italic\";\n}\n\n/*Font Face Typography*/\n/*Inconsolata Font*/\n@font-face {\n  font-family: \"Inconsolata\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n    format(\"woff2\"); /* Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n    format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 200 900;\n}\n\n/*Static Inconsolata Regular*/\n@font-face {\n  font-family: \"Static Inconsolata Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")\n    format(\"woff2\"); /*Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")\n    format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 400;\n}\n\n/*Static Inconsolata Bold*/\n@font-face {\n  font-family: \"Static Inconsolata Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ")\n    format(\"woff2\"); /*Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")\n    format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 600 800;\n}\n\n/*Inter Font*/\n@font-face {\n  font-family: \"Inter\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")\n    format(\"woff2\"); /* Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ")\n    format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 200 900;\n}\n\n/*Static Inter Regular*/\n@font-face {\n  font-family: \"Static Inter Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format(\"woff2\"); /* Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"truetype\"); /*Fallback*/\n  font-weight: 200 900;\n}\n\n/*Static Inter Bold*/\n@font-face {\n  font-family: \"Static Inter Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format(\"woff2\"); /* Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format(\"truetype\"); /*Fallback*/\n  font-weight: 200 900;\n}\n\n/*Lora Font*/\n@font-face {\n  font-family: \"Lora\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format(\"woff2\"); /* Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format(\"truetype\"); /*Fallback*/\n  font-weight: 400 700;\n}\n\n/*Static Lora Regular*/\n@font-face {\n  font-family: \"Static Lora Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format(\"woff2\"); /* Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format(\"truetype\"); /*Fallback*/\n  font-weight: 400;\n}\n\n/*Static Lora Bold*/\n@font-face {\n  font-family: \"Static Lora Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ") format(\"woff2\"); /* Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ") format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format(\"truetype\"); /*Fallback*/\n  font-weight: 700;\n}\n\n/*Lora Italic Font*/\n@font-face {\n  font-family: \"Lora Italic\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ")\n    format(\"woff2\"); /* Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ")\n    format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 400 700;\n}\n\n/*Static Lora Bold Italic*/\n@font-face {\n  font-family: \"Static Lora Bold Italic\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ") format(\"woff2\"); /* Modern Browsers*/\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ") format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ") format(\"truetype\"); /*Fallback*/\n  font-weight: 700;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n}\n\n/*Book Logo*/\n#book-logo {\n  width: 28.05px;\n  height: 32px;\n}\n\n/*Fonts*/\n#font-dropdown-list p,\n#font-choice-btn {\n  font-size: 14px;\n  line-height: 24px;\n  color: var(--off-black-one);\n}\n\n/*Font Dropdown List*/\n#font-dropdown-list p {\n  position: relative;\n  top: 10px;\n  left: 30px;\n  width: 90px;\n  height: 24px;\n  cursor: pointer;\n}\n\n#font-dropdown-list {\n  background-color: var(--white);\n  width: 183px;\n  height: 140px;\n  border-radius: 16px;\n  box-shadow: var(--box-shadow);\n  display: none;\n}\n\n/*Font Dropdown List Hover*/\n#font-dropdown-list p:hover {\n  color: var(--purple);\n}\n\n/*Font Button*/\n#font-choice-btn {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  appearance: none;\n  border: none;\n  background-color: transparent;\n}\n\n#arrow-svg {\n  display: block;\n  padding-left: 20px;\n  padding-top: 8px;\n}\n\n/*Font Types*/\n#sans-serif {\n  font-family: var(--inter-font), var(--static-inter-bold);\n  font-weight: bold;\n}\n\n#serif {\n  font-family: var(--lora-font), var(--lora-static-bold-font);\n  font-weight: bold;\n}\n\n#mono {\n  font-family: var(--inconsolata-font), var(--static-inconsolata-bold-font);\n  font-weight: bold;\n}\n\n/*Add dividing Line on header*/\n#divide-line {\n  width: 1px;\n  height: 32px;\n  background-color: var(--gray-num-two);\n}\n\n/*Toggle Switch*/\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n\n/*Hide input box to\n replace with own style*/\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--gray-num-one);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n/*Add white circle for toggle*/\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: 4px;\n  bottom: 4px;\n  background-color: var(--white);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n/*Add box shadow on toggle input*/\ninput:focus + .slider {\n  box-shadow: var(--box-shadow);\n}\n\n/*Toggle Slider*/\ninput:checked + .slider:before {\n  --webkit-transform: translateX(16px);\n  -ms-transform: translate(16px);\n  transform: translate(16px);\n}\n\n/*Round the slider background*/\n.slider.round {\n  border-radius: 34px;\n}\n\n/*Round the slider*/\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/*Moon Icon*/\n#moon-icon {\n  width: 19.99px;\n  height: 20px;\n  margin-left: 8px;\n}\n\n/*Toggle and Moon Icon Group*/\n.toggle-switch-and-moon-icon {\n  display: flex;\n}\n\n/*Toggle and Moon Cover Hover*/\n#moon-icon path:hover {\n  stroke: var(--purple);\n}\n\n.slider:hover {\n  background-color: var(--purple);\n}\n\n/*Align Header Items*/\nheader {\n  margin-top: 20px;\n}\n\n#book-logo {\n  position: relative;\n  right: 30px;\n}\n\n.toggle-switch-and-moon-icon,\n#font-dropdown-menu {\n  position: relative;\n  left: 60px;\n  margin-left: 25px;\n}\n\n#font-dropdown-list {\n  position: absolute;\n}\n\n#divide-line {\n  position: relative;\n  left: 60px;\n  margin-right: -15px;\n}\n\n#main-header-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  right: 20px;\n}\n\n/* Search Bar Input Field*/\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\n/*Add custom icon search bar*/\ninput[type=\"search\"] {\n  appearance: none;\n  width: 327px;\n  height: 48px;\n  border-radius: 16px;\n  background-color: var(--off-white-one);\n  border: 0.5px solid var(--off-white-one);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ");\n  background-repeat: no-repeat;\n  background-position: 95% center;\n  cursor: pointer;\n}\n\n/*Remove default x symbol*/\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  --webkit-appearance: none;\n  appearance: none;\n  opacity: 0;\n}\n\n/*Add border color on active for input field*/\ninput[type=\"search\"]:focus,\n#valid-value{\n  border: 1px solid var(--purple);\n  outline: none;\n}\n\n/*Set Invalid Border Color from JavaScript*/\n#invalid-search-field {\n  border: 1px solid var(--red);\n  outline: none;\n}\n\n#invalid-error-message {\n  color: var(--red);\n  position: relative;\n  top: 5px;\n  right: 40px;\n  width: 244px;\n  height: 24px;\n  font-family: var(--inter-font), var(--static-inter-regular-font);\n  font-size: 14px;\n  line-height: 17px;\n}\n\n/*Dictionary Words*/\n/*Phonetics, noun and noun-line*/\n#phonetic{\n  margin-top: -20px;\n}\n\n#parts-of-speech-and-line-group,\n#parts-of-speech-and-line-group-two{\n  display: flex;\n  justify-content:space-evenly;\n  align-items: center;\n}\n\n/*Audio*/\n#play-icon,\n#play-icon-two{\n  width: 48px;\n  height: 48px;\n}\n\n.word-and-sound,\n.word-and-sound-two{\n  display: flex;\n  justify-content:space-around;\n  align-items: center;\n  gap: 150px;\n}\n\n#play-icon,\n#play-icon-two,\n#style-line,\n#style-line-two\n#style-line-three,\n#style-line-four{\n  display: none;\n}\n\n/*Definitions List*/\n.meaning-text,\n.meaning-text-two{\n  margin-top: -20px;\n  margin-left: 10px;\n}\n\n\nul{\n  list-style: none;\n}\n\nul li:before{\n  content: \"\\2022\";\n  color: var(--purple);\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n\n#def-one, \n#def-two,\n#def-three,\n#def-one-of-two,\n#def-two-of-two,\n#def-three-of-two{\n  margin: 20px;\n}\n\n#def-list,\n#synonyms-text,\n#synonym-one,\n#synonym-two,\n#synonym-three,\n#def-list-two,\n#synonyms-text-two,\n#synonym-one-of-two,\n#synonym-two-of-two,\n#synonym-three-of-two{\n  display: none;\n}\n\n/*Synonyms*/\n#synonyms-text,\n#synonyms-text-two{\n  margin-top: 10px;\n}\n\n#synonym-group,\n#synonym-group-two{\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  gap: 150px;\n}\n\n/*Words Section 2*/\n.vocabulary-section-one{\n  margin-top: 30px;\n}\n\n.vocabulary-section-two{\n  margin-top: -50px;\n}\n\n#style-line-two{\n  margin-top: 40px;\n  margin-bottom: 40px;\n  box-shadow: var(--box-shadow);\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;;EAEd,SAAS;EACT,6CAA6C;;EAE7C,QAAQ;EACR,iCAAiC;EACjC,+DAA+D;EAC/D,yDAAyD;EACzD,aAAa;EACb,qBAAqB;EACrB,mDAAmD;EACnD,wCAAwC;EACxC,YAAY;EACZ,mBAAmB;EACnB,iDAAiD;EACjD,2CAA2C;EAC3C,iCAAiC;EACjC,kDAAkD;AACpD;;AAEA,uBAAuB;AACvB,mBAAmB;AACnB;EACE,0BAA0B;EAC1B;mBACiB,EAAE,mBAAmB;EACtC;kBACgB;EAChB;sBACoB,EAAE,WAAW;EACjC,oBAAoB;AACtB;;AAEA,6BAA6B;AAC7B;EACE,yCAAyC;EACzC;mBACiB,EAAE,kBAAkB;EACrC;kBACgB;EAChB;sBACoB,EAAE,WAAW;EACjC,gBAAgB;AAClB;;AAEA,0BAA0B;AAC1B;EACE,sCAAsC;EACtC;mBACiB,EAAE,kBAAkB;EACrC;kBACgB;EAChB;sBACoB,EAAE,WAAW;EACjC,oBAAoB;AACtB;;AAEA,aAAa;AACb;EACE,oBAAoB;EACpB;mBACiB,EAAE,mBAAmB;EACtC;kBACgB;EAChB;sBACoB,EAAE,WAAW;EACjC,oBAAoB;AACtB;;AAEA,uBAAuB;AACvB;EACE,mCAAmC;EACnC,6DAA6E,EAAE,mBAAmB;EAClG,4DAA2E;EAC3E,gEAA6E,EAAE,WAAW;EAC1F,oBAAoB;AACtB;;AAEA,oBAAoB;AACpB;EACE,gCAAgC;EAChC,6DAA0E,EAAE,mBAAmB;EAC/F,4DAAwE;EACxE,gEAA0E,EAAE,WAAW;EACvF,oBAAoB;AACtB;;AAEA,YAAY;AACZ;EACE,mBAAmB;EACnB,6DAA8E,EAAE,mBAAmB;EACnG,4DAA2E;EAC3E,gEAA8E,EAAE,WAAW;EAC3F,oBAAoB;AACtB;;AAEA,sBAAsB;AACtB;EACE,kCAAkC;EAClC,6DAA0E,EAAE,mBAAmB;EAC/F,4DAAyE;EACzE,gEAA2E,EAAE,WAAW;EACxF,gBAAgB;AAClB;;AAEA,mBAAmB;AACnB;EACE,+BAA+B;EAC/B,6DAAuE,EAAE,mBAAmB;EAC5F,4DAAqE;EACrE,gEAAwE,EAAE,WAAW;EACrF,gBAAgB;AAClB;;AAEA,mBAAmB;AACnB;EACE,0BAA0B;EAC1B;mBACiB,EAAE,mBAAmB;EACtC;kBACgB;EAChB;sBACoB,EAAE,WAAW;EACjC,oBAAoB;AACtB;;AAEA,0BAA0B;AAC1B;EACE,sCAAsC;EACtC,6DAA6E,EAAE,mBAAmB;EAClG,4DAA2E;EAC3E,gEAA8E,EAAE,WAAW;EAC3F,gBAAgB;AAClB;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA,YAAY;AACZ;EACE,cAAc;EACd,YAAY;AACd;;AAEA,QAAQ;AACR;;EAEE,eAAe;EACf,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA,qBAAqB;AACrB;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,aAAa;AACf;;AAEA,2BAA2B;AAC3B;EACE,oBAAoB;AACtB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,aAAa;AACb;EACE,wDAAwD;EACxD,iBAAiB;AACnB;;AAEA;EACE,2DAA2D;EAC3D,iBAAiB;AACnB;;AAEA;EACE,yEAAyE;EACzE,iBAAiB;AACnB;;AAEA,8BAA8B;AAC9B;EACE,UAAU;EACV,YAAY;EACZ,qCAAqC;AACvC;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA;wBACwB;AACxB;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,qCAAqC;EACrC,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA,8BAA8B;AAC9B;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,8BAA8B;EAC9B,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA,iCAAiC;AACjC;EACE,6BAA6B;AAC/B;;AAEA,gBAAgB;AAChB;EACE,oCAAoC;EACpC,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA,8BAA8B;AAC9B;EACE,mBAAmB;AACrB;;AAEA,mBAAmB;AACnB;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,cAAc;EACd,YAAY;EACZ,gBAAgB;AAClB;;AAEA,6BAA6B;AAC7B;EACE,aAAa;AACf;;AAEA,8BAA8B;AAC9B;EACE,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;AACjC;;AAEA,qBAAqB;AACrB;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;;EAEE,kBAAkB;EAClB,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,6BAA6B;AAC7B;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,sCAAsC;EACtC,wCAAwC;EACxC,0DAAyD;EACzD,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;AACjB;;AAEA,0BAA0B;AAC1B;EACE,yBAAyB;EACzB,gBAAgB;EAChB,UAAU;AACZ;;AAEA,6CAA6C;AAC7C;;EAEE,+BAA+B;EAC/B,aAAa;AACf;;AAEA,2CAA2C;AAC3C;EACE,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,gEAAgE;EAChE,eAAe;EACf,iBAAiB;AACnB;;AAEA,mBAAmB;AACnB,gCAAgC;AAChC;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA,QAAQ;AACR;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;EACnB,UAAU;AACZ;;AAEA;;;;;;EAME,aAAa;AACf;;AAEA,mBAAmB;AACnB;;EAEE,iBAAiB;EACjB,iBAAiB;AACnB;;;AAGA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;EACrB,UAAU;EACV,iBAAiB;AACnB;;AAEA;;;;;;EAME,YAAY;AACd;;AAEA;;;;;;;;;;EAUE,aAAa;AACf;;AAEA,WAAW;AACX;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,UAAU;AACZ;;AAEA,kBAAkB;AAClB;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;AAC/B","sourcesContent":[":root {\n  /*Colors*/\n  --black-num-one: #050505;\n  --black-num-two: #1f1f1f;\n  --off-black-one: #2d2d2d;\n  --off-black-two: #3a3a3a;\n  --gray-num-one: #757575;\n  --gray-num-two: #e9e9e9;\n  --off-white-one: #f4f4f4;\n  --white: #ffffff;\n  --purple: #a445ed;\n  --red: #ff5252;\n\n  /*Shadow*/\n  --box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.23);\n\n  /*Fonts*/\n  --inconsolata-font: \"Inconsolata\";\n  --static-inconsolata-regular-font: \"Static Inconsolata Regular\";\n  --static-inconsolata-bold-font: \"Static Inconsolata Bold\";\n  /*Inter Font*/\n  --inter-font: \"Inter\";\n  --static-inter-regular-font: \"Static Inter Regular\";\n  --static-inter-bold: \"Static Inter Bold\";\n  /*Lora Font*/\n  --lora-font: \"Lora\";\n  --lora-static-regular-font: \"Static Lora Regular\";\n  --lora-static-bold-font: \"Static Lora Bold\";\n  --lora-italic-font: \"Lora Italic\";\n  --lora-italic-bold-font: \"Static Lora Bold Italic\";\n}\n\n/*Font Face Typography*/\n/*Inconsolata Font*/\n@font-face {\n  font-family: \"Inconsolata\";\n  src: url(\"../assets/fonts/inconsolata/Inconsolata-VariableFont_wdth\\,wght.woff2\")\n    format(\"woff2\"); /* Modern Browsers*/\n  src: url(\"../assets/fonts/inconsolata/Inconsolata-VariableFont_wdth\\,wght.woff\")\n    format(\"woff\");\n  src: url(\"../assets/fonts/inconsolata/Inconsolata-VariableFont_wdth\\,wght.ttf\")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 200 900;\n}\n\n/*Static Inconsolata Regular*/\n@font-face {\n  font-family: \"Static Inconsolata Regular\";\n  src: url(\"../assets/fonts/inconsolata/static/Inconsolata-Regular.woff2\")\n    format(\"woff2\"); /*Modern Browsers*/\n  src: url(\"../assets/fonts/inconsolata/static/Inconsolata-Regular.woff\")\n    format(\"woff\");\n  src: url(\"../assets/fonts/inconsolata/static/Inconsolata-Regular.ttf\")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 400;\n}\n\n/*Static Inconsolata Bold*/\n@font-face {\n  font-family: \"Static Inconsolata Bold\";\n  src: url(\"../assets/fonts/inconsolata/static/Inconsolata-Bold.woff2\")\n    format(\"woff2\"); /*Modern Browsers*/\n  src: url(\"../assets/fonts/inconsolata/static/Inconsolata-Bold.woff\")\n    format(\"woff\");\n  src: url(\"../assets/fonts/inconsolata/static/Inconsolata-Bold.ttf\")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 600 800;\n}\n\n/*Inter Font*/\n@font-face {\n  font-family: \"Inter\";\n  src: url(\"../assets//fonts/inter/Inter-VariableFont_slnt\\,wght.woff2\")\n    format(\"woff2\"); /* Modern Browsers*/\n  src: url(\"../assets//fonts/inter/Inter-VariableFont_slnt\\,wght.woff\")\n    format(\"woff\");\n  src: url(\"../assets/fonts/inter/Inter-VariableFont_slnt\\,wght.ttf\")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 200 900;\n}\n\n/*Static Inter Regular*/\n@font-face {\n  font-family: \"Static Inter Regular\";\n  src: url(\"../assets//fonts/inter/static/Inter-Regular.woff2\") format(\"woff2\"); /* Modern Browsers*/\n  src: url(\"../assets//fonts/inter/static/Inter-Regular.woff\") format(\"woff\");\n  src: url(\"../assets/fonts/inter/static/Inter-Regular.ttf\") format(\"truetype\"); /*Fallback*/\n  font-weight: 200 900;\n}\n\n/*Static Inter Bold*/\n@font-face {\n  font-family: \"Static Inter Bold\";\n  src: url(\"../assets//fonts/inter/static/Inter-Bold.woff2\") format(\"woff2\"); /* Modern Browsers*/\n  src: url(\"../assets//fonts/inter/static/Inter-Bold.woff\") format(\"woff\");\n  src: url(\"../assets/fonts/inter/static/Inter-Bold.ttf\") format(\"truetype\"); /*Fallback*/\n  font-weight: 200 900;\n}\n\n/*Lora Font*/\n@font-face {\n  font-family: \"Lora\";\n  src: url(\"../assets//fonts/lora/Lora-VariableFont_wght.woff2\") format(\"woff2\"); /* Modern Browsers*/\n  src: url(\"../assets/fonts/lora/Lora-VariableFont_wght.woff\") format(\"woff\");\n  src: url(\"../assets/fonts/lora/Lora-VariableFont_wght.ttf\") format(\"truetype\"); /*Fallback*/\n  font-weight: 400 700;\n}\n\n/*Static Lora Regular*/\n@font-face {\n  font-family: \"Static Lora Regular\";\n  src: url(\"../assets/fonts/lora/static/Lora-Regular.woff2\") format(\"woff2\"); /* Modern Browsers*/\n  src: url(\"../assets//fonts/lora/static/Lora-Regular.woff\") format(\"woff\");\n  src: url(\"../assets/fonts/lora/static/Lora-Regular.ttf\") format(\"truetype\"); /*Fallback*/\n  font-weight: 400;\n}\n\n/*Static Lora Bold*/\n@font-face {\n  font-family: \"Static Lora Bold\";\n  src: url(\"../assets/fonts/lora/static/Lora-Bold.woff2\") format(\"woff2\"); /* Modern Browsers*/\n  src: url(\"../assets/fonts/lora/static/Lora-Bold.woff\") format(\"woff\");\n  src: url(\"../assets/fonts/lora/static/Lora-Bold.ttf\") format(\"truetype\"); /*Fallback*/\n  font-weight: 700;\n}\n\n/*Lora Italic Font*/\n@font-face {\n  font-family: \"Lora Italic\";\n  src: url(\"../assets/fonts/lora/Lora-Italic-VariableFont_wght.woff2\")\n    format(\"woff2\"); /* Modern Browsers*/\n  src: url(\"../assets/fonts/lora/Lora-Italic-VariableFont_wght.woff\")\n    format(\"woff\");\n  src: url(\"../assets/fonts/lora/Lora-Italic-VariableFont_wght.ttf\")\n    format(\"truetype\"); /*Fallback*/\n  font-weight: 400 700;\n}\n\n/*Static Lora Bold Italic*/\n@font-face {\n  font-family: \"Static Lora Bold Italic\";\n  src: url(\"../assets/fonts/lora/static/Lora-BoldItalic.woff2\") format(\"woff2\"); /* Modern Browsers*/\n  src: url(\"../assets/fonts/lora/static/Lora-BoldItalic.woff\") format(\"woff\");\n  src: url(\"../assets/fonts/lora/static/Lora-BoldItalic.ttf\") format(\"truetype\"); /*Fallback*/\n  font-weight: 700;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n}\n\n/*Book Logo*/\n#book-logo {\n  width: 28.05px;\n  height: 32px;\n}\n\n/*Fonts*/\n#font-dropdown-list p,\n#font-choice-btn {\n  font-size: 14px;\n  line-height: 24px;\n  color: var(--off-black-one);\n}\n\n/*Font Dropdown List*/\n#font-dropdown-list p {\n  position: relative;\n  top: 10px;\n  left: 30px;\n  width: 90px;\n  height: 24px;\n  cursor: pointer;\n}\n\n#font-dropdown-list {\n  background-color: var(--white);\n  width: 183px;\n  height: 140px;\n  border-radius: 16px;\n  box-shadow: var(--box-shadow);\n  display: none;\n}\n\n/*Font Dropdown List Hover*/\n#font-dropdown-list p:hover {\n  color: var(--purple);\n}\n\n/*Font Button*/\n#font-choice-btn {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  appearance: none;\n  border: none;\n  background-color: transparent;\n}\n\n#arrow-svg {\n  display: block;\n  padding-left: 20px;\n  padding-top: 8px;\n}\n\n/*Font Types*/\n#sans-serif {\n  font-family: var(--inter-font), var(--static-inter-bold);\n  font-weight: bold;\n}\n\n#serif {\n  font-family: var(--lora-font), var(--lora-static-bold-font);\n  font-weight: bold;\n}\n\n#mono {\n  font-family: var(--inconsolata-font), var(--static-inconsolata-bold-font);\n  font-weight: bold;\n}\n\n/*Add dividing Line on header*/\n#divide-line {\n  width: 1px;\n  height: 32px;\n  background-color: var(--gray-num-two);\n}\n\n/*Toggle Switch*/\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n\n/*Hide input box to\n replace with own style*/\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--gray-num-one);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n/*Add white circle for toggle*/\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: 4px;\n  bottom: 4px;\n  background-color: var(--white);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n/*Add box shadow on toggle input*/\ninput:focus + .slider {\n  box-shadow: var(--box-shadow);\n}\n\n/*Toggle Slider*/\ninput:checked + .slider:before {\n  --webkit-transform: translateX(16px);\n  -ms-transform: translate(16px);\n  transform: translate(16px);\n}\n\n/*Round the slider background*/\n.slider.round {\n  border-radius: 34px;\n}\n\n/*Round the slider*/\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/*Moon Icon*/\n#moon-icon {\n  width: 19.99px;\n  height: 20px;\n  margin-left: 8px;\n}\n\n/*Toggle and Moon Icon Group*/\n.toggle-switch-and-moon-icon {\n  display: flex;\n}\n\n/*Toggle and Moon Cover Hover*/\n#moon-icon path:hover {\n  stroke: var(--purple);\n}\n\n.slider:hover {\n  background-color: var(--purple);\n}\n\n/*Align Header Items*/\nheader {\n  margin-top: 20px;\n}\n\n#book-logo {\n  position: relative;\n  right: 30px;\n}\n\n.toggle-switch-and-moon-icon,\n#font-dropdown-menu {\n  position: relative;\n  left: 60px;\n  margin-left: 25px;\n}\n\n#font-dropdown-list {\n  position: absolute;\n}\n\n#divide-line {\n  position: relative;\n  left: 60px;\n  margin-right: -15px;\n}\n\n#main-header-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  right: 20px;\n}\n\n/* Search Bar Input Field*/\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\n/*Add custom icon search bar*/\ninput[type=\"search\"] {\n  appearance: none;\n  width: 327px;\n  height: 48px;\n  border-radius: 16px;\n  background-color: var(--off-white-one);\n  border: 0.5px solid var(--off-white-one);\n  background-image: url(\"../assets/images/icon-search.svg\");\n  background-repeat: no-repeat;\n  background-position: 95% center;\n  cursor: pointer;\n}\n\n/*Remove default x symbol*/\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  --webkit-appearance: none;\n  appearance: none;\n  opacity: 0;\n}\n\n/*Add border color on active for input field*/\ninput[type=\"search\"]:focus,\n#valid-value{\n  border: 1px solid var(--purple);\n  outline: none;\n}\n\n/*Set Invalid Border Color from JavaScript*/\n#invalid-search-field {\n  border: 1px solid var(--red);\n  outline: none;\n}\n\n#invalid-error-message {\n  color: var(--red);\n  position: relative;\n  top: 5px;\n  right: 40px;\n  width: 244px;\n  height: 24px;\n  font-family: var(--inter-font), var(--static-inter-regular-font);\n  font-size: 14px;\n  line-height: 17px;\n}\n\n/*Dictionary Words*/\n/*Phonetics, noun and noun-line*/\n#phonetic{\n  margin-top: -20px;\n}\n\n#parts-of-speech-and-line-group,\n#parts-of-speech-and-line-group-two{\n  display: flex;\n  justify-content:space-evenly;\n  align-items: center;\n}\n\n/*Audio*/\n#play-icon,\n#play-icon-two{\n  width: 48px;\n  height: 48px;\n}\n\n.word-and-sound,\n.word-and-sound-two{\n  display: flex;\n  justify-content:space-around;\n  align-items: center;\n  gap: 150px;\n}\n\n#play-icon,\n#play-icon-two,\n#style-line,\n#style-line-two\n#style-line-three,\n#style-line-four{\n  display: none;\n}\n\n/*Definitions List*/\n.meaning-text,\n.meaning-text-two{\n  margin-top: -20px;\n  margin-left: 10px;\n}\n\n\nul{\n  list-style: none;\n}\n\nul li:before{\n  content: \"\\2022\";\n  color: var(--purple);\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n\n#def-one, \n#def-two,\n#def-three,\n#def-one-of-two,\n#def-two-of-two,\n#def-three-of-two{\n  margin: 20px;\n}\n\n#def-list,\n#synonyms-text,\n#synonym-one,\n#synonym-two,\n#synonym-three,\n#def-list-two,\n#synonyms-text-two,\n#synonym-one-of-two,\n#synonym-two-of-two,\n#synonym-three-of-two{\n  display: none;\n}\n\n/*Synonyms*/\n#synonyms-text,\n#synonyms-text-two{\n  margin-top: 10px;\n}\n\n#synonym-group,\n#synonym-group-two{\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  gap: 150px;\n}\n\n/*Words Section 2*/\n.vocabulary-section-one{\n  margin-top: 30px;\n}\n\n.vocabulary-section-two{\n  margin-top: -50px;\n}\n\n#style-line-two{\n  margin-top: 40px;\n  margin-bottom: 40px;\n  box-shadow: var(--box-shadow);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf":
/*!*****************************************************************************!*\
  !*** ./src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inconsolata-VariableFont_wdth,wght.ttf";

/***/ }),

/***/ "./src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.woff":
/*!******************************************************************************!*\
  !*** ./src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.woff ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inconsolata-VariableFont_wdth,wght.woff";

/***/ }),

/***/ "./src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.woff2":
/*!*******************************************************************************!*\
  !*** ./src/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.woff2 ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inconsolata-VariableFont_wdth,wght.woff2";

/***/ }),

/***/ "./src/assets/fonts/inconsolata/static/Inconsolata-Bold.ttf":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/inconsolata/static/Inconsolata-Bold.ttf ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inconsolata-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/inconsolata/static/Inconsolata-Bold.woff":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/inconsolata/static/Inconsolata-Bold.woff ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inconsolata-Bold.woff";

/***/ }),

/***/ "./src/assets/fonts/inconsolata/static/Inconsolata-Bold.woff2":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/inconsolata/static/Inconsolata-Bold.woff2 ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inconsolata-Bold.woff2";

/***/ }),

/***/ "./src/assets/fonts/inconsolata/static/Inconsolata-Regular.ttf":
/*!*********************************************************************!*\
  !*** ./src/assets/fonts/inconsolata/static/Inconsolata-Regular.ttf ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inconsolata-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/inconsolata/static/Inconsolata-Regular.woff":
/*!**********************************************************************!*\
  !*** ./src/assets/fonts/inconsolata/static/Inconsolata-Regular.woff ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inconsolata-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/inconsolata/static/Inconsolata-Regular.woff2":
/*!***********************************************************************!*\
  !*** ./src/assets/fonts/inconsolata/static/Inconsolata-Regular.woff2 ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inconsolata-Regular.woff2";

/***/ }),

/***/ "./src/assets/fonts/inter/Inter-VariableFont_slnt,wght.ttf":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/inter/Inter-VariableFont_slnt,wght.ttf ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inter-VariableFont_slnt,wght.ttf";

/***/ }),

/***/ "./src/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inter-VariableFont_slnt,wght.woff";

/***/ }),

/***/ "./src/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff2":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff2 ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inter-VariableFont_slnt,wght.woff2";

/***/ }),

/***/ "./src/assets/fonts/inter/static/Inter-Bold.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/inter/static/Inter-Bold.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inter-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/inter/static/Inter-Bold.woff":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/inter/static/Inter-Bold.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inter-Bold.woff";

/***/ }),

/***/ "./src/assets/fonts/inter/static/Inter-Bold.woff2":
/*!********************************************************!*\
  !*** ./src/assets/fonts/inter/static/Inter-Bold.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inter-Bold.woff2";

/***/ }),

/***/ "./src/assets/fonts/inter/static/Inter-Regular.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/inter/static/Inter-Regular.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inter-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/inter/static/Inter-Regular.woff":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/inter/static/Inter-Regular.woff ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inter-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/inter/static/Inter-Regular.woff2":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/inter/static/Inter-Regular.woff2 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Inter-Regular.woff2";

/***/ }),

/***/ "./src/assets/fonts/lora/Lora-Italic-VariableFont_wght.ttf":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/lora/Lora-Italic-VariableFont_wght.ttf ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-Italic-VariableFont_wght.ttf";

/***/ }),

/***/ "./src/assets/fonts/lora/Lora-Italic-VariableFont_wght.woff":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/lora/Lora-Italic-VariableFont_wght.woff ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-Italic-VariableFont_wght.woff";

/***/ }),

/***/ "./src/assets/fonts/lora/Lora-Italic-VariableFont_wght.woff2":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/lora/Lora-Italic-VariableFont_wght.woff2 ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-Italic-VariableFont_wght.woff2";

/***/ }),

/***/ "./src/assets/fonts/lora/Lora-VariableFont_wght.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/lora/Lora-VariableFont_wght.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-VariableFont_wght.ttf";

/***/ }),

/***/ "./src/assets/fonts/lora/Lora-VariableFont_wght.woff":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/lora/Lora-VariableFont_wght.woff ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-VariableFont_wght.woff";

/***/ }),

/***/ "./src/assets/fonts/lora/Lora-VariableFont_wght.woff2":
/*!************************************************************!*\
  !*** ./src/assets/fonts/lora/Lora-VariableFont_wght.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-VariableFont_wght.woff2";

/***/ }),

/***/ "./src/assets/fonts/lora/static/Lora-Bold.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/lora/static/Lora-Bold.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/lora/static/Lora-Bold.woff":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/lora/static/Lora-Bold.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-Bold.woff";

/***/ }),

/***/ "./src/assets/fonts/lora/static/Lora-Bold.woff2":
/*!******************************************************!*\
  !*** ./src/assets/fonts/lora/static/Lora-Bold.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-Bold.woff2";

/***/ }),

/***/ "./src/assets/fonts/lora/static/Lora-BoldItalic.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/lora/static/Lora-BoldItalic.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-BoldItalic.ttf";

/***/ }),

/***/ "./src/assets/fonts/lora/static/Lora-BoldItalic.woff":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/lora/static/Lora-BoldItalic.woff ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-BoldItalic.woff";

/***/ }),

/***/ "./src/assets/fonts/lora/static/Lora-BoldItalic.woff2":
/*!************************************************************!*\
  !*** ./src/assets/fonts/lora/static/Lora-BoldItalic.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-BoldItalic.woff2";

/***/ }),

/***/ "./src/assets/fonts/lora/static/Lora-Regular.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/lora/static/Lora-Regular.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/lora/static/Lora-Regular.woff":
/*!********************************************************!*\
  !*** ./src/assets/fonts/lora/static/Lora-Regular.woff ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/lora/static/Lora-Regular.woff2":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/lora/static/Lora-Regular.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Lora-Regular.woff2";

/***/ }),

/***/ "./src/assets/images/icon-search.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-search.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-search.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _switch_font_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-font-style */ "./src/scripts/switch-font-style.js");
/* harmony import */ var _dictionary_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary-api */ "./src/scripts/dictionary-api.js");
/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-variables */ "./src/scripts/global-variables.js");








/*FORM VALIDATION*/
/*If searchfield value is not missing, it reverts to valid status*/
_global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.addEventListener("input", function () {
  if (!_global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.validity.valueMissing) {
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.errorSearchMessage.textContent = " ";
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.setAttribute("id", "valid-value");
  }
});

/*Check for regex match and prevent submit on input*/
_global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.addEventListener("input", function () {
  var regex = /^[a-zA-Z]+/g;
  var numRegex = /\d/;
  var specChar = /[$&+,:;=?@#|'<>.-^*()%!{}]/;
  if (!_global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.value.match(regex) || _global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.value.match(numRegex) || _global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.value.match(specChar)) {
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.setAttribute("id", "invalid-search-field");
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.errorSearchMessage.textContent = "Please type only letters!";
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.errorSearchMessage.setAttribute("id", "invalid-error-message");

    /*If there is an attempt to submit form while invalid, prevent sending*/
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.form.addEventListener('submit', function (event) {
      event.preventDefault(); //stops default action
      event.stopPropagation(); //stops further propogation in event/bubbling phases
    });
  } else {
    /*Display words on formsubmit if field value is valid*/
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.form.addEventListener('submit', function (event) {
      event.preventDefault(); //stops default action
      event.stopPropagation(); //stops further propogation in event/bubbling phases
      (0,_dictionary_api__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
  }
});

/*Check if field empty onsubmit*/
_global_variables__WEBPACK_IMPORTED_MODULE_3__.form.addEventListener("submit", function (event) {
  if (_global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.validity.valueMissing) {
    event.preventDefault(); //stops default action
    event.stopPropagation(); //stops further propogation in event/bubbling phases
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.searchField.setAttribute("id", "invalid-search-field");
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.errorSearchMessage.textContent = "Whoops, can't be empty!";
    _global_variables__WEBPACK_IMPORTED_MODULE_3__.errorSearchMessage.setAttribute("id", "invalid-error-message");
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundlea600ded761854de25ba8.js.map