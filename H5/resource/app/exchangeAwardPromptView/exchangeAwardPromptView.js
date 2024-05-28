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
exchangeAwardPromptView; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._currentExchangeNum = 1,
            e._handCoinNum = -1,
            e
        }
        return __extends(e, t),
        e.prototype._parseData = function() {
            this._ins = this._data.ins,
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            this._popCfg = this._ins && this._ins.POPID && config.BuyPopup.getItem(this._ins.POPID) || null
        },
        e.prototype._upDateView = function() {
            this._setCoinHand()
        },
        e.prototype._setCoinHand = function() {
            var t = this;
            if (this._ins) if (this._ins.cointype) switch (this._ins.cointype) {
            case 1:
                this._handCoinNum = MainManager.actorInfo.coins,
                this._updatePanel();
                break;
            case 2:
                UserInfoManager.getDiamond(function(e) {
                    t._handCoinNum = e,
                    t._updatePanel()
                },
                this);
                break;
            case 3:
            case 4:
            case 5:
            case 24:
                this._handCoinNum = ItemManager.getNumByID(this._ins.coinid),
                this._updatePanel();
                break;
            default:
                this._handCoinNum = ItemManager.getNumByID(this._ins.coinid),
                this._updatePanel()
            } else this._ins.itemID ? UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this) : this._ins.SkinID ? (this._handCoinNum = ItemManager.getNumByID(1723116), this._updatePanel()) : this._ins.coinid && (this._handCoinNum = ItemManager.getNumByID(this._ins.coinid), this._updatePanel())
        },
        e.prototype._updatePanel = function() {},
        e.prototype._doExchange = function() {
            if (this._currentExchangeNum * (this._data.isDiscount ? .625 * this._ins.price: this._ins.price) > this._handCoinNum) return void BubblerManager.getInstance().showText("所需" + ItemXMLInfo.getName(this._ins.coinid) + "不够！");
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        e.prototype._onTouchImageButtonHandler = function(t) {},
        e.prototype.destroy = function() {
            this._ins = null,
            this._callBack = null,
            this._caller = null,
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.BaseView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.BaseView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._arry = new eui.ArrayCollection,
            i.skinName = t.SuitViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller_item.viewport = this.viewport_list,
            this.viewport_list.itemRenderer = t.suitItemIcon,
            this.viewport_list.dataProvider = this._arry
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_exchange, this._onTouchImageButtonHandler, this),
            this.hero_show.addEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this),
            this.viewport_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchClothesHanlder, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.hero_show.removeEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this),
            this.viewport_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchClothesHanlder, this)
        },
        i.prototype._onTouchClothesHanlder = function(t) {
            var e = {};
            e.clothesId = t.item,
            tipsPop.TipsPop.openClothesPop(e)
        },
        i.prototype._onSetTextureComplete = function(t) {
            var e = t.currentTarget;
            DisplayUtil.keepEqualDis(e, 181, 135, !0),
            e.anchorOffsetX = e.width / 2,
            e.anchorOffsetY = e.height,
            e.x = e.y = 0
        },
        i.prototype._parseData = function() {
            e.prototype._parseData.call(this)
        },
        i.prototype._updatePanel = function() {
            this._arry.replaceAll(SuitXMLInfo.getCloths(this._popCfg.describ_id)),
            this._arry.refresh();
            var t = ClientConfig.getResPath("assets/item/cloth/suiticon/" + this._popCfg.describ_id + ".png");
            this.hero_show.source = t,
            this._popCfg.name ? this.txt_suit.text = this._popCfg.name: this.txt_suit.text = SuitXMLInfo.getName(this._popCfg.describ_id),
            this.txt_num.text = this._ins.price ? this._ins.price * this._currentExchangeNum + "": "免费",
            this.icon.source = ClientConfig.getItemIcon(this._ins.coinid),
            0 == this._popCfg.describ_type ? this.txt_normal.text = this._popCfg.describ_txt: this.txt_normal.text = SuitXMLInfo.getSuitNormalDesc(this._popCfg.describ_id) + this._popCfg.describ_txt;
            var e = ItemSeXMLInfo.getSuitEff(this._popCfg.describ_id);
            this.Grp_suitEff.visible = "" !== e,
            this.Grp_suitEff.visible && (this.txt_desc.text = e)
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close:
                this.hide();
                break;
            case this.imgBtn_exchange:
                this._doExchange()
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.suitView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.suitView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.thumbOffSetLeft = 10,
            e.thumbOffSetRight = 10,
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
                i = t[0] - t[2],
                n = i > 0 ? (this.pendingValue - t[2]) / i * e: 0,
                o = this.track.localToGlobal(n, 0, egret.$TempPoint),
                r = o.x,
                s = o.y,
                a = this.thumb.$parent.globalToLocal(r, s, egret.$TempPoint).x,
                _ = egret.$TempRectangle;
                if (this.thumb.getLayoutBounds(_), this.thumb.setLayoutBoundsPosition(Math.round(a) - this.thumbOffSetLeft, _.y), this.trackHighlight && this.trackHighlight.$parent) {
                    var h = this.trackHighlight.$parent.globalToLocal(r, s, egret.$TempPoint).x - n;
                    this.trackHighlight.x = Math.round(h),
                    this.trackHighlight.width = Math.round(n)
                }
            }
        },
        e
    } (eui.HSlider);
    t.ExchangeHSlider = e,
    __reflect(e.prototype, "exchangeAwardPromptView.ExchangeHSlider")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            i.skinName = t.SuitIconSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            this.icon_item.source = ClientConfig.getclothicon(this.data)
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.parent && this.parent.removeChild(this)
        },
        i
    } (eui.ItemRenderer);
    t.suitItemIcon = e,
    __reflect(e.prototype, "exchangeAwardPromptView.suitItemIcon")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "AchieveViewSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this.hide, this),
            ImageButtonUtil.add(this.btnBuy, this._doExchange, this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype._updatePanel = function() {
            var t = Math.floor(this._popCfg.describ_id / 100),
            e = this._popCfg.describ_id % 100,
            i = AchieveXMLInfo.getRule(t, e);
            this._popCfg.name ? this.txt_name.text = this._popCfg.name: this.txt_name.text = i.Desc,
            this.txt_point.text = "+" + i.AchievementPoint,
            i.SpeNameBonus ? (this.txt_title.text = "对应称号：", this.txtTitle.text = AchieveXMLInfo.getTitle(i.SpeNameBonus), this.txt_effect.visible = this.txtEffect.visible = !0, this.txtTitle.visible = !0, this.imgLine.visible = !0, 0 == this._popCfg.describ_type ? this.txt_effect.text = this._popCfg.describ_txt: this.txt_effect.text = AchieveXMLInfo.getTitleEffDesc(i.SpeNameBonus) + this._popCfg.describ_txt) : (this.txt_title.text = "未附带称号", this.txtTitle.visible = !1, this.imgLine.visible = !1, this.txt_effect.visible = this.txtEffect.visible = !1),
            this.iconCost.source = ClientConfig.getItemIcon(this._ins.coinid),
            this.txt_cost.text = this._ins.price + ""
        },
        e
    } (t.BaseView);
    t.achieveView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.achieveView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.TYPE_ARR = ["攻击", "防御", "特攻", "特防", "速度", "体力"],
            i.skinName = t.CounterMarkViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_exchange, this._onTouchImageButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close:
                this.hide();
                break;
            case this.imgBtn_exchange:
                this._doExchange()
            }
        },
        i.prototype._updatePanel = function() {
            this.imgMark.source = CountermarkXMLInfo.getIconURL(this._popCfg.describ_id),
            this.icon_cost.source = ClientConfig.getItemIcon(this._ins.coinid),
            this.txt_costItem.text = "" + (this._data.isDiscount ? .625 * this._ins.price: this._ins.price),
            this._popCfg.name ? this.txt_exchangeName.text = this._popCfg.name: this.txt_exchangeName.text = ItemXMLInfo.getName(this._popCfg.describ_id);
            var t, e = CountermarkXMLInfo.getBaseAttriValue(this._popCfg.describ_id),
            i = CountermarkXMLInfo.getMaxAttriValue(this._popCfg.describ_id);
            for (t = 0; t < e.length; t++) this["txt_attr_name_" + t].text = this.TYPE_ARR[t],
            this["txt_attr_" + t].text = "+" + e[t] + "/" + i[t];
            var n = CountermarkXMLInfo.getExtraAttriValue(this._popCfg.describ_id);
            if (this.extra.visible = n && n.length > 0, this.txt_yc0.visible = !this.extra.visible, this.extra.visible) for (var t = 0; 6 > t; t++) this["txt_extr_name_" + t].text = this.TYPE_ARR[t],
            this["txt_extra_" + t].text = "+" + n[t]
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.counterMarkView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.counterMarkView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.EquipmentViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            this.mallCfg = this._data.ins
        },
        i.prototype._upDateView = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this)
        },
        i.prototype._updatePanel = function() {
            this.icon_item.source = ClientConfig.getclothicon(this.mallCfg.itemID),
            this.txt_name.text = this.mallCfg.name;
            var t = ItemSeXMLInfo.getItemDes(this.mallCfg.itemID, 0);
            this.txt_desc.text = t ? t: "无",
            this.iconCost.source = 2 == this.mallCfg.coins ? ClientConfig.getItemIcon(1) : ClientConfig.getItemIcon(5),
            this._updateExchangeInfo()
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close:
                this.hide();
                break;
            case this.btnBuy:
                this._doExchange()
            }
        },
        i.prototype._doExchange = function() {
            if (0 == this._currentExchangeNum) return void BubblerManager.getInstance().showText("请选择购买数量");
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        i.prototype._updateExchangeInfo = function() {
            if (2 == this.mallCfg.coins) var t = ItemXMLInfo.getPrice(this.mallCfg.itemID);
            else {
                var t = GoldProductXMLInfo.getPriceByProID(this.mallCfg.productID);
                MainManager.actorInfo.isVip && (t *= GoldProductXMLInfo.getVipByProID(this.mallCfg.productID))
            }
            var e = t * this._currentExchangeNum;
            this.txt_cost.text = e + "",
            this.txt_cost.textColor = e <= this._handCoinNum ? 3488607 : 16711680
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.equipmentView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.equipmentView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.currentState = "single",
            this.title.source = "fifth_skill_view_title_png"
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this.hide, this),
            ImageButtonUtil.add(this.btnBuy, this._doExchange, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._updatePanel = function() {
            this.icon_item.source = "item_view_special_icon_0_png",
            this.txt_count.visible = !1,
            this._popCfg.name ? this.txt_name.text = this._popCfg.name: this.txt_name.text = SkillXMLInfo.getName(this._popCfg.describ_id),
            0 == this._popCfg.describ_type ? this.txt_desc.text = this._popCfg.describ_txt: this.txt_desc.textFlow = tipsPop.getSkillDescHtml(null, this._popCfg.describ_id),
            this.iconCost.source = ClientConfig.getItemIcon(this._ins.coinid),
            this.txt_cost.text = this._ins.price + ""
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.fifthSkillView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.fifthSkillView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.FlypetViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this),
            this.flypet_icon.addEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.flypet_icon.removeEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this)
        },
        i.prototype._onSetTextureComplete = function(t) {
            var e = t.currentTarget;
            DisplayUtil.keepEqualDis(e, 181, 135, !0),
            e.anchorOffsetX = e.width / 2,
            e.anchorOffsetY = e.height,
            e.x = 134,
            e.y = 193
        },
        i.prototype._parseData = function() {
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            this.mallCfg = this._data.ins
        },
        i.prototype._upDateView = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this)
        },
        i.prototype._updatePanel = function() {
            if (this.flypet_icon.source = ClientConfig.getMountIcon(this.mallCfg.itemID), this.txt_name.text = this.mallCfg.name, 2 == this.mallCfg.coins) {
                this.iconCost.source = ClientConfig.getItemIcon(1);
                var t = ItemXMLInfo.getPrice(this.mallCfg.itemID)
            } else {
                this.iconCost.source = ClientConfig.getItemIcon(5);
                var t = GoldProductXMLInfo.getPriceByProID(this.mallCfg.productID);
                MainManager.actorInfo.isVip && (t *= GoldProductXMLInfo.getVipByProID(this.mallCfg.productID))
            }
            this.txt_cost.text = t * this._currentExchangeNum + "";
            var e = ItemTipXMLInfo.getItemDes(this.mallCfg.itemID);
            this.txt_desc.text = e ? e: "无"
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close:
                this.hide();
                break;
            case this.btnBuy:
                this._doExchange()
            }
        },
        i.prototype._doExchange = function() {
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.flypetView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.flypetView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.FurnitureViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            (this._data || 0 == this._data) && (this.info = this._data, ImageButtonUtil.add(this.imgBtn_close, this.hide, this), ImageButtonUtil.add(this.btnBuy,
            function() {
                RoomManager.buyShopItem(t.info.id, t.info.num, t.hide, t)
            },
            this), this.updateView())
        },
        i.prototype.updateView = function() {
            var t = config.BaseShop.getItem(this.info.id);
            if (t) {
                this.icon_item.source = ClientConfig.getFurnitureIcon(this.info.id),
                this.txt_count.text = this.info.num + "",
                this.txt_name.text = t.name,
                this.txt_desc.text = t.desc;
                var e = ItemManager.parseItem(t.cost);
                this.txt_cost.text = e[0].num + "",
                this.iconCost.source = ClientConfig.getItemIcon(e[0].id)
            }
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (t.BaseView);
    t.FurnitureView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.FurnitureView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.currentState = "single"
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this.hide, this),
            ImageButtonUtil.add(this.btnBuy, this._doExchange, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._updatePanel = function() {
            if (8 == this._data.ins.type) this.title.source = "head_view_title_png",
            this.icon_item.source = ClientConfig.GetAvatarHead(this._popCfg.describ_id);
            else {
                this.title.source = "headFrame_view_title_png";
                var t = config.Profilephoto.getItem(this._data.ins.realid);
                this.icon_item.source = ClientConfig.GetAvatarFrame(t.icon)
            }
            this.txt_count.visible = !1,
            this._popCfg.name ? this.txt_name.text = this._popCfg.name: this.txt_name.text = config.Profilephoto.getItem(this._popCfg.describ_id).name,
            0 == this._popCfg.describ_type ? this.txt_desc.text = this._popCfg.describ_txt: this.txt_desc.text = config.Profilephoto.getItem(this._popCfg.describ_id).desc + this._popCfg.describ_txt,
            this.iconCost.source = ClientConfig.getItemIcon(this._ins.coinid),
            this.txt_cost.text = this._ins.price + ""
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.headView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.headView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this;
            return "product_diamond" == i.type ? (n._currentOpenView = new t.productBuyItemView, n.openMallPop(), n) : "mall_buyMark" == i.type ? (n._currentOpenView = new t.mallMarkView, n.openMallPop(), n) : "mall_buySuit" == i.type ? (n._currentOpenView = new t.mallSuitView, n.openMallPop(), n) : "mall_buyEquipment" == i.type ? (n._currentOpenView = new t.mallEquipmentView, n.openMallPop(), n) : "mall_buyFlypet" == i.type ? (n._currentOpenView = new t.mallFlypetView, n.openMallPop(), n) : "jiehuang_buyItem" == i.type ? (n.openJiehuangPop(), n) : "furniture_buyItem" == i.type ? (n.openFurniturePop(i), n) : (n._openPanel(), n)
        }
        return __extends(i, e),
        i.prototype._openPanel = function() {
            var e = this;
            this.skinName = ExchangeMainSkin,
            this.adaptRightContent(this.grp_coin_0),
            this.adaptRightContent(this.grp_coin_1);
            var i = PopViewManager.createDefaultStyleObject();
            i.maskShapeStyle.maskAlpha = 0;
            var n, o = this.data.ins,
            r = o;
            n = "number" == typeof o ? config.BuyPopup.getItem(o) : config.BuyPopup.getItem(o.POPID),
            this.grp_coin_1.visible = !1,
            this.grp_coin_0.visible = !0;
            var s = 0,
            a = 0;
            if (r.cointype) switch (a = r.coinid, r.cointype) {
            case 1:
                s = MainManager.actorInfo.coins;
                break;
            case 2:
                UserInfoManager.getDiamond(function(t) {
                    s = t,
                    e.txt_coin_0.text = core.gameUtil.ConvertToTenThousand(s)
                },
                this);
                break;
            case 3:
            case 4:
            case 5:
            case 24:
                s = ItemManager.getNumByID(r.coinid);
                break;
            default:
                s = ItemManager.getNumByID(r.coinid)
            } else r.itemID ? (a = 5, UserInfoManager.getDiamond(function(t) {
                s = t,
                e.txt_coin_0.text = core.gameUtil.ConvertToTenThousand(s)
            },
            this)) : r.SkinID ? (a = 1723116, s = ItemManager.getNumByID(a)) : r.coinid && (a = r.coinid, s = ItemManager.getNumByID(a));
            switch (this.txt_coin_0.text = core.gameUtil.ConvertToTenThousand(s), this.icon_coin_0.source = ClientConfig.getItemIcon(a), ImageButtonUtil.add(this.icon_coin_0,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: a
                })
            },
            this), n.type) {
            case 1:
                this._currentOpenView = new t.itemView;
                break;
            case 2:
                this._currentOpenView = new t.equipmentView;
                break;
            case 3:
                this._currentOpenView = new t.suitView;
                break;
            case 4:
                this._currentOpenView = new t.skinView;
                break;
            case 5:
                this._currentOpenView = new t.petView;
                break;
            case 6:
                this._currentOpenView = new t.counterMarkView;
                break;
            case 7:
                this._currentOpenView = new t.flypetView;
                break;
            case 8:
                this._currentOpenView = new t.achieveView;
                break;
            case 10:
                this._currentOpenView = new t.fifthSkillView;
                break;
            case 11:
                this._currentOpenView = new t.specialGiftView;
                break;
            case 12:
            case 13:
                this._currentOpenView = new t.headView
            }
            PopViewManager.getInstance().openView(this._currentOpenView, i, this.data, this.groupPop),
            this._currentOpenView.addEventListener(PopView.EVENT_DESTROY, this._onDestriyView, this)
        },
        i.prototype.openMallPop = function() {
            var t = PopViewManager.createDefaultStyleObject();
            t.maskShapeStyle.maskAlpha = 0,
            PopViewManager.getInstance().openView(this._currentOpenView, t, this.data, this.groupPop),
            this._currentOpenView.addEventListener(PopView.EVENT_DESTROY, this._onDestriyView, this)
        },
        i.prototype.openJiehuangPop = function() {
            var e = PopViewManager.createDefaultStyleObject();
            e.maskShapeStyle.maskAlpha = 0,
            this._currentOpenView = new t.jiehuangView,
            PopViewManager.getInstance().openView(this._currentOpenView, e, this.data, this.groupPop),
            this._currentOpenView.addEventListener(PopView.EVENT_DESTROY, this._onDestriyView, this)
        },
        i.prototype.openFurniturePop = function(e) {
            this.skinName = ExchangeMainSkin,
            this.adaptRightContent(this.grp_coin_0),
            this.adaptRightContent(this.grp_coin_1),
            this.grp_coin_1.visible = !1,
            this.grp_coin_0.visible = !0,
            this.txt_coin_0.text = core.gameUtil.ConvertToTenThousand(ItemManager.getNumByID(1)),
            ImageButtonUtil.add(this.icon_coin_0,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1
                })
            },
            this),
            this.icon_coin_0.source = ClientConfig.getItemIcon(1);
            var i = PopViewManager.createDefaultStyleObject();
            i.maskShapeStyle.maskAlpha = 0,
            this._currentOpenView = new t.FurnitureView,
            PopViewManager.getInstance().openView(this._currentOpenView, i, e, this.groupPop),
            this._currentOpenView.addEventListener(PopView.EVENT_DESTROY, this._onDestriyView, this)
        },
        i.prototype._onDestriyView = function(t) {
            this._currentOpenView.removeEventListener(PopView.EVENT_DESTROY, this._onDestriyView, this),
            egret.setTimeout(this.onClose, this, 200)
        },
        i.prototype.destroy = function() {
            this._currentOpenView = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.ExchangeAwardPromptView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.ExchangeAwardPromptView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._price = 4,
            i.skinName = t.ItemViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnAdd, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnSub, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnMin, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnMax, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._type = this._data.ins,
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            1 == this._type ? this._itemId = 1714414 : 2 == this._type && (this._itemId = 1714415)
        },
        i.prototype._upDateView = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this)
        },
        i.prototype._updatePanel = function() {
            var t = this;
            this._maxExchangeNum = Math.min(ItemXMLInfo.getMaxNum(this._itemId) - ItemManager.getNumByID(this._itemId), 99),
            this.txt_name.text = ItemXMLInfo.getName(this._itemId),
            tipsPop.getItemDescAsync(this._itemId).then(function(e) {
                t.txt_desc.text = e
            }),
            this.icon_item.source = ClientConfig.getItemIcon(this._itemId),
            this.iconCost.source = ClientConfig.getItemIcon(5),
            this._updateExchangeInfo(),
            this.txt_count.visible = !1
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnAdd:
                if (this._currentExchangeNum >= this._maxExchangeNum) return;
                this._currentExchangeNum++,
                this._updateExchangeInfo();
                break;
            case this.btnSub:
                if (this._currentExchangeNum <= 1) return;
                this._currentExchangeNum--,
                this._updateExchangeInfo();
                break;
            case this.btnMin:
                this._currentExchangeNum = 1,
                this._updateExchangeInfo();
                break;
            case this.btnMax:
                this._currentExchangeNum = this._maxExchangeNum,
                this._updateExchangeInfo();
                break;
            case this.imgBtn_close:
                this.hide();
                break;
            case this.btnBuy:
                this._doExchange()
            }
        },
        i.prototype._doExchange = function() {
            if (0 == this._currentExchangeNum) return void BubblerManager.getInstance().showText("请选择购买数量");
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        i.prototype._updateExchangeInfo = function() {
            this.txt_buyNum.text = this._currentExchangeNum + "/" + this._maxExchangeNum;
            var t = this._price * this._currentExchangeNum;
            this.txt_cost.text = t + "",
            this.txt_cost.textColor = t <= this._handCoinNum ? 3488607 : 16711680
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.jiehuangView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.jiehuangView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.EquipmentViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            this.mallCfg = this._data.ins
        },
        i.prototype._upDateView = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this)
        },
        i.prototype._updatePanel = function() {
            this.icon_item.source = ClientConfig.getclothicon(this.mallCfg.itemID),
            this.txt_name.text = this.mallCfg.name;
            var t = ItemSeXMLInfo.getItemDes(this.mallCfg.itemID, 0);
            this.txt_desc.text = t ? t: "无",
            this.iconCost.source = 2 == this.mallCfg.coins ? ClientConfig.getItemIcon(1) : ClientConfig.getItemIcon(5),
            this._updateExchangeInfo()
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close:
                this.hide();
                break;
            case this.btnBuy:
                this._doExchange()
            }
        },
        i.prototype._doExchange = function() {
            if (0 == this._currentExchangeNum) return void BubblerManager.getInstance().showText("请选择购买数量");
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        i.prototype._updateExchangeInfo = function() {
            if (2 == this.mallCfg.coins) var t = ItemXMLInfo.getPrice(this.mallCfg.itemID);
            else {
                var t = GoldProductXMLInfo.getPriceByProID(this.mallCfg.productID);
                MainManager.actorInfo.isVip && (t *= GoldProductXMLInfo.getVipByProID(this.mallCfg.productID))
            }
            var e = t * this._currentExchangeNum;
            this.txt_cost.text = e + "",
            this.txt_cost.textColor = e <= this._handCoinNum ? 3488607 : 16711680
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.mallEquipmentView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.mallEquipmentView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.FlypetViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this),
            this.flypet_icon.addEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.flypet_icon.removeEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this)
        },
        i.prototype._onSetTextureComplete = function(t) {
            var e = t.currentTarget;
            DisplayUtil.keepEqualDis(e, 181, 135, !0),
            e.anchorOffsetX = e.width / 2,
            e.anchorOffsetY = e.height,
            e.x = 134,
            e.y = 193
        },
        i.prototype._parseData = function() {
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            this.mallCfg = this._data.ins
        },
        i.prototype._upDateView = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this)
        },
        i.prototype._updatePanel = function() {
            if (this.flypet_icon.source = ClientConfig.getMountIcon(this.mallCfg.itemID), this.txt_name.text = this.mallCfg.name, 2 == this.mallCfg.coins) {
                this.iconCost.source = ClientConfig.getItemIcon(1);
                var t = ItemXMLInfo.getPrice(this.mallCfg.itemID)
            } else {
                this.iconCost.source = ClientConfig.getItemIcon(5);
                var t = GoldProductXMLInfo.getPriceByProID(this.mallCfg.productID);
                MainManager.actorInfo.isVip && (t *= GoldProductXMLInfo.getVipByProID(this.mallCfg.productID))
            }
            this.txt_cost.text = t * this._currentExchangeNum + "";
            var e = ItemTipXMLInfo.getItemDes(this.mallCfg.itemID);
            this.txt_desc.text = e ? e: "无"
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close:
                this.hide();
                break;
            case this.btnBuy:
                this._doExchange()
            }
        },
        i.prototype._doExchange = function() {
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.mallFlypetView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.mallFlypetView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.TYPE_ARR = ["攻击", "防御", "特攻", "特防", "速度", "体力"],
            i.skinName = t.CounterMarkViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_exchange, this._onTouchImageButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            this.mallCfg = this._data.ins
        },
        i.prototype._upDateView = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this)
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close:
                this.hide();
                break;
            case this.imgBtn_exchange:
                this._doExchange()
            }
        },
        i.prototype._updatePanel = function() {
            var t = ItemXMLInfo.getTargetItemId(this.mallCfg.itemID);
            if (t) var e = t;
            else var e = this.mallCfg.itemID;
            this.imgMark.source = CountermarkXMLInfo.getIconURL(e);
            var i = GoldProductXMLInfo.getPriceByProID(this.mallCfg.productID);
            MainManager.actorInfo.isVip && (i *= GoldProductXMLInfo.getVipByProID(this.mallCfg.productID)),
            this.icon_cost.source = ClientConfig.getItemIcon(5),
            this.txt_costItem.text = "" + i,
            this.txt_exchangeName.text = ItemXMLInfo.getName(e);
            var n, o = CountermarkXMLInfo.getBaseAttriValue(e),
            r = CountermarkXMLInfo.getMaxAttriValue(e);
            for (n = 0; n < o.length; n++) this["txt_attr_name_" + n].text = this.TYPE_ARR[n],
            this["txt_attr_" + n].text = "+" + o[n] + "/" + r[n];
            var s = CountermarkXMLInfo.getExtraAttriValue(e);
            if (this.extra.visible = s && s.length > 0, this.txt_yc0.visible = !this.extra.visible, this.extra.visible) for (var n = 0; 6 > n; n++) this["txt_extr_name_" + n].text = this.TYPE_ARR[n],
            this["txt_extra_" + n].text = "+" + s[n];
            this.txt_costItem.textColor = this._handCoinNum >= i ? 8407576 : 16711680
        },
        i.prototype._doExchange = function() {
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.mallMarkView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.mallMarkView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._arry = new eui.ArrayCollection,
            i.skinName = t.SuitViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scroller_item.viewport = this.viewport_list,
            this.viewport_list.itemRenderer = t.suitItemIcon,
            this.viewport_list.dataProvider = this._arry
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_exchange, this._onTouchImageButtonHandler, this),
            this.hero_show.addEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this),
            this.viewport_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchClothesHanlder, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.hero_show.removeEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this),
            this.viewport_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchClothesHanlder, this)
        },
        i.prototype._onTouchClothesHanlder = function(t) {
            var e = {};
            e.clothesId = t.item,
            tipsPop.TipsPop.openClothesPop(e)
        },
        i.prototype._onSetTextureComplete = function(t) {
            var e = t.currentTarget;
            DisplayUtil.keepEqualDis(e, 181, 135, !0),
            e.anchorOffsetX = e.width / 2,
            e.anchorOffsetY = e.height,
            e.x = e.y = 0
        },
        i.prototype._parseData = function() {
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            this.mallCfg = this._data.ins,
            this.imgBtn_exchange.source = "item_view_btnBuy_s_png"
        },
        i.prototype._upDateView = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this)
        },
        i.prototype._updatePanel = function() {
            var t = this.mallCfg.itemID.split("|").map(Number),
            e = SuitXMLInfo.getSuitID(t);
            this._arry.replaceAll(t),
            this._arry.refresh();
            var i = ClientConfig.getResPath("assets/item/cloth/suiticon/" + e + ".png");
            if (this.hero_show.source = i, this.txt_suit.text = SuitXMLInfo.getName(e), 2 == this.mallCfg.coins) {
                this.icon.source = ClientConfig.getItemIcon(1);
                var n = ItemXMLInfo.getPrice(this.mallCfg.itemID)
            } else {
                this.icon.source = ClientConfig.getItemIcon(5);
                var n = GoldProductXMLInfo.getPriceByProID(this.mallCfg.productID);
                MainManager.actorInfo.isVip && (n *= GoldProductXMLInfo.getVipByProID(this.mallCfg.productID))
            }
            this.txt_num.text = n * this._currentExchangeNum + "",
            this.txt_normal.text = SuitXMLInfo.getSuitNormalDesc(e);
            var o = ItemSeXMLInfo.getSuitEff(e);
            this.Grp_suitEff.visible = "" !== o,
            this.Grp_suitEff.visible && (this.txt_desc.text = o)
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_close:
                this.hide();
                break;
            case this.imgBtn_exchange:
                this._doExchange()
            }
        },
        i.prototype._doExchange = function() {
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.mallSuitView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.mallSuitView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnAdd, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnSub, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnMin, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnMax, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            this.mallCfg = this._data.ins
        },
        i.prototype._upDateView = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this)
        },
        i.prototype._updatePanel = function() {
            var t = this;
            this._maxExchangeNum = this.maxNum > 99 ? 99 : this.maxNum;
            var e = ItemXMLInfo.getTargetItemId(this.mallCfg.itemID),
            i = e > 0 ? e: this.mallCfg.itemID;
            this._maxExchangeNum = Math.min(this._maxExchangeNum, ItemXMLInfo.getMaxNum(i) - ItemManager.getNumByID(i)),
            this._maxExchangeNum = Math.max(1, this._maxExchangeNum),
            0 == this._maxExchangeNum && (this._currentExchangeNum = 0),
            e > 0 ? (CountermarkXMLInfo.isminMark(e) ? this.icon_item.source = ClientConfig.getMarkPath(e) : this.icon_item.source = ClientConfig.getItemIcon(e), this.txt_name.text = ItemXMLInfo.getName(e), tipsPop.getItemDescAsync(e).then(function(e) {
                t.txt_desc.text = e
            })) : (this.icon_item.source = ClientConfig.getItemIcon(this.mallCfg.itemID), this.txt_name.text = this.mallCfg.name, tipsPop.getItemDescAsync(this.mallCfg.itemID).then(function(e) {
                t.txt_desc.text = e
            })),
            this.iconCost.source = 2 == this.mallCfg.coins ? ClientConfig.getItemIcon(1) : ClientConfig.getItemIcon(5),
            this._updateExchangeInfo(),
            this.txt_count.visible = !1
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnAdd:
                if (this._currentExchangeNum >= this._maxExchangeNum) return;
                this._currentExchangeNum++,
                this._updateExchangeInfo();
                break;
            case this.btnSub:
                if (this._currentExchangeNum <= 1) return;
                this._currentExchangeNum--,
                this._updateExchangeInfo();
                break;
            case this.btnMin:
                this._currentExchangeNum = 1,
                this._updateExchangeInfo();
                break;
            case this.btnMax:
                this._currentExchangeNum = this._maxExchangeNum,
                this._updateExchangeInfo();
                break;
            case this.imgBtn_close:
                this.hide();
                break;
            case this.btnBuy:
                this._doExchange()
            }
        },
        Object.defineProperty(i.prototype, "maxNum", {
            get: function() {
                var t, e = ItemXMLInfo.getTargetItemId(this.mallCfg.itemID);
                t = e > 0 ? e: this.mallCfg.itemID;
                var i = ItemXMLInfo.getCatID(t);
                return t > 1e4 && 3e4 > t ? CountermarkXMLInfo.getMax(t) : 1 == i || 13 == i ? 1 : t > 0 ? ItemXMLInfo.getMaxNum(t) : 1
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype._doExchange = function() {
            if (0 == this._currentExchangeNum) return void BubblerManager.getInstance().showText("请选择购买数量");
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        i.prototype._updateExchangeInfo = function() {
            if (this.txt_buyNum.text = this._currentExchangeNum + "/" + this._maxExchangeNum, 2 == this.mallCfg.coins) var t = ItemXMLInfo.getPrice(this.mallCfg.itemID);
            else {
                var t = GoldProductXMLInfo.getPriceByProID(this.mallCfg.productID);
                MainManager.actorInfo.isVip && (t *= GoldProductXMLInfo.getVipByProID(this.mallCfg.productID))
            }
            var e = t * this._currentExchangeNum;
            this.txt_cost.text = e + "",
            this.txt_cost.textColor = e <= this._handCoinNum ? 3488607 : 16711680
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.mallView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.mallView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SkinViewSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.img_title.source = "pet_view_title_png"
        },
        e.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBuy, this._doExchange, this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                t.hide(),
                t._info = t._data,
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: t._popCfg.describ_id,
                    type: "pet",
                    callback: t.onCb,
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this)
        },
        e.prototype.onCb = function() {
            ModuleManager.showModuleByID(1, this._info),
            this._info = null
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype._updatePanel = function() {
            this.img_pet.source = ClientConfig.getPetHalfIcon(this._popCfg.describ_id),
            this.iconCost.source = ClientConfig.getItemIcon(this._ins.coinid),
            this._popCfg.name ? this.txt_name.text = this._popCfg.name: this.txt_name.text = PetXMLInfo.getName(this._popCfg.describ_id),
            0 == this._popCfg.describ_type ? this.txt_desc.text = this._popCfg.describ_txt: this.txt_desc.text = PetBook.PetBookXMLInfo.getPetXML(this._popCfg.describ_id).Features + this._popCfg.describ_txt,
            this.txt_cost.text = this._ins.price + ""
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (t.BaseView);
    t.petView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.petView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._xCount = 1,
            i.skinName = t.ItemViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnAdd, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnSub, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this),
            this._slider.addEventListener(egret.Event.CHANGE, this.onChangeSlider, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this._slider.removeEventListener(egret.Event.CHANGE, this.onChangeSlider, this)
        },
        i.prototype.onChangeSlider = function() {
            this._currentExchangeNum = this._slider.value,
            this._updateExchangeInfo()
        },
        i.prototype._parseData = function() {
            this.currentState = "complex",
            this._callBack = this._data.callBack,
            this._caller = this._data.caller,
            this.mallCfg = this._data.ins,
            this._productID = this.mallCfg.productID,
            this._iconID = this.mallCfg.iconID,
            this.mallCfg.maxNum ? this.maxNum = Math.min(ItemXMLInfo.getMaxNum(this._iconID), this.mallCfg.maxNum + ItemManager.getNumByID(this._iconID)) : this.maxNum = ItemXMLInfo.getMaxNum(this._iconID),
            0 == this._xCount && (this._xCount = 1)
        },
        i.prototype._upDateView = function() {
            var t = this;
            UserInfoManager.getDiamond(function(e) {
                t._handCoinNum = e,
                t._updatePanel()
            },
            this)
        },
        i.prototype._updatePanel = function() {
            var t = this;
            this._curCount = ItemManager.getNumByID(this._iconID),
            this._maxExchangeNum = this.maxNum;
            var e = ItemXMLInfo.getTargetItemId(this._iconID),
            i = e > 0 ? e: this._iconID,
            n = GoldProductXMLInfo.getPriceByProID(this._productID),
            o = Math.floor(this._handCoinNum / n);
            this._maxExchangeNum = Math.min(this._maxExchangeNum, Math.min(this.maxNum - ItemManager.getNumByID(i), o)),
            this._maxExchangeNum = Math.max(1, this._maxExchangeNum),
            this._slider.maximum = Math.max(1, this._maxExchangeNum),
            this._slider.minimum = Math.min(0, this._maxExchangeNum),
            0 == this._maxExchangeNum && (this._currentExchangeNum = 0),
            e > 0 ? (CountermarkXMLInfo.isminMark(e) ? this.icon_item.source = ClientConfig.getMarkPath(e) : this.icon_item.source = ClientConfig.getItemIcon(e), this.txt_name.text = ItemXMLInfo.getName(e), tipsPop.getItemDescAsync(e).then(function(e) {
                t.txt_desc.text = e
            })) : (this.icon_item.source = ClientConfig.getItemIcon(this._iconID), this.txt_name.text = ItemXMLInfo.getName(this._iconID), tipsPop.getItemDescAsync(this._iconID).then(function(e) {
                t.txt_desc.text = e
            })),
            this.iconCost.source = ClientConfig.getItemIcon(5),
            this._updateExchangeInfo(),
            this.txt_count.visible = !1
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnAdd:
                if (this._currentExchangeNum >= this._maxExchangeNum) return;
                this._currentExchangeNum++,
                this._updateExchangeInfo();
                break;
            case this.btnSub:
                if (this._currentExchangeNum <= 1) return;
                this._currentExchangeNum--,
                this._updateExchangeInfo();
                break;
            case this.imgBtn_close:
                this.hide();
                break;
            case this.btnBuy:
                this._doExchange()
            }
        },
        i.prototype._doExchange = function() {
            return 0 == this._currentExchangeNum ? void BubblerManager.getInstance().showText("请选择购买数量") : void this.returnCaller()
        },
        i.prototype.returnCaller = function() {
            if (this._callBack && this._caller) {
                var t = this._ins,
                e = this._callBack,
                i = this._caller;
                this.hide(),
                e.apply(i, [t, this._currentExchangeNum])
            }
        },
        i.prototype._updateExchangeInfo = function() {
            this._currentExchangeNum > this.maxNum - this._curCount && (BubblerManager.getInstance().showText("物品个数已达上限，请重新输入！"), this._currentExchangeNum = this.maxNum - this._curCount),
            this._slider.value = this._currentExchangeNum,
            this.txt_buyNum.text = "数量：" + this._currentExchangeNum;
            var t = GoldProductXMLInfo.getPriceByProID(this._productID),
            e = t * this._currentExchangeNum;
            this.txt_cost.text = e + "",
            this.txt_cost.textColor = e <= this._handCoinNum ? 3488607 : 16711680
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.productBuyItemView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.productBuyItemView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SkinViewSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.img_title.source = "skin_view_title_png"
        },
        e.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBuy, this._doExchange, this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype._updatePanel = function() {
            var t = PetSkinXMLInfo.getSkinInfo(this._popCfg.describ_id);
            this.img_pet.source = ClientConfig.getPetHalfIcon(t.skinPetId),
            this._popCfg.name ? this.txt_name.text = this._popCfg.name: this.txt_name.text = t.name,
            0 == this._popCfg.describ_type ? this.txt_desc.text = this._popCfg.describ_txt: this.txt_desc.text = PetXMLInfo.getName(t.monId) + this._popCfg.describ_txt,
            this.iconCost.source = ClientConfig.getItemIcon(this._ins.coinid || 1723116),
            this.txt_cost.text = this._ins.price || this._ins.CardPrice + ""
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (t.BaseView);
    t.skinView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.skinView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.currentState = "single",
            this.title.source = "special_gift_title_png"
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_close, this.hide, this),
            ImageButtonUtil.add(this.btnBuy, this._doExchange, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._updatePanel = function() {
            if (this.icon_item.source = "item_view_special_icon_1_png", this.txt_count.visible = !1, this._popCfg.name ? this.txt_name.text = this._popCfg.name: this.txt_name.text = PetXMLInfo.getName(this._ins.boundmonster) + "专属特性", 0 == this._popCfg.describ_type) this.txt_desc.text = this._popCfg.describ_txt;
            else {
                var t = EffectIconControl.getAllEffctByPetId(this._ins.boundmonster).slice(0, 1),
                e = t[0],
                i = EffectDesManager.transferDesc(e),
                n = i[0],
                o = (i[1], (new egret.HtmlTextParser).parse(n));
                "string" == typeof o ? this.txt_desc.text = o + this._popCfg.describ_txt: this.txt_desc.textFlow = o
            }
            this.iconCost.source = ClientConfig.getItemIcon(this._ins.coinid),
            this.txt_cost.text = this._ins.price + ""
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.specialGiftView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.specialGiftView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {}));
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
exchangeAwardPromptView; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnAdd, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnSub, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_close, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this),
            this._slider.addEventListener(egret.Event.CHANGE, this.onChangeSlider, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this._slider.removeEventListener(egret.Event.CHANGE, this.onChangeSlider, this)
        },
        i.prototype._parseData = function() {
            e.prototype._parseData.call(this),
            0 == this._popCfg.Isplural ? this.currentState = "single": 1 == this._popCfg.Isplural && (this.currentState = "complex")
        },
        i.prototype._updatePanel = function() {
            var t = this;
            if (void 0 === this._maxExchangeNum || null === this._maxExchangeNum) {
                var e = this._popCfg.describ_id,
                i = ItemXMLInfo.getMaxNum(e) - ItemManager.getNumByID(e),
                n = Math.floor(this._handCoinNum / this._ins.price),
                o = Math.min(i, n);
                if (this._maxExchangeNum = Math.max(1, Math.min(this._ins.batch || Number.MAX_VALUE, o)), this._slider.maximum = Math.max(1, this._maxExchangeNum), this._slider.minimum = Math.min(1, this._maxExchangeNum), this._ins.Limittype) return void KTool.getMultiValue([this._ins.UserInfoId],
                function(e) {
                    var i, n = e[0];
                    i = t._ins && t._ins.UserInfoBitPos ? KTool.getBit(n, t._ins.UserInfoBitPos) : t._ins && t._ins.UserInfoBytePos ? KTool.getByte(n, t._ins.UserInfoBytePos - 1) : n;
                    var o = t._ins.LimitCnt - i;
                    t._maxExchangeNum = Math.min(o, t._maxExchangeNum),
                    t._slider.maximum = Math.max(1, t._maxExchangeNum),
                    t._slider.minimum = Math.min(1, t._maxExchangeNum),
                    t._updatePanel()
                })
            }
            this._popCfg.name ? this.txt_name.text = this._popCfg.name: this.txt_name.text = ItemXMLInfo.getName(this._popCfg.describ_id),
            0 == this._popCfg.describ_type ? this.txt_desc.text = this._popCfg.describ_txt: tipsPop.getItemDescAsync(this._popCfg.describ_id).then(function(e) {
                t.txt_desc.text = e + t._popCfg.describ_txt
            }),
            this.icon_item.source = ClientConfig.getItemIcon(this._popCfg.describ_id),
            this.iconCost.source = ClientConfig.getItemIcon(this._ins.coinid),
            this._updateExchangeInfo(),
            this._ins.count ? (this.txt_count.visible = !0, this._ins.count >= 1e4 ? this.txt_count.text = Math.floor(this._ins.count / 1e4) + "万": this._ins.count >= 1e3 ? this.txt_count.text = Math.floor(this._ins.count / 1e3) + "千": this.txt_count.text = this._ins.count + "") : this.txt_count.visible = !1
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnAdd:
                if (this._currentExchangeNum >= this._maxExchangeNum) return;
                this._currentExchangeNum++,
                this._updateExchangeInfo();
                break;
            case this.btnSub:
                if (this._currentExchangeNum <= 1) return;
                this._currentExchangeNum--,
                this._updateExchangeInfo();
                break;
            case this.imgBtn_close:
                this.hide();
                break;
            case this.btnBuy:
                this._doExchange()
            }
        },
        i.prototype._updateExchangeInfo = function() {
            this._slider.value = this._currentExchangeNum,
            this.txt_buyNum.text = "数量：" + this._currentExchangeNum;
            var t = this._ins.price * this._currentExchangeNum;
            this.txt_cost.text = t + ""
        },
        i.prototype.onChangeSlider = function() {
            this._currentExchangeNum = this._slider.value,
            this._updateExchangeInfo()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseView);
    t.itemView = e,
    __reflect(e.prototype, "exchangeAwardPromptView.itemView")
} (exchangeAwardPromptView || (exchangeAwardPromptView = {})),
window.exchangeAwardPromptView = window.exchangeAwardPromptView || {};
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
generateEUI.paths["resource/eui_skins/ExchangeMainSkin.exml"] = window.ExchangeMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["groupPop", "txt_coin_0", "icon_coin_0", "btnAdd_0", "grp_coin_0", "txt_coin_1", "icon_coin_1", "grp_coin_1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.groupPop_i(), this.grp_coin_0_i(), this.grp_coin_1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "blurry_base_bg_jpg",
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "blurry_base_bgmask_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.groupPop_i = function() {
        var t = new eui.Group;
        return this.groupPop = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t
    },
    i.grp_coin_0_i = function() {
        var t = new eui.Group;
        return this.grp_coin_0 = t,
        t.right = 39,
        t.y = 11,
        t.elementsContent = [this._Image3_i(), this.txt_coin_0_i(), this.icon_coin_0_i(), this.btnAdd_0_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "exchange_main_img_di2_png",
        t.width = 133,
        t.x = 14,
        t.y = 5,
        t
    },
    i.txt_coin_0_i = function() {
        var t = new eui.Label;
        return this.txt_coin_0 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 3,
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    i.icon_coin_0_i = function() {
        var t = new eui.Image;
        return this.icon_coin_0 = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnAdd_0_i = function() {
        var t = new eui.Image;
        return this.btnAdd_0 = t,
        t.height = 21,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "exchange_main_btnAdd_png",
        t.visible = !1,
        t.width = 21,
        t.x = 130,
        t.y = 5,
        t
    },
    i.grp_coin_1_i = function() {
        var t = new eui.Group;
        return this.grp_coin_1 = t,
        t.right = 208,
        t.y = 11,
        t.elementsContent = [this._Image4_i(), this.txt_coin_1_i(), this.icon_coin_1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "exchange_main_img_di2_png",
        t.width = 133,
        t.x = 14,
        t.y = 5,
        t
    },
    i.txt_coin_1_i = function() {
        var t = new eui.Label;
        return this.txt_coin_1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 16,
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    i.icon_coin_1_i = function() {
        var t = new eui.Image;
        return this.icon_coin_1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ExchangeHSliderSkin.exml"] = window.ExchangeHSliderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["track", "trackHighlight", "thumb"],
        this.height = 28,
        this.width = 235,
        this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.track_i = function() {
        var t = new eui.Image;
        return this.track = t,
        t.height = 14,
        t.source = "item_view_img_bar_png",
        t.width = 235,
        t.x = 0,
        t.y = 7,
        t
    },
    i.trackHighlight_i = function() {
        var t = new eui.Image;
        return this.trackHighlight = t,
        t.height = 13,
        t.source = "item_view_img_thumb_png",
        t.width = 235,
        t.x = 1,
        t.y = 8,
        t
    },
    i.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.height = 28,
        t.source = "item_view_img_point_png",
        t.width = 20,
        t.x = 108,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/SuitIconSkin.exml"] = window.exchangeAwardPromptView.SuitIconSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon_item"],
        this.height = 64,
        this.width = 64,
        this.elementsContent = [this._Image1_i(), this.icon_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "common_icon_bg_style_1_png",
        t.width = 64,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_item_i = function() {
        var t = new eui.Image;
        return this.icon_item = t,
        t.height = 31,
        t.source = "suit_view_icon_item_png",
        t.width = 44,
        t.x = 10,
        t.y = 18,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemSlider.exml"] = window.exchangeAwardPromptView.itemSlider = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["track", "thumb"],
        this.height = 27,
        this.width = 262,
        this.elementsContent = [this.track_i(), this.thumb_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.track_i = function() {
        var t = new eui.Image;
        return this.track = t,
        t.height = 5,
        t.source = "item_view_texture_slider_track_png",
        t.percentWidth = 100,
        t.y = 11,
        t
    },
    i.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.height = 27,
        t.source = "common_thumb_1_png",
        t.width = 27,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/AchieveViewSkin.exml"] = window.AchieveViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_close", "txt_name", "txt_point", "txtTitle", "txt_title", "txtEffect", "txt_effect", "txt_buy", "txt_cost", "iconCost", "btnBuy", "imgLine"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this.imgBtn_close_i(), this.txt_name_i(), this._Label1_i(), this.txt_point_i(), this.txtTitle_i(), this.txt_title_i(), this.txtEffect_i(), this.txt_effect_i(), this.btnBuy_i(), this.imgLine_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_m_png",
        t.width = 476,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "achieve_view_title_png",
        t.width = 102,
        t.x = 34,
        t.y = 1,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 438,
        t.y = 1,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "成就名字成就名字成就名字",
        t.textColor = 4252667,
        t.x = 31,
        t.y = 50,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "成就点数：",
        t.textColor = 6153817,
        t.x = 31,
        t.y = 83,
        t
    },
    i.txt_point_i = function() {
        var t = new eui.Label;
        return this.txt_point = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "+99",
        t.textColor = 8822740,
        t.x = 111,
        t.y = 83,
        t
    },
    i.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "称号称号称号",
        t.textColor = 8822740,
        t.x = 111,
        t.y = 112,
        t
    },
    i.txt_title_i = function() {
        var t = new eui.Label;
        return this.txt_title = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "对应称号：",
        t.textColor = 6153817,
        t.x = 31,
        t.y = 112,
        t
    },
    i.txtEffect_i = function() {
        var t = new eui.Label;
        return this.txtEffect = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "称号效果：",
        t.textColor = 6153817,
        t.x = 31,
        t.y = 163,
        t
    },
    i.txt_effect_i = function() {
        var t = new eui.Label;
        return this.txt_effect = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.textColor = 8822740,
        t.width = 366,
        t.x = 63,
        t.y = 191,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 154,
        t.y = 233,
        t.elementsContent = [this._Image4_i(), this.txt_buy_i(), this.txt_cost_i(), this.iconCost_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "item_view_btnbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_buy_i = function() {
        var t = new eui.Label;
        return this.txt_buy = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "购买",
        t.textColor = 16777215,
        t.x = 125,
        t.y = 8,
        t
    },
    i.txt_cost_i = function() {
        var t = new eui.Label;
        return this.txt_cost = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -19,
        t.size = 18,
        t.text = "999999",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.iconCost_i = function() {
        var t = new eui.Image;
        return this.iconCost = t,
        t.height = 20,
        t.source = "item_view_icon_cost_png",
        t.width = 19,
        t.x = 12,
        t.y = 6,
        t
    },
    i.imgLine_i = function() {
        var t = new eui.Image;
        return this.imgLine = t,
        t.height = 2,
        t.source = "help_mulit_pop_line_yc_1_png",
        t.width = 418,
        t.x = 30,
        t.y = 145,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/CounterMarkViewSkin.exml"] = window.exchangeAwardPromptView.CounterMarkViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "imgBtn_close", "imgMark", "txt_exchangeName", "txt_yc0", "txt_yc", "txt_extra_4", "txt_extra_5", "txt_extra_3", "txt_extra_2", "txt_extra_1", "txt_extra_0", "txt_extr_name_4", "txt_extr_name_5", "txt_extr_name_3", "txt_extr_name_2", "txt_extr_name_1", "txt_extr_name_0", "extra", "txt_noExtr", "txt_attr_4", "txt_attr_5", "txt_attr_3", "txt_attr_2", "txt_attr_1", "txt_attr_0", "txt_attr_name_4", "txt_attr_name_5", "txt_attr_name_3", "txt_attr_name_2", "txt_attr_name_1", "txt_attr_name_0", "default", "txt_buy", "txt_costItem", "icon_cost", "imgBtn_exchange"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this._Group2_i(), this.txt_exchangeName_i(), this.txt_yc0_i(), this.extra_i(), this.txt_noExtr_i(), this.default_i(), this.imgBtn_exchange_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.imgBtn_close_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_m_png",
        t.width = 476,
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "counter_mark_view_title_buymake_png",
        t.x = 34,
        t.y = 1,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 438,
        t.y = 1,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 20,
        t.y = 53,
        t.elementsContent = [this._Image3_i(), this.imgMark_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "item_view_imgMarkBg_png",
        t
    },
    i.imgMark_i = function() {
        var t = new eui.Image;
        return this.imgMark = t,
        t.height = 65,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t.width = 65,
        t
    },
    i.txt_exchangeName_i = function() {
        var t = new eui.Label;
        return this.txt_exchangeName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印名字刻印名字刻印名字",
        t.textColor = 6153817,
        t.x = 136,
        t.y = 53,
        t
    },
    i.txt_yc0_i = function() {
        var t = new eui.Label;
        return this.txt_yc0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "暂无隐藏属性",
        t.textColor = 6153817,
        t.visible = !1,
        t.x = 237,
        t.y = 125,
        t
    },
    i.extra_i = function() {
        var t = new eui.Group;
        return this.extra = t,
        t.x = 136,
        t.y = 125,
        t.elementsContent = [this.txt_yc_i(), this.txt_extra_4_i(), this.txt_extra_5_i(), this.txt_extra_3_i(), this.txt_extra_2_i(), this.txt_extra_1_i(), this.txt_extra_0_i(), this.txt_extr_name_4_i(), this.txt_extr_name_5_i(), this.txt_extr_name_3_i(), this.txt_extr_name_2_i(), this.txt_extr_name_1_i(), this.txt_extr_name_0_i()],
        t
    },
    i.txt_yc_i = function() {
        var t = new eui.Label;
        return this.txt_yc = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "隐藏属性：",
        t.textColor = 6153817,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_extra_4_i = function() {
        var t = new eui.Label;
        return this.txt_extra_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+100",
        t.textColor = 8822740,
        t.x = 272,
        t.y = 25,
        t
    },
    i.txt_extra_5_i = function() {
        var t = new eui.Label;
        return this.txt_extra_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+100",
        t.textColor = 8822740,
        t.x = 272,
        t.y = 49,
        t
    },
    i.txt_extra_3_i = function() {
        var t = new eui.Label;
        return this.txt_extra_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+90",
        t.textColor = 8822740,
        t.x = 157,
        t.y = 49,
        t
    },
    i.txt_extra_2_i = function() {
        var t = new eui.Label;
        return this.txt_extra_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+100",
        t.textColor = 8822740,
        t.x = 157,
        t.y = 25,
        t
    },
    i.txt_extra_1_i = function() {
        var t = new eui.Label;
        return this.txt_extra_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+90",
        t.textColor = 8822740,
        t.x = 42,
        t.y = 49,
        t
    },
    i.txt_extra_0_i = function() {
        var t = new eui.Label;
        return this.txt_extra_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+90",
        t.textColor = 8822740,
        t.x = 42,
        t.y = 25,
        t
    },
    i.txt_extr_name_4_i = function() {
        var t = new eui.Label;
        return this.txt_extr_name_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "速度：",
        t.textColor = 4187130,
        t.x = 230,
        t.y = 25,
        t
    },
    i.txt_extr_name_5_i = function() {
        var t = new eui.Label;
        return this.txt_extr_name_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "体力：",
        t.textColor = 4187130,
        t.x = 230,
        t.y = 49,
        t
    },
    i.txt_extr_name_3_i = function() {
        var t = new eui.Label;
        return this.txt_extr_name_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "特防：",
        t.textColor = 4187130,
        t.x = 115,
        t.y = 49,
        t
    },
    i.txt_extr_name_2_i = function() {
        var t = new eui.Label;
        return this.txt_extr_name_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "特攻：",
        t.textColor = 4187130,
        t.x = 115,
        t.y = 25,
        t
    },
    i.txt_extr_name_1_i = function() {
        var t = new eui.Label;
        return this.txt_extr_name_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "防御：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 49,
        t
    },
    i.txt_extr_name_0_i = function() {
        var t = new eui.Label;
        return this.txt_extr_name_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "攻击：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 25,
        t
    },
    i.txt_noExtr_i = function() {
        var t = new eui.Label;
        return this.txt_noExtr = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "无隐藏属性",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 231,
        t.y = 180,
        t
    },
    i.default_i = function() {
        var t = new eui.Group;
        return this["default"] = t,
        t.x = 136,
        t.y = 81,
        t.elementsContent = [this.txt_attr_4_i(), this.txt_attr_5_i(), this.txt_attr_3_i(), this.txt_attr_2_i(), this.txt_attr_1_i(), this.txt_attr_0_i(), this.txt_attr_name_4_i(), this.txt_attr_name_5_i(), this.txt_attr_name_3_i(), this.txt_attr_name_2_i(), this.txt_attr_name_1_i(), this.txt_attr_name_0_i()],
        t
    },
    i.txt_attr_4_i = function() {
        var t = new eui.Label;
        return this.txt_attr_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+100/100",
        t.textColor = 8822740,
        t.x = 272,
        t.y = 0,
        t
    },
    i.txt_attr_5_i = function() {
        var t = new eui.Label;
        return this.txt_attr_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+100/100",
        t.textColor = 8822740,
        t.x = 272,
        t.y = 24,
        t
    },
    i.txt_attr_3_i = function() {
        var t = new eui.Label;
        return this.txt_attr_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+90/100",
        t.textColor = 8822740,
        t.x = 157,
        t.y = 24,
        t
    },
    i.txt_attr_2_i = function() {
        var t = new eui.Label;
        return this.txt_attr_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+100/100",
        t.textColor = 8822740,
        t.x = 157,
        t.y = 0,
        t
    },
    i.txt_attr_1_i = function() {
        var t = new eui.Label;
        return this.txt_attr_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+90/100",
        t.textColor = 8822740,
        t.x = 42,
        t.y = 24,
        t
    },
    i.txt_attr_0_i = function() {
        var t = new eui.Label;
        return this.txt_attr_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "+000/000",
        t.textColor = 8822740,
        t.x = 42,
        t.y = 0,
        t
    },
    i.txt_attr_name_4_i = function() {
        var t = new eui.Label;
        return this.txt_attr_name_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "速度：",
        t.textColor = 4187130,
        t.x = 230,
        t.y = 0,
        t
    },
    i.txt_attr_name_5_i = function() {
        var t = new eui.Label;
        return this.txt_attr_name_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "体力：",
        t.textColor = 4187130,
        t.x = 230,
        t.y = 24,
        t
    },
    i.txt_attr_name_3_i = function() {
        var t = new eui.Label;
        return this.txt_attr_name_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "特防：",
        t.textColor = 4187130,
        t.x = 115,
        t.y = 24,
        t
    },
    i.txt_attr_name_2_i = function() {
        var t = new eui.Label;
        return this.txt_attr_name_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "特攻：",
        t.textColor = 4187130,
        t.x = 115,
        t.y = 0,
        t
    },
    i.txt_attr_name_1_i = function() {
        var t = new eui.Label;
        return this.txt_attr_name_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "防御：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 24,
        t
    },
    i.txt_attr_name_0_i = function() {
        var t = new eui.Label;
        return this.txt_attr_name_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "攻击：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_exchange_i = function() {
        var t = new eui.Group;
        return this.imgBtn_exchange = t,
        t.x = 154,
        t.y = 226,
        t.elementsContent = [this._Image4_i(), this.txt_buy_i(), this.txt_costItem_i(), this.icon_cost_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "item_view_btnbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_buy_i = function() {
        var t = new eui.Label;
        return this.txt_buy = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "购买",
        t.textColor = 16777215,
        t.x = 125,
        t.y = 8,
        t
    },
    i.txt_costItem_i = function() {
        var t = new eui.Label;
        return this.txt_costItem = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -19,
        t.size = 18,
        t.text = "99999",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.icon_cost_i = function() {
        var t = new eui.Image;
        return this.icon_cost = t,
        t.height = 20,
        t.source = "item_view_icon_cost_png",
        t.width = 19,
        t.x = 12,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/EquipmentViewSkin.exml"] = window.exchangeAwardPromptView.EquipmentViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_close", "icon_item", "txt_name", "txt_buy", "txt_cost", "iconCost", "btnBuy", "txt_desc"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this.imgBtn_close_i(), this._Group2_i(), this.txt_name_i(), this._Label1_i(), this.btnBuy_i(), this.txt_desc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_m_png",
        t.width = 476,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "equipment_view_title_png",
        t.width = 102,
        t.x = 34,
        t.y = 1,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 438,
        t.y = 1,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 27,
        t.y = 72,
        t.elementsContent = [this._Image4_i(), this.icon_item_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "item_view_imgMarkBg_png",
        t
    },
    i.icon_item_i = function() {
        var t = new eui.Image;
        return this.icon_item = t,
        t.height = 65,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t.width = 65,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装部件套装部件",
        t.textColor = 4187130,
        t.x = 152,
        t.y = 72,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "装扮效果",
        t.textColor = 6153817,
        t.x = 152,
        t.y = 96,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 154,
        t.y = 225,
        t.elementsContent = [this._Image5_i(), this.txt_buy_i(), this.txt_cost_i(), this.iconCost_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "item_view_btnbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_buy_i = function() {
        var t = new eui.Label;
        return this.txt_buy = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "购买",
        t.textColor = 16777215,
        t.x = 125,
        t.y = 8,
        t
    },
    i.txt_cost_i = function() {
        var t = new eui.Label;
        return this.txt_cost = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -19,
        t.size = 18,
        t.text = "999999",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.iconCost_i = function() {
        var t = new eui.Image;
        return this.iconCost = t,
        t.height = 20,
        t.source = "item_view_icon_cost_png",
        t.width = 19,
        t.x = 12,
        t.y = 6,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "套装部件顶部套装部件顶部套装部件顶部套装部\n件顶部套装部件顶部套装部件顶部套装部件",
        t.textColor = 8757203,
        t.touchEnabled = !1,
        t.width = 304,
        t.x = 152,
        t.y = 120,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/FlypetViewSkin.exml"] = window.exchangeAwardPromptView.FlypetViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_close", "flypet_icon", "txt_buy", "txt_cost", "iconCost", "btnBuy", "txt_gotNum", "txt_name", "txt_desc"],
        this.height = 343,
        this.width = 558,
        this.elementsContent = [this._Group1_i(), this._Image3_i(), this._Group2_i(), this.btnBuy_i(), this.txt_gotNum_i(), this.txt_name_i(), this.txt_desc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgBtn_close_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 340,
        t.source = "common_s9_pop_bg4_png",
        t.width = 551,
        t.x = 5,
        t.y = 3,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "flypet_view_up_bg_png",
        t.width = 558,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.source = "common_pop_btn_close_png",
        t.visible = !1,
        t.x = 515,
        t.y = 3,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "flypet_view_title_png",
        t.width = 102,
        t.x = 41,
        t.y = 4,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 6,
        t.y = 62,
        t.elementsContent = [this._Image4_i(), this.flypet_icon_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "suit_view_texture_001_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.flypet_icon_i = function() {
        var t = new eui.Image;
        return this.flypet_icon = t,
        t.bottom = 58,
        t.horizontalCenter = -2,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.horizontalCenter = 0,
        t.y = 283,
        t.elementsContent = [this._Image5_i(), this.txt_buy_i(), this.txt_cost_i(), this.iconCost_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "item_view_btnbg_png",
        t.top = 0,
        t
    },
    i.txt_buy_i = function() {
        var t = new eui.Label;
        return this.txt_buy = t,
        t.fontFamily = "REEJI",
        t.right = 13,
        t.size = 18,
        t.text = "购买",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.txt_cost_i = function() {
        var t = new eui.Label;
        return this.txt_cost = t,
        t.fontFamily = "REEJI",
        t.left = 42,
        t.minWidth = 53,
        t.right = 79,
        t.size = 18,
        t.text = "99999",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.iconCost_i = function() {
        var t = new eui.Image;
        return this.iconCost = t,
        t.height = 20,
        t.source = "item_view_icon_cost_png",
        t.width = 19,
        t.x = 12,
        t.y = 6,
        t
    },
    i.txt_gotNum_i = function() {
        var t = new eui.Label;
        return this.txt_gotNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "已拥有：5",
        t.textColor = 12834813,
        t.visible = !1,
        t.x = 466,
        t.y = 11,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "座驾座驾座驾",
        t.textColor = 4187130,
        t.x = 240,
        t.y = 56,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "所有商品描述均通过配表逻辑显示，若\n有特殊类品道具与已有配表关联，则特\n殊处理。",
        t.textColor = 8757203,
        t.width = 272,
        t.x = 241,
        t.y = 79,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/FurnitureViewSkin.exml"] = window.exchangeAwardPromptView.FurnitureViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_close", "title", "icon_item", "txt_count", "txt_buy", "txt_cost", "iconCost", "btnBuy", "txt_name", "txt_desc"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this.title_i(), this._Label1_i(), this._Group2_i(), this.btnBuy_i(), this.txt_name_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgBtn_close_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_m_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.source = "common_pop_btn_close_png",
        t.x = 438,
        t.y = 1,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "item_view_title_item_buy_png",
        t.visible = !1,
        t.x = 33,
        t.y = 1,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "小屋装扮购买",
        t.textColor = 16775277,
        t.x = 30,
        t.y = 8,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 26,
        t.y = 56,
        t.elementsContent = [this._Image3_i(), this.icon_item_i(), this.txt_count_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "item_view_imgMarkBg_png",
        t
    },
    i.icon_item_i = function() {
        var t = new eui.Image;
        return this.icon_item = t,
        t.height = 65,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t.width = 65,
        t
    },
    i.txt_count_i = function() {
        var t = new eui.Label;
        return this.txt_count = t,
        t.fontFamily = "MFShangHei",
        t.right = 9,
        t.size = 16,
        t.stroke = 1,
        t.text = "1",
        t.y = 77.5,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 154,
        t.y = 224,
        t.elementsContent = [this._Image4_i(), this.txt_buy_i(), this.txt_cost_i(), this.iconCost_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "item_view_btnbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_buy_i = function() {
        var t = new eui.Label;
        return this.txt_buy = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "购买",
        t.textColor = 16777215,
        t.x = 125,
        t.y = 8,
        t
    },
    i.txt_cost_i = function() {
        var t = new eui.Label;
        return this.txt_cost = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -19,
        t.size = 18,
        t.text = "99999",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.iconCost_i = function() {
        var t = new eui.Image;
        return this.iconCost = t,
        t.height = 26,
        t.horizontalCenter = -65.5,
        t.source = "item_view_icon_cost_png",
        t.verticalCenter = -1,
        t.width = 26,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "商品名称商品名称",
        t.textColor = 12834813,
        t.x = 150,
        t.y = 56,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 75,
        t.visible = !0,
        t.width = 304,
        t.x = 151,
        t.y = 81,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_desc_i()],
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "套装部件部件",
        t.textColor = 8757203,
        t.width = 304,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/ItemViewSkin.exml"] = window.exchangeAwardPromptView.ItemViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_close", "title", "icon_item", "txt_count", "txt_buyNum", "btnbg", "txt_buy", "txt_cost", "iconCost", "btnBuy", "txt_name", "txt_desc", "btnAdd", "_slider", "btnSub", "grp_slider"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this.title_i(), this._Group2_i(), this.txt_buyNum_i(), this.btnBuy_i(), this.txt_name_i(), this._Scroller1_i(), this.grp_slider_i()],
        this.states = [new eui.State("complex", []), new eui.State("single", [new eui.SetProperty("_Group2", "x", 27), new eui.SetProperty("_Group2", "y", 72), new eui.SetProperty("txt_buyNum", "visible", !1), new eui.SetProperty("btnBuy", "x", 223), new eui.SetProperty("btnBuy", "y", 225), new eui.SetProperty("txt_name", "x", 152), new eui.SetProperty("txt_name", "y", 72), new eui.SetProperty("_Scroller1", "x", 152), new eui.SetProperty("_Scroller1", "y", 96), new eui.SetProperty("grp_slider", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgBtn_close_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_m_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.source = "common_pop_btn_close_png",
        t.x = 438,
        t.y = 1,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "item_view_title_item_buy_png",
        t.x = 33,
        t.y = 1,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return this._Group2 = t,
        t.x = 26,
        t.y = 56,
        t.elementsContent = [this._Image3_i(), this.icon_item_i(), this.txt_count_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "item_view_imgMarkBg_png",
        t
    },
    i.icon_item_i = function() {
        var t = new eui.Image;
        return this.icon_item = t,
        t.height = 65,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t.width = 65,
        t
    },
    i.txt_count_i = function() {
        var t = new eui.Label;
        return this.txt_count = t,
        t.fontFamily = "MFShangHei",
        t.right = 9,
        t.size = 16,
        t.stroke = 1,
        t.text = "99",
        t.y = 77.5,
        t
    },
    i.txt_buyNum_i = function() {
        var t = new eui.Label;
        return this.txt_buyNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "数量：999",
        t.textColor = 4187130,
        t.x = 204,
        t.y = 165,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 154,
        t.y = 224,
        t.elementsContent = [this.btnbg_i(), this.txt_buy_i(), this.txt_cost_i(), this.iconCost_i()],
        t
    },
    i.btnbg_i = function() {
        var t = new eui.Image;
        return this.btnbg = t,
        t.height = 34,
        t.source = "item_view_btnbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_buy_i = function() {
        var t = new eui.Label;
        return this.txt_buy = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "购买",
        t.textColor = 16777215,
        t.x = 125,
        t.y = 8,
        t
    },
    i.txt_cost_i = function() {
        var t = new eui.Label;
        return this.txt_cost = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -19,
        t.size = 18,
        t.text = "99999",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.iconCost_i = function() {
        var t = new eui.Image;
        return this.iconCost = t,
        t.height = 20,
        t.source = "item_view_icon_cost_png",
        t.width = 19,
        t.x = 12,
        t.y = 6,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "商品名称商品名称",
        t.textColor = 12834813,
        t.x = 150,
        t.y = 56,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return this._Scroller1 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 75,
        t.visible = !0,
        t.width = 304,
        t.x = 151,
        t.y = 81,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_desc_i()],
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件件顶部套装部件顶部套装部件顶部套装部件件顶部套装部件顶部套装部件顶部套装部件件顶部套装部件顶部套装部件顶部套装部件",
        t.textColor = 8757203,
        t.width = 304,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_slider_i = function() {
        var t = new eui.Group;
        return this.grp_slider = t,
        t.x = 82,
        t.y = 183,
        t.elementsContent = [this.btnAdd_i(), this._slider_i(), this.btnSub_i()],
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 28,
        t.source = "item_view_btnAdd_png",
        t.width = 29,
        t.x = 289,
        t.y = 1,
        t
    },
    i._slider_i = function() {
        var t = new exchangeAwardPromptView.ExchangeHSlider;
        return this._slider = t,
        t.height = 28,
        t.minimum = 1,
        t.skinName = "ExchangeHSliderSkin",
        t.width = 235,
        t.x = 41,
        t.y = 0,
        t
    },
    i.btnSub_i = function() {
        var t = new eui.Image;
        return this.btnSub = t,
        t.height = 28,
        t.source = "item_view_btnSub_png",
        t.width = 29,
        t.x = 0,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/SkinViewSkin.exml"] = window.SkinViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_title", "txt_buy", "txt_cost", "iconCost", "btnBuy", "img_pet", "btnInfo", "txt_name", "txt_desc", "btnClose"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this.btnBuy_i(), this._Image4_i(), this.img_pet_i(), this.btnInfo_i(), this.txt_name_i(), this.txt_desc_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.img_title_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_m_png",
        t.width = 476,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_title_i = function() {
        var t = new eui.Image;
        return this.img_title = t,
        t.height = 32,
        t.source = "skin_view_title_png",
        t.width = 102,
        t.x = 34,
        t.y = 1,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 223,
        t.y = 225,
        t.elementsContent = [this._Image3_i(), this.txt_buy_i(), this.txt_cost_i(), this.iconCost_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "item_view_btnbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_buy_i = function() {
        var t = new eui.Label;
        return this.txt_buy = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "购买",
        t.textColor = 16777215,
        t.x = 125,
        t.y = 8,
        t
    },
    i.txt_cost_i = function() {
        var t = new eui.Label;
        return this.txt_cost = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -19,
        t.size = 18,
        t.text = "99999",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.iconCost_i = function() {
        var t = new eui.Image;
        return this.iconCost = t,
        t.height = 20,
        t.source = "item_view_icon_cost_png",
        t.width = 19,
        t.x = 12,
        t.y = 6,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 226,
        t.source = "skin_view_petFrame_png",
        t.width = 138,
        t.x = 16,
        t.y = 43,
        t
    },
    i.img_pet_i = function() {
        var t = new eui.Image;
        return this.img_pet = t,
        t.height = 224,
        t.width = 137,
        t.x = 16,
        t.y = 44,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 28,
        t.source = "skin_view_btnInfo_png",
        t.width = 29,
        t.x = 17,
        t.y = 45,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "商品名字商品名字礼包",
        t.textColor = 4187130,
        t.x = 165,
        t.y = 53,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "内含泰坦神石*2,轮回神石*3，红宝石*50，绿宝石*50,内含泰坦神石*2,轮回神石*3，红宝石*50，绿宝石*50",
        t.textColor = 8757203,
        t.width = 304,
        t.x = 165,
        t.y = 80,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 438,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/SuitViewSkin.exml"] = window.exchangeAwardPromptView.SuitViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_close", "title", "bg", "hero_show", "style", "txt_suit", "viewport_list", "scroller_item", "txt_desc", "Grp_suitEff", "txt_buy", "txt_num", "icon", "imgBtn_exchange", "txt_normal"],
        this.height = 343,
        this.width = 558,
        this.elementsContent = [this.bg_i(), this.style_i(), this.txt_suit_i(), this._Label1_i(), this.scroller_item_i(), this.Grp_suitEff_i(), this.imgBtn_exchange_i(), this.txt_normal_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgBtn_close_i(), this.title_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 340,
        t.source = "common_s9_pop_bg4_png",
        t.width = 551,
        t.x = 5,
        t.y = 3,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "flypet_view_up_bg_png",
        t.width = 558,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.source = "common_pop_btn_close_png",
        t.visible = !1,
        t.x = 515,
        t.y = 3,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 32,
        t.source = "suit_view_title_suit_png",
        t.width = 102,
        t.x = 41,
        t.y = 4,
        t
    },
    i.style_i = function() {
        var t = new eui.Group;
        return this.style = t,
        t.x = 6,
        t.y = 62,
        t.elementsContent = [this._Image3_i(), this.hero_show_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "suit_view_texture_001_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.hero_show_i = function() {
        var t = new eui.Image;
        return this.hero_show = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.bottom = 58,
        t.horizontalCenter = -2,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "suit_view_hero_show_png",
        t
    },
    i.txt_suit_i = function() {
        var t = new eui.Label;
        return this.txt_suit = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装名称",
        t.textColor = 4187130,
        t.x = 240,
        t.y = 56,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "套装部件：",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 346,
        t.y = 97,
        t
    },
    i.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.height = 64,
        t.visible = !1,
        t.width = 376,
        t.x = 346,
        t.y = 129,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.viewport_list_i()],
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t
    },
    i.Grp_suitEff_i = function() {
        var t = new eui.Group;
        return this.Grp_suitEff = t,
        t.x = 240,
        t.y = 129,
        t.elementsContent = [this._Label2_i(), this._Scroller1_i()],
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装效果：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 105,
        t.width = 272,
        t.x = 1,
        t.y = 23,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_desc_i()],
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述套装部件顶部套装部件顶部套部件顶部套装部件顶部套装部件顶部套装部件顶部套装部件顶部描述部套装部件顶部套装部件顶部描述部套装部件顶部套装部件顶部描述",
        t.textColor = 8757203,
        t.width = 272,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_exchange_i = function() {
        var t = new eui.Group;
        return this.imgBtn_exchange = t,
        t.x = 191,
        t.y = 283,
        t.elementsContent = [this._Image4_i(), this.txt_buy_i(), this.txt_num_i(), this.icon_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "item_view_btnbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_buy_i = function() {
        var t = new eui.Label;
        return this.txt_buy = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "购买",
        t.textColor = 16777215,
        t.x = 125,
        t.y = 8,
        t
    },
    i.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -19,
        t.size = 18,
        t.text = "99999",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 20,
        t.source = "item_view_icon_cost_png",
        t.width = 19,
        t.x = 12,
        t.y = 6,
        t
    },
    i.txt_normal_i = function() {
        var t = new eui.Label;
        return this.txt_normal = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "套装部件顶套装套装部件顶部件顶套装部件顶套装套装部件顶部件顶",
        t.textColor = 8757203,
        t.width = 272,
        t.x = 241,
        t.y = 79,
        t
    },
    e
} (eui.Skin);