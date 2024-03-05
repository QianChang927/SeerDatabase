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
militaryReward; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.achieveId = 0,
            e.bitSets = [],
            e.tokenNum = 0,
            e.skinName = MilitrayrewardSkin,
            e.rbGrp = e.rb_Left1.group,
            e.selectId = e.rbGrp.selectedValue = 1,
            e.addEvent(),
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initData(),
            this.update()
        },
        i.prototype.initData = function() {
            this.draw.visible = 2 == this.selectId,
            this.exchange.visible = 1 == this.selectId;
            for (var t = function(t) {
                i["selected_" + t].visible = !1,
                i["icon_" + t].x = 32,
                i["icon_" + t].y = 58,
                i["icon_" + t].width = i["icon_" + t].height = 75,
                e.MilitaryConst.rewardInfo[t].isMark ? i["icon_" + t].source = ClientConfig.getMarkPath(e.MilitaryConst.rewardInfo[t].id) : i["icon_" + t].source = ClientConfig.getItemIcon(e.MilitaryConst.rewardInfo[t].id),
                ImageButtonUtil.add(i["icon_" + t],
                function() {
                    e.MilitaryConst.rewardInfo[t].isMark ? tipsPop.TipsPop.openCounterMarkPop({
                        ins: e.MilitaryConst.rewardInfo[t].id
                    }) : tipsPop.TipsPop.openItemPop({
                        id: e.MilitaryConst.rewardInfo[t].id
                    })
                },
                i),
                i["txx_name" + t].text = ItemXMLInfo.getName(e.MilitaryConst.rewardInfo[t].id),
                i["txx_num" + t].text = e.MilitaryConst.rewardInfo[t].num + ""
            },
            i = this, n = 0; n < e.MilitaryConst.rewardInfo.length; n++) t(n);
            this._list.itemRenderer = e.ExchangeItem,
            this._list.dataProvider = new eui.ArrayCollection(e.MilitaryConst.rewardInfo)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.grp_minitary,
            function() {
                var t = new e.PopShow;
                PopViewManager.getInstance().openView(t)
            },
            this),
            this.once(egret.Event.RENDER,
            function() {
                t.bgMask = LevelManager.appLevel.getChildByName("sp"),
                t.bgMask && t.bgMask.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onClose, t)
            },
            this),
            this.rbGrp.addEventListener(egret.Event.CHANGE, this.onChangeValue, this),
            ImageButtonUtil.add(this.btnDraw, this.drawReward, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(t)
            },
            this),
            EventManager.addEventListener("militaryBuyItem", this.update, this)
        },
        i.prototype.drawReward = function() {
            var e = this;
            return this.tokenNum < 60 ? void BubblerManager.getInstance().showText("荣誉令牌数量不足!") : void SocketConnection.sendByQueue(42380, [3, 0],
            function(t) {
                var i = t.data,
                n = i.readUnsignedInt(),
                r = {};
                e.touchChildren = !1,
                r.i = 1,
                AwardManager.pause(),
                egret.Tween.get(r, {
                    onChange: function() {
                        for (var t = (Math.floor(r.i) - 1) % 8, i = 0; 8 > i; i++) e["selected_" + i].visible = !1;
                        e["selected_" + t].visible = !0
                    }
                }).to({
                    i: 80 + n
                },
                6e3, egret.Ease.quadInOut).wait(300).call(function() {
                    e.touchChildren = !0,
                    e.btnDraw.touchEnabled = !0,
                    AwardManager.resume(),
                    e.update()
                })
            })
        },
        i.prototype.onChangeValue = function() {
            this.selectId = ~~this.rbGrp.selectedValue,
            this.draw.visible = 2 == this.selectId,
            this.exchange.visible = 1 == this.selectId
        },
        i.prototype.update = function() {
            var t = this,
            i = MainManager.actorInfo.totalAchieve;
            this.achieveInfo = AchieveManager.getAchieveInfo(i),
            this.achieveInfo.id < 5 ? this.achieveId = 0 : this.achieveInfo.id > 12 ? this.achieveId = 8 : this.achieveId = this.achieveInfo.id - 4,
            this.achieveId = Math.min(8, this.achieveId),
            this.bar_all.maximum = e.MilitaryConst.dataInfo[this.achieveId].tokenMax,
            this.minityIcon.source = ClientConfig.getAchieveRankIcon(e.MilitaryConst.dataInfo[this.achieveId].rankIconid),
            KTool.getMultiValue([101714],
            function(i) {
                t.tokenNum = i[0],
                t.bar_all.value = t.tokenNum,
                t.txt_Progress.text = i[0] + "/" + e.MilitaryConst.dataInfo[t.achieveId].tokenMax
            }),
            KTool.getBitSet([1000410],
            function(e) {
                t.bitSets = e,
                t.setBox()
            })
        },
        i.prototype.setBox = function() {
            var t = this;
            this._boxEffect && this._boxEffect.parent && this._boxEffect.parent.removeChild(this._boxEffect);
            var i = 1 === this.bitSets[0],
            n = !i,
            r = n ? "canopen": "open";
            this._boxEffect = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", r),
            this._boxEffect.touchEnabled = !0,
            this._boxEffect.scaleX = this.imgBox.width / this._boxEffect.width,
            this._boxEffect.scaleY = this.imgBox.height / this._boxEffect.height,
            this._boxEffect.x = this.imgBox.x,
            this._boxEffect.y = this.imgBox.y,
            this.imgBox.visible = !1,
            this.imgBox.parent.addChild(this._boxEffect),
            "open" == r ? this._boxEffect.gotoAndStop(i ? this._boxEffect.totalFrames: 0) : this._boxEffect.gotoAndPlay(0, -1),
            ImageButtonUtil.remove(this._boxEffect),
            "canopen" == r && ImageButtonUtil.add(this._boxEffect,
            function() {
                t.bar_all.value >= t.bar_all.maximum ? BubblerManager.getInstance().showText("荣誉令牌已达到上限，请使用后再领取") : SocketConnection.sendByQueue(42380, [4, t.achieveId],
                function() {
                    BubblerManager.getInstance().showText("获得" + e.MilitaryConst.dataInfo[t.achieveId].dailyToken + "荣誉令牌"),
                    t.update()
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            this.bgMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.MilitaryReward = t,
    __reflect(t.prototype, "militaryReward.MilitaryReward")
} (militaryReward || (militaryReward = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
militaryReward; !
function(e) {
    var t = function() {
        function e() {}
        return e.dataInfo = [{
            id: 1,
            name: "准尉以下",
            rankIconid: 4,
            dailyToken: 10,
            tokenMax: 100
        },
        {
            id: 2,
            name: "准尉",
            rankIconid: 5,
            dailyToken: 15,
            tokenMax: 150
        },
        {
            id: 3,
            name: "少尉",
            rankIconid: 6,
            dailyToken: 20,
            tokenMax: 200
        },
        {
            id: 4,
            name: "中尉",
            rankIconid: 7,
            dailyToken: 25,
            tokenMax: 250
        },
        {
            id: 5,
            name: "上尉",
            rankIconid: 8,
            dailyToken: 30,
            tokenMax: 300
        },
        {
            id: 6,
            name: "少校",
            rankIconid: 9,
            dailyToken: 35,
            tokenMax: 350
        },
        {
            id: 7,
            name: "中校",
            rankIconid: 10,
            dailyToken: 40,
            tokenMax: 400
        },
        {
            id: 8,
            name: "上校",
            rankIconid: 11,
            dailyToken: 45,
            tokenMax: 450
        },
        {
            id: 9,
            name: "大校",
            rankIconid: 12,
            dailyToken: 50,
            tokenMax: 500
        }],
        e.rewardInfo = [{
            choice: 1,
            id: 300157,
            num: 1,
            price: 10,
            isMark: !1
        },
        {
            choice: 2,
            id: 300018,
            num: 1,
            price: 10,
            isMark: !1
        },
        {
            choice: 3,
            id: 300004,
            num: 1,
            price: 20,
            isMark: !1
        },
        {
            choice: 4,
            id: 1400352,
            num: 5e4,
            price: 40,
            isMark: !1
        },
        {
            choice: 5,
            id: 400063,
            num: 1,
            price: 60,
            isMark: !1
        },
        {
            choice: 6,
            id: 300405,
            num: 1,
            price: 140,
            isMark: !1
        },
        {
            choice: 7,
            id: 41433,
            num: 1,
            price: 100,
            isMark: !0
        },
        {
            choice: 8,
            id: 41434,
            num: 1,
            price: 100,
            isMark: !0
        }],
        e
    } ();
    e.MilitaryConst = t,
    __reflect(t.prototype, "militaryReward.MilitaryConst")
} (militaryReward || (militaryReward = {}));
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
militaryReward; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.defaulyArrX = [],
            e.curIndex = 0,
            e.rewardData = [],
            e.skinName = militrayReward.PopshowSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._arry = new eui.ArrayCollection;
            for (var i = 0; i < this.grp_items.numChildren; i++) this.defaulyArrX.push(this.grp_items.getChildAt(i).x);
            this._custumScroller = new common.ui.CustomScroller(this._list.width, this._list.height, 148, 172, this._list.layout.gap, e.MilitaryItem, 199, .65, 1, 1, 1, this._list, this._arry, 100, null, common.ui.CustomScroller.DIR_TO_H),
            this.addChild(this._custumScroller),
            this.addEvent(),
            this._custumScroller.x = 51,
            this._custumScroller.y = 57,
            this.rewardData = KTool.clone(e.MilitaryConst.dataInfo),
            9 == this.rewardData.length && (this.rewardData.unshift(null), this.rewardData.push(null));
            var n, r = MainManager.actorInfo.totalAchieve,
            a = AchieveManager.getAchieveInfo(r);
            n = a.id < 5 ? 0 : a.id > 12 ? 8 : a.id - 4,
            n = Math.min(8, n),
            this.curIndex = this.rewardData[n + 1].id,
            this._arry.replaceAll(this.rewardData),
            this._custumScroller.goToNum(this.curIndex),
            this.showText()
        },
        i.prototype.addEvent = function() {
            this._custumScroller.addEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        i.prototype._onChangeScroller = function() {
            this.curIndex = this._custumScroller.getSelectIndex(),
            this.showText()
        },
        i.prototype.showText = function() {
            0 != this.curIndex && this.curIndex != this.rewardData.length && (this.dailyNum.text = this.rewardData[this.curIndex].dailyToken + "", this.allNum.text = this.rewardData[this.curIndex].tokenMax + "")
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this._custumScroller.removeEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this)
        },
        i
    } (PopView);
    e.PopShow = t,
    __reflect(t.prototype, "militaryReward.PopShow")
} (militaryReward || (militaryReward = {}));
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
militaryReward; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = ExchangeItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.buy,
            function() {
                KTool.getMultiValue([101714],
                function(e) {
                    return e[0] < t.data.price ? void BubblerManager.getInstance().showText("荣誉令牌不足！") : void SocketConnection.sendByQueue(42380, [2, t.data.choice],
                    function() {
                        EventManager.dispatchEventWith("militaryBuyItem")
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.icon,
            function() {
                t.data.isMark ? tipsPop.TipsPop.openCounterMarkPop({
                    ins: t.data.id
                }) : tipsPop.TipsPop.openItemPop({
                    id: t.data.id
                })
            },
            this)
        },
        t.prototype.dataChanged = function() {
            this.data && (this.txt_price.text = this.data.price, this.data.isMark ? this.icon.source = ClientConfig.getMarkPath(this.data.id) : this.icon.source = ClientConfig.getItemIcon(this.data.id), this.txt_Name.text = ItemXMLInfo.getName(this.data.id), this.txx_num.text = this.data.num + "")
        },
        t
    } (eui.ItemRenderer);
    e.ExchangeItem = t,
    __reflect(t.prototype, "militaryReward.ExchangeItem")
} (militaryReward || (militaryReward = {}));
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
militaryReward; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = MilitaryItemSkin,
            t
        }
        return __extends(t, e),
        Object.defineProperty(t.prototype, "isMiddle", {
            get: function() {
                return this._isMiddle
            },
            set: function(e) {
                this._isMiddle = e,
                1 == e ? this.scaleX = this.scaleY = 1 : this.scaleX = this.scaleY = .65
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.dataChanged = function() {
            this.data ? (this.grp_item.visible = !0, this.icon.source = ClientConfig.getAchieveRankIcon(this.data.rankIconid), this.minitaryName.text = this.data.name) : this.grp_item.visible = !1
        },
        t
    } (eui.ItemRenderer);
    e.MilitaryItem = t,
    __reflect(t.prototype, "militaryReward.MilitaryItem")
} (militaryReward || (militaryReward = {})),
window.militrayReward = window.militrayReward || {};
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
generateEUI.paths["resource/eui_skins/ExchangeItemSkin.exml"] = window.ExchangeItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_pethecheng", "txt_price", "buy", "icon", "txt_Name", "txx_num"],
        this.height = 200,
        this.width = 137,
        this.elementsContent = [this._Image1_i(), this.buy_i(), this.icon_i(), this.txt_Name_i(), this.txx_num_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_exchangebg_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    i.buy_i = function() {
        var e = new eui.Group;
        return this.buy = e,
        e.x = 0,
        e.y = 167,
        e.elementsContent = [this._Image2_i(), this.txt_pethecheng_i(), this.txt_price_i(), this._Image3_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_zu_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_pethecheng_i = function() {
        var e = new eui.Label;
        return this.txt_pethecheng = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "购买",
        e.textColor = 10181146,
        e.x = 86,
        e.y = 9,
        e
    },
    i.txt_price_i = function() {
        var e = new eui.Label;
        return this.txt_price = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 10181146,
        e.x = 48,
        e.y = 8,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_1718617_kb_2_png",
        e.x = 13,
        e.y = 5,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 75,
        e.source = "militrayreward_sed_kb_png",
        e.width = 75,
        e.x = 33,
        e.y = 62,
        e
    },
    i.txt_Name_i = function() {
        var e = new eui.Label;
        return this.txt_Name = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 140,
        e.x = 0,
        e.y = 6,
        e
    },
    i.txx_num_i = function() {
        var e = new eui.Label;
        return this.txx_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.width = 78.735,
        e.x = 33.544,
        e.y = 122.917,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryItemSkin.exml"] = window.MilitaryItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["minitaryName", "icon", "grp_item"],
        this.height = 172,
        this.width = 148,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_item_i = function() {
        var e = new eui.Group;
        return this.grp_item = e,
        e.anchorOffsetX = 72,
        e.anchorOffsetY = 92,
        e.x = 72,
        e.y = 92,
        e.elementsContent = [this._Image1_i(), this.minitaryName_i(), this.icon_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "mr_popshow_z_14_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.minitaryName_i = function() {
        var e = new eui.Label;
        return this.minitaryName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "军衔名称",
        e.textAlign = "center",
        e.textColor = 14740735,
        e.width = 72,
        e.x = 38,
        e.y = 133,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 78,
        e.source = "mr_popshow_3_png",
        e.width = 78,
        e.x = 35,
        e.y = 45,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitrayrewardSkin.exml"] = window.MilitrayrewardSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "rb_Left1", "rb_Left2", "btnDraw", "txtCoin2", "selected_0", "icon_0", "txx_name0", "txx_num0", "item_0", "icon_1", "txx_name1", "txx_num1", "selected_1", "item_1", "icon_2", "txx_name2", "txx_num2", "selected_2", "item_2", "icon_3", "txx_name3", "txx_num3", "selected_3", "item_3", "icon_4", "txx_name4", "txx_num4", "selected_4", "item_4", "icon_5", "txx_name5", "txx_num5", "selected_5", "item_5", "icon_6", "txx_name6", "txx_num6", "selected_6", "item_6", "icon_7", "txx_name7", "txx_num7", "selected_7", "item_7", "draw", "_list", "_scolExchange", "exchangebg", "zu_1", "txt_pethecheng", "a_999", "a_252", "buy", "icon", "txt_Name", "exchange", "bar_all", "progress_bg", "progress_2", "progress", "minityIcon", "grp_minitary", "imgBox", "txt_Progress", "topside", "btnClose"],
        this.height = 629,
        this.width = 996,
        this.elementsContent = [this.bg_i(), this.rb_Left1_i(), this.rb_Left2_i(), this.draw_i(), this.exchange_i(), this.topside_i(), this.btnClose_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "militrayRewardLeft_left1_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "militrayRewardLeft_left1_down_png"), new eui.SetProperty("_Image1", "x", -5), new eui.SetProperty("_Image1", "y", -3)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "militrayRewardLeft_left2_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "militrayRewardLeft_left2_down_png"), new eui.SetProperty("_Image1", "x", -5), new eui.SetProperty("_Image1", "y", -3)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "militrayreward_progress_bg_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(94, 5, 93, 5),
            e.source = "militrayreward_progress_png",
            e.visible = !0,
            e.x = 15,
            e.y = 5,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "militrayreward_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.rb_Left1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_Left1 = e,
        e.groupName = "left_tab",
        e.value = "1",
        e.x = 44,
        e.y = 233,
        e.skinName = i,
        e
    },
    a.rb_Left2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_Left2 = e,
        e.groupName = "left_tab",
        e.value = "2",
        e.x = 44,
        e.y = 323,
        e.skinName = n,
        e
    },
    a.draw_i = function() {
        var e = new eui.Group;
        return this.draw = e,
        e.visible = !0,
        e.x = 283,
        e.y = 157,
        e.elementsContent = [this.btnDraw_i(), this._Image2_i(), this._Label2_i(), this.txtCoin2_i(), this._Image3_i(), this._Group1_i()],
        e
    },
    a.btnDraw_i = function() {
        var e = new eui.Group;
        return this.btnDraw = e,
        e.x = 201,
        e.y = 381,
        e.elementsContent = [this._Image1_i(), this._Label1_i()],
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_yellow_png",
        e.width = 134,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "幸运抽奖",
        e.textColor = 10181146,
        e.x = 27,
        e.y = 13,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_1718617_kb_2_png",
        e.x = 121,
        e.y = 389,
        e
    },
    a._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "均等概率获得各物品",
        e.textColor = 12834813,
        e.x = 346,
        e.y = 392,
        e
    },
    a.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "×60",
        e.textColor = 12834813,
        e.visible = !0,
        e.x = 153,
        e.y = 396,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_xyc_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 365,
        e.width = 627,
        e.x = 3,
        e.y = 4,
        e.layout = this._TileLayout1_i(),
        e.elementsContent = [this.item_0_i(), this.item_1_i(), this.item_2_i(), this.item_3_i(), this.item_4_i(), this.item_5_i(), this.item_6_i(), this.item_7_i()],
        e
    },
    a._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 18,
        e.paddingLeft = 2,
        e.requestedColumnCount = 4,
        e.requestedRowCount = 2,
        e.verticalGap = 16,
        e
    },
    a.item_0_i = function() {
        var e = new eui.Group;
        return this.item_0 = e,
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this.selected_0_i(), this.icon_0_i(), this.txx_name0_i(), this.txx_num0_i()],
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.selected_0_i = function() {
        var e = new eui.Image;
        return this.selected_0 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "militrayreward_selected_png",
        e.visible = !0,
        e.x = -3,
        e.y = -4,
        e
    },
    a.icon_0_i = function() {
        var e = new eui.Image;
        return this.icon_0 = e,
        e.height = 75,
        e.source = "militrayreward_sed_kb_png",
        e.width = 75,
        e.x = 32,
        e.y = 58,
        e
    },
    a.txx_name0_i = function() {
        var e = new eui.Label;
        return this.txx_name0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 130,
        e.x = 5,
        e.y = 8,
        e
    },
    a.txx_num0_i = function() {
        var e = new eui.Label;
        return this.txx_num0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.width = 78.735,
        e.x = 28.977,
        e.y = 117.436,
        e
    },
    a.item_1_i = function() {
        var e = new eui.Group;
        return this.item_1 = e,
        e.visible = !0,
        e.x = 11,
        e.y = 10,
        e.elementsContent = [this._Image5_i(), this.icon_1_i(), this.txx_name1_i(), this.txx_num1_i(), this.selected_1_i()],
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.source = "militrayreward_sed_kb_png",
        e.x = 32,
        e.y = 50,
        e
    },
    a.txx_name1_i = function() {
        var e = new eui.Label;
        return this.txx_name1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 130,
        e.x = 5,
        e.y = 8,
        e
    },
    a.txx_num1_i = function() {
        var e = new eui.Label;
        return this.txx_num1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.width = 78.735,
        e.x = 28.977,
        e.y = 117.436,
        e
    },
    a.selected_1_i = function() {
        var e = new eui.Image;
        return this.selected_1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "militrayreward_selected_png",
        e.visible = !0,
        e.x = -3,
        e.y = -4,
        e
    },
    a.item_2_i = function() {
        var e = new eui.Group;
        return this.item_2 = e,
        e.visible = !0,
        e.x = 21,
        e.y = 20,
        e.elementsContent = [this._Image6_i(), this.icon_2_i(), this.txx_name2_i(), this.txx_num2_i(), this.selected_2_i()],
        e
    },
    a._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.icon_2_i = function() {
        var e = new eui.Image;
        return this.icon_2 = e,
        e.source = "militrayreward_sed_kb_png",
        e.x = 32,
        e.y = 50,
        e
    },
    a.txx_name2_i = function() {
        var e = new eui.Label;
        return this.txx_name2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 130,
        e.x = 5,
        e.y = 8,
        e
    },
    a.txx_num2_i = function() {
        var e = new eui.Label;
        return this.txx_num2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.width = 78.735,
        e.x = 28.977,
        e.y = 117.436,
        e
    },
    a.selected_2_i = function() {
        var e = new eui.Image;
        return this.selected_2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "militrayreward_selected_png",
        e.visible = !0,
        e.x = -3,
        e.y = -4,
        e
    },
    a.item_3_i = function() {
        var e = new eui.Group;
        return this.item_3 = e,
        e.visible = !0,
        e.x = 31,
        e.y = 30,
        e.elementsContent = [this._Image7_i(), this.icon_3_i(), this.txx_name3_i(), this.txx_num3_i(), this.selected_3_i()],
        e
    },
    a._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.icon_3_i = function() {
        var e = new eui.Image;
        return this.icon_3 = e,
        e.source = "militrayreward_sed_kb_png",
        e.x = 32,
        e.y = 50,
        e
    },
    a.txx_name3_i = function() {
        var e = new eui.Label;
        return this.txx_name3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 130,
        e.x = 5,
        e.y = 8,
        e
    },
    a.txx_num3_i = function() {
        var e = new eui.Label;
        return this.txx_num3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.width = 78.735,
        e.x = 28.977,
        e.y = 117.436,
        e
    },
    a.selected_3_i = function() {
        var e = new eui.Image;
        return this.selected_3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "militrayreward_selected_png",
        e.visible = !0,
        e.x = -3,
        e.y = -4,
        e
    },
    a.item_4_i = function() {
        var e = new eui.Group;
        return this.item_4 = e,
        e.visible = !0,
        e.x = 41,
        e.y = 40,
        e.elementsContent = [this._Image8_i(), this.icon_4_i(), this.txx_name4_i(), this.txx_num4_i(), this.selected_4_i()],
        e
    },
    a._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.icon_4_i = function() {
        var e = new eui.Image;
        return this.icon_4 = e,
        e.source = "militrayreward_sed_kb_png",
        e.x = 32,
        e.y = 50,
        e
    },
    a.txx_name4_i = function() {
        var e = new eui.Label;
        return this.txx_name4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 130,
        e.x = 5,
        e.y = 8,
        e
    },
    a.txx_num4_i = function() {
        var e = new eui.Label;
        return this.txx_num4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.width = 78.735,
        e.x = 28.977,
        e.y = 117.436,
        e
    },
    a.selected_4_i = function() {
        var e = new eui.Image;
        return this.selected_4 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "militrayreward_selected_png",
        e.visible = !0,
        e.x = -3,
        e.y = -4,
        e
    },
    a.item_5_i = function() {
        var e = new eui.Group;
        return this.item_5 = e,
        e.visible = !0,
        e.x = 51,
        e.y = 50,
        e.elementsContent = [this._Image9_i(), this.icon_5_i(), this.txx_name5_i(), this.txx_num5_i(), this.selected_5_i()],
        e
    },
    a._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_itembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a.icon_5_i = function() {
        var e = new eui.Image;
        return this.icon_5 = e,
        e.source = "militrayreward_sed_kb_png",
        e.x = 32,
        e.y = 50,
        e
    },
    a.txx_name5_i = function() {
        var e = new eui.Label;
        return this.txx_name5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 130,
        e.x = 5,
        e.y = 8,
        e
    },
    a.txx_num5_i = function() {
        var e = new eui.Label;
        return this.txx_num5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.width = 78.735,
        e.x = 28.977,
        e.y = 117.436,
        e
    },
    a.selected_5_i = function() {
        var e = new eui.Image;
        return this.selected_5 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "militrayreward_selected_png",
        e.visible = !0,
        e.x = -3,
        e.y = -4,
        e
    },
    a.item_6_i = function() {
        var e = new eui.Group;
        return this.item_6 = e,
        e.visible = !0,
        e.x = 61,
        e.y = 60,
        e.elementsContent = [this._Image10_i(), this.icon_6_i(), this.txx_name6_i(), this.txx_num6_i(), this.selected_6_i()],
        e
    },
    a._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.icon_6_i = function() {
        var e = new eui.Image;
        return this.icon_6 = e,
        e.source = "militrayreward_sed_kb_png",
        e.x = 32,
        e.y = 50,
        e
    },
    a.txx_name6_i = function() {
        var e = new eui.Label;
        return this.txx_name6 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 130,
        e.x = 5,
        e.y = 8,
        e
    },
    a.txx_num6_i = function() {
        var e = new eui.Label;
        return this.txx_num6 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.width = 78.735,
        e.x = 28.977,
        e.y = 117.436,
        e
    },
    a.selected_6_i = function() {
        var e = new eui.Image;
        return this.selected_6 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "militrayreward_selected_png",
        e.visible = !0,
        e.x = -3,
        e.y = -4,
        e
    },
    a.item_7_i = function() {
        var e = new eui.Group;
        return this.item_7 = e,
        e.visible = !0,
        e.x = 71,
        e.y = 70,
        e.elementsContent = [this._Image11_i(), this.icon_7_i(), this.txx_name7_i(), this.txx_num7_i(), this.selected_7_i()],
        e
    },
    a._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.icon_7_i = function() {
        var e = new eui.Image;
        return this.icon_7 = e,
        e.source = "militrayreward_sed_kb_png",
        e.x = 32,
        e.y = 50,
        e
    },
    a.txx_name7_i = function() {
        var e = new eui.Label;
        return this.txx_name7 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 130,
        e.x = 5,
        e.y = 8,
        e
    },
    a.txx_num7_i = function() {
        var e = new eui.Label;
        return this.txx_num7 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.width = 78.735,
        e.x = 28.977,
        e.y = 117.436,
        e
    },
    a.selected_7_i = function() {
        var e = new eui.Image;
        return this.selected_7 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "militrayreward_selected_png",
        e.visible = !0,
        e.x = -3,
        e.y = -4,
        e
    },
    a.exchange_i = function() {
        var e = new eui.Group;
        return this.exchange = e,
        e.visible = !1,
        e.x = 287,
        e.y = 162,
        e.elementsContent = [this._scolExchange_i(), this._Group2_i()],
        e
    },
    a._scolExchange_i = function() {
        var e = new eui.Scroller;
        return this._scolExchange = e,
        e.height = 415,
        e.width = 624,
        e.x = 2,
        e.y = 0,
        e.viewport = this._list_i(),
        e
    },
    a._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 200,
        e.width = 200,
        e.x = 63,
        e.y = 53,
        e.layout = this._TileLayout2_i(),
        e
    },
    a._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 25,
        e
    },
    a._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.exchangebg_i(), this.buy_i(), this.icon_i(), this.txt_Name_i(), this._Image12_i()],
        e
    },
    a.exchangebg_i = function() {
        var e = new eui.Image;
        return this.exchangebg = e,
        e.source = "militrayreward_exchangebg_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    a.buy_i = function() {
        var e = new eui.Group;
        return this.buy = e,
        e.x = 0,
        e.y = 167,
        e.elementsContent = [this.zu_1_i(), this.txt_pethecheng_i(), this.a_999_i(), this.a_252_i()],
        e
    },
    a.zu_1_i = function() {
        var e = new eui.Image;
        return this.zu_1 = e,
        e.source = "militrayreward_zu_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.txt_pethecheng_i = function() {
        var e = new eui.Label;
        return this.txt_pethecheng = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "购买",
        e.textColor = 10181146,
        e.x = 86,
        e.y = 9,
        e
    },
    a.a_999_i = function() {
        var e = new eui.Label;
        return this.a_999 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 10181146,
        e.x = 48,
        e.y = 10,
        e
    },
    a.a_252_i = function() {
        var e = new eui.Image;
        return this.a_252 = e,
        e.source = "militrayreward_252_png",
        e.x = 13,
        e.y = 7,
        e
    },
    a.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "militrayreward_sed_kb_png",
        e.x = 33,
        e.y = 80,
        e
    },
    a.txt_Name_i = function() {
        var e = new eui.Label;
        return this.txt_Name = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "道具名称",
        e.textColor = 4187130,
        e.x = 31,
        e.y = 6,
        e
    },
    a._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_djpsd_kb_8_png",
        e.visible = !0,
        e.x = 2,
        e.y = 0,
        e
    },
    a.topside_i = function() {
        var e = new eui.Group;
        return this.topside = e,
        e.visible = !0,
        e.x = 288,
        e.y = 56,
        e.elementsContent = [this._Image13_i(), this.bar_all_i(), this.progress_i(), this._Image14_i(), this._Label3_i(), this.grp_minitary_i(), this._Image16_i(), this.imgBox_i(), this.txt_Progress_i()],
        e
    },
    a._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_juxing_919_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.bar_all_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_all = e,
        e.height = 23,
        e.value = 100,
        e.x = 131,
        e.y = 61,
        e.skinName = r,
        e
    },
    a.progress_i = function() {
        var e = new eui.Group;
        return this.progress = e,
        e.visible = !1,
        e.x = 131,
        e.y = 61,
        e.elementsContent = [this.progress_bg_i(), this.progress_2_i()],
        e
    },
    a.progress_bg_i = function() {
        var e = new eui.Image;
        return this.progress_bg = e,
        e.source = "militrayreward_progress_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.progress_2_i = function() {
        var e = new eui.Image;
        return this.progress_2 = e,
        e.source = "militrayreward_progress_png",
        e.x = 15,
        e.y = 5,
        e
    },
    a._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_btnbuy_png",
        e.x = 153,
        e.y = 32,
        e
    },
    a._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "每日签到可获得荣誉令牌",
        e.textColor = 8757203,
        e.x = 322,
        e.y = 35,
        e
    },
    a.grp_minitary_i = function() {
        var e = new eui.Group;
        return this.grp_minitary = e,
        e.x = 34,
        e.y = 14,
        e.elementsContent = [this._Image15_i(), this.minityIcon_i()],
        e
    },
    a._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_minitybg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.minityIcon_i = function() {
        var e = new eui.Image;
        return this.minityIcon = e,
        e.horizontalCenter = -.5,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "militrayreward_minityicon_png",
        e.verticalCenter = -1,
        e
    },
    a._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "militrayreward_zu_115_png",
        e.x = 257,
        e.y = 37,
        e
    },
    a.imgBox_i = function() {
        var e = new eui.Image;
        return this.imgBox = e,
        e.source = "militrayreward_imgbox_png",
        e.x = 536,
        e.y = 31,
        e
    },
    a.txt_Progress_i = function() {
        var e = new eui.Label;
        return this.txt_Progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "999/999",
        e.textColor = 5752317,
        e.visible = !0,
        e.x = 174,
        e.y = 33,
        e
    },
    a.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 32,
        e.source = "common_pop_btn_close_png",
        e.width = 33,
        e.x = 963,
        e.y = 26,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PopshowSkin.exml"] = window.militrayReward.PopshowSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["popbg", "dailyNum", "allNum", "num", "_scorl", "item2", "item1", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "grp_items", "minitaryName", "icon", "grp_icon", "_list", "mili", "btnClose"],
        this.height = 326,
        this.width = 554,
        this.elementsContent = [this.popbg_i(), this.num_i(), this.mili_i(), this.btnClose_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.popbg_i = function() {
        var e = new eui.Image;
        return this.popbg = e,
        e.source = "mr_popshow_popbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.num_i = function() {
        var e = new eui.Group;
        return this.num = e,
        e.x = 180,
        e.y = 242,
        e.elementsContent = [this._Label1_i(), this.dailyNum_i(), this._Label2_i(), this.allNum_i()],
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0243318623434,
        e.text = "每日令牌：",
        e.textColor = 16777215,
        e.x = 0,
        e.y = 0,
        e
    },
    i.dailyNum_i = function() {
        var e = new eui.Label;
        return this.dailyNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textColor = 12834813,
        e.x = 99,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0243318623434,
        e.text = "令牌数量：",
        e.textColor = 16777215,
        e.x = 0,
        e.y = 35,
        e
    },
    i.allNum_i = function() {
        var e = new eui.Label;
        return this.allNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textColor = 12834813,
        e.x = 99,
        e.y = 35,
        e
    },
    i.mili_i = function() {
        var e = new eui.Group;
        return this.mili = e,
        e.visible = !1,
        e.x = 51,
        e.y = 57,
        e.elementsContent = [this._scorl_i(), this.grp_items_i(), this._Image1_i(), this._Image2_i(), this.grp_icon_i(), this._list_i()],
        e
    },
    i._scorl_i = function() {
        var e = new eui.Scroller;
        return this._scorl = e,
        e.height = 172,
        e.width = 400,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_items_i = function() {
        var e = new eui.Group;
        return this.grp_items = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.item2_i(), this.item1_i(), this.item3_i(), this.item4_i(), this.item5_i(), this.item6_i(), this.item7_i(), this.item8_i(), this.item9_i()],
        e
    },
    i.item2_i = function() {
        var e = new militaryReward.MilitaryItem;
        return this.item2 = e,
        e.anchorOffsetX = 74,
        e.skinName = "MilitaryItemSkin",
        e.visible = !0,
        e.x = 193,
        e.y = 0,
        e
    },
    i.item1_i = function() {
        var e = new militaryReward.MilitaryItem;
        return this.item1 = e,
        e.anchorOffsetX = 74,
        e.scaleX = .65,
        e.scaleY = .65,
        e.skinName = "MilitaryItemSkin",
        e.visible = !0,
        e.x = 48,
        e.y = 31,
        e
    },
    i.item3_i = function() {
        var e = new militaryReward.MilitaryItem;
        return this.item3 = e,
        e.anchorOffsetX = 74,
        e.scaleX = .65,
        e.scaleY = .65,
        e.skinName = "MilitaryItemSkin",
        e.visible = !0,
        e.x = 350,
        e.y = 31,
        e
    },
    i.item4_i = function() {
        var e = new militaryReward.MilitaryItem;
        return this.item4 = e,
        e.anchorOffsetX = 74,
        e.scaleX = .65,
        e.scaleY = .65,
        e.skinName = "MilitaryItemSkin",
        e.visible = !0,
        e.x = 495,
        e.y = 31,
        e
    },
    i.item5_i = function() {
        var e = new militaryReward.MilitaryItem;
        return this.item5 = e,
        e.anchorOffsetX = 74,
        e.scaleX = .65,
        e.scaleY = .65,
        e.skinName = "MilitaryItemSkin",
        e.visible = !0,
        e.x = 640,
        e.y = 31,
        e
    },
    i.item6_i = function() {
        var e = new militaryReward.MilitaryItem;
        return this.item6 = e,
        e.anchorOffsetX = 74,
        e.scaleX = .65,
        e.scaleY = .65,
        e.skinName = "MilitaryItemSkin",
        e.visible = !0,
        e.x = 785,
        e.y = 31,
        e
    },
    i.item7_i = function() {
        var e = new militaryReward.MilitaryItem;
        return this.item7 = e,
        e.anchorOffsetX = 74,
        e.scaleX = .65,
        e.scaleY = .65,
        e.skinName = "MilitaryItemSkin",
        e.visible = !0,
        e.x = 930,
        e.y = 31,
        e
    },
    i.item8_i = function() {
        var e = new militaryReward.MilitaryItem;
        return this.item8 = e,
        e.anchorOffsetX = 74,
        e.scaleX = .65,
        e.scaleY = .65,
        e.skinName = "MilitaryItemSkin",
        e.visible = !0,
        e.x = 1075,
        e.y = 31,
        e
    },
    i.item9_i = function() {
        var e = new militaryReward.MilitaryItem;
        return this.item9 = e,
        e.anchorOffsetX = 74,
        e.scaleX = .65,
        e.scaleY = .65,
        e.skinName = "MilitaryItemSkin",
        e.visible = !0,
        e.x = 1220,
        e.y = 31,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "mr_popshow_z_14_kb_2_png",
        e.visible = !1,
        e.x = 292,
        e.y = 31,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "mr_popshow_z_14_kb_3_png",
        e.visible = !1,
        e.x = 0,
        e.y = 31,
        e
    },
    i.grp_icon_i = function() {
        var e = new eui.Group;
        return this.grp_icon = e,
        e.visible = !1,
        e.x = 119,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.minitaryName_i(), this.icon_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "mr_popshow_z_14_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.minitaryName_i = function() {
        var e = new eui.Label;
        return this.minitaryName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "军衔名称",
        e.textColor = 14740735,
        e.x = 38,
        e.y = 133,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "mr_popshow_3_png",
        e.x = 35,
        e.y = 51,
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 172,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 400,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 33,
        e.source = "common_pop_btn_close_png",
        e.width = 34,
        e.x = 520,
        e.y = 1,
        e
    },
    t
} (eui.Skin);