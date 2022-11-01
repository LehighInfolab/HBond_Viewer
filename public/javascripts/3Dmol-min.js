!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var r = [],
    n = Object.getPrototypeOf,
    i = r.slice,
    o = r.flat
      ? function (e) {
          return r.flat.call(e);
        }
      : function (e) {
          return r.concat.apply([], e);
        },
    a = r.push,
    s = r.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    d = u.toString,
    h = d.call(Object),
    p = {},
    f = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    m = function (e) {
      return null != e && e === e.window;
    },
    g = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, r) {
    var n,
      i,
      o = (r = r || g).createElement("script");
    if (((o.text = e), t))
      for (n in v)
        (i = t[n] || (t.getAttribute && t.getAttribute(n))) &&
          o.setAttribute(n, i);
    r.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var b = function (e, t) {
    return new b.fn.init(e, t);
  };
  function w(e) {
    var t = !!e && "length" in e && e.length,
      r = x(e);
    return (
      !f(e) &&
      !m(e) &&
      ("array" === r ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (b.fn = b.prototype =
    {
      jquery: "3.5.0",
      constructor: b,
      length: 0,
      toArray: function () {
        return i.call(this);
      },
      get: function (e) {
        return null == e
          ? i.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = b.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return b.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          b.map(this, function (t, r) {
            return e.call(t, r, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(i.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          b.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          b.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          r = +e + (e < 0 ? t : 0);
        return this.pushStack(r >= 0 && r < t ? [this[r]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: r.sort,
      splice: r.splice,
    }),
    (b.extend = b.fn.extend =
      function () {
        var e,
          t,
          r,
          n,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || f(a) || (a = {}),
            s === l && ((a = this), s--);
          s < l;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = e[t]),
                "__proto__" !== t &&
                  a !== n &&
                  (c && n && (b.isPlainObject(n) || (i = Array.isArray(n)))
                    ? ((r = a[t]),
                      (o =
                        i && !Array.isArray(r)
                          ? []
                          : i || b.isPlainObject(r)
                          ? r
                          : {}),
                      (i = !1),
                      (a[t] = b.extend(c, o, n)))
                    : void 0 !== n && (a[t] = n));
        return a;
      }),
    b.extend({
      expando: "jQuery" + ("3.5.0" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, r;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = n(e)) ||
            ("function" ==
              typeof (r = u.call(t, "constructor") && t.constructor) &&
              d.call(r) === h))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, r) {
        y(e, { nonce: t && t.nonce }, r);
      },
      each: function (e, t) {
        var r,
          n = 0;
        if (w(e))
          for (r = e.length; n < r && !1 !== t.call(e[n], n, e[n]); n++);
        else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
        return e;
      },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (w(Object(e))
              ? b.merge(r, "string" == typeof e ? [e] : e)
              : a.call(r, e)),
          r
        );
      },
      inArray: function (e, t, r) {
        return null == t ? -1 : s.call(t, e, r);
      },
      merge: function (e, t) {
        for (var r = +t.length, n = 0, i = e.length; n < r; n++) e[i++] = t[n];
        return (e.length = i), e;
      },
      grep: function (e, t, r) {
        for (var n = [], i = 0, o = e.length, a = !r; i < o; i++)
          !t(e[i], i) !== a && n.push(e[i]);
        return n;
      },
      map: function (e, t, r) {
        var n,
          i,
          a = 0,
          s = [];
        if (w(e))
          for (n = e.length; a < n; a++)
            null != (i = t(e[a], a, r)) && s.push(i);
        else for (a in e) null != (i = t(e[a], a, r)) && s.push(i);
        return o(s);
      },
      guid: 1,
      support: p,
    }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = r[Symbol.iterator]),
    b.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var D = (function (e) {
    var t,
      r,
      n,
      i,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h,
      p,
      f,
      m,
      g,
      v,
      y,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      D = 0,
      C = 0,
      S = le(),
      A = le(),
      $ = le(),
      M = le(),
      k = function (e, t) {
        return e === t && (d = !0), 0;
      },
      z = {}.hasOwnProperty,
      _ = [],
      T = _.pop,
      L = _.push,
      E = _.push,
      I = _.slice,
      F = function (e, t) {
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
        return -1;
      },
      O =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      R = "[\\x20\\t\\r\\n\\f]",
      N =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        R +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      P =
        "\\[" +
        R +
        "*(" +
        N +
        ")(?:" +
        R +
        "*([*^$|!~]?=)" +
        R +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        R +
        "*\\]",
      V =
        ":(" +
        N +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        P +
        ")*)|.*)\\)|)",
      B = new RegExp(R + "+", "g"),
      U = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
      j = new RegExp("^" + R + "*," + R + "*"),
      G = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
      H = new RegExp(R + "|>"),
      q = new RegExp(V),
      W = new RegExp("^" + N + "$"),
      Y = {
        ID: new RegExp("^#(" + N + ")"),
        CLASS: new RegExp("^\\.(" + N + ")"),
        TAG: new RegExp("^(" + N + "|[*])"),
        ATTR: new RegExp("^" + P),
        PSEUDO: new RegExp("^" + V),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            R +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            R +
            "*(?:([+-]|)" +
            R +
            "*(\\d+)|))" +
            R +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + O + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            R +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            R +
            "*((?:-\\d)?\\d*)" +
            R +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /HTML$/i,
      Z = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
      re = function (e, t) {
        var r = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320))
        );
      },
      ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "ï¿½"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        h();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      E.apply((_ = I.call(w.childNodes)), w.childNodes),
        _[w.childNodes.length].nodeType;
    } catch (e) {
      E = {
        apply: _.length
          ? function (e, t) {
              L.apply(e, I.call(t));
            }
          : function (e, t) {
              for (var r = e.length, n = 0; (e[r++] = t[n++]); );
              e.length = r - 1;
            },
      };
    }
    function se(e, t, n, i) {
      var o,
        s,
        c,
        u,
        d,
        f,
        v,
        y = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return n;
      if (!i && (h(t), (t = t || p), m)) {
        if (11 !== w && (d = J.exec(e)))
          if ((o = d[1])) {
            if (9 === w) {
              if (!(c = t.getElementById(o))) return n;
              if (c.id === o) return n.push(c), n;
            } else if (y && (c = y.getElementById(o)) && x(t, c) && c.id === o)
              return n.push(c), n;
          } else {
            if (d[2]) return E.apply(n, t.getElementsByTagName(e)), n;
            if (
              (o = d[3]) &&
              r.getElementsByClassName &&
              t.getElementsByClassName
            )
              return E.apply(n, t.getElementsByClassName(o)), n;
          }
        if (
          r.qsa &&
          !M[e + " "] &&
          (!g || !g.test(e)) &&
          (1 !== w || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === w && (H.test(e) || G.test(e)))) {
            for (
              ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && r.scope) ||
                ((u = t.getAttribute("id"))
                  ? (u = u.replace(ne, ie))
                  : t.setAttribute("id", (u = b))),
                s = (f = a(e)).length;
              s--;

            )
              f[s] = (u ? "#" + u : ":scope") + " " + xe(f[s]);
            v = f.join(",");
          }
          try {
            return E.apply(n, y.querySelectorAll(v)), n;
          } catch (t) {
            M(e, !0);
          } finally {
            u === b && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(U, "$1"), t, n, i);
    }
    function le() {
      var e = [];
      return function t(r, i) {
        return (
          e.push(r + " ") > n.cacheLength && delete t[e.shift()],
          (t[r + " "] = i)
        );
      };
    }
    function ce(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = p.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function de(e, t) {
      for (var r = e.split("|"), i = r.length; i--; ) n.attrHandle[r[i]] = t;
    }
    function he(e, t) {
      var r = t && e,
        n =
          r &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (n) return n;
      if (r) for (; (r = r.nextSibling); ) if (r === t) return -1;
      return e ? 1 : -1;
    }
    function pe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function fe(e) {
      return function (t) {
        var r = t.nodeName.toLowerCase();
        return ("input" === r || "button" === r) && t.type === e;
      };
    }
    function me(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ge(e) {
      return ce(function (t) {
        return (
          (t = +t),
          ce(function (r, n) {
            for (var i, o = e([], r.length, t), a = o.length; a--; )
              r[(i = o[a])] && (r[i] = !(n[i] = r[i]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((r = se.support = {}),
    (o = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          r = (e.ownerDocument || e).documentElement;
        return !X.test(t || (r && r.nodeName) || "HTML");
      }),
    (h = se.setDocument =
      function (e) {
        var t,
          i,
          a = e ? e.ownerDocument || e : w;
        return a != p && 9 === a.nodeType && a.documentElement
          ? ((f = (p = a).documentElement),
            (m = !o(p)),
            w != p &&
              (i = p.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener("unload", oe, !1)
                : i.attachEvent && i.attachEvent("onunload", oe)),
            (r.scope = ue(function (e) {
              return (
                f.appendChild(e).appendChild(p.createElement("div")),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (r.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (r.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (r.getElementsByClassName = K.test(p.getElementsByClassName)),
            (r.getById = ue(function (e) {
              return (
                (f.appendChild(e).id = b),
                !p.getElementsByName || !p.getElementsByName(b).length
              );
            })),
            r.getById
              ? ((n.filter.ID = function (e) {
                  var t = e.replace(te, re);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (n.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var r = t.getElementById(e);
                    return r ? [r] : [];
                  }
                }))
              : ((n.filter.ID = function (e) {
                  var t = e.replace(te, re);
                  return function (e) {
                    var r =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return r && r.value === t;
                  };
                }),
                (n.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var r,
                      n,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((r = o.getAttributeNode("id")) && r.value === e)
                        return [o];
                      for (i = t.getElementsByName(e), n = 0; (o = i[n++]); )
                        if ((r = o.getAttributeNode("id")) && r.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (n.find.TAG = r.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : r.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var r,
                    n = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (r = o[i++]); ) 1 === r.nodeType && n.push(r);
                    return n;
                  }
                  return o;
                }),
            (n.find.CLASS =
              r.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && m)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (g = []),
            (r.qsa = K.test(p.querySelectorAll)) &&
              (ue(function (e) {
                var t;
                (f.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    g.push("\\[" + R + "*(?:value|" + O + ")"),
                  e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                  (t = p.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    g.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || g.push(":checked"),
                  e.querySelectorAll("a#" + b + "+*").length ||
                    g.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  g.push("[\\r\\n\\f]");
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    g.push("name" + R + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                  (f.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (r.matchesSelector = K.test(
              (y =
                f.matches ||
                f.webkitMatchesSelector ||
                f.mozMatchesSelector ||
                f.oMatchesSelector ||
                f.msMatchesSelector)
            )) &&
              ue(function (e) {
                (r.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  v.push("!=", V);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (t = K.test(f.compareDocumentPosition)),
            (x =
              t || K.test(f.contains)
                ? function (e, t) {
                    var r = 9 === e.nodeType ? e.documentElement : e,
                      n = t && t.parentNode;
                    return (
                      e === n ||
                      !(
                        !n ||
                        1 !== n.nodeType ||
                        !(r.contains
                          ? r.contains(n)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(n))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (k = t
              ? function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!r.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == p || (e.ownerDocument == w && x(w, e))
                        ? -1
                        : t == p || (t.ownerDocument == w && x(w, t))
                        ? 1
                        : u
                        ? F(u, e) - F(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var r,
                    n = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == p
                      ? -1
                      : t == p
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? F(u, e) - F(u, t)
                      : 0;
                  if (i === o) return he(e, t);
                  for (r = e; (r = r.parentNode); ) a.unshift(r);
                  for (r = t; (r = r.parentNode); ) s.unshift(r);
                  for (; a[n] === s[n]; ) n++;
                  return n
                    ? he(a[n], s[n])
                    : a[n] == w
                    ? -1
                    : s[n] == w
                    ? 1
                    : 0;
                }),
            p)
          : p;
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (h(e),
        r.matchesSelector &&
          m &&
          !M[t + " "] &&
          (!v || !v.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var n = y.call(e, t);
          if (
            n ||
            r.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          M(t, !0);
        }
      return se(t, p, null, [e]).length > 0;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != p && h(e), x(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != p && h(e);
      var i = n.attrHandle[t.toLowerCase()],
        o = i && z.call(n.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
      return void 0 !== o
        ? o
        : r.attributes || !m
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(ne, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        i = 0,
        o = 0;
      if (
        ((d = !r.detectDuplicates),
        (u = !r.sortStable && e.slice(0)),
        e.sort(k),
        d)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
        for (; i--; ) e.splice(n[i], 1);
      }
      return (u = null), e;
    }),
    (i = se.getText =
      function (e) {
        var t,
          r = "",
          n = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) r += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[n++]); ) r += i(t);
        return r;
      }),
    ((n = se.selectors =
      {
        cacheLength: 50,
        createPseudo: ce,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, re)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, re)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              r = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : r &&
                    q.test(r) &&
                    (t = a(r, !0)) &&
                    (t = r.indexOf(")", r.length - t) - r.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = r.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, re).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = S[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                S(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, r) {
            return function (n) {
              var i = se.attr(n, e);
              return null == i
                ? "!=" === t
                : !t ||
                    ((i += ""),
                    "=" === t
                      ? i === r
                      : "!=" === t
                      ? i !== r
                      : "^=" === t
                      ? r && 0 === i.indexOf(r)
                      : "*=" === t
                      ? r && i.indexOf(r) > -1
                      : "$=" === t
                      ? r && i.slice(-r.length) === r
                      : "~=" === t
                      ? (" " + i.replace(B, " ") + " ").indexOf(r) > -1
                      : "|=" === t &&
                        (i === r || i.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (e, t, r, n, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === n && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, r, l) {
                  var c,
                    u,
                    d,
                    h,
                    p,
                    f,
                    m = o !== a ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = s && t.nodeName.toLowerCase(),
                    y = !l && !s,
                    x = !1;
                  if (g) {
                    if (o) {
                      for (; m; ) {
                        for (h = t; (h = h[m]); )
                          if (
                            s
                              ? h.nodeName.toLowerCase() === v
                              : 1 === h.nodeType
                          )
                            return !1;
                        f = m = "only" === e && !f && "nextSibling";
                      }
                      return !0;
                    }
                    if (((f = [a ? g.firstChild : g.lastChild]), a && y)) {
                      for (
                        x =
                          (p =
                            (c =
                              (u =
                                (d = (h = g)[b] || (h[b] = {}))[h.uniqueID] ||
                                (d[h.uniqueID] = {}))[e] || [])[0] === D &&
                            c[1]) && c[2],
                          h = p && g.childNodes[p];
                        (h = (++p && h && h[m]) || (x = p = 0) || f.pop());

                      )
                        if (1 === h.nodeType && ++x && h === t) {
                          u[e] = [D, p, x];
                          break;
                        }
                    } else if (
                      (y &&
                        (x = p =
                          (c =
                            (u =
                              (d = (h = t)[b] || (h[b] = {}))[h.uniqueID] ||
                              (d[h.uniqueID] = {}))[e] || [])[0] === D && c[1]),
                      !1 === x)
                    )
                      for (
                        ;
                        (h = (++p && h && h[m]) || (x = p = 0) || f.pop()) &&
                        ((s
                          ? h.nodeName.toLowerCase() !== v
                          : 1 !== h.nodeType) ||
                          !++x ||
                          (y &&
                            ((u =
                              (d = h[b] || (h[b] = {}))[h.uniqueID] ||
                              (d[h.uniqueID] = {}))[e] = [D, x]),
                          h !== t));

                      );
                    return (x -= i) === n || (x % n == 0 && x / n >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var r,
              i =
                n.pseudos[e] ||
                n.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return i[b]
              ? i(t)
              : i.length > 1
              ? ((r = [e, e, "", t]),
                n.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ce(function (e, r) {
                      for (var n, o = i(e, t), a = o.length; a--; )
                        e[(n = F(e, o[a]))] = !(r[n] = o[a]);
                    })
                  : function (e) {
                      return i(e, 0, r);
                    })
              : i;
          },
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
              r = [],
              n = s(e.replace(U, "$1"));
            return n[b]
              ? ce(function (e, t, r, i) {
                  for (var o, a = n(e, null, i, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), n(t, null, o, r), (t[0] = null), !r.pop();
                };
          }),
          has: ce(function (e) {
            return function (t) {
              return se(e, t).length > 0;
            };
          }),
          contains: ce(function (e) {
            return (
              (e = e.replace(te, re)),
              function (t) {
                return (t.textContent || i(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: ce(function (e) {
            return (
              W.test(e || "") || se.error("unsupported lang: " + e),
              (e = e.replace(te, re).toLowerCase()),
              function (t) {
                var r;
                do {
                  if (
                    (r = m
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (r = r.toLowerCase()) === e || 0 === r.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var r = e.location && e.location.hash;
            return r && r.slice(1) === t.id;
          },
          root: function (e) {
            return e === f;
          },
          focus: function (e) {
            return (
              e === p.activeElement &&
              (!p.hasFocus || p.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: me(!1),
          disabled: me(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !n.pseudos.empty(e);
          },
          header: function (e) {
            return Q.test(e.nodeName);
          },
          input: function (e) {
            return Z.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ge(function () {
            return [0];
          }),
          last: ge(function (e, t) {
            return [t - 1];
          }),
          eq: ge(function (e, t, r) {
            return [r < 0 ? r + t : r];
          }),
          even: ge(function (e, t) {
            for (var r = 0; r < t; r += 2) e.push(r);
            return e;
          }),
          odd: ge(function (e, t) {
            for (var r = 1; r < t; r += 2) e.push(r);
            return e;
          }),
          lt: ge(function (e, t, r) {
            for (var n = r < 0 ? r + t : r > t ? t : r; --n >= 0; ) e.push(n);
            return e;
          }),
          gt: ge(function (e, t, r) {
            for (var n = r < 0 ? r + t : r; ++n < t; ) e.push(n);
            return e;
          }),
        },
      }).pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[t] = pe(t);
    for (t in { submit: !0, reset: !0 }) n.pseudos[t] = fe(t);
    function ye() {}
    function xe(e) {
      for (var t = 0, r = e.length, n = ""; t < r; t++) n += e[t].value;
      return n;
    }
    function be(e, t, r) {
      var n = t.dir,
        i = t.next,
        o = i || n,
        a = r && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, r, i) {
            for (; (t = t[n]); ) if (1 === t.nodeType || a) return e(t, r, i);
            return !1;
          }
        : function (t, r, l) {
            var c,
              u,
              d,
              h = [D, s];
            if (l) {
              for (; (t = t[n]); )
                if ((1 === t.nodeType || a) && e(t, r, l)) return !0;
            } else
              for (; (t = t[n]); )
                if (1 === t.nodeType || a)
                  if (
                    ((u =
                      (d = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (d[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[n] || t;
                  else {
                    if ((c = u[o]) && c[0] === D && c[1] === s)
                      return (h[2] = c[2]);
                    if (((u[o] = h), (h[2] = e(t, r, l)))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return e.length > 1
        ? function (t, r, n) {
            for (var i = e.length; i--; ) if (!e[i](t, r, n)) return !1;
            return !0;
          }
        : e[0];
    }
    function De(e, t, r, n, i) {
      for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
        (o = e[s]) && ((r && !r(o, n, i)) || (a.push(o), c && t.push(s)));
      return a;
    }
    function Ce(e, t, r, n, i, o) {
      return (
        n && !n[b] && (n = Ce(n)),
        i && !i[b] && (i = Ce(i, o)),
        ce(function (o, a, s, l) {
          var c,
            u,
            d,
            h = [],
            p = [],
            f = a.length,
            m =
              o ||
              (function (e, t, r) {
                for (var n = 0, i = t.length; n < i; n++) se(e, t[n], r);
                return r;
              })(t || "*", s.nodeType ? [s] : s, []),
            g = !e || (!o && t) ? m : De(m, h, e, s, l),
            v = r ? (i || (o ? e : f || n) ? [] : a) : g;
          if ((r && r(g, v, s, l), n))
            for (c = De(v, p), n(c, [], s, l), u = c.length; u--; )
              (d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
          if (o) {
            if (i || e) {
              if (i) {
                for (c = [], u = v.length; u--; )
                  (d = v[u]) && c.push((g[u] = d));
                i(null, (v = []), c, l);
              }
              for (u = v.length; u--; )
                (d = v[u]) &&
                  (c = i ? F(o, d) : h[u]) > -1 &&
                  (o[c] = !(a[c] = d));
            }
          } else (v = De(v === a ? v.splice(f, v.length) : v)), i ? i(null, a, v, l) : E.apply(a, v);
        })
      );
    }
    function Se(e) {
      for (
        var t,
          r,
          i,
          o = e.length,
          a = n.relative[e[0].type],
          s = a || n.relative[" "],
          l = a ? 1 : 0,
          u = be(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          d = be(
            function (e) {
              return F(t, e) > -1;
            },
            s,
            !0
          ),
          h = [
            function (e, r, n) {
              var i =
                (!a && (n || r !== c)) ||
                ((t = r).nodeType ? u(e, r, n) : d(e, r, n));
              return (t = null), i;
            },
          ];
        l < o;
        l++
      )
        if ((r = n.relative[e[l].type])) h = [be(we(h), r)];
        else {
          if ((r = n.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (i = ++l; i < o && !n.relative[e[i].type]; i++);
            return Ce(
              l > 1 && we(h),
              l > 1 &&
                xe(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(U, "$1"),
              r,
              l < i && Se(e.slice(l, i)),
              i < o && Se((e = e.slice(i))),
              i < o && xe(e)
            );
          }
          h.push(r);
        }
      return we(h);
    }
    return (
      (ye.prototype = n.filters = n.pseudos),
      (n.setFilters = new ye()),
      (a = se.tokenize =
        function (e, t) {
          var r,
            i,
            o,
            a,
            s,
            l,
            c,
            u = A[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (s = e, l = [], c = n.preFilter; s; ) {
            for (a in ((r && !(i = j.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), l.push((o = []))),
            (r = !1),
            (i = G.exec(s)) &&
              ((r = i.shift()),
              o.push({ value: r, type: i[0].replace(U, " ") }),
              (s = s.slice(r.length))),
            n.filter))
              !(i = Y[a].exec(s)) ||
                (c[a] && !(i = c[a](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: a, matches: i }),
                (s = s.slice(r.length)));
            if (!r) break;
          }
          return t ? s.length : s ? se.error(e) : A(e, l).slice(0);
        }),
      (s = se.compile =
        function (e, t) {
          var r,
            i = [],
            o = [],
            s = $[e + " "];
          if (!s) {
            for (t || (t = a(e)), r = t.length; r--; )
              (s = Se(t[r]))[b] ? i.push(s) : o.push(s);
            (s = $(
              e,
              (function (e, t) {
                var r = t.length > 0,
                  i = e.length > 0,
                  o = function (o, a, s, l, u) {
                    var d,
                      f,
                      g,
                      v = 0,
                      y = "0",
                      x = o && [],
                      b = [],
                      w = c,
                      C = o || (i && n.find.TAG("*", u)),
                      S = (D += null == w ? 1 : Math.random() || 0.1),
                      A = C.length;
                    for (
                      u && (c = a == p || a || u);
                      y !== A && null != (d = C[y]);
                      y++
                    ) {
                      if (i && d) {
                        for (
                          f = 0, a || d.ownerDocument == p || (h(d), (s = !m));
                          (g = e[f++]);

                        )
                          if (g(d, a || p, s)) {
                            l.push(d);
                            break;
                          }
                        u && (D = S);
                      }
                      r && ((d = !g && d) && v--, o && x.push(d));
                    }
                    if (((v += y), r && y !== v)) {
                      for (f = 0; (g = t[f++]); ) g(x, b, a, s);
                      if (o) {
                        if (v > 0)
                          for (; y--; ) x[y] || b[y] || (b[y] = T.call(l));
                        b = De(b);
                      }
                      E.apply(l, b),
                        u &&
                          !o &&
                          b.length > 0 &&
                          v + t.length > 1 &&
                          se.uniqueSort(l);
                    }
                    return u && ((D = S), (c = w)), x;
                  };
                return r ? ce(o) : o;
              })(o, i)
            )).selector = e;
          }
          return s;
        }),
      (l = se.select =
        function (e, t, r, i) {
          var o,
            l,
            c,
            u,
            d,
            h = "function" == typeof e && e,
            p = !i && a((e = h.selector || e));
          if (((r = r || []), 1 === p.length)) {
            if (
              (l = p[0] = p[0].slice(0)).length > 2 &&
              "ID" === (c = l[0]).type &&
              9 === t.nodeType &&
              m &&
              n.relative[l[1].type]
            ) {
              if (!(t = (n.find.ID(c.matches[0].replace(te, re), t) || [])[0]))
                return r;
              h && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              o = Y.needsContext.test(e) ? 0 : l.length;
              o-- && ((c = l[o]), !n.relative[(u = c.type)]);

            )
              if (
                (d = n.find[u]) &&
                (i = d(
                  c.matches[0].replace(te, re),
                  (ee.test(l[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(o, 1), !(e = i.length && xe(l))))
                  return E.apply(r, i), r;
                break;
              }
          }
          return (
            (h || s(e, p))(
              i,
              t,
              !m,
              r,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            r
          );
        }),
      (r.sortStable = b.split("").sort(k).join("") === b),
      (r.detectDuplicates = !!d),
      h(),
      (r.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        de("type|href|height|width", function (e, t, r) {
          if (!r) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (r.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        de("value", function (e, t, r) {
          if (!r && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        de(O, function (e, t, r) {
          var n;
          if (!r)
            return !0 === e[t]
              ? t.toLowerCase()
              : (n = e.getAttributeNode(t)) && n.specified
              ? n.value
              : null;
        }),
      se
    );
  })(e);
  (b.find = D),
    (b.expr = D.selectors),
    (b.expr[":"] = b.expr.pseudos),
    (b.uniqueSort = b.unique = D.uniqueSort),
    (b.text = D.getText),
    (b.isXMLDoc = D.isXML),
    (b.contains = D.contains),
    (b.escapeSelector = D.escape);
  var C = function (e, t, r) {
      for (var n = [], i = void 0 !== r; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && b(e).is(r)) break;
          n.push(e);
        }
      return n;
    },
    S = function (e, t) {
      for (var r = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && r.push(e);
      return r;
    },
    A = b.expr.match.needsContext;
  function $(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function k(e, t, r) {
    return f(t)
      ? b.grep(e, function (e, n) {
          return !!t.call(e, n, e) !== r;
        })
      : t.nodeType
      ? b.grep(e, function (e) {
          return (e === t) !== r;
        })
      : "string" != typeof t
      ? b.grep(e, function (e) {
          return s.call(t, e) > -1 !== r;
        })
      : b.filter(t, e, r);
  }
  (b.filter = function (e, t, r) {
    var n = t[0];
    return (
      r && (e = ":not(" + e + ")"),
      1 === t.length && 1 === n.nodeType
        ? b.find.matchesSelector(n, e)
          ? [n]
          : []
        : b.find.matches(
            e,
            b.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    b.fn.extend({
      find: function (e) {
        var t,
          r,
          n = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            b(e).filter(function () {
              for (t = 0; t < n; t++) if (b.contains(i[t], this)) return !0;
            })
          );
        for (r = this.pushStack([]), t = 0; t < n; t++) b.find(e, i[t], r);
        return n > 1 ? b.uniqueSort(r) : r;
      },
      filter: function (e) {
        return this.pushStack(k(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(k(this, e || [], !0));
      },
      is: function (e) {
        return !!k(this, "string" == typeof e && A.test(e) ? b(e) : e || [], !1)
          .length;
      },
    });
  var z,
    _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((b.fn.init = function (e, t, r) {
    var n, i;
    if (!e) return this;
    if (((r = r || z), "string" == typeof e)) {
      if (
        !(n =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : _.exec(e)) ||
        (!n[1] && t)
      )
        return !t || t.jquery ? (t || r).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (
          ((t = t instanceof b ? t[0] : t),
          b.merge(
            this,
            b.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : g, !0)
          ),
          M.test(n[1]) && b.isPlainObject(t))
        )
          for (n in t) f(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this;
      }
      return (
        (i = g.getElementById(n[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : f(e)
      ? void 0 !== r.ready
        ? r.ready(e)
        : e(b)
      : b.makeArray(e, this);
  }).prototype = b.fn),
    (z = b(g));
  var T = /^(?:parents|prev(?:Until|All))/,
    L = { children: !0, contents: !0, next: !0, prev: !0 };
  function E(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  b.fn.extend({
    has: function (e) {
      var t = b(e, this),
        r = t.length;
      return this.filter(function () {
        for (var e = 0; e < r; e++) if (b.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var r,
        n = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && b(e);
      if (!A.test(e))
        for (; n < i; n++)
          for (r = this[n]; r && r !== t; r = r.parentNode)
            if (
              r.nodeType < 11 &&
              (a
                ? a.index(r) > -1
                : 1 === r.nodeType && b.find.matchesSelector(r, e))
            ) {
              o.push(r);
              break;
            }
      return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? s.call(b(e), this[0])
          : s.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    b.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return C(e, "parentNode");
        },
        parentsUntil: function (e, t, r) {
          return C(e, "parentNode", r);
        },
        next: function (e) {
          return E(e, "nextSibling");
        },
        prev: function (e) {
          return E(e, "previousSibling");
        },
        nextAll: function (e) {
          return C(e, "nextSibling");
        },
        prevAll: function (e) {
          return C(e, "previousSibling");
        },
        nextUntil: function (e, t, r) {
          return C(e, "nextSibling", r);
        },
        prevUntil: function (e, t, r) {
          return C(e, "previousSibling", r);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && n(e.contentDocument)
            ? e.contentDocument
            : ($(e, "template") && (e = e.content || e),
              b.merge([], e.childNodes));
        },
      },
      function (e, t) {
        b.fn[e] = function (r, n) {
          var i = b.map(this, t, r);
          return (
            "Until" !== e.slice(-5) && (n = r),
            n && "string" == typeof n && (i = b.filter(n, i)),
            this.length > 1 &&
              (L[e] || b.uniqueSort(i), T.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var I = /[^\x20\t\r\n\f]+/g;
  function F(e) {
    return e;
  }
  function O(e) {
    throw e;
  }
  function R(e, t, r, n) {
    var i;
    try {
      e && f((i = e.promise))
        ? i.call(e).done(t).fail(r)
        : e && f((i = e.then))
        ? i.call(e, t, r)
        : t.apply(void 0, [e].slice(n));
    } catch (e) {
      r.apply(void 0, [e]);
    }
  }
  (b.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              b.each(e.match(I) || [], function (e, r) {
                t[r] = !0;
              }),
              t
            );
          })(e)
        : b.extend({}, e);
    var t,
      r,
      n,
      i,
      o = [],
      a = [],
      s = -1,
      l = function () {
        for (i = i || e.once, n = t = !0; a.length; s = -1)
          for (r = a.shift(); ++s < o.length; )
            !1 === o[s].apply(r[0], r[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (r = !1));
        e.memory || (r = !1), (t = !1), i && (o = r ? [] : "");
      },
      c = {
        add: function () {
          return (
            o &&
              (r && !t && ((s = o.length - 1), a.push(r)),
              (function t(r) {
                b.each(r, function (r, n) {
                  f(n)
                    ? (e.unique && c.has(n)) || o.push(n)
                    : n && n.length && "string" !== x(n) && t(n);
                });
              })(arguments),
              r && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            b.each(arguments, function (e, t) {
              for (var r; (r = b.inArray(t, o, r)) > -1; )
                o.splice(r, 1), r <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? b.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = a = []), (o = r = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = a = []), r || t || (o = r = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, r) {
          return (
            i ||
              ((r = [e, (r = r || []).slice ? r.slice() : r]),
              a.push(r),
              t || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return c;
  }),
    b.extend({
      Deferred: function (t) {
        var r = [
            [
              "notify",
              "progress",
              b.Callbacks("memory"),
              b.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              b.Callbacks("once memory"),
              b.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              b.Callbacks("once memory"),
              b.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          n = "pending",
          i = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return b
                .Deferred(function (t) {
                  b.each(r, function (r, n) {
                    var i = f(e[n[4]]) && e[n[4]];
                    o[n[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && f(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[n[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, n, i) {
              var o = 0;
              function a(t, r, n, i) {
                return function () {
                  var s = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < o)) {
                        if ((e = n.apply(s, l)) === r.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          f(c)
                            ? i
                              ? c.call(e, a(o, r, F, i), a(o, r, O, i))
                              : (o++,
                                c.call(
                                  e,
                                  a(o, r, F, i),
                                  a(o, r, O, i),
                                  a(o, r, F, r.notifyWith)
                                ))
                            : (n !== F && ((s = void 0), (l = [e])),
                              (i || r.resolveWith)(s, l));
                      }
                    },
                    u = i
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            b.Deferred.exceptionHook &&
                              b.Deferred.exceptionHook(e, u.stackTrace),
                              t + 1 >= o &&
                                (n !== O && ((s = void 0), (l = [e])),
                                r.rejectWith(s, l));
                          }
                        };
                  t
                    ? u()
                    : (b.Deferred.getStackHook &&
                        (u.stackTrace = b.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return b
                .Deferred(function (e) {
                  r[0][3].add(a(0, e, f(i) ? i : F, e.notifyWith)),
                    r[1][3].add(a(0, e, f(t) ? t : F)),
                    r[2][3].add(a(0, e, f(n) ? n : O));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? b.extend(e, i) : i;
            },
          },
          o = {};
        return (
          b.each(r, function (e, t) {
            var a = t[2],
              s = t[5];
            (i[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    n = s;
                  },
                  r[3 - e][2].disable,
                  r[3 - e][3].disable,
                  r[0][2].lock,
                  r[0][3].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          r = t,
          n = Array(r),
          o = i.call(arguments),
          a = b.Deferred(),
          s = function (e) {
            return function (r) {
              (n[e] = this),
                (o[e] = arguments.length > 1 ? i.call(arguments) : r),
                --t || a.resolveWith(n, o);
            };
          };
        if (
          t <= 1 &&
          (R(e, a.done(s(r)).resolve, a.reject, !t),
          "pending" === a.state() || f(o[r] && o[r].then))
        )
          return a.then();
        for (; r--; ) R(o[r], s(r), a.reject);
        return a.promise();
      },
    });
  var N = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (b.Deferred.exceptionHook = function (t, r) {
    e.console &&
      e.console.warn &&
      t &&
      N.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, r);
  }),
    (b.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var P = b.Deferred();
  function V() {
    g.removeEventListener("DOMContentLoaded", V),
      e.removeEventListener("load", V),
      b.ready();
  }
  (b.fn.ready = function (e) {
    return (
      P.then(e).catch(function (e) {
        b.readyException(e);
      }),
      this
    );
  }),
    b.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --b.readyWait : b.isReady) ||
          ((b.isReady = !0),
          (!0 !== e && --b.readyWait > 0) || P.resolveWith(g, [b]));
      },
    }),
    (b.ready.then = P.then),
    "complete" === g.readyState ||
    ("loading" !== g.readyState && !g.documentElement.doScroll)
      ? e.setTimeout(b.ready)
      : (g.addEventListener("DOMContentLoaded", V),
        e.addEventListener("load", V));
  var B = function (e, t, r, n, i, o, a) {
      var s = 0,
        l = e.length,
        c = null == r;
      if ("object" === x(r))
        for (s in ((i = !0), r)) B(e, t, s, r[s], !0, o, a);
      else if (
        void 0 !== n &&
        ((i = !0),
        f(n) || (a = !0),
        c &&
          (a
            ? (t.call(e, n), (t = null))
            : ((c = t),
              (t = function (e, t, r) {
                return c.call(b(e), r);
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], r, a ? n : n.call(e[s], s, t(e[s], r)));
      return i ? e : c ? t.call(e) : l ? t(e[0], r) : o;
    },
    U = /^-ms-/,
    j = /-([a-z])/g;
  function G(e, t) {
    return t.toUpperCase();
  }
  function H(e) {
    return e.replace(U, "ms-").replace(j, G);
  }
  var q = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function W() {
    this.expando = b.expando + W.uid++;
  }
  (W.uid = 1),
    (W.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = Object.create(null)),
            q(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, r) {
        var n,
          i = this.cache(e);
        if ("string" == typeof t) i[H(t)] = r;
        else for (n in t) i[H(n)] = t[n];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][H(t)];
      },
      access: function (e, t, r) {
        return void 0 === t || (t && "string" == typeof t && void 0 === r)
          ? this.get(e, t)
          : (this.set(e, t, r), void 0 !== r ? r : t);
      },
      remove: function (e, t) {
        var r,
          n = e[this.expando];
        if (void 0 !== n) {
          if (void 0 !== t) {
            r = (t = Array.isArray(t)
              ? t.map(H)
              : (t = H(t)) in n
              ? [t]
              : t.match(I) || []).length;
            for (; r--; ) delete n[t[r]];
          }
          (void 0 === t || b.isEmptyObject(n)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !b.isEmptyObject(t);
      },
    });
  var Y = new W(),
    X = new W(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;
  function K(e, t, r) {
    var n;
    if (void 0 === r && 1 === e.nodeType)
      if (
        ((n = "data-" + t.replace(Q, "-$&").toLowerCase()),
        "string" == typeof (r = e.getAttribute(n)))
      ) {
        try {
          r = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                  ? +e
                  : Z.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(r);
        } catch (e) {}
        X.set(e, t, r);
      } else r = void 0;
    return r;
  }
  b.extend({
    hasData: function (e) {
      return X.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, r) {
      return X.access(e, t, r);
    },
    removeData: function (e, t) {
      X.remove(e, t);
    },
    _data: function (e, t, r) {
      return Y.access(e, t, r);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    b.fn.extend({
      data: function (e, t) {
        var r,
          n,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = X.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            for (r = a.length; r--; )
              a[r] &&
                0 === (n = a[r].name).indexOf("data-") &&
                ((n = H(n.slice(5))), K(o, n, i[n]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              X.set(this, e);
            })
          : B(
              this,
              function (t) {
                var r;
                if (o && void 0 === t)
                  return void 0 !== (r = X.get(o, e))
                    ? r
                    : void 0 !== (r = K(o, e))
                    ? r
                    : void 0;
                this.each(function () {
                  X.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          X.remove(this, e);
        });
      },
    }),
    b.extend({
      queue: function (e, t, r) {
        var n;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (n = Y.get(e, t)),
            r &&
              (!n || Array.isArray(r)
                ? (n = Y.access(e, t, b.makeArray(r)))
                : n.push(r)),
            n || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var r = b.queue(e, t),
          n = r.length,
          i = r.shift(),
          o = b._queueHooks(e, t);
        "inprogress" === i && ((i = r.shift()), n--),
          i &&
            ("fx" === t && r.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                b.dequeue(e, t);
              },
              o
            )),
          !n && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var r = t + "queueHooks";
        return (
          Y.get(e, r) ||
          Y.access(e, r, {
            empty: b.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", r]);
            }),
          })
        );
      },
    }),
    b.fn.extend({
      queue: function (e, t) {
        var r = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), r--),
          arguments.length < r
            ? b.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var r = b.queue(this, e, t);
                b._queueHooks(this, e),
                  "fx" === e && "inprogress" !== r[0] && b.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          b.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var r,
          n = 1,
          i = b.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --n || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (r = Y.get(o[a], e + "queueHooks")) &&
            r.empty &&
            (n++, r.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ee = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
    te = ["Top", "Right", "Bottom", "Left"],
    re = g.documentElement,
    ne = function (e) {
      return b.contains(e.ownerDocument, e);
    },
    ie = { composed: !0 };
  re.getRootNode &&
    (ne = function (e) {
      return (
        b.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
      );
    });
  var oe = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ne(e) && "none" === b.css(e, "display"))
    );
  };
  function ae(e, t, r, n) {
    var i,
      o,
      a = 20,
      s = n
        ? function () {
            return n.cur();
          }
        : function () {
            return b.css(e, t, "");
          },
      l = s(),
      c = (r && r[3]) || (b.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (b.cssNumber[t] || ("px" !== c && +l)) &&
        ee.exec(b.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; a--; )
        b.style(e, t, u + c),
          (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
          (u /= o);
      (u *= 2), b.style(e, t, u + c), (r = r || []);
    }
    return (
      r &&
        ((u = +u || +l || 0),
        (i = r[1] ? u + (r[1] + 1) * r[2] : +r[2]),
        n && ((n.unit = c), (n.start = u), (n.end = i))),
      i
    );
  }
  var se = {};
  function le(e) {
    var t,
      r = e.ownerDocument,
      n = e.nodeName,
      i = se[n];
    return (
      i ||
      ((t = r.body.appendChild(r.createElement(n))),
      (i = b.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (se[n] = i),
      i)
    );
  }
  function ce(e, t) {
    for (var r, n, i = [], o = 0, a = e.length; o < a; o++)
      (n = e[o]).style &&
        ((r = n.style.display),
        t
          ? ("none" === r &&
              ((i[o] = Y.get(n, "display") || null),
              i[o] || (n.style.display = "")),
            "" === n.style.display && oe(n) && (i[o] = le(n)))
          : "none" !== r && ((i[o] = "none"), Y.set(n, "display", r)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  b.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            oe(this) ? b(this).show() : b(this).hide();
          });
    },
  });
  var ue,
    de,
    he = /^(?:checkbox|radio)$/i,
    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    fe = /^$|^module$|\/(?:java|ecma)script/i;
  (ue = g.createDocumentFragment().appendChild(g.createElement("div"))),
    (de = g.createElement("input")).setAttribute("type", "radio"),
    de.setAttribute("checked", "checked"),
    de.setAttribute("name", "t"),
    ue.appendChild(de),
    (p.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ue.innerHTML = "<textarea>x</textarea>"),
    (p.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
    (ue.innerHTML = "<option></option>"),
    (p.option = !!ue.lastChild);
  var me = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ge(e, t) {
    var r;
    return (
      (r =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && $(e, t)) ? b.merge([e], r) : r
    );
  }
  function ve(e, t) {
    for (var r = 0, n = e.length; r < n; r++)
      Y.set(e[r], "globalEval", !t || Y.get(t[r], "globalEval"));
  }
  (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
    (me.th = me.td),
    p.option ||
      (me.optgroup = me.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function xe(e, t, r, n, i) {
    for (
      var o,
        a,
        s,
        l,
        c,
        u,
        d = t.createDocumentFragment(),
        h = [],
        p = 0,
        f = e.length;
      p < f;
      p++
    )
      if ((o = e[p]) || 0 === o)
        if ("object" === x(o)) b.merge(h, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          for (
            a = a || d.appendChild(t.createElement("div")),
              s = (pe.exec(o) || ["", ""])[1].toLowerCase(),
              l = me[s] || me._default,
              a.innerHTML = l[1] + b.htmlPrefilter(o) + l[2],
              u = l[0];
            u--;

          )
            a = a.lastChild;
          b.merge(h, a.childNodes), ((a = d.firstChild).textContent = "");
        } else h.push(t.createTextNode(o));
    for (d.textContent = "", p = 0; (o = h[p++]); )
      if (n && b.inArray(o, n) > -1) i && i.push(o);
      else if (
        ((c = ne(o)), (a = ge(d.appendChild(o), "script")), c && ve(a), r)
      )
        for (u = 0; (o = a[u++]); ) fe.test(o.type || "") && r.push(o);
    return d;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    De = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ae(e, t) {
    return (
      (e ===
        (function () {
          try {
            return g.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function $e(e, t, r, n, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof r && ((n = n || r), (r = void 0)), t))
        $e(e, s, r, n, t[s], o);
      return e;
    }
    if (
      (null == n && null == i
        ? ((i = r), (n = r = void 0))
        : null == i &&
          ("string" == typeof r
            ? ((i = n), (n = void 0))
            : ((i = n), (n = r), (r = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return b().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = b.guid++))),
      e.each(function () {
        b.event.add(this, t, i, n, r);
      })
    );
  }
  function Me(e, t, r) {
    r
      ? (Y.set(e, t, !1),
        b.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var n,
              o,
              a = Y.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a.length)
                (b.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((a = i.call(arguments)),
                Y.set(this, t, a),
                (n = r(this, t)),
                this[t](),
                a !== (o = Y.get(this, t)) || n ? Y.set(this, t, !1) : (o = {}),
                a !== o)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), o.value
                );
            } else
              a.length &&
                (Y.set(this, t, {
                  value: b.event.trigger(
                    b.extend(a[0], b.Event.prototype),
                    a.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, t) && b.event.add(e, t, Ce);
  }
  (b.event = {
    global: {},
    add: function (e, t, r, n, i) {
      var o,
        a,
        s,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        g = Y.get(e);
      if (q(e))
        for (
          r.handler && ((r = (o = r).handler), (i = o.selector)),
            i && b.find.matchesSelector(re, i),
            r.guid || (r.guid = b.guid++),
            (l = g.events) || (l = g.events = Object.create(null)),
            (a = g.handle) ||
              (a = g.handle =
                function (t) {
                  return void 0 !== b && b.event.triggered !== t.type
                    ? b.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(I) || [""]).length;
          c--;

        )
          (p = m = (s = De.exec(t[c]) || [])[1]),
            (f = (s[2] || "").split(".").sort()),
            p &&
              ((d = b.event.special[p] || {}),
              (p = (i ? d.delegateType : d.bindType) || p),
              (d = b.event.special[p] || {}),
              (u = b.extend(
                {
                  type: p,
                  origType: m,
                  data: n,
                  handler: r,
                  guid: r.guid,
                  selector: i,
                  needsContext: i && b.expr.match.needsContext.test(i),
                  namespace: f.join("."),
                },
                o
              )),
              (h = l[p]) ||
                (((h = l[p] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, n, f, a)) ||
                  (e.addEventListener && e.addEventListener(p, a))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = r.guid)),
              i ? h.splice(h.delegateCount++, 0, u) : h.push(u),
              (b.event.global[p] = !0));
    },
    remove: function (e, t, r, n, i) {
      var o,
        a,
        s,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        g = Y.hasData(e) && Y.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(I) || [""]).length; c--; )
          if (
            ((p = m = (s = De.exec(t[c]) || [])[1]),
            (f = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              d = b.event.special[p] || {},
                h = l[(p = (n ? d.delegateType : d.bindType) || p)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = h.length;
              o--;

            )
              (u = h[o]),
                (!i && m !== u.origType) ||
                  (r && r.guid !== u.guid) ||
                  (s && !s.test(u.namespace)) ||
                  (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                  (h.splice(o, 1),
                  u.selector && h.delegateCount--,
                  d.remove && d.remove.call(e, u));
            a &&
              !h.length &&
              ((d.teardown && !1 !== d.teardown.call(e, f, g.handle)) ||
                b.removeEvent(e, p, g.handle),
              delete l[p]);
          } else for (p in l) b.event.remove(e, p + t[c], r, n, !0);
        b.isEmptyObject(l) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        r,
        n,
        i,
        o,
        a,
        s = new Array(arguments.length),
        l = b.event.fix(e),
        c = (Y.get(this, "events") || Object.create(null))[l.type] || [],
        u = b.event.special[l.type] || {};
      for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, l))
      ) {
        for (
          a = b.event.handlers.call(this, l, c), t = 0;
          (i = a[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = i.elem, r = 0;
            (o = i.handlers[r++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== o.namespace &&
              !l.rnamespace.test(o.namespace)) ||
              ((l.handleObj = o),
              (l.data = o.data),
              void 0 !==
                (n = (
                  (b.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (l.result = n) &&
                (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var r,
        n,
        i,
        o,
        a,
        s = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], a = {}, r = 0; r < l; r++)
              void 0 === a[(i = (n = t[r]).selector + " ")] &&
                (a[i] = n.needsContext
                  ? b(i, this).index(c) > -1
                  : b.find(i, this, null, [c]).length),
                a[i] && o.push(n);
            o.length && s.push({ elem: c, handlers: o });
          }
      return (
        (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(b.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: f(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[b.expando] ? e : new b.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            he.test(t.type) && t.click && $(t, "input") && Me(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            he.test(t.type) && t.click && $(t, "input") && Me(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (he.test(t.type) &&
              t.click &&
              $(t, "input") &&
              Y.get(t, "click")) ||
            $(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (b.removeEvent = function (e, t, r) {
      e.removeEventListener && e.removeEventListener(t, r);
    }),
    (b.Event = function (e, t) {
      if (!(this instanceof b.Event)) return new b.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && b.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[b.expando] = !0);
    }),
    (b.Event.prototype = {
      constructor: b.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    b.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      b.event.addProp
    ),
    b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      b.event.special[e] = {
        setup: function () {
          return Me(this, e, Ae), !1;
        },
        trigger: function () {
          return Me(this, e), !0;
        },
        delegateType: t,
      };
    }),
    b.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        b.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var r,
              n = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === n || b.contains(n, i))) ||
                ((e.type = o.origType),
                (r = o.handler.apply(this, arguments)),
                (e.type = t)),
              r
            );
          },
        };
      }
    ),
    b.fn.extend({
      on: function (e, t, r, n) {
        return $e(this, e, t, r, n);
      },
      one: function (e, t, r, n) {
        return $e(this, e, t, r, n, 1);
      },
      off: function (e, t, r) {
        var n, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (n = e.handleObj),
            b(e.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((r = t), (t = void 0)),
          !1 === r && (r = Se),
          this.each(function () {
            b.event.remove(this, e, r, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
    _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Te(e, t) {
    return (
      ($(e, "table") &&
        $(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        b(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Ee(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Ie(e, t) {
    var r, n, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (r = 0, n = s[i].length; r < n; r++) b.event.add(t, i, s[i][r]);
      X.hasData(e) && ((o = X.access(e)), (a = b.extend({}, o)), X.set(t, a));
    }
  }
  function Fe(e, t) {
    var r = t.nodeName.toLowerCase();
    "input" === r && he.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== r && "textarea" !== r) ||
        (t.defaultValue = e.defaultValue);
  }
  function Oe(e, t, r, n) {
    t = o(t);
    var i,
      a,
      s,
      l,
      c,
      u,
      d = 0,
      h = e.length,
      m = h - 1,
      g = t[0],
      v = f(g);
    if (v || (h > 1 && "string" == typeof g && !p.checkClone && ze.test(g)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = g.call(this, i, o.html())), Oe(o, t, r, n);
      });
    if (
      h &&
      ((a = (i = xe(t, e[0].ownerDocument, !1, e, n)).firstChild),
      1 === i.childNodes.length && (i = a),
      a || n)
    ) {
      for (l = (s = b.map(ge(i, "script"), Le)).length; d < h; d++)
        (c = i),
          d !== m &&
            ((c = b.clone(c, !0, !0)), l && b.merge(s, ge(c, "script"))),
          r.call(e[d], c, d);
      if (l)
        for (u = s[s.length - 1].ownerDocument, b.map(s, Ee), d = 0; d < l; d++)
          (c = s[d]),
            fe.test(c.type || "") &&
              !Y.access(c, "globalEval") &&
              b.contains(u, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? b._evalUrl &&
                  !c.noModule &&
                  b._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    u
                  )
                : y(c.textContent.replace(_e, ""), c, u));
    }
    return e;
  }
  function Re(e, t, r) {
    for (var n, i = t ? b.filter(t, e) : e, o = 0; null != (n = i[o]); o++)
      r || 1 !== n.nodeType || b.cleanData(ge(n)),
        n.parentNode &&
          (r && ne(n) && ve(ge(n, "script")), n.parentNode.removeChild(n));
    return e;
  }
  b.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, r) {
      var n,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        l = ne(e);
      if (
        !(
          p.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          b.isXMLDoc(e)
        )
      )
        for (a = ge(s), n = 0, i = (o = ge(e)).length; n < i; n++)
          Fe(o[n], a[n]);
      if (t)
        if (r)
          for (o = o || ge(e), a = a || ge(s), n = 0, i = o.length; n < i; n++)
            Ie(o[n], a[n]);
        else Ie(e, s);
      return (
        (a = ge(s, "script")).length > 0 && ve(a, !l && ge(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, r, n, i = b.event.special, o = 0; void 0 !== (r = e[o]); o++)
        if (q(r)) {
          if ((t = r[Y.expando])) {
            if (t.events)
              for (n in t.events)
                i[n] ? b.event.remove(r, n) : b.removeEvent(r, n, t.handle);
            r[Y.expando] = void 0;
          }
          r[X.expando] && (r[X.expando] = void 0);
        }
    },
  }),
    b.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? b.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Oe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Te(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Oe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Te(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (b.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return b.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              r = 0,
              n = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = b.htmlPrefilter(e);
              try {
                for (; r < n; r++)
                  1 === (t = this[r] || {}).nodeType &&
                    (b.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Oe(
          this,
          arguments,
          function (t) {
            var r = this.parentNode;
            b.inArray(this, e) < 0 &&
              (b.cleanData(ge(this)), r && r.replaceChild(t, this));
          },
          e
        );
      },
    }),
    b.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        b.fn[e] = function (e) {
          for (var r, n = [], i = b(e), o = i.length - 1, s = 0; s <= o; s++)
            (r = s === o ? this : this.clone(!0)),
              b(i[s])[t](r),
              a.apply(n, r.get());
          return this.pushStack(n);
        };
      }
    );
  var Ne = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
    Pe = function (t) {
      var r = t.ownerDocument.defaultView;
      return (r && r.opener) || (r = e), r.getComputedStyle(t);
    },
    Ve = function (e, t, r) {
      var n,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((n = r.call(e)), t)) e.style[i] = o[i];
      return n;
    },
    Be = new RegExp(te.join("|"), "i");
  function Ue(e, t, r) {
    var n,
      i,
      o,
      a,
      s = e.style;
    return (
      (r = r || Pe(e)) &&
        ("" !== (a = r.getPropertyValue(t) || r[t]) ||
          ne(e) ||
          (a = b.style(e, t)),
        !p.pixelBoxStyles() &&
          Ne.test(a) &&
          Be.test(t) &&
          ((n = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = r.width),
          (s.width = n),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function je(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (u) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (n = "1%" !== t.top),
          (l = 12 === r(t.marginLeft)),
          (u.style.right = "60%"),
          (a = 36 === r(t.right)),
          (i = 36 === r(t.width)),
          (u.style.position = "absolute"),
          (o = 12 === r(u.offsetWidth / 3)),
          re.removeChild(c),
          (u = null);
      }
    }
    function r(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      i,
      o,
      a,
      s,
      l,
      c = g.createElement("div"),
      u = g.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (p.clearCloneStyle = "content-box" === u.style.backgroundClip),
      b.extend(p, {
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), n;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, r, n, i;
          return (
            null == s &&
              ((t = g.createElement("table")),
              (r = g.createElement("tr")),
              (n = g.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px"),
              (r.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(t).appendChild(r).appendChild(n),
              (i = e.getComputedStyle(r)),
              (s = parseInt(i.height) > 3),
              re.removeChild(t)),
            s
          );
        },
      }));
  })();
  var Ge = ["Webkit", "Moz", "ms"],
    He = g.createElement("div").style,
    qe = {};
  function We(e) {
    var t = b.cssProps[e] || qe[e];
    return (
      t ||
      (e in He
        ? e
        : (qe[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), r = Ge.length;
                r--;

              )
                if ((e = Ge[r] + t) in He) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ze = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Ke(e, t, r) {
    var n = ee.exec(t);
    return n ? Math.max(0, n[2] - (r || 0)) + (n[3] || "px") : t;
  }
  function Je(e, t, r, n, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (r === (n ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === r && (l += b.css(e, r + te[a], !0, i)),
        n
          ? ("content" === r && (l -= b.css(e, "padding" + te[a], !0, i)),
            "margin" !== r &&
              (l -= b.css(e, "border" + te[a] + "Width", !0, i)))
          : ((l += b.css(e, "padding" + te[a], !0, i)),
            "padding" !== r
              ? (l += b.css(e, "border" + te[a] + "Width", !0, i))
              : (s += b.css(e, "border" + te[a] + "Width", !0, i)));
    return (
      !n &&
        o >= 0 &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5
            )
          ) || 0),
      l
    );
  }
  function et(e, t, r) {
    var n = Pe(e),
      i =
        (!p.boxSizingReliable() || r) &&
        "border-box" === b.css(e, "boxSizing", !1, n),
      o = i,
      a = Ue(e, t, n),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Ne.test(a)) {
      if (!r) return a;
      a = "auto";
    }
    return (
      ((!p.boxSizingReliable() && i) ||
        (!p.reliableTrDimensions() && $(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === b.css(e, "display", !1, n))) &&
        e.getClientRects().length &&
        ((i = "border-box" === b.css(e, "boxSizing", !1, n)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Je(e, t, r || (i ? "border" : "content"), o, n, a) +
        "px"
    );
  }
  function tt(e, t, r, n, i) {
    return new tt.prototype.init(e, t, r, n, i);
  }
  b.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var r = Ue(e, "opacity");
            return "" === r ? "1" : r;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, r, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = H(t),
          l = Xe.test(t),
          c = e.style;
        if (
          (l || (t = We(s)), (a = b.cssHooks[t] || b.cssHooks[s]), void 0 === r)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, n)) ? i : c[t];
        "string" === (o = typeof r) &&
          (i = ee.exec(r)) &&
          i[1] &&
          ((r = ae(e, t, i)), (o = "number")),
          null != r &&
            r == r &&
            ("number" !== o ||
              l ||
              (r += (i && i[3]) || (b.cssNumber[s] ? "" : "px")),
            p.clearCloneStyle ||
              "" !== r ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (a && "set" in a && void 0 === (r = a.set(e, r, n))) ||
              (l ? c.setProperty(t, r) : (c[t] = r)));
      }
    },
    css: function (e, t, r, n) {
      var i,
        o,
        a,
        s = H(t);
      return (
        Xe.test(t) || (t = We(s)),
        (a = b.cssHooks[t] || b.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, r)),
        void 0 === i && (i = Ue(e, t, n)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === r || r
          ? ((o = parseFloat(i)), !0 === r || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    b.each(["height", "width"], function (e, t) {
      b.cssHooks[t] = {
        get: function (e, r, n) {
          if (r)
            return !Ye.test(b.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, n)
              : Ve(e, Ze, function () {
                  return et(e, t, n);
                });
        },
        set: function (e, r, n) {
          var i,
            o = Pe(e),
            a = !p.scrollboxSize() && "absolute" === o.position,
            s = (a || n) && "border-box" === b.css(e, "boxSizing", !1, o),
            l = n ? Je(e, t, n, s, o) : 0;
          return (
            s &&
              a &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Je(e, t, "border", !1, o) -
                  0.5
              )),
            l &&
              (i = ee.exec(r)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = r), (r = b.css(e, t))),
            Ke(0, r, l)
          );
        },
      };
    }),
    (b.cssHooks.marginLeft = je(p.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ue(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ve(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    b.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (b.cssHooks[e + t] = {
        expand: function (r) {
          for (
            var n = 0, i = {}, o = "string" == typeof r ? r.split(" ") : [r];
            n < 4;
            n++
          )
            i[e + te[n] + t] = o[n] || o[n - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (b.cssHooks[e + t].set = Ke);
    }),
    b.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, r) {
            var n,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (n = Pe(e), i = t.length; a < i; a++)
                o[t[a]] = b.css(e, t[a], !1, n);
              return o;
            }
            return void 0 !== r ? b.style(e, t, r) : b.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (b.Tween = tt),
    (tt.prototype = {
      constructor: tt,
      init: function (e, t, r, n, i, o) {
        (this.elem = e),
          (this.prop = r),
          (this.easing = i || b.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = o || (b.cssNumber[r] ? "" : "px"));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          r = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                b.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          r && r.set ? r.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }),
    (tt.prototype.init.prototype = tt.prototype),
    (tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = b.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          b.fx.step[e.prop]
            ? b.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!b.cssHooks[e.prop] && null == e.elem.style[We(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : b.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (b.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (b.fx = tt.prototype.init),
    (b.fx.step = {});
  var rt,
    nt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function at() {
    nt &&
      (!1 === g.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, b.fx.interval),
      b.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        rt = void 0;
      }),
      (rt = Date.now())
    );
  }
  function lt(e, t) {
    var r,
      n = 0,
      i = { height: e };
    for (t = t ? 1 : 0; n < 4; n += 2 - t)
      i["margin" + (r = te[n])] = i["padding" + r] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, r) {
    for (
      var n,
        i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((n = i[o].call(r, t, e))) return n;
  }
  function ut(e, t, r) {
    var n,
      i,
      o = 0,
      a = ut.prefilters.length,
      s = b.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (i) return !1;
        for (
          var t = rt || st(),
            r = Math.max(0, c.startTime + c.duration - t),
            n = 1 - (r / c.duration || 0),
            o = 0,
            a = c.tweens.length;
          o < a;
          o++
        )
          c.tweens[o].run(n);
        return (
          s.notifyWith(e, [c, n, r]),
          n < 1 && a
            ? r
            : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        );
      },
      c = s.promise({
        elem: e,
        props: b.extend({}, t),
        opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, r),
        originalProperties: t,
        originalOptions: r,
        startTime: rt || st(),
        duration: r.duration,
        tweens: [],
        createTween: function (t, r) {
          var n = b.Tween(
            e,
            c.opts,
            t,
            r,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function (t) {
          var r = 0,
            n = t ? c.tweens.length : 0;
          if (i) return this;
          for (i = !0; r < n; r++) c.tweens[r].run(1);
          return (
            t
              ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
              : s.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      u = c.props;
    for (
      !(function (e, t) {
        var r, n, i, o, a;
        for (r in e)
          if (
            ((i = t[(n = H(r))]),
            (o = e[r]),
            Array.isArray(o) && ((i = o[1]), (o = e[r] = o[0])),
            r !== n && ((e[n] = o), delete e[r]),
            (a = b.cssHooks[n]) && ("expand" in a))
          )
            for (r in ((o = a.expand(o)), delete e[n], o))
              (r in e) || ((e[r] = o[r]), (t[r] = i));
          else t[n] = i;
      })(u, c.opts.specialEasing);
      o < a;
      o++
    )
      if ((n = ut.prefilters[o].call(c, e, u, c.opts)))
        return (
          f(n.stop) &&
            (b._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      b.map(u, ct, c),
      f(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      b.fx.timer(b.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (b.Animation = b.extend(ut, {
    tweeners: {
      "*": [
        function (e, t) {
          var r = this.createTween(e, t);
          return ae(r.elem, e, ee.exec(t), r), r;
        },
      ],
    },
    tweener: function (e, t) {
      f(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
      for (var r, n = 0, i = e.length; n < i; n++)
        (r = e[n]),
          (ut.tweeners[r] = ut.tweeners[r] || []),
          ut.tweeners[r].unshift(t);
    },
    prefilters: [
      function (e, t, r) {
        var n,
          i,
          o,
          a,
          s,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          h = this,
          p = {},
          f = e.style,
          m = e.nodeType && oe(e),
          g = Y.get(e, "fxshow");
        for (n in (r.queue ||
          (null == (a = b._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          h.always(function () {
            h.always(function () {
              a.unqueued--, b.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[n]), it.test(i))) {
            if (
              (delete t[n],
              (o = o || "toggle" === i),
              i === (m ? "hide" : "show"))
            ) {
              if ("show" !== i || !g || void 0 === g[n]) continue;
              m = !0;
            }
            p[n] = (g && g[n]) || b.style(e, n);
          }
        if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(p))
          for (n in (d &&
            1 === e.nodeType &&
            ((r.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (c = g && g.display) && (c = Y.get(e, "display")),
            "none" === (u = b.css(e, "display")) &&
              (c
                ? (u = c)
                : (ce([e], !0),
                  (c = e.style.display || c),
                  (u = b.css(e, "display")),
                  ce([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === b.css(e, "float") &&
              (l ||
                (h.done(function () {
                  f.display = c;
                }),
                null == c && ((u = f.display), (c = "none" === u ? "" : u))),
              (f.display = "inline-block"))),
          r.overflow &&
            ((f.overflow = "hidden"),
            h.always(function () {
              (f.overflow = r.overflow[0]),
                (f.overflowX = r.overflow[1]),
                (f.overflowY = r.overflow[2]);
            })),
          (l = !1),
          p))
            l ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = Y.access(e, "fxshow", { display: c })),
              o && (g.hidden = !m),
              m && ce([e], !0),
              h.done(function () {
                for (n in (m || ce([e]), Y.remove(e, "fxshow"), p))
                  b.style(e, n, p[n]);
              })),
              (l = ct(m ? g[n] : 0, n, h)),
              n in g ||
                ((g[n] = l.start), m && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
    },
  })),
    (b.speed = function (e, t, r) {
      var n =
        e && "object" == typeof e
          ? b.extend({}, e)
          : {
              complete: r || (!r && t) || (f(e) && e),
              duration: e,
              easing: (r && t) || (t && !f(t) && t),
            };
      return (
        b.fx.off
          ? (n.duration = 0)
          : "number" != typeof n.duration &&
            (n.duration in b.fx.speeds
              ? (n.duration = b.fx.speeds[n.duration])
              : (n.duration = b.fx.speeds._default)),
        (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          f(n.old) && n.old.call(this), n.queue && b.dequeue(this, n.queue);
        }),
        n
      );
    }),
    b.fn.extend({
      fadeTo: function (e, t, r, n) {
        return this.filter(oe)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, r, n);
      },
      animate: function (e, t, r, n) {
        var i = b.isEmptyObject(e),
          o = b.speed(t, r, n),
          a = function () {
            var t = ut(this, b.extend({}, e), o);
            (i || Y.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, r) {
        var n = function (e) {
          var t = e.stop;
          delete e.stop, t(r);
        };
        return (
          "string" != typeof e && ((r = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = b.timers,
              a = Y.get(this);
            if (i) a[i] && a[i].stop && n(a[i]);
            else for (i in a) a[i] && a[i].stop && ot.test(i) && n(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(r), (t = !1), o.splice(i, 1));
            (!t && r) || b.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              r = Y.get(this),
              n = r[e + "queue"],
              i = r[e + "queueHooks"],
              o = b.timers,
              a = n ? n.length : 0;
            for (
              r.finish = !0,
                b.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              n[t] && n[t].finish && n[t].finish.call(this);
            delete r.finish;
          })
        );
      },
    }),
    b.each(["toggle", "show", "hide"], function (e, t) {
      var r = b.fn[t];
      b.fn[t] = function (e, n, i) {
        return null == e || "boolean" == typeof e
          ? r.apply(this, arguments)
          : this.animate(lt(t, !0), e, n, i);
      };
    }),
    b.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        b.fn[e] = function (e, r, n) {
          return this.animate(t, e, r, n);
        };
      }
    ),
    (b.timers = []),
    (b.fx.tick = function () {
      var e,
        t = 0,
        r = b.timers;
      for (rt = Date.now(); t < r.length; t++)
        (e = r[t])() || r[t] !== e || r.splice(t--, 1);
      r.length || b.fx.stop(), (rt = void 0);
    }),
    (b.fx.timer = function (e) {
      b.timers.push(e), b.fx.start();
    }),
    (b.fx.interval = 13),
    (b.fx.start = function () {
      nt || ((nt = !0), at());
    }),
    (b.fx.stop = function () {
      nt = null;
    }),
    (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (b.fn.delay = function (t, r) {
      return (
        (t = (b.fx && b.fx.speeds[t]) || t),
        (r = r || "fx"),
        this.queue(r, function (r, n) {
          var i = e.setTimeout(r, t);
          n.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = g.createElement("input"),
        t = g.createElement("select").appendChild(g.createElement("option"));
      (e.type = "checkbox"),
        (p.checkOn = "" !== e.value),
        (p.optSelected = t.selected),
        ((e = g.createElement("input")).value = "t"),
        (e.type = "radio"),
        (p.radioValue = "t" === e.value);
    })();
  var dt,
    ht = b.expr.attrHandle;
  b.fn.extend({
    attr: function (e, t) {
      return B(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    },
  }),
    b.extend({
      attr: function (e, t, r) {
        var n,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? b.prop(e, t, r)
            : ((1 === o && b.isXMLDoc(e)) ||
                (i =
                  b.attrHooks[t.toLowerCase()] ||
                  (b.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== r
                ? null === r
                  ? void b.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (n = i.set(e, r, t))
                  ? n
                  : (e.setAttribute(t, r + ""), r)
                : i && "get" in i && null !== (n = i.get(e, t))
                ? n
                : null == (n = b.find.attr(e, t))
                ? void 0
                : n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!p.radioValue && "radio" === t && $(e, "input")) {
              var r = e.value;
              return e.setAttribute("type", t), r && (e.value = r), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var r,
          n = 0,
          i = t && t.match(I);
        if (i && 1 === e.nodeType) for (; (r = i[n++]); ) e.removeAttribute(r);
      },
    }),
    (dt = {
      set: function (e, t, r) {
        return !1 === t ? b.removeAttr(e, r) : e.setAttribute(r, r), r;
      },
    }),
    b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var r = ht[t] || b.find.attr;
      ht[t] = function (e, t, n) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          n ||
            ((o = ht[a]),
            (ht[a] = i),
            (i = null != r(e, t, n) ? a : null),
            (ht[a] = o)),
          i
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(I) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(I)) || [];
  }
  b.fn.extend({
    prop: function (e, t) {
      return B(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[b.propFix[e] || e];
      });
    },
  }),
    b.extend({
      prop: function (e, t, r) {
        var n,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && b.isXMLDoc(e)) ||
              ((t = b.propFix[t] || t), (i = b.propHooks[t])),
            void 0 !== r
              ? i && "set" in i && void 0 !== (n = i.set(e, r, t))
                ? n
                : (e[t] = r)
              : i && "get" in i && null !== (n = i.get(e, t))
              ? n
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = b.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (ft.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    p.optSelected ||
      (b.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    b.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        b.propFix[this.toLowerCase()] = this;
      }
    ),
    b.fn.extend({
      addClass: function (e) {
        var t,
          r,
          n,
          i,
          o,
          a,
          s,
          l = 0;
        if (f(e))
          return this.each(function (t) {
            b(this).addClass(e.call(this, t, gt(this)));
          });
        if ((t = vt(e)).length)
          for (; (r = this[l++]); )
            if (((i = gt(r)), (n = 1 === r.nodeType && " " + mt(i) + " "))) {
              for (a = 0; (o = t[a++]); )
                n.indexOf(" " + o + " ") < 0 && (n += o + " ");
              i !== (s = mt(n)) && r.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          r,
          n,
          i,
          o,
          a,
          s,
          l = 0;
        if (f(e))
          return this.each(function (t) {
            b(this).removeClass(e.call(this, t, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = vt(e)).length)
          for (; (r = this[l++]); )
            if (((i = gt(r)), (n = 1 === r.nodeType && " " + mt(i) + " "))) {
              for (a = 0; (o = t[a++]); )
                for (; n.indexOf(" " + o + " ") > -1; )
                  n = n.replace(" " + o + " ", " ");
              i !== (s = mt(n)) && r.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var r = typeof e,
          n = "string" === r || Array.isArray(e);
        return "boolean" == typeof t && n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : f(e)
          ? this.each(function (r) {
              b(this).toggleClass(e.call(this, r, gt(this), t), t);
            })
          : this.each(function () {
              var t, i, o, a;
              if (n)
                for (i = 0, o = b(this), a = vt(e); (t = a[i++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== r) ||
                  ((t = gt(this)) && Y.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : Y.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          r,
          n = 0;
        for (t = " " + e + " "; (r = this[n++]); )
          if (1 === r.nodeType && (" " + mt(gt(r)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  b.fn.extend({
    val: function (e) {
      var t,
        r,
        n,
        i = this[0];
      return arguments.length
        ? ((n = f(e)),
          this.each(function (r) {
            var i;
            1 === this.nodeType &&
              (null == (i = n ? e.call(this, r, b(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = b.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                b.valHooks[this.type] ||
                b.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (r = t.get(i, "value"))
          ? r
          : "string" == typeof (r = i.value)
          ? r.replace(yt, "")
          : null == r
          ? ""
          : r
        : void 0;
    },
  }),
    b.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = b.find.attr(e, "value");
            return null != t ? t : mt(b.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              r,
              n,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              l = a ? o + 1 : i.length;
            for (n = o < 0 ? l : a ? o : 0; n < l; n++)
              if (
                ((r = i[n]).selected || n === o) &&
                !r.disabled &&
                (!r.parentNode.disabled || !$(r.parentNode, "optgroup"))
              ) {
                if (((t = b(r).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var r, n, i = e.options, o = b.makeArray(t), a = i.length;
              a--;

            )
              ((n = i[a]).selected =
                b.inArray(b.valHooks.option.get(n), o) > -1) && (r = !0);
            return r || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    b.each(["radio", "checkbox"], function () {
      (b.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = b.inArray(b(e).val(), t) > -1);
        },
      }),
        p.checkOn ||
          (b.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (p.focusin = "onfocusin" in e);
  var xt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (e) {
      e.stopPropagation();
    };
  b.extend(b.event, {
    trigger: function (t, r, n, i) {
      var o,
        a,
        s,
        l,
        c,
        d,
        h,
        p,
        v = [n || g],
        y = u.call(t, "type") ? t.type : t,
        x = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = p = s = n = n || g),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !xt.test(y + b.event.triggered) &&
          (y.indexOf(".") > -1 &&
            ((x = y.split(".")), (y = x.shift()), x.sort()),
          (c = y.indexOf(":") < 0 && "on" + y),
          ((t = t[b.expando]
            ? t
            : new b.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = n),
          (r = null == r ? [t] : b.makeArray(r, [t])),
          (h = b.event.special[y] || {}),
          i || !h.trigger || !1 !== h.trigger.apply(n, r)))
      ) {
        if (!i && !h.noBubble && !m(n)) {
          for (
            l = h.delegateType || y, xt.test(l + y) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            v.push(a), (s = a);
          s === (n.ownerDocument || g) &&
            v.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = v[o++]) && !t.isPropagationStopped(); )
          (p = a),
            (t.type = o > 1 ? l : h.bindType || y),
            (d =
              (Y.get(a, "events") || Object.create(null))[t.type] &&
              Y.get(a, "handle")) && d.apply(a, r),
            (d = c && a[c]) &&
              d.apply &&
              q(a) &&
              ((t.result = d.apply(a, r)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          i ||
            t.isDefaultPrevented() ||
            (h._default && !1 !== h._default.apply(v.pop(), r)) ||
            !q(n) ||
            (c &&
              f(n[y]) &&
              !m(n) &&
              ((s = n[c]) && (n[c] = null),
              (b.event.triggered = y),
              t.isPropagationStopped() && p.addEventListener(y, bt),
              n[y](),
              t.isPropagationStopped() && p.removeEventListener(y, bt),
              (b.event.triggered = void 0),
              s && (n[c] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, r) {
      var n = b.extend(new b.Event(), r, { type: e, isSimulated: !0 });
      b.event.trigger(n, null, t);
    },
  }),
    b.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          b.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var r = this[0];
        if (r) return b.event.trigger(e, t, r, !0);
      },
    }),
    p.focusin ||
      b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var r = function (e) {
          b.event.simulate(t, e.target, b.event.fix(e));
        };
        b.event.special[t] = {
          setup: function () {
            var n = this.ownerDocument || this.document || this,
              i = Y.access(n, t);
            i || n.addEventListener(e, r, !0), Y.access(n, t, (i || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this.document || this,
              i = Y.access(n, t) - 1;
            i
              ? Y.access(n, t, i)
              : (n.removeEventListener(e, r, !0), Y.remove(n, t));
          },
        };
      });
  var wt = e.location,
    Dt = { guid: Date.now() },
    Ct = /\?/;
  b.parseXML = function (t) {
    var r;
    if (!t || "string" != typeof t) return null;
    try {
      r = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      r = void 0;
    }
    return (
      (r && !r.getElementsByTagName("parsererror").length) ||
        b.error("Invalid XML: " + t),
      r
    );
  };
  var St = /\[\]$/,
    At = /\r?\n/g,
    $t = /^(?:submit|button|image|reset|file)$/i,
    Mt = /^(?:input|select|textarea|keygen)/i;
  function kt(e, t, r, n) {
    var i;
    if (Array.isArray(t))
      b.each(t, function (t, i) {
        r || St.test(e)
          ? n(e, i)
          : kt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              r,
              n
            );
      });
    else if (r || "object" !== x(t)) n(e, t);
    else for (i in t) kt(e + "[" + i + "]", t[i], r, n);
  }
  (b.param = function (e, t) {
    var r,
      n = [],
      i = function (e, t) {
        var r = f(t) ? t() : t;
        n[n.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == r ? "" : r);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !b.isPlainObject(e)))
      b.each(e, function () {
        i(this.name, this.value);
      });
    else for (r in e) kt(r, e[r], t, i);
    return n.join("&");
  }),
    b.fn.extend({
      serialize: function () {
        return b.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = b.prop(this, "elements");
          return e ? b.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !b(this).is(":disabled") &&
              Mt.test(this.nodeName) &&
              !$t.test(e) &&
              (this.checked || !he.test(e))
            );
          })
          .map(function (e, t) {
            var r = b(this).val();
            return null == r
              ? null
              : Array.isArray(r)
              ? b.map(r, function (e) {
                  return { name: t.name, value: e.replace(At, "\r\n") };
                })
              : { name: t.name, value: r.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var zt = /%20/g,
    _t = /#.*$/,
    Tt = /([?&])_=[^&]*/,
    Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Et = /^(?:GET|HEAD)$/,
    It = /^\/\//,
    Ft = {},
    Ot = {},
    Rt = "*/".concat("*"),
    Nt = g.createElement("a");
  function Pt(e) {
    return function (t, r) {
      "string" != typeof t && ((r = t), (t = "*"));
      var n,
        i = 0,
        o = t.toLowerCase().match(I) || [];
      if (f(r))
        for (; (n = o[i++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(r))
            : (e[n] = e[n] || []).push(r);
    };
  }
  function Vt(e, t, r, n) {
    var i = {},
      o = e === Ot;
    function a(s) {
      var l;
      return (
        (i[s] = !0),
        b.each(e[s] || [], function (e, s) {
          var c = s(t, r, n);
          return "string" != typeof c || o || i[c]
            ? o
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), a(c), !1);
        }),
        l
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function Bt(e, t) {
    var r,
      n,
      i = b.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && b.extend(!0, e, n), e;
  }
  (Nt.href = wt.href),
    b.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            wt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": b.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Bt(Bt(e, b.ajaxSettings), t) : Bt(b.ajaxSettings, e);
      },
      ajaxPrefilter: Pt(Ft),
      ajaxTransport: Pt(Ot),
      ajax: function (t, r) {
        "object" == typeof t && ((r = t), (t = void 0)), (r = r || {});
        var n,
          i,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          h,
          p = b.ajaxSetup({}, r),
          f = p.context || p,
          m = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
          v = b.Deferred(),
          y = b.Callbacks("once memory"),
          x = p.statusCode || {},
          w = {},
          D = {},
          C = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!a)
                  for (a = {}; (t = Lt.exec(o)); )
                    a[t[1].toLowerCase() + " "] = (
                      a[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = a[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? o : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = D[e.toLowerCase()] = D[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (p.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) S.always(e[S.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || C;
              return n && n.abort(t), A(0, t), this;
            },
          };
        if (
          (v.promise(S),
          (p.url = ((t || p.url || wt.href) + "").replace(
            It,
            wt.protocol + "//"
          )),
          (p.type = r.method || r.type || p.method || p.type),
          (p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [""]),
          null == p.crossDomain)
        ) {
          l = g.createElement("a");
          try {
            (l.href = p.url),
              (l.href = l.href),
              (p.crossDomain =
                Nt.protocol + "//" + Nt.host != l.protocol + "//" + l.host);
          } catch (e) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = b.param(p.data, p.traditional)),
          Vt(Ft, p, r, S),
          c)
        )
          return S;
        for (d in ((u = b.event && p.global) &&
          0 == b.active++ &&
          b.event.trigger("ajaxStart"),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !Et.test(p.type)),
        (i = p.url.replace(_t, "")),
        p.hasContent
          ? p.data &&
            p.processData &&
            0 ===
              (p.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (p.data = p.data.replace(zt, "+"))
          : ((h = p.url.slice(i.length)),
            p.data &&
              (p.processData || "string" == typeof p.data) &&
              ((i += (Ct.test(i) ? "&" : "?") + p.data), delete p.data),
            !1 === p.cache &&
              ((i = i.replace(Tt, "$1")),
              (h = (Ct.test(i) ? "&" : "?") + "_=" + Dt.guid++ + h)),
            (p.url = i + h)),
        p.ifModified &&
          (b.lastModified[i] &&
            S.setRequestHeader("If-Modified-Since", b.lastModified[i]),
          b.etag[i] && S.setRequestHeader("If-None-Match", b.etag[i])),
        ((p.data && p.hasContent && !1 !== p.contentType) || r.contentType) &&
          S.setRequestHeader("Content-Type", p.contentType),
        S.setRequestHeader(
          "Accept",
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] +
                ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : p.accepts["*"]
        ),
        p.headers))
          S.setRequestHeader(d, p.headers[d]);
        if (p.beforeSend && (!1 === p.beforeSend.call(f, S, p) || c))
          return S.abort();
        if (
          ((C = "abort"),
          y.add(p.complete),
          S.done(p.success),
          S.fail(p.error),
          (n = Vt(Ot, p, r, S)))
        ) {
          if (((S.readyState = 1), u && m.trigger("ajaxSend", [S, p]), c))
            return S;
          p.async &&
            p.timeout > 0 &&
            (s = e.setTimeout(function () {
              S.abort("timeout");
            }, p.timeout));
          try {
            (c = !1), n.send(w, A);
          } catch (e) {
            if (c) throw e;
            A(-1, e);
          }
        } else A(-1, "No Transport");
        function A(t, r, a, l) {
          var d,
            h,
            g,
            w,
            D,
            C = r;
          c ||
            ((c = !0),
            s && e.clearTimeout(s),
            (n = void 0),
            (o = l || ""),
            (S.readyState = t > 0 ? 4 : 0),
            (d = (t >= 200 && t < 300) || 304 === t),
            a &&
              (w = (function (e, t, r) {
                for (
                  var n, i, o, a, s = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === n &&
                      (n = e.mimeType || t.getResponseHeader("Content-Type"));
                if (n)
                  for (i in s)
                    if (s[i] && s[i].test(n)) {
                      l.unshift(i);
                      break;
                    }
                if (l[0] in r) o = l[0];
                else {
                  for (i in r) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== l[0] && l.unshift(o), r[o];
              })(p, S, a)),
            !d &&
              b.inArray("script", p.dataTypes) > -1 &&
              (p.converters["text script"] = function () {}),
            (w = (function (e, t, r, n) {
              var i,
                o,
                a,
                s,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
              for (o = u.shift(); o; )
                if (
                  (e.responseFields[o] && (r[e.responseFields[o]] = t),
                  !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = u.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(a = c[l + " " + o] || c["* " + o]))
                      for (i in c)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = c[l + " " + s[0]] || c["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = c[i])
                            : !0 !== c[i] && ((o = s[0]), u.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(p, w, S, d)),
            d
              ? (p.ifModified &&
                  ((D = S.getResponseHeader("Last-Modified")) &&
                    (b.lastModified[i] = D),
                  (D = S.getResponseHeader("etag")) && (b.etag[i] = D)),
                204 === t || "HEAD" === p.type
                  ? (C = "nocontent")
                  : 304 === t
                  ? (C = "notmodified")
                  : ((C = w.state), (h = w.data), (d = !(g = w.error))))
              : ((g = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
            (S.status = t),
            (S.statusText = (r || C) + ""),
            d ? v.resolveWith(f, [h, C, S]) : v.rejectWith(f, [S, C, g]),
            S.statusCode(x),
            (x = void 0),
            u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [S, p, d ? h : g]),
            y.fireWith(f, [S, C]),
            u &&
              (m.trigger("ajaxComplete", [S, p]),
              --b.active || b.event.trigger("ajaxStop")));
        }
        return S;
      },
      getJSON: function (e, t, r) {
        return b.get(e, t, r, "json");
      },
      getScript: function (e, t) {
        return b.get(e, void 0, t, "script");
      },
    }),
    b.each(["get", "post"], function (e, t) {
      b[t] = function (e, r, n, i) {
        return (
          f(r) && ((i = i || n), (n = r), (r = void 0)),
          b.ajax(
            b.extend(
              { url: e, type: t, dataType: i, data: r, success: n },
              b.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    b.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (b._evalUrl = function (e, t, r) {
      return b.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          b.globalEval(e, t, r);
        },
      });
    }),
    b.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (f(e) && (e = e.call(this[0])),
            (t = b(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return f(e)
          ? this.each(function (t) {
              b(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = b(this),
                r = t.contents();
              r.length ? r.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = f(e);
        return this.each(function (r) {
          b(this).wrapAll(t ? e.call(this, r) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              b(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (b.expr.pseudos.hidden = function (e) {
      return !b.expr.pseudos.visible(e);
    }),
    (b.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (b.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    jt = b.ajaxSettings.xhr();
  (p.cors = !!jt && "withCredentials" in jt),
    (p.ajax = jt = !!jt),
    b.ajaxTransport(function (t) {
      var r, n;
      if (p.cors || (jt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              i["X-Requested-With"] ||
              (i["X-Requested-With"] = "XMLHttpRequest"),
            i))
              s.setRequestHeader(a, i[a]);
            (r = function (e) {
              return function () {
                r &&
                  ((r =
                    n =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Ut[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = r()),
              (n = s.onerror = s.ontimeout = r("error")),
              void 0 !== s.onabort
                ? (s.onabort = n)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        r && n();
                      });
                  }),
              (r = r("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (r) throw e;
            }
          },
          abort: function () {
            r && r();
          },
        };
    }),
    b.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    b.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return b.globalEval(e), e;
        },
      },
    }),
    b.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    b.ajaxTransport("script", function (e) {
      var t, r;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (n, i) {
            (t = b("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (r = function (e) {
                  t.remove(),
                    (r = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              g.head.appendChild(t[0]);
          },
          abort: function () {
            r && r();
          },
        };
    });
  var Gt,
    Ht = [],
    qt = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Ht.pop() || b.expando + "_" + Dt.guid++;
      return (this[e] = !0), e;
    },
  }),
    b.ajaxPrefilter("json jsonp", function (t, r, n) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              qt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(qt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || b.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          n.always(function () {
            void 0 === o ? b(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = r.jsonpCallback), Ht.push(i)),
              a && f(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (p.createHTMLDocument =
      (((Gt = g.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Gt.childNodes.length)),
    (b.parseHTML = function (e, t, r) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((r = t), (t = !1)),
          t ||
            (p.createHTMLDocument
              ? (((n = (t =
                  g.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = g.location.href),
                t.head.appendChild(n))
              : (t = g)),
          (o = !r && []),
          (i = M.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && b(o).remove(),
              b.merge([], i.childNodes)));
      var n, i, o;
    }),
    (b.fn.load = function (e, t, r) {
      var n,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((n = mt(e.slice(s))), (e = e.slice(0, s))),
        f(t)
          ? ((r = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          b
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(n ? b("<div>").append(b.parseHTML(e)).find(n) : e);
            })
            .always(
              r &&
                function (e, t) {
                  a.each(function () {
                    r.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (b.expr.pseudos.animated = function (e) {
      return b.grep(b.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (b.offset = {
      setOffset: function (e, t, r) {
        var n,
          i,
          o,
          a,
          s,
          l,
          c = b.css(e, "position"),
          u = b(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (s = u.offset()),
          (o = b.css(e, "top")),
          (l = b.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1
            ? ((a = (n = u.position()).top), (i = n.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
          f(t) && (t = t.call(e, r, b.extend({}, s))),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, d)
            : ("number" == typeof d.top && (d.top += "px"),
              "number" == typeof d.left && (d.left += "px"),
              u.css(d));
      },
    }),
    b.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                b.offset.setOffset(this, e, t);
              });
        var t,
          r,
          n = this[0];
        return n
          ? n.getClientRects().length
            ? ((t = n.getBoundingClientRect()),
              (r = n.ownerDocument.defaultView),
              { top: t.top + r.pageYOffset, left: t.left + r.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            r,
            n = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === b.css(n, "position")) t = n.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                r = n.ownerDocument,
                e = n.offsetParent || r.documentElement;
              e &&
              (e === r.body || e === r.documentElement) &&
              "static" === b.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== n &&
              1 === e.nodeType &&
              (((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0)),
              (i.left += b.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - b.css(n, "marginTop", !0),
            left: t.left - i.left - b.css(n, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === b.css(e, "position");

          )
            e = e.offsetParent;
          return e || re;
        });
      },
    }),
    b.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var r = "pageYOffset" === t;
        b.fn[e] = function (n) {
          return B(
            this,
            function (e, n, i) {
              var o;
              if (
                (m(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[n];
              o
                ? o.scrollTo(r ? o.pageXOffset : i, r ? i : o.pageYOffset)
                : (e[n] = i);
            },
            e,
            n,
            arguments.length
          );
        };
      }
    ),
    b.each(["top", "left"], function (e, t) {
      b.cssHooks[t] = je(p.pixelPosition, function (e, r) {
        if (r)
          return (r = Ue(e, t)), Ne.test(r) ? b(e).position()[t] + "px" : r;
      });
    }),
    b.each({ Height: "height", Width: "width" }, function (e, t) {
      b.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (r, n) {
          b.fn[n] = function (i, o) {
            var a = arguments.length && (r || "boolean" != typeof i),
              s = r || (!0 === i || !0 === o ? "margin" : "border");
            return B(
              this,
              function (t, r, i) {
                var o;
                return m(t)
                  ? 0 === n.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? b.css(t, r, s)
                  : b.style(t, r, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    b.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        b.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    b.fn.extend({
      bind: function (e, t, r) {
        return this.on(e, null, t, r);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, r, n) {
        return this.on(t, e, r, n);
      },
      undelegate: function (e, t, r) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", r);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    b.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        b.fn[t] = function (e, r) {
          return arguments.length > 0
            ? this.on(t, null, e, r)
            : this.trigger(t);
        };
      }
    );
  var Wt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (b.proxy = function (e, t) {
    var r, n, o;
    if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), f(e)))
      return (
        (n = i.call(arguments, 2)),
        ((o = function () {
          return e.apply(t || this, n.concat(i.call(arguments)));
        }).guid = e.guid =
          e.guid || b.guid++),
        o
      );
  }),
    (b.holdReady = function (e) {
      e ? b.readyWait++ : b.ready(!0);
    }),
    (b.isArray = Array.isArray),
    (b.parseJSON = JSON.parse),
    (b.nodeName = $),
    (b.isFunction = f),
    (b.isWindow = m),
    (b.camelCase = H),
    (b.type = x),
    (b.now = Date.now),
    (b.isNumeric = function (e) {
      var t = b.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (b.trim = function (e) {
      return null == e ? "" : (e + "").replace(Wt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return b;
      });
  var Yt = e.jQuery,
    Xt = e.$;
  return (
    (b.noConflict = function (t) {
      return e.$ === b && (e.$ = Xt), t && e.jQuery === b && (e.jQuery = Yt), b;
    }),
    void 0 === t && (e.jQuery = e.$ = b),
    b
  );
}),
  (function (e, t) {
    !(function (e) {
      "use strict";
      function t(e, t, r) {
        e.byteLength;
        for (var n = 0, i = r.length; n < i; n++) {
          var o = r.charCodeAt(n);
          if (o < 128) e.setUint8(t++, ((o >>> 0) & 127) | 0);
          else if (o < 2048)
            e.setUint8(t++, ((o >>> 6) & 31) | 192),
              e.setUint8(t++, ((o >>> 0) & 63) | 128);
          else if (o < 65536)
            e.setUint8(t++, ((o >>> 12) & 15) | 224),
              e.setUint8(t++, ((o >>> 6) & 63) | 128),
              e.setUint8(t++, ((o >>> 0) & 63) | 128);
          else {
            if (!(o < 1114112)) throw new Error("bad codepoint " + o);
            e.setUint8(t++, ((o >>> 18) & 7) | 240),
              e.setUint8(t++, ((o >>> 12) & 63) | 128),
              e.setUint8(t++, ((o >>> 6) & 63) | 128),
              e.setUint8(t++, ((o >>> 0) & 63) | 128);
          }
        }
      }
      function r(e) {
        for (var t = 0, r = 0, n = e.length; r < n; r++) {
          var i = e.charCodeAt(r);
          if (i < 128) t += 1;
          else if (i < 2048) t += 2;
          else if (i < 65536) t += 3;
          else {
            if (!(i < 1114112)) throw new Error("bad codepoint " + i);
            t += 4;
          }
        }
        return t;
      }
      function n(e) {
        var n = new ArrayBuffer(
          (function e(t) {
            var n = typeof t;
            if ("string" === n) {
              if ((i = r(t)) < 32) return 1 + i;
              if (i < 256) return 2 + i;
              if (i < 65536) return 3 + i;
              if (i < 4294967296) return 5 + i;
            }
            if (t instanceof Uint8Array) {
              if ((i = t.byteLength) < 256) return 2 + i;
              if (i < 65536) return 3 + i;
              if (i < 4294967296) return 5 + i;
            }
            if ("number" === n) {
              if (Math.floor(t) !== t) return 9;
              if (t >= 0) {
                if (t < 128) return 1;
                if (t < 256) return 2;
                if (t < 65536) return 3;
                if (t < 4294967296) return 5;
                throw new Error("Number too big 0x" + t.toString(16));
              }
              if (t >= -32) return 1;
              if (t >= -128) return 2;
              if (t >= -32768) return 3;
              if (t >= -2147483648) return 5;
              throw new Error(
                "Number too small -0x" + t.toString(16).substr(1)
              );
            }
            if ("boolean" === n || null === t) return 1;
            if ("object" === n) {
              var i,
                o = 0;
              if (Array.isArray(t)) {
                i = t.length;
                for (var a = 0; a < i; a++) o += e(t[a]);
              } else {
                var s = Object.keys(t);
                for (i = s.length, a = 0; a < i; a++) {
                  var l = s[a];
                  o += e(l) + e(t[l]);
                }
              }
              if (i < 16) return 1 + o;
              if (i < 65536) return 3 + o;
              if (i < 4294967296) return 5 + o;
              throw new Error("Array or object too long 0x" + i.toString(16));
            }
            throw new Error("Unknown type " + n);
          })(e)
        );
        return (
          (function e(n, i, o) {
            var a = typeof n;
            if ("string" === a) {
              if ((s = r(n)) < 32)
                return i.setUint8(o, 160 | s), t(i, o + 1, n), 1 + s;
              if (s < 256)
                return (
                  i.setUint8(o, 217),
                  i.setUint8(o + 1, s),
                  t(i, o + 2, n),
                  2 + s
                );
              if (s < 65536)
                return (
                  i.setUint8(o, 218),
                  i.setUint16(o + 1, s),
                  t(i, o + 3, n),
                  3 + s
                );
              if (s < 4294967296)
                return (
                  i.setUint8(o, 219),
                  i.setUint32(o + 1, s),
                  t(i, o + 5, n),
                  5 + s
                );
            }
            if (n instanceof Uint8Array) {
              var s = n.byteLength,
                l = new Uint8Array(i.buffer);
              if (s < 256)
                return (
                  i.setUint8(o, 196),
                  i.setUint8(o + 1, s),
                  l.set(n, o + 2),
                  2 + s
                );
              if (s < 65536)
                return (
                  i.setUint8(o, 197),
                  i.setUint16(o + 1, s),
                  l.set(n, o + 3),
                  3 + s
                );
              if (s < 4294967296)
                return (
                  i.setUint8(o, 198),
                  i.setUint32(o + 1, s),
                  l.set(n, o + 5),
                  5 + s
                );
            }
            if ("number" === a) {
              if (!isFinite(n)) throw new Error("Number not finite: " + n);
              if (Math.floor(n) !== n)
                return i.setUint8(o, 203), i.setFloat64(o + 1, n), 9;
              if (n >= 0) {
                if (n < 128) return i.setUint8(o, n), 1;
                if (n < 256) return i.setUint8(o, 204), i.setUint8(o + 1, n), 2;
                if (n < 65536)
                  return i.setUint8(o, 205), i.setUint16(o + 1, n), 3;
                if (n < 4294967296)
                  return i.setUint8(o, 206), i.setUint32(o + 1, n), 5;
                throw new Error("Number too big 0x" + n.toString(16));
              }
              if (n >= -32) return i.setInt8(o, n), 1;
              if (n >= -128) return i.setUint8(o, 208), i.setInt8(o + 1, n), 2;
              if (n >= -32768)
                return i.setUint8(o, 209), i.setInt16(o + 1, n), 3;
              if (n >= -2147483648)
                return i.setUint8(o, 210), i.setInt32(o + 1, n), 5;
              throw new Error(
                "Number too small -0x" + (-n).toString(16).substr(1)
              );
            }
            if (null === n) return i.setUint8(o, 192), 1;
            if ("boolean" === a) return i.setUint8(o, n ? 195 : 194), 1;
            if ("object" === a) {
              var c = 0,
                u = Array.isArray(n);
              if (u) s = n.length;
              else {
                var d = Object.keys(n);
                s = d.length;
              }
              if (
                (s < 16
                  ? (i.setUint8(o, s | (u ? 144 : 128)), (c = 1))
                  : s < 65536
                  ? (i.setUint8(o, u ? 220 : 222),
                    i.setUint16(o + 1, s),
                    (c = 3))
                  : s < 4294967296 &&
                    (i.setUint8(o, u ? 221 : 223),
                    i.setUint32(o + 1, s),
                    (c = 5)),
                u)
              )
                for (var h = 0; h < s; h++) c += e(n[h], i, o + c);
              else
                for (h = 0; h < s; h++) {
                  var p = d[h];
                  (c += e(p, i, o + c)), (c += e(n[p], i, o + c));
                }
              return c;
            }
            throw new Error("Unknown type " + a);
          })(e, new DataView(n), 0),
          new Uint8Array(n)
        );
      }
      var i = [
          "mmtfVersion",
          "mmtfProducer",
          "unitCell",
          "spaceGroup",
          "structureId",
          "title",
          "depositionDate",
          "releaseDate",
          "experimentalMethods",
          "resolution",
          "rFree",
          "rWork",
          "bioAssemblyList",
          "ncsOperatorList",
          "entityList",
          "groupList",
          "numBonds",
          "numAtoms",
          "numGroups",
          "numChains",
          "numModels",
          "groupsPerChain",
          "chainsPerModel",
        ],
        o = i.concat([
          "xCoordList",
          "yCoordList",
          "zCoordList",
          "groupIdList",
          "groupTypeList",
          "chainIdList",
          "bFactorList",
          "atomIdList",
          "altLocList",
          "occupancyList",
          "secStructList",
          "insCodeList",
          "sequenceIndexList",
          "chainNameList",
          "bondAtomList",
          "bondOrderList",
        ]);
      function a(e, t, r) {
        return t
          ? new e(t.buffer, t.byteOffset, t.byteLength / (r || 1))
          : void 0;
      }
      function s(e) {
        return a(DataView, e);
      }
      function l(e) {
        return a(Uint8Array, e);
      }
      function c(e) {
        return a(Int8Array, e);
      }
      function u(e) {
        return a(Int32Array, e, 4);
      }
      function d(e, t) {
        var r = e.length / 2;
        t || (t = new Int16Array(r));
        for (var n = 0, i = 0; n < r; ++n, i += 2)
          t[n] = (e[i] << 8) ^ (e[i + 1] << 0);
        return t;
      }
      function h(e, t) {
        var r = e.length / 4;
        t || (t = new Int32Array(r));
        for (var n = 0, i = 0; n < r; ++n, i += 4)
          t[n] =
            (e[i] << 24) ^ (e[i + 1] << 16) ^ (e[i + 2] << 8) ^ (e[i + 3] << 0);
        return t;
      }
      function p(e, t) {
        var r = e.length;
        t || (t = new Uint8Array(4 * r));
        for (var n = s(t), i = 0; i < r; ++i) n.setInt32(4 * i, e[i]);
        return l(t);
      }
      function f(e, t, r) {
        var n = e.length,
          i = 1 / t;
        r || (r = new Float32Array(n));
        for (var o = 0; o < n; ++o) r[o] = e[o] * i;
        return r;
      }
      function m(e, t, r) {
        var n = e.length;
        r || (r = new Int32Array(n));
        for (var i = 0; i < n; ++i) r[i] = Math.round(e[i] * t);
        return r;
      }
      function g(e, t) {
        var r, n;
        if (!t) {
          var i = 0;
          for (r = 0, n = e.length; r < n; r += 2) i += e[r + 1];
          t = new e.constructor(i);
        }
        var o = 0;
        for (r = 0, n = e.length; r < n; r += 2)
          for (var a = e[r], s = e[r + 1], l = 0; l < s; ++l) (t[o] = a), ++o;
        return t;
      }
      function v(e) {
        if (0 === e.length) return new Int32Array();
        var t,
          r,
          n = 2;
        for (t = 1, r = e.length; t < r; ++t) e[t - 1] !== e[t] && (n += 2);
        var i = new Int32Array(n),
          o = 0,
          a = 1;
        for (t = 1, r = e.length; t < r; ++t)
          e[t - 1] !== e[t]
            ? ((i[o] = e[t - 1]), (i[o + 1] = a), (a = 1), (o += 2))
            : ++a;
        return (i[o] = e[e.length - 1]), (i[o + 1] = a), i;
      }
      function y(e, t) {
        var r = e.length;
        t || (t = new e.constructor(r)), r && (t[0] = e[0]);
        for (var n = 1; n < r; ++n) t[n] = e[n] + t[n - 1];
        return t;
      }
      function x(e, t) {
        var r = e.length;
        t || (t = new e.constructor(r)), (t[0] = e[0]);
        for (var n = 1; n < r; ++n) t[n] = e[n] - e[n - 1];
        return t;
      }
      function b(e, t) {
        var r,
          n,
          i = e instanceof Int8Array ? 127 : 32767,
          o = -i - 1,
          a = e.length;
        if (!t) {
          var s = 0;
          for (r = 0; r < a; ++r) e[r] < i && e[r] > o && ++s;
          t = new Int32Array(s);
        }
        for (r = 0, n = 0; r < a; ) {
          for (var l = 0; e[r] === i || e[r] === o; ) (l += e[r]), ++r;
          (l += e[r]), ++r, (t[n] = l), ++n;
        }
        return t;
      }
      function w(e, t, r) {
        return f(b(e, u(r)), t, r);
      }
      function D(e, t, r) {
        var n = b(e, u(r));
        return (function (e, t, r) {
          return f(y(e, u(r)), t, r);
        })(n, t, a(Float32Array, n, 4));
      }
      function C(e, t, r) {
        return (function (e, t) {
          var r,
            n = t ? 127 : 32767,
            i = -n - 1,
            o = e.length,
            a = 0;
          for (r = 0; r < o; ++r) {
            0 === (c = e[r])
              ? ++a
              : (a +=
                  c === n || c === i
                    ? 2
                    : c > 0
                    ? Math.ceil(c / n)
                    : Math.ceil(c / i));
          }
          var s = t ? new Int8Array(a) : new Int16Array(a),
            l = 0;
          for (r = 0; r < o; ++r) {
            var c;
            if ((c = e[r]) >= 0) for (; c >= n; ) (s[l] = n), ++l, (c -= n);
            else for (; c <= i; ) (s[l] = i), ++l, (c -= i);
            (s[l] = c), ++l;
          }
          return s;
        })(
          (function (e, t, r) {
            return x(m(e, t), r);
          })(e, t),
          r
        );
      }
      function S(e, t, r, n) {
        var i = new ArrayBuffer(12 + n.byteLength),
          o = new Uint8Array(i),
          a = new DataView(i);
        return (
          a.setInt32(0, e), a.setInt32(4, t), r && o.set(r, 8), o.set(n, 12), o
        );
      }
      function A(e) {
        return S(2, e.length, void 0, l(e));
      }
      function $(e) {
        return S(4, e.length, void 0, p(e));
      }
      function M(e, t) {
        return S(5, e.length / t, p([t]), l(e));
      }
      function k(e) {
        return S(6, e.length, void 0, p(v(e)));
      }
      function z(e) {
        return S(8, e.length, void 0, p(v(x(e))));
      }
      function _(e, t) {
        return S(
          9,
          e.length,
          p([t]),
          p(
            (function (e, t) {
              return v(m(e, t));
            })(e, t)
          )
        );
      }
      function T(e, t) {
        return S(
          10,
          e.length,
          p([t]),
          (function (e, t) {
            var r = e.length;
            t || (t = new Uint8Array(2 * r));
            for (var n = s(t), i = 0; i < r; ++i) n.setInt16(2 * i, e[i]);
            return l(t);
          })(C(e, t))
        );
      }
      function L(e) {
        var t = {};
        return (
          i.forEach(function (r) {
            void 0 !== e[r] && (t[r] = e[r]);
          }),
          e.bondAtomList && (t.bondAtomList = $(e.bondAtomList)),
          e.bondOrderList && (t.bondOrderList = A(e.bondOrderList)),
          (t.xCoordList = T(e.xCoordList, 1e3)),
          (t.yCoordList = T(e.yCoordList, 1e3)),
          (t.zCoordList = T(e.zCoordList, 1e3)),
          e.bFactorList && (t.bFactorList = T(e.bFactorList, 100)),
          e.atomIdList && (t.atomIdList = z(e.atomIdList)),
          e.altLocList && (t.altLocList = k(e.altLocList)),
          e.occupancyList && (t.occupancyList = _(e.occupancyList, 100)),
          (t.groupIdList = z(e.groupIdList)),
          (t.groupTypeList = $(e.groupTypeList)),
          e.secStructList && (t.secStructList = A(e.secStructList)),
          e.insCodeList && (t.insCodeList = k(e.insCodeList)),
          e.sequenceIndexList && (t.sequenceIndexList = z(e.sequenceIndexList)),
          (t.chainIdList = M(e.chainIdList, 4)),
          e.chainNameList && (t.chainNameList = M(e.chainNameList, 4)),
          t
        );
      }
      function E(e) {
        var t = 0,
          r = new DataView(e.buffer);
        function n(e) {
          for (var t = {}, r = 0; r < e; r++) {
            t[s()] = s();
          }
          return t;
        }
        function i(r) {
          var n = e.subarray(t, t + r);
          return (t += r), n;
        }
        function o(r) {
          var n = e.subarray(t, t + r);
          t += r;
          if (r > 65535) {
            for (var i = [], o = 0; o < n.length; o += 65535)
              i.push(String.fromCharCode.apply(null, n.subarray(o, o + 65535)));
            return i.join("");
          }
          return String.fromCharCode.apply(null, n);
        }
        function a(e) {
          for (var t = new Array(e), r = 0; r < e; r++) t[r] = s();
          return t;
        }
        function s() {
          var s,
            l,
            c = e[t];
          if (0 == (128 & c)) return t++, c;
          if (128 == (240 & c)) return t++, n((l = 15 & c));
          if (144 == (240 & c)) return t++, a((l = 15 & c));
          if (160 == (224 & c)) return t++, o((l = 31 & c));
          if (224 == (224 & c)) return (s = r.getInt8(t)), t++, s;
          switch (c) {
            case 192:
              return t++, null;
            case 194:
              return t++, !1;
            case 195:
              return t++, !0;
            case 196:
              return (l = r.getUint8(t + 1)), (t += 2), i(l);
            case 197:
              return (l = r.getUint16(t + 1)), (t += 3), i(l);
            case 198:
              return (l = r.getUint32(t + 1)), (t += 5), i(l);
            case 202:
              return (s = r.getFloat32(t + 1)), (t += 5), s;
            case 203:
              return (s = r.getFloat64(t + 1)), (t += 9), s;
            case 204:
              return (s = e[t + 1]), (t += 2), s;
            case 205:
              return (s = r.getUint16(t + 1)), (t += 3), s;
            case 206:
              return (s = r.getUint32(t + 1)), (t += 5), s;
            case 208:
              return (s = r.getInt8(t + 1)), (t += 2), s;
            case 209:
              return (s = r.getInt16(t + 1)), (t += 3), s;
            case 210:
              return (s = r.getInt32(t + 1)), (t += 5), s;
            case 217:
              return (l = r.getUint8(t + 1)), (t += 2), o(l);
            case 218:
              return (l = r.getUint16(t + 1)), (t += 3), o(l);
            case 219:
              return (l = r.getUint32(t + 1)), (t += 5), o(l);
            case 220:
              return (l = r.getUint16(t + 1)), (t += 3), a(l);
            case 221:
              return (l = r.getUint32(t + 1)), (t += 5), a(l);
            case 222:
              return (l = r.getUint16(t + 1)), (t += 3), n(l);
            case 223:
              return (l = r.getUint32(t + 1)), (t += 5), n(l);
          }
          throw new Error("Unknown type 0x" + c.toString(16));
        }
        return s();
      }
      function I(e, t, r, n) {
        switch (e) {
          case 1:
            return (function (e, t) {
              var r = e.length;
              t || (t = new Float32Array(r / 4));
              for (
                var n = s(t), i = s(e), o = 0, a = 0, l = r / 4;
                o < l;
                ++o, a += 4
              )
                n.setFloat32(a, i.getFloat32(a), !0);
              return t;
            })(t);
          case 2:
            return c(t);
          case 3:
            return d(t);
          case 4:
            return h(t);
          case 5:
            return l(t);
          case 6:
            return g(h(t), new Uint8Array(r));
          case 7:
            return g(h(t));
          case 8:
            return y(g(h(t)), i);
          case 9:
            return (function (e, t, r) {
              return f(g(e, u(r)), t, r);
            })(h(t), h(n)[0]);
          case 10:
            return D(d(t), h(n)[0]);
          case 11:
            return f(d(t), h(n)[0]);
          case 12:
            return w(d(t), h(n)[0]);
          case 13:
            return w(c(t), h(n)[0]);
          case 14:
            return b(d(t));
          case 15:
            return b(c(t));
        }
        var i;
      }
      function F(e, t) {
        var r = (t = t || {}).ignoreFields,
          n = {};
        return (
          o.forEach(function (t) {
            var i,
              o,
              a,
              l,
              c,
              u = !!r && -1 !== r.indexOf(t),
              d = e[t];
            u ||
              void 0 === d ||
              (d instanceof Uint8Array
                ? (n[t] = I.apply(
                    null,
                    ((o = s((i = d))),
                    (a = o.getInt32(0)),
                    (l = o.getInt32(4)),
                    (c = i.subarray(8, 12)),
                    [a, (i = i.subarray(12)), l, c])
                  ))
                : (n[t] = d));
          }),
          n
        );
      }
      function O(e) {
        return String.fromCharCode.apply(null, e).replace(/\0/g, "");
      }
      var R = "http://mmtf.rcsb.org/v1.0/",
        N = R + "full/",
        P = R + "reduced/";
      function V(e, t) {
        return (
          e instanceof ArrayBuffer && (e = new Uint8Array(e)),
          F(e instanceof Uint8Array ? E(e) : e, t)
        );
      }
      function B(e, t, r, n) {
        var i = new XMLHttpRequest();
        i.addEventListener(
          "load",
          function () {
            try {
              var e = V(i.response);
              r(e);
            } catch (e) {
              n(e);
            }
          },
          !0
        ),
          i.addEventListener("error", n, !0),
          (i.responseType = "arraybuffer"),
          i.open("GET", t + e.toUpperCase()),
          i.send();
      }
      (e.encode = function (e) {
        return n(L(e));
      }),
        (e.decode = V),
        (e.traverse = function (e, t, r) {
          var n,
            i,
            o,
            a,
            s,
            l,
            c = (r = r || {}).firstModelOnly,
            u = t.onModel,
            d = t.onChain,
            h = t.onGroup,
            p = t.onAtom,
            f = t.onBond,
            m = 0,
            g = 0,
            v = 0,
            y = 0,
            x = 0,
            b = -1,
            w = e.chainNameList,
            D = e.secStructList,
            C = e.insCodeList,
            S = e.sequenceIndexList,
            A = e.atomIdList,
            $ = e.bFactorList,
            M = e.altLocList,
            k = e.occupancyList,
            z = e.bondAtomList,
            _ = e.bondOrderList;
          for (
            n = 0, i = e.chainsPerModel.length;
            n < i && !(c && m > 0);
            ++n
          ) {
            var T = e.chainsPerModel[m];
            for (u && u({ chainCount: T, modelIndex: m }), o = 0; o < T; ++o) {
              var L = e.groupsPerChain[g];
              if (d) {
                var E = O(e.chainIdList.subarray(4 * g, 4 * g + 4)),
                  I = null;
                w && (I = O(w.subarray(4 * g, 4 * g + 4))),
                  d({
                    groupCount: L,
                    chainIndex: g,
                    modelIndex: m,
                    chainId: E,
                    chainName: I,
                  });
              }
              for (a = 0; a < L; ++a) {
                var F = e.groupList[e.groupTypeList[v]],
                  R = F.atomNameList.length;
                if (h) {
                  var N = null;
                  D && (N = D[v]);
                  var P = null;
                  e.insCodeList && (P = String.fromCharCode(C[v]));
                  var V = null;
                  S && (V = S[v]),
                    h({
                      atomCount: R,
                      groupIndex: v,
                      chainIndex: g,
                      modelIndex: m,
                      groupId: e.groupIdList[v],
                      groupType: e.groupTypeList[v],
                      groupName: F.groupName,
                      singleLetterCode: F.singleLetterCode,
                      chemCompType: F.chemCompType,
                      secStruct: N,
                      insCode: P,
                      sequenceIndex: V,
                    });
                }
                for (s = 0; s < R; ++s) {
                  if (p) {
                    var B = null;
                    A && (B = A[y]);
                    var U = null;
                    $ && (U = $[y]);
                    var j = null;
                    M && (j = String.fromCharCode(M[y]));
                    var G = null;
                    k && (G = k[y]),
                      p({
                        atomIndex: y,
                        groupIndex: v,
                        chainIndex: g,
                        modelIndex: m,
                        atomId: B,
                        element: F.elementList[s],
                        atomName: F.atomNameList[s],
                        formalCharge: F.formalChargeList[s],
                        xCoord: e.xCoordList[y],
                        yCoord: e.yCoordList[y],
                        zCoord: e.zCoordList[y],
                        bFactor: U,
                        altLoc: j,
                        occupancy: G,
                      });
                  }
                  y += 1;
                }
                if (f) {
                  var H = F.bondAtomList;
                  for (s = 0, l = F.bondOrderList.length; s < l; ++s)
                    f({
                      atomIndex1: y - R + H[2 * s],
                      atomIndex2: y - R + H[2 * s + 1],
                      bondOrder: F.bondOrderList[s],
                    });
                }
                v += 1;
              }
              g += 1;
            }
            if (((x = b + 1), (b = y - 1), f && z))
              for (s = 0, l = z.length; s < l; s += 2) {
                var q = z[s],
                  W = z[s + 1];
                ((q >= x && q <= b) || (W >= x && W <= b)) &&
                  f({
                    atomIndex1: q,
                    atomIndex2: W,
                    bondOrder: _ ? _[s / 2] : null,
                  });
              }
            m += 1;
          }
        }),
        (e.fetch = function (e, t, r) {
          B(e, N, t, r);
        }),
        (e.fetchReduced = function (e, t, r) {
          B(e, P, t, r);
        }),
        (e.version = "v1.0.0"),
        (e.fetchUrl = N),
        (e.fetchReducedUrl = P),
        (e.encodeMsgpack = n),
        (e.encodeMmtf = L),
        (e.decodeMsgpack = E),
        (e.decodeMmtf = F),
        Object.defineProperty(e, "__esModule", { value: !0 });
    })((e.MMTF = e.MMTF || {}));
  })(this),
  (function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
      ("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).pako = e();
    }
  })(function () {
    return (function e(t, r, n) {
      function i(a, s) {
        if (!r[a]) {
          if (!t[a]) {
            var l = "function" == typeof require && require;
            if (!s && l) return l(a, !0);
            if (o) return o(a, !0);
            var c = new Error("Cannot find module '" + a + "'");
            throw ((c.code = "MODULE_NOT_FOUND"), c);
          }
          var u = (r[a] = { exports: {} });
          t[a][0].call(
            u.exports,
            function (e) {
              return i(t[a][1][e] || e);
            },
            u,
            u.exports,
            e,
            t,
            r,
            n
          );
        }
        return r[a].exports;
      }
      for (
        var o = "function" == typeof require && require, a = 0;
        a < n.length;
        a++
      )
        i(n[a]);
      return i;
    })(
      {
        1: [
          function (e, t, r) {
            "use strict";
            var n =
              "undefined" != typeof Uint8Array &&
              "undefined" != typeof Uint16Array &&
              "undefined" != typeof Int32Array;
            function i(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }
            (r.assign = function (e) {
              for (
                var t = Array.prototype.slice.call(arguments, 1);
                t.length;

              ) {
                var r = t.shift();
                if (r) {
                  if ("object" != typeof r)
                    throw new TypeError(r + "must be non-object");
                  for (var n in r) i(r, n) && (e[n] = r[n]);
                }
              }
              return e;
            }),
              (r.shrinkBuf = function (e, t) {
                return e.length === t
                  ? e
                  : e.subarray
                  ? e.subarray(0, t)
                  : ((e.length = t), e);
              });
            var o = {
                arraySet: function (e, t, r, n, i) {
                  if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);
                  else for (var o = 0; o < n; o++) e[i + o] = t[r + o];
                },
                flattenChunks: function (e) {
                  var t, r, n, i, o, a;
                  for (n = 0, t = 0, r = e.length; t < r; t++) n += e[t].length;
                  for (
                    a = new Uint8Array(n), i = 0, t = 0, r = e.length;
                    t < r;
                    t++
                  )
                    (o = e[t]), a.set(o, i), (i += o.length);
                  return a;
                },
              },
              a = {
                arraySet: function (e, t, r, n, i) {
                  for (var o = 0; o < n; o++) e[i + o] = t[r + o];
                },
                flattenChunks: function (e) {
                  return [].concat.apply([], e);
                },
              };
            (r.setTyped = function (e) {
              e
                ? ((r.Buf8 = Uint8Array),
                  (r.Buf16 = Uint16Array),
                  (r.Buf32 = Int32Array),
                  r.assign(r, o))
                : ((r.Buf8 = Array),
                  (r.Buf16 = Array),
                  (r.Buf32 = Array),
                  r.assign(r, a));
            }),
              r.setTyped(n);
          },
          {},
        ],
        2: [
          function (e, t, r) {
            "use strict";
            var n = e("./common"),
              i = !0,
              o = !0;
            try {
              String.fromCharCode.apply(null, [0]);
            } catch (e) {
              i = !1;
            }
            try {
              String.fromCharCode.apply(null, new Uint8Array(1));
            } catch (e) {
              o = !1;
            }
            for (var a = new n.Buf8(256), s = 0; s < 256; s++)
              a[s] =
                s >= 252
                  ? 6
                  : s >= 248
                  ? 5
                  : s >= 240
                  ? 4
                  : s >= 224
                  ? 3
                  : s >= 192
                  ? 2
                  : 1;
            function l(e, t) {
              if (t < 65534 && ((e.subarray && o) || (!e.subarray && i)))
                return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
              for (var r = "", a = 0; a < t; a++)
                r += String.fromCharCode(e[a]);
              return r;
            }
            (a[254] = a[254] = 1),
              (r.string2buf = function (e) {
                var t,
                  r,
                  i,
                  o,
                  a,
                  s = e.length,
                  l = 0;
                for (o = 0; o < s; o++)
                  55296 == (64512 & (r = e.charCodeAt(o))) &&
                    o + 1 < s &&
                    56320 == (64512 & (i = e.charCodeAt(o + 1))) &&
                    ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), o++),
                    (l += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
                for (t = new n.Buf8(l), a = 0, o = 0; a < l; o++)
                  55296 == (64512 & (r = e.charCodeAt(o))) &&
                    o + 1 < s &&
                    56320 == (64512 & (i = e.charCodeAt(o + 1))) &&
                    ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), o++),
                    r < 128
                      ? (t[a++] = r)
                      : r < 2048
                      ? ((t[a++] = 192 | (r >>> 6)), (t[a++] = 128 | (63 & r)))
                      : r < 65536
                      ? ((t[a++] = 224 | (r >>> 12)),
                        (t[a++] = 128 | ((r >>> 6) & 63)),
                        (t[a++] = 128 | (63 & r)))
                      : ((t[a++] = 240 | (r >>> 18)),
                        (t[a++] = 128 | ((r >>> 12) & 63)),
                        (t[a++] = 128 | ((r >>> 6) & 63)),
                        (t[a++] = 128 | (63 & r)));
                return t;
              }),
              (r.buf2binstring = function (e) {
                return l(e, e.length);
              }),
              (r.binstring2buf = function (e) {
                for (
                  var t = new n.Buf8(e.length), r = 0, i = t.length;
                  r < i;
                  r++
                )
                  t[r] = e.charCodeAt(r);
                return t;
              }),
              (r.buf2string = function (e, t) {
                var r,
                  n,
                  i,
                  o,
                  s = t || e.length,
                  c = new Array(2 * s);
                for (n = 0, r = 0; r < s; )
                  if ((i = e[r++]) < 128) c[n++] = i;
                  else if ((o = a[i]) > 4) (c[n++] = 65533), (r += o - 1);
                  else {
                    for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < s; )
                      (i = (i << 6) | (63 & e[r++])), o--;
                    o > 1
                      ? (c[n++] = 65533)
                      : i < 65536
                      ? (c[n++] = i)
                      : ((i -= 65536),
                        (c[n++] = 55296 | ((i >> 10) & 1023)),
                        (c[n++] = 56320 | (1023 & i)));
                  }
                return l(c, n);
              }),
              (r.utf8border = function (e, t) {
                var r;
                for (
                  (t = t || e.length) > e.length && (t = e.length), r = t - 1;
                  r >= 0 && 128 == (192 & e[r]);

                )
                  r--;
                return r < 0 ? t : 0 === r ? t : r + a[e[r]] > t ? r : t;
              });
          },
          { "./common": 1 },
        ],
        3: [
          function (e, t, r) {
            "use strict";
            t.exports = function (e, t, r, n) {
              for (
                var i = (65535 & e) | 0, o = ((e >>> 16) & 65535) | 0, a = 0;
                0 !== r;

              ) {
                r -= a = r > 2e3 ? 2e3 : r;
                do {
                  o = (o + (i = (i + t[n++]) | 0)) | 0;
                } while (--a);
                (i %= 65521), (o %= 65521);
              }
              return i | (o << 16) | 0;
            };
          },
          {},
        ],
        4: [
          function (e, t, r) {
            "use strict";
            t.exports = {
              Z_NO_FLUSH: 0,
              Z_PARTIAL_FLUSH: 1,
              Z_SYNC_FLUSH: 2,
              Z_FULL_FLUSH: 3,
              Z_FINISH: 4,
              Z_BLOCK: 5,
              Z_TREES: 6,
              Z_OK: 0,
              Z_STREAM_END: 1,
              Z_NEED_DICT: 2,
              Z_ERRNO: -1,
              Z_STREAM_ERROR: -2,
              Z_DATA_ERROR: -3,
              Z_BUF_ERROR: -5,
              Z_NO_COMPRESSION: 0,
              Z_BEST_SPEED: 1,
              Z_BEST_COMPRESSION: 9,
              Z_DEFAULT_COMPRESSION: -1,
              Z_FILTERED: 1,
              Z_HUFFMAN_ONLY: 2,
              Z_RLE: 3,
              Z_FIXED: 4,
              Z_DEFAULT_STRATEGY: 0,
              Z_BINARY: 0,
              Z_TEXT: 1,
              Z_UNKNOWN: 2,
              Z_DEFLATED: 8,
            };
          },
          {},
        ],
        5: [
          function (e, t, r) {
            "use strict";
            var n = (function () {
              for (var e, t = [], r = 0; r < 256; r++) {
                e = r;
                for (var n = 0; n < 8; n++)
                  e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                t[r] = e;
              }
              return t;
            })();
            t.exports = function (e, t, r, i) {
              var o = n,
                a = i + r;
              e ^= -1;
              for (var s = i; s < a; s++) e = (e >>> 8) ^ o[255 & (e ^ t[s])];
              return -1 ^ e;
            };
          },
          {},
        ],
        6: [
          function (e, t, r) {
            "use strict";
            t.exports = function () {
              (this.text = 0),
                (this.time = 0),
                (this.xflags = 0),
                (this.os = 0),
                (this.extra = null),
                (this.extra_len = 0),
                (this.name = ""),
                (this.comment = ""),
                (this.hcrc = 0),
                (this.done = !1);
            };
          },
          {},
        ],
        7: [
          function (e, t, r) {
            "use strict";
            t.exports = function (e, t) {
              var r,
                n,
                i,
                o,
                a,
                s,
                l,
                c,
                u,
                d,
                h,
                p,
                f,
                m,
                g,
                v,
                y,
                x,
                b,
                w,
                D,
                C,
                S,
                A,
                $;
              (r = e.state),
                (n = e.next_in),
                (A = e.input),
                (i = n + (e.avail_in - 5)),
                (o = e.next_out),
                ($ = e.output),
                (a = o - (t - e.avail_out)),
                (s = o + (e.avail_out - 257)),
                (l = r.dmax),
                (c = r.wsize),
                (u = r.whave),
                (d = r.wnext),
                (h = r.window),
                (p = r.hold),
                (f = r.bits),
                (m = r.lencode),
                (g = r.distcode),
                (v = (1 << r.lenbits) - 1),
                (y = (1 << r.distbits) - 1);
              e: do {
                f < 15 &&
                  ((p += A[n++] << f), (f += 8), (p += A[n++] << f), (f += 8)),
                  (x = m[p & v]);
                t: for (;;) {
                  if (
                    ((p >>>= b = x >>> 24),
                    (f -= b),
                    0 === (b = (x >>> 16) & 255))
                  )
                    $[o++] = 65535 & x;
                  else {
                    if (!(16 & b)) {
                      if (0 == (64 & b)) {
                        x = m[(65535 & x) + (p & ((1 << b) - 1))];
                        continue t;
                      }
                      if (32 & b) {
                        r.mode = 12;
                        break e;
                      }
                      (e.msg = "invalid literal/length code"), (r.mode = 30);
                      break e;
                    }
                    (w = 65535 & x),
                      (b &= 15) &&
                        (f < b && ((p += A[n++] << f), (f += 8)),
                        (w += p & ((1 << b) - 1)),
                        (p >>>= b),
                        (f -= b)),
                      f < 15 &&
                        ((p += A[n++] << f),
                        (f += 8),
                        (p += A[n++] << f),
                        (f += 8)),
                      (x = g[p & y]);
                    r: for (;;) {
                      if (
                        ((p >>>= b = x >>> 24),
                        (f -= b),
                        !(16 & (b = (x >>> 16) & 255)))
                      ) {
                        if (0 == (64 & b)) {
                          x = g[(65535 & x) + (p & ((1 << b) - 1))];
                          continue r;
                        }
                        (e.msg = "invalid distance code"), (r.mode = 30);
                        break e;
                      }
                      if (
                        ((D = 65535 & x),
                        f < (b &= 15) &&
                          ((p += A[n++] << f),
                          (f += 8) < b && ((p += A[n++] << f), (f += 8))),
                        (D += p & ((1 << b) - 1)) > l)
                      ) {
                        (e.msg = "invalid distance too far back"),
                          (r.mode = 30);
                        break e;
                      }
                      if (((p >>>= b), (f -= b), D > (b = o - a))) {
                        if ((b = D - b) > u && r.sane) {
                          (e.msg = "invalid distance too far back"),
                            (r.mode = 30);
                          break e;
                        }
                        if (((C = 0), (S = h), 0 === d)) {
                          if (((C += c - b), b < w)) {
                            w -= b;
                            do {
                              $[o++] = h[C++];
                            } while (--b);
                            (C = o - D), (S = $);
                          }
                        } else if (d < b) {
                          if (((C += c + d - b), (b -= d) < w)) {
                            w -= b;
                            do {
                              $[o++] = h[C++];
                            } while (--b);
                            if (((C = 0), d < w)) {
                              w -= b = d;
                              do {
                                $[o++] = h[C++];
                              } while (--b);
                              (C = o - D), (S = $);
                            }
                          }
                        } else if (((C += d - b), b < w)) {
                          w -= b;
                          do {
                            $[o++] = h[C++];
                          } while (--b);
                          (C = o - D), (S = $);
                        }
                        for (; w > 2; )
                          ($[o++] = S[C++]),
                            ($[o++] = S[C++]),
                            ($[o++] = S[C++]),
                            (w -= 3);
                        w && (($[o++] = S[C++]), w > 1 && ($[o++] = S[C++]));
                      } else {
                        C = o - D;
                        do {
                          ($[o++] = $[C++]),
                            ($[o++] = $[C++]),
                            ($[o++] = $[C++]),
                            (w -= 3);
                        } while (w > 2);
                        w && (($[o++] = $[C++]), w > 1 && ($[o++] = $[C++]));
                      }
                      break;
                    }
                  }
                  break;
                }
              } while (n < i && o < s);
              (n -= w = f >> 3),
                (p &= (1 << (f -= w << 3)) - 1),
                (e.next_in = n),
                (e.next_out = o),
                (e.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
                (e.avail_out = o < s ? s - o + 257 : 257 - (o - s)),
                (r.hold = p),
                (r.bits = f);
            };
          },
          {},
        ],
        8: [
          function (e, t, r) {
            "use strict";
            var n = e("../utils/common"),
              i = e("./adler32"),
              o = e("./crc32"),
              a = e("./inffast"),
              s = e("./inftrees"),
              l = 0,
              c = 1,
              u = 2,
              d = 4,
              h = 5,
              p = 6,
              f = 0,
              m = 1,
              g = 2,
              v = -2,
              y = -3,
              x = -4,
              b = -5,
              w = 8,
              D = 1,
              C = 2,
              S = 3,
              A = 4,
              $ = 5,
              M = 6,
              k = 7,
              z = 8,
              _ = 9,
              T = 10,
              L = 11,
              E = 12,
              I = 13,
              F = 14,
              O = 15,
              R = 16,
              N = 17,
              P = 18,
              V = 19,
              B = 20,
              U = 21,
              j = 22,
              G = 23,
              H = 24,
              q = 25,
              W = 26,
              Y = 27,
              X = 28,
              Z = 29,
              Q = 30,
              K = 31,
              J = 32,
              ee = 852,
              te = 592,
              re = 15;
            function ne(e) {
              return (
                ((e >>> 24) & 255) +
                ((e >>> 8) & 65280) +
                ((65280 & e) << 8) +
                ((255 & e) << 24)
              );
            }
            function ie() {
              (this.mode = 0),
                (this.last = !1),
                (this.wrap = 0),
                (this.havedict = !1),
                (this.flags = 0),
                (this.dmax = 0),
                (this.check = 0),
                (this.total = 0),
                (this.head = null),
                (this.wbits = 0),
                (this.wsize = 0),
                (this.whave = 0),
                (this.wnext = 0),
                (this.window = null),
                (this.hold = 0),
                (this.bits = 0),
                (this.length = 0),
                (this.offset = 0),
                (this.extra = 0),
                (this.lencode = null),
                (this.distcode = null),
                (this.lenbits = 0),
                (this.distbits = 0),
                (this.ncode = 0),
                (this.nlen = 0),
                (this.ndist = 0),
                (this.have = 0),
                (this.next = null),
                (this.lens = new n.Buf16(320)),
                (this.work = new n.Buf16(288)),
                (this.lendyn = null),
                (this.distdyn = null),
                (this.sane = 0),
                (this.back = 0),
                (this.was = 0);
            }
            function oe(e) {
              var t;
              return e && e.state
                ? ((t = e.state),
                  (e.total_in = e.total_out = t.total = 0),
                  (e.msg = ""),
                  t.wrap && (e.adler = 1 & t.wrap),
                  (t.mode = D),
                  (t.last = 0),
                  (t.havedict = 0),
                  (t.dmax = 32768),
                  (t.head = null),
                  (t.hold = 0),
                  (t.bits = 0),
                  (t.lencode = t.lendyn = new n.Buf32(ee)),
                  (t.distcode = t.distdyn = new n.Buf32(te)),
                  (t.sane = 1),
                  (t.back = -1),
                  f)
                : v;
            }
            function ae(e) {
              var t;
              return e && e.state
                ? (((t = e.state).wsize = 0),
                  (t.whave = 0),
                  (t.wnext = 0),
                  oe(e))
                : v;
            }
            function se(e, t) {
              var r, n;
              return e && e.state
                ? ((n = e.state),
                  t < 0
                    ? ((r = 0), (t = -t))
                    : ((r = 1 + (t >> 4)), t < 48 && (t &= 15)),
                  t && (t < 8 || t > 15)
                    ? v
                    : (null !== n.window && n.wbits !== t && (n.window = null),
                      (n.wrap = r),
                      (n.wbits = t),
                      ae(e)))
                : v;
            }
            function le(e, t) {
              var r, n;
              return e
                ? ((n = new ie()),
                  (e.state = n),
                  (n.window = null),
                  (r = se(e, t)) !== f && (e.state = null),
                  r)
                : v;
            }
            var ce,
              ue,
              de = !0;
            function he(e) {
              if (de) {
                var t;
                for (
                  ce = new n.Buf32(512), ue = new n.Buf32(32), t = 0;
                  t < 144;

                )
                  e.lens[t++] = 8;
                for (; t < 256; ) e.lens[t++] = 9;
                for (; t < 280; ) e.lens[t++] = 7;
                for (; t < 288; ) e.lens[t++] = 8;
                for (
                  s(c, e.lens, 0, 288, ce, 0, e.work, { bits: 9 }), t = 0;
                  t < 32;

                )
                  e.lens[t++] = 5;
                s(u, e.lens, 0, 32, ue, 0, e.work, { bits: 5 }), (de = !1);
              }
              (e.lencode = ce),
                (e.lenbits = 9),
                (e.distcode = ue),
                (e.distbits = 5);
            }
            function pe(e, t, r, i) {
              var o,
                a = e.state;
              return (
                null === a.window &&
                  ((a.wsize = 1 << a.wbits),
                  (a.wnext = 0),
                  (a.whave = 0),
                  (a.window = new n.Buf8(a.wsize))),
                i >= a.wsize
                  ? (n.arraySet(a.window, t, r - a.wsize, a.wsize, 0),
                    (a.wnext = 0),
                    (a.whave = a.wsize))
                  : ((o = a.wsize - a.wnext) > i && (o = i),
                    n.arraySet(a.window, t, r - i, o, a.wnext),
                    (i -= o)
                      ? (n.arraySet(a.window, t, r - i, i, 0),
                        (a.wnext = i),
                        (a.whave = a.wsize))
                      : ((a.wnext += o),
                        a.wnext === a.wsize && (a.wnext = 0),
                        a.whave < a.wsize && (a.whave += o))),
                0
              );
            }
            (r.inflateReset = ae),
              (r.inflateReset2 = se),
              (r.inflateResetKeep = oe),
              (r.inflateInit = function (e) {
                return le(e, re);
              }),
              (r.inflateInit2 = le),
              (r.inflate = function (e, t) {
                var r,
                  ee,
                  te,
                  re,
                  ie,
                  oe,
                  ae,
                  se,
                  le,
                  ce,
                  ue,
                  de,
                  fe,
                  me,
                  ge,
                  ve,
                  ye,
                  xe,
                  be,
                  we,
                  De,
                  Ce,
                  Se,
                  Ae,
                  $e = 0,
                  Me = new n.Buf8(4),
                  ke = [
                    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                    1, 15,
                  ];
                if (
                  !e ||
                  !e.state ||
                  !e.output ||
                  (!e.input && 0 !== e.avail_in)
                )
                  return v;
                (r = e.state).mode === E && (r.mode = I),
                  (ie = e.next_out),
                  (te = e.output),
                  (ae = e.avail_out),
                  (re = e.next_in),
                  (ee = e.input),
                  (oe = e.avail_in),
                  (se = r.hold),
                  (le = r.bits),
                  (ce = oe),
                  (ue = ae),
                  (Ce = f);
                e: for (;;)
                  switch (r.mode) {
                    case D:
                      if (0 === r.wrap) {
                        r.mode = I;
                        break;
                      }
                      for (; le < 16; ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      if (2 & r.wrap && 35615 === se) {
                        (r.check = 0),
                          (Me[0] = 255 & se),
                          (Me[1] = (se >>> 8) & 255),
                          (r.check = o(r.check, Me, 2, 0)),
                          (se = 0),
                          (le = 0),
                          (r.mode = C);
                        break;
                      }
                      if (
                        ((r.flags = 0),
                        r.head && (r.head.done = !1),
                        !(1 & r.wrap) || (((255 & se) << 8) + (se >> 8)) % 31)
                      ) {
                        (e.msg = "incorrect header check"), (r.mode = Q);
                        break;
                      }
                      if ((15 & se) !== w) {
                        (e.msg = "unknown compression method"), (r.mode = Q);
                        break;
                      }
                      if (
                        ((le -= 4),
                        (De = 8 + (15 & (se >>>= 4))),
                        0 === r.wbits)
                      )
                        r.wbits = De;
                      else if (De > r.wbits) {
                        (e.msg = "invalid window size"), (r.mode = Q);
                        break;
                      }
                      (r.dmax = 1 << De),
                        (e.adler = r.check = 1),
                        (r.mode = 512 & se ? T : E),
                        (se = 0),
                        (le = 0);
                      break;
                    case C:
                      for (; le < 16; ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      if (((r.flags = se), (255 & r.flags) !== w)) {
                        (e.msg = "unknown compression method"), (r.mode = Q);
                        break;
                      }
                      if (57344 & r.flags) {
                        (e.msg = "unknown header flags set"), (r.mode = Q);
                        break;
                      }
                      r.head && (r.head.text = (se >> 8) & 1),
                        512 & r.flags &&
                          ((Me[0] = 255 & se),
                          (Me[1] = (se >>> 8) & 255),
                          (r.check = o(r.check, Me, 2, 0))),
                        (se = 0),
                        (le = 0),
                        (r.mode = S);
                    case S:
                      for (; le < 32; ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      r.head && (r.head.time = se),
                        512 & r.flags &&
                          ((Me[0] = 255 & se),
                          (Me[1] = (se >>> 8) & 255),
                          (Me[2] = (se >>> 16) & 255),
                          (Me[3] = (se >>> 24) & 255),
                          (r.check = o(r.check, Me, 4, 0))),
                        (se = 0),
                        (le = 0),
                        (r.mode = A);
                    case A:
                      for (; le < 16; ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      r.head &&
                        ((r.head.xflags = 255 & se), (r.head.os = se >> 8)),
                        512 & r.flags &&
                          ((Me[0] = 255 & se),
                          (Me[1] = (se >>> 8) & 255),
                          (r.check = o(r.check, Me, 2, 0))),
                        (se = 0),
                        (le = 0),
                        (r.mode = $);
                    case $:
                      if (1024 & r.flags) {
                        for (; le < 16; ) {
                          if (0 === oe) break e;
                          oe--, (se += ee[re++] << le), (le += 8);
                        }
                        (r.length = se),
                          r.head && (r.head.extra_len = se),
                          512 & r.flags &&
                            ((Me[0] = 255 & se),
                            (Me[1] = (se >>> 8) & 255),
                            (r.check = o(r.check, Me, 2, 0))),
                          (se = 0),
                          (le = 0);
                      } else r.head && (r.head.extra = null);
                      r.mode = M;
                    case M:
                      if (
                        1024 & r.flags &&
                        ((de = r.length) > oe && (de = oe),
                        de &&
                          (r.head &&
                            ((De = r.head.extra_len - r.length),
                            r.head.extra ||
                              (r.head.extra = new Array(r.head.extra_len)),
                            n.arraySet(r.head.extra, ee, re, de, De)),
                          512 & r.flags && (r.check = o(r.check, ee, de, re)),
                          (oe -= de),
                          (re += de),
                          (r.length -= de)),
                        r.length)
                      )
                        break e;
                      (r.length = 0), (r.mode = k);
                    case k:
                      if (2048 & r.flags) {
                        if (0 === oe) break e;
                        de = 0;
                        do {
                          (De = ee[re + de++]),
                            r.head &&
                              De &&
                              r.length < 65536 &&
                              (r.head.name += String.fromCharCode(De));
                        } while (De && de < oe);
                        if (
                          (512 & r.flags && (r.check = o(r.check, ee, de, re)),
                          (oe -= de),
                          (re += de),
                          De)
                        )
                          break e;
                      } else r.head && (r.head.name = null);
                      (r.length = 0), (r.mode = z);
                    case z:
                      if (4096 & r.flags) {
                        if (0 === oe) break e;
                        de = 0;
                        do {
                          (De = ee[re + de++]),
                            r.head &&
                              De &&
                              r.length < 65536 &&
                              (r.head.comment += String.fromCharCode(De));
                        } while (De && de < oe);
                        if (
                          (512 & r.flags && (r.check = o(r.check, ee, de, re)),
                          (oe -= de),
                          (re += de),
                          De)
                        )
                          break e;
                      } else r.head && (r.head.comment = null);
                      r.mode = _;
                    case _:
                      if (512 & r.flags) {
                        for (; le < 16; ) {
                          if (0 === oe) break e;
                          oe--, (se += ee[re++] << le), (le += 8);
                        }
                        if (se !== (65535 & r.check)) {
                          (e.msg = "header crc mismatch"), (r.mode = Q);
                          break;
                        }
                        (se = 0), (le = 0);
                      }
                      r.head &&
                        ((r.head.hcrc = (r.flags >> 9) & 1),
                        (r.head.done = !0)),
                        (e.adler = r.check = 0),
                        (r.mode = E);
                      break;
                    case T:
                      for (; le < 32; ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      (e.adler = r.check = ne(se)),
                        (se = 0),
                        (le = 0),
                        (r.mode = L);
                    case L:
                      if (0 === r.havedict)
                        return (
                          (e.next_out = ie),
                          (e.avail_out = ae),
                          (e.next_in = re),
                          (e.avail_in = oe),
                          (r.hold = se),
                          (r.bits = le),
                          g
                        );
                      (e.adler = r.check = 1), (r.mode = E);
                    case E:
                      if (t === h || t === p) break e;
                    case I:
                      if (r.last) {
                        (se >>>= 7 & le), (le -= 7 & le), (r.mode = Y);
                        break;
                      }
                      for (; le < 3; ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      switch (((r.last = 1 & se), (le -= 1), 3 & (se >>>= 1))) {
                        case 0:
                          r.mode = F;
                          break;
                        case 1:
                          if ((he(r), (r.mode = B), t === p)) {
                            (se >>>= 2), (le -= 2);
                            break e;
                          }
                          break;
                        case 2:
                          r.mode = N;
                          break;
                        case 3:
                          (e.msg = "invalid block type"), (r.mode = Q);
                      }
                      (se >>>= 2), (le -= 2);
                      break;
                    case F:
                      for (se >>>= 7 & le, le -= 7 & le; le < 32; ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      if ((65535 & se) != ((se >>> 16) ^ 65535)) {
                        (e.msg = "invalid stored block lengths"), (r.mode = Q);
                        break;
                      }
                      if (
                        ((r.length = 65535 & se),
                        (se = 0),
                        (le = 0),
                        (r.mode = O),
                        t === p)
                      )
                        break e;
                    case O:
                      r.mode = R;
                    case R:
                      if ((de = r.length)) {
                        if (
                          (de > oe && (de = oe), de > ae && (de = ae), 0 === de)
                        )
                          break e;
                        n.arraySet(te, ee, re, de, ie),
                          (oe -= de),
                          (re += de),
                          (ae -= de),
                          (ie += de),
                          (r.length -= de);
                        break;
                      }
                      r.mode = E;
                      break;
                    case N:
                      for (; le < 14; ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      if (
                        ((r.nlen = 257 + (31 & se)),
                        (se >>>= 5),
                        (le -= 5),
                        (r.ndist = 1 + (31 & se)),
                        (se >>>= 5),
                        (le -= 5),
                        (r.ncode = 4 + (15 & se)),
                        (se >>>= 4),
                        (le -= 4),
                        r.nlen > 286 || r.ndist > 30)
                      ) {
                        (e.msg = "too many length or distance symbols"),
                          (r.mode = Q);
                        break;
                      }
                      (r.have = 0), (r.mode = P);
                    case P:
                      for (; r.have < r.ncode; ) {
                        for (; le < 3; ) {
                          if (0 === oe) break e;
                          oe--, (se += ee[re++] << le), (le += 8);
                        }
                        (r.lens[ke[r.have++]] = 7 & se), (se >>>= 3), (le -= 3);
                      }
                      for (; r.have < 19; ) r.lens[ke[r.have++]] = 0;
                      if (
                        ((r.lencode = r.lendyn),
                        (r.lenbits = 7),
                        (Se = { bits: r.lenbits }),
                        (Ce = s(l, r.lens, 0, 19, r.lencode, 0, r.work, Se)),
                        (r.lenbits = Se.bits),
                        Ce)
                      ) {
                        (e.msg = "invalid code lengths set"), (r.mode = Q);
                        break;
                      }
                      (r.have = 0), (r.mode = V);
                    case V:
                      for (; r.have < r.nlen + r.ndist; ) {
                        for (
                          ;
                          (ve =
                            (($e = r.lencode[se & ((1 << r.lenbits) - 1)]) >>>
                              16) &
                            255),
                            (ye = 65535 & $e),
                            !((ge = $e >>> 24) <= le);

                        ) {
                          if (0 === oe) break e;
                          oe--, (se += ee[re++] << le), (le += 8);
                        }
                        if (ye < 16)
                          (se >>>= ge), (le -= ge), (r.lens[r.have++] = ye);
                        else {
                          if (16 === ye) {
                            for (Ae = ge + 2; le < Ae; ) {
                              if (0 === oe) break e;
                              oe--, (se += ee[re++] << le), (le += 8);
                            }
                            if (((se >>>= ge), (le -= ge), 0 === r.have)) {
                              (e.msg = "invalid bit length repeat"),
                                (r.mode = Q);
                              break;
                            }
                            (De = r.lens[r.have - 1]),
                              (de = 3 + (3 & se)),
                              (se >>>= 2),
                              (le -= 2);
                          } else if (17 === ye) {
                            for (Ae = ge + 3; le < Ae; ) {
                              if (0 === oe) break e;
                              oe--, (se += ee[re++] << le), (le += 8);
                            }
                            (le -= ge),
                              (De = 0),
                              (de = 3 + (7 & (se >>>= ge))),
                              (se >>>= 3),
                              (le -= 3);
                          } else {
                            for (Ae = ge + 7; le < Ae; ) {
                              if (0 === oe) break e;
                              oe--, (se += ee[re++] << le), (le += 8);
                            }
                            (le -= ge),
                              (De = 0),
                              (de = 11 + (127 & (se >>>= ge))),
                              (se >>>= 7),
                              (le -= 7);
                          }
                          if (r.have + de > r.nlen + r.ndist) {
                            (e.msg = "invalid bit length repeat"), (r.mode = Q);
                            break;
                          }
                          for (; de--; ) r.lens[r.have++] = De;
                        }
                      }
                      if (r.mode === Q) break;
                      if (0 === r.lens[256]) {
                        (e.msg = "invalid code -- missing end-of-block"),
                          (r.mode = Q);
                        break;
                      }
                      if (
                        ((r.lenbits = 9),
                        (Se = { bits: r.lenbits }),
                        (Ce = s(
                          c,
                          r.lens,
                          0,
                          r.nlen,
                          r.lencode,
                          0,
                          r.work,
                          Se
                        )),
                        (r.lenbits = Se.bits),
                        Ce)
                      ) {
                        (e.msg = "invalid literal/lengths set"), (r.mode = Q);
                        break;
                      }
                      if (
                        ((r.distbits = 6),
                        (r.distcode = r.distdyn),
                        (Se = { bits: r.distbits }),
                        (Ce = s(
                          u,
                          r.lens,
                          r.nlen,
                          r.ndist,
                          r.distcode,
                          0,
                          r.work,
                          Se
                        )),
                        (r.distbits = Se.bits),
                        Ce)
                      ) {
                        (e.msg = "invalid distances set"), (r.mode = Q);
                        break;
                      }
                      if (((r.mode = B), t === p)) break e;
                    case B:
                      r.mode = U;
                    case U:
                      if (oe >= 6 && ae >= 258) {
                        (e.next_out = ie),
                          (e.avail_out = ae),
                          (e.next_in = re),
                          (e.avail_in = oe),
                          (r.hold = se),
                          (r.bits = le),
                          a(e, ue),
                          (ie = e.next_out),
                          (te = e.output),
                          (ae = e.avail_out),
                          (re = e.next_in),
                          (ee = e.input),
                          (oe = e.avail_in),
                          (se = r.hold),
                          (le = r.bits),
                          r.mode === E && (r.back = -1);
                        break;
                      }
                      for (
                        r.back = 0;
                        (ve =
                          (($e = r.lencode[se & ((1 << r.lenbits) - 1)]) >>>
                            16) &
                          255),
                          (ye = 65535 & $e),
                          !((ge = $e >>> 24) <= le);

                      ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      if (ve && 0 == (240 & ve)) {
                        for (
                          xe = ge, be = ve, we = ye;
                          (ve =
                            (($e =
                              r.lencode[
                                we + ((se & ((1 << (xe + be)) - 1)) >> xe)
                              ]) >>>
                              16) &
                            255),
                            (ye = 65535 & $e),
                            !(xe + (ge = $e >>> 24) <= le);

                        ) {
                          if (0 === oe) break e;
                          oe--, (se += ee[re++] << le), (le += 8);
                        }
                        (se >>>= xe), (le -= xe), (r.back += xe);
                      }
                      if (
                        ((se >>>= ge),
                        (le -= ge),
                        (r.back += ge),
                        (r.length = ye),
                        0 === ve)
                      ) {
                        r.mode = W;
                        break;
                      }
                      if (32 & ve) {
                        (r.back = -1), (r.mode = E);
                        break;
                      }
                      if (64 & ve) {
                        (e.msg = "invalid literal/length code"), (r.mode = Q);
                        break;
                      }
                      (r.extra = 15 & ve), (r.mode = j);
                    case j:
                      if (r.extra) {
                        for (Ae = r.extra; le < Ae; ) {
                          if (0 === oe) break e;
                          oe--, (se += ee[re++] << le), (le += 8);
                        }
                        (r.length += se & ((1 << r.extra) - 1)),
                          (se >>>= r.extra),
                          (le -= r.extra),
                          (r.back += r.extra);
                      }
                      (r.was = r.length), (r.mode = G);
                    case G:
                      for (
                        ;
                        (ve =
                          (($e = r.distcode[se & ((1 << r.distbits) - 1)]) >>>
                            16) &
                          255),
                          (ye = 65535 & $e),
                          !((ge = $e >>> 24) <= le);

                      ) {
                        if (0 === oe) break e;
                        oe--, (se += ee[re++] << le), (le += 8);
                      }
                      if (0 == (240 & ve)) {
                        for (
                          xe = ge, be = ve, we = ye;
                          (ve =
                            (($e =
                              r.distcode[
                                we + ((se & ((1 << (xe + be)) - 1)) >> xe)
                              ]) >>>
                              16) &
                            255),
                            (ye = 65535 & $e),
                            !(xe + (ge = $e >>> 24) <= le);

                        ) {
                          if (0 === oe) break e;
                          oe--, (se += ee[re++] << le), (le += 8);
                        }
                        (se >>>= xe), (le -= xe), (r.back += xe);
                      }
                      if (((se >>>= ge), (le -= ge), (r.back += ge), 64 & ve)) {
                        (e.msg = "invalid distance code"), (r.mode = Q);
                        break;
                      }
                      (r.offset = ye), (r.extra = 15 & ve), (r.mode = H);
                    case H:
                      if (r.extra) {
                        for (Ae = r.extra; le < Ae; ) {
                          if (0 === oe) break e;
                          oe--, (se += ee[re++] << le), (le += 8);
                        }
                        (r.offset += se & ((1 << r.extra) - 1)),
                          (se >>>= r.extra),
                          (le -= r.extra),
                          (r.back += r.extra);
                      }
                      if (r.offset > r.dmax) {
                        (e.msg = "invalid distance too far back"), (r.mode = Q);
                        break;
                      }
                      r.mode = q;
                    case q:
                      if (0 === ae) break e;
                      if (((de = ue - ae), r.offset > de)) {
                        if ((de = r.offset - de) > r.whave && r.sane) {
                          (e.msg = "invalid distance too far back"),
                            (r.mode = Q);
                          break;
                        }
                        de > r.wnext
                          ? ((de -= r.wnext), (fe = r.wsize - de))
                          : (fe = r.wnext - de),
                          de > r.length && (de = r.length),
                          (me = r.window);
                      } else (me = te), (fe = ie - r.offset), (de = r.length);
                      de > ae && (de = ae), (ae -= de), (r.length -= de);
                      do {
                        te[ie++] = me[fe++];
                      } while (--de);
                      0 === r.length && (r.mode = U);
                      break;
                    case W:
                      if (0 === ae) break e;
                      (te[ie++] = r.length), ae--, (r.mode = U);
                      break;
                    case Y:
                      if (r.wrap) {
                        for (; le < 32; ) {
                          if (0 === oe) break e;
                          oe--, (se |= ee[re++] << le), (le += 8);
                        }
                        if (
                          ((ue -= ae),
                          (e.total_out += ue),
                          (r.total += ue),
                          ue &&
                            (e.adler = r.check =
                              r.flags
                                ? o(r.check, te, ue, ie - ue)
                                : i(r.check, te, ue, ie - ue)),
                          (ue = ae),
                          (r.flags ? se : ne(se)) !== r.check)
                        ) {
                          (e.msg = "incorrect data check"), (r.mode = Q);
                          break;
                        }
                        (se = 0), (le = 0);
                      }
                      r.mode = X;
                    case X:
                      if (r.wrap && r.flags) {
                        for (; le < 32; ) {
                          if (0 === oe) break e;
                          oe--, (se += ee[re++] << le), (le += 8);
                        }
                        if (se !== (4294967295 & r.total)) {
                          (e.msg = "incorrect length check"), (r.mode = Q);
                          break;
                        }
                        (se = 0), (le = 0);
                      }
                      r.mode = Z;
                    case Z:
                      Ce = m;
                      break e;
                    case Q:
                      Ce = y;
                      break e;
                    case K:
                      return x;
                    case J:
                    default:
                      return v;
                  }
                return (
                  (e.next_out = ie),
                  (e.avail_out = ae),
                  (e.next_in = re),
                  (e.avail_in = oe),
                  (r.hold = se),
                  (r.bits = le),
                  (r.wsize ||
                    (ue !== e.avail_out &&
                      r.mode < Q &&
                      (r.mode < Y || t !== d))) &&
                  pe(e, e.output, e.next_out, ue - e.avail_out)
                    ? ((r.mode = K), x)
                    : ((ce -= e.avail_in),
                      (ue -= e.avail_out),
                      (e.total_in += ce),
                      (e.total_out += ue),
                      (r.total += ue),
                      r.wrap &&
                        ue &&
                        (e.adler = r.check =
                          r.flags
                            ? o(r.check, te, ue, e.next_out - ue)
                            : i(r.check, te, ue, e.next_out - ue)),
                      (e.data_type =
                        r.bits +
                        (r.last ? 64 : 0) +
                        (r.mode === E ? 128 : 0) +
                        (r.mode === B || r.mode === O ? 256 : 0)),
                      ((0 === ce && 0 === ue) || t === d) &&
                        Ce === f &&
                        (Ce = b),
                      Ce)
                );
              }),
              (r.inflateEnd = function (e) {
                if (!e || !e.state) return v;
                var t = e.state;
                return t.window && (t.window = null), (e.state = null), f;
              }),
              (r.inflateGetHeader = function (e, t) {
                var r;
                return e && e.state
                  ? 0 == (2 & (r = e.state).wrap)
                    ? v
                    : ((r.head = t), (t.done = !1), f)
                  : v;
              }),
              (r.inflateSetDictionary = function (e, t) {
                var r,
                  n = t.length;
                return e && e.state
                  ? 0 !== (r = e.state).wrap && r.mode !== L
                    ? v
                    : r.mode === L && i(1, t, n, 0) !== r.check
                    ? y
                    : pe(e, t, n, n)
                    ? ((r.mode = K), x)
                    : ((r.havedict = 1), f)
                  : v;
              }),
              (r.inflateInfo = "pako inflate (from Nodeca project)");
          },
          {
            "../utils/common": 1,
            "./adler32": 3,
            "./crc32": 5,
            "./inffast": 7,
            "./inftrees": 9,
          },
        ],
        9: [
          function (e, t, r) {
            "use strict";
            var n = e("../utils/common"),
              i = [
                3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
                51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
              ],
              o = [
                16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
                19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
              ],
              a = [
                1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
                385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
                16385, 24577, 0, 0,
              ],
              s = [
                16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
                23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
              ];
            t.exports = function (e, t, r, l, c, u, d, h) {
              var p,
                f,
                m,
                g,
                v,
                y,
                x,
                b,
                w,
                D = h.bits,
                C = 0,
                S = 0,
                A = 0,
                $ = 0,
                M = 0,
                k = 0,
                z = 0,
                _ = 0,
                T = 0,
                L = 0,
                E = null,
                I = 0,
                F = new n.Buf16(16),
                O = new n.Buf16(16),
                R = null,
                N = 0;
              for (C = 0; C <= 15; C++) F[C] = 0;
              for (S = 0; S < l; S++) F[t[r + S]]++;
              for (M = D, $ = 15; $ >= 1 && 0 === F[$]; $--);
              if ((M > $ && (M = $), 0 === $))
                return (
                  (c[u++] = 20971520), (c[u++] = 20971520), (h.bits = 1), 0
                );
              for (A = 1; A < $ && 0 === F[A]; A++);
              for (M < A && (M = A), _ = 1, C = 1; C <= 15; C++)
                if (((_ <<= 1), (_ -= F[C]) < 0)) return -1;
              if (_ > 0 && (0 === e || 1 !== $)) return -1;
              for (O[1] = 0, C = 1; C < 15; C++) O[C + 1] = O[C] + F[C];
              for (S = 0; S < l; S++) 0 !== t[r + S] && (d[O[t[r + S]]++] = S);
              if (
                (0 === e
                  ? ((E = R = d), (y = 19))
                  : 1 === e
                  ? ((E = i), (I -= 257), (R = o), (N -= 257), (y = 256))
                  : ((E = a), (R = s), (y = -1)),
                (L = 0),
                (S = 0),
                (C = A),
                (v = u),
                (k = M),
                (z = 0),
                (m = -1),
                (g = (T = 1 << M) - 1),
                (1 === e && T > 852) || (2 === e && T > 592))
              )
                return 1;
              for (;;) {
                (x = C - z),
                  d[S] < y
                    ? ((b = 0), (w = d[S]))
                    : d[S] > y
                    ? ((b = R[N + d[S]]), (w = E[I + d[S]]))
                    : ((b = 96), (w = 0)),
                  (p = 1 << (C - z)),
                  (A = f = 1 << k);
                do {
                  c[v + (L >> z) + (f -= p)] = (x << 24) | (b << 16) | w | 0;
                } while (0 !== f);
                for (p = 1 << (C - 1); L & p; ) p >>= 1;
                if (
                  (0 !== p ? ((L &= p - 1), (L += p)) : (L = 0),
                  S++,
                  0 == --F[C])
                ) {
                  if (C === $) break;
                  C = t[r + d[S]];
                }
                if (C > M && (L & g) !== m) {
                  for (
                    0 === z && (z = M), v += A, _ = 1 << (k = C - z);
                    k + z < $ && !((_ -= F[k + z]) <= 0);

                  )
                    k++, (_ <<= 1);
                  if (
                    ((T += 1 << k),
                    (1 === e && T > 852) || (2 === e && T > 592))
                  )
                    return 1;
                  c[(m = L & g)] = (M << 24) | (k << 16) | (v - u) | 0;
                }
              }
              return (
                0 !== L && (c[v + L] = ((C - z) << 24) | (64 << 16) | 0),
                (h.bits = M),
                0
              );
            };
          },
          { "../utils/common": 1 },
        ],
        10: [
          function (e, t, r) {
            "use strict";
            t.exports = {
              2: "need dictionary",
              1: "stream end",
              0: "",
              "-1": "file error",
              "-2": "stream error",
              "-3": "data error",
              "-4": "insufficient memory",
              "-5": "buffer error",
              "-6": "incompatible version",
            };
          },
          {},
        ],
        11: [
          function (e, t, r) {
            "use strict";
            t.exports = function () {
              (this.input = null),
                (this.next_in = 0),
                (this.avail_in = 0),
                (this.total_in = 0),
                (this.output = null),
                (this.next_out = 0),
                (this.avail_out = 0),
                (this.total_out = 0),
                (this.msg = ""),
                (this.state = null),
                (this.data_type = 2),
                (this.adler = 0);
            };
          },
          {},
        ],
        "/lib/inflate.js": [
          function (e, t, r) {
            "use strict";
            var n = e("./zlib/inflate"),
              i = e("./utils/common"),
              o = e("./utils/strings"),
              a = e("./zlib/constants"),
              s = e("./zlib/messages"),
              l = e("./zlib/zstream"),
              c = e("./zlib/gzheader"),
              u = Object.prototype.toString;
            function d(e) {
              if (!(this instanceof d)) return new d(e);
              this.options = i.assign(
                { chunkSize: 16384, windowBits: 0, to: "" },
                e || {}
              );
              var t = this.options;
              t.raw &&
                t.windowBits >= 0 &&
                t.windowBits < 16 &&
                ((t.windowBits = -t.windowBits),
                0 === t.windowBits && (t.windowBits = -15)),
                !(t.windowBits >= 0 && t.windowBits < 16) ||
                  (e && e.windowBits) ||
                  (t.windowBits += 32),
                t.windowBits > 15 &&
                  t.windowBits < 48 &&
                  0 == (15 & t.windowBits) &&
                  (t.windowBits |= 15),
                (this.err = 0),
                (this.msg = ""),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new l()),
                (this.strm.avail_out = 0);
              var r = n.inflateInit2(this.strm, t.windowBits);
              if (r !== a.Z_OK) throw new Error(s[r]);
              if (
                ((this.header = new c()),
                n.inflateGetHeader(this.strm, this.header),
                t.dictionary &&
                  ("string" == typeof t.dictionary
                    ? (t.dictionary = o.string2buf(t.dictionary))
                    : "[object ArrayBuffer]" === u.call(t.dictionary) &&
                      (t.dictionary = new Uint8Array(t.dictionary)),
                  t.raw &&
                    (r = n.inflateSetDictionary(this.strm, t.dictionary)) !==
                      a.Z_OK))
              )
                throw new Error(s[r]);
            }
            function h(e, t) {
              var r = new d(t);
              if ((r.push(e, !0), r.err)) throw r.msg || s[r.err];
              return r.result;
            }
            (d.prototype.push = function (e, t) {
              var r,
                s,
                l,
                c,
                d,
                h = this.strm,
                p = this.options.chunkSize,
                f = this.options.dictionary,
                m = !1;
              if (this.ended) return !1;
              (s = t === ~~t ? t : !0 === t ? a.Z_FINISH : a.Z_NO_FLUSH),
                "string" == typeof e
                  ? (h.input = o.binstring2buf(e))
                  : "[object ArrayBuffer]" === u.call(e)
                  ? (h.input = new Uint8Array(e))
                  : (h.input = e),
                (h.next_in = 0),
                (h.avail_in = h.input.length);
              do {
                if (
                  (0 === h.avail_out &&
                    ((h.output = new i.Buf8(p)),
                    (h.next_out = 0),
                    (h.avail_out = p)),
                  (r = n.inflate(h, a.Z_NO_FLUSH)) === a.Z_NEED_DICT &&
                    f &&
                    (r = n.inflateSetDictionary(this.strm, f)),
                  r === a.Z_BUF_ERROR && !0 === m && ((r = a.Z_OK), (m = !1)),
                  r !== a.Z_STREAM_END && r !== a.Z_OK)
                )
                  return this.onEnd(r), (this.ended = !0), !1;
                h.next_out &&
                  ((0 !== h.avail_out &&
                    r !== a.Z_STREAM_END &&
                    (0 !== h.avail_in ||
                      (s !== a.Z_FINISH && s !== a.Z_SYNC_FLUSH))) ||
                    ("string" === this.options.to
                      ? ((l = o.utf8border(h.output, h.next_out)),
                        (c = h.next_out - l),
                        (d = o.buf2string(h.output, l)),
                        (h.next_out = c),
                        (h.avail_out = p - c),
                        c && i.arraySet(h.output, h.output, l, c, 0),
                        this.onData(d))
                      : this.onData(i.shrinkBuf(h.output, h.next_out)))),
                  0 === h.avail_in && 0 === h.avail_out && (m = !0);
              } while (
                (h.avail_in > 0 || 0 === h.avail_out) &&
                r !== a.Z_STREAM_END
              );
              return (
                r === a.Z_STREAM_END && (s = a.Z_FINISH),
                s === a.Z_FINISH
                  ? ((r = n.inflateEnd(this.strm)),
                    this.onEnd(r),
                    (this.ended = !0),
                    r === a.Z_OK)
                  : s !== a.Z_SYNC_FLUSH ||
                    (this.onEnd(a.Z_OK), (h.avail_out = 0), !0)
              );
            }),
              (d.prototype.onData = function (e) {
                this.chunks.push(e);
              }),
              (d.prototype.onEnd = function (e) {
                e === a.Z_OK &&
                  ("string" === this.options.to
                    ? (this.result = this.chunks.join(""))
                    : (this.result = i.flattenChunks(this.chunks))),
                  (this.chunks = []),
                  (this.err = e),
                  (this.msg = this.strm.msg);
              }),
              (r.Inflate = d),
              (r.inflate = h),
              (r.inflateRaw = function (e, t) {
                return ((t = t || {}).raw = !0), h(e, t);
              }),
              (r.ungzip = h);
          },
          {
            "./utils/common": 1,
            "./utils/strings": 2,
            "./zlib/constants": 4,
            "./zlib/gzheader": 6,
            "./zlib/inflate": 8,
            "./zlib/messages": 10,
            "./zlib/zstream": 11,
          },
        ],
      },
      {},
      []
    )("/lib/inflate.js");
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.netcdfjs = t())
      : (e.netcdfjs = t());
  })("undefined" != typeof self ? self : this, function () {
    return (function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
      }
      return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if ((1 & t && (e = r(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              r.d(
                n,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 3))
      );
    })([
      function (e, t, r) {
        "use strict";
        function n(e) {
          e.offset % 4 != 0 && e.skip(4 - (e.offset % 4));
        }
        (e.exports.notNetcdf = function (e, t) {
          if (e)
            throw new TypeError("Not a valid NetCDF v3.x file: ".concat(t));
        }),
          (e.exports.padding = n),
          (e.exports.readName = function (e) {
            var t = e.readUint32(),
              r = e.readChars(t);
            return n(e), r;
          });
      },
      function (e, t, r) {
        !(function (e) {
          var t,
            r,
            n,
            i = String.fromCharCode;
          function o(e) {
            for (var t, r, n = [], i = 0, o = e.length; i < o; )
              (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o
                ? 56320 == (64512 & (r = e.charCodeAt(i++)))
                  ? n.push(((1023 & t) << 10) + (1023 & r) + 65536)
                  : (n.push(t), i--)
                : n.push(t);
            return n;
          }
          function a(e) {
            if (e >= 55296 && e <= 57343)
              throw Error(
                "Lone surrogate U+" +
                  e.toString(16).toUpperCase() +
                  " is not a scalar value"
              );
          }
          function s(e, t) {
            return i(((e >> t) & 63) | 128);
          }
          function l(e) {
            if (0 == (4294967168 & e)) return i(e);
            var t = "";
            return (
              0 == (4294965248 & e)
                ? (t = i(((e >> 6) & 31) | 192))
                : 0 == (4294901760 & e)
                ? (a(e), (t = i(((e >> 12) & 15) | 224)), (t += s(e, 6)))
                : 0 == (4292870144 & e) &&
                  ((t = i(((e >> 18) & 7) | 240)),
                  (t += s(e, 12)),
                  (t += s(e, 6))),
              (t += i((63 & e) | 128))
            );
          }
          function c() {
            if (n >= r) throw Error("Invalid byte index");
            var e = 255 & t[n];
            if ((n++, 128 == (192 & e))) return 63 & e;
            throw Error("Invalid continuation byte");
          }
          function u() {
            var e, i;
            if (n > r) throw Error("Invalid byte index");
            if (n == r) return !1;
            if (((e = 255 & t[n]), n++, 0 == (128 & e))) return e;
            if (192 == (224 & e)) {
              if ((i = ((31 & e) << 6) | c()) >= 128) return i;
              throw Error("Invalid continuation byte");
            }
            if (224 == (240 & e)) {
              if ((i = ((15 & e) << 12) | (c() << 6) | c()) >= 2048)
                return a(i), i;
              throw Error("Invalid continuation byte");
            }
            if (
              240 == (248 & e) &&
              (i = ((7 & e) << 18) | (c() << 12) | (c() << 6) | c()) >= 65536 &&
              i <= 1114111
            )
              return i;
            throw Error("Invalid UTF-8 detected");
          }
          (e.version = "3.0.0"),
            (e.encode = function (e) {
              for (var t = o(e), r = t.length, n = -1, i = ""; ++n < r; )
                i += l(t[n]);
              return i;
            }),
            (e.decode = function (e) {
              (t = o(e)), (r = t.length), (n = 0);
              for (var a, s = []; !1 !== (a = u()); ) s.push(a);
              return (function (e) {
                for (var t, r = e.length, n = -1, o = ""; ++n < r; )
                  (t = e[n]) > 65535 &&
                    ((o += i((((t -= 65536) >>> 10) & 1023) | 55296)),
                    (t = 56320 | (1023 & t))),
                    (o += i(t));
                return o;
              })(s);
            });
        })(t);
      },
      function (e, t, r) {
        "use strict";
        const n = r(0).notNetcdf,
          i = { BYTE: 1, CHAR: 2, SHORT: 3, INT: 4, FLOAT: 5, DOUBLE: 6 };
        function o(e, t) {
          if (1 !== e) {
            for (var r = new Array(e), n = 0; n < e; n++) r[n] = t();
            return r;
          }
          return t();
        }
        (e.exports = i),
          (e.exports.num2str = function (e) {
            switch (Number(e)) {
              case i.BYTE:
                return "byte";
              case i.CHAR:
                return "char";
              case i.SHORT:
                return "short";
              case i.INT:
                return "int";
              case i.FLOAT:
                return "float";
              case i.DOUBLE:
                return "double";
              default:
                return "undefined";
            }
          }),
          (e.exports.num2bytes = function (e) {
            switch (Number(e)) {
              case i.BYTE:
              case i.CHAR:
                return 1;
              case i.SHORT:
                return 2;
              case i.INT:
              case i.FLOAT:
                return 4;
              case i.DOUBLE:
                return 8;
              default:
                return -1;
            }
          }),
          (e.exports.str2num = function (e) {
            switch (String(e)) {
              case "byte":
                return i.BYTE;
              case "char":
                return i.CHAR;
              case "short":
                return i.SHORT;
              case "int":
                return i.INT;
              case "float":
                return i.FLOAT;
              case "double":
                return i.DOUBLE;
              default:
                return -1;
            }
          }),
          (e.exports.readType = function (e, t, r) {
            switch (t) {
              case i.BYTE:
                return e.readBytes(r);
              case i.CHAR:
                return (function (e) {
                  if (0 === e.charCodeAt(e.length - 1))
                    return e.substring(0, e.length - 1);
                  return e;
                })(e.readChars(r));
              case i.SHORT:
                return o(r, e.readInt16.bind(e));
              case i.INT:
                return o(r, e.readInt32.bind(e));
              case i.FLOAT:
                return o(r, e.readFloat32.bind(e));
              case i.DOUBLE:
                return o(r, e.readFloat64.bind(e));
              default:
                return void n(!0, "non valid type ".concat(t));
            }
          });
      },
      function (e, t, r) {
        "use strict";
        const { IOBuffer: n } = r(4),
          i = r(0),
          o = r(5),
          a = r(6),
          s = r(7);
        e.exports = class {
          constructor(e) {
            const t = new n(e);
            t.setBigEndian(),
              i.notNetcdf("CDF" !== t.readChars(3), "should start with CDF");
            const r = t.readByte();
            i.notNetcdf(r > 2, "unknown version"),
              (this.header = a(t, r)),
              (this.buffer = t);
          }
          get version() {
            return 1 === this.header.version
              ? "classic format"
              : "64-bit offset format";
          }
          get recordDimension() {
            return this.header.recordDimension;
          }
          get dimensions() {
            return this.header.dimensions;
          }
          get globalAttributes() {
            return this.header.globalAttributes;
          }
          getAttribute(e) {
            const t = this.globalAttributes.find((t) => t.name === e);
            return t ? t.value : null;
          }
          getDataVariableAsString(e) {
            const t = this.getDataVariable(e);
            return t ? t.join("") : null;
          }
          get variables() {
            return this.header.variables;
          }
          toString() {
            return s.call(this);
          }
          getDataVariable(e) {
            let t;
            return (
              (t =
                "string" == typeof e
                  ? this.header.variables.find(function (t) {
                      return t.name === e;
                    })
                  : e),
              i.notNetcdf(void 0 === t, "variable not found: ".concat(e)),
              this.buffer.seek(t.offset),
              t.record
                ? o.record(this.buffer, t, this.header.recordDimension)
                : o.nonRecord(this.buffer, t)
            );
          }
          dataVariableExists(e) {
            return (
              void 0 !==
              this.header.variables.find(function (t) {
                return t.name === e;
              })
            );
          }
          attributeExists(e) {
            return void 0 !== this.globalAttributes.find((t) => t.name === e);
          }
        };
      },
      function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, "IOBuffer", function () {
            return o;
          });
        var n = r(1);
        const i = 8192;
        class o {
          constructor() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : i,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = !1;
            "number" == typeof e
              ? (e = new ArrayBuffer(e))
              : ((r = !0), (this.lastWrittenByte = e.byteLength));
            const n = t.offset ? t.offset >>> 0 : 0,
              a = e.byteLength - n;
            let s = n;
            (ArrayBuffer.isView(e) || e instanceof o) &&
              (e.byteLength !== e.buffer.byteLength && (s = e.byteOffset + n),
              (e = e.buffer)),
              (this.lastWrittenByte = r ? a : 0),
              (this.buffer = e),
              (this.length = a),
              (this.byteLength = a),
              (this.byteOffset = s),
              (this.offset = 0),
              (this.littleEndian = !0),
              (this._data = new DataView(this.buffer, s, a)),
              (this._mark = 0),
              (this._marks = []);
          }
          available() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            return this.offset + e <= this.length;
          }
          isLittleEndian() {
            return this.littleEndian;
          }
          setLittleEndian() {
            return (this.littleEndian = !0), this;
          }
          isBigEndian() {
            return !this.littleEndian;
          }
          setBigEndian() {
            return (this.littleEndian = !1), this;
          }
          skip() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            return (this.offset += e), this;
          }
          seek(e) {
            return (this.offset = e), this;
          }
          mark() {
            return (this._mark = this.offset), this;
          }
          reset() {
            return (this.offset = this._mark), this;
          }
          pushMark() {
            return this._marks.push(this.offset), this;
          }
          popMark() {
            const e = this._marks.pop();
            if (void 0 === e) throw new Error("Mark stack empty");
            return this.seek(e), this;
          }
          rewind() {
            return (this.offset = 0), this;
          }
          ensureAvailable() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            if (!this.available(e)) {
              const t = 2 * (this.offset + e),
                r = new Uint8Array(t);
              r.set(new Uint8Array(this.buffer)),
                (this.buffer = r.buffer),
                (this.length = this.byteLength = t),
                (this._data = new DataView(this.buffer));
            }
            return this;
          }
          readBoolean() {
            return 0 !== this.readUint8();
          }
          readInt8() {
            return this._data.getInt8(this.offset++);
          }
          readUint8() {
            return this._data.getUint8(this.offset++);
          }
          readByte() {
            return this.readUint8();
          }
          readBytes() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            const t = new Uint8Array(e);
            for (let r = 0; r < e; r++) t[r] = this.readByte();
            return t;
          }
          readInt16() {
            const e = this._data.getInt16(this.offset, this.littleEndian);
            return (this.offset += 2), e;
          }
          readUint16() {
            const e = this._data.getUint16(this.offset, this.littleEndian);
            return (this.offset += 2), e;
          }
          readInt32() {
            const e = this._data.getInt32(this.offset, this.littleEndian);
            return (this.offset += 4), e;
          }
          readUint32() {
            const e = this._data.getUint32(this.offset, this.littleEndian);
            return (this.offset += 4), e;
          }
          readFloat32() {
            const e = this._data.getFloat32(this.offset, this.littleEndian);
            return (this.offset += 4), e;
          }
          readFloat64() {
            const e = this._data.getFloat64(this.offset, this.littleEndian);
            return (this.offset += 8), e;
          }
          readChar() {
            return String.fromCharCode(this.readInt8());
          }
          readChars() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              t = "";
            for (let r = 0; r < e; r++) t += this.readChar();
            return t;
          }
          readUtf8() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            const t = this.readChars(e);
            return Object(n.decode)(t);
          }
          writeBoolean(e) {
            return this.writeUint8(e ? 255 : 0), this;
          }
          writeInt8(e) {
            return (
              this.ensureAvailable(1),
              this._data.setInt8(this.offset++, e),
              this._updateLastWrittenByte(),
              this
            );
          }
          writeUint8(e) {
            return (
              this.ensureAvailable(1),
              this._data.setUint8(this.offset++, e),
              this._updateLastWrittenByte(),
              this
            );
          }
          writeByte(e) {
            return this.writeUint8(e);
          }
          writeBytes(e) {
            this.ensureAvailable(e.length);
            for (let t = 0; t < e.length; t++)
              this._data.setUint8(this.offset++, e[t]);
            return this._updateLastWrittenByte(), this;
          }
          writeInt16(e) {
            return (
              this.ensureAvailable(2),
              this._data.setInt16(this.offset, e, this.littleEndian),
              (this.offset += 2),
              this._updateLastWrittenByte(),
              this
            );
          }
          writeUint16(e) {
            return (
              this.ensureAvailable(2),
              this._data.setUint16(this.offset, e, this.littleEndian),
              (this.offset += 2),
              this._updateLastWrittenByte(),
              this
            );
          }
          writeInt32(e) {
            return (
              this.ensureAvailable(4),
              this._data.setInt32(this.offset, e, this.littleEndian),
              (this.offset += 4),
              this._updateLastWrittenByte(),
              this
            );
          }
          writeUint32(e) {
            return (
              this.ensureAvailable(4),
              this._data.setUint32(this.offset, e, this.littleEndian),
              (this.offset += 4),
              this._updateLastWrittenByte(),
              this
            );
          }
          writeFloat32(e) {
            return (
              this.ensureAvailable(4),
              this._data.setFloat32(this.offset, e, this.littleEndian),
              (this.offset += 4),
              this._updateLastWrittenByte(),
              this
            );
          }
          writeFloat64(e) {
            return (
              this.ensureAvailable(8),
              this._data.setFloat64(this.offset, e, this.littleEndian),
              (this.offset += 8),
              this._updateLastWrittenByte(),
              this
            );
          }
          writeChar(e) {
            return this.writeUint8(e.charCodeAt(0));
          }
          writeChars(e) {
            for (let t = 0; t < e.length; t++) this.writeUint8(e.charCodeAt(t));
            return this;
          }
          writeUtf8(e) {
            const t = Object(n.encode)(e);
            return this.writeChars(t);
          }
          toArray() {
            return new Uint8Array(
              this.buffer,
              this.byteOffset,
              this.lastWrittenByte
            );
          }
          _updateLastWrittenByte() {
            this.offset > this.lastWrittenByte &&
              (this.lastWrittenByte = this.offset);
          }
        }
      },
      function (e, t, r) {
        "use strict";
        const n = r(2);
        (e.exports.nonRecord = function (e, t) {
          const r = n.str2num(t.type);
          for (
            var i = t.size / n.num2bytes(r), o = new Array(i), a = 0;
            a < i;
            a++
          )
            o[a] = n.readType(e, r, 1);
          return o;
        }),
          (e.exports.record = function (e, t, r) {
            const i = n.str2num(t.type),
              o = t.size ? t.size / n.num2bytes(i) : 1;
            var a = r.length,
              s = new Array(a);
            const l = r.recordStep;
            for (var c = 0; c < a; c++) {
              var u = e.offset;
              (s[c] = n.readType(e, i, o)), e.seek(u + l);
            }
            return s;
          });
      },
      function (e, t, r) {
        "use strict";
        const n = r(0),
          i = r(2),
          o = 0,
          a = 10,
          s = 11,
          l = 12;
        const c = 0;
        function u(e) {
          const t = e.readUint32();
          if (t === o)
            return (
              n.notNetcdf(
                e.readUint32() !== o,
                "wrong empty tag for list of attributes"
              ),
              []
            );
          {
            n.notNetcdf(t !== l, "wrong tag for list of attributes");
            const o = e.readUint32();
            for (var r = new Array(o), a = 0; a < o; a++) {
              var s = n.readName(e),
                c = e.readUint32();
              n.notNetcdf(c < 1 || c > 6, "non valid type ".concat(c));
              var u = e.readUint32(),
                d = i.readType(e, c, u);
              n.padding(e), (r[a] = { name: s, type: i.num2str(c), value: d });
            }
          }
          return r;
        }
        e.exports = function (e, t) {
          var r = { recordDimension: { length: e.readUint32() } };
          r.version = t;
          var l = (function (e) {
            var t, r;
            const i = e.readUint32();
            if (i === o)
              return (
                n.notNetcdf(
                  e.readUint32() !== o,
                  "wrong empty tag for list of dimensions"
                ),
                []
              );
            {
              n.notNetcdf(i !== a, "wrong tag for list of dimensions");
              const o = e.readUint32();
              for (var s = new Array(o), l = 0; l < o; l++) {
                var u = n.readName(e);
                const i = e.readUint32();
                i === c && ((t = l), (r = u)), (s[l] = { name: u, size: i });
              }
            }
            return { dimensions: s, recordId: t, recordName: r };
          })(e);
          (r.recordDimension.id = l.recordId),
            (r.recordDimension.name = l.recordName),
            (r.dimensions = l.dimensions),
            (r.globalAttributes = u(e));
          var d = (function (e, t, r) {
            const a = e.readUint32();
            var l = 0;
            if (a === o)
              return (
                n.notNetcdf(
                  e.readUint32() !== o,
                  "wrong empty tag for list of variables"
                ),
                []
              );
            {
              n.notNetcdf(a !== s, "wrong tag for list of variables");
              const o = e.readUint32();
              for (var c = new Array(o), d = 0; d < o; d++) {
                var h = n.readName(e);
                const o = e.readUint32();
                for (var p = new Array(o), f = 0; f < o; f++)
                  p[f] = e.readUint32();
                var m = u(e),
                  g = e.readUint32();
                n.notNetcdf(g < 1 && g > 6, "non valid type ".concat(g));
                const a = e.readUint32();
                var v = e.readUint32();
                2 === r &&
                  (n.notNetcdf(v > 0, "offsets larger than 4GB not supported"),
                  (v = e.readUint32()));
                let s = !1;
                void 0 !== t && p[0] === t && ((l += a), (s = !0)),
                  (c[d] = {
                    name: h,
                    dimensions: p,
                    attributes: m,
                    type: i.num2str(g),
                    size: a,
                    offset: v,
                    record: s,
                  });
              }
            }
            return { variables: c, recordStep: l };
          })(e, l.recordId, t);
          return (
            (r.variables = d.variables),
            (r.recordDimension.recordStep = d.recordStep),
            r
          );
        };
      },
      function (e, t, r) {
        "use strict";
        e.exports = function () {
          let e = [];
          e.push("DIMENSIONS");
          for (let t of this.dimensions)
            e.push("  ".concat(t.name.padEnd(30), " = size: ").concat(t.size));
          e.push(""), e.push("GLOBAL ATTRIBUTES");
          for (let t of this.globalAttributes)
            e.push("  ".concat(t.name.padEnd(30), " = ").concat(t.value));
          let t = JSON.parse(JSON.stringify(this.variables));
          e.push(""), e.push("VARIABLES:");
          for (let r of t) {
            r.value = this.getDataVariable(r);
            let t = JSON.stringify(r.value);
            t.length > 50 && (t = t.substring(0, 50)),
              isNaN(r.value.length) ||
                (t += " (length: ".concat(r.value.length, ")")),
              e.push("  ".concat(r.name.padEnd(30), " = ").concat(t));
          }
          return e.join("\n");
        };
      },
    ]);
  }),
  ($3Dmol = (function (e) {
    return e.$3Dmol || {};
  })(window)),
  "object" == typeof module &&
    "object" == typeof module.exports &&
    (module.exports = $3Dmol),
  $3Dmol.notrack,
  String.prototype.startsWith ||
    (String.prototype.startsWith = function (e) {
      return 0 === this.lastIndexOf(e, 0);
    }),
  String.prototype.endsWith ||
    (String.prototype.endsWith = function (e) {
      return -1 !== this.indexOf(e, this.length - e.length);
    }),
  $.ajaxTransport("+binary", function (e, t, r) {
    if (
      window.FormData &&
      ((e.dataType && "binary" == e.dataType) ||
        (e.data &&
          ((window.ArrayBuffer && e.data instanceof ArrayBuffer) ||
            (window.Blob && e.data instanceof Blob))))
    )
      return {
        send: function (t, r) {
          var n = new XMLHttpRequest(),
            i = e.url,
            o = e.type,
            a = e.async || !0,
            s = e.responseType || "blob",
            l = e.data || null,
            c = e.username || null,
            u = e.password || null,
            d = function () {
              var t = {};
              (t[e.dataType] = n.response),
                r(n.status, n.statusText, t, n.getAllResponseHeaders());
            };
          for (var h in (n.addEventListener("load", d),
          n.addEventListener("error", d),
          n.addEventListener("abort", d),
          n.open(o, i, a, c, u),
          t))
            n.setRequestHeader(h, t[h]);
          (n.responseType = s), n.send(l);
        },
        abort: function () {
          r.abort();
        },
      };
  }),
  ($3Dmol.createViewer = function (e, t, r) {
    if (("string" == typeof e && (e = $("#" + e)), e)) {
      (t = t || {}), (r = r || {});
      try {
        return new $3Dmol.GLViewer(e, t, r);
      } catch (e) {
        throw "error creating viewer: " + e;
      }
      return null;
    }
  }),
  ($3Dmol.createViewerGrid = function (e, t, r) {
    if (("string" == typeof e && (e = $("#" + e)), e)) {
      (t = t || {}), (r = r || {});
      var n = [],
        i = document.createElement("canvas");
      (r.rows = t.rows),
        (r.cols = t.cols),
        (r.control_all = null != t.control_all && t.control_all),
        $(e).append($(i));
      try {
        for (var o = 0; o < t.rows; o++) {
          for (var a = [], s = 0; s < t.cols; s++) {
            (r.row = o),
              (r.col = s),
              (r.canvas = i),
              (r.viewers = n),
              (r.control_all = t.control_all);
            var l = $3Dmol.createViewer(e, r);
            a.push(l);
          }
          n.unshift(a);
        }
      } catch (e) {
        throw "error creating viewer grid: " + e;
      }
      return n;
    }
  }),
  ($3Dmol.viewers = {}),
  ($3Dmol.getbin = function (e, t, r, n) {
    var i = new Promise(function (t, i) {
      (r = null == r ? "GET" : r),
        $.ajax({
          url: e,
          dataType: "binary",
          method: r,
          data: n,
          responseType: "arraybuffer",
          processData: !1,
        })
          .done(function (e) {
            t(e);
          })
          .fail(function (e, t) {
            console.log(t), i();
          });
    });
    return t ? i.then(t) : i;
  }),
  ($3Dmol.base64ToArray = function (e) {
    for (
      var t = window.atob(e), r = t.length, n = new Uint8Array(r), i = 0;
      i < r;
      i++
    )
      n[i] = t.charCodeAt(i);
    return n;
  }),
  ($3Dmol.download = function (e, t, r, n) {
    var i = "",
      o = "",
      a = "",
      s = "",
      l = null,
      c = t.addModel();
    if ("mmtf:" === e.substr(0, 5))
      (o = r && r.pdbUri ? r.pdbUri : "https://mmtf.rcsb.org/v1.0/full/"),
        (e = e.substr(5).toUpperCase()),
        (s = o + e),
        r &&
          void 0 === r.noComputeSecondaryStructure &&
          (r.noComputeSecondaryStructure = !0),
        (l = new Promise(function (e) {
          $3Dmol.getbin(s).then(
            function (n) {
              c.addMolData(n, "mmtf", r), t.zoomTo(), t.render(), e(c);
            },
            function () {
              console.log("fetch of " + s + " failed.");
            }
          );
        }));
    else {
      if ("pdb:" === e.substr(0, 4)) {
        if (
          ((i = "mmtf"),
          r && r.format && (i = r.format),
          r &&
            void 0 === r.noComputeSecondaryStructure &&
            (r.noComputeSecondaryStructure = !0),
          !(e = e.substr(4).toUpperCase()).match(/^[1-9][A-Za-z0-9]{3}$/))
        )
          return void alert("Wrong PDB ID");
        "mmtf" == i
          ? ((a =
              r && r.mmtfUri ? r.mmtfUri : "https://mmtf.rcsb.org/v1.0/full/"),
            (s = a + e.toUpperCase()))
          : ((o = r && r.pdbUri ? r.pdbUri : "https://files.rcsb.org/view/"),
            (s = o + e + "." + i));
      } else if ("cid:" == e.substr(0, 4)) {
        if (((i = "sdf"), !(e = e.substr(4)).match(/^[0-9]+$/)))
          return void alert("Wrong Compound ID");
        s =
          "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" +
          e +
          "/SDF?record_type=3d";
      } else "url:" == e.substr(0, 4) && ((s = e.substr(4)), (i = s));
      var u = function (e) {
        c.addMolData(e, i, r), t.zoomTo(), t.render();
      };
      l = new Promise(function (t) {
        "mmtf" == i
          ? $3Dmol
              .getbin(s)
              .then(function (e) {
                u(e), t(c);
              })
              .catch(function () {
                (o = r && r.pdbUri ? r.pdbUri : "https://files.rcsb.org/view/"),
                  (s = o + e + "." + i),
                  console.log("falling back to pdb format"),
                  $.get(s, function (e) {
                    u(e), t(c);
                  }).fail(function (e) {
                    u(""),
                      t(c),
                      console.log("fetch of " + s + " failed: " + e.statusText);
                  });
              })
          : $.get(s, function (e) {
              u(e), t(c);
            }).fail(function (e) {
              u(""),
                t(c),
                console.log("fetch of " + s + " failed: " + e.statusText);
            });
      });
    }
    return n
      ? (l.then(function (e) {
          n(e);
        }),
        c)
      : l;
  }),
  ($3Dmol.SurfaceType = { VDW: 1, MS: 2, SAS: 3, SES: 4 }),
  ($3Dmol.mergeGeos = function (e, t) {
    var r = t.geometry;
    void 0 !== r && e.geometryGroups.push(r.geometryGroups[0]);
  }),
  ($3Dmol.multiLineString = function (e) {
    return e
      .toString()
      .replace(/^[^\/]+\/\*!?/, "")
      .replace(/\*\/[^\/]+$/, "");
  }),
  ($3Dmol.syncSurface = !1),
  (window.navigator.userAgent.indexOf("MSIE ") >= 0 ||
    window.navigator.userAgent.indexOf("Trident/") >= 0) &&
    ($3Dmol.syncSurface = !0),
  ($3Dmol.specStringToObject = function (e) {
    if ("object" == typeof e) return e;
    if (void 0 === e || null == e) return e;
    var t = function (e) {
        return $3Dmol.isNumeric(e)
          ? Math.floor(parseFloat(e)) == parseInt(e)
            ? parseFloat(e)
            : e.indexOf(".") >= 0
            ? parseFloat(e)
            : parseInt(e)
          : "true" === e || ("false" !== e && e);
      },
      r = {};
    if ("all" === (e = e.replace(/%7E/, "~"))) return r;
    for (var n = e.split(";"), i = 0; i < n.length; i++) {
      var o = n[i].split(":"),
        a = o[0],
        s = {},
        l = o[1];
      if (l)
        if (-1 !== (l = l.replace(/~/g, "=")).indexOf("="))
          for (var c = l.split(","), u = 0; u < c.length; u++) {
            var d = c[u].split("=", 2);
            s[d[0]] = t(d[1]);
          }
        else s = -1 !== l.indexOf(",") ? l.split(",") : t(l);
      r[a] = s;
    }
    return r;
  }),
  ($3Dmol.getExtent = function (e, t) {
    var r,
      n,
      i,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h = !t;
    if (
      ((r = n = i = 9999),
      (o = a = s = -9999),
      (l = c = u = d = 0),
      0 === e.length)
    )
      return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
    for (var p = 0; p < e.length; p++) {
      var f = e[p];
      if (
        void 0 !== f &&
        isFinite(f.x) &&
        isFinite(f.y) &&
        isFinite(f.z) &&
        (d++,
        (l += f.x),
        (c += f.y),
        (u += f.z),
        (r = r < f.x ? r : f.x),
        (n = n < f.y ? n : f.y),
        (i = i < f.z ? i : f.z),
        (o = o > f.x ? o : f.x),
        (a = a > f.y ? a : f.y),
        (s = s > f.z ? s : f.z),
        f.symmetries && h)
      )
        for (var m = 0; m < f.symmetries.length; m++)
          d++,
            (l += f.symmetries[m].x),
            (c += f.symmetries[m].y),
            (u += f.symmetries[m].z),
            (r = r < f.symmetries[m].x ? r : f.symmetries[m].x),
            (n = n < f.symmetries[m].y ? n : f.symmetries[m].y),
            (i = i < f.symmetries[m].z ? i : f.symmetries[m].z),
            (o = o > f.symmetries[m].x ? o : f.symmetries[m].x),
            (a = a > f.symmetries[m].y ? a : f.symmetries[m].y),
            (s = s > f.symmetries[m].z ? s : f.symmetries[m].z);
    }
    return [
      [r, n, i],
      [o, a, s],
      [l / d, c / d, u / d],
    ];
  }),
  ($3Dmol.getAtomProperty = function (e, t) {
    var r = null;
    return (
      e.properties && void 0 !== e.properties[t]
        ? (r = e.properties[t])
        : void 0 !== e[t] && (r = e[t]),
      r
    );
  }),
  ($3Dmol.getPropertyRange = function (e, t) {
    for (
      var r = Number.POSITIVE_INFINITY,
        n = Number.NEGATIVE_INFINITY,
        i = 0,
        o = e.length;
      i < o;
      i++
    ) {
      var a = e[i],
        s = $3Dmol.getAtomProperty(a, t);
      null != s && (s < r && (r = s), s > n && (n = s));
    }
    return (
      isFinite(r) || isFinite(n)
        ? isFinite(r)
          ? isFinite(n) || (n = r)
          : (r = n)
        : (r = n = 0),
      [r, n]
    );
  }),
  "function" == typeof define &&
    define.amd &&
    define("$3Dmol", [], function () {
      return $3Dmol;
    }),
  ($3Dmol.createStereoViewer = function (e) {
    var t = this;
    if (("string" == typeof e && (e = $("#" + e)), e)) {
      var r = $3Dmol.createViewerGrid(e, { rows: 1, cols: 2, control_all: !0 });
      (this.glviewer1 = r[0][0]),
        (this.glviewer2 = r[0][1]),
        this.glviewer1.setAutoEyeSeparation(!1),
        this.glviewer2.setAutoEyeSeparation(!0),
        this.glviewer1.linkViewer(this.glviewer2),
        this.glviewer2.linkViewer(this.glviewer1);
      for (
        var n = Object.getOwnPropertyNames(this.glviewer1).filter(function (e) {
            return "function" == typeof t.glviewer1[e];
          }),
          i = 0;
        i < n.length;
        i++
      )
        this[n[i]] = (function (e) {
          return function () {
            var t = this.glviewer1[e].apply(this.glviewer1, arguments),
              r = this.glviewer2[e].apply(this.glviewer2, arguments);
            return [t, r];
          };
        })(n[i]);
      (this.setCoordinates = function (e, t, r) {
        for (var n = 0; n < e.length; n++) e[n].setCoordinates(t, r);
      }),
        (this.surfacesFinished = function () {
          return (
            this.glviewer1.surfacesFinished() &&
            this.glviewer2.surfacesFinished()
          );
        }),
        (this.isAnimated = function () {
          return this.glviewer1.isAnimated() || this.glviewer2.isAnimated();
        }),
        (this.render = function (e) {
          this.glviewer1.render(), this.glviewer2.render(), e && e(this);
        }),
        (this.getCanvas = function () {
          return this.glviewer1.getCanvas();
        });
    }
  }),
  ($3Dmol.extend = function (e, t) {
    for (var r in t) t.hasOwnProperty(r) && void 0 !== t[r] && (e[r] = t[r]);
    return e;
  }),
  ($3Dmol.deepCopy = function (e) {
    let t, r, n;
    if (null == e) return {};
    if ("object" != typeof e || null === e) return e;
    for (n in ((t = Array.isArray(e) ? [] : {}), e))
      (r = e[n]), (t[n] = $3Dmol.deepCopy(r));
    return t;
  }),
  ($3Dmol.isNumeric = function (e) {
    var t = typeof e;
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }),
  ($3Dmol.isEmptyObject = function (e) {
    var t;
    for (t in e) return !1;
    return !0;
  }),
  ($3Dmol.makeFunction = function (callback) {
    return (
      callback &&
        "string" == typeof callback &&
        (callback = eval("(" + callback + ")")),
      callback && "function" != typeof callback ? null : callback
    );
  }),
  ($3Dmol.adjustVolumeStyle = function (e) {
    e &&
      (!e.volformat ||
        e.voldata instanceof $3Dmol.VolumeData ||
        (e.voldata = new $3Dmol.VolumeData(e.voldata, e.volformat)),
      e.volscheme && (e.volscheme = $3Dmol.Gradient.getGradient(e.volscheme)));
  });
var $3Dmol = $3Dmol || {};
($3Dmol.Math = {
  clamp: function (e, t, r) {
    return Math.min(Math.max(e, t), r);
  },
  degToRad: (function () {
    var e = Math.PI / 180;
    return function (t) {
      return t * e;
    };
  })(),
}),
  ($3Dmol.Quaternion = function (e, t, r, n) {
    (this.x = e || 0),
      (this.y = t || 0),
      (this.z = r || 0),
      (this.w = void 0 !== n ? n : 1);
  }),
  ($3Dmol.Quaternion.prototype = {
    constructor: $3Dmol.Quaternion,
    set: function (e, t, r, n) {
      return (this.x = e), (this.y = t), (this.z = r), (this.w = n), this;
    },
    copy: function (e) {
      return (
        (this.x = e.x), (this.y = e.y), (this.z = e.z), (this.w = e.w), this
      );
    },
    conjugate: function () {
      return (this.x *= -1), (this.y *= -1), (this.z *= -1), this;
    },
    inverse: function () {
      return this.conjugate().normalize();
    },
    length: function () {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    },
    lengthxyz: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    normalize: function () {
      var e = this.length();
      return (
        0 === e
          ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 1))
          : ((e = 1 / e),
            (this.x *= e),
            (this.y *= e),
            (this.z *= e),
            (this.w *= e)),
        this
      );
    },
    multiply: function (e) {
      return this.multiplyQuaternions(this, e);
    },
    multiplyScalar: function (e) {
      return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
    },
    multiplyQuaternions: function (e, t) {
      var r = e.x,
        n = e.y,
        i = e.z,
        o = e.w,
        a = t.x,
        s = t.y,
        l = t.z,
        c = t.w;
      return (
        (this.x = r * c + o * a + n * l - i * s),
        (this.y = n * c + o * s + i * a - r * l),
        (this.z = i * c + o * l + r * s - n * a),
        (this.w = o * c - r * a - n * s - i * l),
        this
      );
    },
    sub: function (e) {
      return (
        (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
      );
    },
    clone: function () {
      return new $3Dmol.Quaternion(this.x, this.y, this.z, this.w);
    },
    setFromEuler: function (e) {
      var t = Math.cos(e.x / 2),
        r = Math.cos(e.y / 2),
        n = Math.cos(e.z / 2),
        i = Math.sin(e.x / 2),
        o = Math.sin(e.y / 2),
        a = Math.sin(e.z / 2);
      return (
        (this.x = i * r * n + t * o * a),
        (this.y = t * o * n - i * r * a),
        (this.z = t * r * a + i * o * n),
        (this.w = t * r * n - i * o * a),
        this
      );
    },
  }),
  ($3Dmol.Vector2 = function (e, t) {
    (this.x = e || 0), (this.y = t || 0);
  }),
  ($3Dmol.Vector2.prototype = {
    constructor: $3Dmol.Vector2,
    set: function (e, t) {
      return (this.x = e), (this.y = t), this;
    },
    subVectors: function (e, t) {
      return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
    },
    copy: function (e) {
      return (this.x = e.x), (this.y = e.y), this;
    },
    clone: function () {
      return new $3Dmol.Vector2(this.x, this.y);
    },
  }),
  ($3Dmol.Vector3 = function (e, t, r) {
    (this.x = e || 0), (this.y = t || 0), (this.z = r || 0);
  }),
  ($3Dmol.Vector3.prototype = {
    constructor: $3Dmol.Vector3,
    set: function (e, t, r) {
      return (this.x = e), (this.y = t), (this.z = r), this;
    },
    copy: function (e) {
      return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
    },
    add: function (e) {
      return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
    },
    addVectors: function (e, t) {
      return (
        (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
      );
    },
    multiplyVectors: function (e, t) {
      return (
        (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
      );
    },
    sub: function (e) {
      return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
    },
    subVectors: function (e, t) {
      return (
        (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
      );
    },
    multiplyScalar: function (e) {
      return (this.x *= e), (this.y *= e), (this.z *= e), this;
    },
    divideScalar: function (e) {
      return (
        0 !== e
          ? ((this.x /= e), (this.y /= e), (this.z /= e))
          : ((this.x = 0), (this.y = 0), (this.z = 0)),
        this
      );
    },
    max: function (e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        this
      );
    },
    min: function (e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        this
      );
    },
    distanceTo: function (e) {
      return Math.sqrt(this.distanceToSquared(e));
    },
    distanceToSquared: function (e) {
      var t = this.x - e.x,
        r = this.y - e.y,
        n = this.z - e.z;
      return t * t + r * r + n * n;
    },
    applyMatrix3: function (e) {
      var t = this.x,
        r = this.y,
        n = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[3] * r + i[6] * n),
        (this.y = i[1] * t + i[4] * r + i[7] * n),
        (this.z = i[2] * t + i[5] * r + i[8] * n),
        this
      );
    },
    applyMatrix4: function (e) {
      var t = this.x,
        r = this.y,
        n = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[4] * r + i[8] * n + i[12]),
        (this.y = i[1] * t + i[5] * r + i[9] * n + i[13]),
        (this.z = i[2] * t + i[6] * r + i[10] * n + i[14]),
        this
      );
    },
    applyProjection: function (e) {
      var t = this.x,
        r = this.y,
        n = this.z,
        i = e.elements,
        o = i[3] * t + i[7] * r + i[11] * n + i[15];
      return (
        (this.x = (i[0] * t + i[4] * r + i[8] * n + i[12]) / o),
        (this.y = (i[1] * t + i[5] * r + i[9] * n + i[13]) / o),
        (this.z = (i[2] * t + i[6] * r + i[10] * n + i[14]) / o),
        this
      );
    },
    applyQuaternion: function (e) {
      var t = this.x,
        r = this.y,
        n = this.z,
        i = e.x,
        o = e.y,
        a = e.z,
        s = e.w,
        l = {};
      (l.x = 2 * (r * a - n * o)),
        (l.y = 2 * (n * i - t * a)),
        (l.z = 2 * (t * o - r * i));
      var c = {};
      return (
        (c.x = l.y * a - l.z * o),
        (c.y = l.z * i - l.x * a),
        (c.z = l.x * o - l.y * i),
        (this.x = t + s * l.x + c.x),
        (this.y = r + s * l.y + c.y),
        (this.z = n + s * l.z + c.z),
        this
      );
    },
    negate: function () {
      return this.multiplyScalar(-1);
    },
    dot: function (e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    },
    length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    },
    normalize: function () {
      return this.divideScalar(this.length());
    },
    cross: function (e) {
      var t = this.x,
        r = this.y,
        n = this.z;
      return (
        (this.x = r * e.z - n * e.y),
        (this.y = n * e.x - t * e.z),
        (this.z = t * e.y - r * e.x),
        this
      );
    },
    crossVectors: function (e, t) {
      return (
        (this.x = e.y * t.z - e.z * t.y),
        (this.y = e.z * t.x - e.x * t.z),
        (this.z = e.x * t.y - e.y * t.x),
        this
      );
    },
    getPositionFromMatrix: function (e) {
      return (
        (this.x = e.elements[12]),
        (this.y = e.elements[13]),
        (this.z = e.elements[14]),
        this
      );
    },
    setEulerFromRotationMatrix: function (e, t) {
      var r = e.elements,
        n = r[0],
        i = r[4],
        o = r[8],
        a = r[5],
        s = r[9],
        l = r[6],
        c = r[10];
      return (
        void 0 === t || "XYZ" === t
          ? ((this.y = Math.asin($3Dmol.Math.clamp(o, -1, 1))),
            Math.abs(o) < 0.99999
              ? ((this.x = Math.atan2(-s, c)), (this.z = Math.atan2(-i, n)))
              : ((this.x = Math.atan2(l, a)), (this.z = 0)))
          : console.error(
              "Error with vector's setEulerFromRotationMatrix: Unknown order: " +
                t
            ),
        this
      );
    },
    rotateAboutVector: function (e, t) {
      e.normalize();
      var r = Math.cos(t),
        n = Math.sin(t),
        i = this.clone().multiplyScalar(r),
        o = e.clone().cross(this).multiplyScalar(n),
        a = e
          .clone()
          .multiplyScalar(e.clone().dot(this))
          .multiplyScalar(1 - r),
        s = i.add(o).add(a);
      return (this.x = s.x), (this.y = s.y), (this.z = s.z), this;
    },
    setFromMatrixPosition: function (e) {
      var t = e.elements;
      return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
    },
    transformDirection: function (e) {
      var t = this.x,
        r = this.y,
        n = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[4] * r + i[8] * n),
        (this.y = i[1] * t + i[5] * r + i[9] * n),
        (this.z = i[2] * t + i[6] * r + i[10] * n),
        this.normalize()
      );
    },
    clone: function () {
      return new $3Dmol.Vector3(this.x, this.y, this.z);
    },
  }),
  ($3Dmol.Matrix3 = function (e, t, r, n, i, o, a, s, l) {
    (this.elements = new Float32Array(9)),
      this.set(
        void 0 !== e ? e : 1,
        t || 0,
        r || 0,
        n || 0,
        void 0 !== i ? i : 1,
        o || 0,
        a || 0,
        s || 0,
        void 0 !== l ? l : 1
      );
  }),
  ($3Dmol.square = function (e) {
    return e * e;
  }),
  ($3Dmol.conversionMatrix3 = function (e, t, r, n, i, o) {
    (n = (n * Math.PI) / 180),
      (i = (i * Math.PI) / 180),
      (o = (o * Math.PI) / 180);
    let a = $3Dmol.square,
      s = Math.cos(n),
      l = Math.cos(i),
      c = Math.cos(o),
      u = Math.sin(o);
    return new $3Dmol.Matrix3(
      e,
      t * c,
      r * l,
      0,
      t * u,
      (r * (s - l * c)) / u,
      0,
      0,
      (r * Math.sqrt(1 - a(s) - a(l) - a(c) + 2 * s * l * c)) / u
    );
  }),
  ($3Dmol.Matrix3.prototype = {
    constructor: $3Dmol.Matrix3,
    set: function (e, t, r, n, i, o, a, s, l) {
      var c = this.elements;
      return (
        (c[0] = e),
        (c[3] = t),
        (c[6] = r),
        (c[1] = n),
        (c[4] = i),
        (c[7] = o),
        (c[2] = a),
        (c[5] = s),
        (c[8] = l),
        this
      );
    },
    identity: function () {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    },
    copy: function (e) {
      var t = e.elements;
      this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]);
    },
    multiplyScalar: function (e) {
      var t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    },
    getInverse3: function (e) {
      let t = e.elements,
        r = this.elements;
      (r[0] = t[4] * t[8] - t[5] * t[7]),
        (r[3] = t[6] * t[5] - t[3] * t[8]),
        (r[6] = t[3] * t[7] - t[6] * t[4]),
        (r[1] = t[7] * t[2] - t[1] * t[8]),
        (r[4] = t[0] * t[8] - t[6] * t[2]),
        (r[7] = t[1] * t[6] - t[0] * t[7]),
        (r[2] = t[1] * t[5] - t[2] * t[4]),
        (r[5] = t[2] * t[3] - t[0] * t[5]),
        (r[8] = t[0] * t[4] - t[1] * t[3]);
      let n = t[0] * r[0] + t[3] * r[1] + t[6] * r[2];
      return this.multiplyScalar(1 / n), this;
    },
    getInverse: function (e, t) {
      var r = e.elements,
        n = this.elements;
      (n[0] = r[10] * r[5] - r[6] * r[9]),
        (n[1] = -r[10] * r[1] + r[2] * r[9]),
        (n[2] = r[6] * r[1] - r[2] * r[5]),
        (n[3] = -r[10] * r[4] + r[6] * r[8]),
        (n[4] = r[10] * r[0] - r[2] * r[8]),
        (n[5] = -r[6] * r[0] + r[2] * r[4]),
        (n[6] = r[9] * r[4] - r[5] * r[8]),
        (n[7] = -r[9] * r[0] + r[1] * r[8]),
        (n[8] = r[5] * r[0] - r[1] * r[4]);
      var i = r[0] * n[0] + r[1] * n[3] + r[2] * n[6];
      if (0 === i) {
        var o = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
        if (t) throw new Error(o);
        return console.warn(o), this.identity(), this;
      }
      return this.multiplyScalar(1 / i), this;
    },
    getDeterminant: function () {
      var e = this.elements;
      return (
        e[0] * e[4] * e[8] +
        e[1] * e[5] * e[6] +
        e[2] * e[3] * e[7] -
        e[2] * e[4] * e[6] -
        e[1] * e[3] * e[8] -
        e[0] * e[5] * e[7]
      );
    },
    getMatrix4: function () {
      var e = this.elements;
      return new $3Dmol.Matrix4(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0
      );
    },
    transpose: function () {
      var e,
        t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    },
    clone: function () {
      var e = this.elements;
      return new $3Dmol.Matrix3(
        e[0],
        e[3],
        e[6],
        e[1],
        e[4],
        e[7],
        e[2],
        e[5],
        e[8]
      );
    },
  }),
  ($3Dmol.Matrix4 = function (e, t, r, n, i, o, a, s, l, c, u, d, h, p, f, m) {
    if (void 0 === t && void 0 !== e) this.elements = new Float32Array(e);
    else {
      var g = (this.elements = new Float32Array(16));
      (g[0] = void 0 !== e ? e : 1),
        (g[4] = t || 0),
        (g[8] = r || 0),
        (g[12] = n || 0),
        (g[1] = i || 0),
        (g[5] = void 0 !== o ? o : 1),
        (g[9] = a || 0),
        (g[13] = s || 0),
        (g[2] = l || 0),
        (g[6] = c || 0),
        (g[10] = void 0 !== u ? u : 1),
        (g[14] = d || 0),
        (g[3] = h || 0),
        (g[7] = p || 0),
        (g[11] = f || 0),
        (g[15] = void 0 !== m ? m : 1);
    }
  }),
  ($3Dmol.Matrix4.prototype = {
    constructor: $3Dmol.Matrix4,
    set: function (e, t, r, n, i, o, a, s, l, c, u, d, h, p, f, m) {
      var g = this.elements;
      return (
        (g[0] = e),
        (g[4] = t),
        (g[8] = r),
        (g[12] = n),
        (g[1] = i),
        (g[5] = o),
        (g[9] = a),
        (g[13] = s),
        (g[2] = l),
        (g[6] = c),
        (g[10] = u),
        (g[14] = d),
        (g[3] = h),
        (g[7] = p),
        (g[11] = f),
        (g[15] = m),
        this
      );
    },
    identity: function () {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    },
    copy: function (e) {
      var t = e.elements;
      return (
        this.set(
          t[0],
          t[4],
          t[8],
          t[12],
          t[1],
          t[5],
          t[9],
          t[13],
          t[2],
          t[6],
          t[10],
          t[14],
          t[3],
          t[7],
          t[11],
          t[15]
        ),
        this
      );
    },
    matrix3FromTopLeft: function () {
      var e = this.elements;
      return new $3Dmol.Matrix3(
        e[0],
        e[4],
        e[8],
        e[1],
        e[5],
        e[9],
        e[2],
        e[6],
        e[10]
      );
    },
    setRotationFromEuler: function (e, t) {
      var r = this.elements,
        n = e.x,
        i = e.y,
        o = e.z,
        a = Math.cos(n),
        s = Math.sin(n),
        l = Math.cos(i),
        c = Math.sin(i),
        u = Math.cos(o),
        d = Math.sin(o);
      if (void 0 === t || "XYZ" === t) {
        var h = a * u,
          p = a * d,
          f = s * u,
          m = s * d;
        (r[0] = l * u),
          (r[4] = -l * d),
          (r[8] = c),
          (r[1] = p + f * c),
          (r[5] = h - m * c),
          (r[9] = -s * l),
          (r[2] = m - h * c),
          (r[6] = f + p * c),
          (r[10] = a * l);
      } else
        console.error("Error with matrix4 setRotationFromEuler. Order: " + t);
      return this;
    },
    setRotationFromQuaternion: function (e) {
      var t = this.elements,
        r = e.x,
        n = e.y,
        i = e.z,
        o = e.w,
        a = r + r,
        s = n + n,
        l = i + i,
        c = r * a,
        u = r * s,
        d = r * l,
        h = n * s,
        p = n * l,
        f = i * l,
        m = o * a,
        g = o * s,
        v = o * l;
      return (
        (t[0] = 1 - (h + f)),
        (t[4] = u - v),
        (t[8] = d + g),
        (t[1] = u + v),
        (t[5] = 1 - (c + f)),
        (t[9] = p - m),
        (t[2] = d - g),
        (t[6] = p + m),
        (t[10] = 1 - (c + h)),
        this
      );
    },
    lookAt: (function () {
      var e = new $3Dmol.Vector3(),
        t = new $3Dmol.Vector3(),
        r = new $3Dmol.Vector3();
      return function (n, i, o) {
        var a = this.elements;
        return (
          r.subVectors(n, i).normalize(),
          0 === r.length() && (r.z = 1),
          e.crossVectors(o, r).normalize(),
          0 === e.length() && ((r.x += 1e-4), e.crossVectors(o, r).normalize()),
          t.crossVectors(r, e),
          (a[0] = e.x),
          (a[4] = t.x),
          (a[8] = r.x),
          (a[1] = e.y),
          (a[5] = t.y),
          (a[9] = r.y),
          (a[2] = e.z),
          (a[6] = t.z),
          (a[10] = r.z),
          this
        );
      };
    })(),
    multiplyMatrices: function (e, t) {
      var r = e.elements,
        n = t.elements,
        i = this.elements,
        o = r[0],
        a = r[4],
        s = r[8],
        l = r[12],
        c = r[1],
        u = r[5],
        d = r[9],
        h = r[13],
        p = r[2],
        f = r[6],
        m = r[10],
        g = r[14],
        v = r[3],
        y = r[7],
        x = r[11],
        b = r[15],
        w = n[0],
        D = n[4],
        C = n[8],
        S = n[12],
        A = n[1],
        $ = n[5],
        M = n[9],
        k = n[13],
        z = n[2],
        _ = n[6],
        T = n[10],
        L = n[14],
        E = n[3],
        I = n[7],
        F = n[11],
        O = n[15];
      return (
        (i[0] = o * w + a * A + s * z + l * E),
        (i[4] = o * D + a * $ + s * _ + l * I),
        (i[8] = o * C + a * M + s * T + l * F),
        (i[12] = o * S + a * k + s * L + l * O),
        (i[1] = c * w + u * A + d * z + h * E),
        (i[5] = c * D + u * $ + d * _ + h * I),
        (i[9] = c * C + u * M + d * T + h * F),
        (i[13] = c * S + u * k + d * L + h * O),
        (i[2] = p * w + f * A + m * z + g * E),
        (i[6] = p * D + f * $ + m * _ + g * I),
        (i[10] = p * C + f * M + m * T + g * F),
        (i[14] = p * S + f * k + m * L + g * O),
        (i[3] = v * w + y * A + x * z + b * E),
        (i[7] = v * D + y * $ + x * _ + b * I),
        (i[11] = v * C + y * M + x * T + b * F),
        (i[15] = v * S + y * k + x * L + b * O),
        this
      );
    },
    multiplyScalar: function (e) {
      var t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    },
    makeTranslation: function (e, t, r) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this;
    },
    snap: function (e) {
      e || (e = 4);
      let t = Math.pow(10, 4),
        r = this.elements;
      for (let e = 0; e < 16; e++) {
        let n = Math.round(r[e]);
        n == Math.round(r[e] * t) / t && (r[e] = n);
      }
      return this;
    },
    transpose: function () {
      var e,
        t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[4]),
        (t[4] = e),
        (e = t[2]),
        (t[2] = t[8]),
        (t[8] = e),
        (e = t[6]),
        (t[6] = t[9]),
        (t[9] = e),
        (e = t[3]),
        (t[3] = t[12]),
        (t[12] = e),
        (e = t[7]),
        (t[7] = t[13]),
        (t[13] = e),
        (e = t[11]),
        (t[11] = t[14]),
        (t[14] = e),
        this
      );
    },
    getPosition: (function () {
      var e = new $3Dmol.Vector3();
      return function () {
        console.warn(
          "DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead."
        );
        var t = this.elements;
        return e.set(t[12], t[13], t[14]);
      };
    })(),
    setPosition: function (e) {
      var t = this.elements;
      return (t[12] = e.x), (t[13] = e.y), (t[14] = e.z), this;
    },
    translate: function (e) {
      var t = this.elements;
      return (t[12] += e.x), (t[13] += e.y), (t[14] += e.z), this;
    },
    getInverse: function (e, t) {
      var r = this.elements,
        n = e.elements,
        i = n[0],
        o = n[4],
        a = n[8],
        s = n[12],
        l = n[1],
        c = n[5],
        u = n[9],
        d = n[13],
        h = n[2],
        p = n[6],
        f = n[10],
        m = n[14],
        g = n[3],
        v = n[7],
        y = n[11],
        x = n[15];
      (r[0] =
        u * m * v - d * f * v + d * p * y - c * m * y - u * p * x + c * f * x),
        (r[4] =
          s * f * v -
          a * m * v -
          s * p * y +
          o * m * y +
          a * p * x -
          o * f * x),
        (r[8] =
          a * d * v -
          s * u * v +
          s * c * y -
          o * d * y -
          a * c * x +
          o * u * x),
        (r[12] =
          s * u * p -
          a * d * p -
          s * c * f +
          o * d * f +
          a * c * m -
          o * u * m),
        (r[1] =
          d * f * g -
          u * m * g -
          d * h * y +
          l * m * y +
          u * h * x -
          l * f * x),
        (r[5] =
          a * m * g -
          s * f * g +
          s * h * y -
          i * m * y -
          a * h * x +
          i * f * x),
        (r[9] =
          s * u * g -
          a * d * g -
          s * l * y +
          i * d * y +
          a * l * x -
          i * u * x),
        (r[13] =
          a * d * h -
          s * u * h +
          s * l * f -
          i * d * f -
          a * l * m +
          i * u * m),
        (r[2] =
          c * m * g -
          d * p * g +
          d * h * v -
          l * m * v -
          c * h * x +
          l * p * x),
        (r[6] =
          s * p * g -
          o * m * g -
          s * h * v +
          i * m * v +
          o * h * x -
          i * p * x),
        (r[10] =
          o * d * g -
          s * c * g +
          s * l * v -
          i * d * v -
          o * l * x +
          i * c * x),
        (r[14] =
          s * c * h -
          o * d * h -
          s * l * p +
          i * d * p +
          o * l * m -
          i * c * m),
        (r[3] =
          u * p * g -
          c * f * g -
          u * h * v +
          l * f * v +
          c * h * y -
          l * p * y),
        (r[7] =
          o * f * g -
          a * p * g +
          a * h * v -
          i * f * v -
          o * h * y +
          i * p * y),
        (r[11] =
          a * c * g -
          o * u * g -
          a * l * v +
          i * u * v +
          o * l * y -
          i * c * y),
        (r[15] =
          o * u * h -
          a * c * h +
          a * l * p -
          i * u * p -
          o * l * f +
          i * c * f);
      var b = i * r[0] + l * r[4] + h * r[8] + g * r[12];
      if (0 === b) {
        var w = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
        if (t) throw new Error(w);
        return console.warn(w), this.identity(), this;
      }
      return this.multiplyScalar(1 / b), this;
    },
    isReflected: function () {
      let e = this.elements,
        t = e[0],
        r = e[4],
        n = e[8],
        i = e[1],
        o = e[5],
        a = e[9],
        s = e[2],
        l = e[6],
        c = e[10];
      return (
        t * o * c + i * l * n + s * r * a - s * o * n - i * r * c - t * l * a <
        0
      );
    },
    compose: (function () {
      var e = new $3Dmol.Matrix4(),
        t = new $3Dmol.Matrix4();
      return function (r, n, i) {
        var o = this.elements;
        return (
          e.identity(),
          e.setRotationFromQuaternion(n),
          t.makeScale(i.x, i.y, i.z),
          this.multiplyMatrices(e, t),
          (o[12] = r.x),
          (o[13] = r.y),
          (o[14] = r.z),
          this
        );
      };
    })(),
    getScale: (function () {
      var e = new $3Dmol.Vector3(),
        t = new $3Dmol.Vector3(),
        r = new $3Dmol.Vector3();
      return function (n) {
        var i = this.elements;
        return (
          (n = n instanceof $3Dmol.Vector3 ? n : new $3Dmol.Vector3()),
          e.set(i[0], i[1], i[2]),
          t.set(i[4], i[5], i[6]),
          r.set(i[8], i[9], i[10]),
          (n.x = e.length()),
          (n.y = t.length()),
          (n.z = r.length()),
          n
        );
      };
    })(),
    decompose: (function () {
      var e = new $3Dmol.Vector3(),
        t = new $3Dmol.Vector3(),
        r = new $3Dmol.Vector3(),
        n = new $3Dmol.Matrix4();
      return function (i, o, a) {
        var s = this.elements;
        return (
          e.set(s[0], s[1], s[2]),
          t.set(s[4], s[5], s[6]),
          r.set(s[8], s[9], s[10]),
          (i = i instanceof $3Dmol.Vector3 ? i : new $3Dmol.Vector3()),
          (o = o instanceof $3Dmol.Quaternion ? o : new $3Dmol.Quaternion()),
          ((a = a instanceof $3Dmol.Vector3 ? a : new $3Dmol.Vector3()).x =
            e.length()),
          (a.y = t.length()),
          (a.z = r.length()),
          (i.x = s[12]),
          (i.y = s[13]),
          (i.z = s[14]),
          n.copy(this),
          (n.elements[0] /= a.x),
          (n.elements[1] /= a.x),
          (n.elements[2] /= a.x),
          (n.elements[4] /= a.y),
          (n.elements[5] /= a.y),
          (n.elements[6] /= a.y),
          (n.elements[8] /= a.z),
          (n.elements[9] /= a.z),
          (n.elements[10] /= a.z),
          o.setFromRotationMatrix(n),
          [i, o, a]
        );
      };
    })(),
    scale: function (e) {
      var t = this.elements,
        r = e.x,
        n = e.y,
        i = e.z;
      return (
        (t[0] *= r),
        (t[4] *= n),
        (t[8] *= i),
        (t[1] *= r),
        (t[5] *= n),
        (t[9] *= i),
        (t[2] *= r),
        (t[6] *= n),
        (t[10] *= i),
        (t[3] *= r),
        (t[7] *= n),
        (t[11] *= i),
        this
      );
    },
    getMaxScaleOnAxis: function () {
      var e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, Math.max(r, n)));
    },
    makeFrustum: function (e, t, r, n, i, o) {
      var a = this.elements,
        s = (2 * i) / (t - e),
        l = (2 * i) / (n - r),
        c = (t + e) / (t - e),
        u = (n + r) / (n - r),
        d = -(o + i) / (o - i),
        h = (-2 * o * i) / (o - i);
      return (
        (a[0] = s),
        (a[4] = 0),
        (a[8] = c),
        (a[12] = 0),
        (a[1] = 0),
        (a[5] = l),
        (a[9] = u),
        (a[13] = 0),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = d),
        (a[14] = h),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = -1),
        (a[15] = 0),
        this
      );
    },
    makePerspective: function (e, t, r, n) {
      var i = r * Math.tan($3Dmol.Math.degToRad(0.5 * e)),
        o = -i,
        a = o * t,
        s = i * t;
      return this.makeFrustum(a, s, o, i, r, n);
    },
    makeOrthographic: function (e, t, r, n, i, o) {
      var a = this.elements,
        s = 1 / (t - e),
        l = 1 / (r - n),
        c = 1 / (o - i),
        u = (t + e) * s,
        d = (r + n) * l,
        h = (o + i) * c;
      return (
        (a[0] = 2 * s),
        (a[4] = 0),
        (a[8] = 0),
        (a[12] = -u),
        (a[1] = 0),
        (a[5] = 2 * l),
        (a[9] = 0),
        (a[13] = -d),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = -2 * c),
        (a[14] = -h),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = 0),
        (a[15] = 1),
        this
      );
    },
    isEqual: function (e) {
      var t = e.elements,
        r = this.elements;
      return (
        r[0] == t[0] &&
        r[4] == t[4] &&
        r[8] == t[8] &&
        r[12] == t[12] &&
        r[1] == t[1] &&
        r[5] == t[5] &&
        r[9] == t[9] &&
        r[13] == t[13] &&
        r[2] == t[2] &&
        r[6] == t[6] &&
        r[10] == t[10] &&
        r[14] == t[14] &&
        r[3] == t[3] &&
        r[7] == t[7] &&
        r[11] == t[11] &&
        r[15] == t[15]
      );
    },
    clone: function () {
      var e = this.elements;
      return new $3Dmol.Matrix4(
        e[0],
        e[4],
        e[8],
        e[12],
        e[1],
        e[5],
        e[9],
        e[13],
        e[2],
        e[6],
        e[10],
        e[14],
        e[3],
        e[7],
        e[11],
        e[15]
      );
    },
    isIdentity: function () {
      var e = this.elements;
      return (
        1 == e[0] &&
        0 == e[4] &&
        0 == e[8] &&
        0 == e[12] &&
        0 == e[1] &&
        1 == e[5] &&
        0 == e[9] &&
        0 == e[13] &&
        0 == e[2] &&
        0 == e[6] &&
        1 == e[10] &&
        0 == e[14] &&
        0 == e[3] &&
        0 == e[7] &&
        0 == e[11] &&
        1 == e[15]
      );
    },
    isNearlyIdentity: function (e) {
      return this.clone().snap(e).isIdentity();
    },
  }),
  ($3Dmol.Vector3.prototype.unproject = (function () {
    var e = new $3Dmol.Matrix4();
    return function (t) {
      return (
        e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)),
        this.applyMatrix4(e)
      );
    };
  })()),
  ($3Dmol.Ray = function (e, t) {
    (this.origin = void 0 !== e ? e : new $3Dmol.Vector3()),
      (this.direction = void 0 !== t ? t : new $3Dmol.Vector3());
  }),
  ($3Dmol.Ray.prototype = {
    constructor: $3Dmol.Ray,
    set: function (e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    },
    copy: function (e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    },
    at: function (e, t) {
      return (t || new $3Dmol.Vector3())
        .copy(this.direction)
        .multiplyScalar(e)
        .add(this.origin);
    },
    recast: (function () {
      var e = new $3Dmol.Vector3();
      return function (t) {
        return this.origin.copy(this.at(t, e)), this;
      };
    })(),
    closestPointToPoint: function (e, t) {
      var r = t || new $3Dmol.Vector3();
      r.subVectors(e, this.origin);
      var n = r.dot(this.direction);
      return r.copy(this.direction).multiplyScalar(n).add(this.origin);
    },
    distanceToPoint: (function () {
      var e = new $3Dmol.Vector3();
      return function (t) {
        var r = e.subVectors(t, this.origin).dot(this.direction);
        return (
          e.copy(this.direction).multiplyScalar(r).add(this.origin),
          e.distanceTo(t)
        );
      };
    })(),
    isIntersectionCylinder: function () {},
    isIntersectionSphere: function (e) {
      return this.distanceToPoint(e.center) <= e.radius;
    },
    isIntersectionPlane: function (e) {
      return (
        0 !== e.normal.dot(this.direction) ||
        0 === e.distanceToPoint(this.origin)
      );
    },
    distanceToPlane: function (e) {
      var t = e.normal.dot(this.direction);
      return 0 === t
        ? 0 === e.distanceToPoint(this.origin)
          ? 0
          : void 0
        : -(this.origin.dot(e.normal) + e.constant) / t;
    },
    intersectPlane: function (e, t) {
      var r = this.distanceToPlane(e);
      if (void 0 !== r) return this.at(r, t);
    },
    applyMatrix4: function (e) {
      return (
        this.direction.add(this.origin).applyMatrix4(e),
        this.origin.applyMatrix4(e),
        this.direction.sub(this.origin),
        this
      );
    },
    equals: function (e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    },
    clone: function () {
      return new $3Dmol.Ray().copy(this);
    },
  }),
  ($3Dmol.Sphere = function (e, t) {
    (this.center = void 0 !== e ? e : new $3Dmol.Vector3()),
      (this.radius = void 0 !== t ? t : 0);
  }),
  ($3Dmol.Sphere.prototype = {
    constructor: $3Dmol.Sphere,
    set: function (e, t) {
      return this.center.copy(e), (this.radius = t), this;
    },
    copy: function (e) {
      return this.center.copy(e.center), (this.radius = e.radius), this;
    },
    applyMatrix4: function (e) {
      return (
        this.center.applyMatrix4(e),
        (this.radius = this.radius * e.getMaxScaleOnAxis()),
        this
      );
    },
    translate: function (e) {
      return this.center.add(e), this;
    },
    equals: function (e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    },
    clone: function () {
      return new $3Dmol.Sphere().copy(this);
    },
  }),
  ($3Dmol.Cylinder = function (e, t, r) {
    (this.c1 = void 0 !== e ? e : new $3Dmol.Vector3()),
      (this.c2 = void 0 !== t ? t : new $3Dmol.Vector3()),
      (this.direction = new $3Dmol.Vector3()
        .subVectors(this.c2, this.c1)
        .normalize()),
      (this.radius = void 0 !== r ? r : 0);
  }),
  ($3Dmol.Cylinder.prototype = {
    constructor: $3Dmol.Cylinder,
    copy: function (e) {
      return (
        this.c1.copy(e.c1),
        this.c2.copy(e.c2),
        this.direction.copy(e.direction),
        (this.radius = e.radius),
        this
      );
    },
    lengthSq: (function () {
      var e = new $3Dmol.Vector3();
      return function () {
        return e.subVectors(this.c2, this.c1).lengthSq();
      };
    })(),
    applyMatrix4: function (e) {
      return (
        this.direction.add(this.c1).applyMatrix4(e),
        this.c1.applyMatrix4(e),
        this.c2.applyMatrix4(e),
        this.direction.sub(this.c1).normalize(),
        (this.radius = this.radius * e.getMaxScaleOnAxis()),
        this
      );
    },
  }),
  ($3Dmol.Triangle = function (e, t, r) {
    (this.a = void 0 !== e ? e : new $3Dmol.Vector3()),
      (this.b = void 0 !== t ? t : new $3Dmol.Vector3()),
      (this.c = void 0 !== r ? r : new $3Dmol.Vector3());
  }),
  ($3Dmol.Triangle.prototype = {
    constructor: $3Dmol.Triangle,
    copy: function (e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    },
    applyMatrix4: function (e) {
      return (
        this.a.applyMatrix4(e),
        this.b.applyMatrix4(e),
        this.c.applyMatrix4(e),
        this
      );
    },
    getNormal: (function () {
      var e = new $3Dmol.Vector3();
      return function () {
        var t = this.a.clone();
        return (
          t.sub(this.b),
          e.subVectors(this.c, this.b),
          t.cross(e),
          t.normalize(),
          t
        );
      };
    })(),
  }),
  ($3Dmol.EventDispatcher = function () {
    var e = {};
    (this.addEventListener = function (t, r) {
      void 0 === e[t] && (e[t] = []), -1 === e[t].indexOf(r) && e[t].push(r);
    }),
      (this.removeEventListener = function (t, r) {
        var n = e[t].indexOf(r);
        -1 !== n && e[t].splice(n, 1);
      }),
      (this.dispatchEvent = function (t) {
        var r = e[t.type];
        if (void 0 !== r) {
          t.target = this;
          for (var n = 0, i = r.length; n < i; n++) r[n].call(this, t);
        }
      });
  }),
  ($3Dmol.Color = function (e) {
    return arguments.length > 1
      ? ((this.r = arguments[0] || 0),
        (this.g = arguments[1] || 0),
        (this.b = arguments[2] || 0),
        this)
      : this.set(e);
  }),
  ($3Dmol.Color.prototype = {
    constructor: $3Dmol.Color,
    r: 0,
    g: 0,
    b: 0,
    set: function (e) {
      if (e instanceof $3Dmol.Color) return e.clone();
      "number" == typeof e
        ? this.setHex(e)
        : "object" == typeof e &&
          "r" in e &&
          "g" in e &&
          "b" in e &&
          ((this.r = e.r), (this.g = e.g), (this.b = e.b));
    },
    setHex: function (e) {
      return (
        (e = Math.floor(e)),
        (this.r = ((e >> 16) & 255) / 255),
        (this.g = ((e >> 8) & 255) / 255),
        (this.b = (255 & e) / 255),
        this
      );
    },
    getHex: function () {
      return (
        (Math.round(255 * this.r) << 16) |
        (Math.round(255 * this.g) << 8) |
        Math.round(255 * this.b)
      );
    },
    clone: function () {
      return new $3Dmol.Color(this.r, this.g, this.b);
    },
    copy: function (e) {
      return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
    },
    scaled: function () {
      var e = {};
      return (
        (e.r = Math.round(255 * this.r)),
        (e.g = Math.round(255 * this.g)),
        (e.b = Math.round(255 * this.b)),
        (e.a = 1),
        e
      );
    },
  }),
  ($3Dmol.Object3D = function () {
    (this.id = $3Dmol.Object3DIDCount++),
      (this.name = ""),
      (this.parent = void 0),
      (this.children = []),
      (this.position = new $3Dmol.Vector3()),
      (this.rotation = new $3Dmol.Vector3()),
      (this.matrix = new $3Dmol.Matrix4()),
      (this.matrixWorld = new $3Dmol.Matrix4()),
      (this.quaternion = new $3Dmol.Quaternion()),
      (this.eulerOrder = "XYZ"),
      (this.up = new $3Dmol.Vector3(0, 1, 0)),
      (this.scale = new $3Dmol.Vector3(1, 1, 1)),
      (this.matrixAutoUpdate = !0),
      (this.matrixWorldNeedsUpdate = !0),
      (this.rotationAutoUpdate = !0),
      (this.useQuaternion = !1),
      (this.visible = !0);
  }),
  ($3Dmol.Object3D.prototype = {
    constructor: $3Dmol.Object3D,
    lookAt: function (e) {
      this.matrix.lookAt(e, this.position, this.up),
        this.rotationAutoUpdate &&
          (!0 === this.useQuaternion
            ? this.quaternion.copy(this.matrix.decompose()[1])
            : this.rotation.setEulerFromRotationMatrix(
                this.matrix,
                this.eulerOrder
              ));
    },
    add: function (e) {
      if (e !== this) {
        (e.parent = this), this.children.push(e);
        for (var t = this; void 0 !== t.parent; ) t = t.parent;
        void 0 !== t && t instanceof $3Dmol.Scene && t.__addObject(e);
      } else console.error("Can't add $3Dmol.Object3D to itself");
    },
    remove: function (e) {
      var t = this.children.indexOf(e);
      if (-1 !== t) {
        (e.parent = void 0), this.children.splice(t, 1);
        for (var r = this; void 0 !== r.parent; ) r = r.parent;
        void 0 !== r && r instanceof $3Dmol.Scene && r.__removeObject(e);
      }
    },
    vrml: function (e) {
      e || (e = " ");
      var t = 2 * Math.atan2(this.quaternion.lengthxyz(), this.quaternion.w),
        r = 0,
        n = 0,
        i = 0;
      if (0 != t) {
        let e = Math.sin(t / 2);
        (r = this.quaternion.x / e),
          (n = this.quaternion.y / e),
          (i = this.quaternion.z / e);
      }
      var o =
        e +
        "Transform {\n" +
        e +
        " center " +
        this.position.x +
        " " +
        this.position.y +
        " " +
        this.position.z +
        "\n" +
        e +
        " rotation " +
        r +
        " " +
        n +
        " " +
        i +
        " " +
        t +
        "\n" +
        e +
        " children [\n";
      this.geometry && (o += this.geometry.vrml(e, this.material));
      for (var a = 0; a < this.children.length; a++)
        o += this.children[a].vrml(e + " ") + ",\n";
      return (o += " ]\n"), (o += "}");
    },
    updateMatrix: function () {
      this.matrix.setPosition(this.position),
        !1 === this.useQuaternion
          ? this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder)
          : this.matrix.setRotationFromQuaternion(this.quaternion),
        (1 === this.scale.x && 1 === this.scale.y && 1 === this.scale.z) ||
          this.matrix.scale(this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    },
    updateMatrixWorld: function (e) {
      !0 === this.matrixAutoUpdate && this.updateMatrix(),
        (!0 !== this.matrixWorldNeedsUpdate && !0 !== e) ||
          (void 0 === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1);
      for (var t = 0; t < this.children.length; t++)
        this.children[t].updateMatrixWorld(!0);
    },
    clone: function (e) {
      void 0 === e && (e = new $3Dmol.Object3D()),
        (e.name = this.name),
        e.up.copy(this.up),
        e.position.copy(this.position),
        e.rotation.copy(this.rotation),
        (e.eulerOrder = this.eulerOrder),
        e.scale.copy(this.scale),
        (e.rotationAutoUpdate = this.rotationAutoUpdate),
        e.matrix.copy(this.matrix),
        e.matrixWorld.copy(this.matrixWorld),
        e.quaternion.copy(this.quaternion),
        (e.matrixAutoUpdate = this.matrixAutoUpdate),
        (e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate),
        (e.useQuaternion = this.useQuaternion),
        (e.visible = this.visible);
      for (var t = 0; t < this.children.length; t++) {
        var r = this.children[t];
        e.add(r.clone());
      }
      return e;
    },
    setVisible: function (e) {
      this.visible = e;
      for (var t = 0; t < this.children.length; t++) {
        this.children[t].setVisible(e);
      }
    },
  }),
  ($3Dmol.Object3DIDCount = 0),
  ($3Dmol.Geometry = (function () {
    var e = function (e) {
      (this.id = e || 0),
        (this.vertexArray = null),
        (this.colorArray = null),
        (this.normalArray = null),
        (this.faceArray = null),
        (this.radiusArray = null),
        (this.lineArray = null),
        (this.vertices = 0),
        (this.faceidx = 0),
        (this.lineidx = 0);
    };
    (e.prototype.setColors = function (e) {
      var t = this.vertexArray,
        r = this.colorArray;
      if (t.length == r.length)
        for (var n = 0; n < t.length; n += 3) {
          var i = e(t[n], t[n + 1], t[n + 2]);
          i instanceof $3Dmol.Color || (i = $3Dmol.CC.color(i)),
            (r[n] = i.r),
            (r[n + 1] = i.g),
            (r[n + 2] = i.b);
        }
      else
        console.log(
          "Cannot re-color geometry group due to mismatched lengths."
        );
    }),
      (e.prototype.getNumVertices = function () {
        return this.vertices;
      }),
      (e.prototype.getVertices = function () {
        return this.vertexArray;
      }),
      (e.prototype.getCentroid = function () {
        for (
          var e, t, r, n, i = new $3Dmol.Vector3(), o = 0;
          o < this.vertices;
          ++o
        )
          (e = 3 * o),
            (t = this.vertexArray[e]),
            (r = this.vertexArray[e + 1]),
            (n = this.vertexArray[e + 2]),
            (i.x += t),
            (i.y += r),
            (i.z += n);
        return i.divideScalar(this.vertices), i;
      }),
      (e.prototype.setNormals = function () {
        var e = this.faceArray,
          t = this.vertexArray,
          r = this.normalArray;
        if (this.vertices && this.faceidx)
          for (var n, i, o, a, s, l, c, u = 0; u < e.length / 3; ++u)
            (n = 3 * e[3 * u]),
              (i = 3 * e[3 * u + 1]),
              (o = 3 * e[3 * u + 2]),
              (a = new $3Dmol.Vector3(t[n], t[n + 1], t[n + 2])),
              (s = new $3Dmol.Vector3(t[i], t[i + 1], t[i + 2])),
              (l = new $3Dmol.Vector3(t[o], t[o + 1], t[o + 2])),
              a.subVectors(a, s),
              l.subVectors(l, s),
              l.cross(a),
              (c = l).normalize(),
              (r[n] += c.x),
              (r[i] += c.x),
              (r[o] += c.x),
              (r[n + 1] += c.y),
              (r[i + 1] += c.y),
              (r[o + 1] += c.y),
              (r[n + 2] += c.z),
              (r[i + 2] += c.z),
              (r[o + 2] += c.z);
      }),
      (e.prototype.setLineIndices = function () {
        if (
          this.faceidx &&
          (!this.lineArray ||
            this.lineArray.length != 2 * this.faceidx ||
            this.lineidx != 2 * this.faceidx)
        ) {
          var e = this.faceArray,
            t = (this.lineArray = new Uint16Array(2 * this.faceidx));
          this.lineidx = 2 * this.faceidx;
          for (var r = 0; r < this.faceidx / 3; ++r) {
            var n = 3 * r,
              i = 2 * n,
              o = e[n],
              a = e[n + 1],
              s = e[n + 2];
            (t[i] = o),
              (t[i + 1] = a),
              (t[i + 2] = o),
              (t[i + 3] = s),
              (t[i + 4] = a),
              (t[i + 5] = s);
          }
        }
      }),
      (e.prototype.vrml = function (e, t) {
        var r = "";
        (r +=
          e +
          "Shape {\n" +
          e +
          " appearance Appearance {\n" +
          e +
          "  material Material {\n" +
          e +
          "   diffuseColor " +
          t.color.r +
          " " +
          t.color.g +
          " " +
          t.color.b +
          "\n"),
          t.transparent &&
            (r += e + "   transparency " + (1 - t.opacity) + "\n"),
          (r += e + "  }\n"),
          (r += e + " }\n");
        var n = e;
        if (((e += " "), t instanceof $3Dmol.LineBasicMaterial)) {
          let t, n, i;
          r +=
            e +
            "geometry IndexedLineSet {\n" +
            e +
            " colorPerVertex TRUE\n" +
            e +
            " coord Coordinate {\n" +
            e +
            "  point [\n";
          for (let o = 0; o < this.vertices; ++o) {
            let a = 3 * o;
            r +=
              e +
              "   " +
              (t = this.vertexArray[a]) +
              " " +
              (n = this.vertexArray[a + 1]) +
              " " +
              (i = this.vertexArray[a + 2]) +
              ",\n";
          }
          if (((r += e + "  ]\n"), (r += e + " }\n"), this.colorArray)) {
            r += e + " color Color {\n" + e + "  color [\n";
            for (let o = 0; o < this.vertices; ++o) {
              let a = 3 * o;
              r +=
                e +
                "   " +
                (t = this.colorArray[a]) +
                " " +
                (n = this.colorArray[a + 1]) +
                " " +
                (i = this.colorArray[a + 2]) +
                ",\n";
            }
            (r += e + "  ]\n"), (r += e + " }\n");
          }
          r += e + " coordIndex [\n";
          for (let t = 0; t < this.vertices; t += 2)
            r += e + "  " + t + ", " + (t + 1) + ", -1,\n";
          (r += e + " ]\n"), (r += e + "}\n");
        } else {
          let t, n, o;
          (r +=
            e +
            "geometry IndexedFaceSet {\n" +
            e +
            " colorPerVertex TRUE\n" +
            e +
            " normalPerVertex TRUE\n" +
            e +
            " solid FALSE\n"),
            (r += e + " coord Coordinate {\n" + e + "  point [\n");
          for (let i = 0; i < this.vertices; ++i) {
            let a = 3 * i;
            r +=
              e +
              "   " +
              (t = this.vertexArray[a]) +
              " " +
              (n = this.vertexArray[a + 1]) +
              " " +
              (o = this.vertexArray[a + 2]) +
              ",\n";
          }
          (r += e + "  ]\n"),
            (r += e + " }\n"),
            (r += e + " normal Normal {\n" + e + "  vector [\n");
          for (let i = 0; i < this.vertices; ++i) {
            let a = 3 * i;
            r +=
              e +
              "   " +
              (t = this.normalArray[a]) +
              " " +
              (n = this.normalArray[a + 1]) +
              " " +
              (o = this.normalArray[a + 2]) +
              ",\n";
          }
          if (((r += e + "  ]\n"), (r += e + " }\n"), this.colorArray)) {
            r += e + " color Color {\n" + e + "  color [\n";
            for (let i = 0; i < this.vertices; ++i) {
              let a = 3 * i;
              r +=
                e +
                "   " +
                (t = this.colorArray[a]) +
                " " +
                (n = this.colorArray[a + 1]) +
                " " +
                (o = this.colorArray[a + 2]) +
                ",\n";
            }
            (r += e + "  ]\n"), (r += e + " }\n");
          }
          r += e + " coordIndex [\n";
          for (var i = 0; i < this.faceidx; i += 3)
            r +=
              e +
              "  " +
              (t = this.faceArray[i]) +
              ", " +
              (n = this.faceArray[i + 1]) +
              ", " +
              (o = this.faceArray[i + 2]) +
              ", -1,\n";
          (r += e + " ]\n"), (r += e + "}\n");
        }
        return (r += n + "}");
      }),
      (e.prototype.truncateArrayBuffers = function (e, t) {
        e = !0 === e;
        var r = this.vertexArray,
          n = this.colorArray,
          i = this.normalArray,
          o = this.faceArray,
          a = this.lineArray,
          s = this.radiusArray;
        (this.vertexArray = r.subarray(0, 3 * this.vertices)),
          (this.colorArray = n.subarray(0, 3 * this.vertices)),
          e
            ? ((this.normalArray = i.subarray(0, 3 * this.vertices)),
              (this.faceArray = o.subarray(0, this.faceidx)),
              this.lineidx > 0
                ? (this.lineArray = a.subarray(0, this.lineidx))
                : (this.lineArray = new Uint16Array(0)))
            : ((this.normalArray = new Float32Array(0)),
              (this.faceArray = new Uint16Array(0)),
              (this.lineArray = new Uint16Array(0))),
          s && (this.radiusArray = s.subarray(0, this.vertices)),
          t &&
            (this.normalArray &&
              (this.normalArray = new Float32Array(this.normalArray)),
            this.faceArray &&
              (this.faceArray = new Uint16Array(this.faceArray)),
            this.lineArray &&
              (this.lineArray = new Uint16Array(this.lineArray)),
            this.vertexArray &&
              (this.vertexArray = new Float32Array(this.vertexArray)),
            this.colorArray &&
              (this.colorArray = new Float32Array(this.colorArray)),
            this.radiusArray &&
              (this.radiusArray = new Float32Array(this.radiusArray))),
          (this.__inittedArrays = !0);
      });
    var t = function (t) {
        var r = new e(t.geometryGroups.length);
        return (
          t.geometryGroups.push(r),
          (t.groups = t.geometryGroups.length),
          (r.vertexArray = new Float32Array(196605)),
          (r.colorArray = new Float32Array(196605)),
          t.mesh &&
            ((r.normalArray = new Float32Array(196605)),
            (r.faceArray = new Uint16Array(393210)),
            (r.lineArray = new Uint16Array(393210))),
          t.radii && (r.radiusArray = new Float32Array(65535)),
          (r.useOffset = t.offset),
          r
        );
      },
      r = function (e, t, r) {
        $3Dmol.EventDispatcher.call(this),
          (this.id = $3Dmol.GeometryIDCount++),
          (this.name = ""),
          (this.hasTangents = !1),
          (this.dynamic = !0),
          (this.mesh = !0 === e),
          (this.radii = t || !1),
          (this.offset = r || !1),
          (this.verticesNeedUpdate = !1),
          (this.elementsNeedUpdate = !1),
          (this.normalsNeedUpdate = !1),
          (this.colorsNeedUpdate = !1),
          (this.buffersNeedUpdate = !1),
          (this.geometryGroups = []),
          (this.groups = 0);
      };
    return (
      (r.prototype = {
        constructor: r,
        updateGeoGroup: function (e) {
          e = e || 0;
          var r = this.groups > 0 ? this.geometryGroups[this.groups - 1] : null;
          return (
            (!r || r.vertices + e > r.vertexArray.length / 3) && (r = t(this)),
            r
          );
        },
        vrml: function (e, t) {
          for (var r = "", n = this.geometryGroups.length, i = 0; i < n; i++) {
            r += this.geometryGroups[i].vrml(e, t) + ",\n";
          }
          return r;
        },
        addGeoGroup: function () {
          return t(this);
        },
        setUpNormals: function (e) {
          e = e || !1;
          for (var t = 0; t < this.groups; t++) {
            this.geometryGroups[t].setNormals(e);
          }
        },
        setColors: function (e) {
          for (var t = this.geometryGroups.length, r = 0; r < t; r++) {
            this.geometryGroups[r].setColors(e);
          }
        },
        setUpWireframe: function () {
          for (var e = 0; e < this.groups; e++) {
            this.geometryGroups[e].setLineIndices();
          }
        },
        initTypedArrays: function () {
          for (var e = 0; e < this.groups; e++) {
            var t = this.geometryGroups[e];
            !0 !== t.__inittedArrays && t.truncateArrayBuffers(this.mesh, !1);
          }
        },
        dispose: function () {
          this.dispatchEvent({ type: "dispose" });
        },
      }),
      r
    );
  })()),
  Object.defineProperty($3Dmol.Geometry.prototype, "vertices", {
    get: function () {
      for (var e = 0, t = 0; t < this.groups; t++)
        e += this.geometryGroups[t].vertices;
      return e;
    },
  }),
  ($3Dmol.GeometryIDCount = 0),
  ($3Dmol.Raycaster = (function () {
    var e,
      t = function (e, t, r, n) {
        (this.ray = new $3Dmol.Ray(e, t)),
          this.ray.direction.lengthSq() > 0 && this.ray.direction.normalize(),
          (this.near = n || 0),
          (this.far = r || 1 / 0);
      },
      r = new $3Dmol.Sphere(),
      n = new $3Dmol.Cylinder(),
      i = new $3Dmol.Triangle(),
      o = new $3Dmol.Vector3(),
      a = new $3Dmol.Vector3(),
      s = new $3Dmol.Vector3(),
      l = new $3Dmol.Vector3(),
      c = new $3Dmol.Vector3(),
      u = function (e, t) {
        return e.distance - t.distance;
      },
      d = function (e) {
        return Math.min(Math.max(e, -1), 1);
      },
      h = function (e, t, u, h) {
        if (
          (c.getPositionFromMatrix(e.matrixWorld),
          void 0 === t.intersectionShape)
        )
          return h;
        var p,
          f,
          m,
          g,
          v,
          y,
          x,
          b,
          w,
          D,
          C,
          S,
          A,
          $,
          M = t.intersectionShape,
          k = u.linePrecision,
          z = (k *= e.matrixWorld.getMaxScaleOnAxis()) * k;
        if (
          void 0 !== t.boundingSphere &&
          t.boundingSphere instanceof $3Dmol.Sphere &&
          (r.copy(t.boundingSphere),
          r.applyMatrix4(e.matrixWorld),
          !u.ray.isIntersectionSphere(r))
        )
          return h;
        for (p = 0, f = M.triangle.length; p < f; p++)
          if (M.triangle[p] instanceof $3Dmol.Triangle) {
            if (
              (i.copy(M.triangle[p]),
              i.applyMatrix4(e.matrixWorld),
              (m = i.getNormal()),
              (g = u.ray.direction.dot(m)) >= 0)
            )
              continue;
            if ((o.subVectors(i.a, u.ray.origin), (x = m.dot(o) / g) < 0))
              continue;
            a.copy(u.ray.direction).multiplyScalar(x).add(u.ray.origin),
              a.sub(i.a),
              s.copy(i.b).sub(i.a),
              l.copy(i.c).sub(i.a);
            var _ = s.dot(l),
              T = s.lengthSq(),
              L = l.lengthSq();
            if (
              (S = (T * a.dot(l) - _ * a.dot(s)) / (T * L - _ * _)) < 0 ||
              S > 1
            )
              continue;
            if ((C = (a.dot(s) - S * _) / T) < 0 || C > 1 || C + S > 1)
              continue;
            h.push({ clickable: t, distance: x });
          }
        for (p = 0, f = M.cylinder.length; p < f; p++)
          if (M.cylinder[p] instanceof $3Dmol.Cylinder) {
            if (
              (n.copy(M.cylinder[p]),
              n.applyMatrix4(e.matrixWorld),
              o.subVectors(n.c1, u.ray.origin),
              (v = o.dot(n.direction)),
              (y = o.dot(u.ray.direction)),
              0 === (w = 1 - (g = d(u.ray.direction.dot(n.direction))) * g))
            )
              continue;
            (A = (g * y - v) / w),
              ($ = (y - g * v) / w),
              a.copy(n.direction).multiplyScalar(A).add(n.c1),
              s.copy(u.ray.direction).multiplyScalar($).add(u.ray.origin),
              (b = l.subVectors(a, s).lengthSq());
            var E = n.radius * n.radius;
            if (b <= E) {
              if (
                (C =
                  g *
                    (S = x =
                      (D =
                        (g * v - y) * (g * v - y) -
                        w * (o.lengthSq() - v * v - E)) <= 0
                        ? Math.sqrt(b)
                        : (y - g * v - Math.sqrt(D)) / w) -
                  v) < 0 ||
                C * C > n.lengthSq() ||
                S < 0
              )
                continue;
              h.push({ clickable: t, distance: x });
            }
          }
        for (p = 0, f = M.line.length; p < f; p += 2) {
          a.copy(M.line[p]),
            a.applyMatrix4(e.matrixWorld),
            s.copy(M.line[p + 1]),
            s.applyMatrix4(e.matrixWorld),
            l.subVectors(s, a);
          var I = l.lengthSq();
          l.normalize(), o.subVectors(a, u.ray.origin);
          var F = o.dot(l);
          (y = o.dot(u.ray.direction)),
            0 !== (w = 1 - (g = d(u.ray.direction.dot(l))) * g) &&
              ((A = (g * y - F) / w),
              ($ = (y - g * F) / w),
              a.add(l.multiplyScalar(A)),
              s.copy(u.ray.direction).multiplyScalar($).add(u.ray.origin),
              (b = l.subVectors(s, a).lengthSq()) < z &&
                A * A < I &&
                h.push({ clickable: t, distance: $ }));
        }
        for (p = 0, f = M.sphere.length; p < f; p++)
          if (
            M.sphere[p] instanceof $3Dmol.Sphere &&
            (r.copy(M.sphere[p]),
            r.applyMatrix4(e.matrixWorld),
            u.ray.isIntersectionSphere(r))
          ) {
            a.subVectors(r.center, u.ray.origin);
            var O = a.dot(u.ray.direction);
            if (((D = O * O - (a.lengthSq() - r.radius * r.radius)), O < 0))
              return h;
            (x = D <= 0 ? O : O - Math.sqrt(D)),
              h.push({ clickable: t, distance: x });
          }
        return h;
      };
    return (
      (t.prototype.precision = 1e-4),
      (t.prototype.linePrecision = 0.2),
      (t.prototype.set = function (e, t) {
        this.ray.set(e, t);
      }),
      (t.prototype.setFromCamera =
        ((e = new $3Dmol.Matrix4()),
        function (t, r) {
          r.ortho
            ? (this.ray.origin
                .set(t.x, t.y, (r.near + r.far) / (r.near - r.far))
                .unproject(r),
              this.ray.direction
                .set(0, 0, -1)
                .transformDirection(r.matrixWorld))
            : (this.ray.origin.setFromMatrixPosition(r.matrixWorld),
              this.ray.direction.set(t.x, t.y, t.z),
              r.projectionMatrixInverse.getInverse(r.projectionMatrix),
              e.multiplyMatrices(r.matrixWorld, r.projectionMatrixInverse),
              this.ray.direction.applyProjection(e),
              this.ray.direction.sub(this.ray.origin).normalize());
        })),
      (t.prototype.intersectObjects = function (e, t) {
        for (var r = [], n = 0, i = t.length; n < i; n++) h(e, t[n], this, r);
        return r.sort(u), r;
      }),
      t
    );
  })()),
  ($3Dmol.Projector = function () {
    let e = new $3Dmol.Matrix4();
    (this.projectVector = function (t, r) {
      return (
        r.matrixWorldInverse.getInverse(r.matrixWorld),
        e.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse),
        t.applyProjection(e)
      );
    }),
      (this.unprojectVector = function (t, r) {
        return (
          r.projectionMatrixInverse.getInverse(r.projectionMatrix),
          e.multiplyMatrices(r.matrixWorld, r.projectionMatrixInverse),
          t.applyProjection(e)
        );
      });
  }),
  ($3Dmol.Camera = function (e, t, r, n, i) {
    $3Dmol.Object3D.call(this),
      (this.fov = void 0 !== e ? e : 50),
      (this.aspect = void 0 !== t ? t : 1),
      (this.near = void 0 !== r ? r : 0.1),
      (this.far = void 0 !== n ? n : 2e3),
      (this.projectionMatrix = new $3Dmol.Matrix4()),
      (this.projectionMatrixInverse = new $3Dmol.Matrix4()),
      (this.matrixWorldInverse = new $3Dmol.Matrix4());
    var o = this.position.z;
    (this.right = o * Math.tan((Math.PI / 180) * e)),
      (this.left = -this.right),
      (this.top = this.right / this.aspect),
      (this.bottom = -this.top),
      (this.ortho = !!i),
      this.updateProjectionMatrix();
  }),
  ($3Dmol.Camera.prototype = Object.create($3Dmol.Object3D.prototype)),
  ($3Dmol.Camera.prototype.lookAt = function (e) {
    this.matrix.lookAt(this.position, e, this.up),
      this.rotationAutoUpdate &&
        (!1 === this.useQuaternion
          ? this.rotation.setEulerFromRotationMatrix(
              this.matrix,
              this.eulerOrder
            )
          : this.quaternion.copy(this.matrix.decompose()[1]));
  }),
  ($3Dmol.Camera.prototype.updateProjectionMatrix = function () {
    this.ortho
      ? this.projectionMatrix.makeOrthographic(
          this.left,
          this.right,
          this.top,
          this.bottom,
          this.near,
          this.far
        )
      : this.projectionMatrix.makePerspective(
          this.fov,
          this.aspect,
          this.near,
          this.far
        ),
      this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  }),
  ($3Dmol.SpritePlugin = function () {
    var e,
      t,
      r,
      n = {};
    function i(e, t) {
      return e.z !== t.z ? t.z - e.z : t.id - e.id;
    }
    (this.init = function (i) {
      (e = i.context),
        (t = i),
        (r = i.getPrecision()),
        (n.vertices = new Float32Array(16)),
        (n.faces = new Uint16Array(6));
      var o = 0;
      (n.vertices[o++] = -1),
        (n.vertices[o++] = -1),
        (n.vertices[o++] = 0),
        (n.vertices[o++] = 0),
        (n.vertices[o++] = 1),
        (n.vertices[o++] = -1),
        (n.vertices[o++] = 1),
        (n.vertices[o++] = 0),
        (n.vertices[o++] = 1),
        (n.vertices[o++] = 1),
        (n.vertices[o++] = 1),
        (n.vertices[o++] = 1),
        (n.vertices[o++] = -1),
        (n.vertices[o++] = 1),
        (n.vertices[o++] = 0),
        (n.vertices[o++] = 1),
        (o = 0),
        (n.faces[o++] = 0),
        (n.faces[o++] = 1),
        (n.faces[o++] = 2),
        (n.faces[o++] = 0),
        (n.faces[o++] = 2),
        (n.faces[o++] = 3),
        (n.vertexBuffer = e.createBuffer()),
        (n.elementBuffer = e.createBuffer()),
        e.bindBuffer(e.ARRAY_BUFFER, n.vertexBuffer),
        e.bufferData(e.ARRAY_BUFFER, n.vertices, e.STATIC_DRAW),
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.elementBuffer),
        e.bufferData(e.ELEMENT_ARRAY_BUFFER, n.faces, e.STATIC_DRAW),
        (n.program = (function (t, r) {
          var n = e.createProgram(),
            i = e.createShader(e.FRAGMENT_SHADER),
            o = e.createShader(e.VERTEX_SHADER),
            a = "precision " + r + " float;\n";
          if (
            (e.shaderSource(i, a + t.fragmentShader),
            e.shaderSource(o, a + t.vertexShader),
            e.compileShader(i),
            e.compileShader(o),
            !e.getShaderParameter(i, e.COMPILE_STATUS) ||
              !e.getShaderParameter(o, e.COMPILE_STATUS))
          )
            return (
              console.error(e.getShaderInfoLog(i)),
              console.error("could not initialize shader"),
              null
            );
          e.attachShader(n, i),
            e.attachShader(n, o),
            e.linkProgram(n),
            e.getProgramParameter(n, e.LINK_STATUS) ||
              console.error("Could not initialize shader");
          return n;
        })($3Dmol.ShaderLib.sprite, r)),
        (n.attributes = {}),
        (n.uniforms = {}),
        (n.attributes.position = e.getAttribLocation(n.program, "position")),
        (n.attributes.uv = e.getAttribLocation(n.program, "uv")),
        (n.uniforms.uvOffset = e.getUniformLocation(n.program, "uvOffset")),
        (n.uniforms.uvScale = e.getUniformLocation(n.program, "uvScale")),
        (n.uniforms.rotation = e.getUniformLocation(n.program, "rotation")),
        (n.uniforms.scale = e.getUniformLocation(n.program, "scale")),
        (n.uniforms.alignment = e.getUniformLocation(n.program, "alignment")),
        (n.uniforms.color = e.getUniformLocation(n.program, "color")),
        (n.uniforms.map = e.getUniformLocation(n.program, "map")),
        (n.uniforms.opacity = e.getUniformLocation(n.program, "opacity")),
        (n.uniforms.useScreenCoordinates = e.getUniformLocation(
          n.program,
          "useScreenCoordinates"
        )),
        (n.uniforms.screenPosition = e.getUniformLocation(
          n.program,
          "screenPosition"
        )),
        (n.uniforms.modelViewMatrix = e.getUniformLocation(
          n.program,
          "modelViewMatrix"
        )),
        (n.uniforms.projectionMatrix = e.getUniformLocation(
          n.program,
          "projectionMatrix"
        )),
        (n.uniforms.fogType = e.getUniformLocation(n.program, "fogType")),
        (n.uniforms.fogDensity = e.getUniformLocation(n.program, "fogDensity")),
        (n.uniforms.fogNear = e.getUniformLocation(n.program, "fogNear")),
        (n.uniforms.fogFar = e.getUniformLocation(n.program, "fogFar")),
        (n.uniforms.fogColor = e.getUniformLocation(n.program, "fogColor")),
        (n.uniforms.alphaTest = e.getUniformLocation(n.program, "alphaTest"));
    }),
      (this.render = function (r, o, a, s, l) {
        let c = [];
        r.__webglSprites.forEach((e) => {
          l && 0 == e.material.depthTest
            ? c.push(e)
            : !l && e.material.depthTest && c.push(e);
        });
        let u = c.length;
        if (u) {
          var d = n.attributes,
            h = n.uniforms,
            p = 0.5 * a,
            f = 0.5 * s;
          e.useProgram(n.program),
            e.enableVertexAttribArray(d.position),
            e.enableVertexAttribArray(d.uv),
            e.disable(e.CULL_FACE),
            e.enable(e.BLEND),
            e.bindBuffer(e.ARRAY_BUFFER, n.vertexBuffer),
            e.vertexAttribPointer(d.position, 2, e.FLOAT, !1, 16, 0),
            e.vertexAttribPointer(d.uv, 2, e.FLOAT, !1, 16, 8),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.elementBuffer),
            e.uniformMatrix4fv(
              h.projectionMatrix,
              !1,
              o.projectionMatrix.elements
            ),
            e.activeTexture(e.TEXTURE0),
            e.uniform1i(h.map, 0);
          var m = 0,
            g = 0,
            v = r.fog;
          v
            ? (e.uniform3f(h.fogColor, v.color.r, v.color.g, v.color.b),
              e.uniform1f(h.fogNear, v.near),
              e.uniform1f(h.fogFar, v.far),
              e.uniform1i(h.fogType, 1),
              (m = 1),
              (g = 1))
            : (e.uniform1i(h.fogType, 0), (m = 0), (g = 0));
          var y,
            x,
            b,
            w,
            D,
            C = [];
          for (y = 0; y < u; y++)
            (0 != (b = (x = c[y]).material).depthTest || l) &&
              x.visible &&
              0 !== b.opacity &&
              (b.useScreenCoordinates
                ? (x.z = -x.position.z)
                : (x._modelViewMatrix.multiplyMatrices(
                    o.matrixWorldInverse,
                    x.matrixWorld
                  ),
                  (x.z = -x._modelViewMatrix.elements[14])));
          for (c.sort(i), y = 0; y < u; y++)
            if (
              ((b = (x = c[y]).material),
              x.visible &&
                0 !== b.opacity &&
                b.map &&
                b.map.image &&
                b.map.image.width)
            ) {
              e.uniform1f(h.alphaTest, b.alphaTest);
              var S = b.map.image.width,
                A = b.map.image.height;
              (C[0] = (S * t.devicePixelRatio) / a),
                (C[1] = (A * t.devicePixelRatio) / s),
                !0 === b.useScreenCoordinates
                  ? (e.uniform1i(h.useScreenCoordinates, 1),
                    e.uniform3f(
                      h.screenPosition,
                      (x.position.x * t.devicePixelRatio - p) / p,
                      (f - x.position.y * t.devicePixelRatio) / f,
                      Math.max(0, Math.min(1, x.position.z))
                    ))
                  : (e.uniform1i(h.useScreenCoordinates, 0),
                    e.uniformMatrix4fv(
                      h.modelViewMatrix,
                      !1,
                      x._modelViewMatrix.elements
                    )),
                m !== (D = r.fog && b.fog ? g : 0) &&
                  (e.uniform1i(h.fogType, D), (m = D)),
                (w = 1 / (b.scaleByViewport ? s : 1)),
                (C[0] *= w * x.scale.x),
                (C[1] *= w * x.scale.y);
              let n = b.alignment.x,
                i = b.alignment.y;
              b.screenOffset &&
                ((n += (2 * b.screenOffset.x) / S),
                (i += (2 * b.screenOffset.y) / A)),
                e.uniform2f(h.uvScale, b.uvScale.x, b.uvScale.y),
                e.uniform2f(h.uvOffset, b.uvOffset.x, b.uvOffset.y),
                e.uniform2f(h.alignment, n, i),
                e.uniform1f(h.opacity, b.opacity),
                e.uniform3f(h.color, b.color.r, b.color.g, b.color.b),
                e.uniform1f(h.rotation, x.rotation),
                e.uniform2fv(h.scale, C),
                t.setDepthTest(b.depthTest),
                t.setDepthWrite(b.depthWrite),
                t.setTexture(b.map, 0),
                e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0);
            }
          e.enable(e.CULL_FACE);
        }
      });
  }),
  ($3Dmol.Light = function (e, t) {
    $3Dmol.Object3D.call(this),
      (this.color = new $3Dmol.Color(e)),
      (this.position = new $3Dmol.Vector3(0, 1, 0)),
      (this.target = new $3Dmol.Object3D()),
      (this.intensity = void 0 !== t ? t : 1),
      (this.castShadow = !1),
      (this.onlyShadow = !1);
  }),
  ($3Dmol.Light.prototype = Object.create($3Dmol.Object3D.prototype)),
  ($3Dmol.Material = function () {
    $3Dmol.EventDispatcher.call(this),
      (this.id = $3Dmol.MaterialIdCount++),
      (this.name = ""),
      (this.side = $3Dmol.FrontSide),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilTest = !0),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.alphaTest = 0),
      (this.visible = !0),
      (this.needsUpdate = !0);
  }),
  ($3Dmol.Material.prototype.setValues = function (e) {
    if (void 0 !== e)
      for (var t in e) {
        var r = e[t];
        if (void 0 !== r) {
          if (t in this) {
            var n = this[t];
            n instanceof $3Dmol.Color && r instanceof $3Dmol.Color
              ? n.copy(r)
              : n instanceof $3Dmol.Color
              ? n.set(r)
              : n instanceof $3Dmol.Vector3 && r instanceof $3Dmol.Vector3
              ? n.copy(r)
              : (this[t] = r);
          }
        } else
          console.warn("$3Dmol.Material: '" + t + "' parameter is undefined.");
      }
  }),
  ($3Dmol.Material.prototype.clone = function (e) {
    return (
      void 0 === e && (e = new $3Dmol.Material()),
      (e.name = this.name),
      (e.side = this.side),
      (e.opacity = this.opacity),
      (e.transparent = this.transparent),
      (e.depthTest = this.depthTest),
      (e.depthWrite = this.depthWrite),
      (e.stencilTest = this.stencilTest),
      (e.polygonOffset = this.polygonOffset),
      (e.polygonOffsetFactor = this.polygonOffsetFactor),
      (e.polygonOffsetUnits = this.polygonOffsetUnits),
      (e.alphaTest = this.alphaTest),
      (e.overdraw = this.overdraw),
      (e.visible = this.visible),
      e
    );
  }),
  ($3Dmol.Material.prototype.dispose = function () {
    this.dispatchEvent({ type: "dispose" });
  }),
  ($3Dmol.MaterialIdCount = 0),
  ($3Dmol.LineBasicMaterial = function (e) {
    $3Dmol.Material.call(this),
      (this.color = new $3Dmol.Color(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.vertexColors = !1),
      (this.fog = !0),
      (this.shaderID = "basic"),
      this.setValues(e);
  }),
  ($3Dmol.LineBasicMaterial.prototype = Object.create(
    $3Dmol.Material.prototype
  )),
  ($3Dmol.LineBasicMaterial.prototype.clone = function () {
    var e = new $3Dmol.LineBasicMaterial();
    return (
      $3Dmol.Material.prototype.clone.call(this, e), e.color.copy(this.color), e
    );
  }),
  ($3Dmol.MeshLambertMaterial = function (e) {
    $3Dmol.Material.call(this),
      (this.color = new $3Dmol.Color(16777215)),
      (this.ambient = new $3Dmol.Color(1048575)),
      (this.emissive = new $3Dmol.Color(0)),
      (this.wrapAround = !1),
      (this.wrapRGB = new $3Dmol.Vector3(1, 1, 1)),
      (this.map = null),
      (this.lightMap = null),
      (this.specularMap = null),
      (this.envMap = null),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.fog = !0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.shading = $3Dmol.SmoothShading),
      (this.shaderID = "lambert"),
      (this.vertexColors = $3Dmol.NoColors),
      (this.skinning = !1),
      this.setValues(e);
  }),
  ($3Dmol.MeshLambertMaterial.prototype = Object.create(
    $3Dmol.Material.prototype
  )),
  ($3Dmol.MeshLambertMaterial.prototype.clone = function (e) {
    return (
      void 0 === e && (e = new $3Dmol.MeshLambertMaterial()),
      $3Dmol.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.ambient.copy(this.ambient),
      e.emissive.copy(this.emissive),
      (e.wrapAround = this.wrapAround),
      e.wrapRGB.copy(this.wrapRGB),
      (e.map = this.map),
      (e.lightMap = this.lightMap),
      (e.specularMap = this.specularMap),
      (e.envMap = this.envMap),
      (e.combine = this.combine),
      (e.reflectivity = this.reflectivity),
      (e.refractionRatio = this.refractionRatio),
      (e.fog = this.fog),
      (e.shading = this.shading),
      (e.shaderID = this.shaderID),
      (e.vertexColors = this.vertexColors),
      (e.skinning = this.skinning),
      (e.morphTargets = this.morphTargets),
      (e.morphNormals = this.morphNormals),
      e
    );
  }),
  ($3Dmol.MeshDoubleLambertMaterial = function (e) {
    $3Dmol.MeshLambertMaterial.call(this, e),
      (this.shaderID = "lambertdouble"),
      (this.side = $3Dmol.DoubleSide);
  }),
  ($3Dmol.MeshDoubleLambertMaterial.prototype = Object.create(
    $3Dmol.MeshLambertMaterial.prototype
  )),
  ($3Dmol.MeshDoubleLambertMaterial.prototype.clone = function () {
    var e = new $3Dmol.MeshDoubleLambertMaterial();
    return $3Dmol.MeshLambertMaterial.prototype.clone.call(this, e), e;
  }),
  ($3Dmol.MeshOutlineMaterial = function (e) {
    $3Dmol.Material.call(this),
      (e = e || {}),
      (this.fog = !0),
      (this.shaderID = "outline"),
      (this.wireframe = !1),
      (this.outlineColor = e.color || new $3Dmol.Color(0, 0, 0)),
      (this.outlineWidth = e.width || 0.1),
      (this.outlinePushback = e.pushback || 1);
  }),
  ($3Dmol.MeshOutlineMaterial.prototype = Object.create(
    $3Dmol.Material.prototype
  )),
  ($3Dmol.MeshOutlineMaterial.prototype.clone = function (e) {
    return (
      void 0 === e && (e = new $3Dmol.MeshOutlineMaterial()),
      $3Dmol.Material.prototype.clone.call(this, e),
      (e.fog = this.fog),
      (e.shaderID = this.shaderID),
      (e.wireframe = this.wireframe),
      e
    );
  }),
  ($3Dmol.ImposterMaterial = function (e) {
    $3Dmol.Material.call(this),
      (this.color = new $3Dmol.Color(16777215)),
      (this.ambient = new $3Dmol.Color(1048575)),
      (this.emissive = new $3Dmol.Color(0)),
      (this.imposter = !0),
      (this.wrapAround = !1),
      (this.wrapRGB = new $3Dmol.Vector3(1, 1, 1)),
      (this.map = null),
      (this.lightMap = null),
      (this.specularMap = null),
      (this.envMap = null),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.fog = !0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.shading = $3Dmol.SmoothShading),
      (this.shaderID = null),
      (this.vertexColors = $3Dmol.NoColors),
      (this.skinning = !1),
      this.setValues(e);
  }),
  ($3Dmol.ImposterMaterial.prototype = Object.create(
    $3Dmol.Material.prototype
  )),
  ($3Dmol.ImposterMaterial.prototype.clone = function () {
    var e = new $3Dmol.ImposterMaterial();
    return (
      $3Dmol.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.ambient.copy(this.ambient),
      e.emissive.copy(this.emissive),
      (e.wrapAround = this.wrapAround),
      e.wrapRGB.copy(this.wrapRGB),
      (e.map = this.map),
      (e.lightMap = this.lightMap),
      (e.specularMap = this.specularMap),
      (e.envMap = this.envMap),
      (e.combine = this.combine),
      (e.reflectivity = this.reflectivity),
      (e.refractionRatio = this.refractionRatio),
      (e.fog = this.fog),
      (e.shading = this.shading),
      (e.shaderID = this.shaderID),
      (e.vertexColors = this.vertexColors),
      (e.skinning = this.skinning),
      (e.morphTargets = this.morphTargets),
      (e.morphNormals = this.morphNormals),
      e
    );
  }),
  ($3Dmol.SphereImposterMaterial = function (e) {
    $3Dmol.ImposterMaterial.call(this),
      (this.shaderID = "sphereimposter"),
      this.setValues(e);
  }),
  ($3Dmol.SphereImposterMaterial.prototype = Object.create(
    $3Dmol.ImposterMaterial.prototype
  )),
  ($3Dmol.SphereImposterMaterial.prototype.clone = function () {
    var e = new $3Dmol.SphereImposterMaterial();
    return $3Dmol.ImposterMaterial.prototype.clone.call(this, e), e;
  }),
  ($3Dmol.SphereImposterOutlineMaterial = function (e) {
    $3Dmol.ImposterMaterial.call(this),
      (e = e || {}),
      (this.shaderID = "sphereimposteroutline"),
      (this.outlineColor = e.color || new $3Dmol.Color(0, 0, 0)),
      (this.outlineWidth = e.width || 0.1),
      (this.outlinePushback = e.pushback || 1),
      this.setValues(e);
  }),
  ($3Dmol.SphereImposterOutlineMaterial.prototype = Object.create(
    $3Dmol.ImposterMaterial.prototype
  )),
  ($3Dmol.SphereImposterOutlineMaterial.prototype.clone = function () {
    var e = new $3Dmol.SphereImposterOutlineMaterial();
    return (
      $3Dmol.ImposterMaterial.prototype.clone.call(this, e),
      (e.outlineColor = this.outlineColor),
      (e.outlineWidth = this.outlineWidth),
      (e.outlinePushback = this.outlinePushback),
      e
    );
  }),
  ($3Dmol.StickImposterMaterial = function (e) {
    $3Dmol.ImposterMaterial.call(this),
      (this.shaderID = "stickimposter"),
      this.setValues(e);
  }),
  ($3Dmol.StickImposterMaterial.prototype = Object.create(
    $3Dmol.ImposterMaterial.prototype
  )),
  ($3Dmol.StickImposterMaterial.prototype.clone = function () {
    var e = new $3Dmol.StickImposterMaterial();
    return $3Dmol.ImposterMaterial.prototype.clone.call(this, e), e;
  }),
  ($3Dmol.StickImposterOutlineMaterial = function (e) {
    $3Dmol.ImposterMaterial.call(this),
      (e = e || {}),
      (this.shaderID = "stickimposteroutline"),
      (this.outlineColor = e.color || new $3Dmol.Color(0, 0, 0)),
      (this.outlineWidth = e.width || 0.1),
      (this.outlinePushback = e.pushback || 1),
      this.setValues(e);
  }),
  ($3Dmol.StickImposterOutlineMaterial.prototype = Object.create(
    $3Dmol.ImposterMaterial.prototype
  )),
  ($3Dmol.StickImposterOutlineMaterial.prototype.clone = function () {
    var e = new $3Dmol.StickImposterOutlineMaterial();
    return (
      $3Dmol.ImposterMaterial.prototype.clone.call(this, e),
      (e.outlineColor = this.outlineColor),
      (e.outlineWidth = this.outlineWidth),
      (e.outlinePushback = this.outlinePushback),
      e
    );
  }),
  ($3Dmol.InstancedMaterial = function (e) {
    $3Dmol.Material.call(this),
      (this.color = new $3Dmol.Color(16777215)),
      (this.ambient = new $3Dmol.Color(1048575)),
      (this.emissive = new $3Dmol.Color(0)),
      (this.wrapAround = !1),
      (this.wrapRGB = new $3Dmol.Vector3(1, 1, 1)),
      (this.map = null),
      (this.lightMap = null),
      (this.specularMap = null),
      (this.envMap = null),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.fog = !0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.shading = $3Dmol.SmoothShading),
      (this.shaderID = "instanced"),
      (this.vertexColors = $3Dmol.NoColors),
      (this.skinning = !1),
      (this.sphere = null),
      this.setValues(e);
  }),
  ($3Dmol.InstancedMaterial.prototype = Object.create(
    $3Dmol.Material.prototype
  )),
  ($3Dmol.InstancedMaterial.prototype.clone = function () {
    var e = new $3Dmol.InstancedMaterial();
    return (
      $3Dmol.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.ambient.copy(this.ambient),
      e.emissive.copy(this.emissive),
      (e.wrapAround = this.wrapAround),
      e.wrapRGB.copy(this.wrapRGB),
      (e.map = this.map),
      (e.lightMap = this.lightMap),
      (e.specularMap = this.specularMap),
      (e.envMap = this.envMap),
      (e.combine = this.combine),
      (e.reflectivity = this.reflectivity),
      (e.refractionRatio = this.refractionRatio),
      (e.fog = this.fog),
      (e.shading = this.shading),
      (e.shaderID = this.shaderID),
      (e.vertexColors = this.vertexColors),
      (e.skinning = this.skinning),
      (e.morphTargets = this.morphTargets),
      (e.morphNormals = this.morphNormals),
      (e.sphere = this.sphere),
      e
    );
  }),
  ($3Dmol.VolumetricMaterial = function (e) {
    $3Dmol.Material.call(this),
      (this.transparent = !1),
      (this.volumetric = !0),
      (this.color = new $3Dmol.Color(16777215)),
      (this.transferfn = null),
      (this.map = null),
      (this.volumetric = !0),
      (this.extent = []),
      (this.maxdepth = 100),
      (this.unit = 0),
      (this.texmatrix = null),
      (this.transfermin = -1),
      (this.transfermax = 1),
      (this.subsamples = 5),
      (this.shaderID = "volumetric"),
      (this.side = $3Dmol.FrontSide),
      this.setValues(e);
  }),
  ($3Dmol.VolumetricMaterial.prototype = Object.create(
    $3Dmol.Material.prototype
  )),
  ($3Dmol.VolumetricMaterial.prototype.clone = function () {
    var e = Object.assign(new $3Dmol.VolumetricMaterial(), this);
    return $3Dmol.Material.prototype.clone.call(this, e), e;
  }),
  ($3Dmol.SpriteMaterial = function (e) {
    $3Dmol.Material.call(this),
      (this.color = new $3Dmol.Color(16777215)),
      (this.map = new $3Dmol.Texture()),
      (this.useScreenCoordinates = !0),
      (this.depthTest = !this.useScreenCoordinates),
      (this.sizeAttenuation = !this.useScreenCoordinates),
      (this.screenOffset = this.screenOffset),
      (this.scaleByViewPort = !this.sizeAttenuation),
      (this.alignment = $3Dmol.SpriteAlignment.center.clone()),
      (this.fog = !1),
      (this.uvOffset = new $3Dmol.Vector2(0, 0)),
      (this.uvScale = new $3Dmol.Vector2(1, 1)),
      this.setValues(e),
      void 0 === (e = e || {}).depthTest &&
        (this.depthTest = !this.useScreenCoordinates),
      void 0 === e.sizeAttenuation &&
        (this.sizeAttenuation = !this.useScreenCoordinates),
      void 0 === e.scaleByViewPort &&
        (this.scaleByViewPort = !this.sizeAttenuation);
  }),
  ($3Dmol.SpriteMaterial.prototype = Object.create($3Dmol.Material.prototype)),
  ($3Dmol.SpriteMaterial.prototype.clone = function () {
    var e = new $3Dmol.SpriteMaterial();
    return (
      $3Dmol.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      (e.map = this.map),
      (e.useScreenCoordinates = this.useScreenCoordinates),
      (e.screenOffset = this.screenOffset),
      (e.sizeAttenuation = this.sizeAttenuation),
      (e.scaleByViewport = this.scaleByViewPort),
      e.alignment.copy(this.alignment),
      e.uvOffset.copy(this.uvOffset),
      e
    );
  }),
  ($3Dmol.SpriteAlignment = {}),
  ($3Dmol.SpriteAlignment.topLeft = new $3Dmol.Vector2(1, -1)),
  ($3Dmol.SpriteAlignment.topCenter = new $3Dmol.Vector2(0, -1)),
  ($3Dmol.SpriteAlignment.topRight = new $3Dmol.Vector2(-1, -1)),
  ($3Dmol.SpriteAlignment.centerLeft = new $3Dmol.Vector2(1, 0)),
  ($3Dmol.SpriteAlignment.center = new $3Dmol.Vector2(0, 0)),
  ($3Dmol.SpriteAlignment.centerRight = new $3Dmol.Vector2(-1, 0)),
  ($3Dmol.SpriteAlignment.bottomLeft = new $3Dmol.Vector2(1, 1)),
  ($3Dmol.SpriteAlignment.bottomCenter = new $3Dmol.Vector2(0, 1)),
  ($3Dmol.SpriteAlignment.bottomRight = new $3Dmol.Vector2(-1, 1)),
  ($3Dmol.Texture = function (e, t) {
    $3Dmol.EventDispatcher.call(this),
      (this.id = $3Dmol.TextureIdCount++),
      (this.name = ""),
      (this.image = e),
      (this.mapping = new $3Dmol.UVMapping()),
      (this.wrapS = $3Dmol.ClampToEdgeWrapping),
      (this.wrapT = $3Dmol.ClampToEdgeWrapping),
      (this.anisotropy = 1),
      t
        ? ((this.format = $3Dmol.RFormat),
          (this.type = $3Dmol.FloatType),
          (this.premultiplyAlpha = !1),
          (this.flipY = !1),
          (this.unpackAlignment = 1),
          (this.magFilter = $3Dmol.NearestFilter),
          (this.minFilter = $3Dmol.NearestFilter))
        : ((this.format = $3Dmol.RGBAFormat),
          (this.type = $3Dmol.UnsignedByteType),
          (this.offset = new $3Dmol.Vector2(0, 0)),
          (this.repeat = new $3Dmol.Vector2(1, 1)),
          (this.premultiplyAlpha = !1),
          (this.flipY = !0),
          (this.unpackAlignment = 4),
          (this.magFilter = $3Dmol.LinearFilter),
          (this.minFilter = $3Dmol.LinearMipMapLinearFilter)),
      (this.needsUpdate = !1),
      (this.onUpdate = null);
  }),
  ($3Dmol.Texture.prototype = {
    constructor: $3Dmol.Texture,
    clone: function (e) {
      return (
        void 0 === e && (e = new $3Dmol.Texture()),
        (e.image = this.image),
        (e.mapping = this.mapping),
        (e.wrapS = this.wrapS),
        (e.wrapT = this.wrapT),
        (e.magFilter = this.magFilter),
        (e.minFilter = this.minFilter),
        (e.anisotropy = this.anisotropy),
        (e.format = this.format),
        (e.type = this.type),
        e.offset.copy(this.offset),
        e.repeat.copy(this.repeat),
        (e.premultiplyAlpha = this.premultiplyAlpha),
        (e.flipY = this.flipY),
        (e.unpackAlignment = this.unpackAlignment),
        e
      );
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  }),
  ($3Dmol.TextureIdCount = 0),
  ($3Dmol.FrontSide = 0),
  ($3Dmol.BackSide = 1),
  ($3Dmol.DoubleSide = 2),
  ($3Dmol.NoShading = 0),
  ($3Dmol.FlatShading = 1),
  ($3Dmol.SmoothShading = 2),
  ($3Dmol.NoColors = 0),
  ($3Dmol.FaceColors = 1),
  ($3Dmol.VertexColors = 2),
  ($3Dmol.MultiplyOperation = 0),
  ($3Dmol.MixOperation = 1),
  ($3Dmol.AddOperation = 2),
  ($3Dmol.UVMapping = function () {}),
  ($3Dmol.ClampToEdgeWrapping = 1001),
  ($3Dmol.LinearFilter = 1006),
  ($3Dmol.NearestFilter = 1007),
  ($3Dmol.LinearMipMapLinearFilter = 1008),
  ($3Dmol.UnsignedByteType = 1009),
  ($3Dmol.FloatType = 1010),
  ($3Dmol.RGBAFormat = 1021),
  ($3Dmol.RFormat = 1022),
  ($3Dmol.R32Format = 1023),
  ($3Dmol.Line = function (e, t, r) {
    $3Dmol.Object3D.call(this),
      (this.geometry = e),
      (this.material =
        void 0 !== t
          ? t
          : new $3Dmol.LineBasicMaterial({ color: 16777215 * Math.random() })),
      (this.type = void 0 !== r ? r : $3Dmol.LineStrip);
  }),
  ($3Dmol.LineStrip = 0),
  ($3Dmol.LinePieces = 1),
  ($3Dmol.Line.prototype = Object.create($3Dmol.Object3D.prototype)),
  ($3Dmol.Line.prototype.clone = function (e) {
    return (
      void 0 === e &&
        (e = new $3Dmol.Line(this.geometry, this.material, this.type)),
      $3Dmol.Object3D.prototype.clone.call(this, e),
      e
    );
  }),
  ($3Dmol.Mesh = function (e, t) {
    $3Dmol.Object3D.call(this),
      (this.geometry = e),
      (this.material =
        void 0 !== t
          ? t
          : new $3Dmol.MeshBasicMaterial({
              color: 16777215 * Math.random(),
              wireframe: !0,
            }));
  }),
  ($3Dmol.Mesh.prototype = Object.create($3Dmol.Object3D.prototype)),
  ($3Dmol.Mesh.prototype.clone = function (e) {
    return (
      void 0 === e && (e = new $3Dmol.Mesh(this.geometry, this.material)),
      $3Dmol.Object3D.prototype.clone.call(this, e),
      e
    );
  }),
  ($3Dmol.Sprite = function (e) {
    $3Dmol.Object3D.call(this),
      (this.material = void 0 !== e ? e : new $3Dmol.SpriteMaterial()),
      (this.rotation3d = this.rotation),
      (this.rotation = 0);
  }),
  ($3Dmol.Sprite.prototype = Object.create($3Dmol.Object3D.prototype)),
  ($3Dmol.Sprite.prototype.updateMatrix = function () {
    this.matrix.setPosition(this.position),
      this.rotation3d.set(0, 0, this.rotation),
      this.matrix.setRotationFromEuler(this.rotation3d),
      (1 === this.scale.x && 1 === this.scale.y) ||
        this.matrix.scale(this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }),
  ($3Dmol.Sprite.prototype.clone = function (e) {
    return (
      void 0 === e && (e = new $3Dmol.Sprite(this.material)),
      $3Dmol.Object3D.prototype.clone.call(this, e),
      e
    );
  }),
  ($3Dmol.Renderer = function (e) {
    (e = e || {}),
      (this.row = e.row),
      (this.col = e.col),
      (this.rows = e.rows),
      (this.cols = e.cols);
    var t = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
      r = void 0 !== e.precision ? e.precision : "highp",
      n = void 0 === e.alpha || e.alpha,
      i = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
      o = void 0 !== e.antialias && e.antialias,
      a = void 0 === e.stencil || e.stencil,
      s = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
      l =
        void 0 !== e.clearColor
          ? new $3Dmol.Color(e.clearColor)
          : new $3Dmol.Color(0),
      c = void 0 !== e.clearAlpha ? e.clearAlpha : 0,
      u = new $3Dmol.MeshOutlineMaterial(e.outline),
      d = new $3Dmol.SphereImposterOutlineMaterial(e.outline),
      h = new $3Dmol.StickImposterOutlineMaterial(e.outline),
      p = !!e.outline;
    (this.domElement = t),
      (this.context = null),
      (this.devicePixelRatio = 1),
      (t.id = e.id),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.autoUpdateObjects = !0),
      (this.autoUpdateScene = !0),
      (this.info = {
        memory: { programs: 0, geometries: 0, textures: 0 },
        render: { calls: 0, vertices: 0, faces: 0, points: 0 },
      });
    var f,
      m = this,
      g = [],
      v = 0,
      y = 1,
      x = null,
      b = -1,
      w = null,
      D = null,
      C = 0,
      S = -1,
      A = -1,
      $ = -1,
      M = -1,
      k = null,
      z = null,
      _ = 0,
      T = 0,
      L = 0,
      E = 0,
      I = {},
      F = new $3Dmol.Matrix4(),
      O = new $3Dmol.Vector3(),
      R = new $3Dmol.Matrix4(),
      N = new $3Dmol.Matrix4(),
      P = new $3Dmol.Matrix4(),
      V = new $3Dmol.Vector3(),
      B = !0,
      U = {
        ambient: [0, 0, 0],
        directional: { length: 0, colors: [], positions: [] },
        point: { length: 0, colors: [], positions: [], distances: [] },
        spot: {
          length: 0,
          colors: [],
          positions: [],
          distances: [],
          directions: [],
          anglesCos: [],
          exponents: [],
        },
        hemi: { length: 0, skyColors: [], groundColors: [], positions: [] },
      },
      j = new $3Dmol.SpritePlugin(),
      G = null,
      H = null,
      q = null,
      W = null,
      Y = null,
      X = null;
    !(function () {
      try {
        if (
          !(f = t.getContext("webgl2", {
            alpha: n,
            premultipliedAlpha: i,
            antialias: !1,
            stencil: a,
            preserveDrawingBuffer: s,
          })) &&
          !(f = t.getContext("experimental-webgl", {
            alpha: n,
            premultipliedAlpha: i,
            antialias: !1,
            stencil: a,
            preserveDrawingBuffer: s,
          })) &&
          !(f = t.getContext("webgl", {
            alpha: n,
            premultipliedAlpha: i,
            antialias: !1,
            stencil: a,
            preserveDrawingBuffer: s,
          }))
        )
          throw "Error creating WebGL context.";
        var e = f.getParameter(f.VERSION);
        y = parseInt(e[6]);
      } catch (e) {
        console.error(e);
      }
    })(),
      f.clearColor(0, 0, 0, 1),
      f.clearDepth(1),
      f.clearStencil(0),
      f.enable(f.DEPTH_TEST),
      f.depthFunc(f.LEQUAL),
      f.frontFace(f.CCW),
      f.cullFace(f.BACK),
      f.enable(f.CULL_FACE),
      f.enable(f.BLEND),
      f.blendEquation(f.FUNC_ADD),
      f.blendFunc(f.SRC_ALPHA, f.ONE_MINUS_SRC_ALPHA),
      f.clearColor(l.r, l.g, l.b, c),
      (this.context = f);
    var Z = f.getExtension("ANGLE_instanced_arrays"),
      Q = f.getExtension("EXT_frag_depth"),
      K = f.getExtension("OES_texture_float_linear"),
      J = f.getExtension("EXT_color_buffer_float");
    function ee(e) {
      I[e] || (f.enableVertexAttribArray(e), (I[e] = !0));
    }
    function te(e) {
      e !== z && (f.lineWidth(e), (z = e));
    }
    (this.supportedExtensions = function () {
      return {
        supportsAIA: Boolean(Z),
        supportsImposters: Boolean(Q) || !Ce(),
      };
    }),
      (this.getContext = function () {
        return f;
      }),
      (this.isLost = function () {
        return f.isContextLost();
      }),
      (this.getPrecision = function () {
        return r;
      }),
      (this.setClearColorHex = function (e, t) {
        l.setHex(e), (c = t), f.clearColor(l.r, l.g, l.b, c);
      }),
      (this.enableOutline = function (e) {
        (u = new $3Dmol.MeshOutlineMaterial(e)),
          (d = new $3Dmol.SphereImposterOutlineMaterial(e)),
          (h = new $3Dmol.StickImposterOutlineMaterial(e)),
          (p = !0);
      }),
      (this.disableOutline = function () {
        p = !1;
      }),
      (this.setViewport = function () {
        if (
          null != this.rows &&
          null != this.cols &&
          null != this.row &&
          null != this.col
        ) {
          var e = t.width / this.cols,
            r = t.height / this.rows;
          (_ = e),
            (T = r),
            f.enable(f.SCISSOR_TEST),
            f.scissor(e * this.col, r * this.row, e, r),
            f.viewport(e * this.col, r * this.row, e, r);
        }
      }),
      (this.setSize = function (e, r) {
        if (
          ((this.devicePixelRatio =
            void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1),
          o && this.devicePixelRatio < 2 && (this.devicePixelRatio *= 2),
          null != this.rows &&
            null != this.cols &&
            null != this.row &&
            null != this.col)
        ) {
          var n = e / this.cols,
            i = r / this.rows;
          (t.width = e * this.devicePixelRatio),
            (t.height = r * this.devicePixelRatio),
            (_ = n * this.devicePixelRatio),
            (T = i * this.devicePixelRatio),
            (t.style.width = e + "px"),
            (t.style.height = r + "px"),
            this.setViewport();
        } else
          (_ = t.width = e * this.devicePixelRatio),
            (T = t.height = r * this.devicePixelRatio),
            (t.style.width = e + "px"),
            (t.style.height = r + "px"),
            f.viewport(0, 0, f.drawingBufferWidth, f.drawingBufferHeight);
        this.initFrameBuffer();
      }),
      (this.clear = function (e, t, r) {
        var n = 0;
        (void 0 === e || e) && (n |= f.COLOR_BUFFER_BIT),
          (void 0 === t || t) && (n |= f.DEPTH_BUFFER_BIT),
          (void 0 === r || r) && (n |= f.STENCIL_BUFFER_BIT),
          f.clear(n);
      }),
      (this.clearTarget = function (e, t, r) {
        this.clear(e, t, r);
      }),
      (this.setMaterialFaces = function (e, t) {
        var r = e.side === $3Dmol.DoubleSide,
          n = e.side === $3Dmol.BackSide;
        e.imposter || (n = t ? !n : n),
          S !== r &&
            (r ? f.disable(f.CULL_FACE) : f.enable(f.CULL_FACE), (S = r)),
          A !== n && (n ? f.frontFace(f.CW) : f.frontFace(f.CCW), (A = n)),
          f.cullFace(f.BACK);
      }),
      (this.setDepthTest = function (e) {
        $ !== e &&
          (e ? f.enable(f.DEPTH_TEST) : f.disable(f.DEPTH_TEST), ($ = e));
      }),
      (this.setDepthWrite = function (e) {
        M !== e && (f.depthMask(e), (M = e));
      }),
      (this.setBlending = function (e) {
        e
          ? (f.enable(f.BLEND),
            f.blendEquationSeparate(f.FUNC_ADD, f.FUNC_ADD),
            f.blendFuncSeparate(
              f.SRC_ALPHA,
              f.ONE_MINUS_SRC_ALPHA,
              f.ONE,
              f.ONE_MINUS_SRC_ALPHA
            ))
          : f.disable(f.BLEND),
          e;
      });
    var re = function (e) {
        var t = e.program;
        if (void 0 !== t) {
          var r, n, i;
          e.program = void 0;
          var o = !1;
          for (r = 0, n = g.length; r < n; r++)
            if ((i = g[r]).program === t) {
              i.usedTimes--, 0 === i.usedTimes && (o = !0);
              break;
            }
          if (!0 === o) {
            var a = [];
            for (r = 0, n = g.length; r < n; r++)
              (i = g[r]).program !== t && a.push(i);
            (g = a), f.deleteProgram(t), m.info.memory.programs--;
          }
        }
      },
      ne = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", ne),
          (function (e) {
            if (
              ((e.__webglInit = void 0),
              void 0 !== e.__webglVertexBuffer &&
                f.deleteBuffer(e.__webglVertexBuffer),
              void 0 !== e.__webglColorBuffer &&
                f.deleteBuffer(e.__webglColorBuffer),
              void 0 !== e.geometryGroups)
            )
              for (var t = 0, r = e.groups; t < r; t++) {
                var n = e.geometryGroups[t];
                void 0 !== n.__webglVertexBuffer &&
                  f.deleteBuffer(n.__webglVertexBuffer),
                  void 0 !== n.__webglColorBuffer &&
                    f.deleteBuffer(n.__webglColorBuffer),
                  void 0 !== n.__webglNormalBuffer &&
                    f.deleteBuffer(n.__webglNormalBuffer),
                  void 0 !== n.__webglFaceBuffer &&
                    f.deleteBuffer(n.__webglFaceBuffer),
                  void 0 !== n.__webglLineBuffer &&
                    f.deleteBuffer(n.__webglLineBuffer);
              }
          })(t),
          m.info.memory.geometries--;
      },
      ie = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", ie),
          (function (e) {
            if (e.image && e.image.__webglTextureCube)
              f.deleteTexture(e.image.__webglTextureCube);
            else {
              if (!e.__webglInit) return;
              (e.__webglInit = !1), f.deleteTexture(e.__webglTexture);
            }
          })(t),
          m.info.memory.textures--;
      },
      oe = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", oe), re(t);
      };
    function ae(e, t) {
      var r;
      return (
        Ce() ||
          t.startsWith("#version") ||
          ((t = t.replace(/gl_FragDepthEXT/g, "gl_FragDepth")),
          (t =
            "#version 300 es\n" +
            (t = (t = (t = (t = (t =
              "fragment" == e
                ? t.replace(/varying/g, "in")
                : t.replace(/varying/g, "out")).replace(
              /attribute/g,
              "in"
            )).replace(/texture2D/g, "texture")).replace(
              /\/\/DEFINEFRAGCOLOR/g,
              "out vec4 glFragColor;"
            )).replace(/gl_FragColor/g, "glFragColor")))),
        "fragment" === e
          ? (r = f.createShader(f.FRAGMENT_SHADER))
          : "vertex" === e && (r = f.createShader(f.VERTEX_SHADER)),
        f.shaderSource(r, t),
        f.compileShader(r),
        f.getShaderParameter(r, f.COMPILE_STATUS)
          ? r
          : (console.error(f.getShaderInfoLog(r)),
            console.error("could not initialize shader"),
            null)
      );
    }
    function se(e, t, n, i) {
      var o,
        a,
        s,
        l,
        c = [];
      for (o in (c.push(e), c.push(t), i)) c.push(o), c.push(i[o]);
      for (l = c.join(), o = 0, a = g.length; o < a; o++) {
        var u = g[o];
        if (u.code === l) return u.usedTimes++, u.program;
      }
      if (Ce() && i.volumetric)
        throw new Error(
          "Volumetric rendering requires webgl2 which is not supported by your hardware."
        );
      s = f.createProgram();
      var d,
        h,
        p,
        y = "precision " + r + " float;",
        x = [i.volumetric ? "#version 300 es" : "", y].join("\n"),
        b = ae(
          "fragment",
          [
            i.volumetric ? "#version 300 es" : "",
            i.fragdepth && Ce() ? "#extension GL_EXT_frag_depth: enable" : "",
            i.wireframe ? "#define WIREFRAME 1" : "",
            y,
          ].join("\n") + e
        ),
        w = ae("vertex", x + t);
      for (h in (f.attachShader(s, w),
      f.attachShader(s, b),
      f.linkProgram(s),
      f.getProgramParameter(s, f.LINK_STATUS) ||
        console.error("Could not initialize shader"),
      (s.uniforms = {}),
      (s.attributes = {}),
      (d = [
        "viewMatrix",
        "modelViewMatrix",
        "projectionMatrix",
        "normalMatrix",
      ]),
      n))
        d.push(h);
      for (p = 0; p < d.length; p++) {
        var D = d[p];
        s.uniforms[D] = f.getUniformLocation(s, D);
      }
      for (
        d = ["position", "normal", "color", "lineDistance", "offset", "radius"],
          p = 0;
        p < d.length;
        p++
      ) {
        var C = d[p];
        s.attributes[C] = f.getAttribLocation(s, C);
      }
      return (
        (s.id = v++),
        g.push({ program: s, code: l, usedTimes: 1 }),
        (m.info.memory.programs = g.length),
        s
      );
    }
    function le(e, t, r, n, i, o) {
      n.needsUpdate &&
        (n.program && re(n), m.initMaterial(n, t, r, i), (n.needsUpdate = !1));
      var a = !1,
        s = n.program,
        l = s.uniforms,
        c = n.uniforms;
      if (
        (s != x && (f.useProgram(s), (x = s), (a = !0)),
        n.id != b && ((b = n.id), (a = !0)),
        e != D && ((D = e), (a = !0)),
        f.uniformMatrix4fv(l.projectionMatrix, !1, e.projectionMatrix.elements),
        f.uniformMatrix4fv(l.modelViewMatrix, !1, i._modelViewMatrix.elements),
        f.uniformMatrix3fv(l.normalMatrix, !1, i._normalMatrix.elements),
        a)
      ) {
        if (
          ((c.fogColor.value = r.color),
          (c.fogNear.value = r.near),
          (c.fogFar.value = r.far),
          n.shaderID.startsWith("lambert") ||
            "instanced" === n.shaderID ||
            n.shaderID.endsWith("imposter"))
        )
          f.uniformMatrix4fv(l.viewMatrix, !1, e.matrixWorldInverse.elements),
            B &&
              (!(function (e, t) {
                var r,
                  n,
                  i,
                  o,
                  a,
                  s = U,
                  l = s.directional.colors,
                  c = s.directional.positions,
                  u = 0,
                  d = 0;
                for (r = 0, n = t.length; r < n; r++)
                  if (
                    ((i = t[r]),
                    (o = i.color),
                    (a = i.intensity),
                    i.distance,
                    i instanceof $3Dmol.Light)
                  ) {
                    if (
                      (0,
                      V.getPositionFromMatrix(i.matrixWorld),
                      O.getPositionFromMatrix(i.target.matrixWorld),
                      V.sub(O),
                      V.normalize(),
                      0 === V.x && 0 === V.y && 0 === V.z)
                    )
                      continue;
                    (c[d] = V.x),
                      (c[d + 1] = V.y),
                      (c[d + 2] = V.z),
                      (l[d] = o.r * a),
                      (l[d + 1] = o.g * a),
                      (l[d + 2] = o.b * a),
                      (d += 3),
                      u++;
                  }
                (s.ambient[0] = 0),
                  (s.ambient[1] = 0),
                  (s.ambient[2] = 0),
                  (s.directional.length = u);
              })(0, t),
              (B = !1)),
            (c.directionalLightColor.value = U.directional.colors),
            (c.directionalLightDirection.value = U.directional.positions);
        else if (n.shaderID.endsWith("outline"))
          (c.outlineColor.value = n.outlineColor),
            (c.outlineWidth.value = n.outlineWidth),
            (c.outlinePushback.value = n.outlinePushback);
        else if ("sphereimposter" === n.shaderID)
          f.uniformMatrix4fv(l.viewMatrix, !1, e.matrixWorldInverse.elements),
            (c.directionalLightColor.value = U.directional.colors),
            (c.directionalLightDirection.value = U.directional.positions);
        else if ("volumetric" === n.shaderID) {
          i._modelViewMatrix.getScale(V),
            R.getInverse(i._modelViewMatrix),
            N.getInverse(e.projectionMatrix),
            P.multiplyMatrices(i.material.texmatrix, R),
            f.uniformMatrix4fv(l.textmat, !1, P.elements),
            f.uniformMatrix4fv(l.projinv, !1, N.elements);
          let t = Math.min(Math.min(V.x, V.y), V.z);
          (c.step.value = i.material.unit * t),
            (c.maxdepth.value = i.material.maxdepth * t),
            (c.transfermax.value = i.material.transfermax),
            (c.transfermin.value = i.material.transfermin),
            (c.subsamples.value = i.material.subsamples),
            o.setTexture(i.material.transferfn, 4, !1),
            o.setTexture(i.material.map, 3, !0),
            f.activeTexture(f.TEXTURE5),
            f.bindTexture(f.TEXTURE_2D, X);
        }
        (c.opacity.value = n.opacity),
          (function (e, t) {
            var r, n, i, o;
            for (r in t)
              e[r] &&
                ((n = t[r].type),
                (i = t[r].value),
                (o = e[r]),
                "f" === n
                  ? f.uniform1f(o, i)
                  : "i" === n
                  ? f.uniform1i(o, i)
                  : "fv" === n
                  ? f.uniform3fv(o, i)
                  : "c" === n
                  ? f.uniform3f(o, i.r, i.g, i.b)
                  : "f4" === n && f.uniform4f(o, i[0], i[1], i[2], i[3]));
          })(l, c);
      }
      return s;
    }
    function ce(e, t, r, n, i, o, a) {
      var s, l, c, g, v, y, x, b;
      t
        ? ((v = e.length - 1), (y = -1), (x = -1))
        : ((v = 0), (y = e.length), (x = 1));
      for (var w = v; w !== y; w += x)
        if ((s = e[w]).render) {
          if (((l = s.object), (c = s.buffer), !(g = s[r]))) continue;
          a && m.setBlending(!0),
            m.setDepthTest(g.depthTest),
            m.setDepthWrite(g.depthWrite),
            (b = g.polygonOffset),
            g.polygonOffsetFactor,
            g.polygonOffsetUnits,
            k !== b &&
              (b
                ? f.enable(f.POLYGON_OFFSET_FILL)
                : f.disable(f.POLYGON_OFFSET_FILL));
          var D = l._modelViewMatrix.isReflected();
          m.setMaterialFaces(g, D),
            m.renderBuffer(n, i, o, g, c, l),
            (p || g.outline) &&
              ("sphereimposter" == g.shaderID
                ? m.renderBuffer(n, i, o, d, c, l)
                : "stickimposter" == g.shaderID
                ? m.renderBuffer(n, i, o, h, c, l)
                : g.wireframe ||
                  "basic" === g.shaderID ||
                  0 === g.opacity ||
                  m.renderBuffer(n, i, o, u, c, l));
        }
    }
    function ue(e, t, r) {
      (w = -1),
        (x = null),
        (D = null),
        -1,
        (M = -1),
        ($ = -1),
        (S = -1),
        (b = -1),
        (A = -1),
        (B = !0),
        j.render(e, t, L, E, r),
        (w = -1),
        (x = null),
        (D = null),
        -1,
        (M = -1),
        ($ = -1),
        (S = -1),
        (b = -1),
        (A = -1);
    }
    function de(e, t) {
      var r, n, i, o;
      if (
        !e.__webglInit &&
        ((e.__webglInit = !0),
        (e._modelViewMatrix = new $3Dmol.Matrix4()),
        (e._normalMatrix = new $3Dmol.Matrix3()),
        void 0 !== e.geometry &&
          void 0 === e.geometry.__webglInit &&
          ((e.geometry.__webglInit = !0),
          e.geometry.addEventListener("dispose", ne)),
        e instanceof $3Dmol.Mesh || e instanceof $3Dmol.Line)
      )
        for (
          i = e.geometry, e.material, r = 0, n = i.geometryGroups.length;
          r < n;
          r++
        )
          ((o = i.geometryGroups[r]).id = C++),
            o.__webglVertexBuffer ||
              (e instanceof $3Dmol.Mesh
                ? (ge(o),
                  (i.elementsNeedUpdate = !0),
                  (i.normalsNeedUpdate = !0))
                : e instanceof $3Dmol.Line && ve(o),
              (i.verticesNeedUpdate = !0),
              (i.colorsNeedUpdate = !0));
      if (!e.__webglActive) {
        if (e instanceof $3Dmol.Mesh || e instanceof $3Dmol.Line)
          for (r = 0, n = (i = e.geometry).geometryGroups.length; r < n; r++)
            (o = i.geometryGroups[r]), ye(t.__webglObjects, o, e);
        else e instanceof $3Dmol.Sprite && t.__webglSprites.push(e);
        e.__webglActive = !0;
      }
    }
    function he(e) {
      var t,
        r = e.geometry;
      if (e instanceof $3Dmol.Mesh || e instanceof $3Dmol.Line) {
        for (var n = 0, i = r.geometryGroups.length; n < i; n++)
          (t = r.geometryGroups[n]),
            (r.verticesNeedUpdate ||
              r.elementsNeedUpdate ||
              r.colorsNeedUpdate ||
              r.normalsNeedUpdate) &&
              me(t, f.STATIC_DRAW);
        (r.verticesNeedUpdate = !1),
          (r.elementsNeedUpdate = !1),
          (r.normalsNeedUpdate = !1),
          (r.colorsNeedUpdate = !1),
          (r.buffersNeedUpdate = !1);
      }
    }
    function pe(e, t) {
      e instanceof $3Dmol.Mesh || e instanceof $3Dmol.Line
        ? (function (e, t) {
            for (var r = e.length - 1; r >= 0; --r)
              e[r].object === t && e.splice(r, 1);
          })(t.__webglObjects, e)
        : e instanceof $3Dmol.Sprite &&
          (function (e, t) {
            for (var r = e.length - 1; r >= 0; --r)
              e[r] === t && e.splice(r, 1);
          })(t.__webglSprites, e),
        (e.__webglActive = !1);
    }
    function fe(e) {
      var t = e.object.material;
      if (t.volumetric)
        (e.opaque = null), (e.transparent = null), (e.volumetric = t);
      else if (t.transparent) {
        if (
          ((e.opaque = null),
          (e.volumetric = null),
          (e.transparent = t),
          !t.wireframe)
        ) {
          var r = t.clone();
          (r.opacity = 0), (e.blank = r);
        }
      } else (e.opaque = t), (e.transparent = null), (e.volumetric = null);
    }
    function me(e, t) {
      var r = e.vertexArray,
        n = e.colorArray;
      if (
        (void 0 !== e.__webglOffsetBuffer
          ? (f.bindBuffer(f.ARRAY_BUFFER, e.__webglOffsetBuffer),
            f.bufferData(f.ARRAY_BUFFER, r, t))
          : (f.bindBuffer(f.ARRAY_BUFFER, e.__webglVertexBuffer),
            f.bufferData(f.ARRAY_BUFFER, r, t)),
        f.bindBuffer(f.ARRAY_BUFFER, e.__webglColorBuffer),
        f.bufferData(f.ARRAY_BUFFER, n, t),
        e.normalArray && void 0 !== e.__webglNormalBuffer)
      ) {
        var i = e.normalArray;
        f.bindBuffer(f.ARRAY_BUFFER, e.__webglNormalBuffer),
          f.bufferData(f.ARRAY_BUFFER, i, t);
      }
      if (
        (e.radiusArray &&
          void 0 !== e.__webglRadiusBuffer &&
          (f.bindBuffer(f.ARRAY_BUFFER, e.__webglRadiusBuffer),
          f.bufferData(f.ARRAY_BUFFER, e.radiusArray, t)),
        e.faceArray && void 0 !== e.__webglFaceBuffer)
      ) {
        var o = e.faceArray;
        f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer),
          f.bufferData(f.ELEMENT_ARRAY_BUFFER, o, t);
      }
      if (e.lineArray && void 0 !== e.__webglLineBuffer) {
        var a = e.lineArray;
        f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer),
          f.bufferData(f.ELEMENT_ARRAY_BUFFER, a, t);
      }
    }
    function ge(e) {
      e.radiusArray && (e.__webglRadiusBuffer = f.createBuffer()),
        e.useOffset && (e.__webglOffsetBuffer = f.createBuffer()),
        (e.__webglVertexBuffer = f.createBuffer()),
        (e.__webglNormalBuffer = f.createBuffer()),
        (e.__webglColorBuffer = f.createBuffer()),
        (e.__webglFaceBuffer = f.createBuffer()),
        (e.__webglLineBuffer = f.createBuffer()),
        m.info.memory.geometries++;
    }
    function ve(e) {
      (e.__webglVertexBuffer = f.createBuffer()),
        (e.__webglColorBuffer = f.createBuffer()),
        m.info.memory.geometries++;
    }
    function ye(e, t, r) {
      e.push({ buffer: t, object: r, opaque: null, transparent: null });
    }
    function xe(e, t) {
      e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld),
        e._normalMatrix.getInverse(e._modelViewMatrix),
        e._normalMatrix.transpose();
    }
    function be() {
      return f.LINEAR;
    }
    function we(e, t) {
      e == f.TEXTURE_2D
        ? (f.texParameteri(e, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
          f.texParameteri(e, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
          f.texParameteri(e, f.TEXTURE_MAG_FILTER, be(t.magFilter)),
          f.texParameteri(e, f.TEXTURE_MIN_FILTER, be(t.minFilter)))
        : (f.texParameteri(e, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
          f.texParameteri(e, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
          f.texParameteri(e, f.TEXTURE_WRAP_R, f.CLAMP_TO_EDGE),
          J && K
            ? (f.texParameteri(e, f.TEXTURE_MAG_FILTER, f.LINEAR),
              f.texParameteri(e, f.TEXTURE_MIN_FILTER, f.LINEAR))
            : (f.texParameteri(e, f.TEXTURE_MAG_FILTER, f.NEAREST),
              f.texParameteri(e, f.TEXTURE_MIN_FILTER, f.NEAREST)));
    }
    function De(e) {
      return e === $3Dmol.UnsignedByteType
        ? f.UNSIGNED_BYTE
        : e === $3Dmol.RGBAFormat
        ? f.RGBA
        : e === $3Dmol.NearestFilter
        ? f.NEAREST
        : 0;
    }
    function Ce() {
      return 1 == y;
    }
    (this.initMaterial = function (e) {
      var t, r;
      if ((e.addEventListener("dispose", oe), (r = e.shaderID))) {
        var n = $3Dmol.ShaderLib[r];
        (e.vertexShader = n.vertexShader),
          (e.fragmentShader = n.fragmentShader),
          (e.uniforms = $3Dmol.ShaderUtils.clone(n.uniforms));
      }
      (t = {
        wireframe: e.wireframe,
        fragdepth: e.imposter,
        volumetric: e.volumetric,
      }),
        (e.program = se(e.fragmentShader, e.vertexShader, e.uniforms, t));
    }),
      (this.renderBuffer = function (e, t, r, n, i, o) {
        if (n.visible) {
          var a, s;
          s = (a = le(e, t, r, n, o, this)).attributes;
          var l,
            c,
            u = !1,
            d = n.wireframe ? 1 : 0,
            h = 16777215 * i.id + 2 * a.id + d;
          if (
            (h !== w && ((w = h), (u = !0)),
            u &&
              (!(function () {
                for (let e in I)
                  I[e] && (f.disableVertexAttribArray(e), (I[e] = !1));
              })(),
              s.position >= 0 &&
                (f.bindBuffer(f.ARRAY_BUFFER, i.__webglVertexBuffer),
                ee(s.position),
                f.vertexAttribPointer(s.position, 3, f.FLOAT, !1, 0, 0)),
              s.color >= 0 &&
                (f.bindBuffer(f.ARRAY_BUFFER, i.__webglColorBuffer),
                ee(s.color),
                f.vertexAttribPointer(s.color, 3, f.FLOAT, !1, 0, 0)),
              s.normal >= 0 &&
                (f.bindBuffer(f.ARRAY_BUFFER, i.__webglNormalBuffer),
                ee(s.normal),
                f.vertexAttribPointer(s.normal, 3, f.FLOAT, !1, 0, 0)),
              s.offset >= 0 &&
                (f.bindBuffer(f.ARRAY_BUFFER, i.__webglOffsetBuffer),
                ee(s.offset),
                f.vertexAttribPointer(s.offset, 3, f.FLOAT, !1, 0, 0)),
              s.radius >= 0 &&
                (f.bindBuffer(f.ARRAY_BUFFER, i.__webglRadiusBuffer),
                ee(s.radius),
                f.vertexAttribPointer(s.radius, 1, f.FLOAT, !1, 0, 0))),
            o instanceof $3Dmol.Mesh)
          ) {
            if ("instanced" === n.shaderID) {
              var p = n.sphere.geometryGroups[0];
              u &&
                (f.bindBuffer(f.ARRAY_BUFFER, i.__webglVertexBuffer),
                f.bufferData(f.ARRAY_BUFFER, p.vertexArray, f.STATIC_DRAW),
                f.bindBuffer(f.ARRAY_BUFFER, i.__webglNormalBuffer),
                f.bufferData(f.ARRAY_BUFFER, p.normalArray, f.STATIC_DRAW),
                f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, i.__webglFaceBuffer),
                f.bufferData(
                  f.ELEMENT_ARRAY_BUFFER,
                  p.faceArray,
                  f.STATIC_DRAW
                )),
                (l = p.faceidx),
                Z.vertexAttribDivisorANGLE(s.offset, 1),
                Z.vertexAttribDivisorANGLE(s.radius, 1),
                Z.vertexAttribDivisorANGLE(s.color, 1),
                Z.drawElementsInstancedANGLE(
                  f.TRIANGLES,
                  l,
                  f.UNSIGNED_SHORT,
                  0,
                  i.radiusArray.length
                ),
                Z.vertexAttribDivisorANGLE(s.offset, 0),
                Z.vertexAttribDivisorANGLE(s.radius, 0),
                Z.vertexAttribDivisorANGLE(s.color, 0);
            } else
              n.wireframe
                ? ((c = i.lineidx),
                  te(n.wireframeLinewidth),
                  u &&
                    f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, i.__webglLineBuffer),
                  f.drawElements(f.LINES, c, f.UNSIGNED_SHORT, 0))
                : ((l = i.faceidx),
                  u &&
                    f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, i.__webglFaceBuffer),
                  f.drawElements(f.TRIANGLES, l, f.UNSIGNED_SHORT, 0));
            m.info.render.calls++,
              (m.info.render.vertices += l),
              (m.info.render.faces += l / 3);
          } else
            o instanceof $3Dmol.Line &&
              ((c = i.vertices),
              te(n.linewidth),
              f.drawArrays(f.LINES, 0, c),
              m.info.render.calls++);
        }
      }),
      (this.render = function (e, t, r) {
        if (t instanceof $3Dmol.Camera != !1) {
          var n,
            i,
            o,
            a,
            s,
            u = e.__lights,
            d = e.fog;
          (b = -1),
            (B = !0),
            this.autoUpdateScene && e.updateMatrixWorld(),
            void 0 === t.parent && t.updateMatrixWorld(),
            t.matrixWorldInverse.getInverse(t.matrixWorld),
            F.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            this.autoUpdateObjects && this.initWebGLObjects(e),
            (m.info.render.calls = 0),
            (m.info.render.vertices = 0),
            (m.info.render.faces = 0),
            (m.info.render.points = 0),
            (L = _),
            (E = T),
            this.setViewport(),
            this.setFrameBuffer(),
            (this.autoClear || r) &&
              (f.clearColor(l.r, l.g, l.b, c),
              this.clear(
                this.autoClearColor,
                this.autoClearDepth,
                this.autoClearStencil
              ));
          var h = !1;
          for (n = 0, i = (s = e.__webglObjects).length; n < i; n++)
            (a = (o = s[n]).object),
              (o.render = !1),
              a.visible &&
                (xe(a, t), fe(o), (o.render = !0), o.volumetric && (h = !0));
          this.setBlending(!1),
            ce(e.__webglObjects, !0, "opaque", t, u, d, !1),
            ue(e, t, !1),
            ce(e.__webglObjects, !0, "blank", t, u, d, !0),
            ce(e.__webglObjects, !1, "transparent", t, u, d, !0),
            h &&
              W &&
              (this.reinitFrameBuffer(),
              ce(e.__webglObjects, !1, "volumetric", t, u, d, !0)),
            this.renderFrameBuffertoScreen(),
            this.setDepthTest(!0),
            this.setDepthWrite(!0),
            ue(e, t, !0);
        } else
          console.error(
            "$3Dmol.Renderer.render: camera is not an instance of $3Dmol.Camera."
          );
      }),
      (this.reinitFrameBuffer = function () {
        Ce() ||
          ((W = f.createFramebuffer()),
          f.bindFramebuffer(f.FRAMEBUFFER, W),
          f.framebufferTexture2D(
            f.FRAMEBUFFER,
            f.COLOR_ATTACHMENT0,
            f.TEXTURE_2D,
            Y,
            0
          ));
      }),
      (this.setFrameBuffer = function () {
        if (Ce() || !W) return;
        let e = _,
          t = T;
        f.enable(f.SCISSOR_TEST),
          f.scissor(0, 0, e, t),
          f.viewport(0, 0, e, t),
          f.bindTexture(f.TEXTURE_2D, Y),
          f.texImage2D(
            f.TEXTURE_2D,
            0,
            f.RGBA,
            e,
            t,
            0,
            f.RGBA,
            f.UNSIGNED_BYTE,
            null
          ),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.LINEAR),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.LINEAR),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
          f.bindTexture(f.TEXTURE_2D, X),
          f.texImage2D(
            f.TEXTURE_2D,
            0,
            f.DEPTH_COMPONENT32F,
            e,
            t,
            0,
            f.DEPTH_COMPONENT,
            f.FLOAT,
            null
          ),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
          f.bindFramebuffer(f.FRAMEBUFFER, W),
          f.framebufferTexture2D(
            f.FRAMEBUFFER,
            f.COLOR_ATTACHMENT0,
            f.TEXTURE_2D,
            Y,
            0
          ),
          f.framebufferTexture2D(
            f.FRAMEBUFFER,
            f.DEPTH_ATTACHMENT,
            f.TEXTURE_2D,
            X,
            0
          );
      }),
      (this.initFrameBuffer = function () {
        if (Ce()) return;
        let e = _,
          t = T;
        f.enable(f.SCISSOR_TEST),
          f.scissor(0, 0, e, t),
          f.viewport(0, 0, e, t),
          (Y = f.createTexture()),
          (X = f.createTexture()),
          (W = f.createFramebuffer());
        var r = $3Dmol.ShaderLib.screen;
        (G = se(r.fragmentShader, r.vertexShader, r.uniforms, {})),
          (H = f.getAttribLocation(G, "vertexPosition"));
        (q = f.createBuffer()),
          f.bindBuffer(f.ARRAY_BUFFER, q),
          f.bufferData(
            f.ARRAY_BUFFER,
            new Float32Array([1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1]),
            f.STATIC_DRAW
          );
      }),
      (this.renderFrameBuffertoScreen = function () {
        Ce() ||
          null === W ||
          (this.setViewport(),
          f.bindFramebuffer(f.FRAMEBUFFER, null),
          f.clear(f.COLOR_BUFFER_BIT | f.DEPTH_BUFFER_BIT),
          f.frontFace(f.CCW),
          f.cullFace(f.BACK),
          f.useProgram(G),
          (x = G),
          this.setDepthTest(-1),
          this.setDepthWrite(-1),
          f.bindBuffer(f.ARRAY_BUFFER, q),
          f.enableVertexAttribArray(H),
          f.vertexAttribPointer(H, 2, f.FLOAT, !1, 0, 0),
          f.activeTexture(f.TEXTURE0),
          f.bindTexture(f.TEXTURE_2D, Y),
          f.drawArrays(f.TRIANGLES, 0, 6));
      }),
      (this.initWebGLObjects = function (e) {
        if (
          (e.__webglObjects ||
            ((e.__webglObjects = []),
            (e.__webglObjectsImmediate = []),
            (e.__webglSprites = []),
            (e.__webglFlares = [])),
          e.__objectsAdded.length)
        ) {
          for (; e.__objectsAdded.length; )
            de(e.__objectsAdded[0], e), e.__objectsAdded.splice(0, 1);
          w = -1;
        }
        for (; e.__objectsRemoved.length; )
          pe(e.__objectsRemoved[0], e), e.__objectsRemoved.splice(0, 1);
        for (var t = 0, r = e.__webglObjects.length; t < r; t++)
          he(e.__webglObjects[t].object);
      }),
      (this.getYRatio = function () {
        return void 0 !== this.rows && void 0 !== this.row ? this.rows : 1;
      }),
      (this.getXRatio = function () {
        return void 0 !== this.cols && void 0 !== this.col ? this.cols : 1;
      }),
      (this.getAspect = function (e, r) {
        (null != e && null != r) || ((e = t.width), (r = t.height));
        var n = e / r;
        null != this.rows &&
          null != this.cols &&
          null != this.row &&
          null != this.col &&
          (n = e / this.cols / (r / this.rows));
        return n;
      }),
      (this.setTexture = function (e, t, r) {
        if (e.needsUpdate) {
          e.__webglInit ||
            ((e.__webglInit = !0),
            e.addEventListener("dispose", ie),
            (e.__webglTexture = f.createTexture()),
            m.info.memory.textures++),
            f.activeTexture(f.TEXTURE0 + t);
          var n = r ? f.TEXTURE_3D : f.TEXTURE_2D;
          f.bindTexture(n, e.__webglTexture),
            f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL, e.flipY),
            f.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha),
            f.pixelStorei(f.UNPACK_ALIGNMENT, e.unpackAlignment),
            f.pixelStorei(f.PACK_ALIGNMENT, e.unpackAlignment);
          var i = De(e.format),
            o = De(e.type);
          if (r)
            we(f.TEXTURE_3D, e),
              f.texImage3D(
                f.TEXTURE_3D,
                0,
                f.R32F,
                e.image.size.z,
                e.image.size.y,
                e.image.size.x,
                0,
                f.RED,
                f.FLOAT,
                e.image.data
              );
          else {
            var a = e.image,
              s = a.width,
              l = a.height;
            void 0 === s && ((s = a.length), i == f.RGBA && (s /= 4), (l = 1)),
              we(f.TEXTURE_2D, e),
              Ce()
                ? f.texImage2D(f.TEXTURE_2D, 0, i, i, o, e.image)
                : f.texImage2D(f.TEXTURE_2D, 0, i, s, l, 0, i, o, e.image);
          }
          (e.needsUpdate = !1), e.onUpdate && e.onUpdate();
        } else
          f.activeTexture(f.TEXTURE0 + t),
            r
              ? f.bindTexture(f.TEXTURE_3D, e.__webglTexture)
              : f.bindTexture(f.TEXTURE_2D, e.__webglTexture);
      }),
      (this.supportsVolumetric = function () {
        return !Ce();
      }),
      j.init(this);
  }),
  ($3Dmol.Scene = function () {
    $3Dmol.Object3D.call(this),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.matrixAutoUpdate = !1),
      (this.__objects = []),
      (this.__lights = []),
      (this.__objectsAdded = []),
      (this.__objectsRemoved = []);
  }),
  ($3Dmol.Scene.prototype = Object.create($3Dmol.Object3D.prototype)),
  ($3Dmol.Scene.prototype.__addObject = function (e) {
    if (e instanceof $3Dmol.Light)
      -1 === this.__lights.indexOf(e) && this.__lights.push(e),
        e.target && void 0 === e.target.parent && this.add(e.target);
    else if (-1 === this.__objects.indexOf(e)) {
      this.__objects.push(e), this.__objectsAdded.push(e);
      var t = this.__objectsRemoved.indexOf(e);
      -1 !== t && this.__objectsRemoved.splice(t, 1);
    }
    for (var r = 0; r < e.children.length; r++) this.__addObject(e.children[r]);
  }),
  ($3Dmol.Scene.prototype.__removeObject = function (e) {
    var t;
    e instanceof $3Dmol.Light
      ? -1 !== (t = this.__lights.indexOf(e)) && this.__lights.splice(t, 1)
      : -1 !== (t = this.__objects.indexOf(e)) &&
        (this.__objects.splice(t, 1),
        this.__objectsRemoved.push(e),
        -1 !== this.__objectsAdded.indexOf(e) &&
          this.__objectsAdded.splice(t, 1));
    for (var r = 0; r < e.children.length; r++)
      this.__removeObject(e.children[r]);
  }),
  ($3Dmol.Fog = function (e, t, r) {
    (this.name = ""),
      (this.color = new $3Dmol.Color(e)),
      (this.near = void 0 !== t ? t : 1),
      (this.far = void 0 !== r ? r : 1e3);
  }),
  ($3Dmol.Fog.prototype.clone = function () {
    return new $3Dmol.Fog(this.color.getHex(), this.near, this.far);
  }),
  ($3Dmol.ShaderUtils = {
    clone: function (e) {
      var t,
        r = {};
      for (t in e) {
        (r[t] = {}), (r[t].type = e[t].type);
        var n = e[t].value;
        n instanceof $3Dmol.Color
          ? (r[t].value = n.clone())
          : "number" == typeof n
          ? (r[t].value = n)
          : n instanceof Array
          ? (r[t].value = [])
          : console.error(
              "Error copying shader uniforms from ShaderLib: unknown type for uniform"
            );
      }
      return r;
    },
    stickimposterFragmentShader: [
      "uniform float opacity;",
      "uniform mat4 projectionMatrix;",
      "uniform vec3 fogColor;",
      "uniform float fogNear;",
      "uniform float fogFar;",
      "varying vec3 vLight;",
      "varying vec3 vColor;",
      "varying vec3 cposition;",
      "varying vec3 p1;",
      "varying vec3 p2;",
      "varying float r;",
      "//DEFINEFRAGCOLOR",
      "void main() {",
      "    vec3 color = abs(vColor);",
      "    vec3 pos = cposition;",
      "    vec3 p = pos;",
      "    vec3 v = normalize(pos);",
      "    vec3 pa = p1;",
      "    vec3 va = normalize(p2-p1);",
      "    vec3 tmp1 = v-(dot(v,va)*va);",
      "    vec3 deltap = p-pa;",
      "    float A = dot(tmp1,tmp1);",
      "    if(A == 0.0) discard;",
      "    vec3 tmp2 = deltap-(dot(deltap,va)*va);",
      "    float B = 2.0*dot(tmp1, tmp2);",
      "    float C = dot(tmp2,tmp2)-r*r;",
      "    float det = (B*B) - (4.0*A*C);",
      "    if(det < 0.0) discard;",
      "    float sqrtDet = sqrt(det);",
      "    float posT = (-B+sqrtDet)/(2.0*A);",
      "    float negT = (-B-sqrtDet)/(2.0*A);",
      "    float intersectionT = min(posT,negT);",
      "    vec3 qi = p+v*intersectionT;",
      "    float dotp1 = dot(va,qi-p1);",
      "    float dotp2 = dot(va,qi-p2);",
      "    vec3 norm;",
      "    if( dotp1 < 0.0 || dotp2 > 0.0) {",
      "       vec3 cp;",
      "       if( dotp1 < 0.0) {        cp = p1;",
      "       } else {",
      "          cp = p2;",
      "       }",
      "       vec3 diff = p-cp;",
      "       A = dot(v,v);",
      "       B = dot(diff,v)*2.0;",
      "       C = dot(diff,diff)-r*r;",
      "       det = (B*B) - (4.0*C);",
      "       if(det < 0.0) discard;",
      "       sqrtDet = sqrt(det);",
      "       posT = (-B+sqrtDet)/(2.0);",
      "       negT = (-B-sqrtDet)/(2.0);",
      "       float t = min(posT,negT);",
      "       qi = p+v*t;",
      "       norm = normalize(qi-cp);",
      "    } else {",
      "       norm = normalize(qi-(dotp1*va + p1));",
      "    }",
      "    vec4 clipPos = projectionMatrix * vec4(qi, 1.0);",
      "    float ndcDepth = clipPos.z / clipPos.w;",
      "    float depth = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;",
      "    gl_FragDepthEXT = depth;",
    ].join("\n"),
  }),
  ($3Dmol.ShaderLib = {
    basic: {
      fragmentShader: [
        "uniform mat4 viewMatrix;",
        "uniform float opacity;",
        "uniform vec3 fogColor;",
        "uniform float fogNear;",
        "uniform float fogFar;",
        "varying vec3 vColor;",
        "//DEFINEFRAGCOLOR",
        "void main() {",
        "    gl_FragColor = vec4( vColor, opacity );",
        "    float depth = gl_FragCoord.z / gl_FragCoord.w;",
        "    float fogFactor = smoothstep( fogNear, fogFar, depth );",
        "    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "attribute vec3 position;",
        "attribute vec3 color;",
        "varying vec3 vColor;",
        "void main() {",
        "    vColor = color;",
        "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "    gl_Position = projectionMatrix * mvPosition;",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
      },
    },
    sphereimposter: {
      fragmentShader: [
        "uniform mat4 viewMatrix;",
        "uniform float opacity;",
        "uniform mat4 projectionMatrix;",
        "uniform vec3 fogColor;",
        "uniform float fogNear;",
        "uniform float fogFar;",
        "uniform float uDepth;",
        "uniform vec3 directionalLightColor[ 1 ];",
        "varying vec3 vColor;",
        "varying vec2 mapping;",
        "varying float rval;",
        "varying vec3 vLight;",
        "varying vec3 center;",
        "//DEFINEFRAGCOLOR",
        "void main() {",
        "    float lensqr = dot(mapping,mapping);",
        "    float rsqr = rval*rval;",
        "    if(lensqr > rsqr)",
        "       discard;",
        "    float z = sqrt(rsqr-lensqr);",
        "    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z);",
        "    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);",
        "    float ndcDepth = clipPos.z / clipPos.w;",
        "    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;",
        "    vec3 norm = normalize(vec3(mapping.x,mapping.y,z));",
        "    float dotProduct = dot( norm, vLight );",
        "    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );",
        "    vec3 vLight = directionalLightColor[ 0 ] * directionalLightWeighting;",
        "    gl_FragColor = vec4(vLight*vColor, opacity*opacity );",
        "    float fogFactor = smoothstep( fogNear, fogFar, gl_FragDepthEXT/gl_FragCoord.w );",
        "    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 directionalLightColor[ 1 ];",
        "uniform vec3 directionalLightDirection[ 1 ];",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec3 color;",
        "varying vec2 mapping;",
        "varying vec3 vColor;",
        "varying float rval;",
        "varying vec3 vLight;",
        "varying vec3 center;",
        "void main() {",
        "    vColor = color;",
        "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "    center = mvPosition.xyz;",
        "    vec4 projPosition = projectionMatrix * mvPosition;",
        "    vec4 adjust = projectionMatrix* vec4(normal,0.0); adjust.z = 0.0; adjust.w = 0.0;",
        "    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );",
        "    vLight = normalize( lDirection.xyz );",
        "    mapping = normal.xy;",
        "    rval = abs(normal.x);",
        "    gl_Position = projPosition+adjust;",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        directionalLightColor: { type: "fv", value: [] },
        directionalLightDirection: { type: "fv", value: [] },
      },
    },
    lambert: {
      fragmentShader: [
        "uniform mat4 viewMatrix;",
        "uniform float opacity;",
        "uniform vec3 fogColor;",
        "uniform float fogNear;",
        "uniform float fogFar;",
        "varying vec3 vLightFront;",
        "varying vec3 vColor;",
        "//DEFINEFRAGCOLOR",
        "void main() {",
        "    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );",
        "    #ifndef WIREFRAME",
        "    gl_FragColor.xyz *= vLightFront;",
        "    #endif",
        "    gl_FragColor = gl_FragColor * vec4( vColor, opacity );",
        "    float depth = gl_FragCoord.z / gl_FragCoord.w;",
        "    float fogFactor = smoothstep( fogNear, fogFar, depth );",
        "    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 directionalLightColor[ 1 ];",
        "uniform vec3 directionalLightDirection[ 1 ];",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec3 color;",
        "varying vec3 vColor;",
        "varying vec3 vLightFront;",
        "void main() {",
        "    vColor = color;",
        "    vec3 objectNormal = normal;",
        "    vec3 transformedNormal = normalMatrix * objectNormal;",
        "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "    vLightFront = vec3( 0.0 );",
        "    transformedNormal = normalize( transformedNormal );",
        "    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );",
        "    vec3 dirVector = normalize( lDirection.xyz );",
        "    float dotProduct = dot( transformedNormal, dirVector );",
        "    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );",
        "    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;",
        "    gl_Position = projectionMatrix * mvPosition;",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        directionalLightColor: { type: "fv", value: [] },
        directionalLightDirection: { type: "fv", value: [] },
      },
    },
    instanced: {
      fragmentShader: [
        "uniform mat4 viewMatrix;",
        "uniform float opacity;",
        "uniform vec3 fogColor;",
        "uniform float fogNear;",
        "uniform float fogFar;",
        "varying vec3 vLightFront;",
        "varying vec3 vColor;",
        "//DEFINEFRAGCOLOR",
        "void main() {",
        "    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );",
        "    #ifndef WIREFRAME",
        "    gl_FragColor.xyz *= vLightFront;",
        "    #endif",
        "    gl_FragColor = gl_FragColor * vec4( vColor, opacity );",
        "    float depth = gl_FragCoord.z / gl_FragCoord.w;",
        "    float fogFactor = smoothstep( fogNear, fogFar, depth );",
        "    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 directionalLightColor[ 1 ];",
        "uniform vec3 directionalLightDirection[ 1 ];",
        "attribute vec3 offset;",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec3 color;",
        "attribute float radius;",
        "varying vec3 vColor;",
        "varying vec3 vLightFront;",
        "void main() {",
        "    vColor = color;",
        "    vec3 objectNormal = normal;",
        "    vec3 transformedNormal = normalMatrix * objectNormal;",
        "    vec4 mvPosition = modelViewMatrix * vec4( position * radius + offset, 1.0 );",
        "    vLightFront = vec3( 0.0 );",
        "    transformedNormal = normalize( transformedNormal );",
        "    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );",
        "    vec3 dirVector = normalize( lDirection.xyz );",
        "    float dotProduct = dot( transformedNormal, dirVector );",
        "    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );",
        "    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;",
        "    gl_Position = projectionMatrix * mvPosition;",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        directionalLightColor: { type: "fv", value: [] },
        directionalLightDirection: { type: "fv", value: [] },
      },
    },
    outline: {
      fragmentShader: [
        "uniform float opacity;",
        "uniform vec3 outlineColor;",
        "uniform vec3 fogColor;",
        "uniform float fogNear;",
        "uniform float fogFar;",
        "//DEFINEFRAGCOLOR",
        "void main() {",
        "    gl_FragColor = vec4( outlineColor, 1 );",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform float outlineWidth;",
        "uniform float outlinePushback;",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec3 color;",
        "void main() {",
        "    vec4 norm = modelViewMatrix*vec4(normalize(normal),0.0);",
        "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "    mvPosition.xy += norm.xy*outlineWidth;",
        "    gl_Position = projectionMatrix * mvPosition;",
        "    mvPosition.z -= outlinePushback;",
        "    vec4 pushpos = projectionMatrix*mvPosition;",
        "    gl_Position.z = gl_Position.w*pushpos.z/pushpos.w;",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        outlineColor: { type: "c", value: new $3Dmol.Color(0, 0, 0) },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        outlineWidth: { type: "f", value: 0.1 },
        outlinePushback: { type: "f", value: 1 },
      },
    },
    sphereimposteroutline: {
      fragmentShader: [
        "uniform float opacity;",
        "uniform vec3 outlineColor;",
        "uniform vec3 fogColor;",
        "uniform float fogNear;",
        "uniform float fogFar;",
        "uniform mat4 projectionMatrix;",
        "varying vec2 mapping;",
        "varying float rval;",
        "varying vec3 center;",
        "uniform float outlinePushback;",
        "//DEFINEFRAGCOLOR",
        "void main() {",
        "    float lensqr = dot(mapping,mapping);",
        "    float rsqr = rval*rval;",
        "    if(lensqr > rsqr)",
        "       discard;",
        "    float z = sqrt(rsqr-lensqr);",
        "    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z-outlinePushback);",
        "    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);",
        "    float ndcDepth = clipPos.z / clipPos.w;",
        "    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;",
        "    gl_FragColor = vec4(outlineColor, 1 );",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform float outlineWidth;",
        "uniform float outlinePushback;",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec3 color;",
        "varying vec2 mapping;",
        "varying float rval;",
        "varying vec3 center;",
        "void main() {",
        "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "    center = mvPosition.xyz;",
        "    vec4 projPosition = projectionMatrix * mvPosition;",
        "    vec2 norm = normal.xy + vec2(sign(normal.x)*outlineWidth,sign(normal.y)*outlineWidth);",
        "    vec4 adjust = projectionMatrix* vec4(norm,normal.z,0.0); adjust.z = 0.0; adjust.w = 0.0;",
        "    mapping = norm.xy;",
        "    rval = abs(norm.x);",
        "    gl_Position = projPosition+adjust;",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        outlineColor: { type: "c", value: new $3Dmol.Color(0, 0, 0) },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        outlineWidth: { type: "f", value: 0.1 },
        outlinePushback: { type: "f", value: 1 },
      },
    },
    stickimposter: {
      fragmentShader: [
        $3Dmol.ShaderUtils.stickimposterFragmentShader,
        "    float dotProduct = dot( norm, vLight );",
        "    vec3 light = vec3( max( dotProduct, 0.0 ) );",
        "    gl_FragColor = vec4(light*color, opacity*opacity );",
        "    float fogFactor = smoothstep( fogNear, fogFar, depth );",
        "    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 directionalLightColor[ 1 ];",
        "uniform vec3 directionalLightDirection[ 1 ];",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec3 color;",
        "attribute float radius;",
        "varying vec3 vColor;",
        "varying vec3 vLight;",
        "varying vec3 cposition;",
        "varying vec3 p1;",
        "varying vec3 p2;",
        "varying float r;",
        "void main() {",
        "    vColor = color; vColor.z = abs(vColor.z);",
        "    r = abs(radius);",
        "    vec4 to = modelViewMatrix*vec4(normal, 1.0);",
        "    vec4 pt = modelViewMatrix*vec4(position, 1.0);",
        "    vec4 mvPosition = pt;",
        "    p1 = pt.xyz; p2 = to.xyz;",
        "    vec3 norm = to.xyz-pt.xyz;",
        "    float mult = 1.1;",
        "    if(length(p1) > length(p2)) {",
        "       mvPosition = to;",
        "    }",
        "    vec3 n = normalize(mvPosition.xyz);",
        "    if(color.z >= 0.0) {",
        "       vec3 pnorm = normalize(p1);",
        "       float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);",
        "       mvPosition.xyz = p1+t*pnorm;",
        "    } else {",
        "       vec3 pnorm = normalize(p2);",
        "       float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);",
        "       mvPosition.xyz = p2+t*pnorm;",
        "       mult *= -1.0;",
        "    }",
        "    vec3 cr = normalize(cross(mvPosition.xyz,norm))*radius;",
        "    vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*radius;",
        "    mvPosition.xy +=  mult*(cr + doublecr).xy;",
        "    cposition = mvPosition.xyz;",
        "    gl_Position = projectionMatrix * mvPosition;",
        "    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );",
        "    vLight = normalize( lDirection.xyz )*directionalLightColor[0];",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        directionalLightColor: { type: "fv", value: [] },
        directionalLightDirection: { type: "fv", value: [] },
      },
    },
    stickimposteroutline: {
      fragmentShader:
        $3Dmol.ShaderUtils.stickimposterFragmentShader +
        "gl_FragColor = vec4(color,1.0);}",
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 directionalLightColor[ 1 ];",
        "uniform vec3 directionalLightDirection[ 1 ];",
        "uniform vec3 outlineColor;",
        "uniform float outlineWidth;",
        "uniform float outlinePushback;",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec3 color;",
        "attribute float radius;",
        "varying vec3 vColor;",
        "varying vec3 vLight;",
        "varying vec3 cposition;",
        "varying vec3 p1;",
        "varying vec3 p2;",
        "varying float r;",
        "void main() {",
        "    vColor = outlineColor;",
        "    float rad = radius+sign(radius)*outlineWidth;",
        "    r = abs(rad);",
        "    vec4 to = modelViewMatrix*vec4(normal, 1.0);",
        "    vec4 pt = modelViewMatrix*vec4(position, 1.0);",
        "    to.xyz += normalize(to.xyz)*outlinePushback;",
        "    pt.xyz += normalize(pt.xyz)*outlinePushback;",
        "    vec4 mvPosition = pt;",
        "    p1 = pt.xyz; p2 = to.xyz;",
        "    vec3 norm = to.xyz-pt.xyz;",
        "    float mult = 1.1;",
        "    if(length(p1) > length(p2)) {",
        "       mvPosition = to;",
        "    }",
        "    vec3 n = normalize(mvPosition.xyz);",
        "    if(color.z >= 0.0) {",
        "       vec3 pnorm = normalize(p1);",
        "       float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);",
        "       mvPosition.xyz = p1+t*pnorm;",
        "    } else {",
        "       vec3 pnorm = normalize(p2);",
        "       float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);",
        "       mvPosition.xyz = p2+t*pnorm;",
        "       mult *= -1.0;",
        "    }",
        "    vec3 cr = normalize(cross(mvPosition.xyz,norm))*rad;",
        "    vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*rad;",
        "    mvPosition.xy +=  mult*(cr + doublecr).xy;",
        "    cposition = mvPosition.xyz;",
        "    gl_Position = projectionMatrix * mvPosition;",
        "    vLight = vec3(1.0,1.0,1.0);",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        outlineColor: { type: "c", value: new $3Dmol.Color(0, 0, 0) },
        outlineWidth: { type: "f", value: 0.1 },
        outlinePushback: { type: "f", value: 1 },
      },
    },
    lambertdouble: {
      fragmentShader: [
        "uniform mat4 viewMatrix;",
        "uniform float opacity;",
        "uniform vec3 fogColor;",
        "uniform float fogNear;",
        "uniform float fogFar;",
        "varying vec3 vLightFront;",
        "varying vec3 vLightBack;",
        "varying vec3 vColor;",
        "//DEFINEFRAGCOLOR",
        "void main() {",
        "    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );",
        "    #ifndef WIREFRAME",
        "    if ( gl_FrontFacing )",
        "       gl_FragColor.xyz *= vLightFront;",
        "    else",
        "       gl_FragColor.xyz *= vLightBack;",
        "    #endif",
        "    gl_FragColor = gl_FragColor * vec4( vColor, opacity );",
        "    float depth = gl_FragCoord.z / gl_FragCoord.w;",
        "    float fogFactor = smoothstep( fogNear, fogFar, depth );",
        "    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 directionalLightColor[ 1 ];",
        "uniform vec3 directionalLightDirection[ 1 ];",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec3 color;",
        "varying vec3 vColor;",
        "varying vec3 vLightFront;",
        "varying vec3 vLightBack;",
        "void main() {",
        "    vColor = color;",
        "    vec3 objectNormal = normal;",
        "    vec3 transformedNormal = normalMatrix * objectNormal;",
        "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "    vLightFront = vec3( 0.0 );",
        "    vLightBack = vec3( 0.0 );",
        "    transformedNormal = normalize( transformedNormal );",
        "    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );",
        "    vec3 dirVector = normalize( lDirection.xyz );",
        "    float dotProduct = dot( transformedNormal, dirVector );",
        "    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );",
        "    vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );",
        "    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;",
        "    vLightBack += directionalLightColor[ 0 ] * directionalLightWeightingBack;",
        "    gl_Position = projectionMatrix * mvPosition;",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        directionalLightColor: { type: "fv", value: [] },
        directionalLightDirection: { type: "fv", value: [] },
      },
    },
    sprite: {
      fragmentShader: [
        "uniform vec3 color;",
        "uniform sampler2D map;",
        "uniform float opacity;",
        "uniform int fogType;",
        "uniform vec3 fogColor;",
        "uniform float fogDensity;",
        "uniform float fogNear;",
        "uniform float fogFar;",
        "uniform float alphaTest;",
        "varying vec2 vUV;",
        "//DEFINEFRAGCOLOR",
        "void main() {",
        "    vec4 texture = texture2D(map, vUV);",
        "    if (texture.a < alphaTest) discard;",
        "    gl_FragColor = vec4(color * texture.xyz, texture.a * opacity);",
        "    if (fogType > 0) {",
        "        float depth = gl_FragCoord.z / gl_FragCoord.w;",
        "        float fogFactor = 0.0;",
        "        if (fogType == 1) {",
        "            fogFactor = smoothstep(fogNear, fogFar, depth);",
        "        }",
        "        else {",
        "            const float LOG2 = 1.442695;",
        "            float fogFactor = exp2(- fogDensity * fogDensity * depth * depth * LOG2);",
        "            fogFactor = 1.0 - clamp(fogFactor, 0.0, 1.0);",
        "        }",
        "        gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);",
        "    }",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform int useScreenCoordinates;",
        "uniform vec3 screenPosition;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform float rotation;",
        "uniform vec2 scale;",
        "uniform vec2 alignment;",
        "uniform vec2 uvOffset;",
        "uniform vec2 uvScale;",
        "attribute vec2 position;",
        "attribute vec2 uv;",
        "varying vec2 vUV;",
        "void main() {",
        "    vUV = uvOffset + uv * uvScale;",
        "    vec2 alignedPosition = position + alignment;",
        "    vec2 rotatedPosition;",
        "    rotatedPosition.x = ( cos(rotation) * alignedPosition.x - sin(rotation) * alignedPosition.y ) * scale.x;",
        "    rotatedPosition.y = ( sin(rotation) * alignedPosition.x + cos(rotation) * alignedPosition.y ) * scale.y;",
        "    vec4 finalPosition;",
        "    if(useScreenCoordinates != 0) {",
        "        finalPosition = vec4(screenPosition.xy + rotatedPosition, screenPosition.z, 1.0);",
        "    }",
        "    else {",
        "        finalPosition = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); finalPosition /= finalPosition.w;",
        "        finalPosition.xy += rotatedPosition; ",
        "    }",
        "    gl_Position = finalPosition;",
        "}",
      ].join("\n"),
      uniforms: {},
    },
    volumetric: {
      fragmentShader: [
        "uniform highp sampler3D data;",
        "uniform highp sampler2D colormap;",
        "uniform highp sampler2D depthmap;",
        "uniform mat4 textmat;",
        "uniform mat4 projinv;",
        "uniform mat4 projectionMatrix;",
        "uniform float step;",
        "uniform float subsamples;",
        "uniform float maxdepth;",
        "uniform float transfermin;",
        "uniform float transfermax;",
        "in  vec4 mvPosition;",
        "out vec4 color;",
        "void main(void) {",
        "   vec4 pos = mvPosition;",
        "   bool seengood = false;",
        "   float i = 0.0;",
        "   color = vec4(1,1,1,0);",
        "   float increment = 1.0/subsamples;",
        "   float maxsteps = (maxdepth*subsamples/step);",
        "   vec4 maxpos = vec4(pos.x,pos.y,pos.z-maxdepth,1.0);",
        "   maxpos = projectionMatrix*maxpos;",
        "   vec4 startp = projectionMatrix*pos;",
        "   maxpos /= maxpos.w;",
        "   startp /= startp.w;",
        "   maxpos = vec4(startp.x,startp.y,maxpos.z,1.0);",
        "   maxpos = projinv*maxpos;",
        "   maxpos /= maxpos.w;",
        "   float incr = step/subsamples;",
        "   vec2 tpos = startp.xy/2.0+0.5;",
        "   float depth = texture(depthmap, tpos).r;",
        "   vec4 direction = maxpos-pos;",
        "   for( i = 0.0; i <= maxsteps; i++) {",
        "      vec4 pt = (pos+(i/maxsteps)*direction);",
        "      vec4 ppt = projectionMatrix*pt;",
        "      float ptdepth = ppt.z/ppt.w;",
        "      ptdepth = ((gl_DepthRange.diff * ptdepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;",
        "      if(ptdepth > depth) break;",
        "      pt = textmat*pt;",
        "      if(pt.x >= -0.01 && pt.y >= -0.01 && pt.z >= -0.01 && pt.x <= 1.01 && pt.y <= 1.01 && pt.z <= 1.01) {",
        "         seengood = true;",
        "      } else if(seengood) {",
        "         break;",
        "      }",
        "      if( pt.x < -0.01 || pt.x > 1.01 || pt.y < -0.01 || pt.y > 1.01 || pt.z < -0.01 || pt.z > 1.01  ){",
        "          color.a = 0.0;",
        "          continue;",
        "      }",
        "      else {",
        "         float val = texture(data, pt.zyx).r;",
        "         if(isinf(val)) continue;",
        "         float cval = (val-transfermin)/(transfermax-transfermin);",
        "         vec4 val_color = texture(colormap, vec2(cval,0.5));",
        "         color.rgb = color.rgb*color.a + (1.0-color.a)*val_color.a*val_color.rgb;",
        "         color.a += (1.0 - color.a) * val_color.a; ",
        "         if(color.a > 0.0) color.rgb /= color.a;",
        "      }",
        "    }",
        "}",
      ].join("\n"),
      vertexShader: [
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "in vec3 position;",
        "out vec4 mvPosition;",
        "void main() {",
        "    mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "    gl_Position = projectionMatrix*mvPosition;",
        "}",
      ].join("\n"),
      uniforms: {
        opacity: { type: "f", value: 1 },
        fogColor: { type: "c", value: new $3Dmol.Color(1, 1, 1) },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        data: { type: "i", value: 3 },
        colormap: { type: "i", value: 4 },
        depthmap: { type: "i", value: 5 },
        step: { type: "f", value: 1 },
        maxdepth: { type: "f", value: 100 },
        subsamples: { type: "f", value: 5 },
        textmat: { type: "mat4", value: [] },
        projinv: { type: "mat4", value: [] },
        transfermin: { type: "f", value: -0.2 },
        transfermax: { type: "f", value: 0.2 },
      },
    },
    screen: {
      fragmentShader: [
        "uniform sampler2D colormap;",
        "varying highp vec2 vTexCoords;",
        "uniform vec2 dimensions;",
        "//DEFINEFRAGCOLOR",
        "void main (void) {",
        "   gl_FragColor = texture2D(colormap, vTexCoords);",
        "}",
      ].join("\n"),
      vertexShader: [
        "attribute vec2 vertexPosition;",
        "varying highp vec2 vTexCoords;",
        "const vec2 scale = vec2(0.5, 0.5);",
        "void main() {",
        "   vTexCoords  = vertexPosition * scale + scale; // scale vertex attribute to [0,1] range",
        "   gl_Position = vec4(vertexPosition, 0.0, 1.0);",
        "}",
      ].join("\n"),
      uniforms: {},
    },
    screenaa: {
      fragmentShader: [
        "uniform sampler2D colormap;",
        "varying highp vec2 vTexCoords;",
        "uniform vec2 dimensions;",
        "// Basic FXAA implementation based on the code on geeks3d.com ",
        "#define FXAA_REDUCE_MIN   (1.0/ 128.0)",
        "#define FXAA_REDUCE_MUL   (1.0 / 8.0)",
        "#define FXAA_SPAN_MAX     8.0",
        "vec4 applyFXAA(vec2 fragCoord, sampler2D tex)",
        "{",
        "    vec4 color;",
        "    vec2 inverseVP = vec2(1.0 / dimensions.x, 1.0 / dimensions.y);",
        "    vec3 rgbNW = texture2D(tex, fragCoord + vec2(-1.0, -1.0) * inverseVP).xyz;",
        "    vec3 rgbNE = texture2D(tex, fragCoord + vec2(1.0, -1.0) * inverseVP).xyz;",
        "    vec3 rgbSW = texture2D(tex, fragCoord + vec2(-1.0, 1.0) * inverseVP).xyz;",
        "    vec3 rgbSE = texture2D(tex, fragCoord + vec2(1.0, 1.0) * inverseVP).xyz;",
        "    vec3 rgbM  = texture2D(tex, fragCoord  * inverseVP).xyz;",
        "    vec3 luma = vec3(0.299, 0.587, 0.114);",
        "    float lumaNW = dot(rgbNW, luma);",
        "    float lumaNE = dot(rgbNE, luma);",
        "    float lumaSW = dot(rgbSW, luma);",
        "    float lumaSE = dot(rgbSE, luma);",
        "    float lumaM  = dot(rgbM,  luma);",
        "    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));",
        "    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));",
        "    vec2 dir;",
        "    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));",
        "    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));",
        "    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *",
        "                        (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);",
        "    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);",
        "    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),",
        "            max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),",
        "            dir * rcpDirMin)) * inverseVP;",
        "    vec3 rgbA = 0.5 * (",
        "        texture2D(tex, fragCoord + dir * (1.0 / 3.0 - 0.5)).xyz +",
        "        texture2D(tex, fragCoord  + dir * (2.0 / 3.0 - 0.5)).xyz);",
        "    vec3 rgbB = rgbA * 0.5 + 0.25 * (",
        "        texture2D(tex, fragCoord  + dir * -0.5).xyz +",
        "        texture2D(tex, fragCoord  + dir * 0.5).xyz);",
        "    float lumaB = dot(rgbB, luma);",
        "    if ((lumaB < lumaMin) || (lumaB > lumaMax))",
        "        color = vec4(rgbA, 1.0);",
        "    else",
        "        color = vec4(rgbB, 1.0);",
        "    return color;",
        "}",
        "//DEFINEFRAGCOLOR",
        "void main (void) {",
        "   gl_FragColor = applyFXAA(vTexCoords, colormap);",
        "}",
      ].join("\n"),
      vertexShader: [
        "attribute vec2 vertexPosition;",
        "varying highp vec2 vTexCoords;",
        "const vec2 scale = vec2(0.5, 0.5);",
        "void main() {",
        "   vTexCoords  = vertexPosition * scale + scale; // scale vertex attribute to [0,1] range",
        "   gl_Position = vec4(vertexPosition, 0.0, 1.0);",
        "}",
      ].join("\n"),
      uniforms: {},
    },
  }),
  "undefined" == typeof console && (console = { log: function () {} }),
  ($3Dmol.ProteinSurface = function () {
    var e,
      t,
      r = 0,
      n = 0,
      i = 0,
      o = 2,
      a = 0,
      s = 0,
      l = 0,
      c = 0,
      u = null,
      d = null,
      h = null,
      p = 0,
      f = 0,
      m = 0,
      g = 0,
      v = 0,
      y = 0,
      x = {
        H: 1.2,
        Li: 1.82,
        Na: 2.27,
        K: 2.75,
        C: 1.7,
        N: 1.55,
        O: 1.52,
        F: 1.47,
        P: 1.8,
        S: 1.8,
        CL: 1.75,
        BR: 1.85,
        SE: 1.9,
        ZN: 1.39,
        CU: 1.4,
        NI: 1.63,
        X: 2,
      },
      b = function (e) {
        return e.elem && void 0 !== x[e.elem] ? e.elem : "X";
      },
      w = {},
      D = {},
      C = [
        new Int32Array([1, 0, 0]),
        new Int32Array([-1, 0, 0]),
        new Int32Array([0, 1, 0]),
        new Int32Array([0, -1, 0]),
        new Int32Array([0, 0, 1]),
        new Int32Array([0, 0, -1]),
        new Int32Array([1, 1, 0]),
        new Int32Array([1, -1, 0]),
        new Int32Array([-1, 1, 0]),
        new Int32Array([-1, -1, 0]),
        new Int32Array([1, 0, 1]),
        new Int32Array([1, 0, -1]),
        new Int32Array([-1, 0, 1]),
        new Int32Array([-1, 0, -1]),
        new Int32Array([0, 1, 1]),
        new Int32Array([0, 1, -1]),
        new Int32Array([0, -1, 1]),
        new Int32Array([0, -1, -1]),
        new Int32Array([1, 1, 1]),
        new Int32Array([1, 1, -1]),
        new Int32Array([1, -1, 1]),
        new Int32Array([-1, 1, 1]),
        new Int32Array([1, -1, -1]),
        new Int32Array([-1, -1, 1]),
        new Int32Array([-1, 1, -1]),
        new Int32Array([-1, -1, -1]),
      ];
    (this.getFacesAndVertices = function (a) {
      var s = {};
      for (let e = 0, t = a.length; e < t; e++) s[a[e]] = !0;
      var l = t;
      for (let e = 0, t = l.length; e < t; e++)
        (l[e].x = l[e].x / o - r),
          (l[e].y = l[e].y / o - n),
          (l[e].z = l[e].z / o - i);
      var c = [];
      for (let t = 0, r = e.length; t < r; t += 3) {
        var p = e[t],
          f = e[t + 1],
          m = e[t + 2],
          g = l[p].atomid,
          v = l[f].atomid,
          y = l[m].atomid,
          x = g;
        v < x && (x = v),
          y < x && (x = y),
          s[x] &&
            p !== f &&
            f !== m &&
            p !== m &&
            (c.push(p), c.push(f), c.push(m));
      }
      return (u = null), (d = null), (h = null), { vertices: l, faces: c };
    }),
      (this.initparm = function (e, t, x) {
        x > 1e6 && (o = 1);
        var b = (1 / o) * 5.5;
        (p = e[0][0]),
          (g = e[1][0]),
          (f = e[0][1]),
          (v = e[1][1]),
          (m = e[0][2]),
          (y = e[1][2]),
          t
            ? ((p -= 1.4 + b),
              (f -= 1.4 + b),
              (m -= 1.4 + b),
              (g += 1.4 + b),
              (v += 1.4 + b),
              (y += 1.4 + b))
            : ((p -= b), (f -= b), (m -= b), (g += b), (v += b), (y += b)),
          (p = Math.floor(p * o) / o),
          (f = Math.floor(f * o) / o),
          (m = Math.floor(m * o) / o),
          (g = Math.ceil(g * o) / o),
          (v = Math.ceil(v * o) / o),
          (y = Math.ceil(y * o) / o),
          (r = -p),
          (n = -f),
          (i = -m),
          (l = Math.ceil(o * (g - p)) + 1),
          (s = Math.ceil(o * (v - f)) + 1),
          (a = Math.ceil(o * (y - m)) + 1),
          this.boundingatom(t),
          (c = 1.4 * o),
          (u = new Uint8Array(l * s * a)),
          (d = new Float64Array(l * s * a)),
          (h = new Int32Array(l * s * a));
      }),
      (this.boundingatom = function (e) {
        var t,
          r,
          n,
          i = [];
        for (var a in x)
          if (x.hasOwnProperty(a)) {
            var s = x[a];
            (i[a] = e ? (s + 1.4) * o + 0.5 : s * o + 0.5),
              (n = i[a] * i[a]),
              (D[a] = Math.floor(i[a]) + 1),
              (w[a] = new Int32Array(D[a] * D[a]));
            var l = 0;
            for (let e = 0; e < D[a]; e++)
              for (let i = 0; i < D[a]; i++)
                (t = e * e + i * i) > n
                  ? (w[a][l] = -1)
                  : ((r = Math.sqrt(n - t)), (w[a][l] = Math.floor(r))),
                  l++;
          }
      }),
      (this.fillvoxels = function (e, t) {
        for (let e = 0, t = u.length; e < t; e++)
          (u[e] = 0), (d[e] = -1), (h[e] = -1);
        for (let n in t) {
          var r = e[t[n]];
          void 0 !== r && this.fillAtom(r, e);
        }
        for (let e = 0, t = u.length; e < t; e++) 1 & u[e] && (u[e] |= 2);
      }),
      (this.fillAtom = function (e, t) {
        var c, d, p, f, m, g, v, y, x, C, S, A, $, M, k, z, _, T, L;
        (c = Math.floor(0.5 + o * (e.x + r))),
          (d = Math.floor(0.5 + o * (e.y + n))),
          (p = Math.floor(0.5 + o * (e.z + i)));
        var E = b(e),
          I = 0,
          F = s * a;
        for (C = 0, L = D[E]; C < L; C++)
          for (S = 0; S < L; S++) {
            if (-1 != w[E][I])
              for (z = -1; z < 2; z++)
                for (_ = -1; _ < 2; _++)
                  for (T = -1; T < 2; T++)
                    if (0 !== z && 0 !== _ && 0 !== T)
                      for (v = z * C, x = T * S, A = 0; A <= w[E][I]; A++)
                        if (
                          ((M = d + (y = A * _)),
                          (k = p + x),
                          !(
                            ($ = c + v) < 0 ||
                            M < 0 ||
                            k < 0 ||
                            $ >= l ||
                            M >= s ||
                            k >= a
                          ))
                        ) {
                          var O = $ * F + M * a + k;
                          if (1 & u[O]) {
                            var R = t[h[O]];
                            R.serial != e.serial &&
                              v * v + y * y + x * x <
                                (f = c + v - Math.floor(0.5 + o * (R.x + r))) *
                                  f +
                                  (m =
                                    d + y - Math.floor(0.5 + o * (R.y + n))) *
                                    m +
                                  (g =
                                    p + x - Math.floor(0.5 + o * (R.z + i))) *
                                    g &&
                              (h[O] = e.serial);
                          } else (u[O] |= 1), (h[O] = e.serial);
                        }
            I++;
          }
      }),
      (this.fillvoxelswaals = function (e, t) {
        for (let e = 0, t = u.length; e < t; e++) u[e] &= -3;
        for (let r in t) {
          let n = e[t[r]];
          void 0 !== n && this.fillAtomWaals(n, e);
        }
      }),
      (this.fillAtomWaals = function (e, t) {
        var c,
          d,
          p,
          f,
          m,
          g,
          v,
          y,
          x,
          C,
          S,
          A,
          $,
          M,
          k,
          z,
          _,
          T,
          L,
          E = 0;
        (c = Math.floor(0.5 + o * (e.x + r))),
          (d = Math.floor(0.5 + o * (e.y + n))),
          (p = Math.floor(0.5 + o * (e.z + i)));
        var I = b(e),
          F = s * a;
        for ($ = 0, L = D[I]; $ < L; $++)
          for (M = 0; M < L; M++) {
            if (-1 != w[I][E])
              for (z = -1; z < 2; z++)
                for (_ = -1; _ < 2; _++)
                  for (T = -1; T < 2; T++)
                    if (0 !== z && 0 !== _ && 0 !== T)
                      for (v = z * $, x = T * M, k = 0; k <= w[I][E]; k++)
                        if (
                          ((S = d + (y = k * _)),
                          (A = p + x),
                          !(
                            (C = c + v) < 0 ||
                            S < 0 ||
                            A < 0 ||
                            C >= l ||
                            S >= s ||
                            A >= a
                          ))
                        ) {
                          var O = C * F + S * a + A;
                          if (2 & u[O]) {
                            var R = t[h[O]];
                            R.serial != e.serial &&
                              v * v + y * y + x * x <
                                (f = c + v - Math.floor(0.5 + o * (R.x + r))) *
                                  f +
                                  (m =
                                    d + y - Math.floor(0.5 + o * (R.y + n))) *
                                    m +
                                  (g =
                                    p + x - Math.floor(0.5 + o * (R.z + i))) *
                                    g &&
                              (h[O] = e.serial);
                          } else (u[O] |= 2), (h[O] = e.serial);
                        }
            E++;
          }
      }),
      (this.buildboundary = function () {
        var e = s * a;
        for (let c = 0; c < l; c++)
          for (let d = 0; d < a; d++)
            for (let h = 0; h < s; h++) {
              var t = c * e + h * a + d;
              if (1 & u[t])
                for (var r = 0; r < 26; ) {
                  var n = c + C[r][0],
                    i = d + C[r][2],
                    o = h + C[r][1];
                  if (
                    n > -1 &&
                    n < l &&
                    o > -1 &&
                    o < s &&
                    i > -1 &&
                    i < a &&
                    !(1 & u[n * e + o * a + i])
                  ) {
                    u[t] |= 4;
                    break;
                  }
                  r++;
                }
            }
      });
    var S = function (e, t, r) {
      var n = new Int32Array(e * t * r * 3);
      (this.set = function (e, i, o, a) {
        var s = 3 * ((e * t + i) * r + o);
        (n[s] = a.ix), (n[s + 1] = a.iy), (n[s + 2] = a.iz);
      }),
        (this.get = function (e, i, o) {
          var a = 3 * ((e * t + i) * r + o);
          return { ix: n[a], iy: n[a + 1], iz: n[a + 2] };
        });
    };
    (this.fastdistancemap = function () {
      var e,
        t,
        r,
        n,
        i,
        h = new S(l, s, a),
        p = s * a,
        f = c * c,
        m = [],
        g = [];
      for (e = 0; e < l; e++)
        for (t = 0; t < s; t++)
          for (r = 0; r < a; r++)
            if (((u[(i = e * p + t * a + r)] &= -3), 1 & u[i] && 4 & u[i])) {
              var v = { ix: e, iy: t, iz: r };
              h.set(e, t, r, v),
                m.push(v),
                (d[i] = 0),
                (u[i] |= 2),
                (u[i] &= -5);
            }
      do {
        for (
          g = this.fastoneshell(m, h), m = [], e = 0, n = g.length;
          e < n;
          e++
        )
          (i = p * g[e].ix + a * g[e].iy + g[e].iz),
            (u[i] &= -5),
            d[i] <= 1.0404 * f &&
              m.push({ ix: g[e].ix, iy: g[e].iy, iz: g[e].iz });
      } while (0 !== m.length);
      (m = []), (g = []), (h = null);
      var y = o - 0.5;
      y < 0 && (y = 0);
      var x = f - 0.5 / (0.1 + y);
      for (e = 0; e < l; e++)
        for (t = 0; t < s; t++)
          for (r = 0; r < a; r++)
            (u[(i = e * p + t * a + r)] &= -5),
              1 & u[i] &&
                ((2 & u[i] && !(2 & u[i] && d[i] >= x)) || (u[i] |= 4));
    }),
      (this.fastoneshell = function (e, t) {
        var r,
          n,
          i,
          o,
          c,
          h,
          p,
          f,
          m,
          g,
          v,
          y,
          x = [];
        if (0 === e.length) return x;
        var b = { ix: -1, iy: -1, iz: -1 },
          w = s * a;
        for (p = 0, m = e.length; p < m; p++)
          for (
            r = e[p].ix, n = e[p].iy, i = e[p].iz, v = t.get(r, n, i), f = 0;
            f < 6;
            f++
          )
            (b.ix = r + C[f][0]),
              (b.iy = n + C[f][1]),
              (b.iz = i + C[f][2]),
              b.ix < l &&
                b.ix > -1 &&
                b.iy < s &&
                b.iy > -1 &&
                b.iz < a &&
                b.iz > -1 &&
                ((y = b.ix * w + a * b.iy + b.iz),
                1 & u[y] && !(2 & u[y])
                  ? (t.set(b.ix, b.iy, i + C[f][2], v),
                    (g =
                      (o = b.ix - v.ix) * o +
                      (c = b.iy - v.iy) * c +
                      (h = b.iz - v.iz) * h),
                    (d[y] = g),
                    (u[y] |= 2),
                    (u[y] |= 4),
                    x.push({ ix: b.ix, iy: b.iy, iz: b.iz }))
                  : 1 & u[y] &&
                    2 & u[y] &&
                    (g =
                      (o = b.ix - v.ix) * o +
                      (c = b.iy - v.iy) * c +
                      (h = b.iz - v.iz) * h) < d[y] &&
                    (t.set(b.ix, b.iy, b.iz, v),
                    (d[y] = g),
                    4 & u[y] ||
                      ((u[y] |= 4), x.push({ ix: b.ix, iy: b.iy, iz: b.iz }))));
        for (p = 0, m = e.length; p < m; p++)
          for (
            r = e[p].ix, n = e[p].iy, i = e[p].iz, v = t.get(r, n, i), f = 6;
            f < 18;
            f++
          )
            (b.ix = r + C[f][0]),
              (b.iy = n + C[f][1]),
              (b.iz = i + C[f][2]),
              b.ix < l &&
                b.ix > -1 &&
                b.iy < s &&
                b.iy > -1 &&
                b.iz < a &&
                b.iz > -1 &&
                ((y = b.ix * w + a * b.iy + b.iz),
                1 & u[y] && !(2 & u[y])
                  ? (t.set(b.ix, b.iy, i + C[f][2], v),
                    (g =
                      (o = b.ix - v.ix) * o +
                      (c = b.iy - v.iy) * c +
                      (h = b.iz - v.iz) * h),
                    (d[y] = g),
                    (u[y] |= 2),
                    (u[y] |= 4),
                    x.push({ ix: b.ix, iy: b.iy, iz: b.iz }))
                  : 1 & u[y] &&
                    2 & u[y] &&
                    (g =
                      (o = b.ix - v.ix) * o +
                      (c = b.iy - v.iy) * c +
                      (h = b.iz - v.iz) * h) < d[y] &&
                    (t.set(b.ix, b.iy, b.iz, v),
                    (d[y] = g),
                    4 & u[y] ||
                      ((u[y] |= 4), x.push({ ix: b.ix, iy: b.iy, iz: b.iz }))));
        for (p = 0, m = e.length; p < m; p++)
          for (
            r = e[p].ix, n = e[p].iy, i = e[p].iz, v = t.get(r, n, i), f = 18;
            f < 26;
            f++
          )
            (b.ix = r + C[f][0]),
              (b.iy = n + C[f][1]),
              (b.iz = i + C[f][2]),
              b.ix < l &&
                b.ix > -1 &&
                b.iy < s &&
                b.iy > -1 &&
                b.iz < a &&
                b.iz > -1 &&
                ((y = b.ix * w + a * b.iy + b.iz),
                1 & u[y] && !(2 & u[y])
                  ? (t.set(b.ix, b.iy, i + C[f][2], v),
                    (g =
                      (o = b.ix - v.ix) * o +
                      (c = b.iy - v.iy) * c +
                      (h = b.iz - v.iz) * h),
                    (d[y] = g),
                    (u[y] |= 2),
                    (u[y] |= 4),
                    x.push({ ix: b.ix, iy: b.iy, iz: b.iz }))
                  : 1 & u[y] &&
                    2 & u[y] &&
                    (g =
                      (o = b.ix - v.ix) * o +
                      (c = b.iy - v.iy) * c +
                      (h = b.iz - v.iz) * h) < d[y] &&
                    (t.set(b.ix, b.iy, b.iz, v),
                    (d[y] = g),
                    4 & u[y] ||
                      ((u[y] |= 4), x.push({ ix: b.ix, iy: b.iy, iz: b.iz }))));
        return x;
      }),
      (this.marchingcubeinit = function (e) {
        for (var t = 0, r = u.length; t < r; t++)
          1 == e
            ? (u[t] &= -5)
            : 4 == e
            ? ((u[t] &= -3), 4 & u[t] && (u[t] |= 2), (u[t] &= -5))
            : 2 == e
            ? 4 & u[t] && 2 & u[t]
              ? (u[t] &= -5)
              : 4 & u[t] && !(2 & u[t]) && (u[t] |= 2)
            : 3 == e && (u[t] &= -5);
      }),
      (this.marchingcube = function (r) {
        this.marchingcubeinit(r),
          (t = []),
          (e = []),
          $3Dmol.MarchingCube.march(u, t, e, {
            smooth: 1,
            nX: l,
            nY: s,
            nZ: a,
          });
        for (var n = s * a, i = 0, o = t.length; i < o; i++)
          t[i].atomid = h[t[i].x * n + a * t[i].y + t[i].z];
        $3Dmol.MarchingCube.laplacianSmooth(1, t, e);
      });
  }),
  ($3Dmol.autoload = function (viewer, callback) {
    var i, dataname, type;
    if (
      (void 0 !== $(".viewer_3Dmoljs")[0] && ($3Dmol.autoinit = !0),
      $3Dmol.autoinit)
    ) {
      (viewer = null != viewer ? viewer : null), ($3Dmol.viewers = {});
      var nviewers = 0;
      $(".viewer_3Dmoljs").each(function () {
        var viewerdiv = $(this),
          datauri = [],
          datatypes = [],
          uri = "",
          showUI = !1;
        if (
          ("static" == viewerdiv.css("position") &&
            viewerdiv.css("position", "relative"),
          viewerdiv.data("ui") && (showUI = !0),
          (type = null),
          viewerdiv.data("pdb"))
        )
          datauri.push(
            "https://files.rcsb.org/view/" + viewerdiv.data("pdb") + ".pdb"
          ),
            datatypes.push("pdb");
        else if (viewerdiv.data("cid"))
          datatypes.push("sdf"),
            datauri.push(
              "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" +
                viewerdiv.data("cid") +
                "/SDF?record_type=3d"
            );
        else if (viewerdiv.data("href") || viewerdiv.data("url")) {
          (uri = viewerdiv.data("href")),
            datauri.push(uri),
            (type = uri.substr(uri.lastIndexOf(".") + 1)),
            datatypes.push(type);
          var molName = uri.substring(
            uri.lastIndexOf("/") + 1,
            uri.lastIndexOf(".")
          );
          "/" == molName && (molName = uri.substring(uri.lastIndexOf("/") + 1)),
            viewerdiv.data(datatypes[datatypes.length - 1], molName);
        }
        var divdata = viewerdiv.data();
        for (i in divdata)
          "pdb" === i.substring(0, 3) && "pdb" !== i
            ? (datauri.push(
                "https://files.rcsb.org/view/" + divdata[i] + ".pdb"
              ),
              datatypes.push("pdb"))
            : "href" === i.substring(0, 4) && "href" !== i
            ? ((uri = divdata[i]),
              datauri.push(uri),
              datatypes.push(uri.substr(uri.lastIndexOf(".") + 1)))
            : "cid" === i.substring(0, 3) &&
              "cid" !== i &&
              (datauri.push(
                "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" +
                  divdata[i] +
                  "/SDF?record_type=3d"
              ),
              datatypes.push("sdf"));
        var options = {};
        viewerdiv.data("options") &&
          (options = $3Dmol.specStringToObject(viewerdiv.data("options")));
        var bgcolor = $3Dmol.CC.color(viewerdiv.data("backgroundcolor")),
          bgalpha = viewerdiv.data("backgroundalpha");
        bgalpha = null == bgalpha ? 1 : parseFloat(bgalpha);
        var style = { line: {} };
        viewerdiv.data("style") &&
          (style = $3Dmol.specStringToObject(viewerdiv.data("style")));
        var select = {};
        viewerdiv.data("select") &&
          (select = $3Dmol.specStringToObject(viewerdiv.data("select")));
        var selectstylelist = [],
          surfaces = [],
          labels = [],
          zoomto = {},
          spin = null,
          d = viewerdiv.data(),
          stylere = /style(.+)/,
          surfre = /surface(.*)/,
          reslabre = /labelres(.*)/,
          keys = [];
        for (dataname in d)
          Object.prototype.hasOwnProperty.call(d, dataname) &&
            keys.push(dataname);
        for (keys.sort(), i = 0; i < keys.length; i++) {
          dataname = keys[i];
          var m = stylere.exec(dataname),
            selname,
            newsel,
            styleobj;
          m &&
            ((selname = "select" + m[1]),
            (newsel = $3Dmol.specStringToObject(d[selname])),
            (styleobj = $3Dmol.specStringToObject(d[dataname])),
            selectstylelist.push([newsel, styleobj])),
            (m = surfre.exec(dataname)),
            m &&
              ((selname = "select" + m[1]),
              (newsel = $3Dmol.specStringToObject(d[selname])),
              (styleobj = $3Dmol.specStringToObject(d[dataname])),
              surfaces.push([newsel, styleobj])),
            (m = reslabre.exec(dataname)),
            m &&
              ((selname = "select" + m[1]),
              (newsel = $3Dmol.specStringToObject(d[selname])),
              (styleobj = $3Dmol.specStringToObject(d[dataname])),
              labels.push([newsel, styleobj])),
            "zoomto" == dataname &&
              (zoomto = $3Dmol.specStringToObject(d[dataname])),
            "spin" == dataname &&
              (spin = $3Dmol.specStringToObject(d[dataname]));
        }
        var applyStyles = function (e) {
            for (
              e.setStyle(select, style),
                showUI && e.ui.loadSelectionStyle(select, style),
                i = 0;
              i < selectstylelist.length;
              i++
            ) {
              let t = selectstylelist[i][0] || {},
                r = selectstylelist[i][1] || { line: {} };
              e.setStyle(t, r), showUI && e.ui.loadSelectionStyle(t, r);
            }
            for (i = 0; i < surfaces.length; i++) {
              let t = surfaces[i][0] || {},
                r = surfaces[i][1] || {},
                n = e;
              if (showUI) {
                (function (e, t, r, n) {
                  t.addSurface(e.SurfaceType.VDW, n, r, r).then((e) => {
                    t.ui.loadSurface("VDW", r, n, e);
                  });
                })($3Dmol, n, t, r);
              } else e.addSurface($3Dmol.SurfaceType.VDW, r, t, t);
            }
            for (i = 0; i < labels.length; i++) {
              let t = labels[i][0] || {},
                r = labels[i][1] || {};
              e.addResLabels(t, r);
            }
            e.zoomTo(zoomto), spin && e.spin(spin.axis, spin.speed), e.render();
          },
          glviewer = viewer;
        try {
          if (null == glviewer) {
            var config = viewerdiv.data("config") || {};
            (config.defaultcolors =
              config.defaultcolors || $3Dmol.rasmolElementColors),
              void 0 === config.backgroundColor &&
                (config.backgroundColor = bgcolor),
              void 0 === config.backgroundAlpha &&
                (config.backgroundAlpha = bgalpha),
              (config.ui = showUI),
              (glviewer = $3Dmol.viewers[this.id || nviewers++] =
                $3Dmol.createViewer(viewerdiv, config));
          } else glviewer.setBackgroundColor(bgcolor, bgalpha), showUI && glviewer.ui.initiateUI();
        } catch (e) {
          console.log(e), viewerdiv.text("WebGL appears to be disabled.");
        }
        if (0 != datauri.length) {
          i = 0;
          var process = function (moldata) {
            uri = datauri[i];
            var type =
              viewerdiv.data("type") ||
              viewerdiv.data("datatype") ||
              datatypes[i];
            if ((glviewer.addModel(moldata, type, options), showUI)) {
              var modelName = viewerdiv.data(datatypes[i]);
              glviewer.ui.setModelTitle(modelName);
            }
            if (((i += 1), i < datauri.length))
              $.get(datauri[i], process, "text");
            else {
              if ((applyStyles(glviewer), viewerdiv.data("callback"))) {
                var runres = eval(viewerdiv.data("callback"));
                "function" == typeof runres && runres(glviewer);
              }
              callback && callback(glviewer);
            }
          };
          $.get(datauri[0], process, "text");
        } else {
          if (viewerdiv.data("element")) {
            var moldata = $("#" + viewerdiv.data("element")).val() || "";
            (type = viewerdiv.data("type") || viewerdiv.data("datatype")),
              type ||
                (console.log(
                  "Warning: No type specified for embedded viewer with moldata from " +
                    viewerdiv.data("element") +
                    "\n assuming type 'pdb'"
                ),
                (type = "pdb")),
              glviewer.addModel(moldata, type, options);
          }
          if ((applyStyles(glviewer), viewerdiv.data("callback"))) {
            var runres = eval(viewerdiv.data("callback"));
            "function" == typeof runres && runres(glviewer);
          }
          callback && callback(glviewer);
        }
      });
    }
  }),
  $(document).ready(function () {
    $3Dmol.autoload();
  });
var htmlColors = ($3Dmol.htmlColors = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgrey: 11119017,
  darkgreen: 25600,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  grey: 8421504,
  green: 32768,
  greenyellow: 11403055,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgrey: 13882323,
  lightgreen: 9498256,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074,
});
($3Dmol.CC = {
  rgbRegEx: /rgb(a?)\(\s*([^ ,\)\t]+)\s*,\s*([^ ,\)\t]+)\s*,\s*([^ ,\)\t]+)/i,
  cache: { 0: new $3Dmol.Color(0) },
  color: function e(t) {
    if (!t) return this.cache[0];
    if (void 0 !== this.cache[t]) return this.cache[t];
    if (t && t.constructor === Array) return t.map(e, this);
    if ("number" == typeof (t = this.getHex(t))) {
      var r = new $3Dmol.Color(t);
      return (this.cache[t] = r), r;
    }
    return t;
  },
  getHex: function (e) {
    if (!isNaN(parseInt(e))) return parseInt(e);
    if ("string" == typeof e) {
      if (
        (4 == (e = e.trim()).length &&
          "#" == e[0] &&
          (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
        7 == e.length && "#" == e[0])
      )
        return parseInt(e.substring(1), 16);
      let t = this.rgbRegEx.exec(e);
      if (t) {
        "" != t[1] &&
          console.log(
            "WARNING: Opacity value in rgba ignored.  Specify separately as opacity attribute."
          );
        let e = 0;
        for (let r = 2; r < 5; r++) {
          e *= 256;
          let n = t[r].endsWith("%")
            ? (255 * parseFloat(t[r])) / 100
            : parseFloat(t[r]);
          e += Math.round(n);
        }
        return e;
      }
      return htmlColors[e.toLowerCase()] || 0;
    }
    return e;
  },
}),
  ($3Dmol.CC = $3Dmol.CC),
  ($3Dmol.CC.color = $3Dmol.CC.color),
  ($3Dmol.ssColors = $3Dmol.ssColors || {}),
  ($3Dmol.ssColors.pyMol = { h: 16711680, s: 16776960, c: 65280 }),
  ($3Dmol.ssColors.Jmol = { h: 16711808, s: 16762880, c: 16777215 }),
  ($3Dmol.elementColors = $3Dmol.elementColors || {}),
  ($3Dmol.elementColors.defaultColor = 16716947),
  ($3Dmol.elementColors.Jmol = {
    H: 16777215,
    He: 14286847,
    HE: 14286847,
    Li: 13402367,
    LI: 13402367,
    Be: 12779264,
    BE: 12779264,
    B: 16758197,
    C: 9474192,
    N: 3166456,
    O: 16715021,
    F: 9494608,
    Ne: 11789301,
    NE: 11789301,
    Na: 11230450,
    NA: 11230450,
    Mg: 9109248,
    MG: 9109248,
    Al: 12560038,
    AL: 12560038,
    Si: 1578e4,
    SI: 1578e4,
    P: 16744448,
    S: 16777008,
    Cl: 2093087,
    CL: 2093087,
    Ar: 8442339,
    AR: 8442339,
    K: 9388244,
    Ca: 4062976,
    CA: 4062976,
    Sc: 15132390,
    SC: 15132390,
    Ti: 12567239,
    TI: 12567239,
    V: 10921643,
    Cr: 9083335,
    CR: 9083335,
    Mn: 10255047,
    MN: 10255047,
    Fe: 14706227,
    FE: 14706227,
    Co: 15765664,
    CO: 15765664,
    Ni: 5296208,
    NI: 5296208,
    Cu: 13140019,
    CU: 13140019,
    Zn: 8224944,
    ZN: 8224944,
    Ga: 12750735,
    GA: 12750735,
    Ge: 6721423,
    GE: 6721423,
    As: 12419299,
    AS: 12419299,
    Se: 16752896,
    SE: 16752896,
    Br: 10889513,
    BR: 10889513,
    Kr: 6076625,
    KR: 6076625,
    Rb: 7351984,
    RB: 7351984,
    Sr: 65280,
    SR: 65280,
    Y: 9764863,
    Zr: 9756896,
    ZR: 9756896,
    Nb: 7586505,
    NB: 7586505,
    Mo: 5551541,
    MO: 5551541,
    Tc: 3907230,
    TC: 3907230,
    Ru: 2396047,
    RU: 2396047,
    Rh: 687500,
    RH: 687500,
    Pd: 27013,
    PD: 27013,
    Ag: 12632256,
    AG: 12632256,
    Cd: 16767375,
    CD: 16767375,
    In: 10909043,
    IN: 10909043,
    Sn: 6717568,
    SN: 6717568,
    Sb: 10380213,
    SB: 10380213,
    Te: 13924864,
    TE: 13924864,
    I: 9699476,
    Xe: 4366e3,
    XE: 4366e3,
    Cs: 5707663,
    CS: 5707663,
    Ba: 51456,
    BA: 51456,
    La: 7394559,
    LA: 7394559,
    Ce: 16777159,
    CE: 16777159,
    Pr: 14286791,
    PR: 14286791,
    Nd: 13107143,
    ND: 13107143,
    Pm: 10747847,
    PM: 10747847,
    Sm: 9437127,
    SM: 9437127,
    Eu: 6422471,
    EU: 6422471,
    Gd: 4587463,
    GD: 4587463,
    Tb: 3211207,
    TB: 3211207,
    Dy: 2097095,
    DY: 2097095,
    Ho: 65436,
    HO: 65436,
    Er: 58997,
    ER: 58997,
    Tm: 54354,
    TM: 54354,
    Yb: 48952,
    YB: 48952,
    Lu: 43812,
    LU: 43812,
    Hf: 5096191,
    HF: 5096191,
    Ta: 5089023,
    TA: 5089023,
    W: 2200790,
    Re: 2522539,
    RE: 2522539,
    Os: 2516630,
    OS: 2516630,
    Ir: 1528967,
    IR: 1528967,
    Pt: 13684960,
    PT: 13684960,
    Au: 16765219,
    AU: 16765219,
    Hg: 12105936,
    HG: 12105936,
    Tl: 10900557,
    TL: 10900557,
    Pb: 5724513,
    PB: 5724513,
    Bi: 10375093,
    BI: 10375093,
    Po: 11230208,
    PO: 11230208,
    At: 7688005,
    AT: 7688005,
    Rn: 4358806,
    RN: 4358806,
    Fr: 4325478,
    FR: 4325478,
    Ra: 32e3,
    RA: 32e3,
    Ac: 7384058,
    AC: 7384058,
    Th: 47871,
    TH: 47871,
    Pa: 41471,
    PA: 41471,
    U: 36863,
    Np: 33023,
    NP: 33023,
    Pu: 27647,
    PU: 27647,
    Am: 5528818,
    AM: 5528818,
    Cm: 7888099,
    CM: 7888099,
    Bk: 9064419,
    BK: 9064419,
    Cf: 10565332,
    CF: 10565332,
    Es: 11739092,
    ES: 11739092,
    Fm: 11739066,
    FM: 11739066,
    Md: 11734438,
    MD: 11734438,
    No: 12389767,
    NO: 12389767,
    Lr: 13041766,
    LR: 13041766,
    Rf: 13369433,
    RF: 13369433,
    Db: 13697103,
    DB: 13697103,
    Sg: 14221381,
    SG: 14221381,
    Bh: 14680120,
    BH: 14680120,
    Hs: 15073326,
    HS: 15073326,
    Mt: 15400998,
    MT: 15400998,
  }),
  ($3Dmol.elementColors.rasmol = {
    H: 16777215,
    He: 16761035,
    HE: 16761035,
    Li: 11674146,
    LI: 11674146,
    B: 65280,
    C: 13158600,
    N: 9408511,
    O: 15728640,
    F: 14329120,
    Na: 255,
    NA: 255,
    Mg: 2263842,
    MG: 2263842,
    Al: 8421520,
    AL: 8421520,
    Si: 14329120,
    SI: 14329120,
    P: 16753920,
    S: 16762930,
    Cl: 65280,
    CL: 65280,
    Ca: 8421520,
    CA: 8421520,
    Ti: 8421520,
    TI: 8421520,
    Cr: 8421520,
    CR: 8421520,
    Mn: 8421520,
    MN: 8421520,
    Fe: 16753920,
    FE: 16753920,
    Ni: 10824234,
    NI: 10824234,
    Cu: 10824234,
    CU: 10824234,
    Zn: 10824234,
    ZN: 10824234,
    Br: 10824234,
    BR: 10824234,
    Ag: 8421520,
    AG: 8421520,
    I: 10494192,
    Ba: 16753920,
    BA: 16753920,
    Au: 14329120,
    AU: 14329120,
  }),
  ($3Dmol.elementColors.defaultColors = $3Dmol.elementColors.rasmol),
  ($3Dmol.elementColors.greenCarbon = $3Dmol.extend(
    {},
    $3Dmol.elementColors.defaultColors
  )),
  ($3Dmol.elementColors.greenCarbon.C = 65280),
  ($3Dmol.elementColors.cyanCarbon = $3Dmol.extend(
    {},
    $3Dmol.elementColors.defaultColors
  )),
  ($3Dmol.elementColors.cyanCarbon.C = 65535),
  ($3Dmol.elementColors.magentaCarbon = $3Dmol.extend(
    {},
    $3Dmol.elementColors.defaultColors
  )),
  ($3Dmol.elementColors.magentaCarbon.C = 16711935),
  ($3Dmol.elementColors.yellowCarbon = $3Dmol.extend(
    {},
    $3Dmol.elementColors.defaultColors
  )),
  ($3Dmol.elementColors.yellowCarbon.C = 16776960),
  ($3Dmol.elementColors.whiteCarbon = $3Dmol.extend(
    {},
    $3Dmol.elementColors.defaultColors
  )),
  ($3Dmol.elementColors.whiteCarbon.C = 16777215),
  ($3Dmol.elementColors.orangeCarbon = $3Dmol.extend(
    {},
    $3Dmol.elementColors.defaultColors
  )),
  ($3Dmol.elementColors.orangeCarbon.C = 16753920),
  ($3Dmol.elementColors.purpleCarbon = $3Dmol.extend(
    {},
    $3Dmol.elementColors.defaultColors
  )),
  ($3Dmol.elementColors.purpleCarbon.C = 8388736),
  ($3Dmol.elementColors.blueCarbon = $3Dmol.extend(
    {},
    $3Dmol.elementColors.defaultColors
  )),
  ($3Dmol.elementColors.blueCarbon.C = 255),
  ($3Dmol.residues = {}),
  ($3Dmol.residues.amino = {
    ALA: 13158600,
    ARG: 1334015,
    ASN: 56540,
    ASP: 15075850,
    CYS: 15132160,
    GLN: 56540,
    GLU: 15075850,
    GLY: 15461355,
    HIS: 8553170,
    ILE: 1016335,
    LEU: 1016335,
    LYS: 1334015,
    MET: 15132160,
    PHE: 3289770,
    PRO: 14456450,
    SER: 16422400,
    THR: 16422400,
    TRP: 11819700,
    TYR: 3289770,
    VAL: 1016335,
    ASX: 16738740,
    GLX: 16738740,
  }),
  ($3Dmol.residues.shapely = {
    ALA: 9240460,
    ARG: 124,
    ASN: 16743536,
    ASP: 10485826,
    CYS: 16777072,
    GLN: 16731212,
    GLU: 6684672,
    GLY: 16777215,
    HIS: 7368959,
    ILE: 19456,
    LEU: 4546117,
    LYS: 4671416,
    MET: 12099650,
    PHE: 5459026,
    PRO: 5395026,
    SER: 16740418,
    THR: 12078080,
    TRP: 5195264,
    TYR: 9203788,
    VAL: 16747775,
    ASX: 16711935,
    GLX: 16711935,
  }),
  ($3Dmol.residues.nucleic = {
    A: 10526975,
    G: 16740464,
    I: 8454143,
    C: 16747595,
    T: 10551200,
    U: 16744576,
  }),
  ($3Dmol.chains = {}),
  ($3Dmol.chains.atom = {
    A: 12636415,
    B: 11599792,
    C: 16761032,
    D: 16777088,
    E: 16761087,
    F: 11596016,
    G: 16765040,
    H: 15761536,
    I: 16113331,
    J: 49151,
    K: 13458524,
    L: 6737322,
    M: 10145074,
    N: 15631086,
    O: 52945,
    P: 65407,
    Q: 3978097,
    R: 139,
    S: 12433259,
    T: 25600,
    U: 8388608,
    V: 8421376,
    W: 8388736,
    X: 32896,
    Y: 12092939,
    Z: 11674146,
  }),
  ($3Dmol.chains.hetatm = {
    A: 9478351,
    B: 8441752,
    C: 13602992,
    D: 13619056,
    E: 13603023,
    F: 8437952,
    G: 13607008,
    H: 12603504,
    I: 12955267,
    J: 42959,
    K: 11881548,
    L: 5682578,
    M: 9090346,
    N: 12481214,
    O: 46753,
    P: 53103,
    Q: 3447649,
    R: 187,
    S: 10854235,
    T: 37888,
    U: 11534336,
    V: 11579392,
    W: 11534512,
    X: 45232,
    Y: 15250963,
    Z: 12726834,
  }),
  ($3Dmol.builtinColorSchemes = {
    ssPyMol: { prop: "ss", map: $3Dmol.ssColors.pyMol },
    ssJmol: { prop: "ss", map: $3Dmol.ssColors.Jmol },
    Jmol: { prop: "elem", map: $3Dmol.elementColors.Jmol },
    amino: { prop: "resn", map: $3Dmol.residues.amino },
    shapely: { prop: "resn", map: $3Dmol.residues.shapely },
    nucleic: { prop: "resn", map: $3Dmol.residues.nucleic },
    chain: { prop: "chain", map: $3Dmol.chains.atom },
    rasmol: { prop: "elem", map: $3Dmol.elementColors.rasmol },
    default: { prop: "elem", map: $3Dmol.elementColors.defaultColors },
    greenCarbon: { prop: "elem", map: $3Dmol.elementColors.greenCarbon },
    chainHetatm: { prop: "chain", map: $3Dmol.chains.hetatm },
    cyanCarbon: { prop: "elem", map: $3Dmol.elementColors.cyanCarbon },
    magentaCarbon: { prop: "elem", map: $3Dmol.elementColors.magentaCarbon },
    purpleCarbon: { prop: "elem", map: $3Dmol.elementColors.purpleCarbon },
    whiteCarbon: { prop: "elem", map: $3Dmol.elementColors.whiteCarbon },
    orangeCarbon: { prop: "elem", map: $3Dmol.elementColors.orangeCarbon },
    yellowCarbon: { prop: "elem", map: $3Dmol.elementColors.yellowCarbon },
    blueCaron: { prop: "elem", map: $3Dmol.elementColors.blueCarbon },
  }),
  ($3Dmol.getColorFromStyle = function (e, t) {
    var r = t.colorscheme;
    if (void 0 !== $3Dmol.builtinColorSchemes[r])
      r = $3Dmol.builtinColorSchemes[r];
    else if ("string" == typeof r && r.endsWith("Carbon")) {
      var n = r.substring(0, r.lastIndexOf("Carbon")).toLowerCase();
      if (void 0 !== htmlColors[n]) {
        var i = $3Dmol.extend({}, $3Dmol.elementColors.defaultColors);
        (i.C = htmlColors[n]),
          ($3Dmol.builtinColorSchemes[r] = { prop: "elem", map: i }),
          (r = $3Dmol.builtinColorSchemes[r]);
      }
    }
    var o,
      a,
      s = e.color;
    if (
      (void 0 !== t.color && "spectrum" != t.color && (s = t.color),
      void 0 !== r)
    )
      if (void 0 !== $3Dmol.elementColors[r])
        void 0 !== (r = $3Dmol.elementColors[r])[e[r.prop]] &&
          (s = r.map[e[r.prop]]);
      else if (void 0 !== r[e[r.prop]]) s = r.map[e[r.prop]];
      else if (void 0 !== r.prop && void 0 !== r.gradient) {
        o = r.prop;
        var l = r.gradient;
        void 0 !== $3Dmol.Gradient.builtinGradients[l] &&
          (l = new $3Dmol.Gradient.builtinGradients[l](r.min, r.max, r.mid));
        var c = l.range() || [-1, 1];
        null != (a = $3Dmol.getAtomProperty(e, o)) && (s = l.valueToHex(a, c));
      } else
        void 0 !== r.prop && void 0 !== r.map
          ? ((o = r.prop),
            (a = $3Dmol.getAtomProperty(e, o)),
            void 0 !== r.map[a] && (s = r.map[a]))
          : void 0 !== t.colorscheme[e.elem]
          ? (s = t.colorscheme[e.elem])
          : console.log("Could not interpret colorscheme " + r);
    else void 0 !== t.colorfunc && (s = t.colorfunc(e));
    return $3Dmol.CC.color(s);
  });
var $3Dmol = $3Dmol || {};
($3Dmol.subdivide_spline = function (e, t) {
  var r,
    n,
    i,
    o,
    a,
    s,
    l,
    c,
    u,
    d = [],
    h = e;
  for ((h = []).push(e[0]), r = 1, n = e.length - 1; r < n; r++)
    if (((a = e[r]), (s = e[r + 1]), a.smoothen)) {
      var p = new $3Dmol.Vector3(
        (a.x + s.x) / 2,
        (a.y + s.y) / 2,
        (a.z + s.z) / 2
      );
      (p.atom = a.atom), h.push(p);
    } else h.push(a);
  for (h.push(e[e.length - 1]), r = -1, i = h.length; r <= i - 3; r++)
    if (
      ((o = h[-1 === r ? 0 : r]),
      (a = h[r + 1]),
      (s = h[r + 2]),
      (l = h[r === i - 3 ? i - 1 : r + 3]),
      (c = new $3Dmol.Vector3().subVectors(s, o).multiplyScalar(0.5)),
      (u = new $3Dmol.Vector3().subVectors(l, a).multiplyScalar(0.5)),
      !s.skip)
    )
      for (var f = 0; f < t; f++) {
        var m = (1 / t) * f,
          g =
            a.x +
            m * c.x +
            m * m * (-3 * a.x + 3 * s.x - 2 * c.x - u.x) +
            m * m * m * (2 * a.x - 2 * s.x + c.x + u.x),
          v =
            a.y +
            m * c.y +
            m * m * (-3 * a.y + 3 * s.y - 2 * c.y - u.y) +
            m * m * m * (2 * a.y - 2 * s.y + c.y + u.y),
          y =
            a.z +
            m * c.z +
            m * m * (-3 * a.z + 3 * s.z - 2 * c.z - u.z) +
            m * m * m * (2 * a.z - 2 * s.z + c.z + u.z),
          x = new $3Dmol.Vector3(g, v, y);
        (x.atom = f < t / 2 ? a.atom : s.atom), d.push(x);
      }
  return d.push(h[h.length - 1]), d;
}),
  ($3Dmol.drawCartoon = (function () {
    var e = function (e, t, r, n) {
        for (var i, o, a, s, l = 0, c = t.length; l < c; l++) {
          (s = Math.round((l * (n.length - 1)) / c)),
            (a = $3Dmol.CC.color(n[s]));
          var u = e.updateGeoGroup(2),
            d = u.vertexArray,
            h = u.colorArray,
            p = u.faceArray;
          (d[(o = 3 * (i = u.vertices))] = t[l].x),
            (d[o + 1] = t[l].y),
            (d[o + 2] = t[l].z),
            (d[o + 3] = r[l].x),
            (d[o + 4] = r[l].y),
            (d[o + 5] = r[l].z);
          for (var f = 0; f < 6; ++f)
            (h[o + 3 * f] = a.r),
              (h[o + 1 + 3 * f] = a.g),
              (h[o + 2 + 3 * f] = a.b);
          if (l > 0) {
            var m = [i, i + 1, i - 1, i - 2],
              g = u.faceidx;
            (p[g] = m[0]),
              (p[g + 1] = m[1]),
              (p[g + 2] = m[3]),
              (p[g + 3] = m[1]),
              (p[g + 4] = m[2]),
              (p[g + 5] = m[3]),
              (u.faceidx += 6);
          }
          u.vertices += 2;
        }
      },
      t = function (e, t, r, n, i) {
        if (0 !== t.length) {
          i = void 0 === i ? 5 : i;
          var o = new $3Dmol.Geometry(),
            a = new $3Dmol.LineBasicMaterial({ linewidth: r });
          a.vertexColors = !0;
          var s = new $3Dmol.Line(o, a);
          (s.type = $3Dmol.LineStrip), e.add(s);
        }
      },
      r = function (t, r, n, i, o, a, s) {
        (s && "default" !== s) || (s = "rectangle"),
          "edged" === s
            ? (function (t, r, n, i, o, a) {
                if (!(r.length < 2)) {
                  var s, l;
                  if (
                    ((s = r[0]),
                    (l = r[r.length - 1]),
                    (s = $3Dmol.subdivide_spline(s, i)),
                    (l = $3Dmol.subdivide_spline(l, i)),
                    !o)
                  )
                    return e(t, s, l, n);
                  var c,
                    u,
                    d,
                    h,
                    p,
                    f,
                    m,
                    g,
                    v,
                    y,
                    x,
                    b,
                    w,
                    D,
                    C,
                    S,
                    A,
                    $,
                    M,
                    k,
                    z,
                    _,
                    T = [],
                    L = [
                      [0, 2, -6, -8],
                      [-4, -2, 6, 4],
                      [7, -1, -5, 3],
                      [-3, 5, 1, -7],
                    ];
                  for (w = 0, D = s.length; w < D; w++) {
                    if (
                      ((y = Math.round((w * (n.length - 1)) / D)),
                      (v = $3Dmol.CC.color(n[y])),
                      T.push((u = s[w])),
                      T.push(u),
                      T.push((d = l[w])),
                      T.push(d),
                      w < D - 1)
                    ) {
                      var E = s[w + 1].clone().sub(s[w]);
                      c = l[w]
                        .clone()
                        .sub(s[w])
                        .cross(E)
                        .normalize()
                        .multiplyScalar(o);
                    }
                    for (
                      T.push((h = s[w].clone().add(c))),
                        T.push(h),
                        T.push((p = l[w].clone().add(c))),
                        T.push(p),
                        void 0 !== u.atom && (x = u.atom),
                        k = (M = t.updateGeoGroup(8)).vertexArray,
                        z = M.colorArray,
                        _ = M.faceArray,
                        k[(m = 3 * (f = M.vertices))] = u.x,
                        k[m + 1] = u.y,
                        k[m + 2] = u.z,
                        k[m + 3] = u.x,
                        k[m + 4] = u.y,
                        k[m + 5] = u.z,
                        k[m + 6] = d.x,
                        k[m + 7] = d.y,
                        k[m + 8] = d.z,
                        k[m + 9] = d.x,
                        k[m + 10] = d.y,
                        k[m + 11] = d.z,
                        k[m + 12] = h.x,
                        k[m + 13] = h.y,
                        k[m + 14] = h.z,
                        k[m + 15] = h.x,
                        k[m + 16] = h.y,
                        k[m + 17] = h.z,
                        k[m + 18] = p.x,
                        k[m + 19] = p.y,
                        k[m + 20] = p.z,
                        k[m + 21] = p.x,
                        k[m + 22] = p.y,
                        k[m + 23] = p.z,
                        C = 0;
                      C < 8;
                      ++C
                    )
                      (z[m + 3 * C] = v.r),
                        (z[m + 1 + 3 * C] = v.g),
                        (z[m + 2 + 3 * C] = v.b);
                    if (w > 0) {
                      var I =
                        void 0 !== b && void 0 !== x && b.serial !== x.serial;
                      for (C = 0; C < 4; C++) {
                        var F = [
                          f + L[C][0],
                          f + L[C][1],
                          f + L[C][2],
                          f + L[C][3],
                        ];
                        if (
                          ((_[(g = M.faceidx)] = F[0]),
                          (_[g + 1] = F[1]),
                          (_[g + 2] = F[3]),
                          (_[g + 3] = F[1]),
                          (_[g + 4] = F[2]),
                          (_[g + 5] = F[3]),
                          (M.faceidx += 6),
                          x.clickable ||
                            b.clickable ||
                            x.hoverable ||
                            b.hoverable)
                        ) {
                          var O = T[F[3]].clone(),
                            R = T[F[0]].clone(),
                            N = T[F[2]].clone(),
                            P = T[F[1]].clone();
                          if (
                            ((O.atom = T[F[3]].atom || null),
                            (N.atom = T[F[2]].atom || null),
                            (R.atom = T[F[0]].atom || null),
                            (P.atom = T[F[1]].atom || null),
                            I)
                          ) {
                            var V = O.clone().add(R).multiplyScalar(0.5),
                              B = N.clone().add(P).multiplyScalar(0.5),
                              U = O.clone().add(P).multiplyScalar(0.5);
                            C % 2 == 0
                              ? ((b.clickable || b.hoverable) &&
                                  ((S = new $3Dmol.Triangle(V, U, O)),
                                  (A = new $3Dmol.Triangle(B, N, U)),
                                  ($ = new $3Dmol.Triangle(U, N, O)),
                                  b.intersectionShape.triangle.push(S),
                                  b.intersectionShape.triangle.push(A),
                                  b.intersectionShape.triangle.push($)),
                                (x.clickable || x.hoverable) &&
                                  ((S = new $3Dmol.Triangle(R, P, U)),
                                  (A = new $3Dmol.Triangle(P, B, U)),
                                  ($ = new $3Dmol.Triangle(R, U, V)),
                                  x.intersectionShape.triangle.push(S),
                                  x.intersectionShape.triangle.push(A),
                                  x.intersectionShape.triangle.push($)))
                              : ((x.clickable || x.hoverable) &&
                                  ((S = new $3Dmol.Triangle(V, U, O)),
                                  (A = new $3Dmol.Triangle(B, N, U)),
                                  ($ = new $3Dmol.Triangle(U, N, O)),
                                  x.intersectionShape.triangle.push(S),
                                  x.intersectionShape.triangle.push(A),
                                  x.intersectionShape.triangle.push($)),
                                (b.clickable || b.hoverable) &&
                                  ((S = new $3Dmol.Triangle(R, P, U)),
                                  (A = new $3Dmol.Triangle(P, B, U)),
                                  ($ = new $3Dmol.Triangle(R, U, V)),
                                  b.intersectionShape.triangle.push(S),
                                  b.intersectionShape.triangle.push(A),
                                  b.intersectionShape.triangle.push($)));
                          } else
                            (x.clickable || x.hoverable) &&
                              ((S = new $3Dmol.Triangle(R, P, O)),
                              (A = new $3Dmol.Triangle(P, N, O)),
                              x.intersectionShape.triangle.push(S),
                              x.intersectionShape.triangle.push(A));
                        }
                      }
                    }
                    (M.vertices += 8), (b = x);
                  }
                  var j = T.length - 8;
                  for (
                    k = (M = t.updateGeoGroup(8)).vertexArray,
                      z = M.colorArray,
                      _ = M.faceArray,
                      m = 3 * (f = M.vertices),
                      g = M.faceidx,
                      w = 0;
                    w < 4;
                    w++
                  ) {
                    T.push(T[2 * w]), T.push(T[j + 2 * w]);
                    var G = T[2 * w],
                      H = T[j + 2 * w];
                    (k[m + 6 * w] = G.x),
                      (k[m + 1 + 6 * w] = G.y),
                      (k[m + 2 + 6 * w] = G.z),
                      (k[m + 3 + 6 * w] = H.x),
                      (k[m + 4 + 6 * w] = H.y),
                      (k[m + 5 + 6 * w] = H.z),
                      (z[m + 6 * w] = v.r),
                      (z[m + 1 + 6 * w] = v.g),
                      (z[m + 2 + 6 * w] = v.b),
                      (z[m + 3 + 6 * w] = v.r),
                      (z[m + 4 + 6 * w] = v.g),
                      (z[m + 5 + 6 * w] = v.b);
                  }
                  (j += 8),
                    (S = [f, f + 2, f + 6, f + 4]),
                    (A = [f + 1, f + 5, f + 7, f + 3]),
                    (_[g] = S[0]),
                    (_[g + 1] = S[1]),
                    (_[g + 2] = S[3]),
                    (_[g + 3] = S[1]),
                    (_[g + 4] = S[2]),
                    (_[g + 5] = S[3]),
                    (_[g + 6] = A[0]),
                    (_[g + 7] = A[1]),
                    (_[g + 8] = A[3]),
                    (_[g + 9] = A[1]),
                    (_[g + 10] = A[2]),
                    (_[g + 11] = A[3]),
                    (M.faceidx += 12),
                    (M.vertices += 8);
                }
              })(t, r, n, i, o)
            : ("rectangle" !== s && "oval" !== s && "parabola" !== s) ||
              (function (t, r, n, i, o, a, s) {
                var l, c, u, d;
                if (!((u = r.length) < 2 || r[0].length < 2)) {
                  for (l = 0; l < u; l++)
                    r[l] = $3Dmol.subdivide_spline(r[l], i);
                  if (((d = r[0].length), !o)) return e(t, r[0], r[u - 1], n);
                  var h,
                    p,
                    f,
                    m,
                    g,
                    v,
                    y = [],
                    x = [],
                    b = [];
                  for (c = 0; c < u; c++)
                    y.push(
                      0.25 +
                        (1.5 * Math.sqrt((u - 1) * c - Math.pow(c, 2))) /
                          (u - 1)
                    ),
                      x.push(0.5),
                      b.push(2 * (Math.pow(c / u, 2) - c / u) + 0.6);
                  var w,
                    D,
                    C,
                    S,
                    A,
                    $,
                    M = [];
                  for (c = 0; c < 2 * u - 1; c++)
                    M[c] = [c, c + 1, c + 1 - 2 * u, c - 2 * u];
                  M[2 * u - 1] = [c, c + 1 - 2 * u, c + 1 - 4 * u, c - 2 * u];
                  var k,
                    z,
                    _,
                    T,
                    L = t.updateGeoGroup(2 * u * d);
                  for (l = 0; l < d; l++) {
                    var E, I;
                    for (
                      $ = Math.round((l * (n.length - 1)) / d),
                        A = $3Dmol.CC.color(n[$]),
                        g = f,
                        v = m,
                        f = [],
                        m = [],
                        h = [],
                        void 0 !== r[0][l].atom &&
                          ((S = r[0][l].atom),
                          "oval" === s
                            ? (p = y)
                            : "rectangle" === s
                            ? (p = x)
                            : "parabola" === s && (p = b)),
                        p || (p = x),
                        c = 0;
                      c < u;
                      c++
                    )
                      (E =
                        l < d - 1
                          ? r[c][l + 1].clone().sub(r[c][l])
                          : r[c][l - 1].clone().sub(r[c][l]).negate()),
                        (I =
                          c < u - 1
                            ? r[c + 1][l].clone().sub(r[c][l])
                            : r[c - 1][l].clone().sub(r[c][l]).negate()),
                        (h[c] = I.cross(E)
                          .normalize()
                          .multiplyScalar(o * p[c]));
                    for (c = 0; c < u; c++)
                      f[c] = r[c][l].clone().add(h[c].clone().negate());
                    for (c = 0; c < u; c++) m[c] = r[c][l].clone().add(h[c]);
                    for (
                      k = L.vertexArray,
                        z = L.colorArray,
                        _ = L.faceArray,
                        D = 3 * (w = L.vertices),
                        c = 0;
                      c < u;
                      c++
                    )
                      (k[D + 3 * c + 0] = f[c].x),
                        (k[D + 3 * c + 1] = f[c].y),
                        (k[D + 3 * c + 2] = f[c].z);
                    for (c = 0; c < u; c++)
                      (k[D + 3 * c + 0 + 3 * u] = m[u - 1 - c].x),
                        (k[D + 3 * c + 1 + 3 * u] = m[u - 1 - c].y),
                        (k[D + 3 * c + 2 + 3 * u] = m[u - 1 - c].z);
                    for (c = 0; c < 2 * u; ++c)
                      (z[D + 3 * c + 0] = A.r),
                        (z[D + 3 * c + 1] = A.g),
                        (z[D + 3 * c + 2] = A.b);
                    if (l > 0) {
                      for (c = 0; c < 2 * u; c++)
                        (T = [
                          w + M[c][0],
                          w + M[c][1],
                          w + M[c][2],
                          w + M[c][3],
                        ]),
                          (_[(C = L.faceidx)] = T[0]),
                          (_[C + 1] = T[1]),
                          (_[C + 2] = T[3]),
                          (_[C + 3] = T[1]),
                          (_[C + 4] = T[2]),
                          (_[C + 5] = T[3]),
                          (L.faceidx += 6);
                      if (S.clickable || S.hoverable) {
                        var F = [];
                        for (c in (F.push(
                          new $3Dmol.Triangle(g[0], f[0], f[u - 1])
                        ),
                        F.push(new $3Dmol.Triangle(g[0], f[u - 1], g[u - 1])),
                        F.push(
                          new $3Dmol.Triangle(g[u - 1], f[u - 1], m[u - 1])
                        ),
                        F.push(
                          new $3Dmol.Triangle(g[u - 1], m[u - 1], v[u - 1])
                        ),
                        F.push(new $3Dmol.Triangle(m[0], v[0], v[u - 1])),
                        F.push(new $3Dmol.Triangle(m[u - 1], m[0], v[u - 1])),
                        F.push(new $3Dmol.Triangle(f[0], g[0], v[0])),
                        F.push(new $3Dmol.Triangle(m[0], f[0], v[0])),
                        F))
                          S.intersectionShape.triangle.push(F[c]);
                      }
                    }
                    (L.vertices += 2 * u), S;
                  }
                  for (
                    k = L.vertexArray,
                      z = L.colorArray,
                      _ = L.faceArray,
                      D = 3 * (w = L.vertices),
                      C = L.faceidx,
                      l = 0;
                    l < u - 1;
                    l++
                  )
                    (T = [l, l + 1, 2 * u - 2 - l, 2 * u - 1 - l]),
                      (_[(C = L.faceidx)] = T[0]),
                      (_[C + 1] = T[1]),
                      (_[C + 2] = T[3]),
                      (_[C + 3] = T[1]),
                      (_[C + 4] = T[2]),
                      (_[C + 5] = T[3]),
                      (L.faceidx += 6);
                  for (l = 0; l < u - 1; l++)
                    (T = [
                      w - 1 - l,
                      w - 2 - l,
                      w - 2 * u + l + 1,
                      w - 2 * u + l,
                    ]),
                      (_[(C = L.faceidx)] = T[0]),
                      (_[C + 1] = T[1]),
                      (_[C + 2] = T[3]),
                      (_[C + 3] = T[1]),
                      (_[C + 4] = T[2]),
                      (_[C + 5] = T[3]),
                      (L.faceidx += 6);
                }
              })(t, r, n, i, o, 0, s);
      },
      n = function (e) {
        return e && "C" === e.elem && "CA" === e.atom;
      },
      i = function (e, t) {
        if (e && t && e.chain === t.chain) {
          if (
            !(
              e.hetflag ||
              t.hetflag ||
              e.reschain !== t.reschain ||
              (e.resi !== t.resi && e.resi !== t.resi - 1)
            )
          )
            return !0;
          if (e.resi < t.resi) {
            var r = e.x - t.x,
              n = e.y - t.y,
              i = e.z - t.z,
              o = r * r + n * n + i * i;
            if ("CA" == e.atom && "CA" == t.atom && o < 16) return !0;
            if (("P" == e.atom || "P" == t.atom) && o < 64) return !0;
          }
        }
        return !1;
      },
      o = function (e, t, r, n, i) {
        if (null != t && 0 != t.vertices) {
          i && (t.initTypedArrays(), t.setUpNormals());
          var o = new $3Dmol.MeshDoubleLambertMaterial();
          (o.vertexColors = $3Dmol.FaceColors),
            "number" == typeof r &&
              r >= 0 &&
              r < 1 &&
              ((o.transparent = !0), (o.opacity = r)),
            (o.outline = n);
          var a = new $3Dmol.Mesh(t, o);
          e.add(a);
        }
      },
      a = function (e, t, r, n, i, o, a, s, l) {
        var c, u, d, h, p, f;
        if (n && i && a) {
          var m = i.sub(n);
          m.normalize();
          var g = s[l];
          for (u = l + 1; u < s.length && (g = s[u]).atom != a.atom; u++);
          if (
            ((g = g
              ? new $3Dmol.Vector3(g.x, g.y, g.z)
              : new $3Dmol.Vector3(0, 0, 0)).sub(n),
            "arrow start" === a.ss)
          ) {
            var v = g.clone().multiplyScalar(0.3).cross(i);
            n.add(v);
            var y = g.clone().cross(m).normalize();
            m.rotateAboutVector(y, 0.43);
          }
          for (
            a.style.cartoon.ribbon
              ? (c = a.style.cartoon.thickness || 0.4)
              : a.style.cartoon.width
              ? (c = a.style.cartoon.width)
              : "c" === a.ss
              ? (c = "P" === a.atom ? 0.8 : 0.5)
              : "arrow start" === a.ss
              ? ((c = 1.3), (p = !0))
              : (c =
                  "arrow end" === a.ss
                    ? 0.5
                    : ("h" === a.ss && a.style.cartoon.tubes) ||
                      "tube start" === a.ss
                    ? 0.5
                    : 1.3),
              null != o && m.dot(o) < 0 && m.negate(),
              m.multiplyScalar(c),
              u = 0;
            u < t;
            u++
          )
            (d = (2 * u) / (t - 1) - 1),
              ((h = new $3Dmol.Vector3(
                n.x + d * m.x,
                n.y + d * m.y,
                n.z + d * m.z
              )).atom = a),
              r && "s" === a.ss && (h.smoothen = !0),
              e[u].push(h);
          if (p)
            for (m.multiplyScalar(2), u = 0; u < t; u++)
              (d = (2 * u) / (t - 1) - 1),
                ((h = new $3Dmol.Vector3(
                  n.x + d * m.x,
                  n.y + d * m.y,
                  n.z + d * m.z
                )).atom = a),
                (h.smoothen = !1),
                (h.skip = !0),
                e[u].push(h);
          return (
            (f = a.style.cartoon.style || "default"),
            e.style
              ? e.style != f &&
                (console.log(
                  "Warning: a cartoon chain's strand-style is ambiguous"
                ),
                (e.style = "default"))
              : (e.style = f),
            ("arrow start" !== a.ss && "arrow end" !== a.ss) || (a.ss = "s"),
            p
          );
        }
      },
      s = {
        C: !0,
        CA: !0,
        O: !0,
        P: !0,
        OP2: !0,
        O2P: !0,
        "O5'": !0,
        "O3'": !0,
        "C5'": !0,
        "C2'": !0,
        "O5*": !0,
        "O3*": !0,
        "C5*": !0,
        "C2*": !0,
        N1: !0,
        N3: !0,
      },
      l = { DA: !0, DG: !0, A: !0, G: !0 },
      c = { DT: !0, DC: !0, U: !0, C: !0, T: !0 },
      u = { DA: !0, DG: !0, A: !0, G: !0, DT: !0, DC: !0, U: !0, C: !0, T: !0 };
    return function (e, d, h, p) {
      !(function (e, d, h, p, f, m, g) {
        var v, y, x, b, w, D, C, S, A, $, M, k, z, _, T, L, E, I;
        (m = m || 5), (g = g || 5);
        var F = new $3Dmol.Geometry(!0),
          O = new $3Dmol.Geometry(!0),
          R = [],
          N = [],
          P = 1,
          V = !1,
          B = {};
        for (var U in $3Dmol.Gradient.builtinGradients)
          $3Dmol.Gradient.builtinGradients.hasOwnProperty(U) &&
            (B[U] = new $3Dmol.Gradient.builtinGradients[U](h[1], h[0]));
        var j = function (e, t) {
          return h && "spectrum" === t.color
            ? t.colorscheme in B
              ? B[t.colorscheme].valueToHex(e.resi)
              : B.sinebow.valueToHex(e.resi)
            : $3Dmol.getColorFromStyle(e, t).getHex();
        };
        for (S = 0; S < m; S++) N[S] = [];
        var G = !1,
          H = !1,
          q = [];
        for (S in d) {
          if ("C" === (b = d[S]).elem && "CA" === b.atom) {
            var W = i(x, b);
            W && "s" === b.ss
              ? (G = !0)
              : G &&
                (x &&
                  y &&
                  x.style.cartoon.arrows &&
                  y.style.cartoon.arrows &&
                  ((x.ss = "arrow end"), (y.ss = "arrow start")),
                (G = !1)),
              W &&
              ("h" === x.ss || "tube start" == x.ss) &&
              x.style.cartoon.tubes
                ? !H &&
                  "tube start" != x.ss &&
                  b.style.cartoon.tubes &&
                  ((b.ss = "tube start"), (H = !0))
                : H &&
                  ("tube start" === x.ss
                    ? (x.ss = "tube end")
                    : y && y.style.cartoon.tubes && (y.ss = "tube end"),
                  (H = !1)),
              (y = x),
              (x = b);
          }
          b && b.atom in s && q.push(b);
        }
        H && x.style.cartoon.tubes && ((x.ss = "tube end"), (H = !1));
        var Y = function (n) {
          for (var i = 0; !C && i < m; i++) t(e, N[i], 1, 0, g);
          p && N[0].length > 0 && r(O, N, R, g, C, 0, N.style);
          var a = [],
            s = null;
          if (n) {
            for (i = 0; i < m; i++) a[i] = N[i][N[i].length - 1];
            s = R[R.length - 1];
          }
          for (N = [], i = 0; i < m; i++) N[i] = [];
          if (((R = []), n)) {
            for (i = 0; i < m; i++) N[i].push(a[i]);
            R.push(s);
          }
          o(e, O, P, V, !0),
            o(e, F, P, V, !1),
            (O = new $3Dmol.Geometry(!0)),
            (F = new $3Dmol.Geometry(!0));
        };
        x = void 0;
        for (var X = 0; X < q.length; X++) {
          var Z = (b = q[X]).resn.trim(),
            Q = Z in u;
          if (
            ((P = 1),
            (v = b.style.cartoon),
            x && x.style.cartoon && (P = x.style.cartoon.opacity),
            x &&
              x.style.cartoon &&
              x.style.cartoon.outline &&
              (V = x.style.cartoon.outline),
            !x ||
              !x.style.cartoon ||
              (b.style.cartoon &&
                x.style.cartoon.opacity == b.style.cartoon.opacity) ||
              Y(x.chain == b.chain),
            N.length && N[0].length > 3e4 / m / g / 2 && Y(!0),
            "trace" === v.style)
          ) {
            if (b.hetflag);
            else if (
              ("C" === b.elem && "CA" === b.atom) ||
              (Q && "P" === b.atom)
            ) {
              if (
                ((D = j(b, v)),
                (C = $3Dmol.isNumeric(v.thickness) ? v.thickness : 0.4),
                i(x, b))
              )
                if (D == w) {
                  var K = $3Dmol.CC.color(D);
                  $3Dmol.GLDraw.drawCylinder(F, x, b, C, K, 2, 2);
                } else {
                  var J = new $3Dmol.Vector3()
                      .addVectors(x, b)
                      .multiplyScalar(0.5),
                    ee = $3Dmol.CC.color(w),
                    te = $3Dmol.CC.color(D);
                  $3Dmol.GLDraw.drawCylinder(F, x, J, C, ee, 2, 0),
                    $3Dmol.GLDraw.drawCylinder(F, J, b, C, te, 0, 2);
                }
              if (
                (!0 === b.clickable || b.hoverable) &&
                void 0 !== b.intersectionShape
              ) {
                var re = new $3Dmol.Vector3(b.x, b.y, b.z);
                b.intersectionShape.sphere.push(new $3Dmol.Sphere(re, C));
              }
              (x = b), (w = D);
            }
          } else {
            if (n(b) || (Q && ("P" === b.atom || 0 == b.atom.indexOf("O5")))) {
              if (I)
                if ("tube end" === b.ss)
                  (I = !1),
                    (E = new $3Dmol.Vector3(b.x, b.y, b.z)),
                    $3Dmol.GLDraw.drawCylinder(
                      F,
                      L,
                      E,
                      2,
                      $3Dmol.CC.color(w),
                      1,
                      1
                    ),
                    (b.ss = "h");
                else {
                  if (x.chain == b.chain && "tube end" !== x.ss) continue;
                  (I = !1),
                    (x.ss = "h"),
                    (E = new $3Dmol.Vector3(x.x, x.y, x.z)),
                    $3Dmol.GLDraw.drawCylinder(
                      F,
                      L,
                      E,
                      2,
                      $3Dmol.CC.color(w),
                      1,
                      1
                    );
                }
              if (x && (!i(x, b) || "tube start" === x.ss)) {
                for (
                  "tube start" === x.ss &&
                    ((I = !0),
                    (L = new $3Dmol.Vector3(x.x, x.y, x.z)),
                    (x.ss = "h")),
                    T &&
                      ((_ = k
                        ? new $3Dmol.Vector3()
                            .addVectors(x, k)
                            .multiplyScalar(0.5)
                        : new $3Dmol.Vector3(x.x, x.y, x.z)),
                      $3Dmol.GLDraw.drawCylinder(
                        F,
                        _,
                        T,
                        0.4,
                        $3Dmol.CC.color(T.color),
                        0,
                        2
                      ),
                      a(N, m, !f, k, z, M, x, q, X),
                      R.push(D),
                      (_ = null),
                      (T = null)),
                    S = 0;
                  !C && S < m;
                  S++
                )
                  t(e, N[S], 1, 0, g);
                for (
                  p && N[0].length > 0 && r(O, N, R, g, C, 0, N.style),
                    N = [],
                    S = 0;
                  S < m;
                  S++
                )
                  N[S] = [];
                R = [];
              }
              if (void 0 === x || x.rescode != b.rescode || x.resi != b.resi) {
                if (T) {
                  var ne = (_ = new $3Dmol.Vector3()
                    .addVectors(x, b)
                    .multiplyScalar(0.5))
                    .clone()
                    .sub(T)
                    .multiplyScalar(0.02);
                  _.add(ne),
                    $3Dmol.GLDraw.drawCylinder(
                      F,
                      _,
                      T,
                      0.4,
                      $3Dmol.CC.color(T.color),
                      0,
                      2
                    ),
                    (_ = null),
                    (T = null);
                }
                (D = j(b, v)),
                  R.push(D),
                  (C = $3Dmol.isNumeric(v.thickness) ? v.thickness : 0.4),
                  (x = b),
                  ((A = new $3Dmol.Vector3(x.x, x.y, x.z)).resi = x.resi),
                  (w = D);
              }
              (!0 !== b.clickable && !0 !== b.hoverable) ||
                (void 0 !== b.intersectionShape &&
                  void 0 !== b.intersectionShape.triangle) ||
                (b.intersectionShape = {
                  sphere: null,
                  cylinder: [],
                  line: [],
                  triangle: [],
                });
            } else
              (n(x) && "O" === b.atom) ||
              (Q && "P" === x.atom && ("OP2" === b.atom || "O2P" === b.atom)) ||
              (Q && 0 == x.atom.indexOf("O5") && 0 == b.atom.indexOf("C5"))
                ? ((($ = new $3Dmol.Vector3(b.x, b.y, b.z)).resi = b.resi),
                  ("OP2" !== b.atom && "O2P" !== b.atom) ||
                    (z = new $3Dmol.Vector3(b.x, b.y, b.z)))
                : Q && 0 == b.atom.indexOf("O3")
                ? (k = new $3Dmol.Vector3(b.x, b.y, b.z))
                : (("N1" === b.atom && Z in l) ||
                    ("N3" === b.atom && Z in c)) &&
                  ((T = new $3Dmol.Vector3(b.x, b.y, b.z)).color = $3Dmol
                    .getColorFromStyle(b, v)
                    .getHex());
            $ &&
              A &&
              $.resi === A.resi &&
              (a(N, m, !f, A, $, M, x, q, X),
              (M = $),
              (A = null),
              ($ = null),
              R.push(D));
          }
        }
        T &&
          ((_ = k
            ? new $3Dmol.Vector3().addVectors(x, k).multiplyScalar(0.5)
            : new $3Dmol.Vector3(x.x, x.y, x.z)),
          $3Dmol.GLDraw.drawCylinder(
            F,
            _,
            T,
            0.4,
            $3Dmol.CC.color(T.color),
            0,
            2
          ),
          a(N, m, !f, k, z, M, x, q, X),
          R.push(D)),
          Y();
      })(e, d, h, !0, !1, (p = p || 5), p);
    };
  })());
var $3Dmol = $3Dmol || {};
($3Dmol.CAP = { NONE: 0, FLAT: 1, ROUND: 2 }),
  ($3Dmol.GLDraw = (function () {
    var e,
      t = {},
      r =
        ((e = new $3Dmol.Vector3()),
        function (t) {
          e.set(t[0], t[1], t[2]);
          var r,
            n,
            i,
            o,
            a,
            s = e.x,
            l = e.y,
            c = e.z,
            u = Math.sqrt(s * s + l * l);
          u < 1e-4 ? ((n = 0), (i = 1)) : ((n = -s / u), (i = l / u)),
            (l = -n * s + i * l),
            (r = Math.sqrt(l * l + c * c)) < 1e-4
              ? ((o = 0), (a = 1))
              : ((o = c / r), (a = l / r));
          var d = new Float32Array(9);
          return (
            (d[0] = i),
            (d[1] = n),
            (d[2] = 0),
            (d[3] = -n * a),
            (d[4] = i * a),
            (d[5] = o),
            (d[6] = n * o),
            (d[7] = -i * o),
            (d[8] = a),
            d
          );
        }),
      n = (function () {
        var e,
          t = [],
          r = Math.pow(2, 4),
          n = 2,
          i = Math.pow(2, n),
          o = r / i;
        for (
          t[0] = new $3Dmol.Vector3(-1, 0, 0),
            t[o] = new $3Dmol.Vector3(0, 0, 1),
            t[2 * o] = new $3Dmol.Vector3(1, 0, 0),
            t[3 * o] = new $3Dmol.Vector3(0, 0, -1),
            n = 3;
          n <= 4;
          n++
        ) {
          for (o = r / (i = Math.pow(2, n - 1)), e = 0; e < i - 1; e++)
            t[o / 2 + e * o] = t[e * o]
              .clone()
              .add(t[(e + 1) * o])
              .normalize();
          t[o / 2 + (e = i - 1) * o] = t[e * o].clone().add(t[0]).normalize();
        }
        return t;
      })(),
      i = {
        cache: {},
        getVerticesForRadius: function (e, t, r) {
          if (
            void 0 !== typeof this.chache &&
            void 0 !== this.cache[e] &&
            void 0 !== this.cache[e][t + r]
          )
            return this.cache[e][t + r];
          for (var i, o = n.length, a = [], s = [], l = 0; l < o; l++)
            a.push(n[l].clone().multiplyScalar(e)),
              a.push(n[l].clone().multiplyScalar(e)),
              (i = n[l].clone().normalize()),
              s.push(i),
              s.push(i);
          var c = [],
            u = o;
          var d,
            h,
            p = 2 * Math.PI,
            f = Math.PI,
            m = !1,
            g = !1;
          for (h = 0; h <= 10; h++) {
            (m = 0 === h || 10 === h), (g = 5 === h);
            var v = [],
              y = [];
            for (d = 0; d <= u; d++)
              if (g) {
                var x = d < u ? 2 * d : 0;
                y.push(x + 1), v.push(x);
              } else {
                var b = d / u,
                  w = h / 10;
                if (m && 0 !== d) m && v.push(a.length - 1);
                else if (d < u) {
                  var D = new $3Dmol.Vector3();
                  (D.x = -e * Math.cos(0 + b * p) * Math.sin(0 + w * f)),
                    (D.y = 1 == t ? 0 : e * Math.cos(0 + w * f)),
                    (D.z = e * Math.sin(0 + b * p) * Math.sin(0 + w * f)),
                    Math.abs(D.x) < 1e-5 && (D.x = 0),
                    Math.abs(D.y) < 1e-5 && (D.y = 0),
                    Math.abs(D.z) < 1e-5 && (D.z = 0),
                    t == $3Dmol.CAP.FLAT
                      ? (i = new $3Dmol.Vector3(
                          0,
                          Math.cos(0 + w * f),
                          0
                        )).normalize()
                      : (i = new $3Dmol.Vector3(D.x, D.y, D.z)).normalize(),
                    a.push(D),
                    s.push(i),
                    v.push(a.length - 1);
                } else v.push(a.length - u);
              }
            g && c.push(y), c.push(v);
          }
          var C = { vertices: a, normals: s, verticesRows: c, w: u, h: 10 };
          return (
            e in this.cache || (this.cache[e] = {}),
            (this.cache[e][t + r] = C),
            C
          );
        },
      };
    (t.drawCylinder = function (e, t, n, o, a, s, l) {
      if (t && n) {
        0;
        var c = l || s;
        a = a || { r: 0, g: 0, b: 0 };
        var u = [n.x, n.y, n.z];
        (u[0] -= t.x), (u[1] -= t.y), (u[2] -= t.z);
        var d,
          h,
          p,
          f,
          m,
          g,
          v = r(u),
          y = i.getVerticesForRadius(o, l, "to"),
          x = y.w,
          b = y.h,
          w = c ? b * x + 2 : 2 * x,
          D = e.updateGeoGroup(w),
          C = y.vertices,
          S = y.normals,
          A = y.verticesRows,
          $ = A[b / 2],
          M = A[b / 2 + 1],
          k = D.vertices,
          z = D.vertexArray,
          _ = D.normalArray,
          T = D.colorArray,
          L = D.faceArray;
        for (p = 0; p < x; ++p) {
          var E = 2 * p;
          (f = v[0] * C[E].x + v[3] * C[E].y + v[6] * C[E].z),
            (m = v[1] * C[E].x + v[4] * C[E].y + v[7] * C[E].z),
            (g = v[5] * C[E].y + v[8] * C[E].z),
            (d = 3 * (k + E)),
            (h = D.faceidx),
            (z[d] = f + t.x),
            (z[d + 1] = m + t.y),
            (z[d + 2] = g + t.z),
            (z[d + 3] = f + n.x),
            (z[d + 4] = m + n.y),
            (z[d + 5] = g + n.z),
            (_[d] = f),
            (_[d + 3] = f),
            (_[d + 1] = m),
            (_[d + 4] = m),
            (_[d + 2] = g),
            (_[d + 5] = g),
            (T[d] = a.r),
            (T[d + 3] = a.r),
            (T[d + 1] = a.g),
            (T[d + 4] = a.g),
            (T[d + 2] = a.b),
            (T[d + 5] = a.b),
            (L[h] = M[p] + k),
            (L[h + 1] = M[p + 1] + k),
            (L[h + 2] = $[p] + k),
            (L[h + 3] = $[p] + k),
            (L[h + 4] = M[p + 1] + k),
            (L[h + 5] = $[p + 1] + k),
            (D.faceidx += 6);
        }
        if (c) {
          var I,
            F,
            O,
            R,
            N,
            P,
            V,
            B,
            U,
            j,
            G,
            H,
            q,
            W,
            Y,
            X,
            Z,
            Q,
            K,
            J,
            ee,
            te,
            re,
            ne,
            ie,
            oe,
            ae,
            se,
            le,
            ce,
            ue,
            de,
            he = s ? b + 1 : b / 2 + 1;
          for (m = l ? 0 : b / 2; m < he; m++)
            if (m !== b / 2) {
              var pe = m <= b / 2 ? n : t,
                fe = i.getVerticesForRadius(o, l, "to"),
                me = i.getVerticesForRadius(o, s, "from");
              for (
                pe === n
                  ? ((C = fe.vertices), (S = fe.normals), (A = fe.verticesRows))
                  : pe == t &&
                    ((C = me.vertices),
                    (S = me.normals),
                    (A = me.verticesRows)),
                  f = 0;
                f < x;
                f++
              )
                (h = D.faceidx),
                  (le = 3 * ((I = A[m][f + 1]) + k)),
                  (ce = 3 * ((F = A[m][f]) + k)),
                  (ue = 3 * ((O = A[m + 1][f]) + k)),
                  (de = 3 * ((R = A[m + 1][f + 1]) + k)),
                  (N = v[0] * C[I].x + v[3] * C[I].y + v[6] * C[I].z),
                  (P = v[0] * C[F].x + v[3] * C[F].y + v[6] * C[F].z),
                  (V = v[0] * C[O].x + v[3] * C[O].y + v[6] * C[O].z),
                  (B = v[0] * C[R].x + v[3] * C[R].y + v[6] * C[R].z),
                  (U = v[1] * C[I].x + v[4] * C[I].y + v[7] * C[I].z),
                  (j = v[1] * C[F].x + v[4] * C[F].y + v[7] * C[F].z),
                  (G = v[1] * C[O].x + v[4] * C[O].y + v[7] * C[O].z),
                  (H = v[1] * C[R].x + v[4] * C[R].y + v[7] * C[R].z),
                  (q = v[5] * C[I].y + v[8] * C[I].z),
                  (W = v[5] * C[F].y + v[8] * C[F].z),
                  (Y = v[5] * C[O].y + v[8] * C[O].z),
                  (X = v[5] * C[R].y + v[8] * C[R].z),
                  (z[le] = N + pe.x),
                  (z[ce] = P + pe.x),
                  (z[ue] = V + pe.x),
                  (z[de] = B + pe.x),
                  (z[le + 1] = U + pe.y),
                  (z[ce + 1] = j + pe.y),
                  (z[ue + 1] = G + pe.y),
                  (z[de + 1] = H + pe.y),
                  (z[le + 2] = q + pe.z),
                  (z[ce + 2] = W + pe.z),
                  (z[ue + 2] = Y + pe.z),
                  (z[de + 2] = X + pe.z),
                  (T[le] = a.r),
                  (T[ce] = a.r),
                  (T[ue] = a.r),
                  (T[de] = a.r),
                  (T[le + 1] = a.g),
                  (T[ce + 1] = a.g),
                  (T[ue + 1] = a.g),
                  (T[de + 1] = a.g),
                  (T[le + 2] = a.b),
                  (T[ce + 2] = a.b),
                  (T[ue + 2] = a.b),
                  (T[de + 2] = a.b),
                  (Z = v[0] * S[I].x + v[3] * S[I].y + v[6] * S[I].z),
                  (Q = v[0] * S[F].x + v[3] * S[F].y + v[6] * S[F].z),
                  (K = v[0] * S[O].x + v[3] * S[O].y + v[6] * S[O].z),
                  (J = v[0] * S[R].x + v[3] * S[R].y + v[6] * S[R].z),
                  (ee = v[1] * S[I].x + v[4] * S[I].y + v[7] * S[I].z),
                  (te = v[1] * S[F].x + v[4] * S[F].y + v[7] * S[F].z),
                  (re = v[1] * S[O].x + v[4] * S[O].y + v[7] * S[O].z),
                  (ne = v[1] * S[R].x + v[4] * S[R].y + v[7] * S[R].z),
                  (ie = v[5] * S[I].y + v[8] * S[I].z),
                  (oe = v[5] * S[F].y + v[8] * S[F].z),
                  (ae = v[5] * S[O].y + v[8] * S[O].z),
                  (se = v[5] * S[R].y + v[8] * S[R].z),
                  0 === m
                    ? ((_[le] = Z),
                      (_[ue] = K),
                      (_[de] = J),
                      (_[le + 1] = ee),
                      (_[ue + 1] = re),
                      (_[de + 1] = ne),
                      (_[le + 2] = ie),
                      (_[ue + 2] = ae),
                      (_[de + 2] = se),
                      (L[h] = I + k),
                      (L[h + 1] = O + k),
                      (L[h + 2] = R + k),
                      (D.faceidx += 3))
                    : m === he - 1
                    ? ((_[le] = Z),
                      (_[ce] = Q),
                      (_[ue] = K),
                      (_[le + 1] = ee),
                      (_[ce + 1] = te),
                      (_[ue + 1] = re),
                      (_[le + 2] = ie),
                      (_[ce + 2] = oe),
                      (_[ue + 2] = ae),
                      (L[h] = I + k),
                      (L[h + 1] = F + k),
                      (L[h + 2] = O + k),
                      (D.faceidx += 3))
                    : ((_[le] = Z),
                      (_[ce] = Q),
                      (_[de] = J),
                      (_[le + 1] = ee),
                      (_[ce + 1] = te),
                      (_[de + 1] = ne),
                      (_[le + 2] = ie),
                      (_[ce + 2] = oe),
                      (_[de + 2] = se),
                      (_[ce] = Q),
                      (_[ue] = K),
                      (_[de] = J),
                      (_[ce + 1] = te),
                      (_[ue + 1] = re),
                      (_[de + 1] = ne),
                      (_[ce + 2] = oe),
                      (_[ue + 2] = ae),
                      (_[de + 2] = se),
                      (L[h] = I + k),
                      (L[h + 1] = F + k),
                      (L[h + 2] = R + k),
                      (L[h + 3] = F + k),
                      (L[h + 4] = O + k),
                      (L[h + 5] = R + k),
                      (D.faceidx += 6));
            }
        }
        D.vertices += w;
      }
    }),
      (t.drawCone = function (e, t, i, o, a) {
        if (t && i) {
          a = a || { r: 0, g: 0, b: 0 };
          var s = [i.x, i.y, i.z];
          (s.x -= t.x), (s.y -= t.y), (s.z -= t.z);
          var l,
            c,
            u,
            d,
            h,
            p,
            f = r(s),
            m = n.length,
            g = n,
            v = m + 2,
            y = e.updateGeoGroup(v),
            x = y.vertices,
            b = y.vertexArray,
            w = y.normalArray,
            D = y.colorArray,
            C = y.faceArray;
          l = 3 * x;
          var S = new $3Dmol.Vector3(s[0], s[1], s[2]).normalize();
          for (
            b[l] = t.x,
              b[l + 1] = t.y,
              b[l + 2] = t.z,
              w[l] = -S.x,
              w[l + 1] = -S.y,
              w[l + 2] = -S.z,
              D[l] = a.r,
              D[l + 1] = a.g,
              D[l + 2] = a.b,
              b[l + 3] = i.x,
              b[l + 4] = i.y,
              b[l + 5] = i.z,
              w[l + 3] = S.x,
              w[l + 4] = S.y,
              w[l + 5] = S.z,
              D[l + 3] = a.r,
              D[l + 4] = a.g,
              D[l + 5] = a.b,
              l += 6,
              u = 0;
            u < m;
            ++u
          ) {
            var A = g[u].clone();
            A.multiplyScalar(o),
              (d = f[0] * A.x + f[3] * A.y + f[6] * A.z),
              (h = f[1] * A.x + f[4] * A.y + f[7] * A.z),
              (p = f[5] * A.y + f[8] * A.z),
              (b[l] = d + t.x),
              (b[l + 1] = h + t.y),
              (b[l + 2] = p + t.z),
              (w[l] = d),
              (w[l + 1] = h),
              (w[l + 2] = p),
              (D[l] = a.r),
              (D[l + 1] = a.g),
              (D[l + 2] = a.b),
              (l += 3);
          }
          for (y.vertices += m + 2, c = y.faceidx, u = 0; u < m; u++) {
            var $ = x + 2 + u,
              M = x + 2 + ((u + 1) % m);
            (C[c] = $),
              (C[c + 1] = M),
              (C[c + 2] = x),
              (C[(c += 3)] = $),
              (C[c + 1] = M),
              (C[c + 2] = x + 1),
              (c += 3);
          }
          y.faceidx += 6 * m;
        }
      });
    var o = {
      cache: {},
      getVerticesForRadius: function (e) {
        if (void 0 !== this.cache[e]) return this.cache[e];
        var t = { vertices: [], verticesRows: [], normals: [] },
          r = 16,
          n = 10;
        e < 1 && ((r = 10), (n = 8));
        var i,
          o,
          a = 2 * Math.PI,
          s = Math.PI;
        for (o = 0; o <= n; o++) {
          var l = [];
          for (i = 0; i <= r; i++) {
            var c = i / r,
              u = o / n,
              d = {};
            (d.x = -e * Math.cos(0 + c * a) * Math.sin(0 + u * s)),
              (d.y = e * Math.cos(0 + u * s)),
              (d.z = e * Math.sin(0 + c * a) * Math.sin(0 + u * s));
            var h = new $3Dmol.Vector3(d.x, d.y, d.z);
            h.normalize(),
              t.vertices.push(d),
              t.normals.push(h),
              l.push(t.vertices.length - 1);
          }
          t.verticesRows.push(l);
        }
        return (this.cache[e] = t), t;
      },
    };
    return (
      (t.drawSphere = function (e, t, r, n) {
        for (
          var i,
            a,
            s = o.getVerticesForRadius(r),
            l = s.vertices,
            c = s.normals,
            u = e.updateGeoGroup(l.length),
            d = u.vertices,
            h = u.vertexArray,
            p = u.colorArray,
            f = u.faceArray,
            m = u.lineArray,
            g = u.normalArray,
            v = 0,
            y = l.length;
          v < y;
          ++v
        ) {
          var x = 3 * (d + v),
            b = l[v];
          (h[x] = b.x + t.x),
            (h[x + 1] = b.y + t.y),
            (h[x + 2] = b.z + t.z),
            (p[x] = n.r),
            (p[x + 1] = n.g),
            (p[x + 2] = n.b);
        }
        u.vertices += l.length;
        var w = s.verticesRows,
          D = w.length - 1;
        for (a = 0; a < D; a++) {
          var C = w[a].length - 1;
          for (i = 0; i < C; i++) {
            var S = u.faceidx,
              A = u.lineidx,
              $ = w[a][i + 1] + d,
              M = 3 * $,
              k = w[a][i] + d,
              z = 3 * k,
              _ = w[a + 1][i] + d,
              T = 3 * _,
              L = w[a + 1][i + 1] + d,
              E = 3 * L,
              I = c[$ - d],
              F = c[k - d],
              O = c[_ - d],
              R = c[L - d];
            Math.abs(l[$ - d].y) === r
              ? ((g[M] = I.x),
                (g[T] = O.x),
                (g[E] = R.x),
                (g[M + 1] = I.y),
                (g[T + 1] = O.y),
                (g[E + 1] = R.y),
                (g[M + 2] = I.z),
                (g[T + 2] = O.z),
                (g[E + 2] = R.z),
                (f[S] = $),
                (f[S + 1] = _),
                (f[S + 2] = L),
                (m[A] = $),
                (m[A + 1] = _),
                (m[A + 2] = $),
                (m[A + 3] = L),
                (m[A + 4] = _),
                (m[A + 5] = L),
                (u.faceidx += 3),
                (u.lineidx += 6))
              : Math.abs(l[_ - d].y) === r
              ? ((g[M] = I.x),
                (g[z] = F.x),
                (g[T] = O.x),
                (g[M + 1] = I.y),
                (g[z + 1] = F.y),
                (g[T + 1] = O.y),
                (g[M + 2] = I.z),
                (g[z + 2] = F.z),
                (g[T + 2] = O.z),
                (f[S] = $),
                (f[S + 1] = k),
                (f[S + 2] = _),
                (m[A] = $),
                (m[A + 1] = k),
                (m[A + 2] = $),
                (m[A + 3] = _),
                (m[A + 4] = k),
                (m[A + 5] = _),
                (u.faceidx += 3),
                (u.lineidx += 6))
              : ((g[M] = I.x),
                (g[z] = F.x),
                (g[E] = R.x),
                (g[M + 1] = I.y),
                (g[z + 1] = F.y),
                (g[E + 1] = R.y),
                (g[M + 2] = I.z),
                (g[z + 2] = F.z),
                (g[E + 2] = R.z),
                (g[z] = F.x),
                (g[T] = O.x),
                (g[E] = R.x),
                (g[z + 1] = F.y),
                (g[T + 1] = O.y),
                (g[E + 1] = R.y),
                (g[z + 2] = F.z),
                (g[T + 2] = O.z),
                (g[E + 2] = R.z),
                (f[S] = $),
                (f[S + 1] = k),
                (f[S + 2] = L),
                (f[S + 3] = k),
                (f[S + 4] = _),
                (f[S + 5] = L),
                (m[A] = $),
                (m[A + 1] = k),
                (m[A + 2] = $),
                (m[A + 3] = L),
                (m[A + 4] = k),
                (m[A + 5] = _),
                (m[A + 6] = _),
                (m[A + 7] = L),
                (u.faceidx += 6),
                (u.lineidx += 8));
          }
        }
      }),
      t
    );
  })());
var $3Dmol = $3Dmol || {};
($3Dmol.GLModel = (function () {
  var e = { line: {} },
    t = 1,
    r = {
      H: 1.2,
      He: 1.4,
      Li: 1.82,
      Be: 1.53,
      B: 1.92,
      C: 1.7,
      N: 1.55,
      O: 1.52,
      F: 1.47,
      Ne: 1.54,
      Na: 2.27,
      Mg: 1.73,
      Al: 1.84,
      Si: 2.1,
      P: 1.8,
      S: 1.8,
      Cl: 1.75,
      Ar: 1.88,
      K: 2.75,
      Ca: 2.31,
      Ni: 1.63,
      Cu: 1.4,
      Zn: 1.39,
      Ga: 1.87,
      Ge: 2.11,
      As: 1.85,
      Se: 1.9,
      Br: 1.85,
      Kr: 2.02,
      Rb: 3.03,
      Sr: 2.49,
      Pd: 1.63,
      Ag: 1.72,
      Cd: 1.58,
      In: 1.93,
      Sn: 2.17,
      Sb: 2.06,
      Te: 2.06,
      I: 1.98,
      Xe: 2.16,
      Cs: 3.43,
      Ba: 2.68,
      Pt: 1.75,
      Au: 1.66,
      Hg: 1.55,
      Tl: 1.96,
      Pb: 2.02,
      Bi: 2.07,
      Po: 1.97,
      At: 2.02,
      Rn: 2.2,
      Fr: 3.48,
      Ra: 2.83,
      U: 1.86,
    };
  (s.validElements = [
    "H",
    "Li",
    "LI",
    "Na",
    "NA",
    "K",
    "C",
    "N",
    "O",
    "F",
    "P",
    "S",
    "CL",
    "Cl",
    "BR",
    "Br",
    "SE",
    "Se",
    "ZN",
    "Zn",
    "CU",
    "Cu",
    "NI",
    "Ni",
  ]),
    (s.validAtomSpecs = {
      resn: { type: "string", valid: !0, prop: !0, gui: !0 },
      x: { type: "number", floatType: !0, valid: !1, step: 0.1, prop: !0 },
      y: { type: "number", floatType: !0, valid: !1, step: 0.1, prop: !0 },
      z: { type: "number", floatType: !0, valid: !1, step: 0.1, prop: !0 },
      color: { type: "color", gui: !1 },
      surfaceColor: { type: "color", gui: !1 },
      elem: { type: "element", gui: !0, prop: !0 },
      hetflag: { type: "boolean", valid: !1, gui: !0 },
      chain: { type: "string", gui: !0, prop: !0 },
      resi: { type: "array_range", gui: !0 },
      icode: { type: "number", valid: !1, step: 0.1 },
      rescode: { type: "number", valid: !1, step: 0.1, prop: !0 },
      serial: { type: "number", valid: !1, step: 0.1 },
      atom: { type: "string", valid: !1, gui: !0, prop: !0 },
      bonds: { type: "array", valid: !1 },
      ss: { type: "string", valid: !1 },
      singleBonds: { type: "boolean", valid: !1 },
      bondOrder: { type: "array", valid: !1 },
      properties: { type: "properties", valid: !1 },
      b: { type: "number", floatType: !0, valid: !1, step: 0.1, prop: !0 },
      pdbline: { type: "string", valid: !1 },
      clickable: { type: "boolean", valid: !1, gui: !1 },
      contextMenuEnabled: { type: "boolean", valid: !1, gui: !1 },
      callback: { type: "function", valid: !1 },
      invert: { type: "boolean", valid: !1 },
      reflectivity: { type: "number", floatType: !0, gui: !1, step: 0.1 },
      altLoc: { type: "invalid", valid: !1 },
      sym: { type: "number", gui: !1 },
    });
  s.validAtomSelectionSpecs = $3Dmol.extend(s.validAtomSpecs, {
    model: { type: "string", valid: !1 },
    bonds: { type: "number", valid: !1, gui: !0 },
    predicate: { type: "string", valid: !1 },
    invert: { type: "boolean", valid: !1, gui: !0 },
    byres: { type: "boolean", valid: !1, gui: !0 },
    expand: { type: "number", valid: !1, gui: !1 },
    within: { type: "string", valid: !1 },
    and: { type: "string", valid: !1 },
    or: { type: "string", valid: !1 },
    not: { type: "string", valid: !1 },
  });
  var n = {
      hidden: { type: "boolean", gui: !0 },
      linewidth: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: t,
      },
      colorscheme: { type: "colorscheme", gui: !0 },
      color: { type: "color", gui: !0 },
      opacity: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0,
        max: 1,
      },
    },
    i = {
      hidden: { type: "boolean", gui: !0 },
      linewidth: {
        type: "number",
        floatType: !0,
        gui: !1,
        step: 0.1,
        default: t,
        min: 0,
      },
      colorscheme: { type: "colorscheme", gui: !0 },
      color: { type: "color", gui: !0 },
      radius: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0.1,
      },
      scale: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0,
      },
      opacity: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0,
        max: 1,
      },
    },
    o = {
      hidden: { type: "boolean", gui: !1 },
      singleBonds: { type: "boolean", gui: !0 },
      colorscheme: { type: "colorscheme", gui: !0 },
      color: { type: "color", gui: !0 },
      radius: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1.5,
        min: 0,
      },
      scale: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0.1,
      },
      opacity: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0,
        max: 1,
      },
    };
  (s.validAtomStyleSpecs = {
    line: { validItems: n, type: "form", gui: !0 },
    cross: { validItems: i, type: "form", gui: !0 },
    stick: {
      validItems: {
        hidden: { type: "boolean", gui: !0 },
        colorscheme: { type: "colorscheme", gui: !0 },
        color: { type: "color", gui: !0 },
        radius: {
          type: "number",
          floatType: !0,
          gui: !0,
          step: 0.1,
          default: 0.25,
          min: 0.1,
        },
        singleBonds: { type: "boolean", gui: !0 },
        opacity: {
          type: "number",
          floatType: !0,
          gui: !0,
          step: 0.1,
          default: 1,
          min: 0,
          max: 1,
        },
      },
      type: "form",
      gui: !0,
    },
    sphere: { validItems: o, type: "form", gui: !0 },
    cartoon: {
      validItems: {
        style: {
          validItems: ["trace", "oval", "rectangle", "parabola", "edged"],
          gui: !0,
        },
        color: { type: "color", gui: !0, spectrum: !0 },
        arrows: { type: "boolean", gui: !0 },
        ribbon: { type: "boolean", gui: !0 },
        hidden: { type: "boolean", gui: !0 },
        tubes: { type: "boolean", gui: !0 },
        thickness: {
          type: "number",
          floatType: !0,
          gui: !0,
          step: 0.1,
          default: 1,
          min: 0,
        },
        width: {
          type: "number",
          floatType: !0,
          gui: !0,
          step: 0.1,
          default: 1,
          min: 0,
        },
        opacity: {
          type: "number",
          floatType: !0,
          gui: !0,
          step: 0.1,
          default: 1,
          min: 0,
          max: 1,
        },
      },
      type: "form",
      gui: !0,
    },
    colorfunc: { validItems: null, type: "js", valid: !1 },
    clicksphere: { validItems: o, type: "form" },
  }),
    (s.validSurfaceSpecs = {
      opacity: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.01,
        default: 1,
        min: 0,
        max: 1,
      },
      colorscheme: { type: "colorscheme", gui: !0 },
      color: { type: "color", gui: !0 },
      voldata: { type: "number", floatType: !0, gui: !1 },
      volscheme: { type: "number", floatType: !0, gui: !1 },
      map: { type: "number", gui: !1 },
    }),
    (s.validLabelResSpecs = {
      font: { type: "string", gui: !0 },
      fontSize: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 1,
        default: 12,
        min: 1,
      },
      fontColor: { type: "color", gui: !0 },
      fontOpacity: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0,
        max: 1,
      },
      borderThickness: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0,
      },
      borderColor: { type: "color", gui: !0 },
      borderOpacity: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0,
        max: 1,
      },
      backgroundColor: { type: "color", gui: !0 },
      backgroundOpacity: {
        type: "number",
        floatType: !0,
        gui: !0,
        step: 0.1,
        default: 1,
        min: 0,
        max: 1,
      },
      position: { type: "array", valid: !1 },
      inFront: { type: "boolean", gui: !0 },
      showBackground: { type: "boolean", gui: !0 },
      fixed: { type: "boolean", gui: !0 },
      alignment: {
        validItems: [
          "topLeft",
          "topCenter",
          "topRight",
          "centerLeft",
          "center",
          "centerRight",
          "bottomLeft",
          "bottomCenter",
          "bottomRight",
        ],
        gui: !0,
      },
      scale: { type: "boolean", gui: !1 },
    });
  var a = function (e, t) {
    return e && t ? JSON.stringify(e) == JSON.stringify(t) : e == t;
  };
  function s(n, i) {
    var o = [],
      l = [],
      c = null,
      u = null,
      d = n,
      h = !1,
      p = null,
      f = null,
      m = null,
      g = {},
      v = null,
      y = new $3Dmol.Matrix4(),
      x = !0,
      b = $3Dmol.elementColors.defaultColor,
      w = (i = i || {}).defaultcolors
        ? i.defaultcolors
        : $3Dmol.elementColors.defaultColors,
      D = i.defaultSphereRadius ? i.defaultSphereRadius : 1.5,
      C = i.cartoonQuality ? i.cartoonQuality : 5,
      S = function (e, t) {
        var n = D;
        if (void 0 !== t.radius) n = t.radius;
        else if (r[e.elem]) n = r[e.elem];
        else if (e.elem.length > 1) {
          let t = e.elem;
          (t[1] = t[1].toLowerCase()), r[t] && (n = r[t]);
        }
        return void 0 !== t.scale && (n *= t.scale), n;
      },
      A = function (e, r) {
        if (e.style.cross) {
          var n = e.style.cross;
          if (!n.hidden) {
            var i = n.linewidth || t;
            r[i] || (r[i] = new $3Dmol.Geometry());
            var o = r[i].updateGeoGroup(6),
              a = S(e, n),
              s = [
                [a, 0, 0],
                [-a, 0, 0],
                [0, a, 0],
                [0, -a, 0],
                [0, 0, a],
                [0, 0, -a],
              ],
              l = e.clickable || e.hoverable;
            l &&
              void 0 === e.intersectionShape &&
              (e.intersectionShape = { sphere: [], cylinder: [], line: [] });
            for (
              var c = $3Dmol.getColorFromStyle(e, n),
                u = o.vertexArray,
                d = o.colorArray,
                h = 0;
              h < 6;
              h++
            ) {
              var p = 3 * o.vertices;
              if (
                (o.vertices++,
                (u[p] = e.x + s[h][0]),
                (u[p + 1] = e.y + s[h][1]),
                (u[p + 2] = e.z + s[h][2]),
                (d[p] = c.r),
                (d[p + 1] = c.g),
                (d[p + 2] = c.b),
                l)
              ) {
                var f = new $3Dmol.Vector3(s[h][0], s[h][1], s[h][2]);
                f.multiplyScalar(0.1),
                  f.set(f.x + e.x, f.y + e.y, f.z + e.z),
                  e.intersectionShape.line.push(f);
              }
            }
          }
        }
      },
      M = function (e, t, r) {
        var n,
          i,
          a,
          s,
          l,
          c = new $3Dmol.Vector3(e.x, e.y, e.z),
          u = new $3Dmol.Vector3(t.x, t.y, t.z).clone(),
          d = null;
        u.sub(c);
        var h = function (e, t) {
          for (var r = null, n = -1, h = 0, p = e.bonds.length; h < p; h++)
            if (e.bonds[h] != t.index) {
              (i = e.bonds[h]),
                (a = o[i]),
                (s = new $3Dmol.Vector3(a.x, a.y, a.z)),
                (l = s.clone()).sub(c),
                (d = l.clone()).cross(u);
              var f = d.lengthSq();
              if (f > n && ((r = d), (n = f) > 0.1)) return r;
            }
          return r;
        };
        if (1 === e.bonds.length)
          1 === t.bonds.length
            ? ((d = u.clone()), Math.abs(d.x) > 1e-4 ? (d.y += 1) : (d.x += 1))
            : ((n = (r + 1) % t.bonds.length),
              (i = t.bonds[n]),
              (a = o[i]),
              (s = new $3Dmol.Vector3(a.x, a.y, a.z)),
              (l = s.clone()).sub(c),
              (d = l.clone()).cross(u));
        else if ((d = h(e, t)).lengthSq() < 0.01) {
          var p = h(t, e);
          null != p && (d = p);
        }
        return (
          d.lengthSq() < 0.01 &&
            ((d = u.clone()), Math.abs(d.x) > 1e-4 ? (d.y += 1) : (d.x += 1)),
          d.cross(u),
          d.normalize(),
          d
        );
      },
      k = function (e, t, r, n, i, o) {
        (e[r] = n.x),
          (e[r + 1] = n.y),
          (e[r + 2] = n.z),
          (t[r] = o.r),
          (t[r + 1] = o.g),
          (t[r + 2] = o.b),
          (e[r + 3] = i.x),
          (e[r + 4] = i.y),
          (e[r + 5] = i.z),
          (t[r + 3] = o.r),
          (t[r + 4] = o.g),
          (t[r + 5] = o.b);
      },
      z = function (e, r, n) {
        if (e.style.line) {
          var i = e.style.line;
          if (!i.hidden) {
            var o,
              a,
              s,
              l,
              c = i.linewidth || t;
            n[c] || (n[c] = new $3Dmol.Geometry());
            for (
              var u = n[c].updateGeoGroup(6 * e.bonds.length),
                d = u.vertexArray,
                h = u.colorArray,
                p = 0;
              p < e.bonds.length;
              p++
            ) {
              var f = r[e.bonds[p]];
              if (f.style.line && !(e.index >= f.index)) {
                var m = new $3Dmol.Vector3(e.x, e.y, e.z),
                  g = new $3Dmol.Vector3(f.x, f.y, f.z),
                  v = m.clone().add(g).multiplyScalar(0.5),
                  y = !1,
                  x = e.clickable || e.hoverable,
                  b = f.clickable || f.hoverable;
                (x || b) &&
                  (x &&
                    (void 0 === e.intersectionShape &&
                      (e.intersectionShape = {
                        sphere: [],
                        cylinder: [],
                        line: [],
                        triangle: [],
                      }),
                    e.intersectionShape.line.push(m),
                    e.intersectionShape.line.push(v)),
                  b &&
                    (void 0 === f.intersectionShape &&
                      (f.intersectionShape = {
                        sphere: [],
                        cylinder: [],
                        line: [],
                        triangle: [],
                      }),
                    f.intersectionShape.line.push(v),
                    f.intersectionShape.line.push(g)));
                var w = $3Dmol.getColorFromStyle(e, e.style.line),
                  D = $3Dmol.getColorFromStyle(f, f.style.line);
                if (e.bondStyles && e.bondStyles[p]) {
                  var C = e.bondStyles[p];
                  if (!C.iswire) continue;
                  C.singleBond && (y = !0),
                    void 0 !== C.color1 && (w = $3Dmol.CC.color(C.color1)),
                    void 0 !== C.color2 && (D = $3Dmol.CC.color(C.color2));
                }
                var S,
                  A,
                  $ = 3 * u.vertices;
                if (e.bondOrder[p] > 1 && e.bondOrder[p] < 4 && !y) {
                  var z = M(e, f, p),
                    _ = g.clone();
                  _.sub(m),
                    2 == e.bondOrder[p]
                      ? (z.multiplyScalar(0.1),
                        (o = m.clone()).add(z),
                        (a = m.clone()).sub(z),
                        (s = o.clone()).add(_),
                        (l = a.clone()).add(_),
                        w == D
                          ? ((u.vertices += 4),
                            k(d, h, $, o, s, w),
                            k(d, h, $ + 6, a, l, w))
                          : ((u.vertices += 8),
                            _.multiplyScalar(0.5),
                            (S = o.clone()).add(_),
                            (A = a.clone()).add(_),
                            k(d, h, $, o, S, w),
                            k(d, h, $ + 6, S, s, D),
                            k(d, h, $ + 12, a, A, w),
                            k(d, h, $ + 18, A, l, D)))
                      : 3 == e.bondOrder[p] &&
                        (z.multiplyScalar(0.1),
                        (o = m.clone()).add(z),
                        (a = m.clone()).sub(z),
                        (s = o.clone()).add(_),
                        (l = a.clone()).add(_),
                        w == D
                          ? ((u.vertices += 6),
                            k(d, h, $, m, g, w),
                            k(d, h, $ + 6, o, s, w),
                            k(d, h, $ + 12, a, l, w))
                          : ((u.vertices += 12),
                            _.multiplyScalar(0.5),
                            (S = o.clone()).add(_),
                            (A = a.clone()).add(_),
                            k(d, h, $, m, v, w),
                            k(d, h, $ + 6, v, g, D),
                            k(d, h, $ + 12, o, S, w),
                            k(d, h, $ + 18, S, s, D),
                            k(d, h, $ + 24, a, A, w),
                            k(d, h, $ + 30, A, l, D)));
                } else
                  w == D
                    ? ((u.vertices += 2), k(d, h, $, m, g, w))
                    : ((u.vertices += 4),
                      k(d, h, $, m, v, w),
                      k(d, h, $ + 6, v, g, D));
              }
            }
          }
        }
      },
      _ = function (e, t) {
        if (e.style.sphere) {
          var r = e.style.sphere;
          if (!r.hidden) {
            var n = $3Dmol.getColorFromStyle(e, r),
              i = S(e, r);
            if (
              (!0 === e.clickable || e.hoverable) &&
              void 0 !== e.intersectionShape
            ) {
              var o = new $3Dmol.Vector3(e.x, e.y, e.z);
              e.intersectionShape.sphere.push(new $3Dmol.Sphere(o, i));
            }
            $3Dmol.GLDraw.drawSphere(t, e, i, n);
          }
        }
      },
      T = function (e) {
        if (e.style.clicksphere) {
          var t = e.style.clicksphere;
          if (!t.hidden) {
            var r = S(e, t);
            if (
              (!0 === e.clickable || e.hoverable) &&
              void 0 !== e.intersectionShape
            ) {
              var n = new $3Dmol.Vector3(e.x, e.y, e.z);
              e.intersectionShape.sphere.push(new $3Dmol.Sphere(n, r));
            }
          }
        }
      },
      L = function (e, t) {
        if (e.style.sphere) {
          var r = e.style.sphere;
          if (!r.hidden) {
            var n = S(e, r),
              i = $3Dmol.getColorFromStyle(e, r),
              o = t.updateGeoGroup(1),
              a = o.vertices,
              s = 3 * a,
              l = o.vertexArray,
              c = o.colorArray,
              u = o.radiusArray;
            if (
              ((l[s] = e.x),
              (l[s + 1] = e.y),
              (l[s + 2] = e.z),
              (c[s] = i.r),
              (c[s + 1] = i.g),
              (c[s + 2] = i.b),
              (u[a] = n),
              (!0 === e.clickable || e.hoverable) &&
                void 0 !== e.intersectionShape)
            ) {
              var d = new $3Dmol.Vector3(e.x, e.y, e.z);
              e.intersectionShape.sphere.push(new $3Dmol.Sphere(d, n));
            }
            o.vertices += 1;
          }
        }
      },
      E = function (e, t, r, n) {
        var i,
          o = e.updateGeoGroup(4),
          a = o.vertices,
          s = 3 * a,
          l = o.vertexArray,
          c = o.colorArray;
        for (i = 0; i < 4; i++)
          (l[s + 3 * i] = t.x),
            (l[s + 3 * i + 1] = t.y),
            (l[s + 3 * i + 2] = t.z);
        var u = o.normalArray;
        for (i = 0; i < 4; i++)
          (c[s + 3 * i] = n.r),
            (c[s + 3 * i + 1] = n.g),
            (c[s + 3 * i + 2] = n.b);
        (u[s + 0] = -r),
          (u[s + 1] = r),
          (u[s + 2] = 0),
          (u[s + 3] = -r),
          (u[s + 4] = -r),
          (u[s + 5] = 0),
          (u[s + 6] = r),
          (u[s + 7] = -r),
          (u[s + 8] = 0),
          (u[s + 9] = r),
          (u[s + 10] = r),
          (u[s + 11] = 0),
          (o.vertices += 4);
        var d = o.faceArray,
          h = o.faceidx;
        (d[h + 0] = a),
          (d[h + 1] = a + 1),
          (d[h + 2] = a + 2),
          (d[h + 3] = a + 2),
          (d[h + 4] = a + 3),
          (d[h + 5] = a),
          (o.faceidx += 6);
      },
      I = function (e, t) {
        if (e.style.sphere) {
          var r = e.style.sphere;
          if (!r.hidden) {
            var n = S(e, r),
              i = $3Dmol.getColorFromStyle(e, r);
            if (
              (!0 === e.clickable || e.hoverable) &&
              void 0 !== e.intersectionShape
            ) {
              var o = new $3Dmol.Vector3(e.x, e.y, e.z);
              e.intersectionShape.sphere.push(new $3Dmol.Sphere(o, n));
            }
            E(t, e, n, i);
          }
        }
      },
      F = function (e, t, r, n, i) {
        for (
          var o,
            a = e.updateGeoGroup(4),
            s = a.vertices,
            l = 3 * s,
            c = a.vertexArray,
            u = a.colorArray,
            d = a.radiusArray,
            h = a.normalArray,
            p = i.r,
            f = i.g,
            m = i.b,
            g = l,
            v = 0;
          v < 4;
          v++
        )
          (c[g] = t.x),
            (h[g] = r.x),
            (u[g] = p),
            (c[++g] = t.y),
            (h[g] = r.y),
            (u[g] = f),
            (c[++g] = t.z),
            (h[g] = r.z),
            (u[g] =
              v < 2 ? m : ((o = void 0), 0 == (o = -m) && (o = -1e-4), o)),
            g++;
        (a.vertices += 4),
          (d[s] = -n),
          (d[s + 1] = n),
          (d[s + 2] = -n),
          (d[s + 3] = n);
        var y = a.faceArray,
          x = a.faceidx;
        (y[x + 0] = s),
          (y[x + 1] = s + 1),
          (y[x + 2] = s + 2),
          (y[x + 3] = s + 2),
          (y[x + 4] = s + 3),
          (y[x + 5] = s),
          (a.faceidx += 6);
      },
      O = function (e, t, r) {
        if (e.style.stick) {
          var n = e.style.stick;
          if (!n.hidden) {
            var i,
              o,
              a,
              s,
              l,
              c,
              u,
              d,
              h,
              p,
              f,
              m,
              g,
              v,
              y = n.radius || 0.25,
              x = y,
              b = n.singleBonds || !1,
              w = 0,
              D = 0,
              C = $3Dmol.getColorFromStyle(e, n);
            !e.capDrawn && e.bonds.length < 4 && (w = 2);
            var S = $3Dmol.GLDraw.drawCylinder;
            for (r.imposter && (S = F), a = 0; a < e.bonds.length; a++) {
              var A = t[e.bonds[a]];
              if (((m = g = v = null), e.index < A.index)) {
                var $ = A.style;
                if (!$.stick || $.stick.hidden) continue;
                var k = $3Dmol.getColorFromStyle(A, $.stick);
                if (((x = y), (s = b), e.bondStyles && e.bondStyles[a])) {
                  if ((l = e.bondStyles[a]).iswire) continue;
                  l.radius && (x = l.radius),
                    l.singleBond && (s = !0),
                    void 0 !== l.color1 && (C = $3Dmol.CC.color(l.color1)),
                    void 0 !== l.color2 && (k = $3Dmol.CC.color(l.color2));
                }
                var z = new $3Dmol.Vector3(e.x, e.y, e.z),
                  _ = new $3Dmol.Vector3(A.x, A.y, A.z);
                if (1 === e.bondOrder[a] || s || e.bondOrder[a] > 3) {
                  if (
                    (!A.capDrawn && A.bonds.length < 4 && (D = 2),
                    C != k
                      ? (S(
                          r,
                          z,
                          (m = new $3Dmol.Vector3()
                            .addVectors(z, _)
                            .multiplyScalar(0.5)),
                          x,
                          C,
                          w,
                          0
                        ),
                        S(r, m, _, x, k, 0, D))
                      : S(r, z, _, x, C, w, D),
                    (i = e.clickable || e.hoverable),
                    (o = A.clickable || A.hoverable),
                    i || o)
                  ) {
                    if (
                      (m ||
                        (m = new $3Dmol.Vector3()
                          .addVectors(z, _)
                          .multiplyScalar(0.5)),
                      i)
                    ) {
                      var T = new $3Dmol.Cylinder(z, m, x),
                        L = new $3Dmol.Sphere(z, x);
                      e.intersectionShape.cylinder.push(T),
                        e.intersectionShape.sphere.push(L);
                    }
                    if (o) {
                      var I = new $3Dmol.Cylinder(_, m, x),
                        O = new $3Dmol.Sphere(_, x);
                      A.intersectionShape.cylinder.push(I),
                        A.intersectionShape.sphere.push(O);
                    }
                  }
                } else if (e.bondOrder[a] > 1) {
                  var R = 0,
                    N = 0;
                  x != y && ((R = 2), (N = 2));
                  var P,
                    V,
                    B,
                    U,
                    j,
                    G = _.clone(),
                    H = null;
                  G.sub(z),
                    (H = M(e, A, a)),
                    2 == e.bondOrder[a]
                      ? ((P = x / 2.5),
                        H.multiplyScalar(1.5 * P),
                        (V = z.clone()).add(H),
                        (B = z.clone()).sub(H),
                        (U = V.clone()).add(G),
                        (j = B.clone()).add(G),
                        C != k
                          ? ((m = new $3Dmol.Vector3()
                              .addVectors(V, U)
                              .multiplyScalar(0.5)),
                            (g = new $3Dmol.Vector3()
                              .addVectors(B, j)
                              .multiplyScalar(0.5)),
                            S(r, V, m, P, C, R, 0),
                            S(r, m, U, P, k, 0, N),
                            S(r, B, g, P, C, R, 0),
                            S(r, g, j, P, k, 0, N))
                          : (S(r, V, U, P, C, R, N), S(r, B, j, P, C, R, N)),
                        (i = e.clickable || e.hoverable),
                        (o = A.clickable || A.hoverable),
                        (i || o) &&
                          (m ||
                            (m = new $3Dmol.Vector3()
                              .addVectors(V, U)
                              .multiplyScalar(0.5)),
                          g ||
                            (g = new $3Dmol.Vector3()
                              .addVectors(B, j)
                              .multiplyScalar(0.5)),
                          i &&
                            ((c = new $3Dmol.Cylinder(V, m, P)),
                            (u = new $3Dmol.Cylinder(B, g, P)),
                            e.intersectionShape.cylinder.push(c),
                            e.intersectionShape.cylinder.push(u)),
                          o &&
                            ((h = new $3Dmol.Cylinder(U, m, P)),
                            (p = new $3Dmol.Cylinder(j, g, P)),
                            A.intersectionShape.cylinder.push(h),
                            A.intersectionShape.cylinder.push(p))))
                      : 3 == e.bondOrder[a] &&
                        ((P = x / 4),
                        H.cross(G),
                        H.normalize(),
                        H.multiplyScalar(3 * P),
                        (V = z.clone()).add(H),
                        (B = z.clone()).sub(H),
                        (U = V.clone()).add(G),
                        (j = B.clone()).add(G),
                        C != k
                          ? ((m = new $3Dmol.Vector3()
                              .addVectors(V, U)
                              .multiplyScalar(0.5)),
                            (g = new $3Dmol.Vector3()
                              .addVectors(B, j)
                              .multiplyScalar(0.5)),
                            (v = new $3Dmol.Vector3()
                              .addVectors(z, _)
                              .multiplyScalar(0.5)),
                            S(r, V, m, P, C, R, 0),
                            S(r, m, U, P, k, 0, N),
                            S(r, z, v, P, C, w, 0),
                            S(r, v, _, P, k, 0, D),
                            S(r, B, g, P, C, R, 0),
                            S(r, g, j, P, k, 0, N))
                          : (S(r, V, U, P, C, R, N),
                            S(r, z, _, P, C, w, D),
                            S(r, B, j, P, C, R, N)),
                        (i = e.clickable || e.hoverable),
                        (o = A.clickable || A.hoverable),
                        (i || o) &&
                          (m ||
                            (m = new $3Dmol.Vector3()
                              .addVectors(V, U)
                              .multiplyScalar(0.5)),
                          g ||
                            (g = new $3Dmol.Vector3()
                              .addVectors(B, j)
                              .multiplyScalar(0.5)),
                          v ||
                            (v = new $3Dmol.Vector3()
                              .addVectors(z, _)
                              .multiplyScalar(0.5)),
                          i &&
                            ((c = new $3Dmol.Cylinder(V.clone(), m.clone(), P)),
                            (u = new $3Dmol.Cylinder(B.clone(), g.clone(), P)),
                            (d = new $3Dmol.Cylinder(z.clone(), v.clone(), P)),
                            e.intersectionShape.cylinder.push(c),
                            e.intersectionShape.cylinder.push(u),
                            e.intersectionShape.cylinder.push(d)),
                          o &&
                            ((h = new $3Dmol.Cylinder(U.clone(), m.clone(), P)),
                            (p = new $3Dmol.Cylinder(j.clone(), g.clone(), P)),
                            (f = new $3Dmol.Cylinder(_.clone(), v.clone(), P)),
                            A.intersectionShape.cylinder.push(h),
                            A.intersectionShape.cylinder.push(p),
                            A.intersectionShape.cylinder.push(f))));
                }
              }
            }
            var q = !1,
              W = 0,
              Y = !1;
            for (a = 0; a < e.bonds.length; a++)
              (s = b),
                e.bondStyles &&
                  e.bondStyles[a] &&
                  ((l = e.bondStyles[a]).singleBond && (s = !0),
                  l.radius && l.radius != y && (Y = !0)),
                (s || 1 == e.bondOrder[a]) && W++;
            Y ? W > 0 && (q = !0) : 0 == W && e.bonds.length > 0 && (q = !0),
              q &&
                ((x = y),
                r.imposter
                  ? E(r.sphereGeometry, e, x, C)
                  : $3Dmol.GLDraw.drawSphere(r, e, x, C));
          }
        }
      },
      R = function (e, t) {
        t = t || {};
        var r,
          n,
          i,
          o,
          a = new $3Dmol.Object3D(),
          s = [],
          l = {},
          c = {},
          u = _,
          d = null,
          h = null;
        t.supportsImposters
          ? ((u = I),
            ((d = new $3Dmol.Geometry(!0)).imposter = !0),
            ((h = new $3Dmol.Geometry(!0, !0)).imposter = !0),
            (h.sphereGeometry = new $3Dmol.Geometry(!0)),
            (h.sphereGeometry.imposter = !0),
            (h.drawnCaps = {}))
          : t.supportsAIA
          ? ((u = L),
            ((d = new $3Dmol.Geometry(!1, !0, !0)).instanced = !0),
            (h = new $3Dmol.Geometry(!0)))
          : ((d = new $3Dmol.Geometry(!0)), (h = new $3Dmol.Geometry(!0)));
        var p,
          f = {},
          m = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
        for (r = 0, i = e.length; r < i; r++) {
          var v = e[r];
          if (v && v.style) {
            for (n in ((v.clickable || v.hoverable) &&
              void 0 === v.intersectionShape &&
              (v.intersectionShape = {
                sphere: [],
                cylinder: [],
                line: [],
                triangle: [],
              }),
            (o = {
              line: void 0,
              cross: void 0,
              stick: void 0,
              sphere: void 0,
            })))
              v.style[n]
                ? v.style[n].opacity
                  ? (o[n] = parseFloat(v.style[n].opacity))
                  : (o[n] = 1)
                : (o[n] = void 0),
                f[n]
                  ? null != o[n] &&
                    f[n] != o[n] &&
                    (console.log("Warning: " + n + " opacity is ambiguous"),
                    (f[n] = 1))
                  : (f[n] = o[n]);
            u(v, d),
              T(v),
              A(v, c),
              z(v, e, l),
              O(v, e, h),
              void 0 === v.style.cartoon ||
                v.style.cartoon.hidden ||
                ("spectrum" !== v.style.cartoon.color ||
                  "number" != typeof v.resi ||
                  v.hetflag ||
                  (v.resi < m[0] && (m[0] = v.resi),
                  v.resi > m[1] && (m[1] = v.resi)),
                s.push(v));
          }
        }
        if (
          (s.length > 0 && $3Dmol.drawCartoon(a, s, m, C), d && d.vertices > 0)
        ) {
          d.initTypedArrays();
          var y = null,
            b = null;
          d.imposter
            ? (y = new $3Dmol.SphereImposterMaterial({
                ambient: 0,
                vertexColors: !0,
                reflectivity: 0,
              }))
            : d.instanced
            ? ((b = new $3Dmol.Geometry(!0)),
              $3Dmol.GLDraw.drawSphere(
                b,
                { x: 0, y: 0, z: 0 },
                1,
                new $3Dmol.Color(0.5, 0.5, 0.5)
              ),
              b.initTypedArrays(),
              (y = new $3Dmol.InstancedMaterial({
                sphereMaterial: new $3Dmol.MeshLambertMaterial({
                  ambient: 0,
                  vertexColors: !0,
                  reflectivity: 0,
                }),
                sphere: b,
              })))
            : (y = new $3Dmol.MeshLambertMaterial({
                ambient: 0,
                vertexColors: !0,
                reflectivity: 0,
              })),
            f.sphere < 1 &&
              f.sphere >= 0 &&
              ((y.transparent = !0), (y.opacity = f.sphere)),
            (b = new $3Dmol.Mesh(d, y)),
            a.add(b);
        }
        if (h.vertices > 0) {
          var w = null,
            D = null,
            S = h.sphereGeometry;
          (S && void 0 !== S.vertices && 0 != S.vertices) || (S = null),
            h.initTypedArrays(),
            S && S.initTypedArrays();
          var $ = { ambient: 0, vertexColors: !0, reflectivity: 0 };
          h.imposter
            ? ((w = new $3Dmol.StickImposterMaterial($)),
              (D = new $3Dmol.SphereImposterMaterial($)))
            : ((w = new $3Dmol.MeshLambertMaterial($)),
              (D = new $3Dmol.MeshLambertMaterial($)),
              w.wireframe && (h.setUpWireframe(), S && S.setUpWireframe())),
            f.stick < 1 &&
              f.stick >= 0 &&
              ((w.transparent = !0),
              (w.opacity = f.stick),
              (D.transparent = !0),
              (D.opacity = f.stick));
          var M = new $3Dmol.Mesh(h, w);
          if ((a.add(M), S)) {
            var k = new $3Dmol.Mesh(S, D);
            a.add(k);
          }
        }
        for (r in l)
          if (l.hasOwnProperty(r)) {
            p = r;
            var E = new $3Dmol.LineBasicMaterial({
              linewidth: p,
              vertexColors: !0,
            });
            f.line < 1 &&
              f.line >= 0 &&
              ((E.transparent = !0), (E.opacity = f.line)),
              l[r].initTypedArrays();
            var F = new $3Dmol.Line(l[r], E, $3Dmol.LinePieces);
            a.add(F);
          }
        for (r in c)
          if (c.hasOwnProperty(r)) {
            p = r;
            var R = new $3Dmol.LineBasicMaterial({
              linewidth: p,
              vertexColors: !0,
            });
            f.cross < 1 &&
              f.cross >= 0 &&
              ((R.transparent = !0), (R.opacity = f.cross)),
              c[r].initTypedArrays();
            var N = new $3Dmol.Line(c[r], R, $3Dmol.LinePieces);
            a.add(N);
          }
        if (x && g.symmetries && g.symmetries.length > 0) {
          var P,
            V = new $3Dmol.Object3D();
          for (P = 0; P < g.symmetries.length; P++) {
            var B = new $3Dmol.Object3D();
            (B = a.clone()).matrix.copy(g.symmetries[P]),
              (B.matrixAutoUpdate = !1),
              V.add(B);
          }
          return V;
        }
        return a;
      };
    (this.getInternalState = function () {
      return { atoms: o, frames: l };
    }),
      (this.setInternalState = function (e) {
        (o = e.atoms), (l = e.frames), (p = null);
      }),
      (this.getCrystData = function () {
        if (g.cryst) {
          if (!g.cryst.matrix) {
            const e = g.cryst;
            g.cryst.matrix = $3Dmol.conversionMatrix3(
              e.a,
              e.b,
              e.c,
              e.alpha,
              e.beta,
              e.gamma
            );
          }
          return g.cryst;
        }
        return null;
      }),
      (this.setCrystData = function (e, t, r, n, i, o) {
        (e = e || 1),
          (t = t || 1),
          (r = r || 1),
          (n = n || 90),
          (i = i || 90),
          (o = o || 90);
        const a = $3Dmol.conversionMatrix3(e, t, r, n, i, o);
        g.cryst = { a: e, b: t, c: r, alpha: n, beta: i, gamma: o, matrix: a };
      }),
      (this.setCrystMatrix = function (e) {
        (e = e || new $3Dmol.Matrix3(1, 0, 0, 0, 1, 0, 0, 0, 1)),
          (g.cryst = { matrix: e });
      }),
      (this.getSymmetries = function () {
        return void 0 === g.symmetries && (g.symmetries = [y]), g.symmetries;
      }),
      (this.setSymmetries = function (e) {
        g.symmetries = void 0 === e ? [y] : e;
      }),
      (this.getID = function () {
        return d;
      }),
      (this.getNumFrames = function () {
        return null != l.numFrames ? l.numFrames : l.length;
      });
    var N = function (e, t, r, n) {
      var i = t - e;
      return i < -r ? t + n : i > r ? t - n : t;
    };
    (this.setFrame = function (e, t) {
      var r = this.getNumFrames();
      let n = this;
      return new Promise(function (i, a) {
        if ((0 == r && i(), (e < 0 || e >= r) && (e = r - 1), null != l.url)) {
          var s = l.url;
          $3Dmol
            .getbin(s + "/traj/frame/" + e + "/" + l.path, null, "POST")
            .then(function (e) {
              for (
                var t = new Float32Array(e, 44), r = 0, n = 0;
                n < o.length;
                n++
              )
                (o[n].x = t[r++]), (o[n].y = t[r++]), (o[n].z = t[r++]);
              c &&
                u &&
                (function () {
                  if (c && u)
                    for (
                      var e = c[0],
                        t = c[1],
                        r = c[2],
                        n = 0.9 * e,
                        i = 0.9 * t,
                        a = 0.9 * r,
                        s = 0;
                      s < u.length;
                      s++
                    )
                      for (var l = u[s], d = 1; d < l.length; d++) {
                        var h = o[l[d][0]],
                          p = o[l[d][1]];
                        (h.x = N(p.x, h.x, n, e)),
                          (h.y = N(p.y, h.y, i, t)),
                          (h.z = N(p.z, h.z, a, r));
                      }
                })(),
                i();
            })
            .catch(a);
        } else (o = l[e]), i();
        (p = null),
          v &&
            e < v.length &&
            ((g = v[e]),
            n.unitCellObjects && t && (t.removeUnitCell(n), t.addUnitCell(n)));
      });
    }),
      (this.addFrame = function (e) {
        l.push(e);
      }),
      (this.vibrate = function (e, t, r, n, i) {
        t = t || 1;
        var a = 0,
          s = (e = e || 10);
        r && ((a = -e), (s = e)),
          void 0 !== l && void 0 !== l.origIndex
            ? this.setFrame(l.origIndex)
            : this.setFrame(0),
          a < s && (l = []),
          r && (l.origIndex = e);
        for (var c = a; c < s; c++) {
          var u = [],
            d = l.length;
          if (0 != c || i) {
            for (var h = 0; h < o.length; h++) {
              var p = $3Dmol.getAtomProperty(o[h], "dx"),
                f = $3Dmol.getAtomProperty(o[h], "dy"),
                m = $3Dmol.getAtomProperty(o[h], "dz"),
                g = new $3Dmol.Vector3(p, f, m),
                v = new $3Dmol.Vector3(o[h].x, o[h].y, o[h].z),
                y = (c * t) / e;
              g.multiplyScalar(y), v.add(g);
              var x = {};
              for (var b in o[h]) x[b] = o[h][b];
              if (((x.x = v.x), (x.y = v.y), (x.z = v.z), u.push(x), n && i)) {
                var w = $3Dmol.extend({}, i),
                  D = new $3Dmol.Vector3(p, f, m);
                if (
                  (D.multiplyScalar(t),
                  D.add(v),
                  (w.start = v),
                  (w.end = D),
                  (w.frame = d),
                  !w.color)
                ) {
                  var C = x.style.sphere;
                  C || (C = x.style.stick),
                    C || (C = x.style.line),
                    (w.color = $3Dmol.getColorFromStyle(x, C));
                }
                n.addArrow(w);
              }
            }
            l.push(u);
          } else l.push(o);
        }
      }),
      (this.setAtomDefaults = function (t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n &&
            ((n.style = n.style || $3Dmol.deepCopy(e)),
            (n.color = n.color || w[n.elem] || b),
            (n.model = d),
            (n.clickable || n.hoverable) &&
              (n.intersectionShape = {
                sphere: [],
                cylinder: [],
                line: [],
                triangle: [],
              }));
        }
      }),
      (this.addMolData = function (e, t, r) {
        r = r || {};
        var n = $3Dmol.GLModel.parseMolData(e, t, r);
        x = !r.duplicateAssemblyAtoms;
        var i = n.modelData;
        if (
          (i &&
            (Array.isArray(i) ? ((g = i[0]), r.frames && (v = i)) : (g = i)),
          (c = n.box ? n.box : null),
          0 == l.length)
        ) {
          for (let e = 0; e < n.length; e++) 0 != n[e].length && l.push(n[e]);
          l[0] && (o = l[0]);
        } else if (r.frames) for (let e = 0; e < n.length; e++) l.push(n[e]);
        else for (var a = 0; a < n.length; a++) this.addAtoms(n[a]);
        for (let e = 0; e < l.length; e++) this.setAtomDefaults(l[e], d);
        r.vibrate &&
          r.vibrate.frames &&
          r.vibrate.amplitude &&
          this.vibrate(r.vibrate.frames, r.vibrate.amplitude),
          r.style && this.setStyle({}, r.style);
      }),
      (this.setDontDuplicateAtoms = function (e) {
        x = e;
      }),
      (this.setModelData = function (e) {
        g = e;
      });
    var P = function (e, t) {
      if (e == t) return !0;
      if ("string" == typeof t && "number" == typeof e) {
        var r = t.match(/(-?\d+)\s*-\s*(-?\d+)/);
        if (r) {
          var n = parseInt(r[1]),
            i = parseInt(r[2]);
          if (r && e >= n && e <= i) return !0;
        }
      }
      return !1;
    };
    const V = function (e, t) {
      if ("object" != typeof e) return e;
      if (e.__cache_created) return e;
      const r = {};
      for (const n in e) {
        const i = e[n];
        if (Array.isArray(i)) {
          r[n] = [];
          for (let e = 0; e < i.length; e++) r[n].push(V(i[e], t));
        } else r[n] = "object" == typeof i && "properties" != n ? V(i, t) : i;
        if ("and" == n || "or" == n) {
          const e = [];
          for (const i of r[n]) {
            const r = new Set();
            for (const e of t.selectedAtoms(i)) r.add(e.index);
            e.push(r);
          }
          if ("and" == n) {
            const t = function (e, t) {
              const r = new Set();
              for (const n of t) e.has(n) && r.add(n);
              return r;
            };
            let i = new Set(e[0]);
            for (const r of e.splice(1)) i = t(i, r);
            r[n].__cached_results = i;
          } else if ("or" == n) {
            const t = new Set();
            for (const r of e) for (const e of r) t.add(e);
            r[n].__cached_results = t;
          }
        }
      }
      return (r.__cache_created = !0), r;
    };
    this.atomIsSelected = function (e, t) {
      if (void 0 === t) return !0;
      var r = !!t.invert,
        n = !0;
      for (var i in t)
        if ("and" == i || "or" == i || "not" == i) {
          if ("not" == i) {
            if (this.atomIsSelected(e, t[i])) {
              n = !1;
              break;
            }
          } else if (
            (void 0 === t[i].__cached_results && (t = V(t, this)),
            !(n = t[i].__cached_results.has(e.index)))
          )
            break;
        } else if ("predicate" === i) {
          if (!t.predicate(e)) {
            n = !1;
            break;
          }
        } else if ("properties" == i && e[i]) {
          for (var o in t.properties)
            if (!o.startsWith("__cache")) {
              if (void 0 === e.properties[o]) {
                n = !1;
                break;
              }
              if (e.properties[o] != t.properties[o]) {
                n = !1;
                break;
              }
            }
        } else if (
          t.hasOwnProperty(i) &&
          "props" != i &&
          "invert" != i &&
          "model" != i &&
          "byres" != i &&
          "expand" != i &&
          "within" != i &&
          "and" != i &&
          "or" != i &&
          "not" != i &&
          !i.startsWith("__cache")
        ) {
          if (void 0 === e[i]) {
            n = !1;
            break;
          }
          var a = !1;
          if ("bonds" === i) {
            if (t[i] != e.bonds.length) {
              n = !1;
              break;
            }
          } else if (Array.isArray(t[i])) {
            var s = t[i],
              l = e[i];
            for (let e = 0; e < s.length; e++)
              if (P(l, s[e])) {
                a = !0;
                break;
              }
            if (!a) {
              n = !1;
              break;
            }
          } else {
            let r = t[i];
            if (!P(e[i], r)) {
              n = !1;
              break;
            }
          }
        }
      return r ? !n : n;
    };
    const B = function (e, t) {
      var r = t.x - e.x,
        n = t.y - e.y,
        i = t.z - e.z;
      return r * r + n * n + i * i;
    };
    (this.selectedAtoms = function (e, t) {
      var r = [];
      (e = V(e || {}, this)), t || (t = o);
      for (var n = t.length, i = 0; i < n; i++) {
        var a = t[i];
        a && this.atomIsSelected(a, e) && r.push(a);
      }
      if (e.hasOwnProperty("expand")) {
        const t = parseFloat(e.expand);
        let n = (function (e, t) {
            if (t <= 0) return e;
            for (
              var r = $3Dmol.getExtent(e), n = [[], [], []], i = 0;
              i < 3;
              i++
            )
              (n[0][i] = r[0][i] - t),
                (n[1][i] = r[1][i] + t),
                (n[2][i] = r[2][i]);
            var a = [];
            for (let e = 0; e < o.length; e++) {
              var s = o[e].x,
                l = o[e].y,
                c = o[e].z;
              s >= n[0][0] &&
                s <= n[1][0] &&
                l >= n[0][1] &&
                l <= n[1][1] &&
                c >= n[0][2] &&
                c <= n[1][2] &&
                ((s >= r[0][0] &&
                  s <= r[1][0] &&
                  l >= r[0][1] &&
                  l <= r[1][1] &&
                  c >= r[0][2] &&
                  c <= r[1][2]) ||
                  a.push(o[e]));
            }
            return a;
          })(r, t),
          i = r.length;
        const a = t * t;
        for (let e = 0; e < n.length; e++)
          for (let t = 0; t < i; t++) {
            var s = B(n[e], r[t]);
            s < a && s > 0 && r.push(n[e]);
          }
      }
      if (
        e.hasOwnProperty("within") &&
        e.within.hasOwnProperty("sel") &&
        e.within.hasOwnProperty("distance")
      ) {
        var l = this.selectedAtoms(e.within.sel, o),
          c = {};
        const t = parseFloat(e.within.distance),
          n = t * t;
        for (let e = 0; e < l.length; e++)
          for (let t = 0; t < r.length; t++) {
            let i = B(l[e], r[t]);
            i < n && i > 0 && (c[t] = 1);
          }
        var u = [];
        if (e.within.invert)
          for (let e = 0; e < r.length; e++) c[e] || u.push(r[e]);
        else for (let e in c) u.push(r[e]);
        r = u;
      }
      if (e.hasOwnProperty("byres")) {
        var d = {},
          h = [],
          p = [];
        for (let e = 0; e < r.length; e++) {
          let t = r[e];
          var f = t.chain,
            m = t.resi;
          if (
            (void 0 === d[f] && (d[f] = {}),
            t.hasOwnProperty("resi") && void 0 === d[f][m])
          )
            for (d[f][m] = !0, p.push(t); p.length > 0; )
              if (
                ((f = (t = p.pop()).chain), (m = t.resi), void 0 === h[t.index])
              ) {
                h[t.index] = !0;
                for (var g = 0; g < t.bonds.length; g++) {
                  var v = o[t.bonds[g]];
                  void 0 === h[v.index] &&
                    v.hasOwnProperty("resi") &&
                    v.chain == f &&
                    v.resi == m &&
                    (p.push(v), r.push(v));
                }
              }
        }
      }
      return r;
    }),
      (this.addAtoms = function (t) {
        p = null;
        var r,
          n = o.length,
          i = [];
        for (r = 0; r < t.length; r++)
          void 0 === t[r].index && (t[r].index = r),
            void 0 === t[r].serial && (t[r].serial = r),
            (i[t[r].index] = n + r);
        for (r = 0; r < t.length; r++) {
          var a = t[r],
            s = i[a.index],
            l = $3Dmol.extend({}, a);
          (l.index = s),
            (l.bonds = []),
            (l.bondOrder = []),
            (l.model = d),
            (l.style = l.style || $3Dmol.deepCopy(e)),
            void 0 === l.color && (l.color = w[l.elem] || b);
          for (var c = a.bonds ? a.bonds.length : 0, u = 0; u < c; u++) {
            var h = i[a.bonds[u]];
            void 0 !== h &&
              (l.bonds.push(h),
              l.bondOrder.push(a.bondOrder ? a.bondOrder[u] : 1));
          }
          o.push(l);
        }
      }),
      (this.removeAtoms = function (e) {
        p = null;
        var t,
          r = [];
        for (t = 0; t < e.length; t++) r[e[t].index] = !0;
        var n = [];
        for (t = 0; t < o.length; t++) {
          var i = o[t];
          r[i.index] || n.push(i);
        }
        (o = []), this.addAtoms(n);
      }),
      (this.setStyle = function (e, t, r) {
        var n;
        for (n in (void 0 === t && void 0 === r && ((t = e), (e = {})), e))
          s.validAtomSelectionSpecs.hasOwnProperty(n) ||
            console.log("Unknown selector " + n);
        for (n in t)
          s.validAtomStyleSpecs.hasOwnProperty(n) ||
            console.log("Unknown style " + n);
        var i = !1,
          a = this,
          c = function (n) {
            var o = a.selectedAtoms(e, n);
            for (let e = 0; e < n.length; e++) n[e] && (n[e].capDrawn = !1);
            for (let e = 0; e < o.length; e++) {
              (i = !0),
                (o[e].clickable || o[e].hoverable) &&
                  (o[e].intersectionShape = {
                    sphere: [],
                    cylinder: [],
                    line: [],
                    triangle: [],
                  }),
                r || (o[e].style = {});
              for (let r in t)
                t.hasOwnProperty(r) &&
                  ((o[e].style[r] = o[e].style[r] || {}),
                  Object.assign(o[e].style[r], t[r]));
            }
          };
        c(o);
        for (var u = 0; u < l.length; u++) l[u] !== o && c(l[u]);
        i && (p = null);
      }),
      (this.setClickable = function (e, t, r) {
        var n;
        for (n in e)
          s.validAtomSelectionSpecs.hasOwnProperty(n) ||
            console.log("Unknown selector " + n);
        if (((t = !!t), null !== (r = $3Dmol.makeFunction(r)))) {
          var i,
            a = this.selectedAtoms(e, o),
            l = a.length;
          for (i = 0; i < l; i++)
            (a[i].intersectionShape = {
              sphere: [],
              cylinder: [],
              line: [],
              triangle: [],
            }),
              (a[i].clickable = t),
              r && (a[i].callback = r);
          l > 0 && (p = null);
        } else console.log("Callback is not a function");
      }),
      (this.setHoverable = function (e, t, r, n) {
        var i;
        for (i in e)
          s.validAtomSelectionSpecs.hasOwnProperty(i) ||
            console.log("Unknown selector " + i);
        if (
          ((t = !!t),
          (r = $3Dmol.makeFunction(r)),
          (n = $3Dmol.makeFunction(n)),
          null !== r)
        )
          if (null !== n) {
            var a,
              l = this.selectedAtoms(e, o),
              c = l.length;
            for (a = 0; a < c; a++)
              (l[a].intersectionShape = {
                sphere: [],
                cylinder: [],
                line: [],
                triangle: [],
              }),
                (l[a].hoverable = t),
                r && (l[a].hover_callback = r),
                n && (l[a].unhover_callback = n);
            c > 0 && (p = null);
          } else console.log("Unhover_callback is not a function");
        else console.log("Hover_callback is not a function");
      }),
      (this.enableContextMenu = function (e, t) {
        var r, n;
        for (r in e)
          s.validAtomSelectionSpecs.hasOwnProperty(r) ||
            console.log("Unknown selector " + r);
        t = !!t;
        var i = this.selectedAtoms(e, o),
          a = i.length;
        for (n = 0; n < a; n++)
          (i[n].intersectionShape = {
            sphere: [],
            cylinder: [],
            line: [],
            triangle: [],
          }),
            (i[n].contextMenuEnabled = t);
        a > 0 && (p = null);
      }),
      (this.setColorByElement = function (e, t) {
        if (null === p || !a(t, m)) {
          m = t;
          var r = this.selectedAtoms(e, r);
          r.length > 0 && (p = null);
          for (var n = 0; n < r.length; n++) {
            var i = r[n];
            void 0 !== t[i.elem] && (i.color = t[i.elem]);
          }
        }
      }),
      (this.setColorByProperty = function (e, t, r, n) {
        var i,
          o,
          a = this.selectedAtoms(e, a);
        for (
          m = null,
            a.length > 0 && (p = null),
            void 0 !== $3Dmol.Gradient.builtinGradients[r] &&
              (r = new $3Dmol.Gradient.builtinGradients[r]()),
            n || (n = r.range()),
            n || (n = $3Dmol.getPropertyRange(a, t)),
            i = 0;
          i < a.length;
          i++
        ) {
          (o = a[i]),
            null != $3Dmol.getAtomProperty(o, t) &&
              (o.color = r.valueToHex(parseFloat(o.properties[t]), n));
        }
      }),
      (this.setColorByFunction = function (e, t) {
        var r = this.selectedAtoms(e, r);
        if ("function" == typeof t) {
          (m = null), r.length > 0 && (p = null);
          for (let e = 0; e < r.length; e++) {
            let n = r[e];
            n.color = t(n);
          }
        }
      }),
      (this.toCDObject = function (e) {
        var t = { a: [], b: [] };
        e && (t.s = []);
        for (var r = 0; r < o.length; r++) {
          var n = {},
            i = o[r];
          if (
            ((n.x = i.x),
            (n.y = i.y),
            (n.z = i.z),
            "C" != i.elem && (n.l = i.elem),
            e)
          ) {
            for (
              var a = 0;
              a < t.s.length &&
              JSON.stringify(i.style) !== JSON.stringify(t.s[a]);

            )
              a++;
            a === t.s.length && t.s.push(i.style), 0 !== a && (n.s = a);
          }
          t.a.push(n);
          for (var s = 0; s < i.bonds.length; s++) {
            var l = r,
              c = i.bonds[s];
            if (!(l >= c)) {
              var u = { b: l, e: c },
                d = i.bondOrder[s];
              1 != d && (u.o = d), t.b.push(u);
            }
          }
        }
        return t;
      }),
      (this.globj = function (e, t) {
        (null === p || t.regen) &&
          ((p = R(o, t)),
          f && (e.remove(f), (f = null)),
          (f = p.clone()),
          h && (f.setVisible(!1), p.setVisible(!1)),
          e.add(f));
      }),
      (this.exportVRML = function () {
        return R(o, { supportsImposters: !1, supportsAIA: !1 }).vrml();
      }),
      (this.removegl = function (e) {
        f &&
          (void 0 !== f.geometry && f.geometry.dispose(),
          void 0 !== f.material && f.material.dispose(),
          e.remove(f),
          (f = null)),
          (p = null);
      }),
      (this.hide = function () {
        (h = !0), f && f.setVisible(!1), p && p.setVisible(!1);
      }),
      (this.show = function () {
        (h = !1), f && f.setVisible(!0), p && p.setVisible(!0);
      }),
      (this.addPropertyLabels = function (e, t, r, n) {
        for (
          var i = this.selectedAtoms(t, i), o = $3Dmol.deepCopy(n), a = 0;
          a < i.length;
          a++
        ) {
          var s = i[a],
            l = null;
          void 0 !== s[e]
            ? (l = String(s[e]))
            : (s.properties[e], (l = String(s.properties[e]))),
            null != l && ((o.position = s), r.addLabel(l, o));
        }
      }),
      (this.addResLabels = function (e, t, r, n) {
        var i = [],
          a = function (n, o) {
            for (
              var a = n.selectedAtoms(e, a), s = {}, l = 0;
              l < a.length;
              l++
            ) {
              var c = a[l],
                u = c.chain,
                d = c.resn + "" + c.resi;
              s[u] || (s[u] = {}), s[u][d] || (s[u][d] = []), s[u][d].push(c);
            }
            var h = $3Dmol.deepCopy(r);
            for (let e in s)
              if (s.hasOwnProperty(e)) {
                var p = s[e];
                for (let e in p)
                  if (p.hasOwnProperty(e)) {
                    let r = p[e],
                      n = new $3Dmol.Vector3(0, 0, 0);
                    for (let e = 0; e < r.length; e++) {
                      let t = r[e];
                      (n.x += t.x), (n.y += t.y), (n.z += t.z);
                    }
                    n.divideScalar(r.length), (h.position = n), (h.frame = o);
                    let a = t.addLabel(e, h, void 0, !0);
                    i.push(a);
                  }
              }
          };
        if (n) {
          var s = this.getNumFrames();
          let e = o;
          for (let e = 0; e < s; e++) l[e] && ((o = l[e]), a(this, e));
          o = e;
        } else a(this);
        return i;
      });
    (this.setCoordinatesFromURL = function (e, t) {
      l = [];
      var r = this;
      return (
        c &&
          (function () {
            u = [];
            var e = new Int8Array(o.length);
            e.fill(0);
            for (
              var t = function (r, n, i) {
                  i.push([r, n]);
                  var a = o[r];
                  e[r] = 1;
                  for (var s = 0; s < a.bonds.length; s++) {
                    var l = a.bonds[s];
                    o[l] && !e[l] && t(l, r, i);
                  }
                },
                r = 0;
              r < o.length;
              r++
            ) {
              if (o[r] && !e[r]) {
                var n = [];
                t(r, -1, n), u.push(n);
              }
            }
          })(),
        new Promise(function (n, i) {
          e.startsWith("http") || (e = "http://" + e),
            $.get(e + "/traj/numframes/" + t, function (a) {
              isNaN(parseInt(a)) ||
                (l.push(o),
                (l.numFrames = a),
                (l.url = e),
                (l.path = t),
                r
                  .setFrame(0)
                  .then(function () {
                    n();
                  })
                  .catch(i));
            });
        })
      );
    }),
      (this.setCoordinates = function (e, t) {
        if (!e) return [];
        if (/\.gz$/.test((t = t || ""))) {
          t = t.replace(/\.gz$/, "");
          try {
            e = pako.inflate(e, { to: "string" });
          } catch (e) {
            console.log(e);
          }
        }
        if (
          {
            mdcrd: "",
            inpcrd: "",
            pdb: "",
            netcdf: "",
            array: "",
          }.hasOwnProperty(t)
        ) {
          l = [];
          for (var r = o.length, n = s.parseCrd(e, t), i = 0; i < n.length; ) {
            for (var a = [], c = 0; c < r; c++) {
              var u = {};
              for (var d in o[c]) u[d] = o[c][d];
              (a[c] = u),
                (a[c].x = n[i++]),
                (a[c].y = n[i++]),
                (a[c].z = n[i++]);
            }
            l.push(a);
          }
          return (o = l[0]), l;
        }
        return [];
      }),
      (this.addAtomSpecs = function (e) {
        for (var t = 0; t < e.length; t++)
          s.validAtomSelectionSpecs.hasOwnProperty(e[t]) ||
            (s.validAtomSelectionSpecs[e[t]] = {});
      });
  }
  return (
    (s.parseCrd = function (e, t) {
      var r = [],
        n = 0;
      if ("pdb" == t)
        for (var i = e.indexOf("\nATOM"); -1 != i; ) {
          for (
            ;
            "\nATOM" == e.slice(i, i + 5) || "\nHETATM" == e.slice(i, i + 7);

          )
            (r[n++] = parseFloat(e.slice(i + 31, i + 39))),
              (r[n++] = parseFloat(e.slice(i + 39, i + 47))),
              (r[n++] = parseFloat(e.slice(i + 47, i + 55))),
              (i = e.indexOf("\n", i + 54)),
              "\nTER" == e.slice(i, i + 4) && (i = e.indexOf("\n", i + 5));
          i = e.indexOf("\nATOM", i);
        }
      else if ("netcdf" == t) {
        var o = new netcdfjs(e);
        r = [].concat.apply([], o.getDataVariable("coordinates"));
      } else {
        if ("array" == t || Array.isArray(e)) return e.flat(2);
        {
          let n = e.indexOf("\n");
          "inpcrd" == t && (n = e.indexOf("\n", n + 1)),
            (r = (e = e.slice(n + 1)).match(/\S+/g).map(parseFloat));
        }
      }
      return r;
    }),
    (s.parseMolData = function (e, t, r) {
      if (!e) return [];
      if (/\.gz$/.test((t = t || ""))) {
        t = t.replace(/\.gz$/, "");
        try {
          e = pako.inflate(e, { to: "string" });
        } catch (e) {
          console.log(e);
        }
      }
      return (
        void 0 === $3Dmol.Parsers[t] &&
          ((t = t.split(".").pop()),
          void 0 === $3Dmol.Parsers[t] &&
            (console.log("Unknown format: " + t),
            (t =
              e instanceof Uint8Array
                ? "mmtf"
                : e.match(/^@<TRIPOS>MOLECULE/gm)
                ? "mol2"
                : e.match(/^data_/gm) && e.match(/^loop_/gm)
                ? "cif"
                : e.match(/^HETATM/gm) || e.match(/^ATOM/gm)
                ? "pdb"
                : e.match(/ITEM: TIMESTEP/gm)
                ? "lammpstrj"
                : e.match(/^.*\n.*\n.\s*(\d+)\s+(\d+)/gm)
                ? "sdf"
                : e.match(/^%VERSION\s+\VERSION_STAMP/gm)
                ? "prmtop"
                : "xyz"),
            console.log("Best guess: " + t))),
        (0, $3Dmol.Parsers[t])(e, r)
      );
    }),
    s
  );
})()),
  ($3Dmol.GLShape = (function () {
    var e = 2,
      t = function (e) {
        var t = e.updateGeoGroup(0);
        t.vertices > 0 && t.truncateArrayBuffers(!0, !0);
      },
      r = function (e, t) {
        var r, n, i;
        for (var o in ((t = t || $3Dmol.CC.color(t)),
        (e.colorsNeedUpdate = !0),
        t.constructor !== Array && ((r = t.r), (n = t.g), (i = t.b)),
        e.geometryGroups))
          for (
            var a = e.geometryGroups[o],
              s = a.colorArray,
              l = 0,
              c = a.vertices;
            l < c;
            ++l
          ) {
            if (t.constructor === Array) {
              var u = t[l];
              (r = u.r), (n = u.g), (i = u.b);
            }
            (s[3 * l] = r), (s[3 * l + 1] = n), (s[3 * l + 2] = i);
          }
      },
      n = function (e, t, r) {
        var n = r.start,
          i = r.end,
          o = r.radius,
          a = r.radiusRatio,
          s = r.mid,
          l = r.midpos;
        if (n && i) {
          var c = t.updateGeoGroup(51),
            u = i.clone().sub(n);
          if (l) {
            let e = u.length();
            s = l > 0 ? l / e : (e + l) / e;
          }
          u.multiplyScalar(s);
          var d = n.clone().add(u),
            h = u.clone().negate();
          e.intersectionShape.cylinder.push(
            new $3Dmol.Cylinder(n.clone(), d.clone(), o)
          ),
            e.intersectionShape.sphere.push(new $3Dmol.Sphere(n.clone(), o));
          var p = [];
          (p[0] = u.clone()),
            Math.abs(p[0].x) > 1e-4 ? (p[0].y += 1) : (p[0].x += 1),
            p[0].cross(u),
            p[0].normalize(),
            (p[0] = p[0]),
            (p[4] = p[0].clone()),
            p[4].crossVectors(p[0], u),
            p[4].normalize(),
            (p[8] = p[0].clone().negate()),
            (p[12] = p[4].clone().negate()),
            (p[2] = p[0].clone().add(p[4]).normalize()),
            (p[6] = p[4].clone().add(p[8]).normalize()),
            (p[10] = p[8].clone().add(p[12]).normalize()),
            (p[14] = p[12].clone().add(p[0]).normalize()),
            (p[1] = p[0].clone().add(p[2]).normalize()),
            (p[3] = p[2].clone().add(p[4]).normalize()),
            (p[5] = p[4].clone().add(p[6]).normalize()),
            (p[7] = p[6].clone().add(p[8]).normalize()),
            (p[9] = p[8].clone().add(p[10]).normalize()),
            (p[11] = p[10].clone().add(p[12]).normalize()),
            (p[13] = p[12].clone().add(p[14]).normalize()),
            (p[15] = p[14].clone().add(p[0]).normalize());
          var f,
            m,
            g,
            v,
            y,
            x,
            b,
            w,
            D,
            C,
            S,
            A,
            $,
            M,
            k,
            z,
            _,
            T,
            L,
            E,
            I,
            F,
            O = c.vertices,
            R = c.vertexArray,
            N = c.faceArray,
            P = c.normalArray,
            V = c.lineArray;
          for (m = 0, g = p.length; m < g; ++m) {
            f = 3 * (O + 3 * m);
            var B = p[m].clone().multiplyScalar(o).add(n),
              U = p[m].clone().multiplyScalar(o).add(d),
              j = p[m]
                .clone()
                .multiplyScalar(o * a)
                .add(d);
            if (
              ((R[f] = B.x),
              (R[f + 1] = B.y),
              (R[f + 2] = B.z),
              (R[f + 3] = U.x),
              (R[f + 4] = U.y),
              (R[f + 5] = U.z),
              (R[f + 6] = j.x),
              (R[f + 7] = j.y),
              (R[f + 8] = j.z),
              m > 0)
            ) {
              var G = R[f - 3],
                H = R[f - 2],
                q = R[f - 1],
                W = new $3Dmol.Vector3(G, H, q),
                Y = i.clone(),
                X = d.clone(),
                Z = new $3Dmol.Vector3(j.x, j.y, j.z);
              e.intersectionShape.triangle.push(new $3Dmol.Triangle(Z, Y, W)),
                e.intersectionShape.triangle.push(
                  new $3Dmol.Triangle(W.clone(), X, Z.clone())
                );
            }
          }
          (c.vertices += 48),
            (R[(f = 3 * c.vertices)] = n.x),
            (R[f + 1] = n.y),
            (R[f + 2] = n.z),
            (R[f + 3] = d.x),
            (R[f + 4] = d.y),
            (R[f + 5] = d.z),
            (R[f + 6] = i.x),
            (R[f + 7] = i.y),
            (R[f + 8] = i.z),
            (c.vertices += 3);
          var Q = c.vertices - 3,
            K = c.vertices - 2,
            J = c.vertices - 1,
            ee = 3 * Q,
            te = 3 * K,
            re = 3 * J;
          for (m = 0, g = p.length - 1; m < g; ++m) {
            var ne = O + 3 * m;
            (f = 3 * ne),
              (y = c.faceidx),
              (x = c.lineidx),
              ($ = 3 * (b = ne)),
              (M = 3 * (w = ne + 1)),
              (k = 3 * (D = ne + 2)),
              (z = 3 * (C = ne + 4)),
              (_ = 3 * (S = ne + 5)),
              (T = 3 * (A = ne + 3)),
              [p[m], p[m], p[m + 1], p[m + 1]],
              (L = E = p[m]),
              (I = F = p[m + 1]),
              (P[$] = L.x),
              (P[M] = E.x),
              (P[T] = F.x),
              (P[$ + 1] = L.y),
              (P[M + 1] = E.y),
              (P[T + 1] = F.y),
              (P[$ + 2] = L.z),
              (P[M + 2] = E.z),
              (P[T + 2] = F.z),
              (P[M] = E.x),
              (P[z] = I.x),
              (P[T] = F.x),
              (P[M + 1] = E.y),
              (P[z + 1] = I.y),
              (P[T + 1] = F.y),
              (P[M + 2] = E.z),
              (P[z + 2] = I.z),
              (P[T + 2] = F.z),
              (P[k] = E.x),
              (P[_] = I.x),
              (P[k + 1] = E.y),
              (P[_ + 1] = I.y),
              (P[k + 2] = E.z),
              (P[_ + 2] = I.z),
              (N[y] = b),
              (N[y + 1] = w),
              (N[y + 2] = A),
              (N[y + 3] = w),
              (N[y + 4] = C),
              (N[y + 5] = A),
              (N[y + 6] = b),
              (N[y + 7] = A),
              (N[y + 8] = Q),
              (N[y + 9] = D),
              (N[y + 10] = K),
              (N[y + 11] = S),
              (N[y + 12] = D),
              (N[y + 13] = J),
              (N[y + 14] = S),
              (V[x] = b),
              (V[x + 1] = w),
              (V[x + 2] = b),
              (V[x + 3] = A),
              (V[x + 4] = C),
              (V[x + 5] = A),
              (V[x + 6] = b),
              (V[x + 7] = A),
              (V[x + 8] = D),
              (V[x + 9] = w),
              (V[x + 10] = D),
              (V[x + 11] = S),
              (V[x + 12] = C),
              (V[x + 13] = S),
              (V[x + 14] = D),
              (V[x + 15] = J),
              (V[x + 16] = D),
              (V[x + 17] = S),
              (V[x + 18] = J),
              (V[x + 19] = S),
              (c.faceidx += 15),
              (c.lineidx += 20);
          }
          (v = [O + 45, O + 46, O + 1, O, O + 47, O + 2]),
            [p[15], p[15], p[0], p[0]],
            (y = c.faceidx),
            (x = c.lineidx),
            ($ = 3 * (b = v[0])),
            (M = 3 * (w = v[1])),
            (k = 3 * (D = v[4])),
            (z = 3 * (C = v[2])),
            (_ = 3 * (S = v[5])),
            (T = 3 * (A = v[3])),
            (L = E = p[15]),
            (I = F = p[0]),
            (P[$] = L.x),
            (P[M] = E.x),
            (P[T] = F.x),
            (P[$ + 1] = L.y),
            (P[M + 1] = E.y),
            (P[T + 1] = F.y),
            (P[$ + 2] = L.z),
            (P[M + 2] = E.z),
            (P[T + 2] = F.z),
            (P[M] = E.x),
            (P[z] = I.x),
            (P[T] = F.x),
            (P[M + 1] = E.y),
            (P[z + 1] = I.y),
            (P[T + 1] = F.y),
            (P[M + 2] = E.z),
            (P[z + 2] = I.z),
            (P[T + 2] = F.z),
            (P[k] = E.x),
            (P[_] = I.x),
            (P[k + 1] = E.y),
            (P[_ + 1] = I.y),
            (P[k + 2] = E.z),
            (P[_ + 2] = I.z),
            u.normalize(),
            h.normalize(),
            (P[ee] = h.x),
            (P[te] = P[re] = u.x),
            (P[ee + 1] = h.y),
            (P[te + 1] = P[re + 1] = u.y),
            (P[ee + 2] = h.z),
            (P[te + 2] = P[re + 2] = u.z),
            (N[y] = b),
            (N[y + 1] = w),
            (N[y + 2] = A),
            (N[y + 3] = w),
            (N[y + 4] = C),
            (N[y + 5] = A),
            (N[y + 6] = b),
            (N[y + 7] = A),
            (N[y + 8] = Q),
            (N[y + 9] = D),
            (N[y + 10] = K),
            (N[y + 11] = S),
            (N[y + 12] = D),
            (N[y + 13] = J),
            (N[y + 14] = S),
            (V[x] = b),
            (V[x + 1] = w),
            (V[x + 2] = b),
            (V[x + 3] = A),
            (V[x + 4] = C),
            (V[x + 5] = A),
            (V[x + 6] = b),
            (V[x + 7] = A),
            (V[x + 8] = D),
            (V[x + 9] = w),
            (V[x + 10] = D),
            (V[x + 11] = S),
            (V[x + 12] = C),
            (V[x + 13] = S),
            (V[x + 14] = D),
            (V[x + 15] = J),
            (V[x + 16] = D),
            (V[x + 17] = S),
            (V[x + 18] = J),
            (V[x + 19] = S),
            (c.faceidx += 15),
            (c.lineidx += 20);
        }
      },
      i = function (e, t, r, n) {
        e.center.set(0, 0, 0);
        let i = 1 / 0,
          o = 1 / 0,
          a = 1 / 0,
          s = -1 / 0,
          l = -1 / 0,
          c = -1 / 0;
        e.box &&
          ((i = e.box.min.x),
          (s = e.box.max.x),
          (o = e.box.min.y),
          (l = e.box.max.y),
          (a = e.box.min.z),
          (c = e.box.max.z));
        for (let e = 0, t = n; e < t; e++) {
          var u = r[3 * e],
            d = r[3 * e + 1],
            h = r[3 * e + 2];
          u < i && (i = u),
            d < o && (o = d),
            h < a && (a = h),
            u > s && (s = u),
            d > l && (l = d),
            h > c && (c = h);
        }
        e.center.set((s + i) / 2, (l + o) / 2, (c + a) / 2),
          (e.radius = e.center.distanceTo({ x: s, y: l, z: c })),
          (e.box = { min: { x: i, y: o, z: a }, max: { x: s, y: l, z: c } });
      },
      o = function (e, t, r, n, o) {
        var a,
          s,
          l,
          c,
          u,
          d,
          h,
          p,
          f,
          m = t.addGeoGroup(),
          g = r.vertexArr,
          v = r.normalArr,
          y = r.faceArr;
        (m.vertices = g.length), (m.faceidx = y.length);
        var x = m.vertexArray,
          b = m.colorArray;
        for (
          n.constructor !== Array && ((p = n.r), (f = n.g), (c = n.b)),
            d = 0,
            h = m.vertices;
          d < h;
          ++d
        )
          (a = 3 * d),
            (s = g[d]),
            (x[a] = s.x),
            (x[a + 1] = s.y),
            (x[a + 2] = s.z),
            n.constructor === Array &&
              ((p = (u = n[d]).r), (f = u.g), (c = u.b)),
            (b[a] = p),
            (b[a + 1] = f),
            (b[a + 2] = c);
        if (o)
          for (d = 0, h = m.faceidx / 3; d < h; ++d) {
            (l = y[(a = 3 * d)]), (c = y[a + 1]), (u = y[a + 2]);
            var w = new $3Dmol.Vector3(),
              D = new $3Dmol.Vector3(),
              C = new $3Dmol.Vector3();
            e.intersectionShape.triangle.push(
              new $3Dmol.Triangle(w.copy(g[l]), D.copy(g[c]), C.copy(g[u]))
            );
          }
        if (o) {
          var S = new $3Dmol.Vector3(0, 0, 0),
            A = 0;
          for (let e = 0; e < t.geometryGroups.length; e++)
            S.add(t.geometryGroups[e].getCentroid()), A++;
          S.divideScalar(A),
            i(e.boundingSphere, { centroid: S }, x, m.vertices);
        }
        if (
          ((m.faceArray = new Uint16Array(y)),
          m.truncateArrayBuffers(!0, !0),
          v.length < m.vertices)
        )
          m.setNormals();
        else {
          var $,
            M = (m.normalArray = new Float32Array(3 * m.vertices));
          for (d = 0, h = m.vertices; d < h; ++d)
            (a = 3 * d),
              ($ = v[d]),
              (M[a] = $.x),
              (M[a + 1] = $.y),
              (M[a + 2] = $.z);
        }
        m.setLineIndices(), (m.lineidx = m.lineArray.length);
      },
      a = function (e, t, r) {
        var n = r,
          i = n.vertexArr,
          a = n.faceArr;
        (0 !== i.length && 0 !== a.length) ||
          console.warn(
            "Error adding custom shape component: No vertices and/or face indices supplied!"
          );
        var s = r.color;
        void 0 === s && (s = e.color), (s = $3Dmol.CC.color(s));
        for (var l = $3Dmol.splitMesh(n), c = 0, u = l.length; c < u; c++)
          o(e, t, l[c], l[c].colorArr ? l[c].colorArr : s, r.clickable);
      },
      s = function (e, t) {
        void 0 !== t.color
          ? ((e.color = t.color || new $3Dmol.Color()),
            t.color instanceof $3Dmol.Color ||
              (e.color = $3Dmol.CC.color(t.color)))
          : (e.color = $3Dmol.CC.color(0)),
          (e.wireframe = !!t.wireframe),
          (e.opacity = t.alpha ? $3Dmol.Math.clamp(t.alpha, 0, 1) : 1),
          void 0 !== t.opacity &&
            (e.opacity = $3Dmol.Math.clamp(t.opacity, 0, 1)),
          (e.side = void 0 !== t.side ? t.side : $3Dmol.DoubleSide),
          (e.linewidth = void 0 === t.linewidth ? 1 : t.linewidth),
          (e.clickable = !!t.clickable),
          (e.callback = $3Dmol.makeFunction(t.callback)),
          (e.hoverable = !!t.hoverable),
          (e.hover_callback = $3Dmol.makeFunction(t.hover_callback)),
          (e.unhover_callback = $3Dmol.makeFunction(t.unhover_callback)),
          (e.hidden = t.hidden),
          (e.frame = t.frame);
      };
    function l(o) {
      (o = o || {}),
        $3Dmol.ShapeIDCount++,
        (this.boundingSphere = new $3Dmol.Sphere()),
        (this.intersectionShape = {
          sphere: [],
          cylinder: [],
          line: [],
          triangle: [],
        }),
        s(this, o);
      var l = [],
        c = null,
        u = null,
        d = new $3Dmol.Geometry(!0),
        h = new $3Dmol.Geometry(!0);
      (this.updateStyle = function (e) {
        for (var t in e) o[t] = e[t];
        if ((s(this, o), e.voldata && e.volscheme)) {
          $3Dmol.adjustVolumeStyle(e);
          const t = e.volscheme,
            r = e.voldata,
            n = $3Dmol.CC,
            i = t.range() || [-1, 1];
          d.setColors(function (e, o, a) {
            let s = r.getVal(e, o, a);
            return n.color(t.valueToHex(s, i));
          }),
            delete this.color;
        }
      }),
        (this.addCustom = function (e) {
          (e.vertexArr = e.vertexArr || []),
            (e.faceArr = e.faceArr || []),
            (e.normalArr = e.normalArr || []),
            a(this, d, e);
        }),
        (this.addSphere = function (e) {
          (e.center = e.center || { x: 0, y: 0, z: 0 }),
            (e.radius = e.radius ? $3Dmol.Math.clamp(e.radius, 0, 1 / 0) : 1.5),
            (e.color = $3Dmol.CC.color(e.color)),
            this.intersectionShape.sphere.push(
              new $3Dmol.Sphere(e.center, e.radius)
            ),
            $3Dmol.GLDraw.drawSphere(d, e.center, e.radius, e.color),
            l.push({
              centroid: new $3Dmol.Vector3(e.center.x, e.center.y, e.center.z),
            });
          var t = d.updateGeoGroup(0);
          i(this.boundingSphere, l, t.vertexArray, t.vertices);
        }),
        (this.addBox = function (e) {
          var t = e.dimensions || { w: 1, h: 1, d: 1 },
            r = t.w;
          "number" == typeof t.w && (r = { x: t.w, y: 0, z: 0 });
          var n = t.h;
          "number" == typeof t.h && (n = { x: 0, y: t.h, z: 0 });
          var o = t.d;
          "number" == typeof t.d && (o = { x: 0, y: 0, z: t.d });
          var s = e.corner;
          null == s &&
            (s =
              void 0 !== e.center
                ? {
                    x: e.center.x - 0.5 * (r.x + n.x + o.x),
                    y: e.center.y - 0.5 * (r.y + n.y + o.y),
                    z: e.center.z - 0.5 * (r.z + n.z + o.z),
                  }
                : { x: 0, y: 0, z: 0 });
          var c = [
              { x: s.x, y: s.y, z: s.z },
              { x: s.x + r.x, y: s.y + r.y, z: s.z + r.z },
              { x: s.x + n.x, y: s.y + n.y, z: s.z + n.z },
              { x: s.x + r.x + n.x, y: s.y + r.y + n.y, z: s.z + r.z + n.z },
              { x: s.x + o.x, y: s.y + o.y, z: s.z + o.z },
              { x: s.x + r.x + o.x, y: s.y + r.y + o.y, z: s.z + r.z + o.z },
              { x: s.x + n.x + o.x, y: s.y + n.y + o.y, z: s.z + n.z + o.z },
              {
                x: s.x + r.x + n.x + o.x,
                y: s.y + r.y + n.y + o.y,
                z: s.z + r.z + n.z + o.z,
              },
            ],
            u = [],
            h = [];
          u.splice(u.length, 0, c[0], c[1], c[2], c[3]),
            h.splice(h.length, 0, 0, 2, 1, 1, 2, 3);
          var p = 4;
          u.splice(u.length, 0, c[2], c[3], c[6], c[7]),
            h.splice(h.length, 0, p + 0, p + 2, p + 1, p + 1, p + 2, p + 3),
            (p += 4),
            u.splice(u.length, 0, c[4], c[5], c[0], c[1]),
            h.splice(h.length, 0, p + 0, p + 2, p + 1, p + 1, p + 2, p + 3),
            (p += 4),
            u.splice(u.length, 0, c[6], c[7], c[4], c[5]),
            h.splice(h.length, 0, p + 0, p + 2, p + 1, p + 1, p + 2, p + 3),
            (p += 4),
            u.splice(u.length, 0, c[3], c[1], c[7], c[5]),
            h.splice(h.length, 0, p + 0, p + 2, p + 1, p + 1, p + 2, p + 3),
            (p += 4),
            u.splice(u.length, 0, c[2], c[6], c[0], c[4]),
            h.splice(h.length, 0, p + 0, p + 2, p + 1, p + 1, p + 2, p + 3),
            (p += 4);
          var f = $3Dmol.extend({}, e);
          (f.vertexArr = u), (f.faceArr = h), (f.normalArr = []), a(this, d, f);
          var m = new $3Dmol.Vector3();
          l.push({ centroid: m.addVectors(c[0], c[7]).multiplyScalar(0.5) });
          var g = d.updateGeoGroup(0);
          i(this.boundingSphere, l, g.vertexArray, g.vertices);
        }),
        (this.addCylinder = function (e) {
          (e.start = e.start || {}), (e.end = e.end || {});
          var t = new $3Dmol.Vector3(
              e.start.x || 0,
              e.start.y || 0,
              e.start.z || 0
            ),
            r = new $3Dmol.Vector3(e.end.x, e.end.y || 0, e.end.z || 0);
          void 0 === r.x && (r.x = 3);
          var n = e.radius || 0.1,
            o = $3Dmol.CC.color(e.color);
          this.intersectionShape.cylinder.push(new $3Dmol.Cylinder(t, r, n)),
            $3Dmol.GLDraw.drawCylinder(d, t, r, n, o, e.fromCap, e.toCap);
          var a = new $3Dmol.Vector3();
          l.push({ centroid: a.addVectors(t, r).multiplyScalar(0.5) });
          var s = d.updateGeoGroup(0);
          i(this.boundingSphere, l, s.vertexArray, s.vertices);
        }),
        (this.addDashedCylinder = function (e) {
          (e.start = e.start || {}),
            (e.end = e.end || {}),
            (e.dashLength = e.dashLength || 0.25),
            (e.gapLength = e.gapLength || 0.25);
          var t = new $3Dmol.Vector3(
              e.start.x || 0,
              e.start.y || 0,
              e.start.z || 0
            ),
            r = new $3Dmol.Vector3(e.end.x, e.end.y || 0, e.end.z || 0);
          void 0 === r.x && (r.x = 3);
          for (
            var n = e.radius || 0.1,
              o = $3Dmol.CC.color(e.color),
              a = Math.sqrt(
                Math.pow(t.x - r.x, 2) +
                  Math.pow(t.y - r.y, 2) +
                  Math.pow(t.z - r.z, 2)
              ),
              s = a / (e.gapLength + e.dashLength),
              c = new $3Dmol.Vector3(
                e.start.x || 0,
                e.start.y || 0,
                e.start.z || 0
              ),
              u = new $3Dmol.Vector3(e.end.x, e.end.y || 0, e.end.z || 0),
              h = new $3Dmol.Vector3(
                (r.x - t.x) / (a / e.gapLength),
                (r.y - t.y) / (a / e.gapLength),
                (r.z - t.z) / (a / e.gapLength)
              ),
              p = new $3Dmol.Vector3(
                (r.x - t.x) / (a / e.dashLength),
                (r.y - t.y) / (a / e.dashLength),
                (r.z - t.z) / (a / e.dashLength)
              ),
              f = 0;
            f < s;
            f++
          )
            (u = new $3Dmol.Vector3(c.x + p.x, c.y + p.y, c.z + p.z)),
              this.intersectionShape.cylinder.push(
                new $3Dmol.Cylinder(c, u, n)
              ),
              $3Dmol.GLDraw.drawCylinder(d, c, u, n, o, e.fromCap, e.toCap),
              (c = new $3Dmol.Vector3(u.x + h.x, u.y + h.y, u.z + h.z));
          var m = new $3Dmol.Vector3();
          l.push({ centroid: m.addVectors(t, r).multiplyScalar(0.5) });
          var g = d.updateGeoGroup(0);
          i(this.boundingSphere, l, g.vertexArray, g.vertices);
        }),
        (this.addCurve = function (e) {
          (e.points = e.points || []),
            (e.smooth = e.smooth || 10),
            void 0 === e.fromCap && (e.fromCap = 2),
            void 0 === e.toCap && (e.toCap = 2);
          var t = $3Dmol.subdivide_spline(e.points, e.smooth);
          if (t.length < 3) console.log("Too few points in addCurve");
          else {
            var r = e.radius || 0.1,
              n = $3Dmol.CC.color(e.color),
              i = 0,
              o = t.length - 1,
              a = t[0].distanceTo(t[1]),
              s = Math.ceil((2 * r) / a);
            if (e.toArrow) {
              let e = {
                start: t[(o -= s)],
                end: t[t.length - 1],
                radius: r,
                color: n,
                mid: 1e-4,
              };
              this.addArrow(e);
            }
            if (e.fromArrow) {
              let e = {
                start: t[(i += s)],
                end: t[0],
                radius: r,
                color: n,
                mid: 1e-4,
              };
              this.addArrow(e);
            }
            for (
              var l = Math.ceil(t.length / 2),
                c = { radius: r, color: n, fromCap: 2, toCap: 2 },
                u = i;
              u < o;
              u++
            )
              (c.start = t[u]),
                (c.end = t[u + 1]),
                (c.fromCap = 2),
                (c.toCap = 2),
                u < l
                  ? ((c.fromCap = 2), (c.toCap = 0))
                  : u > l
                  ? ((c.fromCap = 0), (c.toCap = 2))
                  : ((c.fromCap = 2), (c.toCap = 2)),
                this.addCylinder(c);
          }
        }),
        (this.addLine = function (e) {
          (e.start = e.start || {}), (e.end = e.end || {});
          var t = new $3Dmol.Vector3(
              e.start.x || 0,
              e.start.y || 0,
              e.start.z || 0
            ),
            r = new $3Dmol.Vector3(e.end.x, e.end.y || 0, e.end.z || 0);
          void 0 === r.x && (r.x = 3);
          var n = d.updateGeoGroup(2),
            o = n.vertices,
            a = 3 * o,
            s = n.vertexArray;
          (s[a] = t.x),
            (s[a + 1] = t.y),
            (s[a + 2] = t.z),
            (s[a + 3] = r.x),
            (s[a + 4] = r.y),
            (s[a + 5] = r.z),
            (n.vertices += 2);
          var c = n.lineArray,
            u = n.lineidx;
          (c[u] = o), (c[u + 1] = o + 1), (n.lineidx += 2);
          var h = new $3Dmol.Vector3();
          l.push({ centroid: h.addVectors(t, r).multiplyScalar(0.5) }),
            (n = d.updateGeoGroup(0)),
            i(this.boundingSphere, l, n.vertexArray, n.vertices);
        }),
        (this.addArrow = function (e) {
          if (
            ((e.start = e.start || {}),
            (e.end = e.end || {}),
            (e.start = new $3Dmol.Vector3(
              e.start.x || 0,
              e.start.y || 0,
              e.start.z || 0
            )),
            e.dir instanceof $3Dmol.Vector3 && "number" == typeof e.length)
          ) {
            var t = e.dir.clone().multiplyScalar(e.length).add(e.start);
            e.end = t;
          } else
            (e.end = new $3Dmol.Vector3(e.end.x, e.end.y || 0, e.end.z || 0)),
              void 0 === e.end.x && (e.end.x = 3);
          (e.radius = e.radius || 0.1),
            (e.radiusRatio = e.radiusRatio || 1.618034),
            (e.mid = 0 < e.mid && e.mid < 1 ? e.mid : 0.618034),
            n(this, d, e);
          var r = new $3Dmol.Vector3();
          l.push({
            centroid: r.addVectors(e.start, e.end).multiplyScalar(0.5),
          });
          var o = d.updateGeoGroup(0);
          i(this.boundingSphere, l, o.vertexArray, o.vertices);
        });
      var p = function (e, t, r) {
        for (var n = 0; n < t.length; n++)
          if (
            ((i = t[n]),
            (o = e),
            Math.sqrt(
              Math.pow(i.x - o.x, 2) +
                Math.pow(i.y - o.y, 2) +
                Math.pow(i.z - o.z, 2)
            ) <= r)
          )
            return !0;
        var i, o;
        return !1;
      };
      (this.addIsosurface = function (t, r, n) {
        var i,
          o,
          s = void 0 !== r.isoval && "number" == typeof r.isoval ? r.isoval : 0,
          l = !!r.voxel,
          c = void 0 === r.smoothness ? 1 : r.smoothness,
          u = t.size.x,
          h = t.size.y,
          f = t.size.z,
          m = new Int16Array(u * h * f),
          g = t.data;
        for (i = 0, o = m.length; i < o; ++i) m[i] = -1;
        var v = new Uint8Array(u * h * f);
        for (i = 0, o = g.length; i < o; ++i) {
          (s >= 0 ? g[i] - s : s - g[i]) > 0 && (v[i] |= e);
        }
        var y = [],
          x = [];
        $3Dmol.MarchingCube.march(v, y, x, {
          fulltable: !0,
          voxel: l,
          unitCube: t.unit,
          origin: t.origin,
          matrix: t.matrix,
          nX: u,
          nY: h,
          nZ: f,
        }),
          !l && c > 0 && $3Dmol.MarchingCube.laplacianSmooth(c, y, x);
        var b = [],
          w = [],
          D = [];
        if (
          (r.selectedRegion &&
            void 0 === r.coords &&
            (r.coords = r.selectedRegion),
          void 0 !== r.coords)
        ) {
          var C = r.coords[0].x,
            S = r.coords[0].y,
            A = r.coords[0].z,
            $ = r.coords[0].x,
            M = r.coords[0].y,
            k = r.coords[0].z;
          for (let e = 0; e < r.coords.length; e++)
            r.coords[e].x > C
              ? (C = r.coords[e].x)
              : r.coords[e].x < $ && ($ = r.coords[e].x),
              r.coords[e].y > S
                ? (S = r.coords[e].y)
                : r.coords[e].y < M && (M = r.coords[e].y),
              r.coords[e].z > A
                ? (A = r.coords[e].z)
                : r.coords[e].z < k && (k = r.coords[e].z);
          var z = 2;
          void 0 !== r.radius && (z = r.radius),
            void 0 !== r.selectedOffset && (z = r.selectedOffset),
            void 0 !== r.seldist && (z = r.seldist),
            ($ -= z),
            (C += z),
            (M -= z),
            (S += z),
            (k -= z),
            (A += z);
          for (let e = 0; e < y.length; e++)
            y[e].x > $ &&
            y[e].x < C &&
            y[e].y > M &&
            y[e].y < S &&
            y[e].z > k &&
            y[e].z < A &&
            p(y[e], r.coords, z)
              ? (b.push(w.length), w.push(y[e]))
              : b.push(-1);
          for (let e = 0; e + 2 < x.length; e += 3)
            -1 !== b[x[e]] &&
              -1 !== b[x[e + 1]] &&
              -1 !== b[x[e + 2]] &&
              (D.push(x[e] - (x[e] - b[x[e]])),
              D.push(x[e + 1] - (x[e + 1] - b[x[e + 1]])),
              D.push(x[e + 2] - (x[e + 2] - b[x[e + 2]])));
          (y = w), (x = D);
        }
        a(this, d, {
          vertexArr: y,
          faceArr: x,
          normalArr: [],
          clickable: r.clickable,
          hoverable: r.hoverable,
        }),
          this.updateStyle(r);
        var _ = new $3Dmol.Vector3(t.origin.x, t.origin.y, t.origin.z),
          T = new $3Dmol.Vector3(
            t.size.x * t.unit.x,
            t.size.y * t.unit.y,
            t.size.z * t.unit.z
          ),
          L = new $3Dmol.Vector3(0, 0, 0),
          E = _.clone(),
          I = _.clone().add(T);
        for (let e = 0; e < y.length; e++)
          L.add(y[e]), E.max(y[e]), I.min(y[e]);
        L.divideScalar(y.length);
        var F = L.distanceTo(I),
          O = L.distanceTo(E);
        (this.boundingSphere.center = L),
          (this.boundingSphere.radius = Math.max(F, O)),
          "function" == typeof n && n();
      }),
        (this.addVolumetricData = function (e, t, r) {
          (e = new $3Dmol.VolumeData(e, t)), this.addIsosurface(e, r);
        }),
        (this.finalize = function () {
          return t(d), d.initTypedArrays(), d;
        }),
        (this.globj = function (e) {
          if ((u && (e.remove(u), (u = null)), !this.hidden)) {
            t(d),
              d.initTypedArrays(),
              this.wireframe && d.setUpWireframe(),
              void 0 !== this.color && r(d, this.color),
              (c = new $3Dmol.Object3D());
            var n = null;
            n =
              this.side == $3Dmol.DoubleSide
                ? new $3Dmol.MeshDoubleLambertMaterial({
                    wireframe: this.wireframe,
                    side: this.side,
                    transparent: this.opacity < 1,
                    opacity: this.opacity,
                    wireframeLinewidth: this.linewidth,
                    vertexColors: $3Dmol.VertexColors,
                  })
                : new $3Dmol.MeshLambertMaterial({
                    wireframe: this.wireframe,
                    side: this.side,
                    transparent: this.opacity < 1,
                    opacity: this.opacity,
                    wireframeLinewidth: this.linewidth,
                    vertexColors: $3Dmol.VertexColors,
                  });
            var i = new $3Dmol.Mesh(d, n);
            c.add(i);
            var o = new $3Dmol.LineBasicMaterial({
                linewidth: this.linewidth,
                color: this.color,
              }),
              a = new $3Dmol.Line(h, o, $3Dmol.LinePieces);
            c.add(a), (u = c.clone()), e.add(u);
          }
        }),
        (this.removegl = function (e) {
          u &&
            (void 0 !== u.geometry && u.geometry.dispose(),
            void 0 !== u.material && u.material.dispose(),
            e.remove(u),
            (u = null)),
            (c = null);
        });
    }
    return (
      Object.defineProperty(l.prototype, "position", {
        get: function () {
          return this.boundingSphere.center;
        },
      }),
      Object.defineProperty(l.prototype, "x", {
        get: function () {
          return this.boundingSphere.center.x;
        },
      }),
      Object.defineProperty(l.prototype, "y", {
        get: function () {
          return this.boundingSphere.center.y;
        },
      }),
      Object.defineProperty(l.prototype, "z", {
        get: function () {
          return this.boundingSphere.center.z;
        },
      }),
      l
    );
  })()),
  ($3Dmol.ShapeIDCount = 0),
  ($3Dmol.splitMesh = function (e) {
    if (e.vertexArr.length < 64e3) return [e];
    var t = [{ vertexArr: [], normalArr: [], faceArr: [] }];
    e.colorArr && (t.colorArr = []);
    var r = [],
      n = [],
      i = 0,
      o = e.faceArr;
    for (let s = 0, l = o.length; s < l; s += 3) {
      let l = t[i];
      for (let t = 0; t < 3; t++) {
        var a = o[s + t];
        r[a] !== i &&
          ((r[a] = i),
          (n[a] = l.vertexArr.length),
          l.vertexArr.push(e.vertexArr[a]),
          e.normalArr && e.normalArr[a] && l.normalArr.push(e.normalArr[a]),
          e.colorArr && e.colorArr[a] && l.colorArr.push(e.colorArr[a])),
          l.faceArr.push(n[a]);
      }
      l.vertexArr.length >= 64e3 &&
        (t.push({ vertexArr: [], normalArr: [], faceArr: [] }),
        e.colorArr && (t.colorArr = []),
        i++);
    }
    return t;
  }),
  ($3Dmol.GLViewer = (function () {
    var e = 4,
      t = 64e3;
    return function (r, n) {
      var i = (n = n || {}).callback,
        o = n.defaultcolors;
      o || (o = $3Dmol.elementColors.defaultColors);
      var a = n.nomouse,
        s = 0;
      (n.backgroundColor = n.backgroundColor || "#ffffff"),
        null != typeof n.backgroundColor &&
          (s = $3Dmol.CC.color(n.backgroundColor).getHex()),
        (n.backgroundAlpha = null == n.backgroundAlpha ? 1 : n.backgroundAlpha);
      var l = 0;
      null != typeof n.camerax && (l = parseFloat(n.camerax));
      var c = this,
        u = (this.container = $(r)),
        d = null,
        h = null,
        p = [],
        f = {},
        m = [],
        g = [],
        v = [],
        y = [],
        x = [],
        b = [],
        w = null,
        D = 500,
        C = 0;
      null != n.hoverDuration && (D = n.hoverDuration),
        void 0 === n.antialias && (n.antialias = !0),
        void 0 === n.cartoonQuality && (n.cartoonQuality = 5);
      var S = function () {
          let e = u[0],
            t = e.getBoundingClientRect();
          if (0 == t.width && 0 == t.height && "none" === e.style.display) {
            let r = e.style.position,
              n = e.style.visibility;
            (e.style.display = "block"),
              (e.style.visibility = "hidden"),
              (e.style.position = "absolute"),
              (t = e.getBoundingClientRect()),
              (e.style.display = "none"),
              (e.style.visibility = n),
              (e.style.position = r);
          }
          return t;
        },
        A = function () {
          return S().width;
        },
        M = function () {
          return S().height;
        },
        k = A(),
        z = M(),
        _ = null,
        T = null,
        L = 150,
        E = 20,
        I = [],
        F = null;
      function O() {
        ((F = new $3Dmol.Renderer({
          antialias: n.antialias,
          preserveDrawingBuffer: !0,
          premultipliedAlpha: !1,
          id: n.id,
          row: n.row,
          col: n.col,
          rows: n.rows,
          cols: n.cols,
          canvas: n.canvas,
          containerWidth: k || 1,
          containerHeight: z || 1,
        })).domElement.style.width = "100%"),
          (F.domElement.style.height = "100%"),
          (F.domElement.style.padding = "0"),
          (F.domElement.style.position = "absolute"),
          (F.domElement.style.top = "0px"),
          (F.domElement.style.left = "0px"),
          (F.domElement.style.zIndex = "0");
      }
      O();
      var R = n.row,
        N = n.col,
        P = n.cols,
        V = n.rows,
        B = n.viewers,
        U = n.control_all,
        j = F.getAspect(k, z),
        G = new $3Dmol.Camera(E, j, 1, 800, n.orthographic);
      G.position = new $3Dmol.Vector3(l, 0, L);
      var H = new $3Dmol.Vector3();
      G.lookAt(H);
      var q = new $3Dmol.Raycaster(
          new $3Dmol.Vector3(0, 0, 0),
          new $3Dmol.Vector3(0, 0, 0)
        ),
        W = new $3Dmol.Projector(),
        Y = null,
        X = null,
        Z = null,
        Q = -50,
        K = 50,
        J = new $3Dmol.Quaternion(0, 0, 0, 1),
        ee = new $3Dmol.Quaternion(0, 0, 0, 1),
        te = 0,
        re = new Set(),
        ne = !1,
        ie = 0,
        oe = 0,
        ae = 0,
        se = !1,
        le = 0,
        ce = 0,
        ue = 0,
        de = 0,
        he = function () {
          --te < 0 && (te = 0);
        },
        pe = function () {
          te++;
        },
        fe = function () {
          var e = 0;
          for (var t in f)
            if (f.hasOwnProperty(t)) {
              var r = parseInt(t);
              isNaN(r) || (t = r), t > e && (e = t);
            }
          return e + 1;
        },
        me = function () {
          var e = G.position.z - X.position.z;
          e < 1 && (e = 1),
            (G.near = e + Q),
            G.near < 1 && (G.near = 1),
            (G.far = e + K),
            G.near + 1 > G.far && (G.far = G.near + 1),
            (G.fov = E),
            (G.right = e * Math.tan((Math.PI / 180) * E)),
            (G.left = -G.right),
            (G.top = G.right / j),
            (G.bottom = -G.top),
            G.updateProjectionMatrix(),
            (Y.fog.near = G.near + 0.4 * (G.far - G.near)),
            (Y.fog.far = G.far),
            n.disableFog && (Y.fog.near = Y.fog.far);
        },
        ge = function (e) {
          if (
            (F.setViewport(),
            Y &&
              (me(), F.render(Y, G), _ && _(c.getView()), !e && I.length > 0))
          )
            for (var t = c.getView(), r = 0; r < I.length; r++) {
              I[r].setView(t, !0);
            }
        };
      !(function () {
        ((Y = new $3Dmol.Scene()).fog = new $3Dmol.Fog(s, 100, 200)),
          (Z = new $3Dmol.Object3D()),
          ((X = new $3Dmol.Object3D()).useQuaternion = !0),
          (X.quaternion = new $3Dmol.Quaternion(0, 0, 0, 1)),
          X.add(Z),
          Y.add(X);
        var e = new $3Dmol.Light(16777215);
        (e.position = new $3Dmol.Vector3(0.2, 0.2, 1).normalize()),
          (e.intensity = 1),
          Y.add(e);
      })(),
        F.setClearColorHex(s, n.backgroundAlpha),
        (Y.fog.color = $3Dmol.CC.color(s));
      let ve = (this.targetedObjects = function (e, t, r) {
        var n = { x: e, y: t, z: -1 };
        return (
          Array.isArray(r) || (r = this.selectedAtoms(r)),
          0 == r.length ? [] : (q.setFromCamera(n, G), q.intersectObjects(Z, r))
        );
      });
      var ye = function () {
        let e = d.get(0),
          t = e.getBoundingClientRect(),
          r = e.ownerDocument,
          n = r.documentElement,
          i = r.defaultView;
        return {
          top: t.top + i.pageYOffset - n.clientTop,
          left: t.left + i.pageXOffset - n.clientLeft,
        };
      };
      this.modelToScreen = function (e) {
        let t = !1;
        Array.isArray(e) || ((e = [e]), (t = !0));
        let r = [],
          n = ye();
        return (
          e.forEach((e) => {
            let t = new $3Dmol.Vector3(e.x, e.y, e.z);
            t.applyMatrix4(Z.matrixWorld), W.projectVector(t, G);
            let i = (k * (t.x + 1)) / 2 + n.left,
              o = (-z * (t.y - 1)) / 2 + n.top;
            r.push({ x: i, y: o });
          }),
          t && (r = r[0]),
          r
        );
      };
      var xe = function (e, t) {
          w != e &&
            (w &&
              ("function" != typeof w.unhover_callback &&
                (w.unhover_callback = $3Dmol.makeFunction(w.unhover_callback)),
              w.unhover_callback(w, c, t, u)),
            (w = e),
            e &&
              void 0 !== e.hover_callback &&
              ("function" != typeof e.hover_callback &&
                (e.hover_callback = $3Dmol.makeFunction(e.hover_callback)),
              "function" == typeof e.hover_callback &&
                e.hover_callback(e, c, t, u)));
        },
        be = function (e) {
          var t =
              e.originalEvent.targetTouches[0].pageX -
              e.originalEvent.targetTouches[1].pageX,
            r =
              e.originalEvent.targetTouches[0].pageY -
              e.originalEvent.targetTouches[1].pageY;
          return Math.sqrt(t * t + r * r);
        },
        we = function (e) {
          var t = e.pageX;
          return (
            null == t && (t = e.originalEvent.pageX),
            e.originalEvent.targetTouches && e.originalEvent.targetTouches[0]
              ? (t = e.originalEvent.targetTouches[0].pageX)
              : e.originalEvent.changedTouches &&
                e.originalEvent.changedTouches[0] &&
                (t = e.originalEvent.changedTouches[0].pageX),
            t
          );
        },
        De = function (e) {
          var t = e.pageY;
          return (
            null == t && (t = e.originalEvent.pageY),
            e.originalEvent.targetTouches && e.originalEvent.targetTouches[0]
              ? (t = e.originalEvent.targetTouches[0].pageY)
              : e.originalEvent.changedTouches &&
                e.originalEvent.changedTouches[0] &&
                (t = e.originalEvent.changedTouches[0].pageY),
            t
          );
        },
        Ce = (this.screenOffsetToModel = function (e, t, r) {
          var n = e / k,
            i = t / z,
            o = void 0 === r ? X.position.z : r,
            a = X.quaternion,
            s = new $3Dmol.Vector3(0, 0, o);
          return (
            W.projectVector(s, G),
            (s.x += 2 * n),
            (s.y -= 2 * i),
            W.unprojectVector(s, G),
            (s.z = 0),
            s.applyQuaternion(a),
            s
          );
        });
      this.screenToModelDistance = function (e, t) {
        let r = ye(),
          n = new $3Dmol.Vector3(t.x, t.y, t.z);
        n.applyMatrix4(Z.matrixWorld);
        let i = n.clone();
        W.projectVector(n, G);
        let o = new $3Dmol.Vector3(
          (2 * (e.x - r.left)) / k - 1,
          (2 * (e.y - r.top)) / -z + 1,
          n.z
        );
        return W.unprojectVector(o, G), o.distanceTo(i);
      };
      var Se = function (e, t) {
        if (null != B && !U) {
          var r = k / P,
            n = z / V,
            i = ye(),
            o = e - i.left,
            a = t - i.top,
            s = V - Math.floor(a / n) - 1,
            l = Math.floor(o / r);
          if (s != R || l != N) return !1;
        }
        return !0;
      };
      $("body").on("mouseup touchend", function (e) {
        if (((se = !1), ne && Y)) {
          var t = we(e),
            r = De(e);
          if (t == ie && r == oe) {
            var n = ye();
            !(function (e, t, r) {
              let n = ve(e, t, y);
              if (n.length) {
                var i = n[0].clickable;
                void 0 !== i.callback &&
                  ("function" != typeof i.callback &&
                    (i.callback = $3Dmol.makeFunction(i.callback)),
                  "function" == typeof i.callback && i.callback(i, c, r, u));
              }
            })(((t - n.left) / k) * 2 - 1, (-(r - n.top) / z) * 2 + 1, e);
          }
        }
        ne = !1;
      });
      var Ae,
        $e = function (e) {
          if (n.lowerZoomLimit && n.lowerZoomLimit > 0) {
            var t = L - n.lowerZoomLimit;
            e > t && (e = t);
          }
          if (n.upperZoomLimit && n.upperZoomLimit > 0) {
            var r = L - n.upperZoomLimit;
            e < r && (e = r);
          }
          return e > L && (e = 0.999 * L), e;
        };
      (this.setViewChangeCallback = function (e) {
        ("function" != typeof e && null != e) || (_ = e);
      }),
        (this.setStateChangeCallback = function (e) {
          ("function" != typeof e && null != e) || (T = e);
        }),
        (this.getInternalState = function () {
          var e = { models: [], surfaces: [], shapes: [], labels: [] };
          for (let t = 0; t < p.length; t++)
            p[t] && (e.models[t] = p[t].getInternalState());
          return e;
        }),
        (this.setInternalState = function (e) {
          this.clear();
          var t = e.models;
          for (let e = 0; e < t.length; e++)
            t[e] &&
              ((p[e] = new $3Dmol.GLModel(e)), p[e].setInternalState(t[e]));
          this.render();
        }),
        (this.setZoomLimits = function (e, t) {
          void 0 !== e && (n.lowerZoomLimit = e),
            t && (n.upperZoomLimit = t),
            (X.position.z = $e(X.position.z)),
            ge();
        }),
        (this.setCameraParameters = function (e) {
          void 0 !== e.fov && ((E = e.fov), (G.fov = E)),
            void 0 !== e.z && ((L = e.z), (G.z = L));
        });
      var Me,
        ke = (this._handleMouseDown = function (e) {
          if ((e.preventDefault(), Y)) {
            var t = we(e),
              r = De(e);
            void 0 !== t &&
              ((ne = !0),
              null,
              (Ae = e.which),
              (ie = t),
              (oe = r),
              (se = !0),
              (ae = 0),
              e.originalEvent.targetTouches &&
                2 == e.originalEvent.targetTouches.length &&
                (ae = be(e)),
              (J = X.quaternion.clone()),
              (ce = X.position.z),
              (le = Z.position.clone()),
              (ue = Q),
              (de = K),
              setTimeout(function () {
                e.originalEvent.targetTouches &&
                  1 == se &&
                  (d = $(F.domElement)).trigger("contextmenu");
              }, 1e3),
              h.exitContextMenu());
          }
        }),
        ze = (this._handleMouseScroll = function (e) {
          if ((e.preventDefault(), Y)) {
            var t = we(e),
              r = De(e);
            if (void 0 !== t && Se(t, r)) {
              var n = 0.85 * (L - X.position.z),
                i = 1;
              e.originalEvent.ctrlKey && (i = -1),
                e.originalEvent.detail
                  ? (X.position.z += (i * n * e.originalEvent.detail) / 10)
                  : e.originalEvent.wheelDelta &&
                    (X.position.z -=
                      (i * n * e.originalEvent.wheelDelta) / 400),
                (X.position.z = $e(X.position.z)),
                ge(),
                h.exitContextMenu();
            }
          }
        });
      (this.pngURI = function () {
        return this.getCanvas().toDataURL("image/png");
      }),
        (this.getCanvas = function () {
          return d.get(0);
        }),
        (this.getRenderer = function () {
          return F;
        }),
        (h = new $3Dmol.StateManager(c, n)),
        (this.setHoverDuration = function (e) {
          D = e;
        });
      var _e = (this._handleMouseMove = function (e) {
          clearTimeout(Me);
          var t = ye(),
            r = ((we(e) - t.left) / k) * 2 - 1,
            n = (-(De(e) - t.top) / z) * 2 + 1;
          if (
            (null !== w &&
              (function (e, t) {
                let r = ve(e, t, x);
                (0 != r.length && void 0 !== r[0]) || xe(null),
                  void 0 !== r[0] && r[0].clickable !== w && xe(null);
              })(r, n),
            x.length > 0 &&
              (Me = setTimeout(function () {
                !(function (e, t) {
                  if (0 == x.length) return;
                  let r = ve(e, t, x);
                  if (r.length) {
                    var n = r[0].clickable;
                    xe(n), (w = n);
                  } else xe(null);
                })(r, n);
              }, D)),
            e.preventDefault(),
            Y && ne)
          ) {
            var i = 0,
              o = we(e),
              a = De(e);
            if (void 0 !== o && Se(o, a)) {
              var s = (o - ie) / k,
                l = (a - oe) / z;
              if (
                0 != ae &&
                e.originalEvent.targetTouches &&
                2 == e.originalEvent.targetTouches.length
              )
                (i = 2), (l = (2 * (be(e) - ae)) / (k + z));
              else
                e.originalEvent.targetTouches &&
                  3 == e.originalEvent.targetTouches.length &&
                  (i = 1);
              var c = F.getXRatio(),
                u = F.getYRatio();
              (s *= c), (l *= u);
              var d,
                h = Math.sqrt(s * s + l * l);
              if (3 == i || (3 == Ae && e.ctrlKey))
                (Q = ue + 100 * s), (K = de - 100 * l);
              else if (2 == i || 3 == Ae || e.shiftKey)
                (d = 0.85 * (L - X.position.z)) < 80 && (d = 80),
                  (X.position.z = ce + l * d),
                  (X.position.z = $e(X.position.z));
              else if (1 == i || 2 == Ae || e.ctrlKey) {
                var p = Ce(c * (o - ie), u * (a - oe));
                Z.position.addVectors(le, p);
              } else if ((0 === i || 1 == Ae) && 0 !== h) {
                var f = Math.sin(h * Math.PI) / h;
                (ee.x = Math.cos(h * Math.PI)),
                  (ee.y = 0),
                  (ee.z = f * s),
                  (ee.w = -f * l),
                  X.quaternion.set(1, 0, 0, 0),
                  X.quaternion.multiply(ee),
                  X.quaternion.multiply(J);
              }
              ge();
            }
          }
        }),
        Te = (this._handleContextMenu = function (e) {
          e.preventDefault();
          var t = we(e),
            r = De(e);
          if (t == ie && r == oe) {
            var n = ie,
              i = oe,
              o = ye();
            !(function (e, t) {
              let r = ve(e, t, b);
              var n = null;
              r.length && (n = r[0].clickable);
              var i = ye(),
                o = ie - i.left,
                a = oe - i.top;
              h.openContextMenu(n, o, a);
            })(((n - o.left) / k) * 2 - 1, (-(i - o.top) / z) * 2 + 1);
          }
        }),
        Le = function (e) {
          (u = e),
            (k = A()),
            (z = M()),
            (j = F.getAspect(k, z)),
            F.setSize(k, z),
            u.append(F.domElement),
            (d = $(F.domElement)),
            a ||
              (d.on("mousedown touchstart", ke),
              d.on("wheel", ze),
              d.on("mousemove touchmove", _e),
              d.on("contextmenu", Te));
        };
      Le(u),
        (this.setContainer = function (e) {
          return (
            "string" == typeof e && (e = $("#" + e)), e || (e = u), Le(e), this
          );
        }),
        (this.setBackgroundColor = function (e, t) {
          void 0 === t ? (t = 1) : (t < 0 || t > 1) && (t = 1);
          var r = $3Dmol.CC.color(e);
          return (
            (Y.fog.color = r),
            (s = r.getHex()),
            F.setClearColorHex(r.getHex(), t),
            ge(),
            this
          );
        }),
        (this.setProjection = function (e) {
          (G.ortho = "orthographic" === e), me();
        }),
        (this.setViewStyle = function (e) {
          if ("outline" === e.style) {
            var t = {};
            e.color && (t.color = $3Dmol.CC.color(e.color)),
              e.width && (t.width = e.width),
              F.enableOutline(t);
          } else F.disableOutline();
          return this;
        }),
        n.style && this.setViewStyle(n),
        (this.setWidth = function (e) {
          return (k = e || k), F.setSize(k, z), this;
        }),
        (this.setHeight = function (e) {
          return (z = e || z), F.setSize(k, z), this;
        }),
        (this.resize = function () {
          (k = A()), (z = M());
          let e = !1;
          if (
            (F.isLost() &&
              k > 0 &&
              z > 0 &&
              (u.children("canvas").remove(), O(), Le(u), (e = !0)),
            (j = F.getAspect(k, z)),
            F.setSize(k, z),
            (G.aspect = j),
            G.updateProjectionMatrix(),
            e)
          ) {
            let e = F.supportedExtensions();
            (e.regen = !0), c.render(null, e);
          } else ge();
          return h.updateUI(), this;
        }),
        $(window).resize(this.resize),
        void 0 !== typeof window.ResizeObserver &&
          new window.ResizeObserver(this.resize).observe(u[0]),
        (this.getModel = function (e) {
          return void 0 === e
            ? 0 == p.length
              ? null
              : p[p.length - 1]
            : e instanceof $3Dmol.GLModel
            ? e
            : e in p
            ? p[e]
            : 0 == p.length
            ? null
            : p[p.length - 1];
        });
      var Ee,
        Ie = function (e, t, r) {
          if (1 == r) return t;
          if (0 == r) return e;
          var n = e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
          if (n > 0.9995) {
            var i = new $3Dmol.Quaternion(
              e.x + r * (t.x - e.x),
              e.y + r * (t.y - e.y),
              e.z + r * (t.z - e.z),
              e.w + r * (t.w - e.w)
            );
            return i.normalize(), i;
          }
          n < 0 && ((t = t.clone().multiplyScalar(-1)), (n = -n)),
            n > 1 ? (n = 1) : n < -1 && (n = -1);
          var o = Math.acos(n) * r,
            a = t.clone();
          a.sub(e.clone().multiplyScalar(n)), a.normalize();
          var s = Math.cos(o),
            l = Math.sin(o),
            c = new $3Dmol.Quaternion(
              e.x * s + a.x * l,
              e.y * s + a.y * l,
              e.z * s + a.z * l,
              e.w * s + a.w * l
            );
          return c.normalize(), c;
        };
      this.spin = function (e, t) {
        if (
          (clearInterval(Ee), void 0 === e && (e = "y"), "boolean" == typeof e)
        ) {
          if (!e) return;
          e = "y";
        }
        "number" != typeof t && (t = 1),
          Array.isArray(e) && (e = { x: e[0], y: e[1], z: e[2] });
        var r = this;
        Ee = setInterval(function () {
          !r.getCanvas().isConnected && F.isLost() && clearInterval(Ee),
            r.rotate(1 * t, e);
        }, 25);
      };
      var Fe = function (e, t, r, n, i, o) {
        var a = Math.ceil(e / 20);
        a < 1 && (a = 1), pe();
        var s = {
          mpos: Z.position.clone(),
          rz: X.position.z,
          rot: X.quaternion.clone(),
          cam: H.clone(),
        };
        if (t) {
          for (var l = (a = new Array(a)).length, c = 0; c < l; c++) {
            let e = (c + 1) / l,
              t = { mpos: s.mpos, rz: s.rz, rot: s.rot };
            r && (t.mpos = r.clone().sub(s.mpos).multiplyScalar(e).add(s.mpos)),
              void 0 !== n && null != n && (t.rz = s.rz + e * (n - s.rz)),
              i && (t.rot = Ie(s.rot, i, e)),
              o && (t.cam = o.clone().sub(s.cam).multiplyScalar(e).add(s.cam)),
              (a[c] = t);
          }
          let e = 0,
            t = function () {
              var r = a[e];
              (e += 1),
                r.mpos && (Z.position = r.mpos),
                r.rz && (X.position.z = r.rz),
                r.rot && (X.quaternion = r.rot),
                r.cam && G.lookAt(r.cam),
                e < a.length ? setTimeout(t, 20) : he(),
                ge();
            };
          setTimeout(t, 20);
        } else {
          var u = {};
          let e = 1 / a;
          if (
            (r && (u.mpos = r.clone().sub(s.mpos).multiplyScalar(e)),
            void 0 !== n && null != n && (u.rz = e * (n - s.rz)),
            i)
          ) {
            var d = Ie(s.rot, i, e);
            u.rot = s.rot.clone().inverse().multiply(d);
          }
          o && (u.cam = o.clone().sub(s.cam).multiplyScalar(e));
          let t = 0,
            l = function () {
              (t += 1),
                u.mpos && Z.position.add(u.mpos),
                u.rz && (X.position.z += u.rz),
                u.rot && X.quaternion.multiply(u.rot),
                u.cam && (H.add(u.cam), G.lookAt(H)),
                t < a ? setTimeout(l, 20) : he(),
                ge();
            };
          setTimeout(l, 20);
        }
      };
      function Oe(e) {
        var t = [];
        if (void 0 === e || void 0 === e.model)
          for (let e = 0; e < p.length; e++) p[e] && t.push(p[e]);
        else {
          (t = e.model), Array.isArray(t) || (t = [t]);
          for (let e = 0; e < t.length; e++)
            if ("number" == typeof t[e]) {
              var r = t[e];
              r < 0 && (r += p.length), (t[e] = p[r]);
            }
        }
        return t;
      }
      function Re(e) {
        var t = [];
        void 0 === e && (e = {});
        for (var r = Oe(e), n = 0; n < r.length; n++)
          t = t.concat(r[n].selectedAtoms(e));
        return t;
      }
      function Ne(e, t) {
        void 0 === t && (t = {});
        for (var r = Oe(t), n = 0; n < r.length; n++)
          if (r[n].atomIsSelected(e, t)) return !0;
        return !1;
      }
      (this.rotate = function (e, t, r, n) {
        if (
          ((r = void 0 !== r ? r : 0),
          void 0 === t && (t = "y"),
          "x" == t
            ? (t = { x: 1, y: 0, z: 0 })
            : "y" == t
            ? (t = { x: 0, y: 1, z: 0 })
            : "z" == t && (t = { x: 0, y: 0, z: 1 }),
          "vx" == t
            ? (t = { vx: 1, vy: 0, vz: 0 })
            : "vy" == t
            ? (t = { vx: 0, vy: 1, vz: 0 })
            : "vz" == t && (t = { vx: 0, vy: 0, vz: 1 }),
          void 0 !== t.vx)
        ) {
          var i = new $3Dmol.Vector3(t.vx, t.vy, t.vz);
          i.applyQuaternion(X.quaternion), (t = { x: i.x, y: i.y, z: i.z });
        }
        var o = (function (e) {
          var r,
            n,
            i,
            o = Math.sin(e / 2),
            a = Math.cos(e / 2);
          return (
            (r = t.x * o),
            (n = t.y * o),
            (i = t.z * o),
            new $3Dmol.Quaternion(r, n, i, a).normalize()
          );
        })((Math.PI * e) / 180);
        if (r) {
          var a = new $3Dmol.Quaternion().copy(X.quaternion).multiply(o);
          Fe(r, n, Z.position, X.position.z, a, H);
        } else X.quaternion.multiply(o), ge();
        return this;
      }),
        (this.surfacesFinished = function () {
          for (var e in f) if (!f[e][0].done) return !1;
          return !0;
        }),
        (this.getView = function () {
          if (!Z) return [0, 0, 0, 0, 0, 0, 0, 1];
          var e = Z.position,
            t = X.quaternion;
          return [e.x, e.y, e.z, X.position.z, t.x, t.y, t.z, t.w];
        }),
        (this.setView = function (e, t) {
          return void 0 !== e &&
            (e instanceof Array || 8 !== e.length) &&
            Z &&
            X
            ? ((Z.position.x = e[0]),
              (Z.position.y = e[1]),
              (Z.position.z = e[2]),
              (X.position.z = e[3]),
              (X.quaternion.x = e[4]),
              (X.quaternion.y = e[5]),
              (X.quaternion.z = e[6]),
              (X.quaternion.w = e[7]),
              void 0 !== e[8] && ((X.position.x = e[8]), (X.position.y = e[9])),
              ge(t),
              this)
            : this;
        }),
        (this.render = function (e, t) {
          F.setViewport(),
            (function () {
              y.splice(0, y.length),
                x.splice(0, x.length),
                b.splice(0, b.length);
              for (let t = 0, r = p.length; t < r; t++) {
                var e = p[t];
                if (e) {
                  let t = e.selectedAtoms({ clickable: !0 }),
                    r = e.selectedAtoms({ hoverable: !0 }),
                    n = e.selectedAtoms({ contextMenuEnabled: !0 });
                  for (let e = 0; e < r.length; e++) x.push(r[e]);
                  for (let e = 0; e < t.length; e++) y.push(t[e]);
                  for (let e = 0; e < n.length; e++) b.push(n[e]);
                }
              }
              for (let e = 0, t = m.length; e < t; e++) {
                let t = m[e];
                t && t.clickable && y.push(t), t && t.hoverable && x.push(t);
              }
            })();
          var r,
            n,
            i = this.getView();
          for (
            T && T(this.getInternalState()),
              t || (t = F.supportedExtensions()),
              r = 0;
            r < p.length;
            r++
          )
            p[r] && p[r].globj(Z, t);
          for (r = 0; r < m.length; r++)
            m[r] &&
              (void 0 === m[r].frame ||
              C < 0 ||
              m[r].frame < 0 ||
              m[r].frame == C
                ? m[r].globj(Z, t)
                : m[r].removegl(Z));
          for (r = 0; r < g.length; r++)
            g[r] &&
              void 0 !== g[r].frame &&
              g[r].frame >= 0 &&
              (Z.remove(g[r].sprite),
              (C < 0 || g[r].frame == C) && Z.add(g[r].sprite));
          for (r in f)
            if (f.hasOwnProperty(r)) {
              var o = f[r];
              for (n = 0; n < o.length; n++)
                if (o.hasOwnProperty(n)) {
                  var a = o[n].geo;
                  if (!o[n].finished || t.regen) {
                    (a.verticesNeedUpdate = !0),
                      (a.elementsNeedUpdate = !0),
                      (a.normalsNeedUpdate = !0),
                      (a.colorsNeedUpdate = !0),
                      (a.buffersNeedUpdate = !0),
                      (a.boundingSphere = null),
                      o[n].done && (o[n].finished = !0),
                      o[n].lastGL && Z.remove(o[n].lastGL);
                    var s = null;
                    if (
                      ((s =
                        o[n].mat instanceof $3Dmol.LineBasicMaterial
                          ? new $3Dmol.Line(a, o[n].mat)
                          : new $3Dmol.Mesh(a, o[n].mat)),
                      o[n].mat.transparent && 0 == o[n].mat.opacity
                        ? (s.visible = !1)
                        : (s.visible = !0),
                      o[n].symmetries.length > 1 ||
                        (1 == o[n].symmetries.length &&
                          !o[n].symmetries[n].isIdentity()))
                    ) {
                      var l,
                        c = new $3Dmol.Object3D();
                      for (l = 0; l < o[n].symmetries.length; l++) {
                        var u = s.clone();
                        (u.matrix = o[n].symmetries[l]),
                          (u.matrixAutoUpdate = !1),
                          c.add(u);
                      }
                      (o[n].lastGL = c), Z.add(c);
                    } else (o[n].lastGL = s), Z.add(s);
                  }
                }
            }
          return this.setView(i), "function" == typeof e && e(this), this;
        }),
        (this.selectedAtoms = function (e) {
          return Re(e);
        }),
        (this.getUniqueValues = function (e, t) {
          void 0 === t && (t = {});
          var r = Re(t),
            n = {};
          for (var i in r) {
            if (r[i].hasOwnProperty(e)) n[r[i][e]] = !0;
          }
          return Object.keys(n);
        }),
        (this.pdbData = function (e) {
          for (var t = Re(e), r = "", n = 0, i = t.length; n < i; ++n)
            r += t[n].pdbline + "\n";
          return r;
        }),
        (this.zoom = function (e, t, r) {
          (e = e || 2), (t = void 0 !== t ? t : 0);
          var n = (L - X.position.z) / e,
            i = L - n;
          return (
            t > 0
              ? Fe(t, r, Z.position, $e(i), X.quaternion, H)
              : ((X.position.z = $e(i)), ge()),
            this
          );
        }),
        (this.translate = function (e, t, r, n) {
          r = void 0 !== r ? r : 0;
          var i = e / k,
            o = t / z,
            a = new $3Dmol.Vector3(0, 0, -L);
          W.projectVector(a, G),
            (a.x -= i),
            (a.y -= o),
            W.unprojectVector(a, G),
            (a.z = 0);
          var s = H.clone().add(a);
          return (
            r > 0
              ? Fe(r, n, Z.position, X.position.z, X.quaternion, s)
              : ((H = s), G.lookAt(H), ge()),
            this
          );
        }),
        (this.translateScene = function (e, t, r, n) {
          r = void 0 !== r ? r : 0;
          var i = Ce(e, t),
            o = Z.position.clone().add(i);
          return (
            r > 0
              ? Fe(r, n, Z.position, X.position.z, X.quaternion, H)
              : ((Z.position = o), ge()),
            this
          );
        }),
        (this.fitSlab = function (e) {
          var t = Re((e = e || {})),
            r = $3Dmol.getExtent(t),
            n = r[1][0] - r[0][0],
            i = r[1][1] - r[0][1],
            o = r[1][2] - r[0][2],
            a = Math.sqrt(n * n + i * i + o * o);
          return a < 5 && (a = 5), (Q = -a / 1.9), (K = a / 2), this;
        }),
        (this.center = function (e, t, r) {
          var n, i;
          t = void 0 !== t ? t : 0;
          var o = Re((e = e || {})),
            a = $3Dmol.getExtent(o);
          $3Dmol.isEmptyObject(e)
            ? (m.forEach((e) => {
                if (e && e.boundingSphere && e.boundingSphere.center) {
                  var t = e.boundingSphere.center,
                    r = e.boundingSphere.radius;
                  r > 0
                    ? (o.push(new $3Dmol.Vector3(t.x + r, t.y, t.z)),
                      o.push(new $3Dmol.Vector3(t.x - r, t.y, t.z)),
                      o.push(new $3Dmol.Vector3(t.x, t.y + r, t.z)),
                      o.push(new $3Dmol.Vector3(t.x, t.y - r, t.z)),
                      o.push(new $3Dmol.Vector3(t.x, t.y, t.z + r)),
                      o.push(new $3Dmol.Vector3(t.x, t.y, t.z - r)))
                    : o.push(t);
                }
              }),
              (a = $3Dmol.getExtent(o)),
              (n = o),
              (i = a))
            : ((n = Re({})), (i = $3Dmol.getExtent(n)));
          var s = new $3Dmol.Vector3(a[2][0], a[2][1], a[2][2]),
            l = i[1][0] - i[0][0],
            c = i[1][1] - i[0][1],
            u = i[1][2] - i[0][2],
            d = Math.sqrt(l * l + c * c + u * u);
          d < 5 && (d = 5),
            (Q = -d / 1.9),
            (K = d / 2),
            (l = a[1][0] - a[0][0]),
            (c = a[1][1] - a[0][1]),
            (u = a[1][2] - a[0][2]),
            (d = Math.sqrt(l * l + c * c + u * u)) < 5 && (d = 5);
          for (var h = 25, p = 0; p < o.length; p++)
            if (o[p]) {
              var f = s.distanceToSquared(o[p]);
              f > h && (h = f);
            }
          d = 2 * Math.sqrt(h);
          var g = s.clone().multiplyScalar(-1);
          return (
            t > 0
              ? Fe(t, r, g, X.position.z, X.quaternion, H)
              : ((Z.position = g), ge()),
            this
          );
        }),
        (this.zoomTo = function (e, t, r) {
          t = void 0 !== t ? t : 0;
          let i = Re((e = e || {})),
            o = $3Dmol.getExtent(i),
            a = o;
          if ($3Dmol.isEmptyObject(e)) {
            let e = i && i.length;
            if (
              (m.forEach((e) => {
                if (e && e.boundingSphere)
                  if (e.boundingSphere.box) {
                    let t = e.boundingSphere.box;
                    i.push(new $3Dmol.Vector3(t.min.x, t.min.y, t.min.z)),
                      i.push(new $3Dmol.Vector3(t.max.x, t.max.y, t.max.z));
                  } else if (e.boundingSphere.center) {
                    var t = e.boundingSphere.center,
                      r = e.boundingSphere.radius;
                    r > 0
                      ? (i.push(new $3Dmol.Vector3(t.x + r, t.y, t.z)),
                        i.push(new $3Dmol.Vector3(t.x - r, t.y, t.z)),
                        i.push(new $3Dmol.Vector3(t.x, t.y + r, t.z)),
                        i.push(new $3Dmol.Vector3(t.x, t.y - r, t.z)),
                        i.push(new $3Dmol.Vector3(t.x, t.y, t.z + r)),
                        i.push(new $3Dmol.Vector3(t.x, t.y, t.z - r)))
                      : i.push(t);
                  }
              }),
              (a = $3Dmol.getExtent(i)),
              !e)
            )
              for (let e = 0; e < 3; e++) o[2][e] = (a[0][e] + a[1][e]) / 2;
          } else {
            let e = Re({});
            a = $3Dmol.getExtent(e);
          }
          var s = new $3Dmol.Vector3(o[2][0], o[2][1], o[2][2]),
            l = a[1][0] - a[0][0],
            c = a[1][1] - a[0][1],
            u = a[1][2] - a[0][2],
            d = Math.sqrt(l * l + c * c + u * u);
          d < 5 && (d = 5),
            (Q = -d / 1.9),
            (K = d / 2),
            0 === Object.keys(e).length && ((Q = -999999), (K = 999999));
          var h = n.minimumZoomToDistance || 5;
          (l = o[1][0] - o[0][0]),
            (c = o[1][1] - o[0][1]),
            (u = o[1][2] - o[0][2]),
            (d = Math.sqrt(l * l + c * c + u * u)) < h && (d = h);
          for (var p = h * h, f = 0; f < i.length; f++)
            if (i[f]) {
              var g = s.distanceToSquared(i[f]);
              g > p && (p = g);
            }
          d = 2 * Math.sqrt(p);
          var v = s.clone().multiplyScalar(-1),
            y = -((0.5 * d) / Math.tan(((Math.PI / 180) * G.fov) / 2) - L);
          return (
            (y = $e(y)),
            t > 0
              ? Fe(t, r, v, y, X.quaternion, H)
              : ((Z.position = v), (X.position.z = y), ge()),
            this
          );
        }),
        (this.setSlab = function (e, t) {
          (Q = e), (K = t);
        }),
        (this.getSlab = function () {
          return { near: Q, far: K };
        }),
        (this.addLabel = function (e, t, r, n) {
          if (((t = t || {}), r)) {
            var i = $3Dmol.getExtent(Re(r));
            t.position = { x: i[2][0], y: i[2][1], z: i[2][2] };
          }
          var o = new $3Dmol.Label(e, t);
          return (
            o.setContext(),
            Z.add(o.sprite),
            t.fixed && v.push(g.length),
            g.push(o),
            n || ge(),
            o
          );
        }),
        (this.addResLabels = function (e, t, r) {
          let n = g.length;
          return Ve("addResLabels", e, this, t, r), ge(), g.slice(n);
        }),
        (this.addPropertyLabels = function (e, t, r) {
          return Ve("addPropertyLabels", e, t, this, r), ge(), this;
        }),
        (this.removeLabel = function (e) {
          for (var t = 0; t < g.length; t++)
            if (g[t] == e) {
              g.splice(t, 1), e.dispose(), Z.remove(e.sprite);
              break;
            }
          return ge(), this;
        }),
        (this.removeAllLabels = function () {
          for (var e = 0; e < g.length; e++)
            g[e] && g[e].sprite && Z.remove(g[e].sprite);
          return g.splice(0, g.length), ge(), this;
        }),
        (this.setLabelStyle = function (e, t) {
          return (
            Z.remove(e.sprite),
            e.dispose(),
            (e.stylespec = t),
            e.setContext(),
            Z.add(e.sprite),
            ge(),
            e
          );
        }),
        (this.setLabelText = function (e, t) {
          return (
            Z.remove(e.sprite),
            e.dispose(),
            (e.text = t),
            e.setContext(),
            Z.add(e.sprite),
            ge(),
            e
          );
        }),
        (this.addShape = function (e) {
          e = e || {};
          var t = new $3Dmol.GLShape(e);
          return (t.shapePosition = m.length), m.push(t), t;
        }),
        (this.removeShape = function (e) {
          if (!e) return this;
          for (
            e.removegl(Z), delete m[e.shapePosition];
            m.length > 0 && void 0 === m[m.length - 1];

          )
            m.pop();
          return this;
        }),
        (this.removeAllShapes = function () {
          for (var e = 0; e < m.length; e++) {
            var t = m[e];
            t && t.removegl(Z);
          }
          return m.splice(0, m.length), this;
        });
      var Pe = function (e) {
        if (
          e.hasOwnProperty("x") &&
          e.hasOwnProperty("y") &&
          e.hasOwnProperty("z")
        )
          return e;
        var t = Re(e);
        if (0 == t.length) return { x: 0, y: 0, z: 0 };
        var r = $3Dmol.getExtent(t);
        return {
          x: r[0][0] + (r[1][0] - r[0][0]) / 2,
          y: r[0][1] + (r[1][1] - r[0][1]) / 2,
          z: r[0][2] + (r[1][2] - r[0][2]) / 2,
        };
      };
      function Ve(e, t, r, n, i, o, a) {
        for (var s = Oe(t), l = 0; l < s.length; l++) s[l][e](t, r, n, i, o, a);
      }
      (this.addSphere = function (e) {
        (e = e || {}).center = Pe(e.center);
        var t = new $3Dmol.GLShape(e);
        return (
          (t.shapePosition = m.length),
          t.addSphere(e),
          m.push(t),
          t.finalize(),
          t
        );
      }),
        (this.addBox = function (e) {
          null != (e = e || {}).corner && (e.corner = Pe(e.corner)),
            null != e.center && (e.center = Pe(e.center));
          var t = new $3Dmol.GLShape(e);
          return (
            (t.shapePosition = m.length),
            t.addBox(e),
            m.push(t),
            t.finalize(),
            t
          );
        }),
        (this.addArrow = function (e) {
          ((e = e || {}).start = Pe(e.start)), (e.end = Pe(e.end));
          var t = new $3Dmol.GLShape(e);
          return (
            (t.shapePosition = m.length),
            t.addArrow(e),
            m.push(t),
            t.finalize(),
            t
          );
        }),
        (this.addCylinder = function (e) {
          ((e = e || {}).start = Pe(e.start)), (e.end = Pe(e.end));
          var t = new $3Dmol.GLShape(e);
          return (
            (t.shapePosition = m.length),
            e.dashed ? t.addDashedCylinder(e) : t.addCylinder(e),
            m.push(t),
            t.finalize(),
            t
          );
        }),
        (this.addCurve = function (e) {
          e = e || {};
          var t = new $3Dmol.GLShape(e);
          return (
            (t.shapePosition = m.length),
            t.addCurve(e),
            m.push(t),
            t.finalize(),
            t
          );
        }),
        (this.addLine = function (e) {
          ((e = e || {}).start = Pe(e.start)),
            (e.end = Pe(e.end)),
            (e.wireframe = !0);
          var t = new $3Dmol.GLShape(e);
          return (
            (t.shapePosition = m.length),
            e.dashed
              ? (t = (function (e, t) {
                  (e.dashLength = e.dashLength || 0.5),
                    (e.gapLength = e.gapLength || 0.5),
                    (e.start = e.start || {}),
                    (e.end = e.end || {});
                  var r,
                    n,
                    i,
                    o = new $3Dmol.Vector3(
                      e.start.x || 0,
                      e.start.y || 0,
                      e.start.z || 0
                    ),
                    a = new $3Dmol.Vector3(e.end.x, e.end.y || 0, e.end.z || 0),
                    s = new $3Dmol.Vector3(),
                    l = new $3Dmol.Vector3(),
                    c = new $3Dmol.Vector3(),
                    u = o.clone(),
                    d = 0;
                  s.subVectors(a, o),
                    (r = s.length()),
                    s.normalize(),
                    (l = s.clone()),
                    (c = s.clone()),
                    l.multiplyScalar(e.dashLength),
                    c.multiplyScalar(e.gapLength),
                    (n = l.length()),
                    (i = c.length());
                  for (; d < r; ) {
                    if (d + n > r) {
                      (e.start = o), (e.end = a), t.addLine(e);
                      break;
                    }
                    u.addVectors(o, l),
                      (e.start = o),
                      (e.end = u),
                      t.addLine(e),
                      (o = u.clone()),
                      (d += n),
                      u.addVectors(o, c),
                      (o = u.clone()),
                      (d += i);
                  }
                  return t.finalize(), t;
                })(e, t))
              : t.addLine(e),
            m.push(t),
            t.finalize(),
            t
          );
        }),
        (this.addUnitCell = function (e, t) {
          (e = this.getModel(e)),
            ((t = t || { alabel: "a", blabel: "b", clabel: "c" }).box =
              t.box || {}),
            (t.astyle = t.astyle || { color: "red", radius: 0.1, midpos: -1 }),
            (t.bstyle = t.bstyle || {
              color: "green",
              radius: 0.1,
              midpos: -1,
            }),
            (t.cstyle = t.cstyle || { color: "blue", radius: 0.1, midpos: -1 }),
            (t.alabelstyle = t.alabelstyle || {
              fontColor: "red",
              showBackground: !1,
              alignment: "center",
              inFront: !1,
            }),
            (t.blabelstyle = t.blabelstyle || {
              fontColor: "green",
              showBackground: !1,
              alignment: "center",
              inFront: !1,
            }),
            (t.clabelstyle = t.clabelstyle || {
              fontColor: "blue",
              showBackground: !1,
              alignment: "center",
              inFront: !1,
            }),
            e.unitCellObjects && this.removeUnitCell(e),
            (e.unitCellObjects = { shapes: [], labels: [] });
          var r = e.getCrystData(),
            n = null;
          if (r) {
            if (r.matrix) n = r.matrix;
            else {
              var i,
                o,
                a,
                s = r.a,
                l = r.b,
                c = r.c,
                u = r.alpha,
                d = r.beta,
                h = r.gamma;
              (u = (u * Math.PI) / 180),
                (d = (d * Math.PI) / 180),
                (h = (h * Math.PI) / 180),
                (i = Math.cos(d)),
                (o = (Math.cos(u) - Math.cos(d) * Math.cos(h)) / Math.sin(h)),
                (a = Math.sqrt(Math.max(0, 1 - i * i - o * o))),
                (n = new $3Dmol.Matrix3(
                  s,
                  l * Math.cos(h),
                  c * i,
                  0,
                  l * Math.sin(h),
                  c * o,
                  0,
                  0,
                  c * a
                ));
            }
            var p = [
              new $3Dmol.Vector3(0, 0, 0),
              new $3Dmol.Vector3(1, 0, 0),
              new $3Dmol.Vector3(0, 1, 0),
              new $3Dmol.Vector3(0, 0, 1),
              new $3Dmol.Vector3(1, 1, 0),
              new $3Dmol.Vector3(0, 1, 1),
              new $3Dmol.Vector3(1, 0, 1),
              new $3Dmol.Vector3(1, 1, 1),
            ];
            if (r.matrix4)
              for (let e = 0; e < p.length; e++)
                r.size && p[e].multiplyVectors(p[e], r.size),
                  (p[e] = p[e].applyMatrix4(r.matrix4));
            else for (let e = 0; e < p.length; e++) p[e] = p[e].applyMatrix3(n);
            if (t.box && !t.box.hidden) {
              t.box.wireframe = !0;
              var f = new $3Dmol.GLShape(t.box);
              (f.shapePosition = m.length),
                f.addLine({ start: p[0], end: p[1] }),
                f.addLine({ start: p[0], end: p[2] }),
                f.addLine({ start: p[1], end: p[4] }),
                f.addLine({ start: p[2], end: p[4] }),
                f.addLine({ start: p[0], end: p[3] }),
                f.addLine({ start: p[3], end: p[5] }),
                f.addLine({ start: p[2], end: p[5] }),
                f.addLine({ start: p[1], end: p[6] }),
                f.addLine({ start: p[4], end: p[7] }),
                f.addLine({ start: p[6], end: p[7] }),
                f.addLine({ start: p[3], end: p[6] }),
                f.addLine({ start: p[5], end: p[7] }),
                m.push(f),
                e.unitCellObjects.shapes.push(f),
                f.finalize();
            }
            if (!t.astyle.hidden) {
              (t.astyle.start = p[0]), (t.astyle.end = p[1]);
              let r = this.addArrow(t.astyle);
              e.unitCellObjects.shapes.push(r);
            }
            if (!t.bstyle.hidden) {
              (t.bstyle.start = p[0]), (t.bstyle.end = p[2]);
              let r = this.addArrow(t.bstyle);
              e.unitCellObjects.shapes.push(r);
            }
            if (!t.cstyle.hidden) {
              (t.cstyle.start = p[0]), (t.cstyle.end = p[3]);
              let r = this.addArrow(t.cstyle);
              e.unitCellObjects.shapes.push(r);
            }
            if (t.alabel) {
              t.alabelstyle.position = p[1];
              let r = this.addLabel(t.alabel, t.alabelstyle);
              e.unitCellObjects.labels.push(r);
            }
            if (t.blabel) {
              t.blabelstyle.position = p[2];
              let r = this.addLabel(t.blabel, t.blabelstyle);
              e.unitCellObjects.labels.push(r);
            }
            if (t.clabel) {
              t.clabelstyle.position = p[3];
              let r = this.addLabel(t.clabel, t.clabelstyle);
              e.unitCellObjects.labels.push(r);
            }
          }
        }),
        (this.removeUnitCell = function (e) {
          if ((e = this.getModel(e)).unitCellObjects) {
            let t = this;
            e.unitCellObjects.shapes.forEach(function (e) {
              t.removeShape(e);
            }),
              e.unitCellObjects.labels.forEach(function (e) {
                t.removeLabel(e);
              });
          }
          delete e.unitCellObjects;
        }),
        (this.replicateUnitCell = function (e, t, r, n) {
          (e = e || 3), (t = t || e), (r = r || t);
          let i = (n = this.getModel(n)).getCrystData();
          if (i) {
            const o = n.selectedAtoms({}),
              a = i.matrix;
            let s = function (e) {
              return e % 2 == 0 ? -e / 2 : Math.ceil(e / 2);
            };
            for (let i = 0; i < e; i++)
              for (let e = 0; e < t; e++)
                for (let t = 0; t < r; t++) {
                  if (0 == i && 0 == e && 0 == t) continue;
                  let r = new $3Dmol.Vector3(s(i), s(e), s(t));
                  r.applyMatrix3(a);
                  let l = [];
                  for (let e = 0; e < o.length; e++) {
                    let t = {};
                    for (let r in o[e]) t[r] = o[e][r];
                    (t.x += r.x), (t.y += r.y), (t.z += r.z), l.push(t);
                  }
                  n.addAtoms(l);
                }
          }
        }),
        (this.addCustom = function (e) {
          e = e || {};
          var t = new $3Dmol.GLShape(e);
          return (
            (t.shapePosition = m.length),
            t.addCustom(e),
            m.push(t),
            t.finalize(),
            t
          );
        }),
        (this.addVolumetricData = function (e, t, r) {
          r = r || {};
          var n = new $3Dmol.VolumeData(e, t);
          return r.transferfn
            ? this.addVolumetricRender(n, r)
            : this.addIsosurface(n, r);
        }),
        (this.addIsosurface = function (e, t, r) {
          t = t || {};
          var n = new $3Dmol.GLShape(t);
          return (
            (n.shapePosition = m.length), n.addIsosurface(e, t, r), m.push(n), n
          );
        }),
        (this.addVolumetricRender = function (e, t) {
          t = t || {};
          var r = new $3Dmol.GLVolumetricRender(e, t);
          return (r.shapePosition = m.length), m.push(r), r;
        }),
        (this.hasVolumetricRender = function () {
          return F.supportsVolumetric();
        }),
        (this.enableFog = function (e) {
          e
            ? (Y.fog = new $3Dmol.Fog(s, 100, 200))
            : ((n.disableFog = !0), ge());
        }),
        (this.setFrame = function (e) {
          C = e;
          let t = this;
          return new Promise(function (r) {
            var n = p.map(function (r) {
              return r.setFrame(e, t);
            });
            Promise.all(n).then(function () {
              r();
            });
          });
        }),
        (this.getFrame = function () {
          return C;
        }),
        (this.getNumFrames = function () {
          var e = 0;
          for (let t = 0; t < p.length; t++)
            p[t].getNumFrames() > e && (e = p[t].getNumFrames());
          for (let t = 0; t < m.length; t++)
            m[t].frame && m[t].frame >= e && (e = m[t].frame + 1);
          for (let t = 0; t < g.length; t++)
            g[t].frame && g[t].frame >= e && (e = g[t].frame + 1);
          return e;
        }),
        (this.animate = function (e) {
          pe();
          var t = 100,
            r = "forward",
            n = 0;
          (e = e || {}).interval && (t = e.interval),
            e.loop && (r = e.loop),
            e.reps && (n = e.reps);
          var i = this.getNumFrames(),
            o = this,
            a = 0,
            s = 1;
          e.step && (n /= s = e.step);
          var l,
            c,
            u = 0,
            d = i * n,
            h = new Date(),
            p = function (e) {
              (h = new Date()),
                "forward" == e
                  ? o.setFrame(a).then(function () {
                      (a = (a + s) % i), l();
                    })
                  : "backward" == e
                  ? o.setFrame(i - 1 - a).then(function () {
                      (a = (a + s) % i), l();
                    })
                  : o.setFrame(a).then(function () {
                      (s *= (a += s) % (i - 1) == 0 ? -1 : 1), l();
                    });
            };
          return (
            (l = function () {
              if ((o.render(), !o.getCanvas().isConnected && F.isLost()))
                o.stopAnimate();
              else if (++u != d && o.isAnimated()) {
                var e = t - (new Date() - h);
                (e = e > 0 ? e : 0),
                  re.delete(c),
                  (c = setTimeout(p, e, r)),
                  re.add(c);
              } else clearTimeout(c), re.delete(c), he();
            }),
            (c = setTimeout(p, 0, r)),
            re.add(c),
            this
          );
        }),
        (this.stopAnimate = function () {
          return (
            (te = 0),
            re.forEach(function (e) {
              clearTimeout(e);
            }),
            (re = new Set()),
            this
          );
        }),
        (this.isAnimated = function () {
          return te > 0;
        }),
        (this.addModel = function (e, t, r) {
          r && !r.defaultcolors
            ? ((r.defaultcolors = o), (r.cartoonQuality = n.cartoonQuality))
            : void 0 === r &&
              (r = { defaultcolors: o, cartoonQuality: n.cartoonQuality });
          var i = new $3Dmol.GLModel(p.length, r);
          return i.addMolData(e, t, r), p.push(i), i;
        }),
        (this.addModels = function (e, t, r) {
          ((r = r || {}).multimodel = !0), (r.frames = !0);
          for (
            var n = $3Dmol.GLModel.parseMolData(e, t, r), i = 0;
            i < n.length;
            i++
          ) {
            var a = new $3Dmol.GLModel(p.length, o);
            a.setAtomDefaults(n[i]),
              a.addFrame(n[i]),
              a.setFrame(0),
              n.modelData && a.setModelData(n.modelData[i]),
              a.setDontDuplicateAtoms(!r.duplicateAssemblyAtoms),
              p.push(a);
          }
          return p;
        }),
        (this.addModelsAsFrames = function (e, t, r) {
          ((r = r || {}).multimodel = !0), (r.frames = !0);
          var n = new $3Dmol.GLModel(p.length, o);
          return n.addMolData(e, t, r), p.push(n), n;
        }),
        (this.addAsOneMolecule = function (e, t, r) {
          ((r = r || {}).multimodel = !0), (r.onemol = !0);
          var n = new $3Dmol.GLModel(p.length, o);
          return n.addMolData(e, t, r), p.push(n), n;
        }),
        (this.removeModel = function (e) {
          if ((e = this.getModel(e))) {
            for (
              e.removegl(Z), delete p[e.getID()];
              p.length > 0 && void 0 === p[p.length - 1];

            )
              p.pop();
            return this;
          }
        }),
        (this.removeAllModels = function () {
          for (var e = 0; e < p.length; e++) {
            var t = p[e];
            t && t.removegl(Z);
          }
          return p.splice(0, p.length), this;
        }),
        (this.exportJSON = function (e, t) {
          var r = {};
          return (
            (r.m =
              void 0 === t
                ? p.map(function (t) {
                    return t.toCDObject(e);
                  })
                : [p[t].toCDObject()]),
            JSON.stringify(r)
          );
        }),
        (this.exportVRML = function () {
          var e = Z;
          Ve("removegl", Z),
            (Z = new $3Dmol.Object3D()),
            this.render(null, {
              supportsImposters: !1,
              supportsAIA: !1,
              regen: !0,
            });
          var t = "#VRML V2.0 utf8\n" + Z.vrml() + "\n";
          return Ve("removegl", Z), (Z = e), t;
        }),
        (this.createModelFrom = function (e, t) {
          for (
            var r = new $3Dmol.GLModel(p.length, o), n = 0;
            n < p.length;
            n++
          )
            if (p[n]) {
              var i = p[n].selectedAtoms(e);
              r.addAtoms(i), t && p[n].removeAtoms(i);
            }
          return p.push(r), r;
        }),
        (this.setStyle = function (e, t) {
          return (
            void 0 === t && ((t = e), (e = {})), Ve("setStyle", e, t, !1), this
          );
        }),
        (this.addStyle = function (e, t) {
          return (
            void 0 === t && ((t = e), (e = {})), Ve("setStyle", e, t, !0), this
          );
        }),
        (this.setClickable = function (e, t, r) {
          return Ve("setClickable", e, t, r), this;
        }),
        (this.setHoverable = function (e, t, r, n) {
          return Ve("setHoverable", e, t, r, n), this;
        }),
        (this.enableContextMenu = function (e, t) {
          return Ve("enableContextMenu", e, t), this;
        }),
        (this.vibrate = function (e, t, r, n) {
          return Ve("vibrate", e, t, r, this, n), this;
        }),
        (this.setColorByProperty = function (e, t, r, n) {
          return Ve("setColorByProperty", e, t, r, n), this;
        }),
        (this.setColorByElement = function (e, t) {
          return Ve("setColorByElement", e, t), this;
        });
      var Be = function (e, t) {
          for (var r = [], n = 0; n < e.length; n++) {
            var i = e[n];
            void 0 !== i &&
              (i.x < t[0][0] ||
                i.x > t[1][0] ||
                i.y < t[0][1] ||
                i.y > t[1][1] ||
                i.z < t[0][2] ||
                i.z > t[1][2] ||
                r.push(i));
          }
          return r;
        },
        Ue = function (e) {
          return (
            (e[1][0] - e[0][0]) * (e[1][1] - e[0][1]) * (e[1][2] - e[0][2])
          );
        },
        je = function (e, t, r) {
          var n = new $3Dmol.Geometry(!0),
            i = n.updateGeoGroup(0),
            o = [];
          for (let t = 0, r = e.length; t < r; t++) {
            var a = e[t];
            a &&
              (void 0 !== a.surfaceColor
                ? (o[t] = a.surfaceColor)
                : a.color && (o[t] = $3Dmol.CC.color(a.color)));
          }
          var s = i.vertexArray,
            l = t.vertices;
          for (let e = 0, t = l.length; e < t; e++) {
            let t = 3 * i.vertices;
            (s[t] = l[e].x),
              (s[t + 1] = l[e].y),
              (s[t + 2] = l[e].z),
              i.vertices++;
          }
          var c = i.colorArray;
          if (r.voldata && r.volscheme) {
            var u = r.volscheme,
              d = r.voldata,
              h = u.range() || [-1, 1];
            for (let e = 0, t = l.length; e < t; e++) {
              let t = d.getVal(l[e].x, l[e].y, l[e].z),
                r = $3Dmol.CC.color(u.valueToHex(t, h)),
                n = 3 * e;
              (c[n] = r.r), (c[n + 1] = r.g), (c[n + 2] = r.b);
            }
          } else if (o.length > 0)
            for (let e = 0, t = l.length; e < t; e++) {
              let t = l[e].atomid,
                r = 3 * e;
              (c[r] = o[t].r), (c[r + 1] = o[t].g), (c[r + 2] = o[t].b);
            }
          var p = t.faces;
          (i.faceidx = p.length), n.initTypedArrays();
          var f,
            m,
            g,
            v,
            y = i.vertexArray,
            x = i.normalArray;
          for (let e = 0, t = p.length; e < t; e += 3) {
            var b = 3 * p[e],
              w = 3 * p[e + 1],
              D = 3 * p[e + 2];
            (f = new $3Dmol.Vector3(y[b], y[b + 1], y[b + 2])),
              (m = new $3Dmol.Vector3(y[w], y[w + 1], y[w + 2])),
              (g = new $3Dmol.Vector3(y[D], y[D + 1], y[D + 2])).subVectors(
                g,
                m
              ),
              f.subVectors(f, m),
              g.cross(f),
              (v = g).normalize(),
              (x[b] += v.x),
              (x[w] += v.x),
              (x[D] += v.x),
              (x[b + 1] += v.y),
              (x[w + 1] += v.y),
              (x[D + 1] += v.y),
              (x[b + 2] += v.z),
              (x[w + 2] += v.z),
              (x[D + 2] += v.z);
          }
          i.faceArray = new Uint16Array(p);
          var C = new $3Dmol.Mesh(n, r);
          return (C.doubleSided = !0), C;
        };
      function Ge(e) {
        var t = new $3Dmol.MeshLambertMaterial();
        for (var r in ((t.vertexColors = $3Dmol.VertexColors), e))
          "color" === r ||
            "map" === r ||
            (e.hasOwnProperty(r) && (t[r] = e[r]));
        return (
          void 0 !== e.opacity &&
            (1 === e.opacity ? (t.transparent = !1) : (t.transparent = !0)),
          t
        );
      }
      this.addMesh = function (e) {
        var t = { geo: e.geometry, mat: e.material, done: !0, finished: !1 },
          r = fe();
        return (f[r] = t), r;
      };
      var He = function (e) {
          var t = [];
          let r = e.length;
          for (let n = 0; n < r; n++) t[n] = $3Dmol.extend({}, e[n]);
          return t;
        },
        qe = {
          VDW: $3Dmol.SurfaceType.VDW,
          MS: $3Dmol.SurfaceType.MS,
          SAS: $3Dmol.SurfaceType.SAS,
          SES: $3Dmol.SurfaceType.SES,
        };
      (this.addSurface = function (r, n, i, o, a, s) {
        var l = fe(),
          u = null;
        "string" == typeof r
          ? void 0 !== qe[r]
            ? (r = qe[r])
            : console.log("Surface type : " + r + " is not recognized")
          : void 0 === r && (r = $3Dmol.SurfaceType.VDW);
        var d = null,
          h = null,
          m = He(Re(i));
        (d = o ? He(Re(o)) : m), $3Dmol.adjustVolumeStyle(n);
        var g,
          v = !1;
        for (g = 0; g < p.length; g++)
          if (p[g]) {
            var y = p[g].getSymmetries();
            if (y.length > 1 || (1 == y.length && !y[0].isIdentity())) {
              v = !0;
              break;
            }
          }
        var x = function (i, o, s) {
          var d;
          h = a ? He(Re(a)) : s;
          var p = $3Dmol.getExtent(s, !0);
          if (n.map && n.map.prop) {
            var f = n.map.prop,
              m = n.map.scheme || n.map.gradient || new $3Dmol.Gradient.RWB(),
              g = m.range();
            g || (g = $3Dmol.getPropertyRange(s, f)),
              (n.colorscheme = { prop: f, gradient: m });
          }
          for (let e = 0, t = o.length; e < t; e++)
            (d = o[e]).surfaceColor = $3Dmol.getColorFromStyle(d, n);
          var v = Ue(p),
            y = (function (e, r, n) {
              for (var i = [], o = {}, a = 0, s = r.length; a < s; a++)
                o[r[a].index] = a;
              var l = function (e) {
                  for (var t = [], r = 0, n = e.length; r < n; r++)
                    e[r].index in o && t.push(o[e[r].index]);
                  return t;
                },
                c = function (e) {
                  var t = [];
                  return (
                    (t[0] = [e[0][0], e[0][1], e[0][2]]),
                    (t[1] = [e[1][0], e[1][1], e[1][2]]),
                    t
                  );
                },
                u = function (e) {
                  if (Ue(e) < t) return [e];
                  var r,
                    n = e[1][0] - e[0][0],
                    i = e[1][1] - e[0][1],
                    o = e[1][2] - e[0][2];
                  r = n > i && n > o ? 0 : i > n && i > o ? 1 : 2;
                  var a = c(e),
                    s = c(e),
                    l = (e[1][r] - e[0][r]) / 2 + e[0][r];
                  (a[1][r] = l), (s[0][r] = l);
                  var d = u(a),
                    h = u(s);
                  return d.concat(h);
                },
                d = u(e);
              for (let e = 0, t = d.length; e < t; e++) {
                let t = c(d[e]);
                (t[0][0] -= 6),
                  (t[0][1] -= 6),
                  (t[0][2] -= 6),
                  (t[1][0] += 6),
                  (t[1][1] += 6),
                  (t[1][2] += 6);
                var h = Be(r, t),
                  p = Be(n, d[e]);
                i.push({ extent: d[e], atoms: l(h), toshow: l(p) });
              }
              return i;
            })(p, o, s);
          if (h && h.length && h.length > 0) {
            var x = $3Dmol.getExtent(h, !0);
            y.sort(function (e, t) {
              var r = function (e, t) {
                var r = e.extent,
                  n = r[1][0] - r[0][0],
                  i = r[1][1] - r[0][1],
                  o = r[1][2] - r[0][2],
                  a = n - t[2][0];
                a *= a;
                var s = i - t[2][1];
                s *= s;
                var l = o - t[2][2];
                return a + s + (l *= l);
              };
              return r(e, x) - r(t, x);
            });
          }
          var b = [];
          for (let e = 0, t = o.length; e < t; e++)
            (d = o[e]),
              (b[e] = { x: d.x, y: d.y, z: d.z, serial: e, elem: d.elem });
          if (!!$3Dmol.syncSurface) {
            var w = function (e) {
                return new Promise(function (t) {
                  for (
                    var n = (function (e, t, r, n, i, o) {
                        var a = new $3Dmol.ProteinSurface();
                        return (
                          a.initparm(t, 1 !== e, o),
                          a.fillvoxels(i, r),
                          a.buildboundary(),
                          (e != $3Dmol.SurfaceType.SES &&
                            e != $3Dmol.SurfaceType.MS) ||
                            (a.fastdistancemap(),
                            a.boundingatom(!1),
                            a.fillvoxelswaals(i, r)),
                          a.marchingcube(e),
                          a.getFacesAndVertices(n)
                        );
                      })(r, y[e].extent, y[e].atoms, y[e].toshow, b, v),
                      a = $3Dmol.splitMesh({
                        vertexArr: n.vertices,
                        faceArr: n.faces,
                      }),
                      s = 0,
                      l = a.length;
                    s < l;
                    s++
                  ) {
                    n = { vertices: a[s].vertexArr, faces: a[s].faceArr };
                    var d = je(o, n, u);
                    $3Dmol.mergeGeos(i.geo, d);
                  }
                  c.render(), t();
                });
              },
              D = [];
            for (let e = 0; e < y.length; e++) D.push(w(e));
            return Promise.all(D).then(function () {
              return (i.done = !0), Promise.resolve(l);
            });
          }
          var C = [];
          r < 0 && (r = 0);
          for (let t = 0, r = e; t < r; t++) {
            var S = new Worker($3Dmol.SurfaceWorker);
            C.push(S), S.postMessage({ type: -1, atoms: b, volume: v });
          }
          return new Promise(function (e, t) {
            var n = 0,
              a = function (t) {
                for (
                  var r = $3Dmol.splitMesh({
                      vertexArr: t.data.vertices,
                      faceArr: t.data.faces,
                    }),
                    a = 0,
                    s = r.length;
                  a < s;
                  a++
                ) {
                  var d = { vertices: r[a].vertexArr, faces: r[a].faceArr },
                    h = je(o, d, u);
                  $3Dmol.mergeGeos(i.geo, h);
                }
                c.render(), ++n == y.length && ((i.done = !0), e(l));
              },
              s = function (e) {
                console.log(
                  e.message + " (" + e.filename + ":" + e.lineno + ")"
                ),
                  t(e);
              };
            for (let e = 0; e < y.length; e++) {
              var d = C[e % C.length];
              (d.onmessage = a),
                (d.onerror = s),
                d.postMessage({
                  type: r,
                  expandedExtent: y[e].extent,
                  extendedAtoms: y[e].atoms,
                  atomsToShow: y[e].toshow,
                });
            }
          });
        };
        u = Ge((n = n || {}));
        var b = [];
        (b.style = n), (b.atomsel = i), (b.allsel = o), (b.focus = a);
        var w = null;
        if (v) {
          var D = {},
            C = {};
          for (g = 0; g < p.length; g++) (D[g] = []), (C[g] = []);
          for (g = 0; g < d.length; g++) D[d[g].model].push(d[g]);
          for (g = 0; g < m.length; g++) C[m[g].model].push(m[g]);
          var S = [];
          for (g = 0; g < p.length; g++)
            C[g].length > 0 &&
              (b.push({
                geo: new $3Dmol.Geometry(!0),
                mat: u,
                done: !1,
                finished: !1,
                symmetries: p[g].getSymmetries(),
              }),
              S.push(x(b[g], D[g], C[g])));
          w = Promise.all(S);
        } else
          b.push({
            geo: new $3Dmol.Geometry(!0),
            mat: u,
            done: !1,
            finished: !1,
            symmetries: [new $3Dmol.Matrix4()],
          }),
            (w = x(b[b.length - 1], d, m));
        return (
          (f[l] = b),
          (w.surfid = l),
          s && "function" == typeof s
            ? (w.then(function (e) {
                s(e);
              }),
              l)
            : w
        );
      }),
        (this.setSurfaceMaterialStyle = function (e, t) {
          if (($3Dmol.adjustVolumeStyle(t), f[e])) {
            var r = f[e];
            r.style = t;
            for (var n = 0; n < r.length; n++) {
              var i = (r[n].mat = Ge(t));
              if (((r[n].mat.side = $3Dmol.FrontSide), t.color)) {
                (r[n].mat.color = t.color), (r[n].geo.colorsNeedUpdate = !0);
                const e = $3Dmol.CC.color(t.color);
                r[n].geo.setColors(function () {
                  return e;
                });
              } else if (i.voldata && i.volscheme) {
                const e = i.volscheme,
                  t = i.voldata,
                  o = $3Dmol.CC,
                  a = e.range() || [-1, 1];
                r[n].geo.setColors(function (r, n, i) {
                  let s = t.getVal(r, n, i);
                  return o.color(e.valueToHex(s, a));
                });
              }
              r[n].finished = !1;
            }
          }
          return this;
        }),
        (this.getSurface = function (e) {
          return f[e];
        }),
        (this.removeSurface = function (e) {
          for (var t = f[e], r = 0; r < t.length; r++)
            t[r] &&
              t[r].lastGL &&
              (void 0 !== t[r].geo && t[r].geo.dispose(),
              void 0 !== t[r].mat && t[r].mat.dispose(),
              Z.remove(t[r].lastGL));
          return delete f[e], ge(), this;
        }),
        (this.removeAllSurfaces = function () {
          for (var e in f)
            if (f.hasOwnProperty(e)) {
              for (var t = f[e], r = 0; r < t.length; r++)
                t[r] &&
                  t[r].lastGL &&
                  (void 0 !== t[r].geo && t[r].geo.dispose(),
                  void 0 !== t[r].mat && t[r].mat.dispose(),
                  Z.remove(t[r].lastGL));
              delete f[e];
            }
          return ge(), this;
        }),
        (this.jmolMoveTo = function () {
          var e = Z.position,
            t = "center { " + -e.x + " " + -e.y + " " + -e.z + " }; ",
            r = X.quaternion;
          return (t +=
            "moveto .5 quaternion { " +
            r.x +
            " " +
            r.y +
            " " +
            r.z +
            " " +
            r.w +
            " };");
        }),
        (this.clear = function () {
          return (
            this.removeAllSurfaces(),
            this.removeAllModels(),
            this.removeAllLabels(),
            this.removeAllShapes(),
            ge(),
            this
          );
        }),
        (this.mapAtomProperties = function (e, t) {
          var r = Re((t = t || {}));
          if ("function" == typeof e)
            for (let t = 0, n = r.length; t < n; t++) {
              e(r[t]);
            }
          else
            for (let t = 0, o = r.length; t < o; t++) {
              var n = r[t];
              for (let t = 0, r = e.length; t < r; t++) {
                let r = e[t];
                if (r.props)
                  for (var i in r.props)
                    r.props.hasOwnProperty(i) &&
                      Ne(n, r) &&
                      (n.properties || (n.properties = {}),
                      (n.properties[i] = r.props[i]));
              }
            }
          return this;
        }),
        (this.linkViewer = function (e) {
          return I.push(e), this;
        });
      try {
        "function" == typeof i && i(this);
      } catch (e) {
        console.log("error with glviewer callback: " + e);
      }
      (this.getPerceivedDistance = function () {
        return L - X.position.z;
      }),
        (this.setPerceivedDistance = function (e) {
          X.position.z = L - e;
        }),
        (this.setAutoEyeSeparation = function (e, t) {
          var r = this.getPerceivedDistance();
          return (
            t || (t = 5),
            e || G.position.x > 0
              ? (G.position.x = r * Math.tan((Math.PI / 180) * t))
              : (G.position.x = -r * Math.tan((Math.PI / 180) * t)),
            G.lookAt(new $3Dmol.Vector3(0, 0, X.position.z)),
            G.position.x
          );
        }),
        (this.setDefaultCartoonQuality = function (e) {
          n.cartoonQuality = e;
        }),
        (this.ui = {}),
        (this.ui.loadSelectionStyle = function (e, t) {
          h.createSelectionAndStyle(e, t);
        }),
        (this.ui.loadSurface = function (e, t, r, n) {
          h.createSurface(e, t, r, n);
        }),
        (this.ui.setModelTitle = function (e) {
          h.setModelTitle(e);
        }),
        (this.ui.initiateUI = function () {
          h.initiateUI();
        });
    };
  })()),
  ($3Dmol.glmolViewer = $3Dmol.GLViewer);
var $3Dmol = $3Dmol || {};
($3Dmol.Gradient = function () {}),
  ($3Dmol.Gradient.valueToHex = function () {}),
  ($3Dmol.Gradient.range = function () {}),
  ($3Dmol.Gradient.normalizeValue = function (e, t, r) {
    return t >= e
      ? (r < e && (r = e), r > t && (r = t), { lo: e, hi: t, val: r })
      : (r > e && (r = e),
        r < t && (r = t),
        { lo: t, hi: e, val: (r = e - r + t) });
  }),
  ($3Dmol.Gradient.getGradient = function (e) {
    if (e instanceof $3Dmol.Gradient) return e;
    if (void 0 !== e.gradient && $3Dmol.Gradient.builtinGradients[e.gradient]) {
      let t = void 0 === e.min ? -1 : e.min,
        r = void 0 === e.max ? 1 : e.max;
      return void 0 === e.mid
        ? new $3Dmol.Gradient.builtinGradients[e.gradient](t, r)
        : new $3Dmol.Gradient.builtinGradients[e.gradient](t, r, e.mid);
    }
    return e;
  }),
  ($3Dmol.Gradient.RWB = function (e, t, r) {
    void 0 === t &&
      Array.isArray(e) &&
      e.length >= 2 &&
      ((t = e[1]), (e = e[0])),
      (this.valueToHex = function (n, i) {
        var o, a;
        if (
          ((n *= 1),
          i ? ((o = i[0]), (a = i[1])) : ((o = e), (a = t)),
          void 0 === n)
        )
          return 16777215;
        var s = $3Dmol.Gradient.normalizeValue(o, a, n);
        o = s.lo;
        var l,
          c = ((a = s.hi) + o) / 2;
        return (n = s.val) <=
          (c = i && void 0 !== i[2] ? i[2] : void 0 !== r ? r : (o + a) / 2)
          ? 16711680 +
              256 * (l = Math.floor(255 * Math.sqrt((n - o) / (c - o)))) +
              l
          : 65536 * (l = Math.floor(255 * Math.sqrt(1 - (n - c) / (a - c)))) +
              256 * l +
              255;
      }),
      (this.range = function () {
        return void 0 !== e && void 0 !== t ? [e, t] : null;
      });
  }),
  ($3Dmol.Gradient.ROYGB = function (e, t) {
    void 0 === t &&
      Array.isArray(e) &&
      e.length >= 2 &&
      ((t = e[1]), (e = e[0])),
      (this.valueToHex = function (r, n) {
        var i, o;
        if (
          ((r *= 1),
          n ? ((i = n[0]), (o = n[1])) : ((i = e), (o = t)),
          void 0 === r)
        )
          return 16777215;
        var a = $3Dmol.Gradient.normalizeValue(i, o, r),
          s = ((i = a.lo) + (o = a.hi)) / 2,
          l = (i + s) / 2,
          c = (s + o) / 2;
        return (r = a.val) < l
          ? 16711680 + 256 * Math.floor(255 * Math.sqrt((r - i) / (l - i))) + 0
          : r < s
          ? 65536 * Math.floor(255 * Math.sqrt(1 - (r - l) / (s - l))) +
            65280 +
            0
          : r < c
          ? 65280 + 1 * Math.floor(255 * Math.sqrt((r - s) / (c - s)))
          : 0 + 256 * Math.floor(255 * Math.sqrt(1 - (r - c) / (o - c))) + 255;
      }),
      (this.range = function () {
        return void 0 !== e && void 0 !== t ? [e, t] : null;
      });
  }),
  ($3Dmol.Gradient.Sinebow = function (e, t) {
    var r = 1;
    void 0 === t &&
      Array.isArray(e) &&
      e.length >= 2 &&
      ((t = e[1]), (e = e[0])),
      t < e && ((r = -1), (e *= -1), (t *= -1)),
      (this.valueToHex = function (n, i) {
        var o, a;
        if (
          ((n *= r),
          i ? ((o = i[0]), (a = i[1])) : ((o = e), (a = t)),
          void 0 === n)
        )
          return 16777215;
        var s = $3Dmol.Gradient.normalizeValue(o, a, n);
        (o = s.lo), (a = s.hi);
        var l = (5 * (((n = s.val) - o) / (a - o))) / 6 + 0.5,
          c = Math.sin(Math.PI * l);
        c *= 255 * c;
        var u = Math.sin(Math.PI * (l + 1 / 3));
        u *= 255 * u;
        var d = Math.sin(Math.PI * (l + 2 / 3));
        return (
          (d *= 255 * d),
          65536 * Math.floor(c) + 256 * Math.floor(d) + 1 * Math.floor(u)
        );
      }),
      (this.range = function () {
        return void 0 !== e && void 0 !== t ? [e, t] : null;
      });
  }),
  ($3Dmol.Gradient.builtinGradients = {
    rwb: $3Dmol.Gradient.RWB,
    RWB: $3Dmol.Gradient.RWB,
    roygb: $3Dmol.Gradient.ROYGB,
    ROYGB: $3Dmol.Gradient.ROYGB,
    sinebow: $3Dmol.Gradient.Sinebow,
  }),
  ($3Dmol.LabelCount = 0),
  ($3Dmol.Label = function (e, t) {
    (this.id = $3Dmol.LabelCount++),
      (this.stylespec = t || {}),
      (this.canvas = document.createElement("canvas")),
      (this.canvas.width = 134),
      (this.canvas.height = 35),
      (this.context = this.canvas.getContext("2d")),
      (this.sprite = new $3Dmol.Sprite()),
      (this.text = e),
      (this.frame = this.stylespec.frame);
  }),
  ($3Dmol.Label.prototype = {
    constructor: $3Dmol.Label,
    getStyle: function () {
      return this.stylespec;
    },
    setContext: (function () {
      var e = function (e, t, r) {
        var n = r;
        return (
          void 0 !== e &&
            (e instanceof $3Dmol.Color
              ? (n = e.scaled())
              : void 0 !== (n = $3Dmol.CC.color(e)).scaled && (n = n.scaled())),
          void 0 !== t && (n.a = parseFloat(t)),
          n
        );
      };
      return function () {
        var t = this.stylespec,
          r = void 0 !== t.useScreen && t.useScreen,
          n = t.showBackground;
        ("0" !== n && "false" !== n) || (n = !1), void 0 === n && (n = !0);
        var i = t.font ? t.font : "sans-serif",
          o = parseInt(t.fontSize) ? parseInt(t.fontSize) : 18,
          a = e(t.fontColor, t.fontOpacity, { r: 255, g: 255, b: 255, a: 1 }),
          s = t.padding ? t.padding : 4,
          l = t.borderThickness ? t.borderThickness : 0,
          c = e(t.backgroundColor, t.backgroundOpacity, {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
          }),
          u = e(t.borderColor, t.borderOpacity, c),
          d = t.position ? t.position : { x: -10, y: 1, z: 1 },
          h = void 0 === t.inFront || t.inFront;
        ("false" !== h && "0" !== h) || (h = !1);
        var p = t.alignment || $3Dmol.SpriteAlignment.topLeft;
        "string" == typeof p &&
          p in $3Dmol.SpriteAlignment &&
          (p = $3Dmol.SpriteAlignment[p]);
        var f = "";
        t.bold && (f = "bold "), (this.context.font = f + o + "px  " + i);
        var m = this.context.measureText(this.text).width;
        n || (l = 0);
        var g = m + 2.5 * l + 2 * s,
          v = 1.25 * o + 2 * l + 2 * s;
        if (t.backgroundImage) {
          var y = t.backgroundImage,
            x = t.backgroundWidth ? t.backgroundWidth : y.width,
            b = t.backgroundHeight ? t.backgroundHeight : y.height;
          x > g && (g = x), b > v && (v = b);
        }
        if (
          ((this.canvas.width = g),
          (this.canvas.height = v),
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
          (f = ""),
          t.bold && (f = "bold "),
          (this.context.font = f + o + "px  " + i),
          (this.context.fillStyle =
            "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a + ")"),
          (this.context.strokeStyle =
            "rgba(" + u.r + "," + u.g + "," + u.b + "," + u.a + ")"),
          t.backgroundGradient)
        ) {
          let r = this.context.createLinearGradient(0, v / 2, g, v / 2),
            n = $3Dmol.Gradient.getGradient(t.backgroundGradient),
            i = n.range(),
            o = -1,
            a = 1;
          i && ((o = i[0]), (a = i[1]));
          let s = a - o;
          for (let t = 0; t < 1.01; t += 0.1) {
            let i = e(n.valueToHex(o + s * t)),
              a = "rgba(" + i.r + "," + i.g + "," + i.b + "," + i.a + ")";
            r.addColorStop(t, a);
          }
          this.context.fillStyle = r;
        }
        if (
          ((this.context.lineWidth = l),
          n &&
            (function (e, t, r, n, i, o, a) {
              e.beginPath(),
                e.moveTo(t + o, r),
                e.lineTo(t + n - o, r),
                e.quadraticCurveTo(t + n, r, t + n, r + o),
                e.lineTo(t + n, r + i - o),
                e.quadraticCurveTo(t + n, r + i, t + n - o, r + i),
                e.lineTo(t + o, r + i),
                e.quadraticCurveTo(t, r + i, t, r + i - o),
                e.lineTo(t, r + o),
                e.quadraticCurveTo(t, r, t + o, r),
                e.closePath(),
                e.fill(),
                a && e.stroke();
            })(this.context, l, l, g - 2 * l, v - 2 * l, 6, l > 0),
          t.backgroundImage)
        ) {
          let e = t.backgroundImage,
            r = t.backgroundWidth ? t.backgroundWidth : e.width,
            n = t.backgroundHeight ? t.backgroundHeight : e.height;
          this.context.drawImage(e, 0, 0, r, n);
        }
        (this.context.fillStyle =
          "rgba(" + a.r + "," + a.g + "," + a.b + "," + a.a + ")"),
          this.context.fillText(this.text, l + s, o + l + s, m);
        var w = new $3Dmol.Texture(this.canvas);
        (w.needsUpdate = !0),
          (this.sprite.material = new $3Dmol.SpriteMaterial({
            map: w,
            useScreenCoordinates: r,
            alignment: p,
            depthTest: !h,
            screenOffset: t.screenOffset || null,
          })),
          this.sprite.scale.set(1, 1, 1),
          this.sprite.position.set(d.x, d.y, d.z);
      };
    })(),
    dispose: function () {
      void 0 !== this.sprite.material.map && this.sprite.material.map.dispose(),
        void 0 !== this.sprite.material && this.sprite.material.dispose();
    },
  }),
  ($3Dmol = $3Dmol || {}),
  ($3Dmol.MarchingCubeInitializer = function () {
    var e,
      t,
      r,
      n,
      i = {};
    return (
      (i.march = function (i, o, a, s) {
        var l = !!s.fulltable,
          c =
            s.hasOwnProperty("origin") && s.origin.hasOwnProperty("x")
              ? s.origin
              : { x: 0, y: 0, z: 0 },
          u = !!s.voxel,
          d = s.matrix,
          h = s.nX || 0,
          p = s.nY || 0,
          f = s.nZ || 0,
          m = s.scale || 1,
          g = null;
        g = s.unitCube ? s.unitCube : { x: m, y: m, z: m };
        var v,
          y,
          x = new Int32Array(h * p * f);
        for (v = 0, y = x.length; v < y; ++v) x[v] = -1;
        var b = function (e, t, r, n, i, a) {
            var s = { x: 0, y: 0, z: 0 },
              l = i;
            !!!(n & (1 << i)) && !!(n & (1 << a)) && (l = a),
              1 & l && r++,
              2 & l && t++,
              4 & l && e++,
              d
                ? (s = {
                    x: (s = (s = new $3Dmol.Vector3(e, t, r)).applyMatrix4(d))
                      .x,
                    y: s.y,
                    z: s.z,
                  })
                : ((s.x = c.x + g.x * e),
                  (s.y = c.y + g.y * t),
                  (s.z = c.z + g.z * r));
            var h = (p * e + t) * f + r;
            return u
              ? (o.push(s), o.length - 1)
              : (x[h] < 0 && ((x[h] = o.length), o.push(s)), x[h]);
          },
          w = new Int32Array(12),
          D = l ? t : e,
          C = l ? n : r;
        for (v = 0; v < h - 1; ++v)
          for (var S = 0; S < p - 1; ++S)
            for (var A = 0; A < f - 1; ++A) {
              for (var $ = 0, M = 0; M < 8; ++M) {
                $ |=
                  !!(
                    2 &
                    i[
                      (p * (v + ((4 & M) >> 2)) + S + ((2 & M) >> 1)) * f +
                        A +
                        (1 & M)
                    ]
                  ) << M;
              }
              if (0 !== $ && 255 !== $) {
                var k = D[$];
                if (0 !== k) {
                  var z = C[$];
                  1 & k && (w[0] = b(v, S, A, $, 0, 1)),
                    2 & k && (w[1] = b(v, S, A, $, 1, 3)),
                    4 & k && (w[2] = b(v, S, A, $, 3, 2)),
                    8 & k && (w[3] = b(v, S, A, $, 2, 0)),
                    16 & k && (w[4] = b(v, S, A, $, 4, 5)),
                    32 & k && (w[5] = b(v, S, A, $, 5, 7)),
                    64 & k && (w[6] = b(v, S, A, $, 7, 6)),
                    128 & k && (w[7] = b(v, S, A, $, 6, 4)),
                    256 & k && (w[8] = b(v, S, A, $, 0, 4)),
                    512 & k && (w[9] = b(v, S, A, $, 1, 5)),
                    1024 & k && (w[10] = b(v, S, A, $, 3, 7)),
                    2048 & k && (w[11] = b(v, S, A, $, 2, 6));
                  for (var _ = 0; _ < z.length; _ += 3) {
                    var T = w[z[_]],
                      L = w[z[_ + 1]],
                      E = w[z[_ + 2]];
                    u &&
                      _ >= 3 &&
                      (o.push(o[T]),
                      (T = o.length - 1),
                      o.push(o[L]),
                      (L = o.length - 1),
                      o.push(o[E]),
                      (E = o.length - 1)),
                      a.push(T),
                      a.push(L),
                      a.push(E);
                  }
                }
              }
            }
      }),
      (i.laplacianSmooth = function (e, t, r) {
        var n,
          i,
          o,
          a,
          s,
          l = new Array(t.length);
        for (n = 0, i = t.length; n < i; n++) l[n] = { x: 0, y: 0, z: 0 };
        var c,
          u = new Array(20);
        for (n = 0; n < 20; n++) u[n] = new Array(t.length);
        for (n = 0, i = t.length; n < i; n++) u[0][n] = 0;
        for (n = 0, i = r.length / 3; n < i; n++) {
          var d = 3 * n,
            h = 3 * n + 1,
            p = 3 * n + 2;
          for (c = !0, o = 0, a = u[0][r[d]]; o < a; o++)
            if (r[h] == u[o + 1][r[d]]) {
              c = !1;
              break;
            }
          for (
            c && (u[0][r[d]]++, (u[u[0][r[d]]][r[d]] = r[h])),
              c = !0,
              o = 0,
              a = u[0][r[d]];
            o < a;
            o++
          )
            if (r[p] == u[o + 1][r[d]]) {
              c = !1;
              break;
            }
          for (
            c && (u[0][r[d]]++, (u[u[0][r[d]]][r[d]] = r[p])),
              c = !0,
              o = 0,
              a = u[0][r[h]];
            o < a;
            o++
          )
            if (r[d] == u[o + 1][r[h]]) {
              c = !1;
              break;
            }
          for (
            c && (u[0][r[h]]++, (u[u[0][r[h]]][r[h]] = r[d])),
              c = !0,
              o = 0,
              a = u[0][r[h]];
            o < a;
            o++
          )
            if (r[p] == u[o + 1][r[h]]) {
              c = !1;
              break;
            }
          for (
            c && (u[0][r[h]]++, (u[u[0][r[h]]][r[h]] = r[p])), c = !0, o = 0;
            o < u[0][r[p]];
            o++
          )
            if (r[d] == u[o + 1][r[p]]) {
              c = !1;
              break;
            }
          for (
            c && (u[0][r[p]]++, (u[u[0][r[p]]][r[p]] = r[d])),
              c = !0,
              o = 0,
              a = u[0][r[p]];
            o < a;
            o++
          )
            if (r[h] == u[o + 1][r[p]]) {
              c = !1;
              break;
            }
          c && (u[0][r[p]]++, (u[u[0][r[p]]][r[p]] = r[h]));
        }
        for (s = 0; s < e; s++) {
          for (n = 0, i = t.length; n < i; n++)
            if (u[0][n] < 3)
              (l[n].x = t[n].x), (l[n].y = t[n].y), (l[n].z = t[n].z);
            else if (3 == u[0][n] || 4 == u[0][n]) {
              for (
                l[n].x = 0, l[n].y = 0, l[n].z = 0, o = 0, a = u[0][n];
                o < a;
                o++
              )
                (l[n].x += t[u[o + 1][n]].x),
                  (l[n].y += t[u[o + 1][n]].y),
                  (l[n].z += t[u[o + 1][n]].z);
              (l[n].x += 0.5 * t[n].x),
                (l[n].y += 0.5 * t[n].y),
                (l[n].z += 0.5 * t[n].z),
                (l[n].x /= 0.5 + u[0][n]),
                (l[n].y /= 0.5 + u[0][n]),
                (l[n].z /= 0.5 + u[0][n]);
            } else {
              for (
                l[n].x = 0, l[n].y = 0, l[n].z = 0, o = 0, a = u[0][n];
                o < a;
                o++
              )
                (l[n].x += t[u[o + 1][n]].x),
                  (l[n].y += t[u[o + 1][n]].y),
                  (l[n].z += t[u[o + 1][n]].z);
              (l[n].x += 1 * t[n].x),
                (l[n].y += 1 * t[n].y),
                (l[n].z += 1 * t[n].z),
                (l[n].x /= 1 + u[0][n]),
                (l[n].y /= 1 + u[0][n]),
                (l[n].z /= 1 + u[0][n]);
            }
          for (n = 0, i = t.length; n < i; n++)
            (t[n].x = l[n].x), (t[n].y = l[n].y), (t[n].z = l[n].z);
        }
      }),
      (i.edgeTable = [
        0, 0, 0, 0, 0, 0, 0, 2816, 0, 0, 0, 1792, 0, 3328, 3584, 3840, 0, 0, 0,
        138, 0, 21, 0, 134, 0, 0, 0, 652, 0, 2067, 3865, 3600, 0, 0, 0, 42, 0,
        0, 0, 294, 0, 0, 21, 28, 0, 3875, 1049, 3360, 0, 168, 162, 170, 0, 645,
        2475, 2210, 0, 687, 293, 172, 4010, 3747, 3497, 3232, 0, 0, 0, 0, 0, 69,
        0, 900, 0, 0, 0, 1792, 138, 131, 1608, 1920, 0, 81, 0, 2074, 84, 85, 84,
        86, 0, 81, 0, 3676, 330, 1105, 1881, 1616, 0, 0, 0, 42, 0, 69, 0, 502,
        0, 0, 21, 3580, 138, 2035, 1273, 1520, 2816, 104, 2337, 106, 840, 581,
        367, 102, 2816, 3695, 3429, 3180, 1898, 1635, 1385, 1120, 0, 0, 0, 0, 0,
        0, 0, 3910, 0, 0, 69, 588, 42, 2083, 41, 2880, 0, 0, 0, 1722, 0, 2293,
        4095, 3830, 0, 255, 757, 764, 2538, 2291, 3065, 2800, 0, 0, 81, 338, 0,
        3925, 1119, 3414, 84, 855, 85, 340, 2130, 2899, 89, 2384, 1792, 712,
        194, 1162, 4036, 3781, 3535, 3270, 708, 719, 197, 204, 3018, 2755, 2505,
        2240, 0, 0, 0, 0, 168, 420, 168, 1958, 162, 162, 676, 2988, 170, 163,
        680, 928, 3328, 3096, 3328, 3642, 52, 53, 1855, 1590, 2340, 2111, 2869,
        2620, 298, 51, 825, 560, 3584, 3584, 3090, 3482, 1668, 1941, 1183, 1430,
        146, 2975, 2069, 2460, 154, 915, 153, 400, 3840, 3592, 3329, 3082, 1796,
        1541, 1295, 1030, 2818, 2575, 2309, 2060, 778, 515, 265, 0,
      ]),
      (e = new Uint32Array(i.edgeTable)),
      (r = i.triTable =
        [
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [11, 9, 8],
          [],
          [],
          [],
          [8, 10, 9],
          [],
          [10, 8, 11],
          [9, 11, 10],
          [8, 10, 9, 8, 11, 10],
          [],
          [],
          [],
          [1, 7, 3],
          [],
          [4, 2, 0],
          [],
          [2, 1, 7],
          [],
          [],
          [],
          [2, 7, 3, 2, 9, 7],
          [],
          [1, 4, 11, 1, 0, 4],
          [3, 8, 0, 11, 9, 4, 11, 10, 9],
          [4, 11, 9, 11, 10, 9],
          [],
          [],
          [],
          [5, 3, 1],
          [],
          [],
          [],
          [2, 5, 8, 2, 1, 5],
          [],
          [],
          [2, 4, 0],
          [3, 2, 4],
          [],
          [0, 9, 1, 8, 10, 5, 8, 11, 10],
          [3, 4, 0, 3, 10, 4],
          [5, 8, 10, 8, 11, 10],
          [],
          [3, 5, 7],
          [7, 1, 5],
          [1, 7, 3, 1, 5, 7],
          [],
          [9, 2, 0, 9, 7, 2],
          [0, 3, 8, 1, 7, 11, 1, 5, 7],
          [11, 1, 7, 1, 5, 7],
          [],
          [9, 1, 0, 5, 3, 2, 5, 7, 3],
          [8, 2, 5, 8, 0, 2],
          [2, 5, 3, 5, 7, 3],
          [3, 9, 1, 3, 8, 9, 7, 11, 10, 7, 10, 5],
          [9, 1, 0, 10, 7, 11, 10, 5, 7],
          [3, 8, 0, 7, 10, 5, 7, 11, 10],
          [11, 5, 7, 11, 10, 5],
          [],
          [],
          [],
          [],
          [],
          [0, 6, 2],
          [],
          [7, 2, 9, 7, 9, 8],
          [],
          [],
          [],
          [8, 10, 9],
          [7, 1, 3],
          [7, 1, 0],
          [6, 9, 3, 6, 10, 9],
          [7, 10, 8, 10, 9, 8],
          [],
          [6, 0, 4],
          [],
          [11, 1, 4, 11, 3, 1],
          [2, 4, 6],
          [2, 0, 4, 2, 4, 6],
          [2, 4, 6],
          [1, 4, 2, 4, 6, 2],
          [],
          [6, 0, 4],
          [],
          [2, 11, 3, 6, 9, 4, 6, 10, 9],
          [8, 6, 1, 8, 1, 3],
          [10, 0, 6, 0, 4, 6],
          [8, 0, 3, 9, 6, 10, 9, 4, 6],
          [10, 4, 6, 10, 9, 4],
          [],
          [],
          [],
          [5, 3, 1],
          [],
          [0, 6, 2],
          [],
          [7, 4, 8, 5, 2, 1, 5, 6, 2],
          [],
          [],
          [2, 4, 0],
          [7, 4, 8, 2, 11, 3, 10, 5, 6],
          [7, 1, 3],
          [5, 6, 10, 0, 9, 1, 8, 7, 4],
          [5, 6, 10, 7, 0, 3, 7, 4, 0],
          [10, 5, 6, 4, 8, 7],
          [9, 11, 8],
          [3, 5, 6],
          [0, 5, 11, 0, 11, 8],
          [6, 3, 5, 3, 1, 5],
          [3, 9, 6, 3, 8, 9],
          [9, 6, 0, 6, 2, 0],
          [0, 3, 8, 2, 5, 6, 2, 1, 5],
          [1, 6, 2, 1, 5, 6],
          [9, 11, 8],
          [1, 0, 9, 6, 10, 5, 11, 3, 2],
          [6, 10, 5, 2, 8, 0, 2, 11, 8],
          [3, 2, 11, 10, 5, 6],
          [10, 5, 6, 9, 3, 8, 9, 1, 3],
          [0, 9, 1, 5, 6, 10],
          [8, 0, 3, 10, 5, 6],
          [10, 5, 6],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [1, 10, 2, 9, 11, 6, 9, 8, 11],
          [],
          [],
          [6, 0, 2],
          [3, 6, 9, 3, 2, 6],
          [3, 5, 1],
          [0, 5, 1, 0, 11, 5],
          [0, 3, 5],
          [6, 9, 11, 9, 8, 11],
          [],
          [],
          [],
          [4, 5, 9, 7, 1, 10, 7, 3, 1],
          [],
          [11, 6, 7, 2, 4, 5, 2, 0, 4],
          [11, 6, 7, 8, 0, 3, 1, 10, 2, 9, 4, 5],
          [6, 7, 11, 1, 10, 2, 9, 4, 5],
          [],
          [4, 1, 0, 4, 5, 1, 6, 7, 3, 6, 3, 2],
          [9, 4, 5, 0, 6, 7, 0, 2, 6],
          [4, 5, 9, 6, 3, 2, 6, 7, 3],
          [6, 7, 11, 5, 3, 8, 5, 1, 3],
          [6, 7, 11, 4, 1, 0, 4, 5, 1],
          [4, 5, 9, 3, 8, 0, 11, 6, 7],
          [9, 4, 5, 7, 11, 6],
          [],
          [],
          [0, 6, 4],
          [8, 6, 4, 8, 1, 6],
          [],
          [0, 10, 2, 0, 9, 10, 4, 8, 11, 4, 11, 6],
          [10, 2, 1, 6, 0, 3, 6, 4, 0],
          [10, 2, 1, 11, 4, 8, 11, 6, 4],
          [4, 2, 6],
          [1, 0, 9, 2, 4, 8, 2, 6, 4],
          [2, 4, 0, 2, 6, 4],
          [8, 2, 4, 2, 6, 4],
          [11, 4, 1, 11, 6, 4],
          [0, 9, 1, 4, 11, 6, 4, 8, 11],
          [3, 6, 0, 6, 4, 0],
          [8, 6, 4, 8, 11, 6],
          [10, 8, 9],
          [6, 3, 9, 6, 7, 3],
          [6, 7, 1],
          [10, 7, 1, 7, 3, 1],
          [7, 11, 6, 8, 10, 2, 8, 9, 10],
          [11, 6, 7, 10, 0, 9, 10, 2, 0],
          [2, 1, 10, 7, 11, 6, 8, 0, 3],
          [1, 10, 2, 6, 7, 11],
          [7, 2, 6, 7, 9, 2],
          [1, 0, 9, 3, 6, 7, 3, 2, 6],
          [7, 0, 6, 0, 2, 6],
          [2, 7, 3, 2, 6, 7],
          [7, 11, 6, 3, 9, 1, 3, 8, 9],
          [9, 1, 0, 11, 6, 7],
          [0, 3, 8, 11, 6, 7],
          [11, 6, 7],
          [],
          [],
          [],
          [],
          [5, 3, 7],
          [8, 5, 2, 8, 7, 5],
          [5, 3, 7],
          [1, 10, 2, 5, 8, 7, 5, 9, 8],
          [1, 7, 5],
          [1, 7, 5],
          [9, 2, 7, 9, 7, 5],
          [11, 3, 2, 8, 5, 9, 8, 7, 5],
          [1, 3, 7, 1, 7, 5],
          [0, 7, 1, 7, 5, 1],
          [9, 3, 5, 3, 7, 5],
          [9, 7, 5, 9, 8, 7],
          [8, 10, 11],
          [3, 4, 10, 3, 10, 11],
          [8, 10, 11],
          [5, 9, 4, 1, 11, 3, 1, 10, 11],
          [2, 4, 5],
          [5, 2, 4, 2, 0, 4],
          [0, 3, 8, 5, 9, 4, 10, 2, 1],
          [2, 1, 10, 9, 4, 5],
          [2, 8, 5, 2, 11, 8],
          [3, 2, 11, 1, 4, 5, 1, 0, 4],
          [9, 4, 5, 8, 2, 11, 8, 0, 2],
          [11, 3, 2, 9, 4, 5],
          [8, 5, 3, 5, 1, 3],
          [5, 0, 4, 5, 1, 0],
          [3, 8, 0, 4, 5, 9],
          [9, 4, 5],
          [11, 9, 10],
          [11, 9, 10],
          [1, 11, 4, 1, 10, 11],
          [8, 7, 4, 11, 1, 10, 11, 3, 1],
          [2, 7, 9, 2, 9, 10],
          [4, 8, 7, 0, 10, 2, 0, 9, 10],
          [2, 1, 10, 0, 7, 4, 0, 3, 7],
          [10, 2, 1, 8, 7, 4],
          [1, 7, 4],
          [3, 2, 11, 4, 8, 7, 9, 1, 0],
          [11, 4, 2, 4, 0, 2],
          [2, 11, 3, 7, 4, 8],
          [4, 1, 7, 1, 3, 7],
          [1, 0, 9, 8, 7, 4],
          [3, 4, 0, 3, 7, 4],
          [8, 7, 4],
          [8, 9, 10, 8, 10, 11],
          [3, 9, 11, 9, 10, 11],
          [0, 10, 8, 10, 11, 8],
          [10, 3, 1, 10, 11, 3],
          [2, 8, 10, 8, 9, 10],
          [9, 2, 0, 9, 10, 2],
          [8, 0, 3, 1, 10, 2],
          [10, 2, 1],
          [1, 11, 9, 11, 8, 9],
          [11, 3, 2, 0, 9, 1],
          [11, 0, 2, 11, 8, 0],
          [11, 3, 2],
          [8, 1, 3, 8, 9, 1],
          [9, 1, 0],
          [8, 0, 3],
          [],
        ]),
      (t = [
        0, 265, 515, 778, 2060, 2309, 2575, 2822, 1030, 1295, 1541, 1804, 3082,
        3331, 3593, 3840, 400, 153, 915, 666, 2460, 2197, 2975, 2710, 1430,
        1183, 1941, 1692, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 2620, 2869,
        2111, 2358, 1590, 1855, 1077, 1340, 3642, 3891, 3129, 3376, 928, 681,
        419, 170, 2988, 2725, 2479, 2214, 1958, 1711, 1445, 1196, 4010, 3747,
        3497, 3232, 2240, 2505, 2755, 3018, 204, 453, 719, 966, 3270, 3535,
        3781, 4044, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 348, 85,
        863, 598, 3414, 3167, 3925, 3676, 1370, 1107, 1881, 1616, 2800, 3065,
        2291, 2554, 764, 1013, 255, 502, 3830, 4095, 3317, 3580, 1786, 2035,
        1273, 1520, 2912, 2665, 2403, 2154, 876, 613, 367, 102, 3942, 3695,
        3429, 3180, 1898, 1635, 1385, 1120, 1120, 1385, 1635, 1898, 3180, 3429,
        3695, 3942, 102, 367, 613, 876, 2154, 2403, 2665, 2912, 1520, 1273,
        2035, 1786, 3580, 3317, 4095, 3830, 502, 255, 1013, 764, 2554, 2291,
        3065, 2800, 1616, 1881, 1107, 1370, 3676, 3925, 3167, 3414, 598, 863,
        85, 348, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 4044, 3781,
        3535, 3270, 966, 719, 453, 204, 3018, 2755, 2505, 2240, 3232, 3497,
        3747, 4010, 1196, 1445, 1711, 1958, 2214, 2479, 2725, 2988, 170, 419,
        681, 928, 3376, 3129, 3891, 3642, 1340, 1077, 1855, 1590, 2358, 2111,
        2869, 2620, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 1692, 1941, 1183,
        1430, 2710, 2975, 2197, 2460, 666, 915, 153, 400, 3840, 3593, 3331,
        3082, 1804, 1541, 1295, 1030, 2822, 2575, 2309, 2060, 778, 515, 265, 0,
      ]),
      (n = [
        [],
        [8, 3, 0],
        [9, 0, 1],
        [8, 3, 1, 8, 1, 9],
        [11, 2, 3],
        [11, 2, 0, 11, 0, 8],
        [11, 2, 3, 0, 1, 9],
        [2, 1, 11, 1, 9, 11, 11, 9, 8],
        [10, 1, 2],
        [8, 3, 0, 1, 2, 10],
        [9, 0, 2, 9, 2, 10],
        [3, 2, 8, 2, 10, 8, 8, 10, 9],
        [10, 1, 3, 10, 3, 11],
        [1, 0, 10, 0, 8, 10, 10, 8, 11],
        [0, 3, 9, 3, 11, 9, 9, 11, 10],
        [8, 10, 9, 8, 11, 10],
        [8, 4, 7],
        [3, 0, 4, 3, 4, 7],
        [1, 9, 0, 8, 4, 7],
        [9, 4, 1, 4, 7, 1, 1, 7, 3],
        [2, 3, 11, 7, 8, 4],
        [7, 11, 4, 11, 2, 4, 4, 2, 0],
        [3, 11, 2, 4, 7, 8, 9, 0, 1],
        [2, 7, 11, 2, 1, 7, 1, 4, 7, 1, 9, 4],
        [10, 1, 2, 8, 4, 7],
        [2, 10, 1, 0, 4, 7, 0, 7, 3],
        [4, 7, 8, 0, 2, 10, 0, 10, 9],
        [2, 7, 3, 2, 9, 7, 7, 9, 4, 2, 10, 9],
        [8, 4, 7, 11, 10, 1, 11, 1, 3],
        [11, 4, 7, 1, 4, 11, 1, 11, 10, 1, 0, 4],
        [3, 8, 0, 7, 11, 4, 11, 9, 4, 11, 10, 9],
        [7, 11, 4, 4, 11, 9, 11, 10, 9],
        [9, 5, 4],
        [3, 0, 8, 4, 9, 5],
        [5, 4, 0, 5, 0, 1],
        [4, 8, 5, 8, 3, 5, 5, 3, 1],
        [11, 2, 3, 9, 5, 4],
        [9, 5, 4, 8, 11, 2, 8, 2, 0],
        [3, 11, 2, 1, 5, 4, 1, 4, 0],
        [8, 5, 4, 2, 5, 8, 2, 8, 11, 2, 1, 5],
        [2, 10, 1, 9, 5, 4],
        [0, 8, 3, 5, 4, 9, 10, 1, 2],
        [10, 5, 2, 5, 4, 2, 2, 4, 0],
        [3, 4, 8, 3, 2, 4, 2, 5, 4, 2, 10, 5],
        [5, 4, 9, 1, 3, 11, 1, 11, 10],
        [0, 9, 1, 4, 8, 5, 8, 10, 5, 8, 11, 10],
        [3, 4, 0, 3, 10, 4, 4, 10, 5, 3, 11, 10],
        [4, 8, 5, 5, 8, 10, 8, 11, 10],
        [9, 5, 7, 9, 7, 8],
        [0, 9, 3, 9, 5, 3, 3, 5, 7],
        [8, 0, 7, 0, 1, 7, 7, 1, 5],
        [1, 7, 3, 1, 5, 7],
        [11, 2, 3, 8, 9, 5, 8, 5, 7],
        [9, 2, 0, 9, 7, 2, 2, 7, 11, 9, 5, 7],
        [0, 3, 8, 2, 1, 11, 1, 7, 11, 1, 5, 7],
        [2, 1, 11, 11, 1, 7, 1, 5, 7],
        [1, 2, 10, 5, 7, 8, 5, 8, 9],
        [9, 1, 0, 10, 5, 2, 5, 3, 2, 5, 7, 3],
        [5, 2, 10, 8, 2, 5, 8, 5, 7, 8, 0, 2],
        [10, 5, 2, 2, 5, 3, 5, 7, 3],
        [3, 9, 1, 3, 8, 9, 7, 11, 10, 7, 10, 5],
        [9, 1, 0, 10, 7, 11, 10, 5, 7],
        [3, 8, 0, 7, 10, 5, 7, 11, 10],
        [11, 5, 7, 11, 10, 5],
        [11, 7, 6],
        [0, 8, 3, 11, 7, 6],
        [9, 0, 1, 11, 7, 6],
        [7, 6, 11, 3, 1, 9, 3, 9, 8],
        [2, 3, 7, 2, 7, 6],
        [8, 7, 0, 7, 6, 0, 0, 6, 2],
        [1, 9, 0, 3, 7, 6, 3, 6, 2],
        [7, 6, 2, 7, 2, 9, 2, 1, 9, 7, 9, 8],
        [1, 2, 10, 6, 11, 7],
        [2, 10, 1, 7, 6, 11, 8, 3, 0],
        [11, 7, 6, 10, 9, 0, 10, 0, 2],
        [7, 6, 11, 3, 2, 8, 8, 2, 10, 8, 10, 9],
        [6, 10, 7, 10, 1, 7, 7, 1, 3],
        [6, 10, 1, 6, 1, 7, 7, 1, 0, 7, 0, 8],
        [9, 0, 3, 6, 9, 3, 6, 10, 9, 6, 3, 7],
        [6, 10, 7, 7, 10, 8, 10, 9, 8],
        [8, 4, 6, 8, 6, 11],
        [11, 3, 6, 3, 0, 6, 6, 0, 4],
        [0, 1, 9, 4, 6, 11, 4, 11, 8],
        [1, 9, 4, 11, 1, 4, 11, 3, 1, 11, 4, 6],
        [3, 8, 2, 8, 4, 2, 2, 4, 6],
        [2, 0, 4, 2, 4, 6],
        [1, 9, 0, 3, 8, 2, 2, 8, 4, 2, 4, 6],
        [9, 4, 1, 1, 4, 2, 4, 6, 2],
        [10, 1, 2, 11, 8, 4, 11, 4, 6],
        [10, 1, 2, 11, 3, 6, 6, 3, 0, 6, 0, 4],
        [0, 2, 10, 0, 10, 9, 4, 11, 8, 4, 6, 11],
        [2, 11, 3, 6, 9, 4, 6, 10, 9],
        [8, 4, 6, 8, 6, 1, 6, 10, 1, 8, 1, 3],
        [1, 0, 10, 10, 0, 6, 0, 4, 6],
        [8, 0, 3, 9, 6, 10, 9, 4, 6],
        [10, 4, 6, 10, 9, 4],
        [9, 5, 4, 7, 6, 11],
        [4, 9, 5, 3, 0, 8, 11, 7, 6],
        [6, 11, 7, 4, 0, 1, 4, 1, 5],
        [6, 11, 7, 4, 8, 5, 5, 8, 3, 5, 3, 1],
        [4, 9, 5, 6, 2, 3, 6, 3, 7],
        [9, 5, 4, 8, 7, 0, 0, 7, 6, 0, 6, 2],
        [4, 0, 1, 4, 1, 5, 6, 3, 7, 6, 2, 3],
        [7, 4, 8, 5, 2, 1, 5, 6, 2],
        [6, 11, 7, 1, 2, 10, 9, 5, 4],
        [11, 7, 6, 8, 3, 0, 1, 2, 10, 9, 5, 4],
        [11, 7, 6, 10, 5, 2, 2, 5, 4, 2, 4, 0],
        [7, 4, 8, 2, 11, 3, 10, 5, 6],
        [4, 9, 5, 6, 10, 7, 7, 10, 1, 7, 1, 3],
        [5, 6, 10, 0, 9, 1, 8, 7, 4],
        [5, 6, 10, 7, 0, 3, 7, 4, 0],
        [10, 5, 6, 4, 8, 7],
        [5, 6, 9, 6, 11, 9, 9, 11, 8],
        [0, 9, 5, 0, 5, 3, 3, 5, 6, 3, 6, 11],
        [0, 1, 5, 0, 5, 11, 5, 6, 11, 0, 11, 8],
        [11, 3, 6, 6, 3, 5, 3, 1, 5],
        [9, 5, 6, 3, 9, 6, 3, 8, 9, 3, 6, 2],
        [5, 6, 9, 9, 6, 0, 6, 2, 0],
        [0, 3, 8, 2, 5, 6, 2, 1, 5],
        [1, 6, 2, 1, 5, 6],
        [1, 2, 10, 5, 6, 9, 9, 6, 11, 9, 11, 8],
        [1, 0, 9, 6, 10, 5, 11, 3, 2],
        [6, 10, 5, 2, 8, 0, 2, 11, 8],
        [3, 2, 11, 10, 5, 6],
        [10, 5, 6, 9, 3, 8, 9, 1, 3],
        [0, 9, 1, 5, 6, 10],
        [8, 0, 3, 10, 5, 6],
        [10, 5, 6],
        [10, 6, 5],
        [8, 3, 0, 10, 6, 5],
        [0, 1, 9, 5, 10, 6],
        [10, 6, 5, 9, 8, 3, 9, 3, 1],
        [3, 11, 2, 10, 6, 5],
        [6, 5, 10, 2, 0, 8, 2, 8, 11],
        [1, 9, 0, 6, 5, 10, 11, 2, 3],
        [1, 10, 2, 5, 9, 6, 9, 11, 6, 9, 8, 11],
        [1, 2, 6, 1, 6, 5],
        [0, 8, 3, 2, 6, 5, 2, 5, 1],
        [5, 9, 6, 9, 0, 6, 6, 0, 2],
        [9, 6, 5, 3, 6, 9, 3, 9, 8, 3, 2, 6],
        [11, 6, 3, 6, 5, 3, 3, 5, 1],
        [0, 5, 1, 0, 11, 5, 5, 11, 6, 0, 8, 11],
        [0, 5, 9, 0, 3, 5, 3, 6, 5, 3, 11, 6],
        [5, 9, 6, 6, 9, 11, 9, 8, 11],
        [10, 6, 5, 4, 7, 8],
        [5, 10, 6, 7, 3, 0, 7, 0, 4],
        [5, 10, 6, 0, 1, 9, 8, 4, 7],
        [4, 5, 9, 6, 7, 10, 7, 1, 10, 7, 3, 1],
        [7, 8, 4, 2, 3, 11, 10, 6, 5],
        [11, 6, 7, 10, 2, 5, 2, 4, 5, 2, 0, 4],
        [11, 6, 7, 8, 0, 3, 1, 10, 2, 9, 4, 5],
        [6, 7, 11, 1, 10, 2, 9, 4, 5],
        [7, 8, 4, 5, 1, 2, 5, 2, 6],
        [4, 1, 0, 4, 5, 1, 6, 7, 3, 6, 3, 2],
        [9, 4, 5, 8, 0, 7, 0, 6, 7, 0, 2, 6],
        [4, 5, 9, 6, 3, 2, 6, 7, 3],
        [6, 7, 11, 4, 5, 8, 5, 3, 8, 5, 1, 3],
        [6, 7, 11, 4, 1, 0, 4, 5, 1],
        [4, 5, 9, 3, 8, 0, 11, 6, 7],
        [9, 4, 5, 7, 11, 6],
        [10, 6, 4, 10, 4, 9],
        [8, 3, 0, 9, 10, 6, 9, 6, 4],
        [1, 10, 0, 10, 6, 0, 0, 6, 4],
        [8, 6, 4, 8, 1, 6, 6, 1, 10, 8, 3, 1],
        [2, 3, 11, 6, 4, 9, 6, 9, 10],
        [0, 10, 2, 0, 9, 10, 4, 8, 11, 4, 11, 6],
        [10, 2, 1, 11, 6, 3, 6, 0, 3, 6, 4, 0],
        [10, 2, 1, 11, 4, 8, 11, 6, 4],
        [9, 1, 4, 1, 2, 4, 4, 2, 6],
        [1, 0, 9, 3, 2, 8, 2, 4, 8, 2, 6, 4],
        [2, 4, 0, 2, 6, 4],
        [3, 2, 8, 8, 2, 4, 2, 6, 4],
        [1, 4, 9, 11, 4, 1, 11, 1, 3, 11, 6, 4],
        [0, 9, 1, 4, 11, 6, 4, 8, 11],
        [11, 6, 3, 3, 6, 0, 6, 4, 0],
        [8, 6, 4, 8, 11, 6],
        [6, 7, 10, 7, 8, 10, 10, 8, 9],
        [9, 3, 0, 6, 3, 9, 6, 9, 10, 6, 7, 3],
        [6, 1, 10, 6, 7, 1, 7, 0, 1, 7, 8, 0],
        [6, 7, 10, 10, 7, 1, 7, 3, 1],
        [7, 11, 6, 3, 8, 2, 8, 10, 2, 8, 9, 10],
        [11, 6, 7, 10, 0, 9, 10, 2, 0],
        [2, 1, 10, 7, 11, 6, 8, 0, 3],
        [1, 10, 2, 6, 7, 11],
        [7, 2, 6, 7, 9, 2, 2, 9, 1, 7, 8, 9],
        [1, 0, 9, 3, 6, 7, 3, 2, 6],
        [8, 0, 7, 7, 0, 6, 0, 2, 6],
        [2, 7, 3, 2, 6, 7],
        [7, 11, 6, 3, 9, 1, 3, 8, 9],
        [9, 1, 0, 11, 6, 7],
        [0, 3, 8, 11, 6, 7],
        [11, 6, 7],
        [11, 7, 5, 11, 5, 10],
        [3, 0, 8, 7, 5, 10, 7, 10, 11],
        [9, 0, 1, 10, 11, 7, 10, 7, 5],
        [3, 1, 9, 3, 9, 8, 7, 10, 11, 7, 5, 10],
        [10, 2, 5, 2, 3, 5, 5, 3, 7],
        [5, 10, 2, 8, 5, 2, 8, 7, 5, 8, 2, 0],
        [9, 0, 1, 10, 2, 5, 5, 2, 3, 5, 3, 7],
        [1, 10, 2, 5, 8, 7, 5, 9, 8],
        [2, 11, 1, 11, 7, 1, 1, 7, 5],
        [0, 8, 3, 2, 11, 1, 1, 11, 7, 1, 7, 5],
        [9, 0, 2, 9, 2, 7, 2, 11, 7, 9, 7, 5],
        [11, 3, 2, 8, 5, 9, 8, 7, 5],
        [1, 3, 7, 1, 7, 5],
        [8, 7, 0, 0, 7, 1, 7, 5, 1],
        [0, 3, 9, 9, 3, 5, 3, 7, 5],
        [9, 7, 5, 9, 8, 7],
        [4, 5, 8, 5, 10, 8, 8, 10, 11],
        [3, 0, 4, 3, 4, 10, 4, 5, 10, 3, 10, 11],
        [0, 1, 9, 4, 5, 8, 8, 5, 10, 8, 10, 11],
        [5, 9, 4, 1, 11, 3, 1, 10, 11],
        [3, 8, 4, 3, 4, 2, 2, 4, 5, 2, 5, 10],
        [10, 2, 5, 5, 2, 4, 2, 0, 4],
        [0, 3, 8, 5, 9, 4, 10, 2, 1],
        [2, 1, 10, 9, 4, 5],
        [8, 4, 5, 2, 8, 5, 2, 11, 8, 2, 5, 1],
        [3, 2, 11, 1, 4, 5, 1, 0, 4],
        [9, 4, 5, 8, 2, 11, 8, 0, 2],
        [11, 3, 2, 9, 4, 5],
        [4, 5, 8, 8, 5, 3, 5, 1, 3],
        [5, 0, 4, 5, 1, 0],
        [3, 8, 0, 4, 5, 9],
        [9, 4, 5],
        [7, 4, 11, 4, 9, 11, 11, 9, 10],
        [3, 0, 8, 7, 4, 11, 11, 4, 9, 11, 9, 10],
        [11, 7, 4, 1, 11, 4, 1, 10, 11, 1, 4, 0],
        [8, 7, 4, 11, 1, 10, 11, 3, 1],
        [2, 3, 7, 2, 7, 9, 7, 4, 9, 2, 9, 10],
        [4, 8, 7, 0, 10, 2, 0, 9, 10],
        [2, 1, 10, 0, 7, 4, 0, 3, 7],
        [10, 2, 1, 8, 7, 4],
        [2, 11, 7, 2, 7, 1, 1, 7, 4, 1, 4, 9],
        [3, 2, 11, 4, 8, 7, 9, 1, 0],
        [7, 4, 11, 11, 4, 2, 4, 0, 2],
        [2, 11, 3, 7, 4, 8],
        [9, 1, 4, 4, 1, 7, 1, 3, 7],
        [1, 0, 9, 8, 7, 4],
        [3, 4, 0, 3, 7, 4],
        [8, 7, 4],
        [8, 9, 10, 8, 10, 11],
        [0, 9, 3, 3, 9, 11, 9, 10, 11],
        [1, 10, 0, 0, 10, 8, 10, 11, 8],
        [10, 3, 1, 10, 11, 3],
        [3, 8, 2, 2, 8, 10, 8, 9, 10],
        [9, 2, 0, 9, 10, 2],
        [8, 0, 3, 1, 10, 2],
        [10, 2, 1],
        [2, 11, 1, 1, 11, 9, 11, 8, 9],
        [11, 3, 2, 0, 9, 1],
        [11, 0, 2, 11, 8, 0],
        [11, 3, 2],
        [8, 1, 3, 8, 9, 1],
        [9, 1, 0],
        [8, 0, 3],
        [],
      ]),
      i
    );
  }),
  ($3Dmol.MarchingCube = $3Dmol.MarchingCubeInitializer()),
  ($3Dmol.Parsers = (function () {
    var e = {},
      t = {
        H: 0.37,
        He: 0.32,
        Li: 1.34,
        Be: 0.9,
        B: 0.82,
        C: 0.77,
        N: 0.75,
        O: 0.73,
        F: 0.71,
        Ne: 0.69,
        Na: 1.54,
        Mg: 1.3,
        Al: 1.18,
        Si: 1.11,
        P: 1.06,
        S: 1.02,
        Cl: 0.99,
        Ar: 0.97,
        K: 1.96,
        Ca: 1.74,
        Sc: 1.44,
        Ti: 1.56,
        V: 1.25,
        Mn: 1.39,
        Fe: 1.25,
        Co: 1.26,
        Ni: 1.21,
        Cu: 1.38,
        Zn: 1.31,
        Ga: 1.26,
        Ge: 1.22,
        Se: 1.16,
        Br: 1.14,
        Kr: 1.1,
        Rb: 2.11,
        Sr: 1.92,
        Y: 1.62,
        Zr: 1.48,
        Nb: 1.37,
        Mo: 1.45,
        Tc: 1.56,
        Ru: 1.26,
        Rh: 1.35,
        Pd: 1.31,
        Ag: 1.53,
        Cd: 1.48,
        In: 1.44,
        Sn: 1.41,
        Sb: 1.38,
        Te: 1.35,
        I: 1.33,
        Xe: 1.3,
        Cs: 2.25,
        Ba: 1.98,
        Lu: 1.6,
        Hf: 1.5,
        Ta: 1.38,
        W: 1.46,
        Re: 1.59,
        Os: 1.44,
        Ir: 1.37,
        Pt: 1.28,
        Au: 1.44,
        Hg: 1.49,
        Tl: 1.48,
        Pb: 1.47,
        Bi: 1.46,
        Rn: 1.45,
      },
      r = {
        1: "H",
        2: "He",
        3: "Li",
        4: "Be",
        5: "B",
        6: "C",
        7: "N",
        8: "O",
        9: "F",
        10: "Ne",
        11: "Na",
        12: "Mg",
        13: "Al",
        14: "Si",
        15: "P",
        16: "S",
        17: "Cl",
        18: "Ar",
        19: "K",
        20: "Ca",
        21: "Sc",
        22: "Ti",
        23: "V",
        24: "Cr",
        25: "Mn",
        26: "Fe",
        27: "Co",
        28: "Ni",
        29: "Cu",
        30: "Zn",
        31: "Ga",
        32: "Ge",
        33: "As",
        34: "Se",
        35: "Br",
        36: "Kr",
        37: "Rb",
        38: "Sr",
        39: "Y",
        40: "Zr",
        41: "Nb",
        42: "Mo",
        43: "Tc",
        44: "Ru",
        45: "Rh",
        46: "Pd",
        47: "Ag",
        48: "Cd",
        49: "In",
        50: "Sn",
        51: "Sb",
        52: "Te",
        53: "I",
        54: "Xe",
        55: "Cs",
        56: "Ba",
        71: "Lu",
        72: "Hf",
        73: "Ta",
        74: "W",
        75: "Re",
        76: "Os",
        77: "Ir",
        78: "Pt",
        79: "Au",
        80: "Hg",
        81: "Tl",
        82: "Pb",
        83: "Bi",
        84: "Po",
        85: "At",
        86: "Rn",
        87: "Fr",
        88: "Ra",
        104: "Rf",
        105: "Db",
        106: "Sg",
        107: "Bh",
        108: "Hs",
        109: "Mt",
        110: "Ds",
        111: "Rg",
        112: "Cn",
        113: "Nh",
        114: "Fl",
        115: "Mc",
        116: "Lv",
        117: "Ts",
        118: "Og",
        57: "La",
        58: "Ce",
        59: "Pr",
        60: "Nd",
        61: "Pm",
        62: "Sm",
        63: "Eu",
        64: "Gd",
        65: "Tb",
        66: "Dy",
        67: "Ho",
        68: "Er",
        69: "Tm",
        70: "Yb",
        89: "Ac",
        90: "Th",
        91: "Pa",
        92: "U",
        93: "Np",
        94: "Pu",
        95: "Am",
        96: "Cm",
        97: "Bk",
        98: "Cf",
        99: "Es",
        100: "Fm",
        101: "Md",
        102: "No",
      },
      n = function (e) {
        return t[e] || 1.6;
      },
      i = function (e, t) {
        var r = n(e.elem) + n(t.elem);
        (r += 0.25), (r *= r);
        var i = e.x - t.x;
        if ((i *= i) > r) return !1;
        var o = e.y - t.y;
        if ((o *= o) > r) return !1;
        var a = e.z - t.z;
        if ((a *= a) > r) return !1;
        var s = i + o + a;
        return (
          !isNaN(s) &&
          !(s < 0.5) &&
          !(s > r) &&
          (e.altLoc == t.altLoc || " " == e.altLoc || " " == t.altLoc)
        );
      },
      o = function (e) {
        for (var t = 0, r = e.length; t < r; t++)
          e[t].index || (e[t].index = t);
        for (var n = {}, o = 0; o < e.length; o++) {
          var a = e[o],
            s = Math.floor(a.x / 4.95),
            l = Math.floor(a.y / 4.95),
            c = Math.floor(a.z / 4.95);
          n[s] || (n[s] = {}),
            n[s][l] || (n[s][l] = {}),
            n[s][l][c] || (n[s][l][c] = []),
            n[s][l][c].push(a);
        }
        var u = function (e, t) {
            for (var r = 0; r < e.length; r++)
              for (var n = e[r], o = 0; o < t.length; o++) {
                var a = t[o];
                if (i(n, a)) {
                  var s = n.bonds.indexOf(a.index),
                    l = a.bonds.indexOf(n.index);
                  -1 == s && -1 == l
                    ? (n.bonds.push(a.index),
                      n.bondOrder.push(1),
                      a.bonds.push(n.index),
                      a.bondOrder.push(1))
                    : -1 == s
                    ? (n.bonds.push(a.index), n.bondOrder.push(a.bondOrder[l]))
                    : -1 == l &&
                      (a.bonds.push(n.index), a.bondOrder.push(n.bondOrder[s]));
                }
              }
          },
          d = [
            { x: 0, y: 0, z: 1 },
            { x: 0, y: 1, z: -1 },
            { x: 0, y: 1, z: 0 },
            { x: 0, y: 1, z: 1 },
            { x: 1, y: -1, z: -1 },
            { x: 1, y: -1, z: 0 },
            { x: 1, y: -1, z: 1 },
            { x: 1, y: 0, z: -1 },
            { x: 1, y: 0, z: 0 },
            { x: 1, y: 0, z: 1 },
            { x: 1, y: 1, z: -1 },
            { x: 1, y: 1, z: 0 },
            { x: 1, y: 1, z: 1 },
          ];
        for (let e in n) {
          e = parseInt(e);
          for (let t in n[e]) {
            t = parseInt(t);
            for (let r in n[e][t]) {
              r = parseInt(r);
              let o = n[e][t][r];
              for (let e = 0; e < o.length; e++) {
                let t = o[e];
                for (let r = e + 1; r < o.length; r++) {
                  let e = o[r];
                  i(t, e) &&
                    -1 == t.bonds.indexOf(e.index) &&
                    (t.bonds.push(e.index),
                    t.bondOrder.push(1),
                    e.bonds.push(t.index),
                    e.bondOrder.push(1));
                }
              }
              for (let i = 0; i < d.length; i++) {
                let a = d[i];
                n[e + a.x] &&
                  n[e + a.x][t + a.y] &&
                  n[e + a.x][t + a.y][r + a.z] &&
                  u(o, n[e + a.x][t + a.y][r + a.z]);
              }
            }
          }
        }
      },
      a = new Set([
        "ABU",
        "ACD",
        "ALA",
        "ALB",
        "ALI",
        "ARG",
        "AR0",
        "ASN",
        "ASP",
        "ASX",
        "BAS",
        "CYS",
        "CYH",
        "CYX",
        "CSS",
        "CSH",
        "GLN",
        "GLU",
        "GLX",
        "GLY",
        "HIS",
        "HIE",
        "HID",
        "HIP",
        "HYP",
        "ILE",
        "ILU",
        "LEU",
        "LYS",
        "MET",
        "PCA",
        "PGA",
        "PHE",
        "PR0",
        "PRO",
        "PRZ",
        "SER",
        "THR",
        "TYR",
        "VAL",
        "A",
        "1MA",
        "C",
        "5MC",
        "OMC",
        "G",
        "1MG",
        "2MG",
        "M2G",
        "7MG",
        "OMG",
        "YG",
        "I",
        "T",
        "U",
        "+U",
        "H2U",
        "5MU",
        "PSU",
        "ACE",
        "F0R",
        "H2O",
        "HOH",
        "WAT",
      ]),
      s = function (e) {
        var t,
          r,
          n = [],
          s = [];
        for (t = 0, r = e.length; t < r; t++) {
          var l = e[t];
          (l.index = t), l.hetflag || !a.has(l.resn) ? s.push(l) : n.push(l);
        }
        o(s),
          n.sort(function (e, t) {
            return e.chain != t.chain
              ? e.chain < t.chain
                ? -1
                : 1
              : e.resi - t.resi;
          });
        var c,
          u = -1,
          d = -1;
        for (t = 0, r = n.length; t < r; t++) {
          var h = n[t];
          h.resi !== u && ((u = h.resi), c || d++, (c = !1)), (h.reschain = d);
          for (var p = t + 1; p < n.length; p++) {
            var f = n[p];
            if (f.chain != h.chain) break;
            if (f.resi - h.resi > 1) break;
            i(h, f) &&
              (-1 === h.bonds.indexOf(f.index) &&
                (h.bonds.push(f.index),
                h.bondOrder.push(1),
                f.bonds.push(h.index),
                f.bondOrder.push(1)),
              h.resi !== f.resi && (c = !0));
          }
        }
      },
      l = function (e) {
        !(function (e) {
          var t,
            r,
            n,
            i = [];
          for (t = 0, n = e.length; t < n; t++) {
            e[t].index = t;
            var o = e[t];
            o.hetflag ||
              ("N" !== o.atom && "O" !== o.atom) ||
              (i.push(o),
              (o.hbondOther = null),
              (o.hbondDistanceSq = Number.POSITIVE_INFINITY));
          }
          for (
            i.sort(function (e, t) {
              return e.z - t.z;
            }),
              t = 0,
              n = i.length;
            t < n;
            t++
          ) {
            var a = i[t];
            for (r = t + 1; r < n; r++) {
              var s = i[r],
                l = s.z - a.z;
              if (l > 3.2) break;
              if (s.atom != a.atom) {
                var c = Math.abs(s.y - a.y);
                if (!(c > 3.2)) {
                  var u = Math.abs(s.x - a.x);
                  if (!(u > 3.2)) {
                    var d = u * u + c * c + l * l;
                    d > 10.24 ||
                      (s.chain == a.chain && Math.abs(s.resi - a.resi) < 4) ||
                      (d < a.hbondDistanceSq &&
                        ((a.hbondOther = s), (a.hbondDistanceSq = d)),
                      d < s.hbondDistanceSq &&
                        ((s.hbondOther = a), (s.hbondDistanceSq = d)));
                  }
                }
              }
            }
          }
        })(e);
        var t,
          r,
          n,
          i,
          o,
          a,
          s = {};
        for (t = 0, r = e.length; t < r; t++)
          if (
            (void 0 === s[(o = e[t]).chain] && (s[o.chain] = []),
            isFinite(o.hbondDistanceSq))
          ) {
            var l = o.hbondOther;
            void 0 === s[l.chain] && (s[l.chain] = []),
              4 === Math.abs(l.resi - o.resi) && (s[o.chain][o.resi] = "h");
          }
        for (n in s)
          for (i = 1; i < s[n].length - 1; i++) {
            var c = s[n][i - 1],
              u = s[n][i + 1];
            (a = s[n][i]), "h" == c && c == u && a != c && (s[n][i] = c);
          }
        for (t = 0, r = e.length; t < r; t++)
          (o = e[t]),
            isFinite(o.hbondDistanceSq) &&
              "h" != s[o.chain][o.resi] &&
              "h" != o.ss &&
              (s[o.chain][o.resi] = "maybesheet");
        for (let t = 0, r = e.length; t < r; t++)
          if (
            ((o = e[t]),
            isFinite(o.hbondDistanceSq) && "maybesheet" == s[o.chain][o.resi])
          ) {
            let e = o.hbondOther,
              t = s[e.chain][e.resi];
            ("maybesheet" != t && "s" != t) ||
              ((s[o.chain][o.resi] = "s"), (s[e.chain][e.resi] = "s"));
          }
        for (let e in s) {
          for (let t = 1; t < s[e].length - 1; t++) {
            let r = s[e][t - 1],
              n = s[e][t + 1];
            (a = s[e][t]), "s" == r && r == n && a != r && (s[e][t] = r);
          }
          for (let t = 0; t < s[e].length; t++) {
            let r = s[e][t];
            ("h" != r && "s" != r) ||
              (s[e][t - 1] != r && s[e][t + 1] != r && delete s[e][t]);
          }
        }
        for (t = 0, r = e.length; t < r; t++)
          (a = s[(o = e[t]).chain][o.resi]),
            delete o.hbondOther,
            delete o.hbondDistanceSq,
            void 0 !== a &&
              "maybesheet" != a &&
              ((o.ss = a),
              s[o.chain][o.resi - 1] != a && (o.ssbegin = !0),
              s[o.chain][o.resi + 1] != a && (o.ssend = !0));
      },
      c = function (e, t, r, n) {
        var i,
          o,
          a,
          s = !r.duplicateAssemblyAtoms,
          l = t.length,
          c = l;
        let u = -1;
        if (r.normalizeAssembly && n) {
          let r = $3Dmol.conversionMatrix3(
              n.a,
              n.b,
              n.c,
              n.alpha,
              n.beta,
              n.gamma
            ),
            o = new $3Dmol.Matrix3();
          for (o.getInverse3(r), i = 0; i < e.length; i++) {
            let n = new $3Dmol.Vector3(0, 0, 0);
            for (a = 0; a < l; a++) {
              let r = new $3Dmol.Vector3(t[a].x, t[a].y, t[a].z);
              r.applyMatrix4(e[i]), r.applyMatrix3(o), n.add(r);
            }
            n.divideScalar(l), (n = [n.x, n.y, n.z]);
            let s = [0, 0, 0];
            for (let e = 0; e < 3; e++) {
              for (; n[e] < -0.001; ) (n[e] += 1), (s[e] += 1);
              for (; n[e] > 1.001; ) (n[e] -= 1), (s[e] -= 1);
            }
            (s = new $3Dmol.Vector3(s[0], s[1], s[2])).applyMatrix3(r),
              e[i].isNearlyIdentity() && s.lengthSq() > 0.001 && (u = i),
              e[i].translate(s);
          }
        }
        if (s) {
          if (e.length > 1)
            for (i = 0; i < t.length; i++) {
              var d = [];
              for (o = 0; o < e.length; o++)
                if (!e[o].isNearlyIdentity()) {
                  var h = new $3Dmol.Vector3();
                  h.set(t[i].x, t[i].y, t[i].z),
                    h.applyMatrix4(e[o]),
                    d.push(h);
                }
              t[i].symmetries = d;
            }
        } else {
          for (a = 0; a < l; a++) t[a].sym = -1;
          for (i = 0; i < e.length; i++)
            if (e[i].isNearlyIdentity() || u == i)
              for (a = 0; a < l; a++) t[a].sym = i;
            else {
              let r = new $3Dmol.Vector3();
              for (a = 0; a < l; a++) {
                var p = [];
                for (o = 0; o < t[a].bonds.length; o++)
                  p.push(t[a].bonds[o] + c);
                r.set(t[a].x, t[a].y, t[a].z), r.applyMatrix4(e[i]);
                var f = {};
                for (var m in t[a]) f[m] = t[a][m];
                (f.x = r.x),
                  (f.y = r.y),
                  (f.z = r.z),
                  (f.bonds = p),
                  (f.sym = i),
                  (f.index = t.length),
                  t.push(f);
              }
              c = t.length;
            }
          if (u >= 0) {
            let r = new $3Dmol.Vector3();
            for (a = 0; a < l; a++)
              r.set(t[a].x, t[a].y, t[a].z),
                r.applyMatrix4(e[u]),
                (t[a].x = r.x),
                (t[a].y = r.y),
                (t[a].z = r.z);
          }
          e.length = 0;
        }
      };
    (e.vasp = e.VASP =
      function (e) {
        var t = [[]],
          r = {},
          n = e.replace(/^\s+/, "").split(/\r?\n/);
        if (n.length < 3) return t;
        if (!n[1].match(/\d+/))
          return (
            console.log(
              "Warning: second line of the vasp structure file must be a number"
            ),
            t
          );
        if (((r.length = parseFloat(n[1])), r.length < 0))
          return (
            console.log(
              "Warning: Vasp implementation for negative lattice lengths is not yet available"
            ),
            t
          );
        (r.xVec = new Float32Array(n[2].replace(/^\s+/, "").split(/\s+/))),
          (r.yVec = new Float32Array(n[3].replace(/^\s+/, "").split(/\s+/))),
          (r.zVec = new Float32Array(n[4].replace(/^\s+/, "").split(/\s+/)));
        var i = new $3Dmol.Matrix3(
          r.xVec[0],
          r.xVec[1],
          r.xVec[2],
          r.yVec[0],
          r.yVec[1],
          r.yVec[2],
          r.zVec[0],
          r.zVec[1],
          r.zVec[2]
        );
        i.multiplyScalar(r.length),
          (t.modelData = [{ symmetries: [], cryst: { matrix: i } }]);
        var o = n[5].replace(/\s+/, "").replace(/\s+$/, "").split(/\s+/),
          a = new Int16Array(n[6].replace(/^\s+/, "").split(/\s+/)),
          s = n[7].replace(/\s+/, "");
        if (s.match(/C/)) s = "cartesian";
        else {
          if (!s.match(/D/))
            return (
              console.log(
                "Warning: Unknown vasp mode in POSCAR file: mode must be either C(artesian) or D(irect)"
              ),
              t
            );
          s = "direct";
        }
        if (o.length != a.length)
          return (
            console.log("Warning: declaration of atomary species wrong:"),
            console.log(o),
            console.log(a),
            t
          );
        n.splice(0, 8);
        for (var l = 0, c = 0, u = o.length; c < u; c++) {
          for (var d = o[c], h = 0, p = a[c]; h < p; h++) {
            var f = new Float32Array(n[l + h].replace(/^\s+/, "").split(/\s+/)),
              m = {};
            (m.elem = d),
              "cartesian" == s
                ? ((m.x = r.length * f[0]),
                  (m.y = r.length * f[1]),
                  (m.z = r.length * f[2]))
                : ((m.x =
                    r.length *
                    (f[0] * r.xVec[0] + f[1] * r.yVec[0] + f[2] * r.zVec[0])),
                  (m.y =
                    r.length *
                    (f[0] * r.xVec[1] + f[1] * r.yVec[1] + f[2] * r.zVec[1])),
                  (m.z =
                    r.length *
                    (f[0] * r.xVec[2] + f[1] * r.yVec[2] + f[2] * r.zVec[2]))),
              (m.bonds = []),
              t[0].push(m);
          }
          l += a[c];
        }
        return t;
      }),
      (e.cube = e.CUBE =
        function (e, t) {
          t = t || {};
          var n = [[]],
            i = e.split(/\r?\n/),
            a = void 0 === t.assignBonds || t.assignBonds;
          if (i.length < 6) return n;
          var s = i[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
            l = Math.abs(parseFloat(s[0]));
          let c = {};
          var u = (c.origin = new $3Dmol.Vector3(
            parseFloat(s[1]),
            parseFloat(s[2]),
            parseFloat(s[3])
          ));
          s = i[3].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
          var d =
            (s = i[3].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "))[0] >
            0
              ? 0.529177
              : 1;
          u.multiplyScalar(d);
          var h = Math.abs(s[0]),
            p = new $3Dmol.Vector3(
              parseFloat(s[1]),
              parseFloat(s[2]),
              parseFloat(s[3])
            ).multiplyScalar(d);
          s = i[4].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
          var f = Math.abs(s[0]),
            m = new $3Dmol.Vector3(
              parseFloat(s[1]),
              parseFloat(s[2]),
              parseFloat(s[3])
            ).multiplyScalar(d);
          s = i[5].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
          var g = Math.abs(s[0]),
            v = new $3Dmol.Vector3(
              parseFloat(s[1]),
              parseFloat(s[2]),
              parseFloat(s[3])
            ).multiplyScalar(d);
          if (
            ((c.size = { x: h, y: f, z: g }),
            (c.unit = new $3Dmol.Vector3(p.x, m.y, v.z)),
            0 != p.y ||
              0 != p.z ||
              0 != m.x ||
              0 != m.z ||
              0 != v.x ||
              0 != v.y)
          ) {
            c.matrix4 = new $3Dmol.Matrix4(
              p.x,
              m.x,
              v.x,
              0,
              p.y,
              m.y,
              v.y,
              0,
              p.z,
              m.z,
              v.z,
              0,
              0,
              0,
              0,
              1
            );
            let e = new $3Dmol.Matrix4().makeTranslation(u.x, u.y, u.z);
            (c.matrix4 = c.matrix4.multiplyMatrices(e, c.matrix4)),
              (c.matrix = c.matrix4.matrix3FromTopLeft()),
              (c.origin = new $3Dmol.Vector3(0, 0, 0)),
              (c.unit = new $3Dmol.Vector3(1, 1, 1));
          }
          (n.modelData = [{ cryst: c }]), (i = i.splice(6, l));
          for (
            var y = n[n.length - 1].length, x = y + i.length, b = y;
            b < x;
            ++b
          ) {
            var w = {};
            w.serial = b;
            var D = i[b - y]
              .replace(/^\s+/, "")
              .replace(/\s+/g, " ")
              .split(" ");
            (w.elem = r[D[0]]),
              (w.x = parseFloat(D[2]) * d),
              (w.y = parseFloat(D[3]) * d),
              (w.z = parseFloat(D[4]) * d),
              (w.hetflag = !0),
              (w.bonds = []),
              (w.bondOrder = []),
              (w.properties = {}),
              n[n.length - 1].push(w);
          }
          if (a) for (let e = 0; e < n.length; e++) o(n[e]);
          return n;
        }),
      (e.xyz = e.XYZ =
        function (e, t) {
          for (
            var r = [[]],
              n = void 0 === (t = t || {}).assignBonds || t.assignBonds,
              i = e.split(/\r?\n|\r/);
            i.length > 0 && !(i.length < 3);

          ) {
            var a = parseInt(i[0]);
            if (isNaN(a) || a <= 0) break;
            if (i.length < a + 2) break;
            var s = /Lattice\s*=\s*["\{\}]([^"\{\}]+)["\{\}]\s*/gi.exec(i[1]);
            if (null != s && s.length > 1) {
              var l = new Float32Array(s[1].split(/\s+/)),
                c = new $3Dmol.Matrix3(
                  l[0],
                  l[3],
                  l[6],
                  l[1],
                  l[4],
                  l[7],
                  l[2],
                  l[5],
                  l[8]
                );
              r.modelData = [{ cryst: { matrix: c } }];
            }
            for (
              var u = 2, d = r[r.length - 1].length, h = d + a, p = d;
              p < h;
              p++
            ) {
              var f = i[u++]
                  .replace(/^\s+/, "")
                  .replace(/\s+/g, " ")
                  .split(" "),
                m = {};
              m.serial = p;
              var g = f[0];
              (m.atom = m.elem =
                g[0].toUpperCase() + g.substr(1, 1).toLowerCase()),
                (m.x = parseFloat(f[1])),
                (m.y = parseFloat(f[2])),
                (m.z = parseFloat(f[3])),
                (m.hetflag = !0),
                (m.bonds = []),
                (m.bondOrder = []),
                (m.properties = {}),
                (r[r.length - 1][p] = m),
                f.length >= 7 &&
                  ((m.dx = parseFloat(f[4])),
                  (m.dy = parseFloat(f[5])),
                  (m.dz = parseFloat(f[6])));
            }
            if (!t.multimodel) break;
            r.push([]), i.splice(0, u);
          }
          if (n) for (let e = 0; e < r.length; e++) o(r[e]);
          if (t.onemol) {
            var v = r;
            (r = []).push(v[0]);
            for (let e = 1; e < v.length; e++) {
              let t = r[0].length;
              for (let n = 0; n < v[e].length; n++) {
                let i = v[e][n];
                for (let e = 0; e < i.bonds.length; e++)
                  i.bonds[e] = i.bonds[e] + t;
                (i.index = r[0].length), (i.serial = r[0].length), r[0].push(i);
              }
            }
          }
          return r;
        });
    (e.sdf = e.SDF =
      function (e, t) {
        var r = "V2000",
          n = e.split(/\r?\n|\r/);
        return (
          n.length > 3 && n[3].length > 38 && (r = n[3].substr(34, 5)),
          "V2000" === r
            ? (function (e, t) {
                var r = [[]],
                  n = !1;
                for (
                  void 0 !== t.keepH && (n = !t.keepH);
                  e.length > 0 && !(e.length < 4);

                ) {
                  var i = parseInt(e[3].substr(0, 3));
                  if (isNaN(i) || i <= 0) break;
                  var o = parseInt(e[3].substr(3, 3)),
                    a = 4;
                  if (e.length < 4 + i + o) break;
                  var s,
                    l,
                    c = [],
                    u = r[r.length - 1].length,
                    d = u + i;
                  for (s = u; s < d; s++, a++) {
                    var h = {},
                      p = (l = e[a]).substr(31, 3).replace(/ /g, "");
                    (h.atom = h.elem =
                      p[0].toUpperCase() + p.substr(1).toLowerCase()),
                      ("H" === h.elem && n) ||
                        ((h.serial = s),
                        (c[s] = r[r.length - 1].length),
                        (h.x = parseFloat(l.substr(0, 10))),
                        (h.y = parseFloat(l.substr(10, 10))),
                        (h.z = parseFloat(l.substr(20, 10))),
                        (h.hetflag = !0),
                        (h.bonds = []),
                        (h.bondOrder = []),
                        (h.properties = {}),
                        (h.index = r[r.length - 1].length),
                        r[r.length - 1].push(h));
                  }
                  for (s = 0; s < o; s++, a++) {
                    l = e[a];
                    var f = c[parseInt(l.substr(0, 3)) - 1 + u],
                      m = c[parseInt(l.substr(3, 3)) - 1 + u],
                      g = parseInt(l.substr(6, 3));
                    void 0 !== f &&
                      void 0 !== m &&
                      (r[r.length - 1][f].bonds.push(m),
                      r[r.length - 1][f].bondOrder.push(g),
                      r[r.length - 1][m].bonds.push(f),
                      r[r.length - 1][m].bondOrder.push(g));
                  }
                  if (!t.multimodel) break;
                  for (t.onemol || r.push([]); "$$$$" !== e[a]; ) a++;
                  e.splice(0, ++a);
                }
                return r;
              })(n, t)
            : "V3000" === r
            ? (function (e, t) {
                var r = [[]],
                  n = !1;
                for (
                  void 0 !== t.keepH && (n = !t.keepH);
                  e.length > 0 &&
                  !(e.length < 8) &&
                  e[4].startsWith("M  V30 BEGIN CTAB") &&
                  e[5].startsWith("M  V30 COUNTS") &&
                  !(e[5].length < 14);

                ) {
                  var i = e[5].substr(13).match(/\S+/g);
                  if (i.length < 2) break;
                  var o = parseInt(i[0]);
                  if (isNaN(o) || o <= 0) break;
                  var a = parseInt(i[1]),
                    s = 7;
                  if (e.length < 8 + o + a) break;
                  var l,
                    c = [],
                    u = r[r.length - 1].length,
                    d = u + o;
                  for (l = u; l < d; l++, s++) {
                    var h = e[s].substr(6).match(/\S+/g);
                    if (h.length > 4) {
                      var p = {},
                        f = h[1].replace(/ /g, "");
                      (p.atom = p.elem =
                        f[0].toUpperCase() + f.substr(1).toLowerCase()),
                        ("H" === p.elem && n) ||
                          ((p.serial = l),
                          (c[l] = r[r.length - 1].length),
                          (p.x = parseFloat(h[2])),
                          (p.y = parseFloat(h[3])),
                          (p.z = parseFloat(h[4])),
                          (p.hetflag = !0),
                          (p.bonds = []),
                          (p.bondOrder = []),
                          (p.properties = {}),
                          (p.index = r[r.length - 1].length),
                          r[r.length - 1].push(p));
                    }
                  }
                  if ("M  V30 END ATOM" !== e[s]) break;
                  if ((s++, 0 === a || "M  V30 BEGIN BOND" !== e[s])) break;
                  for (s++, l = 0; l < a; l++, s++) {
                    var m = e[s].substr(6).match(/\S+/g);
                    if (m.length > 3) {
                      var g = c[parseInt(m[2]) - 1 + u],
                        v = c[parseInt(m[3]) - 1 + u],
                        y = parseInt(m[1]);
                      void 0 !== g &&
                        void 0 !== v &&
                        (r[r.length - 1][g].bonds.push(v),
                        r[r.length - 1][g].bondOrder.push(y),
                        r[r.length - 1][v].bonds.push(g),
                        r[r.length - 1][v].bondOrder.push(y));
                    }
                  }
                  if (!t.multimodel) break;
                  for (t.onemol || r.push([]); "$$$$" !== e[s]; ) s++;
                  e.splice(0, ++s);
                }
                return r;
              })(n, t)
            : [[]]
        );
      }),
      (e.cdjson = e.json =
        function (e, t) {
          var r = [[]];
          "string" == typeof e && (e = JSON.parse(e));
          for (
            var n = e.m,
              i = n[0].a,
              o = n[0].b,
              a = n[0].s,
              s =
                void 0 !== t && void 0 !== t.parseStyle
                  ? t.parseStyle
                  : void 0 !== a,
              l = r[r.length - 1].length,
              c = 0;
            c < i.length;
            c++
          ) {
            var u = i[c],
              d = {};
            (d.id = u.i),
              (d.x = u.x),
              (d.y = u.y),
              (d.z = u.z || 0),
              (d.bonds = []),
              (d.bondOrder = []);
            var h = u.l || "C";
            (d.elem = h[0].toUpperCase() + h.substr(1).toLowerCase()),
              (d.serial = r[r.length - 1].length),
              s && (d.style = a[u.s || 0]),
              r[r.length - 1].push(d);
          }
          for (let e = 0; e < o.length; e++) {
            let t = o[e],
              n = t.b + l,
              i = t.e + l,
              a = t.o || 1,
              s = r[r.length - 1][n],
              c = r[r.length - 1][i];
            s.bonds.push(i),
              s.bondOrder.push(a),
              c.bonds.push(n),
              c.bondOrder.push(a);
          }
          return r;
        }),
      (e.mcif = e.cif =
        function (e, t) {
          var r = [],
            n = !(t = t || {}).doAssembly,
            i = (r.modelData = []),
            a = void 0 === t.assignBonds || t.assignBonds;
          function s(e, t) {
            for (var r = [], n = 0, i = 0; i < e.length; ) {
              for (; e.substr(i, t.length) !== t && i < e.length; ) {
                if ("'" === e[i]) for (i++; i < e.length && "'" !== e[i]; ) i++;
                else if ('"' === e[i])
                  for (i++; i < e.length && '"' !== e[i]; ) i++;
                i++;
              }
              r.push(e.substr(n, i - n)), (n = i += t.length);
            }
            return r;
          }
          var u = e.split(/\r?\n|\r/),
            d = [],
            h = !1;
          for (let e = 0; e < u.length; e++) {
            var p = u[e].split("#")[0];
            if (
              (h ? ";" === p[0] && (h = !1) : ";" === p[0] && (h = !0),
              h || "" !== p)
            ) {
              if (!h && "_" === (p = p.trim())[0]) {
                var f = p.split(/\s/)[0].indexOf(".");
                f > -1 &&
                  ((p[f] = "_"), (p = p.substr(0, f) + "_" + p.substr(f + 1)));
              }
              d.push(p);
            }
          }
          for (var m, g, v, y, x = 0; x < d.length; ) {
            for (; !d[x].startsWith("data_") || "data_global" === d[x]; ) x++;
            x++;
            for (var b = {}; x < d.length && !d[x].startsWith("data_"); )
              if (void 0 === d[x][0]) x++;
              else if ("_" === d[x][0]) {
                var w = d[x].split(/\s/)[0].toLowerCase(),
                  D = (b[w] = b[w] || []),
                  C = d[x].substr(d[x].indexOf(w) + w.length);
                if ("" === C)
                  if (";" === d[++x][0]) {
                    var S = d[x].substr(1);
                    for (x++; ";" !== d[x]; ) (S = S + "\n" + d[x]), x++;
                    D.push(S);
                  } else D.push(d[x]);
                else D.push(C.trim());
                x++;
              } else if ("loop_" === d[x].substr(0, 5)) {
                x++;
                for (var A = []; "" === d[x] || "_" === d[x][0]; ) {
                  if ("" !== d[x]) {
                    let e = d[x].split(/\s/)[0].toLowerCase(),
                      t = (b[e] = b[e] || []);
                    A.push(t);
                  }
                  x++;
                }
                for (
                  var $ = 0;
                  x < d.length &&
                  "_" !== d[x][0] &&
                  !d[x].startsWith("loop_") &&
                  !d[x].startsWith("data_");

                ) {
                  let e = s(d[x], " ");
                  for (var M = 0; M < e.length; M++)
                    "" !== e[M] && (A[$].push(e[M]), ($ = ($ + 1) % A.length));
                  x++;
                }
              } else x++;
            i.push({ symmetries: [] }), r.push([]);
            var k,
              z =
                void 0 !== b._atom_site_id
                  ? b._atom_site_id.length
                  : b._atom_site_label.length;
            if (void 0 !== b._cell_length_a) {
              var _ = parseFloat(b._cell_length_a),
                T = parseFloat(b._cell_length_b),
                L = parseFloat(b._cell_length_c),
                E = parseFloat(b._cell_angle_alpha) || 90,
                I = parseFloat(b._cell_angle_beta) || 90,
                F = parseFloat(b._cell_angle_gamma) || 90;
              (k = $3Dmol.conversionMatrix3(_, T, L, E, I, F)),
                (i[i.length - 1].cryst = {
                  a: _,
                  b: T,
                  c: L,
                  alpha: E,
                  beta: I,
                  gamma: F,
                });
            }
            for (var O = 0; O < z; O++)
              if (
                void 0 === b._atom_site_group_pdb ||
                "TER" !== b._atom_site_group_pdb[O]
              ) {
                var R = {};
                if (void 0 !== b._atom_site_cartn_x)
                  (R.x = parseFloat(b._atom_site_cartn_x[O])),
                    (R.y = parseFloat(b._atom_site_cartn_y[O])),
                    (R.z = parseFloat(b._atom_site_cartn_z[O]));
                else {
                  var N =
                    ((m = k),
                    (g = parseFloat(b._atom_site_fract_x[O])),
                    (v = parseFloat(b._atom_site_fract_y[O])),
                    (y = parseFloat(b._atom_site_fract_z[O])),
                    new $3Dmol.Vector3(g, v, y).applyMatrix3(m));
                  (R.x = N.x), (R.y = N.y), (R.z = N.z);
                }
                (R.chain = b._atom_site_auth_asym_id
                  ? b._atom_site_auth_asym_id[O]
                  : void 0),
                  (R.resi = b._atom_site_auth_seq_id
                    ? parseInt(b._atom_site_auth_seq_id[O])
                    : void 0),
                  (R.resn = b._atom_site_auth_comp_id
                    ? b._atom_site_auth_comp_id[O].trim()
                    : void 0),
                  (R.atom = b._atom_site_auth_atom_id
                    ? b._atom_site_auth_atom_id[O].replace(/"/gm, "")
                    : void 0),
                  (R.hetflag =
                    !b._atom_site_group_pdb ||
                    "HETA" === b._atom_site_group_pdb[O] ||
                    "HETATM" === b._atom_site_group_pdb[O]);
                var P = "X";
                b._atom_site_type_symbol
                  ? (P = b._atom_site_type_symbol[O].replace(/\(?\+?\d+.*/, ""))
                  : b._atom_site_label &&
                    (P = b._atom_site_label[O].split("_")[0].replace(
                      /\(?\d+.*/,
                      ""
                    )),
                  (R.elem = P[0].toUpperCase() + P.substr(1, 1).toLowerCase()),
                  (R.bonds = []),
                  (R.ss = "c"),
                  (R.serial = O),
                  (R.bondOrder = []),
                  (R.properties = {}),
                  r[r.length - 1].push(R);
              }
            if (void 0 !== b._pdbx_struct_oper_list_id && !n)
              for (let e = 0; e < b._pdbx_struct_oper_list_id.length; e++) {
                var V = parseFloat(b["_pdbx_struct_oper_list_matrix[1][1]"][e]),
                  B = parseFloat(b["_pdbx_struct_oper_list_matrix[1][2]"][e]),
                  U = parseFloat(b["_pdbx_struct_oper_list_matrix[1][3]"][e]),
                  j = parseFloat(b["_pdbx_struct_oper_list_vector[1]"][e]),
                  G = parseFloat(b["_pdbx_struct_oper_list_matrix[2][1]"][e]),
                  H = parseFloat(b["_pdbx_struct_oper_list_matrix[2][2]"][e]),
                  q = parseFloat(b["_pdbx_struct_oper_list_matrix[2][3]"][e]),
                  W = parseFloat(b["_pdbx_struct_oper_list_vector[2]"][e]),
                  Y = parseFloat(b["_pdbx_struct_oper_list_matrix[3][1]"][e]),
                  X = parseFloat(b["_pdbx_struct_oper_list_matrix[3][2]"][e]),
                  Z = parseFloat(b["_pdbx_struct_oper_list_matrix[3][3]"][e]),
                  Q = parseFloat(b["_pdbx_struct_oper_list_vector[3]"][e]),
                  K = new $3Dmol.Matrix4(V, B, U, j, G, H, q, W, Y, X, Z, Q);
                i[i.length - 1].symmetries.push(K);
              }
            var J = function (e) {
              var t,
                r = e.match("-"),
                n = (e = e.replace(/[-xyz]/g, "")).split("/");
              return (
                (t = void 0 === n[1] ? 1 : parseInt(n[1])),
                (("" === n[0] ? 1 : parseInt(n[0])) / t) * (r ? -1 : 1)
              );
            };
            if (void 0 !== b._symmetry_equiv_pos_as_xyz && !n)
              for (var ee = 0; ee < b._symmetry_equiv_pos_as_xyz.length; ee++) {
                var te = b._symmetry_equiv_pos_as_xyz[ee]
                  .replace(/["' ]/g, "")
                  .split(",")
                  .map(function (e) {
                    return e.replace(/-/g, "+-");
                  });
                let e = new $3Dmol.Matrix4(
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                for (let t = 0; t < 3; t++) {
                  var re = te[t].split("+");
                  for (let r = 0; r < re.length; r++) {
                    var ne = re[r];
                    if ("" !== ne) {
                      var ie = J(ne);
                      ne.match("x")
                        ? (e.elements[t + 0] = ie)
                        : ne.match("y")
                        ? (e.elements[t + 4] = ie)
                        : ne.match("z")
                        ? (e.elements[t + 8] = ie)
                        : (e.elements[t + 12] = ie);
                    }
                  }
                }
                var oe = k.getMatrix4(),
                  ae = new $3Dmol.Matrix4().getInverse(oe, !0);
                (e = new $3Dmol.Matrix4().multiplyMatrices(e, ae)),
                  (e = new $3Dmol.Matrix4().multiplyMatrices(oe, e)),
                  i[i.length - 1].symmetries.push(e);
              }
          }
          for (let e = 0; e < r.length; e++)
            a && o(r[e]),
              l(r[e]),
              c(i[e].symmetries, r[e], t, i[e].cryst),
              t.duplicateAssemblyAtoms &&
                !t.dontConnectDuplicatedAtoms &&
                a &&
                o(r[e]);
          return r;
        }),
      (e.mol2 = e.MOL2 =
        function (e, t) {
          var r = [[]],
            n = !1;
          void 0 !== t.keepH && (n = !t.keepH);
          var i = e.search(/@<TRIPOS>MOLECULE/),
            o = e.search(/@<TRIPOS>ATOM/);
          if (-1 == i || -1 == o) return r;
          for (
            var a = e.substr(i, e.length).split(/\r?\n|\r/);
            a.length > 0;

          ) {
            var s = [],
              l = a[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
              c = parseInt(l[0]),
              u = 0;
            l.length > 1 && (u = parseInt(l[1]));
            var d,
              h = 4;
            for (d = 3; d < a.length; d++)
              if ("@<TRIPOS>ATOM" == a[d]) {
                h = d + 1;
                break;
              }
            var p = r[r.length - 1].length,
              f = p + c;
            for (d = p; d < f; d++) {
              var m = {},
                g = (l = a[h++]
                  .replace(/^\s+/, "")
                  .replace(/\s+/g, " ")
                  .split(" "))[5].split(".")[0];
              if (
                ((m.atom = m.elem =
                  g[0].toUpperCase() + g.substr(1).toLowerCase()),
                "H" == m.elem && n)
              );
              else {
                var v = r[r.length - 1].length,
                  y = parseInt(l[0]);
                (m.serial = y),
                  (m.x = parseFloat(l[2])),
                  (m.y = parseFloat(l[3])),
                  (m.z = parseFloat(l[4])),
                  (m.atom = l[5]);
                var x = parseFloat(l[8]);
                (m.index = v),
                  (m.bonds = []),
                  (m.bondOrder = []),
                  (m.properties = { charge: x, partialCharge: x }),
                  (s[y] = v),
                  r[r.length - 1].push(m);
              }
            }
            for (var b = !1; h < a.length; )
              if ("@<TRIPOS>BOND" == a[h++]) {
                b = !0;
                break;
              }
            if (b && u)
              for (d = 0; d < u; d++) {
                l = a[h++].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
                var w = parseInt(l[1]),
                  D = r[r.length - 1][s[w]],
                  C = parseInt(l[2]),
                  S = r[r.length - 1][s[C]],
                  A = parseInt(l[3]);
                isNaN(A) && (A = 1),
                  void 0 !== D &&
                    void 0 !== S &&
                    (D.bonds.push(s[C]),
                    D.bondOrder.push(A),
                    S.bonds.push(s[w]),
                    S.bondOrder.push(A));
              }
            if (!t.multimodel) break;
            t.onemol || r.push([]), a.splice(0, h), (e = a.join("\n"));
          }
          return r;
        });
    var u = function (e, r) {
        var n = e.replace(/ /g, "");
        return (
          n.length > 0 &&
            "H" == n[0] &&
            "Hg" != n &&
            "He" != n &&
            "Hf" != n &&
            "Hs" != n &&
            "Ho" != n &&
            (n = "H"),
          n.length > 1 &&
            ((n = n[0].toUpperCase() + n.substr(1).toLowerCase()),
            void 0 === t[n]
              ? (n = n[0])
              : r && ("Ca" == n ? (n = "C") : "Cd" == n && (n = "C"))),
          n
        );
      },
      d = function (e, r, n) {
        var i,
          o,
          a = [],
          d = void 0 === r.assignBonds || r.assignBonds,
          h = !r.keepH,
          p = !!r.noSecondaryStructure,
          f = !r.noComputeSecondaryStructure,
          m = !r.doAssembly,
          g = r.altLoc ? r.altLoc : "A",
          v = { symmetries: [] },
          y = [],
          x = [],
          b = {};
        for (let r = 0; r < e.length; r++) {
          var w,
            D,
            C,
            S = (o = e[r].replace(/^\s*/, "")).substr(0, 6);
          if (0 == S.indexOf("END")) {
            if (((y = e.slice(r + 1)), "END" == S))
              for (var A in n) n.hasOwnProperty(A) && delete n[A];
            break;
          }
          if ("ATOM  " == S || "HETATM" == S) {
            var $, M, k, z, _, T, L, E, I, F, O, R;
            if (" " != (O = o.substr(16, 1)) && O != g && "*" != g) continue;
            if (
              ((F = parseInt(o.substr(6, 5))),
              (i = o.substr(12, 4).replace(/ /g, "")),
              ($ = o.substr(17, 3).replace(/ /g, "")),
              (M = o.substr(21, 1)),
              (k = parseInt(o.substr(22, 4))),
              (z = o.substr(26, 1)),
              (_ = parseFloat(o.substr(30, 8))),
              (T = parseFloat(o.substr(38, 8))),
              (L = parseFloat(o.substr(46, 8))),
              (R = parseFloat(o.substr(60, 8))),
              "H" ==
                (I =
                  "" === (I = o.substr(76, 2).replace(/ /g, "")) ||
                  void 0 === t[I]
                    ? u(o.substr(12, 2), "A" == o[0])
                    : I[0].toUpperCase() + I.substr(1).toLowerCase()) && h)
            )
              continue;
            (E = "H" == S[0]),
              (x[F] = a.length),
              a.push({
                resn: $,
                x: _,
                y: T,
                z: L,
                elem: I,
                hetflag: E,
                altLoc: O,
                chain: M,
                resi: k,
                icode: z,
                rescode: k + (" " != z ? "^" + z : ""),
                serial: F,
                atom: i,
                bonds: [],
                ss: "c",
                bondOrder: [],
                properties: {},
                b: R,
                pdbline: o,
              });
          } else if ("SHEET " == S) {
            !0,
              (w = o.substr(21, 1)),
              (D = parseInt(o.substr(22, 4))),
              o.substr(32, 1),
              (C = parseInt(o.substr(33, 4))),
              w in n || (n[w] = {}),
              (n[w][D] = "s1");
            for (var N = D + 1; N < C; N++) n[w][N] = "s";
            n[w][C] = "s2";
          } else if ("CONECT" == S) {
            var P = x[parseInt(o.substr(6, 5))],
              V = a[P],
              B = [11, 16, 21, 26];
            for (let e = 0; e < 4; e++) {
              var U = x[parseInt(o.substr(B[e], 5))],
                j = a[U];
              if (void 0 !== V && void 0 !== j)
                if (b[[P, U]]) {
                  b[[P, U]] += 1;
                  for (let e = 0; e < V.bonds.length; e++)
                    if (V.bonds[e] == U) {
                      var G = b[[P, U]];
                      V.bondOrder[e] = G >= 4 ? 1 : G;
                    }
                } else
                  (b[[P, U]] = 1),
                    (0 != V.bonds.length && V.bonds[V.bonds.length - 1] == U) ||
                      (V.bonds.push(U), V.bondOrder.push(1));
            }
          } else if ("HELIX " == S) {
            !0,
              (w = o.substr(19, 1)),
              (D = parseInt(o.substr(21, 4))),
              o.substr(31, 1),
              (C = parseInt(o.substr(33, 4))),
              w in n || (n[w] = {}),
              (n[w][D] = "h1");
            for (let e = D + 1; e < C; e++) n[w][e] = "h";
            n[w][C] = "h2";
          } else if (m || "REMARK" != S || "BIOMT" != o.substr(13, 5)) {
            if ("CRYST1" == S) {
              let e, t, r, n, i, a;
              (e = parseFloat(o.substr(7, 8))),
                (t = parseFloat(o.substr(16, 8))),
                (r = parseFloat(o.substr(25, 8))),
                (n = parseFloat(o.substr(34, 6))),
                (i = parseFloat(o.substr(41, 6))),
                (a = parseFloat(o.substr(48, 6))),
                (v.cryst = { a: e, b: t, c: r, alpha: n, beta: i, gamma: a });
            } else if ("ANISOU" == S) {
              var H = a[x[parseInt(o.substr(6, 5))]];
              if (H) {
                var q = o.substr(30).trim().split(/\s+/),
                  W = {
                    u11: parseInt(q[0]),
                    u22: parseInt(q[1]),
                    u33: parseInt(q[2]),
                    u12: parseInt(q[3]),
                    u13: parseInt(q[4]),
                    u23: parseInt(q[5]),
                  };
                H.uMat = W;
              }
            }
          } else {
            var Y,
              X = new $3Dmol.Matrix4();
            for (Y = 1; Y <= 3; Y++)
              if (
                ((o = e[r].replace(/^\s*/, "")), parseInt(o.substr(18, 1)) == Y)
              )
                (X.elements[Y - 1] = parseFloat(o.substr(23, 10))),
                  (X.elements[Y - 1 + 4] = parseFloat(o.substr(33, 10))),
                  (X.elements[Y - 1 + 8] = parseFloat(o.substr(43, 10))),
                  (X.elements[Y - 1 + 12] = parseFloat(o.substr(53))),
                  r++;
              else
                for (; "BIOMT" == o.substr(13, 5); )
                  o = e[++r].replace(/^\s*/, "");
            (X.elements[3] = 0),
              (X.elements[7] = 0),
              (X.elements[11] = 0),
              (X.elements[15] = 1),
              v.symmetries.push(X),
              r--;
          }
        }
        if (
          ((function (e, t) {
            for (var r = 0, n = e.length; r < n; r++)
              for (var i = e[r], o = 0; o < i.bonds.length; o++) {
                var a = e[i.bonds[o]],
                  s = t[i.serial];
                if (a && s)
                  a.bonds.indexOf(s) < 0 &&
                    (a.bonds.push(s), a.bondOrder.push(i.bondOrder[o]));
              }
          })(a, x),
          d && s(a),
          m || c(v.symmetries, a, r, v.cryst),
          f && !p && l(a),
          !(function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          })(n))
        )
          for (let e = 0; e < a.length; e++)
            if (void 0 !== (i = a[e]) && i.chain in n && i.resi in n[i.chain]) {
              var Z = n[i.chain][i.resi];
              (i.ss = Z[0]),
                Z.length > 1 &&
                  ("1" == Z[1]
                    ? (i.ssbegin = !0)
                    : "2" == Z[1] && (i.ssend = !0));
            }
        return [a, v, y];
      };
    (e.pdb =
      e.PDB =
      e.pdbqt =
      e.PDBQT =
        function (e, t) {
          t = t || {};
          var r = [],
            n = {};
          r.modelData = [];
          for (var i = e.split(/\r?\n|\r/); i.length > 0; ) {
            var o = d(i, t, n),
              a = o[0],
              s = o[1];
            if (((i = o[2]), 0 != a.length)) {
              if (t.multimodel && t.onemol && r.length > 0)
                for (var l = r[0].length, c = 0; c < a.length; c++) {
                  var u = a[c];
                  u.index = c;
                  for (var h = 0; h < u.bonds.length; h++) u.bonds[h] += l;
                  r[0].push(u);
                }
              else r.modelData.push(s), r.push(a);
              if (!t.multimodel) break;
            }
          }
          return r;
        }),
      (e.pqr = e.PQR =
        function (e, t) {
          var r = [[]],
            n = !t.noSecondaryStructure;
          r.modelData = [{ symmetries: [] }];
          var i,
            o = [],
            a = e.split(/\r?\n|\r/);
          for (let e = 0; e < a.length; e++) {
            var c = (i = a[e].replace(/^\s*/, "")).substr(0, 6);
            if (0 == c.indexOf("END")) {
              if (t.multimodel) {
                t.onemol || r.push([]);
                continue;
              }
              break;
            }
            if ("ATOM  " == c || "HETATM" == c) {
              var u;
              let e = parseInt(i.substr(6, 5)),
                t = i.substr(12, 4).replace(/ /g, ""),
                n = i.substr(17, 3).trim(),
                a = i.substr(21, 1),
                s = parseInt(i.substr(22, 4));
              var d = i.substr(30).trim().split(/\s+/),
                h = parseFloat(d[0]),
                p = parseFloat(d[1]),
                f = parseFloat(d[2]),
                m = parseFloat(d[3]),
                g = parseFloat(d[4]),
                v = t[0];
              t.length > 1 &&
                t[1].toUpperCase() != t[1] &&
                (v = t.substr(0, 2)),
                (u = "H" == i[0]),
                (o[e] = r[r.length - 1].length),
                r[r.length - 1].push({
                  resn: n,
                  x: h,
                  y: p,
                  z: f,
                  elem: v,
                  hetflag: u,
                  chain: a,
                  resi: s,
                  serial: e,
                  atom: t,
                  bonds: [],
                  ss: "c",
                  bondOrder: [],
                  properties: { charge: m, partialCharge: m, radius: g },
                  pdbline: i,
                });
            } else if ("CONECT" == c) {
              var y = parseInt(i.substr(6, 5)),
                x = r[r.length - 1][o[y]];
              for (let e = 0; e < 4; e++) {
                var b = parseInt(i.substr([11, 16, 21, 26][e], 5)),
                  w = r[r.length - 1][o[b]];
                void 0 !== x &&
                  void 0 !== w &&
                  (x.bonds.push(o[b]), x.bondOrder.push(1));
              }
            }
          }
          for (let e = 0; e < r.length; e++) s(r[e]), n && l(r[e]);
          return r;
        });
    var h = function (e) {
        return String.fromCharCode.apply(null, e).replace(/\0/g, "");
      },
      p = function (e) {
        return 0 == e || 2 == e || 4 == e ? "h" : 3 == e ? "s" : "c";
      };
    let f = new Set([
      "D-SACCHARIDE",
      "D-SACCHARIDE 1,4 AND 1,4 LINKING",
      "D-SACCHARIDE 1,4 AND 1,6 LINKING",
      "L-SACCHARIDE",
      "L-SACCHARIDE 1,4 AND 1,4 LINKING",
      "L-SACCHARIDE 1,4 AND 1,6 LINKING",
      "NON-POLYMER",
      "OTHER",
      "PEPTIDE-LIKE",
      "SACCHARIDE",
    ]);
    return (
      (e.mmtf = e.MMTF =
        function (e, t) {
          var r = !t.keepH,
            n = t.altLoc ? t.altLoc : "A",
            i = !!t.noSecondaryStructure,
            o = !t.noComputeSecondaryStructure,
            a = !t.doAssembly,
            s = t.assemblyIndex ? t.assemblyIndex : 0;
          "string" == typeof e && (e = $3Dmol.base64ToArray(e));
          var u,
            d,
            m,
            g,
            v,
            y,
            x = MMTF.decode(e),
            b = [[]],
            w = (b.modelData = []),
            D = 0,
            C = 0,
            S = 0,
            A = x.secStructList,
            $ = x.insCodeList,
            M = x.sequenceIndexList,
            k = x.bFactorList,
            z = x.altLocList,
            _ = x.occupancyList,
            T = x.bondAtomList,
            L = x.bondOrderList,
            E = x.numModels;
          if (0 == E) return b;
          t.multimodel || (E = 1);
          var I = [];
          if (!a && x.bioAssemblyList && x.bioAssemblyList.length > 0) {
            var F = x.bioAssemblyList[s].transformList;
            for (u = 0, y = F.length; u < y; u++) {
              var O = new $3Dmol.Matrix4(F[u].matrix);
              O.transpose(), I.push(O);
            }
          }
          var R = null;
          if (x.unitCell) {
            var N = x.unitCell;
            R = {
              a: N[0],
              b: N[1],
              c: N[2],
              alpha: N[3],
              beta: N[4],
              gamma: N[5],
            };
          }
          let P = [];
          x.entityList.forEach((e) => {
            e.chainIndexList.forEach((t) => {
              P[t] = "polymer" == e.type;
            });
          });
          var V = 0;
          for (v = 0; v < E; v++) {
            var B = x.chainsPerModel[v],
              U = b[b.length - 1],
              j = [];
            for (w.push({ symmetries: I, cryst: R }), u = 0; u < B; ++u) {
              var G = x.groupsPerChain[D],
                H = h(x.chainIdList.subarray(4 * D, 4 * D + 4));
              x.chainNameList &&
                (H = h(x.chainNameList.subarray(4 * D, 4 * D + 4)));
              var q = C,
                W = "";
              for (d = 0; d < G; ++d) {
                var Y = x.groupList[x.groupTypeList[C]],
                  X = Y.atomNameList.length,
                  Z = 0,
                  Q = !1,
                  K = !1;
                if (A) {
                  Z = A[C];
                  var J = p(Z);
                  (0 != C && J == W) || (Q = !0), (W = J);
                  var ee = C + 1;
                  (ee >= A.length || p(A[ee] != J)) && (K = !0);
                }
                x.insCodeList && String.fromCharCode($[C]);
                M && M[C];
                var te = x.groupIdList[C],
                  re = Y.groupName;
                let e = Y.chemCompType;
                var ne = S;
                let t = f.has(e) || !P[D];
                for (m = 0; m < X; ++m) {
                  var ie = Y.elementList[m];
                  if (r && "H" == ie) S += 1;
                  else {
                    var oe = "";
                    k && (oe = k[S]);
                    var ae = "";
                    z && z[S] && (ae = String.fromCharCode(z[S]));
                    var se = "";
                    if ((_ && (se = _[S]), "" == ae || ae == n || "*" == n)) {
                      var le = x.atomIdList[S],
                        ce = Y.atomNameList[m],
                        ue = 0;
                      Y.atomChargeList && (ue = Y.atomChargeList[m]);
                      var de = x.xCoordList[S],
                        he = x.yCoordList[S],
                        pe = x.zCoordList[S];
                      (j[S] = U.length),
                        U.push({
                          resn: re,
                          x: de,
                          y: he,
                          z: pe,
                          elem: ie,
                          hetflag: t,
                          chain: H,
                          resi: te,
                          icode: ae,
                          rescode: te + (" " != ae ? "^" + ae : ""),
                          serial: le,
                          altLoc: ae,
                          index: S,
                          atom: ce,
                          bonds: [],
                          ss: p(Z),
                          ssbegin: Q,
                          ssend: K,
                          bondOrder: [],
                          properties: { charge: ue, occupancy: se },
                          b: oe,
                        }),
                        (S += 1);
                    } else S += 1;
                  }
                }
                var fe = Y.bondAtomList;
                for (m = 0, g = Y.bondOrderList.length; m < g; ++m) {
                  var me = ne + fe[2 * m],
                    ge = ne + fe[2 * m + 1],
                    ve = Y.bondOrderList[m],
                    ye = j[me],
                    xe = j[ge],
                    be = U[ye],
                    we = U[xe];
                  be &&
                    we &&
                    (be.bonds.push(xe),
                    be.bondOrder.push(ve),
                    we.bonds.push(ye),
                    we.bondOrder.push(ve));
                }
                C += 1;
              }
              for (C = q, d = 0; d < G; ++d) C += 1;
              D += 1;
            }
            if (T)
              for (let e = V, t = T.length; e < t; e += 2) {
                let t = T[e],
                  r = T[e + 1],
                  n = L ? L[e / 2] : 1;
                if (t >= S) {
                  V = e;
                  break;
                }
                let i = j[t],
                  o = j[r],
                  a = U[i],
                  s = U[o];
                a &&
                  s &&
                  (a.bonds.push(o),
                  a.bondOrder.push(n),
                  s.bonds.push(i),
                  s.bondOrder.push(n));
              }
            t.multimodel && (t.onemol || b.push([])), 1;
          }
          if (!a)
            for (let e = 0; e < b.length; e++)
              c(w[e].symmetries, b[e], t, w[e].cryst);
          return o && !i && l(b), b;
        }),
      (e.prmtop = e.PRMTOP =
        function (e) {
          var t,
            r = [],
            n = 0,
            i = e.split(/\r?\n|\r/);
          if (!(i.length > 0 && i[0].includes("VERSION"))) return [];
          var o = i.filter(function (e) {
              return (
                e.includes("POINTERS") ||
                e.includes("ATOM_NAME") ||
                e.includes("CHARGE") ||
                e.includes("RADII") ||
                e.includes("BONDS_INC_HYDROGEN") ||
                e.includes("BONDS_WITHOUT_HYDROGEN")
              );
            }),
            a = u("POINTERS");
          if (-1 == a) return [];
          var s = d(a),
            l = parseInt(i[a + 1].slice(0, s[1]));
          if (isNaN(l) || l <= 0) return [];
          if (-1 == (a = u("ATOM_NAME"))) return [];
          var c = (s = d(a))[0];
          for (let e = 0; e < l / s[0]; e++) {
            e == parseInt(l / s[0]) && (c = l % s[0]);
            for (let e = 0; e < c; e++) {
              let t = {},
                o = { charge: "", radii: "" };
              (t.serial = n),
                (t.x = 0),
                (t.y = 0),
                (t.z = 0),
                (t.atom = i[a + 1].slice(s[1] * e, s[1] * (e + 1))),
                (t.elem = i[a + 1].slice(s[1] * e, s[1] * e + 1)),
                (t.properties = o),
                (t.bonds = []),
                (t.bondOrder = []),
                r.push(t),
                n++;
            }
            a++;
          }
          if (-1 != (a = u("CHARGE"))) {
            (n = 0), (c = (s = d(a))[0]);
            for (let e = 0; e < l / s[0]; e++) {
              e == parseInt(l / s[0]) && (c = l % s[0]);
              for (let e = 0; e < c; e++)
                (r[n].properties.charge = parseFloat(
                  i[a + 1].slice(s[1] * e, s[1] * (e + 1))
                )),
                  n++;
              a++;
            }
          }
          if (-1 != (a = u("RADII"))) {
            (n = 0), (c = (s = d(a))[0]);
            for (let e = 0; e < l / s[0]; e++) {
              e == parseInt(l / s[0]) && (c = l % s[0]);
              for (let e = 0; e < c; e++)
                (r[n].properties.radii = parseFloat(
                  i[a + 1].slice(s[1] * e, s[1] * (e + 1))
                )),
                  n++;
              a++;
            }
          }
          if (-1 != (a = u("BONDS_WITHOUT_HYDROGEN")))
            for (n = 0, c = (s = d(a))[0], a += 1; !i[a].match(/^%FLAG/); ) {
              i[a + 1].match(/^%FLAG/) && (c = l % s[0]);
              for (let e = 0; e < c; e++)
                n % 3 == 0
                  ? (t = parseInt(i[a].slice(s[1] * e, s[1] * (e + 1)) / 3))
                  : n % 3 == 1 &&
                    r[t].bonds.push(
                      parseInt(i[a].slice(s[1] * e, s[1] * (e + 1)) / 3)
                    ),
                  n++;
              a++;
            }
          if (-1 != (a = u("BONDS_INC_HYDROGEN")))
            for (n = 0, c = (s = d(a))[0], a += 1; !i[a].match(/^%FLAG/); ) {
              i[a + 1].match(/^%FLAG/) && (c = l % s[0]);
              for (let e = 0; e < c; e++)
                n % 3 == 0
                  ? (t = parseInt(i[a].slice(s[1] * e, s[1] * (e + 1)) / 3))
                  : n % 3 == 1 &&
                    r[t].bonds.push(
                      parseInt(i[a].slice(s[1] * e, s[1] * (e + 1)) / 3)
                    ),
                  n++;
              a++;
            }
          function u(e) {
            var t = i.indexOf(
              o.filter(function (t) {
                return t.includes(e);
              })[0]
            );
            if (Number.isInteger(t) && t > 0) {
              for (; !i[t].includes("FORMAT"); ) t++;
              return t;
            }
            return -1;
          }
          function d(e) {
            var t = i[e].match(/\((\d*)\S*/),
              r = i[e].match(/[a-zA-Z](\d*)\)\s*/);
            return (
              null == r && (r = i[e].match(/[a-zA-Z](\d*)\.\d*\)\s*/)),
              [t[1], r[1]]
            );
          }
          return [r];
        }),
      (e.gro = e.GRO =
        function (e) {
          for (
            var t = [], r = e.split(/\r?\n|\r/);
            r.length > 0 && !(r.length < 3);

          ) {
            var n = parseInt(r[1]);
            if (isNaN(n) || n <= 0) break;
            if (r.length < n + 3) break;
            var i = [];
            t.push(i);
            for (var o = 2, a = i.length, l = a + n, c = a; c < l; c++) {
              var d = r[o++],
                h = {};
              (h.serial = c),
                (h.atom = d.slice(10, 15).trim()),
                (h.elem = u(h.atom, !0)),
                (h.x = 10 * parseFloat(d.slice(20, 28))),
                (h.y = 10 * parseFloat(d.slice(28, 36))),
                (h.z = 10 * parseFloat(d.slice(36, 44))),
                (h.resi = parseInt(d.slice(0, 5))),
                (h.resn = d.slice(5, 10).trim()),
                (h.bonds = []),
                (h.bondOrder = []),
                (h.properties = {}),
                d.length > 44 &&
                  ((h.dx = 10 * parseFloat(d.slice(44, 52))),
                  (h.dy = 10 * parseFloat(d.slice(52, 60))),
                  (h.dz = 10 * parseFloat(d.slice(60, 68)))),
                (i[c] = h);
            }
            if (r.length <= o + 3) {
              var p = r[o++].trim().split(/\s+/);
              if (3 == p.length) {
                for (var f = 0; f < 3; f++) p[f] = 10 * parseFloat(p[f]);
                t.box = p;
              }
            }
            r.splice(0, ++o);
          }
          for (let e = 0; e < t.length; e++) s(t[e]);
          return t;
        }),
      (e.lammpstrj = e.LAMMPSTRJ =
        function (e, t) {
          for (
            var r = [],
              n = {
                id: "serial",
                type: "atom",
                element: "elem",
                q: "charge",
                radius: "radius",
                x: "x",
                xu: "x",
                xs: "x",
                xsu: "x",
                y: "y",
                yu: "y",
                ys: "y",
                ysu: "y",
                z: "z",
                zu: "z",
                zs: "z",
                zsu: "z",
              },
              i = e.split(/\r?\n|\r/),
              a = 0,
              s = 0,
              l = 0;
            l < i.length - 9;

          ) {
            for (var c = l; c < i.length; c++)
              if (
                (i[c].match(/ITEM: NUMBER OF ATOMS/) &&
                  (s = parseInt(i[c + 1])),
                i[c].match(/ITEM: ATOMS/))
              ) {
                a = c + 1;
                break;
              }
            var u = i[a - 1].replace("ITEM: ATOMS ", "").split(" ");
            r.push([]);
            for (let e = a; e < a + s; e++) {
              for (
                var d = {}, h = {}, p = i[e].split(" "), f = 0;
                f < p.length;
                f++
              ) {
                var m = n[u[f]];
                null != m &&
                  ("serial" == m
                    ? (d[m] = parseInt(p[f]))
                    : "x" == m || "y" == m || "z" === m
                    ? (d[m] = parseFloat(p[f]))
                    : "charge" == m || "radius" == m
                    ? (h[m] = parseFloat(p[f]))
                    : (d[m] = p[f])),
                  (d.properties = h),
                  (d.bonds = []),
                  (d.bondOrder = []);
              }
              r[r.length - 1][e - a] = d;
            }
            l = a + s - 1;
          }
          if (t.assignBonds) for (var g = 0; g < r.length; g++) o(r[g]);
          return r;
        }),
      e
    );
  })());
var $3Dmol = $3Dmol || {};
($3Dmol.partialCharges = {
  "ALA:N": -0.15,
  "ALA:CA": 0.1,
  "ALA:CB": 0,
  "ALA:C": 0.6,
  "ALA:O": -0.55,
  "ARG:N": -0.15,
  "ARG:CA": 0.1,
  "ARG:CB": 0,
  "ARG:CG": 0,
  "ARG:CD": 0.1,
  "ARG:NE": -0.1,
  "ARG:CZ": 0.5,
  "ARG:NH1": 0.25,
  "ARG:NH2": 0.25,
  "ARG:C": 0.6,
  "ARG:O": -0.55,
  "ASN:N": -0.15,
  "ASN:CA": 0.1,
  "ASN:CB": 0,
  "ASN:CG": 0.55,
  "ASN:OD1": -0.55,
  "ASN:ND2": 0,
  "ASN:C": 0.6,
  "ASN:O": -0.55,
  "ASP:N": -0.15,
  "ASP:CA": 0.1,
  "ASP:CB": 0,
  "ASP:CG": 0.14,
  "ASP:OD1": -0.57,
  "ASP:OD2": -0.57,
  "ASP:C": 0.6,
  "ASP:O": -0.55,
  "CYS:N": -0.15,
  "CYS:CA": 0.1,
  "CYS:CB": 0.19,
  "CYS:SG": -0.19,
  "CYS:C": 0.6,
  "CYS:O": -0.55,
  "GLN:N": -0.15,
  "GLN:CA": 0.1,
  "GLN:CB": 0,
  "GLN:CG": 0,
  "GLN:CD": 0.55,
  "GLN:OE1": -0.55,
  "GLN:NE2": 0,
  "GLN:C": 0.6,
  "GLN:O": -0.55,
  "GLU:N": -0.15,
  "GLU:CA": 0.1,
  "GLU:CB": 0,
  "GLU:CG": 0,
  "GLU:CD": 0.14,
  "GLU:OE1": -0.57,
  "GLU:OE2": -0.57,
  "GLU:C": 0.6,
  "GLU:O": -0.55,
  "GLY:N": -0.15,
  "GLY:CA": 0.1,
  "GLY:C": 0.6,
  "GLY:O": -0.55,
  "HIS:N": -0.15,
  "HIS:CA": 0.1,
  "HIS:CB": 0,
  "HIS:CG": 0.1,
  "HIS:ND1": -0.1,
  "HIS:CD2": 0.1,
  "HIS:NE2": -0.4,
  "HIS:CE1": 0.3,
  "HIS:C": 0.6,
  "HIS:O": -0.55,
  "ILE:N": -0.15,
  "ILE:CA": 0.1,
  "ILE:CB": 0,
  "ILE:CG2": 0,
  "ILE:CG1": 0,
  "ILE:CD": 0,
  "ILE:C": 0.6,
  "ILE:O": -0.55,
  "LEU:N": -0.15,
  "LEU:CA": 0.1,
  "LEU:CB": 0,
  "LEU:CG": 0,
  "LEU:CD1": 0,
  "LEU:CD2": 0,
  "LEU:C": 0.6,
  "LEU:O": -0.55,
  "LYS:N": -0.15,
  "LYS:CA": 0.1,
  "LYS:CB": 0,
  "LYS:CG": 0,
  "LYS:CD": 0,
  "LYS:CE": 0.25,
  "LYS:NZ": 0.75,
  "LYS:C": 0.6,
  "LYS:O": -0.55,
  "MET:N": -0.15,
  "MET:CA": 0.1,
  "MET:CB": 0,
  "MET:CG": 0.06,
  "MET:SD": -0.12,
  "MET:CE": 0.06,
  "MET:C": 0.6,
  "MET:O": -0.55,
  "PHE:N": -0.15,
  "PHE:CA": 0.1,
  "PHE:CB": 0,
  "PHE:CG": 0,
  "PHE:CD1": 0,
  "PHE:CD2": 0,
  "PHE:CE1": 0,
  "PHE:CE2": 0,
  "PHE:CZ": 0,
  "PHE:C": 0.6,
  "PHE:O": -0.55,
  "PRO:N": -0.25,
  "PRO:CD": 0.1,
  "PRO:CA": 0.1,
  "PRO:CB": 0,
  "PRO:CG": 0,
  "PRO:C": 0.6,
  "PRO:O": -0.55,
  "SER:N": -0.15,
  "SER:CA": 0.1,
  "SER:CB": 0.25,
  "SER:OG": -0.25,
  "SER:C": 0.6,
  "SER:O": -0.55,
  "THR:N": -0.15,
  "THR:CA": 0.1,
  "THR:CB": 0.25,
  "THR:OG1": -0.25,
  "THR:CG2": 0,
  "THR:C": 0.6,
  "THR:O": -0.55,
  "TRP:N": -0.15,
  "TRP:CA": 0.1,
  "TRP:CB": 0,
  "TRP:CG": -0.03,
  "TRP:CD2": 0.1,
  "TRP:CE2": -0.04,
  "TRP:CE3": -0.03,
  "TRP:CD1": 0.06,
  "TRP:NE1": -0.06,
  "TRP:CZ2": 0,
  "TRP:CZ3": 0,
  "TRP:CH2": 0,
  "TRP:C": 0.6,
  "TRP:O": -0.55,
  "TYR:N": -0.15,
  "TYR:CA": 0.1,
  "TYR:CB": 0,
  "TYR:CG": 0,
  "TYR:CD1": 0,
  "TYR:CE1": 0,
  "TYR:CD2": 0,
  "TYR:CE2": 0,
  "TYR:CZ": 0.25,
  "TYR:OH": -0.25,
  "TYR:C": 0.6,
  "TYR:O": -0.55,
  "VAL:N": -0.15,
  "VAL:CA": 0.1,
  "VAL:CB": 0,
  "VAL:CG1": 0,
  "VAL:CG2": 0,
  "VAL:C": 0.6,
  "VAL:O": -0.55,
}),
  ($3Dmol.applyPartialCharges = function (e, t) {
    if ((!t || void 0 === e.partialCharge) && e.resn && e.atom) {
      var r = e.resn + ":" + e.atom;
      e.properties.partialCharge = $3Dmol.partialCharges[r];
    }
  }),
  ($3Dmol.VolumeData = function (e, t, r) {
    if (
      ((this.unit = { x: 1, y: 1, z: 1 }),
      (this.origin = { x: 0, y: 0, z: 0 }),
      (this.size = { x: 0, y: 0, z: 0 }),
      (this.data = new Float32Array([])),
      (this.matrix = null),
      (t = t.toLowerCase()),
      /\.gz$/.test(t))
    ) {
      t = t.replace(/\.gz$/, "");
      try {
        this[t] && this[t].isbinary
          ? ("string" == typeof e && (e = $3Dmol.base64ToArray(e)),
            (e = pako.inflate(e)))
          : (e = new TextDecoder("utf-8").decode(pako.inflate(e)));
      } catch (e) {
        console.log(e);
      }
    }
    if (
      (this[t] &&
        (this[t].isbinary &&
          "string" == typeof e &&
          (e = $3Dmol.base64ToArray(e)),
        this[t](e)),
      r)
    ) {
      if (r.negate)
        for (let e = 0, t = this.data.length; e < t; e++)
          this.data[e] = -this.data[e];
      if (r.normalize) {
        var n = 0;
        for (let e = 0, t = this.data.length; e < t; e++) n += this.data[e];
        var i = n / this.data.length;
        console.log("computed mean: " + i), (n = 0);
        for (let e = 0, t = this.data.length; e < t; e++) {
          var o = this.data[e] - i;
          n += o * o;
        }
        var a = n / this.data.length;
        for (let e = 0, t = this.data.length; e < t; e++)
          this.data[e] = (this.data[e] - i) / a;
      }
    }
  }),
  ($3Dmol.VolumeData.prototype.getIndex = function (e, t, r) {
    if (this.matrix) {
      this.inversematrix ||
        (this.inversematrix = new $3Dmol.Matrix4().getInverse(this.matrix));
      var n = new $3Dmol.Vector3(e, t, r);
      (e = (n = n.applyMatrix4(this.inversematrix)).x), (t = n.y), (r = n.z);
    } else
      (e -= this.origin.x),
        (t -= this.origin.y),
        (r -= this.origin.z),
        (e /= this.unit.x),
        (t /= this.unit.y),
        (r /= this.unit.z);
    return (
      (e = Math.round(e)),
      (t = Math.round(t)),
      (r = Math.round(r)),
      e < 0 || e >= this.size.x
        ? -1
        : t < 0 || t >= this.size.y
        ? -1
        : r < 0 || r >= this.size.z
        ? -1
        : e * this.size.y * this.size.z + t * this.size.z + r
    );
  }),
  ($3Dmol.VolumeData.prototype.getVal = function (e, t, r) {
    let n = this.getIndex(e, t, r);
    return n < 0 ? 0 : this.data[n];
  }),
  ($3Dmol.VolumeData.prototype.getCoordinates = function (e) {
    var t = e / (this.size.y * this.size.z),
      r = e % (this.size.y * this.size.z),
      n = e % this.size.z;
    return (
      (t *= this.unit.x),
      (r *= this.unit.y),
      (n *= this.unit.z),
      {
        x: (t += this.origin.x),
        y: (r += this.origin.y),
        z: (n += this.origin.z),
      }
    );
  }),
  ($3Dmol.VolumeData.prototype.vasp = function (e) {
    var t = e.replace(/^\s+/, "").split(/[\n\r]/),
      r = $3Dmol.Parsers.vasp(e)[0].length;
    if (0 == r)
      return (
        console.log(
          "No good formating of CHG or CHGCAR file, not atomic information provided in the file."
        ),
        void (this.data = [])
      );
    var n,
      i = 1.889725992,
      o = parseFloat(t[1]);
    n = t[2].replace(/^\s+/, "").split(/\s+/);
    var a = new $3Dmol.Vector3(
      parseFloat(n[0]),
      parseFloat(n[1]),
      parseFloat(n[2])
    ).multiplyScalar(o * i);
    n = t[3].replace(/^\s+/, "").split(/\s+/);
    var s = new $3Dmol.Vector3(
      parseFloat(n[0]),
      parseFloat(n[1]),
      parseFloat(n[2])
    ).multiplyScalar(o * i);
    n = t[4].replace(/^\s+/, "").split(/\s+/);
    var l = new $3Dmol.Vector3(
        parseFloat(n[0]),
        parseFloat(n[1]),
        parseFloat(n[2])
      ).multiplyScalar(o * i),
      c =
        a.x * (s.y * l.z - l.y * s.z) -
        s.x * (a.y * l.z - l.y * a.z) +
        l.x * (a.y * s.z - s.y * a.z),
      u = 1 / (c = Math.abs(c) / Math.pow(i, 3));
    t.splice(0, 8 + r + 1);
    var d = t[0].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
      h = Math.abs(d[0]),
      p = Math.abs(d[1]),
      f = Math.abs(d[2]),
      m = (this.origin = new $3Dmol.Vector3(0, 0, 0));
    (this.size = { x: h, y: p, z: f }),
      (this.unit = new $3Dmol.Vector3(a.x, s.y, l.z)),
      (a = a.multiplyScalar(1 / (i * h))),
      (s = s.multiplyScalar(1 / (i * p))),
      (l = l.multiplyScalar(1 / (i * f))),
      (0 == a.y && 0 == a.z && 0 == s.x && 0 == s.z && 0 == l.x && 0 == l.y) ||
        ((this.matrix = new $3Dmol.Matrix4(
          a.x,
          s.x,
          l.x,
          0,
          a.y,
          s.y,
          l.y,
          0,
          a.z,
          s.z,
          l.z,
          0,
          0,
          0,
          0,
          1
        )),
        (this.matrix = this.matrix.multiplyMatrices(
          this.matrix,
          new $3Dmol.Matrix4().makeTranslation(m.x, m.y, m.z)
        )),
        (this.origin = new $3Dmol.Vector3(0, 0, 0)),
        (this.unit = new $3Dmol.Vector3(1, 1, 1))),
      t.splice(0, 1);
    var g = t.join(" ");
    (g = (g = g.replace(/^\s+/, "")).split(/[\s\r]+/)).splice(h * p * f + 1);
    for (var v = new Float32Array(g), y = 0; y < v.length; y++)
      v[y] = v[y] * u * 0.036749309;
    this.data = v;
  }),
  ($3Dmol.VolumeData.prototype.dx = function (e) {
    var t,
      r,
      n = e.split(/[\n\r]+/),
      i = /gridpositions\s+counts\s+(\d+)\s+(\d+)\s+(\d+)/,
      o = /^origin\s+(\S+)\s+(\S+)\s+(\S+)/,
      a = /^delta\s+(\S+)\s+(\S+)\s+(\S+)/,
      s = /data follows/;
    for (t = 0; t < n.length; t++) {
      var l = n[t];
      if ((r = i.exec(l))) {
        var c = parseInt(r[1]),
          u = parseInt(r[2]),
          d = parseInt(r[3]);
        this.size = { x: c, y: u, z: d };
      } else if ((r = a.exec(l))) {
        var h = parseFloat(r[1]);
        if (
          ((0 == parseFloat(r[2]) && 0 == parseFloat(r[3])) ||
            console.log(
              "Non-orthogonal delta matrix not currently supported in dx format"
            ),
          (l = n[(t += 1)]),
          null == (r = a.exec(l)))
        )
          return void console.log("Parse error in dx delta matrix");
        var p = parseFloat(r[2]);
        if (
          ((0 == parseFloat(r[1]) && 0 == parseFloat(r[3])) ||
            console.log(
              "Non-orthogonal delta matrix not currently supported in dx format"
            ),
          (l = n[(t += 1)]),
          null == (r = a.exec(l)))
        )
          return void console.log("Parse error in dx delta matrix");
        var f = parseFloat(r[3]);
        (0 == parseFloat(r[1]) && 0 == parseFloat(r[2])) ||
          console.log(
            "Non-orthogonal delta matrix not currently supported in dx format"
          ),
          (this.unit = new $3Dmol.Vector3(h, p, f));
      } else if ((r = o.exec(l))) {
        var m = parseFloat(r[1]),
          g = parseFloat(r[2]),
          v = parseFloat(r[3]);
        this.origin = new $3Dmol.Vector3(m, g, v);
      } else if ((r = s.exec(l))) break;
    }
    if (((t += 1), this.size && this.origin && this.unit && this.size)) {
      var y = n.splice(t).join(" ");
      (y = y.split(/[\s\r]+/)), (this.data = new Float32Array(y));
    } else console.log("Error parsing dx format");
  }),
  ($3Dmol.VolumeData.prototype.cube = function (e) {
    var t = e.split(/\r?\n/);
    if (!(t.length < 6)) {
      var r = $3Dmol.Parsers.cube(e).modelData[0].cryst,
        n = t[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
        i = parseFloat(n[0]),
        o = Math.abs(i);
      (this.origin = r.origin),
        (this.size = r.size),
        (this.unit = r.unit),
        (this.matrix = r.matrix4);
      var a = 6;
      i < 0 && a++;
      var s = t.splice(o + a).join(" ");
      (s = (s = s.replace(/^\s+/, "")).split(/[\s\r]+/)),
        (this.data = new Float32Array(s));
    }
  }),
  ($3Dmol.VolumeData.prototype.ccp4 = function (e) {
    var t = {};
    e = new Int8Array(e);
    var r = new Int32Array(e.buffer, 0, 56),
      n = new Float32Array(e.buffer, 0, 56),
      i = new DataView(e.buffer);
    if (
      ((t.MAP = String.fromCharCode(
        i.getUint8(208),
        i.getUint8(209),
        i.getUint8(210),
        i.getUint8(211)
      )),
      (t.MACHST = [i.getUint8(212), i.getUint8(213)]),
      17 === t.MACHST[0] && 17 === t.MACHST[1])
    )
      for (var o = e.byteLength, a = 0; a < o; a += 4)
        i.setFloat32(a, i.getFloat32(a), !0);
    (t.NX = r[0]),
      (t.NY = r[1]),
      (t.NZ = r[2]),
      (t.MODE = r[3]),
      (t.NXSTART = r[4]),
      (t.NYSTART = r[5]),
      (t.NZSTART = r[6]),
      (t.MX = r[7]),
      (t.MY = r[8]),
      (t.MZ = r[9]),
      (t.xlen = n[10]),
      (t.ylen = n[11]),
      (t.zlen = n[12]),
      (t.alpha = n[13]),
      (t.beta = n[14]),
      (t.gamma = n[15]),
      (t.MAPC = r[16]),
      (t.MAPR = r[17]),
      (t.MAPS = r[18]),
      (t.DMIN = n[19]),
      (t.DMAX = n[20]),
      (t.DMEAN = n[21]),
      (t.ISPG = r[22]),
      (t.NSYMBT = r[23]),
      (t.LSKFLG = r[24]),
      (t.originX = n[49]),
      (t.originY = n[50]),
      (t.originZ = n[51]),
      (t.ARMS = n[54]);
    var s = t,
      l = [s.xlen, 0, 0],
      c = [
        s.ylen * Math.cos((Math.PI / 180) * s.gamma),
        s.ylen * Math.sin((Math.PI / 180) * s.gamma),
        0,
      ],
      u = [
        s.zlen * Math.cos((Math.PI / 180) * s.beta),
        (s.zlen *
          (Math.cos((Math.PI / 180) * s.alpha) -
            Math.cos((Math.PI / 180) * s.gamma) *
              Math.cos((Math.PI / 180) * s.beta))) /
          Math.sin((Math.PI / 180) * s.gamma),
        0,
      ];
    u[2] = Math.sqrt(
      s.zlen *
        s.zlen *
        Math.sin((Math.PI / 180) * s.beta) *
        Math.sin((Math.PI / 180) * s.beta) -
        u[1] * u[1]
    );
    var d = [0, l, c, u],
      h = [0, s.MX, s.MY, s.MZ],
      p = [0, s.MAPC, s.MAPR, s.MAPS];
    (this.matrix = new $3Dmol.Matrix4()),
      this.matrix.set(
        d[p[1]][0] / h[p[1]],
        d[p[2]][0] / h[p[2]],
        d[p[3]][0] / h[p[3]],
        0,
        d[p[1]][1] / h[p[1]],
        d[p[2]][1] / h[p[2]],
        d[p[3]][1] / h[p[3]],
        0,
        d[p[1]][2] / h[p[1]],
        d[p[2]][2] / h[p[2]],
        d[p[3]][2] / h[p[3]],
        0,
        0,
        0,
        0,
        1
      ),
      (this.matrix = this.matrix.multiplyMatrices(
        this.matrix,
        new $3Dmol.Matrix4().makeTranslation(
          s.NXSTART + s.originX,
          s.NYSTART + s.originY,
          s.NZSTART + s.originZ
        )
      )),
      (this.origin = new $3Dmol.Vector3(0, 0, 0)),
      (this.unit = new $3Dmol.Vector3(1, 1, 1)),
      (this.size = { x: t.NX, y: t.NY, z: t.NZ }),
      (this.dimensionorder = [t.MAPC, t.MAPR, t.MAPS]);
    var f = new Float32Array(e.buffer, 1024 + t.NSYMBT),
      m = t.NX,
      g = t.NY,
      v = t.NZ;
    this.data = new Float32Array(m * g * v);
    for (let e = 0; e < m; e++)
      for (let t = 0; t < g; t++)
        for (let r = 0; r < v; r++)
          this.data[(e * g + t) * v + r] = f[(r * g + t) * m + e];
  }),
  ($3Dmol.VolumeData.prototype.ccp4.isbinary = !0),
  ($3Dmol.GLVolumetricRender = (function () {
    function e(e, t) {
      function r(e, t, r) {
        return e + (t - e) * r;
      }
      var n = [],
        i = (e.length - 1) / (t - 1);
      n[0] = e[0];
      for (var o = 1; o < t - 1; o++) {
        var a = o * i,
          s = Math.floor(a).toFixed(),
          l = Math.ceil(a).toFixed(),
          c = a - s;
        n[o] = r(e[s], e[l], c);
      }
      return (n[t - 1] = e[e.length - 1]), n;
    }
    function t(t, r) {
      r = r || {};
      var n = Object.assign([], r.transferfn),
        i = null,
        o = null,
        a = r.subsamples || 5;
      var s = [];
      n.forEach(function (e) {
        e.value = parseFloat(e.value);
      }),
        n.sort(function (e, t) {
          return e.value - t.value;
        });
      let l = n[0].value;
      0 == n.length && n.push(n[0]);
      let c = n[n.length - 1].value;
      var u, d, h, p, f, m, g, v, y, x, b, w, D, C;
      for (let t = 0; t < n.length - 1; t++)
        if (
          ((h = $3Dmol.CC.color(n[t].color)),
          (p = $3Dmol.CC.color(n[t + 1].color)),
          (y = n[t].opacity),
          (x = n[t + 1].opacity),
          (u = Math.floor((256 * (n[t].value - l)) / (c - l))) !=
            (d = Math.floor((256 * (n[t + 1].value - l)) / (c - l))))
        ) {
          (f = e([255 * h.r, 255 * p.r], d - u)),
            (m = e([255 * h.g, 255 * p.g], d - u)),
            (g = e([255 * h.b, 255 * p.b], d - u)),
            (v = e([255 * y, 255 * x], d - u));
          for (let e = 0; e < f.length; e++)
            s.push(f[e]), s.push(m[e]), s.push(g[e]), s.push(v[e]);
        }
      if (((s = new Uint8ClampedArray(s)), t.matrix)) {
        let e = new $3Dmol.Vector3(0, 0, 0),
          r = new $3Dmol.Vector3(t.size.x, t.size.y, t.size.z),
          n = new $3Dmol.Vector3(1, 1, 1);
        e.applyMatrix4(t.matrix),
          r.applyMatrix4(t.matrix),
          n.applyMatrix4(t.matrix).sub(e),
          (w = [
            [e.x, e.y, e.z],
            [r.x, r.y, r.z],
          ]);
        for (let e = 1; e < 7; e++)
          (r.x = 1 & e ? t.size.x : 0),
            (r.y = 2 & e ? t.size.y : 0),
            (r.z = 4 & e ? t.size.z : 0),
            r.applyMatrix4(t.matrix),
            (w[0][0] = Math.min(w[0][0], r.x)),
            (w[0][1] = Math.min(w[0][1], r.y)),
            (w[0][2] = Math.min(w[0][2], r.z)),
            (w[1][0] = Math.max(w[1][0], r.x)),
            (w[1][1] = Math.max(w[1][1], r.y)),
            (w[1][2] = Math.max(w[1][2], r.z));
        let i = r.x - e.x,
          o = r.y - e.y,
          a = r.z - e.z;
        (D = Math.sqrt(i * i + o * o + a * a)),
          (C = Math.min(Math.min(n.x, n.y), n.z)),
          (b = (b = (b = new $3Dmol.Matrix4()
            .identity()
            .scale({ x: t.size.x, y: t.size.y, z: t.size.z })).multiplyMatrices(
            t.matrix,
            b
          )).getInverse(b));
      } else {
        b = new $3Dmol.Matrix4().identity();
        let e = t.unit.x * t.size.x,
          r = t.unit.y * t.size.y,
          n = t.unit.z * t.size.z;
        b.makeTranslation(-t.origin.x / e, -t.origin.y / r, -t.origin.z / n),
          b.scale({ x: 1 / e, y: 1 / r, z: 1 / n }),
          (C = Math.min(Math.min(t.unit.x, t.unit.y), t.unit.z)),
          (w = [
            [t.origin.x, t.origin.y, t.origin.z],
            [t.origin.x + e, t.origin.y + r, t.origin.z + n],
          ]),
          (D = Math.sqrt(e * e + r * r + n * n));
      }
      var S = new $3Dmol.GLShape();
      S.addBox({
        corner: { x: w[0][0], y: w[0][1], z: w[0][2] },
        dimensions: {
          w: w[1][0] - w[0][0],
          h: w[1][1] - w[0][1],
          d: w[1][2] - w[0][2],
        },
      });
      var A = S.finalize();
      if (
        ((this.boundingSphere = new $3Dmol.Sphere()),
        (this.boundingSphere.center = {
          x: (w[0][0] + w[1][0]) / 2,
          y: (w[0][1] + w[1][1]) / 2,
          z: (w[0][2] + w[1][2]) / 2,
        }),
        (this.boundingSphere.radius = D / 2),
        void 0 !== r.coords && void 0 !== r.seldist)
      ) {
        let e = new Uint8Array(t.data.length),
          n = r.seldist,
          i = n * n;
        for (let o = 0, a = r.coords.length; o < a; o++) {
          let a = r.coords[o],
            s = a.x - n,
            l = a.y - n,
            c = a.z - n,
            u = a.x + n,
            d = a.y + n,
            h = a.z + n;
          if (t.getIndex(s, l, c) >= 0 || t.getIndex(u, d, h) >= 0)
            for (let r = s; r < u; r += C)
              for (let n = l; n < d; n += C)
                for (let o = c; o < h; o += C) {
                  let s = t.getIndex(r, n, o);
                  if (s >= 0 && !e[s]) {
                    (r - a.x) * (r - a.x) +
                      (n - a.y) * (n - a.y) +
                      (o - a.z) * (o - a.z) <
                      i && (e[s] = 1);
                  }
                }
        }
        for (let r = 0, n = t.data.length; r < n; r++)
          0 == e[r] && (t.data[r] = 1 / 0);
      }
      (this.globj = function (e) {
        if ((o && (e.remove(o), (o = null)), !this.hidden)) {
          i = new $3Dmol.Object3D();
          var r,
            n = new $3Dmol.Texture(t, !0),
            u = new $3Dmol.Texture(s, !1);
          (n.needsUpdate = !0),
            (u.needsUpdate = !0),
            (u.flipY = !1),
            (r = new $3Dmol.VolumetricMaterial({
              transferfn: u,
              transfermin: l,
              transfermax: c,
              map: n,
              extent: w,
              maxdepth: D,
              texmatrix: b,
              unit: C,
              subsamples: a,
            }));
          var d = new $3Dmol.Mesh(A, r);
          i.add(d), (o = i.clone()), e.add(o);
        }
      }),
        (this.removegl = function (e) {
          o &&
            (void 0 !== o.geometry && o.geometry.dispose(),
            void 0 !== o.material && o.material.dispose(),
            e.remove(o),
            (o = null)),
            (i = null);
        });
    }
    return (
      Object.defineProperty(t.prototype, "position", {
        get: function () {
          return this.boundingSphere.center;
        },
      }),
      Object.defineProperty(t.prototype, "x", {
        get: function () {
          return this.boundingSphere.center.x;
        },
      }),
      Object.defineProperty(t.prototype, "y", {
        get: function () {
          return this.boundingSphere.center.y;
        },
      }),
      Object.defineProperty(t.prototype, "z", {
        get: function () {
          return this.boundingSphere.center.z;
        },
      }),
      t
    );
  })()),
  ($3Dmol.workerString = function () {
    self.onmessage = function (e) {
      var t = e.data,
        r = t.type;
      if (r < 0)
        (self.atomData = t.atoms),
          (self.volume = t.volume),
          (self.ps = new ProteinSurface());
      else {
        var n = self.ps;
        n.initparm(t.expandedExtent, 1 != r, self.volume),
          n.fillvoxels(self.atomData, t.extendedAtoms),
          n.buildboundary(),
          (4 !== r && 2 !== r) ||
            (n.fastdistancemap(),
            n.boundingatom(!1),
            n.fillvoxelswaals(self.atomData, t.extendedAtoms)),
          n.marchingcube(r);
        var i = n.getFacesAndVertices(t.atomsToShow);
        self.postMessage(i);
      }
    };
  }
    .toString()
    .replace(/(^.*?\{|\}$)/g, "")),
  ($3Dmol.workerString +=
    "; var ProteinSurface=" +
    $3Dmol.ProteinSurface.toString().replace(
      /[a-zA-Z_$]{1}[0-9a-zA-Z_$]*.MarchingCube./g,
      "MarchingCube."
    )),
  ($3Dmol.workerString +=
    ",MarchingCube=(" + $3Dmol.MarchingCubeInitializer.toString() + ")();"),
  ($3Dmol.SurfaceWorker = window.URL
    ? window.URL.createObjectURL(
        new Blob([$3Dmol.workerString], { type: "text/javascript" })
      )
    : { postMessage: function () {} }),
  ($3Dmol.workerString = $3Dmol.workerString),
  ($3Dmol.SurfaceWorker = $3Dmol.SurfaceWorker),
  ($3Dmol.UI = function (e, t, r) {
    t = t || {};
    var n = new $3Dmol.UI.Icons(),
      i = ($("body"), $(r[0])),
      o = t.height;
    function a() {
      var t = (this.ui = $("<div></div>"));
      t.css({ position: "relative", "min-width": "150px" });
      var r = new m(n.molecule, 20, { tooltip: "Toggle Model Selection Bar" });
      t.append(r.ui), r.ui.css({ display: "inline-block", top: "3px" });
      var i = {
          urlType: { active: !0, value: null, key: "Model type" },
          url: { active: !0, value: null, key: "Url" },
        },
        o = $("<div></div>");
      o.css({
        display: "inline-block",
        background: "#e4e4e4",
        padding: "2px",
        "border-radius": "3px",
      }),
        t.append(o);
      var a = $("<div></div>");
      a.css({});
      var s = $("<div></div>");
      s.css({
        display: "inline-block",
        "font-family": "Arial",
        "font-size": "12px",
        "font-weight": "bold",
      }),
        a.append(s);
      var l = new m(n.change, 16, {
        tooltip: "Change Model",
        backgroundColor: "white",
        bfr: 0.5,
      });
      l.ui.css({ display: "inline-block", "margin-left": "4px" }),
        a.append(l.ui),
        a.hide(),
        o.append(a);
      var c = $("<div></div>");
      o.append(c);
      var u = "pdb,mmtf,cid".split(","),
        d = (this.list = new $3Dmol.UI.Form.ListInput(i.urlType, u));
      (d.showAlertBox = !1),
        d.ui.css({ display: "inline-block" }),
        c.append(d.ui);
      var h = (this.url = new $3Dmol.UI.Form.Input(i.url));
      c.append(h.ui), h.ui.css({ display: "inline-block", width: "125px" });
      var p = new m(n.tick, 16, {
        bfr: 0.5,
        backgroundColor: "lightgreen",
        tooltip: "Add Model",
      });
      p.ui.css({ margin: "0px" }),
        c.append(p.ui),
        (this.updateInputLength = function () {}),
        r.ui.on("click", () => {
          o.toggle();
        }),
        p.ui.on("click", function () {
          var t = d.validate();
          h.validate() && t && e.addModel(i);
        }),
        (this.setModel = function (e) {
          s.text(e), a.show(), c.hide();
        }),
        l.ui.on("click", function () {
          a.hide(), c.show(), h.setValue("");
        }),
        t.on("keypress", function (e) {
          ("Enter" != e.key && "Return" != e.key) || p.ui.trigger("click");
        });
    }
    function s(t, r = "left") {
      var i = (this.ui = $("<div></div>"));
      _editingForm = !1;
      var a = [],
        s = $("<div></div>"),
        u = $("<div></div>");
      s.css("opacity", "0.9");
      var d = $("<div></div>"),
        h = $("<div></div>"),
        p = new m(n.plus, 20, { tooltip: "Add New Selection" });
      p.ui.css("margin", "0px");
      var f = new m(t, 20, { tooltip: "Toggle Selection Menu" });
      (this.selectionObjects = []),
        i.append(f.ui),
        i.append(d),
        i.css("position", "absolute"),
        u.append(s),
        d.append(u),
        h.append(p.ui);
      var g = new c();
      d.append(g.ui),
        d.append(h),
        g.ui.css("width", 162),
        "left" == r
          ? i.css("text-align", "left")
          : i.css("text-align", "right"),
        d.css("box-sizing", "border-box"),
        d.css("padding", "3px"),
        u.css("max-height", 0.8 * o),
        u.css("overflow-y", "auto"),
        u.css("overflow-x", "visible"),
        s.css("box-sizing", "content-box"),
        (this.updateScrollBox = function (e) {
          u.css("max-height", 0.8 * e);
        });
      var v = !0;
      function y() {
        var t = (this.ui = $("<div></div>")),
          r = (this.id = null);
        a.push(this),
          t.css({
            background: "#e8e8e8",
            padding: "4px 4px 2px 4px",
            "border-radius": "6px",
            "margin-bottom": "3px",
            position: "relative",
            width: "156px",
          });
        var i = $("<div></div>");
        t.append(i);
        var o = $("<div></div>"),
          s = $("<div></div>");
        i.append(o, s),
          o.css({
            "font-family": "Arial",
            "font-weight": "bold",
            "font-size": "12px",
            display: "inline-block",
            width: "60px",
          }),
          s.css({ display: "inline-block" }),
          i.hide(),
          (s.editMode = !1);
        var u = new m(n.minus, 16, {
            bfr: 0.5,
            backgroundColor: "#f06f6f",
            tooltip: "Remove Selection",
          }),
          d = new m(n.pencil, 16, { tooltip: "Edit Selection" }),
          h = new m(n.visible, 16, { tooltip: "Show / Hide Selection" });
        s.append(u.ui), s.append(d.ui), s.append(h.ui);
        var p = $("<div></div>");
        t.append(p);
        var f = $("<div></div>");
        u.ui.on("click", function () {
          e.removeSelection(r), t.detach();
        }),
          d.ui.on("click", function () {
            p.toggle();
          });
        var g = !1;
        h.ui.on("click", () => {
          e.toggleHide(r),
            g
              ? ((g = !1), h.setSVG(n.visible))
              : ((g = !0), h.setSVG(n.invisible));
        });
        var v = new l();
        f.append(v.ui),
          v.ui.css({ position: "static", width: "px", "border-radius": "4px" }),
          v.ui.hide();
        var y = (this.allSelector = {
            key: "Select All Atom",
            value: null,
            active: !0,
          }),
          x = new $3Dmol.UI.Form.Checkbox(y);
        p.append(x.ui);
        var b = (this.selectionValue = {
            key: "Selection Spec",
            value: null,
            active: !0,
          }),
          w = new $3Dmol.UI.Form($3Dmol.GLModel.validAtomSelectionSpecs, b);
        p.append(w.ui);
        var D = $("<div></div>"),
          C = new m(n.tick, 16, {
            backgroundColor: "lightgreen",
            tooltip: "Submit",
          }),
          S = new m(n.cross, 16, {
            backgroundColor: "lightcoral",
            tooltip: "Cancel",
          });
        D.append(C.ui, S.ui);
        var A = new c();
        function M(e) {
          i.show(),
            (s.editMode = !0),
            (r = this.id = e),
            o.text("Sel#" + e),
            t.attr("data-id", e),
            p.hide(),
            v.setSid(e),
            v.ui.show();
        }
        function k(t = null) {
          if (w.validate()) {
            w.getValue();
            var r = e.checkAtoms(b.value);
            0 == Object.keys(b.value).length
              ? A.error("Please enter some input")
              : r
              ? (M(e.addSelection(b.value, t)),
                null == t && (_editingForm = !1))
              : A.error("No atom selected");
          } else A.error("Invalid Input");
        }
        p.append(A.ui),
          p.append(D),
          t.append(f),
          (x.update = function () {
            w.ui.toggle();
          }),
          C.ui.on("click", () => {
            if (0 == s.editMode)
              y.value
                ? (M((t = e.addSelection({}))), (_editingForm = !1))
                : k();
            else if (y.value) {
              var t = r;
              e.addSelection({}, t), M(t);
            } else k((t = r));
          });
        var z = this;
        S.ui.on("click", () => {
          s.editMode
            ? p.hide()
            : (t.detach(),
              (function (e) {
                a.find((t) => {
                  if (e == t) return console.log("Selection found", e), !0;
                });
              })(z),
              (_editingForm = !1));
        }),
          t.on("keyup", (e) => {
            "Enter" == e.key && C.ui.trigger("click");
          }),
          (this.setProperty = function (e, t) {
            0 == Object.keys(t).length ? x.setValue(!0) : w.setValue(t), M(e);
          }),
          (this.addStyle = function (e, t, r) {
            v.addStyle(e, t, r);
          });
      }
      d.hide(),
        f.ui.click(function () {
          v ? d.show(100) : d.hide(100), (v = !v);
        }),
        p.ui.on("click", () => {
          if (_editingForm) g.warning("Please complete the previous form");
          else {
            var e = new y();
            s.append(e.ui), (_editingForm = !0);
          }
        }),
        (this.empty = function () {
          s.empty(), (_editingForm = !1);
        }),
        (this.editSelection = function (e, t, r, n) {
          0 != s.children("[data-id=" + e + "]").length ||
            ((selection = new y()),
            selection.setProperty(e, t),
            s.append(selection.ui)),
            null != r && selection.addStyle(e, r, n);
        });
    }
    function l(t, r = "left") {
      var i = (this.ui = $("<div></div>"));
      _editingForm = !1;
      var o = (this.sid = t);
      this.setSid = function (e) {
        o = this.sid = e;
      };
      var a = $("<div></div>"),
        s = $("<div></div>");
      a.css("opacity", "0.9");
      var l = $("<div></div>"),
        u = $("<div></div>");
      u.css("text-align", "center");
      var d = new m(n.plus, 20, { tooltip: "Add New Style" });
      d.ui.css("margin", "0px"),
        (this.selectionObjects = []),
        i.append(l),
        i.css("position", "absolute"),
        s.append(a),
        l.append(s);
      var h = new c();
      function p(t) {
        var r = (this.ui = $("<div></div>")),
          i = (this.id = null);
        r.css({
          background: "#e8e8e8",
          padding: "4px 4px 2px 4px",
          "border-radius": "6px",
          "margin-bottom": "3px",
          position: "relative",
        });
        var o = $("<div></div>");
        r.append(o);
        var a = $("<div></div>"),
          s = $("<div></div>");
        o.append(a, s),
          a.css({
            "font-family": "Arial",
            "font-weight": "bold",
            "font-size": "12px",
            display: "inline-block",
            width: "60px",
          }),
          s.css({ display: "inline-block" }),
          o.hide(),
          (s.editMode = !1);
        var l = new m(n.minus, 16, {
            bfr: 0.5,
            backgroundColor: "#f06f6f",
            tooltip: "Remove Style",
          }),
          u = new m(n.pencil, 16, { tooltip: "Edit Style" }),
          d = new m(n.visible, 16, { tooltip: "Show / Hide Style" });
        s.append(l.ui), s.append(u.ui), s.append(d.ui);
        var h = $("<div></div>");
        r.append(h),
          l.ui.on("click", { parent: this, stid: i }, function (n) {
            e.removeStyle(t, i), r.detach();
          }),
          u.ui.on("click", function () {
            h.toggle();
          });
        var p = !1;
        d.ui.on("click", () => {
          e.toggleHideStyle(t, i),
            p
              ? ((p = !1), d.setSVG(n.visible))
              : ((p = !0), d.setSVG(n.invisible));
        });
        var f = (this.selectionValue = {
            key: "Style Spec",
            value: null,
            active: !0,
          }),
          g = new $3Dmol.UI.Form($3Dmol.GLModel.validAtomStyleSpecs, f);
        h.append(g.ui);
        var v = $("<div></div>"),
          y = new m(n.tick, 16, {
            backgroundColor: "lightgreen",
            tooltip: "Submit",
          }),
          x = new m(n.cross, 16, {
            backgroundColor: "lightcoral",
            tooltip: "Cancel",
          });
        v.append(y.ui, x.ui);
        var b = new c();
        function w(e) {
          o.show(), (s.editMode = !0), (i = e), a.text("Sty#" + e), h.hide();
        }
        function D(r = null) {
          g.validate()
            ? (g.getValue(),
              0 == Object.keys(f.value).length
                ? b.error("Please enter some value")
                : (w(e.addStyle(f.value, t, r)),
                  null == r && (_editingForm = !1)))
            : b.error("Invalid Input");
        }
        h.append(b.ui),
          h.append(v),
          y.ui.on("click", () => {
            if (0 == s.editMode) D();
            else {
              var e = i;
              g.getValue(),
                0 == Object.keys(f.value).length
                  ? b.error("Please enter some value")
                  : D(e);
            }
          }),
          x.ui.on("click", () => {
            s.editMode ? h.hide() : r.detach();
          }),
          r.on("keyup", (e) => {
            "Enter" == e.key && y.ui.trigger("click");
          }),
          (this.updateStyle = function (e, t) {
            g.setValue(t), w(e);
          });
      }
      l.append(h.ui),
        u.append(d.ui),
        l.append(u),
        "left" == r
          ? i.css("text-align", "left")
          : i.css("text-align", "right"),
        l.css("box-sizing", "border-box"),
        l.css("padding", "3px"),
        l.css("background-color", "#a4a4a4"),
        l.css("border-radius", "4px"),
        s.css("overflow", "hidden"),
        a.css("box-sizing", "content-box"),
        d.ui.on("click", () => {
          if (_editingForm)
            h.warning("Please complete editing the current form");
          else {
            var e = new p(o);
            a.append(e.ui), (_editingForm = !0);
          }
        }),
        (this.addStyle = function (e, t, r) {
          var n = new p(e);
          a.append(n.ui), n.updateStyle(t, r);
        });
    }
    function c(e) {
      var t = (this.ui = $("<div></div>")),
        r = (e = e || {}).delay || 5e3,
        n = null == e.autohide || e.autohide;
      function i() {
        n &&
          setTimeout(() => {
            t.hide();
          }, r);
      }
      t.css({
        "font-family": "Arial",
        "font-size": "14px",
        padding: "3px",
        "border-radius": "4px",
        "margin-top": "2px",
        "margin-bottm": "2px",
        "font-weight": "bold",
        "text-align": "center",
      }),
        t.hide(),
        (this.error = function (e) {
          t.css({
            background: "lightcoral",
            color: "darkred",
            border: "1px solid darkred",
          }),
            t.text(e),
            t.show(),
            i();
        }),
        (this.warning = function (e) {
          t.css({
            background: "#fff3cd",
            color: "#856409",
            border: "1px solid #856409",
          }),
            t.text(e),
            t.show(),
            i();
        }),
        (this.message = function (e) {
          t.css({
            background: "lightgreen",
            color: "green",
            border: "1px solid green",
          }),
            t.text(e),
            t.show(),
            i();
        });
    }
    function u() {
      var t = (this.ui = $("<div></div>"));
      t.css("position", "absolute"),
        t.css("border-radius", "3px"),
        t.css("background", "#f1f1f1"),
        t.css("z-index", 99);
      var r = $("<div></div>");
      r.css("position", "relative"),
        t.css("opacity", "0.85"),
        t.append(r),
        r.css({
          background: "#f1f1f1",
          "border-radius": "4px",
          padding: "4px",
          width: "140px",
        });
      var i = {
          background: "#d3e2ee",
          padding: "2px",
          "font-family": "Arial",
          "font-weight": "bold",
          "font-size": "12px",
          "border-radius": "2px",
        },
        o = $("<div></div>");
      o.text("Remove Label"),
        o.css(i),
        o.css("margin-bottom", "3px"),
        r.append(o),
        o.hide();
      var a = Object.keys($3Dmol.GLModel.validAtomSpecs),
        s = [],
        l = [];
      a.forEach((e) => {
        !0 === $3Dmol.GLModel.validAtomSpecs[e].prop && s.push(e);
      });
      var u = $("<div></div>");
      function d(e, t) {
        this.row = $("<tr></tr>");
        var r = (this.control = { key: "", value: null, active: !0, name: e });
        (this.key = e), (this.value = t);
        var n = new $3Dmol.UI.Form.Checkbox(r),
          i = $("<td></td>");
        i.append(n.ui);
        var o = $("<td></td>"),
          a = $("<td></td>").text(":"),
          s = $("<td></td>");
        this.row.append(i, o, a, s),
          o.text(e),
          "number" == typeof t
            ? s.text(t.toFixed(2))
            : s.text(t.replace(/\^/g, "")),
          console.log("Type of value", typeof t, t);
      }
      r.append(u);
      var p = $("<div></div>");
      r.append(p);
      var f = $("<div></div>");
      r.append(f), f.css("width", "100%");
      var g = $("<div></div>");
      f.append(g),
        g.text("Add Label"),
        g.css(i),
        g.css("margin-bottom", "3px"),
        g.hide();
      var v = $("<div></div>");
      r.append(v),
        r.css({ position: "relative" }),
        v.css({
          background: "#dfdfdf",
          "border-radius": "3px",
          "font-family": "Arial",
          "font-weight": "bold",
          "font-size": "12px",
          "box-sizing": "border-box",
          width: "100%",
        }),
        v.hide();
      var y = new c({ autohide: !1 });
      function x() {
        var e = {};
        return (
          l.forEach((t) => {
            !0 === t.control.value && (e[t.key] = t.value);
          }),
          0 != Object.keys(e).length ? e : null
        );
      }
      function b() {
        v.children().detach(), v.hide();
      }
      r.append(y.ui),
        t.hide(),
        (this.hidden = !0),
        (this.atom = null),
        o.on("click", { atom: this.atom }, function (t) {
          e.removeAtomLabel(o.atom);
        }),
        (this.show = function (r, i, a, p) {
          p ? (o.show(), (o.atom = a)) : (o.hide(), (o.atom = null)),
            y.ui.hide(),
            g.hide(),
            0 == e.getSelectionList().length
              ? y.message("Please create selections before adding label")
              : g.show(),
            b(),
            h(t, r, i),
            t.show(),
            (this.hidden = !1),
            a
              ? ((function (t) {
                  u.empty(), (l = []);
                  var r = $("<table></table>");
                  s.forEach((e) => {
                    var n = new d(e, t[e]);
                    r.append(n.row), l.push(n);
                  }),
                    u.append(r);
                  var i = { value: null, key: "Atom Label Style" },
                    o = $("<div><div>");
                  (i = $("<div><div>")).text("Style"),
                    i.css({
                      display: "inline-block",
                      "font-family": "Arial",
                      "font-size": "14px",
                      "margin-right": "6px",
                      "margin-left": "6px",
                    });
                  var a = new $3Dmol.UI.Form.ListInput(
                    i,
                    Object.keys($3Dmol.labelStyles)
                  );
                  a.ui.css({ display: "inline-block" }),
                    a.setValue("milk"),
                    o.append(i, a.ui),
                    u.append(o);
                  var h = new m(n.tick, 18, {
                      backgroundColor: "lightgreen",
                      tooltip: "Submit",
                    }),
                    p = new m(n.cross, 18, {
                      backgroundColor: "lightcoral",
                      tooltip: "Cancel",
                    }),
                    f = $("<div></div>");
                  f.append(h.ui, p.ui);
                  var g = new c();
                  u.append(g.ui),
                    u.append(f),
                    h.ui.on("click", () => {
                      var r = x(),
                        n = a.validate();
                      null != r
                        ? n
                          ? (e.addAtomLabel(r, t, a.getValue().value),
                            e.exitContextMenu(!1))
                          : g.error("Select style for label")
                        : g.error("No value selected for label");
                    }),
                    p.ui.on("click", () => {
                      e.exitContextMenu();
                    });
                })(a),
                (this.atom = a))
              : u.empty();
        }),
        (this.hide = function (r) {
          if (r) {
            var n = x();
            null != n && e.addAtomLabel(n, this.atom);
          }
          t.hide(), (this.hidden = !0), b();
        }),
        g.on("click", function () {
          var t,
            r = (function () {
              var t = $("<div></div>"),
                r = {
                  text: { key: "Label Text", value: null, active: !0 },
                  style: { key: "Style", value: null, active: !0 },
                  sel: { key: "Selection", value: null, active: !0 },
                },
                i = $("<div></div>"),
                o = new m(n.minus, 16),
                a = new m(n.tick, 16, {
                  backgroundColor: "lightgreen",
                  tooltip: "Submit",
                }),
                s = new m(n.cross, 16, {
                  backgroundColor: "lightcoral",
                  tooltip: "Cancel",
                });
              i.append(o.ui, a.ui, s.ui), o.ui.hide(), t.append(i);
              var l = $("<div></div>"),
                c = $("<div></div>").text("Label Text"),
                u = new $3Dmol.UI.Form.Input(r.text);
              l.append(c, u.ui), u.setWidth(126), t.append(l);
              var d = $("<div></div>"),
                h = $("<div></div>").text("Label Style"),
                p = new $3Dmol.UI.Form.ListInput(
                  r.style,
                  Object.keys($3Dmol.labelStyles)
                );
              p.setValue("milk"), d.append(h, p.ui), t.append(d);
              var f = e.getSelectionList(),
                g = $("<div></div>"),
                v = $("<div></div>").text("Label Selection"),
                y = new $3Dmol.UI.Form.ListInput(r.sel, f);
              return (
                g.append(v, y.ui),
                t.append(g),
                t.css({ padding: "2px" }),
                a.ui.on("click", () => {
                  var t = !0;
                  p.validate() || (t = !1),
                    u.validate() || (t = !1),
                    y.validate() || (t = !1),
                    t && e.addLabel(r);
                }),
                s.ui.on("click", () => {
                  e.exitContextMenu();
                }),
                o.ui.on("click", () => {
                  e.removeLabel();
                }),
                t.on("keyup", (e) => {
                  "Enter" == e.key && a.ui.trigger("click");
                }),
                {
                  boundingBox: t,
                  text: u,
                  style: p,
                  selection: y,
                  editMode: function () {
                    o.ui.show();
                  },
                }
              );
            })();
          (t = r), v.children().detach(), v.append(t.boundingBox), v.show();
        });
    }
    function d() {
      var t = (this.ui = $("<div></div>")),
        r = !1;
      t.css({ position: "absolute", width: "140px", "text-align": "right" });
      var i = new m(n.surface, 20, { tooltip: "Toggle Surface Menu" });
      t.append(i.ui);
      var a = $("<div></div>");
      t.append(a), t.css({ overflow: "visible" });
      var s = $("<div></div>");
      s.css({
        "max-height": 0.8 * o,
        "overflow-y": "auto",
        "overflow-x": "hidden",
      }),
        (this.updateScrollBox = function (e) {
          s.css("max-height", 0.8 * e);
        }),
        a.append(s);
      var l = new c();
      a.append(l.ui);
      var u = $("<div></div>"),
        d = new m(n.plus, 20, { tooltip: "Add New Surface" });
      u.append(d.ui), a.append(u), a.hide();
      var h = (this.surfaces = []);
      function p() {
        var t = {
            surfaceType: { key: "Surface Type", value: null },
            surfaceStyle: { key: "Surface Style", value: null },
            surfaceFor: { key: "Selection Atoms", value: null },
            surfaceOf: { key: "Surface Generating Atoms", value: null },
          },
          i = (this.ui = $("<div></div>"));
        i.css({
          "margin-top": "3px",
          padding: "6px",
          "border-radius": "3px",
          "background-color": "#e8e8e8",
          width: "100%",
          "box-sizing": "border-box",
          opacity: 0.9,
          "text-align": "left",
        });
        var o = (this.heading = $("<div></div>")),
          a = $("<div></div>");
        a.css({ "text-align": "right" });
        var s = $("<div></div>"),
          l = new m(n.pencil, 16, { tooltip: "Edit Surface" }),
          u = new m(n.minus, 16, { bfr: 0.5, backgroundColor: "#f06f6f" });
        s.append(u.ui),
          s.append(l.ui),
          (s.editButton = l),
          (s.removeButton = u),
          (s.editMode = !1);
        var d = {
          "font-weight": "bold",
          "font-family": "Arial",
          "font-size": "12px",
        };
        o.css("display", "inline-block"),
          o.css(d),
          s.css("display", "inline-block"),
          a.hide(),
          a.append(o, s),
          i.append(a);
        var p = $("<div></div>");
        i.append(p);
        var f = $("<div></div>"),
          g = $("<div></div>");
        g.text("Surface Type"), g.css(d);
        var v = new $3Dmol.UI.Form.ListInput(
          t.surfaceType,
          Object.keys($3Dmol.SurfaceType)
        );
        f.append(g, v.ui),
          p.append(f),
          v.setValue(Object.keys($3Dmol.SurfaceType)[0]);
        var y = $("<div></div>"),
          x = $("<div></div>"),
          b = new $3Dmol.UI.Form(
            $3Dmol.GLModel.validSurfaceSpecs,
            t.surfaceStyle
          );
        y.append(x, b.ui), p.append(y);
        var w = $("<div></div>"),
          D = $("<div></div>");
        D.text("Surface Atoms"), D.css(d);
        var C = "Atoms in the selections will be used to generate the surface",
          S = "All the atoms will be used to generate the surface",
          A = new $3Dmol.UI.Form.ListInput(t.surfaceOf, ["self", "all"]),
          M = $("<div></div>");
        M.css({
          "background-color": "#e4e4e4",
          border: "1px solid grey",
          color: "grey",
          padding: "2px",
          "border-radius": "3px",
          "font-family": "Arial",
          "font-size": "12px",
          "font-weight": "bold",
          "margin-top": "3px",
        }),
          M.hide(),
          (A.update = function (e) {
            "self" == e.value
              ? (M.show(), M.text(C))
              : "all" == e.value
              ? (M.show(), M.text(S))
              : M.hide();
          }),
          A.setValue("all"),
          w.append(D, A.ui, M),
          p.append(w);
        var k = ["all"].concat(e.getSelectionList()),
          z = $("<div></div>"),
          _ = $("<div></div>");
        _.text("Show Atoms"), _.css(d);
        var T = new $3Dmol.UI.Form.ListInput(t.surfaceFor, k);
        T.setValue("all"), z.append(_, T.ui), p.append(z);
        var L = new c();
        p.append(L.ui);
        var E = $("<div></div>"),
          I = new m(n.tick, 16, {
            backgroundColor: "lightgreen",
            tooltip: "Submit",
          }),
          F = new m(n.cross, 16, {
            backgroundColor: "lightcoral",
            tooltip: "Cancel",
          });
        E.append(I.ui),
          E.append(F.ui),
          p.append(E),
          u.ui.on("click", { surfaceBox: i }, function (t) {
            var r = t.data.surfaceBox.data("surf-id");
            i.remove(), e.removeSurface(r);
          }),
          l.ui.on("click", function () {
            p.toggle();
          });
        var O = (this.validateInput = function () {
          var e = !0;
          return (
            T.validate() || (e = !1),
            A.validate() || (e = !1),
            v.validate() || (e = !1),
            b.validate() || (e = !1),
            e
          );
        });
        function R(e) {
          i.data("surf-id", e),
            o.text("surf#" + e),
            a.show(),
            (s.editMode = !0),
            p.hide();
        }
        I.ui.on("click", {}, function () {
          if ((T.getValue(), A.getValue(), v.getValue(), b.getValue(), O()))
            if (!1 === s.editMode) {
              var n = e.addSurface(t);
              (t.id = n), R(n), h.push(this), (r = !1);
            } else
              b.getValue(),
                (t.id = i.data("surf-id")),
                console.log("Edit surface called"),
                e.editSurface(t),
                p.hide();
          else L.error("Invalid Input");
        }),
          F.ui.on("click", {}, function () {
            0 == s.editMode
              ? (i.detach(), i.remove(), (r = !1))
              : (p.hide(), (s.editMode = !1));
          }),
          i.on("keyup", (e) => {
            "Enter" == e.key && I.ui.trigger("click");
          }),
          (this.editSurface = function (e, t) {
            R(e),
              v.setValue(t.surfaceType.value),
              b.setValue(t.surfaceStyle.value),
              A.setValue(t.surfaceOf.value),
              T.setValue(t.surfaceFor.value),
              T.getValue(),
              A.getValue(),
              v.getValue(),
              b.getValue();
          });
      }
      d.ui.on("click", { surfaces: this }, function (e) {
        if (r) l.warning("Please complete the previous form first");
        else {
          var t = new p();
          s.append(t.ui), (r = !0);
        }
      }),
        i.ui.on("click", () => {
          a.toggle();
        }),
        (this.empty = function () {
          s.empty(), (r = !1);
        }),
        (this.addSurface = function (e, t) {
          var r = new p();
          s.append(r.ui), r.editSurface(e, t);
        });
    }
    function h(e, t, r) {
      e.css("left", t), e.css("top", r);
    }
    function p(e, t, r = "left", n = "top", i = 0, o = 0) {
      t.css("z-index", 99), e.position();
      var a = f(e).width,
        s = (function (e) {
          return f(e).height;
        })(e),
        l = t.outerWidth(),
        c = t.outerHeight(),
        u = parseInt(e.css("padding").replace("px", ""));
      (u = u || 0),
        (function (e) {
          e.offset().top;
        })(e),
        parseInt(e.css("margin-top").replace("px", "")),
        (function (e) {
          e.offset().left;
        })(e),
        parseInt(e.css("margin-left").replace("px", ""));
      var d = { left: 0, top: 0 };
      (d.left =
        "left" == r
          ? u + i
          : "center" == r
          ? a / 2 - l / 2 + i
          : "right" == r
          ? a - l - u + i
          : i + u),
        (d.top =
          "top" == n
            ? o + u
            : "center" == n
            ? s / 2 - c / 2 + o
            : "bottom" == n
            ? s - c - o - u
            : o + u),
        h(t, d.left, d.top);
    }
    function f(e) {
      let t = e[0],
        r = t.getBoundingClientRect();
      if (0 == r.width && 0 == r.height && "none" === t.style.display) {
        let e = t.style.position,
          n = t.style.visibility;
        (t.style.display = "block"),
          (t.style.visibility = "hidden"),
          (t.style.position = "absolute"),
          (r = t.getBoundingClientRect()),
          (t.style.display = "none"),
          (t.style.visibility = n),
          (t.style.position = e);
      }
      return r;
    }
    function m(e, t, r) {
      var n = (r = r || {}).bfr * t || t / 4,
        i = r.backgroundColor || "rgb(177, 194, 203)",
        o = r.color || "black",
        a = r.hoverable || "true",
        s = r.tooltip || null,
        l = (this.ui = $("<div></div>")),
        c = $("<div></div>");
      l.append(c),
        l.css("box-sizing", "border-box"),
        l.css("display", "inline-block"),
        l.css("margin", "3px"),
        l.css("height", t),
        l.css("width", t),
        l.css("border-radius", n + "px"),
        l.css("color", o),
        l.css("background", i),
        c.css("display", "flex"),
        c.css("justify-content", "center"),
        c.css("align-items", "center"),
        c.css("padding", "2px"),
        (this.setSVG = function (e) {
          c.empty();
          var t = $(e);
          c.append(t);
        }),
        this.setSVG(e),
        l.css({ position: "relative" }),
        null != s && l.attr("title", s),
        "true" == a &&
          (l
            .on("mouseenter", () => {
              l.css("box-shadow", "0px 0px 3px black");
            })
            .on("mouseleave", () => {
              l.css("box-shadow", "none");
            }),
          l.on("mousedown", (e) => {
            l.css("box-shadow", "0px 0px 1px black");
          }),
          l.on("mouseup", () => {
            l.css("box-shadow", "0px 0px 3px black");
          }),
          l.on("mousemove", (e) => {}));
    }
    t.width,
      (this.tools = (function (t) {
        var r = new a();
        i.append(r.ui), p(i, r.ui, "left", "top");
        var o = new u();
        i.append(o.ui), h(o.ui, 100, 100);
        var l = new d();
        i.append(l.ui), p(i, l.ui, "right", "top", 0, r.ui.height() + 5);
        var c = new s(n.select);
        return (
          i.append(c.ui),
          p(i, c.ui, "left", "top", 0, r.ui.height() + 5),
          c.ui.on("mousedown", () => {
            e.exitContextMenu();
          }),
          l.ui.on("mousedown", () => {
            e.exitContextMenu();
          }),
          { modelToolBar: r, selectionBox: c, contextMenu: o, surfaceMenu: l }
        );
      })()),
      (this.resize = function () {
        var e = this.tools.selectionBox,
          t = this.tools.surfaceMenu,
          r = this.tools.modelToolBar,
          n = i.height();
        p(i, r.ui, "left", "top"),
          p(i, e.ui, "left", "top", 0, r.ui.height() + 5),
          e.updateScrollBox(n),
          p(i, t.ui, "right", "top", 0, r.ui.height() + 5),
          t.updateScrollBox(n);
      });
  }),
  ($3Dmol.StateManager = function (e, t) {
    (t = t || {}).ui = t.ui || !1;
    var r = $(e.getRenderer().domElement),
      n = e.container,
      i = {
        height: n.height(),
        width: n.width(),
        offset: r.offset(),
        ui: t.ui || void 0,
      },
      o = {},
      a = {},
      s = {},
      l = {};
    function c(e) {
      for (var t = Object.keys(o), r = null, n = 0; n < t.length; n++) {
        var i = o[t[n]].spec,
          a = !0,
          s = Object.keys(e);
        if (Object.keys(i).length == s.length) {
          for (var l = 0; l < s.length; l++)
            if (i[s[l]] != e[s[l]]) {
              a = !1;
              break;
            }
        } else a = !1;
        if (a) {
          r = t[n];
          break;
        }
      }
      return r;
    }
    function u() {
      e.setStyle({}),
        Object.keys(o).forEach((t) => {
          var r = o[t];
          r.hidden
            ? (e.setClickable(r.spec, !1, () => {}),
              e.enableContextMenu(r.spec, !1))
            : (Object.keys(r.styles).forEach((t) => {
                var n = r.styles[t];
                n.hidden || e.addStyle(r.spec, n.spec);
              }),
              e.setClickable(r.spec, !0, () => {}),
              e.enableContextMenu(r.spec, !0));
        }),
        e.render();
    }
    function d(e) {
      for (
        var t = "",
          r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          n = r.length,
          i = 0;
        i < e;
        i++
      )
        t += r.charAt(Math.floor(Math.random() * n));
      return t;
    }
    (this.addSelection = function (e, t = null) {
      var r = t || d(4),
        n = { spec: e, styles: {}, hidden: !1 };
      return null == t ? (o[r] = n) : (o[r].spec = n.spec), u(), r;
    }),
      (this.checkAtoms = function (t) {
        return e.selectedAtoms(t).length > 0;
      }),
      (this.toggleHide = function (e) {
        (o[e].hidden = !o[e].hidden), u();
      }),
      (this.removeSelection = function (e) {
        delete o[e], u();
      }),
      (this.addStyle = function (e, t, r = null) {
        var n = o[t],
          i = { spec: e, hidden: !1 },
          a = null;
        return (
          null == r
            ? ((a = d(4)), (n.styles[a] = i))
            : ((a = r), (n.styles[a].spec = e)),
          u(),
          a
        );
      }),
      (this.removeStyle = function (e, t) {
        delete o[e].styles[t], u();
      }),
      (this.toggleHideStyle = function (e, t) {
        (o[e].styles[t].hidden = !o[e].styles[t].hidden), u();
      }),
      (this.addSurface = function (t, r) {
        var n = d(4);
        t.id = n;
        var i = t.surfaceStyle.value;
        null == i && (i = {});
        var s =
            "all" == t.surfaceFor.value ? { spec: {} } : o[t.surfaceFor.value],
          l = "self" == t.surfaceOf.value ? s.spec : {};
        return (
          e
            .addSurface($3Dmol.SurfaceType[t.surfaceType.value], i, s.spec, l)
            .then(
              (e) => {
                (a[n] = e[0]), null != r && r(n, e[0]);
              },
              (e) => {}
            ),
          n
        );
      }),
      (this.removeSurface = function (t) {
        e.removeSurface(a[t]), delete a[t];
      }),
      (this.editSurface = function (t) {
        var r = t.surfaceStyle.value || {},
          n =
            "all" == t.surfaceFor.value ? { spec: {} } : o[t.surfaceFor.value],
          i = "self" == t.surfaceOf.value ? n.spec : {};
        e.removeSurface(a[t.id]),
          console.log(t),
          e
            .addSurface($3Dmol.SurfaceType[t.surfaceType.value], r, n.spec, i)
            .then((e) => {
              a[t.id] = e[0];
            });
      }),
      (this.getSelectionList = function () {
        return Object.keys(o);
      }),
      (this.openContextMenu = function (e, t, r) {
        var n = !1;
        e && (n = null != (n = Object.keys(l).find((t) => t == e.index))),
          this.ui && this.ui.tools.contextMenu.show(t, r, e, n);
      }),
      (this.addLabel = function (t) {
        s[t.sel.value] = s[t.sel.value] || [];
        var r = $3Dmol.labelStyles[t.style.value],
          n = o[t.sel.value],
          i = s[t.sel.value].length;
        (r.screenOffset = new $3Dmol.Vector2(0, -1 * i * 35)),
          s[t.sel.value].push(e.addLabel(t.text.value, r, n.spec)),
          this.ui.tools.contextMenu.hide();
      }),
      (this.addAtomLabel = function (t, r, n = "milk") {
        var i = Object.keys(l).find((e) => e == r.index);
        (i = null != i) && this.removeAtomLabel(r),
          (l[r.index] = l[r.index] || null);
        var o = $3Dmol.deepCopy($3Dmol.labelStyles[n]);
        o.position = { x: r.x, y: r.y, z: r.z };
        var a = [];
        for (key in t) a.push(`${key} : ${t[key]}`);
        (a = a.join("\n")), (l[r.index] = e.addLabel(a, o));
      }),
      (this.exitContextMenu = function (e = !1) {
        this.ui && this.ui.tools.contextMenu.hide(e);
      }),
      (this.removeLabel = function () {
        this.ui.tools.contextMenu.hide();
      }),
      (this.removeAtomLabel = function (t) {
        var r = l[t.index];
        e.removeLabel(r), delete l[t.index], this.ui.tools.contextMenu.hide();
      }),
      (this.addModel = function (t) {
        e.removeAllModels(),
          e.removeAllSurfaces(),
          e.removeAllLabels(),
          e.removeAllShapes();
        var r = t.urlType.value + ":" + t.url.value;
        $3Dmol.download(r, e, {}, () => {
          this.ui.tools.modelToolBar.setModel(t.url.value.toUpperCase());
        }),
          (o = {}),
          (a = {}),
          (l = {}),
          (s = {}),
          this.ui.tools.selectionBox.empty(),
          this.ui.tools.surfaceMenu.empty();
      }),
      (this.createSelectionAndStyle = function (e, t) {
        var r = c(e);
        null == r && (r = this.addSelection(e));
        var n = null;
        0 != Object.keys(t).length && (n = this.addStyle(t, r)),
          this.ui.tools.selectionBox.editSelection(r, e, n, t);
      }),
      (this.createSurface = function (e, t, r, n) {
        var i = c(t);
        null == i && (i = this.addSelection(selSpec)),
          this.ui.tools.selectionBox.editSelection(i, t, null);
        var o = {
            surfaceType: { value: (e = Object.keys(r)[0]) },
            surfaceStyle: { value: r[e] },
            surfaceOf: { value: "self" },
            surfaceFor: { value: i },
          },
          s = d(4);
        (a[s] = n), this.ui.tools.surfaceMenu.addSurface(s, o);
      }),
      (this.setModelTitle = function (e) {
        this.ui.tools.modelToolBar.setModel(e);
      }),
      r.on("click", () => {
        this.ui &&
          0 == this.ui.tools.contextMenu.hidden &&
          this.ui.tools.contextMenu.hide();
      }),
      (this.showUI = function () {
        return new $3Dmol.UI(this, i, n);
      }),
      1 == t.ui && (this.ui = this.showUI()),
      (this.initiateUI = function () {
        (this.ui = new $3Dmol.UI(this, i, n)), u();
      }),
      (this.updateUI = function () {
        this.ui && this.ui.resize();
      });
  }),
  ($3Dmol.UI.Icons = function () {
    (this.move =
      '<svg  id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <path d="M31.338,14.538L27.38,10.58C26.994,10.193,26.531,10,26,10c-1.188,0-2,1.016-2,2c0,0.516,0.186,0.986,0.58,1.38L25.2,14H18  V6.8l0.62,0.62C19.014,7.814,19.484,8,20,8c0.984,0,2-0.813,2-2c0-0.531-0.193-0.994-0.58-1.38l-3.973-3.974  C17.08,0.279,16.729,0,16,0s-1.135,0.334-1.463,0.662L10.58,4.62C10.193,5.006,10,5.469,10,6c0,1.188,1.016,2,2,2  c0.516,0,0.986-0.186,1.38-0.58L14,6.8V14H6.8l0.62-0.62C7.814,12.986,8,12.516,8,12c0-0.984-0.813-2-2-2  c-0.531,0-0.994,0.193-1.38,0.58l-3.958,3.958C0.334,14.866,0,15.271,0,16s0.279,1.08,0.646,1.447L4.62,21.42  C5.006,21.807,5.469,22,6,22c1.188,0,2-1.016,2-2c0-0.516-0.186-0.986-0.58-1.38L6.8,18H14v7.2l-0.62-0.62  C12.986,24.186,12.516,24,12,24c-0.984,0-2,0.813-2,2c0,0.531,0.193,0.994,0.58,1.38l3.957,3.958C14.865,31.666,15.271,32,16,32  s1.08-0.279,1.447-0.646l3.973-3.974C21.807,26.994,22,26.531,22,26c0-1.188-1.016-2-2-2c-0.516,0-0.986,0.186-1.38,0.58L18,25.2V18  h7.2l-0.62,0.62C24.186,19.014,24,19.484,24,20c0,0.984,0.813,2,2,2c0.531,0,0.994-0.193,1.38-0.58l3.974-3.973  C31.721,17.08,32,16.729,32,16S31.666,14.866,31.338,14.538z"/>\n    </svg>\n    '),
      (this.rotate =
        '<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">\n    <style type="text/css">\n    .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n    </style>\n    <polyline class="st0" points="19,19 24,19 24,24 "/>\n    <polyline class="st0" points="6,23 11,23 11,18 "/>\n    <path class="st0" d="M24,19.4c-0.7,0.8-1.4,1.6-2.2,2.4c-7,7-15.3,10.2-18.5,7s-0.1-11.5,7-18.5s15.3-10.2,18.5-7\n    c1.4,1.4,1.6,3.6,0.8,6.3"/>\n    <path class="st0" d="M11,22.5c-0.3-0.2-0.5-0.5-0.8-0.8c-7-7-10.2-15.3-7-18.5s11.5-0.1,18.5,7s10.2,15.3,7,18.5\n    c-1.7,1.7-4.8,1.6-8.4,0.1"/>\n    </svg>'),
      (this.pencil =
        '\n    <svg\n   viewBox="0 0 7.4083332 7.4083335"\n   version="1.1"\n   id="svg46458"\n   inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n   sodipodi:docname="pencil.svg"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg">\n  <sodipodi:namedview\n     id="namedview46460"\n     pagecolor="#ffffff"\n     bordercolor="#666666"\n     borderopacity="1.0"\n     inkscape:pageshadow="2"\n     inkscape:pageopacity="0.0"\n     inkscape:pagecheckerboard="0"\n     inkscape:document-units="mm"\n     showgrid="false"\n     units="px"\n     inkscape:zoom="11.859035"\n     inkscape:cx="39.252773"\n     inkscape:cy="-0.54810532"\n     inkscape:window-width="1920"\n     inkscape:window-height="1017"\n     inkscape:window-x="-8"\n     inkscape:window-y="-8"\n     inkscape:window-maximized="1"\n     inkscape:current-layer="layer1" />\n  <defs\n     id="defs46455" />\n  <g\n     inkscape:label="Layer 1"\n     inkscape:groupmode="layer"\n     id="layer1">\n    <g\n       id="g46369"\n       style="opacity:0.883991"\n       transform="matrix(1.4892662,-0.15686655,0.15686655,1.4892662,-53.265394,-119.92352)">\n      <g\n         id="g49150"\n         transform="matrix(0.91743541,0,0,0.91743541,23.648257,-4.2024208)"\n         style="opacity:0.883991">\n        <path\n           style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n           d="m 3.8020268,100.20944 0.4890573,-1.325191 3.1552092,-2.461061 0.8203543,1.009666 -3.2340893,2.476838 z"\n           id="path47163"\n           sodipodi:nodetypes="cccccc" />\n        <path\n           style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n           d="m 4.7012611,98.537178 -0.2738716,0.535677 0.5184006,-0.125499 -0.1893126,0.512722 0.5048334,-0.102546 -0.2287526,0.55216"\n           id="path47167"\n           sodipodi:nodetypes="cccccc" />\n        <path\n           style="fill:none;stroke:#000000;stroke-width:0.288395px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n           d="m 4.0143928,99.803763 0.189158,0.257937 -0.4015317,0.14774 z"\n           id="path46061" />\n      </g>\n      <path\n         style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n         d="m 29.910684,84.806844 0.691621,0.847804"\n         id="path46176" />\n    </g>\n  </g>\n</svg>\n\n    '),
      (this.listArrow =
        '\n    <svg\n    viewBox="0 0 7.4083332 7.4083335"\n    version="1.1"\n    id="svg41603"\n    inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n    sodipodi:docname="listArrow.svg"\n    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:svg="http://www.w3.org/2000/svg">\n   <sodipodi:namedview\n      id="namedview41605"\n      pagecolor="#ffffff"\n      bordercolor="#666666"\n      borderopacity="1.0"\n      inkscape:pageshadow="2"\n      inkscape:pageopacity="0.0"\n      inkscape:pagecheckerboard="0"\n      inkscape:document-units="mm"\n      showgrid="false"\n      units="px"\n      inkscape:zoom="16.771208"\n      inkscape:cx="16.635653"\n      inkscape:cy="11.120248"\n      inkscape:window-width="1920"\n      inkscape:window-height="1017"\n      inkscape:window-x="-8"\n      inkscape:window-y="-8"\n      inkscape:window-maximized="1"\n      inkscape:current-layer="layer1" />\n   <defs\n      id="defs41600" />\n   <g\n      inkscape:label="Layer 1"\n      inkscape:groupmode="layer"\n      id="layer1">\n     <path\n        style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"\n        d="M 1.991198,0.89301893 5.7166459,3.7041667 1.991198,6.5153145 Z"\n        id="path42297"\n        sodipodi:nodetypes="cccc" />\n   </g>\n </svg>\n \n    '),
      (this.option =
        ' <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title>69.option</title><g id="_69.option" data-name="69.option"><rect class="cls-1" x="1" y="1" width="9" height="9" rx="2" ry="2"/><rect class="cls-1" x="14" y="1" width="9" height="9" rx="2" ry="2"/><rect class="cls-1" x="14" y="14" width="9" height="9" rx="2" ry="2"/><rect class="cls-1" x="1" y="14" width="9" height="9" rx="2" ry="2"/></g></svg>'),
      (this.minus =
        '<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'),
      (this.plus =
        '<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'),
      (this.paintbrush =
        '<?xml version="1.0" encoding="iso-8859-1"?>\n    \x3c!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 444.892 444.892" style="enable-background:new 0 0 444.892 444.892;" xml:space="preserve">\n    <g id="XMLID_476_">\n    <path id="XMLID_503_" d="M440.498,173.103c5.858-5.857,5.858-15.355,0-21.213l-22.511-22.511c-5.091-5.091-13.084-5.846-19.038-1.8\n    l-47.332,32.17l31.975-47.652c3.993-5.951,3.219-13.897-1.85-18.964l-48.83-48.83c-4.508-4.508-11.372-5.675-17.114-2.908\n    l-8.443,4.065l4.043-8.97c2.563-5.685,1.341-12.361-3.068-16.771L293.002,4.393c-5.857-5.857-15.355-5.857-21.213,0\n    l-119.06,119.059l168.71,168.71L440.498,173.103z"/>\n    <path id="XMLID_1199_" d="M130.56,145.622l-34.466,34.466c-2.813,2.813-4.394,6.628-4.394,10.606s1.58,7.794,4.394,10.606\n    l32.694,32.694c6.299,6.299,9.354,14.992,8.382,23.849c-0.971,8.851-5.843,16.677-13.366,21.473\n    C27.736,340.554,18.781,349.51,15.839,352.453c-21.119,21.118-21.119,55.48,0,76.6c21.14,21.14,55.504,21.098,76.6,0\n    c2.944-2.943,11.902-11.902,73.136-107.965c4.784-7.505,12.607-12.366,21.462-13.339c8.883-0.969,17.575,2.071,23.859,8.354\n    l32.694,32.694c5.857,5.857,15.356,5.857,21.213,0l34.467-34.467L130.56,145.622z M70.05,404.825c-8.28,8.28-21.704,8.28-29.983,0\n    c-8.28-8.28-8.28-21.704,0-29.983c8.28-8.28,21.704-8.28,29.983,0C78.33,383.121,78.33,396.545,70.05,404.825z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n    '),
      (this.select =
        '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    \x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n    <g>\n    <g>\n    <path d="M416,149.333c-8.768,0-16.939,2.667-23.723,7.211C386.432,139.947,370.581,128,352,128\n    c-8.768,0-16.939,2.667-23.723,7.211c-5.845-16.597-21.696-28.544-40.277-28.544c-7.765,0-15.061,2.091-21.333,5.739V42.667\n    C266.667,19.136,247.531,0,224,0s-42.667,19.136-42.667,42.667v249.408l-58.645-29.333C113.856,258.325,103.957,256,94.08,256\n    c-22.485,0-40.747,18.283-40.747,40.875c0,10.901,4.245,21.12,11.947,28.821l137.941,137.941C234.389,494.827,275.883,512,320,512\n    c76.459,0,138.667-62.208,138.667-138.667V192C458.667,168.469,439.531,149.333,416,149.333z M437.333,373.333\n    c0,64.704-52.651,117.333-117.355,117.333c-38.421,0-74.517-14.955-101.653-42.133L80.363,310.592\n    c-3.669-3.648-5.696-8.533-5.696-13.845c0-10.709,8.704-19.413,19.413-19.413c6.592,0,13.163,1.557,19.072,4.501l74.091,37.035\n    c3.307,1.643,7.253,1.472,10.368-0.469c3.136-1.941,5.056-5.376,5.056-9.067V42.667c0-11.755,9.557-21.333,21.333-21.333\n    s21.333,9.579,21.333,21.333v202.667c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667v-96\n    c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333v96c0,5.888,4.779,10.667,10.667,10.667\n    s10.667-4.779,10.667-10.667v-74.667c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333v74.667\n    c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667V192c0-11.755,9.557-21.333,21.333-21.333\n    s21.333,9.579,21.333,21.333V373.333z"/>\n    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'),
      (this.movie = {}),
      (this.movie.play =
        '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    \x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">\n    <g id="XMLID_228_">\n    <path id="XMLID_229_" d="M236.95,152.281l-108-67.501c-4.624-2.89-10.453-3.044-15.222-0.4C108.959,87.024,106,92.047,106,97.5v135\n    c0,5.453,2.959,10.476,7.728,13.12c2.266,1.256,4.77,1.88,7.271,1.88c2.763,0,5.523-0.763,7.95-2.28l108-67.499\n    c4.386-2.741,7.05-7.548,7.05-12.72C244,159.829,241.336,155.022,236.95,152.281z"/>\n    <path id="XMLID_230_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300\n    c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    '),
      (this.movie.stop =
        '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    \x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">\n    <g id="XMLID_223_">\n    <path id="XMLID_224_" d="M225.75,89.25h-121.5c-8.284,0-15,6.716-15,15v121.5c0,8.284,6.716,15,15,15h121.5c8.284,0,15-6.716,15-15\n    v-121.5C240.75,95.966,234.034,89.25,225.75,89.25z"/>\n    <path id="XMLID_225_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300\n    c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    '),
      (this.movie.pause =
        '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    \x3c!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 271.953 271.953" style="enable-background:new 0 0 271.953 271.953;" xml:space="preserve">\n    <g>\n    <g>\n    <path style="fill:#010002;" d="M135.977,271.953c75.097,0,135.977-60.879,135.977-135.977S211.074,0,135.977,0S0,60.879,0,135.977\n    S60.879,271.953,135.977,271.953z M135.977,21.756c62.979,0,114.22,51.241,114.22,114.22s-51.241,114.22-114.22,114.22\n    s-114.22-51.241-114.22-114.22S72.992,21.756,135.977,21.756z"/>\n    <path style="fill:#010002;" d="M110.707,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598\n    c-7.511,0-13.598,6.086-13.598,13.598v103.342C97.109,194.028,103.195,200.114,110.707,200.114z"/>\n    <path style="fill:#010002;" d="M165.097,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598\n    S151.5,75.663,151.5,83.174v103.342C151.5,194.028,157.586,200.114,165.097,200.114z"/>\n    </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    '),
      (this.movie.next =
        '\n    <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n    \x3c!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n\n    <svg\n    version="1.1"\n    id="Capa_1"\n    x="0px"\n    y="0px"\n    viewBox="0 0 30.05 30.05"\n    style="enable-background:new 0 0 30.05 30.05;"\n    xml:space="preserve"\n    sodipodi:docname="next.svg"\n    inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:svg="http://www.w3.org/2000/svg"><defs\n    id="defs73" /><sodipodi:namedview\n    id="namedview71"\n    pagecolor="#ffffff"\n    bordercolor="#666666"\n    borderopacity="1.0"\n    inkscape:pageshadow="2"\n    inkscape:pageopacity="0.0"\n    inkscape:pagecheckerboard="0"\n    showgrid="false"\n    inkscape:zoom="19.851347"\n    inkscape:cx="11.938737"\n    inkscape:cy="15.79238"\n    inkscape:window-width="1920"\n    inkscape:window-height="1017"\n    inkscape:window-x="-8"\n    inkscape:window-y="-8"\n    inkscape:window-maximized="1"\n    inkscape:current-layer="Capa_1" />\n    <g\n    id="g38"\n    transform="rotate(180,15.025,15.025)">\n    <path\n    d="m 20.814,11 c -0.193,-0.102 -0.43,-0.086 -0.604,0.041 l -2.383,1.73 v -1.258 c 0,-0.217 -0.121,-0.42 -0.32,-0.514 -0.191,-0.102 -0.424,-0.086 -0.602,0.041 l -4.834,3.512 c -0.15,0.109 -0.242,0.287 -0.242,0.473 0,0.184 0.092,0.357 0.242,0.471 l 4.834,3.508 c 0.102,0.076 0.221,0.111 0.342,0.111 0.088,0 0.18,-0.018 0.26,-0.066 0.199,-0.1 0.32,-0.295 0.32,-0.516 v -1.26 l 2.383,1.73 c 0.098,0.076 0.221,0.111 0.34,0.111 0.094,0 0.182,-0.018 0.264,-0.066 0.197,-0.1 0.318,-0.295 0.318,-0.516 v -7.02 C 21.133,11.297 21.012,11.094 20.814,11 Z"\n    id="path2" />\n    <path\n    d="M 15.027,0 C 6.729,0 0,6.729 0,15.025 0,23.326 6.729,30.05 15.027,30.05 23.325,30.05 30.05,23.325 30.05,15.025 30.051,6.729 23.326,0 15.027,0 Z m 0,27.539 C 8.115,27.539 2.509,21.935 2.509,15.025 2.509,8.115 8.115,2.51 15.027,2.51 c 6.914,0 12.516,5.605 12.516,12.516 0,6.911 -5.602,12.513 -12.516,12.513 z"\n    id="path4" />\n    <path\n    d="M 10.617,11.146 H 9.225 c -0.168,0 -0.305,0.137 -0.305,0.305 v 7.146 c 0,0.168 0.137,0.309 0.305,0.309 h 1.393 c 0.17,0 0.307,-0.141 0.307,-0.309 v -7.146 c -0.001,-0.168 -0.138,-0.305 -0.308,-0.305 z"\n    id="path6" />\n    <g\n    id="g8">\n    </g>\n    <g\n    id="g10">\n    </g>\n    <g\n    id="g12">\n    </g>\n    <g\n    id="g14">\n    </g>\n    <g\n    id="g16">\n    </g>\n    <g\n    id="g18">\n    </g>\n    <g\n    id="g20">\n    </g>\n    <g\n    id="g22">\n    </g>\n    <g\n    id="g24">\n    </g>\n    <g\n    id="g26">\n    </g>\n    <g\n    id="g28">\n    </g>\n    <g\n    id="g30">\n    </g>\n    <g\n    id="g32">\n    </g>\n    <g\n    id="g34">\n    </g>\n    <g\n    id="g36">\n    </g>\n    </g>\n    <g\n    id="g40"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g42"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g44"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g46"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g48"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g50"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g52"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g54"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g56"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g58"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g60"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g62"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g64"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g66"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g68"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    </svg>\n    '),
      (this.movie.previous =
        '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    \x3c!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 30.05 30.05" style="enable-background:new 0 0 30.05 30.05;" xml:space="preserve">\n    <g>\n    <path d="M20.814,11c-0.193-0.102-0.43-0.086-0.604,0.041l-2.383,1.73v-1.258c0-0.217-0.121-0.42-0.32-0.514\n    c-0.191-0.102-0.424-0.086-0.602,0.041l-4.834,3.512c-0.15,0.109-0.242,0.287-0.242,0.473c0,0.184,0.092,0.357,0.242,0.471\n    l4.834,3.508c0.102,0.076,0.221,0.111,0.342,0.111c0.088,0,0.18-0.018,0.26-0.066c0.199-0.1,0.32-0.295,0.32-0.516v-1.26\n    l2.383,1.73c0.098,0.076,0.221,0.111,0.34,0.111c0.094,0,0.182-0.018,0.264-0.066c0.197-0.1,0.318-0.295,0.318-0.516v-7.02\n    C21.133,11.297,21.012,11.094,20.814,11z"/>\n    <path d="M15.027,0C6.729,0,0,6.729,0,15.025C0,23.326,6.729,30.05,15.027,30.05S30.05,23.325,30.05,15.025\n    C30.051,6.729,23.326,0,15.027,0z M15.027,27.539c-6.912,0-12.518-5.604-12.518-12.514S8.115,2.51,15.027,2.51\n    c6.914,0,12.516,5.605,12.516,12.516S21.941,27.539,15.027,27.539z"/>\n    <path d="M10.617,11.146H9.225c-0.168,0-0.305,0.137-0.305,0.305v7.146c0,0.168,0.137,0.309,0.305,0.309h1.393\n    c0.17,0,0.307-0.141,0.307-0.309v-7.146C10.924,11.283,10.787,11.146,10.617,11.146z"/>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    '),
      (this.tick =
        '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    \x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n    <g>\n      <g>\n        <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M386.594,226.664\n          L252.747,360.511c-7.551,7.551-17.795,11.794-28.475,11.794s-20.923-4.243-28.475-11.795l-70.388-70.389\n          c-15.726-15.726-15.726-41.223,0.001-56.95c15.727-15.725,41.224-15.726,56.95,0.001l41.913,41.915l105.371-105.371\n          c15.727-15.726,41.223-15.726,56.951,0.001C402.319,185.44,402.319,210.938,386.594,226.664z"/>\n      </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    '),
      (this.cross =
        '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    \x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n       viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">\n    <g>\n      <g>\n        <path d="M227.5,0C101.761,0,0,101.75,0,227.5C0,353.239,101.75,455,227.5,455C353.239,455,455,353.25,455,227.5\n          C455.001,101.761,353.251,0,227.5,0z M310.759,268.333c11.715,11.716,11.715,30.711,0,42.427\n          c-5.858,5.858-13.536,8.787-21.213,8.787s-15.355-2.929-21.213-8.787L227.5,269.927l-40.832,40.832\n          c-5.858,5.858-13.536,8.787-21.213,8.787s-15.355-2.929-21.213-8.787c-11.715-11.716-11.715-30.711,0-42.427l40.832-40.832\n          l-40.832-40.832c-11.715-11.716-11.715-30.711,0-42.427c11.716-11.716,30.711-11.716,42.427,0l40.832,40.832l40.832-40.832\n          c11.716-11.716,30.711-11.716,42.427,0c11.715,11.716,11.715,30.711,0,42.427L269.927,227.5L310.759,268.333z"/>\n      </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    '),
      (this.edit =
        '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    \x3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n       viewBox="0 0 490.008 490.008" style="enable-background:new 0 0 490.008 490.008;" xml:space="preserve">\n    <g>\n      <g>\n        <g>\n          <path d="M156.7,142.865h88.6c11.5,0,20.8-9.4,20.8-20.9s-9.4-20.9-20.8-20.9h-88.6c-11.5,0-20.8,9.4-20.8,20.9\n            C135.9,133.465,145.3,142.865,156.7,142.865z"/>\n          <path d="M266.1,223.165c0-11.5-9.4-20.9-20.8-20.9h-88.6c-11.5,0-20.8,9.4-20.8,20.9s9.4,20.9,20.8,20.9h88.6\n            C256.8,244.065,266.1,234.665,266.1,223.165z"/>\n          <ellipse cx="94.2" cy="122.065" rx="20.5" ry="20.5"/>\n          <ellipse cx="94.2" cy="223.165" rx="20.5" ry="20.5"/>\n        </g>\n        <path d="M483.7,258.965l-81.3-81.3c-8.3-8.3-20.8-8.3-29.2,0l-24.3,24.2v-168.5c0-18.4-14.9-33.3-33.3-33.3H33.3\n          c-18.4,0-33.3,15-33.3,33.3v281c0,18.4,14.9,33.3,33.3,33.3h169l-4.1,4c-2.1,3.1-4.2,6.3-5.2,10.4l-20.8,102.2\n          c-3.9,20.1,10.4,28.2,24,25l102.1-20.9c4.2,0,7.3-2.1,10.4-5.2l175-175.1C487.9,284.065,495.5,272.165,483.7,258.965z M40,307.765\n          v-267.7h269v201.5l-66.5,66.1H40V307.765z M283.7,428.965l-65.6,13.6l13.5-65.7l155.2-155.3l53.1,52.1L283.7,428.965z"/>\n      </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    '),
      (this.remove =
        '\n    \n<?xml version="1.0" encoding="iso-8859-1"?>\n\x3c!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 310.285 310.285" style="enable-background:new 0 0 310.285 310.285;" xml:space="preserve">\n<path d="M155.143,0.001C69.597,0.001,0,69.597,0,155.143c0,85.545,69.597,155.142,155.143,155.142s155.143-69.597,155.143-155.142\n\tC310.285,69.597,240.689,0.001,155.143,0.001z M244.143,171.498c0,4.411-3.589,8-8,8h-163c-4.411,0-8-3.589-8-8v-32\n\tc0-4.411,3.589-8,8-8h163c4.411,0,8,3.589,8,8V171.498z"/>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\n    '),
      (this.list =
        '\n   <?xml version="1.0" encoding="iso-8859-1"?>\n   \x3c!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n   <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n   <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n      viewBox="0 0 458.18 458.18" style="enable-background:new 0 0 458.18 458.18;" xml:space="preserve">\n   <g>\n     <path d="M36.09,5.948c-18.803,0-34.052,15.248-34.052,34.051c0,18.803,15.249,34.052,34.052,34.052\n       c18.803,0,34.052-15.25,34.052-34.052C70.142,21.196,54.893,5.948,36.09,5.948z"/>\n     <path d="M147.537,80h268.604c22.092,0,40-17.908,40-40s-17.908-40-40-40H147.537c-22.092,0-40,17.908-40,40S125.445,80,147.537,80z\n       "/>\n     <path d="M36.09,132.008c-18.803,0-34.052,15.248-34.052,34.051s15.249,34.052,34.052,34.052c18.803,0,34.052-15.249,34.052-34.052\n       S54.893,132.008,36.09,132.008z"/>\n     <path d="M416.142,126.06H147.537c-22.092,0-40,17.908-40,40s17.908,40,40,40h268.604c22.092,0,40-17.908,40-40\n       S438.233,126.06,416.142,126.06z"/>\n     <path d="M36.09,258.068c-18.803,0-34.052,15.248-34.052,34.051c0,18.803,15.249,34.052,34.052,34.052\n       c18.803,0,34.052-15.249,34.052-34.052C70.142,273.316,54.893,258.068,36.09,258.068z"/>\n     <path d="M416.142,252.119H147.537c-22.092,0-40,17.908-40,40s17.908,40,40,40h268.604c22.092,0,40-17.908,40-40\n       S438.233,252.119,416.142,252.119z"/>\n     <path d="M36.09,384.128c-18.803,0-34.052,15.248-34.052,34.051s15.249,34.053,34.052,34.053c18.803,0,34.052-15.25,34.052-34.053\n       S54.893,384.128,36.09,384.128z"/>\n     <path d="M416.142,378.18H147.537c-22.092,0-40,17.908-40,40s17.908,40,40,40h268.604c22.092,0,40-17.908,40-40\n       S438.233,378.18,416.142,378.18z"/>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   </svg>\n   '),
      (this.style =
        '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n   <path fill-rule="evenodd" clip-rule="evenodd" d="M13 21V13H21V21H13ZM15 15H19L19 19H15V15Z" fill="black"/>\n   <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11L3 3L11 3V11H3ZM5 5L9 5V9L5 9L5 5Z" fill="black"/>\n   <path d="M18 6V12H16V8L12 8V6L18 6Z" fill="black"/>\n   <path d="M12 18H6L6 12H8L8 16H12V18Z" fill="black"/>\n   </svg>\n   '),
      (this.visible =
        '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  viewBox="0 0 98.48 98.48" style="enable-background:new 0 0 98.48 98.48;" xml:space="preserve"\n >\n<g>\n <path d="M97.204,45.788c-0.865-1.02-21.537-24.945-47.963-24.945c-26.427,0-47.098,23.925-47.965,24.946\n   c-1.701,2-1.701,4.902,0.001,6.904c0.866,1.02,21.537,24.944,47.964,24.944c26.426,0,47.098-23.926,47.964-24.946\n   C98.906,50.691,98.906,47.789,97.204,45.788z M57.313,35.215c1.777-0.97,4.255,0.143,5.534,2.485\n   c1.279,2.343,0.875,5.029-0.902,5.999c-1.776,0.971-4.255-0.143-5.535-2.485C55.132,38.871,55.535,36.185,57.313,35.215z\n    M49.241,68.969c-18.46,0-33.995-14.177-39.372-19.729c3.631-3.75,11.898-11.429,22.567-16.021\n   c-2.081,3.166-3.301,6.949-3.301,11.021c0,11.104,9.001,20.105,20.105,20.105s20.106-9.001,20.106-20.105\n   c0-4.072-1.219-7.855-3.3-11.021C76.715,37.812,84.981,45.49,88.612,49.24C83.235,54.795,67.7,68.969,49.241,68.969z"/>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g></svg>'),
      (this.invisible =
        '<svg\nversion="1.1"\nid="Capa_1"\nx="0px"\ny="0px"\nviewBox="0 0 98.48 98.481"\nstyle="enable-background:new 0 0 98.48 98.481;"\nxml:space="preserve"\nsodipodi:docname="invisible.svg"\ninkscape:version="1.1 (c68e22c387, 2021-05-23)"\nxmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\nxmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\nxmlns="http://www.w3.org/2000/svg"\nxmlns:svg="http://www.w3.org/2000/svg"><defs\nid="defs45" /><sodipodi:namedview\nid="namedview43"\npagecolor="#ffffff"\nbordercolor="#666666"\nborderopacity="1.0"\ninkscape:pageshadow="2"\ninkscape:pageopacity="0.0"\ninkscape:pagecheckerboard="0"\nshowgrid="false"\ninkscape:zoom="2.9869357"\ninkscape:cx="4.8544735"\ninkscape:cy="41.346722"\ninkscape:window-width="1920"\ninkscape:window-height="1017"\ninkscape:window-x="-8"\ninkscape:window-y="-8"\ninkscape:window-maximized="1"\ninkscape:current-layer="g8" />\n<g\nid="g10">\n<g\nid="g8">\n \n \n <g\nid="g843"><path\n  d="M69.322,44.716L49.715,64.323C60.438,64.072,69.071,55.438,69.322,44.716z"\n  id="path2" /><path\n  d="M97.204,45.789c-0.449-0.529-6.245-7.23-15.402-13.554l-6.2,6.2c5.99,3.954,10.559,8.275,13.011,10.806    C83.235,54.795,67.7,68.969,49.241,68.969c-1.334,0-2.651-0.082-3.952-0.222l-7.439,7.438c3.639,0.91,7.449,1.451,11.391,1.451    c26.426,0,47.098-23.927,47.964-24.946C98.906,50.692,98.906,47.79,97.204,45.789z"\n  id="path4" /><path\n  d="M90.651,15.901c0-0.266-0.104-0.52-0.293-0.707l-7.071-7.07c-0.391-0.391-1.022-0.391-1.414,0L66.045,23.952    c-5.202-1.893-10.855-3.108-16.804-3.108c-26.427,0-47.098,23.926-47.965,24.946c-1.701,2-1.701,4.902,0.001,6.903    c0.517,0.606,8.083,9.354,19.707,16.319l-12.86,12.86c-0.188,0.188-0.293,0.441-0.293,0.707c0,0.267,0.105,0.521,0.293,0.707    l7.071,7.07c0.195,0.194,0.451,0.293,0.707,0.293c0.256,0,0.512-0.099,0.707-0.293l73.75-73.75    C90.546,16.421,90.651,16.167,90.651,15.901z M9.869,49.241C13.5,45.49,21.767,37.812,32.436,33.22    c-2.081,3.166-3.301,6.949-3.301,11.021c0,4.665,1.601,8.945,4.27,12.352l-6.124,6.123C19.129,58.196,12.89,52.361,9.869,49.241z"\n  id="path6" /></g>\n</g>\n</g>\n<g\nid="g12">\n</g>\n<g\nid="g14">\n</g>\n<g\nid="g16">\n</g>\n<g\nid="g18">\n</g>\n<g\nid="g20">\n</g>\n<g\nid="g22">\n</g>\n<g\nid="g24">\n</g>\n<g\nid="g26">\n</g>\n<g\nid="g28">\n</g>\n<g\nid="g30">\n</g>\n<g\nid="g32">\n</g>\n<g\nid="g34">\n</g>\n<g\nid="g36">\n</g>\n<g\nid="g38">\n</g>\n<g\nid="g40">\n</g></svg>'),
      (this.mouse =
        '<svg\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 260.366 260.366"\n  style="enable-background:new 0 0 260.366 260.366;"\n  xml:space="preserve"\n  sodipodi:docname="arrow-svgrepo-com.svg"\n  inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:svg="http://www.w3.org/2000/svg"><defs\n  id="defs37" /><sodipodi:namedview\n  id="namedview35"\n  pagecolor="#ffffff"\n  bordercolor="#666666"\n  borderopacity="1.0"\n  inkscape:pageshadow="2"\n  inkscape:pageopacity="0.0"\n  inkscape:pagecheckerboard="0"\n  showgrid="false"\n  inkscape:zoom="3.2339092"\n  inkscape:cx="130.183"\n  inkscape:cy="130.33761"\n  inkscape:window-width="1920"\n  inkscape:window-height="1027"\n  inkscape:window-x="-8"\n  inkscape:window-y="-8"\n  inkscape:window-maximized="1"\n  inkscape:current-layer="Capa_1" />\n  <path\n  d="M255.972,189.463l-47.347-47.348l41.082-41.082c3.675-3.675,5.186-8.989,3.993-14.047c-1.191-5.059-4.917-9.14-9.846-10.786  L19.754,1.316c-5.393-1.804-11.341-0.401-15.36,3.62c-4.021,4.021-5.422,9.968-3.62,15.36l74.885,224.101  c1.646,4.929,5.728,8.654,10.786,9.846c5.053,1.193,10.371-0.317,14.047-3.993l42.165-42.165l47.348,47.347  c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394l44.755-44.755C261.83,204.819,261.83,195.321,255.972,189.463z   M200.611,223.612l-47.348-47.347c-2.929-2.929-6.768-4.394-10.606-4.394s-7.678,1.465-10.606,4.394l-35.624,35.624L38.752,39.294  l172.595,57.674l-34.541,34.541c-5.858,5.857-5.858,15.355,0,21.213l47.347,47.348L200.611,223.612z"\n  id="path2"\n  style="fill:#000000;fill-opacity:1" />\n  <g\n  id="g4">\n  </g>\n  <g\n  id="g6">\n  </g>\n  <g\n  id="g8">\n  </g>\n  <g\n  id="g10">\n  </g>\n  <g\n  id="g12">\n  </g>\n  <g\n  id="g14">\n  </g>\n  <g\n  id="g16">\n  </g>\n  <g\n  id="g18">\n  </g>\n  <g\n  id="g20">\n  </g>\n  <g\n  id="g22">\n  </g>\n  <g\n  id="g24">\n  </g>\n  <g\n  id="g26">\n  </g>\n  <g\n  id="g28">\n  </g>\n  <g\n  id="g30">\n  </g>\n  <g\n  id="g32">\n  </g>\n  <path\n  style="fill:#000000;fill-opacity:1;stroke-width:38.318;stroke-linecap:round;stroke:#000000;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"\n  d="m 176.25727,198.8633 c -23.68772,-23.64674 -24.49906,-24.41991 -26.7503,-25.49175 -4.55216,-2.16733 -9.11388,-2.17055 -13.60334,-0.01 -2.22046,1.06878 -3.10891,1.90403 -20.87257,19.62262 L 96.477662,211.49087 67.898364,125.92225 C 52.17975,78.859514 39.258366,40.178943 39.184177,39.965428 39.077696,39.658977 210.191,96.551715 210.7197,96.998548 c 0.0763,0.06445 -7.87234,8.148712 -17.66356,17.965012 -11.29533,11.32428 -18.11231,18.38875 -18.65061,19.32772 -2.62177,4.57321 -2.71438,10.25944 -0.24786,15.21817 0.59716,1.20053 6.23919,7.02408 25.242,26.05407 l 24.47294,24.50796 -11.59335,11.5891 -11.59335,11.58911 z"\n  id="path1252" /></svg>'),
      (this.nomouse =
        '<svg\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 260.366 260.366"\n  style="enable-background:new 0 0 260.366 260.366;"\n  xml:space="preserve"\n  sodipodi:docname="noarrow.svg"\n  inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:svg="http://www.w3.org/2000/svg"><defs\n  id="defs37" /><sodipodi:namedview\n  id="namedview35"\n  pagecolor="#ffffff"\n  bordercolor="#666666"\n  borderopacity="1.0"\n  inkscape:pageshadow="2"\n  inkscape:pageopacity="0.0"\n  inkscape:pagecheckerboard="0"\n  showgrid="false"\n  inkscape:zoom="3.2339092"\n  inkscape:cx="148.11795"\n  inkscape:cy="169.91819"\n  inkscape:window-width="1920"\n  inkscape:window-height="1027"\n  inkscape:window-x="-8"\n  inkscape:window-y="-8"\n  inkscape:window-maximized="1"\n  inkscape:current-layer="Capa_1" />\n\n  <g\n  id="g4">\n  </g>\n  <g\n  id="g6">\n  </g>\n  <g\n  id="g8">\n  </g>\n  <g\n  id="g10">\n  </g>\n  <g\n  id="g12">\n  </g>\n  <g\n  id="g14">\n  </g>\n  <g\n  id="g16">\n  </g>\n  <g\n  id="g18">\n  </g>\n  <g\n  id="g20">\n  </g>\n  <g\n  id="g22">\n  </g>\n  <g\n  id="g24">\n  </g>\n  <g\n  id="g26">\n  </g>\n  <g\n  id="g28">\n  </g>\n  <g\n  id="g30">\n  </g>\n  <g\n  id="g32">\n  </g>\n  <rect\n  style="fill:#000000;stroke:#000000;stroke-width:46.339;stroke-linecap:round"\n  id="rect859"\n  width="0.74869555"\n  height="280.91412"\n  x="179.77588"\n  y="-127.59808"\n  rx="12.106069"\n  ry="12.080462"\n  transform="matrix(0.74419993,0.66795693,-0.68686231,0.72678756,0,0)" /><g\n  id="g1327"><path\n    d="M255.972,189.463l-47.347-47.348l41.082-41.082c3.675-3.675,5.186-8.989,3.993-14.047c-1.191-5.059-4.917-9.14-9.846-10.786  L19.754,1.316c-5.393-1.804-11.341-0.401-15.36,3.62c-4.021,4.021-5.422,9.968-3.62,15.36l74.885,224.101  c1.646,4.929,5.728,8.654,10.786,9.846c5.053,1.193,10.371-0.317,14.047-3.993l42.165-42.165l47.348,47.347  c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394l44.755-44.755C261.83,204.819,261.83,195.321,255.972,189.463z   M200.611,223.612l-47.348-47.347c-2.929-2.929-6.768-4.394-10.606-4.394s-7.678,1.465-10.606,4.394l-35.624,35.624L38.752,39.294  l172.595,57.674l-34.541,34.541c-5.858,5.857-5.858,15.355,0,21.213l47.347,47.348L200.611,223.612z"\n    id="path2"\n    style="fill:#000000;fill-opacity:1" /><path\n    style="fill:#000000;stroke:#000000;stroke-width:47.3953;stroke-linecap:round"\n    d="M 175.54224,197.81395 C 141.49161,163.76332 143.2267,163.93691 115.08233,191.76514 L 96.477662,210.16082 68.362417,125.87737 C 52.899031,79.521474 40.41104,41.430054 40.611324,41.22977 40.811607,41.029486 78.915195,53.517478 125.28596,68.980863 l 84.31049,28.115246 -17.78399,17.934951 c -19.09866,19.26078 -21.49193,23.16051 -19.17388,31.24308 0.79101,2.75809 8.75682,11.60498 25.8883,28.75178 l 24.74573,24.76783 -11.46147,11.41381 -11.46147,11.41382 z"\n    id="path1058" /></g></svg>'),
      (this.nolabel =
        '<svg\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 37.628 37.628"\n  style="enable-background:new 0 0 37.628 37.628;"\n  xml:space="preserve"\n  sodipodi:docname="nolabel.svg"\n  inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:svg="http://www.w3.org/2000/svg"><defs\n  id="defs39" /><sodipodi:namedview\n  id="namedview37"\n  pagecolor="#ffffff"\n  bordercolor="#666666"\n  borderopacity="1.0"\n  inkscape:pageshadow="2"\n  inkscape:pageopacity="0.0"\n  inkscape:pagecheckerboard="0"\n  showgrid="false"\n  inkscape:zoom="11.188477"\n  inkscape:cx="7.1502135"\n  inkscape:cy="14.523871"\n  inkscape:window-x="-8"\n  inkscape:window-y="-8"\n  inkscape:window-maximized="1"\n  inkscape:current-layer="Capa_1" />\n  <g\n  id="g4">\n  <path\n  d="M36.895,23.758L25.092,35.562c-0.488,0.487-1.128,0.731-1.77,0.731c-0.211,0-0.419-0.037-0.625-0.089   c0.418-0.107,0.815-0.315,1.145-0.644l11.803-11.804c0.979-0.977,0.979-2.56,0-3.534L17.488,2.067   c-0.333-0.333-0.752-0.546-1.199-0.651l0.243-0.043c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156   C37.872,21.199,37.872,22.782,36.895,23.758z M34.228,23.758L22.425,35.562c-0.488,0.487-1.128,0.731-1.77,0.731   c-0.64,0-1.279-0.244-1.768-0.731L0.732,17.405c-0.578-0.578-0.837-1.401-0.694-2.206L1.822,5.181   c0.184-1.031,0.992-1.839,2.023-2.023l10.019-1.784c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156   C35.206,21.199,35.206,22.782,34.228,23.758z M9.454,7.193c-0.985-1-2.595-1.012-3.595-0.027s-1.011,2.595-0.026,3.595   c0.985,0.999,2.594,1.012,3.594,0.026C10.426,9.802,10.438,8.192,9.454,7.193z"\n  id="path2" />\n  </g>\n  <g\n  id="g6">\n  </g>\n  <g\n  id="g8">\n  </g>\n  <g\n  id="g10">\n  </g>\n  <g\n  id="g12">\n  </g>\n  <g\n  id="g14">\n  </g>\n  <g\n  id="g16">\n  </g>\n  <g\n  id="g18">\n  </g>\n  <g\n  id="g20">\n  </g>\n  <g\n  id="g22">\n  </g>\n  <g\n  id="g24">\n  </g>\n  <g\n  id="g26">\n  </g>\n  <g\n  id="g28">\n  </g>\n  <g\n  id="g30">\n  </g>\n  <g\n  id="g32">\n  </g>\n  <g\n  id="g34">\n  </g>\n  <rect\n  style="fill:#000000;stroke:none;stroke-width:106.948;stroke-linecap:round"\n  id="rect1062"\n  width="6.4875011"\n  height="46.886227"\n  x="23.606146"\n  y="-23.715155"\n  rx="3.1189909"\n  ry="3.2421327"\n  transform="matrix(0.68940354,0.7243775,-0.72076393,0.69318061,0,0)" /></svg>\n  '),
      (this.label =
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 37.628 37.628" style="enable-background:new 0 0 37.628 37.628;"\n    xml:space="preserve">\n  <g>\n    <path d="M36.895,23.758L25.092,35.562c-0.488,0.487-1.128,0.731-1.77,0.731c-0.211,0-0.419-0.037-0.625-0.089\n      c0.418-0.107,0.815-0.315,1.145-0.644l11.803-11.804c0.979-0.977,0.979-2.56,0-3.534L17.488,2.067\n      c-0.333-0.333-0.752-0.546-1.199-0.651l0.243-0.043c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156\n      C37.872,21.199,37.872,22.782,36.895,23.758z M34.228,23.758L22.425,35.562c-0.488,0.487-1.128,0.731-1.77,0.731\n      c-0.64,0-1.279-0.244-1.768-0.731L0.732,17.405c-0.578-0.578-0.837-1.401-0.694-2.206L1.822,5.181\n      c0.184-1.031,0.992-1.839,2.023-2.023l10.019-1.784c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156\n      C35.206,21.199,35.206,22.782,34.228,23.758z M9.454,7.193c-0.985-1-2.595-1.012-3.595-0.027s-1.011,2.595-0.026,3.595\n      c0.985,0.999,2.594,1.012,3.594,0.026C10.426,9.802,10.438,8.192,9.454,7.193z"/>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  </svg>'),
      (this.surface =
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  viewBox="0 0 512.011 512.011" style="enable-background:new 0 0 512.011 512.011;" xml:space="preserve">\n<g>\n <g>\n   <g>\n     <path d="M9.881,188.672l234.667,149.333c3.499,2.219,7.488,3.328,11.456,3.328c3.989,0,7.957-1.109,11.456-3.328l234.667-149.333\n       c6.144-3.925,9.877-10.709,9.877-18.005c0-7.296-3.733-14.08-9.877-17.984L267.459,3.328c-6.997-4.437-15.915-4.437-22.912,0\n       L9.881,152.683c-6.144,3.904-9.877,10.688-9.877,17.984C0.003,177.963,3.737,184.747,9.881,188.672z"/>\n     <path d="M502.13,323.339l-66.069-42.048l-145.685,92.715c-10.347,6.549-22.208,10.005-34.368,10.005s-24.021-3.456-34.304-9.984\n       L75.954,281.291L9.885,323.339c-6.144,3.925-9.877,10.709-9.877,18.005c0,7.296,3.733,14.08,9.877,17.984l234.667,149.355\n       c3.499,2.219,7.467,3.328,11.456,3.328c3.968,0,7.957-1.109,11.456-3.328L502.13,359.328c6.144-3.904,9.877-10.688,9.877-17.984\n       C512.008,334.048,508.274,327.264,502.13,323.339z"/>\n   </g>\n </g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n'),
      (this.molecule =
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">\n<g>\n<g>\n <path d="M361.461,225.296c-11.33-8.988-20.694-20.332-27.358-33.296l-65.887,54.064c-13.889-11.727-30.673-20.423-49.582-24.736\n   c-25.298-5.773-51.19-3.108-74.431,7.392l-8.563-12.027c-9.292,11.086-21.341,19.775-35.083,25.021l8.225,11.553\n   c-15.352,15.449-26.146,34.892-31.11,56.652c-14.439,63.288,25.302,126.524,88.591,140.963c8.779,2.004,17.549,2.963,26.197,2.963\n   c53.687,0,102.329-37.047,114.765-91.554c6.672-29.25,1.752-58.479-11.697-82.894L361.461,225.296z M182.458,391.885\n   c-1.823,7.991-8.926,13.408-16.789,13.408c-1.27,0-2.56-0.142-3.85-0.437c-32.367-7.385-52.691-39.723-45.306-72.089\n   c2.117-9.281,11.358-15.09,20.638-12.971c9.281,2.117,15.088,11.358,12.971,20.638c-1.528,6.701-0.356,13.597,3.301,19.416\n   c3.657,5.82,9.363,9.867,16.063,11.396C178.768,373.364,184.575,382.605,182.458,391.885z"/>\n</g>\n</g>\n<g>\n<g>\n <path d="M443.878,60.382c-22.81-5.201-46.283-1.212-66.094,11.237c-19.81,12.451-33.586,31.87-38.789,54.68\n   c-10.744,47.09,18.826,94.14,65.917,104.884v0.001c6.533,1.49,13.057,2.203,19.492,2.203c39.947,0,76.139-27.565,85.393-68.122\n   C520.538,118.178,490.968,71.127,443.878,60.382z"/>\n</g>\n</g>\n<g>\n<g>\n <path d="M129.651,124.586c-9.977-15.877-25.542-26.918-43.824-31.088c-37.742-8.611-75.449,15.09-84.06,52.83\n   s15.088,75.449,52.828,84.059c5.236,1.195,10.466,1.767,15.622,1.767c32.016,0,61.022-22.092,68.438-54.597\n   C142.827,159.274,139.63,140.463,129.651,124.586z"/>\n</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>'),
      (this.change =
        '<svg\n  version="1.1"\n  id="Layer_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 512 512"\n  style="enable-background:new 0 0 512 512;"\n  xml:space="preserve"\n  sodipodi:docname="change.svg"\n  inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:svg="http://www.w3.org/2000/svg"><defs\n  id="defs47" /><sodipodi:namedview\n  id="namedview45"\n  pagecolor="#ffffff"\n  bordercolor="#666666"\n  borderopacity="1.0"\n  inkscape:pageshadow="2"\n  inkscape:pageopacity="0.0"\n  inkscape:pagecheckerboard="0"\n  showgrid="false"\n  inkscape:zoom="1"\n  inkscape:cx="226"\n  inkscape:cy="256.5"\n  inkscape:window-width="1920"\n  inkscape:window-height="1027"\n  inkscape:window-x="-8"\n  inkscape:window-y="-8"\n  inkscape:window-maximized="1"\n  inkscape:current-layer="Layer_1" />\n\n\n<g\n  id="g14">\n</g>\n<g\n  id="g16">\n</g>\n<g\n  id="g18">\n</g>\n<g\n  id="g20">\n</g>\n<g\n  id="g22">\n</g>\n<g\n  id="g24">\n</g>\n<g\n  id="g26">\n</g>\n<g\n  id="g28">\n</g>\n<g\n  id="g30">\n</g>\n<g\n  id="g32">\n</g>\n<g\n  id="g34">\n</g>\n<g\n  id="g36">\n</g>\n<g\n  id="g38">\n</g>\n<g\n  id="g40">\n</g>\n<g\n  id="g42">\n</g>\n<g\n  id="g1800"\n  transform="translate(-0.1537225,-4.3038075)"><path\n    style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:22.416;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"\n    d="m 102.46172,128.30302 76.00859,-76.010515 0.15658,38.005766 0.1566,38.005769 h 153.53462 153.53462 v 38.00475 38.00475 H 256.15293 26.453131 Z"\n    id="path1171" /><path\n    style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:22.416;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"\n    d="m 409.84573,392.3046 -76.00859,76.01051 -0.15658,-38.00576 -0.1566,-38.00577 H 179.98934 26.454715 V 354.29883 316.29408 H 256.15452 485.85431 Z"\n    id="path1796" /></g></svg>');
  }),
  ($3Dmol.UI.Form = (function () {
    function e(t, r) {
      t = t || {};
      var n = (this.ui = $("<div></div>")),
        i = $("<div></div>");
      i.text(r.key),
        i.css({
          "border-bottom": "1px solid black",
          "font-family": "Arial",
          "font-size": "14px",
          "font-weight": "bold",
          "padding-top": "2px",
          "padding-bottom": "4px",
        }),
        n.append(i),
        n.addClass("form");
      var o = (this.inputs = []);
      Object.keys(t).forEach((e) => {
        if (t[e].gui) {
          var r = new l(e, t[e].type);
          o.push(r), n.append(r.ui);
        }
      });
      this.update = function () {};
      var a = (e) => {};
      o.forEach((e) => {
        e.update = a;
      }),
        (this.getValue = function () {
          return (
            (r.value = {}),
            o.forEach((e) => {
              var t = e.getValue();
              t.active && (r.value[t.key] = t.value);
            }),
            r
          );
        });
      var s = function (e) {
        r.value[e.key] = control.value;
      };
      function l(r, n) {
        var i = (this.control = { value: null, type: n, key: r, active: !1 }),
          o = (this.ui = $("<div></div>"));
        if (
          ((this.placeholder = { ui: $("<div></div>") }),
          (this.active = new e.Checkbox({ value: !1, key: r })),
          "string" == t[r].type || "element" == t[r].type)
        )
          (this.placeholder = new e.Input(i)),
            this.placeholder.ui.attr("type", "text");
        else if ("number" == t[r].type) {
          var a = !1;
          null != t[r].min &&
            null != t[r].max &&
            null != t[r].default &&
            (a = !0),
            a
              ? ((i.min = t[r].min),
                (i.max = t[r].max),
                (i.default = t[r].default),
                (i.step = t[r].step || (i.max - i.max) / 1e3),
                (this.placeholder = new e.Slider(i)))
              : ((this.placeholder = new e.Input(i)),
                this.placeholder.ui.attr("type", "text"),
                this.placeholder.validateOnlyNumber(t[r].floatType));
        } else
          "array_range" == t[r].type
            ? ((this.placeholder = new e.Input(i)),
              this.placeholder.ui.attr("type", "text"),
              this.placeholder.validateInputRange())
            : "color" == t[r].type
            ? ((this.placeholder = new e.Color(i)),
              t[r].spectrum && this.placeholder.enableSpectrum())
            : "boolean" == t[r].type
            ? (this.placeholder = new e.Checkbox(i))
            : "properties" == t[r].type
            ? ((this.placeholder = new e.Input(i)),
              this.placeholder.ui.attr("type", "text"))
            : "colorscheme" == t[r].type
            ? ((this.placeholder = new e.ListInput(
                i,
                Object.keys($3Dmol.builtinColorSchemes)
              )),
              this.placeholder.ui.attr("type", "text"))
            : null == t[r].type
            ? t[r].validItems &&
              (this.placeholder = new e.ListInput(i, t[r].validItems))
            : "form" == t[r].type
            ? ((this.placeholder = new e(t[r].validItems, i)),
              this.placeholder.ui.append(
                $("<div></div>").css($3Dmol.defaultCSS.LinkBreak)
              ))
            : (this.placeholder = new e.EmptyElement(i));
        this.getValue = function () {
          return this.placeholder.getValue ? this.placeholder.getValue() : null;
        };
        var l = this.placeholder;
        "boolean" != n
          ? (l.ui.hide(),
            o.append(this.active.ui),
            (this.active.update = function (e) {
              e.value ? l.ui.show() : l.ui.hide(), (i.active = e.value);
            }))
          : (this.placeholder.update = function (e) {
              i.active = e.value;
            }),
          o.append(this.placeholder.ui),
          this.placeholder.onUpdate && this.placeholder.onUpdate(s);
      }
      (this.validate = function () {
        return (
          null ==
          o
            .map((e) => !e.active.getValue().value || e.placeholder.validate())
            .find((e) => 0 == e)
        );
      }),
        (this.setValue = function (e) {
          for (var t = Object.keys(e), n = 0; n < t.length; n++) {
            var i = o.find((e) => {
              if (e.control.key == t[n]) return e;
            });
            i.placeholder.setValue(e[t[n]]),
              i.active.setValue(!0),
              i.placeholder.ui.show(),
              (i.control.active = !0);
          }
          this.update(r);
          this.getValue();
        }),
        (this.getInputs = function () {
          return o;
        });
    }
    return (
      (e.Color = function (t) {
        var r = $("<div></div>");
        r.height(10),
          r.width(10),
          r.css("border-radius", "50%"),
          r.css("background", "red"),
          r.css("margin-right", "3px");
        var n = r.clone();
        n.css("background", "blue");
        var i = r.clone();
        i.css("background", "green");
        var o = (this.control = {
            R: { value: 0, min: 0, max: 255, label: r },
            G: { value: 0, min: 0, max: 255, label: i },
            B: { value: 0, min: 0, max: 255, label: n },
          }),
          a = (this.ui = $("<div></div>")),
          s = $("<div></div>");
        a.append(s);
        var l = { key: "Spectrum", value: null },
          c = new e.Checkbox(l);
        s.append(c.ui), c.ui.css({ "margin-left": "2px" });
        var u = new e.Slider(o.R),
          d = new e.Slider(o.G),
          h = new e.Slider(o.B),
          p = $("<div></div>");
        p.append(u.ui, d.ui, h.ui);
        var f = $("<div></div>");
        s.append(p),
          s.append(f),
          u.slide.css("color", "red"),
          d.slide.css("color", "green"),
          h.slide.css("color", "blue"),
          f.height(15),
          f.css("margin-top", "6px"),
          f.css("margin-bottom", "6px"),
          f.css("border", "1px solid grey"),
          f.css("border-radius", "500px"),
          (this.update = function (e) {});
        var m = this;
        function g(e) {
          e = `rgb(${o.R.value}, ${o.G.value}, ${o.B.value})`;
          f.css("background", e), (t.value = e), m.update(o);
        }
        (u.update = d.update = h.update = g),
          g(),
          (c.update = function (e) {
            p.toggle(),
              e.value
                ? (f.css({
                    background:
                      "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
                  }),
                  (t.value = "spectrum"))
                : g();
          }),
          (this.getValue = function () {
            return t;
          }),
          (this.validate = function () {
            return !0;
          }),
          (this.setValue = function (e) {
            "spectrum" == e &&
              (c.setValue(!0), c.update(l), p.hide(), (t.value = "spectrum"));
          }),
          c.ui.hide(),
          (this.enableSpectrum = function () {
            c.ui.show();
          });
      }),
      (e.ListInput = function (e, t) {
        var r = (this.ui = $("<div></div>")),
          n = $("<div></div>"),
          i = t;
        r.append(n);
        var o = $("<select></select>");
        o.css($3Dmol.defaultCSS.ListInput.select), n.append(o);
        this.showAlertBox = !0;
        var a = $("<div></div>");
        a.text("Please select some value"),
          a.css({
            color: "crimson",
            "font-family": "Arial",
            "font-weight": "bold",
            "font-size": "10px",
          }),
          a.hide(),
          n.append(a),
          (this.update = function (e) {}),
          o.on("click", { parent: this }, (t) => {
            (e.value = o.children("option:selected").val()),
              t.data.parent.update(e);
          }),
          (this.getValue = () => e),
          (this.validate = function () {
            return "select" == e.value || null == e.value
              ? (this.showAlertBox && a.show(),
                o.css({ "box-shadow": "0px 0px 2px red" }),
                !1)
              : (a.hide(), n.css({ "box-shadow": "none" }), !0);
          }),
          (this.setValue = function (r) {
            -1 != t.indexOf(r)
              ? (o.empty(),
                $("<option></option>").text("select"),
                i.forEach((e) => {
                  var t = $("<option></option>");
                  t.text(e),
                    t.attr("value", e),
                    o.append(t),
                    r == e && t.prop("selected", !0);
                }),
                (e.value = o.children("option:selected").val()))
              : console.error("UI::Form::ListInput:incorrect value", r);
          }),
          (this.updateList = function (e) {
            o.empty();
            var t = $("<option></option>");
            t.text("select"),
              t.attr("value", "select"),
              o.append(t),
              (i = e).forEach((e) => {
                var t = $("<option></option>");
                t.text(e), t.attr("value", e), o.append(t);
              });
          }),
          this.updateList(i);
      }),
      (e.Input = function (e) {
        var t = (this.ui = $("<div></div>")),
          r = $("<div></div>");
        t.append(r);
        var n = (this.validationType = "text");
        t.css({ width: "100%", "box-sizing": "border-box" });
        var i = (this.domElement = $('<input type="text">'));
        r.append(i);
        var o = $("<div></div>");
        o.css({
          border: "1px solid darkred",
          "border-radius": "3px",
          "font-family": "Arial",
          "font-size": "10px",
          "font-weight": "bold",
          margin: "2px",
          "margin-left": "4px",
          padding: "2px",
          color: "darkred",
          background: "lightcoral",
        });
        var a = "Invalid input please check the value entered";
        r.append(o),
          o.hide(),
          (this.setWidth = function (e) {
            i.width(e - 6);
          }),
          this.setWidth(75),
          i.css({}),
          (this.update = function (e) {}),
          i.on("change", { parent: this, control: e }, (t) => {
            (inputString = i.val()),
              "," == inputString[inputString.length - 1] &&
                (inputString = inputString.slice(0, -1)),
              (e.value = "range" == n ? inputString.split(",") : inputString),
              t.data.parent.update(e);
          });
        i.on("select", (e) => {
          i.val().substring(e.target.selectionStart, e.target.selectionEnd);
        }),
          (this.getValue = () => e);
        var s = (this.error = function (e) {
          o.show(), o.text(e);
        });
        function l(e, t = !1) {
          "," == (e = e.replaceAll(" ", ""))[e.length - 1] &&
            (e = e.slice(0, -1));
          var r = e.split(",");
          return (
            !/,,/g.exec(e) &&
            !isNaN(parseInt(r[0])) &&
            null ==
              r
                .map((e) =>
                  (function (e, t = !1) {
                    var r = e.split("-");
                    return (
                      !(r.length > 2) &&
                      (0 == r.length ||
                        (1 == r.length
                          ? !isNaN(parseInt(r[0]))
                          : 2 == r.length &&
                            !isNaN(parseInt(r[0])) &&
                            !isNaN(parseInt(r[1]))))
                    );
                  })(e)
                )
                .find((e) => 0 == e)
          );
        }
        this.setValue = function (t) {
          if ("range" == n) {
            var r = t.join(",");
            i.val(r);
          } else i.val(t);
          e.value = t;
        };
        var c = (this.checkInput = function () {
          var e = i.val();
          return "number" == n
            ? (function () {
                var e = i.val();
                return "" == e.replaceAll(/[0-9]/g, "") && !isNaN(parseInt(e));
              })()
              ? (o.hide(), !0)
              : (s(a), !1)
            : "float" == n
            ? (function () {
                var e = i.val(),
                  t = e.match(/\./g) || [],
                  r = e.replaceAll(/\./g, "").replaceAll(/[0-9]/g, "");
                return !(t.length > 1) && "" == r && !isNaN(parseFloat(e));
              })()
              ? (o.hide(), !0)
              : (s(a), !1)
            : "range" != n ||
              ((function (e) {
                return (
                  "" ==
                  e
                    .replaceAll(",", "")
                    .replaceAll("-", "")
                    .replaceAll(/[0-9]/g, "")
                    .replaceAll(" ", "")
                );
              })(e) && l(e)
                ? (o.hide(), !0)
                : (s(a), !1));
        });
        (this.validateOnlyNumber = function (e = !1) {
          (n = e ? "float" : "number"),
            i.on("keydown keyup paste cut", function (e) {
              c();
            });
        }),
          (this.validateInputRange = function () {
            (n = "range"),
              i.on("keydown keyup paste cut", () => {
                c();
              });
          }),
          (this.isEmpty = function () {
            if ("" == e.value) return !0;
          }),
          (this.validate = function () {
            return (1 == e.active && null != e.value && "" != e.value && c()) ||
              0 == e.active
              ? (i.css("box-shadow", "none"), !0)
              : (i.css("box-shadow", "0px 0px 2px red"), !1);
          }),
          i.css($3Dmol.defaultCSS.Input.input),
          r.css($3Dmol.defaultCSS.Input.boundingBox);
      }),
      (e.Checkbox = function (e) {
        var t = $("<div></div>");
        t.text(e.key), t.css($3Dmol.defaultCSS.TextDefault);
        var r = (this.ui = $("<div></div>")),
          n = $("<div></div>");
        r.append(n), r.append(t);
        var i = $('<input type="checkbox" />');
        n.append(i),
          (this.click = () => {}),
          (this.update = function (e) {}),
          (this.getValue = () => e),
          i.on("click", { parent: this }, (t) => {
            (e.value = i.prop("checked")), t.data.parent.update(e);
          }),
          t.css("display", "inline-block"),
          n.css("display", "inline-block"),
          (this.validate = function () {
            return !0;
          }),
          (this.setValue = function (t) {
            i.prop("checked", t), this.update(e), (e.value = t);
          });
      }),
      (e.Slider = function (e, t = {}) {
        var r = (this.ui = $("<div></div>")),
          n = $("<div></div>");
        r.append(n), n.css("display", "flex");
        var i = (this.slide = $('<input type="range">'));
        i.css("width", "100%");
        var o = e.min || 0,
          a = e.max || 100,
          s = e.step || 1,
          l = e.default || o,
          c = e.label || "",
          u = $("<div></div>");
        u.append(c),
          n.append(u),
          i.attr("min", o),
          i.attr("max", a),
          i.attr("step", s),
          i.attr("value", l),
          (e.value = l),
          n.append(i);
        var d = !1;
        (this.update = function (e) {}),
          (this.getValue = () => e),
          i.on("mousedown", () => {
            d = !0;
          }),
          i.on("mousemove", { parent: this }, (t) => {
            d && ((e.value = i.val()), t.data.parent.update(e));
          }),
          i.on("mouseup", () => {
            d = !1;
          }),
          n.css("align-items", "center"),
          n.height("21px"),
          i.css("padding", "0px"),
          i.css("margin", "0px"),
          (this.validate = function () {
            return !0;
          }),
          (this.setValue = function (t) {
            slider.val(t), (e.value = slider.val());
          });
      }),
      (e.EmptyElement = function (e) {
        this.ui = $("<div></div>");
        (this.onUpdate = (e) => {
          e;
        }),
          (this.getValue = () => e),
          (this.validate = function () {
            return !0;
          });
      }),
      e
    );
  })()),
  ($3Dmol.labelStyles = {
    purple: { backgroundColor: 8388736, backgroundOpacity: 0.8 },
    milk: {
      font: "Arial",
      fontSize: 12,
      fontColor: $3Dmol.htmlColors.black,
      borderThickness: 1,
      borderColor: $3Dmol.htmlColors.azure,
      backgroundColor: $3Dmol.htmlColors.aliceblue,
      backgroundOpacity: 0.9,
    },
    blue: {
      font: "Arial",
      fontSize: 12,
      fontColor: $3Dmol.htmlColors.aliceblue,
      borderThickness: 1,
      borderColor: $3Dmol.htmlColors.darkviolet,
      backgroundColor: $3Dmol.htmlColors.darkblue,
      backgroundOpacity: 0.9,
    },
    chocolate: {
      font: "Arial",
      fontSize: 12,
      fontColor: $3Dmol.htmlColors.aliceblue,
      borderThickness: 1,
      borderColor: $3Dmol.htmlColors.brown,
      backgroundColor: $3Dmol.htmlColors.chocolate,
      backgroundOpacity: 0.9,
    },
    lime: {
      font: "Arial",
      fontSize: 12,
      fontColor: $3Dmol.htmlColors.black,
      borderThickness: 1,
      borderColor: $3Dmol.htmlColors.lightgreen,
      backgroundColor: $3Dmol.htmlColors.lime,
      backgroundOpacity: 0.9,
    },
    rose: {
      font: "Arial",
      fontSize: 12,
      fontColor: $3Dmol.htmlColors.black,
      borderThickness: 1,
      borderColor: $3Dmol.htmlColors.mintcream,
      backgroundColor: $3Dmol.htmlColors.mistyrose,
      backgroundOpacity: 0.9,
    },
    yellow: {
      font: "Arial",
      fontSize: 12,
      fontColor: $3Dmol.htmlColors.black,
      borderThickness: 1,
      borderColor: $3Dmol.htmlColors.orange,
      backgroundColor: $3Dmol.htmlColors.yellow,
      backgroundOpacity: 0.9,
    },
  }),
  ($3Dmol.longPressDuration = 1500),
  ($3Dmol.defaultCSS = {
    ListInput: {
      select: {
        width: "auto",
        border: "none",
        margin: "0px",
        "font-family": "Arial",
        padding: "0px",
        height: "20px",
        "border-radius": "4px",
        "box-sizing": "border-box",
      },
    },
    Input: {
      input: {
        "margin-bottom": "0px",
        padding: "0px",
        "border-radius": "4px",
        "font-family": "Arial",
        width: "96%",
      },
      boundingBox: { "margin-left": "4px", "margin-right": "" },
    },
    Checkbox: {},
    Slider: {},
    Color: {},
    TextDefault: { "font-family": "Arial", "margin-left": "4px" },
    LinkBreak: { height: "3px", "border-bottom": "1px solid #687193" },
  });
