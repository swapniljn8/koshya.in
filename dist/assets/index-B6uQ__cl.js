(function () {
  const J = document.createElement("link").relList;
  if (J && J.supports && J.supports("modulepreload")) return;
  for (const k of document.querySelectorAll('link[rel="modulepreload"]')) r(k);
  new MutationObserver((k) => {
    for (const il of k)
      if (il.type === "childList")
        for (const _l of il.addedNodes)
          _l.tagName === "LINK" && _l.rel === "modulepreload" && r(_l);
  }).observe(document, { childList: !0, subtree: !0 });
  function w(k) {
    const il = {};
    return (
      k.integrity && (il.integrity = k.integrity),
      k.referrerPolicy && (il.referrerPolicy = k.referrerPolicy),
      k.crossOrigin === "use-credentials"
        ? (il.credentials = "include")
        : k.crossOrigin === "anonymous"
          ? (il.credentials = "omit")
          : (il.credentials = "same-origin"),
      il
    );
  }
  function r(k) {
    if (k.ep) return;
    k.ep = !0;
    const il = w(k);
    fetch(k.href, il);
  }
})();
function Ld(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default")
    ? p.default
    : p;
}
var ei = { exports: {} },
  B = {};
var yy;
function xd() {
  if (yy) return B;
  yy = 1;
  var p = Symbol.for("react.transitional.element"),
    J = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    k = Symbol.for("react.profiler"),
    il = Symbol.for("react.consumer"),
    _l = Symbol.for("react.context"),
    rt = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    A = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    C = Symbol.for("react.activity"),
    yl = Symbol.iterator;
  function wl(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (yl && s[yl]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var Yl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Cl = Object.assign,
    Dt = {};
  function Wl(s, T, O) {
    ((this.props = s),
      (this.context = T),
      (this.refs = Dt),
      (this.updater = O || Yl));
  }
  ((Wl.prototype.isReactComponent = {}),
    (Wl.prototype.setState = function (s, T) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, s, T, "setState");
    }),
    (Wl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    }));
  function Wt() {}
  Wt.prototype = Wl.prototype;
  function Hl(s, T, O) {
    ((this.props = s),
      (this.context = T),
      (this.refs = Dt),
      (this.updater = O || Yl));
  }
  var nt = (Hl.prototype = new Wt());
  ((nt.constructor = Hl), Cl(nt, Wl.prototype), (nt.isPureReactComponent = !0));
  var zt = Array.isArray;
  function Gl() {}
  var x = { H: null, A: null, T: null, S: null },
    Ql = Object.prototype.hasOwnProperty;
  function Tt(s, T, O) {
    var D = O.ref;
    return {
      $$typeof: p,
      type: s,
      key: T,
      ref: D !== void 0 ? D : null,
      props: O,
    };
  }
  function ja(s, T) {
    return Tt(s.type, T, s.props);
  }
  function At(s) {
    return typeof s == "object" && s !== null && s.$$typeof === p;
  }
  function Xl(s) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (O) {
        return T[O];
      })
    );
  }
  var ba = /\/+/g;
  function Nt(s, T) {
    return typeof s == "object" && s !== null && s.key != null
      ? Xl("" + s.key)
      : T.toString(36);
  }
  function gt(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(Gl, Gl)
            : ((s.status = "pending"),
              s.then(
                function (T) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = T));
                },
                function (T) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = T));
                },
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function E(s, T, O, D, Y) {
    var X = typeof s;
    (X === "undefined" || X === "boolean") && (s = null);
    var P = !1;
    if (s === null) P = !0;
    else
      switch (X) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case p:
            case J:
              P = !0;
              break;
            case I:
              return ((P = s._init), E(P(s._payload), T, O, D, Y));
          }
      }
    if (P)
      return (
        (Y = Y(s)),
        (P = D === "" ? "." + Nt(s, 0) : D),
        zt(Y)
          ? ((O = ""),
            P != null && (O = P.replace(ba, "$&/") + "/"),
            E(Y, T, O, "", function (_e) {
              return _e;
            }))
          : Y != null &&
            (At(Y) &&
              (Y = ja(
                Y,
                O +
                  (Y.key == null || (s && s.key === Y.key)
                    ? ""
                    : ("" + Y.key).replace(ba, "$&/") + "/") +
                  P,
              )),
            T.push(Y)),
        1
      );
    P = 0;
    var Rl = D === "" ? "." : D + ":";
    if (zt(s))
      for (var hl = 0; hl < s.length; hl++)
        ((D = s[hl]), (X = Rl + Nt(D, hl)), (P += E(D, T, O, X, Y)));
    else if (((hl = wl(s)), typeof hl == "function"))
      for (s = hl.call(s), hl = 0; !(D = s.next()).done; )
        ((D = D.value), (X = Rl + Nt(D, hl++)), (P += E(D, T, O, X, Y)));
    else if (X === "object") {
      if (typeof s.then == "function") return E(gt(s), T, O, D, Y);
      throw (
        (T = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return P;
  }
  function _(s, T, O) {
    if (s == null) return s;
    var D = [],
      Y = 0;
    return (
      E(s, D, "", "", function (X) {
        return T.call(O, X, Y++);
      }),
      D
    );
  }
  function R(s) {
    if (s._status === -1) {
      var T = s._result;
      ((T = T()),
        T.then(
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = O));
          },
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = O));
          },
        ),
        s._status === -1 && ((s._status = 0), (s._result = T)));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var al =
      typeof reportError == "function"
        ? reportError
        : function (s) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var T = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof s == "object" &&
                  s !== null &&
                  typeof s.message == "string"
                    ? String(s.message)
                    : String(s),
                error: s,
              });
              if (!window.dispatchEvent(T)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", s);
              return;
            }
            console.error(s);
          },
    cl = {
      map: _,
      forEach: function (s, T, O) {
        _(
          s,
          function () {
            T.apply(this, arguments);
          },
          O,
        );
      },
      count: function (s) {
        var T = 0;
        return (
          _(s, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (s) {
        return (
          _(s, function (T) {
            return T;
          }) || []
        );
      },
      only: function (s) {
        if (!At(s))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return s;
      },
    };
  return (
    (B.Activity = C),
    (B.Children = cl),
    (B.Component = Wl),
    (B.Fragment = w),
    (B.Profiler = k),
    (B.PureComponent = Hl),
    (B.StrictMode = r),
    (B.Suspense = H),
    (B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (B.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return x.H.useMemoCache(s);
      },
    }),
    (B.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (B.cacheSignal = function () {
      return null;
    }),
    (B.cloneElement = function (s, T, O) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + ".",
        );
      var D = Cl({}, s.props),
        Y = s.key;
      if (T != null)
        for (X in (T.key !== void 0 && (Y = "" + T.key), T))
          !Ql.call(T, X) ||
            X === "key" ||
            X === "__self" ||
            X === "__source" ||
            (X === "ref" && T.ref === void 0) ||
            (D[X] = T[X]);
      var X = arguments.length - 2;
      if (X === 1) D.children = O;
      else if (1 < X) {
        for (var P = Array(X), Rl = 0; Rl < X; Rl++) P[Rl] = arguments[Rl + 2];
        D.children = P;
      }
      return Tt(s.type, Y, D);
    }),
    (B.createContext = function (s) {
      return (
        (s = {
          $$typeof: _l,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: il, _context: s }),
        s
      );
    }),
    (B.createElement = function (s, T, O) {
      var D,
        Y = {},
        X = null;
      if (T != null)
        for (D in (T.key !== void 0 && (X = "" + T.key), T))
          Ql.call(T, D) &&
            D !== "key" &&
            D !== "__self" &&
            D !== "__source" &&
            (Y[D] = T[D]);
      var P = arguments.length - 2;
      if (P === 1) Y.children = O;
      else if (1 < P) {
        for (var Rl = Array(P), hl = 0; hl < P; hl++)
          Rl[hl] = arguments[hl + 2];
        Y.children = Rl;
      }
      if (s && s.defaultProps)
        for (D in ((P = s.defaultProps), P)) Y[D] === void 0 && (Y[D] = P[D]);
      return Tt(s, X, Y);
    }),
    (B.createRef = function () {
      return { current: null };
    }),
    (B.forwardRef = function (s) {
      return { $$typeof: rt, render: s };
    }),
    (B.isValidElement = At),
    (B.lazy = function (s) {
      return { $$typeof: I, _payload: { _status: -1, _result: s }, _init: R };
    }),
    (B.memo = function (s, T) {
      return { $$typeof: A, type: s, compare: T === void 0 ? null : T };
    }),
    (B.startTransition = function (s) {
      var T = x.T,
        O = {};
      x.T = O;
      try {
        var D = s(),
          Y = x.S;
        (Y !== null && Y(O, D),
          typeof D == "object" &&
            D !== null &&
            typeof D.then == "function" &&
            D.then(Gl, al));
      } catch (X) {
        al(X);
      } finally {
        (T !== null && O.types !== null && (T.types = O.types), (x.T = T));
      }
    }),
    (B.unstable_useCacheRefresh = function () {
      return x.H.useCacheRefresh();
    }),
    (B.use = function (s) {
      return x.H.use(s);
    }),
    (B.useActionState = function (s, T, O) {
      return x.H.useActionState(s, T, O);
    }),
    (B.useCallback = function (s, T) {
      return x.H.useCallback(s, T);
    }),
    (B.useContext = function (s) {
      return x.H.useContext(s);
    }),
    (B.useDebugValue = function () {}),
    (B.useDeferredValue = function (s, T) {
      return x.H.useDeferredValue(s, T);
    }),
    (B.useEffect = function (s, T) {
      return x.H.useEffect(s, T);
    }),
    (B.useEffectEvent = function (s) {
      return x.H.useEffectEvent(s);
    }),
    (B.useId = function () {
      return x.H.useId();
    }),
    (B.useImperativeHandle = function (s, T, O) {
      return x.H.useImperativeHandle(s, T, O);
    }),
    (B.useInsertionEffect = function (s, T) {
      return x.H.useInsertionEffect(s, T);
    }),
    (B.useLayoutEffect = function (s, T) {
      return x.H.useLayoutEffect(s, T);
    }),
    (B.useMemo = function (s, T) {
      return x.H.useMemo(s, T);
    }),
    (B.useOptimistic = function (s, T) {
      return x.H.useOptimistic(s, T);
    }),
    (B.useReducer = function (s, T, O) {
      return x.H.useReducer(s, T, O);
    }),
    (B.useRef = function (s) {
      return x.H.useRef(s);
    }),
    (B.useState = function (s) {
      return x.H.useState(s);
    }),
    (B.useSyncExternalStore = function (s, T, O) {
      return x.H.useSyncExternalStore(s, T, O);
    }),
    (B.useTransition = function () {
      return x.H.useTransition();
    }),
    (B.version = "19.2.8"),
    B
  );
}
var vy;
function ii() {
  return (vy || ((vy = 1), (ei.exports = xd())), ei.exports);
}
var mi = ii();
const v = Ld(mi);
var ui = { exports: {} },
  Su = {},
  ni = { exports: {} },
  ci = {};
