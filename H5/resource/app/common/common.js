var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
IntUtil = function() {
    function t() {}
    return t.rol = function(t, e) {
        return t << e | t >>> 32 - e
    },
    t.ror = function(t, e) {
        var n = 32 - e;
        return t << n | t >>> 32 - n
    },
    t.toHex = function(t, e) {
        void 0 === e && (e = !1);
        var n = "";
        if (e) for (var r = 0; 4 > r; r++) n += this.hexChars.charAt(t >> 8 * (3 - r) + 4 & 15) + this.hexChars.charAt(t >> 8 * (3 - r) & 15);
        else for (var i = 0; 4 > i; i++) n += this.hexChars.charAt(t >> 8 * i + 4 & 15) + this.hexChars.charAt(t >> 8 * i & 15);
        return n
    },
    t.hexChars = "0123456789abcdef",
    t
} ();
__reflect(IntUtil.prototype, "IntUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
ArrayUtil = function() {
    function t() {}
    return t.arrayContainsValue = function(t, e) {
        return - 1 != t.indexOf(e)
    },
    t.removeValueFromArray = function(t, e) {
        var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
    },
    t.createUniqueCopy = function(t) {
        var e = [];
        return t.forEach(function(t, n, r) { - 1 == e.indexOf(t) && e.push(t)
        }),
        e
    },
    t.copyArray = function(t) {
        return t.slice()
    },
    t.arraysAreEqual = function(t, e) {
        if (t.length != e.length) return ! 1;
        var n;
        return (n = t.every(function(t, n, r) {
            return - 1 == e.indexOf(t) ? !1 : !0
        })) ? n = e.every(function(e, n, r) {
            return - 1 == t.indexOf(e) ? !1 : !0
        }) : !1
    },
    t.embody = function(t, e) {
        var n = e.every(function(e, n, r) {
            return - 1 == t.indexOf(e) ? !1 : !0
        });
        return n
    },
    t.eq = function(t, e) {
        if (t == e) return ! 0;
        if (t.length != e.length) return ! 1;
        for (var n = 0; n < t.length; n++) if (t[n] != e[n]) return ! 1;
        return ! 0
    },
    t.contains = function(t, e) {
        return - 1 != this.getItemIndex(t, e) ? !0 : !1
    },
    t.removeDuplicates = function(t) {
        for (var e = [], n = 0; n < t.length; n++) - 1 != e.indexOf(t[n]) && e.push(t[n]);
        return e
    },
    t.shuffle = function(t) {
        for (var e, n, r = t.length,
        i = 0; r > i; i++) e = Math.floor(Math.random() * r),
        n = t[i],
        t[i] = t[e],
        t[e] = n;
        return t
    },
    t.remove = function(t, e) {
        var n = this.getItemIndex(t, e);
        return - 1 != n && t.splice(n, 1),
        e
    },
    t.getItemIndex = function(t, e) {
        for (var n = t.length; --n > -1;) if (t[n] == e) return n;
        return - 1
    },
    t.exchangeIndex = function(t, e, n) {
        if (e != n) {
            var r = t[n];
            t[n] = t[e],
            t[e] = r
        }
        return t
    },
    t.exchangeItem = function(t, e, n) {
        if (null != e && null != n) {
            var r = t.indexOf(e),
            i = t.indexOf(n); - 1 != r && -1 != i && (t = this.exchangeIndex(t, r, i))
        }
        return t
    },
    t.removeAllItem = function(t) {
        for (; t.length > 0;) t.shift()
    },
    t.sortOn = function(e, n, r) {
        void 0 === n && (n = ""),
        void 0 === r && (r = t.ASCENDING),
        e.sort(function(e, i) {
            var o = r == t.NUMERIC ? "" != n ? parseInt(e[n]) : parseInt(e) : "" != n ? e[n] : e,
            s = r == t.NUMERIC ? "" != n ? parseInt(i[n]) : parseInt(i) : "" != n ? i[n] : i;
            return o > s ? r == t.DESCENDING ? -1 : 1 : o == s ? 0 : r == t.DESCENDING ? 1 : -1
        })
    },
    t.sortOnMultParams = function(e, n) {
        e.sort(function(e, r) {
            for (var i = 0,
            o = n; i < o.length; i++) {
                var s = o[i],
                a = s[0],
                h = s[1],
                _ = h == t.NUMERIC ? "" != a ? parseInt(e[a]) : parseInt(e) : "" != a ? e[a] : e,
                c = h == t.NUMERIC ? "" != a ? parseInt(r[a]) : parseInt(r) : "" != a ? r[a] : r;
                if (_ > c) return h == t.DESCENDING ? -1 : 1;
                if (_ != c) return h == t.DESCENDING ? 1 : -1
            }
            return 0
        })
    },
    t.DESCENDING = "descending",
    t.NUMERIC = "numeric",
    t.ASCENDING = "ascending",
    t
} ();
__reflect(ArrayUtil.prototype, "ArrayUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
BasicQuake = function() {
    function t() {}
    return t.prototype.start = function(e, n, r, i, o) {
        void 0 === n && (n = 0),
        void 0 === r && (r = 0 / 0),
        void 0 === i && (i = 0 / 0),
        void 0 === o && (o = 0 / 0),
        1 == isNaN(r) && (r = 5),
        1 == isNaN(i) && (i = 5),
        1 == isNaN(o) && (o = t.RATIO),
        n = n || 240,
        this._timerRatio = o,
        this.stop(),
        this.baseX = e.x,
        this.baseY = e.y,
        this._timer = n,
        this._timer > 0 && (this.isStarted = !0),
        this._intensityX = r,
        this._intensityY = i,
        this.dis = e,
        egret.Ticker.getInstance().register(this.update, this)
    },
    t.prototype.stop = function() {
        this.x = 0,
        this.y = 0,
        this._intensityX = 0,
        this._intensityY = 0,
        this._timer = 0,
        this.isStarted = !1,
        this.dis && (this.dis.x = this.baseX, this.dis.y = this.baseY),
        this.dis = null,
        egret.Ticker.getInstance().unregister(this.update, this)
    },
    t.prototype.update = function(t) {
        this._timer > 0 && (this._timer -= t, this._timer <= 0 ? this.stop() : (this.x = Math.cos(this._timer * this._timerRatio) * this._intensityX, this.y = Math.sin(this._timer * this._timerRatio) * this._intensityY, this.dis.x = this.baseX + this.x, this.dis.y = this.baseY + this.y))
    },
    t.RATIO = Math.PI / 120,
    t
} ();
__reflect(BasicQuake.prototype, "BasicQuake");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
BitUtil = function() {
    function t() {}
    return t.setBit = function(t, e) {
        var n = Math.pow(2, e);
        return n | t
    },
    t.setBit0 = function(t, e) {
        var n = Math.pow(2, e);
        return t - n
    },
    t.getBit = function(t, e) {
        var n = 1;
        return 0 == e ? t & n: (t >>= e, t & n)
    },
    t.bitToString = function(t) {
        var e = 32,
        n = 0,
        r = "";
        for (n = 0; e > n; n++) r = String(1 & t) + r,
        t >>= 1;
        return r
    },
    t.bitToList = function(t) {
        var e = 32,
        n = 0,
        r = [];
        for (n = 0; e > n; n++) r[n] = 1 & t,
        t >>= 1;
        return r
    },
    t.getHalfByte = function(t, e) {
        return t >> 4 * e & 15
    },
    t
} ();
__reflect(BitUtil.prototype, "BitUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
ColorFilter = function() {
    function t() {}
    return t.setHue = function(e) {
        if (e = t.cleanValue(e, 180) / 180 * Math.PI, 0 == e || isNaN(e)) return null;
        var n = Math.cos(e),
        r = Math.sin(e),
        i = .213,
        o = .715,
        s = .072,
        a = new egret.ColorMatrixFilter([i + n * (1 - i) + r * -i, o + n * -o + r * -o, s + n * -s + r * (1 - s), 0, 0, i + n * -i + .143 * r, o + n * (1 - o) + .14 * r, s + n * -s + r * -.283, 0, 0, i + n * -i + r * -(1 - i), o + n * -o + r * o, s + n * (1 - s) + r * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        return a
    },
    t.setBrightness = function(e) {
        if (e = t.cleanValue(e, 100), 0 == e || isNaN(e)) return null;
        var n = new egret.ColorMatrixFilter([1, 0, 0, 0, e, 0, 1, 0, 0, e, 0, 0, 1, 0, e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        return n
    },
    t.setSaturation = function(e) {
        if (e = t.cleanValue(e, 100), 0 == e || isNaN(e)) return null;
        var n = 1 + (e > 0 ? 3 * e / 100 : e / 100),
        r = new egret.ColorMatrixFilter([t.RED * (1 - n) + n, t.GREEN * (1 - n), t.BLUE * (1 - n), 0, 0, t.RED * (1 - n), t.GREEN * (1 - n) + n, t.BLUE * (1 - n), 0, 0, t.RED * (1 - n), t.GREEN * (1 - n), t.BLUE * (1 - n) + n, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        return r
    },
    t.setContrast = function(e) {
        if (e = t.cleanValue(e, 100), 0 == e || isNaN(e)) return null;
        var n;
        0 > e ? n = 127 + e / 100 * 127 : (n = e % 1, n = 0 == n ? t.DELTA_INDEX[e] : t.DELTA_INDEX[e << 0] * (1 - n) + t.DELTA_INDEX[(e << 0) + 1] * n, n = 127 * n + 127);
        var r = new egret.ColorMatrixFilter([n / 127, 0, 0, 0, .5 * (127 - n), 0, n / 127, 0, 0, .5 * (127 - n), 0, 0, n / 127, 0, .5 * (127 - n), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        return r
    },
    t.setGrayscale = function() {
        var t = [.3, .6, 0, 0, 0, .3, .6, 0, 0, 0, .3, .6, 0, 0, 0, 0, 0, 0, 1, 0],
        e = new egret.ColorMatrixFilter(t);
        return e.matrix[4] = 100,
        e
    },
    t.setInvert = function() {
        var t = new egret.ColorMatrixFilter([ - 1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0]);
        return t
    },
    t.cleanValue = function(t, e) {
        return Math.min(e, Math.max( - e, t))
    },
    t.RED = .299,
    t.GREEN = .587,
    t.BLUE = .114,
    t.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10],
    t
} ();
__reflect(ColorFilter.prototype, "ColorFilter");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
DisplayUtil = function() {
    function t() {}
    return t.setColor = function(t, e) {
        var n = function(t) {
            var e = {
                r: -1,
                g: -1,
                b: -1
            };
            return e.b = t % 256,
            e.g = Math.floor(t / 256) % 256,
            e.r = Math.floor(t / 256 / 256),
            e
        },
        r = n(e),
        i = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        i[0] = r.r / 255,
        i[6] = r.g / 255,
        i[12] = r.b / 255;
        var o = new egret.ColorMatrixFilter(i);
        t.filters = [o]
    },
    t.equalScale = function(t, e, n) {
        t.width / e > t.height / n ? t.scaleX = t.scaleY = e / t.width: t.scaleX = t.scaleY = n / t.height
    },
    t.keepEqualDis = function(t, e, n, r) {
        var i = t.width,
        o = t.height,
        s = i / e,
        a = o / n;
        if (s > 1 || a > 1) {
            var h = Math.max(s, a);
            t.width /= h,
            t.height /= h
        }
        if (r && 1 > s && 1 > a) {
            var h = Math.max(s, a);
            t.width = t.width * (2 - h),
            t.height = t.height * (2 - h)
        }
    },
    t.ScrollerToNum = function(t, e, n, r, i, o, s, a, h) {
        void 0 === a && (a = 150);
        var _ = t * n + i * t;
        void 0 !== h && (_ = Math.min(_, h));
        var c = "horizontal" === e ? "scrollH": "scrollV";
        0 === a ? (r.viewport[c] = _, o.apply(s, null)) : egret.Tween.get(r.viewport).to((u = {},
        u[c] = _, u), a, egret.Ease.quartInOut).call(function() {
            o.apply(s, null)
        },
        this);
        var u
    }, t.ScrollerToNumAsync = function(e, n, r, i, o, s, a) {
        var h = this;
        return void 0 === s && (s = 150),
        new Promise(function(_, c) {
            t.ScrollerToNum(e, n, r, i, o,
            function() {
                return _()
            },
            h, s, a)
        })
    },
    t.setEnabled = function(t, e, n) {
        if (void 0 === n && (n = !0), t && t.parent) if (t.touchEnabled = e, n) {
            for (var r = t.filters || [], i = r.length - 1; i >= 0; i--) {
                var o = r[i];
                o instanceof egret.ColorMatrixFilter && r.splice(i, 1)
            }
            0 == e && r.push(ColorFilter.setGrayscale()),
            t.filters = r;
            var s = t.parent;
            if (2 == this.grayType) {
                if (0 == e) if (s && 1 == s.numChildren) s.touchChildren = !0,
                s.touchEnabled = !1,
                s.cacheAsBitmap = !0;
                else {
                    var a = new eui.Group;
                    a.anchorOffsetX = t.anchorOffsetX,
                    a.anchorOffsetY = t.anchorOffsetY,
                    a.x = t.x,
                    a.y = t.y,
                    a.left = t.left,
                    a.right = t.right,
                    a.top = t.top,
                    a.bottom = t.bottom,
                    a.verticalCenter = t.verticalCenter,
                    a.horizontalCenter = t.horizontalCenter,
                    t.x = t.y = t.anchorOffsetX = t.anchorOffsetY = 0,
                    t.left = void 0,
                    t.right = void 0,
                    t.top = void 0,
                    t.bottom = void 0,
                    t.verticalCenter = void 0,
                    t.horizontalCenter = void 0,
                    t.hasBeenGrayedOut = !0;
                    var h = t.parent.getChildIndex(t);
                    s.addChildAt(a, h),
                    a.addChild(t),
                    a.touchChildren = !0,
                    a.touchEnabled = !1,
                    a.cacheAsBitmap = !0
                }
            } else if (1 == this.grayType && (t instanceof eui.Image || t instanceof eui.Group)) if (0 == e) {
                if (this.enabledDisPlays && this.enabledDisPlays.containsKey(t.hashCode)) return;
                var _ = new egret.RenderTexture,
                c = t.parent,
                u = t.x,
                l = t.y,
                h = t.parent.getChildIndex(t),
                f = new eui.Group;
                t.x = 0,
                t.y = 0,
                c.addChild(f),
                f.addChild(t);
                var d = t.getTransformedBounds(f);
                d.width = t.width,
                d.height = t.height,
                _.drawToTexture(f, d);
                var p = KTool.clone(_.bitmapData);
                _.dispose(),
                _ = null,
                t.filters = null,
                c.removeChild(f),
                c.addChildAt(t, h),
                f = null,
                t.x = u,
                t.y = l;
                var g = new egret.Texture;
                if (g.bitmapData = p, this.enabledDisPlays || (this.enabledDisPlays = new HashMap), t instanceof eui.Image) {
                    var v = t.source;
                    this.enabledDisPlays.add(t.hashCode, v),
                    t.source = g
                } else if (t instanceof eui.Group) {
                    var m = new eui.Image;
                    m.source = g;
                    var y = t.numChildren,
                    E = [];
                    E.push(m.hashCode);
                    for (var i = 0; y > i; i++) {
                        var T = t.getChildAt(i);
                        T.visible && (E.push(T.hashCode), T.visible = !1)
                    }
                    t.addChild(m),
                    this.enabledDisPlays.add(t.hashCode, E)
                }
            } else t.filters = null,
            this.backDis(t)
        } else t.filters = null,
        1 == this.grayType && this.backDis(t)
    },
    t.backDis = function(t) {
        if (t instanceof eui.Image) this.enabledDisPlays && this.enabledDisPlays.containsKey(t.hashCode) && (t.source = this.enabledDisPlays.getValue(t.hashCode), this.enabledDisPlays.remove(t.hashCode));
        else if (t instanceof eui.Group && this.enabledDisPlays && this.enabledDisPlays.containsKey(t.hashCode)) {
            for (var e = this.enabledDisPlays.getValue(t.hashCode), n = t.numChildren, r = 0; n > r; r++) {
                var i = t.getChildAt(r),
                o = e.indexOf(i.hashCode); - 1 != o && (0 == o ? (t.removeChildAt(r), r--) : i.visible = !0)
            }
            this.enabledDisPlays.remove(t.hashCode)
        }
    },
    t.removeAllChild = function(t, e) {
        void 0 === e && (e = !0),
        t && t.removeChildren()
    },
    t.removeForParent = function(t, e) {
        void 0 === e && (e = !0),
        t && t.parent && t.parent.removeChild(t)
    },
    t.cacheAsBitmapDisplayObj = function(t) {
        t.cacheAsBitmap = "webgl" === egret.Capabilities.renderMode
    },
    t.addPressEvent = function(t, e, n, r, i, o) {
        var s, a, h = function() {
            t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, c, this),
            t.removeEventListener(egret.TouchEvent.TOUCH_END, u, this),
            t.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, _, this),
            t.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _, this),
            egret.clearTimeout(s)
        },
        _ = function(e) {
            t.removeEventListener(egret.TouchEvent.TOUCH_END, u, this),
            t.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, _, this),
            t.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _, this),
            a && (r.call(o, null), a = !1)
        },
        c = function(r) {
            t.addEventListener(egret.TouchEvent.TOUCH_END, u, this),
            t.addEventListener(egret.TouchEvent.TOUCH_CANCEL, _, this),
            t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _, this),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _, this),
            s = egret.setTimeout(function() {
                a = !0,
                n.call(o, null)
            },
            this, e)
        },
        u = function(t) {
            a ? (r.call(o, null), a = !1) : (egret.clearTimeout(s), i.call(o, null))
        };
        return t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, c, this),
        h
    },
    t.setScrollerItemIncludeInLayout = function(t, e) {
        if (void 0 === e && (e = !1), t && t.viewport) {
            t.scrollPolicyH = t.scrollPolicyV = e ? eui.ScrollPolicy.AUTO: eui.ScrollPolicy.OFF;
            for (var n = 0; n < t.viewport.numChildren; n++) {
                var r = t.viewport.getChildAt(n);
                r.includeInLayout = e
            }
        } else console.error("Scroller不对")
    },
    t.COLOR_GRAY = 8224125,
    t.COLOR_WIHTE = 16777215,
    t.COLOR_BLACK = 0,
    t.COLOR_GREEN = 65280,
    t.COLOR_BLUE = 65535,
    t.COLOR_PURPLE = 16711935,
    t.COLOR_ORANGE = 16753920,
    t.COLOR_RED = 16711680,
    t.grayType = 2,
    t
} ();
__reflect(DisplayUtil.prototype, "DisplayUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
DragUtil = function() {
    function t() {}
    return t.add = function(e, n, r, i, o, s, a) {
        if (void 0 === o && (o = 1), void 0 === s && (s = .8), void 0 === a && (a = 300), t.__dragMap__ || (t.__dragMap__ = {}), t.__dragMap__["key_" + e.hashCode]) {
            var h = t.__dragMap__["key_" + e.hashCode];
            h.callBack = n,
            h.caller = r,
            h.scale = o,
            h.forceTime = a,
            h.data = i,
            h.alpha = s
        } else e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t._onTouchBegin, this),
        t.__dragMap__["key_" + e.hashCode] = {
            displayObj: e,
            callBack: n,
            caller: r,
            scale: o,
            forceTime: a,
            data: i,
            alpha: s
        }
    },
    t._onTouchBegin = function(e) {
        var n = this,
        r = e.currentTarget;
        this.__currentItem = r;
        var i = t.__dragMap__["key_" + r.hashCode];
        t.__timeOutFlag = egret.setTimeout(function() {
            t._draw(r),
            n.__currentDragImg__.x = e.stageX,
            n.__currentDragImg__.y = e.stageY,
            r.removeEventListener(egret.TouchEvent.TOUCH_MOVE, t._cancel, n),
            r.removeEventListener(egret.TouchEvent.TOUCH_MOVE, t._cancel, n),
            r.stage.addEventListener(egret.TouchEvent.TOUCH_END, t._onTouchEnd, n),
            r.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, t._onTouchMove, n),
            r.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, t._cancel, n)
        },
        this, i.forceTime),
        r.addEventListener(egret.TouchEvent.TOUCH_MOVE, t._cancel, this),
        r.addEventListener(egret.TouchEvent.TOUCH_END, t._cancel, this),
        e.stopImmediatePropagation()
    },
    t._onTouchMove = function(t) {
        this.__currentDragImg__.x = t.stageX,
        this.__currentDragImg__.y = t.stageY,
        t.stopImmediatePropagation()
    },
    t._cancel = function(e) {
        egret.clearTimeout(t.__timeOutFlag);
        var n = this.__currentItem;
        n.removeEventListener(egret.TouchEvent.TOUCH_MOVE, t._cancel, this),
        n.removeEventListener(egret.TouchEvent.TOUCH_MOVE, t._cancel, this),
        n.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, t._onTouchMove, this),
        n.stage.removeEventListener(egret.TouchEvent.TOUCH_END, t._onTouchEnd, this),
        n.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, t._cancel, this),
        t._removeDragImg()
    },
    t._onTouchEnd = function(e) {
        egret.clearTimeout(t.__timeOutFlag);
        var n = this.__currentItem;
        n.removeEventListener(egret.TouchEvent.TOUCH_MOVE, t._cancel, this),
        n.removeEventListener(egret.TouchEvent.TOUCH_MOVE, t._cancel, this),
        n.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, t._onTouchMove, this),
        n.stage.removeEventListener(egret.TouchEvent.TOUCH_END, t._onTouchEnd, this),
        n.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, t._cancel, this),
        t._removeDragImg();
        var r = t.__dragMap__["key_" + n.hashCode],
        i = r.callBack,
        o = r.caller;
        i.apply(o, [e.stageX, e.stageY, r.data]),
        e.stopImmediatePropagation()
    },
    t._removeDragImg = function() {
        t.__currentDragImg__ && t.__currentDragImg__.parent && (t.__currentDragImg__.parent.removeChild(t.__currentDragImg__), t.__currentDragImg__.texture = null)
    },
    t.remove = function(e) {
        t.__dragMap__["key_" + e.hashCode] && (e.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, t._onTouchBegin, this), t.__dragMap__["key_" + e.hashCode] = null, delete t.__dragMap__["key_" + e.hashCode])
    },
    t._draw = function(e) {
        t.__renderTexture || (t.__renderTexture = new egret.RenderTexture);
        var n = t.__dragMap__["key_" + e.hashCode];
        t.__renderTexture.drawToTexture(e, null, n.scale),
        t.__currentDragImg__ || (t.__currentDragImg__ = new egret.Bitmap),
        t.__currentDragImg__.texture = t.__renderTexture,
        t.__currentDragImg__.alpha = n.alpha,
        e.stage.addChild(t.__currentDragImg__),
        t.__currentDragImg__.anchorOffsetX = t.__renderTexture.textureWidth / 2,
        t.__currentDragImg__.anchorOffsetY = t.__renderTexture.textureHeight / 2
    },
    t
} ();
__reflect(DragUtil.prototype, "DragUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
EmailUtil = function() {
    function t() {}
    return t.text2Html = function(t) {
        var e = /{\s*\d+\[*.*?\]*\s*,\s*.*?\s*}/g,
        n = t.match(e);
        if (!n) return t;
        for (var r = 0; r < n.length; r++) {
            var i = this.splitContent(String(n[r]).replace(/[{}]/g, ""));
            if (2 == i.length && "" != i[0] && "" != i[1]) {
                var o = "";
                if ("0" == i[0]) {
                    var s = "<font color='#FF0000'>{#content}</font>";
                    o = s.replace("", i[1])
                } else o = this.SOURCE.replace("", i[0]).replace("", i[1]);
                t = t.replace(n[r], "")
            }
        }
        return t
    },
    t.GetGotoStr = function(t) {
        var e = /{\s*\d+\[*.*?\]*\s*,\s*.*?\s*}/g,
        n = t.match(e);
        if (!n) return "";
        for (var r = 0; r < n.length; r++) {
            var i = this.splitContent(String(n[r]).replace(/[{}]/g, ""));
            if (2 == i.length && "" != i[0] && "" != i[1]) {
                return "0" == i[0] ? "0": i[0]
            }
            return "0"
        }
        return "0"
    },
    t.fetchBraceContent = function(t) {
        var e = [],
        n = /(\d+)\[(.*?)\]/g,
        r = n.exec(t);
        return null == r ? (e.push(t), e.push(null)) : (e.push(r[1]), e.push(r[2])),
        e
    },
    t.splitContent = function(t) {
        var e = []; ("" != t || null != t) && (e = t.split(","));
        for (var n = 0; n < e.length; n++) e[n] = String(e[n]).replace(/(^\s*)|(\s*$)/g, "");
        return e
    },
    t.SOURCE = "<font color='#FF0000'><u><a href='event:{#event}'>{#content}</a></u></font>",
    t
} ();
__reflect(EmailUtil.prototype, "EmailUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
EventManager = function() {
    function t() {
        if (!t.isSingle) throw new Error("EventManager为单例模式，不能直接创建")
    }
    return t.getInstance = function() {
        return null == this.instance && (this.isSingle = !0, this.instance = new egret.EventDispatcher),
        this.isSingle = !1,
        this.instance
    },
    t.addEventListener = function(t, e, n, r, i, o) {
        void 0 === r && (r = !1),
        void 0 === i && (i = 0),
        void 0 === o && (o = !1),
        this.getInstance().addEventListener(t, e, n, r, i)
    },
    t.removeEventListener = function(t, e, n, r) {
        void 0 === r && (r = !1),
        this.getInstance().removeEventListener(t, e, n, r)
    },
    t.removeAll = function(t) {
        var e = this.getInstance().$EventDispatcher[1];
        if (e && t) for (var n in e) {
            var r = e[n];
            if (r) for (var i = r.length - 1; i >= 0; i--) {
                var o = r[i];
                o && o.thisObject == t && (this.getInstance().removeEventListener(o.type, o.listener, o.thisObject, o.useCapture), 0 == i && delete e[n])
            } else delete e[n]
        }
    },
    t.once = function(t, e, n, r, i, o) {
        void 0 === r && (r = !1),
        void 0 === i && (i = 0),
        void 0 === o && (o = !1),
        this.getInstance().once(t, e, n, r, i)
    },
    t.dispatchEvent = function(t) {
        return this.getInstance().dispatchEvent(t)
    },
    t.dispatchEventWith = function(t, e, n, r) {
        return this.getInstance().dispatchEventWith(t, e, n, r)
    },
    t.hasEventListener = function(t) {
        return this.getInstance().hasEventListener(t)
    },
    t.willTrigger = function(t) {
        return this.getInstance().willTrigger(t)
    },
    t.isSingle = !1,
    t
} ();
__reflect(EventManager.prototype, "EventManager");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
GsapUtils = function() {
    function t() {}
    return t.mapRange = function(t, e, n, r, i, o) {
        return void 0 === o && (o = 2),
        +Math.min(gsap.utils.mapRange(t, e, n, r, i), r).toFixed(o)
    },
    t.clamp = function(t, e, n) {
        return void 0 === n && (n = 0 / 0),
        isNaN(n) ? gsap.utils.clamp(t, e) : gsap.utils.clamp(t, e, n)
    },
    t.getUnit = function(t) {
        return gsap.utils.getUnit(t)
    },
    t.random = function(t, e, n) {
        return void 0 === n && (n = 1),
        ~~gsap.utils.random(t, e, n)
    },
    t.arrayRandom = function(t, e) {
        return void 0 === e && (e = !1),
        gsap.utils.random(t, e)
    },
    t.imageFadIn = function(t, e, n, r, i, o) {
        var s = this;
        void 0 === n && (n = 1.8),
        void 0 === o && (o = !1),
        this.tl && this.tl.isActive ? (this.tl.clear(), this.func && this.func.call(this.thisObj || this)) : this.tl = new gsap.core.Timeline,
        o && (LevelManager.stage.touchChildren = !1),
        this.func = r,
        this.thisObj = i,
        this.tl.fromTo(t, {
            alpha: 1
        },
        {
            alpha: 0,
            duration: n
        }),
        this.tl.fromTo(e, {
            alpha: 0
        },
        {
            alpha: 1,
            duration: n
        },
        "<").then(function() {
            r && r.call(i || s),
            s.tl && s.tl.clear(),
            s.tl = null,
            s.func = null,
            s.thisObj = null,
            o && (LevelManager.stage.touchChildren = !0)
        })
    },
    t.pathByRect = function(t, e, n, r, i, o) {
        if (i = i || o || 0, o = o || i || 0, isNaN(t - e + n - r + i - o)) return "";
        if (i = i > n / 2 ? n / 2 : i, o = o > r / 2 ? r / 2 : o, 0 == i || 0 == o) var s = "M" + t + " " + e + "h" + n + "v" + r + "h" + -n + "z";
        else var s = "M" + t + " " + (e + o) + "a" + i + " " + o + " 0 0 1 " + i + " " + -o + "h" + (n - i - i) + "a" + i + " " + o + " 0 0 1 " + i + " " + o + "v" + (r - o - o) + "a" + i + " " + o + " 0 0 1 " + -i + " " + o + "h" + (i + i - n) + "a" + i + " " + o + " 0 0 1 " + -i + " " + -o + "z";
        return s
    },
    t.pathByEllipse = function(t, e, n, r) {
        if (isNaN(t - e + n - r)) return "";
        var i = "M" + (t - n) + " " + e + "a" + n + " " + r + " 0 1 0 " + 2 * n + " 0a" + n + " " + r + " 0 1 0 " + -2 * n + " 0z";
        return i
    },
    t.pathByLine = function(t, e, n, r) {
        if (isNaN(t - e + n - r)) return "";
        t = t || 0,
        e = e || 0,
        n = n || 0,
        r = r || 0;
        var i = "M" + t + " " + e + "L" + n + " " + r;
        return i
    },
    t.pathByPolyline = function(t) {
        var e = "M" + t.slice(0, 2).join(" ") + "L" + t.slice(2).join(" ");
        return e
    },
    t.pathByPolygon = function(t) {
        var e = "M" + t.slice(0, 2).join(" ") + "L" + t.slice(2).join(" ") + "z";
        return e
    },
    t
} ();
__reflect(GsapUtils.prototype, "GsapUtils");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
HashMap = function() {
    function t(t) {
        void 0 === t && (t = !1),
        this._weakKeys = t,
        this._length = 0,
        this._content = new Object
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this._length
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.isEmpty = function() {
        return 0 == this._length
    },
    t.prototype.getKeys = function() {
        var t, e = new Array(this._length),
        n = 0;
        for (t in this._content) e[n] = t,
        n++;
        return e
    },
    t.prototype.getValues = function() {
        var t, e = new Array(this._length),
        n = 0;
        for (t in this._content) e[n] = this._content[t],
        n++;
        return e
    },
    t.prototype.eachKey = function(t) {
        var e;
        for (e in this._content) t(e)
    },
    t.prototype.eachValue = function(t) {
        var e;
        for (e in this._content) t(this._content[e])
    },
    t.prototype.each2 = function(t) {
        var e;
        for (e in this._content) t(e, this._content[e])
    },
    t.prototype.containsValue = function(t) {
        var e;
        for (e in this._content) if (e === t) return ! 0;
        return ! 1
    },
    t.prototype.some = function(t) {
        var e;
        for (e in this._content) if (t(e, this._content[e])) return ! 0;
        return ! 1
    },
    t.prototype.filter = function(t) {
        var e, n, r = [];
        for (e in this._content) n = this._content[e],
        t(e, n) && r.push(n);
        return r
    },
    t.prototype.containsKey = function(t) {
        return void 0 === this._content[t] ? !1 : !0
    },
    t.prototype.getValue = function(t) {
        var e = this._content[t];
        return void 0 === e ? null: e
    },
    t.prototype.getKey = function(t) {
        var e;
        for (e in this._content) if (this._content[e] == t) return e;
        return null
    },
    t.prototype.add = function(t, e) {
        if (null == t) return null;
        if (void 0 === e) return null;
        void 0 === this._content[t] && this._length++;
        var n = this.getValue(t);
        return this._content[t] = e,
        n
    },
    t.prototype.remove = function(t) {
        if (void 0 === this._content[t]) return null;
        var e = this._content[t];
        return delete this._content[t],
        this._length--,
        e
    },
    t.prototype.clear = function() {
        this._length = 0,
        this._content = new Object
    },
    t.prototype.clone = function() {
        var e, n = new t;
        for (e in this._content) n.add(e, this._content[e]);
        return n
    },
    t.prototype.toString = function() {
        var t, e = this.getKeys(),
        n = this.getValues(),
        r = e.length,
        i = "HashMap Content:\n";
        for (t = 0; r > t; t++) i += e[t] + " -> " + n[t] + "\n";
        return i
    },
    t
} ();
__reflect(HashMap.prototype, "HashMap", ["ICollection"]);
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
HashSet = function() {
    function t() {
        this._content = new Object,
        this._length = 0
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this._length
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.add = function(t) {
        void 0 !== t && (void 0 === this._content[t] && this._length++, this._content[t] = t)
    },
    t.prototype.contains = function(t) {
        return void 0 === this._content[t] ? !1 : !0
    },
    t.prototype.isEmpty = function() {
        return 0 == this._length
    },
    t.prototype.remove = function(t) {
        return void 0 !== this._content[t] ? (delete this._content[t], this._length--, !0) : !1
    },
    t.prototype.clear = function() {
        this._content = {},
        this._length = 0
    },
    t.prototype.addAll = function(t) {
        for (var e, n = 0,
        r = t; n < r.length; n++) e = r[n],
        this.add(e)
    },
    t.prototype.removeAll = function(t) {
        for (var e, n = 0,
        r = t; n < r.length; n++) e = r[n],
        this.remove(e)
    },
    t.prototype.containsAll = function(t) {
        var e, n = t.length;
        for (e = 0; n > e; e++) if (void 0 === this._content[t[e]]) return ! 1;
        return ! 0
    },
    t.prototype.each2 = function(t) {
        var e;
        for (e in this._content) t(this._content[e])
    },
    t.prototype.toArray = function() {
        var t, e = new Array(this._length),
        n = 0;
        for (t in this._content) e[n] = this._content[t],
        n++;
        return e
    },
    t.prototype.clone = function() {
        var e, n = new t;
        for (e in this._content) n.add(this._content[e]);
        return n
    },
    t
} ();
__reflect(HashSet.prototype, "HashSet", ["ICollection"]);
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
HttpUtil = function() {
    function t() {}
    return t.get = function(t, e, n, r) {
        return void 0 === n && (n = "GET"),
        void 0 === r && (r = null),
        new Promise(function(i, o) {
            var s = new egret.HttpRequest;
            if (r) for (var a in r) console.log(a, r[a]),
            s.setRequestHeader(a, r[a]);
            var h = function(t) {
                switch (t.type) {
                case egret.Event.COMPLETE:
                    var e = t.currentTarget;
                    i({
                        result: 0,
                        data: e.response
                    });
                    break;
                case egret.IOErrorEvent.IO_ERROR:
                    i({
                        result:
                        -1,
                        data: null
                    })
                }
            },
            _ = function(t) {};
            if (s.once(egret.Event.COMPLETE, h, null), s.once(egret.IOErrorEvent.IO_ERROR, h, null), s.once(egret.ProgressEvent.PROGRESS, _, null), s.open(t, n), e) {
                var c = "";
                if ("string" == typeof e) c = e;
                else {
                    var u = [];
                    for (var l in e) u.push(l + "=" + e[l]);
                    c = u.join("&")
                }
                console.log("http param:" + c),
                s.send(c)
            } else s.send()
        })
    },
    t
} ();
__reflect(HttpUtil.prototype, "HttpUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
ImageButtonUtil = function() {
    function t() {}
    return t.add = function(e, n, r, i, o, s) {
        void 0 === i && (i = !0),
        void 0 === o && (o = !0),
        void 0 === s && (s = null),
        r || console.warn("owner is null!!!");
        var a = new egret.Point(e.x, e.y);
        e.touchChildren = !1,
        e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this, !1, 9999);
        var h = {
            btn: e,
            position: a,
            owner: r,
            anchorX: e.anchorOffsetX,
            anchorY: e.anchorOffsetY,
            scaleX: e.scaleX,
            scaleY: e.scaleY,
            callback: n,
            useScale: i,
            userfilter: o,
            checkFun: s
        };
        i && !e.hasBeenGrayedOut && (e.anchorOffsetX = .5 * e.width, e.anchorOffsetY = .5 * e.height, e.x = a.x + (e.anchorOffsetX - h.anchorX) * e.scaleX, e.y = a.y + (e.anchorOffsetY - h.anchorY) * e.scaleY),
        t.imgs["k_" + e.hashCode] = h
    },
    t.addWithoutLock = function(t, e, n, r, i, o) {
        void 0 === r && (r = !0),
        void 0 === i && (i = !0),
        void 0 === o && (o = null),
        this.add(t, e, n, r, i, o),
        t.touchChildren = !0
    },
    t.remove = function(e) {
        var n = t.imgs["k_" + e.hashCode];
        n && (n.btn.hasBeenGrayedOut || (n.btn.anchorOffsetX = n.anchorX, n.btn.anchorOffsetY = n.anchorY, n.btn.x = n.position.x, n.btn.y = n.position.y), n.btn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), n.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouchTap, this)),
        delete t.imgs["k_" + e.hashCode]
    },
    t.removeAll = function(e) {
        var n = 0;
        for (var r in t.imgs) {
            var i = t.imgs[r];
            i.owner == e && (n++, t.remove(i.btn))
        }
    },
    t.onTouchBegin = function(e) {
        if (!t.currBtn) {
            var n = e.currentTarget,
            r = t.imgs["k_" + n.hashCode];
            if (r.checkFun && !r.checkFun(e)) return e.stopImmediatePropagation(),
            void e.preventDefault();
            if (n.stage.addEventListener(egret.TouchEvent.TOUCH_END, t.onTouchEnd, this), n.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouchTap, this), n.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, t.onOutSide, this), n.addEventListener(egret.TouchEvent.TOUCH_CANCEL, t.onCanCel, this), r.useScale) {
                var i = n.width,
                o = n.height,
                s = Math.max(i, o);
                s = Math.min(Math.max(90, s), 678);
                var a = MathUtil.lerp(678, .98, 90, .95, s); (n.hasBeenGrayedOut || n.parent && n.parent.layout && !(n.parent.layout instanceof eui.BasicLayout)) && (this.btnContainer.width = i, this.btnContainer.height = o, this.btnContainer.x = n.x - n.anchorOffsetX, this.btnContainer.y = n.y - n.anchorOffsetY, n.anchorOffsetX = .5 * i, n.anchorOffsetY = .5 * o, n.x = .5 * i, n.y = .5 * o, n.parent.addChildAt(this.btnContainer, n.parent.getChildIndex(n)), this.btnContainer.addChild(n)),
                n.scaleX = n.scaleX * a,
                n.scaleY = n.scaleY * a
            }
            r.userfilter && DisplayUtil.setColor(n, DisplayUtil.COLOR_GRAY),
            t.currBtn = n
        }
    },
    t.onTouchTap = function(e) {
        var n = e.currentTarget,
        r = t.imgs["k_" + n.hashCode],
        i = new egret.Event(this.CLICK_BUTTON, !0, !0, {
            name: n.name,
            target: n,
            owner: r.owner
        });
        EventManager.dispatchEvent(i) && r.callback && r.callback.call(r.owner || this, e),
        n.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouchTap, this)
    },
    t.onTouchEnd = function(e) {
        var n = this;
        if (t.currBtn) {
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, t.onTouchEnd, this);
            var r = t.currBtn;
            egret.callLater(function() {
                r.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, t.onOutSide, n),
                r.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouchTap, n),
                r.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, t.onCanCel, n)
            },
            this);
            var i = t.imgs["k_" + t.currBtn.hashCode];
            i && (i.useScale && (t.currBtn.scaleX = i.scaleX, t.currBtn.scaleY = i.scaleY), i.userfilter && (t.currBtn.filters = [])),
            this.btnContainer.parent && (this.currBtn.x = this.btnContainer.x + this.currBtn.anchorOffsetX, this.currBtn.y = this.btnContainer.y + this.currBtn.anchorOffsetY, this.btnContainer.parent.addChildAt(this.currBtn, this.btnContainer.parent.getChildIndex(this.btnContainer)), this.btnContainer.parent.removeChild(this.btnContainer)),
            t.currBtn = null
        }
    },
    t.onOutSide = function(e) {
        var n = e.currentTarget;
        n && (n.stage && n.stage.removeEventListener(egret.TouchEvent.TOUCH_END, t.onTouchEnd, this), n.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouchTap, this), n.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, t.onOutSide, this))
    },
    t.onCanCel = function(e) {
        var n = e.currentTarget;
        n && (n.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, t.onCanCel, this), n.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.onTouchTap, this), n.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, t.onOutSide, this))
    },
    t.imgs = {},
    t.btnContainer = new eui.Group,
    t.CLICK_BUTTON = "click_button",
    t
} ();
__reflect(ImageButtonUtil.prototype, "ImageButtonUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    n.prototype = e.prototype,
    t.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, r) {
    return new(n || (n = Promise))(function(i, o) {
        function s(t) {
            try {
                h(r.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                h(r["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? i(t.value) : new n(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((r = r.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return r([t, e])
        }
    }
    function r(n) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (i = 1, o && (s = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(s = s.call(o, n[1])).done) return s;
            switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
                s = n;
                break;
            case 4:
                return h.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    h = 0;
                    continue
                }
                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                    h.label = n[1];
                    break
                }
                if (6 === n[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = n;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(n);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            n = e.call(t, h)
        } catch(r) {
            n = [6, r],
            o = 0
        } finally {
            i = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var i, o, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
common; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._loaderCompleteFlag = !1,
            e._currentFrame = 1,
            e._frameRate = 30,
            e._frameKeyMap = {},
            e._resUrl = [],
            e._image = new eui.Image,
            e.addChild(e._image),
            e._playFlag = !1,
            e.addEventListener(egret.Event.ENTER_FRAME, e._enterFrame, e),
            e
        }
        return __extends(e, t),
        e.prototype.loaderTexture = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, n, r;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return e = [],
                        n = this,
                        r = function() {
                            return __awaiter(this, void 0, void 0,
                            function() {
                                var i, o;
                                return __generator(this,
                                function(s) {
                                    switch (s.label) {
                                    case 0:
                                        return t.length <= 0 ? [2, Promise.resolve()] : (i = t.shift(), [4, RES.getResByUrl(i,
                                        function(t, e) {
                                            n._resUrl.push(e)
                                        },
                                        this)]);
                                    case 1:
                                        return o = s.sent(),
                                        e.push(o),
                                        [4, r()];
                                    case 2:
                                        return [2, s.sent()]
                                    }
                                })
                            })
                        },
                        [4, r()];
                    case 1:
                        return i.sent(),
                        [2, Promise.resolve(e)]
                    }
                })
            })
        },
        e.test = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(n) {
                    return t = new e,
                    t.setConfig(JSON.stringify(this.jsonTest())),
                    egret.lifecycle.stage.addChild(t),
                    t.play( - 1),
                    t.x = 200,
                    t.y = 200,
                    [2]
                })
            })
        },
        e.prototype.setCustomTextureList = function(t, e) {
            if (this._textureItems = t, e) this._frameKeyMap = e;
            else for (var n = 0; n < t.length; n++) this._frameKeyMap[n + 1] = {
                idx: n,
                x: 0,
                y: 0
            };
            this._parseComplete()
        },
        e.prototype.setConfig = function(t, e) {
            var n = this;
            e ? RES.getResByUrl(t,
            function(t, e) {
                n._resUrl.push(e),
                n._parseData(t)
            },
            this, RES.ResourceItem.TYPE_JSON) : this._parseData(JSON.parse(t))
        },
        e.prototype._parseData = function(t) {
            var e = this;
            t && (this._totalFrame = t.frame, this.frameRate = 30 | t.frameRate, this.loaderTexture(t.res).then(function(n) {
                e._textureItems = n;
                for (var r = t.frameMap,
                i = 1,
                o = 0; o < r.length; o++) for (var s = r[o], a = 0; a < s.count; a++) e._frameKeyMap[i] = {
                    idx: s.idx,
                    x: s.x,
                    y: s.y
                },
                ++i;
                e._parseComplete()
            }))
        },
        e.prototype._parseComplete = function() {
            this._loaderCompleteFlag = !0,
            this._setFrame(),
            this._playFlag && this._startPlay()
        },
        e.jsonTest = function() {
            return {
                res: ["resource/assets/animate/test/Idle__000.png", "resource/assets/animate/test/Idle__001.png", "resource/assets/animate/test/Idle__002.png", "resource/assets/animate/test/Idle__003.png", "resource/assets/animate/test/Idle__004.png", "resource/assets/animate/test/Idle__005.png", "resource/assets/animate/test/Idle__006.png", "resource/assets/animate/test/Idle__007.png", "resource/assets/animate/test/Idle__008.png", "resource/assets/animate/test/Idle__009.png"],
                frame: 24,
                frameMap: [{
                    idx: 0,
                    count: 4,
                    x: 0,
                    y: 0
                },
                {
                    idx: 1,
                    count: 2,
                    x: 0,
                    y: 0
                },
                {
                    idx: 2,
                    count: 2,
                    x: 0,
                    y: 0
                },
                {
                    idx: 3,
                    count: 2,
                    x: 0,
                    y: 0
                },
                {
                    idx: 4,
                    count: 2,
                    x: 0,
                    y: 0
                },
                {
                    idx: 5,
                    count: 2,
                    x: 0,
                    y: 0
                },
                {
                    idx: 6,
                    count: 2,
                    x: 0,
                    y: 0
                },
                {
                    idx: 7,
                    count: 2,
                    x: 0,
                    y: 0
                },
                {
                    idx: 8,
                    count: 2,
                    x: 0,
                    y: 0
                },
                {
                    idx: 9,
                    count: 4,
                    x: 0,
                    y: 0
                }]
            }
        },
        Object.defineProperty(e.prototype, "totalFrame", {
            get: function() {
                return this._totalFrame
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "frameRate", {
            get: function() {
                return this._frameRate
            },
            set: function(t) {
                this._frameRate = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.gotoAndPlay = function(t, e) {
            this._playTimes = e,
            this._currentFrame = t,
            this._startPlay()
        },
        e.prototype.gotoAndStop = function(t) {
            this._currentFrame = t,
            this._playFlag = !1,
            this._loaderCompleteFlag && this._setFrame()
        },
        e.prototype.play = function(t) {
            this._playTimes = t,
            this._startPlay()
        },
        e.prototype.stop = function() {
            this._playFlag = !1
        },
        e.prototype._startPlay = function() {
            this._playFlag = !0,
            this._loaderCompleteFlag && (this._lastTime = 0, this._setFrame())
        },
        e.prototype._setFrame = function() {
            var t = Math.floor(this._currentFrame),
            e = this._frameKeyMap[t].x,
            n = this._frameKeyMap[t].y,
            r = this._frameKeyMap[t].idx;
            this._image.source = this._textureItems[r],
            this._image.x = e,
            this._image.y = n
        },
        e.prototype._enterFrame = function(t) {
            if (this._playFlag && this._loaderCompleteFlag) {
                if (0 === this._lastTime) return void(this._lastTime = egret.getTimer());
                var e = egret.getTimer(),
                n = (e - this._lastTime) / 1e3,
                r = 1 / this._frameRate;
                this._currentFrame += n / r;
                var i = this._totalFrame || this._textureItems.length;
                if (this._currentFrame >= i && (this._currentFrame = Math.floor(this._currentFrame % i + 1), this._playTimes > 0 && --this._playTimes, 0 === this._playTimes)) return void this._completePlay();
                this._setFrame(),
                this._lastTime = e
            }
        },
        e.prototype._completePlay = function() {
            this._playFlag = !1,
            this.dispatchEventWith(egret.Event.COMPLETE)
        },
        e.prototype.destroy = function(t) {
            if (void 0 === t && (t = !1), this._playFlag = !1, this.removeEventListener(egret.Event.ENTER_FRAME, this._enterFrame, this), this.parent && this.parent.removeChild(this), this._frameKeyMap = null, t) return this._textureItems = null,
            void(this._resUrl = null);
            for (var e = 0; e < this._textureItems.length; e++) {
                var n = this._textureItems[e];
                n.dispose()
            }
            for (var e = 0; e < this._resUrl.length; e++) RES.destroyRes(this._resUrl[e]);
            this._textureItems = null,
            this._resUrl = null
        },
        e
    } (eui.Group);
    t.ImageSequence = e,
    __reflect(e.prototype, "common.ImageSequence")
} (common || (common = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
common; !
function(t) {
    var e = function() {
        function t(t, e, n) {
            this._dis = t,
            this._pivotX = e,
            this._pivotY = n,
            this.$init()
        }
        return t.prototype.$init = function() {
            for (var t = ["width", "height"], e = 0; e < t.length; e++) this._attrWatcherArray || (this._attrWatcherArray = []),
            this._attrWatcherArray.push(eui.Watcher.watch(this._dis, [t[e]], this.$updateDisplay, this));
            this.$updateDisplay(),
            this._dis.x = this._dis.scaleX > 0 ? this._dis.x + this._dis.anchorOffsetX: this._dis.x - this._dis.anchorOffsetX,
            this._dis.y = this._dis.scaleY > 0 ? this._dis.y + this._dis.anchorOffsetY: this._dis.y - this._dis.anchorOffsetY
        },
        t.prototype.$updateDisplay = function() {
            var e = this._dis.width * this._pivotX,
            n = this._dis.height * this._pivotY;
            this._dis.anchorOffsetX = e,
            this._dis.anchorOffsetY = n,
            this._dis.dispatchEventWith(t.EVENT_UPDATE_PIVOT)
        },
        t.prototype.setPivotXY = function(t, e) {
            this._pivotX = t,
            this._pivotY = e,
            this.$resetPosition()
        },
        t.prototype.setPivotX = function(t) {
            this._pivotX = t,
            this.$resetPosition()
        },
        t.prototype.setPivotY = function(t) {
            this._pivotY = t,
            this.$resetPosition()
        },
        t.prototype.$resetPosition = function() {
            var t = this._dis.scaleX > 0 ? this._dis.x - this._dis.anchorOffsetX: this._dis.x + this._dis.anchorOffsetX,
            e = this._dis.scaleY > 0 ? this._dis.y - this._dis.anchorOffsetY: this._dis.y + this._dis.anchorOffsetY;
            this.$updateDisplay(),
            this._dis.x = this._dis.scaleX > 0 ? t + this._dis.anchorOffsetX: t - this._dis.anchorOffsetX,
            this._dis.y = this._dis.scaleY > 0 ? e + this._dis.anchorOffsetY: e - this._dis.anchorOffsetY
        },
        Object.defineProperty(t.prototype, "pivotX", {
            get: function() {
                return this._pivotX
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "pivotY", {
            get: function() {
                return this._pivotY
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.destroy = function() {
            for (var t = 0; t < this._attrWatcherArray.length; t++) {
                var e = this._attrWatcherArray[t];
                e.unwatch()
            }
            this._attrWatcherArray = [],
            this._dis = null
        },
        t.EVENT_UPDATE_PIVOT = "event_update_pivot",
        t
    } ();
    t.AutoSetPivot = e,
    __reflect(e.prototype, "common.AutoSetPivot")
} (common || (common = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
MaskUtil = function() {
    function t() {}
    return t.showMask = function(e, n, r, i, o, s) {
        void 0 === i && (i = 0),
        void 0 === o && (o = .5),
        void 0 === s && (s = !0),
        t.__bitmap__ || (t.__bitmap__ = new egret.Bitmap),
        t.__callback__ = n,
        t.__caller__ = r,
        (void 0 === i || null === i) && (i = 0),
        (void 0 === o || null === o) && (o = .5),
        t.__isHide__ = s;
        var a = window.LevelManager.tipLevel,
        h = new egret.Shape;
        h.graphics.beginFill(i, 1),
        h.graphics.drawRect(0, 0, egret.lifecycle.stage.stageWidth, egret.lifecycle.stage.stageHeight),
        h.graphics.endFill();
        var _ = new egret.DisplayObjectContainer;
        _.addChild(h);
        for (var c = 0; c < e.length; c++) {
            var u = e[c],
            l = new egret.Shape;
            l.graphics.beginFill(0, 1);
            var f = u.width > u.measuredWidth ? u.width: u.measuredWidth,
            d = u.height > u.measuredHeight ? u.height: u.measuredHeight;
            l.graphics.drawRect(0, 0, f, d),
            l.graphics.endFill(),
            l.x = u.localToGlobal().x,
            l.y = u.localToGlobal().y,
            _.addChild(l),
            l.blendMode = egret.BlendMode.ERASE
        }
        var p = new egret.RenderTexture;
        p.drawToTexture(_),
        t.__bitmap__.texture && t.__bitmap__.texture.dispose(),
        t.__bitmap__.texture = p,
        t.__bitmap__.touchEnabled = !0,
        t.__bitmap__.pixelHitTest = !0,
        t.__bitmap__.addEventListener(egret.TouchEvent.TOUCH_TAP, t.__touchMask, this),
        t.__bitmap__.alpha = o,
        a.addChild(t.__bitmap__)
    },
    t.__touchMask = function(e) {
        if (t.__isHide__) {
            t.__bitmap__.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.__touchMask, this),
            t.__bitmap__.parent && t.__bitmap__.parent.removeChild(t.__bitmap__);
            var n = t.__callback__,
            r = t.__caller__;
            t.__callback__ && t.__caller__ && t.__callback__.apply(t.__caller__, null),
            n === t.__callback__ && r === t.__caller__ && (t.__callback__ = null, t.__caller__ = null)
        }
    },
    t.Hide = function() {
        t.__bitmap__ && (t.__bitmap__.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.__touchMask, this), t.__bitmap__.parent && t.__bitmap__.parent.removeChild(t.__bitmap__)),
        t.__callback__ = null,
        t.__caller__ = null
    },
    t.__isHide__ = !0,
    t
} ();
__reflect(MaskUtil.prototype, "MaskUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
MathUtil = function() {
    function t() {}
    return t.lerp = function(t, e, n, r, i) {
        return t == n ? e: (r - e) / (n - t) * (i - t) + e
    },
    t.RandomFloorInt = function(t, e, n) {
        return void 0 === n && (n = !1),
        n && (e += 1),
        Math.floor(Math.random() * (e - t) + t)
    },
    t.RandomCeilInt = function(t, e, n) {
        return void 0 === n && (n = !1),
        n && (e += 1),
        Math.ceil(Math.random() * (e - t) + t)
    },
    t.RandomRoundInt = function(t, e, n) {
        return void 0 === n && (n = !1),
        n || (e -= 1),
        Math.min(Math.round(Math.random() * (e - t) + t), e)
    },
    t
} ();
__reflect(MathUtil.prototype, "MathUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
MD5 = function() {
    function t() {}
    return t.hash = function(t) {
        for (var e, n, r, i, o = 1732584193,
        s = -271733879,
        a = -1732584194,
        h = 271733878,
        _ = this.createBlocks(this.changeUTF(t)), c = _.length, u = 0; c > u; u += 16) e = o,
        n = s,
        r = a,
        i = h,
        o = this.ff(o, s, a, h, _[u + 0], 7, -680876936),
        h = this.ff(h, o, s, a, _[u + 1], 12, -389564586),
        a = this.ff(a, h, o, s, _[u + 2], 17, 606105819),
        s = this.ff(s, a, h, o, _[u + 3], 22, -1044525330),
        o = this.ff(o, s, a, h, _[u + 4], 7, -176418897),
        h = this.ff(h, o, s, a, _[u + 5], 12, 1200080426),
        a = this.ff(a, h, o, s, _[u + 6], 17, -1473231341),
        s = this.ff(s, a, h, o, _[u + 7], 22, -45705983),
        o = this.ff(o, s, a, h, _[u + 8], 7, 1770035416),
        h = this.ff(h, o, s, a, _[u + 9], 12, -1958414417),
        a = this.ff(a, h, o, s, _[u + 10], 17, -42063),
        s = this.ff(s, a, h, o, _[u + 11], 22, -1990404162),
        o = this.ff(o, s, a, h, _[u + 12], 7, 1804603682),
        h = this.ff(h, o, s, a, _[u + 13], 12, -40341101),
        a = this.ff(a, h, o, s, _[u + 14], 17, -1502002290),
        s = this.ff(s, a, h, o, _[u + 15], 22, 1236535329),
        o = this.gg(o, s, a, h, _[u + 1], 5, -165796510),
        h = this.gg(h, o, s, a, _[u + 6], 9, -1069501632),
        a = this.gg(a, h, o, s, _[u + 11], 14, 643717713),
        s = this.gg(s, a, h, o, _[u + 0], 20, -373897302),
        o = this.gg(o, s, a, h, _[u + 5], 5, -701558691),
        h = this.gg(h, o, s, a, _[u + 10], 9, 38016083),
        a = this.gg(a, h, o, s, _[u + 15], 14, -660478335),
        s = this.gg(s, a, h, o, _[u + 4], 20, -405537848),
        o = this.gg(o, s, a, h, _[u + 9], 5, 568446438),
        h = this.gg(h, o, s, a, _[u + 14], 9, -1019803690),
        a = this.gg(a, h, o, s, _[u + 3], 14, -187363961),
        s = this.gg(s, a, h, o, _[u + 8], 20, 1163531501),
        o = this.gg(o, s, a, h, _[u + 13], 5, -1444681467),
        h = this.gg(h, o, s, a, _[u + 2], 9, -51403784),
        a = this.gg(a, h, o, s, _[u + 7], 14, 1735328473),
        s = this.gg(s, a, h, o, _[u + 12], 20, -1926607734),
        o = this.hh(o, s, a, h, _[u + 5], 4, -378558),
        h = this.hh(h, o, s, a, _[u + 8], 11, -2022574463),
        a = this.hh(a, h, o, s, _[u + 11], 16, 1839030562),
        s = this.hh(s, a, h, o, _[u + 14], 23, -35309556),
        o = this.hh(o, s, a, h, _[u + 1], 4, -1530992060),
        h = this.hh(h, o, s, a, _[u + 4], 11, 1272893353),
        a = this.hh(a, h, o, s, _[u + 7], 16, -155497632),
        s = this.hh(s, a, h, o, _[u + 10], 23, -1094730640),
        o = this.hh(o, s, a, h, _[u + 13], 4, 681279174),
        h = this.hh(h, o, s, a, _[u + 0], 11, -358537222),
        a = this.hh(a, h, o, s, _[u + 3], 16, -722521979),
        s = this.hh(s, a, h, o, _[u + 6], 23, 76029189),
        o = this.hh(o, s, a, h, _[u + 9], 4, -640364487),
        h = this.hh(h, o, s, a, _[u + 12], 11, -421815835),
        a = this.hh(a, h, o, s, _[u + 15], 16, 530742520),
        s = this.hh(s, a, h, o, _[u + 2], 23, -995338651),
        o = this.ii(o, s, a, h, _[u + 0], 6, -198630844),
        h = this.ii(h, o, s, a, _[u + 7], 10, 1126891415),
        a = this.ii(a, h, o, s, _[u + 14], 15, -1416354905),
        s = this.ii(s, a, h, o, _[u + 5], 21, -57434055),
        o = this.ii(o, s, a, h, _[u + 12], 6, 1700485571),
        h = this.ii(h, o, s, a, _[u + 3], 10, -1894986606),
        a = this.ii(a, h, o, s, _[u + 10], 15, -1051523),
        s = this.ii(s, a, h, o, _[u + 1], 21, -2054922799),
        o = this.ii(o, s, a, h, _[u + 8], 6, 1873313359),
        h = this.ii(h, o, s, a, _[u + 15], 10, -30611744),
        a = this.ii(a, h, o, s, _[u + 6], 15, -1560198380),
        s = this.ii(s, a, h, o, _[u + 13], 21, 1309151649),
        o = this.ii(o, s, a, h, _[u + 4], 6, -145523070),
        h = this.ii(h, o, s, a, _[u + 11], 10, -1120210379),
        a = this.ii(a, h, o, s, _[u + 2], 15, 718787259),
        s = this.ii(s, a, h, o, _[u + 9], 21, -343485551),
        o += e,
        s += n,
        a += r,
        h += i;
        return IntUtil.toHex(o) + IntUtil.toHex(s) + IntUtil.toHex(a) + IntUtil.toHex(h)
    },
    t.f = function(t, e, n) {
        return t & e | ~t & n
    },
    t.g = function(t, e, n) {
        return t & n | e & ~n
    },
    t.h = function(t, e, n) {
        return t ^ e ^ n
    },
    t.i = function(t, e, n) {
        return e ^ (t | ~n)
    },
    t.transform = function(t, e, n, r, i, o, s, a) {
        var h = e + Number(t(n, r, i)) + o + a;
        return IntUtil.rol(h, s) + n
    },
    t.ff = function(t, e, n, r, i, o, s) {
        return this.transform(this.f, t, e, n, r, i, o, s)
    },
    t.gg = function(t, e, n, r, i, o, s) {
        return this.transform(this.g, t, e, n, r, i, o, s)
    },
    t.hh = function(t, e, n, r, i, o, s) {
        return this.transform(this.h, t, e, n, r, i, o, s)
    },
    t.ii = function(t, e, n, r, i, o, s) {
        return this.transform(this.i, t, e, n, r, i, o, s)
    },
    t.createBlocks = function(t) {
        for (var e = new Array,
        n = 8 * t.length,
        r = 255,
        i = 0; n > i; i += 8) e[i >> 5] |= (t.charCodeAt(i / 8) & r) << i % 32;
        return e[n >> 5] |= 128 << n % 32,
        e[(n + 64 >>> 9 << 4) + 14] = n,
        e
    },
    t.changeUTF2ASCII = function(t) {
        if (t.length > 65535) throw new Error("In MD5:changeUTF2 s.length must less than 65536");
        var e = new egret.ByteArray;
        e.writeUTF(t),
        e.position = 2;
        for (var n = "",
        r = 0,
        i = e.bytesAvailable; i > r; r++) {
            var o = e.readUnsignedByte(),
            s = String.fromCharCode(o);
            n += s
        }
        return n
    },
    t.changeUTF = function(t) {
        for (var e = 65530,
        n = Math.ceil(t.length / e), r = "", i = "", o = 0; n > o; o++) r = o == n - 1 ? t.substr(o * e) : t.substr(o * e, e),
        i += this.changeUTF2ASCII(r);
        return i
    },
    t
} ();
__reflect(MD5.prototype, "MD5");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
Md5new = function() {
    function t() {
        this.hexcase = 0,
        this.b64pad = ""
    }
    return t.prototype.hex_md5 = function(t) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))
    },
    t.prototype.b64_md5 = function(t) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))
    },
    t.prototype.any_md5 = function(t, e) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e)
    },
    t.prototype.hex_hmac_md5 = function(t, e) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
    },
    t.prototype.b64_hmac_md5 = function(t, e) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
    },
    t.prototype.any_hmac_md5 = function(t, e, n) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), n)
    },
    t.prototype.md5_vm_test = function() {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
    },
    t.prototype.rstr_md5 = function(t) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length))
    },
    t.prototype.rstr_hmac_md5 = function(t, e) {
        var n = this.rstr2binl(t);
        n.length > 16 && (n = this.binl_md5(n, 8 * t.length));
        for (var r = Array(16), i = Array(16), o = 0; 16 > o; o++) r[o] = 909522486 ^ n[o],
        i[o] = 1549556828 ^ n[o];
        var s = this.binl_md5(r.concat(this.rstr2binl(e)), 512 + 8 * e.length);
        return this.binl2rstr(this.binl_md5(i.concat(s), 640))
    },
    t.prototype.rstr2hex = function(t) {
        try {
            this.hexcase
        } catch(e) {
            this.hexcase = 0
        }
        for (var n, r = this.hexcase ? "0123456789ABCDEF": "0123456789abcdef", i = "", o = 0; o < t.length; o++) n = t.charCodeAt(o),
        i += r.charAt(n >>> 4 & 15) + r.charAt(15 & n);
        return i
    },
    t.prototype.rstr2b64 = function(t) {
        try {
            this.b64pad
        } catch(e) {
            this.b64pad = ""
        }
        for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        r = "",
        i = t.length,
        o = 0; i > o; o += 3) for (var s = t.charCodeAt(o) << 16 | (i > o + 1 ? t.charCodeAt(o + 1) << 8 : 0) | (i > o + 2 ? t.charCodeAt(o + 2) : 0), a = 0; 4 > a; a++) r += 8 * o + 6 * a > 8 * t.length ? this.b64pad: n.charAt(s >>> 6 * (3 - a) & 63);
        return r
    },
    t.prototype.rstr2any = function(t, e) {
        var n, r, i, o, s, a = e.length,
        h = Array(Math.ceil(t.length / 2));
        for (n = 0; n < h.length; n++) h[n] = t.charCodeAt(2 * n) << 8 | t.charCodeAt(2 * n + 1);
        var _ = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))),
        c = Array(_);
        for (r = 0; _ > r; r++) {
            for (s = Array(), o = 0, n = 0; n < h.length; n++) o = (o << 16) + h[n],
            i = Math.floor(o / a),
            o -= i * a,
            (s.length > 0 || i > 0) && (s[s.length] = i);
            c[r] = o,
            h = s
        }
        var u = "";
        for (n = c.length - 1; n >= 0; n--) u += e.charAt(c[n]);
        return u
    },
    t.prototype.str2rstr_utf8 = function(t) {
        for (var e, n, r = "",
        i = -1; ++i < t.length;) e = t.charCodeAt(i),
        n = i + 1 < t.length ? t.charCodeAt(i + 1) : 0,
        e >= 55296 && 56319 >= e && n >= 56320 && 57343 >= n && (e = 65536 + ((1023 & e) << 10) + (1023 & n), i++),
        127 >= e ? r += String.fromCharCode(e) : 2047 >= e ? r += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : 65535 >= e ? r += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : 2097151 >= e && (r += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
        return r
    },
    t.prototype.str2rstr_utf16le = function(t) {
        for (var e = "",
        n = 0; n < t.length; n++) e += String.fromCharCode(255 & t.charCodeAt(n), t.charCodeAt(n) >>> 8 & 255);
        return e
    },
    t.prototype.str2rstr_utf16be = function(t) {
        for (var e = "",
        n = 0; n < t.length; n++) e += String.fromCharCode(t.charCodeAt(n) >>> 8 & 255, 255 & t.charCodeAt(n));
        return e
    },
    t.prototype.rstr2binl = function(t) {
        for (var e = Array(t.length >> 2), n = 0; n < e.length; n++) e[n] = 0;
        for (var n = 0; n < 8 * t.length; n += 8) e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32;
        return e
    },
    t.prototype.binl2rstr = function(t) {
        for (var e = "",
        n = 0; n < 32 * t.length; n += 8) e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255);
        return e
    },
    t.prototype.binl_md5 = function(t, e) {
        t[e >> 5] |= 128 << e % 32,
        t[(e + 64 >>> 9 << 4) + 14] = e;
        for (var n = 1732584193,
        r = -271733879,
        i = -1732584194,
        o = 271733878,
        s = 0; s < t.length; s += 16) {
            var a = n,
            h = r,
            _ = i,
            c = o;
            n = this.md5_ff(n, r, i, o, t[s + 0], 7, -680876936),
            o = this.md5_ff(o, n, r, i, t[s + 1], 12, -389564586),
            i = this.md5_ff(i, o, n, r, t[s + 2], 17, 606105819),
            r = this.md5_ff(r, i, o, n, t[s + 3], 22, -1044525330),
            n = this.md5_ff(n, r, i, o, t[s + 4], 7, -176418897),
            o = this.md5_ff(o, n, r, i, t[s + 5], 12, 1200080426),
            i = this.md5_ff(i, o, n, r, t[s + 6], 17, -1473231341),
            r = this.md5_ff(r, i, o, n, t[s + 7], 22, -45705983),
            n = this.md5_ff(n, r, i, o, t[s + 8], 7, 1770035416),
            o = this.md5_ff(o, n, r, i, t[s + 9], 12, -1958414417),
            i = this.md5_ff(i, o, n, r, t[s + 10], 17, -42063),
            r = this.md5_ff(r, i, o, n, t[s + 11], 22, -1990404162),
            n = this.md5_ff(n, r, i, o, t[s + 12], 7, 1804603682),
            o = this.md5_ff(o, n, r, i, t[s + 13], 12, -40341101),
            i = this.md5_ff(i, o, n, r, t[s + 14], 17, -1502002290),
            r = this.md5_ff(r, i, o, n, t[s + 15], 22, 1236535329),
            n = this.md5_gg(n, r, i, o, t[s + 1], 5, -165796510),
            o = this.md5_gg(o, n, r, i, t[s + 6], 9, -1069501632),
            i = this.md5_gg(i, o, n, r, t[s + 11], 14, 643717713),
            r = this.md5_gg(r, i, o, n, t[s + 0], 20, -373897302),
            n = this.md5_gg(n, r, i, o, t[s + 5], 5, -701558691),
            o = this.md5_gg(o, n, r, i, t[s + 10], 9, 38016083),
            i = this.md5_gg(i, o, n, r, t[s + 15], 14, -660478335),
            r = this.md5_gg(r, i, o, n, t[s + 4], 20, -405537848),
            n = this.md5_gg(n, r, i, o, t[s + 9], 5, 568446438),
            o = this.md5_gg(o, n, r, i, t[s + 14], 9, -1019803690),
            i = this.md5_gg(i, o, n, r, t[s + 3], 14, -187363961),
            r = this.md5_gg(r, i, o, n, t[s + 8], 20, 1163531501),
            n = this.md5_gg(n, r, i, o, t[s + 13], 5, -1444681467),
            o = this.md5_gg(o, n, r, i, t[s + 2], 9, -51403784),
            i = this.md5_gg(i, o, n, r, t[s + 7], 14, 1735328473),
            r = this.md5_gg(r, i, o, n, t[s + 12], 20, -1926607734),
            n = this.md5_hh(n, r, i, o, t[s + 5], 4, -378558),
            o = this.md5_hh(o, n, r, i, t[s + 8], 11, -2022574463),
            i = this.md5_hh(i, o, n, r, t[s + 11], 16, 1839030562),
            r = this.md5_hh(r, i, o, n, t[s + 14], 23, -35309556),
            n = this.md5_hh(n, r, i, o, t[s + 1], 4, -1530992060),
            o = this.md5_hh(o, n, r, i, t[s + 4], 11, 1272893353),
            i = this.md5_hh(i, o, n, r, t[s + 7], 16, -155497632),
            r = this.md5_hh(r, i, o, n, t[s + 10], 23, -1094730640),
            n = this.md5_hh(n, r, i, o, t[s + 13], 4, 681279174),
            o = this.md5_hh(o, n, r, i, t[s + 0], 11, -358537222),
            i = this.md5_hh(i, o, n, r, t[s + 3], 16, -722521979),
            r = this.md5_hh(r, i, o, n, t[s + 6], 23, 76029189),
            n = this.md5_hh(n, r, i, o, t[s + 9], 4, -640364487),
            o = this.md5_hh(o, n, r, i, t[s + 12], 11, -421815835),
            i = this.md5_hh(i, o, n, r, t[s + 15], 16, 530742520),
            r = this.md5_hh(r, i, o, n, t[s + 2], 23, -995338651),
            n = this.md5_ii(n, r, i, o, t[s + 0], 6, -198630844),
            o = this.md5_ii(o, n, r, i, t[s + 7], 10, 1126891415),
            i = this.md5_ii(i, o, n, r, t[s + 14], 15, -1416354905),
            r = this.md5_ii(r, i, o, n, t[s + 5], 21, -57434055),
            n = this.md5_ii(n, r, i, o, t[s + 12], 6, 1700485571),
            o = this.md5_ii(o, n, r, i, t[s + 3], 10, -1894986606),
            i = this.md5_ii(i, o, n, r, t[s + 10], 15, -1051523),
            r = this.md5_ii(r, i, o, n, t[s + 1], 21, -2054922799),
            n = this.md5_ii(n, r, i, o, t[s + 8], 6, 1873313359),
            o = this.md5_ii(o, n, r, i, t[s + 15], 10, -30611744),
            i = this.md5_ii(i, o, n, r, t[s + 6], 15, -1560198380),
            r = this.md5_ii(r, i, o, n, t[s + 13], 21, 1309151649),
            n = this.md5_ii(n, r, i, o, t[s + 4], 6, -145523070),
            o = this.md5_ii(o, n, r, i, t[s + 11], 10, -1120210379),
            i = this.md5_ii(i, o, n, r, t[s + 2], 15, 718787259),
            r = this.md5_ii(r, i, o, n, t[s + 9], 21, -343485551),
            n = this.safe_add(n, a),
            r = this.safe_add(r, h),
            i = this.safe_add(i, _),
            o = this.safe_add(o, c)
        }
        return [n, r, i, o]
    },
    t.prototype.md5_cmn = function(t, e, n, r, i, o) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(r, o)), i), n)
    },
    t.prototype.md5_ff = function(t, e, n, r, i, o, s) {
        return this.md5_cmn(e & n | ~e & r, t, e, i, o, s)
    },
    t.prototype.md5_gg = function(t, e, n, r, i, o, s) {
        return this.md5_cmn(e & r | n & ~r, t, e, i, o, s)
    },
    t.prototype.md5_hh = function(t, e, n, r, i, o, s) {
        return this.md5_cmn(e ^ n ^ r, t, e, i, o, s)
    },
    t.prototype.md5_ii = function(t, e, n, r, i, o, s) {
        return this.md5_cmn(n ^ (e | ~r), t, e, i, o, s)
    },
    t.prototype.safe_add = function(t, e) {
        var n = (65535 & t) + (65535 & e),
        r = (t >> 16) + (e >> 16) + (n >> 16);
        return r << 16 | 65535 & n
    },
    t.prototype.bit_rol = function(t, e) {
        return t << e | t >>> 32 - e
    },
    t
} ();
__reflect(Md5new.prototype, "Md5new");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
ObjectPool = function() {
    function t(t, e, n, r) {
        void 0 === e && (e = 20),
        this._size = e,
        this._clazz = t,
        this._destoryFun = r,
        this._resetFun = n,
        this._clazzs = []
    }
    return t.prototype.pop = function() {
        var t = this._clazzs.shift();
        return t ? t[this._resetFun] && t[this._resetFun]() : t = new this._clazz,
        t
    },
    t.prototype.push = function(t) {
        return this._clazzs.length >= this._size ? (console.error("存入失败当前总容量为", this._size), !1) : this._clazzs.indexOf(t) > -1 ? (console.error("存入失败当前当前实例已经在pool池中"), !1) : (this._clazzs.push(t), !0)
    },
    t.prototype.size = function() {
        return this._clazzs.length
    },
    t.prototype.clear = function() {
        for (var t = this._clazzs.length - 1; t >= 0; t--) {
            var e = this._clazzs[t];
            this._destoryFun && e[this._destoryFun] && e[this._destoryFun](),
            this._clazzs.splice(t, 1)
        }
    },
    t.prototype.destroy = function() {
        this.clear(),
        this._clazz = null,
        this._clazzs = null,
        this._destoryFun = null,
        this._resetFun = null,
        this._size = null
    },
    t
} ();
__reflect(ObjectPool.prototype, "ObjectPool");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
SearchUtil = function() {
    function t() {}
    return t.convertPY = function(e) {
        if (null == e || 0 == e.length) return "";
        var n = e.charAt(0);
        if (e.charCodeAt(0) <= 255) return n;
        for (var r = 0; r < t._pystr.length; r++) if (t._pystr[r].indexOf(n) >= 0) return t._pyvalue[r];
        return ""
    },
    t.convertPYs = function(e) {
        for (var n, r = e.split(""), i = [], o = [], s = 0; s < r.length; s++) n = t.convertPY(r[s]),
        n && (i.push(n), o.push(n.charAt(0)));
        return [i.join(""), o.join(""), e]
    },
    t.isMatch = function(e, n) {
        var r = !1,
        i = t.convertPYs(n).join("_");
        return i.indexOf(e) >= 0 && (r = !0),
        r
    },
    t._pyvalue = ["a", "ai", "an", "ang", "ao", "ba", "bai", "ban", "bang", "bao", "bei", "ben", "beng", "bi", "bian", "biao", "bie", "bin", "bing", "bo", "bu", "ca", "cai", "can", "cang", "cao", "ce", "cen", "ceng", "cha", "chai", "chan", "chang", "chao", "che", "chen", "cheng", "chi", "chong", "chou", "chu", "chuai", "chuan", "chuang", "chui", "chun", "chuo", "ci", "cong", "cou", "cu", "cuan", "cui", "cun", "cuo", "da", "dai", "dan", "dang", "dao", "de", "dei", "deng", "di", "dia", "dian", "diao", "die", "ding", "diu", "dong", "dou", "du", "duan", "dui", "dun", "duo", "e", "ei", "en", "er", "fa", "fan", "fang", "fei", "fen", "feng", "fo", "fou", "fu", "ga", "gai", "gan", "gang", "gao", "ge", "gei", "gen", "geng", "gong", "gou", "gu", "gua", "guai", "guan", "guang", "gui", "gun", "guo", "ha", "hai", "han", "hang", "hao", "he", "hei", "hen", "heng", "hng", "hong", "hou", "hu", "hua", "huai", "huan", "huang", "hui", "hun", "huo", "ji", "jia", "jian", "jiang", "jiao", "jie", "jin", "jing", "jiong", "jiu", "ju", "juan", "jue", "jun", "ka", "kai", "kan", "kang", "kao", "ke", "ken", "keng", "kong", "kou", "ku", "kua", "kuai", "kuan", "kuang", "kui", "kun", "kuo", "la", "lai", "lan", "lang", "lao", "le", "lei", "leng", "li", "lia", "lian", "liang", "liao", "lie", "lin", "ling", "liu", "lo", "long", "lou", "lu", "luan", "lun", "luo", "lue", "lv", "m", "ma", "mai", "man", "mang", "mao", "me", "mei", "men", "meng", "mi", "mian", "miao", "mie", "min", "ming", "miu", "mo", "mou", "mu", "n", "na", "nai", "nan", "nang", "nao", "ne", "nei", "nen", "neng", "ng", "ni", "nian", "niang", "niao", "nie", "nin", "ning", "niu", "nong", "nou", "nu", "nuan", "nuo", "nue", "nv", "o", "ou", "pa", "pai", "pan", "pang", "pao", "pei", "pen", "peng", "pi", "pian", "piao", "pie", "pin", "ping", "po", "pou", "pu", "qi", "qia", "qian", "qiang", "qiao", "qie", "qin", "qing", "qiong", "qiu", "qu", "quan", "que", "qun", "ran", "rang", "rao", "re", "ren", "reng", "ri", "rong", "rou", "ru", "ruan", "rui", "run", "ruo", "sa", "sai", "san", "sang", "sao", "se", "sen", "seng", "sha", "shai", "shan", "shang", "shao", "she", "shei", "shen", "sheng", "shi", "shou", "shu", "shua", "shuai", "shuan", "shuang", "shui", "shun", "shuo", "si", "song", "sou", "su", "suan", "sui", "sun", "suo", "ta", "tai", "tan", "tang", "tao", "te", "tei", "teng", "ti", "tian", "tiao", "tie", "ting", "tong", "tou", "tu", "tuan", "tui", "tun", "tuo", "wa", "wai", "wan", "wang", "wei", "wen", "weng", "wo", "wu", "xi", "xia", "xian", "xiang", "xiao", "xie", "xin", "xing", "xiong", "xiu", "xu", "xuan", "xue", "xun", "ya", "yan", "yang", "yao", "ye", "yi", "yin", "ying", "yo", "yong", "you", "yu", "yuan", "yue", "yun", "za", "zai", "zan", "zang", "zao", "ze", "zei", "zen", "zeng", "zha", "zhai", "zhan", "zhang", "zhao", "zhe", "zhei", "zhen", "zheng", "zhi", "zhong", "zhou", "zhu", "zhua", "zhuai", "zhuan", "zhuang", "zhui", "zhun", "zhuo", "zi", "zong", "zou", "zu", "zuan", "zui", "zun", "zuo"],
    t._pystr = ["阿啊呵腌吖锕啊呵嗄啊呵啊呵阿啊呵", "哀挨埃唉哎捱锿呆挨癌皑捱矮哎蔼霭嗳爱碍艾唉哎隘暧嗳瑷嗌嫒砹", "安谙鞍氨庵桉鹌广厂俺铵揞埯案按暗岸黯胺犴", "肮昂盎", "熬凹熬敖嚣嗷鏖鳌翱獒聱螯廒遨袄拗媪奥澳傲懊坳拗骜岙鏊", "八吧巴叭芭扒疤笆粑岜捌八拔跋茇菝魃把靶钯把爸罢霸坝耙灞鲅吧罢", "掰白百摆伯柏佰捭败拜呗稗", "般班搬斑颁扳瘢癍版板阪坂钣舨办半伴扮瓣拌绊", "帮邦浜梆膀榜绑棒膀傍磅谤镑蚌蒡", "包胞炮剥褒苞孢煲龅薄雹保宝饱堡葆褓鸨报暴抱爆鲍曝刨瀑豹趵", "背悲杯碑卑陂埤萆鹎北被备背辈倍贝蓓惫悖狈焙邶钡孛碚褙鐾鞴臂呗", "奔贲锛本苯畚奔笨夯坌", "崩绷嘣甭绷绷蹦迸甏泵蚌", "逼鼻荸比笔彼鄙匕俾妣吡秕舭必毕币秘避闭壁臂弊辟碧拂毙蔽庇璧敝泌陛弼篦婢愎痹铋裨濞髀庳毖滗蓖埤芘嬖荜贲畀萆薜筚箅哔襞跸狴", "编边鞭砭煸蝙笾鳊贬扁匾碥窆褊便变遍辩辨辫卞苄汴忭弁缏边", "标彪勺镖膘骠镳杓飚飑飙瘭髟表裱婊鳔", "憋瘪鳖别蹩瘪别", "宾滨彬斌缤濒槟傧玢豳镔鬓殡摈膑髌", "并兵冰槟饼屏丙柄秉炳禀邴并病摒", "般波播拨剥玻饽菠钵趵百博伯勃薄泊柏驳魄脖搏膊舶礴帛铂箔渤钹孛亳鹁踣簸跛薄柏簸掰擘檗卜啵", "逋晡钸不醭补捕堡卜哺卟不部布步怖簿埔埠瓿钚", "擦拆嚓礤", "猜才财材裁采彩踩睬采菜蔡", "参餐骖残惭蚕惨黪惨灿掺璨孱粲", "苍仓沧舱伧藏", "操糙曹槽嘈漕螬艚草", "策测侧厕册恻", "参岑涔", "噌层蹭", "差插叉碴喳嚓杈馇锸查察茶叉茬碴楂猹搽槎檫叉衩镲差刹叉诧岔衩杈汊姹", "差拆钗柴豺侪虿瘥", "搀掺觇单缠禅蝉馋潺蟾婵谗廛孱镡澶躔产铲阐谄冁蒇骣颤忏羼", "昌娼猖伥阊菖鲳长场常尝肠偿倘裳嫦徜苌场厂敞氅昶惝唱畅倡怅鬯", "超抄吵钞绰剿焯怊朝潮嘲巢晁炒吵耖", "车砗尺扯彻撤澈掣坼", "郴琛嗔抻陈沉晨沈尘臣辰橙忱谌宸碜称趁衬秤谶榇龀伧", "称撑秤瞠噌铛柽蛏成城程承诚盛乘呈惩澄橙丞埕枨塍铖裎酲逞骋裎称秤", "吃痴哧嗤蚩笞鸱媸螭眵魑持迟池驰匙弛踟墀茌篪坻尺齿耻侈褫豉赤斥翅啻炽敕叱饬傺彳瘛", "冲充涌憧忡艟舂茺种重崇虫宠冲铳", "抽瘳愁仇筹酬绸踌惆畴稠帱俦雠丑瞅臭", "出初樗除厨躇橱雏锄蜍刍滁蹰处楚储础杵褚楮处触畜矗怵搐绌黜亍憷", "揣搋揣揣啜踹嘬膪", "穿川巛氚传船遄椽舡喘舛串钏", "创窗疮床幢闯创怆", "吹炊垂锤捶陲椎槌棰", "春椿蝽纯唇醇淳鹑莼蠢", "戳踔绰啜辍龊", "差刺疵呲词辞慈磁瓷兹茨雌祠茈鹚糍此次刺赐伺", "从匆聪葱囱苁骢璁枞从丛琮淙", "凑楱辏腠", "粗徂殂促簇醋卒猝蹴蹙蔟酢", "蹿撺汆镩攒窜篡爨", "衰催摧崔隹榱璀脆粹萃翠瘁悴淬毳啐", "村皴存蹲忖寸", "搓撮磋蹉嵯矬痤瘥鹾撮脞错措挫厝锉", "答搭嗒耷褡哒打达答瘩沓鞑怛笪靼妲打大塔疸", "待呆呔逮歹傣大代带待戴袋贷逮殆黛怠玳岱迨骀绐埭甙", "单担丹耽眈殚箪儋瘅聃郸担胆掸赕疸瘅但担弹淡旦蛋诞惮啖澹氮萏瘅", "当裆铛党挡谠当荡档挡宕菪凼砀", "刀叨忉氘叨导倒岛蹈捣祷到道倒悼盗稻焘帱纛", "得德锝的地得底", "得", "登灯蹬噔簦等戥邓凳瞪澄蹬磴镫嶝", "提低滴堤嘀氐镝羝的敌迪笛涤嘀狄嫡翟荻籴觌镝底抵诋邸砥坻柢氐骶的地第帝弟递蒂缔谛睇棣娣碲绨", "嗲", "颠滇掂癫巅点典碘踮丶电店甸淀垫殿奠惦佃玷簟坫靛钿癜阽", "雕刁凋叼貂碉鲷鸟调掉吊钓铫铞", "爹跌踮叠迭碟谍蝶喋佚牒耋蹀堞瓞揲垤鲽", "丁盯钉叮町酊疔仃耵玎顶鼎酊定订钉铤腚锭碇啶", "丢铥", "东冬咚岽氡鸫懂董硐动洞冻栋恫侗垌峒胨胴硐", "都兜蔸篼斗抖陡蚪读斗豆逗窦痘", "都督嘟读独顿毒渎牍犊黩髑椟肚睹堵赌笃度渡肚杜妒镀芏蠹", "端短断段锻缎煅椴簖", "堆对队兑敦碓憝怼镦", "吨敦蹲墩礅镦盹趸顿盾钝炖遁沌囤砘", "多咄哆掇裰度夺踱铎朵躲垛哚缍舵堕跺剁惰垛驮沲柁", "阿婀屙额俄哦鹅娥峨蛾讹莪锇恶恶饿扼愕遏噩呃厄鄂轭颚鳄谔锷萼腭垩鹗苊阏呃", "诶诶诶", "恩蒽摁", "而儿鸸鲕尔耳迩饵洱珥铒二贰佴", "发罚乏伐阀筏垡法砝发珐", "翻番帆藩幡蕃凡烦繁泛樊蕃燔矾蘩钒蹯反返饭犯范贩泛梵畈", "方芳妨坊邡枋钫房防妨坊肪鲂访仿纺彷舫放", "非飞啡菲扉霏妃绯蜚鲱肥腓淝菲匪诽斐蜚翡悱篚榧费废沸肺吠痱狒镄芾", "分纷氛芬吩酚玢坟焚汾棼鼢粉分份奋愤粪忿偾瀵鲼", "风封丰峰疯锋蜂枫烽酆葑沣砜逢缝冯讽唪奉缝凤俸葑", "佛", "否缶", "夫肤敷孵呋稃麸趺跗夫服福佛幅伏符浮扶弗拂袱俘芙孚匐辐涪氟桴蜉苻茯莩菔幞怫艴郛绂绋凫祓砩黻罘稃蚨芾蝠府父腐抚辅甫俯斧脯釜腑拊滏黼服复父负副富付妇附赴腹覆赋傅缚咐阜讣驸赙馥蝮鲋鳆咐", "夹咖嘎胳伽旮嘎噶轧尜钆嘎尕尬", "该赅垓陔改概盖丐钙芥溉戤", "干甘肝杆尴乾竿坩苷柑泔矸疳酐感敢赶杆橄秆擀澉干赣淦绀旰", "刚钢纲缸扛杠冈肛罡港岗钢杠戆筻", "高糕膏皋羔睾篙槔稿搞藁槁缟镐杲告膏诰郜锆", "歌格哥戈割胳搁疙咯鸽屹仡圪纥袼革格隔葛阁胳搁蛤嗝骼颌搿膈镉塥鬲个各合盖葛哿舸个各铬硌虼", "给", "根跟哏艮亘艮茛", "更耕庚羹赓耿颈梗哽鲠埂绠更", "工公共红供功攻宫恭躬龚弓肱蚣觥巩拱汞珙共供贡", "句沟勾钩篝佝枸缑鞲狗苟岣枸笱够购构勾觏垢诟媾遘彀", "姑骨孤估辜咕呱箍沽菇轱鸪毂菰蛄酤觚骨古股鼓骨谷贾汩蛊毂鹄牯臌诂瞽罟钴嘏蛄鹘故顾固估雇锢梏牿崮痼鲴", "括瓜刮呱栝胍鸹寡呱剐挂褂卦诖", "乖掴拐怪", "关观官冠棺矜莞倌纶鳏管馆莞观惯冠贯罐灌掼盥涫鹳", "光咣胱桄广犷逛桄", "规归瑰龟硅闺皈傀圭妫鲑鬼轨诡癸匦庋宄晷簋贵桂跪柜刽炔刿桧炅鳜", "滚鲧衮绲磙辊棍", "过锅郭涡聒蝈崞埚呙国帼掴馘虢果裹猓椁蜾过", "哈铪虾蛤哈哈", "嘿咳嗨还孩骸海胲醢害亥骇氦", "酣憨顸鼾蚶含寒汗韩涵函晗焓邯邗喊罕阚汉汗憾翰撼旱捍悍瀚焊颔菡撖", "夯行航吭杭绗珩颃行巷沆", "蒿薅嚆号毫豪嚎壕貉嗥濠蚝好郝好号浩耗皓昊灏镐颢", "喝呵诃嗬和何合河核盒禾荷阂涸阖貉曷颌劾菏盍纥蚵翮和何喝赫吓贺荷鹤壑褐", "黑嘿嗨", "痕很狠恨", "哼亨行横衡恒蘅珩桁横", "哼", "轰哄烘薨訇红洪鸿宏虹弘泓闳蕻黉荭哄哄讧蕻", "侯喉猴瘊篌糇骺吼后候後厚侯逅堠鲎", "乎呼戏忽糊惚唿滹轷烀和胡湖糊核壶狐葫弧蝴囫瑚斛鹄醐猢槲鹕觳煳鹘虎浒唬琥护户互糊虎沪祜扈戽笏岵怙瓠鹱冱", "华化花哗砉华划滑哗豁猾骅铧话华化划画桦", "怀徊淮槐踝坏划", "欢獾还环寰鬟桓圜洹郇缳锾萑缓换患幻唤宦焕痪涣浣奂擐豢漶逭鲩", "荒慌肓黄皇煌惶徨璜簧凰潢蝗蟥遑隍磺癀湟篁鳇晃恍谎幌晃", "挥辉灰恢徽堕诙晖麾珲咴虺隳回徊蛔茴洄毁悔虺会汇惠慧溃绘讳贿晦秽诲彗烩荟卉喙恚浍哕缋桧蕙蟪", "婚昏荤阍混魂浑馄珲混诨溷", "豁劐攉锪耠和活火伙夥钬和或获货祸惑霍豁藿嚯镬蠖", "其几期机基击奇激积鸡迹绩饥缉圾姬矶肌讥叽稽畸跻羁嵇唧畿齑箕屐剞玑赍犄墼芨丌咭笄乩革及即辑级极集急籍吉疾嫉藉脊棘汲岌笈瘠诘亟楫蒺殛佶戢嵴蕺几给己革济纪挤脊戟虮掎麂记系计济寄际技纪继既齐季寂祭忌剂冀妓骥蓟悸伎暨霁稷偈鲫髻觊荠跽哜鲚洎芰", "家加佳夹嘉茄挟枷珈迦伽浃痂笳葭镓袈跏夹颊戛荚郏恝铗袷蛱假角脚甲搅贾缴绞饺矫佼狡剿侥皎胛铰挢岬徼湫敫钾嘏瘕价假架驾嫁稼家", "间坚监渐兼艰肩浅尖奸溅煎歼缄笺菅蒹搛湔缣戋犍鹣鲣鞯简减检剪捡拣俭碱茧柬蹇謇硷睑锏枧戬谫囝裥笕翦趼见间件建监渐健剑键荐鉴践舰箭贱溅槛谏僭涧饯毽锏楗腱牮踺", "将江疆姜浆僵缰茳礓豇讲奖蒋桨耩将强降酱浆虹匠犟绛洚糨", "教交焦骄郊胶椒娇浇姣跤蕉礁鲛僬鹪蛟艽茭嚼矫峤角脚搅缴绞饺矫佼狡剿侥皎挢徼湫敫铰教觉叫较轿嚼窖酵噍峤徼醮", "接结节街阶皆揭楷嗟秸疖喈结节杰捷截洁劫竭睫桔拮孑诘桀碣偈颉讦婕羯鲒解姐界解价介借戒届藉诫芥疥蚧骱家价", "今金禁津斤筋巾襟矜衿尽仅紧谨锦瑾馑卺廑堇槿进近尽仅禁劲晋浸靳缙烬噤觐荩赆妗", "经京精惊睛晶荆兢鲸泾旌茎腈菁粳警景井颈憬阱儆刭肼经境竟静敬镜劲竞净径靖痉迳胫弪婧獍靓", "扃窘炯迥炅", "究纠揪鸠赳啾阄鬏九酒久韭灸玖就旧救疚舅咎臼鹫僦厩桕柩", "车据且居俱拘驹鞠锯趄掬疽裾苴椐锔狙琚雎鞫局菊桔橘锔举柜矩咀沮踽龃榉莒枸据句具剧巨聚拒距俱惧沮瞿锯炬趄飓踞遽倨钜犋屦榘窭讵醵苣", "捐圈娟鹃涓镌蠲卷锩圈卷俊倦眷隽绢狷桊鄄", "嗟撅噘觉绝决角脚嚼掘诀崛爵抉倔獗厥蹶攫谲矍孓橛噱珏桷劂爝镢蕨觖蹶倔", "军均君钧筠龟菌皲麇俊峻隽菌郡骏竣捃浚", "咖喀咔卡咯咔佧胩", "开揩锎慨凯铠楷恺蒈剀垲锴忾", "看刊堪勘龛戡侃砍坎槛阚莰看嵌瞰阚", "康慷糠闶扛抗炕亢伉闶钪", "尻考烤拷栲靠铐犒", "科颗柯呵棵苛磕坷嗑瞌轲稞疴蝌钶窠颏珂髁咳壳颏可渴坷轲岢可克客刻课恪嗑溘骒缂氪锞蚵", "肯恳啃垦龈裉", "坑吭铿", "空倥崆箜恐孔倥空控", "抠芤眍口扣寇叩蔻筘", "哭枯窟骷刳堀苦库裤酷喾绔", "夸垮侉跨挎胯", "蒯会快块筷脍哙侩狯浍郐", "宽髋款", "框筐匡哐诓狂诳夼况矿框旷眶邝圹纩贶", "亏窥盔岿悝魁睽逵葵奎馗夔喹隗暌揆蝰傀跬愧溃馈匮喟聩篑蒉愦", "昆坤鲲锟醌琨髡捆悃阃困", "括适阔扩廓栝蛞", "拉啦喇垃邋拉喇旯砬拉喇落拉辣腊蜡剌瘌蓝啦", "来莱徕涞崃铼赖睐癞籁赉濑", "兰蓝栏拦篮澜婪岚斓阑褴镧谰懒览揽榄缆漤罱烂滥", "啷狼郎廊琅螂榔锒稂阆朗浪郎莨蒗阆", "捞劳牢唠崂铹痨醪老姥佬潦栳铑落络唠烙酪涝耢", "肋乐勒仂叻泐鳓了", "勒擂累雷擂羸镭嫘缧檑累蕾垒磊儡诔耒类泪累擂肋酹嘞", "棱楞棱塄冷愣", "哩离丽黎璃漓狸梨篱犁厘罹藜骊蜊黧缡喱鹂嫠蠡鲡蓠里理李礼哩鲤俚逦娌悝澧锂蠡醴鳢力利立历例丽励厉莉笠粒俐栗隶吏沥雳莅戾俪砺痢郦詈荔枥呖唳猁溧砾栎轹傈坜苈疠疬蛎鬲篥粝跞藓璃哩", "俩", "联连怜莲廉帘涟镰裢濂臁奁蠊鲢脸敛琏蔹裣练恋炼链殓楝潋", "量良梁凉粮粱踉莨椋墚两俩魉量亮辆凉谅晾踉靓", "撩撂聊疗辽僚寥撩撂缭寮燎嘹獠鹩了潦燎蓼钌了料廖镣撩撂尥钌", "咧裂咧列烈裂劣猎趔冽洌捩埒躐鬣咧", "林临秘邻琳淋霖麟鳞磷嶙辚粼遴啉瞵凛懔檩廪淋吝躏赁蔺膦", "拎令灵零龄凌玲铃陵伶聆囹棱菱苓翎棂瓴绫酃泠羚蛉柃鲮领令岭令另呤", "溜熘留流刘瘤榴浏硫琉遛馏镏旒骝鎏柳绺锍六陆溜碌遛馏镏鹨", "咯", "隆龙隆笼胧咙聋珑窿茏栊泷砻癃笼拢垄陇垅弄", "搂楼喽偻娄髅蝼蒌耧搂篓嵝露陋漏镂瘘喽", "噜撸卢炉庐芦颅泸轳鲈垆胪鸬舻栌鲁芦卤虏掳橹镥六路陆录露绿鹿碌禄辘麓赂漉戮簏鹭潞璐辂渌蓼逯轳氇", "峦挛孪栾銮滦鸾娈脔卵乱", "抡论轮伦沦仑抡囵纶论", "落罗捋罗逻萝螺锣箩骡猡椤脶镙裸倮蠃瘰落络洛骆咯摞烙珞泺漯荦硌雒罗", "略掠锊", "旅履屡侣缕吕捋铝偻褛膂稆律绿率虑滤氯驴榈闾", "呒", "妈麻摩抹蚂嬷吗麻蟆马吗码玛蚂犸骂蚂唛杩么吗嘛", "埋霾买荬卖麦迈脉劢", "颟埋蛮馒瞒蔓谩鳗鞔满螨慢漫曼蔓谩墁幔缦熳镘", "忙茫盲芒氓邙硭莽蟒漭", "猫毛猫矛茅髦锚牦旄蝥蟊茆卯铆峁泖昴冒贸帽貌茂耄瑁懋袤瞀", "么麽", "没眉梅媒枚煤霉玫糜酶莓嵋湄楣猸镅鹛美每镁浼妹魅昧谜媚寐袂", "闷门扪钔闷懑焖们", "蒙蒙盟朦氓萌檬瞢甍礞虻艨蒙猛勐懵蠓蜢锰艋梦孟", "眯咪迷弥谜靡糜醚麋猕祢縻蘼米眯靡弭敉脒芈密秘觅蜜谧泌汨宓幂嘧糸", "棉眠绵免缅勉腼冕娩渑湎沔眄黾面", "喵描苗瞄鹋秒渺藐缈淼杪邈眇妙庙缪", "乜咩灭蔑篾蠛", "民珉岷缗玟苠敏悯闽泯皿抿闵愍黾鳘", "名明鸣盟铭冥茗溟瞑暝螟酩命", "谬缪", "摸无模麽磨摸摩魔膜蘑馍摹谟嫫抹没万默莫末冒磨寞漠墨抹陌脉嘿沫蓦茉貉秣镆殁瘼耱貊貘", "哞谋牟眸缪鍪蛑侔某", "模毪母姆姥亩拇牡目木幕慕牧墓募暮牟穆睦沐坶苜仫钼", "嗯唔嗯唔嗯", "那南拿镎那哪那呢纳娜呐捺钠肭衲哪呐", "哪乃奶氖艿奈耐鼐佴萘柰", "囝囡难南男楠喃腩蝻赧难", "囊囔囊馕馕攮曩", "孬努挠呶猱铙硇蛲脑恼瑙垴闹淖", "哪呢呐讷呢呐", "哪馁那内", "嫩恁", "能", "嗯唔嗯唔嗯", "妮呢尼泥倪霓坭猊怩铌鲵你拟旎祢泥尿逆匿腻昵溺睨慝伲", "蔫拈年粘黏鲇鲶碾捻撵辇念廿酿埝", "娘酿酿", "鸟袅嬲茑尿溺脲", "捏涅聂孽蹑嗫啮镊镍乜陧颞臬蘖", "您恁", "宁凝拧咛狞柠苎甯聍拧宁拧泞佞", "妞牛纽扭钮狃忸拗", "农浓侬哝脓弄", "耨", "奴孥驽努弩胬怒", "暖", "娜挪傩诺懦糯喏搦锘", "虐疟", "女钕恧衄", "噢喔哦哦", "区欧殴鸥讴瓯沤偶呕藕耦呕沤怄", "派扒趴啪葩爬扒耙杷钯筢怕帕琶", "拍排牌徘俳排迫派湃蒎哌", "番攀潘扳般盘胖磐蹒爿蟠判盼叛畔拚襻袢泮", "乓膀滂旁庞膀磅彷螃逄耪胖", "炮抛泡脬跑炮袍刨咆狍匏庖跑炮泡疱", "呸胚醅陪培赔裴锫配佩沛辔帔旆霈", "喷盆湓喷", "烹抨砰澎怦嘭朋鹏彭棚蓬膨篷澎硼堋蟛捧碰", "批坏披辟劈坯霹噼丕纰砒邳铍皮疲啤脾琵毗郫鼙裨埤陴芘枇罴铍陂蚍蜱貔否匹劈痞癖圮擗吡庀仳疋屁辟僻譬媲淠甓睥", "片篇偏翩扁犏便蹁缏胼骈谝片骗", "漂飘剽缥螵朴瓢嫖漂瞟缥殍莩票漂骠嘌", "撇瞥氕撇丿苤", "拼拚姘贫频苹嫔颦品榀聘牝", "乒娉俜平评瓶凭萍屏冯苹坪枰鲆", "颇坡泊朴泼陂泺攴钋繁婆鄱皤叵钷笸破迫朴魄粕珀", "剖裒掊掊", "铺扑仆噗葡蒲仆脯菩匍璞濮莆镤普堡朴谱浦溥埔圃氆镨蹼暴铺堡曝瀑", "期七妻欺缉戚凄漆栖沏蹊嘁萋槭柒欹桤其奇棋齐旗骑歧琪祈脐祺祁崎琦淇岐荠俟耆芪颀圻骐畦亓萁蕲畦蛴蜞綦鳍麒起企启岂乞稽绮杞芑屺綮气妻器汽齐弃泣契迄砌憩汔亟讫葺碛", "掐伽葜袷卡恰洽髂", "千签牵迁谦铅骞悭芊愆阡仟岍扦佥搴褰钎前钱潜乾虔钳掮黔荨钤犍箝鬈浅遣谴缱肷欠歉纤嵌倩堑茜芡慊椠", "将枪抢腔呛锵跄羌戕戗镪蜣锖强墙蔷樯嫱强抢襁镪羟呛跄炝戗", "悄敲雀锹跷橇缲硗劁桥乔侨瞧翘蕉憔樵峤谯荞鞒悄巧雀愀翘俏窍壳峭撬鞘诮谯", "切茄伽且切窃怯趄妾砌惬锲挈郄箧慊", "亲钦侵衾琴秦勤芹擒矜覃禽噙廑溱檎锓嗪芩螓寝沁揿吣", "青清轻倾卿氢蜻圊鲭情晴擎氰檠黥请顷謦苘亲庆罄磬箐綮", "穷琼穹茕邛蛩筇跫銎", "秋邱丘龟蚯鳅楸湫求球仇囚酋裘虬俅遒赇泅逑犰蝤巯鼽糗", "区曲屈趋驱躯觑岖蛐祛蛆麴诎黢渠瞿衢癯劬璩氍朐磲鸲蕖蠼蘧取曲娶龋苣去趣觑阒戌", "圈悛全权泉拳诠颧蜷荃铨痊醛辁筌鬈犬绻畎劝券", "缺阙炔瘸却确雀榷鹊阕阙悫", "逡群裙麇", "然燃髯蚺染冉苒", "嚷瓤禳穰嚷攘壤禳让", "饶娆桡荛扰绕娆绕", "若惹喏热", "人任仁壬忍稔荏任认韧刃纫饪仞葚妊轫衽", "扔仍", "日", "容荣融蓉溶绒熔榕戎嵘茸狨肜蝾冗", "柔揉蹂糅鞣肉", "如儒茹嚅濡孺蠕薷铷襦颥辱乳汝入褥缛洳溽蓐", "软阮朊", "蕤蕊瑞锐芮睿枘蚋", "润闰", "若弱偌箬", "撒仨挲洒撒萨卅飒脎", "思塞腮鳃噻赛塞", "三叁毵散伞馓糁霰散", "丧桑嗓搡磉颡丧", "骚搔臊缲缫鳋扫嫂扫梢臊埽瘙", "色塞涩瑟啬铯穑", "森", "僧", "杀沙刹纱杉莎煞砂挲鲨痧裟铩傻沙啥厦煞霎嗄歃唼", "筛酾色晒", "山衫删煽扇珊杉栅跚姗潸膻芟埏钐舢苫髟闪陕掺掸单善扇禅擅膳讪汕赡缮嬗掸骟剡苫鄯钐疝蟮鳝", "商伤汤殇觞熵墒上赏晌垧上尚绱裳", "烧稍梢捎鞘蛸筲艄勺韶苕杓芍少少绍召稍哨邵捎潲劭", "奢赊猞畲折舌蛇佘舍社设舍涉射摄赦慑麝滠歙厍", "谁", "身深参申伸绅呻莘娠诜砷糁什神甚审沈婶谂哂渖矧甚慎渗肾蜃葚胂椹", "生声胜升牲甥笙绳渑省眚胜圣盛乘剩嵊晟", "师诗失施尸湿狮嘘虱蓍酾鲺时十实什识食石拾蚀埘莳炻鲥使始史驶屎矢豕是事世市士式视似示室势试释适氏饰逝誓嗜侍峙仕恃柿轼拭噬弑谥莳贳铈螫舐筮殖匙", "收熟手首守艏受授售瘦寿兽狩绶", "书输殊舒叔疏抒淑梳枢蔬倏菽摅姝纾毹殳疋熟孰赎塾秫数属署鼠薯暑蜀黍曙数术树述束竖恕墅漱戍庶澍沭丨腧", "刷唰耍刷", "衰摔甩率帅蟀", "栓拴闩涮", "双霜孀泷爽", "谁水说税睡", "吮顺舜瞬", "说数朔硕烁铄妁蒴槊搠", "思斯司私丝撕厮嘶鸶咝澌缌锶厶蛳死四似食寺肆伺饲嗣巳祀驷泗俟汜兕姒耜笥厕", "松忪淞崧嵩凇菘耸悚怂竦送宋诵颂讼", "搜艘馊嗖溲飕锼螋擞叟薮嗾瞍嗽擞", "苏稣酥俗诉速素肃宿缩塑溯粟簌夙嗉谡僳愫涑蔌觫", "酸狻算蒜", "虽尿荽睢眭濉随遂隋绥髓岁碎遂祟隧邃穗燧谇", "孙荪狲飧损笋榫隼", "缩莎梭嗦唆挲娑睃桫嗍蓑羧所索锁琐唢", "他她它踏塌遢溻铊趿塔鳎獭踏拓榻嗒蹋沓挞闼漯", "台胎苔台抬苔邰薹骀炱跆鲐呔太态泰汰酞肽钛", "摊贪滩瘫坍谈弹坛谭潭覃痰澹檀昙锬镡郯坦毯忐袒钽探叹炭碳", "汤趟铴镗耥羰堂唐糖膛塘棠搪溏螳瑭樘镗螗饧醣躺倘淌傥帑趟烫", "涛掏滔叨焘韬饕绦逃陶桃淘萄啕洮鼗讨套", "特忑忒慝铽", "忒", "腾疼藤誊滕", "体踢梯剔锑提题啼蹄醍绨缇鹈荑体替涕剃惕屉嚏悌倜逖绨裼", "天添田填甜恬佃阗畋钿腆舔忝殄掭", "挑佻祧条调迢鲦苕髫龆蜩笤挑窕跳眺粜", "贴帖萜铁帖帖餮", "听厅汀烃停庭亭婷廷霆蜓葶莛挺艇町铤梃梃", "通恫嗵同童彤铜桐瞳佟酮侗仝垌茼峒潼砼统筒桶捅侗同通痛恸", "偷头投骰钭透", "突秃凸图途徒屠涂荼菟酴土吐钍吐兔堍菟", "湍团抟疃彖", "推忒颓腿退褪蜕煺", "吞暾屯饨臀囤豚氽褪", "托脱拖乇陀舵驼砣驮沱跎坨鸵橐佗铊酡柁鼍妥椭庹魄拓唾柝箨", "挖哇凹娲蛙洼娃瓦佤瓦袜腽哇", "歪崴外", "湾弯蜿剜豌完玩顽丸纨芄烷晚碗挽婉惋宛莞娩畹皖绾琬脘菀万腕蔓", "汪尢王忘亡芒往网枉惘罔辋魍望王往忘旺妄", "委威微危巍萎偎薇逶煨崴葳隈为维围唯违韦惟帷帏圩囗潍桅嵬闱沩涠委伟唯尾玮伪炜纬萎娓苇猥痿韪洧隗诿艉鲔为位未味卫谓遗慰魏蔚畏胃喂尉渭猬軎", "温瘟文闻纹蚊雯璺阌稳吻紊刎问纹汶璺", "翁嗡蓊瓮蕹", "窝涡蜗喔倭挝莴哦我握卧哦渥沃斡幄肟硪龌", "於恶屋污乌巫呜诬兀钨邬圬无亡吴吾捂毋梧唔芜浯蜈鼯五武午舞伍侮捂妩忤鹉牾迕庑怃仵物务误恶悟乌雾勿坞戊兀晤鹜痦寤骛芴杌焐阢婺鋈", "西息希吸惜稀悉析夕牺腊昔熙兮溪嘻锡晰樨熄膝栖郗犀曦奚羲唏蹊淅皙汐嬉茜熹烯翕蟋歙浠僖穸蜥螅菥舾矽粞硒醯欷鼷席习袭媳檄隰觋喜洗禧徙玺屣葸蓰铣系细戏隙饩阋禊舄", "瞎虾呷峡侠狭霞暇辖遐匣黠瑕狎硖瘕柙下夏吓厦唬罅", "先鲜仙掀纤暹莶锨氙祆籼酰跹闲贤嫌咸弦娴衔涎舷鹇痫显险鲜洗跣猃藓铣燹蚬筅冼现见线限县献宪陷羡馅腺岘苋霰", "相香乡箱厢湘镶襄骧葙芗缃降详祥翔庠想响享飨饷鲞相向象像项巷橡蟓", "消销潇肖萧宵削嚣逍硝霄哮枭骁箫枵哓蛸绡魈淆崤小晓筱笑校效肖孝啸", "些歇楔蝎叶协鞋携斜胁谐邪挟偕撷勰颉缬写血写解谢泄契械屑卸懈泻亵蟹邂榭瀣薤燮躞廨绁渫榍獬", "心新欣辛薪馨鑫芯昕忻歆锌寻镡信芯衅囟", "兴星腥惺猩行形型刑邢陉荥饧硎省醒擤性兴姓幸杏悻荇", "兄胸凶匈汹芎雄熊", "修休羞咻馐庥鸺貅髹宿朽秀袖宿臭绣锈嗅岫溴", "需须虚吁嘘墟戌胥砉圩盱顼徐许浒栩诩糈醑续序绪蓄叙畜恤絮旭婿酗煦洫溆勖蓿", "宣喧轩萱暄谖揎儇煊旋悬玄漩璇痃选癣旋券炫渲绚眩铉泫碹楦镟", "削靴薛学穴噱踅泶雪鳕血谑", "熏勋荤醺薰埙曛窨獯寻询巡循旬驯荀峋洵恂郇浔鲟训迅讯逊熏殉巽徇汛蕈浚", "压雅呀押鸦哑鸭丫垭桠牙涯崖芽衙睚伢岈琊蚜雅瞧匹痖疋亚压讶轧娅迓揠氩砑呀", "烟燕咽殷焉淹阉腌嫣胭湮阏鄢菸崦恹言严研延沿颜炎阎盐岩铅蜒檐妍筵芫闫阽眼演掩衍奄俨偃魇鼹兖郾琰罨厣剡鼽研验沿厌燕宴咽雁焰艳谚彦焱晏唁砚堰赝餍滟酽谳", "央泱秧鸯殃鞅洋阳杨扬羊疡佯烊徉炀蛘养仰痒氧样漾恙烊怏鞅", "要约邀腰夭妖吆幺摇遥姚陶尧谣瑶窑肴侥铫珧轺爻徭繇鳐咬杳窈舀崾要药耀钥鹞曜疟", "耶噎椰掖爷耶邪揶铘也野冶业夜叶页液咽哗曳拽烨掖腋谒邺靥晔", "一医衣依椅伊漪咿揖噫猗壹铱欹黟移疑遗宜仪蛇姨夷怡颐彝咦贻迤痍胰沂饴圯荑诒眙嶷以已衣尾椅矣乙蚁倚迤蛾旖苡钇舣酏意义议易衣艺译异益亦亿忆谊抑翼役艾溢毅裔逸轶弈翌疫绎佚奕熠诣弋驿懿呓屹薏噫镒缢邑臆刈羿仡峄怿悒肄佾殪挹埸劓镱瘗癔翊蜴嗌翳", "因音烟阴姻殷茵荫喑湮氤堙洇铟银吟寅淫垠鄞霪狺夤圻龈引隐饮瘾殷尹蚓吲印饮荫胤茚窨", "应英鹰婴樱膺莺罂鹦缨瑛璎撄嘤营迎赢盈蝇莹荧萤萦瀛楹嬴茔滢潆荥蓥影颖颍瘿郢应硬映媵", "育哟唷哟", "拥庸佣雍臃邕镛墉慵痈壅鳙饔喁永勇涌踊泳咏俑恿甬蛹用佣", "优幽忧悠攸呦由游油邮尤犹柚鱿莸尢铀猷疣蚰蝣蝤繇莜有友黝酉莠牖铕卣有又右幼诱佑柚囿鼬宥侑蚴釉", "於吁迂淤纡瘀于与余予鱼愚舆娱俞愉馀逾渔渝俞萸瑜隅揄榆虞禺谀腴竽妤臾欤觎盂窬蝓嵛狳舁雩与语雨予宇羽禹圄屿龉伛圉庾瘐窳俣与语育遇狱雨欲预玉愈谷域誉吁蔚寓豫粥郁喻裕浴御驭尉谕毓妪峪芋昱煜熨燠菀蓣饫阈鬻聿钰鹆鹬蜮", "冤渊鸳眢鸢箢员元原园源圆缘援袁猿垣辕沅媛芫橼圜塬爰螈鼋远院愿怨苑媛掾垸瑗", "约曰说月乐越阅跃悦岳粤钥刖瀹栎樾龠钺", "晕氲员云匀筠芸耘纭昀郧允陨殒狁员运均韵晕孕蕴酝愠熨郓韫恽", "扎咂匝拶杂咱砸咋", "灾哉栽甾载仔宰崽在再载", "簪糌咱攒拶昝趱赞暂瓒錾咱", "赃臧锗驵藏脏葬奘", "遭糟凿早澡枣蚤藻缲造灶躁噪皂燥唣", "则责泽择咋啧迮帻赜笮箦舴侧仄昃", "贼", "怎谮", "曾增憎缯罾赠综缯甑锃", "查扎咋渣喳揸楂哳吒齄炸扎札喋轧闸铡眨砟炸咋诈乍蜡栅榨柞吒咤痄蚱", "摘侧斋择宅翟窄债祭寨砦瘵", "占沾粘瞻詹毡谵旃展斩辗盏崭搌战站占颤绽湛蘸栈", "张章彰璋蟑樟漳嫜鄣獐长掌涨仉丈涨帐障账胀仗杖瘴嶂幛", "着招朝嘲昭钊啁着找爪沼照赵召罩兆肇诏棹笊", "折遮蜇折哲辙辄谪蛰摺磔蜇者褶锗赭这浙蔗鹧柘着", "这", "真针珍斟贞侦甄臻箴砧桢溱蓁椹榛胗祯浈诊枕疹缜畛轸稹阵镇震圳振赈朕鸩", "正争征丁挣症睁徵蒸怔筝铮峥狰钲鲭整拯政正证挣郑症怔铮诤帧", "之只知指支织氏枝汁掷芝吱肢脂蜘栀卮胝祗直指职值执植殖侄踯摭絷跖埴只指纸止址旨徵趾咫芷枳祉轵黹酯知至制识治志致质智置秩滞帜稚挚掷峙窒炙痔栉桎帙轾贽痣豸陟忮彘膣雉鸷骘蛭踬郅觯", "中终钟忠衷锺盅忪螽舯种肿踵冢中种重众仲", "周州洲粥舟诌啁轴妯碡肘帚皱骤轴宙咒昼胄纣绉荮籀繇酎", "诸朱珠猪株蛛洙诛铢茱邾潴槠橥侏术逐筑竹烛躅竺舳瘃主属煮嘱瞩拄褚渚麈住注助著驻祝筑柱铸伫贮箸炷蛀杼翥苎疰", "抓挝爪", "拽转曳拽嘬", "专砖颛转传转赚撰沌篆啭馔", "装庄妆桩奘状壮撞幢僮戆", "追锥隹椎骓坠缀赘惴缒", "屯谆肫窀准", "桌捉卓拙涿焯倬着著琢缴灼酌浊濯茁啄斫镯诼禚擢浞", "资咨滋仔姿吱兹孜谘呲龇锱辎淄髭赀孳粢趑觜訾缁鲻嵫子紫仔梓姊籽滓秭笫耔茈訾自字渍恣眦", "宗踪综棕鬃枞腙总偬纵粽", "邹诹陬鄹驺鲰走奏揍", "租菹足族卒镞组祖阻诅俎", "钻躜纂缵赚钻攥", "堆嘴咀觜最罪醉蕞", "尊遵樽鳟撙", "作嘬作昨琢笮左佐撮作做坐座凿柞怍胙阼唑祚酢"],
    t
} ();
__reflect(SearchUtil.prototype, "SearchUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
StringUtil = function() {
    function t() {}
    return t.padStart = function(t, e, n) {
        var r = "",
        i = t.length;
        if (e > i) {
            for (var o = 0; e - i > o; o++) r += "0";
            return r + t
        }
        return t
    },
    t.padEnd = function(t, e, n) {
        var r = "",
        i = t.length;
        if (e > i) {
            for (var o = 0; e - i > o; o++) r += "0";
            return t + r
        }
        return t
    },
    t.replace = function(t, e, n) {
        for (var r = "",
        i = !1,
        o = t.length,
        s = e.length,
        a = 0; o > a; a++) {
            if (t.charAt(a) == e.charAt(0)) {
                i = !0;
                for (var h = 0; s > h; h++) if (t.charAt(a + h) != e.charAt(h)) {
                    i = !1;
                    break
                }
                if (i) {
                    r += n,
                    a += s - 1;
                    continue
                }
            }
            r += t.charAt(a)
        }
        return r
    },
    t.OutPutString = function(t, e, n, r, i) {
        void 0 === i && (i = 50);
        var o = egret.getTimer(),
        s = t.length / i,
        a = 0,
        h = function() {
            var i = egret.getTimer(),
            _ = o,
            c = (i - _) / 1e3;
            a += c;
            var u = Math.floor(a / s * t.length);
            e.apply(r, [t.substr(0, u)]),
            a >= s && (egret.lifecycle.stage.removeEventListener(egret.Event.ENTER_FRAME, h, this), n.apply(n.caller || r, null)),
            o = i
        };
        egret.lifecycle.stage.addEventListener(egret.Event.ENTER_FRAME, h, this)
    },
    t.OutPutStringAsync = function(t, e, n, r) {
        var i = this;
        return void 0 === r && (r = 50),
        new Promise(function(o, s) {
            i.OutPutString(t, e,
            function() {
                return o()
            },
            n, r)
        })
    },
    t.connectArgs = function(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        for (var r = 0; r < e.length; r++) t = t.replace("{" + r + "}", e[r]);
        return t
    },
    t.connectArry = function(t, e) {
        for (var n = 0; n < e.length; n++) t = t.replace("{" + n + "}", e[n]);
        return t
    },
    t.str2Html = function(e) {
        e = t.TransformLineBreak(e);
        var n = /\$\{[a-zA-Z]+\}/gm;
        if (!n.test(e)) return e;
        var r = e.match(n),
        i = e.split(/\$\{[a-zA-Z]+\}/gm);
        if (r.length != i.length - 1) return console.error(e + "格式有误，无法转换成html"),
        e;
        for (var o = ["red", "yellow", "green", "blue", "white", "black"], s = ["#ff0000", "#ffff00", "#00ff00", "#0000ff", "#ffffff", "#000000"], a = '<font color="${color}">${str}</font>', h = r.length, _ = "", c = 0; h > c; c++) {
            var u = o.indexOf(r[c].match(/[a-zA-Z]+/g)[0]),
            l = "#ffffff";
            0 > u ? console.error(e + "文本中有颜色" + r[c] + "尚未解析过") : l = s[u];
            var f = a.replace(/\$\{color\}/g, l);
            f = f.replace(/\$\{str\}/g, i[c]),
            _ += f
        }
        return (new egret.HtmlTextParser).parser(_)
    },
    t.parseStrLimitLen = function(t, e) {
        var n = "...";
        e *= 2;
        for (var r = t.length,
        i = 0,
        o = 0,
        s = function(t) {
            return~~ / [\u4e00 - \u9fa5] / .test(t) + 1
        },
        a = function(t, e) {
            var n = e,
            r = t.charAt(t.length - 1);
            return /[\u4e00-\u9fa5]/.test(r) ? (r = t.substr(0, t.length - 1), n -= 2) : (r = t.substr(0, t.length - 1), n -= 1),
            n > 0 && (r = a(r, n)),
            r
        },
        h = ""; r > i;) {
            var _ = t.charAt(i);
            if (o += s(_), h += _, o > e) {
                for (var c = o - e; c > 0;) {
                    var u = h.charAt(h.length - 1);
                    /[\u4e00-\u9fa5]/.test(u) ? (h = h.substr(0, h.length - 1), c -= 2) : (h = h.substr(0, h.length - 1), c -= 1)
                }
                h = a(h, 3) + n;
                break
            }
            i++
        }
        return h
    },
    t.TransformLineBreak = function(t) {
        return t.split(/\\n/g).join("\n")
    },
    t.tarnsFormXmlStr = function(t) {
        var e = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&apos;": "'",
            "&quot;": '"'
        };
        for (var n in e) {
            var r = new RegExp(n, "g");
            r.test(t) && (t = t.replace(r, e[n]))
        }
        return t
    },
    t.petEffectDesc = function(t) {
        t = t.replace(/\{/g, "").replace(/\}/g, ""),
        t = t.replace(/\|/g, "\n");
        var e = new RegExp("\\[.*?\\]", "g");
        if (e.test(t)) {
            for (var n = [], r = t.match(e), i = t.split(e), o = r.length, s = 0; o > s; s++) {
                var a = {};
                a.text = r[s].substr(1, r[s].length - 2),
                a.style = {
                    bold: !0
                },
                n.push(a);
                var h = {};
                h.text = i[s + 1],
                n.push(h)
            }
            return n
        }
        return t
    },
    t.getBLen = function(t) {
        return null == t ? 0 : ("string" != typeof t && (t += ""), t.replace(/[^\x00-\xff]/g, "01").length)
    },
    t.subStr = function(t, e) {
        for (var n = "",
        r = 0,
        i = 0; i < t.length; i++) {
            var o = 1;
            if (0 != (65280 & t.charCodeAt(i)) && (o = 2), r + o > e) return n;
            r += o,
            n += t[i]
        }
        return n
    },
    t.combineNameAndNumber = function(e, n, r) {
        var i = "x" + n,
        o = i.length,
        s = r - Math.ceil(o / 2);
        return t.parseStrLimitLen(e, s) + i
    },
    t.camel2Upcase = function(t) {
        return t ? (t = t.replace(/([A-Z])/g, "_$1").toLowerCase(), "_" == t[0] && (t = t.substring(1)), t.toUpperCase()) : t
    },
    t.getHash = function(t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split(""),
        n = 5381,
        r = t.length - 1;
        if ("string" == typeof t) for (; r > -1; r--) n += (n << 5) + t.charCodeAt(r);
        else for (; r > -1; r--) n += (n << 5) + t[r];
        var i = 2147483647 & n,
        o = "";
        do o += e[63 & i];
        while (i >>= 6);
        return o
    },
    t.numberToThousandth = function(t, e, n) {
        return void 0 === e && (e = !0),
        void 0 === n && (n = 0),
        t.toLocaleString(void 0, {
            useGrouping: e,
            maximumFractionDigits: n
        })
    },
    t.HEX_Head = "0x",
    t
} ();
__reflect(StringUtil.prototype, "StringUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
TextFormatUtil = function() {
    function t() {}
    return t.trim = function(t) {
        var e, n = " 　\n	\r";
        for (e = 0; e < t.length && -1 != n.indexOf(t.charAt(e)); e++);
        for (t = t.substr(e), e = t.length; e >= 0 && -1 != n.indexOf(t.charAt(e)); e--);
        return t = t.slice(0, e + 1)
    },
    t.getEventTxt = function(t, e) {
        return "<a href='event:" + e + "'><font color='#FF0000'>" + t + "</font></a>"
    },
    t.getRedTxt = function(t) {
        return "<font color='#FF0000'>" + t + "</font>"
    },
    t.getBlueTxt = function(t) {
        return "<font color='#0000FF'>" + t + "</font>"
    },
    t.getYellowTxt = function(t) {
        return "<font color='#FFFF00'>" + t + "</font>"
    },
    t.getRedTxtInStory = function(t) {
        return "0xff0000" + t + "0xffffff"
    },
    t
} ();
__reflect(TextFormatUtil.prototype, "TextFormatUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
TimeUtil = function() {
    function t() {}
    return t.isSameWeek = function(t, e, n) {
        void 0 === n && (n = !0),
        "object" == typeof t && (t = t.getTime()),
        "object" == typeof e && (e = e.getTime());
        var r = 864e5,
        i = ~~ ( + t / r),
        o = ~~ ( + e / r),
        s = ~~ ((i + 3) / 7) == ~~ ((o + 3) / 7);
        return n || (s = ~~ ((i + 4) / 7) == ~~ ((o + 4) / 7)),
        s
    },
    t.getOffLineStatus = function(t, e) {
        var n = 6e4,
        r = 60 * n,
        i = 24 * r,
        o = 30 * i,
        s = e || (new Date).getTime(),
        a = s - t;
        if (0 > a) return "1分钟";
        var h = (Math.floor(a / o), Math.floor(a / (7 * i)), Math.floor(a / i)),
        _ = Math.floor(a / r),
        c = Math.floor(a / n);
        return h >= 30 ? "1个月前": h >= 1 ? h + "天": _ >= 1 || c >= 59 ? _ + "小时": c >= 1 ? c + "分钟": "1分钟"
    },
    t.getTimeClock = function(t, e) {
        void 0 === e && (e = !0);
        var n = 6e4,
        r = 60 * n,
        i = 24 * r,
        o = 30 * i,
        s = "",
        a = t,
        h = Math.floor(t / o);
        h > 0 && (s = h + "月"),
        a %= o;
        var _ = Math.floor(a / i); (s.length > 0 || _ > 0) && (s += _ + "天"),
        a %= i;
        var c = Math.floor(a / r); (s.length > 0 || c > 0) && (s += c + "小时"),
        a %= r;
        var u = Math.floor(a / n); (s.length > 0 || u > 0) && (s += u + "分钟"),
        a %= n;
        var l = Math.floor(a / 1e3);
        return e && (s.length > 0 || l > 0) && (s += l + "秒"),
        s
    },
    t.format = function(t, e) {
        var n = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var r in n) new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
        return t
    },
    t.countDownFormat = function(t, e) {
        void 0 === e && (e = "yyyy/MM/dd"),
        t = Math.floor(t);
        var n = Math.floor(t / 31536e3),
        r = n > 0 ? Math.floor((t - 31536e3 * n) / 2592e3) : Math.floor(t / 2592e3),
        i = Math.floor(t / 86400) - 365 * n - 30 * r,
        o = Math.floor(t / 3600) - 8760 * n - 720 * r - 24 * i,
        s = Math.floor(t / 60) - 525600 * n - 43200 * r - 1440 * i - 60 * o,
        a = t - 31536e3 * n - 2592e3 * r - 86400 * i - 60 * o * 60 - 60 * s;
        /(y+)/.test(e) ? e = e.replace(RegExp.$1, (n + "").substr(4 - RegExp.$1.length)) : r += 12 * n,
        /(M+)/.test(e) || (i += 30 * r),
        /(d+)/.test(e) || (o += 24 * i),
        /(h+)/.test(e) || (s += 60 * o),
        /(m+)/.test(e) || (a += 60 * s);
        var h = {
            "M+": r,
            "d+": i,
            "h+": o,
            "m+": s,
            "s+": a
        };
        for (var _ in h) new RegExp("(" + _ + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? h[_] : ("" + h[_]).length > 2 ? "" + h[_] : ("00" + h[_]).substr(("" + h[_]).length)));
        return e
    },
    t
} ();
__reflect(TimeUtil.prototype, "TimeUtil");
var __awaiter = this && this.__awaiter ||
function(t, e, n, r) {
    return new(n || (n = Promise))(function(i, o) {
        function s(t) {
            try {
                h(r.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                h(r["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? i(t.value) : new n(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((r = r.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return r([t, e])
        }
    }
    function r(n) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (i = 1, o && (s = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(s = s.call(o, n[1])).done) return s;
            switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
                s = n;
                break;
            case 4:
                return h.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    h = 0;
                    continue
                }
                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                    h.label = n[1];
                    break
                }
                if (6 === n[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = n;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(n);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            n = e.call(t, h)
        } catch(r) {
            n = [6, r],
            o = 0
        } finally {
            i = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var i, o, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
common; !
function(t) {
    var e; !
    function(t) {
        function e(t) {
            var e = this;
            return new Promise(function(n, r) {
                t.call(function() {
                    return n()
                },
                e)
            })
        }
        function n() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            for (var r = [], i = 0; i < t.length; i++) r.push(e(t[i]));
            return r
        }
        function r(t, e) {
            var n = this,
            r = new eui.Group,
            i = new eui.Image;
            i.texture = RES.getRes("common_mask_bg_s9_png"),
            i.width = egret.lifecycle.stage.stageWidth,
            i.height = egret.lifecycle.stage.stageHeight,
            t || (t = window.MainManager.stage),
            r.visible = !1,
            t.addChild(r);
            var o = t.globalToLocal(0, 0);
            if (r.x = o.x, r.y = o.y, r.addChild(i), e) {
                var s = RES.getRes("loading_json"),
                a = RES.getRes("loading_png"),
                h = new egret.MovieClipDataFactory(s, a),
                _ = new egret.MovieClip(h.generateMovieClipData("loading-2"));
                _.gotoAndPlay(1, -1),
                _.x = (egret.lifecycle.stage.stageWidth - _.width) / 2 - 490,
                _.y = egret.lifecycle.stage.stageHeight / 2 - 240,
                r.addChild(_)
            }
            var c = this,
            u = function() {
                return __awaiter(n, void 0, void 0,
                function() {
                    return __generator(this,
                    function(t) {
                        return r.visible = !0,
                        r.alpha = 0,
                        [2, new Promise(function(t, e) {
                            egret.Tween.get(r).to({
                                alpha: 1
                            },
                            450, egret.Ease.quadIn).call(function() {
                                return t()
                            },
                            c)
                        })]
                    })
                })
            },
            l = function(t) {
                return __awaiter(n, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        return t || (t = 500),
                        [2, new Promise(function(e, n) {
                            egret.Tween.get(r).wait(t, !1).to({
                                alpha: 0
                            },
                            450, egret.Ease.quadOut).call(function() {
                                return r.visible = !1,
                                e()
                            },
                            c)
                        })]
                    })
                })
            },
            f = function() {
                egret.Tween.removeTweens(r),
                r.parent && r.parent.removeChild(r)
            };
            return {
                play: u,
                hide: l,
                destroy: f
            }
        }
        function i(t) {
            for (var e = 0,
            n = t; e < n.length; e++) {
                var r = n[e];
                egret.Tween.removeTweens(r)
            }
        }
        function o(t) {
            var e = egret.Tween._tweens;
            if (e) for (var n = e.length - 1; n >= 0; n--) if (e[n] === t) {
                e[n]._target.tween_count--,
                e[n].paused = !0,
                e.splice(n, 1);
                break
            }
        }
        function s(t, e) {
            var n = {};
            return e.forEach(function(e) {
                null != t[e] && void 0 != t[e] && (n[e] = t[e])
            }),
            {
                reset: function() {
                    t && Object.keys(n).forEach(function(e) {
                        t[e] = n[e]
                    })
                },
                destroy: function() {
                    t = null
                }
            }
        }
        function a(t, e, n, r, i) {
            return egret.Tween.get(t).set(e.props).to(n.props, r, i)
        }
        function h(t, e, n, r) {
            void 0 === r && (r = Circ.easeOut),
            e && gsap.to(e, {
                text: "" + t,
                duration: n,
                ease: r,
                onUpdate: function() {
                    e.text = Math.floor( + e.text).toString()
                }
            })
        }
        t.TweenToPromise = e,
        t.createAllTween = n,
        t.createChangeViewFadeInOut = r,
        t.removeDisplaysTweens = i,
        t.removeTweenItem = o,
        t.cacheProp = s,
        t.fromTo = a,
        t.numberAnimation = h
    } (e = t.TweenUtil || (t.TweenUtil = {}))
} (common || (common = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, r) {
    return new(n || (n = Promise))(function(i, o) {
        function s(t) {
            try {
                h(r.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                h(r["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? i(t.value) : new n(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((r = r.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return r([t, e])
        }
    }
    function r(n) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (i = 1, o && (s = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(s = s.call(o, n[1])).done) return s;
            switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
                s = n;
                break;
            case 4:
                return h.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    h = 0;
                    continue
                }
                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                    h.label = n[1];
                    break
                }
                if (6 === n[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = n;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(n);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            n = e.call(t, h)
        } catch(r) {
            n = [6, r],
            o = 0
        } finally {
            i = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var i, o, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
common; !
function(t) {
    var e; !
    function(t) {
        var e = function() {
            function t(t) {
                "string" == typeof t && (t = egret.XML.parse(t)),
                this._root = this._createXmlNode(t)
            }
            return t.prototype.Load = function(t, e, n) {
                var r = this;
                RES.getResByUrl(t,
                function(t, i) {
                    r._loaderUrl = i;
                    var o = egret.XML.parse(t);
                    r._root = r._createXmlNode(o),
                    e.apply(n, null)
                },
                this)
            },
            t.prototype.LoadAsync = function(t) {
                return __awaiter(this, void 0, void 0,
                function() {
                    var e = this;
                    return __generator(this,
                    function(n) {
                        return [2, new Promise(function(n, r) {
                            e.Load(t,
                            function() {
                                return n()
                            },
                            e)
                        })]
                    })
                })
            },
            t.prototype.UnLoad = function() {
                this._loaderUrl && (RES.destroyRes(this._loaderUrl), this._root = null)
            },
            t.prototype._createXmlNode = function(t) {
                var e = this;
                return {
                    localName: t.localName,
                    Attributes: e._createXmlAttributeCollection(t),
                    ChildNodes: e._createXmlNodeList(t),
                    SelectNodes: function(t) {
                        return e._findNodeList(t, this)
                    },
                    SelectSingleNode: function(t) {
                        return e._findNode(t, this)
                    }
                }
            },
            t.prototype._createXmlAttributeCollection = function(t) {
                var e = this;
                if (t.attributes && !e._isEmptyObject(t.attributes)) {
                    var n = {};
                    for (var r in t.attributes) {
                        var i = {
                            name: r,
                            value: t.attributes[r]
                        };
                        n[r] = i
                    }
                    return {
                        attributes: n,
                        GetAttribute: function(t) {
                            return this.attributes[t]
                        }
                    }
                }
                return null
            },
            t.prototype._isEmptyObject = function(t) {
                for (var e in t) return ! 1;
                return ! 0
            },
            t.prototype._createXmlNodeList = function(t) {
                var e = this;
                if (1 === t.nodeType) {
                    var n = t.children;
                    if (n) {
                        for (var r = [], i = 0; i < n.length; i++) {
                            var o = e._createXmlNode(n[i]);
                            r.push(o)
                        }
                        return {
                            Item: r,
                            count: r.length
                        }
                    }
                }
                return null
            },
            t.prototype._findNode = function(t, e) {
                if (e.ChildNodes) for (var n = e.ChildNodes.Item,
                r = 0; r < n.length; r++) if (n[r].localName === t) return n[r];
                return null
            },
            t.prototype._findNodeList = function(t, e) {
                if (e.ChildNodes) {
                    for (var n = [], r = e.ChildNodes.Item, i = 0; i < r.length; i++) r[i].localName === t && n.push(r[i]);
                    return {
                        Item: n,
                        count: n.length
                    }
                }
                return null
            },
            Object.defineProperty(t.prototype, "ChildNodes", {
                get: function() {
                    return this._root.ChildNodes
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "Attributes", {
                get: function() {
                    return this._root.Attributes
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.SelectSingleNode = function(t) {
                return this._root.SelectSingleNode(t)
            },
            t.prototype.SelectNodes = function(t) {
                return this._root.SelectNodes(t)
            },
            t.prototype.destroy = function() {
                this._root = null
            },
            t
        } ();
        t.XmlDocument = e,
        __reflect(e.prototype, "common.xml.XmlDocument")
    } (e = t.xml || (t.xml = {}))
} (common || (common = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
XmlUtil = function() {
    function t() {}
    return t.descendants = function(t, e, n) {
        if (e.name === t && n.push(e), e.children) for (var r = 0; r < e.children.length; r++) this.descendants(t, e.children[r], n)
    },
    t
} ();
__reflect(XmlUtil.prototype, "XmlUtil");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    n.prototype = e.prototype,
    t.prototype = new n
},
common; !
function(t) {
    var e; !
    function(t) {
        var e = function(t) {
            function e(n, r, i, o, s, a, h, _, c, u, l, f, d, p, g, v, m) {
                void 0 === p && (p = 100),
                void 0 === g && (g = null),
                void 0 === v && (v = e.DIR_TO_H),
                void 0 === m && (m = 1);
                var y = t.call(this) || this;
                return y.width = n,
                y.height = r,
                y._itemRenderWidth = i,
                y._itemRenderHeight = o,
                y._itemOffset = s,
                y._diffCenterPointLimit = h,
                y._minScale = _,
                y._maxScale = c,
                y._minAlpha = u,
                y._maxAlpha = l,
                y._dir = v,
                y.viewport = f,
                f.itemRenderer = a,
                y._ary = d,
                f.dataProvider = y._ary,
                y._tm = p,
                y._easyFun = g,
                y._defaultScale = m,
                y.throwSpeed = 0,
                y.addEventListener(eui.UIEvent.CHANGE_END, y._onScrollerChangeEnd, y, !1, Number.MAX_VALUE),
                y.addEventListener(eui.UIEvent.CHANGE, y._onScrollerChange, y, !1, Number.MAX_VALUE),
                y
            }
            return __extends(e, t),
            e.prototype._onScrollerChangeEnd = function(t) {
                if (this._onChangeFlag) {
                    this._onChangeFlag = !1;
                    for (var n, r = new egret.Point(.5 * this.width, .5 * this.height), i = this.viewport.numChildren, o = 0; i > o; o++) {
                        var s = this.viewport.getChildAt(o);
                        if (s.data) {
                            var a = s.localToGlobal();
                            a = this.globalToLocal(a.x, a.y),
                            a.setTo(a.x + .5 * this._itemRenderWidth, a.y + .5 * this._itemRenderHeight);
                            var h;
                            h = this._dir === e.DIR_TO_H ? Math.abs(r.x - a.x) : Math.abs(r.y - a.y),
                            (!n || n > h) && (n = h, this._selectIndex = this._ary.getItemIndex(s.data))
                        }
                    }
                    this._setListPos()
                }
            },
            e.prototype._setListPos = function(t) {
                var n, r, i = this,
                o = new egret.Point(.5 * this.width, .5 * this.height);
                this._dir === e.DIR_TO_H ? (n = (this._itemRenderWidth + this._itemOffset) * this._selectIndex, r = n - o.x + .5 * this._itemRenderWidth) : (n = (this._itemRenderHeight + this._itemOffset) * this._selectIndex, r = n - o.y + .5 * this._itemRenderHeight),
                void 0 === t && (t = this._tm),
                egret.Tween.get(this).to({
                    changeValue: r
                },
                t, this._easyFun).call(function() {
                    egret.setTimeout(function() {
                        i.dispatchEventWith(e.EVENT_CHANGE_END)
                    },
                    i, 100)
                },
                this)
            },
            Object.defineProperty(e.prototype, "changeValue", {
                get: function() {
                    return this._dir === e.DIR_TO_H ? this.viewport.scrollH: this.viewport.scrollV
                },
                set: function(t) {
                    this._dir === e.DIR_TO_H ? this.viewport.scrollH = t: this.viewport.scrollV = t,
                    this._updateItemRenderPos()
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.goToNum = function(t, e) {
                this.viewport.validateNow(),
                this._selectIndex = t,
                void 0 === e && (e = this._tm),
                this._setListPos(e)
            },
            e.prototype.getSelectIndex = function() {
                return this._selectIndex
            },
            e.prototype._onScrollerChange = function(t) {
                this._onChangeFlag = !0,
                this._updateItemRenderPos()
            },
            e.prototype._updateItemRenderPos = function() {
                for (var t = new egret.Point(.5 * this.width, .5 * this.height), n = this._minScale, r = this._maxScale, i = this.viewport.numChildren, o = [], s = 0; i > s; s++) {
                    var a = this.viewport.getChildAt(s),
                    h = a.localToGlobal();
                    h = this.globalToLocal(h.x, h.y),
                    h.setTo(h.x + .5 * a.width, h.y + .5 * a.height);
                    var _;
                    _ = this._dir === e.DIR_TO_H ? Math.min(1, Math.abs(h.x - t.x) / this._diffCenterPointLimit) : Math.min(1, Math.abs(h.y - t.y) / this._diffCenterPointLimit);
                    var c = -(r - n) * _ + r;
                    c *= this._defaultScale,
                    a.grp_item.scaleX = a.grp_item.scaleY = c,
                    this._maxAlpha !== this._minAlpha && (a.alpha = -(this._maxAlpha - this._minAlpha) * _ + this._maxAlpha),
                    o.push({
                        item: a,
                        diff: _
                    })
                }
                this._sortZindex(o)
            },
            e.prototype._sortZindex = function(t) {
                t.sort(function(t, e) {
                    return e.diff - t.diff
                });
                for (var e = this.viewport,
                n = 0; n < t.length; n++) e.addChildAt(t[n].item, n)
            },
            e.EVENT_CHANGE_END = "event_customscroller_change_end",
            e.DIR_TO_H = "dir_to_h",
            e.DIR_TO_V = "dir_to_v",
            e
        } (eui.Scroller);
        t.CustomScroller = e,
        __reflect(e.prototype, "common.ui.CustomScroller")
    } (e = t.ui || (t.ui = {}))
} (common || (common = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    n.prototype = e.prototype,
    t.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, r) {
    return new(n || (n = Promise))(function(i, o) {
        function s(t) {
            try {
                h(r.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                h(r["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? i(t.value) : new n(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((r = r.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return r([t, e])
        }
    }
    function r(n) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (i = 1, o && (s = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(s = s.call(o, n[1])).done) return s;
            switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
                s = n;
                break;
            case 4:
                return h.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    h = 0;
                    continue
                }
                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                    h.label = n[1];
                    break
                }
                if (6 === n[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = n;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(n);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            n = e.call(t, h)
        } catch(r) {
            n = [6, r],
            o = 0
        } finally {
            i = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var i, o, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
common; !
function(t) {
    var e; !
    function(t) {
        var e; !
        function(t) {
            var e = function(t) {
                function e(n, r, i) {
                    var o = t.call(this) || this;
                    o._lastFlag = "",
                    o._treeData = i,
                    o._treeData.grp = void 0 === o._treeData.grp ? 0 : o._treeData.grp,
                    o._treeData.animationTime = void 0 === o._treeData.animationTime ? 200 : o._treeData.animationTime,
                    o._treeData.secondOffset = void 0 === o._treeData.secondOffset ? 0 : o._treeData.secondOffset,
                    o._scroller = new eui.Scroller,
                    o._scroller.width = n,
                    o._scroller.height = r,
                    o.addChild(o._scroller),
                    o._viewport = new eui.Group;
                    var s;
                    return o._treeData.dir === e.DIR_TO_H ? s = new eui.HorizontalLayout: (s = new eui.VerticalLayout, o._viewport.width = n),
                    s.gap = i.grp,
                    o._viewport.layout = s,
                    o.addChild(o._viewport),
                    o._scroller.viewport = o._viewport,
                    o._createComp(),
                    o
                }
                return __extends(e, t),
                e.prototype._createComp = function() {
                    this._components = [];
                    for (var t = this._treeData.data,
                    e = 0; e < t.length; e++) {
                        var n = this._treeData.firstRender,
                        r = this._treeData.secondRender,
                        i = new n;
                        i.setData(t[e].firstData, r, t[e].childData, this._treeData.secondOffset, this._treeData.dir),
                        i.name = "comp_" + e,
                        i.setAnimationTm(this._treeData.animationTime),
                        i.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this),
                        i.addEventListener("event_selected_item", this._onSelectedchildrenItem, this),
                        this._viewport.addChild(i),
                        this._components.push(i)
                    }
                },
                e.prototype._onTouchTap = function(t) {
                    var e = t.currentTarget.name,
                    n = t.currentTarget.getCustomData();
                    if (n.enable === !1) return void(n.msg && window.Alarm.show(n.msg));
                    var r = ~~e.split("_")[1],
                    i = 0;
                    n && n.normalChirldIdx && (i = n.normalChirldIdx),
                    this._openRadioButton(r, i)
                },
                e.prototype._onSelectedchildrenItem = function(t) {
                    var e = t.currentTarget.name,
                    n = ~~e.split("_")[1],
                    r = this._lastFlag.split("_"); (~~r[0] !== n || ~~r[1] !== t.data) && (this._lastFlag = n + "_" + t.data, this.dispatchEventWith("event_selected_item", !1, [n, t.data]))
                },
                e.prototype._openRadioButton = function(t, e) {
                    for (var n = 0; n < this._components.length; n++) {
                        var r = this._components[n];
                        t !== n ? r.selected = !1 : r.selected ? r.openState ? r.hide() : r.open() : this._components[n].setSelectdIndx(e)
                    }
                },
                e.prototype.Open = function(t, e) {
                    this._openRadioButton(t, e)
                },
                e.prototype.destroy = function() {
                    this.removeChildren(),
                    this._treeData = null;
                    for (var t = 0; t < this._components.length; t++) {
                        var e = this._components[t];
                        e.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTap, this),
                        e.removeEventListener("event_selected_item", this._onSelectedchildrenItem, this),
                        e.destroy()
                    }
                },
                e.DIR_TO_H = "dir_to_H",
                e.DIR_TO_V = "dir_to_v",
                e.EVENT_SELECT_ITEM = "event_selected_item",
                e
            } (eui.Group);
            t.TreeScrollerContainer = e,
            __reflect(e.prototype, "common.ui.treemenu.TreeScrollerContainer");
            var n = function(t) {
                function n() {
                    var e = t.call(this) || this;
                    return e._selected = !1,
                    e._secondCompArry = [],
                    e._secondGroup = new eui.Group,
                    e._secondGroup.touchEnabled = !1,
                    e._onSelectedChildIdx = 0,
                    e.addChild(e._secondGroup),
                    e
                }
                return __extends(n, t),
                n.prototype.setData = function(t, n, r, i, o) {
                    this._customData = t,
                    this._secondItemRender = n,
                    this._infos = r,
                    this._offset = i,
                    this._dir = o,
                    o != e.DIR_TO_H && (this._secondGroup.percentWidth = 100),
                    this._initButton(),
                    this._updateView()
                },
                n.prototype.childrenCreated = function() {
                    t.prototype.childrenCreated.call(this),
                    this._startPos = new egret.Point(this.width, this.height)
                },
                n.prototype._updateView = function() {},
                n.prototype.setAnimationTm = function(t) {
                    this._tm = t
                },
                n.prototype._initButton = function() {
                    this.addChildAt(this._secondGroup, 0);
                    for (var t = 0; t < this._infos.length; t++) {
                        var e = new this._secondItemRender;
                        e.name = "id_" + t,
                        e.visible = !1,
                        e.setData(this._infos[t]),
                        e.touchEnabled = !0,
                        e.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this),
                        this._secondGroup.addChildAt(e, this._infos.length - t),
                        this._secondCompArry.push(e)
                    }
                },
                n.prototype._onTouchItem = function(t) {
                    t.stopImmediatePropagation();
                    var e = t.currentTarget.name,
                    n = ~~e.split("_")[1];
                    this._onSelectedChildIdx = n;
                    for (var r = 0; r < this._secondCompArry.length; r++) this._secondCompArry[r].selected = n === r;
                    this.dispatchEventWith("event_selected_item", !1, n)
                },
                n.prototype._open = function() {
                    if (this._openState = !0, this._tm > 0) this._showAni();
                    else {
                        for (var t = 0; t < this._secondCompArry.length; t++) {
                            var n = this._secondCompArry[t];
                            this._dir === e.DIR_TO_H ? n.x = this._startPos.x + t * n.width + t * this._offset: n.y = this._startPos.y + t * n.height + t * this._offset,
                            n.visible = !0,
                            n.selected = void 0 !== this._onSelectedChildIdx ? this._onSelectedChildIdx === t: 0 === t
                        }
                        this._updateLayout(),
                        this.dispatchEventWith("event_selected_item", !1, this._onSelectedChildIdx),
                        this._isplaying = !1
                    }
                },
                n.prototype._showAni = function() {
                    for (var t = this,
                    n = [], r = 0; r < this._secondCompArry.length; r++) {
                        var i = this._secondCompArry[r];
                        i.visible = !0,
                        i.selected = void 0 !== this._onSelectedChildIdx ? this._onSelectedChildIdx === r: 0 === r,
                        this._dir === e.DIR_TO_H ? (i.x = 0, n.push(this._createShowAni(i, "x", this._startPos.x + r * i.width + r * this._offset, !0))) : (i.y = this._startPos.y, n.push(this._createShowAni(i, "y", this._startPos.y + r * i.height + r * this._offset, !0)))
                    }
                    Promise.all(n).then(function() {
                        t.dispatchEventWith("event_selected_item", !1, t._onSelectedChildIdx),
                        t._isplaying = !1
                    })
                },
                n.prototype._hide = function() {
                    if (this._openState = !1, this._tm > 0) this._hideAni();
                    else {
                        for (var t = this._secondCompArry.length - 1; t >= 0; t--) {
                            var n = this._secondCompArry[t];
                            n.visible = !1,
                            this._dir === e.DIR_TO_H ? (n.x = 0, this.width = Math.max(this._startPos.x, this._secondGroup.width)) : (n.y = 0, this.height = Math.max(this._startPos.y, this._secondGroup.height))
                        }
                        this.validateNow(),
                        this._isplaying = !1
                    }
                },
                n.prototype._hideAni = function() {
                    for (var t = this,
                    n = [], r = this._secondCompArry.length - 1; r >= 0; r--) {
                        var i = this._secondCompArry[r];
                        this._dir === e.DIR_TO_H ? n.push(this._createShowAni(i, "x", 0, !1)) : n.push(this._createShowAni(i, "y", 0, !1))
                    }
                    Promise.all(n).then(function() {
                        t._isplaying = !1
                    })
                },
                n.prototype._updateLayout = function() {
                    this._secondGroup.validateNow(),
                    this._dir === e.DIR_TO_H ? this.width = Math.max(this._startPos.x, this._secondGroup.width) : this.height = Math.max(this._startPos.y, this._secondGroup.height),
                    this.validateNow()
                },
                n.prototype._createShowAni = function(t, e, n, r) {
                    return __awaiter(this, void 0, void 0,
                    function() {
                        var i = this;
                        return __generator(this,
                        function(o) {
                            return [2, new Promise(function(o, s) {
                                egret.Tween.get(t, {
                                    onChange: function() {
                                        i._updateLayout()
                                    }
                                }).to((a = {},
                                a[e] = n, a), i._tm, egret.Ease.quadInOut).call(function() {
                                    r || (t.selected = !1, t.visible = !1),
                                    o()
                                },
                                i);
                                var a
                            })]
                        })
                    })
                }, Object.defineProperty(n.prototype, "selected", {
                    get: function() {
                        return this._selected
                    },
                    set: function(t) {
                        this._selected !== t && (this._isplaying || (this._isplaying = !0, this._selected = t, this._selected ? this._open() : this._hide(), this._onChangeSelected()))
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype._onChangeSelected = function() {},
                n.prototype.getCustomData = function() {
                    return this._customData
                },
                n.prototype.hide = function() {
                    this._hide()
                },
                n.prototype.open = function() {
                    this._open()
                },
                n.prototype.setSelectdIndx = function(t) {
                    this._onSelectedChildIdx = t,
                    this.selected = !this.selected
                },
                Object.defineProperty(n.prototype, "openState", {
                    get: function() {
                        return this._openState
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype.destroy = function() {
                    this._infos = null,
                    this.removeChildren();
                    for (var t = 0; t < this._secondCompArry.length; t++) {
                        var e = this._secondCompArry[t];
                        e.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this),
                        egret.Tween.removeTweens(e),
                        e.destroy()
                    }
                },
                n
            } (eui.Component);
            t.FirstComponent = n,
            __reflect(n.prototype, "common.ui.treemenu.FirstComponent");
            var r = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._selected = !1,
                    e
                }
                return __extends(e, t),
                e.prototype.childrenCreated = function() {
                    t.prototype.childrenCreated.call(this),
                    this._updateView()
                },
                e.prototype.setData = function(t) {
                    this._customData = t,
                    this._updateView()
                },
                e.prototype._updateView = function() {},
                Object.defineProperty(e.prototype, "selected", {
                    get: function() {
                        return this._selected
                    },
                    set: function(t) {
                        this._selected = t,
                        this._onChangeSelected()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype._onChangeSelected = function() {},
                e.prototype.destroy = function() {
                    this._customData = null,
                    this.parent && this.parent.removeChild(this)
                },
                e
            } (eui.Component);
            t.SecondComponent = r,
            __reflect(r.prototype, "common.ui.treemenu.SecondComponent")
        } (e = t.treemenu || (t.treemenu = {}))
    } (e = t.ui || (t.ui = {}))
} (common || (common = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
ListEffectTool = function() {
    function t() {}
    return t.showListEffect = function(t, e, n, r) {
        egret.is(t.layout, "eui.TileLayout") && this.tileLayout(t, e, n, r)
    },
    t.tileLayout = function(e, n, r, i) {
        var o = e.layout.sizeAndPositionElement;
        e.layout.index = 0,
        e.layout.sizeAndPositionElement = function(s, a, h, _, c) {
            o.call(e.layout, s, a, h, _, c);
            var u = e.layout;
            if (!s.$unfirst) {
                var l, f = 0,
                d = (s.x, s.y),
                p = {};
                n == t.EFFECT_TO_UP && (s.setLayoutBoundsPosition(s.x, e.height), p.value = e.height, l = d),
                egret.Tween.get(p, {
                    loop: !1,
                    onChange: function() {
                        n == t.EFFECT_TO_UP ? s.setLayoutBoundsPosition(s.x, l) : n == t.EFFECT_TO_LEFT && s.setLayoutBoundsPosition(l, s.y)
                    },
                    onChangeObj: this
                }).to({
                    value: l
                },
                i + 20 * f, r).call(function() {
                    s.setLayoutBoundsPosition(s.x, d),
                    e.layout.sizeAndPositionElement = o,
                    u.index = 0
                },
                u),
                s.$unfirst = !0
            }
        }
    },
    t.EFFECT_TO_RIGHT = 1,
    t.EFFECT_TO_LEFT = 2,
    t.EFFECT_TO_UP = 3,
    t.EFFECT_TO_DOWN = 4,
    t.EFFECT_FADE_IN = 5,
    t
} ();
__reflect(ListEffectTool.prototype, "ListEffectTool");
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    n.prototype = e.prototype,
    t.prototype = new n
},
TMHSlider = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.thumbOffSetLeft = 6,
        e.thumbOffSetRight = 6,
        e
    }
    return __extends(e, t),
    e.prototype.getThumbRange1 = function() {
        var t = egret.$TempRectangle;
        this.track.getLayoutBounds(t);
        var e = t.width;
        return this.thumb.getLayoutBounds(t),
        e - t.width + this.thumbOffSetLeft + this.thumbOffSetRight
    },
    e.prototype.updateSkinDisplayList = function() {
        if (this.thumb && this.track) {
            var t = this.$Range,
            e = this.getThumbRange1(),
            n = t[0] - t[2],
            r = n > 0 ? (this.pendingValue - t[2]) / n * e: 0,
            i = this.track.localToGlobal(r, 0, egret.$TempPoint),
            o = i.x,
            s = i.y,
            a = this.thumb.$parent.globalToLocal(o, s, egret.$TempPoint).x,
            h = egret.$TempRectangle;
            if (this.thumb.getLayoutBounds(h), this.thumb.setLayoutBoundsPosition(Math.round(a) - this.thumbOffSetLeft, h.y), this.trackHighlight && this.trackHighlight.$parent) {
                var _ = this.trackHighlight.$parent.globalToLocal(o, s, egret.$TempPoint).x - r;
                this.trackHighlight.x = Math.round(_),
                this.trackHighlight.width = Math.round(r)
            }
            this.txtNum && (this.txtNum.text = "" + this.value, this.txtNum.x = this.thumb.x + this.thumb.width / 2 - this.txtNum.width / 2)
        }
    },
    e
} (eui.HSlider);
__reflect(TMHSlider.prototype, "TMHSlider");