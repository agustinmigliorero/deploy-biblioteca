function bc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function ed(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Pa = { exports: {} },
  xl = {},
  La = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for("react.element"),
  td = Symbol.for("react.portal"),
  nd = Symbol.for("react.fragment"),
  rd = Symbol.for("react.strict_mode"),
  ld = Symbol.for("react.profiler"),
  id = Symbol.for("react.provider"),
  od = Symbol.for("react.context"),
  ud = Symbol.for("react.forward_ref"),
  ad = Symbol.for("react.suspense"),
  sd = Symbol.for("react.memo"),
  cd = Symbol.for("react.lazy"),
  fu = Symbol.iterator;
function dd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fu && e[fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ta = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ra = Object.assign,
  za = {};
function mn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = za),
    (this.updater = n || Ta);
}
mn.prototype.isReactComponent = {};
mn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Oa() {}
Oa.prototype = mn.prototype;
function po(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = za),
    (this.updater = n || Ta);
}
var ho = (po.prototype = new Oa());
ho.constructor = po;
Ra(ho, mn.prototype);
ho.isPureReactComponent = !0;
var pu = Array.isArray,
  Fa = Object.prototype.hasOwnProperty,
  mo = { current: null },
  Ia = { key: !0, ref: !0, __self: !0, __source: !0 };
