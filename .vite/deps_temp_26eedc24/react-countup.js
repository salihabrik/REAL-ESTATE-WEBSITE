import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  require_react
} from "./chunk-2FATVHAI.js";

// node_modules/countup.js/dist/countUp.min.js
var countUp_min_exports = {};
__export(countUp_min_exports, {
  CountUp: () => CountUp
});
var __assign, CountUp;
var init_countUp_min = __esm({
  "node_modules/countup.js/dist/countUp.min.js"() {
    __assign = function() {
      return (__assign = Object.assign || function(t) {
        for (var i, n = 1, s = arguments.length; n < s; n++)
          for (var a in i = arguments[n])
            Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
        return t;
      }).apply(this, arguments);
    };
    CountUp = function() {
      function t(t2, i, n) {
        var s = this;
        this.endVal = i, this.options = n, this.version = "2.6.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t3) {
          s.startTime || (s.startTime = t3);
          var i2 = t3 - s.startTime;
          s.remaining = s.duration - i2, s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(i2, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(i2, s.startVal, s.endVal - s.startVal, s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (i2 / s.duration);
          var n2 = s.countDown ? s.frameVal < s.endVal : s.frameVal > s.endVal;
          s.frameVal = n2 ? s.endVal : s.frameVal, s.frameVal = Number(s.frameVal.toFixed(s.options.decimalPlaces)), s.printValue(s.frameVal), i2 < s.duration ? s.rAF = requestAnimationFrame(s.count) : null !== s.finalEndVal ? s.update(s.finalEndVal) : s.options.onCompleteCallback && s.options.onCompleteCallback();
        }, this.formatNumber = function(t3) {
          var i2, n2, a, e, o = t3 < 0 ? "-" : "";
          i2 = Math.abs(t3).toFixed(s.options.decimalPlaces);
          var r = (i2 += "").split(".");
          if (n2 = r[0], a = r.length > 1 ? s.options.decimal + r[1] : "", s.options.useGrouping) {
            e = "";
            for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u)
              s.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = s.options.separator + e), h++, e = n2[p - u - 1] + e;
            n2 = e;
          }
          return s.options.numerals && s.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t4) {
            return s.options.numerals[+t4];
          }), a = a.replace(/[0-9]/g, function(t4) {
            return s.options.numerals[+t4];
          })), o + s.options.prefix + n2 + a + s.options.suffix;
        }, this.easeOutExpo = function(t3, i2, n2, s2) {
          return n2 * (1 - Math.pow(2, -10 * t3 / s2)) * 1024 / 1023 + i2;
        }, this.options = __assign(__assign({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el = "string" == typeof t2 ? document.getElementById(t2) : t2, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t2) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
          return s.handleScroll(s);
        }), window.onscroll = function() {
          window.onScrollFns.forEach(function(t3) {
            return t3();
          });
        }, this.handleScroll(this)));
      }
      return t.prototype.handleScroll = function(t2) {
        if (t2 && window && !t2.once) {
          var i = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
          a < i && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
            return t2.start();
          }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i) && !t2.paused && t2.reset();
        }
      }, t.prototype.determineDirectionAndSmartEasing = function() {
        var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > t2;
        var i = t2 - this.startVal;
        if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
          this.finalEndVal = t2;
          var n = this.countDown ? 1 : -1;
          this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
        } else
          this.endVal = t2, this.finalEndVal = null;
        null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
      }, t.prototype.start = function(t2) {
        this.error || (t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
      }, t.prototype.pauseResume = function() {
        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
      }, t.prototype.reset = function() {
        cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
      }, t.prototype.update = function(t2) {
        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
      }, t.prototype.printValue = function(t2) {
        var i;
        if (this.el) {
          var n = this.formattingFn(t2);
          if (null !== (i = this.options.plugin) && void 0 !== i && i.render)
            this.options.plugin.render(this.el, n);
          else if ("INPUT" === this.el.tagName)
            this.el.value = n;
          else
            "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
        }
      }, t.prototype.ensureNumber = function(t2) {
        return "number" == typeof t2 && !isNaN(t2);
      }, t.prototype.validateValue = function(t2) {
        var i = Number(t2);
        return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
      }, t.prototype.resetDuration = function() {
        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
      }, t;
    }();
  }
});