var dy;
function Kd() {
  return (
    dy ||
      ((dy = 1),
      (function (p) {
        function J(E, _) {
          var R = E.length;
          E.push(_);
          l: for (; 0 < R; ) {
            var al = (R - 1) >>> 1,
              cl = E[al];
            if (0 < k(cl, _)) ((E[al] = _), (E[R] = cl), (R = al));
            else break l;
          }
        }
        function w(E) {
          return E.length === 0 ? null : E[0];
        }
        function r(E) {
          if (E.length === 0) return null;
          var _ = E[0],
            R = E.pop();
          if (R !== _) {
            E[0] = R;
            l: for (var al = 0, cl = E.length, s = cl >>> 1; al < s; ) {
              var T = 2 * (al + 1) - 1,
                O = E[T],
                D = T + 1,
                Y = E[D];
              if (0 > k(O, R))
                D < cl && 0 > k(Y, O)
                  ? ((E[al] = Y), (E[D] = R), (al = D))
                  : ((E[al] = O), (E[T] = R), (al = T));
              else if (D < cl && 0 > k(Y, R))
                ((E[al] = Y), (E[D] = R), (al = D));
              else break l;
            }
          }
          return _;
        }
        function k(E, _) {
          var R = E.sortIndex - _.sortIndex;
          return R !== 0 ? R : E.id - _.id;
        }
        if (
          ((p.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var il = performance;
          p.unstable_now = function () {
            return il.now();
          };
        } else {
          var _l = Date,
            rt = _l.now();
          p.unstable_now = function () {
            return _l.now() - rt;
          };
        }
        var H = [],
          A = [],
          I = 1,
          C = null,
          yl = 3,
          wl = !1,
          Yl = !1,
          Cl = !1,
          Dt = !1,
          Wl = typeof setTimeout == "function" ? setTimeout : null,
          Wt = typeof clearTimeout == "function" ? clearTimeout : null,
          Hl = typeof setImmediate < "u" ? setImmediate : null;
        function nt(E) {
          for (var _ = w(A); _ !== null; ) {
            if (_.callback === null) r(A);
            else if (_.startTime <= E)
              (r(A), (_.sortIndex = _.expirationTime), J(H, _));
            else break;
            _ = w(A);
          }
        }
        function zt(E) {
          if (((Cl = !1), nt(E), !Yl))
            if (w(H) !== null) ((Yl = !0), Gl || ((Gl = !0), Xl()));
            else {
              var _ = w(A);
              _ !== null && gt(zt, _.startTime - E);
            }
        }
        var Gl = !1,
          x = -1,
          Ql = 5,
          Tt = -1;
        function ja() {
          return Dt ? !0 : !(p.unstable_now() - Tt < Ql);
        }
        function At() {
          if (((Dt = !1), Gl)) {
            var E = p.unstable_now();
            Tt = E;
            var _ = !0;
            try {
              l: {
                ((Yl = !1), Cl && ((Cl = !1), Wt(x), (x = -1)), (wl = !0));
                var R = yl;
                try {
                  t: {
                    for (
                      nt(E), C = w(H);
                      C !== null && !(C.expirationTime > E && ja());
                    ) {
                      var al = C.callback;
                      if (typeof al == "function") {
                        ((C.callback = null), (yl = C.priorityLevel));
                        var cl = al(C.expirationTime <= E);
                        if (((E = p.unstable_now()), typeof cl == "function")) {
                          ((C.callback = cl), nt(E), (_ = !0));
                          break t;
                        }
                        (C === w(H) && r(H), nt(E));
                      } else r(H);
                      C = w(H);
                    }
                    if (C !== null) _ = !0;
                    else {
                      var s = w(A);
                      (s !== null && gt(zt, s.startTime - E), (_ = !1));
                    }
                  }
                  break l;
                } finally {
                  ((C = null), (yl = R), (wl = !1));
                }
                _ = void 0;
              }
            } finally {
              _ ? Xl() : (Gl = !1);
            }
          }
        }
        var Xl;
        if (typeof Hl == "function")
          Xl = function () {
            Hl(At);
          };
        else if (typeof MessageChannel < "u") {
          var ba = new MessageChannel(),
            Nt = ba.port2;
          ((ba.port1.onmessage = At),
            (Xl = function () {
              Nt.postMessage(null);
            }));
        } else
          Xl = function () {
            Wl(At, 0);
          };
        function gt(E, _) {
          x = Wl(function () {
            E(p.unstable_now());
          }, _);
        }
        ((p.unstable_IdlePriority = 5),
          (p.unstable_ImmediatePriority = 1),
          (p.unstable_LowPriority = 4),
          (p.unstable_NormalPriority = 3),
          (p.unstable_Profiling = null),
          (p.unstable_UserBlockingPriority = 2),
          (p.unstable_cancelCallback = function (E) {
            E.callback = null;
          }),
          (p.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ql = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (p.unstable_getCurrentPriorityLevel = function () {
            return yl;
          }),
          (p.unstable_next = function (E) {
            switch (yl) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = yl;
            }
            var R = yl;
            yl = _;
            try {
              return E();
            } finally {
              yl = R;
            }
          }),
          (p.unstable_requestPaint = function () {
            Dt = !0;
          }),
          (p.unstable_runWithPriority = function (E, _) {
            switch (E) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                E = 3;
            }
            var R = yl;
            yl = E;
            try {
              return _();
            } finally {
              yl = R;
            }
          }),
          (p.unstable_scheduleCallback = function (E, _, R) {
            var al = p.unstable_now();
            switch (
              (typeof R == "object" && R !== null
                ? ((R = R.delay),
                  (R = typeof R == "number" && 0 < R ? al + R : al))
                : (R = al),
              E)
            ) {
              case 1:
                var cl = -1;
                break;
              case 2:
                cl = 250;
                break;
              case 5:
                cl = 1073741823;
                break;
              case 4:
                cl = 1e4;
                break;
              default:
                cl = 5e3;
            }
            return (
              (cl = R + cl),
              (E = {
                id: I++,
                callback: _,
                priorityLevel: E,
                startTime: R,
                expirationTime: cl,
                sortIndex: -1,
              }),
              R > al
                ? ((E.sortIndex = R),
                  J(A, E),
                  w(H) === null &&
                    E === w(A) &&
                    (Cl ? (Wt(x), (x = -1)) : (Cl = !0), gt(zt, R - al)))
                : ((E.sortIndex = cl),
                  J(H, E),
                  Yl || wl || ((Yl = !0), Gl || ((Gl = !0), Xl()))),
              E
            );
          }),
          (p.unstable_shouldYield = ja),
          (p.unstable_wrapCallback = function (E) {
            var _ = yl;
            return function () {
              var R = yl;
              yl = _;
              try {
                return E.apply(this, arguments);
              } finally {
                yl = R;
              }
            };
          }));
      })(ci)),
    ci
  );
}
var oy;
function Jd() {
  return (oy || ((oy = 1), (ni.exports = Kd())), ni.exports);
}
var fi = { exports: {} },
  ql = {};
var hy;
function wd() {
  if (hy) return ql;
  hy = 1;
  var p = ii();
  function J(H) {
    var A = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        A += "&args[]=" + encodeURIComponent(arguments[I]);
    }
    return (
      "Minified React error #" +
      H +
      "; visit " +
      A +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function w() {}
  var r = {
      d: {
        f: w,
        r: function () {
          throw Error(J(522));
        },
        D: w,
        C: w,
        L: w,
        m: w,
        X: w,
        S: w,
        M: w,
      },
      p: 0,
      findDOMNode: null,
    },
    k = Symbol.for("react.portal");
  function il(H, A, I) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: k,
      key: C == null ? null : "" + C,
      children: H,
      containerInfo: A,
      implementation: I,
    };
  }
  var _l = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function rt(H, A) {
    if (H === "font") return "";
    if (typeof A == "string") return A === "use-credentials" ? A : "";
  }
  return (
    (ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ql.createPortal = function (H, A) {
      var I =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11))
        throw Error(J(299));
      return il(H, A, null, I);
    }),
    (ql.flushSync = function (H) {
      var A = _l.T,
        I = r.p;
      try {
        if (((_l.T = null), (r.p = 2), H)) return H();
      } finally {
        ((_l.T = A), (r.p = I), r.d.f());
      }
    }),
    (ql.preconnect = function (H, A) {
      typeof H == "string" &&
        (A
          ? ((A = A.crossOrigin),
            (A =
              typeof A == "string"
                ? A === "use-credentials"
                  ? A
                  : ""
                : void 0))
          : (A = null),
        r.d.C(H, A));
    }),
    (ql.prefetchDNS = function (H) {
      typeof H == "string" && r.d.D(H);
    }),
    (ql.preinit = function (H, A) {
      if (typeof H == "string" && A && typeof A.as == "string") {
        var I = A.as,
          C = rt(I, A.crossOrigin),
          yl = typeof A.integrity == "string" ? A.integrity : void 0,
          wl = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
        I === "style"
          ? r.d.S(H, typeof A.precedence == "string" ? A.precedence : void 0, {
              crossOrigin: C,
              integrity: yl,
              fetchPriority: wl,
            })
          : I === "script" &&
            r.d.X(H, {
              crossOrigin: C,
              integrity: yl,
              fetchPriority: wl,
              nonce: typeof A.nonce == "string" ? A.nonce : void 0,
            });
      }
    }),
    (ql.preinitModule = function (H, A) {
      if (typeof H == "string")
        if (typeof A == "object" && A !== null) {
          if (A.as == null || A.as === "script") {
            var I = rt(A.as, A.crossOrigin);
            r.d.M(H, {
              crossOrigin: I,
              integrity: typeof A.integrity == "string" ? A.integrity : void 0,
              nonce: typeof A.nonce == "string" ? A.nonce : void 0,
            });
          }
        } else A == null && r.d.M(H);
    }),
    (ql.preload = function (H, A) {
      if (
        typeof H == "string" &&
        typeof A == "object" &&
        A !== null &&
        typeof A.as == "string"
      ) {
        var I = A.as,
          C = rt(I, A.crossOrigin);
        r.d.L(H, I, {
          crossOrigin: C,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          nonce: typeof A.nonce == "string" ? A.nonce : void 0,
          type: typeof A.type == "string" ? A.type : void 0,
          fetchPriority:
            typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
          referrerPolicy:
            typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
          imageSrcSet:
            typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
          imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
          media: typeof A.media == "string" ? A.media : void 0,
        });
      }
    }),
    (ql.preloadModule = function (H, A) {
      if (typeof H == "string")
        if (A) {
          var I = rt(A.as, A.crossOrigin);
          r.d.m(H, {
            as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
            crossOrigin: I,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          });
        } else r.d.m(H);
    }),
    (ql.requestFormReset = function (H) {
      r.d.r(H);
    }),
    (ql.unstable_batchedUpdates = function (H, A) {
      return H(A);
    }),
    (ql.useFormState = function (H, A, I) {
      return _l.H.useFormState(H, A, I);
    }),
    (ql.useFormStatus = function () {
      return _l.H.useHostTransitionStatus();
    }),
    (ql.version = "19.2.8"),
    ql
  );
}
var ry;
function Wd() {
  if (ry) return fi.exports;
  ry = 1;
  function p() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (J) {
        console.error(J);
      }
  }
  return (p(), (fi.exports = wd()), fi.exports);
}
var gy;
function $d() {
  if (gy) return Su;
  gy = 1;
  var p = Jd(),
    J = ii(),
    w = Wd();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function k(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function il(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function _l(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function rt(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function H(l) {
    if (il(l) !== l) throw Error(r(188));
  }
  function A(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = il(l)), t === null)) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return (H(u), l);
          if (n === e) return (H(u), t);
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== e.return) ((a = u), (e = n));
      else {
        for (var c = !1, f = u.child; f; ) {
          if (f === a) {
            ((c = !0), (a = u), (e = n));
            break;
          }
          if (f === e) {
            ((c = !0), (e = u), (a = n));
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === a) {
              ((c = !0), (a = n), (e = u));
              break;
            }
            if (f === e) {
              ((c = !0), (e = n), (a = u));
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (a.alternate !== e) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? l : t;
  }
  function I(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = I(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign,
    yl = Symbol.for("react.element"),
    wl = Symbol.for("react.transitional.element"),
    Yl = Symbol.for("react.portal"),
    Cl = Symbol.for("react.fragment"),
    Dt = Symbol.for("react.strict_mode"),
    Wl = Symbol.for("react.profiler"),
    Wt = Symbol.for("react.consumer"),
    Hl = Symbol.for("react.context"),
    nt = Symbol.for("react.forward_ref"),
    zt = Symbol.for("react.suspense"),
    Gl = Symbol.for("react.suspense_list"),
    x = Symbol.for("react.memo"),
    Ql = Symbol.for("react.lazy"),
    Tt = Symbol.for("react.activity"),
    ja = Symbol.for("react.memo_cache_sentinel"),
    At = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (At && l[At]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var ba = Symbol.for("react.client.reference");
  function Nt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ba ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Cl:
        return "Fragment";
      case Wl:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case zt:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Yl:
          return "Portal";
        case Hl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case nt:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case x:
          return (
            (t = l.displayName || null),
            t !== null ? t : Nt(l.type) || "Memo"
          );
        case Ql:
          ((t = l._payload), (l = l._init));
          try {
            return Nt(l(t));
          } catch {}
      }
    return null;
  }
  var gt = Array.isArray,
    E = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    R = { pending: !1, data: null, method: null, action: null },
    al = [],
    cl = -1;
  function s(l) {
    return { current: l };
  }
  function T(l) {
    0 > cl || ((l.current = al[cl]), (al[cl] = null), cl--);
  }
  function O(l, t) {
    (cl++, (al[cl] = l.current), (l.current = t));
  }
  var D = s(null),
    Y = s(null),
    X = s(null),
    P = s(null);
  function Rl(l, t) {
    switch ((O(X, t), O(Y, l), O(D, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? R0(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = R0(t)), (l = B0(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (T(D), O(D, l));
  }
  function hl() {
    (T(D), T(Y), T(X));
  }
  function _e(l) {
    l.memoizedState !== null && O(P, l);
    var t = D.current,
      a = B0(t, l.type);
    t !== a && (O(Y, l), O(D, a));
  }
  function Eu(l) {
    (Y.current === l && (T(D), T(Y)),
      P.current === l && (T(P), (ou._currentValue = R)));
  }
  var Qn, si;
  function za(l) {
    if (Qn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Qn = (t && t[1]) || ""),
          (si =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Qn +
      l +
      si
    );
  }
  var Xn = !1;
  function jn(l, t) {
    if (!l || Xn) return "";
    Xn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (g) {
                  h = g;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (g) {
            if (g && h && typeof g.stack == "string") return [g.stack, h.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        c = n[0],
        f = n[1];
      if (c && f) {
        var i = c.split(`
`),
          o = f.split(`
`);
        for (
          u = e = 0;
          e < i.length && !i[e].includes("DetermineComponentFrameRoot");
        )
          e++;
        for (; u < o.length && !o[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === i.length || u === o.length)
          for (
            e = i.length - 1, u = o.length - 1;
            1 <= e && 0 <= u && i[e] !== o[u];
          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (i[e] !== o[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || i[e] !== o[u])) {
                  var S =
                    `
` + i[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      ((Xn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? za(a) : "";
  }
  function by(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return za(l.type);
      case 16:
        return za("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? za("Suspense Fallback")
          : za("Suspense");
      case 19:
        return za("SuspenseList");
      case 0:
      case 15:
        return jn(l.type, !1);
      case 11:
        return jn(l.type.render, !1);
      case 1:
        return jn(l.type, !0);
      case 31:
        return za("Activity");
      default:
        return "";
    }
  }
  function yi(l) {
    try {
      var t = "",
        a = null;
      do ((t += by(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  var Zn = Object.prototype.hasOwnProperty,
    Vn = p.unstable_scheduleCallback,
    Ln = p.unstable_cancelCallback,
    zy = p.unstable_shouldYield,
    Ty = p.unstable_requestPaint,
    $l = p.unstable_now,
    Ay = p.unstable_getCurrentPriorityLevel,
    vi = p.unstable_ImmediatePriority,
    di = p.unstable_UserBlockingPriority,
    bu = p.unstable_NormalPriority,
    py = p.unstable_LowPriority,
    oi = p.unstable_IdlePriority,
    _y = p.log,
    Oy = p.unstable_setDisableYieldValue,
    Oe = null,
    Fl = null;
  function $t(l) {
    if (
      (typeof _y == "function" && Oy(l),
      Fl && typeof Fl.setStrictMode == "function")
    )
      try {
        Fl.setStrictMode(Oe, l);
      } catch {}
  }
  var kl = Math.clz32 ? Math.clz32 : Ny,
    My = Math.log,
    Dy = Math.LN2;
  function Ny(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((My(l) / Dy) | 0)) | 0);
  }
  var zu = 256,
    Tu = 262144,
    Au = 4194304;
  function Ta(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function pu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var f = e & 134217727;
    return (
      f !== 0
        ? ((e = f & ~n),
          e !== 0
            ? (u = Ta(e))
            : ((c &= f),
              c !== 0
                ? (u = Ta(c))
                : a || ((a = f & ~l), a !== 0 && (u = Ta(a)))))
        : ((f = e & ~n),
          f !== 0
            ? (u = Ta(f))
            : c !== 0
              ? (u = Ta(c))
              : a || ((a = e & ~l), a !== 0 && (u = Ta(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Me(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Uy(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hi() {
    var l = Au;
    return ((Au <<= 1), (Au & 62914560) === 0 && (Au = 4194304), l);
  }
  function xn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function De(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Hy(l, t, a, e, u, n) {
    var c = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var f = l.entanglements,
      i = l.expirationTimes,
      o = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var S = 31 - kl(a),
        z = 1 << S;
      ((f[S] = 0), (i[S] = -1));
      var h = o[S];
      if (h !== null)
        for (o[S] = null, S = 0; S < h.length; S++) {
          var g = h[S];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~z;
    }
    (e !== 0 && ri(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t)));
  }
  function ri(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var e = 31 - kl(t);
    ((l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 261930)));
  }
  function gi(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - kl(a),
        u = 1 << e;
      ((u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u));
    }
  }
  function Si(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Kn(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Kn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Jn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ei() {
    var l = _.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : uy(l.type));
  }
  function bi(l, t) {
    var a = _.p;
    try {
      return ((_.p = l), t());
    } finally {
      _.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    Ol = "__reactFiber$" + Ft,
    jl = "__reactProps$" + Ft,
    Za = "__reactContainer$" + Ft,
    wn = "__reactEvents$" + Ft,
    qy = "__reactListeners$" + Ft,
    Cy = "__reactHandles$" + Ft,
    zi = "__reactResources$" + Ft,
    Ne = "__reactMarker$" + Ft;
  function Wn(l) {
    (delete l[Ol], delete l[jl], delete l[wn], delete l[qy], delete l[Cy]);
  }
  function Va(l) {
    var t = l[Ol];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Za] || a[Ol])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = V0(l); l !== null; ) {
            if ((a = l[Ol])) return a;
            l = V0(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function La(l) {
    if ((l = l[Ol] || l[Za])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Ue(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function xa(l) {
    var t = l[zi];
    return (
      t ||
        (t = l[zi] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Al(l) {
    l[Ne] = !0;
  }
  var Ti = new Set(),
    Ai = {};
  function Aa(l, t) {
    (Ka(l, t), Ka(l + "Capture", t));
  }
  function Ka(l, t) {
    for (Ai[l] = t, l = 0; l < t.length; l++) Ti.add(t[l]);
  }
  var Ry = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    pi = {},
    _i = {};
  function By(l) {
    return Zn.call(_i, l)
      ? !0
      : Zn.call(pi, l)
        ? !1
        : Ry.test(l)
          ? (_i[l] = !0)
          : ((pi[l] = !0), !1);
  }
  function _u(l, t, a) {
    if (By(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ou(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ut(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function ct(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Oi(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Yy(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            ((a = "" + c), n.call(this, c));
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function $n(l) {
    if (!l._valueTracker) {
      var t = Oi(l) ? "checked" : "value";
      l._valueTracker = Yy(l, t, "" + l[t]);
    }
  }
  function Mi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = Oi(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Mu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Gy = /[\n"\\]/g;
  function ft(l) {
    return l.replace(Gy, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Fn(l, t, a, e, u, n, c, f) {
    ((l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ct(t))
          : l.value !== "" + ct(t) && (l.value = "" + ct(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? kn(l, c, ct(t))
        : a != null
          ? kn(l, c, ct(a))
          : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + ct(f))
        : l.removeAttribute("name"));
  }
  function Di(l, t, a, e, u, n, c, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        $n(l);
        return;
      }
      ((a = a != null ? "" + ct(a) : ""),
        (t = t != null ? "" + ct(t) : a),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = f ? l.checked : !!e),
      (l.defaultChecked = !!e),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c),
      $n(l));
  }
  function kn(l, t, a) {
    (t === "number" && Mu(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        ((u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + ct(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          ((l[u].selected = !0), e && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ni(l, t, a) {
    if (
      t != null &&
      ((t = "" + ct(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ct(a) : "";
  }
  function Ui(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(r(92));
        if (gt(e)) {
          if (1 < e.length) throw Error(r(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ct(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e),
      $n(l));
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Qy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Hi(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : e
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || Qy.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function qi(l, t, a) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var u in t)
        ((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && Hi(l, u, e));
    } else for (var n in t) t.hasOwnProperty(n) && Hi(l, n, t[n]);
  }
  function In(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Xy = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    jy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Du(l) {
    return jy.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Ht() {}
  var Pn = null;
  function lc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Wa = null,
    $a = null;
  function Ci(l) {
    var t = La(l);
    if (t && (l = t.stateNode)) {
      var a = l[jl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Fn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ft("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[jl] || null;
                if (!u) throw Error(r(90));
                Fn(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((e = a[t]), e.form === l.form && Mi(e));
          }
          break l;
        case "textarea":
          Ni(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Ja(l, !!a.multiple, t, !1));
      }
    }
  }
  var tc = !1;
  function Ri(l, t, a) {
    if (tc) return l(t, a);
    tc = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((tc = !1),
        (Wa !== null || $a !== null) &&
          (rn(), Wa && ((t = Wa), (l = $a), ($a = Wa = null), Ci(t), l)))
      )
        for (t = 0; t < l.length; t++) Ci(l[t]);
    }
  }
  function He(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[jl] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
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
        ((e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(r(231, t, typeof a));
    return a;
  }
  var qt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ac = !1;
  if (qt)
    try {
      var qe = {};
      (Object.defineProperty(qe, "passive", {
        get: function () {
          ac = !0;
        },
      }),
        window.addEventListener("test", qe, qe),
        window.removeEventListener("test", qe, qe));
    } catch {
      ac = !1;
    }
  var kt = null,
    ec = null,
    Nu = null;
  function Bi() {
    if (Nu) return Nu;
    var l,
      t = ec,
      a = t.length,
      e,
      u = "value" in kt ? kt.value : kt.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var c = a - l;
    for (e = 1; e <= c && t[a - e] === u[n - e]; e++);
    return (Nu = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Uu(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Hu() {
    return !0;
  }
  function Yi() {
    return !1;
  }
  function Zl(l) {
    function t(a, e, u, n, c) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null));
      for (var f in l)
        l.hasOwnProperty(f) && ((a = l[f]), (this[f] = a ? a(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Hu
          : Yi),
        (this.isPropagationStopped = Yi),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Hu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Hu));
        },
        persist: function () {},
        isPersistent: Hu,
      }),
      t
    );
  }
  var pa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qu = Zl(pa),
    Ce = C({}, pa, { view: 0, detail: 0 }),
    Zy = Zl(Ce),
    uc,
    nc,
    Re,
    Cu = C({}, Ce, {
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
      getModifierState: fc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Re &&
              (Re && l.type === "mousemove"
                ? ((uc = l.screenX - Re.screenX), (nc = l.screenY - Re.screenY))
                : (nc = uc = 0),
              (Re = l)),
            uc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : nc;
      },
    }),
    Gi = Zl(Cu),
    Vy = C({}, Cu, { dataTransfer: 0 }),
    Ly = Zl(Vy),
    xy = C({}, Ce, { relatedTarget: 0 }),
    cc = Zl(xy),
    Ky = C({}, pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jy = Zl(Ky),
    wy = C({}, pa, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Wy = Zl(wy),
    $y = C({}, pa, { data: 0 }),
    Qi = Zl($y),
    Fy = {
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
    ky = {
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
    Iy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Py(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Iy[l])
        ? !!t[l]
        : !1;
  }
  function fc() {
    return Py;
  }
  var lv = C({}, Ce, {
      key: function (l) {
        if (l.key) {
          var t = Fy[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Uu(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? ky[l.keyCode] || "Unidentified"
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
      getModifierState: fc,
      charCode: function (l) {
        return l.type === "keypress" ? Uu(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Uu(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    tv = Zl(lv),
    av = C({}, Cu, {
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
    Xi = Zl(av),
    ev = C({}, Ce, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fc,
    }),
    uv = Zl(ev),
    nv = C({}, pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cv = Zl(nv),
    fv = C({}, Cu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    iv = Zl(fv),
    mv = C({}, pa, { newState: 0, oldState: 0 }),
    sv = Zl(mv),
    yv = [9, 13, 27, 32],
    ic = qt && "CompositionEvent" in window,
    Be = null;
  qt && "documentMode" in document && (Be = document.documentMode);
  var vv = qt && "TextEvent" in window && !Be,
    ji = qt && (!ic || (Be && 8 < Be && 11 >= Be)),
    Zi = " ",
    Vi = !1;
  function Li(l, t) {
    switch (l) {
      case "keyup":
        return yv.indexOf(t.keyCode) !== -1;
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
  function xi(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Fa = !1;
  function dv(l, t) {
    switch (l) {
      case "compositionend":
        return xi(t);
      case "keypress":
        return t.which !== 32 ? null : ((Vi = !0), Zi);
      case "textInput":
        return ((l = t.data), l === Zi && Vi ? null : l);
      default:
        return null;
    }
  }
  function ov(l, t) {
    if (Fa)
      return l === "compositionend" || (!ic && Li(l, t))
        ? ((l = Bi()), (Nu = ec = kt = null), (Fa = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ji && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hv = {
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
  function Ki(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!hv[l.type] : t === "textarea";
  }
  function Ji(l, t, a, e) {
    (Wa ? ($a ? $a.push(e) : ($a = [e])) : (Wa = e),
      (t = An(t, "onChange")),
      0 < t.length &&
        ((a = new qu("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t })));
  }
  var Ye = null,
    Ge = null;
  function rv(l) {
    D0(l, 0);
  }
  function Ru(l) {
    var t = Ue(l);
    if (Mi(t)) return l;
  }
  function wi(l, t) {
    if (l === "change") return t;
  }
  var Wi = !1;
  if (qt) {
    var mc;
    if (qt) {
      var sc = "oninput" in document;
      if (!sc) {
        var $i = document.createElement("div");
        ($i.setAttribute("oninput", "return;"),
          (sc = typeof $i.oninput == "function"));
      }
      mc = sc;
    } else mc = !1;
    Wi = mc && (!document.documentMode || 9 < document.documentMode);
  }
  function Fi() {
    Ye && (Ye.detachEvent("onpropertychange", ki), (Ge = Ye = null));
  }
  function ki(l) {
    if (l.propertyName === "value" && Ru(Ge)) {
      var t = [];
      (Ji(t, Ge, l, lc(l)), Ri(rv, t));
    }
  }
  function gv(l, t, a) {
    l === "focusin"
      ? (Fi(), (Ye = t), (Ge = a), Ye.attachEvent("onpropertychange", ki))
      : l === "focusout" && Fi();
  }
  function Sv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ru(Ge);
  }
  function Ev(l, t) {
    if (l === "click") return Ru(t);
  }
  function bv(l, t) {
    if (l === "input" || l === "change") return Ru(t);
  }
  function zv(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Il = typeof Object.is == "function" ? Object.is : zv;
  function Qe(l, t) {
    if (Il(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Zn.call(t, u) || !Il(l[u], t[u])) return !1;
    }
    return !0;
  }
  function Ii(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Pi(l, t) {
    var a = Ii(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ii(a);
    }
  }
  function lm(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? lm(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function tm(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Mu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Mu(l.document);
    }
    return t;
  }
  function yc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Tv = qt && "documentMode" in document && 11 >= document.documentMode,
    ka = null,
    vc = null,
    Xe = null,
    dc = !1;
  function am(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    dc ||
      ka == null ||
      ka !== Mu(e) ||
      ((e = ka),
      "selectionStart" in e && yc(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Xe && Qe(Xe, e)) ||
        ((Xe = e),
        (e = An(vc, "onSelect")),
        0 < e.length &&
          ((t = new qu("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = ka))));
  }
  function _a(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ia = {
      animationend: _a("Animation", "AnimationEnd"),
      animationiteration: _a("Animation", "AnimationIteration"),
      animationstart: _a("Animation", "AnimationStart"),
      transitionrun: _a("Transition", "TransitionRun"),
      transitionstart: _a("Transition", "TransitionStart"),
      transitioncancel: _a("Transition", "TransitionCancel"),
      transitionend: _a("Transition", "TransitionEnd"),
    },
    oc = {},
    em = {};
  qt &&
    ((em = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Oa(l) {
    if (oc[l]) return oc[l];
    if (!Ia[l]) return l;
    var t = Ia[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in em) return (oc[l] = t[a]);
    return l;
  }
  var um = Oa("animationend"),
    nm = Oa("animationiteration"),
    cm = Oa("animationstart"),
    Av = Oa("transitionrun"),
    pv = Oa("transitionstart"),
    _v = Oa("transitioncancel"),
    fm = Oa("transitionend"),
    im = new Map(),
    hc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  hc.push("scrollEnd");
  function St(l, t) {
    (im.set(l, t), Aa(t, [l]));
  }
  var Bu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    it = [],
    Pa = 0,
    rc = 0;
  function Yu() {
    for (var l = Pa, t = (rc = Pa = 0); t < l; ) {
      var a = it[t];
      it[t++] = null;
      var e = it[t];
      it[t++] = null;
      var u = it[t];
      it[t++] = null;
      var n = it[t];
      if (((it[t++] = null), e !== null && u !== null)) {
        var c = e.pending;
        (c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (e.pending = u));
      }
      n !== 0 && mm(a, u, n);
    }
  }
  function Gu(l, t, a, e) {
    ((it[Pa++] = l),
      (it[Pa++] = t),
      (it[Pa++] = a),
      (it[Pa++] = e),
      (rc |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function gc(l, t, a, e) {
    return (Gu(l, t, a, e), Qu(l));
  }
  function Ma(l, t) {
    return (Gu(l, null, null, t), Qu(l));
  }
  function mm(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - kl(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Qu(l) {
    if (50 < fu) throw ((fu = 0), (Mf = null), Error(r(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var le = {};
  function Ov(l, t, a, e) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Pl(l, t, a, e) {
    return new Ov(l, t, a, e);
  }
  function Sc(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Ct(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = Pl(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function sm(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Xu(l, t, a, e, u, n) {
    var c = 0;
    if (((e = l), typeof l == "function")) Sc(l) && (c = 1);
    else if (typeof l == "string")
      c = Hd(l, a, D.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Tt:
          return (
            (l = Pl(31, a, t, u)),
            (l.elementType = Tt),
            (l.lanes = n),
            l
          );
        case Cl:
          return Da(a.children, u, n, t);
        case Dt:
          ((c = 8), (u |= 24));
          break;
        case Wl:
          return (
            (l = Pl(12, a, t, u | 2)),
            (l.elementType = Wl),
            (l.lanes = n),
            l
          );
        case zt:
          return (
            (l = Pl(13, a, t, u)),
            (l.elementType = zt),
            (l.lanes = n),
            l
          );
        case Gl:
          return (
            (l = Pl(19, a, t, u)),
            (l.elementType = Gl),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Hl:
                c = 10;
                break l;
              case Wt:
                c = 9;
                break l;
              case nt:
                c = 11;
                break l;
              case x:
                c = 14;
                break l;
              case Ql:
                ((c = 16), (e = null));
                break l;
            }
          ((c = 29),
            (a = Error(r(130, l === null ? "null" : typeof l, ""))),
            (e = null));
      }
    return (
      (t = Pl(c, a, t, u)),
      (t.elementType = l),
      (t.type = e),
      (t.lanes = n),
      t
    );
  }
  function Da(l, t, a, e) {
    return ((l = Pl(7, l, e, t)), (l.lanes = a), l);
  }
  function Ec(l, t, a) {
    return ((l = Pl(6, l, null, t)), (l.lanes = a), l);
  }
  function ym(l) {
    var t = Pl(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function bc(l, t, a) {
    return (
      (t = Pl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var vm = new WeakMap();
  function mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = vm.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: yi(t) }), vm.set(l, t), t);
    }
    return { value: l, source: t, stack: yi(t) };
  }
  var te = [],
    ae = 0,
    ju = null,
    je = 0,
    st = [],
    yt = 0,
    It = null,
    pt = 1,
    _t = "";
  function Rt(l, t) {
    ((te[ae++] = je), (te[ae++] = ju), (ju = l), (je = t));
  }
  function dm(l, t, a) {
    ((st[yt++] = pt), (st[yt++] = _t), (st[yt++] = It), (It = l));
    var e = pt;
    l = _t;
    var u = 32 - kl(e) - 1;
    ((e &= ~(1 << u)), (a += 1));
    var n = 32 - kl(t) + u;
    if (30 < n) {
      var c = u - (u % 5);
      ((n = (e & ((1 << c) - 1)).toString(32)),
        (e >>= c),
        (u -= c),
        (pt = (1 << (32 - kl(t) + u)) | (a << u) | e),
        (_t = n + l));
    } else ((pt = (1 << n) | (a << u) | e), (_t = l));
  }
  function zc(l) {
    l.return !== null && (Rt(l, 1), dm(l, 1, 0));
  }
  function Tc(l) {
    for (; l === ju; )
      ((ju = te[--ae]), (te[ae] = null), (je = te[--ae]), (te[ae] = null));
    for (; l === It; )
      ((It = st[--yt]),
        (st[yt] = null),
        (_t = st[--yt]),
        (st[yt] = null),
        (pt = st[--yt]),
        (st[yt] = null));
  }
  function om(l, t) {
    ((st[yt++] = pt),
      (st[yt++] = _t),
      (st[yt++] = It),
      (pt = t.id),
      (_t = t.overflow),
      (It = l));
  }
  var Ml = null,
    ml = null,
    K = !1,
    Pt = null,
    vt = !1,
    Ac = Error(r(519));
  function la(l) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Ze(mt(t, l)), Ac);
  }
  function hm(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Ol] = l), (t[jl] = e), a)) {
      case "dialog":
        (Z("cancel", t), Z("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Z("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mu.length; a++) Z(mu[a], t);
        break;
      case "source":
        Z("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Z("error", t), Z("load", t));
        break;
      case "details":
        Z("toggle", t);
        break;
      case "input":
        (Z("invalid", t),
          Di(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0,
          ));
        break;
      case "select":
        Z("invalid", t);
        break;
      case "textarea":
        (Z("invalid", t), Ui(t, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      q0(t.textContent, a)
        ? (e.popover != null && (Z("beforetoggle", t), Z("toggle", t)),
          e.onScroll != null && Z("scroll", t),
          e.onScrollEnd != null && Z("scrollend", t),
          e.onClick != null && (t.onclick = Ht),
          (t = !0))
        : (t = !1),
      t || la(l, !0));
  }
  function rm(l) {
    for (Ml = l.return; Ml; )
      switch (Ml.tag) {
        case 5:
        case 31:
        case 13:
          vt = !1;
          return;
        case 27:
        case 3:
          vt = !0;
          return;
        default:
          Ml = Ml.return;
      }
  }
  function ee(l) {
    if (l !== Ml) return !1;
    if (!K) return (rm(l), (K = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Vf(l.type, l.memoizedProps))),
        (a = !a)),
      a && ml && la(l),
      rm(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(r(317));
      ml = Z0(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(r(317));
      ml = Z0(l);
    } else
      t === 27
        ? ((t = ml), oa(l.type) ? ((l = wf), (wf = null), (ml = l)) : (ml = t))
        : (ml = Ml ? ot(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Na() {
    ((ml = Ml = null), (K = !1));
  }
  function pc() {
    var l = Pt;
    return (
      l !== null &&
        (Kl === null ? (Kl = l) : Kl.push.apply(Kl, l), (Pt = null)),
      l
    );
  }
  function Ze(l) {
    Pt === null ? (Pt = [l]) : Pt.push(l);
  }
  var _c = s(null),
    Ua = null,
    Bt = null;
  function ta(l, t, a) {
    (O(_c, t._currentValue), (t._currentValue = a));
  }
  function Yt(l) {
    ((l._currentValue = _c.current), T(_c));
  }
  function Oc(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Mc(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var i = 0; i < t.length; i++)
            if (f.context === t[i]) {
              ((n.lanes |= a),
                (f = n.alternate),
                f !== null && (f.lanes |= a),
                Oc(n.return, a, l),
                e || (c = null));
              break l;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(r(341));
        ((c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          Oc(c, a, l),
          (c = null));
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((u = c.sibling), u !== null)) {
            ((u.return = c.return), (c = u));
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function ue(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(r(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = u.type;
          Il(u.pendingProps.value, c.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (u === P.current) {
        if (((c = u.alternate), c === null)) throw Error(r(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(ou) : (l = [ou]));
      }
      u = u.return;
    }
    (l !== null && Mc(t, l, a, e), (t.flags |= 262144));
  }
  function Zu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Il(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ha(l) {
    ((Ua = l),
      (Bt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Dl(l) {
    return gm(Ua, l);
  }
  function Vu(l, t) {
    return (Ua === null && Ha(l), gm(l, t));
  }
  function gm(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Bt === null)) {
      if (l === null) throw Error(r(308));
      ((Bt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Bt = Bt.next = t;
    return a;
  }
  var Mv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Dv = p.unstable_scheduleCallback,
    Nv = p.unstable_NormalPriority,
    Sl = {
      $$typeof: Hl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Dc() {
    return { controller: new Mv(), data: new Map(), refCount: 0 };
  }
  function Ve(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Dv(Nv, function () {
          l.controller.abort();
        }));
  }
  var Le = null,
    Nc = 0,
    ne = 0,
    ce = null;
  function Uv(l, t) {
    if (Le === null) {
      var a = (Le = []);
      ((Nc = 0),
        (ne = Cf()),
        (ce = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return (Nc++, t.then(Sm, Sm), t);
  }
  function Sm() {
    if (--Nc === 0 && Le !== null) {
      ce !== null && (ce.status = "fulfilled");
      var l = Le;
      ((Le = null), (ne = 0), (ce = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Hv(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((e.status = "fulfilled"), (e.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      e
    );
  }
  var Em = E.S;
  E.S = function (l, t) {
    ((a0 = $l()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Uv(l, t),
      Em !== null && Em(l, t));
  };
  var qa = s(null);
  function Uc() {
    var l = qa.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Lu(l, t) {
    t === null ? O(qa, qa.current) : O(qa, t.pool);
  }
  function bm() {
    var l = Uc();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var fe = Error(r(460)),
    Hc = Error(r(474)),
    xu = Error(r(542)),
    Ku = { then: function () {} };
  function zm(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Tm(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Ht, Ht), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), pm(l), l);
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (((l = fl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(r(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = e));
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), pm(l), l);
        }
        throw ((Ra = t), fe);
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Ra = a), fe)
        : a;
    }
  }
  var Ra = null;
  function Am() {
    if (Ra === null) throw Error(r(459));
    var l = Ra;
    return ((Ra = null), l);
  }
  function pm(l) {
    if (l === fe || l === xu) throw Error(r(483));
  }
  var ie = null,
    xe = 0;
  function Ju(l) {
    var t = xe;
    return ((xe += 1), ie === null && (ie = []), Tm(ie, l, t));
  }
  function Ke(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function wu(l, t) {
    throw t.$$typeof === yl
      ? Error(r(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function _m(l) {
    function t(y, m) {
      if (l) {
        var d = y.deletions;
        d === null ? ((y.deletions = [m]), (y.flags |= 16)) : d.push(m);
      }
    }
    function a(y, m) {
      if (!l) return null;
      for (; m !== null; ) (t(y, m), (m = m.sibling));
      return null;
    }
    function e(y) {
      for (var m = new Map(); y !== null; )
        (y.key !== null ? m.set(y.key, y) : m.set(y.index, y), (y = y.sibling));
      return m;
    }
    function u(y, m) {
      return ((y = Ct(y, m)), (y.index = 0), (y.sibling = null), y);
    }
    function n(y, m, d) {
      return (
        (y.index = d),
        l
          ? ((d = y.alternate),
            d !== null
              ? ((d = d.index), d < m ? ((y.flags |= 67108866), m) : d)
              : ((y.flags |= 67108866), m))
          : ((y.flags |= 1048576), m)
      );
    }
    function c(y) {
      return (l && y.alternate === null && (y.flags |= 67108866), y);
    }
    function f(y, m, d, b) {
      return m === null || m.tag !== 6
        ? ((m = Ec(d, y.mode, b)), (m.return = y), m)
        : ((m = u(m, d)), (m.return = y), m);
    }
    function i(y, m, d, b) {
      var U = d.type;
      return U === Cl
        ? S(y, m, d.props.children, b, d.key)
        : m !== null &&
            (m.elementType === U ||
              (typeof U == "object" &&
                U !== null &&
                U.$$typeof === Ql &&
                Ca(U) === m.type))
          ? ((m = u(m, d.props)), Ke(m, d), (m.return = y), m)
          : ((m = Xu(d.type, d.key, d.props, null, y.mode, b)),
            Ke(m, d),
            (m.return = y),
            m);
    }
    function o(y, m, d, b) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== d.containerInfo ||
        m.stateNode.implementation !== d.implementation
        ? ((m = bc(d, y.mode, b)), (m.return = y), m)
        : ((m = u(m, d.children || [])), (m.return = y), m);
    }
    function S(y, m, d, b, U) {
      return m === null || m.tag !== 7
        ? ((m = Da(d, y.mode, b, U)), (m.return = y), m)
        : ((m = u(m, d)), (m.return = y), m);
    }
    function z(y, m, d) {
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return ((m = Ec("" + m, y.mode, d)), (m.return = y), m);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case wl:
            return (
              (d = Xu(m.type, m.key, m.props, null, y.mode, d)),
              Ke(d, m),
              (d.return = y),
              d
            );
          case Yl:
            return ((m = bc(m, y.mode, d)), (m.return = y), m);
          case Ql:
            return ((m = Ca(m)), z(y, m, d));
        }
        if (gt(m) || Xl(m))
          return ((m = Da(m, y.mode, d, null)), (m.return = y), m);
        if (typeof m.then == "function") return z(y, Ju(m), d);
        if (m.$$typeof === Hl) return z(y, Vu(y, m), d);
        wu(y, m);
      }
      return null;
    }
    function h(y, m, d, b) {
      var U = m !== null ? m.key : null;
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return U !== null ? null : f(y, m, "" + d, b);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case wl:
            return d.key === U ? i(y, m, d, b) : null;
          case Yl:
            return d.key === U ? o(y, m, d, b) : null;
          case Ql:
            return ((d = Ca(d)), h(y, m, d, b));
        }
        if (gt(d) || Xl(d)) return U !== null ? null : S(y, m, d, b, null);
        if (typeof d.then == "function") return h(y, m, Ju(d), b);
        if (d.$$typeof === Hl) return h(y, m, Vu(y, d), b);
        wu(y, d);
      }
      return null;
    }
    function g(y, m, d, b, U) {
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return ((y = y.get(d) || null), f(m, y, "" + b, U));
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case wl:
            return (
              (y = y.get(b.key === null ? d : b.key) || null),
              i(m, y, b, U)
            );
          case Yl:
            return (
              (y = y.get(b.key === null ? d : b.key) || null),
              o(m, y, b, U)
            );
          case Ql:
            return ((b = Ca(b)), g(y, m, d, b, U));
        }
        if (gt(b) || Xl(b))
          return ((y = y.get(d) || null), S(m, y, b, U, null));
        if (typeof b.then == "function") return g(y, m, d, Ju(b), U);
        if (b.$$typeof === Hl) return g(y, m, d, Vu(m, b), U);
        wu(m, b);
      }
      return null;
    }
    function M(y, m, d, b) {
      for (
        var U = null, W = null, N = m, Q = (m = 0), L = null;
        N !== null && Q < d.length;
        Q++
      ) {
        N.index > Q ? ((L = N), (N = null)) : (L = N.sibling);
        var $ = h(y, N, d[Q], b);
        if ($ === null) {
          N === null && (N = L);
          break;
        }
        (l && N && $.alternate === null && t(y, N),
          (m = n($, m, Q)),
          W === null ? (U = $) : (W.sibling = $),
          (W = $),
          (N = L));
      }
      if (Q === d.length) return (a(y, N), K && Rt(y, Q), U);
      if (N === null) {
        for (; Q < d.length; Q++)
          ((N = z(y, d[Q], b)),
            N !== null &&
              ((m = n(N, m, Q)),
              W === null ? (U = N) : (W.sibling = N),
              (W = N)));
        return (K && Rt(y, Q), U);
      }
      for (N = e(N); Q < d.length; Q++)
        ((L = g(N, y, Q, d[Q], b)),
          L !== null &&
            (l && L.alternate !== null && N.delete(L.key === null ? Q : L.key),
            (m = n(L, m, Q)),
            W === null ? (U = L) : (W.sibling = L),
            (W = L)));
      return (
        l &&
          N.forEach(function (Ea) {
            return t(y, Ea);
          }),
        K && Rt(y, Q),
        U
      );
    }
    function q(y, m, d, b) {
      if (d == null) throw Error(r(151));
      for (
        var U = null, W = null, N = m, Q = (m = 0), L = null, $ = d.next();
        N !== null && !$.done;
        Q++, $ = d.next()
      ) {
        N.index > Q ? ((L = N), (N = null)) : (L = N.sibling);
        var Ea = h(y, N, $.value, b);
        if (Ea === null) {
          N === null && (N = L);
          break;
        }
        (l && N && Ea.alternate === null && t(y, N),
          (m = n(Ea, m, Q)),
          W === null ? (U = Ea) : (W.sibling = Ea),
          (W = Ea),
          (N = L));
      }
      if ($.done) return (a(y, N), K && Rt(y, Q), U);
      if (N === null) {
        for (; !$.done; Q++, $ = d.next())
          (($ = z(y, $.value, b)),
            $ !== null &&
              ((m = n($, m, Q)),
              W === null ? (U = $) : (W.sibling = $),
              (W = $)));
        return (K && Rt(y, Q), U);
      }
      for (N = e(N); !$.done; Q++, $ = d.next())
        (($ = g(N, y, Q, $.value, b)),
          $ !== null &&
            (l && $.alternate !== null && N.delete($.key === null ? Q : $.key),
            (m = n($, m, Q)),
            W === null ? (U = $) : (W.sibling = $),
            (W = $)));
      return (
        l &&
          N.forEach(function (Vd) {
            return t(y, Vd);
          }),
        K && Rt(y, Q),
        U
      );
    }
    function nl(y, m, d, b) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Cl &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case wl:
            l: {
              for (var U = d.key; m !== null; ) {
                if (m.key === U) {
                  if (((U = d.type), U === Cl)) {
                    if (m.tag === 7) {
                      (a(y, m.sibling),
                        (b = u(m, d.props.children)),
                        (b.return = y),
                        (y = b));
                      break l;
                    }
                  } else if (
                    m.elementType === U ||
                    (typeof U == "object" &&
                      U !== null &&
                      U.$$typeof === Ql &&
                      Ca(U) === m.type)
                  ) {
                    (a(y, m.sibling),
                      (b = u(m, d.props)),
                      Ke(b, d),
                      (b.return = y),
                      (y = b));
                    break l;
                  }
                  a(y, m);
                  break;
                } else t(y, m);
                m = m.sibling;
              }
              d.type === Cl
                ? ((b = Da(d.props.children, y.mode, b, d.key)),
                  (b.return = y),
                  (y = b))
                : ((b = Xu(d.type, d.key, d.props, null, y.mode, b)),
                  Ke(b, d),
                  (b.return = y),
                  (y = b));
            }
            return c(y);
          case Yl:
            l: {
              for (U = d.key; m !== null; ) {
                if (m.key === U)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === d.containerInfo &&
                    m.stateNode.implementation === d.implementation
                  ) {
                    (a(y, m.sibling),
                      (b = u(m, d.children || [])),
                      (b.return = y),
                      (y = b));
                    break l;
                  } else {
                    a(y, m);
                    break;
                  }
                else t(y, m);
                m = m.sibling;
              }
              ((b = bc(d, y.mode, b)), (b.return = y), (y = b));
            }
            return c(y);
          case Ql:
            return ((d = Ca(d)), nl(y, m, d, b));
        }
        if (gt(d)) return M(y, m, d, b);
        if (Xl(d)) {
          if (((U = Xl(d)), typeof U != "function")) throw Error(r(150));
          return ((d = U.call(d)), q(y, m, d, b));
        }
        if (typeof d.then == "function") return nl(y, m, Ju(d), b);
        if (d.$$typeof === Hl) return nl(y, m, Vu(y, d), b);
        wu(y, d);
      }
      return (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
        ? ((d = "" + d),
          m !== null && m.tag === 6
            ? (a(y, m.sibling), (b = u(m, d)), (b.return = y), (y = b))
            : (a(y, m), (b = Ec(d, y.mode, b)), (b.return = y), (y = b)),
          c(y))
        : a(y, m);
    }
    return function (y, m, d, b) {
      try {
        xe = 0;
        var U = nl(y, m, d, b);
        return ((ie = null), U);
      } catch (N) {
        if (N === fe || N === xu) throw N;
        var W = Pl(29, N, null, y.mode);
        return ((W.lanes = b), (W.return = y), W);
      }
    };
  }
  var Ba = _m(!0),
    Om = _m(!1),
    aa = !1;
  function qc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Cc(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ea(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (F & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = Qu(l)),
        mm(l, null, a),
        t
      );
    }
    return (Gu(l, e, t, a), Qu(l));
  }
  function Je(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), gi(l, a));
    }
  }
  function Rc(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = c) : (n = n.next = c), (a = a.next));
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Bc = !1;
  function we() {
    if (Bc) {
      var l = ce;
      if (l !== null) throw l;
    }
  }
  function We(l, t, a, e) {
    Bc = !1;
    var u = l.updateQueue;
    aa = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var i = f,
        o = i.next;
      ((i.next = null), c === null ? (n = o) : (c.next = o), (c = i));
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (f = S.lastBaseUpdate),
        f !== c &&
          (f === null ? (S.firstBaseUpdate = o) : (f.next = o),
          (S.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var z = u.baseState;
      ((c = 0), (S = o = i = null), (f = n));
      do {
        var h = f.lane & -536870913,
          g = h !== f.lane;
        if (g ? (V & h) === h : (e & h) === h) {
          (h !== 0 && h === ne && (Bc = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var M = l,
              q = f;
            h = t;
            var nl = a;
            switch (q.tag) {
              case 1:
                if (((M = q.payload), typeof M == "function")) {
                  z = M.call(nl, z, h);
                  break l;
                }
                z = M;
                break l;
              case 3:
                M.flags = (M.flags & -65537) | 128;
              case 0:
                if (
                  ((M = q.payload),
                  (h = typeof M == "function" ? M.call(nl, z, h) : M),
                  h == null)
                )
                  break l;
                z = C({}, z, h);
                break l;
              case 2:
                aa = !0;
            }
          }
          ((h = f.callback),
            h !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [h]) : g.push(h)));
        } else
          ((g = {
            lane: h,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            S === null ? ((o = S = g), (i = z)) : (S = S.next = g),
            (c |= h));
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break;
          ((g = f),
            (f = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null));
        }
      } while (!0);
      (S === null && (i = z),
        (u.baseState = i),
        (u.firstBaseUpdate = o),
        (u.lastBaseUpdate = S),
        n === null && (u.shared.lanes = 0),
        (ma |= c),
        (l.lanes = c),
        (l.memoizedState = z));
    }
  }
  function Mm(l, t) {
    if (typeof l != "function") throw Error(r(191, l));
    l.call(t);
  }
  function Dm(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) Mm(a[l], t);
  }
  var me = s(null),
    Wu = s(0);
  function Nm(l, t) {
    ((l = Kt), O(Wu, l), O(me, t), (Kt = l | t.baseLanes));
  }
  function Yc() {
    (O(Wu, Kt), O(me, me.current));
  }
  function Gc() {
    ((Kt = Wu.current), T(me), T(Wu));
  }
  var lt = s(null),
    dt = null;
  function na(l) {
    var t = l.alternate;
    (O(rl, rl.current & 1),
      O(lt, l),
      dt === null &&
        (t === null || me.current !== null || t.memoizedState !== null) &&
        (dt = l));
  }
  function Qc(l) {
    (O(rl, rl.current), O(lt, l), dt === null && (dt = l));
  }
  function Um(l) {
    l.tag === 22
      ? (O(rl, rl.current), O(lt, l), dt === null && (dt = l))
      : ca();
  }
  function ca() {
    (O(rl, rl.current), O(lt, lt.current));
  }
  function tt(l) {
    (T(lt), dt === l && (dt = null), T(rl));
  }
  var rl = s(0);
  function $u(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Kf(a) || Jf(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Gt = 0,
    G = null,
    el = null,
    El = null,
    Fu = !1,
    se = !1,
    Ya = !1,
    ku = 0,
    $e = 0,
    ye = null,
    qv = 0;
  function dl() {
    throw Error(r(321));
  }
  function Xc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Il(l[a], t[a])) return !1;
    return !0;
  }
  function jc(l, t, a, e, u, n) {
    return (
      (Gt = n),
      (G = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (E.H = l === null || l.memoizedState === null ? ds : tf),
      (Ya = !1),
      (n = a(e, u)),
      (Ya = !1),
      se && (n = qm(t, a, e, u)),
      Hm(l),
      n
    );
  }
  function Hm(l) {
    E.H = Ie;
    var t = el !== null && el.next !== null;
    if (((Gt = 0), (El = el = G = null), (Fu = !1), ($e = 0), (ye = null), t))
      throw Error(r(300));
    l === null ||
      bl ||
      ((l = l.dependencies), l !== null && Zu(l) && (bl = !0));
  }
  function qm(l, t, a, e) {
    G = l;
    var u = 0;
    do {
      if ((se && (ye = null), ($e = 0), (se = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (El = el = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((E.H = os), (n = t(a, e)));
    } while (se);
    return n;
  }
  function Cv() {
    var l = E.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fe(t) : t),
      (l = l.useState()[0]),
      (el !== null ? el.memoizedState : null) !== l && (G.flags |= 1024),
      t
    );
  }
  function Zc() {
    var l = ku !== 0;
    return ((ku = 0), l);
  }
  function Vc(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function Lc(l) {
    if (Fu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      Fu = !1;
    }
    ((Gt = 0), (El = el = G = null), (se = !1), ($e = ku = 0), (ye = null));
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (El === null ? (G.memoizedState = El = l) : (El = El.next = l), El);
  }
  function gl() {
    if (el === null) {
      var l = G.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = El === null ? G.memoizedState : El.next;
    if (t !== null) ((El = t), (el = l));
    else {
      if (l === null)
        throw G.alternate === null ? Error(r(467)) : Error(r(310));
      ((el = l),
        (l = {
          memoizedState: el.memoizedState,
          baseState: el.baseState,
          baseQueue: el.baseQueue,
          queue: el.queue,
          next: null,
        }),
        El === null ? (G.memoizedState = El = l) : (El = El.next = l));
    }
    return El;
  }
  function Iu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fe(l) {
    var t = $e;
    return (
      ($e += 1),
      ye === null && (ye = []),
      (l = Tm(ye, l, t)),
      (t = G),
      (El === null ? t.memoizedState : El.next) === null &&
        ((t = t.alternate),
        (E.H = t === null || t.memoizedState === null ? ds : tf)),
      l
    );
  }
  function Pu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fe(l);
      if (l.$$typeof === Hl) return Dl(l);
    }
    throw Error(r(438, String(l)));
  }
  function xc(l) {
    var t = null,
      a = G.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = G.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Iu()), (G.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = ja;
    return (t.index++, a);
  }
  function Qt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ln(l) {
    var t = gl();
    return Kc(t, el, l);
  }
  function Kc(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        ((u.next = n.next), (n.next = c));
      }
      ((t.baseQueue = u = n), (e.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var f = (c = null),
        i = null,
        o = t,
        S = !1;
      do {
        var z = o.lane & -536870913;
        if (z !== o.lane ? (V & z) === z : (Gt & z) === z) {
          var h = o.revertLane;
          if (h === 0)
            (i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: o.action,
                  hasEagerState: o.hasEagerState,
                  eagerState: o.eagerState,
                  next: null,
                }),
              z === ne && (S = !0));
          else if ((Gt & h) === h) {
            ((o = o.next), h === ne && (S = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: o.revertLane,
              gesture: null,
              action: o.action,
              hasEagerState: o.hasEagerState,
              eagerState: o.eagerState,
              next: null,
            }),
              i === null ? ((f = i = z), (c = n)) : (i = i.next = z),
              (G.lanes |= h),
              (ma |= h));
          ((z = o.action),
            Ya && a(n, z),
            (n = o.hasEagerState ? o.eagerState : a(n, z)));
        } else
          ((h = {
            lane: z,
            revertLane: o.revertLane,
            gesture: o.gesture,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null,
          }),
            i === null ? ((f = i = h), (c = n)) : (i = i.next = h),
            (G.lanes |= z),
            (ma |= z));
        o = o.next;
      } while (o !== null && o !== t);
      if (
        (i === null ? (c = n) : (i.next = f),
        !Il(n, l.memoizedState) && ((bl = !0), S && ((a = ce), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = i),
        (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function Jc(l) {
    var t = gl(),
      a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var c = (u = u.next);
      do ((n = l(n, c.action)), (c = c.next));
      while (c !== u);
      (Il(n, t.memoizedState) || (bl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function Cm(l, t, a) {
    var e = G,
      u = gl(),
      n = K;
    if (n) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var c = !Il((el || u).memoizedState, a);
    if (
      (c && ((u.memoizedState = a), (bl = !0)),
      (u = u.queue),
      $c(Ym.bind(null, e, u, l), [l]),
      u.getSnapshot !== t || c || (El !== null && El.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ve(9, { destroy: void 0 }, Bm.bind(null, e, u, a, t), null),
        fl === null)
      )
        throw Error(r(349));
      n || (Gt & 127) !== 0 || Rm(e, t, a);
    }
    return a;
  }
  function Rm(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = G.updateQueue),
      t === null
        ? ((t = Iu()), (G.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Bm(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), Gm(t) && Qm(l));
  }
  function Ym(l, t, a) {
    return a(function () {
      Gm(t) && Qm(l);
    });
  }
  function Gm(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Il(l, a);
    } catch {
      return !0;
    }
  }
  function Qm(l) {
    var t = Ma(l, 2);
    t !== null && Jl(t, l, 2);
  }
  function wc(l) {
    var t = Bl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ya)) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Xm(l, t, a, e) {
    return ((l.baseState = a), Kc(l, el, typeof e == "function" ? e : Qt));
  }
  function Rv(l, t, a, e, u) {
    if (en(l)) throw Error(r(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      (E.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), jm(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function jm(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = E.T,
        c = {};
      E.T = c;
      try {
        var f = a(u, e),
          i = E.S;
        (i !== null && i(c, f), Zm(l, t, f));
      } catch (o) {
        Wc(l, t, o);
      } finally {
        (n !== null && c.types !== null && (n.types = c.types), (E.T = n));
      }
    } else
      try {
        ((n = a(u, e)), Zm(l, t, n));
      } catch (o) {
        Wc(l, t, o);
      }
  }
  function Zm(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            Vm(l, t, e);
          },
          function (e) {
            return Wc(l, t, e);
          },
        )
      : Vm(l, t, a);
  }
  function Vm(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Lm(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), jm(l, a))));
  }
  function Wc(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do ((t.status = "rejected"), (t.reason = a), Lm(t), (t = t.next));
      while (t !== e);
    }
    l.action = null;
  }
  function Lm(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function xm(l, t) {
    return t;
  }
  function Km(l, t) {
    if (K) {
      var a = fl.formState;
      if (a !== null) {
        l: {
          var e = G;
          if (K) {
            if (ml) {
              t: {
                for (var u = ml, n = vt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = ot(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((ml = ot(u.nextSibling)), (e = u.data === "F!"));
                break l;
              }
            }
            la(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = Bl()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xm,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = ss.bind(null, G, e)),
      (e.dispatch = a),
      (e = wc(!1)),
      (n = lf.bind(null, G, !1, e.queue)),
      (e = Bl()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = Rv.bind(null, G, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function Jm(l) {
    var t = gl();
    return wm(t, el, l);
  }
  function wm(l, t, a) {
    if (
      ((t = Kc(l, t, xm)[0]),
      (l = ln(Qt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = Fe(t);
      } catch (c) {
        throw c === fe ? xu : c;
      }
    else e = t;
    t = gl();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((G.flags |= 2048),
        ve(9, { destroy: void 0 }, Bv.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function Bv(l, t) {
    l.action = t;
  }
  function Wm(l) {
    var t = gl(),
      a = el;
    if (a !== null) return wm(t, a, l);
    (gl(), (t = t.memoizedState), (a = gl()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function ve(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = G.updateQueue),
      t === null && ((t = Iu()), (G.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function $m() {
    return gl().memoizedState;
  }
  function tn(l, t, a, e) {
    var u = Bl();
    ((G.flags |= l),
      (u.memoizedState = ve(
        1 | t,
        { destroy: void 0 },
        a,
        e === void 0 ? null : e,
      )));
  }
  function an(l, t, a, e) {
    var u = gl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    el !== null && e !== null && Xc(e, el.memoizedState.deps)
      ? (u.memoizedState = ve(t, n, a, e))
      : ((G.flags |= l), (u.memoizedState = ve(1 | t, n, a, e)));
  }
  function Fm(l, t) {
    tn(8390656, 8, l, t);
  }
  function $c(l, t) {
    an(2048, 8, l, t);
  }
  function Yv(l) {
    G.flags |= 4;
    var t = G.updateQueue;
    if (t === null) ((t = Iu()), (G.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function km(l) {
    var t = gl().memoizedState;
    return (
      Yv({ ref: t, nextImpl: l }),
      function () {
        if ((F & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Im(l, t) {
    return an(4, 2, l, t);
  }
  function Pm(l, t) {
    return an(4, 4, l, t);
  }
  function ls(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function ts(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), an(4, 4, ls.bind(null, t, l), a));
  }
  function Fc() {}
  function as(l, t) {
    var a = gl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Xc(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function es(l, t) {
    var a = gl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Xc(t, e[1])) return e[0];
    if (((e = l()), Ya)) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return ((a.memoizedState = [e, t]), e);
  }
  function kc(l, t, a) {
    return a === void 0 || ((Gt & 1073741824) !== 0 && (V & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = u0()), (G.lanes |= l), (ma |= l), a);
  }
  function us(l, t, a, e) {
    return Il(a, t)
      ? a
      : me.current !== null
        ? ((l = kc(l, a, e)), Il(l, t) || (bl = !0), l)
        : (Gt & 42) === 0 || ((Gt & 1073741824) !== 0 && (V & 261930) === 0)
          ? ((bl = !0), (l.memoizedState = a))
          : ((l = u0()), (G.lanes |= l), (ma |= l), t);
  }
  function ns(l, t, a, e, u) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var c = E.T,
      f = {};
    ((E.T = f), lf(l, !1, t, a));
    try {
      var i = u(),
        o = E.S;
      if (
        (o !== null && o(f, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var S = Hv(i, e);
        ke(l, t, S, ut(l));
      } else ke(l, t, e, ut(l));
    } catch (z) {
      ke(l, t, { then: function () {}, status: "rejected", reason: z }, ut());
    } finally {
      ((_.p = n),
        c !== null && f.types !== null && (c.types = f.types),
        (E.T = c));
    }
  }
  function Gv() {}
  function Ic(l, t, a, e) {
    if (l.tag !== 5) throw Error(r(476));
    var u = cs(l).queue;
    ns(
      l,
      u,
      t,
      R,
      a === null
        ? Gv
        : function () {
            return (fs(l), a(e));
          },
    );
  }
  function cs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: R,
      baseState: R,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: R,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function fs(l) {
    var t = cs(l);
    (t.next === null && (t = l.alternate.memoizedState),
      ke(l, t.next.queue, {}, ut()));
  }
  function Pc() {
    return Dl(ou);
  }
  function is() {
    return gl().memoizedState;
  }
  function ms() {
    return gl().memoizedState;
  }
  function Qv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ut();
          l = ea(a);
          var e = ua(t, l, a);
          (e !== null && (Jl(e, t, a), Je(e, t, a)),
            (t = { cache: Dc() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Xv(l, t, a) {
    var e = ut();
    ((a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      en(l)
        ? ys(t, a)
        : ((a = gc(l, t, a, e)), a !== null && (Jl(a, l, e), vs(a, t, e))));
  }
  function ss(l, t, a) {
    var e = ut();
    ke(l, t, a, e);
  }
  function ke(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (en(l)) ys(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            f = n(c, a);
          if (((u.hasEagerState = !0), (u.eagerState = f), Il(f, c)))
            return (Gu(l, t, u, 0), fl === null && Yu(), !1);
        } catch {}
      if (((a = gc(l, t, u, e)), a !== null))
        return (Jl(a, l, e), vs(a, t, e), !0);
    }
    return !1;
  }
  function lf(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Cf(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      en(l))
    ) {
      if (t) throw Error(r(479));
    } else ((t = gc(l, a, e, 2)), t !== null && Jl(t, l, 2));
  }
  function en(l) {
    var t = l.alternate;
    return l === G || (t !== null && t === G);
  }
  function ys(l, t) {
    se = Fu = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function vs(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), gi(l, a));
    }
  }
  var Ie = {
    readContext: Dl,
    use: Pu,
    useCallback: dl,
    useContext: dl,
    useEffect: dl,
    useImperativeHandle: dl,
    useLayoutEffect: dl,
    useInsertionEffect: dl,
    useMemo: dl,
    useReducer: dl,
    useRef: dl,
    useState: dl,
    useDebugValue: dl,
    useDeferredValue: dl,
    useTransition: dl,
    useSyncExternalStore: dl,
    useId: dl,
    useHostTransitionStatus: dl,
    useFormState: dl,
    useActionState: dl,
    useOptimistic: dl,
    useMemoCache: dl,
    useCacheRefresh: dl,
  };
  Ie.useEffectEvent = dl;
  var ds = {
      readContext: Dl,
      use: Pu,
      useCallback: function (l, t) {
        return ((Bl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Dl,
      useEffect: Fm,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          tn(4194308, 4, ls.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return tn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        tn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Bl();
        t = t === void 0 ? null : t;
        var e = l();
        if (Ya) {
          $t(!0);
          try {
            l();
          } finally {
            $t(!1);
          }
        }
        return ((a.memoizedState = [e, t]), e);
      },
      useReducer: function (l, t, a) {
        var e = Bl();
        if (a !== void 0) {
          var u = a(t);
          if (Ya) {
            $t(!0);
            try {
              a(t);
            } finally {
              $t(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = Xv.bind(null, G, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Bl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = wc(l);
        var t = l.queue,
          a = ss.bind(null, G, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: Fc,
      useDeferredValue: function (l, t) {
        var a = Bl();
        return kc(a, l, t);
      },
      useTransition: function () {
        var l = wc(!1);
        return (
          (l = ns.bind(null, G, l.queue, !0, !1)),
          (Bl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = G,
          u = Bl();
        if (K) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = t()), fl === null)) throw Error(r(349));
          (V & 127) !== 0 || Rm(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          Fm(Ym.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          ve(9, { destroy: void 0 }, Bm.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Bl(),
          t = fl.identifierPrefix;
        if (K) {
          var a = _t,
            e = pt;
          ((a = (e & ~(1 << (32 - kl(e) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = ku++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = qv++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: Pc,
      useFormState: Km,
      useActionState: Km,
      useOptimistic: function (l) {
        var t = Bl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = lf.bind(null, G, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: xc,
      useCacheRefresh: function () {
        return (Bl().memoizedState = Qv.bind(null, G));
      },
      useEffectEvent: function (l) {
        var t = Bl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((F & 2) !== 0) throw Error(r(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    tf = {
      readContext: Dl,
      use: Pu,
      useCallback: as,
      useContext: Dl,
      useEffect: $c,
      useImperativeHandle: ts,
      useInsertionEffect: Im,
      useLayoutEffect: Pm,
      useMemo: es,
      useReducer: ln,
      useRef: $m,
      useState: function () {
        return ln(Qt);
      },
      useDebugValue: Fc,
      useDeferredValue: function (l, t) {
        var a = gl();
        return us(a, el.memoizedState, l, t);
      },
      useTransition: function () {
        var l = ln(Qt)[0],
          t = gl().memoizedState;
        return [typeof l == "boolean" ? l : Fe(l), t];
      },
      useSyncExternalStore: Cm,
      useId: is,
      useHostTransitionStatus: Pc,
      useFormState: Jm,
      useActionState: Jm,
      useOptimistic: function (l, t) {
        var a = gl();
        return Xm(a, el, l, t);
      },
      useMemoCache: xc,
      useCacheRefresh: ms,
    };
  tf.useEffectEvent = km;
  var os = {
    readContext: Dl,
    use: Pu,
    useCallback: as,
    useContext: Dl,
    useEffect: $c,
    useImperativeHandle: ts,
    useInsertionEffect: Im,
    useLayoutEffect: Pm,
    useMemo: es,
    useReducer: Jc,
    useRef: $m,
    useState: function () {
      return Jc(Qt);
    },
    useDebugValue: Fc,
    useDeferredValue: function (l, t) {
      var a = gl();
      return el === null ? kc(a, l, t) : us(a, el.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Jc(Qt)[0],
        t = gl().memoizedState;
      return [typeof l == "boolean" ? l : Fe(l), t];
    },
    useSyncExternalStore: Cm,
    useId: is,
    useHostTransitionStatus: Pc,
    useFormState: Wm,
    useActionState: Wm,
    useOptimistic: function (l, t) {
      var a = gl();
      return el !== null
        ? Xm(a, el, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: xc,
    useCacheRefresh: ms,
  };
  os.useEffectEvent = km;
  function af(l, t, a, e) {
    ((t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : C({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var ef = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = ut(),
        u = ea(e);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = ua(l, u, e)),
        t !== null && (Jl(t, l, e), Je(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = ut(),
        u = ea(e);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = ua(l, u, e)),
        t !== null && (Jl(t, l, e), Je(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = ut(),
        e = ea(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = ua(l, e, a)),
        t !== null && (Jl(t, l, a), Je(t, l, a)));
    },
  };
  function hs(l, t, a, e, u, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Qe(a, e) || !Qe(u, n)
          : !0
    );
  }
  function rs(l, t, a, e) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && ef.enqueueReplaceState(t, t.state, null));
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = C({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function gs(l) {
    Bu(l);
  }
  function Ss(l) {
    console.error(l);
  }
  function Es(l) {
    Bu(l);
  }
  function un(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function bs(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function uf(l, t, a) {
    return (
      (a = ea(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        un(l, t);
      }),
      a
    );
  }
  function zs(l) {
    return ((l = ea(l)), (l.tag = 3), l);
  }
  function Ts(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          bs(t, a, e);
        }));
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        (bs(t, a, e),
          typeof u != "function" &&
            (sa === null ? (sa = new Set([this])) : sa.add(this)));
        var f = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function jv(l, t, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ue(t, a, u, !0),
        (a = lt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              dt === null ? gn() : a.alternate === null && ol === 0 && (ol = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === Ku
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  Uf(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === Ku
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  Uf(l, e, u)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return (Uf(l, e, u), gn(), !1);
    }
    if (K)
      return (
        (t = lt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== Ac && ((l = Error(r(422), { cause: e })), Ze(mt(l, a))))
          : (e !== Ac && ((t = Error(r(423), { cause: e })), Ze(mt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = mt(e, a)),
            (u = uf(l.stateNode, e, u)),
            Rc(l, u),
            ol !== 4 && (ol = 2)),
        !1
      );
    var n = Error(r(520), { cause: e });
    if (
      ((n = mt(n, a)),
      cu === null ? (cu = [n]) : cu.push(n),
      ol !== 4 && (ol = 2),
      t === null)
    )
      return !0;
    ((e = mt(e, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = uf(a.stateNode, e, l)),
            Rc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (sa === null || !sa.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = zs(u)),
              Ts(u, l, a, e),
              Rc(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var nf = Error(r(461)),
    bl = !1;
  function Nl(l, t, a, e) {
    t.child = l === null ? Om(t, null, a, e) : Ba(t, l.child, a, e);
  }
  function As(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var c = {};
      for (var f in e) f !== "ref" && (c[f] = e[f]);
    } else c = e;
    return (
      Ha(t),
      (e = jc(l, t, a, c, n, u)),
      (f = Zc()),
      l !== null && !bl
        ? (Vc(l, t, u), Xt(l, t, u))
        : (K && f && zc(t), (t.flags |= 1), Nl(l, t, e, u), t.child)
    );
  }
  function ps(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Sc(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), _s(l, t, n, e, u))
        : ((l = Xu(a.type, null, e, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !of(l, u))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Qe), a(c, e) && l.ref === t.ref)
      )
        return Xt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Ct(n, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function _s(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Qe(n, e) && l.ref === t.ref)
        if (((bl = !1), (t.pendingProps = e = n), of(l, u)))
          (l.flags & 131072) !== 0 && (bl = !0);
        else return ((t.lanes = l.lanes), Xt(l, t, u));
    }
    return cf(l, t, a, e, u);
  }
  function Os(l, t, a, e) {
    var u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, u = 0; e !== null; )
            ((u = u | e.lanes | e.childLanes), (e = e.sibling));
          e = u & ~n;
        } else ((e = 0), (t.child = null));
        return Ms(l, t, n, a, e);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Lu(t, n !== null ? n.cachePool : null),
          n !== null ? Nm(t, n) : Yc(),
          Um(t));
      else
        return (
          (e = t.lanes = 536870912),
          Ms(l, t, n !== null ? n.baseLanes | a : a, a, e)
        );
    } else
      n !== null
        ? (Lu(t, n.cachePool), Nm(t, n), ca(), (t.memoizedState = null))
        : (l !== null && Lu(t, null), Yc(), ca());
    return (Nl(l, t, u, a), t.child);
  }
  function Pe(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Ms(l, t, a, e, u) {
    var n = Uc();
    return (
      (n = n === null ? null : { parent: Sl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && Lu(t, null),
      Yc(),
      Um(t),
      l !== null && ue(l, t, e, !0),
      (t.childLanes = u),
      null
    );
  }
  function nn(l, t) {
    return (
      (t = fn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Ds(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = nn(t, t.pendingProps)),
      (l.flags |= 2),
      tt(t),
      (t.memoizedState = null),
      l
    );
  }
  function Zv(l, t, a) {
    var e = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (K) {
        if (e.mode === "hidden")
          return ((l = nn(t, e)), (t.lanes = 536870912), Pe(null, l));
        if (
          (Qc(t),
          (l = ml)
            ? ((l = j0(l, vt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: pt, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = ym(l)),
                (a.return = t),
                (t.child = a),
                (Ml = t),
                (ml = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return ((t.lanes = 536870912), null);
      }
      return nn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if ((Qc(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = Ds(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if (
        (bl || ue(l, t, a, !1), (u = (a & l.childLanes) !== 0), bl || u)
      ) {
        if (
          ((e = fl),
          e !== null && ((c = Si(e, a)), c !== 0 && c !== n.retryLane))
        )
          throw ((n.retryLane = c), Ma(l, c), Jl(e, l, c), nf);
        (gn(), (t = Ds(l, t, a)));
      } else
        ((l = n.treeContext),
          (ml = ot(c.nextSibling)),
          (Ml = t),
          (K = !0),
          (Pt = null),
          (vt = !1),
          l !== null && om(t, l),
          (t = nn(t, e)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Ct(l.child, { mode: e.mode, children: e.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function cn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function cf(l, t, a, e, u) {
    return (
      Ha(t),
      (a = jc(l, t, a, e, void 0, u)),
      (e = Zc()),
      l !== null && !bl
        ? (Vc(l, t, u), Xt(l, t, u))
        : (K && e && zc(t), (t.flags |= 1), Nl(l, t, a, u), t.child)
    );
  }
  function Ns(l, t, a, e, u, n) {
    return (
      Ha(t),
      (t.updateQueue = null),
      (a = qm(t, e, a, u)),
      Hm(l),
      (e = Zc()),
      l !== null && !bl
        ? (Vc(l, t, n), Xt(l, t, n))
        : (K && e && zc(t), (t.flags |= 1), Nl(l, t, a, n), t.child)
    );
  }
  function Us(l, t, a, e, u) {
    if ((Ha(t), t.stateNode === null)) {
      var n = le,
        c = a.contextType;
      (typeof c == "object" && c !== null && (n = Dl(c)),
        (n = new a(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ef),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        qc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? Dl(c) : le),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (af(t, a, c, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && ef.enqueueReplaceState(n, n.state, null),
          We(t, e, n, u),
          we(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        i = Ga(a, f);
      n.props = i;
      var o = n.context,
        S = a.contextType;
      ((c = le), typeof S == "object" && S !== null && (c = Dl(S)));
      var z = a.getDerivedStateFromProps;
      ((S =
        typeof z == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || o !== c) && rs(t, n, e, c)),
        (aa = !1));
      var h = t.memoizedState;
      ((n.state = h),
        We(t, e, n, u),
        we(),
        (o = t.memoizedState),
        f || h !== o || aa
          ? (typeof z == "function" && (af(t, a, z, e), (o = t.memoizedState)),
            (i = aa || hs(t, a, i, e, h, o, c))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = o)),
            (n.props = e),
            (n.state = o),
            (n.context = c),
            (e = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1)));
    } else {
      ((n = t.stateNode),
        Cc(l, t),
        (c = t.memoizedProps),
        (S = Ga(a, c)),
        (n.props = S),
        (z = t.pendingProps),
        (h = n.context),
        (o = a.contextType),
        (i = le),
        typeof o == "object" && o !== null && (i = Dl(o)),
        (f = a.getDerivedStateFromProps),
        (o =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== z || h !== i) && rs(t, n, e, i)),
        (aa = !1),
        (h = t.memoizedState),
        (n.state = h),
        We(t, e, n, u),
        we());
      var g = t.memoizedState;
      c !== z ||
      h !== g ||
      aa ||
      (l !== null && l.dependencies !== null && Zu(l.dependencies))
        ? (typeof f == "function" && (af(t, a, f, e), (g = t.memoizedState)),
          (S =
            aa ||
            hs(t, a, S, e, h, g, i) ||
            (l !== null && l.dependencies !== null && Zu(l.dependencies)))
            ? (o ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, g, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, g, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = g)),
          (n.props = e),
          (n.state = g),
          (n.context = i),
          (e = S))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      cn(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = Ba(t, l.child, null, u)),
              (t.child = Ba(t, null, a, u)))
            : Nl(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Xt(l, t, u)),
      l
    );
  }
  function Hs(l, t, a, e) {
    return (Na(), (t.flags |= 256), Nl(l, t, a, e), t.child);
  }
  var ff = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function mf(l) {
    return { baseLanes: l, cachePool: bm() };
  }
  function sf(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= et), l);
  }
  function qs(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (rl.current & 2) !== 0),
      c && ((u = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (K) {
        if (
          (u ? na(t) : ca(),
          (l = ml)
            ? ((l = j0(l, vt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: pt, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = ym(l)),
                (a.return = t),
                (t.child = a),
                (Ml = t),
                (ml = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return (Jf(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var f = e.children;
      return (
        (e = e.fallback),
        u
          ? (ca(),
            (u = t.mode),
            (f = fn({ mode: "hidden", children: f }, u)),
            (e = Da(e, u, a, null)),
            (f.return = t),
            (e.return = t),
            (f.sibling = e),
            (t.child = f),
            (e = t.child),
            (e.memoizedState = mf(a)),
            (e.childLanes = sf(l, c, a)),
            (t.memoizedState = ff),
            Pe(null, e))
          : (na(t), yf(t, f))
      );
    }
    var i = l.memoizedState;
    if (i !== null && ((f = i.dehydrated), f !== null)) {
      if (n)
        t.flags & 256
          ? (na(t), (t.flags &= -257), (t = vf(l, t, a)))
          : t.memoizedState !== null
            ? (ca(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (ca(),
              (f = e.fallback),
              (u = t.mode),
              (e = fn({ mode: "visible", children: e.children }, u)),
              (f = Da(f, u, a, null)),
              (f.flags |= 2),
              (e.return = t),
              (f.return = t),
              (e.sibling = f),
              (t.child = e),
              Ba(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = mf(a)),
              (e.childLanes = sf(l, c, a)),
              (t.memoizedState = ff),
              (t = Pe(null, e)));
      else if ((na(t), Jf(f))) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var o = c.dgst;
        ((c = o),
          (e = Error(r(419))),
          (e.stack = ""),
          (e.digest = c),
          Ze({ value: e, source: null, stack: null }),
          (t = vf(l, t, a)));
      } else if (
        (bl || ue(l, t, a, !1), (c = (a & l.childLanes) !== 0), bl || c)
      ) {
        if (
          ((c = fl),
          c !== null && ((e = Si(c, a)), e !== 0 && e !== i.retryLane))
        )
          throw ((i.retryLane = e), Ma(l, e), Jl(c, l, e), nf);
        (Kf(f) || gn(), (t = vf(l, t, a)));
      } else
        Kf(f)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (ml = ot(f.nextSibling)),
            (Ml = t),
            (K = !0),
            (Pt = null),
            (vt = !1),
            l !== null && om(t, l),
            (t = yf(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (ca(),
        (f = e.fallback),
        (u = t.mode),
        (i = l.child),
        (o = i.sibling),
        (e = Ct(i, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = i.subtreeFlags & 65011712),
        o !== null ? (f = Ct(o, f)) : ((f = Da(f, u, a, null)), (f.flags |= 2)),
        (f.return = t),
        (e.return = t),
        (e.sibling = f),
        (t.child = e),
        Pe(null, e),
        (e = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = mf(a))
          : ((u = f.cachePool),
            u !== null
              ? ((i = Sl._currentValue),
                (u = u.parent !== i ? { parent: i, pool: i } : u))
              : (u = bm()),
            (f = { baseLanes: f.baseLanes | a, cachePool: u })),
        (e.memoizedState = f),
        (e.childLanes = sf(l, c, a)),
        (t.memoizedState = ff),
        Pe(l.child, e))
      : (na(t),
        (a = l.child),
        (l = a.sibling),
        (a = Ct(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function yf(l, t) {
    return (
      (t = fn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function fn(l, t) {
    return ((l = Pl(22, l, null, t)), (l.lanes = 0), l);
  }
  function vf(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = yf(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Cs(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    (e !== null && (e.lanes |= t), Oc(l.return, t, a));
  }
  function df(l, t, a, e, u, n) {
    var c = l.memoizedState;
    c === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
          treeForkCount: n,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = e),
        (c.tail = a),
        (c.tailMode = u),
        (c.treeForkCount = n));
  }
  function Rs(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    e = e.children;
    var c = rl.current,
      f = (c & 2) !== 0;
    if (
      (f ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      O(rl, c),
      Nl(l, t, e, a),
      (e = K ? je : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Cs(l, a, t);
        else if (l.tag === 19) Cs(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((l = a.alternate),
            l !== null && $u(l) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          df(t, !1, u, a, n, e));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && $u(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = a), (a = u), (u = l));
        }
        df(t, !0, a, null, n, e);
        break;
      case "together":
        df(t, !1, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (ma |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ue(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Ct(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = Ct(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function of(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Zu(l)));
  }
  function Vv(l, t, a) {
    switch (t.tag) {
      case 3:
        (Rl(t, t.stateNode.containerInfo),
          ta(t, Sl, l.memoizedState.cache),
          Na());
        break;
      case 27:
      case 5:
        _e(t);
        break;
      case 4:
        Rl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Qc(t), null);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (na(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? qs(l, t, a)
              : (na(t), (l = Xt(l, t, a)), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (ue(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return Rs(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          O(rl, rl.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Os(l, t, a, t.pendingProps));
      case 24:
        ta(t, Sl, l.memoizedState.cache);
    }
    return Xt(l, t, a);
  }
  function Bs(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) bl = !0;
      else {
        if (!of(l, a) && (t.flags & 128) === 0) return ((bl = !1), Vv(l, t, a));
        bl = (l.flags & 131072) !== 0;
      }
    else ((bl = !1), K && (t.flags & 1048576) !== 0 && dm(t, je, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (((l = Ca(t.elementType)), (t.type = l), typeof l == "function"))
            Sc(l)
              ? ((e = Ga(l, e)), (t.tag = 1), (t = Us(null, t, l, e, a)))
              : ((t.tag = 0), (t = cf(null, t, l, e, a)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === nt) {
                ((t.tag = 11), (t = As(null, t, l, e, a)));
                break l;
              } else if (u === x) {
                ((t.tag = 14), (t = ps(null, t, l, e, a)));
                break l;
              }
            }
            throw ((t = Nt(l) || l), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return cf(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (u = Ga(e, t.pendingProps)), Us(l, t, e, u, a));
      case 3:
        l: {
          if ((Rl(t, t.stateNode.containerInfo), l === null))
            throw Error(r(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Cc(l, t), We(t, e, null, a));
          var c = t.memoizedState;
          if (
            ((e = c.cache),
            ta(t, Sl, e),
            e !== n.cache && Mc(t, [Sl], a, !0),
            we(),
            (e = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Hs(l, t, e, a);
              break l;
            } else if (e !== u) {
              ((u = mt(Error(r(424)), t)), Ze(u), (t = Hs(l, t, e, a)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  ml = ot(l.firstChild),
                  Ml = t,
                  K = !0,
                  Pt = null,
                  vt = !0,
                  a = Om(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Na(), e === u)) {
              t = Xt(l, t, a);
              break l;
            }
            Nl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          cn(l, t),
          l === null
            ? (a = J0(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : K ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = pn(X.current).createElement(a)),
                (e[Ol] = t),
                (e[jl] = l),
                Ul(e, a, l),
                Al(e),
                (t.stateNode = e))
            : (t.memoizedState = J0(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          _e(t),
          l === null &&
            K &&
            ((e = t.stateNode = L0(t.type, t.pendingProps, X.current)),
            (Ml = t),
            (vt = !0),
            (u = ml),
            oa(t.type) ? ((wf = u), (ml = ot(e.firstChild))) : (ml = u)),
          Nl(l, t, t.pendingProps.children, a),
          cn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            K &&
            ((u = e = ml) &&
              ((e = Sd(e, t.type, t.pendingProps, vt)),
              e !== null
                ? ((t.stateNode = e),
                  (Ml = t),
                  (ml = ot(e.firstChild)),
                  (vt = !1),
                  (u = !0))
                : (u = !1)),
            u || la(t)),
          _e(t),
          (u = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (e = n.children),
          Vf(u, n) ? (e = null) : c !== null && Vf(u, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = jc(l, t, Cv, null, null, a)), (ou._currentValue = u)),
          cn(l, t),
          Nl(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            K &&
            ((l = a = ml) &&
              ((a = Ed(a, t.pendingProps, vt)),
              a !== null
                ? ((t.stateNode = a), (Ml = t), (ml = null), (l = !0))
                : (l = !1)),
            l || la(t)),
          null
        );
      case 13:
        return qs(l, t, a);
      case 4:
        return (
          Rl(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = Ba(t, null, e, a)) : Nl(l, t, e, a),
          t.child
        );
      case 11:
        return As(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Nl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Nl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Nl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (e = t.pendingProps),
          ta(t, t.type, e.value),
          Nl(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          Ha(t),
          (u = Dl(u)),
          (e = e(u)),
          (t.flags |= 1),
          Nl(l, t, e, a),
          t.child
        );
      case 14:
        return ps(l, t, t.type, t.pendingProps, a);
      case 15:
        return _s(l, t, t.type, t.pendingProps, a);
      case 19:
        return Rs(l, t, a);
      case 31:
        return Zv(l, t, a);
      case 22:
        return Os(l, t, a, t.pendingProps);
      case 24:
        return (
          Ha(t),
          (e = Dl(Sl)),
          l === null
            ? ((u = Uc()),
              u === null &&
                ((u = fl),
                (n = Dc()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              qc(t),
              ta(t, Sl, u))
            : ((l.lanes & a) !== 0 && (Cc(l, t), We(t, null, null, a), we()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  ta(t, Sl, e))
                : ((e = n.cache),
                  ta(t, Sl, e),
                  e !== u.cache && Mc(t, [Sl], a, !0))),
          Nl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function jt(l) {
    l.flags |= 4;
  }
  function hf(l, t, a, e, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (i0()) l.flags |= 8192;
        else throw ((Ra = Ku), Hc);
    } else l.flags &= -16777217;
  }
  function Ys(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !k0(t)))
      if (i0()) l.flags |= 8192;
      else throw ((Ra = Ku), Hc);
  }
  function mn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? hi() : 536870912), (l.lanes |= t), (re |= t)));
  }
  function lu(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function sl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= e), (l.childLanes = a), t);
  }
  function Lv(l, t, a) {
    var e = t.pendingProps;
    switch ((Tc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (sl(t), null);
      case 1:
        return (sl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Yt(Sl),
          hl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (ee(t)
              ? jt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), pc())),
          sl(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (jt(t),
              n !== null ? (sl(t), Ys(t, n)) : (sl(t), hf(t, u, null, e, a)))
            : n
              ? n !== l.memoizedState
                ? (jt(t), sl(t), Ys(t, n))
                : (sl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== e && jt(t),
                sl(t),
                hf(t, u, l, e, a)),
          null
        );
      case 27:
        if (
          (Eu(t),
          (a = X.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== e && jt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(r(166));
            return (sl(t), null);
          }
          ((l = D.current),
            ee(t) ? hm(t) : ((l = L0(u, e, a)), (t.stateNode = l), jt(t)));
        }
        return (sl(t), null);
      case 5:
        if ((Eu(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && jt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(r(166));
            return (sl(t), null);
          }
          if (((n = D.current), ee(t))) hm(t);
          else {
            var c = pn(X.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = c.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof e.is == "string"
                        ? c.createElement("select", { is: e.is })
                        : c.createElement("select")),
                      e.multiple
                        ? (n.multiple = !0)
                        : e.size && (n.size = e.size));
                    break;
                  default:
                    n =
                      typeof e.is == "string"
                        ? c.createElement(u, { is: e.is })
                        : c.createElement(u);
                }
            }
            ((n[Ol] = t), (n[jl] = e));
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = n;
            l: switch ((Ul(n, u, e), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && jt(t);
          }
        }
        return (
          sl(t),
          hf(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && jt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(r(166));
          if (((l = X.current), ee(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (u = Ml),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            ((l[Ol] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                q0(l.nodeValue, a)
              )),
              l || la(t, !0));
          } else
            ((l = pn(l).createTextNode(e)), (l[Ol] = t), (t.stateNode = l));
        }
        return (sl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((e = ee(t)), a !== null)) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(r(557));
              l[Ol] = t;
            } else
              (Na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (sl(t), (l = !1));
          } else
            ((a = pc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (tt(t), t) : (tt(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (sl(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ee(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Ol] = t;
            } else
              (Na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (sl(t), (u = !1));
          } else
            ((u = pc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (tt(t), t) : (tt(t), null);
        }
        return (
          tt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = e !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((e = t.child),
                (u = null),
                e.alternate !== null &&
                  e.alternate.memoizedState !== null &&
                  e.alternate.memoizedState.cachePool !== null &&
                  (u = e.alternate.memoizedState.cachePool.pool),
                (n = null),
                e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null &&
                  (n = e.memoizedState.cachePool.pool),
                n !== u && (e.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              mn(t, t.updateQueue),
              sl(t),
              null)
        );
      case 4:
        return (hl(), l === null && Gf(t.stateNode.containerInfo), sl(t), null);
      case 10:
        return (Yt(t.type), sl(t), null);
      case 19:
        if ((T(rl), (e = t.memoizedState), e === null)) return (sl(t), null);
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) lu(e, !1);
          else {
            if (ol !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = $u(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      lu(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      mn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (sm(a, l), (a = a.sibling));
                  return (
                    O(rl, (rl.current & 1) | 2),
                    K && Rt(t, e.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            e.tail !== null &&
              $l() > on &&
              ((t.flags |= 128), (u = !0), lu(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = $u(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                mn(t, l),
                lu(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !K)
              )
                return (sl(t), null);
            } else
              2 * $l() - e.renderingStartTime > on &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), lu(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((l = e.tail),
            (e.rendering = l),
            (e.tail = l.sibling),
            (e.renderingStartTime = $l()),
            (l.sibling = null),
            (a = rl.current),
            O(rl, u ? (a & 1) | 2 : a & 1),
            K && Rt(t, e.treeForkCount),
            l)
          : (sl(t), null);
      case 22:
      case 23:
        return (
          tt(t),
          Gc(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (sl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : sl(t),
          (a = t.updateQueue),
          a !== null && mn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && T(qa),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Yt(Sl),
          sl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function xv(l, t) {
    switch ((Tc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Yt(Sl),
          hl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Eu(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((tt(t), t.alternate === null)) throw Error(r(340));
          Na();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (tt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Na();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (T(rl), null);
      case 4:
        return (hl(), null);
      case 10:
        return (Yt(t.type), null);
      case 22:
      case 23:
        return (
          tt(t),
          Gc(),
          l !== null && T(qa),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Yt(Sl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Gs(l, t) {
    switch ((Tc(t), t.tag)) {
      case 3:
        (Yt(Sl), hl());
        break;
      case 26:
      case 27:
      case 5:
        Eu(t);
        break;
      case 4:
        hl();
        break;
      case 31:
        t.memoizedState !== null && tt(t);
        break;
      case 13:
        tt(t);
        break;
      case 19:
        T(rl);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        (tt(t), Gc(), l !== null && T(qa));
        break;
      case 24:
        Yt(Sl);
    }
  }
  function tu(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              c = a.inst;
            ((e = n()), (c.destroy = e));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (f) {
      tl(t, t.return, f);
    }
  }
  function fa(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var c = e.inst,
              f = c.destroy;
            if (f !== void 0) {
              ((c.destroy = void 0), (u = t));
              var i = a,
                o = f;
              try {
                o();
              } catch (S) {
                tl(u, i, S);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (S) {
      tl(t, t.return, S);
    }
  }
  function Qs(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Dm(t, a);
      } catch (e) {
        tl(l, l.return, e);
      }
    }
  }
  function Xs(l, t, a) {
    ((a.props = Ga(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      tl(l, t, e);
    }
  }
  function au(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      tl(l, t, u);
    }
  }
  function Ot(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          tl(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          tl(l, t, u);
        }
      else a.current = null;
  }
  function js(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      tl(l, l.return, u);
    }
  }
  function rf(l, t, a) {
    try {
      var e = l.stateNode;
      (vd(e, l.type, a, t), (e[jl] = t));
    } catch (u) {
      tl(l, l.return, u);
    }
  }
  function Zs(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && oa(l.type)) ||
      l.tag === 4
    );
  }
  function gf(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Zs(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && oa(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Sf(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ht)));
    else if (
      e !== 4 &&
      (e === 27 && oa(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Sf(l, t, a), l = l.sibling; l !== null; )
        (Sf(l, t, a), (l = l.sibling));
  }
  function sn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      e !== 4 &&
      (e === 27 && oa(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (sn(l, t, a), l = l.sibling; l !== null; )
        (sn(l, t, a), (l = l.sibling));
  }
  function Vs(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (Ul(t, e, a), (t[Ol] = l), (t[jl] = a));
    } catch (n) {
      tl(l, l.return, n);
    }
  }
  var Zt = !1,
    zl = !1,
    Ef = !1,
    Ls = typeof WeakSet == "function" ? WeakSet : Set,
    pl = null;
  function Kv(l, t) {
    if (((l = l.containerInfo), (jf = Hn), (l = tm(l)), yc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              f = -1,
              i = -1,
              o = 0,
              S = 0,
              z = l,
              h = null;
            t: for (;;) {
              for (
                var g;
                z !== a || (u !== 0 && z.nodeType !== 3) || (f = c + u),
                  z !== n || (e !== 0 && z.nodeType !== 3) || (i = c + e),
                  z.nodeType === 3 && (c += z.nodeValue.length),
                  (g = z.firstChild) !== null;
              )
                ((h = z), (z = g));
              for (;;) {
                if (z === l) break t;
                if (
                  (h === a && ++o === u && (f = c),
                  h === n && ++S === e && (i = c),
                  (g = z.nextSibling) !== null)
                )
                  break;
                ((z = h), (h = z.parentNode));
              }
              z = g;
            }
            a = f === -1 || i === -1 ? null : { start: f, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Zf = { focusedElem: l, selectionRange: a }, Hn = !1, pl = t;
      pl !== null;
    )
      if (
        ((t = pl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (pl = l));
      else
        for (; pl !== null; ) {
          switch (((t = pl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((u = l[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode));
                try {
                  var M = Ga(a.type, u);
                  ((l = e.getSnapshotBeforeUpdate(M, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (q) {
                  tl(a, a.return, q);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  xf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      xf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (pl = l));
            break;
          }
          pl = t.return;
        }
  }
  function xs(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Lt(l, a), e & 4 && tu(5, a));
        break;
      case 1:
        if ((Lt(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              tl(a, a.return, c);
            }
          else {
            var u = Ga(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              tl(a, a.return, c);
            }
          }
        (e & 64 && Qs(a), e & 512 && au(a, a.return));
        break;
      case 3:
        if ((Lt(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Dm(l, t);
          } catch (c) {
            tl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Vs(a);
      case 26:
      case 5:
        (Lt(l, a), t === null && e & 4 && js(a), e & 512 && au(a, a.return));
        break;
      case 12:
        Lt(l, a);
        break;
      case 31:
        (Lt(l, a), e & 4 && ws(l, a));
        break;
      case 13:
        (Lt(l, a),
          e & 4 && Ws(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = ld.bind(null, a)), bd(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Zt), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || zl), (u = Zt));
          var n = zl;
          ((Zt = e),
            (zl = t) && !n ? xt(l, a, (a.subtreeFlags & 8772) !== 0) : Lt(l, a),
            (Zt = u),
            (zl = n));
        }
        break;
      case 30:
        break;
      default:
        Lt(l, a);
    }
  }
  function Ks(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), Ks(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Wn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var vl = null,
    Vl = !1;
  function Vt(l, t, a) {
    for (a = a.child; a !== null; ) (Js(l, t, a), (a = a.sibling));
  }
  function Js(l, t, a) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(Oe, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (zl || Ot(a, t),
          Vt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        zl || Ot(a, t);
        var e = vl,
          u = Vl;
        (oa(a.type) && ((vl = a.stateNode), (Vl = !1)),
          Vt(l, t, a),
          yu(a.stateNode),
          (vl = e),
          (Vl = u));
        break;
      case 5:
        zl || Ot(a, t);
      case 6:
        if (
          ((e = vl),
          (u = Vl),
          (vl = null),
          Vt(l, t, a),
          (vl = e),
          (Vl = u),
          vl !== null)
        )
          if (Vl)
            try {
              (vl.nodeType === 9
                ? vl.body
                : vl.nodeName === "HTML"
                  ? vl.ownerDocument.body
                  : vl
              ).removeChild(a.stateNode);
            } catch (n) {
              tl(a, t, n);
            }
          else
            try {
              vl.removeChild(a.stateNode);
            } catch (n) {
              tl(a, t, n);
            }
        break;
      case 18:
        vl !== null &&
          (Vl
            ? ((l = vl),
              Q0(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              pe(l))
            : Q0(vl, a.stateNode));
        break;
      case 4:
        ((e = vl),
          (u = Vl),
          (vl = a.stateNode.containerInfo),
          (Vl = !0),
          Vt(l, t, a),
          (vl = e),
          (Vl = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (fa(2, a, t), zl || fa(4, a, t), Vt(l, t, a));
        break;
      case 1:
        (zl ||
          (Ot(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && Xs(a, t, e)),
          Vt(l, t, a));
        break;
      case 21:
        Vt(l, t, a);
        break;
      case 22:
        ((zl = (e = zl) || a.memoizedState !== null), Vt(l, t, a), (zl = e));
        break;
      default:
        Vt(l, t, a);
    }
  }
  function ws(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        pe(l);
      } catch (a) {
        tl(t, t.return, a);
      }
    }
  }
  function Ws(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        pe(l);
      } catch (a) {
        tl(t, t.return, a);
      }
  }
  function Jv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new Ls()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Ls()),
          t
        );
      default:
        throw Error(r(435, l.tag));
    }
  }
  function yn(l, t) {
    var a = Jv(l);
    t.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var u = td.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function Ll(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          c = t,
          f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (oa(f.type)) {
                ((vl = f.stateNode), (Vl = !1));
                break l;
              }
              break;
            case 5:
              ((vl = f.stateNode), (Vl = !1));
              break l;
            case 3:
            case 4:
              ((vl = f.stateNode.containerInfo), (Vl = !0));
              break l;
          }
          f = f.return;
        }
        if (vl === null) throw Error(r(160));
        (Js(n, c, u),
          (vl = null),
          (Vl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) ($s(t, l), (t = t.sibling));
  }
  var Et = null;
  function $s(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ll(t, l),
          xl(l),
          e & 4 && (fa(3, l, l.return), tu(3, l), fa(5, l, l.return)));
        break;
      case 1:
        (Ll(t, l),
          xl(l),
          e & 512 && (zl || a === null || Ot(a, a.return)),
          e & 64 &&
            Zt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = Et;
        if (
          (Ll(t, l),
          xl(l),
          e & 512 && (zl || a === null || Ot(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  ((e = l.type),
                    (a = l.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (e) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ne] ||
                          n[Ol] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        Ul(n, e, a),
                        (n[Ol] = l),
                        Al(n),
                        (e = n));
                      break l;
                    case "link":
                      var c = $0("link", "href", u).get(e + (a.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        Ul(n, e, a),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (c = $0("meta", "content", u).get(
                          e + (a.content || ""),
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        Ul(n, e, a),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(r(468, e));
                  }
                  ((n[Ol] = l), Al(n), (e = n));
                }
                l.stateNode = e;
              } else F0(u, l.type, l.stateNode);
            else l.stateNode = W0(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? F0(u, l.type, l.stateNode)
                  : W0(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                rf(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Ll(t, l),
          xl(l),
          e & 512 && (zl || a === null || Ot(a, a.return)),
          a !== null && e & 4 && rf(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Ll(t, l),
          xl(l),
          e & 512 && (zl || a === null || Ot(a, a.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            wa(u, "");
          } catch (M) {
            tl(l, l.return, M);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), rf(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (Ef = !0));
        break;
      case 6:
        if ((Ll(t, l), xl(l), e & 4)) {
          if (l.stateNode === null) throw Error(r(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (M) {
            tl(l, l.return, M);
          }
        }
        break;
      case 3:
        if (
          ((Mn = null),
          (u = Et),
          (Et = _n(t.containerInfo)),
          Ll(t, l),
          (Et = u),
          xl(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            pe(t.containerInfo);
          } catch (M) {
            tl(l, l.return, M);
          }
        Ef && ((Ef = !1), Fs(l));
        break;
      case 4:
        ((e = Et),
          (Et = _n(l.stateNode.containerInfo)),
          Ll(t, l),
          xl(l),
          (Et = e));
        break;
      case 12:
        (Ll(t, l), xl(l));
        break;
      case 31:
        (Ll(t, l),
          xl(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), yn(l, e))));
        break;
      case 13:
        (Ll(t, l),
          xl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (dn = $l()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), yn(l, e))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null,
          o = Zt,
          S = zl;
        if (
          ((Zt = o || u),
          (zl = S || i),
          Ll(t, l),
          (zl = S),
          (Zt = o),
          xl(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || i || Zt || zl || Qa(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (((n = i.stateNode), u))
                    ((c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    f = i.stateNode;
                    var z = i.memoizedProps.style,
                      h =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    f.style.display =
                      h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (M) {
                  tl(i, i.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = u ? "" : i.memoizedProps;
                } catch (M) {
                  tl(i, i.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                i = t;
                try {
                  var g = i.stateNode;
                  u ? X0(g, !0) : X0(i.stateNode, !1);
                } catch (M) {
                  tl(i, i.return, M);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), yn(l, a))));
        break;
      case 19:
        (Ll(t, l),
          xl(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), yn(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ll(t, l), xl(l));
    }
  }
  function xl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Zs(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = gf(l);
            sn(l, n, u);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (wa(c, ""), (a.flags &= -33));
            var f = gf(l);
            sn(l, f, c);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo,
              o = gf(l);
            Sf(l, o, i);
            break;
          default:
            throw Error(r(161));
        }
      } catch (S) {
        tl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Fs(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (Fs(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Lt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (xs(l, t.alternate, t), (t = t.sibling));
  }
  function Qa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (fa(4, t, t.return), Qa(t));
          break;
        case 1:
          Ot(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Xs(t, t.return, a),
            Qa(t));
          break;
        case 27:
          yu(t.stateNode);
        case 26:
        case 5:
          (Ot(t, t.return), Qa(t));
          break;
        case 22:
          t.memoizedState === null && Qa(t);
          break;
        case 30:
          Qa(t);
          break;
        default:
          Qa(t);
      }
      l = l.sibling;
    }
  }
  function xt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (xt(u, n, a), tu(4, n));
          break;
        case 1:
          if (
            (xt(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (o) {
              tl(e, e.return, o);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var f = e.stateNode;
            try {
              var i = u.shared.hiddenCallbacks;
              if (i !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < i.length; u++)
                  Mm(i[u], f);
            } catch (o) {
              tl(e, e.return, o);
            }
          }
          (a && c & 64 && Qs(n), au(n, n.return));
          break;
        case 27:
          Vs(n);
        case 26:
        case 5:
          (xt(u, n, a), a && e === null && c & 4 && js(n), au(n, n.return));
          break;
        case 12:
          xt(u, n, a);
          break;
        case 31:
          (xt(u, n, a), a && c & 4 && ws(u, n));
          break;
        case 13:
          (xt(u, n, a), a && c & 4 && Ws(u, n));
          break;
        case 22:
          (n.memoizedState === null && xt(u, n, a), au(n, n.return));
          break;
        case 30:
          break;
        default:
          xt(u, n, a);
      }
      t = t.sibling;
    }
  }
  function bf(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Ve(a)));
  }
  function zf(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ve(l)));
  }
  function bt(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (ks(l, t, a, e), (t = t.sibling));
  }
  function ks(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (bt(l, t, a, e), u & 2048 && tu(9, t));
        break;
      case 1:
        bt(l, t, a, e);
        break;
      case 3:
        (bt(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ve(l))));
        break;
      case 12:
        if (u & 2048) {
          (bt(l, t, a, e), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              c = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (i) {
            tl(t, t.return, i);
          }
        } else bt(l, t, a, e);
        break;
      case 31:
        bt(l, t, a, e);
        break;
      case 13:
        bt(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? bt(l, t, a, e)
              : eu(l, t)
            : n._visibility & 2
              ? bt(l, t, a, e)
              : ((n._visibility |= 2),
                de(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && bf(c, t));
        break;
      case 24:
        (bt(l, t, a, e), u & 2048 && zf(t.alternate, t));
        break;
      default:
        bt(l, t, a, e);
    }
  }
  function de(l, t, a, e, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        c = t,
        f = a,
        i = e,
        o = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (de(n, c, f, i, u), tu(8, c));
          break;
        case 23:
          break;
        case 22:
          var S = c.stateNode;
          (c.memoizedState !== null
            ? S._visibility & 2
              ? de(n, c, f, i, u)
              : eu(n, c)
            : ((S._visibility |= 2), de(n, c, f, i, u)),
            u && o & 2048 && bf(c.alternate, c));
          break;
        case 24:
          (de(n, c, f, i, u), u && o & 2048 && zf(c.alternate, c));
          break;
        default:
          de(n, c, f, i, u);
      }
      t = t.sibling;
    }
  }
  function eu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (eu(a, e), u & 2048 && bf(e.alternate, e));
            break;
          case 24:
            (eu(a, e), u & 2048 && zf(e.alternate, e));
            break;
          default:
            eu(a, e);
        }
        t = t.sibling;
      }
  }
  var uu = 8192;
  function oe(l, t, a) {
    if (l.subtreeFlags & uu)
      for (l = l.child; l !== null; ) (Is(l, t, a), (l = l.sibling));
  }
  function Is(l, t, a) {
    switch (l.tag) {
      case 26:
        (oe(l, t, a),
          l.flags & uu &&
            l.memoizedState !== null &&
            qd(a, Et, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        oe(l, t, a);
        break;
      case 3:
      case 4:
        var e = Et;
        ((Et = _n(l.stateNode.containerInfo)), oe(l, t, a), (Et = e));
        break;
      case 22:
        l.memoizedState === null &&
          ((e = l.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = uu), (uu = 16777216), oe(l, t, a), (uu = e))
            : oe(l, t, a));
        break;
      default:
        oe(l, t, a);
    }
  }
  function Ps(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function nu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((pl = e), t0(e, l));
        }
      Ps(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (l0(l), (l = l.sibling));
  }
  function l0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (nu(l), l.flags & 2048 && fa(9, l, l.return));
        break;
      case 3:
        nu(l);
        break;
      case 12:
        nu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), vn(l))
          : nu(l);
        break;
      default:
        nu(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((pl = e), t0(e, l));
        }
      Ps(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (fa(8, t, t.return), vn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), vn(t)));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function t0(l, t) {
    for (; pl !== null; ) {
      var a = pl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          fa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ve(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (pl = e));
      else
        l: for (a = l; pl !== null; ) {
          e = pl;
          var u = e.sibling,
            n = e.return;
          if ((Ks(e), e === a)) {
            pl = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (pl = u));
            break l;
          }
          pl = n;
        }
    }
  }
  var wv = {
      getCacheForType: function (l) {
        var t = Dl(Sl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Dl(Sl).controller.signal;
      },
    },
    Wv = typeof WeakMap == "function" ? WeakMap : Map,
    F = 0,
    fl = null,
    j = null,
    V = 0,
    ll = 0,
    at = null,
    ia = !1,
    he = !1,
    Tf = !1,
    Kt = 0,
    ol = 0,
    ma = 0,
    Xa = 0,
    Af = 0,
    et = 0,
    re = 0,
    cu = null,
    Kl = null,
    pf = !1,
    dn = 0,
    a0 = 0,
    on = 1 / 0,
    hn = null,
    sa = null,
    Tl = 0,
    ya = null,
    ge = null,
    Jt = 0,
    _f = 0,
    Of = null,
    e0 = null,
    fu = 0,
    Mf = null;
  function ut() {
    return (F & 2) !== 0 && V !== 0 ? V & -V : E.T !== null ? Cf() : Ei();
  }
  function u0() {
    if (et === 0)
      if ((V & 536870912) === 0 || K) {
        var l = Tu;
        ((Tu <<= 1), (Tu & 3932160) === 0 && (Tu = 262144), (et = l));
      } else et = 536870912;
    return ((l = lt.current), l !== null && (l.flags |= 32), et);
  }
  function Jl(l, t, a) {
    (((l === fl && (ll === 2 || ll === 9)) || l.cancelPendingCommit !== null) &&
      (Se(l, 0), va(l, V, et, !1)),
      De(l, a),
      ((F & 2) === 0 || l !== fl) &&
        (l === fl && ((F & 2) === 0 && (Xa |= a), ol === 4 && va(l, V, et, !1)),
        Mt(l)));
  }
  function n0(l, t, a) {
    if ((F & 6) !== 0) throw Error(r(327));
    var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Me(l, t),
      u = e ? kv(l, t) : Nf(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        he && !e && va(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !$v(a))) {
          ((u = Nf(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            ((c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              u = cu;
              var i = f.current.memoizedState.isDehydrated;
              if ((i && (Se(f, c).flags |= 256), (c = Nf(f, c, !1)), c !== 2)) {
                if (Tf && !i) {
                  ((f.errorRecoveryDisabledLanes |= n), (Xa |= n), (u = 4));
                  break l;
                }
                ((n = Kl),
                  (Kl = u),
                  n !== null &&
                    (Kl === null ? (Kl = n) : Kl.push.apply(Kl, n)));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Se(l, 0), va(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              va(e, t, et, !ia);
              break l;
            case 2:
              Kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((u = dn + 300 - $l()), 10 < u)) {
            if ((va(e, t, et, !ia), pu(e, 0, !0) !== 0)) break l;
            ((Jt = t),
              (e.timeoutHandle = Y0(
                c0.bind(
                  null,
                  e,
                  a,
                  Kl,
                  hn,
                  pf,
                  t,
                  et,
                  Xa,
                  re,
                  ia,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break l;
          }
          c0(e, a, Kl, hn, pf, t, et, Xa, re, ia, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function c0(l, t, a, e, u, n, c, f, i, o, S, z, h, g) {
    if (
      ((l.timeoutHandle = -1),
      (z = t.subtreeFlags),
      z & 8192 || (z & 16785408) === 16785408)
    ) {
      ((z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht,
      }),
        Is(t, n, z));
      var M =
        (n & 62914560) === n ? dn - $l() : (n & 4194048) === n ? a0 - $l() : 0;
      if (((M = Cd(z, M)), M !== null)) {
        ((Jt = n),
          (l.cancelPendingCommit = M(
            o0.bind(null, l, t, n, a, e, u, c, f, i, S, z, null, h, g),
          )),
          va(l, n, c, !o));
        return;
      }
    }
    o0(l, t, n, a, e, u, c, f, i);
  }
  function $v(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!Il(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function va(l, t, a, e) {
    ((t &= ~Af),
      (t &= ~Xa),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - kl(u),
        c = 1 << n;
      ((e[n] = -1), (u &= ~c));
    }
    a !== 0 && ri(l, a, t);
  }
  function rn() {
    return (F & 6) === 0 ? (iu(0), !1) : !0;
  }
  function Df() {
    if (j !== null) {
      if (ll === 0) var l = j.return;
      else ((l = j), (Bt = Ua = null), Lc(l), (ie = null), (xe = 0), (l = j));
      for (; l !== null; ) (Gs(l.alternate, l), (l = l.return));
      j = null;
    }
  }
  function Se(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), hd(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (Jt = 0),
      Df(),
      (fl = l),
      (j = a = Ct(l.current, null)),
      (V = t),
      (ll = 0),
      (at = null),
      (ia = !1),
      (he = Me(l, t)),
      (Tf = !1),
      (re = et = Af = Xa = ma = ol = 0),
      (Kl = cu = null),
      (pf = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - kl(e),
          n = 1 << u;
        ((t |= l[u]), (e &= ~n));
      }
    return ((Kt = t), Yu(), a);
  }
  function f0(l, t) {
    ((G = null),
      (E.H = Ie),
      t === fe || t === xu
        ? ((t = Am()), (ll = 3))
        : t === Hc
          ? ((t = Am()), (ll = 4))
          : (ll =
              t === nf
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (at = t),
      j === null && ((ol = 1), un(l, mt(t, l.current))));
  }
  function i0() {
    var l = lt.current;
    return l === null
      ? !0
      : (V & 4194048) === V
        ? dt === null
        : (V & 62914560) === V || (V & 536870912) !== 0
          ? l === dt
          : !1;
  }
  function m0() {
    var l = E.H;
    return ((E.H = Ie), l === null ? Ie : l);
  }
  function s0() {
    var l = E.A;
    return ((E.A = wv), l);
  }
  function gn() {
    ((ol = 4),
      ia || ((V & 4194048) !== V && lt.current !== null) || (he = !0),
      ((ma & 134217727) === 0 && (Xa & 134217727) === 0) ||
        fl === null ||
        va(fl, V, et, !1));
  }
  function Nf(l, t, a) {
    var e = F;
    F |= 2;
    var u = m0(),
      n = s0();
    ((fl !== l || V !== t) && ((hn = null), Se(l, t)), (t = !1));
    var c = ol;
    l: do
      try {
        if (ll !== 0 && j !== null) {
          var f = j,
            i = at;
          switch (ll) {
            case 8:
              (Df(), (c = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              lt.current === null && (t = !0);
              var o = ll;
              if (((ll = 0), (at = null), Ee(l, f, i, o), a && he)) {
                c = 0;
                break l;
              }
              break;
            default:
              ((o = ll), (ll = 0), (at = null), Ee(l, f, i, o));
          }
        }
        (Fv(), (c = ol));
        break;
      } catch (S) {
        f0(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Bt = Ua = null),
      (F = e),
      (E.H = u),
      (E.A = n),
      j === null && ((fl = null), (V = 0), Yu()),
      c
    );
  }
  function Fv() {
    for (; j !== null; ) y0(j);
  }
  function kv(l, t) {
    var a = F;
    F |= 2;
    var e = m0(),
      u = s0();
    fl !== l || V !== t
      ? ((hn = null), (on = $l() + 500), Se(l, t))
      : (he = Me(l, t));
    l: do
      try {
        if (ll !== 0 && j !== null) {
          t = j;
          var n = at;
          t: switch (ll) {
            case 1:
              ((ll = 0), (at = null), Ee(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (zm(n)) {
                ((ll = 0), (at = null), v0(t));
                break;
              }
              ((t = function () {
                ((ll !== 2 && ll !== 9) || fl !== l || (ll = 7), Mt(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              ll = 7;
              break l;
            case 4:
              ll = 5;
              break l;
            case 7:
              zm(n)
                ? ((ll = 0), (at = null), v0(t))
                : ((ll = 0), (at = null), Ee(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (j.tag) {
                case 26:
                  c = j.memoizedState;
                case 5:
                case 27:
                  var f = j;
                  if (c ? k0(c) : f.stateNode.complete) {
                    ((ll = 0), (at = null));
                    var i = f.sibling;
                    if (i !== null) j = i;
                    else {
                      var o = f.return;
                      o !== null ? ((j = o), Sn(o)) : (j = null);
                    }
                    break t;
                  }
              }
              ((ll = 0), (at = null), Ee(l, t, n, 5));
              break;
            case 6:
              ((ll = 0), (at = null), Ee(l, t, n, 6));
              break;
            case 8:
              (Df(), (ol = 6));
              break l;
            default:
              throw Error(r(462));
          }
        }
        Iv();
        break;
      } catch (S) {
        f0(l, S);
      }
    while (!0);
    return (
      (Bt = Ua = null),
      (E.H = e),
      (E.A = u),
      (F = a),
      j !== null ? 0 : ((fl = null), (V = 0), Yu(), ol)
    );
  }
  function Iv() {
    for (; j !== null && !zy(); ) y0(j);
  }
  function y0(l) {
    var t = Bs(l.alternate, l, Kt);
    ((l.memoizedProps = l.pendingProps), t === null ? Sn(l) : (j = t));
  }
  function v0(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ns(a, t, t.pendingProps, t.type, void 0, V);
        break;
      case 11:
        t = Ns(a, t, t.pendingProps, t.type.render, t.ref, V);
        break;
      case 5:
        Lc(t);
      default:
        (Gs(a, t), (t = j = sm(t, Kt)), (t = Bs(a, t, Kt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? Sn(l) : (j = t));
  }
  function Ee(l, t, a, e) {
    ((Bt = Ua = null), Lc(t), (ie = null), (xe = 0));
    var u = t.return;
    try {
      if (jv(l, u, t, a, V)) {
        ((ol = 1), un(l, mt(a, l.current)), (j = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((j = u), n);
      ((ol = 1), un(l, mt(a, l.current)), (j = null));
      return;
    }
    t.flags & 32768
      ? (K || e === 1
          ? (l = !0)
          : he || (V & 536870912) !== 0
            ? (l = !1)
            : ((ia = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = lt.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        d0(t, l))
      : Sn(t);
  }
  function Sn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        d0(t, ia);
        return;
      }
      l = t.return;
      var a = Lv(t.alternate, t, Kt);
      if (a !== null) {
        j = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        j = t;
        return;
      }
      j = t = l;
    } while (t !== null);
    ol === 0 && (ol = 5);
  }
  function d0(l, t) {
    do {
      var a = xv(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (j = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        j = l;
        return;
      }
      j = l = a;
    } while (l !== null);
    ((ol = 6), (j = null));
  }
  function o0(l, t, a, e, u, n, c, f, i) {
    l.cancelPendingCommit = null;
    do En();
    while (Tl !== 0);
    if ((F & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= rc),
        Hy(l, a, n, c, f, i),
        l === fl && ((j = fl = null), (V = 0)),
        (ge = t),
        (ya = l),
        (Jt = a),
        (_f = n),
        (Of = u),
        (e0 = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            ad(bu, function () {
              return (E0(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = E.T), (E.T = null), (u = _.p), (_.p = 2), (c = F), (F |= 4));
        try {
          Kv(l, t, a);
        } finally {
          ((F = c), (_.p = u), (E.T = e));
        }
      }
      ((Tl = 1), h0(), r0(), g0());
    }
  }
  function h0() {
    if (Tl === 1) {
      Tl = 0;
      var l = ya,
        t = ge,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = E.T), (E.T = null));
        var e = _.p;
        _.p = 2;
        var u = F;
        F |= 4;
        try {
          $s(t, l);
          var n = Zf,
            c = tm(l.containerInfo),
            f = n.focusedElem,
            i = n.selectionRange;
          if (
            c !== f &&
            f &&
            f.ownerDocument &&
            lm(f.ownerDocument.documentElement, f)
          ) {
            if (i !== null && yc(f)) {
              var o = i.start,
                S = i.end;
              if ((S === void 0 && (S = o), "selectionStart" in f))
                ((f.selectionStart = o),
                  (f.selectionEnd = Math.min(S, f.value.length)));
              else {
                var z = f.ownerDocument || document,
                  h = (z && z.defaultView) || window;
                if (h.getSelection) {
                  var g = h.getSelection(),
                    M = f.textContent.length,
                    q = Math.min(i.start, M),
                    nl = i.end === void 0 ? q : Math.min(i.end, M);
                  !g.extend && q > nl && ((c = nl), (nl = q), (q = c));
                  var y = Pi(f, q),
                    m = Pi(f, nl);
                  if (
                    y &&
                    m &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== y.node ||
                      g.anchorOffset !== y.offset ||
                      g.focusNode !== m.node ||
                      g.focusOffset !== m.offset)
                  ) {
                    var d = z.createRange();
                    (d.setStart(y.node, y.offset),
                      g.removeAllRanges(),
                      q > nl
                        ? (g.addRange(d), g.extend(m.node, m.offset))
                        : (d.setEnd(m.node, m.offset), g.addRange(d)));
                  }
                }
              }
            }
            for (z = [], g = f; (g = g.parentNode); )
              g.nodeType === 1 &&
                z.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < z.length;
              f++
            ) {
              var b = z[f];
              ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
            }
          }
          ((Hn = !!jf), (Zf = jf = null));
        } finally {
          ((F = u), (_.p = e), (E.T = a));
        }
      }
      ((l.current = t), (Tl = 2));
    }
  }
  function r0() {
    if (Tl === 2) {
      Tl = 0;
      var l = ya,
        t = ge,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = E.T), (E.T = null));
        var e = _.p;
        _.p = 2;
        var u = F;
        F |= 4;
        try {
          xs(l, t.alternate, t);
        } finally {
          ((F = u), (_.p = e), (E.T = a));
        }
      }
      Tl = 3;
    }
  }
  function g0() {
    if (Tl === 4 || Tl === 3) {
      ((Tl = 0), Ty());
      var l = ya,
        t = ge,
        a = Jt,
        e = e0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Tl = 5)
        : ((Tl = 0), (ge = ya = null), S0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (sa = null),
        Jn(a),
        (t = t.stateNode),
        Fl && typeof Fl.onCommitFiberRoot == "function")
      )
        try {
          Fl.onCommitFiberRoot(Oe, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = E.T), (u = _.p), (_.p = 2), (E.T = null));
        try {
          for (var n = l.onRecoverableError, c = 0; c < e.length; c++) {
            var f = e[c];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          ((E.T = t), (_.p = u));
        }
      }
      ((Jt & 3) !== 0 && En(),
        Mt(l),
        (u = l.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? l === Mf
            ? fu++
            : ((fu = 0), (Mf = l))
          : (fu = 0),
        iu(0));
    }
  }
  function S0(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ve(t)));
  }
  function En() {
    return (h0(), r0(), g0(), E0());
  }
  function E0() {
    if (Tl !== 5) return !1;
    var l = ya,
      t = _f;
    _f = 0;
    var a = Jn(Jt),
      e = E.T,
      u = _.p;
    try {
      ((_.p = 32 > a ? 32 : a), (E.T = null), (a = Of), (Of = null));
      var n = ya,
        c = Jt;
      if (((Tl = 0), (ge = ya = null), (Jt = 0), (F & 6) !== 0))
        throw Error(r(331));
      var f = F;
      if (
        ((F |= 4),
        l0(n.current),
        ks(n, n.current, c, a),
        (F = f),
        iu(0, !1),
        Fl && typeof Fl.onPostCommitFiberRoot == "function")
      )
        try {
          Fl.onPostCommitFiberRoot(Oe, n);
        } catch {}
      return !0;
    } finally {
      ((_.p = u), (E.T = e), S0(l, t));
    }
  }
  function b0(l, t, a) {
    ((t = mt(a, t)),
      (t = uf(l.stateNode, t, 2)),
      (l = ua(l, t, 2)),
      l !== null && (De(l, 2), Mt(l)));
  }
  function tl(l, t, a) {
    if (l.tag === 3) b0(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          b0(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (sa === null || !sa.has(e)))
          ) {
            ((l = mt(a, l)),
              (a = zs(2)),
              (e = ua(t, a, 2)),
              e !== null && (Ts(a, e, t, l), De(e, 2), Mt(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Uf(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new Wv();
      var u = new Set();
      e.set(t, u);
    } else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
    u.has(a) ||
      ((Tf = !0), u.add(a), (l = Pv.bind(null, l, t, a)), t.then(l, l));
  }
  function Pv(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      fl === l &&
        (V & a) === a &&
        (ol === 4 || (ol === 3 && (V & 62914560) === V && 300 > $l() - dn)
          ? (F & 2) === 0 && Se(l, 0)
          : (Af |= a),
        re === V && (re = 0)),
      Mt(l));
  }
  function z0(l, t) {
    (t === 0 && (t = hi()), (l = Ma(l, t)), l !== null && (De(l, t), Mt(l)));
  }
  function ld(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), z0(l, a));
  }
  function td(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (e !== null && e.delete(t), z0(l, a));
  }
  function ad(l, t) {
    return Vn(l, t);
  }
  var bn = null,
    be = null,
    Hf = !1,
    zn = !1,
    qf = !1,
    da = 0;
  function Mt(l) {
    (l !== be &&
      l.next === null &&
      (be === null ? (bn = be = l) : (be = be.next = l)),
      (zn = !0),
      Hf || ((Hf = !0), ud()));
  }
  function iu(l, t) {
    if (!qf && zn) {
      qf = !0;
      do
        for (var a = !1, e = bn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes,
                f = e.pingedLanes;
              ((n = (1 << (31 - kl(42 | l) + 1)) - 1),
                (n &= u & ~(c & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), _0(e, n));
          } else
            ((n = V),
              (n = pu(
                e,
                e === fl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Me(e, n) || ((a = !0), _0(e, n)));
          e = e.next;
        }
      while (a);
      qf = !1;
    }
  }
  function ed() {
    T0();
  }
  function T0() {
    zn = Hf = !1;
    var l = 0;
    da !== 0 && od() && (l = da);
    for (var t = $l(), a = null, e = bn; e !== null; ) {
      var u = e.next,
        n = A0(e, t);
      (n === 0
        ? ((e.next = null),
          a === null ? (bn = u) : (a.next = u),
          u === null && (be = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (zn = !0)),
        (e = u));
    }
    ((Tl !== 0 && Tl !== 5) || iu(l), da !== 0 && (da = 0));
  }
  function A0(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var c = 31 - kl(n),
        f = 1 << c,
        i = u[c];
      (i === -1
        ? ((f & a) === 0 || (f & e) !== 0) && (u[c] = Uy(f, t))
        : i <= t && (l.expiredLanes |= f),
        (n &= ~f));
    }
    if (
      ((t = fl),
      (a = V),
      (a = pu(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (ll === 2 || ll === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && Ln(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Me(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && Ln(e), Jn(a))) {
        case 2:
        case 8:
          a = di;
          break;
        case 32:
          a = bu;
          break;
        case 268435456:
          a = oi;
          break;
        default:
          a = bu;
      }
      return (
        (e = p0.bind(null, l)),
        (a = Vn(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && Ln(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function p0(l, t) {
    if (Tl !== 0 && Tl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (En() && l.callbackNode !== a) return null;
    var e = V;
    return (
      (e = pu(
        l,
        l === fl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      e === 0
        ? null
        : (n0(l, e, t),
          A0(l, $l()),
          l.callbackNode != null && l.callbackNode === a
            ? p0.bind(null, l)
            : null)
    );
  }
  function _0(l, t) {
    if (En()) return null;
    n0(l, t, !0);
  }
  function ud() {
    rd(function () {
      (F & 6) !== 0 ? Vn(vi, ed) : T0();
    });
  }
  function Cf() {
    if (da === 0) {
      var l = ne;
      (l === 0 && ((l = zu), (zu <<= 1), (zu & 261888) === 0 && (zu = 256)),
        (da = l));
    }
    return da;
  }
  function O0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Du("" + l);
  }
  function M0(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function nd(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = O0((u[jl] || null).action),
        c = e.submitter;
      c &&
        ((t = (t = c[jl] || null)
          ? O0(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var f = new qu("action", "action", null, e, u);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (da !== 0) {
                  var i = c ? M0(u, c) : new FormData(u);
                  Ic(
                    a,
                    { pending: !0, data: i, method: u.method, action: n },
                    null,
                    i,
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (i = c ? M0(u, c) : new FormData(u)),
                  Ic(
                    a,
                    { pending: !0, data: i, method: u.method, action: n },
                    n,
                    i,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Rf = 0; Rf < hc.length; Rf++) {
    var Bf = hc[Rf],
      cd = Bf.toLowerCase(),
      fd = Bf[0].toUpperCase() + Bf.slice(1);
    St(cd, "on" + fd);
  }
  (St(um, "onAnimationEnd"),
    St(nm, "onAnimationIteration"),
    St(cm, "onAnimationStart"),
    St("dblclick", "onDoubleClick"),
    St("focusin", "onFocus"),
    St("focusout", "onBlur"),
    St(Av, "onTransitionRun"),
    St(pv, "onTransitionStart"),
    St(_v, "onTransitionCancel"),
    St(fm, "onTransitionEnd"),
    Ka("onMouseEnter", ["mouseout", "mouseover"]),
    Ka("onMouseLeave", ["mouseout", "mouseover"]),
    Ka("onPointerEnter", ["pointerout", "pointerover"]),
    Ka("onPointerLeave", ["pointerout", "pointerover"]),
    Aa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Aa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Aa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Aa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Aa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Aa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var mu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    id = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mu),
    );
  function D0(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = e.length - 1; 0 <= c; c--) {
            var f = e[c],
              i = f.instance,
              o = f.currentTarget;
            if (((f = f.listener), i !== n && u.isPropagationStopped()))
              break l;
            ((n = f), (u.currentTarget = o));
            try {
              n(u);
            } catch (S) {
              Bu(S);
            }
            ((u.currentTarget = null), (n = i));
          }
        else
          for (c = 0; c < e.length; c++) {
            if (
              ((f = e[c]),
              (i = f.instance),
              (o = f.currentTarget),
              (f = f.listener),
              i !== n && u.isPropagationStopped())
            )
              break l;
            ((n = f), (u.currentTarget = o));
            try {
              n(u);
            } catch (S) {
              Bu(S);
            }
            ((u.currentTarget = null), (n = i));
          }
      }
    }
  }
  function Z(l, t) {
    var a = t[wn];
    a === void 0 && (a = t[wn] = new Set());
    var e = l + "__bubble";
    a.has(e) || (N0(t, l, 2, !1), a.add(e));
  }
  function Yf(l, t, a) {
    var e = 0;
    (t && (e |= 4), N0(a, l, e, t));
  }
  var Tn = "_reactListening" + Math.random().toString(36).slice(2);
  function Gf(l) {
    if (!l[Tn]) {
      ((l[Tn] = !0),
        Ti.forEach(function (a) {
          a !== "selectionchange" && (id.has(a) || Yf(a, !1, l), Yf(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Tn] || ((t[Tn] = !0), Yf("selectionchange", !1, t));
    }
  }
  function N0(l, t, a, e) {
    switch (uy(t)) {
      case 2:
        var u = Yd;
        break;
      case 8:
        u = Gd;
        break;
      default:
        u = If;
    }
    ((a = u.bind(null, t, a, l)),
      (u = void 0),
      !ac ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
          ? l.addEventListener(t, a, { passive: u })
          : l.addEventListener(t, a, !1));
  }
  function Qf(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var c = e.tag;
        if (c === 3 || c === 4) {
          var f = e.stateNode.containerInfo;
          if (f === u) break;
          if (c === 4)
            for (c = e.return; c !== null; ) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = Va(f)), c === null)) return;
            if (((i = c.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              e = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        e = e.return;
      }
    Ri(function () {
      var o = n,
        S = lc(a),
        z = [];
      l: {
        var h = im.get(l);
        if (h !== void 0) {
          var g = qu,
            M = l;
          switch (l) {
            case "keypress":
              if (Uu(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = tv;
              break;
            case "focusin":
              ((M = "focus"), (g = cc));
              break;
            case "focusout":
              ((M = "blur"), (g = cc));
              break;
            case "beforeblur":
            case "afterblur":
              g = cc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Gi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Ly;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = uv;
              break;
            case um:
            case nm:
            case cm:
              g = Jy;
              break;
            case fm:
              g = cv;
              break;
            case "scroll":
            case "scrollend":
              g = Zy;
              break;
            case "wheel":
              g = iv;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Wy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Xi;
              break;
            case "toggle":
            case "beforetoggle":
              g = sv;
          }
          var q = (t & 4) !== 0,
            nl = !q && (l === "scroll" || l === "scrollend"),
            y = q ? (h !== null ? h + "Capture" : null) : h;
          q = [];
          for (var m = o, d; m !== null; ) {
            var b = m;
            if (
              ((d = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                d === null ||
                y === null ||
                ((b = He(m, y)), b != null && q.push(su(m, b, d))),
              nl)
            )
              break;
            m = m.return;
          }
          0 < q.length &&
            ((h = new g(h, M, null, a, S)), z.push({ event: h, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((h = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            h &&
              a !== Pn &&
              (M = a.relatedTarget || a.fromElement) &&
              (Va(M) || M[Za]))
          )
            break l;
          if (
            (g || h) &&
            ((h =
              S.window === S
                ? S
                : (h = S.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            g
              ? ((M = a.relatedTarget || a.toElement),
                (g = o),
                (M = M ? Va(M) : null),
                M !== null &&
                  ((nl = il(M)),
                  (q = M.tag),
                  M !== nl || (q !== 5 && q !== 27 && q !== 6)) &&
                  (M = null))
              : ((g = null), (M = o)),
            g !== M)
          ) {
            if (
              ((q = Gi),
              (b = "onMouseLeave"),
              (y = "onMouseEnter"),
              (m = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((q = Xi),
                (b = "onPointerLeave"),
                (y = "onPointerEnter"),
                (m = "pointer")),
              (nl = g == null ? h : Ue(g)),
              (d = M == null ? h : Ue(M)),
              (h = new q(b, m + "leave", g, a, S)),
              (h.target = nl),
              (h.relatedTarget = d),
              (b = null),
              Va(S) === o &&
                ((q = new q(y, m + "enter", M, a, S)),
                (q.target = d),
                (q.relatedTarget = nl),
                (b = q)),
              (nl = b),
              g && M)
            )
              t: {
                for (q = md, y = g, m = M, d = 0, b = y; b; b = q(b)) d++;
                b = 0;
                for (var U = m; U; U = q(U)) b++;
                for (; 0 < d - b; ) ((y = q(y)), d--);
                for (; 0 < b - d; ) ((m = q(m)), b--);
                for (; d--; ) {
                  if (y === m || (m !== null && y === m.alternate)) {
                    q = y;
                    break t;
                  }
                  ((y = q(y)), (m = q(m)));
                }
                q = null;
              }
            else q = null;
            (g !== null && U0(z, h, g, q, !1),
              M !== null && nl !== null && U0(z, nl, M, q, !0));
          }
        }
        l: {
          if (
            ((h = o ? Ue(o) : window),
            (g = h.nodeName && h.nodeName.toLowerCase()),
            g === "select" || (g === "input" && h.type === "file"))
          )
            var W = wi;
          else if (Ki(h))
            if (Wi) W = bv;
            else {
              W = Sv;
              var N = gv;
            }
          else
            ((g = h.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (h.type !== "checkbox" && h.type !== "radio")
                ? o && In(o.elementType) && (W = wi)
                : (W = Ev));
          if (W && (W = W(l, o))) {
            Ji(z, W, a, S);
            break l;
          }
          (N && N(l, h, o),
            l === "focusout" &&
              o &&
              h.type === "number" &&
              o.memoizedProps.value != null &&
              kn(h, "number", h.value));
        }
        switch (((N = o ? Ue(o) : window), l)) {
          case "focusin":
            (Ki(N) || N.contentEditable === "true") &&
              ((ka = N), (vc = o), (Xe = null));
            break;
          case "focusout":
            Xe = vc = ka = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((dc = !1), am(z, a, S));
            break;
          case "selectionchange":
            if (Tv) break;
          case "keydown":
          case "keyup":
            am(z, a, S);
        }
        var Q;
        if (ic)
          l: {
            switch (l) {
              case "compositionstart":
                var L = "onCompositionStart";
                break l;
              case "compositionend":
                L = "onCompositionEnd";
                break l;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break l;
            }
            L = void 0;
          }
        else
          Fa
            ? Li(l, a) && (L = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (L = "onCompositionStart");
        (L &&
          (ji &&
            a.locale !== "ko" &&
            (Fa || L !== "onCompositionStart"
              ? L === "onCompositionEnd" && Fa && (Q = Bi())
              : ((kt = S),
                (ec = "value" in kt ? kt.value : kt.textContent),
                (Fa = !0))),
          (N = An(o, L)),
          0 < N.length &&
            ((L = new Qi(L, l, null, a, S)),
            z.push({ event: L, listeners: N }),
            Q ? (L.data = Q) : ((Q = xi(a)), Q !== null && (L.data = Q)))),
          (Q = vv ? dv(l, a) : ov(l, a)) &&
            ((L = An(o, "onBeforeInput")),
            0 < L.length &&
              ((N = new Qi("onBeforeInput", "beforeinput", null, a, S)),
              z.push({ event: N, listeners: L }),
              (N.data = Q))),
          nd(z, l, o, a, S));
      }
      D0(z, t);
    });
  }
  function su(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function An(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = He(l, a)),
          u != null && e.unshift(su(l, u, n)),
          (u = He(l, t)),
          u != null && e.push(su(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function md(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function U0(l, t, a, e, u) {
    for (var n = t._reactName, c = []; a !== null && a !== e; ) {
      var f = a,
        i = f.alternate,
        o = f.stateNode;
      if (((f = f.tag), i !== null && i === e)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        o === null ||
        ((i = o),
        u
          ? ((o = He(a, n)), o != null && c.unshift(su(a, o, i)))
          : u || ((o = He(a, n)), o != null && c.push(su(a, o, i)))),
        (a = a.return));
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var sd = /\r\n?/g,
    yd = /\u0000|\uFFFD/g;
  function H0(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        sd,
        `
`,
      )
      .replace(yd, "");
  }
  function q0(l, t) {
    return ((t = H0(t)), H0(l) === t);
  }
  function ul(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            wa(l, "" + e);
        break;
      case "className":
        Ou(l, "class", e);
        break;
      case "tabIndex":
        Ou(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ou(l, a, e);
        break;
      case "style":
        qi(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Ou(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((e = Du("" + e)), l.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && ul(l, t, "name", u.name, u, null),
                ul(l, t, "formEncType", u.formEncType, u, null),
                ul(l, t, "formMethod", u.formMethod, u, null),
                ul(l, t, "formTarget", u.formTarget, u, null))
              : (ul(l, t, "encType", u.encType, u, null),
                ul(l, t, "method", u.method, u, null),
                ul(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = Du("" + e)), l.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (l.onclick = Ht);
        break;
      case "onScroll":
        e != null && Z("scroll", l);
        break;
      case "onScrollEnd":
        e != null && Z("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(r(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Du("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
              e != null &&
              typeof e != "function" &&
              typeof e != "symbol"
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        (Z("beforetoggle", l), Z("toggle", l), _u(l, "popover", e));
        break;
      case "xlinkActuate":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        _u(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Xy.get(a) || a), _u(l, a, e));
    }
  }
  function Xf(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        qi(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(r(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") && wa(l, "" + e);
        break;
      case "onScroll":
        e != null && Z("scroll", l);
        break;
      case "onScrollEnd":
        e != null && Z("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Ht);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ai.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[jl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u));
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
                ? l.setAttribute(a, "")
                : _u(l, a, e);
          }
    }
  }
  function Ul(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Z("error", l), Z("load", l));
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  ul(l, t, n, c, a, null);
              }
          }
        (u && ul(l, t, "srcSet", a.srcSet, a, null),
          e && ul(l, t, "src", a.src, a, null));
        return;
      case "input":
        Z("invalid", l);
        var f = (n = c = u = null),
          i = null,
          o = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var S = a[e];
            if (S != null)
              switch (e) {
                case "name":
                  u = S;
                  break;
                case "type":
                  c = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  o = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  f = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(r(137, t));
                  break;
                default:
                  ul(l, t, e, S, a, null);
              }
          }
        Di(l, n, f, i, o, c, u, !1);
        return;
      case "select":
        (Z("invalid", l), (e = c = n = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((f = a[u]), f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                e = f;
              default:
                ul(l, t, u, f, a, null);
            }
        ((t = n),
          (a = c),
          (l.multiple = !!e),
          t != null ? Ja(l, !!e, t, !1) : a != null && Ja(l, !!e, a, !0));
        return;
      case "textarea":
        (Z("invalid", l), (n = u = e = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((f = a[c]), f != null))
            switch (c) {
              case "value":
                e = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(r(91));
                break;
              default:
                ul(l, t, c, f, a, null);
            }
        Ui(l, e, u, n);
        return;
      case "option":
        for (i in a)
          a.hasOwnProperty(i) &&
            ((e = a[i]), e != null) &&
            (i === "selected"
              ? (l.selected =
                  e && typeof e != "function" && typeof e != "symbol")
              : ul(l, t, i, e, a, null));
        return;
      case "dialog":
        (Z("beforetoggle", l), Z("toggle", l), Z("cancel", l), Z("close", l));
        break;
      case "iframe":
      case "object":
        Z("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < mu.length; e++) Z(mu[e], l);
        break;
      case "image":
        (Z("error", l), Z("load", l));
        break;
      case "details":
        Z("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (Z("error", l), Z("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (o in a)
          if (a.hasOwnProperty(o) && ((e = a[o]), e != null))
            switch (o) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                ul(l, t, o, e, a, null);
            }
        return;
      default:
        if (In(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((e = a[S]), e !== void 0 && Xf(l, t, S, e, a, void 0));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && ((e = a[f]), e != null && ul(l, t, f, e, a, null));
  }
  function vd(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          c = null,
          f = null,
          i = null,
          o = null,
          S = null;
        for (g in a) {
          var z = a[g];
          if (a.hasOwnProperty(g) && z != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = z;
              default:
                e.hasOwnProperty(g) || ul(l, t, g, null, e, z);
            }
        }
        for (var h in e) {
          var g = e[h];
          if (((z = a[h]), e.hasOwnProperty(h) && (g != null || z != null)))
            switch (h) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                o = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(137, t));
                break;
              default:
                g !== z && ul(l, t, h, g, e, z);
            }
        }
        Fn(l, c, f, i, o, S, n, u);
        return;
      case "select":
        g = c = f = h = null;
        for (n in a)
          if (((i = a[n]), a.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = i;
              default:
                e.hasOwnProperty(n) || ul(l, t, n, null, e, i);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (i = a[u]),
            e.hasOwnProperty(u) && (n != null || i != null))
          )
            switch (u) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== i && ul(l, t, u, n, e, i);
            }
        ((t = f),
          (a = c),
          (e = g),
          h != null
            ? Ja(l, !!a, h, !1)
            : !!e != !!a &&
              (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = h = null;
        for (f in a)
          if (
            ((u = a[f]),
            a.hasOwnProperty(f) && u != null && !e.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, f, null, e, u);
            }
        for (c in e)
          if (
            ((u = e[c]),
            (n = a[c]),
            e.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                h = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && ul(l, t, c, u, e, n);
            }
        Ni(l, h, g);
        return;
      case "option":
        for (var M in a)
          ((h = a[M]),
            a.hasOwnProperty(M) &&
              h != null &&
              !e.hasOwnProperty(M) &&
              (M === "selected" ? (l.selected = !1) : ul(l, t, M, null, e, h)));
        for (i in e)
          ((h = e[i]),
            (g = a[i]),
            e.hasOwnProperty(i) &&
              h !== g &&
              (h != null || g != null) &&
              (i === "selected"
                ? (l.selected =
                    h && typeof h != "function" && typeof h != "symbol")
                : ul(l, t, i, h, e, g)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in a)
          ((h = a[q]),
            a.hasOwnProperty(q) &&
              h != null &&
              !e.hasOwnProperty(q) &&
              ul(l, t, q, null, e, h));
        for (o in e)
          if (
            ((h = e[o]),
            (g = a[o]),
            e.hasOwnProperty(o) && h !== g && (h != null || g != null))
          )
            switch (o) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(r(137, t));
                break;
              default:
                ul(l, t, o, h, e, g);
            }
        return;
      default:
        if (In(t)) {
          for (var nl in a)
            ((h = a[nl]),
              a.hasOwnProperty(nl) &&
                h !== void 0 &&
                !e.hasOwnProperty(nl) &&
                Xf(l, t, nl, void 0, e, h));
          for (S in e)
            ((h = e[S]),
              (g = a[S]),
              !e.hasOwnProperty(S) ||
                h === g ||
                (h === void 0 && g === void 0) ||
                Xf(l, t, S, h, e, g));
          return;
        }
    }
    for (var y in a)
      ((h = a[y]),
        a.hasOwnProperty(y) &&
          h != null &&
          !e.hasOwnProperty(y) &&
          ul(l, t, y, null, e, h));
    for (z in e)
      ((h = e[z]),
        (g = a[z]),
        !e.hasOwnProperty(z) ||
          h === g ||
          (h == null && g == null) ||
          ul(l, t, z, h, e, g));
  }
  function C0(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function dd() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0;
        e < a.length;
        e++
      ) {
        var u = a[e],
          n = u.transferSize,
          c = u.initiatorType,
          f = u.duration;
        if (n && f && C0(c)) {
          for (c = 0, f = u.responseEnd, e += 1; e < a.length; e++) {
            var i = a[e],
              o = i.startTime;
            if (o > f) break;
            var S = i.transferSize,
              z = i.initiatorType;
            S &&
              C0(z) &&
              ((i = i.responseEnd), (c += S * (i < f ? 1 : (f - o) / (i - o))));
          }
          if ((--e, (t += (8 * (n + c)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var jf = null,
    Zf = null;
  function pn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function R0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function B0(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Vf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lf = null;
  function od() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Lf
        ? !1
        : ((Lf = l), !0)
      : ((Lf = null), !1);
  }
  var Y0 = typeof setTimeout == "function" ? setTimeout : void 0,
    hd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    G0 = typeof Promise == "function" ? Promise : void 0,
    rd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof G0 < "u"
          ? function (l) {
              return G0.resolve(null).then(l).catch(gd);
            }
          : Y0;
  function gd(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function oa(l) {
    return l === "head";
  }
  function Q0(l, t) {
    var a = t,
      e = 0;
    do {
      var u = a.nextSibling;
      if ((l.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (e === 0) {
            (l.removeChild(u), pe(t));
            return;
          }
          e--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          e++;
        else if (a === "html") yu(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), yu(a));
          for (var n = a.firstChild; n; ) {
            var c = n.nextSibling,
              f = n.nodeName;
            (n[Ne] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = c));
          }
        } else a === "body" && yu(l.ownerDocument.body);
      a = u;
    } while (a);
    pe(t);
  }
  function X0(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        e && e.nodeType === 8)
      )
        if (((a = e.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = e;
    } while (a);
  }
  function xf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (xf(a), Wn(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Sd(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Ne])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = ot(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Ed(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = ot(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function j0(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = ot(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Kf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Jf(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function bd(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function () {
        (t(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
    }
  }
  function ot(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var wf = null;
  function Z0(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return ot(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function V0(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function L0(l, t, a) {
    switch (((t = pn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(r(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(r(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function yu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Wn(l);
  }
  var ht = new Map(),
    x0 = new Set();
  function _n(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var wt = _.d;
  _.d = { f: zd, r: Td, D: Ad, C: pd, L: _d, m: Od, X: Dd, S: Md, M: Nd };
  function zd() {
    var l = wt.f(),
      t = rn();
    return l || t;
  }
  function Td(l) {
    var t = La(l);
    t !== null && t.tag === 5 && t.type === "form" ? fs(t) : wt.r(l);
  }
  var ze = typeof document > "u" ? null : document;
  function K0(l, t, a) {
    var e = ze;
    if (e && typeof t == "string" && t) {
      var u = ft(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        x0.has(u) ||
          (x0.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")),
            Ul(t, "link", l),
            Al(t),
            e.head.appendChild(t))));
    }
  }
  function Ad(l) {
    (wt.D(l), K0("dns-prefetch", l, null));
  }
  function pd(l, t) {
    (wt.C(l, t), K0("preconnect", l, t));
  }
  function _d(l, t, a) {
    wt.L(l, t, a);
    var e = ze;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + ft(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + ft(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + ft(a.imageSizes) + '"]'))
        : (u += '[href="' + ft(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = Te(l);
          break;
        case "script":
          n = Ae(l);
      }
      ht.has(n) ||
        ((l = C(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        ht.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(vu(n))) ||
          (t === "script" && e.querySelector(du(n))) ||
          ((t = e.createElement("link")),
          Ul(t, "link", l),
          Al(t),
          e.head.appendChild(t)));
    }
  }
  function Od(l, t) {
    wt.m(l, t);
    var a = ze;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ft(e) + '"][href="' + ft(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ae(l);
      }
      if (
        !ht.has(n) &&
        ((l = C({ rel: "modulepreload", href: l }, t)),
        ht.set(n, l),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(du(n))) return;
        }
        ((e = a.createElement("link")),
          Ul(e, "link", l),
          Al(e),
          a.head.appendChild(e));
      }
    }
  }
  function Md(l, t, a) {
    wt.S(l, t, a);
    var e = ze;
    if (e && l) {
      var u = xa(e).hoistableStyles,
        n = Te(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = e.querySelector(vu(n)))) f.loading = 5;
        else {
          ((l = C({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = ht.get(n)) && Wf(l, a));
          var i = (c = e.createElement("link"));
          (Al(i),
            Ul(i, "link", l),
            (i._p = new Promise(function (o, S) {
              ((i.onload = o), (i.onerror = S));
            })),
            i.addEventListener("load", function () {
              f.loading |= 1;
            }),
            i.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            On(c, t, e));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: f }),
          u.set(n, c));
      }
    }
  }
  function Dd(l, t) {
    wt.X(l, t);
    var a = ze;
    if (a && l) {
      var e = xa(a).hoistableScripts,
        u = Ae(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(du(u))),
        n ||
          ((l = C({ src: l, async: !0 }, t)),
          (t = ht.get(u)) && $f(l, t),
          (n = a.createElement("script")),
          Al(n),
          Ul(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Nd(l, t) {
    wt.M(l, t);
    var a = ze;
    if (a && l) {
      var e = xa(a).hoistableScripts,
        u = Ae(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(du(u))),
        n ||
          ((l = C({ src: l, async: !0, type: "module" }, t)),
          (t = ht.get(u)) && $f(l, t),
          (n = a.createElement("script")),
          Al(n),
          Ul(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function J0(l, t, a, e) {
    var u = (u = X.current) ? _n(u) : null;
    if (!u) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Te(a.href)),
            (a = xa(u).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Te(a.href);
          var n = xa(u).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = u.querySelector(vu(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              ht.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                ht.set(l, a),
                n || Ud(u, l, a, c.state))),
            t && e === null)
          )
            throw Error(r(528, ""));
          return c;
        }
        if (t && e !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ae(a)),
              (a = xa(u).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, l));
    }
  }
  function Te(l) {
    return 'href="' + ft(l) + '"';
  }
  function vu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function w0(l) {
    return C({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Ud(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        Ul(t, "link", a),
        Al(t),
        l.head.appendChild(t));
  }
  function Ae(l) {
    return '[src="' + ft(l) + '"]';
  }
  function du(l) {
    return "script[async]" + l;
  }
  function W0(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + ft(a.href) + '"]');
          if (e) return ((t.instance = e), Al(e), e);
          var u = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            Al(e),
            Ul(e, "style", u),
            On(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = Te(a.href);
          var n = l.querySelector(vu(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Al(n), n);
          ((e = w0(a)),
            (u = ht.get(u)) && Wf(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Al(n));
          var c = n;
          return (
            (c._p = new Promise(function (f, i) {
              ((c.onload = f), (c.onerror = i));
            })),
            Ul(n, "link", e),
            (t.state.loading |= 4),
            On(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Ae(a.src)),
            (u = l.querySelector(du(n)))
              ? ((t.instance = u), Al(u), u)
              : ((e = a),
                (u = ht.get(n)) && ((e = C({}, a)), $f(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Al(u),
                Ul(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), On(e, a.precedence, l));
    return t.instance;
  }
  function On(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        c = 0;
      c < e.length;
      c++
    ) {
      var f = e[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Wf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function $f(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Mn = null;
  function $0(l, t, a) {
    if (Mn === null) {
      var e = new Map(),
        u = (Mn = new Map());
      u.set(a, e);
    } else ((u = Mn), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[Ne] ||
          n[Ol] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = e.get(c);
        f ? f.push(n) : e.set(c, [n]);
      }
    }
    return e;
  }
  function F0(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Hd(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function k0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function qd(l, t, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = Te(e.href),
          n = t.querySelector(vu(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Dn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            Al(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (e = w0(e)),
          (u = ht.get(u)) && Wf(e, u),
          (n = n.createElement("link")),
          Al(n));
        var c = n;
        ((c._p = new Promise(function (f, i) {
          ((c.onload = f), (c.onerror = i));
        })),
          Ul(n, "link", e),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Dn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Ff = 0;
  function Cd(l, t) {
    return (
      l.stylesheets && l.count === 0 && Un(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var e = setTimeout(function () {
              if ((l.stylesheets && Un(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && Ff === 0 && (Ff = 62500 * dd());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Un(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > Ff ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(e), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Dn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Un(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Nn = null;
  function Un(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Nn = new Map()),
        t.forEach(Rd, l),
        (Nn = null),
        Dn.call(l)));
  }
  function Rd(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Nn.get(l);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Nn.set(l, a));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (e = c));
        }
        e && a.set(null, e);
      }
      ((u = t.instance),
        (c = u.getAttribute("data-precedence")),
        (n = a.get(c) || e),
        n === e && a.set(null, u),
        a.set(c, u),
        this.count++,
        (e = Dn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ou = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: R,
    _currentValue2: R,
    _threadCount: 0,
  };
  function Bd(l, t, a, e, u, n, c, f, i) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = xn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xn(0)),
      (this.hiddenUpdates = xn(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map()));
  }
  function I0(l, t, a, e, u, n, c, f, i, o, S, z) {
    return (
      (l = new Bd(l, t, a, c, i, o, S, z, f)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = Pl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Dc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      qc(n),
      l
    );
  }
  function P0(l) {
    return l ? ((l = le), l) : le;
  }
  function ly(l, t, a, e, u, n) {
    ((u = P0(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = ea(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = ua(l, e, t)),
      a !== null && (Jl(a, l, t), Je(a, l, t)));
  }
  function ty(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function kf(l, t) {
    (ty(l, t), (l = l.alternate) && ty(l, t));
  }
  function ay(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ma(l, 67108864);
      (t !== null && Jl(t, l, 67108864), kf(l, 67108864));
    }
  }
  function ey(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ut();
      t = Kn(t);
      var a = Ma(l, t);
      (a !== null && Jl(a, l, t), kf(l, t));
    }
  }
  var Hn = !0;
  function Yd(l, t, a, e) {
    var u = E.T;
    E.T = null;
    var n = _.p;
    try {
      ((_.p = 2), If(l, t, a, e));
    } finally {
      ((_.p = n), (E.T = u));
    }
  }
  function Gd(l, t, a, e) {
    var u = E.T;
    E.T = null;
    var n = _.p;
    try {
      ((_.p = 8), If(l, t, a, e));
    } finally {
      ((_.p = n), (E.T = u));
    }
  }
  function If(l, t, a, e) {
    if (Hn) {
      var u = Pf(e);
      if (u === null) (Qf(l, t, e, qn, a), ny(l, e));
      else if (Xd(u, l, t, a, e)) e.stopPropagation();
      else if ((ny(l, e), t & 4 && -1 < Qd.indexOf(l))) {
        for (; u !== null; ) {
          var n = La(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Ta(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var i = 1 << (31 - kl(c));
                      ((f.entanglements[1] |= i), (c &= ~i));
                    }
                    (Mt(n), (F & 6) === 0 && ((on = $l() + 500), iu(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Ma(n, 2)), f !== null && Jl(f, n, 2), rn(), kf(n, 2));
            }
          if (((n = Pf(e)), n === null && Qf(l, t, e, qn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Qf(l, t, e, null, a);
    }
  }
  function Pf(l) {
    return ((l = lc(l)), li(l));
  }
  var qn = null;
  function li(l) {
    if (((qn = null), (l = Va(l)), l !== null)) {
      var t = il(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = _l(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = rt(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((qn = l), null);
  }
  function uy(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ay()) {
          case vi:
            return 2;
          case di:
            return 8;
          case bu:
          case py:
            return 32;
          case oi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ti = !1,
    ha = null,
    ra = null,
    ga = null,
    hu = new Map(),
    ru = new Map(),
    Sa = [],
    Qd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function ny(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        ra = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        hu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ru.delete(t.pointerId);
    }
  }
  function gu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = La(t)), t !== null && ay(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function Xd(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ((ha = gu(ha, l, t, a, e, u)), !0);
      case "dragenter":
        return ((ra = gu(ra, l, t, a, e, u)), !0);
      case "mouseover":
        return ((ga = gu(ga, l, t, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (hu.set(n, gu(hu.get(n) || null, l, t, a, e, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          ru.set(n, gu(ru.get(n) || null, l, t, a, e, u)),
          !0
        );
    }
    return !1;
  }
  function cy(l) {
    var t = Va(l.target);
    if (t !== null) {
      var a = il(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = _l(a)), t !== null)) {
            ((l.blockedOn = t),
              bi(l.priority, function () {
                ey(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = rt(a)), t !== null)) {
            ((l.blockedOn = t),
              bi(l.priority, function () {
                ey(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Cn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Pf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ((Pn = e), a.target.dispatchEvent(e), (Pn = null));
      } else return ((t = La(a)), t !== null && ay(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function fy(l, t, a) {
    Cn(l) && a.delete(t);
  }
  function jd() {
    ((ti = !1),
      ha !== null && Cn(ha) && (ha = null),
      ra !== null && Cn(ra) && (ra = null),
      ga !== null && Cn(ga) && (ga = null),
      hu.forEach(fy),
      ru.forEach(fy));
  }
  function Rn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ti ||
        ((ti = !0),
        p.unstable_scheduleCallback(p.unstable_NormalPriority, jd)));
  }
  var Bn = null;
  function iy(l) {
    Bn !== l &&
      ((Bn = l),
      p.unstable_scheduleCallback(p.unstable_NormalPriority, function () {
        Bn === l && (Bn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (li(e || a) === null) continue;
            break;
          }
          var n = La(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Ic(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function pe(l) {
    function t(i) {
      return Rn(i, l);
    }
    (ha !== null && Rn(ha, l),
      ra !== null && Rn(ra, l),
      ga !== null && Rn(ga, l),
      hu.forEach(t),
      ru.forEach(t));
    for (var a = 0; a < Sa.length; a++) {
      var e = Sa[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Sa.length && ((a = Sa[0]), a.blockedOn === null); )
      (cy(a), a.blockedOn === null && Sa.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          c = u[jl] || null;
        if (typeof n == "function") c || iy(a);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[jl] || null))) f = c.formAction;
            else if (li(u) !== null) continue;
          } else f = c.action;
          (typeof f == "function" ? (a[e + 1] = f) : (a.splice(e, 3), (e -= 3)),
            iy(a));
        }
      }
  }
  function my() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (u = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), e || setTimeout(a, 20));
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var e = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((e = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function ai(l) {
    this._internalRoot = l;
  }
  ((Yn.prototype.render = ai.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var a = t.current,
        e = ut();
      ly(a, e, l, t, null, null);
    }),
    (Yn.prototype.unmount = ai.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (ly(l.current, 2, null, l, null, null), rn(), (t[Za] = null));
        }
      }));
  function Yn(l) {
    this._internalRoot = l;
  }
  Yn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Ei();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Sa.length && t !== 0 && t < Sa[a].priority; a++);
      (Sa.splice(a, 0, l), a === 0 && cy(l));
    }
  };
  var sy = J.version;
  if (sy !== "19.2.8") throw Error(r(527, sy, "19.2.8"));
  _.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(r(188))
        : ((l = Object.keys(l).join(",")), Error(r(268, l)));
    return (
      (l = A(t)),
      (l = l !== null ? I(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Zd = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.2.8",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        ((Oe = Gn.inject(Zd)), (Fl = Gn));
      } catch {}
  }
  return (
    (Su.createRoot = function (l, t) {
      if (!k(l)) throw Error(r(299));
      var a = !1,
        e = "",
        u = gs,
        n = Ss,
        c = Es;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = I0(l, 1, !1, null, null, a, e, null, u, n, c, my)),
        (l[Za] = t.current),
        Gf(l),
        new ai(t)
      );
    }),
    (Su.hydrateRoot = function (l, t, a) {
      if (!k(l)) throw Error(r(299));
      var e = !1,
        u = "",
        n = gs,
        c = Ss,
        f = Es,
        i = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (f = a.onRecoverableError),
          a.formState !== void 0 && (i = a.formState)),
        (t = I0(l, 1, !0, t, a ?? null, e, u, i, n, c, f, my)),
        (t.context = P0(null)),
        (a = t.current),
        (e = ut()),
        (e = Kn(e)),
        (u = ea(e)),
        (u.callback = null),
        ua(a, u, e),
        (a = e),
        (t.current.lanes = a),
        De(t, a),
        Mt(t),
        (l[Za] = t.current),
        Gf(l),
        new Yn(t)
      );
    }),
    (Su.version = "19.2.8"),
    Su
  );
}
var Sy;
function Fd() {
  if (Sy) return ui.exports;
  Sy = 1;
  function p() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (J) {
        console.error(J);
      }
  }
  return (p(), (ui.exports = $d()), ui.exports);
}
var kd = Fd();
const Id = [
    "New Joinee Kits",
    "Work Anniversary",
    "Diwali Hampers",
    "Client Gifting",
    "Employee Birthdays",
  ],
  Pd = [
    [
      "prakash",
      "Prakash",
      "From ₹499 / box",
      "Diyas, dry fruits, and a handwritten note — the essential festive gesture.",
    ],
    [
      "utsav",
      "Utsav",
      "From ₹1,200 / box",
      "A fuller celebration set with premium sweets, decor, and Koshya's signature seal.",
    ],
    [
      "shubh",
      "Shubh Labh",
      "From ₹2,500 / box",
      "The leadership hamper — artisanal, boxed for prosperity, built for lasting impressions.",
    ],
  ],
  lo = [
    [
      "Curated to Your Brand",
      "Every hamper aligned to your colours, values, and campaign story.",
    ],
    [
      "End-to-End Execution",
      "From concept to doorstep — sourcing, packing, and dispatch handled for you.",
    ],
    [
      "Pan-India Delivery",
      "Multi-location shipping for distributed teams, handled from one sheet.",
    ],
    [
      "A Dedicated Partner",
      "One point of contact from first enquiry through festival-season scale-up.",
    ],
  ],
  to = [
    [
      "The onboarding kits landed exactly on brand — our new hires posted about it before we did.",
      "People Team Lead",
      "Series A SaaS Startup",
    ],
    [
      "Diwali hampers were ready two days early, every box identical in finish. Zero follow-ups needed.",
      "HR Business Partner",
      "Pune-based Fintech",
    ],
    [
      "Koshya understood our budget and still made it feel premium. That balance is rare.",
      "Co-founder",
      "D2C Consumer Brand",
    ],
  ],
  ao = [
    [
      "What's the minimum order quantity?",
      "MOQ starts at 100 units. For larger orders, we can recommend the most cost-effective packaging and delivery plan.",
    ],
    [
      "How long does a bulk order take?",
      "7–10 business days for orders up to 200 units. Custom, heavily personalised kits may need 12–15 days.",
    ],
    [
      "Can you deliver to multiple employee addresses?",
      "Yes — share an address sheet and we handle multi-location dispatch across India.",
    ],
    [
      "Can I see a sample before placing a bulk order?",
      "Yes, sample approval is available, usually on a paid basis, for premium or large-volume orders.",
    ],
  ];
function Ey() {
  return v.createElement(
    "svg",
    {
      className: "diya",
      viewBox: "0 0 24 24",
      width: "26",
      height: "26",
      fill: "none",
      stroke: "#6B1E2B",
      strokeWidth: "1.3",
      "aria-hidden": "true",
    },
    v.createElement("ellipse", { cx: "12", cy: "15", rx: "8", ry: "2.4" }),
    v.createElement("path", {
      d: "M12 10c-1.4-1.6-1-3.4 0-5 1 1.6 1.4 3.4 0 5z",
    }),
  );
}
function eo() {
  return v.createElement(
    "header",
    null,
    v.createElement(
      "nav",
      { className: "nav", "aria-label": "Main navigation" },
      v.createElement("a", { href: "#top", className: "logo" }, "KOSHYA"),
      v.createElement(
        "div",
        { className: "navlinks" },
        v.createElement("a", { href: "#occasions" }, "Gifting"),
        v.createElement("a", { href: "#tiers" }, "Collections"),
        v.createElement("a", { href: "#differentiators" }, "Why Koshya"),
        v.createElement("a", { href: "#faq" }, "FAQ"),
      ),
      v.createElement(
        "a",
        { className: "nav-cta", href: "#enquire" },
        "Start an Enquiry",
      ),
    ),
  );
}
function uo() {
  const [p, J] = mi.useState(!1);
  function w(r) {
    (r.preventDefault(), J(!0));
  }
  return v.createElement(
    "form",
    { className: "enquiry-form", onSubmit: w },
    p
      ? v.createElement(
          "div",
          { className: "form-success", role: "status" },
          v.createElement("strong", null, "Thank you!"),
          v.createElement("br", null),
          "We will be in touch within 24 hours.",
        )
      : v.createElement(
          v.Fragment,
          null,
          v.createElement(
            "div",
            null,
            v.createElement("label", { htmlFor: "name" }, "Name"),
            v.createElement("input", {
              id: "name",
              required: !0,
              name: "name",
              type: "text",
              placeholder: "Your name",
            }),
          ),
          v.createElement(
            "div",
            null,
            v.createElement("label", { htmlFor: "company" }, "Company"),
            v.createElement("input", {
              id: "company",
              required: !0,
              name: "company",
              type: "text",
              placeholder: "Company name",
            }),
          ),
          v.createElement(
            "div",
            null,
            v.createElement("label", { htmlFor: "phone" }, "Phone"),
            v.createElement("input", {
              id: "phone",
              required: !0,
              name: "phone",
              type: "tel",
              placeholder: "+91",
            }),
          ),
          v.createElement(
            "div",
            null,
            v.createElement(
              "label",
              { htmlFor: "quantity" },
              "Estimated Quantity",
            ),
            v.createElement("input", {
              id: "quantity",
              name: "quantity",
              type: "number",
              min: "1",
              placeholder: "e.g. 50",
            }),
          ),
          v.createElement(
            "div",
            null,
            v.createElement("label", { htmlFor: "occasion" }, "Occasion"),
            v.createElement(
              "select",
              { id: "occasion", name: "occasion", defaultValue: "New Joinee" },
              v.createElement("option", null, "New Joinee"),
              v.createElement("option", null, "Work Anniversary"),
              v.createElement("option", null, "Diwali Gifting"),
              v.createElement("option", null, "Employee Birthdays"),
              v.createElement("option", null, "Client Gifting"),
            ),
          ),
          v.createElement(
            "div",
            null,
            v.createElement("label", { htmlFor: "budget" }, "Budget per Gift"),
            v.createElement(
              "select",
              { id: "budget", name: "budget", defaultValue: "₹500 – ₹1000" },
              v.createElement("option", null, "₹500 – ₹1000"),
              v.createElement("option", null, "₹1000 – ₹2000"),
              v.createElement("option", null, "₹2000 – ₹3500"),
              v.createElement("option", null, "₹3500+"),
            ),
          ),
          v.createElement(
            "button",
            { className: "full", type: "submit" },
            "Send Enquiry",
          ),
        ),
  );
}
function no() {
  const [p, J] = mi.useState(0);
  return v.createElement(
    "section",
    { className: "faq", id: "faq" },
    v.createElement(
      "div",
      { className: "section-head" },
      v.createElement("div", { className: "eyebrow" }, "Key Questions"),
      v.createElement("h2", null, "Frequently Asked"),
    ),
    ao.map(([w, r], k) =>
      v.createElement(
        "details",
        {
          className: "faq-item",
          key: w,
          open: p === k,
          onToggle: (il) => il.currentTarget.open && J(k),
        },
        v.createElement("summary", null, w),
        v.createElement("p", null, r),
      ),
    ),
  );
}
function co() {
  return v.createElement(
    "footer",
    null,
    v.createElement(
      "div",
      { className: "wrap" },
      v.createElement(
        "div",
        { className: "foot-grid" },
        v.createElement(
          "div",
          null,
          v.createElement("div", { className: "logo" }, "KOSHYA"),
          v.createElement(
            "p",
            { className: "footer-tagline" },
            "From our treasure to yours.",
          ),
        ),
        v.createElement(
          "div",
          null,
          v.createElement("h4", null, "Gifting"),
          v.createElement(
            "ul",
            null,
            v.createElement(
              "li",
              null,
              v.createElement("a", { href: "#tiers" }, "Diwali Collection"),
            ),
          ),
        ),
        v.createElement(
          "div",
          null,
          v.createElement("h4", null, "Company"),
          v.createElement(
            "ul",
            null,
            v.createElement(
              "li",
              null,
              v.createElement("a", { href: "#top" }, "About Us"),
            ),
            v.createElement(
              "li",
              null,
              v.createElement("a", { href: "#enquire" }, "Contact"),
            ),
            v.createElement(
              "li",
              null,
              v.createElement("a", { href: "#faq" }, "FAQ"),
            ),
          ),
        ),
        v.createElement(
          "div",
          null,
          v.createElement("h4", null, "Get in Touch"),
          v.createElement(
            "ul",
            null,
            v.createElement("li", null, "gifting@koshya.in"),
            v.createElement("li", null, "+91 9096099442"),
            v.createElement("li", null, "Pune, Maharashtra, India"),
          ),
        ),
      ),
      v.createElement(
        "div",
        { className: "foot-bottom" },
        v.createElement("span", null, "© 2026 Koshya. All rights reserved."),
        v.createElement(
          "span",
          null,
          "Made for teams who gift with intention.",
        ),
      ),
    ),
  );
}
function fo() {
  return v.createElement(
    v.Fragment,
    null,
    v.createElement(eo, null),
    v.createElement(
      "main",
      { id: "top" },
      v.createElement(
        "section",
        { className: "hero" },
        v.createElement(
          "div",
          { className: "wrap" },
          v.createElement(
            "div",
            { className: "hero-text" },
            v.createElement(
              "div",
              { className: "eyebrow" },
              "Corporate Gifting, Reimagined",
            ),
            v.createElement(
              "h1",
              null,
              "Thoughtful gifts.",
              v.createElement("br", null),
              v.createElement("em", null, "Lasting impressions."),
            ),
            v.createElement(
              "p",
              null,
              "From new-joiner kits to Diwali hampers, Koshya turns every business occasion into a moment worth remembering.",
            ),
            v.createElement(
              "div",
              { className: "hero-btns" },
              v.createElement(
                "a",
                { className: "btn-primary", href: "#enquire" },
                "Start an Enquiry",
              ),
              v.createElement(
                "a",
                { className: "btn-secondary", href: "#tiers" },
                "Explore Collections",
              ),
            ),
          ),
          v.createElement(
            "div",
            {
              className: "hero-visual",
              "aria-label": "Koshya corporate gift collection",
            },
            v.createElement(
              "div",
              { className: "hero-mark" },
              "KOSHYA",
              v.createElement("span", null, "Curated corporate gifting"),
            ),
          ),
        ),
      ),
      v.createElement(
        "section",
        { className: "trust" },
        v.createElement(
          "div",
          { className: "wrap" },
          v.createElement(
            "div",
            { className: "eyebrow" },
            "Trusted by growing teams across Pune & Delhi NCR",
          ),
          v.createElement(
            "div",
            { className: "trust-logos" },
            v.createElement("span", null, "Startup A"),
            v.createElement("span", null, "Startup B"),
            v.createElement("span", null, "Startup C"),
            v.createElement("span", null, "Startup D"),
            v.createElement("span", null, "Startup E"),
          ),
        ),
      ),
      v.createElement(
        "section",
        { className: "enquiry", id: "enquire" },
        v.createElement(
          "div",
          { className: "wrap" },
          v.createElement(
            "div",
            { className: "enquiry-copy" },
            v.createElement(
              "div",
              { className: "eyebrow" },
              "Let's Curate Together",
            ),
            v.createElement(
              "h2",
              null,
              "Tell us the occasion, we'll design the moment",
            ),
            v.createElement(
              "p",
              null,
              "Share a few details and our team will put together curated options within 24 hours — no minimum quantity too small to matter.",
            ),
          ),
          v.createElement(uo, null),
        ),
      ),
      v.createElement(
        "section",
        { className: "occasions", id: "occasions" },
        v.createElement(
          "div",
          { className: "wrap" },
          v.createElement(
            "div",
            { className: "section-head" },
            v.createElement(
              "div",
              { className: "eyebrow" },
              "Gifting Solutions",
            ),
            v.createElement("h2", null, "Every business moment, covered"),
          ),
          v.createElement(
            "div",
            { className: "occ-grid" },
            Id.map((p) =>
              v.createElement(
                "article",
                { className: "occ-card", key: p },
                v.createElement(Ey, null),
                v.createElement("h3", null, p),
              ),
            ),
          ),
        ),
      ),
      v.createElement(
        "section",
        { className: "tiers", id: "tiers" },
        v.createElement(
          "div",
          { className: "wrap" },
          v.createElement(
            "div",
            { className: "section-head" },
            v.createElement(
              "div",
              { className: "eyebrow" },
              "Diwali Collection 2026",
            ),
            v.createElement("h2", null, "Three tiers, one festive spirit"),
          ),
          v.createElement(
            "div",
            { className: "tier-grid" },
            Pd.map(([p, J, w, r]) =>
              v.createElement(
                "article",
                { className: "tier-card", key: J },
                v.createElement(
                  "div",
                  { className: `tier-top ${p}` },
                  v.createElement("div", { className: "word" }, J),
                ),
                v.createElement(
                  "div",
                  { className: "tier-body" },
                  v.createElement("div", { className: "price" }, w),
                  v.createElement("p", null, r),
                  v.createElement("a", { href: "#enquire" }, "Enquire →"),
                ),
              ),
            ),
          ),
        ),
      ),
      v.createElement(
        "section",
        { className: "diff", id: "differentiators" },
        v.createElement(
          "div",
          { className: "wrap" },
          v.createElement(
            "div",
            { className: "section-head" },
            v.createElement("div", { className: "eyebrow" }, "Why Koshya"),
            v.createElement("h2", null, "Key Differentiators"),
          ),
          v.createElement(
            "div",
            { className: "diff-grid" },
            lo.map(([p, J]) =>
              v.createElement(
                "article",
                { className: "diff-card", key: p },
                v.createElement(Ey, null),
                v.createElement("h3", null, p),
                v.createElement("p", null, J),
              ),
            ),
          ),
        ),
      ),
      v.createElement(
        "section",
        { className: "testi" },
        v.createElement(
          "div",
          { className: "wrap" },
          v.createElement(
            "div",
            { className: "section-head" },
            v.createElement("div", { className: "eyebrow" }, "Client Voices"),
            v.createElement("h2", null, "Trusted by growing teams"),
          ),
          v.createElement(
            "div",
            { className: "testi-grid" },
            to.map(([p, J, w]) =>
              v.createElement(
                "article",
                { className: "testi-card", key: J },
                v.createElement(
                  "div",
                  { className: "stars", "aria-label": "Five stars" },
                  "★★★★★",
                ),
                v.createElement("p", null, "“", p, "”"),
                v.createElement("div", { className: "who" }, J),
                v.createElement("div", { className: "role" }, w),
              ),
            ),
          ),
        ),
      ),
      v.createElement(
        "section",
        { className: "stats" },
        v.createElement(
          "div",
          { className: "wrap" },
          [
            ["50+", "Companies Partnered"],
            ["3", "Diwali Tiers"],
            ["10+", "Cities Delivered To"],
            ["24h", "Enquiry Response Time"],
          ].map(([p, J]) =>
            v.createElement(
              "div",
              { className: "stat", key: J },
              v.createElement("h3", null, p),
              v.createElement("p", null, J),
            ),
          ),
        ),
      ),
      v.createElement(no, null),
    ),
    v.createElement(co, null),
  );
}
kd.createRoot(document.getElementById("root")).render(
  v.createElement(fo, null),
);
//# sourceMappingURL=index-B6uQ__cl.js.map
