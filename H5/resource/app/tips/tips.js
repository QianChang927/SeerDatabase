var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
tips; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._loadSkinCompleteFlag = !1,
            t._createCompleteFlag = !1,
            t.addEventListener(eui.UIEvent.COMPLETE, t._loaderSkinComplete, t),
            t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t._creationComplete, t),
            t
        }
        return __extends(i, e),
        i.prototype._loaderSkinComplete = function() {
            this.removeEventListener(eui.UIEvent.COMPLETE, this._loaderSkinComplete, this),
            this._loadSkinCompleteFlag = !0,
            this._updateTips()
        },
        i.prototype._creationComplete = function() {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this._creationComplete, this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this._createCompleteFlag = !0,
            this._updateTips()
        },
        i.prototype.SetTipsData = function(t) {
            this._tipsData = t,
            this._data = t.data,
            this._parseData(),
            this._updateTips()
        },
        i.prototype._parseData = function() {},
        i.prototype._updateTips = function() {
            this._loadSkinCompleteFlag && this._createCompleteFlag && this._data && (this._updateLayout(), this._setPosition(), this._layoutComplete())
        },
        i.prototype._updateLayout = function() {},
        i.prototype._layoutComplete = function() {},
        i.prototype._setPosition = function() {
            if (void 0 !== this._tipsData.forceX && void 0 !== this._tipsData.forceY) this.x = this._tipsData.forceX,
            this.y = this._tipsData.forceY;
            else {
                var t = this._tipsData.w,
                e = this._tipsData.h,
                i = this._tipsData.anchorX,
                s = this._tipsData.anchorY,
                o = this._tipsData.scaleY,
                n = this._tipsData.scaleY,
                r = this._tipsData.worldX + i,
                a = this._tipsData.worldY + s,
                _ = r - i / t * o * t + o * t / 2,
                p = a - s / e * n * e + n * e / 2,
                h = this.width,
                l = this.height,
                u = egret.lifecycle.stage.stageWidth,
                c = egret.lifecycle.stage.stageHeight;
                u > _ + h && c > p + l ? (this.anchorOffsetX = 0, this.anchorOffsetY = 0) : _ - h > 0 && c > p + l ? (this.anchorOffsetX = h, this.anchorOffsetY = 0) : u > _ + h && p - l > 0 ? (this.anchorOffsetX = 0, this.anchorOffsetY = l) : _ - h > 0 && p - l > 0 ? (this.anchorOffsetX = h, this.anchorOffsetY = l) : (this.anchorOffsetX = 0, this.anchorOffsetY = 0, console.warn("当前tips尺寸比较特殊")),
                this.x = _,
                this.y = p
            }
        },
        i.prototype.hideTips = function() {
            t.TipsManager.getInstance().HideTips()
        },
        i.prototype.destroy = function() {
            this.hideTips(),
            this._data = null
        },
        i
    } (eui.Component);
    t.BaseTips = e,
    __reflect(e.prototype, "tips.BaseTips", ["tips.ITips"])
} (tips || (tips = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
tips; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._loadSkinCompleteFlag = !1,
            e._createCompleteFlag = !1,
            e._setDataFlag = !1,
            e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            e.addEventListener(eui.UIEvent.COMPLETE, e._loaderSkinComplete, e),
            e.addEventListener(eui.UIEvent.CREATION_COMPLETE, e._creationComplete, e),
            e._initData(),
            e
        }
        return __extends(e, t),
        e.prototype._loaderSkinComplete = function() {
            this.removeEventListener(eui.UIEvent.COMPLETE, this._loaderSkinComplete, this),
            this._loadSkinCompleteFlag = !0,
            this._initView()
        },
        e.prototype._creationComplete = function() {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this._creationComplete, this),
            this._createCompleteFlag = !0,
            this._initView()
        },
        e.prototype._initView = function() {
            this._loadSkinCompleteFlag && this._createCompleteFlag && this._setDataFlag && (this._parseData(), this._initialized(), this._addEvents(), this._updateView(), this.dispatchEventWith("event_initlized"))
        },
        e.prototype._initData = function() {},
        e.prototype._initialized = function() {},
        e.prototype._addEvents = function() {},
        e.prototype._removeEvents = function() {},
        e.prototype.setData = function(t) {
            this._data = t,
            this._setDataFlag = !0,
            this._initView()
        },
        e.prototype._parseData = function() {},
        e.prototype._updateView = function() {},
        e.prototype.destroy = function() {
            this._data = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this._removeEvents()
        },
        e
    } (eui.Component);
    t.BaseComp = e,
    __reflect(e.prototype, "tips.BaseComp")
} (tips || (tips = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
tips; !
function(t) {
    var e = function() {
        function e() {
            this._tips = null,
            this._tipsMap = {},
            this._timeOutFlag = 0,
            this.PropertyKey = "$tips",
            e._instance ? console.warn("Error::TipsManager已经有实例存在，不可以在创建多个实例") : e._instance = this
        }
        return e.getInstance = function() {
            return e._instance || new e,
            e._instance
        },
        e.setup = function() {
            e.getInstance().RegisterTipsLayer(LevelManager.tipLevel)
        },
        e.prototype.init = function() {
            this._tipsContaioiner = new eui.Group,
            this._tipsContaioiner.name = "tips"
        },
        e.prototype.RegisterTipsLayer = function(t) {
            this._tipsLayer = t,
            this.init()
        },
        e.prototype.openTips = function(i) {
            this._tipsLayer || e.setup();
            var s = i.type;
            if (!this._tipsMap[s]) switch (s) {
            case e.TIPS_TYPE_NORMAL:
                this._tipsMap[s] = new t.NormalTips;
                break;
            case e.TIPS_TYPE_COUNTERMARK:
                this._tipsMap[s] = new t.CounterMark
            }
            this._tips = this._tipsMap[s],
            this._tipsContaioiner.addChild(this._tips),
            this._tipsContaioiner.alpha = 0,
            this._tipsLayer.addChild(this._tipsContaioiner),
            this._tips.SetTipsData(i),
            egret.Tween.removeTweens(this._tipsContaioiner),
            egret.Tween.get(this._tipsContaioiner).to({
                alpha: 1
            },
            300)
        },
        e.prototype.addTips = function(t, e, i, s, o, n) {
            void 0 === n && (n = 300),
            t.validateNow && t.validateNow();
            var r = {
                type: e,
                data: i,
                worldX: t.localToGlobal().x,
                worldY: t.localToGlobal().y,
                localX: t.x,
                localY: t.y,
                w: t.width,
                h: t.height,
                anchorX: t.anchorOffsetX,
                anchorY: t.anchorOffsetY,
                scaleX: t.scaleX,
                scaleY: t.scaleY,
                forceX: s,
                forceY: o,
                delay: n,
                defaultTouchEnable: t.touchEnabled
            };
            t[this.PropertyKey] = r,
            t.touchEnabled = !0,
            t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this),
            t.addEventListener(egret.TouchEvent.TOUCH_END, this._onTouchEnd, this),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onStageOutSide, this)
        },
        e.prototype.ChangeTipsData = function(t, e) {
            t[this.PropertyKey] && (t[this.PropertyKey].data = e)
        },
        e.prototype.HideTips = function() {
            var t = this;
            this._tips && this._tips.parent && (egret.Tween.removeTweens(this._tipsContaioiner), egret.Tween.get(this._tipsContaioiner).to({
                alpha: 0
            },
            300).call(function() {
                t._tipsContaioiner.parent && t._tipsContaioiner.parent.removeChild(t._tipsContaioiner),
                t._tips.parent && t._tips.parent.removeChild(t._tips),
                t._tips.hideTips()
            }))
        },
        e.prototype._onTouchBegin = function(t) {
            var e = this,
            i = t.currentTarget[this.PropertyKey],
            s = t.currentTarget;
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_END, this._onTouchEnd, this),
            this._timeOutFlag = egret.setTimeout(function() {
                s[e.PropertyKey] && (s[e.PropertyKey].worldX = s.localToGlobal().x, s[e.PropertyKey].worldY = s.localToGlobal().y, s[e.PropertyKey].localX = s.x, s[e.PropertyKey].localY = s.y, s[e.PropertyKey].w = s.width, s[e.PropertyKey].h = s.height, s[e.PropertyKey].anchorX = s.anchorOffsetX, s[e.PropertyKey].anchorY = s.anchorOffsetY, s[e.PropertyKey].scaleX = s.scaleX, s[e.PropertyKey].scaleY = s.scaleY, e.openTips(i))
            },
            this, i.delay)
        },
        e.prototype._onTouchEnd = function(t) {
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this._onTouchEnd, this),
            egret.clearTimeout(this._timeOutFlag),
            this.HideTips()
        },
        e.prototype._onStageOutSide = function(t) {
            egret.clearTimeout(this._timeOutFlag),
            this.HideTips()
        },
        e.prototype.removeTips = function(t) {
            t && (t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this), t.removeEventListener(egret.TouchEvent.TOUCH_END, this._onTouchEnd, this), t.stage && t.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onStageOutSide, this), t.touchEnabled = t.defaultTouchEnable, delete t[this.PropertyKey])
        },
        e.TIPS_TYPE_NORMAL = "tips_normal",
        e.TIPS_TYPE_COUNTERMARK = "tips_countermark",
        e._instance = null,
        e
    } ();
    t.TipsManager = e,
    __reflect(e.prototype, "tips.TipsManager")
} (tips || (tips = {}));
var TipsManager = tips.TipsManager,
__reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
tips; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = CounterMarkTipsDefaultAttrTxtSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype._parseData = function() {},
        e.prototype._updateView = function() {
            this.txt_attr.text = this._data.attr,
            this.txt_value.text = this._data.value,
            this.validateNow()
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (t.BaseComp);
    t.CompCounterMarkDefaultTxt = e,
    __reflect(e.prototype, "tips.CompCounterMarkDefaultTxt")
} (tips || (tips = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
tips; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = CounterMarkTipsExtraAttrTxtSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype._parseData = function() {},
        e.prototype._updateView = function() {
            this.txt_attr.text = this._data.attr,
            this.txt_value.text = this._data.value,
            this.validateNow()
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (t.BaseComp);
    t.CompCounterMarkExtraTxt = e,
    __reflect(e.prototype, "tips.CompCounterMarkExtraTxt")
} (tips || (tips = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
tips; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._compDefaultTxtPool = new ObjectPool(t.CompCounterMarkDefaultTxt, 20, "", "destory"),
            i._compExtraTxtPool = new ObjectPool(t.CompCounterMarkExtraTxt, 20, "", "destory"),
            i.TYPE_ARR = ["攻击", "防御", "特攻", "特防", "速度", "体力"],
            i.skinName = CounterMarkSkin,
            i
        }
        return __extends(i, e),
        i.prototype._parseData = function() {
            this._vo = this._data
        },
        i.prototype._updateLayout = function() {
            var t = this;
            this._resetUi();
            var e = this._vo.id;
            this.lab_name.textFlow = tipsPop.getCounterMaekNameHtml(e);
            var i = CountermarkXMLInfo.getType(e),
            s = CountermarkXMLInfo.getTypeName(e);
            this.lab_type.text = s,
            i === CountermarkType.MARK_IS_COMMON_ABLITY ? this._setAblityStyle() : i === CountermarkType.MARK_IS_UNIVERSAL ? this._setUniverSalStyle() : (console.error("当前刻印类型：" + i + "不支持tips显示"), egret.setTimeout(function() {
                t.hideTips()
            },
            this, 0))
        },
        i.prototype._setAblityStyle = function() {
            var t, e = this._vo.id,
            i = this.grp_default.y,
            s = CountermarkXMLInfo.getArg(e),
            o = [];
            for (t = 0; 6 > t; t++)~~s[t] > 0 && o.push({
                attr: this.TYPE_ARR[t],
                value: s[t]
            });
            for (t = 0; t < o.length; t++) {
                var n = this._compExtraTxtPool.pop();
                this.grp_default.addChild(n),
                n.setData({
                    attr: o[t].attr,
                    value: "+" + o[t].value
                })
            }
            this.grp_default.visible = !0,
            this.grp_default.validateNow();
            var r = 69;
            this.grp_default.height > 69 && (r = this.grp_default.height),
            i += r;
            i += 20,
            this.lab_ycTitle.y = i,
            this.lab_ycTitle.text = "无隐藏属性",
            i += this.lab_ycTitle.height,
            i += 35,
            this.height = this.bg.height = i
        },
        i.prototype._setUniverSalStyle = function() {
            var t, e = this._vo.id,
            i = this.grp_default.y,
            s = CountermarkXMLInfo.getBaseAttriValue(e),
            o = CountermarkXMLInfo.getMaxAttriValue(e);
            for (t = 0; t < s.length; t++) {
                var n = this._compDefaultTxtPool.pop();
                this.grp_default.addChild(n);
                var r = "+" + s[t] + "/" + o[t];
                n.setData({
                    attr: this.TYPE_ARR[t],
                    value: r
                })
            }
            this.grp_default.visible = !0,
            this.grp_default.validateNow();
            var a = 69;
            this.grp_default.height > 69 && (a = this.grp_default.height),
            i += a;
            i += 20;
            var _ = CountermarkXMLInfo.getExtraAttriValue(e);
            if (_ && _.length > 0) {
                this.lab_ycTitle.y = i,
                this.lab_ycTitle.text = "隐藏属性",
                i += this.lab_ycTitle.height,
                i += 10,
                this.grp_yc.y = i;
                for (var t = 0; 6 > t; t++) {
                    var n = this._compExtraTxtPool.pop();
                    this.grp_yc.addChild(n),
                    n.setData({
                        attr: this.TYPE_ARR[t],
                        value: "+" + _[t]
                    })
                }
                this.grp_yc.visible = !0,
                this.grp_yc.validateNow();
                var p = 69;
                this.grp_yc.height > 69 && (p = this.grp_yc.height),
                i += p
            } else this.lab_ycTitle.y = i,
            this.lab_ycTitle.text = "无隐藏属性",
            i += this.lab_ycTitle.height;
            i += 35,
            this.height = this.bg.height = i
        },
        i.prototype._resetUi = function() {
            for (this.grp_default.visible = !1, this.grp_yc.visible = !1; this.grp_default.numChildren > 0;) {
                var e = this.grp_default.removeChildAt(0);
                e instanceof t.CompCounterMarkDefaultTxt ? this._compDefaultTxtPool.push(e) : e instanceof t.CompCounterMarkExtraTxt && this._compExtraTxtPool.push(e)
            }
            for (; this.grp_yc.numChildren > 0;) {
                var e = this.grp_yc.removeChildAt(0);
                e instanceof t.CompCounterMarkDefaultTxt ? this._compDefaultTxtPool.push(e) : e instanceof t.CompCounterMarkExtraTxt && this._compExtraTxtPool.push(e)
            }
        },
        i
    } (t.BaseTips);
    t.CounterMark = e,
    __reflect(e.prototype, "tips.CounterMark")
} (tips || (tips = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
tips; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = NormalTipsSkin,
            e
        }
        return __extends(e, t),
        e.prototype._parseData = function() {
            this._mydata = this._data
        },
        e.prototype._updateLayout = function() {
            var t = this._mydata;
            this.lab_des.width = t.width || 200,
            this.lab_des.lineSpacing = t.lineSpacing || 5,
            this.lab_des.textColor = t.color || 16777215,
            this.lab_des.size = t.size || 14,
            t.html ? this.lab_des.textFlow = t.html: this.lab_des.text = t.str || this._data,
            this.lab_des.validateNow();
            var e = 15;
            e += this.lab_des.textHeight,
            this.img_bg.height = e + 15,
            this.img_bg.width = this.lab_des.x + this.lab_des.textWidth + 15,
            this.width = this.img_bg.width,
            this.height = this.img_bg.height
        },
        e
    } (t.BaseTips);
    t.NormalTips = e,
    __reflect(e.prototype, "tips.NormalTips")
} (tips || (tips = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/components/CounterMarkTipsDefaultAttrTxtSkin.exml"] = window.CounterMarkTipsDefaultAttrTxtSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_attr", "txt_value"],
        this.height = 15,
        this.width = 111,
        this.elementsContent = [this.txt_attr_i(), this.txt_value_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txt_attr_i = function() {
        var t = new eui.Label;
        return this.txt_attr = t,
        t.size = 16,
        t.text = "攻击:",
        t.textColor = 4175861,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_value_i = function() {
        var t = new eui.Label;
        return this.txt_value = t,
        t.size = 16,
        t.text = "+000/000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 70,
        t.x = 41,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/components/CounterMarkTipsExtraAttrTxtSkin.exml"] = window.CounterMarkTipsExtraAttrTxtSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_attr", "txt_value"],
        this.height = 15,
        this.width = 111,
        this.elementsContent = [this.txt_attr_i(), this.txt_value_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txt_attr_i = function() {
        var t = new eui.Label;
        return this.txt_attr = t,
        t.size = 16,
        t.text = "攻击:",
        t.textColor = 4175861,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_value_i = function() {
        var t = new eui.Label;
        return this.txt_value = t,
        t.size = 16,
        t.text = "+000",
        t.textAlign = "right",
        t.textColor = 16773477,
        t.width = 70,
        t.x = 41,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/CounterMarkSkin.exml"] = window.CounterMarkSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "line", "lab_name", "lab_type", "grp_default", "lab_ycTitle", "grp_yc"],
        this.height = 310,
        this.width = 300,
        this.elementsContent = [this.bg_i(), this.line_i(), this.lab_name_i(), this.lab_type_i(), this.grp_default_i(), this.lab_ycTitle_i(), this.grp_yc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 310,
        t.source = "common_bg_tips_s9_png",
        t.width = 300,
        t.x = 0,
        t.y = 0,
        t
    },
    i.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.height = 1,
        t.source = "common_tips_pop_clothes_line_1_png",
        t.width = 279,
        t.x = 14,
        t.y = 46,
        t
    },
    i.lab_name_i = function() {
        var t = new eui.Label;
        return this.lab_name = t,
        t.size = 18,
        t.text = "刻印名字",
        t.textAlign = "center",
        t.textColor = 16773477,
        t.width = 300,
        t.x = 0,
        t.y = 17,
        t
    },
    i.lab_type_i = function() {
        var t = new eui.Label;
        return this.lab_type = t,
        t.size = 16,
        t.text = "全能刻印",
        t.textAlign = "center",
        t.textColor = 3143013,
        t.width = 300,
        t.x = 0,
        t.y = 65,
        t
    },
    i.grp_default_i = function() {
        var t = new eui.Group;
        return this.grp_default = t,
        t.width = 244,
        t.x = 28,
        t.y = 90,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 20,
        t.orientation = "rows",
        t.requestedColumnCount = 2,
        t.verticalGap = 15,
        t
    },
    i.lab_ycTitle_i = function() {
        var t = new eui.Label;
        return this.lab_ycTitle = t,
        t.size = 16,
        t.text = "隐藏属性",
        t.textAlign = "center",
        t.textColor = 3143013,
        t.width = 300,
        t.x = 0,
        t.y = 179,
        t
    },
    i.grp_yc_i = function() {
        var t = new eui.Group;
        return this.grp_yc = t,
        t.width = 244,
        t.x = 28,
        t.y = 205,
        t.layout = this._TileLayout2_i(),
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 20,
        t.orientation = "rows",
        t.requestedColumnCount = 2,
        t.verticalGap = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NormalTipsSkin.exml"] = window.NormalTipsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_bg", "lab_des"],
        this.height = 300,
        this.width = 400,
        this.elementsContent = [this.img_bg_i(), this.lab_des_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_bg_i = function() {
        var t = new eui.Image;
        return this.img_bg = t,
        t.height = 300,
        t.scale9Grid = new egret.Rectangle(9, 7, 14, 13),
        t.source = "tips_bg_png",
        t.width = 400,
        t.x = 0,
        t.y = 0,
        t
    },
    i.lab_des_i = function() {
        var t = new eui.Label;
        return this.lab_des = t,
        t.fontFamily = "黑体",
        t.lineSpacing = 5,
        t.size = 14,
        t.text = "tips",
        t.textAlign = "left",
        t.width = 200,
        t.x = 15,
        t.y = 15,
        t
    },
    e
} (eui.Skin);