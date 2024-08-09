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
            t.currTime = 0,
            t.skinName = nationalDaySignIn2023Skin,
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            this.currTime = SystemTimerManager.sysBJDate.getTime(),
            this._list.itemRenderer = t.NationalDaySignInDayItem,
            KTool.getMultiValue([121882],
            function(t) {
                n.currProgress = t[0],
                KTool.getBitSet([1000629],
                function(t) {
                    n.hasSignToday = !!t[0];
                    for (var e = [], i = 0; 6 > i; ++i) e.push([n.currProgress, n.hasSignToday]);
                    n.listData = new eui.ArrayCollection(e),
                    n._list.dataProvider = n.listData,
                    n.updateState5()
                })
            }),
            EventManager.addEventListener(t.NationalDaySignIn2023Event.HAS_SIGN_TODAY,
            function() {
                var t = +GsapUtils.clamp(n.currProgress, 5, n.currProgress + 1);
                KTool.getMultiValue([121882],
                function(e) {
                    n.currProgress = e[0],
                    KTool.getBitSet([1000629],
                    function(e) {
                        if (n.hasSignToday = !!e[0], 4 == n.currProgress) n.updateState5();
                        else {
                            for (var i = [], a = 0; 6 > a; ++a) i.push([n.currProgress, n.hasSignToday]);
                            n.listData.replaceAll(i),
                            n.listData.refresh();
                            var o = n._list.getChildAt(t);
                            o.updateState([n.currProgress, n.hasSignToday])
                        }
                    })
                })
            },
            this),
            this.addEventDay7()
        },
        n.prototype.addEventDay7 = function() {
            var e = this;
            ImageButtonUtil.add(this.btnGet_5,
            function() {
                SocketConnection.sendByQueue(41388, [76, 5],
                function() {
                    e.currentState = "hasGot",
                    EventManager.dispatchEventWith(t.NationalDaySignIn2023Event.HAS_SIGN_TODAY),
                    StatLogger.log("20240809版本系统功能", "20240809七夕签到（K13回归特典）", "领取第5天签到奖励")
                })
            },
            this),
            ImageButtonUtil.add(this.btnDefault_5,
            function() {
                9 == e.currMonth && 28 == e.currDate ? BubblerManager.getInstance().showText("礼物9月29日开始放送，<font color='#ff0000'>请明日再来</font>", !0) : BubblerManager.getInstance().showText("登陆天数未满足哦！")
            },
            this),
            ImageButtonUtil.add(this.hasGot_5,
            function() {
                BubblerManager.getInstance().showText("已领取奖励")
            },
            this),
            ImageButtonUtil.add(this.btnTomorrow_5,
            function() {
                BubblerManager.getInstance().showText("明日登录即可领取奖励！")
            },
            this),
            ImageButtonUtil.add(this.imgSkin,
            function() {
                AwardManager.ShowTmpPetSkinDiaolg(642)
            },
            this)
        },
        n.prototype.updateState5 = function() {
            4 == this.currProgress ? this.currTime == t.NationalDaySignIn2023Const.END_TIME && this.hasSignToday ? this.currentState = "default": this.currentState = this.hasSignToday ? "tomorrow": "canGet": this.currProgress > 4 ? this.currentState = "hasGot": this.currentState = "default"
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
        return t.TXT_ITEM_NUMS = ["x1", "x1", "x2", "x1", "x3", "x2", "x5", "x1", "x5", "x2", "x3", "x3"],
        t.DAY_ITEM_POS_X = [0, 0, 0, 0, 136, 0],
        t.DAY_ITEM_POS_Y = [44, 5, 49, 0, -15, 20],
        t.START_TIME = new Date("2024/8/9").getTime(),
        t.END_TIME = new Date("2024/8/16").getTime(),
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
                SocketConnection.sendByQueue(41388, [76, n.itemIndex + 1],
                function() {
                    n.currentState = "hasGot",
                    EventManager.dispatchEventWith(t.NationalDaySignIn2023Event.HAS_SIGN_TODAY),
                    StatLogger.log("20240809版本系统功能", "20240809七夕签到（K13回归特典）", "领取第" + (n.itemIndex + 1) + "天签到奖励")
                })
            },
            this),
            ImageButtonUtil.add(this.btnDefault,
            function() {
                BubblerManager.getInstance().showText("登陆天数未满足哦！")
            },
            this),
            ImageButtonUtil.add(this.hasGot,
            function() {
                BubblerManager.getInstance().showText("已领取奖励")
            },
            this),
            ImageButtonUtil.add(this.btnTomorrow,
            function() {
                BubblerManager.getInstance().showText("明日登录即可领取奖励！")
            },
            this)
        },
        n.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.grp.x = t.NationalDaySignIn2023Const.DAY_ITEM_POS_X[this.itemIndex],
            this.grp.y = t.NationalDaySignIn2023Const.DAY_ITEM_POS_Y[this.itemIndex],
            this.item1.iconItem.source = ClientConfig.getItemIcon(2600024),
            this.item1.itemNum.text = t.NationalDaySignIn2023Const.TXT_ITEM_NUMS[2 * this.itemIndex],
            this.item1.initBtnIcon(2600024),
            this.item2.iconItem.source = ClientConfig.getItemIcon(1400152),
            this.item2.itemNum.text = t.NationalDaySignIn2023Const.TXT_ITEM_NUMS[2 * this.itemIndex + 1],
            this.item2.initBtnIcon(1400152),
            this.itemIndex >= 4 && this.itemIndex++,
            this.day.source = "national_day_sign_in2023_day" + (this.itemIndex + 1) + "_png",
            this.updateState(this.data)
        },
        n.prototype.updateState = function(e) {
            if (e[0] == this.itemIndex) {
                var n = SystemTimerManager.sysBJDate.getTime();
                n == t.NationalDaySignIn2023Const.END_TIME && e[1] ? this.currentState = "default": this.currentState = e[1] ? "tomorrow": "canGet"
            } else e[0] > this.itemIndex ? this.currentState = "hasGot": this.currentState = "default"
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
        this.skinParts = ["bg", "btnClose", "_list", "btnDefault_5", "btnGet_5", "hasGot_5", "btnTomorrow_5", "dayBg_5", "day5", "imgSkin", "day_5"],
        this.height = 618,
        this.width = 1055,
        this.elementsContent = [this.bg_i(), this.btnClose_i(), this._Scroller1_i(), this.day_5_i()],
        this.states = [new eui.State("default", [new eui.SetProperty("_Scroller1", "height", 400), new eui.SetProperty("btnGet_5", "visible", !1), new eui.SetProperty("hasGot_5", "visible", !1), new eui.SetProperty("btnTomorrow_5", "visible", !1)]), new eui.State("canGet", [new eui.SetProperty("btnDefault_5", "visible", !1), new eui.SetProperty("btnGet_5", "visible", !0), new eui.SetProperty("hasGot_5", "visible", !1), new eui.SetProperty("btnTomorrow_5", "visible", !1)]), new eui.State("hasGot", [new eui.SetProperty("btnDefault_5", "visible", !1), new eui.SetProperty("btnGet_5", "visible", !1), new eui.SetProperty("hasGot_5", "visible", !0), new eui.SetProperty("btnTomorrow_5", "visible", !1)]), new eui.State("tomorrow", [new eui.SetProperty("btnDefault_5", "visible", !1), new eui.SetProperty("btnGet_5", "visible", !1), new eui.SetProperty("hasGot_5", "visible", !1)])]
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
        t.x = 928,
        t.y = 40,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return this._Scroller1 = t,
        t.height = 400,
        t.width = 760,
        t.x = 52,
        t.y = 206,
        t.viewport = this._list_i(),
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.visible = !0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -8,
        t
    },
    n.day_5_i = function() {
        var t = new eui.Group;
        return this.day_5 = t,
        t.visible = !0,
        t.x = 455,
        t.y = 154,
        t.elementsContent = [this.btnDefault_5_i(), this.btnGet_5_i(), this.hasGot_5_i(), this.btnTomorrow_5_i(), this.dayBg_5_i(), this.day5_i(), this.imgSkin_i()],
        t
    },
    n.btnDefault_5_i = function() {
        var t = new eui.Image;
        return this.btnDefault_5 = t,
        t.source = "national_day_sign_in2023_default_7_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnGet_5_i = function() {
        var t = new eui.Image;
        return this.btnGet_5 = t,
        t.source = "national_day_sign_in2023_btnget_7_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.hasGot_5_i = function() {
        var t = new eui.Image;
        return this.hasGot_5 = t,
        t.source = "national_day_sign_in2023_hasgot_7_png",
        t.visible = !0,
        t.x = 0,
        t.y = 2,
        t
    },
    n.btnTomorrow_5_i = function() {
        var t = new eui.Image;
        return this.btnTomorrow_5 = t,
        t.height = 420,
        t.source = "national_day_sign_in2023_tomorrow_png",
        t.visible = !0,
        t.width = 144,
        t.x = 3.5,
        t.y = -2,
        t
    },
    n.dayBg_5_i = function() {
        var t = new eui.Image;
        return this.dayBg_5 = t,
        t.height = 34,
        t.source = "national_day_sign_in2023_daybg_png",
        t.touchEnabled = !1,
        t.width = 96,
        t.x = 26,
        t.y = 53,
        t
    },
    n.day5_i = function() {
        var t = new eui.Image;
        return this.day5 = t,
        t.source = "national_day_sign_in2023_day5_png",
        t.touchEnabled = !1,
        t.x = 52,
        t.y = 39,
        t
    },
    n.imgSkin_i = function() {
        var t = new eui.Image;
        return this.imgSkin = t,
        t.source = "national_day_sign_in2023_skin_png",
        t.y = 80,
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
        t.height = 66,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 66,
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
        this.skinParts = ["btnDefault", "hasGot", "btnGet", "btnTomorrow", "dayBg", "day", "itemYinzi", "item1", "item2", "grp"],
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
        t.elementsContent = [this.btnDefault_i(), this.hasGot_i(), this.btnGet_i(), this.btnTomorrow_i(), this.dayBg_i(), this.day_i(), this.itemYinzi_i(), this.item1_i(), this.item2_i()],
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
    n.dayBg_i = function() {
        var t = new eui.Image;
        return this.dayBg = t,
        t.height = 30,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_sign_in2023_daybg_png",
        t.touchEnabled = !1,
        t.width = 79,
        t.x = 16,
        t.y = 55,
        t
    },
    n.day_i = function() {
        var t = new eui.Image;
        return this.day = t,
        t.horizontalCenter = 1,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "national_day_sign_in2023_day1_png",
        t.touchEnabled = !1,
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
        t.visible = !1,
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