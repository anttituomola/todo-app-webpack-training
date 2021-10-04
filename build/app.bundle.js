/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.todos = undefined;

var _addTodo = __webpack_require__(29);

var todos = exports.todos = [];

//Listen for button click
var submitButton = document.getElementById('submitButtonEl');
submitButton.addEventListener("click", function () {
    (0, _addTodo.addTodo)();
});

//Listen for Enter
document.getElementById("inputEl").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        (0, _addTodo.addTodo)();
    }
});

//Initial focus on input
document.getElementById("inputEl").focus();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validate = __webpack_require__(2);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate2.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

exports.default = stringify;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = __webpack_require__(22);

var _regex2 = _interopRequireDefault(_regex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex2.default.test(uuid);
}

exports.default = validate;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
}(undefined, function () {
  "use strict";
  var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = "millisecond",
      i = "second",
      s = "minute",
      u = "hour",
      a = "day",
      o = "week",
      f = "month",
      h = "quarter",
      c = "year",
      d = "date",
      $ = "Invalid Date",
      l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },
      m = function m(t, e, n) {
    var r = String(t);return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
  },
      g = { s: m, z: function z(t) {
      var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
    }, m: function t(e, n) {
      if (e.date() < n.date()) return -t(n, e);var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, f),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), f);return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
    }, a: function a(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    }, p: function p(t) {
      return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t] || String(t || "").toLowerCase().replace(/s$/, "");
    }, u: function u(t) {
      return void 0 === t;
    } },
      D = "en",
      v = {};v[D] = M;var p = function p(t) {
    return t instanceof _;
  },
      S = function S(t, e, n) {
    var r;if (!t) return D;if ("string" == typeof t) v[t] && (r = t), e && (v[t] = e, r = t);else {
      var i = t.name;v[i] = t, r = i;
    }return !n && r && (D = r), r || !n && D;
  },
      w = function w(t, e) {
    if (p(t)) return t.clone();var n = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : {};return n.date = t, n.args = arguments, new _(n);
  },
      O = g;O.l = S, O.i = p, O.w = function (t, e) {
    return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
  };var _ = function () {
    function M(t) {
      this.$L = S(t.locale, null, !0), this.parse(t);
    }var m = M.prototype;return m.parse = function (t) {
      this.$d = function (t) {
        var e = t.date,
            n = t.utc;if (null === e) return new Date(NaN);if (O.u(e)) return new Date();if (e instanceof Date) return new Date(e);if ("string" == typeof e && !/Z$/i.test(e)) {
          var r = e.match(l);if (r) {
            var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
          }
        }return new Date(e);
      }(t), this.$x = t.x || {}, this.init();
    }, m.init = function () {
      var t = this.$d;this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
    }, m.$utils = function () {
      return O;
    }, m.isValid = function () {
      return !(this.$d.toString() === $);
    }, m.isSame = function (t, e) {
      var n = w(t);return this.startOf(e) <= n && n <= this.endOf(e);
    }, m.isAfter = function (t, e) {
      return w(t) < this.startOf(e);
    }, m.isBefore = function (t, e) {
      return this.endOf(e) < w(t);
    }, m.$g = function (t, e, n) {
      return O.u(t) ? this[e] : this.set(n, t);
    }, m.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }, m.valueOf = function () {
      return this.$d.getTime();
    }, m.startOf = function (t, e) {
      var n = this,
          r = !!O.u(e) || e,
          h = O.p(t),
          $ = function $(t, e) {
        var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);return r ? i : i.endOf(a);
      },
          l = function l(t, e) {
        return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
      },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          g = "set" + (this.$u ? "UTC" : "");switch (h) {case c:
          return r ? $(1, 0) : $(31, 11);case f:
          return r ? $(1, M) : $(0, M + 1);case o:
          var D = this.$locale().weekStart || 0,
              v = (y < D ? y + 7 : y) - D;return $(r ? m - v : m + (6 - v), M);case a:case d:
          return l(g + "Hours", 0);case u:
          return l(g + "Minutes", 1);case s:
          return l(g + "Seconds", 2);case i:
          return l(g + "Milliseconds", 3);default:
          return this.clone();}
    }, m.endOf = function (t) {
      return this.startOf(t, !1);
    }, m.$set = function (t, e) {
      var n,
          o = O.p(t),
          h = "set" + (this.$u ? "UTC" : ""),
          $ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
          l = o === a ? this.$D + (e - this.$W) : e;if (o === f || o === c) {
        var y = this.clone().set(d, 1);y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
      } else $ && this.$d[$](l);return this.init(), this;
    }, m.set = function (t, e) {
      return this.clone().$set(t, e);
    }, m.get = function (t) {
      return this[O.p(t)]();
    }, m.add = function (r, h) {
      var d,
          $ = this;r = Number(r);var l = O.p(h),
          y = function y(t) {
        var e = w($);return O.w(e.date(e.date() + Math.round(t * r)), $);
      };if (l === f) return this.set(f, this.$M + r);if (l === c) return this.set(c, this.$y + r);if (l === a) return y(1);if (l === o) return y(7);var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1,
          m = this.$d.getTime() + r * M;return O.w(m, this);
    }, m.subtract = function (t, e) {
      return this.add(-1 * t, e);
    }, m.format = function (t) {
      var e = this,
          n = this.$locale();if (!this.isValid()) return n.invalidDate || $;var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = O.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          f = n.months,
          h = function h(t, n, i, s) {
        return t && (t[n] || t(e, r)) || i[n].substr(0, s);
      },
          c = function c(t) {
        return O.s(s % 12 || 12, t, "0");
      },
          d = n.meridiem || function (t, e, n) {
        var r = t < 12 ? "AM" : "PM";return n ? r.toLowerCase() : r;
      },
          l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a + 1, MM: O.s(a + 1, 2, "0"), MMM: h(n.monthsShort, a, f, 3), MMMM: h(f, a), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h(n.weekdaysMin, this.$W, o, 2), ddd: h(n.weekdaysShort, this.$W, o, 3), dddd: o[this.$W], H: String(s), HH: O.s(s, 2, "0"), h: c(1), hh: c(2), a: d(s, u, !0), A: d(s, u, !1), m: String(u), mm: O.s(u, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i };return r.replace(y, function (t, e) {
        return e || l[t] || i.replace(":", "");
      });
    }, m.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, m.diff = function (r, d, $) {
      var l,
          y = O.p(d),
          M = w(r),
          m = (M.utcOffset() - this.utcOffset()) * e,
          g = this - M,
          D = O.m(this, M);return D = (l = {}, l[c] = D / 12, l[f] = D, l[h] = D / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? D : O.a(D);
    }, m.daysInMonth = function () {
      return this.endOf(f).$D;
    }, m.$locale = function () {
      return v[this.$L];
    }, m.locale = function (t, e) {
      if (!t) return this.$L;var n = this.clone(),
          r = S(t, e, !0);return r && (n.$L = r), n;
    }, m.clone = function () {
      return O.w(this.$d, this);
    }, m.toDate = function () {
      return new Date(this.valueOf());
    }, m.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }, m.toISOString = function () {
      return this.$d.toISOString();
    }, m.toString = function () {
      return this.$d.toUTCString();
    }, M;
  }(),
      b = _.prototype;return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
    b[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), w.extend = function (t, e) {
    return t.$i || (t(e, _, w), t.$i = !0), w;
  }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
    return w(1e3 * t);
  }, w.en = v[D], w.Ls = v, w.p = {}, w;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render = render;

