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
battleFirePanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.needNum = 5,
            t.fireNames = ["绿色火焰", "蓝色火焰", "紫色火焰", "金色火焰"],
            t.fireDes = ["PVE战斗中每一次登场精灵全属性+1", "PVE战斗中每回合恢复60点体力值", "PVE战斗中每回合造成伤害增加25%", "PVE战斗中每回合受到伤害减少25%"],
            t.skinName = "BattlefirepanelItemNew20220209Skin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.buyGroup,
            function() {
                return t.itemNum = ItemManager.getNumByID(1400154),
                t.itemNum < t.needNum ? void BubblerManager.getInstance().showText("友谊之星数量不足，通过好友可进行赠送或领取！") : (StatLogger.log("1113版本系统功能", "个人信息", "花费友谊之星领取【" + t.fireNames[t.data.index - 1] + "】"), void BattleFireManager.getInstatnce().exchangeBattleFile(t.data.index + 5).then(function() {
                    BubblerManager.getInstance().showText("恭喜你获得了" + t.fireNames[t.data.index - 1] + "效果，快去战斗中试试吧！"),
                    EventManager.dispatchEvent(new egret.Event("battleFireUpdateInfo"))
                }))
            },
            this),
            ImageButtonUtil.add(this.getGroup,
            function() {
                StatLogger.log("1113版本系统功能", "个人信息", "免费领取【" + t.fireNames[t.data.index - 1] + "】"),
                BattleFireManager.getInstatnce().getBattleFile(t.data.index + 5).then(function() {
                    BubblerManager.getInstance().showText("恭喜你获得了" + t.fireNames[t.data.index - 1] + "效果，快去战斗中试试吧！"),
                    EventManager.dispatchEvent(new egret.Event("battleFireUpdateInfo"))
                })
            },
            this)
        },
        t.prototype.dataChanged = function() {
            if (this.data) {
                this.fireImg1.source = RES.getRes("battleFirePanel_fireImg" + this.data.index + "_png"),
                this.tip2.text = this.fireDes[this.data.index - 1],
                this.firename.text = this.fireNames[this.data.index - 1];
                var e = MainManager.actorInfo.isVip,
                t = this.data.value,
                i = t[2],
                n = t[1],
                r = 0 == n || n > 0 && SystemTimerManager.time > n;
                this.getGroup.visible = e && 0 == i,
                this.buyGroup.visible = e && i > 0 || !e,
                DisplayUtil.setEnabled(this.buyGroup, r),
                DisplayUtil.setEnabled(this.getGroup, r),
                this.txtPrice.text = "" + this.needNum,
                this.img_using.visible = !r && t[0] - 5 == this.data.index
            }
        },
        t.prototype.setBuyEnable = function(e) {
            DisplayUtil.setEnabled(this.buyGroup, e)
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.ItemRenderer);
    e.BattleFireItemRender = t,
    __reflect(t.prototype, "battleFirePanel.BattleFireItemRender")
} (battleFirePanel || (battleFirePanel = {}));
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
battleFirePanel; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i.petid = -1,
            e && (i.petid = e),
            i.openPanel(),
            i
        }
        return __extends(i, t),
        i.prototype.openPanel = function() {
            egret.registerClass;
            try {
                this._view = new e.BattleFirePopPanel,
                this._view.addEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this);
                var t = PopViewManager.createDefaultStyleObject();
                t.maskShapeStyle.maskAlpha = 0,
                t.caller = this._view,
                PopViewManager.getInstance().openView(this._view, t)
            } catch(i) {
                console.error(i)
            }
        },
        i.prototype._onClosePanelEvent = function(e) {
            this.onClose()
        },
        i.prototype.destroy = function() {
            this._view.removeEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this),
            this._view = null,
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.BattleFirePanel = t,
    __reflect(t.prototype, "battleFirePanel.BattleFirePanel")
} (battleFirePanel || (battleFirePanel = {}));
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
battleFirePanel; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.needNum = 50,
            i.fireTimeStamp = 0,
            i.skinName = "BattlefirepanelNew20220207Skin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = e.BattleFireItemRender,
            this._ary = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary,
            this.imgStar.source = ClientConfig.getItemIcon(1400154),
            this.updateInfo(),
            this.addEvent()
        },
        i.prototype.updateInfo = function(e) {
            var t = this;
            void 0 === e && (e = null),
            this.closeTimer(),
            BattleFireManager.getInstatnce().getBattleFireInfo().then(function(e) {
                t.fireTimeStamp = e[1];
                var i = [{
                    index: 2,
                    value: e
                },
                {
                    index: 3,
                    value: e
                },
                {
                    index: 4,
                    value: e
                },
                {
                    index: 1,
                    value: e
                }];
                t._ary.replaceAll(i),
                ItemManager.updateItems([1400154],
                function() {
                    t.itemNum = ItemManager.getNumByID(1400154),
                    t.numTxt.text = t.itemNum + "/100"
                }),
                t.fireTimeStamp > 0 && SystemTimerManager.time < t.fireTimeStamp && t.startTimer()
            })
        },
        i.prototype.startTimer = function() {
            null == this.timer && (this.timer = new egret.Timer(1e3), this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandle, this)),
            this.timer.start()
        },
        i.prototype.timerHandle = function(e) {
            if (this.fireTimeStamp > 0 && SystemTimerManager.time > this.fireTimeStamp) {
                this.closeTimer();
                for (var t = 0; t < this._ary.length; t++) this.list_viewport.getChildAt(t).setBuyEnable(!0)
            }
        },
        i.prototype.closeTimer = function() {
            this.timer && (this.timer.stop(), this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHandle, this), this.timer = null)
        },
        i.prototype.destroy = function() {
            this.closeTimer(),
            this.list_viewport.removeChildren(),
            this.removeEvent(),
            t.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.closeBtn, this.onTouchTapImageButton, this),
            EventManager.addEventListener("battleFireUpdateInfo", this.updateInfo, this),
            ImageButtonUtil.add(this.imgStar,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400154
                })
            },
            this)
        },
        i.prototype.removeEvent = function() {
            EventManager.removeEventListener("battleFireUpdateInfo", this.updateInfo, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchTapImageButton = function(e) {
            switch (e.target) {
            case this.closeBtn:
                this.hide(),
                this.dispatchEventWith("event_close_panel")
            }
        },
        i
    } (PopView);
    e.BattleFirePopPanel = t,
    __reflect(t.prototype, "battleFirePanel.BattleFirePopPanel")
} (battleFirePanel || (battleFirePanel = {}));
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
generateEUI.paths["resource/eui_skins/BattleFireItemRenderSkin.exml"] = window.BattleFireItemRenderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["Getfirebg", "imgbtnGet", "txtLabel", "getGroup", "imgbtnBuy", "txtLabel1", "icon1", "buyGroup", "firename", "tip2", "tip1", "tip", "fireImg1", "img_using", "fire"],
        this.height = 339,
        this.width = 182,
        this.elementsContent = [this.fire_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.fire_i = function() {
        var e = new eui.Group;
        return this.fire = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.Getfirebg_i(), this.getGroup_i(), this.buyGroup_i(), this.firename_i(), this.tip2_i(), this.tip1_i(), this.tip_i(), this.fireImg1_i(), this.img_using_i()],
        e
    },
    i.Getfirebg_i = function() {
        var e = new eui.Image;
        return this.Getfirebg = e,
        e.height = 339,
        e.source = "battleFirePanel_Getfirebg_png",
        e.width = 182,
        e.x = 0,
        e.y = 0,
        e
    },
    i.getGroup_i = function() {
        var e = new eui.Group;
        return this.getGroup = e,
        e.x = 21,
        e.y = 282,
        e.elementsContent = [this.imgbtnGet_i(), this.txtLabel_i()],
        e
    },
    i.imgbtnGet_i = function() {
        var e = new eui.Image;
        return this.imgbtnGet = e,
        e.height = 40,
        e.source = "common_btn_bg_style_orange_2_png",
        e.width = 140,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLabel_i = function() {
        var e = new eui.Label;
        return this.txtLabel = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "免费领取",
        e.textColor = 8341784,
        e.x = 28,
        e.y = 11,
        e
    },
    i.buyGroup_i = function() {
        var e = new eui.Group;
        return this.buyGroup = e,
        e.visible = !0,
        e.x = 21,
        e.y = 282,
        e.elementsContent = [this.imgbtnBuy_i(), this._Group1_i()],
        e
    },
    i.imgbtnBuy_i = function() {
        var e = new eui.Image;
        return this.imgbtnBuy = e,
        e.height = 40,
        e.source = "common_btn_bg_style_orange_2_png",
        e.visible = !0,
        e.width = 140,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e.visible = !0,
        e.elementsContent = [this.txtLabel1_i(), this.icon1_i()],
        e
    },
    i.txtLabel1_i = function() {
        var e = new eui.Label;
        return this.txtLabel1 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "300",
        e.textColor = 8341784,
        e.x = 36,
        e.y = 7,
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.height = 55,
        e.scaleX = .6,
        e.scaleY = .6,
        e.source = "battleFirePanel_icon_png",
        e.width = 55,
        e.x = 0,
        e.y = 0,
        e
    },
    i.firename_i = function() {
        var e = new eui.Label;
        return this.firename = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "蓝色火焰",
        e.textColor = 3492213,
        e.x = 52,
        e.y = 19,
        e
    },
    i.tip2_i = function() {
        var e = new eui.Label;
        return this.tip2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 48,
        e.size = 16,
        e.text = "PVE战斗中每回合恢复60点体力值",
        e.textColor = 4175861,
        e.width = 131,
        e.x = 32,
        e.y = 178,
        e
    },
    i.tip1_i = function() {
        var e = new eui.Label;
        return this.tip1 = e,
        e.size = 14,
        e.text = "VIP用户：30分钟",
        e.textColor = 3492213,
        e.x = 39,
        e.y = 230,
        e
    },
    i.tip_i = function() {
        var e = new eui.Label;
        return this.tip = e,
        e.size = 14,
        e.text = "普通用户：10分钟",
        e.textColor = 3492213,
        e.x = 36,
        e.y = 247,
        e
    },
    i.fireImg1_i = function() {
        var e = new eui.Image;
        return this.fireImg1 = e,
        e.height = 104,
        e.source = "battleFirePanel_fireImg1_png",
        e.width = 113,
        e.x = 35,
        e.y = 54,
        e
    },
    i.img_using_i = function() {
        var e = new eui.Image;
        return this.img_using = e,
        e.height = 71,
        e.source = "battleFirePanel_img_using_png",
        e.width = 85,
        e.x = 86,
        e.y = 103,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattlefirepanelSkin.exml"] = window.BattlefirepanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "panel", "closeBtn", "panelbg", "countbg", "numTxt", "icon", "tipTxt", "Getfirepanel", "list_viewport", "scroller_item"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this.Getfirepanel_i(), this.scroller_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.Getfirepanel_i = function() {
        var e = new eui.Group;
        return this.Getfirepanel = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.panelbg_i(), this.countbg_i(), this.numTxt_i(), this.icon_i(), this.tipTxt_i()],
        e
    },
    i.panelbg_i = function() {
        var e = new eui.Group;
        return this.panelbg = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.panel_i(), this.closeBtn_i()],
        e
    },
    i.panel_i = function() {
        var e = new eui.Group;
        return this.panel = e,
        e.x = 0,
        e.y = 22,
        e.elementsContent = [this._Image1_i(), this.title_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 411,
        e.source = "common_pop_point_png",
        e.width = 756,
        e.x = 0,
        e.y = 19,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.height = 42,
        e.source = "common_pop_title_medium_png",
        e.width = 748,
        e.x = 4,
        e.y = 0,
        e
    },
    i.closeBtn_i = function() {
        var e = new eui.Image;
        return this.closeBtn = e,
        e.height = 56,
        e.source = "common_close_1_png",
        e.width = 54,
        e.x = 714,
        e.y = 0,
        e
    },
    i.countbg_i = function() {
        var e = new eui.Image;
        return this.countbg = e,
        e.height = 20,
        e.source = "battleFirePanel_countbg_png",
        e.width = 98,
        e.x = 610,
        e.y = 33,
        e
    },
    i.numTxt_i = function() {
        var e = new eui.Label;
        return this.numTxt = e,
        e.size = 18,
        e.text = "000/999",
        e.textColor = 16777215,
        e.x = 634,
        e.y = 35,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 55,
        e.scaleX = .7,
        e.scaleY = .7,
        e.source = "battleFirePanel_icon_png",
        e.width = 55,
        e.x = 594,
        e.y = 27,
        e
    },
    i.tipTxt_i = function() {
        var e = new eui.Label;
        return this.tipTxt = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 16,
        e.text = "VIP用户每日可免费领取任意一个战斗加成火焰",
        e.textColor = 3492213,
        e.x = 212,
        e.y = 417,
        e
    },
    i.scroller_item_i = function() {
        var e = new eui.Scroller;
        return this.scroller_item = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 344,
        e.scrollPolicyH = "off",
        e.width = 732,
        e.x = 19,
        e.y = 69,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 344,
        e.width = 732,
        e.elementsContent = [this.list_viewport_i()],
        e
    },
    i.list_viewport_i = function() {
        var e = new eui.List;
        return this.list_viewport = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 344,
        e.width = 732,
        e.x = 0,
        e.y = 0,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = -4,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/BattlefirepanelItemNew20220209Skin.exml"] = window.BattlefirepanelItemNew20220209Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["tip2", "txtTime", "firename", "fireImg1", "imgStar", "txtPrice", "buyGroup", "getGroup", "img_using"],
        this.elementsContent = [this._Image1_i(), this.tip2_i(), this.txtTime_i(), this.firename_i(), this.fireImg1_i(), this.buyGroup_i(), this.getGroup_i(), this.img_using_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "battlefirepanel_item_new_20220209_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.tip2_i = function() {
        var e = new eui.Label;
        return this.tip2 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18.0229299363057,
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 150,
        e.x = 10,
        e.y = 183,
        e
    },
    i.txtTime_i = function() {
        var e = new eui.Label;
        return this.txtTime = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16.0203821656051,
        e.text = "VIP用户：30分钟\n普通用户：10分钟",
        e.textAlign = "center",
        e.textColor = 10734845,
        e.x = 15,
        e.y = 237,
        e
    },
    i.firename_i = function() {
        var e = new eui.Label;
        return this.firename = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 24.0305732484076,
        e.textColor = 12638719,
        e.x = 32,
        e.y = 7,
        e
    },
    i.fireImg1_i = function() {
        var e = new eui.Image;
        return this.fireImg1 = e,
        e.horizontalCenter = 0,
        e.x = 24,
        e.y = 50,
        e
    },
    i.buyGroup_i = function() {
        var e = new eui.Group;
        return this.buyGroup = e,
        e.visible = !1,
        e.x = 16,
        e.y = 281,
        e.elementsContent = [this._Image2_i(), this._Group1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "battlefirepanel_item_new_20220209_imgbtnbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 12,
        e.elementsContent = [this.imgStar_i(), this.txtPrice_i()],
        e
    },
    i.imgStar_i = function() {
        var e = new eui.Image;
        return this.imgStar = e,
        e.source = "battlefirepanel_item_new_20220209_imgstar_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtPrice_i = function() {
        var e = new eui.Label;
        return this.txtPrice = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "5",
        e.textColor = 10181146,
        e.x = 30,
        e.y = 1,
        e
    },
    i.getGroup_i = function() {
        var e = new eui.Group;
        return this.getGroup = e,
        e.visible = !1,
        e.x = 16,
        e.y = 281,
        e.elementsContent = [this._Image3_i(), this._Label1_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "battlefirepanel_item_new_20220209_imgbtnbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "免费领取",
        e.textColor = 10181146,
        e.verticalCenter = 0,
        e
    },
    i.img_using_i = function() {
        var e = new eui.Group;
        return this.img_using = e,
        e.height = 45,
        e.horizontalCenter = 0,
        e.visible = !1,
        e.width = 137,
        e.y = 281,
        e.elementsContent = [this._Image4_i(), this._Label2_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "battlefirepanel_item_new_20220209_imgusing_png",
        e.top = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "使用中",
        e.textColor = 5402292,
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/BattlefirepanelNew20220207Skin.exml"] = window.BattlefirepanelNew20220207Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["closeBtn", "imgStar", "numTxt", "list_viewport", "scroller_item"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.closeBtn_i(), this.imgStar_i(), this._Label1_i(), this.numTxt_i(), this.scroller_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "battlefirepanel_new_20220207_img1_png",
        e.x = 0,
        e.y = 1,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "battlefirepanel_new_20220207_img2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.closeBtn_i = function() {
        var e = new eui.Image;
        return this.closeBtn = e,
        e.source = "battlefirepanel_new_20220207_btnclose_png",
        e.x = 712,
        e.y = 1,
        e
    },
    i.imgStar_i = function() {
        var e = new eui.Image;
        return this.imgStar = e,
        e.height = 30,
        e.width = 30,
        e.x = 532,
        e.y = 2,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "VIP用户每日可免费领取任意一个战斗加成火焰",
        e.textColor = 5010360,
        e.x = 191,
        e.y = 397,
        e
    },
    i.numTxt_i = function() {
        var e = new eui.Label;
        return this.numTxt = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.textColor = 12834813,
        e.x = 574,
        e.y = 10,
        e
    },
    i.scroller_item_i = function() {
        var e = new eui.Scroller;
        return this.scroller_item = e,
        e.height = 340,
        e.left = 24,
        e.right = 24,
        e.y = 50,
        e.viewport = this.list_viewport_i(),
        e
    },
    i.list_viewport_i = function() {
        var e = new eui.List;
        return this.list_viewport = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 20,
        e
    },
    t
} (eui.Skin);