function Da(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Fa.call(t, r) && !Ia.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: cr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: mo.current,
  };
}
function fd(e, t) {
  return {
    $$typeof: cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function pd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hu = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? pd("" + e.key)
    : t.toString(36);
}
function Fr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cr:
          case td:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Vl(o, 0) : r),
      pu(l)
        ? ((n = ""),
          e != null && (n = e.replace(hu, "$&/") + "/"),
          Fr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (vo(l) &&
            (l = fd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(hu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), pu(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + Vl(i, a);
      o += Fr(i, t, n, s, l);
    }
  else if (((s = dd(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Vl(i, a++)), (o += Fr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Fr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function hd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Ir = { transition: null },
  md = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: mo,
  };
function Ua() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: gr,
  forEach: function (e, t, n) {
    gr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = mn;
F.Fragment = nd;
F.Profiler = ld;
F.PureComponent = po;
F.StrictMode = rd;
F.Suspense = ad;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = md;
F.act = Ua;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ra({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = mo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Fa.call(t, s) &&
        !Ia.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: cr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: od,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: id, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Da;
F.createFactory = function (e) {
  var t = Da.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: ud, render: e };
};
F.isValidElement = vo;
F.lazy = function (e) {
  return { $$typeof: cd, _payload: { _status: -1, _result: e }, _init: hd };
};
F.memo = function (e, t) {
  return { $$typeof: sd, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Ir.transition;
  Ir.transition = {};
  try {
    e();
  } finally {
    Ir.transition = t;
  }
};
F.unstable_act = Ua;
F.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
F.useContext = function (e) {
  return se.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
F.useId = function () {
  return se.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return se.current.useRef(e);
};
F.useState = function (e) {
  return se.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return se.current.useTransition();
};
F.version = "18.3.1";
La.exports = F;
var y = La.exports;
const Ma = ed(y),
  vd = bc({ __proto__: null, default: Ma }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gd = y,
  yd = Symbol.for("react.element"),
  xd = Symbol.for("react.fragment"),
  wd = Object.prototype.hasOwnProperty,
  Sd = gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jd = { key: !0, ref: !0, __self: !0, __source: !0 };
function $a(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) wd.call(t, r) && !jd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: yd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Sd.current,
  };
}
xl.Fragment = xd;
xl.jsx = $a;
xl.jsxs = $a;
Pa.exports = xl;
var u = Pa.exports,
  mi = {},
  Aa = { exports: {} },
  je = {},
  Ba = { exports: {} },
  Va = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, z) {
    var O = P.length;
    P.push(z);
    e: for (; 0 < O; ) {
      var K = (O - 1) >>> 1,
        Z = P[K];
      if (0 < l(Z, z)) (P[K] = z), (P[O] = Z), (O = K);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var z = P[0],
      O = P.pop();
    if (O !== z) {
      P[0] = O;
      e: for (var K = 0, Z = P.length, mr = Z >>> 1; K < mr; ) {
        var Ct = 2 * (K + 1) - 1,
          Bl = P[Ct],
          Et = Ct + 1,
          vr = P[Et];
        if (0 > l(Bl, O))
          Et < Z && 0 > l(vr, Bl)
            ? ((P[K] = vr), (P[Et] = O), (K = Et))
            : ((P[K] = Bl), (P[Ct] = O), (K = Ct));
        else if (Et < Z && 0 > l(vr, O)) (P[K] = vr), (P[Et] = O), (K = Et);
        else break e;
      }
    }
    return z;
  }
  function l(P, z) {
    var O = P.sortIndex - z.sortIndex;
    return O !== 0 ? O : P.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    v = 3,
    w = !1,
    x = !1,
    j = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= P)
        r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function g(P) {
    if (((j = !1), p(P), !x))
      if (n(s) !== null) (x = !0), $l(E);
      else {
        var z = n(c);
        z !== null && Al(g, z.startTime - P);
      }
  }
  function E(P, z) {
    (x = !1), j && ((j = !1), f(C), (C = -1)), (w = !0);
    var O = v;
    try {
      for (
        p(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (P && !ve()));

      ) {
        var K = m.callback;
        if (typeof K == "function") {
          (m.callback = null), (v = m.priorityLevel);
          var Z = K(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            p(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var mr = !0;
      else {
        var Ct = n(c);
        Ct !== null && Al(g, Ct.startTime - z), (mr = !1);
      }
      return mr;
    } finally {
      (m = null), (v = O), (w = !1);
    }
  }
  var L = !1,
    S = null,
    C = -1,
    R = 5,
    T = -1;
  function ve() {
    return !(e.unstable_now() - T < R);
  }
  function Sn() {
    if (S !== null) {
      var P = e.unstable_now();
      T = P;
      var z = !0;
      try {
        z = S(!0, P);
      } finally {
        z ? jn() : ((L = !1), (S = null));
      }
    } else L = !1;
  }
  var jn;
  if (typeof d == "function")
    jn = function () {
      d(Sn);
    };
  else if (typeof MessageChannel < "u") {
    var du = new MessageChannel(),
      qc = du.port2;
    (du.port1.onmessage = Sn),
      (jn = function () {
        qc.postMessage(null);
      });
  } else
    jn = function () {
      N(Sn, 0);
    };
  function $l(P) {
    (S = P), L || ((L = !0), jn());
  }
  function Al(P, z) {
    C = N(function () {
      P(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), $l(E));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (P) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = v;
      }
      var O = v;
      v = z;
      try {
        return P();
      } finally {
        v = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, z) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var O = v;
      v = P;
      try {
        return z();
      } finally {
        v = O;
      }
    }),
    (e.unstable_scheduleCallback = function (P, z, O) {
      var K = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? K + O : K))
          : (O = K),
        P)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = O + Z),
        (P = {
          id: h++,
          callback: z,
          priorityLevel: P,
          startTime: O,
          expirationTime: Z,
          sortIndex: -1,
        }),
        O > K
          ? ((P.sortIndex = O),
            t(c, P),
            n(s) === null &&
              P === n(c) &&
              (j ? (f(C), (C = -1)) : (j = !0), Al(g, O - K)))
          : ((P.sortIndex = Z), t(s, P), x || w || ((x = !0), $l(E))),
        P
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (P) {
      var z = v;
      return function () {
        var O = v;
        v = z;
        try {
          return P.apply(this, arguments);
        } finally {
          v = O;
        }
      };
    });
})(Va);
Ba.exports = Va;
var kd = Ba.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd = y,
  Se = kd;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wa = new Set(),
  Hn = {};
function Mt(e, t) {
  un(e, t), un(e + "Capture", t);
}
function un(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) Wa.add(t[e]);
}
var Xe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  vi = Object.prototype.hasOwnProperty,
  Ed =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mu = {},
  vu = {};
function Nd(e) {
  return vi.call(vu, e)
    ? !0
    : vi.call(mu, e)
    ? !1
    : Ed.test(e)
    ? (vu[e] = !0)
    : ((mu[e] = !0), !1);
}
function _d(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pd(e, t, n, r) {
  if (t === null || typeof t > "u" || _d(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var go = /[\-:]([a-z])/g;
function yo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(go, yo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(go, yo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(go, yo);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pd(t, n, l, r) && (n = null),
    r || l === null
      ? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qe = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yr = Symbol.for("react.element"),
  Vt = Symbol.for("react.portal"),
  Wt = Symbol.for("react.fragment"),
  wo = Symbol.for("react.strict_mode"),
  gi = Symbol.for("react.profiler"),
  Ha = Symbol.for("react.provider"),
  Qa = Symbol.for("react.context"),
  So = Symbol.for("react.forward_ref"),
  yi = Symbol.for("react.suspense"),
  xi = Symbol.for("react.suspense_list"),
  jo = Symbol.for("react.memo"),
  nt = Symbol.for("react.lazy"),
  Ka = Symbol.for("react.offscreen"),
  gu = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gu && e[gu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Wl;
function Rn(e) {
  if (Wl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wl = (t && t[1]) || "";
    }
  return (
    `
` +
    Wl +
    e
  );
}
var Hl = !1;
function Ql(e, t) {
  if (!e || Hl) return "";
  Hl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Hl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rn(e) : "";
}
function Ld(e) {
  switch (e.tag) {
    case 5:
      return Rn(e.type);
    case 16:
      return Rn("Lazy");
    case 13:
      return Rn("Suspense");
    case 19:
      return Rn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ql(e.type, !1)), e;
    case 11:
      return (e = Ql(e.type.render, !1)), e;
    case 1:
      return (e = Ql(e.type, !0)), e;
    default:
      return "";
  }
}
function wi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case Vt:
      return "Portal";
    case gi:
      return "Profiler";
    case wo:
      return "StrictMode";
    case yi:
      return "Suspense";
    case xi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qa:
        return (e.displayName || "Context") + ".Consumer";
      case Ha:
        return (e._context.displayName || "Context") + ".Provider";
      case So:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case jo:
        return (
          (t = e.displayName || null), t !== null ? t : wi(e.type) || "Memo"
        );
      case nt:
        (t = e._payload), (e = e._init);
        try {
          return wi(e(t));
        } catch {}
    }
  return null;
}
function Td(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wi(t);
    case 8:
      return t === wo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ya(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rd(e) {
  var t = Ya(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = Rd(e));
}
function Xa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ya(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Kr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Si(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function yu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ga(e, t) {
  (t = t.checked), t != null && xo(e, "checked", t, !1);
}
function ji(e, t) {
  Ga(e, t);
  var n = yt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ki(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ki(e, t.type, yt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ki(e, t, n) {
  (t !== "number" || Kr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zn = Array.isArray;
function en(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ci(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (zn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yt(n) };
}
function Ja(e, t) {
  var n = yt(t.value),
    r = yt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Su(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Za(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Za(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wr,
  qa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wr = wr || document.createElement("div"),
          wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var In = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zd = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function (e) {
  zd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]);
  });
});
function ba(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
    ? ("" + t).trim()
    : t + "px";
}
function es(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ba(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Od = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ni(e, t) {
  if (t) {
    if (Od[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function _i(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pi = null;
function ko(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Li = null,
  tn = null,
  nn = null;
function ju(e) {
  if ((e = pr(e))) {
    if (typeof Li != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Cl(t)), Li(e.stateNode, e.type, t));
  }
}
function ts(e) {
  tn ? (nn ? nn.push(e) : (nn = [e])) : (tn = e);
}
function ns() {
  if (tn) {
    var e = tn,
      t = nn;
    if (((nn = tn = null), ju(e), t)) for (e = 0; e < t.length; e++) ju(t[e]);
  }
}
function rs(e, t) {
  return e(t);
}
function ls() {}
var Kl = !1;
function is(e, t, n) {
  if (Kl) return e(t, n);
  Kl = !0;
  try {
    return rs(e, t, n);
  } finally {
    (Kl = !1), (tn !== null || nn !== null) && (ls(), ns());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Ti = !1;
if (Xe)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        Ti = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    Ti = !1;
  }
function Fd(e, t, n, r, l, i, o, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Dn = !1,
  Yr = null,
  Xr = !1,
  Ri = null,
  Id = {
    onError: function (e) {
      (Dn = !0), (Yr = e);
    },
  };
function Dd(e, t, n, r, l, i, o, a, s) {
  (Dn = !1), (Yr = null), Fd.apply(Id, arguments);
}
function Ud(e, t, n, r, l, i, o, a, s) {
  if ((Dd.apply(this, arguments), Dn)) {
    if (Dn) {
      var c = Yr;
      (Dn = !1), (Yr = null);
    } else throw Error(k(198));
    Xr || ((Xr = !0), (Ri = c));
  }
}
function $t(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function os(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ku(e) {
  if ($t(e) !== e) throw Error(k(188));
}
function Md(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $t(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ku(l), e;
        if (i === r) return ku(l), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function us(e) {
  return (e = Md(e)), e !== null ? as(e) : null;
}
function as(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = as(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ss = Se.unstable_scheduleCallback,
  Cu = Se.unstable_cancelCallback,
  $d = Se.unstable_shouldYield,
  Ad = Se.unstable_requestPaint,
  Y = Se.unstable_now,
  Bd = Se.unstable_getCurrentPriorityLevel,
  Co = Se.unstable_ImmediatePriority,
  cs = Se.unstable_UserBlockingPriority,
  Gr = Se.unstable_NormalPriority,
  Vd = Se.unstable_LowPriority,
  ds = Se.unstable_IdlePriority,
  wl = null,
  Be = null;
function Wd(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Kd,
  Hd = Math.log,
  Qd = Math.LN2;
function Kd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hd(e) / Qd) | 0)) | 0;
}
var Sr = 64,
  jr = 4194304;
function On(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = On(a)) : ((i &= o), i !== 0 && (r = On(i)));
  } else (o = n & ~l), o !== 0 ? (r = On(o)) : i !== 0 && (r = On(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Yd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ie(i),
      a = 1 << o,
      s = l[o];
    s === -1
      ? (!(a & n) || a & r) && (l[o] = Yd(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function zi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fs() {
  var e = Sr;
  return (Sr <<= 1), !(Sr & 4194240) && (Sr = 64), e;
}
function Yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function Gd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Eo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function ps(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hs,
  No,
  ms,
  vs,
  gs,
  Oi = !1,
  kr = [],
  st = null,
  ct = null,
  dt = null,
  Yn = new Map(),
  Xn = new Map(),
  lt = [],
  Jd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Yn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = pr(t)), t !== null && No(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Zd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (st = En(st, e, t, n, r, l)), !0;
    case "dragenter":
      return (ct = En(ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (dt = En(dt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Yn.set(i, En(Yn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Xn.set(i, En(Xn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ys(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = os(n)), t !== null)) {
          (e.blockedOn = t),
            gs(e.priority, function () {
              ms(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pi = r), n.target.dispatchEvent(r), (Pi = null);
    } else return (t = pr(n)), t !== null && No(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Nu(e, t, n) {
  Dr(e) && n.delete(t);
}
function qd() {
  (Oi = !1),
    st !== null && Dr(st) && (st = null),
    ct !== null && Dr(ct) && (ct = null),
    dt !== null && Dr(dt) && (dt = null),
    Yn.forEach(Nu),
    Xn.forEach(Nu);
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oi ||
      ((Oi = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, qd)));
}
function Gn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < kr.length) {
    Nn(kr[0], e);
    for (var n = 1; n < kr.length; n++) {
      var r = kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    st !== null && Nn(st, e),
      ct !== null && Nn(ct, e),
      dt !== null && Nn(dt, e),
      Yn.forEach(t),
      Xn.forEach(t),
      n = 0;
    n < lt.length;
    n++
  )
    (r = lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < lt.length && ((n = lt[0]), n.blockedOn === null); )
    ys(n), n.blockedOn === null && lt.shift();
}
var rn = qe.ReactCurrentBatchConfig,
  Zr = !0;
function bd(e, t, n, r) {
  var l = D,
    i = rn.transition;
  rn.transition = null;
  try {
    (D = 1), _o(e, t, n, r);
  } finally {
    (D = l), (rn.transition = i);
  }
}
function ef(e, t, n, r) {
  var l = D,
    i = rn.transition;
  rn.transition = null;
  try {
    (D = 4), _o(e, t, n, r);
  } finally {
    (D = l), (rn.transition = i);
  }
}
function _o(e, t, n, r) {
  if (Zr) {
    var l = Fi(e, t, n, r);
    if (l === null) ri(e, t, r, qr, n), Eu(e, r);
    else if (Zd(l, e, t, n, r)) r.stopPropagation();
    else if ((Eu(e, r), t & 4 && -1 < Jd.indexOf(e))) {
      for (; l !== null; ) {
        var i = pr(l);
        if (
          (i !== null && hs(i),
          (i = Fi(e, t, n, r)),
          i === null && ri(e, t, r, qr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ri(e, t, r, null, n);
  }
}
var qr = null;
function Fi(e, t, n, r) {
  if (((qr = null), (e = ko(r)), (e = Pt(e)), e !== null))
    if (((t = $t(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = os(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qr = e), null;
}
function xs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Bd()) {
        case Co:
          return 1;
        case cs:
          return 4;
        case Gr:
        case Vd:
          return 16;
        case ds:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null,
  Po = null,
  Ur = null;
function ws() {
  if (Ur) return Ur;
  var e,
    t = Po,
    n = t.length,
    r,
    l = "value" in ot ? ot.value : ot.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Ur = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Mr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cr() {
  return !0;
}
function _u() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Cr
        : _u),
      (this.isPropagationStopped = _u),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cr));
      },
      persist: function () {},
      isPersistent: Cr,
    }),
    t
  );
}
var vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Lo = ke(vn),
  fr = H({}, vn, { view: 0, detail: 0 }),
  tf = ke(fr),
  Xl,
  Gl,
  _n,
  Sl = H({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: To,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((Xl = e.screenX - _n.screenX), (Gl = e.screenY - _n.screenY))
              : (Gl = Xl = 0),
            (_n = e)),
          Xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gl;
    },
  }),
  Pu = ke(Sl),
  nf = H({}, Sl, { dataTransfer: 0 }),
  rf = ke(nf),
  lf = H({}, fr, { relatedTarget: 0 }),
  Jl = ke(lf),
  of = H({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uf = ke(of),
  af = H({}, vn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sf = ke(af),
  cf = H({}, vn, { data: 0 }),
  Lu = ke(cf),
  df = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ff = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  pf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pf[e]) ? !!t[e] : !1;
}
function To() {
  return hf;
}
var mf = H({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = df[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Mr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ff[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: To,
    charCode: function (e) {
      return e.type === "keypress" ? Mr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Mr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  vf = ke(mf),
  gf = H({}, Sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Tu = ke(gf),
  yf = H({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: To,
  }),
  xf = ke(yf),
  wf = H({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sf = ke(wf),
  jf = H({}, Sl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  kf = ke(jf),
  Cf = [9, 13, 27, 32],
  Ro = Xe && "CompositionEvent" in window,
  Un = null;
Xe && "documentMode" in document && (Un = document.documentMode);
var Ef = Xe && "TextEvent" in window && !Un,
  Ss = Xe && (!Ro || (Un && 8 < Un && 11 >= Un)),
  Ru = " ",
  zu = !1;
function js(e, t) {
  switch (e) {
    case "keyup":
      return Cf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ks(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ht = !1;
function Nf(e, t) {
  switch (e) {
    case "compositionend":
      return ks(t);
    case "keypress":
      return t.which !== 32 ? null : ((zu = !0), Ru);
    case "textInput":
      return (e = t.data), e === Ru && zu ? null : e;
    default:
      return null;
  }
}
function _f(e, t) {
  if (Ht)
    return e === "compositionend" || (!Ro && js(e, t))
      ? ((e = ws()), (Ur = Po = ot = null), (Ht = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ss && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pf[e.type] : t === "textarea";
}
function Cs(e, t, n, r) {
  ts(r),
    (t = br(t, "onChange")),
    0 < t.length &&
      ((n = new Lo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Mn = null,
  Jn = null;
function Lf(e) {
  Is(e, 0);
}
function jl(e) {
  var t = Yt(e);
  if (Xa(t)) return e;
}
function Tf(e, t) {
  if (e === "change") return t;
}
var Es = !1;
if (Xe) {
  var Zl;
  if (Xe) {
    var ql = "oninput" in document;
    if (!ql) {
      var Fu = document.createElement("div");
      Fu.setAttribute("oninput", "return;"),
        (ql = typeof Fu.oninput == "function");
    }
    Zl = ql;
  } else Zl = !1;
  Es = Zl && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  Mn && (Mn.detachEvent("onpropertychange", Ns), (Jn = Mn = null));
}
function Ns(e) {
  if (e.propertyName === "value" && jl(Jn)) {
    var t = [];
    Cs(t, Jn, e, ko(e)), is(Lf, t);
  }
}
function Rf(e, t, n) {
  e === "focusin"
    ? (Iu(), (Mn = t), (Jn = n), Mn.attachEvent("onpropertychange", Ns))
    : e === "focusout" && Iu();
}
function zf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return jl(Jn);
}
function Of(e, t) {
  if (e === "click") return jl(t);
}
function Ff(e, t) {
  if (e === "input" || e === "change") return jl(t);
}
function If(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : If;
function Zn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vi.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function Du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uu(e, t) {
  var n = Du(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Du(n);
  }
}
function _s(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _s(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ps() {
  for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Kr(e.document);
  }
  return t;
}
function zo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Df(e) {
  var t = Ps(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _s(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Uu(n, i));
        var o = Uu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Uf = Xe && "documentMode" in document && 11 >= document.documentMode,
  Qt = null,
  Ii = null,
  $n = null,
  Di = !1;
function Mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Di ||
    Qt == null ||
    Qt !== Kr(r) ||
    ((r = Qt),
    "selectionStart" in r && zo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    ($n && Zn($n, r)) ||
      (($n = r),
      (r = br(Ii, "onSelect")),
      0 < r.length &&
        ((t = new Lo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qt))));
}
function Er(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kt = {
    animationend: Er("Animation", "AnimationEnd"),
    animationiteration: Er("Animation", "AnimationIteration"),
    animationstart: Er("Animation", "AnimationStart"),
    transitionend: Er("Transition", "TransitionEnd"),
  },
  bl = {},
  Ls = {};
Xe &&
  ((Ls = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kt.animationend.animation,
    delete Kt.animationiteration.animation,
    delete Kt.animationstart.animation),
  "TransitionEvent" in window || delete Kt.transitionend.transition);
function kl(e) {
  if (bl[e]) return bl[e];
  if (!Kt[e]) return e;
  var t = Kt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ls) return (bl[e] = t[n]);
  return e;
}
var Ts = kl("animationend"),
  Rs = kl("animationiteration"),
  zs = kl("animationstart"),
  Os = kl("transitionend"),
  Fs = new Map(),
  $u =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function wt(e, t) {
  Fs.set(e, t), Mt(t, [e]);
}
for (var ei = 0; ei < $u.length; ei++) {
  var ti = $u[ei],
    Mf = ti.toLowerCase(),
    $f = ti[0].toUpperCase() + ti.slice(1);
  wt(Mf, "on" + $f);
}
wt(Ts, "onAnimationEnd");
wt(Rs, "onAnimationIteration");
wt(zs, "onAnimationStart");
wt("dblclick", "onDoubleClick");
wt("focusin", "onFocus");
wt("focusout", "onBlur");
wt(Os, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
Mt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Af = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
function Au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ud(r, t, void 0, e), (e.currentTarget = null);
}
function Is(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            s = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), s !== i && l.isPropagationStopped())) break e;
          Au(l, a, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (s = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Au(l, a, c), (i = s);
        }
    }
  }
  if (Xr) throw ((e = Ri), (Xr = !1), (Ri = null), e);
}
function M(e, t) {
  var n = t[Bi];
  n === void 0 && (n = t[Bi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ds(t, e, 2, !1), n.add(r));
}
function ni(e, t, n) {
  var r = 0;
  t && (r |= 4), Ds(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function qn(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      Wa.forEach(function (n) {
        n !== "selectionchange" && (Af.has(n) || ni(n, !1, e), ni(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), ni("selectionchange", !1, t));
  }
}
function Ds(e, t, n, r) {
  switch (xs(t)) {
    case 1:
      var l = bd;
      break;
    case 4:
      l = ef;
      break;
    default:
      l = _o;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ti ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ri(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Pt(a)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  is(function () {
    var c = i,
      h = ko(n),
      m = [];
    e: {
      var v = Fs.get(e);
      if (v !== void 0) {
        var w = Lo,
          x = e;
        switch (e) {
          case "keypress":
            if (Mr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = vf;
            break;
          case "focusin":
            (x = "focus"), (w = Jl);
            break;
          case "focusout":
            (x = "blur"), (w = Jl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Jl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = rf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = xf;
            break;
          case Ts:
          case Rs:
          case zs:
            w = uf;
            break;
          case Os:
            w = Sf;
            break;
          case "scroll":
            w = tf;
            break;
          case "wheel":
            w = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = sf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Tu;
        }
        var j = (t & 4) !== 0,
          N = !j && e === "scroll",
          f = j ? (v !== null ? v + "Capture" : null) : v;
        j = [];
        for (var d = c, p; d !== null; ) {
          p = d;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = Kn(d, f)), g != null && j.push(bn(d, g, p)))),
            N)
          )
            break;
          d = d.return;
        }
        0 < j.length &&
          ((v = new w(v, x, null, n, h)), m.push({ event: v, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Pi &&
            (x = n.relatedTarget || n.fromElement) &&
            (Pt(x) || x[Ge]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            h.window === h
              ? h
              : (v = h.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? Pt(x) : null),
              x !== null &&
                ((N = $t(x)), x !== N || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((j = Pu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((j = Tu),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (N = w == null ? v : Yt(w)),
            (p = x == null ? v : Yt(x)),
            (v = new j(g, d + "leave", w, n, h)),
            (v.target = N),
            (v.relatedTarget = p),
            (g = null),
            Pt(h) === c &&
              ((j = new j(f, d + "enter", x, n, h)),
              (j.target = p),
              (j.relatedTarget = N),
              (g = j)),
            (N = g),
            w && x)
          )
            t: {
              for (j = w, f = x, d = 0, p = j; p; p = Bt(p)) d++;
              for (p = 0, g = f; g; g = Bt(g)) p++;
              for (; 0 < d - p; ) (j = Bt(j)), d--;
              for (; 0 < p - d; ) (f = Bt(f)), p--;
              for (; d--; ) {
                if (j === f || (f !== null && j === f.alternate)) break t;
                (j = Bt(j)), (f = Bt(f));
              }
              j = null;
            }
          else j = null;
          w !== null && Bu(m, v, w, j, !1),
            x !== null && N !== null && Bu(m, N, x, j, !0);
        }
      }
      e: {
        if (
          ((v = c ? Yt(c) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === "select" || (w === "input" && v.type === "file"))
        )
          var E = Tf;
        else if (Ou(v))
          if (Es) E = Ff;
          else {
            E = zf;
            var L = Rf;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (E = Of);
        if (E && (E = E(e, c))) {
          Cs(m, E, n, h);
          break e;
        }
        L && L(e, v, c),
          e === "focusout" &&
            (L = v._wrapperState) &&
            L.controlled &&
            v.type === "number" &&
            ki(v, "number", v.value);
      }
      switch (((L = c ? Yt(c) : window), e)) {
        case "focusin":
          (Ou(L) || L.contentEditable === "true") &&
            ((Qt = L), (Ii = c), ($n = null));
          break;
        case "focusout":
          $n = Ii = Qt = null;
          break;
        case "mousedown":
          Di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Di = !1), Mu(m, n, h);
          break;
        case "selectionchange":
          if (Uf) break;
        case "keydown":
        case "keyup":
          Mu(m, n, h);
      }
      var S;
      if (Ro)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Ht
          ? js(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Ss &&
          n.locale !== "ko" &&
          (Ht || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Ht && (S = ws())
            : ((ot = h),
              (Po = "value" in ot ? ot.value : ot.textContent),
              (Ht = !0))),
        (L = br(c, C)),
        0 < L.length &&
          ((C = new Lu(C, e, null, n, h)),
          m.push({ event: C, listeners: L }),
          S ? (C.data = S) : ((S = ks(n)), S !== null && (C.data = S)))),
        (S = Ef ? Nf(e, n) : _f(e, n)) &&
          ((c = br(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new Lu("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = S)));
    }
    Is(m, t);
  });
}
function bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Kn(e, n)),
      i != null && r.unshift(bn(e, i, l)),
      (i = Kn(e, t)),
      i != null && r.push(bn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      c = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((s = Kn(n, i)), s != null && o.unshift(bn(n, s, a)))
        : l || ((s = Kn(n, i)), s != null && o.push(bn(n, s, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Bf = /\r\n?/g,
  Vf = /\u0000|\uFFFD/g;
function Vu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bf,
      `
`
    )
    .replace(Vf, "");
}
function _r(e, t, n) {
  if (((t = Vu(t)), Vu(e) !== t && n)) throw Error(k(425));
}
function el() {}
var Ui = null,
  Mi = null;
function $i(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ai = typeof setTimeout == "function" ? setTimeout : void 0,
  Wf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wu = typeof Promise == "function" ? Promise : void 0,
  Hf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wu < "u"
      ? function (e) {
          return Wu.resolve(null).then(e).catch(Qf);
        }
      : Ai;
function Qf(e) {
  setTimeout(function () {
    throw e;
  });
}
function li(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Gn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Gn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gn = Math.random().toString(36).slice(2),
  Ae = "__reactFiber$" + gn,
  er = "__reactProps$" + gn,
  Ge = "__reactContainer$" + gn,
  Bi = "__reactEvents$" + gn,
  Kf = "__reactListeners$" + gn,
  Yf = "__reactHandles$" + gn;
function Pt(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[Ae])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Hu(e); e !== null; ) {
          if ((n = e[Ae])) return n;
          e = Hu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pr(e) {
  return (
    (e = e[Ae] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Cl(e) {
  return e[er] || null;
}
var Vi = [],
  Xt = -1;
function St(e) {
  return { current: e };
}
function $(e) {
  0 > Xt || ((e.current = Vi[Xt]), (Vi[Xt] = null), Xt--);
}
function U(e, t) {
  Xt++, (Vi[Xt] = e.current), (e.current = t);
}
var xt = {},
  oe = St(xt),
  pe = St(!1),
  Ot = xt;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function tl() {
  $(pe), $(oe);
}
function Qu(e, t, n) {
  if (oe.current !== xt) throw Error(k(168));
  U(oe, t), U(pe, n);
}
function Us(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Td(e) || "Unknown", l));
  return H({}, n, r);
}
function nl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xt),
    (Ot = oe.current),
    U(oe, e),
    U(pe, pe.current),
    !0
  );
}
function Ku(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Us(e, t, Ot)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(pe),
      $(oe),
      U(oe, e))
    : $(pe),
    U(pe, n);
}
var He = null,
  El = !1,
  ii = !1;
function Ms(e) {
  He === null ? (He = [e]) : He.push(e);
}
function Xf(e) {
  (El = !0), Ms(e);
}
function jt() {
  if (!ii && He !== null) {
    ii = !0;
    var e = 0,
      t = D;
    try {
      var n = He;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (El = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), ss(Co, jt), l);
    } finally {
      (D = t), (ii = !1);
    }
  }
  return null;
}
var Gt = [],
  Jt = 0,
  rl = null,
  ll = 0,
  Ce = [],
  Ee = 0,
  Ft = null,
  Qe = 1,
  Ke = "";
function Nt(e, t) {
  (Gt[Jt++] = ll), (Gt[Jt++] = rl), (rl = e), (ll = t);
}
function $s(e, t, n) {
  (Ce[Ee++] = Qe), (Ce[Ee++] = Ke), (Ce[Ee++] = Ft), (Ft = e);
  var r = Qe;
  e = Ke;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ie(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Qe = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Ke = i + e);
  } else (Qe = (1 << i) | (n << l) | r), (Ke = e);
}
function Oo(e) {
  e.return !== null && (Nt(e, 1), $s(e, 1, 0));
}
function Fo(e) {
  for (; e === rl; )
    (rl = Gt[--Jt]), (Gt[Jt] = null), (ll = Gt[--Jt]), (Gt[Jt] = null);
  for (; e === Ft; )
    (Ft = Ce[--Ee]),
      (Ce[Ee] = null),
      (Ke = Ce[--Ee]),
      (Ce[Ee] = null),
      (Qe = Ce[--Ee]),
      (Ce[Ee] = null);
}
var we = null,
  xe = null,
  A = !1,
  Fe = null;
function As(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (xe = ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: Qe, overflow: Ke } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hi(e) {
  if (A) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Yu(e, t)) {
        if (Wi(e)) throw Error(k(418));
        t = ft(n.nextSibling);
        var r = we;
        t && Yu(e, t)
          ? As(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (we = e));
      }
    } else {
      if (Wi(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (we = e);
    }
  }
}
function Xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Pr(e) {
  if (e !== we) return !1;
  if (!A) return Xu(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$i(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (Wi(e)) throw (Bs(), Error(k(418)));
    for (; t; ) As(e, t), (t = ft(t.nextSibling));
  }
  if ((Xu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = we ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Bs() {
  for (var e = xe; e; ) e = ft(e.nextSibling);
}
function sn() {
  (xe = we = null), (A = !1);
}
function Io(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
var Gf = qe.ReactCurrentBatchConfig;
function Pn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gu(e) {
  var t = e._init;
  return t(e._payload);
}
function Vs(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [d]), (f.flags |= 16)) : p.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function l(f, d) {
    return (f = vt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, d, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < d ? ((f.flags |= 2), d) : p)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, d, p, g) {
    return d === null || d.tag !== 6
      ? ((d = fi(p, f.mode, g)), (d.return = f), d)
      : ((d = l(d, p)), (d.return = f), d);
  }
  function s(f, d, p, g) {
    var E = p.type;
    return E === Wt
      ? h(f, d, p.props.children, g, p.key)
      : d !== null &&
        (d.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === nt &&
            Gu(E) === d.type))
      ? ((g = l(d, p.props)), (g.ref = Pn(f, d, p)), (g.return = f), g)
      : ((g = Qr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = Pn(f, d, p)),
        (g.return = f),
        g);
  }
  function c(f, d, p, g) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== p.containerInfo ||
      d.stateNode.implementation !== p.implementation
      ? ((d = pi(p, f.mode, g)), (d.return = f), d)
      : ((d = l(d, p.children || [])), (d.return = f), d);
  }
  function h(f, d, p, g, E) {
    return d === null || d.tag !== 7
      ? ((d = zt(p, f.mode, g, E)), (d.return = f), d)
      : ((d = l(d, p)), (d.return = f), d);
  }
  function m(f, d, p) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = fi("" + d, f.mode, p)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case yr:
          return (
            (p = Qr(d.type, d.key, d.props, null, f.mode, p)),
            (p.ref = Pn(f, null, d)),
            (p.return = f),
            p
          );
        case Vt:
          return (d = pi(d, f.mode, p)), (d.return = f), d;
        case nt:
          var g = d._init;
          return m(f, g(d._payload), p);
      }
      if (zn(d) || kn(d))
        return (d = zt(d, f.mode, p, null)), (d.return = f), d;
      Lr(f, d);
    }
    return null;
  }
  function v(f, d, p, g) {
    var E = d !== null ? d.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return E !== null ? null : a(f, d, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case yr:
          return p.key === E ? s(f, d, p, g) : null;
        case Vt:
          return p.key === E ? c(f, d, p, g) : null;
        case nt:
          return (E = p._init), v(f, d, E(p._payload), g);
      }
      if (zn(p) || kn(p)) return E !== null ? null : h(f, d, p, g, null);
      Lr(f, p);
    }
    return null;
  }
  function w(f, d, p, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), a(d, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case yr:
          return (f = f.get(g.key === null ? p : g.key) || null), s(d, f, g, E);
        case Vt:
          return (f = f.get(g.key === null ? p : g.key) || null), c(d, f, g, E);
        case nt:
          var L = g._init;
          return w(f, d, p, L(g._payload), E);
      }
      if (zn(g) || kn(g)) return (f = f.get(p) || null), h(d, f, g, E, null);
      Lr(d, g);
    }
    return null;
  }
  function x(f, d, p, g) {
    for (
      var E = null, L = null, S = d, C = (d = 0), R = null;
      S !== null && C < p.length;
      C++
    ) {
      S.index > C ? ((R = S), (S = null)) : (R = S.sibling);
      var T = v(f, S, p[C], g);
      if (T === null) {
        S === null && (S = R);
        break;
      }
      e && S && T.alternate === null && t(f, S),
        (d = i(T, d, C)),
        L === null ? (E = T) : (L.sibling = T),
        (L = T),
        (S = R);
    }
    if (C === p.length) return n(f, S), A && Nt(f, C), E;
    if (S === null) {
      for (; C < p.length; C++)
        (S = m(f, p[C], g)),
          S !== null &&
            ((d = i(S, d, C)), L === null ? (E = S) : (L.sibling = S), (L = S));
      return A && Nt(f, C), E;
    }
    for (S = r(f, S); C < p.length; C++)
      (R = w(S, f, C, p[C], g)),
        R !== null &&
          (e && R.alternate !== null && S.delete(R.key === null ? C : R.key),
          (d = i(R, d, C)),
          L === null ? (E = R) : (L.sibling = R),
          (L = R));
    return (
      e &&
        S.forEach(function (ve) {
          return t(f, ve);
        }),
      A && Nt(f, C),
      E
    );
  }
  function j(f, d, p, g) {
    var E = kn(p);
    if (typeof E != "function") throw Error(k(150));
    if (((p = E.call(p)), p == null)) throw Error(k(151));
    for (
      var L = (E = null), S = d, C = (d = 0), R = null, T = p.next();
      S !== null && !T.done;
      C++, T = p.next()
    ) {
      S.index > C ? ((R = S), (S = null)) : (R = S.sibling);
      var ve = v(f, S, T.value, g);
      if (ve === null) {
        S === null && (S = R);
        break;
      }
      e && S && ve.alternate === null && t(f, S),
        (d = i(ve, d, C)),
        L === null ? (E = ve) : (L.sibling = ve),
        (L = ve),
        (S = R);
    }
    if (T.done) return n(f, S), A && Nt(f, C), E;
    if (S === null) {
      for (; !T.done; C++, T = p.next())
        (T = m(f, T.value, g)),
          T !== null &&
            ((d = i(T, d, C)), L === null ? (E = T) : (L.sibling = T), (L = T));
      return A && Nt(f, C), E;
    }
    for (S = r(f, S); !T.done; C++, T = p.next())
      (T = w(S, f, C, T.value, g)),
        T !== null &&
          (e && T.alternate !== null && S.delete(T.key === null ? C : T.key),
          (d = i(T, d, C)),
          L === null ? (E = T) : (L.sibling = T),
          (L = T));
    return (
      e &&
        S.forEach(function (Sn) {
          return t(f, Sn);
        }),
      A && Nt(f, C),
      E
    );
  }
  function N(f, d, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Wt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case yr:
          e: {
            for (var E = p.key, L = d; L !== null; ) {
              if (L.key === E) {
                if (((E = p.type), E === Wt)) {
                  if (L.tag === 7) {
                    n(f, L.sibling),
                      (d = l(L, p.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  L.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === nt &&
                    Gu(E) === L.type)
                ) {
                  n(f, L.sibling),
                    (d = l(L, p.props)),
                    (d.ref = Pn(f, L, p)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, L);
                break;
              } else t(f, L);
              L = L.sibling;
            }
            p.type === Wt
              ? ((d = zt(p.props.children, f.mode, g, p.key)),
                (d.return = f),
                (f = d))
              : ((g = Qr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = Pn(f, d, p)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Vt:
          e: {
            for (L = p.key; d !== null; ) {
              if (d.key === L)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === p.containerInfo &&
                  d.stateNode.implementation === p.implementation
                ) {
                  n(f, d.sibling),
                    (d = l(d, p.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = pi(p, f.mode, g)), (d.return = f), (f = d);
          }
          return o(f);
        case nt:
          return (L = p._init), N(f, d, L(p._payload), g);
      }
      if (zn(p)) return x(f, d, p, g);
      if (kn(p)) return j(f, d, p, g);
      Lr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = l(d, p)), (d.return = f), (f = d))
          : (n(f, d), (d = fi(p, f.mode, g)), (d.return = f), (f = d)),
        o(f))
      : n(f, d);
  }
  return N;
}
var cn = Vs(!0),
  Ws = Vs(!1),
  il = St(null),
  ol = null,
  Zt = null,
  Do = null;
function Uo() {
  Do = Zt = ol = null;
}
function Mo(e) {
  var t = il.current;
  $(il), (e._currentValue = t);
}
function Qi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ln(e, t) {
  (ol = e),
    (Do = Zt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (Do !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zt === null)) {
      if (ol === null) throw Error(k(308));
      (Zt = e), (ol.dependencies = { lanes: 0, firstContext: e });
    } else Zt = Zt.next = e;
  return t;
}
var Lt = null;
function $o(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function Hs(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), $o(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Je(e, r)
  );
}
function Je(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var rt = !1;
function Ao(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qs(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ye(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Je(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), $o(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Je(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n);
  }
}
function Ju(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ul(e, t, n, r) {
  var l = e.updateQueue;
  rt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== o &&
        (a === null ? (h.firstBaseUpdate = c) : (a.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (h = c = s = null), (a = i);
    do {
      var v = a.lane,
        w = a.eventTime;
      if ((r & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            j = a;
          switch (((v = t), (w = n), j.tag)) {
            case 1:
              if (((x = j.payload), typeof x == "function")) {
                m = x.call(w, m, v);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = j.payload),
                (v = typeof x == "function" ? x.call(w, m, v) : x),
                v == null)
              )
                break e;
              m = H({}, m, v);
              break e;
            case 2:
              rt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [a]) : v.push(a));
      } else
        (w = {
          eventTime: w,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((c = h = w), (s = m)) : (h = h.next = w),
          (o |= v);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (v = a),
          (a = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Dt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function Zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var hr = {},
  Ve = St(hr),
  tr = St(hr),
  nr = St(hr);
function Tt(e) {
  if (e === hr) throw Error(k(174));
  return e;
}
function Bo(e, t) {
  switch ((U(nr, t), U(tr, e), U(Ve, hr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ei(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ei(t, e));
  }
  $(Ve), U(Ve, t);
}
function dn() {
  $(Ve), $(tr), $(nr);
}
function Ks(e) {
  Tt(nr.current);
  var t = Tt(Ve.current),
    n = Ei(t, e.type);
  t !== n && (U(tr, e), U(Ve, n));
}
function Vo(e) {
  tr.current === e && ($(Ve), $(tr));
}
var B = St(0);
function al(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var oi = [];
function Wo() {
  for (var e = 0; e < oi.length; e++)
    oi[e]._workInProgressVersionPrimary = null;
  oi.length = 0;
}
var Ar = qe.ReactCurrentDispatcher,
  ui = qe.ReactCurrentBatchConfig,
  It = 0,
  V = null,
  G = null,
  q = null,
  sl = !1,
  An = !1,
  rr = 0,
  Jf = 0;
function re() {
  throw Error(k(321));
}
function Ho(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function Qo(e, t, n, r, l, i) {
  if (
    ((It = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ar.current = e === null || e.memoizedState === null ? ep : tp),
    (e = n(r, l)),
    An)
  ) {
    i = 0;
    do {
      if (((An = !1), (rr = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Ar.current = np),
        (e = n(r, l));
    } while (An);
  }
  if (
    ((Ar.current = cl),
    (t = G !== null && G.next !== null),
    (It = 0),
    (q = G = V = null),
    (sl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ko() {
  var e = rr !== 0;
  return (rr = 0), e;
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (V.memoizedState = q = e) : (q = q.next = e), q;
}
function Le() {
  if (G === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? V.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(k(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (V.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ai(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      s = null,
      c = i;
    do {
      var h = c.lane;
      if ((It & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((a = s = m), (o = r)) : (s = s.next = m),
          (V.lanes |= h),
          (Dt |= h);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = a),
      Ue(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Dt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function si(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ue(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ys() {}
function Xs(e, t) {
  var n = V,
    r = Le(),
    l = t(),
    i = !Ue(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Yo(Zs.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ir(9, Js.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(k(349));
    It & 30 || Gs(n, t, l);
  }
  return l;
}
function Gs(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Js(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), qs(t) && bs(e);
}
function Zs(e, t, n) {
  return n(function () {
    qs(t) && bs(e);
  });
}
function qs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function bs(e) {
  var t = Je(e, 1);
  t !== null && De(t, e, 1, -1);
}
function qu(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bf.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function ir(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ec() {
  return Le().memoizedState;
}
function Br(e, t, n, r) {
  var l = $e();
  (V.flags |= e),
    (l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r));
}
function Nl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((i = o.destroy), r !== null && Ho(r, o.deps))) {
      l.memoizedState = ir(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = ir(1 | t, n, i, r));
}
function bu(e, t) {
  return Br(8390656, 8, e, t);
}
function Yo(e, t) {
  return Nl(2048, 8, e, t);
}
function tc(e, t) {
  return Nl(4, 2, e, t);
}
function nc(e, t) {
  return Nl(4, 4, e, t);
}
function rc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function lc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Nl(4, 4, rc.bind(null, t, e), n)
  );
}
function Xo() {}
function ic(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uc(e, t, n) {
  return It & 21
    ? (Ue(n, t) || ((n = fs()), (V.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function Zf(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ui.transition;
  ui.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (ui.transition = r);
  }
}
function ac() {
  return Le().memoizedState;
}
function qf(e, t, n) {
  var r = mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sc(e))
  )
    cc(t, n);
  else if (((n = Hs(e, t, n, r)), n !== null)) {
    var l = ae();
    De(n, e, r, l), dc(n, t, r);
  }
}
function bf(e, t, n) {
  var r = mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sc(e)) cc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Ue(a, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), $o(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hs(e, t, l, r)),
      n !== null && ((l = ae()), De(n, e, r, l), dc(n, t, r));
  }
}
function sc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function cc(e, t) {
  An = sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n);
  }
}
var cl = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  ep = {
    readContext: Pe,
    useCallback: function (e, t) {
      return ($e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: bu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Br(4194308, 4, rc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Br(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Br(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = qf.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qu,
    useDebugValue: Xo,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = qu(!1),
        t = e[0];
      return (e = Zf.bind(null, e[1])), ($e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = $e();
      if (A) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(k(349));
        It & 30 || Gs(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        bu(Zs.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ir(9, Js.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = b.identifierPrefix;
      if (A) {
        var n = Ke,
          r = Qe;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = rr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Jf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  tp = {
    readContext: Pe,
    useCallback: ic,
    useContext: Pe,
    useEffect: Yo,
    useImperativeHandle: lc,
    useInsertionEffect: tc,
    useLayoutEffect: nc,
    useMemo: oc,
    useReducer: ai,
    useRef: ec,
    useState: function () {
      return ai(lr);
    },
    useDebugValue: Xo,
    useDeferredValue: function (e) {
      var t = Le();
      return uc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ai(lr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ys,
    useSyncExternalStore: Xs,
    useId: ac,
    unstable_isNewReconciler: !1,
  },
  np = {
    readContext: Pe,
    useCallback: ic,
    useContext: Pe,
    useEffect: Yo,
    useImperativeHandle: lc,
    useInsertionEffect: tc,
    useLayoutEffect: nc,
    useMemo: oc,
    useReducer: si,
    useRef: ec,
    useState: function () {
      return si(lr);
    },
    useDebugValue: Xo,
    useDeferredValue: function (e) {
      var t = Le();
      return G === null ? (t.memoizedState = e) : uc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = si(lr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ys,
    useSyncExternalStore: Xs,
    useId: ac,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ki(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $t(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = mt(e),
      i = Ye(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = pt(e, i, l)),
      t !== null && (De(t, e, l, r), $r(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = mt(e),
      i = Ye(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = pt(e, i, l)),
      t !== null && (De(t, e, l, r), $r(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = mt(e),
      l = Ye(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = pt(e, l, r)),
      t !== null && (De(t, e, r, n), $r(t, e, r));
  },
};
function ea(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Zn(n, r) || !Zn(l, i)
      : !0
  );
}
function fc(e, t, n) {
  var r = !1,
    l = xt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pe(i))
      : ((l = he(t) ? Ot : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? an(e, l) : xt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ta(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _l.enqueueReplaceState(t, t.state, null);
}
function Yi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ao(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Pe(i))
    : ((i = he(t) ? Ot : oe.current), (l.context = an(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ki(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && _l.enqueueReplaceState(l, l.state, null),
      ul(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function fn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ld(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ci(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var rp = typeof WeakMap == "function" ? WeakMap : Map;
function pc(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fl || ((fl = !0), (lo = r)), Xi(e, t);
    }),
    n
  );
}
function hc(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Xi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Xi(e, t),
          typeof r != "function" &&
            (ht === null ? (ht = new Set([this])) : ht.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function na(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = gp.bind(null, e, t, n)), t.then(e, e));
}
function ra(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function la(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ye(-1, 1)), (t.tag = 2), pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var lp = qe.ReactCurrentOwner,
  fe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Ws(t, null, n, r) : cn(t, e.child, n, r);
}
function ia(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    ln(t, l),
    (r = Qo(e, t, n, r, i, l)),
    (n = Ko()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (A && n && Oo(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function oa(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !nu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), mc(e, t, i, r, l))
      : ((e = Qr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zn), n(o, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = vt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function mc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Zn(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return Gi(e, t, n, r, l);
}
function vc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(bt, ye),
        (ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(bt, ye),
          (ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        U(bt, ye),
        (ye |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(bt, ye),
      (ye |= r);
  return ue(e, t, l, n), t.child;
}
function gc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Gi(e, t, n, r, l) {
  var i = he(n) ? Ot : oe.current;
  return (
    (i = an(t, i)),
    ln(t, l),
    (n = Qo(e, t, n, r, i, l)),
    (r = Ko()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (A && r && Oo(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function ua(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    nl(t);
  } else i = !1;
  if ((ln(t, l), t.stateNode === null))
    Vr(e, t), fc(t, n, r), Yi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Pe(c))
      : ((c = he(n) ? Ot : oe.current), (c = an(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || s !== c) && ta(t, o, r, c)),
      (rt = !1);
    var v = t.memoizedState;
    (o.state = v),
      ul(t, r, o, l),
      (s = t.memoizedState),
      a !== r || v !== s || pe.current || rt
        ? (typeof h == "function" && (Ki(t, n, h, r), (s = t.memoizedState)),
          (a = rt || ea(t, n, a, r, v, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Qs(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : ze(t.type, a)),
      (o.props = c),
      (m = t.pendingProps),
      (v = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Pe(s))
        : ((s = he(n) ? Ot : oe.current), (s = an(t, s)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== m || v !== s) && ta(t, o, r, s)),
      (rt = !1),
      (v = t.memoizedState),
      (o.state = v),
      ul(t, r, o, l);
    var x = t.memoizedState;
    a !== m || v !== x || pe.current || rt
      ? (typeof w == "function" && (Ki(t, n, w, r), (x = t.memoizedState)),
        (c = rt || ea(t, n, c, r, v, x, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ji(e, t, n, r, i, l);
}
function Ji(e, t, n, r, l, i) {
  gc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Ku(t, n, !1), Ze(e, t, i);
  (r = t.stateNode), (lp.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = cn(t, e.child, null, i)), (t.child = cn(t, null, a, i)))
      : ue(e, t, a, i),
    (t.memoizedState = r.state),
    l && Ku(t, n, !0),
    t.child
  );
}
function yc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qu(e, t.context, !1),
    Bo(e, t.containerInfo);
}
function aa(e, t, n, r, l) {
  return sn(), Io(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Zi = { dehydrated: null, treeContext: null, retryLane: 0 };
function qi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(B, l & 1),
    e === null)
  )
    return (
      Hi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Tl(o, r, 0, null)),
              (e = zt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = qi(n)),
              (t.memoizedState = Zi),
              e)
            : Go(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return ip(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = vt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = vt(a, i)) : ((i = zt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? qi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Go(e, t) {
  return (
    (t = Tl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tr(e, t, n, r) {
  return (
    r !== null && Io(r),
    cn(t, e.child, null, n),
    (e = Go(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ip(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ci(Error(k(422)))), Tr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Tl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = zt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && cn(t, e.child, null, o),
        (t.child.memoizedState = qi(o)),
        (t.memoizedState = Zi),
        i);
  if (!(t.mode & 1)) return Tr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(k(419))), (r = ci(i, r, void 0)), Tr(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), fe || a)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Je(e, l), De(r, e, l, -1));
    }
    return tu(), (r = ci(Error(k(421)))), Tr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (xe = ft(l.nextSibling)),
      (we = t),
      (A = !0),
      (Fe = null),
      e !== null &&
        ((Ce[Ee++] = Qe),
        (Ce[Ee++] = Ke),
        (Ce[Ee++] = Ft),
        (Qe = e.id),
        (Ke = e.overflow),
        (Ft = t)),
      (t = Go(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qi(e.return, t, n);
}
function di(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function wc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sa(e, n, t);
        else if (e.tag === 19) sa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && al(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          di(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && al(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        di(t, !0, n, null, i);
        break;
      case "together":
        di(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function op(e, t, n) {
  switch (t.tag) {
    case 3:
      yc(t), sn();
      break;
    case 5:
      Ks(t);
      break;
    case 1:
      he(t.type) && nl(t);
      break;
    case 4:
      Bo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(il, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xc(e, t, n)
          : (U(B, B.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null);
      U(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vc(e, t, n);
  }
  return Ze(e, t, n);
}
var Sc, bi, jc, kc;
Sc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
bi = function () {};
jc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Tt(Ve.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Si(e, l)), (r = Si(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Ci(e, l)), (r = Ci(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = el);
    }
    Ni(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Hn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== a && (s != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                a[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Hn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && M("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
kc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ln(e, t) {
  if (!A)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function up(e, t, n) {
  var r = t.pendingProps;
  switch ((Fo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && tl(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dn(),
        $(pe),
        $(oe),
        Wo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Fe !== null && (uo(Fe), (Fe = null)))),
        bi(e, t),
        le(t),
        null
      );
    case 5:
      Vo(t);
      var l = Tt(nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        jc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return le(t), null;
        }
        if (((e = Tt(Ve.current)), Pr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ae] = t), (r[er] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Fn.length; l++) M(Fn[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              yu(r, i), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              wu(r, i), M("invalid", r);
          }
          Ni(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Hn.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              xr(r), xu(r, i, !0);
              break;
            case "textarea":
              xr(r), Su(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = el);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Za(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ae] = t),
            (e[er] = r),
            Sc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = _i(n, r)), n)) {
              case "dialog":
                M("cancel", e), M("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fn.length; l++) M(Fn[l], e);
                l = r;
                break;
              case "source":
                M("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (l = r);
                break;
              case "details":
                M("toggle", e), (l = r);
                break;
              case "input":
                yu(e, r), (l = Si(e, r)), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                wu(e, r), (l = Ci(e, r)), M("invalid", e);
                break;
              default:
                l = r;
            }
            Ni(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? es(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && qa(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Qn(e, s)
                    : typeof s == "number" && Qn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Hn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && M("scroll", e)
                      : s != null && xo(e, i, s, o));
              }
            switch (n) {
              case "input":
                xr(e), xu(e, r, !1);
                break;
              case "textarea":
                xr(e), Su(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? en(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      en(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = el);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) kc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Tt(nr.current)), Tt(Ve.current), Pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ae] = t),
            (i = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                _r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ae] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        ($(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && xe !== null && t.mode & 1 && !(t.flags & 128))
          Bs(), sn(), (t.flags |= 98560), (i = !1);
        else if (((i = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[Ae] = t;
          } else
            sn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Fe !== null && (uo(Fe), (Fe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? J === 0 && (J = 3) : tu())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        dn(), bi(e, t), e === null && qn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Mo(t.type._context), le(t), null;
    case 17:
      return he(t.type) && tl(), le(t), null;
    case 19:
      if (($(B), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Ln(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = al(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ln(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > pn &&
            ((t.flags |= 128), (r = !0), Ln(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = al(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ln(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !A)
            )
              return le(t), null;
          } else
            2 * Y() - i.renderingStartTime > pn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ln(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = B.current),
          U(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ye & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function ap(e, t) {
  switch ((Fo(t), t.tag)) {
    case 1:
      return (
        he(t.type) && tl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dn(),
        $(pe),
        $(oe),
        Wo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vo(t), null;
    case 13:
      if (($(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        sn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(B), null;
    case 4:
      return dn(), null;
    case 10:
      return Mo(t.type._context), null;
    case 22:
    case 23:
      return eu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  ie = !1,
  sp = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function eo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var ca = !1;
function cp(e, t) {
  if (((Ui = Zr), (e = Ps()), zo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            v = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (a = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (v = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (v === n && ++c === l && (a = o),
                v === i && ++h === r && (s = o),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = w;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Mi = { focusedElem: e, selectionRange: n }, Zr = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var j = x.memoizedProps,
                    N = x.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? j : ze(t.type, j),
                      N
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (g) {
          Q(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (x = ca), (ca = !1), x;
}
function Bn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && eo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function to(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ae], delete t[er], delete t[Bi], delete t[Kf], delete t[Yf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ec(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function da(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ec(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function no(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = el));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (no(e, t, n), e = e.sibling; e !== null; ) no(e, t, n), (e = e.sibling);
}
function ro(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ro(e, t, n), e = e.sibling; e !== null; ) ro(e, t, n), (e = e.sibling);
}
var ee = null,
  Oe = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) Nc(e, t, n), (n = n.sibling);
}
function Nc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || qt(n, t);
    case 6:
      var r = ee,
        l = Oe;
      (ee = null),
        tt(e, t, n),
        (ee = r),
        (Oe = l),
        ee !== null &&
          (Oe
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Oe
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? li(e.parentNode, n)
              : e.nodeType === 1 && li(e, n),
            Gn(e))
          : li(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Oe),
        (ee = n.stateNode.containerInfo),
        (Oe = !0),
        tt(e, t, n),
        (ee = r),
        (Oe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && eo(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Q(n, t, a);
        }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), tt(e, t, n), (ie = r))
        : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function fa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sp()),
      t.forEach(function (r) {
        var l = xp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ee = a.stateNode), (Oe = !1);
              break e;
            case 3:
              (ee = a.stateNode.containerInfo), (Oe = !0);
              break e;
            case 4:
              (ee = a.stateNode.containerInfo), (Oe = !0);
              break e;
          }
          a = a.return;
        }
        if (ee === null) throw Error(k(160));
        Nc(i, o, l), (ee = null), (Oe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        Q(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _c(t, e), (t = t.sibling);
}
function _c(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), Me(e), r & 4)) {
        try {
          Bn(3, e, e.return), Pl(3, e);
        } catch (j) {
          Q(e, e.return, j);
        }
        try {
          Bn(5, e, e.return);
        } catch (j) {
          Q(e, e.return, j);
        }
      }
      break;
    case 1:
      Te(t, e), Me(e), r & 512 && n !== null && qt(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        Me(e),
        r & 512 && n !== null && qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (j) {
          Q(e, e.return, j);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Ga(l, i),
              _i(a, o);
            var c = _i(a, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1];
              h === "style"
                ? es(l, m)
                : h === "dangerouslySetInnerHTML"
                ? qa(l, m)
                : h === "children"
                ? Qn(l, m)
                : xo(l, h, m, c);
            }
            switch (a) {
              case "input":
                ji(l, i);
                break;
              case "textarea":
                Ja(l, i);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? en(l, !!i.multiple, w, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? en(l, !!i.multiple, i.defaultValue, !0)
                      : en(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[er] = i;
          } catch (j) {
            Q(e, e.return, j);
          }
      }
      break;
    case 6:
      if ((Te(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (j) {
          Q(e, e.return, j);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gn(t.containerInfo);
        } catch (j) {
          Q(e, e.return, j);
        }
      break;
    case 4:
      Te(t, e), Me(e);
      break;
    case 13:
      Te(t, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qo = Y())),
        r & 4 && fa(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || h), Te(t, e), (ie = c)) : Te(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (m = _ = h; _ !== null; ) {
              switch (((v = _), (w = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bn(4, v, v.return);
                  break;
                case 1:
                  qt(v, v.return);
                  var x = v.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (j) {
                      Q(r, n, j);
                    }
                  }
                  break;
                case 5:
                  qt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ha(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = v), (_ = w)) : ha(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = ba("display", o)));
              } catch (j) {
                Q(e, e.return, j);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (j) {
                Q(e, e.return, j);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), Me(e), r & 4 && fa(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ec(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ""), (r.flags &= -33));
          var i = da(e);
          ro(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = da(e);
          no(e, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dp(e, t, n) {
  (_ = e), Pc(e);
}
function Pc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Rr;
      if (!o) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || ie;
        a = Rr;
        var c = ie;
        if (((Rr = o), (ie = s) && !c))
          for (_ = l; _ !== null; )
            (o = _),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ma(l)
                : s !== null
                ? ((s.return = o), (_ = s))
                : ma(l);
        for (; i !== null; ) (_ = i), Pc(i), (i = i.sibling);
        (_ = l), (Rr = a), (ie = c);
      }
      pa(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : pa(e);
  }
}
function pa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Zu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zu(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Gn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ie || (t.flags & 512 && to(t));
      } catch (v) {
        Q(t, t.return, v);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ha(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ma(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var i = t.return;
          try {
            to(t);
          } catch (s) {
            Q(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            to(t);
          } catch (s) {
            Q(t, o, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (_ = a);
      break;
    }
    _ = t.return;
  }
}
var fp = Math.ceil,
  dl = qe.ReactCurrentDispatcher,
  Jo = qe.ReactCurrentOwner,
  _e = qe.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  X = null,
  te = 0,
  ye = 0,
  bt = St(0),
  J = 0,
  or = null,
  Dt = 0,
  Ll = 0,
  Zo = 0,
  Vn = null,
  de = null,
  qo = 0,
  pn = 1 / 0,
  We = null,
  fl = !1,
  lo = null,
  ht = null,
  zr = !1,
  ut = null,
  pl = 0,
  Wn = 0,
  io = null,
  Wr = -1,
  Hr = 0;
function ae() {
  return I & 6 ? Y() : Wr !== -1 ? Wr : (Wr = Y());
}
function mt(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Gf.transition !== null
      ? (Hr === 0 && (Hr = fs()), Hr)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xs(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Wn) throw ((Wn = 0), (io = null), Error(k(185)));
  dr(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (Ll |= n), J === 4 && it(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((pn = Y() + 500), El && jt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Xd(e, t);
  var r = Jr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && Cu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cu(n), t === 1))
      e.tag === 0 ? Xf(va.bind(null, e)) : Ms(va.bind(null, e)),
        Hf(function () {
          !(I & 6) && jt();
        }),
        (n = null);
    else {
      switch (ps(r)) {
        case 1:
          n = Co;
          break;
        case 4:
          n = cs;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = ds;
          break;
        default:
          n = Gr;
      }
      n = Dc(n, Lc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lc(e, t) {
  if (((Wr = -1), (Hr = 0), I & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (on() && e.callbackNode !== n) return null;
  var r = Jr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = Rc();
    (b !== e || te !== t) && ((We = null), (pn = Y() + 500), Rt(e, t));
    do
      try {
        mp();
        break;
      } catch (a) {
        Tc(e, a);
      }
    while (!0);
    Uo(),
      (dl.current = i),
      (I = l),
      X !== null ? (t = 0) : ((b = null), (te = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = zi(e)), l !== 0 && ((r = l), (t = oo(e, l)))), t === 1)
    )
      throw ((n = or), Rt(e, 0), it(e, r), me(e, Y()), n);
    if (t === 6) it(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !pp(l) &&
          ((t = hl(e, r)),
          t === 2 && ((i = zi(e)), i !== 0 && ((r = i), (t = oo(e, i)))),
          t === 1))
      )
        throw ((n = or), Rt(e, 0), it(e, r), me(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          _t(e, de, We);
          break;
        case 3:
          if (
            (it(e, r), (r & 130023424) === r && ((t = qo + 500 - Y()), 10 < t))
          ) {
            if (Jr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ai(_t.bind(null, e, de, We), t);
            break;
          }
          _t(e, de, We);
          break;
        case 4:
          if ((it(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ie(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * fp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ai(_t.bind(null, e, de, We), r);
            break;
          }
          _t(e, de, We);
          break;
        case 5:
          _t(e, de, We);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return me(e, Y()), e.callbackNode === n ? Lc.bind(null, e) : null;
}
function oo(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = hl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && uo(t)),
    e
  );
}
function uo(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function pp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function it(e, t) {
  for (
    t &= ~Zo,
      t &= ~Ll,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function va(e) {
  if (I & 6) throw Error(k(327));
  on();
  var t = Jr(e, 0);
  if (!(t & 1)) return me(e, Y()), null;
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zi(e);
    r !== 0 && ((t = r), (n = oo(e, r)));
  }
  if (n === 1) throw ((n = or), Rt(e, 0), it(e, t), me(e, Y()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _t(e, de, We),
    me(e, Y()),
    null
  );
}
function bo(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((pn = Y() + 500), El && jt());
  }
}
function Ut(e) {
  ut !== null && ut.tag === 0 && !(I & 6) && on();
  var t = I;
  I |= 1;
  var n = _e.transition,
    r = D;
  try {
    if (((_e.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (_e.transition = n), (I = t), !(I & 6) && jt();
  }
}
function eu() {
  (ye = bt.current), $(bt);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wf(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Fo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && tl();
          break;
        case 3:
          dn(), $(pe), $(oe), Wo();
          break;
        case 5:
          Vo(r);
          break;
        case 4:
          dn();
          break;
        case 13:
          $(B);
          break;
        case 19:
          $(B);
          break;
        case 10:
          Mo(r.type._context);
          break;
        case 22:
        case 23:
          eu();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (X = e = vt(e.current, null)),
    (te = ye = t),
    (J = 0),
    (or = null),
    (Zo = Ll = Dt = 0),
    (de = Vn = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function Tc(e, t) {
  do {
    var n = X;
    try {
      if ((Uo(), (Ar.current = cl), sl)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        sl = !1;
      }
      if (
        ((It = 0),
        (q = G = V = null),
        (An = !1),
        (rr = 0),
        (Jo.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (or = t), (X = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          s = t;
        if (
          ((t = te),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = a,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = ra(o);
          if (w !== null) {
            (w.flags &= -257),
              la(w, o, a, i, t),
              w.mode & 1 && na(i, c, t),
              (t = w),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var j = new Set();
              j.add(s), (t.updateQueue = j);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              na(i, c, t), tu();
              break e;
            }
            s = Error(k(426));
          }
        } else if (A && a.mode & 1) {
          var N = ra(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              la(N, o, a, i, t),
              Io(fn(s, a));
            break e;
          }
        }
        (i = s = fn(s, a)),
          J !== 4 && (J = 2),
          Vn === null ? (Vn = [i]) : Vn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = pc(i, s, t);
              Ju(i, f);
              break e;
            case 1:
              a = s;
              var d = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ht === null || !ht.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = hc(i, a, t);
                Ju(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Oc(n);
    } catch (E) {
      (t = E), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rc() {
  var e = dl.current;
  return (dl.current = cl), e === null ? cl : e;
}
function tu() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    b === null || (!(Dt & 268435455) && !(Ll & 268435455)) || it(b, te);
}
function hl(e, t) {
  var n = I;
  I |= 2;
  var r = Rc();
  (b !== e || te !== t) && ((We = null), Rt(e, t));
  do
    try {
      hp();
      break;
    } catch (l) {
      Tc(e, l);
    }
  while (!0);
  if ((Uo(), (I = n), (dl.current = r), X !== null)) throw Error(k(261));
  return (b = null), (te = 0), J;
}
function hp() {
  for (; X !== null; ) zc(X);
}
function mp() {
  for (; X !== null && !$d(); ) zc(X);
}
function zc(e) {
  var t = Ic(e.alternate, e, ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? Oc(e) : (X = t),
    (Jo.current = null);
}
function Oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ap(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (X = null);
        return;
      }
    } else if (((n = up(n, t, ye)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function _t(e, t, n) {
  var r = D,
    l = _e.transition;
  try {
    (_e.transition = null), (D = 1), vp(e, t, n, r);
  } finally {
    (_e.transition = l), (D = r);
  }
  return null;
}
function vp(e, t, n, r) {
  do on();
  while (ut !== null);
  if (I & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Gd(e, i),
    e === b && ((X = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      Dc(Gr, function () {
        return on(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = D;
    D = 1;
    var a = I;
    (I |= 4),
      (Jo.current = null),
      cp(e, n),
      _c(n, e),
      Df(Mi),
      (Zr = !!Ui),
      (Mi = Ui = null),
      (e.current = n),
      dp(n),
      Ad(),
      (I = a),
      (D = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (zr && ((zr = !1), (ut = e), (pl = l)),
    (i = e.pendingLanes),
    i === 0 && (ht = null),
    Wd(n.stateNode),
    me(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw ((fl = !1), (e = lo), (lo = null), e);
  return (
    pl & 1 && e.tag !== 0 && on(),
    (i = e.pendingLanes),
    i & 1 ? (e === io ? Wn++ : ((Wn = 0), (io = e))) : (Wn = 0),
    jt(),
    null
  );
}
function on() {
  if (ut !== null) {
    var e = ps(pl),
      t = _e.transition,
      n = D;
    try {
      if (((_e.transition = null), (D = 16 > e ? 16 : e), ut === null))
        var r = !1;
      else {
        if (((e = ut), (ut = null), (pl = 0), I & 6)) throw Error(k(331));
        var l = I;
        for (I |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            o = i.child;
          if (_.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (_ = c; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (_ = m);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var v = h.sibling,
                        w = h.return;
                      if ((Cc(h), h === c)) {
                        _ = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = w), (_ = v);
                        break;
                      }
                      _ = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var j = x.child;
                if (j !== null) {
                  x.child = null;
                  do {
                    var N = j.sibling;
                    (j.sibling = null), (j = N);
                  } while (j !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (_ = o);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (_ = f);
                break e;
              }
              _ = i.return;
            }
        }
        var d = e.current;
        for (_ = d; _ !== null; ) {
          o = _;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (_ = p);
          else
            e: for (o = d; _ !== null; ) {
              if (((a = _), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(9, a);
                  }
                } catch (E) {
                  Q(a, a.return, E);
                }
              if (a === o) {
                _ = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (_ = g);
                break e;
              }
              _ = a.return;
            }
        }
        if (
          ((I = l), jt(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (_e.transition = t);
    }
  }
  return !1;
}
function ga(e, t, n) {
  (t = fn(n, t)),
    (t = pc(e, t, 1)),
    (e = pt(e, t, 1)),
    (t = ae()),
    e !== null && (dr(e, 1, t), me(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) ga(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ga(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ht === null || !ht.has(r)))
        ) {
          (e = fn(n, e)),
            (e = hc(t, e, 1)),
            (t = pt(t, e, 1)),
            (e = ae()),
            t !== null && (dr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (J === 4 || (J === 3 && (te & 130023424) === te && 500 > Y() - qo)
        ? Rt(e, 0)
        : (Zo |= n)),
    me(e, t);
}
function Fc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
      : (t = 1));
  var n = ae();
  (e = Je(e, t)), e !== null && (dr(e, t, n), me(e, n));
}
function yp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fc(e, n);
}
function xp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Fc(e, n);
}
var Ic;
Ic = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), op(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), A && t.flags & 1048576 && $s(t, ll, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vr(e, t), (e = t.pendingProps);
      var l = an(t, oe.current);
      ln(t, n), (l = Qo(null, t, r, e, l, n));
      var i = Ko();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), nl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ao(t),
            (l.updater = _l),
            (t.stateNode = l),
            (l._reactInternals = t),
            Yi(t, r, e, n),
            (t = Ji(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && Oo(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Sp(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Gi(null, t, r, e, n);
            break e;
          case 1:
            t = ua(null, t, r, e, n);
            break e;
          case 11:
            t = ia(null, t, r, e, n);
            break e;
          case 14:
            t = oa(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Gi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        ua(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((yc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Qs(e, t),
          ul(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = fn(Error(k(423)), t)), (t = aa(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = fn(Error(k(424)), t)), (t = aa(e, t, r, n, l));
            break e;
          } else
            for (
              xe = ft(t.stateNode.containerInfo.firstChild),
                we = t,
                A = !0,
                Fe = null,
                n = Ws(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((sn(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ks(t),
        e === null && Hi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        $i(r, l) ? (o = null) : i !== null && $i(r, i) && (t.flags |= 32),
        gc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Hi(t), null;
    case 13:
      return xc(e, t, n);
    case 4:
      return (
        Bo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        ia(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          U(il, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ue(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ye(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Qi(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Qi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ln(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        oa(e, t, r, l, n)
      );
    case 15:
      return mc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Vr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), nl(t)) : (e = !1),
        ln(t, n),
        fc(t, r, l),
        Yi(t, r, l, n),
        Ji(null, t, r, !0, e, n)
      );
    case 19:
      return wc(e, t, n);
    case 22:
      return vc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Dc(e, t) {
  return ss(e, t);
}
function wp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ne(e, t, n, r) {
  return new wp(e, t, n, r);
}
function nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sp(e) {
  if (typeof e == "function") return nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === So)) return 11;
    if (e === jo) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) nu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Wt:
        return zt(n.children, l, i, t);
      case wo:
        (o = 8), (l |= 8);
        break;
      case gi:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = gi), (e.lanes = i), e
        );
      case yi:
        return (e = Ne(13, n, t, l)), (e.elementType = yi), (e.lanes = i), e;
      case xi:
        return (e = Ne(19, n, t, l)), (e.elementType = xi), (e.lanes = i), e;
      case Ka:
        return Tl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ha:
              o = 10;
              break e;
            case Qa:
              o = 9;
              break e;
            case So:
              o = 11;
              break e;
            case jo:
              o = 14;
              break e;
            case nt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function zt(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function Tl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = Ka),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fi(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function pi(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yl(0)),
    (this.expirationTimes = Yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ru(e, t, n, r, l, i, o, a, s) {
  return (
    (e = new jp(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ne(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ao(i),
    e
  );
}
function kp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Uc(e) {
  if (!e) return xt;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Us(e, n, t);
  }
  return t;
}
function Mc(e, t, n, r, l, i, o, a, s) {
  return (
    (e = ru(n, r, !0, e, l, i, o, a, s)),
    (e.context = Uc(null)),
    (n = e.current),
    (r = ae()),
    (l = mt(n)),
    (i = Ye(r, l)),
    (i.callback = t ?? null),
    pt(n, i, l),
    (e.current.lanes = l),
    dr(e, l, r),
    me(e, r),
    e
  );
}
function Rl(e, t, n, r) {
  var l = t.current,
    i = ae(),
    o = mt(l);
  return (
    (n = Uc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ye(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pt(l, t, o)),
    e !== null && (De(e, l, o, i), $r(e, l, o)),
    o
  );
}
function ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ya(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lu(e, t) {
  ya(e, t), (e = e.alternate) && ya(e, t);
}
function Cp() {
  return null;
}
var $c =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function iu(e) {
  this._internalRoot = e;
}
zl.prototype.render = iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Rl(e, t, null, null);
};
zl.prototype.unmount = iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      Rl(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++);
    lt.splice(n, 0, e), n === 0 && ys(e);
  }
};
function ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xa() {}
function Ep(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = ml(o);
        i.call(c);
      };
    }
    var o = Mc(t, r, e, 0, null, !1, !1, "", xa);
    return (
      (e._reactRootContainer = o),
      (e[Ge] = o.current),
      qn(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = ml(s);
      a.call(c);
    };
  }
  var s = ru(e, 0, !1, null, null, !1, !1, "", xa);
  return (
    (e._reactRootContainer = s),
    (e[Ge] = s.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      Rl(t, s, n, r);
    }),
    s
  );
}
function Fl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var s = ml(o);
        a.call(s);
      };
    }
    Rl(t, o, e, l);
  } else o = Ep(n, t, e, l, r);
  return ml(o);
}
hs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = On(t.pendingLanes);
        n !== 0 &&
          (Eo(t, n | 1), me(t, Y()), !(I & 6) && ((pn = Y() + 500), jt()));
      }
      break;
    case 13:
      Ut(function () {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ae();
          De(r, e, 1, l);
        }
      }),
        lu(e, 1);
  }
};
No = function (e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = ae();
      De(t, e, 134217728, n);
    }
    lu(e, 134217728);
  }
};
ms = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = Je(e, t);
    if (n !== null) {
      var r = ae();
      De(n, e, t, r);
    }
    lu(e, t);
  }
};
vs = function () {
  return D;
};
gs = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Li = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ji(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Cl(r);
            if (!l) throw Error(k(90));
            Xa(r), ji(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ja(e, n);
      break;
    case "select":
      (t = n.value), t != null && en(e, !!n.multiple, t, !1);
  }
};
rs = bo;
ls = Ut;
var Np = { usingClientEntryPoint: !1, Events: [pr, Yt, Cl, ts, ns, bo] },
  Tn = {
    findFiberByHostInstance: Pt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _p = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = us(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || Cp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Or.isDisabled && Or.supportsFiber)
    try {
      (wl = Or.inject(_p)), (Be = Or);
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Np;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ou(t)) throw Error(k(200));
  return kp(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!ou(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = $c;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ru(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    new iu(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = us(t)), (e = e === null ? null : e.stateNode), e;
};
je.flushSync = function (e) {
  return Ut(e);
};
je.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(k(200));
  return Fl(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!ou(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = $c;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Mc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ge] = t.current),
    qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new zl(t);
};
je.render = function (e, t, n) {
  if (!Ol(t)) throw Error(k(200));
  return Fl(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Fl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = bo;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Fl(e, t, n, !1, r);
};
je.version = "18.3.1-next-f1338f8080-20240426";
function Ac() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ac);
    } catch (e) {
      console.error(e);
    }
}
Ac(), (Aa.exports = je);
var Pp = Aa.exports,
  wa = Pp;
(mi.createRoot = wa.createRoot), (mi.hydrateRoot = wa.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ur() {
  return (
    (ur = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ur.apply(this, arguments)
  );
}
var at;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(at || (at = {}));
const Sa = "popstate";
function Lp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return ao(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : vl(l);
  }
  return Rp(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Bc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Tp() {
  return Math.random().toString(36).substr(2, 8);
}
function ja(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ao(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ur(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? yn(t) : t,
      { state: n, key: (t && t.key) || r || Tp() }
    )
  );
}
function vl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Rp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = at.Pop,
    s = null,
    c = h();
  c == null && ((c = 0), o.replaceState(ur({}, o.state, { idx: c }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function m() {
    a = at.Pop;
    let N = h(),
      f = N == null ? null : N - c;
    (c = N), s && s({ action: a, location: j.location, delta: f });
  }
  function v(N, f) {
    a = at.Push;
    let d = ao(j.location, N, f);
    c = h() + 1;
    let p = ja(d, c),
      g = j.createHref(d);
    try {
      o.pushState(p, "", g);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(g);
    }
    i && s && s({ action: a, location: j.location, delta: 1 });
  }
  function w(N, f) {
    a = at.Replace;
    let d = ao(j.location, N, f);
    c = h();
    let p = ja(d, c),
      g = j.createHref(d);
    o.replaceState(p, "", g),
      i && s && s({ action: a, location: j.location, delta: 0 });
  }
  function x(N) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof N == "string" ? N : vl(N);
    return (
      (d = d.replace(/ $/, "%20")),
      W(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, f)
    );
  }
  let j = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(N) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Sa, m),
        (s = N),
        () => {
          l.removeEventListener(Sa, m), (s = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: x,
    encodeLocation(N) {
      let f = x(N);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: v,
    replace: w,
    go(N) {
      return o.go(N);
    },
  };
  return j;
}
var ka;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ka || (ka = {}));
function zp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? yn(t) : t,
    l = hn(r.pathname || "/", n);
  if (l == null) return null;
  let i = Vc(e);
  Op(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) {
    let s = Hp(l);
    o = Vp(i[a], s);
  }
  return o;
}
function Vc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (W(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = gt([r, s.relativePath]),
      h = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (W(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Vc(i.children, t, h, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: Ap(c, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let s of Wc(i.path)) l(i, o, s);
    }),
    t
  );
}
function Wc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Wc(r.join("/")),
    a = [];
  return (
    a.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && a.push(...o),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Op(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Bp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Fp = /^:[\w-]+$/,
  Ip = 3,
  Dp = 2,
  Up = 1,
  Mp = 10,
  $p = -2,
  Ca = (e) => e === "*";
function Ap(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ca) && (r += $p),
    t && (r += Dp),
    n
      .filter((l) => !Ca(l))
      .reduce((l, i) => l + (Fp.test(i) ? Ip : i === "" ? Up : Mp), r)
  );
}
function Bp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Vp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      s = o === n.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      h = so(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        c
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let m = a.route;
    i.push({
      params: r,
      pathname: gt([l, h.pathname]),
      pathnameBase: Xp(gt([l, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== "/" && (l = gt([l, h.pathnameBase]));
  }
  return i;
}
function so(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Wp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((c, h, m) => {
      let { paramName: v, isOptional: w } = h;
      if (v === "*") {
        let j = a[m] || "";
        o = i.slice(0, i.length - j.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[m];
      return (
        w && !x ? (c[v] = void 0) : (c[v] = (x || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Wp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Bc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Hp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Bc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function hn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Qp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? yn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Kp(n, t)) : t,
    search: Gp(r),
    hash: Jp(l),
  };
}
function Kp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function hi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Yp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function uu(e, t) {
  let n = Yp(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function au(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = yn(e))
    : ((l = ur({}, e)),
      W(
        !l.pathname || !l.pathname.includes("?"),
        hi("?", "pathname", "search", l)
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        hi("#", "pathname", "hash", l)
      ),
      W(!l.search || !l.search.includes("#"), hi("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let m = t.length - 1;
    if (!r && o.startsWith("..")) {
      let v = o.split("/");
      for (; v[0] === ".."; ) v.shift(), (m -= 1);
      l.pathname = v.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let s = Qp(l, a),
    c = o && o !== "/" && o.endsWith("/"),
    h = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (c || h) && (s.pathname += "/"), s;
}
const gt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Xp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Gp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Jp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Zp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Hc = ["post", "put", "patch", "delete"];
new Set(Hc);
const qp = ["get", ...Hc];
new Set(qp);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ar() {
  return (
    (ar = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ar.apply(this, arguments)
  );
}
const Il = y.createContext(null),
  Qc = y.createContext(null),
  be = y.createContext(null),
  Dl = y.createContext(null),
  et = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Kc = y.createContext(null);
function bp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  xn() || W(!1);
  let { basename: r, navigator: l } = y.useContext(be),
    { hash: i, pathname: o, search: a } = Ml(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : gt([r, o])),
    l.createHref({ pathname: s, search: a, hash: i })
  );
}
function xn() {
  return y.useContext(Dl) != null;
}
function At() {
  return xn() || W(!1), y.useContext(Dl).location;
}
function Yc(e) {
  y.useContext(be).static || y.useLayoutEffect(e);
}
function kt() {
  let { isDataRoute: e } = y.useContext(et);
  return e ? fh() : eh();
}
function eh() {
  xn() || W(!1);
  let e = y.useContext(Il),
    { basename: t, future: n, navigator: r } = y.useContext(be),
    { matches: l } = y.useContext(et),
    { pathname: i } = At(),
    o = JSON.stringify(uu(l, n.v7_relativeSplatPath)),
    a = y.useRef(!1);
  return (
    Yc(() => {
      a.current = !0;
    }),
    y.useCallback(
      function (c, h) {
        if ((h === void 0 && (h = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let m = au(c, JSON.parse(o), i, h.relative === "path");
        e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : gt([t, m.pathname])),
          (h.replace ? r.replace : r.push)(m, h.state, h);
      },
      [t, r, o, i, e]
    )
  );
}
function Ul() {
  let { matches: e } = y.useContext(et),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Ml(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(be),
    { matches: l } = y.useContext(et),
    { pathname: i } = At(),
    o = JSON.stringify(uu(l, r.v7_relativeSplatPath));
  return y.useMemo(() => au(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function th(e, t) {
  return nh(e, t);
}
function nh(e, t, n, r) {
  xn() || W(!1);
  let { navigator: l } = y.useContext(be),
    { matches: i } = y.useContext(et),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let c = At(),
    h;
  if (t) {
    var m;
    let N = typeof t == "string" ? yn(t) : t;
    s === "/" || ((m = N.pathname) != null && m.startsWith(s)) || W(!1),
      (h = N);
  } else h = c;
  let v = h.pathname || "/",
    w = v;
  if (s !== "/") {
    let N = s.replace(/^\//, "").split("/");
    w = "/" + v.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let x = zp(e, { pathname: w }),
    j = uh(
      x &&
        x.map((N) =>
          Object.assign({}, N, {
            params: Object.assign({}, a, N.params),
            pathname: gt([
              s,
              l.encodeLocation
                ? l.encodeLocation(N.pathname).pathname
                : N.pathname,
            ]),
            pathnameBase:
              N.pathnameBase === "/"
                ? s
                : gt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(N.pathnameBase).pathname
                      : N.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && j
    ? y.createElement(
        Dl.Provider,
        {
          value: {
            location: ar(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: at.Pop,
          },
        },
        j
      )
    : j;
}
function rh() {
  let e = dh(),
    t = Zp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: l }, n) : null,
    null
  );
}
const lh = y.createElement(rh, null);
class ih extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          et.Provider,
          { value: this.props.routeContext },
          y.createElement(Kc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function oh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = y.useContext(Il);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(et.Provider, { value: t }, r)
  );
}
function uh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let h = o.findIndex(
      (m) => m.route.id && (a == null ? void 0 : a[m.route.id]) !== void 0
    );
    h >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < o.length; h++) {
      let m = o[h];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (c = h),
        m.route.id)
      ) {
        let { loaderData: v, errors: w } = n,
          x =
            m.route.loader &&
            v[m.route.id] === void 0 &&
            (!w || w[m.route.id] === void 0);
        if (m.route.lazy || x) {
          (s = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, m, v) => {
    let w,
      x = !1,
      j = null,
      N = null;
    n &&
      ((w = a && m.route.id ? a[m.route.id] : void 0),
      (j = m.route.errorElement || lh),
      s &&
        (c < 0 && v === 0
          ? ((x = !0), (N = null))
          : c === v &&
            ((x = !0), (N = m.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, v + 1)),
      d = () => {
        let p;
        return (
          w
            ? (p = j)
            : x
            ? (p = N)
            : m.route.Component
            ? (p = y.createElement(m.route.Component, null))
            : m.route.element
            ? (p = m.route.element)
            : (p = h),
          y.createElement(oh, {
            match: m,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || v === 0)
      ? y.createElement(ih, {
          location: n.location,
          revalidation: n.revalidation,
          component: j,
          error: w,
          children: d(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Xc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Xc || {}),
  gl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(gl || {});
function ah(e) {
  let t = y.useContext(Il);
  return t || W(!1), t;
}
function sh(e) {
  let t = y.useContext(Qc);
  return t || W(!1), t;
}
function ch(e) {
  let t = y.useContext(et);
  return t || W(!1), t;
}
function Gc(e) {
  let t = ch(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function dh() {
  var e;
  let t = y.useContext(Kc),
    n = sh(gl.UseRouteError),
    r = Gc(gl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function fh() {
  let { router: e } = ah(Xc.UseNavigateStable),
    t = Gc(gl.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Yc(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, ar({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function su(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  xn() || W(!1);
  let { future: i, static: o } = y.useContext(be),
    { matches: a } = y.useContext(et),
    { pathname: s } = At(),
    c = kt(),
    h = au(t, uu(a, i.v7_relativeSplatPath), s, l === "path"),
    m = JSON.stringify(h);
  return (
    y.useEffect(
      () => c(JSON.parse(m), { replace: n, state: r, relative: l }),
      [c, m, l, n, r]
    ),
    null
  );
}
function ge(e) {
  W(!1);
}
function ph(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = at.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  xn() && W(!1);
  let s = t.replace(/^\/*/, "/"),
    c = y.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: ar({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, i, o]
    );
  typeof r == "string" && (r = yn(r));
  let {
      pathname: h = "/",
      search: m = "",
      hash: v = "",
      state: w = null,
      key: x = "default",
    } = r,
    j = y.useMemo(() => {
      let N = hn(h, s);
      return N == null
        ? null
        : {
            location: { pathname: N, search: m, hash: v, state: w, key: x },
            navigationType: l,
          };
    }, [s, h, m, v, w, x, l]);
  return j == null
    ? null
    : y.createElement(
        be.Provider,
        { value: c },
        y.createElement(Dl.Provider, { children: n, value: j })
      );
}
function hh(e) {
  let { children: t, location: n } = e;
  return th(co(t), n);
}
new Promise(() => {});
function co(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, l) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === y.Fragment) {
        n.push.apply(n, co(r.props.children, i));
        return;
      }
      r.type !== ge && W(!1), !r.props.index || !r.props.children || W(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = co(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yl() {
  return (
    (yl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yl.apply(this, arguments)
  );
}
function Jc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function mh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function vh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !mh(e);
}
const gh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  yh = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  xh = "6";
try {
  window.__reactRouterVersion = xh;
} catch {}
const wh = y.createContext({ isTransitioning: !1 }),
  Sh = "startTransition",
  Ea = vd[Sh];
function jh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = y.useRef();
  i.current == null && (i.current = Lp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [a, s] = y.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    h = y.useCallback(
      (m) => {
        c && Ea ? Ea(() => s(m)) : s(m);
      },
      [s, c]
    );
  return (
    y.useLayoutEffect(() => o.listen(h), [o, h]),
    y.createElement(ph, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const kh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ch = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  sr = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: s,
        to: c,
        preventScrollReset: h,
        unstable_viewTransition: m,
      } = t,
      v = Jc(t, gh),
      { basename: w } = y.useContext(be),
      x,
      j = !1;
    if (typeof c == "string" && Ch.test(c) && ((x = c), kh))
      try {
        let p = new URL(window.location.href),
          g = c.startsWith("//") ? new URL(p.protocol + c) : new URL(c),
          E = hn(g.pathname, w);
        g.origin === p.origin && E != null
          ? (c = E + g.search + g.hash)
          : (j = !0);
      } catch {}
    let N = bp(c, { relative: l }),
      f = Nh(c, {
        replace: o,
        state: a,
        target: s,
        preventScrollReset: h,
        relative: l,
        unstable_viewTransition: m,
      });
    function d(p) {
      r && r(p), p.defaultPrevented || f(p);
    }
    return y.createElement(
      "a",
      yl({}, v, { href: x || N, onClick: j || i ? r : d, ref: n, target: s })
    );
  }),
  Re = y.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: i = "",
        end: o = !1,
        style: a,
        to: s,
        unstable_viewTransition: c,
        children: h,
      } = t,
      m = Jc(t, yh),
      v = Ml(s, { relative: m.relative }),
      w = At(),
      x = y.useContext(Qc),
      { navigator: j, basename: N } = y.useContext(be),
      f = x != null && _h(v) && c === !0,
      d = j.encodeLocation ? j.encodeLocation(v).pathname : v.pathname,
      p = w.pathname,
      g =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    l ||
      ((p = p.toLowerCase()),
      (g = g ? g.toLowerCase() : null),
      (d = d.toLowerCase())),
      g && N && (g = hn(g, N) || g);
    const E = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
    let L = p === d || (!o && p.startsWith(d) && p.charAt(E) === "/"),
      S =
        g != null &&
        (g === d || (!o && g.startsWith(d) && g.charAt(d.length) === "/")),
      C = { isActive: L, isPending: S, isTransitioning: f },
      R = L ? r : void 0,
      T;
    typeof i == "function"
      ? (T = i(C))
      : (T = [
          i,
          L ? "active" : null,
          S ? "pending" : null,
          f ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let ve = typeof a == "function" ? a(C) : a;
    return y.createElement(
      sr,
      yl({}, m, {
        "aria-current": R,
        className: T,
        ref: n,
        style: ve,
        to: s,
        unstable_viewTransition: c,
      }),
      typeof h == "function" ? h(C) : h
    );
  });
var fo;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(fo || (fo = {}));
var Na;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Na || (Na = {}));
function Eh(e) {
  let t = y.useContext(Il);
  return t || W(!1), t;
}
function Nh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    s = kt(),
    c = At(),
    h = Ml(e, { relative: o });
  return y.useCallback(
    (m) => {
      if (vh(m, n)) {
        m.preventDefault();
        let v = r !== void 0 ? r : vl(c) === vl(h);
        s(e, {
          replace: v,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [c, s, h, r, l, n, e, i, o, a]
  );
}
function _h(e, t) {
  t === void 0 && (t = {});
  let n = y.useContext(wh);
  n == null && W(!1);
  let { basename: r } = Eh(fo.useViewTransitionState),
    l = Ml(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = hn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = hn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return so(l.pathname, o) != null || so(l.pathname, i) != null;
}
function wn({ alerta: e }) {
  return u.jsx(u.Fragment, {
    children: u.jsx("center", {
      children: u.jsxs("div", {
        className:
          "alert alert-danger d-flex align-items-center w-50 mt-4 mb-4",
        role: "alert",
        children: [
          u.jsx("svg", {
            className: "bi flex-shrink-0 me-2",
            width: "24",
            height: "24",
            role: "img",
            "aria-label": "Danger:",
            children: u.jsx("use", { xlinkHref: "#exclamation-triangle-fill" }),
          }),
          u.jsx("div", { style: { margin: "auto" }, children: e.mensaje }),
        ],
      }),
    }),
  });
}
function Ph({ setUsuarioLogeado: e }) {
  const [t, n] = y.useState({
      dni: "",
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    }),
    [r, l] = y.useState({ mensaje: "", error: !1 }),
    i = kt(),
    o = (s) => {
      const c = s.target.name,
        h = s.target.value;
      n({ ...t, [c]: h });
    },
    a = (s) => {
      s.preventDefault(),
        fetch("http://localhost:3000/api/usuarios", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            dni: t.dni,
            nombre: t.nombre,
            apellido: t.apellido,
            email: t.email,
            password: t.password,
          }),
        })
          .then((c) => c.json())
          .then((c) => {
            console.log(c),
              e(c),
              c.logeado
                ? i("/")
                : c.error &&
                  l({
                    error: !0,
                    mensaje:
                      "Error al crear el usuario, revisa todos los campos.",
                  });
          });
    };
  return u.jsx(u.Fragment, {
    children: u.jsxs("center", {
      children: [
        u.jsx("h1", { children: "Crear usuario" }),
        u.jsxs("form", {
          onSubmit: a,
          children: [
            u.jsx("label", { children: "DNI:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "number",
              onChange: o,
              value: t.dni,
              placeholder: "DNI",
              name: "dni",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Nombre:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "text",
              onChange: o,
              value: t.nombre,
              placeholder: "Nombre",
              name: "nombre",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Apellido:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "text",
              onChange: o,
              value: t.apellido,
              placeholder: "Apellido",
              name: "apellido",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Email:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "email",
              onChange: o,
              value: t.email,
              placeholder: "Email",
              name: "email",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Contraseña:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "password",
              onChange: o,
              value: t.password,
              placeholder: "Password",
              name: "password",
            }),
            u.jsx("br", {}),
            u.jsx("button", {
              type: "submit",
              className: "btn btn-success",
              children: "Enviar",
            }),
          ],
        }),
        u.jsx("div", { children: r.error ? u.jsx(wn, { alerta: r }) : "" }),
      ],
    }),
  });
}
function Lh() {
  const [e, t] = y.useState([]);
  async function n() {
    const i = await (await fetch("http://localhost:3000/api/usuarios")).json();
    t(i);
  }
  y.useEffect(() => {
    n();
  }, []);
  function r() {
    return e.map((l, i) =>
      u.jsxs(
        "tr",
        {
          children: [
            u.jsx("td", { children: l.dni }),
            u.jsx("td", { children: l.nombre }),
            u.jsx("td", { children: l.apellido }),
            u.jsx("td", { children: l.email }),
            u.jsx("td", { children: l.rol }),
            u.jsx("td", { children: l.activo ? "Si" : "No" }),
            u.jsxs("td", {
              children: [
                u.jsx(sr, {
                  className: "btn btn-success",
                  to: `/usuarios/${l._id}`,
                  children: "Ver",
                }),
                u.jsx(sr, {
                  className: "btn btn-warning",
                  to: `/usuarios/editar-usuario/${l._id}`,
                  children: "Editar",
                }),
              ],
            }),
          ],
        },
        i
      )
    );
  }
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx("h1", { children: "Usuarios creados" }),
      u.jsxs("table", {
        className: "table",
        children: [
          u.jsx("thead", {
            children: u.jsxs("tr", {
              children: [
                u.jsx("th", { children: "DNI" }),
                u.jsx("th", { children: "Nombre" }),
                u.jsx("th", { children: "Apellido" }),
                u.jsx("th", { children: "Email" }),
                u.jsx("th", { children: "Rol" }),
                u.jsx("th", { children: "Activo" }),
                u.jsx("th", { children: "Acciones" }),
              ],
            }),
          }),
          u.jsx("tbody", { children: r() }),
        ],
      }),
    ],
  });
}
function Th() {
  const [e, t] = y.useState({}),
    { id: n } = Ul();
  kt();
  async function r() {
    const i = await (
      await fetch(`http://localhost:3000/api/usuarios/${n}`)
    ).json();
    t(i);
  }
  return (
    y.useEffect(() => {
      r();
    }, []),
    u.jsx(u.Fragment, {
      children: u.jsxs("center", {
        className: "mt-5",
        children: [
          u.jsxs("h1", { children: [e.nombre, " ", e.apellido] }),
          u.jsxs("p", { children: ["DNI: ", u.jsx("b", { children: e.dni })] }),
          u.jsxs("p", {
            children: ["Nombre: ", u.jsx("b", { children: e.nombre })],
          }),
          u.jsxs("p", {
            children: ["Apellido: ", u.jsx("b", { children: e.apellido })],
          }),
          u.jsxs("p", {
            children: ["Email: ", u.jsx("b", { children: e.email })],
          }),
          u.jsxs("p", { children: ["Rol: ", u.jsx("b", { children: e.rol })] }),
          u.jsxs("p", {
            children: [
              "Activo: ",
              u.jsx("b", { children: e.activo ? "Si" : "No" }),
            ],
          }),
        ],
      }),
    })
  );
}
function Rh({ usuarioLogeado: e }) {
  const [t, n] = y.useState({ nombre: "", apellido: "", email: "", rol: "" }),
    { id: r } = Ul(),
    l = kt();
  function i(c) {
    const h = c.target.name,
      m = c.target.value;
    n({ ...t, [h]: m });
  }
  async function o() {
    const h = await (
      await fetch(`http://localhost:3000/api/usuarios/${r}`)
    ).json();
    n(h),
      h._id !== e.usuario._id &&
        e.usuario.rol !== "Administrativo" &&
        l("/", {
          state: { alerta: "No tienes permisos para editar este usuario!" },
        });
  }
  y.useEffect(() => {
    o();
  }, []);
  const a = (c) => {
    c.preventDefault(),
      fetch(`http://localhost:3000/api/usuarios/${r}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          nombre: t.nombre,
          apellido: t.apellido,
          email: t.email,
          rol: t.rol,
          activo: t.activo,
        }),
      })
        .then((h) => h.json())
        .then(() => {
          l("/");
        });
  };
  function s() {
    return u.jsx(u.Fragment, {
      children: u.jsxs("center", {
        children: [
          u.jsx("h1", { children: "Editar al usuario" }),
          u.jsxs("form", {
            onSubmit: a,
            children: [
              u.jsx("label", { children: "Nombre:" }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                onChange: i,
                value: t.nombre,
                placeholder: "Nombre",
                name: "nombre",
              }),
              u.jsx("br", {}),
              u.jsx("label", { children: "Apellido:" }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                onChange: i,
                value: t.apellido,
                placeholder: "Apellido",
                name: "apellido",
              }),
              u.jsx("br", {}),
              u.jsx("label", { children: "Email:" }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "email",
                onChange: i,
                value: t.email,
                placeholder: "Email",
                name: "email",
              }),
              u.jsx("br", {}),
              u.jsx("label", { children: "Rol:" }),
              u.jsx("br", {}),
              u.jsxs("select", {
                onChange: i,
                value: t.rol,
                name: "rol",
                children: [
                  u.jsx("option", {
                    value: "Estudiante",
                    children: "Estudiante",
                  }),
                  u.jsx("option", {
                    value: "Bibliotecario",
                    children: "Bibliotecario",
                  }),
                  u.jsx("option", {
                    value: "Administrativo",
                    children: "Administrativo",
                  }),
                ],
              }),
              u.jsx("br", {}),
              u.jsx("label", { children: "Activo:" }),
              u.jsx("br", {}),
              u.jsxs("select", {
                onChange: i,
                value: t.activo,
                name: "activo",
                children: [
                  u.jsx("option", { value: "true", children: "Si" }),
                  u.jsx("option", { value: "false", children: "No" }),
                ],
              }),
              u.jsx("br", {}),
              u.jsx("button", {
                type: "submit",
                className: "btn btn-success",
                children: "Enviar",
              }),
            ],
          }),
        ],
      }),
    });
  }
  return u.jsx(u.Fragment, { children: s() });
}
function zh({ setUsuarioLogeado: e }) {
  const [t, n] = y.useState({ dni: "", password: "" }),
    [r, l] = y.useState({ mensaje: "", error: !1 }),
    i = kt(),
    o = (s) => {
      const c = s.target.name,
        h = s.target.value;
      n({ ...t, [c]: h });
    },
    a = (s) => {
      s.preventDefault(),
        fetch("http://localhost:3000/api/usuarios/iniciar-sesion", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: t.dni, password: t.password }),
        })
          .then((c) => c.json())
          .then((c) => {
            c.logeado
              ? (e(c), i("/"))
              : c.error &&
                l({
                  error: !0,
                  mensaje: "Error al iniciar sesion, revisa todos los campos.",
                });
          });
    };
  return u.jsx(u.Fragment, {
    children: u.jsxs("center", {
      children: [
        u.jsx("h1", { children: "Iniciar Sesion" }),
        u.jsxs("form", {
          onSubmit: a,
          children: [
            u.jsx("label", { children: "DNI:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "number",
              onChange: o,
              value: t.dni,
              placeholder: "DNI",
              name: "dni",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Contraseña:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "password",
              onChange: o,
              value: t.password,
              placeholder: "Password",
              name: "password",
            }),
            u.jsx("br", {}),
            u.jsx("button", {
              type: "submit",
              className: "btn btn-success",
              children: "Enviar",
            }),
          ],
        }),
        u.jsx("div", { children: r.error ? u.jsx(wn, { alerta: r }) : "" }),
      ],
    }),
  });
}
const Zc = "/assets/fondo_paginas-CCQm9WY3.svg";
function Oh({ setUsuarioLogeado: e }) {
  async function t() {
    fetch("http://localhost:3000/api/usuarios/desconectarse", {
      credentials: "include",
    })
      .then((n) => n.json())
      .then((n) => {
        e(n);
      })
      .catch((n) => {
        console.log(n);
      });
  }
  return (
    y.useEffect(() => {
      t();
    }, []),
    u.jsx(u.Fragment, {
      children: u.jsxs("center", {
        style: { marginTop: "2%" },
        children: [
          u.jsx("h1", { className: "mb-4", children: "Te desconectaste!" }),
          u.jsx("img", {
            src: Zc,
            style: { width: "30%" },
            alt: "fondo_pagina",
          }),
        ],
      }),
    })
  );
}
function Fh() {
  const [e, t] = y.useState({
      titulo: "",
      autor: "",
      categoria: "",
      copiaVirtual: "",
      copiasLibro: "",
      descripcion: "",
      imagen: "",
    }),
    [n, r] = y.useState({ mensaje: "", error: !1 }),
    l = kt(),
    i = (a) => {
      const s = a.target.name,
        c = a.target.value;
      t({ ...e, [s]: c });
    },
    o = (a) => {
      a.preventDefault(),
        fetch("http://localhost:3000/api/libros", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            titulo: e.titulo,
            autor: e.autor,
            categoria: e.categoria,
            copiaVirtual: e.copiaVirtual,
            copiasLibro: e.copiasLibro,
            imagen: e.imagen,
            descripcion: e.descripcion,
          }),
        })
          .then((s) => s.json())
          .then((s) => {
            s.error
              ? r({
                  error: !0,
                  mensaje: "Error al crear el libro, revise los campos",
                })
              : l("/libros");
          });
    };
  return u.jsx("div", {
    children: u.jsxs("center", {
      children: [
        u.jsx("h1", { children: "Registrar libro:" }),
        u.jsxs("form", {
          onSubmit: o,
          children: [
            u.jsx("label", { children: "Titulo:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "text",
              onChange: i,
              value: e.titulo,
              name: "titulo",
              placeholder: "Titulo",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Autor:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "text",
              onChange: i,
              value: e.autor,
              name: "autor",
              placeholder: "Autor",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Categoria:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "text",
              onChange: i,
              value: e.categoria,
              name: "categoria",
              placeholder: "Categoria",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Copia Virtual:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "text",
              onChange: i,
              value: e.copiaVirtual,
              name: "copiaVirtual",
              placeholder: "URL de la Copia Virtual",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Copias Libro:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "number",
              onChange: i,
              value: e.copiasLibro,
              name: "copiasLibro",
              placeholder: "Copias del Libro",
            }),
            u.jsx("br", {}),
            u.jsx("label", { children: "Imagen:" }),
            u.jsx("br", {}),
            u.jsx("input", {
              type: "text",
              onChange: i,
              value: e.imagen,
              name: "imagen",
              placeholder: "URL de la imagen",
            }),
            u.jsx("br", {}),
            u.jsx("br", {}),
            u.jsx("textarea", {
              type: "text",
              name: "descripcion",
              onChange: i,
              value: e.descripcion,
              placeholder: "Descripcion",
              rows: "8",
              cols: "60",
            }),
            u.jsx("br", {}),
            u.jsx("button", {
              type: "submit",
              className: "btn btn-success",
              children: "Enviar",
            }),
          ],
        }),
        n.error ? u.jsx(wn, { alerta: n }) : "",
      ],
    }),
  });
}
function Ih({ libro: e }) {
  return u.jsx(u.Fragment, {
    children: u.jsxs(
      "div",
      {
        className: "card",
        style: { width: "18rem" },
        children: [
          e.imagen
            ? u.jsx("img", {
                src: e.imagen,
                className: "card-img-top",
                alt: "...",
              })
            : null,
          u.jsxs("div", {
            className: "card-body",
            children: [
              u.jsx("h4", { className: "card-title", children: e.titulo }),
              u.jsx("p", { className: "card-text", children: e.descripcion }),
              u.jsx("p", {
                className: "card-text",
                children: u.jsxs("i", { children: ["Autor: ", e.autor] }),
              }),
              u.jsxs("p", {
                className: "card-text",
                children: ["Copias: ", e.copiasLibro],
              }),
              u.jsx("a", {
                href: "/libros/" + e._id,
                className: "btn btn-primary",
                children: "Ver libro",
              }),
            ],
          }),
        ],
      },
      e._id.toString() + 1
    ),
  });
}
function Dh() {
  const [e, t] = y.useState([]);
  async function n() {
    const i = await (await fetch("http://localhost:3000/api/libros")).json();
    t(i);
  }
  y.useEffect(() => {
    n();
  }, []);
  const r = () =>
    e.map((l, i) =>
      u.jsx(
        "div",
        {
          className: "col-12 col-md-4 col-sm-6 mt-4",
          children: u.jsx("center", { children: u.jsx(Ih, { libro: l }, i) }),
        },
        i
      )
    );
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className: "container text-center",
      children: [
        u.jsx("h1", { className: "text-center mt-4 mb-3", children: "Libros" }),
        u.jsx("div", {
          className: "row justify-content-center",
          children: r(),
        }),
      ],
    }),
  });
}
function Uh({ fetchCrearComentario: e }) {
  const [t, n] = y.useState([""]),
    [r, l] = y.useState(10),
    i = (s) => {
      n(s.target.value);
    },
    o = (s) => {
      l(s.target.value);
    },
    a = (s) => {
      s.preventDefault(), e(t, r), n(""), l(10);
    };
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx("h1", { children: "Comentar:" }),
      u.jsxs("form", {
        onSubmit: a,
        children: [
          u.jsx("textarea", {
            type: "text",
            name: "comentario",
            onChange: i,
            value: t,
            placeholder: "Escriba un comentario",
            rows: "8",
            cols: "60",
          }),
          u.jsx("br", {}),
          u.jsx("label", { children: "Puntuacion: " }),
          u.jsx("br", {}),
          u.jsx("input", {
            type: "number",
            onChange: o,
            value: r,
            name: "puntuacion",
            min: 1,
            max: 10,
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx("button", {
            type: "submit",
            className: "btn btn-success",
            children: "Enviar",
          }),
        ],
      }),
    ],
  });
}
function Mh({ usuarioLogeado: e }) {
  const [t, n] = y.useState({ comentarios: [{ documento: {}, editando: !1 }] }),
    { id: r } = Ul(),
    [l, i] = y.useState({ mensaje: "", error: !1 }),
    [o, a] = y.useState(""),
    [s, c] = y.useState(5);
  async function h() {
    const C = await (
      await fetch(`http://localhost:3000/api/libros/${r}`)
    ).json();
    n({
      ...C,
      comentarios: C.comentarios.map((R) => ({ ...R, editando: !1 })),
    });
  }
  y.useEffect(() => {
    h();
  }, []);
  async function m(S, C, R) {
    R ||
      (await fetch("http://localhost:3000/api/comentarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          idLibro: r,
          documento: e.usuario._id,
          textoComentario: S,
          puntuacion: C,
        }),
      })
        .then((T) => T.json())
        .then((T) => {
          T.error
            ? i({
                error: !0,
                mensaje: "Error al crear el comentario, revise los campos",
              })
            : (h(), i({ error: !1, mensaje: "" }));
        })
        .catch((T) => {
          console.log(T);
        }));
  }
  function v() {
    confirm("Estas seguro de borrar el Libro?") &&
      fetch(`http://localhost:3000/api/libros/${r}`, { method: "DELETE" })
        .then((C) => {
          navigate("/libros");
        })
        .catch((C) => {
          console.log(C);
        });
  }
  function w(S, C = !0) {
    n({
      ...t,
      comentarios: t.comentarios.map((R) =>
        R._id === S && C
          ? (a(R.textoComentario), c(R.puntuacion), { ...R, editando: !0 })
          : { ...R, editando: !1 }
      ),
    });
  }
  function x(S) {
    a(S.target.value);
  }
  function j(S) {
    c(S.target.value);
  }
  function N(S) {
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("textarea", {
          type: "text",
          onChange: x,
          value: o,
          placeholder: "Comentario",
          name: "textoComentario",
          cols: "80",
          rows: "6",
        }),
        u.jsx("br", {}),
        u.jsx("input", {
          name: "puntuacion",
          type: "number",
          min: 1,
          max: 5,
          onChange: j,
          value: s,
        }),
        u.jsx("br", {}),
        u.jsx("button", { onClick: () => f(S), children: "Guardar" }),
        u.jsx("button", { onClick: () => w(S, !1), children: "Cancelar" }),
      ],
    });
  }
  function f(S) {
    fetch(`http://localhost:3000/api/comentarios/${S}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ textoComentario: o, puntuacion: s }),
    })
      .then((C) => C.json())
      .then((C) => {
        C.error
          ? i({
              error: !0,
              mensaje: "Error al editar el comentario, revise los campos",
            })
          : (w(S, !1), h(), i({ error: !1, mensaje: "" }));
      })
      .catch((C) => {
        console.log(C);
      });
  }
  function d(S) {
    confirm("Estas seguro de borrar el comentario?") &&
      fetch(`http://localhost:3000/api/comentarios/${S}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then((R) => {
          h();
        })
        .catch((R) => {
          console.log(R);
        });
  }
  function p() {
    if (
      e.usuario &&
      ((e.logeado && e.usuario.rol === "Administrativo") ||
        e.usuario.rol === "Bibliotecario")
    )
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(sr, {
            to: `/libros/editar-libro/${t._id}`,
            children: u.jsx("button", {
              className: "btn btn-warning",
              children: "Editar",
            }),
          }),
          u.jsx("button", {
            className: "btn btn-danger",
            onClick: v,
            children: "Borrar",
          }),
        ],
      });
  }
  function g(S, C) {
    if (
      e.usuario &&
      (S === e.usuario._id || e.usuario.rol === "Administrativo")
    )
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("button", {
            className: "btn btn-warning",
            onClick: () => w(C),
            children: "Editar",
          }),
          u.jsx("button", {
            className: "btn btn-danger",
            onClick: () => d(C),
            children: "Borrar",
          }),
        ],
      });
  }
  function E() {
    let S = 0;
    for (let C = 0; C < t.comentarios.length; C++)
      S += t.comentarios[C].puntuacion;
    return isNaN(S / t.comentarios.length)
      ? "No hay puntuaciones"
      : (S / t.comentarios.length).toFixed(2);
  }
  function L(S, C) {
    let R = !1;
    for (let T = 0; T < t.comentarios.length; T++)
      if (t.comentarios[T].documento._id === e.usuario._id) {
        i({ error: !0, mensaje: "Solo puedes crear un comentario por libro" }),
          (R = !0);
        break;
      }
    R || m(S, C, R);
  }
  return u.jsx(u.Fragment, {
    children: u.jsxs("center", {
      children: [
        u.jsx("h1", { children: t.titulo }),
        u.jsx("img", {
          style: { width: "20%" },
          src: `${t.imagen}`,
          alt: "Imagen libro",
        }),
        u.jsx("p", {
          className: "mt-4 w-25 text-center",
          children: t.descripcion,
        }),
        u.jsxs("p", {
          className: "mt-2",
          children: ["Autor: ", u.jsx("b", { children: t.autor })],
        }),
        u.jsxs("p", {
          children: ["Categoria: ", u.jsx("b", { children: t.categoria })],
        }),
        u.jsxs("p", {
          children: [
            "Copia Virtual: ",
            u.jsx("b", { children: t.copiaVirtual }),
          ],
        }),
        u.jsxs("p", {
          children: ["Copias Libro: ", u.jsx("b", { children: t.copiasLibro })],
        }),
        u.jsxs("h3", {
          children: [
            "Puntaje promedio de la publicacion: ",
            u.jsx("b", { children: E() }),
          ],
        }),
        p(),
        e.logeado
          ? u.jsx(Uh, { fetchCrearComentario: L })
          : u.jsx(sr, {
              to: "/iniciar-sesion",
              children: "Inicia sesion para comentar!",
            }),
        l.error ? u.jsx(wn, { alerta: l }) : "",
        u.jsx("ul", {
          children: t.comentarios.map((S) =>
            u.jsx(
              "li",
              {
                className: "w-50 mt-4",
                style: {
                  border: "1px solid black",
                  listStyle: "none",
                  padding: "20px",
                },
                children: S.editando
                  ? N(S._id)
                  : u.jsxs(u.Fragment, {
                      children: [
                        u.jsxs("p", {
                          children: ["Comentario: ", S.textoComentario],
                        }),
                        u.jsxs("i", {
                          children: [
                            "Usuario: ",
                            S.documento.nombre,
                            " ",
                            S.documento.apellido,
                            u.jsx("br", {}),
                            "Puntuacion: ",
                            S.puntuacion,
                          ],
                        }),
                        u.jsx("br", {}),
                        u.jsx("br", {}),
                        g(S.documento._id, S._id),
                      ],
                    }),
              },
              S._id
            )
          ),
        }),
      ],
    }),
  });
}
function $h() {
  const [e, t] = y.useState({
      titulo: "",
      autor: "",
      categoria: "",
      copiaVirtual: "",
      copiasLibro: "",
      imagen: "",
      descripcion: "",
    }),
    { id: n } = Ul(),
    [r, l] = y.useState({ mensaje: "", error: !1 }),
    i = kt();
  function o(h) {
    const m = h.target.name,
      v = h.target.value;
    t({ ...e, [m]: v });
  }
  async function a() {
    const m = await (
      await fetch(`http://localhost:3000/api/libros/${n}`)
    ).json();
    t(m);
  }
  y.useEffect(() => {
    a();
  }, []);
  const s = async (h) => {
    h.preventDefault(),
      await fetch(`http://localhost:3000/api/libros/${n}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          titulo: e.titulo,
          autor: e.autor,
          categoria: e.categoria,
          copiaVirtual: e.copiaVirtual,
          copiasLibro: e.copiasLibro,
          imagen: e.imagen,
          descripcion: e.descripcion,
        }),
      })
        .then((m) => m.json())
        .then((m) => {
          m.error
            ? l({
                error: !0,
                mensaje: "Error al editar el libro, revise los campos",
              })
            : i("/libros");
        });
  };
  function c() {
    return u.jsx(u.Fragment, {
      children: u.jsxs("center", {
        children: [
          u.jsx("h1", { children: "Editar libro" }),
          u.jsxs("form", {
            onSubmit: s,
            children: [
              u.jsx("label", { children: "Titulo:" }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                onChange: o,
                value: e.titulo,
                name: "titulo",
                placeholder: "Titulo",
              }),
              u.jsx("br", {}),
              u.jsx("label", { children: "Autor:" }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                onChange: o,
                value: e.autor,
                name: "autor",
                placeholder: "Autor",
              }),
              u.jsx("br", {}),
              u.jsx("label", { children: "Categoria:" }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                onChange: o,
                value: e.categoria,
                name: "categoria",
                placeholder: "Categoria",
              }),
              u.jsx("br", {}),
              u.jsx("label", { children: "Copia Virtual:" }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                onChange: o,
                value: e.copiaVirtual,
                name: "copiaVirtual",
                placeholder: "URL de la Copia Virtual",
              }),
              u.jsx("br", {}),
              u.jsx("label", { children: "Copias Libro:" }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "number",
                onChange: o,
                value: e.copiasLibro,
                name: "copiasLibro",
                placeholder: "Copias del Libro",
              }),
              u.jsx("br", {}),
              u.jsx("label", { children: "Imagen:" }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                onChange: o,
                value: e.imagen,
                name: "imagen",
                placeholder: "URL de la imagen",
              }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsx("textarea", {
                type: "text",
                name: "descripcion",
                onChange: o,
                value: e.descripcion,
                placeholder: "Descripcion",
                rows: "8",
                cols: "60",
              }),
              u.jsx("br", {}),
              u.jsx("button", {
                type: "submit",
                className: "btn btn-success",
                children: "Enviar",
              }),
            ],
          }),
          u.jsx("div", { children: r.error ? u.jsx(wn, { alerta: r }) : "" }),
        ],
      }),
    });
  }
  return u.jsx(u.Fragment, { children: c() });
}
function Ah() {
  const { state: e } = At();
  return u.jsxs(u.Fragment, {
    children: [
      e && e.alerta && u.jsx(wn, { alerta: { mensaje: e.alerta } }),
      u.jsx("center", {
        style: { marginTop: "3%" },
        children: u.jsx("img", {
          src: Zc,
          style: { width: "30%" },
          alt: "fondo_pagina",
        }),
      }),
    ],
  });
}
const Bh = "/assets/barra_blanca-BaDk2Je6.svg";
function Vh({ usuarioLogeado: e }) {
  const t = () => {
      if (e.logeado)
        return u.jsxs(u.Fragment, {
          children: [
            u.jsx("li", {
              className: "nav-item",
              children: u.jsxs(Re, {
                className: "nav-link",
                to: `/usuarios/${e.usuario._id}`,
                children: ["Hola ", e.usuario.nombre, "!"],
              }),
            }),
            u.jsx("li", {
              className: "nav-item",
              children: u.jsx(Re, {
                className: "nav-link",
                to: "/desconectarse",
                children: "Desconectarse",
              }),
            }),
          ],
        });
    },
    n = () => {
      if (!e.logeado)
        return u.jsxs(u.Fragment, {
          children: [
            u.jsx("li", {
              className: "nav-item",
              children: u.jsx(Re, {
                className: "nav-link",
                to: "/iniciar-sesion",
                children: "Iniciar Sesion",
              }),
            }),
            u.jsx("li", {
              className: "nav-item",
              children: u.jsx(Re, {
                className: "nav-link",
                to: "/registrarse",
                children: "Registrarse",
              }),
            }),
          ],
        });
    },
    r = () => {
      if (e.logeado && e.usuario.rol === "Administrativo")
        return u.jsxs(u.Fragment, {
          children: [
            u.jsx("li", {
              className: "nav-item",
              children: u.jsx(Re, {
                className: "nav-link",
                to: "/usuarios",
                children: "Ver Usuarios",
              }),
            }),
            u.jsx("li", {
              className: "nav-item",
              children: u.jsx(Re, {
                className: "nav-link",
                to: "/registrar-libro",
                children: "Registrar Libros",
              }),
            }),
          ],
        });
    },
    l = () => {
      if (e.logeado && e.usuario.rol === "Bibliotecario")
        return u.jsxs(u.Fragment, {
          children: [
            u.jsx("li", {
              className: "nav-item",
              children: u.jsx(Re, {
                className: "nav-link",
                to: "/usuarios",
                children: "Ver Usuarios",
              }),
            }),
            u.jsx("li", {
              className: "nav-item",
              children: u.jsx(Re, {
                className: "nav-link",
                to: "/registrar-libro",
                children: "Registrar Libros",
              }),
            }),
          ],
        });
    };
  return u.jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark ",
    children: u.jsxs("div", {
      className: "container-fluid",
      children: [
        u.jsx(Re, {
          className: "navbar-brand",
          to: "/",
          children: u.jsx("img", { style: { width: "80%" }, src: Bh, alt: "" }),
        }),
        u.jsx("button", {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarNav",
          "aria-controls": "navbarNav",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: u.jsx("span", { className: "navbar-toggler-icon" }),
        }),
        u.jsxs("div", {
          className: "collapse navbar-collapse",
          id: "navbarNav",
          children: [
            u.jsxs("ul", {
              className: "navbar-nav",
              children: [
                u.jsx("li", {
                  className: "nav-item",
                  children: u.jsx(Re, {
                    className: "nav-link",
                    to: "/",
                    children: "Inicio",
                  }),
                }),
                r(),
                l(),
                u.jsx("li", {
                  children: u.jsx(Re, {
                    className: "nav-link",
                    to: "/libros",
                    children: "Ver Libros",
                  }),
                }),
              ],
            }),
            u.jsxs("ul", {
              className: "navbar-nav ms-auto me-5 mb-2 mb-lg-0",
              children: [t(), n()],
            }),
          ],
        }),
      ],
    }),
  });
}
const Wh = "/assets/logoinstituto-CCOiVdX3.svg";
function Hh() {
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className: "footer-container mt-auto",
      children: [
        u.jsx("hr", {}),
        u.jsx("footer", {
          className: "mt-3 text-center",
          children: u.jsx("img", { src: Wh, alt: "" }),
        }),
      ],
    }),
  });
}
y.createContext();
const cu = () => {
  const [e, t] = y.useState({
      usuario: { id: "", nombre: "", esAdmin: !1 },
      logeado: !1,
    }),
    [n, r] = y.useState(!0);
  async function l() {
    const o = await (
      await fetch("http://localhost:3000/api/usuarios/usuario-logeado", {
        credentials: "include",
      })
    ).json();
    t(o), r(!1);
  }
  return (
    y.useEffect(() => {
      l(), console.log(e);
    }, []),
    { usuarioLogeado: e, setUsuarioLogeado: t, cargando: n }
  );
};
function Qh({ children: e }) {
  const { usuarioLogeado: t, cargando: n } = cu();
  return (
    console.log(t, n),
    n
      ? ""
      : t.logeado
      ? e
      : u.jsx(su, { to: "/", state: { alerta: "No estas logeado!" } })
  );
}
function _a({ children: e }) {
  const { usuarioLogeado: t, cargando: n } = cu();
  return n
    ? ""
    : t.logeado &&
      (t.usuario.rol === "Bibliotecario" || t.usuario.rol === "Administrativo")
    ? e
    : u.jsx(su, { to: "/", state: { alerta: "No eres bibliotecario!" } });
}
function Kh() {
  const { usuarioLogeado: e, setUsuarioLogeado: t } = cu();
  return u.jsxs("div", {
    className: "d-flex flex-column vh-100",
    children: [
      u.jsx(Vh, { usuarioLogeado: e }),
      u.jsxs(hh, {
        children: [
          u.jsx(ge, { path: "/", element: u.jsx(Ah, {}) }),
          u.jsx(ge, {
            path: "/registrarse",
            element: u.jsx(Ph, { setUsuarioLogeado: t }),
          }),
          u.jsx(ge, {
            path: "/iniciar-sesion",
            element: u.jsx(zh, { setUsuarioLogeado: t }),
          }),
          u.jsx(ge, {
            path: "/desconectarse",
            element: u.jsx(Oh, { setUsuarioLogeado: t }),
          }),
          u.jsx(ge, { path: "/usuarios", element: u.jsx(Lh, {}) }),
          u.jsx(ge, { path: "/usuarios/:id", element: u.jsx(Th, {}) }),
          u.jsx(ge, {
            path: "/usuarios/editar-usuario/:id",
            element: u.jsx(Qh, { children: u.jsx(Rh, { usuarioLogeado: e }) }),
          }),
          u.jsx(ge, {
            path: "/registrar-libro",
            element: u.jsx(_a, { children: u.jsx(Fh, { usuarioLogeado: e }) }),
          }),
          u.jsx(ge, { path: "/libros", element: u.jsx(Dh, {}) }),
          u.jsx(ge, {
            path: "/libros/:id",
            element: u.jsx(Mh, { usuarioLogeado: e }),
          }),
          u.jsx(ge, {
            path: "/libros/editar-libro/:id",
            element: u.jsx(_a, { children: u.jsx($h, { usuarioLogeado: e }) }),
          }),
          u.jsx(ge, { path: "*", element: u.jsx(su, { to: "/" }) }),
        ],
      }),
      u.jsx(Hh, {}),
    ],
  });
}
mi.createRoot(document.getElementById("root")).render(
  u.jsx(Ma.StrictMode, { children: u.jsx(jh, { children: u.jsx(Kh, {}) }) })
);
