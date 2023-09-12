(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommitButton: () => (/* reexport safe */ _lib_components_Commit__WEBPACK_IMPORTED_MODULE_6__.CommitButton),
/* harmony export */   EthersProviderContext: () => (/* reexport safe */ _lib_components_ethers__WEBPACK_IMPORTED_MODULE_7__.EthersProviderContext),
/* harmony export */   Widget: () => (/* reexport safe */ _lib_components_Widget__WEBPACK_IMPORTED_MODULE_3__.Widget),
/* harmony export */   useAccount: () => (/* reexport safe */ _lib_data_account__WEBPACK_IMPORTED_MODULE_1__.useAccount),
/* harmony export */   useAccountId: () => (/* reexport safe */ _lib_data_account__WEBPACK_IMPORTED_MODULE_1__.useAccountId),
/* harmony export */   useCache: () => (/* reexport safe */ _lib_data_cache__WEBPACK_IMPORTED_MODULE_4__.useCache),
/* harmony export */   useInitNear: () => (/* reexport safe */ _lib_data_near__WEBPACK_IMPORTED_MODULE_2__.useInitNear),
/* harmony export */   useNear: () => (/* reexport safe */ _lib_data_near__WEBPACK_IMPORTED_MODULE_2__.useNear),
/* harmony export */   utils: () => (/* reexport module object */ _lib_data_utils__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/data/account */ "./src/lib/data/account.js");
/* harmony import */ var _lib_data_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/data/near */ "./src/lib/data/near.js");
/* harmony import */ var _lib_components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/Widget */ "./src/lib/components/Widget.js");
/* harmony import */ var _lib_data_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/data/cache */ "./src/lib/data/cache.js");
/* harmony import */ var _lib_data_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/data/utils */ "./src/lib/data/utils.js");
/* harmony import */ var _lib_components_Commit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/Commit */ "./src/lib/components/Commit.js");
/* harmony import */ var _lib_components_ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/components/ethers */ "./src/lib/components/ethers.js");










/***/ }),

/***/ "./src/lib/components/Commit.js":
/*!**************************************!*\
  !*** ./src/lib/components/Commit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommitButton: () => (/* binding */ CommitButton),
/* harmony export */   CommitModal: () => (/* binding */ CommitModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_commitData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/commitData */ "./src/lib/data/commitData.js");
/* harmony import */ var _data_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/utils */ "./src/lib/data/utils.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Markdown */ "./src/lib/components/Markdown.js");
/* harmony import */ var _data_near__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/near */ "./src/lib/data/near.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/cache */ "./src/lib/data/cache.js");
/* harmony import */ var _data_account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/account */ "./src/lib/data/account.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["data", "children", "onClick", "onCommit", "onCancel", "disabled", "widgetSrc", "force"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var jsonMarkdown = function jsonMarkdown(data) {
  var json = JSON.stringify(data, null, 2);
  return "```json\n".concat(json, "\n```");
};
var StorageDomain = {
  page: "commit"
};
var StorageType = {
  WritePermission: "write_permission"
};
var CommitModal = function CommitModal(props) {
  var _commit$deposit;
  var near = (0,_data_near__WEBPACK_IMPORTED_MODULE_5__.useNear)();
  var accountId = (0,_data_account__WEBPACK_IMPORTED_MODULE_8__.useAccountId)();
  var cache = (0,_data_cache__WEBPACK_IMPORTED_MODULE_7__.useCache)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    asyncCommitStarted = _useState2[0],
    setAsyncAsyncCommitStarted = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    extraStorage = _useState4[0],
    setExtraStorage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    commitInProgress = _useState6[0],
    setCommitInProgress = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    lastData = _useState8[0],
    setLastData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    commit = _useState10[0],
    setCommit = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    writePermission = _useState12[0],
    setWritePermission = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    giveWritePermission = _useState14[0],
    setGiveWritePermission = _useState14[1];
  var showIntent = props.show;
  var onHide = props.onHide;
  var onCancel = function onCancel() {
    if (props.onCancel) {
      try {
        props.onCancel();
      } catch (e) {
        console.error(e);
      }
    }
    onHide();
  };
  var data = props.data;
  var force = props.force;
  var widgetSrc = props.widgetSrc;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (widgetSrc) {
      setWritePermission(null);
      cache.asyncLocalStorageGet(StorageDomain, {
        widgetSrc: widgetSrc,
        accountId: accountId,
        type: StorageType.WritePermission
      }).then(function (wp) {
        return setWritePermission(wp);
      });
    } else {
      setWritePermission(false);
    }
  }, [widgetSrc, accountId, cache, showIntent]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setGiveWritePermission(writePermission !== false);
  }, [writePermission]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (commitInProgress || !showIntent || !accountId || !near) {
      return;
    }
    var jdata = JSON.stringify(data !== null && data !== void 0 ? data : null);
    if (!force && jdata === lastData) {
      return;
    }
    setLastData(jdata);
    setCommit(null);
    (0,_data_commitData__WEBPACK_IMPORTED_MODULE_1__.prepareCommit)(near, accountId, data, force).then(setCommit);
  }, [commitInProgress, data, lastData, force, near, accountId, showIntent]);
  var onCommit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var newWritePermission, deposit;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setCommitInProgress(true);
            newWritePermission = giveWritePermission && (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.computeWritePermission)(writePermission, commit.data[accountId]);
            cache.localStorageSet(StorageDomain, {
              widgetSrc: widgetSrc,
              accountId: accountId,
              type: StorageType.WritePermission
            }, newWritePermission);
            setWritePermission(newWritePermission);
            deposit = commit.deposit.add(_data_utils__WEBPACK_IMPORTED_MODULE_2__.StorageCostPerByte.mul(extraStorage));
            if (!commit.permissionGranted) {
              _context.next = 10;
              break;
            }
            _context.next = 8;
            return (0,_data_commitData__WEBPACK_IMPORTED_MODULE_1__.asyncCommit)(near, commit.data, deposit);
          case 8:
            _context.next = 16;
            break;
          case 10:
            if (!(accountId === near.accountId)) {
              _context.next = 15;
              break;
            }
            _context.next = 13;
            return (0,_data_commitData__WEBPACK_IMPORTED_MODULE_1__.requestPermissionAndCommit)(near, commit.data, deposit);
          case 13:
            _context.next = 16;
            break;
          case 15:
            // No permission for another account and not the owner. Can't commit.
            alert("No permission to commit under given account");
          case 16:
            setCommit(null);
            setLastData(null);
            if (props.onCommit) {
              try {
                props.onCommit(commit.data);
              } catch (e) {
                console.error(e);
              }
            }
            cache.invalidateCache(near, commit.data);
            onHide();
            setCommitInProgress(false);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onCommit() {
      return _ref.apply(this, arguments);
    };
  }();
  var cantCommit = commit && !commit.permissionGranted && accountId !== near.accountId;
  if (!commitInProgress && !cantCommit && !asyncCommitStarted && commit && showIntent && writePermission && commit.data) {
    var deposit = commit.deposit.add(_data_utils__WEBPACK_IMPORTED_MODULE_2__.StorageCostPerByte.mul(extraStorage));
    if (deposit.eq(0) && commit.permissionGranted) {
      if (JSON.stringify((0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.computeWritePermission)(writePermission, commit.data[accountId])) === JSON.stringify(writePermission)) {
        setAsyncAsyncCommitStarted(true);
        onCommit().then(function () {
          return setAsyncAsyncCommitStarted(false);
        });
      }
    }
  }
  var show = !!commit && showIntent && !asyncCommitStarted && writePermission !== null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default()), {
    size: "xl",
    centered: true,
    scrollable: true,
    show: show,
    onHide: onCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Header), {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Title), null, "Saving data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Body), null, cantCommit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Can't commit, because the account ", near.accountId, " doesn't have permission to write under pretended account ", accountId)) : commit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, commit.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {
    text: jsonMarkdown(commit.data)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "No new data to save")), commit.data && (commit === null || commit === void 0 || (_commit$deposit = commit.deposit) === null || _commit$deposit === void 0 ? void 0 : _commit$deposit.gt(0)) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Required storage deposit", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "text-secondary"
  }, "(can be recovered later)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-2"
  }, commit.deposit.div(_data_utils__WEBPACK_IMPORTED_MODULE_2__.StorageCostPerByte).toFixed(0), " bytes =", " ", (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.displayNear)(commit.deposit)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Optional storage deposit", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "text-secondary"
  }, "(can be used to avoid future wallet TX confirmation)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ToggleButtonGroup, {
    type: "radio",
    name: "storageDeposit",
    value: extraStorage,
    onChange: setExtraStorage,
    disabled: commitInProgress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ToggleButton, {
    id: "esd-0",
    variant: "outline-success",
    value: 0
  }, "No Deposit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ToggleButton, {
    id: "esd-5000",
    variant: "outline-success",
    value: 5000
  }, "0.05 NEAR (5Kb)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ToggleButton, {
    id: "esd-20000",
    variant: "outline-success",
    value: 20000
  }, "0.2 NEAR (20Kb)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ToggleButton, {
    id: "esd-100000",
    variant: "outline-success",
    value: 100000
  }, "1 NEAR (100Kb)")))), !cantCommit && widgetSrc && commit.data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-check form-switch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    role: "switch",
    id: "dont-ask-for-widget",
    checked: giveWritePermission,
    onChange: function onChange(e) {
      setGiveWritePermission(e.target.checked);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-check-label",
    htmlFor: "dont-ask-for-widget"
  }, "Don't ask again for saving similar data by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-monospace"
  }, widgetSrc)))) : _data_utils__WEBPACK_IMPORTED_MODULE_2__.Loading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Footer), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-success",
    disabled: !(commit !== null && commit !== void 0 && commit.data) || commitInProgress || cantCommit,
    onClick: function onClick(e) {
      e.preventDefault();
      onCommit();
    }
  }, commitInProgress && _data_utils__WEBPACK_IMPORTED_MODULE_2__.Loading, " Save Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-secondary",
    onClick: onCancel,
    disabled: commitInProgress
  }, "Close")));
};
var CommitButton = function CommitButton(props) {
  var accountId = (0,_data_account__WEBPACK_IMPORTED_MODULE_8__.useAccountId)();
  var data = props.data,
    children = props.children,
    _onClick = props.onClick,
    onCommit = props.onCommit,
    onCancel = props.onCancel,
    disabled = props.disabled,
    widgetSrc = props.widgetSrc,
    force = props.force,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    computedData = _useState16[0],
    setComputedData = _useState16[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, rest, {
    disabled: disabled || !data || !!computedData || !accountId,
    onClick: function onClick(e) {
      e.preventDefault();
      setComputedData(typeof data === "function" ? data() : data);
      if (_onClick) {
        _onClick();
      }
    }
  }), !!computedData && _data_utils__WEBPACK_IMPORTED_MODULE_2__.Loading, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CommitModal, {
    show: !!computedData,
    widgetSrc: widgetSrc,
    data: computedData,
    force: force,
    onHide: function onHide() {
      return setComputedData(null);
    },
    onCancel: onCancel,
    onCommit: onCommit
  }));
};

/***/ }),

/***/ "./src/lib/components/ConfirmTransactions.js":
/*!***************************************************!*\
  !*** ./src/lib/components/ConfirmTransactions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Markdown */ "./src/lib/components/Markdown.js");
/* harmony import */ var _data_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/utils */ "./src/lib/data/utils.js");
/* harmony import */ var _data_near__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/near */ "./src/lib/data/near.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-uuid */ "react-uuid");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var jsonMarkdown = function jsonMarkdown(data) {
  var json = JSON.stringify(data, null, 2);
  return "```json\n".concat(json, "\n```");
};
function ConfirmTransactions(props) {
  var gkey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(react_uuid__WEBPACK_IMPORTED_MODULE_5___default()());
  var near = (0,_data_near__WEBPACK_IMPORTED_MODULE_4__.useNear)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var onHide = props.onHide;
  var transactions = props.transactions;
  var show = !!transactions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default()), {
    size: "xl",
    centered: true,
    scrollable: true,
    show: show,
    onHide: onHide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default().Header), {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default().Title), null, "Confirm Transaction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default().Body), null, transactions && transactions.map(function (transaction, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: "".concat(gkey, "-").concat(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Transaction #", i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-secondary"
    }, "Contract ID: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-monospace"
    }, transaction.contractName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-secondary"
    }, "Method name: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-monospace"
    }, transaction.methodName)), transaction.deposit && transaction.deposit.gt(0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-secondary"
    }, "Deposit: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-monospace"
    }, (0,_data_utils__WEBPACK_IMPORTED_MODULE_3__.displayNear)(transaction.deposit))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-secondary"
    }, "Gas: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-monospace"
    }, (0,_data_utils__WEBPACK_IMPORTED_MODULE_3__.displayGas)(transaction.gas))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Markdown__WEBPACK_IMPORTED_MODULE_2__.Markdown, {
      text: jsonMarkdown(transaction.args)
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default().Footer), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-success",
    disabled: loading,
    onClick: function onClick(e) {
      e.preventDefault();
      setLoading(true);
      near.sendTransactions(transactions).then(function () {
        setLoading(false);
        onHide();
      });
    }
  }, loading && _data_utils__WEBPACK_IMPORTED_MODULE_3__.Loading, " Confirm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-secondary",
    onClick: onHide,
    disabled: loading
  }, "Close")));
}

/***/ }),

/***/ "./src/lib/components/Markdown.js":
/*!****************************************!*\
  !*** ./src/lib/components/Markdown.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Markdown: () => (/* binding */ Markdown)
/* harmony export */ });
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark-gfm */ "remark-gfm");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ "react-syntax-highlighter/dist/esm/styles/prism");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _remark_mentions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remark/mentions */ "./src/lib/components/remark/mentions.js");
/* harmony import */ var _remark_hashtags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remark/hashtags */ "./src/lib/components/remark/hashtags.js");
var _excluded = ["node", "children"],
  _excluded2 = ["node"],
  _excluded3 = ["node"],
  _excluded4 = ["node"],
  _excluded5 = ["node"],
  _excluded6 = ["node", "inline", "className", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var Markdown = function Markdown(props) {
  var onLinkClick = props.onLinkClick,
    text = props.text,
    onMention = props.onMention,
    onHashtag = props.onHashtag,
    syntaxHighlighterProps = props.syntaxHighlighterProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
    plugins: [],
    rehypePlugins: [],
    remarkPlugins: [(remark_gfm__WEBPACK_IMPORTED_MODULE_0___default()), _remark_mentions__WEBPACK_IMPORTED_MODULE_5__["default"], _remark_hashtags__WEBPACK_IMPORTED_MODULE_6__["default"]],
    children: text,
    components: {
      strong: function strong(_ref) {
        var _node$properties, _node$properties3;
        var node = _ref.node,
          children = _ref.children,
          props = _objectWithoutProperties(_ref, _excluded);
        if (onMention && (_node$properties = node.properties) !== null && _node$properties !== void 0 && _node$properties.accountId) {
          var _node$properties2;
          return onMention((_node$properties2 = node.properties) === null || _node$properties2 === void 0 ? void 0 : _node$properties2.accountId);
        } else if (onHashtag && (_node$properties3 = node.properties) !== null && _node$properties3 !== void 0 && _node$properties3.hashtag) {
          var _node$properties4;
          return onHashtag((_node$properties4 = node.properties) === null || _node$properties4 === void 0 ? void 0 : _node$properties4.hashtag);
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("strong", props, children);
      },
      a: function a(_ref2) {
        var node = _ref2.node,
          props = _objectWithoutProperties(_ref2, _excluded2);
        return onLinkClick ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", _extends({
          onClick: onLinkClick
        }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", _extends({
          target: "_blank"
        }, props));
      },
      img: function img(_ref3) {
        var node = _ref3.node,
          props = _objectWithoutProperties(_ref3, _excluded3);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", _extends({
          className: "img-fluid"
        }, props));
      },
      blockquote: function blockquote(_ref4) {
        var node = _ref4.node,
          props = _objectWithoutProperties(_ref4, _excluded4);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("blockquote", _extends({
          className: "blockquote"
        }, props));
      },
      table: function table(_ref5) {
        var node = _ref5.node,
          props = _objectWithoutProperties(_ref5, _excluded5);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("table", _extends({
          className: "table table-striped"
        }, props));
      },
      code: function code(_ref6) {
        var node = _ref6.node,
          inline = _ref6.inline,
          className = _ref6.className,
          children = _ref6.children,
          props = _objectWithoutProperties(_ref6, _excluded6);
        var match = /language-(\w+)/.exec(className || "");
        var _ref7 = syntaxHighlighterProps !== null && syntaxHighlighterProps !== void 0 ? syntaxHighlighterProps : {},
          wrapLines = _ref7.wrapLines,
          lineProps = _ref7.lineProps,
          showLineNumbers = _ref7.showLineNumbers,
          lineNumberStyle = _ref7.lineNumberStyle;
        return !inline && match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__.Prism, _extends({
          children: String(children).replace(/\n$/, ""),
          style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_3__.tomorrow,
          language: match[1],
          PreTag: "div",
          wrapLines: wrapLines,
          lineProps: lineProps,
          showLineNumbers: showLineNumbers,
          lineNumberStyle: lineNumberStyle
        }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", _extends({
          className: className
        }, props), children);
      }
    }
  });
};

/***/ }),

/***/ "./src/lib/components/SecureIframe.js":
/*!********************************************!*\
  !*** ./src/lib/components/SecureIframe.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SecureIframe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var iframe_resizer_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! iframe-resizer-react */ "iframe-resizer-react");
/* harmony import */ var iframe_resizer_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(iframe_resizer_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/utils */ "./src/lib/data/utils.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function SecureIframe(allProps) {
  var className = allProps.className,
    id = allProps.id,
    style = allProps.style,
    src = allProps.src,
    srcDoc = allProps.srcDoc,
    title = allProps.title,
    message = allProps.message,
    onLoad = allProps.onLoad,
    onMessage = allProps.onMessage,
    iframeResizer = allProps.iframeResizer;
  var usedProps = {
    className: className,
    id: id,
    style: style,
    src: src,
    srcDoc: srcDoc,
    title: title
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    prevMessage = _useState4[0],
    setPrevMessage = _useState4[1];
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  var sandbox = "allow-scripts";
  var returnIframeResizerProps = function returnIframeResizerProps() {
    var result = _objectSpread(_objectSpread({}, usedProps), {}, {
      style: style !== null && style !== void 0 ? style : {
        width: "1px",
        minWidth: "100%"
      },
      checkOrigin: false
    });
    var allIframeResizerProps = _typeof(iframeResizer) === "object" ? iframeResizer : {};
    var allowedIframeResizerProps = ["log", "autoResize", "bodyBackground", "bodyMargin", "bodyPadding", "inPageLinks", "heightCalculationMethod", "maxHeight", "maxWidth", "minHeight", "minWidth", "minWidth", "resizeFrom", "scrolling", "sizeHeight", "sizeWidth", "tolerance", "widthCalculationMethod"];
    Object.keys(allIframeResizerProps).forEach(function (key) {
      if (allowedIframeResizerProps.includes(key)) {
        result[key] = allIframeResizerProps[key];
      }
    });
    if (allIframeResizerProps.onResized) {
      result.onResized = function (_ref) {
        var height = _ref.height,
          width = _ref.width;
        allIframeResizerProps.onResized({
          height: height,
          width: width
        });
      };
    }
    return result;
  };
  var onMessageEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (event.source !== ref.current.contentWindow) {
      return;
    }
    onMessage && onMessage(event.data);
  }, [ref, onMessage]);
  var onLoadHandler = function onLoadHandler() {
    setLoaded(true);
    onLoad && onLoad();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener("message", onMessageEvent, false);
    return function () {
      window.removeEventListener("message", onMessageEvent, false);
    };
  }, [onMessageEvent]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ref.current && loaded && !(0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(prevMessage, message)) {
      setPrevMessage((0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(message));
      if (iframeResizer) {
        ref.current.sendMessage(message, "*");
        return;
      }
      ref.current.contentWindow.postMessage(message, "*");
    }
  }, [message, ref, loaded, prevMessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoaded(false);
  }, [src, srcDoc]);
  if (iframeResizer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((iframe_resizer_react__WEBPACK_IMPORTED_MODULE_1___default()), _extends({}, returnIframeResizerProps(), {
      forwardRef: ref,
      sandbox: sandbox,
      onLoad: onLoadHandler
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", _extends({}, usedProps, {
    ref: ref,
    sandbox: sandbox,
    onLoad: onLoadHandler
  }));
}

/***/ }),

/***/ "./src/lib/components/Widget.js":
/*!**************************************!*\
  !*** ./src/lib/components/Widget.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Widget: () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_near__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/near */ "./src/lib/data/near.js");
/* harmony import */ var _ConfirmTransactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmTransactions */ "./src/lib/components/ConfirmTransactions.js");
/* harmony import */ var _vm_vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vm/vm */ "./src/lib/vm/vm.js");
/* harmony import */ var _data_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/utils */ "./src/lib/data/utils.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-error-boundary */ "react-error-boundary");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/cache */ "./src/lib/data/cache.js");
/* harmony import */ var _Commit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Commit */ "./src/lib/components/Commit.js");
/* harmony import */ var _data_account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/account */ "./src/lib/data/account.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-uuid */ "react-uuid");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_typeahead_types_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap-typeahead/types/utils */ "react-bootstrap-typeahead/types/utils");
/* harmony import */ var react_bootstrap_typeahead_types_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_typeahead_types_utils__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ethers */ "./src/lib/components/ethers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["src", "code", "depth", "config", "props"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }













