var Bx = Object.defineProperty;
var Mx = (o, r, t) => r in o ? Bx(o, r, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: t
}) : o[r] = t;
var U = (o, r, t) => {
  Mx(o, typeof r != "symbol" ? r + "" : r, t);
  return t;
};
import { H as Dx } from "../chunks/control.c2cf8273.js";
import { s as Xe, e as ie, i as L, x as K, d as R, T as tt, o as Nr, D as e0, E as t0, f as E, g as N, h as J, U as Ac, F as Wc, a as G, c as H, j as P, u as V, G as pc, H as vc, I as bc, b as gc, l as re, m as ae, n as ge, p as ys, J as io, t as Wo, w as se, B as Pa, y as at, r as z, k as Gt, V as po, W as Ce, K as At, A as Zt, R as Rx, z as Yx, X as Ox, C as Za, v as n0 } from "../chunks/scheduler.aeeb8d78.js";
import { S as Fe, i as Je, a as $, t as te, g as Ne, c as Ve, b as he, d as me, m as Ae, e as We, h as Lx } from "../chunks/index.bb314e72.js";
import { g as Px } from "../chunks/globals.7f7f1b26.js";
import { n as Cc, p as Ex } from "../chunks/stores.f53a7e5f.js";
import { E as Nx } from "../chunks/EncodingHelper.2fa89994.js";
import { e as Dt } from "../chunks/each.704fe1f5.js";
import { T as kc, L as wc } from "../chunks/ListingsContainer.ef3dc0c8.js";
import { s as be } from "../chunks/toastStore.e0b63e24.js";
import { g as _c, t as sl } from "../chunks/index.client.54644708.js";
import { E as Ie, C as Vx, p as Ic, b as lo, s as qx, e as Fl, a as Ux } from "../chunks/constants.04166599.js";
import "../chunks/singletons.8d52a6cf.js";
import { F as jx } from "../chunks/Footer.8f87ce79.js";
function zx(o, r) {
  return new Dx(o, r);
}
new TextEncoder();
const Gx = async ({
  data: o
}) => {
  if (o.notFound) {
    throw zx(404, {
      message: "Not found"
    });
  }
  const a = {
    serverData: o
  };
  return a;
};
const F4 = Object.freeze(Object.defineProperty({
  __proto__: null,
  load: Gx
}, Symbol.toStringTag, {
  value: "Module"
}));
function s0(o) {
  let r = o[3];
  let t;
  let e = r0(o);
  return {
    c() {
      e.c();
      t = ie();
    },
    l(a) {
      e.l(a);
      t = ie();
    },
    m(a, c) {
      e.m(a, c);
      L(a, t, c);
    },
    p(a, c) {
      if (c & 8 && Xe(r, r = a[3])) {
        e.d(1);
        e = r0(a);
        e.c();
        e.m(t.parentNode, t);
      } else {
        e.p(a, c);
      }
    },
    d(a) {
      if (a) {
        R(t);
      }
      e.d(a);
    }
  };
}
function r0(o) {
  let r;
  let t;
  let e;
  return {
    c() {
      r = E("div");
    },
    l(a) {
      r = N(a, "DIV", {});
      J(r).forEach(R);
    },
    m(a, c) {
      L(a, r, c);
      if (!t) {
        e = Ac(o[2].call(null, r));
        t = true;
      }
    },
    p: K,
    d(a) {
      if (a) {
        R(r);
      }
      t = false;
      e();
    }
  };
}
function Hx(o) {
  let r;
  let t = o[0] && o[1] && s0(o);
  return {
    c() {
      if (t) {
        t.c();
      }
      r = ie();
    },
    l(e) {
      if (t) {
        t.l(e);
      }
      r = ie();
    },
    m(e, a) {
      if (t) {
        t.m(e, a);
      }
      L(e, r, a);
    },
    p(e, [a]) {
      if (e[0] && e[1]) {
        if (t) {
          t.p(e, a);
        } else {
          t = s0(e);
          t.c();
          t.m(r.parentNode, r);
        }
      } else if (t) {
        t.d(1);
        t = null;
      }
    },
    i: K,
    o: K,
    d(e) {
      if (e) {
        R(r);
      }
      if (t) {
        t.d(e);
      }
    }
  };
}
function Qx() {
  if (typeof window === "undefined") {
    return null;
  } else {
    return "turnstile" in window;
  }
}
function Xx(o, r, t) {
  const e = tt();
  let a = Qx();
  let c = false;
  let v;
  let {
    siteKey: p
  } = r;
  let {
    appearance: C = "always"
  } = r;
  let {
    language: d = "auto"
  } = r;
  let {
    formsField: b = "cf-turnstile-response"
  } = r;
  let {
    execution: S = "render"
  } = r;
  let {
    action: y = undefined
  } = r;
  let {
    cData: W = undefined
  } = r;
  let {
    retryInterval: f = 8000
  } = r;
  let {
    retry: w = "auto"
  } = r;
  let {
    theme: _ = "auto"
  } = r;
  let {
    size: h = "normal"
  } = r;
  let {
    forms: D = true
  } = r;
  let {
    tabIndex: Y = 0
  } = r;
  Nr(() => {
    t(1, c = true);
    if (!a) {
      const Q = document.createElement("script");
      Q.type = "text/javascript";
      Q.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      Q.async = true;
      Q.addEventListener("load", () => t(0, a = true), {
        once: true
      });
      document.head.appendChild(Q);
    }
    return () => {
      t(1, c = false);
    };
  });
  function j() {
    e("turnstile-error", {});
  }
  function Z() {
    e("turnstile-expired", {});
  }
  function q() {
    e("turnstile-timeout", {});
  }
  function M(Q) {
    e("turnstile-callback", {
      token: Q
    });
  }
  function O() {
    window.turnstile.reset(v);
  }
  const X = Q => {
    const F = window.turnstile.render(Q, {
      "timeout-callback": q,
      "expired-callback": Z,
      "error-callback": j,
      callback: M,
      sitekey: p,
      "response-field-name": b,
      "retry-interval": f,
      "response-field": D,
      tabindex: Y,
      appearance: C,
      execution: S,
      language: d,
      action: y,
      retry: w,
      theme: _,
      cData: W,
      size: h
    });
    v = F;
    return {
      destroy: () => {
        window.turnstile.remove(F);
      }
    };
  };
  o.$$set = Q => {
    t(3, r = e0(e0({}, r), t0(Q)));
    if ("siteKey" in Q) {
      t(4, p = Q.siteKey);
    }
    if ("appearance" in Q) {
      t(5, C = Q.appearance);
    }
    if ("language" in Q) {
      t(6, d = Q.language);
    }
    if ("formsField" in Q) {
      t(7, b = Q.formsField);
    }
    if ("execution" in Q) {
      t(8, S = Q.execution);
    }
    if ("action" in Q) {
      t(9, y = Q.action);
    }
    if ("cData" in Q) {
      t(10, W = Q.cData);
    }
    if ("retryInterval" in Q) {
      t(11, f = Q.retryInterval);
    }
    if ("retry" in Q) {
      t(12, w = Q.retry);
    }
    if ("theme" in Q) {
      t(13, _ = Q.theme);
    }
    if ("size" in Q) {
      t(14, h = Q.size);
    }
    if ("forms" in Q) {
      t(15, D = Q.forms);
    }
    if ("tabIndex" in Q) {
      t(16, Y = Q.tabIndex);
    }
  };
  r = t0(r);
  return [a, c, X, r, p, C, d, b, S, y, W, f, w, _, h, D, Y, O];
}
class Zx extends Fe {
  constructor(r) {
    super();
    Je(this, r, Xx, Hx, Xe, {
      siteKey: 4,
      appearance: 5,
      language: 6,
      formsField: 7,
      execution: 8,
      action: 9,
      cData: 10,
      retryInterval: 11,
      retry: 12,
      theme: 13,
      size: 14,
      forms: 15,
      tabIndex: 16,
      reset: 17
    });
  }
  get reset() {
    return this.$$.ctx[17];
  }
}
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Sc;
function fe() {
  return Sc.apply(null, arguments);
}
function Fx(o) {
  Sc = o;
}
function Qt(o) {
  return o instanceof Array || Object.prototype.toString.call(o) === "[object Array]";
}
function ha(o) {
  return o != null && Object.prototype.toString.call(o) === "[object Object]";
}
function qe(o, r) {
  return Object.prototype.hasOwnProperty.call(o, r);
}
function vo(o) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(o).length === 0;
  }
  var r;
  for (r in o) {
    if (qe(o, r)) {
      return false;
    }
  }
  return true;
}
function mt(o) {
  return o === undefined;
}
function Ms(o) {
  return typeof o == "number" || Object.prototype.toString.call(o) === "[object Number]";
}
function rl(o) {
  return o instanceof Date || Object.prototype.toString.call(o) === "[object Date]";
}
function yc(o, r) {
  var t = [];
  var e;
  var a = o.length;
  for (e = 0; e < a; ++e) {
    t.push(r(o[e], e));
  }
  return t;
}
function Lr(o, r) {
  for (var t in r) {
    if (qe(r, t)) {
      o[t] = r[t];
    }
  }
  if (qe(r, "toString")) {
    o.toString = r.toString;
  }
  if (qe(r, "valueOf")) {
    o.valueOf = r.valueOf;
  }
  return o;
}
function rs(o, r, t, e) {
  return Jc(o, r, t, e, true).utc();
}
function Jx() {
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}
function Re(o) {
  if (o._pf == null) {
    o._pf = Jx();
  }
  return o._pf;
}
var oo;
if (Array.prototype.some) {
  oo = Array.prototype.some;
} else {
  oo = function (o) {
    var r = Object(this);
    var t = r.length >>> 0;
    var e;
    for (e = 0; e < t; e++) {
      if (e in r && o.call(this, r[e], e, r)) {
        return true;
      }
    }
    return false;
  };
}
function bo(o) {
  var r = null;
  var t = false;
  var e = o._d && !isNaN(o._d.getTime());
  if (e) {
    r = Re(o);
    t = oo.call(r.parsedDateParts, function (a) {
      return a != null;
    });
    e = r.overflow < 0 && !r.empty && !r.invalidEra && !r.invalidMonth && !r.invalidWeekday && !r.weekdayMismatch && !r.nullInput && !r.invalidFormat && !r.userInvalidated && (!r.meridiem || r.meridiem && t);
    if (o._strict) {
      e = e && r.charsLeftOver === 0 && r.unusedTokens.length === 0 && r.bigHour === undefined;
    }
  }
  if (Object.isFrozen == null || !Object.isFrozen(o)) {
    o._isValid = e;
  } else {
    return e;
  }
  return o._isValid;
}
function Sl(o) {
  var r = rs(NaN);
  if (o != null) {
    Lr(Re(r), o);
  } else {
    Re(r).userInvalidated = true;
  }
  return r;
}
var a0 = fe.momentProperties = [];
var Jl = false;
function go(o, r) {
  var t;
  var e;
  var a;
  var c = a0.length;
  if (!mt(r._isAMomentObject)) {
    o._isAMomentObject = r._isAMomentObject;
  }
  if (!mt(r._i)) {
    o._i = r._i;
  }
  if (!mt(r._f)) {
    o._f = r._f;
  }
  if (!mt(r._l)) {
    o._l = r._l;
  }
  if (!mt(r._strict)) {
    o._strict = r._strict;
  }
  if (!mt(r._tzm)) {
    o._tzm = r._tzm;
  }
  if (!mt(r._isUTC)) {
    o._isUTC = r._isUTC;
  }
  if (!mt(r._offset)) {
    o._offset = r._offset;
  }
  if (!mt(r._pf)) {
    o._pf = Re(r);
  }
  if (!mt(r._locale)) {
    o._locale = r._locale;
  }
  if (c > 0) {
    for (t = 0; t < c; t++) {
      e = a0[t];
      a = r[e];
      if (!mt(a)) {
        o[e] = a;
      }
    }
  }
  return o;
}
function al(o) {
  go(this, o);
  this._d = new Date(o._d != null ? o._d.getTime() : NaN);
  if (!this.isValid()) {
    this._d = new Date(NaN);
  }
  if (Jl === false) {
    Jl = true;
    fe.updateOffset(this);
    Jl = false;
  }
}
function Xt(o) {
  return o instanceof al || o != null && o._isAMomentObject != null;
}
function Tc(o) {
  if (fe.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
    console.warn("Deprecation warning: " + o);
  }
}
function Rt(o, r) {
  var t = true;
  return Lr(function () {
    if (fe.deprecationHandler != null) {
      fe.deprecationHandler(null, o);
    }
    if (t) {
      var e = [];
      var a;
      var c;
      var v;
      var p = arguments.length;
      for (c = 0; c < p; c++) {
        a = "";
        if (typeof arguments[c] == "object") {
          a += `
[${c}] `;
          for (v in arguments[0]) {
            if (qe(arguments[0], v)) {
              a += v + ": " + arguments[0][v] + ", ";
            }
          }
          a = a.slice(0, -2);
        } else {
          a = arguments[c];
        }
        e.push(a);
      }
      Tc(`${o}
Arguments: ${Array.prototype.slice.call(e).join("")}
${new Error().stack}`);
      t = false;
    }
    return r.apply(this, arguments);
  }, r);
}
var i0 = {};
function Bc(o, r) {
  if (fe.deprecationHandler != null) {
    fe.deprecationHandler(o, r);
  }
  if (!i0[o]) {
    Tc(r);
    i0[o] = true;
  }
}
fe.suppressDeprecationWarnings = false;
fe.deprecationHandler = null;
function as(o) {
  return typeof Function !== "undefined" && o instanceof Function || Object.prototype.toString.call(o) === "[object Function]";
}
function Kx(o) {
  var r;
  var t;
  for (t in o) {
    if (qe(o, t)) {
      r = o[t];
      if (as(r)) {
        this[t] = r;
      } else {
        this["_" + t] = r;
      }
    }
  }
  this._config = o;
  this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}
function co(o, r) {
  var t = Lr({}, o);
  var e;
  for (e in r) {
    if (qe(r, e)) {
      if (ha(o[e]) && ha(r[e])) {
        t[e] = {};
        Lr(t[e], o[e]);
        Lr(t[e], r[e]);
      } else if (r[e] != null) {
        t[e] = r[e];
      } else {
        delete t[e];
      }
    }
  }
  for (e in o) {
    if (qe(o, e) && !qe(r, e) && ha(o[e])) {
      t[e] = Lr({}, t[e]);
    }
  }
  return t;
}
function Co(o) {
  if (o != null) {
    this.set(o);
  }
}
var xo;
if (Object.keys) {
  xo = Object.keys;
} else {
  xo = function (o) {
    var r;
    var t = [];
    for (r in o) {
      if (qe(o, r)) {
        t.push(r);
      }
    }
    return t;
  };
}
var $x = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function eu(o, r, t) {
  var e = this._calendar[o] || this._calendar.sameElse;
  if (as(e)) {
    return e.call(r, t);
  } else {
    return e;
  }
}
function ss(o, r, t) {
  var e = "" + Math.abs(o);
  var a = r - e.length;
  var c = o >= 0;
  return (c ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + e;
}
var ko = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var dl = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var Kl = {};
var Ya = {};
function we(o, r, t, e) {
  var a = e;
  if (typeof e == "string") {
    a = function () {
      return this[e]();
    };
  }
  if (o) {
    Ya[o] = a;
  }
  if (r) {
    Ya[r[0]] = function () {
      return ss(a.apply(this, arguments), r[1], r[2]);
    };
  }
  if (t) {
    Ya[t] = function () {
      return this.localeData().ordinal(a.apply(this, arguments), o);
    };
  }
}
function tu(o) {
  if (o.match(/\[[\s\S]/)) {
    return o.replace(/^\[|\]$/g, "");
  } else {
    return o.replace(/\\/g, "");
  }
}
function nu(o) {
  var r = o.match(ko);
  var t;
  var e;
  t = 0;
  e = r.length;
  for (; t < e; t++) {
    if (Ya[r[t]]) {
      r[t] = Ya[r[t]];
    } else {
      r[t] = tu(r[t]);
    }
  }
  return function (a) {
    var c = "";
    var v;
    for (v = 0; v < e; v++) {
      c += as(r[v]) ? r[v].call(a, o) : r[v];
    }
    return c;
  };
}
function Wl(o, r) {
  if (o.isValid()) {
    r = Mc(r, o.localeData());
    Kl[r] = Kl[r] || nu(r);
    return Kl[r](o);
  } else {
    return o.localeData().invalidDate();
  }
}
function Mc(o, r) {
  var t = 5;
  function e(a) {
    return r.longDateFormat(a) || a;
  }
  for (dl.lastIndex = 0; t >= 0 && dl.test(o);) {
    o = o.replace(dl, e);
    dl.lastIndex = 0;
    t -= 1;
  }
  return o;
}
var su = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function ru(o) {
  var r = this._longDateFormat[o];
  var t = this._longDateFormat[o.toUpperCase()];
  if (r || !t) {
    return r;
  } else {
    this._longDateFormat[o] = t.match(ko).map(function (e) {
      if (e === "MMMM" || e === "MM" || e === "DD" || e === "dddd") {
        return e.slice(1);
      } else {
        return e;
      }
    }).join("");
    return this._longDateFormat[o];
  }
}
var au = "Invalid date";
function iu() {
  return this._invalidDate;
}
var lu = "%d";
var ou = /\d{1,2}/;
function cu(o) {
  return this._ordinal.replace("%d", o);
}
var xu = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function uu(o, r, t, e) {
  var a = this._relativeTime[t];
  if (as(a)) {
    return a(o, r, t, e);
  } else {
    return a.replace(/%d/i, o);
  }
}
function fu(o, r) {
  var t = this._relativeTime[o > 0 ? "future" : "past"];
  if (as(t)) {
    return t(r);
  } else {
    return t.replace(/%s/i, r);
  }
}
var l0 = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Yt(o) {
  if (typeof o == "string") {
    return l0[o] || l0[o.toLowerCase()];
  } else {
    return undefined;
  }
}
function wo(o) {
  var r = {};
  var t;
  var e;
  for (e in o) {
    if (qe(o, e)) {
      t = Yt(e);
      if (t) {
        r[t] = o[e];
      }
    }
  }
  return r;
}
var du = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function hu(o) {
  var r = [];
  var t;
  for (t in o) {
    if (qe(o, t)) {
      r.push({
        unit: t,
        priority: du[t]
      });
    }
  }
  r.sort(function (e, a) {
    return e.priority - a.priority;
  });
  return r;
}
var Dc = /\d/;
var vt = /\d\d/;
var Rc = /\d{3}/;
var _o = /\d{4}/;
var yl = /[+-]?\d{6}/;
var Ge = /\d\d?/;
var Yc = /\d\d\d\d?/;
var Oc = /\d\d\d\d\d\d?/;
var Tl = /\d{1,3}/;
var Io = /\d{1,4}/;
var Bl = /[+-]?\d{1,6}/;
var Ea = /\d+/;
var Ml = /[+-]?\d+/;
var mu = /Z|[+-]\d\d:?\d\d/gi;
var Dl = /Z|[+-]\d\d(?::?\d\d)?/gi;
var Au = /[+-]?\d+(\.\d{1,3})?/;
var il = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var Na = /^[1-9]\d?/;
var So = /^([1-9]\d|\d)/;
var bl;
bl = {};
function pe(o, r, t) {
  bl[o] = as(r) ? r : function (e, a) {
    if (e && t) {
      return t;
    } else {
      return r;
    }
  };
}
function Wu(o, r) {
  if (qe(bl, o)) {
    return bl[o](r._strict, r._locale);
  } else {
    return new RegExp(pu(o));
  }
}
function pu(o) {
  return Ts(o.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (r, t, e, a, c) {
    return t || e || a || c;
  }));
}
function Ts(o) {
  return o.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Bt(o) {
  if (o < 0) {
    return Math.ceil(o) || 0;
  } else {
    return Math.floor(o);
  }
}
function Le(o) {
  var r = +o;
  var t = 0;
  if (r !== 0 && isFinite(r)) {
    t = Bt(r);
  }
  return t;
}
var uo = {};
function je(o, r) {
  var t;
  var e = r;
  var a;
  if (typeof o == "string") {
    o = [o];
  }
  if (Ms(r)) {
    e = function (c, v) {
      v[r] = Le(c);
    };
  }
  a = o.length;
  t = 0;
  for (; t < a; t++) {
    uo[o[t]] = e;
  }
}
function ll(o, r) {
  je(o, function (t, e, a, c) {
    a._w = a._w || {};
    r(t, a._w, a, c);
  });
}
function vu(o, r, t) {
  if (r != null && qe(uo, o)) {
    uo[o](r, t._a, t, o);
  }
}
function Rl(o) {
  return o % 4 === 0 && o % 100 !== 0 || o % 400 === 0;
}
var xt = 0;
var Is = 1;
var ns = 2;
var st = 3;
var Ht = 4;
var Ss = 5;
var da = 6;
var bu = 7;
var gu = 8;
we("Y", 0, 0, function () {
  var o = this.year();
  if (o <= 9999) {
    return ss(o, 4);
  } else {
    return "+" + o;
  }
});
we(0, ["YY", 2], 0, function () {
  return this.year() % 100;
});
we(0, ["YYYY", 4], 0, "year");
we(0, ["YYYYY", 5], 0, "year");
we(0, ["YYYYYY", 6, true], 0, "year");
pe("Y", Ml);
pe("YY", Ge, vt);
pe("YYYY", Io, _o);
pe("YYYYY", Bl, yl);
pe("YYYYYY", Bl, yl);
je(["YYYYY", "YYYYYY"], xt);
je("YYYY", function (o, r) {
  r[xt] = o.length === 2 ? fe.parseTwoDigitYear(o) : Le(o);
});
je("YY", function (o, r) {
  r[xt] = fe.parseTwoDigitYear(o);
});
je("Y", function (o, r) {
  r[xt] = parseInt(o, 10);
});
function Fa(o) {
  if (Rl(o)) {
    return 366;
  } else {
    return 365;
  }
}
fe.parseTwoDigitYear = function (o) {
  return Le(o) + (Le(o) > 68 ? 1900 : 2000);
};
var Lc = Va("FullYear", true);
function Cu() {
  return Rl(this.year());
}
function Va(o, r) {
  return function (t) {
    if (t != null) {
      Pc(this, o, t);
      fe.updateOffset(this, r);
      return this;
    } else {
      return Ka(this, o);
    }
  };
}
function Ka(o, r) {
  if (!o.isValid()) {
    return NaN;
  }
  var t = o._d;
  var e = o._isUTC;
  switch (r) {
    case "Milliseconds":
      if (e) {
        return t.getUTCMilliseconds();
      } else {
        return t.getMilliseconds();
      }
    case "Seconds":
      if (e) {
        return t.getUTCSeconds();
      } else {
        return t.getSeconds();
      }
    case "Minutes":
      if (e) {
        return t.getUTCMinutes();
      } else {
        return t.getMinutes();
      }
    case "Hours":
      if (e) {
        return t.getUTCHours();
      } else {
        return t.getHours();
      }
    case "Date":
      if (e) {
        return t.getUTCDate();
      } else {
        return t.getDate();
      }
    case "Day":
      if (e) {
        return t.getUTCDay();
      } else {
        return t.getDay();
      }
    case "Month":
      if (e) {
        return t.getUTCMonth();
      } else {
        return t.getMonth();
      }
    case "FullYear":
      if (e) {
        return t.getUTCFullYear();
      } else {
        return t.getFullYear();
      }
    default:
      return NaN;
  }
}
function Pc(o, r, t) {
  var e;
  var a;
  var c;
  var v;
  var p;
  if (!!o.isValid() && !isNaN(t)) {
    e = o._d;
    a = o._isUTC;
    switch (r) {
      case "Milliseconds":
        if (a) {
          e.setUTCMilliseconds(t);
        } else {
          e.setMilliseconds(t);
        }
        return;
      case "Seconds":
        if (a) {
          e.setUTCSeconds(t);
        } else {
          e.setSeconds(t);
        }
        return;
      case "Minutes":
        if (a) {
          e.setUTCMinutes(t);
        } else {
          e.setMinutes(t);
        }
        return;
      case "Hours":
        if (a) {
          e.setUTCHours(t);
        } else {
          e.setHours(t);
        }
        return;
      case "Date":
        if (a) {
          e.setUTCDate(t);
        } else {
          e.setDate(t);
        }
        return;
      case "FullYear":
        break;
      default:
        return;
    }
    c = t;
    v = o.month();
    p = o.date();
    p = p === 29 && v === 1 && !Rl(c) ? 28 : p;
    if (a) {
      e.setUTCFullYear(c, v, p);
    } else {
      e.setFullYear(c, v, p);
    }
  }
}
function ku(o) {
  o = Yt(o);
  if (as(this[o])) {
    return this[o]();
  } else {
    return this;
  }
}
function wu(o, r) {
  if (typeof o == "object") {
    o = wo(o);
    var t = hu(o);
    var e;
    var a = t.length;
    for (e = 0; e < a; e++) {
      this[t[e].unit](o[t[e].unit]);
    }
  } else {
    o = Yt(o);
    if (as(this[o])) {
      return this[o](r);
    }
  }
  return this;
}
function _u(o, r) {
  return (o % r + r) % r;
}
var $e;
if (Array.prototype.indexOf) {
  $e = Array.prototype.indexOf;
} else {
  $e = function (o) {
    var r;
    for (r = 0; r < this.length; ++r) {
      if (this[r] === o) {
        return r;
      }
    }
    return -1;
  };
}
function yo(o, r) {
  if (isNaN(o) || isNaN(r)) {
    return NaN;
  }
  var t = _u(r, 12);
  o += (r - t) / 12;
  if (t === 1) {
    if (Rl(o)) {
      return 29;
    } else {
      return 28;
    }
  } else {
    return 31 - t % 7 % 2;
  }
}
we("M", ["MM", 2], "Mo", function () {
  return this.month() + 1;
});
we("MMM", 0, 0, function (o) {
  return this.localeData().monthsShort(this, o);
});
we("MMMM", 0, 0, function (o) {
  return this.localeData().months(this, o);
});
pe("M", Ge, Na);
pe("MM", Ge, vt);
pe("MMM", function (o, r) {
  return r.monthsShortRegex(o);
});
pe("MMMM", function (o, r) {
  return r.monthsRegex(o);
});
je(["M", "MM"], function (o, r) {
  r[Is] = Le(o) - 1;
});
je(["MMM", "MMMM"], function (o, r, t, e) {
  var a = t._locale.monthsParse(o, e, t._strict);
  if (a != null) {
    r[Is] = a;
  } else {
    Re(t).invalidMonth = o;
  }
});
var Iu = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
var Ec = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
var Nc = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var Su = il;
var yu = il;
function Tu(o, r) {
  if (o) {
    if (Qt(this._months)) {
      return this._months[o.month()];
    } else {
      return this._months[(this._months.isFormat || Nc).test(r) ? "format" : "standalone"][o.month()];
    }
  } else if (Qt(this._months)) {
    return this._months;
  } else {
    return this._months.standalone;
  }
}
function Bu(o, r) {
  if (o) {
    if (Qt(this._monthsShort)) {
      return this._monthsShort[o.month()];
    } else {
      return this._monthsShort[Nc.test(r) ? "format" : "standalone"][o.month()];
    }
  } else if (Qt(this._monthsShort)) {
    return this._monthsShort;
  } else {
    return this._monthsShort.standalone;
  }
}
function Mu(o, r, t) {
  var e;
  var a;
  var c;
  var v = o.toLocaleLowerCase();
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
    e = 0;
    for (; e < 12; ++e) {
      c = rs([2000, e]);
      this._shortMonthsParse[e] = this.monthsShort(c, "").toLocaleLowerCase();
      this._longMonthsParse[e] = this.months(c, "").toLocaleLowerCase();
    }
  }
  if (t) {
    if (r === "MMM") {
      a = $e.call(this._shortMonthsParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    } else {
      a = $e.call(this._longMonthsParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    }
  } else if (r === "MMM") {
    a = $e.call(this._shortMonthsParse, v);
    if (a !== -1) {
      return a;
    } else {
      a = $e.call(this._longMonthsParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    }
  } else {
    a = $e.call(this._longMonthsParse, v);
    if (a !== -1) {
      return a;
    } else {
      a = $e.call(this._shortMonthsParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    }
  }
}
function Du(o, r, t) {
  var e;
  var a;
  var c;
  if (this._monthsParseExact) {
    return Mu.call(this, o, r, t);
  }
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
  }
  e = 0;
  for (; e < 12; e++) {
    a = rs([2000, e]);
    if (t && !this._longMonthsParse[e]) {
      this._longMonthsParse[e] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i");
      this._shortMonthsParse[e] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i");
    }
    if (!t && !this._monthsParse[e]) {
      c = "^" + this.months(a, "") + "|^" + this.monthsShort(a, "");
      this._monthsParse[e] = new RegExp(c.replace(".", ""), "i");
    }
    if (t && r === "MMMM" && this._longMonthsParse[e].test(o)) {
      return e;
    }
    if (t && r === "MMM" && this._shortMonthsParse[e].test(o)) {
      return e;
    }
    if (!t && this._monthsParse[e].test(o)) {
      return e;
    }
  }
}
function Vc(o, r) {
  if (!o.isValid()) {
    return o;
  }
  if (typeof r == "string") {
    if (/^\d+$/.test(r)) {
      r = Le(r);
    } else {
      r = o.localeData().monthsParse(r);
      if (!Ms(r)) {
        return o;
      }
    }
  }
  var t = r;
  var e = o.date();
  e = e < 29 ? e : Math.min(e, yo(o.year(), t));
  if (o._isUTC) {
    o._d.setUTCMonth(t, e);
  } else {
    o._d.setMonth(t, e);
  }
  return o;
}
function qc(o) {
  if (o != null) {
    Vc(this, o);
    fe.updateOffset(this, true);
    return this;
  } else {
    return Ka(this, "Month");
  }
}
function Ru() {
  return yo(this.year(), this.month());
}
function Yu(o) {
  if (this._monthsParseExact) {
    if (!qe(this, "_monthsRegex")) {
      Uc.call(this);
    }
    if (o) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  } else {
    if (!qe(this, "_monthsShortRegex")) {
      this._monthsShortRegex = Su;
    }
    if (this._monthsShortStrictRegex && o) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  }
}
function Ou(o) {
  if (this._monthsParseExact) {
    if (!qe(this, "_monthsRegex")) {
      Uc.call(this);
    }
    if (o) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  } else {
    if (!qe(this, "_monthsRegex")) {
      this._monthsRegex = yu;
    }
    if (this._monthsStrictRegex && o) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  }
}
function Uc() {
  function o(C, d) {
    return d.length - C.length;
  }
  var r = [];
  var t = [];
  var e = [];
  var a;
  var c;
  var v;
  var p;
  for (a = 0; a < 12; a++) {
    c = rs([2000, a]);
    v = Ts(this.monthsShort(c, ""));
    p = Ts(this.months(c, ""));
    r.push(v);
    t.push(p);
    e.push(p);
    e.push(v);
  }
  r.sort(o);
  t.sort(o);
  e.sort(o);
  this._monthsRegex = new RegExp("^(" + e.join("|") + ")", "i");
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp("^(" + t.join("|") + ")", "i");
  this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
}
function Lu(o, r, t, e, a, c, v) {
  var p;
  if (o < 100 && o >= 0) {
    p = new Date(o + 400, r, t, e, a, c, v);
    if (isFinite(p.getFullYear())) {
      p.setFullYear(o);
    }
  } else {
    p = new Date(o, r, t, e, a, c, v);
  }
  return p;
}
function $a(o) {
  var r;
  var t;
  if (o < 100 && o >= 0) {
    t = Array.prototype.slice.call(arguments);
    t[0] = o + 400;
    r = new Date(Date.UTC.apply(null, t));
    if (isFinite(r.getUTCFullYear())) {
      r.setUTCFullYear(o);
    }
  } else {
    r = new Date(Date.UTC.apply(null, arguments));
  }
  return r;
}
function gl(o, r, t) {
  var e = 7 + r - t;
  var a = (7 + $a(o, 0, e).getUTCDay() - r) % 7;
  return -a + e - 1;
}
function jc(o, r, t, e, a) {
  var c = (7 + t - e) % 7;
  var v = gl(o, e, a);
  var p = 1 + (r - 1) * 7 + c + v;
  var C;
  var d;
  if (p <= 0) {
    C = o - 1;
    d = Fa(C) + p;
  } else if (p > Fa(o)) {
    C = o + 1;
    d = p - Fa(o);
  } else {
    C = o;
    d = p;
  }
  return {
    year: C,
    dayOfYear: d
  };
}
function ei(o, r, t) {
  var e = gl(o.year(), r, t);
  var a = Math.floor((o.dayOfYear() - e - 1) / 7) + 1;
  var c;
  var v;
  if (a < 1) {
    v = o.year() - 1;
    c = a + Bs(v, r, t);
  } else if (a > Bs(o.year(), r, t)) {
    c = a - Bs(o.year(), r, t);
    v = o.year() + 1;
  } else {
    v = o.year();
    c = a;
  }
  return {
    week: c,
    year: v
  };
}
function Bs(o, r, t) {
  var e = gl(o, r, t);
  var a = gl(o + 1, r, t);
  return (Fa(o) - e + a) / 7;
}
we("w", ["ww", 2], "wo", "week");
we("W", ["WW", 2], "Wo", "isoWeek");
pe("w", Ge, Na);
pe("ww", Ge, vt);
pe("W", Ge, Na);
pe("WW", Ge, vt);
ll(["w", "ww", "W", "WW"], function (o, r, t, e) {
  r[e.substr(0, 1)] = Le(o);
});
function Pu(o) {
  return ei(o, this._week.dow, this._week.doy).week;
}
var Eu = {
  dow: 0,
  doy: 6
};
function Nu() {
  return this._week.dow;
}
function Vu() {
  return this._week.doy;
}
function qu(o) {
  var r = this.localeData().week(this);
  if (o == null) {
    return r;
  } else {
    return this.add((o - r) * 7, "d");
  }
}
function Uu(o) {
  var r = ei(this, 1, 4).week;
  if (o == null) {
    return r;
  } else {
    return this.add((o - r) * 7, "d");
  }
}
we("d", 0, "do", "day");
we("dd", 0, 0, function (o) {
  return this.localeData().weekdaysMin(this, o);
});
we("ddd", 0, 0, function (o) {
  return this.localeData().weekdaysShort(this, o);
});
we("dddd", 0, 0, function (o) {
  return this.localeData().weekdays(this, o);
});
we("e", 0, 0, "weekday");
we("E", 0, 0, "isoWeekday");
pe("d", Ge);
pe("e", Ge);
pe("E", Ge);
pe("dd", function (o, r) {
  return r.weekdaysMinRegex(o);
});
pe("ddd", function (o, r) {
  return r.weekdaysShortRegex(o);
});
pe("dddd", function (o, r) {
  return r.weekdaysRegex(o);
});
ll(["dd", "ddd", "dddd"], function (o, r, t, e) {
  var a = t._locale.weekdaysParse(o, e, t._strict);
  if (a != null) {
    r.d = a;
  } else {
    Re(t).invalidWeekday = o;
  }
});
ll(["d", "e", "E"], function (o, r, t, e) {
  r[e] = Le(o);
});
function ju(o, r) {
  if (typeof o != "string") {
    return o;
  } else if (isNaN(o)) {
    o = r.weekdaysParse(o);
    if (typeof o == "number") {
      return o;
    } else {
      return null;
    }
  } else {
    return parseInt(o, 10);
  }
}
function zu(o, r) {
  if (typeof o == "string") {
    return r.weekdaysParse(o) % 7 || 7;
  } else if (isNaN(o)) {
    return null;
  } else {
    return o;
  }
}
function To(o, r) {
  return o.slice(r, 7).concat(o.slice(0, r));
}
var Gu = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
var zc = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
var Hu = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
var Qu = il;
var Xu = il;
var Zu = il;
function Fu(o, r) {
  var t = Qt(this._weekdays) ? this._weekdays : this._weekdays[o && o !== true && this._weekdays.isFormat.test(r) ? "format" : "standalone"];
  if (o === true) {
    return To(t, this._week.dow);
  } else if (o) {
    return t[o.day()];
  } else {
    return t;
  }
}
function Ju(o) {
  if (o === true) {
    return To(this._weekdaysShort, this._week.dow);
  } else if (o) {
    return this._weekdaysShort[o.day()];
  } else {
    return this._weekdaysShort;
  }
}
function Ku(o) {
  if (o === true) {
    return To(this._weekdaysMin, this._week.dow);
  } else if (o) {
    return this._weekdaysMin[o.day()];
  } else {
    return this._weekdaysMin;
  }
}
function $u(o, r, t) {
  var e;
  var a;
  var c;
  var v = o.toLocaleLowerCase();
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._minWeekdaysParse = [];
    e = 0;
    for (; e < 7; ++e) {
      c = rs([2000, 1]).day(e);
      this._minWeekdaysParse[e] = this.weekdaysMin(c, "").toLocaleLowerCase();
      this._shortWeekdaysParse[e] = this.weekdaysShort(c, "").toLocaleLowerCase();
      this._weekdaysParse[e] = this.weekdays(c, "").toLocaleLowerCase();
    }
  }
  if (t) {
    if (r === "dddd") {
      a = $e.call(this._weekdaysParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    } else if (r === "ddd") {
      a = $e.call(this._shortWeekdaysParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    } else {
      a = $e.call(this._minWeekdaysParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    }
  } else if (r === "dddd") {
    a = $e.call(this._weekdaysParse, v);
    if (a !== -1 || (a = $e.call(this._shortWeekdaysParse, v), a !== -1)) {
      return a;
    } else {
      a = $e.call(this._minWeekdaysParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    }
  } else if (r === "ddd") {
    a = $e.call(this._shortWeekdaysParse, v);
    if (a !== -1 || (a = $e.call(this._weekdaysParse, v), a !== -1)) {
      return a;
    } else {
      a = $e.call(this._minWeekdaysParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    }
  } else {
    a = $e.call(this._minWeekdaysParse, v);
    if (a !== -1 || (a = $e.call(this._weekdaysParse, v), a !== -1)) {
      return a;
    } else {
      a = $e.call(this._shortWeekdaysParse, v);
      if (a !== -1) {
        return a;
      } else {
        return null;
      }
    }
  }
}
function ef(o, r, t) {
  var e;
  var a;
  var c;
  if (this._weekdaysParseExact) {
    return $u.call(this, o, r, t);
  }
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._minWeekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._fullWeekdaysParse = [];
  }
  e = 0;
  for (; e < 7; e++) {
    a = rs([2000, 1]).day(e);
    if (t && !this._fullWeekdaysParse[e]) {
      this._fullWeekdaysParse[e] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i");
      this._shortWeekdaysParse[e] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i");
      this._minWeekdaysParse[e] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i");
    }
    if (!this._weekdaysParse[e]) {
      c = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, "");
      this._weekdaysParse[e] = new RegExp(c.replace(".", ""), "i");
    }
    if (t && r === "dddd" && this._fullWeekdaysParse[e].test(o)) {
      return e;
    }
    if (t && r === "ddd" && this._shortWeekdaysParse[e].test(o)) {
      return e;
    }
    if (t && r === "dd" && this._minWeekdaysParse[e].test(o)) {
      return e;
    }
    if (!t && this._weekdaysParse[e].test(o)) {
      return e;
    }
  }
}
function tf(o) {
  if (!this.isValid()) {
    if (o != null) {
      return this;
    } else {
      return NaN;
    }
  }
  var r = Ka(this, "Day");
  if (o != null) {
    o = ju(o, this.localeData());
    return this.add(o - r, "d");
  } else {
    return r;
  }
}
function nf(o) {
  if (!this.isValid()) {
    if (o != null) {
      return this;
    } else {
      return NaN;
    }
  }
  var r = (this.day() + 7 - this.localeData()._week.dow) % 7;
  if (o == null) {
    return r;
  } else {
    return this.add(o - r, "d");
  }
}
function sf(o) {
  if (!this.isValid()) {
    if (o != null) {
      return this;
    } else {
      return NaN;
    }
  }
  if (o != null) {
    var r = zu(o, this.localeData());
    return this.day(this.day() % 7 ? r : r - 7);
  } else {
    return this.day() || 7;
  }
}
function rf(o) {
  if (this._weekdaysParseExact) {
    if (!qe(this, "_weekdaysRegex")) {
      Bo.call(this);
    }
    if (o) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  } else {
    if (!qe(this, "_weekdaysRegex")) {
      this._weekdaysRegex = Qu;
    }
    if (this._weekdaysStrictRegex && o) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  }
}
function af(o) {
  if (this._weekdaysParseExact) {
    if (!qe(this, "_weekdaysRegex")) {
      Bo.call(this);
    }
    if (o) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  } else {
    if (!qe(this, "_weekdaysShortRegex")) {
      this._weekdaysShortRegex = Xu;
    }
    if (this._weekdaysShortStrictRegex && o) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  }
}
function lf(o) {
  if (this._weekdaysParseExact) {
    if (!qe(this, "_weekdaysRegex")) {
      Bo.call(this);
    }
    if (o) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  } else {
    if (!qe(this, "_weekdaysMinRegex")) {
      this._weekdaysMinRegex = Zu;
    }
    if (this._weekdaysMinStrictRegex && o) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  }
}
function Bo() {
  function o(b, S) {
    return S.length - b.length;
  }
  var r = [];
  var t = [];
  var e = [];
  var a = [];
  var c;
  var v;
  var p;
  var C;
  var d;
  for (c = 0; c < 7; c++) {
    v = rs([2000, 1]).day(c);
    p = Ts(this.weekdaysMin(v, ""));
    C = Ts(this.weekdaysShort(v, ""));
    d = Ts(this.weekdays(v, ""));
    r.push(p);
    t.push(C);
    e.push(d);
    a.push(p);
    a.push(C);
    a.push(d);
  }
  r.sort(o);
  t.sort(o);
  e.sort(o);
  a.sort(o);
  this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i");
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;
  this._weekdaysStrictRegex = new RegExp("^(" + e.join("|") + ")", "i");
  this._weekdaysShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i");
  this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
}
function Mo() {
  return this.hours() % 12 || 12;
}
function of() {
  return this.hours() || 24;
}
we("H", ["HH", 2], 0, "hour");
we("h", ["hh", 2], 0, Mo);
we("k", ["kk", 2], 0, of);
we("hmm", 0, 0, function () {
  return "" + Mo.apply(this) + ss(this.minutes(), 2);
});
we("hmmss", 0, 0, function () {
  return "" + Mo.apply(this) + ss(this.minutes(), 2) + ss(this.seconds(), 2);
});
we("Hmm", 0, 0, function () {
  return "" + this.hours() + ss(this.minutes(), 2);
});
we("Hmmss", 0, 0, function () {
  return "" + this.hours() + ss(this.minutes(), 2) + ss(this.seconds(), 2);
});
function Gc(o, r) {
  we(o, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), r);
  });
}
Gc("a", true);
Gc("A", false);
function Hc(o, r) {
  return r._meridiemParse;
}
pe("a", Hc);
pe("A", Hc);
pe("H", Ge, So);
pe("h", Ge, Na);
pe("k", Ge, Na);
pe("HH", Ge, vt);
pe("hh", Ge, vt);
pe("kk", Ge, vt);
pe("hmm", Yc);
pe("hmmss", Oc);
pe("Hmm", Yc);
pe("Hmmss", Oc);
je(["H", "HH"], st);
je(["k", "kk"], function (o, r, t) {
  var e = Le(o);
  r[st] = e === 24 ? 0 : e;
});
je(["a", "A"], function (o, r, t) {
  t._isPm = t._locale.isPM(o);
  t._meridiem = o;
});
je(["h", "hh"], function (o, r, t) {
  r[st] = Le(o);
  Re(t).bigHour = true;
});
je("hmm", function (o, r, t) {
  var e = o.length - 2;
  r[st] = Le(o.substr(0, e));
  r[Ht] = Le(o.substr(e));
  Re(t).bigHour = true;
});
je("hmmss", function (o, r, t) {
  var e = o.length - 4;
  var a = o.length - 2;
  r[st] = Le(o.substr(0, e));
  r[Ht] = Le(o.substr(e, 2));
  r[Ss] = Le(o.substr(a));
  Re(t).bigHour = true;
});
je("Hmm", function (o, r, t) {
  var e = o.length - 2;
  r[st] = Le(o.substr(0, e));
  r[Ht] = Le(o.substr(e));
});
je("Hmmss", function (o, r, t) {
  var e = o.length - 4;
  var a = o.length - 2;
  r[st] = Le(o.substr(0, e));
  r[Ht] = Le(o.substr(e, 2));
  r[Ss] = Le(o.substr(a));
});
function cf(o) {
  return (o + "").toLowerCase().charAt(0) === "p";
}
var xf = /[ap]\.?m?\.?/i;
var uf = Va("Hours", true);
function ff(o, r, t) {
  if (o > 11) {
    if (t) {
      return "pm";
    } else {
      return "PM";
    }
  } else if (t) {
    return "am";
  } else {
    return "AM";
  }
}
var Qc = {
  calendar: $x,
  longDateFormat: su,
  invalidDate: au,
  ordinal: lu,
  dayOfMonthOrdinalParse: ou,
  relativeTime: xu,
  months: Iu,
  monthsShort: Ec,
  week: Eu,
  weekdays: Gu,
  weekdaysMin: Hu,
  weekdaysShort: zc,
  meridiemParse: xf
};
var Qe = {};
var ja = {};
var ti;
function df(o, r) {
  var t;
  var e = Math.min(o.length, r.length);
  for (t = 0; t < e; t += 1) {
    if (o[t] !== r[t]) {
      return t;
    }
  }
  return e;
}
function o0(o) {
  return o && o.toLowerCase().replace("_", "-");
}
function hf(o) {
  for (var r = 0, t, e, a, c; r < o.length;) {
    c = o0(o[r]).split("-");
    t = c.length;
    e = o0(o[r + 1]);
    e = e ? e.split("-") : null;
    while (t > 0) {
      a = Yl(c.slice(0, t).join("-"));
      if (a) {
        return a;
      }
      if (e && e.length >= t && df(c, e) >= t - 1) {
        break;
      }
      t--;
    }
    r++;
  }
  return ti;
}
function mf(o) {
  return !!o && !!o.match("^[^/\\\\]*$");
}
function Yl(o) {
  var r = null;
  var t;
  if (Qe[o] === undefined && typeof module !== "undefined" && module && module.exports && mf(o)) {
    try {
      r = ti._abbr;
      t = require;
      t("./locale/" + o);
      Er(r);
    } catch {
      Qe[o] = null;
    }
  }
  return Qe[o];
}
function Er(o, r) {
  var t;
  if (o) {
    if (mt(r)) {
      t = Ds(o);
    } else {
      t = Do(o, r);
    }
    if (t) {
      ti = t;
    } else if (typeof console !== "undefined" && console.warn) {
      console.warn("Locale " + o + " not found. Did you forget to load it?");
    }
  }
  return ti._abbr;
}
function Do(o, r) {
  if (r !== null) {
    var t;
    var e = Qc;
    r.abbr = o;
    if (Qe[o] != null) {
      Bc("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
      e = Qe[o]._config;
    } else if (r.parentLocale != null) {
      if (Qe[r.parentLocale] != null) {
        e = Qe[r.parentLocale]._config;
      } else {
        t = Yl(r.parentLocale);
        if (t != null) {
          e = t._config;
        } else {
          ja[r.parentLocale] ||= [];
          ja[r.parentLocale].push({
            name: o,
            config: r
          });
          return null;
        }
      }
    }
    Qe[o] = new Co(co(e, r));
    if (ja[o]) {
      ja[o].forEach(function (a) {
        Do(a.name, a.config);
      });
    }
    Er(o);
    return Qe[o];
  } else {
    delete Qe[o];
    return null;
  }
}
function Af(o, r) {
  if (r != null) {
    var t;
    var e;
    var a = Qc;
    if (Qe[o] != null && Qe[o].parentLocale != null) {
      Qe[o].set(co(Qe[o]._config, r));
    } else {
      e = Yl(o);
      if (e != null) {
        a = e._config;
      }
      r = co(a, r);
      if (e == null) {
        r.abbr = o;
      }
      t = new Co(r);
      t.parentLocale = Qe[o];
      Qe[o] = t;
    }
    Er(o);
  } else if (Qe[o] != null) {
    if (Qe[o].parentLocale != null) {
      Qe[o] = Qe[o].parentLocale;
      if (o === Er()) {
        Er(o);
      }
    } else if (Qe[o] != null) {
      delete Qe[o];
    }
  }
  return Qe[o];
}
function Ds(o) {
  var r;
  if (o && o._locale && o._locale._abbr) {
    o = o._locale._abbr;
  }
  if (!o) {
    return ti;
  }
  if (!Qt(o)) {
    r = Yl(o);
    if (r) {
      return r;
    }
    o = [o];
  }
  return hf(o);
}
function Wf() {
  return xo(Qe);
}
function Ro(o) {
  var r;
  var t = o._a;
  if (t && Re(o).overflow === -2) {
    r = t[Is] < 0 || t[Is] > 11 ? Is : t[ns] < 1 || t[ns] > yo(t[xt], t[Is]) ? ns : t[st] < 0 || t[st] > 24 || t[st] === 24 && (t[Ht] !== 0 || t[Ss] !== 0 || t[da] !== 0) ? st : t[Ht] < 0 || t[Ht] > 59 ? Ht : t[Ss] < 0 || t[Ss] > 59 ? Ss : t[da] < 0 || t[da] > 999 ? da : -1;
    if (Re(o)._overflowDayOfYear && (r < xt || r > ns)) {
      r = ns;
    }
    if (Re(o)._overflowWeeks && r === -1) {
      r = bu;
    }
    if (Re(o)._overflowWeekday && r === -1) {
      r = gu;
    }
    Re(o).overflow = r;
  }
  return o;
}
var pf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var vf = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var bf = /Z|[+-]\d\d(?::?\d\d)?/;
var hl = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, false], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, false], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, false], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, false], ["YYYY", /\d{4}/, false]];
var $l = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]];
var gf = /^\/?Date\((-?\d+)/i;
var Cf = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
var kf = {
  UT: 0,
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};
function Xc(o) {
  var r;
  var t;
  var e = o._i;
  var a = pf.exec(e) || vf.exec(e);
  var c;
  var v;
  var p;
  var C;
  var d = hl.length;
  var b = $l.length;
  if (a) {
    Re(o).iso = true;
    r = 0;
    t = d;
    for (; r < t; r++) {
      if (hl[r][1].exec(a[1])) {
        v = hl[r][0];
        c = hl[r][2] !== false;
        break;
      }
    }
    if (v == null) {
      o._isValid = false;
      return;
    }
    if (a[3]) {
      r = 0;
      t = b;
      for (; r < t; r++) {
        if ($l[r][1].exec(a[3])) {
          p = (a[2] || " ") + $l[r][0];
          break;
        }
      }
      if (p == null) {
        o._isValid = false;
        return;
      }
    }
    if (!c && p != null) {
      o._isValid = false;
      return;
    }
    if (a[4]) {
      if (bf.exec(a[4])) {
        C = "Z";
      } else {
        o._isValid = false;
        return;
      }
    }
    o._f = v + (p || "") + (C || "");
    Oo(o);
  } else {
    o._isValid = false;
  }
}
function wf(o, r, t, e, a, c) {
  var v = [_f(o), Ec.indexOf(r), parseInt(t, 10), parseInt(e, 10), parseInt(a, 10)];
  if (c) {
    v.push(parseInt(c, 10));
  }
  return v;
}
function _f(o) {
  var r = parseInt(o, 10);
  if (r <= 49) {
    return 2000 + r;
  } else if (r <= 999) {
    return 1900 + r;
  } else {
    return r;
  }
}
function If(o) {
  return o.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Sf(o, r, t) {
  if (o) {
    var e = zc.indexOf(o);
    var a = new Date(r[0], r[1], r[2]).getDay();
    if (e !== a) {
      Re(t).weekdayMismatch = true;
      t._isValid = false;
      return false;
    }
  }
  return true;
}
function yf(o, r, t) {
  if (o) {
    return kf[o];
  }
  if (r) {
    return 0;
  }
  var e = parseInt(t, 10);
  var a = e % 100;
  var c = (e - a) / 100;
  return c * 60 + a;
}
function Zc(o) {
  var r = Cf.exec(If(o._i));
  var t;
  if (r) {
    t = wf(r[4], r[3], r[2], r[5], r[6], r[7]);
    if (!Sf(r[1], t, o)) {
      return;
    }
    o._a = t;
    o._tzm = yf(r[8], r[9], r[10]);
    o._d = $a.apply(null, o._a);
    o._d.setUTCMinutes(o._d.getUTCMinutes() - o._tzm);
    Re(o).rfc2822 = true;
  } else {
    o._isValid = false;
  }
}
function Tf(o) {
  var r = gf.exec(o._i);
  if (r !== null) {
    o._d = new Date(+r[1]);
    return;
  }
  Xc(o);
  if (o._isValid === false) {
    delete o._isValid;
  } else {
    return;
  }
  Zc(o);
  if (o._isValid === false) {
    delete o._isValid;
  } else {
    return;
  }
  if (o._strict) {
    o._isValid = false;
  } else {
    fe.createFromInputFallback(o);
  }
}
fe.createFromInputFallback = Rt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (o) {
  o._d = new Date(o._i + (o._useUTC ? " UTC" : ""));
});
function Da(o, r, t) {
  return o ?? r ?? t;
}
function Bf(o) {
  var r = new Date(fe.now());
  if (o._useUTC) {
    return [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()];
  } else {
    return [r.getFullYear(), r.getMonth(), r.getDate()];
  }
}
function Yo(o) {
  var r;
  var t;
  var e = [];
  var a;
  var c;
  var v;
  if (!o._d) {
    a = Bf(o);
    if (o._w && o._a[ns] == null && o._a[Is] == null) {
      Mf(o);
    }
    if (o._dayOfYear != null) {
      v = Da(o._a[xt], a[xt]);
      if (o._dayOfYear > Fa(v) || o._dayOfYear === 0) {
        Re(o)._overflowDayOfYear = true;
      }
      t = $a(v, 0, o._dayOfYear);
      o._a[Is] = t.getUTCMonth();
      o._a[ns] = t.getUTCDate();
    }
    r = 0;
    for (; r < 3 && o._a[r] == null; ++r) {
      o._a[r] = e[r] = a[r];
    }
    for (; r < 7; r++) {
      o._a[r] = e[r] = o._a[r] == null ? r === 2 ? 1 : 0 : o._a[r];
    }
    if (o._a[st] === 24 && o._a[Ht] === 0 && o._a[Ss] === 0 && o._a[da] === 0) {
      o._nextDay = true;
      o._a[st] = 0;
    }
    o._d = (o._useUTC ? $a : Lu).apply(null, e);
    c = o._useUTC ? o._d.getUTCDay() : o._d.getDay();
    if (o._tzm != null) {
      o._d.setUTCMinutes(o._d.getUTCMinutes() - o._tzm);
    }
    if (o._nextDay) {
      o._a[st] = 24;
    }
    if (o._w && typeof o._w.d !== "undefined" && o._w.d !== c) {
      Re(o).weekdayMismatch = true;
    }
  }
}
function Mf(o) {
  var r;
  var t;
  var e;
  var a;
  var c;
  var v;
  var p;
  var C;
  var d;
  r = o._w;
  if (r.GG != null || r.W != null || r.E != null) {
    c = 1;
    v = 4;
    t = Da(r.GG, o._a[xt], ei(ze(), 1, 4).year);
    e = Da(r.W, 1);
    a = Da(r.E, 1);
    if (a < 1 || a > 7) {
      C = true;
    }
  } else {
    c = o._locale._week.dow;
    v = o._locale._week.doy;
    d = ei(ze(), c, v);
    t = Da(r.gg, o._a[xt], d.year);
    e = Da(r.w, d.week);
    if (r.d != null) {
      a = r.d;
      if (a < 0 || a > 6) {
        C = true;
      }
    } else if (r.e != null) {
      a = r.e + c;
      if (r.e < 0 || r.e > 6) {
        C = true;
      }
    } else {
      a = c;
    }
  }
  if (e < 1 || e > Bs(t, c, v)) {
    Re(o)._overflowWeeks = true;
  } else if (C != null) {
    Re(o)._overflowWeekday = true;
  } else {
    p = jc(t, e, a, c, v);
    o._a[xt] = p.year;
    o._dayOfYear = p.dayOfYear;
  }
}
fe.ISO_8601 = function () {};
fe.RFC_2822 = function () {};
function Oo(o) {
  if (o._f === fe.ISO_8601) {
    Xc(o);
    return;
  }
  if (o._f === fe.RFC_2822) {
    Zc(o);
    return;
  }
  o._a = [];
  Re(o).empty = true;
  var r = "" + o._i;
  var t;
  var e;
  var a;
  var c;
  var v;
  var p = r.length;
  var C = 0;
  var d;
  var b;
  a = Mc(o._f, o._locale).match(ko) || [];
  b = a.length;
  t = 0;
  for (; t < b; t++) {
    c = a[t];
    e = (r.match(Wu(c, o)) || [])[0];
    if (e) {
      v = r.substr(0, r.indexOf(e));
      if (v.length > 0) {
        Re(o).unusedInput.push(v);
      }
      r = r.slice(r.indexOf(e) + e.length);
      C += e.length;
    }
    if (Ya[c]) {
      if (e) {
        Re(o).empty = false;
      } else {
        Re(o).unusedTokens.push(c);
      }
      vu(c, e, o);
    } else if (o._strict && !e) {
      Re(o).unusedTokens.push(c);
    }
  }
  Re(o).charsLeftOver = p - C;
  if (r.length > 0) {
    Re(o).unusedInput.push(r);
  }
  if (o._a[st] <= 12 && Re(o).bigHour === true && o._a[st] > 0) {
    Re(o).bigHour = undefined;
  }
  Re(o).parsedDateParts = o._a.slice(0);
  Re(o).meridiem = o._meridiem;
  o._a[st] = Df(o._locale, o._a[st], o._meridiem);
  d = Re(o).era;
  if (d !== null) {
    o._a[xt] = o._locale.erasConvertYear(d, o._a[xt]);
  }
  Yo(o);
  Ro(o);
}
function Df(o, r, t) {
  var e;
  if (t == null) {
    return r;
  } else if (o.meridiemHour != null) {
    return o.meridiemHour(r, t);
  } else {
    if (o.isPM != null) {
      e = o.isPM(t);
      if (e && r < 12) {
        r += 12;
      }
      if (!e && r === 12) {
        r = 0;
      }
    }
    return r;
  }
}
function Rf(o) {
  var r;
  var t;
  var e;
  var a;
  var c;
  var v;
  var p = false;
  var C = o._f.length;
  if (C === 0) {
    Re(o).invalidFormat = true;
    o._d = new Date(NaN);
    return;
  }
  for (a = 0; a < C; a++) {
    c = 0;
    v = false;
    r = go({}, o);
    if (o._useUTC != null) {
      r._useUTC = o._useUTC;
    }
    r._f = o._f[a];
    Oo(r);
    if (bo(r)) {
      v = true;
    }
    c += Re(r).charsLeftOver;
    c += Re(r).unusedTokens.length * 10;
    Re(r).score = c;
    if (p) {
      if (c < e) {
        e = c;
        t = r;
      }
    } else if (e == null || c < e || v) {
      e = c;
      t = r;
      if (v) {
        p = true;
      }
    }
  }
  Lr(o, t || r);
}
function Yf(o) {
  if (!o._d) {
    var r = wo(o._i);
    var t = r.day === undefined ? r.date : r.day;
    o._a = yc([r.year, r.month, t, r.hour, r.minute, r.second, r.millisecond], function (e) {
      return e && parseInt(e, 10);
    });
    Yo(o);
  }
}
function Of(o) {
  var r = new al(Ro(Fc(o)));
  if (r._nextDay) {
    r.add(1, "d");
    r._nextDay = undefined;
  }
  return r;
}
function Fc(o) {
  var r = o._i;
  var t = o._f;
  o._locale = o._locale || Ds(o._l);
  if (r === null || t === undefined && r === "") {
    return Sl({
      nullInput: true
    });
  } else {
    if (typeof r == "string") {
      o._i = r = o._locale.preparse(r);
    }
    if (Xt(r)) {
      return new al(Ro(r));
    } else {
      if (rl(r)) {
        o._d = r;
      } else if (Qt(t)) {
        Rf(o);
      } else if (t) {
        Oo(o);
      } else {
        Lf(o);
      }
      if (!bo(o)) {
        o._d = null;
      }
      return o;
    }
  }
}
function Lf(o) {
  var r = o._i;
  if (mt(r)) {
    o._d = new Date(fe.now());
  } else if (rl(r)) {
    o._d = new Date(r.valueOf());
  } else if (typeof r == "string") {
    Tf(o);
  } else if (Qt(r)) {
    o._a = yc(r.slice(0), function (t) {
      return parseInt(t, 10);
    });
    Yo(o);
  } else if (ha(r)) {
    Yf(o);
  } else if (Ms(r)) {
    o._d = new Date(r);
  } else {
    fe.createFromInputFallback(o);
  }
}
function Jc(o, r, t, e, a) {
  var c = {};
  if (r === true || r === false) {
    e = r;
    r = undefined;
  }
  if (t === true || t === false) {
    e = t;
    t = undefined;
  }
  if (ha(o) && vo(o) || Qt(o) && o.length === 0) {
    o = undefined;
  }
  c._isAMomentObject = true;
  c._useUTC = c._isUTC = a;
  c._l = t;
  c._i = o;
  c._f = r;
  c._strict = e;
  return Of(c);
}
function ze(o, r, t, e) {
  return Jc(o, r, t, e, false);
}
var Pf = Rt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
  var o = ze.apply(null, arguments);
  if (this.isValid() && o.isValid()) {
    if (o < this) {
      return this;
    } else {
      return o;
    }
  } else {
    return Sl();
  }
});
var Ef = Rt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
  var o = ze.apply(null, arguments);
  if (this.isValid() && o.isValid()) {
    if (o > this) {
      return this;
    } else {
      return o;
    }
  } else {
    return Sl();
  }
});
function Kc(o, r) {
  var t;
  var e;
  if (r.length === 1 && Qt(r[0])) {
    r = r[0];
  }
  if (!r.length) {
    return ze();
  }
  t = r[0];
  e = 1;
  for (; e < r.length; ++e) {
    if (!r[e].isValid() || r[e][o](t)) {
      t = r[e];
    }
  }
  return t;
}
function Nf() {
  var o = [].slice.call(arguments, 0);
  return Kc("isBefore", o);
}
function Vf() {
  var o = [].slice.call(arguments, 0);
  return Kc("isAfter", o);
}
function qf() {
  if (Date.now) {
    return Date.now();
  } else {
    return +new Date();
  }
}
var za = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
function Uf(o) {
  var r;
  var t = false;
  var e;
  var a = za.length;
  for (r in o) {
    if (qe(o, r) && ($e.call(za, r) === -1 || o[r] != null && !!isNaN(o[r]))) {
      return false;
    }
  }
  for (e = 0; e < a; ++e) {
    if (o[za[e]]) {
      if (t) {
        return false;
      }
      if (parseFloat(o[za[e]]) !== Le(o[za[e]])) {
        t = true;
      }
    }
  }
  return true;
}
function jf() {
  return this._isValid;
}
function zf() {
  return Ft(NaN);
}
function Ol(o) {
  var r = wo(o);
  var t = r.year || 0;
  var e = r.quarter || 0;
  var a = r.month || 0;
  var c = r.week || r.isoWeek || 0;
  var v = r.day || 0;
  var p = r.hour || 0;
  var C = r.minute || 0;
  var d = r.second || 0;
  var b = r.millisecond || 0;
  this._isValid = Uf(r);
  this._milliseconds = +b + d * 1000 + C * 60000 + p * 1000 * 60 * 60;
  this._days = +v + c * 7;
  this._months = +a + e * 3 + t * 12;
  this._data = {};
  this._locale = Ds();
  this._bubble();
}
function pl(o) {
  return o instanceof Ol;
}
function fo(o) {
  if (o < 0) {
    return Math.round(o * -1) * -1;
  } else {
    return Math.round(o);
  }
}
function Gf(o, r, t) {
  var e = Math.min(o.length, r.length);
  var a = Math.abs(o.length - r.length);
  var c = 0;
  var v;
  for (v = 0; v < e; v++) {
    if (t && o[v] !== r[v] || !t && Le(o[v]) !== Le(r[v])) {
      c++;
    }
  }
  return c + a;
}
function $c(o, r) {
  we(o, 0, 0, function () {
    var t = this.utcOffset();
    var e = "+";
    if (t < 0) {
      t = -t;
      e = "-";
    }
    return e + ss(~~(t / 60), 2) + r + ss(~~t % 60, 2);
  });
}
$c("Z", ":");
$c("ZZ", "");
pe("Z", Dl);
pe("ZZ", Dl);
je(["Z", "ZZ"], function (o, r, t) {
  t._useUTC = true;
  t._tzm = Lo(Dl, o);
});
var Hf = /([\+\-]|\d\d)/gi;
function Lo(o, r) {
  var t = (r || "").match(o);
  var e;
  var a;
  var c;
  if (t === null) {
    return null;
  } else {
    e = t[t.length - 1] || [];
    a = (e + "").match(Hf) || ["-", 0, 0];
    c = +(a[1] * 60) + Le(a[2]);
    if (c === 0) {
      return 0;
    } else if (a[0] === "+") {
      return c;
    } else {
      return -c;
    }
  }
}
function Po(o, r) {
  var t;
  var e;
  if (r._isUTC) {
    t = r.clone();
    e = (Xt(o) || rl(o) ? o.valueOf() : ze(o).valueOf()) - t.valueOf();
    t._d.setTime(t._d.valueOf() + e);
    fe.updateOffset(t, false);
    return t;
  } else {
    return ze(o).local();
  }
}
function ho(o) {
  return -Math.round(o._d.getTimezoneOffset());
}
fe.updateOffset = function () {};
function Qf(o, r, t) {
  var e = this._offset || 0;
  var a;
  if (!this.isValid()) {
    if (o != null) {
      return this;
    } else {
      return NaN;
    }
  }
  if (o != null) {
    if (typeof o == "string") {
      o = Lo(Dl, o);
      if (o === null) {
        return this;
      }
    } else if (Math.abs(o) < 16 && !t) {
      o = o * 60;
    }
    if (!this._isUTC && r) {
      a = ho(this);
    }
    this._offset = o;
    this._isUTC = true;
    if (a != null) {
      this.add(a, "m");
    }
    if (e !== o) {
      if (!r || this._changeInProgress) {
        nx(this, Ft(o - e, "m"), 1, false);
      } else if (!this._changeInProgress) {
        this._changeInProgress = true;
        fe.updateOffset(this, true);
        this._changeInProgress = null;
      }
    }
    return this;
  } else if (this._isUTC) {
    return e;
  } else {
    return ho(this);
  }
}
function Xf(o, r) {
  if (o != null) {
    if (typeof o != "string") {
      o = -o;
    }
    this.utcOffset(o, r);
    return this;
  } else {
    return -this.utcOffset();
  }
}
function Zf(o) {
  return this.utcOffset(0, o);
}
function Ff(o) {
  if (this._isUTC) {
    this.utcOffset(0, o);
    this._isUTC = false;
    if (o) {
      this.subtract(ho(this), "m");
    }
  }
  return this;
}
function Jf() {
  if (this._tzm != null) {
    this.utcOffset(this._tzm, false, true);
  } else if (typeof this._i == "string") {
    var o = Lo(mu, this._i);
    if (o != null) {
      this.utcOffset(o);
    } else {
      this.utcOffset(0, true);
    }
  }
  return this;
}
function Kf(o) {
  if (this.isValid()) {
    o = o ? ze(o).utcOffset() : 0;
    return (this.utcOffset() - o) % 60 === 0;
  } else {
    return false;
  }
}
function $f() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function ed() {
  if (!mt(this._isDSTShifted)) {
    return this._isDSTShifted;
  }
  var o = {};
  var r;
  go(o, this);
  o = Fc(o);
  if (o._a) {
    r = o._isUTC ? rs(o._a) : ze(o._a);
    this._isDSTShifted = this.isValid() && Gf(o._a, r.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }
  return this._isDSTShifted;
}
function td() {
  if (this.isValid()) {
    return !this._isUTC;
  } else {
    return false;
  }
}
function nd() {
  if (this.isValid()) {
    return this._isUTC;
  } else {
    return false;
  }
}
function ex() {
  if (this.isValid()) {
    return this._isUTC && this._offset === 0;
  } else {
    return false;
  }
}
var sd = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/;
var rd = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Ft(o, r) {
  var t = o;
  var e = null;
  var a;
  var c;
  var v;
  if (pl(o)) {
    t = {
      ms: o._milliseconds,
      d: o._days,
      M: o._months
    };
  } else if (Ms(o) || !isNaN(+o)) {
    t = {};
    if (r) {
      t[r] = +o;
    } else {
      t.milliseconds = +o;
    }
  } else if (e = sd.exec(o)) {
    a = e[1] === "-" ? -1 : 1;
    t = {
      y: 0,
      d: Le(e[ns]) * a,
      h: Le(e[st]) * a,
      m: Le(e[Ht]) * a,
      s: Le(e[Ss]) * a,
      ms: Le(fo(e[da] * 1000)) * a
    };
  } else if (e = rd.exec(o)) {
    a = e[1] === "-" ? -1 : 1;
    t = {
      y: zr(e[2], a),
      M: zr(e[3], a),
      w: zr(e[4], a),
      d: zr(e[5], a),
      h: zr(e[6], a),
      m: zr(e[7], a),
      s: zr(e[8], a)
    };
  } else if (t == null) {
    t = {};
  } else if (typeof t == "object" && ("from" in t || "to" in t)) {
    v = ad(ze(t.from), ze(t.to));
    t = {};
    t.ms = v.milliseconds;
    t.M = v.months;
  }
  c = new Ol(t);
  if (pl(o) && qe(o, "_locale")) {
    c._locale = o._locale;
  }
  if (pl(o) && qe(o, "_isValid")) {
    c._isValid = o._isValid;
  }
  return c;
}
Ft.fn = Ol.prototype;
Ft.invalid = zf;
function zr(o, r) {
  var t = o && parseFloat(o.replace(",", "."));
  return (isNaN(t) ? 0 : t) * r;
}
function c0(o, r) {
  var t = {};
  t.months = r.month() - o.month() + (r.year() - o.year()) * 12;
  if (o.clone().add(t.months, "M").isAfter(r)) {
    --t.months;
  }
  t.milliseconds = +r - +o.clone().add(t.months, "M");
  return t;
}
function ad(o, r) {
  var t;
  if (o.isValid() && r.isValid()) {
    r = Po(r, o);
    if (o.isBefore(r)) {
      t = c0(o, r);
    } else {
      t = c0(r, o);
      t.milliseconds = -t.milliseconds;
      t.months = -t.months;
    }
    return t;
  } else {
    return {
      milliseconds: 0,
      months: 0
    };
  }
}
function tx(o, r) {
  return function (t, e) {
    var a;
    var c;
    if (e !== null && !isNaN(+e)) {
      Bc(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
      c = t;
      t = e;
      e = c;
    }
    a = Ft(t, e);
    nx(this, a, o);
    return this;
  };
}
function nx(o, r, t, e) {
  var a = r._milliseconds;
  var c = fo(r._days);
  var v = fo(r._months);
  if (o.isValid()) {
    e = e ?? true;
    if (v) {
      Vc(o, Ka(o, "Month") + v * t);
    }
    if (c) {
      Pc(o, "Date", Ka(o, "Date") + c * t);
    }
    if (a) {
      o._d.setTime(o._d.valueOf() + a * t);
    }
    if (e) {
      fe.updateOffset(o, c || v);
    }
  }
}
var id = tx(1, "add");
var ld = tx(-1, "subtract");
function sx(o) {
  return typeof o == "string" || o instanceof String;
}
function od(o) {
  return Xt(o) || rl(o) || sx(o) || Ms(o) || xd(o) || cd(o) || o === null || o === undefined;
}
function cd(o) {
  var r = ha(o) && !vo(o);
  var t = false;
  var e = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
  var a;
  var c;
  var v = e.length;
  for (a = 0; a < v; a += 1) {
    c = e[a];
    t = t || qe(o, c);
  }
  return r && t;
}
function xd(o) {
  var r = Qt(o);
  var t = false;
  if (r) {
    t = o.filter(function (e) {
      return !Ms(e) && sx(o);
    }).length === 0;
  }
  return r && t;
}
function ud(o) {
  var r = ha(o) && !vo(o);
  var t = false;
  var e = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
  var a;
  var c;
  for (a = 0; a < e.length; a += 1) {
    c = e[a];
    t = t || qe(o, c);
  }
  return r && t;
}
function fd(o, r) {
  var t = o.diff(r, "days", true);
  if (t < -6) {
    return "sameElse";
  } else if (t < -1) {
    return "lastWeek";
  } else if (t < 0) {
    return "lastDay";
  } else if (t < 1) {
    return "sameDay";
  } else if (t < 2) {
    return "nextDay";
  } else if (t < 7) {
    return "nextWeek";
  } else {
    return "sameElse";
  }
}
function dd(o, r) {
  if (arguments.length === 1) {
    if (arguments[0]) {
      if (od(arguments[0])) {
        o = arguments[0];
        r = undefined;
      } else if (ud(arguments[0])) {
        r = arguments[0];
        o = undefined;
      }
    } else {
      o = undefined;
      r = undefined;
    }
  }
  var t = o || ze();
  var e = Po(t, this).startOf("day");
  var a = fe.calendarFormat(this, e) || "sameElse";
  var c = r && (as(r[a]) ? r[a].call(this, t) : r[a]);
  return this.format(c || this.localeData().calendar(a, this, ze(t)));
}
function hd() {
  return new al(this);
}
function md(o, r) {
  var t = Xt(o) ? o : ze(o);
  if (this.isValid() && t.isValid()) {
    r = Yt(r) || "millisecond";
    if (r === "millisecond") {
      return this.valueOf() > t.valueOf();
    } else {
      return t.valueOf() < this.clone().startOf(r).valueOf();
    }
  } else {
    return false;
  }
}
function Ad(o, r) {
  var t = Xt(o) ? o : ze(o);
  if (this.isValid() && t.isValid()) {
    r = Yt(r) || "millisecond";
    if (r === "millisecond") {
      return this.valueOf() < t.valueOf();
    } else {
      return this.clone().endOf(r).valueOf() < t.valueOf();
    }
  } else {
    return false;
  }
}
function Wd(o, r, t, e) {
  var a = Xt(o) ? o : ze(o);
  var c = Xt(r) ? r : ze(r);
  if (this.isValid() && a.isValid() && c.isValid()) {
    e = e || "()";
    return (e[0] === "(" ? this.isAfter(a, t) : !this.isBefore(a, t)) && (e[1] === ")" ? this.isBefore(c, t) : !this.isAfter(c, t));
  } else {
    return false;
  }
}
function pd(o, r) {
  var t = Xt(o) ? o : ze(o);
  var e;
  if (this.isValid() && t.isValid()) {
    r = Yt(r) || "millisecond";
    if (r === "millisecond") {
      return this.valueOf() === t.valueOf();
    } else {
      e = t.valueOf();
      return this.clone().startOf(r).valueOf() <= e && e <= this.clone().endOf(r).valueOf();
    }
  } else {
    return false;
  }
}
function vd(o, r) {
  return this.isSame(o, r) || this.isAfter(o, r);
}
function bd(o, r) {
  return this.isSame(o, r) || this.isBefore(o, r);
}
function gd(o, r, t) {
  var e;
  var a;
  var c;
  if (!this.isValid()) {
    return NaN;
  }
  e = Po(o, this);
  if (!e.isValid()) {
    return NaN;
  }
  a = (e.utcOffset() - this.utcOffset()) * 60000;
  r = Yt(r);
  switch (r) {
    case "year":
      c = vl(this, e) / 12;
      break;
    case "month":
      c = vl(this, e);
      break;
    case "quarter":
      c = vl(this, e) / 3;
      break;
    case "second":
      c = (this - e) / 1000;
      break;
    case "minute":
      c = (this - e) / 60000;
      break;
    case "hour":
      c = (this - e) / 3600000;
      break;
    case "day":
      c = (this - e - a) / 86400000;
      break;
    case "week":
      c = (this - e - a) / 604800000;
      break;
    default:
      c = this - e;
  }
  if (t) {
    return c;
  } else {
    return Bt(c);
  }
}
function vl(o, r) {
  if (o.date() < r.date()) {
    return -vl(r, o);
  }
  var t = (r.year() - o.year()) * 12 + (r.month() - o.month());
  var e = o.clone().add(t, "months");
  var a;
  var c;
  if (r - e < 0) {
    a = o.clone().add(t - 1, "months");
    c = (r - e) / (e - a);
  } else {
    a = o.clone().add(t + 1, "months");
    c = (r - e) / (a - e);
  }
  return -(t + c) || 0;
}
fe.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
fe.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Cd() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function kd(o) {
  if (!this.isValid()) {
    return null;
  }
  var r = o !== true;
  var t = r ? this.clone().utc() : this;
  if (t.year() < 0 || t.year() > 9999) {
    return Wl(t, r ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
  } else if (as(Date.prototype.toISOString)) {
    if (r) {
      return this.toDate().toISOString();
    } else {
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace("Z", Wl(t, "Z"));
    }
  } else {
    return Wl(t, r ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
}
function wd() {
  if (!this.isValid()) {
    return "moment.invalid(/* " + this._i + " */)";
  }
  var o = "moment";
  var r = "";
  var t;
  var e;
  var a;
  var c;
  if (!this.isLocal()) {
    o = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
    r = "Z";
  }
  t = "[" + o + "(\"]";
  e = this.year() >= 0 && this.year() <= 9999 ? "YYYY" : "YYYYYY";
  a = "-MM-DD[T]HH:mm:ss.SSS";
  c = r + "[\")]";
  return this.format(t + e + a + c);
}
function _d(o) {
  o ||= this.isUtc() ? fe.defaultFormatUtc : fe.defaultFormat;
  var r = Wl(this, o);
  return this.localeData().postformat(r);
}
function Id(o, r) {
  if (this.isValid() && (Xt(o) && o.isValid() || ze(o).isValid())) {
    return Ft({
      to: this,
      from: o
    }).locale(this.locale()).humanize(!r);
  } else {
    return this.localeData().invalidDate();
  }
}
function Sd(o) {
  return this.from(ze(), o);
}
function yd(o, r) {
  if (this.isValid() && (Xt(o) && o.isValid() || ze(o).isValid())) {
    return Ft({
      from: this,
      to: o
    }).locale(this.locale()).humanize(!r);
  } else {
    return this.localeData().invalidDate();
  }
}
function Td(o) {
  return this.to(ze(), o);
}
function rx(o) {
  var r;
  if (o === undefined) {
    return this._locale._abbr;
  } else {
    r = Ds(o);
    if (r != null) {
      this._locale = r;
    }
    return this;
  }
}
var ax = Rt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (o) {
  if (o === undefined) {
    return this.localeData();
  } else {
    return this.locale(o);
  }
});
function ix() {
  return this._locale;
}
var Cl = 1000;
var Oa = Cl * 60;
var kl = Oa * 60;
var lx = kl * 3506328;
function La(o, r) {
  return (o % r + r) % r;
}
function ox(o, r, t) {
  if (o < 100 && o >= 0) {
    return new Date(o + 400, r, t) - lx;
  } else {
    return new Date(o, r, t).valueOf();
  }
}
function cx(o, r, t) {
  if (o < 100 && o >= 0) {
    return Date.UTC(o + 400, r, t) - lx;
  } else {
    return Date.UTC(o, r, t);
  }
}
function Bd(o) {
  var r;
  var t;
  o = Yt(o);
  if (o === undefined || o === "millisecond" || !this.isValid()) {
    return this;
  }
  t = this._isUTC ? cx : ox;
  switch (o) {
    case "year":
      r = t(this.year(), 0, 1);
      break;
    case "quarter":
      r = t(this.year(), this.month() - this.month() % 3, 1);
      break;
    case "month":
      r = t(this.year(), this.month(), 1);
      break;
    case "week":
      r = t(this.year(), this.month(), this.date() - this.weekday());
      break;
    case "isoWeek":
      r = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;
    case "day":
    case "date":
      r = t(this.year(), this.month(), this.date());
      break;
    case "hour":
      r = this._d.valueOf();
      r -= La(r + (this._isUTC ? 0 : this.utcOffset() * Oa), kl);
      break;
    case "minute":
      r = this._d.valueOf();
      r -= La(r, Oa);
      break;
    case "second":
      r = this._d.valueOf();
      r -= La(r, Cl);
      break;
  }
  this._d.setTime(r);
  fe.updateOffset(this, true);
  return this;
}
function Md(o) {
  var r;
  var t;
  o = Yt(o);
  if (o === undefined || o === "millisecond" || !this.isValid()) {
    return this;
  }
  t = this._isUTC ? cx : ox;
  switch (o) {
    case "year":
      r = t(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      r = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
      break;
    case "month":
      r = t(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      r = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;
    case "isoWeek":
      r = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
      break;
    case "day":
    case "date":
      r = t(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      r = this._d.valueOf();
      r += kl - La(r + (this._isUTC ? 0 : this.utcOffset() * Oa), kl) - 1;
      break;
    case "minute":
      r = this._d.valueOf();
      r += Oa - La(r, Oa) - 1;
      break;
    case "second":
      r = this._d.valueOf();
      r += Cl - La(r, Cl) - 1;
      break;
  }
  this._d.setTime(r);
  fe.updateOffset(this, true);
  return this;
}
function Dd() {
  return this._d.valueOf() - (this._offset || 0) * 60000;
}
function Rd() {
  return Math.floor(this.valueOf() / 1000);
}
function Yd() {
  return new Date(this.valueOf());
}
function Od() {
  var o = this;
  return [o.year(), o.month(), o.date(), o.hour(), o.minute(), o.second(), o.millisecond()];
}
function Ld() {
  var o = this;
  return {
    years: o.year(),
    months: o.month(),
    date: o.date(),
    hours: o.hours(),
    minutes: o.minutes(),
    seconds: o.seconds(),
    milliseconds: o.milliseconds()
  };
}
function Pd() {
  if (this.isValid()) {
    return this.toISOString();
  } else {
    return null;
  }
}
function Ed() {
  return bo(this);
}
function Nd() {
  return Lr({}, Re(this));
}
function Vd() {
  return Re(this).overflow;
}
function qd() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
we("N", 0, 0, "eraAbbr");
we("NN", 0, 0, "eraAbbr");
we("NNN", 0, 0, "eraAbbr");
we("NNNN", 0, 0, "eraName");
we("NNNNN", 0, 0, "eraNarrow");
we("y", ["y", 1], "yo", "eraYear");
we("y", ["yy", 2], 0, "eraYear");
we("y", ["yyy", 3], 0, "eraYear");
we("y", ["yyyy", 4], 0, "eraYear");
pe("N", Eo);
pe("NN", Eo);
pe("NNN", Eo);
pe("NNNN", Kd);
pe("NNNNN", $d);
je(["N", "NN", "NNN", "NNNN", "NNNNN"], function (o, r, t, e) {
  var a = t._locale.erasParse(o, e, t._strict);
  if (a) {
    Re(t).era = a;
  } else {
    Re(t).invalidEra = o;
  }
});
pe("y", Ea);
pe("yy", Ea);
pe("yyy", Ea);
pe("yyyy", Ea);
pe("yo", eh);
je(["y", "yy", "yyy", "yyyy"], xt);
je(["yo"], function (o, r, t, e) {
  var a;
  if (t._locale._eraYearOrdinalRegex) {
    a = o.match(t._locale._eraYearOrdinalRegex);
  }
  if (t._locale.eraYearOrdinalParse) {
    r[xt] = t._locale.eraYearOrdinalParse(o, a);
  } else {
    r[xt] = parseInt(o, 10);
  }
});
function Ud(o, r) {
  var t;
  var e;
  var a;
  var c = this._eras || Ds("en")._eras;
  t = 0;
  e = c.length;
  for (; t < e; ++t) {
    switch (typeof c[t].since) {
      case "string":
        a = fe(c[t].since).startOf("day");
        c[t].since = a.valueOf();
        break;
    }
    switch (typeof c[t].until) {
      case "undefined":
        c[t].until = Infinity;
        break;
      case "string":
        a = fe(c[t].until).startOf("day").valueOf();
        c[t].until = a.valueOf();
        break;
    }
  }
  return c;
}
function jd(o, r, t) {
  var e;
  var a;
  var c = this.eras();
  var v;
  var p;
  var C;
  o = o.toUpperCase();
  e = 0;
  a = c.length;
  for (; e < a; ++e) {
    v = c[e].name.toUpperCase();
    p = c[e].abbr.toUpperCase();
    C = c[e].narrow.toUpperCase();
    if (t) {
      switch (r) {
        case "N":
        case "NN":
        case "NNN":
          if (p === o) {
            return c[e];
          }
          break;
        case "NNNN":
          if (v === o) {
            return c[e];
          }
          break;
        case "NNNNN":
          if (C === o) {
            return c[e];
          }
          break;
      }
    } else if ([v, p, C].indexOf(o) >= 0) {
      return c[e];
    }
  }
}
function zd(o, r) {
  var t = o.since <= o.until ? 1 : -1;
  if (r === undefined) {
    return fe(o.since).year();
  } else {
    return fe(o.since).year() + (r - o.offset) * t;
  }
}
function Gd() {
  var o;
  var r;
  var t;
  var e = this.localeData().eras();
  o = 0;
  r = e.length;
  for (; o < r; ++o) {
    t = this.clone().startOf("day").valueOf();
    if (e[o].since <= t && t <= e[o].until || e[o].until <= t && t <= e[o].since) {
      return e[o].name;
    }
  }
  return "";
}
function Hd() {
  var o;
  var r;
  var t;
  var e = this.localeData().eras();
  o = 0;
  r = e.length;
  for (; o < r; ++o) {
    t = this.clone().startOf("day").valueOf();
    if (e[o].since <= t && t <= e[o].until || e[o].until <= t && t <= e[o].since) {
      return e[o].narrow;
    }
  }
  return "";
}
function Qd() {
  var o;
  var r;
  var t;
  var e = this.localeData().eras();
  o = 0;
  r = e.length;
  for (; o < r; ++o) {
    t = this.clone().startOf("day").valueOf();
    if (e[o].since <= t && t <= e[o].until || e[o].until <= t && t <= e[o].since) {
      return e[o].abbr;
    }
  }
  return "";
}
function Xd() {
  var o;
  var r;
  var t;
  var e;
  var a = this.localeData().eras();
  o = 0;
  r = a.length;
  for (; o < r; ++o) {
    t = a[o].since <= a[o].until ? 1 : -1;
    e = this.clone().startOf("day").valueOf();
    if (a[o].since <= e && e <= a[o].until || a[o].until <= e && e <= a[o].since) {
      return (this.year() - fe(a[o].since).year()) * t + a[o].offset;
    }
  }
  return this.year();
}
function Zd(o) {
  if (!qe(this, "_erasNameRegex")) {
    No.call(this);
  }
  if (o) {
    return this._erasNameRegex;
  } else {
    return this._erasRegex;
  }
}
function Fd(o) {
  if (!qe(this, "_erasAbbrRegex")) {
    No.call(this);
  }
  if (o) {
    return this._erasAbbrRegex;
  } else {
    return this._erasRegex;
  }
}
function Jd(o) {
  if (!qe(this, "_erasNarrowRegex")) {
    No.call(this);
  }
  if (o) {
    return this._erasNarrowRegex;
  } else {
    return this._erasRegex;
  }
}
function Eo(o, r) {
  return r.erasAbbrRegex(o);
}
function Kd(o, r) {
  return r.erasNameRegex(o);
}
function $d(o, r) {
  return r.erasNarrowRegex(o);
}
function eh(o, r) {
  return r._eraYearOrdinalRegex || Ea;
}
function No() {
  var o = [];
  var r = [];
  var t = [];
  var e = [];
  var a;
  var c;
  var v;
  var p;
  var C;
  var d = this.eras();
  a = 0;
  c = d.length;
  for (; a < c; ++a) {
    v = Ts(d[a].name);
    p = Ts(d[a].abbr);
    C = Ts(d[a].narrow);
    r.push(v);
    o.push(p);
    t.push(C);
    e.push(v);
    e.push(p);
    e.push(C);
  }
  this._erasRegex = new RegExp("^(" + e.join("|") + ")", "i");
  this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i");
  this._erasAbbrRegex = new RegExp("^(" + o.join("|") + ")", "i");
  this._erasNarrowRegex = new RegExp("^(" + t.join("|") + ")", "i");
}
we(0, ["gg", 2], 0, function () {
  return this.weekYear() % 100;
});
we(0, ["GG", 2], 0, function () {
  return this.isoWeekYear() % 100;
});
function Ll(o, r) {
  we(0, [o, o.length], 0, r);
}
Ll("gggg", "weekYear");
Ll("ggggg", "weekYear");
Ll("GGGG", "isoWeekYear");
Ll("GGGGG", "isoWeekYear");
pe("G", Ml);
pe("g", Ml);
pe("GG", Ge, vt);
pe("gg", Ge, vt);
pe("GGGG", Io, _o);
pe("gggg", Io, _o);
pe("GGGGG", Bl, yl);
pe("ggggg", Bl, yl);
ll(["gggg", "ggggg", "GGGG", "GGGGG"], function (o, r, t, e) {
  r[e.substr(0, 2)] = Le(o);
});
ll(["gg", "GG"], function (o, r, t, e) {
  r[e] = fe.parseTwoDigitYear(o);
});
function th(o) {
  return xx.call(this, o, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy);
}
function nh(o) {
  return xx.call(this, o, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function sh() {
  return Bs(this.year(), 1, 4);
}
function rh() {
  return Bs(this.isoWeekYear(), 1, 4);
}
function ah() {
  var o = this.localeData()._week;
  return Bs(this.year(), o.dow, o.doy);
}
function ih() {
  var o = this.localeData()._week;
  return Bs(this.weekYear(), o.dow, o.doy);
}
function xx(o, r, t, e, a) {
  var c;
  if (o == null) {
    return ei(this, e, a).year;
  } else {
    c = Bs(o, e, a);
    if (r > c) {
      r = c;
    }
    return lh.call(this, o, r, t, e, a);
  }
}
function lh(o, r, t, e, a) {
  var c = jc(o, r, t, e, a);
  var v = $a(c.year, 0, c.dayOfYear);
  this.year(v.getUTCFullYear());
  this.month(v.getUTCMonth());
  this.date(v.getUTCDate());
  return this;
}
we("Q", 0, "Qo", "quarter");
pe("Q", Dc);
je("Q", function (o, r) {
  r[Is] = (Le(o) - 1) * 3;
});
function oh(o) {
  if (o == null) {
    return Math.ceil((this.month() + 1) / 3);
  } else {
    return this.month((o - 1) * 3 + this.month() % 3);
  }
}
we("D", ["DD", 2], "Do", "date");
pe("D", Ge, Na);
pe("DD", Ge, vt);
pe("Do", function (o, r) {
  if (o) {
    return r._dayOfMonthOrdinalParse || r._ordinalParse;
  } else {
    return r._dayOfMonthOrdinalParseLenient;
  }
});
je(["D", "DD"], ns);
je("Do", function (o, r) {
  r[ns] = Le(o.match(Ge)[0]);
});
var ux = Va("Date", true);
we("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
pe("DDD", Tl);
pe("DDDD", Rc);
je(["DDD", "DDDD"], function (o, r, t) {
  t._dayOfYear = Le(o);
});
function ch(o) {
  var r = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 86400000) + 1;
  if (o == null) {
    return r;
  } else {
    return this.add(o - r, "d");
  }
}
we("m", ["mm", 2], 0, "minute");
pe("m", Ge, So);
pe("mm", Ge, vt);
je(["m", "mm"], Ht);
var xh = Va("Minutes", false);
we("s", ["ss", 2], 0, "second");
pe("s", Ge, So);
pe("ss", Ge, vt);
je(["s", "ss"], Ss);
var uh = Va("Seconds", false);
we("S", 0, 0, function () {
  return ~~(this.millisecond() / 100);
});
we(0, ["SS", 2], 0, function () {
  return ~~(this.millisecond() / 10);
});
we(0, ["SSS", 3], 0, "millisecond");
we(0, ["SSSS", 4], 0, function () {
  return this.millisecond() * 10;
});
we(0, ["SSSSS", 5], 0, function () {
  return this.millisecond() * 100;
});
we(0, ["SSSSSS", 6], 0, function () {
  return this.millisecond() * 1000;
});
we(0, ["SSSSSSS", 7], 0, function () {
  return this.millisecond() * 10000;
});
we(0, ["SSSSSSSS", 8], 0, function () {
  return this.millisecond() * 100000;
});
we(0, ["SSSSSSSSS", 9], 0, function () {
  return this.millisecond() * 1000000;
});
pe("S", Tl, Dc);
pe("SS", Tl, vt);
pe("SSS", Tl, Rc);
var Pr;
var fx;
for (Pr = "SSSS"; Pr.length <= 9; Pr += "S") {
  pe(Pr, Ea);
}
function fh(o, r) {
  r[da] = Le(("0." + o) * 1000);
}
for (Pr = "S"; Pr.length <= 9; Pr += "S") {
  je(Pr, fh);
}
fx = Va("Milliseconds", false);
we("z", 0, 0, "zoneAbbr");
we("zz", 0, 0, "zoneName");
function dh() {
  if (this._isUTC) {
    return "UTC";
  } else {
    return "";
  }
}
function hh() {
  if (this._isUTC) {
    return "Coordinated Universal Time";
  } else {
    return "";
  }
}
var le = al.prototype;
le.add = id;
le.calendar = dd;
le.clone = hd;
le.diff = gd;
le.endOf = Md;
le.format = _d;
le.from = Id;
le.fromNow = Sd;
le.to = yd;
le.toNow = Td;
le.get = ku;
le.invalidAt = Vd;
le.isAfter = md;
le.isBefore = Ad;
le.isBetween = Wd;
le.isSame = pd;
le.isSameOrAfter = vd;
le.isSameOrBefore = bd;
le.isValid = Ed;
le.lang = ax;
le.locale = rx;
le.localeData = ix;
le.max = Ef;
le.min = Pf;
le.parsingFlags = Nd;
le.set = wu;
le.startOf = Bd;
le.subtract = ld;
le.toArray = Od;
le.toObject = Ld;
le.toDate = Yd;
le.toISOString = kd;
le.inspect = wd;
if (typeof Symbol !== "undefined" && Symbol.for != null) {
  le[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">";
  };
}
le.toJSON = Pd;
le.toString = Cd;
le.unix = Rd;
le.valueOf = Dd;
le.creationData = qd;
le.eraName = Gd;
le.eraNarrow = Hd;
le.eraAbbr = Qd;
le.eraYear = Xd;
le.year = Lc;
le.isLeapYear = Cu;
le.weekYear = th;
le.isoWeekYear = nh;
le.quarter = le.quarters = oh;
le.month = qc;
le.daysInMonth = Ru;
le.week = le.weeks = qu;
le.isoWeek = le.isoWeeks = Uu;
le.weeksInYear = ah;
le.weeksInWeekYear = ih;
le.isoWeeksInYear = sh;
le.isoWeeksInISOWeekYear = rh;
le.date = ux;
le.day = le.days = tf;
le.weekday = nf;
le.isoWeekday = sf;
le.dayOfYear = ch;
le.hour = le.hours = uf;
le.minute = le.minutes = xh;
le.second = le.seconds = uh;
le.millisecond = le.milliseconds = fx;
le.utcOffset = Qf;
le.utc = Zf;
le.local = Ff;
le.parseZone = Jf;
le.hasAlignedHourOffset = Kf;
le.isDST = $f;
le.isLocal = td;
le.isUtcOffset = nd;
le.isUtc = ex;
le.isUTC = ex;
le.zoneAbbr = dh;
le.zoneName = hh;
le.dates = Rt("dates accessor is deprecated. Use date instead.", ux);
le.months = Rt("months accessor is deprecated. Use month instead", qc);
le.years = Rt("years accessor is deprecated. Use year instead", Lc);
le.zone = Rt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Xf);
le.isDSTShifted = Rt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", ed);
function mh(o) {
  return ze(o * 1000);
}
function Ah() {
  return ze.apply(null, arguments).parseZone();
}
function dx(o) {
  return o;
}
var Ue = Co.prototype;
Ue.calendar = eu;
Ue.longDateFormat = ru;
Ue.invalidDate = iu;
Ue.ordinal = cu;
Ue.preparse = dx;
Ue.postformat = dx;
Ue.relativeTime = uu;
Ue.pastFuture = fu;
Ue.set = Kx;
Ue.eras = Ud;
Ue.erasParse = jd;
Ue.erasConvertYear = zd;
Ue.erasAbbrRegex = Fd;
Ue.erasNameRegex = Zd;
Ue.erasNarrowRegex = Jd;
Ue.months = Tu;
Ue.monthsShort = Bu;
Ue.monthsParse = Du;
Ue.monthsRegex = Ou;
Ue.monthsShortRegex = Yu;
Ue.week = Pu;
Ue.firstDayOfYear = Vu;
Ue.firstDayOfWeek = Nu;
Ue.weekdays = Fu;
Ue.weekdaysMin = Ku;
Ue.weekdaysShort = Ju;
Ue.weekdaysParse = ef;
Ue.weekdaysRegex = rf;
Ue.weekdaysShortRegex = af;
Ue.weekdaysMinRegex = lf;
Ue.isPM = cf;
Ue.meridiem = ff;
function wl(o, r, t, e) {
  var a = Ds();
  var c = rs().set(e, r);
  return a[t](c, o);
}
function hx(o, r, t) {
  if (Ms(o)) {
    r = o;
    o = undefined;
  }
  o = o || "";
  if (r != null) {
    return wl(o, r, t, "month");
  }
  var e;
  var a = [];
  for (e = 0; e < 12; e++) {
    a[e] = wl(o, e, t, "month");
  }
  return a;
}
function Vo(o, r, t, e) {
  if (typeof o == "boolean") {
    if (Ms(r)) {
      t = r;
      r = undefined;
    }
    r = r || "";
  } else {
    r = o;
    t = r;
    o = false;
    if (Ms(r)) {
      t = r;
      r = undefined;
    }
    r = r || "";
  }
  var a = Ds();
  var c = o ? a._week.dow : 0;
  var v;
  var p = [];
  if (t != null) {
    return wl(r, (t + c) % 7, e, "day");
  }
  for (v = 0; v < 7; v++) {
    p[v] = wl(r, (v + c) % 7, e, "day");
  }
  return p;
}
function Wh(o, r) {
  return hx(o, r, "months");
}
function ph(o, r) {
  return hx(o, r, "monthsShort");
}
function vh(o, r, t) {
  return Vo(o, r, t, "weekdays");
}
function bh(o, r, t) {
  return Vo(o, r, t, "weekdaysShort");
}
function gh(o, r, t) {
  return Vo(o, r, t, "weekdaysMin");
}
Er("en", {
  eras: [{
    since: "0001-01-01",
    until: Infinity,
    offset: 1,
    name: "Anno Domini",
    narrow: "AD",
    abbr: "AD"
  }, {
    since: "0000-12-31",
    until: -Infinity,
    offset: 1,
    name: "Before Christ",
    narrow: "BC",
    abbr: "BC"
  }],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function (o) {
    var r = o % 10;
    var t = Le(o % 100 / 10) === 1 ? "th" : r === 1 ? "st" : r === 2 ? "nd" : r === 3 ? "rd" : "th";
    return o + t;
  }
});
fe.lang = Rt("moment.lang is deprecated. Use moment.locale instead.", Er);
fe.langData = Rt("moment.langData is deprecated. Use moment.localeData instead.", Ds);
var ls = Math.abs;
function Ch() {
  var o = this._data;
  this._milliseconds = ls(this._milliseconds);
  this._days = ls(this._days);
  this._months = ls(this._months);
  o.milliseconds = ls(o.milliseconds);
  o.seconds = ls(o.seconds);
  o.minutes = ls(o.minutes);
  o.hours = ls(o.hours);
  o.months = ls(o.months);
  o.years = ls(o.years);
  return this;
}
function mx(o, r, t, e) {
  var a = Ft(r, t);
  o._milliseconds += e * a._milliseconds;
  o._days += e * a._days;
  o._months += e * a._months;
  return o._bubble();
}
function kh(o, r) {
  return mx(this, o, r, 1);
}
function wh(o, r) {
  return mx(this, o, r, -1);
}
function x0(o) {
  if (o < 0) {
    return Math.floor(o);
  } else {
    return Math.ceil(o);
  }
}
function _h() {
  var o = this._milliseconds;
  var r = this._days;
  var t = this._months;
  var e = this._data;
  var a;
  var c;
  var v;
  var p;
  var C;
  if ((!(o >= 0) || !(r >= 0) || !(t >= 0)) && (!(o <= 0) || !(r <= 0) || !(t <= 0))) {
    o += x0(mo(t) + r) * 86400000;
    r = 0;
    t = 0;
  }
  e.milliseconds = o % 1000;
  a = Bt(o / 1000);
  e.seconds = a % 60;
  c = Bt(a / 60);
  e.minutes = c % 60;
  v = Bt(c / 60);
  e.hours = v % 24;
  r += Bt(v / 24);
  C = Bt(Ax(r));
  t += C;
  r -= x0(mo(C));
  p = Bt(t / 12);
  t %= 12;
  e.days = r;
  e.months = t;
  e.years = p;
  return this;
}
function Ax(o) {
  return o * 4800 / 146097;
}
function mo(o) {
  return o * 146097 / 4800;
}
function Ih(o) {
  if (!this.isValid()) {
    return NaN;
  }
  var r;
  var t;
  var e = this._milliseconds;
  o = Yt(o);
  if (o === "month" || o === "quarter" || o === "year") {
    r = this._days + e / 86400000;
    t = this._months + Ax(r);
    switch (o) {
      case "month":
        return t;
      case "quarter":
        return t / 3;
      case "year":
        return t / 12;
    }
  } else {
    r = this._days + Math.round(mo(this._months));
    switch (o) {
      case "week":
        return r / 7 + e / 604800000;
      case "day":
        return r + e / 86400000;
      case "hour":
        return r * 24 + e / 3600000;
      case "minute":
        return r * 1440 + e / 60000;
      case "second":
        return r * 86400 + e / 1000;
      case "millisecond":
        return Math.floor(r * 86400000) + e;
      default:
        throw new Error("Unknown unit " + o);
    }
  }
}
function Rs(o) {
  return function () {
    return this.as(o);
  };
}
var Wx = Rs("ms");
var Sh = Rs("s");
var yh = Rs("m");
var Th = Rs("h");
var Bh = Rs("d");
var Mh = Rs("w");
var Dh = Rs("M");
var Rh = Rs("Q");
var Yh = Rs("y");
var Oh = Wx;
function Lh() {
  return Ft(this);
}
function Ph(o) {
  o = Yt(o);
  if (this.isValid()) {
    return this[o + "s"]();
  } else {
    return NaN;
  }
}
function ma(o) {
  return function () {
    if (this.isValid()) {
      return this._data[o];
    } else {
      return NaN;
    }
  };
}
var Eh = ma("milliseconds");
var Nh = ma("seconds");
var Vh = ma("minutes");
var qh = ma("hours");
var Uh = ma("days");
var jh = ma("months");
var zh = ma("years");
function Gh() {
  return Bt(this.days() / 7);
}
var bs = Math.round;
var Ra = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function Hh(o, r, t, e, a) {
  return a.relativeTime(r || 1, !!t, o, e);
}
function Qh(o, r, t, e) {
  var a = Ft(o).abs();
  var c = bs(a.as("s"));
  var v = bs(a.as("m"));
  var p = bs(a.as("h"));
  var C = bs(a.as("d"));
  var d = bs(a.as("M"));
  var b = bs(a.as("w"));
  var S = bs(a.as("y"));
  var y = c <= t.ss && ["s", c] || c < t.s && ["ss", c] || v <= 1 && ["m"] || v < t.m && ["mm", v] || p <= 1 && ["h"] || p < t.h && ["hh", p] || C <= 1 && ["d"] || C < t.d && ["dd", C];
  if (t.w != null) {
    y = y || b <= 1 && ["w"] || b < t.w && ["ww", b];
  }
  y = y || d <= 1 && ["M"] || d < t.M && ["MM", d] || S <= 1 && ["y"] || ["yy", S];
  y[2] = r;
  y[3] = +o > 0;
  y[4] = e;
  return Hh.apply(null, y);
}
function Xh(o) {
  if (o === undefined) {
    return bs;
  } else if (typeof o == "function") {
    bs = o;
    return true;
  } else {
    return false;
  }
}
function Zh(o, r) {
  if (Ra[o] === undefined) {
    return false;
  } else if (r === undefined) {
    return Ra[o];
  } else {
    Ra[o] = r;
    if (o === "s") {
      Ra.ss = r - 1;
    }
    return true;
  }
}
function Fh(o, r) {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var t = false;
  var e = Ra;
  var a;
  var c;
  if (typeof o == "object") {
    r = o;
    o = false;
  }
  if (typeof o == "boolean") {
    t = o;
  }
  if (typeof r == "object") {
    e = Object.assign({}, Ra, r);
    if (r.s != null && r.ss == null) {
      e.ss = r.s - 1;
    }
  }
  a = this.localeData();
  c = Qh(this, !t, e, a);
  if (t) {
    c = a.pastFuture(+this, c);
  }
  return a.postformat(c);
}
var eo = Math.abs;
function pa(o) {
  return (o > 0) - (o < 0) || +o;
}
function Pl() {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var o = eo(this._milliseconds) / 1000;
  var r = eo(this._days);
  var t = eo(this._months);
  var e;
  var a;
  var c;
  var v;
  var p = this.asSeconds();
  var C;
  var d;
  var b;
  var S;
  if (p) {
    e = Bt(o / 60);
    a = Bt(e / 60);
    o %= 60;
    e %= 60;
    c = Bt(t / 12);
    t %= 12;
    v = o ? o.toFixed(3).replace(/\.?0+$/, "") : "";
    C = p < 0 ? "-" : "";
    d = pa(this._months) !== pa(p) ? "-" : "";
    b = pa(this._days) !== pa(p) ? "-" : "";
    S = pa(this._milliseconds) !== pa(p) ? "-" : "";
    return C + "P" + (c ? d + c + "Y" : "") + (t ? d + t + "M" : "") + (r ? b + r + "D" : "") + (a || e || o ? "T" : "") + (a ? S + a + "H" : "") + (e ? S + e + "M" : "") + (o ? S + v + "S" : "");
  } else {
    return "P0D";
  }
}
var Pe = Ol.prototype;
Pe.isValid = jf;
Pe.abs = Ch;
Pe.add = kh;
Pe.subtract = wh;
Pe.as = Ih;
Pe.asMilliseconds = Wx;
Pe.asSeconds = Sh;
Pe.asMinutes = yh;
Pe.asHours = Th;
Pe.asDays = Bh;
Pe.asWeeks = Mh;
Pe.asMonths = Dh;
Pe.asQuarters = Rh;
Pe.asYears = Yh;
Pe.valueOf = Oh;
Pe._bubble = _h;
Pe.clone = Lh;
Pe.get = Ph;
Pe.milliseconds = Eh;
Pe.seconds = Nh;
Pe.minutes = Vh;
Pe.hours = qh;
Pe.days = Uh;
Pe.weeks = Gh;
Pe.months = jh;
Pe.years = zh;
Pe.humanize = Fh;
Pe.toISOString = Pl;
Pe.toString = Pl;
Pe.toJSON = Pl;
Pe.locale = rx;
Pe.localeData = ix;
Pe.toIsoString = Rt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Pl);
Pe.lang = ax;
we("X", 0, 0, "unix");
we("x", 0, 0, "valueOf");
pe("x", Ml);
pe("X", Au);
je("X", function (o, r, t) {
  t._d = new Date(parseFloat(o) * 1000);
});
je("x", function (o, r, t) {
  t._d = new Date(Le(o));
});
//! moment.js
fe.version = "2.30.1";
Fx(ze);
fe.fn = le;
fe.min = Nf;
fe.max = Vf;
fe.now = qf;
fe.utc = rs;
fe.unix = mh;
fe.months = Wh;
fe.isDate = rl;
fe.locale = Er;
fe.invalid = Sl;
fe.duration = Ft;
fe.isMoment = Xt;
fe.weekdays = vh;
fe.parseZone = Ah;
fe.localeData = Ds;
fe.isDuration = pl;
fe.monthsShort = ph;
fe.weekdaysMin = gh;
fe.defineLocale = Do;
fe.updateLocale = Af;
fe.locales = Wf;
fe.weekdaysShort = bh;
fe.normalizeUnits = Yt;
fe.relativeTimeRounding = Xh;
fe.relativeTimeThreshold = Zh;
fe.calendarFormat = fd;
fe.prototype = le;
fe.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM"
};
function u0(o) {
  let r;
  let t;
  return {
    c() {
      r = E("span");
      t = re(o[0]);
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true
      });
      var a = J(r);
      t = ae(a, o[0]);
      a.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "gtitle medium svelte-1y8sque");
    },
    m(e, a) {
      L(e, r, a);
      V(r, t);
    },
    p(e, a) {
      if (a & 1) {
        ge(t, e[0]);
      }
    },
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Jh(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v = o[0] && u0(o);
  const p = o[8].default;
  const C = Wc(p, o, o[7], null);
  return {
    c() {
      r = E("div");
      if (v) {
        v.c();
      }
      t = G();
      e = E("p");
      if (C) {
        C.c();
      }
      this.h();
    },
    l(d) {
      r = N(d, "DIV", {
        class: true
      });
      var b = J(r);
      if (v) {
        v.l(b);
      }
      t = H(b);
      e = N(b, "P", {
        class: true,
        style: true
      });
      var S = J(e);
      if (C) {
        C.l(S);
      }
      S.forEach(R);
      b.forEach(R);
      this.h();
    },
    h() {
      P(e, "class", "gtext svelte-1y8sque");
      P(e, "style", a = `max-height: ${o[3]}; font-size: ${o[1]}`);
      P(r, "class", "wrap");
    },
    m(d, b) {
      L(d, r, b);
      if (v) {
        v.m(r, null);
      }
      V(r, t);
      V(r, e);
      if (C) {
        C.m(e, null);
      }
      o[9](e);
      c = true;
    },
    p(d, [b]) {
      if (d[0]) {
        if (v) {
          v.p(d, b);
        } else {
          v = u0(d);
          v.c();
          v.m(r, t);
        }
      } else if (v) {
        v.d(1);
        v = null;
      }
      if (C && C.p && (!c || b & 128)) {
        pc(C, p, d, d[7], c ? bc(p, d[7], b, null) : vc(d[7]), null);
      }
      if (!c || b & 10 && a !== (a = `max-height: ${d[3]}; font-size: ${d[1]}`)) {
        P(e, "style", a);
      }
    },
    i(d) {
      if (!c) {
        $(C, d);
        c = true;
      }
    },
    o(d) {
      te(C, d);
      c = false;
    },
    d(d) {
      if (d) {
        R(r);
      }
      if (v) {
        v.d();
      }
      if (C) {
        C.d(d);
      }
      o[9](null);
    }
  };
}
function Kh(o, r, t) {
  let {
    $$slots: e = {},
    $$scope: a
  } = r;
  let {
    maxRows: c = 3
  } = r;
  let {
    title: v = null
  } = r;
  let {
    fontSize: p = "16px"
  } = r;
  let C;
  let d;
  let b;
  let S;
  gc(() => {
    y(b, c);
  });
  function y(f, w) {
    if (!f) {
      return;
    }
    const _ = parseFloat(getComputedStyle(f).lineHeight);
    t(6, d = _ * w);
    t(5, C = f.scrollHeight);
  }
  function W(f) {
    ys[f ? "unshift" : "push"](() => {
      b = f;
      t(2, b);
    });
  }
  o.$$set = f => {
    if ("maxRows" in f) {
      t(4, c = f.maxRows);
    }
    if ("title" in f) {
      t(0, v = f.title);
    }
    if ("fontSize" in f) {
      t(1, p = f.fontSize);
    }
    if ("$$scope" in f) {
      t(7, a = f.$$scope);
    }
  };
  o.$$.update = () => {
    if (o.$$.dirty & 116) {
      t(3, S = C + "px");
      y(b, c);
    }
  };
  return [v, p, b, S, c, C, d, a, e, W];
}
class Oe extends Fe {
  constructor(r) {
    super();
    Je(this, r, Kh, Jh, Xe, {
      maxRows: 4,
      title: 0,
      fontSize: 1
    });
  }
}
var El = {
  exports: {}
};
El.exports = qo;
El.exports.isMobile = qo;
El.exports.default = qo;
const $h = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
const e1 = /CrOS/;
const t1 = /android|ipad|playbook|silk/i;
function qo(o) {
  o ||= {};
  let r = o.ua;
  if (!r && typeof navigator !== "undefined") {
    r = navigator.userAgent;
  }
  if (r && r.headers && typeof r.headers["user-agent"] == "string") {
    r = r.headers["user-agent"];
  }
  if (typeof r != "string") {
    return false;
  }
  let t = $h.test(r) && !e1.test(r) || !!o.tablet && t1.test(r);
  if (!t && o.tablet && o.featureDetect && navigator && navigator.maxTouchPoints > 1 && r.indexOf("Macintosh") !== -1 && r.indexOf("Safari") !== -1) {
    t = true;
  }
  return t;
}
var n1 = El.exports;
const ot = _c(n1);
var Zv;
var Fv;
var Jv;
var Kv;
var $v;
var eb;
var tb;
var nb;
class s1 {
  constructor(r) {
    U(this, Zv, (r, t) => {});
    U(this, Fv, r => {});
    U(this, Jv, r => {});
    U(this, Kv, () => {});
    U(this, $v, r => {});
    U(this, eb, r => {});
    U(this, tb, r => {});
    U(this, nb, () => false);
    var c = "0|4|5|3|1|7|6|2".split("|");
    var v = 0;
    while ([]) {
      switch (c[v++]) {
        case "0":
          this.openModal = r.onOpenModal;
          continue;
        case "1":
          this.openReadArticlesModal = r.onOpenReadArticlesModal;
          continue;
        case "2":
          this.continue = r.onContinue;
          continue;
        case "3":
          this.addButtonCallback = r.onAddButtonCallback;
          continue;
        case "4":
          this.closeModal = r.onCloseModal;
          continue;
        case "5":
          this.modalProgress = r.onModalProgress;
          continue;
        case "6":
          this.addPreDestinationCallback = r.onAddPreDestinationCallback;
          continue;
        case "7":
          this.openNotificationScreenModal = r.onOpenNotificationScreenModal;
          continue;
      }
      break;
    }
  }
}
Zv = "openModal";
Fv = "openReadArticlesModal";
Jv = "openNotificationScreenModal";
Kv = "closeModal";
$v = "modalProgress";
eb = "addButtonCallback";
tb = "addPreDestinationCallback";
nb = "continue";
var dt = (o => {
  o.ANNOUNCE = "c_announce";
  o.MONETIZATION = "c_monetization";
  o.SOCIAL_STARTED = "c_social_started";
  o.RECAPTCHA_RESPONSE = "c_recaptcha_response";
  o.HCAPTCHA_RESPONSE = "c_hcaptcha_response";
  o.TURNSTILE_RESPONSE = "c_turnstile_response";
  o.ADBLOCKER_DETECTED = "c_adblocker_detected";
  o.FOCUS_LOST = "c_focus_lost";
  o.OFFERS_SKIPPED = "c_offers_skipped";
  o.OFFER_SKIPPED = "c_offer_skipped";
  o.FOCUS = "c_focus";
  o.WORKINK_PASS_AVAILABLE = "c_workink_pass_available";
  o.WORKINK_PASS_USE = "c_workink_pass_use";
  o.PING = "c_ping";
  o.KEYAPP_KEY = "c_keyapp_key";
  return o;
})(dt || {});
var sb;
var rb;
var ab;
var ib;
var lb;
var ob;
var cb;
var xb;
var ub;
var fb;
var db;
var hb;
var mb;
class Te {
  constructor(r) {
    U(this, "id", 0);
    U(this, sb, "monetization");
    U(this, rb, false);
    U(this, "isOffer", false);
    U(this, ab, []);
    U(this, ib, false);
    U(this, lb);
    U(this, ob, () => {
      this.done = true;
      if (this.isOffer) {
        this.getWorkInkClient().onOfferDone(this.name);
      }
    });
    U(this, cb, () => {
      return this.workInkClient;
    });
    U(this, xb, r => {
      this.getWorkInkClient().xnlthabfpnggipajloc(dt.MONETIZATION, {
        type: this.name,
        payload: r,
        s: "wtITVIJsOpyxK77yWGe0eOXcOddSbMGrjzsUfVATkaY2xYhfFWYTaiNOw9Ehb24W"
      });
    });
    U(this, ub, async () => {});
    U(this, fb, async () => {});
    U(this, db, async () => {});
    U(this, hb, () => true);
    U(this, mb, r => {});
    this.workInkClient = r;
  }
}
sb = "name";
rb = "done";
ab = "alsoLoad";
ib = "hideAfterSkip";
lb = "workInkClient";
ob = "setDone";
cb = "getWorkInkClient";
xb = "sendMessage";
ub = "prepare";
fb = "run";
db = "abort";
hb = "isEligible";
mb = "onMessage";
var Ab;
var Wb;
var pb;
var vb;
var bb;
var gb;
class r1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 57);
    U(this, Ab, "betterdeals");
    U(this, Wb, true);
    U(this, pb, () => {
      return new Promise(p => {
        try {
          const S = {
            message: "wk_installed"
          };
          chrome.runtime.sendMessage("fcfdgjihkdffhnfaefnbdbekafdeelio", S, () => {
            p(true);
          });
        } catch {
          p(false);
        }
      });
    });
    U(this, vb, async () => {
      if (await this.isInstalled()) {
        be("Extension already installed.", "Complete more offers to continue.", "success");
        const b = {
          event: "installed"
        };
        this.sendMessage(b);
        this.setDone();
        const d = {
          userAgent: navigator.userAgent
        };
        Ie("betterdeals_already_installed", d);
        return;
      }
      this.getWorkInkClient().getUi().openModal("betterdeals", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var y;
          this.getWorkInkClient().getUi().modalProgress(true);
          const b = (y = this.getWorkInkClient().getLinkInfo()) == null ? undefined : y.userId;
          window.open("https://chromewebstore.google.com/detail/betterdeals/fcfdgjihkdffhnfaefnbdbekafdeelio?utm_source=wrk&utm_content=" + b, "_blank");
          const S = setInterval(async () => {
            if (await this.isInstalled()) {
              const D = {
                event: "installed"
              };
              this.sendMessage(D);
              this.setDone();
              this.getWorkInkClient().getUi().closeModal();
              be("Extension installed.", "Complete more offers to continue.", "success");
              const h = {
                userAgent: navigator.userAgent
              };
              Ie("betterdeals_new_installed", h);
              clearInterval(S);
            }
          }, 250);
        }
      });
    });
    U(this, bb, async () => {
      this.getWorkInkClient().getUi().closeModal();
    });
    U(this, gb, () => !ot());
  }
}
Ab = "name";
Wb = "isOffer";
pb = "isInstalled";
vb = "run";
bb = "abort";
gb = "isEligible";
var Cb;
var kb;
var wb;
var _b;
var Ib;
class a1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 29);
    U(this, "name", "browserExtension2");
    U(this, Cb, true);
    U(this, kb, () => {
      return new Promise(C => {
        try {
          const W = {
            message: "wk_installed"
          };
          chrome.runtime.sendMessage("phhnacjebmkllbhhenkjiaklggjdblid", W, () => {
            C(true);
          });
        } catch (W) {
          C(false);
        }
      });
    });
    U(this, wb, async () => {
      if (await this.isInstalled()) {
        be("Extension already installed.", "Complete more offers to continue.", "success");
        this.sendMessage({
          event: "installed"
        });
        this.setDone();
        const b = {
          userAgent: navigator.userAgent
        };
        Ie("browserextension_already_installed", b);
        return;
      }
      this.getWorkInkClient().getUi().openModal("extension", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var _;
          this.getWorkInkClient().getUi().modalProgress(true);
          const f = (_ = this.getWorkInkClient().getLinkInfo()) == null ? undefined : _.userId;
          window.open("https://chrome.google.com/webstore/detail/shiftsearch/phhnacjebmkllbhhenkjiaklggjdblid?utm_campaign=wrk&utm_content=" + f, "_blank");
          const w = setInterval(async () => {
            if (await this.isInstalled()) {
              this.sendMessage({
                event: "installed"
              });
              this.setDone();
              this.getWorkInkClient().getUi().closeModal();
              be("Extension installed.", "Complete more offers to continue.", "success");
              const q = {
                userAgent: navigator.userAgent
              };
              Ie("browserextension_new_installed", q);
              clearInterval(w);
            }
          }, 250);
        }
      });
    });
    U(this, _b, async () => {
      this.getWorkInkClient().getUi().closeModal();
    });
    U(this, Ib, () => {
      return !ot();
    });
  }
}
Cb = "isOffer";
kb = "isInstalled";
wb = "run";
_b = "abort";
Ib = "isEligible";
var Sb;
var yb;
var Tb;
var Bb;
var Mb;
var Db;
var Rb;
var Yb;
class i1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 27);
    U(this, Sb, "buffDesktop");
    U(this, yb, true);
    U(this, Tb, [28]);
    U(this, Bb, "");
    U(this, Mb, () => {
      return !ot();
    });
    U(this, Db, async () => {
      var v = {
        event: "start"
      };
      this.sendMessage(v);
      this.getWorkInkClient().getUi().openModal("buff", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
        }
      });
    });
    U(this, Rb, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, Yb, t => {
      switch (t.event) {
        case "done":
          be("Buff installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "download":
          this.url = t.url;
          break;
      }
    });
  }
}
Sb = "name";
yb = "isOffer";
Tb = "alsoLoad";
Bb = "url";
Mb = "isEligible";
Db = "run";
Rb = "abort";
Yb = "onMessage";
var Ob;
var Lb;
var Pb;
var Eb;
var Nb;
var Vb;
class l1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 28);
    U(this, "name", "buffMobile");
    U(this, Ob, true);
    U(this, Lb, "");
    U(this, Pb, () => {
      return ot();
    });
    U(this, Eb, async () => {
      var v = {
        event: "start"
      };
      this.sendMessage(v);
      this.getWorkInkClient().getUi().openModal("buff", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
        }
      });
    });
    U(this, Nb, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, Vb, t => {
      switch (t.event) {
        case "done":
          be("Buff installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "download":
          this.url = t.url;
          break;
      }
    });
  }
}
Ob = "isOffer";
Lb = "url";
Pb = "isEligible";
Eb = "run";
Nb = "abort";
Vb = "onMessage";
var ke = (o => {
  o[o.POPUPS_DESKTOP = 20] = "POPUPS_DESKTOP";
  o[o.POPUPS_MOBILE = 21] = "POPUPS_MOBILE";
  o[o.READ_ARTICLES = 22] = "READ_ARTICLES";
  o[o.INSTALLER = 23] = "INSTALLER";
  o[o.OPERA = 24] = "OPERA";
  o[o.OPERA_GX = 25] = "OPERA_GX";
  o[o.BUFF_DESKTOP = 27] = "BUFF_DESKTOP";
  o[o.BUFF_MOBILE = 28] = "BUFF_MOBILE";
  o[o.BROWSER_EXTENSION = 29] = "BROWSER_EXTENSION";
  o[o.NORDVPN = 32] = "NORDVPN";
  o[o.RAID_SHADOW_LEGENDS = 33] = "RAID_SHADOW_LEGENDS";
  o[o.NORTON_ANTIVIRUS = 34] = "NORTON_ANTIVIRUS";
  o[o.LUME_BROWSER_ANDROID = 36] = "LUME_BROWSER_ANDROID";
  o[o.PUSH_NOTIFICATIONS = 37] = "PUSH_NOTIFICATIONS";
  o[o.PUSH_NOTIFICATIONS_FULLSCREEN = 38] = "PUSH_NOTIFICATIONS_FULLSCREEN";
  o[o.TIKTOK = 39] = "TIKTOK";
  o[o.INSTALL_APP = 40] = "INSTALL_APP";
  o[o.OPERAGX_MOBILE = 41] = "OPERAGX_MOBILE";
  o[o.QUICKSNAP = 42] = "QUICKSNAP";
  o[o.TEMU = 43] = "TEMU";
  o[o.SHEIN = 44] = "SHEIN";
  o[o.PDF_EDITOR = 45] = "PDF_EDITOR";
  o[o.OPERA_GX_IOS = 47] = "OPERA_GX_IOS";
  o[o.W_AUTO_CLICKER = 48] = "W_AUTO_CLICKER";
  o[o.W_FLASHLIGHT = 49] = "W_FLASHLIGHT";
  o[o.W_PRANK_CALL_VIDEO = 50] = "W_PRANK_CALL_VIDEO";
  o[o.W_ANTI_THEFT_MY_PHONE = 51] = "W_ANTI_THEFT_MY_PHONE";
  o[o.W_FLASHLIGHT_SOS = 52] = "W_FLASHLIGHT_SOS";
  o[o.W_AMAZON_SHOPPING = 53] = "W_AMAZON_SHOPPING";
  o[o.W_CASH_EM_ALL = 54] = "W_CASH_EM_ALL";
  o[o.W_MOBILE_LEGENDS = 55] = "W_MOBILE_LEGENDS";
  o[o.W_CASH_GIRAFFE = 56] = "W_CASH_GIRAFFE";
  o[o.BETTERDEALS = 57] = "BETTERDEALS";
  o[o.OPERA_POPUP = 58] = "OPERA_POPUP";
  o[o.LDPLAYER = 60] = "LDPLAYER";
  o[o.PIPPIT = 61] = "PIPPIT";
  o[o.ONTHATASS = 62] = "ONTHATASS";
  o[o.PRIMEVIDEO = 63] = "PRIMEVIDEO";
  o[o.RIVAGAUCHE = 64] = "RIVAGAUCHE";
  o[o.LENME = 65] = "LENME";
  o[o.TESTERUP = 66] = "TESTERUP";
  o[o.XANH = 67] = "XANH";
  o[o.TIMO = 68] = "TIMO";
  o[o.SOLITAIRECASH = 69] = "SOLITAIRECASH";
  o[o.GAUTHAI = 70] = "GAUTHAI";
  o[o.EXTERNAL_ARTICLES = 71] = "EXTERNAL_ARTICLES";
  return o;
})(ke || {});
var qb;
var Ub;
var jb;
var zb;
var Gb;
var Hb;
var Qb;
class o1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 71);
    U(this, qb, "externalArticles");
    U(this, Ub, true);
    U(this, jb, null);
    U(this, zb, null);
    U(this, Gb, async () => {
      this.getWorkInkClient().getUi().openModal("externalArticles", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.sendMessage({
            event: "start"
          });
          this.getWorkInkClient().getUi().modalProgress(true);
          const y = document.createElement("a");
          y.href = "https://xyz.work.ink/\"";
          y.target = "_blank";
          document.body.appendChild(y);
          y.click();
          document.body.removeChild(y);
          this.sendMessage({
            event: "installClicked"
          });
          this.timeout = setTimeout(() => {
            this.getWorkInkClient().onWebsocketError(new Event("timeout"));
            sl.captureException(new Error("timeout"));
          }, 120000);
        }
      });
    });
    U(this, Hb, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, Qb, t => {
      switch (t.event) {
        case "done":
          be("Step done.", "Complete more steps to continue.", "success");
          clearTimeout(this.timeout);
          clearTimeout(this.toastTimeout);
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
qb = "name";
Ub = "isOffer";
jb = "timeout";
zb = "toastTimeout";
Gb = "run";
Hb = "abort";
Qb = "onMessage";
var Xb;
var Zb;
var Fb;
var Jb;
var Kb;
var $b;
var eg;
class c1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 70);
    U(this, Xb, "gauthai");
    U(this, Zb, true);
    U(this, Fb, null);
    U(this, Jb, null);
    U(this, Kb, "");
    U(this, $b, async () => {
      const p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("gauthai", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          const S = document.createElement("a");
          S.href = this.url;
          S.target = "_blank";
          S.rel = "noreferrer";
          S.click();
          Ie("gauthai_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          const y = {
            event: "installClicked"
          };
          this.sendMessage(y);
          this.toastTimeout = setTimeout(() => {
            be("Signup for Hero Wars!", "You need to signup for Hero Wars to continue.", "info");
          }, 10000);
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
      const c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, eg, t => {
      switch (t.event) {
        case "done":
          be("Hero Wars Step completed.", "Complete more steps to continue.", "success");
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
Xb = "name";
Zb = "isOffer";
Fb = "timeout";
Jb = "toastTimeout";
Kb = "url";
$b = "run";
eg = "onMessage";
var tg;
var ng;
var sg;
var rg;
class x1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 40);
    U(this, tg, "installApp");
    U(this, ng, true);
    U(this, sg, async () => {
      var p = {
        event: "start"
      };
      this.sendMessage(p);
      Ie("installapp_download_modal_open");
      this.getWorkInkClient().getUi().openModal("installApp", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          Ie("installapp_download_start");
          var b = {
            event: "installClicked"
          };
          this.sendMessage(b);
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, rg, t => {
      switch (t.event) {
        case "done":
          be("TikTok installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
tg = "name";
ng = "isOffer";
sg = "run";
rg = "onMessage";
var ag;
var ig;
var lg;
var og;
var cg;
var xg;
class u1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 23);
    U(this, ag, "installer2");
    U(this, ig, true);
    U(this, lg, "");
    U(this, og, () => {
      return navigator.userAgent.includes("Windows");
    });
    U(this, cg, async () => {
      var p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("installer", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          var b = {
            platform: "Windows"
          };
          Ie("installer_downloaded", b);
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, xg, t => {
      switch (t.event) {
        case "done":
          be("Installer done.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "download":
          this.url = t.url;
          break;
      }
    });
  }
}
ag = "name";
ig = "isOffer";
lg = "url";
og = "isEligible";
cg = "run";
xg = "onMessage";
var ug;
var fg;
var dg;
var hg;
var mg;
var Ag;
class f1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 60);
    U(this, ug, "ldplayer");
    U(this, fg, true);
    U(this, dg, null);
    U(this, hg, null);
    U(this, "run", async () => {
      this.getWorkInkClient().getUi().openModal("ldplayer", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.sendMessage({
            event: "start"
          });
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open("https://ldplayer-download.work.ink/", "_blank");
          Ie("ldplayer_download_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          this.sendMessage({
            event: "installClicked"
          });
          this.toastTimeout = setTimeout(() => {
            be("Start the installer to skip!", "Install LDPlayer to instantly skip.", "info");
          }, 10000);
          this.timeout = setTimeout(() => {
            this.getWorkInkClient().onWebsocketError(new Event("LDPlayer timeout"));
          }, 120000);
        }
      });
    });
    U(this, mg, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, Ag, t => {
      switch (t.event) {
        case "done":
          be("LDPlayer installed.", "Complete more steps to continue.", "success");
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
ug = "name";
fg = "isOffer";
dg = "timeout";
hg = "toastTimeout";
mg = "abort";
Ag = "onMessage";
var Wg;
var pg;
var vg;
var bg;
var gg;
var Cg;
var kg;
var wg;
class d1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 65);
    U(this, Wg, "lenme");
    U(this, pg, true);
    U(this, vg, null);
    U(this, bg, null);
    U(this, gg, "");
    U(this, Cg, async () => {
      this.sendMessage({
        event: "start"
      });
      this.getWorkInkClient().getUi().openModal("lenme", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          const b = document.createElement("a");
          b.href = this.url;
          b.target = "_blank";
          b.rel = "noreferrer";
          b.click();
          Ie("lenme_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          const S = {
            event: "installClicked"
          };
          this.sendMessage(S);
          this.toastTimeout = setTimeout(() => {
            be("Sign up to Lenme!", "(Re-)Create and account for Lenme to continue.", "info");
          }, 10000);
        }
      });
    });
    U(this, kg, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, wg, t => {
      switch (t.event) {
        case "done":
          be("Lenme account created.", "Complete more steps to continue.", "success");
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
Wg = "name";
pg = "isOffer";
vg = "timeout";
bg = "toastTimeout";
gg = "url";
Cg = "run";
kg = "abort";
wg = "onMessage";
var _g;
var Ig;
var Sg;
var yg;
var Tg;
class h1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 36);
    U(this, _g, "lumeBrowserAndroid");
    U(this, Ig, true);
    U(this, Sg, async () => {
      var p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("lumeBrowserAndroid", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open("https://play.google.com/store/apps/details?id=fyi.lume.android.release&utm_source=work.ink&utm_medium=offercard", "_blank");
          var b = {
            event: "installClicked"
          };
          this.sendMessage(b);
          Ie("lumeandroid_playstore_opened");
        }
      });
    });
    U(this, yg, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, Tg, t => {
      switch (t.event) {
        case "done":
          be("Lume Browser installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
_g = "name";
Ig = "isOffer";
Sg = "run";
yg = "abort";
Tg = "onMessage";
var Bg;
var Mg;
var Dg;
var Rg;
var Yg;
class m1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 32);
    U(this, Bg, "nordVpn");
    U(this, Mg, true);
    U(this, Dg, async () => {
      const C = {
        event: "start"
      };
      this.sendMessage(C);
      this.getWorkInkClient().getUi().openModal("nordvpn", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          const S = this.getWorkInkClient().getCountryCode();
          if (["DE", "AT", "CH"].includes(S)) {
            window.open("https://linksprf.com/v1/redirect?type=incentive&id=ffa81a0c98a74b708b99ed8dc010fd9d&api_key=40710abb89ad9e06874a667b2bc7dee7&site_id=1f10f78243674fcdba586e526cb8ef08&dch=feed&ad_t=coupon", "_blank");
          } else {
            window.open("https://linksprf.com/v1/redirect?type=incentive&id=feb6dac373dd400ea9e1023465d3a70b&api_key=40710abb89ad9e06874a667b2bc7dee7&site_id=1f10f78243674fcdba586e526cb8ef08&dch=feed&ad_t=coupon", "_blank");
          }
          const y = {
            event: "installClicked"
          };
          this.sendMessage(y);
        }
      });
    });
    U(this, Rg, async () => {
      this.getWorkInkClient().getUi().closeModal();
      const c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, Yg, t => {
      switch (t.event) {
        case "done":
          be("NordVPN installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
Bg = "name";
Mg = "isOffer";
Dg = "run";
Rg = "abort";
Yg = "onMessage";
var Og;
var Lg;
var Pg;
var Eg;
var Ng;
class A1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 34);
    U(this, Og, "norton");
    U(this, Lg, true);
    U(this, Pg, true);
    U(this, Eg, async () => {
      var v = {
        event: "start"
      };
      this.sendMessage(v);
      this.getWorkInkClient().getUi().openModal("norton", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open("https://fastdntrk.com/?a=280172&c=420908&mt=7", "_blank");
          this.sendMessage({
            event: "installClicked"
          });
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, Ng, t => {
      switch (t.event) {
        case "done":
          be("Installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
Og = "name";
Lg = "isOffer";
Pg = "hideAfterSkip";
Eg = "run";
Ng = "onMessage";
var Vg;
var qg;
var Ug;
var jg;
var zg;
var Gg;
var Hg;
class W1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 62);
    U(this, Vg, "onthatass");
    U(this, qg, true);
    U(this, Ug, null);
    U(this, jg, null);
    U(this, zg, "");
    U(this, "run", async () => {
      var C = {
        event: "start"
      };
      this.sendMessage(C);
      this.getWorkInkClient().getUi().openModal("onthatass", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("onthatass_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          var W = {
            event: "installClicked"
          };
          this.sendMessage(W);
          this.toastTimeout = setTimeout(() => {
            be("Order at On That Ass!", "Order for free to continue.", "info");
          }, 10000);
          this.timeout = setTimeout(() => {
            this.getWorkInkClient().onWebsocketError(new Event("OTA timeout"));
            sl.captureException(new Error("OTA: Sign up timeout"));
          }, 120000);
        }
      });
    });
    U(this, Gg, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, Hg, t => {
      switch (t.event) {
        case "done":
          be("On that Ass prder complete.", "Complete more steps to continue.", "success");
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
Vg = "name";
qg = "isOffer";
Ug = "timeout";
jg = "toastTimeout";
zg = "url";
Gg = "abort";
Hg = "onMessage";
var Qg;
var Xg;
var Zg;
var Fg;
class p1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 41);
    U(this, Qg, "operaGXMobile");
    U(this, Xg, true);
    U(this, "run", async () => {
      this.getWorkInkClient().getUi().openModal("operagx", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var S = {
            event: "start"
          };
          this.sendMessage(S);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open("https://notik.me/api-redirect?token=eyJpdiI6IlRtNlkrOFo1MTlpL2c3L2F0RkpFeEE9PSIsInZhbHVlIjoiOW9UY1JCVmcrQ2V0WnBQOG0yb3dJS3hyVHdIVzU3cEwrTmRpamFTdXoxb0wrTnJzTi9VdnhyYmh2dnVmQ0hRUnprZVdxM1NOQWFGZkV5bDMvOGpTQUQyWDV5RDkvYnlmTzB0cGxoc21vaXUzZ2dvcVFuYXF1djZHLzJVR2ZnV1ZJRHVYdDNPVTBsM2RMZkRYZVdmbFcxQXg0bDg3M3FsQ3RWbHRiVzc3cWZCSkhYZUhMZDcrWXYybU5nUis0dXVMREtXK2ErMitHNkgyMmQwZWo4TlJtSWxUeTNQRUNzd0JESGgxUG9LWkVCUnF0RWtMYlEwa3NSbjJCdHB3UkpMMFQyeVVucWR1bGpTMHRYM3BrV1BTbGtScmxncm11Z1QwT1VTVUwzM1NzM09IZVpNU0VoaEl3RjdoK2VBQnRkR1cvc3NsUW1nOVIwSnhYdHRlai9SckVQODFTTkRZTmlyMzVjR2FyNHorcWc4QWFLNGpEaENtQTdKYko0dmMrdmh4WTBUZFR2QWtyMHRWNUgzM0ZKdU54QT09IiwibWFjIjoiYzRlZjlkYTIxODExNDNmM2Y0MmRiMTIwZTYzYWJkZmE4MTkzN2M1NTkwZTNjZGJhOGNhYjU3ZmQ4YjQ5ZTViYiIsInRhZyI6IiJ9&user_id=Lr2Bug_AZCOaYZzYA_Lr2Bug", "_blank");
          Ie("operagxmobile_download_start", {
            platform: navigator.userAgent.includes("Android") ? "Android" : "iOS"
          });
          var y = {
            event: "installClicked"
          };
          this.sendMessage(y);
        }
      });
    });
    U(this, Zg, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, Fg, t => {
      switch (t.event) {
        case "done":
          be("Opera Mobile installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
Qg = "name";
Xg = "isOffer";
Zg = "abort";
Fg = "onMessage";
var Jg;
var Kg;
var $g;
var eC;
var tC;
class v1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 25);
    U(this, Jg, "operaGX");
    U(this, "isOffer", true);
    U(this, Kg, null);
    U(this, $g, null);
    U(this, "run", async () => {
      this.getWorkInkClient().getUi().openModal("operagx", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var y;
          var W;
          const f = {
            event: "start"
          };
          this.sendMessage(f);
          this.getWorkInkClient().getUi().modalProgress(true);
          const w = this.getWorkInkClient().getCountryCode() || "";
          const _ = ["AU", "BR", "CA", "DE", "ES", "FR", "GB", "IT", "PL", "US"];
          const h = _.includes(w) ? "spotify_opera" : "Opera_Desktop";
          if (navigator.userAgent.includes("Mac")) {
            window.open("https://workink.click/opera/stable/mac?utm_source=wrk&utm_medium=pb&utm_campaign=" + h + "&utm_content=" + ((y = this.getWorkInkClient().getLinkInfo()) == null ? undefined : y.userId), "_blank");
          } else {
            window.open("https://opera-download.work.ink/", "_blank");
          }
          Ie("operagx_download_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          this.sendMessage({
            event: "installClicked"
          });
          this.toastTimeout = setTimeout(() => {
            be("Start the installer to skip!", "(Re-)Install OperaGX to instantly skip.", "info");
          }, 10000);
          this.timeout = setTimeout(() => {
            this.getWorkInkClient().onWebsocketError(new Event("OperaGX timeout"));
            sl.captureException(new Error("OperaGXMonetization: Installation timeout"));
          }, 120000);
        }
      });
    });
    U(this, eC, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, tC, t => {
      switch (t.event) {
        case "done":
          be("Opera installed.", "Complete more steps to continue.", "success");
          clearTimeout(this.timeout);
          clearTimeout(this.toastTimeout);
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
Jg = "name";
Kg = "timeout";
$g = "toastTimeout";
eC = "abort";
tC = "onMessage";
var nC;
var sC;
var rC;
var aC;
var iC;
var lC;
class b1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.OPERA_GX_IOS);
    U(this, nC, "operaGXiOS");
    U(this, sC, true);
    U(this, rC, "");
    U(this, aC, async () => {
      Ie("operagxios_download_visible");
      var p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("operaGXiOS", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("operagxios_download_start");
        }
      });
    });
    U(this, iC, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, lC, t => {
      switch (t.event) {
        case "done":
          be("Opera GX installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
nC = "name";
sC = "isOffer";
rC = "url";
aC = "run";
iC = "abort";
lC = "onMessage";
var oC;
var cC;
var xC;
var uC;
class g1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 24);
    U(this, "name", "opera2");
    U(this, oC, true);
    U(this, cC, async () => {
      var v = {
        event: "start"
      };
      this.sendMessage(v);
      this.getWorkInkClient().getUi().openModal("opera", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open("https://www.opera.com/partner?utm_medium=pb&utm_source=wrk&utm_campaign=Opera", "_blank");
          this.sendMessage({
            event: "installClicked"
          });
        }
      });
    });
    U(this, xC, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, uC, t => {
      switch (t.event) {
        case "done":
          be("Opera installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
oC = "isOffer";
cC = "run";
xC = "abort";
uC = "onMessage";
var fC;
var dC;
class C1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.OPERA_POPUP);
    U(this, "name", "operaPopup");
    U(this, fC, () => {
      return !ot();
    });
    U(this, dC, async () => {
      this.getWorkInkClient().getUi().addButtonCallback(C => {
        var S;
        var y;
        if (navigator.userAgent.includes("Mac")) {
          window.open("https://workink.click/opera/stable/mac?utm_source=wrk&utm_medium=pb&utm_campaign=Opera_Desktop&utm_content=" + ((S = this.getWorkInkClient().getLinkInfo()) == null ? undefined : S.userId), "_blank");
        } else {
          window.open("https://workink.click/opera/stable/windows?utm_source=wrk&utm_medium=pb&utm_campaign=Opera_Desktop&utm_content=" + ((y = this.getWorkInkClient().getLinkInfo()) == null ? undefined : y.userId), "_blank");
        }
      });
    });
  }
}
fC = "isEligible";
dC = "prepare";
var hC;
var mC;
var AC;
var WC;
var pC;
class k1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 45);
    U(this, hC, "pdfeditor");
    U(this, mC, true);
    U(this, AC, () => {
      return new Promise(p => {
        if (window.navigator.userAgent.includes("Edg")) {
          try {
            const W = {
              message: "wk_installed"
            };
            chrome.runtime.sendMessage("dienpkgnfiifkjalnpmlbbkpoojigana", W, () => {
              p(true);
            });
          } catch {
            p(false);
          }
        } else {
          try {
            const W = {
              message: "wk_installed"
            };
            chrome.runtime.sendMessage("deaiapbieocoklikiokamcdklicacgdo", W, () => {
              p(true);
            });
          } catch {
            p(false);
          }
        }
      });
    });
    U(this, WC, async () => {
      if (await this.isInstalled()) {
        be("Extension already installed.", "Complete more offers to continue.", "success");
        this.sendMessage({
          event: "installed"
        });
        this.setDone();
        const d = {
          userAgent: navigator.userAgent
        };
        Ie("pdfeditor_already_installed", d);
        return;
      }
      this.getWorkInkClient().getUi().openModal("pdfeditor", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          if (!window.navigator.userAgent.includes("Edg")) {
            window.open("https://chromewebstore.google.com/detail/quicksnap/deaiapbieocoklikiokamcdklicacgdo", "_blank");
          } else {
            window.open("https://microsoftedge.microsoft.com/addons/detail/quicksnap/dienpkgnfiifkjalnpmlbbkpoojigana", "_blank");
          }
          const y = setInterval(async () => {
            if (await this.isInstalled()) {
              const D = {
                event: "installed"
              };
              this.sendMessage(D);
              this.setDone();
              this.getWorkInkClient().getUi().closeModal();
              be("Extension installed.", "Complete more offers to continue.", "success");
              const h = {
                userAgent: navigator.userAgent
              };
              Ie("pdfeditor_new_installed", h);
              clearInterval(y);
            }
          }, 250);
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
    });
    U(this, pC, () => {
      return !ot();
    });
  }
}
hC = "name";
mC = "isOffer";
AC = "isInstalled";
WC = "run";
pC = "isEligible";
var vC;
var bC;
var gC;
var CC;
var kC;
var wC;
class w1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 61);
    U(this, vC, "pippit");
    U(this, bC, true);
    U(this, gC, null);
    U(this, CC, null);
    U(this, kC, "");
    U(this, "run", async () => {
      this.sendMessage({
        event: "start"
      });
      this.getWorkInkClient().getUi().openModal("pippit", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          const W = document.createElement("a");
          W.href = this.url;
          W.target = "_blank";
          W.rel = "noreferrer";
          W.click();
          Ie("pippit_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          const f = {
            event: "installClicked"
          };
          this.sendMessage(f);
          this.toastTimeout = setTimeout(() => {
            be("Sign up to Pippit!", "(Re-)Create and account for Pippit to continue.", "info");
          }, 10000);
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, wC, t => {
      switch (t.event) {
        case "done":
          be("Pippit account created.", "Complete more steps to continue.", "success");
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
vC = "name";
bC = "isOffer";
gC = "timeout";
CC = "toastTimeout";
kC = "url";
wC = "onMessage";
var _C;
var IC;
class _1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 21);
    U(this, "name", "popupsMobile");
    U(this, _C, () => {
      return ot();
    });
    U(this, IC, async () => {
      this.getWorkInkClient().getUi().addPreDestinationCallback(() => {
        window.open("https://buzzonclick.com/jump/next.php?r=7585402", "_blank");
      });
      this.getWorkInkClient().getUi().addPreDestinationCallback(() => {
        window.open("https://buzzonclick.com/jump/next.php?r=7585402", "_blank");
      });
    });
  }
}
_C = "isEligible";
IC = "prepare";
var SC;
var yC;
class I1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 20);
    U(this, "name", "popupsDesktop");
    U(this, SC, () => !ot());
    U(this, yC, async () => {
      this.getWorkInkClient().getUi().addPreDestinationCallback(() => {
        const b = this.getWorkInkClient().getCountryCode() || "";
        const S = navigator.userAgent.includes("Mac");
        let y;
        if (S) {
          y = "https://nt-npltfpro.com/?a=280172&c=419380&co=342526&mt=2&s1=wrk";
        } else {
          const W = ["AU", "AT", "CA", "FR", "DE", "JP", "LU", "NL", "NZ", "CH", "GB", "US"];
          const f = ["AD", "BS", "BE", "BO", "BA", "BN", "CO", "CG", "CR", "HR", "CZ", "DK", "EC", "EE", "FI", "GR", "HK", "HU", "IS", "IL", "IT", "JP", "LA", "LV", "LT", "MO", "MY", "MT", "MD", "MA", "NP", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "PR", "QA", "RO", "SA", "RS", "SG", "SI", "ZA", "KR", "ES", "SE", "TH", "AE", "UY", "VU"];
          const w = ["RU", "UA", "BY"];
          if (b === "US") {
            y = "https://eastrk-dn.com/?a=280172&o=168091&c=0&co=342526&mt=2&s1=wrk";
          } else if (W.includes(b)) {
            y = "https://nt-npltfpro.com/?a=280172&o=173644&c=0&co=342526&mt=2&s1=wrk";
          } else if (f.includes(b)) {
            y = "https://nt-npltfpro.com/?a=280172&o=173649&c=0&co=342526&mt=2&s1=wrk";
          } else if (!w.includes(b)) {
            y = "https://eastrk-dn.com/?a=280172&o=170786&c=0&co=342526&mt=2&s1=wrk";
          } else {
            return;
          }
        }
        window.open(y, "_blank");
      });
    });
  }
}
SC = "isEligible";
yC = "prepare";
var TC;
var BC;
var MC;
var DC;
var RC;
var YC;
class S1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 63);
    U(this, TC, "primevideo");
    U(this, BC, true);
    U(this, MC, null);
    U(this, DC, null);
    U(this, "url", "");
    U(this, RC, async () => {
      var C = {
        event: "start"
      };
      this.sendMessage(C);
      this.getWorkInkClient().getUi().openModal("primevideo", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("primevideo_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          var W = {
            event: "installClicked"
          };
          this.sendMessage(W);
          this.toastTimeout = setTimeout(() => {
            be("Sign up to Prime Video!", "(Re-)Create and account for Pippit to continue.", "info");
          }, 10000);
          this.timeout = setTimeout(() => {
            this.getWorkInkClient().onWebsocketError(new Event("Prime Video timeout"));
            sl.captureException(new Error("Prime Video: Sign up timeout"));
          }, 120000);
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, YC, t => {
      switch (t.event) {
        case "done":
          be("Prime Video account created.", "Complete more steps to continue.", "success");
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
TC = "name";
BC = "isOffer";
MC = "timeout";
DC = "toastTimeout";
RC = "run";
YC = "onMessage";
var OC;
var LC;
class y1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 38);
    U(this, OC, "pushNotificationsFullscreen");
    U(this, "isOffer", false);
    U(this, LC, async () => {
      this.getWorkInkClient().getUi().addPreDestinationCallback(() => {
        this.getWorkInkClient().getUi().openNotificationScreenModal(() => {
          if (!this.done) {
            this.setDone();
          }
          if (!this.getWorkInkClient().getUi().continue()) {
            this.getWorkInkClient().getUi().closeModal();
          }
        });
      });
    });
  }
}
OC = "name";
LC = "prepare";
var PC;
var EC;
var NC;
var VC;
var qC;
var UC;
var jC;
class T1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 37);
    U(this, PC, "pushNotifications");
    U(this, EC, true);
    U(this, NC);
    U(this, VC, () => {
      return Notification.permission != "granted";
    });
    U(this, qC, async () => {
      const d = {
        event: "start"
      };
      this.sendMessage(d);
      this.getWorkInkClient().getUi().openModal("pushNotifications", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window._nAdzq = window._nAdzq || [];
          (function () {
            window._nAdzq.push(["setIds", "bd009b51ccd5c392"]);
            let w = "https://notifpush.com/scripts/";
            let _ = document.createElement("script");
            _.type = "text/javascript";
            _.defer = true;
            _.async = true;
            _.src = w + "nadz-sdk.js";
            document.body.appendChild(_);
          })();
          window.Notification.requestPermission();
          this.interval = setInterval(() => {
            if (window.Notification.permission == "granted") {
              this.sendMessage({
                event: "allowed"
              });
              clearInterval(this.interval);
            }
          }, 1000);
        }
      });
    });
    U(this, UC, async () => {
      this.getWorkInkClient().getUi().closeModal();
      clearInterval(this.interval);
      const v = {
        event: "abort"
      };
      this.sendMessage(v);
    });
    U(this, jC, t => {
      switch (t.event) {
        case "done":
          be("Push Notifications enabled.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          clearInterval(this.interval);
          this.setDone();
          break;
      }
    });
  }
}
PC = "name";
EC = "isOffer";
NC = "interval";
VC = "isEligible";
qC = "run";
UC = "abort";
jC = "onMessage";
var zC;
var GC;
var HC;
var QC;
class B1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 42);
    U(this, "name", "quicksnap");
    U(this, zC, true);
    U(this, GC, () => {
      return new Promise(b => {
        if (window.navigator.userAgent.includes("Edg")) {
          try {
            const w = {
              message: "wk_installed"
            };
            chrome.runtime.sendMessage("dienpkgnfiifkjalnpmlbbkpoojigana", w, () => {
              b(true);
            });
          } catch {
            b(false);
          }
        } else {
          try {
            const w = {
              message: "wk_installed"
            };
            chrome.runtime.sendMessage("cdkbepknpekpkhhpdnmmaogojkmoieig", w, () => {
              b(true);
            });
          } catch {
            b(false);
          }
        }
      });
    });
    U(this, HC, async () => {
      if (await this.isInstalled()) {
        be("Extension already installed.", "Complete more offers to continue.", "success");
        const C = {
          event: "installed"
        };
        this.sendMessage(C);
        this.setDone();
        const d = {
          userAgent: navigator.userAgent
        };
        Ie("quicksnap_already_installed", d);
        return;
      }
      this.getWorkInkClient().getUi().openModal("quicksnap", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          if (window.navigator.userAgent.includes("Edg")) {
            window.open("https://microsoftedge.microsoft.com/addons/detail/quicksnap/dienpkgnfiifkjalnpmlbbkpoojigana", "_blank");
          } else {
            window.open("https://chromewebstore.google.com/detail/quicksnap/cdkbepknpekpkhhpdnmmaogojkmoieig", "_blank");
          }
          const W = setInterval(async () => {
            if (await this.isInstalled()) {
              this.sendMessage({
                event: "installed"
              });
              this.setDone();
              this.getWorkInkClient().getUi().closeModal();
              be("Extension installed.", "Complete more offers to continue.", "success");
              const D = {
                userAgent: navigator.userAgent
              };
              Ie("quicksnap_new_installed", D);
              clearInterval(W);
            }
          }, 250);
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
    });
    U(this, QC, () => !ot());
  }
}
zC = "isOffer";
GC = "isInstalled";
HC = "run";
QC = "isEligible";
var XC;
var ZC;
var FC;
var JC;
var KC;
class M1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 33);
    U(this, XC, "raidShadowLegends");
    U(this, ZC, true);
    U(this, FC, async () => {
      var v = {
        event: "start"
      };
      this.sendMessage(v);
      this.getWorkInkClient().getUi().openModal("raidshadowlegends", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open("https://r.srvtrck.com/v2/go?ai=596cac0306454c67b3dd52c3fa124d13&eu=%2Ftdpe%3Ae%2F-loraus.doa%2F%2Femga%2Fedrmic-mhidawpl%2Fgsntsh&t=et9pd%3A1%2F1rec6.bd1o1k5a3l4c2mb%3Fdi7%3D1011073u3dv7d6b3sw9i3%3D517d1s%26%26u5i0%3D%3D0i0%260108612d8w0%2F6o6.0i8t4c1c8a9k9a3t9%2Fds0t9h&sct=0&ct=1699119808738&cu=8d0b6264038541118b969e3191dd099e&w=4&e=1&ykuid=c7cbe7308cad45d5aad9f076f96d43f0&sc=1&cs=a47ad7d8742854aa51aa22cb248f22eb", "_blank");
          var d = {
            event: "installClicked"
          };
          this.sendMessage(d);
        }
      });
    });
    U(this, JC, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, KC, t => {
      switch (t.event) {
        case "done":
          be("Raid Shadow Legends installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
XC = "name";
ZC = "isOffer";
FC = "run";
JC = "abort";
KC = "onMessage";
var $C;
var ek;
class D1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 22);
    U(this, $C, "readArticles2");
    U(this, ek, async () => {
      this.getWorkInkClient().getUi().addButtonCallback(() => {
        this.sendMessage({
          event: "read"
        });
        this.getWorkInkClient().getUi().openReadArticlesModal(() => {
          if (!this.done) {
            this.setDone();
          }
          if (!this.getWorkInkClient().getUi().continue()) {
            this.getWorkInkClient().getUi().closeModal();
            Ie("readarticles_viewed");
          }
        });
      });
    });
  }
}
$C = "name";
ek = "prepare";
var tk;
var nk;
var sk;
var rk;
var ak;
var ik;
var lk;
var ok;
class R1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 64);
    U(this, tk, "rivagauche");
    U(this, nk, true);
    U(this, sk, null);
    U(this, rk, null);
    U(this, ak, "");
    U(this, ik, async () => {
      var d = {
        event: "start"
      };
      this.sendMessage(d);
      this.getWorkInkClient().getUi().openModal("rivagauche", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var y = {
            qaLLV: "hoaVN"
          };
          var W = y;
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("rivagauche_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          var f = {
            event: "installClicked"
          };
          this.sendMessage(f);
          this.toastTimeout = setTimeout(() => {
            be("Install Riva Gauche App!", "(Re-)Install to continue.", "info");
          }, 10000);
          this.timeout = setTimeout(() => {
            if (W.qaLLV === "hoaVN") {
              this.getWorkInkClient().onWebsocketError(new Event("Riva Guache timeout"));
              sl.captureException(new Error("Riva Gauche: Sign up timeout"));
            } else {
              this.getWorkInkClient().onWebsocketError(new y("Riva Guache timeout"));
              W.captureException(new f("Riva Gauche: Sign up timeout"));
            }
          }, 120000);
        }
      });
    });
    U(this, lk, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, ok, t => {
      switch (t.event) {
        case "done":
          be("Riva Gauche installed.", "Complete more steps to continue.", "success");
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
tk = "name";
nk = "isOffer";
sk = "timeout";
rk = "toastTimeout";
ak = "url";
ik = "run";
lk = "abort";
ok = "onMessage";
var ck;
var xk;
var uk;
var fk;
var dk;
var hk;
class Y1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 44);
    U(this, ck, "sheinMobile");
    U(this, xk, true);
    U(this, uk, () => true);
    U(this, fk, async () => {
      this.getWorkInkClient().getUi().openModal("shein", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var C = {
            event: "start"
          };
          this.sendMessage(C);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open("https://coupertlimitedus.sjv.io/19LNqg", "_blank");
          var d = {
            event: "installClicked"
          };
          this.sendMessage(d);
        }
      });
    });
    U(this, dk, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, hk, t => {
      switch (t.event) {
        case "done":
          be("Coupert Extension installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
ck = "name";
xk = "isOffer";
uk = "isEligible";
fk = "run";
dk = "abort";
hk = "onMessage";
var mk;
var Ak;
var Wk;
var pk;
var vk;
var bk;
class O1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 69);
    U(this, "name", "solitairecash");
    U(this, mk, true);
    U(this, Ak, null);
    U(this, Wk, null);
    U(this, pk, "");
    U(this, "run", async () => {
      this.sendMessage({
        event: "start"
      });
      this.getWorkInkClient().getUi().openModal("solitairecash", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          const S = document.createElement("a");
          S.href = this.url;
          S.target = "_blank";
          S.rel = "noreferrer";
          S.click();
          Ie("solitairecash_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          const y = {
            event: "installClicked"
          };
          this.sendMessage(y);
          this.toastTimeout = setTimeout(() => {
            be("Sign up to Solitaire Cash!", "(Re-)Create and account for Solitaire Cash to continue.", "info");
          }, 10000);
        }
      });
    });
    U(this, vk, async () => {
      this.getWorkInkClient().getUi().closeModal();
      const c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, bk, t => {
      switch (t.event) {
        case "done":
          be("Solitaire Cash account created.", "Complete more steps to continue.", "success");
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
mk = "isOffer";
Ak = "timeout";
Wk = "toastTimeout";
pk = "url";
vk = "abort";
bk = "onMessage";
var gk;
var Ck;
var kk;
var wk;
var _k;
class L1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 43);
    U(this, gk, "temuMobile");
    U(this, Ck, true);
    U(this, kk, () => true);
    U(this, "run", async () => {
      this.getWorkInkClient().getUi().openModal("temu", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var y = {
            event: "start"
          };
          this.sendMessage(y);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open("https://inboxdollars.sjv.io/2az5xD", "_blank");
          Ie("inboxdollars_signup_start", {
            platform: navigator.userAgent.includes("Android") ? "Android" : "iOS"
          });
          var W = {
            event: "installClicked"
          };
          this.sendMessage(W);
        }
      });
    });
    U(this, wk, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, _k, t => {
      switch (t.event) {
        case "done":
          be("InboxDollars account created.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
      }
    });
  }
}
gk = "name";
Ck = "isOffer";
kk = "isEligible";
wk = "abort";
_k = "onMessage";
var Ik;
var Sk;
var yk;
var Tk;
var Bk;
var Mk;
var Dk;
class P1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 66);
    U(this, Ik, "testerup");
    U(this, Sk, true);
    U(this, yk, null);
    U(this, Tk, null);
    U(this, Bk, "");
    U(this, Mk, async () => {
      this.sendMessage({
        event: "start"
      });
      this.getWorkInkClient().getUi().openModal("testerup", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          const S = document.createElement("a");
          S.href = this.url;
          S.target = "_blank";
          S.rel = "noreferrer";
          S.click();
          Ie("testerup_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          this.sendMessage({
            event: "installClicked"
          });
          this.toastTimeout = setTimeout(() => {
            be("Sign up to Testerup!", "(Re-)Create and account for Testerup to continue.", "info");
          }, 10000);
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
      const c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, Dk, t => {
      switch (t.event) {
        case "done":
          be("Testerup account created.", "Complete more steps to continue.", "success");
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
Ik = "name";
Sk = "isOffer";
yk = "timeout";
Tk = "toastTimeout";
Bk = "url";
Mk = "run";
Dk = "onMessage";
var Rk;
var Yk;
var Ok;
var Lk;
var Pk;
class E1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 39);
    U(this, Rk, "tiktok");
    U(this, Yk, true);
    U(this, "url", "");
    U(this, Ok, async () => {
      Ie("tiktok_download_visible");
      this.sendMessage({
        event: "start"
      });
      this.getWorkInkClient().getUi().openModal("tiktok", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          const b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          const S = document.createElement("a");
          S.href = this.url;
          S.target = "_blank";
          S.rel = "noreferrer";
          S.click();
          Ie("tiktok_download_start");
        }
      });
    });
    U(this, Lk, async () => {
      this.getWorkInkClient().getUi().closeModal();
      const c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, Pk, t => {
      switch (t.event) {
        case "done":
          be("TikTok installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
Rk = "name";
Yk = "isOffer";
Ok = "run";
Lk = "abort";
Pk = "onMessage";
var Ek;
var Nk;
var Vk;
var qk;
var Uk;
var jk;
var zk;
var Gk;
class N1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 68);
    U(this, Ek, "timo");
    U(this, Nk, true);
    U(this, Vk, null);
    U(this, qk, null);
    U(this, Uk, "");
    U(this, jk, async () => {
      const p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("timo", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          const b = document.createElement("a");
          b.href = this.url;
          b.target = "_blank";
          b.rel = "noreferrer";
          b.click();
          Ie("timo_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          const S = {
            event: "installClicked"
          };
          this.sendMessage(S);
          this.toastTimeout = setTimeout(() => {
            be("Sign up to Timo!", "(Re-)Create and account for Timo to continue.", "info");
          }, 10000);
        }
      });
    });
    U(this, zk, async () => {
      this.getWorkInkClient().getUi().closeModal();
      const c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, Gk, t => {
      switch (t.event) {
        case "done":
          be("Timo account created.", "Complete more steps to continue.", "success");
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
Ek = "name";
Nk = "isOffer";
Vk = "timeout";
qk = "toastTimeout";
Uk = "url";
jk = "run";
zk = "abort";
Gk = "onMessage";
var Hk;
var Qk;
var Xk;
var Zk;
var Fk;
class V1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.W_AMAZON_SHOPPING);
    U(this, Hk, "wAmazonShopping");
    U(this, Qk, true);
    U(this, Xk, "");
    U(this, "run", async () => {
      Ie("wamazonshopping_download_visible");
      var p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("wAmazonShopping", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open("https://gdmtrck.com/?a=280172&c=308782&co=342526&mt=7", "_blank");
          Ie("wamazonshopping_download_start");
        }
      });
    });
    U(this, Zk, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, Fk, t => {
      switch (t.event) {
        case "done":
          be("App installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
Hk = "name";
Qk = "isOffer";
Xk = "url";
Zk = "abort";
Fk = "onMessage";
var Jk;
var Kk;
var $k;
class q1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.W_ANTI_THEFT_MY_PHONE);
    U(this, "name", "wAntiTheftMyPhone");
    U(this, Jk, true);
    U(this, "url", "");
    U(this, "run", async () => {
      Ie("wantitheftmyphone_download_visible");
      this.sendMessage({
        event: "start"
      });
      this.getWorkInkClient().getUi().openModal("wAntiTheftMyPhone", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("wantitheftmyphone_download_start");
        }
      });
    });
    U(this, Kk, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, $k, t => {
      switch (t.event) {
        case "done":
          be("App installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
Jk = "isOffer";
Kk = "abort";
$k = "onMessage";
var e2;
var t2;
var n2;
var s2;
class U1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.W_AUTO_CLICKER);
    U(this, "name", "wAutoClicker");
    U(this, e2, true);
    U(this, t2, "");
    U(this, "run", async () => {
      Ie("wautoclicker_download_visible");
      this.sendMessage({
        event: "start"
      });
      this.getWorkInkClient().getUi().openModal("wAutoClicker", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("wautoclicker_download_start");
        }
      });
    });
    U(this, n2, async () => {
      this.getWorkInkClient().getUi().closeModal();
      this.sendMessage({
        event: "abort"
      });
    });
    U(this, s2, t => {
      switch (t.event) {
        case "done":
          be("App installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
e2 = "isOffer";
t2 = "url";
n2 = "abort";
s2 = "onMessage";
var r2;
var a2;
var i2;
class j1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.W_CASH_EM_ALL);
    U(this, "name", "wCashEmAll");
    U(this, "isOffer", true);
    U(this, r2, "");
    U(this, "run", async () => {
      Ie("wcashemall_download_visible");
      this.sendMessage({
        event: "start"
      });
      this.getWorkInkClient().getUi().openModal("wCashEmAll", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("wcashemall_download_start");
        }
      });
    });
    U(this, a2, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, i2, t => {
      switch (t.event) {
        case "done":
          be("App installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
r2 = "url";
a2 = "abort";
i2 = "onMessage";
var l2;
var o2;
var c2;
var x2;
var u2;
var f2;
class z1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.W_CASH_GIRAFFE);
    U(this, l2, "wCashGiraffe");
    U(this, o2, true);
    U(this, c2, "");
    U(this, x2, async () => {
      Ie("wcashgiraffe_download_visible");
      var p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("wCashGiraffe", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("wcashgiraffe_download_start");
        }
      });
    });
    U(this, u2, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, f2, t => {
      switch (t.event) {
        case "done":
          be("App installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
l2 = "name";
o2 = "isOffer";
c2 = "url";
x2 = "run";
u2 = "abort";
f2 = "onMessage";
var d2;
var h2;
var m2;
var A2;
var W2;
class G1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.W_FLASHLIGHT);
    U(this, d2, "wFlashlight");
    U(this, h2, true);
    U(this, "url", "");
    U(this, m2, async () => {
      Ie("wflashlight_download_visible");
      var v = {
        event: "start"
      };
      this.sendMessage(v);
      this.getWorkInkClient().getUi().openModal("wFlashlight", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var d = {
            event: "download"
          };
          this.sendMessage(d);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("wflashlight_download_start");
        }
      });
    });
    U(this, A2, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, W2, t => {
      switch (t.event) {
        case "done":
          be("App installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
d2 = "name";
h2 = "isOffer";
m2 = "run";
A2 = "abort";
W2 = "onMessage";
var p2;
var v2;
var b2;
var g2;
var C2;
class H1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.W_FLASHLIGHT_SOS);
    U(this, p2, "wFlashlightSOS");
    U(this, v2, true);
    U(this, b2, "");
    U(this, g2, async () => {
      Ie("wflashlightsos_download_visible");
      var p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("wFlashlightSOS", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("wflashlightsos_download_start");
        }
      });
    });
    U(this, "abort", async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, C2, t => {
      switch (t.event) {
        case "done":
          be("App installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
p2 = "name";
v2 = "isOffer";
b2 = "url";
g2 = "run";
C2 = "onMessage";
var k2;
var w2;
var _2;
var I2;
var S2;
var y2;
class Q1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.W_MOBILE_LEGENDS);
    U(this, k2, "wMobileLegends");
    U(this, w2, true);
    U(this, _2, "");
    U(this, I2, async () => {
      Ie("wmobilelegends_download_visible");
      var p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("wMobileLegends", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("wmobilelegends_download_start");
        }
      });
    });
    U(this, S2, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, y2, t => {
      switch (t.event) {
        case "done":
          be("App installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
k2 = "name";
w2 = "isOffer";
_2 = "url";
I2 = "run";
S2 = "abort";
y2 = "onMessage";
var T2;
var B2;
var M2;
var D2;
var R2;
class X1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", +ke.W_PRANK_CALL_VIDEO);
    U(this, T2, "wPrankCallVideo");
    U(this, B2, true);
    U(this, "url", "");
    U(this, M2, async () => {
      Ie("wflashlight_download_visible");
      var p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("wPrankCallVideo", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          var b = {
            event: "download"
          };
          this.sendMessage(b);
          this.getWorkInkClient().getUi().modalProgress(true);
          window.open(this.url, "_blank");
          Ie("wprankcallvideo_download_start");
        }
      });
    });
    U(this, D2, async () => {
      this.getWorkInkClient().getUi().closeModal();
      var c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, R2, t => {
      switch (t.event) {
        case "done":
          be("App installed.", "Complete more steps to continue.", "success");
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
T2 = "name";
B2 = "isOffer";
M2 = "run";
D2 = "abort";
R2 = "onMessage";
var Y2;
var O2;
var L2;
var P2;
var E2;
var N2;
var V2;
class Z1 extends Te {
  constructor() {
    super(...arguments);
    U(this, "id", 67);
    U(this, Y2, "xanh");
    U(this, "isOffer", true);
    U(this, O2, null);
    U(this, L2, null);
    U(this, P2, "");
    U(this, E2, async () => {
      const p = {
        event: "start"
      };
      this.sendMessage(p);
      this.getWorkInkClient().getUi().openModal("xanh", {
        abortButtonCallback: this.abort,
        installButtonCallback: () => {
          this.getWorkInkClient().getUi().modalProgress(true);
          const b = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          window.open("https://publishers.revenueuniverse.com/click.php?affiliate=8286&campaign=51185&sid=SFB_1361___&app=1361&sid2=" + b, "_blank");
          Ie("xanh_signup_start", {
            platform: navigator.userAgent.includes("Mac") ? "Mac" : "Windows"
          });
          const S = {
            event: "installClicked"
          };
          this.sendMessage(S);
          this.toastTimeout = setTimeout(() => {
            be("Sign up to DraftKings!", "Create and account for DraftKings to continue.", "info");
          }, 10000);
        }
      });
    });
    U(this, N2, async () => {
      this.getWorkInkClient().getUi().closeModal();
      const c = {
        event: "abort"
      };
      this.sendMessage(c);
    });
    U(this, V2, t => {
      switch (t.event) {
        case "done":
          be("DraftKings account created.", "Complete more steps to continue.", "success");
          if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
          }
          this.getWorkInkClient().getUi().closeModal();
          this.setDone();
          break;
        case "downloadUrl":
          this.url = t.url;
          break;
      }
    });
  }
}
Y2 = "name";
O2 = "timeout";
L2 = "toastTimeout";
P2 = "url";
E2 = "run";
N2 = "abort";
V2 = "onMessage";
var ct = (o => {
  o.PONG = "s_pgxx";
  o.LINK_INFO = "s_lkif";
  o.WORKINK_PASS_LEFT = "s_wkpl";
  o.START_TURNSTILE_CHECK = "s_tstc";
  o.SOCIAL_RUNNING = "s_scrn";
  o.RECAPTCHA_OKAY = "s_rcka";
  o.PROXY_DETECTED = "s_prxd";
  o.ERROR = "s_errx";
  o.S_PREMIUM_ONLY = "s_prmo";
  o.HCAPTCHA_OKAY = "s_hcok";
  o.MONETIZATION = "s_mntz";
  o.SOCIAL_DONE = "s_scdn";
  o.START_HCAPTCHA_CHECK = "s_sthc";
  o.KEYAPP_KEY_INVALID = "s_kyiv";
  o.LINK_NOT_FOUND = "s_lknf";
  o.REDIRECTION_CANCELED = "s_rdcc";
  o.START_RECAPTCHA_CHECK = "s_strc";
  o.LINK_DESTINATION = "s_lkds";
  return o;
})(ct || {});
var q2;
var U2;
var j2;
var z2;
var G2;
var H2;
var Q2;
var X2;
var Z2;
var F2;
var J2;
var K2;
var $2;
var e4;
var t4;
var n4;
var s4;
var r4;
var a4;
var i4;
var l4;
var o4;
var c4;
var x4;
var u4;
var f4;
var d4;
var h4;
var m4;
var A4;
var W4;
var p4;
var v4;
var b4;
var g4;
var C4;
var k4;
var w4;
var _4;
var I4;
var S4;
var y4;
var T4;
class F1 {
  constructor(r, t) {
    U(this, q2, window.location.hostname == "localhost" ? "wss://work.ink/_api/v2/ws" : "wss://" + window.location.hostname + "/_api/v2/ws");
    U(this, U2);
    U(this, j2, 0);
    U(this, z2, 0);
    U(this, G2, []);
    U(this, H2, 0);
    U(this, Q2, 0);
    U(this, "ui");
    U(this, X2, []);
    U(this, Z2);
    U(this, "linkInfo");
    U(this, F2, Number.MAX_SAFE_INTEGER);
    U(this, J2, Number.MAX_SAFE_INTEGER);
    U(this, K2, false);
    U(this, $2, "1BOzLhMhEWp7ywQOVUOEWQmltpcAzh2n6iadhOp9bhRgaOlz5kG1UUa7F5KyfgBR");
    U(this, e4, "CyewCaL9c9XpUqtQbeDnqXtjAQDfjRMJq0jkK8v0WluhBTMhZZJQKwhyynxBvug1");
    U(this, t4, () => {
      return this.destinationKnown;
    });
    U(this, n4, () => {
      return this.countryCode;
    });
    U(this, "getUi", () => this.ui);
    U(this, s4, () => {
      return this.monetizations;
    });
    U(this, r4, () => {
      return this.linkInfo;
    });
    U(this, a4, () => {
      return this.neededOffers;
    });
    U(this, i4, () => {
      return this.monetizationsCount;
    });
    U(this, l4, r => {
      switch (r) {
        case ke.READ_ARTICLES:
          return new D1(this);
        case ke.BROWSER_EXTENSION:
          return new a1(this);
        case ke.POPUPS_DESKTOP:
          return new I1(this);
        case ke.BUFF_DESKTOP:
          return new i1(this);
        case ke.BUFF_MOBILE:
          return new l1(this);
        case ke.POPUPS_MOBILE:
          return new _1(this);
        case ke.OPERA:
          return new g1(this);
        case ke.OPERA_GX:
          return new v1(this);
        case ke.INSTALLER:
          return new u1(this);
        case ke.NORDVPN:
          return new m1(this);
        case ke.RAID_SHADOW_LEGENDS:
          return new M1(this);
        case ke.NORTON_ANTIVIRUS:
          return new A1(this);
        case ke.LUME_BROWSER_ANDROID:
          return new h1(this);
        case ke.PUSH_NOTIFICATIONS:
          return new T1(this);
        case ke.PUSH_NOTIFICATIONS_FULLSCREEN:
          return new y1(this);
        case ke.TIKTOK:
          return new E1(this);
        case ke.INSTALL_APP:
          return new x1(this);
        case ke.OPERAGX_MOBILE:
          return new p1(this);
        case ke.QUICKSNAP:
          return new B1(this);
        case ke.TEMU:
          return new L1(this);
        case ke.SHEIN:
          return new Y1(this);
        case ke.PDF_EDITOR:
          return new k1(this);
        case ke.OPERA_GX_IOS:
          return new b1(this);
        case ke.W_ANTI_THEFT_MY_PHONE:
          return new q1(this);
        case ke.W_AUTO_CLICKER:
          return new U1(this);
        case ke.W_FLASHLIGHT:
          return new G1(this);
        case ke.W_FLASHLIGHT_SOS:
          return new H1(this);
        case ke.W_PRANK_CALL_VIDEO:
          return new X1(this);
        case ke.W_AMAZON_SHOPPING:
          return new V1(this);
        case ke.W_CASH_EM_ALL:
          return new j1(this);
        case ke.W_CASH_GIRAFFE:
          return new z1(this);
        case ke.W_MOBILE_LEGENDS:
          return new Q1(this);
        case ke.BETTERDEALS:
          return new r1(this);
        case ke.OPERA_POPUP:
          return new C1(this);
        case ke.LDPLAYER:
          return new f1(this);
        case ke.PIPPIT:
          return new w1(this);
        case ke.ONTHATASS:
          return new W1(this);
        case ke.PRIMEVIDEO:
          return new S1(this);
        case ke.RIVAGAUCHE:
          return new R1(this);
        case ke.LENME:
          return new d1(this);
        case ke.TESTERUP:
          return new P1(this);
        case ke.SOLITAIRECASH:
          return new O1(this);
        case ke.TIMO:
          return new N1(this);
        case ke.XANH:
          return new Z1(this);
        case ke.GAUTHAI:
          return new c1(this);
        case ke.EXTERNAL_ARTICLES:
          return new o1(this);
      }
    });
    U(this, o4, r => {
      return this.monetizations.filter(c => c.id == r).pop();
    });
    U(this, c4, (r, t, e, a) => {
      document.querySelectorAll = new Proxy(document.querySelectorAll, {
        apply: (Y, j, Z) => {
          if (Z[0] == ".button.large.accessBtn") {
            return [];
          } else {
            return Y.apply(j, Z);
          }
          this.close();
        }
      });
      const h = window.localStorage.getItem("customerToken") ?? "";
      let D = "";
      try {
        D = new URL(window.location.href).searchParams.get("sr") ?? "";
      } catch {}
      this.websocket = new WebSocket(this.url + ("?userId=" + r + "&custom=" + encodeURIComponent(t) + "&referrer=" + encodeURIComponent(e) + "&toLink=" + encodeURIComponent(a) + "&serverOverride=" + encodeURIComponent(D) + "&customerSessionToken=" + encodeURIComponent(h)));
      this.websocket.onopen = Y => {
        this.onConnected();
        this.connectedAtTimestamp = Date.now();
        setInterval(() => {
          this.xnlthabfpnggipajloc(dt.PING, {
            timestamp: Date.now()
          });
          this.lastServerMessageTimestamp < Date.now() - 5000;
        }, 2000);
        setInterval(() => {
          if (this.connectedAtTimestamp < Date.now() - 1800000) {
            this.close();
            this.onWebsocketError(new Event("Atomatically disconnected due to inactivity for 30 minutes"));
          }
        }, 10000);
      };
      this.websocket.onerror = this.onWebsocketError;
      this.websocket.onmessage = this.___onMessage;
      document.onfocus = () => {
        this.xnlthabfpnggipajloc(dt.FOCUS, {});
      };
      document.onblur = () => {
        this.xnlthabfpnggipajloc(dt.FOCUS_LOST, {});
      };
    });
    U(this, x4, () => {
      this.messageBuffer = [];
      this.websocket.close();
    });
    U(this, u4, async r => {
      let v;
      let p = "wtITVIJsOpyxK77yWGe0eOXcOddSbMGrjzsUfVATkaY2xYhfFWYTaiNOw9Ehb24W";
      let C = "oXepUY7bDdNpMKBehOiS0q9dsZZamzjAk28RrTHMQjkyKkYSxAHtkdICDW981EdF";
      try {
        let d = "";
        const b = p.split("").map(Y => Y.charCodeAt(0));
        const S = r.data.substring(0, 2);
        let y = parseInt(S, 16);
        const W = r.data.substring(2).match(/.{1,2}/g) || [];
        for (let Y = 0; Y < W.length; Y++) {
          const j = parseInt(W[Y], 16);
          const Z = b[(Y * 2 + y) % b.length];
          const q = (j - Y % 8 + 256) % 256;
          const M = String.fromCharCode(q ^ Z);
          d += M;
          y = (y * 19 + 29) % 256;
        }
        v = JSON.parse(d);
        let f = "";
        const w = C.split("").map(Y => Y.charCodeAt(0));
        const _ = v.payload.substring(0, 2);
        let h = parseInt(_, 16);
        const D = v.payload.substring(2).match(/.{1,2}/g) || [];
        for (let Y = 0; Y < D.length; Y++) {
          const j = parseInt(D[Y], 16);
          const Z = w[(Y * 2 + h) % w.length];
          const q = (j - Y % 8 + 256) % 256;
          const M = String.fromCharCode(q ^ Z);
          f += M;
          h = (h * 19 + 29) % 256;
        }
        v.payload = JSON.parse(f);
      } catch (d) {
        console.error("Cannot parse message: ");
        console.error(d);
        return;
      }
      this.lastServerMessageTimestamp = Date.now();
      switch (v.type) {
        case ct.ERROR:
          this.onError(v.payload);
          break;
        case ct.LINK_DESTINATION:
          this.destinationKnown = true;
          this.onLinkDestination(v.payload);
          break;
        case ct.LINK_INFO:
          const d = v.payload;
          this.linkInfo = d;
          this.monetizationLevel = d.monetizationLevel != null ? parseFloat(d.monetizationLevel.toString()) : 0;
          this.monetizationsCount = d.monetizationsNeeded ?? 0;
          if (d.onlyStaticMonetizations) {
            for (let b = 0; b < d.monetizationsNeeded; b++) {
              const S = this.createMonetizationsInstance(d.monetizations[b]);
              if (!!S && !!S.isEligible()) {
                await S.prepare();
                for await (const y of S.alsoLoad) {
                  const W = this.createMonetizationsInstance(y);
                  if (!!W && !!W.isEligible()) {
                    await W.prepare();
                    this.monetizations.push(S);
                  }
                }
                this.monetizations.push(S);
              }
            }
          } else {
            for (let b = 0; b < d.monetizations.length; b++) {
              const S = this.createMonetizationsInstance(d.monetizations[b]);
              if (!!S && !!S.isEligible()) {
                await S.prepare();
                for await (const y of S.alsoLoad) {
                  const W = this.createMonetizationsInstance(y);
                  if (!W || !W.isEligible()) {
                    continue;
                  }
                  await W.prepare();
                  this.monetizations.push(S);
                }
                this.monetizations.push(S);
              }
            }
          }
          this.neededOffers = this.monetizationsCount - this.monetizations.filter(b => !b.isOffer).length;
          this.onLinkInfo(v.payload);
          break;
        case ct.LINK_NOT_FOUND:
          this.onLinkNotFound();
          break;
        case ct.PROXY_DETECTED:
          this.onProxyDetected();
          break;
        case ct.REDIRECTION_CANCELED:
          this.onRedirectionCanceled();
          break;
        case ct.PREMIUM_ONLY:
          this.onPremimumOnly();
          break;
        case ct.SOCIAL_DONE:
          this.onSocialDone(v.payload);
          break;
        case ct.SOCIAL_RUNNING:
          this.onSocialRunning(v.payload);
          break;
        case ct.START_HCAPTCHA_CHECK:
          this.onStartHcaptchaCheck();
          break;
        case ct.START_RECAPTCHA_CHECK:
          this.onStartRecaptcha(v.payload);
          break;
        case ct.RECAPTCHA_OKAY:
          break;
        case ct.WORKINK_PASS_LEFT:
          this.onWorkinkPassLeft(v.payload);
          break;
        case ct.MONETIZATION:
          this._onMonetizationMessage(v.payload);
          break;
        case ct.KEYAPP_KEY_INVALID:
          this.onKeyappKeyInvalid();
          break;
      }
    });
    U(this, f4, r => {
      const c = r.type;
      this.monetizations.filter(v => v.name == c)[0].onMessage(r.payload);
    });
    U(this, d4, (r, t) => {
      let d = "wtITVIJsOpyxK77yWGe0eOXcOddSbMGrjzsUfVATkaY2xYhfFWYTaiNOw9Ehb24W";
      let b = "oXepUY7bDdNpMKBehOiS0q9dsZZamzjAk28RrTHMQjkyKkYSxAHtkdICDW981EdF";
      function S(y, W) {
        let _ = "";
        const h = W.split("").map(Y => Y.charCodeAt(0));
        let D = Date.now() % 256;
        _ += D.toString(16).padStart(2, "0");
        for (let Y = 0; Y < y.length; Y++) {
          const j = y.charCodeAt(Y);
          const Z = h[(Y * 2 + D) % h.length];
          const q = ((j ^ Z) + Y % 8) % 256;
          _ += q.toString(16).padStart(2, "0");
          D = (D * 19 + 29) % 256;
        }
        return _;
      }
      t = S(JSON.stringify(t), b);
      if (this.websocket.readyState == this.websocket.OPEN) {
        if (this.messageBuffer.length > 0) {
          this.messageBuffer.forEach(W => {
            this.websocket.send(W);
          });
        }
        const y = {
          type: r,
          payload: t
        };
        this.websocket.send(S(JSON.stringify(y), d));
      } else {
        const y = {
          type: r,
          payload: t
        };
        this.messageBuffer.push(S(JSON.stringify(y), d));
      }
    });
    U(this, h4, () => {
      const a = {
        abortButtonCallback: () => {},
        installButtonCallback: () => {}
      };
      this.getUi().openModal("premiumOnly", a);
    });
    U(this, "_2");
    U(this, m4, () => {});
    U(this, A4, r => {});
    U(this, W4, r => {});
    U(this, p4, r => {});
    U(this, v4, r => {});
    U(this, b4, r => {});
    U(this, g4, () => {});
    U(this, C4, () => {});
    U(this, k4, () => {});
    U(this, w4, () => {});
    U(this, _4, r => {});
    U(this, I4, r => {});
    U(this, S4, () => {});
    U(this, y4, r => {});
    U(this, T4, r => {});
    this.ui = new s1(r);
    this.countryCode = t;
  }
  [(q2 = "url", U2 = "websocket", j2 = "neededOffers", z2 = "offersDone", G2 = "monetizations", H2 = "monetizationLevel", Q2 = "monetizationsCount", X2 = "messageBuffer", Z2 = "countryCode", F2 = "lastServerMessageTimestamp", J2 = "connectedAtTimestamp", K2 = "destinationKnown", $2 = "encryptionTokenOne", e4 = "encryptionTokenTwo", "xzutemrmdcpffnuytjvspb")](r, t) {
    this.close();
  }
  hclklzjdoduaapcfnzqe(r, t) {
    this.close();
  }
  htewbxfggeuwvxvwqk(r, t) {
    this.close();
  }
  pjqdscgldrqmdwaqunkoxli(r, t) {
    this.close();
  }
  [(t4 = "isDestinationKnown", n4 = "getCountryCode", s4 = "getMonetizations", r4 = "getLinkInfo", a4 = "getNeededOffers", i4 = "getMonetizationCount", l4 = "createMonetizationsInstance", o4 = "getMonetizationById", c4 = "connect", x4 = "close", u4 = "___onMessage", f4 = "_onMonetizationMessage", d4 = "xnlthabfpnggipajloc", h4 = "onPremimumOnly", "xzutemrmdcpffnuytjvspb")](r, t) {
    this.close();
  }
  hclklzjdoduaapcfnzqe(r, t) {
    this.close();
  }
  htewbxfggeuwvxvwqk(r, t) {
    this.close();
  }
  pjqdscgldrqmdwaqunkoxli(r, t) {
    this.close();
  }
}
m4 = "onConnected";
A4 = "onLinkInfo";
W4 = "onStartRecaptcha";
p4 = "onSocialRunning";
v4 = "onSocialDone";
b4 = "onLinkDestination";
g4 = "onStartHcaptchaCheck";
C4 = "onLinkNotFound";
k4 = "onProxyDetected";
w4 = "onRedirectionCanceled";
_4 = "onError";
I4 = "onWorkinkPassLeft";
S4 = "onKeyappKeyInvalid";
y4 = "onOfferDone";
T4 = "onWebsocketError";
function v0(o, r, t) {
  const e = o.slice();
  e[52] = r[t];
  e[54] = t;
  return e;
}
function b0(o, r, t) {
  const e = o.slice();
  e[55] = r[t];
  e[57] = t;
  return e;
}
function J1(o) {
  let r;
  let t;
  let e = Intl.NumberFormat().format(o[1]) + "";
  let a;
  let c;
  let v;
  let p;
  let C;
  let d;
  let b;
  let S;
  let y;
  let W;
  let f;
  let w;
  let _;
  let h;
  let D;
  let Y;
  let j;
  let Z;
  let q;
  let M;
  let O;
  let X;
  const Q = [tm, em, $1];
  const F = [];
  function oe(xe, ye) {
    if (xe[0].length) {
      return 0;
    } else if (xe[5] && xe[5].length) {
      return 1;
    } else {
      return 2;
    }
  }
  _ = oe(o);
  h = F[_] = Q[_](o);
  let ce = (o[8].length > 1 || o[9]) && g0(o);
  let ve = Dt(o[4].split(/\. (?=[A-Z])/g).filter(_0));
  let ue = [];
  for (let xe = 0; xe < ve.length; xe += 1) {
    ue[xe] = w0(v0(o, ve, xe));
  }
  const Me = xe => te(ue[xe], 1, 1, () => {
    ue[xe] = null;
  });
  function Ye(xe, ye) {
    if (ot()) {
      return sm;
    } else {
      return rm;
    }
  }
  let Se = Ye()(o);
  return {
    c() {
      r = E("div");
      t = E("span");
      a = re(e);
      c = re(" views");
      v = G();
      p = E("span");
      C = re(o[11]);
      b = G();
      S = E("h1");
      y = re(o[2]);
      f = G();
      w = E("div");
      h.c();
      D = G();
      if (ce) {
        ce.c();
      }
      Y = G();
      j = E("div");
      for (let xe = 0; xe < ue.length; xe += 1) {
        ue[xe].c();
      }
      Z = G();
      Se.c();
      q = ie();
      this.h();
    },
    l(xe) {
      r = N(xe, "DIV", {
        class: true
      });
      var ye = J(r);
      t = N(ye, "SPAN", {
        class: true
      });
      var et = J(t);
      a = ae(et, e);
      c = ae(et, " views");
      et.forEach(R);
      v = H(ye);
      p = N(ye, "SPAN", {
        class: true
      });
      var He = J(p);
      C = ae(He, o[11]);
      He.forEach(R);
      ye.forEach(R);
      b = H(xe);
      S = N(xe, "H1", {
        "data-maxrows": true,
        class: true
      });
      var it = J(S);
      y = ae(it, o[2]);
      it.forEach(R);
      f = H(xe);
      w = N(xe, "DIV", {
        class: true
      });
      var Vr = J(w);
      h.l(Vr);
      Vr.forEach(R);
      D = H(xe);
      if (ce) {
        ce.l(xe);
      }
      Y = H(xe);
      j = N(xe, "DIV", {
        class: true
      });
      var de = J(j);
      for (let Aa = 0; Aa < ue.length; Aa += 1) {
        ue[Aa].l(de);
      }
      de.forEach(R);
      Z = H(xe);
      Se.l(xe);
      q = ie();
      this.h();
    },
    h() {
      P(t, "class", "text-sm font-medium relative flex items-center");
      P(p, "class", "text-sm font-medium relative flex items-center ml-5 before:content-[''] before:h-1 before:w-1 before:rounded-full before:bg-black before:absolute before:-left-3 before:scale-90");
      P(r, "class", d = "flex items-center mb-4 " + o[14] + " svelte-1ofkre5");
      P(S, "data-maxrows", "3");
      P(S, "class", W = "text-3xl font-black block mb-8 leading-[48px] " + o[15] + " svelte-1ofkre5");
      P(w, "class", "flex items-center w-full mb-8");
      P(j, "class", "[&:not(:first-child)]:mt-12");
    },
    m(xe, ye) {
      L(xe, r, ye);
      V(r, t);
      V(t, a);
      V(t, c);
      V(r, v);
      V(r, p);
      V(p, C);
      o[34](r);
      L(xe, b, ye);
      L(xe, S, ye);
      V(S, y);
      o[36](S);
      L(xe, f, ye);
      L(xe, w, ye);
      F[_].m(w, null);
      L(xe, D, ye);
      if (ce) {
        ce.m(xe, ye);
      }
      L(xe, Y, ye);
      L(xe, j, ye);
      for (let et = 0; et < ue.length; et += 1) {
        if (ue[et]) {
          ue[et].m(j, null);
        }
      }
      L(xe, Z, ye);
      Se.m(xe, ye);
      L(xe, q, ye);
      M = true;
      if (!O) {
        X = [se(r, "animationend", o[35]), se(S, "animationend", o[37])];
        O = true;
      }
    },
    p(xe, ye) {
      if ((!M || ye[0] & 2) && e !== (e = Intl.NumberFormat().format(xe[1]) + "")) {
        ge(a, e);
      }
      if (!M || ye[0] & 2048) {
        ge(C, xe[11]);
      }
      if (!M || ye[0] & 16384 && d !== (d = "flex items-center mb-4 " + xe[14] + " svelte-1ofkre5")) {
        P(r, "class", d);
      }
      if (!M || ye[0] & 4) {
        ge(y, xe[2]);
      }
      if (!M || ye[0] & 32768 && W !== (W = "text-3xl font-black block mb-8 leading-[48px] " + xe[15] + " svelte-1ofkre5")) {
        P(S, "class", W);
      }
      let et = _;
      _ = oe(xe);
      if (_ === et) {
        F[_].p(xe, ye);
      } else {
        Ne();
        te(F[et], 1, 1, () => {
          F[et] = null;
        });
        Ve();
        h = F[_];
        if (h) {
          h.p(xe, ye);
        } else {
          h = F[_] = Q[_](xe);
          h.c();
        }
        $(h, 1);
        h.m(w, null);
      }
      if (xe[8].length > 1 || xe[9]) {
        if (ce) {
          ce.p(xe, ye);
          if (ye[0] & 768) {
            $(ce, 1);
          }
        } else {
          ce = g0(xe);
          ce.c();
          $(ce, 1);
          ce.m(Y.parentNode, Y);
        }
      } else if (ce) {
        Ne();
        te(ce, 1, 1, () => {
          ce = null;
        });
        Ve();
      }
      if (ye[0] & 16) {
        ve = Dt(xe[4].split(/\. (?=[A-Z])/g).filter(_0));
        let He;
        for (He = 0; He < ve.length; He += 1) {
          const it = v0(xe, ve, He);
          if (ue[He]) {
            ue[He].p(it, ye);
            $(ue[He], 1);
          } else {
            ue[He] = w0(it);
            ue[He].c();
            $(ue[He], 1);
            ue[He].m(j, null);
          }
        }
        Ne();
        He = ve.length;
        for (; He < ue.length; He += 1) {
          Me(He);
        }
        Ve();
      }
    },
    i(xe) {
      if (!M) {
        $(h);
        $(ce);
        for (let ye = 0; ye < ve.length; ye += 1) {
          $(ue[ye]);
        }
        M = true;
      }
    },
    o(xe) {
      te(h);
      te(ce);
      ue = ue.filter(Boolean);
      for (let ye = 0; ye < ue.length; ye += 1) {
        te(ue[ye]);
      }
      M = false;
    },
    d(xe) {
      if (xe) {
        R(r);
        R(b);
        R(S);
        R(f);
        R(w);
        R(D);
        R(Y);
        R(j);
        R(Z);
        R(q);
      }
      o[34](null);
      o[36](null);
      F[_].d();
      if (ce) {
        ce.d(xe);
      }
      Pa(ue, xe);
      Se.d(xe);
      O = false;
      at(X);
    }
  };
}
function K1(o) {
  let r;
  let t = "<span class=\"flex items-center before:content-[&#39;&#39;] before:h-4 before:w-[100px] before:bg-[rgb(230,230,230)] before:rounded before:mr-4 after:content-[&#39;&#39;] after:h-4 after:w-[100px] after:bg-[rgb(230,230,230)] after:rounded after:mr-4\"></span> <span class=\"text-3xl font-black block mb-8 leading-[48px] after:content-[&#39;&#39;] after:block after:bg-[rgb(230,230,230)] after:rounded after:w-[70%] after:h-[34px] after:mb-8\"></span> <div class=\"flex items-center w-full mb-8 after:content-[&#39;&#39;] after:h-40 after:w-[280px] after:rounded-2xl after:bg-[rgb(230,230,230)]\"></div> <span class=\"text-base leading-7 text-black/70 tracking-[0.33px] overflow-hidden\"><span class=\"block h-[18px] w-full bg-[rgb(230,230,230)] rounded mb-2.5\"></span> <span class=\"block h-[18px] w-full bg-[rgb(230,230,230)] rounded mb-2.5\"></span> <span class=\"block h-[18px] w-[70%] bg-[rgb(230,230,230)] rounded mb-2.5\"></span></span>";
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
    },
    l(e) {
      r = N(e, "DIV", {
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1wfq93k") {
        r.innerHTML = t;
      }
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    i: K,
    o: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function $1(o) {
  let r;
  let t;
  let e;
  t = new kc({
    props: {
      title: o[2],
      author: o[3]
    }
  });
  return {
    c() {
      r = E("div");
      he(t.$$.fragment);
      this.h();
    },
    l(a) {
      r = N(a, "DIV", {
        class: true
      });
      var c = J(r);
      me(t.$$.fragment, c);
      c.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "w-[320px] aspect-video rounded-2xl overflow-hidden");
    },
    m(a, c) {
      L(a, r, c);
      Ae(t, r, null);
      e = true;
    },
    p(a, c) {
      const v = {};
      if (c[0] & 4) {
        v.title = a[2];
      }
      if (c[0] & 8) {
        v.author = a[3];
      }
      t.$set(v);
    },
    i(a) {
      if (!e) {
        $(t.$$.fragment, a);
        e = true;
      }
    },
    o(a) {
      te(t.$$.fragment, a);
      e = false;
    },
    d(a) {
      if (a) {
        R(r);
      }
      We(t);
    }
  };
}
function em(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  t = new kc({
    props: {
      title: o[2],
      author: o[3]
    }
  });
  return {
    c() {
      r = E("div");
      he(t.$$.fragment);
      this.h();
    },
    l(v) {
      r = N(v, "DIV", {
        class: true
      });
      var p = J(r);
      me(t.$$.fragment, p);
      p.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "relative rounded-2xl overflow-hidden hasvideo w-[320px] aspect-video svelte-1ofkre5");
    },
    m(v, p) {
      L(v, r, p);
      Ae(t, r, null);
      e = true;
      if (!a) {
        c = se(r, "click", po(function () {
          if (Ce(o[7])) {
            o[7].apply(this, arguments);
          }
        }));
        a = true;
      }
    },
    p(v, p) {
      o = v;
      const C = {};
      if (p[0] & 4) {
        C.title = o[2];
      }
      if (p[0] & 8) {
        C.author = o[3];
      }
      t.$set(C);
    },
    i(v) {
      if (!e) {
        $(t.$$.fragment, v);
        e = true;
      }
    },
    o(v) {
      te(t.$$.fragment, v);
      e = false;
    },
    d(v) {
      if (v) {
        R(r);
      }
      We(t);
      a = false;
      c();
    }
  };
}
function tm(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  return {
    c() {
      r = E("div");
      t = E("img");
      this.h();
    },
    l(v) {
      r = N(v, "DIV", {
        class: true
      });
      var p = J(r);
      t = N(p, "IMG", {
        alt: true,
        src: true,
        class: true
      });
      p.forEach(R);
      this.h();
    },
    h() {
      P(t, "alt", "thumb");
      if (!At(t.src, e = o[0])) {
        P(t, "src", e);
      }
      P(t, "class", "w-full");
      P(r, "class", "h-40 max-w-[280px] aspect-video bg-[rgb(230,230,230)] rounded-2xl mr-4 overflow-hidden flex items-center justify-center relative hasvideo svelte-1ofkre5");
    },
    m(v, p) {
      L(v, r, p);
      V(r, t);
      o[38](t);
      if (!a) {
        c = [se(t, "load", o[17]), se(t, "error", o[17]), se(r, "click", po(function () {
          if (Ce(o[7])) {
            o[7].apply(this, arguments);
          }
        }))];
        a = true;
      }
    },
    p(v, p) {
      o = v;
      if (p[0] & 1 && !At(t.src, e = o[0])) {
        P(t, "src", e);
      }
    },
    i: K,
    o: K,
    d(v) {
      if (v) {
        R(r);
      }
      o[38](null);
      a = false;
      at(c);
    }
  };
}
function g0(o) {
  let r;
  let t;
  let e;
  let a = o[9] && C0();
  let c = Dt(o[8]);
  let v = [];
  for (let p = 0; p < c.length; p += 1) {
    v[p] = k0(b0(o, c, p));
  }
  return {
    c() {
      r = E("div");
      if (a) {
        a.c();
      }
      t = G();
      for (let p = 0; p < v.length; p += 1) {
        v[p].c();
      }
      this.h();
    },
    l(p) {
      r = N(p, "DIV", {
        class: true
      });
      var C = J(r);
      if (a) {
        a.l(C);
      }
      t = H(C);
      for (let d = 0; d < v.length; d += 1) {
        v[d].l(C);
      }
      C.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "mb-8");
    },
    m(p, C) {
      L(p, r, C);
      if (a) {
        a.m(r, null);
      }
      V(r, t);
      for (let d = 0; d < v.length; d += 1) {
        if (v[d]) {
          v[d].m(r, null);
        }
      }
      e = true;
    },
    p(p, C) {
      if (p[9]) {
        if (a) {
          if (C[0] & 512) {
            $(a, 1);
          }
        } else {
          a = C0();
          a.c();
          $(a, 1);
          a.m(r, t);
        }
      } else if (a) {
        Ne();
        te(a, 1, 1, () => {
          a = null;
        });
        Ve();
      }
      if (C[0] & 256) {
        c = Dt(p[8]);
        let d;
        for (d = 0; d < c.length; d += 1) {
          const b = b0(p, c, d);
          if (v[d]) {
            v[d].p(b, C);
          } else {
            v[d] = k0(b);
            v[d].c();
            v[d].m(r, null);
          }
        }
        for (; d < v.length; d += 1) {
          v[d].d(1);
        }
        v.length = c.length;
      }
    },
    i(p) {
      if (!e) {
        $(a);
        e = true;
      }
    },
    o(p) {
      te(a);
      e = false;
    },
    d(p) {
      if (p) {
        R(r);
      }
      if (a) {
        a.d();
      }
      Pa(v, p);
    }
  };
}
function C0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p;
  let C;
  let d = `This link can only be accessed with a work.ink
                            Premium subscription`;
  let b;
  e = new Vx({
    props: {
      size: 16
    }
  });
  return {
    c() {
      r = E("div");
      t = E("a");
      he(e.$$.fragment);
      a = G();
      c = E("span");
      v = re(" Premium Link");
      p = G();
      C = E("div");
      C.textContent = d;
      this.h();
    },
    l(S) {
      r = N(S, "DIV", {
        class: true
      });
      var y = J(r);
      t = N(y, "A", {
        href: true,
        class: true
      });
      var W = J(t);
      me(e.$$.fragment, W);
      a = H(W);
      c = N(W, "SPAN", {
        style: true
      });
      J(c).forEach(R);
      v = ae(W, " Premium Link");
      W.forEach(R);
      p = H(y);
      C = N(y, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(C) !== "svelte-1bukcop") {
        C.textContent = d;
      }
      y.forEach(R);
      this.h();
    },
    h() {
      Gt(c, "margin-left", "6px");
      P(t, "href", "#");
      P(t, "class", "button premiumonly plain small svelte-1ofkre5");
      P(C, "class", "absolute z-10 hidden group-hover:block bg-gray-800 text-white text-sm rounded-lg py-2 px-3 -bottom-12 left-1/2 transform -translate-x-1/2 w-64 text-center");
      P(r, "class", "group relative inline-block");
    },
    m(S, y) {
      L(S, r, y);
      V(r, t);
      Ae(e, t, null);
      V(t, a);
      V(t, c);
      V(t, v);
      V(r, p);
      V(r, C);
      b = true;
    },
    i(S) {
      if (!b) {
        $(e.$$.fragment, S);
        b = true;
      }
    },
    o(S) {
      te(e.$$.fragment, S);
      b = false;
    },
    d(S) {
      if (S) {
        R(r);
      }
      We(e);
    }
  };
}
function k0(o) {
  let r;
  let t = o[55] + "";
  let e;
  let a;
  return {
    c() {
      r = E("a");
      e = re(t);
      this.h();
    },
    l(c) {
      r = N(c, "A", {
        href: true,
        class: true
      });
      var v = J(r);
      e = ae(v, t);
      v.forEach(R);
      this.h();
    },
    h() {
      P(r, "href", a = "https://work.ink/search/" + encodeURIComponent(o[55]));
      P(r, "class", "button greybg plain small");
    },
    m(c, v) {
      L(c, r, v);
      V(r, e);
    },
    p(c, v) {
      if (v[0] & 256 && t !== (t = c[55] + "")) {
        ge(e, t);
      }
      if (v[0] & 256 && a !== (a = "https://work.ink/search/" + encodeURIComponent(c[55]))) {
        P(r, "href", a);
      }
    },
    d(c) {
      if (c) {
        R(r);
      }
    }
  };
}
function nm(o) {
  let r = o[52] + "";
  let t;
  let e = o[54] < o[4].split(/\. (?=[A-Z])/g).filter(I0).length - 1 ? "." : "";
  let a;
  let c;
  return {
    c() {
      t = re(r);
      a = re(e);
      c = G();
    },
    l(v) {
      t = ae(v, r);
      a = ae(v, e);
      c = H(v);
    },
    m(v, p) {
      L(v, t, p);
      L(v, a, p);
      L(v, c, p);
    },
    p(v, p) {
      if (p[0] & 16 && r !== (r = v[52] + "")) {
        ge(t, r);
      }
      if (p[0] & 16 && e !== (e = v[54] < v[4].split(/\. (?=[A-Z])/g).filter(I0).length - 1 ? "." : "")) {
        ge(a, e);
      }
    },
    d(v) {
      if (v) {
        R(t);
        R(a);
        R(c);
      }
    }
  };
}
function w0(o) {
  let r;
  let t;
  r = new Oe({
    props: {
      maxRows: 6,
      $$slots: {
        default: [nm]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a[0] & 16 | a[1] & 134217728) {
        c.$$scope = {
          dirty: a,
          ctx: e
        };
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function sm(o) {
  return {
    c: K,
    l: K,
    m: K,
    d: K
  };
}
function rm(o) {
  return {
    c: K,
    l: K,
    m: K,
    d: K
  };
}
function am(o) {
  let r;
  let t;
  let e;
  let a;
  const c = [K1, J1];
  const v = [];
  function p(C, d) {
    if (C[6]) {
      return 0;
    } else {
      return 1;
    }
  }
  t = p(o);
  e = v[t] = c[t](o);
  return {
    c() {
      r = E("div");
      e.c();
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      e.l(d);
      d.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "lcdefault curr px-4 md:px-0");
    },
    m(C, d) {
      L(C, r, d);
      v[t].m(r, null);
      a = true;
    },
    p(C, d) {
      let b = t;
      t = p(C);
      if (t === b) {
        v[t].p(C, d);
      } else {
        Ne();
        te(v[b], 1, 1, () => {
          v[b] = null;
        });
        Ve();
        e = v[t];
        if (e) {
          e.p(C, d);
        } else {
          e = v[t] = c[t](C);
          e.c();
        }
        $(e, 1);
        e.m(r, null);
      }
    },
    i(C) {
      if (!a) {
        $(e);
        a = true;
      }
    },
    o(C) {
      te(e);
      a = false;
    },
    d(C) {
      if (C) {
        R(r);
      }
      v[t].d();
    }
  };
}
const _0 = o => o.trim().length > 0;
const I0 = o => o.trim().length > 0;
function im(o, r, t) {
  let e;
  io(o, Cc, de => t(33, e = de));
  let {
    views: a = 3921
  } = r;
  let {
    createdAt: c = new Date().toISOString()
  } = r;
  let {
    title: v = ""
  } = r;
  let {
    ogdescription: p = ""
  } = r;
  let {
    description: C = ""
  } = r;
  let {
    videoid: d
  } = r;
  let {
    preload: b = false
  } = r;
  let S;
  let {
    thumbnail: y
  } = r;
  let {
    previousView: W
  } = r;
  let {
    toggleFullscreen: f
  } = r;
  let {
    ready: w = false
  } = r;
  let {
    skipSocials: _ = false
  } = r;
  let {
    tags: h = []
  } = r;
  let {
    premiumOnly: D = false
  } = r;
  let {
    hideTurnstile: Y = false
  } = r;
  let {
    passInstalled: j = false
  } = r;
  let {
    passesLeft: Z = 0
  } = r;
  let {
    passLoaded: q = false
  } = r;
  let {
    passUsed: M = false
  } = r;
  let {
    passEnabled: O = true
  } = r;
  let {
    showAds: X = true
  } = r;
  let {
    data: Q
  } = r;
  let {
    premiumOnlyButton: F = false
  } = r;
  let {
    workinkClient: oe
  } = r;
  ot();
  let ce = fe(c).fromNow();
  tt();
  let ve;
  let ue;
  let Me = W === "steps" || W === "offers" ? "anim3" : "";
  let Ye = W === "steps" || W === "offers" ? "anim2" : "";
  function _e(de) {
    if (de === ve) {
      t(14, Me = "");
    } else if (de === ue) {
      t(15, Ye = "");
    }
  }
  Nr(() => {
    Se();
  });
  gc(() => {
    t(11, ce = fe(c).fromNow());
  });
  async function Se() {
    await Wo();
    function de() {
      if (S && S.naturalWidth === 120) {
        t(0, y = "");
      }
    }
    de();
    requestAnimationFrame(de);
    setTimeout(de, 10);
  }
  let xe = null;
  function ye(de) {
    ys[de ? "unshift" : "push"](() => {
      ve = de;
      t(12, ve);
    });
  }
  const et = () => _e(ve);
  function He(de) {
    ys[de ? "unshift" : "push"](() => {
      ue = de;
      t(13, ue);
    });
  }
  const it = () => _e(ue);
  function Vr(de) {
    ys[de ? "unshift" : "push"](() => {
      S = de;
      t(10, S);
    });
  }
  o.$$set = de => {
    if ("views" in de) {
      t(1, a = de.views);
    }
    if ("createdAt" in de) {
      t(19, c = de.createdAt);
    }
    if ("title" in de) {
      t(2, v = de.title);
    }
    if ("ogdescription" in de) {
      t(3, p = de.ogdescription);
    }
    if ("description" in de) {
      t(4, C = de.description);
    }
    if ("videoid" in de) {
      t(5, d = de.videoid);
    }
    if ("preload" in de) {
      t(6, b = de.preload);
    }
    if ("thumbnail" in de) {
      t(0, y = de.thumbnail);
    }
    if ("previousView" in de) {
      t(20, W = de.previousView);
    }
    if ("toggleFullscreen" in de) {
      t(7, f = de.toggleFullscreen);
    }
    if ("ready" in de) {
      t(21, w = de.ready);
    }
    if ("skipSocials" in de) {
      t(22, _ = de.skipSocials);
    }
    if ("tags" in de) {
      t(8, h = de.tags);
    }
    if ("premiumOnly" in de) {
      t(9, D = de.premiumOnly);
    }
    if ("hideTurnstile" in de) {
      t(23, Y = de.hideTurnstile);
    }
    if ("passInstalled" in de) {
      t(24, j = de.passInstalled);
    }
    if ("passesLeft" in de) {
      t(25, Z = de.passesLeft);
    }
    if ("passLoaded" in de) {
      t(26, q = de.passLoaded);
    }
    if ("passUsed" in de) {
      t(27, M = de.passUsed);
    }
    if ("passEnabled" in de) {
      t(28, O = de.passEnabled);
    }
    if ("showAds" in de) {
      t(29, X = de.showAds);
    }
    if ("data" in de) {
      t(30, Q = de.data);
    }
    if ("premiumOnlyButton" in de) {
      t(31, F = de.premiumOnlyButton);
    }
    if ("workinkClient" in de) {
      t(18, oe = de.workinkClient);
    }
  };
  o.$$.update = () => {
    if (o.$$.dirty[0] & 262144 | o.$$.dirty[1] & 2 && oe) {
      t(18, oe.onKeyappKeyInvalid = () => {
        be("This key is invalid.", "Please get a new key from TokenSentry.", "error", 5000);
        clearTimeout(xe);
      }, oe);
    }
    o.$$.dirty[1] & 4;
  };
  return [y, a, v, p, C, d, b, f, h, D, S, ce, ve, ue, Me, Ye, _e, Se, oe, c, W, w, _, Y, j, Z, q, M, O, X, Q, F, xe, e, ye, et, He, it, Vr];
}
class lm extends Fe {
  constructor(r) {
    super();
    Je(this, r, im, am, Xe, {
      views: 1,
      createdAt: 19,
      title: 2,
      ogdescription: 3,
      description: 4,
      videoid: 5,
      preload: 6,
      thumbnail: 0,
      previousView: 20,
      toggleFullscreen: 7,
      ready: 21,
      skipSocials: 22,
      tags: 8,
      premiumOnly: 9,
      hideTurnstile: 23,
      passInstalled: 24,
      passesLeft: 25,
      passLoaded: 26,
      passUsed: 27,
      passEnabled: 28,
      showAds: 29,
      data: 30,
      premiumOnlyButton: 31,
      workinkClient: 18
    }, null, [-1, -1]);
  }
}
function S0(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<img alt=\"icon\" src=\"/media/icons/white/close.svg\"/>";
  let v;
  let p;
  let C;
  const d = o[4].default;
  const b = Wc(d, o, o[3], null);
  return {
    c() {
      r = E("div");
      t = E("div");
      if (b) {
        b.c();
      }
      e = G();
      a = E("div");
      a.innerHTML = c;
      this.h();
    },
    l(S) {
      r = N(S, "DIV", {
        class: true
      });
      var y = J(r);
      t = N(y, "DIV", {
        class: true
      });
      var W = J(t);
      if (b) {
        b.l(W);
      }
      W.forEach(R);
      e = H(y);
      a = N(y, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1l1gyez") {
        a.innerHTML = c;
      }
      y.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "inner svelte-1yh4nl5");
      P(a, "class", "icocont closebtn svelte-1yh4nl5");
      P(r, "class", "fcwrapper svelte-1yh4nl5");
    },
    m(S, y) {
      L(S, r, y);
      V(r, t);
      if (b) {
        b.m(t, null);
      }
      V(r, e);
      V(r, a);
      v = true;
      if (!p) {
        C = Ac(o[1].call(null, t));
        p = true;
      }
    },
    p(S, y) {
      if (b && b.p && (!v || y & 8)) {
        pc(b, d, S, S[3], v ? bc(d, S[3], y, null) : vc(S[3]), null);
      }
    },
    i(S) {
      if (!v) {
        $(b, S);
        v = true;
      }
    },
    o(S) {
      te(b, S);
      v = false;
    },
    d(S) {
      if (S) {
        R(r);
      }
      if (b) {
        b.d(S);
      }
      p = false;
      C();
    }
  };
}
function om(o) {
  let r;
  let t;
  let e = o[0] && S0(o);
  return {
    c() {
      if (e) {
        e.c();
      }
      r = ie();
    },
    l(a) {
      if (e) {
        e.l(a);
      }
      r = ie();
    },
    m(a, c) {
      if (e) {
        e.m(a, c);
      }
      L(a, r, c);
      t = true;
    },
    p(a, [c]) {
      if (a[0]) {
        if (e) {
          e.p(a, c);
          if (c & 1) {
            $(e, 1);
          }
        } else {
          e = S0(a);
          e.c();
          $(e, 1);
          e.m(r.parentNode, r);
        }
      } else if (e) {
        Ne();
        te(e, 1, 1, () => {
          e = null;
        });
        Ve();
      }
    },
    i(a) {
      if (!t) {
        $(e);
        t = true;
      }
    },
    o(a) {
      te(e);
      t = false;
    },
    d(a) {
      if (a) {
        R(r);
      }
      if (e) {
        e.d(a);
      }
    }
  };
}
function cm(o, r, t) {
  let {
    $$slots: e = {},
    $$scope: a
  } = r;
  let {
    active: c = 0
  } = r;
  let {
    toggle: v
  } = r;
  function p(C) {
    function d(b) {
      if (!C.contains(b.target)) {
        v();
      }
    }
    document.addEventListener("click", d);
    return {
      destroy() {
        document.removeEventListener("click", d);
      }
    };
  }
  o.$$set = C => {
    if ("active" in C) {
      t(0, c = C.active);
    }
    if ("toggle" in C) {
      t(2, v = C.toggle);
    }
    if ("$$scope" in C) {
      t(3, a = C.$$scope);
    }
  };
  return [c, p, v, a, e];
}
class px extends Fe {
  constructor(r) {
    super();
    Je(this, r, cm, om, Xe, {
      active: 0,
      toggle: 2
    });
  }
}
function xm(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/pippit.png\"/></div> <div class=\"text\"><span class=\"title\">Pippit</span> <span class=\"count\">Sign up - Cashback App</span></div>";
  let v;
  let p;
  let C = "Sign up";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [fm]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-11oq7l8") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1un21br") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 65536) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function um(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f = o[3] === 1 && o[2] > 0 && y0(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      if (f) {
        f.c();
      }
      this.h();
    },
    l(w) {
      r = N(w, "DIV", {
        class: true
      });
      var _ = J(r);
      t = N(_, "DIV", {
        class: true
      });
      var h = J(t);
      e = ae(h, "Step ");
      c = ae(h, a);
      v = ae(h, " of ");
      C = ae(h, p);
      h.forEach(R);
      d = H(_);
      b = N(_, "DIV", {
        class: true
      });
      var D = J(b);
      y = ae(D, S);
      D.forEach(R);
      W = H(_);
      if (f) {
        f.l(_);
      }
      _.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(w, _) {
      L(w, r, _);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      if (f) {
        f.m(r, null);
      }
    },
    p(w, _) {
      if (_ & 8 && a !== (a = w[3] + 1 + "")) {
        ge(c, a);
      }
      if (_ & 16 && p !== (p = w[4].length + "")) {
        ge(C, p);
      }
      if (_ & 24 && S !== (S = w[4][w[3]].instruction + "")) {
        ge(y, S);
      }
      if (w[3] === 1 && w[2] > 0) {
        if (f) {
          f.p(w, _);
        } else {
          f = y0(w);
          f.c();
          f.m(r, null);
        }
      } else if (f) {
        f.d(1);
        f = null;
      }
    },
    i: K,
    o: K,
    d(w) {
      if (w) {
        R(r);
      }
      if (f) {
        f.d();
      }
    }
  };
}
function fm(o) {
  let r;
  let t = `After registration you will be redirected
            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1dwnzow") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function y0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("span");
      a = re(o[2]);
      c = G();
      v = E("div");
      v.textContent = p;
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      t = N(d, "DIV", {
        class: true
      });
      var b = J(t);
      e = N(b, "SPAN", {});
      var S = J(e);
      a = ae(S, o[2]);
      S.forEach(R);
      b.forEach(R);
      c = H(d);
      v = N(d, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(v) !== "svelte-1eb8dm0") {
        v.textContent = p;
      }
      d.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "timer-circle svelte-15m6ajx");
      P(v, "class", "timer-label svelte-15m6ajx");
      P(r, "class", "timer-display svelte-15m6ajx");
    },
    m(C, d) {
      L(C, r, d);
      V(r, t);
      V(t, e);
      V(e, a);
      V(r, c);
      V(r, v);
    },
    p(C, d) {
      if (d & 4) {
        ge(a, C[2]);
      }
    },
    d(C) {
      if (C) {
        R(r);
      }
    }
  };
}
function dm(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/pippit.jpeg\"/>";
  let e;
  let a;
  let c = "Sign up for Pippit";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [um, xm];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1weny1m") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-vjjx5y") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function hm(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = null;
  let b = 0;
  const S = [{
    instruction: "Sign up with Google",
    completed: false
  }, {
    instruction: "Waiting for confirmation...",
    completed: false,
    needsTimeout: true
  }];
  let y = false;
  function W() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, b = 0);
    t(2, p = 0);
    S.forEach(Y => {
      Y.completed = false;
    });
    y = false;
    document.addEventListener("visibilitychange", f);
    C = Date.now();
  }
  function f() {
    if (v) {
      if (document.visibilityState === "visible") {
        if (C) {
          if (!y) {
            y = true;
            C = null;
            return;
          }
          if (b < 1) {
            t(4, S[b].completed = true, S);
            _();
            if (b === 1) {
              w();
            }
          } else if (b === 1 && S[b].needsTimeout && !d) {
            w();
          }
          C = null;
        }
      } else if (document.visibilityState === "hidden") {
        C = Date.now();
        if (d) {
          clearTimeout(d);
          d = null;
          t(2, p = 0);
        }
      }
    }
  }
  function w() {
    if (d) {
      clearTimeout(d);
    }
    t(2, p = 4);
    const Y = setInterval(() => {
      t(2, p--, p);
      if (p <= 0) {
        clearInterval(Y);
        h();
      }
    }, 1000);
    d = setTimeout(() => {
      clearInterval(Y);
      h();
    }, 5000);
  }
  function _() {
    if (b < S.length - 1) {
      t(3, b++, b);
    }
  }
  function h() {
    document.removeEventListener("visibilitychange", f);
    if (d) {
      clearTimeout(d);
    }
    t(1, v = false);
    t(2, p = 0);
    c("success", {
      message: "Pippit account registration complete"
    });
  }
  function D() {
    if (v) {
      document.removeEventListener("visibilitychange", f);
      if (d) {
        clearTimeout(d);
        d = null;
      }
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", f);
    }
    if (d) {
      clearTimeout(d);
    }
  });
  o.$$set = Y => {
    if ("progress" in Y) {
      t(0, e = Y.progress);
    }
    if ("options" in Y) {
      t(7, a = Y.options);
    }
  };
  return [e, v, p, b, S, W, D, a];
}
class mm extends Fe {
  constructor(r) {
    super();
    Je(this, r, hm, dm, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function Am(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/onthatass.png\"/></div> <div class=\"text\"><span class=\"title\">On That Ass</span> <span class=\"count\">Free test package</span></div>";
  let v;
  let p;
  let C = "Order free";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [pm]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1vqwk5c") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-iw1ckn") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 32768) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function Wm(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f;
  let w;
  let _;
  let h;
  let D;
  let Y;
  let j = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      f = E("div");
      w = E("div");
      _ = E("span");
      h = re(o[2]);
      D = G();
      Y = E("div");
      Y.textContent = j;
      this.h();
    },
    l(Z) {
      r = N(Z, "DIV", {
        class: true
      });
      var q = J(r);
      t = N(q, "DIV", {
        class: true
      });
      var M = J(t);
      e = ae(M, "Step ");
      c = ae(M, a);
      v = ae(M, " of ");
      C = ae(M, p);
      M.forEach(R);
      d = H(q);
      b = N(q, "DIV", {
        class: true
      });
      var O = J(b);
      y = ae(O, S);
      O.forEach(R);
      W = H(q);
      f = N(q, "DIV", {
        class: true
      });
      var X = J(f);
      w = N(X, "DIV", {
        class: true
      });
      var Q = J(w);
      _ = N(Q, "SPAN", {});
      var F = J(_);
      h = ae(F, o[2]);
      F.forEach(R);
      Q.forEach(R);
      D = H(X);
      Y = N(X, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(Y) !== "svelte-1eb8dm0") {
        Y.textContent = j;
      }
      X.forEach(R);
      q.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(w, "class", "timer-circle svelte-15m6ajx");
      P(Y, "class", "timer-label svelte-15m6ajx");
      P(f, "class", "timer-display svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(Z, q) {
      L(Z, r, q);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      V(r, f);
      V(f, w);
      V(w, _);
      V(_, h);
      V(f, D);
      V(f, Y);
    },
    p(Z, q) {
      if (q & 8 && a !== (a = Z[3] + 1 + "")) {
        ge(c, a);
      }
      if (q & 16 && p !== (p = Z[4].length + "")) {
        ge(C, p);
      }
      if (q & 24 && S !== (S = Z[4][Z[3]].instruction + "")) {
        ge(y, S);
      }
      if (q & 4) {
        ge(h, Z[2]);
      }
    },
    i: K,
    o: K,
    d(Z) {
      if (Z) {
        R(r);
      }
    }
  };
}
function pm(o) {
  let r;
  let t = "After ordering your will be redirected automatically. This might take some time.";
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1e912ph") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function vm(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/onthatass_promo.png\"/>";
  let e;
  let a;
  let c = "Order a free test package from On That Ass";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [Wm, Am];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1q3ym2w") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-wejsur") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function bm(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = 0;
  const b = [{
    instruction: "Enter your information",
    timeNeeded: 5,
    timeSpent: 0,
    started: false
  }, {
    instruction: "Verify your identity with Paypal",
    timeNeeded: 5,
    timeSpent: 0,
    started: false
  }, {
    instruction: "Order for free",
    timeNeeded: 5,
    timeSpent: 0,
    started: false
  }, {
    instruction: "Wait for step confirmation...",
    timeNeeded: 5,
    timeSpent: 0,
    started: false
  }];
  let S = false;
  function y() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, d = 0);
    t(2, p = b[d].timeNeeded);
    b.forEach(h => {
      h.timeSpent = 0;
      h.started = false;
    });
    S = false;
    document.addEventListener("visibilitychange", W);
    C = Date.now();
  }
  function W() {
    if (!v) {
      return;
    }
    const h = Date.now();
    if (document.visibilityState === "visible") {
      if (C) {
        if (!S) {
          S = true;
          t(4, b[d].started = true, b);
          C = null;
          return;
        }
        if (b[d].started) {
          const D = (h - C) / 1000;
          t(4, b[d].timeSpent += D, b);
          t(2, p = Math.max(0, Math.ceil(b[d].timeNeeded - b[d].timeSpent)));
          if (b[d].timeSpent >= b[d].timeNeeded) {
            f();
          }
        }
        C = null;
      }
    } else if (document.visibilityState === "hidden") {
      if (b[d].started) {
        C = h;
      } else {
        t(4, b[d].started = true, b);
      }
    }
  }
  function f() {
    if (d < b.length - 1) {
      t(3, d++, d);
      t(2, p = b[d].timeNeeded);
      t(4, b[d].timeSpent = 0, b);
      t(4, b[d].started = false, b);
    } else {
      w();
    }
  }
  function w() {
    document.removeEventListener("visibilitychange", W);
    t(1, v = false);
    t(2, p = 0);
    c("success", {
      message: "Complete"
    });
  }
  function _() {
    if (v) {
      document.removeEventListener("visibilitychange", W);
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", W);
    }
  });
  o.$$set = h => {
    if ("progress" in h) {
      t(0, e = h.progress);
    }
    if ("options" in h) {
      t(7, a = h.options);
    }
  };
  return [e, v, p, d, b, y, _, a];
}
class gm extends Fe {
  constructor(r) {
    super();
    Je(this, r, bm, vm, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function Cm(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/primevideo.png\"/></div> <div class=\"text\"><span class=\"title\">Prime Video</span> <span class=\"count\">Movie &amp; TV Streaming App</span></div>";
  let v;
  let p;
  let C = "Install";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [wm]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-mf5rm7") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1831hcm") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 32768) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function km(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f;
  let w;
  let _;
  let h;
  let D;
  let Y;
  let j = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      f = E("div");
      w = E("div");
      _ = E("span");
      h = re(o[2]);
      D = G();
      Y = E("div");
      Y.textContent = j;
      this.h();
    },
    l(Z) {
      r = N(Z, "DIV", {
        class: true
      });
      var q = J(r);
      t = N(q, "DIV", {
        class: true
      });
      var M = J(t);
      e = ae(M, "Step ");
      c = ae(M, a);
      v = ae(M, " of ");
      C = ae(M, p);
      M.forEach(R);
      d = H(q);
      b = N(q, "DIV", {
        class: true
      });
      var O = J(b);
      y = ae(O, S);
      O.forEach(R);
      W = H(q);
      f = N(q, "DIV", {
        class: true
      });
      var X = J(f);
      w = N(X, "DIV", {
        class: true
      });
      var Q = J(w);
      _ = N(Q, "SPAN", {});
      var F = J(_);
      h = ae(F, o[2]);
      F.forEach(R);
      Q.forEach(R);
      D = H(X);
      Y = N(X, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(Y) !== "svelte-1eb8dm0") {
        Y.textContent = j;
      }
      X.forEach(R);
      q.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(w, "class", "timer-circle svelte-15m6ajx");
      P(Y, "class", "timer-label svelte-15m6ajx");
      P(f, "class", "timer-display svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(Z, q) {
      L(Z, r, q);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      V(r, f);
      V(f, w);
      V(w, _);
      V(_, h);
      V(f, D);
      V(f, Y);
    },
    p(Z, q) {
      if (q & 8 && a !== (a = Z[3] + 1 + "")) {
        ge(c, a);
      }
      if (q & 16 && p !== (p = Z[4].length + "")) {
        ge(C, p);
      }
      if (q & 24 && S !== (S = Z[4][Z[3]].instruction + "")) {
        ge(y, S);
      }
      if (q & 4) {
        ge(h, Z[2]);
      }
    },
    i: K,
    o: K,
    d(Z) {
      if (Z) {
        R(r);
      }
    }
  };
}
function wm(o) {
  let r;
  let t = "After signing up for a free 7 day trial you will be redirected automatically. This might take some time.";
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-r5am1i") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function _m(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/primevideo.jpg\"/>";
  let e;
  let a;
  let c = "Start a free 7 day trial at Prime Video";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [km, Cm];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1prhdgx") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-amzzuo") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function Im(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = 0;
  const b = [{
    instruction: "Register on Prime Video",
    timeNeeded: 2,
    timeSpent: 0,
    started: false
  }, {
    instruction: "Start a 7 day free trial",
    timeNeeded: 2,
    timeSpent: 0,
    started: false
  }, {
    instruction: "Watch a movie or show",
    timeNeeded: 2,
    timeSpent: 0,
    started: false
  }, {
    instruction: "Wait for step confirmation...",
    timeNeeded: 2,
    timeSpent: 0,
    started: false
  }];
  let S = false;
  function y() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, d = 0);
    t(2, p = b[d].timeNeeded);
    b.forEach(h => {
      h.timeSpent = 0;
      h.started = false;
    });
    S = false;
    document.addEventListener("visibilitychange", W);
    C = Date.now();
  }
  function W() {
    if (!v) {
      return;
    }
    const h = Date.now();
    if (document.visibilityState === "visible") {
      if (C) {
        if (!S) {
          S = true;
          t(4, b[d].started = true, b);
          C = null;
          return;
        }
        if (b[d].started) {
          const D = (h - C) / 1000;
          t(4, b[d].timeSpent += D, b);
          t(2, p = Math.max(0, Math.ceil(b[d].timeNeeded - b[d].timeSpent)));
          if (b[d].timeSpent >= b[d].timeNeeded) {
            f();
          }
        }
        C = null;
      }
    } else if (document.visibilityState === "hidden") {
      if (b[d].started) {
        C = h;
      } else {
        t(4, b[d].started = true, b);
      }
    }
  }
  function f() {
    if (d < b.length - 1) {
      t(3, d++, d);
      t(2, p = b[d].timeNeeded);
      t(4, b[d].timeSpent = 0, b);
      t(4, b[d].started = false, b);
    } else {
      w();
    }
  }
  function w() {
    document.removeEventListener("visibilitychange", W);
    t(1, v = false);
    t(2, p = 0);
    c("success", {
      message: "Complete"
    });
  }
  function _() {
    if (v) {
      document.removeEventListener("visibilitychange", W);
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", W);
    }
  });
  o.$$set = h => {
    if ("progress" in h) {
      t(0, e = h.progress);
    }
    if ("options" in h) {
      t(7, a = h.options);
    }
  };
  return [e, v, p, d, b, y, _, a];
}
class Sm extends Fe {
  constructor(r) {
    super();
    Je(this, r, Im, _m, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function ym(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/rivagauche.webp\"/></div> <div class=\"text\"><span class=\"title\">Riva Gauche</span> <span class=\"count\">Install &amp; open app</span></div>";
  let v;
  let p;
  let C = "Install";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [Bm]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1h844bd") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1831hcm") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 32768) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function Tm(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f;
  let w;
  let _;
  let h;
  let D;
  let Y;
  let j = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      f = E("div");
      w = E("div");
      _ = E("span");
      h = re(o[2]);
      D = G();
      Y = E("div");
      Y.textContent = j;
      this.h();
    },
    l(Z) {
      r = N(Z, "DIV", {
        class: true
      });
      var q = J(r);
      t = N(q, "DIV", {
        class: true
      });
      var M = J(t);
      e = ae(M, "Step ");
      c = ae(M, a);
      v = ae(M, " of ");
      C = ae(M, p);
      M.forEach(R);
      d = H(q);
      b = N(q, "DIV", {
        class: true
      });
      var O = J(b);
      y = ae(O, S);
      O.forEach(R);
      W = H(q);
      f = N(q, "DIV", {
        class: true
      });
      var X = J(f);
      w = N(X, "DIV", {
        class: true
      });
      var Q = J(w);
      _ = N(Q, "SPAN", {});
      var F = J(_);
      h = ae(F, o[2]);
      F.forEach(R);
      Q.forEach(R);
      D = H(X);
      Y = N(X, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(Y) !== "svelte-1eb8dm0") {
        Y.textContent = j;
      }
      X.forEach(R);
      q.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(w, "class", "timer-circle svelte-15m6ajx");
      P(Y, "class", "timer-label svelte-15m6ajx");
      P(f, "class", "timer-display svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(Z, q) {
      L(Z, r, q);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      V(r, f);
      V(f, w);
      V(w, _);
      V(_, h);
      V(f, D);
      V(f, Y);
    },
    p(Z, q) {
      if (q & 8 && a !== (a = Z[3] + 1 + "")) {
        ge(c, a);
      }
      if (q & 16 && p !== (p = Z[4].length + "")) {
        ge(C, p);
      }
      if (q & 24 && S !== (S = Z[4][Z[3]].instruction + "")) {
        ge(y, S);
      }
      if (q & 4) {
        ge(h, Z[2]);
      }
    },
    i: K,
    o: K,
    d(Z) {
      if (Z) {
        R(r);
      }
    }
  };
}
function Bm(o) {
  let r;
  let t = "After install and opening the app you will be redirected automatically. This might take some time.";
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1qmmof3") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Mm(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/rivagauche.jpg\"/>";
  let e;
  let a;
  let c = "Install and open Riva Gauche App";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [Tm, ym];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1tl2c8q") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-7eyqk5") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function Dm(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = 0;
  const b = [{
    instruction: "Install the app",
    timeNeeded: 2,
    timeSpent: 0,
    started: false
  }, {
    instruction: "Open the app",
    timeNeeded: 2,
    timeSpent: 0,
    started: false
  }, {
    instruction: "Wait for step confirmation...",
    timeNeeded: 2,
    timeSpent: 0,
    started: false
  }];
  let S = false;
  function y() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, d = 0);
    t(2, p = b[d].timeNeeded);
    b.forEach(h => {
      h.timeSpent = 0;
      h.started = false;
    });
    S = false;
    document.addEventListener("visibilitychange", W);
    C = Date.now();
  }
  function W() {
    if (!v) {
      return;
    }
    const h = Date.now();
    if (document.visibilityState === "visible") {
      if (C) {
        if (!S) {
          S = true;
          t(4, b[d].started = true, b);
          C = null;
          return;
        }
        if (b[d].started) {
          const D = (h - C) / 1000;
          t(4, b[d].timeSpent += D, b);
          t(2, p = Math.max(0, Math.ceil(b[d].timeNeeded - b[d].timeSpent)));
          if (b[d].timeSpent >= b[d].timeNeeded) {
            f();
          }
        }
        C = null;
      }
    } else if (document.visibilityState === "hidden") {
      if (b[d].started) {
        C = h;
      } else {
        t(4, b[d].started = true, b);
      }
    }
  }
  function f() {
    if (d < b.length - 1) {
      t(3, d++, d);
      t(2, p = b[d].timeNeeded);
      t(4, b[d].timeSpent = 0, b);
      t(4, b[d].started = false, b);
    } else {
      w();
    }
  }
  function w() {
    document.removeEventListener("visibilitychange", W);
    t(1, v = false);
    t(2, p = 0);
    c("success", {
      message: "Complete"
    });
  }
  function _() {
    if (v) {
      document.removeEventListener("visibilitychange", W);
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", W);
    }
  });
  o.$$set = h => {
    if ("progress" in h) {
      t(0, e = h.progress);
    }
    if ("options" in h) {
      t(7, a = h.options);
    }
  };
  return [e, v, p, d, b, y, _, a];
}
class Rm extends Fe {
  constructor(r) {
    super();
    Je(this, r, Dm, Mm, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function Ym(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/lenme.jpg\"/></div> <div class=\"text\"><span class=\"title\">Lenme</span> <span class=\"count\">Sign up - Lending &amp; Borrowing</span></div>";
  let v;
  let p;
  let C = "Sign up";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [Lm]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1wrzgxb") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1un21br") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 65536) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function Om(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f = o[3] === 2 && o[2] > 0 && T0(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      if (f) {
        f.c();
      }
      this.h();
    },
    l(w) {
      r = N(w, "DIV", {
        class: true
      });
      var _ = J(r);
      t = N(_, "DIV", {
        class: true
      });
      var h = J(t);
      e = ae(h, "Step ");
      c = ae(h, a);
      v = ae(h, " of ");
      C = ae(h, p);
      h.forEach(R);
      d = H(_);
      b = N(_, "DIV", {
        class: true
      });
      var D = J(b);
      y = ae(D, S);
      D.forEach(R);
      W = H(_);
      if (f) {
        f.l(_);
      }
      _.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(w, _) {
      L(w, r, _);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      if (f) {
        f.m(r, null);
      }
    },
    p(w, _) {
      if (_ & 8 && a !== (a = w[3] + 1 + "")) {
        ge(c, a);
      }
      if (_ & 16 && p !== (p = w[4].length + "")) {
        ge(C, p);
      }
      if (_ & 24 && S !== (S = w[4][w[3]].instruction + "")) {
        ge(y, S);
      }
      if (w[3] === 2 && w[2] > 0) {
        if (f) {
          f.p(w, _);
        } else {
          f = T0(w);
          f.c();
          f.m(r, null);
        }
      } else if (f) {
        f.d(1);
        f = null;
      }
    },
    i: K,
    o: K,
    d(w) {
      if (w) {
        R(r);
      }
      if (f) {
        f.d();
      }
    }
  };
}
function Lm(o) {
  let r;
  let t = `After registration you will be redirected
            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1dwnzow") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function T0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("span");
      a = re(o[2]);
      c = G();
      v = E("div");
      v.textContent = p;
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      t = N(d, "DIV", {
        class: true
      });
      var b = J(t);
      e = N(b, "SPAN", {});
      var S = J(e);
      a = ae(S, o[2]);
      S.forEach(R);
      b.forEach(R);
      c = H(d);
      v = N(d, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(v) !== "svelte-1eb8dm0") {
        v.textContent = p;
      }
      d.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "timer-circle svelte-15m6ajx");
      P(v, "class", "timer-label svelte-15m6ajx");
      P(r, "class", "timer-display svelte-15m6ajx");
    },
    m(C, d) {
      L(C, r, d);
      V(r, t);
      V(t, e);
      V(e, a);
      V(r, c);
      V(r, v);
    },
    p(C, d) {
      if (d & 4) {
        ge(a, C[2]);
      }
    },
    d(C) {
      if (C) {
        R(r);
      }
    }
  };
}
function Pm(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/lenme.png\"/>";
  let e;
  let a;
  let c = "Install & Sign up for Lenme";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [Om, Ym];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-bsospg") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1ouv40") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function Em(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = null;
  let b = 0;
  const S = [{
    instruction: "Install the Lenme app",
    completed: false
  }, {
    instruction: "Click 'Sign up with Google'",
    completed: false
  }, {
    instruction: "Run app for 30 seconds",
    completed: false
  }, {
    instruction: "Wait for step confirmation...",
    completed: false,
    needsTimeout: true
  }];
  let y = false;
  function W() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, b = 0);
    t(2, p = 0);
    S.forEach(Y => {
      Y.completed = false;
    });
    y = false;
    document.addEventListener("visibilitychange", f);
    C = Date.now();
  }
  function f() {
    if (v) {
      if (document.visibilityState === "visible") {
        if (C) {
          if (!y) {
            y = true;
            C = null;
            return;
          }
          if (b < 2) {
            t(4, S[b].completed = true, S);
            _();
            if (b === 2) {
              w();
            }
          } else if (b === 2 && S[b].needsTimeout && !d) {
            w();
          }
          C = null;
        }
      } else if (document.visibilityState === "hidden") {
        C = Date.now();
        if (d) {
          clearTimeout(d);
          d = null;
          t(2, p = 0);
        }
      }
    }
  }
  function w() {
    if (d) {
      clearTimeout(d);
    }
    t(2, p = 4);
    const Y = setInterval(() => {
      t(2, p--, p);
      if (p <= 0) {
        clearInterval(Y);
        h();
      }
    }, 1000);
    d = setTimeout(() => {
      clearInterval(Y);
      h();
    }, 5000);
  }
  function _() {
    if (b < S.length - 1) {
      t(3, b++, b);
    }
  }
  function h() {
    document.removeEventListener("visibilitychange", f);
    if (d) {
      clearTimeout(d);
    }
    t(1, v = false);
    t(2, p = 0);
    c("success", {});
  }
  function D() {
    if (v) {
      document.removeEventListener("visibilitychange", f);
      if (d) {
        clearTimeout(d);
        d = null;
      }
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", f);
    }
    if (d) {
      clearTimeout(d);
    }
  });
  o.$$set = Y => {
    if ("progress" in Y) {
      t(0, e = Y.progress);
    }
    if ("options" in Y) {
      t(7, a = Y.options);
    }
  };
  return [e, v, p, b, S, W, D, a];
}
class Nm extends Fe {
  constructor(r) {
    super();
    Je(this, r, Em, Pm, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function Vm(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/testerup.png\"/></div> <div class=\"text\"><span class=\"title\">Testerup</span> <span class=\"count\">Sign up &amp; earn money by testing apps</span></div>";
  let v;
  let p;
  let C = "Sign up";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [Um]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-vzcbwv") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1un21br") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 65536) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function qm(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f = o[3] === 2 && o[2] > 0 && B0(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      if (f) {
        f.c();
      }
      this.h();
    },
    l(w) {
      r = N(w, "DIV", {
        class: true
      });
      var _ = J(r);
      t = N(_, "DIV", {
        class: true
      });
      var h = J(t);
      e = ae(h, "Step ");
      c = ae(h, a);
      v = ae(h, " of ");
      C = ae(h, p);
      h.forEach(R);
      d = H(_);
      b = N(_, "DIV", {
        class: true
      });
      var D = J(b);
      y = ae(D, S);
      D.forEach(R);
      W = H(_);
      if (f) {
        f.l(_);
      }
      _.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(w, _) {
      L(w, r, _);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      if (f) {
        f.m(r, null);
      }
    },
    p(w, _) {
      if (_ & 8 && a !== (a = w[3] + 1 + "")) {
        ge(c, a);
      }
      if (_ & 16 && p !== (p = w[4].length + "")) {
        ge(C, p);
      }
      if (_ & 24 && S !== (S = w[4][w[3]].instruction + "")) {
        ge(y, S);
      }
      if (w[3] === 2 && w[2] > 0) {
        if (f) {
          f.p(w, _);
        } else {
          f = B0(w);
          f.c();
          f.m(r, null);
        }
      } else if (f) {
        f.d(1);
        f = null;
      }
    },
    i: K,
    o: K,
    d(w) {
      if (w) {
        R(r);
      }
      if (f) {
        f.d();
      }
    }
  };
}
function Um(o) {
  let r;
  let t = `After registration you will be redirected
            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1dwnzow") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function B0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("span");
      a = re(o[2]);
      c = G();
      v = E("div");
      v.textContent = p;
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      t = N(d, "DIV", {
        class: true
      });
      var b = J(t);
      e = N(b, "SPAN", {});
      var S = J(e);
      a = ae(S, o[2]);
      S.forEach(R);
      b.forEach(R);
      c = H(d);
      v = N(d, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(v) !== "svelte-1eb8dm0") {
        v.textContent = p;
      }
      d.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "timer-circle svelte-15m6ajx");
      P(v, "class", "timer-label svelte-15m6ajx");
      P(r, "class", "timer-display svelte-15m6ajx");
    },
    m(C, d) {
      L(C, r, d);
      V(r, t);
      V(t, e);
      V(e, a);
      V(r, c);
      V(r, v);
    },
    p(C, d) {
      if (d & 4) {
        ge(a, C[2]);
      }
    },
    d(C) {
      if (C) {
        R(r);
      }
    }
  };
}
function jm(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/testerup.png\"/>";
  let e;
  let a;
  let c = "Sign up for Testerup";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [qm, Vm];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1du16kd") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-bsjeam") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function zm(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = null;
  let b = 0;
  const S = [{
    instruction: "Sign up with Google",
    completed: false
  }, {
    instruction: "Finish registration",
    completed: false
  }, {
    instruction: "Wait for step confirmation...",
    completed: false,
    needsTimeout: true
  }];
  let y = false;
  function W() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, b = 0);
    t(2, p = 0);
    S.forEach(Y => {
      Y.completed = false;
    });
    y = false;
    document.addEventListener("visibilitychange", f);
    C = Date.now();
  }
  function f() {
    if (v) {
      if (document.visibilityState === "visible") {
        if (C) {
          if (!y) {
            y = true;
            C = null;
            return;
          }
          if (b < 2) {
            t(4, S[b].completed = true, S);
            _();
            if (b === 2) {
              w();
            }
          } else if (b === 2 && S[b].needsTimeout && !d) {
            w();
          }
          C = null;
        }
      } else if (document.visibilityState === "hidden") {
        C = Date.now();
        if (d) {
          clearTimeout(d);
          d = null;
          t(2, p = 0);
        }
      }
    }
  }
  function w() {
    if (d) {
      clearTimeout(d);
    }
    t(2, p = 4);
    const Y = setInterval(() => {
      t(2, p--, p);
      if (p <= 0) {
        clearInterval(Y);
        h();
      }
    }, 1000);
    d = setTimeout(() => {
      clearInterval(Y);
      h();
    }, 5000);
  }
  function _() {
    if (b < S.length - 1) {
      t(3, b++, b);
    }
  }
  function h() {
    document.removeEventListener("visibilitychange", f);
    if (d) {
      clearTimeout(d);
    }
    t(1, v = false);
    t(2, p = 0);
    c("success", {});
  }
  function D() {
    if (v) {
      document.removeEventListener("visibilitychange", f);
      if (d) {
        clearTimeout(d);
        d = null;
      }
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", f);
    }
    if (d) {
      clearTimeout(d);
    }
  });
  o.$$set = Y => {
    if ("progress" in Y) {
      t(0, e = Y.progress);
    }
    if ("options" in Y) {
      t(7, a = Y.options);
    }
  };
  return [e, v, p, b, S, W, D, a];
}
class Gm extends Fe {
  constructor(r) {
    super();
    Je(this, r, zm, jm, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function Hm(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/solitairecash.webp\"/></div> <div class=\"text\"><span class=\"title\">Solitaire Cash</span> <span class=\"count\">Install &amp; register</span></div>";
  let v;
  let p;
  let C = "Install";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [Xm]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1wwxss7") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1831hcm") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 65536) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function Qm(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f = o[3] === 2 && o[2] > 0 && M0(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      if (f) {
        f.c();
      }
      this.h();
    },
    l(w) {
      r = N(w, "DIV", {
        class: true
      });
      var _ = J(r);
      t = N(_, "DIV", {
        class: true
      });
      var h = J(t);
      e = ae(h, "Step ");
      c = ae(h, a);
      v = ae(h, " of ");
      C = ae(h, p);
      h.forEach(R);
      d = H(_);
      b = N(_, "DIV", {
        class: true
      });
      var D = J(b);
      y = ae(D, S);
      D.forEach(R);
      W = H(_);
      if (f) {
        f.l(_);
      }
      _.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(w, _) {
      L(w, r, _);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      if (f) {
        f.m(r, null);
      }
    },
    p(w, _) {
      if (_ & 8 && a !== (a = w[3] + 1 + "")) {
        ge(c, a);
      }
      if (_ & 16 && p !== (p = w[4].length + "")) {
        ge(C, p);
      }
      if (_ & 24 && S !== (S = w[4][w[3]].instruction + "")) {
        ge(y, S);
      }
      if (w[3] === 2 && w[2] > 0) {
        if (f) {
          f.p(w, _);
        } else {
          f = M0(w);
          f.c();
          f.m(r, null);
        }
      } else if (f) {
        f.d(1);
        f = null;
      }
    },
    i: K,
    o: K,
    d(w) {
      if (w) {
        R(r);
      }
      if (f) {
        f.d();
      }
    }
  };
}
function Xm(o) {
  let r;
  let t = `After registration you will be redirected
            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1dwnzow") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function M0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("span");
      a = re(o[2]);
      c = G();
      v = E("div");
      v.textContent = p;
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      t = N(d, "DIV", {
        class: true
      });
      var b = J(t);
      e = N(b, "SPAN", {});
      var S = J(e);
      a = ae(S, o[2]);
      S.forEach(R);
      b.forEach(R);
      c = H(d);
      v = N(d, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(v) !== "svelte-1eb8dm0") {
        v.textContent = p;
      }
      d.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "timer-circle svelte-15m6ajx");
      P(v, "class", "timer-label svelte-15m6ajx");
      P(r, "class", "timer-display svelte-15m6ajx");
    },
    m(C, d) {
      L(C, r, d);
      V(r, t);
      V(t, e);
      V(e, a);
      V(r, c);
      V(r, v);
    },
    p(C, d) {
      if (d & 4) {
        ge(a, C[2]);
      }
    },
    d(C) {
      if (C) {
        R(r);
      }
    }
  };
}
function Zm(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/solitairecash_banner.png\"/>";
  let e;
  let a;
  let c = "Install and register on Solitaire Cash App";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [Qm, Hm];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-l1ygy5") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-ukznjb") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function Fm(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = null;
  let b = 0;
  const S = [{
    instruction: "Install the app",
    completed: false
  }, {
    instruction: "Register an account",
    completed: false
  }, {
    instruction: "Wait for step confirmation...",
    completed: false,
    needsTimeout: true
  }];
  let y = false;
  function W() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, b = 0);
    t(2, p = 0);
    S.forEach(Y => {
      Y.completed = false;
    });
    y = false;
    document.addEventListener("visibilitychange", f);
    C = Date.now();
  }
  function f() {
    if (v) {
      if (document.visibilityState === "visible") {
        if (C) {
          if (!y) {
            y = true;
            C = null;
            return;
          }
          if (b < 2) {
            t(4, S[b].completed = true, S);
            _();
            if (b === 2) {
              w();
            }
          } else if (b === 2 && S[b].needsTimeout && !d) {
            w();
          }
          C = null;
        }
      } else if (document.visibilityState === "hidden") {
        C = Date.now();
        if (d) {
          clearTimeout(d);
          d = null;
          t(2, p = 0);
        }
      }
    }
  }
  function w() {
    if (d) {
      clearTimeout(d);
    }
    t(2, p = 4);
    const Y = setInterval(() => {
      t(2, p--, p);
      if (p <= 0) {
        clearInterval(Y);
        h();
      }
    }, 1000);
    d = setTimeout(() => {
      clearInterval(Y);
      h();
    }, 5000);
  }
  function _() {
    if (b < S.length - 1) {
      t(3, b++, b);
    }
  }
  function h() {
    document.removeEventListener("visibilitychange", f);
    if (d) {
      clearTimeout(d);
    }
    t(1, v = false);
    t(2, p = 0);
    c("success", {});
  }
  function D() {
    if (v) {
      document.removeEventListener("visibilitychange", f);
      if (d) {
        clearTimeout(d);
        d = null;
      }
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", f);
    }
    if (d) {
      clearTimeout(d);
    }
  });
  o.$$set = Y => {
    if ("progress" in Y) {
      t(0, e = Y.progress);
    }
    if ("options" in Y) {
      t(7, a = Y.options);
    }
  };
  return [e, v, p, b, S, W, D, a];
}
class Jm extends Fe {
  constructor(r) {
    super();
    Je(this, r, Fm, Zm, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function Km(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/xanh.png\"/></div> <div class=\"text\"><span class=\"title\">Draftkings Sportsbook Casino</span> <span class=\"count\">Install · 15 million users</span></div>";
  let v;
  let p;
  let C = "Install";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [eA]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-8vwdaw") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1831hcm") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 65536) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function $m(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f = o[3] === 2 && o[2] > 0 && D0(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      if (f) {
        f.c();
      }
      this.h();
    },
    l(w) {
      r = N(w, "DIV", {
        class: true
      });
      var _ = J(r);
      t = N(_, "DIV", {
        class: true
      });
      var h = J(t);
      e = ae(h, "Step ");
      c = ae(h, a);
      v = ae(h, " of ");
      C = ae(h, p);
      h.forEach(R);
      d = H(_);
      b = N(_, "DIV", {
        class: true
      });
      var D = J(b);
      y = ae(D, S);
      D.forEach(R);
      W = H(_);
      if (f) {
        f.l(_);
      }
      _.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(w, _) {
      L(w, r, _);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      if (f) {
        f.m(r, null);
      }
    },
    p(w, _) {
      if (_ & 8 && a !== (a = w[3] + 1 + "")) {
        ge(c, a);
      }
      if (_ & 16 && p !== (p = w[4].length + "")) {
        ge(C, p);
      }
      if (_ & 24 && S !== (S = w[4][w[3]].instruction + "")) {
        ge(y, S);
      }
      if (w[3] === 2 && w[2] > 0) {
        if (f) {
          f.p(w, _);
        } else {
          f = D0(w);
          f.c();
          f.m(r, null);
        }
      } else if (f) {
        f.d(1);
        f = null;
      }
    },
    i: K,
    o: K,
    d(w) {
      if (w) {
        R(r);
      }
      if (f) {
        f.d();
      }
    }
  };
}
function eA(o) {
  let r;
  let t = `After installation you will be redirected
            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-115e32h") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function D0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("span");
      a = re(o[2]);
      c = G();
      v = E("div");
      v.textContent = p;
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      t = N(d, "DIV", {
        class: true
      });
      var b = J(t);
      e = N(b, "SPAN", {});
      var S = J(e);
      a = ae(S, o[2]);
      S.forEach(R);
      b.forEach(R);
      c = H(d);
      v = N(d, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(v) !== "svelte-1eb8dm0") {
        v.textContent = p;
      }
      d.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "timer-circle svelte-15m6ajx");
      P(v, "class", "timer-label svelte-15m6ajx");
      P(r, "class", "timer-display svelte-15m6ajx");
    },
    m(C, d) {
      L(C, r, d);
      V(r, t);
      V(t, e);
      V(e, a);
      V(r, c);
      V(r, v);
    },
    p(C, d) {
      if (d & 4) {
        ge(a, C[2]);
      }
    },
    d(C) {
      if (C) {
        R(r);
      }
    }
  };
}
function tA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/xanh.webp\"/>";
  let e;
  let a;
  let c = "Install Draftkings Sportsbook Casino";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [$m, Km];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tpo2z") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-wkbx5m") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function nA(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = null;
  let b = 0;
  const S = [{
    instruction: "Install the app",
    completed: false
  }, {
    instruction: "Register an account",
    completed: false
  }, {
    instruction: "Wait for step confirmation...",
    completed: false,
    needsTimeout: true
  }];
  let y = false;
  function W() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, b = 0);
    t(2, p = 0);
    S.forEach(Y => {
      Y.completed = false;
    });
    y = false;
    document.addEventListener("visibilitychange", f);
    C = Date.now();
  }
  function f() {
    if (v) {
      if (document.visibilityState === "visible") {
        if (C) {
          if (!y) {
            y = true;
            C = null;
            return;
          }
          if (b < 2) {
            t(4, S[b].completed = true, S);
            _();
            if (b === 2) {
              w();
            }
          } else if (b === 2 && S[b].needsTimeout && !d) {
            w();
          }
          C = null;
        }
      } else if (document.visibilityState === "hidden") {
        C = Date.now();
        if (d) {
          clearTimeout(d);
          d = null;
          t(2, p = 0);
        }
      }
    }
  }
  function w() {
    if (d) {
      clearTimeout(d);
    }
    t(2, p = 4);
    const Y = setInterval(() => {
      t(2, p--, p);
      if (p <= 0) {
        clearInterval(Y);
        h();
      }
    }, 1000);
    d = setTimeout(() => {
      clearInterval(Y);
      h();
    }, 5000);
  }
  function _() {
    if (b < S.length - 1) {
      t(3, b++, b);
    }
  }
  function h() {
    document.removeEventListener("visibilitychange", f);
    if (d) {
      clearTimeout(d);
    }
    t(1, v = false);
    t(2, p = 0);
    c("success", {});
  }
  function D() {
    if (v) {
      document.removeEventListener("visibilitychange", f);
      if (d) {
        clearTimeout(d);
        d = null;
      }
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", f);
    }
    if (d) {
      clearTimeout(d);
    }
  });
  o.$$set = Y => {
    if ("progress" in Y) {
      t(0, e = Y.progress);
    }
    if ("options" in Y) {
      t(7, a = Y.options);
    }
  };
  return [e, v, p, b, S, W, D, a];
}
class sA extends Fe {
  constructor(r) {
    super();
    Je(this, r, nA, tA, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function rA(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/timo.png\"/></div> <div class=\"text\"><span class=\"title\">Timo</span> <span class=\"count\">Install &amp; register</span></div>";
  let v;
  let p;
  let C = "Install";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [iA]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-fgps7g") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1831hcm") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 65536) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function aA(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f = o[3] === 2 && o[2] > 0 && R0(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      if (f) {
        f.c();
      }
      this.h();
    },
    l(w) {
      r = N(w, "DIV", {
        class: true
      });
      var _ = J(r);
      t = N(_, "DIV", {
        class: true
      });
      var h = J(t);
      e = ae(h, "Step ");
      c = ae(h, a);
      v = ae(h, " of ");
      C = ae(h, p);
      h.forEach(R);
      d = H(_);
      b = N(_, "DIV", {
        class: true
      });
      var D = J(b);
      y = ae(D, S);
      D.forEach(R);
      W = H(_);
      if (f) {
        f.l(_);
      }
      _.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(w, _) {
      L(w, r, _);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      if (f) {
        f.m(r, null);
      }
    },
    p(w, _) {
      if (_ & 8 && a !== (a = w[3] + 1 + "")) {
        ge(c, a);
      }
      if (_ & 16 && p !== (p = w[4].length + "")) {
        ge(C, p);
      }
      if (_ & 24 && S !== (S = w[4][w[3]].instruction + "")) {
        ge(y, S);
      }
      if (w[3] === 2 && w[2] > 0) {
        if (f) {
          f.p(w, _);
        } else {
          f = R0(w);
          f.c();
          f.m(r, null);
        }
      } else if (f) {
        f.d(1);
        f = null;
      }
    },
    i: K,
    o: K,
    d(w) {
      if (w) {
        R(r);
      }
      if (f) {
        f.d();
      }
    }
  };
}
function iA(o) {
  let r;
  let t = `After registration you will be redirected
            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1dwnzow") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function R0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("span");
      a = re(o[2]);
      c = G();
      v = E("div");
      v.textContent = p;
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      t = N(d, "DIV", {
        class: true
      });
      var b = J(t);
      e = N(b, "SPAN", {});
      var S = J(e);
      a = ae(S, o[2]);
      S.forEach(R);
      b.forEach(R);
      c = H(d);
      v = N(d, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(v) !== "svelte-1eb8dm0") {
        v.textContent = p;
      }
      d.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "timer-circle svelte-15m6ajx");
      P(v, "class", "timer-label svelte-15m6ajx");
      P(r, "class", "timer-display svelte-15m6ajx");
    },
    m(C, d) {
      L(C, r, d);
      V(r, t);
      V(t, e);
      V(e, a);
      V(r, c);
      V(r, v);
    },
    p(C, d) {
      if (d & 4) {
        ge(a, C[2]);
      }
    },
    d(C) {
      if (C) {
        R(r);
      }
    }
  };
}
function lA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/timo_banner.png\"/>";
  let e;
  let a;
  let c = "Install and register on Timo App";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [aA, rA];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-19a8jgj") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-175lb2r") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function oA(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = null;
  let b = 0;
  const S = [{
    instruction: "Install the app / instal aplikasi",
    completed: false
  }, {
    instruction: "Register an account / mendaftarkan akun",
    completed: false
  }, {
    instruction: "Wait for step confirmation... / Tunggu...",
    completed: false,
    needsTimeout: true
  }];
  let y = false;
  function W() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, b = 0);
    t(2, p = 0);
    S.forEach(Y => {
      Y.completed = false;
    });
    y = false;
    document.addEventListener("visibilitychange", f);
    C = Date.now();
  }
  function f() {
    if (v) {
      if (document.visibilityState === "visible") {
        if (C) {
          if (!y) {
            y = true;
            C = null;
            return;
          }
          if (b < 2) {
            t(4, S[b].completed = true, S);
            _();
            if (b === 2) {
              w();
            }
          } else if (b === 2 && S[b].needsTimeout && !d) {
            w();
          }
          C = null;
        }
      } else if (document.visibilityState === "hidden") {
        C = Date.now();
        if (d) {
          clearTimeout(d);
          d = null;
          t(2, p = 0);
        }
      }
    }
  }
  function w() {
    if (d) {
      clearTimeout(d);
    }
    t(2, p = 4);
    const Y = setInterval(() => {
      t(2, p--, p);
      if (p <= 0) {
        clearInterval(Y);
        h();
      }
    }, 1000);
    d = setTimeout(() => {
      clearInterval(Y);
      h();
    }, 5000);
  }
  function _() {
    if (b < S.length - 1) {
      t(3, b++, b);
    }
  }
  function h() {
    document.removeEventListener("visibilitychange", f);
    if (d) {
      clearTimeout(d);
    }
    t(1, v = false);
    t(2, p = 0);
    c("success", {});
  }
  function D() {
    if (v) {
      document.removeEventListener("visibilitychange", f);
      if (d) {
        clearTimeout(d);
        d = null;
      }
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", f);
    }
    if (d) {
      clearTimeout(d);
    }
  });
  o.$$set = Y => {
    if ("progress" in Y) {
      t(0, e = Y.progress);
    }
    if ("options" in Y) {
      t(7, a = Y.options);
    }
  };
  return [e, v, p, b, S, W, D, a];
}
class cA extends Fe {
  constructor(r) {
    super();
    Je(this, r, oA, lA, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function xA(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/herowars.png\"/></div> <div class=\"text\"><span class=\"title\">Hero Wars</span> <span class=\"count\">Sign up with Google</span></div>";
  let v;
  let p;
  let C = "Sign up";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [fA]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-jgf8l") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1dwia7r") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner");
      P(p, "class", "button");
      P(e, "class", "installapp");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 65536) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function uA(o) {
  let r;
  let t;
  let e;
  let a = o[3] + 1 + "";
  let c;
  let v;
  let p = o[4].length + "";
  let C;
  let d;
  let b;
  let S = o[4][o[3]].instruction + "";
  let y;
  let W;
  let f = o[3] === 2 && o[2] > 0 && Y0(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      e = re("Step ");
      c = re(a);
      v = re(" of ");
      C = re(p);
      d = G();
      b = E("div");
      y = re(S);
      W = G();
      if (f) {
        f.c();
      }
      this.h();
    },
    l(w) {
      r = N(w, "DIV", {
        class: true
      });
      var _ = J(r);
      t = N(_, "DIV", {
        class: true
      });
      var h = J(t);
      e = ae(h, "Step ");
      c = ae(h, a);
      v = ae(h, " of ");
      C = ae(h, p);
      h.forEach(R);
      d = H(_);
      b = N(_, "DIV", {
        class: true
      });
      var D = J(b);
      y = ae(D, S);
      D.forEach(R);
      W = H(_);
      if (f) {
        f.l(_);
      }
      _.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "step-indicator svelte-15m6ajx");
      P(b, "class", "step-instruction svelte-15m6ajx");
      P(r, "class", "time-tracker-card svelte-15m6ajx");
    },
    m(w, _) {
      L(w, r, _);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(t, C);
      V(r, d);
      V(r, b);
      V(b, y);
      V(r, W);
      if (f) {
        f.m(r, null);
      }
    },
    p(w, _) {
      if (_ & 8 && a !== (a = w[3] + 1 + "")) {
        ge(c, a);
      }
      if (_ & 16 && p !== (p = w[4].length + "")) {
        ge(C, p);
      }
      if (_ & 24 && S !== (S = w[4][w[3]].instruction + "")) {
        ge(y, S);
      }
      if (w[3] === 2 && w[2] > 0) {
        if (f) {
          f.p(w, _);
        } else {
          f = Y0(w);
          f.c();
          f.m(r, null);
        }
      } else if (f) {
        f.d(1);
        f = null;
      }
    },
    i: K,
    o: K,
    d(w) {
      if (w) {
        R(r);
      }
      if (f) {
        f.d();
      }
    }
  };
}
function fA(o) {
  let r;
  let t = `After registration you will be redirected
            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1dwnzow") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Y0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("span");
      a = re(o[2]);
      c = G();
      v = E("div");
      v.textContent = p;
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      t = N(d, "DIV", {
        class: true
      });
      var b = J(t);
      e = N(b, "SPAN", {});
      var S = J(e);
      a = ae(S, o[2]);
      S.forEach(R);
      b.forEach(R);
      c = H(d);
      v = N(d, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(v) !== "svelte-1eb8dm0") {
        v.textContent = p;
      }
      d.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "timer-circle svelte-15m6ajx");
      P(v, "class", "timer-label svelte-15m6ajx");
      P(r, "class", "timer-display svelte-15m6ajx");
    },
    m(C, d) {
      L(C, r, d);
      V(r, t);
      V(t, e);
      V(e, a);
      V(r, c);
      V(r, v);
    },
    p(C, d) {
      if (d & 4) {
        ge(a, C[2]);
      }
    },
    d(C) {
      if (C) {
        R(r);
      }
    }
  };
}
function dA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/herowars-wide.webp\"/>";
  let e;
  let a;
  let c = "Sign up for Hero Wars";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [uA, xA];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-148jbit") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1mfuknl") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function hA(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = null;
  let b = 0;
  const S = [{
    instruction: "Click 'Continue with Google'",
    completed: false
  }, {
    instruction: "Complete Google sign in",
    completed: false
  }, {
    instruction: "Finish the intro of the game",
    completed: false,
    needsTimeout: true
  }];
  let y = false;
  function W() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, b = 0);
    t(2, p = 0);
    S.forEach(Y => {
      Y.completed = false;
    });
    y = false;
    document.addEventListener("visibilitychange", f);
    C = Date.now();
  }
  function f() {
    if (v) {
      if (document.visibilityState === "visible") {
        if (C) {
          if (!y) {
            y = true;
            C = null;
            return;
          }
          if (b < 2) {
            t(4, S[b].completed = true, S);
            _();
            if (b === 2) {
              w();
            }
          } else if (b === 2 && S[b].needsTimeout && !d) {
            w();
          }
          C = null;
        }
      } else if (document.visibilityState === "hidden") {
        C = Date.now();
        if (d) {
          clearTimeout(d);
          d = null;
          t(2, p = 0);
        }
      }
    }
  }
  function w() {
    if (d) {
      clearTimeout(d);
    }
    t(2, p = 4);
    const Y = setInterval(() => {
      t(2, p--, p);
      if (p <= 0) {
        clearInterval(Y);
        h();
      }
    }, 1000);
    d = setTimeout(() => {
      clearInterval(Y);
      h();
    }, 5000);
  }
  function _() {
    if (b < S.length - 1) {
      t(3, b++, b);
    }
  }
  function h() {
    document.removeEventListener("visibilitychange", f);
    if (d) {
      clearTimeout(d);
    }
    t(1, v = false);
    t(2, p = 0);
    c("success", {});
  }
  function D() {
    if (v) {
      document.removeEventListener("visibilitychange", f);
      if (d) {
        clearTimeout(d);
        d = null;
      }
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", f);
    }
    if (d) {
      clearTimeout(d);
    }
  });
  o.$$set = Y => {
    if ("progress" in Y) {
      t(0, e = Y.progress);
    }
    if ("options" in Y) {
      t(7, a = Y.options);
    }
  };
  return [e, v, p, b, S, W, D, a];
}
class mA extends Fe {
  constructor(r) {
    super();
    Je(this, r, hA, dA, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function AA(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "<div class=\"icocont appicon svelte-3ht8ui\"><img alt=\"icon\" src=\"/media/icons/brands/betterdeals.png\" class=\"svelte-3ht8ui\"/></div> <div class=\"text svelte-3ht8ui\"><span class=\"title svelte-3ht8ui\">News Article</span> <span class=\"count svelte-3ht8ui\">Read, scroll &amp; continue</span></div>";
  let v;
  let p;
  let C = "Open";
  let d;
  let b;
  let S = "choose different offer";
  let y;
  let W;
  let f;
  r = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [pA]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("button");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(w) {
      me(r.$$.fragment, w);
      t = H(w);
      e = N(w, "DIV", {
        class: true
      });
      var _ = J(e);
      a = N(_, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1ffstkc") {
        a.innerHTML = c;
      }
      v = H(_);
      p = N(_, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-se7tcp") {
        p.textContent = C;
      }
      _.forEach(R);
      d = H(w);
      b = N(w, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-5jjibf") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(a, "class", "installapp-inner svelte-3ht8ui");
      P(p, "class", "button svelte-3ht8ui");
      P(e, "class", "installapp svelte-3ht8ui");
      P(b, "class", "closelabel");
    },
    m(w, _) {
      Ae(r, w, _);
      L(w, t, _);
      L(w, e, _);
      V(e, a);
      V(e, v);
      V(e, p);
      L(w, d, _);
      L(w, b, _);
      y = true;
      if (!W) {
        f = [se(p, "click", o[5]), se(b, "click", o[6])];
        W = true;
      }
    },
    p(w, _) {
      const h = {};
      if (_ & 65536) {
        h.$$scope = {
          dirty: _,
          ctx: w
        };
      }
      r.$set(h);
    },
    i(w) {
      if (!y) {
        $(r.$$.fragment, w);
        y = true;
      }
    },
    o(w) {
      te(r.$$.fragment, w);
      y = false;
    },
    d(w) {
      if (w) {
        R(t);
        R(e);
        R(d);
        R(b);
      }
      We(r, w);
      W = false;
      at(f);
    }
  };
}
function WA(o) {
  let r;
  let t;
  let e = "<div class=\"icocont appicon svelte-3ht8ui\"><img alt=\"icon\" src=\"/media/icons/brands/betterdeals.png\" class=\"svelte-3ht8ui\"/></div> <div class=\"text svelte-3ht8ui\"><span class=\"title svelte-3ht8ui\">News Article</span> <span class=\"count svelte-3ht8ui\">Read, scroll &amp; continue</span></div>";
  let a;
  let c;
  let v = "Open";
  let p;
  let C;
  let d;
  let b;
  let S;
  let y;
  let W;
  let f;
  let w = o[3] + 1 + "";
  let _;
  let h;
  let D = o[4].length + "";
  let Y;
  let j;
  let Z;
  let q = o[4][o[3]].instruction + "";
  let M;
  let O;
  let X;
  let Q;
  let F = o[3] === 2 && o[2] > 0 && O0(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      t.innerHTML = e;
      a = G();
      c = E("button");
      c.textContent = v;
      p = G();
      C = E("br");
      d = G();
      b = E("br");
      S = G();
      y = E("div");
      W = E("div");
      f = re("Step ");
      _ = re(w);
      h = re(" of ");
      Y = re(D);
      j = G();
      Z = E("div");
      M = re(q);
      O = G();
      if (F) {
        F.c();
      }
      this.h();
    },
    l(oe) {
      r = N(oe, "DIV", {
        class: true
      });
      var ce = J(r);
      t = N(ce, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(t) !== "svelte-1ffstkc") {
        t.innerHTML = e;
      }
      a = H(ce);
      c = N(ce, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(c) !== "svelte-se7tcp") {
        c.textContent = v;
      }
      ce.forEach(R);
      p = H(oe);
      C = N(oe, "BR", {});
      d = H(oe);
      b = N(oe, "BR", {});
      S = H(oe);
      y = N(oe, "DIV", {
        class: true
      });
      var ve = J(y);
      W = N(ve, "DIV", {
        class: true
      });
      var ue = J(W);
      f = ae(ue, "Step ");
      _ = ae(ue, w);
      h = ae(ue, " of ");
      Y = ae(ue, D);
      ue.forEach(R);
      j = H(ve);
      Z = N(ve, "DIV", {
        class: true
      });
      var Me = J(Z);
      M = ae(Me, q);
      Me.forEach(R);
      O = H(ve);
      if (F) {
        F.l(ve);
      }
      ve.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "installapp-inner svelte-3ht8ui");
      P(c, "class", "button svelte-3ht8ui");
      P(r, "class", "installapp svelte-3ht8ui");
      P(W, "class", "step-indicator svelte-3ht8ui");
      P(Z, "class", "step-instruction svelte-3ht8ui");
      P(y, "class", "time-tracker-card svelte-3ht8ui");
    },
    m(oe, ce) {
      L(oe, r, ce);
      V(r, t);
      V(r, a);
      V(r, c);
      L(oe, p, ce);
      L(oe, C, ce);
      L(oe, d, ce);
      L(oe, b, ce);
      L(oe, S, ce);
      L(oe, y, ce);
      V(y, W);
      V(W, f);
      V(W, _);
      V(W, h);
      V(W, Y);
      V(y, j);
      V(y, Z);
      V(Z, M);
      V(y, O);
      if (F) {
        F.m(y, null);
      }
      if (!X) {
        Q = se(c, "click", o[5]);
        X = true;
      }
    },
    p(oe, ce) {
      if (ce & 8 && w !== (w = oe[3] + 1 + "")) {
        ge(_, w);
      }
      if (ce & 16 && D !== (D = oe[4].length + "")) {
        ge(Y, D);
      }
      if (ce & 24 && q !== (q = oe[4][oe[3]].instruction + "")) {
        ge(M, q);
      }
      if (oe[3] === 2 && oe[2] > 0) {
        if (F) {
          F.p(oe, ce);
        } else {
          F = O0(oe);
          F.c();
          F.m(y, null);
        }
      } else if (F) {
        F.d(1);
        F = null;
      }
    },
    i: K,
    o: K,
    d(oe) {
      if (oe) {
        R(r);
        R(p);
        R(C);
        R(d);
        R(b);
        R(S);
        R(y);
      }
      if (F) {
        F.d();
      }
      X = false;
      Q();
    }
  };
}
function pA(o) {
  let r;
  let t = "After reading you will be redirected automatically. This might take some time.";
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1h00olz") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function O0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p = "seconds remaining";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("span");
      a = re(o[2]);
      c = G();
      v = E("div");
      v.textContent = p;
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      t = N(d, "DIV", {
        class: true
      });
      var b = J(t);
      e = N(b, "SPAN", {});
      var S = J(e);
      a = ae(S, o[2]);
      S.forEach(R);
      b.forEach(R);
      c = H(d);
      v = N(d, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(v) !== "svelte-1eb8dm0") {
        v.textContent = p;
      }
      d.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "timer-circle svelte-3ht8ui");
      P(v, "class", "timer-label svelte-3ht8ui");
      P(r, "class", "timer-display svelte-3ht8ui");
    },
    m(C, d) {
      L(C, r, d);
      V(r, t);
      V(t, e);
      V(e, a);
      V(r, c);
      V(r, v);
    },
    p(C, d) {
      if (d & 4) {
        ge(a, C[2]);
      }
    },
    d(C) {
      if (C) {
        R(r);
      }
    }
  };
}
function vA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/external_read_banner2.webp\"/>";
  let e;
  let a;
  let c = "Read an Article";
  let v;
  let p;
  let C;
  let d;
  let b;
  const S = [WA, AA];
  const y = [];
  function W(f, w) {
    if (f[1] || f[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  p = W(o);
  C = y[p] = S[p](o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      C.c();
      d = ie();
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-4ov0dv") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-10mkjhk") {
        a.textContent = c;
      }
      v = H(f);
      C.l(f);
      d = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      y[p].m(f, w);
      L(f, d, w);
      b = true;
    },
    p(f, [w]) {
      let _ = p;
      p = W(f);
      if (p === _) {
        y[p].p(f, w);
      } else {
        Ne();
        te(y[_], 1, 1, () => {
          y[_] = null;
        });
        Ve();
        C = y[p];
        if (C) {
          C.p(f, w);
        } else {
          C = y[p] = S[p](f);
          C.c();
        }
        $(C, 1);
        C.m(d.parentNode, d);
      }
    },
    i(f) {
      if (!b) {
        $(C);
        b = true;
      }
    },
    o(f) {
      te(C);
      b = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(d);
      }
      y[p].d(f);
    }
  };
}
function bA(o, r, t) {
  let {
    progress: e = false
  } = r;
  let {
    options: a
  } = r;
  const c = tt();
  let v = false;
  let p = 0;
  let C = null;
  let d = null;
  let b = 0;
  const S = [{
    instruction: "Visit the page",
    completed: false
  }, {
    instruction: "Browse the page (click 'Next' button) or complete quiz - (Click through different pages!)",
    completed: false
  }];
  let y = false;
  function W() {
    a.installButtonCallback();
    t(1, v = true);
    t(3, b = 0);
    t(2, p = 0);
    S.forEach(Y => {
      Y.completed = false;
    });
    y = false;
    document.addEventListener("visibilitychange", f);
    C = Date.now();
  }
  function f() {
    if (v) {
      if (document.visibilityState === "visible") {
        if (C) {
          if (!y) {
            y = true;
            C = null;
            return;
          }
          if (b < 2) {
            t(4, S[b].completed = true, S);
            _();
            if (b === 2) {
              w();
            }
          } else if (b === 2 && S[b].needsTimeout && !d) {
            w();
          }
          C = null;
        }
      } else if (document.visibilityState === "hidden") {
        C = Date.now();
        if (d) {
          clearTimeout(d);
          d = null;
          t(2, p = 0);
        }
      }
    }
  }
  function w() {
    if (d) {
      clearTimeout(d);
    }
    t(2, p = 4);
    const Y = setInterval(() => {
      t(2, p--, p);
      if (p <= 0) {
        clearInterval(Y);
        h();
      }
    }, 1000);
    d = setTimeout(() => {
      clearInterval(Y);
      h();
    }, 5000);
  }
  function _() {
    if (b < S.length - 1) {
      t(3, b++, b);
    }
  }
  function h() {
    document.removeEventListener("visibilitychange", f);
    if (d) {
      clearTimeout(d);
    }
    t(1, v = false);
    t(2, p = 0);
    c("success", {
      message: ""
    });
  }
  function D() {
    if (v) {
      document.removeEventListener("visibilitychange", f);
      if (d) {
        clearTimeout(d);
        d = null;
      }
    }
    c("abort", {
      message: "User chose different offer"
    });
  }
  Zt(() => {
    if (v) {
      document.removeEventListener("visibilitychange", f);
    }
    if (d) {
      clearTimeout(d);
    }
  });
  o.$$set = Y => {
    if ("progress" in Y) {
      t(0, e = Y.progress);
    }
    if ("options" in Y) {
      t(7, a = Y.options);
    }
  };
  return [e, v, p, b, S, W, D, a];
}
class gA extends Fe {
  constructor(r) {
    super();
    Je(this, r, bA, vA, Xe, {
      progress: 0,
      options: 7
    });
  }
}
function CA(o) {
  let r;
  let t = "<iframe src=\"https://player.vimeo.com/video/861693831?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"Influencer cuts 07.8 NEW Method_short (1)\"></iframe>";
  let e;
  let a;
  let c = "";
  let v;
  let p;
  let C;
  let d = `.video-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            overflow: hidden;
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("script");
      a.innerHTML = c;
      p = G();
      C = E("style");
      C.textContent = d;
      this.h();
    },
    l(b) {
      r = N(b, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1uykvnl") {
        r.innerHTML = t;
      }
      e = H(b);
      a = N(b, "SCRIPT", {
        src: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-13fxq40") {
        a.innerHTML = c;
      }
      p = H(b);
      C = N(b, "STYLE", {
        "data-svelte-h": true
      });
      if (z(C) !== "svelte-1ye4enw") {
        C.textContent = d;
      }
      this.h();
    },
    h() {
      P(r, "class", "video-container");
      if (!At(a.src, v = "https://player.vimeo.com/api/player.js")) {
        P(a, "src", v);
      }
    },
    m(b, S) {
      L(b, r, S);
      L(b, e, S);
      L(b, a, S);
      L(b, p, S);
      L(b, C, S);
    },
    p: K,
    d(b) {
      if (b) {
        R(r);
        R(e);
        R(a);
        R(p);
        R(C);
      }
    }
  };
}
function L0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v = `ul {
            padding-left: 14px;
        }
        .modalwrapper {
            position: fixed;
            z-index: 998;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(16px);
            background-color: rgba(0, 0, 0, 0.6);
            padding: 32px;
            flex-direction: column;
        }

        @media (max-height: 640px) {
            .modalwrapper {
                align-items: flex-start;
                overflow: auto;
            }
        }

        .modal {
            max-width: 500px;
            width: 100%;
            min-height: 100px;
            height: fit-content;
            flex-shrink: 0;
            background: white;
            border-radius: 16px;
            box-shadow:
                rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
                rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
            padding: 32px 48px;
            animation: fadein 0.15s forwards;
            position: relative;
            overflow: hidden;
            box-shadow:
                rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }

        .modal .topicon {
            height: 56px;
            width: 56px;
            background: #e4f4f0;
            border-radius: 99px;
            padding: 12px;
            margin: 0px auto 16px auto;
        }

        .modal > .banner {
            height: fit-content;
            max-height: 300px;
            width: 100%;
            position: relative;
            left: -48px;
            top: -32px;
            width: calc(100% + 48px * 2);
            display: flex;
            justify-content: center;
        }

        .modal > .banner img {
            height: 100%;
            width: 100%;
            margin: 0 auto;
            object-fit: cover;
        }

        .modal > .title {
            margin-bottom: 4px;
        }

        .title {
            font-size: 18px;
            font-weight: 600;
        }

        .title.alt {
            color: white;
        }

        .modal > .desc {
            font-size: 14px;
            letter-spacing: 0.33px;
            opacity: 0.7;
            line-height: 24px;
            margin-bottom: 32px;
        }

        .modal .gcont {
            height: fit-content !important;
            max-height: 500px;
            overflow: auto;
        }

        .closelabel {
            width: fit-content;
            margin: 0 auto;
            margin-top: 32px;
            font-size: 12px;
            font-weight: 600;
            opacity: 0.7;
            text-align: center;
            display: block;
            cursor: pointer;
            border-bottom: 1px solid rgb(210, 210, 210);
            padding: 4px 0;
        }

        .installapp {
            margin-top: 32px;
            width: 100%;
            padding: 16px;
            background: #f4f4f4;
            border: 0.5px solid #d8d8d8;
            border-radius: 16px;
            display: flex;
            align-items: center;
            padding: 16px;
            position: relative;
        }

        .installapp .appicon {
            height: 48px;
            width: 48px;
            border-radius: 12px;
            background: white;
            box-shadow:
                rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
                rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            margin-right: 16px;
        }

        .installapp .title {
            font-size: 16px;
            font-weight: 600;
        }

        .installapp .count {
            font-size: 14px;
            letter-spacing: 0.33px;
            opacity: 0.7;
            margin-top: 4px;
        }

        .installapp .button {
            position: absolute;
            right: 16px;
            font-size: 16px;
        }

        .duringinstall {
            position: relative;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(16px);
            box-shadow:
                rgba(17, 17, 26, 0.1) 0px 1px 0px,
                rgba(17, 17, 26, 0.1) 0px 8px 24px,
                rgba(17, 17, 26, 0.1) 0px 16px 48px;
            font-size: 12px;
            font-weight: 600;
            text-align: center;
            padding: 12px 16px;
            bottom: -4px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: fit-content;
            border-radius: 12px;
            display: flex;
            align-items: center;
        }

        .duringinstall:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            height: 12px;
            width: 12px;
            background: white;
            transform: rotateZ(45deg);
            top: -6px;
            border-top: 1px solid rgb(230, 230, 230);
            border-left: 1px solid rgb(230, 230, 230);
        }

        .lds-ellipsis {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
            left: -3px;
        }
        .lds-ellipsis div {
            position: absolute;
            top: 33px;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: #fff;
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
            0% {
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes lds-ellipsis3 {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(0);
            }
        }
        @keyframes lds-ellipsis2 {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(24px, 0);
            }
        }

        .lds-dual-ring {
            display: flex;
            width: 16px;
            height: 16px;
            margin-right: 8px;
            align-items: center;
            justify-content: center;
        }
        .lds-dual-ring:after {
            flex-shrink: 0;
            content: " ";
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid #000;
            border-color: #009974 transparent #009974 transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }
        @keyframes lds-dual-ring {
            0% {
                transform: rotate(0deg) scale(0.85);
            }
            100% {
                transform: rotate(360deg) scale(0.85);
            }
        }

        span.center {
            text-align: center;
        }
        button.center {
            margin: 0 auto;
        }

        .installapp .installapp-inner {
            display: flex;
            padding-right: 0px;
        }

        @media only screen and (max-width: 600px) {
            .modal {
                padding: 32px 32px !important;
            }

            .modal > .banner {
                left: -32px;
                top: -32px;
                width: calc(100% + 32px * 2);
            }

            .installapp {
                flex-direction: column;
                align-items: center;
            }

            .installapp .installapp-inner {
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 8px;
            }

            .installapp .icocont {
            }

            .installapp .button {
                position: relative;
                right: 0;
                margin-top: 16px;
                width: 100%;
            }
        }`;
  let p;
  const C = [wA, kA];
  const d = [];
  function b(S, y) {
    if (S[1] == "stepcompletion") {
      return 0;
    } else {
      return 1;
    }
  }
  t = b(o);
  e = d[t] = C[t](o);
  return {
    c() {
      r = E("div");
      e.c();
      a = G();
      c = E("style");
      c.textContent = v;
      this.h();
    },
    l(S) {
      r = N(S, "DIV", {
        class: true
      });
      var y = J(r);
      e.l(y);
      y.forEach(R);
      a = H(S);
      c = N(S, "STYLE", {
        "data-svelte-h": true
      });
      if (z(c) !== "svelte-1yu0sdi") {
        c.textContent = v;
      }
      this.h();
    },
    h() {
      P(r, "class", "modalwrapper");
    },
    m(S, y) {
      L(S, r, y);
      d[t].m(r, null);
      L(S, a, y);
      L(S, c, y);
      p = true;
    },
    p(S, y) {
      let W = t;
      t = b(S);
      if (t === W) {
        d[t].p(S, y);
      } else {
        Ne();
        te(d[W], 1, 1, () => {
          d[W] = null;
        });
        Ve();
        e = d[t];
        if (e) {
          e.p(S, y);
        } else {
          e = d[t] = C[t](S);
          e.c();
        }
        $(e, 1);
        e.m(r, null);
      }
    },
    i(S) {
      if (!p) {
        $(e);
        p = true;
      }
    },
    o(S) {
      te(e);
      p = false;
    },
    d(S) {
      if (S) {
        R(r);
        R(a);
        R(c);
      }
      d[t].d();
    }
  };
}
function kA(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  const v = [mW, hW, dW, fW, uW, xW, cW, oW, lW, iW, aW, rW, sW, nW, tW, eW, $A, KA, JA, FA, ZA, XA, QA, HA, GA, zA, jA, UA, qA, VA, NA, EA, PA, LA, OA, YA, RA, DA, MA, BA, TA, yA, SA, IA, _A];
  const p = [];
  function C(b, S) {
    if (b[1] == "extension") {
      return 0;
    } else if (b[1] == "quicksnap") {
      return 1;
    } else if (b[1] == "nordvpn") {
      return 2;
    } else if (b[1] == "raidshadowlegends") {
      return 3;
    } else if (b[1] == "norton") {
      return 4;
    } else if (b[1] == "tiktok") {
      return 5;
    } else if (b[1] == "installApp") {
      return 6;
    } else if (b[1] == "operagx") {
      return 7;
    } else if (b[1] == "pippit") {
      return 8;
    } else if (b[1] == "onthatass") {
      return 9;
    } else if (b[1] == "primevideo") {
      return 10;
    } else if (b[1] == "rivagauche") {
      return 11;
    } else if (b[1] == "lenme") {
      return 12;
    } else if (b[1] == "testerup") {
      return 13;
    } else if (b[1] == "solitairecash") {
      return 14;
    } else if (b[1] == "xanh") {
      return 15;
    } else if (b[1] == "gauthai") {
      return 16;
    } else if (b[1] == "timo") {
      return 17;
    } else if (b[1] == "externalArticles") {
      return 18;
    } else if (b[1] == "pippit_old") {
      return 19;
    } else if (b[1] == "temu") {
      return 20;
    } else if (b[1] == "shein") {
      return 21;
    } else if (b[1] == "pdfeditor") {
      return 22;
    } else if (b[1] == "opera") {
      return 23;
    } else if (b[1] == "lumeBrowserAndroid") {
      return 24;
    } else if (b[1] == "pushNotifications") {
      return 25;
    } else if (b[1] == "installer") {
      return 26;
    } else if (b[1] == "buff") {
      return 27;
    } else if (b[1] == "wAntiTheftMyPhone") {
      return 28;
    } else if (b[1] == "wAutoClicker") {
      return 29;
    } else if (b[1] == "wFlashlight") {
      return 30;
    } else if (b[1] == "wFlashlightSOS") {
      return 31;
    } else if (b[1] == "wPrankCallVideo") {
      return 32;
    } else if (b[1] == "wAmazonShopping") {
      return 33;
    } else if (b[1] == "wCashEmAll") {
      return 34;
    } else if (b[1] == "wMobileLegends") {
      return 35;
    } else if (b[1] == "wCashGiraffe") {
      return 36;
    } else if (b[1] == "betterdeals") {
      return 37;
    } else if (b[1] == "ldplayer") {
      return 38;
    } else if (b[1] == "captchafailed") {
      return 39;
    } else if (b[1] == "adblockdetected") {
      return 40;
    } else if (b[1] == "proxydetected") {
      return 41;
    } else if (b[1] == "connectionlost") {
      return 42;
    } else if (b[1] == "premiumOnly") {
      return 43;
    } else if (b[1] == "desktoponly") {
      return 44;
    } else {
      return -1;
    }
  }
  if (~(t = C(o))) {
    e = p[t] = v[t](o);
  }
  let d = o[1] == "work-ink-pass-promo" && P0(o);
  return {
    c() {
      r = E("div");
      if (e) {
        e.c();
      }
      a = G();
      if (d) {
        d.c();
      }
      this.h();
    },
    l(b) {
      r = N(b, "DIV", {
        class: true
      });
      var S = J(r);
      if (e) {
        e.l(S);
      }
      a = H(S);
      if (d) {
        d.l(S);
      }
      S.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "modal");
    },
    m(b, S) {
      L(b, r, S);
      if (~t) {
        p[t].m(r, null);
      }
      V(r, a);
      if (d) {
        d.m(r, null);
      }
      c = true;
    },
    p(b, S) {
      let y = t;
      t = C(b);
      if (t === y) {
        if (~t) {
          p[t].p(b, S);
        }
      } else {
        if (e) {
          Ne();
          te(p[y], 1, 1, () => {
            p[y] = null;
          });
          Ve();
        }
        if (~t) {
          e = p[t];
          if (e) {
            e.p(b, S);
          } else {
            e = p[t] = v[t](b);
            e.c();
          }
          $(e, 1);
          e.m(r, a);
        } else {
          e = null;
        }
      }
      if (b[1] == "work-ink-pass-promo") {
        if (d) {
          d.p(b, S);
          if (S & 2) {
            $(d, 1);
          }
        } else {
          d = P0(b);
          d.c();
          $(d, 1);
          d.m(r, null);
        }
      } else if (d) {
        Ne();
        te(d, 1, 1, () => {
          d = null;
        });
        Ve();
      }
    },
    i(b) {
      if (!c) {
        $(e);
        $(d);
        c = true;
      }
    },
    o(b) {
      te(e);
      te(d);
      c = false;
    },
    d(b) {
      if (b) {
        R(r);
      }
      if (~t) {
        p[t].d();
      }
      if (d) {
        d.d();
      }
    }
  };
}
function wA(o) {
  let r;
  let t = "<div></div> <div></div> <div></div> <div></div>";
  let e;
  let a;
  let c = "Waiting for step completion...";
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      this.h();
    },
    l(v) {
      r = N(v, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1985ev8") {
        r.innerHTML = t;
      }
      e = H(v);
      a = N(v, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-70w9ha") {
        a.textContent = c;
      }
      this.h();
    },
    h() {
      P(r, "class", "lds-ellipsis");
      P(a, "class", "title alt");
    },
    m(v, p) {
      L(v, r, p);
      L(v, e, p);
      L(v, a, p);
    },
    p: K,
    i: K,
    o: K,
    d(v) {
      if (v) {
        R(r);
        R(e);
        R(a);
      }
    }
  };
}
function _A(o) {
  let r;
  let t = "<img alt=\"icon\" src=\"/media/icons/green/hand.svg\"/>";
  let e;
  let a;
  let c = "This link is desktop-only!";
  let v;
  let p;
  let C = "Please use your desktop computer to access this link.";
  let d;
  let b;
  let S = "Refresh";
  let y;
  let W;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1lt73pa") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1e46syw") {
        a.textContent = c;
      }
      v = H(f);
      p = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-346ceb") {
        p.textContent = C;
      }
      d = H(f);
      b = N(f, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-yavawd") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(r, "class", "icocont topicon");
      P(a, "class", "title center");
      P(p, "class", "desc center");
      P(b, "class", "button big center");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      L(f, p, w);
      L(f, d, w);
      L(f, b, w);
      if (!y) {
        W = se(b, "click", o[8]);
        y = true;
      }
    },
    p: K,
    i: K,
    o: K,
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
      }
      y = false;
      W();
    }
  };
}
function IA(o) {
  let r;
  let t = "<img alt=\"icon\" src=\"/media/icons/green/noconnection.svg\"/>";
  let e;
  let a;
  let c = "This is a premium-only link.";
  let v;
  let p;
  let C = `The creator has marked this link as being preomium-only. 
                        Buy work.ink Premium to access this content.`;
  let d;
  let b;
  let S = "Buy Work.ink Premium";
  let y;
  let W;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-xab822") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-utzv7r") {
        a.textContent = c;
      }
      v = H(f);
      p = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-on6y6c") {
        p.textContent = C;
      }
      d = H(f);
      b = N(f, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-wu8a4x") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(r, "class", "icocont topicon");
      P(a, "class", "title center");
      P(p, "class", "desc center");
      P(b, "class", "button big center");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      L(f, p, w);
      L(f, d, w);
      L(f, b, w);
      if (!y) {
        W = se(b, "click", o[7]);
        y = true;
      }
    },
    p: K,
    i: K,
    o: K,
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
      }
      y = false;
      W();
    }
  };
}
function SA(o) {
  let r;
  let t = "<img alt=\"icon\" src=\"/media/icons/green/noconnection.svg\"/>";
  let e;
  let a;
  let c = "Connection Was Lost";
  let v;
  let p;
  let C = `Your internet connection seems to have dropped. Please
                        check your internet connection and reload this page.`;
  let d;
  let b;
  let S = "Refresh";
  let y;
  let W;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-xab822") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-xmvc1x") {
        a.textContent = c;
      }
      v = H(f);
      p = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-14ci0oa") {
        p.textContent = C;
      }
      d = H(f);
      b = N(f, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-yavawd") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(r, "class", "icocont topicon");
      P(a, "class", "title center");
      P(p, "class", "desc center");
      P(b, "class", "button big center");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      L(f, p, w);
      L(f, d, w);
      L(f, b, w);
      if (!y) {
        W = se(b, "click", o[8]);
        y = true;
      }
    },
    p: K,
    i: K,
    o: K,
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
      }
      y = false;
      W();
    }
  };
}
function yA(o) {
  let r;
  let t = "<img alt=\"icon\" src=\"/media/icons/green/proxy.svg\"/>";
  let e;
  let a;
  let c = "Proxy/VPN Was Detected";
  let v;
  let p;
  let C = "Please disable it to help fund our creators";
  let d;
  let b;
  let S = "Refresh Page";
  let y;
  let W;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1kegnrb") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1xxfjx4") {
        a.textContent = c;
      }
      v = H(f);
      p = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1ea6mxs") {
        p.textContent = C;
      }
      d = H(f);
      b = N(f, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-12d8lva") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(r, "class", "icocont topicon");
      P(a, "class", "title center");
      P(p, "class", "desc center");
      P(b, "class", "button big center");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      L(f, p, w);
      L(f, d, w);
      L(f, b, w);
      if (!y) {
        W = se(b, "click", o[8]);
        y = true;
      }
    },
    p: K,
    i: K,
    o: K,
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
      }
      y = false;
      W();
    }
  };
}
function TA(o) {
  let r;
  let t = "<img alt=\"icon\" src=\"/media/icons/green/hand.svg\"/>";
  let e;
  let a;
  let c = "Adblocker Was Detected";
  let v;
  let p;
  let C = `We know you don&#39;t like ads, but they&#39;re the only way
                        that our creators can get paid. Disable it and refresh
                        the page. Also disable any anti-tracking functionality
                        in your browser or use <b>Google Chrome</b> for the best
                        experience.`;
  let d;
  let b;
  let S = "Refresh Page";
  let y;
  let W;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.innerHTML = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1lt73pa") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1l9lhse") {
        a.textContent = c;
      }
      v = H(f);
      p = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-12ovqu") {
        p.innerHTML = C;
      }
      d = H(f);
      b = N(f, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-12d8lva") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(r, "class", "icocont topicon");
      P(a, "class", "title center");
      P(p, "class", "desc center");
      P(b, "class", "button big center");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      L(f, p, w);
      L(f, d, w);
      L(f, b, w);
      if (!y) {
        W = se(b, "click", o[8]);
        y = true;
      }
    },
    p: K,
    i: K,
    o: K,
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
      }
      y = false;
      W();
    }
  };
}
function BA(o) {
  let r;
  let t = "<img alt=\"icon\" src=\"/media/icons/green/robot.svg\"/>";
  let e;
  let a;
  let c = "Are You Human?";
  let v;
  let p;
  let C = `We could not verify that you are human, please try
                        refreshing the site`;
  let d;
  let b;
  let S = "Refresh Page";
  let y;
  let W;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      b = E("button");
      b.textContent = S;
      this.h();
    },
    l(f) {
      r = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-13t0htj") {
        r.innerHTML = t;
      }
      e = H(f);
      a = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1c02sr7") {
        a.textContent = c;
      }
      v = H(f);
      p = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-l0h8gz") {
        p.textContent = C;
      }
      d = H(f);
      b = N(f, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-12d8lva") {
        b.textContent = S;
      }
      this.h();
    },
    h() {
      P(r, "class", "icocont topicon");
      P(a, "class", "title center");
      P(p, "class", "desc center");
      P(b, "class", "button big center");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      L(f, a, w);
      L(f, v, w);
      L(f, p, w);
      L(f, d, w);
      L(f, b, w);
      if (!y) {
        W = se(b, "click", o[8]);
        y = true;
      }
    },
    p: K,
    i: K,
    o: K,
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
      }
      y = false;
      W();
    }
  };
}
function MA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/roblox.webp\"/>";
  let e;
  let a;
  let c = "Install LDPlayer";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/en-ldplayer-logo.png\"/></div> <div class=\"text\"><span class=\"title\">LDPlayer</span> <span class=\"count\">Download &amp; install</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [AW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return pW;
    } else {
      return WW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-hzlvm2") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-12yzb7v") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1wl4aqx") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function DA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/betterdeals_promotional.webp\"/>";
  let e;
  let a;
  let c = "Install Betterdeals Browser Extension";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/betterdeals.png\"/></div> <div class=\"text\"><span class=\"title\">Betterdeals</span> <span class=\"count\">Install from Chrome Store</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [vW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return gW;
    } else {
      return bW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-om51ug") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-11s06s6") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1527rhy") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function RA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/cashgiraffe.jpg\"/>";
  let e;
  let a;
  let c = "Install Cash Giraffe";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/cashgiraffe.png\"/></div> <div class=\"text\"><span class=\"title\">Cash Giraffe</span> <span class=\"count\">Install from Play Store</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [CW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return wW;
    } else {
      return kW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-yv92xm") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1rcsuph") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-zycma0") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function YA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/mobilelegends.jpg\"/>";
  let e;
  let a;
  let c = "Install Mobile Legends";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/mobilelegends.png\"/></div> <div class=\"text\"><span class=\"title\">Mobile Legends</span> <span class=\"count\">Install from Play Store</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [_W]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return SW;
    } else {
      return IW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-16h6r9r") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1jmlq6e") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1nzrn4o") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function OA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/cashemall.jpg\"/>";
  let e;
  let a;
  let c = "Install Cash 'Em All";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/cashemall.png\"/></div> <div class=\"text\"><span class=\"title\">Cash &#39;Em All</span> <span class=\"count\">Install from Play Store</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [yW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return BW;
    } else {
      return TW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-b38dkl") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-jx90z5") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-yvpdw7") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function LA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/switch-ga.webp\"/>";
  let e;
  let a;
  let c = "Gewinne eine Nintendo Switch";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"text\"><span class=\"title\">Nintendo Switch Gewinnspiel</span> <span class=\"count\">Zeitlich begrenzt</span></div>";
  let y;
  let W;
  let f = "Teilnehmen";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [MW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return RW;
    } else {
      return DW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1kg9eqb") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-q7c0f6") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-60gj2h") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-kz3dpg") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function PA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/prankcall_banner.png\"/>";
  let e;
  let a;
  let c = "Install Prank Call Video";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/wPrankCallVideo.png\"/></div> <div class=\"text\"><span class=\"title\">Prank Call Video</span> <span class=\"count\">Install from Play Store</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [YW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return LW;
    } else {
      return OW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-7wadeq") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-ci4t9v") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-uw6gal") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function EA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/flashlight_banner.png\"/>";
  let e;
  let a;
  let c = "Install Flashlight SOS";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/wFlashlightSOS.png\"/></div> <div class=\"text\"><span class=\"title\">Flashlight SOS</span> <span class=\"count\">Install from Play Store</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [PW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return NW;
    } else {
      return EW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-bttte2") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-gflw2n") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-bemc5r") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function NA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/flashlight_banner.png\"/>";
  let e;
  let a;
  let c = "Install Flashlight LED";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/wFlashlight.png\"/></div> <div class=\"text\"><span class=\"title\">FLashlight LED</span> <span class=\"count\">Install from Play Store</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [VW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return UW;
    } else {
      return qW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-bttte2") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-11fee8t") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1yrudke") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function VA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/autoclicker_banner.png\"/>";
  let e;
  let a;
  let c = "Install Auto Clicker";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/wAutoClicker.png\"/></div> <div class=\"text\"><span class=\"title\">Auto Clicker</span> <span class=\"count\">Install from Play Store</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [jW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return GW;
    } else {
      return zW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1nuhltm") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1ud69ry") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1apsmmv") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function qA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/antitheft_banner.png\"/>";
  let e;
  let a;
  let c = "Install AntiTheft My Phone";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/wAntiTheftMyPhone.png\"/></div> <div class=\"text\"><span class=\"title\">AntiTheft My Phone</span> <span class=\"count\">Install from Play Store</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [HW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return XW;
    } else {
      return QW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-hkytf9") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1cuelzr") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-hiefwx") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function UA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/buff.png\"/>";
  let e;
  let a;
  let c = "Install Buff";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/buff.png\"/></div> <div class=\"text\"><span class=\"title\">Buff</span> <span class=\"count\">1 million users</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [ZW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return JW;
    } else {
      return FW;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-rmr55o") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-b7v6c7") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-19qonmp") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner hasvideo");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = [se(r, "click", po(o[6])), se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        })];
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      at(Y);
    }
  };
}
function jA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/dataentry.jpg\"/>";
  let e;
  let a;
  let c = "Choose & install a software";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/installer.svg\"/></div> <div class=\"text\"><span class=\"title\">work.ink Installer</span> <span class=\"count\">2 million recent downloads</span></div>";
  let y;
  let W;
  let f = "Download";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [KW]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return ep;
    } else {
      return $W;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-rz9a5p") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-uqsea7") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-wpgucc") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-83okd7") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function zA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/gaminglaptop.jpeg\"/>";
  let e;
  let a;
  let c = "Allow Push Notifications";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/push-notifications.png\"/></div> <div class=\"text\"><span class=\"title\">Push Notifications</span> <span class=\"count\">Click &quot;Allow&quot; to proceed.</span></div>";
  let y;
  let W;
  let f = "Allow";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [tp]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return sp;
    } else {
      return np;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-811nl9") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1wzdv0") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1panbqv") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-1l69kl8") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function GA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/lume.jpg\"/>";
  let e;
  let a;
  let c = "Install Lume Browser";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/lume-icon.png\"/></div> <div class=\"text\"><span class=\"title\">Lume - fast, private browser</span> <span class=\"count\">10,000 users</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [rp]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return ip;
    } else {
      return ap;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-apxwyg") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-f1fxr3") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1v4x6g7") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function HA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/opera.png\"/>";
  let e;
  let a;
  let c = "Install Opera Browser";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/opera-normal.png\"/></div> <div class=\"text\"><span class=\"title\">Opera Browser</span> <span class=\"count\">50 million users</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [lp]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return cp;
    } else {
      return op;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-n3v41m") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-45kn3f") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1ojlc5p") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function QA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/pdfeditor.jpg\"/>";
  let e;
  let a;
  let c = "Install PDF Editor for Google Chrome";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/pdfeditor.png\"/></div> <div class=\"text\"><span class=\"title\">PDF Editor</span> <span class=\"count\">Edit &amp; split PDF files.</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [xp]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return fp;
    } else {
      return up;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-nbgx9i") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-q88msv") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-tfr089") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function XA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/coupert_banner.webp\"/>";
  let e;
  let a;
  let c = "Install Coupert Extension";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/cop-logo.png\"/></div> <div class=\"text\"><span class=\"title\">Coupert Extension</span> <span class=\"count\">3+ million users</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [dp]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return mp;
    } else {
      return hp;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1wog72t") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1pa3byf") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-170e4ub") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function ZA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/inbox_banner.jpg\"/>";
  let e;
  let a;
  let c = "Sign up for InboxDollars & Start Earning Cash!";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/inbox_logo.jpeg\"/></div> <div class=\"text\"><span class=\"title\">InboxDollars</span> <span class=\"count\">Earn cash online</span></div>";
  let y;
  let W;
  let f = "Sign up";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [Ap]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return pp;
    } else {
      return Wp;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-a0ok02") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-4pgcwj") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1ibkrg4") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-qapwop") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function FA(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/pippit.jpg\"/>";
  let e;
  let a;
  let c = "Pippit AI Video Editor - by Capcut";
  let v;
  let p;
  let C = `Sign up for free to use Pippit by Capcut - an AI Video
                        Editor for marketing success. After installation you
                        will be redirected automatically. This might take some
                        time.`;
  let d;
  let b;
  let S = "<li class=\"flex items-center\"><span class=\"flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary text-primary font-semibold mr-4 flex-shrink-0\">1</span> <p class=\"text-gray-800 leading-snug\">Click &quot;Sign up&quot; and <b>register a new account</b> <br/>(Possible via Google).</p></li> <li class=\"flex items-center\"><span class=\"flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary text-primary font-semibold mr-4 flex-shrink-0\">2</span> <p class=\"text-gray-800 leading-snug\">Enter your age to complete the setup.</p></li> <li class=\"flex items-center\"><span class=\"flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary text-primary font-semibold mr-4 flex-shrink-0\">3</span> <p class=\"text-gray-800 leading-snug\">Go back to work.ink to continue.</p></li>";
  let y;
  let W;
  let f;
  let w = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/pippit.png\"/></div> <div class=\"text\"><span class=\"title\">Pippit - AI Video Creator</span> <span class=\"count\">Sign up for free • 20M+ users</span></div>";
  let _;
  let h;
  let D = "Sign up";
  let Y;
  let j;
  let Z;
  let q;
  function M(Q, F) {
    if (Q[2]) {
      return bp;
    } else {
      return vp;
    }
  }
  let O = M(o);
  let X = O(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      b = E("ol");
      b.innerHTML = S;
      y = G();
      W = E("div");
      f = E("div");
      f.innerHTML = w;
      _ = G();
      h = E("button");
      h.textContent = D;
      Y = G();
      X.c();
      j = ie();
      this.h();
    },
    l(Q) {
      r = N(Q, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1xmgzgl") {
        r.innerHTML = t;
      }
      e = H(Q);
      a = N(Q, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1uge7jn") {
        a.textContent = c;
      }
      v = H(Q);
      p = N(Q, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-17qbmkp") {
        p.textContent = C;
      }
      d = H(Q);
      b = N(Q, "OL", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1najq6z") {
        b.innerHTML = S;
      }
      y = H(Q);
      W = N(Q, "DIV", {
        class: true
      });
      var F = J(W);
      f = N(F, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(f) !== "svelte-1sa9kw5") {
        f.innerHTML = w;
      }
      _ = H(F);
      h = N(F, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(h) !== "svelte-qapwop") {
        h.textContent = D;
      }
      F.forEach(R);
      Y = H(Q);
      X.l(Q);
      j = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(p, "class", "desc");
      P(b, "class", "list-none space-y-4 desc");
      P(f, "class", "installapp-inner");
      P(h, "class", "button");
      P(W, "class", "installapp");
    },
    m(Q, F) {
      L(Q, r, F);
      L(Q, e, F);
      L(Q, a, F);
      L(Q, v, F);
      L(Q, p, F);
      L(Q, d, F);
      L(Q, b, F);
      L(Q, y, F);
      L(Q, W, F);
      V(W, f);
      V(W, _);
      V(W, h);
      L(Q, Y, F);
      X.m(Q, F);
      L(Q, j, F);
      if (!Z) {
        q = se(h, "click", function () {
          var oe;
          var ce;
          if (Ce((oe = o[3]) == null ? undefined : oe.installButtonCallback())) {
            if ((ce = o[3]) != null) {
              ce.installButtonCallback().apply(this, arguments);
            }
          }
        });
        Z = true;
      }
    },
    p(Q, F) {
      o = Q;
      if (O === (O = M(o)) && X) {
        X.p(o, F);
      } else {
        X.d(1);
        X = O(o);
        if (X) {
          X.c();
          X.m(j.parentNode, j);
        }
      }
    },
    i: K,
    o: K,
    d(Q) {
      if (Q) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
        R(y);
        R(W);
        R(Y);
        R(j);
      }
      X.d(Q);
      Z = false;
      q();
    }
  };
}
function JA(o) {
  let r;
  let t;
  r = new gA({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[19]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function KA(o) {
  let r;
  let t;
  r = new cA({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[18]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function $A(o) {
  let r;
  let t;
  r = new mA({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[17]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function eW(o) {
  let r;
  let t;
  r = new sA({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[16]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function tW(o) {
  let r;
  let t;
  r = new Jm({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[15]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function nW(o) {
  let r;
  let t;
  r = new Gm({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[14]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function sW(o) {
  let r;
  let t;
  r = new Nm({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[13]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function rW(o) {
  let r;
  let t;
  r = new Rm({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[12]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function aW(o) {
  let r;
  let t;
  r = new Sm({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[11]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function iW(o) {
  let r;
  let t;
  r = new gm({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[10]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function lW(o) {
  let r;
  let t;
  r = new mm({
    props: {
      progress: o[2],
      options: o[3]
    }
  });
  r.$on("abort", o[9]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a & 4) {
        c.progress = e[2];
      }
      if (a & 8) {
        c.options = e[3];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function oW(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/opera_spotify.webp\"/>";
  let e;
  let a;
  let c = "Get 3 Months FREE Spotify Premium";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/opera.svg\"/></div> <div class=\"text\"><span class=\"title\">Opera Browser</span> <span class=\"count\">Limited time offer • 20M+ users</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [gp]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return kp;
    } else {
      return Cp;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-hg0wc0") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1vsvdno") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-9vfao0") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function cW(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/installapp.jpg\"/>";
  let e;
  let a;
  let c = "Install this App to continue";
  let v;
  let p;
  let C = `After installation you will be redirected
                        automatically. This might take some time.`;
  let d;
  let b;
  let S;
  let y;
  let W;
  let f;
  let w;
  function _(Y, j) {
    if (Y[2]) {
      return _p;
    } else {
      return wp;
    }
  }
  let h = _(o);
  let D = h(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      b = E("iframe");
      y = G();
      D.c();
      W = ie();
      this.h();
    },
    l(Y) {
      r = N(Y, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1tdqadt") {
        r.innerHTML = t;
      }
      e = H(Y);
      a = N(Y, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-49xc83") {
        a.textContent = c;
      }
      v = H(Y);
      p = N(Y, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1dv1rex") {
        p.textContent = C;
      }
      d = H(Y);
      b = N(Y, "IFRAME", {
        title: true,
        scrolling: true,
        style: true,
        src: true
      });
      J(b).forEach(R);
      y = H(Y);
      D.l(Y);
      W = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(p, "class", "desc");
      P(b, "title", "Install App");
      P(b, "scrolling", "no");
      Gt(b, "overflow", "hidden");
      Gt(b, "border", "0px");
      Gt(b, "width", "100%");
      Gt(b, "height", "95px");
      if (!At(b.src, S = "https://d390icj1ta4x0p.cloudfront.net/public/ct?cpguid=&pr=0&it=4378629&w=354&h=874&key=b8b96&m=1&r=")) {
        P(b, "src", S);
      }
    },
    m(Y, j) {
      L(Y, r, j);
      L(Y, e, j);
      L(Y, a, j);
      L(Y, v, j);
      L(Y, p, j);
      L(Y, d, j);
      L(Y, b, j);
      L(Y, y, j);
      D.m(Y, j);
      L(Y, W, j);
      if (!f) {
        w = se(b, "click", function () {
          var Z;
          var q;
          if (Ce((Z = o[3]) == null ? undefined : Z.installButtonCallback())) {
            if ((q = o[3]) != null) {
              q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        f = true;
      }
    },
    p(Y, j) {
      o = Y;
      if (h === (h = _(o)) && D) {
        D.p(o, j);
      } else {
        D.d(1);
        D = h(o);
        if (D) {
          D.c();
          D.m(W.parentNode, W);
        }
      }
    },
    i: K,
    o: K,
    d(Y) {
      if (Y) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
        R(y);
        R(W);
      }
      D.d(Y);
      f = false;
      w();
    }
  };
}
function xW(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/tiktok.jpg\"/>";
  let e;
  let a;
  let c = "Install TikTok";
  let v;
  let p;
  let C = `You will be redirected automatically after running
                        TikTok for 30 seconds.`;
  let d;
  let b;
  let S;
  let y = "<img alt=\"icon\" src=\"/media/icons/brands/tiktok.png\"/>";
  let W;
  let f;
  let w = "<span class=\"title\">TikTok</span> <span class=\"count\">Install and run for 30 seconds</span>";
  let _;
  let h;
  let D = "Install";
  let Y;
  let j;
  let Z;
  let q;
  function M(Q, F) {
    if (Q[2]) {
      return Sp;
    } else {
      return Ip;
    }
  }
  let O = M(o);
  let X = O(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      b = E("div");
      S = E("div");
      S.innerHTML = y;
      W = G();
      f = E("div");
      f.innerHTML = w;
      _ = G();
      h = E("button");
      h.textContent = D;
      Y = G();
      X.c();
      j = ie();
      this.h();
    },
    l(Q) {
      r = N(Q, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-utf44x") {
        r.innerHTML = t;
      }
      e = H(Q);
      a = N(Q, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-134jyj4") {
        a.textContent = c;
      }
      v = H(Q);
      p = N(Q, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-15sc92a") {
        p.textContent = C;
      }
      d = H(Q);
      b = N(Q, "DIV", {
        class: true
      });
      var F = J(b);
      S = N(F, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(S) !== "svelte-1ecn1et") {
        S.innerHTML = y;
      }
      W = H(F);
      f = N(F, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(f) !== "svelte-1ocuqz9") {
        f.innerHTML = w;
      }
      _ = H(F);
      h = N(F, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(h) !== "svelte-veal8y") {
        h.textContent = D;
      }
      F.forEach(R);
      Y = H(Q);
      X.l(Q);
      j = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(p, "class", "desc");
      P(S, "class", "icocont appicon");
      P(f, "class", "text");
      P(h, "class", "button");
      P(b, "class", "installapp");
    },
    m(Q, F) {
      L(Q, r, F);
      L(Q, e, F);
      L(Q, a, F);
      L(Q, v, F);
      L(Q, p, F);
      L(Q, d, F);
      L(Q, b, F);
      V(b, S);
      V(b, W);
      V(b, f);
      V(b, _);
      V(b, h);
      L(Q, Y, F);
      X.m(Q, F);
      L(Q, j, F);
      if (!Z) {
        q = se(h, "click", function () {
          var oe;
          var ce;
          if (Ce((oe = o[3]) == null ? undefined : oe.installButtonCallback())) {
            if ((ce = o[3]) != null) {
              ce.installButtonCallback().apply(this, arguments);
            }
          }
        });
        Z = true;
      }
    },
    p(Q, F) {
      o = Q;
      if (O === (O = M(o)) && X) {
        X.p(o, F);
      } else {
        X.d(1);
        X = O(o);
        if (X) {
          X.c();
          X.m(j.parentNode, j);
        }
      }
    },
    i: K,
    o: K,
    d(Q) {
      if (Q) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
        R(Y);
        R(j);
      }
      X.d(Q);
      Z = false;
      q();
    }
  };
}
function uW(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/avast_browser_banner.png\"/>";
  let e;
  let a;
  let c = "Download & Install Avast Browser";
  let v;
  let p;
  let C = `Download and install Avast Browser. After
                        successful installation you will be redirected automatically. This
                        might take some time.`;
  let d;
  let b;
  let S;
  let y = "<img alt=\"icon\" src=\"/media/icons/brands/avast_icon.png\"/>";
  let W;
  let f;
  let w = "<span class=\"title\">Avast Secure Browser</span> <span class=\"count\">60 million users</span>";
  let _;
  let h;
  let D = "Install";
  let Y;
  let j;
  let Z;
  let q;
  function M(Q, F) {
    if (Q[2]) {
      return Tp;
    } else {
      return yp;
    }
  }
  let O = M(o);
  let X = O(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      b = E("div");
      S = E("div");
      S.innerHTML = y;
      W = G();
      f = E("div");
      f.innerHTML = w;
      _ = G();
      h = E("button");
      h.textContent = D;
      Y = G();
      X.c();
      j = ie();
      this.h();
    },
    l(Q) {
      r = N(Q, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1i0injc") {
        r.innerHTML = t;
      }
      e = H(Q);
      a = N(Q, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-16mwlal") {
        a.textContent = c;
      }
      v = H(Q);
      p = N(Q, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1xcw0h2") {
        p.textContent = C;
      }
      d = H(Q);
      b = N(Q, "DIV", {
        class: true
      });
      var F = J(b);
      S = N(F, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(S) !== "svelte-hjocoy") {
        S.innerHTML = y;
      }
      W = H(F);
      f = N(F, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(f) !== "svelte-ykxvop") {
        f.innerHTML = w;
      }
      _ = H(F);
      h = N(F, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(h) !== "svelte-veal8y") {
        h.textContent = D;
      }
      F.forEach(R);
      Y = H(Q);
      X.l(Q);
      j = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(p, "class", "desc");
      P(S, "class", "icocont appicon");
      P(f, "class", "text");
      P(h, "class", "button");
      P(b, "class", "installapp");
    },
    m(Q, F) {
      L(Q, r, F);
      L(Q, e, F);
      L(Q, a, F);
      L(Q, v, F);
      L(Q, p, F);
      L(Q, d, F);
      L(Q, b, F);
      V(b, S);
      V(b, W);
      V(b, f);
      V(b, _);
      V(b, h);
      L(Q, Y, F);
      X.m(Q, F);
      L(Q, j, F);
      if (!Z) {
        q = se(h, "click", function () {
          var oe;
          var ce;
          if (Ce((oe = o[3]) == null ? undefined : oe.installButtonCallback())) {
            if ((ce = o[3]) != null) {
              ce.installButtonCallback().apply(this, arguments);
            }
          }
        });
        Z = true;
      }
    },
    p(Q, F) {
      o = Q;
      if (O === (O = M(o)) && X) {
        X.p(o, F);
      } else {
        X.d(1);
        X = O(o);
        if (X) {
          X.c();
          X.m(j.parentNode, j);
        }
      }
    },
    i: K,
    o: K,
    d(Q) {
      if (Q) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(p);
        R(d);
        R(b);
        R(Y);
        R(j);
      }
      X.d(Q);
      Z = false;
      q();
    }
  };
}
function fW(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/raidshadowlegends.jpg\"/>";
  let e;
  let a;
  let c = "Install Raid Shadow Legends";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/raidshadowlegends.png\"/></div> <div class=\"text\"><span class=\"title\">Raid Shadow Legends</span> <span class=\"count\">380 million users</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [Bp]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return Dp;
    } else {
      return Mp;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-gi5h91") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-18a9cw4") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-lgmr15") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function dW(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/nordvpn.jpg\"/>";
  let e;
  let a;
  let c = "Download and try NordVPN";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/nordvpn.svg\"/></div> <div class=\"text\"><span class=\"title\">NordVPN</span> <span class=\"count\">75 million users</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [Rp]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return Op;
    } else {
      return Yp;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1uvxfgi") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-g7lmvw") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-p78w5r") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function hW(o) {
  let r;
  let t = "<img alt=\"banner\" src=\"/media/banners/quicksnap.jpg\"/>";
  let e;
  let a;
  let c = "Install the Quicksnap browser extension";
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/quicksnap.png\"/></div> <div class=\"text\"><span class=\"title\">Quicksnap</span> <span class=\"count\">Screenshot browser extension</span></div>";
  let y;
  let W;
  let f = "Install";
  let w;
  let _;
  let h;
  let D;
  let Y;
  p = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [Lp]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function j(M, O) {
    if (M[2]) {
      return Ep;
    } else {
      return Pp;
    }
  }
  let Z = j(o);
  let q = Z(o);
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("span");
      a.textContent = c;
      v = G();
      he(p.$$.fragment);
      C = G();
      d = E("div");
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("button");
      W.textContent = f;
      w = G();
      q.c();
      _ = ie();
      this.h();
    },
    l(M) {
      r = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1l1ivi") {
        r.innerHTML = t;
      }
      e = H(M);
      a = N(M, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-17b6oov") {
        a.textContent = c;
      }
      v = H(M);
      me(p.$$.fragment, M);
      C = H(M);
      d = N(M, "DIV", {
        class: true
      });
      var O = J(d);
      b = N(O, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1nhff9f") {
        b.innerHTML = S;
      }
      y = H(O);
      W = N(O, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-veal8y") {
        W.textContent = f;
      }
      O.forEach(R);
      w = H(M);
      q.l(M);
      _ = ie();
      this.h();
    },
    h() {
      P(r, "class", "banner");
      P(a, "class", "title");
      P(b, "class", "installapp-inner");
      P(W, "class", "button");
      P(d, "class", "installapp");
    },
    m(M, O) {
      L(M, r, O);
      L(M, e, O);
      L(M, a, O);
      L(M, v, O);
      Ae(p, M, O);
      L(M, C, O);
      L(M, d, O);
      V(d, b);
      V(d, y);
      V(d, W);
      L(M, w, O);
      q.m(M, O);
      L(M, _, O);
      h = true;
      if (!D) {
        Y = se(W, "click", function () {
          var X;
          var Q;
          if (Ce((X = o[3]) == null ? undefined : X.installButtonCallback())) {
            if ((Q = o[3]) != null) {
              Q.installButtonCallback().apply(this, arguments);
            }
          }
        });
        D = true;
      }
    },
    p(M, O) {
      o = M;
      const X = {};
      if (O & 4194304) {
        X.$$scope = {
          dirty: O,
          ctx: o
        };
      }
      p.$set(X);
      if (Z === (Z = j(o)) && q) {
        q.p(o, O);
      } else {
        q.d(1);
        q = Z(o);
        if (q) {
          q.c();
          q.m(_.parentNode, _);
        }
      }
    },
    i(M) {
      if (!h) {
        $(p.$$.fragment, M);
        h = true;
      }
    },
    o(M) {
      te(p.$$.fragment, M);
      h = false;
    },
    d(M) {
      if (M) {
        R(r);
        R(e);
        R(a);
        R(v);
        R(C);
        R(d);
        R(w);
        R(_);
      }
      We(p, M);
      q.d(M);
      D = false;
      Y();
    }
  };
}
function mW(o) {
  let r;
  let t = "Install the extension";
  let e;
  let a;
  let c;
  let v;
  let p;
  let C = "<div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/shiftsearch.jpg\"/></div> <div class=\"text\"><span class=\"title\">Shiftsearch</span> <span class=\"count\">50,000 users</span></div>";
  let d;
  let b;
  let S = "Install";
  let y;
  let W;
  let f;
  let w;
  let _;
  a = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 2,
      $$slots: {
        default: [Np]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  function h(j, Z) {
    if (j[2]) {
      return qp;
    } else {
      return Vp;
    }
  }
  let D = h(o);
  let Y = D(o);
  return {
    c() {
      r = E("span");
      r.textContent = t;
      e = G();
      he(a.$$.fragment);
      c = G();
      v = E("div");
      p = E("div");
      p.innerHTML = C;
      d = G();
      b = E("button");
      b.textContent = S;
      y = G();
      Y.c();
      W = ie();
      this.h();
    },
    l(j) {
      r = N(j, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1ghhoig") {
        r.textContent = t;
      }
      e = H(j);
      me(a.$$.fragment, j);
      c = H(j);
      v = N(j, "DIV", {
        class: true
      });
      var Z = J(v);
      p = N(Z, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1eg530r") {
        p.innerHTML = C;
      }
      d = H(Z);
      b = N(Z, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-veal8y") {
        b.textContent = S;
      }
      Z.forEach(R);
      y = H(j);
      Y.l(j);
      W = ie();
      this.h();
    },
    h() {
      P(r, "class", "title");
      P(p, "class", "installapp-inner");
      P(b, "class", "button");
      P(v, "class", "installapp");
    },
    m(j, Z) {
      L(j, r, Z);
      L(j, e, Z);
      Ae(a, j, Z);
      L(j, c, Z);
      L(j, v, Z);
      V(v, p);
      V(v, d);
      V(v, b);
      L(j, y, Z);
      Y.m(j, Z);
      L(j, W, Z);
      f = true;
      if (!w) {
        _ = se(b, "click", function () {
          var q;
          var M;
          if (Ce((q = o[3]) == null ? undefined : q.installButtonCallback())) {
            if ((M = o[3]) != null) {
              M.installButtonCallback().apply(this, arguments);
            }
          }
        });
        w = true;
      }
    },
    p(j, Z) {
      o = j;
      const q = {};
      if (Z & 4194304) {
        q.$$scope = {
          dirty: Z,
          ctx: o
        };
      }
      a.$set(q);
      if (D === (D = h(o)) && Y) {
        Y.p(o, Z);
      } else {
        Y.d(1);
        Y = D(o);
        if (Y) {
          Y.c();
          Y.m(W.parentNode, W);
        }
      }
    },
    i(j) {
      if (!f) {
        $(a.$$.fragment, j);
        f = true;
      }
    },
    o(j) {
      te(a.$$.fragment, j);
      f = false;
    },
    d(j) {
      if (j) {
        R(r);
        R(e);
        R(c);
        R(v);
        R(y);
        R(W);
      }
      We(a, j);
      Y.d(j);
      w = false;
      _();
    }
  };
}
function AW(o) {
  let r;
  let t = "Install LDPlayer for Roblox Android to continue.";
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1nda5k8") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function WW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function pW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function vW(o) {
  let r;
  let t = `Install the browser extension from the Chrome Store
                            to continue.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-mcor3v") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function bW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function gW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function CW(o) {
  let r;
  let t = `Install the App and run the App for 30 seconds to
                            continue.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1cuvflw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function kW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function wW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function _W(o) {
  let r;
  let t = `Install the App and run the App for 30 seconds to
                            continue.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1cuvflw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function IW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function SW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function yW(o) {
  let r;
  let t = `Install the App and run the App for 30 seconds to
                            continue.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1cuvflw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function TW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function BW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function MW(o) {
  let r;
  let t = "Regestriere dich mit deiner E-Mail-Adresse und gewinne eine Nintendo Switch";
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-eapklx") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function DW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function RW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function YW(o) {
  let r;
  let t = `Install the App and run the App for 30 seconds to
                            continue.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1cuvflw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function OW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function LW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function PW(o) {
  let r;
  let t = `Install the App and run the App for 30 seconds to
                            continue.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1cuvflw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function EW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function NW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function VW(o) {
  let r;
  let t = `Install the App and run the App for 30 seconds to
                            continue.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1cuvflw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function qW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function UW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function jW(o) {
  let r;
  let t = `Install the App and run the App for 30 seconds to
                            continue.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1cuvflw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function zW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function GW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function HW(o) {
  let r;
  let t = `Install the App and run the App for 30 seconds to
                            continue.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1cuvflw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function QW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function XW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function ZW(o) {
  let r;
  let t = `After installation you will be redirected
                            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-18fnsp5") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function FW(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function JW(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function KW(o) {
  let r;
  let t = `Install an application from the catalogue in the
                            installer. After that you will be redirected. This
                            may take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-15w67hl") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function $W(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function ep(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function tp(o) {
  let r;
  let t = `You will be able to continue after your allow push
                            notifications.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-mg8820") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function np(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function sp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function rp(o) {
  let r;
  let t = `After installation you will be redirected
                            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-18fnsp5") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function ap(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function ip(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function lp(o) {
  let r;
  let t = `After installation you will be redirected
                            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-18fnsp5") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function op(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function cp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function xp(o) {
  let r;
  let t = `After installing you will be redirected
                            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1bldha4") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function up(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function fp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function dp(o) {
  let r;
  let t = `After installing you will be redirected
                            automatically. This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1bldha4") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function hp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function mp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Ap(o) {
  let r;
  let t = `Join InboxDollars and start earning money by taking surveys, 
                            watching videos, and completing offers!
                            <br/> <br/>
                            After signing up you will be redirected automatically. 
                            This might take some time. ⚠️ New members can earn up to $5 
                            just for signing up!`;
  return {
    c() {
      r = E("span");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-18ndtl8") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Wp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function pp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for account creation...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-f1u7ef") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function vp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function bp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for you to sign up...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1p7v8jd") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function gp(o) {
  let r;
  let t = `Install Opera Browser and claim your free 3-month
                            Spotify Premium subscription worth $29.97.
                            <br/><br/> <strong>✓ Ad-free music</strong><br/> <strong>✓ Offline downloads</strong><br/> <strong>✓ High quality audio</strong> <br/><br/>
                            After installation you will be redirected automatically.
                            This might take some time.`;
  return {
    c() {
      r = E("span");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1nhbg1u") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Cp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function kp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function wp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function _p(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Ip(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function Sp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function yp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function Tp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Bp(o) {
  let r;
  let t = `Install and play Raid Shadow Legends. After
                            installation you will be redirected automatically.
                            This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-v4yfev") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Mp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function Dp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Rp(o) {
  let r;
  let t = `Download NordVPN and register an account. After
                            installation you will be redirected automatically.
                            This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1s0snds") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Yp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function Op(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Lp(o) {
  let r;
  let t = `Install Quicksnap from the Chrome Store. After
                            installation you will be redirected automatically.
                            This might take some time.`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-652ky5") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Pp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function Ep(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Np(o) {
  let r;
  let t = `Shiftsearch helps you to switch between search
                            engines more efficiently`;
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-bmyvuu") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Vp(o) {
  let r;
  let t = "choose different offer";
  let e;
  let a;
  return {
    c() {
      r = E("button");
      r.textContent = t;
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-14is0nw") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "closelabel");
    },
    m(c, v) {
      L(c, r, v);
      if (!e) {
        a = se(r, "click", function () {
          var p;
          var C;
          if (Ce((p = o[3]) == null ? undefined : p.abortButtonCallback())) {
            if ((C = o[3]) != null) {
              C.abortButtonCallback().apply(this, arguments);
            }
          }
        });
        e = true;
      }
    },
    p(c, v) {
      o = c;
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function qp(o) {
  let r;
  let t = `<div class="lds-dual-ring"></div>
                            Waiting for completion...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-tq32v5") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "duringinstall");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function P0(o) {
  let r;
  let t = "Try our Work.ink Bypass";
  let e;
  let a;
  let c;
  let v;
  let p = "<div class=\"installapp-inner\"><div class=\"icocont appicon\"><img alt=\"icon\" src=\"/media/icons/brands/work-ink-pass.png\"/></div> <div class=\"text\"><span class=\"title\">Work.ink Pass (Beta)</span> <span class=\"count\">1000 users</span></div></div> <a class=\"button\" target=\"_blank\" href=\"https://chromewebstore.google.com/detail/workink-pass/ihmilkpcjhagmcdeamfkomlhkjgodlno\">Install</a>";
  let C;
  let d;
  let b = "maybe next time";
  let S;
  let y;
  let W;
  a = new Oe({
    props: {
      fontSize: "14px",
      maxRows: 4,
      $$slots: {
        default: [Up]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  return {
    c() {
      r = E("span");
      r.textContent = t;
      e = G();
      he(a.$$.fragment);
      c = G();
      v = E("div");
      v.innerHTML = p;
      C = G();
      d = E("button");
      d.textContent = b;
      this.h();
    },
    l(f) {
      r = N(f, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1aup4pp") {
        r.textContent = t;
      }
      e = H(f);
      me(a.$$.fragment, f);
      c = H(f);
      v = N(f, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(v) !== "svelte-11d7lmu") {
        v.innerHTML = p;
      }
      C = H(f);
      d = N(f, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(d) !== "svelte-k8b94u") {
        d.textContent = b;
      }
      this.h();
    },
    h() {
      P(r, "class", "title");
      P(v, "class", "installapp");
      P(d, "class", "closelabel");
    },
    m(f, w) {
      L(f, r, w);
      L(f, e, w);
      Ae(a, f, w);
      L(f, c, w);
      L(f, v, w);
      L(f, C, w);
      L(f, d, w);
      S = true;
      if (!y) {
        W = se(d, "click", o[5]);
        y = true;
      }
    },
    p(f, w) {
      const _ = {};
      if (w & 4194304) {
        _.$$scope = {
          dirty: w,
          ctx: f
        };
      }
      a.$set(_);
    },
    i(f) {
      if (!S) {
        $(a.$$.fragment, f);
        S = true;
      }
    },
    o(f) {
      te(a.$$.fragment, f);
      S = false;
    },
    d(f) {
      if (f) {
        R(r);
        R(e);
        R(c);
        R(v);
        R(C);
        R(d);
      }
      We(a, f);
      y = false;
      W();
    }
  };
}
function Up(o) {
  let r;
  let t = `<br/>
                            Upgrade your Work.ink experience with our Bypass Extension.
                            Effortlessly skip ads and support creators!<br/><br/> <strong>Key Features:</strong><br/> <ul><li>Automatic ad-skipping passes.</li> <li>No change in browsing experience.</li> <li>Safe, anonymized data handling.</li></ul> <br/> <strong>Simple Support:</strong> Use the web, aid
                            creators through unseen affiliate links.<br/><br/> <strong>Notice:</strong> Extension active only on Work.ink.`;
  return {
    c() {
      r = E("span");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-10jcdta") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "desc");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function jp(o) {
  let r;
  let t;
  let e;
  let a;
  r = new px({
    props: {
      active: o[4],
      toggle: o[6],
      $$slots: {
        default: [CA]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  let c = o[0] && L0(o);
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      if (c) {
        c.c();
      }
      e = ie();
    },
    l(v) {
      me(r.$$.fragment, v);
      t = H(v);
      if (c) {
        c.l(v);
      }
      e = ie();
    },
    m(v, p) {
      Ae(r, v, p);
      L(v, t, p);
      if (c) {
        c.m(v, p);
      }
      L(v, e, p);
      a = true;
    },
    p(v, [p]) {
      const C = {};
      if (p & 16) {
        C.active = v[4];
      }
      if (p & 4194304) {
        C.$$scope = {
          dirty: p,
          ctx: v
        };
      }
      r.$set(C);
      if (v[0]) {
        if (c) {
          c.p(v, p);
          if (p & 1) {
            $(c, 1);
          }
        } else {
          c = L0(v);
          c.c();
          $(c, 1);
          c.m(e.parentNode, e);
        }
      } else if (c) {
        Ne();
        te(c, 1, 1, () => {
          c = null;
        });
        Ve();
      }
    },
    i(v) {
      if (!a) {
        $(r.$$.fragment, v);
        $(c);
        a = true;
      }
    },
    o(v) {
      te(r.$$.fragment, v);
      te(c);
      a = false;
    },
    d(v) {
      if (v) {
        R(t);
        R(e);
      }
      We(r, v);
      if (c) {
        c.d(v);
      }
    }
  };
}
function zp(o, r, t) {
  let {
    type: e = "default"
  } = r;
  let {
    active: a = false
  } = r;
  let {
    progress: c = false
  } = r;
  let {
    options: v = undefined
  } = r;
  const p = tt();
  function C() {
    p("closeWorkInkPassPromo", "");
  }
  let d = 0;
  function b() {
    t(4, d = d ? 0 : 1);
  }
  function S() {
    Ic.set(true);
    t(0, a = false);
  }
  function y() {
    window.location.reload();
  }
  const W = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const f = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const w = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const _ = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const h = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const D = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const Y = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const j = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const Z = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const q = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  const M = () => {
    if (v != null) {
      v.abortButtonCallback();
    }
  };
  o.$$set = O => {
    if ("type" in O) {
      t(1, e = O.type);
    }
    if ("active" in O) {
      t(0, a = O.active);
    }
    if ("progress" in O) {
      t(2, c = O.progress);
    }
    if ("options" in O) {
      t(3, v = O.options);
    }
  };
  return [a, e, c, v, d, C, b, S, y, W, f, w, _, h, D, Y, j, Z, q, M];
}
class ol extends Fe {
  constructor(r) {
    super();
    Je(this, r, zp, jp, Xe, {
      type: 1,
      active: 0,
      progress: 2,
      options: 3
    });
  }
}
function E0(o, r, t) {
  const e = o.slice();
  e[15] = r[t];
  e[17] = t;
  return e;
}
function N0(o, r, t) {
  const e = o.slice();
  e[15] = r[t];
  return e;
}
function V0(o) {
  let r;
  let t = Dt(o[1]);
  let e = [];
  for (let a = 0; a < t.length; a += 1) {
    e[a] = q0(N0(o, t, a));
  }
  return {
    c() {
      r = E("div");
      for (let a = 0; a < e.length; a += 1) {
        e[a].c();
      }
      this.h();
    },
    l(a) {
      r = N(a, "DIV", {
        class: true
      });
      var c = J(r);
      for (let v = 0; v < e.length; v += 1) {
        e[v].l(c);
      }
      c.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "completedrow svelte-ck84f7");
    },
    m(a, c) {
      L(a, r, c);
      for (let v = 0; v < e.length; v += 1) {
        if (e[v]) {
          e[v].m(r, null);
        }
      }
    },
    p(a, c) {
      if (c & 10) {
        t = Dt(a[1]);
        let v;
        for (v = 0; v < t.length; v += 1) {
          const p = N0(a, t, v);
          if (e[v]) {
            e[v].p(p, c);
          } else {
            e[v] = q0(p);
            e[v].c();
            e[v].m(r, null);
          }
        }
        for (; v < e.length; v += 1) {
          e[v].d(1);
        }
        e.length = t.length;
      }
    },
    d(a) {
      if (a) {
        R(r);
      }
      Pa(e, a);
    }
  };
}
function q0(o) {
  let r;
  let t;
  let e;
  let a;
  return {
    c() {
      r = E("div");
      t = E("img");
      a = G();
      this.h();
    },
    l(c) {
      r = N(c, "DIV", {
        class: true
      });
      var v = J(r);
      t = N(v, "IMG", {
        alt: true,
        src: true
      });
      a = H(v);
      v.forEach(R);
      this.h();
    },
    h() {
      P(t, "alt", "icon");
      if (!At(t.src, e = o[3][o[15].type])) {
        P(t, "src", e);
      }
      P(r, "class", "socialicon icocont svelte-ck84f7");
    },
    m(c, v) {
      L(c, r, v);
      V(r, t);
      V(r, a);
    },
    p(c, v) {
      if (v & 2 && !At(t.src, e = c[3][c[15].type])) {
        P(t, "src", e);
      }
    },
    d(c) {
      if (c) {
        R(r);
      }
    }
  };
}
function U0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p;
  let C = o[4][o[15].type] + "";
  let d;
  let b;
  let S;
  let y = "Complete to continue";
  let W;
  let f;
  let w = "<img alt=\"icon\" src=\"/media/icons/black/open.svg\"/>";
  let _;
  let h;
  let D = "<img alt=\"icon\" src=\"/media/icons/green/complete.svg\"/>";
  let Y;
  let j;
  function Z() {
    return o[6](o[15], o[17]);
  }
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("img");
      c = G();
      v = E("div");
      p = E("span");
      d = re(C);
      b = G();
      S = E("span");
      S.textContent = y;
      W = G();
      f = E("div");
      f.innerHTML = w;
      _ = G();
      h = E("div");
      h.innerHTML = D;
      this.h();
    },
    l(q) {
      r = N(q, "DIV", {
        class: true,
        style: true
      });
      var M = J(r);
      t = N(M, "DIV", {
        class: true
      });
      var O = J(t);
      e = N(O, "IMG", {
        alt: true,
        src: true
      });
      O.forEach(R);
      c = H(M);
      v = N(M, "DIV", {
        class: true
      });
      var X = J(v);
      p = N(X, "SPAN", {
        class: true
      });
      var Q = J(p);
      d = ae(Q, C);
      Q.forEach(R);
      b = H(X);
      S = N(X, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(S) !== "svelte-5nloze") {
        S.textContent = y;
      }
      X.forEach(R);
      W = H(M);
      f = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(f) !== "svelte-1at23rb") {
        f.innerHTML = w;
      }
      _ = H(M);
      h = N(M, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(h) !== "svelte-1lrsilc") {
        h.innerHTML = D;
      }
      M.forEach(R);
      this.h();
    },
    h() {
      P(e, "alt", "icon");
      if (!At(e.src, a = o[3][o[15].type])) {
        P(e, "src", a);
      }
      P(t, "class", "socialicon icocont svelte-ck84f7");
      P(p, "class", "title svelte-ck84f7");
      P(S, "class", "subtitle svelte-ck84f7");
      P(v, "class", "stepcontent");
      P(f, "class", "viewicon icocont svelte-ck84f7");
      P(h, "class", "completedicon icocont big svelte-ck84f7");
      P(r, "class", "stepcont animate svelte-ck84f7");
      Gt(r, "animation-delay", o[17] * 0.1 + "s");
    },
    m(q, M) {
      L(q, r, M);
      V(r, t);
      V(t, e);
      V(r, c);
      V(r, v);
      V(v, p);
      V(p, d);
      V(v, b);
      V(v, S);
      V(r, W);
      V(r, f);
      V(r, _);
      V(r, h);
      if (!Y) {
        j = se(r, "click", Z);
        Y = true;
      }
    },
    p(q, M) {
      o = q;
      if (M & 1 && !At(e.src, a = o[3][o[15].type])) {
        P(e, "src", a);
      }
      if (M & 1 && C !== (C = o[4][o[15].type] + "")) {
        ge(d, C);
      }
    },
    d(q) {
      if (q) {
        R(r);
      }
      Y = false;
      j();
    }
  };
}
function j0(o) {
  let r;
  let t = "<div class=\"icocont svelte-ck84f7\"><img alt=\"icon\" src=\"/media/icons/white/alldone.svg\"/></div> <div class=\"text\"><span class=\"title svelte-ck84f7\">All steps have been completed</span> <span class=\"subtitle svelte-ck84f7\">Well done, now you can proceed to the next page</span></div>";
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-140j2ni") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "card alldone svelte-ck84f7");
    },
    m(e, a) {
      L(e, r, a);
    },
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Gp(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  r = new ol({
    props: {
      active: o[2],
      type: "stepcompletion"
    }
  });
  let p = o[1].length > 0 && V0(o);
  let C = Dt(o[0]);
  let d = [];
  for (let S = 0; S < C.length; S += 1) {
    d[S] = U0(E0(o, C, S));
  }
  let b = o[0].length === 0 && j0();
  return {
    c() {
      he(r.$$.fragment);
      t = G();
      e = E("div");
      if (p) {
        p.c();
      }
      a = G();
      for (let S = 0; S < d.length; S += 1) {
        d[S].c();
      }
      c = G();
      if (b) {
        b.c();
      }
      this.h();
    },
    l(S) {
      me(r.$$.fragment, S);
      t = H(S);
      e = N(S, "DIV", {
        class: true
      });
      var y = J(e);
      if (p) {
        p.l(y);
      }
      a = H(y);
      for (let W = 0; W < d.length; W += 1) {
        d[W].l(y);
      }
      c = H(y);
      if (b) {
        b.l(y);
      }
      y.forEach(R);
      this.h();
    },
    h() {
      P(e, "class", "stepswrapper svelte-ck84f7");
    },
    m(S, y) {
      Ae(r, S, y);
      L(S, t, y);
      L(S, e, y);
      if (p) {
        p.m(e, null);
      }
      V(e, a);
      for (let W = 0; W < d.length; W += 1) {
        if (d[W]) {
          d[W].m(e, null);
        }
      }
      V(e, c);
      if (b) {
        b.m(e, null);
      }
      v = true;
    },
    p(S, [y]) {
      const W = {};
      if (y & 4) {
        W.active = S[2];
      }
      r.$set(W);
      if (S[1].length > 0) {
        if (p) {
          p.p(S, y);
        } else {
          p = V0(S);
          p.c();
          p.m(e, a);
        }
      } else if (p) {
        p.d(1);
        p = null;
      }
      if (y & 57) {
        C = Dt(S[0]);
        let f;
        for (f = 0; f < C.length; f += 1) {
          const w = E0(S, C, f);
          if (d[f]) {
            d[f].p(w, y);
          } else {
            d[f] = U0(w);
            d[f].c();
            d[f].m(e, c);
          }
        }
        for (; f < d.length; f += 1) {
          d[f].d(1);
        }
        d.length = C.length;
      }
      if (S[0].length === 0) {
        if (!b) {
          b = j0();
          b.c();
          b.m(e, null);
        }
      } else if (b) {
        b.d(1);
        b = null;
      }
    },
    i(S) {
      if (!v) {
        $(r.$$.fragment, S);
        v = true;
      }
    },
    o(S) {
      te(r.$$.fragment, S);
      v = false;
    },
    d(S) {
      if (S) {
        R(t);
        R(e);
      }
      We(r, S);
      if (p) {
        p.d();
      }
      Pa(d, S);
      if (b) {
        b.d();
      }
    }
  };
}
let Hp = 5000;
function Qp(o, r, t) {
  const e = tt();
  let {
    steps: a = []
  } = r;
  const c = {
    instagram: "/media/icons/social/instagram.svg",
    roblox: "/media/icons/social/roblox.svg",
    visitWebsite: "/media/icons/social/website.svg",
    twitter: "/media/icons/social/twitter.svg",
    discord: "/media/icons/social/discord.svg",
    snapchat: "/media/icons/social/snapchat.svg",
    youtubeSub: "/media/icons/social/youtube.svg",
    youtubeLike: "/media/icons/social/youtube.svg",
    youtubeSubBell: "/media/icons/social/youtube.svg",
    twitterRetweetLike: "/media/icons/social/twitter.svg",
    twitchFollow: "/media/icons/social/twitch.svg",
    youtubeLikeComment: "/media/icons/social/youtube.svg",
    odyseeSubscribe: "/media/icons/social/odysee.svg"
  };
  const v = {
    instagram: "Follow on Instagram",
    roblox: "Follow on Roblox",
    visitWebsite: "Visit Website",
    twitter: "Follow on Twitter",
    discord: "Join on Discord",
    snapchat: "Add on Snapchat",
    youtubeSub: "Subscribe on YouTube",
    youtubeLike: "Like on YouTube",
    youtubeSubBell: "Subscribe & ring Bell on YouTube",
    twitterRetweetLike: "Retweet & Like on Twitter",
    twitchFollow: "Follow on Twitch",
    youtubeLikeComment: "Like & Comment on YouTube",
    odyseeSubscribe: "Subscribe on Odysee"
  };
  let p = [];
  let C = null;
  let d = null;
  let b = null;
  let S = false;
  let y = false;
  let W = false;
  let f = () => {};
  function w() {
    if (d && b !== null && !y && !W) {
      t(2, S = true);
      const D = document.title;
      document.title = "Complete the step!";
      C = setTimeout(() => {
        t(2, S = false);
        document.title = "Go back to this tab!";
        t(1, p = [...p, a[b]]);
        t(0, a = a.filter((Y, j) => j !== b));
        y = true;
        be("Step completed", "Well done, continue to the next step", "success", 4000, true);
        f();
        setTimeout(() => {
          document.title = D;
        }, 1000);
      }, Hp);
    }
  }
  function _(D, Y) {
    window.open(D.url, "_blank");
    f = D.done;
    y = false;
    W = false;
    d = D;
    b = Y;
    if (C) {
      clearTimeout(C);
    }
    D.started();
    w();
  }
  Nr(() => {
    window.addEventListener("focus", () => {
      if (!W) {
        if (C) {
          clearTimeout(C);
          w();
        }
      }
    });
    document.querySelectorAll(".stepcont").forEach((Y, j) => {
      Y.addEventListener("animationend", () => {
        Y.classList.remove("animate");
        Y.removeAttribute("style");
      });
      setTimeout(() => {
        Y.classList.remove("animate");
        Y.removeAttribute("style");
      }, 1000 + j * 300);
    });
    if (a.length === 0) {
      e("allstepscompleted");
    }
  });
  const h = (D, Y) => _(D, Y);
  o.$$set = D => {
    if ("steps" in D) {
      t(0, a = D.steps);
    }
  };
  o.$$.update = () => {
    if (o.$$.dirty & 1 && a.length === 0) {
      e("allstepscompleted");
    }
  };
  return [a, p, S, c, v, _, h];
}
class Xp extends Fe {
  constructor(r) {
    super();
    Je(this, r, Qp, Gp, Xe, {
      steps: 0
    });
  }
}
function Zp(o) {
  let r;
  let t;
  let e;
  let a = "<img alt=\"icon\" src=\"/media/icons/black/arrow_alt.svg\"/>";
  let c;
  let v;
  let p;
  let C;
  let d;
  let b;
  let S = `<div class="icocont"><img alt="icon" src="/media/icons/black/lock.svg"/></div>
        Access Locked`;
  let y;
  let W;
  let f = "Complete the steps to continue";
  let w;
  let _;
  let h;
  let D;
  let Y;
  let j;
  let Z;
  let q;
  let M;
  _ = new Xp({
    props: {
      steps: o[1]
    }
  });
  _.$on("allstepscompleted", o[7]);
  return {
    c() {
      r = E("div");
      t = E("span");
      e = E("div");
      e.innerHTML = a;
      c = G();
      v = E("span");
      p = re(o[0]);
      d = G();
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("span");
      W.textContent = f;
      w = G();
      he(_.$$.fragment);
      h = G();
      D = E("button");
      Y = re("Go To Destination");
      this.h();
    },
    l(O) {
      r = N(O, "DIV", {
        class: true
      });
      var X = J(r);
      t = N(X, "SPAN", {
        class: true
      });
      var Q = J(t);
      e = N(Q, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(e) !== "svelte-qqlpde") {
        e.innerHTML = a;
      }
      c = H(Q);
      v = N(Q, "SPAN", {
        class: true
      });
      var F = J(v);
      p = ae(F, o[0]);
      F.forEach(R);
      Q.forEach(R);
      d = H(X);
      b = N(X, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-stuwh") {
        b.innerHTML = S;
      }
      y = H(X);
      W = N(X, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(W) !== "svelte-s5t1zu") {
        W.textContent = f;
      }
      w = H(X);
      me(_.$$.fragment, X);
      h = H(X);
      D = N(X, "BUTTON", {
        id: true,
        class: true
      });
      var oe = J(D);
      Y = ae(oe, "Go To Destination");
      oe.forEach(R);
      X.forEach(R);
      this.h();
    },
    h() {
      P(e, "class", "icocont");
      P(v, "class", "label");
      P(t, "class", C = "goback " + o[3]);
      P(b, "class", "icolabel");
      P(W, "class", "subtitle");
      D.disabled = j = !o[4];
      P(D, "id", "access-offers");
      P(D, "class", "button large accessBtn");
      P(r, "class", "lcsteps curr");
    },
    m(O, X) {
      L(O, r, X);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(v, p);
      o[10](t);
      V(r, d);
      V(r, b);
      V(r, y);
      V(r, W);
      V(r, w);
      Ae(_, r, null);
      V(r, h);
      V(r, D);
      V(D, Y);
      Z = true;
      if (!q) {
        M = [se(t, "click", o[11]), se(t, "animationend", o[6]), se(D, "click", o[8])];
        q = true;
      }
    },
    p(O, [X]) {
      if (!Z || X & 1) {
        ge(p, O[0]);
      }
      if (!Z || X & 8 && C !== (C = "goback " + O[3])) {
        P(t, "class", C);
      }
      const Q = {};
      if (X & 2) {
        Q.steps = O[1];
      }
      _.$set(Q);
      if (!Z || X & 16 && j !== (j = !O[4])) {
        D.disabled = j;
      }
    },
    i(O) {
      if (!Z) {
        $(_.$$.fragment, O);
        Z = true;
      }
    },
    o(O) {
      te(_.$$.fragment, O);
      Z = false;
    },
    d(O) {
      if (O) {
        R(r);
      }
      o[10](null);
      We(_);
      q = false;
      at(M);
    }
  };
}
function Fp(o, r, t) {
  const e = tt();
  let {
    title: a = "Roblox Script Executor"
  } = r;
  let {
    previousView: c
  } = r;
  let {
    steps: v = []
  } = r;
  let p;
  let C = c === "default" ? "anim1" : "";
  function d() {
    t(3, C = "");
  }
  let b = false;
  function S() {
    t(4, b = true);
  }
  function y() {
    if (!b) {
      console.warn("All steps are not completed yet!");
      return;
    }
    e("viewchange", "offers");
  }
  Nr(() => {
    if (!v.length) {
      t(9, c = "default");
      e("viewchange", "redirectoffers");
    }
  });
  function W(w) {
    ys[w ? "unshift" : "push"](() => {
      p = w;
      t(2, p);
    });
  }
  const f = () => e("viewchange", "default");
  o.$$set = w => {
    if ("title" in w) {
      t(0, a = w.title);
    }
    if ("previousView" in w) {
      t(9, c = w.previousView);
    }
    if ("steps" in w) {
      t(1, v = w.steps);
    }
  };
  return [a, v, p, C, b, e, d, S, y, c, W, f];
}
class Jp extends Fe {
  constructor(r) {
    super();
    Je(this, r, Fp, Zp, Xe, {
      title: 0,
      previousView: 9,
      steps: 1
    });
  }
}
function z0(o, r, t) {
  const e = o.slice();
  e[7] = r[t];
  e[9] = t;
  return e;
}
function G0(o, r, t) {
  const e = o.slice();
  e[10] = r[t];
  e[12] = t;
  return e;
}
function Kp(o) {
  let r;
  let t = "<div class=\"icocont svelte-3yab7m\"><img src=\"/media/icons/green/checkcircle.svg\" class=\"svelte-3yab7m\"/></div> <span class=\"svelte-3yab7m\">All Done!</span>";
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1qchv4") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "ocard curr alldone svelte-3yab7m");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function $p(o) {
  let r;
  let t = Dt(o[0]);
  let e = [];
  for (let a = 0; a < t.length; a += 1) {
    e[a] = X0(z0(o, t, a));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1) {
        e[a].c();
      }
      r = ie();
    },
    l(a) {
      for (let c = 0; c < e.length; c += 1) {
        e[c].l(a);
      }
      r = ie();
    },
    m(a, c) {
      for (let v = 0; v < e.length; v += 1) {
        if (e[v]) {
          e[v].m(a, c);
        }
      }
      L(a, r, c);
    },
    p(a, c) {
      if (c & 61) {
        t = Dt(a[0]);
        let v;
        for (v = 0; v < t.length; v += 1) {
          const p = z0(a, t, v);
          if (e[v]) {
            e[v].p(p, c);
          } else {
            e[v] = X0(p);
            e[v].c();
            e[v].m(r.parentNode, r);
          }
        }
        for (; v < e.length; v += 1) {
          e[v].d(1);
        }
        e.length = t.length;
      }
    },
    d(a) {
      if (a) {
        R(r);
      }
      Pa(e, a);
    }
  };
}
function H0(o) {
  let r;
  let t;
  let e;
  return {
    c() {
      r = E("img");
      this.h();
    },
    l(a) {
      r = N(a, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      this.h();
    },
    h() {
      if (!At(r.src, t = o[4][o[7].type].banner)) {
        P(r, "src", t);
      }
      P(r, "alt", e = "Banner for " + o[4][o[7].type].title);
      P(r, "class", "svelte-3yab7m");
    },
    m(a, c) {
      L(a, r, c);
    },
    p(a, c) {
      if (c & 1 && !At(r.src, t = a[4][a[7].type].banner)) {
        P(r, "src", t);
      }
      if (c & 1 && e !== (e = "Banner for " + a[4][a[7].type].title)) {
        P(r, "alt", e);
      }
    },
    d(a) {
      if (a) {
        R(r);
      }
    }
  };
}
function Q0(o) {
  let r;
  let t;
  let e = o[12] + 1 + "";
  let a;
  let c;
  let v;
  let p = o[10] + "";
  let C;
  let d;
  return {
    c() {
      r = E("div");
      t = E("span");
      a = re(e);
      c = G();
      v = E("span");
      C = re(p);
      d = G();
      this.h();
    },
    l(b) {
      r = N(b, "DIV", {
        class: true
      });
      var S = J(r);
      t = N(S, "SPAN", {
        class: true
      });
      var y = J(t);
      a = ae(y, e);
      y.forEach(R);
      c = H(S);
      v = N(S, "SPAN", {
        class: true
      });
      var W = J(v);
      C = ae(W, p);
      W.forEach(R);
      d = H(S);
      S.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "indicator svelte-3yab7m");
      P(v, "class", "instruct svelte-3yab7m");
      P(r, "class", "checkpoint svelte-3yab7m");
    },
    m(b, S) {
      L(b, r, S);
      V(r, t);
      V(t, a);
      V(r, c);
      V(r, v);
      V(v, C);
      V(r, d);
    },
    p(b, S) {
      if (S & 1 && p !== (p = b[10] + "")) {
        ge(C, p);
      }
    },
    d(b) {
      if (b) {
        R(r);
      }
    }
  };
}
function X0(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v = o[4][o[7].type].title + "";
  let p;
  let C;
  let d;
  let b;
  let S;
  let y;
  let W = "Accept";
  let f;
  let w;
  let _ = "Decline";
  let h;
  let D;
  let Y;
  let j;
  let Z = o[4][o[7].type].banner && H0(o);
  let q = Dt(o[4][o[7].type].checkpoints);
  let M = [];
  for (let O = 0; O < q.length; O += 1) {
    M[O] = Q0(G0(o, q, O));
  }
  return {
    c() {
      r = E("div");
      t = E("div");
      if (Z) {
        Z.c();
      }
      e = G();
      a = E("div");
      c = E("span");
      p = re(v);
      C = G();
      d = E("div");
      for (let O = 0; O < M.length; O += 1) {
        M[O].c();
      }
      b = G();
      S = E("div");
      y = E("button");
      y.textContent = W;
      f = G();
      w = E("button");
      w.textContent = _;
      h = G();
      this.h();
    },
    l(O) {
      r = N(O, "DIV", {
        class: true
      });
      var X = J(r);
      t = N(X, "DIV", {
        class: true
      });
      var Q = J(t);
      if (Z) {
        Z.l(Q);
      }
      Q.forEach(R);
      e = H(X);
      a = N(X, "DIV", {
        class: true
      });
      var F = J(a);
      c = N(F, "SPAN", {
        class: true
      });
      var oe = J(c);
      p = ae(oe, v);
      oe.forEach(R);
      C = H(F);
      d = N(F, "DIV", {
        class: true
      });
      var ce = J(d);
      for (let ue = 0; ue < M.length; ue += 1) {
        M[ue].l(ce);
      }
      ce.forEach(R);
      b = H(F);
      S = N(F, "DIV", {
        class: true
      });
      var ve = J(S);
      y = N(ve, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(y) !== "svelte-11fdo1w") {
        y.textContent = W;
      }
      f = H(ve);
      w = N(ve, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(w) !== "svelte-r7wzgj") {
        w.textContent = _;
      }
      ve.forEach(R);
      F.forEach(R);
      h = H(X);
      X.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "banner svelte-3yab7m");
      P(c, "class", "title svelte-3yab7m");
      P(d, "class", "tour svelte-3yab7m");
      P(y, "class", "interestedBtn button");
      P(w, "class", "skipBtn svelte-3yab7m");
      P(S, "class", "actionrow svelte-3yab7m");
      P(a, "class", "inner svelte-3yab7m");
      P(r, "class", D = "ocard " + (o[2] === o[9] ? "curr" : o[2] === (o[9] + 1) % o[0].length ? "next" : "") + " " + (o[3] ? "hideAnim" : "") + " svelte-3yab7m");
    },
    m(O, X) {
      L(O, r, X);
      V(r, t);
      if (Z) {
        Z.m(t, null);
      }
      V(r, e);
      V(r, a);
      V(a, c);
      V(c, p);
      V(a, C);
      V(a, d);
      for (let Q = 0; Q < M.length; Q += 1) {
        if (M[Q]) {
          M[Q].m(d, null);
        }
      }
      V(a, b);
      V(a, S);
      V(S, y);
      V(S, f);
      V(S, w);
      V(r, h);
      if (!Y) {
        j = [se(y, "click", function () {
          if (Ce(o[7].runCallback)) {
            o[7].runCallback.apply(this, arguments);
          }
        }), se(w, "click", o[5])];
        Y = true;
      }
    },
    p(O, X) {
      o = O;
      if (o[4][o[7].type].banner) {
        if (Z) {
          Z.p(o, X);
        } else {
          Z = H0(o);
          Z.c();
          Z.m(t, null);
        }
      } else if (Z) {
        Z.d(1);
        Z = null;
      }
      if (X & 1 && v !== (v = o[4][o[7].type].title + "")) {
        ge(p, v);
      }
      if (X & 17) {
        q = Dt(o[4][o[7].type].checkpoints);
        let Q;
        for (Q = 0; Q < q.length; Q += 1) {
          const F = G0(o, q, Q);
          if (M[Q]) {
            M[Q].p(F, X);
          } else {
            M[Q] = Q0(F);
            M[Q].c();
            M[Q].m(d, null);
          }
        }
        for (; Q < M.length; Q += 1) {
          M[Q].d(1);
        }
        M.length = q.length;
      }
      if (X & 13 && D !== (D = "ocard " + (o[2] === o[9] ? "curr" : o[2] === (o[9] + 1) % o[0].length ? "next" : "") + " " + (o[3] ? "hideAnim" : "") + " svelte-3yab7m")) {
        P(r, "class", D);
      }
    },
    d(O) {
      if (O) {
        R(r);
      }
      if (Z) {
        Z.d();
      }
      Pa(M, O);
      Y = false;
      at(j);
    }
  };
}
function ev(o) {
  let r;
  let t;
  function e(v, p) {
    if (v[1]) {
      return Kp;
    } else {
      return $p;
    }
  }
  let a = e(o);
  let c = a(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      c.c();
      this.h();
    },
    l(v) {
      r = N(v, "DIV", {
        class: true
      });
      var p = J(r);
      t = N(p, "DIV", {
        class: true
      });
      var C = J(t);
      c.l(C);
      C.forEach(R);
      p.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "owrap svelte-3yab7m");
      P(r, "class", "offercards svelte-3yab7m");
    },
    m(v, p) {
      L(v, r, p);
      V(r, t);
      c.m(t, null);
    },
    p(v, [p]) {
      if (a === (a = e(v)) && c) {
        c.p(v, p);
      } else {
        c.d(1);
        c = a(v);
        if (c) {
          c.c();
          c.m(t, null);
        }
      }
    },
    i: K,
    o: K,
    d(v) {
      if (v) {
        R(r);
      }
      c.d();
    }
  };
}
function tv(o, r, t) {
  let {
    offers: e = []
  } = r;
  let {
    isdone: a = false
  } = r;
  let c = tt();
  const v = {
    addslice: {
      title: "Install Slice Extension",
      banner: "/placeholder.jpg",
      checkpoints: ["Click \"Accept\"", "Add the extension", "Wait for confirmation"]
    },
    opera2: {
      title: "Install Opera Browser",
      banner: "/media/banners/opera.png",
      checkpoints: ["Click \"Accept\"", "Wait for finished download", "Execute the installer"]
    },
    operaGX: {
      title: "Install Opera Browser",
      banner: "/media/banners/opera_spotify.webp",
      checkpoints: ["Click \"Accept\"", "Download and install Opera", "Get 3 months free Spotify Premium"]
    },
    operaGXMobile: {
      title: "Install Opera Browser",
      banner: "/media/banners/operagx.svg",
      checkpoints: ["Click \"Accept\"", "Download from the App Store", "Start the Opera GX App"]
    },
    temuMobile: {
      title: "Sign up for InboxDollars using Google",
      banner: "/media/banners/inbox_banner.jpg",
      checkpoints: ["Click \"Accept\"", "Sign up for InboxDollars", "Start earning cash"]
    },
    sheinMobile: {
      title: "Install Coupert Extension, and register",
      banner: "/media/banners/coupert_banner.webp",
      checkpoints: ["Click \"Accept\"", "Install Coupert Extension", "Register a Coupert Account"]
    },
    quicksnap: {
      title: "Install Quicksnap Browser Extension",
      banner: "/media/banners/quicksnap.jpg",
      checkpoints: ["Click \"Accept\"", "Install from the Chrome Store", "Go back to Work.ink and continue"]
    },
    pdfeditor: {
      title: "Install PDF Editor for Google Chrome",
      banner: "/media/banners/pdfeditor.jpg",
      checkpoints: ["Click \"Accept\"", "Install from the Chrome Store", "Go back to Work.ink and continue"]
    },
    buffDesktop: {
      title: "Install Buff",
      banner: "/media/banners/buff.png",
      checkpoints: ["Click \"Accept\"", "Wait for finished download", "Execute the installer and register or proceed as guest!"]
    },
    browserExtension2: {
      title: "Install Extension",
      banner: "/media/banners/extension.jpg",
      checkpoints: ["Click \"Accept\"", "Wait for finished download", "Execute the installer"]
    },
    installer2: {
      title: "WorkInk Installer",
      banner: "/media/banners/dataentry.jpg",
      checkpoints: ["Click \"Accept\"", "Download the installer", "Choose & install an app"]
    },
    nordVpn: {
      title: "Install NordVPN",
      banner: "/media/banners/nordvpn.jpg",
      checkpoints: ["Click \"Accept\"", "Sign up for NordVPN", "Download NordVPN and Login"]
    },
    raidShadowLegends: {
      title: "Play Raid Shadow Legends",
      banner: "/media/banners/raidshadowlegends.jpg",
      checkpoints: ["Click \"Accept\"", "Download Raid Shadow Legends", "Install and play Raid Shadow Legends"]
    },
    norton: {
      title: "Install Avast Secure Browser",
      banner: "/media/banners/avast_browser_banner.png",
      checkpoints: ["Click \"Accept\"", "Download and install Avast Browser", "Run the browser"]
    },
    lumeBrowserAndroid: {
      title: "Install Lume for Android",
      banner: "/media/banners/lume.jpg",
      checkpoints: ["Click \"Accept\"", "Install Lume from the Play Store", "Enjoy an awesome browser"]
    },
    installApp: {
      title: "Install App from App Store",
      banner: "/media/banners/installapp.jpg",
      checkpoints: ["Click \"Accept\"", "Click 'Open' to visit the App Store", "Install & open the App"]
    },
    tiktok: {
      title: "Install TikTok",
      banner: "/media/banners/tiktok.jpg",
      checkpoints: ["Click \"Accept\"", "Install TikTok from the Play Store", "Run Tiktok for at least 30 seconds"]
    },
    pushNotifications: {
      title: "Allow Push Notifications",
      banner: "/media/banners/gaminglaptop.jpeg",
      checkpoints: ["Click \"Accept\"", "Click \"Allow\".", "Allow Push Notifications in your Browser."]
    },
    operaGXiOS: {
      title: "Install Opera Browser",
      banner: "/media/banners/operagx.svg",
      checkpoints: ["Click \"Accept\"", "Download from the App Store", "Start Opera GX and do a search"]
    },
    wAutoClicker: {
      title: "Install Auto Clicker",
      banner: "/media/banners/autoclicker_banner.png",
      checkpoints: ["Click \"Accept\"", "Download from the Play Store", "Run the App for 30 seconds"]
    },
    wFlashlight: {
      title: "Install Flashlight LED Notifications",
      banner: "/media/banners/flashlight_banner.png",
      checkpoints: ["Click \"Accept\"", "Download from the Play Store", "Run the App for 30 seconds"]
    },
    wPrankCallVideo: {
      title: "Install Prank Video Call",
      banner: "/media/banners/prankcall_banner.png",
      checkpoints: ["Click \"Accept\"", "Download from the Play Store", "Run the App for 30 seconds"]
    },
    wAntiTheftMyPhone: {
      title: "Install AntiTheft My Phone",
      banner: "/media/banners/antitheft_banner.png",
      checkpoints: ["Click \"Accept\"", "Download from the Play Store", "Run the App for 30 seconds"]
    },
    wFlashlightSOS: {
      title: "Install Flashlight SOS Torch Light",
      banner: "/media/banners/flashlight_banner.png",
      checkpoints: ["Click \"Accept\"", "Download from the Play Store", "Run the App for 30 seconds"]
    },
    wAmazonShopping: {
      title: "Gewinne eine Nintendo Switch",
      banner: "/media/banners/switch-ga.webp",
      checkpoints: ["Click \"Accept\"", "Regestriere dich mit deiner E-Mail-Adresse", "Gewinne eine Nintendo Switch"]
    },
    wCashEmAll: {
      title: "Install Cash 'Em All",
      banner: "/media/banners/cashemall.jpg",
      checkpoints: ["Click \"Accept\"", "Download from the Play Store", "Run the App for 30 seconds"]
    },
    wMobileLegends: {
      title: "Install Mobile Legends",
      banner: "/media/banners/mobilelegends.jpg",
      checkpoints: ["Click \"Accept\"", "Download from the Play Store", "Run the App for 30 seconds"]
    },
    wCashGiraffe: {
      title: "Install Cash Giraffe",
      banner: "/media/banners/cashgiraffe.jpg",
      checkpoints: ["Click \"Accept\"", "Download from the Play Store", "Run the App for 30 seconds"]
    },
    betterdeals: {
      title: "Install Betterdeals",
      banner: "/media/banners/betterdeals_promotional.webp",
      checkpoints: ["Click \"Accept\"", "Install the browser extension", "Enjoy better deals on over 100 million products"]
    },
    ldplayer: {
      title: "Install LDPlayer",
      banner: "/media/banners/roblox.webp",
      checkpoints: ["Click \"Accept\"", "Install LDPlayer for Roblox", "Enjoy playing Roblox for Android on your PC"]
    },
    pippit: {
      title: "Sign up to Pippit",
      banner: "/media/banners/pippit.jpeg",
      checkpoints: ["Click \"Accept\"", "Sign up to Pippit", "Continue to destination"]
    },
    onthatass: {
      title: "Order a free test package from On That Ass",
      banner: "/media/banners/onthatass_promo.png",
      checkpoints: ["Click \"Accept\"", "Order a free test package", "Enjoy your free test package"]
    },
    rivagauche: {
      title: "Install and open Riva Gauche App",
      banner: "/media/banners/rivagauche.jpg",
      checkpoints: ["Click \"Accept\"", "Install Riva Gauche from the App Store", "Open the app and enjoy"]
    },
    primevideo: {
      title: "Start a free 7 day trial at Prime Video",
      banner: "/media/banners/primevideo.jpg",
      checkpoints: ["Click \"Accept\"", "Start a free 7 day trial", "Enjoy watching movies and series"]
    },
    testerup: {
      title: "Install Testerup - Get paid for testing apps",
      banner: "/media/banners/testerup.png",
      checkpoints: ["Click \"Accept\"", "Sign up with Google", "Make money testing apps"]
    },
    lenme: {
      title: "Install Lenme - Get paid for lending money",
      banner: "/media/banners/lenme.png",
      checkpoints: ["Click \"Accept\"", "Sign up with Google", "Run the app for 30 seconds"]
    },
    xanh: {
      title: "Install Daftkings Sportsbook Casino",
      banner: "/media/banners/xanh.webp",
      checkpoints: ["Click \"Accept\"", "Install & register in app", "Run the app for 30 seconds"]
    },
    timo: {
      title: "Install and register on Timo App",
      banner: "/media/banners/timo_banner.png",
      checkpoints: ["Click \"Accept\"", "Install & register in app", "Run the app for 30 seconds"]
    },
    solitairecash: {
      title: "Install and register on Solitaire Cash App",
      banner: "/media/banners/solitairecash_banner.png",
      checkpoints: ["Click \"Accept\"", "Install & register in app", "Run the app for 30 seconds"]
    },
    gauthai: {
      title: "Sign up for Hero Wars",
      banner: "/media/banners/herowars-wide.webp",
      checkpoints: ["Click \"Accept\"", "Sign up with Google", "Complete the first level"]
    },
    externalArticles: {
      title: "Read an Article",
      banner: "/media/banners/external_read_banner2.webp",
      checkpoints: ["Click \"Accept\"", "Read the article", "Wait for redirection"]
    }
  };
  let p = 0;
  let C = false;
  async function d() {
    if (!C) {
      t(3, C = true);
      c("offerSkipped", e[p].id);
      setTimeout(() => {
        t(2, p = (p + 1) % e.length);
        if (p == 0) {
          c("offersSkipped");
        }
        t(3, C = false);
      }, 150);
    }
  }
  Nr(() => {});
  o.$$set = b => {
    if ("offers" in b) {
      t(0, e = b.offers);
    }
    if ("isdone" in b) {
      t(1, a = b.isdone);
    }
  };
  return [e, a, p, C, v, d];
}
class nv extends Fe {
  constructor(r) {
    super();
    Je(this, r, tv, ev, Xe, {
      offers: 0,
      isdone: 1
    });
  }
}
var sv = {
  webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
  mp4: "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
};
const {
  webm: rv,
  mp4: av
} = sv;
const ro = () => typeof navigator !== "undefined" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream;
const ao = () => "wakeLock" in navigator;
class iv {
  constructor() {
    this.enabled = false;
    if (ao()) {
      this._wakeLock = null;
      const r = () => {
        if (this._wakeLock !== null && document.visibilityState === "visible") {
          this.enable();
        }
      };
      document.addEventListener("visibilitychange", r);
      document.addEventListener("fullscreenchange", r);
    } else if (ro()) {
      this.noSleepTimer = null;
    } else {
      this.noSleepVideo = document.createElement("video");
      this.noSleepVideo.setAttribute("title", "No Sleep");
      this.noSleepVideo.setAttribute("playsinline", "");
      this._addSourceToVideo(this.noSleepVideo, "webm", rv);
      this._addSourceToVideo(this.noSleepVideo, "mp4", av);
      this.noSleepVideo.addEventListener("loadedmetadata", () => {
        if (this.noSleepVideo.duration <= 1) {
          this.noSleepVideo.setAttribute("loop", "");
        } else {
          this.noSleepVideo.addEventListener("timeupdate", () => {
            if (this.noSleepVideo.currentTime > 0.5) {
              this.noSleepVideo.currentTime = Math.random();
            }
          });
        }
      });
    }
  }
  _addSourceToVideo(r, t, e) {
    var a = document.createElement("source");
    a.src = e;
    a.type = `video/${t}`;
    r.appendChild(a);
  }
  get isEnabled() {
    return this.enabled;
  }
  enable() {
    if (ao()) {
      return navigator.wakeLock.request("screen").then(r => {
        this._wakeLock = r;
        this.enabled = true;
        console.log("Wake Lock active.");
        this._wakeLock.addEventListener("release", () => {
          console.log("Wake Lock released.");
        });
      }).catch(r => {
        this.enabled = false;
        console.error(`${r.name}, ${r.message}`);
        throw r;
      });
    } else if (ro()) {
      this.disable();
      console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `);
      this.noSleepTimer = window.setInterval(() => {
        if (!document.hidden) {
          window.location.href = window.location.href.split("#")[0];
          window.setTimeout(window.stop, 0);
        }
      }, 15000);
      this.enabled = true;
      return Promise.resolve();
    } else {
      return this.noSleepVideo.play().then(t => {
        this.enabled = true;
        return t;
      }).catch(t => {
        this.enabled = false;
        throw t;
      });
    }
  }
  disable() {
    if (ao()) {
      if (this._wakeLock) {
        this._wakeLock.release();
      }
      this._wakeLock = null;
    } else if (ro()) {
      if (this.noSleepTimer) {
        console.warn(`
          NoSleep now disabled for older iOS devices.
        `);
        window.clearInterval(this.noSleepTimer);
        this.noSleepTimer = null;
      }
    } else {
      this.noSleepVideo.pause();
    }
    this.enabled = false;
  }
}
var lv = iv;
const vx = _c(lv);
function ov(o) {
  let r;
  let t = "<img alt=\"icon\" src=\"/media/icons/black/checkbox_filled.svg\"/>";
  let e;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = re(`
            You're done`);
      this.h();
    },
    l(a) {
      r = N(a, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-16cehir") {
        r.innerHTML = t;
      }
      e = ae(a, `
            You're done`);
      this.h();
    },
    h() {
      P(r, "class", "icocont");
    },
    m(a, c) {
      L(a, r, c);
      L(a, e, c);
    },
    d(a) {
      if (a) {
        R(r);
        R(e);
      }
    }
  };
}
function cv(o) {
  let r;
  let t = "<img alt=\"icon\" src=\"/media/icons/black/lock.svg\"/>";
  let e;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = re(`
            Access Locked`);
      this.h();
    },
    l(a) {
      r = N(a, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-7s86xu") {
        r.innerHTML = t;
      }
      e = ae(a, `
            Access Locked`);
      this.h();
    },
    h() {
      P(r, "class", "icocont");
    },
    m(a, c) {
      L(a, r, c);
      L(a, e, c);
    },
    d(a) {
      if (a) {
        R(r);
        R(e);
      }
    }
  };
}
function xv(o) {
  let r;
  let t = "All offers completed";
  let e;
  let a;
  let c = "<a class=\"done-banner svelte-1yjmk1g\" href=\"/landing\"><img src=\"/media/workink_ad_end_card.png\" alt=\"Work.Ink Ad\" height=\"460\" class=\"svelte-1yjmk1g\"/></a>";
  return {
    c() {
      r = E("span");
      r.textContent = t;
      e = G();
      a = E("div");
      a.innerHTML = c;
      this.h();
    },
    l(v) {
      r = N(v, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-zpv1zk") {
        r.textContent = t;
      }
      e = H(v);
      a = N(v, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-18kuzsb") {
        a.innerHTML = c;
      }
      this.h();
    },
    h() {
      P(r, "class", "subtitle");
      P(a, "class", "done-banner-container svelte-1yjmk1g");
    },
    m(v, p) {
      L(v, r, p);
      L(v, e, p);
      L(v, a, p);
    },
    p: K,
    i: K,
    o: K,
    d(v) {
      if (v) {
        R(r);
        R(e);
        R(a);
      }
    }
  };
}
function uv(o) {
  let r;
  let t;
  let e = o[2] - o[3] + "";
  let a;
  let c;
  let v;
  let p;
  let C;
  let d;
  let b;
  let S;
  let y;
  S = new nv({
    props: {
      offers: o[1]
    }
  });
  S.$on("offersSkipped", o[9]);
  S.$on("offerSkipped", o[10]);
  return {
    c() {
      r = E("span");
      t = re("Complete ");
      a = re(e);
      c = re(" more offers to continue (");
      v = re(o[3]);
      p = re(" of ");
      C = re(o[2]);
      d = re(" done)");
      b = G();
      he(S.$$.fragment);
      this.h();
    },
    l(W) {
      r = N(W, "SPAN", {
        class: true
      });
      var f = J(r);
      t = ae(f, "Complete ");
      a = ae(f, e);
      c = ae(f, " more offers to continue (");
      v = ae(f, o[3]);
      p = ae(f, " of ");
      C = ae(f, o[2]);
      d = ae(f, " done)");
      f.forEach(R);
      b = H(W);
      me(S.$$.fragment, W);
      this.h();
    },
    h() {
      P(r, "class", "subtitle");
    },
    m(W, f) {
      L(W, r, f);
      V(r, t);
      V(r, a);
      V(r, c);
      V(r, v);
      V(r, p);
      V(r, C);
      V(r, d);
      L(W, b, f);
      Ae(S, W, f);
      y = true;
    },
    p(W, f) {
      if ((!y || f & 12) && e !== (e = W[2] - W[3] + "")) {
        ge(a, e);
      }
      if (!y || f & 8) {
        ge(v, W[3]);
      }
      if (!y || f & 4) {
        ge(C, W[2]);
      }
      const w = {};
      if (f & 2) {
        w.offers = W[1];
      }
      S.$set(w);
    },
    i(W) {
      if (!y) {
        $(S.$$.fragment, W);
        y = true;
      }
    },
    o(W) {
      te(S.$$.fragment, W);
      y = false;
    },
    d(W) {
      if (W) {
        R(r);
        R(b);
      }
      We(S, W);
    }
  };
}
function fv(o) {
  let r;
  let t;
  let e;
  let a = "<img alt=\"icon\" src=\"/media/icons/black/arrow_alt.svg\"/>";
  let c;
  let v;
  let p;
  let C;
  let d;
  let b;
  let S;
  let y;
  let W;
  let f;
  let w;
  let _;
  let h;
  let D;
  let Y;
  let j;
  function Z(F, oe) {
    if (F[2] != F[3]) {
      return cv;
    } else {
      return ov;
    }
  }
  let q = Z(o);
  let M = q(o);
  const O = [uv, xv];
  const X = [];
  function Q(F, oe) {
    if (F[2] != F[3]) {
      return 0;
    } else {
      return 1;
    }
  }
  y = Q(o);
  W = X[y] = O[y](o);
  return {
    c() {
      r = E("div");
      t = E("span");
      e = E("div");
      e.innerHTML = a;
      c = G();
      v = E("span");
      p = re(o[0]);
      d = G();
      b = E("div");
      M.c();
      S = G();
      W.c();
      f = G();
      w = E("button");
      _ = re("Go To Destination");
      this.h();
    },
    l(F) {
      r = N(F, "DIV", {
        class: true
      });
      var oe = J(r);
      t = N(oe, "SPAN", {
        class: true
      });
      var ce = J(t);
      e = N(ce, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(e) !== "svelte-qqlpde") {
        e.innerHTML = a;
      }
      c = H(ce);
      v = N(ce, "SPAN", {
        class: true
      });
      var ve = J(v);
      p = ae(ve, o[0]);
      ve.forEach(R);
      ce.forEach(R);
      d = H(oe);
      b = N(oe, "DIV", {
        class: true
      });
      var ue = J(b);
      M.l(ue);
      ue.forEach(R);
      S = H(oe);
      W.l(oe);
      f = H(oe);
      w = N(oe, "BUTTON", {
        id: true,
        class: true
      });
      var Me = J(w);
      _ = ae(Me, "Go To Destination");
      Me.forEach(R);
      oe.forEach(R);
      this.h();
    },
    h() {
      P(e, "class", "icocont");
      P(v, "class", "label");
      P(t, "class", C = "goback " + o[6] + " svelte-1yjmk1g");
      P(b, "class", "icolabel");
      w.disabled = h = o[2] != o[3] && !o[4];
      P(w, "id", "access-offers");
      P(w, "class", "button large accessBtn");
      P(r, "class", "lcoffers curr");
    },
    m(F, oe) {
      L(F, r, oe);
      V(r, t);
      V(t, e);
      V(t, c);
      V(t, v);
      V(v, p);
      o[13](t);
      V(r, d);
      V(r, b);
      M.m(b, null);
      V(r, S);
      X[y].m(r, null);
      V(r, f);
      V(r, w);
      V(w, _);
      D = true;
      if (!Y) {
        j = [se(t, "click", o[14]), se(t, "animationend", o[8]), se(w, "click", o[11])];
        Y = true;
      }
    },
    p(F, [oe]) {
      if (!D || oe & 1) {
        ge(p, F[0]);
      }
      if (!D || oe & 64 && C !== (C = "goback " + F[6] + " svelte-1yjmk1g")) {
        P(t, "class", C);
      }
      if (q !== (q = Z(F))) {
        M.d(1);
        M = q(F);
        if (M) {
          M.c();
          M.m(b, null);
        }
      }
      let ce = y;
      y = Q(F);
      if (y === ce) {
        X[y].p(F, oe);
      } else {
        Ne();
        te(X[ce], 1, 1, () => {
          X[ce] = null;
        });
        Ve();
        W = X[y];
        if (W) {
          W.p(F, oe);
        } else {
          W = X[y] = O[y](F);
          W.c();
        }
        $(W, 1);
        W.m(r, f);
      }
      if (!D || oe & 28 && h !== (h = F[2] != F[3] && !F[4])) {
        w.disabled = h;
      }
    },
    i(F) {
      if (!D) {
        $(W);
        D = true;
      }
    },
    o(F) {
      te(W);
      D = false;
    },
    d(F) {
      if (F) {
        R(r);
      }
      o[13](null);
      M.d();
      X[y].d();
      Y = false;
      at(j);
    }
  };
}
function dv(o, r, t) {
  const e = tt();
  let {
    title: a = "Roblox Script Executor"
  } = r;
  let {
    previousView: c
  } = r;
  let {
    offers: v = []
  } = r;
  let {
    neededOffers: p = 0
  } = r;
  let {
    completedOffers: C = 0
  } = r;
  let {
    destination: d = ""
  } = r;
  let b;
  let S = c === "default" ? "anim1" : "";
  function y() {
    t(6, S = "");
  }
  function W() {
    e("offersSkipped");
  }
  function f(Y) {
    e("offerSkipped", Y.detail);
  }
  let w = null;
  function _() {
    w = new vx();
    w.enable();
    e("viewchange", "offers");
  }
  function h(Y) {
    ys[Y ? "unshift" : "push"](() => {
      b = Y;
      t(5, b);
    });
  }
  const D = () => e("viewchange", "default");
  o.$$set = Y => {
    if ("title" in Y) {
      t(0, a = Y.title);
    }
    if ("previousView" in Y) {
      t(12, c = Y.previousView);
    }
    if ("offers" in Y) {
      t(1, v = Y.offers);
    }
    if ("neededOffers" in Y) {
      t(2, p = Y.neededOffers);
    }
    if ("completedOffers" in Y) {
      t(3, C = Y.completedOffers);
    }
    if ("destination" in Y) {
      t(4, d = Y.destination);
    }
  };
  return [a, v, p, C, d, b, S, e, y, W, f, _, c, h, D];
}
class hv extends Fe {
  constructor(r) {
    super();
    Je(this, r, dv, fv, Xe, {
      title: 0,
      previousView: 12,
      offers: 1,
      neededOffers: 2,
      completedOffers: 3,
      destination: 4
    });
  }
}
var B4;
var M4;
var D4;
var R4;
var Y4;
var O4;
const ht = class ht {};
B4 = "base64ToBuffer";
M4 = "deriveKey";
D4 = "decrypt";
R4 = "generateRandomBytes";
Y4 = "bufferToBase64";
O4 = "encrypt";
U(ht, B4, r => {
  const v = atob(r);
  const p = v.length;
  const C = new Uint8Array(p);
  for (let d = 0; d < p; d++) {
    C[d] = v.charCodeAt(d);
  }
  return C;
});
U(ht, M4, async (r, t) => {
  const v = new TextEncoder().encode(r);
  const p = {
    name: "PBKDF2"
  };
  const C = await window.crypto.subtle.importKey("raw", v, p, false, ["deriveKey"]);
  const d = {
    name: "PBKDF2",
    salt: t,
    iterations: 100000,
    hash: "SHA-256"
  };
  const b = {
    name: "AES-GCM",
    length: 256
  };
  return window.crypto.subtle.deriveKey(d, C, b, false, ["encrypt", "decrypt"]);
});
U(ht, D4, async (r, t) => {
  const v = ht.base64ToBuffer(r);
  const p = v.slice(0, 16);
  const C = v.slice(16, 28);
  const d = v.slice(28);
  const b = await ht.deriveKey(t, p);
  const S = {
    name: "AES-GCM",
    iv: C
  };
  const y = await window.crypto.subtle.decrypt(S, b, d);
  return new TextDecoder().decode(y);
});
U(ht, R4, r => {
  return window.crypto.getRandomValues(new Uint8Array(r));
});
U(ht, Y4, r => {
  let v = "";
  const p = new Uint8Array(r);
  const C = p.byteLength;
  for (let d = 0; d < C; d++) {
    v += String.fromCharCode(p[d]);
  }
  return btoa(v);
});
U(ht, O4, async (r, t) => {
  const C = ht.generateRandomBytes(16);
  const d = ht.generateRandomBytes(12);
  const b = await ht.deriveKey(t, C);
  const S = new TextEncoder().encode(r);
  const y = {
    name: "AES-GCM",
    iv: d
  };
  const W = await window.crypto.subtle.encrypt(y, b, S);
  const f = new Uint8Array(C.byteLength + d.byteLength + W.byteLength);
  f.set(C, 0);
  f.set(d, C.byteLength);
  f.set(new Uint8Array(W), C.byteLength + d.byteLength);
  return ht.bufferToBase64(f);
});
let Ao = ht;
const mv = async () => {
  try {
    const e = await fetch("https://widgets.outbrain.com/outbrain.js");
    const a = await e.text();
    return false;
  } catch {
    return true;
  }
};
const Av = async () => {
  try {
    {
      const a = {
        mode: "no-cors"
      };
      const c = await fetch("https://hotjar.com?hash=" + Math.random(), a);
      const v = await c.text();
      return false;
    }
  } catch {
    return true;
  }
};
const Wv = async () => {
  const v = ["AdHeader", "AdContainer", "AD_Top", "homead", "ad-lead"];
  const p = v.map(b => "<div id=\"" + b + "\">&nbsp;</div>").join("");
  const C = document.createElement("div");
  C.innerHTML = p;
  document.body.append(C);
  let d = false;
  v.forEach(b => {
    const W = document.getElementById(b);
    if (!W || W.offsetHeight == 0) {
      d = true;
    }
    if (W != null) {
      W.remove();
    }
  });
  return d;
};
function pv() {
  const e = () => new Promise(a => setTimeout(a, 1000 + Math.random()));
  return (async () => {
    await e();
    await e();
    await e();
    await e();
    await e();
    await e();
    await e();
    await e();
    await e();
    const v = document.getElementById("billboard-1");
    const p = v ? v.innerHTML.trim() : "";
    return p.length < 1;
  })();
}
const vv = async () => {
  return !(await Promise.all([mv(), Wv(), Av(), pv()])).every(v => v == false);
};
function Z0(o) {
  let r;
  let t;
  let e;
  let a;
  let c = `<div class="icocont"><img alt="icon" src="/media/icons/black/dyn.svg"/></div>
                    Accept Push Notifications`;
  let v;
  let p;
  let C = "Click accept in the top-left corner of your browser.";
  let d;
  let b;
  let S;
  let y = "<img src=\"/media/workink_notifications_tutorial.svg\" alt=\"How to enable browser push notifications.\" class=\"tutorial-image svelte-9kt2m9\"/> <br/> <br/> <div class=\"tutorial-text svelte-9kt2m9\">Click (1) on the Notifications icon in your browsers URL-bar, <br/>then (2) accept the notification request.</div>";
  let W;
  let f;
  let w;
  let _ = o[1] && false;
  function h(Z, q) {
    if (Z[3]) {
      return gv;
    } else {
      return bv;
    }
  }
  let D = h(o);
  let Y = D(o);
  let j = o[2] && F0();
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("div");
      a = E("span");
      a.innerHTML = c;
      v = G();
      p = E("span");
      p.textContent = C;
      d = G();
      if (_) {
        _.c();
      }
      b = G();
      S = E("div");
      S.innerHTML = y;
      W = G();
      f = E("div");
      Y.c();
      w = G();
      if (j) {
        j.c();
      }
      this.h();
    },
    l(Z) {
      r = N(Z, "DIV", {
        class: true
      });
      var q = J(r);
      t = N(q, "DIV", {
        class: true
      });
      var M = J(t);
      e = N(M, "DIV", {
        class: true
      });
      var O = J(e);
      a = N(O, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1hgcp5x") {
        a.innerHTML = c;
      }
      v = H(O);
      p = N(O, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1qs8z2z") {
        p.textContent = C;
      }
      d = H(O);
      if (_) {
        _.l(O);
      }
      O.forEach(R);
      M.forEach(R);
      b = H(q);
      S = N(q, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(S) !== "svelte-17ym1uz") {
        S.innerHTML = y;
      }
      W = H(q);
      f = N(q, "DIV", {
        class: true
      });
      var X = J(f);
      Y.l(X);
      w = H(X);
      if (j) {
        j.l(X);
      }
      X.forEach(R);
      q.forEach(R);
      this.h();
    },
    h() {
      P(a, "class", "icolabel");
      P(p, "class", "subtitle");
      P(e, "class", "defwidth");
      P(t, "class", "top");
      P(S, "class", "contents svelte-9kt2m9");
      P(f, "class", "bottom");
      P(r, "class", "articlewrapper svelte-9kt2m9");
    },
    m(Z, q) {
      L(Z, r, q);
      V(r, t);
      V(t, e);
      V(e, a);
      V(e, v);
      V(e, p);
      V(e, d);
      if (_) {
        _.m(e, null);
      }
      V(r, b);
      V(r, S);
      V(r, W);
      V(r, f);
      Y.m(f, null);
      V(f, w);
      if (j) {
        j.m(f, null);
      }
    },
    p(Z, q) {
      Z[1];
      if (_) {
        _.d(1);
        _ = null;
      }
      if (D === (D = h(Z)) && Y) {
        Y.p(Z, q);
      } else {
        Y.d(1);
        Y = D(Z);
        if (Y) {
          Y.c();
          Y.m(f, w);
        }
      }
      if (Z[2]) {
        if (!j) {
          j = F0();
          j.c();
          j.m(f, null);
        }
      } else if (j) {
        j.d(1);
        j = null;
      }
    },
    d(Z) {
      if (Z) {
        R(r);
      }
      if (_) {
        _.d();
      }
      Y.d();
      if (j) {
        j.d();
      }
    }
  };
}
function bv(o) {
  let r;
  let t;
  let e;
  let a;
  return {
    c() {
      r = E("button");
      t = re("Allow Permission");
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true
      });
      var v = J(r);
      t = ae(v, "Allow Permission");
      v.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "button big accessBtn svelte-9kt2m9");
      r.disabled = o[2];
    },
    m(c, v) {
      L(c, r, v);
      V(r, t);
      if (!e) {
        a = se(r, "click", o[5]);
        e = true;
      }
    },
    p(c, v) {
      if (v & 4) {
        r.disabled = c[2];
      }
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function gv(o) {
  let r;
  let t;
  let e;
  let a;
  return {
    c() {
      r = E("button");
      t = re("Continue");
      this.h();
    },
    l(c) {
      r = N(c, "BUTTON", {
        class: true
      });
      var v = J(r);
      t = ae(v, "Continue");
      v.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "button big accessBtn svelte-9kt2m9");
      r.disabled = o[2];
    },
    m(c, v) {
      L(c, r, v);
      V(r, t);
      if (!e) {
        a = se(r, "click", o[4]);
        e = true;
      }
    },
    p(c, v) {
      if (v & 4) {
        r.disabled = c[2];
      }
    },
    d(c) {
      if (c) {
        R(r);
      }
      e = false;
      a();
    }
  };
}
function F0(o) {
  let r;
  let t = "Loading...";
  return {
    c() {
      r = E("span");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "SPAN", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1sbw8kv") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "timeleft");
    },
    m(e, a) {
      L(e, r, a);
    },
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Cv(o) {
  let r;
  let t = o[0] && Z0(o);
  return {
    c() {
      if (t) {
        t.c();
      }
      r = ie();
    },
    l(e) {
      if (t) {
        t.l(e);
      }
      r = ie();
    },
    m(e, a) {
      if (t) {
        t.m(e, a);
      }
      L(e, r, a);
    },
    p(e, [a]) {
      if (e[0]) {
        if (t) {
          t.p(e, a);
        } else {
          t = Z0(e);
          t.c();
          t.m(r.parentNode, r);
        }
      } else if (t) {
        t.d(1);
        t = null;
      }
    },
    i: K,
    o: K,
    d(e) {
      if (e) {
        R(r);
      }
      if (t) {
        t.d(e);
      }
    }
  };
}
function kv(o, r, t) {
  let {
    active: e = false
  } = r;
  let a = false;
  let c = true;
  let v = false;
  const p = tt();
  function C() {
    p("notificationsAccepted");
  }
  function d() {
    t(3, v = true);
    t(2, c = true);
    Notification.requestPermission();
    const S = setInterval(() => {
      if (Notification.permission == "granted") {
        clearInterval(S);
        t(1, a = true);
        t(2, c = false);
      }
    }, 100);
  }
  function b(S) {
    if (!S) {
      return;
    }
    window._nAdzq = window._nAdzq || [];
    (function () {
      window._nAdzq.push(["setIds", "bd009b51ccd5c392"]);
      window._nAdzq.push(["setTransactionId", "lfs_" + Date.now()]);
      window._nAdzq.push(["setTr"]);
      let W = "https://notifpush.com/scripts/";
      let f = document.createElement("script");
      f.type = "text/javascript";
      f.defer = true;
      f.async = true;
      f.src = W + "nadz-sdk.js";
      document.body.appendChild(f);
    })();
    const y = setInterval(() => {
      if (window.NADZ) {
        t(2, c = false);
        clearInterval(y);
      }
    }, 100);
  }
  o.$$set = S => {
    if ("active" in S) {
      t(0, e = S.active);
    }
  };
  o.$$.update = () => {
    if (o.$$.dirty & 1) {
      b(e);
    }
  };
  return [e, a, c, v, C, d];
}
class wv extends Fe {
  constructor(r) {
    super();
    Je(this, r, kv, Cv, Xe, {
      active: 0
    });
  }
}
function J0(o) {
  let r;
  let t;
  let e = "<div class=\"max-w-[1176px] mx-auto px-6 lg:px-8\"><div class=\"flex items-center justify-between py-6\"><div class=\"flex items-center space-x-3\"><div class=\"w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center\"><svg class=\"w-5 h-5 text-blue-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"></path></svg></div> <div><h1 class=\"text-lg font-semibold text-gray-900\"><a href=\"https://safebrowsing.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"hover:text-blue-600 transition-colors\">Google Safe Browsing</a></h1> <p class=\"text-sm text-gray-600\">URL Security Verification</p></div></div> <div class=\"flex items-center space-x-2 text-sm text-gray-500\"><svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z\"></path></svg> <span>Secured by Google</span></div></div></div>";
  let a;
  let c;
  let v;
  let p;
  let C = "<h3 class=\"text-sm font-semibold text-blue-900 mb-2\">Why we do this?</h3> <p class=\"text-xs text-blue-800 leading-relaxed\">We use Google&#39;s Safe Browsing API to scan all outbound links for malware, phishing attempts, and other security threats. This quick security check helps protect you and ensures a safe browsing experience.</p>";
  let d;
  let b;
  let S = "<div class=\"bg-white border border-gray-200 rounded-xl p-4 text-center\"><div class=\"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2\"><svg class=\"w-5 h-5 text-green-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"></path></svg></div> <h4 class=\"text-sm font-semibold text-gray-900 mb-1\">Malware Detection</h4> <p class=\"text-xs text-gray-600\">Real-time protection against malicious software</p></div> <div class=\"bg-white border border-gray-200 rounded-xl p-4 text-center\"><div class=\"w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2\"><svg class=\"w-5 h-5 text-blue-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z\"></path></svg></div> <h4 class=\"text-sm font-semibold text-gray-900 mb-1\">Phishing Prevention</h4> <p class=\"text-xs text-gray-600\">Advanced detection of fraudulent websites</p></div> <div class=\"bg-white border border-gray-200 rounded-xl p-4 text-center\"><div class=\"w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2\"><svg class=\"w-5 h-5 text-purple-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z\"></path></svg></div> <h4 class=\"text-sm font-semibold text-gray-900 mb-1\">SSL Verification</h4> <p class=\"text-xs text-gray-600\">Certificate validation and secure connection check</p></div>";
  let y;
  let W;
  let f;
  let w = "<ins class=\"adsbygoogle\" style=\"display:block\" data-ad-format=\"autorelaxed\" data-ad-client=\"ca-pub-3494091072626590\" data-ad-slot=\"7571620214\"></ins>";
  let _;
  let h;
  let D;
  let Y;
  let j;
  let Z = (o[2] || o[3]) && K0(o);
  function q(X, Q) {
    if (X[6]) {
      return Sv;
    } else if (X[4]) {
      return Iv;
    } else {
      return _v;
    }
  }
  let M = q(o);
  let O = M(o);
  return {
    c() {
      r = E("div");
      t = E("div");
      t.innerHTML = e;
      a = G();
      c = E("div");
      if (Z) {
        Z.c();
      }
      v = G();
      p = E("div");
      p.innerHTML = C;
      d = G();
      b = E("div");
      b.innerHTML = S;
      y = G();
      W = E("div");
      f = E("div");
      f.innerHTML = w;
      _ = G();
      h = E("div");
      D = E("div");
      O.c();
      Y = G();
      j = E("div");
      this.h();
    },
    l(X) {
      r = N(X, "DIV", {
        class: true
      });
      var Q = J(r);
      t = N(Q, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(t) !== "svelte-1vnwm2m") {
        t.innerHTML = e;
      }
      a = H(Q);
      c = N(Q, "DIV", {
        class: true
      });
      var F = J(c);
      if (Z) {
        Z.l(F);
      }
      v = H(F);
      p = N(F, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-92u4e8") {
        p.innerHTML = C;
      }
      d = H(F);
      b = N(F, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(b) !== "svelte-1rzq1dn") {
        b.innerHTML = S;
      }
      y = H(F);
      W = N(F, "DIV", {
        class: true
      });
      var oe = J(W);
      f = N(oe, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(f) !== "svelte-3spvlz") {
        f.innerHTML = w;
      }
      oe.forEach(R);
      F.forEach(R);
      _ = H(Q);
      h = N(Q, "DIV", {
        class: true
      });
      var ce = J(h);
      D = N(ce, "DIV", {
        class: true
      });
      var ve = J(D);
      O.l(ve);
      ve.forEach(R);
      ce.forEach(R);
      Y = H(Q);
      j = N(Q, "DIV", {
        class: true
      });
      J(j).forEach(R);
      Q.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "bg-white border-b border-gray-100");
      P(p, "class", "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto");
      P(b, "class", "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8");
      P(f, "class", "w-full min-h-[320px] block");
      P(W, "class", "bg-white border border-gray-200 rounded-2xl shadow-sm mb-8");
      P(c, "class", "max-w-[1176px] mx-auto px-6 lg:px-8 py-8 lg:py-12");
      P(D, "class", "max-w-[1176px] mx-auto px-6 lg:px-8 py-6");
      P(h, "class", "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200");
      P(j, "class", "h-28");
      P(r, "class", "fixed top-16 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto");
    },
    m(X, Q) {
      L(X, r, Q);
      V(r, t);
      V(r, a);
      V(r, c);
      if (Z) {
        Z.m(c, null);
      }
      V(c, v);
      V(c, p);
      V(c, d);
      V(c, b);
      V(c, y);
      V(c, W);
      V(W, f);
      o[12](f);
      V(r, _);
      V(r, h);
      V(h, D);
      O.m(D, null);
      V(r, Y);
      V(r, j);
    },
    p(X, Q) {
      if (X[2] || X[3]) {
        if (Z) {
          Z.p(X, Q);
        } else {
          Z = K0(X);
          Z.c();
          Z.m(c, v);
        }
      } else if (Z) {
        Z.d(1);
        Z = null;
      }
      if (M === (M = q(X)) && O) {
        O.p(X, Q);
      } else {
        O.d(1);
        O = M(X);
        if (O) {
          O.c();
          O.m(D, null);
        }
      }
    },
    d(X) {
      if (X) {
        R(r);
      }
      if (Z) {
        Z.d();
      }
      o[12](null);
      O.d();
    }
  };
}
function K0(o) {
  let r;
  let t;
  let e = o[2] && $0(o);
  let a = o[3] && ec(o);
  return {
    c() {
      r = E("div");
      if (e) {
        e.c();
      }
      t = G();
      if (a) {
        a.c();
      }
      this.h();
    },
    l(c) {
      r = N(c, "DIV", {
        class: true
      });
      var v = J(r);
      if (e) {
        e.l(v);
      }
      t = H(v);
      if (a) {
        a.l(v);
      }
      v.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "text-center py-4 mb-6");
    },
    m(c, v) {
      L(c, r, v);
      if (e) {
        e.m(r, null);
      }
      V(r, t);
      if (a) {
        a.m(r, null);
      }
    },
    p(c, v) {
      if (c[2]) {
        if (e) {
          e.p(c, v);
        } else {
          e = $0(c);
          e.c();
          e.m(r, t);
        }
      } else if (e) {
        e.d(1);
        e = null;
      }
      if (c[3]) {
        if (a) {
          a.p(c, v);
        } else {
          a = ec(c);
          a.c();
          a.m(r, null);
        }
      } else if (a) {
        a.d(1);
        a = null;
      }
    },
    d(c) {
      if (c) {
        R(r);
      }
      if (e) {
        e.d();
      }
      if (a) {
        a.d();
      }
    }
  };
}
function $0(o) {
  let r;
  let t;
  return {
    c() {
      r = E("h2");
      t = re(o[2]);
      this.h();
    },
    l(e) {
      r = N(e, "H2", {
        class: true
      });
      var a = J(r);
      t = ae(a, o[2]);
      a.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "text-lg font-semibold text-gray-900 mb-3 leading-snug");
    },
    m(e, a) {
      L(e, r, a);
      V(r, t);
    },
    p(e, a) {
      if (a & 4) {
        ge(t, e[2]);
      }
    },
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function ec(o) {
  let r;
  let t = (o[8] ? o[3] : nc(o[3])) + "";
  let e;
  let a;
  let c = o[3].length > _l && tc(o);
  return {
    c() {
      r = E("div");
      e = re(t);
      a = G();
      if (c) {
        c.c();
      }
      this.h();
    },
    l(v) {
      r = N(v, "DIV", {
        class: true
      });
      var p = J(r);
      e = ae(p, t);
      a = H(p);
      if (c) {
        c.l(p);
      }
      p.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "text-sm text-gray-600 leading-relaxed whitespace-pre-line max-w-2xl mx-auto");
    },
    m(v, p) {
      L(v, r, p);
      V(r, e);
      V(r, a);
      if (c) {
        c.m(r, null);
      }
    },
    p(v, p) {
      if (p & 264 && t !== (t = (v[8] ? v[3] : nc(v[3])) + "")) {
        ge(e, t);
      }
      if (v[3].length > _l) {
        if (c) {
          c.p(v, p);
        } else {
          c = tc(v);
          c.c();
          c.m(r, null);
        }
      } else if (c) {
        c.d(1);
        c = null;
      }
    },
    d(v) {
      if (v) {
        R(r);
      }
      if (c) {
        c.d();
      }
    }
  };
}
function tc(o) {
  let r;
  let t = o[8] ? "Read less" : "Read more";
  let e;
  let a;
  let c;
  return {
    c() {
      r = E("button");
      e = re(t);
      this.h();
    },
    l(v) {
      r = N(v, "BUTTON", {
        class: true
      });
      var p = J(r);
      e = ae(p, t);
      p.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "ml-2 text-blue-600 hover:text-blue-700 font-medium transition-colors");
    },
    m(v, p) {
      L(v, r, p);
      V(r, e);
      if (!a) {
        c = se(r, "click", o[9]);
        a = true;
      }
    },
    p(v, p) {
      if (p & 256 && t !== (t = v[8] ? "Read less" : "Read more")) {
        ge(e, t);
      }
    },
    d(v) {
      if (v) {
        R(r);
      }
      a = false;
      c();
    }
  };
}
function _v(o) {
  let r;
  let t = "<p class=\"text-sm text-gray-600 mb-4\">Please wait while we complete the security verification</p> <div class=\"text-xs text-gray-500\">Powered by <a href=\"https://safebrowsing.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"hover:text-blue-600 transition-colors\">Google Safe Browsing API</a></div>";
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-vokk3z") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "text-center");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Iv(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v = "<div class=\"text-xs text-gray-500\">Please wait while we complete the security verification. Powered by <a href=\"https://safebrowsing.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"hover:text-blue-600 transition-colors\">Google Safe Browsing API</a></div>";
  return {
    c() {
      r = E("div");
      t = E("div");
      e = E("div");
      a = G();
      c = E("div");
      c.innerHTML = v;
      this.h();
    },
    l(p) {
      r = N(p, "DIV", {
        class: true
      });
      var C = J(r);
      t = N(C, "DIV", {
        class: true
      });
      var d = J(t);
      e = N(d, "DIV", {
        class: true,
        style: true
      });
      J(e).forEach(R);
      d.forEach(R);
      C.forEach(R);
      a = H(p);
      c = N(p, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(c) !== "svelte-1uprii3") {
        c.innerHTML = v;
      }
      this.h();
    },
    h() {
      P(e, "class", "h-1 bg-gray-400 rounded-full transition-all duration-1000 ease-out");
      Gt(e, "width", o[7] / o[1] * 100 + "%");
      P(t, "class", "w-full bg-gray-100 rounded-full h-1");
      P(r, "class", "mb-3");
      P(c, "class", "text-center");
    },
    m(p, C) {
      L(p, r, C);
      V(r, t);
      V(t, e);
      L(p, a, C);
      L(p, c, C);
    },
    p(p, C) {
      if (C & 130) {
        Gt(e, "width", p[7] / p[1] * 100 + "%");
      }
    },
    d(p) {
      if (p) {
        R(r);
        R(a);
        R(c);
      }
    }
  };
}
function Sv(o) {
  let r;
  let t = "<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\"></path></svg> <span class=\"font-medium\">Security verification complete</span>";
  let e;
  let a;
  let c = "<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\"></path></svg> <span>Proceed to Safe Destination</span>";
  let v;
  let p;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      e = G();
      a = E("button");
      a.innerHTML = c;
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-7ib2zf") {
        r.innerHTML = t;
      }
      e = H(C);
      a = N(C, "BUTTON", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1vfaj02") {
        a.innerHTML = c;
      }
      this.h();
    },
    h() {
      P(r, "class", "flex items-center justify-center space-x-2 mb-4 text-green-600");
      P(a, "class", "w-full h-14 px-6 text-lg font-semibold rounded-full transition-all duration-200 flex items-center justify-center space-x-3 bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl");
    },
    m(C, d) {
      L(C, r, d);
      L(C, e, d);
      L(C, a, d);
      if (!v) {
        p = se(a, "click", o[10]);
        v = true;
      }
    },
    p: K,
    d(C) {
      if (C) {
        R(r);
        R(e);
        R(a);
      }
      v = false;
      p();
    }
  };
}
function yv(o) {
  let r;
  let t = o[0] && J0(o);
  return {
    c() {
      if (t) {
        t.c();
      }
      r = ie();
    },
    l(e) {
      if (t) {
        t.l(e);
      }
      r = ie();
    },
    m(e, a) {
      if (t) {
        t.m(e, a);
      }
      L(e, r, a);
    },
    p(e, [a]) {
      if (e[0]) {
        if (t) {
          t.p(e, a);
        } else {
          t = J0(e);
          t.c();
          t.m(r.parentNode, r);
        }
      } else if (t) {
        t.d(1);
        t = null;
      }
    },
    i: K,
    o: K,
    d(e) {
      if (e) {
        R(r);
      }
      if (t) {
        t.d(e);
      }
    }
  };
}
const _l = 150;
function nc(o) {
  if (!o || o.length <= _l) {
    return o;
  } else {
    return o.substring(0, _l) + "...";
  }
}
function Tv(o, r, t) {
  let {
    active: e = false
  } = r;
  let {
    timeRequired: a = 15
  } = r;
  let {
    title: c = ""
  } = r;
  let {
    description: v = ""
  } = r;
  let p = false;
  let C = true;
  let d = 0;
  let b = false;
  let S = false;
  let y;
  let W = null;
  let f = false;
  const w = tt();
  function _() {
    t(8, f = !f);
  }
  function h() {
    w("articlesdone");
  }
  function D() {
    if (!b && lo) {
      t(4, b = true);
      t(7, d = 0);
      C = true;
      t(6, p = false);
      W = setInterval(() => {
        if (document.visibilityState === "visible" && !p) {
          t(7, d += 1);
          if (d >= a) {
            j();
          }
        }
      }, 1000);
    }
  }
  function Y() {}
  function j() {
    t(6, p = true);
    C = false;
    t(7, d = a);
    if (W) {
      clearInterval(W);
      W = null;
    }
    be("Security Check Complete", "URL verified as safe by Google Safe Browsing", "success", 4000);
  }
  function Z() {
    if (C) {
      be("Security Check in Progress", "Please wait for the security scan to complete", "alert", 4000);
      return;
    }
    if (p) {
      h();
      return;
    }
  }
  function q() {}
  Nr(() => {
    setTimeout(() => {
      try {
        console.log("Load");
        (adsbygoogle = window.adsbygoogle || []).push({});
        setTimeout(() => {
          try {
            (adsbygoogle = window.adsbygoogle || []).push({});
          } catch (O) {
            console.error("Error initializing static AdSense ad:", O);
          }
        }, 1000);
      } catch (O) {
        console.error("Error initializing Google AdSense:", O);
      }
    }, 700);
    if (e) {
      D();
    }
    document.addEventListener("visibilitychange", Y);
    return () => {
      document.removeEventListener("visibilitychange", Y);
      if (W) {
        clearInterval(W);
        W = null;
      }
    };
  });
  function M(O) {
    ys[O ? "unshift" : "push"](() => {
      y = O;
      t(5, y);
    });
  }
  o.$$set = O => {
    if ("active" in O) {
      t(0, e = O.active);
    }
    if ("timeRequired" in O) {
      t(1, a = O.timeRequired);
    }
    if ("title" in O) {
      t(2, c = O.title);
    }
    if ("description" in O) {
      t(3, v = O.description);
    }
  };
  o.$$.update = () => {
    if (o.$$.dirty & 2049 && e && lo) {
      setTimeout(q, 300);
      setTimeout(() => {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (O) {
          console.error("Error pushing static AdSense ad:", O);
        }
      }, 500);
    }
    if (o.$$.dirty & 32 && y) {
      Wo().then(() => {
        (adsbygoogle = window.adsbygoogle || []).push({});
      });
    }
    if (o.$$.dirty & 17 && e && !b) {
      D();
    }
  };
  return [e, a, c, v, b, y, p, d, f, _, Z, S, M];
}
class Bv extends Fe {
  constructor(r) {
    super();
    Je(this, r, Tv, yv, Xe, {
      active: 0,
      timeRequired: 1,
      title: 2,
      description: 3
    });
  }
}
const {
  document: an
} = Px;
function Mv(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v = `.video-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            overflow: hidden;
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }`;
  return {
    c() {
      r = E("div");
      t = E("iframe");
      a = G();
      c = E("style");
      c.textContent = v;
      this.h();
    },
    l(p) {
      r = N(p, "DIV", {
        class: true
      });
      var C = J(r);
      t = N(C, "IFRAME", {
        id: true,
        title: true,
        src: true,
        frameborder: true
      });
      J(t).forEach(R);
      C.forEach(R);
      a = H(p);
      c = N(p, "STYLE", {
        "data-svelte-h": true
      });
      if (z(c) !== "svelte-1ye4enw") {
        c.textContent = v;
      }
      this.h();
    },
    h() {
      P(t, "id", "player");
      P(t, "title", "video");
      if (!At(t.src, e = "https://www.youtube.com/embed/" + o[0].serverData.linkMeta.youtube_video_id + "?enablejsapi=1&origin=https://work.ink")) {
        P(t, "src", e);
      }
      P(t, "frameborder", "0");
      P(r, "class", "video-container");
    },
    m(p, C) {
      L(p, r, C);
      V(r, t);
      L(p, a, C);
      L(p, c, C);
    },
    p(p, C) {
      if (C[0] & 1 && !At(t.src, e = "https://www.youtube.com/embed/" + p[0].serverData.linkMeta.youtube_video_id + "?enablejsapi=1&origin=https://work.ink")) {
        P(t, "src", e);
      }
    },
    d(p) {
      if (p) {
        R(r);
        R(a);
        R(c);
      }
    }
  };
}
function Dv(o) {
  let r;
  let t;
  let e;
  let a;
  let c = `<div class="absolute top-0 w-40 left-[-243px] pointer-events-auto"><div id="skyscraper-ad-1" class="hidden lg:block" style="width: 160px; height: 600px;"></div> <script>googletag.cmd.push(function () {
                        googletag.display("skyscraper-ad-1");
                    });<\/script></div>`;
  let v;
  let p;
  let C = `<div class="gpt-billboard-container svelte-1ao8oou"><div id="billboard-1" class="svelte-1ao8oou"></div></div> <script>googletag.cmd.push(function () {
                    googletag.display("billboard-1");
                });<\/script>`;
  let d;
  let b;
  let S;
  let y;
  let W;
  let f;
  let w;
  let _;
  let h = `<div class="gpt-billboard-container svelte-1ao8oou"><div id="billboard-2" class="svelte-1ao8oou"></div></div> <script>googletag.cmd.push(function () {
                    googletag.display("billboard-2");
                });<\/script>`;
  let D;
  let Y;
  let j;
  let Z = `<div class="gpt-billboard-container svelte-1ao8oou"><div id="billboard-3" class="svelte-1ao8oou"></div></div> <script>googletag.cmd.push(function () {
                    googletag.display("billboard-3");
                });<\/script>`;
  let q;
  let M;
  let O;
  let X = o[47] && sc();
  let Q = o[17] && rc();
  const F = [Lv, Ov, Yv];
  const oe = [];
  function ce(_e, Se) {
    if (_e[12] === "default") {
      return 0;
    } else if (_e[12] === "steps") {
      return 1;
    } else if (_e[12] === "offers") {
      return 2;
    } else {
      return -1;
    }
  }
  if (~(y = ce(o))) {
    W = oe[y] = F[y](o);
  }
  let ve = o[12] === "default" && o[14] && ic(o);
  let ue = o[12] === "default" && lc(o);
  let Me = o[12] === "default" && o[14] && dc(o);
  let Ye = o[12] === "default" && o[14] && hc();
  return {
    c() {
      if (X) {
        X.c();
      }
      r = G();
      if (Q) {
        Q.c();
      }
      t = G();
      e = E("main");
      a = E("div");
      a.innerHTML = c;
      v = G();
      p = E("div");
      p.innerHTML = C;
      d = G();
      b = E("div");
      S = E("div");
      if (W) {
        W.c();
      }
      f = G();
      if (ve) {
        ve.c();
      }
      w = G();
      _ = E("div");
      _.innerHTML = h;
      D = G();
      if (ue) {
        ue.c();
      }
      Y = G();
      j = E("div");
      j.innerHTML = Z;
      q = G();
      if (Me) {
        Me.c();
      }
      M = G();
      if (Ye) {
        Ye.c();
      }
      this.h();
    },
    l(_e) {
      if (X) {
        X.l(_e);
      }
      r = H(_e);
      if (Q) {
        Q.l(_e);
      }
      t = H(_e);
      e = N(_e, "MAIN", {
        class: true
      });
      var Se = J(e);
      a = N(Se, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-1tpmghc") {
        a.innerHTML = c;
      }
      v = H(Se);
      p = N(Se, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1tsd7a0") {
        p.innerHTML = C;
      }
      d = H(Se);
      b = N(Se, "DIV", {
        class: true
      });
      var xe = J(b);
      S = N(xe, "DIV", {
        class: true
      });
      var ye = J(S);
      if (W) {
        W.l(ye);
      }
      ye.forEach(R);
      f = H(xe);
      if (ve) {
        ve.l(xe);
      }
      xe.forEach(R);
      w = H(Se);
      _ = N(Se, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(_) !== "svelte-cvjxbt") {
        _.innerHTML = h;
      }
      D = H(Se);
      if (ue) {
        ue.l(Se);
      }
      Y = H(Se);
      j = N(Se, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(j) !== "svelte-vosuyl") {
        j.innerHTML = Z;
      }
      q = H(Se);
      if (Me) {
        Me.l(Se);
      }
      M = H(Se);
      if (Ye) {
        Ye.l(Se);
      }
      Se.forEach(R);
      this.h();
    },
    h() {
      P(a, "class", "sticky top-32 left-0 right-0 mx-auto pointer-events-none max-w-[1176px] w-full px-6 relative h-0 z-10");
      P(p, "class", "w-full flex justify-center pt-32 pb-8");
      P(S, "class", "max-w-[520px] mr-16 flex-shrink-0 linkcard svelte-1ao8oou");
      P(b, "class", "w-full flex justify-center lg:justify-between pt-8 mb-4 relative max-w-[1076px] mx-auto px-6 linkview");
      P(_, "class", "w-full flex justify-center pt-8 pb-8");
      P(j, "class", "w-full flex justify-center pt-8 pb-8");
      P(e, "class", "h-full w-full overflow-y-auto linkui");
    },
    m(_e, Se) {
      if (X) {
        X.m(_e, Se);
      }
      L(_e, r, Se);
      if (Q) {
        Q.m(_e, Se);
      }
      L(_e, t, Se);
      L(_e, e, Se);
      V(e, a);
      V(e, v);
      V(e, p);
      V(e, d);
      V(e, b);
      V(b, S);
      if (~y) {
        oe[y].m(S, null);
      }
      V(b, f);
      if (ve) {
        ve.m(b, null);
      }
      V(e, w);
      V(e, _);
      V(e, D);
      if (ue) {
        ue.m(e, null);
      }
      V(e, Y);
      V(e, j);
      V(e, q);
      if (Me) {
        Me.m(e, null);
      }
      V(e, M);
      if (Ye) {
        Ye.m(e, null);
      }
      o[74](e);
      O = true;
    },
    p(_e, Se) {
      if (_e[47]) {
        if (X) {
          if (Se[1] & 65536) {
            $(X, 1);
          }
        } else {
          X = sc();
          X.c();
          $(X, 1);
          X.m(r.parentNode, r);
        }
      } else if (X) {
        Ne();
        te(X, 1, 1, () => {
          X = null;
        });
        Ve();
      }
      if (_e[17]) {
        if (Q) {
          if (Se[0] & 131072) {
            $(Q, 1);
          }
        } else {
          Q = rc();
          Q.c();
          $(Q, 1);
          Q.m(t.parentNode, t);
        }
      } else if (Q) {
        Ne();
        te(Q, 1, 1, () => {
          Q = null;
        });
        Ve();
      }
      let xe = y;
      y = ce(_e);
      if (y === xe) {
        if (~y) {
          oe[y].p(_e, Se);
        }
      } else {
        if (W) {
          Ne();
          te(oe[xe], 1, 1, () => {
            oe[xe] = null;
          });
          Ve();
        }
        if (~y) {
          W = oe[y];
          if (W) {
            W.p(_e, Se);
          } else {
            W = oe[y] = F[y](_e);
            W.c();
          }
          $(W, 1);
          W.m(S, null);
        } else {
          W = null;
        }
      }
      if (_e[12] === "default" && _e[14]) {
        if (ve) {
          ve.p(_e, Se);
          if (Se[0] & 20480) {
            $(ve, 1);
          }
        } else {
          ve = ic(_e);
          ve.c();
          $(ve, 1);
          ve.m(b, null);
        }
      } else if (ve) {
        Ne();
        te(ve, 1, 1, () => {
          ve = null;
        });
        Ve();
      }
      if (_e[12] === "default") {
        if (ue) {
          ue.p(_e, Se);
          if (Se[0] & 4096) {
            $(ue, 1);
          }
        } else {
          ue = lc(_e);
          ue.c();
          $(ue, 1);
          ue.m(e, Y);
        }
      } else if (ue) {
        Ne();
        te(ue, 1, 1, () => {
          ue = null;
        });
        Ve();
      }
      if (_e[12] === "default" && _e[14]) {
        if (Me) {
          Me.p(_e, Se);
          if (Se[0] & 20480) {
            $(Me, 1);
          }
        } else {
          Me = dc(_e);
          Me.c();
          $(Me, 1);
          Me.m(e, M);
        }
      } else if (Me) {
        Ne();
        te(Me, 1, 1, () => {
          Me = null;
        });
        Ve();
      }
      if (_e[12] === "default" && _e[14]) {
        if (Ye) {
          if (Se[0] & 20480) {
            $(Ye, 1);
          }
        } else {
          Ye = hc();
          Ye.c();
          $(Ye, 1);
          Ye.m(e, null);
        }
      } else if (Ye) {
        Ne();
        te(Ye, 1, 1, () => {
          Ye = null;
        });
        Ve();
      }
    },
    i(_e) {
      if (!O) {
        $(X);
        $(Q);
        $(W);
        $(ve);
        $(ue);
        $(Me);
        $(Ye);
        O = true;
      }
    },
    o(_e) {
      te(X);
      te(Q);
      te(W);
      te(ve);
      te(ue);
      te(Me);
      te(Ye);
      O = false;
    },
    d(_e) {
      if (_e) {
        R(r);
        R(t);
        R(e);
      }
      if (X) {
        X.d(_e);
      }
      if (Q) {
        Q.d(_e);
      }
      if (~y) {
        oe[y].d();
      }
      if (ve) {
        ve.d();
      }
      if (ue) {
        ue.d();
      }
      if (Me) {
        Me.d();
      }
      if (Ye) {
        Ye.d();
      }
      o[74](null);
    }
  };
}
function Rv(o) {
  let r;
  let t;
  r = new ol({
    props: {
      active: true,
      type: "adblockdetected"
    }
  });
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p: K,
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function sc(o) {
  let r;
  let t;
  r = new ol({
    props: {
      active: false,
      type: "connectionlost"
    }
  });
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function rc(o) {
  let r;
  let t;
  r = new ol({
    props: {
      active: true,
      type: "desktoponly"
    }
  });
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function Yv(o) {
  let r;
  let t;
  let e = o[29] && ac(o);
  return {
    c() {
      if (e) {
        e.c();
      }
      r = ie();
    },
    l(a) {
      if (e) {
        e.l(a);
      }
      r = ie();
    },
    m(a, c) {
      if (e) {
        e.m(a, c);
      }
      L(a, r, c);
      t = true;
    },
    p(a, c) {
      if (a[29]) {
        if (e) {
          e.p(a, c);
          if (c[0] & 536870912) {
            $(e, 1);
          }
        } else {
          e = ac(a);
          e.c();
          $(e, 1);
          e.m(r.parentNode, r);
        }
      } else if (e) {
        Ne();
        te(e, 1, 1, () => {
          e = null;
        });
        Ve();
      }
    },
    i(a) {
      if (!t) {
        $(e);
        t = true;
      }
    },
    o(a) {
      te(e);
      t = false;
    },
    d(a) {
      if (a) {
        R(r);
      }
      if (e) {
        e.d(a);
      }
    }
  };
}
function Ov(o) {
  let r;
  let t;
  let e;
  function a(v) {
    o[69](v);
  }
  let c = {
    title: o[0].serverData.linkMeta.title,
    steps: o[2]
  };
  if (o[13] !== undefined) {
    c.previousView = o[13];
  }
  r = new Jp({
    props: c
  });
  ys.push(() => Lx(r, "previousView", a));
  r.$on("viewchange", o[52]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(v) {
      me(r.$$.fragment, v);
    },
    m(v, p) {
      Ae(r, v, p);
      e = true;
    },
    p(v, p) {
      const C = {};
      if (p[0] & 1) {
        C.title = v[0].serverData.linkMeta.title;
      }
      if (p[0] & 4) {
        C.steps = v[2];
      }
      if (!t && p[0] & 8192) {
        t = true;
        C.previousView = v[13];
        Ox(() => t = false);
      }
      r.$set(C);
    },
    i(v) {
      if (!e) {
        $(r.$$.fragment, v);
        e = true;
      }
    },
    o(v) {
      te(r.$$.fragment, v);
      e = false;
    },
    d(v) {
      We(r, v);
    }
  };
}
function Lv(o) {
  let r;
  let t;
  r = new lm({
    props: {
      preload: Gv,
      views: o[0].serverData.linkMeta.impressions,
      createdAt: o[11],
      data: o[0],
      ogdescription: o[7],
      videoid: o[10],
      description: Il((o[0].serverData.linkMeta.link_description + (o[0].serverData.linkMeta.ai_text_one ? `
${o[0].serverData.linkMeta.ai_text_one}` : "") + (o[0].serverData.linkMeta.ai_text_two ? `

${o[0].serverData.linkMeta.ai_text_two}` : "")).replace(/^\s*\n+/g, "")),
      title: o[0].serverData.linkMeta.title,
      thumbnail: o[9],
      previousView: o[13],
      toggleFullscreen: o[53],
      ready: o[41],
      skipSocials: o[42],
      tags: o[49],
      premiumOnly: o[50],
      hideTurnstile: o[30],
      passInstalled: !o[46],
      passLoaded: !o[44],
      passesLeft: o[43],
      passUsed: o[45],
      passEnabled: o[51],
      showAds: o[48],
      workinkClient: o[3],
      premiumOnlyButton: o[4]
    }
  });
  r.$on("viewchange", o[52]);
  r.$on("turnstilesolved", o[54]);
  r.$on("turnstileerror", o[55]);
  r.$on("usePass", o[56]);
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      const c = {};
      if (a[0] & 1) {
        c.views = e[0].serverData.linkMeta.impressions;
      }
      if (a[0] & 2048) {
        c.createdAt = e[11];
      }
      if (a[0] & 1) {
        c.data = e[0];
      }
      if (a[0] & 128) {
        c.ogdescription = e[7];
      }
      if (a[0] & 1024) {
        c.videoid = e[10];
      }
      if (a[0] & 1) {
        c.description = Il((e[0].serverData.linkMeta.link_description + (e[0].serverData.linkMeta.ai_text_one ? `
${e[0].serverData.linkMeta.ai_text_one}` : "") + (e[0].serverData.linkMeta.ai_text_two ? `

${e[0].serverData.linkMeta.ai_text_two}` : "")).replace(/^\s*\n+/g, ""));
      }
      if (a[0] & 1) {
        c.title = e[0].serverData.linkMeta.title;
      }
      if (a[0] & 512) {
        c.thumbnail = e[9];
      }
      if (a[0] & 8192) {
        c.previousView = e[13];
      }
      if (a[1] & 1024) {
        c.ready = e[41];
      }
      if (a[1] & 2048) {
        c.skipSocials = e[42];
      }
      if (a[0] & 1073741824) {
        c.hideTurnstile = e[30];
      }
      if (a[1] & 32768) {
        c.passInstalled = !e[46];
      }
      if (a[1] & 8192) {
        c.passLoaded = !e[44];
      }
      if (a[1] & 4096) {
        c.passesLeft = e[43];
      }
      if (a[1] & 16384) {
        c.passUsed = e[45];
      }
      if (a[0] & 8) {
        c.workinkClient = e[3];
      }
      if (a[0] & 16) {
        c.premiumOnlyButton = e[4];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function ac(o) {
  let r;
  let t;
  r = new hv({
    props: {
      title: o[0].serverData.linkMeta.title,
      offers: o[36],
      completedOffers: o[37],
      neededOffers: o[38],
      previousView: o[13],
      destination: o[15]
    }
  });
  r.$on("offerSkipped", function () {
    if (Ce(o[40])) {
      o[40].apply(this, arguments);
    }
  });
  r.$on("viewchange", o[52]);
  r.$on("offersSkipped", function () {
    if (Ce(o[39])) {
      o[39].apply(this, arguments);
    }
  });
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    p(e, a) {
      o = e;
      const c = {};
      if (a[0] & 1) {
        c.title = o[0].serverData.linkMeta.title;
      }
      if (a[1] & 32) {
        c.offers = o[36];
      }
      if (a[1] & 64) {
        c.completedOffers = o[37];
      }
      if (a[1] & 128) {
        c.neededOffers = o[38];
      }
      if (a[0] & 8192) {
        c.previousView = o[13];
      }
      if (a[0] & 32768) {
        c.destination = o[15];
      }
      r.$set(c);
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function ic(o) {
  let r;
  let t;
  let e;
  let a;
  let c = `googletag.cmd.push(function () {
                            googletag.display("sidebar-ad-1");
                        });`;
  let v;
  let p;
  let C;
  let d;
  let b;
  let S;
  b = new wc({
    props: {
      type: "vertical",
      listings: o[18]
    }
  });
  return {
    c() {
      r = E("div");
      t = E("div");
      e = G();
      a = E("script");
      a.textContent = c;
      v = G();
      p = E("br");
      C = E("br");
      d = G();
      he(b.$$.fragment);
      this.h();
    },
    l(y) {
      r = N(y, "DIV", {
        class: true
      });
      var W = J(r);
      t = N(W, "DIV", {
        id: true,
        class: true,
        style: true
      });
      J(t).forEach(R);
      e = H(W);
      a = N(W, "SCRIPT", {
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-h52t55") {
        a.textContent = c;
      }
      v = H(W);
      p = N(W, "BR", {});
      C = N(W, "BR", {});
      d = H(W);
      me(b.$$.fragment, W);
      W.forEach(R);
      this.h();
    },
    h() {
      P(t, "id", "sidebar-ad-1");
      P(t, "class", "hidden lg:block");
      Gt(t, "width", "300px");
      Gt(t, "height", "250px");
      Gt(t, "margin", "0 auto");
      P(r, "class", "hidden lg:block sticky top-32 self-start");
    },
    m(y, W) {
      L(y, r, W);
      V(r, t);
      V(r, e);
      V(r, a);
      V(r, v);
      V(r, p);
      V(r, C);
      V(r, d);
      Ae(b, r, null);
      S = true;
    },
    p(y, W) {
      const f = {};
      if (W[0] & 262144) {
        f.listings = y[18];
      }
      b.$set(f);
    },
    i(y) {
      if (!S) {
        $(b.$$.fragment, y);
        S = true;
      }
    },
    o(y) {
      te(b.$$.fragment, y);
      S = false;
    },
    d(y) {
      if (y) {
        R(r);
      }
      We(b);
    }
  };
}
function lc(o) {
  let r;
  let t;
  let e;
  let a;
  const c = [Ev, Pv];
  const v = [];
  function p(C, d) {
    if (!C[31] && !C[30]) {
      return 0;
    } else {
      return 1;
    }
  }
  t = p(o);
  e = v[t] = c[t](o);
  return {
    c() {
      r = E("div");
      e.c();
      this.h();
    },
    l(C) {
      r = N(C, "DIV", {
        class: true
      });
      var d = J(r);
      e.l(d);
      d.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "mx-auto w-fit px-4 md:px-0 flex items-center");
    },
    m(C, d) {
      L(C, r, d);
      v[t].m(r, null);
      a = true;
    },
    p(C, d) {
      let b = t;
      t = p(C);
      if (t === b) {
        v[t].p(C, d);
      } else {
        Ne();
        te(v[b], 1, 1, () => {
          v[b] = null;
        });
        Ve();
        e = v[t];
        if (e) {
          e.p(C, d);
        } else {
          e = v[t] = c[t](C);
          e.c();
        }
        $(e, 1);
        e.m(r, null);
      }
    },
    i(C) {
      if (!a) {
        $(e);
        a = true;
      }
    },
    o(C) {
      te(e);
      a = false;
    },
    d(C) {
      if (C) {
        R(r);
      }
      v[t].d();
    }
  };
}
function Pv(o) {
  let r;
  let t = !ot() && !o[44] && !o[46] && o[43] > 0 && !o[45] && o[51];
  let e;
  let a = !ot() && !o[44] && !o[46] && o[43] < 1 && o[51];
  let c;
  let v;
  let p;
  let C = t && oc(o);
  let d = a && cc();
  let b = o[45] && o[51] && xc();
  let S = !o[32] && uc(o);
  let y = !o[4] && mc && fc(o);
  return {
    c() {
      r = E("div");
      if (C) {
        C.c();
      }
      e = G();
      if (d) {
        d.c();
      }
      c = G();
      if (b) {
        b.c();
      }
      v = G();
      if (S) {
        S.c();
      }
      p = G();
      if (y) {
        y.c();
      }
    },
    l(W) {
      r = N(W, "DIV", {});
      var f = J(r);
      if (C) {
        C.l(f);
      }
      e = H(f);
      if (d) {
        d.l(f);
      }
      c = H(f);
      if (b) {
        b.l(f);
      }
      v = H(f);
      if (S) {
        S.l(f);
      }
      p = H(f);
      if (y) {
        y.l(f);
      }
      f.forEach(R);
    },
    m(W, f) {
      L(W, r, f);
      if (C) {
        C.m(r, null);
      }
      V(r, e);
      if (d) {
        d.m(r, null);
      }
      V(r, c);
      if (b) {
        b.m(r, null);
      }
      V(r, v);
      if (S) {
        S.m(r, null);
      }
      V(r, p);
      if (y) {
        y.m(r, null);
      }
    },
    p(W, f) {
      if (f[1] & 61440) {
        t = !ot() && !W[44] && !W[46] && W[43] > 0 && !W[45] && W[51];
      }
      if (t) {
        if (C) {
          C.p(W, f);
        } else {
          C = oc(W);
          C.c();
          C.m(r, e);
        }
      } else if (C) {
        C.d(1);
        C = null;
      }
      if (f[1] & 45056) {
        a = !ot() && !W[44] && !W[46] && W[43] < 1 && W[51];
      }
      if (a) {
        if (!d) {
          d = cc();
          d.c();
          d.m(r, c);
        }
      } else if (d) {
        d.d(1);
        d = null;
      }
      if (W[45] && W[51]) {
        if (!b) {
          b = xc();
          b.c();
          b.m(r, v);
        }
      } else if (b) {
        b.d(1);
        b = null;
      }
      if (W[32]) {
        if (S) {
          S.d(1);
          S = null;
        }
      } else if (S) {
        S.p(W, f);
      } else {
        S = uc(W);
        S.c();
        S.m(r, p);
      }
      if (!W[4] && mc) {
        if (y) {
          y.p(W, f);
        } else {
          y = fc(W);
          y.c();
          y.m(r, null);
        }
      } else if (y) {
        y.d(1);
        y = null;
      }
    },
    i: K,
    o: K,
    d(W) {
      if (W) {
        R(r);
      }
      if (C) {
        C.d();
      }
      if (d) {
        d.d();
      }
      if (b) {
        b.d();
      }
      if (S) {
        S.d();
      }
      if (y) {
        y.d();
      }
    }
  };
}
function Ev(o) {
  let r;
  let t;
  let e;
  let a;
  e = new Zx({
    props: {
      siteKey: "0x4AAAAAAAJoXhmMXwq7jgK9",
      appearance: "always",
      theme: "light",
      render: Hv,
      forms: false,
      action: "redirection"
    }
  });
  e.$on("turnstile-callback", o[60]);
  e.$on("turnstile-error", o[61]);
  return {
    c() {
      r = E("div");
      t = E("div");
      he(e.$$.fragment);
      this.h();
    },
    l(c) {
      r = N(c, "DIV", {
        class: true
      });
      var v = J(r);
      t = N(v, "DIV", {
        class: true
      });
      var p = J(t);
      me(e.$$.fragment, p);
      p.forEach(R);
      v.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "text-center bg-[rgb(230,230,230)] bg-[url('/media/turnstile_loader.jpg')] p-1.5 pb-0.5 rounded-lg mx-auto min-h-[78px] min-w-[312px]");
      P(r, "class", "flex mt-12 -mb-4");
    },
    m(c, v) {
      L(c, r, v);
      V(r, t);
      Ae(e, t, null);
      a = true;
    },
    p: K,
    i(c) {
      if (!a) {
        $(e.$$.fragment, c);
        a = true;
      }
    },
    o(c) {
      te(e.$$.fragment, c);
      a = false;
    },
    d(c) {
      if (c) {
        R(r);
      }
      We(e);
    }
  };
}
function oc(o) {
  let r;
  let t;
  let e = "Click here";
  let a;
  let c;
  let v;
  let p;
  let C;
  let d;
  return {
    c() {
      r = E("div");
      t = E("a");
      t.textContent = e;
      a = re(` to use one
                                of your `);
      c = re(o[43]);
      v = re(` passes.
                                `);
      p = E("div");
      this.h();
    },
    l(b) {
      r = N(b, "DIV", {
        class: true
      });
      var S = J(r);
      t = N(S, "A", {
        class: true,
        "data-svelte-h": true
      });
      if (z(t) !== "svelte-1234xjq") {
        t.textContent = e;
      }
      a = ae(S, ` to use one
                                of your `);
      c = ae(S, o[43]);
      v = ae(S, ` passes.
                                `);
      p = N(S, "DIV", {
        class: true
      });
      J(p).forEach(R);
      S.forEach(R);
      this.h();
    },
    h() {
      P(t, "class", "svelte-1ao8oou");
      P(p, "class", "arrow-thing svelte-1ao8oou");
      P(r, "class", "workink-pass svelte-1ao8oou");
    },
    m(b, S) {
      L(b, r, S);
      V(r, t);
      V(r, a);
      V(r, c);
      V(r, v);
      V(r, p);
      if (!C) {
        d = se(t, "click", o[56]);
        C = true;
      }
    },
    p(b, S) {
      if (S[1] & 4096) {
        ge(c, b[43]);
      }
    },
    d(b) {
      if (b) {
        R(r);
      }
      C = false;
      d();
    }
  };
}
function cc(o) {
  let r;
  let t = `Sorry, you don&#39;t have any passes left.
                                <div class="arrow-thing svelte-1ao8oou"></div>`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-v8a2rm") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "workink-pass svelte-1ao8oou");
    },
    m(e, a) {
      L(e, r, a);
    },
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function xc(o) {
  let r;
  let t = `Alright, ads skipped! Click to continue.
                                <div class="arrow-thing svelte-1ao8oou"></div>`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-fecjxw") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "workink-pass svelte-1ao8oou");
    },
    m(e, a) {
      L(e, r, a);
    },
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function uc(o) {
  let r;
  function t(c, v) {
    if (c[4]) {
      return Nv;
    } else {
      return Vv;
    }
  }
  let e = t(o);
  let a = e(o);
  return {
    c() {
      a.c();
      r = ie();
    },
    l(c) {
      a.l(c);
      r = ie();
    },
    m(c, v) {
      a.m(c, v);
      L(c, r, v);
    },
    p(c, v) {
      if (e === (e = t(c)) && a) {
        a.p(c, v);
      } else {
        a.d(1);
        a = e(c);
        if (a) {
          a.c();
          a.m(r.parentNode, r);
        }
      }
    },
    d(c) {
      if (c) {
        R(r);
      }
      a.d(c);
    }
  };
}
function Nv(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  return {
    c() {
      r = E("div");
      t = E("img");
      a = re(`
                                    Buy Work.ink Premium`);
      this.h();
    },
    l(p) {
      r = N(p, "DIV", {
        class: true
      });
      var C = J(r);
      t = N(C, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      a = ae(C, `
                                    Buy Work.ink Premium`);
      C.forEach(R);
      this.h();
    },
    h() {
      if (!At(t.src, e = "/media/white_loader.svg")) {
        P(t, "src", e);
      }
      P(t, "class", "loader-btn svelte-1ao8oou");
      P(t, "alt", "");
      Za(t, "loader-done", true);
      P(r, "class", "button large accessBtn pos-relative svelte-1ao8oou");
    },
    m(p, C) {
      L(p, r, C);
      V(r, t);
      V(r, a);
      if (!c) {
        v = se(r, "click", o[71]);
        c = true;
      }
    },
    p: K,
    d(p) {
      if (p) {
        R(r);
      }
      c = false;
      v();
    }
  };
}
function Vv(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  return {
    c() {
      r = E("div");
      t = E("img");
      a = re(`
                                    Go To Destination`);
      this.h();
    },
    l(p) {
      r = N(p, "DIV", {
        class: true
      });
      var C = J(r);
      t = N(C, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      a = ae(C, `
                                    Go To Destination`);
      C.forEach(R);
      this.h();
    },
    h() {
      if (!At(t.src, e = "/media/white_loader.svg")) {
        P(t, "src", e);
      }
      P(t, "class", "loader-btn svelte-1ao8oou");
      P(t, "alt", "");
      Za(t, "loader-done", o[41]);
      P(r, "class", "button large accessBtn pos-relative svelte-1ao8oou");
      Za(r, "button-disabled", !o[41]);
    },
    m(p, C) {
      L(p, r, C);
      V(r, t);
      V(r, a);
      if (!c) {
        v = se(r, "click", o[70]);
        c = true;
      }
    },
    p(p, C) {
      if (C[1] & 1024) {
        Za(t, "loader-done", p[41]);
      }
      if (C[1] & 1024) {
        Za(r, "button-disabled", !p[41]);
      }
    },
    d(p) {
      if (p) {
        R(r);
      }
      c = false;
      v();
    }
  };
}
function fc(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "Continue with TokenSentry";
  let v;
  function p(b, S) {
    if (b[34]) {
      if (b[35]) {
        return Uv;
      } else {
        return qv;
      }
    } else {
      return jv;
    }
  }
  let C = p(o);
  let d = C(o);
  return {
    c() {
      r = E("br");
      t = G();
      e = E("div");
      a = E("h2");
      a.textContent = c;
      v = G();
      d.c();
      this.h();
    },
    l(b) {
      r = N(b, "BR", {});
      t = H(b);
      e = N(b, "DIV", {
        class: true
      });
      var S = J(e);
      a = N(S, "H2", {
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-i92vtt") {
        a.textContent = c;
      }
      v = H(S);
      d.l(S);
      S.forEach(R);
      this.h();
    },
    h() {
      P(a, "class", "text-lg font-semibold text-gray-800 mb-4 text-center");
      P(e, "class", "mt-8 w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col items-center");
    },
    m(b, S) {
      L(b, r, S);
      L(b, t, S);
      L(b, e, S);
      V(e, a);
      V(e, v);
      d.m(e, null);
    },
    p(b, S) {
      if (C === (C = p(b)) && d) {
        d.p(b, S);
      } else {
        d.d(1);
        d = C(b);
        if (d) {
          d.c();
          d.m(e, null);
        }
      }
    },
    d(b) {
      if (b) {
        R(r);
        R(t);
        R(e);
      }
      d.d();
    }
  };
}
function qv(o) {
  let r;
  let t = `Press the "Go to Destination" button to
                                        continue. You'll be directly lead to
                                        your destination.`;
  return {
    c() {
      r = E("div");
      r.textContent = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1fsbylq") {
        r.textContent = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "w-full text-center text-emerald-700 font-semibold p-4 bg-emerald-50 rounded-md");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function Uv(o) {
  let r;
  let t = `<img src="/media/white_loader.svg" class="h-6 w-6 animate-spin" alt="Loading..."/>
                                        Verifying your token...`;
  return {
    c() {
      r = E("div");
      r.innerHTML = t;
      this.h();
    },
    l(e) {
      r = N(e, "DIV", {
        class: true,
        "data-svelte-h": true
      });
      if (z(r) !== "svelte-1sx930x") {
        r.innerHTML = t;
      }
      this.h();
    },
    h() {
      P(r, "class", "w-full text-center text-emerald-700 font-semibold p-4 bg-emerald-50 rounded-md flex items-center justify-center gap-2");
    },
    m(e, a) {
      L(e, r, a);
    },
    p: K,
    d(e) {
      if (e) {
        R(r);
      }
    }
  };
}
function jv(o) {
  let r;
  let t;
  let e;
  let a;
  let c = "Verify Token";
  let v;
  let p;
  let C = `<img src="/media/icons/brands/google-play-badge.png" alt="Google Play" class="h-6"/>
                                        Install from Google Play`;
  let d;
  let b;
  return {
    c() {
      r = E("form");
      t = E("input");
      e = G();
      a = E("button");
      a.textContent = c;
      v = G();
      p = E("a");
      p.innerHTML = C;
      this.h();
    },
    l(S) {
      r = N(S, "FORM", {
        class: true
      });
      var y = J(r);
      t = N(y, "INPUT", {
        type: true,
        maxlength: true,
        inputmode: true,
        placeholder: true,
        class: true
      });
      e = H(y);
      a = N(y, "BUTTON", {
        type: true,
        class: true,
        "data-svelte-h": true
      });
      if (z(a) !== "svelte-m5itwh") {
        a.textContent = c;
      }
      y.forEach(R);
      v = H(S);
      p = N(S, "A", {
        href: true,
        target: true,
        rel: true,
        class: true,
        "data-svelte-h": true
      });
      if (z(p) !== "svelte-1bniami") {
        p.innerHTML = C;
      }
      this.h();
    },
    h() {
      P(t, "type", "text");
      P(t, "maxlength", "6");
      P(t, "inputmode", "numeric");
      P(t, "placeholder", "Enter 6-digit TOTP");
      P(t, "class", "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-center text-lg tracking-widest");
      P(a, "type", "submit");
      P(a, "class", "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-full transition-colors");
      P(r, "class", "w-full flex flex-col items-center gap-3");
      P(p, "href", "https://play.google.com/store/apps/details?id=com.tokensentry.app");
      P(p, "target", "_blank");
      P(p, "rel", "noopener");
      P(p, "class", "mt-5 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-md transition-colors");
    },
    m(S, y) {
      L(S, r, y);
      V(r, t);
      n0(t, o[33]);
      V(r, e);
      V(r, a);
      L(S, v, y);
      L(S, p, y);
      if (!d) {
        b = [se(t, "input", o[72]), se(r, "submit", o[73])];
        d = true;
      }
    },
    p(S, y) {
      if (y[1] & 4 && t.value !== S[33]) {
        n0(t, S[33]);
      }
    },
    d(S) {
      if (S) {
        R(r);
        R(v);
        R(p);
      }
      d = false;
      at(b);
    }
  };
}
function dc(o) {
  let r;
  let t;
  let e;
  t = new wc({
    props: {
      listings: o[19]
    }
  });
  return {
    c() {
      r = E("div");
      he(t.$$.fragment);
      this.h();
    },
    l(a) {
      r = N(a, "DIV", {
        class: true
      });
      var c = J(r);
      me(t.$$.fragment, c);
      c.forEach(R);
      this.h();
    },
    h() {
      P(r, "class", "mb-16 max-w-[1176px] mx-auto px-6");
    },
    m(a, c) {
      L(a, r, c);
      Ae(t, r, null);
      e = true;
    },
    p(a, c) {
      const v = {};
      if (c[0] & 524288) {
        v.listings = a[19];
      }
      t.$set(v);
    },
    i(a) {
      if (!e) {
        $(t.$$.fragment, a);
        e = true;
      }
    },
    o(a) {
      te(t.$$.fragment, a);
      e = false;
    },
    d(a) {
      if (a) {
        R(r);
      }
      We(t);
    }
  };
}
function hc(o) {
  let r;
  let t;
  r = new jx({});
  return {
    c() {
      he(r.$$.fragment);
    },
    l(e) {
      me(r.$$.fragment, e);
    },
    m(e, a) {
      Ae(r, e, a);
      t = true;
    },
    i(e) {
      if (!t) {
        $(r.$$.fragment, e);
        t = true;
      }
    },
    o(e) {
      te(r.$$.fragment, e);
      t = false;
    },
    d(e) {
      We(r, e);
    }
  };
}
function zv(o) {
  let r;
  let t;
  let e;
  let a;
  let c;
  let v;
  let p;
  let C;
  let d;
  let b;
  let S;
  let y;
  let W;
  let f;
  let w;
  let _;
  let h;
  let D;
  let Y;
  let j;
  let Z;
  let q;
  an.title = r = o[5];
  S = new px({
    props: {
      active: o[20],
      toggle: o[53],
      $$slots: {
        default: [Mv]
      },
      $$scope: {
        ctx: o
      }
    }
  });
  W = new Bv({
    props: {
      active: o[25],
      title: o[0].serverData.linkMeta.title,
      description: Il((o[0].serverData.linkMeta.link_description + (o[0].serverData.linkMeta.ai_text_one ? `
${o[0].serverData.linkMeta.ai_text_one}` : "") + (o[0].serverData.linkMeta.ai_text_two ? `

${o[0].serverData.linkMeta.ai_text_two}` : "")).replace(/^\s*\n+/g, ""))
    }
  });
  W.$on("articlesdone", function () {
    if (Ce(o[26])) {
      o[26].apply(this, arguments);
    }
  });
  w = new wv({
    props: {
      active: o[27]
    }
  });
  w.$on("notificationsAccepted", function () {
    if (Ce(o[28])) {
      o[28].apply(this, arguments);
    }
  });
  h = new ol({
    props: {
      active: o[23],
      type: o[21],
      progress: o[22],
      options: o[24]
    }
  });
  h.$on("closeWorkInkPassPromo", o[68]);
  const M = [Rv, Dv];
  const O = [];
  function X(Q, F) {
    if (Q[16]) {
      return 0;
    } else {
      return 1;
    }
  }
  Y = X(o);
  j = O[Y] = M[Y](o);
  return {
    c() {
      t = E("meta");
      e = E("meta");
      a = E("meta");
      c = E("meta");
      v = E("meta");
      p = E("meta");
      C = E("meta");
      b = G();
      he(S.$$.fragment);
      y = G();
      he(W.$$.fragment);
      f = G();
      he(w.$$.fragment);
      _ = G();
      he(h.$$.fragment);
      D = G();
      j.c();
      Z = ie();
      this.h();
    },
    l(Q) {
      const F = Rx("svelte-1vmfcl4", an.head);
      t = N(F, "META", {
        name: true,
        content: true
      });
      e = N(F, "META", {
        property: true,
        content: true
      });
      a = N(F, "META", {
        property: true,
        content: true
      });
      c = N(F, "META", {
        property: true,
        content: true
      });
      v = N(F, "META", {
        property: true,
        content: true
      });
      p = N(F, "META", {
        property: true,
        content: true
      });
      C = N(F, "META", {
        property: true,
        content: true
      });
      F.forEach(R);
      b = H(Q);
      me(S.$$.fragment, Q);
      y = H(Q);
      me(W.$$.fragment, Q);
      f = H(Q);
      me(w.$$.fragment, Q);
      _ = H(Q);
      me(h.$$.fragment, Q);
      D = H(Q);
      j.l(Q);
      Z = ie();
      this.h();
    },
    h() {
      P(t, "name", "description");
      P(t, "content", o[8]);
      P(e, "property", "og:title");
      P(e, "content", o[5]);
      P(a, "property", "og:site_name");
      P(a, "content", "work.ink");
      P(c, "property", "og:url");
      P(c, "content", o[6]);
      P(v, "property", "og:description");
      P(v, "content", o[8]);
      P(p, "property", "og:type");
      P(p, "content", "website");
      P(C, "property", "og:image");
      P(C, "content", d = typeof o[9] == "string" && o[9].length > 0 ? o[9] : "https://work.ink/thumbnail/" + encodeURI(o[5]));
    },
    m(Q, F) {
      V(an.head, t);
      V(an.head, e);
      V(an.head, a);
      V(an.head, c);
      V(an.head, v);
      V(an.head, p);
      V(an.head, C);
      L(Q, b, F);
      Ae(S, Q, F);
      L(Q, y, F);
      Ae(W, Q, F);
      L(Q, f, F);
      Ae(w, Q, F);
      L(Q, _, F);
      Ae(h, Q, F);
      L(Q, D, F);
      O[Y].m(Q, F);
      L(Q, Z, F);
      q = true;
    },
    p(Q, F) {
      o = Q;
      if ((!q || F[0] & 32) && r !== (r = o[5])) {
        an.title = r;
      }
      if (!q || F[0] & 256) {
        P(t, "content", o[8]);
      }
      if (!q || F[0] & 32) {
        P(e, "content", o[5]);
      }
      if (!q || F[0] & 64) {
        P(c, "content", o[6]);
      }
      if (!q || F[0] & 256) {
        P(v, "content", o[8]);
      }
      if (!q || F[0] & 544 && d !== (d = typeof o[9] == "string" && o[9].length > 0 ? o[9] : "https://work.ink/thumbnail/" + encodeURI(o[5]))) {
        P(C, "content", d);
      }
      const oe = {};
      if (F[0] & 1048576) {
        oe.active = o[20];
      }
      if (F[0] & 1 | F[2] & 8388608) {
        oe.$$scope = {
          dirty: F,
          ctx: o
        };
      }
      S.$set(oe);
      const ce = {};
      if (F[0] & 33554432) {
        ce.active = o[25];
      }
      if (F[0] & 1) {
        ce.title = o[0].serverData.linkMeta.title;
      }
      if (F[0] & 1) {
        ce.description = Il((o[0].serverData.linkMeta.link_description + (o[0].serverData.linkMeta.ai_text_one ? `
${o[0].serverData.linkMeta.ai_text_one}` : "") + (o[0].serverData.linkMeta.ai_text_two ? `

${o[0].serverData.linkMeta.ai_text_two}` : "")).replace(/^\s*\n+/g, ""));
      }
      W.$set(ce);
      const ve = {};
      if (F[0] & 134217728) {
        ve.active = o[27];
      }
      w.$set(ve);
      const ue = {};
      if (F[0] & 8388608) {
        ue.active = o[23];
      }
      if (F[0] & 2097152) {
        ue.type = o[21];
      }
      if (F[0] & 4194304) {
        ue.progress = o[22];
      }
      if (F[0] & 16777216) {
        ue.options = o[24];
      }
      h.$set(ue);
      let Me = Y;
      Y = X(o);
      if (Y === Me) {
        O[Y].p(o, F);
      } else {
        Ne();
        te(O[Me], 1, 1, () => {
          O[Me] = null;
        });
        Ve();
        j = O[Y];
        if (j) {
          j.p(o, F);
        } else {
          j = O[Y] = M[Y](o);
          j.c();
        }
        $(j, 1);
        j.m(Z.parentNode, Z);
      }
    },
    i(Q) {
      if (!q) {
        $(S.$$.fragment, Q);
        $(W.$$.fragment, Q);
        $(w.$$.fragment, Q);
        $(h.$$.fragment, Q);
        $(j);
        q = true;
      }
    },
    o(Q) {
      te(S.$$.fragment, Q);
      te(W.$$.fragment, Q);
      te(w.$$.fragment, Q);
      te(h.$$.fragment, Q);
      te(j);
      q = false;
    },
    d(Q) {
      if (Q) {
        R(b);
        R(y);
        R(f);
        R(_);
        R(D);
        R(Z);
      }
      R(t);
      R(e);
      R(a);
      R(c);
      R(v);
      R(p);
      R(C);
      We(S, Q);
      We(W, Q);
      We(w, Q);
      We(h, Q);
      O[Y].d(Q);
    }
  };
}
let Gv = false;
let Hv = true;
let mc = false;
function Qv() {
  if (typeof window !== "undefined") {
    var o = document.querySelector(".linkui");
    if (o) {
      o.scrollIntoView(true);
    }
    var r = document.querySelector(".linkview");
    if (r) {
      r.scrollIntoView(true);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
function Il(o) {
  try {
    return decodeURIComponent(encodeURIComponent(o).replace(/%26amp%3B/g, "&").replace(/%26lt%3B/g, "<").replace(/%26gt%3B/g, ">").replace(/%26quot%3B/g, "\"").replace(/%26%23x27%3B/g, "'").replace(/%26%23(\d+)%3B/g, (r, t) => String.fromCharCode(Number(t))).replace(/%26%23x([a-fA-F0-9]+)%3B/g, (r, t) => String.fromCharCode(parseInt(t, 16))));
  } catch {
    return o;
  }
}
function Xv(o, r, t) {
  let e;
  let a;
  let c;
  io(o, Cc, Ee => t(66, a = Ee));
  io(o, Ex, Ee => t(67, c = Ee));
  let {
    data: v
  } = r;
  let p = false;
  let C = v.serverData.showAds;
  let d;
  let b;
  let S;
  let y;
  let W = v.serverData.linkMeta.link_description;
  let f;
  let w = v.serverData.linkMeta.youtube_video_id ? `https://work.ink/youtube-thumbnail/${v.serverData.linkMeta.youtube_video_id}` : false;
  let _ = v.serverData.linkMeta.youtube_video_id;
  let h = v.serverData.linkMeta.creation_date;
  let D = v.serverData.linkMeta.tags ?? [];
  let Y = v.serverData.linkMeta.is_premium_only ?? false;
  Yx("navbarStyle").set("withsearch");
  let Z = "default";
  let q = null;
  let M = true;
  let O = "";
  let X = [];
  let Q = [];
  let F = false;
  let oe = v.serverData.passEnabled;
  let ce = false;
  let ve = false;
  let ue = false;
  function Me(Ee) {
    Qv();
    if (!ve && !O) {
      if (ot() && !ue) {
        if (window.localStorage.getItem("customerToken")) {
          ue = true;
          ve = true;
          Fl();
        } else {
          qx();
          ue = true;
        }
      } else {
        Fl();
        ve = true;
      }
      return;
    }
    if (O) {
      window.open(O, "_blank");
      return;
    }
    if (Ee.detail == "offers") {
      const De = X.shift();
      if (De && !jr) {
        De();
        return;
      }
      if (O) {
        const Ke = Q.shift();
        if (Ke && !jr) {
          Ke();
          return;
        }
        window.open(O, "_blank");
        return;
      }
    }
    t(13, q = Z);
    t(12, Z = Ee.detail);
    if (Z == "steps" || Z == "offers") {
      Ye.classList.add("focuslink");
    } else {
      Ye.classList.add("focusoutanim");
      t(14, M = false);
      setTimeout(function () {
        Ye.classList.remove("focusoutanim");
        Ye.classList.remove("focuslink");
        t(14, M = true);
      }, 310);
    }
  }
  let Ye;
  let _e;
  let Se;
  let xe = 0;
  function ye() {
    t(20, xe = xe ? 0 : 1);
  }
  let et = "";
  let He = false;
  let it = false;
  let Vr;
  function de(Ee) {
    t(21, et = Ee);
    t(23, it = true);
  }
  function Aa() {
    t(23, it = false);
  }
  let cl = false;
  let Nl = () => {};
  let Vl = false;
  let Uo = () => {};
  let ql = true;
  let Ul = !v.serverData.turnstileCompatible;
  function jo(Ee) {
    Be.xnlthabfpnggipajloc(dt.TURNSTILE_RESPONSE, {
      token: Ee.detail.token
    });
    t(30, Ul = true);
  }
  function zo(Ee) {
    Be.onStartRecaptcha({
      siteKey: "#"
    });
    t(30, Ul = true);
  }
  function bx() {
    if (!(fl < 1)) {
      Be.xnlthabfpnggipajloc(dt.WORKINK_PASS_USE, {});
      t(45, jr = true);
    }
  }
  let jl = false;
  let zl = false;
  let qr = "";
  let Gl = false;
  let xl = false;
  let Hl = null;
  function Go() {
    if (ul) {
      Me({
        detail: "offers"
      });
      return;
    }
    Me({
      detail: "steps"
    });
  }
  function Ho() {
    Ic.set(true);
    Ux.set(true);
  }
  function Qo() {
    if (qr.length !== 6 || !/^\d{6}$/.test(qr)) {
      be("Invalid key", "Please enter a valid 6-digit key from TokenSentry.", "error", 8000);
      return;
    }
    Be.xnlthabfpnggipajloc(dt.KEYAPP_KEY, {
      key: qr
    });
    t(33, qr = "");
    t(34, Gl = true);
    t(35, xl = true);
    t(64, Hl = setTimeout(() => {
      t(35, xl = false);
      t(32, zl = false);
    }, 3000));
  }
  function gx(Ee) {
    t(31, jl = true);
    jo(Ee);
  }
  function Cx() {
    zo();
  }
  let Ur = [];
  let qa = [];
  let Ql = 0;
  let Xo = 0;
  let Zo = () => {};
  let Fo = Ee => {};
  let Ua = false;
  let ul;
  let Be;
  let fl = 0;
  let Xl = true;
  let jr = false;
  let Jo = false;
  let Zl = false;
  const Ko = async () => {
    if (new URL(window.location.href).searchParams.get("showPremiumDialog")) {
      Fl();
    }
    t(2, Ur = []);
    t(36, qa = []);
    X = [];
    Q = [];
    t(23, it = false);
    t(25, cl = false);
    t(26, Nl = () => {});
    t(15, O = "");
    t(41, Ua = false);
    t(3, Be = new F1({
      onOpenModal: (De, Ke) => {
        t(22, He = false);
        t(21, et = De);
        t(23, it = true);
        t(24, Vr = Ke);
      },
      onOpenReadArticlesModal: De => {
        t(25, cl = true);
        t(26, Nl = De);
      },
      onOpenNotificationScreenModal: De => {
        t(27, Vl = true);
        t(28, Uo = De);
      },
      onCloseModal: () => {
        t(25, cl = false);
        t(27, Vl = false);
        t(23, it = false);
      },
      onModalProgress: De => {
        t(22, He = De);
      },
      onAddButtonCallback: De => {
        X.push(De);
      },
      onAddPreDestinationCallback: De => {
        Q.push(De);
      },
      onContinue: () => {
        const De = X.shift();
        if (De && !jr) {
          De();
          return true;
        }
        if (O) {
          const Ke = Q.shift();
          if (Ke && !jr) {
            Ke();
            return true;
          } else {
            window.open(O, "_blank");
            return true;
          }
        }
        if (Ur.length > 0) {
          Me({
            detail: "steps"
          });
        } else {
          Me({
            detail: "offers"
          });
        }
        return false;
      }
    }, v.serverData.countryCode ?? "XX"));
    t(3, Be.onConnected = async () => {
      setInterval(() => {
        Be.xnlthabfpnggipajloc(dt.PING, {
          timestamp: Date.now()
        });
      }, 30000);
    }, Be);
    t(3, Be.onWebsocketError = async De => {
      t(47, Zl = true);
      console.error(De);
    }, Be);
    t(3, Be.onStartRecaptcha = De => {
      try {
        grecaptcha.enterprise.ready(async () => {
          const Ke = await grecaptcha.enterprise.execute("6LdYHBQpAAAAAHEkBWnflI6-SmIDrjQ6IHbFKOVN", {
            action: "transaction_confirmed"
          });
          Be.xnlthabfpnggipajloc(dt.RECAPTCHA_RESPONSE, {
            recaptchaResponse: Ke
          });
        });
      } catch {
        be("Error while running reCAPTCHA", "Try reloading this page.", "error");
        t(21, et = "captchafailed");
        t(23, it = true);
      }
    }, Be);
    t(3, Be.onLinkInfo = De => {
      var is;
      (async () => (await vv()) && (Be.xnlthabfpnggipajloc(dt.ADBLOCKER_DETECTED, {}), De.isAdblockEnabled && t(16, F = true)))();
      if (De.isDesktopOnly && ot()) {
        t(17, ce = true);
      }
      const Ke = Ze => {
        Be.xnlthabfpnggipajloc(dt.WORKINK_PASS_AVAILABLE, {
          fingerprint: Ze
        });
      };
      try {
        chrome.runtime.sendMessage("ihmilkpcjhagmcdeamfkomlhkjgodlno", {
          message: "wk_installed"
        }, Ze => {
          Ke(Ze.fingerprint);
        });
      } catch {
        t(44, Xl = false);
        t(46, Jo = true);
      }
      if ((is = De.socials) != null) {
        is.forEach(Ze => {
          const Wa = {
            type: Ze.type,
            url: Ze.url,
            started: () => {
              Be.xnlthabfpnggipajloc(dt.SOCIAL_STARTED, {
                url: Ze.url
              });
            },
            done: () => {
              Ur.splice(Ur.findIndex($o => $o.url == Ze.url), 1);
            }
          };
          Ur.push(Wa);
        });
      }
      if (De.socials.length > 0) {
        t(42, ul = false);
      }
      Be.getMonetizations().filter(Ze => Ze.isOffer == true).forEach(Ze => {
        qa.push({
          type: Ze.name,
          id: Ze.id,
          runCallback: Ze.run,
          abortCallback: Ze.abort
        });
      });
      t(38, Xo = Be.getNeededOffers());
      Be.getMonetizationCount();
      t(41, Ua = true);
    }, Be);
    t(3, Be.onWorkinkPassLeft = De => {
      t(44, Xl = false);
      t(43, fl = De.passesLeft);
      if (fl < 1) {
        be("🎫  No Work.ink Pass left.", "Sorry, but it looks like you can't skip yet.", "info");
        return;
      }
    }, Be);
    t(3, Be.onOfferDone = De => {
      t(37, Ql++, Ql);
      qa.splice(qa.findIndex(Ke => Ke.type == De), 1);
      t(29, ql = false);
      Wo().then(() => {
        t(29, ql = true);
      });
    }, Be);
    t(3, Be.onLinkDestination = De => {
      if (De.usingPass) {
        be("🎫  Skipped ads using Work.ink Pass", "Click 'Go to Destination' to continue.", "info");
        t(45, jr = true);
      }
      t(15, O = De.url);
    }, Be);
    t(3, Be.onProxyDetected = () => {
      t(15, O = "");
      t(41, Ua = false);
      t(21, et = "proxydetected");
      t(23, it = true);
    }, Be);
    t(3, Be.onError = () => {
      t(15, O = "");
      t(41, Ua = false);
      console.error("Websocket error");
      t(47, Zl = true);
    }, Be);
    const Ee = new URL(document.location.href).searchParams.get("r");
    t(39, Zo = () => {
      Be.xnlthabfpnggipajloc(dt.OFFERS_SKIPPED, {});
    });
    t(40, Fo = De => {
      var Ke;
      var is;
      Be.xnlthabfpnggipajloc(dt.OFFER_SKIPPED, {
        offerId: De.detail
      });
      if ((Ke = Be.getMonetizationById(De.detail)) != null && Ke.hideAfterSkip) {
        if ((is = Be.getMonetizationById(De.detail)) != null) {
          is.setDone();
        }
      }
    });
    if (!v.serverData.linkMeta.is_premium_only || v.serverData.hasPremium) {
      Be.connect(d, b, document.referrer, Ee ? await Ao.decrypt(atob(Ee), "U5ipKucUTuum8ICavcAibTm13zx8Ah0acw9NgwBsBbQZ7VkeCI6SQea75seKQY6r") : "");
    } else {
      t(4, p = true);
    }
    if (!v.serverData.turnstileCompatible) {
      setTimeout(() => {
        Be.onStartRecaptcha({
          siteKey: "#"
        });
      }, 3000);
    }
  };
  Nr(async () => {
    const Ee = new vx();
    document.addEventListener("click", function Wa() {
      document.removeEventListener("click", Wa, false);
      Ee.enable();
    }, false);
    let De = 0;
    const Ke = 4;
    const Ze = setInterval(() => {
      const Wa = document.getElementById("outbrain-container");
      if (Wa) {
        if (Wa.querySelector(".ob-smartfeed-wrapper")) {
          clearInterval(Ze);
        } else if (typeof OBR !== "undefined" && typeof OBR.extern !== "undefined" && typeof OBR.extern.researchWidget == "function") {
          console.log("Running OB fix");
          OBR.extern.researchWidget();
        }
      }
      if (++De >= Ke) {
        clearInterval(Ze);
      }
    }, 3000);
  });
  const kx = () => {
    t(23, it = false);
  };
  function wx(Ee) {
    q = Ee;
    t(13, q);
  }
  const _x = () => Go();
  const Ix = () => Ho();
  function Sx() {
    qr = this.value;
    t(33, qr);
  }
  const yx = Ee => {
    Ee.preventDefault();
    Qo();
  };
  function Tx(Ee) {
    ys[Ee ? "unshift" : "push"](() => {
      Ye = Ee;
      t(1, Ye);
      t(65, e);
      t(0, v);
    });
  }
  o.$$set = Ee => {
    if ("data" in Ee) {
      t(0, v = Ee.data);
    }
  };
  o.$$.update = () => {
    var Ee;
    var De;
    var Ke;
    var is;
    var Ze;
    if (o.$$.dirty[2] & 32) {
      d = Nx.decodeUserId(c.params.encUserId);
    }
    if (o.$$.dirty[2] & 32) {
      b = c.params.custom;
    }
    if (o.$$.dirty[0] & 1) {
      t(5, S = v.serverData.linkMeta.title ? v.serverData.linkMeta.title + " - at work.ink" : "Redirection - work.ink");
    }
    if (o.$$.dirty[2] & 32) {
      t(6, y = "https://work.ink/" + c.params.encUserId + "/" + c.params.custom);
    }
    if (o.$$.dirty[0] & 1) {
      t(8, f = v.serverData.linkMeta.link_description ? v.serverData.linkMeta.link_description + ". " + v.serverData.linkMeta.ai_text_one + " " + v.serverData.linkMeta.ai_text_two : "Did you know, that you can monetize your social media content right now? Shorten links, monetize them and earn money and followers. Try it out, it is free of charge!");
    }
    if (o.$$.dirty[0] & 1) {
      t(65, e = (((Ee = v.serverData.linkMeta.link_description) == null ? undefined : Ee.length) ?? 0) + (v.serverData.linkMeta.ai_text_one ? 1 + v.serverData.linkMeta.ai_text_one.length : 0) + (v.serverData.linkMeta.ai_text_two ? 2 + v.serverData.linkMeta.ai_text_two.length : 0));
    }
    if (o.$$.dirty[0] & 3 | o.$$.dirty[2] & 8) {
      t(18, _e = e < 100 ? (De = v.serverData.relatedLinks) == null ? undefined : De.slice(0, 2) : (Ke = v.serverData.relatedLinks) == null ? undefined : Ke.slice(0, 8));
      t(19, Se = e < 100 ? (is = v.serverData.relatedLinks) == null ? undefined : is.slice(2) : (Ze = v.serverData.relatedLinks) == null ? undefined : Ze.slice(8));
      t(9, w = v.serverData.linkMeta.youtube_video_id ? `https://work.ink/youtube-thumbnail/${v.serverData.linkMeta.youtube_video_id}` : "");
      t(10, _ = v.serverData.linkMeta.youtube_video_id);
      t(11, h = v.serverData.linkMeta.creation_date);
      t(7, W = v.serverData.linkMeta.link_description);
      if (Ye) {
        t(1, Ye.scrollTop = 0, Ye);
      }
    }
    if (o.$$.dirty[2] & 16 && a) {
      t(31, jl = false);
    }
    if (o.$$.dirty[0] & 8 | o.$$.dirty[2] & 4 && Be) {
      t(3, Be.onKeyappKeyInvalid = () => {
        be("This key is invalid.", "Please get a new key from TokenSentry.", "error", 5000);
        clearTimeout(Hl);
        t(34, Gl = false);
        t(35, xl = false);
        t(32, zl = true);
      }, Be);
    }
    if (o.$$.dirty[0] & 4) {
      t(42, ul = Ur.length == 0);
    }
    if (o.$$.dirty[0] & 8 | o.$$.dirty[2] & 16) {
      if (a && lo) {
        if (Be != null) {
          Be.close();
        }
        Ko();
      } else {
        Nr(Ko);
      }
    }
  };
  return [v, Ye, Ur, Be, p, S, y, W, f, w, _, h, Z, q, M, O, F, ce, _e, Se, xe, et, He, it, Vr, cl, Nl, Vl, Uo, ql, Ul, jl, zl, qr, Gl, xl, qa, Ql, Xo, Zo, Fo, Ua, ul, fl, Xl, jr, Jo, Zl, C, D, Y, oe, Me, ye, jo, zo, bx, Go, Ho, Qo, gx, Cx, de, Aa, Hl, e, a, c, kx, wx, _x, Ix, Sx, yx, Tx];
}
class J4 extends Fe {
  constructor(r) {
    super();
    Je(this, r, Xv, zv, Xe, {
      data: 0,
      showModal: 62,
      closeModal: 63
    }, null, [-1, -1, -1]);
  }
  get showModal() {
    return this.$$.ctx[62];
  }
  get closeModal() {
    return this.$$.ctx[63];
  }
}
export { J4 as component, F4 as universal };