var _app = __webpack_require__(0);

var _deleteHandler = __webpack_require__(32);

var _handleCheckbox = __webpack_require__(33);

var _calendarHandler = __webpack_require__(30);

var _flatpickr = __webpack_require__(5);

var _flatpickr2 = _interopRequireDefault(_flatpickr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderEl = document.getElementById('renderEl');
var dayjs = __webpack_require__(3);

function render() {
    renderEl.innerHTML = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _app.todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var todoData = _step.value;

            var conditionalCheckedClass = todoData.done ? 'checkedTask' : '';

            renderEl.innerHTML += "\n            <div class=\"todoRow " + conditionalCheckedClass + "\" id=\"" + todoData.id + "\">\n                <input type=\"checkbox\" class=\"todoCheckbox\" />\n                <div class=\"todoElement\">\n                    <span class=\"todoText\">" + todoData.text + "</span>\n                </div>\n                <i class=\"far calendaricon fa-calendar-alt flatpickr flatpickr-input\"></i>\n                <i id=\"" + todoData.id + "\" class=\"trashicon far fa-trash-alt\" />\n            </div>";
            /* <span class="todoDueDate">${dayjs(todoData.dueDate).format("DD.MM.YYYY")}</span> */
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    document.getElementById("inputEl").focus();

    //listen for checkboxes
    var checkboxes = document.querySelectorAll(".todoCheckbox");
    checkboxes.forEach(function (elem) {
        elem.addEventListener("click", function (e) {
            (0, _handleCheckbox.handleCheckbox)(e);
        });
    });

    //listen for delete icons
    var deleteIcons = document.querySelectorAll(".trashicon");
    deleteIcons.forEach(function (elem) {
        elem.addEventListener("click", function (e) {
            (0, _deleteHandler.deleteHandler)(e);
        });
    });

    //listen for calendar icons
    document.querySelectorAll(".calendaricon").forEach(function (elem) {
        elem.addEventListener("click", function (e) {
            (0, _calendarHandler.calendarHandler)(e);
        });
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _options = __webpack_require__(7);

var _default = __webpack_require__(6);

var _default2 = _interopRequireDefault(_default);

var _utils = __webpack_require__(9);

var _dom = __webpack_require__(16);

var _dates = __webpack_require__(15);

var _formatting = __webpack_require__(8);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    var self = {
        config: Object.assign(Object.assign({}, _options.defaults), flatpickr.defaultConfig),
        l10n: _default2.default
    };
    self.parseDate = (0, _dates.createDateParser)({ config: self.config, l10n: self.l10n });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = _dom.createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function getDaysInMonth() {
                var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.currentMonth;
                var yr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.currentYear;

                if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
                return self.l10n.daysInMonth[month];
            }
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile) build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) {
            return;
        } else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.style.visibility = "hidden";
                    self.calendarContainer.style.display = "block";
                }
                if (self.daysContainer !== undefined) {
                    var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                    self.daysContainer.style.width = daysWidth + "px";
                    self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
                    self.calendarContainer.style.removeProperty("visibility");
                    self.calendarContainer.style.removeProperty("display");
                }
            });
        }
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined || (0, _dates.compareDates)(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
            var defaults = (0, _dates.getDefaultHours)(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
        }
        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
            self._debouncedChange();
        }
    }
    function ampm2military(hour, amPM) {
        return hour % 12 + 12 * (0, _utils.int)(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined) return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
            minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
            seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
        if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
        }
        var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && (0, _dates.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) === 0;
        var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && (0, _dates.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
        if (limitMaxHours) {
            var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
            hours = Math.min(hours, maxTime.getHours());
            if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
            if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
        }
        if (limitMinHours) {
            var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
            hours = Math.max(hours, minTime.getHours());
            if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
            if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile) return;
        self.hourElement.value = (0, _utils.pad)(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (0, _utils.int)(hours % 12 === 0) : hours);
        self.minuteElement.value = (0, _utils.pad)(minutes);
        if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[(0, _utils.int)(hours >= 12)];
        if (self.secondElement !== undefined) self.secondElement.value = (0, _utils.pad)(seconds);
    }
    function onYearInput(event) {
        var eventTarget = (0, _dom.getEventTarget)(event);
        var year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array) return event.forEach(function (ev) {
            return bind(element, ev, handler, options);
        });
        if (element instanceof Array) return element.forEach(function (el) {
            return bind(el, event, handler, options);
        });
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: function remove() {
                return element.removeEventListener(event, handler);
            }
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = (0, _utils.debounce)(onResize, 50);
        self._debouncedChange = (0, _utils.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
            if (self.config.mode === "range") onMouseOver((0, _dom.getEventTarget)(e));
        });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, { capture: true });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
            var selText = function selText(e) {
                return (0, _dom.getEventTarget)(e).select();
            };
            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, { capture: true });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
                return self.secondElement && self.secondElement.select();
            });
            if (self.amPM !== undefined) {
                bind(self.amPM, "click", function (e) {
                    updateTime(e);
                    triggerChange();
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
    function jumpToDate(jumpDate, triggerChange) {
        var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
        var oldYear = self.currentYear;
        var oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        } catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
        }
        self.redraw();
    }
    function timeIncrement(e) {
        var eventTarget = (0, _dom.getEventTarget)(e);
        if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && (0, _dom.getEventTarget)(e);
        var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = (0, _dom.createElement)("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = (0, _dom.createElement)("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _buildWeeks = buildWeeks(),
                    weekWrapper = _buildWeeks.weekWrapper,
                    weekNumbers = _buildWeeks.weekNumbers;

                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = (0, _dom.createElement)("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = (0, _dom.createElement)("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        (0, _dom.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
        (0, _dom.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
        (0, _dom.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                var wrapper = (0, _dom.createElement)("div", "flatpickr-wrapper");
                if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput) wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true),
            dayElement = (0, _dom.createElement)("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 && (0, _dates.compareDates)(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    (0, _dom.toggleClass)(dayElement, "startRange", self.selectedDates[0] && (0, _dates.compareDates)(date, self.selectedDates[0], true) === 0);
                    (0, _dom.toggleClass)(dayElement, "endRange", self.selectedDates[1] && (0, _dates.compareDates)(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay") dayElement.classList.add("inRange");
                }
            }
        } else {
            dayElement.classList.add("flatpickr-disabled");
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
        }
        if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range") onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        for (var m = startMonth; m != endMonth; m += delta) {
            var month = self.daysContainer.children[m];
            var startIndex = delta > 0 ? 0 : month.children.length - 1;
            var endIndex = delta > 0 ? month.children.length : -1;
            for (var i = startIndex; i != endIndex; i += delta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;
        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            var month = self.daysContainer.children[m];
            var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
            var numMonthDays = month.children.length;
            for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        var dayFocused = isInView(document.activeElement || document.body);
        var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) {
            self._input.focus();
        } else if (!dayFocused) {
            focusOnDayElem(startElem);
        } else {
            getNextAvailableDay(startElem, offset);
        }
    }
    function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        var daysInMonth = self.utils.getDaysInMonth(month, year),
            days = window.document.createDocumentFragment(),
            isMultiMonth = self.config.showMonths > 1,
            prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
            nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth,
            dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        var dayContainer = (0, _dom.createElement)("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        (0, _dom.clearNode)(self.daysContainer);
        if (self.weekNumbers) (0, _dom.clearNode)(self.weekNumbers);
        var frag = document.createDocumentFragment();
        for (var i = 0; i < self.config.showMonths; i++) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) {
            onMouseOver();
        }
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;
        var shouldBuildMonth = function shouldBuildMonth(month) {
            if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
                return false;
            }
            return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for (var i = 0; i < 12; i++) {
            if (!shouldBuildMonth(i)) continue;
            var month = (0, _dom.createElement)("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = (0, _formatting.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) {
                month.selected = true;
            }
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        var container = (0, _dom.createElement)("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement = void 0;
        if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
            monthElement = (0, _dom.createElement)("span", "cur-month");
        } else {
            self.monthsDropdownContainer = (0, _dom.createElement)("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", function (e) {
                var target = (0, _dom.getEventTarget)(e);
                var selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        var yearInput = (0, _dom.createNumberInput)("cur-year", { tabindex: "-1" });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        var currentMonth = (0, _dom.createElement)("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement
        };
    }
    function buildMonths() {
        (0, _dom.clearNode)(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for (var m = self.config.showMonths; m--;) {
            var month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = (0, _dom.createElement)("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = (0, _dom.createElement)("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = (0, _dom.createElement)("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function get() {
                return self.__hidePrevMonthArrow;
            },
            set: function set(bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    (0, _dom.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            }
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function get() {
                return self.__hideNextMonthArrow;
            },
            set: function set(bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    (0, _dom.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            }
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
        var defaults = (0, _dates.getDefaultHours)(self.config);
        self.timeContainer = (0, _dom.createElement)("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = (0, _dom.createElement)("span", "flatpickr-time-separator", ":");
        var hourInput = (0, _dom.createNumberInput)("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = (0, _dom.createNumberInput)("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = (0, _utils.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
        self.minuteElement.value = (0, _utils.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = (0, _dom.createNumberInput)("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = (0, _utils.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild((0, _dom.createElement)("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = (0, _dom.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0, _utils.int)((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer) self.weekdayContainer = (0, _dom.createElement)("div", "flatpickr-weekdays");else (0, _dom.clearNode)(self.weekdayContainer);
        for (var i = self.config.showMonths; i--;) {
            var container = (0, _dom.createElement)("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) {
            return;
        }
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = [].concat(_toConsumableArray(self.l10n.weekdays.shorthand));
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = [].concat(_toConsumableArray(weekdays.splice(firstDayOfWeek, weekdays.length)), _toConsumableArray(weekdays.splice(0, firstDayOfWeek)));
        }
        for (var i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
        }
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = (0, _dom.createElement)("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild((0, _dom.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = (0, _dom.createElement)("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers
        };
    }
    function changeMonth(value) {
        var isOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var delta = isOffset ? value : value - self.currentMonth;
        if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear() {
        var triggerChangeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var toInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        self.input.value = "";
        if (self.altInput !== undefined) self.altInput.value = "";
        if (self.mobileInput !== undefined) self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            var _getDefaultHours = (0, _dates.getDefaultHours)(self.config),
                hours = _getDefaultHours.hours,
                minutes = _getDefaultHours.minutes,
                seconds = _getDefaultHours.seconds;

            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent) triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove("open");
            }
            if (self._input !== undefined) {
                self._input.classList.remove("active");
            }
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined) triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            self._handlers[i].remove();
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        } else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                var wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while (wrapper.firstChild) {
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    }wrapper.parentNode.removeChild(wrapper);
                }
            } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
            try {
                delete self[k];
            } catch (_) {}
        });
    }
    function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var eventTarget = (0, _dom.getEventTarget)(e);
            var isCalendarElement = isCalendarElem(eventTarget);
            var isInput = eventTarget === self.input || eventTarget === self.altInput || self.element.contains(eventTarget) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
            var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget);
            });
            if (lostFocus && isIgnored) {
                if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
                    updateTime();
                }
                self.close();
                if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) {
                    self.clear(false);
                    self.redraw();
                }
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
        var newYearNum = newYear,
            isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date) {
        var timeless = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var _a;
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if (self.config.minDate && dateToCheck && (0, _dates.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && (0, _dates.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
        if (!self.config.enable && self.config.disable.length === 0) return true;
        if (dateToCheck === undefined) return false;
        var bool = !!self.config.enable,
            array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (var i = 0, d; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
            } else if ((typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
        return false;
    }
    function onBlur(e) {
        var isInput = e.target === self._input;
        if (isInput && (self.selectedDates.length > 0 || self._input.value.length > 0) && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
        var eventTarget = (0, _dom.getEventTarget)(e);
        var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
                return eventTarget.blur();
            } else {
                self.open();
            }
        } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
            switch (e.keyCode) {
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    } else selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
                            var _delta = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey) focusOnDay(undefined, _delta);else {
                                e.stopPropagation();
                                changeMonth(_delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    } else if (self.hourElement) self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    var delta = e.keyCode === 40 ? 1 : -1;
                    if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
                    } else if (eventTarget === self.currentYearElement) {
                        changeYear(self.currentYear - delta);
                    } else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement) self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
                            return x;
                        });
                        var i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            var target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
                default:
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            switch (e.key) {
                case self.l10n.amPM[0].charAt(0):
                case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;
                case self.l10n.amPM[1].charAt(0):
                case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
            }
        }
        if (isInput || isCalendarElem(eventTarget)) {
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
        var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
            initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
            rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
            rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        var containsDisabled = false;
        var minRange = 0,
            maxRange = 0;
        for (var t = rangeStartDate; t < rangeEndDate; t += _dates.duration.DAY) {
            if (!isEnabled(new Date(t), true)) {
                containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
                if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
            }
        }
        for (var m = 0; m < self.config.showMonths; m++) {
            var month = self.daysContainer.children[m];

            var _loop = function _loop(i, l) {
                var dayElem = month.children[i],
                    date = dayElem.dateObj;
                var timestamp = date.getTime();
                var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
                if (outOfRange) {
                    dayElem.classList.add("notAllowed");
                    ["inRange", "startRange", "endRange"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    return "continue";
                } else if (containsDisabled && !outOfRange) return "continue";
                ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                if (elem !== undefined) {
                    elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
                    if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                    if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && (0, _dates.isBetween)(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
                }
            };

            for (var i = 0, l = month.children.length; i < l; i++) {
                var _ret = _loop(i, l);

                if (_ret === "continue") continue;
            }
        }
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
    }
    function open(e) {
        var positionElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self._positionElement;

        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                var eventTarget = (0, _dom.getEventTarget)(e);
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        } else if (self._input.disabled || self.config.inline) {
            return;
        }
        var wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
                setTimeout(function () {
                    return self.hourElement.select();
                }, 50);
            }
        }
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) {
                    return isEnabled(d);
                });
                if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
        var userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        var formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: function get() {
                return self.config._enable;
            },
            set: function set(dates) {
                self.config._enable = parseDateRules(dates);
            }
        });
        Object.defineProperty(self.config, "disable", {
            get: function get() {
                return self.config._disable;
            },
            set: function set(dates) {
                self.config._disable = parseDateRules(dates);
            }
        });
        var timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _options.defaults.dateFormat;
            formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
            var defaultAltFormat = flatpickr.defaultConfig.altFormat || _options.defaults.altFormat;
            formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function get() {
                return self.config._minDate;
            },
            set: minMaxDateSetter("min")
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function get() {
                return self.config._maxDate;
            },
            set: minMaxDateSetter("max")
        });
        var minMaxTimeSetter = function minMaxTimeSetter(type) {
            return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            };
        };
        Object.defineProperty(self.config, "minTime", {
            get: function get() {
                return self.config._minTime;
            },
            set: minMaxTimeSetter("min")
        });
        Object.defineProperty(self.config, "maxTime", {
            get: function get() {
                return self.config._maxTime;
            },
            set: minMaxTimeSetter("max")
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for (var i = 0; i < boolOpts.length; i++) {
            self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
        }_options.HOOKS.filter(function (hook) {
            return self.config[hook] !== undefined;
        }).forEach(function (hook) {
            self.config[hook] = (0, _utils.arrayify)(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var _i = 0; _i < self.config.plugins.length; _i++) {
            var pluginConf = self.config.plugins[_i](self) || {};
            for (var key in pluginConf) {
                if (_options.HOOKS.indexOf(key) > -1) {
                    self.config[key] = (0, _utils.arrayify)(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
                } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) {
            self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
        }
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap ? element.querySelector("[data-input]") : element;
    }
    function setupLocale() {
        if (_typeof(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns.default), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
        _formatting.tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        var userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = (0, _dates.createDateFormatter)(self);
        self.parseDate = (0, _dates.createDateParser)({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
        if (self.calendarContainer === undefined) return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
            return acc + child.offsetHeight;
        }, 0),
            calendarWidth = self.calendarContainer.offsetWidth,
            configPos = self.config.position.split(" "),
            configPosVertical = configPos[0],
            configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
            inputBounds = positionElement.getBoundingClientRect(),
            distanceFromBottom = window.innerHeight - inputBounds.bottom,
            showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
        var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        (0, _dom.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
        (0, _dom.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline) return;
        var left = window.pageXOffset + inputBounds.left;
        var isCenter = false;
        var isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        } else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        (0, _dom.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        (0, _dom.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
        (0, _dom.toggleClass)(self.calendarContainer, "arrowRight", isRight);
        var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        var centerMost = right + calendarWidth > window.document.body.offsetWidth;
        (0, _dom.toggleClass)(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static) return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        } else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        } else {
            var doc = getDocumentStyleSheet();
            if (doc === undefined) return;
            var bodyWidth = window.document.body.offsetWidth;
            var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            var centerBefore = ".flatpickr-calendar.centerMost:before";
            var centerAfter = ".flatpickr-calendar.centerMost:after";
            var centerIndex = doc.cssRules.length;
            var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
            (0, _dom.toggleClass)(self.calendarContainer, "rightMost", false);
            (0, _dom.toggleClass)(self.calendarContainer, "centerMost", true);
            doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
            self.calendarContainer.style.left = centerLeft + "px";
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        var editableSheet = null;
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            try {
                sheet.cssRules;
            } catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        var style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile) return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
        } else {
            self.close();
        }
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function isSelectable(day) {
            return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
        };
        var t = (0, _dom.findParent)((0, _dom.getEventTarget)(e), isSelectable);
        if (t === undefined) return;
        var target = t;
        var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
        } else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
                self.clear(false, false);
            }
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if ((0, _dates.compareDates)(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
                return a.getTime() - b.getTime();
            });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
            self.selectedDateElem && self.selectedDateElem.focus();
        }
        if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
            if (single || range) {
                focusAndClose();
            }
        }
        triggerChange();
    }
    var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate],
        clickOpens: [function () {
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "click", self.open);
            } else {
                self._input.removeEventListener("focus", self.open);
                self._input.removeEventListener("click", self.open);
            }
        }]
    };
    function set(option, value) {
        if (option !== null && (typeof option === "undefined" ? "undefined" : _typeof(option)) === "object") {
            Object.assign(self.config, option);
            for (var key in option) {
                if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
                    return x();
                });
            }
        } else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
                return x();
            });else if (_options.HOOKS.indexOf(option) > -1) self.config[option] = (0, _utils.arrayify)(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array) dates = inputDate.map(function (d) {
            return self.parseDate(d, format);
        });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                case "time":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate.split(self.config.conjunction).map(function (date) {
                        return self.parseDate(date, format);
                    });
                    break;
                case "range":
                    dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
                        return self.parseDate(date, format);
                    });
                    break;
                default:
                    break;
            }
        } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function (d) {
            return d instanceof Date && isEnabled(d, false);
        });
        if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
            return a.getTime() - b.getTime();
        });
    }
    function setDate(date) {
        var triggerChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : self.config.dateFormat;

        if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
            self.clear(false);
        }
        updateValue(triggerChange);
        if (triggerChange) triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr.slice().map(function (rule) {
            if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            } else if (rule && (typeof rule === "undefined" ? "undefined" : _typeof(rule)) === "object" && rule.from && rule.to) return {
                from: self.parseDate(rule.from, undefined),
                to: self.parseDate(rule.to, undefined)
            };
            return rule;
        }).filter(function (x) {
            return x;
        });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
        if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = (0, _dom.createElement)(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
        self.mobileInput = (0, _dom.createElement)("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
        if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined) self.altInput.type = "hidden";
        try {
            if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        } catch (_a) {}
        bind(self.mobileInput, "change", function (e) {
            self.setDate((0, _dom.getEventTarget)(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true) return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined) return;
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++) {
                hooks[i](self.selectedDates, self.input.value, self, data);
            }
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            if ((0, _dates.compareDates)(self.selectedDates[i], date) === 0) return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
        return (0, _dates.compareDates)(date, self.selectedDates[0]) >= 0 && (0, _dates.compareDates)(date, self.selectedDates[1]) <= 0;
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
        self.yearElements.forEach(function (yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
                self.monthElements[i].textContent = (0, _formatting.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            } else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
            }
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(format) {
        return self.selectedDates.map(function (dObj) {
            return self.formatDate(dObj, format);
        }).filter(function (d, i, arr) {
            return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
        }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
    }
    function updateValue() {
        var triggerChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange !== false) triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        var eventTarget = (0, _dom.getEventTarget)(e);
        var isPrevMonth = self.prevMonthNav.contains(eventTarget);
        var isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
        } else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
        } else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
        } else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
        }
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown",
            eventTarget = (0, _dom.getEventTarget)(e),
            input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent = self.l10n.amPM[(0, _utils.int)(self.amPM.textContent === self.l10n.amPM[0])];
        }
        var min = parseFloat(input.getAttribute("min")),
            max = parseFloat(input.getAttribute("max")),
            step = parseFloat(input.getAttribute("step")),
            curValue = parseInt(input.value, 10),
            delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement,
                isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue = max + newValue + (0, _utils.int)(!isHourElem) + ((0, _utils.int)(isHourElem) && (0, _utils.int)(!self.amPM));
                if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
            } else if (newValue > max) {
                newValue = input === self.hourElement ? newValue - max - (0, _utils.int)(!self.amPM) : min;
                if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent = self.l10n.amPM[(0, _utils.int)(self.amPM.textContent === self.l10n.amPM[0])];
            }
            input.value = (0, _utils.pad)(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
        return x instanceof HTMLElement;
    });
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null) continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        } catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr = function flatpickr(selector, config) {
    if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
    } else if (selector instanceof Node) {
        return _flatpickr([selector], config);
    } else {
        return _flatpickr(selector, config);
    }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: Object.assign({}, _default2.default),
    default: Object.assign({}, _default2.default)
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = Object.assign(Object.assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = (0, _dates.createDateParser)({});
flatpickr.formatDate = (0, _dates.createDateFormatter)({});
flatpickr.compareDates = _dates.compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
}
exports.default = flatpickr;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var english = exports.english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function ordinal(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false
};
exports.default = english;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var HOOKS = exports.HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
var defaults = exports.defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: function errorHandler(err) {
        return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function getWeek(givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formats = exports.tokenRegex = exports.revFormat = exports.monthToStr = undefined;

var _utils = __webpack_require__(9);

var doNothing = function doNothing() {
    return undefined;
};
var monthToStr = exports.monthToStr = function monthToStr(monthNumber, shorthand, locale) {
    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = exports.revFormat = {
    D: doNothing,
    F: function F(dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function G(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    H: function H(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function J(dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function K(dateObj, amPM, locale) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * (0, _utils.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function M(dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function S(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function U(_, unixSeconds) {
        return new Date(parseFloat(unixSeconds) * 1000);
    },
    W: function W(dateObj, weekNum, locale) {
        var weekNumber = parseInt(weekNum);
        var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: function Y(dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function Z(_, ISODate) {
        return new Date(ISODate);
    },
    d: function d(dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function h(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    i: function i(dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function j(dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function m(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function n(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function s(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: function u(_, unixMillSeconds) {
        return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function y(dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    }
};
var tokenRegex = exports.tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
};
var formats = exports.formats = {
    Z: function Z(date) {
        return date.toISOString();
    },
    D: function D(date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function F(date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function G(date, locale, options) {
        return (0, _utils.pad)(formats.h(date, locale, options));
    },
    H: function H(date) {
        return (0, _utils.pad)(date.getHours());
    },
    J: function J(date, locale) {
        return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
    },
    K: function K(date, locale) {
        return locale.amPM[(0, _utils.int)(date.getHours() > 11)];
    },
    M: function M(date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function S(date) {
        return (0, _utils.pad)(date.getSeconds());
    },
    U: function U(date) {
        return date.getTime() / 1000;
    },
    W: function W(date, _, options) {
        return options.getWeek(date);
    },
    Y: function Y(date) {
        return (0, _utils.pad)(date.getFullYear(), 4);
    },
    d: function d(date) {
        return (0, _utils.pad)(date.getDate());
    },
    h: function h(date) {
        return date.getHours() % 12 ? date.getHours() % 12 : 12;
    },
    i: function i(date) {
        return (0, _utils.pad)(date.getMinutes());
    },
    j: function j(date) {
        return date.getDate();
    },
    l: function l(date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function m(date) {
        return (0, _utils.pad)(date.getMonth() + 1);
    },
    n: function n(date) {
        return date.getMonth() + 1;
    },
    s: function s(date) {
        return date.getSeconds();
    },
    u: function u(date) {
        return date.getTime();
    },
    w: function w(date) {
        return date.getDay();
    },
    y: function y(date) {
        return String(date.getFullYear()).substring(2);
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounce = debounce;
var pad = exports.pad = function pad(number) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return ("000" + number).slice(length * -1);
};
var int = exports.int = function int(bool) {
    return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
    var t = void 0;
    return function () {
        var _this = this,
            _arguments = arguments;

        clearTimeout(t);
        t = setTimeout(function () {
            return fn.apply(_this, _arguments);
        }, wait);
    };
}
var arrayify = exports.arrayify = function arrayify(obj) {
    return obj instanceof Array ? obj : [obj];
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validate = __webpack_require__(2);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate2.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

exports.default = parse;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL = exports.DNS = undefined;

exports.default = function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse2.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify2.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
};

var _stringify = __webpack_require__(1);

var _stringify2 = _interopRequireDefault(_stringify);

var _parse = __webpack_require__(10);

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = exports.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = exports.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(37)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--2-1!../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--2-1!../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.duration = exports.isBetween = exports.createDateParser = exports.createDateFormatter = undefined;
exports.compareDates = compareDates;
exports.compareTimes = compareTimes;
exports.getDefaultHours = getDefaultHours;

var _formatting = __webpack_require__(8);

var _options = __webpack_require__(7);

var _default = __webpack_require__(6);

var createDateFormatter = exports.createDateFormatter = function createDateFormatter(_ref) {
    var _ref$config = _ref.config,
        config = _ref$config === undefined ? _options.defaults : _ref$config,
        _ref$l10n = _ref.l10n,
        l10n = _ref$l10n === undefined ? _default.english : _ref$l10n,
        _ref$isMobile = _ref.isMobile,
        isMobile = _ref$isMobile === undefined ? false : _ref$isMobile;
    return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) {
            return config.formatDate(dateObj, frmt, locale);
        }
        return frmt.split("").map(function (c, i, arr) {
            return _formatting.formats[c] && arr[i - 1] !== "\\" ? _formatting.formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
        }).join("");
    };
};
var createDateParser = exports.createDateParser = function createDateParser(_ref2) {
    var _ref2$config = _ref2.config,
        config = _ref2$config === undefined ? _options.defaults : _ref2$config,
        _ref2$l10n = _ref2.l10n,
        l10n = _ref2$l10n === undefined ? _default.english : _ref2$l10n;
    return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date) return undefined;
        var locale = customLocale || l10n;
        var parsedDate = void 0;
        var dateOrig = date;
        if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
            var format = givenFormat || (config || _options.defaults).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
                parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
                var matched = void 0,
                    ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (_formatting.tokenRegex[token] && !escaped) {
                        regexStr += _formatting.tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: _formatting.revFormat[token],
                                val: match[++matchIndex]
                            });
                        }
                    } else if (!isBackSlash) regexStr += ".";
                    ops.forEach(function (_ref3) {
                        var fn = _ref3.fn,
                            val = _ref3.val;
                        return parsedDate = fn(parsedDate, val, locale) || parsedDate;
                    });
                }
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error("Invalid date provided: " + dateOrig));
            return undefined;
        }
        if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
};
function compareDates(date1, date2) {
    var timeless = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (timeless !== false) {
        return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    }
    return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
    return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}
var isBetween = exports.isBetween = function isBetween(ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var duration = exports.duration = {
    DAY: 86400000
};
function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        var minHour = config.minDate.getHours();
        var minMinutes = config.minDate.getMinutes();
        var minSeconds = config.minDate.getSeconds();
        if (hours < minHour) {
            hours = minHour;
        }
        if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
        }
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        var maxHr = config.maxDate.getHours();
        var maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
    }
    return { hours: hours, minutes: minutes, seconds: seconds };
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleClass = toggleClass;
exports.createElement = createElement;
exports.clearNode = clearNode;
exports.findParent = findParent;
exports.createNumberInput = createNumberInput;
exports.getEventTarget = getEventTarget;
function toggleClass(elem, className, bool) {
    if (bool === true) return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined) e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
function findParent(node, condition) {
    if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"),
        numInput = createElement("input", "numInput " + inputClassName),
        arrowUp = createElement("span", "arrowUp"),
        arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
        numInput.type = "number";
    } else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined) for (var key in opts) {
        numInput.setAttribute(key, opts[key]);
    }wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    } catch (error) {
        return event.target;
    }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
        if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
        }

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        var _loop = function _loop(source) {
            if (source) {
                Object.keys(source).forEach(function (key) {
                    return target[key] = source[key];
                });
            }
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var source = _step.value;

                _loop(source);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return target;
    };
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = __webpack_require__(24);

Object.defineProperty(exports, 'v1', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_v).default;
  }
});

var _v2 = __webpack_require__(25);

Object.defineProperty(exports, 'v3', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_v2).default;
  }
});

var _v3 = __webpack_require__(26);

Object.defineProperty(exports, 'v4', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_v3).default;
  }
});

var _v4 = __webpack_require__(27);

Object.defineProperty(exports, 'v5', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_v4).default;
  }
});