var computeSrcOrCode = function computeSrcOrCode(src, code, configs) {
  var srcOrCode = src ? {
    src: src
  } : code ? {
    code: code
  } : null;
  var _iterator = _createForOfIteratorHelper(configs || []),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _srcOrCode;
      var config = _step.value;
      if ((_srcOrCode = srcOrCode) !== null && _srcOrCode !== void 0 && _srcOrCode.src) {
        var _value;
        var _src = srcOrCode.src;
        var value = (0,_data_utils__WEBPACK_IMPORTED_MODULE_4__.isObject)(config === null || config === void 0 ? void 0 : config.redirectMap) && config.redirectMap[_src];
        if (!value) {
          try {
            value = (0,react_bootstrap_typeahead_types_utils__WEBPACK_IMPORTED_MODULE_11__.isFunction)(config === null || config === void 0 ? void 0 : config.redirect) && config.redirect(_src);
          } catch (_unused) {}
        }
        if ((0,_data_utils__WEBPACK_IMPORTED_MODULE_4__.isString)(value)) {
          srcOrCode = {
            src: value
          };
        } else if ((0,_data_utils__WEBPACK_IMPORTED_MODULE_4__.isString)((_value = value) === null || _value === void 0 ? void 0 : _value.code)) {
          return {
            code: value.code
          };
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return srcOrCode;
};
var Widget = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, forwardedRef) {
  var propsSrc = props.src,
    propsCode = props.code,
    depth = props.depth,
    propsConfig = props.config,
    propsProps = props.props,
    forwardedProps = _objectWithoutProperties(props, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    nonce = _useState2[0],
    setNonce = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    code = _useState4[0],
    setCode = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    src = _useState6[0],
    setSrc = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState8 = _slicedToArray(_useState7, 2),
    state = _useState8[0],
    setState = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    cacheNonce = _useState10[0],
    setCacheNonce = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    context = _useState12[0],
    setContext = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    vm = _useState14[0],
    setVm = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    transactions = _useState16[0],
    setTransactions = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    commitRequest = _useState18[0],
    setCommitRequest = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    prevVmInput = _useState20[0],
    setPrevVmInput = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    configs = _useState22[0],
    setConfigs = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    srcOrCode = _useState24[0],
    setSrcOrCode = _useState24[1];
  var ethersProviderContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ethers__WEBPACK_IMPORTED_MODULE_12__.EthersProviderContext);
  var cache = (0,_data_cache__WEBPACK_IMPORTED_MODULE_6__.useCache)();
  var near = (0,_data_near__WEBPACK_IMPORTED_MODULE_1__.useNear)();
  var accountId = (0,_data_account__WEBPACK_IMPORTED_MODULE_8__.useAccountId)();
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    element = _useState26[0],
    setElement = _useState26[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var newConfigs = propsConfig ? Array.isArray(propsConfig) ? propsConfig : [propsConfig] : [];
    if (!(0,_data_utils__WEBPACK_IMPORTED_MODULE_4__.deepEqual)(newConfigs, configs)) {
      setConfigs(newConfigs);
    }
  }, [propsConfig, configs]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var computedSrcOrCode = computeSrcOrCode(propsSrc, propsCode, configs);
    if (!(0,_data_utils__WEBPACK_IMPORTED_MODULE_4__.deepEqual)(computedSrcOrCode, srcOrCode)) {
      setSrcOrCode(computedSrcOrCode);
    }
  }, [propsSrc, propsCode, configs, srcOrCode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!near) {
      return;
    }
    if (srcOrCode !== null && srcOrCode !== void 0 && srcOrCode.src) {
      var _src2 = srcOrCode.src;
      var _src2$split = _src2.split("@"),
        _src2$split2 = _slicedToArray(_src2$split, 2),
        srcPath = _src2$split2[0],
        version = _src2$split2[1];
      var _code = cache.socialGet(near, srcPath.toString(), false, version,
      // may be undefined, meaning `latest`
      undefined, function () {
        setNonce(nonce + 1);
      });
      setCode(_code);
      setSrc(_src2);
    } else if (srcOrCode !== null && srcOrCode !== void 0 && srcOrCode.code) {
      setCode(srcOrCode.code);
      setSrc(null);
    }
  }, [near, srcOrCode, nonce]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setVm(null);
    setElement(null);
    if (!code) {
      if (code === undefined) {
        setElement( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "alert alert-danger"
        }, "Source code for \"", src, "\" is not found"));
      }
    }
  }, [code, src]);
  var confirmTransactions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (transactions) {
    if (!near || !transactions || transactions.length === 0) {
      return null;
    }
    transactions = transactions.map(function (t) {
      return {
        contractName: t.contractName,
        methodName: t.methodName,
        args: t.args || {},
        deposit: t.deposit ? big_js__WEBPACK_IMPORTED_MODULE_9___default()(t.deposit) : big_js__WEBPACK_IMPORTED_MODULE_9___default()(0),
        gas: t.gas ? big_js__WEBPACK_IMPORTED_MODULE_9___default()(t.gas) : _data_utils__WEBPACK_IMPORTED_MODULE_4__.TGas.mul(30)
      };
    });
    console.log("confirm txs", transactions);
    setTransactions(transactions);
  }, [near]);
  var requestCommit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (commitRequest) {
    if (!near) {
      return null;
    }
    console.log("commit requested", commitRequest);
    setCommitRequest(commitRequest);
  }, [near]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!near || !code) {
      return;
    }
    setState(undefined);
    var vm = new _vm_vm__WEBPACK_IMPORTED_MODULE_3__["default"]({
      near: near,
      rawCode: code,
      setReactState: setState,
      cache: cache,
      refreshCache: function refreshCache() {
        setCacheNonce(function (cacheNonce) {
          return cacheNonce + 1;
        });
      },
      confirmTransactions: confirmTransactions,
      depth: depth,
      widgetSrc: src,
      requestCommit: requestCommit,
      version: react_uuid__WEBPACK_IMPORTED_MODULE_10___default()(),
      widgetConfigs: configs,
      ethersProviderContext: ethersProviderContext
    });
    setVm(vm);
    return function () {
      vm.stop();
    };
  }, [src, near, code, depth, requestCommit, confirmTransactions, configs, ethersProviderContext]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!near) {
      return;
    }
    setContext({
      loading: false,
      accountId: accountId !== null && accountId !== void 0 ? accountId : null,
      widgetSrc: src,
      networkId: near.config.networkId
    });
  }, [near, accountId, src]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (!vm) {
      return;
    }
    var vmInput = {
      props: propsProps || {},
      context: context,
      state: state,
      cacheNonce: cacheNonce,
      version: vm.version,
      forwardedProps: _objectSpread(_objectSpread({}, forwardedProps), {}, {
        ref: forwardedRef
      })
    };
    if ((0,_data_utils__WEBPACK_IMPORTED_MODULE_4__.deepEqual)(vmInput, prevVmInput)) {
      return;
    }
    setPrevVmInput((0,_data_utils__WEBPACK_IMPORTED_MODULE_4__.deepCopy)(vmInput));
    try {
      var _vm$renderCode;
      setElement((_vm$renderCode = vm.renderCode(vmInput)) !== null && _vm$renderCode !== void 0 ? _vm$renderCode : "Execution failed");
    } catch (e) {
      setElement( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "alert alert-danger"
      }, "Execution error:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, e.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, e.stack)));
      console.error(e);
    }
  }, [vm, propsProps, context, state, cacheNonce, prevVmInput, forwardedRef, forwardedProps]);
  return element !== null && element !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_5__.ErrorBoundary, {
    FallbackComponent: _data_utils__WEBPACK_IMPORTED_MODULE_4__.ErrorFallback,
    onReset: function onReset() {
      setElement(null);
    },
    resetKeys: [element]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, element, transactions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConfirmTransactions__WEBPACK_IMPORTED_MODULE_2__["default"], {
    transactions: transactions,
    onHide: function onHide() {
      return setTransactions(null);
    }
  }), commitRequest && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Commit__WEBPACK_IMPORTED_MODULE_7__.CommitModal, {
    show: true,
    widgetSrc: src,
    data: commitRequest.data,
    force: commitRequest.force,
    onHide: function onHide() {
      return setCommitRequest(null);
    },
    onCommit: commitRequest.onCommit,
    onCancel: commitRequest.onCancel
  }))) : _data_utils__WEBPACK_IMPORTED_MODULE_4__.Loading;
});

/***/ }),

/***/ "./src/lib/components/ethers.js":
/*!**************************************!*\
  !*** ./src/lib/components/ethers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EthersProviderContext: () => (/* binding */ EthersProviderContext),
/* harmony export */   Web3ConnectButton: () => (/* binding */ Web3ConnectButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EthersProviderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var Web3ConnectButton = function Web3ConnectButton(props) {
  var _props$connectingLabe, _props$disconnectLabe, _props$connectLabel;
  var ethersProviderContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EthersProviderContext);
  var _ref = ethersProviderContext !== null && ethersProviderContext !== void 0 && ethersProviderContext.useConnectWallet ? ethersProviderContext === null || ethersProviderContext === void 0 ? void 0 : ethersProviderContext.useConnectWallet() : [{}],
    _ref2 = _slicedToArray(_ref, 3),
    _ref2$ = _ref2[0],
    wallet = _ref2$.wallet,
    connecting = _ref2$.connecting,
    connect = _ref2[1],
    disconnect = _ref2[2];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ".concat(props.className, " ").concat(connecting || wallet ? "btn-outline-secondary" : "btn-outline-primary"),
    disabled: (wallet ? !disconnect : !connect) || connecting,
    onClick: function onClick() {
      return wallet ? disconnect === null || disconnect === void 0 ? void 0 : disconnect(wallet) : connect === null || connect === void 0 ? void 0 : connect();
    }
  }, connecting ? (_props$connectingLabe = props.connectingLabel) !== null && _props$connectingLabe !== void 0 ? _props$connectingLabe : "Connecting" : wallet ? (_props$disconnectLabe = props.disconnectLabel) !== null && _props$disconnectLabe !== void 0 ? _props$disconnectLabe : "Disconnect Web3 Wallet" : (_props$connectLabel = props.connectLabel) !== null && _props$connectLabel !== void 0 ? _props$connectLabel : "Connect Web3 Wallet");
};

/***/ }),

/***/ "./src/lib/components/remark/hashtags.js":
/*!***********************************************!*\
  !*** ./src/lib/components/remark/hashtags.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hashtags)
/* harmony export */ });
/* harmony import */ var mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-find-and-replace */ "mdast-util-find-and-replace");
/* harmony import */ var mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__);

var hashtagRegex = /#(\w+)/gi;
function hashtags() {
  function replace(value, hashtag, match) {
    if (/[\w`]/.test(match.input.charAt(match.index - 1)) || /[/\w`]/.test(match.input.charAt(match.index + value.length))) {
      return false;
    }
    var node = {
      type: "text",
      value: value
    };
    node = {
      type: "strong",
      children: [node],
      data: {
        hProperties: {
          hashtag: hashtag
        }
      }
    };
    return node;
  }
  function transform(markdownAST) {
    (0,mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__.findAndReplace)(markdownAST, hashtagRegex, replace);
    return markdownAST;
  }
  return transform;
}

/***/ }),

/***/ "./src/lib/components/remark/mentions.js":
/*!***********************************************!*\
  !*** ./src/lib/components/remark/mentions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mentions)
/* harmony export */ });
/* harmony import */ var mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-find-and-replace */ "mdast-util-find-and-replace");
/* harmony import */ var mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__);

var mentionRegex = /@((?:(?:[a-z\d]+[-_])*[a-z\d]+\.)*(?:[a-z\d]+[-_])*[a-z\d]+)/gi;
function mentions() {
  function replace(value, username, match) {
    if (/[\w`]/.test(match.input.charAt(match.index - 1)) || /[/\w`]/.test(match.input.charAt(match.index + value.length)) || username.length < 2 || username.length > 64) {
      return false;
    }
    var node = {
      type: "text",
      value: value
    };
    node = {
      type: "strong",
      children: [node],
      data: {
        hProperties: {
          accountId: username
        }
      }
    };
    return node;
  }
  function transform(markdownAST) {
    (0,mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__.findAndReplace)(markdownAST, mentionRegex, replace);
    return markdownAST;
  }
  return transform;
}

/***/ }),

/***/ "./src/lib/data/account.js":
/*!*********************************!*\
  !*** ./src/lib/data/account.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LsKey: () => (/* binding */ LsKey),
/* harmony export */   useAccount: () => (/* binding */ useAccount),
/* harmony export */   useAccountId: () => (/* binding */ useAccountId)
/* harmony export */ });
/* harmony import */ var react_singleton_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-singleton-hook */ "react-singleton-hook");
/* harmony import */ var react_singleton_hook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_singleton_hook__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./near */ "./src/lib/data/near.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! local-storage */ "local-storage");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! near-api-js */ "near-api-js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _ls$get, _ls$get2, _ref, _ls$get3;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var LsKey = "near-social-vm:v01:";
var LsKeyAccountId = LsKey + ":accountId:";
var LsKeyPretendAccountId = LsKey + ":pretendAccountId:";
var defaultAccount = {
  loading: true,
  signedAccountId: (_ls$get = local_storage__WEBPACK_IMPORTED_MODULE_3___default().get(LsKeyAccountId)) !== null && _ls$get !== void 0 ? _ls$get : undefined,
  pretendAccountId: (_ls$get2 = local_storage__WEBPACK_IMPORTED_MODULE_3___default().get(LsKeyPretendAccountId)) !== null && _ls$get2 !== void 0 ? _ls$get2 : undefined,
  accountId: (_ref = (_ls$get3 = local_storage__WEBPACK_IMPORTED_MODULE_3___default().get(LsKeyPretendAccountId)) !== null && _ls$get3 !== void 0 ? _ls$get3 : local_storage__WEBPACK_IMPORTED_MODULE_3___default().get(LsKeyAccountId)) !== null && _ref !== void 0 ? _ref : undefined,
  state: null,
  near: null
};
function updateAccount(_x, _x2) {
  return _updateAccount.apply(this, arguments);
}
function _updateAccount() {
  _updateAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(near, walletState) {
    var _walletState, _walletState$accounts, _walletState2;
    var selector, wallet, _walletState3, hereKeystore, _walletState4;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          near.connectedContractId = (_walletState = walletState) === null || _walletState === void 0 || (_walletState = _walletState.contract) === null || _walletState === void 0 ? void 0 : _walletState.contractId;
          if (!(near.connectedContractId && near.connectedContractId !== near.config.contractName)) {
            _context5.next = 12;
            break;
          }
          _context5.next = 4;
          return near.selector;
        case 4:
          selector = _context5.sent;
          _context5.next = 7;
          return selector.wallet();
        case 7:
          wallet = _context5.sent;
          _context5.next = 10;
          return wallet.signOut();
        case 10:
          near.connectedContractId = null;
          walletState = selector.store.getState();
        case 12:
          near.accountId = (_walletState$accounts = (_walletState2 = walletState) === null || _walletState2 === void 0 || (_walletState2 = _walletState2.accounts) === null || _walletState2 === void 0 || (_walletState2 = _walletState2[0]) === null || _walletState2 === void 0 ? void 0 : _walletState2.accountId) !== null && _walletState$accounts !== void 0 ? _walletState$accounts : null;
          if (near.accountId) {
            near.publicKey = null;
            try {
              if (((_walletState3 = walletState) === null || _walletState3 === void 0 ? void 0 : _walletState3.selectedWalletId) === "here-wallet") {
                hereKeystore = local_storage__WEBPACK_IMPORTED_MODULE_3___default().get("herewallet:keystore");
                near.publicKey = near_api_js__WEBPACK_IMPORTED_MODULE_4__.KeyPair.fromString(hereKeystore[near.config.networkId].accounts[near.accountId]).getPublicKey();
              }
            } catch (e) {
              console.error(e);
            }
            if (!near.publicKey) {
              try {
                near.publicKey = near_api_js__WEBPACK_IMPORTED_MODULE_4__.KeyPair.fromString(local_storage__WEBPACK_IMPORTED_MODULE_3___default().get(((_walletState4 = walletState) === null || _walletState4 === void 0 ? void 0 : _walletState4.selectedWalletId) === "meteor-wallet" ? "_meteor_wallet".concat(near.accountId, ":").concat(near.config.networkId) : "near-api-js:keystore:".concat(near.accountId, ":").concat(near.config.networkId))).getPublicKey();
              } catch (e) {
                console.error(e);
              }
            }
          }
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _updateAccount.apply(this, arguments);
}
var loadAccount = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(near, setAccount) {
    var _ls$get4;
    var signedAccountId, pretendAccountId, account, _yield$Promise$all, _yield$Promise$all2, storageBalance, state;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          signedAccountId = near.accountId;
          if (signedAccountId) {
            local_storage__WEBPACK_IMPORTED_MODULE_3___default().set(LsKeyAccountId, signedAccountId);
            near.config.walletConnectCallback(signedAccountId);
          } else {
            local_storage__WEBPACK_IMPORTED_MODULE_3___default().remove(LsKeyAccountId);
          }
          pretendAccountId = (_ls$get4 = local_storage__WEBPACK_IMPORTED_MODULE_3___default().get(LsKeyPretendAccountId)) !== null && _ls$get4 !== void 0 ? _ls$get4 : undefined;
          account = {
            loading: false,
            signedAccountId: signedAccountId,
            pretendAccountId: pretendAccountId,
            accountId: pretendAccountId !== null && pretendAccountId !== void 0 ? pretendAccountId : signedAccountId,
            state: null,
            near: near,
            refresh: function () {
              var _refresh = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return loadAccount(near, setAccount);
                    case 2:
                      return _context.abrupt("return", _context.sent);
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              function refresh() {
                return _refresh.apply(this, arguments);
              }
              return refresh;
            }(),
            startPretending: function () {
              var _startPretending = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pretendAccountId) {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (pretendAccountId) {
                        local_storage__WEBPACK_IMPORTED_MODULE_3___default().set(LsKeyPretendAccountId, pretendAccountId);
                      } else {
                        local_storage__WEBPACK_IMPORTED_MODULE_3___default().remove(LsKeyPretendAccountId);
                      }
                      _context2.next = 3;
                      return loadAccount(near, setAccount);
                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              function startPretending(_x5) {
                return _startPretending.apply(this, arguments);
              }
              return startPretending;
            }()
          };
          if (!signedAccountId) {
            _context3.next = 13;
            break;
          }
          _context3.next = 7;
          return Promise.all([near.contract.storage_balance_of({
            account_id: signedAccountId
          }), near.accountState(signedAccountId)]);
        case 7:
          _yield$Promise$all = _context3.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
          storageBalance = _yield$Promise$all2[0];
          state = _yield$Promise$all2[1];
          account.storageBalance = storageBalance;
          account.state = state;
        case 13:
          setAccount(account);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function loadAccount(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var useAccount = (0,react_singleton_hook__WEBPACK_IMPORTED_MODULE_0__.singletonHook)(defaultAccount, function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultAccount),
    _useState2 = _slicedToArray(_useState, 2),
    account = _useState2[0],
    setAccount = _useState2[1];
  var near = (0,_near__WEBPACK_IMPORTED_MODULE_2__.useNear)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!near) {
      return;
    }
    near.selector.then(function (selector) {
      selector.store.observable.subscribe( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(walletState) {
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return updateAccount(near, walletState);
              case 2:
                _context4.prev = 2;
                _context4.next = 5;
                return loadAccount(near, setAccount);
              case 5:
                _context4.next = 10;
                break;
              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](2);
                console.error(_context4.t0);
              case 10:
              case "end":
                return _context4.stop();
            }
          }, _callee4, null, [[2, 7]]);
        }));
        return function (_x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    });
  }, [near]);
  return account;
});
var useAccountId = function useAccountId() {
  var account = useAccount();
  return account.accountId;
};

/***/ }),

/***/ "./src/lib/data/cache.js":
/*!*******************************!*\
  !*** ./src/lib/data/cache.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCache: () => (/* binding */ useCache)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/lib/data/utils.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! idb */ "idb");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_singleton_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-singleton-hook */ "react-singleton-hook");
