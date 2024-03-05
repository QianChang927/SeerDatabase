var __reflect = this && this.__reflect ||
function(i, t, e) {
    i.__class__ = t,
    e ? e.push(t) : e = [t],
    i.__types__ = i.__types__ ? e.concat(i.__types__) : e
},
__extends = this && this.__extends ||
function(i, t) {
    function e() {
        this.constructor = i
    }
    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
    e.prototype = t.prototype,
    i.prototype = new e
},
qixiGiftSign; !
function(i) {
    var t = function(i) {
        function t(t, e) {
            var n = i.call(this) || this;
            return n.skinName = "QixiGiftSignBlessPopSkin",
            n.curLevel = t,
            n.giftType = 1 == e ? 300918 : 300919,
            n
        }
        return __extends(t, i),
        t.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.konwBtn,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            this.addDisplay(),
            this.addEvent()
        },
        t.prototype.addDisplay = function() {
            this.txt.text = "成功送出祝福，礼盒升级至LV." + this.curLevel + "\n七夕礼盒将在8月22日开启，记得来领取哟~";
            var i = new SmallItemIcon;
            i.setData({
                type: "default",
                id: this.giftType,
                count: 1,
                name: !1,
                rarity: !1,
                onClick: "showTip",
                ui: {
                    bgSource: "qixi_gift_sign_itemBg_png"
                }
            });
            var t = this.addChild(i);
            this.itemBg && (t.x = this.itemBg.x, t.y = this.itemBg.y, this.removeChild(this.itemBg))
        },
        t.prototype.addEvent = function() {},
        t
    } (PopView);
    i.BlassPop = t,
    __reflect(t.prototype, "qixiGiftSign.BlassPop")
} (qixiGiftSign || (qixiGiftSign = {}));
var __reflect = this && this.__reflect ||
function(i, t, e) {
    i.__class__ = t,
    e ? e.push(t) : e = [t],
    i.__types__ = i.__types__ ? e.concat(i.__types__) : e
},
qixiGiftSign; !
function(i) {
    var t = function() {
        function i() {}
        return i.GiftData = [[{
            itemid: 1400152,
            cnt: 2
        },
        {
            itemid: 1400153,
            cnt: 2
        },
        {
            itemid: 1723855,
            cnt: 1e4
        }], [{
            itemid: 1400152,
            cnt: 3
        },
        {
            itemid: 1400153,
            cnt: 3
        },
        {
            itemid: 1723855,
            cnt: 2e4
        }], [{
            itemid: 1400152,
            cnt: 4
        },
        {
            itemid: 1400153,
            cnt: 4
        },
        {
            itemid: 1723855,
            cnt: 3e4
        },
        {
            itemid: 1400154,
            cnt: 10
        }], [{
            itemid: 1400152,
            cnt: 5
        },
        {
            itemid: 1400153,
            cnt: 5
        },
        {
            itemid: 1723855,
            cnt: 4e4
        },
        {
            itemid: 300918,
            cnt: 2
        },
        {
            itemid: 300919,
            cnt: 2
        }], [{
            itemid: 1400152,
            cnt: 6
        },
        {
            itemid: 1400153,
            cnt: 6
        },
        {
            itemid: 1723855,
            cnt: 5e4
        },
        {
            itemid: 1400154,
            cnt: 20
        },
        {
            itemid: 300918,
            cnt: 5
        },
        {
            itemid: 300919,
            cnt: 5
        }]],
        i
    } ();
    i.Const = t,
    __reflect(t.prototype, "qixiGiftSign.Const")
} (qixiGiftSign || (qixiGiftSign = {}));
var __reflect = this && this.__reflect ||
function(i, t, e) {
    i.__class__ = t,
    e ? e.push(t) : e = [t],
    i.__types__ = i.__types__ ? e.concat(i.__types__) : e
},
__extends = this && this.__extends ||
function(i, t) {
    function e() {
        this.constructor = i
    }
    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
    e.prototype = t.prototype,
    i.prototype = new e
},
qixiGiftSign; !
function(i) {
    var t = function(t) {
        function e(i) {
            var e = t.call(this) || this;
            return e.skinName = "QixiGiftSignInfoPanelSkin",
            e.curLevel = i,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.closeBtn,
            function() {
                PopViewManager.getInstance().hideView(i)
            },
            this),
            this.addDisplay(),
            this.addEvent()
        },
        e.prototype.addDisplay = function() {
            for (var t = 1,
            e = 1; 5 >= t; t++) {
                this["desc" + t].textFlow = (new egret.HtmlTextParser).parse("七夕礼盒\n<font color='16776192'>Lv." + t + "</font>");
                for (var n = i.Const.GiftData[t - 1], g = 0, _ = n; g < _.length; g++) {
                    var s = _[g],
                    o = s.itemid,
                    r = s.cnt,
                    h = new SmallItemIcon;
                    h.setData({
                        type: "default",
                        id: o,
                        count: r,
                        name: !1,
                        rarity: !1,
                        onClick: "showTip",
                        ui: {
                            bgSource: "qixi_gift_sign_itemBg_png"
                        }
                    });
                    var a = this.addChild(h);
                    this["itemBg_" + e] && (a.x = this["itemBg_" + e].x, a.y = this["itemBg_" + e].y, this.removeChild(this["itemBg_" + e]), e++)
                }
            }
        },
        e.prototype.addEvent = function() {},
        e
    } (PopView);
    i.InfoPanel = t,
    __reflect(t.prototype, "qixiGiftSign.InfoPanel")
} (qixiGiftSign || (qixiGiftSign = {}));
var __reflect = this && this.__reflect ||
function(i, t, e) {
    i.__class__ = t,
    e ? e.push(t) : e = [t],
    i.__types__ = i.__types__ ? e.concat(i.__types__) : e
},
__extends = this && this.__extends ||
function(i, t) {
    function e() {
        this.constructor = i
    }
    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
    e.prototype = t.prototype,
    i.prototype = new e
},
qixiGiftSign; !
function(i) {
    var t = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.curLevel = 1,
            i.isHasGot = !1,
            i.isBless = [],
            i.skinName = "QixiGiftSignMainSkin",
            StatLogger.log("2023运营活动", "0818墨秋的七夕礼盒", "进入主面板"),
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this._anim = SpineUtil.createAnimate("aixin"),
            this._anim.touchEnabled = this._anim.touchChildren = !1,
            this.bg_group.addChildAt(this._anim, 1),
            this._anim.x = 542,
            this._anim.y = LevelManager.stage.stageHeight / 2.05,
            ImageButtonUtil.add(this.closeBtn,
            function() {
                e.onClose()
            },
            this),
            ImageButtonUtil.add(this.infoBtn,
            function() {
                PopViewManager.getInstance().openView(new i.InfoPanel(e.curLevel))
            },
            this),
            ImageButtonUtil.add(this.blessBtn,
            function() {
                e._anim.play("aixin", 1),
                AwardManager.pause(),
                SocketConnection.sendWithPromise(45850, [1, 0]).then(function() {
                    KTool.getMultiValue([105700],
                    function(t) {
                        e.update(t[0]),
                        PopViewManager.getInstance().openView(new i.BlassPop(e.curLevel, KTool.getByte(t[0], 1))),
                        egret.setTimeout(function() {
                            AwardManager.clear(),
                            AwardManager.resume()
                        },
                        e, 2e3)
                    })
                }),
                ImageButtonUtil.remove(e.blessBtn),
                e.tomorrow.visible = !0
            },
            this),
            ImageButtonUtil.add(this.getBtn,
            function() {
                e._anim.play("aixin", 1),
                SocketConnection.sendWithPromise(45850, [1, 0]).then(function() {
                    KTool.getMultiValue([105700],
                    function(i) {
                        e.update(i[0])
                    })
                }),
                ImageButtonUtil.remove(e.getBtn),
                e.hasGotBtn.visible = !0
            },
            this),
            KTool.getMultiValue([105700],
            function(i) {
                e.update(i[0])
            })
        },
        e.prototype.update = function(i) {
            this.dayIdx = -1,
            7 == SystemTimerManager.sysBJDate.getMonth() && (this.dayIdx = SystemTimerManager.sysBJDate.getDate() - 18),
            this.dayIdx = this.dayIdx < 0 ? -1 : this.dayIdx,
            this.dayIdx = this.dayIdx > 4 ? -1 : this.dayIdx,
            this.curLevel = KTool.getByte(i, 0) + 1;
            KTool.getByte(i, 1);
            return this.isHasGot = 1 == KTool.getBit(i, 21),
            this.isBless = [],
            this.isBless.push(1 == KTool.getBit(i, 17)),
            this.isBless.push(1 == KTool.getBit(i, 18)),
            this.isBless.push(1 == KTool.getBit(i, 19)),
            this.isBless.push(1 == KTool.getBit(i, 20)),
            this.dayIdx < 0 ? (BubblerManager.getInstance().showText("活动已结束！"), void this.onClose()) : (this.addDisplay(), void this.addEvent())
        },
        e.prototype.addDisplay = function() {
            this.dayIdx < 4 ? (this.getBtn.visible = this.hasGotBtn.visible = !1, this.isBless[this.dayIdx] ? (ImageButtonUtil.remove(this.blessBtn), this.tomorrow.visible = !0) : this.tomorrow.visible = !1) : (this.blessBtn.visible = this.tomorrow.visible = !1, this.isHasGot ? (ImageButtonUtil.remove(this.getBtn), this.hasGotBtn.visible = !0) : this.hasGotBtn.visible = !1),
            this.curLevelTxt.text = this.curLevel.toString(),
            this.curGifts = i.Const.GiftData[this.curLevel - 1];
            for (var t = 1; 6 >= t; t++) t <= this.curGifts.length ? (this["g" + t].visible = !0, this["hasGotGift_" + t].visible = this.isHasGot, this["giftImg_" + t].source = ClientConfig.getItemIcon(this.curGifts[t - 1].itemid), this["giftTxt_" + t].text = this.curGifts[t - 1].cnt.toString()) : this["g" + t].visible = !1
        },
        e.prototype.addEvent = function() {
            for (var i = function() {
                if (t["g" + e].visible) {
                    ImageButtonUtil.remove(t["g" + e]);
                    var i = t.curGifts[e - 1].itemid;
                    ImageButtonUtil.add(t["g" + e],
                    function() {
                        tipsPop.TipsPop.openItemPop({
                            id: i
                        })
                    },
                    t, !1)
                }
            },
            t = this, e = 1; 6 >= e; e++) i()
        },
        e
    } (BaseModule);
    i.QixiGiftSign = t,
    __reflect(t.prototype, "qixiGiftSign.QixiGiftSign")
} (qixiGiftSign || (qixiGiftSign = {}));
var __extends = this && this.__extends ||
function(i, t) {
    function e() {
        this.constructor = i
    }
    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
    e.prototype = t.prototype,
    i.prototype = new e
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/QixiGiftSignBlessPopSkin.exml"] = window.QixiGiftSignBlessPopSkin = function(i) {
    function t() {
        i.call(this),
        this.skinParts = ["popBg", "konwBtn", "itemBg", "txt"],
        this.elementsContent = [this.popBg_i(), this.konwBtn_i(), this.itemBg_i(), this.txt_i()]
    }
    __extends(t, i);
    var e = t.prototype;
    return e.popBg_i = function() {
        var i = new eui.Image;
        return this.popBg = i,
        i.height = 382,
        i.source = "qixi_gift_sign_bless_pop_popBg_png",
        i.width = 498,
        i.x = 0,
        i.y = 0,
        i
    },
    e.konwBtn_i = function() {
        var i = new eui.Image;
        return this.konwBtn = i,
        i.height = 86,
        i.source = "qixi_gift_sign_bless_pop_konwBtn_png",
        i.width = 214,
        i.x = 153,
        i.y = 255,
        i
    },
    e.itemBg_i = function() {
        var i = new eui.Image;
        return this.itemBg = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 224,
        i.y = 82,
        i
    },
    e.txt_i = function() {
        var i = new eui.Label;
        return this.txt = i,
        i.fontFamily = "MFShangHei",
        i.horizontalCenter = 5,
        i.size = 18,
        i.text = "恭喜你，成功送上祝福，礼盒升级至 Lv. X\n七夕礼盒仅限8月22日当天开启，\n记得前来领取哟~",
        i.textAlign = "center",
        i.textColor = 13954303,
        i.y = 161,
        i
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/QixiGiftSignInfoPanelSkin.exml"] = window.QixiGiftSignInfoPanelSkin = function(i) {
    function t() {
        i.call(this),
        this.skinParts = ["desc1", "itemBg_1", "itemBg_2", "itemBg_3", "desc2", "itemBg_4", "itemBg_5", "itemBg_6", "desc3", "itemBg_7", "itemBg_8", "itemBg_9", "itemBg_10", "desc4", "itemBg_11", "itemBg_12", "itemBg_13", "itemBg_14", "itemBg_15", "desc5", "itemBg_16", "itemBg_17", "itemBg_18", "itemBg_19", "itemBg_20", "itemBg_21", "closeBtn"],
        this.elementsContent = [this._Image1_i(), this.desc1_i(), this.itemBg_1_i(), this.itemBg_2_i(), this.itemBg_3_i(), this.desc2_i(), this.itemBg_4_i(), this.itemBg_5_i(), this.itemBg_6_i(), this.desc3_i(), this.itemBg_7_i(), this.itemBg_8_i(), this.itemBg_9_i(), this.itemBg_10_i(), this.desc4_i(), this.itemBg_11_i(), this.itemBg_12_i(), this.itemBg_13_i(), this.itemBg_14_i(), this.itemBg_15_i(), this.desc5_i(), this.itemBg_16_i(), this.itemBg_17_i(), this.itemBg_18_i(), this.itemBg_19_i(), this.itemBg_20_i(), this.itemBg_21_i(), this.closeBtn_i()]
    }
    __extends(t, i);
    var e = t.prototype;
    return e._Image1_i = function() {
        var i = new eui.Image;
        return i.height = 589,
        i.source = "qixi_gift_sign_info_panel_zu_10_png",
        i.width = 980,
        i.x = 0,
        i.y = 0,
        i
    },
    e.desc1_i = function() {
        var i = new eui.Label;
        return this.desc1 = i,
        i.fontFamily = "MFShangHei",
        i.size = 24.0057877204505,
        i.text = "七夕礼盒Lv.1",
        i.textAlign = "center",
        i.textColor = 16777215,
        i.x = 152,
        i.y = 106,
        i
    },
    e.itemBg_1_i = function() {
        var i = new eui.Image;
        return this.itemBg_1 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 283,
        i.y = 103,
        i
    },
    e.itemBg_2_i = function() {
        var i = new eui.Image;
        return this.itemBg_2 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 372,
        i.y = 102,
        i
    },
    e.itemBg_3_i = function() {
        var i = new eui.Image;
        return this.itemBg_3 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 461,
        i.y = 102,
        i
    },
    e.desc2_i = function() {
        var i = new eui.Label;
        return this.desc2 = i,
        i.fontFamily = "MFShangHei",
        i.size = 24.0057877204505,
        i.text = "七夕礼盒Lv.12",
        i.textAlign = "center",
        i.textColor = 16777215,
        i.x = 152,
        i.y = 192,
        i
    },
    e.itemBg_4_i = function() {
        var i = new eui.Image;
        return this.itemBg_4 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 283,
        i.y = 189,
        i
    },
    e.itemBg_5_i = function() {
        var i = new eui.Image;
        return this.itemBg_5 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 372,
        i.y = 188,
        i
    },
    e.itemBg_6_i = function() {
        var i = new eui.Image;
        return this.itemBg_6 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 461,
        i.y = 188,
        i
    },
    e.desc3_i = function() {
        var i = new eui.Label;
        return this.desc3 = i,
        i.fontFamily = "MFShangHei",
        i.size = 24.0057877204505,
        i.text = "七夕礼盒Lv.1",
        i.textAlign = "center",
        i.textColor = 16777215,
        i.x = 152,
        i.y = 280,
        i
    },
    e.itemBg_7_i = function() {
        var i = new eui.Image;
        return this.itemBg_7 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 283,
        i.y = 277,
        i
    },
    e.itemBg_8_i = function() {
        var i = new eui.Image;
        return this.itemBg_8 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 372,
        i.y = 276,
        i
    },
    e.itemBg_9_i = function() {
        var i = new eui.Image;
        return this.itemBg_9 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 461,
        i.y = 276,
        i
    },
    e.itemBg_10_i = function() {
        var i = new eui.Image;
        return this.itemBg_10 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 550,
        i.y = 276,
        i
    },
    e.desc4_i = function() {
        var i = new eui.Label;
        return this.desc4 = i,
        i.fontFamily = "MFShangHei",
        i.size = 24.0057877204505,
        i.text = "七夕礼盒Lv.1",
        i.textAlign = "center",
        i.textColor = 16777215,
        i.x = 152,
        i.y = 369,
        i
    },
    e.itemBg_11_i = function() {
        var i = new eui.Image;
        return this.itemBg_11 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 283,
        i.y = 366,
        i
    },
    e.itemBg_12_i = function() {
        var i = new eui.Image;
        return this.itemBg_12 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 372,
        i.y = 365,
        i
    },
    e.itemBg_13_i = function() {
        var i = new eui.Image;
        return this.itemBg_13 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 461,
        i.y = 365,
        i
    },
    e.itemBg_14_i = function() {
        var i = new eui.Image;
        return this.itemBg_14 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 550,
        i.y = 365,
        i
    },
    e.itemBg_15_i = function() {
        var i = new eui.Image;
        return this.itemBg_15 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 639,
        i.y = 365,
        i
    },
    e.desc5_i = function() {
        var i = new eui.Label;
        return this.desc5 = i,
        i.fontFamily = "MFShangHei",
        i.size = 24.0057877204505,
        i.text = "七夕礼盒Lv.1",
        i.textAlign = "center",
        i.textColor = 16777215,
        i.x = 152,
        i.y = 457,
        i
    },
    e.itemBg_16_i = function() {
        var i = new eui.Image;
        return this.itemBg_16 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 283,
        i.y = 454,
        i
    },
    e.itemBg_17_i = function() {
        var i = new eui.Image;
        return this.itemBg_17 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 372,
        i.y = 453,
        i
    },
    e.itemBg_18_i = function() {
        var i = new eui.Image;
        return this.itemBg_18 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 461,
        i.y = 453,
        i
    },
    e.itemBg_19_i = function() {
        var i = new eui.Image;
        return this.itemBg_19 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 550,
        i.y = 453,
        i
    },
    e.itemBg_20_i = function() {
        var i = new eui.Image;
        return this.itemBg_20 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 639,
        i.y = 453,
        i
    },
    e.itemBg_21_i = function() {
        var i = new eui.Image;
        return this.itemBg_21 = i,
        i.height = 72,
        i.source = "qixi_gift_sign_itemBg_png",
        i.width = 72,
        i.x = 728,
        i.y = 453,
        i
    },
    e.closeBtn_i = function() {
        var i = new eui.Image;
        return this.closeBtn = i,
        i.height = 53,
        i.source = "qixi_gift_sign_info_panel_closeBtn_png",
        i.width = 52,
        i.x = 852,
        i.y = 21,
        i
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/QixiGiftSignMainSkin.exml"] = window.QixiGiftSignMainSkin = function(i) {
    function t() {
        i.call(this),
        this.skinParts = ["bg", "curLevelTxt", "bg_group", "giftBg_1", "giftImg_1", "giftTxt_1", "hasGotGift_1", "g1", "giftBg_2", "giftImg_2", "giftTxt_2", "hasGotGift_2", "g2", "giftBg_3", "giftImg_3", "giftTxt_3", "hasGotGift_3", "g3", "giftBg_4", "giftImg_4", "giftTxt_4", "hasGotGift_4", "g4", "giftBg_5", "giftImg_5", "giftTxt_5", "hasGotGift_5", "g5", "giftBg_6", "giftImg_6", "giftTxt_6", "hasGotGift_6", "g6", "infoBtn", "closeBtn", "blessBtn", "tomorrow", "getBtn", "hasGotBtn"],
        this.height = 602,
        this.width = 1089,
        this.elementsContent = [this.bg_group_i(), this.g1_i(), this.g2_i(), this.g3_i(), this.g4_i(), this.g5_i(), this.g6_i(), this.infoBtn_i(), this.closeBtn_i(), this.blessBtn_i(), this.tomorrow_i(), this.getBtn_i(), this.hasGotBtn_i()]
    }
    __extends(t, i);
    var e = t.prototype;
    return e.bg_group_i = function() {
        var i = new eui.Group;
        return this.bg_group = i,
        i.x = 0,
        i.y = 0,
        i.elementsContent = [this.bg_i(), this.curLevelTxt_i()],
        i
    },
    e.bg_i = function() {
        var i = new eui.Image;
        return this.bg = i,
        i.height = 602,
        i.source = "qixi_gift_sign_main_zu_12_png",
        i.width = 1089,
        i.x = 0,
        i.y = 0,
        i
    },
    e.curLevelTxt_i = function() {
        var i = new eui.Label;
        return this.curLevelTxt = i,
        i.fontFamily = "MFShangHei",
        i.height = 29.392,
        i.size = 26,
        i.text = "5",
        i.textAlign = "center",
        i.textColor = 16776192,
        i.width = 34.246,
        i.x = 635.54,
        i.y = 248.71,
        i
    },
    e.g1_i = function() {
        var i = new eui.Group;
        return this.g1 = i,
        i.visible = !0,
        i.x = 490,
        i.y = 297,
        i.elementsContent = [this.giftBg_1_i(), this.giftImg_1_i(), this.giftTxt_1_i(), this.hasGotGift_1_i()],
        i
    },
    e.giftBg_1_i = function() {
        var i = new eui.Image;
        return this.giftBg_1 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_giftBg_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.giftImg_1_i = function() {
        var i = new eui.Image;
        return this.giftImg_1 = i,
        i.height = 72,
        i.horizontalCenter = -5,
        i.source = "",
        i.verticalCenter = -5,
        i.width = 72,
        i
    },
    e.giftTxt_1_i = function() {
        var i = new eui.Label;
        return this.giftTxt_1 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "99999",
        i.textAlign = "right",
        i.textColor = 16774400,
        i.width = 50,
        i.x = 46,
        i.y = 76,
        i
    },
    e.hasGotGift_1_i = function() {
        var i = new eui.Image;
        return this.hasGotGift_1 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_hasGotGift_png",
        i.visible = !0,
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.g2_i = function() {
        var i = new eui.Group;
        return this.g2 = i,
        i.x = 621,
        i.y = 297,
        i.elementsContent = [this.giftBg_2_i(), this.giftImg_2_i(), this.giftTxt_2_i(), this.hasGotGift_2_i()],
        i
    },
    e.giftBg_2_i = function() {
        var i = new eui.Image;
        return this.giftBg_2 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_giftBg_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.giftImg_2_i = function() {
        var i = new eui.Image;
        return this.giftImg_2 = i,
        i.height = 72,
        i.horizontalCenter = -5,
        i.source = "",
        i.verticalCenter = -5,
        i.width = 72,
        i
    },
    e.giftTxt_2_i = function() {
        var i = new eui.Label;
        return this.giftTxt_2 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "99999",
        i.textAlign = "right",
        i.textColor = 16774400,
        i.width = 50,
        i.x = 46,
        i.y = 76,
        i
    },
    e.hasGotGift_2_i = function() {
        var i = new eui.Image;
        return this.hasGotGift_2 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_hasGotGift_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.g3_i = function() {
        var i = new eui.Group;
        return this.g3 = i,
        i.visible = !0,
        i.x = 752,
        i.y = 297,
        i.elementsContent = [this.giftBg_3_i(), this.giftImg_3_i(), this.giftTxt_3_i(), this.hasGotGift_3_i()],
        i
    },
    e.giftBg_3_i = function() {
        var i = new eui.Image;
        return this.giftBg_3 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_giftBg_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.giftImg_3_i = function() {
        var i = new eui.Image;
        return this.giftImg_3 = i,
        i.height = 72,
        i.horizontalCenter = -5,
        i.source = "",
        i.verticalCenter = -5,
        i.width = 72,
        i
    },
    e.giftTxt_3_i = function() {
        var i = new eui.Label;
        return this.giftTxt_3 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "99999",
        i.textAlign = "right",
        i.textColor = 16774400,
        i.width = 50,
        i.x = 46,
        i.y = 76,
        i
    },
    e.hasGotGift_3_i = function() {
        var i = new eui.Image;
        return this.hasGotGift_3 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_hasGotGift_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.g4_i = function() {
        var i = new eui.Group;
        return this.g4 = i,
        i.x = 490,
        i.y = 419,
        i.elementsContent = [this.giftBg_4_i(), this.giftImg_4_i(), this.giftTxt_4_i(), this.hasGotGift_4_i()],
        i
    },
    e.giftBg_4_i = function() {
        var i = new eui.Image;
        return this.giftBg_4 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_giftBg_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.giftImg_4_i = function() {
        var i = new eui.Image;
        return this.giftImg_4 = i,
        i.height = 72,
        i.horizontalCenter = -5,
        i.source = "",
        i.verticalCenter = -5,
        i.width = 72,
        i
    },
    e.giftTxt_4_i = function() {
        var i = new eui.Label;
        return this.giftTxt_4 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "99999",
        i.textAlign = "right",
        i.textColor = 16774400,
        i.width = 50,
        i.x = 46,
        i.y = 76,
        i
    },
    e.hasGotGift_4_i = function() {
        var i = new eui.Image;
        return this.hasGotGift_4 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_hasGotGift_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.g5_i = function() {
        var i = new eui.Group;
        return this.g5 = i,
        i.x = 621,
        i.y = 419,
        i.elementsContent = [this.giftBg_5_i(), this.giftImg_5_i(), this.giftTxt_5_i(), this.hasGotGift_5_i()],
        i
    },
    e.giftBg_5_i = function() {
        var i = new eui.Image;
        return this.giftBg_5 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_giftBg_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.giftImg_5_i = function() {
        var i = new eui.Image;
        return this.giftImg_5 = i,
        i.height = 72,
        i.horizontalCenter = -5,
        i.source = "",
        i.verticalCenter = -5,
        i.width = 72,
        i
    },
    e.giftTxt_5_i = function() {
        var i = new eui.Label;
        return this.giftTxt_5 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "99999",
        i.textAlign = "right",
        i.textColor = 16774400,
        i.width = 50,
        i.x = 46,
        i.y = 76,
        i
    },
    e.hasGotGift_5_i = function() {
        var i = new eui.Image;
        return this.hasGotGift_5 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_hasGotGift_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.g6_i = function() {
        var i = new eui.Group;
        return this.g6 = i,
        i.x = 752,
        i.y = 419,
        i.elementsContent = [this.giftBg_6_i(), this.giftImg_6_i(), this.giftTxt_6_i(), this.hasGotGift_6_i()],
        i
    },
    e.giftBg_6_i = function() {
        var i = new eui.Image;
        return this.giftBg_6 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_giftBg_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.giftImg_6_i = function() {
        var i = new eui.Image;
        return this.giftImg_6 = i,
        i.height = 72,
        i.horizontalCenter = -5,
        i.source = "",
        i.verticalCenter = -5,
        i.width = 72,
        i
    },
    e.giftTxt_6_i = function() {
        var i = new eui.Label;
        return this.giftTxt_6 = i,
        i.fontFamily = "MFShangHei",
        i.size = 16,
        i.text = "99999",
        i.textAlign = "right",
        i.textColor = 16774400,
        i.width = 50,
        i.x = 46,
        i.y = 76,
        i
    },
    e.hasGotGift_6_i = function() {
        var i = new eui.Image;
        return this.hasGotGift_6 = i,
        i.height = 123,
        i.source = "qixi_gift_sign_main_hasGotGift_png",
        i.width = 132,
        i.x = 0,
        i.y = 0,
        i
    },
    e.infoBtn_i = function() {
        var i = new eui.Image;
        return this.infoBtn = i,
        i.height = 70,
        i.source = "qixi_gift_sign_main_infoBtn_png",
        i.width = 80,
        i.x = 724,
        i.y = 224,
        i
    },
    e.closeBtn_i = function() {
        var i = new eui.Image;
        return this.closeBtn = i,
        i.height = 60,
        i.source = "qixi_gift_sign_main_closeBtn_png",
        i.width = 60,
        i.x = 1017,
        i.y = 20,
        i
    },
    e.blessBtn_i = function() {
        var i = new eui.Image;
        return this.blessBtn = i,
        i.height = 133,
        i.source = "qixi_gift_sign_main_blessBtn_png",
        i.visible = !0,
        i.width = 187,
        i.x = 875,
        i.y = 373,
        i
    },
    e.tomorrow_i = function() {
        var i = new eui.Image;
        return this.tomorrow = i,
        i.height = 133,
        i.source = "qixi_gift_sign_main_tomorrow_png",
        i.visible = !0,
        i.width = 195,
        i.x = 875,
        i.y = 373,
        i
    },
    e.getBtn_i = function() {
        var i = new eui.Image;
        return this.getBtn = i,
        i.height = 133,
        i.source = "qixi_gift_sign_main_getBtn_png",
        i.visible = !0,
        i.width = 187,
        i.x = 875,
        i.y = 373,
        i
    },
    e.hasGotBtn_i = function() {
        var i = new eui.Image;
        return this.hasGotBtn = i,
        i.height = 133,
        i.source = "qixi_gift_sign_main_hasgotBtn_png",
        i.visible = !0,
        i.width = 187,
        i.x = 875,
        i.y = 373,
        i
    },
    t
} (eui.Skin);