var _nil = __webpack_require__(21);

Object.defineProperty(exports, 'NIL', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_nil).default;
  }
});

var _version = __webpack_require__(28);

Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_version).default;
  }
});

var _validate = __webpack_require__(2);

Object.defineProperty(exports, 'validate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_validate).default;
  }
});

var _stringify = __webpack_require__(1);

Object.defineProperty(exports, 'stringify', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stringify).default;
  }
});

var _parse = __webpack_require__(10);

Object.defineProperty(exports, 'parse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parse).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */

function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */

function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */

function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */

function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */

function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */

function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */

function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

exports.default = md5;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '00000000-0000-0000-0000-000000000000';

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

exports.default = sha1;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rng = __webpack_require__(11);

var _rng2 = _interopRequireDefault(_rng);

var _stringify = __webpack_require__(1);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng2.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify2.default)(b);
}

exports.default = v1;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = __webpack_require__(12);

var _v2 = _interopRequireDefault(_v);

var _md = __webpack_require__(20);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v3 = (0, _v2.default)('v3', 0x30, _md2.default);
exports.default = v3;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rng = __webpack_require__(11);

var _rng2 = _interopRequireDefault(_rng);

var _stringify = __webpack_require__(1);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng2.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify2.default)(rnds);
}