/* harmony import */ var react_singleton_hook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_singleton_hook__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Action = {
  ViewCall: "ViewCall",
  Fetch: "Fetch",
  Block: "Block",
  LocalStorage: "LocalStorage",
  CustomPromise: "CustomPromise",
  EthersCall: "EthersCall"
};
var CacheStatus = {
  NotStarted: "NotStarted",
  InProgress: "InProgress",
  Done: "Done",
  Invalidated: "Invalidated"
};
var ExpirationTimeoutMs = 1000 * 60 * 5; // 5 minutes
var CacheSubscriptionTimeoutMs = 5000;
var CacheDebug = false;
var CacheDb = "cacheDb";
var CacheDbObject = "cache-v1";
var Cache = /*#__PURE__*/function () {
  function Cache() {
    var finalSynchronizationDelayMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
    _classCallCheck(this, Cache);
    this.dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(CacheDb, 1, {
      upgrade: function upgrade(db) {
        db.createObjectStore(CacheDbObject);
      }
    });
    this.cache = {};
    this.finalSynchronizationDelayMs = finalSynchronizationDelayMs;
  }
  _createClass(Cache, [{
    key: "invalidateCallbacks",
    value: function invalidateCallbacks(cached, isFinal) {
      var _cached$invalidationC;
      if ((_cached$invalidationC = cached.invalidationCallbacks) !== null && _cached$invalidationC !== void 0 && _cached$invalidationC.length) {
        var callbacks = cached.invalidationCallbacks;
        cached.invalidationCallbacks = [];
        setTimeout(function () {
          callbacks.forEach(function (cb) {
            try {
              cb();
            } catch (_unused) {
              // ignore
            }
          });
        }, isFinal ? this.finalSynchronizationDelayMs + 50 : 50);
      }
    }
  }, {
    key: "innerGet",
    value: function () {
      var _innerGet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(key) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.dbPromise;
            case 2:
              return _context.abrupt("return", _context.sent.get(CacheDbObject, key));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function innerGet(_x) {
        return _innerGet.apply(this, arguments);
      }
      return innerGet;
    }()
  }, {
    key: "innerSet",
    value: function () {
      var _innerSet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key, val) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.dbPromise;
            case 2:
              return _context2.abrupt("return", _context2.sent.put(CacheDbObject, val, key));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function innerSet(_x2, _x3) {
        return _innerSet.apply(this, arguments);
      }
      return innerSet;
    }()
  }, {
    key: "cachedPromise",
    value: function cachedPromise(key, promise, invalidate, forceCachedValue) {
      var _this = this;
      key = JSON.stringify(key);
      var cached = this.cache[key] || {
        status: CacheStatus.NotStarted,
        invalidationCallbacks: [],
        result: null,
        time: new Date().getTime()
      };
      this.cache[key] = cached;
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(invalidate)) {
        invalidate = {
          onInvalidate: invalidate
        };
      }
      if (invalidate.onInvalidate) {
        cached.invalidationCallbacks.push(invalidate.onInvalidate);
      }
      if (!cached.subscription && invalidate.subscribe) {
        var makeTimer = function makeTimer() {
          cached.subscription = setTimeout(function () {
            CacheDebug && console.log("Cached subscription invalidation", key);
            if (document.hidden) {
              makeTimer();
            } else {
              cached.subscription = null;
              cached.status = CacheStatus.Invalidated;
              _this.invalidateCallbacks(cached, false);
            }
          }, CacheSubscriptionTimeoutMs);
        };
        makeTimer();
      }
      if (cached.status === CacheStatus.InProgress) {
        return cached.result;
      }
      if (cached.status === CacheStatus.Done && cached.time + ExpirationTimeoutMs > new Date().getTime()) {
        return cached.result;
      }
      if (cached.status === CacheStatus.NotStarted) {
        this.innerGet(key).then(function (cachedResult) {
          if ((cachedResult || forceCachedValue) && cached.status === CacheStatus.InProgress) {
            CacheDebug && console.log("Cached value", key, cachedResult);
            cached.result = cachedResult;
            cached.time = new Date().getTime();
            _this.invalidateCallbacks(cached, false);
          }
        });
      }
      cached.status = CacheStatus.InProgress;
      if (promise) {
        promise().then(function (result) {
          CacheDebug && console.log("Fetched result", key);
          cached.status = CacheStatus.Done;
          cached.time = new Date().getTime();
          if (JSON.stringify(result) !== JSON.stringify(cached.result)) {
            cached.result = result;
            _this.innerSet(key, result);
            CacheDebug && console.log("Replacing value", key, result);
            _this.invalidateCallbacks(cached, false);
          }
        }).catch(function (e) {
          console.error(e);
          cached.status = CacheStatus.Done;
          var result = undefined;
          cached.time = new Date().getTime();
          if (JSON.stringify(result) !== JSON.stringify(cached.result)) {
            cached.result = result;
            _this.innerSet(key, result);
            CacheDebug && console.log("Replacing value", key, result);
            _this.invalidateCallbacks(cached, false);
          }
        });
      }
      CacheDebug && console.log("New cache request", key);
      return cached.result;
    }
  }, {
    key: "invalidateCache",
    value: function invalidateCache(near, data) {
      var _this2 = this;
      var affectedKeys = [];
      var indexUrl = "".concat(near.config.apiUrl, "/index");
      Object.keys(this.cache).forEach(function (stringKey) {
        var key;
        try {
          key = JSON.parse(stringKey);
        } catch (e) {
          console.error("Key deserialization failed", stringKey);
          return;
        }
        if (key.action === Action.ViewCall && key.contractId === near.config.contractName && (!key.blockId || key.blockId === "optimistic" || key.blockId === "final")) {
          try {
            var _key$args;
            var keys = (_key$args = key.args) === null || _key$args === void 0 ? void 0 : _key$args.keys;
            if (keys.some(function (pattern) {
              return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.patternMatch)(key.methodName, pattern, data);
            })) {
              affectedKeys.push([stringKey, key.blockId === "final"]);
            }
          } catch (_unused2) {
            // ignore
          }
        }
        // Trying to parse index
        if (key.action === Action.Fetch && key.url === indexUrl) {
          try {
            var _key$options;
            var _JSON$parse = JSON.parse((_key$options = key.options) === null || _key$options === void 0 ? void 0 : _key$options.body),
              action = _JSON$parse.action,
              indexKey = _JSON$parse.key;
            if (action && indexKey && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.indexMatch)(action, indexKey, data)) {
              // console.log("Invalidating index", action, indexKey);
              affectedKeys.push([stringKey, true]);
            }
          } catch (_unused3) {
            // ignore
          }
        }
      });
      console.log("Cache invalidation", affectedKeys);
      affectedKeys.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          stringKey = _ref2[0],
          isFinal = _ref2[1];
        var cached = _this2.cache[stringKey];
        cached.status = CacheStatus.Invalidated;
        _this2.invalidateCallbacks(cached, isFinal);
      });
    }
  }, {
    key: "cachedBlock",
    value: function cachedBlock(near, blockId, invalidate) {
      return this.cachedPromise({
        action: Action.Block,
        blockId: blockId
      }, function () {
        return near.block(blockId);
      }, invalidate);
    }
  }, {
    key: "cachedViewCall",
    value: function cachedViewCall(near, contractId, methodName, args, blockId, invalidate) {
      return this.cachedPromise({
        action: Action.ViewCall,
        contractId: contractId,
        methodName: methodName,
        args: args,
        blockId: blockId
      }, function () {
        return near.viewCall(contractId, methodName, args, blockId);
      }, invalidate);
    }
  }, {
    key: "cachedCalimeroViewCall",
    value: function cachedCalimeroViewCall(near, contractId, methodName, args, blockId, invalidate) {
      return this.cachedPromise({
        action: Action.ViewCall,
        contractId: contractId,
        methodName: methodName,
        args: args,
        blockId: blockId
      }, function () {
        return near.viewCalimero(contractId, methodName, args, blockId);
      }, invalidate);
    }
  }, {
    key: "asyncFetch",
    value: function () {
      var _asyncFetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url, options) {
        var _options, _options2, _options3, _options4;
        var responseType, response, status, ok, contentType, body;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              responseType = (_options = options) === null || _options === void 0 || (_options = _options.responseType) === null || _options === void 0 ? void 0 : _options.toLowerCase();
              options = {
                method: (_options2 = options) === null || _options2 === void 0 ? void 0 : _options2.method,
                headers: (_options3 = options) === null || _options3 === void 0 ? void 0 : _options3.headers,
                body: (_options4 = options) === null || _options4 === void 0 ? void 0 : _options4.body
              };
              _context3.prev = 2;
              _context3.next = 5;
              return fetch(url, options);
            case 5:
              response = _context3.sent;
              status = response.status;
              ok = response.ok;
              contentType = response.headers.get("content-type");
              if (!ok) {
                _context3.next = 15;
                break;
              }
              _context3.next = 12;
              return responseType === "arraybuffer" ? response.arrayBuffer() : responseType === "blob" ? response.blob() : responseType === "formdata" ? response.formData() : responseType === "json" ? response.json() : responseType === "text" ? response.text() : contentType && contentType.indexOf("application/json") !== -1 ? response.json() : response.text();
            case 12:
              _context3.t0 = _context3.sent;
              _context3.next = 16;
              break;
            case 15:
              _context3.t0 = undefined;
            case 16:
              body = _context3.t0;
              return _context3.abrupt("return", {
                ok: ok,
                status: status,
                contentType: contentType,
                body: body
              });
            case 20:
              _context3.prev = 20;
              _context3.t1 = _context3["catch"](2);
              return _context3.abrupt("return", {
                ok: false,
                error: _context3.t1.message
              });
            case 23:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 20]]);
      }));
      function asyncFetch(_x4, _x5) {
        return _asyncFetch.apply(this, arguments);
      }
      return asyncFetch;
    }()
  }, {
    key: "cachedFetch",
    value: function cachedFetch(url, options, invalidate) {
      var _this3 = this;
      return this.cachedPromise({
        action: Action.Fetch,
        url: url,
        options: options
      }, function () {
        return _this3.asyncFetch(url, options);
      }, invalidate);
    }
  }, {
    key: "cachedCustomPromise",
    value: function cachedCustomPromise(key, promise, invalidate) {
      return this.cachedPromise({
        action: Action.CustomPromise,
        key: key
      }, function () {
        return promise();
      }, invalidate);
    }
  }, {
    key: "socialGet",
    value: function socialGet(near, keys, recursive, blockId, options, invalidate) {
      if (!near) {
        return null;
      }
      keys = Array.isArray(keys) ? keys : [keys];
      keys = keys.map(function (key) {
        return recursive ? "".concat(key, "/**") : "".concat(key);
      });
      var args = {
        keys: keys,
        options: options
      };
      var data = this.cachedViewCall(near, near.config.contractName, "get", args, blockId, invalidate);
      if (data === null) {
        return null;
      }
      if (keys.length === 1) {
        var parts = keys[0].split("/");
        for (var i = 0; i < parts.length; i++) {
          var _data;
          var part = parts[i];
          if (part === "*" || part === "**") {
            break;
          }
          data = (_data = data) === null || _data === void 0 ? void 0 : _data[part];
        }
      }
      return data;
    }
  }, {
    key: "socialIndex",
    value: function socialIndex(near, action, key, options, invalidate) {
      var res = this.cachedFetch("".concat(near.config.apiUrl, "/index"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: action,
          key: key,
          options: options
        })
      }, invalidate);
      return res !== null && res !== void 0 && res.ok ? res.body : null;
    }
  }, {
    key: "localStorageGet",
    value: function localStorageGet(domain, key, invalidate) {
      return this.cachedPromise({
        action: Action.LocalStorage,
        domain: domain,
        key: key
      }, undefined, invalidate, true);
    }
  }, {
    key: "asyncLocalStorageGet",
    value: function asyncLocalStorageGet(domain, key) {
      key = JSON.stringify({
        action: Action.LocalStorage,
        domain: domain,
        key: key
      });
      return this.innerGet(key);
    }
  }, {
    key: "localStorageSet",
    value: function localStorageSet(domain, key, value) {
      key = JSON.stringify({
        action: Action.LocalStorage,
        domain: domain,
        key: key
      });
      var cached = this.cache[key] || {
        status: CacheStatus.NotStarted,
        invalidationCallbacks: [],
        result: null,
        time: new Date().getTime()
      };
      this.cache[key] = cached;
      cached.status = CacheStatus.Done;
      if (JSON.stringify(value) !== JSON.stringify(cached.result)) {
        cached.result = value;
        this.innerSet(key, value);
        CacheDebug && console.log("Replacing value", key, value);
        this.invalidateCallbacks(cached, false);
      }
    }
  }, {
    key: "cachedEthersCall",
    value: function cachedEthersCall(ethersProvider, callee, args, invalidate) {
      if (!ethersProvider) {
        return null;
      }
      return this.cachedPromise({
        action: Action.EthersCall,
        callee: callee,
        args: args
      }, function () {
        return ethersProvider[callee].apply(ethersProvider, _toConsumableArray(args));
      }, invalidate);
    }
  }]);
  return Cache;
}();
var defaultCache = new Cache();
var useCache = (0,react_singleton_hook__WEBPACK_IMPORTED_MODULE_2__.singletonHook)(defaultCache, function () {
  return defaultCache;
});

/***/ }),

/***/ "./src/lib/data/commitData.js":
/*!************************************!*\
  !*** ./src/lib/data/commitData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asyncCommit: () => (/* binding */ asyncCommit),
