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
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
nationalDaySignIn2023; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.currProgress = 0,
            t.hasSignToday = !1,
            t.currMonth = 0,
            t.currDate = 0,
            t.skinName = nationalDaySignIn2023Skin,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this);
            var i = SystemTimerManager.sysBJDate,
            a = i.getMonth() + 1,
            o = i.getDate();
            this.currMonth = a,
            this.currDate = o,
            this._list.itemRenderer = t.NationalDaySignInDayItem,
            KTool.getMultiValue([125071],
            function(t) {
                n.currProgress = t[0],
                KTool.getBitSet([1000625],
                function(t) {
                    n.hasSignToday = !!t[0];
                    for (var e = [], i = 0; 6 > i; ++i) e.push([n.currProgress, n.hasSignToday, o, a]);
                    n._list.dataProvider = new eui.ArrayCollection(e),
                    n.updateState7()
                })
            }),
            EventManager.addEventListener(t.NationalDaySignIn2023Event.HAS_SIGN_TODAY,
            function() {
                var t = +GsapUtils.clamp(n.currProgress, 5, n.currProgress + 1);
                KTool.getMultiValue([125071],
                function(e) {
                    n.currProgress = e[0],
                    KTool.getBitSet([1000625],
                    function(e) {
                        if (n.hasSignToday = !!e[0], 10 == a && 4 == o && 6 == n.currProgress) n.updateState7();
                        else {
                            for (var i = [], r = 0; 6 > r; ++r) i.push([n.currProgress, n.hasSignToday, o, a]);
                            n._list.dataProvider = new eui.ArrayCollection(i);
                            var s = n._list.getChildAt(t);
                            s.updateState([n.currProgress, n.hasSignToday, o, a])
                        }
                    })
                })
            },
            this),
            this.addEventDay7()
        },
        n.prototype.addEventDay7 = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGet_7,
            function() {
                SocketConnection.sendByQueue(41950, [33, 1],
                function() {
                    t.currentState = "hasGot",
                    StatLogger.log("20230928版本系统功能", "国庆签到", "点击“可领取”状态的奖励7面板")
                })
            },
            this),
            ImageButtonUtil.add(this.btnDefault_7,
            function() {
                9 == t.currMonth && 28 == t.currDate ? BubblerManager.getInstance().showText("礼物9月29日开始放送，<font color='#ff0000'>请明日再来</font>", !0) : BubblerManager.getInstance().showText("登陆天数未满足哦！")
            },
            this),
            ImageButtonUtil.add(this.hasGot_7,
            function() {
                BubblerManager.getInstance().showText("已领取奖励")
            },
            this),
            ImageButtonUtil.add(this.btnTomorrow_7,
            function() {
                BubblerManager.getInstance().showText("明日登录即可领取奖励！"),
                StatLogger.log("20230928版本系统功能", "国庆签到", "点击任意“明日可领”状态的奖励面板")
            },
            this),
            ImageButtonUtil.add(this.yinziIcon,
            function() {
                var t = {};
                t.id = 2400129,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            ImageButtonUtil.add(this.avatarFrameIcon,
            function() {
                BubblerManager.getInstance().showText("可获得头像框“星璨K13”")
            },
            this)
        },
        n.prototype.updateState7 = function() {
            28 == this.currDate ? this.currentState = "default": 6 == this.currProgress ? 10 == this.currMonth && 5 == this.currDate && this.hasSignToday ? this.currentState = "default": this.currentState = this.hasSignToday ? "tomorrow": "canGet": this.currProgress > 6 ? this.currentState = "hasGot": this.currentState = "default"
        },
        n
    } (BaseModule);
    t.NationalDaySignIn2023 = e,
    __reflect(e.prototype, "nationalDaySignIn2023.NationalDaySignIn2023")
} (nationalDaySignIn2023 || (nationalDaySignIn2023 = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
nationalDaySignIn2023; !
function(t) {
    var e = function() {
        function t() {}
        return t.TXT_ITEM_NUMS = ["x60", "x3", "x80", "x5", "x100", "x6"],
        t.DAY_ITEM_POS_Y = [44, 5, 49, 0, 44, 0],
        t
    } ();
    t.NationalDaySignIn2023Const = e,
    __reflect(e.prototype, "nationalDaySignIn2023.NationalDaySignIn2023Const")
} (nationalDaySignIn2023 || (nationalDaySignIn2023 = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
nationalDaySignIn2023; !
function(t) {
    var e = function() {
        function t() {}
        return t.HAS_SIGN_TODAY = "NationalDaySignIn2023HasSignToday",
        t
    } ();
    t.NationalDaySignIn2023Event = e,
    __reflect(e.prototype, "nationalDaySignIn2023.NationalDaySignIn2023Event")
} (nationalDaySignIn2023 || (nationalDaySignIn2023 = {}));
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
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
nationalDaySignIn2023; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = nationalDaySignInDayItem,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(41950, [33, 1],
                function() {
                    n.currentState = "hasGot",
                    EventManager.dispatchEventWith(t.NationalDaySignIn2023Event.HAS_SIGN_TODAY),
                    StatLogger.log("20230928版本系统功能", "国庆签到", "点击“可领取”状态的奖励" + (n.itemIndex + 1) + "面板")
                })
            },
            this),
            ImageButtonUtil.add(this.btnDefault,
            function() {
                9 == n.data[3] && 28 == n.data[2] ? BubblerManager.getInstance().showText("礼物9月29日开始放送，<font color='#ff0000'>请明日再来</font>", !0) : BubblerManager.getInstance().showText("登陆天数未满足哦！")
            },
            this),
            ImageButtonUtil.add(this.hasGot,
            function() {
                BubblerManager.getInstance().showText("已领取奖励")
            },
            this),
            ImageButtonUtil.add(this.btnTomorrow,
            function() {
                BubblerManager.getInstance().showText("明日登录即可领取奖励！"),
                StatLogger.log("20230928版本系统功能", "国庆签到", "点击任意“明日可领”状态的奖励面板")
            },
            this)
        },
        n.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.day.source = "national_day_sign_in2023_day" + (this.itemIndex + 1) + "_png",
            this.grp.y = t.NationalDaySignIn2023Const.DAY_ITEM_POS_Y[this.itemIndex];
            var n = (this.itemIndex + 1) % 2 == 1;
            this.itemYinzi.visible = n,
            this.item1.visible = !n,
            this.item2.visible = !n,
            n ? (this.itemYinzi.iconItem.source = "national_day_sign_in2023_yinziicon_png", this.itemYinzi.itemNum.text = t.NationalDaySignIn2023Const.TXT_ITEM_NUMS[this.itemIndex], this.itemYinzi.initBtnIcon(2400129)) : (this.item1.itemNum.text = "x1", this.item1.initBtnIcon(1400152), this.item2.iconItem.source = "national_day_sign_in2023_item3_png", this.item2.itemNum.text = t.NationalDaySignIn2023Const.TXT_ITEM_NUMS[this.itemIndex], this.item2.initBtnIcon(1400153)),
            this.updateState(this.data)
        },
        n.prototype.updateState = function(t) {
            28 == t[2] ? this.currentState = "default": t[0] == this.itemIndex ? 10 == t[3] && 5 == t[2] && t[1] ? this.currentState = "default": this.currentState = t[1] ? "tomorrow": "canGet": t[0] > this.itemIndex ? this.currentState = "hasGot": this.currentState = "default"
        },
        n
    } (BaseItemRenderer);
    t.NationalDaySignInDayItem = e,
    __reflect(e.prototype, "nationalDaySignIn2023.NationalDaySignInDayItem");
    var n = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = nationalDaySignInRewardItem,
            e.cacheAsBitmap = !0,
            e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            e
        }
        return __extends(e, t),
        e.prototype.initBtnIcon = function(t) {
            ImageButtonUtil.remove(this.iconItem),
            ImageButtonUtil.add(this.iconItem,
            function() {
                var e = {};
                e.id = t,
                tipsPop.TipsPop.openItemPop(e)
            },
            this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.Component);
    t.NationalDaySignInRewardItem = n,
    __reflect(n.prototype, "nationalDaySignIn2023.NationalDaySignInRewardItem")
} (nationalDaySignIn2023 || (nationalDaySignIn2023 = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/nationalDaySignIn2023Skin.exml"] = window.nationalDaySignIn2023Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnClose", "_list", "btnDefault_7", "btnGet_7", "hasGot_7", "btnTomorrow_7", "dayBg_7", "day7", "avatarFrameIcon", "yinziIcon", "day_7"],
        this.currentState = "default",
        this.height = 610,
        this.width = 963,
        this.elementsContent = [this.bg_i(), this.btnClose_i(), this._Scroller1_i(), this.day_7_i()],
        this.states = [new eui.State("default", [new eui.SetProperty("_Scroller1", "height", 400), new eui.SetProperty("btnGet_7", "visible", !1), new eui.SetProperty("hasGot_7", "visible", !1), new eui.SetProperty("btnTomorrow_7", "visible", !1)]), new eui.State("canGet", [new eui.SetProperty("btnDefault_7", "visible", !1), new eui.SetProperty("btnGet_7", "visible", !0), new eui.SetProperty("hasGot_7", "visible", !1), new eui.SetProperty("btnTomorrow_7", "visible", !1)]), new eui.State("hasGot", [new eui.SetProperty("btnDefault_7", "visible", !1), new eui.SetProperty("btnGet_7", "visible", !1), new eui.SetProperty("hasGot_7", "visible", !0), new eui.SetProperty("btnTomorrow_7", "visible", !1)]), new eui.State("tomorrow", [new eui.SetProperty("btnDefault_7", "visible", !1), new eui.SetProperty("btnGet_7", "visible", !1), new eui.SetProperty("hasGot_7", "visible", !1)])]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "national_day_sign_in2023_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "national_day_sign_in2023_btnclose_png",
        t.x = 926,
        t.y = 37,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return this._Scroller1 = t,
        t.height = 400,
        t.width = 630,
        t.x = 36,
        t.y = 186,
        t.viewport = this._list_i(),
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -5,
        t
    },
    n.day_7_i = function() {
        var t = new eui.Group;
        return this.day_7 = t,
        t.x = 664,
        t.y = 152,
        t.elementsContent = [this.btnDefault_7_i(), this.btnGet_7_i(), this.hasGot_7_i(), this.btnTomorrow_7_i(), this.dayBg_7_i(), this.day7_i(), this._Image1_i(), this._Image2_i(), this.avatarFrameIcon_i(), this.yinziIcon_i(), this._Label1_i()],
        t
    },
    n.btnDefault_7_i = function() {
        var t = new eui.Image;
        return this.btnDefault_7 = t,
        t.source = "national_day_sign_in2023_default_7_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnGet_7_i = function() {
        var t = new eui.Image;
        return this.btnGet_7 = t,
        t.source = "national_day_sign_in2023_btnget_7_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.hasGot_7_i = function() {
        var t = new eui.Image;
        return this.hasGot_7 = t,
        t.source = "national_day_sign_in2023_hasgot_7_png",
        t.visible = !0,
        t.x = 0,
        t.y = 2,
        t
    },
    n.btnTomorrow_7_i = function() {
        var t = new eui.Image;
        return this.btnTomorrow_7 = t,
        t.height = 420,
        t.source = "national_day_sign_in2023_tomorrow_png",
        t.visible = !0,
        t.width = 144,
        t.x = 3.5,
        t.y = -2,
        t
    },
    n.dayBg_7_i = function() {
        var t = new eui.Image;
        return this.dayBg_7 = t,
        t.height = 34,
        t.source = "national_day_sign_in2023_daybg_png",
        t.width = 96,
        t.x = 24,
        t.y = 53,
        t
    },
    n.day7_i = function() {
        var t = new eui.Image;
        return this.day7 = t,
        t.source = "national_day_sign_in2023_day7_png",
        t.x = 51,
        t.y = 39,
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "national_day_sign_in2023_iconbg_png",
        t.width = 100,
        t.x = 22,
        t.y = 111,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "national_day_sign_in2023_iconbg_png",
        t.width = 100,
        t.x = 22,
        t.y = 231,
        t
    },
    n.avatarFrameIcon_i = function() {
        var t = new eui.Image;
        return this.avatarFrameIcon = t,
        t.source = "national_day_sign_in2023_avatarframe_png",
        t.x = 30,
        t.y = 239,
        t
    },
    n.yinziIcon_i = function() {
        var t = new eui.Image;
        return this.yinziIcon = t,
        t.height = 92,
        t.source = "national_day_sign_in2023_yinziicon_png",
        t.width = 92,
        t.x = 26,
        t.y = 116,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 2702752,
        t.text = "x140",
        t.textColor = 16776165,
        t.x = 74,
        t.y = 187,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/nationalDaySignInRewardItem.exml"] = window.nationalDaySignInRewardItem = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["iconBg", "iconItem", "itemNum"],
        this.elementsContent = [this.iconBg_i(), this.iconItem_i(), this.itemNum_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.iconBg_i = function() {
        var t = new eui.Image;
        return this.iconBg = t,
        t.horizontalCenter = 0,
        t.source = "national_day_sign_in2023_iconbg_png",
        t.verticalCenter = 0,
        t
    },
    n.iconItem_i = function() {
        var t = new eui.Image;
        return this.iconItem = t,
        t.horizontalCenter = 0,
        t.source = "national_day_sign_in2023_item2_png",
        t.verticalCenter = 0,
        t
    },
    n.itemNum_i = function() {
        var t = new eui.Label;
        return this.itemNum = t,
        t.fontFamily = "MFShangHei",
        t.right = 6,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 2702752,
        t.text = "x60",
        t.textAlign = "right",
        t.textColor = 16776165,
        t.verticalCenter = 24,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/nationalDaySignInDayItem.exml"] = window.nationalDaySignInDayItem = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnDefault", "hasGot", "btnGet", "btnTomorrow", "dayBg_7", "day", "itemYinzi", "item1", "item2", "grp"],
        this.elementsContent = [this.grp_i()],
        this.states = [new eui.State("default", [new eui.SetProperty("hasGot", "visible", !1), new eui.SetProperty("btnGet", "visible", !1), new eui.SetProperty("btnTomorrow", "visible", !1)]), new eui.State("canGet", [new eui.SetProperty("btnDefault", "visible", !1), new eui.SetProperty("hasGot", "visible", !1), new eui.SetProperty("btnTomorrow", "visible", !1)]), new eui.State("hasGot", [new eui.SetProperty("btnDefault", "visible", !1), new eui.SetProperty("btnGet", "visible", !1), new eui.SetProperty("btnTomorrow", "visible", !1)]), new eui.State("tomorrow", [new eui.SetProperty("btnDefault", "visible", !1), new eui.SetProperty("hasGot", "visible", !1), new eui.SetProperty("btnGet", "visible", !1)])]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.grp_i = function() {
        var t = new eui.Group;
        return this.grp = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.btnDefault_i(), this.hasGot_i(), this.btnGet_i(), this.btnTomorrow_i(), this.dayBg_7_i(), this.day_i(), this.itemYinzi_i(), this.item1_i(), this.item2_i()],
        t
    },
    n.btnDefault_i = function() {
        var t = new eui.Image;
        return this.btnDefault = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_sign_in2023_default_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.hasGot_i = function() {
        var t = new eui.Image;
        return this.hasGot = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_sign_in2023_hasgot_png",
        t.visible = !0,
        t.x = 0,
        t.y = 4.999999999999972,
        t
    },
    n.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_sign_in2023_btnget_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnTomorrow_i = function() {
        var t = new eui.Image;
        return this.btnTomorrow = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_sign_in2023_tomorrow_png",
        t.visible = !0,
        t.x = 3.5,
        t.y = 0,
        t
    },
    n.dayBg_7_i = function() {
        var t = new eui.Image;
        return this.dayBg_7 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_sign_in2023_daybg_png",
        t.x = 12.999999999999972,
        t.y = 55,
        t
    },
    n.day_i = function() {
        var t = new eui.Image;
        return this.day = t,
        t.horizontalCenter = -2,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_sign_in2023_day1_png",
        t.y = 46,
        t
    },
    n.itemYinzi_i = function() {
        var t = new nationalDaySignIn2023.NationalDaySignInRewardItem;
        return this.itemYinzi = t,
        t.horizontalCenter = -2,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "nationalDaySignInRewardItem",
        t.verticalCenter = 2,
        t
    },
    n.item1_i = function() {
        var t = new nationalDaySignIn2023.NationalDaySignInRewardItem;
        return this.item1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "nationalDaySignInRewardItem",
        t.visible = !0,
        t.x = 17,
        t.y = 111,
        t
    },
    n.item2_i = function() {
        var t = new nationalDaySignIn2023.NationalDaySignInRewardItem;
        return this.item2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "nationalDaySignInRewardItem",
        t.visible = !0,
        t.x = 17,
        t.y = 198,
        t
    },
    e
} (eui.Skin);