// node_modules/react-countup/build/index.js
var require_build = __commonJS({
  "node_modules/react-countup/build/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require_react();
    var countup_js = (init_countUp_min(), __toCommonJS(countUp_min_exports));
    function _iterableToArrayLimit(arr, i) {
      var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
      if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
        try {
          if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i)
              return;
            _n = false;
          } else
            for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
              ;
        } catch (err) {
          _d = true, _e = err;
        } finally {
          try {
            if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
              return;
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? React.useLayoutEffect : React.useEffect;
    function useEventCallback(fn) {
      var ref = React.useRef(fn);
      useIsomorphicLayoutEffect(function() {
        ref.current = fn;
      });
      return React.useCallback(function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
      }, []);
    }
    var createCountUpInstance = function createCountUpInstance2(el, props) {
      var decimal = props.decimal, decimals = props.decimals, duration = props.duration, easingFn = props.easingFn, end = props.end, formattingFn = props.formattingFn, numerals = props.numerals, prefix = props.prefix, separator = props.separator, start = props.start, suffix = props.suffix, useEasing = props.useEasing, useGrouping = props.useGrouping, useIndianSeparators = props.useIndianSeparators, enableScrollSpy = props.enableScrollSpy, scrollSpyDelay = props.scrollSpyDelay, scrollSpyOnce = props.scrollSpyOnce;
      return new countup_js.CountUp(el, end, {
        startVal: start,
        duration,
        decimal,
        decimalPlaces: decimals,
        easingFn,
        formattingFn,
        numerals,
        separator,
        prefix,
        suffix,
        useEasing,
        useIndianSeparators,
        useGrouping,
        enableScrollSpy,
        scrollSpyDelay,
        scrollSpyOnce
      });
    };
    var _excluded$1 = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"];
    var DEFAULTS = {
      decimal: ".",
      separator: ",",
      delay: null,
      prefix: "",
      suffix: "",
      duration: 2,
      start: 0,
      decimals: 0,
      startOnMount: true,
      enableReinitialize: true,
      useEasing: true,
      useGrouping: true,
      useIndianSeparators: false
    };
    var useCountUp = function useCountUp2(props) {
      var filteredProps = Object.fromEntries(Object.entries(props).filter(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), value = _ref2[1];
        return value !== void 0;
      }));
      var _useMemo = React.useMemo(function() {
        return _objectSpread2(_objectSpread2({}, DEFAULTS), filteredProps);
      }, [props]), ref = _useMemo.ref, startOnMount = _useMemo.startOnMount, enableReinitialize = _useMemo.enableReinitialize, delay = _useMemo.delay, onEnd = _useMemo.onEnd, onStart = _useMemo.onStart, onPauseResume = _useMemo.onPauseResume, onReset = _useMemo.onReset, onUpdate = _useMemo.onUpdate, instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);
      var countUpRef = React.useRef();
      var timerRef = React.useRef();
      var isInitializedRef = React.useRef(false);
      var createInstance = useEventCallback(function() {
        return createCountUpInstance(typeof ref === "string" ? ref : ref.current, instanceProps);
      });
      var getCountUp = useEventCallback(function(recreate) {
        var countUp = countUpRef.current;
        if (countUp && !recreate) {
          return countUp;
        }
        var newCountUp = createInstance();
        countUpRef.current = newCountUp;
        return newCountUp;
      });
      var start = useEventCallback(function() {
        var run = function run2() {
          return getCountUp(true).start(function() {
            onEnd === null || onEnd === void 0 ? void 0 : onEnd({
              pauseResume,
              reset,
              start: restart,
              update
            });
          });
        };
        if (delay && delay > 0) {
          timerRef.current = setTimeout(run, delay * 1e3);
        } else {
          run();
        }
        onStart === null || onStart === void 0 ? void 0 : onStart({
          pauseResume,
          reset,
          update
        });
      });
      var pauseResume = useEventCallback(function() {
        getCountUp().pauseResume();
        onPauseResume === null || onPauseResume === void 0 ? void 0 : onPauseResume({
          reset,
          start: restart,
          update
        });
      });
      var reset = useEventCallback(function() {
        if (getCountUp().el) {
          timerRef.current && clearTimeout(timerRef.current);
          getCountUp().reset();
          onReset === null || onReset === void 0 ? void 0 : onReset({
            pauseResume,
            start: restart,
            update
          });
        }
      });
      var update = useEventCallback(function(newEnd) {
        getCountUp().update(newEnd);
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate({
          pauseResume,
          reset,
          start: restart
        });
      });
      var restart = useEventCallback(function() {
        reset();
        start();
      });
      var maybeInitialize = useEventCallback(function(shouldReset) {
        if (startOnMount) {
          if (shouldReset) {
            reset();
          }
          start();
        }
      });
      React.useEffect(function() {
        if (!isInitializedRef.current) {
          isInitializedRef.current = true;
          maybeInitialize();
        } else if (enableReinitialize) {
          maybeInitialize(true);
        }
      }, [enableReinitialize, isInitializedRef, maybeInitialize, delay, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.formattingFn]);
      React.useEffect(function() {
        return function() {
          reset();
        };
      }, [reset]);
      return {
        start: restart,
        pauseResume,
        reset,
        update,
        getCountUp
      };
    };
    var _excluded = ["className", "redraw", "containerProps", "children", "style"];
    var CountUp2 = function CountUp3(props) {
      var className = props.className, redraw = props.redraw, containerProps = props.containerProps, children = props.children, style = props.style, useCountUpProps = _objectWithoutProperties(props, _excluded);
      var containerRef = React.useRef(null);
      var isInitializedRef = React.useRef(false);
      var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
        ref: containerRef,
        startOnMount: typeof children !== "function" || props.delay === 0,
        // component manually restarts
        enableReinitialize: false
      })), start = _useCountUp.start, reset = _useCountUp.reset, updateCountUp = _useCountUp.update, pauseResume = _useCountUp.pauseResume, getCountUp = _useCountUp.getCountUp;
      var restart = useEventCallback(function() {
        start();
      });
      var update = useEventCallback(function(end) {
        if (!props.preserveValue) {
          reset();
        }
        updateCountUp(end);
      });
      var initializeOnMount = useEventCallback(function() {
        if (typeof props.children === "function") {
          if (!(containerRef.current instanceof Element)) {
            console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);
            return;
          }
        }
        getCountUp();
      });
      React.useEffect(function() {
        initializeOnMount();
      }, [initializeOnMount]);
      React.useEffect(function() {
        if (isInitializedRef.current) {
          update(props.end);
        }
      }, [props.end, update]);
      var redrawDependencies = redraw && props;
      React.useEffect(function() {
        if (redraw && isInitializedRef.current) {
          restart();
        }
      }, [restart, redraw, redrawDependencies]);
      React.useEffect(function() {
        if (!redraw && isInitializedRef.current) {
          restart();
        }
      }, [restart, redraw, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.className, props.formattingFn]);
      React.useEffect(function() {
        isInitializedRef.current = true;
      }, []);
      if (typeof children === "function") {
        return children({
          countUpRef: containerRef,
          start,
          reset,
          update: updateCountUp,
          pauseResume,
          getCountUp
        });
      }
      return React.createElement("span", _extends({
        className,
        ref: containerRef,
        style
      }, containerProps), typeof props.start !== "undefined" ? getCountUp().formattingFn(props.start) : "");
    };
    exports.default = CountUp2;
    exports.useCountUp = useCountUp;
  }
});
export default require_build();
//# sourceMappingURL=react-countup.js.map