/* harmony export */   asyncCommitData: () => (/* binding */ asyncCommitData),
/* harmony export */   prepareCommit: () => (/* binding */ prepareCommit),
/* harmony export */   requestPermissionAndCommit: () => (/* binding */ requestPermissionAndCommit)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/lib/data/utils.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./near */ "./src/lib/data/near.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var MinStorageBalance = _utils__WEBPACK_IMPORTED_MODULE_0__.StorageCostPerByte.mul(2000);
var InitialAccountStorageBalance = _utils__WEBPACK_IMPORTED_MODULE_0__.StorageCostPerByte.mul(500);
var ExtraStorageBalance = _utils__WEBPACK_IMPORTED_MODULE_0__.StorageCostPerByte.mul(500);
var StorageForPermission = _utils__WEBPACK_IMPORTED_MODULE_0__.StorageCostPerByte.mul(500);
var fetchCurrentData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(near, data) {
    var keys;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          keys = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.extractKeys)(data);
          _context.next = 3;
          return near.contract.get({
            keys: keys
          });
        case 3:
          return _context.abrupt("return", _context.sent);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchCurrentData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var prepareCommit = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(near, accountId, originalData, forceRewrite) {
    var signedAccountId, _yield$Promise$all, _yield$Promise$all2, accountStorage, permissionGranted, availableBytes, data, currentData, expectedDataBalance, deposit;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return near.selector;
        case 2:
          signedAccountId = near.accountId;
          if (signedAccountId) {
            _context2.next = 6;
            break;
          }
          alert("You're not logged in. Sign in to commit data.");
          return _context2.abrupt("return");
        case 6:
          _context2.next = 8;
          return Promise.all([near.viewCall(near.config.contractName, "get_account_storage", {
            account_id: signedAccountId
          }), signedAccountId !== accountId ? near.viewCall(near.config.contractName, "is_write_permission_granted", {
            predecessor_id: signedAccountId,
            key: accountId
          }) : Promise.resolve(true)]);
        case 8:
          _yield$Promise$all = _context2.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
          accountStorage = _yield$Promise$all2[0];
          permissionGranted = _yield$Promise$all2[1];
          availableBytes = big_js__WEBPACK_IMPORTED_MODULE_1___default()((accountStorage === null || accountStorage === void 0 ? void 0 : accountStorage.available_bytes) || "0");
          data = _defineProperty({}, accountId, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertToStringLeaves)(originalData));
          currentData = {};
          if (forceRewrite) {
            _context2.next = 20;
            break;
          }
          _context2.next = 18;
          return fetchCurrentData(near, data);
        case 18:
          currentData = _context2.sent;
          data = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeDuplicates)(data, currentData);
        case 20:
          expectedDataBalance = _utils__WEBPACK_IMPORTED_MODULE_0__.StorageCostPerByte.mul((0,_utils__WEBPACK_IMPORTED_MODULE_0__.estimateDataSize)(data, currentData)).add(accountStorage ? big_js__WEBPACK_IMPORTED_MODULE_1___default()(0) : InitialAccountStorageBalance).add(permissionGranted ? big_js__WEBPACK_IMPORTED_MODULE_1___default()(0) : StorageForPermission).add(ExtraStorageBalance);
          deposit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.bigMax)(expectedDataBalance.sub(availableBytes.mul(_utils__WEBPACK_IMPORTED_MODULE_0__.StorageCostPerByte)), !accountStorage ? MinStorageBalance : permissionGranted ? big_js__WEBPACK_IMPORTED_MODULE_1___default()(0) : big_js__WEBPACK_IMPORTED_MODULE_1___default()(1));
          return _context2.abrupt("return", {
            originalData: originalData,
            accountId: accountId,
            accountStorage: accountStorage,
            availableBytes: availableBytes,
            currentData: currentData,
            data: data,
            expectedDataBalance: expectedDataBalance,
            deposit: deposit,
            permissionGranted: permissionGranted
          });
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function prepareCommit(_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var asyncCommit = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(near, data, deposit) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          console.log("Committing data", data);
          _context3.next = 3;
          return near.contract.set({
            data: data
          }, _utils__WEBPACK_IMPORTED_MODULE_0__.TGas.mul(100).toFixed(0), deposit.toFixed(0));
        case 3:
          return _context3.abrupt("return", _context3.sent);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function asyncCommit(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var asyncCommitData = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(near, originalData, forceRewrite) {
    var _yield$prepareCommit, data, deposit;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return prepareCommit(near, originalData, forceRewrite);
        case 2:
          _yield$prepareCommit = _context4.sent;
          data = _yield$prepareCommit.data;
          deposit = _yield$prepareCommit.deposit;
          return _context4.abrupt("return", asyncCommit(near, data, deposit));
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function asyncCommitData(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var requestPermissionAndCommit = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(near, data, deposit) {
    var wallet, actions;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return near.selector;
        case 2:
          _context5.next = 4;
          return _context5.sent.wallet();
        case 4:
          wallet = _context5.sent;
          actions = [];
          if (near.publicKey) {
            actions.push((0,_near__WEBPACK_IMPORTED_MODULE_2__.functionCallCreator)("grant_write_permission", {
              public_key: near.publicKey.toString(),
              keys: [near.accountId]
            }, _utils__WEBPACK_IMPORTED_MODULE_0__.TGas.mul(100).toFixed(0), deposit.gt(0) ? deposit.toFixed(0) : "1"));
            deposit = big_js__WEBPACK_IMPORTED_MODULE_1___default()(0);
          }
          actions.push((0,_near__WEBPACK_IMPORTED_MODULE_2__.functionCallCreator)("set", {
            data: data
          }, _utils__WEBPACK_IMPORTED_MODULE_0__.TGas.mul(100).toFixed(0), deposit.gt(0) ? deposit.toFixed(0) : "1"));
          _context5.next = 10;
          return wallet.signAndSendTransaction({
            receiverId: near.config.contractName,
            actions: actions
          });
        case 10:
          return _context5.abrupt("return", _context5.sent);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function requestPermissionAndCommit(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/lib/data/near.js":
/*!******************************!*\
  !*** ./src/lib/data/near.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainNearConfig: () => (/* binding */ MainNearConfig),
/* harmony export */   addKeyCreator: () => (/* binding */ addKeyCreator),
/* harmony export */   functionCallCreator: () => (/* binding */ functionCallCreator),
/* harmony export */   useInitNear: () => (/* binding */ useInitNear),
/* harmony export */   useNear: () => (/* binding */ useNear)
/* harmony export */ });
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! near-api-js */ "near-api-js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_singleton_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-singleton-hook */ "react-singleton-hook");
/* harmony import */ var react_singleton_hook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_singleton_hook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/lib/data/utils.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js")["Buffer"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var UseLegacyFunctionCallCreator = true;
var functionCallCreator = UseLegacyFunctionCallCreator ? function (methodName, args, gas, deposit) {
  return {
    type: "FunctionCall",
    params: {
      methodName: methodName,
      args: args,
      gas: gas,
      deposit: deposit
    }
  };
} : near_api_js__WEBPACK_IMPORTED_MODULE_0__.transactions.functionCall;
var addKeyCreator = function addKeyCreator(newPublicKey, contractName, methodNames, allowance) {
  return {
    type: "AddKey",
    params: {
      publicKey: newPublicKey,
      accessKey: {
        permission: {
          allowance: allowance,
          receiverId: contractName,
          methodNames: methodNames
        }
      }
    }
  };
};
var TestNearConfig = {
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
  archivalNodeUrl: "https://rpc.testnet.internal.near.org",
  contractName: "v1.social08.testnet",
  walletUrl: "https://wallet.testnet.near.org",
  wrapNearAccountId: "wrap.testnet",
  apiUrl: "https://discovery-api.stage.testnet.near.org",
  enableWeb4FastRpc: false
};
var CalimeroConfig = {
  networkId: "".concat("pt-63-calimero-testnet"),
  calimeroUrl: "".concat("https://api.staging.calimero.network/api/v1/shards/ws-protocol-63-calimero-testnet/neard-rpc/"),
  walletUrl: "".concat("https://mnw-calimero-staging-testnet.netlify.app/"),
  calimeroToken: "".concat("ac08f8347afb9dc12118108ab77d6eaf343039698a4315fed8809a450445f4fc")
};
var MainNearConfig = {
  networkId: "mainnet",
  nodeUrl: "https://rpc.mainnet.near.org",
  archivalNodeUrl: "https://rpc.mainnet.internal.near.org",
  contractName: "social.near",
  walletUrl: "https://wallet.near.org",
  wrapNearAccountId: "wrap.near",
  apiUrl: "https://api.near.social",
  enableWeb4FastRpc: false
};
var SupportedApiMethods = {
  get: true,
  keys: true
};
var apiCall = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(config, methodName, args, blockId, fallback) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!config.apiUrl || !(methodName in SupportedApiMethods))) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", fallback());
        case 2:
          args = args || {};
          if (blockId) {
            args.blockHeight = blockId;
          }
          _context.prev = 4;
          _context.next = 7;
          return fetch("".concat(config.apiUrl, "/").concat(methodName), {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(args)
          });
        case 7:
          _context.next = 9;
          return _context.sent.json();
        case 9:
          return _context.abrupt("return", _context.sent);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](4);
          console.log("API call failed", methodName, args);
          console.error(_context.t0);
          return _context.abrupt("return", fallback());
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 12]]);
  }));
  return function apiCall(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
function functionCall(_x6, _x7, _x8, _x9, _x10, _x11) {
  return _functionCall.apply(this, arguments);
}
function _functionCall() {
  _functionCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(near, contractName, methodName, args, gas, deposit) {
    var wallet;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return near.selector;
        case 3:
          _context4.next = 5;
          return _context4.sent.wallet();
        case 5:
          wallet = _context4.sent;
          _context4.next = 8;
          return wallet.signAndSendTransaction({
            receiverId: contractName,
            actions: [functionCallCreator(methodName, args, gas !== null && gas !== void 0 ? gas : _utils__WEBPACK_IMPORTED_MODULE_4__.TGas.mul(30).toFixed(0), deposit !== null && deposit !== void 0 ? deposit : "0")]
          });
        case 8:
          return _context4.abrupt("return", _context4.sent);
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          throw _context4.t0;
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return _functionCall.apply(this, arguments);
}
function accountState(_x12, _x13) {
  return _accountState.apply(this, arguments);
}
function _accountState() {
  _accountState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(near, accountId) {
    var account;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          account = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.Account(near.nearConnection.connection, accountId);
          _context5.next = 3;
          return account.state();
        case 3:
          return _context5.abrupt("return", _context5.sent);
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _accountState.apply(this, arguments);
}
function getCurrentAccount(_x14) {
  return _getCurrentAccount.apply(this, arguments);
}
function _getCurrentAccount() {
  _getCurrentAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(near) {
    var wallet, accounts, accountId;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return near.selector;
        case 2:
          wallet = _context6.sent;
          accounts = wallet.store.getState().accounts;
          accountId = accounts.filter(function (account) {
            return !!account.active;
          })[0].accountId;
          if (accountId) {
            _context6.next = 7;
            break;
          }
          throw new Error("No active account");
        case 7:
          return _context6.abrupt("return", accountId);
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _getCurrentAccount.apply(this, arguments);
}
var getFakKey = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(componentName, near, contract) {
    var accountId;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getCurrentAccount(near);
        case 2:
          accountId = _context2.sent;
          return _context2.abrupt("return", "".concat(accountId, ":").concat(componentName, ":").concat(contract));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getFakKey(_x15, _x16, _x17) {
    return _ref2.apply(this, arguments);
  };
}();
function requestFak(_x18, _x19, _x20, _x21) {
  return _requestFak.apply(this, arguments);
}
function _requestFak() {
  _requestFak = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(componentName, near, contractName, methodNames) {
    var keyPair, walletSelector, accountId, wallet, allowance, action, transaction;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          keyPair = near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils.KeyPairEd25519.fromRandom();
          _context7.t0 = localStorage;
          _context7.next = 4;
          return getFakKey(componentName, near, contractName);
        case 4:
          _context7.t1 = _context7.sent;
          _context7.t2 = keyPair.toString();
          _context7.t0.setItem.call(_context7.t0, _context7.t1, _context7.t2);
          _context7.next = 9;
          return near.selector;
        case 9:
          walletSelector = _context7.sent;
          _context7.next = 12;
          return getCurrentAccount(near);
        case 12:
          accountId = _context7.sent;
          _context7.next = 15;
          return walletSelector.wallet();
        case 15:
          wallet = _context7.sent;
          allowance = near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils.format.parseNearAmount("0.33");
          action = addKeyCreator(keyPair.publicKey.toString(), contractName, methodNames, allowance);
          transaction = {
            receiverId: accountId,
            actions: [action]
          };
          _context7.next = 21;
          return wallet.signAndSendTransaction(transaction);
        case 21:
          return _context7.abrupt("return", _context7.sent);
        case 22:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _requestFak.apply(this, arguments);
}
var getCalimeroFakKey = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(componentName, near, contract) {
    var accountId;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getCurrentAccount(near);
        case 2:
          accountId = _context3.sent;
          return _context3.abrupt("return", "cali:".concat(accountId, ":").concat(componentName, ":").concat(contract));
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getCalimeroFakKey(_x22, _x23, _x24) {
    return _ref3.apply(this, arguments);
  };
}();
function requestCalimeroFak(_x25, _x26, _x27, _x28) {
  return _requestCalimeroFak.apply(this, arguments);
}
function _requestCalimeroFak() {
  _requestCalimeroFak = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(componentName, near, contractName, methodNames) {
    var currentUrl, newUrl, hashParams, contractAccount, accessKey;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          currentUrl = new URL(window.location.href);
          newUrl = new URL(CalimeroConfig.walletUrl + "/login/");
          newUrl.searchParams.set('success_url', currentUrl.href);
          newUrl.searchParams.set('failure_url', currentUrl.href);
          hashParams = new URLSearchParams();
          if (!contractName) {
            _context8.next = 20;
            break;
          }
          _context8.next = 8;
          return near.calimeroConnection.account(contractName);
        case 8:
          contractAccount = _context8.sent;
          _context8.next = 11;
          return contractAccount.state();
        case 11:
          newUrl.searchParams.set('contract_id', contractName);
          accessKey = near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils.KeyPairEd25519.fromRandom();
          newUrl.searchParams.set('public_key', accessKey.getPublicKey().toString());
          _context8.t0 = localStorage;
          _context8.next = 17;
          return getCalimeroFakKey(componentName, near, contractName);
        case 17:
          _context8.t1 = _context8.sent;
          _context8.t2 = accessKey;
          _context8.t0.setItem.call(_context8.t0, _context8.t1, _context8.t2);
        case 20:
          if (methodNames) {
            methodNames.forEach(function (methodName) {
              newUrl.searchParams.append('methodNames', methodName);
            });
          }
          hashParams.set('calimeroRPCEndpoint', CalimeroConfig.calimeroUrl);
          hashParams.set('calimeroAuthToken', CalimeroConfig.calimeroToken);
          hashParams.set('calimeroShardId', CalimeroConfig.networkId);
          newUrl.hash = hashParams.toString();
          window.location.assign(newUrl.toString());
        case 26:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _requestCalimeroFak.apply(this, arguments);
}
function verifyCalimeroFak(_x29, _x30, _x31, _x32) {
  return _verifyCalimeroFak.apply(this, arguments);
}
function _verifyCalimeroFak() {
  _verifyCalimeroFak = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(componentName, near, contractName, methods) {
    var key, accountId, keyPair, params, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.t0 = localStorage;
          _context9.next = 3;
          return getCalimeroFakKey(componentName, near, contractName);
        case 3:
          _context9.t1 = _context9.sent;
          key = _context9.t0.getItem.call(_context9.t0, _context9.t1);
          if (key) {
            _context9.next = 7;
            break;
          }
          return _context9.abrupt("return", false);
        case 7:
          _context9.next = 9;
          return getCurrentAccount(near);
        case 9:
          accountId = _context9.sent;
          keyPair = near_api_js__WEBPACK_IMPORTED_MODULE_0__.KeyPair.fromString(key);
          params = {
            request_type: "view_access_key",
            finality: "final",
            account_id: accountId,
            public_key: keyPair.publicKey.toString()
          };
          _context9.prev = 12;
          _context9.next = 15;
          return near.calimeroConnection.connection.provider.query(params);
        case 15:
          result = _context9.sent;
          return _context9.abrupt("return", checkFakKey(result, contractName, methods));
        case 19:
          _context9.prev = 19;
          _context9.t2 = _context9["catch"](12);
          console.error(_context9.t2);
          return _context9.abrupt("return", false);
        case 23:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[12, 19]]);
  }));
  return _verifyCalimeroFak.apply(this, arguments);
}
var checkFakKey = function checkFakKey(rpcResponse, contract, methodNames) {
  var _rpcResponse$permissi;
  var _ref4 = (rpcResponse === null || rpcResponse === void 0 || (_rpcResponse$permissi = rpcResponse.permission) === null || _rpcResponse$permissi === void 0 ? void 0 : _rpcResponse$permissi.FunctionCall) || {},
    _ref4$receiver_id = _ref4.receiver_id,
    receiverId = _ref4$receiver_id === void 0 ? undefined : _ref4$receiver_id,
    _ref4$method_names = _ref4.method_names,
    rpcMethodNames = _ref4$method_names === void 0 ? [] : _ref4$method_names;
  if (!receiverId) {
    throw new Error("No receiverId");
    return false;
  }
  if (!contract) {
    return true;
  }
  if (receiverId !== contract) {
    throw new Error("Wrong contract");
    return false;
  }
  if (methodNames && !methodNames.every(function (item) {
    return rpcMethodNames.includes(item);
  })) {
    throw new Error("Wrong method");
    return false;
  }
  return true;
};
function signWithCalimeroFak(_x33, _x34, _x35, _x36) {
  return _signWithCalimeroFak.apply(this, arguments);
}
function _signWithCalimeroFak() {
  _signWithCalimeroFak = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(componentName, near, contractName, message) {
    var key, keyPair;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.t0 = localStorage;
          _context10.next = 3;
          return getCalimeroFakKey(componentName, near, contractName);
        case 3:
          _context10.t1 = _context10.sent;
          key = _context10.t0.getItem.call(_context10.t0, _context10.t1);
          if (key) {
            _context10.next = 7;
            break;
          }
          throw new Error("Method: Calimero.sign. Requires requestAccessKey to be called first");
        case 7:
          keyPair = near_api_js__WEBPACK_IMPORTED_MODULE_0__.KeyPair.fromString(key);
          return _context10.abrupt("return", keyPair.sign(message));
        case 9:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _signWithCalimeroFak.apply(this, arguments);
}
function submitFakCalimeroTransaction(_x37, _x38, _x39, _x40, _x41, _x42, _x43) {
  return _submitFakCalimeroTransaction.apply(this, arguments);
}
function _submitFakCalimeroTransaction() {
  _submitFakCalimeroTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(componentName, near, contractName, methodName, args, gas, deposit) {
    var key, accountId, keyStore, keyPair, account, contract;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.t0 = localStorage;
          _context11.next = 3;
          return getCalimeroFakKey(componentName, near, contractName);
        case 3:
          _context11.t1 = _context11.sent;
          key = _context11.t0.getItem.call(_context11.t0, _context11.t1);
          if (key) {
            _context11.next = 7;
            break;
          }
          throw new Error("Method: Near.fakCalimeroCall. Requires requestAccessKey to be called first");
        case 7:
          _context11.next = 9;
          return getCurrentAccount(near);
        case 9:
          accountId = _context11.sent;
          keyStore = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.keyStores.InMemoryKeyStore();
          keyPair = near_api_js__WEBPACK_IMPORTED_MODULE_0__.KeyPair.fromString(key);
          keyStore.setKey(CalimeroConfig.networkId, accountId, keyPair);
          near.calimeroConnection.connection.keyStore = keyStore;
          near.calimeroConnection.connection.signer = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.InMemorySigner(keyStore);
          _context11.next = 17;
          return near.calimeroConnection.account(accountId);
        case 17:
          account = _context11.sent;
          contract = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.Contract(account, contractName, {
            changeMethods: [methodName],
            viewMethods: []
          });
          _context11.prev = 19;
          _context11.next = 22;
          return contract[methodName](_objectSpread({}, args), gas === null || gas === void 0 ? void 0 : gas.toFixed(0), deposit === null || deposit === void 0 ? void 0 : deposit.toFixed(0));
        case 22:
          return _context11.abrupt("return", _context11.sent);
        case 25:
          _context11.prev = 25;
          _context11.t2 = _context11["catch"](19);
          console.error(_context11.t2);
        case 28:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[19, 25]]);
  }));
  return _submitFakCalimeroTransaction.apply(this, arguments);
}
function submitFakTransaction(_x44, _x45, _x46, _x47, _x48, _x49, _x50) {
  return _submitFakTransaction.apply(this, arguments);
}
function _submitFakTransaction() {
  _submitFakTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(componentName, near, contractName, methodName, args, gas, deposit) {
    var key, accountId, provider, keyStore, keyPair, account, contract;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.t0 = localStorage;
          _context12.next = 3;
          return getFakKey(componentName, near, contractName);
        case 3:
          _context12.t1 = _context12.sent;
          key = _context12.t0.getItem.call(_context12.t0, _context12.t1);
          if (key) {
            _context12.next = 7;
            break;
          }
          throw new Error("Method: Near.fakCall. Requires requestAccessKey to be called first");
        case 7:
          _context12.next = 9;
          return getCurrentAccount(near);
        case 9:
          accountId = _context12.sent;
          provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider({
            url: near.config.nodeUrl
          });
          keyStore = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.keyStores.InMemoryKeyStore();
          keyPair = near_api_js__WEBPACK_IMPORTED_MODULE_0__.KeyPair.fromString(key);
          keyStore.setKey(near.networkId, accountId, keyPair);
          account = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.Account({
            provider: provider,
            signer: new near_api_js__WEBPACK_IMPORTED_MODULE_0__.InMemorySigner(keyStore),
            networkId: near.networkId
          }, accountId);
          contract = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.Contract(account, contractName, {
            changeMethods: [methodName],
            viewMethods: []
          });
          _context12.next = 18;
          return contract[methodName](_objectSpread({}, args), gas === null || gas === void 0 ? void 0 : gas.toFixed(0), deposit === null || deposit === void 0 ? void 0 : deposit.toFixed(0));
        case 18:
          return _context12.abrupt("return", _context12.sent);
        case 19:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _submitFakTransaction.apply(this, arguments);
}
function verifyFak(_x51, _x52, _x53, _x54) {
  return _verifyFak.apply(this, arguments);
}
function _verifyFak() {
  _verifyFak = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(componentName, near, contractName, methods) {
    var key, accountId, provider, keyPair, params, result;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.t0 = localStorage;
          _context13.next = 3;
          return getFakKey(componentName, near, contractName);
        case 3:
          _context13.t1 = _context13.sent;
          key = _context13.t0.getItem.call(_context13.t0, _context13.t1);
          if (key) {
            _context13.next = 7;
            break;
          }
          return _context13.abrupt("return", false);
        case 7:
          _context13.next = 9;
          return getCurrentAccount(near);
        case 9:
          accountId = _context13.sent;
          provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider({
            url: near.config.nodeUrl
          });
          keyPair = near_api_js__WEBPACK_IMPORTED_MODULE_0__.KeyPair.fromString(key);
          params = {
            request_type: "view_access_key",
            finality: "final",
            account_id: accountId,
            public_key: keyPair.publicKey.toString()
          };
          _context13.prev = 13;
          _context13.next = 16;
          return provider.query(params);
        case 16:
          result = _context13.sent;
          return _context13.abrupt("return", checkFakKey(result, contractName, methods));
        case 20:
          _context13.prev = 20;
          _context13.t2 = _context13["catch"](13);
          console.error(_context13.t2);
          return _context13.abrupt("return", false);
        case 24:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[13, 20]]);
  }));
  return _verifyFak.apply(this, arguments);
}
function sendTransactions(_x55, _x56) {
  return _sendTransactions.apply(this, arguments);
}
function _sendTransactions() {
  _sendTransactions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(near, functionCalls) {
    var wallet, transactions, currentTotalGas;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return near.selector;
        case 3:
          _context14.next = 5;
          return _context14.sent.wallet();
        case 5:
          wallet = _context14.sent;
          transactions = [];
          currentTotalGas = big_js__WEBPACK_IMPORTED_MODULE_1___default()(0);
          functionCalls.forEach(function (_ref6) {
            var _transactions;
            var contractName = _ref6.contractName,
              methodName = _ref6.methodName,
              args = _ref6.args,
              gas = _ref6.gas,
              deposit = _ref6.deposit;
            var newTotalGas = currentTotalGas.add(gas);
            var action = functionCallCreator(methodName, args, gas.toFixed(0), deposit.toFixed(0));
            if (((_transactions = transactions[transactions.length - 1]) === null || _transactions === void 0 ? void 0 : _transactions.receiverId) !== contractName || newTotalGas.gt(_utils__WEBPACK_IMPORTED_MODULE_4__.MaxGasPerTransaction)) {
              transactions.push({
                receiverId: contractName,
                actions: []
              });
              currentTotalGas = gas;
            } else {
              currentTotalGas = newTotalGas;
            }
            transactions[transactions.length - 1].actions.push(action);
          });
          _context14.next = 11;
          return wallet.signAndSendTransactions({
            transactions: transactions
          });
        case 11:
          return _context14.abrupt("return", _context14.sent);
        case 14:
          _context14.prev = 14;
          _context14.t0 = _context14["catch"](0);
          throw _context14.t0;
        case 17:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 14]]);
  }));
  return _sendTransactions.apply(this, arguments);
}
function setupContract(near, contractId, options) {
  var _options$viewMethods = options.viewMethods,
    viewMethods = _options$viewMethods === void 0 ? [] : _options$viewMethods,
    _options$changeMethod = options.changeMethods,
    changeMethods = _options$changeMethod === void 0 ? [] : _options$changeMethod;
  var contract = {
    near: near,
    contractId: contractId
  };
  viewMethods.forEach(function (methodName) {
    contract[methodName] = function (args) {
      return near.viewCall(contractId, methodName, args);
    };
  });
  changeMethods.forEach(function (methodName) {
    contract[methodName] = function (args, gas, deposit) {
      return near.functionCall(contractId, methodName, args, gas, deposit);
    };
  });
  return contract;
}
function viewCall(_x57, _x58, _x59, _x60, _x61, _x62) {
  return _viewCall.apply(this, arguments);
}
function _viewCall() {
  _viewCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(provider, blockId, contractId, methodName, args, finality) {
    var result;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          args = args || {};
          _context15.next = 3;
          return provider.query({
            request_type: "call_function",
            account_id: contractId,
            method_name: methodName,
            args_base64: Buffer.from(JSON.stringify(args)).toString("base64"),
            block_id: blockId,
            finality: finality
          });
        case 3:
          result = _context15.sent;
          return _context15.abrupt("return", result.result && result.result.length > 0 && JSON.parse(Buffer.from(result.result).toString()));
        case 5:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _viewCall.apply(this, arguments);
}
function web4ViewCall(_x63, _x64, _x65, _x66) {
  return _web4ViewCall.apply(this, arguments);
}
function _web4ViewCall() {
  _web4ViewCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(contractId, methodName, args, fallback) {
    var url;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          args = args || {};
          url = new URL("https://rpc.web4.near.page/account/".concat(contractId, "/view/").concat(methodName));
          Object.entries(args).forEach(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
              key = _ref8[0],
              value = _ref8[1];
            if (value !== undefined) {
              url.searchParams.append("".concat(key, ".json"), JSON.stringify(value));
            }
          });
          _context16.prev = 3;
          _context16.next = 6;
          return fetch(url.toString());
        case 6:
          _context16.next = 8;
          return _context16.sent.json();
        case 8:
          return _context16.abrupt("return", _context16.sent);
        case 11:
          _context16.prev = 11;
          _context16.t0 = _context16["catch"](3);
          console.log("Web4 view call failed", url.toString());
          console.error(_context16.t0);
          return _context16.abrupt("return", fallback());
        case 16:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[3, 11]]);
  }));
  return _web4ViewCall.apply(this, arguments);
}
function _initNear(_x67) {
  return _initNear2.apply(this, arguments);
}
function _initNear2() {
  _initNear2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(_ref5) {
    var _keyStore;
    var networkId, config, keyStore, selector, _ref5$walletConnectCa, walletConnectCallback, _ref5$customElements, customElements, nearConnection, calimeroConnection, _near, transformBlockId;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          networkId = _ref5.networkId, config = _ref5.config, keyStore = _ref5.keyStore, selector = _ref5.selector, _ref5$walletConnectCa = _ref5.walletConnectCallback, walletConnectCallback = _ref5$walletConnectCa === void 0 ? function () {} : _ref5$walletConnectCa, _ref5$customElements = _ref5.customElements, customElements = _ref5$customElements === void 0 ? {} : _ref5$customElements;
          if (!config) {
            config = {};
            if (!networkId) {
              config.networkId = "mainnet";
            }
          }
          if (networkId && !config.networkId) {
            config.networkId = networkId;
          }
          if (config.networkId === "mainnet") {
            config = Object.assign({}, MainNearConfig, config);
          } else if (config.networkId === "testnet") {
            config = Object.assign({}, TestNearConfig, config);
          }
          config.walletConnectCallback = walletConnectCallback;
          config.customElements = Object.assign({}, config.customElements, customElements);
          keyStore = (_keyStore = keyStore) !== null && _keyStore !== void 0 ? _keyStore : new near_api_js__WEBPACK_IMPORTED_MODULE_0__.keyStores.BrowserLocalStorageKeyStore();
          _context17.next = 9;
          return near_api_js__WEBPACK_IMPORTED_MODULE_0__.connect(Object.assign({
            deps: {
              keyStore: keyStore
            }
          }, config));
        case 9:
          nearConnection = _context17.sent;
          _context17.next = 12;
          return near_api_js__WEBPACK_IMPORTED_MODULE_0__.connect({
            networkId: CalimeroConfig.networkId,
            keyStore: keyStore,
            signer: new near_api_js__WEBPACK_IMPORTED_MODULE_0__.InMemorySigner(keyStore),
            nodeUrl: CalimeroConfig.calimeroUrl,
            walletUrl: CalimeroConfig.walletUrl,
            headers: _defineProperty({}, 'x-api-key', CalimeroConfig.calimeroToken)
          });
        case 12:
          calimeroConnection = _context17.sent;
          _near = {
            config: config,
            selector: selector,
            keyStore: keyStore,
            nearConnection: nearConnection,
            calimeroConnection: calimeroConnection
          };
          _near.nearArchivalConnection = near_api_js__WEBPACK_IMPORTED_MODULE_0__.Connection.fromConfig({
            networkId: config.networkId,
            provider: {
              type: "JsonRpcProvider",
              args: {
                url: config.archivalNodeUrl
              }
            },
            signer: {
              type: "InMemorySigner",
              keyStore: keyStore
            }
          });
          transformBlockId = function transformBlockId(blockId) {
            return blockId === "optimistic" || blockId === "final" ? {
              finality: blockId,
              blockId: undefined
            } : blockId !== undefined && blockId !== null ? {
              finality: undefined,
              blockId: parseInt(blockId)
            } : {
              finality: "optimistic",
              blockId: undefined
            };
          };
          _near.viewCall = function (contractId, methodName, args, blockHeightOrFinality) {
            var _transformBlockId = transformBlockId(blockHeightOrFinality),
              blockId = _transformBlockId.blockId,
              finality = _transformBlockId.finality;
            var nearViewCall = function nearViewCall() {
              return viewCall(blockId ? _near.nearArchivalConnection.provider : _near.nearConnection.connection.provider, blockId !== null && blockId !== void 0 ? blockId : undefined, contractId, methodName, args, finality);
            };
            var fastRpcCall = function fastRpcCall() {
              return finality === "optimistic" && config.enableWeb4FastRpc ? web4ViewCall(contractId, methodName, args, nearViewCall) : nearViewCall();
            };
            return contractId === config.contractName && (blockId || finality === "final") ? apiCall(config, methodName, args, blockId, fastRpcCall) : fastRpcCall();
          };
          _near.viewCalimero = function (contractId, methodName, args, blockId) {
            var viewCalimeroCall = function viewCalimeroCall() {
              return viewCall(_near.calimeroConnection.connection.provider, blockId !== null && blockId !== void 0 ? blockId : undefined, contractId, methodName, args, "final");
            };
            return viewCalimeroCall();
          };
          _near.requestFak = function (contractName, methodNames) {
            return requestFak("slackApp", _near, contractName, methodNames);
          };
          _near.requestCalimeroFak = function (componentName, contractName, methodNames) {
            return requestCalimeroFak(componentName, _near, contractName, methodNames);
          };
          _near.submitFakTransaction = function (contractName, methodName, args, gas, deposit) {
            return submitFakTransaction("slackApp", _near, contractName, methodName, args, gas, deposit);
          };
          _near.submitCalimeroFakTransaction = function (componentName, contractName, methodName, args, gas, deposit) {
            return submitFakCalimeroTransaction(componentName, _near, contractName, methodName, args, gas, deposit);
          };
          _near.verifyFak = function (contractName, methodNames) {
            return verifyFak("slackApp", _near, contractName, methodNames);
          };
          _near.verifyCalimeroFak = function (componentName, contractName, methodNames) {
            return verifyCalimeroFak(componentName, _near, contractName, methodNames);
          };
          _near.signWithCalimeroFak = function (componentName, contractName, message) {
            return signWithCalimeroFak(componentName, _near, contractName, message);
          };
          _near.block = function (blockHeightOrFinality) {
            var blockQuery = transformBlockId(blockHeightOrFinality);
            var provider = blockQuery.blockId ? _near.nearArchivalConnection.provider : _near.nearConnection.connection.provider;
            return provider.block(blockQuery);
          };
          _near.functionCall = function (contractName, methodName, args, gas, deposit) {
            return functionCall(_near, contractName, methodName, args, gas, deposit);
          };
          _near.sendTransactions = function (transactions) {
            return sendTransactions(_near, transactions);
          };
          _near.contract = setupContract(_near, config.contractName, {
            viewMethods: ["storage_balance_of", "get", "get_num_accounts", "get_accounts_paged", "is_write_permission_granted", "keys"],
            changeMethods: ["set", "grant_write_permission", "storage_deposit", "storage_withdraw"]
          });
          _near.accountState = function (accountId) {
            return accountState(_near, accountId);
          };
          return _context17.abrupt("return", _near);
        case 31:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return _initNear2.apply(this, arguments);
}
var useInitNear = (0,react_singleton_hook__WEBPACK_IMPORTED_MODULE_3__.singletonHook)({}, function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    nearPromise = _useState2[0],
    setNearPromise = _useState2[1];
  return {
    nearPromise: nearPromise,
    initNear: (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
      return function (args) {
        return setNearPromise(_initNear(args));
      };
    }, [])
  };
});
var defaultNear = null;
var useNear = (0,react_singleton_hook__WEBPACK_IMPORTED_MODULE_3__.singletonHook)(defaultNear, function () {
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultNear),
    _useState4 = _slicedToArray(_useState3, 2),
    near = _useState4[0],
    setNear = _useState4[1];
  var _useInitNear = useInitNear(),
    nearPromise = _useInitNear.nearPromise;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    nearPromise && nearPromise.then(setNear);
  }, [nearPromise]);
  return near;
});

/***/ }),

/***/ "./src/lib/data/utils.js":
/*!*******************************!*\
  !*** ./src/lib/data/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorFallback: () => (/* binding */ ErrorFallback),