exports.default = v4;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = __webpack_require__(12);

var _v2 = _interopRequireDefault(_v);

var _sha = __webpack_require__(23);

var _sha2 = _interopRequireDefault(_sha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v5 = (0, _v2.default)('v5', 0x50, _sha2.default);
exports.default = v5;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validate = __webpack_require__(2);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate2.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

exports.default = version;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;

var _todo = __webpack_require__(34);

var _app = __webpack_require__(0);

var _uuid = __webpack_require__(19);

var _render = __webpack_require__(4);

var _checkDuplicates = __webpack_require__(31);

var dayjs = __webpack_require__(3);
var inputEl = document.getElementById('inputEl');
function addTodo() {
  //check if same todo already exists
  if ((0, _checkDuplicates.checkDuplicates)()) {
    inputEl.value = "";
    inputEl.focus();
  } else {
    //add a todo
    if (inputEl.value != "") {
      var todoText = inputEl.value;
      var aTodo = new _todo.todo(todoText, false, dayjs().add(3, "day"), (0, _uuid.v4)());
      _app.todos.push(aTodo);
      console.log(_app.todos);
      inputEl.value = "";
      (0, _render.render)();
    } else {
      //highlight empty input field
      document.getElementById("inputEl").classList.toggle("missingInput");
      setTimeout(function () {
        document.getElementById("inputEl").classList.toggle("missingInput");
      }, 310);
    }
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calendarHandler = calendarHandler;

var _app = __webpack_require__(0);

var _flatpickr = __webpack_require__(5);

var _flatpickr2 = _interopRequireDefault(_flatpickr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayjs = __webpack_require__(3);
function calendarHandler() {
    (0, _flatpickr2.default)(".calendaricon");
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.checkDuplicates = checkDuplicates;

var _app = __webpack_require__(0);

var inputEl = document.getElementById('inputEl');

function checkDuplicates() {
    var _loop = function _loop(i) {
        if (inputEl.value.toLowerCase() == _app.todos[i].text.toLowerCase()) {
            var nodes = Array.from(document.querySelectorAll(".todoText")).find(function (el) {
                return el.textContent === _app.todos[i].text;
            });
            nodes.parentElement.parentElement.classList.toggle("duplicateInput");
            setTimeout(function () {
                return nodes.parentElement.parentElement.classList.remove("duplicateInput");
            }, 1000);
            return {
                v: true
            };
        }
    };

    for (var i = 0; i < _app.todos.length; i++) {
        var _ret = _loop(i);

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
    }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteHandler = deleteHandler;

var _app = __webpack_require__(0);

var _render = __webpack_require__(4);

function deleteHandler(e) {
    var icons = document.querySelectorAll(".trashicon");
    for (var i = 0; i < icons.length; i++) {
        if (icons[i].id === e.target.id) {
            e.target.parentNode.classList.add("deletedElement");
            _app.todos.splice(i, 1);
            setTimeout(function () {
                return (0, _render.render)();
            }, 300);
        }
    }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleCheckbox = handleCheckbox;

var _app = __webpack_require__(0);

var _render = __webpack_require__(4);

function handleCheckbox(e) {
    for (var i = 0; i < _app.todos.length; i++) {
        if (_app.todos[i].id === e.target.parentNode.id) {
            _app.todos[i].done = !_app.todos[i].done;
            (0, _render.render)();
        }
    }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var todo = exports.todo = function todo(text, done, dueDate, id) {
    _classCallCheck(this, todo);

    this.text = text;
    this.done = done;
    this.dueDate = dueDate;
    this.id = id;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(13);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap);", ""]);

// module
exports.push([module.i, "body {\n  background-color: #A8DADC; }\n\n#container {\n  max-width: 800px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\nh1 {\n  margin-left: 50px;\n  color: #FFF;\n  font-family: 'Poppins', sans-serif;\n  font-size: 100px;\n  font-weight: 400;\n  color: #1D3557; }\n\n.todoRow {\n  display: flex;\n  height: 100%;\n  align-items: baseline;\n  border-bottom: 1px solid black;\n  margin-bottom: 1em; }\n\n.todoElement {\n  padding: 0.5em;\n  margin: 0.25em;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between; }\n\n.todoText {\n  margin-right: 2em;\n  text-decoration: bold; }\n\n.todoDueDate {\n  color: #F1FAEE; }\n\n.todoCheckbox {\n  appearance: none;\n  border: 1px solid black;\n  background-color: #F1FAEE;\n  border-radius: 0.2em;\n  padding: 0.5rem; }\n\n/*.todoCheckbox:checked + div {\r\n  text-decoration: line-through;\r\n  font-style: italic;\r\n  color: $lightgrey;\r\n}*/\n.checkedTask {\n  text-decoration: line-through;\n  font-style: italic;\n  color: #F1FAEE; }\n\n.trashicon:hover {\n  background-color: red;\n  backface-visibility: 0.5; }\n\n#inputEl {\n  width: 50%;\n  padding: 0.5em;\n  text-align: center;\n  border: 1px solid #1D3557;\n  border-radius: 0.2em; }\n\n#inputEl:focus {\n  outline: none;\n  background-color: #F1FAEE; }\n\n#submitButtonEl {\n  width: 30%;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  padding: 0.5em;\n  border-radius: 0.3em;\n  border: 0;\n  background-color: #457B9D;\n  color: #F1FAEE; }\n\n#submitButtonEl:hover {\n  background-color: #1D3557;\n  cursor: pointer;\n  color: #F1FAEE;\n  text-decoration: bold; }\n\n#submitButtonEl:active {\n  transform: scale(0.98); }\n\n@keyframes highlightInput {\n  0%, 100% {\n    background-color: white; }\n  50% {\n    background-color: #e63946;\n    transform: scale(1.09); } }\n\n.duplicateInput {\n  animation: highlightInput 0.5s 3; }\n\n.missingInput {\n  animation: highlightInput 0.3s 1; }\n\n.deletedElement {\n  animation: deleteElement 0.3s 1; }\n\n@keyframes deleteElement {\n  0% {\n    opacity: 1;\n    visibility: visible; }\n  100% {\n    opacity: 0;\n    visibility: hidden; } }\n\n.far {\n  padding: 0.25em;\n  margin: 0.2em;\n  cursor: pointer; }\n\n.checkboxDone {\n  visibility: hidden; }\n", "", {"version":3,"sources":["C:/Users/ResQ Club/Desktop/DEV/todo-app-webpack/src/src/index.scss"],"names":[],"mappings":"AAUA;EACE,0BATiB,EAUlB;;AAED;EACE,iBAAgB;EAChB,eAAc;EACd,cAAa;EACb,uBAAsB;EACtB,oBAAmB,EACpB;;AAED;EAEI,kBAAU;EAEZ,YA1BU;EA2BV,mCAAkC;EAClC,iBAAgB;EAChB,iBAAgB;EAChB,eA1BgB,EA2BjB;;AACD;EACE,cAAa;EACb,aAAY;EACZ,sBAAqB;EACrB,+BAA8B;EAC9B,mBAAkB,EACnB;;AACD;EACE,eAAc;EACd,eAAc;EACd,cAAa;EACb,oBAAmB;EACnB,YAAW;EACX,+BAA8B,EAC/B;;AAED;EACE,kBAAiB;EACjB,sBAAqB,EAEtB;;AAED;EACE,eAlDiB,EAoDlB;;AAED;EACE,iBAAgB;EAChB,wBAAuB;EACvB,0BAzDiB;EA0DjB,qBAAoB;EACpB,gBAAe,EAChB;;AAED;;;;GAIG;AAEH;EACE,8BAA6B;EAC7B,mBAAkB;EAClB,eAvEiB,EAwElB;;AAGD;EACE,sBAAqB;EACrB,yBAAwB,EACzB;;AAED;EACE,WAAU;EACV,eAAc;EACd,mBAAkB;EAClB,0BArFgB;EAsFhB,qBAAoB,EACrB;;AAED;EACE,cAAa;EACb,0BA1FiB,EA2FlB;;AAED;EACE,WAAU;EACV,gBAAe;EACf,mBAAkB;EAClB,eAAc;EACd,qBAAoB;EACpB,UAAS;EACT,0BAtGkB;EAuGlB,eArGiB,EAsGlB;;AAED;EACE,0BA1GgB;EA2GhB,gBAAe;EACf,eA3GiB;EA4GjB,sBAAqB,EACtB;;AAED;EACE,uBAAsB,EACvB;;AAEC;EACE;IAAU,wBAAuB,EAAA;EACjC;IAAK,0BApHU;IAoHoB,uBAAsB,EAAA,EAAA;;AAG7D;EACE,iCAAgC,EACjC;;AAED;EACE,iCAAgC,EACjC;;AAED;EACE,gCAA+B,EAChC;;AAED;EACE;IAAI,WAAU;IAAE,oBAAmB,EAAA;EACnC;IAAM,WAAU;IAAE,mBAAkB,EAAA,EAAA;;AAItC;EACE,gBAAe;EACf,cAAa;EACb,gBAAe,EAChB;;AAED;EACE,mBAAkB,EACnB","file":"index.scss","sourcesContent":["$white: #FFF;\r\n$success: #09c476;\r\n$lightblue: #A8DADC;\r\n$darkerblue: #457B9D;\r\n$darkblue: #1D3557;\r\n$lightgrey: #F1FAEE;\r\n$customred: #e63946;\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');\r\n\r\nbody {\r\n  background-color: $lightblue;\r\n}\r\n\r\n#container {\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nh1 {\r\n  margin: {\r\n    left: 50px;\r\n  }\r\n  color: $white;\r\n  font-family: 'Poppins', sans-serif;  \r\n  font-size: 100px;\r\n  font-weight: 400;\r\n  color: $darkblue\r\n}\r\n.todoRow {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: baseline;\r\n  border-bottom: 1px solid black;\r\n  margin-bottom: 1em;\r\n}\r\n.todoElement {\r\n  padding: 0.5em;\r\n  margin: 0.25em;\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todoText {\r\n  margin-right: 2em;\r\n  text-decoration: bold;\r\n\r\n}\r\n\r\n.todoDueDate {\r\n  color: $lightgrey;\r\n\r\n}\r\n\r\n.todoCheckbox {\r\n  appearance: none;\r\n  border: 1px solid black;\r\n  background-color: $lightgrey;\r\n  border-radius: 0.2em;\r\n  padding: 0.5rem;\r\n}\r\n\r\n/*.todoCheckbox:checked + div {\r\n  text-decoration: line-through;\r\n  font-style: italic;\r\n  color: $lightgrey;\r\n}*/\r\n\r\n.checkedTask {\r\n  text-decoration: line-through;\r\n  font-style: italic;\r\n  color: $lightgrey;\r\n}\r\n\r\n\r\n.trashicon:hover {\r\n  background-color: red;\r\n  backface-visibility: 0.5;\r\n}\r\n\r\n#inputEl {\r\n  width: 50%;\r\n  padding: 0.5em;\r\n  text-align: center;\r\n  border: 1px solid $darkblue;\r\n  border-radius: 0.2em;\r\n}\r\n\r\n#inputEl:focus {\r\n  outline: none;\r\n  background-color: $lightgrey;\r\n}\r\n\r\n#submitButtonEl {\r\n  width: 30%;\r\n  margin-top: 1em;\r\n  margin-bottom: 1em;\r\n  padding: 0.5em;\r\n  border-radius: 0.3em;\r\n  border: 0;\r\n  background-color: $darkerblue;\r\n  color: $lightgrey;\r\n}\r\n\r\n#submitButtonEl:hover {\r\n  background-color: $darkblue;\r\n  cursor: pointer;\r\n  color: $lightgrey;\r\n  text-decoration: bold;\r\n}\r\n\r\n#submitButtonEl:active {\r\n  transform: scale(0.98);\r\n} \r\n\r\n  @keyframes highlightInput {\r\n    0%, 100% {background-color: white;}\r\n    50% {background-color: $customred; transform: scale(1.09);}\r\n  }\r\n\r\n.duplicateInput {\r\n  animation: highlightInput 0.5s 3;\r\n}\r\n\r\n.missingInput {\r\n  animation: highlightInput 0.3s 1;\r\n}\r\n\r\n.deletedElement {\r\n  animation: deleteElement 0.3s 1;\r\n}\r\n\r\n@keyframes deleteElement {\r\n  0% {opacity: 1; visibility: visible;}\r\n  100% {opacity: 0; visibility: hidden;}\r\n  \r\n}\r\n\r\n.far {\r\n  padding: 0.25em;\r\n  margin: 0.2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkboxDone {\r\n  visibility: hidden;\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(18);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map