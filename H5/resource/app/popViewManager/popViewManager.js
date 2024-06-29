var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    n.prototype = t.prototype,
    e.prototype = new n
},
popView; !
function(e) {
    var t; !
    function(e) {
        var t = function(e) {
            function t(t, n) {
                var o = e.call(this) || this;
                return o._node = t,
                o._data = n,
                o.visible = !1,
                o
            }
            return __extends(t, e),
            t.prototype.initialized = function() {
                this.visible = !0
            },
            t.prototype.Destroy = function() {
                this._node = null,
                this._data = null,
                this.parent && this.parent.removeChild(this)
            },
            t.prototype.updateCompSize = function() {},
            t
        } (eui.Component);
        e.BaseComp = t,
        __reflect(t.prototype, "popView.components.BaseComp")
    } (t = e.components || (e.components = {}))
} (popView || (popView = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__awaiter = this && this.__awaiter ||
function(e, t, n, o) {
    return new(n || (n = Promise))(function(i, r) {
        function a(e) {
            try {
                c(o.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                c(o["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function c(e) {
            e.done ? i(e.value) : new n(function(t) {
                t(e.value)
            }).then(a, s)
        }
        c((o = o.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return o([e, t])
        }
    }
    function o(n) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; c;) try {
            if (i = 1, r && (a = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(r, n[1])).done) return a;
            switch (r = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
                break;
            case 4:
                return c.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                c.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = c.ops.pop(),
                c.trys.pop();
                continue;
            default:
                if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    c = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    c.label = n[1];
                    break
                }
                if (6 === n[0] && c.label < a[1]) {
                    c.label = a[1],
                    a = n;
                    break
                }
                if (a && c.label < a[2]) {
                    c.label = a[2],
                    c.ops.push(n);
                    break
                }
                a[2] && c.ops.pop(),
                c.trys.pop();
                continue
            }
            n = t.call(e, c)
        } catch(o) {
            n = [6, o],
            r = 0
        } finally {
            i = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var i, r, a, s, c = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
PopEffStyle = function() {
    function e() {}
    return e.PlayOpenTweensEffect = function(t, n) {
        return __awaiter(this, void 0, void 0,
        function() {
            var o, i, r, a, s, c, _, l, p, h, u;
            return __generator(this,
            function(f) {
                switch (f.label) {
                case 0:
                    switch (o = t.width, i = t.height, r = egret.lifecycle.stage, a = o + (r.stageWidth - o) / 2, s = i + (r.stageHeight - i) / 2, c = n.openAniTm ? n.openAniTm: 600, _ = n.openEasyFun ? n.openEasyFun: egret.Ease.getBackOut(1), l = n.showAniType) {
                    case e.CENTER:
                        return [3, 1];
                    case e.LEFT_TO_RIGHT:
                        return [3, 3];
                    case e.RIGHT_TO_LEFT:
                        return [3, 8];
                    case e.TOP_TO_DOWN:
                        return [3, 13];
                    case e.DOWN_TO_TOP:
                        return [3, 18]
                    }
                    return [3, 23];
                case 1:
                    return t.anchorOffsetX = o / 2,
                    t.anchorOffsetY = i / 2,
                    p = n.horizontalCenterOffset,
                    h = n.verticalCenterOffset,
                    n.relativeToPoint && (u = this._relativeTo(n.relativeToPoint.srcWorldPos, n.relativeToPoint.rx, n.relativeToPoint.ry, t, n.relativeToPoint.dir), p = u.horizontalCenter || 0, h = u.verticalCenter || 0),
                    t.horizontalCenter = p,
                    t.verticalCenter = h,
                    t.scaleX = t.scaleY = .5,
                    [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    300, _))];
                case 2:
                    return f.sent(),
                    [3, 23];
                case 3:
                    return n.isMoveToCenter ? (t.horizontalCenter = -a, t.verticalCenter = n.verticalCenterOffset, [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        horizontalCenter: 0
                    },
                    c, _))]) : [3, 5];
                case 4:
                    return f.sent(),
                    [3, 7];
                case 5:
                    return t.left = -o,
                    t.verticalCenter = n.verticalCenterOffset,
                    [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        left: 0
                    },
                    c, _))];
                case 6:
                    f.sent(),
                    f.label = 7;
                case 7:
                    return [3, 23];
                case 8:
                    return n.isMoveToCenter ? (t.horizontalCenter = a, t.verticalCenter = n.verticalCenterOffset, [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        horizontalCenter: 0
                    },
                    c, _))]) : [3, 10];
                case 9:
                    return f.sent(),
                    [3, 12];
                case 10:
                    return t.right = -o,
                    t.verticalCenter = n.verticalCenterOffset,
                    [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        right: 0
                    },
                    c, _))];
                case 11:
                    f.sent(),
                    f.label = 12;
                case 12:
                    return [3, 23];
                case 13:
                    return n.isMoveToCenter ? (t.verticalCenter = -s, t.horizontalCenter = n.horizontalCenterOffset, [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        verticalCenter: 0
                    },
                    c, _))]) : [3, 15];
                case 14:
                    return f.sent(),
                    [3, 17];
                case 15:
                    return t.top = -i,
                    t.horizontalCenter = n.horizontalCenterOffset,
                    [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        top: 0
                    },
                    c, _))];
                case 16:
                    f.sent(),
                    f.label = 17;
                case 17:
                    return [3, 23];
                case 18:
                    return n.isMoveToCenter ? (t.verticalCenter = s, t.horizontalCenter = n.horizontalCenterOffset, [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        verticalCenter: 0
                    },
                    c, _))]) : [3, 20];
                case 19:
                    return f.sent(),
                    [3, 22];
                case 20:
                    return t.bottom = -i,
                    t.horizontalCenter = n.horizontalCenterOffset,
                    [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        bottom: 0
                    },
                    c, _))];
                case 21:
                    f.sent(),
                    f.label = 22;
                case 22:
                    return [3, 23];
                case 23:
                    return [2, Promise.resolve()]
                }
            })
        })
    },
    e.PlayHideTweensEffect = function(t, n) {
        return __awaiter(this, void 0, void 0,
        function() {
            var o, i, r, a, s, c, _, l, p;
            return __generator(this,
            function(h) {
                switch (h.label) {
                case 0:
                    switch (o = t.width, i = t.height, r = egret.lifecycle.stage, a = o + (r.stageWidth - o) / 2, s = i + (r.stageHeight - i) / 2, c = n.showAniType, _ = n.closeAniTm ? n.closeAniTm: 100, l = n.closeEasyFun ? n.closeEasyFun: egret.Ease.circIn, p = c) {
                    case e.CENTER:
                        return [3, 1];
                    case e.LEFT_TO_RIGHT:
                        return [3, 3];
                    case e.RIGHT_TO_LEFT:
                        return [3, 8];
                    case e.TOP_TO_DOWN:
                        return [3, 13];
                    case e.DOWN_TO_TOP:
                        return [3, 18]
                    }
                    return [3, 23];
                case 1:
                    return t.anchorOffsetX = o / 2,
                    t.anchorOffsetY = i / 2,
                    [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        scaleX: .5,
                        scaleY: .5
                    },
                    _, l))];
                case 2:
                    return h.sent(),
                    [3, 23];
                case 3:
                    return n.isMoveToCenter ? [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        horizontalCenter: a
                    },
                    _, l))] : [3, 5];
                case 4:
                    return h.sent(),
                    [3, 7];
                case 5:
                    return [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        left: -o
                    },
                    _, l))];
                case 6:
                    h.sent(),
                    h.label = 7;
                case 7:
                    return [3, 23];
                case 8:
                    return n.isMoveToCenter ? [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        horizontalCenter: -a
                    },
                    _, l))] : [3, 10];
                case 9:
                    return h.sent(),
                    [3, 12];
                case 10:
                    return [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        right: -o
                    },
                    _, l))];
                case 11:
                    h.sent(),
                    h.label = 12;
                case 12:
                    return [3, 23];
                case 13:
                    return n.isMoveToCenter ? [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        verticalCenter: s
                    },
                    _, l))] : [3, 15];
                case 14:
                    return h.sent(),
                    [3, 17];
                case 15:
                    return [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        top: -i
                    },
                    _, l))];
                case 16:
                    h.sent(),
                    h.label = 17;
                case 17:
                    return [3, 23];
                case 18:
                    return n.isMoveToCenter ? [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        verticalCenter: -s
                    },
                    _, l))] : [3, 20];
                case 19:
                    return h.sent(),
                    [3, 22];
                case 20:
                    return [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                        bottom: -i
                    },
                    _, l))];
                case 21:
                    h.sent(),
                    h.label = 22;
                case 22:
                    return [3, 23];
                case 23:
                    return [2, Promise.resolve()]
                }
            })
        })
    },
    e._relativeTo = function(e, t, n, o, i) {
        var r, a, s = egret.lifecycle.stage.stageWidth,
        c = egret.lifecycle.stage.stageHeight,
        _ = s / 2,
        l = c / 2,
        p = e.x + t - _,
        h = e.y + n - l,
        u = o.width / 2,
        f = o.height / 2;
        switch (i) {
        case "left-top":
            r = p + u,
            a = h + f;
            break;
        case "right-top":
            r = p - u,
            a = h + f;
            break;
        case "left-down":
            r = p + u,
            a = h - f;
            break;
        case "right-down":
            r = p - u,
            a = h - f
        }
        return {
            horizontalCenter: r,
            verticalCenter: a
        }
    },
    e.CENTER = "center",
    e.LEFT_TO_RIGHT = "left_right",
    e.RIGHT_TO_LEFT = "right_left",
    e.TOP_TO_DOWN = "top_to_down",
    e.DOWN_TO_TOP = "down_to_top",
    e
} ();
__reflect(PopEffStyle.prototype, "PopEffStyle");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    n.prototype = t.prototype,
    e.prototype = new n
},
PopView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._loadSkinCompleteFlag = !1,
        t._createCompleteFlag = !1,
        t._setDataFlag = !1,
        t.initData(),
        t.addEventListener(eui.UIEvent.COMPLETE, t._loaderSkinComplete, t),
        t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t._creationComplete, t),
        t
    }
    return __extends(t, e),
    t.prototype.initData = function() {},
    t.prototype._loaderSkinComplete = function() {
        this.removeEventListener(eui.UIEvent.COMPLETE, this._loaderSkinComplete, this),
        this._loadSkinCompleteFlag = !0,
        this._initView()
    },
    t.prototype._creationComplete = function() {
        this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this._creationComplete, this),
        this._createCompleteFlag = !0,
        this._initView()
    },
    t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    },
    t.prototype._initView = function() {
        this._loadSkinCompleteFlag && this._createCompleteFlag && this._setDataFlag && (this._parseData(), this.initialized(), this.initEvents(), this._upDateView(), this.dispatchEventWith(t.EVENT_INITLIZED))
    },
    t.prototype._upDateView = function() {},
    t.prototype.initialized = function() {},
    t.prototype.setData = function(e) {
        this._data = e,
        this._setDataFlag = !0,
        this._initView()
    },
    t.prototype._parseData = function() {},
    t.prototype.initEvents = function() {},
    t.prototype.removeEvents = function() {},
    t.prototype.hide = function() {
        PopViewManager.getInstance().hideView(this.hashCode)
    },
    t.prototype.getComponent = function(e) {
        var t = this.parent;
        if (t) for (var n = 0; n < t.numChildren; n++) {
            var o = t.getChildAt(n);
            if (o instanceof e) return o
        }
        return null
    },
    t.prototype.getComponents = function(e) {
        for (var t, n = this.parent,
        o = 0; o < n.numChildren; o++) {
            var i = n.getChildAt(o);
            i instanceof e && (t || (t = []), t.push(i))
        }
        return t
    },
    t.prototype.destroy = function() {
        this._data = null,
        this.removeEvents(),
        TimeDelayUtils.clearAllTimeByThisObj(this),
        this.parent && this.parent.removeChild(this),
        this.removeChildren()
    },
    t.EVENT_INITLIZED = "event_initlized",
    t.EVENT_CHANGED_POS = "event_changed_pos",
    t.EVENT_DESTROY = "event_destroy_begin",
    t
} (eui.Component);
__reflect(PopView.prototype, "PopView");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
PopViewManager = function() {
    function e() {
        return this._useImageMask = !0,
        e._instance ? void console.error("PopViewManager 不允许存在多个实例") : void(this._compCtrl = new popView.components.CompCtrl)
    }
    return e.getInstance = function() {
        return e._instance || (e._instance = new e),
        e._instance
    },
    e.prototype.RegisterPopLayer = function(e) {
        this._layer = e
    },
    e.prototype.openView = function(t, n, o, i) {
        this._layer || (this.RegisterPopLayer(LevelManager.tipLevel), LevelManager.tipLevel.stage.addEventListener(egret.Event.RESIZE, this._onResize, this, !1)),
        this.__viewMap__ || (this.__viewMap__ = {}),
        console.log("打开弹窗: %c" + t.constructor.prototype.__class__, "color: pink; font-size: 18px;");
        var r = "key_" + t.hashCode,
        a = new eui.Group;
        a.left = a.right = a.bottom = a.top = 0,
        a.width = egret.lifecycle.stage.stageWidth,
        a.height = egret.lifecycle.stage.stageHeight,
        a.name = r + "_con";
        var s;
        if (n || (n = e.createDefaultStyleObject()), n.useStageBg) {
            var c = new egret.RenderTexture;
            c.drawToTexture(egret.lifecycle.stage),
            s = new eui.Image,
            s.source = c,
            shader.GaussianBlur.addEff(s, 2, .5)
        } else s = this._useImageMask ? new eui.Image("common_mask_bg_s9_png") : new egret.Shape,
        this._drawMask(s, n.maskShapeStyle);
        s.name = r + "_mask",
        s.touchEnabled = !1,
        a.addChild(s),
        s instanceof eui.Image && (s.horizontalCenter = s.verticalCenter = 0),
        this._compCtrl.AddComps(a, n),
        a.addChild(t),
        s.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapMask, this),
        t.name = r + "_pop";
        var _ = {};
        _.con = a,
        _.bg = s,
        _.view = t,
        _.style = n,
        this.__viewMap__[r] = _,
        t.setData(o),
        t.addEventListener(PopView.EVENT_INITLIZED, this._onViewInitialized, this),
        i ? i.addChild(a) : this._layer.addChild(a)
    },
    e.prototype._onViewInitialized = function(e) {
        var t = this,
        n = e.currentTarget;
        n.validateNow();
        var o = "key_" + n.hashCode,
        i = this.__viewMap__[o],
        r = i.bg,
        a = i.style.effStyle;
        a ? PopEffStyle.PlayOpenTweensEffect(n, a).then(function() {
            t._setResize(t.__viewMap__[o]),
            n.parent && n.parent.dispatchEventWith(PopView.EVENT_INITLIZED),
            r.touchEnabled = !0,
            EventManager.dispatchEventWith(GameEvent.COMPLETE)
        }) : (this._setResize(this.__viewMap__[o]), n.parent && n.parent.dispatchEventWith(PopView.EVENT_INITLIZED), r.touchEnabled = !0)
    },
    e.prototype._setResize = function(e) {
        if (e) {
            var t = e.con,
            n = e.bg,
            o = e.view,
            i = e.style;
            if (t.width = egret.lifecycle.stage.stageWidth, t.height = egret.lifecycle.stage.stageHeight, i.useStageBg || this._drawMask(n, i.maskShapeStyle), !i.effStyle) {
                var r = o.width > o.measuredWidth ? o.width: o.measuredWidth,
                a = o.height > o.measuredHeight ? o.height: o.measuredHeight,
                s = egret.lifecycle.stage;
                o.x = (s.stageWidth - r) / 2,
                o.y = (s.stageHeight - a) / 2
            }
            t.dispatchEventWith(PopView.EVENT_CHANGED_POS),
            o.dispatchEventWith(PopView.EVENT_CHANGED_POS)
        }
    },
    e.prototype._drawMask = function(e, t) {
        var n = egret.lifecycle.stage;
        e instanceof egret.Shape ? (e.graphics.clear(), e.graphics.beginFill(t.maskColor, t.maskAlpha), e.graphics.drawRect(0, 0, n.stageWidth, n.stageHeight), e.graphics.endFill()) : (e.alpha = t.maskAlpha, e.width = n.stageWidth, e.height = n.stageHeight)
    },
    e.prototype._onResize = function(e) {
        for (var t in this.__viewMap__) {
            var n = this.__viewMap__[t];
            this._setResize(n)
        }
    },
    e.prototype._onTouchTapMask = function(e) {
        var t = e.target.name,
        n = t.split("_")[1],
        o = this.__viewMap__["key_" + n];
        if (o) {
            var i = o.style;
            if (i.ignoreMaskClick) return;
            var r = i.clickMaskHandler,
            a = i.caller;
            if (r && a) return void r.apply(a, null);
            this.hideView(~~n)
        }
    },
    e.prototype.hideView = function(e, t) {
        void 0 === t && (t = !0);
        var n;
        n = "number" == typeof e ? e: e.hashCode;
        var o = this.__viewMap__["key_" + n];
        if (o) {
            var i = o.con,
            r = o.bg,
            a = o.view,
            s = o.style.effStyle,
            c = this;
            a.dispatchEventWith(PopView.EVENT_DESTROY),
            i.dispatchEventWith(PopView.EVENT_DESTROY);
            var _ = function() {
                r.removeEventListener(egret.TouchEvent.TOUCH_TAP, c._onTouchTapMask, this),
                a.removeEventListener(PopView.EVENT_INITLIZED, c._onViewInitialized, this),
                o.style.useStageBg ? (shader.GaussianBlur.removeEff(r), r.texture.dispose()) : c._useImageMask || r.graphics.clear(),
                i.parent && i.parent.removeChild(i),
                i.removeChildren(),
                t && (console.log("关闭弹窗: %c" + a.constructor.prototype.__class__, "color: pink; font-size: 18px;"), a.destroy())
            };
            s ? PopEffStyle.PlayHideTweensEffect(a, s).then(function() {
                egret.Tween.removeTweens(e),
                _()
            }) : _()
        }
        this.__viewMap__["key_" + n] = null,
        delete this.__viewMap__["key_" + n]
    },
    e.createDefaultStyleObject = function() {
        var e = {};
        return e.useStageBg = !1,
        e.maskShapeStyle = {
            maskAlpha: .4,
            maskColor: 0
        },
        e.maskBgStyle = {},
        e.clickMaskHandler = null,
        e.caller = null,
        e.effStyle = {
            showAniType: PopEffStyle.CENTER,
            isMoveToCenter: !1,
            horizontalCenterOffset: 0,
            verticalCenterOffset: 0,
            relativeToPoint: null
        },
        e
    },
    e.prototype.hideAll = function() {
        for (var e in this.__viewMap__) this.hideView(~~e.split("_")[1])
    },
    e
} ();
__reflect(PopViewManager.prototype, "PopViewManager");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
popView; !
function(e) {
    var t; !
    function(e) {
        var t = function() {
            function t() {}
            return t.prototype.AddComps = function(e, t) {
                var n = t.comps;
                if (n) {
                    e.addEventListener(PopView.EVENT_CHANGED_POS, this._onChangePos, this),
                    e.addEventListener(PopView.EVENT_DESTROY, this._onDestroy, this),
                    e.addEventListener(PopView.EVENT_INITLIZED, this._onInitlized, this);
                    for (var o = 0; o < n.length; o++) {
                        var i = n[o],
                        r = t.compsData ? t.compsData[o] : null,
                        a = this._instantiate(i, e, r);
                        e.addChild(a),
                        a.updateCompSize()
                    }
                }
            },
            t.prototype._instantiate = function(e, t, n) {
                var o = egret.getDefinitionByName("popView.components." + e);
                return new o(t, n)
            },
            t.prototype._onChangePos = function(t) {
                for (var n = t.currentTarget,
                o = n.numChildren,
                i = 0; o > i; i++) {
                    var r = n.getChildAt(i);
                    r instanceof e.BaseComp && r.updateCompSize()
                }
            },
            t.prototype._onInitlized = function(t) {
                for (var n = t.currentTarget,
                o = n.numChildren,
                i = 0; o > i; i++) {
                    var r = n.getChildAt(i);
                    r instanceof e.BaseComp && r.initialized()
                }
            },
            t.prototype._onDestroy = function(t) {
                var n = t.currentTarget;
                n.removeEventListener(PopView.EVENT_CHANGED_POS, this._onChangePos, this),
                n.removeEventListener(PopView.EVENT_DESTROY, this._onChangePos, this);
                for (var o = n.numChildren,
                i = o - 1; i > 0; i--) {
                    var r = n.getChildAt(i);
                    r instanceof e.BaseComp && r.Destroy()
                }
            },
            t
        } ();
        e.CompCtrl = t,
        __reflect(t.prototype, "popView.components.CompCtrl")
    } (t = e.components || (e.components = {}))
} (popView || (popView = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
popView; !
function(e) {
    var t; !
    function(e) {
        var t = function() {
            function e() {}
            return e.PROMPT_CLOSE_TXT = "PromptCloseTxt",
            e
        } ();
        e.CompName = t,
        __reflect(t.prototype, "popView.components.CompName")
    } (t = e.components || (e.components = {}))
} (popView || (popView = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    n.prototype = t.prototype,
    e.prototype = new n
},
popView; !
function(e) {
    var t; !
    function(e) {
        var t = function(t) {
            function n(n) {
                var o = t.call(this, n) || this;
                return o.skinName = "",
                o.touchEnabled = !1,
                o.name = e.CompName.PROMPT_CLOSE_TXT,
                o
            }
            return __extends(n, t),
            n.prototype.createChildren = function() {
                t.prototype.createChildren.call(this),
                this._txt = new eui.Label,
                this._txt.size = 16,
                this._txt.textAlign = egret.HorizontalAlign.CENTER,
                this._txt.width = 300,
                this._txt.textColor = 11974326,
                this._txt.text = "———点击空白处关闭———",
                this._txt.touchEnabled = !1,
                this.addChild(this._txt),
                egret.Tween.get(this._txt, {
                    loop: !0
                }).to({
                    alpha: .3
                },
                1e3).to({
                    alpha: 1
                },
                1500).wait(500),
                this.validateNow()
            },
            n.prototype.setTxt = function(e) {
                "string" == typeof e ? this._txt.text = e: this._txt.textFlow = e,
                this.validateNow(),
                this.updateCompSize()
            },
            n.prototype.setColor = function(e) {
                this._txt.textColor = e
            },
            n.prototype.validateNow = function() {
                t.prototype.validateNow.call(this),
                this.anchorOffsetX = this.width / 2,
                this.anchorOffsetY = this.height / 2
            },
            n.prototype.updateCompSize = function() {
                var e = this._node.name,
                t = e.split("_")[1],
                n = this._node.getChildByName("key_" + t + "_pop");
                if (n) {
                    var o = n.localToGlobal(),
                    i = o.x + n.width / 2,
                    r = o.y + n.height,
                    a = this.parent,
                    s = a.globalToLocal(i, r + 15);
                    this.x = s.x,
                    this.y = s.y
                }
            },
            n.prototype.Destroy = function() {
                egret.Tween.removeTweens(this._txt),
                t.prototype.Destroy.call(this)
            },
            n
        } (e.BaseComp);
        e.PromptCloseTxt = t,
        __reflect(t.prototype, "popView.components.PromptCloseTxt")
    } (t = e.components || (e.components = {}))
} (popView || (popView = {}));