/* harmony export */   Loading: () => (/* binding */ Loading),
/* harmony export */   MaxGasPerTransaction: () => (/* binding */ MaxGasPerTransaction),
/* harmony export */   OneNear: () => (/* binding */ OneNear),
/* harmony export */   ReactKey: () => (/* binding */ ReactKey),
/* harmony export */   StorageCostPerByte: () => (/* binding */ StorageCostPerByte),
/* harmony export */   TGas: () => (/* binding */ TGas),
/* harmony export */   availableNearBalance: () => (/* binding */ availableNearBalance),
/* harmony export */   bigMax: () => (/* binding */ bigMax),
/* harmony export */   bigMin: () => (/* binding */ bigMin),
/* harmony export */   bigToString: () => (/* binding */ bigToString),
/* harmony export */   computeWritePermission: () => (/* binding */ computeWritePermission),
/* harmony export */   convertToStringLeaves: () => (/* binding */ convertToStringLeaves),
/* harmony export */   dateToString: () => (/* binding */ dateToString),
/* harmony export */   deepCopy: () => (/* binding */ deepCopy),
/* harmony export */   deepEqual: () => (/* binding */ deepEqual),
/* harmony export */   deepFreeze: () => (/* binding */ deepFreeze),
/* harmony export */   displayGas: () => (/* binding */ displayGas),
/* harmony export */   displayNear: () => (/* binding */ displayNear),
/* harmony export */   displayTime: () => (/* binding */ displayTime),
/* harmony export */   estimateDataSize: () => (/* binding */ estimateDataSize),
/* harmony export */   extractKeys: () => (/* binding */ extractKeys),
/* harmony export */   indexMatch: () => (/* binding */ indexMatch),
/* harmony export */   ipfsUpload: () => (/* binding */ ipfsUpload),
/* harmony export */   ipfsUrl: () => (/* binding */ ipfsUrl),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isReactObject: () => (/* binding */ isReactObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isValidAccountId: () => (/* binding */ isValidAccountId),
/* harmony export */   isoDate: () => (/* binding */ isoDate),
/* harmony export */   keysToCamel: () => (/* binding */ keysToCamel),
/* harmony export */   patternMatch: () => (/* binding */ patternMatch),
/* harmony export */   removeDuplicates: () => (/* binding */ removeDuplicates)
/* harmony export */ });
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-equal */ "deep-equal");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js")["Buffer"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var TGas = big_js__WEBPACK_IMPORTED_MODULE_0___default()(10).pow(12);
var MaxGasPerTransaction = TGas.mul(250);
var StorageCostPerByte = big_js__WEBPACK_IMPORTED_MODULE_0___default()(10).pow(19);
var MinAccountIdLen = 2;
var MaxAccountIdLen = 64;
var ValidAccountRe = /^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/;
var OneNear = big_js__WEBPACK_IMPORTED_MODULE_0___default()(10).pow(24);
var AccountSafetyMargin = OneNear.div(2);
var Loading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
  className: "spinner-grow spinner-grow-sm me-1",
  role: "status",
  "aria-hidden": "true"
});
var ErrorFallback = function ErrorFallback(_ref) {
  var error = _ref.error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Something went wrong:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("pre", null, error.message));
};
function isValidAccountId(accountId) {
  return accountId && accountId.length >= MinAccountIdLen && accountId.length <= MaxAccountIdLen && accountId.match(ValidAccountRe);
}
var toCamel = function toCamel(s) {
  return s.replace(/([-_][a-z])/gi, function ($1) {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};
var isArray = function isArray(a) {
  return Array.isArray(a);
};
var isObject = function isObject(o) {
  return o === Object(o) && !isArray(o) && typeof o !== "function";
};
var isString = function isString(s) {
  return typeof s === "string";
};
var keysToCamel = function keysToCamel(o) {
  if (isObject(o)) {
    var n = {};
    Object.keys(o).forEach(function (k) {
      n[toCamel(k)] = keysToCamel(o[k]);
    });
    return n;
  } else if (isArray(o)) {
    return o.map(function (i) {
      return keysToCamel(i);
    });
  }
  return o;
};
var bigMin = function bigMin(a, b) {
  if (a && b) {
    return a.lt(b) ? a : b;
  }
  return a || b;
};
var bigMax = function bigMax(a, b) {
  if (a && b) {
    return a.gt(b) ? a : b;
  }
  return a || b;
};
var bigToString = function bigToString(b, p, len) {
  if (b === null) {
    return "???";
  }
  var s = b.toFixed();
  var pos = s.indexOf(".");
  p = p || 6;
  len = len || 7;
  if (pos > 0) {
    var ap = Math.min(p, Math.max(len - pos, 0));
    if (ap > 0) {
      ap += 1;
    }
    if (pos + ap < s.length) {
      s = s.substring(0, pos + ap);
    }
  } else {
    pos = s.length;
  }
  for (var i = pos - 4; i >= 0; i -= 3) {
    s = s.slice(0, i + 1) + "," + s.slice(i + 1);
  }
  if (s === "0.000000" && p === 6 && len === 7) {
    return "<0.000001";
  }
  return s;
};
var displayNear = function displayNear(balance) {
  return !balance ? "???" : balance.eq(1) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, "1 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "text-secondary"
  }, "yoctoNEAR")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, bigToString(balance.div(OneNear)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "text-secondary"
  }, "NEAR"));
};
var displayGas = function displayGas(gas) {
  return gas ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, bigToString(gas.div(TGas)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "text-secondary"
  }, "TGas")) : "???";
};
var dateToString = function dateToString(d) {
  return d.toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
};
var displayTime = function displayTime(d) {
  return d.toLocaleString();
};
var availableNearBalance = function availableNearBalance(account) {
  if (account && !account.loading && account.state) {
    var balance = big_js__WEBPACK_IMPORTED_MODULE_0___default()(account.state.amount).sub(big_js__WEBPACK_IMPORTED_MODULE_0___default()(account.state.storage_usage).mul(big_js__WEBPACK_IMPORTED_MODULE_0___default()(StorageCostPerByte)));
    if (balance.gt(AccountSafetyMargin)) {
      return balance.sub(AccountSafetyMargin);
    }
  }
  return big_js__WEBPACK_IMPORTED_MODULE_0___default()(0);
};
var isoDate = function isoDate(d) {
  return d ? new Date(d).toISOString().substring(0, 10) : "";
};
var ipfsUpload = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(f) {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://ipfs.near.social/add", {
            method: "POST",
            headers: {
              Accept: "application/json"
            },
            body: f
          });
        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();
        case 5:
          return _context.abrupt("return", _context.sent.cid);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function ipfsUpload(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var ipfsUrl = function ipfsUrl(cid) {
  return "https://ipfs.near.social/ipfs/".concat(cid);
};
var EstimatedKeyValueSize = 40 * 3 + 8 + 12;
var EstimatedNodeSize = 40 * 2 + 8 + 10;
var estimateDataSize = function estimateDataSize(data, prevData) {
  return isObject(data) ? Object.entries(data).reduce(function (s, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    var prevValue = isObject(prevData) ? prevData[key] : undefined;
    return s + (prevValue !== undefined ? estimateDataSize(value, prevValue) : key.length * 2 + estimateDataSize(value, undefined) + EstimatedKeyValueSize);
  }, isObject(prevData) ? 0 : EstimatedNodeSize) : ((data === null || data === void 0 ? void 0 : data.length) || 8) - (isString(prevData) ? prevData.length : 0);
};
var extractKeys = function extractKeys(data) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return Object.entries(data).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      key = _ref6[0],
      value = _ref6[1];
    return isObject(value) ? extractKeys(value, "".concat(prefix).concat(key, "/")) : "".concat(prefix).concat(key);
  }).flat();
};
var removeDuplicates = function removeDuplicates(data, prevData) {
  var obj = Object.entries(data).reduce(function (obj, _ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
      key = _ref8[0],
      value = _ref8[1];
    var prevValue = isObject(prevData) ? prevData[key] : undefined;
    if (isObject(value)) {
      var newValue = isObject(prevValue) ? removeDuplicates(value, prevValue) : value;
      if (newValue !== undefined) {
        obj[key] = newValue;
      }
    } else if (value !== prevValue) {
      obj[key] = value;
    }
    return obj;
  }, {});
  return Object.keys(obj).length ? obj : undefined;
};
var stringify = function stringify(s) {
  return isString(s) || s === null ? s : JSON.stringify(s);
};
var convertToStringLeaves = function convertToStringLeaves(data) {
  return isObject(data) ? Object.entries(data).reduce(function (obj, _ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
      key = _ref10[0],
      value = _ref10[1];
    obj[stringify(key)] = convertToStringLeaves(value);
    return obj;
  }, {}) : stringify(data);
};
var matchGet = function matchGet(obj, keys) {
  var matchKey = keys[0];
  var isRecursiveMatch = matchKey === "**";
  if (isRecursiveMatch) {
    return keys.length === 1;
  }
  var values = matchKey === "*" || isRecursiveMatch ? Object.values(obj) : matchKey in obj ? [obj[matchKey]] : [];
  return values.some(function (value) {
    return isObject(value) ? keys.length > 1 ? matchGet(value, keys.slice(1)) : value[""] !== undefined : keys.length === 1;
  });
};
var matchKeys = function matchKeys(obj, keys) {
  var matchKey = keys[0];
  var values = matchKey === "*" ? Object.values(obj) : matchKey in obj ? [obj[matchKey]] : [];
  return values.some(function (value) {
    return keys.length === 1 || isObject(value) && matchKeys(value, keys.slice(1));
  });
};
var patternMatch = function patternMatch(method, pattern, data) {
  var path = pattern.split("/");
  return method === "get" ? matchGet(data, path) : method === "keys" && matchKeys(data, path);
};
var indexMatch = function indexMatch(action, key, data) {
  return Object.values(data).some(function (value) {
    var _value$index;
    var indexValue = value === null || value === void 0 || (_value$index = value.index) === null || _value$index === void 0 ? void 0 : _value$index[action];
    try {
      return indexValue && JSON.stringify(JSON.parse(indexValue).key) === JSON.stringify(key);
    } catch (_unused) {
      return false;
    }
  });
};
var KnownSecondLevelKeys = {
  graph: true,
  post: true,
  index: true,
  settings: true
};
var computeWritePermission = function computeWritePermission(previousPermissions, data) {
  var permissions = isObject(previousPermissions) ? JSON.parse(JSON.stringify(previousPermissions)) : {};
  if (isObject(data)) {
    Object.entries(data).forEach(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2),
        key = _ref12[0],
        value = _ref12[1];
      if (key in KnownSecondLevelKeys) {
        if (isObject(value)) {
          var subPermissions = permissions[key] = permissions[key] || {};
          Object.keys(value).forEach(function (key) {
            subPermissions[key] = true;
          });
        } else {
          permissions[key] = true;
        }
      } else {
        permissions[key] = true;
      }
    });
  }

  // console.log(
  //   JSON.stringify(previousPermissions),
  //   JSON.stringify(data),
  //   JSON.stringify(permissions)
  // );
  return permissions;
};
function isGetter(obj, prop) {
  return !!Object.getOwnPropertyDescriptor(obj, prop)["get"];
}
var deepFreeze = function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach(function (prop) {
    if (!isGetter(obj, prop) && _typeof(obj[prop]) === "object" && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
};
var ReactKey = "$$typeof";
var isReactObject = function isReactObject(o) {
  return o !== null && _typeof(o) === "object" && !!o[ReactKey];
};
var deepCopy = function deepCopy(o) {
  if (Array.isArray(o)) {
    return o.map(function (v) {
      return deepCopy(v);
    });
  } else if (o instanceof Map) {
    return new Map(_toConsumableArray(o.entries()).map(function (_ref13) {
      var _ref14 = _slicedToArray(_ref13, 2),
        k = _ref14[0],
        v = _ref14[1];
      return [deepCopy(k), deepCopy(v)];
    }));
  } else if (o instanceof Set) {
    return new Set(_toConsumableArray(o).map(function (v) {
      return deepCopy(v);
    }));
  } else if (Buffer.isBuffer(o)) {
    return Buffer.from(o);
  } else if (o instanceof URL) {
    return new URL(o);
  } else if (o instanceof File) {
    return new File([o], o.name, {
      type: o.type
    });
  } else if (o instanceof Blob) {
    return new Blob([o], {
      type: o.type
    });
  } else if (o instanceof Uint8Array || o instanceof ArrayBuffer) {
    return o.slice(0);
  } else if (o instanceof ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BigNumber) {
    return o;
  } else if (o instanceof Date) {
    return new Date(o);
  } else if (o instanceof WebSocket) {
    return o;
  } else if (isObject(o)) {
    if (isReactObject(o)) {
      return o;
    }
    return Object.fromEntries(Object.entries(o).map(function (_ref15) {
      var _ref16 = _slicedToArray(_ref15, 2),
        key = _ref16[0],
        value = _ref16[1];
      return [key, deepCopy(value)];
    }));
  } else if (o === undefined || typeof o === "function") {
    return o;
  } else {
    return JSON.parse(JSON.stringify(o));
  }
};
var deepEqual = (deep_equal__WEBPACK_IMPORTED_MODULE_2___default());

/***/ }),

/***/ "./src/lib/vm/vm.js":
/*!**************************!*\
  !*** ./src/lib/vm/vm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VM)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Widget */ "./src/lib/components/Widget.js");
/* harmony import */ var _data_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/utils */ "./src/lib/data/utils.js");
/* harmony import */ var react_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-files */ "react-files");
/* harmony import */ var react_files__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_files__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @braintree/sanitize-url */ "@braintree/sanitize-url");
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Markdown */ "./src/lib/components/Markdown.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Commit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Commit */ "./src/lib/components/Commit.js");
/* harmony import */ var react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap-typeahead */ "react-bootstrap-typeahead");
/* harmony import */ var react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! crypto-browserify */ "crypto-browserify");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(crypto_browserify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! elliptic */ "elliptic");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bn.js */ "bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tweetnacl */ "tweetnacl");
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_SecureIframe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/SecureIframe */ "./src/lib/components/SecureIframe.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! nanoid */ "nanoid");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var acorn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! acorn */ "acorn");
/* harmony import */ var acorn__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(acorn__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var acorn_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! acorn-jsx */ "acorn-jsx");
/* harmony import */ var acorn_jsx__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(acorn_jsx__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! near-api-js */ "near-api-js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @radix-ui/react-accordion */ "@radix-ui/react-accordion");
/* harmony import */ var _radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "@radix-ui/react-alert-dialog");
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _radix_ui_react_aspect_ratio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @radix-ui/react-aspect-ratio */ "@radix-ui/react-aspect-ratio");
/* harmony import */ var _radix_ui_react_aspect_ratio__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_aspect_ratio__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @radix-ui/react-avatar */ "@radix-ui/react-avatar");
/* harmony import */ var _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @radix-ui/react-checkbox */ "@radix-ui/react-checkbox");
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @radix-ui/react-collapsible */ "@radix-ui/react-collapsible");
/* harmony import */ var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @radix-ui/react-context-menu */ "@radix-ui/react-context-menu");
/* harmony import */ var _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @radix-ui/react-dialog */ "@radix-ui/react-dialog");
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "@radix-ui/react-dropdown-menu");
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @radix-ui/react-hover-card */ "@radix-ui/react-hover-card");
/* harmony import */ var _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @radix-ui/react-label */ "@radix-ui/react-label");
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @radix-ui/react-menubar */ "@radix-ui/react-menubar");
/* harmony import */ var _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @radix-ui/react-navigation-menu */ "@radix-ui/react-navigation-menu");
/* harmony import */ var _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @radix-ui/react-popover */ "@radix-ui/react-popover");
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @radix-ui/react-progress */ "@radix-ui/react-progress");
/* harmony import */ var _radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @radix-ui/react-radio-group */ "@radix-ui/react-radio-group");
/* harmony import */ var _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @radix-ui/react-scroll-area */ "@radix-ui/react-scroll-area");
/* harmony import */ var _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @radix-ui/react-select */ "@radix-ui/react-select");
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @radix-ui/react-separator */ "@radix-ui/react-separator");
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @radix-ui/react-slider */ "@radix-ui/react-slider");
/* harmony import */ var _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @radix-ui/react-switch */ "@radix-ui/react-switch");
/* harmony import */ var _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @radix-ui/react-tabs */ "@radix-ui/react-tabs");
/* harmony import */ var _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @radix-ui/react-toast */ "@radix-ui/react-toast");
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @radix-ui/react-toggle */ "@radix-ui/react-toggle");
/* harmony import */ var _radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _radix_ui_react_toggle_group__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @radix-ui/react-toggle-group */ "@radix-ui/react-toggle-group");
/* harmony import */ var _radix_ui_react_toggle_group__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_toggle_group__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _radix_ui_react_toolbar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @radix-ui/react-toolbar */ "@radix-ui/react-toolbar");
/* harmony import */ var _radix_ui_react_toolbar__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_toolbar__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "@radix-ui/react-tooltip");
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _components_ethers__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../components/ethers */ "./src/lib/components/ethers.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js")["Buffer"];
var _ReservedKeys;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }























// Radix:





























var frozenNacl = Object.freeze({
  randomBytes: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(tweetnacl__WEBPACK_IMPORTED_MODULE_15__.randomBytes),
  secretbox: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(tweetnacl__WEBPACK_IMPORTED_MODULE_15__.secretbox),
  scalarMult: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(tweetnacl__WEBPACK_IMPORTED_MODULE_15__.scalarMult),
  box: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(tweetnacl__WEBPACK_IMPORTED_MODULE_15__.box),
  sign: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(tweetnacl__WEBPACK_IMPORTED_MODULE_15__.sign),
  hash: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(tweetnacl__WEBPACK_IMPORTED_MODULE_15__.hash),
  verify: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(tweetnacl__WEBPACK_IMPORTED_MODULE_15__.verify)
});
var frozenEthers = Object.freeze({
  utils: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(ethers__WEBPACK_IMPORTED_MODULE_49__.ethers.utils),
  BigNumber: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(ethers__WEBPACK_IMPORTED_MODULE_49__.ethers.BigNumber),
  Contract: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(ethers__WEBPACK_IMPORTED_MODULE_49__.ethers.Contract)
});

// `nanoid.nanoid()` is a but odd, but it seems better to match the official
// API than to create an alias
var frozenNanoid = Object.freeze({
  nanoid: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(nanoid__WEBPACK_IMPORTED_MODULE_17__.nanoid),
  customAlphabet: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepFreeze)(nanoid__WEBPACK_IMPORTED_MODULE_17__.customAlphabet)
});
var LoopLimit = 1000000;
var MaxDepth = 32;
var StakeKey = "state";
var ExpressionDebug = false;
var StatementDebug = false;
var MAX_INTERVALS = 16;
var StorageType = {
  Private: "private",
  Public: "public"
};
var ApprovedTagsSimple = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  div: true,
  span: true,
  strong: true,
  sub: true,
  sup: true,
  pre: true,
  i: true,
  b: true,
  p: true,
  input: true,
  button: true,
  fieldset: true,
  ul: true,
  ol: true,
  li: true,
  table: true,
  tr: true,
  th: true,
  td: true,
  thead: true,
  tbody: true,
  tfoot: true,
  br: false,
  hr: false,
  img: false,
  textarea: true,
  select: true,
  option: true,
  label: true,
  small: true,
  // svg begin
  svg: true,
  animate: false,
  animateMotion: false,
  animateTransform: false,
  defs: true,
  circle: true,
  clipPath: true,
  ellipse: true,
  g: true,
  image: false,
  line: true,
  linearGradient: true,
  marker: true,
  mask: true,
  mpath: false,
  path: true,
  pattern: true,
  polygon: true,
  polyline: true,
  radialGradient: true,
  rect: true,
  set: false,
  stop: false,
  symbol: true,
  text: true,
  textPath: true,
  tspan: true,
  use: false,
  // svg ends
  a: true
};
var ApprovedTagsCustom = {
  Widget: false,
  CommitButton: true,
  IpfsImageUpload: false,
  Markdown: false,
  Fragment: true,
  InfiniteScroll: true,
  Typeahead: false,
  Tooltip: true,
  OverlayTrigger: true,
  Files: true,
  iframe: false,
  Web3Connect: false
};

