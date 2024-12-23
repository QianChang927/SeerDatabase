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
petChangeFeatures; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = FeaturesItemSkin,
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
                return egret.superGetter(t, this, "selected")
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
    e.FeaturesBagItemRender = t,
    __reflect(t.prototype, "petChangeFeatures.FeaturesBagItemRender")
} (petChangeFeatures || (petChangeFeatures = {}));
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
petChangeFeatures; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.FeaturePreviewPopSkin,
            i
        }
        return __extends(i, t),
        i.prototype.initialized = function() {
            this._petInfo = this._data.petinfo,
            t.prototype.initialized.call(this),
            this.updateView()
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.updateView = function() {
            var e = PetManager.getPetEffect(this._petInfo),
            t = PetEffectXMLInfo.getEffect(e.effectID, e.args);
            this.lab_name.text = "当前特性：" + t;
            var i = PetEffectXMLInfo.getStarLevel(e.effectID, e.args);
            this.setStar("star_", i);
            for (var n = 1; 5 >= n; n++) {
                var _ = PetEffectXMLInfo.getIntros(t).getValue(n);
                null != _ ? this["lab_desc_" + (n - 1)].text = _: this["lab_desc_" + (n - 1)].text = "",
                this.setStar("star_" + (n - 1) + "_", n)
            }
        },
        i.prototype.setStar = function(e, t) {
            for (var i = 0; 5 > i; i++) {
                var n = this[e + i + ""];
                i + 1 > t ? n.source = "features_preview_unstar_png": n.source = "features_preview_start_png"
            }
        },
        i
    } (PopView);
    e.FeaturesPreView = t,
    __reflect(t.prototype, "petChangeFeatures.FeaturesPreView")
} (petChangeFeatures || (petChangeFeatures = {}));
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
petChangeFeatures; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i._petInfo = t,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this);
            var n = new i;
            n.once(PopView.EVENT_DESTROY,
            function() {
                t.onClose()
            },
            this);
            var _ = PopViewManager.createDefaultStyleObject();
            _.maskShapeStyle.maskAlpha = 0,
            _.caller = this,
            _.clickMaskHandler = function() {
                n.hide()
            },
            _.effStyle.showAniType = PopEffStyle.RIGHT_TO_LEFT,
            PopViewManager.getInstance().openView(n, _, this._petInfo)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            guideModule.GuideModule.GetInstance().dispatchEventWith("event_close_PetChangeFeatures")
        },
        t
    } (BaseModule);
    e.PetChangeFeatures = t,
    __reflect(t.prototype, "petChangeFeatures.PetChangeFeatures");
    var i = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.itemsIDs = [1200444, 1200445, 1200446, 1707149, 1707150],
            e.STONE_NEED_NUM = [0, 0, 0, 0, 0],
            e.EXP_NEED_NUM = [1e5, 5e5, 1e6, 16e5, 23e5],
            e._isStengthen = !0,
            e._currentNavType = 2,
            e._newSeerGuideEventList = ["event_get_PetChangeFeatures_item_rect", "event_get_PetChangeFeatures_btnClose_rect"],
            e.skinName = PetChangeFeaturesSkin,
            e
        }
        return __extends(i, t),
        i.prototype.initialized = function() {
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = e.FeaturesBagItemRender,
            this._bagItems = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._bagItems,
            this._radioButtonGroupNavBar = this.rb_qh.group,
            this._radioButtonGroupNavBar.selectedValue = this._currentNavType,
            t.prototype.initialized.call(this)
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.img_btn_back, this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_preView, this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_strengthen, this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_compose, this.onTouchTapImageButtonHandler, this);
            for (var t = 0; t < this.itemsIDs.length; t++) {
                var i = this["icon_item_" + t];
                i.name = "icon_item_" + t,
                ImageButtonUtil.add(i,
                function(t) {
                    var i = t.currentTarget.name,
                    n = ~~i.split("_")[2],
                    _ = {
                        id: e.itemsIDs[n]
                    },
                    r = {
                        srcWorldPos: e.localToGlobal(18),
                        dir: "right-top",
                        rx: 0,
                        ry: 0 / 0
                    };
                    tipsPop.TipsPop.openItemPop(_, r)
                },
                this, !1, !1)
            }
            this._radioButtonGroupNavBar.addEventListener(egret.Event.CHANGE, this.onChangeNavBarHandler, this),
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            EventManager.addEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onUseItemSuccessful, this),
            SocketConnection.addCmdListener(CommandID.PET_GET_EXP, this._updateExp, this),
            SocketConnection.addCmdListener(CommandID.EFFECT_STRENGTHEN, this.onStrengthen, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this);
            for (var t = 0; t < this._newSeerGuideEventList.length; t++) guideModule.GuideModule.GetInstance().addEventListener(this._newSeerGuideEventList[t], this._onNewSeerGuideEvent, this)
        },
        i.prototype.removeEvents = function() {
            this._radioButtonGroupNavBar.removeEventListener(egret.Event.CHANGE, this.onChangeNavBarHandler, this);
            for (var e = 0; e < this.itemsIDs.length; e++) ImageButtonUtil.remove(this["icon_item_" + e]);
            ImageButtonUtil.removeAll(this),
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            EventManager.removeEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onUseItemSuccessful, this),
            SocketConnection.removeCmdListener(CommandID.PET_GET_EXP, this._updateExp, this),
            SocketConnection.removeCmdListener(CommandID.EFFECT_STRENGTHEN, this.onStrengthen, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this);
            for (var e = 0; e < this._newSeerGuideEventList.length; e++) guideModule.GuideModule.GetInstance().removeEventListener(this._newSeerGuideEventList[e], this._onNewSeerGuideEvent, this)
        },
        i.prototype._onNewSeerGuideEvent = function(e) {
            switch (e.type) {
            case "event_get_PetChangeFeatures_item_rect":
                guideModule.DispatchCustomEventComplete(e.type, this.list_viewport.getChildAt(0));
                break;
            case "event_get_PetChangeFeatures_btnClose_rect":
                guideModule.DispatchCustomEventComplete(e.type, this.img_btn_back)
            }
        },
        i.prototype.onChangeNavBarHandler = function(e) {
            var t = ~~this._radioButtonGroupNavBar.selectedValue;
            1 !== t || this._petEffectInfo || (Alarm.show("需要为精灵开启特性后才能进行特性强化！"), this._radioButtonGroupNavBar.selectedValue = this._currentNavType + "", t = this._currentNavType),
            this._currentNavType = t,
            this.updateNavStyle()
        },
        i.prototype.setData = function(e) {
            t.prototype.setData.call(this, e),
            this._petInfo = e
        },
        i.prototype.updateNavStyle = function() {
            this.scroller_item.visible = 2 === this._currentNavType,
            this.grp_tz.visible = 1 === this._currentNavType
        },
        i.prototype._upDateView = function() {
            this.updateNavStyle(),
            this._updatePetInfo(),
            this._updateBag(),
            this._updateGem(),
            guideModule.GuideModule.GetInstance().dispatchEventWith("event_PetChangeFeatures_init_complete")
        },
        i.prototype._updatePetInfo = function() {
            this._petEffectInfo = PetManager.getPetEffect(this._petInfo);
            var e = 0,
            t = "无",
            i = "无";
            this._petEffectInfo ? (t = PetEffectXMLInfo.getEffect(this._petEffectInfo.effectID, this._petEffectInfo.args), e = PetEffectXMLInfo.getStarLevel(this._petEffectInfo.effectID, this._petEffectInfo.args), i = PetEffectXMLInfo.getEffectDes(this._petEffectInfo.effectID, this._petEffectInfo.args), DisplayUtil.setEnabled(this.img_btn_preView, !0), DisplayUtil.setEnabled(this.img_btn_strengthen, !0)) : (DisplayUtil.setEnabled(this.img_btn_preView, !1, !0), DisplayUtil.setEnabled(this.img_btn_strengthen, !1, !0)),
            this.setFeaturesStyles(t, e, i)
        },
        i.prototype.onUpdateByItemChangeEvent = function() {
            this._updateGemShowItemNum()
        },
        i.prototype._updateGemShowItemNum = function() {
            for (var e = 0; e < this.itemsIDs.length; e++) this.STONE_NEED_NUM[e] = ItemManager.getNumByID(this.itemsIDs[e]),
            this["lab_gem_count_" + e].text = this.STONE_NEED_NUM[e],
            this["icon_item_" + e].source = ClientConfig.getItemIcon(this.itemsIDs[e])
        },
        i.prototype._updateGem = function() {
            this._updateGemShowItemNum();
            var e = !0;
            if (this._petEffectInfo) {
                var t = PetEffectXMLInfo.getStarLevel(this._petEffectInfo.effectID, this._petEffectInfo.args);
                5 === t && (e = !1)
            } else e = !1;
            this.grp_needInfo.visible = e,
            e && (this.icon_currentDiamond.source = ClientConfig.getItemIcon(this.itemsIDs[t]), this.lab_need_itemNum.text = "*1", this.lab_need_itemName.text = ItemXMLInfo.getName(this.itemsIDs[t]), this.lab_need_exp.text = this.EXP_NEED_NUM[t] + ""),
            SocketConnection.send(CommandID.PET_GET_EXP)
        },
        i.prototype._updateExp = function(e) {
            var t = e.data;
            this._exp = t.readUnsignedInt(),
            this.lab_myExp.text = this._exp + ""
        },
        i.prototype.setFeaturesStyles = function(e, t, i) {
            this.lab_features_type.text = e;
            for (var n = 0; 5 > n; n++) {
                var _ = this["start_" + n];
                n + 1 > t ? _.source = "pet_change_features_unstar_png": _.source = "pet_change_features_start_png"
            }
            this.lab_eff.text = "具体效果：" + i
        },
        i.prototype._updateBag = function() {
            var e = ItemXMLInfo.getItemIdsByBagItemType(ItemType.FEATURES);
            e = e.filter(function(e) {
                return ItemManager.getNumByID(e) > 0
            },
            this),
            e = ItemManager.filterItemIds(e);
            var t = ItemManager.GetBagItemsArryCollect(e);
            this._bagItems.replaceAll(t),
            this.list_viewport.validateNow()
        },
        i.prototype.onTouchTapImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.img_btn_back:
                this.hide();
                break;
            case this.img_btn_preView:
                console.log("预览"),
                this._petEffectInfo && PopViewManager.getInstance().openView(new e.FeaturesPreView, null, {
                    petinfo: this._petInfo
                });
                break;
            case this.img_btn_strengthen:
                console.log("强化"),
                this._isStengthen = !1,
                this.onStrengthenBtnClick();
                break;
            case this.img_btn_compose:
                console.log("打开宝石合成"),
                ModuleManager.showModule("diamondSynthesis", ["diamond_synthesis"], null, null, AppDoStyle.NULL)
            }
        },
        i.prototype.onStrengthenBtnClick = function() {
            var e = this;
            if (this._petEffectInfo) {
                var t = (PetEffectXMLInfo.getEffect(this._petEffectInfo.effectID, this._petEffectInfo.args), PetEffectXMLInfo.getStarLevel(this._petEffectInfo.effectID, this._petEffectInfo.args));
                PetEffectXMLInfo.getEffectDes(this._petEffectInfo.effectID, this._petEffectInfo.args);
                5 == t ? (BubblerManager.getInstance().showText("你的精灵特性已经达到巅峰了，不能再强化了！"), this._isStengthen = !0) : (this.STONE_NEED_NUM[t] > 0 && this._exp >= this.EXP_NEED_NUM[t] ? Alert.show("确认要强化精灵" + PetXMLInfo.getName(this._petInfo.id) + "的特性吗？本次强化需要消耗1个" + ItemXMLInfo.getName(this.itemsIDs[t]) + "和" + this.EXP_NEED_NUM[t] + "经验",
                function() {
                    SocketConnection.send(CommandID.EFFECT_STRENGTHEN, e._petInfo.catchTime)
                },
                function() {
                    e._isStengthen = !0
                }) : BubblerManager.getInstance().showText("你的宝石或者经验不足哦！"), this._isStengthen = !0)
            } else BubblerManager.getInstance().showText("你的精灵没有特性，不能强化哦！"),
            this._isStengthen = !0
        },
        i.prototype.onStrengthen = function(e) {
            var t = this,
            i = 0;
            e.data && (i = e.data.readUnsignedInt());
            1 === i ? (BubblerManager.getInstance().showText("恭喜你，特性强化成功！" + PetXMLInfo.getName(this._petInfo.id) + "的特性效果提升了！"), PetManager.UpdateBagPetInfoAsynce(this._petInfo.catchTime).then(function(e) {
                t._petInfo = e,
                t._upDateView(),
                t._isStengthen = !0
            }), EventManager.dispatchEvent(new egret.Event(petDetailedInfo.PetInfoEvent.EVENT_UPDATE_PET_INFO))) : Alarm.show("很遗憾，强化失败了，请继续努力。",
            function() {
                t._upDateView(),
                t._isStengthen = !0
            })
        },
        i.prototype.onTouchTapItem = function(e) {
            if (e.item) {
                guideModule.GuideModule.GetInstance().dispatchEventWith("event_use_item_touchTap");
                var t = new egret.Event("click_item", !1, !0, e.item);
                if (!EventManager.dispatchEvent(t)) return;
                var i = {
                    id: e.item,
                    useItemFun: this.useItem,
                    caller: this
                },
                n = {
                    srcWorldPos: this.localToGlobal(18),
                    dir: "right-top",
                    rx: 0,
                    ry: 0 / 0
                };
                tipsPop.TipsPop.openItemPop(i, n)
            }
        },
        i.prototype.useItem = function(e) {
            ItemUseManager.getInstance().useItem(this._petInfo, e)
        },
        i.prototype.onUseItemSuccessful = function(e) {
            var t = this;
            PetManager.UpdateBagPetInfoAsynce(this._petInfo.catchTime).then(function(e) {
                t._petInfo = e,
                t._upDateView()
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.FeaturesPopView = i,
    __reflect(i.prototype, "petChangeFeatures.FeaturesPopView")
} (petChangeFeatures || (petChangeFeatures = {})),
window.petChangeFeatures = window.petChangeFeatures || {};
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
generateEUI.paths["resource/eui_skins/FeaturePreviewPopSkin.exml"] = window.petChangeFeatures.FeaturePreviewPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title_txyl", "btnClose", "M", "lab_desc_0", "lab_desc_1", "lab_desc_2", "lab_desc_3", "lab_desc_4", "titlebg", "lab_name", "star_0", "star_1", "star_2", "star_3", "star_4", "star_0_0", "star_0_1", "star_0_2", "star_0_3", "star_0_4", "grp_star_0", "star_1_0", "star_1_1", "star_1_2", "star_1_3", "star_1_4", "grp_star_1", "star_2_0", "star_2_1", "star_2_2", "star_2_3", "star_2_4", "grp_star_2", "star_3_0", "star_3_1", "star_3_2", "star_3_3", "star_3_4", "grp_star_3", "star_4_0", "star_4_1", "star_4_2", "star_4_3", "star_4_4", "grp_star_4"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this.M_i(), this._Image3_i(), this.lab_desc_0_i(), this._Image4_i(), this.lab_desc_1_i(), this._Image5_i(), this.lab_desc_2_i(), this._Image6_i(), this.lab_desc_3_i(), this._Image7_i(), this.lab_desc_4_i(), this._Group3_i(), this.grp_star_0_i(), this.grp_star_1_i(), this.grp_star_2_i(), this.grp_star_3_i(), this.grp_star_4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.M_i = function() {
        var e = new eui.Group;
        return this.M = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_txyl_i(), this.btnClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 333,
        e.source = "common_pop_point_png",
        e.width = 608,
        e.x = 0,
        e.y = 41,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_pop_title_samll_png",
        e.width = 600,
        e.x = 4,
        e.y = 22,
        e
    },
    i.title_txyl_i = function() {
        var e = new eui.Image;
        return this.title_txyl = e,
        e.height = 26,
        e.source = "features_preview_title_txyl_png",
        e.width = 113,
        e.x = 37,
        e.y = 28,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 56,
        e.source = "common_close_1_png",
        e.width = 54,
        e.x = 566,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 27,
        e.source = "features_preview_starbg_png",
        e.width = 194,
        e.x = 83,
        e.y = 131,
        e
    },
    i.lab_desc_0_i = function() {
        var e = new eui.Label;
        return this.lab_desc_0 = e,
        e.size = 18,
        e.text = "进攻类技能有3.5%几率秒杀对方",
        e.textColor = 3492213,
        e.x = 252,
        e.y = 136,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 27,
        e.source = "features_preview_starbg_png",
        e.width = 194,
        e.x = 83,
        e.y = 171,
        e
    },
    i.lab_desc_1_i = function() {
        var e = new eui.Label;
        return this.lab_desc_1 = e,
        e.size = 18,
        e.text = "进攻类技能有4.0%几率秒杀对方",
        e.textColor = 3492213,
        e.x = 252,
        e.y = 176,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 27,
        e.source = "features_preview_starbg_png",
        e.width = 194,
        e.x = 83,
        e.y = 212,
        e
    },
    i.lab_desc_2_i = function() {
        var e = new eui.Label;
        return this.lab_desc_2 = e,
        e.size = 18,
        e.text = "进攻类技能有5.0%几率秒杀对方",
        e.textColor = 3492213,
        e.x = 252,
        e.y = 217,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 27,
        e.source = "features_preview_starbg_png",
        e.width = 194,
        e.x = 83,
        e.y = 253,
        e
    },
    i.lab_desc_3_i = function() {
        var e = new eui.Label;
        return this.lab_desc_3 = e,
        e.size = 18,
        e.text = "进攻类技能有6.0%几率秒杀对方",
        e.textColor = 3492213,
        e.x = 252,
        e.y = 258,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 27,
        e.source = "features_preview_starbg_png",
        e.width = 194,
        e.x = 83,
        e.y = 294,
        e
    },
    i.lab_desc_4_i = function() {
        var e = new eui.Label;
        return this.lab_desc_4 = e,
        e.size = 18,
        e.text = "进攻类技能有7.0%几率秒杀对方",
        e.textColor = 3492213,
        e.x = 252,
        e.y = 299,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 34,
        e.y = 78,
        e.elementsContent = [this._Group2_i()],
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 0,
        e.elementsContent = [this.titlebg_i(), this.lab_name_i(), this._Group1_i()],
        e
    },
    i.titlebg_i = function() {
        var e = new eui.Image;
        return this.titlebg = e,
        e.height = 33,
        e.source = "features_preview_titlebg_png",
        e.width = 541,
        e.x = 0,
        e.y = 0,
        e
    },
    i.lab_name_i = function() {
        var e = new eui.Label;
        return this.lab_name = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "当前特性：瞬杀",
        e.textColor = 3492213,
        e.x = 138,
        e.y = 7,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 290,
        e.y = 4,
        e.elementsContent = [this.star_0_i(), this.star_1_i(), this.star_2_i(), this.star_3_i(), this.star_4_i()],
        e
    },
    i.star_0_i = function() {
        var e = new eui.Image;
        return this.star_0 = e,
        e.source = "features_preview_start_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.star_1_i = function() {
        var e = new eui.Image;
        return this.star_1 = e,
        e.source = "features_preview_start_png",
        e.x = 25,
        e.y = 0,
        e
    },
    i.star_2_i = function() {
        var e = new eui.Image;
        return this.star_2 = e,
        e.source = "features_preview_start_png",
        e.x = 51,
        e.y = 0,
        e
    },
    i.star_3_i = function() {
        var e = new eui.Image;
        return this.star_3 = e,
        e.source = "features_preview_start_png",
        e.x = 77,
        e.y = 0,
        e
    },
    i.star_4_i = function() {
        var e = new eui.Image;
        return this.star_4 = e,
        e.source = "features_preview_start_png",
        e.x = 103,
        e.y = 0,
        e
    },
    i.grp_star_0_i = function() {
        var e = new eui.Group;
        return this.grp_star_0 = e,
        e.x = 104,
        e.y = 132,
        e.elementsContent = [this.star_0_0_i(), this.star_0_1_i(), this.star_0_2_i(), this.star_0_3_i(), this.star_0_4_i()],
        e
    },
    i.star_0_0_i = function() {
        var e = new eui.Image;
        return this.star_0_0 = e,
        e.source = "features_preview_start_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.star_0_1_i = function() {
        var e = new eui.Image;
        return this.star_0_1 = e,
        e.source = "features_preview_unstar_png",
        e.x = 25,
        e.y = 0,
        e
    },
    i.star_0_2_i = function() {
        var e = new eui.Image;
        return this.star_0_2 = e,
        e.source = "features_preview_start_png",
        e.x = 51,
        e.y = 0,
        e
    },
    i.star_0_3_i = function() {
        var e = new eui.Image;
        return this.star_0_3 = e,
        e.source = "features_preview_start_png",
        e.x = 77,
        e.y = 0,
        e
    },
    i.star_0_4_i = function() {
        var e = new eui.Image;
        return this.star_0_4 = e,
        e.source = "features_preview_start_png",
        e.x = 103,
        e.y = 0,
        e
    },
    i.grp_star_1_i = function() {
        var e = new eui.Group;
        return this.grp_star_1 = e,
        e.x = 104,
        e.y = 172,
        e.elementsContent = [this.star_1_0_i(), this.star_1_1_i(), this.star_1_2_i(), this.star_1_3_i(), this.star_1_4_i()],
        e
    },
    i.star_1_0_i = function() {
        var e = new eui.Image;
        return this.star_1_0 = e,
        e.source = "features_preview_start_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.star_1_1_i = function() {
        var e = new eui.Image;
        return this.star_1_1 = e,
        e.source = "features_preview_start_png",
        e.x = 25,
        e.y = 0,
        e
    },
    i.star_1_2_i = function() {
        var e = new eui.Image;
        return this.star_1_2 = e,
        e.source = "features_preview_start_png",
        e.x = 51,
        e.y = 0,
        e
    },
    i.star_1_3_i = function() {
        var e = new eui.Image;
        return this.star_1_3 = e,
        e.source = "features_preview_start_png",
        e.x = 77,
        e.y = 0,
        e
    },
    i.star_1_4_i = function() {
        var e = new eui.Image;
        return this.star_1_4 = e,
        e.source = "features_preview_start_png",
        e.x = 103,
        e.y = 0,
        e
    },
    i.grp_star_2_i = function() {
        var e = new eui.Group;
        return this.grp_star_2 = e,
        e.x = 104,
        e.y = 213,
        e.elementsContent = [this.star_2_0_i(), this.star_2_1_i(), this.star_2_2_i(), this.star_2_3_i(), this.star_2_4_i()],
        e
    },
    i.star_2_0_i = function() {
        var e = new eui.Image;
        return this.star_2_0 = e,
        e.source = "features_preview_start_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.star_2_1_i = function() {
        var e = new eui.Image;
        return this.star_2_1 = e,
        e.source = "features_preview_start_png",
        e.x = 25,
        e.y = 0,
        e
    },
    i.star_2_2_i = function() {
        var e = new eui.Image;
        return this.star_2_2 = e,
        e.source = "features_preview_start_png",
        e.x = 51,
        e.y = 0,
        e
    },
    i.star_2_3_i = function() {
        var e = new eui.Image;
        return this.star_2_3 = e,
        e.source = "features_preview_start_png",
        e.x = 77,
        e.y = 0,
        e
    },
    i.star_2_4_i = function() {
        var e = new eui.Image;
        return this.star_2_4 = e,
        e.source = "features_preview_start_png",
        e.x = 103,
        e.y = 0,
        e
    },
    i.grp_star_3_i = function() {
        var e = new eui.Group;
        return this.grp_star_3 = e,
        e.x = 104,
        e.y = 254,
        e.elementsContent = [this.star_3_0_i(), this.star_3_1_i(), this.star_3_2_i(), this.star_3_3_i(), this.star_3_4_i()],
        e
    },
    i.star_3_0_i = function() {
        var e = new eui.Image;
        return this.star_3_0 = e,
        e.source = "features_preview_start_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.star_3_1_i = function() {
        var e = new eui.Image;
        return this.star_3_1 = e,
        e.source = "features_preview_start_png",
        e.x = 25,
        e.y = 0,
        e
    },
    i.star_3_2_i = function() {
        var e = new eui.Image;
        return this.star_3_2 = e,
        e.source = "features_preview_start_png",
        e.x = 51,
        e.y = 0,
        e
    },
    i.star_3_3_i = function() {
        var e = new eui.Image;
        return this.star_3_3 = e,
        e.source = "features_preview_start_png",
        e.x = 77,
        e.y = 0,
        e
    },
    i.star_3_4_i = function() {
        var e = new eui.Image;
        return this.star_3_4 = e,
        e.source = "features_preview_start_png",
        e.x = 103,
        e.y = 0,
        e
    },
    i.grp_star_4_i = function() {
        var e = new eui.Group;
        return this.grp_star_4 = e,
        e.x = 104,
        e.y = 295,
        e.elementsContent = [this.star_4_0_i(), this.star_4_1_i(), this.star_4_2_i(), this.star_4_3_i(), this.star_4_4_i()],
        e
    },
    i.star_4_0_i = function() {
        var e = new eui.Image;
        return this.star_4_0 = e,
        e.source = "features_preview_start_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.star_4_1_i = function() {
        var e = new eui.Image;
        return this.star_4_1 = e,
        e.source = "features_preview_start_png",
        e.x = 25,
        e.y = 0,
        e
    },
    i.star_4_2_i = function() {
        var e = new eui.Image;
        return this.star_4_2 = e,
        e.source = "features_preview_start_png",
        e.x = 51,
        e.y = 0,
        e
    },
    i.star_4_3_i = function() {
        var e = new eui.Image;
        return this.star_4_3 = e,
        e.source = "features_preview_start_png",
        e.x = 77,
        e.y = 0,
        e
    },
    i.star_4_4_i = function() {
        var e = new eui.Image;
        return this.star_4_4 = e,
        e.source = "features_preview_start_png",
        e.x = 103,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FeaturesItemSkin.exml"] = window.FeaturesItemSkin = function(e) {
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
        e.height = 55,
        e.width = 55,
        e.x = 12,
        e.y = 12,
        e
    },
    i.img_select_i = function() {
        var e = new eui.Image;
        return this.img_select = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
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
        e.width = 80,
        e.x = 0,
        e.y = 59.5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetChangeFeaturesSkin.exml"] = window.PetChangeFeaturesSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["rb_tz", "rb_qh", "img_btn_back", "lab_eff", "start_0", "start_1", "start_2", "start_3", "start_4", "lab_features_type", "img_btn_strengthen", "img_btn_compose", "img_btn_preView", "icon_item_0", "icon_item_1", "icon_item_2", "icon_item_3", "icon_item_4", "icon_currentDiamond", "icon_exp", "lab_need_itemName", "lab_need_itemNum", "lab_need_exp", "grp_needInfo", "lab_gem_count_0", "lab_gem_count_1", "lab_gem_count_2", "lab_gem_count_3", "lab_gem_count_4", "lab_myExp", "grp_tz", "list_viewport", "scroller_item"],
        this.height = 640,
        this.width = 536,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.rb_tz_i(), this.rb_qh_i(), this.img_btn_back_i(), this._Group2_i(), this.grp_tz_i(), this.scroller_item_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_change_features_strengthen_down_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_change_features_strengthen_up_up_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pet_change_features_change_down_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "pet_change_features_change_up_up_png",
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
    return _._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "pet_change_features_BG_png",
        e.width = 531,
        e.x = 5,
        e.y = 0,
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 440,
        e.source = "common_texture_001_png",
        e.width = 500,
        e.x = 26,
        e.y = 174,
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.source = "common_texture_002_png",
        e.width = 484,
        e.x = 34,
        e.y = 50,
        e
    },
    _.rb_tz_i = function() {
        var e = new eui.RadioButton;
        return this.rb_tz = e,
        e.groupName = "navbar",
        e.label = "",
        e.value = "1",
        e.x = 165,
        e.y = 131,
        e.skinName = i,
        e
    },
    _.rb_qh_i = function() {
        var e = new eui.RadioButton;
        return this.rb_qh = e,
        e.groupName = "navbar",
        e.label = "",
        e.value = "2",
        e.x = 33,
        e.y = 131,
        e.skinName = n,
        e
    },
    _.img_btn_back_i = function() {
        var e = new eui.Image;
        return this.img_btn_back = e,
        e.height = 101,
        e.source = "pet_change_features_img_btn_back_png",
        e.width = 18,
        e.x = 0,
        e.y = 272,
        e
    },
    _._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 115,
        e.y = 61,
        e.elementsContent = [this.lab_eff_i(), this._Group1_i(), this._Label2_i()],
        e
    },
    _.lab_eff_i = function() {
        var e = new eui.Label;
        return this.lab_eff = e,
        e.size = 16,
        e.text = "具体效果：进攻类技能有3%几率秒杀对方",
        e.textAlign = "center",
        e.textColor = 4239359,
        e.width = 478,
        e.x = -76,
        e.y = 36,
        e
    },
    _._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 1,
        e.y = 0,
        e.elementsContent = [this.start_0_i(), this.start_1_i(), this.start_2_i(), this.start_3_i(), this.start_4_i(), this._Label1_i(), this.lab_features_type_i()],
        e
    },
    _.start_0_i = function() {
        var e = new eui.Image;
        return this.start_0 = e,
        e.source = "features_preview_start_png",
        e.x = 174,
        e.y = -2,
        e
    },
    _.start_1_i = function() {
        var e = new eui.Image;
        return this.start_1 = e,
        e.source = "features_preview_start_png",
        e.x = 204,
        e.y = -2,
        e
    },
    _.start_2_i = function() {
        var e = new eui.Image;
        return this.start_2 = e,
        e.source = "features_preview_start_png",
        e.x = 234,
        e.y = -2,
        e
    },
    _.start_3_i = function() {
        var e = new eui.Image;
        return this.start_3 = e,
        e.source = "features_preview_start_png",
        e.x = 264,
        e.y = -2,
        e
    },
    _.start_4_i = function() {
        var e = new eui.Image;
        return this.start_4 = e,
        e.source = "features_preview_start_png",
        e.x = 294,
        e.y = -2,
        e
    },
    _._Label1_i = function() {
        var e = new eui.Label;
        return e.size = 22,
        e.text = "当前特性：",
        e.textColor = 16777215,
        e.x = 0,
        e.y = 0,
        e
    },
    _.lab_features_type_i = function() {
        var e = new eui.Label;
        return this.lab_features_type = e,
        e.size = 22,
        e.text = "瞬杀",
        e.textColor = 16777215,
        e.x = 122,
        e.y = 0,
        e
    },
    _._Label2_i = function() {
        var e = new eui.Label;
        return e.size = 18,
        e.text = "具体效果：",
        e.textColor = 4288445,
        e.visible = !1,
        e.x = 0,
        e.y = 27,
        e
    },
    _.grp_tz_i = function() {
        var e = new eui.Group;
        return this.grp_tz = e,
        e.touchEnabled = !1,
        e.x = 42,
        e.y = 194,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this.img_btn_strengthen_i(), this.img_btn_compose_i(), this.img_btn_preView_i(), this.icon_item_0_i(), this.icon_item_1_i(), this.icon_item_2_i(), this.icon_item_3_i(), this.icon_item_4_i(), this.grp_needInfo_i(), this.lab_gem_count_0_i(), this.lab_gem_count_1_i(), this.lab_gem_count_2_i(), this.lab_gem_count_3_i(), this.lab_gem_count_4_i(), this.lab_myExp_i()],
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pet_change_features_texture_4_png",
        e.width = 468,
        e.x = 0,
        e.y = 28,
        e
    },
    _._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_change_features_texture_3_png",
        e.width = 456,
        e.x = 6,
        e.y = 0,
        e
    },
    _._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_change_features_texture_2_png",
        e.width = 8,
        e.x = 13,
        e.y = 6,
        e
    },
    _._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 62,
        e.source = "pet_change_features_texture_4_png",
        e.width = 468,
        e.x = 0,
        e.y = 160,
        e
    },
    _._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 19,
        e.source = "pet_change_features_title_3_png",
        e.width = 124,
        e.x = 32,
        e.y = 8,
        e
    },
    _._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_change_features_texture_3_png",
        e.width = 456,
        e.x = 6,
        e.y = 132,
        e
    },
    _._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_change_features_texture_2_png",
        e.width = 8,
        e.x = 13,
        e.y = 138,
        e
    },
    _._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 19,
        e.source = "pet_change_features_title_2_png",
        e.width = 124,
        e.x = 32,
        e.y = 140,
        e
    },
    _._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "pet_change_features_texture_3_png",
        e.width = 456,
        e.x = 6,
        e.y = 226,
        e
    },
    _._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "pet_change_features_texture_2_png",
        e.width = 8,
        e.x = 13,
        e.y = 232,
        e
    },
    _._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 19,
        e.source = "pet_change_features_title_1_png",
        e.width = 124,
        e.x = 32,
        e.y = 234,
        e
    },
    _._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 60, 60),
        e.source = "common_icon_bg_style_1_png",
        e.width = 60,
        e.x = 14,
        e.y = 270,
        e
    },
    _._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 60, 60),
        e.source = "common_icon_bg_style_1_png",
        e.width = 60,
        e.x = 192,
        e.y = 270,
        e
    },
    _._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 60, 60),
        e.source = "common_icon_bg_style_1_png",
        e.width = 60,
        e.x = 14,
        e.y = 46,
        e
    },
    _._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 60, 60),
        e.source = "common_icon_bg_style_1_png",
        e.width = 60,
        e.x = 84,
        e.y = 46,
        e
    },
    _._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 60, 60),
        e.source = "common_icon_bg_style_1_png",
        e.width = 60,
        e.x = 154,
        e.y = 46,
        e
    },
    _._Image20_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 60, 60),
        e.source = "common_icon_bg_style_1_png",
        e.width = 60,
        e.x = 224,
        e.y = 46,
        e
    },
    _._Image21_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.scale9Grid = new egret.Rectangle(10, 10, 60, 60),
        e.source = "common_icon_bg_style_1_png",
        e.width = 60,
        e.x = 294,
        e.y = 46,
        e
    },
    _.img_btn_strengthen_i = function() {
        var e = new eui.Image;
        return this.img_btn_strengthen = e,
        e.height = 52,
        e.source = "pet_change_features_img_btn_strengthen_png",
        e.width = 176,
        e.x = 146,
        e.y = 346,
        e
    },
    _.img_btn_compose_i = function() {
        var e = new eui.Image;
        return this.img_btn_compose = e,
        e.height = 42,
        e.source = "pet_change_features_img_btn_compose_png",
        e.width = 93,
        e.x = 362,
        e.y = 56,
        e
    },
    _.img_btn_preView_i = function() {
        var e = new eui.Image;
        return this.img_btn_preView = e,
        e.height = 42,
        e.source = "pet_change_features_img_btn_preView_png",
        e.width = 93,
        e.x = 362,
        e.y = 284,
        e
    },
    _.icon_item_0_i = function() {
        var e = new eui.Image;
        return this.icon_item_0 = e,
        e.height = 50,
        e.width = 50,
        e.x = 19,
        e.y = 51,
        e
    },
    _.icon_item_1_i = function() {
        var e = new eui.Image;
        return this.icon_item_1 = e,
        e.height = 50,
        e.width = 50,
        e.x = 89,
        e.y = 51,
        e
    },
    _.icon_item_2_i = function() {
        var e = new eui.Image;
        return this.icon_item_2 = e,
        e.height = 50,
        e.width = 50,
        e.x = 159,
        e.y = 51,
        e
    },
    _.icon_item_3_i = function() {
        var e = new eui.Image;
        return this.icon_item_3 = e,
        e.height = 50,
        e.width = 50,
        e.x = 229,
        e.y = 51,
        e
    },
    _.icon_item_4_i = function() {
        var e = new eui.Image;
        return this.icon_item_4 = e,
        e.height = 50,
        e.width = 50,
        e.x = 299,
        e.y = 51,
        e
    },
    _.grp_needInfo_i = function() {
        var e = new eui.Group;
        return this.grp_needInfo = e,
        e.x = 19,
        e.y = 274,
        e.elementsContent = [this.icon_currentDiamond_i(), this.icon_exp_i(), this.lab_need_itemName_i(), this.lab_need_itemNum_i(), this._Label3_i(), this.lab_need_exp_i()],
        e
    },
    _.icon_currentDiamond_i = function() {
        var e = new eui.Image;
        return this.icon_currentDiamond = e,
        e.height = 50,
        e.width = 50,
        e.x = 0,
        e.y = 0,
        e
    },
    _.icon_exp_i = function() {
        var e = new eui.Image;
        return this.icon_exp = e,
        e.height = 50,
        e.source = "pet_change_features_exp_icon_png",
        e.width = 50,
        e.x = 178,
        e.y = 1,
        e
    },
    _.lab_need_itemName_i = function() {
        var e = new eui.Label;
        return this.lab_need_itemName = e,
        e.size = 16,
        e.text = "初级梦幻宝石",
        e.textColor = 16777215,
        e.x = 60,
        e.y = 6,
        e
    },
    _.lab_need_itemNum_i = function() {
        var e = new eui.Label;
        return this.lab_need_itemNum = e,
        e.size = 16,
        e.text = "x1",
        e.textColor = 16777215,
        e.x = 61,
        e.y = 30,
        e
    },
    _._Label3_i = function() {
        var e = new eui.Label;
        return e.size = 16,
        e.text = "经验值",
        e.textColor = 16777215,
        e.x = 238,
        e.y = 8,
        e
    },
    _.lab_need_exp_i = function() {
        var e = new eui.Label;
        return this.lab_need_exp = e,
        e.size = 16,
        e.text = "x100000000",
        e.textColor = 16777215,
        e.width = 100,
        e.x = 238,
        e.y = 30,
        e
    },
    _.lab_gem_count_0_i = function() {
        var e = new eui.Label;
        return this.lab_gem_count_0 = e,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.width = 40,
        e.x = 27,
        e.y = 83,
        e
    },
    _.lab_gem_count_1_i = function() {
        var e = new eui.Label;
        return this.lab_gem_count_1 = e,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.width = 40,
        e.x = 96,
        e.y = 83,
        e
    },
    _.lab_gem_count_2_i = function() {
        var e = new eui.Label;
        return this.lab_gem_count_2 = e,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.width = 40,
        e.x = 166,
        e.y = 83,
        e
    },
    _.lab_gem_count_3_i = function() {
        var e = new eui.Label;
        return this.lab_gem_count_3 = e,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.width = 40,
        e.x = 236,
        e.y = 83,
        e
    },
    _.lab_gem_count_4_i = function() {
        var e = new eui.Label;
        return this.lab_gem_count_4 = e,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.width = 40,
        e.x = 305,
        e.y = 83,
        e
    },
    _.lab_myExp_i = function() {
        var e = new eui.Label;
        return this.lab_myExp = e,
        e.size = 22,
        e.text = "20000000",
        e.textAlign = "center",
        e.textColor = 13756916,
        e.width = 150,
        e.x = 142,
        e.y = 182,
        e
    },
    _.scroller_item_i = function() {
        var e = new eui.Scroller;
        return this.scroller_item = e,
        e.height = 410,
        e.visible = !1,
        e.width = 484,
        e.x = 34,
        e.y = 180,
        e.viewport = this._Group3_i(),
        e
    },
    _._Group3_i = function() {
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
        e.paddingBottom = 14,
        e.paddingLeft = 14,
        e.paddingRight = 14,
        e.paddingTop = 14,
        e.requestedColumnCount = 5,
        e.verticalGap = 14,
        e
    },
    t
} (eui.Skin);