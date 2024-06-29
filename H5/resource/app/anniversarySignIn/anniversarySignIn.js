var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
anniversarySignIn; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.itemInfo = ["2_37_1", "1_1400152_6", "1_1725949_6", "3_31_1", "1_1725947_5", "1_1400153_5", "1_1726012_1", "1_1725947_20", "1_1400153_5", "1_1725949_6", "1_1400152_6", "1_1725947_5", "1_1400153_5", "1_1725948_10", "1_1400153_5", "1_1400152_6", "1_1725948_4", "1_1400153_5", "1_1725949_6", "1_1400153_5", "1_1725948_4"],
            e.skinName = AnniversarySignInSkin,
            e.grpCacheBitMap.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initView()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.onClose()
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(41388, [63, e.curIndex + 1],
                function() {
                    StatLogger.log("运营活动2024", "20240607 周年签到（群星的礼赠）", "领取第" + (e.curIndex + 1) + "天签到奖励"),
                    e.curSignItem.currentState = "hasGot",
                    (3 == e.curSignItem.itemIndex || 6 == e.curSignItem.itemIndex || 13 == e.curSignItem.itemIndex || 7 == e.curSignItem.itemIndex) && e.curSignItem.once(egret.Event.RENDER,
                    function() {
                        e.curSignItem.imgItemBg.source = "anniversary_sign_in_itembg2_png",
                        e.curSignItem.txtNum.textColor = 0
                    },
                    e),
                    e.btnGet.visible = !1,
                    e.curIndex >= 20 ? e.imgDone.visible = !0 : e.imgHasSigned.visible = !0
                })
            },
            this)
        },
        i.prototype.initView = function() {
            var t = this;
            KTool.getMultiValue([121580, 201580],
            function(i) {
                for (var n = [], r = 0; 21 > r; ++r) i[0] == r ? (n.push({
                    state: "today",
                    itemInfo: t.itemInfo[r]
                }), t.curIndex = r) : i[0] > r ? n.push({
                    state: "hasGot",
                    itemInfo: t.itemInfo[r]
                }) : n.push({
                    state: "normal",
                    itemInfo: t.itemInfo[r]
                });
                t.list.itemRenderer = e.AnniversarySignInItem,
                t.list.dataProvider = new eui.ArrayCollection(n),
                t.list.validateNow(),
                t.curSignItem = t.list.getChildAt(t.curIndex),
                t.btnGet.visible = 0 == i[1] && i[0] < 21,
                t.imgHasSigned.visible = 1 == i[1] && i[0] < 21,
                t.imgDone.visible = i[0] >= 21
            })
        },
        i.AnniversarySignIn_SignToday = "AnniversarySignIn_SignToday",
        i
    } (BaseModule);
    e.AnniversarySignIn = t,
    __reflect(t.prototype, "anniversarySignIn.AnniversarySignIn")
} (anniversarySignIn || (anniversarySignIn = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
anniversarySignIn; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = AnniversarySignInItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.imgReward,
            function() {
                1 == e.itemType ? tipsPop.TipsPop.openItemPop({
                    id: e.itemId
                }) : 0 == e.itemIndex ? BubblerManager.getInstance().showText("活动限定头像：西塔伦") : 3 == e.itemIndex && BubblerManager.getInstance().showText("活动限定头像框：15周年纪念")
            },
            this)
        },
        t.prototype.dataChanged = function() {
            var t = this;
            e.prototype.dataChanged.call(this),
            this.currentState = this.data.state,
            7 <= this.itemIndex && this.itemIndex <= 13 && (this.grpAll.x += 33),
            "today" == this.currentState || 3 != this.itemIndex && 6 != this.itemIndex && 13 != this.itemIndex && 7 != this.itemIndex || this.once(egret.Event.RENDER,
            function() {
                t.imgItemBg.source = "anniversary_sign_in_itembg2_png",
                1 == t.itemNum ? t.txtNum.visible = !1 : t.txtNum.textColor = 0
            },
            this),
            this.parseItemInfo()
        },
        t.prototype.parseItemInfo = function() {
            var e = this.data.itemInfo.split("_");
            switch (this.itemType = +e[0], this.itemId = +e[1], this.itemNum = +e[2], +e[0]) {
            case 1:
                this.imgReward.source = ClientConfig.getItemIcon( + e[1]);
                break;
            case 2:
                this.imgReward.source = ClientConfig.GetAvatarHead( + e[1]);
                break;
            case 3:
                this.imgReward.source = ClientConfig.GetAvatarFrame( + e[1])
            }
            this.txtNum.text = e[2]
        },
        t
    } (BaseItemRenderer);
    e.AnniversarySignInItem = t,
    __reflect(t.prototype, "anniversarySignIn.AnniversarySignInItem")
} (anniversarySignIn || (anniversarySignIn = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/AnniversarySignInItemSkin.exml"] = window.AnniversarySignInItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgItemBg", "imgReward", "txtNum", "imgHasGot", "grpAll"],
        this.height = 68,
        this.width = 67,
        this.elementsContent = [this.grpAll_i()],
        this.states = [new eui.State("today", [new eui.SetProperty("imgItemBg", "visible", !0), new eui.SetProperty("imgItemBg", "source", "anniversary_sign_in_imgtodaybg_png"), new eui.SetProperty("imgItemBg", "x", -8), new eui.SetProperty("imgItemBg", "y", -8), new eui.SetProperty("txtNum", "visible", !0), new eui.SetProperty("txtNum", "textColor", 0), new eui.SetProperty("imgHasGot", "visible", !1)]), new eui.State("hasGot", []), new eui.State("normal", [new eui.SetProperty("imgHasGot", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grpAll_i = function() {
        var e = new eui.Group;
        return this.grpAll = e,
        e.height = 68,
        e.width = 67,
        e.elementsContent = [this.imgItemBg_i(), this.imgReward_i(), this.txtNum_i(), this.imgHasGot_i()],
        e
    },
    i.imgItemBg_i = function() {
        var e = new eui.Image;
        return this.imgItemBg = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "anniversary_sign_in_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgReward_i = function() {
        var e = new eui.Image;
        return this.imgReward = e,
        e.height = 49,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = 0,
        e.width = 49,
        e.x = 8.999999999999986,
        e.y = 10,
        e
    },
    i.txtNum_i = function() {
        var e = new eui.Label;
        return this.txtNum = e,
        e.bottom = 3,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 15,
        e.text = "00",
        e
    },
    i.imgHasGot_i = function() {
        var e = new eui.Image;
        return this.imgHasGot = e,
        e.horizontalCenter = -1,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "anniversary_sign_in_imghasgot_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 1.999999999999993,
        e.y = 3,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AnniversarySignInSkin.exml"] = window.AnniversarySignInSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnGet", "imgHasSigned", "imgDone", "btnClose", "list", "grpCacheBitMap"],
        this.height = 574,
        this.width = 928,
        this.elementsContent = [this._Image1_i(), this.grpCacheBitMap_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "anniversary_sign_in_imgbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.grpCacheBitMap_i = function() {
        var e = new eui.Group;
        return this.grpCacheBitMap = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnGet_i(), this.imgHasSigned_i(), this.imgDone_i(), this.btnClose_i(), this._Scroller1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "anniversary_sign_in_itemsbg_png",
        e.x = 42,
        e.y = 377,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "anniversary_sign_in_itemsbg_png",
        e.x = 76,
        e.y = 276.99999999999994,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "anniversary_sign_in_itemsbg_png",
        e.visible = !0,
        e.x = 42,
        e.y = 177,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "anniversary_sign_in_btnget_png",
        e.x = 269,
        e.y = 483,
        e
    },
    i.imgHasSigned_i = function() {
        var e = new eui.Image;
        return this.imgHasSigned = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "anniversary_sign_in_imghassigned_png",
        e.x = 209,
        e.y = 496,
        e
    },
    i.imgDone_i = function() {
        var e = new eui.Image;
        return this.imgDone = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "anniversary_sign_in_imgdone_png",
        e.x = 209,
        e.y = 496,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "anniversary_sign_in_btnclose_png",
        e.x = 886.0000000000001,
        e.y = 18.000000000000007,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 307,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 640,
        e.x = 42,
        e.y = 177.00000000000006,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.height = 306.151,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 13.5,
        e.paddingLeft = 28,
        e.paddingTop = 18,
        e.requestedColumnCount = 7,
        e.verticalGap = 33,
        e
    },
    t
} (eui.Skin);