// will be dynamically indexed into for fetching specific elements
// like Progress.Root
var RadixTags = {
  Accordion: _radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_22__,
  AlertDialog: _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_23__,
  AspectRatio: _radix_ui_react_aspect_ratio__WEBPACK_IMPORTED_MODULE_24__,
  Avatar: _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_25__,
  Checkbox: _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_26__,
  Collapsible: _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_27__,
  ContextMenu: _radix_ui_react_context_menu__WEBPACK_IMPORTED_MODULE_28__,
  Dialog: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_29__,
  DropdownMenu: _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_30__,
  HoverCard: _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_31__,
  Label: _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_32__,
  Menubar: _radix_ui_react_menubar__WEBPACK_IMPORTED_MODULE_33__,
  NavigationMenu: _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_34__,
  Popover: _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_35__,
  Progress: _radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_36__,
  RadioGroup: _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_37__,
  ScrollArea: _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_38__,
  Select: _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_39__,
  Separator: _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_40__,
  Slider: _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_41__,
  Switch: _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_42__,
  Tabs: _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_43__,
  Toast: _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_44__,
  Toggle: _radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_45__,
  ToggleGroup: _radix_ui_react_toggle_group__WEBPACK_IMPORTED_MODULE_46__,
  Toolbar: _radix_ui_react_toolbar__WEBPACK_IMPORTED_MODULE_47__,
  Tooltip: _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_48__
};
var ApprovedTags = _objectSpread(_objectSpread({}, ApprovedTagsSimple), ApprovedTagsCustom);
var Keywords = {
  JSON: true,
  Social: true,
  Storage: true,
  Near: true,
  State: true,
  console: true,
  styled: true,
  Object: true,
  Date: Date,
  Number: Number,
  Big: (big_js__WEBPACK_IMPORTED_MODULE_12___default()),
  Math: Math,
  Buffer: Buffer,
  Audio: Audio,
  Image: Image,
  File: File,
  Blob: Blob,
  FileReader: FileReader,
  URL: URL,
  Array: Array,
  BN: (bn_js__WEBPACK_IMPORTED_MODULE_14___default()),
  Uint8Array: Uint8Array,
  Map: Map,
  Set: Set,
  clipboard: true,
  Ethers: true,
  WebSocket: true,
  VM: true,
  Calimero: true,
  Crypto: true,
  Promise: Promise
};
var ReservedKeys = (_ReservedKeys = {}, _defineProperty(_ReservedKeys, _data_utils__WEBPACK_IMPORTED_MODULE_2__.ReactKey, true), _defineProperty(_ReservedKeys, "constructor", true), _defineProperty(_ReservedKeys, "prototype", true), _defineProperty(_ReservedKeys, "__proto__", true), _defineProperty(_ReservedKeys, "__defineGetter__", true), _defineProperty(_ReservedKeys, "__defineSetter__", true), _defineProperty(_ReservedKeys, "__lookupGetter__", true), _defineProperty(_ReservedKeys, "__lookupSetter__", true), _ReservedKeys);
var AcornOptions = {
  ecmaVersion: 13,
  allowReturnOutsideFunction: true
};
var ParsedCodeCache = {};
var JsxParser = acorn__WEBPACK_IMPORTED_MODULE_19__.Parser.extend(acorn_jsx__WEBPACK_IMPORTED_MODULE_20___default()());
var parseCode = function parseCode(code) {
  if (code in ParsedCodeCache) {
    return ParsedCodeCache[code];
  }
  return ParsedCodeCache[code] = JsxParser.parse(code, AcornOptions);
};
var assertNotReservedKey = function assertNotReservedKey(key) {
  if (ReservedKeys[key] === true) {
    throw new Error("".concat(key, " is reserved and can't be used"));
  }
};
var assertNotReactObject = function assertNotReactObject(o) {
  if ((0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isReactObject)(o)) {
    throw new Error("React objects shouldn't dereferenced");
  }
};
var assertValidObject = function assertValidObject(o) {
  if (o !== null && _typeof(o) === "object") {
    Object.entries(o).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      assertNotReservedKey(key);
      assertValidObject(value);
    });
  }
};
var assertRadixComponent = function assertRadixComponent(element) {
  var isRadixElement = Object.keys(RadixTags).includes(element.split(".")[0]);
  if (!isRadixElement) return;
  var elementTokens = element.split(".");
  var RadixComp = elementTokens.reduce(function (acc, curr) {
    return acc[curr];
  }, RadixTags);
  if (RadixComp === undefined) {
    throw new Error("\"".concat(element, "\" is not a valid Radix component"));
  }
  return RadixComp;
};
var maybeSubscribe = function maybeSubscribe(subscribe, blockId) {
  return subscribe && (blockId === undefined || blockId === null || blockId === "final" || blockId === "optimistic");
};
var requireIdentifier = function requireIdentifier(id) {
  if (id.type !== "Identifier") {
    throw new Error("Non identifier: " + id.type);
  }
  var name = id.name;
  assertNotReservedKey(name);
  if (name in Keywords) {
    throw new Error("Cannot use keyword: " + name);
  }
  return {
    type: "Identifier",
    name: name
  };
};
var requireJSXIdentifier = function requireJSXIdentifier(id) {
  if (id.type !== "JSXIdentifier") {
    throw new Error("Non JSXIdentifier: " + id.type);
  }
  return id.name;
};
var requireJSXIdentifierOrMemberExpression = function requireJSXIdentifierOrMemberExpression(id) {
  if (id.type === "JSXIdentifier") {
    return id.name;
  } else if (id.type === "JSXMemberExpression") {
    return requireJSXIdentifierOrMemberExpression(id.object) + "." + requireJSXIdentifier(id.property);
  } else {
    throw new Error("Non JSXIdentifier or JSXMemberExpression: " + id.type);
  }
};
var requirePattern = function requirePattern(id) {
  if (id.type === "Identifier") {
    return requireIdentifier(id);
  } else if (id.type === "ArrayPattern") {
    return {
      type: "ArrayPattern",
      elements: id.elements.map(requirePattern)
    };
  } else if (id.type === "ObjectPattern") {
    return {
      type: "ObjectPattern",
      properties: id.properties.map(function (p) {
        if (p.type === "Property") {
          return {
            key: requireIdentifier(p.key),
            value: requirePattern(p.value)
          };
        } else if (p.type === "RestElement") {
          return {
            type: "RestElement",
            argument: requireIdentifier(p.argument)
          };
        } else {
          throw new Error("Unknown property type: " + p.type);
        }
      })
    };
  } else if (id.type === "RestElement") {
    return {
      type: "RestElement",
      argument: requireIdentifier(id.argument)
    };
  } else {
    throw new Error("Unknown pattern: " + id.type);
  }
};
var Stack = /*#__PURE__*/function () {
  function Stack(prevStack, state) {
    _classCallCheck(this, Stack);
    this.prevStack = prevStack;
    this.state = state;
  }
  _createClass(Stack, [{
    key: "findObj",
    value: function findObj(name) {
      if (name in this.state) {
        return this.state;
      }
      return this.prevStack ? this.prevStack.findObj(name) : undefined;
    }
  }, {
    key: "get",
    value: function get(name) {
      if (name in this.state) {
        return this.state[name];
      }
      return this.prevStack ? this.prevStack.get(name) : undefined;
    }
  }]);
  return Stack;
}();
var VmStack = /*#__PURE__*/function () {
  function VmStack(vm, prevStack, state, isTrusted) {
    _classCallCheck(this, VmStack);
    this.gIndex = 0;
    this.vm = vm;
    this.isTrusted = !!isTrusted;
    this.stack = new Stack(prevStack, state);
  }
  _createClass(VmStack, [{
    key: "newStack",
    value: function newStack(isTrusted) {
      return new VmStack(this.vm, this.stack, {}, this.isTrusted || !!isTrusted);
    }
  }, {
    key: "executeExpression",
    value: function executeExpression(code) {
      ExpressionDebug && console.log("Executing code:", code === null || code === void 0 ? void 0 : code.type);
      var res = this.executeExpressionInternal(code);
      ExpressionDebug && console.log(code === null || code === void 0 ? void 0 : code.type, res);
      return res;
    }
  }, {
    key: "renderElement",
    value: function renderElement(code) {
      var _this = this,
        _attributes$key;
      var element = code.type === "JSXFragment" ? "Fragment" : requireJSXIdentifierOrMemberExpression(code.openingElement.name);
      var withChildren = ApprovedTags[element];
      var customElement = null;
      if (withChildren === undefined) {
        if (this.vm.near.config.customElements.hasOwnProperty(element)) {
          withChildren = true;
          customElement = this.vm.near.config.customElements[element];
        }
      }
      var RadixComp = assertRadixComponent(element);
      var customComponent = withChildren === undefined && this.executeExpression(code.openingElement.name);
      if (withChildren === undefined && !RadixComp) {
        if (customComponent === undefined) {
          throw new Error("Unknown element: " + element);
        }
        if (!(0,styled_components__WEBPACK_IMPORTED_MODULE_9__.isStyledComponent)(customComponent) && typeof customComponent !== "function") {
          throw new Error("Unsupported component: " + element);
        }
      }
      var attributes = {};
      var status = {};
      if (element === "input") {
        attributes.className = "form-control";
      } else if (element === "CommitButton") {
        attributes.className = "btn btn-success";
      } else if (element === "button") {
        attributes.className = "btn btn-primary";
      } else if (element === "IpfsImageUpload") {
        attributes.className = "btn btn-outline-primary";
      }
      var rawAttributes = {};
      (code.type === "JSXFragment" ? code.openingFragment : code.openingElement).attributes.forEach(function (attribute) {
        if (attribute.type === "JSXAttribute") {
          var name = requireJSXIdentifier(attribute.name);
          attributes[name] = attribute.value === null ? true : _this.executeExpression(attribute.value);
          if (name === "value" || name === "image" || name === "onChange") {
            rawAttributes[name] = attribute.value;
          }
        } else if (attribute.type === "JSXSpreadAttribute") {
          var value = _this.executeExpression(attribute.argument);
          Object.assign(attributes, value);
        } else {
          throw new Error("Unknown attribute type: " + attribute.type);
        }
      });
      if (attributes.ref === "forwardedRef") {
        attributes = _objectSpread(_objectSpread({}, attributes), this.vm.forwardedProps);
      }
      Object.entries(rawAttributes).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          value = _ref4[1];
        if (name === "value" && element === "input" && attributes.type === "text" && value.type === "JSXExpressionContainer" && !("onChange" in rawAttributes)) {
          var _this$resolveMemberEx = _this.resolveMemberExpression(value.expression, {
              requireState: true,
              left: true
            }),
            obj = _this$resolveMemberEx.obj,
            key = _this$resolveMemberEx.key;
          attributes.value = (obj === null || obj === void 0 ? void 0 : obj[key]) || "";
          attributes.onChange = function (e) {
            e.preventDefault();
            obj[key] = e.target.value;
            _this.vm.setReactState(_this.vm.state.state);
          };
        } else if (name === "image" && element === "IpfsImageUpload" && value.type === "JSXExpressionContainer") {
          var _this$resolveMemberEx2 = _this.resolveMemberExpression(value.expression, {
              requireState: true,
              left: true
            }),
            _obj = _this$resolveMemberEx2.obj,
            _key = _this$resolveMemberEx2.key;
          status.img = _obj[_key];
          attributes.onChange = function (files) {
            if ((files === null || files === void 0 ? void 0 : files.length) > 0) {
              _obj[_key] = {
                uploading: true,
                cid: null
              };
              _this.vm.setReactState(_this.vm.state.state);
              (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.ipfsUpload)(files[0]).then(function (cid) {
                if (!_this.vm.alive) {
                  return;
                }
                var _this$vm$vmStack$reso = _this.vm.vmStack.resolveMemberExpression(value.expression, {
                    requireState: true,
                    left: true
                  }),
                  obj = _this$vm$vmStack$reso.obj,
                  key = _this$vm$vmStack$reso.key;
                obj[key] = {
                  cid: cid
                };
                _this.vm.setReactState(_this.vm.state.state);
              });
            } else {
              _obj[_key] = null;
              _this.vm.setReactState(_this.vm.state.state);
            }
          };
        }
      });
      attributes.key = (_attributes$key = attributes.key) !== null && _attributes$key !== void 0 ? _attributes$key : "".concat(this.vm.widgetSrc, "-").concat(element, "-").concat(this.vm.gIndex);
      delete attributes.dangerouslySetInnerHTML;
      var basicElement = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.isStyledComponent)(customComponent) && (customComponent === null || customComponent === void 0 ? void 0 : customComponent.target) || element;
      if (attributes.as && !ApprovedTagsSimple[attributes.as]) {
        delete attributes.as;
      }
      if (attributes.forwardedAs && !ApprovedTagsSimple[attributes.forwardedAs]) {
        delete attributes.forwardedAs;
      }
      if (basicElement === "img") {
        var _attributes$alt;
        attributes.alt = (_attributes$alt = attributes.alt) !== null && _attributes$alt !== void 0 ? _attributes$alt : "not defined";
      } else if (basicElement === "a") {
        Object.entries(attributes).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
            name = _ref6[0],
            value = _ref6[1];
          if (name.toLowerCase() === "href") {
            attributes[name] = (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_4__.sanitizeUrl)(value);
          }
        });
      } else if (element === "Widget") {
        attributes.depth = this.vm.depth + 1;
        attributes.config = [attributes.config].concat(_toConsumableArray(this.vm.widgetConfigs)).filter(Boolean);
      }
      if (withChildren === false && code.children.length) {
        throw new Error("And element '" + element + "' contains children, but shouldn't");
      }
      var children = code.children.map(function (child, i) {
        _this.vm.gIndex = i;
        return _this.executeExpression(child);
      });
      if (customElement) {
        return customElement(_objectSpread(_objectSpread({}, attributes), {}, {
          children: children
        }));
      } else if (customComponent) {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.isStyledComponent)(customComponent) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement.apply((react__WEBPACK_IMPORTED_MODULE_0___default()), [customComponent, _objectSpread({}, attributes)].concat(_toConsumableArray(children))) : customComponent(_objectSpread({
          children: children
        }, attributes));
      } else if (element === "Widget") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Widget__WEBPACK_IMPORTED_MODULE_1__.Widget, attributes);
      } else if (element === "CommitButton") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Commit__WEBPACK_IMPORTED_MODULE_7__.CommitButton, _extends({}, attributes, {
          widgetSrc: this.vm.widgetSrc
        }), children);
      } else if (element === "InfiniteScroll") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_infinite_scroller__WEBPACK_IMPORTED_MODULE_6___default()), attributes, children);
      } else if (element === "Tooltip") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Tooltip, attributes, children);
      } else if (element === "OverlayTrigger") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.OverlayTrigger, attributes, children.filter(function (c) {
          return !(0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isString)(c) || !!c.trim();
        })[0]);
      } else if (element === "Typeahead") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__.Typeahead, attributes);
      } else if (element === "Markdown") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Markdown__WEBPACK_IMPORTED_MODULE_5__.Markdown, attributes);
      } else if (element === "Fragment") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), attributes, children);
      } else if (element === "IpfsImageUpload") {
        var _status$img, _status$img2, _status$img3, _status$img4;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "d-inline-block",
          key: attributes.key
        }, ((_status$img = status.img) === null || _status$img === void 0 ? void 0 : _status$img.cid) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "d-inline-block me-2 overflow-hidden align-middle",
          style: {
            width: "2.5em",
            height: "2.5em"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          className: "rounded w-100 h-100",
          style: {
            objectFit: "cover"
          },
          src: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.ipfsUrl)((_status$img2 = status.img) === null || _status$img2 === void 0 ? void 0 : _status$img2.cid),
          alt: "upload preview"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_files__WEBPACK_IMPORTED_MODULE_3___default()), _extends({
          multiple: false,
          accepts: ["image/*"],
          minFileSize: 1,
          clickable: true
        }, attributes), (_status$img3 = status.img) !== null && _status$img3 !== void 0 && _status$img3.uploading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, _data_utils__WEBPACK_IMPORTED_MODULE_2__.Loading, " Uploading") : (_status$img4 = status.img) !== null && _status$img4 !== void 0 && _status$img4.cid ? "Replace" : "Upload an Image"));
      } else if (element === "Files") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_files__WEBPACK_IMPORTED_MODULE_3___default()), attributes, children);
      } else if (element === "iframe") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SecureIframe__WEBPACK_IMPORTED_MODULE_16__["default"], attributes);
      } else if (element === "Web3Connect") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ethers__WEBPACK_IMPORTED_MODULE_50__.Web3ConnectButton, attributes);
      } else if (RadixComp) {
        if (element.includes("Portal")) {
          throw new Error("Radix's \"".concat(element, "\" component is not allowed. This portal element is an optional Radix feature and isn't necessary for most use cases."));
        }
        var newChildren = children;
        if (Array.isArray(newChildren)) {
          newChildren = newChildren.filter(function (c) {
            return typeof c !== "string" || c.trim() !== "";
          });
          if (newChildren.length === 1) {
            newChildren = newChildren[0];
          } else if (newChildren.length === 0) {
            newChildren = undefined;
          }
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RadixComp, attributes, newChildren);
      } else if (withChildren === true) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement.apply((react__WEBPACK_IMPORTED_MODULE_0___default()), [element, _objectSpread({}, attributes)].concat(_toConsumableArray(children)));
      } else if (withChildren === false) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(element, _objectSpread({}, attributes));
      } else {
        throw new Error("Unsupported element: " + element);
      }
    }
  }, {
    key: "resolveKey",
    value: function resolveKey(code, computed) {
      var key = !computed && (code.type === "Identifier" || code.type === "JSXIdentifier") ? code.name : this.executeExpression(code);
      assertNotReservedKey(key);
      return key;
    }
  }, {
    key: "callFunction",
    value: function callFunction(keyword, callee, args, optional, isNew) {
      var _this2 = this;
      var keywordType = Keywords[keyword];
      if (keywordType === true || keywordType === undefined) {
        if (keyword === "Promise") {
          console.log("Promise", callee, args, optional, isNew);
        }
        if (keyword === "Social" && callee === "getr" || callee === "socialGetr") {
          if (args.length < 1) {
            throw new Error("Missing argument 'keys' for Social.getr");
          }
          return this.vm.cachedSocialGet(args[0], true, args[1], args[2]);
        } else if (keyword === "Social" && callee === "get" || callee === "socialGet") {
          if (args.length < 1) {
            throw new Error("Missing argument 'keys' for Social.get");
          }
          return this.vm.cachedSocialGet(args[0], false, args[1], args[2]);
        } else if (keyword === "Social" && callee === "keys") {
          if (args.length < 1) {
            throw new Error("Missing argument 'keys' for Social.keys");
          }
          return this.vm.cachedSocialKeys(args[0], args[1], args[2]);
        } else if (keyword === "Social" && callee === "index") {
          if (args.length < 2) {
            throw new Error("Missing argument 'action' and 'key` for Social.index");
          }
          return this.vm.cachedIndex(args[0], args[1], args[2]);
        } else if (keyword === "Social" && callee === "set") {
          if (args.length < 1) {
            throw new Error("Missing argument 'data' for Social.set");
          }
          return this.vm.socialSet(args[0], args[1]);
        } else if (keyword === "Near" && callee === "view") {
          if (args.length < 2) {
            throw new Error("Method: Near.view. Required arguments: 'contractName', 'methodName'. Optional: 'args', 'blockId/finality', 'subscribe'");
          }
          var _args = _slicedToArray(args, 5),
            contractName = _args[0],
            methodName = _args[1],
            viewArg = _args[2],
            blockId = _args[3],
            subscribe = _args[4];
          return this.vm.cachedNearView(contractName, methodName, viewArg, blockId, maybeSubscribe(subscribe, blockId));
        } else if (keyword === "Near" && callee === "calimeroView") {
          if (args.length < 2) {
            throw new Error("Method: Near.view. Required arguments: 'contractName', 'methodName'. Optional: 'args', 'blockId/finality', 'subscribe'");
          }
          var _args2 = _slicedToArray(args, 5),
            _contractName = _args2[0],
            _methodName = _args2[1],
            _viewArg = _args2[2],
            _blockId = _args2[3],
            _subscribe = _args2[4];
          return this.vm.cachedCalimeroView(_contractName, _methodName, _viewArg, _blockId, maybeSubscribe(_subscribe, _blockId));
        } else if (keyword === "Near" && callee === "asyncView") {
          var _this$vm;
          if (args.length < 2) {
            throw new Error("Method: Near.asyncView. Required arguments: 'contractName', 'methodName'. Optional: 'args', 'blockId/finality'");
          }
          return (_this$vm = this.vm).asyncNearView.apply(_this$vm, _toConsumableArray(args));
        } else if (keyword === "Near" && callee === "asyncCalimeroView") {
          var _this$vm2;
          if (args.length < 2) {
            throw new Error("Method: Near.asyncView. Required arguments: 'contractName', 'methodName'. Optional: 'args', 'blockId/finality'");
          }
          return (_this$vm2 = this.vm).asyncCalimeroView.apply(_this$vm2, _toConsumableArray(args));
        } else if (keyword === "Near" && callee === "block") {
          var _args3 = _slicedToArray(args, 2),
            _blockId2 = _args3[0],
            _subscribe2 = _args3[1];
          return this.vm.cachedNearBlock(_blockId2, maybeSubscribe(_subscribe2, _blockId2));
        } else if (keyword === "Near" && callee === "call") {
          if (args.length === 1) {
            if ((0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(args[0])) {
              return this.vm.confirmTransactions([args[0]]);
            } else if ((0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isArray)(args[0])) {
              return this.vm.confirmTransactions(args[0]);
            } else {
              throw new Error("Method: Near.call. Required argument: 'tx/txs'. A single argument call requires an TX object or an array of TX objects.");
            }
          } else {
            var _args$;
            if (args.length < 2 || args.length > 5) {
              throw new Error("Method: Near.call. Required argument: 'contractName'. If the first argument is a string: 'methodName'. Optional: 'args', 'gas' (defaults to 300Tg), 'deposit' (defaults to 0)");
            }
            return this.vm.confirmTransactions([{
              contractName: args[0],
              methodName: args[1],
              args: (_args$ = args[2]) !== null && _args$ !== void 0 ? _args$ : {},
              gas: args[3],
              deposit: args[4]
            }]);
          }
        } else if (keyword === "Near" && callee === "requestFak") {
          var _this$vm$near;
          return (_this$vm$near = this.vm.near).requestFak.apply(_this$vm$near, _toConsumableArray(args));
        } else if (keyword === "Near" && callee === "requestCalimeroFak") {
          var _this$vm$near2;
          return (_this$vm$near2 = this.vm.near).requestCalimeroFak.apply(_this$vm$near2, [this.vm.widgetSrc].concat(_toConsumableArray(args)));
        } else if (keyword === "Near" && callee === "hasValidCalimeroFak") {
          var _this$vm$near3;
          return (_this$vm$near3 = this.vm.near).verifyCalimeroFak.apply(_this$vm$near3, [this.vm.widgetSrc].concat(_toConsumableArray(args)));
        } else if (keyword === "Near" && callee === "hasValidFak") {
          var _this$vm$near4;
          return (_this$vm$near4 = this.vm.near).verifyFak.apply(_this$vm$near4, _toConsumableArray(args));
        } else if (keyword === "Near" && callee === "fakCalimeroCall") {
          var _args$2;
          if (args.length < 2 || args.length > 5) {
            throw new Error("Method: Near.call. Required argument: 'contractName'. If the first argument is a string: 'methodName'. Optional: 'args', 'gas' (defaults to 300Tg), 'deposit' (defaults to 0)");
          }
          return this.vm.near.submitCalimeroFakTransaction(this.vm.widgetSrc, args[0], args[1], (_args$2 = args[2]) !== null && _args$2 !== void 0 ? _args$2 : {}, args[3], args[4]);
        } else if (keyword === "Near" && callee === "fakCall") {
          var _args$3;
          if (args.length < 2 || args.length > 5) {
            throw new Error("Method: Near.call. Required argument: 'contractName'. If the first argument is a string: 'methodName'. Optional: 'args', 'gas' (defaults to 300Tg), 'deposit' (defaults to 0)");
          }
          return this.vm.near.submitFakTransaction(args[0], args[1], (_args$3 = args[2]) !== null && _args$3 !== void 0 ? _args$3 : {}, args[3], args[4]);
        } else if (keyword === "Calimero" && callee === "sign") {
          if (args.length !== 2) {
            throw new Error("Method: Calimero.sign. Required arguments: 'contractName' -> contract that will verify signature. 'message' -> message to be signed.");
          }
          return this.vm.near.signWithCalimeroFak(this.vm.widgetSrc, args[0], args[1]);
        } else if (callee === "fetch") {
          var _this$vm3;
          if (args.length < 1) {
            throw new Error("Method: fetch. Required arguments: 'url'. Optional: 'options'");
          }
          return (_this$vm3 = this.vm).cachedFetch.apply(_this$vm3, _toConsumableArray(args));
        } else if (callee === "asyncFetch") {
          var _this$vm4;
          if (args.length < 1) {
            throw new Error("Method: asyncFetch. Required arguments: 'url'. Optional: 'options'");
          }
          return (_this$vm4 = this.vm).asyncFetch.apply(_this$vm4, _toConsumableArray(args));
        } else if (callee === "useCache") {
          var _this$vm5;
          if (args.length < 2) {
            throw new Error("Method: useCache. Required arguments: 'promiseGenerator', 'dataKey'. Optional: 'options'");
          }
          if (!(args[0] instanceof Function)) {
            throw new Error("Method: useCache. The first argument 'promiseGenerator' must be a function");
          }
          return (_this$vm5 = this.vm).useCache.apply(_this$vm5, _toConsumableArray(args));
        } else if (callee === "parseInt") {
          return parseInt.apply(void 0, _toConsumableArray(args));
        } else if (callee === "parseFloat") {
          return parseFloat.apply(void 0, _toConsumableArray(args));
        } else if (callee === "isNaN") {
          return isNaN.apply(void 0, _toConsumableArray(args));
        } else if (callee === "setTimeout") {
          var _args4 = _slicedToArray(args, 2),
            callback = _args4[0],
            timeout = _args4[1];
          var timer = setTimeout(function () {
            if (!_this2.vm.alive) {
              return;
            }
            callback();
          }, timeout);
          this.vm.timeouts.add(timer);
          return timer;
        } else if (callee === "setInterval") {
          if (this.vm.intervals.size >= MAX_INTERVALS) {
            throw new Error("Too many intervals. Max allowed: ".concat(MAX_INTERVALS));
          }
          var _args5 = _slicedToArray(args, 2),
            _callback = _args5[0],
            _timeout = _args5[1];
          var _timer = setInterval(function () {
            if (!_this2.vm.alive) {
              return;
            }
            _callback();
          }, _timeout);
          this.vm.intervals.add(_timer);
          return _timer;
        } else if (callee === "clearTimeout") {
          var _timer2 = args[0];
          this.vm.timeouts.delete(_timer2);
          return clearTimeout(_timer2);
        } else if (callee === "clearInterval") {
          var _timer3 = args[0];
          this.vm.intervals.delete(_timer3);
          return clearInterval(_timer3);
        } else if (keyword === "JSON" && callee === "stringify" || callee === "stringify") {
          if (args.length < 1) {
            throw new Error("Missing argument 'obj' for JSON.stringify");
          }
          assertNotReactObject(args[0]);
          return JSON.stringify(args[0], args[1], args[2]);
        } else if (keyword === "JSON" && callee === "parse") {
          if (args.length < 1) {
            throw new Error("Missing argument 's' for JSON.parse");
          }
          try {
            var obj = JSON.parse(args[0]);
            assertValidObject(obj);
            return obj;
          } catch (e) {
            return null;
          }
        } else if (keyword === "Object") {
          if (callee === "keys") {
            if (args.length < 1) {
              throw new Error("Missing argument 'obj' for Object.keys");
            }
            assertNotReactObject(args[0]);
            return Object.keys(args[0]);
          } else if (callee === "values") {
            if (args.length < 1) {
              throw new Error("Missing argument 'obj' for Object.values");
            }
            assertNotReactObject(args[0]);
            return Object.values(args[0]);
          } else if (callee === "entries") {
            if (args.length < 1) {
              throw new Error("Missing argument 'obj' for Object.entries");
            }
            assertNotReactObject(args[0]);
            return Object.entries(args[0]);
          } else if (callee === "assign") {
            args.forEach(function (arg) {
              return assertNotReactObject(arg);
            });
            var _obj2 = Object.assign.apply(Object, _toConsumableArray(args));
            assertValidObject(_obj2);
            return _obj2;
          } else if (callee === "fromEntries") {
            var _obj3 = Object.fromEntries(args[0]);
            assertValidObject(_obj3);
            return _obj3;
          }
        } else if (keyword === "Crypto" && callee === "randomBytes") {
          if (args.length < 1) {
            throw new Error("Missing argument 'n' for Crypto.randomBytes");
          }
          return (0,crypto_browserify__WEBPACK_IMPORTED_MODULE_11__.randomBytes)(args[0]);
        } else if (keyword === "Crypto" && callee === "createCipheriv") {
          return crypto_browserify__WEBPACK_IMPORTED_MODULE_11__.createCipheriv.apply(void 0, _toConsumableArray(args));
        } else if (keyword === "Crypto" && callee === "createDecipheriv") {
          return crypto_browserify__WEBPACK_IMPORTED_MODULE_11__.createDecipheriv.apply(void 0, _toConsumableArray(args));
        } else if (keyword === "Promise" && callee === "create") {
          console.log("Promise.create", args[0]);
          return new Promise(args[0]);
        } else if (keyword === "Promise" && callee === "all") {
          console.log("Promise.all", args[0]);
          return Promise.all(args[0]);
        } else if (keyword === "Promise" && callee === "any") {
          console.log("Promise.any", args[0]);
          return Promise.any(args[0]);
        } else if (keyword === "State" && callee === "init" || callee === "initState") {
          if (args.length < 1) {
            throw new Error("Missing argument 'initialState' for State.init");
          }
          if (args[0] === null || _typeof(args[0]) !== "object" || (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isReactObject)(args[0])) {
            throw new Error("'initialState' is not an object");
          }
          if (this.vm.state.state === undefined) {
            var newState = args[0];
            this.vm.state.state = newState;
            this.vm.setReactState(newState);
          }
          return this.vm.state.state;
        } else if (keyword === "State" && callee === "update") {
          if ((0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(args[0])) {
            var _this$vm$state$state;
            this.vm.state.state = (_this$vm$state$state = this.vm.state.state) !== null && _this$vm$state$state !== void 0 ? _this$vm$state$state : {};
            Object.assign(this.vm.state.state, args[0]);
          } else if (args[0] instanceof Function) {
            var _this$vm$state$state2;
            this.vm.state.state = (_this$vm$state$state2 = this.vm.state.state) !== null && _this$vm$state$state2 !== void 0 ? _this$vm$state$state2 : {};
            this.vm.state.state = args[0](this.vm.state.state);
          }
          if (this.vm.state.state === undefined) {
            throw new Error("The state was not initialized");
          }
          this.vm.setReactState(this.vm.state.state);
          return this.vm.state.state;
        } else if (keyword === "State" && callee === "get") {
          return this.vm.state.state;
        } else if (keyword === "Storage" && callee === "privateSet") {
          if (args.length < 2) {
            throw new Error("Missing argument 'key' or 'value' for Storage.privateSet");
          }
          return this.vm.storageSet({
            src: this.vm.widgetSrc,
            type: StorageType.Private
          }, args[0], args[1]);
        } else if (keyword === "Storage" && callee === "privateGet") {
          if (args.length < 1) {
            throw new Error("Missing argument 'key' for Storage.privateGet");
          }
          return this.vm.storageGet({
            src: this.vm.widgetSrc,
            type: StorageType.Private
          }, args[0]);
        } else if (keyword === "Storage" && callee === "set") {
          if (args.length < 2) {
            throw new Error("Missing argument 'key' or 'value' for Storage.set");
          }
          return this.vm.storageSet({
            src: this.vm.widgetSrc,
            type: StorageType.Public
          }, args[0], args[1]);
        } else if (keyword === "Storage" && callee === "get") {
          var _args$4;
          if (args.length < 1) {
            throw new Error("Missing argument 'key' for Storage.get");
          }
          return this.vm.storageGet({
            src: (_args$4 = args[1]) !== null && _args$4 !== void 0 ? _args$4 : this.vm.widgetSrc,
            type: StorageType.Public
          }, args[0]);
        } else if (keyword === "console" && callee === "log") {
          var _console;
          return (_console = console).log.apply(_console, [this.vm.widgetSrc].concat(_toConsumableArray(args)));
        } else if (keyword === "clipboard" && callee === "writeText") {
          var _navigator$clipboard;
          return this.isTrusted ? (_navigator$clipboard = navigator.clipboard).writeText.apply(_navigator$clipboard, _toConsumableArray(args)) : Promise.reject(new Error("Not trusted (not a click)"));
        } else if (keyword === "VM" && callee === "require") {
          var _this$vm6;
          return (_this$vm6 = this.vm).vmRequire.apply(_this$vm6, _toConsumableArray(args));
        } else if (keyword === "Ethers") {
          if (callee === "provider") {
            return this.vm.ethersProvider;
          }
          return this.vm.cachedEthersCall(callee, args);
        } else if (keyword === "WebSocket") {
          if (callee === "WebSocket") {
            var websocket = _construct(WebSocket, _toConsumableArray(args));
            this.vm.websockets.push(websocket);
            return websocket;
          } else {
            throw new Error("Unsupported WebSocket method");
          }
        }
      } else {
        var f = callee === keyword ? keywordType : keywordType[callee];
        if (typeof f === "function") {
          return isNew ? _construct(f, _toConsumableArray(args)) : f.apply(void 0, _toConsumableArray(args));
        }
      }
      if (optional) {
        return undefined;
      }
      throw new Error(keyword && keyword !== callee ? "Unsupported callee method '".concat(keyword, ".").concat(callee, "'") : "Unsupported callee method '".concat(callee, "'"));
    }

    /// Resolves the underlying object and the key to modify.
    /// Should only be used by left hand expressions for assignments.
    /// Options:
    /// - requireState requires the top object key be `state`
  }, {
    key: "resolveMemberExpression",
    value: function resolveMemberExpression(code, options) {
      if (code.type === "Identifier" || code.type === "JSXIdentifier") {
        var _this$stack$findObj;
        var key = code.name;
        assertNotReservedKey(key);
        if (options !== null && options !== void 0 && options.requireState && key !== StakeKey) {
          throw new Error("The top object should be ".concat(StakeKey));
        }
        var obj = (_this$stack$findObj = this.stack.findObj(key)) !== null && _this$stack$findObj !== void 0 ? _this$stack$findObj : this.stack.state;
        assertNotReactObject(obj);
        if (obj === this.stack.state) {
          if (key in Keywords) {
            if (options !== null && options !== void 0 && options.left) {
              throw new Error("Cannot assign to keyword '" + key + "'");
            }
            return {
              obj: obj,
              key: key,
              keyword: key
            };
          }
        }
        if (options !== null && options !== void 0 && options.left) {
          if (!obj || !(key in obj)) {
            throw new Error("Accessing undeclared identifier '".concat(code.name, "'"));
          }
        }
        return {
          obj: obj,
          key: key
        };
      } else if (code.type === "MemberExpression" || code.type === "JSXMemberExpression") {
        var _code$object, _code$object2;
        if (((_code$object = code.object) === null || _code$object === void 0 ? void 0 : _code$object.type) === "Identifier" || ((_code$object2 = code.object) === null || _code$object2 === void 0 ? void 0 : _code$object2.type) === "JSXIdentifier") {
          var keyword = code.object.name;
          if (keyword in Keywords) {
            if (keyword === "Promise") {
              console.log("Promise", code, options);
            }
            // Modify the logic to allow for Promise methods
            if (keyword === 'Promise' && ['all', 'any'].includes(code.property.name)) {
              return {
                obj: Promise,
                // Return the Promise object itself
                key: code.property.name
              };
            }
            if (!(options !== null && options !== void 0 && options.callee)) {
              throw new Error("Cannot dereference keyword '" + keyword + "' in non-call expression");
            }
            return {
              obj: this.stack.state,
              key: this.resolveKey(code.property, code.computed),
              keyword: keyword
            };
          }
        }
        var _obj4 = this.executeExpression(code.object);
        assertNotReactObject(_obj4);
        var _key2 = this.resolveKey(code.property, code.computed);
        return {
          obj: _obj4,
          key: _key2
        };
      } else {
        throw new Error("Unsupported member type: '" + code.type + "'");
      }
    }
  }, {
    key: "getArray",
    value: function getArray(elements) {
      var _this3 = this;
      var result = [];
      elements.forEach(function (element) {
        if (element.type === "SpreadElement") {
          result.push.apply(result, _toConsumableArray(_this3.executeExpression(element.argument)));
        } else {
          result.push(_this3.executeExpression(element));
        }
      });
      return result;
    }
  }, {
    key: "executeExpressionInternal",
    value: function executeExpressionInternal(code) {
      var _this4 = this;
      if (!code) {
        return null;
      }
      var type = code === null || code === void 0 ? void 0 : code.type;
      if (type === "AssignmentExpression") {
        var _this$resolveMemberEx3 = this.resolveMemberExpression(code.left, {
            left: true
          }),
          obj = _this$resolveMemberEx3.obj,
          key = _this$resolveMemberEx3.key;
        var right = this.executeExpression(code.right);
        if (code.operator === "=") {
          return obj[key] = right;
        } else if (code.operator === "+=") {
          return obj[key] += right;
        } else if (code.operator === "-=") {
          return obj[key] -= right;
        } else if (code.operator === "*=") {
          return obj[key] *= right;
        } else if (code.operator === "/=") {
          return obj[key] /= right;
        } else if (code.operator === "??=") {
          var _obj$key;
          return (_obj$key = obj[key]) !== null && _obj$key !== void 0 ? _obj$key : obj[key] = right;
        } else {
          throw new Error("Unknown AssignmentExpression operator '" + code.operator + "'");
        }
      } else if (type === "ChainExpression") {
        return this.executeExpression(code.expression);
      } else if (type === "MemberExpression" || type === "JSXMemberExpression") {
        var _this$resolveMemberEx4 = this.resolveMemberExpression(code),
          _obj5 = _this$resolveMemberEx4.obj,
          _key3 = _this$resolveMemberEx4.key;
        return _obj5 === null || _obj5 === void 0 ? void 0 : _obj5[_key3];
      } else if (type === "Identifier" || type === "JSXIdentifier") {
        return this.stack.get(code.name);
      } else if (type === "JSXExpressionContainer") {
        return this.executeExpression(code.expression);
      } else if (type === "TemplateLiteral") {
        var quasis = [];
        for (var i = 0; i < code.quasis.length; i++) {
          var element = code.quasis[i];
          if (element.type !== "TemplateElement") {
            throw new Error("Unknown quasis type: " + element.type);
          }
          quasis.push(element.value.cooked);
          if (!element.tail) {
            quasis.push(this.executeExpression(code.expressions[i]));
          }
        }
        return quasis.join("");
      } else if (type === "CallExpression" || type === "NewExpression") {
        var isNew = type === "NewExpression";
        var _this$resolveMemberEx5 = this.resolveMemberExpression(code.callee, {
            callee: true
          }),
          _obj6 = _this$resolveMemberEx5.obj,
          _key4 = _this$resolveMemberEx5.key,
          keyword = _this$resolveMemberEx5.keyword;
        var args = this.getArray(code.arguments);
        if (!keyword && (_obj6 === null || _obj6 === void 0 ? void 0 : _obj6[_key4]) instanceof Function) {
          return isNew ? _construct(_obj6[_key4], _toConsumableArray(args)) : _obj6[_key4].apply(_obj6, _toConsumableArray(args));
        } else if (keyword || _obj6 === this.stack.state || _obj6 === this.vm.state) {
          return this.callFunction(keyword !== null && keyword !== void 0 ? keyword : "", _key4, args, code.optional, isNew);
        } else {
          if (code.optional) {
            return undefined;
          }
          throw new Error("Not a function call expression");
        }
      } else if (type === "Literal" || type === "JSXText") {
        return code.value;
      } else if (type === "JSXElement" || type === "JSXFragment") {
        return this.renderElement(code);
      } else if (type === "JSXExpressionContainer") {
        return this.executeExpression(code.expression);
      } else if (type === "BinaryExpression") {
        var left = this.executeExpression(code.left);
        var _right = this.executeExpression(code.right);
        if (code.operator === "+") {
          return left + _right;
        } else if (code.operator === "-") {
          return left - _right;
        } else if (code.operator === "%") {
          return left % _right;
        } else if (code.operator === "*") {
          return left * _right;
        } else if (code.operator === "/") {
          return left / _right;
        } else if (code.operator === "<") {
          return left < _right;
        } else if (code.operator === "|") {
          return left | _right;
        } else if (code.operator === "&") {
          return left & _right;
        } else if (code.operator === ">") {
          return left > _right;
        } else if (code.operator === "<=") {
          return left <= _right;
        } else if (code.operator === ">=") {
          return left >= _right;
        } else if (code.operator === "===" || code.operator === "==") {
          return left === _right;
        } else if (code.operator === "!==" || code.operator === "!=") {
          return left !== _right;
        } else if (code.operator === "in") {
          return left in _right;
        } else {
          throw new Error("Unknown BinaryExpression operator '" + code.operator + "'");
        }
      } else if (type === "UnaryExpression") {
        if (code.operator === "delete") {
          var _this$resolveMemberEx6 = this.resolveMemberExpression(code.argument, {
              left: true
            }),
            _obj7 = _this$resolveMemberEx6.obj,
            _key5 = _this$resolveMemberEx6.key;
          return _obj7 === null || _obj7 === void 0 || delete _obj7[_key5];
        }
        var argument = this.executeExpression(code.argument);
        if (code.operator === "-") {
          return -argument;
        } else if (code.operator === "!") {
          return !argument;
        } else if (code.operator === "typeof") {
          return _typeof(argument);
        } else {
          throw new Error("Unknown UnaryExpression operator '" + code.operator + "'");
        }
      } else if (type === "LogicalExpression") {
        var _left = this.executeExpression(code.left);
        if (code.operator === "||") {
          return _left || this.executeExpression(code.right);
        } else if (code.operator === "&&") {
          return _left && this.executeExpression(code.right);
        } else if (code.operator === "??") {
          return _left !== null && _left !== void 0 ? _left : this.executeExpression(code.right);
        } else {
          throw new Error("Unknown LogicalExpression operator '" + code.operator + "'");
        }
      } else if (type === "ConditionalExpression") {
        var test = this.executeExpression(code.test);
        return test ? this.executeExpression(code.consequent) : this.executeExpression(code.alternate);
      } else if (type === "UpdateExpression") {
        var _this$resolveMemberEx7 = this.resolveMemberExpression(code.argument, {
            left: true
          }),
          _obj8 = _this$resolveMemberEx7.obj,
          _key6 = _this$resolveMemberEx7.key;
        if (code.operator === "++") {
          return code.prefix ? ++_obj8[_key6] : _obj8[_key6]++;
        } else if (code.operator === "--") {
          return code.prefix ? --_obj8[_key6] : _obj8[_key6]--;
        } else {
          throw new Error("Unknown UpdateExpression operator '" + code.operator + "'");
        }
      } else if (type === "ObjectExpression") {
        return code.properties.reduce(function (object, property) {
          if (property.type === "Property") {
            var _key7 = _this4.resolveKey(property.key, property.computed);
            object[_key7] = _this4.executeExpression(property.value);
          } else if (property.type === "SpreadElement") {
            var value = _this4.executeExpression(property.argument);
            assertNotReactObject(value);
            Object.assign(object, value);
          } else {
            throw new Error("Unknown property type: " + property.type);
          }
          return object;
        }, {});
      } else if (type === "ArrayExpression") {
        return this.getArray(code.elements);
      } else if (type === "JSXEmptyExpression") {
        return null;
      } else if (type === "ArrowFunctionExpression") {
        return this.createFunction(code.params, code.body, code.expression);
      } else if (type === "TaggedTemplateExpression") {
        // Currently only `styled` component is supported.

        var styledTemplate, styledKey;
        if (code.tag.type === "MemberExpression" || code.tag.type === "CallExpression") {
          var _this$resolveMemberEx8 = this.resolveMemberExpression(code.tag.type === "MemberExpression" ? code.tag : code.tag.callee, {
              callee: true
            }),
            _key8 = _this$resolveMemberEx8.key,
            _keyword = _this$resolveMemberEx8.keyword;
          if (_keyword !== "styled") {
            throw new Error("TaggedTemplateExpression is only supported for `styled` components");
          }
          if (code.tag.type === "CallExpression") {
            var _args6 = this.getArray(code.tag.arguments);
            var arg = _args6 === null || _args6 === void 0 ? void 0 : _args6[0];
            var RadixComp = assertRadixComponent(arg);
            if (!(0,styled_components__WEBPACK_IMPORTED_MODULE_9__.isStyledComponent)(arg) && !RadixComp) {
              throw new Error('styled() can only take `styled` components or valid Radix components (EG: "Accordion.Trigger")');
            }
            styledTemplate = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(RadixComp !== null && RadixComp !== void 0 ? RadixComp : arg);
          } else {
            if (_key8 === "keyframes") {
              styledTemplate = styled_components__WEBPACK_IMPORTED_MODULE_9__.keyframes;
            } else if (_key8 in ApprovedTagsSimple) {
              styledTemplate = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(_key8);
            } else {
              throw new Error("Unsupported styled tag: " + _key8);
            }
            styledKey = _key8;
          }
        } else {
          throw new Error("TaggedTemplateExpression is only supported for `styled` components");
        }
        if (code.quasi.type !== "TemplateLiteral") {
          throw new Error("Unknown quasi type: " + code.quasi.type);
        }
        var _quasis = code.quasi.quasis.map(function (element) {
          if (element.type !== "TemplateElement") {
            throw new Error("Unknown quasis type: " + element.type);
          }
          return element.value.cooked;
        });
        var canCache = code.quasi.expressions.length === 0 && code.tag.type !== "CallExpression";
        var cacheKey = JSON.stringify([styledKey].concat(_toConsumableArray(_quasis)));
        if (canCache && this.vm.cachedStyledComponents.has(cacheKey)) {
          return this.vm.cachedStyledComponents.get(cacheKey);
        }
        var expressions = code.quasi.expressions.map(function (expression) {
          return _this4.executeExpression(expression);
        });
        if (styledTemplate instanceof Function) {
          var result = styledTemplate.apply(void 0, [_quasis].concat(_toConsumableArray(expressions)));
          if (canCache) {
            this.vm.cachedStyledComponents.set(cacheKey, result);
          }
          return result;
        } else {
          throw new Error("styled error");
        }
      } else {
        console.log(code);
        throw new Error("Unknown expression type '" + type + "'");
      }
    }
  }, {
    key: "createFunction",
    value: function createFunction(params, body, isExpression) {
      var _this5 = this;
      params = params.map(requirePattern);
      return function () {
        var _args$5, _args$6, _stack$executeStateme;
        for (var _len = arguments.length, args = new Array(_len), _key9 = 0; _key9 < _len; _key9++) {
          args[_key9] = arguments[_key9];
        }
        if (!_this5.vm.alive) {
          return;
        }
        var isTrusted = !!((args === null || args === void 0 || (_args$5 = args[0]) === null || _args$5 === void 0 ? void 0 : _args$5.nativeEvent) instanceof Event && args !== null && args !== void 0 && (_args$6 = args[0]) !== null && _args$6 !== void 0 && _args$6.nativeEvent.isTrusted);
        var stack = _this5.newStack(isTrusted);
        params.forEach(function (param, i) {
          var v = undefined;
          var arg = args === null || args === void 0 ? void 0 : args[i];
          if (arg !== undefined) {
            try {
              var _arg;
              if (((_arg = arg) === null || _arg === void 0 ? void 0 : _arg.nativeEvent) instanceof Event) {
                arg.preventDefault();
                arg = arg.nativeEvent;
              }
              if (arg instanceof Event) {
                var _arg2, _arg3, _arg4, _arg5, _arg6, _arg7, _arg8, _arg9, _arg10, _arg11, _arg12, _arg13, _arg14, _arg15, _arg16, _arg17, _arg18, _arg19, _arg20;
                arg = {
                  target: {
                    value: (_arg2 = arg) === null || _arg2 === void 0 || (_arg2 = _arg2.target) === null || _arg2 === void 0 ? void 0 : _arg2.value,
                    id: (_arg3 = arg) === null || _arg3 === void 0 || (_arg3 = _arg3.target) === null || _arg3 === void 0 ? void 0 : _arg3.id,
                    dataset: (_arg4 = arg) === null || _arg4 === void 0 || (_arg4 = _arg4.target) === null || _arg4 === void 0 ? void 0 : _arg4.dataset,
                    href: (_arg5 = arg) === null || _arg5 === void 0 || (_arg5 = _arg5.target) === null || _arg5 === void 0 ? void 0 : _arg5.href,
                    checked: (_arg6 = arg) === null || _arg6 === void 0 || (_arg6 = _arg6.target) === null || _arg6 === void 0 ? void 0 : _arg6.checked
                  },
                  data: (_arg7 = arg) === null || _arg7 === void 0 ? void 0 : _arg7.data,
                  code: (_arg8 = arg) === null || _arg8 === void 0 ? void 0 : _arg8.code,
                  key: (_arg9 = arg) === null || _arg9 === void 0 ? void 0 : _arg9.key,
                  ctrlKey: (_arg10 = arg) === null || _arg10 === void 0 ? void 0 : _arg10.ctrlKey,
                  altKey: (_arg11 = arg) === null || _arg11 === void 0 ? void 0 : _arg11.altKey,
                  shiftKey: (_arg12 = arg) === null || _arg12 === void 0 ? void 0 : _arg12.shiftKey,
                  metaKey: (_arg13 = arg) === null || _arg13 === void 0 ? void 0 : _arg13.metaKey,
                  button: (_arg14 = arg) === null || _arg14 === void 0 ? void 0 : _arg14.button,
                  buttons: (_arg15 = arg) === null || _arg15 === void 0 ? void 0 : _arg15.buttons,
                  clientX: (_arg16 = arg) === null || _arg16 === void 0 ? void 0 : _arg16.clientX,
                  clientY: (_arg17 = arg) === null || _arg17 === void 0 ? void 0 : _arg17.clientY,
                  screenX: (_arg18 = arg) === null || _arg18 === void 0 ? void 0 : _arg18.screenX,
                  screenY: (_arg19 = arg) === null || _arg19 === void 0 ? void 0 : _arg19.screenY,
                  touches: (_arg20 = arg) === null || _arg20 === void 0 ? void 0 : _arg20.touches
                };
              }
              v = (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(arg);
            } catch (e) {
              console.warn(e);
            }
          }
          stack.stackDeclare(param, v);
        });
        return isExpression ? stack.executeExpression(body) : (_stack$executeStateme = stack.executeStatement(body)) === null || _stack$executeStateme === void 0 ? void 0 : _stack$executeStateme["result"];
      };
    }
  }, {
    key: "stackDeclare",
    value: function stackDeclare(pattern, value) {
      var _this6 = this;
      if (pattern.type === "Identifier") {
        this.stack.state[pattern.name] = value;
      } else if (pattern.type === "ArrayPattern") {
        assertNotReactObject(value);
        pattern.elements.forEach(function (element, i) {
          if (element.type === "RestElement") {
            _this6.stackDeclare(element.argument, value.slice(i));
          } else {
            _this6.stackDeclare(element, value === null || value === void 0 ? void 0 : value[i]);
          }
        });
      } else if (pattern.type === "ObjectPattern") {
        assertNotReactObject(value);
        var seen = new Set();
        pattern.properties.forEach(function (property) {
          if (property.type === "RestElement") {
            var rest = {};
            if ((0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(value)) {
              Object.assign(rest, value);
              seen.forEach(function (key) {
                return delete rest[key];
              });
            }
            _this6.stackDeclare(property.argument, rest);
          } else {
            _this6.stackDeclare(property.value, value === null || value === void 0 ? void 0 : value[property.key.name]);
            seen.add(property.key.name);
          }
        });
      } else {
        throw new Error("Unknown pattern type: " + pattern.type);
      }
    }
  }, {
    key: "executeStatement",
    value: function executeStatement(token) {
      var _this7 = this;
      StatementDebug && console.log(token);
      if (!token || token.type === "EmptyStatement") {
        return null;
      } else if (token.type === "VariableDeclaration") {
        token.declarations.forEach(function (declaration) {
          if (declaration.type === "VariableDeclarator") {
            _this7.stackDeclare(requirePattern(declaration.id), _this7.executeExpression(declaration.init));
          } else {
            throw new Error("Unknown variable declaration type '" + declaration.type + "'");
          }
        });
      } else if (token.type === "ReturnStatement") {
        return {
          result: this.executeExpression(token.argument)
        };
      } else if (token.type === "FunctionDeclaration") {
        this.stackDeclare(requireIdentifier(token.id), this.createFunction(token.params, token.body, token.expression));
      } else if (token.type === "ExpressionStatement") {
        this.executeExpression(token.expression);
      } else if (token.type === "BlockStatement" || token.type === "Program") {
        var body = token.body;
        var stack = this.newStack();
        for (var i = 0; i < body.length; i++) {
          var result = stack.executeStatement(body[i]);
          if (result) {
            return result;
          }
        }
      } else if (token.type === "ForStatement") {
        var _stack = this.newStack();
        _stack.executeStatement(token.init);
        while (this.vm.loopLimit-- > 0) {
          if (token.test) {
            var test = _stack.executeExpression(token.test);
            if (!test) {
              break;
            }
          }
          var _result = _stack.executeStatement(token.body);
          if (_result) {
            if (_result.break) {
              break;
            } else if (_result.continue) {
              // continue
            } else {
              return _result;
            }
          }
          _stack.executeExpression(token.update);
        }
        if (this.vm.loopLimit <= 0) {
          throw new Error("Exceeded loop limit");
        }
      } else if (token.type === "ForOfStatement") {
        var _stack2 = this.newStack();
        var right = _stack2.executeExpression(token.right);
        assertNotReactObject(right);
        var _iterator = _createForOfIteratorHelper(right),
          _step;
        try {
          var _loop = function _loop() {
              var value = _step.value;
              if (_this7.vm.loopLimit-- <= 0) {
                throw new Error("Exceeded loop limit");
              }
              if (token.left.type === "VariableDeclaration") {
                if (token.left.declarations.length !== 1) {
                  throw new Error("Invalid for-of statement");
                }
                token.left.declarations.forEach(function (declaration) {
                  if (declaration.type === "VariableDeclarator") {
                    _this7.stackDeclare(requirePattern(declaration.id), value);
                  } else {
                    throw new Error("Unknown variable declaration type '" + declaration.type + "'");
                  }
                });
              } else {
                var _this7$resolveMemberE = _this7.resolveMemberExpression(token.left, {
                    left: true
                  }),
                  obj = _this7$resolveMemberE.obj,
                  key = _this7$resolveMemberE.key;
                obj[key] = value;
              }
              var result = _stack2.executeStatement(token.body);
              if (result) {
                if (result.break) {
                  return 0; // break
                } else if (result.continue) {
                  // continue
                } else {
                  return {
                    v: result
                  };
                }
              }
            },
            _ret;
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _ret = _loop();
            if (_ret === 0) break;
            if (_ret) return _ret.v;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else if (token.type === "WhileStatement") {
        var _stack3 = this.newStack();
        while (this.vm.loopLimit-- > 0) {
          var _test = _stack3.executeExpression(token.test);
          if (!_test) {
            break;
          }
          var _result2 = _stack3.executeStatement(token.body);
          if (_result2) {
            if (_result2.break) {
              break;
            } else if (_result2.continue) {
              // continue
            } else {
              return _result2;
            }
          }
        }
        if (this.vm.loopLimit <= 0) {
          throw new Error("Exceeded loop limit");
        }
      } else if (token.type === "IfStatement") {
        var _test2 = this.executeExpression(token.test);
        var _stack4 = this.newStack();
        var _result3 = !!_test2 ? _stack4.executeStatement(token.consequent) : _stack4.executeStatement(token.alternate);
        if (_result3) {
          return _result3;
        }
      } else if (token.type === "BreakStatement") {
        return {
          break: true
        };
      } else if (token.type === "ContinueStatement") {
        return {
          continue: true
        };
      } else if (token.type === "ThrowStatement") {
        throw this.executeExpression(token.argument);
      } else if (token.type === "TryStatement") {
        try {
          var _stack5 = this.newStack();
          var _result4 = _stack5.executeStatement(token.block);
          if (_result4) {
            return _result4;
          }
        } catch (e) {
          if (!this.vm.alive || !token.handler) {
            return null;
          }
          if (token.handler.type !== "CatchClause") {
            throw new Error("Unknown try statement handler type '" + token.handler.type + "'");
          }
          var _stack6 = this.newStack();
          if (token.handler.param) {
            _stack6.stackDeclare(requireIdentifier(token.handler.param), (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(e instanceof Error ? {
              name: e === null || e === void 0 ? void 0 : e.name,
              message: e === null || e === void 0 ? void 0 : e.message,
              toString: function toString() {
                return e.toString();
              }
            } : e));
          }
          var _result5 = _stack6.executeStatement(token.handler.body);
          if (_result5) {
            return _result5;
          }
        } finally {
          if (this.vm.alive) {
            var _stack7 = this.newStack();
            _stack7.executeStatement(token.finalizer);
          }
        }
      } else if (token.type === "SwitchStatement") {
        var discriminant = this.executeExpression(token.discriminant);
        var _stack8 = this.newStack();
        var cases = token.cases;
        var found = false;
        var _iterator2 = _createForOfIteratorHelper(cases),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var caseToken = _step2.value;
            if (caseToken.type !== "SwitchCase") {
              throw new Error("Unknown switch case type '" + caseToken.type + "'");
            }
            if (!found && caseToken.test) {
              var _test3 = _stack8.executeExpression(caseToken.test);
              if (_test3 !== discriminant) {
                continue;
              }
              found = true;
            }
            if (found) {
              var isBreak = false;
              var _iterator3 = _createForOfIteratorHelper(caseToken.consequent),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var statement = _step3.value;
                  var _result6 = _stack8.executeStatement(statement);
                  if (_result6) {
                    if (_result6.break) {
                      isBreak = true;
                      break;
                    } else {
                      return _result6;
                    }
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              if (isBreak) {
                break;
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        throw new Error("Unknown token type '" + token.type + "'");
      }
      return null;
    }
  }]);
  return VmStack;
}();
var VM = /*#__PURE__*/function () {
  function VM(options) {
    _classCallCheck(this, VM);
    var near = options.near,
      rawCode = options.rawCode,
      setReactState = options.setReactState,
      cache = options.cache,
      refreshCache = options.refreshCache,
      confirmTransactions = options.confirmTransactions,
      depth = options.depth,
      widgetSrc = options.widgetSrc,
      requestCommit = options.requestCommit,
      version = options.version,
      widgetConfigs = options.widgetConfigs,
      ethersProviderContext = options.ethersProviderContext,
      isModule = options.isModule;
    this.alive = true;
    this.isModule = isModule;
    this.rawCode = rawCode;
    this.near = near;
    try {
      this.code = parseCode(rawCode);
      this.compileError = null;
    } catch (e) {
      this.code = null;
      this.compileError = e;
      console.error(e);
    }
    if (!this.code) {
      this.alive = false;
      return;
    }
    this.setReactState = setReactState ? function (s) {
      return setReactState((0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(s) ? Object.assign({}, s) : s);
    } : function () {
      throw new Error("State is unavailable for modules");
    };
    this.cache = cache;
    this.refreshCache = refreshCache;
    this.confirmTransactions = confirmTransactions;
    this.depth = depth;
    this.widgetSrc = widgetSrc;
    this.requestCommit = requestCommit;
    this.version = version;
    this.cachedStyledComponents = new Map();
    this.widgetConfigs = widgetConfigs;
    this.ethersProviderContext = ethersProviderContext;
    this.ethersProvider = ethersProviderContext !== null && ethersProviderContext !== void 0 && ethersProviderContext.provider ? new ethers__WEBPACK_IMPORTED_MODULE_49__.ethers.providers.Web3Provider(ethersProviderContext.provider) : null;
    this.timeouts = new Set();
    this.intervals = new Set();
    this.websockets = [];
    this.vmInstances = new Map();
  }
  _createClass(VM, [{
    key: "stop",
    value: function stop() {
      if (!this.alive) {
        return;
      }
      this.alive = false;
      this.timeouts.forEach(function (timeout) {
        return clearTimeout(timeout);
      });
      this.intervals.forEach(function (interval) {
        return clearInterval(interval);
      });
      this.websockets.forEach(function (websocket) {
        return websocket.close();
      });
      this.vmInstances.forEach(function (vm) {
        return vm.stop();
      });
    }
  }, {
    key: "cachedPromise",
    value: function cachedPromise(promise, subscribe) {
      var _this8 = this;
      var invalidate = {
        onInvalidate: function onInvalidate() {
          if (_this8.alive) {
            _this8.refreshCache();
          }
        },
        subscribe: !!subscribe
      };
      return (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(promise(invalidate));
    }
  }, {
    key: "cachedSocialGet",
    value: function cachedSocialGet(keys, recursive, blockId, options) {
      var _this9 = this;
      keys = Array.isArray(keys) ? keys : [keys];
      return this.cachedPromise(function (invalidate) {
        return _this9.cache.socialGet(_this9.near, keys, recursive, blockId, options, invalidate);
      }, options === null || options === void 0 ? void 0 : options.subscribe);
    }
  }, {
    key: "storageGet",
    value: function storageGet(domain, key) {
      var _this10 = this;
      return this.cachedPromise(function (invalidate) {
        return _this10.cache.localStorageGet(domain, key, invalidate);
      });
    }
  }, {
    key: "storageSet",
    value: function storageSet(domain, key, value) {
      return this.cache.localStorageSet(domain, key, value);
    }
  }, {
    key: "cachedSocialKeys",
    value: function cachedSocialKeys(keys, blockId, options) {
      var _this11 = this;
      keys = Array.isArray(keys) ? keys : [keys];
      return this.cachedPromise(function (invalidate) {
        return _this11.cache.cachedViewCall(_this11.near, _this11.near.config.contractName, "keys", {
          keys: keys,
          options: options
        }, blockId, invalidate);
      }, options === null || options === void 0 ? void 0 : options.subscribe);
    }
  }, {
    key: "asyncNearView",
    value: function asyncNearView(contractName, methodName, args, blockId) {
      return this.near.viewCall(contractName, methodName, args, blockId);
    }
  }, {
    key: "asyncCalimeroView",
    value: function asyncCalimeroView(contractName, methodName, args, blockId) {
      return this.near.viewCalimero(contractName, methodName, args, blockId);
    }
  }, {
    key: "cachedEthersCall",
    value: function cachedEthersCall(callee, args, subscribe) {
      var _this12 = this;
      return this.cachedPromise(function (invalidate) {
        return _this12.cache.cachedEthersCall(_this12.ethersProvider, callee, args, invalidate);
      }, subscribe);
    }
  }, {
    key: "cachedNearView",
    value: function cachedNearView(contractName, methodName, args, blockId, subscribe) {
      var _this13 = this;
      return this.cachedPromise(function (invalidate) {
        return _this13.cache.cachedViewCall(_this13.near, contractName, methodName, args, blockId, invalidate);
      }, subscribe);
    }
  }, {
    key: "cachedCalimeroView",
    value: function cachedCalimeroView(contractName, methodName, args, blockId, subscribe) {
      var _this14 = this;
      return this.cachedPromise(function (invalidate) {
        return _this14.cache.cachedCalimeroViewCall(_this14.near, contractName, methodName, args, blockId, invalidate);
      }, subscribe);
    }
  }, {
    key: "cachedNearBlock",
    value: function cachedNearBlock(blockId, subscribe) {
      var _this15 = this;
      return this.cachedPromise(function (invalidate) {
        return _this15.cache.cachedBlock(_this15.near, blockId, invalidate);
      }, subscribe);
    }
  }, {
    key: "asyncFetch",
    value: function asyncFetch(url, options) {
      return this.cache.asyncFetch(url, options);
    }
  }, {
    key: "cachedFetch",
    value: function cachedFetch(url, options) {
      var _this16 = this;
      return this.cachedPromise(function (invalidate) {
        return _this16.cache.cachedFetch(url, options, invalidate);
      }, options === null || options === void 0 ? void 0 : options.subscribe);
    }
  }, {
    key: "cachedIndex",
    value: function cachedIndex(action, key, options) {
      var _this17 = this;
      return this.cachedPromise(function (invalidate) {
        return _this17.cache.socialIndex(_this17.near, action, key, options, invalidate);
      }, options === null || options === void 0 ? void 0 : options.subscribe);
    }
  }, {
    key: "useCache",
    value: function useCache(promiseGenerator, dataKey, options) {
      var _this18 = this;
      return this.cachedPromise(function (invalidate) {
        return _this18.cache.cachedCustomPromise({
          widgetSrc: _this18.widgetSrc,
          dataKey: dataKey
        }, promiseGenerator, invalidate);
      }, options === null || options === void 0 ? void 0 : options.subscribe);
    }
  }, {
    key: "socialSet",
    value: function socialSet(data, options) {
      return this.requestCommit({
        data: data,
        force: options === null || options === void 0 ? void 0 : options.force,
        onCommit: options === null || options === void 0 ? void 0 : options.onCommit,
        onCancel: options === null || options === void 0 ? void 0 : options.onCancel
      });
    }
  }, {
    key: "vmRequire",
    value: function vmRequire(src) {
      var _src$split = src.split("@"),
        _src$split2 = _slicedToArray(_src$split, 2),
        srcPath = _src$split2[0],
        version = _src$split2[1];
      var code = this.cachedSocialGet(srcPath.toString(), false, version,
      // may be undefined, meaning `latest`
      undefined);
      if (!code) {
        return code;
      }
      var vm = this.getVmInstance(code, src);
      return vm.execCode({
        context: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(this.context),
        forwardedProps: this.forwardedProps
      });
    }
  }, {
    key: "getVmInstance",
    value: function getVmInstance(code, src) {
      if (this.vmInstances.has(src)) {
        var _vm = this.vmInstances.get(src);
        if (_vm.rawCode === code) {
          return _vm;
        }
        _vm.stop();
        this.vmInstances.delete(src);
      }
      var vm = new VM({
        near: this.near,
        rawCode: code,
        cache: this.cache,
        refreshCache: this.refreshCache,
        confirmTransactions: this.confirmTransactions,
        depth: this.depth + 1,
        widgetSrc: src,
        requestCommit: this.requestCommit,
        version: this.version,
        widgetConfigs: this.widgetConfigs,
        ethersProviderContext: this.ethersProviderContext,
        isModule: true
      });
      this.vmInstances.set(src, vm);
      return vm;
    }
  }, {
    key: "renderCode",
    value: function renderCode(args) {
      if (this.compileError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "alert alert-danger"
        }, "Compilation error:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, this.compileError.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, this.compileError.stack));
      }
      if (!this.alive) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "alert alert-danger"
        }, "VM is dead");
      }
      var result = this.execCode(args);
      return (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isReactObject)(result) || typeof result === "string" || typeof result === "number" ? result : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, JSON.stringify(result, undefined, 2));
    }
  }, {
    key: "execCode",
    value: function execCode(_ref7) {
      var props = _ref7.props,
        context = _ref7.context,
        state = _ref7.state,
        forwardedProps = _ref7.forwardedProps;
      if (this.compileError) {
        throw this.compileError;
      }
      if (this.depth >= MaxDepth) {
        return "Too deep";
      }
      this.gIndex = 0;
      this.state = {
        props: (0,_data_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(props) ? Object.assign({}, props) : props,
        context: context,
        state: state,
        nacl: frozenNacl,
        get elliptic() {
          delete this.elliptic;
          this.elliptic = lodash__WEBPACK_IMPORTED_MODULE_18___default().cloneDeep(elliptic__WEBPACK_IMPORTED_MODULE_13__);
          return this.elliptic;
        },
        ethers: frozenEthers,
        nanoid: frozenNanoid
      };
      this.forwardedProps = forwardedProps;
      this.loopLimit = LoopLimit;
      this.vmStack = new VmStack(this, undefined, this.state);
      var executionResult = this.vmStack.executeStatement(this.code);
      if (executionResult !== null && executionResult !== void 0 && executionResult.break) {
        throw new Error("BreakStatement outside of a loop");
      }
      if (executionResult !== null && executionResult !== void 0 && executionResult.continue) {
        throw new Error("ContinueStatement outside of a loop");
      }
      return executionResult === null || executionResult === void 0 ? void 0 : executionResult.result;
    }
  }]);
  return VM;
}();


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ "base64-js")
const ieee754 = __webpack_require__(/*! ieee754 */ "ieee754")
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ "@braintree/sanitize-url":
/*!******************************************!*\
  !*** external "@braintree/sanitize-url" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@braintree/sanitize-url");

/***/ }),

/***/ "@radix-ui/react-accordion":
/*!********************************************!*\
  !*** external "@radix-ui/react-accordion" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-accordion");

/***/ }),

