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
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    i.prototype = e.prototype,
    t.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(o, r) {
        function h(t) {
            try {
                s(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                s(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(h, a)
        }
        s((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (o = 1, r && (h = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(h = h.call(r, i[1])).done) return h;
            switch (r = 0, h && (i = [0, h.value]), i[0]) {
            case 0:
            case 1:
                h = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (h = s.trys, !(h = h.length > 0 && h[h.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!h || i[1] > h[0] && i[1] < h[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < h[1]) {
                    s.label = h[1],
                    h = i;
                    break
                }
                if (h && s.label < h[2]) {
                    s.label = h[2],
                    s.ops.push(i);
                    break
                }
                h[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = e.call(t, s)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = h = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, h, a, s = {
        label: 0,
        sent: function() {
            if (1 & h[0]) throw h[1];
            return h[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
achieveNotice; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.curShowIdx = 0,
            i.interval = 8,
            i.skinName = "AchieveNoticeNewSkin",
            i.show(),
            console.log(t),
            i.param = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.bg_mask = new eui.Rect(10, 10),
            this.bg_mask.alpha = .6,
            this.bg_mask.width = LevelManager.stage.stageWidth,
            this.bg_mask.height = LevelManager.stage.stageHeight,
            this.addChildAt(this.bg_mask, 0),
            LevelManager.topLevel.addChild(this),
            this.closeTip.visible = !1,
            this.closeTip.touchEnabled = !1;
            var n = new eui.Rect(10, 10);
            n.alpha = 0,
            n.width = this._scrol.width,
            n.height = this._scrol.height,
            n.x = this._scrol.x,
            n.y = this._scrol.y,
            this.addChildAt(n, 1),
            this._arrayCollection = new eui.ArrayCollection,
            this._list.itemRenderer = t.AchieveNoticeItem,
            this._list.dataProvider = this._arrayCollection,
            this._anim = SpineUtil.createAnimate("chai"),
            this._anim.touchEnabled = this._anim.touchChildren = !1,
            this.addChildAt(this._anim, 1),
            this._anim.x = LevelManager.stage.stageWidth / 2,
            this._anim.y = LevelManager.stage.stageHeight / 2,
            this.playAni("achivement_a", 1),
            egret.setTimeout(function() {
                i.bg_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onClose, i),
                i.playAni("achivement_b", 0),
                i.param.length > 1 ? (i._timer = new egret.Timer(50, 0), i._timer.addEventListener(egret.TimerEvent.TIMER, i.onTimer, i), i._scrol.touchEnabled = i._scrol.touchChildren = !1, i._timer.start()) : (i.onTimer(null), i.onShowEnd())
            },
            this, 1e3)
        },
        i.prototype.onShowEnd = function() {
            this.closeTip.visible = !0
        },
        i.prototype.onTimer = function(t) {
            return this.interval > 0 && this.param.length > 1 && this._arrayCollection.length > 0 ? (this.interval -= this.param.length > 3 ? 1 : 2, void(this._arrayCollection.length > 3 && (this._list.scrollV = this._list.scrollV + .2 * (this._list.contentHeight - this._list.height - this._list.scrollV)))) : this.curShowIdx == this.param.length ? (this._scrol.touchEnabled = this._scrol.touchChildren = !0, this._timer.stop(), void this.onShowEnd()) : (this.interval = 8, this._arrayCollection.addItem(this.param[this.curShowIdx]), this.curShowIdx++, void(this._arrayCollection.length > 3 && (this._list.scrollV = this._list.contentHeight - this._list.height)))
        },
        i.prototype.onClose = function() {
            this.bg_mask.visible = !1,
            e.prototype.onClose.call(this)
        },
        i.prototype.playAni = function(t, e) {
            return void 0 === e && (e = -1),
            __awaiter(this, void 0, void 0,
            function() {
                var i = this;
                return __generator(this,
                function(n) {
                    return [2, new Promise(function(n, o) {
                        var r = i._anim.play(t, e);
                        r.waitPlayEnd().then(function() {
                            n()
                        })
                    })]
                })
            })
        },
        i.prototype.destroy = function() {
            this.bg_mask.parent && this.bg_mask.parent.removeChild(this.bg_mask),
            this._timer && (this._timer.stop(), this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this)),
            this.bg_mask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.AchieveNotice = e,
    __reflect(e.prototype, "achieveNotice.AchieveNotice")
} (achieveNotice || (achieveNotice = {}));
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
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    i.prototype = e.prototype,
    t.prototype = new i
},
achieveNotice; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.Type2Str = ["赛尔类", "精灵类", "挑战类", "闯关类", "对抗类", "其他类"],
            e.skinName = "AchieveNoticeItemSkins",
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            this._branchId = this.data.branchId,
            this._ruleId = this.data.ruleId;
            for (var t = AchieveXMLInfo.getBranchById(this._branchId), e = 0; e < t.Rule.length; e++) if (t.Rule[e].ID == this._ruleId) var i = t.Rule[e];
            this.txt_achieveName.text = i.achName ? i.achName: t.Desc,
            this.txt_achieveIntro.text = i.Desc;
            var n = AchieveXMLInfo.getTypeByBranchId(this._branchId);
            this.txt_achieveTag.text = this.Type2Str[n];
            var o = "";
            switch (this._branchId) {
            case 2:
            case 14:
            case 18:
                o = ClientConfig.getAchieveSPTIcon(i.proicon);
                break;
            default:
                o = ClientConfig.getAchieveIcon(i.proicon)
            }
            this.achieve_icon.source = o,
            this.achieve_point.source = ClientConfig.getAchievePointIcon(i.AchievementPoint),
            gsap.fromTo(this, {
                alpha: 0
            },
            {
                alpha: 1,
                duration: .4
            })
        },
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.AchieveNoticeItem = e,
    __reflect(e.prototype, "achieveNotice.AchieveNoticeItem")
} (achieveNotice || (achieveNotice = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    i.prototype = e.prototype,
    t.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/AchieveNoticeNewSkin.exml"] = window.AchieveNoticeNewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["closeTip", "bbg", "_list", "_scrol"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.closeTip_i(), this.bbg_i(), this._scrol_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.closeTip_i = function() {
        var t = new eui.Label;
        return this.closeTip = t,
        t.fontFamily = "MFShangHei",
        t.height = 28.389,
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "点击任意空白位置关闭弹窗",
        t.textAlign = "center",
        t.textColor = 8696819,
        t.touchEnabled = !1,
        t.width = 400,
        t.y = 566.611,
        t
    },
    i.bbg_i = function() {
        var t = new eui.Image;
        return this.bbg = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i._scrol_i = function() {
        var t = new eui.Scroller;
        return this._scrol = t,
        t.height = 315,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.width = 762,
        t.y = 196,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/AchieveNoticeItemSkin.exml"] = window.AchieveNoticeItemSkins = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_achieveName", "txt_achieveIntro", "txt_achieveTag", "achieve_point", "achieve_icon"],
        this.height = 100,
        this.width = 761,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_achieveName_i(), this.txt_achieveIntro_i(), this.txt_achieveTag_i(), this.achieve_point_i(), this.achieve_icon_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "achieve_pop_piece1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "achieve_pop_piece2_png",
        t.x = -1,
        t.y = 0,
        t
    },
    i.txt_achieveName_i = function() {
        var t = new eui.Label;
        return this.txt_achieveName = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "成就名称十二个字十二个字",
        t.textColor = 16772204,
        t.touchEnabled = !1,
        t.width = 400,
        t.x = 135,
        t.y = 23.665,
        t
    },
    i.txt_achieveIntro_i = function() {
        var t = new eui.Label;
        return this.txt_achieveIntro = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "成就描述最多二十个字成就描述最多二十个字",
        t.textColor = 8696819,
        t.touchEnabled = !1,
        t.width = 400,
        t.x = 135,
        t.y = 56.665,
        t
    },
    i.txt_achieveTag_i = function() {
        var t = new eui.Label;
        return this.txt_achieveTag = t,
        t.fontFamily = "MFShangHei",
        t.height = 57,
        t.lineSpacing = 3,
        t.size = 19,
        t.text = "赛尔类",
        t.textAlign = "left",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.width = 20,
        t.wordWrap = !1,
        t.x = 6,
        t.y = 22,
        t
    },
    i.achieve_point_i = function() {
        var t = new eui.Image;
        return this.achieve_point = t,
        t.height = 60,
        t.right = 17,
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 60,
        t
    },
    i.achieve_icon_i = function() {
        var t = new eui.Image;
        return this.achieve_icon = t,
        t.height = 60,
        t.left = 51,
        t.verticalCenter = 0,
        t.width = 60,
        t.y = 25,
        t
    },
    e
} (eui.Skin);