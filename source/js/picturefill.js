! function(e) {
  var t, i, s, r, n, c, a, u = navigator.userAgent;
  e.HTMLPictureElement && /ecko/.test(u) && u.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (i = document.createElement("source"), s = function(e) {
    var t, s, r = e.parentNode;
    "PICTURE" === r.nodeName.toUpperCase() ? (t = i.cloneNode(), r.insertBefore(t, r.firstElementChild), setTimeout(function() {
      r.removeChild(t)
    })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, s = e.sizes, e.sizes += ",100vw", setTimeout(function() {
      e.sizes = s
    }))
  }, r = function() {
    var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
    for (e = 0; e < t.length; e++) s(t[e])
  }, n = function() {
    clearTimeout(t), t = setTimeout(r, 99)
  }, c = e.matchMedia && matchMedia("(orientation: landscape)"), a = function() {
    n(), c && c.addListener && c.addListener(n)
  }, i.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), n))
}(window),
function(e, n, o) {
  "use strict";

  function l(e) {
    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
  }

  function E(e, t) {
    return e.res - t.res
  }

  function z(e, t) {
    var s, r, i;
    if (e && t)
      for (i = R.parseSet(t), e = R.makeUrl(e), s = 0; s < i.length; s++)
        if (e === R.makeUrl(i[s].url)) {
          r = i[s];
          break
        } return r
  }
  n.createElement("picture");
  var i, f, u, r, c, t, s, a, d, p, A, m, h, g, v, w, S, x, y, b, T, C, R = {},
    L = !1,
    M = function() {},
    P = n.createElement("img"),
    D = P.getAttribute,
    B = P.setAttribute,
    I = P.removeAttribute,
    U = n.documentElement,
    $ = {},
    k = {
      algorithm: ""
    },
    W = "data-pfsrc",
    Q = W + "set",
    G = navigator.userAgent,
    H = /rident/.test(G) || /ecko/.test(G) && G.match(/rv\:(\d+)/) && 35 < RegExp.$1,
    F = "currentSrc",
    N = /\s+\+?\d+(e\d+)?w/,
    O = /(\([^)]+\))?\s*(.+)/,
    q = e.picturefillCFG,
    j = "font-size:100%!important;",
    V = !0,
    _ = {},
    K = {},
    J = e.devicePixelRatio,
    X = {
      px: 1,
      in: 96
    },
    Y = n.createElement("a"),
    Z = !1,
    ee = /^[ \t\n\r\u000c]+/,
    te = /^[, \t\n\r\u000c]+/,
    se = /^[^ \t\n\r\u000c]+/,
    re = /[,]+$/,
    ie = /^\d+$/,
    ne = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
    ce = function(e, t, s, r) {
      e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s)
    },
    ae = function(t) {
      var s = {};
      return function(e) {
        return e in s || (s[e] = t(e)), s[e]
      }
    },
    ue = (r = /^([\d\.]+)(em|vw|px)$/, c = ae(function(e) {
      return "return " + function() {
        for (var e = arguments, t = 0, s = e[0]; ++t in e;) s = s.replace(e[t], e[++t]);
        return s
      }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
    }), function(e, t) {
      var s;
      if (!(e in _))
        if (_[e] = !1, t && (s = e.match(r))) _[e] = s[1] * X[s[2]];
        else try {
          _[e] = new Function("e", c(e))(X)
        } catch (e) {}
      return _[e]
    }),
    oe = function(e, t) {
      return e.w ? (e.cWidth = R.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
    },
    le = function(e) {
      if (L) {
        var t, s, r, i = e || {};
        if (i.elements && 1 === i.elements.nodeType && ("IMG" === i.elements.nodeName.toUpperCase() ? i.elements = [i.elements] : (i.context = i.elements, i.elements = null)), r = (t = i.elements || R.qsa(i.context || n, i.reevaluate || i.reselect ? R.sel : R.selShort)).length) {
          for (R.setupRun(i), Z = !0, s = 0; s < r; s++) R.fillImg(t[s], i);
          R.teardownRun(i)
        }
      }
    };
  e.console && console.warn, F in P || (F = "src"), $["image/jpeg"] = !0, $["image/gif"] = !0, $["image/png"] = !0, $["image/svg+xml"] = n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), R.ns = ("pf" + (new Date).getTime()).substr(0, 9), R.supSrcset = "srcset" in P, R.supSizes = "sizes" in P, R.supPicture = !!e.HTMLPictureElement, R.supSrcset && R.supPicture && !R.supSizes && (y = n.createElement("img"), P.srcset = "data:,a", y.src = "data:,a", R.supSrcset = P.complete === y.complete, R.supPicture = R.supSrcset && R.supPicture), R.supSrcset && !R.supSizes ? (w = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", S = n.createElement("img"), x = function() {
    2 === S.width && (R.supSizes = !0), f = R.supSrcset && !R.supSizes, L = !0, setTimeout(le)
  }, S.onload = x, S.onerror = x, S.setAttribute("sizes", "9px"), S.srcset = w + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", S.src = w) : L = !0, R.selShort = "picture>img,img[srcset]", R.sel = R.selShort, R.cfg = k, R.DPR = J || 1, R.u = X, R.types = $, R.setSize = M, R.makeUrl = ae(function(e) {
    return Y.href = e, Y.href
  }), R.qsa = function(e, t) {
    return "querySelector" in e ? e.querySelectorAll(t) : []
  }, R.matchesMedia = function() {
    return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? R.matchesMedia = function(e) {
      return !e || matchMedia(e).matches
    } : R.matchesMedia = R.mMQ, R.matchesMedia.apply(this, arguments)
  }, R.mMQ = function(e) {
    return !e || ue(e)
  }, R.calcLength = function(e) {
    var t = ue(e, !0) || !1;
    return t < 0 && (t = !1), t
  }, R.supportsType = function(e) {
    return !e || $[e]
  }, R.parseSize = ae(function(e) {
    var t = (e || "").match(O);
    return {
      media: t && t[1],
      length: t && t[2]
    }
  }), R.parseSet = function(e) {
    return e.cands || (e.cands = function(r, f) {
      function e(e) {
        var t, s = e.exec(r.substring(u));
        return s ? (t = s[0], u += t.length, t) : void 0
      }

      function t() {
        var e, t, s, r, i, n, c, a, u, o = !1,
          l = {};
        for (r = 0; r < p.length; r++) n = (i = p[r])[i.length - 1], c = i.substring(0, i.length - 1), a = parseInt(c, 10), u = parseFloat(c), ie.test(c) && "w" === n ? ((e || t) && (o = !0), 0 === a ? o = !0 : e = a) : ne.test(c) && "x" === n ? ((e || t || s) && (o = !0), u < 0 ? o = !0 : t = u) : ie.test(c) && "h" === n ? ((s || t) && (o = !0), 0 === a ? o = !0 : s = a) : o = !0;
        o || (l.url = d, e && (l.w = e), t && (l.d = t), s && (l.h = s), s || t || e || (l.d = 1), 1 === l.d && (f.has1x = !0), l.set = f, A.push(l))
      }

      function s() {
        for (e(ee), i = "", n = "in descriptor";;) {
          if (c = r.charAt(u), "in descriptor" === n)
            if (l(c)) i && (p.push(i), i = "", n = "after descriptor");
            else {
              if ("," === c) return u += 1, i && p.push(i), void t();
              if ("(" === c) i += c, n = "in parens";
              else {
                if ("" === c) return i && p.push(i), void t();
                i += c
              }
            }
          else if ("in parens" === n)
            if (")" === c) i += c, n = "in descriptor";
            else {
              if ("" === c) return p.push(i), void t();
              i += c
            }
          else if ("after descriptor" === n)
            if (l(c));
            else {
              if ("" === c) return void t();
              n = "in descriptor", u -= 1
            } u += 1
        }
      }
      for (var d, p, i, n, c, a = r.length, u = 0, A = [];;) {
        if (e(te), a <= u) return A;
        d = e(se), p = [], "," === d.slice(-1) ? (d = d.replace(re, ""), t()) : s()
      }
    }(e.srcset, e)), e.cands
  }, R.getEmValue = function() {
    var e;
    if (!i && (e = n.body)) {
      var t = n.createElement("div"),
        s = U.style.cssText,
        r = e.style.cssText;
      t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", U.style.cssText = j, e.style.cssText = j, e.appendChild(t), i = t.offsetWidth, e.removeChild(t), i = parseFloat(i, 10), U.style.cssText = s, e.style.cssText = r
    }
    return i || 16
  }, R.calcListLength = function(e) {
    if (!(e in K) || k.uT) {
      var t = R.calcLength(function(e) {
        var t, s, r, i, n, c, a, u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
          o = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (r = (s = function(e) {
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
                if (l(r)) {
                  if (e.charAt(u - 1) && l(e.charAt(u - 1)) || !i) {
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
          }(e)).length, t = 0; t < r; t++)
          if (n = (i = s[t])[i.length - 1], a = n, u.test(a) && 0 <= parseFloat(a) || o.test(a) || "0" === a || "-0" === a || "+0" === a) {
            if (c = n, i.pop(), 0 === i.length) return c;
            if (i = i.join(" "), R.matchesMedia(i)) return c
          } return "100vw"
      }(e));
      K[e] = t || X.width
    }
    return K[e]
  }, R.setRes = function(e) {
    var t;
    if (e)
      for (var s = 0, r = (t = R.parseSet(e)).length; s < r; s++) oe(t[s], e.sizes);
    return t
  }, R.setRes.res = oe, R.applySetCandidate = function(e, t) {
    if (e.length) {
      var s, r, i, n, c, a, u, o, l, f = t[R.ns],
        d = R.DPR;
      if (a = f.curSrc || t[F], (u = f.curCan || (w = t, S = a, !(x = e[0].set) && S && (x = (x = w[R.ns].sets) && x[x.length - 1]), (y = z(S, x)) && (S = R.makeUrl(S), w[R.ns].curSrc = S, (w[R.ns].curCan = y).res || oe(y, y.set.sizes)), y)) && u.set === e[0].set && ((l = H && !t.complete && u.res - .1 > d) || (u.cached = !0, u.res >= d && (c = u))), !c)
        for (e.sort(E), c = e[(n = e.length) - 1], r = 0; r < n; r++)
          if ((s = e[r]).res >= d) {
            c = e[i = r - 1] && (l || a !== R.makeUrl(s.url)) && (p = e[i].res, A = s.res, m = d, h = e[i].cached, v = g = void 0, m < ("saveData" === k.algorithm ? 2.7 < p ? m + 1 : (v = (A - m) * (g = Math.pow(p - .6, 1.5)), h && (v += .1 * g), p + v) : 1 < m ? Math.sqrt(p * A) : p)) ? e[i] : s;
            break
          } c && (o = R.makeUrl(c.url), f.curSrc = o, f.curCan = c, o !== a && R.setSrc(t, c), R.setSize(t))
    }
    var p, A, m, h, g, v, w, S, x, y
  }, R.setSrc = function(e, t) {
    var s;
    e.src = t.url, "image/svg+xml" === t.set.type && (s = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = s))
  }, R.getSet = function(e) {
    var t, s, r, i = !1,
      n = e[R.ns].sets;
    for (t = 0; t < n.length && !i; t++)
      if ((s = n[t]).srcset && R.matchesMedia(s.media) && (r = R.supportsType(s.type))) {
        "pending" === r && (s = r), i = s;
        break
      } return i
  }, R.parseSets = function(e, t, s) {
    var r, i, n, c, a = t && "PICTURE" === t.nodeName.toUpperCase(),
      u = e[R.ns];
    (u.src === o || s.src) && (u.src = D.call(e, "src"), u.src ? B.call(e, W, u.src) : I.call(e, W)), (u.srcset === o || s.srcset || !R.supSrcset || e.srcset) && (r = D.call(e, "srcset"), u.srcset = r, c = !0), u.sets = [], a && (u.pic = !0, function(e, t) {
      var s, r, i, n, c = e.getElementsByTagName("source");
      for (s = 0, r = c.length; s < r; s++)(i = c[s])[R.ns] = !0, (n = i.getAttribute("srcset")) && t.push({
        srcset: n,
        media: i.getAttribute("media"),
        type: i.getAttribute("type"),
        sizes: i.getAttribute("sizes")
      })
    }(t, u.sets)), u.srcset ? (i = {
      srcset: u.srcset,
      sizes: D.call(e, "sizes")
    }, u.sets.push(i), (n = (f || u.src) && N.test(u.srcset || "")) || !u.src || z(u.src, i) || i.has1x || (i.srcset += ", " + u.src, i.cands.push({
      url: u.src,
      d: 1,
      set: i
    }))) : u.src && u.sets.push({
      srcset: u.src,
      sizes: null
    }), u.curCan = null, u.curSrc = o, u.supported = !(a || i && !R.supSrcset || n && !R.supSizes), c && R.supSrcset && !u.supported && (r ? (B.call(e, Q, r), e.srcset = "") : I.call(e, Q)), u.supported && !u.srcset && (!u.src && e.src || e.src !== R.makeUrl(u.src)) && (null === u.src ? e.removeAttribute("src") : e.src = u.src), u.parsed = !0
  }, R.fillImg = function(e, t) {
    var s, r, i, n, c, a = t.reselect || t.reevaluate;
    e[R.ns] || (e[R.ns] = {}), s = e[R.ns], (a || s.evaled !== u) && ((!s.parsed || t.reevaluate) && R.parseSets(e, e.parentNode, t), s.supported ? s.evaled = u : (r = e, n = R.getSet(r), c = !1, "pending" !== n && (c = u, n && (i = R.setRes(n), R.applySetCandidate(i, r))), r[R.ns].evaled = c))
  }, R.setupRun = function() {
    (!Z || V || J !== e.devicePixelRatio) && (V = !1, J = e.devicePixelRatio, _ = {}, K = {}, R.DPR = J || 1, X.width = Math.max(e.innerWidth || 0, U.clientWidth), X.height = Math.max(e.innerHeight || 0, U.clientHeight), X.vw = X.width / 100, X.vh = X.height / 100, u = [X.height, X.width, J].join("-"), X.em = R.getEmValue(), X.rem = X.em)
  }, R.supPicture ? (le = M, R.fillImg = M) : (m = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, h = function() {
    var e = n.readyState || "";
    g = setTimeout(h, "loading" === e ? 200 : 999), n.body && (R.fillImgs(), (t = t || m.test(e)) && clearTimeout(g))
  }, g = setTimeout(h, n.body ? 9 : 99), v = U.clientHeight, ce(e, "resize", (s = function() {
    V = Math.max(e.innerWidth || 0, U.clientWidth) !== X.width || U.clientHeight !== v, v = U.clientHeight, V && R.fillImgs()
  }, a = 99, A = function() {
    var e = new Date - p;
    e < a ? d = setTimeout(A, a - e) : (d = null, s())
  }, function() {
    p = new Date, d || (d = setTimeout(A, a))
  })), ce(n, "readystatechange", h)), R.picturefill = le, R.fillImgs = le, R.teardownRun = M, le._ = R, e.picturefillCFG = {
    pf: R,
    push: function(e) {
      var t = e.shift();
      "function" == typeof R[t] ? R[t].apply(R, e) : (k[t] = e[0], Z && R.fillImgs({
        reselect: !0
      }))
    }
  };
  for (; q && q.length;) e.picturefillCFG.push(q.shift());
  e.picturefill = le, "object" == typeof module && "object" == typeof module.exports ? module.exports = le : "function" == typeof define && define.amd && define("picturefill", function() {
    return le
  }), R.supPicture || ($["image/webp"] = (b = "image/webp", T = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", (C = new e.Image).onerror = function() {
    $[b] = !1, le()
  }, C.onload = function() {
    $[b] = 1 === C.width, le()
  }, C.src = T, "pending"))
}(window, document);
