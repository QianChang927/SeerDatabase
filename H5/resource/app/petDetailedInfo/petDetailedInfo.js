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
petDetailedInfo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PetDetailedItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(t.prototype, "selected", {
            get: function() {
                return egret.superSetter(t, this, "selected")
            },
            set: function(e) {
                e = e && this.data,
                this.img_select.visible = e,
                egret.superSetter(t, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.dataChanged = function() {
            this.data ? (this.icon.visible = !0, this.icon.source = ClientConfig.getItemIcon(this.data), this.lab_num.text = ItemManager.getNumByID(this.data) + "", this.img_select.visible = this.selected) : (this.icon.visible = !1, this.lab_num.text = "", this.img_select.visible = !1)
        },
        t.prototype.destroy = function() {
            this.data = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.ItemRenderer);
    e.Itemitem = t,
    __reflect(t.prototype, "petDetailedInfo.Itemitem")
} (petDetailedInfo || (petDetailedInfo = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
petDetailedInfo; !
function(e) {
    var t = function() {
        function e() {}
        return e.EVENT_SELECT_SKILL = "event_pet_info_seelct_skill",
        e.EVENT_CHANGE_MARK = "event_pet_info_change_mark",
        e.EVENT_CHANGE_SKILL = "event_pet_info_change_skill",
        e.EVENT_OPEN_RESISTANCE = "event_open_resistance",
        e.EVENT_CHANGE_SELECT_SKILL_RADIO_AND_OPEN_SKILL_LIST = "event_change_select_skill_radio_and_open_skill_list",
        e.EVENT_UPDATE_PET_INFO = "event_pet_info_update_pet_info",
        e.EVENT_PET_LEVEL_UP = "event_pet_level_up",
        e.EVENT_CLOSE_LVL_PANEL = "event_close_lvl_panel",
        e.EVENT_CLOSE_USEITEM_PANEL = "event_close_useitem_panel",
        e.EVENT_UPDATE_TEMP_PET_STYLE = "event_update_temp_pet_style",
        e.EVENT_RESET_PET_MODEL_STYLE = "event_reset_pet_model_style",
        e.EVENT_DISENABLE_CHANGE_PET = "event_disenable_change_pet",
        e
    } ();
    e.PetInfoEvent = t,
    __reflect(t.prototype, "petDetailedInfo.PetInfoEvent")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = BindSkillPanelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.initialized = function() {
            this._ary = new eui.ArrayCollection,
            this.scroller_skill.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = e.ItemSkill,
            this.list_viewport.dataProvider = this._ary,
            this._data && this._data.ontouchItemcallback && (this._onTouchCallBack = this._data.ontouchItemcallback),
            this._data && this._data.caller && (this._caller = this._data.caller),
            this._data && this._data.petinfo && (this._petInfo = this._data.petinfo),
            t.prototype.initialized.call(this),
            this._updateView()
        },
        i.prototype._updateView = function() {
            for (var e = [], t = 0; t < this._petInfo.skillArray.length; t++) e.push(this._petInfo.skillArray[t].id);
            this._ary.replaceAll(e)
        },
        i.prototype.initEvents = function() {
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this)
        },
        i.prototype.onTouchTapItem = function(e) {
            e.itemRenderer,
            e.item,
            this._onTouchCallBack && this._caller && this._onTouchCallBack.call(this._caller, e.item),
            this.hide()
        },
        i.prototype.removeEvents = function() {
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this)
        },
        i.prototype.destroy = function() {
            this._ary = null,
            this._onTouchCallBack = null,
            this._caller = null,
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.BindSkillPopView = t,
    __reflect(t.prototype, "petDetailedInfo.BindSkillPopView")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._arry = new eui.ArrayCollection,
            e.MAX = 10,
            e.addEventListener(egret.Event.ADDED_TO_STAGE, e._onEventAddtoStageHandler, e),
            e.skinName = PetChangeSkillSkin,
            e
        }
        return __extends(i, t),
        i.prototype.setOpenCallBack = function(e, t) {
            this._callBack = e,
            this._caller = t
        },
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.scroller_skill.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = e.ItemSkill,
            this._arry = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._arry,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var t = this;
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onEventTouchSkillItemHandler, this),
            ImageButtonUtil.add(this.img_btn_close,
            function() {
                t.hide()
            },
            this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_CHANGE_SKILL, this.onEventChangeSkillHandler, this),
            this.scroller_skill.addEventListener(eui.UIEvent.CHANGE_END, this._onChangeEnd, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this._onEventAddtoStageHandler, this),
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onEventTouchSkillItemHandler, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_CHANGE_SKILL, this.onEventChangeSkillHandler, this),
            ImageButtonUtil.removeAll(this),
            this.scroller_skill.removeEventListener(eui.UIEvent.CHANGE_END, this._onChangeEnd, this)
        },
        i.prototype.onEventTouchSkillItemHandler = function(t) {
            var i = t.item,
            n = new egret.Event(GuideEvent.SELECT_PET_SKILL, !1, !0, i);
            if (EventManager.dispatchEvent(n)) {
                var _ = egret.Event.create(egret.Event, e.PetInfoEvent.EVENT_SELECT_SKILL);
                _.data = {
                    data: t.item,
                    render: t.itemRenderer
                },
                EventManager.dispatchEvent(_),
                egret.Event.release(_)
            }
        },
        i.prototype.onEventChangeSkillHandler = function(e) {
            this._petInfo = e.data,
            this.updateGetSkillListData()
        },
        i.prototype.setData = function(e) {
            this._petInfo = e
        },
        i.prototype._onEventAddtoStageHandler = function() {
            var e = this;
            egret.Tween.removeTweens(this),
            this.alpha = 0,
            this.y = 534,
            this.updateGetSkillListData(),
            this.scroller_skill.stopAnimation(),
            this.scroller_skill.viewport.scrollV = 0,
            egret.Tween.get(this).to({
                y: 266,
                alpha: 1
            },
            500, egret.Ease.getBackOut(2)).call(function() {
                e._callBack && e._caller && e._callBack.apply(e._caller, null)
            },
            this)
        },
        i.prototype.updateGetSkillListData = function() {
            var e = this;
            this._newSkill = PetXMLInfo.getSkillListForLv(this._petInfo.id, this._petInfo.level),
            650 == this._petInfo.id || 651 == this._petInfo.id || 652 == this._petInfo.id ? PetManager.getBlackCanStudySkill(this._petInfo.catchTime,
            function(t) {
                e._setSkillListData(t)
            }) : PetManager.getCanStudySkill(this._petInfo.catchTime,
            function(t) {
                e._setSkillListData(t)
            })
        },
        i.prototype._setSkillListData = function(e) {
            650 == this._petInfo.id || 651 == this._petInfo.id || 652 == this._petInfo.id ? this._newSkill = e: this._newSkill = this._newSkill.concat(e);
            for (var t = 0,
            i = this._petInfo.skillArray; t < i.length; t++) {
                var n = i[t]; - 1 != this._newSkill.indexOf(n.id) && this._newSkill.splice(this._newSkill.indexOf(n.id), 1)
            }
            if (2858 == this._petInfo.id && !GuideManager.isCompleted()) {
                var _ = this._newSkill.indexOf(17835);
                _ >= 0 && (this._newSkill.splice(_, 1), this._newSkill.unshift(17835)),
                this.scroller_skill.scrollPolicyV = eui.ScrollPolicy.OFF
            }
            return 0 == this._newSkill.length ? (BubblerManager.getInstance().showText("你的这只精灵没有可以唤醒的技能！"), void this.hide()) : void this.refreshSkillList()
        },
        i.prototype.refreshSkillList = function() {
            this._arry.replaceAll(this._newSkill)
        },
        i.prototype._onChangeEnd = function(e) {
            this.scroller_skill.height,
            this.scroller_skill.viewport.contentHeight,
            this.scroller_skill.viewport.scrollV
        },
        i.prototype.hide = function() {
            var t = this;
            egret.Tween.removeTweens(this),
            egret.Tween.get(this).to({
                y: 534,
                alpha: 0
            },
            300).call(function() {
                DisplayUtil.removeForParent(t),
                EventManager.dispatchEventWith(e.PetInfoEvent.EVENT_DISENABLE_CHANGE_PET, !1, !0)
            },
            this)
        },
        i.prototype.destroy = function() {
            this._callBack = null,
            this._caller = null,
            this.removeEvents(),
            egret.Tween.removeTweens(this),
            DisplayUtil.removeForParent(this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.PetInfoSkillPanel = t,
    __reflect(t.prototype, "petDetailedInfo.PetInfoSkillPanel")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i._newSeerGuideEventList = ["event_get_rb_itemUp_rect", "event_get_item_icon_rect"],
            i._selectNavValue = 1,
            i.MAX_NUM = [100, 100, 10],
            i.EXP_ITEM_IDS = [400064, 400065, 400063],
            i.skinName = PetLvlUpSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.rb_itemUp.name = "rb_itemUp",
            this._radioGrpNav = this.rb_expUp.group,
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = e.Itemitem,
            this._bagItemsAry = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._bagItemsAry,
            DisplayUtil.setEnabled(this.img_btn_up_1, !1, !0),
            DisplayUtil.setEnabled(this.img_btn_up_5, !1, !0),
            DisplayUtil.setEnabled(this.img_btn_up_10, !1, !0),
            DisplayUtil.setEnabled(this.img_btn_up_100, !1, !0),
            this.img_btn_up_100.name = "btnLv100"
        },
        i.prototype._parseData = function() {
            this._petInfo = this._data
        },
        i.prototype.initEvents = function() {
            var e = this;
            this._radioGrpNav.addEventListener(egret.Event.CHANGE, this.onChangeNavHandler, this),
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler, this),
            ImageButtonUtil.add(this.img_btn_close, this.onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_exchange_0, this.onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_exchange_1, this.onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_exchange_2, this.onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_up_1, this.onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_up_5, this.onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_up_10, this.onTouchTapButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_up_100, this.onTouchTapButtonHandler, this),
            PetManager.addEventListener(PetEvent.UPDATE_INFO, this.onEventPetInfoChangedHanlder, this),
            EventManager.addEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onEventItemUseSucessfulHandle, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this._updateItems, this);
            for (var t = 0; t < this._newSeerGuideEventList.length; t++);
            for (var i = 0; 3 > i; i++) this["icon_item_" + i].name = "icon_item_" + i,
            ImageButtonUtil.add(this["icon_item_" + i],
            function(t) {
                var i = t.currentTarget.name,
                n = ~~i.split("_")[2],
                _ = {
                    id: e.EXP_ITEM_IDS[n]
                },
                r = {
                    srcWorldPos: e.localToGlobal(27),
                    dir: "right-top",
                    rx: 0,
                    ry: 0 / 0
                };
                tipsPop.TipsPop.openItemPop(_, r)
            },
            this, !1, !1)
        },
        i.prototype._onNewSeerGuideEvent = function(e) {
            var t = e.type;
            switch (t) {
            case "event_get_rb_itemUp_rect":
                guideModule.DispatchCustomEventComplete(t, this.rb_itemUp);
                break;
            case "event_get_item_icon_rect":
                guideModule.DispatchCustomEventComplete(t, this.list_viewport.getChildAt(0))
            }
        },
        i.prototype.removeEvents = function() {
            this._radioGrpNav.removeEventListener(egret.Event.CHANGE, this.onChangeNavHandler, this),
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler, this),
            PetManager.removeEventListener(PetEvent.UPDATE_INFO, this.onEventPetInfoChangedHanlder, this),
            EventManager.removeEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onEventItemUseSucessfulHandle, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this._updateItems, this);
            for (var e = 0; 3 > e; e++) ImageButtonUtil.remove(this["icon_item_" + e]);
            ImageButtonUtil.removeAll(this);
            for (var t = 0; t < this._newSeerGuideEventList.length; t++);
        },
        i.prototype.onChangeNavHandler = function(e) {
            this._selectNavValue = ~~this._radioGrpNav.selectedValue,
            2 === this._selectNavValue && (this.scroller_item.stopAnimation(), this.scroller_item.viewport.scrollV = 0),
            this._upDateView()
        },
        i.prototype.onEventPetInfoChangedHanlder = function() {
            this._petInfo = PetManager.getPetInfo(this._petInfo.catchTime),
            this._upDateView()
        },
        i.prototype.onEventItemUseSucessfulHandle = function() {
            2 === this._selectNavValue && this._updateItems()
        },
        i.prototype._upDateView = function() {
            this.grp_exp.visible = 1 === this._selectNavValue,
            this.scroller_item.visible = 2 === this._selectNavValue,
            1 === this._selectNavValue ? this._updateExp() : 2 === this._selectNavValue && this._updateItems(),
            this.lab_lvl.text = this._petInfo.level + "/100",
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 100)
        },
        i.prototype._updateItems = function() {
            this.setItems()
        },
        i.prototype.setItems = function() {
            var e = ItemXMLInfo.getItemIdsByBagItemType(ItemType.GEM_ITEM);
            e = e.filter(function(e) {
                return ItemManager.getNumByID(e) > 0
            },
            this),
            e = ItemManager.filterItemIds(e);
            var t = ItemManager.GetBagItemsArryCollect(e);
            this._bagItemsAry.replaceAll(t)
        },
        i.prototype._updateExp = function() {
            this.updateTotalExp(),
            this.updateExpTicket()
        },
        i.prototype.updateTotalExp = function() {
            var e = this;
            SocketConnection.sendByQueue(CommandID.PET_GET_EXP, [],
            function(t) {
                var i = t.data;
                e._oldExp = i.readUnsignedInt(),
                e.lab_total_exp.text = e._oldExp + "",
                e.updateLvUpExp()
            })
        },
        i.prototype.updateLvUpExp = function() {
            var e = this;
            SocketConnection.sendByQueue(CommandID.PET_GET_LEVEL_UP_EXP, [~~this._petInfo.catchTime],
            function(t) {
                var i = t.data;
                e._levelupExp = [];
                for (var n = 0; 4 > n; n++) e._levelupExp.push(i.readUnsignedInt());
                DisplayUtil.setEnabled(e.img_btn_up_1, !1, !0),
                DisplayUtil.setEnabled(e.img_btn_up_5, !1, !0),
                DisplayUtil.setEnabled(e.img_btn_up_10, !1, !0),
                DisplayUtil.setEnabled(e.img_btn_up_100, !1, !0),
                e._petInfo.level <= 99 && e._oldExp >= e._levelupExp[0] && DisplayUtil.setEnabled(e.img_btn_up_1, !0),
                e._petInfo.level <= 95 && e._oldExp >= e._levelupExp[1] && DisplayUtil.setEnabled(e.img_btn_up_5, !0),
                e._petInfo.level <= 90 && e._oldExp >= e._levelupExp[2] && DisplayUtil.setEnabled(e.img_btn_up_10, !0),
                e._petInfo.level <= 99 && e._oldExp > e._levelupExp[3] && DisplayUtil.setEnabled(e.img_btn_up_100, !0),
                e.lab_next_exp.text = e._levelupExp[0] + ""
            })
        },
        i.prototype.updateExpTicket = function() {
            var e = this;
            ItemManager.updateItems(this.EXP_ITEM_IDS,
            function() {
                for (var t = 0; 3 > t; t++) {
                    e["icon_item_" + t].source = ClientConfig.getItemIcon(e.EXP_ITEM_IDS[t]);
                    var i = ItemManager.getNumByID(e.EXP_ITEM_IDS[t]),
                    n = ItemXMLInfo.getMaxNum(e.EXP_ITEM_IDS[t]);
                    e["lab_exchange_item_" + t].text = i + "/" + n;
                    ItemXMLInfo.getItemObj(e.EXP_ITEM_IDS[t]).Exp
                }
            })
        },
        i.prototype.onItemTapHandler = function(e) {
            if (e.item) {
                var t = {
                    id: e.item,
                    useItemFun: this.useItem,
                    caller: this
                },
                i = {
                    srcWorldPos: this.localToGlobal(27),
                    dir: "right-top",
                    rx: 0,
                    ry: 0 / 0
                };
                tipsPop.TipsPop.openItemPop(t, i)
            }
        },
        i.prototype.useItem = function(e) {
            ItemUseManager.getInstance().useItem(this._petInfo, e)
        },
        i.prototype.onTouchTapButtonHandler = function(e) {
            switch (e.currentTarget) {
            case this.img_btn_close:
                this.hide();
                break;
            case this.img_btn_up_1:
                this.useSetExp(0);
                break;
            case this.img_btn_up_5:
                this.useSetExp(1);
                break;
            case this.img_btn_up_10:
                this.useSetExp(2);
                break;
            case this.img_btn_up_100:
                this.useSetExp(3);
                break;
            case this.img_btn_exchange_0:
                this.exchange(0);
                break;
            case this.img_btn_exchange_1:
                this.exchange(1);
                break;
            case this.img_btn_exchange_2:
                this.exchange(2)
            }
        },
        i.prototype.exchange = function(e) {
            var t = this,
            i = ItemManager.getNumByID(this.EXP_ITEM_IDS[e]);
            if (0 >= i) return void BubblerManager.getInstance().showText(ItemXMLInfo.getName(this.EXP_ITEM_IDS[e]) + "券数量不足，无法兑换");
            var n = this.MAX_NUM[e],
            _ = Math.min(n, i),
            r = "你是否确认兑换" + _ + "张" + ItemXMLInfo.getName(this.EXP_ITEM_IDS[e]) + "!";
            Alert.show(r,
            function() {
                SocketConnection.sendWithPromise(CommandID.EXT_EXP_TICK, [t.EXP_ITEM_IDS[e], _]).then(function(e) {
                    var i = e.data,
                    n = i.readUnsignedInt();
                    BubblerManager.getInstance().showText(n + "点<font color='#ff0000'>积累经验</font>已存入你的经验分配器中。", !0),
                    t._updateExp()
                })
            })
        },
        i.prototype.useSetExp = function(t) {
            var i = this,
            n = "确定要消耗" + TextFormatUtil.getRedTxt(this._levelupExp[t].toString()) + "经验为" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(this._petInfo.id)) + "升级吗？";
            Alert.show(n,
            function() {
                SocketConnection.sendWithPromise(CommandID.PET_SET_EXP, [i._petInfo.catchTime, i._levelupExp[t]]).then(function() {
                    EventManager.dispatchEvent(new egret.Event(e.PetInfoEvent.EVENT_UPDATE_PET_INFO)),
                    EventManager.dispatchEventWith("pet_level_up")
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.dispatchEvent(new egret.Event(e.PetInfoEvent.EVENT_CLOSE_LVL_PANEL))
        },
        i
    } (PopView);
    e.PetlvlupView = t,
    __reflect(t.prototype, "petDetailedInfo.PetlvlupView")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t; !
    function(e) {
        e.TYPE_POWER = "power",
        e.TYPE_NATURE = "nature",
        e.TYPE_CHARACTER = "character"
    } (t = e.TypeUsetItemPanel || (e.TypeUsetItemPanel = {}));
    var i = function(i) {
        function n() {
            var e = i.call(this) || this;
            return e._newSeerGuideEventList = ["event_get_close_btn_rect", "event_get_PetUseItemPanel_btnClose__rect"],
            e.skinName = PetUseItemPanelSkin,
            e
        }
        return __extends(n, i),
        n.prototype.initialized = function() {
            this.currentState = this._type,
            this.validateNow(),
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = e.Itemitem,
            this._bagItemsAry = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._bagItemsAry,
            i.prototype.initialized.call(this),
            this.updateView()
        },
        n.prototype.setData = function(e) {
            i.prototype.setData.call(this, e),
            this._type = e.type,
            this._petInfo = e.petInfo
        },
        n.prototype.setPetInfo = function(e) {
            this._petInfo = e
        },
        n.prototype.initEvents = function() {
            ImageButtonUtil.add(this.img_btn_close, this.onTouchTapButtonHandler, this),
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler, this),
            PetManager.addEventListener(PetEvent.UPDATE_INFO, this.onEventPetInfoChangedHanlder, this),
            EventManager.addEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onEventItemUseSucessfulHandle, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this._updateItems, this);
            for (var e = 0; e < this._newSeerGuideEventList.length; e++);
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler, this),
            PetManager.removeEventListener(PetEvent.UPDATE_INFO, this.onEventPetInfoChangedHanlder, this),
            EventManager.removeEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onEventItemUseSucessfulHandle, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this._updateItems, this);
            for (var e = 0; e < this._newSeerGuideEventList.length; e++);
        },
        n.prototype._onNewSeerGuideEvent = function(e) {
            switch (e.type) {
            case "event_get_close_btn_rect":
            case "event_get_PetUseItemPanel_btnClose__rect":
                guideModule.DispatchCustomEventComplete(e.type, this.img_btn_close)
            }
        },
        n.prototype.onEventPetInfoChangedHanlder = function() {
            this._petInfo = PetManager.getPetInfo(this._petInfo.catchTime),
            this.updateView()
        },
        n.prototype.onEventItemUseSucessfulHandle = function() {
            this._updateItems()
        },
        n.prototype.updateView = function() {
            this._updateDesc(),
            this._updateItems()
        },
        n.prototype._updateItems = function() {
            this.setItems()
        },
        n.prototype.updatExHp = function() {
            var e = this;
            SocketConnection.sendWithPromise(CommandID.JAMES_ARMOR_QUERY_ABIBLITY, [this._petInfo.catchTime]).then(function(t) {
                var i = t.data;
                i.position = 0;
                var n = i.readUnsignedInt();
                e.lab_desc.text = "当前体力上限：" + n + "/20"
            })
        },
        n.prototype._updateDesc = function() {
            switch (this._type) {
            case t.TYPE_POWER:
                this.updatExHp();
                break;
            case t.TYPE_NATURE:
                this.lab_desc.text = "当前天赋：" + this._petInfo.dv;
                break;
            case t.TYPE_CHARACTER:
                var e = NatureXMLInfo.getName(this._petInfo.nature),
                i = NatureXMLInfo.getDes2(this._petInfo.nature);
                this.lab_desc.textFlow = [{
                    text: "当前性格：",
                    style: {
                        textColor: 16777215,
                        size: 22
                    }
                },
                {
                    text: e,
                    style: {
                        textColor: 16777215,
                        size: 22
                    }
                },
                {
                    text: "(" + i + ")",
                    style: {
                        textColor: 16777215,
                        size: 18
                    }
                }]
            }
        },
        n.prototype.setItems = function() {
            var e;
            switch (this._type) {
            case t.TYPE_POWER:
                e = ItemXMLInfo.getItemIdsByBagItemType(ItemType.POWER),
                e = e.filter(function(e) {
                    return ItemManager.getNumByID(e) > 0
                },
                this);
                break;
            case t.TYPE_NATURE:
                e = ItemXMLInfo.getItemIdsByBagItemType(ItemType.GEM_ASSIST_ITEM),
                e = e.filter(function(e) {
                    return ItemManager.getNumByID(e) > 0
                },
                this);
                break;
            case t.TYPE_CHARACTER:
                e = ItemXMLInfo.getItemIdsByBagItemType(ItemType.CHARACTER),
                e = e.filter(function(e) {
                    return ItemManager.getNumByID(e) > 0
                },
                this)
            }
            e = ItemManager.filterItemIds(e);
            var i = ItemManager.GetBagItemsArryCollect(e, 25, 5);
            this._bagItemsAry.replaceAll(i),
            this.list_viewport.validateNow()
        },
        n.prototype.onItemTapHandler = function(e) {
            if (e.item) {
                var t = new egret.Event("click_item", !1, !0, e.item);
                if (!EventManager.dispatchEvent(t)) return;
                var i = {
                    id: e.item,
                    useItemFun: this.useItem,
                    caller: this
                },
                n = {
                    srcWorldPos: this.localToGlobal(27),
                    dir: "right-top",
                    rx: 0,
                    ry: 0 / 0
                };
                tipsPop.TipsPop.openItemPop(i, n)
            }
        },
        n.prototype.useItem = function(e) {
            ItemUseManager.getInstance().useItem(this._petInfo, e)
        },
        n.prototype.onTouchTapButtonHandler = function(e) {
            switch (e.currentTarget) {
            case this.img_btn_close:
                this.hide()
            }
        },
        n.prototype.destroy = function() {
            i.prototype.destroy.call(this),
            EventManager.dispatchEvent(new egret.Event(e.PetInfoEvent.EVENT_CLOSE_USEITEM_PANEL))
        },
        n
    } (PopView);
    e.PetUseItemPanel = i,
    __reflect(i.prototype, "petDetailedInfo.PetUseItemPanel")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._selctNavBarType = 1,
            e._addCol = 0,
            e._newSeerGuideEventList = ["event_get_RuneWarehouse_item_rect"],
            e.addEventListener(egret.Event.ADDED_TO_STAGE, e.open, e),
            e.skinName = RuneWarehouseSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.percentHeight = this.percentWidth = 0 / 0,
            this.radioBtnsGroupNavBar = this.rad_all.group,
            this._selctNavBarType = 1,
            this.scroller_rune.viewport = this.list_rune,
            this.list_rune.itemRenderer = e.ItemRune,
            GuideManager.isCompleted() || (this.scroller_rune.scrollPolicyV = eui.ScrollPolicy.OFF),
            this._arry = new eui.ArrayCollection,
            this.list_rune.dataProvider = this._arry,
            this.addEvents(),
            this._adapLayout(),
            this.updateWarehouse()
        },
        i.prototype._adapLayout = function() {
            if (GuideManager.isCompleted()) {
                var e = egret.lifecycle.stage.stageWidth - 1136;
                this.bg.width += e,
                this.scroller_rune.width += e,
                this.width += e,
                this._addCol = Math.max(0, Math.floor((e + 16) / 120))
            }
        },
        i.prototype.setPetInfo = function(e) {
            this._petInfo = e
        },
        i.prototype.addEvents = function() {
            this.radioBtnsGroupNavBar.addEventListener(egret.Event.CHANGE, this.onChangeNavBar, this),
            this.list_rune.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouChTapRune, this),
            this.btnHide.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHide, this),
            EventManager.addEventListener(CountermarkEvent.UPGRADE_END, this.updateMark, this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this)
        },
        i.prototype.onSearchChanged = function() {
            this.updateWarehouse()
        },
        i.prototype.onClickHide = function(e) {
            this.hide()
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.open, this),
            this.radioBtnsGroupNavBar.removeEventListener(egret.Event.CHANGE, this.onChangeNavBar, this),
            this.list_rune.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouChTapRune, this),
            this.btnHide.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHide, this),
            EventManager.removeEventListener(CountermarkEvent.UPGRADE_END, this.updateMark, this)
        },
        i.prototype._onNewSeerGuideEvent = function(e) {
            switch (e.type) {
            case "event_get_RuneWarehouse_item_rect":
                guideModule.DispatchCustomEventComplete(e.type, this.list_rune.getChildAt(0))
            }
        },
        i.prototype.onTouChTapRune = function(e) {
            if (e.item) {
                var t = {
                    ins: e.item,
                    putOnCallBack: this.putOnCallBack,
                    lvUpCallBack: this.lvUpCallBack,
                    caller: this
                };
                tipsPop.TipsPop.openCounterMarkPop(t);
                var i = new egret.Event("click_mark", !1, !0, e.item.markID);
                EventManager.dispatchEvent(i)
            }
        },
        i.prototype.putOnCallBack = function(t) {
            console.log("putOnCallBack ! ! !"),
            this._selectCounterMarkId = t.obtainTime;
            var i = egret.Event.create(egret.Event, e.PetInfoEvent.EVENT_CHANGE_MARK);
            i.data = this._selectCounterMarkId,
            EventManager.dispatchEvent(i),
            egret.Event.release(i)
        },
        i.prototype.onChangeNavBar = function(e) {
            this._selctNavBarType = ~~this.radioBtnsGroupNavBar.selectedValue,
            this.list_rune.selectedItem = null,
            this.resetScroller(),
            this.updateWarehouse()
        },
        i.prototype.lvUpCallBack = function(e) {},
        i.prototype.updateMark = function(e) {
            var t = e.info,
            i = CountermarkXMLInfo.getMonsterIDs(t.markID); (0 == i.length || i.indexOf(this._petInfo.id) >= 0) && this.updateWarehouse()
        },
        i.prototype.updateWarehouse = function() {
            var e = this;
            CountermarkController.getPetBindMarksAndNoBindMarks(this._petInfo).then(function(t) {
                switch (e._selctNavBarType) {
                case 1:
                    break;
                case 2:
                    t = t.filter(function(e) {
                        var t = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                        i = 2 === Number(CountermarkXMLInfo.getMintmarkQuality(e.markID));
                        return t && i
                    });
                    break;
                case 3:
                    t = t.filter(function(e) {
                        var t = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                        i = 3 === Number(CountermarkXMLInfo.getMintmarkQuality(e.markID));
                        return t && i
                    });
                    break;
                case 4:
                    t = t.filter(function(e) {
                        var t = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                        i = 4 === Number(CountermarkXMLInfo.getMintmarkQuality(e.markID));
                        return t && i
                    });
                    break;
                case 5:
                    t = t.filter(function(e) {
                        var t = CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_UNIVERSAL,
                        i = 5 === Number(CountermarkXMLInfo.getMintmarkQuality(e.markID));
                        return t && i
                    });
                    break;
                case 6:
                    t = t.filter(function(e) {
                        return CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_COMMON_ABLITY
                    });
                    break;
                case 7:
                    t = t.filter(function(e) {
                        return CountermarkXMLInfo.getType(e.markID) === CountermarkType.MARK_IS_SKILL
                    })
                }
                var i = e.txtSearch.text.trim();
                if (i.length > 0) {
                    var n = ~~i;
                    t = n > 0 ? t.filter(function(e) {
                        return e.markID === n
                    }) : t.filter(function(e) {
                        return SearchUtil.isMatch(i, e.markName)
                    })
                }
                t = t.sort(function(e, t) {
                    return e.isBindMon && t.isBindMon ? e.markID > t.markID ? -1 : e.markID < t.markID ? 1 : e.level == t.level ? t.obtainTime - e.obtainTime: t.level - e.level: e.isBindMon && !t.isBindMon ? -1 : !e.isBindMon && t.isBindMon ? 1 : e.markID == t.markID ? e.level == t.level ? t.obtainTime - e.obtainTime: t.level - e.level: t.markID - e.markID
                });
                var _ = e._addCol + 4;
                t = ItemManager.GetBagItemsArryCollect(t, 5 * _, _),
                e._arry.removeAll(),
                e.scroller_rune.viewport.scrollV = 0;
                for (var r = 0; r < t.length; r++) e._arry.addItem(t[r]);
                e.list_rune.validateNow()
            })
        },
        i.prototype.open = function() {
            egret.Tween.removeTweens(this);
            var e = this.parent.globalToLocal();
            this.x = e.x - this.width,
            egret.Tween.get(this).to({
                x: e.x
            },
            500, egret.Ease.getBackOut(2)).call(function() {
                EventManager.dispatchEventWith(GameEvent.COMPLETE)
            },
            this),
            this.resetScroller(),
            this.list_rune.selectedItem = null,
            this.updateWarehouse(),
            EventManager.addEventListener("MARK_WAREHOUSE_SHOW", this.onMarkWarehouseShow, this)
        },
        i.prototype.hide = function() {
            var t = this;
            egret.Tween.removeTweens(this);
            var i = this.parent.globalToLocal();
            egret.Tween.get(this).to({
                x: i.x - this.width
            },
            200).call(function() {
                DisplayUtil.removeForParent(t),
                EventManager.dispatchEventWith(e.PetInfoEvent.EVENT_DISENABLE_CHANGE_PET, !1, !0)
            },
            this),
            EventManager.removeEventListener("MARK_WAREHOUSE_SHOW", this.onMarkWarehouseShow, this)
        },
        i.prototype.onMarkWarehouseShow = function(e) {
            e.preventDefault()
        },
        i.prototype.resetScroller = function() {
            this.scroller_rune.stopAnimation(),
            this.scroller_rune.viewport.scrollV = 0
        },
        i.prototype.destroy = function() {
            this._petInfo = null,
            this.removeEvents(),
            egret.Tween.removeTweens(this),
            DisplayUtil.removeForParent(this),
            t.prototype.destroy.call(this),
            EventManager.removeEventListener("MARK_WAREHOUSE_SHOW", this.onMarkWarehouseShow, this)
        },
        i
    } (BaseModule);
    e.RuneWarehouse = t,
    __reflect(t.prototype, "petDetailedInfo.RuneWarehouse")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i.skinName = BagItemSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = e.Itemitem,
            this._ary = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary,
            this.initEvent(),
            this.updateItems()
        },
        i.prototype.initEvent = function() {
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItems, this)
        },
        i.prototype.removeEvent = function() {
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItems, this)
        },
        i.prototype.onTouchTapItem = function(e) {
            if (e.item) {
                var t = {
                    id: e.item,
                    useItemFun: this.useItem,
                    caller: this
                },
                i = {
                    srcWorldPos: this.parent.localToGlobal(18),
                    dir: "right-top",
                    rx: 0,
                    ry: 0 / 0
                };
                tipsPop.TipsPop.openItemPop(t, i)
            }
        },
        i.prototype.useItem = function(e) {
            ItemUseManager.getInstance().useItem(this._petInfo, e)
        },
        i.prototype.setPetInfo = function(e) {
            this._petInfo = e
        },
        i.prototype.Show = function() {
            this.list_viewport.selectedItem = null,
            this.scroller_item.stopAnimation(),
            this.scroller_item.viewport.scrollV = 0
        },
        i.prototype.updateItems = function() {
            this.setItems()
        },
        i.prototype.setItems = function() {
            var e = ItemManager.getPetItemIDs();
            e = ItemManager.filterItemIds(e);
            var t = ItemManager.GetBagItemsArryCollect(e);
            this._ary.replaceAll(t)
        },
        i.prototype.destroy = function() {
            this.removeEvent(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.BagItem = t,
    __reflect(t.prototype, "petDetailedInfo.BagItem")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.skinName = EnergyBeadSkin,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._addEvents()
        },
        t.prototype._addEvents = function() {
            TipsManager.getInstance().addTips(this.grp_bead, TipsManager.TIPS_TYPE_NORMAL, "")
        },
        t.prototype._removeEvents = function() {
            TipsManager.getInstance().removeTips(this.grp_bead)
        },
        t.prototype.setEffInfo = function(e) {
            this._petEffInfo = e,
            this._updateView()
        },
        t.prototype._updateView = function() {
            this.icon.source = ClientConfig.getBeadIcon(this._petEffInfo.itemId),
            this.lab_num.text = this._petEffInfo.leftCount + "";
            var e = "剩余使用次数:" + this._petEffInfo.leftCount.toString(),
            t = ItemXMLInfo.getName(this._petEffInfo.itemId),
            i = PetEffectXMLInfo.getDes(this._petEffInfo.itemId),
            n = "<font color='#ffff00' size='15'>" + t + "</font>\r\r<font color='#ff0000'>" + e + "</font>\r\r<font color='#ffffff'>" + i + "</font>",
            _ = {};
            _.html = (new egret.HtmlTextParser).parse(n),
            TipsManager.getInstance().ChangeTipsData(this.grp_bead, _)
        },
        t.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.EnergyBead = t,
    __reflect(t.prototype, "petDetailedInfo.EnergyBead")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t; !
    function(e) {
        e[e.TYPE_INFO = 1] = "TYPE_INFO",
        e[e.TYPE_SKILL = 2] = "TYPE_SKILL",
        e[e.TYPE_KANGXING = 3] = "TYPE_KANGXING",
        e[e.TYPE_SKIN = 4] = "TYPE_SKIN",
        e[e.TYPE_ITEM = 5] = "TYPE_ITEM"
    } (t = e.PetDetailedInfoNavBarType || (e.PetDetailedInfoNavBarType = {}));
    var i = function(i) {
        function n(e) {
            var n = i.call(this, e) || this;
            n._currentSelectNavBar = t.TYPE_INFO,
            StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击进入信息页签"),
            n.data && n.data.type && (n._currentSelectNavBar = n.data.type),
            n.data && n.data.param && (n._styleParam = n.data.param),
            n.data && n.data.petList && (n._pets = n.data.petList),
            n.data && n.data.petinfo && (n._petInfo = n.data.petinfo);
            for (var _ = 0; _ < n._pets.length; _++) n._petInfo.catchTime === n._pets[_] && (n._currentIdx = _);
            return n._isChangeing = !1,
            n.skinName = PetDetailedInformationSkin,
            n
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            this.rb_skill.name = "rb_skill",
            this.rb_info.name = "rb_info",
            this.img_btn_close.name = "btnClose",
            this.btnNext.visible = this.btnPre.visible = this._pets && this._pets.length > 1,
            this._radioButtonGroupNavbar = this.rb_info.group,
            this.viewStack.addChild(new e.PetInfoDefaultView(this._petInfo)),
            this.viewStack.addChild(new e.petInfoSkillView(this._petInfo)),
            this.viewStack.addChild(new e.PetinfoResistance(this._petInfo)),
            this.viewStack.addChild(new e.PetInfoSkinView(this._petInfo)),
            this.viewStack.addChild(new e.PetInfoItemView(this._petInfo)),
            this.petStyleView.SetInitComp(core.component.pet.PetModel.DYNAMIC_MODEL, !0, !0),
            this._radioButtonGroupNavbar.selectedValue = this._currentSelectNavBar,
            this.petStyleView.SetPetData(this._petInfo),
            this.changeViewStack(this._currentSelectNavBar),
            this.initListen(),
            this.resize()
        },
        n.prototype.resize = function() {
            this.bg && this.bg.width < egret.lifecycle.stage.stageWidth && (this.bg.width = egret.lifecycle.stage.stageWidth)
        },
        n.prototype.initListen = function() {
            var t = this;
            ImageButtonUtil.add(this.img_btn_close,
            function() {
                t.onClose()
            },
            this),
            ImageButtonUtil.add(this.btnNext,
            function() {
                t._isChangeing || (t._currentIdx++, t._currentIdx >= t._pets.length && (t._currentIdx = 0), t._onUpdateChange())
            },
            this),
            ImageButtonUtil.add(this.btnPre,
            function() {
                t._isChangeing || (t._currentIdx--, t._currentIdx < 0 && (t._currentIdx = t._pets.length - 1), t._onUpdateChange())
            },
            this),
            this.petStyleView.addEventListener(core.component.pet.PetModel.EVENT_LOAD_COMPLETE, this._onLoadPetComplete, this),
            this._radioButtonGroupNavbar.addEventListener(egret.Event.CHANGE, this.onChooseNavbar, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_OPEN_RESISTANCE, this.onChangeResistance, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_CHANGE_SKILL, this.onChangSkill, this),
            EventManager.addEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onUseItem, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_CHANGE_SELECT_SKILL_RADIO_AND_OPEN_SKILL_LIST, this.openSkillNav, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_UPDATE_PET_INFO, this.updatePetInfo, this),
            PetManager.addEventListener(PetEvent.UPDATE_INFO, this.updatePetInfos, this),
            PetManager.addEventListener(PetEvent.EQUIP_SKIN, this.updatePetInfo, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_UPDATE_TEMP_PET_STYLE, this.updateTempView, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_RESET_PET_MODEL_STYLE, this.resetPetModelStyle, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_DISENABLE_CHANGE_PET, this._onDisEnableChangePets, this),
            EventManager.addEventListener(GuideManager.GET_DISPLAY_OBJECT_RECT, this.setGuideRect, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.resize, this)
        },
        n.prototype.setGuideRect = function(e) {
            var t = e.data;
            if (t && this[t]) {
                var i = this[t];
                if (i && i.stage) {
                    var n = (i.localToGlobal(0, 0), i.getBounds());
                    console.log(n),
                    GuideManager.currRect = i.getBounds()
                }
            }
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.petStyleView.removeEventListener(core.component.pet.PetModel.EVENT_LOAD_COMPLETE, this._onLoadPetComplete, this),
            this._radioButtonGroupNavbar.removeEventListener(egret.Event.CHANGE, this.onChooseNavbar, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_OPEN_RESISTANCE, this.onChangeResistance, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_CHANGE_SKILL, this.onChangSkill, this),
            EventManager.removeEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onUseItem, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_CHANGE_SELECT_SKILL_RADIO_AND_OPEN_SKILL_LIST, this.openSkillNav, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_UPDATE_PET_INFO, this.updatePetInfo, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_UPDATE_TEMP_PET_STYLE, this.updateTempView, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_RESET_PET_MODEL_STYLE, this.resetPetModelStyle, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_DISENABLE_CHANGE_PET, this._onDisEnableChangePets, this),
            PetManager.removeEventListener(PetEvent.UPDATE_INFO, this.updatePetInfos, this),
            PetManager.removeEventListener(PetEvent.EQUIP_SKIN, this.updatePetInfo, this)
        },
        n.prototype._onLoadPetComplete = function(e) {
            this._isChangeing = !1
        },
        n.prototype._onDisEnableChangePets = function(e) {
            this._FlagLockChangePet = e.data,
            DisplayUtil.setEnabled(this.btnPre, this._FlagLockChangePet, !this._FlagLockChangePet),
            DisplayUtil.setEnabled(this.btnNext, this._FlagLockChangePet, !this._FlagLockChangePet)
        },
        n.prototype.onChangeResistance = function(e) {
            this._petInfo = e.data,
            this.onChnagePetInfo()
        },
        n.prototype.onChooseNavbar = function(e) {
            this._currentSelectNavBar = this._radioButtonGroupNavbar.selectedValue,
            EventManager.dispatchEvent(new egret.Event("change_detail_tab", !1, !0, this._currentSelectNavBar)) ? this.changeViewStack(this._currentSelectNavBar) : e.preventDefault()
        },
        n.prototype.updateTempView = function(e) {
            this._isChangeing = !0,
            this.petStyleView.updateTempView(e.data)
        },
        n.prototype.resetPetModelStyle = function(e) {
            this._isChangeing = !0,
            this.petStyleView.resetModel()
        },
        n.prototype.changeViewStack = function(e) {
            var t = this.viewStack.getChildAt(this.viewStack.selectedIndex);
            try {
                t.Hide()
            } catch(i) {
                console.log(i)
            }
            this.viewStack.selectedIndex = e - 1;
            var n = this.viewStack.getChildAt(this.viewStack.selectedIndex);
            try {
                n.UpdateData(this._petInfo),
                n.Show(),
                n.UpdateRender()
            } catch(i) {
                console.log(i)
            }
            this._styleParam && (n.openParam(this._styleParam), this._styleParam = null)
        },
        n.prototype.openSkillNav = function(e) {
            this._radioButtonGroupNavbar.selectedValue = this._currentSelectNavBar = t.TYPE_SKILL,
            this._styleParam = "openSkillList",
            this.changeViewStack(this._currentSelectNavBar)
        },
        n.prototype.onChnagePetInfo = function() {
            var e = this.viewStack.getChildAt(this.viewStack.selectedIndex);
            switch (this.viewStack.selectedIndex) {
            case 0:
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击进入信息页签");
                break;
            case 1:
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击进入技能页签");
                break;
            case 2:
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击进入抗性页签");
                break;
            case 3:
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击进入皮肤页签");
                break;
            case 4:
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击进入道具页签")
            }
            e.UpdateData(this._petInfo),
            e.Show(),
            e.UpdateRender()
        },
        n.prototype.onChangSkill = function(e) {
            this._petInfo = e.data,
            this.onChnagePetInfo()
        },
        n.prototype.onUseItem = function(e) {
            this.updatePetInfo()
        },
        n.prototype.updatePetInfo = function(e) {
            var t = this;
            PetManager.UpdateBagPetInfoAsynce(this._petInfo.catchTime).then(function(e) {
                t._petInfo = e;
                var i = t.viewStack.getChildAt(t.viewStack.selectedIndex);
                t._isChangeing = !0,
                t.petStyleView.SetPetData(t._petInfo),
                i.UpdateData(t._petInfo),
                i.UpdateRender()
            })["catch"](function(e) {
                console.log("使用物品后更新精灵详情失败", e)
            })
        },
        n.prototype.updatePetInfos = function(e) {
            this._petInfo = PetManager.getPetInfo(this._petInfo.catchTime),
            this._isChangeing = !0,
            this.petStyleView.SetPetData(this._petInfo);
            var t = this.viewStack.getChildAt(this.viewStack.selectedIndex);
            t.UpdateData(this._petInfo),
            t.UpdateRender()
        },
        n.prototype._onUpdateChange = function() {
            var e = this,
            t = this._pets[this._currentIdx];
            PetManager.upDateBagPetInfo(t,
            function(t) {
                e._petInfo = t;
                var i = e.viewStack.getChildAt(e.viewStack.selectedIndex);
                e._isChangeing = !0,
                e.petStyleView.SetPetData(e._petInfo),
                i.UpdateData(e._petInfo),
                i.UpdateRender()
            })
        },
        n.prototype.destroy = function() {
            this.removeEvents();
            for (var e = this.viewStack.numChildren - 1; e >= 0; e--) {
                var t = this.viewStack.removeChildAt(e);
                t.destroy && t.destroy()
            }
            this.petStyleView.destroy(),
            i.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    e.PetDetailedInfo = i,
    __reflect(i.prototype, "petDetailedInfo.PetDetailedInfo")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = ItemRuneSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(t.prototype, "selected", {
            set: function(e) {
                this.img_select.visible = Boolean(e && this.data),
                this.data && this.data.isBindMon && (this.imgMarkOn.visible = !this.img_select.visible),
                egret.superSetter(t, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.dataChanged = function() {
            var e = this.data;
            this.imgMarkOn.visible = !1,
            this.on_icon.visible = !1,
            e ? (this.icon.source = CountermarkXMLInfo.getIconURL(e.markID), e.isBindMon && (this.imgMarkOn.visible = !0, this.on_icon.visible = !0), this.lab_name.textFlow = this.getName(e.markID), this.lab_lv.text = "Lv." + e.level, !IS_RELEASE, this.grp_item.visible = !0) : this.grp_item.visible = !1
        },
        t.prototype.getName = function(e) {
            var t = CountermarkXMLInfo.getDes(e);
            t = StringUtil.parseStrLimitLen(t, 5);
            var i = CountermarkXMLInfo.getMintmarkQuality(e);
            CountermarkXMLInfo.getType(e) != CountermarkType.MARK_IS_UNIVERSAL && (i = 0);
            var n;
            switch (i) {
            case 0:
                n = "#FFFFFF";
                break;
            case 1:
                n = "#FFFFFF";
                break;
            case 2:
                n = "#66FF00";
                break;
            case 3:
                n = "#1E90FF";
                break;
            case 4:
                n = "#FF00FF";
                break;
            case 5:
                n = "#FFFF00"
            }
            var _ = "<font color='" + n + "'>" + t + "</font>";
            return (new egret.HtmlTextParser).parse(_)
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.ItemRenderer);
    e.ItemRune = t,
    __reflect(t.prototype, "petDetailedInfo.ItemRune")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = ItemPetInfoSkillSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            DisplayUtil.cacheAsBitmapDisplayObj(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            this.update(this.data)
        },
        t.prototype.update = function(e, t) {
            if (void 0 === t && (t = -1), this.skillID = e, this._currentPP = t, !(this.skillID <= 0)) {
                this.lab_skill_name.text = SkillXMLInfo.getName(e);
                var i = SkillXMLInfo.getTypeID(this.skillID),
                n = "";
                n = 4 == SkillXMLInfo.getCategory(this.skillID) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(i)),
                this.img_skillicon.source = n,
                this.lab_power.text = SkillXMLInfo.getDamage(e).toString();
                var _ = SkillXMLInfo.getPP(e).toString(); - 1 == t ? this.lab_pp.text = _ + "/" + _: this.lab_pp.text = t.toString() + "/" + _
            }
        },
        Object.defineProperty(t.prototype, "petInfo", {
            get: function() {
                return this._petInfo
            },
            set: function(e) {
                this._petInfo = e,
                this._hasMarkEffect = !1,
                this._hasMarkEffect = this.isHaveSkillEffect(this._petInfo.abilityMark, this.skillID),
                this._hasMarkEffect || (this._hasMarkEffect = this.isHaveSkillEffect(this._petInfo.skillMark, this.skillID)),
                !this._hasMarkEffect && this._petInfo.commonMarkActived && (this._hasMarkEffect = this.isHaveSkillEffect(this._petInfo.commonMark, this.skillID))
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.isHaveSkillEffect = function(e, t) {
            if (CountermarkXMLInfo.isUniversalMark(e)) {
                var i = ItemManager.getUniversalMarkInfo(e);
                if (i && i.bindMonID == this._petInfo.id && i.bindMoveID == t) return ! 0
            }
            return CountermarkXMLInfo.isQuanxiaoMark(e) && CountermarkXMLInfo.getSkillArr(CountermarkXMLInfo.getQuanxiaoSkillID(e)).indexOf(t) > -1 ? !0 : CountermarkXMLInfo.isSkillMark(e) && CountermarkXMLInfo.getSkillArr(e).indexOf(t) > -1 ? !0 : !1
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.ItemRenderer);
    e.ItemSkill = t,
    __reflect(t.prototype, "petDetailedInfo.ItemSkill")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = ItemSkinRenderSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._petShow = new PetStaticModel,
            this._petShow.setSize(184, 190),
            this._petShow.setPetMaxScale(1),
            this.petPosition.addChild(this._petShow),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this._petShow.addEventListener(PetStaticModel.EVENT_COMPLETE_RESIZE, this.onPetResizeComplete, this)
        },
        t.prototype.onPetResizeComplete = function() {
            this._petShow.getPetContentSize()
        },
        t.prototype.setSelect = function(e) {
            this.select_img.visible = e
        },
        t.prototype.dataChanged = function() {
            var e = this;
            if (!this.data) return void(this.visible = !1);
            this.visible = !0,
            this.lab_name.text = this.data.name;
            var t = this.data.type;
            this.img_ys.source = "common_pet_skin_icon_" + t + "_png",
            this.icon_skin.visible = this._petShow.visible = !1;
            var i = ClientConfig.getHandBookSkin(this.data.skinPetId);
            RES.getResByUrl(i).then(function(t) {
                e.icon_skin.source = t,
                e.icon_skin.visible = !0
            })["catch"](function() {
                void 0 != e.data && (e._petShow.setPetStyleById(e.data.skinPetId), e._petShow.visible = !0)
            })
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.ItemRenderer);
    e.ItemSkin = t,
    __reflect(t.prototype, "petDetailedInfo.ItemSkin")
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i._newSeerGuideEventList = ["event_get_btnLvl_rect", "event_get_btnGenius_rect", "event_get_btnStuday_rect", "event_get_btnPower_rect", "event_get_btnNature_rect", "event_get_btnTexing_rect", "event_get_warehouse_rect", "event_RuneWarehouse_close_all"],
            i._markIds = [0, 0, 0],
            i._currentHole = -1,
            i.TYPE_NAMES = ["base", "pve", "pvp"],
            i.ATTRIBUTE_VALUE_NAMES = ["attack", "defence", "s_a", "s_d", "speed", "hp"],
            i._petInfo = e,
            i.skinName = PetInfoViewSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.img_btn_lvl.name = "btnLvl",
            this.img_btn_studay.name = "btnStudy",
            this.img_btn_nature.name = "btnNature",
            this.img_btn_genius.name = "btnGenius",
            this.img_btn_texing.name = "btnTexing",
            this.img_btn_power.name = "btnPower",
            this.img_btn_rune.name = "btnRune",
            this.img_btn_rune_warehouse.name = "btnRuneWareHouse",
            this.type = 0,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            this.img_rune_bg_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRuneHandle, this),
            this.img_rune_bg_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRuneHandle, this),
            this.img_rune_bg_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRuneHandle, this),
            ImageButtonUtil.add(this.img_btn_lvl, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_genius, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_studay, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_power, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_nature, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_texing, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_rune_warehouse, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_rune, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btnQa, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.base, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.pve, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.pvp, this.onTouchTapImageButton, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_CHANGE_MARK, this.onChangeMark, this),
            EventManager.addEventListener(CountermarkEvent.EVENT_OPEN_BIND_MASK_SKILL_PANEL, this.openBindSkill, this),
            EventManager.addEventListener(CountermarkEvent.EQUIP_ON, this.onSuccessfulEquMask, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_CLOSE_LVL_PANEL, this.onCloseedPetLvlPanelHandle, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_CLOSE_USEITEM_PANEL, this.onCloseedUseItemPanelHandle, this),
            EventManager.addEventListener(ModuleEvent.CLOSE_MODULE, this._onCloseModule, this),
            EventManager.addEventListener(CountermarkEvent.UPGRADE_SAVE, this.onMarkLvlUp, this)
        },
        i.prototype.onMarkLvlUp = function(e) {
            var t = this,
            i = e.data;
            i.bindMonID == this._petInfo.id && PetManager.upDateBagPetInfo(this._petInfo.catchTime,
            function(e) {
                t._petInfo = e,
                t.updateInfos()
            })
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.img_rune_bg_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRuneHandle, this),
            this.img_rune_bg_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRuneHandle, this),
            this.img_rune_bg_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRuneHandle, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_CHANGE_MARK, this.onChangeMark, this),
            EventManager.removeEventListener(CountermarkEvent.EVENT_OPEN_BIND_MASK_SKILL_PANEL, this.openBindSkill, this),
            EventManager.removeEventListener(CountermarkEvent.EQUIP_ON, this.onSuccessfulEquMask, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_CLOSE_LVL_PANEL, this.onCloseedPetLvlPanelHandle, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_CLOSE_USEITEM_PANEL, this.onCloseedUseItemPanelHandle, this),
            EventManager.removeEventListener(ModuleEvent.CLOSE_MODULE, this._onCloseModule, this),
            EventManager.removeEventListener(CountermarkEvent.UPGRADE_SAVE, this.onMarkLvlUp, this)
        },
        i.prototype._onCloseModule = function(e) { (e.data === config.ModuleConst.PET_CHANGE_FEATURES || e.data === config.ModuleConst.STUDY_PET_ATTRIBUTE) && (this.grp_default.visible = !0)
        },
        Object.defineProperty(i.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(e) {
                e > 2 && (e = 0),
                this._type = e,
                this.base.visible = 0 == this.type,
                this.pve.visible = 1 == this.type,
                this.pvp.visible = 2 == this.type,
                this.setBaseInfs()
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.onChangeMark = function(e) {
            var t = this,
            i = e.data,
            n = this._markIds[this._currentHole],
            _ = CountermarkController.getInfoTemp(i);
            if (n) {
                var r = this;
                CountermarkController.checkReplaceCounterMark(_, this._currentHole, this._petInfo,
                function(e) {
                    console.log("是否可以继续替换", e),
                    e && CountermarkController.UndoEquip(t._petInfo, t._currentHole,
                    function(e) {
                        switch (r._currentHole) {
                        case CountermarkType.HOLE_IS_COMMON:
                            r._petInfo.commonMark = 0;
                            break;
                        case CountermarkType.HOLE_IS_ABILITY:
                            r._petInfo.abilityMark = 0;
                            break;
                        case CountermarkType.HOLE_IS_SKILL:
                            r._petInfo.skillMark = 0
                        }
                        r.updateInfos(),
                        r._runewarehouse && r._runewarehouse.parent && r._runewarehouse.updateWarehouse(),
                        CountermarkController.equipCountermark(_, t._currentHole, t._petInfo)
                    },
                    t)
                },
                this)
            } else CountermarkController.checkReplaceCounterMark(_, this._currentHole, this._petInfo,
            function(e) {
                e && (console.log("替换或者穿戴印记id为", i, "到id为", n, "上"), CountermarkController.equipCountermark(_, t._currentHole, t._petInfo))
            },
            this)
        },
        i.prototype.openBindSkill = function(t) {
            var i = t.info,
            n = new e.BindSkillPopView;
            this._popSkillHashCode = n.hashCode;
            var _ = {};
            _ = {
                ontouchItemcallback: this.ontouchBindSkill,
                caller: this,
                markinfo: i,
                petinfo: this._petInfo
            };
            var r = PopViewManager.createDefaultStyleObject();
            r.clickMaskHandler = function() {
                PopViewManager.getInstance().hideView(n),
                EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.SKILL_CANCEL, null))
            },
            r.caller = this,
            PopViewManager.getInstance().openView(n, r, _)
        },
        i.prototype.ontouchBindSkill = function(e) {
            EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.SKILL_SELECT, e))
        },
        i.prototype.onSuccessfulEquMask = function(e) {
            console.log("刻印安装成功"),
            BubblerManager.getInstance().showText("成功装备刻印！"),
            PetManager.upDateBagPetInfo(this._petInfo.catchTime)
        },
        i.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.img_btn_lvl:
                console.log("img_btn_lvl"),
                this.openPetlvlupPanel();
                break;
            case this.img_btn_genius:
                console.log("img_btn_genius"),
                this.openUseItemPanel(e.TypeUsetItemPanel.TYPE_NATURE);
                break;
            case this.img_btn_studay:
                console.log("img_btn_studay"),
                ModuleManager.showModule("studyPetAttribute", ["studyPetAttribute"], this._petInfo, null, AppDoStyle.NULL),
                this.closeRuneWarehouse(),
                this.grp_default.visible = !1;
                break;
            case this.img_btn_power:
                console.log("img_btn_power"),
                this.openUseItemPanel(e.TypeUsetItemPanel.TYPE_POWER);
                break;
            case this.img_btn_nature:
                console.log("img_btn_nature"),
                this.openUseItemPanel(e.TypeUsetItemPanel.TYPE_CHARACTER);
                break;
            case this.img_btn_texing:
                ModuleManager.showModule("petChangeFeatures", ["petChangeFeatures"], this._petInfo, null, AppDoStyle.NULL),
                this.closeRuneWarehouse(),
                this.grp_default.visible = !1,
                console.log("img_btn_texing");
                break;
            case this.img_btn_rune_warehouse:
                console.log("img_btn_rune_warehouse"),
                this._runewarehouse && this._runewarehouse.parent ? this.closeRuneWarehouse() : (StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击刻印仓库"), this.openRuneWarehouse());
                break;
            case this.img_btn_rune:
                console.log("img_btn_rune"),
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击刻印中心"),
                ModuleManager.showModule("markCenter", ["markCenter"]),
                this.closeRuneWarehouse();
                break;
            case this.btnQa:
                ModuleManager.showModule("petBagAbilityInfoPanel", ["petBagAbilityInfoPanel"], this._petInfo, "", AppDoStyle.NULL);
                break;
            case this.base:
            case this.pve:
            case this.pvp:
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击【战斗属性查看切换按钮】"),
                this.type++
            }
        },
        i.prototype.openRuneWarehouse = function() {
            EventManager.dispatchEventWith(e.PetInfoEvent.EVENT_DISENABLE_CHANGE_PET, !1, !1),
            this._runewarehouse || (this._runewarehouse = new e.RuneWarehouse),
            this._runewarehouse.setPetInfo(this._petInfo);
            var t = this.localToGlobal(),
            i = this.parent.parent.globalToLocal(t.x, t.y);
            this._runewarehouse.x = i.x,
            this._runewarehouse.y = i.y,
            this.parent.parent.addChild(this._runewarehouse);
            var n = 0;
            this._currentHole >= 0 && (n = this._markIds[this._currentHole]),
            ( - 1 === n || this._currentHole < 0) && this.clickRune(0, !0)
        },
        i.prototype.closeRuneWarehouse = function() {
            this._runewarehouse && this._runewarehouse.parent && this._runewarehouse.hide()
        },
        i.prototype.UpdateData = function(e) {
            this._petInfo = e
        },
        i.prototype.Show = function() {
            this.initView()
        },
        i.prototype.UpdateRender = function() {
            this.updateInfos(),
            this._runewarehouse && this._runewarehouse.parent && this._runewarehouse.updateWarehouse()
        },
        i.prototype.openParam = function(e) {},
        i.prototype.Hide = function() {
            this.closeRuneWarehouse(),
            this._lvlUpPanel && this._lvlUpPanel.hide(),
            this._lvlUpPanel = null,
            this._useItemPanel && this._useItemPanel.hide()
        },
        i.prototype.initView = function() {
            this.img_select.visible = !1,
            this._currentHole = -1
        },
        i.prototype.updatExHp = function() {
            var e = this;
            SocketConnection.sendWithPromise(CommandID.JAMES_ARMOR_QUERY_ABIBLITY, [this._petInfo.catchTime]).then(function(t) {
                var i = t.data;
                i.position = 0;
                var n = i.readUnsignedInt();
                e.lab_power.text = n + "/20"
            })
        },
        i.prototype.updateInfos = function() {
            var e = this._petInfo;
            this.lab_lvl.text = this._petInfo.level + "",
            this.lab_genius.text = e.dv + "",
            this.updatExHp(),
            this.lab_studayValue.text = e.ev_attack + e.ev_defence + e.ev_sa + e.ev_sd + e.ev_sp + e.ev_hp + "",
            this.lab_nature.text = NatureXMLInfo.getName(e.nature);
            var t = PetManager.getPetEffect(e),
            i = 0,
            n = "无";
            t && (n = PetEffectXMLInfo.getEffect(t.effectID, t.args), i = PetEffectXMLInfo.getStarLevel(t.effectID, t.args)),
            this.lab_texing.text = n;
            for (var _ = 0; 5 > _; _++) {
                var r = this["start_" + _];
                _ + 1 > i ? r.source = "pet_info_view_img_start_null_png": r.source = "pet_info_view_img_start_png"
            }
            this.setBaseInfs(),
            this.lab_atk_extra.text = e.ev_attack + "",
            this.lab_def_extra.text = e.ev_defence + "",
            this.lab_satk_extra.text = e.ev_sa + "",
            this.lab_sdef_extra.text = e.ev_sd + "",
            this.lab_speed_extra.text = e.ev_sp + "",
            this.lab_hp_extra.text = e.ev_hp + "",
            this._markIds[0] = e.abilityMark,
            this._markIds[1] = e.skillMark,
            this._markIds[2] = e.commonMarkActived ? e.commonMark: -1,
            this.setRuneStyle()
        },
        i.prototype.setBaseInfs = function() {
            for (var e = [], t = 0; 6 > t; t++) e.push(this._petInfo[this.TYPE_NAMES[this.type] + "_" + this.ATTRIBUTE_VALUE_NAMES[t] + "_total"] + "");
            this.lab_atk.text = e[0],
            this.lab_def.text = e[1],
            this.lab_satk.text = e[2],
            this.lab_sdef.text = e[3],
            this.lab_speed.text = e[4],
            this.lab_hp.text = e[5]
        },
        i.prototype.clickRuneHandle = function(e) {
            switch (e.target) {
            case this.img_rune_bg_0:
                this.clickRune(0);
                break;
            case this.img_rune_bg_1:
                this.clickRune(1);
                break;
            case this.img_rune_bg_2:
                this.clickRune(2);
                break;
            case this.img_runelock_2:
            }
        },
        i.prototype.setRuneStyle = function() {
            for (var e = 0; e < this._markIds.length; e++) {
                var t = CountermarkXMLInfo.getMarkId(this._markIds[e]),
                i = this["img_runelock_" + e];
                i && (i.visible = -1 === t),
                this["img_rune_" + e].visible = t > 0,
                t > 0 && (this["img_rune_" + e].source = CountermarkXMLInfo.getIconURL(t))
            }
        },
        i.prototype.clickRune = function(e, t) {
            void 0 === t && (t = !1),
            this._currentHole = e;
            var i = this._markIds[e];
            switch (i) {
            case 0:
                this.img_select.x = this["img_rune_bg_" + e].x + this["img_rune_bg_" + e].width / 2,
                this.img_select.visible = !0;
                break;
            case - 1 : console.log("开锁");
                break;
            default:
                if (this.img_select.x = this["img_rune_bg_" + e].x + this["img_rune_bg_" + e].width / 2, this.img_select.visible = !0, t) return;
                var n = {
                    ins: CountermarkController.getInfoTemp(i),
                    takeOffCallBack: this.takeOffCallBack,
                    caller: this
                };
                if (!n.ins) return;
                n.ins.bindMonID = this._petInfo.id,
                tipsPop.TipsPop.openCounterMarkPop(n)
            }
        },
        i.prototype.takeOffCallBack = function(e) {
            console.log("卸下runid为>>>>>>>>>>>>>>>>>>>" + e.obtainTime);
            var t = this;
            CountermarkController.UndoEquip(this._petInfo, this._currentHole,
            function(e) {
                switch (BubblerManager.getInstance().showText("成功卸下刻印！"), t._currentHole) {
                case CountermarkType.HOLE_IS_COMMON:
                    t._petInfo.commonMark = 0;
                    break;
                case CountermarkType.HOLE_IS_ABILITY:
                    t._petInfo.abilityMark = 0;
                    break;
                case CountermarkType.HOLE_IS_SKILL:
                    t._petInfo.skillMark = 0
                }
                t.updateInfos(),
                t._runewarehouse && t._runewarehouse.parent && t._runewarehouse.updateWarehouse()
            },
            this)
        },
        i.prototype._onNewSeerGuideEvent = function(e) {
            var t = e.type;
            switch (t) {
            case "event_get_btnLvl_rect":
                guideModule.DispatchCustomEventComplete(t, this.img_btn_lvl);
                break;
            case "event_get_btnGenius_rect":
                guideModule.DispatchCustomEventComplete(t, this.img_btn_genius);
                break;
            case "event_get_btnStuday_rect":
                guideModule.DispatchCustomEventComplete(t, this.img_btn_studay);
                break;
            case "event_get_btnPower_rect":
                guideModule.DispatchCustomEventComplete(t, this.img_btn_power);
                break;
            case "event_get_btnNature_rect":
                guideModule.DispatchCustomEventComplete(t, this.img_btn_nature);
                break;
            case "event_get_btnTexing_rect":
                guideModule.DispatchCustomEventComplete(t, this.img_btn_texing);
                break;
            case "event_get_warehouse_rect":
                guideModule.DispatchCustomEventComplete(t, this.img_btn_rune_warehouse);
                break;
            case "event_RuneWarehouse_close_all":
                this.closeRuneWarehouse(),
                ModuleManager.CloseAll(),
                guideModule.DispatchCustomEventComplete(t)
            }
        },
        i.prototype.openPetlvlupPanel = function() {
            this.closeRuneWarehouse(),
            this.grp_default.visible = !1;
            var t = PopViewManager.createDefaultStyleObject();
            t.maskShapeStyle.maskAlpha = 0,
            t.effStyle.showAniType = PopEffStyle.RIGHT_TO_LEFT,
            t.effStyle.verticalCenterOffset = 20,
            this._lvlUpPanel = new e.PetlvlupView,
            PopViewManager.getInstance().openView(this._lvlUpPanel, t, this._petInfo)
        },
        i.prototype.onCloseedPetLvlPanelHandle = function() {
            this.grp_default.visible = !0,
            this._lvlUpPanel = null
        },
        i.prototype.openUseItemPanel = function(t) {
            this.closeRuneWarehouse(),
            this.grp_default.visible = !1;
            var i = PopViewManager.createDefaultStyleObject();
            i.maskShapeStyle.maskAlpha = 0,
            i.effStyle.showAniType = PopEffStyle.RIGHT_TO_LEFT,
            i.effStyle.verticalCenterOffset = 20,
            this._useItemPanel = new e.PetUseItemPanel,
            PopViewManager.getInstance().openView(this._useItemPanel, i, {
                type: t,
                petInfo: this._petInfo
            })
        },
        i.prototype.onCloseedUseItemPanelHandle = function() {
            this.grp_default.visible = !0,
            this._useItemPanel = null
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this._runewarehouse && (this._runewarehouse.parent && this._runewarehouse.hide(), this._runewarehouse.destroy()),
            this._lvlUpPanel && this._lvlUpPanel.hide(),
            this._lvlUpPanel = null,
            this._useItemPanel && this._useItemPanel.hide(),
            this._useItemPanel = null,
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.PetInfoDefaultView = t,
    __reflect(t.prototype, "petDetailedInfo.PetInfoDefaultView", ["IPetInfoView"])
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i._petInfo = t,
            i.skinName = PetInfoItemSkin,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {},
        t.prototype.UpdateData = function(e) {
            this._petInfo = e
        },
        t.prototype.Show = function() {
            this._bagItem.Show()
        },
        t.prototype.UpdateRender = function() {
            this._bagItem.setPetInfo(this._petInfo)
        },
        t.prototype.Hide = function() {},
        t.prototype.openParam = function(e) {},
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this._bagItem.destroy(),
            this._bagItem = null,
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.PetInfoItemView = t,
    __reflect(t.prototype, "petDetailedInfo.PetInfoItemView", ["IPetInfoView"])
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i._petInfo = e,
            i.skinName = PetInfoResistanceSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.initEvents(),
            this.updateitem()
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.img_btn_star, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_up, this.onTouchTapImageButton, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateitem, this),
            EventManager.addEventListener(ModuleEvent.CLOSE_MODULE, this.onEventCloseModule, this)
        },
        i.prototype.removeEvents = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateitem, this),
            EventManager.removeEventListener(ModuleEvent.CLOSE_MODULE, this.onEventCloseModule, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateData = function(e) {
            this._petInfo = e
        },
        i.prototype.Show = function() {},
        i.prototype.UpdateRender = function() {
            this.updateResistance()
        },
        i.prototype.Hide = function() {},
        i.prototype.openParam = function(e) {},
        i.prototype.onEventCloseModule = function(e) {
            var t = e.data;
            t === config.ModuleConst.RESISTANCE_UP && (this.visible = !0)
        },
        i.prototype.updateitem = function() {
            this.itemnum = ItemManager.getNumByID(1706826)
        },
        i.prototype.onTouchTapImageButton = function(t) {
            var i = this;
            switch (t.target) {
            case this.img_btn_star:
                if (this.itemnum <= 0) return void BubblerManager.getInstance().showText("泰坦神石数量不足！");
                SocketConnection.sendByQueue(CommandID.RESISTANCE_OPEN, [this._petInfo.catchTime, 3],
                function(t) {
                    PetManager.upDateBagPetInfo(i._petInfo.catchTime,
                    function(t) {
                        i.UpdateData(t),
                        i.updateResistance(),
                        EventManager.dispatchEvent(new egret.Event(e.PetInfoEvent.EVENT_OPEN_RESISTANCE, !1, !1, t))
                    })
                });
                break;
            case this.img_btn_up:
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击【强化抗性】按钮"),
                ModuleManager.showModule("resistanceUp", ["resistance_up"], this._petInfo, null, AppDoStyle.NULL),
                this.visible = !1
            }
        },
        i.prototype.updateResistance = function() {
            var e = ["no", "canStart", "up"];
            if (this.currentState = e[this._petInfo.resistanceinfo.resist_state], 2 == this._petInfo.resistanceinfo.resist_state) {
                this.lab_sh_value_0.text = ResistanceSysController.getResistanceByLevel(0, this._petInfo.resistanceinfo.cirt).present + this._petInfo.resistanceinfo.cirt_adj + "%",
                this.lab_sh_value_1.text = ResistanceSysController.getResistanceByLevel(0, this._petInfo.resistanceinfo.regular).present + this._petInfo.resistanceinfo.regular_adj + "%",
                this.lab_sh_value_2.text = ResistanceSysController.getResistanceByLevel(0, this._petInfo.resistanceinfo.precent).present + this._petInfo.resistanceinfo.precent_adj + "%";
                for (var t = 0; 3 > t; t++) {
                    var i = t + 1,
                    n = 2 * t,
                    _ = 1 + 2 * t;
                    this["lab_yc_name_" + n].text = "免疫" + PetStatusEffectConfig.getName(0, this._petInfo.resistanceinfo["ctl_" + i + "_idx"]) + "：",
                    this["lab_yc_name_" + _].text = "免疫" + PetStatusEffectConfig.getName(0, this._petInfo.resistanceinfo["weak_" + i + "_idx"]) + "：",
                    this["lab_yc_value_" + n].text = ResistanceSysController.getResistanceByLevel(1, this._petInfo.resistanceinfo["ctl_" + i]).present + this._petInfo.resistanceinfo["ctl_" + i + "_adj"] + this._petInfo.resistanceinfo.resist_all + "%",
                    this["lab_yc_value_" + _].text = ResistanceSysController.getResistanceByLevel(1, this._petInfo.resistanceinfo["weak_" + i]).present + this._petInfo.resistanceinfo["weak_" + i + "_adj"] + this._petInfo.resistanceinfo.resist_all + "%",
                    this["icon_yc_" + n].source = ClientConfig.getBattleEffectIcon(this._petInfo.resistanceinfo["ctl_" + i + "_idx"]),
                    this["icon_yc_" + _].source = ClientConfig.getBattleEffectIcon(this._petInfo.resistanceinfo["weak_" + i + "_idx"])
                }
            }
            this.validateNow()
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.PetinfoResistance = t,
    __reflect(t.prototype, "petDetailedInfo.PetinfoResistance", ["IPetInfoView"])
} (petDetailedInfo || (petDetailedInfo = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(_, r) {
        function o(e) {
            try {
                s(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            e.done ? _(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, a)
        }
        s((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (_) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (_ = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            _ = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var _, r, o, a, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
petDetailedInfo; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i._newSeerGuideEventList = ["event_get_new_skill_panel_btnChangeSkill_rect"],
            i._isChangeSkill = !1,
            i._petInfo = e,
            i.skinName = PetSkillInfoSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.grp_skill.visible = !1,
            this.img_btn_skill.name = "btnChangeSkill",
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            EventManager.addEventListener(ModuleEvent.CLOSE_MODULE, this._onEventCloseModuleHanlder, this),
            EventManager.addEventListener(e.PetInfoEvent.EVENT_SELECT_SKILL, this._onEventBySelectOptionSkillHandler, this),
            this.grp_skill_show_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            this.grp_skill_show_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            this.grp_skill_show_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            this.grp_skill_show_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            this.grp_skill_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            ImageButtonUtil.add(this.helpBtn_png, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_skill, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_skillstone, this.onTouchTapImageButton, this)
        },
        i.prototype.removeEvents = function() {
            this.grp_skill_show_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            this.grp_skill_show_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            this.grp_skill_show_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            this.grp_skill_show_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            this.grp_skill_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEventTouchSkillItemHandler, this),
            EventManager.removeEventListener(ModuleEvent.CLOSE_MODULE, this._onEventCloseModuleHanlder, this),
            EventManager.removeEventListener(e.PetInfoEvent.EVENT_SELECT_SKILL, this._onEventBySelectOptionSkillHandler, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._onNewSeerGuideEvent = function(e) {
            switch (e.type) {
            case "event_get_new_skill_panel_btnChangeSkill_rect":
                guideModule.DispatchCustomEventComplete(e.type, this.img_btn_skill)
            }
        },
        i.prototype.UpdateData = function(e) {
            this._petInfo = e
        },
        i.prototype.Show = function() {},
        i.prototype.UpdateRender = function() {
            this._updateSkillInfos()
        },
        i.prototype.Hide = function() {
            MaskUtil.Hide(),
            this._removeAnimationByReplaceSkill(),
            this._closeSkillOptionPanel()
        },
        i.prototype.openParam = function(e) {
            "openSkillList" === e && this.img_btn_skill.dispatchEvent(new egret.Event(egret.TouchEvent.TOUCH_TAP))
        },
        i.prototype._onEventCloseModuleHanlder = function(e) {
            var t = e.data;
            t === config.ModuleConst.SKILL_STONE && (this.visible = !0)
        },
        i.prototype.onEventTouchSkillItemHandler = function(e) {
            if (!this._isChangeSkill) {
                var t = e.currentTarget.name.split("_")[2];
                return void this._onOpenSkillTips(t)
            }
            switch (e.currentTarget) {
            case this.grp_skill_show_0:
                console.log("grp_skill_0"),
                this.onApply(this._petInfo.skillArray[0].id, this._selctSkillData);
                break;
            case this.grp_skill_show_1:
                console.log("grp_skill_1"),
                this.onApply(this._petInfo.skillArray[1].id, this._selctSkillData);
                break;
            case this.grp_skill_show_2:
                console.log("grp_skill_2"),
                this.onApply(this._petInfo.skillArray[2].id, this._selctSkillData);
                break;
            case this.grp_skill_show_3:
                console.log("grp_skill_3"),
                this.onApply(this._petInfo.skillArray[3].id, this._selctSkillData)
            }
            this._removeAnimationByReplaceSkill(),
            MaskUtil.Hide()
        },
        i.prototype._onOpenSkillTips = function(e) {
            var t = 0;
            if (4 > e) t = this._petInfo.skillArray[e].id;
            else {
                if (!this._petInfo.hideSKill) return;
                t = this._petInfo.hideSKill.id
            }
            var i = {
                id: t,
                petInfo: this._petInfo
            },
            n = {
                srcWorldPos: this.localToGlobal(),
                dir: "right-top",
                rx: 0,
                ry: 0 / 0
            };
            tipsPop.TipsPop.openSkillPop(i, n)
        },
        i.prototype._onEventBySelectOptionSkillHandler = function(e) {
            this._selctSkillData = e.data.data;
            var t = {
                id: this._selctSkillData,
                petInfo: this._petInfo,
                onChangeFun: this._onReadyChangeSkillCallBack,
                caller: this
            },
            i = {
                srcWorldPos: this.localToGlobal(),
                dir: "right-top",
                rx: 0,
                ry: 0 / 0
            };
            tipsPop.TipsPop.openSkillPop(t, i)
        },
        i.prototype._playReplaceSkillAnimation = function() {
            this.grp_skill.visible = !0,
            this._isChangeSkill = !0,
            egret.Tween.get(this.img_allow, {
                loop: !0
            }).to({
                y: this.img_allow.y + 10
            },
            800, egret.Ease.getPowOut(3));
            for (var e = 0; 4 > e; e++) {
                var t = this["img_slect_skill_" + e];
                egret.Tween.get(t, {
                    loop: !0
                }).to({
                    alpha: 0
                },
                800)
            }
        },
        i.prototype._removeAnimationByReplaceSkill = function() {
            this.grp_skill.visible = !1,
            this._isChangeSkill = !1,
            egret.Tween.removeTweens(this.img_allow),
            this.img_allow.y = 18;
            for (var e = 0; 4 > e; e++) {
                var t = this["img_slect_skill_" + e];
                t.alpha = 1,
                egret.Tween.removeTweens(t)
            }
        },
        i.prototype._onReadyChangeSkillCallBack = function(e, t) {
            var i = this;
            console.log("当前备选的技能Skillid为" + e),
            this._playReplaceSkillAnimation(),
            MaskUtil.showMask([this.grp_skill, this.grp_skill_show_0, this.grp_skill_show_1, this.grp_skill_show_2, this.grp_skill_show_3],
            function() {
                i._removeAnimationByReplaceSkill()
            },
            this, null, .5)
        },
        i.prototype._openSkillOptionPanel = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, this.checkOpenSkillWarehouseFlag()];
                    case 1:
                        return (t = i.sent()) ? (EventManager.dispatchEventWith(e.PetInfoEvent.EVENT_DISENABLE_CHANGE_PET, !1, !1), this._petSkillPanel || (this._petSkillPanel = new e.PetInfoSkillPanel), this._petSkillPanel.setData(this._petInfo), this.addChild(this._petSkillPanel), [2, Promise.resolve()]) : [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.checkOpenSkillWarehouseFlag = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(t) {
                    return [2, new Promise(function(t, i) {
                        var n = PetXMLInfo.getSkillListForLv(e._petInfo.id, e._petInfo.level);
                        650 == e._petInfo.id || 651 == e._petInfo.id || 652 == e._petInfo.id ? PetManager.getBlackCanStudySkill(e._petInfo.catchTime,
                        function(i) {
                            n = i;
                            for (var _ = 0,
                            r = e._petInfo.skillArray; _ < r.length; _++) {
                                var o = r[_]; - 1 != n.indexOf(o.id) && n.splice(n.indexOf(o.id), 1)
                            }
                            return 0 == n.length && BubblerManager.getInstance().showText("你的这只精灵没有可以唤醒的技能！"),
                            t(n.length > 0)
                        }) : PetManager.getCanStudySkill(e._petInfo.catchTime,
                        function(i) {
                            n = n.concat(i);
                            for (var _ = 0,
                            r = e._petInfo.skillArray; _ < r.length; _++) {
                                var o = r[_]; - 1 != n.indexOf(o.id) && n.splice(n.indexOf(o.id), 1)
                            }
                            return 0 == n.length && BubblerManager.getInstance().showText("你的这只精灵没有可以唤醒的技能！"),
                            t(n.length > 0)
                        })
                    })]
                })
            })
        },
        i.prototype._closeSkillOptionPanel = function() {
            this._petSkillPanel && this._petSkillPanel.hide()
        },
        i.prototype._updateSkillInfos = function() {
            if (null != this._petInfo && null != SkillXMLInfo.hideMovesMap[this._petInfo.id]) if (null != this._petInfo.hideSKill) {
                var e = SkillXMLInfo.hideMovesMap[this._petInfo.id];
                this.lab_skill_name_4.text = SkillXMLInfo.getName(e),
                this.lab_power_4.text = this._petInfo.hideSKill.damage.toString();
                var t = this._petInfo.hideSKill.maxPP;
                this.lab_pp_4.text = t + "/" + t;
                var i, n = SkillXMLInfo.getTypeID(e);
                i = 4 == SkillXMLInfo.getCategory(e) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(n)),
                this.img_skillicon_4.source = i,
                this.grp_showSKill5.visible = !0,
                this.group_hideSkill5.visible = !1
            } else this.txt_open.text = "尚未开启",
            this.grp_showSKill5.visible = !1,
            this.group_hideSkill5.visible = !0,
            this._skill5Desc = "第五技能通过获得该精灵的对应活动获得，可前往图鉴查询。";
            else null != this._petInfo && null == SkillXMLInfo.hideMovesMap[this._petInfo.id] && (this.txt_open.text = "无法开启", this.grp_showSKill5.visible = !1, this.group_hideSkill5.visible = !0, this._skill5Desc = "该精灵没有第五技能。");
            for (var _, r = 0,
            o = 0,
            a = 0; 4 > a; a++) this._petInfo && a < this._petInfo.skillArray.length ? (r = this._petInfo.skillArray[a].id, o = this._petInfo.skillArray[a].pp, _ = this.isHaveSkillEffect(this._petInfo.abilityMark, r), _ || (_ = this.isHaveSkillEffect(this._petInfo.skillMark, r)), !_ && this._petInfo.commonMarkActived && (_ = this.isHaveSkillEffect(this._petInfo.commonMark, r)), this.updateInfo(r, a), this["grp_skill_show_" + a].visible = !0, this["img_unskill_" + a].visible = !1) : (this["grp_skill_show_" + a].visible = !1, this["img_unskill_" + a].visible = !0)
        },
        i.prototype.updateInfo = function(e, t) {
            if (this._petInfo && 0 != e) {
                this["lab_skill_name_" + t].text = SkillXMLInfo.getName(e);
                var i = SkillXMLInfo.getTypeID(e),
                n = "";
                n = 4 == SkillXMLInfo.getCategory(e) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(i)),
                this["img_skillicon_" + t].source = n,
                this["lab_power_" + t].text = SkillXMLInfo.getDamage(e).toString();
                var _ = SkillXMLInfo.getPP(e).toString(),
                r = this._petInfo.skillArray[t].pp; - 1 == r ? this["lab_pp_" + t].text = _ + "/" + _: this["lab_pp_" + t].text = r.toString() + "/" + _
            }
        },
        i.prototype.isHaveSkillEffect = function(e, t) {
            if (CountermarkXMLInfo.isUniversalMark(e)) {
                var i = ItemManager.getUniversalMarkInfo(e);
                if (i && i.bindMonID == this._petInfo.id && i.bindMoveID == t) return ! 0
            }
            return CountermarkXMLInfo.isQuanxiaoMark(e) && CountermarkXMLInfo.getSkillArr(CountermarkXMLInfo.getQuanxiaoSkillID(e)).indexOf(t) > -1 ? !0 : CountermarkXMLInfo.isSkillMark(e) && CountermarkXMLInfo.getSkillArr(e).indexOf(t) > -1 ? !0 : !1
        },
        i.prototype.onTouchTapImageButton = function(e) {
            switch (e.target) {
            case this.img_btn_skill:
                this._petSkillPanel && this._petSkillPanel.parent ? this._closeSkillOptionPanel() : (StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击【更换技能】按钮"), this._openSkillOptionPanel());
                break;
            case this.img_btn_skillstone:
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击【技能石】按钮"),
                ModuleManager.showModule("skillStone", ["skillStone"], this._petInfo, null, AppDoStyle.NULL),
                this.visible = !1;
                break;
            case this.helpBtn_png:
                Alarm.show(this._skill5Desc)
            }
        },
        i.prototype.onApply = function(e, t) {
            var i = this,
            n = new egret.Event("change_skill", !1, !0, e);
            if (EventManager.dispatchEvent(n)) {
                for (var _ = this._petInfo.skillArray,
                r = !1,
                o = 0,
                a = this._petInfo.skillArray; o < a.length; o++) {
                    var s = a[o];
                    s.id == t && (r = !0)
                }
                if (r) {
                    var l = new egret.ByteArray;
                    l.writeUnsignedInt(this._petInfo.catchTime);
                    var h = 0;
                    for (h = 0; 4 > h; h++) _[h].id > 0 ? e == _[h].id ? l.writeUnsignedInt(t) : t == _[h].id ? l.writeUnsignedInt(e) : l.writeUnsignedInt(_[h].id) : l.writeUnsignedInt(0);
                    SocketConnection.sendWithPromise(CommandID.Skill_Sort, [l]).then(function() {
                        return new Promise(function(e, t) {
                            var n = function(t) {
                                i._petInfo = t,
                                e(null)
                            };
                            PetManager.containsBagForCapTime(i._petInfo.catchTime) || PetManager.containsSecondBagForCapTime(i._petInfo.catchTime) ? PetManager.upDateBagPetInfo(i._petInfo.catchTime, n) : PetManager.storageUpDate(i._petInfo.catchTime, n)
                        })
                    }).then(function() {
                        i.onReplace()
                    })
                } else e > 1e5 ? Alert.show("更换此技能时，当前技能石会被摧毁，确定要更换这个技能吗？",
                function() {
                    i.execute(e, t)
                },
                function() {}) : this.execute(e, t)
            }
        },
        i.prototype.execute = function(e, t) {
            var i = this;
            this.touchEnabled = this.touchChildren = !1;
            var n;
            n = 650 == this._petInfo.id || 651 == this._petInfo.id || 652 == this._petInfo.id ? SocketConnection.sendWithPromise(CommandID.EXCHANGE_BLACKPET_SKILL, [this._petInfo.catchTime, e, t, 1]) : SocketConnection.sendWithPromise(CommandID.PET_SKILL_SWICTH, [this._petInfo.catchTime, 1, 1, e, t]),
            n.then(function() {
                return new Promise(function(e, t) {
                    var n = function(t) {
                        i._petInfo = t,
                        e(null)
                    };
                    PetManager.containsBagForCapTime(i._petInfo.catchTime) || PetManager.containsSecondBagForCapTime(i._petInfo.catchTime) ? PetManager.upDateBagPetInfo(i._petInfo.catchTime, n) : PetManager.storageUpDate(i._petInfo.catchTime, n)
                })
            }).then(function() {
                i.touchEnabled = i.touchChildren = !0,
                i.onReplace()
            })
        },
        i.prototype.onReplace = function(t) {
            void 0 === t && (t = null);
            var i = egret.Event.create(egret.Event, e.PetInfoEvent.EVENT_CHANGE_SKILL);
            i.data = this._petInfo,
            EventManager.dispatchEvent(i)
        },
        i.prototype.destroy = function() {
            this._petSkillPanel && (this._petSkillPanel.destroy(), this._petSkillPanel = null),
            this._removeAnimationByReplaceSkill(),
            this.removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.petInfoSkillView = t,
    __reflect(t.prototype, "petDetailedInfo.petInfoSkillView", ["IPetInfoView"])
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i._itemWidth = 200,
            i._itemHeigth = 290,
            i._isMove = !1,
            i._selectSkinIndex = 3,
            i._initFlag = !0,
            i._petInfo = e,
            i._arry = new eui.ArrayCollection,
            i.skinName = PetInfoSkinSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this._customScroller = new common.ui.CustomScroller(this.list_viewport.width, this.list_viewport.height, this._itemWidth, this._itemHeigth, this.list_viewport.layout.gap, e.ItemSkin, 150, .8, 1, 1, 1, this.list_viewport, this._arry, 100, null, common.ui.CustomScroller.DIR_TO_H),
            this.grp_skin.addChild(this._customScroller),
            this._customScroller.x = this.list_viewport.x,
            this._customScroller.y = this.list_viewport.y,
            this.initEvents()
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.img_btn_left, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_btn_right, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_zhuangbei, this.onTouchTapImageButton, this),
            this._customScroller.addEventListener(common.ui.CustomScroller.EVENT_CHANGE_END,
            function() {
                e._isMove = !1,
                e._selectSkinIndex = e._customScroller.getSelectIndex();
                for (var t = e._arry.getItemAt(e._selectSkinIndex), i = 0; i < e.list_viewport.numChildren; i++) {
                    var n = e.list_viewport.getChildAt(i);
                    n.setSelect(t === n.data)
                }
                e.setArrow(),
                e.updateSkin()
            },
            this)
        },
        i.prototype.onTouchTapImageButton = function(e) {
            switch (e.target) {
            case this.img_btn_left:
                this.onChangeSkin("left");
                break;
            case this.img_btn_right:
                this.onChangeSkin("right");
                break;
            case this.img_zhuangbei:
                StatLogger.log("1023版本系统功能", "精灵详情次级面板", "点击【装备皮肤】按钮"),
                console.log("穿戴皮肤"),
                this.dressSkin()
            }
        },
        i.prototype.UpdateData = function(e) {
            this._petInfo = e,
            this._initFlag = !0
        },
        i.prototype.Show = function() {},
        i.prototype.UpdateRender = function() {
            if (this._initFlag) {
                this._initFlag = !1,
                this.getSkins();
                var e = this.getSelectSkinIndex();
                this._selectSkinIndex = e,
                this._customScroller.viewport.scrollH = 0,
                this._customScroller.goToNum(this._selectSkinIndex, 150)
            }
            this.setArrow(),
            this.updateSkin()
        },
        i.prototype.openParam = function(e) {},
        i.prototype.Hide = function() {
            egret.Tween.removeTweens(this),
            this._isMove = !1,
            this._initFlag = !0,
            EventManager.dispatchEventWith(e.PetInfoEvent.EVENT_RESET_PET_MODEL_STYLE)
        },
        i.prototype.getSkins = function() {
            this._arry.removeAll();
            for (var e = 1,
            t = PetSkinInfo.getPetDefaultSkin(this._petInfo.id), i = [t], n = PetSkinXMLInfo.getSkinInfosByPetId(this._petInfo.id), _ = 0; _ < n.length; _++) {
                i.push(n[_]);
                var r = PetSkinController.instance.haveSkin(n[_].id);
                r && ++e
            }
            this.txt_num.text = "已获得皮肤:" + e + "/" + i.length,
            i.unshift(null),
            i.push(null),
            this._arry.replaceAll(i),
            this._arry.refresh()
        },
        i.prototype.dressSkin = function() {
            var e = this._arry.getItemAt(this._selectSkinIndex);
            this._petInfo.skinId != e.id && PetManager.equipSkin(this._petInfo.catchTime, e.id, null)
        },
        i.prototype.getSelectSkinIndex = function() {
            for (var e, t = 0; t < this._arry.length; t++) if (e = this._arry.getItemAt(t)) {
                if (0 === this._petInfo.skinId && void 0 === e.id) return t;
                if (e.id == this._petInfo.skinId) return t
            }
            return 0
        },
        i.prototype.updateSkin = function() {
            var t = this._arry.getItemAt(this._selectSkinIndex),
            i = 0;
            if (t) {
                t.id && (i = t.id);
                var n = new egret.Event(e.PetInfoEvent.EVENT_UPDATE_TEMP_PET_STYLE, !1, !1, t.skinPetId);
                EventManager.dispatchEvent(n)
            }
            this.img_zhuangbei.visible = i !== this._petInfo.skinId && PetSkinController.instance.haveSkin(i),
            this.img_yzb.visible = i === this._petInfo.skinId;
            var _ = PetXMLInfo.getName(t.monId),
            r = PetSkinXMLInfo.getTypeCn(t.type),
            o = t.name,
            a = 0 === t.type;
            a ? (this.txt_line1.text = "默认形象", this.txt_line2.text = "", this.txt_line3.text = "原型精灵:" + _) : (this.txt_line1.text = r + "皮肤：" + o, this.txt_line2.text = "原型精灵:" + _, void 0 === t.type ? this.txt_line3.text = "精灵经典形象": t.shopId ? this.txt_line3.text = "购买获得": t.go || t.goType ? this.txt_line3.text = "兑换获得": this.txt_line3.text = "通过限时活动获得")
        },
        i.prototype.onChangeSkin = function(e) {
            this._isMove || ("left" === e ? this._selectSkinIndex = Math.max(1, --this._selectSkinIndex) : this._selectSkinIndex = Math.min(this._arry.length - 2, ++this._selectSkinIndex), this.setArrow(), this._isMove = !0, this._customScroller.goToNum(this._selectSkinIndex, 150))
        },
        i.prototype.setArrow = function() {
            this.img_btn_left.visible = this._selectSkinIndex > 1,
            this.img_btn_right.visible = this._selectSkinIndex < this._arry.length - 2
        },
        i.prototype.destroy = function() {
            egret.Tween.removeTweens(this),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.PetInfoSkinView = t,
    __reflect(t.prototype, "petDetailedInfo.PetInfoSkinView", ["IPetInfoView"])
} (petDetailedInfo || (petDetailedInfo = {}));
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
petDetailedInfo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PetStyleSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            this._petShow = new PetStaticModel,
            this._petShow.setSize(395, 385),
            this._petShow.setPetMaxScale(1.3),
            this.img_icon.source = ClientConfig.geteffecticon(0),
            this._petShow.visible = !1,
            this.pos_petStyles.addChild(this._petShow),
            CjsUtil.start(),
            CjsUtil.setContainer(this.pos_petStyles),
            TipsManager.getInstance().addTips(this.icon_up, TipsManager.TIPS_TYPE_NORMAL, ""),
            ImageButtonUtil.add(this.img_icon,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], e._petInfo, "", AppDoStyle.NULL)
            },
            this)
        },
        t.prototype.setPetStyle = function(e) {
            this._petInfo = e;
            var t = e.id;
            e.skinId > 0 && (t = PetSkinXMLInfo.getSkinInfo(e.skinId).skinPetId),
            CjsUtil.removeAllAni(),
            CjsUtil.loadPet(t,
            function() {
                CjsUtil.showAnimate(CjsUtil.getPet(t))
            },
            this),
            this.updateView()
        },
        t.prototype.updateView = function() {
            this.lab_name.text = this._petInfo.name,
            this.icon_elem.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this._petInfo.id)),
            this.txtLevel.text = "Lv." + this._petInfo.level,
            this.setPetModel(),
            this.img_icon.visible = PetManager.checkShowEffectIcon(this._petInfo);
            var e = this._petInfo.effectList.filter(function(e) {
                return 2 == e.status || 3 == e.status
            },
            this);
            this.grp_info.removeChildren(),
            this.icon_up.visible = !1;
            for (var t = 0; t < e.length; t++) {
                var i = e[t],
                n = [300672, 300697, 300810].indexOf(i.itemId);
                if ( - 1 != n) {
                    e.splice(t, 1),
                    this.icon_up.visible = !0,
                    this.grp_info.addChild(this.icon_up);
                    var _ = "已使用<font color='#ffff00' size='14'> " + ItemXMLInfo.getName(i.itemId) + "</font>\r\r效果为：<font color='#ffffff'>" + ["对战时增加精灵所有属性50点，使用次数1次。赛尔间对战无效!", "对战时增加精灵所有属性50点，使用次数1次。赛尔间对战无效!", "对战时增加精灵所有属性80点，使用次数1次。赛尔间对战无效!"][n] + "</font>",
                    r = {};
                    r.html = (new egret.HtmlTextParser).parse(_),
                    TipsManager.getInstance().ChangeTipsData(this.icon_up, r);
                    break
                }
            }
            for (var t = 0; 2 > t; t++) {
                var o = this["bead_" + t];
                t < e.length ? (o.setEffInfo(e[t]), o.visible = !0, this.grp_info.addChild(o)) : o.visible = !1
            }
        },
        t.prototype.setPetModel = function(e) {
            void 0 === e && (e = !0);
            var t = this._petInfo.id;
            this._petInfo.skinId && (t = PetSkinXMLInfo.getSkinInfo(this._petInfo.skinId).skinPetId);
            var i = CjsUtil.getPet(t);
            CjsUtil.removeAllAni(),
            i ? CjsUtil.showAnimate(i) : CjsUtil.loadPet(t,
            function() {
                CjsUtil.showAnimate(CjsUtil.getPet(t))
            },
            this),
            this._petShow.getCurrentShowModelId() !== t && (this._petShow.setPetStyleByInfo(this._petInfo), e && this.playScaleAni(200))
        },
        t.prototype.playScaleAni = function(e) {},
        t.prototype.updateTempView = function(e) {
            if (this._petShow.getCurrentShowModelId() !== e) {
                var t = CjsUtil.getPet(e);
                CjsUtil.removeAllAni(),
                t ? CjsUtil.showAnimate(t) : CjsUtil.loadPet(e,
                function() {
                    CjsUtil.showAnimate(CjsUtil.getPet(e))
                },
                this),
                this._petShow.setPetStyleById(e)
            }
        },
        t.prototype.resetModel = function() {
            this.setPetModel(!1)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this._petShow.destroy(),
            TipsManager.getInstance().removeTips(this.icon_up),
            this.bead_0.destroy(),
            this.bead_1.destroy(),
            egret.Tween.removeTweens(this._petShow),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.PetStyleView = t,
    __reflect(t.prototype, "petDetailedInfo.PetStyleView")
} (petDetailedInfo || (petDetailedInfo = {}));
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
generateEUI.paths["resource/eui_skins/item/BagItemSkin.exml"] = window.BagItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["list_viewport", "scroller_item"],
        this.height = 502,
        this.width = 475,
        this.elementsContent = [this.scroller_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.scroller_item_i = function() {
        var e = new eui.Scroller;
        return this.scroller_item = e,
        e.height = 502,
        e.scrollPolicyH = "off",
        e.width = 475,
        e.x = 0,
        e.y = 0,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_viewport_i()],
        e
    },
    i.list_viewport_i = function() {
        var e = new eui.List;
        return this.list_viewport = e,
        e.height = 200,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 14,
        e.orientation = "rows",
        e.paddingBottom = 10,
        e.paddingLeft = 9,
        e.paddingRight = 9,
        e.paddingTop = 10,
        e.requestedColumnCount = 5,
        e.verticalGap = 14,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/EnergyBeadSkin.exml"] = window.EnergyBeadSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "lab_num", "grp_bead"],
        this.height = 52,
        this.width = 45,
        this.elementsContent = [this.grp_bead_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_bead_i = function() {
        var e = new eui.Group;
        return this.grp_bead = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.icon_i(), this.lab_num_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.source = "pet_detailed_information_bead_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 28,
        e.width = 29,
        e.x = 9,
        e.y = 12,
        e
    },
    i.lab_num_i = function() {
        var e = new eui.Label;
        return this.lab_num = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "10",
        e.textAlign = "right",
        e.width = 45,
        e.x = 0,
        e.y = 30,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ItemPetInfoSkillSkin.exml"] = window.ItemPetInfoSkillSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["lab_skill_name", "lab_power", "lab_pp", "img_skillicon"],
        this.height = 90,
        this.width = 222,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.lab_skill_name_i(), this._Label1_i(), this._Label2_i(), this.lab_power_i(), this.lab_pp_i(), this.img_skillicon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pet_skill_info_skill_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_skill_info_texture_line_png",
        e.width = 197,
        e.x = 13,
        e.y = 45,
        e
    },
    i.lab_skill_name_i = function() {
        var e = new eui.Label;
        return this.lab_skill_name = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "技能名字",
        e.textAlign = "center",
        e.textColor = 15068927,
        e.width = 120,
        e.x = 52,
        e.y = 17,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "PP:",
        e.textColor = 4173823,
        e.x = 122,
        e.y = 62,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "威力:",
        e.textColor = 4173823,
        e.x = 11,
        e.y = 60,
        e
    },
    i.lab_power_i = function() {
        var e = new eui.Label;
        return this.lab_power = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "160",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 63,
        e.y = 62,
        e
    },
    i.lab_pp_i = function() {
        var e = new eui.Label;
        return this.lab_pp = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "20/20",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 155,
        e.y = 62,
        e
    },
    i.img_skillicon_i = function() {
        var e = new eui.Image;
        return this.img_skillicon = e,
        e.height = 26,
        e.source = "",
        e.width = 23,
        e.x = 14,
        e.y = 14,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ItemRuneSkin.exml"] = window.ItemRuneSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "img_name_bg", "lab_name", "lab_lv", "img_select", "imgMarkOn", "on_icon", "grp_item"],
        this.height = 104,
        this.width = 104,
        this.elementsContent = [this._Image1_i(), this.grp_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 105,
        e.source = "common_icon_bg_style_1_png",
        e.width = 105,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_item_i = function() {
        var e = new eui.Group;
        return this.grp_item = e,
        e.touchEnabled = !1,
        e.x = -6,
        e.y = -6,
        e.elementsContent = [this.icon_i(), this.img_name_bg_i(), this.lab_name_i(), this.lab_lv_i(), this.img_select_i(), this.imgMarkOn_i(), this.on_icon_i()],
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 50,
        e.width = 50,
        e.x = 34,
        e.y = 27,
        e
    },
    i.img_name_bg_i = function() {
        var e = new eui.Image;
        return this.img_name_bg = e,
        e.height = 24,
        e.source = "item_rune_img_name_bg_png",
        e.width = 102,
        e.x = 7,
        e.y = 86,
        e
    },
    i.lab_name_i = function() {
        var e = new eui.Label;
        return this.lab_name = e,
        e.fontFamily = "黑体",
        e.height = 18,
        e.size = 18,
        e.text = "刻印名称……",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 90,
        e.x = 13,
        e.y = 89,
        e
    },
    i.lab_lv_i = function() {
        var e = new eui.Label;
        return this.lab_lv = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "Lv.1",
        e.textAlign = "left",
        e.textColor = 16773733,
        e.x = 10,
        e.y = 6,
        e
    },
    i.img_select_i = function() {
        var e = new eui.Image;
        return this.img_select = e,
        e.height = 116,
        e.source = "common_icon_select_style_1_png",
        e.width = 116,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgMarkOn_i = function() {
        var e = new eui.Image;
        return this.imgMarkOn = e,
        e.anchorOffsetX = 0,
        e.height = 112,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(26, 12, 160, 78),
        e.source = "pet_info_img_select_png",
        e.verticalCenter = 0,
        e.width = 112,
        e
    },
    i.on_icon_i = function() {
        var e = new eui.Image;
        return this.on_icon = e,
        e.source = "rune_ware_house_imgTag_png",
        e.x = 83,
        e.y = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ItemSkinRenderSkin.exml"] = window.ItemSkinRenderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "icon_skin", "petPosition", "name_bg", "lab_name", "img_ys", "select_img", "grp_item"],
        this.height = 290,
        this.width = 200,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_item_i = function() {
        var e = new eui.Group;
        return this.grp_item = e,
        e.anchorOffsetX = 100,
        e.anchorOffsetY = 145,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 100,
        e.y = 145,
        e.elementsContent = [this.bg_i(), this.icon_skin_i(), this.petPosition_i(), this.name_bg_i(), this.lab_name_i(), this.img_ys_i(), this.select_img_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 270,
        e.source = "pet_info_skin_render_bg_png",
        e.width = 180,
        e.x = 10,
        e.y = 10,
        e
    },
    i.icon_skin_i = function() {
        var e = new eui.Image;
        return this.icon_skin = e,
        e.height = 270,
        e.visible = !0,
        e.width = 180,
        e.x = 10,
        e.y = 10,
        e
    },
    i.petPosition_i = function() {
        var e = new eui.Group;
        return this.petPosition = e,
        e.x = 101,
        e.y = 229,
        e
    },
    i.name_bg_i = function() {
        var e = new eui.Image;
        return this.name_bg = e,
        e.height = 51,
        e.source = "pet_info_skin_render_name_bg_png",
        e.width = 179,
        e.x = 12,
        e.y = 230,
        e
    },
    i.lab_name_i = function() {
        var e = new eui.Label;
        return this.lab_name = e,
        e.size = 18,
        e.text = "精灵皮肤名字巴拉",
        e.textAlign = "center",
        e.textColor = 16772257,
        e.width = 180,
        e.x = 11,
        e.y = 260,
        e
    },
    i.img_ys_i = function() {
        var e = new eui.Image;
        return this.img_ys = e,
        e.scaleX = .7,
        e.scaleY = .7,
        e.source = "common_pet_skin_icon_0_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.select_img_i = function() {
        var e = new eui.Image;
        return this.select_img = e,
        e.source = "pet_info_skin_render_select_bg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetDetailedItemSkin.exml"] = window.PetDetailedItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "img_select", "lab_num"],
        this.height = 80,
        this.width = 80,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.img_select_i(), this.lab_num_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "common_icon_bg_style_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 50,
        e.width = 50,
        e.x = 15,
        e.y = 15,
        e
    },
    i.img_select_i = function() {
        var e = new eui.Image;
        return this.img_select = e,
        e.source = "common_icon_select_style_1_png",
        e.x = -6,
        e.y = -6,
        e
    },
    i.lab_num_i = function() {
        var e = new eui.Label;
        return this.lab_num = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "9999",
        e.textAlign = "right",
        e.width = 60,
        e.x = 18,
        e.y = 60,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/BindSkillPanelSkin.exml"] = window.BindSkillPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["lab_title", "list_viewport", "scroller_skill"],
        this.height = 372,
        this.width = 632,
        this.elementsContent = [this._Image1_i(), this.lab_title_i(), this.scroller_skill_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "bind_skill_panel_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.lab_title_i = function() {
        var e = new eui.Label;
        return this.lab_title = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "该刻印镶嵌了宝石，请选择绑定对应的技能",
        e.textColor = 16777215,
        e.x = 108,
        e.y = 41,
        e
    },
    i.scroller_skill_i = function() {
        var e = new eui.Scroller;
        return this.scroller_skill = e,
        e.height = 205,
        e.width = 444,
        e.x = 96,
        e.y = 88,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_viewport_i()],
        e
    },
    i.list_viewport_i = function() {
        var e = new eui.List;
        return this.list_viewport = e,
        e.height = 200,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 20,
        e.orientation = "rows",
        e.requestedColumnCount = 2,
        e.verticalGap = 20,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PetChangeSkillSkin.exml"] = window.PetChangeSkillSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_btn_close", "list_viewport", "scroller_skill"],
        this.height = 326,
        this.width = 526,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.img_btn_close_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.scroller_skill_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 288,
        e.source = "pet_info_item_s9_texture_003_png",
        e.width = 526,
        e.x = 0,
        e.y = 38,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_change_skill_texture_top_png",
        e.width = 523,
        e.x = 3,
        e.y = 7,
        e
    },
    i.img_btn_close_i = function() {
        var e = new eui.Image;
        return this.img_btn_close = e,
        e.source = "pet_change_skill_img_btn_close_png",
        e.x = 473,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 14,
        e.source = "pet_change_skill_texture_point_png",
        e.width = 14,
        e.x = 204,
        e.y = 20,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 14,
        e.source = "pet_change_skill_texture_point_png",
        e.width = 14,
        e.x = 316,
        e.y = 20,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pet_change_skill_title_unequipSkill_png",
        e.x = 227,
        e.y = 17,
        e
    },
    i.scroller_skill_i = function() {
        var e = new eui.Scroller;
        return this.scroller_skill = e,
        e.height = 236,
        e.scrollPolicyH = "off",
        e.width = 454,
        e.x = 39,
        e.y = 64,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_viewport_i()],
        e
    },
    i.list_viewport_i = function() {
        var e = new eui.List;
        return this.list_viewport = e,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 10,
        e.orientation = "rows",
        e.requestedColumnCount = 2,
        e.verticalGap = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PetLvlUpSkin.exml"] = window.PetLvlUpSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "img_btn_close", "rb_expUp", "rb_itemUp", "lab_lvl", "title_exp", "icon_item_2", "icon_item_1", "icon_item_0", "title_next", "img_btn_up_1", "img_btn_exchange_0", "img_btn_exchange_2", "img_btn_exchange_1", "img_btn_up_5", "img_btn_up_100", "img_btn_up_10", "lab_exchange_item_0", "lab_exchange_item_1", "lab_exchange_item_2", "lab_next_exp", "lab_total_exp", "grp_exp", "list_viewport", "scroller_item"],
        this.height = 640,
        this.width = 536,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Image2_i(), this.img_btn_close_i(), this.rb_expUp_i(), this.rb_itemUp_i(), this._Label1_i(), this.lab_lvl_i(), this.grp_exp_i(), this.scroller_item_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_lv_up_nav_exp_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_lv_up_nav_exp_up_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_lv_up_nav_item_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_lv_up_nav_item_up_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    _ = t.prototype;
    return _.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 640,
        e.source = "pet_use_item_panel_bg_png",
        e.width = 531,
        e.x = 5,
        e.y = 0,
        e
    },
    _._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 440,
        e.source = "common_texture_001_png",
        e.width = 500,
        e.x = 26,
        e.y = 174,
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.source = "common_texture_002_png",
        e.width = 484,
        e.x = 34,
        e.y = 50,
        e
    },
    _.img_btn_close_i = function() {
        var e = new eui.Image;
        return this.img_btn_close = e,
        e.height = 101,
        e.source = "pet_use_item_panel_img_btn_back_png",
        e.width = 18,
        e.x = 0,
        e.y = 272,
        e
    },
    _.rb_expUp_i = function() {
        var e = new eui.RadioButton;
        return this.rb_expUp = e,
        e.groupName = "grp_nav",
        e.label = "",
        e.selected = !0,
        e.value = "1",
        e.x = 36,
        e.y = 134,
        e.skinName = i,
        e
    },
    _.rb_itemUp_i = function() {
        var e = new eui.RadioButton;
        return this.rb_itemUp = e,
        e.groupName = "grp_nav",
        e.label = "",
        e.value = "2",
        e.x = 168,
        e.y = 134,
        e.skinName = n,
        e
    },
    _._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 22,
        e.text = "当前等级：",
        e.textColor = 5879295,
        e.x = 169,
        e.y = 74,
        e
    },
    _.lab_lvl_i = function() {
        var e = new eui.Label;
        return this.lab_lvl = e,
        e.fontFamily = "黑体",
        e.size = 22,
        e.text = "100/1000",
        e.textColor = 16777215,
        e.x = 284,
        e.y = 76,
        e
    },
    _.grp_exp_i = function() {
        var e = new eui.Group;
        return this.grp_exp = e,
        e.touchEnabled = !1,
        e.x = 42,
        e.y = 191,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.title_exp_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.icon_item_2_i(), this.icon_item_1_i(), this.icon_item_0_i(), this._Image9_i(), this._Image10_i(), this.title_next_i(), this._Image11_i(), this.img_btn_up_1_i(), this.img_btn_exchange_0_i(), this.img_btn_exchange_2_i(), this.img_btn_exchange_1_i(), this.img_btn_up_5_i(), this.img_btn_up_100_i(), this.img_btn_up_10_i(), this.lab_exchange_item_0_i(), this.lab_exchange_item_1_i(), this.lab_exchange_item_2_i(), this._Image12_i(), this._Image13_i(), this.lab_next_exp_i(), this.lab_total_exp_i()],
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 72,
        e.source = "pet_lv_up_texture_003_png",
        e.width = 468,
        e.x = 0,
        e.y = 191,
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_lv_up_texture_002_png",
        e.width = 462,
        e.x = 3,
        e.y = 160,
        e
    },
    _.title_exp_i = function() {
        var e = new eui.Image;
        return this.title_exp = e,
        e.height = 19,
        e.source = "pet_lv_up_title_exp_png",
        e.width = 86,
        e.x = 31,
        e.y = 171,
        e
    },
    _._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_lv_up_texture_001_png",
        e.width = 8,
        e.x = 13,
        e.y = 169,
        e
    },
    _._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_icon_bg_style_1_png",
        e.width = 80,
        e.x = 60,
        e.y = 265,
        e
    },
    _._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_icon_bg_style_1_png",
        e.width = 80,
        e.x = 194,
        e.y = 265,
        e
    },
    _._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_icon_bg_style_1_png",
        e.width = 80,
        e.x = 328,
        e.y = 265,
        e
    },
    _.icon_item_2_i = function() {
        var e = new eui.Image;
        return this.icon_item_2 = e,
        e.height = 49,
        e.source = "",
        e.width = 44,
        e.x = 346,
        e.y = 281,
        e
    },
    _.icon_item_1_i = function() {
        var e = new eui.Image;
        return this.icon_item_1 = e,
        e.height = 49,
        e.source = "",
        e.width = 44,
        e.x = 212,
        e.y = 281,
        e
    },
    _.icon_item_0_i = function() {
        var e = new eui.Image;
        return this.icon_item_0 = e,
        e.height = 49,
        e.source = "",
        e.width = 44,
        e.x = 78,
        e.y = 281,
        e
    },
    _._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 72,
        e.source = "pet_lv_up_texture_003_png",
        e.width = 468,
        e.x = 0,
        e.y = 31,
        e
    },
    _._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_lv_up_texture_002_png",
        e.width = 462,
        e.x = 3,
        e.y = 0,
        e
    },
    _.title_next_i = function() {
        var e = new eui.Image;
        return this.title_next = e,
        e.height = 19,
        e.source = "pet_lv_up_title_next_png",
        e.width = 226,
        e.x = 31,
        e.y = 11,
        e
    },
    _._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_lv_up_texture_001_png",
        e.width = 8,
        e.x = 13,
        e.y = 9,
        e
    },
    _.img_btn_up_1_i = function() {
        var e = new eui.Image;
        return this.img_btn_up_1 = e,
        e.height = 40,
        e.source = "pet_lv_up_img_btn_up_1_png",
        e.width = 94,
        e.x = 16,
        e.y = 105,
        e
    },
    _.img_btn_exchange_0_i = function() {
        var e = new eui.Image;
        return this.img_btn_exchange_0 = e,
        e.height = 42,
        e.source = "pet_lv_up_img_btn_exchange_png",
        e.width = 92,
        e.x = 55,
        e.y = 351,
        e
    },
    _.img_btn_exchange_2_i = function() {
        var e = new eui.Image;
        return this.img_btn_exchange_2 = e,
        e.height = 42,
        e.source = "pet_lv_up_img_btn_exchange_png",
        e.width = 92,
        e.x = 322,
        e.y = 351,
        e
    },
    _.img_btn_exchange_1_i = function() {
        var e = new eui.Image;
        return this.img_btn_exchange_1 = e,
        e.height = 42,
        e.source = "pet_lv_up_img_btn_exchange_png",
        e.width = 92,
        e.x = 188,
        e.y = 351,
        e
    },
    _.img_btn_up_5_i = function() {
        var e = new eui.Image;
        return this.img_btn_up_5 = e,
        e.height = 40,
        e.source = "pet_lv_up_img_btn_up_5_png",
        e.width = 94,
        e.x = 130,
        e.y = 105,
        e
    },
    _.img_btn_up_100_i = function() {
        var e = new eui.Image;
        return this.img_btn_up_100 = e,
        e.height = 40,
        e.source = "pet_lv_up_img_btn_up_100_png",
        e.width = 94,
        e.x = 358,
        e.y = 105,
        e
    },
    _.img_btn_up_10_i = function() {
        var e = new eui.Image;
        return this.img_btn_up_10 = e,
        e.height = 40,
        e.source = "pet_lv_up_img_btn_up_10_png",
        e.width = 94,
        e.x = 244,
        e.y = 105,
        e
    },
    _.lab_exchange_item_0_i = function() {
        var e = new eui.Label;
        return this.lab_exchange_item_0 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "9999/9999",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.width = 80,
        e.x = 60,
        e.y = 323,
        e
    },
    _.lab_exchange_item_1_i = function() {
        var e = new eui.Label;
        return this.lab_exchange_item_1 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "9999/9999",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.width = 80,
        e.x = 194,
        e.y = 323,
        e
    },
    _.lab_exchange_item_2_i = function() {
        var e = new eui.Label;
        return this.lab_exchange_item_2 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "9999/9999",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.width = 80,
        e.x = 328,
        e.y = 323,
        e
    },
    _._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "pet_lv_up_exp_icon_png",
        e.width = 36,
        e.x = 133,
        e.y = 48,
        e
    },
    _._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "pet_lv_up_exp_icon_png",
        e.width = 36,
        e.x = 133,
        e.y = 207,
        e
    },
    _.lab_next_exp_i = function() {
        var e = new eui.Label;
        return this.lab_next_exp = e,
        e.fontFamily = "黑体",
        e.size = 22,
        e.text = "20000000",
        e.textAlign = "left",
        e.textColor = 16777215,
        e.width = 135,
        e.x = 179,
        e.y = 58,
        e
    },
    _.lab_total_exp_i = function() {
        var e = new eui.Label;
        return this.lab_total_exp = e,
        e.fontFamily = "黑体",
        e.size = 22,
        e.text = "20000000",
        e.textAlign = "left",
        e.textColor = 16777215,
        e.width = 127,
        e.x = 179,
        e.y = 217,
        e
    },
    _.scroller_item_i = function() {
        var e = new eui.Scroller;
        return this.scroller_item = e,
        e.height = 424,
        e.visible = !1,
        e.width = 484,
        e.x = 34,
        e.y = 180,
        e.viewport = this._Group1_i(),
        e
    },
    _._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_viewport_i()],
        e
    },
    _.list_viewport_i = function() {
        var e = new eui.List;
        return this.list_viewport = e,
        e.height = 200,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    _._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 14,
        e.orientation = "rows",
        e.paddingBottom = 12,
        e.paddingLeft = 14,
        e.paddingRight = 14,
        e.paddingTop = 12,
        e.requestedColumnCount = 5,
        e.verticalGap = 14,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PetStyleSkin.exml"] = window.PetStyleSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["pet_bg", "pos_petStyles", "txtLevel", "lab_name", "img_icon", "icon_elem", "icon_up", "bead_0", "bead_1", "grp_info"],
        this.height = 498,
        this.width = 648,
        this.elementsContent = [this.pet_bg_i(), this.pos_petStyles_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.pet_bg_i = function() {
        var e = new eui.Image;
        return this.pet_bg = e,
        e.source = "pet_base_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.pos_petStyles_i = function() {
        var e = new eui.Group;
        return this.pos_petStyles = e,
        e.height = 0,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.width = 0,
        e.x = 340,
        e.y = 402,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 146,
        e.y = 432,
        e.elementsContent = [this._Image1_i(), this.txtLevel_i(), this.lab_name_i(), this.img_icon_i(), this.icon_elem_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pet_style_texture_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.size = 18,
        e.text = "Lv.100",
        e.textColor = 16773477,
        e.x = 37,
        e.y = 9,
        e
    },
    i.lab_name_i = function() {
        var e = new eui.Label;
        return this.lab_name = e,
        e.size = 18,
        e.text = "精灵名字应该有十个字",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 200,
        e.x = 100,
        e.y = 10,
        e
    },
    i.img_icon_i = function() {
        var e = new eui.Image;
        return this.img_icon = e,
        e.source = "pet_detailed_information_img_icon_png",
        e.x = 328,
        e.y = 6,
        e
    },
    i.icon_elem_i = function() {
        var e = new eui.Image;
        return this.icon_elem = e,
        e.height = 25,
        e.width = 25,
        e.x = 2,
        e.y = 7,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 161,
        e.width = 45,
        e.x = 510,
        e.y = 57,
        e.elementsContent = [this.grp_info_i()],
        e
    },
    i.grp_info_i = function() {
        var e = new eui.Group;
        return this.grp_info = e,
        e.horizontalCenter = -1,
        e.scaleX = 1,
        e.scaleY = 1,
        e.top = 0,
        e.layout = this._VerticalLayout1_i(),
        e.elementsContent = [this.icon_up_i(), this.bead_0_i(), this.bead_1_i()],
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    i.icon_up_i = function() {
        var e = new eui.Group;
        return this.icon_up = e,
        e.x = 120,
        e.y = 331,
        e.elementsContent = [this._Image2_i(), this._Image3_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pet_detailed_information_bead_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_detailed_info_up_png",
        e.width = 29,
        e.x = 8,
        e.y = 12,
        e
    },
    i.bead_0_i = function() {
        var e = new petDetailedInfo.EnergyBead;
        return this.bead_0 = e,
        e.skinName = "EnergyBeadSkin",
        e.x = 0,
        e.y = 0,
        e
    },
    i.bead_1_i = function() {
        var e = new petDetailedInfo.EnergyBead;
        return this.bead_1 = e,
        e.skinName = "EnergyBeadSkin",
        e.x = 0,
        e.y = 31,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PetUseItemPanelSkin.exml"] = window.PetUseItemPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_btn_close", "lab_desc", "list_viewport", "scroller_item"],
        this.currentState = "power",
        this.height = 640,
        this.width = 536,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.img_btn_close_i(), this._Label1_i(), this.lab_desc_i(), this.scroller_item_i()],
        this.states = [new eui.State("power", [new eui.SetProperty("lab_desc", "x", 32), new eui.SetProperty("lab_desc", "textAlign", "center")]), new eui.State("nature", [new eui.SetProperty("_Label1", "text", "使用下列道具调整精灵天赋"), new eui.SetProperty("lab_desc", "text", "当前天赋：999/999")]), new eui.State("character", [new eui.SetProperty("_Label1", "text", "使用下列道具调整精灵性格"), new eui.SetProperty("lab_desc", "x", 32), new eui.SetProperty("lab_desc", "text", "当前性格：开朗[速度+10% 特攻击-10%]")])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pet_use_item_panel_bg_png",
        e.x = 5,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 480,
        e.source = "common_texture_001_png",
        e.width = 500,
        e.x = 26,
        e.y = 134,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.source = "common_texture_002_png",
        e.width = 484,
        e.x = 34,
        e.y = 50,
        e
    },
    i.img_btn_close_i = function() {
        var e = new eui.Image;
        return this.img_btn_close = e,
        e.source = "pet_use_item_panel_img_btn_back_png",
        e.x = 0,
        e.y = 272,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return this._Label1 = e,
        e.size = 16,
        e.text = "使用下列道具调整精灵体力上限",
        e.textAlign = "center",
        e.textColor = 4239359,
        e.width = 484,
        e.x = 32,
        e.y = 96,
        e
    },
    i.lab_desc_i = function() {
        var e = new eui.Label;
        return this.lab_desc = e,
        e.size = 22,
        e.text = "当前体力上限：999/999",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 484,
        e.x = 34,
        e.y = 64,
        e
    },
    i.scroller_item_i = function() {
        var e = new eui.Scroller;
        return this.scroller_item = e,
        e.height = 450,
        e.width = 484,
        e.x = 34,
        e.y = 142,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_viewport_i()],
        e
    },
    i.list_viewport_i = function() {
        var e = new eui.List;
        return this.list_viewport = e,
        e.height = 200,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 14,
        e.orientation = "rows",
        e.paddingLeft = 14,
        e.paddingRight = 14,
        e.paddingTop = 14,
        e.requestedColumnCount = 5,
        e.verticalGap = 14,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/RuneWarehouseSkin.exml"] = window.RuneWarehouseSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txtSearch", "imgSearch", "left_bg", "rad_all", "rad_2j", "rad_3j", "rad_4j", "rad_5j", "rad_ability", "rad_skill", "list_rune", "scroller_rune", "btnHide"],
        this.height = 594,
        this.width = 624,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this._Group2_i(), this.scroller_rune_i(), this.btnHide_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.fontFamily = "黑体",
            e.height = 24,
            e.left = "10",
            e.right = "10",
            e.size = 18,
            e.textColor = 16777215,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "黑体",
            e.height = 24,
            e.left = 10,
            e.right = 10,
            e.size = 18,
            e.textColor = 11974326,
            e.touchEnabled = !1,
            e.verticalCenter = 1,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "所有",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "两角全能",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "三角全能",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "四角全能",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "五角全能",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "能力",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    l = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up2_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "技能",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    h = t.prototype;
    return h.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 594,
        e.source = "rune_ware_house_bg_png",
        e.width = 500,
        e.x = 124,
        e.y = 0,
        e
    },
    h._Group1_i = function() {
        var e = new eui.Group;
        return e.right = 10,
        e.y = 7,
        e.elementsContent = [this._Image1_i(), this.txtSearch_i(), this.imgSearch_i()],
        e
    },
    h._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "common_search_bg_png",
        e.width = 220,
        e.x = 0,
        e.y = 0,
        e
    },
    h.txtSearch_i = function() {
        var e = new eui.TextInput;
        return this.txtSearch = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 19,
        e.maxChars = 20,
        e.prompt = "输入搜索文字",
        e.width = 158,
        e.x = 12,
        e.y = 11,
        e.skinName = i,
        e
    },
    h.imgSearch_i = function() {
        var e = new eui.Image;
        return this.imgSearch = e,
        e.height = 38,
        e.source = "mark_imgSearch_png",
        e.width = 38,
        e.x = 181,
        e.y = 1,
        e
    },
    h._Group2_i = function() {
        var e = new eui.Group;
        return e.width = 130,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.left_bg_i(), this.rad_all_i(), this.rad_2j_i(), this.rad_3j_i(), this.rad_4j_i(), this.rad_5j_i(), this.rad_ability_i(), this.rad_skill_i()],
        e
    },
    h.left_bg_i = function() {
        var e = new eui.Image;
        return this.left_bg = e,
        e.height = 594,
        e.left = 0,
        e.right = 9,
        e.source = "comon_left_bg2_no_alpha_png",
        e.y = 0,
        e
    },
    h.rad_all_i = function() {
        var e = new eui.RadioButton;
        return this.rad_all = e,
        e.groupName = "rb_navbar",
        e.label = "",
        e.selected = !0,
        e.value = "1",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 28,
        e.skinName = n,
        e
    },
    h.rad_2j_i = function() {
        var e = new eui.RadioButton;
        return this.rad_2j = e,
        e.groupName = "rb_navbar",
        e.label = "",
        e.selected = !0,
        e.value = "2",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 93,
        e.skinName = _,
        e
    },
    h.rad_3j_i = function() {
        var e = new eui.RadioButton;
        return this.rad_3j = e,
        e.groupName = "rb_navbar",
        e.label = "",
        e.selected = !0,
        e.value = "3",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 158,
        e.skinName = r,
        e
    },
    h.rad_4j_i = function() {
        var e = new eui.RadioButton;
        return this.rad_4j = e,
        e.groupName = "rb_navbar",
        e.label = "",
        e.selected = !0,
        e.value = "4",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 223,
        e.skinName = o,
        e
    },
    h.rad_5j_i = function() {
        var e = new eui.RadioButton;
        return this.rad_5j = e,
        e.groupName = "rb_navbar",
        e.label = "",
        e.selected = !0,
        e.value = "5",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 288,
        e.skinName = a,
        e
    },
    h.rad_ability_i = function() {
        var e = new eui.RadioButton;
        return this.rad_ability = e,
        e.groupName = "rb_navbar",
        e.label = "",
        e.value = "6",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 353,
        e.skinName = s,
        e
    },
    h.rad_skill_i = function() {
        var e = new eui.RadioButton;
        return this.rad_skill = e,
        e.groupName = "rb_navbar",
        e.label = "",
        e.value = "7",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 418,
        e.skinName = l,
        e
    },
    h.scroller_rune_i = function() {
        var e = new eui.Scroller;
        return this.scroller_rune = e,
        e.height = 530,
        e.scrollPolicyH = "off",
        e.width = 498,
        e.x = 125,
        e.y = 55,
        e.viewport = this._Group3_i(),
        e
    },
    h._Group3_i = function() {
        var e = new eui.Group;
        return e.percentHeight = 100,
        e.percentWidth = 100,
        e.elementsContent = [this.list_rune_i()],
        e
    },
    h.list_rune_i = function() {
        var e = new eui.List;
        return this.list_rune = e,
        e.height = 530,
        e.top = 0,
        e.width = 498,
        e.x = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    h._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.columnAlign = "justifyUsingWidth",
        e.horizontalAlign = "center",
        e.horizontalGap = 16,
        e.orientation = "rows",
        e.paddingBottom = 5,
        e.paddingLeft = 16,
        e.paddingRight = 16,
        e.paddingTop = 5,
        e.verticalGap = 16,
        e
    },
    h.btnHide_i = function() {
        var e = new eui.Image;
        return this.btnHide = e,
        e.right = -1,
        e.scaleX = -1,
        e.source = "pet_use_item_panel_img_btn_back_png",
        e.verticalCenter = .5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetDetailedInformationSkin.exml"] = window.PetDetailedInformationSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "petStyleView", "rb_info", "rb_skill", "rb_kangxing", "rb_skin", "rb_item", "viewStack", "btnNext", "btnPre", "img_btn_close"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.petStyleView_i(), this._Group2_i(), this.viewStack_i(), this.btnNext_i(), this.btnPre_i(), this._Group3_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "信息",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "技能",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "抗性",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "皮肤",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up2_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "common_tab_down_bg_png",
            e.percentWidth = 100,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 26,
            e.text = "道具",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(824, 0, 306, 640),
        e.source = "common_ui_bg_2_png",
        e.y = 0,
        e
    },
    a.petStyleView_i = function() {
        var e = new core.component.pet.PetModel;
        return this.petStyleView = e,
        e.bottom = 0,
        e.height = 640,
        e.horizontalCenter = -188,
        e.width = 760,
        e
    },
    a._Group2_i = function() {
        var e = new eui.Group;
        return e.left = 0,
        e.y = 50,
        e.elementsContent = [this._Image1_i(), this._Group1_i()],
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 594,
        e.left = 0,
        e.right = 7,
        e.source = "comon_left_bg_png",
        e.y = 0,
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return e.touchEnabled = !1,
        e.width = 137,
        e.x = 0,
        e.y = 81,
        e.elementsContent = [this.rb_info_i(), this.rb_skill_i(), this.rb_kangxing_i(), this.rb_skin_i(), this.rb_item_i()],
        e
    },
    a.rb_info_i = function() {
        var e = new eui.RadioButton;
        return this.rb_info = e,
        e.groupName = "rbgrp_left",
        e.label = "",
        e.value = "1",
        e.width = 137,
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    a.rb_skill_i = function() {
        var e = new eui.RadioButton;
        return this.rb_skill = e,
        e.groupName = "rbgrp_left",
        e.label = "",
        e.value = "2",
        e.width = 137,
        e.x = 0,
        e.y = 65,
        e.skinName = n,
        e
    },
    a.rb_kangxing_i = function() {
        var e = new eui.RadioButton;
        return this.rb_kangxing = e,
        e.groupName = "rbgrp_left",
        e.label = "",
        e.value = "3",
        e.width = 137,
        e.x = 0,
        e.y = 130,
        e.skinName = _,
        e
    },
    a.rb_skin_i = function() {
        var e = new eui.RadioButton;
        return this.rb_skin = e,
        e.groupName = "rbgrp_left",
        e.label = "",
        e.value = "4",
        e.width = 137,
        e.x = 0,
        e.y = 195,
        e.skinName = r,
        e
    },
    a.rb_item_i = function() {
        var e = new eui.RadioButton;
        return this.rb_item = e,
        e.groupName = "rbgrp_left",
        e.label = "",
        e.value = "5",
        e.width = 137,
        e.x = 0,
        e.y = 260,
        e.skinName = o,
        e
    },
    a.viewStack_i = function() {
        var e = new eui.ViewStack;
        return this.viewStack = e,
        e.height = 591,
        e.right = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.width = 521,
        e.y = 50,
        e
    },
    a.btnNext_i = function() {
        var e = new eui.Image;
        return this.btnNext = e,
        e.height = 79,
        e.horizontalCenter = -1.5,
        e.source = "pet_info_skin_img_allow_png",
        e.width = 57,
        e.y = 445,
        e
    },
    a.btnPre_i = function() {
        var e = new eui.Image;
        return this.btnPre = e,
        e.height = 79,
        e.horizontalCenter = -389.5,
        e.scaleX = -1,
        e.source = "pet_info_skin_img_allow_png",
        e.width = 57,
        e.y = 444,
        e
    },
    a._Group3_i = function() {
        var e = new eui.Group;
        return e.touchEnabled = !1,
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.img_btn_close_i(), this._Image3_i()],
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "common_top_bg_style1_png",
        e.top = 0,
        e
    },
    a.img_btn_close_i = function() {
        var e = new eui.Image;
        return this.img_btn_close = e,
        e.source = "common_close_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pet_detailed_information_title_png",
        e.x = 112,
        e.y = 7.44,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetInfoItemSkin.exml"] = window.PetInfoItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title_item", "_bagItem"],
        this.height = 591,
        this.width = 521,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.title_item_i(), this._bagItem_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 591,
        e.source = "common_right_bg_png",
        e.width = 525,
        e.x = -4,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 532,
        e.source = "pet_info_item_s9_texture_003_png",
        e.width = 498,
        e.x = 12,
        e.y = 39,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_item_texture_line_png",
        e.width = 492,
        e.x = 15,
        e.y = 8,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 52,
        e.source = "pet_info_item_texture_001_png",
        e.width = 36,
        e.x = 12,
        e.y = 2,
        e
    },
    i.title_item_i = function() {
        var e = new eui.Image;
        return this.title_item = e,
        e.height = 36,
        e.source = "pet_info_item_title_item_png",
        e.width = 101,
        e.x = 37,
        e.y = 10,
        e
    },
    i._bagItem_i = function() {
        var e = new petDetailedInfo.BagItem;
        return this._bagItem = e,
        e.skinName = "BagItemSkin",
        e.x = 24,
        e.y = 51,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetInfoResistanceSkin.exml"] = window.PetInfoResistanceSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title_shkx", "title_yckx", "lab_yc_name_0", "lab_yc_value_0", "icon_yc_0", "lab_yc_name_2", "lab_yc_value_2", "icon_yc_2", "lab_yc_name_4", "lab_yc_value_4", "icon_yc_4", "lab_yc_name_1", "lab_yc_value_1", "icon_yc_1", "lab_yc_name_3", "lab_yc_value_3", "icon_yc_3", "lab_yc_name_5", "lab_yc_value_5", "icon_yc_5", "lab_sh_name_0", "lab_sh_value_0", "icon_sh_0", "lab_sh_name_1", "lab_sh_value_1", "icon_sh_1", "lab_sh_name_2", "lab_sh_value_2", "icon_sh_2", "title_ctrl", "title_rh", "img_btn_up", "img_btn_star"],
        this.currentState = "up",
        this.height = 591,
        this.width = 521,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Image18_i()],
        this.states = [new eui.State("no", [new eui.SetProperty("_Group1", "visible", !1), new eui.SetProperty("_Group2", "visible", !1)]), new eui.State("canStart", [new eui.SetProperty("_Group1", "visible", !1), new eui.SetProperty("_Image18", "visible", !1)]), new eui.State("up", [new eui.SetProperty("lab_sh_name_1", "text", "固定伤害减免"), new eui.SetProperty("lab_sh_name_2", "text", "百分比伤害减免"), new eui.SetProperty("_Group2", "visible", !1), new eui.SetProperty("_Image18", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 591,
        e.source = "common_right_bg_png",
        e.width = 525,
        e.x = -4,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.title_shkx_i(), this._Image6_i(), this._Image7_i(), this.title_yckx_i(), this._Image8_i(), this.lab_yc_name_0_i(), this.lab_yc_value_0_i(), this.icon_yc_0_i(), this._Image9_i(), this.lab_yc_name_2_i(), this.lab_yc_value_2_i(), this.icon_yc_2_i(), this._Image10_i(), this.lab_yc_name_4_i(), this.lab_yc_value_4_i(), this.icon_yc_4_i(), this._Image11_i(), this.lab_yc_name_1_i(), this.lab_yc_value_1_i(), this.icon_yc_1_i(), this._Image12_i(), this.lab_yc_name_3_i(), this.lab_yc_value_3_i(), this.icon_yc_3_i(), this._Image13_i(), this.lab_yc_name_5_i(), this.lab_yc_value_5_i(), this.icon_yc_5_i(), this._Image14_i(), this.lab_sh_name_0_i(), this.lab_sh_value_0_i(), this.icon_sh_0_i(), this._Image15_i(), this.lab_sh_name_1_i(), this.lab_sh_value_1_i(), this.icon_sh_1_i(), this._Image16_i(), this.lab_sh_name_2_i(), this.lab_sh_value_2_i(), this.icon_sh_2_i(), this.title_ctrl_i(), this.title_rh_i(), this.img_btn_up_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 192,
        e.source = "pet_info_item_s9_texture_003_png",
        e.width = 498,
        e.x = 12,
        e.y = 39,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 242,
        e.source = "pet_info_item_s9_texture_003_png",
        e.width = 498,
        e.x = 12,
        e.y = 265,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_item_texture_line_png",
        e.width = 492,
        e.x = 15,
        e.y = 8,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 52,
        e.source = "pet_info_item_texture_001_png",
        e.width = 36,
        e.x = 12,
        e.y = 2,
        e
    },
    i.title_shkx_i = function() {
        var e = new eui.Image;
        return this.title_shkx = e,
        e.height = 36,
        e.source = "pet_info_resistance_title_shkx_png",
        e.width = 101,
        e.x = 37,
        e.y = 10,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_item_texture_line_png",
        e.width = 492,
        e.x = 15,
        e.y = 234,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 52,
        e.source = "pet_info_item_texture_001_png",
        e.width = 36,
        e.x = 12,
        e.y = 228,
        e
    },
    i.title_yckx_i = function() {
        var e = new eui.Image;
        return this.title_yckx = e,
        e.height = 36,
        e.source = "pet_info_resistance_title_yckx_png",
        e.width = 101,
        e.x = 37,
        e.y = 236,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_resistance_texture_001_png",
        e.width = 220,
        e.x = 34,
        e.y = 334,
        e
    },
    i.lab_yc_name_0_i = function() {
        var e = new eui.Label;
        return this.lab_yc_name_0 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "免疫石化",
        e.textColor = 16777215,
        e.x = 82,
        e.y = 345,
        e
    },
    i.lab_yc_value_0_i = function() {
        var e = new eui.Label;
        return this.lab_yc_value_0 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100%",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 40,
        e.x = 192,
        e.y = 346,
        e
    },
    i.icon_yc_0_i = function() {
        var e = new eui.Image;
        return this.icon_yc_0 = e,
        e.height = 30,
        e.source = "",
        e.width = 30,
        e.x = 40,
        e.y = 339,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_resistance_texture_001_png",
        e.width = 220,
        e.x = 34,
        e.y = 384,
        e
    },
    i.lab_yc_name_2_i = function() {
        var e = new eui.Label;
        return this.lab_yc_name_2 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "免疫石化",
        e.textColor = 16777215,
        e.x = 82,
        e.y = 395,
        e
    },
    i.lab_yc_value_2_i = function() {
        var e = new eui.Label;
        return this.lab_yc_value_2 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100%",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 40,
        e.x = 192,
        e.y = 396,
        e
    },
    i.icon_yc_2_i = function() {
        var e = new eui.Image;
        return this.icon_yc_2 = e,
        e.height = 30,
        e.source = "",
        e.width = 30,
        e.x = 40,
        e.y = 389,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_resistance_texture_001_png",
        e.width = 220,
        e.x = 34,
        e.y = 434,
        e
    },
    i.lab_yc_name_4_i = function() {
        var e = new eui.Label;
        return this.lab_yc_name_4 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "免疫石化",
        e.textColor = 16777215,
        e.x = 82,
        e.y = 445,
        e
    },
    i.lab_yc_value_4_i = function() {
        var e = new eui.Label;
        return this.lab_yc_value_4 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100%",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 40,
        e.x = 192,
        e.y = 446,
        e
    },
    i.icon_yc_4_i = function() {
        var e = new eui.Image;
        return this.icon_yc_4 = e,
        e.height = 30,
        e.source = "",
        e.width = 30,
        e.x = 40,
        e.y = 439,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_resistance_texture_001_png",
        e.width = 220,
        e.x = 268,
        e.y = 334,
        e
    },
    i.lab_yc_name_1_i = function() {
        var e = new eui.Label;
        return this.lab_yc_name_1 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "免疫石化",
        e.textColor = 16777215,
        e.x = 316,
        e.y = 345,
        e
    },
    i.lab_yc_value_1_i = function() {
        var e = new eui.Label;
        return this.lab_yc_value_1 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100%",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 40,
        e.x = 426,
        e.y = 346,
        e
    },
    i.icon_yc_1_i = function() {
        var e = new eui.Image;
        return this.icon_yc_1 = e,
        e.height = 30,
        e.source = "",
        e.width = 30,
        e.x = 274,
        e.y = 339,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_resistance_texture_001_png",
        e.width = 220,
        e.x = 268,
        e.y = 384,
        e
    },
    i.lab_yc_name_3_i = function() {
        var e = new eui.Label;
        return this.lab_yc_name_3 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "免疫石化",
        e.textColor = 16777215,
        e.x = 316,
        e.y = 395,
        e
    },
    i.lab_yc_value_3_i = function() {
        var e = new eui.Label;
        return this.lab_yc_value_3 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100%",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 40,
        e.x = 426,
        e.y = 396,
        e
    },
    i.icon_yc_3_i = function() {
        var e = new eui.Image;
        return this.icon_yc_3 = e,
        e.height = 30,
        e.source = "",
        e.width = 30,
        e.x = 274,
        e.y = 389,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_resistance_texture_001_png",
        e.width = 220,
        e.x = 268,
        e.y = 434,
        e
    },
    i.lab_yc_name_5_i = function() {
        var e = new eui.Label;
        return this.lab_yc_name_5 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "免疫石化",
        e.textColor = 16777215,
        e.x = 316,
        e.y = 445,
        e
    },
    i.lab_yc_value_5_i = function() {
        var e = new eui.Label;
        return this.lab_yc_value_5 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100%",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 40,
        e.x = 426,
        e.y = 446,
        e
    },
    i.icon_yc_5_i = function() {
        var e = new eui.Image;
        return this.icon_yc_5 = e,
        e.height = 30,
        e.source = "",
        e.width = 30,
        e.x = 274,
        e.y = 439,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_resistance_texture_001_png",
        e.width = 454,
        e.x = 34,
        e.y = 65,
        e
    },
    i.lab_sh_name_0_i = function() {
        var e = new eui.Label;
        return this.lab_sh_name_0 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "致命伤害减免",
        e.textColor = 16777215,
        e.x = 82,
        e.y = 76,
        e
    },
    i.lab_sh_value_0_i = function() {
        var e = new eui.Label;
        return this.lab_sh_value_0 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "1%",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 100,
        e.x = 370,
        e.y = 78,
        e
    },
    i.icon_sh_0_i = function() {
        var e = new eui.Image;
        return this.icon_sh_0 = e,
        e.height = 30,
        e.source = "pet_detailed_information_icon_sh_0_png",
        e.width = 30,
        e.x = 40,
        e.y = 70,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_resistance_texture_001_png",
        e.width = 454,
        e.x = 34,
        e.y = 115,
        e
    },
    i.lab_sh_name_1_i = function() {
        var e = new eui.Label;
        return this.lab_sh_name_1 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "致命伤害减免",
        e.textColor = 16777215,
        e.x = 82,
        e.y = 126,
        e
    },
    i.lab_sh_value_1_i = function() {
        var e = new eui.Label;
        return this.lab_sh_value_1 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100%",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 100,
        e.x = 370,
        e.y = 128,
        e
    },
    i.icon_sh_1_i = function() {
        var e = new eui.Image;
        return this.icon_sh_1 = e,
        e.height = 30,
        e.source = "pet_detailed_information_icon_sh_1_png",
        e.width = 30,
        e.x = 40,
        e.y = 120,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_resistance_texture_001_png",
        e.width = 454,
        e.x = 34,
        e.y = 165,
        e
    },
    i.lab_sh_name_2_i = function() {
        var e = new eui.Label;
        return this.lab_sh_name_2 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "致命伤害减免",
        e.textColor = 16777215,
        e.x = 82,
        e.y = 176,
        e
    },
    i.lab_sh_value_2_i = function() {
        var e = new eui.Label;
        return this.lab_sh_value_2 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100%",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 100,
        e.x = 370,
        e.y = 178,
        e
    },
    i.icon_sh_2_i = function() {
        var e = new eui.Image;
        return this.icon_sh_2 = e,
        e.height = 30,
        e.source = "pet_detailed_information_icon_sh_2_png",
        e.width = 30,
        e.x = 40,
        e.y = 170,
        e
    },
    i.title_ctrl_i = function() {
        var e = new eui.Image;
        return this.title_ctrl = e,
        e.height = 34,
        e.source = "pet_info_resistance_title_ctrl_png",
        e.width = 168,
        e.x = 58,
        e.y = 287,
        e
    },
    i.title_rh_i = function() {
        var e = new eui.Image;
        return this.title_rh = e,
        e.height = 34,
        e.source = "pet_info_resistance_title_rh_png",
        e.width = 140,
        e.x = 310,
        e.y = 287,
        e
    },
    i.img_btn_up_i = function() {
        var e = new eui.Image;
        return this.img_btn_up = e,
        e.height = 50,
        e.source = "pet_info_resistance_img_btn_up_png",
        e.width = 174,
        e.x = 174,
        e.y = 515,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return this._Group2 = e,
        e.x = 125,
        e.y = 204,
        e.elementsContent = [this.img_btn_star_i(), this._Image17_i()],
        e
    },
    i.img_btn_star_i = function() {
        var e = new eui.Image;
        return this.img_btn_star = e,
        e.height = 50,
        e.source = "pet_info_resistance_img_btn_start_png",
        e.width = 174,
        e.x = 49,
        e.y = 107,
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 74,
        e.source = "pet_info_resistance_start_tips_png",
        e.width = 272,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return this._Image18 = e,
        e.height = 34,
        e.source = "pet_info_resistance_unStartTips_png",
        e.width = 210,
        e.x = 156,
        e.y = 243,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetInfoSkinSkin.exml"] = window.PetInfoSkinSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_zhuangbei", "img_btn_left", "img_btn_right", "img_yzb", "txt_num", "txt_line1", "txt_line3", "txt_line2", "list_viewport", "grp_skin", "img_noSkin"],
        this.height = 591,
        this.width = 521,
        this.elementsContent = [this._Image1_i(), this.grp_skin_i(), this.img_noSkin_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 591,
        e.source = "common_right_bg_png",
        e.width = 525,
        e.x = -4,
        e.y = 0,
        e
    },
    i.grp_skin_i = function() {
        var e = new eui.Group;
        return this.grp_skin = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.img_zhuangbei_i(), this.img_btn_left_i(), this.img_btn_right_i(), this.img_yzb_i(), this.txt_num_i(), this._Group1_i(), this.list_viewport_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_item_texture_line_png",
        e.width = 492,
        e.x = 15,
        e.y = 8,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 52,
        e.source = "pet_info_item_texture_001_png",
        e.width = 36,
        e.x = 12,
        e.y = 2,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "pet_info_skin_title_skin_png",
        e.width = 102,
        e.x = 36,
        e.y = 10,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 109,
        e.source = "common_texture_002_png",
        e.width = 484,
        e.x = 11,
        e.y = 57,
        e
    },
    i.img_zhuangbei_i = function() {
        var e = new eui.Image;
        return this.img_zhuangbei = e,
        e.height = 50,
        e.source = "pet_info_skin_img_zhuangbei_png",
        e.width = 174,
        e.x = 174,
        e.y = 515,
        e
    },
    i.img_btn_left_i = function() {
        var e = new eui.Image;
        return this.img_btn_left = e,
        e.height = 79,
        e.scaleX = -1,
        e.scaleY = 1,
        e.source = "pet_info_skin_img_allow_png",
        e.width = 57,
        e.x = 60.5,
        e.y = 315,
        e
    },
    i.img_btn_right_i = function() {
        var e = new eui.Image;
        return this.img_btn_right = e,
        e.height = 79,
        e.source = "pet_info_skin_img_allow_png",
        e.width = 57,
        e.x = 460.5,
        e.y = 315,
        e
    },
    i.img_yzb_i = function() {
        var e = new eui.Image;
        return this.img_yzb = e,
        e.height = 42,
        e.source = "pet_info_skin_img_yzb_png",
        e.width = 131,
        e.x = 196,
        e.y = 519,
        e
    },
    i.txt_num_i = function() {
        var e = new eui.Label;
        return this.txt_num = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "已获得皮肤：",
        e.textColor = 5879295,
        e.x = 322,
        e.y = 17,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 37,
        e.y = 71,
        e.elementsContent = [this.txt_line1_i(), this.txt_line3_i(), this.txt_line2_i(), this._Image6_i(), this._Image7_i()],
        e
    },
    i.txt_line1_i = function() {
        var e = new eui.Label;
        return this.txt_line1 = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "精灵名称应该有十个字",
        e.textColor = 16777215,
        e.x = 27,
        e.y = 1,
        e
    },
    i.txt_line3_i = function() {
        var e = new eui.Label;
        return this.txt_line3 = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "通过限时活动获得",
        e.textColor = 16777215,
        e.x = 27,
        e.y = 62,
        e
    },
    i.txt_line2_i = function() {
        var e = new eui.Label;
        return this.txt_line2 = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "[皮肤品级]皮肤：精灵皮肤名称有十个字",
        e.textColor = 16777215,
        e.x = 27,
        e.y = 29,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "pet_info_skin_img_dot_png",
        e.width = 20,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "pet_info_skin_img_dot_png",
        e.width = 20,
        e.x = 0,
        e.y = 61,
        e
    },
    i.list_viewport_i = function() {
        var e = new eui.List;
        return this.list_viewport = e,
        e.height = 316,
        e.width = 400,
        e.x = 60.5,
        e.y = 180,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = -70,
        e.paddingTop = 10,
        e
    },
    i.img_noSkin_i = function() {
        var e = new eui.Image;
        return this.img_noSkin = e,
        e.source = "pet_skin_noSkin_png",
        e.visible = !1,
        e.x = 141,
        e.y = 244,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetInfoViewSkin.exml"] = window.PetInfoViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["start_0", "start_1", "start_2", "start_3", "start_4", "img_btn_lvl", "img_btn_studay", "img_btn_genius", "img_btn_power", "img_btn_nature", "img_btn_texing", "img_rune_bg_0", "img_rune_bg_1", "img_rune_bg_2", "img_runelock_2", "img_btn_rune", "img_btn_rune_warehouse", "img_rune_0", "img_rune_1", "img_rune_2", "img_select", "lab_atk", "lab_atk_extra", "lab_satk", "lab_satk_extra", "lab_speed", "lab_speed_extra", "lab_def", "lab_def_extra", "lab_sdef", "lab_sdef_extra", "lab_hp", "lab_hp_extra", "lab_lvl", "lab_nature", "lab_studayValue", "lab_genius", "lab_texing", "lab_power", "grp_0", "grp_1", "grp_2", "grp_3", "grp_4", "grp_5", "base", "pve", "pvp", "btnQa", "grp_default"],
        this.height = 591,
        this.width = 521,
        this.elementsContent = [this.grp_default_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_default_i = function() {
        var e = new eui.Group;
        return this.grp_default = e,
        e.touchEnabled = !1,
        e.width = 521,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this._Group1_i(), this._Image23_i(), this._Image24_i(), this._Image25_i(), this._Image26_i(), this._Image27_i(), this._Image28_i(), this._Image29_i(), this._Image30_i(), this._Image31_i(), this._Image32_i(), this._Image33_i(), this._Image34_i(), this._Image35_i(), this._Image36_i(), this._Image37_i(), this._Image38_i(), this._Image39_i(), this._Image40_i(), this.img_btn_lvl_i(), this.img_btn_studay_i(), this.img_btn_genius_i(), this.img_btn_power_i(), this.img_btn_nature_i(), this.img_btn_texing_i(), this.img_rune_bg_0_i(), this.img_rune_bg_1_i(), this.img_rune_bg_2_i(), this.img_runelock_2_i(), this.img_btn_rune_i(), this.img_btn_rune_warehouse_i(), this.img_rune_0_i(), this.img_rune_1_i(), this.img_rune_2_i(), this.img_select_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i(), this.lab_atk_i(), this.lab_atk_extra_i(), this.lab_satk_i(), this.lab_satk_extra_i(), this.lab_speed_i(), this.lab_speed_extra_i(), this.lab_def_i(), this.lab_def_extra_i(), this.lab_sdef_i(), this.lab_sdef_extra_i(), this.lab_hp_i(), this.lab_hp_extra_i(), this.lab_lvl_i(), this.lab_nature_i(), this.lab_studayValue_i(), this.lab_genius_i(), this.lab_texing_i(), this.lab_power_i(), this.grp_0_i(), this.grp_1_i(), this.grp_2_i(), this.grp_3_i(), this.grp_4_i(), this.grp_5_i(), this.base_i(), this.pve_i(), this.pvp_i(), this.btnQa_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 591,
        e.source = "common_right_bg_png",
        e.width = 525,
        e.x = -4,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 136,
        e.source = "pet_info_item_s9_texture_003_png",
        e.width = 498,
        e.x = 12,
        e.y = 235,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_item_texture_line_png",
        e.width = 492,
        e.x = 15,
        e.y = 204,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 52,
        e.source = "pet_info_item_texture_001_png",
        e.width = 36,
        e.x = 12,
        e.y = 198,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "pet_info_view_titile_attribute_png",
        e.width = 101,
        e.x = 37,
        e.y = 206,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_info_view_texture_line_1_png",
        e.width = 220,
        e.x = 43,
        e.y = 320,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_info_view_texture_line_1_png",
        e.width = 220,
        e.x = 43,
        e.y = 284,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_info_view_texture_line_1_png",
        e.width = 220,
        e.x = 273,
        e.y = 284,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_info_view_texture_line_1_png",
        e.width = 220,
        e.x = 273,
        e.y = 320,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 164,
        e.source = "pet_info_item_s9_texture_003_png",
        e.width = 498,
        e.x = 12,
        e.y = 39,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_info_view_texture_001_png",
        e.width = 228,
        e.x = 29,
        e.y = 59,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_info_view_texture_001_png",
        e.width = 228,
        e.x = 29,
        e.y = 105,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_info_view_texture_001_png",
        e.width = 228,
        e.x = 29,
        e.y = 151,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_info_view_texture_001_png",
        e.width = 228,
        e.x = 265,
        e.y = 59,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_info_view_texture_001_png",
        e.width = 228,
        e.x = 265,
        e.y = 105,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_info_view_texture_001_png",
        e.width = 228,
        e.x = 265,
        e.y = 151,
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_item_texture_line_png",
        e.width = 492,
        e.x = 15,
        e.y = 8,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 52,
        e.source = "pet_info_item_texture_001_png",
        e.width = 36,
        e.x = 12,
        e.y = 2,
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "pet_info_view_titile_info_png",
        e.width = 101,
        e.x = 37,
        e.y = 10,
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_item_texture_line_png",
        e.width = 492,
        e.x = 15,
        e.y = 372,
        e
    },
    i._Image21_i = function() {
        var e = new eui.Image;
        return e.height = 52,
        e.source = "pet_info_item_texture_001_png",
        e.width = 36,
        e.x = 12,
        e.y = 366,
        e
    },
    i._Image22_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "pet_info_view_title_maskequip_png",
        e.width = 101,
        e.x = 37,
        e.y = 374,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 324,
        e.y = 180,
        e.elementsContent = [this.start_0_i(), this.start_1_i(), this.start_2_i(), this.start_3_i(), this.start_4_i()],
        e
    },
    i.start_0_i = function() {
        var e = new eui.Image;
        return this.start_0 = e,
        e.source = "pet_info_view_img_start_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.start_1_i = function() {
        var e = new eui.Image;
        return this.start_1 = e,
        e.source = "pet_info_view_img_start_png",
        e.x = 15,
        e.y = 0,
        e
    },
    i.start_2_i = function() {
        var e = new eui.Image;
        return this.start_2 = e,
        e.source = "pet_info_view_img_start_png",
        e.x = 30,
        e.y = 0,
        e
    },
    i.start_3_i = function() {
        var e = new eui.Image;
        return this.start_3 = e,
        e.source = "pet_info_view_img_start_png",
        e.x = 45,
        e.y = 0,
        e
    },
    i.start_4_i = function() {
        var e = new eui.Image;
        return this.start_4 = e,
        e.source = "pet_info_view_img_start_null_png",
        e.x = 60,
        e.y = 0,
        e
    },
    i._Image23_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_info_view_texture_star_png",
        e.width = 25,
        e.x = 171,
        e.y = 256,
        e
    },
    i._Image24_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_info_view_texture_star_png",
        e.width = 25,
        e.x = 171,
        e.y = 292,
        e
    },
    i._Image25_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_info_view_texture_star_png",
        e.width = 25,
        e.x = 171,
        e.y = 328,
        e
    },
    i._Image26_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_info_view_texture_star_png",
        e.width = 25,
        e.x = 407,
        e.y = 256,
        e
    },
    i._Image27_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_info_view_texture_star_png",
        e.width = 25,
        e.x = 407,
        e.y = 292,
        e
    },
    i._Image28_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_info_view_texture_star_png",
        e.width = 25,
        e.x = 407,
        e.y = 328,
        e
    },
    i._Image29_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "common_atk_png",
        e.width = 24,
        e.x = 39,
        e.y = 255,
        e
    },
    i._Image30_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "common_satk_png",
        e.width = 24,
        e.x = 39,
        e.y = 292,
        e
    },
    i._Image31_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "common_speed_png",
        e.width = 24,
        e.x = 39,
        e.y = 328,
        e
    },
    i._Image32_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "common_def_png",
        e.width = 24,
        e.x = 276,
        e.y = 255,
        e
    },
    i._Image33_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "common_sdef_png",
        e.width = 24,
        e.x = 276,
        e.y = 292,
        e
    },
    i._Image34_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "common_hp_png",
        e.width = 24,
        e.x = 276,
        e.y = 327,
        e
    },
    i._Image35_i = function() {
        var e = new eui.Image;
        return e.height = 23,
        e.source = "pet_info_view_lvl_png",
        e.width = 22,
        e.x = 38,
        e.y = 65,
        e
    },
    i._Image36_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "pet_info_view_studay_png",
        e.width = 26,
        e.x = 36,
        e.y = 111,
        e
    },
    i._Image37_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "pet_info_view_xingge_png",
        e.width = 24,
        e.x = 38,
        e.y = 158,
        e
    },
    i._Image38_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "pet_info_view_hplimt_png",
        e.width = 24,
        e.x = 273,
        e.y = 111,
        e
    },
    i._Image39_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "pet_info_view_texing_png",
        e.width = 26,
        e.x = 272,
        e.y = 158,
        e
    },
    i._Image40_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "pet_info_view_tianfu_png",
        e.width = 26,
        e.x = 272,
        e.y = 63,
        e
    },
    i.img_btn_lvl_i = function() {
        var e = new eui.Image;
        return this.img_btn_lvl = e,
        e.height = 34,
        e.source = "pet_info_view_img_btn_add_png",
        e.width = 34,
        e.x = 223,
        e.y = 59,
        e
    },
    i.img_btn_studay_i = function() {
        var e = new eui.Image;
        return this.img_btn_studay = e,
        e.height = 34,
        e.source = "pet_info_view_img_btn_add_png",
        e.width = 34,
        e.x = 223,
        e.y = 105,
        e
    },
    i.img_btn_genius_i = function() {
        var e = new eui.Image;
        return this.img_btn_genius = e,
        e.height = 34,
        e.source = "pet_info_view_img_btn_add_png",
        e.width = 34,
        e.x = 459,
        e.y = 59,
        e
    },
    i.img_btn_power_i = function() {
        var e = new eui.Image;
        return this.img_btn_power = e,
        e.height = 34,
        e.source = "pet_info_view_img_btn_add_png",
        e.width = 34,
        e.x = 459,
        e.y = 105,
        e
    },
    i.img_btn_nature_i = function() {
        var e = new eui.Image;
        return this.img_btn_nature = e,
        e.height = 34,
        e.source = "pet_info_view_img_btn_ref_png",
        e.width = 34,
        e.x = 223,
        e.y = 151,
        e
    },
    i.img_btn_texing_i = function() {
        var e = new eui.Image;
        return this.img_btn_texing = e,
        e.height = 34,
        e.source = "pet_info_view_img_btn_ref_png",
        e.width = 34,
        e.x = 459,
        e.y = 151,
        e
    },
    i.img_rune_bg_0_i = function() {
        var e = new eui.Image;
        return this.img_rune_bg_0 = e,
        e.height = 80,
        e.source = "common_icon_bg_style_1_png",
        e.width = 80,
        e.x = 97,
        e.y = 421,
        e
    },
    i.img_rune_bg_1_i = function() {
        var e = new eui.Image;
        return this.img_rune_bg_1 = e,
        e.height = 80,
        e.source = "common_icon_bg_style_1_png",
        e.width = 80,
        e.x = 221,
        e.y = 421,
        e
    },
    i.img_rune_bg_2_i = function() {
        var e = new eui.Image;
        return this.img_rune_bg_2 = e,
        e.height = 80,
        e.source = "common_icon_bg_style_1_png",
        e.width = 80,
        e.x = 345,
        e.y = 421,
        e
    },
    i.img_runelock_2_i = function() {
        var e = new eui.Image;
        return this.img_runelock_2 = e,
        e.height = 44,
        e.source = "pet_info_view_lock_png",
        e.touchEnabled = !1,
        e.width = 35,
        e.x = 366.67,
        e.y = 437.67,
        e
    },
    i.img_btn_rune_i = function() {
        var e = new eui.Image;
        return this.img_btn_rune = e,
        e.height = 50,
        e.source = "pet_info_view_img_btn_rune_png",
        e.width = 174,
        e.x = 283,
        e.y = 515,
        e
    },
    i.img_btn_rune_warehouse_i = function() {
        var e = new eui.Image;
        return this.img_btn_rune_warehouse = e,
        e.height = 50,
        e.source = "pet_info_view_img_btn_rune_warehouse_png",
        e.width = 174,
        e.x = 65,
        e.y = 515,
        e
    },
    i.img_rune_0_i = function() {
        var e = new eui.Image;
        return this.img_rune_0 = e,
        e.height = 53,
        e.source = "",
        e.touchEnabled = !1,
        e.width = 55,
        e.x = 110,
        e.y = 432,
        e
    },
    i.img_rune_1_i = function() {
        var e = new eui.Image;
        return this.img_rune_1 = e,
        e.height = 53,
        e.source = "",
        e.touchEnabled = !1,
        e.width = 55,
        e.x = 234,
        e.y = 432,
        e
    },
    i.img_rune_2_i = function() {
        var e = new eui.Image;
        return this.img_rune_2 = e,
        e.height = 53,
        e.source = "",
        e.touchEnabled = !1,
        e.width = 55,
        e.x = 358,
        e.y = 432,
        e
    },
    i.img_select_i = function() {
        var e = new eui.Image;
        return this.img_select = e,
        e.anchorOffsetX = 45,
        e.anchorOffsetY = 45,
        e.height = 90,
        e.scale9Grid = new egret.Rectangle(12, 12, 74, 74),
        e.source = "common_icon_select_style_1_png",
        e.touchEnabled = !1,
        e.width = 90,
        e.x = 137,
        e.y = 460,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "攻击",
        e.textColor = 16777215,
        e.x = 70,
        e.y = 259,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "速度",
        e.textColor = 16777215,
        e.x = 70,
        e.y = 331,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "特攻",
        e.textColor = 16777215,
        e.x = 69,
        e.y = 295,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "防御",
        e.textColor = 16777215,
        e.x = 307,
        e.y = 259,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "体力",
        e.textColor = 16777215,
        e.x = 306,
        e.y = 331,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "特防",
        e.textColor = 16777215,
        e.x = 305,
        e.y = 295,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "等级",
        e.textColor = 16777215,
        e.x = 70,
        e.y = 66,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "性格",
        e.textColor = 16777215,
        e.x = 70,
        e.y = 159,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "学习力",
        e.textColor = 16777215,
        e.x = 70,
        e.y = 113,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "体力上限",
        e.textColor = 16777215,
        e.x = 306,
        e.y = 113,
        e
    },
    i._Label11_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "天赋",
        e.textColor = 16777215,
        e.x = 306,
        e.y = 67,
        e
    },
    i._Label12_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "特性",
        e.textColor = 16777215,
        e.x = 305,
        e.y = 160,
        e
    },
    i.lab_atk_i = function() {
        var e = new eui.Label;
        return this.lab_atk = e,
        e.size = 20,
        e.text = "100",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 50,
        e.x = 112,
        e.y = 260,
        e
    },
    i.lab_atk_extra_i = function() {
        var e = new eui.Label;
        return this.lab_atk_extra = e,
        e.size = 20,
        e.text = "255",
        e.textColor = 4173823,
        e.x = 199,
        e.y = 260,
        e
    },
    i.lab_satk_i = function() {
        var e = new eui.Label;
        return this.lab_satk = e,
        e.size = 20,
        e.text = "20",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 50,
        e.x = 112,
        e.y = 296,
        e
    },
    i.lab_satk_extra_i = function() {
        var e = new eui.Label;
        return this.lab_satk_extra = e,
        e.size = 20,
        e.text = "255",
        e.textColor = 4173823,
        e.x = 199,
        e.y = 296,
        e
    },
    i.lab_speed_i = function() {
        var e = new eui.Label;
        return this.lab_speed = e,
        e.size = 20,
        e.text = "20",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 50,
        e.x = 112,
        e.y = 332,
        e
    },
    i.lab_speed_extra_i = function() {
        var e = new eui.Label;
        return this.lab_speed_extra = e,
        e.size = 20,
        e.text = "255",
        e.textColor = 4173823,
        e.x = 199,
        e.y = 332,
        e
    },
    i.lab_def_i = function() {
        var e = new eui.Label;
        return this.lab_def = e,
        e.size = 20,
        e.text = "100",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 50,
        e.x = 348,
        e.y = 260,
        e
    },
    i.lab_def_extra_i = function() {
        var e = new eui.Label;
        return this.lab_def_extra = e,
        e.size = 20,
        e.text = "255",
        e.textAlign = "right",
        e.textColor = 4173823,
        e.x = 435,
        e.y = 260,
        e
    },
    i.lab_sdef_i = function() {
        var e = new eui.Label;
        return this.lab_sdef = e,
        e.size = 20,
        e.text = "20",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 50,
        e.x = 348,
        e.y = 296,
        e
    },
    i.lab_sdef_extra_i = function() {
        var e = new eui.Label;
        return this.lab_sdef_extra = e,
        e.size = 20,
        e.text = "255",
        e.textAlign = "right",
        e.textColor = 4173823,
        e.x = 435,
        e.y = 296,
        e
    },
    i.lab_hp_i = function() {
        var e = new eui.Label;
        return this.lab_hp = e,
        e.size = 20,
        e.text = "20",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 50,
        e.x = 348,
        e.y = 332,
        e
    },
    i.lab_hp_extra_i = function() {
        var e = new eui.Label;
        return this.lab_hp_extra = e,
        e.size = 20,
        e.text = "255",
        e.textAlign = "right",
        e.textColor = 4173823,
        e.x = 435,
        e.y = 332,
        e
    },
    i.lab_lvl_i = function() {
        var e = new eui.Label;
        return this.lab_lvl = e,
        e.size = 20,
        e.text = "100",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 40,
        e.x = 170,
        e.y = 68,
        e
    },
    i.lab_nature_i = function() {
        var e = new eui.Label;
        return this.lab_nature = e,
        e.size = 20,
        e.text = "开朗",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 40,
        e.x = 170,
        e.y = 159,
        e
    },
    i.lab_studayValue_i = function() {
        var e = new eui.Label;
        return this.lab_studayValue = e,
        e.size = 20,
        e.text = "510",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 40,
        e.x = 170,
        e.y = 114,
        e
    },
    i.lab_genius_i = function() {
        var e = new eui.Label;
        return this.lab_genius = e,
        e.size = 20,
        e.text = "31",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 66,
        e.x = 386,
        e.y = 68,
        e
    },
    i.lab_texing_i = function() {
        var e = new eui.Label;
        return this.lab_texing = e,
        e.size = 20,
        e.text = "顽强",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 66,
        e.x = 386,
        e.y = 160,
        e
    },
    i.lab_power_i = function() {
        var e = new eui.Label;
        return this.lab_power = e,
        e.size = 20,
        e.text = "20/20",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 66,
        e.x = 386,
        e.y = 114,
        e
    },
    i.grp_0_i = function() {
        var e = new eui.Group;
        return this.grp_0 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 29,
        e.width = 195,
        e.x = 39,
        e.y = 252,
        e
    },
    i.grp_1_i = function() {
        var e = new eui.Group;
        return this.grp_1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 29,
        e.width = 195,
        e.x = 274,
        e.y = 252,
        e
    },
    i.grp_2_i = function() {
        var e = new eui.Group;
        return this.grp_2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 29,
        e.width = 195,
        e.x = 39,
        e.y = 291,
        e
    },
    i.grp_3_i = function() {
        var e = new eui.Group;
        return this.grp_3 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 29,
        e.width = 195,
        e.x = 274,
        e.y = 291,
        e
    },
    i.grp_4_i = function() {
        var e = new eui.Group;
        return this.grp_4 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 29,
        e.width = 195,
        e.x = 39,
        e.y = 326,
        e
    },
    i.grp_5_i = function() {
        var e = new eui.Group;
        return this.grp_5 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 29,
        e.width = 195,
        e.x = 274,
        e.y = 326,
        e
    },
    i.base_i = function() {
        var e = new eui.Image;
        return this.base = e,
        e.height = 32,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_info_view_base_png",
        e.width = 64,
        e.x = 440,
        e.y = 208,
        e
    },
    i.pve_i = function() {
        var e = new eui.Image;
        return this.pve = e,
        e.height = 32,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_info_view_pve_png",
        e.width = 64,
        e.x = 440,
        e.y = 208,
        e
    },
    i.pvp_i = function() {
        var e = new eui.Image;
        return this.pvp = e,
        e.height = 32,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_info_view_pvp_png",
        e.width = 64,
        e.x = 440,
        e.y = 208,
        e
    },
    i.btnQa_i = function() {
        var e = new eui.Image;
        return this.btnQa = e,
        e.height = 29,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_info_view_btnQa_png",
        e.width = 26,
        e.x = 143,
        e.y = 211,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PetSkillInfoSkin.exml"] = window.PetSkillInfoSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["lab_skill_name_4", "lab_power_4", "lab_pp_4", "img_skillicon_4", "grp_showSKill5", "txt_open", "helpBtn_png", "group_hideSkill5", "grp_skill_4", "lab_skill_name_0", "img_skillicon_0", "lab_pp_0", "lab_power_0", "grp_skill_show_0", "img_unskill_0", "lab_skill_name_1", "img_skillicon_1", "lab_pp_1", "lab_power_1", "grp_skill_show_1", "img_unskill_1", "lab_skill_name_2", "img_skillicon_2", "lab_pp_2", "lab_power_2", "grp_skill_show_2", "img_unskill_2", "lab_skill_name_3", "img_skillicon_3", "lab_pp_3", "lab_power_3", "grp_skill_show_3", "img_unskill_3", "img_btn_skillstone", "img_btn_skill", "img_slect_skill_0", "img_slect_skill_1", "img_slect_skill_2", "img_slect_skill_3", "img_allow", "grp_skill"],
        this.height = 591,
        this.width = 521,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.grp_skill_4_i(), this.grp_skill_show_0_i(), this.img_unskill_0_i(), this.grp_skill_show_1_i(), this.img_unskill_1_i(), this.grp_skill_show_2_i(), this.img_unskill_2_i(), this.grp_skill_show_3_i(), this.img_unskill_3_i(), this.img_btn_skillstone_i(), this.img_btn_skill_i(), this.grp_skill_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 591,
        e.source = "common_right_bg_png",
        e.width = 525,
        e.x = -4,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 232,
        e.source = "pet_info_item_s9_texture_003_png",
        e.width = 498,
        e.x = 12,
        e.y = 39,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_info_item_texture_line_png",
        e.width = 486,
        e.x = 18,
        e.y = 11,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 52,
        e.source = "pet_info_item_texture_001_png",
        e.width = 36,
        e.x = 12,
        e.y = 2,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "pet_info_item_texture_line_png",
        e.width = 492,
        e.x = 15,
        e.y = 274,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 52,
        e.source = "pet_info_item_texture_001_png",
        e.width = 36,
        e.x = 15,
        e.y = 268,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "pet_skill_info_title_equipSkill_png",
        e.width = 101,
        e.x = 37,
        e.y = 10,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "pet_skill_info_title_fiveSkill_png",
        e.width = 101,
        e.x = 40,
        e.y = 276,
        e
    },
    i.grp_skill_4_i = function() {
        var e = new eui.Group;
        return this.grp_skill_4 = e,
        e.name = "grp_skill_4",
        e.x = 12,
        e.y = 305,
        e.elementsContent = [this._Image9_i(), this.grp_showSKill5_i(), this.group_hideSkill5_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 112,
        e.source = "pet_info_item_s9_texture_003_png",
        e.width = 498,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_showSKill5_i = function() {
        var e = new eui.Group;
        return this.grp_showSKill5 = e,
        e.touchEnabled = !1,
        e.x = 69,
        e.y = 26,
        e.elementsContent = [this._Image10_i(), this.lab_skill_name_4_i(), this._Label1_i(), this.lab_power_4_i(), this._Label2_i(), this.lab_pp_4_i(), this.img_skillicon_4_i(), this._Image11_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.source = "common_icon_bg_style_1_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    i.lab_skill_name_4_i = function() {
        var e = new eui.Label;
        return this.lab_skill_name_4 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "技能名称几个字",
        e.textAlign = "center",
        e.textColor = 15068927,
        e.width = 140,
        e.x = 103,
        e.y = 4,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "威力:",
        e.textColor = 4173823,
        e.x = 81,
        e.y = 39,
        e
    },
    i.lab_power_4_i = function() {
        var e = new eui.Label;
        return this.lab_power_4 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 133,
        e.y = 41,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "PP:",
        e.textColor = 4173823,
        e.x = 202,
        e.y = 41,
        e
    },
    i.lab_pp_4_i = function() {
        var e = new eui.Label;
        return this.lab_pp_4 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "20/20",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 239,
        e.y = 39,
        e
    },
    i.img_skillicon_4_i = function() {
        var e = new eui.Image;
        return this.img_skillicon_4 = e,
        e.height = 42,
        e.source = "",
        e.width = 39,
        e.x = 11,
        e.y = 9,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_skill_info_texture_line_png",
        e.width = 197,
        e.x = 82,
        e.y = 31,
        e
    },
    i.group_hideSkill5_i = function() {
        var e = new eui.Group;
        return this.group_hideSkill5 = e,
        e.touchEnabled = !1,
        e.x = 194,
        e.y = 44,
        e.elementsContent = [this.txt_open_i(), this.helpBtn_png_i()],
        e
    },
    i.txt_open_i = function() {
        var e = new eui.Label;
        return this.txt_open = e,
        e.size = 20,
        e.text = "尚未开启",
        e.textColor = 4173823,
        e.x = 0,
        e.y = 2,
        e
    },
    i.helpBtn_png_i = function() {
        var e = new eui.Image;
        return this.helpBtn_png = e,
        e.height = 25,
        e.source = "pet_skill_info_helpBtn_png_png",
        e.width = 22,
        e.x = 89,
        e.y = 0,
        e
    },
    i.grp_skill_show_0_i = function() {
        var e = new eui.Group;
        return this.grp_skill_show_0 = e,
        e.name = "grp_skill_0",
        e.x = 34,
        e.y = 60,
        e.elementsContent = [this._Image12_i(), this.lab_skill_name_0_i(), this.img_skillicon_0_i(), this.lab_pp_0_i(), this._Image13_i(), this.lab_power_0_i(), this._Label3_i(), this._Label4_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 90,
        e.source = "pet_skill_info_skill_item_bg_png",
        e.width = 222,
        e.x = 0,
        e.y = 0,
        e
    },
    i.lab_skill_name_0_i = function() {
        var e = new eui.Label;
        return this.lab_skill_name_0 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "技能名几个字",
        e.textAlign = "center",
        e.textColor = 15068927,
        e.width = 120,
        e.x = 52,
        e.y = 17,
        e
    },
    i.img_skillicon_0_i = function() {
        var e = new eui.Image;
        return this.img_skillicon_0 = e,
        e.height = 26,
        e.source = "",
        e.width = 23,
        e.x = 14,
        e.y = 14,
        e
    },
    i.lab_pp_0_i = function() {
        var e = new eui.Label;
        return this.lab_pp_0 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "20/20",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 155,
        e.y = 62,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_skill_info_texture_line_png",
        e.width = 197,
        e.x = 13,
        e.y = 45,
        e
    },
    i.lab_power_0_i = function() {
        var e = new eui.Label;
        return this.lab_power_0 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 63,
        e.y = 62,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "PP:",
        e.textColor = 4173823,
        e.x = 122,
        e.y = 62,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "威力:",
        e.textColor = 4173823,
        e.x = 11,
        e.y = 60,
        e
    },
    i.img_unskill_0_i = function() {
        var e = new eui.Image;
        return this.img_unskill_0 = e,
        e.height = 90,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_skill_info_img_unskill_png",
        e.visible = !1,
        e.width = 222,
        e.x = 34,
        e.y = 60,
        e
    },
    i.grp_skill_show_1_i = function() {
        var e = new eui.Group;
        return this.grp_skill_show_1 = e,
        e.name = "grp_skill_1",
        e.x = 266,
        e.y = 60,
        e.elementsContent = [this._Image14_i(), this.lab_skill_name_1_i(), this.img_skillicon_1_i(), this.lab_pp_1_i(), this._Image15_i(), this.lab_power_1_i(), this._Label5_i(), this._Label6_i()],
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 90,
        e.source = "pet_skill_info_skill_item_bg_png",
        e.width = 222,
        e.x = 0,
        e.y = 0,
        e
    },
    i.lab_skill_name_1_i = function() {
        var e = new eui.Label;
        return this.lab_skill_name_1 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "技能名几个字",
        e.textAlign = "center",
        e.textColor = 15068927,
        e.width = 120,
        e.x = 52,
        e.y = 17,
        e
    },
    i.img_skillicon_1_i = function() {
        var e = new eui.Image;
        return this.img_skillicon_1 = e,
        e.height = 26,
        e.source = "",
        e.width = 23,
        e.x = 14,
        e.y = 14,
        e
    },
    i.lab_pp_1_i = function() {
        var e = new eui.Label;
        return this.lab_pp_1 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "20/20",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 155,
        e.y = 62,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_skill_info_texture_line_png",
        e.width = 197,
        e.x = 13,
        e.y = 45,
        e
    },
    i.lab_power_1_i = function() {
        var e = new eui.Label;
        return this.lab_power_1 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 63,
        e.y = 62,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "PP:",
        e.textColor = 4173823,
        e.x = 122,
        e.y = 62,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "威力:",
        e.textColor = 4173823,
        e.x = 11,
        e.y = 60,
        e
    },
    i.img_unskill_1_i = function() {
        var e = new eui.Image;
        return this.img_unskill_1 = e,
        e.height = 90,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_skill_info_img_unskill_png",
        e.visible = !1,
        e.width = 222,
        e.x = 266,
        e.y = 60,
        e
    },
    i.grp_skill_show_2_i = function() {
        var e = new eui.Group;
        return this.grp_skill_show_2 = e,
        e.name = "grp_skill_2",
        e.x = 34,
        e.y = 160,
        e.elementsContent = [this._Image16_i(), this.lab_skill_name_2_i(), this.img_skillicon_2_i(), this.lab_pp_2_i(), this._Image17_i(), this.lab_power_2_i(), this._Label7_i(), this._Label8_i()],
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 90,
        e.source = "pet_skill_info_skill_item_bg_png",
        e.width = 222,
        e.x = 0,
        e.y = 0,
        e
    },
    i.lab_skill_name_2_i = function() {
        var e = new eui.Label;
        return this.lab_skill_name_2 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "技能名几个字",
        e.textAlign = "center",
        e.textColor = 15068927,
        e.width = 120,
        e.x = 52,
        e.y = 17,
        e
    },
    i.img_skillicon_2_i = function() {
        var e = new eui.Image;
        return this.img_skillicon_2 = e,
        e.height = 26,
        e.source = "",
        e.width = 23,
        e.x = 14,
        e.y = 14,
        e
    },
    i.lab_pp_2_i = function() {
        var e = new eui.Label;
        return this.lab_pp_2 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "20/20",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 155,
        e.y = 62,
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_skill_info_texture_line_png",
        e.width = 197,
        e.x = 13,
        e.y = 45,
        e
    },
    i.lab_power_2_i = function() {
        var e = new eui.Label;
        return this.lab_power_2 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 63,
        e.y = 62,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "PP:",
        e.textColor = 4173823,
        e.x = 122,
        e.y = 62,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "威力:",
        e.textColor = 4173823,
        e.x = 11,
        e.y = 60,
        e
    },
    i.img_unskill_2_i = function() {
        var e = new eui.Image;
        return this.img_unskill_2 = e,
        e.height = 90,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_skill_info_img_unskill_png",
        e.visible = !1,
        e.width = 222,
        e.x = 34,
        e.y = 160,
        e
    },
    i.grp_skill_show_3_i = function() {
        var e = new eui.Group;
        return this.grp_skill_show_3 = e,
        e.name = "grp_skill_3",
        e.x = 266,
        e.y = 160,
        e.elementsContent = [this._Image18_i(), this.lab_skill_name_3_i(), this.img_skillicon_3_i(), this.lab_pp_3_i(), this._Image19_i(), this.lab_power_3_i(), this._Label9_i(), this._Label10_i()],
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 90,
        e.source = "pet_skill_info_skill_item_bg_png",
        e.width = 222,
        e.x = 0,
        e.y = 0,
        e
    },
    i.lab_skill_name_3_i = function() {
        var e = new eui.Label;
        return this.lab_skill_name_3 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "技能名几个字",
        e.textAlign = "center",
        e.textColor = 15068927,
        e.width = 120,
        e.x = 52,
        e.y = 17,
        e
    },
    i.img_skillicon_3_i = function() {
        var e = new eui.Image;
        return this.img_skillicon_3 = e,
        e.height = 26,
        e.source = "",
        e.width = 23,
        e.x = 14,
        e.y = 14,
        e
    },
    i.lab_pp_3_i = function() {
        var e = new eui.Label;
        return this.lab_pp_3 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "20/20",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 155,
        e.y = 62,
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "pet_skill_info_texture_line_png",
        e.width = 197,
        e.x = 13,
        e.y = 45,
        e
    },
    i.lab_power_3_i = function() {
        var e = new eui.Label;
        return this.lab_power_3 = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "100",
        e.textAlign = "left",
        e.textColor = 4173823,
        e.x = 63,
        e.y = 62,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "PP:",
        e.textColor = 4173823,
        e.x = 122,
        e.y = 62,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "威力:",
        e.textColor = 4173823,
        e.x = 11,
        e.y = 60,
        e
    },
    i.img_unskill_3_i = function() {
        var e = new eui.Image;
        return this.img_unskill_3 = e,
        e.height = 90,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pet_skill_info_img_unskill_png",
        e.visible = !1,
        e.width = 222,
        e.x = 266,
        e.y = 160,
        e
    },
    i.img_btn_skillstone_i = function() {
        var e = new eui.Image;
        return this.img_btn_skillstone = e,
        e.height = 50,
        e.source = "pet_skill_info_img_btn_skillstone_png",
        e.width = 174,
        e.x = 282,
        e.y = 515,
        e
    },
    i.img_btn_skill_i = function() {
        var e = new eui.Image;
        return this.img_btn_skill = e,
        e.height = 50,
        e.source = "pet_skill_info_img_btn_skill_png",
        e.width = 174,
        e.x = 64,
        e.y = 515,
        e
    },
    i.grp_skill_i = function() {
        var e = new eui.Group;
        return this.grp_skill = e,
        e.touchEnabled = !1,
        e.visible = !1,
        e.x = 28,
        e.y = 41,
        e.elementsContent = [this.img_slect_skill_0_i(), this.img_slect_skill_1_i(), this.img_slect_skill_2_i(), this.img_slect_skill_3_i(), this.img_allow_i()],
        e
    },
    i.img_slect_skill_0_i = function() {
        var e = new eui.Image;
        return this.img_slect_skill_0 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 102,
        e.scale9Grid = new egret.Rectangle(26, 12, 160, 78),
        e.source = "pet_info_img_select_png",
        e.touchEnabled = !1,
        e.width = 234,
        e.x = 0,
        e.y = 13,
        e
    },
    i.img_slect_skill_1_i = function() {
        var e = new eui.Image;
        return this.img_slect_skill_1 = e,
        e.scale9Grid = new egret.Rectangle(26, 12, 160, 78),
        e.source = "pet_info_img_select_png",
        e.touchEnabled = !1,
        e.width = 234,
        e.x = 232,
        e.y = 13,
        e
    },
    i.img_slect_skill_2_i = function() {
        var e = new eui.Image;
        return this.img_slect_skill_2 = e,
        e.height = 102,
        e.scale9Grid = new egret.Rectangle(26, 12, 160, 78),
        e.source = "pet_info_img_select_png",
        e.touchEnabled = !1,
        e.width = 234,
        e.x = 0,
        e.y = 113,
        e
    },
    i.img_slect_skill_3_i = function() {
        var e = new eui.Image;
        return this.img_slect_skill_3 = e,
        e.height = 102,
        e.scale9Grid = new egret.Rectangle(26, 12, 160, 78),
        e.source = "pet_info_img_select_png",
        e.touchEnabled = !1,
        e.width = 234,
        e.x = 232,
        e.y = 113,
        e
    },
    i.img_allow_i = function() {
        var e = new eui.Image;
        return this.img_allow = e,
        e.source = "pet_skill_info_img_allow_png",
        e.touchEnabled = !1,
        e.x = 182,
        e.y = 0,
        e
    },
    t
} (eui.Skin);