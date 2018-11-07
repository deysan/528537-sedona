! function (e) {
  var t, i, s, r, n, c, a, u = navigator.userAgent;
  e.HTMLPictureElement && /ecko/.test(u) && u.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (i = document.createElement("source"), s = function (e) {
    var t, s, r = e.parentNode;
    "PICTURE" === r.nodeName.toUpperCase() ? (t = i.cloneNode(), r.insertBefore(t, r.firstElementChild), setTimeout(function () {
      r.removeChild(t)
    })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, s = e.sizes, e.sizes += ",100vw", setTimeout(function () {
      e.sizes = s
    }))
  }, r = function () {
    var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
    for (e = 0; e < t.length; e++) s(t[e])
  }, n = function () {
    clearTimeout(t), t = setTimeout(r, 99)
  }, c = e.matchMedia && matchMedia("(orientation: landscape)"), a = function () {
    n(), c && c.addListener && c.addListener(n)
  }, i.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), n))
}(window),
function (e, n, o) {
  "use strict";

  function m(e) {
    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
  }

  function y(e, t) {
    return e.res - t.res
  }

  function b(e, t) {
    var s, r, i;
    if (e && t)
      for (i = T.parseSet(t), e = T.makeUrl(e), s = 0; s < i.length; s++)
        if (e === T.makeUrl(i[s].url)) {
          r = i[s];
          break
        } return r
  }
  n.createElement("picture");
  var i, l, u, r, c, t, s, a, A, f, d, p, h, g, v, w, S, x, E, z, T = {},
    R = !1,
    C = function () {},
    D = n.createElement("img"),
    B = D.getAttribute,
    L = D.setAttribute,
    M = D.removeAttribute,
    P = n.documentElement,
    Q = {},
    U = {
      algorithm: ""
    },
    k = "data-pfsrc",
    I = k + "set",
    $ = navigator.userAgent,
    W = /rident/.test($) || /ecko/.test($) && $.match(/rv\:(\d+)/) && 35 < RegExp.$1,
    G = "currentSrc",
    H = /\s+\+?\d+(e\d+)?w/,
    F = /(\([^)]+\))?\s*(.+)/,
    N = e.picturefillCFG,
    O = "font-size:100%!important;",
    q = !0,
    j = {},
    V = {},
    J = e.devicePixelRatio,
    K = {
      px: 1,
      in: 96
    },
    _ = n.createElement("a"),
    X = !1,
    Y = /^[ \t\n\r\u000c]+/,
    Z = /^[, \t\n\r\u000c]+/,
    ee = /^[^ \t\n\r\u000c]+/,
    te = /[,]+$/,
    se = /^\d+$/,
    re = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
    ie = function (e, t, s, r) {
      e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s)
    },
    ne = function (t) {
      var s = {};
      return function (e) {
        return e in s || (s[e] = t(e)), s[e]
      }
    },
    ce = (r = /^([\d\.]+)(em|vw|px)$/, c = ne(function (e) {
      return "return " + function () {
        for (var e = arguments, t = 0, s = e[0]; ++t in e;) s = s.replace(e[t], e[++t]);
        return s
      }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
    }), function (e, t) {
      var s;
      if (!(e in j))
        if (j[e] = !1, t && (s = e.match(r))) j[e] = s[1] * K[s[2]];
        else try {
          j[e] = new Function("e", c(e))(K)
        } catch (e) {}
      return j[e]
    }),
    ae = function (e, t) {
      return e.w ? (e.cWidth = T.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
    },
    ue = function (e) {
      if (R) {
        var t, s, r, i = e || {};
        if (i.elements && 1 === i.elements.nodeType && ("IMG" === i.elements.nodeName.toUpperCase() ? i.elements = [i.elements] : (i.context = i.elements, i.elements = null)), r = (t = i.elements || T.qsa(i.context || n, i.reevaluate || i.reselect ? T.sel : T.selShort)).length) {
          for (T.setupRun(i), X = !0, s = 0; s < r; s++) T.fillImg(t[s], i);
          T.teardownRun(i)
        }
      }
    };
  e.console && console.warn, G in D || (G = "src"), Q["image/jpeg"] = !0, Q["image/gif"] = !0, Q["image/png"] = !0, Q["image/svg+xml"] = n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), T.ns = ("pf" + (new Date).getTime()).substr(0, 9), T.supSrcset = "srcset" in D, T.supSizes = "sizes" in D, T.supPicture = !!e.HTMLPictureElement, T.supSrcset && T.supPicture && !T.supSizes && (x = n.createElement("img"), D.srcset = "data:,a", x.src = "data:,a", T.supSrcset = D.complete === x.complete, T.supPicture = T.supSrcset && T.supPicture), T.supSrcset && !T.supSizes ? (v = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", S = function () {
    2 === w.width && (T.supSizes = !0), l = T.supSrcset && !T.supSizes, R = !0, setTimeout(ue)
  }, (w = n.createElement("img")).onload = S, w.onerror = S, w.setAttribute("sizes", "9px"), w.srcset = v + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", w.src = v) : R = !0, T.selShort = "picture>img,img[srcset]", T.sel = T.selShort, T.cfg = U, T.DPR = J || 1, T.u = K, T.types = Q, T.setSize = C, T.makeUrl = ne(function (e) {
    return _.href = e, _.href
  }), T.qsa = function (e, t) {
    return "querySelector" in e ? e.querySelectorAll(t) : []
  }, T.matchesMedia = function () {
    return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? T.matchesMedia = function (e) {
      return !e || matchMedia(e).matches
    } : T.matchesMedia = T.mMQ, T.matchesMedia.apply(this, arguments)
  }, T.mMQ = function (e) {
    return !e || ce(e)
  }, T.calcLength = function (e) {
    var t = ce(e, !0) || !1;
    return t < 0 && (t = !1), t
  }, T.supportsType = function (e) {
    return !e || Q[e]
  }, T.parseSize = ne(function (e) {
    var t = (e || "").match(F);
    return {
      media: t && t[1],
      length: t && t[2]
    }
  }), T.parseSet = function (e) {
    return e.cands || (e.cands = function (r, A) {
      function e(e) {
        var t, s = e.exec(r.substring(u));
        return s ? (t = s[0], u += t.length, t) : void 0
      }

      function t() {
        var e, t, s, r, i, n, c, a, u, o = !1,
          l = {};
        for (r = 0; r < d.length; r++) n = (i = d[r])[i.length - 1], c = i.substring(0, i.length - 1), a = parseInt(c, 10), u = parseFloat(c), se.test(c) && "w" === n ? ((e || t) && (o = !0), 0 === a ? o = !0 : e = a) : re.test(c) && "x" === n ? ((e || t || s) && (o = !0), u < 0 ? o = !0 : t = u) : se.test(c) && "h" === n ? ((s || t) && (o = !0), 0 === a ? o = !0 : s = a) : o = !0;
        o || (l.url = f, e && (l.w = e), t && (l.d = t), s && (l.h = s), s || t || e || (l.d = 1), 1 === l.d && (A.has1x = !0), l.set = A, p.push(l))
      }

      function s() {
        for (e(Y), i = "", n = "in descriptor";;) {
          if (c = r.charAt(u), "in descriptor" === n)
            if (m(c)) i && (d.push(i), i = "", n = "after descriptor");
            else {
              if ("," === c) return u += 1, i && d.push(i), void t();
              if ("(" === c) i += c, n = "in parens";
              else {
                if ("" === c) return i && d.push(i), void t();
                i += c
              }
            }
          else if ("in parens" === n)
            if (")" === c) i += c, n = "in descriptor";
            else {
              if ("" === c) return d.push(i), void t();
              i += c
            }
          else if ("after descriptor" === n)
            if (m(c));
            else {
              if ("" === c) return void t();
              n = "in descriptor", u -= 1
            } u += 1
        }
      }
      for (var f, d, i, n, c, a = r.length, u = 0, p = [];;) {
        if (e(Z), a <= u) return p;
        f = e(ee), d = [], "," === f.slice(-1) ? (f = f.replace(te, ""), t()) : s()
      }
    }(e.srcset, e)), e.cands
  }, T.getEmValue = function () {
    var e;
    if (!i && (e = n.body)) {
      var t = n.createElement("div"),
        s = P.style.cssText,
        r = e.style.cssText;
      t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", P.style.cssText = O, e.style.cssText = O, e.appendChild(t), i = t.offsetWidth, e.removeChild(t), i = parseFloat(i, 10), P.style.cssText = s, e.style.cssText = r
    }
    return i || 16
  }, T.calcListLength = function (l) {
    if (!(l in V) || U.uT) {
      var e = T.calcLength(function (e) {
        var t, s, r, i, n, c, a, u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
          o = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (r = (s = function (e) {
            function t() {
              i && (n.push(i), i = "")
            }

            function s() {
              n[0] && (c.push(n), n = [])
            }
            for (var r, i = "", n = [], c = [], a = 0, u = 0, o = !1;;) {
              if ("" === (r = e.charAt(u))) return t(), s(), c;
              if (o) {
                if ("*" === r && "/" === e[u + 1]) {
                  o = !1, u += 2, t();
                  continue
                }
                u += 1
              } else {
                if (m(r)) {
                  if (e.charAt(u - 1) && m(e.charAt(u - 1)) || !i) {
                    u += 1;
                    continue
                  }
                  if (0 === a) {
                    t(), u += 1;
                    continue
                  }
                  r = " "
                } else if ("(" === r) a += 1;
                else if (")" === r) a -= 1;
                else {
                  if ("," === r) {
                    t(), s(), u += 1;
                    continue
                  }
                  if ("/" === r && "*" === e.charAt(u + 1)) {
                    o = !0, u += 2;
                    continue
                  }
                }
                i += r, u += 1
              }
            }
          }(l)).length, t = 0; t < r; t++)
          if (a = n = (i = s[t])[i.length - 1], u.test(a) && 0 <= parseFloat(a) || o.test(a) || "0" === a || "-0" === a || "+0" === a) {
            if (c = n, i.pop(), 0 === i.length) return c;
            if (i = i.join(" "), T.matchesMedia(i)) return c
          } return "100vw"
      }());
      V[l] = e || K.width
    }
    return V[l]
  }, T.setRes = function (e) {
    var t;
    if (e)
      for (var s = 0, r = (t = T.parseSet(e)).length; s < r; s++) ae(t[s], e.sizes);
    return t
  }, T.setRes.res = ae, T.applySetCandidate = function (e, t) {
    if (e.length) {
      var s, r, i, n, c, a, u, o, l, A = t[T.ns],
        f = T.DPR;
      if (a = A.curSrc || t[G], (u = A.curCan || (w = t, S = a, !(x = e[0].set) && S && (x = (x = w[T.ns].sets) && x[x.length - 1]), (E = b(S, x)) && (S = T.makeUrl(S), w[T.ns].curSrc = S, (w[T.ns].curCan = E).res || ae(E, E.set.sizes)), E)) && u.set === e[0].set && ((l = W && !t.complete && u.res - .1 > f) || (u.cached = !0, u.res >= f && (c = u))), !c)
        for (e.sort(y), c = e[(n = e.length) - 1], r = 0; r < n; r++)
          if ((s = e[r]).res >= f) {
            c = e[i = r - 1] && (l || a !== T.makeUrl(s.url)) && (d = e[i].res, p = s.res, m = f, h = e[i].cached, v = g = void 0, m < ("saveData" === U.algorithm ? 2.7 < d ? m + 1 : (v = (p - m) * (g = Math.pow(d - .6, 1.5)), h && (v += .1 * g), d + v) : 1 < m ? Math.sqrt(d * p) : d)) ? e[i] : s;
            break
          } c && (o = T.makeUrl(c.url), A.curSrc = o, A.curCan = c, o !== a && T.setSrc(t, c), T.setSize(t))
    }
    var d, p, m, h, g, v, w, S, x, E
  }, T.setSrc = function (e, t) {
    var s;
    e.src = t.url, "image/svg+xml" === t.set.type && (s = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = s))
  }, T.getSet = function (e) {
    var t, s, r, i = !1,
      n = e[T.ns].sets;
    for (t = 0; t < n.length && !i; t++)
      if ((s = n[t]).srcset && T.matchesMedia(s.media) && (r = T.supportsType(s.type))) {
        "pending" === r && (s = r), i = s;
        break
      } return i
  }, T.parseSets = function (e, t, s) {
    var r, i, n, c, a = t && "PICTURE" === t.nodeName.toUpperCase(),
      u = e[T.ns];
    (u.src === o || s.src) && (u.src = B.call(e, "src"), u.src ? L.call(e, k, u.src) : M.call(e, k)), (u.srcset === o || s.srcset || !T.supSrcset || e.srcset) && (r = B.call(e, "srcset"), u.srcset = r, c = !0), u.sets = [], a && (u.pic = !0, function (e, t) {
      var s, r, i, n, c = e.getElementsByTagName("source");
      for (s = 0, r = c.length; s < r; s++)(i = c[s])[T.ns] = !0, (n = i.getAttribute("srcset")) && t.push({
        srcset: n,
        media: i.getAttribute("media"),
        type: i.getAttribute("type"),
        sizes: i.getAttribute("sizes")
      })
    }(t, u.sets)), u.srcset ? (i = {
      srcset: u.srcset,
      sizes: B.call(e, "sizes")
    }, u.sets.push(i), (n = (l || u.src) && H.test(u.srcset || "")) || !u.src || b(u.src, i) || i.has1x || (i.srcset += ", " + u.src, i.cands.push({
      url: u.src,
      d: 1,
      set: i
    }))) : u.src && u.sets.push({
      srcset: u.src,
      sizes: null
    }), u.curCan = null, u.curSrc = o, u.supported = !(a || i && !T.supSrcset || n && !T.supSizes), c && T.supSrcset && !u.supported && (r ? (L.call(e, I, r), e.srcset = "") : M.call(e, I)), u.supported && !u.srcset && (!u.src && e.src || e.src !== T.makeUrl(u.src)) && (null === u.src ? e.removeAttribute("src") : e.src = u.src), u.parsed = !0
  }, T.fillImg = function (e, t) {
    var s, r, i, n, c, a = t.reselect || t.reevaluate;
    e[T.ns] || (e[T.ns] = {}), s = e[T.ns], (a || s.evaled !== u) && ((!s.parsed || t.reevaluate) && T.parseSets(e, e.parentNode, t), s.supported ? s.evaled = u : (r = e, c = !1, "pending" !== (n = T.getSet(r)) && (c = u, n && (i = T.setRes(n), T.applySetCandidate(i, r))), r[T.ns].evaled = c))
  }, T.setupRun = function () {
    (!X || q || J !== e.devicePixelRatio) && (q = !1, J = e.devicePixelRatio, j = {}, V = {}, T.DPR = J || 1, K.width = Math.max(e.innerWidth || 0, P.clientWidth), K.height = Math.max(e.innerHeight || 0, P.clientHeight), K.vw = K.width / 100, K.vh = K.height / 100, u = [K.height, K.width, J].join("-"), K.em = T.getEmValue(), K.rem = K.em)
  }, T.supPicture ? (ue = C, T.fillImg = C) : (d = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, p = function () {
    var e = n.readyState || "";
    h = setTimeout(p, "loading" === e ? 200 : 999), n.body && (T.fillImgs(), (t = t || d.test(e)) && clearTimeout(h))
  }, h = setTimeout(p, n.body ? 9 : 99), g = P.clientHeight, ie(e, "resize", (s = function () {
    q = Math.max(e.innerWidth || 0, P.clientWidth) !== K.width || P.clientHeight !== g, g = P.clientHeight, q && T.fillImgs()
  }, 99, f = function () {
    var e = new Date - A;
    e < 99 ? a = setTimeout(f, 99 - e) : (a = null, s())
  }, function () {
    A = new Date, a || (a = setTimeout(f, 99))
  })), ie(n, "readystatechange", p)), T.picturefill = ue, T.fillImgs = ue, T.teardownRun = C, ue._ = T, e.picturefillCFG = {
    pf: T,
    push: function (e) {
      var t = e.shift();
      "function" == typeof T[t] ? T[t].apply(T, e) : (U[t] = e[0], X && T.fillImgs({
        reselect: !0
      }))
    }
  };
  for (; N && N.length;) e.picturefillCFG.push(N.shift());
  e.picturefill = ue, "object" == typeof module && "object" == typeof module.exports ? module.exports = ue : "function" == typeof define && define.amd && define("picturefill", function () {
    return ue
  }), T.supPicture || (Q["image/webp"] = (E = "image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", (z = new e.Image).onerror = function () {
    Q[E] = !1, ue()
  }, z.onload = function () {
    Q[E] = 1 === z.width, ue()
  }, z.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", "pending"))
}(window, document);