/***/ "@radix-ui/react-alert-dialog":
/*!***********************************************!*\
  !*** external "@radix-ui/react-alert-dialog" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-alert-dialog");

/***/ }),

/***/ "@radix-ui/react-aspect-ratio":
/*!***********************************************!*\
  !*** external "@radix-ui/react-aspect-ratio" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-aspect-ratio");

/***/ }),

/***/ "@radix-ui/react-avatar":
/*!*****************************************!*\
  !*** external "@radix-ui/react-avatar" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-avatar");

/***/ }),

/***/ "@radix-ui/react-checkbox":
/*!*******************************************!*\
  !*** external "@radix-ui/react-checkbox" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-checkbox");

/***/ }),

/***/ "@radix-ui/react-collapsible":
/*!**********************************************!*\
  !*** external "@radix-ui/react-collapsible" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-collapsible");

/***/ }),

/***/ "@radix-ui/react-context-menu":
/*!***********************************************!*\
  !*** external "@radix-ui/react-context-menu" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-context-menu");

/***/ }),

/***/ "@radix-ui/react-dialog":
/*!*****************************************!*\
  !*** external "@radix-ui/react-dialog" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-dialog");

/***/ }),

/***/ "@radix-ui/react-dropdown-menu":
/*!************************************************!*\
  !*** external "@radix-ui/react-dropdown-menu" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-dropdown-menu");

/***/ }),

