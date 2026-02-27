function kb(u, l) {
  for (var r = 0; r < l.length; r++) {
    const a = l[r];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const s in a)
        if (s !== "default" && !(s in u)) {
          const c = Object.getOwnPropertyDescriptor(a, s);
          c &&
            Object.defineProperty(
              u,
              s,
              c.get ? c : { enumerable: !0, get: () => a[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) a(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && a(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function a(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = r(s);
    fetch(s.href, c);
  }
})();
function jb(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var eh = { exports: {} },
  $s = {};
var x1;
function Ub() {
  if (x1) return $s;
  x1 = 1;
  var u = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function r(a, s, c) {
    var d = null;
    if (
      (c !== void 0 && (d = "" + c),
      s.key !== void 0 && (d = "" + s.key),
      "key" in s)
    ) {
      c = {};
      for (var h in s) h !== "key" && (c[h] = s[h]);
    } else c = s;
    return (
      (s = c.ref),
      { $$typeof: u, type: a, key: d, ref: s !== void 0 ? s : null, props: c }
    );
  }
  return (($s.Fragment = l), ($s.jsx = r), ($s.jsxs = r), $s);
}
var b1;
function Hb() {
  return (b1 || ((b1 = 1), (eh.exports = Ub())), eh.exports);
}
var b = Hb(),
  th = { exports: {} },
  Ee = {};
var S1;
function Bb() {
  if (S1) return Ee;
  S1 = 1;
  var u = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    _ = Symbol.for("react.activity"),
    T = Symbol.iterator;
  function x(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (T && A[T]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    E = {};
  function k(A, Z, ee) {
    ((this.props = A),
      (this.context = Z),
      (this.refs = E),
      (this.updater = ee || w));
  }
  ((k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (A, Z) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, Z, "setState");
    }),
    (k.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function j() {}
  j.prototype = k.prototype;
  function G(A, Z, ee) {
    ((this.props = A),
      (this.context = Z),
      (this.refs = E),
      (this.updater = ee || w));
  }
  var U = (G.prototype = new j());
  ((U.constructor = G), S(U, k.prototype), (U.isPureReactComponent = !0));
  var Y = Array.isArray;
  function V() {}
  var R = { H: null, A: null, T: null, S: null },
    q = Object.prototype.hasOwnProperty;
  function Q(A, Z, ee) {
    var te = ee.ref;
    return {
      $$typeof: u,
      type: A,
      key: Z,
      ref: te !== void 0 ? te : null,
      props: ee,
    };
  }
  function I(A, Z) {
    return Q(A.type, Z, A.props);
  }
  function re(A) {
    return typeof A == "object" && A !== null && A.$$typeof === u;
  }
  function ne(A) {
    var Z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (ee) {
        return Z[ee];
      })
    );
  }
  var pe = /\/+/g;
  function ge(A, Z) {
    return typeof A == "object" && A !== null && A.key != null
      ? ne("" + A.key)
      : Z.toString(36);
  }
  function me(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(V, V)
            : ((A.status = "pending"),
              A.then(
                function (Z) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = Z));
                },
                function (Z) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = Z));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function O(A, Z, ee, te, ie) {
    var fe = typeof A;
    (fe === "undefined" || fe === "boolean") && (A = null);
    var le = !1;
    if (A === null) le = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case u:
            case l:
              le = !0;
              break;
            case y:
              return ((le = A._init), O(le(A._payload), Z, ee, te, ie));
          }
      }
    if (le)
      return (
        (ie = ie(A)),
        (le = te === "" ? "." + ge(A, 0) : te),
        Y(ie)
          ? ((ee = ""),
            le != null && (ee = le.replace(pe, "$&/") + "/"),
            O(ie, Z, ee, "", function (Qe) {
              return Qe;
            }))
          : ie != null &&
            (re(ie) &&
              (ie = I(
                ie,
                ee +
                  (ie.key == null || (A && A.key === ie.key)
                    ? ""
                    : ("" + ie.key).replace(pe, "$&/") + "/") +
                  le,
              )),
            Z.push(ie)),
        1
      );
    le = 0;
    var Ne = te === "" ? "." : te + ":";
    if (Y(A))
      for (var Se = 0; Se < A.length; Se++)
        ((te = A[Se]), (fe = Ne + ge(te, Se)), (le += O(te, Z, ee, fe, ie)));
    else if (((Se = x(A)), typeof Se == "function"))
      for (A = Se.call(A), Se = 0; !(te = A.next()).done; )
        ((te = te.value),
          (fe = Ne + ge(te, Se++)),
          (le += O(te, Z, ee, fe, ie)));
    else if (fe === "object") {
      if (typeof A.then == "function") return O(me(A), Z, ee, te, ie);
      throw (
        (Z = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Z === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : Z) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return le;
  }
  function F(A, Z, ee) {
    if (A == null) return A;
    var te = [],
      ie = 0;
    return (
      O(A, te, "", "", function (fe) {
        return Z.call(ee, fe, ie++);
      }),
      te
    );
  }
  function J(A) {
    if (A._status === -1) {
      var Z = A._result;
      ((Z = Z()),
        Z.then(
          function (ee) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = ee));
          },
          function (ee) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = ee));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = Z)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var de =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var Z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" &&
                  A !== null &&
                  typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(Z)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    M = {
      map: F,
      forEach: function (A, Z, ee) {
        F(
          A,
          function () {
            Z.apply(this, arguments);
          },
          ee,
        );
      },
      count: function (A) {
        var Z = 0;
        return (
          F(A, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (A) {
        return (
          F(A, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (A) {
        if (!re(A))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return A;
      },
    };
  return (
    (Ee.Activity = _),
    (Ee.Children = M),
    (Ee.Component = k),
    (Ee.Fragment = r),
    (Ee.Profiler = s),
    (Ee.PureComponent = G),
    (Ee.StrictMode = a),
    (Ee.Suspense = m),
    (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R),
    (Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return R.H.useMemoCache(A);
      },
    }),
    (Ee.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (Ee.cacheSignal = function () {
      return null;
    }),
    (Ee.cloneElement = function (A, Z, ee) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + ".",
        );
      var te = S({}, A.props),
        ie = A.key;
      if (Z != null)
        for (fe in (Z.key !== void 0 && (ie = "" + Z.key), Z))
          !q.call(Z, fe) ||
            fe === "key" ||
            fe === "__self" ||
            fe === "__source" ||
            (fe === "ref" && Z.ref === void 0) ||
            (te[fe] = Z[fe]);
      var fe = arguments.length - 2;
      if (fe === 1) te.children = ee;
      else if (1 < fe) {
        for (var le = Array(fe), Ne = 0; Ne < fe; Ne++)
          le[Ne] = arguments[Ne + 2];
        te.children = le;
      }
      return Q(A.type, ie, te);
    }),
    (Ee.createContext = function (A) {
      return (
        (A = {
          $$typeof: d,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: c, _context: A }),
        A
      );
    }),
    (Ee.createElement = function (A, Z, ee) {
      var te,
        ie = {},
        fe = null;
      if (Z != null)
        for (te in (Z.key !== void 0 && (fe = "" + Z.key), Z))
          q.call(Z, te) &&
            te !== "key" &&
            te !== "__self" &&
            te !== "__source" &&
            (ie[te] = Z[te]);
      var le = arguments.length - 2;
      if (le === 1) ie.children = ee;
      else if (1 < le) {
        for (var Ne = Array(le), Se = 0; Se < le; Se++)
          Ne[Se] = arguments[Se + 2];
        ie.children = Ne;
      }
      if (A && A.defaultProps)
        for (te in ((le = A.defaultProps), le))
          ie[te] === void 0 && (ie[te] = le[te]);
      return Q(A, fe, ie);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (Ee.isValidElement = re),
    (Ee.lazy = function (A) {
      return { $$typeof: y, _payload: { _status: -1, _result: A }, _init: J };
    }),
    (Ee.memo = function (A, Z) {
      return { $$typeof: p, type: A, compare: Z === void 0 ? null : Z };
    }),
    (Ee.startTransition = function (A) {
      var Z = R.T,
        ee = {};
      R.T = ee;
      try {
        var te = A(),
          ie = R.S;
        (ie !== null && ie(ee, te),
          typeof te == "object" &&
            te !== null &&
            typeof te.then == "function" &&
            te.then(V, de));
      } catch (fe) {
        de(fe);
      } finally {
        (Z !== null && ee.types !== null && (Z.types = ee.types), (R.T = Z));
      }
    }),
    (Ee.unstable_useCacheRefresh = function () {
      return R.H.useCacheRefresh();
    }),
    (Ee.use = function (A) {
      return R.H.use(A);
    }),
    (Ee.useActionState = function (A, Z, ee) {
      return R.H.useActionState(A, Z, ee);
    }),
    (Ee.useCallback = function (A, Z) {
      return R.H.useCallback(A, Z);
    }),
    (Ee.useContext = function (A) {
      return R.H.useContext(A);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (A, Z) {
      return R.H.useDeferredValue(A, Z);
    }),
    (Ee.useEffect = function (A, Z) {
      return R.H.useEffect(A, Z);
    }),
    (Ee.useEffectEvent = function (A) {
      return R.H.useEffectEvent(A);
    }),
    (Ee.useId = function () {
      return R.H.useId();
    }),
    (Ee.useImperativeHandle = function (A, Z, ee) {
      return R.H.useImperativeHandle(A, Z, ee);
    }),
    (Ee.useInsertionEffect = function (A, Z) {
      return R.H.useInsertionEffect(A, Z);
    }),
    (Ee.useLayoutEffect = function (A, Z) {
      return R.H.useLayoutEffect(A, Z);
    }),
    (Ee.useMemo = function (A, Z) {
      return R.H.useMemo(A, Z);
    }),
    (Ee.useOptimistic = function (A, Z) {
      return R.H.useOptimistic(A, Z);
    }),
    (Ee.useReducer = function (A, Z, ee) {
      return R.H.useReducer(A, Z, ee);
    }),
    (Ee.useRef = function (A) {
      return R.H.useRef(A);
    }),
    (Ee.useState = function (A) {
      return R.H.useState(A);
    }),
    (Ee.useSyncExternalStore = function (A, Z, ee) {
      return R.H.useSyncExternalStore(A, Z, ee);
    }),
    (Ee.useTransition = function () {
      return R.H.useTransition();
    }),
    (Ee.version = "19.2.3"),
    Ee
  );
}
var T1;
function $h() {
  return (T1 || ((T1 = 1), (th.exports = Bb())), th.exports);
}
var D = $h();
const Bt = jb(D),
  Ih = kb({ __proto__: null, default: Bt }, [D]);
var nh = { exports: {} },
  Is = {},
  lh = { exports: {} },
  ah = {};
var A1;
function qb() {
  return (
    A1 ||
      ((A1 = 1),
      (function (u) {
        function l(O, F) {
          var J = O.length;
          O.push(F);
          e: for (; 0 < J; ) {
            var de = (J - 1) >>> 1,
              M = O[de];
            if (0 < s(M, F)) ((O[de] = F), (O[J] = M), (J = de));
            else break e;
          }
        }
        function r(O) {
          return O.length === 0 ? null : O[0];
        }
        function a(O) {
          if (O.length === 0) return null;
          var F = O[0],
            J = O.pop();
          if (J !== F) {
            O[0] = J;
            e: for (var de = 0, M = O.length, A = M >>> 1; de < A; ) {
              var Z = 2 * (de + 1) - 1,
                ee = O[Z],
                te = Z + 1,
                ie = O[te];
              if (0 > s(ee, J))
                te < M && 0 > s(ie, ee)
                  ? ((O[de] = ie), (O[te] = J), (de = te))
                  : ((O[de] = ee), (O[Z] = J), (de = Z));
              else if (te < M && 0 > s(ie, J))
                ((O[de] = ie), (O[te] = J), (de = te));
              else break e;
            }
          }
          return F;
        }
        function s(O, F) {
          var J = O.sortIndex - F.sortIndex;
          return J !== 0 ? J : O.id - F.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          u.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          u.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          p = [],
          y = 1,
          _ = null,
          T = 3,
          x = !1,
          w = !1,
          S = !1,
          E = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          G = typeof setImmediate < "u" ? setImmediate : null;
        function U(O) {
          for (var F = r(p); F !== null; ) {
            if (F.callback === null) a(p);
            else if (F.startTime <= O)
              (a(p), (F.sortIndex = F.expirationTime), l(m, F));
            else break;
            F = r(p);
          }
        }
        function Y(O) {
          if (((S = !1), U(O), !w))
            if (r(m) !== null) ((w = !0), V || ((V = !0), ne()));
            else {
              var F = r(p);
              F !== null && me(Y, F.startTime - O);
            }
        }
        var V = !1,
          R = -1,
          q = 5,
          Q = -1;
        function I() {
          return E ? !0 : !(u.unstable_now() - Q < q);
        }
        function re() {
          if (((E = !1), V)) {
            var O = u.unstable_now();
            Q = O;
            var F = !0;
            try {
              e: {
                ((w = !1), S && ((S = !1), j(R), (R = -1)), (x = !0));
                var J = T;
                try {
                  t: {
                    for (
                      U(O), _ = r(m);
                      _ !== null && !(_.expirationTime > O && I());
                    ) {
                      var de = _.callback;
                      if (typeof de == "function") {
                        ((_.callback = null), (T = _.priorityLevel));
                        var M = de(_.expirationTime <= O);
                        if (((O = u.unstable_now()), typeof M == "function")) {
                          ((_.callback = M), U(O), (F = !0));
                          break t;
                        }
                        (_ === r(m) && a(m), U(O));
                      } else a(m);
                      _ = r(m);
                    }
                    if (_ !== null) F = !0;
                    else {
                      var A = r(p);
                      (A !== null && me(Y, A.startTime - O), (F = !1));
                    }
                  }
                  break e;
                } finally {
                  ((_ = null), (T = J), (x = !1));
                }
                F = void 0;
              }
            } finally {
              F ? ne() : (V = !1);
            }
          }
        }
        var ne;
        if (typeof G == "function")
          ne = function () {
            G(re);
          };
        else if (typeof MessageChannel < "u") {
          var pe = new MessageChannel(),
            ge = pe.port2;
          ((pe.port1.onmessage = re),
            (ne = function () {
              ge.postMessage(null);
            }));
        } else
          ne = function () {
            k(re, 0);
          };
        function me(O, F) {
          R = k(function () {
            O(u.unstable_now());
          }, F);
        }
        ((u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (u.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (q = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (u.unstable_next = function (O) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = T;
            }
            var J = T;
            T = F;
            try {
              return O();
            } finally {
              T = J;
            }
          }),
          (u.unstable_requestPaint = function () {
            E = !0;
          }),
          (u.unstable_runWithPriority = function (O, F) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var J = T;
            T = O;
            try {
              return F();
            } finally {
              T = J;
            }
          }),
          (u.unstable_scheduleCallback = function (O, F, J) {
            var de = u.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? de + J : de))
                : (J = de),
              O)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = J + M),
              (O = {
                id: y++,
                callback: F,
                priorityLevel: O,
                startTime: J,
                expirationTime: M,
                sortIndex: -1,
              }),
              J > de
                ? ((O.sortIndex = J),
                  l(p, O),
                  r(m) === null &&
                    O === r(p) &&
                    (S ? (j(R), (R = -1)) : (S = !0), me(Y, J - de)))
                : ((O.sortIndex = M),
                  l(m, O),
                  w || x || ((w = !0), V || ((V = !0), ne()))),
              O
            );
          }),
          (u.unstable_shouldYield = I),
          (u.unstable_wrapCallback = function (O) {
            var F = T;
            return function () {
              var J = T;
              T = F;
              try {
                return O.apply(this, arguments);
              } finally {
                T = J;
              }
            };
          }));
      })(ah)),
    ah
  );
}
var C1;
function Lb() {
  return (C1 || ((C1 = 1), (lh.exports = qb())), lh.exports);
}
var ih = { exports: {} },
  yn = {};
var w1;
function Yb() {
  if (w1) return yn;
  w1 = 1;
  var u = $h();
  function l(m) {
    var p = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        p += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var a = {
      d: {
        f: r,
        r: function () {
          throw Error(l(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function c(m, p, y) {
    var _ =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: _ == null ? null : "" + _,
      children: m,
      containerInfo: p,
      implementation: y,
    };
  }
  var d = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, p) {
    if (m === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
    (yn.createPortal = function (m, p) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return c(m, p, null, y);
    }),
    (yn.flushSync = function (m) {
      var p = d.T,
        y = a.p;
      try {
        if (((d.T = null), (a.p = 2), m)) return m();
      } finally {
        ((d.T = p), (a.p = y), a.d.f());
      }
    }),
    (yn.preconnect = function (m, p) {
      typeof m == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        a.d.C(m, p));
    }),
    (yn.prefetchDNS = function (m) {
      typeof m == "string" && a.d.D(m);
    }),
    (yn.preinit = function (m, p) {
      if (typeof m == "string" && p && typeof p.as == "string") {
        var y = p.as,
          _ = h(y, p.crossOrigin),
          T = typeof p.integrity == "string" ? p.integrity : void 0,
          x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        y === "style"
          ? a.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: _,
              integrity: T,
              fetchPriority: x,
            })
          : y === "script" &&
            a.d.X(m, {
              crossOrigin: _,
              integrity: T,
              fetchPriority: x,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (yn.preinitModule = function (m, p) {
      if (typeof m == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var y = h(p.as, p.crossOrigin);
            a.d.M(m, {
              crossOrigin: y,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && a.d.M(m);
    }),
    (yn.preload = function (m, p) {
      if (
        typeof m == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var y = p.as,
          _ = h(y, p.crossOrigin);
        a.d.L(m, y, {
          crossOrigin: _,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (yn.preloadModule = function (m, p) {
      if (typeof m == "string")
        if (p) {
          var y = h(p.as, p.crossOrigin);
          a.d.m(m, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: y,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else a.d.m(m);
    }),
    (yn.requestFormReset = function (m) {
      a.d.r(m);
    }),
    (yn.unstable_batchedUpdates = function (m, p) {
      return m(p);
    }),
    (yn.useFormState = function (m, p, y) {
      return d.H.useFormState(m, p, y);
    }),
    (yn.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (yn.version = "19.2.3"),
    yn
  );
}
var E1;
function by() {
  if (E1) return ih.exports;
  E1 = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (l) {
        console.error(l);
      }
  }
  return (u(), (ih.exports = Yb()), ih.exports);
}
var z1;
function Gb() {
  if (z1) return Is;
  z1 = 1;
  var u = Lb(),
    l = $h(),
    r = by();
  function a(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function d(e) {
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
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e) throw Error(a(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = c(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var f = o.alternate;
      if (f === null) {
        if (((i = o.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (o.child === f.child) {
        for (f = o.child; f; ) {
          if (f === n) return (m(o), e);
          if (f === i) return (m(o), t);
          f = f.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== i.return) ((n = o), (i = f));
      else {
        for (var g = !1, v = o.child; v; ) {
          if (v === n) {
            ((g = !0), (n = o), (i = f));
            break;
          }
          if (v === i) {
            ((g = !0), (i = o), (n = f));
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = f.child; v; ) {
            if (v === n) {
              ((g = !0), (n = f), (i = o));
              break;
            }
            if (v === i) {
              ((g = !0), (i = f), (n = o));
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(a(189));
        }
      }
      if (n.alternate !== i) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign,
    T = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    k = Symbol.for("react.profiler"),
    j = Symbol.for("react.consumer"),
    G = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    Y = Symbol.for("react.suspense"),
    V = Symbol.for("react.suspense_list"),
    R = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    Q = Symbol.for("react.activity"),
    I = Symbol.for("react.memo_cache_sentinel"),
    re = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (re && e[re]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var pe = Symbol.for("react.client.reference");
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case S:
        return "Fragment";
      case k:
        return "Profiler";
      case E:
        return "StrictMode";
      case Y:
        return "Suspense";
      case V:
        return "SuspenseList";
      case Q:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case w:
          return "Portal";
        case G:
          return e.displayName || "Context";
        case j:
          return (e._context.displayName || "Context") + ".Consumer";
        case U:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case R:
          return (
            (t = e.displayName || null),
            t !== null ? t : ge(e.type) || "Memo"
          );
        case q:
          ((t = e._payload), (e = e._init));
          try {
            return ge(e(t));
          } catch {}
      }
    return null;
  }
  var me = Array.isArray,
    O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = { pending: !1, data: null, method: null, action: null },
    de = [],
    M = -1;
  function A(e) {
    return { current: e };
  }
  function Z(e) {
    0 > M || ((e.current = de[M]), (de[M] = null), M--);
  }
  function ee(e, t) {
    (M++, (de[M] = e.current), (e.current = t));
  }
  var te = A(null),
    ie = A(null),
    fe = A(null),
    le = A(null);
  function Ne(e, t) {
    switch ((ee(fe, t), ee(ie, e), ee(te, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Xg(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Xg(t)), (e = Vg(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (Z(te), ee(te, e));
  }
  function Se() {
    (Z(te), Z(ie), Z(fe));
  }
  function Qe(e) {
    e.memoizedState !== null && ee(le, e);
    var t = te.current,
      n = Vg(t, e.type);
    t !== n && (ee(ie, e), ee(te, n));
  }
  function pt(e) {
    (ie.current === e && (Z(te), Z(ie)),
      le.current === e && (Z(le), (Fs._currentValue = J)));
  }
  var gt, Ge;
  function et(e) {
    if (gt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((gt = (t && t[1]) || ""),
          (Ge =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      gt +
      e +
      Ge
    );
  }
  var en = !1;
  function rn(e, t) {
    if (!e || en) return "";
    en = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var $ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty($.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct($, []);
                } catch (X) {
                  var L = X;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (X) {
                  L = X;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (X) {
                L = X;
              }
              ($ = e()) &&
                typeof $.catch == "function" &&
                $.catch(function () {});
            }
          } catch (X) {
            if (X && L && typeof X.stack == "string") return [X.stack, L.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name",
      );
      o &&
        o.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = i.DetermineComponentFrameRoot(),
        g = f[0],
        v = f[1];
      if (g && v) {
        var C = g.split(`
`),
          B = v.split(`
`);
        for (
          o = i = 0;
          i < C.length && !C[i].includes("DetermineComponentFrameRoot");
        )
          i++;
        for (; o < B.length && !B[o].includes("DetermineComponentFrameRoot"); )
          o++;
        if (i === C.length || o === B.length)
          for (
            i = C.length - 1, o = B.length - 1;
            1 <= i && 0 <= o && C[i] !== B[o];
          )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (C[i] !== B[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || C[i] !== B[o])) {
                  var P =
                    `
` + C[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      P.includes("<anonymous>") &&
                      (P = P.replace("<anonymous>", e.displayName)),
                    P
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      ((en = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? et(n) : "";
  }
  function K(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return et(e.type);
      case 16:
        return et("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? et("Suspense Fallback")
          : et("Suspense");
      case 19:
        return et("SuspenseList");
      case 0:
      case 15:
        return rn(e.type, !1);
      case 11:
        return rn(e.type.render, !1);
      case 1:
        return rn(e.type, !0);
      case 31:
        return et("Activity");
      default:
        return "";
    }
  }
  function hn(e) {
    try {
      var t = "",
        n = null;
      do ((t += K(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var Fn = Object.prototype.hasOwnProperty,
    pl = u.unstable_scheduleCallback,
    ct = u.unstable_cancelCallback,
    Bl = u.unstable_shouldYield,
    Zl = u.unstable_requestPaint,
    Dt = u.unstable_now,
    Yt = u.unstable_getCurrentPriorityLevel,
    ql = u.unstable_ImmediatePriority,
    yt = u.unstable_UserBlockingPriority,
    mn = u.unstable_NormalPriority,
    kn = u.unstable_LowPriority,
    gl = u.unstable_IdlePriority,
    Ai = u.log,
    zt = u.unstable_setDisableYieldValue,
    Kl = null,
    bt = null;
  function Tn(e) {
    if (
      (typeof Ai == "function" && zt(e),
      bt && typeof bt.setStrictMode == "function")
    )
      try {
        bt.setStrictMode(Kl, e);
      } catch {}
  }
  var Gt = Math.clz32 ? Math.clz32 : Oe,
    Fl = Math.log,
    ua = Math.LN2;
  function Oe(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Fl(e) / ua) | 0)) | 0);
  }
  var yl = 256,
    pn = 262144,
    gn = 4194304;
  function Jt(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function vl(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0,
      f = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var v = i & 134217727;
    return (
      v !== 0
        ? ((i = v & ~f),
          i !== 0
            ? (o = Jt(i))
            : ((g &= v),
              g !== 0
                ? (o = Jt(g))
                : n || ((n = v & ~e), n !== 0 && (o = Jt(n)))))
        : ((v = i & ~f),
          v !== 0
            ? (o = Jt(v))
            : g !== 0
              ? (o = Jt(g))
              : n || ((n = i & ~e), n !== 0 && (o = Jt(n)))),
      o === 0
        ? 0
        : t !== 0 &&
            t !== o &&
            (t & f) === 0 &&
            ((f = o & -o),
            (n = t & -t),
            f >= n || (f === 32 && (n & 4194048) !== 0))
          ? t
          : o
    );
  }
  function _l(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ll(e, t) {
    switch (e) {
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
  function Ha() {
    var e = gn;
    return ((gn <<= 1), (gn & 62914560) === 0 && (gn = 4194304), e);
  }
  function Ce(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ye(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Je(e, t, n, i, o, f) {
    var g = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var v = e.entanglements,
      C = e.expirationTimes,
      B = e.hiddenUpdates;
    for (n = g & ~n; 0 < n; ) {
      var P = 31 - Gt(n),
        $ = 1 << P;
      ((v[P] = 0), (C[P] = -1));
      var L = B[P];
      if (L !== null)
        for (B[P] = null, P = 0; P < L.length; P++) {
          var X = L[P];
          X !== null && (X.lane &= -536870913);
        }
      n &= ~$;
    }
    (i !== 0 && ae(e, i, 0),
      f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t)));
  }
  function ae(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var i = 31 - Gt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[i] = e.entanglements[i] | 1073741824 | (n & 261930)));
  }
  function we(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var i = 31 - Gt(n),
        o = 1 << i;
      ((o & t) | (e[i] & t) && (e[i] |= t), (n &= ~o));
    }
  }
  function ve(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : Te(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function Te(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Mt(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ue() {
    var e = F.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : h1(e.type));
  }
  function vt(e, t) {
    var n = F.p;
    try {
      return ((F.p = e), t());
    } finally {
      F.p = n;
    }
  }
  var ft = Math.random().toString(36).slice(2),
    Re = "__reactFiber$" + ft,
    De = "__reactProps$" + ft,
    Fe = "__reactContainer$" + ft,
    An = "__reactEvents$" + ft,
    dt = "__reactListeners$" + ft,
    Cn = "__reactHandles$" + ft,
    Jn = "__reactResources$" + ft,
    St = "__reactMarker$" + ft;
  function kt(e) {
    (delete e[Re], delete e[De], delete e[An], delete e[dt], delete e[Cn]);
  }
  function Tt(e) {
    var t = e[Re];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Fe] || n[Re])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Wg(e); e !== null; ) {
            if ((n = e[Re])) return n;
            e = Wg(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function jn(e) {
    if ((e = e[Re] || e[Fe])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Jl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(a(33));
  }
  function At(e) {
    var t = e[Jn];
    return (
      t ||
        (t = e[Jn] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function He(e) {
    e[St] = !0;
  }
  var Pn = new Set(),
    sr = {};
  function Pl(e, t) {
    (xl(e, t), xl(e + "Capture", t));
  }
  function xl(e, t) {
    for (sr[e] = t, e = 0; e < t.length; e++) Pn.add(t[e]);
  }
  var bl = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ba = {},
    Ci = {};
  function Wl(e) {
    return Fn.call(Ci, e)
      ? !0
      : Fn.call(Ba, e)
        ? !1
        : bl.test(e)
          ? (Ci[e] = !0)
          : ((Ba[e] = !0), !1);
  }
  function qo(e, t, n) {
    if (Wl(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Lo(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function fa(e, t, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + i);
    }
  }
  function Sl(e) {
    switch (typeof e) {
      case "bigint":
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
  function jm(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function E_(e, t, n) {
    var i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var o = i.get,
        f = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (g) {
            ((n = "" + g), f.call(this, g));
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (g) {
            n = "" + g;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Zu(e) {
    if (!e._valueTracker) {
      var t = jm(e) ? "checked" : "value";
      e._valueTracker = E_(e, t, "" + e[t]);
    }
  }
  function Um(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      i = "";
    return (
      e && (i = jm(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Yo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var z_ = /[\n"\\]/g;
  function Tl(e) {
    return e.replace(z_, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ku(e, t, n, i, o, f, g, v) {
    ((e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      t != null
        ? g === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Sl(t))
          : e.value !== "" + Sl(t) && (e.value = "" + Sl(t))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      t != null
        ? Fu(e, g, Sl(t))
        : n != null
          ? Fu(e, g, Sl(n))
          : i != null && e.removeAttribute("value"),
      o == null && f != null && (e.defaultChecked = !!f),
      o != null &&
        (e.checked = o && typeof o != "function" && typeof o != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + Sl(v))
        : e.removeAttribute("name"));
  }
  function Hm(e, t, n, i, o, f, g, v) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      t != null || n != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || t != null)) {
        Zu(e);
        return;
      }
      ((n = n != null ? "" + Sl(n) : ""),
        (t = t != null ? "" + Sl(t) : n),
        v || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((i = i ?? o),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (e.checked = v ? e.checked : !!i),
      (e.defaultChecked = !!i),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g),
      Zu(e));
  }
  function Fu(e, t, n) {
    (t === "number" && Yo(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function or(e, t, n, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        ((o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && i && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Sl(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          ((e[o].selected = !0), i && (e[o].defaultSelected = !0));
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Bm(e, t, n) {
    if (
      t != null &&
      ((t = "" + Sl(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Sl(n) : "";
  }
  function qm(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(a(92));
        if (me(i)) {
          if (1 < i.length) throw Error(a(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = Sl(t)),
      (e.defaultValue = n),
      (i = e.textContent),
      i === n && i !== "" && i !== null && (e.value = i),
      Zu(e));
  }
  function cr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var M_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Lm(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : i
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || M_.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Ym(e, t, n) {
    if (t != null && typeof t != "object") throw Error(a(62));
    if (((e = e.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (t != null && t.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? e.setProperty(i, "")
            : i === "float"
              ? (e.cssFloat = "")
              : (e[i] = ""));
      for (var o in t)
        ((i = t[o]), t.hasOwnProperty(o) && n[o] !== i && Lm(e, o, i));
    } else for (var f in t) t.hasOwnProperty(f) && Lm(e, f, t[f]);
  }
  function Ju(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var N_ = new Map([
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
    R_ =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Go(e) {
    return R_.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function da() {}
  var Pu = null;
  function Wu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ur = null,
    fr = null;
  function Gm(e) {
    var t = jn(e);
    if (t && (e = t.stateNode)) {
      var n = e[De] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Ku(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Tl("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var o = i[De] || null;
                if (!o) throw Error(a(90));
                Ku(
                  i,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((i = n[t]), i.form === e.form && Um(i));
          }
          break e;
        case "textarea":
          Bm(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && or(e, !!n.multiple, t, !1));
      }
    }
  }
  var $u = !1;
  function Xm(e, t, n) {
    if ($u) return e(t, n);
    $u = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (
        (($u = !1),
        (ur !== null || fr !== null) &&
          (Mc(), ur && ((t = ur), (e = fr), (fr = ur = null), Gm(t), e)))
      )
        for (t = 0; t < e.length; t++) Gm(e[t]);
    }
  }
  function fs(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[De] || null;
    if (i === null) return null;
    n = i[t];
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
        ((i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var ha = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Iu = !1;
  if (ha)
    try {
      var ds = {};
      (Object.defineProperty(ds, "passive", {
        get: function () {
          Iu = !0;
        },
      }),
        window.addEventListener("test", ds, ds),
        window.removeEventListener("test", ds, ds));
    } catch {
      Iu = !1;
    }
  var qa = null,
    ef = null,
    Xo = null;
  function Vm() {
    if (Xo) return Xo;
    var e,
      t = ef,
      n = t.length,
      i,
      o = "value" in qa ? qa.value : qa.textContent,
      f = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var g = n - e;
    for (i = 1; i <= g && t[n - i] === o[f - i]; i++);
    return (Xo = o.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Vo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Qo() {
    return !0;
  }
  function Qm() {
    return !1;
  }
  function Un(e) {
    function t(n, i, o, f, g) {
      ((this._reactName = n),
        (this._targetInst = o),
        (this.type = i),
        (this.nativeEvent = f),
        (this.target = g),
        (this.currentTarget = null));
      for (var v in e)
        e.hasOwnProperty(v) && ((n = e[v]), (this[v] = n ? n(f) : f[v]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Qo
          : Qm),
        (this.isPropagationStopped = Qm),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Qo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Qo));
        },
        persist: function () {},
        isPersistent: Qo,
      }),
      t
    );
  }
  var wi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zo = Un(wi),
    hs = _({}, wi, { view: 0, detail: 0 }),
    O_ = Un(hs),
    tf,
    nf,
    ms,
    Ko = _({}, hs, {
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
      getModifierState: af,
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
          : (e !== ms &&
              (ms && e.type === "mousemove"
                ? ((tf = e.screenX - ms.screenX), (nf = e.screenY - ms.screenY))
                : (nf = tf = 0),
              (ms = e)),
            tf);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : nf;
      },
    }),
    Zm = Un(Ko),
    D_ = _({}, Ko, { dataTransfer: 0 }),
    k_ = Un(D_),
    j_ = _({}, hs, { relatedTarget: 0 }),
    lf = Un(j_),
    U_ = _({}, wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    H_ = Un(U_),
    B_ = _({}, wi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    q_ = Un(B_),
    L_ = _({}, wi, { data: 0 }),
    Km = Un(L_),
    Y_ = {
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
    G_ = {
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
    X_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function V_(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = X_[e])
        ? !!t[e]
        : !1;
  }
  function af() {
    return V_;
  }
  var Q_ = _({}, hs, {
      key: function (e) {
        if (e.key) {
          var t = Y_[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Vo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? G_[e.keyCode] || "Unidentified"
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
      getModifierState: af,
      charCode: function (e) {
        return e.type === "keypress" ? Vo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Vo(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Z_ = Un(Q_),
    K_ = _({}, Ko, {
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
    Fm = Un(K_),
    F_ = _({}, hs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: af,
    }),
    J_ = Un(F_),
    P_ = _({}, wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    W_ = Un(P_),
    $_ = _({}, Ko, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
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
    I_ = Un($_),
    ex = _({}, wi, { newState: 0, oldState: 0 }),
    tx = Un(ex),
    nx = [9, 13, 27, 32],
    rf = ha && "CompositionEvent" in window,
    ps = null;
  ha && "documentMode" in document && (ps = document.documentMode);
  var lx = ha && "TextEvent" in window && !ps,
    Jm = ha && (!rf || (ps && 8 < ps && 11 >= ps)),
    Pm = " ",
    Wm = !1;
  function $m(e, t) {
    switch (e) {
      case "keyup":
        return nx.indexOf(t.keyCode) !== -1;
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
  function Im(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var dr = !1;
  function ax(e, t) {
    switch (e) {
      case "compositionend":
        return Im(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wm = !0), Pm);
      case "textInput":
        return ((e = t.data), e === Pm && Wm ? null : e);
      default:
        return null;
    }
  }
  function ix(e, t) {
    if (dr)
      return e === "compositionend" || (!rf && $m(e, t))
        ? ((e = Vm()), (Xo = ef = qa = null), (dr = !1), e)
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
        return Jm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var rx = {
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
  function ep(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rx[e.type] : t === "textarea";
  }
  function tp(e, t, n, i) {
    (ur ? (fr ? fr.push(i) : (fr = [i])) : (ur = i),
      (t = Uc(t, "onChange")),
      0 < t.length &&
        ((n = new Zo("onChange", "change", null, n, i)),
        e.push({ event: n, listeners: t })));
  }
  var gs = null,
    ys = null;
  function sx(e) {
    Hg(e, 0);
  }
  function Fo(e) {
    var t = Jl(e);
    if (Um(t)) return e;
  }
  function np(e, t) {
    if (e === "change") return t;
  }
  var lp = !1;
  if (ha) {
    var sf;
    if (ha) {
      var of = "oninput" in document;
      if (!of) {
        var ap = document.createElement("div");
        (ap.setAttribute("oninput", "return;"),
          (of = typeof ap.oninput == "function"));
      }
      sf = of;
    } else sf = !1;
    lp = sf && (!document.documentMode || 9 < document.documentMode);
  }
  function ip() {
    gs && (gs.detachEvent("onpropertychange", rp), (ys = gs = null));
  }
  function rp(e) {
    if (e.propertyName === "value" && Fo(ys)) {
      var t = [];
      (tp(t, ys, e, Wu(e)), Xm(sx, t));
    }
  }
  function ox(e, t, n) {
    e === "focusin"
      ? (ip(), (gs = t), (ys = n), gs.attachEvent("onpropertychange", rp))
      : e === "focusout" && ip();
  }
  function cx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fo(ys);
  }
  function ux(e, t) {
    if (e === "click") return Fo(t);
  }
  function fx(e, t) {
    if (e === "input" || e === "change") return Fo(t);
  }
  function dx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Wn = typeof Object.is == "function" ? Object.is : dx;
  function vs(e, t) {
    if (Wn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!Fn.call(t, o) || !Wn(e[o], t[o])) return !1;
    }
    return !0;
  }
  function sp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function op(e, t) {
    var n = sp(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = e + n.textContent.length), e <= t && i >= t))
          return { node: n, offset: t - e };
        e = i;
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
      n = sp(n);
    }
  }
  function cp(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? cp(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function up(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Yo(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Yo(e.document);
    }
    return t;
  }
  function cf(e) {
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
  var hx = ha && "documentMode" in document && 11 >= document.documentMode,
    hr = null,
    uf = null,
    _s = null,
    ff = !1;
  function fp(e, t, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ff ||
      hr == null ||
      hr !== Yo(i) ||
      ((i = hr),
      "selectionStart" in i && cf(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (_s && vs(_s, i)) ||
        ((_s = i),
        (i = Uc(uf, "onSelect")),
        0 < i.length &&
          ((t = new Zo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: i }),
          (t.target = hr))));
  }
  function Ei(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var mr = {
      animationend: Ei("Animation", "AnimationEnd"),
      animationiteration: Ei("Animation", "AnimationIteration"),
      animationstart: Ei("Animation", "AnimationStart"),
      transitionrun: Ei("Transition", "TransitionRun"),
      transitionstart: Ei("Transition", "TransitionStart"),
      transitioncancel: Ei("Transition", "TransitionCancel"),
      transitionend: Ei("Transition", "TransitionEnd"),
    },
    df = {},
    dp = {};
  ha &&
    ((dp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mr.animationend.animation,
      delete mr.animationiteration.animation,
      delete mr.animationstart.animation),
    "TransitionEvent" in window || delete mr.transitionend.transition);
  function zi(e) {
    if (df[e]) return df[e];
    if (!mr[e]) return e;
    var t = mr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in dp) return (df[e] = t[n]);
    return e;
  }
  var hp = zi("animationend"),
    mp = zi("animationiteration"),
    pp = zi("animationstart"),
    mx = zi("transitionrun"),
    px = zi("transitionstart"),
    gx = zi("transitioncancel"),
    gp = zi("transitionend"),
    yp = new Map(),
    hf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  hf.push("scrollEnd");
  function Yl(e, t) {
    (yp.set(e, t), Pl(t, [e]));
  }
  var Jo =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Al = [],
    pr = 0,
    mf = 0;
  function Po() {
    for (var e = pr, t = (mf = pr = 0); t < e; ) {
      var n = Al[t];
      Al[t++] = null;
      var i = Al[t];
      Al[t++] = null;
      var o = Al[t];
      Al[t++] = null;
      var f = Al[t];
      if (((Al[t++] = null), i !== null && o !== null)) {
        var g = i.pending;
        (g === null ? (o.next = o) : ((o.next = g.next), (g.next = o)),
          (i.pending = o));
      }
      f !== 0 && vp(n, o, f);
    }
  }
  function Wo(e, t, n, i) {
    ((Al[pr++] = e),
      (Al[pr++] = t),
      (Al[pr++] = n),
      (Al[pr++] = i),
      (mf |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i));
  }
  function pf(e, t, n, i) {
    return (Wo(e, t, n, i), $o(e));
  }
  function Mi(e, t) {
    return (Wo(e, null, null, t), $o(e));
  }
  function vp(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var o = !1, f = e.return; f !== null; )
      ((f.childLanes |= n),
        (i = f.alternate),
        i !== null && (i.childLanes |= n),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (o = !0)),
        (e = f),
        (f = f.return));
    return e.tag === 3
      ? ((f = e.stateNode),
        o &&
          t !== null &&
          ((o = 31 - Gt(n)),
          (e = f.hiddenUpdates),
          (i = e[o]),
          i === null ? (e[o] = [t]) : i.push(t),
          (t.lane = n | 536870912)),
        f)
      : null;
  }
  function $o(e) {
    if (50 < Ys) throw ((Ys = 0), (Ad = null), Error(a(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var gr = {};
  function yx(e, t, n, i) {
    ((this.tag = e),
      (this.key = n),
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
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function $n(e, t, n, i) {
    return new yx(e, t, n, i);
  }
  function gf(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ma(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = $n(e.tag, t, e.key, e.mode)),
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
      (n.flags = e.flags & 65011712),
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
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function _p(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Io(e, t, n, i, o, f) {
    var g = 0;
    if (((i = e), typeof e == "function")) gf(e) && (g = 1);
    else if (typeof e == "string")
      g = Sb(e, n, te.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Q:
          return ((e = $n(31, n, t, o)), (e.elementType = Q), (e.lanes = f), e);
        case S:
          return Ni(n.children, o, f, t);
        case E:
          ((g = 8), (o |= 24));
          break;
        case k:
          return (
            (e = $n(12, n, t, o | 2)),
            (e.elementType = k),
            (e.lanes = f),
            e
          );
        case Y:
          return ((e = $n(13, n, t, o)), (e.elementType = Y), (e.lanes = f), e);
        case V:
          return ((e = $n(19, n, t, o)), (e.elementType = V), (e.lanes = f), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case G:
                g = 10;
                break e;
              case j:
                g = 9;
                break e;
              case U:
                g = 11;
                break e;
              case R:
                g = 14;
                break e;
              case q:
                ((g = 16), (i = null));
                break e;
            }
          ((g = 29),
            (n = Error(a(130, e === null ? "null" : typeof e, ""))),
            (i = null));
      }
    return (
      (t = $n(g, n, t, o)),
      (t.elementType = e),
      (t.type = i),
      (t.lanes = f),
      t
    );
  }
  function Ni(e, t, n, i) {
    return ((e = $n(7, e, i, t)), (e.lanes = n), e);
  }
  function yf(e, t, n) {
    return ((e = $n(6, e, null, t)), (e.lanes = n), e);
  }
  function xp(e) {
    var t = $n(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function vf(e, t, n) {
    return (
      (t = $n(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var bp = new WeakMap();
  function Cl(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = bp.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: hn(t) }), bp.set(e, t), t);
    }
    return { value: e, source: t, stack: hn(t) };
  }
  var yr = [],
    vr = 0,
    ec = null,
    xs = 0,
    wl = [],
    El = 0,
    La = null,
    $l = 1,
    Il = "";
  function pa(e, t) {
    ((yr[vr++] = xs), (yr[vr++] = ec), (ec = e), (xs = t));
  }
  function Sp(e, t, n) {
    ((wl[El++] = $l), (wl[El++] = Il), (wl[El++] = La), (La = e));
    var i = $l;
    e = Il;
    var o = 32 - Gt(i) - 1;
    ((i &= ~(1 << o)), (n += 1));
    var f = 32 - Gt(t) + o;
    if (30 < f) {
      var g = o - (o % 5);
      ((f = (i & ((1 << g) - 1)).toString(32)),
        (i >>= g),
        (o -= g),
        ($l = (1 << (32 - Gt(t) + o)) | (n << o) | i),
        (Il = f + e));
    } else (($l = (1 << f) | (n << o) | i), (Il = e));
  }
  function _f(e) {
    e.return !== null && (pa(e, 1), Sp(e, 1, 0));
  }
  function xf(e) {
    for (; e === ec; )
      ((ec = yr[--vr]), (yr[vr] = null), (xs = yr[--vr]), (yr[vr] = null));
    for (; e === La; )
      ((La = wl[--El]),
        (wl[El] = null),
        (Il = wl[--El]),
        (wl[El] = null),
        ($l = wl[--El]),
        (wl[El] = null));
  }
  function Tp(e, t) {
    ((wl[El++] = $l),
      (wl[El++] = Il),
      (wl[El++] = La),
      ($l = t.id),
      (Il = t.overflow),
      (La = e));
  }
  var sn = null,
    ht = null,
    Ze = !1,
    Ya = null,
    zl = !1,
    bf = Error(a(519));
  function Ga(e) {
    var t = Error(
      a(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (bs(Cl(t, e)), bf);
  }
  function Ap(e) {
    var t = e.stateNode,
      n = e.type,
      i = e.memoizedProps;
    switch (((t[Re] = e), (t[De] = i), n)) {
      case "dialog":
        (Ye("cancel", t), Ye("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ye("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Xs.length; n++) Ye(Xs[n], t);
        break;
      case "source":
        Ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Ye("error", t), Ye("load", t));
        break;
      case "details":
        Ye("toggle", t);
        break;
      case "input":
        (Ye("invalid", t),
          Hm(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0,
          ));
        break;
      case "select":
        Ye("invalid", t);
        break;
      case "textarea":
        (Ye("invalid", t), qm(t, i.value, i.defaultValue, i.children));
    }
    ((n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Yg(t.textContent, n)
        ? (i.popover != null && (Ye("beforetoggle", t), Ye("toggle", t)),
          i.onScroll != null && Ye("scroll", t),
          i.onScrollEnd != null && Ye("scrollend", t),
          i.onClick != null && (t.onclick = da),
          (t = !0))
        : (t = !1),
      t || Ga(e, !0));
  }
  function Cp(e) {
    for (sn = e.return; sn; )
      switch (sn.tag) {
        case 5:
        case 31:
        case 13:
          zl = !1;
          return;
        case 27:
        case 3:
          zl = !0;
          return;
        default:
          sn = sn.return;
      }
  }
  function _r(e) {
    if (e !== sn) return !1;
    if (!Ze) return (Cp(e), (Ze = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || qd(e.type, e.memoizedProps))),
        (n = !n)),
      n && ht && Ga(e),
      Cp(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      ht = Pg(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      ht = Pg(e);
    } else
      t === 27
        ? ((t = ht), ni(e.type) ? ((e = Vd), (Vd = null), (ht = e)) : (ht = t))
        : (ht = sn ? Nl(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ri() {
    ((ht = sn = null), (Ze = !1));
  }
  function Sf() {
    var e = Ya;
    return (
      e !== null &&
        (Ln === null ? (Ln = e) : Ln.push.apply(Ln, e), (Ya = null)),
      e
    );
  }
  function bs(e) {
    Ya === null ? (Ya = [e]) : Ya.push(e);
  }
  var Tf = A(null),
    Oi = null,
    ga = null;
  function Xa(e, t, n) {
    (ee(Tf, t._currentValue), (t._currentValue = n));
  }
  function ya(e) {
    ((e._currentValue = Tf.current), Z(Tf));
  }
  function Af(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Cf(e, t, n, i) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var f = o.dependencies;
      if (f !== null) {
        var g = o.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var v = f;
          f = o;
          for (var C = 0; C < t.length; C++)
            if (v.context === t[C]) {
              ((f.lanes |= n),
                (v = f.alternate),
                v !== null && (v.lanes |= n),
                Af(f.return, n, e),
                i || (g = null));
              break e;
            }
          f = v.next;
        }
      } else if (o.tag === 18) {
        if (((g = o.return), g === null)) throw Error(a(341));
        ((g.lanes |= n),
          (f = g.alternate),
          f !== null && (f.lanes |= n),
          Af(g, n, e),
          (g = null));
      } else g = o.child;
      if (g !== null) g.return = o;
      else
        for (g = o; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((o = g.sibling), o !== null)) {
            ((o.return = g.return), (g = o));
            break;
          }
          g = g.return;
        }
      o = g;
    }
  }
  function xr(e, t, n, i) {
    e = null;
    for (var o = t, f = !1; o !== null; ) {
      if (!f) {
        if ((o.flags & 524288) !== 0) f = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var g = o.alternate;
        if (g === null) throw Error(a(387));
        if (((g = g.memoizedProps), g !== null)) {
          var v = o.type;
          Wn(o.pendingProps.value, g.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (o === le.current) {
        if (((g = o.alternate), g === null)) throw Error(a(387));
        g.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (e !== null ? e.push(Fs) : (e = [Fs]));
      }
      o = o.return;
    }
    (e !== null && Cf(t, e, n, i), (t.flags |= 262144));
  }
  function tc(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Wn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Di(e) {
    ((Oi = e),
      (ga = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function on(e) {
    return wp(Oi, e);
  }
  function nc(e, t) {
    return (Oi === null && Di(e), wp(e, t));
  }
  function wp(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), ga === null)) {
      if (e === null) throw Error(a(308));
      ((ga = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else ga = ga.next = t;
    return n;
  }
  var vx =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  e.push(i);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    _x = u.unstable_scheduleCallback,
    xx = u.unstable_NormalPriority,
    Xt = {
      $$typeof: G,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function wf() {
    return { controller: new vx(), data: new Map(), refCount: 0 };
  }
  function Ss(e) {
    (e.refCount--,
      e.refCount === 0 &&
        _x(xx, function () {
          e.controller.abort();
        }));
  }
  var Ts = null,
    Ef = 0,
    br = 0,
    Sr = null;
  function bx(e, t) {
    if (Ts === null) {
      var n = (Ts = []);
      ((Ef = 0),
        (br = Nd()),
        (Sr = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        }));
    }
    return (Ef++, t.then(Ep, Ep), t);
  }
  function Ep() {
    if (--Ef === 0 && Ts !== null) {
      Sr !== null && (Sr.status = "fulfilled");
      var e = Ts;
      ((Ts = null), (br = 0), (Sr = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Sx(e, t) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          n.push(o);
        },
      };
    return (
      e.then(
        function () {
          ((i.status = "fulfilled"), (i.value = t));
          for (var o = 0; o < n.length; o++) (0, n[o])(t);
        },
        function (o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < n.length; o++)
            (0, n[o])(void 0);
        },
      ),
      i
    );
  }
  var zp = O.S;
  O.S = function (e, t) {
    ((fg = Dt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        bx(e, t),
      zp !== null && zp(e, t));
  };
  var ki = A(null);
  function zf() {
    var e = ki.current;
    return e !== null ? e : rt.pooledCache;
  }
  function lc(e, t) {
    t === null ? ee(ki, ki.current) : ee(ki, t.pool);
  }
  function Mp() {
    var e = zf();
    return e === null ? null : { parent: Xt._currentValue, pool: e };
  }
  var Tr = Error(a(460)),
    Mf = Error(a(474)),
    ac = Error(a(542)),
    ic = { then: function () {} };
  function Np(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Rp(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(da, da), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Dp(e), e);
      default:
        if (typeof t.status == "string") t.then(da, da);
        else {
          if (((e = rt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(a(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (i) {
                if (t.status === "pending") {
                  var o = t;
                  ((o.status = "fulfilled"), (o.value = i));
                }
              },
              function (i) {
                if (t.status === "pending") {
                  var o = t;
                  ((o.status = "rejected"), (o.reason = i));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Dp(e), e);
        }
        throw ((Ui = t), Tr);
    }
  }
  function ji(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Ui = n), Tr)
        : n;
    }
  }
  var Ui = null;
  function Op() {
    if (Ui === null) throw Error(a(459));
    var e = Ui;
    return ((Ui = null), e);
  }
  function Dp(e) {
    if (e === Tr || e === ac) throw Error(a(483));
  }
  var Ar = null,
    As = 0;
  function rc(e) {
    var t = As;
    return ((As += 1), Ar === null && (Ar = []), Rp(Ar, e, t));
  }
  function Cs(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function sc(e, t) {
    throw t.$$typeof === T
      ? Error(a(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          a(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function kp(e) {
    function t(N, z) {
      if (e) {
        var H = N.deletions;
        H === null ? ((N.deletions = [z]), (N.flags |= 16)) : H.push(z);
      }
    }
    function n(N, z) {
      if (!e) return null;
      for (; z !== null; ) (t(N, z), (z = z.sibling));
      return null;
    }
    function i(N) {
      for (var z = new Map(); N !== null; )
        (N.key !== null ? z.set(N.key, N) : z.set(N.index, N), (N = N.sibling));
      return z;
    }
    function o(N, z) {
      return ((N = ma(N, z)), (N.index = 0), (N.sibling = null), N);
    }
    function f(N, z, H) {
      return (
        (N.index = H),
        e
          ? ((H = N.alternate),
            H !== null
              ? ((H = H.index), H < z ? ((N.flags |= 67108866), z) : H)
              : ((N.flags |= 67108866), z))
          : ((N.flags |= 1048576), z)
      );
    }
    function g(N) {
      return (e && N.alternate === null && (N.flags |= 67108866), N);
    }
    function v(N, z, H, W) {
      return z === null || z.tag !== 6
        ? ((z = yf(H, N.mode, W)), (z.return = N), z)
        : ((z = o(z, H)), (z.return = N), z);
    }
    function C(N, z, H, W) {
      var _e = H.type;
      return _e === S
        ? P(N, z, H.props.children, W, H.key)
        : z !== null &&
            (z.elementType === _e ||
              (typeof _e == "object" &&
                _e !== null &&
                _e.$$typeof === q &&
                ji(_e) === z.type))
          ? ((z = o(z, H.props)), Cs(z, H), (z.return = N), z)
          : ((z = Io(H.type, H.key, H.props, null, N.mode, W)),
            Cs(z, H),
            (z.return = N),
            z);
    }
    function B(N, z, H, W) {
      return z === null ||
        z.tag !== 4 ||
        z.stateNode.containerInfo !== H.containerInfo ||
        z.stateNode.implementation !== H.implementation
        ? ((z = vf(H, N.mode, W)), (z.return = N), z)
        : ((z = o(z, H.children || [])), (z.return = N), z);
    }
    function P(N, z, H, W, _e) {
      return z === null || z.tag !== 7
        ? ((z = Ni(H, N.mode, W, _e)), (z.return = N), z)
        : ((z = o(z, H)), (z.return = N), z);
    }
    function $(N, z, H) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ((z = yf("" + z, N.mode, H)), (z.return = N), z);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case x:
            return (
              (H = Io(z.type, z.key, z.props, null, N.mode, H)),
              Cs(H, z),
              (H.return = N),
              H
            );
          case w:
            return ((z = vf(z, N.mode, H)), (z.return = N), z);
          case q:
            return ((z = ji(z)), $(N, z, H));
        }
        if (me(z) || ne(z))
          return ((z = Ni(z, N.mode, H, null)), (z.return = N), z);
        if (typeof z.then == "function") return $(N, rc(z), H);
        if (z.$$typeof === G) return $(N, nc(N, z), H);
        sc(N, z);
      }
      return null;
    }
    function L(N, z, H, W) {
      var _e = z !== null ? z.key : null;
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return _e !== null ? null : v(N, z, "" + H, W);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case x:
            return H.key === _e ? C(N, z, H, W) : null;
          case w:
            return H.key === _e ? B(N, z, H, W) : null;
          case q:
            return ((H = ji(H)), L(N, z, H, W));
        }
        if (me(H) || ne(H)) return _e !== null ? null : P(N, z, H, W, null);
        if (typeof H.then == "function") return L(N, z, rc(H), W);
        if (H.$$typeof === G) return L(N, z, nc(N, H), W);
        sc(N, H);
      }
      return null;
    }
    function X(N, z, H, W, _e) {
      if (
        (typeof W == "string" && W !== "") ||
        typeof W == "number" ||
        typeof W == "bigint"
      )
        return ((N = N.get(H) || null), v(z, N, "" + W, _e));
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case x:
            return (
              (N = N.get(W.key === null ? H : W.key) || null),
              C(z, N, W, _e)
            );
          case w:
            return (
              (N = N.get(W.key === null ? H : W.key) || null),
              B(z, N, W, _e)
            );
          case q:
            return ((W = ji(W)), X(N, z, H, W, _e));
        }
        if (me(W) || ne(W))
          return ((N = N.get(H) || null), P(z, N, W, _e, null));
        if (typeof W.then == "function") return X(N, z, H, rc(W), _e);
        if (W.$$typeof === G) return X(N, z, H, nc(z, W), _e);
        sc(z, W);
      }
      return null;
    }
    function se(N, z, H, W) {
      for (
        var _e = null, Pe = null, he = z, Me = (z = 0), Ve = null;
        he !== null && Me < H.length;
        Me++
      ) {
        he.index > Me ? ((Ve = he), (he = null)) : (Ve = he.sibling);
        var We = L(N, he, H[Me], W);
        if (We === null) {
          he === null && (he = Ve);
          break;
        }
        (e && he && We.alternate === null && t(N, he),
          (z = f(We, z, Me)),
          Pe === null ? (_e = We) : (Pe.sibling = We),
          (Pe = We),
          (he = Ve));
      }
      if (Me === H.length) return (n(N, he), Ze && pa(N, Me), _e);
      if (he === null) {
        for (; Me < H.length; Me++)
          ((he = $(N, H[Me], W)),
            he !== null &&
              ((z = f(he, z, Me)),
              Pe === null ? (_e = he) : (Pe.sibling = he),
              (Pe = he)));
        return (Ze && pa(N, Me), _e);
      }
      for (he = i(he); Me < H.length; Me++)
        ((Ve = X(he, N, Me, H[Me], W)),
          Ve !== null &&
            (e &&
              Ve.alternate !== null &&
              he.delete(Ve.key === null ? Me : Ve.key),
            (z = f(Ve, z, Me)),
            Pe === null ? (_e = Ve) : (Pe.sibling = Ve),
            (Pe = Ve)));
      return (
        e &&
          he.forEach(function (si) {
            return t(N, si);
          }),
        Ze && pa(N, Me),
        _e
      );
    }
    function xe(N, z, H, W) {
      if (H == null) throw Error(a(151));
      for (
        var _e = null,
          Pe = null,
          he = z,
          Me = (z = 0),
          Ve = null,
          We = H.next();
        he !== null && !We.done;
        Me++, We = H.next()
      ) {
        he.index > Me ? ((Ve = he), (he = null)) : (Ve = he.sibling);
        var si = L(N, he, We.value, W);
        if (si === null) {
          he === null && (he = Ve);
          break;
        }
        (e && he && si.alternate === null && t(N, he),
          (z = f(si, z, Me)),
          Pe === null ? (_e = si) : (Pe.sibling = si),
          (Pe = si),
          (he = Ve));
      }
      if (We.done) return (n(N, he), Ze && pa(N, Me), _e);
      if (he === null) {
        for (; !We.done; Me++, We = H.next())
          ((We = $(N, We.value, W)),
            We !== null &&
              ((z = f(We, z, Me)),
              Pe === null ? (_e = We) : (Pe.sibling = We),
              (Pe = We)));
        return (Ze && pa(N, Me), _e);
      }
      for (he = i(he); !We.done; Me++, We = H.next())
        ((We = X(he, N, Me, We.value, W)),
          We !== null &&
            (e &&
              We.alternate !== null &&
              he.delete(We.key === null ? Me : We.key),
            (z = f(We, z, Me)),
            Pe === null ? (_e = We) : (Pe.sibling = We),
            (Pe = We)));
      return (
        e &&
          he.forEach(function (Db) {
            return t(N, Db);
          }),
        Ze && pa(N, Me),
        _e
      );
    }
    function it(N, z, H, W) {
      if (
        (typeof H == "object" &&
          H !== null &&
          H.type === S &&
          H.key === null &&
          (H = H.props.children),
        typeof H == "object" && H !== null)
      ) {
        switch (H.$$typeof) {
          case x:
            e: {
              for (var _e = H.key; z !== null; ) {
                if (z.key === _e) {
                  if (((_e = H.type), _e === S)) {
                    if (z.tag === 7) {
                      (n(N, z.sibling),
                        (W = o(z, H.props.children)),
                        (W.return = N),
                        (N = W));
                      break e;
                    }
                  } else if (
                    z.elementType === _e ||
                    (typeof _e == "object" &&
                      _e !== null &&
                      _e.$$typeof === q &&
                      ji(_e) === z.type)
                  ) {
                    (n(N, z.sibling),
                      (W = o(z, H.props)),
                      Cs(W, H),
                      (W.return = N),
                      (N = W));
                    break e;
                  }
                  n(N, z);
                  break;
                } else t(N, z);
                z = z.sibling;
              }
              H.type === S
                ? ((W = Ni(H.props.children, N.mode, W, H.key)),
                  (W.return = N),
                  (N = W))
                : ((W = Io(H.type, H.key, H.props, null, N.mode, W)),
                  Cs(W, H),
                  (W.return = N),
                  (N = W));
            }
            return g(N);
          case w:
            e: {
              for (_e = H.key; z !== null; ) {
                if (z.key === _e)
                  if (
                    z.tag === 4 &&
                    z.stateNode.containerInfo === H.containerInfo &&
                    z.stateNode.implementation === H.implementation
                  ) {
                    (n(N, z.sibling),
                      (W = o(z, H.children || [])),
                      (W.return = N),
                      (N = W));
                    break e;
                  } else {
                    n(N, z);
                    break;
                  }
                else t(N, z);
                z = z.sibling;
              }
              ((W = vf(H, N.mode, W)), (W.return = N), (N = W));
            }
            return g(N);
          case q:
            return ((H = ji(H)), it(N, z, H, W));
        }
        if (me(H)) return se(N, z, H, W);
        if (ne(H)) {
          if (((_e = ne(H)), typeof _e != "function")) throw Error(a(150));
          return ((H = _e.call(H)), xe(N, z, H, W));
        }
        if (typeof H.then == "function") return it(N, z, rc(H), W);
        if (H.$$typeof === G) return it(N, z, nc(N, H), W);
        sc(N, H);
      }
      return (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
        ? ((H = "" + H),
          z !== null && z.tag === 6
            ? (n(N, z.sibling), (W = o(z, H)), (W.return = N), (N = W))
            : (n(N, z), (W = yf(H, N.mode, W)), (W.return = N), (N = W)),
          g(N))
        : n(N, z);
    }
    return function (N, z, H, W) {
      try {
        As = 0;
        var _e = it(N, z, H, W);
        return ((Ar = null), _e);
      } catch (he) {
        if (he === Tr || he === ac) throw he;
        var Pe = $n(29, he, null, N.mode);
        return ((Pe.lanes = W), (Pe.return = N), Pe);
      }
    };
  }
  var Hi = kp(!0),
    jp = kp(!1),
    Va = !1;
  function Nf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Rf(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Qa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Za(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), ($e & 2) !== 0)) {
      var o = i.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (i.pending = t),
        (t = $o(e)),
        vp(e, null, n),
        t
      );
    }
    return (Wo(e, i, t, n), $o(e));
  }
  function ws(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (n |= i), (t.lanes = n), we(e, n));
    }
  }
  function Of(e, t) {
    var n = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var o = null,
        f = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var g = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (f === null ? (o = f = g) : (f = f.next = g), (n = n.next));
        } while (n !== null);
        f === null ? (o = f = t) : (f = f.next = t);
      } else o = f = t;
      ((n = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: f,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Df = !1;
  function Es() {
    if (Df) {
      var e = Sr;
      if (e !== null) throw e;
    }
  }
  function zs(e, t, n, i) {
    Df = !1;
    var o = e.updateQueue;
    Va = !1;
    var f = o.firstBaseUpdate,
      g = o.lastBaseUpdate,
      v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var C = v,
        B = C.next;
      ((C.next = null), g === null ? (f = B) : (g.next = B), (g = C));
      var P = e.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (v = P.lastBaseUpdate),
        v !== g &&
          (v === null ? (P.firstBaseUpdate = B) : (v.next = B),
          (P.lastBaseUpdate = C)));
    }
    if (f !== null) {
      var $ = o.baseState;
      ((g = 0), (P = B = C = null), (v = f));
      do {
        var L = v.lane & -536870913,
          X = L !== v.lane;
        if (X ? (Xe & L) === L : (i & L) === L) {
          (L !== 0 && L === br && (Df = !0),
            P !== null &&
              (P = P.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var se = e,
              xe = v;
            L = t;
            var it = n;
            switch (xe.tag) {
              case 1:
                if (((se = xe.payload), typeof se == "function")) {
                  $ = se.call(it, $, L);
                  break e;
                }
                $ = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = xe.payload),
                  (L = typeof se == "function" ? se.call(it, $, L) : se),
                  L == null)
                )
                  break e;
                $ = _({}, $, L);
                break e;
              case 2:
                Va = !0;
            }
          }
          ((L = v.callback),
            L !== null &&
              ((e.flags |= 64),
              X && (e.flags |= 8192),
              (X = o.callbacks),
              X === null ? (o.callbacks = [L]) : X.push(L)));
        } else
          ((X = {
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            P === null ? ((B = P = X), (C = $)) : (P = P.next = X),
            (g |= L));
        if (((v = v.next), v === null)) {
          if (((v = o.shared.pending), v === null)) break;
          ((X = v),
            (v = X.next),
            (X.next = null),
            (o.lastBaseUpdate = X),
            (o.shared.pending = null));
        }
      } while (!0);
      (P === null && (C = $),
        (o.baseState = C),
        (o.firstBaseUpdate = B),
        (o.lastBaseUpdate = P),
        f === null && (o.shared.lanes = 0),
        (Wa |= g),
        (e.lanes = g),
        (e.memoizedState = $));
    }
  }
  function Up(e, t) {
    if (typeof e != "function") throw Error(a(191, e));
    e.call(t);
  }
  function Hp(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Up(n[e], t);
  }
  var Cr = A(null),
    oc = A(0);
  function Bp(e, t) {
    ((e = wa), ee(oc, e), ee(Cr, t), (wa = e | t.baseLanes));
  }
  function kf() {
    (ee(oc, wa), ee(Cr, Cr.current));
  }
  function jf() {
    ((wa = oc.current), Z(Cr), Z(oc));
  }
  var In = A(null),
    Ml = null;
  function Ka(e) {
    var t = e.alternate;
    (ee(jt, jt.current & 1),
      ee(In, e),
      Ml === null &&
        (t === null || Cr.current !== null || t.memoizedState !== null) &&
        (Ml = e));
  }
  function Uf(e) {
    (ee(jt, jt.current), ee(In, e), Ml === null && (Ml = e));
  }
  function qp(e) {
    e.tag === 22
      ? (ee(jt, jt.current), ee(In, e), Ml === null && (Ml = e))
      : Fa();
  }
  function Fa() {
    (ee(jt, jt.current), ee(In, In.current));
  }
  function el(e) {
    (Z(In), Ml === e && (Ml = null), Z(jt));
  }
  var jt = A(0);
  function cc(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Gd(n) || Xd(n)))
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
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var va = 0,
    ze = null,
    lt = null,
    Vt = null,
    uc = !1,
    wr = !1,
    Bi = !1,
    fc = 0,
    Ms = 0,
    Er = null,
    Tx = 0;
  function Nt() {
    throw Error(a(321));
  }
  function Hf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Wn(e[n], t[n])) return !1;
    return !0;
  }
  function Bf(e, t, n, i, o, f) {
    return (
      (va = f),
      (ze = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? S0 : If),
      (Bi = !1),
      (f = n(i, o)),
      (Bi = !1),
      wr && (f = Yp(t, n, i, o)),
      Lp(e),
      f
    );
  }
  function Lp(e) {
    O.H = Os;
    var t = lt !== null && lt.next !== null;
    if (((va = 0), (Vt = lt = ze = null), (uc = !1), (Ms = 0), (Er = null), t))
      throw Error(a(300));
    e === null ||
      Qt ||
      ((e = e.dependencies), e !== null && tc(e) && (Qt = !0));
  }
  function Yp(e, t, n, i) {
    ze = e;
    var o = 0;
    do {
      if ((wr && (Er = null), (Ms = 0), (wr = !1), 25 <= o))
        throw Error(a(301));
      if (((o += 1), (Vt = lt = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        ((f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0));
      }
      ((O.H = T0), (f = t(n, i)));
    } while (wr);
    return f;
  }
  function Ax() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ns(t) : t),
      (e = e.useState()[0]),
      (lt !== null ? lt.memoizedState : null) !== e && (ze.flags |= 1024),
      t
    );
  }
  function qf() {
    var e = fc !== 0;
    return ((fc = 0), e);
  }
  function Lf(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Yf(e) {
    if (uc) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      uc = !1;
    }
    ((va = 0), (Vt = lt = ze = null), (wr = !1), (Ms = fc = 0), (Er = null));
  }
  function wn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Vt === null ? (ze.memoizedState = Vt = e) : (Vt = Vt.next = e), Vt);
  }
  function Ut() {
    if (lt === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = lt.next;
    var t = Vt === null ? ze.memoizedState : Vt.next;
    if (t !== null) ((Vt = t), (lt = e));
    else {
      if (e === null)
        throw ze.alternate === null ? Error(a(467)) : Error(a(310));
      ((lt = e),
        (e = {
          memoizedState: lt.memoizedState,
          baseState: lt.baseState,
          baseQueue: lt.baseQueue,
          queue: lt.queue,
          next: null,
        }),
        Vt === null ? (ze.memoizedState = Vt = e) : (Vt = Vt.next = e));
    }
    return Vt;
  }
  function dc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ns(e) {
    var t = Ms;
    return (
      (Ms += 1),
      Er === null && (Er = []),
      (e = Rp(Er, e, t)),
      (t = ze),
      (Vt === null ? t.memoizedState : Vt.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? S0 : If)),
      e
    );
  }
  function hc(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ns(e);
      if (e.$$typeof === G) return on(e);
    }
    throw Error(a(438, String(e)));
  }
  function Gf(e) {
    var t = null,
      n = ze.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var i = ze.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (t = {
              data: i.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = dc()), (ze.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++) n[i] = I;
    return (t.index++, n);
  }
  function _a(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function mc(e) {
    var t = Ut();
    return Xf(t, lt, e);
  }
  function Xf(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = n;
    var o = e.baseQueue,
      f = i.pending;
    if (f !== null) {
      if (o !== null) {
        var g = o.next;
        ((o.next = f.next), (f.next = g));
      }
      ((t.baseQueue = o = f), (i.pending = null));
    }
    if (((f = e.baseState), o === null)) e.memoizedState = f;
    else {
      t = o.next;
      var v = (g = null),
        C = null,
        B = t,
        P = !1;
      do {
        var $ = B.lane & -536870913;
        if ($ !== B.lane ? (Xe & $) === $ : (va & $) === $) {
          var L = B.revertLane;
          if (L === 0)
            (C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: B.action,
                  hasEagerState: B.hasEagerState,
                  eagerState: B.eagerState,
                  next: null,
                }),
              $ === br && (P = !0));
          else if ((va & L) === L) {
            ((B = B.next), L === br && (P = !0));
            continue;
          } else
            (($ = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              C === null ? ((v = C = $), (g = f)) : (C = C.next = $),
              (ze.lanes |= L),
              (Wa |= L));
          (($ = B.action),
            Bi && n(f, $),
            (f = B.hasEagerState ? B.eagerState : n(f, $)));
        } else
          ((L = {
            lane: $,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            C === null ? ((v = C = L), (g = f)) : (C = C.next = L),
            (ze.lanes |= $),
            (Wa |= $));
        B = B.next;
      } while (B !== null && B !== t);
      if (
        (C === null ? (g = f) : (C.next = v),
        !Wn(f, e.memoizedState) && ((Qt = !0), P && ((n = Sr), n !== null)))
      )
        throw n;
      ((e.memoizedState = f),
        (e.baseState = g),
        (e.baseQueue = C),
        (i.lastRenderedState = f));
    }
    return (o === null && (i.lanes = 0), [e.memoizedState, i.dispatch]);
  }
  function Vf(e) {
    var t = Ut(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch,
      o = n.pending,
      f = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var g = (o = o.next);
      do ((f = e(f, g.action)), (g = g.next));
      while (g !== o);
      (Wn(f, t.memoizedState) || (Qt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (n.lastRenderedState = f));
    }
    return [f, i];
  }
  function Gp(e, t, n) {
    var i = ze,
      o = Ut(),
      f = Ze;
    if (f) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else n = t();
    var g = !Wn((lt || o).memoizedState, n);
    if (
      (g && ((o.memoizedState = n), (Qt = !0)),
      (o = o.queue),
      Kf(Qp.bind(null, i, o, e), [e]),
      o.getSnapshot !== t || g || (Vt !== null && Vt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        zr(9, { destroy: void 0 }, Vp.bind(null, i, o, n, t), null),
        rt === null)
      )
        throw Error(a(349));
      f || (va & 127) !== 0 || Xp(i, t, n);
    }
    return n;
  }
  function Xp(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ze.updateQueue),
      t === null
        ? ((t = dc()), (ze.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Vp(e, t, n, i) {
    ((t.value = n), (t.getSnapshot = i), Zp(t) && Kp(e));
  }
  function Qp(e, t, n) {
    return n(function () {
      Zp(t) && Kp(e);
    });
  }
  function Zp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Wn(e, n);
    } catch {
      return !0;
    }
  }
  function Kp(e) {
    var t = Mi(e, 2);
    t !== null && Yn(t, e, 2);
  }
  function Qf(e) {
    var t = wn();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Bi)) {
        Tn(!0);
        try {
          n();
        } finally {
          Tn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _a,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Fp(e, t, n, i) {
    return ((e.baseState = n), Xf(e, lt, typeof i == "function" ? i : _a));
  }
  function Cx(e, t, n, i, o) {
    if (yc(e)) throw Error(a(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          f.listeners.push(g);
        },
      };
      (O.T !== null ? n(!0) : (f.isTransition = !1),
        i(f),
        (n = t.pending),
        n === null
          ? ((f.next = t.pending = f), Jp(t, f))
          : ((f.next = n.next), (t.pending = n.next = f)));
    }
  }
  function Jp(e, t) {
    var n = t.action,
      i = t.payload,
      o = e.state;
    if (t.isTransition) {
      var f = O.T,
        g = {};
      O.T = g;
      try {
        var v = n(o, i),
          C = O.S;
        (C !== null && C(g, v), Pp(e, t, v));
      } catch (B) {
        Zf(e, t, B);
      } finally {
        (f !== null && g.types !== null && (f.types = g.types), (O.T = f));
      }
    } else
      try {
        ((f = n(o, i)), Pp(e, t, f));
      } catch (B) {
        Zf(e, t, B);
      }
  }
  function Pp(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Wp(e, t, i);
          },
          function (i) {
            return Zf(e, t, i);
          },
        )
      : Wp(e, t, n);
  }
  function Wp(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      $p(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Jp(e, n))));
  }
  function Zf(e, t, n) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do ((t.status = "rejected"), (t.reason = n), $p(t), (t = t.next));
      while (t !== i);
    }
    e.action = null;
  }
  function $p(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ip(e, t) {
    return t;
  }
  function e0(e, t) {
    if (Ze) {
      var n = rt.formState;
      if (n !== null) {
        e: {
          var i = ze;
          if (Ze) {
            if (ht) {
              t: {
                for (var o = ht, f = zl; o.nodeType !== 8; ) {
                  if (!f) {
                    o = null;
                    break t;
                  }
                  if (((o = Nl(o.nextSibling)), o === null)) {
                    o = null;
                    break t;
                  }
                }
                ((f = o.data), (o = f === "F!" || f === "F" ? o : null));
              }
              if (o) {
                ((ht = Nl(o.nextSibling)), (i = o.data === "F!"));
                break e;
              }
            }
            Ga(i);
          }
          i = !1;
        }
        i && (t = n[0]);
      }
    }
    return (
      (n = wn()),
      (n.memoizedState = n.baseState = t),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ip,
        lastRenderedState: t,
      }),
      (n.queue = i),
      (n = _0.bind(null, ze, i)),
      (i.dispatch = n),
      (i = Qf(!1)),
      (f = $f.bind(null, ze, !1, i.queue)),
      (i = wn()),
      (o = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = o),
      (n = Cx.bind(null, ze, o, f, n)),
      (o.dispatch = n),
      (i.memoizedState = e),
      [t, n, !1]
    );
  }
  function t0(e) {
    var t = Ut();
    return n0(t, lt, e);
  }
  function n0(e, t, n) {
    if (
      ((t = Xf(e, t, Ip)[0]),
      (e = mc(_a)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var i = Ns(t);
      } catch (g) {
        throw g === Tr ? ac : g;
      }
    else i = t;
    t = Ut();
    var o = t.queue,
      f = o.dispatch;
    return (
      n !== t.memoizedState &&
        ((ze.flags |= 2048),
        zr(9, { destroy: void 0 }, wx.bind(null, o, n), null)),
      [i, f, e]
    );
  }
  function wx(e, t) {
    e.action = t;
  }
  function l0(e) {
    var t = Ut(),
      n = lt;
    if (n !== null) return n0(t, n, e);
    (Ut(), (t = t.memoizedState), (n = Ut()));
    var i = n.queue.dispatch;
    return ((n.memoizedState = e), [t, i, !1]);
  }
  function zr(e, t, n, i) {
    return (
      (e = { tag: e, create: n, deps: i, inst: t, next: null }),
      (t = ze.updateQueue),
      t === null && ((t = dc()), (ze.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function a0() {
    return Ut().memoizedState;
  }
  function pc(e, t, n, i) {
    var o = wn();
    ((ze.flags |= e),
      (o.memoizedState = zr(
        1 | t,
        { destroy: void 0 },
        n,
        i === void 0 ? null : i,
      )));
  }
  function gc(e, t, n, i) {
    var o = Ut();
    i = i === void 0 ? null : i;
    var f = o.memoizedState.inst;
    lt !== null && i !== null && Hf(i, lt.memoizedState.deps)
      ? (o.memoizedState = zr(t, f, n, i))
      : ((ze.flags |= e), (o.memoizedState = zr(1 | t, f, n, i)));
  }
  function i0(e, t) {
    pc(8390656, 8, e, t);
  }
  function Kf(e, t) {
    gc(2048, 8, e, t);
  }
  function Ex(e) {
    ze.flags |= 4;
    var t = ze.updateQueue;
    if (t === null) ((t = dc()), (ze.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function r0(e) {
    var t = Ut().memoizedState;
    return (
      Ex({ ref: t, nextImpl: e }),
      function () {
        if (($e & 2) !== 0) throw Error(a(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function s0(e, t) {
    return gc(4, 2, e, t);
  }
  function o0(e, t) {
    return gc(4, 4, e, t);
  }
  function c0(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function u0(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), gc(4, 4, c0.bind(null, t, e), n));
  }
  function Ff() {}
  function f0(e, t) {
    var n = Ut();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && Hf(t, i[1]) ? i[0] : ((n.memoizedState = [e, t]), e);
  }
  function d0(e, t) {
    var n = Ut();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && Hf(t, i[1])) return i[0];
    if (((i = e()), Bi)) {
      Tn(!0);
      try {
        e();
      } finally {
        Tn(!1);
      }
    }
    return ((n.memoizedState = [i, t]), i);
  }
  function Jf(e, t, n) {
    return n === void 0 || ((va & 1073741824) !== 0 && (Xe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = hg()), (ze.lanes |= e), (Wa |= e), n);
  }
  function h0(e, t, n, i) {
    return Wn(n, t)
      ? n
      : Cr.current !== null
        ? ((e = Jf(e, n, i)), Wn(e, t) || (Qt = !0), e)
        : (va & 42) === 0 || ((va & 1073741824) !== 0 && (Xe & 261930) === 0)
          ? ((Qt = !0), (e.memoizedState = n))
          : ((e = hg()), (ze.lanes |= e), (Wa |= e), t);
  }
  function m0(e, t, n, i, o) {
    var f = F.p;
    F.p = f !== 0 && 8 > f ? f : 8;
    var g = O.T,
      v = {};
    ((O.T = v), $f(e, !1, t, n));
    try {
      var C = o(),
        B = O.S;
      if (
        (B !== null && B(v, C),
        C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var P = Sx(C, i);
        Rs(e, t, P, ll(e));
      } else Rs(e, t, i, ll(e));
    } catch ($) {
      Rs(e, t, { then: function () {}, status: "rejected", reason: $ }, ll());
    } finally {
      ((F.p = f),
        g !== null && v.types !== null && (g.types = v.types),
        (O.T = g));
    }
  }
  function zx() {}
  function Pf(e, t, n, i) {
    if (e.tag !== 5) throw Error(a(476));
    var o = p0(e).queue;
    m0(
      e,
      o,
      t,
      J,
      n === null
        ? zx
        : function () {
            return (g0(e), n(i));
          },
    );
  }
  function p0(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _a,
        lastRenderedState: J,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _a,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function g0(e) {
    var t = p0(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Rs(e, t.next.queue, {}, ll()));
  }
  function Wf() {
    return on(Fs);
  }
  function y0() {
    return Ut().memoizedState;
  }
  function v0() {
    return Ut().memoizedState;
  }
  function Mx(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = ll();
          e = Qa(n);
          var i = Za(t, e, n);
          (i !== null && (Yn(i, t, n), ws(i, t, n)),
            (t = { cache: wf() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Nx(e, t, n) {
    var i = ll();
    ((n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      yc(e)
        ? x0(t, n)
        : ((n = pf(e, t, n, i)), n !== null && (Yn(n, e, i), b0(n, t, i))));
  }
  function _0(e, t, n) {
    var i = ll();
    Rs(e, t, n, i);
  }
  function Rs(e, t, n, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (yc(e)) x0(t, o);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var g = t.lastRenderedState,
            v = f(g, n);
          if (((o.hasEagerState = !0), (o.eagerState = v), Wn(v, g)))
            return (Wo(e, t, o, 0), rt === null && Po(), !1);
        } catch {}
      if (((n = pf(e, t, o, i)), n !== null))
        return (Yn(n, e, i), b0(n, t, i), !0);
    }
    return !1;
  }
  function $f(e, t, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: Nd(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      yc(e))
    ) {
      if (t) throw Error(a(479));
    } else ((t = pf(e, n, i, 2)), t !== null && Yn(t, e, 2));
  }
  function yc(e) {
    var t = e.alternate;
    return e === ze || (t !== null && t === ze);
  }
  function x0(e, t) {
    wr = uc = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function b0(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (n |= i), (t.lanes = n), we(e, n));
    }
  }
  var Os = {
    readContext: on,
    use: hc,
    useCallback: Nt,
    useContext: Nt,
    useEffect: Nt,
    useImperativeHandle: Nt,
    useLayoutEffect: Nt,
    useInsertionEffect: Nt,
    useMemo: Nt,
    useReducer: Nt,
    useRef: Nt,
    useState: Nt,
    useDebugValue: Nt,
    useDeferredValue: Nt,
    useTransition: Nt,
    useSyncExternalStore: Nt,
    useId: Nt,
    useHostTransitionStatus: Nt,
    useFormState: Nt,
    useActionState: Nt,
    useOptimistic: Nt,
    useMemoCache: Nt,
    useCacheRefresh: Nt,
  };
  Os.useEffectEvent = Nt;
  var S0 = {
      readContext: on,
      use: hc,
      useCallback: function (e, t) {
        return ((wn().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: on,
      useEffect: i0,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          pc(4194308, 4, c0.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return pc(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        pc(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = wn();
        t = t === void 0 ? null : t;
        var i = e();
        if (Bi) {
          Tn(!0);
          try {
            e();
          } finally {
            Tn(!1);
          }
        }
        return ((n.memoizedState = [i, t]), i);
      },
      useReducer: function (e, t, n) {
        var i = wn();
        if (n !== void 0) {
          var o = n(t);
          if (Bi) {
            Tn(!0);
            try {
              n(t);
            } finally {
              Tn(!1);
            }
          }
        } else o = t;
        return (
          (i.memoizedState = i.baseState = o),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: o,
          }),
          (i.queue = e),
          (e = e.dispatch = Nx.bind(null, ze, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = wn();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Qf(e);
        var t = e.queue,
          n = _0.bind(null, ze, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Ff,
      useDeferredValue: function (e, t) {
        var n = wn();
        return Jf(n, e, t);
      },
      useTransition: function () {
        var e = Qf(!1);
        return (
          (e = m0.bind(null, ze, e.queue, !0, !1)),
          (wn().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var i = ze,
          o = wn();
        if (Ze) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), rt === null)) throw Error(a(349));
          (Xe & 127) !== 0 || Xp(i, t, n);
        }
        o.memoizedState = n;
        var f = { value: n, getSnapshot: t };
        return (
          (o.queue = f),
          i0(Qp.bind(null, i, f, e), [e]),
          (i.flags |= 2048),
          zr(9, { destroy: void 0 }, Vp.bind(null, i, f, n, t), null),
          n
        );
      },
      useId: function () {
        var e = wn(),
          t = rt.identifierPrefix;
        if (Ze) {
          var n = Il,
            i = $l;
          ((n = (i & ~(1 << (32 - Gt(i) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = fc++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = Tx++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Wf,
      useFormState: e0,
      useActionState: e0,
      useOptimistic: function (e) {
        var t = wn();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = $f.bind(null, ze, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Gf,
      useCacheRefresh: function () {
        return (wn().memoizedState = Mx.bind(null, ze));
      },
      useEffectEvent: function (e) {
        var t = wn(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if (($e & 2) !== 0) throw Error(a(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    If = {
      readContext: on,
      use: hc,
      useCallback: f0,
      useContext: on,
      useEffect: Kf,
      useImperativeHandle: u0,
      useInsertionEffect: s0,
      useLayoutEffect: o0,
      useMemo: d0,
      useReducer: mc,
      useRef: a0,
      useState: function () {
        return mc(_a);
      },
      useDebugValue: Ff,
      useDeferredValue: function (e, t) {
        var n = Ut();
        return h0(n, lt.memoizedState, e, t);
      },
      useTransition: function () {
        var e = mc(_a)[0],
          t = Ut().memoizedState;
        return [typeof e == "boolean" ? e : Ns(e), t];
      },
      useSyncExternalStore: Gp,
      useId: y0,
      useHostTransitionStatus: Wf,
      useFormState: t0,
      useActionState: t0,
      useOptimistic: function (e, t) {
        var n = Ut();
        return Fp(n, lt, e, t);
      },
      useMemoCache: Gf,
      useCacheRefresh: v0,
    };
  If.useEffectEvent = r0;
  var T0 = {
    readContext: on,
    use: hc,
    useCallback: f0,
    useContext: on,
    useEffect: Kf,
    useImperativeHandle: u0,
    useInsertionEffect: s0,
    useLayoutEffect: o0,
    useMemo: d0,
    useReducer: Vf,
    useRef: a0,
    useState: function () {
      return Vf(_a);
    },
    useDebugValue: Ff,
    useDeferredValue: function (e, t) {
      var n = Ut();
      return lt === null ? Jf(n, e, t) : h0(n, lt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Vf(_a)[0],
        t = Ut().memoizedState;
      return [typeof e == "boolean" ? e : Ns(e), t];
    },
    useSyncExternalStore: Gp,
    useId: y0,
    useHostTransitionStatus: Wf,
    useFormState: l0,
    useActionState: l0,
    useOptimistic: function (e, t) {
      var n = Ut();
      return lt !== null
        ? Fp(n, lt, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Gf,
    useCacheRefresh: v0,
  };
  T0.useEffectEvent = r0;
  function ed(e, t, n, i) {
    ((t = e.memoizedState),
      (n = n(i, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var td = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var i = ll(),
        o = Qa(i);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Za(e, o, i)),
        t !== null && (Yn(t, e, i), ws(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var i = ll(),
        o = Qa(i);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Za(e, o, i)),
        t !== null && (Yn(t, e, i), ws(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ll(),
        i = Qa(n);
      ((i.tag = 2),
        t != null && (i.callback = t),
        (t = Za(e, i, n)),
        t !== null && (Yn(t, e, n), ws(t, e, n)));
    },
  };
  function A0(e, t, n, i, o, f, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, f, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !vs(n, i) || !vs(o, f)
          : !0
    );
  }
  function C0(e, t, n, i) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== e && td.enqueueReplaceState(t, t.state, null));
  }
  function qi(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var i in t) i !== "ref" && (n[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = _({}, n));
      for (var o in e) n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  function w0(e) {
    Jo(e);
  }
  function E0(e) {
    console.error(e);
  }
  function z0(e) {
    Jo(e);
  }
  function vc(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function M0(e, t, n) {
    try {
      var i = e.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function nd(e, t, n) {
    return (
      (n = Qa(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        vc(e, t);
      }),
      n
    );
  }
  function N0(e) {
    return ((e = Qa(e)), (e.tag = 3), e);
  }
  function R0(e, t, n, i) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = i.value;
      ((e.payload = function () {
        return o(f);
      }),
        (e.callback = function () {
          M0(t, n, i);
        }));
    }
    var g = n.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        (M0(t, n, i),
          typeof o != "function" &&
            ($a === null ? ($a = new Set([this])) : $a.add(this)));
        var v = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function Rx(e, t, n, i, o) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && xr(t, n, o, !0),
        (n = In.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Ml === null ? Nc() : n.alternate === null && Rt === 0 && (Rt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = o),
              i === ic
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([i])) : t.add(i),
                  Ed(e, i, o)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === ic
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([i])) : n.add(i)),
                  Ed(e, i, o)),
              !1
            );
        }
        throw Error(a(435, n.tag));
      }
      return (Ed(e, i, o), Nc(), !1);
    }
    if (Ze)
      return (
        (t = In.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = o),
            i !== bf && ((e = Error(a(422), { cause: i })), bs(Cl(e, n))))
          : (i !== bf && ((t = Error(a(423), { cause: i })), bs(Cl(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (o &= -o),
            (e.lanes |= o),
            (i = Cl(i, n)),
            (o = nd(e.stateNode, i, o)),
            Of(e, o),
            Rt !== 4 && (Rt = 2)),
        !1
      );
    var f = Error(a(520), { cause: i });
    if (
      ((f = Cl(f, n)),
      Ls === null ? (Ls = [f]) : Ls.push(f),
      Rt !== 4 && (Rt = 2),
      t === null)
    )
      return !0;
    ((i = Cl(i, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = o & -o),
            (n.lanes |= e),
            (e = nd(n.stateNode, i, e)),
            Of(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (f = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  ($a === null || !$a.has(f)))))
          )
            return (
              (n.flags |= 65536),
              (o &= -o),
              (n.lanes |= o),
              (o = N0(o)),
              R0(o, e, n, i),
              Of(n, o),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ld = Error(a(461)),
    Qt = !1;
  function cn(e, t, n, i) {
    t.child = e === null ? jp(t, null, n, i) : Hi(t, e.child, n, i);
  }
  function O0(e, t, n, i, o) {
    n = n.render;
    var f = t.ref;
    if ("ref" in i) {
      var g = {};
      for (var v in i) v !== "ref" && (g[v] = i[v]);
    } else g = i;
    return (
      Di(t),
      (i = Bf(e, t, n, g, f, o)),
      (v = qf()),
      e !== null && !Qt
        ? (Lf(e, t, o), xa(e, t, o))
        : (Ze && v && _f(t), (t.flags |= 1), cn(e, t, i, o), t.child)
    );
  }
  function D0(e, t, n, i, o) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" &&
        !gf(f) &&
        f.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = f), k0(e, t, f, i, o))
        : ((e = Io(n.type, null, i, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), !fd(e, o))) {
      var g = f.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : vs), n(g, i) && e.ref === t.ref)
      )
        return xa(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = ma(f, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function k0(e, t, n, i, o) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (vs(f, i) && e.ref === t.ref)
        if (((Qt = !1), (t.pendingProps = i = f), fd(e, o)))
          (e.flags & 131072) !== 0 && (Qt = !0);
        else return ((t.lanes = e.lanes), xa(e, t, o));
    }
    return ad(e, t, n, i, o);
  }
  function j0(e, t, n, i) {
    var o = i.children,
      f = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | n : n), e !== null)) {
          for (i = t.child = e.child, o = 0; i !== null; )
            ((o = o | i.lanes | i.childLanes), (i = i.sibling));
          i = o & ~f;
        } else ((i = 0), (t.child = null));
        return U0(e, t, f, n, i);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && lc(t, f !== null ? f.cachePool : null),
          f !== null ? Bp(t, f) : kf(),
          qp(t));
      else
        return (
          (i = t.lanes = 536870912),
          U0(e, t, f !== null ? f.baseLanes | n : n, n, i)
        );
    } else
      f !== null
        ? (lc(t, f.cachePool), Bp(t, f), Fa(), (t.memoizedState = null))
        : (e !== null && lc(t, null), kf(), Fa());
    return (cn(e, t, o, n), t.child);
  }
  function Ds(e, t) {
    return (
      (e !== null && e.tag === 22) ||
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
  function U0(e, t, n, i, o) {
    var f = zf();
    return (
      (f = f === null ? null : { parent: Xt._currentValue, pool: f }),
      (t.memoizedState = { baseLanes: n, cachePool: f }),
      e !== null && lc(t, null),
      kf(),
      qp(t),
      e !== null && xr(e, t, i, !0),
      (t.childLanes = o),
      null
    );
  }
  function _c(e, t) {
    return (
      (t = bc({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function H0(e, t, n) {
    return (
      Hi(t, e.child, null, n),
      (e = _c(t, t.pendingProps)),
      (e.flags |= 2),
      el(t),
      (t.memoizedState = null),
      e
    );
  }
  function Ox(e, t, n) {
    var i = t.pendingProps,
      o = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ze) {
        if (i.mode === "hidden")
          return ((e = _c(t, i)), (t.lanes = 536870912), Ds(null, e));
        if (
          (Uf(t),
          (e = ht)
            ? ((e = Jg(e, zl)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: La !== null ? { id: $l, overflow: Il } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = xp(e)),
                (n.return = t),
                (t.child = n),
                (sn = t),
                (ht = null)))
            : (e = null),
          e === null)
        )
          throw Ga(t);
        return ((t.lanes = 536870912), null);
      }
      return _c(t, i);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var g = f.dehydrated;
      if ((Uf(t), o))
        if (t.flags & 256) ((t.flags &= -257), (t = H0(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(a(558));
      else if (
        (Qt || xr(e, t, n, !1), (o = (n & e.childLanes) !== 0), Qt || o)
      ) {
        if (
          ((i = rt),
          i !== null && ((g = ve(i, n)), g !== 0 && g !== f.retryLane))
        )
          throw ((f.retryLane = g), Mi(e, g), Yn(i, e, g), ld);
        (Nc(), (t = H0(e, t, n)));
      } else
        ((e = f.treeContext),
          (ht = Nl(g.nextSibling)),
          (sn = t),
          (Ze = !0),
          (Ya = null),
          (zl = !1),
          e !== null && Tp(t, e),
          (t = _c(t, i)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = ma(e.child, { mode: i.mode, children: i.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function xc(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(a(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function ad(e, t, n, i, o) {
    return (
      Di(t),
      (n = Bf(e, t, n, i, void 0, o)),
      (i = qf()),
      e !== null && !Qt
        ? (Lf(e, t, o), xa(e, t, o))
        : (Ze && i && _f(t), (t.flags |= 1), cn(e, t, n, o), t.child)
    );
  }
  function B0(e, t, n, i, o, f) {
    return (
      Di(t),
      (t.updateQueue = null),
      (n = Yp(t, i, n, o)),
      Lp(e),
      (i = qf()),
      e !== null && !Qt
        ? (Lf(e, t, f), xa(e, t, f))
        : (Ze && i && _f(t), (t.flags |= 1), cn(e, t, n, f), t.child)
    );
  }
  function q0(e, t, n, i, o) {
    if ((Di(t), t.stateNode === null)) {
      var f = gr,
        g = n.contextType;
      (typeof g == "object" && g !== null && (f = on(g)),
        (f = new n(i, f)),
        (t.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = td),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = i),
        (f.state = t.memoizedState),
        (f.refs = {}),
        Nf(t),
        (g = n.contextType),
        (f.context = typeof g == "object" && g !== null ? on(g) : gr),
        (f.state = t.memoizedState),
        (g = n.getDerivedStateFromProps),
        typeof g == "function" && (ed(t, n, g, i), (f.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((g = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          g !== f.state && td.enqueueReplaceState(f, f.state, null),
          zs(t, i, f, o),
          Es(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308),
        (i = !0));
    } else if (e === null) {
      f = t.stateNode;
      var v = t.memoizedProps,
        C = qi(n, v);
      f.props = C;
      var B = f.context,
        P = n.contextType;
      ((g = gr), typeof P == "object" && P !== null && (g = on(P)));
      var $ = n.getDerivedStateFromProps;
      ((P =
        typeof $ == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (v = t.pendingProps !== v),
        P ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((v || B !== g) && C0(t, f, i, g)),
        (Va = !1));
      var L = t.memoizedState;
      ((f.state = L),
        zs(t, i, f, o),
        Es(),
        (B = t.memoizedState),
        v || L !== B || Va
          ? (typeof $ == "function" && (ed(t, n, $, i), (B = t.memoizedState)),
            (C = Va || A0(t, n, C, i, L, B, g))
              ? (P ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = B)),
            (f.props = i),
            (f.state = B),
            (f.context = g),
            (i = C))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1)));
    } else {
      ((f = t.stateNode),
        Rf(e, t),
        (g = t.memoizedProps),
        (P = qi(n, g)),
        (f.props = P),
        ($ = t.pendingProps),
        (L = f.context),
        (B = n.contextType),
        (C = gr),
        typeof B == "object" && B !== null && (C = on(B)),
        (v = n.getDerivedStateFromProps),
        (B =
          typeof v == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((g !== $ || L !== C) && C0(t, f, i, C)),
        (Va = !1),
        (L = t.memoizedState),
        (f.state = L),
        zs(t, i, f, o),
        Es());
      var X = t.memoizedState;
      g !== $ ||
      L !== X ||
      Va ||
      (e !== null && e.dependencies !== null && tc(e.dependencies))
        ? (typeof v == "function" && (ed(t, n, v, i), (X = t.memoizedState)),
          (P =
            Va ||
            A0(t, n, P, i, L, X, C) ||
            (e !== null && e.dependencies !== null && tc(e.dependencies)))
            ? (B ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(i, X, C),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(i, X, C)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (g === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = X)),
          (f.props = i),
          (f.state = X),
          (f.context = C),
          (i = P))
        : (typeof f.componentDidUpdate != "function" ||
            (g === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return (
      (f = i),
      xc(e, t),
      (i = (t.flags & 128) !== 0),
      f || i
        ? ((f = t.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (t.flags |= 1),
          e !== null && i
            ? ((t.child = Hi(t, e.child, null, o)),
              (t.child = Hi(t, null, n, o)))
            : cn(e, t, n, o),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = xa(e, t, o)),
      e
    );
  }
  function L0(e, t, n, i) {
    return (Ri(), (t.flags |= 256), cn(e, t, n, i), t.child);
  }
  var id = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function rd(e) {
    return { baseLanes: e, cachePool: Mp() };
  }
  function sd(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= nl), e);
  }
  function Y0(e, t, n) {
    var i = t.pendingProps,
      o = !1,
      f = (t.flags & 128) !== 0,
      g;
    if (
      ((g = f) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : (jt.current & 2) !== 0),
      g && ((o = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ze) {
        if (
          (o ? Ka(t) : Fa(),
          (e = ht)
            ? ((e = Jg(e, zl)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: La !== null ? { id: $l, overflow: Il } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = xp(e)),
                (n.return = t),
                (t.child = n),
                (sn = t),
                (ht = null)))
            : (e = null),
          e === null)
        )
          throw Ga(t);
        return (Xd(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var v = i.children;
      return (
        (i = i.fallback),
        o
          ? (Fa(),
            (o = t.mode),
            (v = bc({ mode: "hidden", children: v }, o)),
            (i = Ni(i, o, n, null)),
            (v.return = t),
            (i.return = t),
            (v.sibling = i),
            (t.child = v),
            (i = t.child),
            (i.memoizedState = rd(n)),
            (i.childLanes = sd(e, g, n)),
            (t.memoizedState = id),
            Ds(null, i))
          : (Ka(t), od(t, v))
      );
    }
    var C = e.memoizedState;
    if (C !== null && ((v = C.dehydrated), v !== null)) {
      if (f)
        t.flags & 256
          ? (Ka(t), (t.flags &= -257), (t = cd(e, t, n)))
          : t.memoizedState !== null
            ? (Fa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Fa(),
              (v = i.fallback),
              (o = t.mode),
              (i = bc({ mode: "visible", children: i.children }, o)),
              (v = Ni(v, o, n, null)),
              (v.flags |= 2),
              (i.return = t),
              (v.return = t),
              (i.sibling = v),
              (t.child = i),
              Hi(t, e.child, null, n),
              (i = t.child),
              (i.memoizedState = rd(n)),
              (i.childLanes = sd(e, g, n)),
              (t.memoizedState = id),
              (t = Ds(null, i)));
      else if ((Ka(t), Xd(v))) {
        if (((g = v.nextSibling && v.nextSibling.dataset), g)) var B = g.dgst;
        ((g = B),
          (i = Error(a(419))),
          (i.stack = ""),
          (i.digest = g),
          bs({ value: i, source: null, stack: null }),
          (t = cd(e, t, n)));
      } else if (
        (Qt || xr(e, t, n, !1), (g = (n & e.childLanes) !== 0), Qt || g)
      ) {
        if (
          ((g = rt),
          g !== null && ((i = ve(g, n)), i !== 0 && i !== C.retryLane))
        )
          throw ((C.retryLane = i), Mi(e, i), Yn(g, e, i), ld);
        (Gd(v) || Nc(), (t = cd(e, t, n)));
      } else
        Gd(v)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = C.treeContext),
            (ht = Nl(v.nextSibling)),
            (sn = t),
            (Ze = !0),
            (Ya = null),
            (zl = !1),
            e !== null && Tp(t, e),
            (t = od(t, i.children)),
            (t.flags |= 4096));
      return t;
    }
    return o
      ? (Fa(),
        (v = i.fallback),
        (o = t.mode),
        (C = e.child),
        (B = C.sibling),
        (i = ma(C, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = C.subtreeFlags & 65011712),
        B !== null ? (v = ma(B, v)) : ((v = Ni(v, o, n, null)), (v.flags |= 2)),
        (v.return = t),
        (i.return = t),
        (i.sibling = v),
        (t.child = i),
        Ds(null, i),
        (i = t.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = rd(n))
          : ((o = v.cachePool),
            o !== null
              ? ((C = Xt._currentValue),
                (o = o.parent !== C ? { parent: C, pool: C } : o))
              : (o = Mp()),
            (v = { baseLanes: v.baseLanes | n, cachePool: o })),
        (i.memoizedState = v),
        (i.childLanes = sd(e, g, n)),
        (t.memoizedState = id),
        Ds(e.child, i))
      : (Ka(t),
        (n = e.child),
        (e = n.sibling),
        (n = ma(n, { mode: "visible", children: i.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((g = t.deletions),
          g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function od(e, t) {
    return (
      (t = bc({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function bc(e, t) {
    return ((e = $n(22, e, null, t)), (e.lanes = 0), e);
  }
  function cd(e, t, n) {
    return (
      Hi(t, e.child, null, n),
      (e = od(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function G0(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    (i !== null && (i.lanes |= t), Af(e.return, t, n));
  }
  function ud(e, t, n, i, o, f) {
    var g = e.memoizedState;
    g === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: o,
          treeForkCount: f,
        })
      : ((g.isBackwards = t),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = i),
        (g.tail = n),
        (g.tailMode = o),
        (g.treeForkCount = f));
  }
  function X0(e, t, n) {
    var i = t.pendingProps,
      o = i.revealOrder,
      f = i.tail;
    i = i.children;
    var g = jt.current,
      v = (g & 2) !== 0;
    if (
      (v ? ((g = (g & 1) | 2), (t.flags |= 128)) : (g &= 1),
      ee(jt, g),
      cn(e, t, i, n),
      (i = Ze ? xs : 0),
      !v && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && G0(e, n, t);
        else if (e.tag === 19) G0(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && cc(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ud(t, !1, o, n, f, i));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && cc(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        ud(t, !0, n, null, f, i);
        break;
      case "together":
        ud(t, !1, null, null, void 0, i);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xa(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Wa |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((xr(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = ma(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = ma(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function fd(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && tc(e)));
  }
  function Dx(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ne(t, t.stateNode.containerInfo),
          Xa(t, Xt, e.memoizedState.cache),
          Ri());
        break;
      case 27:
      case 5:
        Qe(t);
        break;
      case 4:
        Ne(t, t.stateNode.containerInfo);
        break;
      case 10:
        Xa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Uf(t), null);
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Ka(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Y0(e, t, n)
              : (Ka(t), (e = xa(e, t, n)), e !== null ? e.sibling : null);
        Ka(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (
          ((i = (n & t.childLanes) !== 0),
          i || (xr(e, t, n, !1), (i = (n & t.childLanes) !== 0)),
          o)
        ) {
          if (i) return X0(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          ee(jt, jt.current),
          i)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), j0(e, t, n, t.pendingProps));
      case 24:
        Xa(t, Xt, e.memoizedState.cache);
    }
    return xa(e, t, n);
  }
  function V0(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Qt = !0;
      else {
        if (!fd(e, n) && (t.flags & 128) === 0) return ((Qt = !1), Dx(e, t, n));
        Qt = (e.flags & 131072) !== 0;
      }
    else ((Qt = !1), Ze && (t.flags & 1048576) !== 0 && Sp(t, xs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (((e = ji(t.elementType)), (t.type = e), typeof e == "function"))
            gf(e)
              ? ((i = qi(e, i)), (t.tag = 1), (t = q0(null, t, e, i, n)))
              : ((t.tag = 0), (t = ad(null, t, e, i, n)));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === U) {
                ((t.tag = 11), (t = O0(null, t, e, i, n)));
                break e;
              } else if (o === R) {
                ((t.tag = 14), (t = D0(null, t, e, i, n)));
                break e;
              }
            }
            throw ((t = ge(e) || e), Error(a(306, t, "")));
          }
        }
        return t;
      case 0:
        return ad(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((i = t.type), (o = qi(i, t.pendingProps)), q0(e, t, i, o, n));
      case 3:
        e: {
          if ((Ne(t, t.stateNode.containerInfo), e === null))
            throw Error(a(387));
          i = t.pendingProps;
          var f = t.memoizedState;
          ((o = f.element), Rf(e, t), zs(t, i, null, n));
          var g = t.memoizedState;
          if (
            ((i = g.cache),
            Xa(t, Xt, i),
            i !== f.cache && Cf(t, [Xt], n, !0),
            Es(),
            (i = g.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: i, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = L0(e, t, i, n);
              break e;
            } else if (i !== o) {
              ((o = Cl(Error(a(424)), t)), bs(o), (t = L0(e, t, i, n)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  ht = Nl(e.firstChild),
                  sn = t,
                  Ze = !0,
                  Ya = null,
                  zl = !0,
                  n = jp(t, null, i, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Ri(), i === o)) {
              t = xa(e, t, n);
              break e;
            }
            cn(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          xc(e, t),
          e === null
            ? (n = t1(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ze ||
                ((n = t.type),
                (e = t.pendingProps),
                (i = Hc(fe.current).createElement(n)),
                (i[Re] = t),
                (i[De] = e),
                un(i, n, e),
                He(i),
                (t.stateNode = i))
            : (t.memoizedState = t1(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Qe(t),
          e === null &&
            Ze &&
            ((i = t.stateNode = $g(t.type, t.pendingProps, fe.current)),
            (sn = t),
            (zl = !0),
            (o = ht),
            ni(t.type) ? ((Vd = o), (ht = Nl(i.firstChild))) : (ht = o)),
          cn(e, t, t.pendingProps.children, n),
          xc(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ze &&
            ((o = i = ht) &&
              ((i = cb(i, t.type, t.pendingProps, zl)),
              i !== null
                ? ((t.stateNode = i),
                  (sn = t),
                  (ht = Nl(i.firstChild)),
                  (zl = !1),
                  (o = !0))
                : (o = !1)),
            o || Ga(t)),
          Qe(t),
          (o = t.type),
          (f = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (i = f.children),
          qd(o, f) ? (i = null) : g !== null && qd(o, g) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((o = Bf(e, t, Ax, null, null, n)), (Fs._currentValue = o)),
          xc(e, t),
          cn(e, t, i, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ze &&
            ((e = n = ht) &&
              ((n = ub(n, t.pendingProps, zl)),
              n !== null
                ? ((t.stateNode = n), (sn = t), (ht = null), (e = !0))
                : (e = !1)),
            e || Ga(t)),
          null
        );
      case 13:
        return Y0(e, t, n);
      case 4:
        return (
          Ne(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = Hi(t, null, i, n)) : cn(e, t, i, n),
          t.child
        );
      case 11:
        return O0(e, t, t.type, t.pendingProps, n);
      case 7:
        return (cn(e, t, t.pendingProps, n), t.child);
      case 8:
        return (cn(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (cn(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (i = t.pendingProps),
          Xa(t, t.type, i.value),
          cn(e, t, i.children, n),
          t.child
        );
      case 9:
        return (
          (o = t.type._context),
          (i = t.pendingProps.children),
          Di(t),
          (o = on(o)),
          (i = i(o)),
          (t.flags |= 1),
          cn(e, t, i, n),
          t.child
        );
      case 14:
        return D0(e, t, t.type, t.pendingProps, n);
      case 15:
        return k0(e, t, t.type, t.pendingProps, n);
      case 19:
        return X0(e, t, n);
      case 31:
        return Ox(e, t, n);
      case 22:
        return j0(e, t, n, t.pendingProps);
      case 24:
        return (
          Di(t),
          (i = on(Xt)),
          e === null
            ? ((o = zf()),
              o === null &&
                ((o = rt),
                (f = wf()),
                (o.pooledCache = f),
                f.refCount++,
                f !== null && (o.pooledCacheLanes |= n),
                (o = f)),
              (t.memoizedState = { parent: i, cache: o }),
              Nf(t),
              Xa(t, Xt, o))
            : ((e.lanes & n) !== 0 && (Rf(e, t), zs(t, null, null, n), Es()),
              (o = e.memoizedState),
              (f = t.memoizedState),
              o.parent !== i
                ? ((o = { parent: i, cache: i }),
                  (t.memoizedState = o),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = o),
                  Xa(t, Xt, i))
                : ((i = f.cache),
                  Xa(t, Xt, i),
                  i !== o.cache && Cf(t, [Xt], n, !0))),
          cn(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(a(156, t.tag));
  }
  function ba(e) {
    e.flags |= 4;
  }
  function dd(e, t, n, i, o) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (o & 335544128) === o))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (yg()) e.flags |= 8192;
        else throw ((Ui = ic), Mf);
    } else e.flags &= -16777217;
  }
  function Q0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !r1(t)))
      if (yg()) e.flags |= 8192;
      else throw ((Ui = ic), Mf);
  }
  function Sc(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Ha() : 536870912), (e.lanes |= t), (Or |= t)));
  }
  function ks(e, t) {
    if (!Ze)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function mt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      i = 0;
    if (t)
      for (var o = e.child; o !== null; )
        ((n |= o.lanes | o.childLanes),
          (i |= o.subtreeFlags & 65011712),
          (i |= o.flags & 65011712),
          (o.return = e),
          (o = o.sibling));
    else
      for (o = e.child; o !== null; )
        ((n |= o.lanes | o.childLanes),
          (i |= o.subtreeFlags),
          (i |= o.flags),
          (o.return = e),
          (o = o.sibling));
    return ((e.subtreeFlags |= i), (e.childLanes = n), t);
  }
  function kx(e, t, n) {
    var i = t.pendingProps;
    switch ((xf(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (mt(t), null);
      case 1:
        return (mt(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          ya(Xt),
          Se(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (_r(t)
              ? ba(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Sf())),
          mt(t),
          null
        );
      case 26:
        var o = t.type,
          f = t.memoizedState;
        return (
          e === null
            ? (ba(t),
              f !== null ? (mt(t), Q0(t, f)) : (mt(t), dd(t, o, null, i, n)))
            : f
              ? f !== e.memoizedState
                ? (ba(t), mt(t), Q0(t, f))
                : (mt(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== i && ba(t),
                mt(t),
                dd(t, o, e, i, n)),
          null
        );
      case 27:
        if (
          (pt(t),
          (n = fe.current),
          (o = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== i && ba(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(a(166));
            return (mt(t), null);
          }
          ((e = te.current),
            _r(t) ? Ap(t) : ((e = $g(o, i, n)), (t.stateNode = e), ba(t)));
        }
        return (mt(t), null);
      case 5:
        if ((pt(t), (o = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== i && ba(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(a(166));
            return (mt(t), null);
          }
          if (((f = te.current), _r(t))) Ap(t);
          else {
            var g = Hc(fe.current);
            switch (f) {
              case 1:
                f = g.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                f = g.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    f = g.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    f = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o,
                    );
                    break;
                  case "script":
                    ((f = g.createElement("div")),
                      (f.innerHTML = "<script><\/script>"),
                      (f = f.removeChild(f.firstChild)));
                    break;
                  case "select":
                    ((f =
                      typeof i.is == "string"
                        ? g.createElement("select", { is: i.is })
                        : g.createElement("select")),
                      i.multiple
                        ? (f.multiple = !0)
                        : i.size && (f.size = i.size));
                    break;
                  default:
                    f =
                      typeof i.is == "string"
                        ? g.createElement(o, { is: i.is })
                        : g.createElement(o);
                }
            }
            ((f[Re] = t), (f[De] = i));
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6) f.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                ((g.child.return = g), (g = g.child));
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t) break e;
                g = g.return;
              }
              ((g.sibling.return = g.return), (g = g.sibling));
            }
            t.stateNode = f;
            e: switch ((un(f, o, i), o)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && ba(t);
          }
        }
        return (
          mt(t),
          dd(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== i && ba(t);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(a(166));
          if (((e = fe.current), _r(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (i = null),
              (o = sn),
              o !== null)
            )
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            ((e[Re] = t),
              (e = !!(
                e.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Yg(e.nodeValue, n)
              )),
              e || Ga(t, !0));
          } else
            ((e = Hc(e).createTextNode(i)), (e[Re] = t), (t.stateNode = e));
        }
        return (mt(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((i = _r(t)), n !== null)) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(a(557));
              e[Re] = t;
            } else
              (Ri(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (mt(t), (e = !1));
          } else
            ((n = Sf()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (el(t), t) : (el(t), null);
          if ((t.flags & 128) !== 0) throw Error(a(558));
        }
        return (mt(t), null);
      case 13:
        if (
          ((i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((o = _r(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(a(317));
              o[Re] = t;
            } else
              (Ri(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (mt(t), (o = !1));
          } else
            ((o = Sf()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = o),
              (o = !0));
          if (!o) return t.flags & 256 ? (el(t), t) : (el(t), null);
        }
        return (
          el(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = i !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((i = t.child),
                (o = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (o = i.alternate.memoizedState.cachePool.pool),
                (f = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (f = i.memoizedState.cachePool.pool),
                f !== o && (i.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Sc(t, t.updateQueue),
              mt(t),
              null)
        );
      case 4:
        return (Se(), e === null && kd(t.stateNode.containerInfo), mt(t), null);
      case 10:
        return (ya(t.type), mt(t), null);
      case 19:
        if ((Z(jt), (i = t.memoizedState), i === null)) return (mt(t), null);
        if (((o = (t.flags & 128) !== 0), (f = i.rendering), f === null))
          if (o) ks(i, !1);
          else {
            if (Rt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = cc(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      ks(i, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      Sc(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (_p(n, e), (n = n.sibling));
                  return (
                    ee(jt, (jt.current & 1) | 2),
                    Ze && pa(t, i.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Dt() > Ec &&
              ((t.flags |= 128), (o = !0), ks(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = cc(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Sc(t, e),
                ks(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !f.alternate &&
                  !Ze)
              )
                return (mt(t), null);
            } else
              2 * Dt() - i.renderingStartTime > Ec &&
                n !== 536870912 &&
                ((t.flags |= 128), (o = !0), ks(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = i.last),
              e !== null ? (e.sibling = f) : (t.child = f),
              (i.last = f));
        }
        return i.tail !== null
          ? ((e = i.tail),
            (i.rendering = e),
            (i.tail = e.sibling),
            (i.renderingStartTime = Dt()),
            (e.sibling = null),
            (n = jt.current),
            ee(jt, o ? (n & 1) | 2 : n & 1),
            Ze && pa(t, i.treeForkCount),
            e)
          : (mt(t), null);
      case 22:
      case 23:
        return (
          el(t),
          jf(),
          (i = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== i && (t.flags |= 8192)
            : i && (t.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (mt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : mt(t),
          (n = t.updateQueue),
          n !== null && Sc(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
          i !== n && (t.flags |= 2048),
          e !== null && Z(ki),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          ya(Xt),
          mt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function jx(e, t) {
    switch ((xf(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ya(Xt),
          Se(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (pt(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((el(t), t.alternate === null)) throw Error(a(340));
          Ri();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (el(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          Ri();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Z(jt), null);
      case 4:
        return (Se(), null);
      case 10:
        return (ya(t.type), null);
      case 22:
      case 23:
        return (
          el(t),
          jf(),
          e !== null && Z(ki),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (ya(Xt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Z0(e, t) {
    switch ((xf(t), t.tag)) {
      case 3:
        (ya(Xt), Se());
        break;
      case 26:
      case 27:
      case 5:
        pt(t);
        break;
      case 4:
        Se();
        break;
      case 31:
        t.memoizedState !== null && el(t);
        break;
      case 13:
        el(t);
        break;
      case 19:
        Z(jt);
        break;
      case 10:
        ya(t.type);
        break;
      case 22:
      case 23:
        (el(t), jf(), e !== null && Z(ki));
        break;
      case 24:
        ya(Xt);
    }
  }
  function js(e, t) {
    try {
      var n = t.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            i = void 0;
            var f = n.create,
              g = n.inst;
            ((i = f()), (g.destroy = i));
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (v) {
      nt(t, t.return, v);
    }
  }
  function Ja(e, t, n) {
    try {
      var i = t.updateQueue,
        o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        i = f;
        do {
          if ((i.tag & e) === e) {
            var g = i.inst,
              v = g.destroy;
            if (v !== void 0) {
              ((g.destroy = void 0), (o = t));
              var C = n,
                B = v;
              try {
                B();
              } catch (P) {
                nt(o, C, P);
              }
            }
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (P) {
      nt(t, t.return, P);
    }
  }
  function K0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Hp(t, n);
      } catch (i) {
        nt(e, e.return, i);
      }
    }
  }
  function F0(e, t, n) {
    ((n.props = qi(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (i) {
      nt(e, t, i);
    }
  }
  function Us(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(i)) : (n.current = i);
      }
    } catch (o) {
      nt(e, t, o);
    }
  }
  function ea(e, t) {
    var n = e.ref,
      i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          nt(e, t, o);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          nt(e, t, o);
        }
      else n.current = null;
  }
  function J0(e) {
    var t = e.type,
      n = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break e;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (o) {
      nt(e, e.return, o);
    }
  }
  function hd(e, t, n) {
    try {
      var i = e.stateNode;
      (lb(i, e.type, n, t), (i[De] = t));
    } catch (o) {
      nt(e, e.return, o);
    }
  }
  function P0(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ni(e.type)) ||
      e.tag === 4
    );
  }
  function md(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || P0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && ni(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function pd(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = da)));
    else if (
      i !== 4 &&
      (i === 27 && ni(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (pd(e, t, n), e = e.sibling; e !== null; )
        (pd(e, t, n), (e = e.sibling));
  }
  function Tc(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      i !== 4 &&
      (i === 27 && ni(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Tc(e, t, n), e = e.sibling; e !== null; )
        (Tc(e, t, n), (e = e.sibling));
  }
  function W0(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      (un(t, i, n), (t[Re] = e), (t[De] = n));
    } catch (f) {
      nt(e, e.return, f);
    }
  }
  var Sa = !1,
    Zt = !1,
    gd = !1,
    $0 = typeof WeakSet == "function" ? WeakSet : Set,
    tn = null;
  function Ux(e, t) {
    if (((e = e.containerInfo), (Hd = Vc), (e = up(e)), cf(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var o = i.anchorOffset,
              f = i.focusNode;
            i = i.focusOffset;
            try {
              (n.nodeType, f.nodeType);
            } catch {
              n = null;
              break e;
            }
            var g = 0,
              v = -1,
              C = -1,
              B = 0,
              P = 0,
              $ = e,
              L = null;
            t: for (;;) {
              for (
                var X;
                $ !== n || (o !== 0 && $.nodeType !== 3) || (v = g + o),
                  $ !== f || (i !== 0 && $.nodeType !== 3) || (C = g + i),
                  $.nodeType === 3 && (g += $.nodeValue.length),
                  (X = $.firstChild) !== null;
              )
                ((L = $), ($ = X));
              for (;;) {
                if ($ === e) break t;
                if (
                  (L === n && ++B === o && (v = g),
                  L === f && ++P === i && (C = g),
                  (X = $.nextSibling) !== null)
                )
                  break;
                (($ = L), (L = $.parentNode));
              }
              $ = X;
            }
            n = v === -1 || C === -1 ? null : { start: v, end: C };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Bd = { focusedElem: e, selectionRange: n }, Vc = !1, tn = t;
      tn !== null;
    )
      if (
        ((t = tn), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (tn = e));
      else
        for (; tn !== null; ) {
          switch (((t = tn), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((o = e[n]), (o.ref.impl = o.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                ((e = void 0),
                  (n = t),
                  (o = f.memoizedProps),
                  (f = f.memoizedState),
                  (i = n.stateNode));
                try {
                  var se = qi(n.type, o);
                  ((e = i.getSnapshotBeforeUpdate(se, f)),
                    (i.__reactInternalSnapshotBeforeUpdate = e));
                } catch (xe) {
                  nt(n, n.return, xe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Yd(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Yd(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(a(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (tn = e));
            break;
          }
          tn = t.return;
        }
  }
  function I0(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Aa(e, n), i & 4 && js(5, n));
        break;
      case 1:
        if ((Aa(e, n), i & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (g) {
              nt(n, n.return, g);
            }
          else {
            var o = qi(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              nt(n, n.return, g);
            }
          }
        (i & 64 && K0(n), i & 512 && Us(n, n.return));
        break;
      case 3:
        if ((Aa(e, n), i & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Hp(e, t);
          } catch (g) {
            nt(n, n.return, g);
          }
        }
        break;
      case 27:
        t === null && i & 4 && W0(n);
      case 26:
      case 5:
        (Aa(e, n), t === null && i & 4 && J0(n), i & 512 && Us(n, n.return));
        break;
      case 12:
        Aa(e, n);
        break;
      case 31:
        (Aa(e, n), i & 4 && ng(e, n));
        break;
      case 13:
        (Aa(e, n),
          i & 4 && lg(e, n),
          i & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Qx.bind(null, n)), fb(e, n)))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || Sa), !i)) {
          ((t = (t !== null && t.memoizedState !== null) || Zt), (o = Sa));
          var f = Zt;
          ((Sa = i),
            (Zt = t) && !f ? Ca(e, n, (n.subtreeFlags & 8772) !== 0) : Aa(e, n),
            (Sa = o),
            (Zt = f));
        }
        break;
      case 30:
        break;
      default:
        Aa(e, n);
    }
  }
  function eg(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), eg(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && kt(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var _t = null,
    Hn = !1;
  function Ta(e, t, n) {
    for (n = n.child; n !== null; ) (tg(e, t, n), (n = n.sibling));
  }
  function tg(e, t, n) {
    if (bt && typeof bt.onCommitFiberUnmount == "function")
      try {
        bt.onCommitFiberUnmount(Kl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Zt || ea(n, t),
          Ta(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Zt || ea(n, t);
        var i = _t,
          o = Hn;
        (ni(n.type) && ((_t = n.stateNode), (Hn = !1)),
          Ta(e, t, n),
          Qs(n.stateNode),
          (_t = i),
          (Hn = o));
        break;
      case 5:
        Zt || ea(n, t);
      case 6:
        if (
          ((i = _t),
          (o = Hn),
          (_t = null),
          Ta(e, t, n),
          (_t = i),
          (Hn = o),
          _t !== null)
        )
          if (Hn)
            try {
              (_t.nodeType === 9
                ? _t.body
                : _t.nodeName === "HTML"
                  ? _t.ownerDocument.body
                  : _t
              ).removeChild(n.stateNode);
            } catch (f) {
              nt(n, t, f);
            }
          else
            try {
              _t.removeChild(n.stateNode);
            } catch (f) {
              nt(n, t, f);
            }
        break;
      case 18:
        _t !== null &&
          (Hn
            ? ((e = _t),
              Kg(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              Lr(e))
            : Kg(_t, n.stateNode));
        break;
      case 4:
        ((i = _t),
          (o = Hn),
          (_t = n.stateNode.containerInfo),
          (Hn = !0),
          Ta(e, t, n),
          (_t = i),
          (Hn = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ja(2, n, t), Zt || Ja(4, n, t), Ta(e, t, n));
        break;
      case 1:
        (Zt ||
          (ea(n, t),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && F0(n, t, i)),
          Ta(e, t, n));
        break;
      case 21:
        Ta(e, t, n);
        break;
      case 22:
        ((Zt = (i = Zt) || n.memoizedState !== null), Ta(e, t, n), (Zt = i));
        break;
      default:
        Ta(e, t, n);
    }
  }
  function ng(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Lr(e);
      } catch (n) {
        nt(t, t.return, n);
      }
    }
  }
  function lg(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Lr(e);
      } catch (n) {
        nt(t, t.return, n);
      }
  }
  function Hx(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new $0()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new $0()),
          t
        );
      default:
        throw Error(a(435, e.tag));
    }
  }
  function Ac(e, t) {
    var n = Hx(e);
    t.forEach(function (i) {
      if (!n.has(i)) {
        n.add(i);
        var o = Zx.bind(null, e, i);
        i.then(o, o);
      }
    });
  }
  function Bn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i],
          f = e,
          g = t,
          v = g;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (ni(v.type)) {
                ((_t = v.stateNode), (Hn = !1));
                break e;
              }
              break;
            case 5:
              ((_t = v.stateNode), (Hn = !1));
              break e;
            case 3:
            case 4:
              ((_t = v.stateNode.containerInfo), (Hn = !0));
              break e;
          }
          v = v.return;
        }
        if (_t === null) throw Error(a(160));
        (tg(f, g, o),
          (_t = null),
          (Hn = !1),
          (f = o.alternate),
          f !== null && (f.return = null),
          (o.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (ag(t, e), (t = t.sibling));
  }
  var Gl = null;
  function ag(e, t) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Bn(t, e),
          qn(e),
          i & 4 && (Ja(3, e, e.return), js(3, e), Ja(5, e, e.return)));
        break;
      case 1:
        (Bn(t, e),
          qn(e),
          i & 512 && (Zt || n === null || ea(n, n.return)),
          i & 64 &&
            Sa &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? i : n.concat(i))))));
        break;
      case 26:
        var o = Gl;
        if (
          (Bn(t, e),
          qn(e),
          i & 512 && (Zt || n === null || ea(n, n.return)),
          i & 4)
        ) {
          var f = n !== null ? n.memoizedState : null;
          if (((i = e.memoizedState), n === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  ((i = e.type),
                    (n = e.memoizedProps),
                    (o = o.ownerDocument || o));
                  t: switch (i) {
                    case "title":
                      ((f = o.getElementsByTagName("title")[0]),
                        (!f ||
                          f[St] ||
                          f[Re] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = o.createElement(i)),
                          o.head.insertBefore(
                            f,
                            o.querySelector("head > title"),
                          )),
                        un(f, i, n),
                        (f[Re] = e),
                        He(f),
                        (i = f));
                      break e;
                    case "link":
                      var g = a1("link", "href", o).get(i + (n.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (
                            ((f = g[v]),
                            f.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              f.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              f.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              f.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      ((f = o.createElement(i)),
                        un(f, i, n),
                        o.head.appendChild(f));
                      break;
                    case "meta":
                      if (
                        (g = a1("meta", "content", o).get(
                          i + (n.content || ""),
                        ))
                      ) {
                        for (v = 0; v < g.length; v++)
                          if (
                            ((f = g[v]),
                            f.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              f.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              f.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              f.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      ((f = o.createElement(i)),
                        un(f, i, n),
                        o.head.appendChild(f));
                      break;
                    default:
                      throw Error(a(468, i));
                  }
                  ((f[Re] = e), He(f), (i = f));
                }
                e.stateNode = i;
              } else i1(o, e.type, e.stateNode);
            else e.stateNode = l1(o, i, e.memoizedProps);
          else
            f !== i
              ? (f === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : f.count--,
                i === null
                  ? i1(o, e.type, e.stateNode)
                  : l1(o, i, e.memoizedProps))
              : i === null &&
                e.stateNode !== null &&
                hd(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Bn(t, e),
          qn(e),
          i & 512 && (Zt || n === null || ea(n, n.return)),
          n !== null && i & 4 && hd(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Bn(t, e),
          qn(e),
          i & 512 && (Zt || n === null || ea(n, n.return)),
          e.flags & 32)
        ) {
          o = e.stateNode;
          try {
            cr(o, "");
          } catch (se) {
            nt(e, e.return, se);
          }
        }
        (i & 4 &&
          e.stateNode != null &&
          ((o = e.memoizedProps), hd(e, o, n !== null ? n.memoizedProps : o)),
          i & 1024 && (gd = !0));
        break;
      case 6:
        if ((Bn(t, e), qn(e), i & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          ((i = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = i;
          } catch (se) {
            nt(e, e.return, se);
          }
        }
        break;
      case 3:
        if (
          ((Lc = null),
          (o = Gl),
          (Gl = Bc(t.containerInfo)),
          Bn(t, e),
          (Gl = o),
          qn(e),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Lr(t.containerInfo);
          } catch (se) {
            nt(e, e.return, se);
          }
        gd && ((gd = !1), ig(e));
        break;
      case 4:
        ((i = Gl),
          (Gl = Bc(e.stateNode.containerInfo)),
          Bn(t, e),
          qn(e),
          (Gl = i));
        break;
      case 12:
        (Bn(t, e), qn(e));
        break;
      case 31:
        (Bn(t, e),
          qn(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Ac(e, i))));
        break;
      case 13:
        (Bn(t, e),
          qn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (wc = Dt()),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Ac(e, i))));
        break;
      case 22:
        o = e.memoizedState !== null;
        var C = n !== null && n.memoizedState !== null,
          B = Sa,
          P = Zt;
        if (
          ((Sa = B || o),
          (Zt = P || C),
          Bn(t, e),
          (Zt = P),
          (Sa = B),
          qn(e),
          i & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = o ? t._visibility & -2 : t._visibility | 1,
              o && (n === null || C || Sa || Zt || Li(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                C = n = t;
                try {
                  if (((f = C.stateNode), o))
                    ((g = f.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none"));
                  else {
                    v = C.stateNode;
                    var $ = C.memoizedProps.style,
                      L =
                        $ != null && $.hasOwnProperty("display")
                          ? $.display
                          : null;
                    v.style.display =
                      L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (se) {
                  nt(C, C.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                C = t;
                try {
                  C.stateNode.nodeValue = o ? "" : C.memoizedProps;
                } catch (se) {
                  nt(C, C.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                C = t;
                try {
                  var X = C.stateNode;
                  o ? Fg(X, !0) : Fg(C.stateNode, !1);
                } catch (se) {
                  nt(C, C.return, se);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        i & 4 &&
          ((i = e.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), Ac(e, n))));
        break;
      case 19:
        (Bn(t, e),
          qn(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Ac(e, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Bn(t, e), qn(e));
    }
  }
  function qn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, i = e.return; i !== null; ) {
          if (P0(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(a(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode,
              f = md(e);
            Tc(e, f, o);
            break;
          case 5:
            var g = n.stateNode;
            n.flags & 32 && (cr(g, ""), (n.flags &= -33));
            var v = md(e);
            Tc(e, v, g);
            break;
          case 3:
          case 4:
            var C = n.stateNode.containerInfo,
              B = md(e);
            pd(e, B, C);
            break;
          default:
            throw Error(a(161));
        }
      } catch (P) {
        nt(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ig(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (ig(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Aa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (I0(e, t.alternate, t), (t = t.sibling));
  }
  function Li(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ja(4, t, t.return), Li(t));
          break;
        case 1:
          ea(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && F0(t, t.return, n),
            Li(t));
          break;
        case 27:
          Qs(t.stateNode);
        case 26:
        case 5:
          (ea(t, t.return), Li(t));
          break;
        case 22:
          t.memoizedState === null && Li(t);
          break;
        case 30:
          Li(t);
          break;
        default:
          Li(t);
      }
      e = e.sibling;
    }
  }
  function Ca(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate,
        o = e,
        f = t,
        g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Ca(o, f, n), js(4, f));
          break;
        case 1:
          if (
            (Ca(o, f, n),
            (i = f),
            (o = i.stateNode),
            typeof o.componentDidMount == "function")
          )
            try {
              o.componentDidMount();
            } catch (B) {
              nt(i, i.return, B);
            }
          if (((i = f), (o = i.updateQueue), o !== null)) {
            var v = i.stateNode;
            try {
              var C = o.shared.hiddenCallbacks;
              if (C !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < C.length; o++)
                  Up(C[o], v);
            } catch (B) {
              nt(i, i.return, B);
            }
          }
          (n && g & 64 && K0(f), Us(f, f.return));
          break;
        case 27:
          W0(f);
        case 26:
        case 5:
          (Ca(o, f, n), n && i === null && g & 4 && J0(f), Us(f, f.return));
          break;
        case 12:
          Ca(o, f, n);
          break;
        case 31:
          (Ca(o, f, n), n && g & 4 && ng(o, f));
          break;
        case 13:
          (Ca(o, f, n), n && g & 4 && lg(o, f));
          break;
        case 22:
          (f.memoizedState === null && Ca(o, f, n), Us(f, f.return));
          break;
        case 30:
          break;
        default:
          Ca(o, f, n);
      }
      t = t.sibling;
    }
  }
  function yd(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Ss(n)));
  }
  function vd(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ss(e)));
  }
  function Xl(e, t, n, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (rg(e, t, n, i), (t = t.sibling));
  }
  function rg(e, t, n, i) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Xl(e, t, n, i), o & 2048 && js(9, t));
        break;
      case 1:
        Xl(e, t, n, i);
        break;
      case 3:
        (Xl(e, t, n, i),
          o & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ss(e))));
        break;
      case 12:
        if (o & 2048) {
          (Xl(e, t, n, i), (e = t.stateNode));
          try {
            var f = t.memoizedProps,
              g = f.id,
              v = f.onPostCommit;
            typeof v == "function" &&
              v(
                g,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (C) {
            nt(t, t.return, C);
          }
        } else Xl(e, t, n, i);
        break;
      case 31:
        Xl(e, t, n, i);
        break;
      case 13:
        Xl(e, t, n, i);
        break;
      case 23:
        break;
      case 22:
        ((f = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? Xl(e, t, n, i)
              : Hs(e, t)
            : f._visibility & 2
              ? Xl(e, t, n, i)
              : ((f._visibility |= 2),
                Mr(e, t, n, i, (t.subtreeFlags & 10256) !== 0 || !1)),
          o & 2048 && yd(g, t));
        break;
      case 24:
        (Xl(e, t, n, i), o & 2048 && vd(t.alternate, t));
        break;
      default:
        Xl(e, t, n, i);
    }
  }
  function Mr(e, t, n, i, o) {
    for (
      o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var f = e,
        g = t,
        v = n,
        C = i,
        B = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          (Mr(f, g, v, C, o), js(8, g));
          break;
        case 23:
          break;
        case 22:
          var P = g.stateNode;
          (g.memoizedState !== null
            ? P._visibility & 2
              ? Mr(f, g, v, C, o)
              : Hs(f, g)
            : ((P._visibility |= 2), Mr(f, g, v, C, o)),
            o && B & 2048 && yd(g.alternate, g));
          break;
        case 24:
          (Mr(f, g, v, C, o), o && B & 2048 && vd(g.alternate, g));
          break;
        default:
          Mr(f, g, v, C, o);
      }
      t = t.sibling;
    }
  }
  function Hs(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          i = t,
          o = i.flags;
        switch (i.tag) {
          case 22:
            (Hs(n, i), o & 2048 && yd(i.alternate, i));
            break;
          case 24:
            (Hs(n, i), o & 2048 && vd(i.alternate, i));
            break;
          default:
            Hs(n, i);
        }
        t = t.sibling;
      }
  }
  var Bs = 8192;
  function Nr(e, t, n) {
    if (e.subtreeFlags & Bs)
      for (e = e.child; e !== null; ) (sg(e, t, n), (e = e.sibling));
  }
  function sg(e, t, n) {
    switch (e.tag) {
      case 26:
        (Nr(e, t, n),
          e.flags & Bs &&
            e.memoizedState !== null &&
            Tb(n, Gl, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Nr(e, t, n);
        break;
      case 3:
      case 4:
        var i = Gl;
        ((Gl = Bc(e.stateNode.containerInfo)), Nr(e, t, n), (Gl = i));
        break;
      case 22:
        e.memoizedState === null &&
          ((i = e.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = Bs), (Bs = 16777216), Nr(e, t, n), (Bs = i))
            : Nr(e, t, n));
        break;
      default:
        Nr(e, t, n);
    }
  }
  function og(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function qs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((tn = i), ug(i, e));
        }
      og(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (cg(e), (e = e.sibling));
  }
  function cg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (qs(e), e.flags & 2048 && Ja(9, e, e.return));
        break;
      case 3:
        qs(e);
        break;
      case 12:
        qs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Cc(e))
          : qs(e);
        break;
      default:
        qs(e);
    }
  }
  function Cc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((tn = i), ug(i, e));
        }
      og(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Ja(8, t, t.return), Cc(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Cc(t)));
          break;
        default:
          Cc(t);
      }
      e = e.sibling;
    }
  }
  function ug(e, t) {
    for (; tn !== null; ) {
      var n = tn;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ja(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Ss(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) ((i.return = n), (tn = i));
      else
        e: for (n = e; tn !== null; ) {
          i = tn;
          var o = i.sibling,
            f = i.return;
          if ((eg(i), i === n)) {
            tn = null;
            break e;
          }
          if (o !== null) {
            ((o.return = f), (tn = o));
            break e;
          }
          tn = f;
        }
    }
  }
  var Bx = {
      getCacheForType: function (e) {
        var t = on(Xt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return on(Xt).controller.signal;
      },
    },
    qx = typeof WeakMap == "function" ? WeakMap : Map,
    $e = 0,
    rt = null,
    Le = null,
    Xe = 0,
    tt = 0,
    tl = null,
    Pa = !1,
    Rr = !1,
    _d = !1,
    wa = 0,
    Rt = 0,
    Wa = 0,
    Yi = 0,
    xd = 0,
    nl = 0,
    Or = 0,
    Ls = null,
    Ln = null,
    bd = !1,
    wc = 0,
    fg = 0,
    Ec = 1 / 0,
    zc = null,
    $a = null,
    Pt = 0,
    Ia = null,
    Dr = null,
    Ea = 0,
    Sd = 0,
    Td = null,
    dg = null,
    Ys = 0,
    Ad = null;
  function ll() {
    return ($e & 2) !== 0 && Xe !== 0 ? Xe & -Xe : O.T !== null ? Nd() : Ue();
  }
  function hg() {
    if (nl === 0)
      if ((Xe & 536870912) === 0 || Ze) {
        var e = pn;
        ((pn <<= 1), (pn & 3932160) === 0 && (pn = 262144), (nl = e));
      } else nl = 536870912;
    return ((e = In.current), e !== null && (e.flags |= 32), nl);
  }
  function Yn(e, t, n) {
    (((e === rt && (tt === 2 || tt === 9)) || e.cancelPendingCommit !== null) &&
      (kr(e, 0), ei(e, Xe, nl, !1)),
      ye(e, n),
      (($e & 2) === 0 || e !== rt) &&
        (e === rt &&
          (($e & 2) === 0 && (Yi |= n), Rt === 4 && ei(e, Xe, nl, !1)),
        ta(e)));
  }
  function mg(e, t, n) {
    if (($e & 6) !== 0) throw Error(a(327));
    var i = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || _l(e, t),
      o = i ? Gx(e, t) : wd(e, t, !0),
      f = i;
    do {
      if (o === 0) {
        Rr && !i && ei(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), f && !Lx(n))) {
          ((o = wd(e, t, !1)), (f = !1));
          continue;
        }
        if (o === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var g = 0;
          else
            ((g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0));
          if (g !== 0) {
            t = g;
            e: {
              var v = e;
              o = Ls;
              var C = v.current.memoizedState.isDehydrated;
              if ((C && (kr(v, g).flags |= 256), (g = wd(v, g, !1)), g !== 2)) {
                if (_d && !C) {
                  ((v.errorRecoveryDisabledLanes |= f), (Yi |= f), (o = 4));
                  break e;
                }
                ((f = Ln),
                  (Ln = o),
                  f !== null &&
                    (Ln === null ? (Ln = f) : Ln.push.apply(Ln, f)));
              }
              o = g;
            }
            if (((f = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          (kr(e, 0), ei(e, t, 0, !0));
          break;
        }
        e: {
          switch (((i = e), (f = o), f)) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ei(i, t, nl, !Pa);
              break e;
            case 2:
              Ln = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((t & 62914560) === t && ((o = wc + 300 - Dt()), 10 < o)) {
            if ((ei(i, t, nl, !Pa), vl(i, 0, !0) !== 0)) break e;
            ((Ea = t),
              (i.timeoutHandle = Qg(
                pg.bind(
                  null,
                  i,
                  n,
                  Ln,
                  zc,
                  bd,
                  t,
                  nl,
                  Yi,
                  Or,
                  Pa,
                  f,
                  "Throttled",
                  -0,
                  0,
                ),
                o,
              )));
            break e;
          }
          pg(i, n, Ln, zc, bd, t, nl, Yi, Or, Pa, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ta(e);
  }
  function pg(e, t, n, i, o, f, g, v, C, B, P, $, L, X) {
    if (
      ((e.timeoutHandle = -1),
      ($ = t.subtreeFlags),
      $ & 8192 || ($ & 16785408) === 16785408)
    ) {
      (($ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: da,
      }),
        sg(t, f, $));
      var se =
        (f & 62914560) === f ? wc - Dt() : (f & 4194048) === f ? fg - Dt() : 0;
      if (((se = Ab($, se)), se !== null)) {
        ((Ea = f),
          (e.cancelPendingCommit = se(
            Tg.bind(null, e, t, f, n, i, o, g, v, C, P, $, null, L, X),
          )),
          ei(e, f, g, !B));
        return;
      }
    }
    Tg(e, t, f, n, i, o, g, v, C);
  }
  function Lx(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var o = n[i],
            f = o.getSnapshot;
          o = o.value;
          try {
            if (!Wn(f(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ei(e, t, n, i) {
    ((t &= ~xd),
      (t &= ~Yi),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      i && (e.warmLanes |= t),
      (i = e.expirationTimes));
    for (var o = t; 0 < o; ) {
      var f = 31 - Gt(o),
        g = 1 << f;
      ((i[f] = -1), (o &= ~g));
    }
    n !== 0 && ae(e, n, t);
  }
  function Mc() {
    return ($e & 6) === 0 ? (Gs(0), !1) : !0;
  }
  function Cd() {
    if (Le !== null) {
      if (tt === 0) var e = Le.return;
      else ((e = Le), (ga = Oi = null), Yf(e), (Ar = null), (As = 0), (e = Le));
      for (; e !== null; ) (Z0(e.alternate, e), (e = e.return));
      Le = null;
    }
  }
  function kr(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), rb(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Ea = 0),
      Cd(),
      (rt = e),
      (Le = n = ma(e.current, null)),
      (Xe = t),
      (tt = 0),
      (tl = null),
      (Pa = !1),
      (Rr = _l(e, t)),
      (_d = !1),
      (Or = nl = xd = Yi = Wa = Rt = 0),
      (Ln = Ls = null),
      (bd = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - Gt(i),
          f = 1 << o;
        ((t |= e[o]), (i &= ~f));
      }
    return ((wa = t), Po(), n);
  }
  function gg(e, t) {
    ((ze = null),
      (O.H = Os),
      t === Tr || t === ac
        ? ((t = Op()), (tt = 3))
        : t === Mf
          ? ((t = Op()), (tt = 4))
          : (tt =
              t === ld
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (tl = t),
      Le === null && ((Rt = 1), vc(e, Cl(t, e.current))));
  }
  function yg() {
    var e = In.current;
    return e === null
      ? !0
      : (Xe & 4194048) === Xe
        ? Ml === null
        : (Xe & 62914560) === Xe || (Xe & 536870912) !== 0
          ? e === Ml
          : !1;
  }
  function vg() {
    var e = O.H;
    return ((O.H = Os), e === null ? Os : e);
  }
  function _g() {
    var e = O.A;
    return ((O.A = Bx), e);
  }
  function Nc() {
    ((Rt = 4),
      Pa || ((Xe & 4194048) !== Xe && In.current !== null) || (Rr = !0),
      ((Wa & 134217727) === 0 && (Yi & 134217727) === 0) ||
        rt === null ||
        ei(rt, Xe, nl, !1));
  }
  function wd(e, t, n) {
    var i = $e;
    $e |= 2;
    var o = vg(),
      f = _g();
    ((rt !== e || Xe !== t) && ((zc = null), kr(e, t)), (t = !1));
    var g = Rt;
    e: do
      try {
        if (tt !== 0 && Le !== null) {
          var v = Le,
            C = tl;
          switch (tt) {
            case 8:
              (Cd(), (g = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              In.current === null && (t = !0);
              var B = tt;
              if (((tt = 0), (tl = null), jr(e, v, C, B), n && Rr)) {
                g = 0;
                break e;
              }
              break;
            default:
              ((B = tt), (tt = 0), (tl = null), jr(e, v, C, B));
          }
        }
        (Yx(), (g = Rt));
        break;
      } catch (P) {
        gg(e, P);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ga = Oi = null),
      ($e = i),
      (O.H = o),
      (O.A = f),
      Le === null && ((rt = null), (Xe = 0), Po()),
      g
    );
  }
  function Yx() {
    for (; Le !== null; ) xg(Le);
  }
  function Gx(e, t) {
    var n = $e;
    $e |= 2;
    var i = vg(),
      o = _g();
    rt !== e || Xe !== t
      ? ((zc = null), (Ec = Dt() + 500), kr(e, t))
      : (Rr = _l(e, t));
    e: do
      try {
        if (tt !== 0 && Le !== null) {
          t = Le;
          var f = tl;
          t: switch (tt) {
            case 1:
              ((tt = 0), (tl = null), jr(e, t, f, 1));
              break;
            case 2:
            case 9:
              if (Np(f)) {
                ((tt = 0), (tl = null), bg(t));
                break;
              }
              ((t = function () {
                ((tt !== 2 && tt !== 9) || rt !== e || (tt = 7), ta(e));
              }),
                f.then(t, t));
              break e;
            case 3:
              tt = 7;
              break e;
            case 4:
              tt = 5;
              break e;
            case 7:
              Np(f)
                ? ((tt = 0), (tl = null), bg(t))
                : ((tt = 0), (tl = null), jr(e, t, f, 7));
              break;
            case 5:
              var g = null;
              switch (Le.tag) {
                case 26:
                  g = Le.memoizedState;
                case 5:
                case 27:
                  var v = Le;
                  if (g ? r1(g) : v.stateNode.complete) {
                    ((tt = 0), (tl = null));
                    var C = v.sibling;
                    if (C !== null) Le = C;
                    else {
                      var B = v.return;
                      B !== null ? ((Le = B), Rc(B)) : (Le = null);
                    }
                    break t;
                  }
              }
              ((tt = 0), (tl = null), jr(e, t, f, 5));
              break;
            case 6:
              ((tt = 0), (tl = null), jr(e, t, f, 6));
              break;
            case 8:
              (Cd(), (Rt = 6));
              break e;
            default:
              throw Error(a(462));
          }
        }
        Xx();
        break;
      } catch (P) {
        gg(e, P);
      }
    while (!0);
    return (
      (ga = Oi = null),
      (O.H = i),
      (O.A = o),
      ($e = n),
      Le !== null ? 0 : ((rt = null), (Xe = 0), Po(), Rt)
    );
  }
  function Xx() {
    for (; Le !== null && !Bl(); ) xg(Le);
  }
  function xg(e) {
    var t = V0(e.alternate, e, wa);
    ((e.memoizedProps = e.pendingProps), t === null ? Rc(e) : (Le = t));
  }
  function bg(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = B0(n, t, t.pendingProps, t.type, void 0, Xe);
        break;
      case 11:
        t = B0(n, t, t.pendingProps, t.type.render, t.ref, Xe);
        break;
      case 5:
        Yf(t);
      default:
        (Z0(n, t), (t = Le = _p(t, wa)), (t = V0(n, t, wa)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Rc(e) : (Le = t));
  }
  function jr(e, t, n, i) {
    ((ga = Oi = null), Yf(t), (Ar = null), (As = 0));
    var o = t.return;
    try {
      if (Rx(e, o, t, n, Xe)) {
        ((Rt = 1), vc(e, Cl(n, e.current)), (Le = null));
        return;
      }
    } catch (f) {
      if (o !== null) throw ((Le = o), f);
      ((Rt = 1), vc(e, Cl(n, e.current)), (Le = null));
      return;
    }
    t.flags & 32768
      ? (Ze || i === 1
          ? (e = !0)
          : Rr || (Xe & 536870912) !== 0
            ? (e = !1)
            : ((Pa = e = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = In.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        Sg(t, e))
      : Rc(t);
  }
  function Rc(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sg(t, Pa);
        return;
      }
      e = t.return;
      var n = kx(t.alternate, t, wa);
      if (n !== null) {
        Le = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    Rt === 0 && (Rt = 5);
  }
  function Sg(e, t) {
    do {
      var n = jx(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Le = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Le = e;
        return;
      }
      Le = e = n;
    } while (e !== null);
    ((Rt = 6), (Le = null));
  }
  function Tg(e, t, n, i, o, f, g, v, C) {
    e.cancelPendingCommit = null;
    do Oc();
    while (Pt !== 0);
    if (($e & 6) !== 0) throw Error(a(327));
    if (t !== null) {
      if (t === e.current) throw Error(a(177));
      if (
        ((f = t.lanes | t.childLanes),
        (f |= mf),
        Je(e, n, f, g, v, C),
        e === rt && ((Le = rt = null), (Xe = 0)),
        (Dr = t),
        (Ia = e),
        (Ea = n),
        (Sd = f),
        (Td = o),
        (dg = i),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Kx(mn, function () {
              return (zg(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (i = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = O.T), (O.T = null), (o = F.p), (F.p = 2), (g = $e), ($e |= 4));
        try {
          Ux(e, t, n);
        } finally {
          (($e = g), (F.p = o), (O.T = i));
        }
      }
      ((Pt = 1), Ag(), Cg(), wg());
    }
  }
  function Ag() {
    if (Pt === 1) {
      Pt = 0;
      var e = Ia,
        t = Dr,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var i = F.p;
        F.p = 2;
        var o = $e;
        $e |= 4;
        try {
          ag(t, e);
          var f = Bd,
            g = up(e.containerInfo),
            v = f.focusedElem,
            C = f.selectionRange;
          if (
            g !== v &&
            v &&
            v.ownerDocument &&
            cp(v.ownerDocument.documentElement, v)
          ) {
            if (C !== null && cf(v)) {
              var B = C.start,
                P = C.end;
              if ((P === void 0 && (P = B), "selectionStart" in v))
                ((v.selectionStart = B),
                  (v.selectionEnd = Math.min(P, v.value.length)));
              else {
                var $ = v.ownerDocument || document,
                  L = ($ && $.defaultView) || window;
                if (L.getSelection) {
                  var X = L.getSelection(),
                    se = v.textContent.length,
                    xe = Math.min(C.start, se),
                    it = C.end === void 0 ? xe : Math.min(C.end, se);
                  !X.extend && xe > it && ((g = it), (it = xe), (xe = g));
                  var N = op(v, xe),
                    z = op(v, it);
                  if (
                    N &&
                    z &&
                    (X.rangeCount !== 1 ||
                      X.anchorNode !== N.node ||
                      X.anchorOffset !== N.offset ||
                      X.focusNode !== z.node ||
                      X.focusOffset !== z.offset)
                  ) {
                    var H = $.createRange();
                    (H.setStart(N.node, N.offset),
                      X.removeAllRanges(),
                      xe > it
                        ? (X.addRange(H), X.extend(z.node, z.offset))
                        : (H.setEnd(z.node, z.offset), X.addRange(H)));
                  }
                }
              }
            }
            for ($ = [], X = v; (X = X.parentNode); )
              X.nodeType === 1 &&
                $.push({ element: X, left: X.scrollLeft, top: X.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < $.length;
              v++
            ) {
              var W = $[v];
              ((W.element.scrollLeft = W.left), (W.element.scrollTop = W.top));
            }
          }
          ((Vc = !!Hd), (Bd = Hd = null));
        } finally {
          (($e = o), (F.p = i), (O.T = n));
        }
      }
      ((e.current = t), (Pt = 2));
    }
  }
  function Cg() {
    if (Pt === 2) {
      Pt = 0;
      var e = Ia,
        t = Dr,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var i = F.p;
        F.p = 2;
        var o = $e;
        $e |= 4;
        try {
          I0(e, t.alternate, t);
        } finally {
          (($e = o), (F.p = i), (O.T = n));
        }
      }
      Pt = 3;
    }
  }
  function wg() {
    if (Pt === 4 || Pt === 3) {
      ((Pt = 0), Zl());
      var e = Ia,
        t = Dr,
        n = Ea,
        i = dg;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Pt = 5)
        : ((Pt = 0), (Dr = Ia = null), Eg(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (
        (o === 0 && ($a = null),
        Mt(n),
        (t = t.stateNode),
        bt && typeof bt.onCommitFiberRoot == "function")
      )
        try {
          bt.onCommitFiberRoot(Kl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((t = O.T), (o = F.p), (F.p = 2), (O.T = null));
        try {
          for (var f = e.onRecoverableError, g = 0; g < i.length; g++) {
            var v = i[g];
            f(v.value, { componentStack: v.stack });
          }
        } finally {
          ((O.T = t), (F.p = o));
        }
      }
      ((Ea & 3) !== 0 && Oc(),
        ta(e),
        (o = e.pendingLanes),
        (n & 261930) !== 0 && (o & 42) !== 0
          ? e === Ad
            ? Ys++
            : ((Ys = 0), (Ad = e))
          : (Ys = 0),
        Gs(0));
    }
  }
  function Eg(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ss(t)));
  }
  function Oc() {
    return (Ag(), Cg(), wg(), zg());
  }
  function zg() {
    if (Pt !== 5) return !1;
    var e = Ia,
      t = Sd;
    Sd = 0;
    var n = Mt(Ea),
      i = O.T,
      o = F.p;
    try {
      ((F.p = 32 > n ? 32 : n), (O.T = null), (n = Td), (Td = null));
      var f = Ia,
        g = Ea;
      if (((Pt = 0), (Dr = Ia = null), (Ea = 0), ($e & 6) !== 0))
        throw Error(a(331));
      var v = $e;
      if (
        (($e |= 4),
        cg(f.current),
        rg(f, f.current, g, n),
        ($e = v),
        Gs(0, !1),
        bt && typeof bt.onPostCommitFiberRoot == "function")
      )
        try {
          bt.onPostCommitFiberRoot(Kl, f);
        } catch {}
      return !0;
    } finally {
      ((F.p = o), (O.T = i), Eg(e, t));
    }
  }
  function Mg(e, t, n) {
    ((t = Cl(n, t)),
      (t = nd(e.stateNode, t, 2)),
      (e = Za(e, t, 2)),
      e !== null && (ye(e, 2), ta(e)));
  }
  function nt(e, t, n) {
    if (e.tag === 3) Mg(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mg(t, e, n);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              ($a === null || !$a.has(i)))
          ) {
            ((e = Cl(n, e)),
              (n = N0(2)),
              (i = Za(t, n, 2)),
              i !== null && (R0(n, i, t, e), ye(i, 2), ta(i)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ed(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new qx();
      var o = new Set();
      i.set(t, o);
    } else ((o = i.get(t)), o === void 0 && ((o = new Set()), i.set(t, o)));
    o.has(n) ||
      ((_d = !0), o.add(n), (e = Vx.bind(null, e, t, n)), t.then(e, e));
  }
  function Vx(e, t, n) {
    var i = e.pingCache;
    (i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      rt === e &&
        (Xe & n) === n &&
        (Rt === 4 || (Rt === 3 && (Xe & 62914560) === Xe && 300 > Dt() - wc)
          ? ($e & 2) === 0 && kr(e, 0)
          : (xd |= n),
        Or === Xe && (Or = 0)),
      ta(e));
  }
  function Ng(e, t) {
    (t === 0 && (t = Ha()), (e = Mi(e, t)), e !== null && (ye(e, t), ta(e)));
  }
  function Qx(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ng(e, n));
  }
  function Zx(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    (i !== null && i.delete(t), Ng(e, n));
  }
  function Kx(e, t) {
    return pl(e, t);
  }
  var Dc = null,
    Ur = null,
    zd = !1,
    kc = !1,
    Md = !1,
    ti = 0;
  function ta(e) {
    (e !== Ur &&
      e.next === null &&
      (Ur === null ? (Dc = Ur = e) : (Ur = Ur.next = e)),
      (kc = !0),
      zd || ((zd = !0), Jx()));
  }
  function Gs(e, t) {
    if (!Md && kc) {
      Md = !0;
      do
        for (var n = !1, i = Dc; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var f = 0;
            else {
              var g = i.suspendedLanes,
                v = i.pingedLanes;
              ((f = (1 << (31 - Gt(42 | e) + 1)) - 1),
                (f &= o & ~(g & ~v)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0));
            }
            f !== 0 && ((n = !0), kg(i, f));
          } else
            ((f = Xe),
              (f = vl(
                i,
                i === rt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (f & 3) === 0 || _l(i, f) || ((n = !0), kg(i, f)));
          i = i.next;
        }
      while (n);
      Md = !1;
    }
  }
  function Fx() {
    Rg();
  }
  function Rg() {
    kc = zd = !1;
    var e = 0;
    ti !== 0 && ib() && (e = ti);
    for (var t = Dt(), n = null, i = Dc; i !== null; ) {
      var o = i.next,
        f = Og(i, t);
      (f === 0
        ? ((i.next = null),
          n === null ? (Dc = o) : (n.next = o),
          o === null && (Ur = n))
        : ((n = i), (e !== 0 || (f & 3) !== 0) && (kc = !0)),
        (i = o));
    }
    ((Pt !== 0 && Pt !== 5) || Gs(e), ti !== 0 && (ti = 0));
  }
  function Og(e, t) {
    for (
      var n = e.suspendedLanes,
        i = e.pingedLanes,
        o = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;
    ) {
      var g = 31 - Gt(f),
        v = 1 << g,
        C = o[g];
      (C === -1
        ? ((v & n) === 0 || (v & i) !== 0) && (o[g] = Ll(v, t))
        : C <= t && (e.expiredLanes |= v),
        (f &= ~v));
    }
    if (
      ((t = rt),
      (n = Xe),
      (n = vl(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (i = e.callbackNode),
      n === 0 ||
        (e === t && (tt === 2 || tt === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && ct(i),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || _l(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((i !== null && ct(i), Mt(n))) {
        case 2:
        case 8:
          n = yt;
          break;
        case 32:
          n = mn;
          break;
        case 268435456:
          n = gl;
          break;
        default:
          n = mn;
      }
      return (
        (i = Dg.bind(null, e)),
        (n = pl(n, i)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      i !== null && i !== null && ct(i),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Dg(e, t) {
    if (Pt !== 0 && Pt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Oc() && e.callbackNode !== n) return null;
    var i = Xe;
    return (
      (i = vl(
        e,
        e === rt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      i === 0
        ? null
        : (mg(e, i, t),
          Og(e, Dt()),
          e.callbackNode != null && e.callbackNode === n
            ? Dg.bind(null, e)
            : null)
    );
  }
  function kg(e, t) {
    if (Oc()) return null;
    mg(e, t, !0);
  }
  function Jx() {
    sb(function () {
      ($e & 6) !== 0 ? pl(ql, Fx) : Rg();
    });
  }
  function Nd() {
    if (ti === 0) {
      var e = br;
      (e === 0 && ((e = yl), (yl <<= 1), (yl & 261888) === 0 && (yl = 256)),
        (ti = e));
    }
    return ti;
  }
  function jg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Go("" + e);
  }
  function Ug(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Px(e, t, n, i, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var f = jg((o[De] || null).action),
        g = i.submitter;
      g &&
        ((t = (t = g[De] || null)
          ? jg(t.formAction)
          : g.getAttribute("formAction")),
        t !== null && ((f = t), (g = null)));
      var v = new Zo("action", "action", null, i, o);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (ti !== 0) {
                  var C = g ? Ug(o, g) : new FormData(o);
                  Pf(
                    n,
                    { pending: !0, data: C, method: o.method, action: f },
                    null,
                    C,
                  );
                }
              } else
                typeof f == "function" &&
                  (v.preventDefault(),
                  (C = g ? Ug(o, g) : new FormData(o)),
                  Pf(
                    n,
                    { pending: !0, data: C, method: o.method, action: f },
                    f,
                    C,
                  ));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var Rd = 0; Rd < hf.length; Rd++) {
    var Od = hf[Rd],
      Wx = Od.toLowerCase(),
      $x = Od[0].toUpperCase() + Od.slice(1);
    Yl(Wx, "on" + $x);
  }
  (Yl(hp, "onAnimationEnd"),
    Yl(mp, "onAnimationIteration"),
    Yl(pp, "onAnimationStart"),
    Yl("dblclick", "onDoubleClick"),
    Yl("focusin", "onFocus"),
    Yl("focusout", "onBlur"),
    Yl(mx, "onTransitionRun"),
    Yl(px, "onTransitionStart"),
    Yl(gx, "onTransitionCancel"),
    Yl(gp, "onTransitionEnd"),
    xl("onMouseEnter", ["mouseout", "mouseover"]),
    xl("onMouseLeave", ["mouseout", "mouseover"]),
    xl("onPointerEnter", ["pointerout", "pointerover"]),
    xl("onPointerLeave", ["pointerout", "pointerover"]),
    Pl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Pl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Pl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Pl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Pl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Pl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Xs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Ix = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Xs),
    );
  function Hg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        o = i.event;
      i = i.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = i.length - 1; 0 <= g; g--) {
            var v = i[g],
              C = v.instance,
              B = v.currentTarget;
            if (((v = v.listener), C !== f && o.isPropagationStopped()))
              break e;
            ((f = v), (o.currentTarget = B));
            try {
              f(o);
            } catch (P) {
              Jo(P);
            }
            ((o.currentTarget = null), (f = C));
          }
        else
          for (g = 0; g < i.length; g++) {
            if (
              ((v = i[g]),
              (C = v.instance),
              (B = v.currentTarget),
              (v = v.listener),
              C !== f && o.isPropagationStopped())
            )
              break e;
            ((f = v), (o.currentTarget = B));
            try {
              f(o);
            } catch (P) {
              Jo(P);
            }
            ((o.currentTarget = null), (f = C));
          }
      }
    }
  }
  function Ye(e, t) {
    var n = t[An];
    n === void 0 && (n = t[An] = new Set());
    var i = e + "__bubble";
    n.has(i) || (Bg(t, e, 2, !1), n.add(i));
  }
  function Dd(e, t, n) {
    var i = 0;
    (t && (i |= 4), Bg(n, e, i, t));
  }
  var jc = "_reactListening" + Math.random().toString(36).slice(2);
  function kd(e) {
    if (!e[jc]) {
      ((e[jc] = !0),
        Pn.forEach(function (n) {
          n !== "selectionchange" && (Ix.has(n) || Dd(n, !1, e), Dd(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[jc] || ((t[jc] = !0), Dd("selectionchange", !1, t));
    }
  }
  function Bg(e, t, n, i) {
    switch (h1(t)) {
      case 2:
        var o = Eb;
        break;
      case 8:
        o = zb;
        break;
      default:
        o = Jd;
    }
    ((n = o.bind(null, t, n, e)),
      (o = void 0),
      !Iu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      i
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1));
  }
  function jd(e, t, n, i, o) {
    var f = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var v = i.stateNode.containerInfo;
          if (v === o) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var C = g.tag;
              if ((C === 3 || C === 4) && g.stateNode.containerInfo === o)
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (((g = Tt(v)), g === null)) return;
            if (((C = g.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              i = f = g;
              continue e;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    Xm(function () {
      var B = f,
        P = Wu(n),
        $ = [];
      e: {
        var L = yp.get(e);
        if (L !== void 0) {
          var X = Zo,
            se = e;
          switch (e) {
            case "keypress":
              if (Vo(n) === 0) break e;
            case "keydown":
            case "keyup":
              X = Z_;
              break;
            case "focusin":
              ((se = "focus"), (X = lf));
              break;
            case "focusout":
              ((se = "blur"), (X = lf));
              break;
            case "beforeblur":
            case "afterblur":
              X = lf;
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
              X = Zm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = k_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = J_;
              break;
            case hp:
            case mp:
            case pp:
              X = H_;
              break;
            case gp:
              X = W_;
              break;
            case "scroll":
            case "scrollend":
              X = O_;
              break;
            case "wheel":
              X = I_;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = q_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = Fm;
              break;
            case "toggle":
            case "beforetoggle":
              X = tx;
          }
          var xe = (t & 4) !== 0,
            it = !xe && (e === "scroll" || e === "scrollend"),
            N = xe ? (L !== null ? L + "Capture" : null) : L;
          xe = [];
          for (var z = B, H; z !== null; ) {
            var W = z;
            if (
              ((H = W.stateNode),
              (W = W.tag),
              (W !== 5 && W !== 26 && W !== 27) ||
                H === null ||
                N === null ||
                ((W = fs(z, N)), W != null && xe.push(Vs(z, W, H))),
              it)
            )
              break;
            z = z.return;
          }
          0 < xe.length &&
            ((L = new X(L, se, null, n, P)),
            $.push({ event: L, listeners: xe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (X = e === "mouseout" || e === "pointerout"),
            L &&
              n !== Pu &&
              (se = n.relatedTarget || n.fromElement) &&
              (Tt(se) || se[Fe]))
          )
            break e;
          if (
            (X || L) &&
            ((L =
              P.window === P
                ? P
                : (L = P.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            X
              ? ((se = n.relatedTarget || n.toElement),
                (X = B),
                (se = se ? Tt(se) : null),
                se !== null &&
                  ((it = c(se)),
                  (xe = se.tag),
                  se !== it || (xe !== 5 && xe !== 27 && xe !== 6)) &&
                  (se = null))
              : ((X = null), (se = B)),
            X !== se)
          ) {
            if (
              ((xe = Zm),
              (W = "onMouseLeave"),
              (N = "onMouseEnter"),
              (z = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((xe = Fm),
                (W = "onPointerLeave"),
                (N = "onPointerEnter"),
                (z = "pointer")),
              (it = X == null ? L : Jl(X)),
              (H = se == null ? L : Jl(se)),
              (L = new xe(W, z + "leave", X, n, P)),
              (L.target = it),
              (L.relatedTarget = H),
              (W = null),
              Tt(P) === B &&
                ((xe = new xe(N, z + "enter", se, n, P)),
                (xe.target = H),
                (xe.relatedTarget = it),
                (W = xe)),
              (it = W),
              X && se)
            )
              t: {
                for (xe = eb, N = X, z = se, H = 0, W = N; W; W = xe(W)) H++;
                W = 0;
                for (var _e = z; _e; _e = xe(_e)) W++;
                for (; 0 < H - W; ) ((N = xe(N)), H--);
                for (; 0 < W - H; ) ((z = xe(z)), W--);
                for (; H--; ) {
                  if (N === z || (z !== null && N === z.alternate)) {
                    xe = N;
                    break t;
                  }
                  ((N = xe(N)), (z = xe(z)));
                }
                xe = null;
              }
            else xe = null;
            (X !== null && qg($, L, X, xe, !1),
              se !== null && it !== null && qg($, it, se, xe, !0));
          }
        }
        e: {
          if (
            ((L = B ? Jl(B) : window),
            (X = L.nodeName && L.nodeName.toLowerCase()),
            X === "select" || (X === "input" && L.type === "file"))
          )
            var Pe = np;
          else if (ep(L))
            if (lp) Pe = fx;
            else {
              Pe = cx;
              var he = ox;
            }
          else
            ((X = L.nodeName),
              !X ||
              X.toLowerCase() !== "input" ||
              (L.type !== "checkbox" && L.type !== "radio")
                ? B && Ju(B.elementType) && (Pe = np)
                : (Pe = ux));
          if (Pe && (Pe = Pe(e, B))) {
            tp($, Pe, n, P);
            break e;
          }
          (he && he(e, L, B),
            e === "focusout" &&
              B &&
              L.type === "number" &&
              B.memoizedProps.value != null &&
              Fu(L, "number", L.value));
        }
        switch (((he = B ? Jl(B) : window), e)) {
          case "focusin":
            (ep(he) || he.contentEditable === "true") &&
              ((hr = he), (uf = B), (_s = null));
            break;
          case "focusout":
            _s = uf = hr = null;
            break;
          case "mousedown":
            ff = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ff = !1), fp($, n, P));
            break;
          case "selectionchange":
            if (hx) break;
          case "keydown":
          case "keyup":
            fp($, n, P);
        }
        var Me;
        if (rf)
          e: {
            switch (e) {
              case "compositionstart":
                var Ve = "onCompositionStart";
                break e;
              case "compositionend":
                Ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ve = "onCompositionUpdate";
                break e;
            }
            Ve = void 0;
          }
        else
          dr
            ? $m(e, n) && (Ve = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ve = "onCompositionStart");
        (Ve &&
          (Jm &&
            n.locale !== "ko" &&
            (dr || Ve !== "onCompositionStart"
              ? Ve === "onCompositionEnd" && dr && (Me = Vm())
              : ((qa = P),
                (ef = "value" in qa ? qa.value : qa.textContent),
                (dr = !0))),
          (he = Uc(B, Ve)),
          0 < he.length &&
            ((Ve = new Km(Ve, e, null, n, P)),
            $.push({ event: Ve, listeners: he }),
            Me
              ? (Ve.data = Me)
              : ((Me = Im(n)), Me !== null && (Ve.data = Me)))),
          (Me = lx ? ax(e, n) : ix(e, n)) &&
            ((Ve = Uc(B, "onBeforeInput")),
            0 < Ve.length &&
              ((he = new Km("onBeforeInput", "beforeinput", null, n, P)),
              $.push({ event: he, listeners: Ve }),
              (he.data = Me))),
          Px($, e, B, n, P));
      }
      Hg($, t);
    });
  }
  function Vs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Uc(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var o = e,
        f = o.stateNode;
      if (
        ((o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          f === null ||
          ((o = fs(e, n)),
          o != null && i.unshift(Vs(e, o, f)),
          (o = fs(e, t)),
          o != null && i.push(Vs(e, o, f))),
        e.tag === 3)
      )
        return i;
      e = e.return;
    }
    return [];
  }
  function eb(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function qg(e, t, n, i, o) {
    for (var f = t._reactName, g = []; n !== null && n !== i; ) {
      var v = n,
        C = v.alternate,
        B = v.stateNode;
      if (((v = v.tag), C !== null && C === i)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        B === null ||
        ((C = B),
        o
          ? ((B = fs(n, f)), B != null && g.unshift(Vs(n, B, C)))
          : o || ((B = fs(n, f)), B != null && g.push(Vs(n, B, C)))),
        (n = n.return));
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var tb = /\r\n?/g,
    nb = /\u0000|\uFFFD/g;
  function Lg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        tb,
        `
`,
      )
      .replace(nb, "");
  }
  function Yg(e, t) {
    return ((t = Lg(t)), Lg(e) === t);
  }
  function at(e, t, n, i, o, f) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? t === "body" || (t === "textarea" && i === "") || cr(e, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            t !== "body" &&
            cr(e, "" + i);
        break;
      case "className":
        Lo(e, "class", i);
        break;
      case "tabIndex":
        Lo(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Lo(e, n, i);
        break;
      case "style":
        Ym(e, i, f);
        break;
      case "data":
        if (t !== "object") {
          Lo(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((i = Go("" + i)), e.setAttribute(n, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof f == "function" &&
            (n === "formAction"
              ? (t !== "input" && at(e, t, "name", o.name, o, null),
                at(e, t, "formEncType", o.formEncType, o, null),
                at(e, t, "formMethod", o.formMethod, o, null),
                at(e, t, "formTarget", o.formTarget, o, null))
              : (at(e, t, "encType", o.encType, o, null),
                at(e, t, "method", o.method, o, null),
                at(e, t, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((i = Go("" + i)), e.setAttribute(n, i));
        break;
      case "onClick":
        i != null && (e.onclick = da);
        break;
      case "onScroll":
        i != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(a(61));
          if (((n = i.__html), n != null)) {
            if (o.children != null) throw Error(a(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
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
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = Go("" + i)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(n, "" + i)
          : e.removeAttribute(n);
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
        i && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? e.setAttribute(n, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? e.setAttribute(n, i)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? e.setAttribute(n, i)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? e.removeAttribute(n)
          : e.setAttribute(n, i);
        break;
      case "popover":
        (Ye("beforetoggle", e), Ye("toggle", e), qo(e, "popover", i));
        break;
      case "xlinkActuate":
        fa(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        fa(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        fa(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        fa(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        fa(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        fa(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        fa(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        fa(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        fa(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        qo(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = N_.get(n) || n), qo(e, n, i));
    }
  }
  function Ud(e, t, n, i, o, f) {
    switch (n) {
      case "style":
        Ym(e, i, f);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(a(61));
          if (((n = i.__html), n != null)) {
            if (o.children != null) throw Error(a(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? cr(e, i)
          : (typeof i == "number" || typeof i == "bigint") && cr(e, "" + i);
        break;
      case "onScroll":
        i != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ye("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = da);
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
        if (!sr.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((o = n.endsWith("Capture")),
              (t = n.slice(2, o ? n.length - 7 : void 0)),
              (f = e[De] || null),
              (f = f != null ? f[n] : null),
              typeof f == "function" && e.removeEventListener(t, f, o),
              typeof i == "function")
            ) {
              (typeof f != "function" &&
                f !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, i, o));
              break e;
            }
            n in e
              ? (e[n] = i)
              : i === !0
                ? e.setAttribute(n, "")
                : qo(e, n, i);
          }
    }
  }
  function un(e, t, n) {
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
        (Ye("error", e), Ye("load", e));
        var i = !1,
          o = !1,
          f;
        for (f in n)
          if (n.hasOwnProperty(f)) {
            var g = n[f];
            if (g != null)
              switch (f) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, t));
                default:
                  at(e, t, f, g, n, null);
              }
          }
        (o && at(e, t, "srcSet", n.srcSet, n, null),
          i && at(e, t, "src", n.src, n, null));
        return;
      case "input":
        Ye("invalid", e);
        var v = (f = g = o = null),
          C = null,
          B = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var P = n[i];
            if (P != null)
              switch (i) {
                case "name":
                  o = P;
                  break;
                case "type":
                  g = P;
                  break;
                case "checked":
                  C = P;
                  break;
                case "defaultChecked":
                  B = P;
                  break;
                case "value":
                  f = P;
                  break;
                case "defaultValue":
                  v = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null) throw Error(a(137, t));
                  break;
                default:
                  at(e, t, i, P, n, null);
              }
          }
        Hm(e, f, v, C, B, g, o, !1);
        return;
      case "select":
        (Ye("invalid", e), (i = g = f = null));
        for (o in n)
          if (n.hasOwnProperty(o) && ((v = n[o]), v != null))
            switch (o) {
              case "value":
                f = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                i = v;
              default:
                at(e, t, o, v, n, null);
            }
        ((t = f),
          (n = g),
          (e.multiple = !!i),
          t != null ? or(e, !!i, t, !1) : n != null && or(e, !!i, n, !0));
        return;
      case "textarea":
        (Ye("invalid", e), (f = o = i = null));
        for (g in n)
          if (n.hasOwnProperty(g) && ((v = n[g]), v != null))
            switch (g) {
              case "value":
                i = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                f = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(a(91));
                break;
              default:
                at(e, t, g, v, n, null);
            }
        qm(e, i, o, f);
        return;
      case "option":
        for (C in n)
          n.hasOwnProperty(C) &&
            ((i = n[C]), i != null) &&
            (C === "selected"
              ? (e.selected =
                  i && typeof i != "function" && typeof i != "symbol")
              : at(e, t, C, i, n, null));
        return;
      case "dialog":
        (Ye("beforetoggle", e),
          Ye("toggle", e),
          Ye("cancel", e),
          Ye("close", e));
        break;
      case "iframe":
      case "object":
        Ye("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Xs.length; i++) Ye(Xs[i], e);
        break;
      case "image":
        (Ye("error", e), Ye("load", e));
        break;
      case "details":
        Ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ye("error", e), Ye("load", e));
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
        for (B in n)
          if (n.hasOwnProperty(B) && ((i = n[B]), i != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, t));
              default:
                at(e, t, B, i, n, null);
            }
        return;
      default:
        if (Ju(t)) {
          for (P in n)
            n.hasOwnProperty(P) &&
              ((i = n[P]), i !== void 0 && Ud(e, t, P, i, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((i = n[v]), i != null && at(e, t, v, i, n, null));
  }
  function lb(e, t, n, i) {
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
        var o = null,
          f = null,
          g = null,
          v = null,
          C = null,
          B = null,
          P = null;
        for (X in n) {
          var $ = n[X];
          if (n.hasOwnProperty(X) && $ != null)
            switch (X) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = $;
              default:
                i.hasOwnProperty(X) || at(e, t, X, null, i, $);
            }
        }
        for (var L in i) {
          var X = i[L];
          if ((($ = n[L]), i.hasOwnProperty(L) && (X != null || $ != null)))
            switch (L) {
              case "type":
                f = X;
                break;
              case "name":
                o = X;
                break;
              case "checked":
                B = X;
                break;
              case "defaultChecked":
                P = X;
                break;
              case "value":
                g = X;
                break;
              case "defaultValue":
                v = X;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null) throw Error(a(137, t));
                break;
              default:
                X !== $ && at(e, t, L, X, i, $);
            }
        }
        Ku(e, g, v, C, B, P, f, o);
        return;
      case "select":
        X = g = v = L = null;
        for (f in n)
          if (((C = n[f]), n.hasOwnProperty(f) && C != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                X = C;
              default:
                i.hasOwnProperty(f) || at(e, t, f, null, i, C);
            }
        for (o in i)
          if (
            ((f = i[o]),
            (C = n[o]),
            i.hasOwnProperty(o) && (f != null || C != null))
          )
            switch (o) {
              case "value":
                L = f;
                break;
              case "defaultValue":
                v = f;
                break;
              case "multiple":
                g = f;
              default:
                f !== C && at(e, t, o, f, i, C);
            }
        ((t = v),
          (n = g),
          (i = X),
          L != null
            ? or(e, !!n, L, !1)
            : !!i != !!n &&
              (t != null ? or(e, !!n, t, !0) : or(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        X = L = null;
        for (v in n)
          if (
            ((o = n[v]),
            n.hasOwnProperty(v) && o != null && !i.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                at(e, t, v, null, i, o);
            }
        for (g in i)
          if (
            ((o = i[g]),
            (f = n[g]),
            i.hasOwnProperty(g) && (o != null || f != null))
          )
            switch (g) {
              case "value":
                L = o;
                break;
              case "defaultValue":
                X = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(a(91));
                break;
              default:
                o !== f && at(e, t, g, o, i, f);
            }
        Bm(e, L, X);
        return;
      case "option":
        for (var se in n)
          ((L = n[se]),
            n.hasOwnProperty(se) &&
              L != null &&
              !i.hasOwnProperty(se) &&
              (se === "selected"
                ? (e.selected = !1)
                : at(e, t, se, null, i, L)));
        for (C in i)
          ((L = i[C]),
            (X = n[C]),
            i.hasOwnProperty(C) &&
              L !== X &&
              (L != null || X != null) &&
              (C === "selected"
                ? (e.selected =
                    L && typeof L != "function" && typeof L != "symbol")
                : at(e, t, C, L, i, X)));
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
        for (var xe in n)
          ((L = n[xe]),
            n.hasOwnProperty(xe) &&
              L != null &&
              !i.hasOwnProperty(xe) &&
              at(e, t, xe, null, i, L));
        for (B in i)
          if (
            ((L = i[B]),
            (X = n[B]),
            i.hasOwnProperty(B) && L !== X && (L != null || X != null))
          )
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(a(137, t));
                break;
              default:
                at(e, t, B, L, i, X);
            }
        return;
      default:
        if (Ju(t)) {
          for (var it in n)
            ((L = n[it]),
              n.hasOwnProperty(it) &&
                L !== void 0 &&
                !i.hasOwnProperty(it) &&
                Ud(e, t, it, void 0, i, L));
          for (P in i)
            ((L = i[P]),
              (X = n[P]),
              !i.hasOwnProperty(P) ||
                L === X ||
                (L === void 0 && X === void 0) ||
                Ud(e, t, P, L, i, X));
          return;
        }
    }
    for (var N in n)
      ((L = n[N]),
        n.hasOwnProperty(N) &&
          L != null &&
          !i.hasOwnProperty(N) &&
          at(e, t, N, null, i, L));
    for ($ in i)
      ((L = i[$]),
        (X = n[$]),
        !i.hasOwnProperty($) ||
          L === X ||
          (L == null && X == null) ||
          at(e, t, $, L, i, X));
  }
  function Gg(e) {
    switch (e) {
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
  function ab() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0;
        i < n.length;
        i++
      ) {
        var o = n[i],
          f = o.transferSize,
          g = o.initiatorType,
          v = o.duration;
        if (f && v && Gg(g)) {
          for (g = 0, v = o.responseEnd, i += 1; i < n.length; i++) {
            var C = n[i],
              B = C.startTime;
            if (B > v) break;
            var P = C.transferSize,
              $ = C.initiatorType;
            P &&
              Gg($) &&
              ((C = C.responseEnd), (g += P * (C < v ? 1 : (v - B) / (C - B))));
          }
          if ((--i, (t += (8 * (f + g)) / (o.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Hd = null,
    Bd = null;
  function Hc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Vg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function qd(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ld = null;
  function ib() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Ld
        ? !1
        : ((Ld = e), !0)
      : ((Ld = null), !1);
  }
  var Qg = typeof setTimeout == "function" ? setTimeout : void 0,
    rb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zg = typeof Promise == "function" ? Promise : void 0,
    sb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zg < "u"
          ? function (e) {
              return Zg.resolve(null).then(e).catch(ob);
            }
          : Qg;
  function ob(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ni(e) {
    return e === "head";
  }
  function Kg(e, t) {
    var n = t,
      i = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$" || n === "/&")) {
          if (i === 0) {
            (e.removeChild(o), Lr(t));
            return;
          }
          i--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          i++;
        else if (n === "html") Qs(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), Qs(n));
          for (var f = n.firstChild; f; ) {
            var g = f.nextSibling,
              v = f.nodeName;
            (f[St] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(f),
              (f = g));
          }
        } else n === "body" && Qs(e.ownerDocument.body);
      n = o;
    } while (n);
    Lr(t);
  }
  function Fg(e, t) {
    var n = e;
    e = 0;
    do {
      var i = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((n = i.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = i;
    } while (n);
  }
  function Yd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Yd(n), kt(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function cb(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (i) {
        if (!e[St])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== o.rel ||
                e.getAttribute("href") !==
                  (o.href == null || o.href === "" ? null : o.href) ||
                e.getAttribute("crossorigin") !==
                  (o.crossOrigin == null ? null : o.crossOrigin) ||
                e.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (o.src == null ? null : o.src) ||
                  e.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  e.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = Nl(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function ub(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Nl(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Jg(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Nl(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Gd(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Xd(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function fb(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var i = function () {
        (t(), n.removeEventListener("DOMContentLoaded", i));
      };
      (n.addEventListener("DOMContentLoaded", i), (e._reactRetry = i));
    }
  }
  function Nl(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
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
    return e;
  }
  var Vd = null;
  function Pg(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Nl(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Wg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function $g(e, t, n) {
    switch (((t = Hc(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(a(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(a(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(a(454));
        return e;
      default:
        throw Error(a(451));
    }
  }
  function Qs(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    kt(e);
  }
  var Rl = new Map(),
    Ig = new Set();
  function Bc(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var za = F.d;
  F.d = { f: db, r: hb, D: mb, C: pb, L: gb, m: yb, X: _b, S: vb, M: xb };
  function db() {
    var e = za.f(),
      t = Mc();
    return e || t;
  }
  function hb(e) {
    var t = jn(e);
    t !== null && t.tag === 5 && t.type === "form" ? g0(t) : za.r(e);
  }
  var Hr = typeof document > "u" ? null : document;
  function e1(e, t, n) {
    var i = Hr;
    if (i && typeof t == "string" && t) {
      var o = Tl(t);
      ((o = 'link[rel="' + e + '"][href="' + o + '"]'),
        typeof n == "string" && (o += '[crossorigin="' + n + '"]'),
        Ig.has(o) ||
          (Ig.add(o),
          (e = { rel: e, crossOrigin: n, href: t }),
          i.querySelector(o) === null &&
            ((t = i.createElement("link")),
            un(t, "link", e),
            He(t),
            i.head.appendChild(t))));
    }
  }
  function mb(e) {
    (za.D(e), e1("dns-prefetch", e, null));
  }
  function pb(e, t) {
    (za.C(e, t), e1("preconnect", e, t));
  }
  function gb(e, t, n) {
    za.L(e, t, n);
    var i = Hr;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + Tl(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((o += '[imagesrcset="' + Tl(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (o += '[imagesizes="' + Tl(n.imageSizes) + '"]'))
        : (o += '[href="' + Tl(e) + '"]');
      var f = o;
      switch (t) {
        case "style":
          f = Br(e);
          break;
        case "script":
          f = qr(e);
      }
      Rl.has(f) ||
        ((e = _(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        Rl.set(f, e),
        i.querySelector(o) !== null ||
          (t === "style" && i.querySelector(Zs(f))) ||
          (t === "script" && i.querySelector(Ks(f))) ||
          ((t = i.createElement("link")),
          un(t, "link", e),
          He(t),
          i.head.appendChild(t)));
    }
  }
  function yb(e, t) {
    za.m(e, t);
    var n = Hr;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script",
        o =
          'link[rel="modulepreload"][as="' + Tl(i) + '"][href="' + Tl(e) + '"]',
        f = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = qr(e);
      }
      if (
        !Rl.has(f) &&
        ((e = _({ rel: "modulepreload", href: e }, t)),
        Rl.set(f, e),
        n.querySelector(o) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ks(f))) return;
        }
        ((i = n.createElement("link")),
          un(i, "link", e),
          He(i),
          n.head.appendChild(i));
      }
    }
  }
  function vb(e, t, n) {
    za.S(e, t, n);
    var i = Hr;
    if (i && e) {
      var o = At(i).hoistableStyles,
        f = Br(e);
      t = t || "default";
      var g = o.get(f);
      if (!g) {
        var v = { loading: 0, preload: null };
        if ((g = i.querySelector(Zs(f)))) v.loading = 5;
        else {
          ((e = _({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Rl.get(f)) && Qd(e, n));
          var C = (g = i.createElement("link"));
          (He(C),
            un(C, "link", e),
            (C._p = new Promise(function (B, P) {
              ((C.onload = B), (C.onerror = P));
            })),
            C.addEventListener("load", function () {
              v.loading |= 1;
            }),
            C.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            qc(g, t, i));
        }
        ((g = { type: "stylesheet", instance: g, count: 1, state: v }),
          o.set(f, g));
      }
    }
  }
  function _b(e, t) {
    za.X(e, t);
    var n = Hr;
    if (n && e) {
      var i = At(n).hoistableScripts,
        o = qr(e),
        f = i.get(o);
      f ||
        ((f = n.querySelector(Ks(o))),
        f ||
          ((e = _({ src: e, async: !0 }, t)),
          (t = Rl.get(o)) && Zd(e, t),
          (f = n.createElement("script")),
          He(f),
          un(f, "link", e),
          n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        i.set(o, f));
    }
  }
  function xb(e, t) {
    za.M(e, t);
    var n = Hr;
    if (n && e) {
      var i = At(n).hoistableScripts,
        o = qr(e),
        f = i.get(o);
      f ||
        ((f = n.querySelector(Ks(o))),
        f ||
          ((e = _({ src: e, async: !0, type: "module" }, t)),
          (t = Rl.get(o)) && Zd(e, t),
          (f = n.createElement("script")),
          He(f),
          un(f, "link", e),
          n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        i.set(o, f));
    }
  }
  function t1(e, t, n, i) {
    var o = (o = fe.current) ? Bc(o) : null;
    if (!o) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Br(n.href)),
            (n = At(o).hoistableStyles),
            (i = n.get(t)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Br(n.href);
          var f = At(o).hoistableStyles,
            g = f.get(e);
          if (
            (g ||
              ((o = o.ownerDocument || o),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, g),
              (f = o.querySelector(Zs(e))) &&
                !f._p &&
                ((g.instance = f), (g.state.loading = 5)),
              Rl.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Rl.set(e, n),
                f || bb(o, e, n, g.state))),
            t && i === null)
          )
            throw Error(a(528, ""));
          return g;
        }
        if (t && i !== null) throw Error(a(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = qr(n)),
              (n = At(o).hoistableScripts),
              (i = n.get(t)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(a(444, e));
    }
  }
  function Br(e) {
    return 'href="' + Tl(e) + '"';
  }
  function Zs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function n1(e) {
    return _({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function bb(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (i.loading = 1)
      : ((t = e.createElement("link")),
        (i.preload = t),
        t.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        un(t, "link", n),
        He(t),
        e.head.appendChild(t));
  }
  function qr(e) {
    return '[src="' + Tl(e) + '"]';
  }
  function Ks(e) {
    return "script[async]" + e;
  }
  function l1(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var i = e.querySelector('style[data-href~="' + Tl(n.href) + '"]');
          if (i) return ((t.instance = i), He(i), i);
          var o = _({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (e.ownerDocument || e).createElement("style")),
            He(i),
            un(i, "style", o),
            qc(i, n.precedence, e),
            (t.instance = i)
          );
        case "stylesheet":
          o = Br(n.href);
          var f = e.querySelector(Zs(o));
          if (f) return ((t.state.loading |= 4), (t.instance = f), He(f), f);
          ((i = n1(n)),
            (o = Rl.get(o)) && Qd(i, o),
            (f = (e.ownerDocument || e).createElement("link")),
            He(f));
          var g = f;
          return (
            (g._p = new Promise(function (v, C) {
              ((g.onload = v), (g.onerror = C));
            })),
            un(f, "link", i),
            (t.state.loading |= 4),
            qc(f, n.precedence, e),
            (t.instance = f)
          );
        case "script":
          return (
            (f = qr(n.src)),
            (o = e.querySelector(Ks(f)))
              ? ((t.instance = o), He(o), o)
              : ((i = n),
                (o = Rl.get(f)) && ((i = _({}, n)), Zd(i, o)),
                (e = e.ownerDocument || e),
                (o = e.createElement("script")),
                He(o),
                un(o, "link", i),
                e.head.appendChild(o),
                (t.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(a(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((i = t.instance), (t.state.loading |= 4), qc(i, n.precedence, e));
    return t.instance;
  }
  function qc(e, t, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        o = i.length ? i[i.length - 1] : null,
        f = o,
        g = 0;
      g < i.length;
      g++
    ) {
      var v = i[g];
      if (v.dataset.precedence === t) f = v;
      else if (f !== o) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Qd(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Zd(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Lc = null;
  function a1(e, t, n) {
    if (Lc === null) {
      var i = new Map(),
        o = (Lc = new Map());
      o.set(n, i);
    } else ((o = Lc), (i = o.get(n)), i || ((i = new Map()), o.set(n, i)));
    if (i.has(e)) return i;
    for (
      i.set(e, null), n = n.getElementsByTagName(e), o = 0;
      o < n.length;
      o++
    ) {
      var f = n[o];
      if (
        !(
          f[St] ||
          f[Re] ||
          (e === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = f.getAttribute(t) || "";
        g = e + g;
        var v = i.get(g);
        v ? v.push(f) : i.set(g, [f]);
      }
    }
    return i;
  }
  function i1(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Sb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
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
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
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
  function r1(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Tb(e, t, n, i) {
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var o = Br(i.href),
          f = t.querySelector(Zs(o));
        if (f) {
          ((t = f._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Yc.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = f),
            He(f));
          return;
        }
        ((f = t.ownerDocument || t),
          (i = n1(i)),
          (o = Rl.get(o)) && Qd(i, o),
          (f = f.createElement("link")),
          He(f));
        var g = f;
        ((g._p = new Promise(function (v, C) {
          ((g.onload = v), (g.onerror = C));
        })),
          un(f, "link", i),
          (n.instance = f));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Yc.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var Kd = 0;
  function Ab(e, t) {
    return (
      e.stylesheets && e.count === 0 && Xc(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var i = setTimeout(function () {
              if ((e.stylesheets && Xc(e, e.stylesheets), e.unsuspend)) {
                var f = e.unsuspend;
                ((e.unsuspend = null), f());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Kd === 0 && (Kd = 62500 * ab());
            var o = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Xc(e, e.stylesheets), e.unsuspend))
                ) {
                  var f = e.unsuspend;
                  ((e.unsuspend = null), f());
                }
              },
              (e.imgBytes > Kd ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(i), clearTimeout(o));
              }
            );
          }
        : null
    );
  }
  function Yc() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Xc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Gc = null;
  function Xc(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Gc = new Map()),
        t.forEach(Cb, e),
        (Gc = null),
        Yc.call(e)));
  }
  function Cb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Gc.get(e);
      if (n) var i = n.get(null);
      else {
        ((n = new Map()), Gc.set(e, n));
        for (
          var o = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            f = 0;
          f < o.length;
          f++
        ) {
          var g = o[f];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (n.set(g.dataset.precedence, g), (i = g));
        }
        i && n.set(null, i);
      }
      ((o = t.instance),
        (g = o.getAttribute("data-precedence")),
        (f = n.get(g) || i),
        f === i && n.set(null, o),
        n.set(g, o),
        this.count++,
        (i = Yc.bind(this)),
        o.addEventListener("load", i),
        o.addEventListener("error", i),
        f
          ? f.parentNode.insertBefore(o, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(o, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Fs = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0,
  };
  function wb(e, t, n, i, o, f, g, v, C) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ce(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ce(0)),
      (this.hiddenUpdates = Ce(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = o),
      (this.onCaughtError = f),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map()));
  }
  function s1(e, t, n, i, o, f, g, v, C, B, P, $) {
    return (
      (e = new wb(e, t, n, g, C, B, P, $, v)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = $n(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = wf()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: i, isDehydrated: n, cache: t }),
      Nf(f),
      e
    );
  }
  function o1(e) {
    return e ? ((e = gr), e) : gr;
  }
  function c1(e, t, n, i, o, f) {
    ((o = o1(o)),
      i.context === null ? (i.context = o) : (i.pendingContext = o),
      (i = Qa(t)),
      (i.payload = { element: n }),
      (f = f === void 0 ? null : f),
      f !== null && (i.callback = f),
      (n = Za(e, i, t)),
      n !== null && (Yn(n, e, t), ws(n, e, t)));
  }
  function u1(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Fd(e, t) {
    (u1(e, t), (e = e.alternate) && u1(e, t));
  }
  function f1(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Mi(e, 67108864);
      (t !== null && Yn(t, e, 67108864), Fd(e, 67108864));
    }
  }
  function d1(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ll();
      t = Te(t);
      var n = Mi(e, t);
      (n !== null && Yn(n, e, t), Fd(e, t));
    }
  }
  var Vc = !0;
  function Eb(e, t, n, i) {
    var o = O.T;
    O.T = null;
    var f = F.p;
    try {
      ((F.p = 2), Jd(e, t, n, i));
    } finally {
      ((F.p = f), (O.T = o));
    }
  }
  function zb(e, t, n, i) {
    var o = O.T;
    O.T = null;
    var f = F.p;
    try {
      ((F.p = 8), Jd(e, t, n, i));
    } finally {
      ((F.p = f), (O.T = o));
    }
  }
  function Jd(e, t, n, i) {
    if (Vc) {
      var o = Pd(i);
      if (o === null) (jd(e, t, i, Qc, n), m1(e, i));
      else if (Nb(o, e, t, n, i)) i.stopPropagation();
      else if ((m1(e, i), t & 4 && -1 < Mb.indexOf(e))) {
        for (; o !== null; ) {
          var f = jn(o);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var g = Jt(f.pendingLanes);
                  if (g !== 0) {
                    var v = f;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var C = 1 << (31 - Gt(g));
                      ((v.entanglements[1] |= C), (g &= ~C));
                    }
                    (ta(f), ($e & 6) === 0 && ((Ec = Dt() + 500), Gs(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((v = Mi(f, 2)), v !== null && Yn(v, f, 2), Mc(), Fd(f, 2));
            }
          if (((f = Pd(i)), f === null && jd(e, t, i, Qc, n), f === o)) break;
          o = f;
        }
        o !== null && i.stopPropagation();
      } else jd(e, t, i, null, n);
    }
  }
  function Pd(e) {
    return ((e = Wu(e)), Wd(e));
  }
  var Qc = null;
  function Wd(e) {
    if (((Qc = null), (e = Tt(e)), e !== null)) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Qc = e), null);
  }
  function h1(e) {
    switch (e) {
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
        switch (Yt()) {
          case ql:
            return 2;
          case yt:
            return 8;
          case mn:
          case kn:
            return 32;
          case gl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $d = !1,
    li = null,
    ai = null,
    ii = null,
    Js = new Map(),
    Ps = new Map(),
    ri = [],
    Mb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function m1(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        li = null;
        break;
      case "dragenter":
      case "dragleave":
        ai = null;
        break;
      case "mouseover":
      case "mouseout":
        ii = null;
        break;
      case "pointerover":
      case "pointerout":
        Js.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ps.delete(t.pointerId);
    }
  }
  function Ws(e, t, n, i, o, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: f,
          targetContainers: [o],
        }),
        t !== null && ((t = jn(t)), t !== null && f1(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function Nb(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return ((li = Ws(li, e, t, n, i, o)), !0);
      case "dragenter":
        return ((ai = Ws(ai, e, t, n, i, o)), !0);
      case "mouseover":
        return ((ii = Ws(ii, e, t, n, i, o)), !0);
      case "pointerover":
        var f = o.pointerId;
        return (Js.set(f, Ws(Js.get(f) || null, e, t, n, i, o)), !0);
      case "gotpointercapture":
        return (
          (f = o.pointerId),
          Ps.set(f, Ws(Ps.get(f) || null, e, t, n, i, o)),
          !0
        );
    }
    return !1;
  }
  function p1(e) {
    var t = Tt(e.target);
    if (t !== null) {
      var n = c(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              vt(e.priority, function () {
                d1(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = h(n)), t !== null)) {
            ((e.blockedOn = t),
              vt(e.priority, function () {
                d1(n);
              }));
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
  function Zc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Pd(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        ((Pu = i), n.target.dispatchEvent(i), (Pu = null));
      } else return ((t = jn(n)), t !== null && f1(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function g1(e, t, n) {
    Zc(e) && n.delete(t);
  }
  function Rb() {
    (($d = !1),
      li !== null && Zc(li) && (li = null),
      ai !== null && Zc(ai) && (ai = null),
      ii !== null && Zc(ii) && (ii = null),
      Js.forEach(g1),
      Ps.forEach(g1));
  }
  function Kc(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      $d ||
        (($d = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Rb)));
  }
  var Fc = null;
  function y1(e) {
    Fc !== e &&
      ((Fc = e),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        Fc === e && (Fc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            i = e[t + 1],
            o = e[t + 2];
          if (typeof i != "function") {
            if (Wd(i || n) === null) continue;
            break;
          }
          var f = jn(n);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Pf(f, { pending: !0, data: o, method: n.method, action: i }, i, o));
        }
      }));
  }
  function Lr(e) {
    function t(C) {
      return Kc(C, e);
    }
    (li !== null && Kc(li, e),
      ai !== null && Kc(ai, e),
      ii !== null && Kc(ii, e),
      Js.forEach(t),
      Ps.forEach(t));
    for (var n = 0; n < ri.length; n++) {
      var i = ri[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < ri.length && ((n = ri[0]), n.blockedOn === null); )
      (p1(n), n.blockedOn === null && ri.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var o = n[i],
          f = n[i + 1],
          g = o[De] || null;
        if (typeof f == "function") g || y1(n);
        else if (g) {
          var v = null;
          if (f && f.hasAttribute("formAction")) {
            if (((o = f), (g = f[De] || null))) v = g.formAction;
            else if (Wd(o) !== null) continue;
          } else v = g.action;
          (typeof v == "function" ? (n[i + 1] = v) : (n.splice(i, 3), (i -= 3)),
            y1(n));
        }
      }
  }
  function v1() {
    function e(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (g) {
              return (o = g);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (o !== null && (o(), (o = null)), i || setTimeout(n, 20));
    }
    function n() {
      if (!i && !navigation.transition) {
        var f = navigation.currentEntry;
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        o = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((i = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            o !== null && (o(), (o = null)));
        }
      );
    }
  }
  function Id(e) {
    this._internalRoot = e;
  }
  ((Jc.prototype.render = Id.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      var n = t.current,
        i = ll();
      c1(n, i, e, t, null, null);
    }),
    (Jc.prototype.unmount = Id.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (c1(e.current, 2, null, e, null, null), Mc(), (t[Fe] = null));
        }
      }));
  function Jc(e) {
    this._internalRoot = e;
  }
  Jc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ue();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ri.length && t !== 0 && t < ri[n].priority; n++);
      (ri.splice(n, 0, e), n === 0 && p1(e));
    }
  };
  var _1 = l.version;
  if (_1 !== "19.2.3") throw Error(a(527, _1, "19.2.3"));
  F.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(a(188))
        : ((e = Object.keys(e).join(",")), Error(a(268, e)));
    return (
      (e = p(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Ob = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pc.isDisabled && Pc.supportsFiber)
      try {
        ((Kl = Pc.inject(Ob)), (bt = Pc));
      } catch {}
  }
  return (
    (Is.createRoot = function (e, t) {
      if (!s(e)) throw Error(a(299));
      var n = !1,
        i = "",
        o = w0,
        f = E0,
        g = z0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError)),
        (t = s1(e, 1, !1, null, null, n, i, null, o, f, g, v1)),
        (e[Fe] = t.current),
        kd(e),
        new Id(t)
      );
    }),
    (Is.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(a(299));
      var i = !1,
        o = "",
        f = w0,
        g = E0,
        v = z0,
        C = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.formState !== void 0 && (C = n.formState)),
        (t = s1(e, 1, !0, t, n ?? null, i, o, C, f, g, v, v1)),
        (t.context = o1(null)),
        (n = t.current),
        (i = ll()),
        (i = Te(i)),
        (o = Qa(i)),
        (o.callback = null),
        Za(n, o, i),
        (n = i),
        (t.current.lanes = n),
        ye(t, n),
        ta(t),
        (e[Fe] = t.current),
        kd(e),
        new Jc(t)
      );
    }),
    (Is.version = "19.2.3"),
    Is
  );
}
var M1;
function Xb() {
  if (M1) return nh.exports;
  M1 = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (l) {
        console.error(l);
      }
  }
  return (u(), (nh.exports = Gb()), nh.exports);
}
var Vb = Xb();
function Na(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return u;
}
function Sy(u, l) {
  ((u.prototype = Object.create(l.prototype)),
    (u.prototype.constructor = u),
    (u.__proto__ = l));
}
var dl = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  ns = { duration: 0.5, overwrite: !1, delay: 0 },
  em,
  dn,
  xt,
  jl = 1e8,
  ot = 1 / jl,
  wh = Math.PI * 2,
  Qb = wh / 4,
  Zb = 0,
  Ty = Math.sqrt,
  Kb = Math.cos,
  Fb = Math.sin,
  an = function (l) {
    return typeof l == "string";
  },
  Ot = function (l) {
    return typeof l == "function";
  },
  ja = function (l) {
    return typeof l == "number";
  },
  tm = function (l) {
    return typeof l > "u";
  },
  ca = function (l) {
    return typeof l == "object";
  },
  Xn = function (l) {
    return l !== !1;
  },
  nm = function () {
    return typeof window < "u";
  },
  Wc = function (l) {
    return Ot(l) || an(l);
  },
  Ay =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Sn = Array.isArray,
  Jb = /random\([^)]+\)/g,
  Pb = /,\s*/g,
  N1 = /(?:-?\.?\d|\.)+/gi,
  Cy = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Kr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  rh = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  wy = /[+-]=-?[.\d]+/,
  Wb = /[^,'"\[\]\s]+/gi,
  $b = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  wt,
  la,
  Eh,
  lm,
  hl = {},
  Tu = {},
  Ey,
  zy = function (l) {
    return (Tu = ls(l, hl)) && Kn;
  },
  am = function (l, r) {
    return console.warn(
      "Invalid property",
      l,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  Co = function (l, r) {
    return !r && console.warn(l);
  },
  My = function (l, r) {
    return (l && (hl[l] = r) && Tu && (Tu[l] = r)) || hl;
  },
  wo = function () {
    return 0;
  },
  Ib = { suppressEvents: !0, isStart: !0, kill: !1 },
  mu = { suppressEvents: !0, kill: !1 },
  e2 = { suppressEvents: !0 },
  im = {},
  pi = [],
  zh = {},
  Ny,
  rl = {},
  sh = {},
  R1 = 30,
  pu = [],
  rm = "",
  sm = function (l) {
    var r = l[0],
      a,
      s;
    if ((ca(r) || Ot(r) || (l = [l]), !(a = (r._gsap || {}).harness))) {
      for (s = pu.length; s-- && !pu[s].targetTest(r); );
      a = pu[s];
    }
    for (s = l.length; s--; )
      (l[s] && (l[s]._gsap || (l[s]._gsap = new ev(l[s], a)))) ||
        l.splice(s, 1);
    return l;
  },
  Pi = function (l) {
    return l._gsap || sm(Ul(l))[0]._gsap;
  },
  Ry = function (l, r, a) {
    return (a = l[r]) && Ot(a)
      ? l[r]()
      : (tm(a) && l.getAttribute && l.getAttribute(r)) || a;
  },
  Vn = function (l, r) {
    return (l = l.split(",")).forEach(r) || l;
  },
  Ht = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  Ct = function (l) {
    return Math.round(l * 1e7) / 1e7 || 0;
  },
  Pr = function (l, r) {
    var a = r.charAt(0),
      s = parseFloat(r.substr(2));
    return (
      (l = parseFloat(l)),
      a === "+" ? l + s : a === "-" ? l - s : a === "*" ? l * s : l / s
    );
  },
  t2 = function (l, r) {
    for (var a = r.length, s = 0; l.indexOf(r[s]) < 0 && ++s < a; );
    return s < a;
  },
  Au = function () {
    var l = pi.length,
      r = pi.slice(0),
      a,
      s;
    for (zh = {}, pi.length = 0, a = 0; a < l; a++)
      ((s = r[a]),
        s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0));
  },
  om = function (l) {
    return !!(l._initted || l._startAt || l.add);
  },
  Oy = function (l, r, a, s) {
    (pi.length && !dn && Au(),
      l.render(r, a, !!(dn && r < 0 && om(l))),
      pi.length && !dn && Au());
  },
  Dy = function (l) {
    var r = parseFloat(l);
    return (r || r === 0) && (l + "").match(Wb).length < 2
      ? r
      : an(l)
        ? l.trim()
        : l;
  },
  ky = function (l) {
    return l;
  },
  ml = function (l, r) {
    for (var a in r) a in l || (l[a] = r[a]);
    return l;
  },
  n2 = function (l) {
    return function (r, a) {
      for (var s in a)
        s in r || (s === "duration" && l) || s === "ease" || (r[s] = a[s]);
    };
  },
  ls = function (l, r) {
    for (var a in r) l[a] = r[a];
    return l;
  },
  O1 = function u(l, r) {
    for (var a in r)
      a !== "__proto__" &&
        a !== "constructor" &&
        a !== "prototype" &&
        (l[a] = ca(r[a]) ? u(l[a] || (l[a] = {}), r[a]) : r[a]);
    return l;
  },
  Cu = function (l, r) {
    var a = {},
      s;
    for (s in l) s in r || (a[s] = l[s]);
    return a;
  },
  fo = function (l) {
    var r = l.parent || wt,
      a = l.keyframes ? n2(Sn(l.keyframes)) : ml;
    if (Xn(l.inherit))
      for (; r; ) (a(l, r.vars.defaults), (r = r.parent || r._dp));
    return l;
  },
  l2 = function (l, r) {
    for (var a = l.length, s = a === r.length; s && a-- && l[a] === r[a]; );
    return a < 0;
  },
  jy = function (l, r, a, s, c) {
    var d = l[s],
      h;
    if (c) for (h = r[c]; d && d[c] > h; ) d = d._prev;
    return (
      d ? ((r._next = d._next), (d._next = r)) : ((r._next = l[a]), (l[a] = r)),
      r._next ? (r._next._prev = r) : (l[s] = r),
      (r._prev = d),
      (r.parent = r._dp = l),
      r
    );
  },
  Hu = function (l, r, a, s) {
    (a === void 0 && (a = "_first"), s === void 0 && (s = "_last"));
    var c = r._prev,
      d = r._next;
    (c ? (c._next = d) : l[a] === r && (l[a] = d),
      d ? (d._prev = c) : l[s] === r && (l[s] = c),
      (r._next = r._prev = r.parent = null));
  },
  vi = function (l, r) {
    (l.parent &&
      (!r || l.parent.autoRemoveChildren) &&
      l.parent.remove &&
      l.parent.remove(l),
      (l._act = 0));
  },
  Wi = function (l, r) {
    if (l && (!r || r._end > l._dur || r._start < 0))
      for (var a = l; a; ) ((a._dirty = 1), (a = a.parent));
    return l;
  },
  a2 = function (l) {
    for (var r = l.parent; r && r.parent; )
      ((r._dirty = 1), r.totalDuration(), (r = r.parent));
    return l;
  },
  Mh = function (l, r, a, s) {
    return (
      l._startAt &&
      (dn
        ? l._startAt.revert(mu)
        : (l.vars.immediateRender && !l.vars.autoRevert) ||
          l._startAt.render(r, !0, s))
    );
  },
  i2 = function u(l) {
    return !l || (l._ts && u(l.parent));
  },
  D1 = function (l) {
    return l._repeat ? as(l._tTime, (l = l.duration() + l._rDelay)) * l : 0;
  },
  as = function (l, r) {
    var a = Math.floor((l = Ct(l / r)));
    return l && a === l ? a - 1 : a;
  },
  wu = function (l, r) {
    return (
      (l - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  Bu = function (l) {
    return (l._end = Ct(
      l._start + (l._tDur / Math.abs(l._ts || l._rts || ot) || 0),
    ));
  },
  qu = function (l, r) {
    var a = l._dp;
    return (
      a &&
        a.smoothChildTiming &&
        l._ts &&
        ((l._start = Ct(
          a._time -
            (l._ts > 0
              ? r / l._ts
              : ((l._dirty ? l.totalDuration() : l._tDur) - r) / -l._ts),
        )),
        Bu(l),
        a._dirty || Wi(a, l)),
      l
    );
  },
  Uy = function (l, r) {
    var a;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < l._time && (r._dur || !r.add))) &&
        ((a = wu(l.rawTime(), r)),
        (!r._dur || Uo(0, r.totalDuration(), a) - r._tTime > ot) &&
          r.render(a, !0)),
      Wi(l, r)._dp && l._initted && l._time >= l._dur && l._ts)
    ) {
      if (l._dur < l.duration())
        for (a = l; a._dp; )
          (a.rawTime() >= 0 && a.totalTime(a._tTime), (a = a._dp));
      l._zTime = -ot;
    }
  },
  ia = function (l, r, a, s) {
    return (
      r.parent && vi(r),
      (r._start = Ct(
        (ja(a) ? a : a || l !== wt ? Ol(l, a, r) : l._time) + r._delay,
      )),
      (r._end = Ct(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0),
      )),
      jy(l, r, "_first", "_last", l._sort ? "_start" : 0),
      Nh(r) || (l._recent = r),
      s || Uy(l, r),
      l._ts < 0 && qu(l, l._tTime),
      l
    );
  },
  Hy = function (l, r) {
    return (
      (hl.ScrollTrigger || am("scrollTrigger", r)) &&
      hl.ScrollTrigger.create(r, l)
    );
  },
  By = function (l, r, a, s, c) {
    if ((um(l, r, c), !l._initted)) return 1;
    if (
      !a &&
      l._pt &&
      !dn &&
      ((l._dur && l.vars.lazy !== !1) || (!l._dur && l.vars.lazy)) &&
      Ny !== ol.frame
    )
      return (pi.push(l), (l._lazy = [c, s]), 1);
  },
  r2 = function u(l) {
    var r = l.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || u(r));
  },
  Nh = function (l) {
    var r = l.data;
    return r === "isFromStart" || r === "isStart";
  },
  s2 = function (l, r, a, s) {
    var c = l.ratio,
      d =
        r < 0 ||
        (!r &&
          ((!l._start && r2(l) && !(!l._initted && Nh(l))) ||
            ((l._ts < 0 || l._dp._ts < 0) && !Nh(l))))
          ? 0
          : 1,
      h = l._rDelay,
      m = 0,
      p,
      y,
      _;
    if (
      (h &&
        l._repeat &&
        ((m = Uo(0, l._tDur, r)),
        (y = as(m, h)),
        l._yoyo && y & 1 && (d = 1 - d),
        y !== as(l._tTime, h) &&
          ((c = 1 - d), l.vars.repeatRefresh && l._initted && l.invalidate())),
      d !== c || dn || s || l._zTime === ot || (!r && l._zTime))
    ) {
      if (!l._initted && By(l, r, s, a, m)) return;
      for (
        _ = l._zTime,
          l._zTime = r || (a ? ot : 0),
          a || (a = r && !_),
          l.ratio = d,
          l._from && (d = 1 - d),
          l._time = 0,
          l._tTime = m,
          p = l._pt;
        p;
      )
        (p.r(d, p.d), (p = p._next));
      (r < 0 && Mh(l, r, a, !0),
        l._onUpdate && !a && ul(l, "onUpdate"),
        m && l._repeat && !a && l.parent && ul(l, "onRepeat"),
        (r >= l._tDur || r < 0) &&
          l.ratio === d &&
          (d && vi(l, 1),
          !a &&
            !dn &&
            (ul(l, d ? "onComplete" : "onReverseComplete", !0),
            l._prom && l._prom())));
    } else l._zTime || (l._zTime = r);
  },
  o2 = function (l, r, a) {
    var s;
    if (a > r)
      for (s = l._first; s && s._start <= a; ) {
        if (s.data === "isPause" && s._start > r) return s;
        s = s._next;
      }
    else
      for (s = l._last; s && s._start >= a; ) {
        if (s.data === "isPause" && s._start < r) return s;
        s = s._prev;
      }
  },
  is = function (l, r, a, s) {
    var c = l._repeat,
      d = Ct(r) || 0,
      h = l._tTime / l._tDur;
    return (
      h && !s && (l._time *= d / l._dur),
      (l._dur = d),
      (l._tDur = c ? (c < 0 ? 1e10 : Ct(d * (c + 1) + l._rDelay * c)) : d),
      h > 0 && !s && qu(l, (l._tTime = l._tDur * h)),
      l.parent && Bu(l),
      a || Wi(l.parent, l),
      l
    );
  },
  k1 = function (l) {
    return l instanceof On ? Wi(l) : is(l, l._dur);
  },
  c2 = { _start: 0, endTime: wo, totalDuration: wo },
  Ol = function u(l, r, a) {
    var s = l.labels,
      c = l._recent || c2,
      d = l.duration() >= jl ? c.endTime(!1) : l._dur,
      h,
      m,
      p;
    return an(r) && (isNaN(r) || r in s)
      ? ((m = r.charAt(0)),
        (p = r.substr(-1) === "%"),
        (h = r.indexOf("=")),
        m === "<" || m === ">"
          ? (h >= 0 && (r = r.replace(/=/, "")),
            (m === "<" ? c._start : c.endTime(c._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (p ? (h < 0 ? c : a).totalDuration() / 100 : 1))
          : h < 0
            ? (r in s || (s[r] = d), s[r])
            : ((m = parseFloat(r.charAt(h - 1) + r.substr(h + 1))),
              p && a && (m = (m / 100) * (Sn(a) ? a[0] : a).totalDuration()),
              h > 1 ? u(l, r.substr(0, h - 1), a) + m : d + m))
      : r == null
        ? d
        : +r;
  },
  ho = function (l, r, a) {
    var s = ja(r[1]),
      c = (s ? 2 : 1) + (l < 2 ? 0 : 1),
      d = r[c],
      h,
      m;
    if ((s && (d.duration = r[1]), (d.parent = a), l)) {
      for (h = d, m = a; m && !("immediateRender" in h); )
        ((h = m.vars.defaults || {}), (m = Xn(m.vars.inherit) && m.parent));
      ((d.immediateRender = Xn(h.immediateRender)),
        l < 2 ? (d.runBackwards = 1) : (d.startAt = r[c - 1]));
    }
    return new Ft(r[0], d, r[c + 1]);
  },
  Ti = function (l, r) {
    return l || l === 0 ? r(l) : r;
  },
  Uo = function (l, r, a) {
    return a < l ? l : a > r ? r : a;
  },
  xn = function (l, r) {
    return !an(l) || !(r = $b.exec(l)) ? "" : r[1];
  },
  u2 = function (l, r, a) {
    return Ti(a, function (s) {
      return Uo(l, r, s);
    });
  },
  Rh = [].slice,
  qy = function (l, r) {
    return (
      l &&
      ca(l) &&
      "length" in l &&
      ((!r && !l.length) || (l.length - 1 in l && ca(l[0]))) &&
      !l.nodeType &&
      l !== la
    );
  },
  f2 = function (l, r, a) {
    return (
      a === void 0 && (a = []),
      l.forEach(function (s) {
        var c;
        return (an(s) && !r) || qy(s, 1)
          ? (c = a).push.apply(c, Ul(s))
          : a.push(s);
      }) || a
    );
  },
  Ul = function (l, r, a) {
    return xt && !r && xt.selector
      ? xt.selector(l)
      : an(l) && !a && (Eh || !rs())
        ? Rh.call((r || lm).querySelectorAll(l), 0)
        : Sn(l)
          ? f2(l, a)
          : qy(l)
            ? Rh.call(l, 0)
            : l
              ? [l]
              : [];
  },
  Oh = function (l) {
    return (
      (l = Ul(l)[0] || Co("Invalid scope") || {}),
      function (r) {
        var a = l.current || l.nativeElement || l;
        return Ul(
          r,
          a.querySelectorAll
            ? a
            : a === l
              ? Co("Invalid scope") || lm.createElement("div")
              : l,
        );
      }
    );
  },
  Ly = function (l) {
    return l.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Yy = function (l) {
    if (Ot(l)) return l;
    var r = ca(l) ? l : { each: l },
      a = $i(r.ease),
      s = r.from || 0,
      c = parseFloat(r.base) || 0,
      d = {},
      h = s > 0 && s < 1,
      m = isNaN(s) || h,
      p = r.axis,
      y = s,
      _ = s;
    return (
      an(s)
        ? (y = _ = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
        : !h && m && ((y = s[0]), (_ = s[1])),
      function (T, x, w) {
        var S = (w || r).length,
          E = d[S],
          k,
          j,
          G,
          U,
          Y,
          V,
          R,
          q,
          Q;
        if (!E) {
          if (((Q = r.grid === "auto" ? 0 : (r.grid || [1, jl])[1]), !Q)) {
            for (
              R = -jl;
              R < (R = w[Q++].getBoundingClientRect().left) && Q < S;
            );
            Q < S && Q--;
          }
          for (
            E = d[S] = [],
              k = m ? Math.min(Q, S) * y - 0.5 : s % Q,
              j = Q === jl ? 0 : m ? (S * _) / Q - 0.5 : (s / Q) | 0,
              R = 0,
              q = jl,
              V = 0;
            V < S;
            V++
          )
            ((G = (V % Q) - k),
              (U = j - ((V / Q) | 0)),
              (E[V] = Y = p ? Math.abs(p === "y" ? U : G) : Ty(G * G + U * U)),
              Y > R && (R = Y),
              Y < q && (q = Y));
          (s === "random" && Ly(E),
            (E.max = R - q),
            (E.min = q),
            (E.v = S =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (Q > S
                    ? S - 1
                    : p
                      ? p === "y"
                        ? S / Q
                        : Q
                      : Math.max(Q, S / Q)) ||
                0) * (s === "edges" ? -1 : 1)),
            (E.b = S < 0 ? c - S : c),
            (E.u = xn(r.amount || r.each) || 0),
            (a = a && S < 0 ? Wy(a) : a));
        }
        return (
          (S = (E[T] - E.min) / E.max || 0),
          Ct(E.b + (a ? a(S) : S) * E.v) + E.u
        );
      }
    );
  },
  Dh = function (l) {
    var r = Math.pow(10, ((l + "").split(".")[1] || "").length);
    return function (a) {
      var s = Ct(Math.round(parseFloat(a) / l) * l * r);
      return (s - (s % 1)) / r + (ja(a) ? 0 : xn(a));
    };
  },
  Gy = function (l, r) {
    var a = Sn(l),
      s,
      c;
    return (
      !a &&
        ca(l) &&
        ((s = a = l.radius || jl),
        l.values
          ? ((l = Ul(l.values)), (c = !ja(l[0])) && (s *= s))
          : (l = Dh(l.increment))),
      Ti(
        r,
        a
          ? Ot(l)
            ? function (d) {
                return ((c = l(d)), Math.abs(c - d) <= s ? c : d);
              }
            : function (d) {
                for (
                  var h = parseFloat(c ? d.x : d),
                    m = parseFloat(c ? d.y : 0),
                    p = jl,
                    y = 0,
                    _ = l.length,
                    T,
                    x;
                  _--;
                )
                  (c
                    ? ((T = l[_].x - h), (x = l[_].y - m), (T = T * T + x * x))
                    : (T = Math.abs(l[_] - h)),
                    T < p && ((p = T), (y = _)));
                return (
                  (y = !s || p <= s ? l[y] : d),
                  c || y === d || ja(d) ? y : y + xn(d)
                );
              }
          : Dh(l),
      )
    );
  },
  Xy = function (l, r, a, s) {
    return Ti(Sn(l) ? !r : a === !0 ? !!(a = 0) : !s, function () {
      return Sn(l)
        ? l[~~(Math.random() * l.length)]
        : (a = a || 1e-5) &&
            (s = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) &&
            Math.floor(
              Math.round((l - a / 2 + Math.random() * (r - l + a * 0.99)) / a) *
                a *
                s,
            ) / s;
    });
  },
  d2 = function () {
    for (var l = arguments.length, r = new Array(l), a = 0; a < l; a++)
      r[a] = arguments[a];
    return function (s) {
      return r.reduce(function (c, d) {
        return d(c);
      }, s);
    };
  },
  h2 = function (l, r) {
    return function (a) {
      return l(parseFloat(a)) + (r || xn(a));
    };
  },
  m2 = function (l, r, a) {
    return Qy(l, r, 0, 1, a);
  },
  Vy = function (l, r, a) {
    return Ti(a, function (s) {
      return l[~~r(s)];
    });
  },
  p2 = function u(l, r, a) {
    var s = r - l;
    return Sn(l)
      ? Vy(l, u(0, l.length), r)
      : Ti(a, function (c) {
          return ((s + ((c - l) % s)) % s) + l;
        });
  },
  g2 = function u(l, r, a) {
    var s = r - l,
      c = s * 2;
    return Sn(l)
      ? Vy(l, u(0, l.length - 1), r)
      : Ti(a, function (d) {
          return ((d = (c + ((d - l) % c)) % c || 0), l + (d > s ? c - d : d));
        });
  },
  Eo = function (l) {
    return l.replace(Jb, function (r) {
      var a = r.indexOf("[") + 1,
        s = r.substring(a || 7, a ? r.indexOf("]") : r.length - 1).split(Pb);
      return Xy(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5);
    });
  },
  Qy = function (l, r, a, s, c) {
    var d = r - l,
      h = s - a;
    return Ti(c, function (m) {
      return a + (((m - l) / d) * h || 0);
    });
  },
  y2 = function u(l, r, a, s) {
    var c = isNaN(l + r)
      ? 0
      : function (x) {
          return (1 - x) * l + x * r;
        };
    if (!c) {
      var d = an(l),
        h = {},
        m,
        p,
        y,
        _,
        T;
      if ((a === !0 && (s = 1) && (a = null), d))
        ((l = { p: l }), (r = { p: r }));
      else if (Sn(l) && !Sn(r)) {
        for (y = [], _ = l.length, T = _ - 2, p = 1; p < _; p++)
          y.push(u(l[p - 1], l[p]));
        (_--,
          (c = function (w) {
            w *= _;
            var S = Math.min(T, ~~w);
            return y[S](w - S);
          }),
          (a = r));
      } else s || (l = ls(Sn(l) ? [] : {}, l));
      if (!y) {
        for (m in r) cm.call(h, l, m, "get", r[m]);
        c = function (w) {
          return hm(w, h) || (d ? l.p : l);
        };
      }
    }
    return Ti(a, c);
  },
  j1 = function (l, r, a) {
    var s = l.labels,
      c = jl,
      d,
      h,
      m;
    for (d in s)
      ((h = s[d] - r),
        h < 0 == !!a && h && c > (h = Math.abs(h)) && ((m = d), (c = h)));
    return m;
  },
  ul = function (l, r, a) {
    var s = l.vars,
      c = s[r],
      d = xt,
      h = l._ctx,
      m,
      p,
      y;
    if (c)
      return (
        (m = s[r + "Params"]),
        (p = s.callbackScope || l),
        a && pi.length && Au(),
        h && (xt = h),
        (y = m ? c.apply(p, m) : c.call(p)),
        (xt = d),
        y
      );
  },
  ao = function (l) {
    return (
      vi(l),
      l.scrollTrigger && l.scrollTrigger.kill(!!dn),
      l.progress() < 1 && ul(l, "onInterrupt"),
      l
    );
  },
  Fr,
  Zy = [],
  Ky = function (l) {
    if (l)
      if (((l = (!l.name && l.default) || l), nm() || l.headless)) {
        var r = l.name,
          a = Ot(l),
          s =
            r && !a && l.init
              ? function () {
                  this._props = [];
                }
              : l,
          c = {
            init: wo,
            render: hm,
            add: cm,
            kill: D2,
            modifier: O2,
            rawVars: 0,
          },
          d = {
            targetTest: 0,
            get: 0,
            getSetter: dm,
            aliases: {},
            register: 0,
          };
        if ((rs(), l !== s)) {
          if (rl[r]) return;
          (ml(s, ml(Cu(l, c), d)),
            ls(s.prototype, ls(c, Cu(l, d))),
            (rl[(s.prop = r)] = s),
            l.targetTest && (pu.push(s), (im[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin"));
        }
        (My(r, s), l.register && l.register(Kn, s, Qn));
      } else Zy.push(l);
  },
  st = 255,
  io = {
    aqua: [0, st, st],
    lime: [0, st, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, st],
    navy: [0, 0, 128],
    white: [st, st, st],
    olive: [128, 128, 0],
    yellow: [st, st, 0],
    orange: [st, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [st, 0, 0],
    pink: [st, 192, 203],
    cyan: [0, st, st],
    transparent: [st, st, st, 0],
  },
  oh = function (l, r, a) {
    return (
      (l += l < 0 ? 1 : l > 1 ? -1 : 0),
      ((l * 6 < 1
        ? r + (a - r) * l * 6
        : l < 0.5
          ? a
          : l * 3 < 2
            ? r + (a - r) * (2 / 3 - l) * 6
            : r) *
        st +
        0.5) |
        0
    );
  },
  Fy = function (l, r, a) {
    var s = l ? (ja(l) ? [l >> 16, (l >> 8) & st, l & st] : 0) : io.black,
      c,
      d,
      h,
      m,
      p,
      y,
      _,
      T,
      x,
      w;
    if (!s) {
      if ((l.substr(-1) === "," && (l = l.substr(0, l.length - 1)), io[l]))
        s = io[l];
      else if (l.charAt(0) === "#") {
        if (
          (l.length < 6 &&
            ((c = l.charAt(1)),
            (d = l.charAt(2)),
            (h = l.charAt(3)),
            (l =
              "#" +
              c +
              c +
              d +
              d +
              h +
              h +
              (l.length === 5 ? l.charAt(4) + l.charAt(4) : ""))),
          l.length === 9)
        )
          return (
            (s = parseInt(l.substr(1, 6), 16)),
            [s >> 16, (s >> 8) & st, s & st, parseInt(l.substr(7), 16) / 255]
          );
        ((l = parseInt(l.substr(1), 16)),
          (s = [l >> 16, (l >> 8) & st, l & st]));
      } else if (l.substr(0, 3) === "hsl") {
        if (((s = w = l.match(N1)), !r))
          ((m = (+s[0] % 360) / 360),
            (p = +s[1] / 100),
            (y = +s[2] / 100),
            (d = y <= 0.5 ? y * (p + 1) : y + p - y * p),
            (c = y * 2 - d),
            s.length > 3 && (s[3] *= 1),
            (s[0] = oh(m + 1 / 3, c, d)),
            (s[1] = oh(m, c, d)),
            (s[2] = oh(m - 1 / 3, c, d)));
        else if (~l.indexOf("="))
          return ((s = l.match(Cy)), a && s.length < 4 && (s[3] = 1), s);
      } else s = l.match(N1) || io.transparent;
      s = s.map(Number);
    }
    return (
      r &&
        !w &&
        ((c = s[0] / st),
        (d = s[1] / st),
        (h = s[2] / st),
        (_ = Math.max(c, d, h)),
        (T = Math.min(c, d, h)),
        (y = (_ + T) / 2),
        _ === T
          ? (m = p = 0)
          : ((x = _ - T),
            (p = y > 0.5 ? x / (2 - _ - T) : x / (_ + T)),
            (m =
              _ === c
                ? (d - h) / x + (d < h ? 6 : 0)
                : _ === d
                  ? (h - c) / x + 2
                  : (c - d) / x + 4),
            (m *= 60)),
        (s[0] = ~~(m + 0.5)),
        (s[1] = ~~(p * 100 + 0.5)),
        (s[2] = ~~(y * 100 + 0.5))),
      a && s.length < 4 && (s[3] = 1),
      s
    );
  },
  Jy = function (l) {
    var r = [],
      a = [],
      s = -1;
    return (
      l.split(gi).forEach(function (c) {
        var d = c.match(Kr) || [];
        (r.push.apply(r, d), a.push((s += d.length + 1)));
      }),
      (r.c = a),
      r
    );
  },
  U1 = function (l, r, a) {
    var s = "",
      c = (l + s).match(gi),
      d = r ? "hsla(" : "rgba(",
      h = 0,
      m,
      p,
      y,
      _;
    if (!c) return l;
    if (
      ((c = c.map(function (T) {
        return (
          (T = Fy(T, r, 1)) &&
          d +
            (r ? T[0] + "," + T[1] + "%," + T[2] + "%," + T[3] : T.join(",")) +
            ")"
        );
      })),
      a && ((y = Jy(l)), (m = a.c), m.join(s) !== y.c.join(s)))
    )
      for (p = l.replace(gi, "1").split(Kr), _ = p.length - 1; h < _; h++)
        s +=
          p[h] +
          (~m.indexOf(h)
            ? c.shift() || d + "0,0,0,0)"
            : (y.length ? y : c.length ? c : a).shift());
    if (!p)
      for (p = l.split(gi), _ = p.length - 1; h < _; h++) s += p[h] + c[h];
    return s + p[_];
  },
  gi = (function () {
    var u =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      l;
    for (l in io) u += "|" + l + "\\b";
    return new RegExp(u + ")", "gi");
  })(),
  v2 = /hsl[a]?\(/,
  Py = function (l) {
    var r = l.join(" "),
      a;
    if (((gi.lastIndex = 0), gi.test(r)))
      return (
        (a = v2.test(r)),
        (l[1] = U1(l[1], a)),
        (l[0] = U1(l[0], a, Jy(l[1]))),
        !0
      );
  },
  zo,
  ol = (function () {
    var u = Date.now,
      l = 500,
      r = 33,
      a = u(),
      s = a,
      c = 1e3 / 240,
      d = c,
      h = [],
      m,
      p,
      y,
      _,
      T,
      x,
      w = function S(E) {
        var k = u() - s,
          j = E === !0,
          G,
          U,
          Y,
          V;
        if (
          ((k > l || k < 0) && (a += k - r),
          (s += k),
          (Y = s - a),
          (G = Y - d),
          (G > 0 || j) &&
            ((V = ++_.frame),
            (T = Y - _.time * 1e3),
            (_.time = Y = Y / 1e3),
            (d += G + (G >= c ? 4 : c - G)),
            (U = 1)),
          j || (m = p(S)),
          U)
        )
          for (x = 0; x < h.length; x++) h[x](Y, T, V, E);
      };
    return (
      (_ = {
        time: 0,
        frame: 0,
        tick: function () {
          w(!0);
        },
        deltaRatio: function (E) {
          return T / (1e3 / (E || 60));
        },
        wake: function () {
          Ey &&
            (!Eh &&
              nm() &&
              ((la = Eh = window),
              (lm = la.document || {}),
              (hl.gsap = Kn),
              (la.gsapVersions || (la.gsapVersions = [])).push(Kn.version),
              zy(Tu || la.GreenSockGlobals || (!la.gsap && la) || {}),
              Zy.forEach(Ky)),
            (y = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            m && _.sleep(),
            (p =
              y ||
              function (E) {
                return setTimeout(E, (d - _.time * 1e3 + 1) | 0);
              }),
            (zo = 1),
            w(2));
        },
        sleep: function () {
          ((y ? cancelAnimationFrame : clearTimeout)(m), (zo = 0), (p = wo));
        },
        lagSmoothing: function (E, k) {
          ((l = E || 1 / 0), (r = Math.min(k || 33, l)));
        },
        fps: function (E) {
          ((c = 1e3 / (E || 240)), (d = _.time * 1e3 + c));
        },
        add: function (E, k, j) {
          var G = k
            ? function (U, Y, V, R) {
                (E(U, Y, V, R), _.remove(G));
              }
            : E;
          return (_.remove(E), h[j ? "unshift" : "push"](G), rs(), G);
        },
        remove: function (E, k) {
          ~(k = h.indexOf(E)) && h.splice(k, 1) && x >= k && x--;
        },
        _listeners: h,
      }),
      _
    );
  })(),
  rs = function () {
    return !zo && ol.wake();
  },
  Ke = {},
  _2 = /^[\d.\-M][\d.\-,\s]/,
  x2 = /["']/g,
  b2 = function (l) {
    for (
      var r = {},
        a = l.substr(1, l.length - 3).split(":"),
        s = a[0],
        c = 1,
        d = a.length,
        h,
        m,
        p;
      c < d;
      c++
    )
      ((m = a[c]),
        (h = c !== d - 1 ? m.lastIndexOf(",") : m.length),
        (p = m.substr(0, h)),
        (r[s] = isNaN(p) ? p.replace(x2, "").trim() : +p),
        (s = m.substr(h + 1).trim()));
    return r;
  },
  S2 = function (l) {
    var r = l.indexOf("(") + 1,
      a = l.indexOf(")"),
      s = l.indexOf("(", r);
    return l.substring(r, ~s && s < a ? l.indexOf(")", a + 1) : a);
  },
  T2 = function (l) {
    var r = (l + "").split("("),
      a = Ke[r[0]];
    return a && r.length > 1 && a.config
      ? a.config.apply(
          null,
          ~l.indexOf("{") ? [b2(r[1])] : S2(l).split(",").map(Dy),
        )
      : Ke._CE && _2.test(l)
        ? Ke._CE("", l)
        : a;
  },
  Wy = function (l) {
    return function (r) {
      return 1 - l(1 - r);
    };
  },
  $y = function u(l, r) {
    for (var a = l._first, s; a; )
      (a instanceof On
        ? u(a, r)
        : a.vars.yoyoEase &&
          (!a._yoyo || !a._repeat) &&
          a._yoyo !== r &&
          (a.timeline
            ? u(a.timeline, r)
            : ((s = a._ease),
              (a._ease = a._yEase),
              (a._yEase = s),
              (a._yoyo = r))),
        (a = a._next));
  },
  $i = function (l, r) {
    return (l && (Ot(l) ? l : Ke[l] || T2(l))) || r;
  },
  rr = function (l, r, a, s) {
    (a === void 0 &&
      (a = function (m) {
        return 1 - r(1 - m);
      }),
      s === void 0 &&
        (s = function (m) {
          return m < 0.5 ? r(m * 2) / 2 : 1 - r((1 - m) * 2) / 2;
        }));
    var c = { easeIn: r, easeOut: a, easeInOut: s },
      d;
    return (
      Vn(l, function (h) {
        ((Ke[h] = hl[h] = c), (Ke[(d = h.toLowerCase())] = a));
        for (var m in c)
          Ke[
            d + (m === "easeIn" ? ".in" : m === "easeOut" ? ".out" : ".inOut")
          ] = Ke[h + "." + m] = c[m];
      }),
      c
    );
  },
  Iy = function (l) {
    return function (r) {
      return r < 0.5 ? (1 - l(1 - r * 2)) / 2 : 0.5 + l((r - 0.5) * 2) / 2;
    };
  },
  ch = function u(l, r, a) {
    var s = r >= 1 ? r : 1,
      c = (a || (l ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      d = (c / wh) * (Math.asin(1 / s) || 0),
      h = function (y) {
        return y === 1 ? 1 : s * Math.pow(2, -10 * y) * Fb((y - d) * c) + 1;
      },
      m =
        l === "out"
          ? h
          : l === "in"
            ? function (p) {
                return 1 - h(1 - p);
              }
            : Iy(h);
    return (
      (c = wh / c),
      (m.config = function (p, y) {
        return u(l, p, y);
      }),
      m
    );
  },
  uh = function u(l, r) {
    r === void 0 && (r = 1.70158);
    var a = function (d) {
        return d ? --d * d * ((r + 1) * d + r) + 1 : 0;
      },
      s =
        l === "out"
          ? a
          : l === "in"
            ? function (c) {
                return 1 - a(1 - c);
              }
            : Iy(a);
    return (
      (s.config = function (c) {
        return u(l, c);
      }),
      s
    );
  };
Vn("Linear,Quad,Cubic,Quart,Quint,Strong", function (u, l) {
  var r = l < 5 ? l + 1 : l;
  rr(
    u + ",Power" + (r - 1),
    l
      ? function (a) {
          return Math.pow(a, r);
        }
      : function (a) {
          return a;
        },
    function (a) {
      return 1 - Math.pow(1 - a, r);
    },
    function (a) {
      return a < 0.5
        ? Math.pow(a * 2, r) / 2
        : 1 - Math.pow((1 - a) * 2, r) / 2;
    },
  );
});
Ke.Linear.easeNone = Ke.none = Ke.Linear.easeIn;
rr("Elastic", ch("in"), ch("out"), ch());
(function (u, l) {
  var r = 1 / l,
    a = 2 * r,
    s = 2.5 * r,
    c = function (h) {
      return h < r
        ? u * h * h
        : h < a
          ? u * Math.pow(h - 1.5 / l, 2) + 0.75
          : h < s
            ? u * (h -= 2.25 / l) * h + 0.9375
            : u * Math.pow(h - 2.625 / l, 2) + 0.984375;
    };
  rr(
    "Bounce",
    function (d) {
      return 1 - c(1 - d);
    },
    c,
  );
})(7.5625, 2.75);
rr("Expo", function (u) {
  return Math.pow(2, 10 * (u - 1)) * u + u * u * u * u * u * u * (1 - u);
});
rr("Circ", function (u) {
  return -(Ty(1 - u * u) - 1);
});
rr("Sine", function (u) {
  return u === 1 ? 1 : -Kb(u * Qb) + 1;
});
rr("Back", uh("in"), uh("out"), uh());
Ke.SteppedEase =
  Ke.steps =
  hl.SteppedEase =
    {
      config: function (l, r) {
        l === void 0 && (l = 1);
        var a = 1 / l,
          s = l + (r ? 0 : 1),
          c = r ? 1 : 0,
          d = 1 - ot;
        return function (h) {
          return (((s * Uo(0, d, h)) | 0) + c) * a;
        };
      },
    };
ns.ease = Ke["quad.out"];
Vn(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (u) {
    return (rm += u + "," + u + "Params,");
  },
);
var ev = function (l, r) {
    ((this.id = Zb++),
      (l._gsap = this),
      (this.target = l),
      (this.harness = r),
      (this.get = r ? r.get : Ry),
      (this.set = r ? r.getSetter : dm));
  },
  Mo = (function () {
    function u(r) {
      ((this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        is(this, +r.duration, 1, 1),
        (this.data = r.data),
        xt && ((this._ctx = xt), xt.data.push(this)),
        zo || ol.wake());
    }
    var l = u.prototype;
    return (
      (l.delay = function (a) {
        return a || a === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + a - this._delay),
            (this._delay = a),
            this)
          : this._delay;
      }),
      (l.duration = function (a) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a,
            )
          : this.totalDuration() && this._dur;
      }),
      (l.totalDuration = function (a) {
        return arguments.length
          ? ((this._dirty = 0),
            is(
              this,
              this._repeat < 0
                ? a
                : (a - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (l.totalTime = function (a, s) {
        if ((rs(), !arguments.length)) return this._tTime;
        var c = this._dp;
        if (c && c.smoothChildTiming && this._ts) {
          for (qu(this, a), !c._dp || c.parent || Uy(c, this); c && c.parent; )
            (c.parent._time !==
              c._start +
                (c._ts >= 0
                  ? c._tTime / c._ts
                  : (c.totalDuration() - c._tTime) / -c._ts) &&
              c.totalTime(c._tTime, !0),
              (c = c.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && a < this._tDur) ||
              (this._ts < 0 && a > 0) ||
              (!this._tDur && !a)) &&
            ia(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== a ||
            (!this._dur && !s) ||
            (this._initted && Math.abs(this._zTime) === ot) ||
            (!this._initted && this._dur && a) ||
            (!a && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = a), Oy(this, a, s)),
          this
        );
      }),
      (l.time = function (a, s) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), a + D1(this)) %
                (this._dur + this._rDelay) || (a ? this._dur : 0),
              s,
            )
          : this._time;
      }),
      (l.totalProgress = function (a, s) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * a, s)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (l.progress = function (a, s) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) +
                D1(this),
              s,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (l.iteration = function (a, s) {
        var c = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (a - 1) * c, s)
          : this._repeat
            ? as(this._tTime, c) + 1
            : 1;
      }),
      (l.timeScale = function (a, s) {
        if (!arguments.length) return this._rts === -ot ? 0 : this._rts;
        if (this._rts === a) return this;
        var c =
          this.parent && this._ts ? wu(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +a || 0),
          (this._ts = this._ps || a === -ot ? 0 : this._rts),
          this.totalTime(
            Uo(-Math.abs(this._delay), this.totalDuration(), c),
            s !== !1,
          ),
          Bu(this),
          a2(this)
        );
      }),
      (l.paused = function (a) {
        return arguments.length
          ? (this._ps !== a &&
              ((this._ps = a),
              a
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (rs(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ot &&
                      (this._tTime -= ot),
                  ))),
            this)
          : this._ps;
      }),
      (l.startTime = function (a) {
        if (arguments.length) {
          this._start = Ct(a);
          var s = this.parent || this._dp;
          return (
            s &&
              (s._sort || !this.parent) &&
              ia(s, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (l.endTime = function (a) {
        return (
          this._start +
          (Xn(a) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (l.rawTime = function (a) {
        var s = this.parent || this._dp;
        return s
          ? a &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? wu(s.rawTime(a), this)
              : this._tTime
          : this._tTime;
      }),
      (l.revert = function (a) {
        a === void 0 && (a = e2);
        var s = dn;
        return (
          (dn = a),
          om(this) &&
            (this.timeline && this.timeline.revert(a),
            this.totalTime(-0.01, a.suppressEvents)),
          this.data !== "nested" && a.kill !== !1 && this.kill(),
          (dn = s),
          this
        );
      }),
      (l.globalTime = function (a) {
        for (var s = this, c = arguments.length ? a : s.rawTime(); s; )
          ((c = s._start + c / (Math.abs(s._ts) || 1)), (s = s._dp));
        return !this.parent && this._sat ? this._sat.globalTime(a) : c;
      }),
      (l.repeat = function (a) {
        return arguments.length
          ? ((this._repeat = a === 1 / 0 ? -2 : a), k1(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (l.repeatDelay = function (a) {
        if (arguments.length) {
          var s = this._time;
          return ((this._rDelay = a), k1(this), s ? this.time(s) : this);
        }
        return this._rDelay;
      }),
      (l.yoyo = function (a) {
        return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
      }),
      (l.seek = function (a, s) {
        return this.totalTime(Ol(this, a), Xn(s));
      }),
      (l.restart = function (a, s) {
        return (
          this.play().totalTime(a ? -this._delay : 0, Xn(s)),
          this._dur || (this._zTime = -ot),
          this
        );
      }),
      (l.play = function (a, s) {
        return (a != null && this.seek(a, s), this.reversed(!1).paused(!1));
      }),
      (l.reverse = function (a, s) {
        return (
          a != null && this.seek(a || this.totalDuration(), s),
          this.reversed(!0).paused(!1)
        );
      }),
      (l.pause = function (a, s) {
        return (a != null && this.seek(a, s), this.paused(!0));
      }),
      (l.resume = function () {
        return this.paused(!1);
      }),
      (l.reversed = function (a) {
        return arguments.length
          ? (!!a !== this.reversed() &&
              this.timeScale(-this._rts || (a ? -ot : 0)),
            this)
          : this._rts < 0;
      }),
      (l.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -ot), this);
      }),
      (l.isActive = function () {
        var a = this.parent || this._dp,
          s = this._start,
          c;
        return !!(
          !a ||
          (this._ts &&
            this._initted &&
            a.isActive() &&
            (c = a.rawTime(!0)) >= s &&
            c < this.endTime(!0) - ot)
        );
      }),
      (l.eventCallback = function (a, s, c) {
        var d = this.vars;
        return arguments.length > 1
          ? (s
              ? ((d[a] = s),
                c && (d[a + "Params"] = c),
                a === "onUpdate" && (this._onUpdate = s))
              : delete d[a],
            this)
          : d[a];
      }),
      (l.then = function (a) {
        var s = this,
          c = s._prom;
        return new Promise(function (d) {
          var h = Ot(a) ? a : ky,
            m = function () {
              var y = s.then;
              ((s.then = null),
                c && c(),
                Ot(h) && (h = h(s)) && (h.then || h === s) && (s.then = y),
                d(h),
                (s.then = y));
            };
          (s._initted && s.totalProgress() === 1 && s._ts >= 0) ||
          (!s._tTime && s._ts < 0)
            ? m()
            : (s._prom = m);
        });
      }),
      (l.kill = function () {
        ao(this);
      }),
      u
    );
  })();
ml(Mo.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ot,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var On = (function (u) {
  Sy(l, u);
  function l(a, s) {
    var c;
    return (
      a === void 0 && (a = {}),
      (c = u.call(this, a) || this),
      (c.labels = {}),
      (c.smoothChildTiming = !!a.smoothChildTiming),
      (c.autoRemoveChildren = !!a.autoRemoveChildren),
      (c._sort = Xn(a.sortChildren)),
      wt && ia(a.parent || wt, Na(c), s),
      a.reversed && c.reverse(),
      a.paused && c.paused(!0),
      a.scrollTrigger && Hy(Na(c), a.scrollTrigger),
      c
    );
  }
  var r = l.prototype;
  return (
    (r.to = function (s, c, d) {
      return (ho(0, arguments, this), this);
    }),
    (r.from = function (s, c, d) {
      return (ho(1, arguments, this), this);
    }),
    (r.fromTo = function (s, c, d, h) {
      return (ho(2, arguments, this), this);
    }),
    (r.set = function (s, c, d) {
      return (
        (c.duration = 0),
        (c.parent = this),
        fo(c).repeatDelay || (c.repeat = 0),
        (c.immediateRender = !!c.immediateRender),
        new Ft(s, c, Ol(this, d), 1),
        this
      );
    }),
    (r.call = function (s, c, d) {
      return ia(this, Ft.delayedCall(0, s, c), d);
    }),
    (r.staggerTo = function (s, c, d, h, m, p, y) {
      return (
        (d.duration = c),
        (d.stagger = d.stagger || h),
        (d.onComplete = p),
        (d.onCompleteParams = y),
        (d.parent = this),
        new Ft(s, d, Ol(this, m)),
        this
      );
    }),
    (r.staggerFrom = function (s, c, d, h, m, p, y) {
      return (
        (d.runBackwards = 1),
        (fo(d).immediateRender = Xn(d.immediateRender)),
        this.staggerTo(s, c, d, h, m, p, y)
      );
    }),
    (r.staggerFromTo = function (s, c, d, h, m, p, y, _) {
      return (
        (h.startAt = d),
        (fo(h).immediateRender = Xn(h.immediateRender)),
        this.staggerTo(s, c, h, m, p, y, _)
      );
    }),
    (r.render = function (s, c, d) {
      var h = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        p = this._dur,
        y = s <= 0 ? 0 : Ct(s),
        _ = this._zTime < 0 != s < 0 && (this._initted || !p),
        T,
        x,
        w,
        S,
        E,
        k,
        j,
        G,
        U,
        Y,
        V,
        R;
      if (
        (this !== wt && y > m && s >= 0 && (y = m), y !== this._tTime || d || _)
      ) {
        if (
          (h !== this._time &&
            p &&
            ((y += this._time - h), (s += this._time - h)),
          (T = y),
          (U = this._start),
          (G = this._ts),
          (k = !G),
          _ && (p || (h = this._zTime), (s || !c) && (this._zTime = s)),
          this._repeat)
        ) {
          if (
            ((V = this._yoyo),
            (E = p + this._rDelay),
            this._repeat < -1 && s < 0)
          )
            return this.totalTime(E * 100 + s, c, d);
          if (
            ((T = Ct(y % E)),
            y === m
              ? ((S = this._repeat), (T = p))
              : ((Y = Ct(y / E)),
                (S = ~~Y),
                S && S === Y && ((T = p), S--),
                T > p && (T = p)),
            (Y = as(this._tTime, E)),
            !h &&
              this._tTime &&
              Y !== S &&
              this._tTime - Y * E - this._dur <= 0 &&
              (Y = S),
            V && S & 1 && ((T = p - T), (R = 1)),
            S !== Y && !this._lock)
          ) {
            var q = V && Y & 1,
              Q = q === (V && S & 1);
            if (
              (S < Y && (q = !q),
              (h = q ? 0 : y % p ? p : y),
              (this._lock = 1),
              (this.render(h || (R ? 0 : Ct(S * E)), c, !p)._lock = 0),
              (this._tTime = y),
              !c && this.parent && ul(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !R &&
                ((this.invalidate()._lock = 1), (Y = S)),
              (h && h !== this._time) ||
                k !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((p = this._dur),
              (m = this._tDur),
              Q &&
                ((this._lock = 2),
                (h = q ? p : -1e-4),
                this.render(h, !0),
                this.vars.repeatRefresh && !R && this.invalidate()),
              (this._lock = 0),
              !this._ts && !k)
            )
              return this;
            $y(this, R);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((j = o2(this, Ct(h), Ct(T))), j && (y -= T - (T = j._start))),
          (this._tTime = y),
          (this._time = T),
          (this._act = !G),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = s),
            (h = 0)),
          !h && y && p && !c && !Y && (ul(this, "onStart"), this._tTime !== y))
        )
          return this;
        if (T >= h && s >= 0)
          for (x = this._first; x; ) {
            if (
              ((w = x._next), (x._act || T >= x._start) && x._ts && j !== x)
            ) {
              if (x.parent !== this) return this.render(s, c, d);
              if (
                (x.render(
                  x._ts > 0
                    ? (T - x._start) * x._ts
                    : (x._dirty ? x.totalDuration() : x._tDur) +
                        (T - x._start) * x._ts,
                  c,
                  d,
                ),
                T !== this._time || (!this._ts && !k))
              ) {
                ((j = 0), w && (y += this._zTime = -ot));
                break;
              }
            }
            x = w;
          }
        else {
          x = this._last;
          for (var I = s < 0 ? s : T; x; ) {
            if (((w = x._prev), (x._act || I <= x._end) && x._ts && j !== x)) {
              if (x.parent !== this) return this.render(s, c, d);
              if (
                (x.render(
                  x._ts > 0
                    ? (I - x._start) * x._ts
                    : (x._dirty ? x.totalDuration() : x._tDur) +
                        (I - x._start) * x._ts,
                  c,
                  d || (dn && om(x)),
                ),
                T !== this._time || (!this._ts && !k))
              ) {
                ((j = 0), w && (y += this._zTime = I ? -ot : ot));
                break;
              }
            }
            x = w;
          }
        }
        if (
          j &&
          !c &&
          (this.pause(),
          (j.render(T >= h ? 0 : -ot)._zTime = T >= h ? 1 : -1),
          this._ts)
        )
          return ((this._start = U), Bu(this), this.render(s, c, d));
        (this._onUpdate && !c && ul(this, "onUpdate", !0),
          ((y === m && this._tTime >= this.totalDuration()) || (!y && h)) &&
            (U === this._start || Math.abs(G) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((s || !p) &&
                ((y === m && this._ts > 0) || (!y && this._ts < 0)) &&
                vi(this, 1),
              !c &&
                !(s < 0 && !h) &&
                (y || h || !m) &&
                (ul(
                  this,
                  y === m && s >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(y < m && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (r.add = function (s, c) {
      var d = this;
      if ((ja(c) || (c = Ol(this, c, s)), !(s instanceof Mo))) {
        if (Sn(s))
          return (
            s.forEach(function (h) {
              return d.add(h, c);
            }),
            this
          );
        if (an(s)) return this.addLabel(s, c);
        if (Ot(s)) s = Ft.delayedCall(0, s);
        else return this;
      }
      return this !== s ? ia(this, s, c) : this;
    }),
    (r.getChildren = function (s, c, d, h) {
      (s === void 0 && (s = !0),
        c === void 0 && (c = !0),
        d === void 0 && (d = !0),
        h === void 0 && (h = -jl));
      for (var m = [], p = this._first; p; )
        (p._start >= h &&
          (p instanceof Ft
            ? c && m.push(p)
            : (d && m.push(p), s && m.push.apply(m, p.getChildren(!0, c, d)))),
          (p = p._next));
      return m;
    }),
    (r.getById = function (s) {
      for (var c = this.getChildren(1, 1, 1), d = c.length; d--; )
        if (c[d].vars.id === s) return c[d];
    }),
    (r.remove = function (s) {
      return an(s)
        ? this.removeLabel(s)
        : Ot(s)
          ? this.killTweensOf(s)
          : (s.parent === this && Hu(this, s),
            s === this._recent && (this._recent = this._last),
            Wi(this));
    }),
    (r.totalTime = function (s, c) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Ct(
              ol.time -
                (this._ts > 0
                  ? s / this._ts
                  : (this.totalDuration() - s) / -this._ts),
            )),
          u.prototype.totalTime.call(this, s, c),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (s, c) {
      return ((this.labels[s] = Ol(this, c)), this);
    }),
    (r.removeLabel = function (s) {
      return (delete this.labels[s], this);
    }),
    (r.addPause = function (s, c, d) {
      var h = Ft.delayedCall(0, c || wo, d);
      return (
        (h.data = "isPause"),
        (this._hasPause = 1),
        ia(this, h, Ol(this, s))
      );
    }),
    (r.removePause = function (s) {
      var c = this._first;
      for (s = Ol(this, s); c; )
        (c._start === s && c.data === "isPause" && vi(c), (c = c._next));
    }),
    (r.killTweensOf = function (s, c, d) {
      for (var h = this.getTweensOf(s, d), m = h.length; m--; )
        ui !== h[m] && h[m].kill(s, c);
      return this;
    }),
    (r.getTweensOf = function (s, c) {
      for (var d = [], h = Ul(s), m = this._first, p = ja(c), y; m; )
        (m instanceof Ft
          ? t2(m._targets, h) &&
            (p
              ? (!ui || (m._initted && m._ts)) &&
                m.globalTime(0) <= c &&
                m.globalTime(m.totalDuration()) > c
              : !c || m.isActive()) &&
            d.push(m)
          : (y = m.getTweensOf(h, c)).length && d.push.apply(d, y),
          (m = m._next));
      return d;
    }),
    (r.tweenTo = function (s, c) {
      c = c || {};
      var d = this,
        h = Ol(d, s),
        m = c,
        p = m.startAt,
        y = m.onStart,
        _ = m.onStartParams,
        T = m.immediateRender,
        x,
        w = Ft.to(
          d,
          ml(
            {
              ease: c.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: h,
              overwrite: "auto",
              duration:
                c.duration ||
                Math.abs(
                  (h - (p && "time" in p ? p.time : d._time)) / d.timeScale(),
                ) ||
                ot,
              onStart: function () {
                if ((d.pause(), !x)) {
                  var E =
                    c.duration ||
                    Math.abs(
                      (h - (p && "time" in p ? p.time : d._time)) /
                        d.timeScale(),
                    );
                  (w._dur !== E && is(w, E, 0, 1).render(w._time, !0, !0),
                    (x = 1));
                }
                y && y.apply(w, _ || []);
              },
            },
            c,
          ),
        );
      return T ? w.render(0) : w;
    }),
    (r.tweenFromTo = function (s, c, d) {
      return this.tweenTo(c, ml({ startAt: { time: Ol(this, s) } }, d));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (s) {
      return (s === void 0 && (s = this._time), j1(this, Ol(this, s)));
    }),
    (r.previousLabel = function (s) {
      return (s === void 0 && (s = this._time), j1(this, Ol(this, s), 1));
    }),
    (r.currentLabel = function (s) {
      return arguments.length
        ? this.seek(s, !0)
        : this.previousLabel(this._time + ot);
    }),
    (r.shiftChildren = function (s, c, d) {
      d === void 0 && (d = 0);
      var h = this._first,
        m = this.labels,
        p;
      for (s = Ct(s); h; )
        (h._start >= d && ((h._start += s), (h._end += s)), (h = h._next));
      if (c) for (p in m) m[p] >= d && (m[p] += s);
      return Wi(this);
    }),
    (r.invalidate = function (s) {
      var c = this._first;
      for (this._lock = 0; c; ) (c.invalidate(s), (c = c._next));
      return u.prototype.invalidate.call(this, s);
    }),
    (r.clear = function (s) {
      s === void 0 && (s = !0);
      for (var c = this._first, d; c; )
        ((d = c._next), this.remove(c), (c = d));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        Wi(this)
      );
    }),
    (r.totalDuration = function (s) {
      var c = 0,
        d = this,
        h = d._last,
        m = jl,
        p,
        y,
        _;
      if (arguments.length)
        return d.timeScale(
          (d._repeat < 0 ? d.duration() : d.totalDuration()) /
            (d.reversed() ? -s : s),
        );
      if (d._dirty) {
        for (_ = d.parent; h; )
          ((p = h._prev),
            h._dirty && h.totalDuration(),
            (y = h._start),
            y > m && d._sort && h._ts && !d._lock
              ? ((d._lock = 1), (ia(d, h, y - h._delay, 1)._lock = 0))
              : (m = y),
            y < 0 &&
              h._ts &&
              ((c -= y),
              ((!_ && !d._dp) || (_ && _.smoothChildTiming)) &&
                ((d._start += Ct(y / d._ts)), (d._time -= y), (d._tTime -= y)),
              d.shiftChildren(-y, !1, -1 / 0),
              (m = 0)),
            h._end > c && h._ts && (c = h._end),
            (h = p));
        (is(d, d === wt && d._time > c ? d._time : c, 1, 1), (d._dirty = 0));
      }
      return d._tDur;
    }),
    (l.updateRoot = function (s) {
      if ((wt._ts && (Oy(wt, wu(s, wt)), (Ny = ol.frame)), ol.frame >= R1)) {
        R1 += dl.autoSleep || 120;
        var c = wt._first;
        if ((!c || !c._ts) && dl.autoSleep && ol._listeners.length < 2) {
          for (; c && !c._ts; ) c = c._next;
          c || ol.sleep();
        }
      }
    }),
    l
  );
})(Mo);
ml(On.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var A2 = function (l, r, a, s, c, d, h) {
    var m = new Qn(this._pt, l, r, 0, 1, rv, null, c),
      p = 0,
      y = 0,
      _,
      T,
      x,
      w,
      S,
      E,
      k,
      j;
    for (
      m.b = a,
        m.e = s,
        a += "",
        s += "",
        (k = ~s.indexOf("random(")) && (s = Eo(s)),
        d && ((j = [a, s]), d(j, l, r), (a = j[0]), (s = j[1])),
        T = a.match(rh) || [];
      (_ = rh.exec(s));
    )
      ((w = _[0]),
        (S = s.substring(p, _.index)),
        x ? (x = (x + 1) % 5) : S.substr(-5) === "rgba(" && (x = 1),
        w !== T[y++] &&
          ((E = parseFloat(T[y - 1]) || 0),
          (m._pt = {
            _next: m._pt,
            p: S || y === 1 ? S : ",",
            s: E,
            c: w.charAt(1) === "=" ? Pr(E, w) - E : parseFloat(w) - E,
            m: x && x < 4 ? Math.round : 0,
          }),
          (p = rh.lastIndex)));
    return (
      (m.c = p < s.length ? s.substring(p, s.length) : ""),
      (m.fp = h),
      (wy.test(s) || k) && (m.e = 0),
      (this._pt = m),
      m
    );
  },
  cm = function (l, r, a, s, c, d, h, m, p, y) {
    Ot(s) && (s = s(c || 0, l, d));
    var _ = l[r],
      T =
        a !== "get"
          ? a
          : Ot(_)
            ? p
              ? l[
                  r.indexOf("set") || !Ot(l["get" + r.substr(3)])
                    ? r
                    : "get" + r.substr(3)
                ](p)
              : l[r]()
            : _,
      x = Ot(_) ? (p ? M2 : av) : fm,
      w;
    if (
      (an(s) &&
        (~s.indexOf("random(") && (s = Eo(s)),
        s.charAt(1) === "=" &&
          ((w = Pr(T, s) + (xn(T) || 0)), (w || w === 0) && (s = w))),
      !y || T !== s || kh)
    )
      return !isNaN(T * s) && s !== ""
        ? ((w = new Qn(
            this._pt,
            l,
            r,
            +T || 0,
            s - (T || 0),
            typeof _ == "boolean" ? R2 : iv,
            0,
            x,
          )),
          p && (w.fp = p),
          h && w.modifier(h, this, l),
          (this._pt = w))
        : (!_ && !(r in l) && am(r, s),
          A2.call(this, l, r, T, s, x, m || dl.stringFilter, p));
  },
  C2 = function (l, r, a, s, c) {
    if (
      (Ot(l) && (l = mo(l, c, r, a, s)),
      !ca(l) || (l.style && l.nodeType) || Sn(l) || Ay(l))
    )
      return an(l) ? mo(l, c, r, a, s) : l;
    var d = {},
      h;
    for (h in l) d[h] = mo(l[h], c, r, a, s);
    return d;
  },
  tv = function (l, r, a, s, c, d) {
    var h, m, p, y;
    if (
      rl[l] &&
      (h = new rl[l]()).init(
        c,
        h.rawVars ? r[l] : C2(r[l], s, c, d, a),
        a,
        s,
        d,
      ) !== !1 &&
      ((a._pt = m = new Qn(a._pt, c, l, 0, 1, h.render, h, 0, h.priority)),
      a !== Fr)
    )
      for (p = a._ptLookup[a._targets.indexOf(c)], y = h._props.length; y--; )
        p[h._props[y]] = m;
    return h;
  },
  ui,
  kh,
  um = function u(l, r, a) {
    var s = l.vars,
      c = s.ease,
      d = s.startAt,
      h = s.immediateRender,
      m = s.lazy,
      p = s.onUpdate,
      y = s.runBackwards,
      _ = s.yoyoEase,
      T = s.keyframes,
      x = s.autoRevert,
      w = l._dur,
      S = l._startAt,
      E = l._targets,
      k = l.parent,
      j = k && k.data === "nested" ? k.vars.targets : E,
      G = l._overwrite === "auto" && !em,
      U = l.timeline,
      Y,
      V,
      R,
      q,
      Q,
      I,
      re,
      ne,
      pe,
      ge,
      me,
      O,
      F;
    if (
      (U && (!T || !c) && (c = "none"),
      (l._ease = $i(c, ns.ease)),
      (l._yEase = _ ? Wy($i(_ === !0 ? c : _, ns.ease)) : 0),
      _ &&
        l._yoyo &&
        !l._repeat &&
        ((_ = l._yEase), (l._yEase = l._ease), (l._ease = _)),
      (l._from = !U && !!s.runBackwards),
      !U || (T && !s.stagger))
    ) {
      if (
        ((ne = E[0] ? Pi(E[0]).harness : 0),
        (O = ne && s[ne.prop]),
        (Y = Cu(s, im)),
        S &&
          (S._zTime < 0 && S.progress(1),
          r < 0 && y && h && !x ? S.render(-1, !0) : S.revert(y && w ? mu : Ib),
          (S._lazy = 0)),
        d)
      ) {
        if (
          (vi(
            (l._startAt = Ft.set(
              E,
              ml(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: k,
                  immediateRender: !0,
                  lazy: !S && Xn(m),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    p &&
                    function () {
                      return ul(l, "onUpdate");
                    },
                  stagger: 0,
                },
                d,
              ),
            )),
          ),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          r < 0 && (dn || (!h && !x)) && l._startAt.revert(mu),
          h && w && r <= 0 && a <= 0)
        ) {
          r && (l._zTime = r);
          return;
        }
      } else if (y && w && !S) {
        if (
          (r && (h = !1),
          (R = ml(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: h && !S && Xn(m),
              immediateRender: h,
              stagger: 0,
              parent: k,
            },
            Y,
          )),
          O && (R[ne.prop] = O),
          vi((l._startAt = Ft.set(E, R))),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          r < 0 && (dn ? l._startAt.revert(mu) : l._startAt.render(-1, !0)),
          (l._zTime = r),
          !h)
        )
          u(l._startAt, ot, ot);
        else if (!r) return;
      }
      for (
        l._pt = l._ptCache = 0, m = (w && Xn(m)) || (m && !w), V = 0;
        V < E.length;
        V++
      ) {
        if (
          ((Q = E[V]),
          (re = Q._gsap || sm(E)[V]._gsap),
          (l._ptLookup[V] = ge = {}),
          zh[re.id] && pi.length && Au(),
          (me = j === E ? V : j.indexOf(Q)),
          ne &&
            (pe = new ne()).init(Q, O || Y, l, me, j) !== !1 &&
            ((l._pt = q =
              new Qn(l._pt, Q, pe.name, 0, 1, pe.render, pe, 0, pe.priority)),
            pe._props.forEach(function (J) {
              ge[J] = q;
            }),
            pe.priority && (I = 1)),
          !ne || O)
        )
          for (R in Y)
            rl[R] && (pe = tv(R, Y, l, me, Q, j))
              ? pe.priority && (I = 1)
              : (ge[R] = q =
                  cm.call(l, Q, R, "get", Y[R], me, j, 0, s.stringFilter));
        (l._op && l._op[V] && l.kill(Q, l._op[V]),
          G &&
            l._pt &&
            ((ui = l),
            wt.killTweensOf(Q, ge, l.globalTime(r)),
            (F = !l.parent),
            (ui = 0)),
          l._pt && m && (zh[re.id] = 1));
      }
      (I && sv(l), l._onInit && l._onInit(l));
    }
    ((l._onUpdate = p),
      (l._initted = (!l._op || l._pt) && !F),
      T && r <= 0 && U.render(jl, !0, !0));
  },
  w2 = function (l, r, a, s, c, d, h, m) {
    var p = ((l._pt && l._ptCache) || (l._ptCache = {}))[r],
      y,
      _,
      T,
      x;
    if (!p)
      for (
        p = l._ptCache[r] = [], T = l._ptLookup, x = l._targets.length;
        x--;
      ) {
        if (((y = T[x][r]), y && y.d && y.d._pt))
          for (y = y.d._pt; y && y.p !== r && y.fp !== r; ) y = y._next;
        if (!y)
          return (
            (kh = 1),
            (l.vars[r] = "+=0"),
            um(l, h),
            (kh = 0),
            m ? Co(r + " not eligible for reset") : 1
          );
        p.push(y);
      }
    for (x = p.length; x--; )
      ((_ = p[x]),
        (y = _._pt || _),
        (y.s = (s || s === 0) && !c ? s : y.s + (s || 0) + d * y.c),
        (y.c = a - y.s),
        _.e && (_.e = Ht(a) + xn(_.e)),
        _.b && (_.b = y.s + xn(_.b)));
  },
  E2 = function (l, r) {
    var a = l[0] ? Pi(l[0]).harness : 0,
      s = a && a.aliases,
      c,
      d,
      h,
      m;
    if (!s) return r;
    c = ls({}, r);
    for (d in s)
      if (d in c) for (m = s[d].split(","), h = m.length; h--; ) c[m[h]] = c[d];
    return c;
  },
  z2 = function (l, r, a, s) {
    var c = r.ease || s || "power1.inOut",
      d,
      h;
    if (Sn(r))
      ((h = a[l] || (a[l] = [])),
        r.forEach(function (m, p) {
          return h.push({ t: (p / (r.length - 1)) * 100, v: m, e: c });
        }));
    else
      for (d in r)
        ((h = a[d] || (a[d] = [])),
          d === "ease" || h.push({ t: parseFloat(l), v: r[d], e: c }));
  },
  mo = function (l, r, a, s, c) {
    return Ot(l)
      ? l.call(r, a, s, c)
      : an(l) && ~l.indexOf("random(")
        ? Eo(l)
        : l;
  },
  nv = rm + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  lv = {};
Vn(nv + ",id,stagger,delay,duration,paused,scrollTrigger", function (u) {
  return (lv[u] = 1);
});
var Ft = (function (u) {
  Sy(l, u);
  function l(a, s, c, d) {
    var h;
    (typeof s == "number" && ((c.duration = s), (s = c), (c = null)),
      (h = u.call(this, d ? s : fo(s)) || this));
    var m = h.vars,
      p = m.duration,
      y = m.delay,
      _ = m.immediateRender,
      T = m.stagger,
      x = m.overwrite,
      w = m.keyframes,
      S = m.defaults,
      E = m.scrollTrigger,
      k = m.yoyoEase,
      j = s.parent || wt,
      G = (Sn(a) || Ay(a) ? ja(a[0]) : "length" in s) ? [a] : Ul(a),
      U,
      Y,
      V,
      R,
      q,
      Q,
      I,
      re;
    if (
      ((h._targets = G.length
        ? sm(G)
        : Co(
            "GSAP target " + a + " not found. https://gsap.com",
            !dl.nullTargetWarn,
          ) || []),
      (h._ptLookup = []),
      (h._overwrite = x),
      w || T || Wc(p) || Wc(y))
    ) {
      if (
        ((s = h.vars),
        (U = h.timeline =
          new On({
            data: "nested",
            defaults: S || {},
            targets: j && j.data === "nested" ? j.vars.targets : G,
          })),
        U.kill(),
        (U.parent = U._dp = Na(h)),
        (U._start = 0),
        T || Wc(p) || Wc(y))
      ) {
        if (((R = G.length), (I = T && Yy(T)), ca(T)))
          for (q in T) ~nv.indexOf(q) && (re || (re = {}), (re[q] = T[q]));
        for (Y = 0; Y < R; Y++)
          ((V = Cu(s, lv)),
            (V.stagger = 0),
            k && (V.yoyoEase = k),
            re && ls(V, re),
            (Q = G[Y]),
            (V.duration = +mo(p, Na(h), Y, Q, G)),
            (V.delay = (+mo(y, Na(h), Y, Q, G) || 0) - h._delay),
            !T &&
              R === 1 &&
              V.delay &&
              ((h._delay = y = V.delay), (h._start += y), (V.delay = 0)),
            U.to(Q, V, I ? I(Y, Q, G) : 0),
            (U._ease = Ke.none));
        U.duration() ? (p = y = 0) : (h.timeline = 0);
      } else if (w) {
        (fo(ml(U.vars.defaults, { ease: "none" })),
          (U._ease = $i(w.ease || s.ease || "none")));
        var ne = 0,
          pe,
          ge,
          me;
        if (Sn(w))
          (w.forEach(function (O) {
            return U.to(G, O, ">");
          }),
            U.duration());
        else {
          V = {};
          for (q in w)
            q === "ease" || q === "easeEach" || z2(q, w[q], V, w.easeEach);
          for (q in V)
            for (
              pe = V[q].sort(function (O, F) {
                return O.t - F.t;
              }),
                ne = 0,
                Y = 0;
              Y < pe.length;
              Y++
            )
              ((ge = pe[Y]),
                (me = {
                  ease: ge.e,
                  duration: ((ge.t - (Y ? pe[Y - 1].t : 0)) / 100) * p,
                }),
                (me[q] = ge.v),
                U.to(G, me, ne),
                (ne += me.duration));
          U.duration() < p && U.to({}, { duration: p - U.duration() });
        }
      }
      p || h.duration((p = U.duration()));
    } else h.timeline = 0;
    return (
      x === !0 && !em && ((ui = Na(h)), wt.killTweensOf(G), (ui = 0)),
      ia(j, Na(h), c),
      s.reversed && h.reverse(),
      s.paused && h.paused(!0),
      (_ ||
        (!p &&
          !w &&
          h._start === Ct(j._time) &&
          Xn(_) &&
          i2(Na(h)) &&
          j.data !== "nested")) &&
        ((h._tTime = -ot), h.render(Math.max(0, -y) || 0)),
      E && Hy(Na(h), E),
      h
    );
  }
  var r = l.prototype;
  return (
    (r.render = function (s, c, d) {
      var h = this._time,
        m = this._tDur,
        p = this._dur,
        y = s < 0,
        _ = s > m - ot && !y ? m : s < ot ? 0 : s,
        T,
        x,
        w,
        S,
        E,
        k,
        j,
        G,
        U;
      if (!p) s2(this, s, c, d);
      else if (
        _ !== this._tTime ||
        !s ||
        d ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== y) ||
        this._lazy
      ) {
        if (((T = _), (G = this.timeline), this._repeat)) {
          if (((S = p + this._rDelay), this._repeat < -1 && y))
            return this.totalTime(S * 100 + s, c, d);
          if (
            ((T = Ct(_ % S)),
            _ === m
              ? ((w = this._repeat), (T = p))
              : ((E = Ct(_ / S)),
                (w = ~~E),
                w && w === E ? ((T = p), w--) : T > p && (T = p)),
            (k = this._yoyo && w & 1),
            k && ((U = this._yEase), (T = p - T)),
            (E = as(this._tTime, S)),
            T === h && !d && this._initted && w === E)
          )
            return ((this._tTime = _), this);
          w !== E &&
            (G && this._yEase && $y(G, k),
            this.vars.repeatRefresh &&
              !k &&
              !this._lock &&
              T !== S &&
              this._initted &&
              ((this._lock = d = 1),
              (this.render(Ct(S * w), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (By(this, y ? s : T, d, c, _)) return ((this._tTime = 0), this);
          if (h !== this._time && !(d && this.vars.repeatRefresh && w !== E))
            return this;
          if (p !== this._dur) return this.render(s, c, d);
        }
        if (
          ((this._tTime = _),
          (this._time = T),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = j = (U || this._ease)(T / p)),
          this._from && (this.ratio = j = 1 - j),
          !h && _ && !c && !E && (ul(this, "onStart"), this._tTime !== _))
        )
          return this;
        for (x = this._pt; x; ) (x.r(j, x.d), (x = x._next));
        ((G && G.render(s < 0 ? s : G._dur * G._ease(T / this._dur), c, d)) ||
          (this._startAt && (this._zTime = s)),
          this._onUpdate &&
            !c &&
            (y && Mh(this, s, c, d), ul(this, "onUpdate")),
          this._repeat &&
            w !== E &&
            this.vars.onRepeat &&
            !c &&
            this.parent &&
            ul(this, "onRepeat"),
          (_ === this._tDur || !_) &&
            this._tTime === _ &&
            (y && !this._onUpdate && Mh(this, s, !0, !0),
            (s || !p) &&
              ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
              vi(this, 1),
            !c &&
              !(y && !h) &&
              (_ || h || k) &&
              (ul(this, _ === m ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(_ < m && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (s) {
      return (
        (!s || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(s),
        u.prototype.invalidate.call(this, s)
      );
    }),
    (r.resetTo = function (s, c, d, h, m) {
      (zo || ol.wake(), this._ts || this.play());
      var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        y;
      return (
        this._initted || um(this, p),
        (y = this._ease(p / this._dur)),
        w2(this, s, c, d, h, y, p, m)
          ? this.resetTo(s, c, d, h, 1)
          : (qu(this, 0),
            this.parent ||
              jy(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (r.kill = function (s, c) {
      if ((c === void 0 && (c = "all"), !s && (!c || c === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? ao(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!dn),
          this
        );
      if (this.timeline) {
        var d = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(s, c, ui && ui.vars.overwrite !== !0)
            ._first || ao(this),
          this.parent &&
            d !== this.timeline.totalDuration() &&
            is(this, (this._dur * this.timeline._tDur) / d, 0, 1),
          this
        );
      }
      var h = this._targets,
        m = s ? Ul(s) : h,
        p = this._ptLookup,
        y = this._pt,
        _,
        T,
        x,
        w,
        S,
        E,
        k;
      if ((!c || c === "all") && l2(h, m))
        return (c === "all" && (this._pt = 0), ao(this));
      for (
        _ = this._op = this._op || [],
          c !== "all" &&
            (an(c) &&
              ((S = {}),
              Vn(c, function (j) {
                return (S[j] = 1);
              }),
              (c = S)),
            (c = E2(h, c))),
          k = h.length;
        k--;
      )
        if (~m.indexOf(h[k])) {
          ((T = p[k]),
            c === "all"
              ? ((_[k] = c), (w = T), (x = {}))
              : ((x = _[k] = _[k] || {}), (w = c)));
          for (S in w)
            ((E = T && T[S]),
              E &&
                ((!("kill" in E.d) || E.d.kill(S) === !0) && Hu(this, E, "_pt"),
                delete T[S]),
              x !== "all" && (x[S] = 1));
        }
      return (this._initted && !this._pt && y && ao(this), this);
    }),
    (l.to = function (s, c) {
      return new l(s, c, arguments[2]);
    }),
    (l.from = function (s, c) {
      return ho(1, arguments);
    }),
    (l.delayedCall = function (s, c, d, h) {
      return new l(c, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: s,
        onComplete: c,
        onReverseComplete: c,
        onCompleteParams: d,
        onReverseCompleteParams: d,
        callbackScope: h,
      });
    }),
    (l.fromTo = function (s, c, d) {
      return ho(2, arguments);
    }),
    (l.set = function (s, c) {
      return ((c.duration = 0), c.repeatDelay || (c.repeat = 0), new l(s, c));
    }),
    (l.killTweensOf = function (s, c, d) {
      return wt.killTweensOf(s, c, d);
    }),
    l
  );
})(Mo);
ml(Ft.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Vn("staggerTo,staggerFrom,staggerFromTo", function (u) {
  Ft[u] = function () {
    var l = new On(),
      r = Rh.call(arguments, 0);
    return (r.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), l[u].apply(l, r));
  };
});
var fm = function (l, r, a) {
    return (l[r] = a);
  },
  av = function (l, r, a) {
    return l[r](a);
  },
  M2 = function (l, r, a, s) {
    return l[r](s.fp, a);
  },
  N2 = function (l, r, a) {
    return l.setAttribute(r, a);
  },
  dm = function (l, r) {
    return Ot(l[r]) ? av : tm(l[r]) && l.setAttribute ? N2 : fm;
  },
  iv = function (l, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * l) * 1e6) / 1e6, r);
  },
  R2 = function (l, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * l), r);
  },
  rv = function (l, r) {
    var a = r._pt,
      s = "";
    if (!l && r.b) s = r.b;
    else if (l === 1 && r.e) s = r.e;
    else {
      for (; a; )
        ((s =
          a.p +
          (a.m ? a.m(a.s + a.c * l) : Math.round((a.s + a.c * l) * 1e4) / 1e4) +
          s),
          (a = a._next));
      s += r.c;
    }
    r.set(r.t, r.p, s, r);
  },
  hm = function (l, r) {
    for (var a = r._pt; a; ) (a.r(l, a.d), (a = a._next));
  },
  O2 = function (l, r, a, s) {
    for (var c = this._pt, d; c; )
      ((d = c._next), c.p === s && c.modifier(l, r, a), (c = d));
  },
  D2 = function (l) {
    for (var r = this._pt, a, s; r; )
      ((s = r._next),
        (r.p === l && !r.op) || r.op === l
          ? Hu(this, r, "_pt")
          : r.dep || (a = 1),
        (r = s));
    return !a;
  },
  k2 = function (l, r, a, s) {
    s.mSet(l, r, s.m.call(s.tween, a, s.mt), s);
  },
  sv = function (l) {
    for (var r = l._pt, a, s, c, d; r; ) {
      for (a = r._next, s = c; s && s.pr > r.pr; ) s = s._next;
      ((r._prev = s ? s._prev : d) ? (r._prev._next = r) : (c = r),
        (r._next = s) ? (s._prev = r) : (d = r),
        (r = a));
    }
    l._pt = c;
  },
  Qn = (function () {
    function u(r, a, s, c, d, h, m, p, y) {
      ((this.t = a),
        (this.s = c),
        (this.c = d),
        (this.p = s),
        (this.r = h || iv),
        (this.d = m || this),
        (this.set = p || fm),
        (this.pr = y || 0),
        (this._next = r),
        r && (r._prev = this));
    }
    var l = u.prototype;
    return (
      (l.modifier = function (a, s, c) {
        ((this.mSet = this.mSet || this.set),
          (this.set = k2),
          (this.m = a),
          (this.mt = c),
          (this.tween = s));
      }),
      u
    );
  })();
Vn(
  rm +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (u) {
    return (im[u] = 1);
  },
);
hl.TweenMax = hl.TweenLite = Ft;
hl.TimelineLite = hl.TimelineMax = On;
wt = new On({
  sortChildren: !1,
  defaults: ns,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
dl.stringFilter = Py;
var Ii = [],
  gu = {},
  j2 = [],
  H1 = 0,
  U2 = 0,
  fh = function (l) {
    return (gu[l] || j2).map(function (r) {
      return r();
    });
  },
  jh = function () {
    var l = Date.now(),
      r = [];
    l - H1 > 2 &&
      (fh("matchMediaInit"),
      Ii.forEach(function (a) {
        var s = a.queries,
          c = a.conditions,
          d,
          h,
          m,
          p;
        for (h in s)
          ((d = la.matchMedia(s[h]).matches),
            d && (m = 1),
            d !== c[h] && ((c[h] = d), (p = 1)));
        p && (a.revert(), m && r.push(a));
      }),
      fh("matchMediaRevert"),
      r.forEach(function (a) {
        return a.onMatch(a, function (s) {
          return a.add(null, s);
        });
      }),
      (H1 = l),
      fh("matchMedia"));
  },
  ov = (function () {
    function u(r, a) {
      ((this.selector = a && Oh(a)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = U2++),
        r && this.add(r));
    }
    var l = u.prototype;
    return (
      (l.add = function (a, s, c) {
        Ot(a) && ((c = s), (s = a), (a = Ot));
        var d = this,
          h = function () {
            var p = xt,
              y = d.selector,
              _;
            return (
              p && p !== d && p.data.push(d),
              c && (d.selector = Oh(c)),
              (xt = d),
              (_ = s.apply(d, arguments)),
              Ot(_) && d._r.push(_),
              (xt = p),
              (d.selector = y),
              (d.isReverted = !1),
              _
            );
          };
        return (
          (d.last = h),
          a === Ot
            ? h(d, function (m) {
                return d.add(null, m);
              })
            : a
              ? (d[a] = h)
              : h
        );
      }),
      (l.ignore = function (a) {
        var s = xt;
        ((xt = null), a(this), (xt = s));
      }),
      (l.getTweens = function () {
        var a = [];
        return (
          this.data.forEach(function (s) {
            return s instanceof u
              ? a.push.apply(a, s.getTweens())
              : s instanceof Ft &&
                  !(s.parent && s.parent.data === "nested") &&
                  a.push(s);
          }),
          a
        );
      }),
      (l.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (l.kill = function (a, s) {
        var c = this;
        if (
          (a
            ? (function () {
                for (var h = c.getTweens(), m = c.data.length, p; m--; )
                  ((p = c.data[m]),
                    p.data === "isFlip" &&
                      (p.revert(),
                      p.getChildren(!0, !0, !1).forEach(function (y) {
                        return h.splice(h.indexOf(y), 1);
                      })));
                for (
                  h
                    .map(function (y) {
                      return {
                        g:
                          y._dur ||
                          y._delay ||
                          (y._sat && !y._sat.vars.immediateRender)
                            ? y.globalTime(0)
                            : -1 / 0,
                        t: y,
                      };
                    })
                    .sort(function (y, _) {
                      return _.g - y.g || -1 / 0;
                    })
                    .forEach(function (y) {
                      return y.t.revert(a);
                    }),
                    m = c.data.length;
                  m--;
                )
                  ((p = c.data[m]),
                    p instanceof On
                      ? p.data !== "nested" &&
                        (p.scrollTrigger && p.scrollTrigger.revert(), p.kill())
                      : !(p instanceof Ft) && p.revert && p.revert(a));
                (c._r.forEach(function (y) {
                  return y(a, c);
                }),
                  (c.isReverted = !0));
              })()
            : this.data.forEach(function (h) {
                return h.kill && h.kill();
              }),
          this.clear(),
          s)
        )
          for (var d = Ii.length; d--; )
            Ii[d].id === this.id && Ii.splice(d, 1);
      }),
      (l.revert = function (a) {
        this.kill(a || {});
      }),
      u
    );
  })(),
  H2 = (function () {
    function u(r) {
      ((this.contexts = []), (this.scope = r), xt && xt.data.push(this));
    }
    var l = u.prototype;
    return (
      (l.add = function (a, s, c) {
        ca(a) || (a = { matches: a });
        var d = new ov(0, c || this.scope),
          h = (d.conditions = {}),
          m,
          p,
          y;
        (xt && !d.selector && (d.selector = xt.selector),
          this.contexts.push(d),
          (s = d.add("onMatch", s)),
          (d.queries = a));
        for (p in a)
          p === "all"
            ? (y = 1)
            : ((m = la.matchMedia(a[p])),
              m &&
                (Ii.indexOf(d) < 0 && Ii.push(d),
                (h[p] = m.matches) && (y = 1),
                m.addListener
                  ? m.addListener(jh)
                  : m.addEventListener("change", jh)));
        return (
          y &&
            s(d, function (_) {
              return d.add(null, _);
            }),
          this
        );
      }),
      (l.revert = function (a) {
        this.kill(a || {});
      }),
      (l.kill = function (a) {
        this.contexts.forEach(function (s) {
          return s.kill(a, !0);
        });
      }),
      u
    );
  })(),
  Eu = {
    registerPlugin: function () {
      for (var l = arguments.length, r = new Array(l), a = 0; a < l; a++)
        r[a] = arguments[a];
      r.forEach(function (s) {
        return Ky(s);
      });
    },
    timeline: function (l) {
      return new On(l);
    },
    getTweensOf: function (l, r) {
      return wt.getTweensOf(l, r);
    },
    getProperty: function (l, r, a, s) {
      an(l) && (l = Ul(l)[0]);
      var c = Pi(l || {}).get,
        d = a ? ky : Dy;
      return (
        a === "native" && (a = ""),
        l &&
          (r
            ? d(((rl[r] && rl[r].get) || c)(l, r, a, s))
            : function (h, m, p) {
                return d(((rl[h] && rl[h].get) || c)(l, h, m, p));
              })
      );
    },
    quickSetter: function (l, r, a) {
      if (((l = Ul(l)), l.length > 1)) {
        var s = l.map(function (y) {
            return Kn.quickSetter(y, r, a);
          }),
          c = s.length;
        return function (y) {
          for (var _ = c; _--; ) s[_](y);
        };
      }
      l = l[0] || {};
      var d = rl[r],
        h = Pi(l),
        m = (h.harness && (h.harness.aliases || {})[r]) || r,
        p = d
          ? function (y) {
              var _ = new d();
              ((Fr._pt = 0),
                _.init(l, a ? y + a : y, Fr, 0, [l]),
                _.render(1, _),
                Fr._pt && hm(1, Fr));
            }
          : h.set(l, m);
      return d
        ? p
        : function (y) {
            return p(l, m, a ? y + a : y, h, 1);
          };
    },
    quickTo: function (l, r, a) {
      var s,
        c = Kn.to(
          l,
          ml(
            ((s = {}), (s[r] = "+=0.1"), (s.paused = !0), (s.stagger = 0), s),
            a || {},
          ),
        ),
        d = function (m, p, y) {
          return c.resetTo(r, m, p, y);
        };
      return ((d.tween = c), d);
    },
    isTweening: function (l) {
      return wt.getTweensOf(l, !0).length > 0;
    },
    defaults: function (l) {
      return (l && l.ease && (l.ease = $i(l.ease, ns.ease)), O1(ns, l || {}));
    },
    config: function (l) {
      return O1(dl, l || {});
    },
    registerEffect: function (l) {
      var r = l.name,
        a = l.effect,
        s = l.plugins,
        c = l.defaults,
        d = l.extendTimeline;
      ((s || "").split(",").forEach(function (h) {
        return (
          h && !rl[h] && !hl[h] && Co(r + " effect requires " + h + " plugin.")
        );
      }),
        (sh[r] = function (h, m, p) {
          return a(Ul(h), ml(m || {}, c), p);
        }),
        d &&
          (On.prototype[r] = function (h, m, p) {
            return this.add(sh[r](h, ca(m) ? m : (p = m) && {}, this), p);
          }));
    },
    registerEase: function (l, r) {
      Ke[l] = $i(r);
    },
    parseEase: function (l, r) {
      return arguments.length ? $i(l, r) : Ke;
    },
    getById: function (l) {
      return wt.getById(l);
    },
    exportRoot: function (l, r) {
      l === void 0 && (l = {});
      var a = new On(l),
        s,
        c;
      for (
        a.smoothChildTiming = Xn(l.smoothChildTiming),
          wt.remove(a),
          a._dp = 0,
          a._time = a._tTime = wt._time,
          s = wt._first;
        s;
      )
        ((c = s._next),
          (r ||
            !(
              !s._dur &&
              s instanceof Ft &&
              s.vars.onComplete === s._targets[0]
            )) &&
            ia(a, s, s._start - s._delay),
          (s = c));
      return (ia(wt, a, 0), a);
    },
    context: function (l, r) {
      return l ? new ov(l, r) : xt;
    },
    matchMedia: function (l) {
      return new H2(l);
    },
    matchMediaRefresh: function () {
      return (
        Ii.forEach(function (l) {
          var r = l.conditions,
            a,
            s;
          for (s in r) r[s] && ((r[s] = !1), (a = 1));
          a && l.revert();
        }) || jh()
      );
    },
    addEventListener: function (l, r) {
      var a = gu[l] || (gu[l] = []);
      ~a.indexOf(r) || a.push(r);
    },
    removeEventListener: function (l, r) {
      var a = gu[l],
        s = a && a.indexOf(r);
      s >= 0 && a.splice(s, 1);
    },
    utils: {
      wrap: p2,
      wrapYoyo: g2,
      distribute: Yy,
      random: Xy,
      snap: Gy,
      normalize: m2,
      getUnit: xn,
      clamp: u2,
      splitColor: Fy,
      toArray: Ul,
      selector: Oh,
      mapRange: Qy,
      pipe: d2,
      unitize: h2,
      interpolate: y2,
      shuffle: Ly,
    },
    install: zy,
    effects: sh,
    ticker: ol,
    updateRoot: On.updateRoot,
    plugins: rl,
    globalTimeline: wt,
    core: {
      PropTween: Qn,
      globals: My,
      Tween: Ft,
      Timeline: On,
      Animation: Mo,
      getCache: Pi,
      _removeLinkedListItem: Hu,
      reverting: function () {
        return dn;
      },
      context: function (l) {
        return (l && xt && (xt.data.push(l), (l._ctx = xt)), xt);
      },
      suppressOverwrites: function (l) {
        return (em = l);
      },
    },
  };
Vn("to,from,fromTo,delayedCall,set,killTweensOf", function (u) {
  return (Eu[u] = Ft[u]);
});
ol.add(On.updateRoot);
Fr = Eu.to({}, { duration: 0 });
var B2 = function (l, r) {
    for (var a = l._pt; a && a.p !== r && a.op !== r && a.fp !== r; )
      a = a._next;
    return a;
  },
  q2 = function (l, r) {
    var a = l._targets,
      s,
      c,
      d;
    for (s in r)
      for (c = a.length; c--; )
        ((d = l._ptLookup[c][s]),
          d &&
            (d = d.d) &&
            (d._pt && (d = B2(d, s)),
            d && d.modifier && d.modifier(r[s], l, a[c], s)));
  },
  dh = function (l, r) {
    return {
      name: l,
      headless: 1,
      rawVars: 1,
      init: function (s, c, d) {
        d._onInit = function (h) {
          var m, p;
          if (
            (an(c) &&
              ((m = {}),
              Vn(c, function (y) {
                return (m[y] = 1);
              }),
              (c = m)),
            r)
          ) {
            m = {};
            for (p in c) m[p] = r(c[p]);
            c = m;
          }
          q2(h, c);
        };
      },
    };
  },
  Kn =
    Eu.registerPlugin(
      {
        name: "attr",
        init: function (l, r, a, s, c) {
          var d, h, m;
          this.tween = a;
          for (d in r)
            ((m = l.getAttribute(d) || ""),
              (h = this.add(
                l,
                "setAttribute",
                (m || 0) + "",
                r[d],
                s,
                c,
                0,
                0,
                d,
              )),
              (h.op = d),
              (h.b = m),
              this._props.push(d));
        },
        render: function (l, r) {
          for (var a = r._pt; a; )
            (dn ? a.set(a.t, a.p, a.b, a) : a.r(l, a.d), (a = a._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (l, r) {
          for (var a = r.length; a--; )
            this.add(l, a, l[a] || 0, r[a], 0, 0, 0, 0, 0, 1);
        },
      },
      dh("roundProps", Dh),
      dh("modifiers"),
      dh("snap", Gy),
    ) || Eu;
Ft.version = On.version = Kn.version = "3.14.2";
Ey = 1;
nm() && rs();
Ke.Power0;
Ke.Power1;
Ke.Power2;
Ke.Power3;
Ke.Power4;
Ke.Linear;
Ke.Quad;
Ke.Cubic;
Ke.Quart;
Ke.Quint;
Ke.Strong;
Ke.Elastic;
Ke.Back;
Ke.SteppedEase;
Ke.Bounce;
Ke.Sine;
Ke.Expo;
Ke.Circ;
var B1,
  fi,
  Wr,
  mm,
  Fi,
  q1,
  pm,
  L2 = function () {
    return typeof window < "u";
  },
  Ua = {},
  Qi = 180 / Math.PI,
  $r = Math.PI / 180,
  Yr = Math.atan2,
  L1 = 1e8,
  gm = /([A-Z])/g,
  Y2 = /(left|right|width|margin|padding|x)/i,
  G2 = /[\s,\(]\S/,
  ra = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Uh = function (l, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u, r);
  },
  X2 = function (l, r) {
    return r.set(
      r.t,
      r.p,
      l === 1 ? r.e : Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u,
      r,
    );
  },
  V2 = function (l, r) {
    return r.set(
      r.t,
      r.p,
      l ? Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u : r.b,
      r,
    );
  },
  Q2 = function (l, r) {
    return r.set(
      r.t,
      r.p,
      l === 1 ? r.e : l ? Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u : r.b,
      r,
    );
  },
  Z2 = function (l, r) {
    var a = r.s + r.c * l;
    r.set(r.t, r.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  cv = function (l, r) {
    return r.set(r.t, r.p, l ? r.e : r.b, r);
  },
  uv = function (l, r) {
    return r.set(r.t, r.p, l !== 1 ? r.b : r.e, r);
  },
  K2 = function (l, r, a) {
    return (l.style[r] = a);
  },
  F2 = function (l, r, a) {
    return l.style.setProperty(r, a);
  },
  J2 = function (l, r, a) {
    return (l._gsap[r] = a);
  },
  P2 = function (l, r, a) {
    return (l._gsap.scaleX = l._gsap.scaleY = a);
  },
  W2 = function (l, r, a, s, c) {
    var d = l._gsap;
    ((d.scaleX = d.scaleY = a), d.renderTransform(c, d));
  },
  $2 = function (l, r, a, s, c) {
    var d = l._gsap;
    ((d[r] = a), d.renderTransform(c, d));
  },
  Et = "transform",
  Zn = Et + "Origin",
  I2 = function u(l, r) {
    var a = this,
      s = this.target,
      c = s.style,
      d = s._gsap;
    if (l in Ua && c) {
      if (((this.tfm = this.tfm || {}), l !== "transform"))
        ((l = ra[l] || l),
          ~l.indexOf(",")
            ? l.split(",").forEach(function (h) {
                return (a.tfm[h] = Ra(s, h));
              })
            : (this.tfm[l] = d.x ? d[l] : Ra(s, l)),
          l === Zn && (this.tfm.zOrigin = d.zOrigin));
      else
        return ra.transform.split(",").forEach(function (h) {
          return u.call(a, h, r);
        });
      if (this.props.indexOf(Et) >= 0) return;
      (d.svg &&
        ((this.svgo = s.getAttribute("data-svg-origin")),
        this.props.push(Zn, r, "")),
        (l = Et));
    }
    (c || r) && this.props.push(l, r, c[l]);
  },
  fv = function (l) {
    l.translate &&
      (l.removeProperty("translate"),
      l.removeProperty("scale"),
      l.removeProperty("rotate"));
  },
  eS = function () {
    var l = this.props,
      r = this.target,
      a = r.style,
      s = r._gsap,
      c,
      d;
    for (c = 0; c < l.length; c += 3)
      l[c + 1]
        ? l[c + 1] === 2
          ? r[l[c]](l[c + 2])
          : (r[l[c]] = l[c + 2])
        : l[c + 2]
          ? (a[l[c]] = l[c + 2])
          : a.removeProperty(
              l[c].substr(0, 2) === "--"
                ? l[c]
                : l[c].replace(gm, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (d in this.tfm) s[d] = this.tfm[d];
      (s.svg &&
        (s.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (c = pm()),
        (!c || !c.isStart) &&
          !a[Et] &&
          (fv(a),
          s.zOrigin &&
            a[Zn] &&
            ((a[Zn] += " " + s.zOrigin + "px"),
            (s.zOrigin = 0),
            s.renderTransform()),
          (s.uncache = 1)));
    }
  },
  dv = function (l, r) {
    var a = { target: l, props: [], revert: eS, save: I2 };
    return (
      l._gsap || Kn.core.getCache(l),
      r &&
        l.style &&
        l.nodeType &&
        r.split(",").forEach(function (s) {
          return a.save(s);
        }),
      a
    );
  },
  hv,
  Hh = function (l, r) {
    var a = fi.createElementNS
      ? fi.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          l,
        )
      : fi.createElement(l);
    return a && a.style ? a : fi.createElement(l);
  },
  fl = function u(l, r, a) {
    var s = getComputedStyle(l);
    return (
      s[r] ||
      s.getPropertyValue(r.replace(gm, "-$1").toLowerCase()) ||
      s.getPropertyValue(r) ||
      (!a && u(l, ss(r) || r, 1)) ||
      ""
    );
  },
  Y1 = "O,Moz,ms,Ms,Webkit".split(","),
  ss = function (l, r, a) {
    var s = r || Fi,
      c = s.style,
      d = 5;
    if (l in c && !a) return l;
    for (
      l = l.charAt(0).toUpperCase() + l.substr(1);
      d-- && !(Y1[d] + l in c);
    );
    return d < 0 ? null : (d === 3 ? "ms" : d >= 0 ? Y1[d] : "") + l;
  },
  Bh = function () {
    L2() &&
      window.document &&
      ((B1 = window),
      (fi = B1.document),
      (Wr = fi.documentElement),
      (Fi = Hh("div") || { style: {} }),
      Hh("div"),
      (Et = ss(Et)),
      (Zn = Et + "Origin"),
      (Fi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (hv = !!ss("perspective")),
      (pm = Kn.core.reverting),
      (mm = 1));
  },
  G1 = function (l) {
    var r = l.ownerSVGElement,
      a = Hh(
        "svg",
        (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      s = l.cloneNode(!0),
      c;
    ((s.style.display = "block"), a.appendChild(s), Wr.appendChild(a));
    try {
      c = s.getBBox();
    } catch {}
    return (a.removeChild(s), Wr.removeChild(a), c);
  },
  X1 = function (l, r) {
    for (var a = r.length; a--; )
      if (l.hasAttribute(r[a])) return l.getAttribute(r[a]);
  },
  mv = function (l) {
    var r, a;
    try {
      r = l.getBBox();
    } catch {
      ((r = G1(l)), (a = 1));
    }
    return (
      (r && (r.width || r.height)) || a || (r = G1(l)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +X1(l, ["x", "cx", "x1"]) || 0,
            y: +X1(l, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  pv = function (l) {
    return !!(l.getCTM && (!l.parentNode || l.ownerSVGElement) && mv(l));
  },
  _i = function (l, r) {
    if (r) {
      var a = l.style,
        s;
      (r in Ua && r !== Zn && (r = Et),
        a.removeProperty
          ? ((s = r.substr(0, 2)),
            (s === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            a.removeProperty(
              s === "--" ? r : r.replace(gm, "-$1").toLowerCase(),
            ))
          : a.removeAttribute(r));
    }
  },
  di = function (l, r, a, s, c, d) {
    var h = new Qn(l._pt, r, a, 0, 1, d ? uv : cv);
    return ((l._pt = h), (h.b = s), (h.e = c), l._props.push(a), h);
  },
  V1 = { deg: 1, rad: 1, turn: 1 },
  tS = { grid: 1, flex: 1 },
  xi = function u(l, r, a, s) {
    var c = parseFloat(a) || 0,
      d = (a + "").trim().substr((c + "").length) || "px",
      h = Fi.style,
      m = Y2.test(r),
      p = l.tagName.toLowerCase() === "svg",
      y = (p ? "client" : "offset") + (m ? "Width" : "Height"),
      _ = 100,
      T = s === "px",
      x = s === "%",
      w,
      S,
      E,
      k;
    if (s === d || !c || V1[s] || V1[d]) return c;
    if (
      (d !== "px" && !T && (c = u(l, r, a, "px")),
      (k = l.getCTM && pv(l)),
      (x || d === "%") && (Ua[r] || ~r.indexOf("adius")))
    )
      return (
        (w = k ? l.getBBox()[m ? "width" : "height"] : l[y]),
        Ht(x ? (c / w) * _ : (c / 100) * w)
      );
    if (
      ((h[m ? "width" : "height"] = _ + (T ? d : s)),
      (S =
        (s !== "rem" && ~r.indexOf("adius")) ||
        (s === "em" && l.appendChild && !p)
          ? l
          : l.parentNode),
      k && (S = (l.ownerSVGElement || {}).parentNode),
      (!S || S === fi || !S.appendChild) && (S = fi.body),
      (E = S._gsap),
      E && x && E.width && m && E.time === ol.time && !E.uncache)
    )
      return Ht((c / E.width) * _);
    if (x && (r === "height" || r === "width")) {
      var j = l.style[r];
      ((l.style[r] = _ + s), (w = l[y]), j ? (l.style[r] = j) : _i(l, r));
    } else
      ((x || d === "%") &&
        !tS[fl(S, "display")] &&
        (h.position = fl(l, "position")),
        S === l && (h.position = "static"),
        S.appendChild(Fi),
        (w = Fi[y]),
        S.removeChild(Fi),
        (h.position = "absolute"));
    return (
      m && x && ((E = Pi(S)), (E.time = ol.time), (E.width = S[y])),
      Ht(T ? (w * c) / _ : w && c ? (_ / w) * c : 0)
    );
  },
  Ra = function (l, r, a, s) {
    var c;
    return (
      mm || Bh(),
      r in ra &&
        r !== "transform" &&
        ((r = ra[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      Ua[r] && r !== "transform"
        ? ((c = Ro(l, s)),
          (c =
            r !== "transformOrigin"
              ? c[r]
              : c.svg
                ? c.origin
                : Mu(fl(l, Zn)) + " " + c.zOrigin + "px"))
        : ((c = l.style[r]),
          (!c || c === "auto" || s || ~(c + "").indexOf("calc(")) &&
            (c =
              (zu[r] && zu[r](l, r, a)) ||
              fl(l, r) ||
              Ry(l, r) ||
              (r === "opacity" ? 1 : 0))),
      a && !~(c + "").trim().indexOf(" ") ? xi(l, r, c, a) + a : c
    );
  },
  nS = function (l, r, a, s) {
    if (!a || a === "none") {
      var c = ss(r, l, 1),
        d = c && fl(l, c, 1);
      d && d !== a
        ? ((r = c), (a = d))
        : r === "borderColor" && (a = fl(l, "borderTopColor"));
    }
    var h = new Qn(this._pt, l.style, r, 0, 1, rv),
      m = 0,
      p = 0,
      y,
      _,
      T,
      x,
      w,
      S,
      E,
      k,
      j,
      G,
      U,
      Y;
    if (
      ((h.b = a),
      (h.e = s),
      (a += ""),
      (s += ""),
      s.substring(0, 6) === "var(--" &&
        (s = fl(l, s.substring(4, s.indexOf(")")))),
      s === "auto" &&
        ((S = l.style[r]),
        (l.style[r] = s),
        (s = fl(l, r) || s),
        S ? (l.style[r] = S) : _i(l, r)),
      (y = [a, s]),
      Py(y),
      (a = y[0]),
      (s = y[1]),
      (T = a.match(Kr) || []),
      (Y = s.match(Kr) || []),
      Y.length)
    ) {
      for (; (_ = Kr.exec(s)); )
        ((E = _[0]),
          (j = s.substring(m, _.index)),
          w
            ? (w = (w + 1) % 5)
            : (j.substr(-5) === "rgba(" || j.substr(-5) === "hsla(") && (w = 1),
          E !== (S = T[p++] || "") &&
            ((x = parseFloat(S) || 0),
            (U = S.substr((x + "").length)),
            E.charAt(1) === "=" && (E = Pr(x, E) + U),
            (k = parseFloat(E)),
            (G = E.substr((k + "").length)),
            (m = Kr.lastIndex - G.length),
            G ||
              ((G = G || dl.units[r] || U),
              m === s.length && ((s += G), (h.e += G))),
            U !== G && (x = xi(l, r, S, G) || 0),
            (h._pt = {
              _next: h._pt,
              p: j || p === 1 ? j : ",",
              s: x,
              c: k - x,
              m: (w && w < 4) || r === "zIndex" ? Math.round : 0,
            })));
      h.c = m < s.length ? s.substring(m, s.length) : "";
    } else h.r = r === "display" && s === "none" ? uv : cv;
    return (wy.test(s) && (h.e = 0), (this._pt = h), h);
  },
  Q1 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  lS = function (l) {
    var r = l.split(" "),
      a = r[0],
      s = r[1] || "50%";
    return (
      (a === "top" || a === "bottom" || s === "left" || s === "right") &&
        ((l = a), (a = s), (s = l)),
      (r[0] = Q1[a] || a),
      (r[1] = Q1[s] || s),
      r.join(" ")
    );
  },
  aS = function (l, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var a = r.t,
        s = a.style,
        c = r.u,
        d = a._gsap,
        h,
        m,
        p;
      if (c === "all" || c === !0) ((s.cssText = ""), (m = 1));
      else
        for (c = c.split(","), p = c.length; --p > -1; )
          ((h = c[p]),
            Ua[h] && ((m = 1), (h = h === "transformOrigin" ? Zn : Et)),
            _i(a, h));
      m &&
        (_i(a, Et),
        d &&
          (d.svg && a.removeAttribute("transform"),
          (s.scale = s.rotate = s.translate = "none"),
          Ro(a, 1),
          (d.uncache = 1),
          fv(s)));
    }
  },
  zu = {
    clearProps: function (l, r, a, s, c) {
      if (c.data !== "isFromStart") {
        var d = (l._pt = new Qn(l._pt, r, a, 0, 0, aS));
        return ((d.u = s), (d.pr = -10), (d.tween = c), l._props.push(a), 1);
      }
    },
  },
  No = [1, 0, 0, 1, 0, 0],
  gv = {},
  yv = function (l) {
    return l === "matrix(1, 0, 0, 1, 0, 0)" || l === "none" || !l;
  },
  Z1 = function (l) {
    var r = fl(l, Et);
    return yv(r) ? No : r.substr(7).match(Cy).map(Ht);
  },
  ym = function (l, r) {
    var a = l._gsap || Pi(l),
      s = l.style,
      c = Z1(l),
      d,
      h,
      m,
      p;
    return a.svg && l.getAttribute("transform")
      ? ((m = l.transform.baseVal.consolidate().matrix),
        (c = [m.a, m.b, m.c, m.d, m.e, m.f]),
        c.join(",") === "1,0,0,1,0,0" ? No : c)
      : (c === No &&
          !l.offsetParent &&
          l !== Wr &&
          !a.svg &&
          ((m = s.display),
          (s.display = "block"),
          (d = l.parentNode),
          (!d || (!l.offsetParent && !l.getBoundingClientRect().width)) &&
            ((p = 1), (h = l.nextElementSibling), Wr.appendChild(l)),
          (c = Z1(l)),
          m ? (s.display = m) : _i(l, "display"),
          p &&
            (h
              ? d.insertBefore(l, h)
              : d
                ? d.appendChild(l)
                : Wr.removeChild(l))),
        r && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
  },
  qh = function (l, r, a, s, c, d) {
    var h = l._gsap,
      m = c || ym(l, !0),
      p = h.xOrigin || 0,
      y = h.yOrigin || 0,
      _ = h.xOffset || 0,
      T = h.yOffset || 0,
      x = m[0],
      w = m[1],
      S = m[2],
      E = m[3],
      k = m[4],
      j = m[5],
      G = r.split(" "),
      U = parseFloat(G[0]) || 0,
      Y = parseFloat(G[1]) || 0,
      V,
      R,
      q,
      Q;
    (a
      ? m !== No &&
        (R = x * E - w * S) &&
        ((q = U * (E / R) + Y * (-S / R) + (S * j - E * k) / R),
        (Q = U * (-w / R) + Y * (x / R) - (x * j - w * k) / R),
        (U = q),
        (Y = Q))
      : ((V = mv(l)),
        (U = V.x + (~G[0].indexOf("%") ? (U / 100) * V.width : U)),
        (Y = V.y + (~(G[1] || G[0]).indexOf("%") ? (Y / 100) * V.height : Y))),
      s || (s !== !1 && h.smooth)
        ? ((k = U - p),
          (j = Y - y),
          (h.xOffset = _ + (k * x + j * S) - k),
          (h.yOffset = T + (k * w + j * E) - j))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = U),
      (h.yOrigin = Y),
      (h.smooth = !!s),
      (h.origin = r),
      (h.originIsAbsolute = !!a),
      (l.style[Zn] = "0px 0px"),
      d &&
        (di(d, h, "xOrigin", p, U),
        di(d, h, "yOrigin", y, Y),
        di(d, h, "xOffset", _, h.xOffset),
        di(d, h, "yOffset", T, h.yOffset)),
      l.setAttribute("data-svg-origin", U + " " + Y));
  },
  Ro = function (l, r) {
    var a = l._gsap || new ev(l);
    if ("x" in a && !r && !a.uncache) return a;
    var s = l.style,
      c = a.scaleX < 0,
      d = "px",
      h = "deg",
      m = getComputedStyle(l),
      p = fl(l, Zn) || "0",
      y,
      _,
      T,
      x,
      w,
      S,
      E,
      k,
      j,
      G,
      U,
      Y,
      V,
      R,
      q,
      Q,
      I,
      re,
      ne,
      pe,
      ge,
      me,
      O,
      F,
      J,
      de,
      M,
      A,
      Z,
      ee,
      te,
      ie;
    return (
      (y = _ = T = S = E = k = j = G = U = 0),
      (x = w = 1),
      (a.svg = !!(l.getCTM && pv(l))),
      m.translate &&
        ((m.translate !== "none" ||
          m.scale !== "none" ||
          m.rotate !== "none") &&
          (s[Et] =
            (m.translate !== "none"
              ? "translate3d(" +
                (m.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (m.rotate !== "none" ? "rotate(" + m.rotate + ") " : "") +
            (m.scale !== "none"
              ? "scale(" + m.scale.split(" ").join(",") + ") "
              : "") +
            (m[Et] !== "none" ? m[Et] : "")),
        (s.scale = s.rotate = s.translate = "none")),
      (R = ym(l, a.svg)),
      a.svg &&
        (a.uncache
          ? ((J = l.getBBox()),
            (p = a.xOrigin - J.x + "px " + (a.yOrigin - J.y) + "px"),
            (F = ""))
          : (F = !r && l.getAttribute("data-svg-origin")),
        qh(l, F || p, !!F || a.originIsAbsolute, a.smooth !== !1, R)),
      (Y = a.xOrigin || 0),
      (V = a.yOrigin || 0),
      R !== No &&
        ((re = R[0]),
        (ne = R[1]),
        (pe = R[2]),
        (ge = R[3]),
        (y = me = R[4]),
        (_ = O = R[5]),
        R.length === 6
          ? ((x = Math.sqrt(re * re + ne * ne)),
            (w = Math.sqrt(ge * ge + pe * pe)),
            (S = re || ne ? Yr(ne, re) * Qi : 0),
            (j = pe || ge ? Yr(pe, ge) * Qi + S : 0),
            j && (w *= Math.abs(Math.cos(j * $r))),
            a.svg &&
              ((y -= Y - (Y * re + V * pe)), (_ -= V - (Y * ne + V * ge))))
          : ((ie = R[6]),
            (ee = R[7]),
            (M = R[8]),
            (A = R[9]),
            (Z = R[10]),
            (te = R[11]),
            (y = R[12]),
            (_ = R[13]),
            (T = R[14]),
            (q = Yr(ie, Z)),
            (E = q * Qi),
            q &&
              ((Q = Math.cos(-q)),
              (I = Math.sin(-q)),
              (F = me * Q + M * I),
              (J = O * Q + A * I),
              (de = ie * Q + Z * I),
              (M = me * -I + M * Q),
              (A = O * -I + A * Q),
              (Z = ie * -I + Z * Q),
              (te = ee * -I + te * Q),
              (me = F),
              (O = J),
              (ie = de)),
            (q = Yr(-pe, Z)),
            (k = q * Qi),
            q &&
              ((Q = Math.cos(-q)),
              (I = Math.sin(-q)),
              (F = re * Q - M * I),
              (J = ne * Q - A * I),
              (de = pe * Q - Z * I),
              (te = ge * I + te * Q),
              (re = F),
              (ne = J),
              (pe = de)),
            (q = Yr(ne, re)),
            (S = q * Qi),
            q &&
              ((Q = Math.cos(q)),
              (I = Math.sin(q)),
              (F = re * Q + ne * I),
              (J = me * Q + O * I),
              (ne = ne * Q - re * I),
              (O = O * Q - me * I),
              (re = F),
              (me = J)),
            E &&
              Math.abs(E) + Math.abs(S) > 359.9 &&
              ((E = S = 0), (k = 180 - k)),
            (x = Ht(Math.sqrt(re * re + ne * ne + pe * pe))),
            (w = Ht(Math.sqrt(O * O + ie * ie))),
            (q = Yr(me, O)),
            (j = Math.abs(q) > 2e-4 ? q * Qi : 0),
            (U = te ? 1 / (te < 0 ? -te : te) : 0)),
        a.svg &&
          ((F = l.getAttribute("transform")),
          (a.forceCSS = l.setAttribute("transform", "") || !yv(fl(l, Et))),
          F && l.setAttribute("transform", F))),
      Math.abs(j) > 90 &&
        Math.abs(j) < 270 &&
        (c
          ? ((x *= -1), (j += S <= 0 ? 180 : -180), (S += S <= 0 ? 180 : -180))
          : ((w *= -1), (j += j <= 0 ? 180 : -180))),
      (r = r || a.uncache),
      (a.x =
        y -
        ((a.xPercent =
          y &&
          ((!r && a.xPercent) ||
            (Math.round(l.offsetWidth / 2) === Math.round(-y) ? -50 : 0)))
          ? (l.offsetWidth * a.xPercent) / 100
          : 0) +
        d),
      (a.y =
        _ -
        ((a.yPercent =
          _ &&
          ((!r && a.yPercent) ||
            (Math.round(l.offsetHeight / 2) === Math.round(-_) ? -50 : 0)))
          ? (l.offsetHeight * a.yPercent) / 100
          : 0) +
        d),
      (a.z = T + d),
      (a.scaleX = Ht(x)),
      (a.scaleY = Ht(w)),
      (a.rotation = Ht(S) + h),
      (a.rotationX = Ht(E) + h),
      (a.rotationY = Ht(k) + h),
      (a.skewX = j + h),
      (a.skewY = G + h),
      (a.transformPerspective = U + d),
      (a.zOrigin = parseFloat(p.split(" ")[2]) || (!r && a.zOrigin) || 0) &&
        (s[Zn] = Mu(p)),
      (a.xOffset = a.yOffset = 0),
      (a.force3D = dl.force3D),
      (a.renderTransform = a.svg ? rS : hv ? vv : iS),
      (a.uncache = 0),
      a
    );
  },
  Mu = function (l) {
    return (l = l.split(" "))[0] + " " + l[1];
  },
  hh = function (l, r, a) {
    var s = xn(r);
    return Ht(parseFloat(r) + parseFloat(xi(l, "x", a + "px", s))) + s;
  },
  iS = function (l, r) {
    ((r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      vv(l, r));
  },
  Gi = "0deg",
  eo = "0px",
  Xi = ") ",
  vv = function (l, r) {
    var a = r || this,
      s = a.xPercent,
      c = a.yPercent,
      d = a.x,
      h = a.y,
      m = a.z,
      p = a.rotation,
      y = a.rotationY,
      _ = a.rotationX,
      T = a.skewX,
      x = a.skewY,
      w = a.scaleX,
      S = a.scaleY,
      E = a.transformPerspective,
      k = a.force3D,
      j = a.target,
      G = a.zOrigin,
      U = "",
      Y = (k === "auto" && l && l !== 1) || k === !0;
    if (G && (_ !== Gi || y !== Gi)) {
      var V = parseFloat(y) * $r,
        R = Math.sin(V),
        q = Math.cos(V),
        Q;
      ((V = parseFloat(_) * $r),
        (Q = Math.cos(V)),
        (d = hh(j, d, R * Q * -G)),
        (h = hh(j, h, -Math.sin(V) * -G)),
        (m = hh(j, m, q * Q * -G + G)));
    }
    (E !== eo && (U += "perspective(" + E + Xi),
      (s || c) && (U += "translate(" + s + "%, " + c + "%) "),
      (Y || d !== eo || h !== eo || m !== eo) &&
        (U +=
          m !== eo || Y
            ? "translate3d(" + d + ", " + h + ", " + m + ") "
            : "translate(" + d + ", " + h + Xi),
      p !== Gi && (U += "rotate(" + p + Xi),
      y !== Gi && (U += "rotateY(" + y + Xi),
      _ !== Gi && (U += "rotateX(" + _ + Xi),
      (T !== Gi || x !== Gi) && (U += "skew(" + T + ", " + x + Xi),
      (w !== 1 || S !== 1) && (U += "scale(" + w + ", " + S + Xi),
      (j.style[Et] = U || "translate(0, 0)"));
  },
  rS = function (l, r) {
    var a = r || this,
      s = a.xPercent,
      c = a.yPercent,
      d = a.x,
      h = a.y,
      m = a.rotation,
      p = a.skewX,
      y = a.skewY,
      _ = a.scaleX,
      T = a.scaleY,
      x = a.target,
      w = a.xOrigin,
      S = a.yOrigin,
      E = a.xOffset,
      k = a.yOffset,
      j = a.forceCSS,
      G = parseFloat(d),
      U = parseFloat(h),
      Y,
      V,
      R,
      q,
      Q;
    ((m = parseFloat(m)),
      (p = parseFloat(p)),
      (y = parseFloat(y)),
      y && ((y = parseFloat(y)), (p += y), (m += y)),
      m || p
        ? ((m *= $r),
          (p *= $r),
          (Y = Math.cos(m) * _),
          (V = Math.sin(m) * _),
          (R = Math.sin(m - p) * -T),
          (q = Math.cos(m - p) * T),
          p &&
            ((y *= $r),
            (Q = Math.tan(p - y)),
            (Q = Math.sqrt(1 + Q * Q)),
            (R *= Q),
            (q *= Q),
            y &&
              ((Q = Math.tan(y)),
              (Q = Math.sqrt(1 + Q * Q)),
              (Y *= Q),
              (V *= Q))),
          (Y = Ht(Y)),
          (V = Ht(V)),
          (R = Ht(R)),
          (q = Ht(q)))
        : ((Y = _), (q = T), (V = R = 0)),
      ((G && !~(d + "").indexOf("px")) || (U && !~(h + "").indexOf("px"))) &&
        ((G = xi(x, "x", d, "px")), (U = xi(x, "y", h, "px"))),
      (w || S || E || k) &&
        ((G = Ht(G + w - (w * Y + S * R) + E)),
        (U = Ht(U + S - (w * V + S * q) + k))),
      (s || c) &&
        ((Q = x.getBBox()),
        (G = Ht(G + (s / 100) * Q.width)),
        (U = Ht(U + (c / 100) * Q.height))),
      (Q =
        "matrix(" + Y + "," + V + "," + R + "," + q + "," + G + "," + U + ")"),
      x.setAttribute("transform", Q),
      j && (x.style[Et] = Q));
  },
  sS = function (l, r, a, s, c) {
    var d = 360,
      h = an(c),
      m = parseFloat(c) * (h && ~c.indexOf("rad") ? Qi : 1),
      p = m - s,
      y = s + p + "deg",
      _,
      T;
    return (
      h &&
        ((_ = c.split("_")[1]),
        _ === "short" && ((p %= d), p !== p % (d / 2) && (p += p < 0 ? d : -d)),
        _ === "cw" && p < 0
          ? (p = ((p + d * L1) % d) - ~~(p / d) * d)
          : _ === "ccw" && p > 0 && (p = ((p - d * L1) % d) - ~~(p / d) * d)),
      (l._pt = T = new Qn(l._pt, r, a, s, p, X2)),
      (T.e = y),
      (T.u = "deg"),
      l._props.push(a),
      T
    );
  },
  K1 = function (l, r) {
    for (var a in r) l[a] = r[a];
    return l;
  },
  oS = function (l, r, a) {
    var s = K1({}, a._gsap),
      c = "perspective,force3D,transformOrigin,svgOrigin",
      d = a.style,
      h,
      m,
      p,
      y,
      _,
      T,
      x,
      w;
    s.svg
      ? ((p = a.getAttribute("transform")),
        a.setAttribute("transform", ""),
        (d[Et] = r),
        (h = Ro(a, 1)),
        _i(a, Et),
        a.setAttribute("transform", p))
      : ((p = getComputedStyle(a)[Et]),
        (d[Et] = r),
        (h = Ro(a, 1)),
        (d[Et] = p));
    for (m in Ua)
      ((p = s[m]),
        (y = h[m]),
        p !== y &&
          c.indexOf(m) < 0 &&
          ((x = xn(p)),
          (w = xn(y)),
          (_ = x !== w ? xi(a, m, p, w) : parseFloat(p)),
          (T = parseFloat(y)),
          (l._pt = new Qn(l._pt, h, m, _, T - _, Uh)),
          (l._pt.u = w || 0),
          l._props.push(m)));
    K1(h, s);
  };
Vn("padding,margin,Width,Radius", function (u, l) {
  var r = "Top",
    a = "Right",
    s = "Bottom",
    c = "Left",
    d = (l < 3 ? [r, a, s, c] : [r + c, r + a, s + a, s + c]).map(function (h) {
      return l < 2 ? u + h : "border" + h + u;
    });
  zu[l > 1 ? "border" + u : u] = function (h, m, p, y, _) {
    var T, x;
    if (arguments.length < 4)
      return (
        (T = d.map(function (w) {
          return Ra(h, w, p);
        })),
        (x = T.join(" ")),
        x.split(T[0]).length === 5 ? T[0] : x
      );
    ((T = (y + "").split(" ")),
      (x = {}),
      d.forEach(function (w, S) {
        return (x[w] = T[S] = T[S] || T[((S - 1) / 2) | 0]);
      }),
      h.init(m, x, _));
  };
});
var _v = {
  name: "css",
  register: Bh,
  targetTest: function (l) {
    return l.style && l.nodeType;
  },
  init: function (l, r, a, s, c) {
    var d = this._props,
      h = l.style,
      m = a.vars.startAt,
      p,
      y,
      _,
      T,
      x,
      w,
      S,
      E,
      k,
      j,
      G,
      U,
      Y,
      V,
      R,
      q,
      Q;
    (mm || Bh(),
      (this.styles = this.styles || dv(l)),
      (q = this.styles.props),
      (this.tween = a));
    for (S in r)
      if (S !== "autoRound" && ((y = r[S]), !(rl[S] && tv(S, r, a, s, l, c)))) {
        if (
          ((x = typeof y),
          (w = zu[S]),
          x === "function" && ((y = y.call(a, s, l, c)), (x = typeof y)),
          x === "string" && ~y.indexOf("random(") && (y = Eo(y)),
          w)
        )
          w(this, l, S, y, a) && (R = 1);
        else if (S.substr(0, 2) === "--")
          ((p = (getComputedStyle(l).getPropertyValue(S) + "").trim()),
            (y += ""),
            (gi.lastIndex = 0),
            gi.test(p) ||
              ((E = xn(p)),
              (k = xn(y)),
              k ? E !== k && (p = xi(l, S, p, k) + k) : E && (y += E)),
            this.add(h, "setProperty", p, y, s, c, 0, 0, S),
            d.push(S),
            q.push(S, 0, h[S]));
        else if (x !== "undefined") {
          if (
            (m && S in m
              ? ((p = typeof m[S] == "function" ? m[S].call(a, s, l, c) : m[S]),
                an(p) && ~p.indexOf("random(") && (p = Eo(p)),
                xn(p + "") ||
                  p === "auto" ||
                  (p += dl.units[S] || xn(Ra(l, S)) || ""),
                (p + "").charAt(1) === "=" && (p = Ra(l, S)))
              : (p = Ra(l, S)),
            (T = parseFloat(p)),
            (j = x === "string" && y.charAt(1) === "=" && y.substr(0, 2)),
            j && (y = y.substr(2)),
            (_ = parseFloat(y)),
            S in ra &&
              (S === "autoAlpha" &&
                (T === 1 && Ra(l, "visibility") === "hidden" && _ && (T = 0),
                q.push("visibility", 0, h.visibility),
                di(
                  this,
                  h,
                  "visibility",
                  T ? "inherit" : "hidden",
                  _ ? "inherit" : "hidden",
                  !_,
                )),
              S !== "scale" &&
                S !== "transform" &&
                ((S = ra[S]), ~S.indexOf(",") && (S = S.split(",")[0]))),
            (G = S in Ua),
            G)
          ) {
            if (
              (this.styles.save(S),
              (Q = y),
              x === "string" && y.substring(0, 6) === "var(--")
            ) {
              if (
                ((y = fl(l, y.substring(4, y.indexOf(")")))),
                y.substring(0, 5) === "calc(")
              ) {
                var I = l.style.perspective;
                ((l.style.perspective = y),
                  (y = fl(l, "perspective")),
                  I ? (l.style.perspective = I) : _i(l, "perspective"));
              }
              _ = parseFloat(y);
            }
            if (
              (U ||
                ((Y = l._gsap),
                (Y.renderTransform && !r.parseTransform) ||
                  Ro(l, r.parseTransform),
                (V = r.smoothOrigin !== !1 && Y.smooth),
                (U = this._pt =
                  new Qn(this._pt, h, Et, 0, 1, Y.renderTransform, Y, 0, -1)),
                (U.dep = 1)),
              S === "scale")
            )
              ((this._pt = new Qn(
                this._pt,
                Y,
                "scaleY",
                Y.scaleY,
                (j ? Pr(Y.scaleY, j + _) : _) - Y.scaleY || 0,
                Uh,
              )),
                (this._pt.u = 0),
                d.push("scaleY", S),
                (S += "X"));
            else if (S === "transformOrigin") {
              (q.push(Zn, 0, h[Zn]),
                (y = lS(y)),
                Y.svg
                  ? qh(l, y, 0, V, 0, this)
                  : ((k = parseFloat(y.split(" ")[2]) || 0),
                    k !== Y.zOrigin && di(this, Y, "zOrigin", Y.zOrigin, k),
                    di(this, h, S, Mu(p), Mu(y))));
              continue;
            } else if (S === "svgOrigin") {
              qh(l, y, 1, V, 0, this);
              continue;
            } else if (S in gv) {
              sS(this, Y, S, T, j ? Pr(T, j + y) : y);
              continue;
            } else if (S === "smoothOrigin") {
              di(this, Y, "smooth", Y.smooth, y);
              continue;
            } else if (S === "force3D") {
              Y[S] = y;
              continue;
            } else if (S === "transform") {
              oS(this, y, l);
              continue;
            }
          } else S in h || (S = ss(S) || S);
          if (G || ((_ || _ === 0) && (T || T === 0) && !G2.test(y) && S in h))
            ((E = (p + "").substr((T + "").length)),
              _ || (_ = 0),
              (k = xn(y) || (S in dl.units ? dl.units[S] : E)),
              E !== k && (T = xi(l, S, p, k)),
              (this._pt = new Qn(
                this._pt,
                G ? Y : h,
                S,
                T,
                (j ? Pr(T, j + _) : _) - T,
                !G && (k === "px" || S === "zIndex") && r.autoRound !== !1
                  ? Z2
                  : Uh,
              )),
              (this._pt.u = k || 0),
              G && Q !== y
                ? ((this._pt.b = p), (this._pt.e = Q), (this._pt.r = Q2))
                : E !== k &&
                  k !== "%" &&
                  ((this._pt.b = p), (this._pt.r = V2)));
          else if (S in h) nS.call(this, l, S, p, j ? j + y : y);
          else if (S in l) this.add(l, S, p || l[S], j ? j + y : y, s, c);
          else if (S !== "parseTransform") {
            am(S, y);
            continue;
          }
          (G ||
            (S in h
              ? q.push(S, 0, h[S])
              : typeof l[S] == "function"
                ? q.push(S, 2, l[S]())
                : q.push(S, 1, p || l[S])),
            d.push(S));
        }
      }
    R && sv(this);
  },
  render: function (l, r) {
    if (r.tween._time || !pm())
      for (var a = r._pt; a; ) (a.r(l, a.d), (a = a._next));
    else r.styles.revert();
  },
  get: Ra,
  aliases: ra,
  getSetter: function (l, r, a) {
    var s = ra[r];
    return (
      s && s.indexOf(",") < 0 && (r = s),
      r in Ua && r !== Zn && (l._gsap.x || Ra(l, "x"))
        ? a && q1 === a
          ? r === "scale"
            ? P2
            : J2
          : (q1 = a || {}) && (r === "scale" ? W2 : $2)
        : l.style && !tm(l.style[r])
          ? K2
          : ~r.indexOf("-")
            ? F2
            : dm(l, r)
    );
  },
  core: { _removeProperty: _i, _getMatrix: ym },
};
Kn.utils.checkPrefix = ss;
Kn.core.getStyleSaver = dv;
(function (u, l, r, a) {
  var s = Vn(u + "," + l + "," + r, function (c) {
    Ua[c] = 1;
  });
  (Vn(l, function (c) {
    ((dl.units[c] = "deg"), (gv[c] = 1));
  }),
    (ra[s[13]] = u + "," + l),
    Vn(a, function (c) {
      var d = c.split(":");
      ra[d[1]] = s[d[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
Vn(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (u) {
    dl.units[u] = "px";
  },
);
Kn.registerPlugin(_v);
var Ae = Kn.registerPlugin(_v) || Kn;
Ae.core.Tween;
function cS(u, l) {
  for (var r = 0; r < l.length; r++) {
    var a = l[r];
    ((a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(u, a.key, a));
  }
}
function uS(u, l, r) {
  return (l && cS(u.prototype, l), u);
}
var fn,
  yu,
  cl,
  hi,
  mi,
  Ir,
  xv,
  Zi,
  po,
  bv,
  Da,
  Vl,
  Sv,
  Tv = function () {
    return (
      fn ||
      (typeof window < "u" && (fn = window.gsap) && fn.registerPlugin && fn)
    );
  },
  Av = 1,
  Jr = [],
  qe = [],
  oa = [],
  go = Date.now,
  Lh = function (l, r) {
    return r;
  },
  fS = function () {
    var l = po.core,
      r = l.bridge || {},
      a = l._scrollers,
      s = l._proxies;
    (a.push.apply(a, qe),
      s.push.apply(s, oa),
      (qe = a),
      (oa = s),
      (Lh = function (d, h) {
        return r[d](h);
      }));
  },
  yi = function (l, r) {
    return ~oa.indexOf(l) && oa[oa.indexOf(l) + 1][r];
  },
  yo = function (l) {
    return !!~bv.indexOf(l);
  },
  zn = function (l, r, a, s, c) {
    return l.addEventListener(r, a, { passive: s !== !1, capture: !!c });
  },
  En = function (l, r, a, s) {
    return l.removeEventListener(r, a, !!s);
  },
  $c = "scrollLeft",
  Ic = "scrollTop",
  Yh = function () {
    return (Da && Da.isPressed) || qe.cache++;
  },
  Nu = function (l, r) {
    var a = function s(c) {
      if (c || c === 0) {
        Av && (cl.history.scrollRestoration = "manual");
        var d = Da && Da.isPressed;
        ((c = s.v = Math.round(c) || (Da && Da.iOS ? 1 : 0)),
          l(c),
          (s.cacheID = qe.cache),
          d && Lh("ss", c));
      } else
        (r || qe.cache !== s.cacheID || Lh("ref")) &&
          ((s.cacheID = qe.cache), (s.v = l()));
      return s.v + s.offset;
    };
    return ((a.offset = 0), l && a);
  },
  Dn = {
    s: $c,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Nu(function (u) {
      return arguments.length
        ? cl.scrollTo(u, It.sc())
        : cl.pageXOffset || hi[$c] || mi[$c] || Ir[$c] || 0;
    }),
  },
  It = {
    s: Ic,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Dn,
    sc: Nu(function (u) {
      return arguments.length
        ? cl.scrollTo(Dn.sc(), u)
        : cl.pageYOffset || hi[Ic] || mi[Ic] || Ir[Ic] || 0;
    }),
  },
  Gn = function (l, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || fn.utils.toArray)(l)[0] ||
      (typeof l == "string" && fn.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", l)
        : null)
    );
  },
  dS = function (l, r) {
    for (var a = r.length; a--; ) if (r[a] === l || r[a].contains(l)) return !0;
    return !1;
  },
  bi = function (l, r) {
    var a = r.s,
      s = r.sc;
    yo(l) && (l = hi.scrollingElement || mi);
    var c = qe.indexOf(l),
      d = s === It.sc ? 1 : 2;
    (!~c && (c = qe.push(l) - 1), qe[c + d] || zn(l, "scroll", Yh));
    var h = qe[c + d],
      m =
        h ||
        (qe[c + d] =
          Nu(yi(l, a), !0) ||
          (yo(l)
            ? s
            : Nu(function (p) {
                return arguments.length ? (l[a] = p) : l[a];
              })));
    return (
      (m.target = l),
      h || (m.smooth = fn.getProperty(l, "scrollBehavior") === "smooth"),
      m
    );
  },
  Gh = function (l, r, a) {
    var s = l,
      c = l,
      d = go(),
      h = d,
      m = r || 50,
      p = Math.max(500, m * 3),
      y = function (w, S) {
        var E = go();
        S || E - d > m
          ? ((c = s), (s = w), (h = d), (d = E))
          : a
            ? (s += w)
            : (s = c + ((w - c) / (E - h)) * (d - h));
      },
      _ = function () {
        ((c = s = a ? 0 : s), (h = d = 0));
      },
      T = function (w) {
        var S = h,
          E = c,
          k = go();
        return (
          (w || w === 0) && w !== s && y(w),
          d === h || k - h > p
            ? 0
            : ((s + (a ? E : -E)) / ((a ? k : d) - S)) * 1e3
        );
      };
    return { update: y, reset: _, getVelocity: T };
  },
  to = function (l, r) {
    return (
      r && !l._gsapAllow && l.preventDefault(),
      l.changedTouches ? l.changedTouches[0] : l
    );
  },
  F1 = function (l) {
    var r = Math.max.apply(Math, l),
      a = Math.min.apply(Math, l);
    return Math.abs(r) >= Math.abs(a) ? r : a;
  },
  Cv = function () {
    ((po = fn.core.globals().ScrollTrigger), po && po.core && fS());
  },
  wv = function (l) {
    return (
      (fn = l || Tv()),
      !yu &&
        fn &&
        typeof document < "u" &&
        document.body &&
        ((cl = window),
        (hi = document),
        (mi = hi.documentElement),
        (Ir = hi.body),
        (bv = [cl, hi, mi, Ir]),
        fn.utils.clamp,
        (Sv = fn.core.context || function () {}),
        (Zi = "onpointerenter" in Ir ? "pointer" : "mouse"),
        (xv = qt.isTouch =
          cl.matchMedia &&
          cl.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in cl ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Vl = qt.eventTypes =
          (
            "ontouchstart" in mi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in mi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Av = 0);
        }, 500),
        Cv(),
        (yu = 1)),
      yu
    );
  };
Dn.op = It;
qe.cache = 0;
var qt = (function () {
  function u(r) {
    this.init(r);
  }
  var l = u.prototype;
  return (
    (l.init = function (a) {
      (yu || wv(fn) || console.warn("Please gsap.registerPlugin(Observer)"),
        po || Cv());
      var s = a.tolerance,
        c = a.dragMinimum,
        d = a.type,
        h = a.target,
        m = a.lineHeight,
        p = a.debounce,
        y = a.preventDefault,
        _ = a.onStop,
        T = a.onStopDelay,
        x = a.ignore,
        w = a.wheelSpeed,
        S = a.event,
        E = a.onDragStart,
        k = a.onDragEnd,
        j = a.onDrag,
        G = a.onPress,
        U = a.onRelease,
        Y = a.onRight,
        V = a.onLeft,
        R = a.onUp,
        q = a.onDown,
        Q = a.onChangeX,
        I = a.onChangeY,
        re = a.onChange,
        ne = a.onToggleX,
        pe = a.onToggleY,
        ge = a.onHover,
        me = a.onHoverEnd,
        O = a.onMove,
        F = a.ignoreCheck,
        J = a.isNormalizer,
        de = a.onGestureStart,
        M = a.onGestureEnd,
        A = a.onWheel,
        Z = a.onEnable,
        ee = a.onDisable,
        te = a.onClick,
        ie = a.scrollSpeed,
        fe = a.capture,
        le = a.allowClicks,
        Ne = a.lockAxis,
        Se = a.onLockAxis;
      ((this.target = h = Gn(h) || mi),
        (this.vars = a),
        x && (x = fn.utils.toArray(x)),
        (s = s || 1e-9),
        (c = c || 0),
        (w = w || 1),
        (ie = ie || 1),
        (d = d || "wheel,touch,pointer"),
        (p = p !== !1),
        m || (m = parseFloat(cl.getComputedStyle(Ir).lineHeight) || 22));
      var Qe,
        pt,
        gt,
        Ge,
        et,
        en,
        rn,
        K = this,
        hn = 0,
        Fn = 0,
        pl = a.passive || (!y && a.passive !== !1),
        ct = bi(h, Dn),
        Bl = bi(h, It),
        Zl = ct(),
        Dt = Bl(),
        Yt =
          ~d.indexOf("touch") &&
          !~d.indexOf("pointer") &&
          Vl[0] === "pointerdown",
        ql = yo(h),
        yt = h.ownerDocument || hi,
        mn = [0, 0, 0],
        kn = [0, 0, 0],
        gl = 0,
        Ai = function () {
          return (gl = go());
        },
        zt = function (ye, Je) {
          return (
            ((K.event = ye) && x && dS(ye.target, x)) ||
            (Je && Yt && ye.pointerType !== "touch") ||
            (F && F(ye, Je))
          );
        },
        Kl = function () {
          (K._vx.reset(), K._vy.reset(), pt.pause(), _ && _(K));
        },
        bt = function () {
          var ye = (K.deltaX = F1(mn)),
            Je = (K.deltaY = F1(kn)),
            ae = Math.abs(ye) >= s,
            we = Math.abs(Je) >= s;
          (re && (ae || we) && re(K, ye, Je, mn, kn),
            ae &&
              (Y && K.deltaX > 0 && Y(K),
              V && K.deltaX < 0 && V(K),
              Q && Q(K),
              ne && K.deltaX < 0 != hn < 0 && ne(K),
              (hn = K.deltaX),
              (mn[0] = mn[1] = mn[2] = 0)),
            we &&
              (q && K.deltaY > 0 && q(K),
              R && K.deltaY < 0 && R(K),
              I && I(K),
              pe && K.deltaY < 0 != Fn < 0 && pe(K),
              (Fn = K.deltaY),
              (kn[0] = kn[1] = kn[2] = 0)),
            (Ge || gt) &&
              (O && O(K),
              gt && (E && gt === 1 && E(K), j && j(K), (gt = 0)),
              (Ge = !1)),
            en && !(en = !1) && Se && Se(K),
            et && (A(K), (et = !1)),
            (Qe = 0));
        },
        Tn = function (ye, Je, ae) {
          ((mn[ae] += ye),
            (kn[ae] += Je),
            K._vx.update(ye),
            K._vy.update(Je),
            p ? Qe || (Qe = requestAnimationFrame(bt)) : bt());
        },
        Gt = function (ye, Je) {
          (Ne &&
            !rn &&
            ((K.axis = rn = Math.abs(ye) > Math.abs(Je) ? "x" : "y"),
            (en = !0)),
            rn !== "y" && ((mn[2] += ye), K._vx.update(ye, !0)),
            rn !== "x" && ((kn[2] += Je), K._vy.update(Je, !0)),
            p ? Qe || (Qe = requestAnimationFrame(bt)) : bt());
        },
        Fl = function (ye) {
          if (!zt(ye, 1)) {
            ye = to(ye, y);
            var Je = ye.clientX,
              ae = ye.clientY,
              we = Je - K.x,
              ve = ae - K.y,
              Te = K.isDragging;
            ((K.x = Je),
              (K.y = ae),
              (Te ||
                ((we || ve) &&
                  (Math.abs(K.startX - Je) >= c ||
                    Math.abs(K.startY - ae) >= c))) &&
                (gt || (gt = Te ? 2 : 1),
                Te || (K.isDragging = !0),
                Gt(we, ve)));
          }
        },
        ua = (K.onPress = function (Ce) {
          zt(Ce, 1) ||
            (Ce && Ce.button) ||
            ((K.axis = rn = null),
            pt.pause(),
            (K.isPressed = !0),
            (Ce = to(Ce)),
            (hn = Fn = 0),
            (K.startX = K.x = Ce.clientX),
            (K.startY = K.y = Ce.clientY),
            K._vx.reset(),
            K._vy.reset(),
            zn(J ? h : yt, Vl[1], Fl, pl, !0),
            (K.deltaX = K.deltaY = 0),
            G && G(K));
        }),
        Oe = (K.onRelease = function (Ce) {
          if (!zt(Ce, 1)) {
            En(J ? h : yt, Vl[1], Fl, !0);
            var ye = !isNaN(K.y - K.startY),
              Je = K.isDragging,
              ae =
                Je &&
                (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3),
              we = to(Ce);
            (!ae &&
              ye &&
              (K._vx.reset(),
              K._vy.reset(),
              y &&
                le &&
                fn.delayedCall(0.08, function () {
                  if (go() - gl > 300 && !Ce.defaultPrevented) {
                    if (Ce.target.click) Ce.target.click();
                    else if (yt.createEvent) {
                      var ve = yt.createEvent("MouseEvents");
                      (ve.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        cl,
                        1,
                        we.screenX,
                        we.screenY,
                        we.clientX,
                        we.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        Ce.target.dispatchEvent(ve));
                    }
                  }
                })),
              (K.isDragging = K.isGesturing = K.isPressed = !1),
              _ && Je && !J && pt.restart(!0),
              gt && bt(),
              k && Je && k(K),
              U && U(K, ae));
          }
        }),
        yl = function (ye) {
          return (
            ye.touches &&
            ye.touches.length > 1 &&
            (K.isGesturing = !0) &&
            de(ye, K.isDragging)
          );
        },
        pn = function () {
          return (K.isGesturing = !1) || M(K);
        },
        gn = function (ye) {
          if (!zt(ye)) {
            var Je = ct(),
              ae = Bl();
            (Tn((Je - Zl) * ie, (ae - Dt) * ie, 1),
              (Zl = Je),
              (Dt = ae),
              _ && pt.restart(!0));
          }
        },
        Jt = function (ye) {
          if (!zt(ye)) {
            ((ye = to(ye, y)), A && (et = !0));
            var Je =
              (ye.deltaMode === 1
                ? m
                : ye.deltaMode === 2
                  ? cl.innerHeight
                  : 1) * w;
            (Tn(ye.deltaX * Je, ye.deltaY * Je, 0), _ && !J && pt.restart(!0));
          }
        },
        vl = function (ye) {
          if (!zt(ye)) {
            var Je = ye.clientX,
              ae = ye.clientY,
              we = Je - K.x,
              ve = ae - K.y;
            ((K.x = Je),
              (K.y = ae),
              (Ge = !0),
              _ && pt.restart(!0),
              (we || ve) && Gt(we, ve));
          }
        },
        _l = function (ye) {
          ((K.event = ye), ge(K));
        },
        Ll = function (ye) {
          ((K.event = ye), me(K));
        },
        Ha = function (ye) {
          return zt(ye) || (to(ye, y) && te(K));
        };
      ((pt = K._dc = fn.delayedCall(T || 0.25, Kl).pause()),
        (K.deltaX = K.deltaY = 0),
        (K._vx = Gh(0, 50, !0)),
        (K._vy = Gh(0, 50, !0)),
        (K.scrollX = ct),
        (K.scrollY = Bl),
        (K.isDragging = K.isGesturing = K.isPressed = !1),
        Sv(this),
        (K.enable = function (Ce) {
          return (
            K.isEnabled ||
              (zn(ql ? yt : h, "scroll", Yh),
              d.indexOf("scroll") >= 0 && zn(ql ? yt : h, "scroll", gn, pl, fe),
              d.indexOf("wheel") >= 0 && zn(h, "wheel", Jt, pl, fe),
              ((d.indexOf("touch") >= 0 && xv) || d.indexOf("pointer") >= 0) &&
                (zn(h, Vl[0], ua, pl, fe),
                zn(yt, Vl[2], Oe),
                zn(yt, Vl[3], Oe),
                le && zn(h, "click", Ai, !0, !0),
                te && zn(h, "click", Ha),
                de && zn(yt, "gesturestart", yl),
                M && zn(yt, "gestureend", pn),
                ge && zn(h, Zi + "enter", _l),
                me && zn(h, Zi + "leave", Ll),
                O && zn(h, Zi + "move", vl)),
              (K.isEnabled = !0),
              (K.isDragging = K.isGesturing = K.isPressed = Ge = gt = !1),
              K._vx.reset(),
              K._vy.reset(),
              (Zl = ct()),
              (Dt = Bl()),
              Ce && Ce.type && ua(Ce),
              Z && Z(K)),
            K
          );
        }),
        (K.disable = function () {
          K.isEnabled &&
            (Jr.filter(function (Ce) {
              return Ce !== K && yo(Ce.target);
            }).length || En(ql ? yt : h, "scroll", Yh),
            K.isPressed &&
              (K._vx.reset(), K._vy.reset(), En(J ? h : yt, Vl[1], Fl, !0)),
            En(ql ? yt : h, "scroll", gn, fe),
            En(h, "wheel", Jt, fe),
            En(h, Vl[0], ua, fe),
            En(yt, Vl[2], Oe),
            En(yt, Vl[3], Oe),
            En(h, "click", Ai, !0),
            En(h, "click", Ha),
            En(yt, "gesturestart", yl),
            En(yt, "gestureend", pn),
            En(h, Zi + "enter", _l),
            En(h, Zi + "leave", Ll),
            En(h, Zi + "move", vl),
            (K.isEnabled = K.isPressed = K.isDragging = !1),
            ee && ee(K));
        }),
        (K.kill = K.revert =
          function () {
            K.disable();
            var Ce = Jr.indexOf(K);
            (Ce >= 0 && Jr.splice(Ce, 1), Da === K && (Da = 0));
          }),
        Jr.push(K),
        J && yo(h) && (Da = K),
        K.enable(S));
    }),
    uS(u, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    u
  );
})();
qt.version = "3.14.2";
qt.create = function (u) {
  return new qt(u);
};
qt.register = wv;
qt.getAll = function () {
  return Jr.slice();
};
qt.getById = function (u) {
  return Jr.filter(function (l) {
    return l.vars.id === u;
  })[0];
};
Tv() && fn.registerPlugin(qt);
var oe,
  Qr,
  Be,
  ut,
  sl,
  Ie,
  vm,
  Ru,
  Oo,
  vo,
  ro,
  eu,
  vn,
  Lu,
  Xh,
  Nn,
  J1,
  P1,
  Zr,
  Ev,
  mh,
  zv,
  Mn,
  Vh,
  Mv,
  Nv,
  ci,
  Qh,
  _m,
  es,
  xm,
  _o,
  Zh,
  ph,
  tu = 1,
  _n = Date.now,
  gh = _n(),
  Hl = 0,
  so = 0,
  W1 = function (l, r, a) {
    var s = il(l) && (l.substr(0, 6) === "clamp(" || l.indexOf("max") > -1);
    return ((a["_" + r + "Clamp"] = s), s ? l.substr(6, l.length - 7) : l);
  },
  $1 = function (l, r) {
    return r && (!il(l) || l.substr(0, 6) !== "clamp(")
      ? "clamp(" + l + ")"
      : l;
  },
  hS = function u() {
    return so && requestAnimationFrame(u);
  },
  I1 = function () {
    return (Lu = 1);
  },
  ey = function () {
    return (Lu = 0);
  },
  aa = function (l) {
    return l;
  },
  oo = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  Rv = function () {
    return typeof window < "u";
  },
  Ov = function () {
    return oe || (Rv() && (oe = window.gsap) && oe.registerPlugin && oe);
  },
  lr = function (l) {
    return !!~vm.indexOf(l);
  },
  Dv = function (l) {
    return (
      (l === "Height" ? xm : Be["inner" + l]) ||
      sl["client" + l] ||
      Ie["client" + l]
    );
  },
  kv = function (l) {
    return (
      yi(l, "getBoundingClientRect") ||
      (lr(l)
        ? function () {
            return ((Su.width = Be.innerWidth), (Su.height = xm), Su);
          }
        : function () {
            return Oa(l);
          })
    );
  },
  mS = function (l, r, a) {
    var s = a.d,
      c = a.d2,
      d = a.a;
    return (d = yi(l, "getBoundingClientRect"))
      ? function () {
          return d()[s];
        }
      : function () {
          return (r ? Dv(c) : l["client" + c]) || 0;
        };
  },
  pS = function (l, r) {
    return !r || ~oa.indexOf(l)
      ? kv(l)
      : function () {
          return Su;
        };
  },
  sa = function (l, r) {
    var a = r.s,
      s = r.d2,
      c = r.d,
      d = r.a;
    return Math.max(
      0,
      (a = "scroll" + s) && (d = yi(l, a))
        ? d() - kv(l)()[c]
        : lr(l)
          ? (sl[a] || Ie[a]) - Dv(s)
          : l[a] - l["offset" + s],
    );
  },
  nu = function (l, r) {
    for (var a = 0; a < Zr.length; a += 3)
      (!r || ~r.indexOf(Zr[a + 1])) && l(Zr[a], Zr[a + 1], Zr[a + 2]);
  },
  il = function (l) {
    return typeof l == "string";
  },
  bn = function (l) {
    return typeof l == "function";
  },
  co = function (l) {
    return typeof l == "number";
  },
  Ki = function (l) {
    return typeof l == "object";
  },
  no = function (l, r, a) {
    return l && l.progress(r ? 0 : 1) && a && l.pause();
  },
  yh = function (l, r) {
    if (l.enabled) {
      var a = l._ctx
        ? l._ctx.add(function () {
            return r(l);
          })
        : r(l);
      a && a.totalTime && (l.callbackAnimation = a);
    }
  },
  Gr = Math.abs,
  jv = "left",
  Uv = "top",
  bm = "right",
  Sm = "bottom",
  er = "width",
  tr = "height",
  xo = "Right",
  bo = "Left",
  So = "Top",
  To = "Bottom",
  Kt = "padding",
  Dl = "margin",
  os = "Width",
  Tm = "Height",
  $t = "px",
  kl = function (l) {
    return Be.getComputedStyle(l);
  },
  gS = function (l) {
    var r = kl(l).position;
    l.style.position = r === "absolute" || r === "fixed" ? r : "relative";
  },
  ty = function (l, r) {
    for (var a in r) a in l || (l[a] = r[a]);
    return l;
  },
  Oa = function (l, r) {
    var a =
        r &&
        kl(l)[Xh] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        oe
          .to(l, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      s = l.getBoundingClientRect();
    return (a && a.progress(0).kill(), s);
  },
  Ou = function (l, r) {
    var a = r.d2;
    return l["offset" + a] || l["client" + a] || 0;
  },
  Hv = function (l) {
    var r = [],
      a = l.labels,
      s = l.duration(),
      c;
    for (c in a) r.push(a[c] / s);
    return r;
  },
  yS = function (l) {
    return function (r) {
      return oe.utils.snap(Hv(l), r);
    };
  },
  Am = function (l) {
    var r = oe.utils.snap(l),
      a =
        Array.isArray(l) &&
        l.slice(0).sort(function (s, c) {
          return s - c;
        });
    return a
      ? function (s, c, d) {
          d === void 0 && (d = 0.001);
          var h;
          if (!c) return r(s);
          if (c > 0) {
            for (s -= d, h = 0; h < a.length; h++) if (a[h] >= s) return a[h];
            return a[h - 1];
          } else for (h = a.length, s += d; h--; ) if (a[h] <= s) return a[h];
          return a[0];
        }
      : function (s, c, d) {
          d === void 0 && (d = 0.001);
          var h = r(s);
          return !c || Math.abs(h - s) < d || h - s < 0 == c < 0
            ? h
            : r(c < 0 ? s - l : s + l);
        };
  },
  vS = function (l) {
    return function (r, a) {
      return Am(Hv(l))(r, a.direction);
    };
  },
  lu = function (l, r, a, s) {
    return a.split(",").forEach(function (c) {
      return l(r, c, s);
    });
  },
  ln = function (l, r, a, s, c) {
    return l.addEventListener(r, a, { passive: !s, capture: !!c });
  },
  nn = function (l, r, a, s) {
    return l.removeEventListener(r, a, !!s);
  },
  au = function (l, r, a) {
    ((a = a && a.wheelHandler), a && (l(r, "wheel", a), l(r, "touchmove", a)));
  },
  ny = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  iu = { toggleActions: "play", anticipatePin: 0 },
  Du = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  vu = function (l, r) {
    if (il(l)) {
      var a = l.indexOf("="),
        s = ~a ? +(l.charAt(a - 1) + 1) * parseFloat(l.substr(a + 1)) : 0;
      (~a && (l.indexOf("%") > a && (s *= r / 100), (l = l.substr(0, a - 1))),
        (l =
          s +
          (l in Du
            ? Du[l] * r
            : ~l.indexOf("%")
              ? (parseFloat(l) * r) / 100
              : parseFloat(l) || 0)));
    }
    return l;
  },
  ru = function (l, r, a, s, c, d, h, m) {
    var p = c.startColor,
      y = c.endColor,
      _ = c.fontSize,
      T = c.indent,
      x = c.fontWeight,
      w = ut.createElement("div"),
      S = lr(a) || yi(a, "pinType") === "fixed",
      E = l.indexOf("scroller") !== -1,
      k = S ? Ie : a,
      j = l.indexOf("start") !== -1,
      G = j ? p : y,
      U =
        "border-color:" +
        G +
        ";font-size:" +
        _ +
        ";color:" +
        G +
        ";font-weight:" +
        x +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (U += "position:" + ((E || m) && S ? "fixed;" : "absolute;")),
      (E || m || !S) &&
        (U += (s === It ? bm : Sm) + ":" + (d + parseFloat(T)) + "px;"),
      h &&
        (U +=
          "box-sizing:border-box;text-align:left;width:" +
          h.offsetWidth +
          "px;"),
      (w._isStart = j),
      w.setAttribute("class", "gsap-marker-" + l + (r ? " marker-" + r : "")),
      (w.style.cssText = U),
      (w.innerText = r || r === 0 ? l + "-" + r : l),
      k.children[0] ? k.insertBefore(w, k.children[0]) : k.appendChild(w),
      (w._offset = w["offset" + s.op.d2]),
      _u(w, 0, s, j),
      w
    );
  },
  _u = function (l, r, a, s) {
    var c = { display: "block" },
      d = a[s ? "os2" : "p2"],
      h = a[s ? "p2" : "os2"];
    ((l._isFlipped = s),
      (c[a.a + "Percent"] = s ? -100 : 0),
      (c[a.a] = s ? "1px" : 0),
      (c["border" + d + os] = 1),
      (c["border" + h + os] = 0),
      (c[a.p] = r + "px"),
      oe.set(l, c));
  },
  je = [],
  Kh = {},
  Do,
  ly = function () {
    return _n() - Hl > 34 && (Do || (Do = requestAnimationFrame(ka)));
  },
  Xr = function () {
    (!Mn || !Mn.isPressed || Mn.startX > Ie.clientWidth) &&
      (qe.cache++,
      Mn ? Do || (Do = requestAnimationFrame(ka)) : ka(),
      Hl || ir("scrollStart"),
      (Hl = _n()));
  },
  vh = function () {
    ((Nv = Be.innerWidth), (Mv = Be.innerHeight));
  },
  uo = function (l) {
    (qe.cache++,
      (l === !0 ||
        (!vn &&
          !zv &&
          !ut.fullscreenElement &&
          !ut.webkitFullscreenElement &&
          (!Vh ||
            Nv !== Be.innerWidth ||
            Math.abs(Be.innerHeight - Mv) > Be.innerHeight * 0.25))) &&
        Ru.restart(!0));
  },
  ar = {},
  _S = [],
  Bv = function u() {
    return nn(be, "scrollEnd", u) || Ji(!0);
  },
  ir = function (l) {
    return (
      (ar[l] &&
        ar[l].map(function (r) {
          return r();
        })) ||
      _S
    );
  },
  al = [],
  qv = function (l) {
    for (var r = 0; r < al.length; r += 5)
      (!l || (al[r + 4] && al[r + 4].query === l)) &&
        ((al[r].style.cssText = al[r + 1]),
        al[r].getBBox && al[r].setAttribute("transform", al[r + 2] || ""),
        (al[r + 3].uncache = 1));
  },
  Lv = function () {
    return qe.forEach(function (l) {
      return bn(l) && ++l.cacheID && (l.rec = l());
    });
  },
  Cm = function (l, r) {
    var a;
    for (Nn = 0; Nn < je.length; Nn++)
      ((a = je[Nn]),
        a && (!r || a._ctx === r) && (l ? a.kill(1) : a.revert(!0, !0)));
    ((_o = !0), r && qv(r), r || ir("revert"));
  },
  Yv = function (l, r) {
    (qe.cache++,
      (r || !Rn) &&
        qe.forEach(function (a) {
          return bn(a) && a.cacheID++ && (a.rec = 0);
        }),
      il(l) && (Be.history.scrollRestoration = _m = l));
  },
  Rn,
  nr = 0,
  ay,
  xS = function () {
    if (ay !== nr) {
      var l = (ay = nr);
      requestAnimationFrame(function () {
        return l === nr && Ji(!0);
      });
    }
  },
  Gv = function () {
    (Ie.appendChild(es),
      (xm = (!Mn && es.offsetHeight) || Be.innerHeight),
      Ie.removeChild(es));
  },
  iy = function (l) {
    return Oo(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (r) {
      return (r.style.display = l ? "none" : "block");
    });
  },
  Ji = function (l, r) {
    if (
      ((sl = ut.documentElement),
      (Ie = ut.body),
      (vm = [Be, ut, sl, Ie]),
      Hl && !l && !_o)
    ) {
      ln(be, "scrollEnd", Bv);
      return;
    }
    (Gv(), (Rn = be.isRefreshing = !0), _o || Lv());
    var a = ir("refreshInit");
    (Ev && be.sort(),
      r || Cm(),
      qe.forEach(function (s) {
        bn(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"), s(0));
      }),
      je.slice(0).forEach(function (s) {
        return s.refresh();
      }),
      (_o = !1),
      je.forEach(function (s) {
        if (s._subPinOffset && s.pin) {
          var c = s.vars.horizontal ? "offsetWidth" : "offsetHeight",
            d = s.pin[c];
          (s.revert(!0, 1), s.adjustPinSpacing(s.pin[c] - d), s.refresh());
        }
      }),
      (Zh = 1),
      iy(!0),
      je.forEach(function (s) {
        var c = sa(s.scroller, s._dir),
          d = s.vars.end === "max" || (s._endClamp && s.end > c),
          h = s._startClamp && s.start >= c;
        (d || h) &&
          s.setPositions(
            h ? c - 1 : s.start,
            d ? Math.max(h ? c : s.start + 1, c) : s.end,
            !0,
          );
      }),
      iy(!1),
      (Zh = 0),
      a.forEach(function (s) {
        return s && s.render && s.render(-1);
      }),
      qe.forEach(function (s) {
        bn(s) &&
          (s.smooth &&
            requestAnimationFrame(function () {
              return (s.target.style.scrollBehavior = "smooth");
            }),
          s.rec && s(s.rec));
      }),
      Yv(_m, 1),
      Ru.pause(),
      nr++,
      (Rn = 2),
      ka(2),
      je.forEach(function (s) {
        return bn(s.vars.onRefresh) && s.vars.onRefresh(s);
      }),
      (Rn = be.isRefreshing = !1),
      ir("refresh"));
  },
  Fh = 0,
  xu = 1,
  Ao,
  ka = function (l) {
    if (l === 2 || (!Rn && !_o)) {
      ((be.isUpdating = !0), Ao && Ao.update(0));
      var r = je.length,
        a = _n(),
        s = a - gh >= 50,
        c = r && je[0].scroll();
      if (
        ((xu = Fh > c ? -1 : 1),
        Rn || (Fh = c),
        s &&
          (Hl && !Lu && a - Hl > 200 && ((Hl = 0), ir("scrollEnd")),
          (ro = gh),
          (gh = a)),
        xu < 0)
      ) {
        for (Nn = r; Nn-- > 0; ) je[Nn] && je[Nn].update(0, s);
        xu = 1;
      } else for (Nn = 0; Nn < r; Nn++) je[Nn] && je[Nn].update(0, s);
      be.isUpdating = !1;
    }
    Do = 0;
  },
  Jh = [
    jv,
    Uv,
    Sm,
    bm,
    Dl + To,
    Dl + xo,
    Dl + So,
    Dl + bo,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  bu = Jh.concat([
    er,
    tr,
    "boxSizing",
    "max" + os,
    "max" + Tm,
    "position",
    Dl,
    Kt,
    Kt + So,
    Kt + xo,
    Kt + To,
    Kt + bo,
  ]),
  bS = function (l, r, a) {
    ts(a);
    var s = l._gsap;
    if (s.spacerIsNative) ts(s.spacerState);
    else if (l._gsap.swappedIn) {
      var c = r.parentNode;
      c && (c.insertBefore(l, r), c.removeChild(r));
    }
    l._gsap.swappedIn = !1;
  },
  _h = function (l, r, a, s) {
    if (!l._gsap.swappedIn) {
      for (var c = Jh.length, d = r.style, h = l.style, m; c--; )
        ((m = Jh[c]), (d[m] = a[m]));
      ((d.position = a.position === "absolute" ? "absolute" : "relative"),
        a.display === "inline" && (d.display = "inline-block"),
        (h[Sm] = h[bm] = "auto"),
        (d.flexBasis = a.flexBasis || "auto"),
        (d.overflow = "visible"),
        (d.boxSizing = "border-box"),
        (d[er] = Ou(l, Dn) + $t),
        (d[tr] = Ou(l, It) + $t),
        (d[Kt] = h[Dl] = h[Uv] = h[jv] = "0"),
        ts(s),
        (h[er] = h["max" + os] = a[er]),
        (h[tr] = h["max" + Tm] = a[tr]),
        (h[Kt] = a[Kt]),
        l.parentNode !== r &&
          (l.parentNode.insertBefore(r, l), r.appendChild(l)),
        (l._gsap.swappedIn = !0));
    }
  },
  SS = /([A-Z])/g,
  ts = function (l) {
    if (l) {
      var r = l.t.style,
        a = l.length,
        s = 0,
        c,
        d;
      for ((l.t._gsap || oe.core.getCache(l.t)).uncache = 1; s < a; s += 2)
        ((d = l[s + 1]),
          (c = l[s]),
          d
            ? (r[c] = d)
            : r[c] && r.removeProperty(c.replace(SS, "-$1").toLowerCase()));
    }
  },
  su = function (l) {
    for (var r = bu.length, a = l.style, s = [], c = 0; c < r; c++)
      s.push(bu[c], a[bu[c]]);
    return ((s.t = l), s);
  },
  TS = function (l, r, a) {
    for (var s = [], c = l.length, d = a ? 8 : 0, h; d < c; d += 2)
      ((h = l[d]), s.push(h, h in r ? r[h] : l[d + 1]));
    return ((s.t = l.t), s);
  },
  Su = { left: 0, top: 0 },
  ry = function (l, r, a, s, c, d, h, m, p, y, _, T, x, w) {
    (bn(l) && (l = l(m)),
      il(l) &&
        l.substr(0, 3) === "max" &&
        (l = T + (l.charAt(4) === "=" ? vu("0" + l.substr(3), a) : 0)));
    var S = x ? x.time() : 0,
      E,
      k,
      j;
    if ((x && x.seek(0), isNaN(l) || (l = +l), co(l)))
      (x &&
        (l = oe.utils.mapRange(
          x.scrollTrigger.start,
          x.scrollTrigger.end,
          0,
          T,
          l,
        )),
        h && _u(h, a, s, !0));
    else {
      bn(r) && (r = r(m));
      var G = (l || "0").split(" "),
        U,
        Y,
        V,
        R;
      ((j = Gn(r, m) || Ie),
        (U = Oa(j) || {}),
        (!U || (!U.left && !U.top)) &&
          kl(j).display === "none" &&
          ((R = j.style.display),
          (j.style.display = "block"),
          (U = Oa(j)),
          R ? (j.style.display = R) : j.style.removeProperty("display")),
        (Y = vu(G[0], U[s.d])),
        (V = vu(G[1] || "0", a)),
        (l = U[s.p] - p[s.p] - y + Y + c - V),
        h && _u(h, V, s, a - V < 20 || (h._isStart && V > 20)),
        (a -= a - V));
    }
    if ((w && ((m[w] = l || -0.001), l < 0 && (l = 0)), d)) {
      var q = l + a,
        Q = d._isStart;
      ((E = "scroll" + s.d2),
        _u(
          d,
          q,
          s,
          (Q && q > 20) ||
            (!Q && (_ ? Math.max(Ie[E], sl[E]) : d.parentNode[E]) <= q + 1),
        ),
        _ &&
          ((p = Oa(h)),
          _ && (d.style[s.op.p] = p[s.op.p] - s.op.m - d._offset + $t)));
    }
    return (
      x &&
        j &&
        ((E = Oa(j)),
        x.seek(T),
        (k = Oa(j)),
        (x._caScrollDist = E[s.p] - k[s.p]),
        (l = (l / x._caScrollDist) * T)),
      x && x.seek(S),
      x ? l : Math.round(l)
    );
  },
  AS = /(webkit|moz|length|cssText|inset)/i,
  sy = function (l, r, a, s) {
    if (l.parentNode !== r) {
      var c = l.style,
        d,
        h;
      if (r === Ie) {
        ((l._stOrig = c.cssText), (h = kl(l)));
        for (d in h)
          !+d &&
            !AS.test(d) &&
            h[d] &&
            typeof c[d] == "string" &&
            d !== "0" &&
            (c[d] = h[d]);
        ((c.top = a), (c.left = s));
      } else c.cssText = l._stOrig;
      ((oe.core.getCache(l).uncache = 1), r.appendChild(l));
    }
  },
  Xv = function (l, r, a) {
    var s = r,
      c = s;
    return function (d) {
      var h = Math.round(l());
      return (
        h !== s &&
          h !== c &&
          Math.abs(h - s) > 3 &&
          Math.abs(h - c) > 3 &&
          ((d = h), a && a()),
        (c = s),
        (s = Math.round(d)),
        s
      );
    };
  },
  ou = function (l, r, a) {
    var s = {};
    ((s[r.p] = "+=" + a), oe.set(l, s));
  },
  oy = function (l, r) {
    var a = bi(l, r),
      s = "_scroll" + r.p2,
      c = function d(h, m, p, y, _) {
        var T = d.tween,
          x = m.onComplete,
          w = {};
        p = p || a();
        var S = Xv(a, p, function () {
          (T.kill(), (d.tween = 0));
        });
        return (
          (_ = (y && _) || 0),
          (y = y || h - p),
          T && T.kill(),
          (m[s] = h),
          (m.inherit = !1),
          (m.modifiers = w),
          (w[s] = function () {
            return S(p + y * T.ratio + _ * T.ratio * T.ratio);
          }),
          (m.onUpdate = function () {
            (qe.cache++, d.tween && ka());
          }),
          (m.onComplete = function () {
            ((d.tween = 0), x && x.call(T));
          }),
          (T = d.tween = oe.to(l, m)),
          T
        );
      };
    return (
      (l[s] = a),
      (a.wheelHandler = function () {
        return c.tween && c.tween.kill() && (c.tween = 0);
      }),
      ln(l, "wheel", a.wheelHandler),
      be.isTouch && ln(l, "touchmove", a.wheelHandler),
      c
    );
  },
  be = (function () {
    function u(r, a) {
      (Qr ||
        u.register(oe) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Qh(this),
        this.init(r, a));
    }
    var l = u.prototype;
    return (
      (l.init = function (a, s) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !so)
        ) {
          this.update = this.refresh = this.kill = aa;
          return;
        }
        a = ty(il(a) || co(a) || a.nodeType ? { trigger: a } : a, iu);
        var c = a,
          d = c.onUpdate,
          h = c.toggleClass,
          m = c.id,
          p = c.onToggle,
          y = c.onRefresh,
          _ = c.scrub,
          T = c.trigger,
          x = c.pin,
          w = c.pinSpacing,
          S = c.invalidateOnRefresh,
          E = c.anticipatePin,
          k = c.onScrubComplete,
          j = c.onSnapComplete,
          G = c.once,
          U = c.snap,
          Y = c.pinReparent,
          V = c.pinSpacer,
          R = c.containerAnimation,
          q = c.fastScrollEnd,
          Q = c.preventOverlaps,
          I =
            a.horizontal || (a.containerAnimation && a.horizontal !== !1)
              ? Dn
              : It,
          re = !_ && _ !== 0,
          ne = Gn(a.scroller || Be),
          pe = oe.core.getCache(ne),
          ge = lr(ne),
          me =
            ("pinType" in a
              ? a.pinType
              : yi(ne, "pinType") || (ge && "fixed")) === "fixed",
          O = [a.onEnter, a.onLeave, a.onEnterBack, a.onLeaveBack],
          F = re && a.toggleActions.split(" "),
          J = "markers" in a ? a.markers : iu.markers,
          de = ge ? 0 : parseFloat(kl(ne)["border" + I.p2 + os]) || 0,
          M = this,
          A =
            a.onRefreshInit &&
            function () {
              return a.onRefreshInit(M);
            },
          Z = mS(ne, ge, I),
          ee = pS(ne, ge),
          te = 0,
          ie = 0,
          fe = 0,
          le = bi(ne, I),
          Ne,
          Se,
          Qe,
          pt,
          gt,
          Ge,
          et,
          en,
          rn,
          K,
          hn,
          Fn,
          pl,
          ct,
          Bl,
          Zl,
          Dt,
          Yt,
          ql,
          yt,
          mn,
          kn,
          gl,
          Ai,
          zt,
          Kl,
          bt,
          Tn,
          Gt,
          Fl,
          ua,
          Oe,
          yl,
          pn,
          gn,
          Jt,
          vl,
          _l,
          Ll;
        if (
          ((M._startClamp = M._endClamp = !1),
          (M._dir = I),
          (E *= 45),
          (M.scroller = ne),
          (M.scroll = R ? R.time.bind(R) : le),
          (pt = le()),
          (M.vars = a),
          (s = s || a.animation),
          "refreshPriority" in a &&
            ((Ev = 1), a.refreshPriority === -9999 && (Ao = M)),
          (pe.tweenScroll = pe.tweenScroll || {
            top: oy(ne, It),
            left: oy(ne, Dn),
          }),
          (M.tweenTo = Ne = pe.tweenScroll[I.p]),
          (M.scrubDuration = function (ae) {
            ((yl = co(ae) && ae),
              yl
                ? Oe
                  ? Oe.duration(ae)
                  : (Oe = oe.to(s, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: yl,
                      paused: !0,
                      onComplete: function () {
                        return k && k(M);
                      },
                    }))
                : (Oe && Oe.progress(1).kill(), (Oe = 0)));
          }),
          s &&
            ((s.vars.lazy = !1),
            (s._initted && !M.isReverted) ||
              (s.vars.immediateRender !== !1 &&
                a.immediateRender !== !1 &&
                s.duration() &&
                s.render(0, !0, !0)),
            (M.animation = s.pause()),
            (s.scrollTrigger = M),
            M.scrubDuration(_),
            (Fl = 0),
            m || (m = s.vars.id)),
          U &&
            ((!Ki(U) || U.push) && (U = { snapTo: U }),
            "scrollBehavior" in Ie.style &&
              oe.set(ge ? [Ie, sl] : ne, { scrollBehavior: "auto" }),
            qe.forEach(function (ae) {
              return (
                bn(ae) &&
                ae.target === (ge ? ut.scrollingElement || sl : ne) &&
                (ae.smooth = !1)
              );
            }),
            (Qe = bn(U.snapTo)
              ? U.snapTo
              : U.snapTo === "labels"
                ? yS(s)
                : U.snapTo === "labelsDirectional"
                  ? vS(s)
                  : U.directional !== !1
                    ? function (ae, we) {
                        return Am(U.snapTo)(
                          ae,
                          _n() - ie < 500 ? 0 : we.direction,
                        );
                      }
                    : oe.utils.snap(U.snapTo)),
            (pn = U.duration || { min: 0.1, max: 2 }),
            (pn = Ki(pn) ? vo(pn.min, pn.max) : vo(pn, pn)),
            (gn = oe
              .delayedCall(U.delay || yl / 2 || 0.1, function () {
                var ae = le(),
                  we = _n() - ie < 500,
                  ve = Ne.tween;
                if (
                  (we || Math.abs(M.getVelocity()) < 10) &&
                  !ve &&
                  !Lu &&
                  te !== ae
                ) {
                  var Te = (ae - Ge) / ct,
                    Mt = s && !re ? s.totalProgress() : Te,
                    Ue = we ? 0 : ((Mt - ua) / (_n() - ro)) * 1e3 || 0,
                    vt = oe.utils.clamp(-Te, 1 - Te, (Gr(Ue / 2) * Ue) / 0.185),
                    ft = Te + (U.inertia === !1 ? 0 : vt),
                    Re,
                    De,
                    Fe = U,
                    An = Fe.onStart,
                    dt = Fe.onInterrupt,
                    Cn = Fe.onComplete;
                  if (
                    ((Re = Qe(ft, M)),
                    co(Re) || (Re = ft),
                    (De = Math.max(0, Math.round(Ge + Re * ct))),
                    ae <= et && ae >= Ge && De !== ae)
                  ) {
                    if (ve && !ve._initted && ve.data <= Gr(De - ae)) return;
                    (U.inertia === !1 && (vt = Re - Te),
                      Ne(
                        De,
                        {
                          duration: pn(
                            Gr(
                              (Math.max(Gr(ft - Mt), Gr(Re - Mt)) * 0.185) /
                                Ue /
                                0.05 || 0,
                            ),
                          ),
                          ease: U.ease || "power3",
                          data: Gr(De - ae),
                          onInterrupt: function () {
                            return gn.restart(!0) && dt && dt(M);
                          },
                          onComplete: function () {
                            (M.update(),
                              (te = le()),
                              s &&
                                !re &&
                                (Oe
                                  ? Oe.resetTo(
                                      "totalProgress",
                                      Re,
                                      s._tTime / s._tDur,
                                    )
                                  : s.progress(Re)),
                              (Fl = ua =
                                s && !re ? s.totalProgress() : M.progress),
                              j && j(M),
                              Cn && Cn(M));
                          },
                        },
                        ae,
                        vt * ct,
                        De - ae - vt * ct,
                      ),
                      An && An(M, Ne.tween));
                  }
                } else M.isActive && te !== ae && gn.restart(!0);
              })
              .pause())),
          m && (Kh[m] = M),
          (T = M.trigger = Gn(T || (x !== !0 && x))),
          (Ll = T && T._gsap && T._gsap.stRevert),
          Ll && (Ll = Ll(M)),
          (x = x === !0 ? T : Gn(x)),
          il(h) && (h = { targets: T, className: h }),
          x &&
            (w === !1 ||
              w === Dl ||
              (w =
                !w &&
                x.parentNode &&
                x.parentNode.style &&
                kl(x.parentNode).display === "flex"
                  ? !1
                  : Kt),
            (M.pin = x),
            (Se = oe.core.getCache(x)),
            Se.spacer
              ? (Bl = Se.pinState)
              : (V &&
                  ((V = Gn(V)),
                  V && !V.nodeType && (V = V.current || V.nativeElement),
                  (Se.spacerIsNative = !!V),
                  V && (Se.spacerState = su(V))),
                (Se.spacer = Yt = V || ut.createElement("div")),
                Yt.classList.add("pin-spacer"),
                m && Yt.classList.add("pin-spacer-" + m),
                (Se.pinState = Bl = su(x))),
            a.force3D !== !1 && oe.set(x, { force3D: !0 }),
            (M.spacer = Yt = Se.spacer),
            (Gt = kl(x)),
            (Ai = Gt[w + I.os2]),
            (yt = oe.getProperty(x)),
            (mn = oe.quickSetter(x, I.a, $t)),
            _h(x, Yt, Gt),
            (Dt = su(x))),
          J)
        ) {
          ((Fn = Ki(J) ? ty(J, ny) : ny),
            (K = ru("scroller-start", m, ne, I, Fn, 0)),
            (hn = ru("scroller-end", m, ne, I, Fn, 0, K)),
            (ql = K["offset" + I.op.d2]));
          var Ha = Gn(yi(ne, "content") || ne);
          ((en = this.markerStart = ru("start", m, Ha, I, Fn, ql, 0, R)),
            (rn = this.markerEnd = ru("end", m, Ha, I, Fn, ql, 0, R)),
            R && (_l = oe.quickSetter([en, rn], I.a, $t)),
            !me &&
              !(oa.length && yi(ne, "fixedMarkers") === !0) &&
              (gS(ge ? Ie : ne),
              oe.set([K, hn], { force3D: !0 }),
              (Kl = oe.quickSetter(K, I.a, $t)),
              (Tn = oe.quickSetter(hn, I.a, $t))));
        }
        if (R) {
          var Ce = R.vars.onUpdate,
            ye = R.vars.onUpdateParams;
          R.eventCallback("onUpdate", function () {
            (M.update(0, 0, 1), Ce && Ce.apply(R, ye || []));
          });
        }
        if (
          ((M.previous = function () {
            return je[je.indexOf(M) - 1];
          }),
          (M.next = function () {
            return je[je.indexOf(M) + 1];
          }),
          (M.revert = function (ae, we) {
            if (!we) return M.kill(!0);
            var ve = ae !== !1 || !M.enabled,
              Te = vn;
            ve !== M.isReverted &&
              (ve &&
                ((Jt = Math.max(le(), M.scroll.rec || 0)),
                (fe = M.progress),
                (vl = s && s.progress())),
              en &&
                [en, rn, K, hn].forEach(function (Mt) {
                  return (Mt.style.display = ve ? "none" : "block");
                }),
              ve && ((vn = M), M.update(ve)),
              x &&
                (!Y || !M.isActive) &&
                (ve ? bS(x, Yt, Bl) : _h(x, Yt, kl(x), zt)),
              ve || M.update(ve),
              (vn = Te),
              (M.isReverted = ve));
          }),
          (M.refresh = function (ae, we, ve, Te) {
            if (!((vn || !M.enabled) && !we)) {
              if (x && ae && Hl) {
                ln(u, "scrollEnd", Bv);
                return;
              }
              (!Rn && A && A(M),
                (vn = M),
                Ne.tween && !ve && (Ne.tween.kill(), (Ne.tween = 0)),
                Oe && Oe.pause(),
                S &&
                  s &&
                  (s.revert({ kill: !1 }).invalidate(),
                  s.getChildren
                    ? s.getChildren(!0, !0, !1).forEach(function (Wl) {
                        return Wl.vars.immediateRender && Wl.render(0, !0, !0);
                      })
                    : s.vars.immediateRender && s.render(0, !0, !0)),
                M.isReverted || M.revert(!0, !0),
                (M._subPinOffset = !1));
              var Mt = Z(),
                Ue = ee(),
                vt = R ? R.duration() : sa(ne, I),
                ft = ct <= 0.01 || !ct,
                Re = 0,
                De = Te || 0,
                Fe = Ki(ve) ? ve.end : a.end,
                An = a.endTrigger || T,
                dt = Ki(ve)
                  ? ve.start
                  : a.start || (a.start === 0 || !T ? 0 : x ? "0 0" : "0 100%"),
                Cn = (M.pinnedContainer =
                  a.pinnedContainer && Gn(a.pinnedContainer, M)),
                Jn = (T && Math.max(0, je.indexOf(M))) || 0,
                St = Jn,
                kt,
                Tt,
                jn,
                Jl,
                At,
                He,
                Pn,
                sr,
                Pl,
                xl,
                bl,
                Ba,
                Ci;
              for (
                J &&
                Ki(ve) &&
                ((Ba = oe.getProperty(K, I.p)), (Ci = oe.getProperty(hn, I.p)));
                St-- > 0;
              )
                ((He = je[St]),
                  He.end || He.refresh(0, 1) || (vn = M),
                  (Pn = He.pin),
                  Pn &&
                    (Pn === T || Pn === x || Pn === Cn) &&
                    !He.isReverted &&
                    (xl || (xl = []), xl.unshift(He), He.revert(!0, !0)),
                  He !== je[St] && (Jn--, St--));
              for (
                bn(dt) && (dt = dt(M)),
                  dt = W1(dt, "start", M),
                  Ge =
                    ry(
                      dt,
                      T,
                      Mt,
                      I,
                      le(),
                      en,
                      K,
                      M,
                      Ue,
                      de,
                      me,
                      vt,
                      R,
                      M._startClamp && "_startClamp",
                    ) || (x ? -0.001 : 0),
                  bn(Fe) && (Fe = Fe(M)),
                  il(Fe) &&
                    !Fe.indexOf("+=") &&
                    (~Fe.indexOf(" ")
                      ? (Fe = (il(dt) ? dt.split(" ")[0] : "") + Fe)
                      : ((Re = vu(Fe.substr(2), Mt)),
                        (Fe = il(dt)
                          ? dt
                          : (R
                              ? oe.utils.mapRange(
                                  0,
                                  R.duration(),
                                  R.scrollTrigger.start,
                                  R.scrollTrigger.end,
                                  Ge,
                                )
                              : Ge) + Re),
                        (An = T))),
                  Fe = W1(Fe, "end", M),
                  et =
                    Math.max(
                      Ge,
                      ry(
                        Fe || (An ? "100% 0" : vt),
                        An,
                        Mt,
                        I,
                        le() + Re,
                        rn,
                        hn,
                        M,
                        Ue,
                        de,
                        me,
                        vt,
                        R,
                        M._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  Re = 0,
                  St = Jn;
                St--;
              )
                ((He = je[St] || {}),
                  (Pn = He.pin),
                  Pn &&
                    He.start - He._pinPush <= Ge &&
                    !R &&
                    He.end > 0 &&
                    ((kt =
                      He.end -
                      (M._startClamp ? Math.max(0, He.start) : He.start)),
                    ((Pn === T && He.start - He._pinPush < Ge) || Pn === Cn) &&
                      isNaN(dt) &&
                      (Re += kt * (1 - He.progress)),
                    Pn === x && (De += kt)));
              if (
                ((Ge += Re),
                (et += Re),
                M._startClamp && (M._startClamp += Re),
                M._endClamp &&
                  !Rn &&
                  ((M._endClamp = et || -0.001),
                  (et = Math.min(et, sa(ne, I)))),
                (ct = et - Ge || ((Ge -= 0.01) && 0.001)),
                ft &&
                  (fe = oe.utils.clamp(0, 1, oe.utils.normalize(Ge, et, Jt))),
                (M._pinPush = De),
                en &&
                  Re &&
                  ((kt = {}),
                  (kt[I.a] = "+=" + Re),
                  Cn && (kt[I.p] = "-=" + le()),
                  oe.set([en, rn], kt)),
                x && !(Zh && M.end >= sa(ne, I)))
              )
                ((kt = kl(x)),
                  (Jl = I === It),
                  (jn = le()),
                  (kn = parseFloat(yt(I.a)) + De),
                  !vt &&
                    et > 1 &&
                    ((bl = (ge ? ut.scrollingElement || sl : ne).style),
                    (bl = {
                      style: bl,
                      value: bl["overflow" + I.a.toUpperCase()],
                    }),
                    ge &&
                      kl(Ie)["overflow" + I.a.toUpperCase()] !== "scroll" &&
                      (bl.style["overflow" + I.a.toUpperCase()] = "scroll")),
                  _h(x, Yt, kt),
                  (Dt = su(x)),
                  (Tt = Oa(x, !0)),
                  (sr = me && bi(ne, Jl ? Dn : It)()),
                  w
                    ? ((zt = [w + I.os2, ct + De + $t]),
                      (zt.t = Yt),
                      (St = w === Kt ? Ou(x, I) + ct + De : 0),
                      St &&
                        (zt.push(I.d, St + $t),
                        Yt.style.flexBasis !== "auto" &&
                          (Yt.style.flexBasis = St + $t)),
                      ts(zt),
                      Cn &&
                        je.forEach(function (Wl) {
                          Wl.pin === Cn &&
                            Wl.vars.pinSpacing !== !1 &&
                            (Wl._subPinOffset = !0);
                        }),
                      me && le(Jt))
                    : ((St = Ou(x, I)),
                      St &&
                        Yt.style.flexBasis !== "auto" &&
                        (Yt.style.flexBasis = St + $t)),
                  me &&
                    ((At = {
                      top: Tt.top + (Jl ? jn - Ge : sr) + $t,
                      left: Tt.left + (Jl ? sr : jn - Ge) + $t,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (At[er] = At["max" + os] = Math.ceil(Tt.width) + $t),
                    (At[tr] = At["max" + Tm] = Math.ceil(Tt.height) + $t),
                    (At[Dl] =
                      At[Dl + So] =
                      At[Dl + xo] =
                      At[Dl + To] =
                      At[Dl + bo] =
                        "0"),
                    (At[Kt] = kt[Kt]),
                    (At[Kt + So] = kt[Kt + So]),
                    (At[Kt + xo] = kt[Kt + xo]),
                    (At[Kt + To] = kt[Kt + To]),
                    (At[Kt + bo] = kt[Kt + bo]),
                    (Zl = TS(Bl, At, Y)),
                    Rn && le(0)),
                  s
                    ? ((Pl = s._initted),
                      mh(1),
                      s.render(s.duration(), !0, !0),
                      (gl = yt(I.a) - kn + ct + De),
                      (bt = Math.abs(ct - gl) > 1),
                      me && bt && Zl.splice(Zl.length - 2, 2),
                      s.render(0, !0, !0),
                      Pl || s.invalidate(!0),
                      s.parent || s.totalTime(s.totalTime()),
                      mh(0))
                    : (gl = ct),
                  bl &&
                    (bl.value
                      ? (bl.style["overflow" + I.a.toUpperCase()] = bl.value)
                      : bl.style.removeProperty("overflow-" + I.a)));
              else if (T && le() && !R)
                for (Tt = T.parentNode; Tt && Tt !== Ie; )
                  (Tt._pinOffset &&
                    ((Ge -= Tt._pinOffset), (et -= Tt._pinOffset)),
                    (Tt = Tt.parentNode));
              (xl &&
                xl.forEach(function (Wl) {
                  return Wl.revert(!1, !0);
                }),
                (M.start = Ge),
                (M.end = et),
                (pt = gt = Rn ? Jt : le()),
                !R && !Rn && (pt < Jt && le(Jt), (M.scroll.rec = 0)),
                M.revert(!1, !0),
                (ie = _n()),
                gn && ((te = -1), gn.restart(!0)),
                (vn = 0),
                s &&
                  re &&
                  (s._initted || vl) &&
                  s.progress() !== vl &&
                  s.progress(vl || 0, !0).render(s.time(), !0, !0),
                (ft || fe !== M.progress || R || S || (s && !s._initted)) &&
                  (s &&
                    !re &&
                    (s._initted || fe || s.vars.immediateRender !== !1) &&
                    s.totalProgress(
                      R && Ge < -0.001 && !fe
                        ? oe.utils.normalize(Ge, et, 0)
                        : fe,
                      !0,
                    ),
                  (M.progress = ft || (pt - Ge) / ct === fe ? 0 : fe)),
                x && w && (Yt._pinOffset = Math.round(M.progress * gl)),
                Oe && Oe.invalidate(),
                isNaN(Ba) ||
                  ((Ba -= oe.getProperty(K, I.p)),
                  (Ci -= oe.getProperty(hn, I.p)),
                  ou(K, I, Ba),
                  ou(en, I, Ba - (Te || 0)),
                  ou(hn, I, Ci),
                  ou(rn, I, Ci - (Te || 0))),
                ft && !Rn && M.update(),
                y && !Rn && !pl && ((pl = !0), y(M), (pl = !1)));
            }
          }),
          (M.getVelocity = function () {
            return ((le() - gt) / (_n() - ro)) * 1e3 || 0;
          }),
          (M.endAnimation = function () {
            (no(M.callbackAnimation),
              s &&
                (Oe
                  ? Oe.progress(1)
                  : s.paused()
                    ? re || no(s, M.direction < 0, 1)
                    : no(s, s.reversed())));
          }),
          (M.labelToScroll = function (ae) {
            return (
              (s &&
                s.labels &&
                (Ge || M.refresh() || Ge) +
                  (s.labels[ae] / s.duration()) * ct) ||
              0
            );
          }),
          (M.getTrailing = function (ae) {
            var we = je.indexOf(M),
              ve =
                M.direction > 0 ? je.slice(0, we).reverse() : je.slice(we + 1);
            return (
              il(ae)
                ? ve.filter(function (Te) {
                    return Te.vars.preventOverlaps === ae;
                  })
                : ve
            ).filter(function (Te) {
              return M.direction > 0 ? Te.end <= Ge : Te.start >= et;
            });
          }),
          (M.update = function (ae, we, ve) {
            if (!(R && !ve && !ae)) {
              var Te = Rn === !0 ? Jt : M.scroll(),
                Mt = ae ? 0 : (Te - Ge) / ct,
                Ue = Mt < 0 ? 0 : Mt > 1 ? 1 : Mt || 0,
                vt = M.progress,
                ft,
                Re,
                De,
                Fe,
                An,
                dt,
                Cn,
                Jn;
              if (
                (we &&
                  ((gt = pt),
                  (pt = R ? le() : Te),
                  U && ((ua = Fl), (Fl = s && !re ? s.totalProgress() : Ue))),
                E &&
                  x &&
                  !vn &&
                  !tu &&
                  Hl &&
                  (!Ue && Ge < Te + ((Te - gt) / (_n() - ro)) * E
                    ? (Ue = 1e-4)
                    : Ue === 1 &&
                      et > Te + ((Te - gt) / (_n() - ro)) * E &&
                      (Ue = 0.9999)),
                Ue !== vt && M.enabled)
              ) {
                if (
                  ((ft = M.isActive = !!Ue && Ue < 1),
                  (Re = !!vt && vt < 1),
                  (dt = ft !== Re),
                  (An = dt || !!Ue != !!vt),
                  (M.direction = Ue > vt ? 1 : -1),
                  (M.progress = Ue),
                  An &&
                    !vn &&
                    ((De = Ue && !vt ? 0 : Ue === 1 ? 1 : vt === 1 ? 2 : 3),
                    re &&
                      ((Fe =
                        (!dt && F[De + 1] !== "none" && F[De + 1]) || F[De]),
                      (Jn =
                        s &&
                        (Fe === "complete" || Fe === "reset" || Fe in s)))),
                  Q &&
                    (dt || Jn) &&
                    (Jn || _ || !s) &&
                    (bn(Q)
                      ? Q(M)
                      : M.getTrailing(Q).forEach(function (jn) {
                          return jn.endAnimation();
                        })),
                  re ||
                    (Oe && !vn && !tu
                      ? (Oe._dp._time - Oe._start !== Oe._time &&
                          Oe.render(Oe._dp._time - Oe._start),
                        Oe.resetTo
                          ? Oe.resetTo("totalProgress", Ue, s._tTime / s._tDur)
                          : ((Oe.vars.totalProgress = Ue),
                            Oe.invalidate().restart()))
                      : s && s.totalProgress(Ue, !!(vn && (ie || ae)))),
                  x)
                ) {
                  if ((ae && w && (Yt.style[w + I.os2] = Ai), !me))
                    mn(oo(kn + gl * Ue));
                  else if (An) {
                    if (
                      ((Cn =
                        !ae && Ue > vt && et + 1 > Te && Te + 1 >= sa(ne, I)),
                      Y)
                    )
                      if (!ae && (ft || Cn)) {
                        var St = Oa(x, !0),
                          kt = Te - Ge;
                        sy(
                          x,
                          Ie,
                          St.top + (I === It ? kt : 0) + $t,
                          St.left + (I === It ? 0 : kt) + $t,
                        );
                      } else sy(x, Yt);
                    (ts(ft || Cn ? Zl : Dt),
                      (bt && Ue < 1 && ft) ||
                        mn(kn + (Ue === 1 && !Cn ? gl : 0)));
                  }
                }
                (U && !Ne.tween && !vn && !tu && gn.restart(!0),
                  h &&
                    (dt || (G && Ue && (Ue < 1 || !ph))) &&
                    Oo(h.targets).forEach(function (jn) {
                      return jn.classList[ft || G ? "add" : "remove"](
                        h.className,
                      );
                    }),
                  d && !re && !ae && d(M),
                  An && !vn
                    ? (re &&
                        (Jn &&
                          (Fe === "complete"
                            ? s.pause().totalProgress(1)
                            : Fe === "reset"
                              ? s.restart(!0).pause()
                              : Fe === "restart"
                                ? s.restart(!0)
                                : s[Fe]()),
                        d && d(M)),
                      (dt || !ph) &&
                        (p && dt && yh(M, p),
                        O[De] && yh(M, O[De]),
                        G && (Ue === 1 ? M.kill(!1, 1) : (O[De] = 0)),
                        dt || ((De = Ue === 1 ? 1 : 3), O[De] && yh(M, O[De]))),
                      q &&
                        !ft &&
                        Math.abs(M.getVelocity()) > (co(q) ? q : 2500) &&
                        (no(M.callbackAnimation),
                        Oe
                          ? Oe.progress(1)
                          : no(s, Fe === "reverse" ? 1 : !Ue, 1)))
                    : re && d && !vn && d(M));
              }
              if (Tn) {
                var Tt = R ? (Te / R.duration()) * (R._caScrollDist || 0) : Te;
                (Kl(Tt + (K._isFlipped ? 1 : 0)), Tn(Tt));
              }
              _l && _l((-Te / R.duration()) * (R._caScrollDist || 0));
            }
          }),
          (M.enable = function (ae, we) {
            M.enabled ||
              ((M.enabled = !0),
              ln(ne, "resize", uo),
              ge || ln(ne, "scroll", Xr),
              A && ln(u, "refreshInit", A),
              ae !== !1 && ((M.progress = fe = 0), (pt = gt = te = le())),
              we !== !1 && M.refresh());
          }),
          (M.getTween = function (ae) {
            return ae && Ne ? Ne.tween : Oe;
          }),
          (M.setPositions = function (ae, we, ve, Te) {
            if (R) {
              var Mt = R.scrollTrigger,
                Ue = R.duration(),
                vt = Mt.end - Mt.start;
              ((ae = Mt.start + (vt * ae) / Ue),
                (we = Mt.start + (vt * we) / Ue));
            }
            (M.refresh(
              !1,
              !1,
              {
                start: $1(ae, ve && !!M._startClamp),
                end: $1(we, ve && !!M._endClamp),
              },
              Te,
            ),
              M.update());
          }),
          (M.adjustPinSpacing = function (ae) {
            if (zt && ae) {
              var we = zt.indexOf(I.d) + 1;
              ((zt[we] = parseFloat(zt[we]) + ae + $t),
                (zt[1] = parseFloat(zt[1]) + ae + $t),
                ts(zt));
            }
          }),
          (M.disable = function (ae, we) {
            if (
              (ae !== !1 && M.revert(!0, !0),
              M.enabled &&
                ((M.enabled = M.isActive = !1),
                we || (Oe && Oe.pause()),
                (Jt = 0),
                Se && (Se.uncache = 1),
                A && nn(u, "refreshInit", A),
                gn &&
                  (gn.pause(), Ne.tween && Ne.tween.kill() && (Ne.tween = 0)),
                !ge))
            ) {
              for (var ve = je.length; ve--; )
                if (je[ve].scroller === ne && je[ve] !== M) return;
              (nn(ne, "resize", uo), ge || nn(ne, "scroll", Xr));
            }
          }),
          (M.kill = function (ae, we) {
            (M.disable(ae, we), Oe && !we && Oe.kill(), m && delete Kh[m]);
            var ve = je.indexOf(M);
            (ve >= 0 && je.splice(ve, 1),
              ve === Nn && xu > 0 && Nn--,
              (ve = 0),
              je.forEach(function (Te) {
                return Te.scroller === M.scroller && (ve = 1);
              }),
              ve || Rn || (M.scroll.rec = 0),
              s &&
                ((s.scrollTrigger = null),
                ae && s.revert({ kill: !1 }),
                we || s.kill()),
              en &&
                [en, rn, K, hn].forEach(function (Te) {
                  return Te.parentNode && Te.parentNode.removeChild(Te);
                }),
              Ao === M && (Ao = 0),
              x &&
                (Se && (Se.uncache = 1),
                (ve = 0),
                je.forEach(function (Te) {
                  return Te.pin === x && ve++;
                }),
                ve || (Se.spacer = 0)),
              a.onKill && a.onKill(M));
          }),
          je.push(M),
          M.enable(!1, !1),
          Ll && Ll(M),
          s && s.add && !ct)
        ) {
          var Je = M.update;
          ((M.update = function () {
            ((M.update = Je), qe.cache++, Ge || et || M.refresh());
          }),
            oe.delayedCall(0.01, M.update),
            (ct = 0.01),
            (Ge = et = 0));
        } else M.refresh();
        x && xS();
      }),
      (u.register = function (a) {
        return (
          Qr ||
            ((oe = a || Ov()),
            Rv() && window.document && u.enable(),
            (Qr = so)),
          Qr
        );
      }),
      (u.defaults = function (a) {
        if (a) for (var s in a) iu[s] = a[s];
        return iu;
      }),
      (u.disable = function (a, s) {
        ((so = 0),
          je.forEach(function (d) {
            return d[s ? "kill" : "disable"](a);
          }),
          nn(Be, "wheel", Xr),
          nn(ut, "scroll", Xr),
          clearInterval(eu),
          nn(ut, "touchcancel", aa),
          nn(Ie, "touchstart", aa),
          lu(nn, ut, "pointerdown,touchstart,mousedown", I1),
          lu(nn, ut, "pointerup,touchend,mouseup", ey),
          Ru.kill(),
          nu(nn));
        for (var c = 0; c < qe.length; c += 3)
          (au(nn, qe[c], qe[c + 1]), au(nn, qe[c], qe[c + 2]));
      }),
      (u.enable = function () {
        if (
          ((Be = window),
          (ut = document),
          (sl = ut.documentElement),
          (Ie = ut.body),
          oe &&
            ((Oo = oe.utils.toArray),
            (vo = oe.utils.clamp),
            (Qh = oe.core.context || aa),
            (mh = oe.core.suppressOverwrites || aa),
            (_m = Be.history.scrollRestoration || "auto"),
            (Fh = Be.pageYOffset || 0),
            oe.core.globals("ScrollTrigger", u),
            Ie))
        ) {
          ((so = 1),
            (es = document.createElement("div")),
            (es.style.height = "100vh"),
            (es.style.position = "absolute"),
            Gv(),
            hS(),
            qt.register(oe),
            (u.isTouch = qt.isTouch),
            (ci =
              qt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Vh = qt.isTouch === 1),
            ln(Be, "wheel", Xr),
            (vm = [Be, ut, sl, Ie]),
            oe.matchMedia
              ? ((u.matchMedia = function (p) {
                  var y = oe.matchMedia(),
                    _;
                  for (_ in p) y.add(_, p[_]);
                  return y;
                }),
                oe.addEventListener("matchMediaInit", function () {
                  (Lv(), Cm());
                }),
                oe.addEventListener("matchMediaRevert", function () {
                  return qv();
                }),
                oe.addEventListener("matchMedia", function () {
                  (Ji(0, 1), ir("matchMedia"));
                }),
                oe.matchMedia().add("(orientation: portrait)", function () {
                  return (vh(), vh);
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            vh(),
            ln(ut, "scroll", Xr));
          var a = Ie.hasAttribute("style"),
            s = Ie.style,
            c = s.borderTopStyle,
            d = oe.core.Animation.prototype,
            h,
            m;
          for (
            d.revert ||
              Object.defineProperty(d, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              s.borderTopStyle = "solid",
              h = Oa(Ie),
              It.m = Math.round(h.top + It.sc()) || 0,
              Dn.m = Math.round(h.left + Dn.sc()) || 0,
              c ? (s.borderTopStyle = c) : s.removeProperty("border-top-style"),
              a || (Ie.setAttribute("style", ""), Ie.removeAttribute("style")),
              eu = setInterval(ly, 250),
              oe.delayedCall(0.5, function () {
                return (tu = 0);
              }),
              ln(ut, "touchcancel", aa),
              ln(Ie, "touchstart", aa),
              lu(ln, ut, "pointerdown,touchstart,mousedown", I1),
              lu(ln, ut, "pointerup,touchend,mouseup", ey),
              Xh = oe.utils.checkPrefix("transform"),
              bu.push(Xh),
              Qr = _n(),
              Ru = oe.delayedCall(0.2, Ji).pause(),
              Zr = [
                ut,
                "visibilitychange",
                function () {
                  var p = Be.innerWidth,
                    y = Be.innerHeight;
                  ut.hidden
                    ? ((J1 = p), (P1 = y))
                    : (J1 !== p || P1 !== y) && uo();
                },
                ut,
                "DOMContentLoaded",
                Ji,
                Be,
                "load",
                Ji,
                Be,
                "resize",
                uo,
              ],
              nu(ln),
              je.forEach(function (p) {
                return p.enable(0, 1);
              }),
              m = 0;
            m < qe.length;
            m += 3
          )
            (au(nn, qe[m], qe[m + 1]), au(nn, qe[m], qe[m + 2]));
        }
      }),
      (u.config = function (a) {
        "limitCallbacks" in a && (ph = !!a.limitCallbacks);
        var s = a.syncInterval;
        ((s && clearInterval(eu)) || ((eu = s) && setInterval(ly, s)),
          "ignoreMobileResize" in a &&
            (Vh = u.isTouch === 1 && a.ignoreMobileResize),
          "autoRefreshEvents" in a &&
            (nu(nn) || nu(ln, a.autoRefreshEvents || "none"),
            (zv = (a.autoRefreshEvents + "").indexOf("resize") === -1)));
      }),
      (u.scrollerProxy = function (a, s) {
        var c = Gn(a),
          d = qe.indexOf(c),
          h = lr(c);
        (~d && qe.splice(d, h ? 6 : 2),
          s && (h ? oa.unshift(Be, s, Ie, s, sl, s) : oa.unshift(c, s)));
      }),
      (u.clearMatchMedia = function (a) {
        je.forEach(function (s) {
          return s._ctx && s._ctx.query === a && s._ctx.kill(!0, !0);
        });
      }),
      (u.isInViewport = function (a, s, c) {
        var d = (il(a) ? Gn(a) : a).getBoundingClientRect(),
          h = d[c ? er : tr] * s || 0;
        return c
          ? d.right - h > 0 && d.left + h < Be.innerWidth
          : d.bottom - h > 0 && d.top + h < Be.innerHeight;
      }),
      (u.positionInViewport = function (a, s, c) {
        il(a) && (a = Gn(a));
        var d = a.getBoundingClientRect(),
          h = d[c ? er : tr],
          m =
            s == null
              ? h / 2
              : s in Du
                ? Du[s] * h
                : ~s.indexOf("%")
                  ? (parseFloat(s) * h) / 100
                  : parseFloat(s) || 0;
        return c ? (d.left + m) / Be.innerWidth : (d.top + m) / Be.innerHeight;
      }),
      (u.killAll = function (a) {
        if (
          (je.slice(0).forEach(function (c) {
            return c.vars.id !== "ScrollSmoother" && c.kill();
          }),
          a !== !0)
        ) {
          var s = ar.killAll || [];
          ((ar = {}),
            s.forEach(function (c) {
              return c();
            }));
        }
      }),
      u
    );
  })();
be.version = "3.14.2";
be.saveStyles = function (u) {
  return u
    ? Oo(u).forEach(function (l) {
        if (l && l.style) {
          var r = al.indexOf(l);
          (r >= 0 && al.splice(r, 5),
            al.push(
              l,
              l.style.cssText,
              l.getBBox && l.getAttribute("transform"),
              oe.core.getCache(l),
              Qh(),
            ));
        }
      })
    : al;
};
be.revert = function (u, l) {
  return Cm(!u, l);
};
be.create = function (u, l) {
  return new be(u, l);
};
be.refresh = function (u) {
  return u ? uo(!0) : (Qr || be.register()) && Ji(!0);
};
be.update = function (u) {
  return ++qe.cache && ka(u === !0 ? 2 : 0);
};
be.clearScrollMemory = Yv;
be.maxScroll = function (u, l) {
  return sa(u, l ? Dn : It);
};
be.getScrollFunc = function (u, l) {
  return bi(Gn(u), l ? Dn : It);
};
be.getById = function (u) {
  return Kh[u];
};
be.getAll = function () {
  return je.filter(function (u) {
    return u.vars.id !== "ScrollSmoother";
  });
};
be.isScrolling = function () {
  return !!Hl;
};
be.snapDirectional = Am;
be.addEventListener = function (u, l) {
  var r = ar[u] || (ar[u] = []);
  ~r.indexOf(l) || r.push(l);
};
be.removeEventListener = function (u, l) {
  var r = ar[u],
    a = r && r.indexOf(l);
  a >= 0 && r.splice(a, 1);
};
be.batch = function (u, l) {
  var r = [],
    a = {},
    s = l.interval || 0.016,
    c = l.batchMax || 1e9,
    d = function (p, y) {
      var _ = [],
        T = [],
        x = oe
          .delayedCall(s, function () {
            (y(_, T), (_ = []), (T = []));
          })
          .pause();
      return function (w) {
        (_.length || x.restart(!0),
          _.push(w.trigger),
          T.push(w),
          c <= _.length && x.progress(1));
      };
    },
    h;
  for (h in l)
    a[h] =
      h.substr(0, 2) === "on" && bn(l[h]) && h !== "onRefreshInit"
        ? d(h, l[h])
        : l[h];
  return (
    bn(c) &&
      ((c = c()),
      ln(be, "refresh", function () {
        return (c = l.batchMax());
      })),
    Oo(u).forEach(function (m) {
      var p = {};
      for (h in a) p[h] = a[h];
      ((p.trigger = m), r.push(be.create(p)));
    }),
    r
  );
};
var cy = function (l, r, a, s) {
    return (
      r > s ? l(s) : r < 0 && l(0),
      a > s ? (s - r) / (a - r) : a < 0 ? r / (r - a) : 1
    );
  },
  xh = function u(l, r) {
    (r === !0
      ? l.style.removeProperty("touch-action")
      : (l.style.touchAction =
          r === !0
            ? "auto"
            : r
              ? "pan-" + r + (qt.isTouch ? " pinch-zoom" : "")
              : "none"),
      l === sl && u(Ie, r));
  },
  cu = { auto: 1, scroll: 1 },
  CS = function (l) {
    var r = l.event,
      a = l.target,
      s = l.axis,
      c = (r.changedTouches ? r.changedTouches[0] : r).target,
      d = c._gsap || oe.core.getCache(c),
      h = _n(),
      m;
    if (!d._isScrollT || h - d._isScrollT > 2e3) {
      for (
        ;
        c &&
        c !== Ie &&
        ((c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) ||
          !(cu[(m = kl(c)).overflowY] || cu[m.overflowX]));
      )
        c = c.parentNode;
      ((d._isScroll =
        c &&
        c !== a &&
        !lr(c) &&
        (cu[(m = kl(c)).overflowY] || cu[m.overflowX])),
        (d._isScrollT = h));
    }
    (d._isScroll || s === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  Vv = function (l, r, a, s) {
    return qt.create({
      target: l,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (s = s && CS),
      onPress: s,
      onDrag: s,
      onScroll: s,
      onEnable: function () {
        return a && ln(ut, qt.eventTypes[0], fy, !1, !0);
      },
      onDisable: function () {
        return nn(ut, qt.eventTypes[0], fy, !0);
      },
    });
  },
  wS = /(input|label|select|textarea)/i,
  uy,
  fy = function (l) {
    var r = wS.test(l.target.tagName);
    (r || uy) && ((l._gsapAllow = !0), (uy = r));
  },
  ES = function (l) {
    (Ki(l) || (l = {}),
      (l.preventDefault = l.isNormalizer = l.allowClicks = !0),
      l.type || (l.type = "wheel,touch"),
      (l.debounce = !!l.debounce),
      (l.id = l.id || "normalizer"));
    var r = l,
      a = r.normalizeScrollX,
      s = r.momentum,
      c = r.allowNestedScroll,
      d = r.onRelease,
      h,
      m,
      p = Gn(l.target) || sl,
      y = oe.core.globals().ScrollSmoother,
      _ = y && y.get(),
      T =
        ci &&
        ((l.content && Gn(l.content)) ||
          (_ && l.content !== !1 && !_.smooth() && _.content())),
      x = bi(p, It),
      w = bi(p, Dn),
      S = 1,
      E =
        (qt.isTouch && Be.visualViewport
          ? Be.visualViewport.scale * Be.visualViewport.width
          : Be.outerWidth) / Be.innerWidth,
      k = 0,
      j = bn(s)
        ? function () {
            return s(h);
          }
        : function () {
            return s || 2.8;
          },
      G,
      U,
      Y = Vv(p, l.type, !0, c),
      V = function () {
        return (U = !1);
      },
      R = aa,
      q = aa,
      Q = function () {
        ((m = sa(p, It)),
          (q = vo(ci ? 1 : 0, m)),
          a && (R = vo(0, sa(p, Dn))),
          (G = nr));
      },
      I = function () {
        ((T._gsap.y = oo(parseFloat(T._gsap.y) + x.offset) + "px"),
          (T.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(T._gsap.y) +
            ", 0, 1)"),
          (x.offset = x.cacheID = 0));
      },
      re = function () {
        if (U) {
          requestAnimationFrame(V);
          var J = oo(h.deltaY / 2),
            de = q(x.v - J);
          if (T && de !== x.v + x.offset) {
            x.offset = de - x.v;
            var M = oo((parseFloat(T && T._gsap.y) || 0) - x.offset);
            ((T.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              M +
              ", 0, 1)"),
              (T._gsap.y = M + "px"),
              (x.cacheID = qe.cache),
              ka());
          }
          return !0;
        }
        (x.offset && I(), (U = !0));
      },
      ne,
      pe,
      ge,
      me,
      O = function () {
        (Q(),
          ne.isActive() &&
            ne.vars.scrollY > m &&
            (x() > m ? ne.progress(1) && x(m) : ne.resetTo("scrollY", m)));
      };
    return (
      T && oe.set(T, { y: "+=0" }),
      (l.ignoreCheck = function (F) {
        return (
          (ci && F.type === "touchmove" && re()) ||
          (S > 1.05 && F.type !== "touchstart") ||
          h.isGesturing ||
          (F.touches && F.touches.length > 1)
        );
      }),
      (l.onPress = function () {
        U = !1;
        var F = S;
        ((S = oo(((Be.visualViewport && Be.visualViewport.scale) || 1) / E)),
          ne.pause(),
          F !== S && xh(p, S > 1.01 ? !0 : a ? !1 : "x"),
          (pe = w()),
          (ge = x()),
          Q(),
          (G = nr));
      }),
      (l.onRelease = l.onGestureStart =
        function (F, J) {
          if ((x.offset && I(), !J)) me.restart(!0);
          else {
            qe.cache++;
            var de = j(),
              M,
              A;
            (a &&
              ((M = w()),
              (A = M + (de * 0.05 * -F.velocityX) / 0.227),
              (de *= cy(w, M, A, sa(p, Dn))),
              (ne.vars.scrollX = R(A))),
              (M = x()),
              (A = M + (de * 0.05 * -F.velocityY) / 0.227),
              (de *= cy(x, M, A, sa(p, It))),
              (ne.vars.scrollY = q(A)),
              ne.invalidate().duration(de).play(0.01),
              ((ci && ne.vars.scrollY >= m) || M >= m - 1) &&
                oe.to({}, { onUpdate: O, duration: de }));
          }
          d && d(F);
        }),
      (l.onWheel = function () {
        (ne._ts && ne.pause(), _n() - k > 1e3 && ((G = 0), (k = _n())));
      }),
      (l.onChange = function (F, J, de, M, A) {
        if (
          (nr !== G && Q(),
          J && a && w(R(M[2] === J ? pe + (F.startX - F.x) : w() + J - M[1])),
          de)
        ) {
          x.offset && I();
          var Z = A[2] === de,
            ee = Z ? ge + F.startY - F.y : x() + de - A[1],
            te = q(ee);
          (Z && ee !== te && (ge += te - ee), x(te));
        }
        (de || J) && ka();
      }),
      (l.onEnable = function () {
        (xh(p, a ? !1 : "x"),
          be.addEventListener("refresh", O),
          ln(Be, "resize", O),
          x.smooth &&
            ((x.target.style.scrollBehavior = "auto"),
            (x.smooth = w.smooth = !1)),
          Y.enable());
      }),
      (l.onDisable = function () {
        (xh(p, !0),
          nn(Be, "resize", O),
          be.removeEventListener("refresh", O),
          Y.kill());
      }),
      (l.lockAxis = l.lockAxis !== !1),
      (h = new qt(l)),
      (h.iOS = ci),
      ci && !x() && x(1),
      ci && oe.ticker.add(aa),
      (me = h._dc),
      (ne = oe.to(h, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: a ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Xv(x, x(), function () {
            return ne.pause();
          }),
        },
        onUpdate: ka,
        onComplete: me.vars.onComplete,
      })),
      h
    );
  };
be.sort = function (u) {
  if (bn(u)) return je.sort(u);
  var l = Be.pageYOffset || 0;
  return (
    be.getAll().forEach(function (r) {
      return (r._sortY = r.trigger
        ? l + r.trigger.getBoundingClientRect().top
        : r.start + Be.innerHeight);
    }),
    je.sort(
      u ||
        function (r, a) {
          return (
            (r.vars.refreshPriority || 0) * -1e6 +
            (r.vars.containerAnimation ? 1e6 : r._sortY) -
            ((a.vars.containerAnimation ? 1e6 : a._sortY) +
              (a.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
be.observe = function (u) {
  return new qt(u);
};
be.normalizeScroll = function (u) {
  if (typeof u > "u") return Mn;
  if (u === !0 && Mn) return Mn.enable();
  if (u === !1) {
    (Mn && Mn.kill(), (Mn = u));
    return;
  }
  var l = u instanceof qt ? u : ES(u);
  return (
    Mn && Mn.target === l.target && Mn.kill(),
    lr(l.target) && (Mn = l),
    l
  );
};
be.core = {
  _getVelocityProp: Gh,
  _inputObserver: Vv,
  _scrollers: qe,
  _proxies: oa,
  bridge: {
    ss: function () {
      (Hl || ir("scrollStart"), (Hl = _n()));
    },
    ref: function () {
      return vn;
    },
  },
};
Ov() && oe.registerPlugin(be);
const zS = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  MS = (u) =>
    u.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, r, a) =>
      a ? a.toUpperCase() : r.toLowerCase(),
    ),
  dy = (u) => {
    const l = MS(u);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  Qv = (...u) =>
    u
      .filter((l, r, a) => !!l && l.trim() !== "" && a.indexOf(l) === r)
      .join(" ")
      .trim(),
  NS = (u) => {
    for (const l in u)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
var RS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const OS = D.forwardRef(
  (
    {
      color: u = "currentColor",
      size: l = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: a,
      className: s = "",
      children: c,
      iconNode: d,
      ...h
    },
    m,
  ) =>
    D.createElement(
      "svg",
      {
        ref: m,
        ...RS,
        width: l,
        height: l,
        stroke: u,
        strokeWidth: a ? (Number(r) * 24) / Number(l) : r,
        className: Qv("lucide", s),
        ...(!c && !NS(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...d.map(([p, y]) => D.createElement(p, y)),
        ...(Array.isArray(c) ? c : [c]),
      ],
    ),
);
const Lt = (u, l) => {
  const r = D.forwardRef(({ className: a, ...s }, c) =>
    D.createElement(OS, {
      ref: c,
      iconNode: l,
      className: Qv(`lucide-${zS(dy(u))}`, `lucide-${u}`, a),
      ...s,
    }),
  );
  return ((r.displayName = dy(u)), r);
};
const DS = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Yu = Lt("arrow-right", DS);
const kS = [
    ["path", { d: "M12 18V5", key: "adv99a" }],
    [
      "path",
      { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" },
    ],
    [
      "path",
      { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" },
    ],
    ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
    ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
    [
      "path",
      {
        d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
        key: "1gq6am",
      },
    ],
    ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
    ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }],
  ],
  jS = Lt("brain", kS);
const US = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Ho = Lt("check", US);
const HS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  BS = Lt("chevron-down", HS);
const qS = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  Zv = Lt("clock", qS);
const LS = [
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M17 20v2", key: "1rnc9c" }],
    ["path", { d: "M17 2v2", key: "11trls" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M2 17h2", key: "7oei6x" }],
    ["path", { d: "M2 7h2", key: "asdhe0" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "M20 17h2", key: "1fpfkl" }],
    ["path", { d: "M20 7h2", key: "1o8tra" }],
    ["path", { d: "M7 20v2", key: "4gnj0m" }],
    ["path", { d: "M7 2v2", key: "1i4yhu" }],
    [
      "rect",
      { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
    ],
    [
      "rect",
      { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
    ],
  ],
  YS = Lt("cpu", LS);
const GS = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ],
  XS = Lt("credit-card", GS);
const VS = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  QS = Lt("facebook", VS);
const ZS = [
    [
      "rect",
      { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" },
    ],
    ["path", { d: "M12 8v13", key: "1c76mn" }],
    ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
    [
      "path",
      {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl",
      },
    ],
  ],
  KS = Lt("gift", ZS);
const FS = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  JS = Lt("globe", FS);
const PS = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  WS = Lt("instagram", PS);
const $S = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  IS = Lt("linkedin", $S);
const e3 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  t3 = Lt("mail", e3);
const n3 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  l3 = Lt("map-pin", n3);
const a3 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  i3 = Lt("menu", a3);
const r3 = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  s3 = Lt("message-circle", r3);
const o3 = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  c3 = Lt("phone", o3);
const u3 = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  f3 = Lt("play", u3);
const d3 = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  h3 = Lt("quote", d3);
const m3 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  p3 = Lt("users", m3);
const g3 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  y3 = Lt("x", g3),
  v3 = () => {
    const [u, l] = D.useState(!1),
      [r, a] = D.useState(!1);
    D.useEffect(() => {
      const d = () => {
        l(window.scrollY > 50);
      };
      return (
        window.addEventListener("scroll", d, { passive: !0 }),
        () => window.removeEventListener("scroll", d)
      );
    }, []);
    const s = (d) => {
        const h = document.getElementById(d);
        h && (h.scrollIntoView({ behavior: "smooth" }), a(!1));
      },
      c = [
        { label: "Fonctionnalités", id: "features" },
        { label: "Pourquoi Lokoto", id: "why-lokoto" },
        { label: "Tarifs", id: "pricing" },
        { label: "Contact", id: "contact" },
      ];
    return b.jsxs(b.Fragment, {
      children: [
        b.jsx("nav", {
          "code-path": "src/components/Navbar.tsx:34:7",
          className: `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${u ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`,
          children: b.jsx("div", {
            "code-path": "src/components/Navbar.tsx:41:9",
            className: "w-full px-6 lg:px-12",
            children: b.jsxs("div", {
              "code-path": "src/components/Navbar.tsx:42:11",
              className: "flex items-center justify-between h-16 lg:h-20",
              children: [
                b.jsx("button", {
                  "code-path": "src/components/Navbar.tsx:44:13",
                  onClick: () =>
                    window.scrollTo({ top: 0, behavior: "smooth" }),
                  className:
                    "text-xl lg:text-2xl font-bold text-lokoto-gray hover:text-lokoto-green transition-colors",
                  children: "Lokoto",
                }),
                b.jsx("div", {
                  "code-path": "src/components/Navbar.tsx:52:13",
                  className: "hidden lg:flex items-center gap-8",
                  children: c.map((d) =>
                    b.jsx(
                      "button",
                      {
                        "code-path": "src/components/Navbar.tsx:54:17",
                        onClick: () => s(d.id),
                        className:
                          "text-sm font-medium text-lokoto-gray-medium hover:text-lokoto-green transition-colors",
                        children: d.label,
                      },
                      d.id,
                    ),
                  ),
                }),
                b.jsx("div", {
                  "code-path": "src/components/Navbar.tsx:65:13",
                  className: "hidden lg:block",
                  children: b.jsx("button", {
                    "code-path": "src/components/Navbar.tsx:66:15",
                    onClick: () => s("contact"),
                    className:
                      "bg-lokoto-green text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                    children: "Essayer gratuitement",
                  }),
                }),
                b.jsx("button", {
                  "code-path": "src/components/Navbar.tsx:75:13",
                  onClick: () => a(!r),
                  className:
                    "lg:hidden p-2 text-lokoto-gray hover:text-lokoto-green transition-colors",
                  "aria-label": "Toggle menu",
                  children: r
                    ? b.jsx(y3, {
                        "code-path": "src/components/Navbar.tsx:80:35",
                        size: 24,
                      })
                    : b.jsx(i3, {
                        "code-path": "src/components/Navbar.tsx:80:53",
                        size: 24,
                      }),
                }),
              ],
            }),
          }),
        }),
        b.jsx("div", {
          "code-path": "src/components/Navbar.tsx:87:7",
          className: `fixed inset-0 z-30 bg-white transition-transform duration-300 lg:hidden ${r ? "translate-x-0" : "translate-x-full"}`,
          children: b.jsxs("div", {
            "code-path": "src/components/Navbar.tsx:92:9",
            className: "flex flex-col items-center justify-center h-full gap-8",
            children: [
              c.map((d) =>
                b.jsx(
                  "button",
                  {
                    "code-path": "src/components/Navbar.tsx:94:13",
                    onClick: () => s(d.id),
                    className:
                      "text-2xl font-semibold text-lokoto-gray hover:text-lokoto-green transition-colors",
                    children: d.label,
                  },
                  d.id,
                ),
              ),
              b.jsx("button", {
                "code-path": "src/components/Navbar.tsx:102:11",
                onClick: () => s("contact"),
                className:
                  "bg-lokoto-green text-white font-semibold px-6 py-3 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4",
                children: "Essayer gratuitement",
              }),
            ],
          }),
        }),
      ],
    });
  },
  _3 = () => {
    const u = D.useRef(null);
    return (
      D.useEffect(() => {
        const l = (r) => {
          u.current &&
            (u.current.style.background = `radial-gradient(650px circle at ${r.clientX}px ${r.clientY}px, rgba(46, 204, 113, 0.07), transparent 40%)`);
        };
        return (
          window.addEventListener("mousemove", l, { passive: !0 }),
          () => window.removeEventListener("mousemove", l)
        );
      }, []),
      b.jsx("div", {
        "code-path": "src/components/Spotlight.tsx:21:5",
        ref: u,
        className:
          "pointer-events-none fixed inset-0 z-30 hidden md:block transition-[background] duration-100",
      })
    );
  };
function Kv(u) {
  var l,
    r,
    a = "";
  if (typeof u == "string" || typeof u == "number") a += u;
  else if (typeof u == "object")
    if (Array.isArray(u)) {
      var s = u.length;
      for (l = 0; l < s; l++)
        u[l] && (r = Kv(u[l])) && (a && (a += " "), (a += r));
    } else for (r in u) u[r] && (a && (a += " "), (a += r));
  return a;
}
function x3() {
  for (var u, l, r = 0, a = "", s = arguments.length; r < s; r++)
    (u = arguments[r]) && (l = Kv(u)) && (a && (a += " "), (a += l));
  return a;
}
const b3 = (u, l) => {
    const r = new Array(u.length + l.length);
    for (let a = 0; a < u.length; a++) r[a] = u[a];
    for (let a = 0; a < l.length; a++) r[u.length + a] = l[a];
    return r;
  },
  S3 = (u, l) => ({ classGroupId: u, validator: l }),
  Fv = (u = new Map(), l = null, r) => ({
    nextPart: u,
    validators: l,
    classGroupId: r,
  }),
  ku = "-",
  hy = [],
  T3 = "arbitrary..",
  A3 = (u) => {
    const l = w3(u),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: a } = u;
    return {
      getClassGroupId: (d) => {
        if (d.startsWith("[") && d.endsWith("]")) return C3(d);
        const h = d.split(ku),
          m = h[0] === "" && h.length > 1 ? 1 : 0;
        return Jv(h, m, l);
      },
      getConflictingClassGroupIds: (d, h) => {
        if (h) {
          const m = a[d],
            p = r[d];
          return m ? (p ? b3(p, m) : m) : p || hy;
        }
        return r[d] || hy;
      },
    };
  },
  Jv = (u, l, r) => {
    if (u.length - l === 0) return r.classGroupId;
    const s = u[l],
      c = r.nextPart.get(s);
    if (c) {
      const p = Jv(u, l + 1, c);
      if (p) return p;
    }
    const d = r.validators;
    if (d === null) return;
    const h = l === 0 ? u.join(ku) : u.slice(l).join(ku),
      m = d.length;
    for (let p = 0; p < m; p++) {
      const y = d[p];
      if (y.validator(h)) return y.classGroupId;
    }
  },
  C3 = (u) =>
    u.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const l = u.slice(1, -1),
            r = l.indexOf(":"),
            a = l.slice(0, r);
          return a ? T3 + a : void 0;
        })(),
  w3 = (u) => {
    const { theme: l, classGroups: r } = u;
    return E3(r, l);
  },
  E3 = (u, l) => {
    const r = Fv();
    for (const a in u) {
      const s = u[a];
      wm(s, r, a, l);
    }
    return r;
  },
  wm = (u, l, r, a) => {
    const s = u.length;
    for (let c = 0; c < s; c++) {
      const d = u[c];
      z3(d, l, r, a);
    }
  },
  z3 = (u, l, r, a) => {
    if (typeof u == "string") {
      M3(u, l, r);
      return;
    }
    if (typeof u == "function") {
      N3(u, l, r, a);
      return;
    }
    R3(u, l, r, a);
  },
  M3 = (u, l, r) => {
    const a = u === "" ? l : Pv(l, u);
    a.classGroupId = r;
  },
  N3 = (u, l, r, a) => {
    if (O3(u)) {
      wm(u(a), l, r, a);
      return;
    }
    (l.validators === null && (l.validators = []), l.validators.push(S3(r, u)));
  },
  R3 = (u, l, r, a) => {
    const s = Object.entries(u),
      c = s.length;
    for (let d = 0; d < c; d++) {
      const [h, m] = s[d];
      wm(m, Pv(l, h), r, a);
    }
  },
  Pv = (u, l) => {
    let r = u;
    const a = l.split(ku),
      s = a.length;
    for (let c = 0; c < s; c++) {
      const d = a[c];
      let h = r.nextPart.get(d);
      (h || ((h = Fv()), r.nextPart.set(d, h)), (r = h));
    }
    return r;
  },
  O3 = (u) => "isThemeGetter" in u && u.isThemeGetter === !0,
  D3 = (u) => {
    if (u < 1) return { get: () => {}, set: () => {} };
    let l = 0,
      r = Object.create(null),
      a = Object.create(null);
    const s = (c, d) => {
      ((r[c] = d), l++, l > u && ((l = 0), (a = r), (r = Object.create(null))));
    };
    return {
      get(c) {
        let d = r[c];
        if (d !== void 0) return d;
        if ((d = a[c]) !== void 0) return (s(c, d), d);
      },
      set(c, d) {
        c in r ? (r[c] = d) : s(c, d);
      },
    };
  },
  Ph = "!",
  my = ":",
  k3 = [],
  py = (u, l, r, a, s) => ({
    modifiers: u,
    hasImportantModifier: l,
    baseClassName: r,
    maybePostfixModifierPosition: a,
    isExternal: s,
  }),
  j3 = (u) => {
    const { prefix: l, experimentalParseClassName: r } = u;
    let a = (s) => {
      const c = [];
      let d = 0,
        h = 0,
        m = 0,
        p;
      const y = s.length;
      for (let S = 0; S < y; S++) {
        const E = s[S];
        if (d === 0 && h === 0) {
          if (E === my) {
            (c.push(s.slice(m, S)), (m = S + 1));
            continue;
          }
          if (E === "/") {
            p = S;
            continue;
          }
        }
        E === "[" ? d++ : E === "]" ? d-- : E === "(" ? h++ : E === ")" && h--;
      }
      const _ = c.length === 0 ? s : s.slice(m);
      let T = _,
        x = !1;
      _.endsWith(Ph)
        ? ((T = _.slice(0, -1)), (x = !0))
        : _.startsWith(Ph) && ((T = _.slice(1)), (x = !0));
      const w = p && p > m ? p - m : void 0;
      return py(c, x, T, w);
    };
    if (l) {
      const s = l + my,
        c = a;
      a = (d) =>
        d.startsWith(s) ? c(d.slice(s.length)) : py(k3, !1, d, void 0, !0);
    }
    if (r) {
      const s = a;
      a = (c) => r({ className: c, parseClassName: s });
    }
    return a;
  },
  U3 = (u) => {
    const l = new Map();
    return (
      u.orderSensitiveModifiers.forEach((r, a) => {
        l.set(r, 1e6 + a);
      }),
      (r) => {
        const a = [];
        let s = [];
        for (let c = 0; c < r.length; c++) {
          const d = r[c],
            h = d[0] === "[",
            m = l.has(d);
          h || m
            ? (s.length > 0 && (s.sort(), a.push(...s), (s = [])), a.push(d))
            : s.push(d);
        }
        return (s.length > 0 && (s.sort(), a.push(...s)), a);
      }
    );
  },
  H3 = (u) => ({
    cache: D3(u.cacheSize),
    parseClassName: j3(u),
    sortModifiers: U3(u),
    ...A3(u),
  }),
  B3 = /\s+/,
  q3 = (u, l) => {
    const {
        parseClassName: r,
        getClassGroupId: a,
        getConflictingClassGroupIds: s,
        sortModifiers: c,
      } = l,
      d = [],
      h = u.trim().split(B3);
    let m = "";
    for (let p = h.length - 1; p >= 0; p -= 1) {
      const y = h[p],
        {
          isExternal: _,
          modifiers: T,
          hasImportantModifier: x,
          baseClassName: w,
          maybePostfixModifierPosition: S,
        } = r(y);
      if (_) {
        m = y + (m.length > 0 ? " " + m : m);
        continue;
      }
      let E = !!S,
        k = a(E ? w.substring(0, S) : w);
      if (!k) {
        if (!E) {
          m = y + (m.length > 0 ? " " + m : m);
          continue;
        }
        if (((k = a(w)), !k)) {
          m = y + (m.length > 0 ? " " + m : m);
          continue;
        }
        E = !1;
      }
      const j = T.length === 0 ? "" : T.length === 1 ? T[0] : c(T).join(":"),
        G = x ? j + Ph : j,
        U = G + k;
      if (d.indexOf(U) > -1) continue;
      d.push(U);
      const Y = s(k, E);
      for (let V = 0; V < Y.length; ++V) {
        const R = Y[V];
        d.push(G + R);
      }
      m = y + (m.length > 0 ? " " + m : m);
    }
    return m;
  },
  L3 = (...u) => {
    let l = 0,
      r,
      a,
      s = "";
    for (; l < u.length; )
      (r = u[l++]) && (a = Wv(r)) && (s && (s += " "), (s += a));
    return s;
  },
  Wv = (u) => {
    if (typeof u == "string") return u;
    let l,
      r = "";
    for (let a = 0; a < u.length; a++)
      u[a] && (l = Wv(u[a])) && (r && (r += " "), (r += l));
    return r;
  },
  Y3 = (u, ...l) => {
    let r, a, s, c;
    const d = (m) => {
        const p = l.reduce((y, _) => _(y), u());
        return (
          (r = H3(p)),
          (a = r.cache.get),
          (s = r.cache.set),
          (c = h),
          h(m)
        );
      },
      h = (m) => {
        const p = a(m);
        if (p) return p;
        const y = q3(m, r);
        return (s(m, y), y);
      };
    return ((c = d), (...m) => c(L3(...m)));
  },
  G3 = [],
  Wt = (u) => {
    const l = (r) => r[u] || G3;
    return ((l.isThemeGetter = !0), l);
  },
  $v = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Iv = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  X3 = /^\d+\/\d+$/,
  V3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Q3 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Z3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  K3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  F3 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Vr = (u) => X3.test(u),
  ke = (u) => !!u && !Number.isNaN(Number(u)),
  oi = (u) => !!u && Number.isInteger(Number(u)),
  bh = (u) => u.endsWith("%") && ke(u.slice(0, -1)),
  Ma = (u) => V3.test(u),
  J3 = () => !0,
  P3 = (u) => Q3.test(u) && !Z3.test(u),
  e_ = () => !1,
  W3 = (u) => K3.test(u),
  $3 = (u) => F3.test(u),
  I3 = (u) => !ce(u) && !ue(u),
  eT = (u) => cs(u, l_, e_),
  ce = (u) => $v.test(u),
  Vi = (u) => cs(u, a_, P3),
  Sh = (u) => cs(u, iT, ke),
  gy = (u) => cs(u, t_, e_),
  tT = (u) => cs(u, n_, $3),
  uu = (u) => cs(u, i_, W3),
  ue = (u) => Iv.test(u),
  lo = (u) => us(u, a_),
  nT = (u) => us(u, rT),
  yy = (u) => us(u, t_),
  lT = (u) => us(u, l_),
  aT = (u) => us(u, n_),
  fu = (u) => us(u, i_, !0),
  cs = (u, l, r) => {
    const a = $v.exec(u);
    return a ? (a[1] ? l(a[1]) : r(a[2])) : !1;
  },
  us = (u, l, r = !1) => {
    const a = Iv.exec(u);
    return a ? (a[1] ? l(a[1]) : r) : !1;
  },
  t_ = (u) => u === "position" || u === "percentage",
  n_ = (u) => u === "image" || u === "url",
  l_ = (u) => u === "length" || u === "size" || u === "bg-size",
  a_ = (u) => u === "length",
  iT = (u) => u === "number",
  rT = (u) => u === "family-name",
  i_ = (u) => u === "shadow",
  sT = () => {
    const u = Wt("color"),
      l = Wt("font"),
      r = Wt("text"),
      a = Wt("font-weight"),
      s = Wt("tracking"),
      c = Wt("leading"),
      d = Wt("breakpoint"),
      h = Wt("container"),
      m = Wt("spacing"),
      p = Wt("radius"),
      y = Wt("shadow"),
      _ = Wt("inset-shadow"),
      T = Wt("text-shadow"),
      x = Wt("drop-shadow"),
      w = Wt("blur"),
      S = Wt("perspective"),
      E = Wt("aspect"),
      k = Wt("ease"),
      j = Wt("animate"),
      G = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      U = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      Y = () => [...U(), ue, ce],
      V = () => ["auto", "hidden", "clip", "visible", "scroll"],
      R = () => ["auto", "contain", "none"],
      q = () => [ue, ce, m],
      Q = () => [Vr, "full", "auto", ...q()],
      I = () => [oi, "none", "subgrid", ue, ce],
      re = () => ["auto", { span: ["full", oi, ue, ce] }, oi, ue, ce],
      ne = () => [oi, "auto", ue, ce],
      pe = () => ["auto", "min", "max", "fr", ue, ce],
      ge = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      me = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      O = () => ["auto", ...q()],
      F = () => [
        Vr,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...q(),
      ],
      J = () => [u, ue, ce],
      de = () => [...U(), yy, gy, { position: [ue, ce] }],
      M = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      A = () => ["auto", "cover", "contain", lT, eT, { size: [ue, ce] }],
      Z = () => [bh, lo, Vi],
      ee = () => ["", "none", "full", p, ue, ce],
      te = () => ["", ke, lo, Vi],
      ie = () => ["solid", "dashed", "dotted", "double"],
      fe = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      le = () => [ke, bh, yy, gy],
      Ne = () => ["", "none", w, ue, ce],
      Se = () => ["none", ke, ue, ce],
      Qe = () => ["none", ke, ue, ce],
      pt = () => [ke, ue, ce],
      gt = () => [Vr, "full", ...q()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ma],
        breakpoint: [Ma],
        color: [J3],
        container: [Ma],
        "drop-shadow": [Ma],
        ease: ["in", "out", "in-out"],
        font: [I3],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Ma],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ma],
        shadow: [Ma],
        spacing: ["px", ke],
        text: [Ma],
        "text-shadow": [Ma],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Vr, ce, ue, E] }],
        container: ["container"],
        columns: [{ columns: [ke, ce, ue, h] }],
        "break-after": [{ "break-after": G() }],
        "break-before": [{ "break-before": G() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: Y() }],
        overflow: [{ overflow: V() }],
        "overflow-x": [{ "overflow-x": V() }],
        "overflow-y": [{ "overflow-y": V() }],
        overscroll: [{ overscroll: R() }],
        "overscroll-x": [{ "overscroll-x": R() }],
        "overscroll-y": [{ "overscroll-y": R() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: Q() }],
        "inset-x": [{ "inset-x": Q() }],
        "inset-y": [{ "inset-y": Q() }],
        start: [{ start: Q() }],
        end: [{ end: Q() }],
        top: [{ top: Q() }],
        right: [{ right: Q() }],
        bottom: [{ bottom: Q() }],
        left: [{ left: Q() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [oi, "auto", ue, ce] }],
        basis: [{ basis: [Vr, "full", "auto", h, ...q()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ke, Vr, "auto", "initial", "none", ce] }],
        grow: [{ grow: ["", ke, ue, ce] }],
        shrink: [{ shrink: ["", ke, ue, ce] }],
        order: [{ order: [oi, "first", "last", "none", ue, ce] }],
        "grid-cols": [{ "grid-cols": I() }],
        "col-start-end": [{ col: re() }],
        "col-start": [{ "col-start": ne() }],
        "col-end": [{ "col-end": ne() }],
        "grid-rows": [{ "grid-rows": I() }],
        "row-start-end": [{ row: re() }],
        "row-start": [{ "row-start": ne() }],
        "row-end": [{ "row-end": ne() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": pe() }],
        "auto-rows": [{ "auto-rows": pe() }],
        gap: [{ gap: q() }],
        "gap-x": [{ "gap-x": q() }],
        "gap-y": [{ "gap-y": q() }],
        "justify-content": [{ justify: [...ge(), "normal"] }],
        "justify-items": [{ "justify-items": [...me(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...me()] }],
        "align-content": [{ content: ["normal", ...ge()] }],
        "align-items": [{ items: [...me(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...me(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ge() }],
        "place-items": [{ "place-items": [...me(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...me()] }],
        p: [{ p: q() }],
        px: [{ px: q() }],
        py: [{ py: q() }],
        ps: [{ ps: q() }],
        pe: [{ pe: q() }],
        pt: [{ pt: q() }],
        pr: [{ pr: q() }],
        pb: [{ pb: q() }],
        pl: [{ pl: q() }],
        m: [{ m: O() }],
        mx: [{ mx: O() }],
        my: [{ my: O() }],
        ms: [{ ms: O() }],
        me: [{ me: O() }],
        mt: [{ mt: O() }],
        mr: [{ mr: O() }],
        mb: [{ mb: O() }],
        ml: [{ ml: O() }],
        "space-x": [{ "space-x": q() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": q() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: F() }],
        w: [{ w: [h, "screen", ...F()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...F()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [d] }, ...F()] },
        ],
        h: [{ h: ["screen", "lh", ...F()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...F()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...F()] }],
        "font-size": [{ text: ["base", r, lo, Vi] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [a, ue, Sh] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              bh,
              ce,
            ],
          },
        ],
        "font-family": [{ font: [nT, ce, l] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, ue, ce] }],
        "line-clamp": [{ "line-clamp": [ke, "none", ue, Sh] }],
        leading: [{ leading: [c, ...q()] }],
        "list-image": [{ "list-image": ["none", ue, ce] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ue, ce] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: J() }],
        "text-color": [{ text: J() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ie(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ke, "from-font", "auto", ue, Vi] },
        ],
        "text-decoration-color": [{ decoration: J() }],
        "underline-offset": [{ "underline-offset": [ke, "auto", ue, ce] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: q() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ue,
              ce,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ue, ce] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: de() }],
        "bg-repeat": [{ bg: M() }],
        "bg-size": [{ bg: A() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  oi,
                  ue,
                  ce,
                ],
                radial: ["", ue, ce],
                conic: [oi, ue, ce],
              },
              aT,
              tT,
            ],
          },
        ],
        "bg-color": [{ bg: J() }],
        "gradient-from-pos": [{ from: Z() }],
        "gradient-via-pos": [{ via: Z() }],
        "gradient-to-pos": [{ to: Z() }],
        "gradient-from": [{ from: J() }],
        "gradient-via": [{ via: J() }],
        "gradient-to": [{ to: J() }],
        rounded: [{ rounded: ee() }],
        "rounded-s": [{ "rounded-s": ee() }],
        "rounded-e": [{ "rounded-e": ee() }],
        "rounded-t": [{ "rounded-t": ee() }],
        "rounded-r": [{ "rounded-r": ee() }],
        "rounded-b": [{ "rounded-b": ee() }],
        "rounded-l": [{ "rounded-l": ee() }],
        "rounded-ss": [{ "rounded-ss": ee() }],
        "rounded-se": [{ "rounded-se": ee() }],
        "rounded-ee": [{ "rounded-ee": ee() }],
        "rounded-es": [{ "rounded-es": ee() }],
        "rounded-tl": [{ "rounded-tl": ee() }],
        "rounded-tr": [{ "rounded-tr": ee() }],
        "rounded-br": [{ "rounded-br": ee() }],
        "rounded-bl": [{ "rounded-bl": ee() }],
        "border-w": [{ border: te() }],
        "border-w-x": [{ "border-x": te() }],
        "border-w-y": [{ "border-y": te() }],
        "border-w-s": [{ "border-s": te() }],
        "border-w-e": [{ "border-e": te() }],
        "border-w-t": [{ "border-t": te() }],
        "border-w-r": [{ "border-r": te() }],
        "border-w-b": [{ "border-b": te() }],
        "border-w-l": [{ "border-l": te() }],
        "divide-x": [{ "divide-x": te() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": te() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ie(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ie(), "hidden", "none"] }],
        "border-color": [{ border: J() }],
        "border-color-x": [{ "border-x": J() }],
        "border-color-y": [{ "border-y": J() }],
        "border-color-s": [{ "border-s": J() }],
        "border-color-e": [{ "border-e": J() }],
        "border-color-t": [{ "border-t": J() }],
        "border-color-r": [{ "border-r": J() }],
        "border-color-b": [{ "border-b": J() }],
        "border-color-l": [{ "border-l": J() }],
        "divide-color": [{ divide: J() }],
        "outline-style": [{ outline: [...ie(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ke, ue, ce] }],
        "outline-w": [{ outline: ["", ke, lo, Vi] }],
        "outline-color": [{ outline: J() }],
        shadow: [{ shadow: ["", "none", y, fu, uu] }],
        "shadow-color": [{ shadow: J() }],
        "inset-shadow": [{ "inset-shadow": ["none", _, fu, uu] }],
        "inset-shadow-color": [{ "inset-shadow": J() }],
        "ring-w": [{ ring: te() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: J() }],
        "ring-offset-w": [{ "ring-offset": [ke, Vi] }],
        "ring-offset-color": [{ "ring-offset": J() }],
        "inset-ring-w": [{ "inset-ring": te() }],
        "inset-ring-color": [{ "inset-ring": J() }],
        "text-shadow": [{ "text-shadow": ["none", T, fu, uu] }],
        "text-shadow-color": [{ "text-shadow": J() }],
        opacity: [{ opacity: [ke, ue, ce] }],
        "mix-blend": [
          { "mix-blend": [...fe(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": fe() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ke] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": le() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": le() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": J() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": J() }],
        "mask-image-t-from-pos": [{ "mask-t-from": le() }],
        "mask-image-t-to-pos": [{ "mask-t-to": le() }],
        "mask-image-t-from-color": [{ "mask-t-from": J() }],
        "mask-image-t-to-color": [{ "mask-t-to": J() }],
        "mask-image-r-from-pos": [{ "mask-r-from": le() }],
        "mask-image-r-to-pos": [{ "mask-r-to": le() }],
        "mask-image-r-from-color": [{ "mask-r-from": J() }],
        "mask-image-r-to-color": [{ "mask-r-to": J() }],
        "mask-image-b-from-pos": [{ "mask-b-from": le() }],
        "mask-image-b-to-pos": [{ "mask-b-to": le() }],
        "mask-image-b-from-color": [{ "mask-b-from": J() }],
        "mask-image-b-to-color": [{ "mask-b-to": J() }],
        "mask-image-l-from-pos": [{ "mask-l-from": le() }],
        "mask-image-l-to-pos": [{ "mask-l-to": le() }],
        "mask-image-l-from-color": [{ "mask-l-from": J() }],
        "mask-image-l-to-color": [{ "mask-l-to": J() }],
        "mask-image-x-from-pos": [{ "mask-x-from": le() }],
        "mask-image-x-to-pos": [{ "mask-x-to": le() }],
        "mask-image-x-from-color": [{ "mask-x-from": J() }],
        "mask-image-x-to-color": [{ "mask-x-to": J() }],
        "mask-image-y-from-pos": [{ "mask-y-from": le() }],
        "mask-image-y-to-pos": [{ "mask-y-to": le() }],
        "mask-image-y-from-color": [{ "mask-y-from": J() }],
        "mask-image-y-to-color": [{ "mask-y-to": J() }],
        "mask-image-radial": [{ "mask-radial": [ue, ce] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": le() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": le() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": J() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": J() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": U() }],
        "mask-image-conic-pos": [{ "mask-conic": [ke] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": le() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": le() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": J() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": J() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: de() }],
        "mask-repeat": [{ mask: M() }],
        "mask-size": [{ mask: A() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ue, ce] }],
        filter: [{ filter: ["", "none", ue, ce] }],
        blur: [{ blur: Ne() }],
        brightness: [{ brightness: [ke, ue, ce] }],
        contrast: [{ contrast: [ke, ue, ce] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", x, fu, uu] }],
        "drop-shadow-color": [{ "drop-shadow": J() }],
        grayscale: [{ grayscale: ["", ke, ue, ce] }],
        "hue-rotate": [{ "hue-rotate": [ke, ue, ce] }],
        invert: [{ invert: ["", ke, ue, ce] }],
        saturate: [{ saturate: [ke, ue, ce] }],
        sepia: [{ sepia: ["", ke, ue, ce] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ue, ce] }],
        "backdrop-blur": [{ "backdrop-blur": Ne() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ke, ue, ce] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ke, ue, ce] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ke, ue, ce] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ke, ue, ce] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ke, ue, ce] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ke, ue, ce] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ke, ue, ce] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ke, ue, ce] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": q() }],
        "border-spacing-x": [{ "border-spacing-x": q() }],
        "border-spacing-y": [{ "border-spacing-y": q() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ue,
              ce,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ke, "initial", ue, ce] }],
        ease: [{ ease: ["linear", "initial", k, ue, ce] }],
        delay: [{ delay: [ke, ue, ce] }],
        animate: [{ animate: ["none", j, ue, ce] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [S, ue, ce] }],
        "perspective-origin": [{ "perspective-origin": Y() }],
        rotate: [{ rotate: Se() }],
        "rotate-x": [{ "rotate-x": Se() }],
        "rotate-y": [{ "rotate-y": Se() }],
        "rotate-z": [{ "rotate-z": Se() }],
        scale: [{ scale: Qe() }],
        "scale-x": [{ "scale-x": Qe() }],
        "scale-y": [{ "scale-y": Qe() }],
        "scale-z": [{ "scale-z": Qe() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: pt() }],
        "skew-x": [{ "skew-x": pt() }],
        "skew-y": [{ "skew-y": pt() }],
        transform: [{ transform: [ue, ce, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: Y() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: gt() }],
        "translate-x": [{ "translate-x": gt() }],
        "translate-y": [{ "translate-y": gt() }],
        "translate-z": [{ "translate-z": gt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: J() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: J() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ue,
              ce,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": q() }],
        "scroll-mx": [{ "scroll-mx": q() }],
        "scroll-my": [{ "scroll-my": q() }],
        "scroll-ms": [{ "scroll-ms": q() }],
        "scroll-me": [{ "scroll-me": q() }],
        "scroll-mt": [{ "scroll-mt": q() }],
        "scroll-mr": [{ "scroll-mr": q() }],
        "scroll-mb": [{ "scroll-mb": q() }],
        "scroll-ml": [{ "scroll-ml": q() }],
        "scroll-p": [{ "scroll-p": q() }],
        "scroll-px": [{ "scroll-px": q() }],
        "scroll-py": [{ "scroll-py": q() }],
        "scroll-ps": [{ "scroll-ps": q() }],
        "scroll-pe": [{ "scroll-pe": q() }],
        "scroll-pt": [{ "scroll-pt": q() }],
        "scroll-pr": [{ "scroll-pr": q() }],
        "scroll-pb": [{ "scroll-pb": q() }],
        "scroll-pl": [{ "scroll-pl": q() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ue, ce],
          },
        ],
        fill: [{ fill: ["none", ...J()] }],
        "stroke-w": [{ stroke: [ke, lo, Vi, Sh] }],
        stroke: [{ stroke: ["none", ...J()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  oT = Y3(sT);
function Si(...u) {
  return oT(x3(u));
}
const cT = 1 / 3,
  na = 1 / 6,
  Th = (u) => Math.floor(u) | 0,
  Ah = new Float64Array([
    1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0,
    -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
  ]);
function uT(u = Math.random) {
  const l = fT(u),
    r = new Float64Array(l).map((c) => Ah[(c % 12) * 3]),
    a = new Float64Array(l).map((c) => Ah[(c % 12) * 3 + 1]),
    s = new Float64Array(l).map((c) => Ah[(c % 12) * 3 + 2]);
  return function (d, h, m) {
    let p, y, _, T;
    const x = (d + h + m) * cT,
      w = Th(d + x),
      S = Th(h + x),
      E = Th(m + x),
      k = (w + S + E) * na,
      j = w - k,
      G = S - k,
      U = E - k,
      Y = d - j,
      V = h - G,
      R = m - U;
    let q, Q, I, re, ne, pe;
    Y >= V
      ? V >= R
        ? ((q = 1), (Q = 0), (I = 0), (re = 1), (ne = 1), (pe = 0))
        : Y >= R
          ? ((q = 1), (Q = 0), (I = 0), (re = 1), (ne = 0), (pe = 1))
          : ((q = 0), (Q = 0), (I = 1), (re = 1), (ne = 0), (pe = 1))
      : V < R
        ? ((q = 0), (Q = 0), (I = 1), (re = 0), (ne = 1), (pe = 1))
        : Y < R
          ? ((q = 0), (Q = 1), (I = 0), (re = 0), (ne = 1), (pe = 1))
          : ((q = 0), (Q = 1), (I = 0), (re = 1), (ne = 1), (pe = 0));
    const ge = Y - q + na,
      me = V - Q + na,
      O = R - I + na,
      F = Y - re + 2 * na,
      J = V - ne + 2 * na,
      de = R - pe + 2 * na,
      M = Y - 1 + 3 * na,
      A = V - 1 + 3 * na,
      Z = R - 1 + 3 * na,
      ee = w & 255,
      te = S & 255,
      ie = E & 255;
    let fe = 0.6 - Y * Y - V * V - R * R;
    if (fe < 0) p = 0;
    else {
      const Qe = ee + l[te + l[ie]];
      ((fe *= fe), (p = fe * fe * (r[Qe] * Y + a[Qe] * V + s[Qe] * R)));
    }
    let le = 0.6 - ge * ge - me * me - O * O;
    if (le < 0) y = 0;
    else {
      const Qe = ee + q + l[te + Q + l[ie + I]];
      ((le *= le), (y = le * le * (r[Qe] * ge + a[Qe] * me + s[Qe] * O)));
    }
    let Ne = 0.6 - F * F - J * J - de * de;
    if (Ne < 0) _ = 0;
    else {
      const Qe = ee + re + l[te + ne + l[ie + pe]];
      ((Ne *= Ne), (_ = Ne * Ne * (r[Qe] * F + a[Qe] * J + s[Qe] * de)));
    }
    let Se = 0.6 - M * M - A * A - Z * Z;
    if (Se < 0) T = 0;
    else {
      const Qe = ee + 1 + l[te + 1 + l[ie + 1]];
      ((Se *= Se), (T = Se * Se * (r[Qe] * M + a[Qe] * A + s[Qe] * Z)));
    }
    return 32 * (p + y + _ + T);
  };
}
function fT(u) {
  const r = new Uint8Array(512);
  for (let a = 0; a < 512 / 2; a++) r[a] = a;
  for (let a = 0; a < 512 / 2 - 1; a++) {
    const s = a + ~~(u() * (256 - a)),
      c = r[a];
    ((r[a] = r[s]), (r[s] = c));
  }
  for (let a = 256; a < 512; a++) r[a] = r[a - 256];
  return r;
}
function dT({
  children: u,
  className: l,
  containerClassName: r,
  colors: a,
  waveWidth: s,
  backgroundFill: c,
  blur: d = 10,
  speed: h = "fast",
  waveOpacity: m = 0.5,
}) {
  const p = uT(),
    y = D.useRef(null),
    _ = D.useRef(0),
    T = () => (h === "slow" ? 0.001 : 0.002),
    x = a ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];
  D.useEffect(() => {
    const E = y.current;
    if (!E) return;
    const k = E.getContext("2d");
    if (!k) return;
    let j = (E.width = window.innerWidth),
      G = (E.height = window.innerHeight),
      U = 0;
    k.filter = `blur(${d}px)`;
    const Y = () => {
      ((j = E.width = window.innerWidth),
        (G = E.height = window.innerHeight),
        (k.filter = `blur(${d}px)`));
    };
    window.addEventListener("resize", Y);
    const V = (q) => {
        U += T();
        for (let Q = 0; Q < q; Q++) {
          (k.beginPath(),
            (k.lineWidth = s ?? 50),
            (k.strokeStyle = x[Q % x.length]));
          for (let I = 0; I < j; I += 5) {
            const re = p(I / 800, 0.3 * Q, U) * 100;
            k.lineTo(I, re + G * 0.5);
          }
          (k.stroke(), k.closePath());
        }
      },
      R = () => {
        ((k.fillStyle = c ?? "#000"),
          (k.globalAlpha = m),
          k.fillRect(0, 0, j, G),
          V(5),
          (_.current = requestAnimationFrame(R)));
      };
    return (
      R(),
      () => {
        (cancelAnimationFrame(_.current),
          window.removeEventListener("resize", Y));
      }
    );
  }, [d, h, m, c]);
  const [w, S] = D.useState(!1);
  return (
    D.useEffect(() => {
      S(
        navigator.userAgent.includes("Safari") &&
          !navigator.userAgent.includes("Chrome"),
      );
    }, []),
    b.jsxs("div", {
      "code-path": "src/components/ui/wavy-background.tsx:100:5",
      className: Si("relative flex flex-col items-center justify-center", r),
      children: [
        b.jsx("canvas", {
          "code-path": "src/components/ui/wavy-background.tsx:101:7",
          ref: y,
          className: "absolute inset-0 z-0",
          style: w ? { filter: `blur(${d}px)` } : void 0,
        }),
        b.jsx("div", {
          "code-path": "src/components/ui/wavy-background.tsx:106:7",
          className: Si("relative z-10", l),
          children: u,
        }),
      ],
    })
  );
}
Ae.registerPlugin(be);
const hT = [
    {
      emoji: "🚗",
      style: { top: "12%", left: "5%" },
      size: "3.5rem",
      opacity: 0.45,
      anim: "float1 6s ease-in-out infinite",
    },
    {
      emoji: "🚙",
      style: { top: "22%", right: "6%" },
      size: "3rem",
      opacity: 0.4,
      anim: "float2 8s ease-in-out infinite 1.2s",
    },
    {
      emoji: "🚐",
      style: { top: "54%", left: "6%" },
      size: "2.8rem",
      opacity: 0.35,
      anim: "float3 5.5s ease-in-out infinite 0.5s",
    },
    {
      emoji: "🛻",
      style: { top: "40%", right: "5%" },
      size: "3.2rem",
      opacity: 0.38,
      anim: "float1 7s ease-in-out infinite 2s",
    },
    {
      emoji: "🚕",
      style: { top: "70%", left: "3%" },
      size: "3.8rem",
      opacity: 0.32,
      anim: "float2 9s ease-in-out infinite 1.5s",
    },
    {
      emoji: "🚗",
      style: { top: "16%", left: "26%" },
      size: "2rem",
      opacity: 0.28,
      anim: "float3 7s ease-in-out infinite 3s",
    },
    {
      emoji: "🚙",
      style: { top: "72%", right: "10%" },
      size: "2.8rem",
      opacity: 0.33,
      anim: "float1 8s ease-in-out infinite 0.8s",
    },
    {
      emoji: "🚗",
      style: { top: "34%", right: "20%" },
      size: "2.2rem",
      opacity: 0.26,
      anim: "float2 6.5s ease-in-out infinite 2.5s",
    },
    {
      emoji: "🚐",
      style: { top: "80%", right: "4%" },
      size: "3rem",
      opacity: 0.3,
      anim: "float3 10s ease-in-out infinite 1s",
    },
    {
      emoji: "🚕",
      style: { top: "8%", right: "18%" },
      size: "2.4rem",
      opacity: 0.25,
      anim: "float1 5.5s ease-in-out infinite 2s",
    },
  ],
  mT = () => {
    const u = D.useRef(null),
      l = D.useRef(null),
      r = D.useRef(null),
      a = D.useRef(null),
      s = D.useRef(null);
    (D.useEffect(() => {
      const d = Ae.context(() => {
        const h = Ae.timeline({ defaults: { ease: "power3.out" } });
        (h.fromTo(
          l.current?.querySelectorAll(".headline-line") || [],
          { y: 55, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.09 },
          0,
        ),
          h.fromTo(
            r.current,
            { y: 28, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            0.35,
          ),
          h.fromTo(
            a.current?.querySelectorAll("button") || [],
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.07 },
            0.5,
          ),
          h.fromTo(
            s.current,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            0.7,
          ));
      }, u);
      return () => d.revert();
    }, []),
      D.useLayoutEffect(() => {
        const d = u.current;
        if (!d || window.matchMedia("(max-width: 767px)").matches) return;
        const h = Ae.context(() => {
          const m = Ae.timeline({
            scrollTrigger: {
              trigger: d,
              start: "top top",
              end: "+=130%",
              pin: !0,
              scrub: 0.6,
              onLeaveBack: () => {
                (Ae.set(l.current?.querySelectorAll(".headline-line") || [], {
                  y: 0,
                  opacity: 1,
                }),
                  Ae.set(r.current, { y: 0, opacity: 1 }),
                  Ae.set(a.current?.querySelectorAll("button") || [], {
                    y: 0,
                    opacity: 1,
                  }),
                  Ae.set(s.current, { opacity: 1 }));
              },
            },
          });
          (m.fromTo(
            l.current?.querySelectorAll(".headline-line") || [],
            { y: 0, opacity: 1 },
            { y: -70, opacity: 0, ease: "power2.in" },
            0.7,
          ),
            m.fromTo(
              r.current,
              { y: 0, opacity: 1 },
              { y: -50, opacity: 0, ease: "power2.in" },
              0.73,
            ),
            m.fromTo(
              a.current?.querySelectorAll("button") || [],
              { y: 0, opacity: 1 },
              { y: -30, opacity: 0, ease: "power2.in" },
              0.75,
            ),
            m.fromTo(
              s.current,
              { opacity: 1 },
              { opacity: 0, ease: "power2.in" },
              0.78,
            ));
        }, d);
        return () => h.revert();
      }, []));
    const c = () => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    };
    return b.jsxs("section", {
      "code-path": "src/sections/Hero.tsx:99:5",
      ref: u,
      className:
        "relative w-screen min-h-screen md:h-screen md:overflow-hidden z-10",
      children: [
        b.jsx(dT, {
          "code-path": "src/sections/Hero.tsx:104:7",
          containerClassName: "absolute inset-0 w-full h-full",
          colors: ["#2ECC71", "#58D68D", "#1A8A4A", "#2ECC71", "#58D68D"],
          backgroundFill: "#F6F7F6",
          waveOpacity: 0.35,
          blur: 8,
          speed: "slow",
          waveWidth: 60,
        }),
        b.jsx("div", {
          "code-path": "src/sections/Hero.tsx:115:7",
          className:
            "absolute inset-0 pointer-events-none select-none overflow-hidden z-[1]",
          children: hT.map((d, h) =>
            b.jsx(
              "span",
              {
                "code-path": "src/sections/Hero.tsx:117:11",
                className: "absolute",
                style: {
                  ...d.style,
                  fontSize: d.size,
                  opacity: d.opacity,
                  animation: d.anim,
                },
                children: d.emoji,
              },
              h,
            ),
          ),
        }),
        b.jsx("div", {
          "code-path": "src/sections/Hero.tsx:128:7",
          className:
            "relative z-10 flex flex-col items-center justify-center min-h-screen md:h-screen text-center px-6",
          children: b.jsxs("div", {
            "code-path": "src/sections/Hero.tsx:129:9",
            className: "max-w-5xl mx-auto",
            children: [
              b.jsx("div", {
                "code-path": "src/sections/Hero.tsx:131:11",
                ref: l,
                className: "mb-6",
                children: b.jsxs("h1", {
                  "code-path": "src/sections/Hero.tsx:132:13",
                  className:
                    "text-[52px] sm:text-[72px] lg:text-[96px] xl:text-[112px] font-extrabold leading-[0.88] tracking-[-0.03em] text-lokoto-gray",
                  children: [
                    b.jsx("span", {
                      "code-path": "src/sections/Hero.tsx:133:15",
                      className: "headline-line block",
                      children: "Gérez votre",
                    }),
                    b.jsx("span", {
                      "code-path": "src/sections/Hero.tsx:134:15",
                      className: "headline-line block text-lokoto-green",
                      children: "flotte.",
                    }),
                  ],
                }),
              }),
              b.jsx("p", {
                "code-path": "src/sections/Hero.tsx:139:11",
                ref: r,
                className:
                  "text-base sm:text-lg lg:text-xl text-lokoto-gray-medium max-w-xl mx-auto leading-relaxed mb-9",
                children:
                  "Lokoto est la plateforme tout-en-un pour les loueurs de véhicules au Sénégal. Suivi GPS, fichier clients, analytics — sans abonnement.",
              }),
              b.jsxs("div", {
                "code-path": "src/sections/Hero.tsx:148:11",
                ref: a,
                className: "flex flex-wrap gap-4 justify-center",
                children: [
                  b.jsxs("button", {
                    "code-path": "src/sections/Hero.tsx:150:13",
                    onClick: c,
                    className:
                      "relative overflow-hidden group bg-lokoto-green text-white font-semibold px-7 py-3.5 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2",
                    children: [
                      b.jsx("span", {
                        "code-path": "src/sections/Hero.tsx:154:15",
                        className:
                          "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100",
                        style: {
                          background:
                            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)",
                          backgroundSize: "200% 100%",
                          animation: "shimmer 1.6s linear infinite",
                        },
                      }),
                      b.jsx("span", {
                        "code-path": "src/sections/Hero.tsx:162:15",
                        className: "relative",
                        children: "Commencer gratuitement",
                      }),
                      b.jsx(Yu, {
                        "code-path": "src/sections/Hero.tsx:163:15",
                        size: 18,
                        className: "relative",
                      }),
                    ],
                  }),
                  b.jsxs("button", {
                    "code-path": "src/sections/Hero.tsx:166:13",
                    className:
                      "border-2 border-lokoto-green text-lokoto-green font-semibold px-7 py-3.5 rounded-full hover:bg-lokoto-green hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 bg-white/60 backdrop-blur-sm",
                    children: [
                      b.jsx(f3, {
                        "code-path": "src/sections/Hero.tsx:167:15",
                        size: 18,
                      }),
                      "Voir la démo",
                    ],
                  }),
                ],
              }),
              b.jsx("div", {
                "code-path": "src/sections/Hero.tsx:173:11",
                ref: s,
                className: "mt-7",
                children: b.jsx("span", {
                  "code-path": "src/sections/Hero.tsx:174:13",
                  className:
                    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 border border-black/5 text-lokoto-gray shadow-sm backdrop-blur-sm",
                  children: "🇸🇳 Conçu au Sénégal, pour le Sénégal",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
Ae.registerPlugin(be);
const pT = () => {
  const u = D.useRef(null),
    l = D.useRef(null),
    r = D.useRef(null),
    a = D.useRef(null),
    s = D.useRef(null);
  D.useLayoutEffect(() => {
    const d = u.current;
    if (!d || window.matchMedia("(max-width: 767px)").matches) return;
    const m = Ae.context(() => {
      const p = Ae.timeline({
        scrollTrigger: {
          trigger: d,
          start: "top top",
          end: "+=130%",
          pin: !0,
          scrub: 0.6,
        },
      });
      (p.fromTo(
        l.current,
        { x: "-55vw", rotate: -2, opacity: 0 },
        { x: 0, rotate: 0, opacity: 1, ease: "none" },
        0,
      ),
        p.fromTo(
          r.current,
          { x: "40vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none" },
          0.05,
        ),
        p.fromTo(
          a.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, ease: "none" },
          0.1,
        ),
        p.fromTo(
          s.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, ease: "none" },
          0.15,
        ),
        p.fromTo(
          l.current,
          { x: 0, scale: 1, opacity: 1 },
          { x: "-18vw", scale: 1.04, opacity: 0, ease: "power2.in" },
          0.7,
        ),
        p.fromTo(
          r.current,
          { x: 0, opacity: 1 },
          { x: "18vw", opacity: 0, ease: "power2.in" },
          0.7,
        ),
        p.fromTo(
          [a.current, s.current],
          { y: 0, opacity: 1 },
          { y: 20, opacity: 0, ease: "power2.in" },
          0.75,
        ));
    }, d);
    return () => m.revert();
  }, []);
  const c = () => {
    const d = document.getElementById("features");
    d && d.scrollIntoView({ behavior: "smooth" });
  };
  return b.jsxs("section", {
    "code-path": "src/sections/Problem.tsx:94:5",
    ref: u,
    id: "problem",
    className:
      "relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-20",
    children: [
      b.jsxs("div", {
        "code-path": "src/sections/Problem.tsx:100:7",
        className:
          "order-1 px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[46vw] md:top-[22vh] md:w-[48vw]",
        children: [
          b.jsxs("h2", {
            "code-path": "src/sections/Problem.tsx:101:9",
            ref: r,
            className:
              "text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray mb-6",
            children: [
              "Vous gérez votre flotte",
              b.jsx("br", { "code-path": "src/sections/Problem.tsx:105:34" }),
              b.jsx("span", {
                "code-path": "src/sections/Problem.tsx:106:11",
                className: "text-lokoto-gray-medium",
                children: "comme en 2005 ?",
              }),
            ],
          }),
          b.jsx("p", {
            "code-path": "src/sections/Problem.tsx:109:9",
            ref: a,
            className:
              "text-base lg:text-lg text-lokoto-gray-medium max-w-full md:max-w-[38vw] leading-relaxed mb-8",
            children:
              "Si vous vous reconnaissez dans ces situations, Lokoto est fait pour vous.",
          }),
          b.jsxs("button", {
            "code-path": "src/sections/Problem.tsx:116:9",
            ref: s,
            onClick: c,
            className:
              "bg-lokoto-green text-white font-semibold px-6 py-3 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2",
            children: [
              "Découvrir les fonctionnalités",
              b.jsx(Yu, {
                "code-path": "src/sections/Problem.tsx:122:11",
                size: 18,
              }),
            ],
          }),
        ],
      }),
      b.jsx("div", {
        "code-path": "src/sections/Problem.tsx:127:7",
        ref: l,
        className: `order-2 mx-6 mt-4 mb-6 h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[7vw] md:top-[14vh] md:w-[34vw] md:h-[72vh] md:rounded-[34px]`,
        children: b.jsx("img", {
          "code-path": "src/sections/Problem.tsx:132:9",
          src: "/problem_car.jpg",
          alt: "Modern car detail",
          className: "w-full h-full object-cover",
        }),
      }),
    ],
  });
};
Ae.registerPlugin(be);
const gT = () => {
  const u = D.useRef(null),
    l = D.useRef(null),
    r = D.useRef(null),
    a = D.useRef(null),
    s = D.useRef(null),
    c = D.useRef(null);
  D.useLayoutEffect(() => {
    const h = u.current;
    if (!h || window.matchMedia("(max-width: 767px)").matches) return;
    const p = Ae.context(() => {
      const y = Ae.timeline({
        scrollTrigger: {
          trigger: h,
          start: "top top",
          end: "+=130%",
          pin: !0,
          scrub: 0.6,
        },
      });
      (y.fromTo(
        l.current,
        { x: "55vw", scale: 0.98, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: "none" },
        0,
      ),
        y.fromTo(
          [r.current, a.current, s.current],
          { x: "-35vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none", stagger: 0.03 },
          0.05,
        ),
        y.fromTo(
          c.current?.querySelectorAll("li") || [],
          { x: "-20vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none", stagger: 0.02 },
          0.15,
        ),
        y.fromTo(
          l.current,
          { x: 0, opacity: 1 },
          { x: "22vw", opacity: 0, ease: "power2.in" },
          0.7,
        ),
        y.fromTo(
          [r.current, a.current, s.current, c.current],
          { x: 0, opacity: 1 },
          { x: "-14vw", opacity: 0, ease: "power2.in" },
          0.7,
        ));
    }, h);
    return () => p.revert();
  }, []);
  const d = [
    "Fiche conducteur complète",
    "Historique des locations",
    "Score de fiabilité client",
  ];
  return b.jsxs("section", {
    "code-path": "src/sections/FeatureCRM.tsx:80:5",
    ref: u,
    className:
      "relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-30",
    children: [
      b.jsxs("div", {
        "code-path": "src/sections/FeatureCRM.tsx:85:7",
        className:
          "px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[7vw] md:top-[16vh] md:w-[44vw]",
        children: [
          b.jsxs("span", {
            "code-path": "src/sections/FeatureCRM.tsx:86:9",
            ref: r,
            className:
              "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lokoto-green mb-4",
            children: [
              b.jsx(p3, {
                "code-path": "src/sections/FeatureCRM.tsx:90:11",
                size: 16,
              }),
              "Fichier Client",
            ],
          }),
          b.jsxs("h2", {
            "code-path": "src/sections/FeatureCRM.tsx:94:9",
            ref: a,
            className:
              "text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray mb-6",
            children: [
              "Fichier client",
              b.jsx("br", { "code-path": "src/sections/FeatureCRM.tsx:98:25" }),
              b.jsx("span", {
                "code-path": "src/sections/FeatureCRM.tsx:99:11",
                className: "text-lokoto-green",
                children: "intelligent",
              }),
            ],
          }),
          b.jsx("p", {
            "code-path": "src/sections/FeatureCRM.tsx:102:9",
            ref: s,
            className:
              "text-base lg:text-lg text-lokoto-gray-medium leading-relaxed mb-8",
            children:
              "Centralisez pièces, permis, historique et scoring. Retrouvez n'importe quelle info en 2 secondes.",
          }),
          b.jsx("ul", {
            "code-path": "src/sections/FeatureCRM.tsx:109:9",
            ref: c,
            className: "space-y-3",
            children: d.map((h, m) =>
              b.jsxs(
                "li",
                {
                  "code-path": "src/sections/FeatureCRM.tsx:111:13",
                  className: "flex items-center gap-3 text-lokoto-gray",
                  children: [
                    b.jsx("span", {
                      "code-path": "src/sections/FeatureCRM.tsx:112:15",
                      className:
                        "flex-shrink-0 w-5 h-5 rounded-full bg-lokoto-green/10 flex items-center justify-center",
                      children: b.jsx(Ho, {
                        "code-path": "src/sections/FeatureCRM.tsx:113:17",
                        size: 12,
                        className: "text-lokoto-green",
                      }),
                    }),
                    b.jsx("span", {
                      "code-path": "src/sections/FeatureCRM.tsx:115:15",
                      className: "text-sm lg:text-base",
                      children: h,
                    }),
                  ],
                },
                m,
              ),
            ),
          }),
        ],
      }),
      b.jsx("div", {
        "code-path": "src/sections/FeatureCRM.tsx:122:7",
        ref: l,
        className: `mx-6 mt-4 mb-6 h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[54vw] md:top-[14vh] md:w-[39vw] md:h-[72vh] md:rounded-[34px]`,
        children: b.jsx("img", {
          "code-path": "src/sections/FeatureCRM.tsx:127:9",
          src: "/feature_driver_phone.jpg",
          alt: "Driver with smartphone",
          className: "w-full h-full object-cover",
        }),
      }),
    ],
  });
};
Ae.registerPlugin(be);
const yT = () => {
  const u = D.useRef(null),
    l = D.useRef(null),
    r = D.useRef(null),
    a = D.useRef(null),
    s = D.useRef(null),
    c = D.useRef(null);
  D.useLayoutEffect(() => {
    const h = u.current;
    if (!h || window.matchMedia("(max-width: 767px)").matches) return;
    const p = Ae.context(() => {
      const y = Ae.timeline({
        scrollTrigger: {
          trigger: h,
          start: "top top",
          end: "+=130%",
          pin: !0,
          scrub: 0.6,
        },
      });
      (y.fromTo(
        l.current,
        { x: "-55vw", opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0,
      ),
        y.fromTo(
          [r.current, a.current, s.current],
          { x: "40vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none", stagger: 0.03 },
          0.05,
        ),
        y.fromTo(
          c.current?.querySelectorAll("li") || [],
          { x: "20vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none", stagger: 0.02 },
          0.15,
        ),
        y.fromTo(
          l.current,
          { x: 0, opacity: 1 },
          { x: "-18vw", opacity: 0, ease: "power2.in" },
          0.7,
        ),
        y.fromTo(
          [r.current, a.current, s.current, c.current],
          { x: 0, opacity: 1 },
          { x: "18vw", opacity: 0, ease: "power2.in" },
          0.7,
        ));
    }, h);
    return () => p.revert();
  }, []);
  const d = [
    "Boîtier GPS fourni et installé",
    "Géofencing & alertes",
    "Suivi kilométrage en direct",
  ];
  return b.jsxs("section", {
    "code-path": "src/sections/FeatureGPS.tsx:80:5",
    ref: u,
    className:
      "relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-40",
    children: [
      b.jsxs("div", {
        "code-path": "src/sections/FeatureGPS.tsx:85:7",
        className:
          "order-1 px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[54vw] md:top-[16vh] md:w-[40vw]",
        children: [
          b.jsxs("span", {
            "code-path": "src/sections/FeatureGPS.tsx:86:9",
            ref: r,
            className:
              "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lokoto-green mb-4",
            children: [
              b.jsx(l3, {
                "code-path": "src/sections/FeatureGPS.tsx:90:11",
                size: 16,
              }),
              "Suivi GPS",
            ],
          }),
          b.jsxs("h2", {
            "code-path": "src/sections/FeatureGPS.tsx:94:9",
            ref: a,
            className:
              "text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray mb-6",
            children: [
              "Sachez où sont vos",
              b.jsx("br", { "code-path": "src/sections/FeatureGPS.tsx:98:29" }),
              b.jsx("span", {
                "code-path": "src/sections/FeatureGPS.tsx:99:11",
                className: "text-lokoto-green",
                children: "véhicules",
              }),
              ", à tout moment",
            ],
          }),
          b.jsx("p", {
            "code-path": "src/sections/FeatureGPS.tsx:102:9",
            ref: s,
            className:
              "text-base lg:text-lg text-lokoto-gray-medium leading-relaxed mb-8",
            children:
              "Boîtier GPS fourni et installé. Géofencing, alertes et suivi kilométrique en direct.",
          }),
          b.jsx("ul", {
            "code-path": "src/sections/FeatureGPS.tsx:109:9",
            ref: c,
            className: "space-y-3",
            children: d.map((h, m) =>
              b.jsxs(
                "li",
                {
                  "code-path": "src/sections/FeatureGPS.tsx:111:13",
                  className: "flex items-center gap-3 text-lokoto-gray",
                  children: [
                    b.jsx("span", {
                      "code-path": "src/sections/FeatureGPS.tsx:112:15",
                      className:
                        "flex-shrink-0 w-5 h-5 rounded-full bg-lokoto-green/10 flex items-center justify-center",
                      children: b.jsx(Ho, {
                        "code-path": "src/sections/FeatureGPS.tsx:113:17",
                        size: 12,
                        className: "text-lokoto-green",
                      }),
                    }),
                    b.jsx("span", {
                      "code-path": "src/sections/FeatureGPS.tsx:115:15",
                      className: "text-sm lg:text-base",
                      children: h,
                    }),
                  ],
                },
                m,
              ),
            ),
          }),
        ],
      }),
      b.jsx("div", {
        "code-path": "src/sections/FeatureGPS.tsx:122:7",
        ref: l,
        className: `order-2 mx-6 mt-4 mb-6 h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[7vw] md:top-[14vh] md:w-[44vw] md:h-[72vh] md:rounded-[34px]`,
        children: b.jsx("img", {
          "code-path": "src/sections/FeatureGPS.tsx:127:9",
          src: "/feature_road.jpg",
          alt: "Car on road",
          className: "w-full h-full object-cover",
        }),
      }),
    ],
  });
};
Ae.registerPlugin(be);
const vT = () => {
  const u = D.useRef(null),
    l = D.useRef(null),
    r = D.useRef(null),
    a = D.useRef(null),
    s = D.useRef(null),
    c = D.useRef(null);
  D.useLayoutEffect(() => {
    const h = u.current;
    if (!h || window.matchMedia("(max-width: 767px)").matches) return;
    const p = Ae.context(() => {
      const y = Ae.timeline({
        scrollTrigger: {
          trigger: h,
          start: "top top",
          end: "+=130%",
          pin: !0,
          scrub: 0.6,
        },
      });
      (y.fromTo(
        l.current,
        { x: "55vw", scale: 0.98, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: "none" },
        0,
      ),
        y.fromTo(
          [r.current, a.current, s.current],
          { x: "-35vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none", stagger: 0.03 },
          0.05,
        ),
        y.fromTo(
          c.current?.querySelectorAll("li") || [],
          { x: "-20vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none", stagger: 0.02 },
          0.15,
        ),
        y.fromTo(
          l.current,
          { x: 0, opacity: 1 },
          { x: "22vw", opacity: 0, ease: "power2.in" },
          0.7,
        ),
        y.fromTo(
          [r.current, a.current, s.current, c.current],
          { x: 0, opacity: 1 },
          { x: "-14vw", opacity: 0, ease: "power2.in" },
          0.7,
        ));
    }, h);
    return () => p.revert();
  }, []);
  const d = [
    "Dashboard de rentabilité",
    "Prévisions saisonnières",
    "Véhicules les plus performants",
  ];
  return b.jsxs("section", {
    "code-path": "src/sections/FeatureAnalytics.tsx:80:5",
    ref: u,
    className:
      "relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-50",
    children: [
      b.jsxs("div", {
        "code-path": "src/sections/FeatureAnalytics.tsx:85:7",
        className:
          "px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[7vw] md:top-[16vh] md:w-[44vw]",
        children: [
          b.jsxs("span", {
            "code-path": "src/sections/FeatureAnalytics.tsx:86:9",
            ref: r,
            className:
              "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-lokoto-gold/20 text-lokoto-gray mb-4",
            children: [
              b.jsx(Zv, {
                "code-path": "src/sections/FeatureAnalytics.tsx:90:11",
                size: 14,
              }),
              "Bientôt disponible",
            ],
          }),
          b.jsxs("h2", {
            "code-path": "src/sections/FeatureAnalytics.tsx:94:9",
            ref: a,
            className:
              "text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray mb-6",
            children: [
              "Anticipez la demande",
              b.jsx("br", {
                "code-path": "src/sections/FeatureAnalytics.tsx:98:31",
              }),
              b.jsx("span", {
                "code-path": "src/sections/FeatureAnalytics.tsx:99:11",
                className: "text-lokoto-green",
                children: "avant vos concurrents",
              }),
            ],
          }),
          b.jsx("p", {
            "code-path": "src/sections/FeatureAnalytics.tsx:102:9",
            ref: s,
            className:
              "text-base lg:text-lg text-lokoto-gray-medium leading-relaxed mb-8",
            children:
              "Lokoto analyse vos données pour vous dire quels véhicules sont les plus demandés et quand.",
          }),
          b.jsx("ul", {
            "code-path": "src/sections/FeatureAnalytics.tsx:109:9",
            ref: c,
            className: "space-y-3",
            children: d.map((h, m) =>
              b.jsxs(
                "li",
                {
                  "code-path": "src/sections/FeatureAnalytics.tsx:111:13",
                  className: "flex items-center gap-3 text-lokoto-gray",
                  children: [
                    b.jsx("span", {
                      "code-path": "src/sections/FeatureAnalytics.tsx:112:15",
                      className:
                        "flex-shrink-0 w-5 h-5 rounded-full bg-lokoto-green/10 flex items-center justify-center",
                      children: b.jsx(Ho, {
                        "code-path": "src/sections/FeatureAnalytics.tsx:113:17",
                        size: 12,
                        className: "text-lokoto-green",
                      }),
                    }),
                    b.jsx("span", {
                      "code-path": "src/sections/FeatureAnalytics.tsx:115:15",
                      className: "text-sm lg:text-base",
                      children: h,
                    }),
                  ],
                },
                m,
              ),
            ),
          }),
        ],
      }),
      b.jsx("div", {
        "code-path": "src/sections/FeatureAnalytics.tsx:122:7",
        ref: l,
        className: `mx-6 mt-4 mb-6 h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[54vw] md:top-[14vh] md:w-[39vw] md:h-[72vh] md:rounded-[34px]`,
        children: b.jsx("img", {
          "code-path": "src/sections/FeatureAnalytics.tsx:127:9",
          src: "/feature_office.jpg",
          alt: "Professional in office",
          className: "w-full h-full object-cover",
        }),
      }),
    ],
  });
};
Ae.registerPlugin(be);
const _T = () => {
  const u = D.useRef(null),
    l = D.useRef(null),
    r = D.useRef(null),
    a = D.useRef(null),
    s = D.useRef(null),
    c = D.useRef(null);
  D.useLayoutEffect(() => {
    const h = u.current;
    if (!h || window.matchMedia("(max-width: 767px)").matches) return;
    const p = Ae.context(() => {
      const y = Ae.timeline({
        scrollTrigger: {
          trigger: h,
          start: "top top",
          end: "+=130%",
          pin: !0,
          scrub: 0.6,
        },
      });
      (y.fromTo(
        l.current,
        { x: "-55vw", opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0,
      ),
        y.fromTo(
          [r.current, a.current, s.current],
          { x: "40vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none", stagger: 0.03 },
          0.05,
        ),
        y.fromTo(
          c.current?.querySelectorAll("li") || [],
          { x: "20vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none", stagger: 0.02 },
          0.15,
        ),
        y.fromTo(
          l.current,
          { x: 0, opacity: 1 },
          { x: "-18vw", opacity: 0, ease: "power2.in" },
          0.7,
        ),
        y.fromTo(
          [r.current, a.current, s.current, c.current],
          { x: 0, opacity: 1 },
          { x: "18vw", opacity: 0, ease: "power2.in" },
          0.7,
        ));
    }, h);
    return () => p.revert();
  }, []);
  const d = [
    "Suivi revenus/dépenses",
    "Gestion des impayés",
    "Export comptable",
  ];
  return b.jsxs("section", {
    "code-path": "src/sections/FeatureAccounting.tsx:80:5",
    ref: u,
    id: "features",
    className:
      "relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-[60]",
    children: [
      b.jsxs("div", {
        "code-path": "src/sections/FeatureAccounting.tsx:86:7",
        className:
          "order-1 px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[54vw] md:top-[16vh] md:w-[40vw]",
        children: [
          b.jsxs("span", {
            "code-path": "src/sections/FeatureAccounting.tsx:87:9",
            ref: r,
            className:
              "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-lokoto-gold/20 text-lokoto-gray mb-4",
            children: [
              b.jsx(Zv, {
                "code-path": "src/sections/FeatureAccounting.tsx:91:11",
                size: 14,
              }),
              "Bientôt disponible",
            ],
          }),
          b.jsxs("h2", {
            "code-path": "src/sections/FeatureAccounting.tsx:95:9",
            ref: a,
            className:
              "text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray mb-6",
            children: [
              "Votre comptabilité en",
              b.jsx("br", {
                "code-path": "src/sections/FeatureAccounting.tsx:99:32",
              }),
              b.jsx("span", {
                "code-path": "src/sections/FeatureAccounting.tsx:100:11",
                className: "text-lokoto-green",
                children: "pilote automatique",
              }),
            ],
          }),
          b.jsx("p", {
            "code-path": "src/sections/FeatureAccounting.tsx:103:9",
            ref: s,
            className:
              "text-base lg:text-lg text-lokoto-gray-medium leading-relaxed mb-8",
            children:
              "Suivez revenus et dépenses par véhicule, gérez les cautions et exportez vos données.",
          }),
          b.jsx("ul", {
            "code-path": "src/sections/FeatureAccounting.tsx:110:9",
            ref: c,
            className: "space-y-3",
            children: d.map((h, m) =>
              b.jsxs(
                "li",
                {
                  "code-path": "src/sections/FeatureAccounting.tsx:112:13",
                  className: "flex items-center gap-3 text-lokoto-gray",
                  children: [
                    b.jsx("span", {
                      "code-path": "src/sections/FeatureAccounting.tsx:113:15",
                      className:
                        "flex-shrink-0 w-5 h-5 rounded-full bg-lokoto-green/10 flex items-center justify-center",
                      children: b.jsx(Ho, {
                        "code-path":
                          "src/sections/FeatureAccounting.tsx:114:17",
                        size: 12,
                        className: "text-lokoto-green",
                      }),
                    }),
                    b.jsx("span", {
                      "code-path": "src/sections/FeatureAccounting.tsx:116:15",
                      className: "text-sm lg:text-base",
                      children: h,
                    }),
                  ],
                },
                m,
              ),
            ),
          }),
        ],
      }),
      b.jsx("div", {
        "code-path": "src/sections/FeatureAccounting.tsx:123:7",
        ref: l,
        className: `order-2 mx-6 mt-4 mb-6 h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[7vw] md:top-[14vh] md:w-[44vw] md:h-[72vh] md:rounded-[34px]`,
        children: b.jsx("img", {
          "code-path": "src/sections/FeatureAccounting.tsx:128:9",
          src: "/feature_accounting.jpg",
          alt: "Accounting professionals",
          className: "w-full h-full object-cover",
        }),
      }),
    ],
  });
};
Ae.registerPlugin(be);
const xT = () => {
  const u = D.useRef(null),
    l = D.useRef(null),
    r = D.useRef(null);
  D.useEffect(() => {
    const s = u.current;
    if (!s) return;
    const c = Ae.context(() => {
      Ae.fromTo(
        l.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: l.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
      const d = r.current?.querySelectorAll(".advantage-card");
      d &&
        Ae.fromTo(
          d,
          { y: 60, scale: 0.98, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: r.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
    }, s);
    return () => c.revert();
  }, []);
  const a = [
    {
      icon: XS,
      title: "0 FCFA d'abonnement",
      description:
        "Pas de frais fixes. Vous ne payez qu'une petite commission quand vous gagnez de l'argent.",
    },
    {
      icon: JS,
      title: "Conçu pour le Sénégal",
      description:
        "Interface en français, pensée mobile-first, adaptée aux réalités du marché local.",
    },
    {
      icon: YS,
      title: "GPS intégré, clé en main",
      description:
        "On vous fournit et installe le boîtier. Rien à configurer, tout marche dès le premier jour.",
    },
    {
      icon: jS,
      title: "Intelligence prédictive",
      description:
        "Anticipez les périodes de forte demande grâce à un algorithme qui apprend de vos données.",
    },
  ];
  return b.jsx("section", {
    "code-path": "src/sections/WhyLokoto.tsx:83:5",
    ref: u,
    id: "why-lokoto",
    className: "relative bg-[#F6F7F6] py-20 lg:py-32 z-[70]",
    children: b.jsxs("div", {
      "code-path": "src/sections/WhyLokoto.tsx:88:7",
      className: "px-6 lg:px-[7vw]",
      children: [
        b.jsx("div", {
          "code-path": "src/sections/WhyLokoto.tsx:89:9",
          ref: l,
          className: "mb-12 lg:mb-16",
          children: b.jsxs("h2", {
            "code-path": "src/sections/WhyLokoto.tsx:90:11",
            className:
              "text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray",
            children: [
              "Pourquoi les loueurs",
              b.jsx("br", { "code-path": "src/sections/WhyLokoto.tsx:91:33" }),
              b.jsx("span", {
                "code-path": "src/sections/WhyLokoto.tsx:92:13",
                className: "text-lokoto-green",
                children: "choisissent Lokoto",
              }),
            ],
          }),
        }),
        b.jsx("div", {
          "code-path": "src/sections/WhyLokoto.tsx:96:9",
          ref: r,
          className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",
          children: a.map((s, c) =>
            b.jsxs(
              "div",
              {
                "code-path": "src/sections/WhyLokoto.tsx:101:13",
                className:
                  "advantage-card p-6 lg:p-8 bg-white rounded-[28px] border border-black/[0.06] hover:border-lokoto-green/30 hover:-translate-y-1 transition-all duration-300",
                children: [
                  b.jsx("div", {
                    "code-path": "src/sections/WhyLokoto.tsx:105:15",
                    className:
                      "w-12 h-12 rounded-2xl bg-lokoto-green/10 flex items-center justify-center mb-5",
                    children: b.jsx(s.icon, {
                      "code-path": "src/sections/WhyLokoto.tsx:106:17",
                      size: 24,
                      className: "text-lokoto-green",
                    }),
                  }),
                  b.jsx("h3", {
                    "code-path": "src/sections/WhyLokoto.tsx:108:15",
                    className:
                      "text-xl lg:text-2xl font-bold text-lokoto-gray mb-3",
                    children: s.title,
                  }),
                  b.jsx("p", {
                    "code-path": "src/sections/WhyLokoto.tsx:111:15",
                    className: "text-lokoto-gray-medium leading-relaxed",
                    children: s.description,
                  }),
                ],
              },
              c,
            ),
          ),
        }),
      ],
    }),
  });
};
Ae.registerPlugin(be);
const bT = () => {
  const u = D.useRef(null),
    l = D.useRef(null),
    r = D.useRef(null);
  D.useEffect(() => {
    const c = u.current;
    if (!c) return;
    const d = Ae.context(() => {
      (Ae.fromTo(
        l.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: l.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      ),
        Ae.fromTo(
          r.current,
          { y: 70, scale: 0.98, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: r.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        ));
    }, c);
    return () => d.revert();
  }, []);
  const a = [
      "CRM & fichier clients illimité",
      "Boîtier GPS fourni (1 par véhicule)",
      "Tracking temps réel",
      "Alertes & notifications",
      "Support WhatsApp dédié",
      "Pas d'engagement, résiliable à tout moment",
    ],
    s = () => {
      const c = document.getElementById("contact");
      c && c.scrollIntoView({ behavior: "smooth" });
    };
  return b.jsx("section", {
    "code-path": "src/sections/Pricing.tsx:72:5",
    ref: u,
    id: "pricing",
    className: "relative bg-[#F6F7F6] py-20 lg:py-32 z-[80]",
    children: b.jsxs("div", {
      "code-path": "src/sections/Pricing.tsx:77:7",
      className: "px-6 lg:px-[7vw]",
      children: [
        b.jsxs("div", {
          "code-path": "src/sections/Pricing.tsx:78:9",
          ref: l,
          className: "text-center mb-12 lg:mb-16",
          children: [
            b.jsxs("h2", {
              "code-path": "src/sections/Pricing.tsx:79:11",
              className:
                "text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray mb-4",
              children: [
                "Un modèle simple :",
                b.jsx("br", { "code-path": "src/sections/Pricing.tsx:80:31" }),
                b.jsx("span", {
                  "code-path": "src/sections/Pricing.tsx:81:13",
                  className: "text-lokoto-green",
                  children: "vous gagnez, on gagne",
                }),
              ],
            }),
            b.jsx("p", {
              "code-path": "src/sections/Pricing.tsx:83:11",
              className: "text-lg text-lokoto-gray-medium max-w-xl mx-auto",
              children:
                "Pas d'abonnement. Pas de surprise. Juste une commission sur chaque location réussie.",
            }),
          ],
        }),
        b.jsxs("div", {
          "code-path": "src/sections/Pricing.tsx:88:9",
          ref: r,
          className:
            "max-w-2xl mx-auto bg-white rounded-[34px] p-8 lg:p-12 shadow-card",
          children: [
            b.jsxs("div", {
              "code-path": "src/sections/Pricing.tsx:92:11",
              className: "text-center mb-8",
              children: [
                b.jsx("div", {
                  "code-path": "src/sections/Pricing.tsx:93:13",
                  className:
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lokoto-green/10 text-lokoto-green text-sm font-semibold mb-4",
                  children: "Plan unique : Commission",
                }),
                b.jsxs("div", {
                  "code-path": "src/sections/Pricing.tsx:96:13",
                  className:
                    "text-5xl lg:text-6xl font-extrabold text-lokoto-gray mb-2",
                  children: [
                    "À partir de ",
                    b.jsx("span", {
                      "code-path": "src/sections/Pricing.tsx:97:27",
                      className: "text-lokoto-green",
                      children: "3%",
                    }),
                  ],
                }),
                b.jsx("p", {
                  "code-path": "src/sections/Pricing.tsx:99:13",
                  className: "text-lokoto-gray-medium",
                  children: "par location",
                }),
              ],
            }),
            b.jsx("ul", {
              "code-path": "src/sections/Pricing.tsx:102:11",
              className: "space-y-4 mb-8",
              children: a.map((c, d) =>
                b.jsxs(
                  "li",
                  {
                    "code-path": "src/sections/Pricing.tsx:104:15",
                    className: "flex items-center gap-3",
                    children: [
                      b.jsx("span", {
                        "code-path": "src/sections/Pricing.tsx:105:17",
                        className:
                          "flex-shrink-0 w-6 h-6 rounded-full bg-lokoto-green flex items-center justify-center",
                        children: b.jsx(Ho, {
                          "code-path": "src/sections/Pricing.tsx:106:19",
                          size: 14,
                          className: "text-white",
                        }),
                      }),
                      b.jsx("span", {
                        "code-path": "src/sections/Pricing.tsx:108:17",
                        className: "text-lokoto-gray",
                        children: c,
                      }),
                    ],
                  },
                  d,
                ),
              ),
            }),
            b.jsxs("button", {
              "code-path": "src/sections/Pricing.tsx:113:11",
              onClick: s,
              className:
                "w-full bg-lokoto-green text-white font-semibold px-6 py-4 rounded-full text-lg hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2",
              children: [
                "Démarrer maintenant",
                b.jsx(Yu, {
                  "code-path": "src/sections/Pricing.tsx:118:13",
                  size: 20,
                }),
              ],
            }),
            b.jsxs("div", {
              "code-path": "src/sections/Pricing.tsx:121:11",
              className:
                "mt-6 flex items-center justify-center gap-2 text-sm text-lokoto-gray-medium",
              children: [
                b.jsx(KS, {
                  "code-path": "src/sections/Pricing.tsx:122:13",
                  size: 16,
                  className: "text-lokoto-gold",
                }),
                b.jsx("span", {
                  "code-path": "src/sections/Pricing.tsx:123:13",
                  children:
                    "Installation offerte pour les 50 premiers inscrits",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
Ae.registerPlugin(be);
const vy = [
    {
      image: "/testimonial_1.jpg",
      name: "Moussa D.",
      role: "Gérant de flotte à Dakar",
      quote:
        "Depuis Lokoto, je sais exactement où sont mes 12 véhicules et quels clients me rapportent le plus. J'aurais aimé avoir ça il y a 5 ans.",
    },
    {
      image: "/testimonial_2.jpg",
      name: "Aïcha N.",
      role: "Loueuse à Thiès",
      quote:
        "Le scoring client nous aide à éviter les impayés. On peut enfin faire confiance aux nouveaux clients avec des données concrètes.",
    },
    {
      image: "/testimonial_3.jpg",
      name: "Omar F.",
      role: "Entrepreneur à Mbour",
      quote:
        "L'installation a pris 20 minutes. Le suivi est instantané. Mes véhicules sont enfin sous contrôle, même quand je suis en déplacement.",
    },
    {
      image: "/testimonial_1.jpg",
      name: "Fatou B.",
      role: "Propriétaire de flotte à Saint-Louis",
      quote:
        "Le tableau de bord me donne une vision claire de mes revenus par véhicule. Je sais maintenant quels cars me coûtent et quels cars me rapportent.",
    },
    {
      image: "/testimonial_2.jpg",
      name: "Ibrahima S.",
      role: "Loueur à Ziguinchor",
      quote:
        "Le support WhatsApp est réactif et l'application marche même avec une connexion lente. Parfait pour les réalités locales.",
    },
  ],
  ST = [
    { value: "500+", label: "véhicules suivis" },
    { value: "50+", label: "loueurs inscrits" },
    { value: "98%", label: "taux de satisfaction" },
  ],
  TT = () => {
    const u = D.useRef(null),
      l = D.useRef(null),
      r = D.useRef(null);
    D.useEffect(() => {
      const s = u.current;
      if (!s) return;
      const c = Ae.context(() => {
        Ae.fromTo(
          l.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: l.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
        const d = r.current?.querySelectorAll(".stat-item");
        d &&
          Ae.fromTo(
            d,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: r.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          );
      }, s);
      return () => c.revert();
    }, []);
    const a = [...vy, ...vy];
    return b.jsxs("section", {
      "code-path": "src/sections/Testimonials.tsx:106:5",
      ref: u,
      className: "relative bg-[#F6F7F6] py-20 lg:py-32 z-[90] overflow-hidden",
      children: [
        b.jsx("div", {
          "code-path": "src/sections/Testimonials.tsx:111:7",
          ref: l,
          className: "text-center mb-12 lg:mb-16 px-6 lg:px-[7vw]",
          children: b.jsxs("h2", {
            "code-path": "src/sections/Testimonials.tsx:112:9",
            className:
              "text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray",
            children: [
              "Ils nous font ",
              b.jsx("span", {
                "code-path": "src/sections/Testimonials.tsx:113:25",
                className: "text-lokoto-green",
                children: "confiance",
              }),
            ],
          }),
        }),
        b.jsx("div", {
          "code-path": "src/sections/Testimonials.tsx:123:7",
          className: "relative mb-16",
          style: {
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          },
          children: b.jsx("div", {
            "code-path": "src/sections/Testimonials.tsx:132:9",
            className:
              "flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]",
            style: { willChange: "transform" },
            children: a.map((s, c) =>
              b.jsxs(
                "div",
                {
                  "code-path": "src/sections/Testimonials.tsx:137:13",
                  className:
                    "testimonial-card w-[320px] sm:w-[360px] flex-shrink-0 bg-white rounded-[28px] p-6 border border-black/[0.06] shadow-card",
                  children: [
                    b.jsx(h3, {
                      "code-path": "src/sections/Testimonials.tsx:141:15",
                      size: 28,
                      className: "text-lokoto-green/25 mb-4",
                    }),
                    b.jsxs("p", {
                      "code-path": "src/sections/Testimonials.tsx:142:15",
                      className:
                        "text-lokoto-gray leading-relaxed mb-6 text-sm sm:text-base",
                      children: ['"', s.quote, '"'],
                    }),
                    b.jsxs("div", {
                      "code-path": "src/sections/Testimonials.tsx:145:15",
                      className: "flex items-center gap-3",
                      children: [
                        b.jsx("img", {
                          "code-path": "src/sections/Testimonials.tsx:146:17",
                          src: s.image,
                          alt: s.name,
                          className:
                            "w-10 h-10 rounded-full object-cover flex-shrink-0",
                        }),
                        b.jsxs("div", {
                          "code-path": "src/sections/Testimonials.tsx:151:17",
                          children: [
                            b.jsx("div", {
                              "code-path":
                                "src/sections/Testimonials.tsx:152:19",
                              className:
                                "font-semibold text-sm text-lokoto-gray",
                              children: s.name,
                            }),
                            b.jsx("div", {
                              "code-path":
                                "src/sections/Testimonials.tsx:155:19",
                              className: "text-xs text-lokoto-gray-medium",
                              children: s.role,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                c,
              ),
            ),
          }),
        }),
        b.jsx("div", {
          "code-path": "src/sections/Testimonials.tsx:164:7",
          ref: r,
          className:
            "flex flex-wrap justify-center gap-8 lg:gap-16 px-6 lg:px-[7vw]",
          children: ST.map((s, c) =>
            b.jsxs(
              "div",
              {
                "code-path": "src/sections/Testimonials.tsx:169:11",
                className: "stat-item text-center",
                children: [
                  b.jsx("div", {
                    "code-path": "src/sections/Testimonials.tsx:170:13",
                    className:
                      "text-4xl lg:text-5xl font-extrabold text-lokoto-green mb-2",
                    children: s.value,
                  }),
                  b.jsx("div", {
                    "code-path": "src/sections/Testimonials.tsx:173:13",
                    className: "text-lokoto-gray-medium",
                    children: s.label,
                  }),
                ],
              },
              c,
            ),
          ),
        }),
      ],
    });
  };
function Em(u, l = []) {
  let r = [];
  function a(c, d) {
    const h = D.createContext(d),
      m = r.length;
    r = [...r, d];
    const p = (_) => {
      const { scope: T, children: x, ...w } = _,
        S = T?.[u]?.[m] || h,
        E = D.useMemo(() => w, Object.values(w));
      return b.jsx(S.Provider, { value: E, children: x });
    };
    p.displayName = c + "Provider";
    function y(_, T) {
      const x = T?.[u]?.[m] || h,
        w = D.useContext(x);
      if (w) return w;
      if (d !== void 0) return d;
      throw new Error(`\`${_}\` must be used within \`${c}\``);
    }
    return [p, y];
  }
  const s = () => {
    const c = r.map((d) => D.createContext(d));
    return function (h) {
      const m = h?.[u] || c;
      return D.useMemo(() => ({ [`__scope${u}`]: { ...h, [u]: m } }), [h, m]);
    };
  };
  return ((s.scopeName = u), [a, AT(s, ...l)]);
}
function AT(...u) {
  const l = u[0];
  if (u.length === 1) return l;
  const r = () => {
    const a = u.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (c) {
      const d = a.reduce((h, { useScope: m, scopeName: p }) => {
        const _ = m(c)[`__scope${p}`];
        return { ...h, ..._ };
      }, {});
      return D.useMemo(() => ({ [`__scope${l.scopeName}`]: d }), [d]);
    };
  };
  return ((r.scopeName = l.scopeName), r);
}
function _y(u, l) {
  if (typeof u == "function") return u(l);
  u != null && (u.current = l);
}
function Gu(...u) {
  return (l) => {
    let r = !1;
    const a = u.map((s) => {
      const c = _y(s, l);
      return (!r && typeof c == "function" && (r = !0), c);
    });
    if (r)
      return () => {
        for (let s = 0; s < a.length; s++) {
          const c = a[s];
          typeof c == "function" ? c() : _y(u[s], null);
        }
      };
  };
}
function ko(...u) {
  return D.useCallback(Gu(...u), u);
}
function xy(u) {
  const l = CT(u),
    r = D.forwardRef((a, s) => {
      const { children: c, ...d } = a,
        h = D.Children.toArray(c),
        m = h.find(ET);
      if (m) {
        const p = m.props.children,
          y = h.map((_) =>
            _ === m
              ? D.Children.count(p) > 1
                ? D.Children.only(null)
                : D.isValidElement(p)
                  ? p.props.children
                  : null
              : _,
          );
        return b.jsx(l, {
          ...d,
          ref: s,
          children: D.isValidElement(p) ? D.cloneElement(p, void 0, y) : null,
        });
      }
      return b.jsx(l, { ...d, ref: s, children: c });
    });
  return ((r.displayName = `${u}.Slot`), r);
}
function CT(u) {
  const l = D.forwardRef((r, a) => {
    const { children: s, ...c } = r;
    if (D.isValidElement(s)) {
      const d = MT(s),
        h = zT(c, s.props);
      return (
        s.type !== D.Fragment && (h.ref = a ? Gu(a, d) : d),
        D.cloneElement(s, h)
      );
    }
    return D.Children.count(s) > 1 ? D.Children.only(null) : null;
  });
  return ((l.displayName = `${u}.SlotClone`), l);
}
var wT = Symbol("radix.slottable");
function ET(u) {
  return (
    D.isValidElement(u) &&
    typeof u.type == "function" &&
    "__radixId" in u.type &&
    u.type.__radixId === wT
  );
}
function zT(u, l) {
  const r = { ...l };
  for (const a in l) {
    const s = u[a],
      c = l[a];
    /^on[A-Z]/.test(a)
      ? s && c
        ? (r[a] = (...h) => {
            const m = c(...h);
            return (s(...h), m);
          })
        : s && (r[a] = s)
      : a === "style"
        ? (r[a] = { ...s, ...c })
        : a === "className" && (r[a] = [s, c].filter(Boolean).join(" "));
  }
  return { ...u, ...r };
}
function MT(u) {
  let l = Object.getOwnPropertyDescriptor(u.props, "ref")?.get,
    r = l && "isReactWarning" in l && l.isReactWarning;
  return r
    ? u.ref
    : ((l = Object.getOwnPropertyDescriptor(u, "ref")?.get),
      (r = l && "isReactWarning" in l && l.isReactWarning),
      r ? u.props.ref : u.props.ref || u.ref);
}
function NT(u) {
  const l = u + "CollectionProvider",
    [r, a] = Em(l),
    [s, c] = r(l, { collectionRef: { current: null }, itemMap: new Map() }),
    d = (S) => {
      const { scope: E, children: k } = S,
        j = Bt.useRef(null),
        G = Bt.useRef(new Map()).current;
      return b.jsx(s, { scope: E, itemMap: G, collectionRef: j, children: k });
    };
  d.displayName = l;
  const h = u + "CollectionSlot",
    m = xy(h),
    p = Bt.forwardRef((S, E) => {
      const { scope: k, children: j } = S,
        G = c(h, k),
        U = ko(E, G.collectionRef);
      return b.jsx(m, { ref: U, children: j });
    });
  p.displayName = h;
  const y = u + "CollectionItemSlot",
    _ = "data-radix-collection-item",
    T = xy(y),
    x = Bt.forwardRef((S, E) => {
      const { scope: k, children: j, ...G } = S,
        U = Bt.useRef(null),
        Y = ko(E, U),
        V = c(y, k);
      return (
        Bt.useEffect(
          () => (
            V.itemMap.set(U, { ref: U, ...G }),
            () => {
              V.itemMap.delete(U);
            }
          ),
        ),
        b.jsx(T, { [_]: "", ref: Y, children: j })
      );
    });
  x.displayName = y;
  function w(S) {
    const E = c(u + "CollectionConsumer", S);
    return Bt.useCallback(() => {
      const j = E.collectionRef.current;
      if (!j) return [];
      const G = Array.from(j.querySelectorAll(`[${_}]`));
      return Array.from(E.itemMap.values()).sort(
        (V, R) => G.indexOf(V.ref.current) - G.indexOf(R.ref.current),
      );
    }, [E.collectionRef, E.itemMap]);
  }
  return [{ Provider: d, Slot: p, ItemSlot: x }, w, a];
}
function r_(u, l, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (s) {
    if ((u?.(s), r === !1 || !s.defaultPrevented)) return l?.(s);
  };
}
var jo = globalThis?.document ? D.useLayoutEffect : () => {},
  RT = Ih[" useInsertionEffect ".trim().toString()] || jo;
function zm({ prop: u, defaultProp: l, onChange: r = () => {}, caller: a }) {
  const [s, c, d] = OT({ defaultProp: l, onChange: r }),
    h = u !== void 0,
    m = h ? u : s;
  {
    const y = D.useRef(u !== void 0);
    D.useEffect(() => {
      const _ = y.current;
      (_ !== h &&
        console.warn(
          `${a} is changing from ${_ ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (y.current = h));
    }, [h, a]);
  }
  const p = D.useCallback(
    (y) => {
      if (h) {
        const _ = DT(y) ? y(u) : y;
        _ !== u && d.current?.(_);
      } else c(y);
    },
    [h, u, c, d],
  );
  return [m, p];
}
function OT({ defaultProp: u, onChange: l }) {
  const [r, a] = D.useState(u),
    s = D.useRef(r),
    c = D.useRef(l);
  return (
    RT(() => {
      c.current = l;
    }, [l]),
    D.useEffect(() => {
      s.current !== r && (c.current?.(r), (s.current = r));
    }, [r, s]),
    [r, a, c]
  );
}
function DT(u) {
  return typeof u == "function";
}
by();
function kT(u) {
  const l = jT(u),
    r = D.forwardRef((a, s) => {
      const { children: c, ...d } = a,
        h = D.Children.toArray(c),
        m = h.find(HT);
      if (m) {
        const p = m.props.children,
          y = h.map((_) =>
            _ === m
              ? D.Children.count(p) > 1
                ? D.Children.only(null)
                : D.isValidElement(p)
                  ? p.props.children
                  : null
              : _,
          );
        return b.jsx(l, {
          ...d,
          ref: s,
          children: D.isValidElement(p) ? D.cloneElement(p, void 0, y) : null,
        });
      }
      return b.jsx(l, { ...d, ref: s, children: c });
    });
  return ((r.displayName = `${u}.Slot`), r);
}
function jT(u) {
  const l = D.forwardRef((r, a) => {
    const { children: s, ...c } = r;
    if (D.isValidElement(s)) {
      const d = qT(s),
        h = BT(c, s.props);
      return (
        s.type !== D.Fragment && (h.ref = a ? Gu(a, d) : d),
        D.cloneElement(s, h)
      );
    }
    return D.Children.count(s) > 1 ? D.Children.only(null) : null;
  });
  return ((l.displayName = `${u}.SlotClone`), l);
}
var UT = Symbol("radix.slottable");
function HT(u) {
  return (
    D.isValidElement(u) &&
    typeof u.type == "function" &&
    "__radixId" in u.type &&
    u.type.__radixId === UT
  );
}
function BT(u, l) {
  const r = { ...l };
  for (const a in l) {
    const s = u[a],
      c = l[a];
    /^on[A-Z]/.test(a)
      ? s && c
        ? (r[a] = (...h) => {
            const m = c(...h);
            return (s(...h), m);
          })
        : s && (r[a] = s)
      : a === "style"
        ? (r[a] = { ...s, ...c })
        : a === "className" && (r[a] = [s, c].filter(Boolean).join(" "));
  }
  return { ...u, ...r };
}
function qT(u) {
  let l = Object.getOwnPropertyDescriptor(u.props, "ref")?.get,
    r = l && "isReactWarning" in l && l.isReactWarning;
  return r
    ? u.ref
    : ((l = Object.getOwnPropertyDescriptor(u, "ref")?.get),
      (r = l && "isReactWarning" in l && l.isReactWarning),
      r ? u.props.ref : u.props.ref || u.ref);
}
var LT = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Bo = LT.reduce((u, l) => {
    const r = kT(`Primitive.${l}`),
      a = D.forwardRef((s, c) => {
        const { asChild: d, ...h } = s,
          m = d ? r : l;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          b.jsx(m, { ...h, ref: c })
        );
      });
    return ((a.displayName = `Primitive.${l}`), { ...u, [l]: a });
  }, {});
function YT(u, l) {
  return D.useReducer((r, a) => l[r][a] ?? r, u);
}
var s_ = (u) => {
  const { present: l, children: r } = u,
    a = GT(l),
    s =
      typeof r == "function" ? r({ present: a.isPresent }) : D.Children.only(r),
    c = ko(a.ref, XT(s));
  return typeof r == "function" || a.isPresent
    ? D.cloneElement(s, { ref: c })
    : null;
};
s_.displayName = "Presence";
function GT(u) {
  const [l, r] = D.useState(),
    a = D.useRef(null),
    s = D.useRef(u),
    c = D.useRef("none"),
    d = u ? "mounted" : "unmounted",
    [h, m] = YT(d, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    D.useEffect(() => {
      const p = du(a.current);
      c.current = h === "mounted" ? p : "none";
    }, [h]),
    jo(() => {
      const p = a.current,
        y = s.current;
      if (y !== u) {
        const T = c.current,
          x = du(p);
        (u
          ? m("MOUNT")
          : x === "none" || p?.display === "none"
            ? m("UNMOUNT")
            : m(y && T !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = u));
      }
    }, [u, m]),
    jo(() => {
      if (l) {
        let p;
        const y = l.ownerDocument.defaultView ?? window,
          _ = (x) => {
            const S = du(a.current).includes(CSS.escape(x.animationName));
            if (x.target === l && S && (m("ANIMATION_END"), !s.current)) {
              const E = l.style.animationFillMode;
              ((l.style.animationFillMode = "forwards"),
                (p = y.setTimeout(() => {
                  l.style.animationFillMode === "forwards" &&
                    (l.style.animationFillMode = E);
                })));
            }
          },
          T = (x) => {
            x.target === l && (c.current = du(a.current));
          };
        return (
          l.addEventListener("animationstart", T),
          l.addEventListener("animationcancel", _),
          l.addEventListener("animationend", _),
          () => {
            (y.clearTimeout(p),
              l.removeEventListener("animationstart", T),
              l.removeEventListener("animationcancel", _),
              l.removeEventListener("animationend", _));
          }
        );
      } else m("ANIMATION_END");
    }, [l, m]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: D.useCallback((p) => {
        ((a.current = p ? getComputedStyle(p) : null), r(p));
      }, []),
    }
  );
}
function du(u) {
  return u?.animationName || "none";
}
function XT(u) {
  let l = Object.getOwnPropertyDescriptor(u.props, "ref")?.get,
    r = l && "isReactWarning" in l && l.isReactWarning;
  return r
    ? u.ref
    : ((l = Object.getOwnPropertyDescriptor(u, "ref")?.get),
      (r = l && "isReactWarning" in l && l.isReactWarning),
      r ? u.props.ref : u.props.ref || u.ref);
}
var VT = Ih[" useId ".trim().toString()] || (() => {}),
  QT = 0;
function o_(u) {
  const [l, r] = D.useState(VT());
  return (
    jo(() => {
      r((a) => a ?? String(QT++));
    }, [u]),
    l ? `radix-${l}` : ""
  );
}
var Xu = "Collapsible",
  [ZT, c_] = Em(Xu),
  [KT, Mm] = ZT(Xu),
  u_ = D.forwardRef((u, l) => {
    const {
        __scopeCollapsible: r,
        open: a,
        defaultOpen: s,
        disabled: c,
        onOpenChange: d,
        ...h
      } = u,
      [m, p] = zm({ prop: a, defaultProp: s ?? !1, onChange: d, caller: Xu });
    return b.jsx(KT, {
      scope: r,
      disabled: c,
      contentId: o_(),
      open: m,
      onOpenToggle: D.useCallback(() => p((y) => !y), [p]),
      children: b.jsx(Bo.div, {
        "data-state": Rm(m),
        "data-disabled": c ? "" : void 0,
        ...h,
        ref: l,
      }),
    });
  });
u_.displayName = Xu;
var f_ = "CollapsibleTrigger",
  d_ = D.forwardRef((u, l) => {
    const { __scopeCollapsible: r, ...a } = u,
      s = Mm(f_, r);
    return b.jsx(Bo.button, {
      type: "button",
      "aria-controls": s.contentId,
      "aria-expanded": s.open || !1,
      "data-state": Rm(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      disabled: s.disabled,
      ...a,
      ref: l,
      onClick: r_(u.onClick, s.onOpenToggle),
    });
  });
d_.displayName = f_;
var Nm = "CollapsibleContent",
  h_ = D.forwardRef((u, l) => {
    const { forceMount: r, ...a } = u,
      s = Mm(Nm, u.__scopeCollapsible);
    return b.jsx(s_, {
      present: r || s.open,
      children: ({ present: c }) => b.jsx(FT, { ...a, ref: l, present: c }),
    });
  });
h_.displayName = Nm;
var FT = D.forwardRef((u, l) => {
  const { __scopeCollapsible: r, present: a, children: s, ...c } = u,
    d = Mm(Nm, r),
    [h, m] = D.useState(a),
    p = D.useRef(null),
    y = ko(l, p),
    _ = D.useRef(0),
    T = _.current,
    x = D.useRef(0),
    w = x.current,
    S = d.open || h,
    E = D.useRef(S),
    k = D.useRef(void 0);
  return (
    D.useEffect(() => {
      const j = requestAnimationFrame(() => (E.current = !1));
      return () => cancelAnimationFrame(j);
    }, []),
    jo(() => {
      const j = p.current;
      if (j) {
        ((k.current = k.current || {
          transitionDuration: j.style.transitionDuration,
          animationName: j.style.animationName,
        }),
          (j.style.transitionDuration = "0s"),
          (j.style.animationName = "none"));
        const G = j.getBoundingClientRect();
        ((_.current = G.height),
          (x.current = G.width),
          E.current ||
            ((j.style.transitionDuration = k.current.transitionDuration),
            (j.style.animationName = k.current.animationName)),
          m(a));
      }
    }, [d.open, a]),
    b.jsx(Bo.div, {
      "data-state": Rm(d.open),
      "data-disabled": d.disabled ? "" : void 0,
      id: d.contentId,
      hidden: !S,
      ...c,
      ref: y,
      style: {
        "--radix-collapsible-content-height": T ? `${T}px` : void 0,
        "--radix-collapsible-content-width": w ? `${w}px` : void 0,
        ...u.style,
      },
      children: S && s,
    })
  );
});
function Rm(u) {
  return u ? "open" : "closed";
}
var JT = u_,
  PT = d_,
  WT = h_,
  $T = D.createContext(void 0);
function IT(u) {
  const l = D.useContext($T);
  return u || l || "ltr";
}
var Ql = "Accordion",
  eA = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [Om, tA, nA] = NT(Ql),
  [Vu] = Em(Ql, [nA, c_]),
  Dm = c_(),
  m_ = Bt.forwardRef((u, l) => {
    const { type: r, ...a } = u,
      s = a,
      c = a;
    return b.jsx(Om.Provider, {
      scope: u.__scopeAccordion,
      children:
        r === "multiple"
          ? b.jsx(rA, { ...c, ref: l })
          : b.jsx(iA, { ...s, ref: l }),
    });
  });
m_.displayName = Ql;
var [p_, lA] = Vu(Ql),
  [g_, aA] = Vu(Ql, { collapsible: !1 }),
  iA = Bt.forwardRef((u, l) => {
    const {
        value: r,
        defaultValue: a,
        onValueChange: s = () => {},
        collapsible: c = !1,
        ...d
      } = u,
      [h, m] = zm({ prop: r, defaultProp: a ?? "", onChange: s, caller: Ql });
    return b.jsx(p_, {
      scope: u.__scopeAccordion,
      value: Bt.useMemo(() => (h ? [h] : []), [h]),
      onItemOpen: m,
      onItemClose: Bt.useCallback(() => c && m(""), [c, m]),
      children: b.jsx(g_, {
        scope: u.__scopeAccordion,
        collapsible: c,
        children: b.jsx(y_, { ...d, ref: l }),
      }),
    });
  }),
  rA = Bt.forwardRef((u, l) => {
    const { value: r, defaultValue: a, onValueChange: s = () => {}, ...c } = u,
      [d, h] = zm({ prop: r, defaultProp: a ?? [], onChange: s, caller: Ql }),
      m = Bt.useCallback((y) => h((_ = []) => [..._, y]), [h]),
      p = Bt.useCallback((y) => h((_ = []) => _.filter((T) => T !== y)), [h]);
    return b.jsx(p_, {
      scope: u.__scopeAccordion,
      value: d,
      onItemOpen: m,
      onItemClose: p,
      children: b.jsx(g_, {
        scope: u.__scopeAccordion,
        collapsible: !0,
        children: b.jsx(y_, { ...c, ref: l }),
      }),
    });
  }),
  [sA, Qu] = Vu(Ql),
  y_ = Bt.forwardRef((u, l) => {
    const {
        __scopeAccordion: r,
        disabled: a,
        dir: s,
        orientation: c = "vertical",
        ...d
      } = u,
      h = Bt.useRef(null),
      m = ko(h, l),
      p = tA(r),
      _ = IT(s) === "ltr",
      T = r_(u.onKeyDown, (x) => {
        if (!eA.includes(x.key)) return;
        const w = x.target,
          S = p().filter((q) => !q.ref.current?.disabled),
          E = S.findIndex((q) => q.ref.current === w),
          k = S.length;
        if (E === -1) return;
        x.preventDefault();
        let j = E;
        const G = 0,
          U = k - 1,
          Y = () => {
            ((j = E + 1), j > U && (j = G));
          },
          V = () => {
            ((j = E - 1), j < G && (j = U));
          };
        switch (x.key) {
          case "Home":
            j = G;
            break;
          case "End":
            j = U;
            break;
          case "ArrowRight":
            c === "horizontal" && (_ ? Y() : V());
            break;
          case "ArrowDown":
            c === "vertical" && Y();
            break;
          case "ArrowLeft":
            c === "horizontal" && (_ ? V() : Y());
            break;
          case "ArrowUp":
            c === "vertical" && V();
            break;
        }
        const R = j % k;
        S[R].ref.current?.focus();
      });
    return b.jsx(sA, {
      scope: r,
      disabled: a,
      direction: s,
      orientation: c,
      children: b.jsx(Om.Slot, {
        scope: r,
        children: b.jsx(Bo.div, {
          ...d,
          "data-orientation": c,
          ref: m,
          onKeyDown: a ? void 0 : T,
        }),
      }),
    });
  }),
  ju = "AccordionItem",
  [oA, km] = Vu(ju),
  v_ = Bt.forwardRef((u, l) => {
    const { __scopeAccordion: r, value: a, ...s } = u,
      c = Qu(ju, r),
      d = lA(ju, r),
      h = Dm(r),
      m = o_(),
      p = (a && d.value.includes(a)) || !1,
      y = c.disabled || u.disabled;
    return b.jsx(oA, {
      scope: r,
      open: p,
      disabled: y,
      triggerId: m,
      children: b.jsx(JT, {
        "data-orientation": c.orientation,
        "data-state": A_(p),
        ...h,
        ...s,
        ref: l,
        disabled: y,
        open: p,
        onOpenChange: (_) => {
          _ ? d.onItemOpen(a) : d.onItemClose(a);
        },
      }),
    });
  });
v_.displayName = ju;
var __ = "AccordionHeader",
  x_ = Bt.forwardRef((u, l) => {
    const { __scopeAccordion: r, ...a } = u,
      s = Qu(Ql, r),
      c = km(__, r);
    return b.jsx(Bo.h3, {
      "data-orientation": s.orientation,
      "data-state": A_(c.open),
      "data-disabled": c.disabled ? "" : void 0,
      ...a,
      ref: l,
    });
  });
x_.displayName = __;
var Wh = "AccordionTrigger",
  b_ = Bt.forwardRef((u, l) => {
    const { __scopeAccordion: r, ...a } = u,
      s = Qu(Ql, r),
      c = km(Wh, r),
      d = aA(Wh, r),
      h = Dm(r);
    return b.jsx(Om.ItemSlot, {
      scope: r,
      children: b.jsx(PT, {
        "aria-disabled": (c.open && !d.collapsible) || void 0,
        "data-orientation": s.orientation,
        id: c.triggerId,
        ...h,
        ...a,
        ref: l,
      }),
    });
  });
b_.displayName = Wh;
var S_ = "AccordionContent",
  T_ = Bt.forwardRef((u, l) => {
    const { __scopeAccordion: r, ...a } = u,
      s = Qu(Ql, r),
      c = km(S_, r),
      d = Dm(r);
    return b.jsx(WT, {
      role: "region",
      "aria-labelledby": c.triggerId,
      "data-orientation": s.orientation,
      ...d,
      ...a,
      ref: l,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...u.style,
      },
    });
  });
T_.displayName = S_;
function A_(u) {
  return u ? "open" : "closed";
}
var cA = m_,
  uA = v_,
  fA = x_,
  dA = b_,
  hA = T_;
function mA({ ...u }) {
  return b.jsx(cA, {
    "code-path": "src/components/ui/accordion.tsx:10:10",
    "data-slot": "accordion",
    ...u,
  });
}
function pA({ className: u, ...l }) {
  return b.jsx(uA, {
    "code-path": "src/components/ui/accordion.tsx:18:5",
    "data-slot": "accordion-item",
    className: Si("border-b last:border-b-0", u),
    ...l,
  });
}
function gA({ className: u, children: l, ...r }) {
  return b.jsx(fA, {
    "code-path": "src/components/ui/accordion.tsx:32:5",
    className: "flex",
    children: b.jsxs(dA, {
      "code-path": "src/components/ui/accordion.tsx:33:7",
      "data-slot": "accordion-trigger",
      className: Si(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        u,
      ),
      ...r,
      children: [
        l,
        b.jsx(BS, {
          "code-path": "src/components/ui/accordion.tsx:42:9",
          className:
            "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
        }),
      ],
    }),
  });
}
function yA({ className: u, children: l, ...r }) {
  return b.jsx(hA, {
    "code-path": "src/components/ui/accordion.tsx:54:5",
    "data-slot": "accordion-content",
    className:
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
    ...r,
    children: b.jsx("div", {
      "code-path": "src/components/ui/accordion.tsx:59:7",
      className: Si("pt-0 pb-4", u),
      children: l,
    }),
  });
}
Ae.registerPlugin(be);
const vA = () => {
  const u = D.useRef(null),
    l = D.useRef(null),
    r = D.useRef(null);
  D.useEffect(() => {
    const s = u.current;
    if (!s) return;
    const c = Ae.context(() => {
      (Ae.fromTo(
        l.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: l.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      ),
        Ae.fromTo(
          r.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: r.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        ));
    }, s);
    return () => c.revert();
  }, []);
  const a = [
    {
      question: "Comment fonctionne la commission ?",
      answer:
        "Nous prélevons un petit pourcentage sur chaque location enregistrée dans Lokoto. Pas de location = pas de frais. C'est simple, transparent et aligné avec votre succès.",
    },
    {
      question: "Comment est installé le boîtier GPS ?",
      answer:
        "Notre technicien se déplace pour installer le boîtier sur chacun de vos véhicules. L'installation prend moins de 30 minutes par véhicule et est entièrement gratuite pour les 50 premiers inscrits.",
    },
    {
      question: "Lokoto fonctionne-t-il sur téléphone ?",
      answer:
        "Oui ! Lokoto est 100% accessible depuis votre smartphone. Pas besoin d'ordinateur. L'interface est pensée mobile-first pour vous permettre de gérer votre flotte où que vous soyez.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Oui, vos données sont hébergées sur des serveurs sécurisés et ne sont jamais partagées avec des tiers. Nous utilisons un chiffrement de niveau bancaire pour protéger toutes vos informations.",
    },
    {
      question: "Puis-je essayer avant de m'engager ?",
      answer:
        "Bien sûr. Les 30 premiers jours sont gratuits, sans engagement. Vous pouvez tester toutes les fonctionnalités et décider ensuite si Lokoto correspond à vos besoins.",
    },
  ];
  return b.jsx("section", {
    "code-path": "src/sections/FAQ.tsx:83:5",
    ref: u,
    className: "relative bg-[#F6F7F6] py-20 lg:py-32 z-[100]",
    children: b.jsxs("div", {
      "code-path": "src/sections/FAQ.tsx:87:7",
      className: "px-6 lg:px-[7vw]",
      children: [
        b.jsx("div", {
          "code-path": "src/sections/FAQ.tsx:88:9",
          ref: l,
          className: "text-center mb-12 lg:mb-16",
          children: b.jsxs("h2", {
            "code-path": "src/sections/FAQ.tsx:89:11",
            className:
              "text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray",
            children: [
              "Vos questions,",
              b.jsx("br", { "code-path": "src/sections/FAQ.tsx:90:27" }),
              b.jsx("span", {
                "code-path": "src/sections/FAQ.tsx:91:13",
                className: "text-lokoto-green",
                children: "nos réponses",
              }),
            ],
          }),
        }),
        b.jsx("div", {
          "code-path": "src/sections/FAQ.tsx:95:9",
          ref: r,
          className: "max-w-3xl mx-auto",
          children: b.jsx(mA, {
            "code-path": "src/sections/FAQ.tsx:96:11",
            type: "single",
            collapsible: !0,
            className: "space-y-4",
            children: a.map((s, c) =>
              b.jsxs(
                pA,
                {
                  "code-path": "src/sections/FAQ.tsx:98:15",
                  value: `item-${c}`,
                  className:
                    "bg-white rounded-2xl px-6 lg:px-8 border border-black/[0.06] shadow-sm data-[state=open]:shadow-card transition-shadow",
                  children: [
                    b.jsx(gA, {
                      "code-path": "src/sections/FAQ.tsx:103:17",
                      className:
                        "text-left text-lg font-semibold text-lokoto-gray py-5 hover:no-underline data-[state=open]:text-lokoto-green transition-colors",
                      children: s.question,
                    }),
                    b.jsx(yA, {
                      "code-path": "src/sections/FAQ.tsx:106:17",
                      className: "text-lokoto-gray-medium leading-relaxed pb-5",
                      children: s.answer,
                    }),
                  ],
                },
                c,
              ),
            ),
          }),
        }),
      ],
    }),
  });
};
function Ch({ className: u, type: l, ...r }) {
  return b.jsx("input", {
    "code-path": "src/components/ui/input.tsx:7:5",
    type: l,
    "data-slot": "input",
    className: Si(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      u,
    ),
    ...r,
  });
}
function _A({ className: u, ...l }) {
  return b.jsx("textarea", {
    "code-path": "src/components/ui/textarea.tsx:7:5",
    "data-slot": "textarea",
    className: Si(
      "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      u,
    ),
    ...l,
  });
}
var xA = Symbol.for("react.lazy"),
  Uu = Ih[" use ".trim().toString()];
function bA(u) {
  return typeof u == "object" && u !== null && "then" in u;
}
function C_(u) {
  return (
    u != null &&
    typeof u == "object" &&
    "$$typeof" in u &&
    u.$$typeof === xA &&
    "_payload" in u &&
    bA(u._payload)
  );
}
function SA(u) {
  const l = TA(u),
    r = D.forwardRef((a, s) => {
      let { children: c, ...d } = a;
      C_(c) && typeof Uu == "function" && (c = Uu(c._payload));
      const h = D.Children.toArray(c),
        m = h.find(CA);
      if (m) {
        const p = m.props.children,
          y = h.map((_) =>
            _ === m
              ? D.Children.count(p) > 1
                ? D.Children.only(null)
                : D.isValidElement(p)
                  ? p.props.children
                  : null
              : _,
          );
        return b.jsx(l, {
          ...d,
          ref: s,
          children: D.isValidElement(p) ? D.cloneElement(p, void 0, y) : null,
        });
      }
      return b.jsx(l, { ...d, ref: s, children: c });
    });
  return ((r.displayName = `${u}.Slot`), r);
}
function TA(u) {
  const l = D.forwardRef((r, a) => {
    let { children: s, ...c } = r;
    if (
      (C_(s) && typeof Uu == "function" && (s = Uu(s._payload)),
      D.isValidElement(s))
    ) {
      const d = EA(s),
        h = wA(c, s.props);
      return (
        s.type !== D.Fragment && (h.ref = a ? Gu(a, d) : d),
        D.cloneElement(s, h)
      );
    }
    return D.Children.count(s) > 1 ? D.Children.only(null) : null;
  });
  return ((l.displayName = `${u}.SlotClone`), l);
}
var AA = Symbol("radix.slottable");
function CA(u) {
  return (
    D.isValidElement(u) &&
    typeof u.type == "function" &&
    "__radixId" in u.type &&
    u.type.__radixId === AA
  );
}
function wA(u, l) {
  const r = { ...l };
  for (const a in l) {
    const s = u[a],
      c = l[a];
    /^on[A-Z]/.test(a)
      ? s && c
        ? (r[a] = (...h) => {
            const m = c(...h);
            return (s(...h), m);
          })
        : s && (r[a] = s)
      : a === "style"
        ? (r[a] = { ...s, ...c })
        : a === "className" && (r[a] = [s, c].filter(Boolean).join(" "));
  }
  return { ...u, ...r };
}
function EA(u) {
  let l = Object.getOwnPropertyDescriptor(u.props, "ref")?.get,
    r = l && "isReactWarning" in l && l.isReactWarning;
  return r
    ? u.ref
    : ((l = Object.getOwnPropertyDescriptor(u, "ref")?.get),
      (r = l && "isReactWarning" in l && l.isReactWarning),
      r ? u.props.ref : u.props.ref || u.ref);
}
var zA = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  MA = zA.reduce((u, l) => {
    const r = SA(`Primitive.${l}`),
      a = D.forwardRef((s, c) => {
        const { asChild: d, ...h } = s,
          m = d ? r : l;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          b.jsx(m, { ...h, ref: c })
        );
      });
    return ((a.displayName = `Primitive.${l}`), { ...u, [l]: a });
  }, {}),
  NA = "Label",
  w_ = D.forwardRef((u, l) =>
    b.jsx(MA.label, {
      ...u,
      ref: l,
      onMouseDown: (r) => {
        r.target.closest("button, input, select, textarea") ||
          (u.onMouseDown?.(r),
          !r.defaultPrevented && r.detail > 1 && r.preventDefault());
      },
    }),
  );
w_.displayName = NA;
var RA = w_;
function hu({ className: u, ...l }) {
  return b.jsx(RA, {
    "code-path": "src/components/ui/label.tsx:13:5",
    "data-slot": "label",
    className: Si(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      u,
    ),
    ...l,
  });
}
Ae.registerPlugin(be);
const OA = () => {
  const u = D.useRef(null),
    l = D.useRef(null),
    r = D.useRef(null),
    a = D.useRef(null),
    [s, c] = D.useState({ name: "", email: "", phone: "", message: "" });
  D.useEffect(() => {
    const m = u.current;
    if (!m) return;
    const p = Ae.context(() => {
      (Ae.fromTo(
        l.current,
        { y: 80, scale: 0.98, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: l.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      ),
        Ae.fromTo(
          r.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: r.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        ),
        Ae.fromTo(
          a.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: a.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        ));
    }, m);
    return () => p.revert();
  }, []);
  const d = (m) => {
      (m.preventDefault(),
        alert("Merci pour votre message ! Nous vous contacterons bientôt."),
        c({ name: "", email: "", phone: "", message: "" }));
    },
    h = (m) => {
      const p = document.getElementById(m);
      p && p.scrollIntoView({ behavior: "smooth" });
    };
  return b.jsx("section", {
    "code-path": "src/sections/Contact.tsx:96:5",
    ref: u,
    id: "contact",
    className: "relative bg-[#E9EBE9] py-20 lg:py-32 z-[110]",
    children: b.jsxs("div", {
      "code-path": "src/sections/Contact.tsx:101:7",
      className: "px-6 lg:px-[7vw]",
      children: [
        b.jsxs("div", {
          "code-path": "src/sections/Contact.tsx:103:9",
          ref: l,
          className:
            "bg-lokoto-green rounded-[40px] p-8 lg:p-16 mb-16 text-center",
          children: [
            b.jsxs("h2", {
              "code-path": "src/sections/Contact.tsx:107:11",
              className:
                "text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-[#111311] mb-4",
              children: [
                "Prêt à moderniser votre",
                b.jsx("br", {
                  "code-path": "src/sections/Contact.tsx:108:36",
                  className: "hidden sm:block",
                }),
                "activité de location ?",
              ],
            }),
            b.jsx("p", {
              "code-path": "src/sections/Contact.tsx:110:11",
              className: "text-lg text-[#111311]/80 mb-8 max-w-xl mx-auto",
              children:
                "Rejoignez les loueurs sénégalais qui ont déjà fait le pas.",
            }),
            b.jsxs("button", {
              "code-path": "src/sections/Contact.tsx:113:11",
              onClick: () => {
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              },
              className:
                "bg-white text-lokoto-green font-semibold px-8 py-4 rounded-full hover:bg-lokoto-gray-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 mx-auto",
              children: [
                "Créer mon compte gratuitement",
                b.jsx(Yu, {
                  "code-path": "src/sections/Contact.tsx:121:13",
                  size: 20,
                }),
              ],
            }),
            b.jsx("p", {
              "code-path": "src/sections/Contact.tsx:123:11",
              className: "text-sm text-[#111311]/70 mt-4",
              children: "Gratuit 30 jours · Sans engagement · Support WhatsApp",
            }),
          ],
        }),
        b.jsxs("div", {
          "code-path": "src/sections/Contact.tsx:129:9",
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16",
          children: [
            b.jsxs("div", {
              "code-path": "src/sections/Contact.tsx:131:11",
              ref: r,
              id: "contact-form",
              className: "bg-white rounded-[28px] p-6 lg:p-8 shadow-card",
              children: [
                b.jsx("h3", {
                  "code-path": "src/sections/Contact.tsx:136:13",
                  className: "text-2xl font-bold text-lokoto-gray mb-6",
                  children: "Envoyez-nous un message",
                }),
                b.jsxs("form", {
                  "code-path": "src/sections/Contact.tsx:139:13",
                  onSubmit: d,
                  className: "space-y-5",
                  children: [
                    b.jsxs("div", {
                      "code-path": "src/sections/Contact.tsx:140:15",
                      children: [
                        b.jsx(hu, {
                          "code-path": "src/sections/Contact.tsx:141:17",
                          htmlFor: "name",
                          className: "text-lokoto-gray mb-2 block",
                          children: "Nom",
                        }),
                        b.jsx(Ch, {
                          "code-path": "src/sections/Contact.tsx:144:17",
                          id: "name",
                          value: s.name,
                          onChange: (m) => c({ ...s, name: m.target.value }),
                          placeholder: "Votre nom",
                          className:
                            "rounded-xl border-black/10 focus:border-lokoto-green focus:ring-lokoto-green",
                          required: !0,
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      "code-path": "src/sections/Contact.tsx:153:15",
                      children: [
                        b.jsx(hu, {
                          "code-path": "src/sections/Contact.tsx:154:17",
                          htmlFor: "email",
                          className: "text-lokoto-gray mb-2 block",
                          children: "Email",
                        }),
                        b.jsx(Ch, {
                          "code-path": "src/sections/Contact.tsx:157:17",
                          id: "email",
                          type: "email",
                          value: s.email,
                          onChange: (m) => c({ ...s, email: m.target.value }),
                          placeholder: "votre@email.com",
                          className:
                            "rounded-xl border-black/10 focus:border-lokoto-green focus:ring-lokoto-green",
                          required: !0,
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      "code-path": "src/sections/Contact.tsx:167:15",
                      children: [
                        b.jsx(hu, {
                          "code-path": "src/sections/Contact.tsx:168:17",
                          htmlFor: "phone",
                          className: "text-lokoto-gray mb-2 block",
                          children: "Téléphone",
                        }),
                        b.jsx(Ch, {
                          "code-path": "src/sections/Contact.tsx:171:17",
                          id: "phone",
                          type: "tel",
                          value: s.phone,
                          onChange: (m) => c({ ...s, phone: m.target.value }),
                          placeholder: "+221 XX XXX XX XX",
                          className:
                            "rounded-xl border-black/10 focus:border-lokoto-green focus:ring-lokoto-green",
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      "code-path": "src/sections/Contact.tsx:180:15",
                      children: [
                        b.jsx(hu, {
                          "code-path": "src/sections/Contact.tsx:181:17",
                          htmlFor: "message",
                          className: "text-lokoto-gray mb-2 block",
                          children: "Message",
                        }),
                        b.jsx(_A, {
                          "code-path": "src/sections/Contact.tsx:184:17",
                          id: "message",
                          value: s.message,
                          onChange: (m) => c({ ...s, message: m.target.value }),
                          placeholder: "Comment pouvons-nous vous aider ?",
                          className:
                            "rounded-xl border-black/10 focus:border-lokoto-green focus:ring-lokoto-green min-h-[120px]",
                          required: !0,
                        }),
                      ],
                    }),
                    b.jsx("button", {
                      "code-path": "src/sections/Contact.tsx:193:15",
                      type: "submit",
                      className:
                        "w-full bg-lokoto-green text-white font-semibold px-6 py-3 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                      children: "Envoyer le message",
                    }),
                  ],
                }),
              ],
            }),
            b.jsxs("div", {
              "code-path": "src/sections/Contact.tsx:203:11",
              className: "flex flex-col justify-center",
              children: [
                b.jsx("h3", {
                  "code-path": "src/sections/Contact.tsx:204:13",
                  className: "text-2xl font-bold text-lokoto-gray mb-6",
                  children: "Contactez-nous directement",
                }),
                b.jsxs("div", {
                  "code-path": "src/sections/Contact.tsx:207:13",
                  className: "space-y-6",
                  children: [
                    b.jsxs("div", {
                      "code-path": "src/sections/Contact.tsx:208:15",
                      className: "flex items-center gap-4",
                      children: [
                        b.jsx("div", {
                          "code-path": "src/sections/Contact.tsx:209:17",
                          className:
                            "w-12 h-12 rounded-2xl bg-lokoto-green/10 flex items-center justify-center flex-shrink-0",
                          children: b.jsx(t3, {
                            "code-path": "src/sections/Contact.tsx:210:19",
                            size: 24,
                            className: "text-lokoto-green",
                          }),
                        }),
                        b.jsxs("div", {
                          "code-path": "src/sections/Contact.tsx:212:17",
                          children: [
                            b.jsx("div", {
                              "code-path": "src/sections/Contact.tsx:213:19",
                              className: "text-sm text-lokoto-gray-medium",
                              children: "Email",
                            }),
                            b.jsx("a", {
                              "code-path": "src/sections/Contact.tsx:214:19",
                              href: "mailto:moussamarega8@gmail.com",
                              className:
                                "text-lg font-semibold text-lokoto-gray hover:text-lokoto-green transition-colors",
                              children: "moussamarega8@gmail.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      "code-path": "src/sections/Contact.tsx:222:15",
                      className: "flex items-center gap-4",
                      children: [
                        b.jsx("div", {
                          "code-path": "src/sections/Contact.tsx:223:17",
                          className:
                            "w-12 h-12 rounded-2xl bg-lokoto-green/10 flex items-center justify-center flex-shrink-0",
                          children: b.jsx(c3, {
                            "code-path": "src/sections/Contact.tsx:224:19",
                            size: 24,
                            className: "text-lokoto-green",
                          }),
                        }),
                        b.jsxs("div", {
                          "code-path": "src/sections/Contact.tsx:226:17",
                          children: [
                            b.jsx("div", {
                              "code-path": "src/sections/Contact.tsx:227:19",
                              className: "text-sm text-lokoto-gray-medium",
                              children: "Téléphone",
                            }),
                            b.jsx("a", {
                              "code-path": "src/sections/Contact.tsx:228:19",
                              href: "tel:+221771234567",
                              className:
                                "text-lg font-semibold text-lokoto-gray hover:text-lokoto-green transition-colors",
                              children: "+33 7 54 05 04 29",
                            }),
                          ],
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      "code-path": "src/sections/Contact.tsx:236:15",
                      className: "flex items-center gap-4",
                      children: [
                        b.jsx("div", {
                          "code-path": "src/sections/Contact.tsx:237:17",
                          className:
                            "w-12 h-12 rounded-2xl bg-lokoto-green/10 flex items-center justify-center flex-shrink-0",
                          children: b.jsx(s3, {
                            "code-path": "src/sections/Contact.tsx:238:19",
                            size: 24,
                            className: "text-lokoto-green",
                          }),
                        }),
                        b.jsxs("div", {
                          "code-path": "src/sections/Contact.tsx:240:17",
                          children: [
                            b.jsx("div", {
                              "code-path": "src/sections/Contact.tsx:241:19",
                              className: "text-sm text-lokoto-gray-medium",
                              children: "WhatsApp",
                            }),
                            b.jsx("a", {
                              "code-path": "src/sections/Contact.tsx:242:19",
                              href: "https://wa.me/221771234567",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-lg font-semibold text-lokoto-gray hover:text-lokoto-green transition-colors",
                              children: "+33 7 54 05 04 29",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                b.jsxs("div", {
                  "code-path": "src/sections/Contact.tsx:255:13",
                  className: "mt-10",
                  children: [
                    b.jsx("div", {
                      "code-path": "src/sections/Contact.tsx:256:15",
                      className: "text-sm text-lokoto-gray-medium mb-4",
                      children: "Suivez-nous",
                    }),
                    b.jsxs("div", {
                      "code-path": "src/sections/Contact.tsx:257:15",
                      className: "flex gap-4",
                      children: [
                        b.jsx("a", {
                          "code-path": "src/sections/Contact.tsx:258:17",
                          href: "#",
                          className:
                            "w-10 h-10 rounded-full bg-white flex items-center justify-center text-lokoto-gray hover:bg-lokoto-green hover:text-white transition-all duration-300 shadow-sm",
                          children: b.jsx(WS, {
                            "code-path": "src/sections/Contact.tsx:262:19",
                            size: 20,
                          }),
                        }),
                        b.jsx("a", {
                          "code-path": "src/sections/Contact.tsx:264:17",
                          href: "#",
                          className:
                            "w-10 h-10 rounded-full bg-white flex items-center justify-center text-lokoto-gray hover:bg-lokoto-green hover:text-white transition-all duration-300 shadow-sm",
                          children: b.jsx(IS, {
                            "code-path": "src/sections/Contact.tsx:268:19",
                            size: 20,
                          }),
                        }),
                        b.jsx("a", {
                          "code-path": "src/sections/Contact.tsx:270:17",
                          href: "#",
                          className:
                            "w-10 h-10 rounded-full bg-white flex items-center justify-center text-lokoto-gray hover:bg-lokoto-green hover:text-white transition-all duration-300 shadow-sm",
                          children: b.jsx(QS, {
                            "code-path": "src/sections/Contact.tsx:274:19",
                            size: 20,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        b.jsx("div", {
          "code-path": "src/sections/Contact.tsx:282:9",
          ref: a,
          className: "border-t border-black/10 pt-8",
          children: b.jsxs("div", {
            "code-path": "src/sections/Contact.tsx:286:11",
            className:
              "flex flex-col lg:flex-row items-center justify-between gap-6",
            children: [
              b.jsx("div", {
                "code-path": "src/sections/Contact.tsx:287:13",
                className: "text-2xl font-bold text-lokoto-gray",
                children: "Lokoto",
              }),
              b.jsxs("div", {
                "code-path": "src/sections/Contact.tsx:291:13",
                className: "flex flex-wrap justify-center gap-6",
                children: [
                  b.jsx("button", {
                    "code-path": "src/sections/Contact.tsx:292:15",
                    onClick: () => h("features"),
                    className:
                      "text-sm text-lokoto-gray-medium hover:text-lokoto-green transition-colors",
                    children: "Fonctionnalités",
                  }),
                  b.jsx("button", {
                    "code-path": "src/sections/Contact.tsx:298:15",
                    onClick: () => h("pricing"),
                    className:
                      "text-sm text-lokoto-gray-medium hover:text-lokoto-green transition-colors",
                    children: "Tarifs",
                  }),
                  b.jsx("button", {
                    "code-path": "src/sections/Contact.tsx:304:15",
                    onClick: () => h("contact"),
                    className:
                      "text-sm text-lokoto-gray-medium hover:text-lokoto-green transition-colors",
                    children: "Contact",
                  }),
                  b.jsx("a", {
                    "code-path": "src/sections/Contact.tsx:310:15",
                    href: "#",
                    className:
                      "text-sm text-lokoto-gray-medium hover:text-lokoto-green transition-colors",
                    children: "Mentions légales",
                  }),
                ],
              }),
              b.jsx("div", {
                "code-path": "src/sections/Contact.tsx:318:13",
                className: "text-sm text-lokoto-gray-medium",
                children: "© 2025 Lokoto — Fait avec ❤️ à Dakar",
              }),
            ],
          }),
        }),
      ],
    }),
  });
};
Ae.registerPlugin(be);
function DA() {
  return (
    D.useEffect(() => {
      const u = setTimeout(() => {
        const l = be
            .getAll()
            .filter((s) => s.vars.pin)
            .sort((s, c) => s.start - c.start),
          r = be.maxScroll(window);
        if (!r || l.length === 0) return;
        const a = l.map((s) => ({
          start: s.start / r,
          end: (s.end ?? s.start) / r,
          center: (s.start + ((s.end ?? s.start) - s.start) * 0.5) / r,
        }));
        be.create({
          snap: {
            snapTo: (s) =>
              a.some((h) => s >= h.start - 0.02 && s <= h.end + 0.02)
                ? a.reduce(
                    (h, m) =>
                      Math.abs(m.center - s) < Math.abs(h - s) ? m.center : h,
                    a[0]?.center ?? 0,
                  )
                : s,
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: "power2.out",
          },
        });
      }, 100);
      return () => {
        clearTimeout(u);
      };
    }, []),
    b.jsxs("div", {
      "code-path": "src/App.tsx:79:5",
      className: "relative",
      children: [
        b.jsx(_3, { "code-path": "src/App.tsx:81:7" }),
        b.jsx("div", {
          "code-path": "src/App.tsx:84:7",
          className: "fixed inset-0 pointer-events-none z-50 opacity-[0.03]",
          style: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          },
        }),
        b.jsx(v3, { "code-path": "src/App.tsx:93:7" }),
        b.jsxs("main", {
          "code-path": "src/App.tsx:96:7",
          className: "relative",
          children: [
            b.jsx(mT, { "code-path": "src/App.tsx:98:9" }),
            b.jsx(pT, { "code-path": "src/App.tsx:99:9" }),
            b.jsx(gT, { "code-path": "src/App.tsx:100:9" }),
            b.jsx(yT, { "code-path": "src/App.tsx:101:9" }),
            b.jsx(vT, { "code-path": "src/App.tsx:102:9" }),
            b.jsx(_T, { "code-path": "src/App.tsx:103:9" }),
            b.jsx(xT, { "code-path": "src/App.tsx:106:9" }),
            b.jsx(bT, { "code-path": "src/App.tsx:107:9" }),
            b.jsx(TT, { "code-path": "src/App.tsx:108:9" }),
            b.jsx(vA, { "code-path": "src/App.tsx:109:9" }),
            b.jsx(OA, { "code-path": "src/App.tsx:110:9" }),
          ],
        }),
      ],
    })
  );
}
Vb.createRoot(document.getElementById("root")).render(
  b.jsx(D.StrictMode, {
    "code-path": "src/main.tsx:7:3",
    children: b.jsx(DA, { "code-path": "src/main.tsx:8:5" }),
  }),
);