/***/ "@radix-ui/react-hover-card":
/*!*********************************************!*\
  !*** external "@radix-ui/react-hover-card" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-hover-card");

/***/ }),

/***/ "@radix-ui/react-label":
/*!****************************************!*\
  !*** external "@radix-ui/react-label" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-label");

/***/ }),

/***/ "@radix-ui/react-menubar":
/*!******************************************!*\
  !*** external "@radix-ui/react-menubar" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-menubar");

/***/ }),

/***/ "@radix-ui/react-navigation-menu":
/*!**************************************************!*\
  !*** external "@radix-ui/react-navigation-menu" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-navigation-menu");

/***/ }),

/***/ "@radix-ui/react-popover":
/*!******************************************!*\
  !*** external "@radix-ui/react-popover" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-popover");

/***/ }),

/***/ "@radix-ui/react-progress":
/*!*******************************************!*\
  !*** external "@radix-ui/react-progress" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-progress");

/***/ }),

/***/ "@radix-ui/react-radio-group":
/*!**********************************************!*\
  !*** external "@radix-ui/react-radio-group" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-radio-group");

/***/ }),

/***/ "@radix-ui/react-scroll-area":
/*!**********************************************!*\
  !*** external "@radix-ui/react-scroll-area" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-scroll-area");

/***/ }),

/***/ "@radix-ui/react-select":
/*!*****************************************!*\
  !*** external "@radix-ui/react-select" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-select");

/***/ }),

/***/ "@radix-ui/react-separator":
/*!********************************************!*\
  !*** external "@radix-ui/react-separator" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-separator");

/***/ }),

/***/ "@radix-ui/react-slider":
/*!*****************************************!*\
  !*** external "@radix-ui/react-slider" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-slider");

/***/ }),

/***/ "@radix-ui/react-switch":
/*!*****************************************!*\
  !*** external "@radix-ui/react-switch" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-switch");

/***/ }),

/***/ "@radix-ui/react-tabs":
/*!***************************************!*\
  !*** external "@radix-ui/react-tabs" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-tabs");

/***/ }),

/***/ "@radix-ui/react-toast":
/*!****************************************!*\
  !*** external "@radix-ui/react-toast" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-toast");

/***/ }),

/***/ "@radix-ui/react-toggle":
/*!*****************************************!*\
  !*** external "@radix-ui/react-toggle" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-toggle");

/***/ }),

/***/ "@radix-ui/react-toggle-group":
/*!***********************************************!*\
  !*** external "@radix-ui/react-toggle-group" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-toggle-group");

/***/ }),

/***/ "@radix-ui/react-toolbar":
/*!******************************************!*\
  !*** external "@radix-ui/react-toolbar" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-toolbar");

/***/ }),

/***/ "@radix-ui/react-tooltip":
/*!******************************************!*\
  !*** external "@radix-ui/react-tooltip" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@radix-ui/react-tooltip");

/***/ }),

/***/ "acorn":
/*!************************!*\
  !*** external "acorn" ***!
  \************************/
/***/ ((module) => {

module.exports = require("acorn");

/***/ }),

/***/ "acorn-jsx":
/*!****************************!*\
  !*** external "acorn-jsx" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("acorn-jsx");

/***/ }),

/***/ "base64-js":
/*!****************************!*\
  !*** external "base64-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("base64-js");

/***/ }),

/***/ "big.js":
/*!*************************!*\
  !*** external "big.js" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("big.js");

/***/ }),

/***/ "bn.js":
/*!************************!*\
  !*** external "bn.js" ***!
  \************************/
/***/ ((module) => {

module.exports = require("bn.js");

/***/ }),

/***/ "crypto-browserify":
/*!************************************!*\
  !*** external "crypto-browserify" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("crypto-browserify");

/***/ }),

/***/ "deep-equal":
/*!*****************************!*\
  !*** external "deep-equal" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("deep-equal");

/***/ }),

/***/ "elliptic":
/*!***************************!*\
  !*** external "elliptic" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("elliptic");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "idb":
/*!**********************!*\
  !*** external "idb" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("idb");

/***/ }),

/***/ "ieee754":
/*!**************************!*\
  !*** external "ieee754" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ieee754");

/***/ }),

/***/ "iframe-resizer-react":
/*!***************************************!*\
  !*** external "iframe-resizer-react" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("iframe-resizer-react");

/***/ }),

/***/ "local-storage":
/*!********************************!*\
  !*** external "local-storage" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("local-storage");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "mdast-util-find-and-replace":
/*!**********************************************!*\
  !*** external "mdast-util-find-and-replace" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("mdast-util-find-and-replace");

/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("nanoid");

/***/ }),

/***/ "near-api-js":
/*!******************************!*\
  !*** external "near-api-js" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("near-api-js");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap-typeahead":
/*!********************************************!*\
  !*** external "react-bootstrap-typeahead" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap-typeahead");

/***/ }),

/***/ "react-bootstrap-typeahead/types/utils":
/*!********************************************************!*\
  !*** external "react-bootstrap-typeahead/types/utils" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap-typeahead/types/utils");

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "react-error-boundary":
/*!***************************************!*\
  !*** external "react-error-boundary" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-error-boundary");

/***/ }),

/***/ "react-files":
/*!******************************!*\
  !*** external "react-files" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-files");

/***/ }),

/***/ "react-infinite-scroller":
/*!******************************************!*\
  !*** external "react-infinite-scroller" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-singleton-hook":
/*!***************************************!*\
  !*** external "react-singleton-hook" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-singleton-hook");

/***/ }),

/***/ "react-syntax-highlighter":
/*!*******************************************!*\
  !*** external "react-syntax-highlighter" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "react-syntax-highlighter/dist/esm/styles/prism":
/*!*****************************************************************!*\
  !*** external "react-syntax-highlighter/dist/esm/styles/prism" ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/esm/styles/prism");

/***/ }),

/***/ "react-uuid":
/*!*****************************!*\
  !*** external "react-uuid" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("react-uuid");

/***/ }),

/***/ "remark-gfm":
/*!*****************************!*\
  !*** external "remark-gfm" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("remark-gfm");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "tweetnacl":
/*!****************************!*\
  !*** external "tweetnacl" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("tweetnacl");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("22ca48fe8f3358d9bcd2")
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});