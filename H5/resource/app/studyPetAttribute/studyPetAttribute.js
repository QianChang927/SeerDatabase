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
studyPetAttribute; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i._petInfo = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this);
            var n = new i;
            n.once(PopView.EVENT_DESTROY,
            function() {
                e.onClose()
            },
            this);
            var s = PopViewManager.createDefaultStyleObject();
            s.caller = this,
            s.clickMaskHandler = function() {
                n.hide()
            },
            s.maskShapeStyle.maskAlpha = 0,
            s.effStyle.showAniType = PopEffStyle.RIGHT_TO_LEFT,
            PopViewManager.getInstance().openView(n, s, this._petInfo)
        },
        e.prototype.destroy = function() {
            this._petInfo = null,
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.StudyPetAttribute = e,
    __reflect(e.prototype, "studyPetAttribute.StudyPetAttribute");
    var i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._newSeerGuideEventList = ["event_get_rb_item_rect", "event_get_item_rect", "event_get_btnClose_rect"],
            t.skinName = StudyPetAttributeSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = t.StudyPetAttrItembagRender,
            this._bagItemListArryCol = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._bagItemListArryCol,
            this.rb_study.group.selectedValue = 1,
            this.rb_study.selected = !0,
            this.tab = 0,
            e.prototype.childrenCreated.call(this),
            this.img_btnAssign.name = "btnOK"
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._petInfo = t
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.img_btn_close, this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btnAssign, this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btnReset, this.onTouchTapImageButtonHandler, this);
            for (var t = 0; 6 > t; t++) this["btnMax" + t].name = "btnMax" + t,
            ImageButtonUtil.add(this["btnMax" + t], this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this["btnMin" + t], this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this["btnPlus" + t], this.onTouchTapImageButtonHandler, this),
            this["inputTxt" + t].addEventListener(egret.Event.CHANGE, this.txtChangeHandle, this);
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            EventManager.addEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onUseItemSuccessful, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItems, this),
            this.rb_study.group.addEventListener(egret.Event.CHANGE, this.changeHandle, this);
            for (var t = 0; t < this._newSeerGuideEventList.length; t++);
        },
        i.prototype.removeEvents = function() {
            for (var t = 0; 6 > t; t++) this["inputTxt" + t].removeEventListener(egret.Event.CHANGE, this.txtChangeHandle, this);
            ImageButtonUtil.removeAll(this),
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapItem, this),
            EventManager.removeEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL, this.onUseItemSuccessful, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItems, this),
            this.rb_study.group.removeEventListener(egret.Event.CHANGE, this.changeHandle, this);
            for (var t = 0; t < this._newSeerGuideEventList.length; t++);
        },
        i.prototype.txtChangeHandle = function(t) {
            var e = t.currentTarget,
            i = t.currentTarget.name,
            n = ~~i.split("_")[1],
            s = [this._petInfo.ev_hp, this._petInfo.ev_attack, this._petInfo.ev_defence, this._petInfo.ev_sa, this._petInfo.ev_sd, this._petInfo.ev_sp];
            this.checkInput(n, ~~e.text + s[n])
        },
        i.prototype.checkInput = function(t, e) {
            var i = [this._petInfo.ev_hp, this._petInfo.ev_attack, this._petInfo.ev_defence, this._petInfo.ev_sa, this._petInfo.ev_sd, this._petInfo.ev_sp],
            n = [this.num0, this.num1, this.num2, this.num3, this.num4, this.num5];
            e > 255 && (e = 255),
            e < i[t] && (e = i[t]);
            var s = n.concat();
            s.splice(t, 1);
            var r = i.concat();
            r.splice(t, 1);
            for (var a = 0,
            u = 0,
            _ = 0; _ < s.length; _++) a += s[_],
            u += s[_] - r[_];
            e + a > 510 && (e = 510 - a);
            var o = this.canAssignNum - u;
            e - i[t] > o && (e = i[t] + o),
            this["num" + t] = e;
            var h = this._petInfo.ev_hp + this._petInfo.ev_attack + this._petInfo.ev_defence + this._petInfo.ev_sa + this._petInfo.ev_sd + this._petInfo.ev_sp,
            l = this.num0 + this.num1 + this.num2 + this.num3 + this.num4 + this.num5;
            this.usedAssignNum = l - h,
            this.itemnum.text = this.canAssignNum - this.usedAssignNum + "",
            DisplayUtil.setEnabled(this.img_btnAssign, l > h, h >= l),
            DisplayUtil.setEnabled(this.img_btnReset, l > h, h >= l)
        },
        i.prototype.changeHandle = function(t) {
            this.tab = this.rb_study.group.selectedValue - 1
        },
        Object.defineProperty(i.prototype, "tab", {
            get: function() {
                return this._tab
            },
            set: function(t) {
                this._tab = t,
                this.studyAssign.visible = 0 == this.tab,
                this.scroller_item.visible = 1 == this.tab,
                1 === this.tab
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.onUseItemSuccessful = function(t) {
            var e = this;
            PetManager.UpdateBagPetInfoAsynce(this._petInfo.catchTime).then(function(t) {
                e._petInfo = t,
                e._updateStudyInfo()
            })
        },
        i.prototype._onNewSeerGuideEvent = function(t) {
            switch (t.type) {
            case "event_get_rb_item_rect":
                guideModule.DispatchCustomEventComplete(t.type, this.rb_item);
                break;
            case "event_get_item_rect":
                guideModule.DispatchCustomEventComplete(t.type, this.list_viewport.getChildAt(0));
                break;
            case "event_get_btnClose_rect":
                guideModule.DispatchCustomEventComplete(t.type, this.img_btn_close)
            }
        },
        i.prototype.updateItems = function(t) {
            var e = t.data;
            this._updateBagItem(),
            e.indexOf(9) > -1 && this._updateStudyInfo()
        },
        i.prototype._upDateView = function() {
            this._updateStudyInfo(),
            this._updateBagItem()
        },
        i.prototype._updateBagItem = function() {
            var t = ItemXMLInfo.getItemIdsByBagItemType(ItemType.STUDY);
            t = t.filter(function(t) {
                return ItemManager.getNumByID(t) > 0
            },
            this),
            t = ItemManager.filterItemIds(t);
            var e = ItemManager.GetBagItemsArryCollect(t);
            this._bagItemListArryCol.replaceAll(e),
            this.list_viewport.validateNow()
        },
        i.prototype._updateStudyInfo = function() {
            var t = this._petInfo;
            this.canAssignNum = ItemManager.getNumByID(9),
            this.usedAssignNum = 0,
            this.itemnum && (this.itemnum.text = this.canAssignNum.toString());
            this.lab_atk.text = t.attack + "",
            this.lab_atk_study.text = t.ev_attack + "",
            this.lab_def.text = t.defence + "",
            this.lab_def_study.text = t.ev_defence + "",
            this.lab_satk.text = t.s_a + "",
            this.lab_satk_study.text = t.ev_sa + "",
            this.lab_sdef.text = t.s_d + "",
            this.lab_sdef_study.text = t.ev_sd + "",
            this.lab_speed.text = t.speed + "",
            this.lab_speed_study.text = t.ev_sp + "",
            this.lab_hp.text = t.maxHp + "",
            this.lab_hp_study.text = t.ev_hp + "",
            this.num0 = t.ev_hp,
            this.num1 = t.ev_attack,
            this.num2 = t.ev_defence,
            this.num3 = t.ev_sa,
            this.num4 = t.ev_sd,
            this.num5 = t.ev_sp,
            DisplayUtil.setEnabled(this.img_btnAssign, !1, !0),
            DisplayUtil.setEnabled(this.img_btnReset, !1, !0),
            this.lab_total_study.text = t.ev_attack + t.ev_defence + t.ev_sa + t.ev_sd + t.ev_sp + t.ev_hp + "/510"
        },
        i.prototype.onTouchTapImageButtonHandler = function(t) {
            var e = this; [this._petInfo.ev_hp, this._petInfo.ev_attack, this._petInfo.ev_defence, this._petInfo.ev_sa, this._petInfo.ev_sd, this._petInfo.ev_sp];
            switch (t.currentTarget) {
            case this.img_btn_close:
                this.hide();
                break;
            case this.img_btnReset:
                this.num0 = this._petInfo.ev_hp,
                this.num1 = this._petInfo.ev_attack,
                this.num2 = this._petInfo.ev_defence,
                this.num3 = this._petInfo.ev_sa,
                this.num4 = this._petInfo.ev_sd,
                this.num5 = this._petInfo.ev_sp,
                this.usedAssignNum = 0,
                this.itemnum.text = this.canAssignNum - this.usedAssignNum + "",
                DisplayUtil.setEnabled(this.img_btnAssign, !1, !0),
                DisplayUtil.setEnabled(this.img_btnReset, !1, !0);
                break;
            case this.btnMin0:
                this.checkInput(0, this.num0 - 1);
                break;
            case this.btnMax0:
                this.checkInput(0, 255);
                break;
            case this.btnPlus0:
                this.checkInput(0, this.num0 + 1);
                break;
            case this.btnMin1:
                this.checkInput(1, this.num1 - 1);
                break;
            case this.btnMax1:
                this.checkInput(1, 255);
                break;
            case this.btnPlus1:
                this.checkInput(1, this.num1 + 1);
                break;
            case this.btnMin2:
                this.checkInput(2, this.num2 - 1);
                break;
            case this.btnMax2:
                this.checkInput(2, 255);
                break;
            case this.btnPlus2:
                this.checkInput(2, this.num2 + 1);
                break;
            case this.btnMin3:
                this.checkInput(3, this.num3 - 1);
                break;
            case this.btnMax3:
                this.checkInput(3, 255);
                break;
            case this.btnPlus3:
                this.checkInput(3, this.num3 + 1);
                break;
            case this.btnMin4:
                this.checkInput(4, this.num4 - 1);
                break;
            case this.btnMax4:
                this.checkInput(4, 255);
                break;
            case this.btnPlus4:
                this.checkInput(4, this.num4 + 1);
                break;
            case this.btnMin5:
                this.checkInput(5, this.num5 - 1);
                break;
            case this.btnMax5:
                this.checkInput(5, 255);
                break;
            case this.btnPlus5:
                this.checkInput(5, this.num5 + 1);
                break;
            case this.img_btnAssign:
                Alert.show("是否确认分配学习力",
                function() {
                    for (var t = new egret.ByteArray,
                    i = [e._petInfo.ev_hp, e._petInfo.ev_attack, e._petInfo.ev_defence, e._petInfo.ev_sa, e._petInfo.ev_sd, e._petInfo.ev_sp], n = [e.num0, e.num1, e.num2, e.num3, e.num4, e.num5], s = 0; 6 > s; s++) {
                        var r = n[s] - i[s];
                        t.writeUnsignedInt(r)
                    }
                    SocketConnection.sendByQueue(45720, [e._petInfo.catchTime, t],
                    function(t) {
                        e._petInfo && PetManager.UpdateBagPetInfoAsynce(e._petInfo.catchTime).then(function(t) {
                            e._petInfo = t,
                            BubblerManager.getInstance().showText("学习力分配成功"),
                            e._updateStudyInfo()
                        })
                    })
                })
            }
        },
        i.prototype.onTouchTapItem = function(t) {
            if (t.item) {
                var e = {
                    id: t.item,
                    useItemFun: this.useItem,
                    caller: this
                },
                i = {
                    srcWorldPos: this.localToGlobal(27),
                    dir: "right-top",
                    rx: 0,
                    ry: 0 / 0
                };
                tipsPop.TipsPop.openItemPop(e, i)
            }
        },
        i.prototype.useItem = function(t) {
            ItemUseManager.getInstance().useItem(this._petInfo, t)
        },
        i.prototype.destroy = function() {
            this._petInfo = null,
            e.prototype.destroy.call(this)
        },
        Object.defineProperty(i.prototype, "num0", {
            get: function() {
                return this._num0
            },
            set: function(t) {
                this._num0 = t,
                this.inputTxt0.text = (this.num0 - this._petInfo.ev_hp).toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "num1", {
            get: function() {
                return this._num1
            },
            set: function(t) {
                this._num1 = t,
                this.inputTxt1.text = (this.num1 - this._petInfo.ev_attack).toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "num2", {
            get: function() {
                return this._num2
            },
            set: function(t) {
                this._num2 = t,
                this.inputTxt2.text = (this.num2 - this._petInfo.ev_defence).toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "num3", {
            get: function() {
                return this._num3
            },
            set: function(t) {
                this._num3 = t,
                this.inputTxt3.text = (this.num3 - this._petInfo.ev_sa).toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "num4", {
            get: function() {
                return this._num4
            },
            set: function(t) {
                this._num4 = t,
                this.inputTxt4.text = (this.num4 - this._petInfo.ev_sd).toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "num5", {
            get: function() {
                return this._num5
            },
            set: function(t) {
                this._num5 = t,
                this.inputTxt5.text = (this.num5 - this._petInfo.ev_sp).toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        i
    } (PopView);
    t.StudayAttrubutePopView = i,
    __reflect(i.prototype, "studyPetAttribute.StudayAttrubutePopView")
} (studyPetAttribute || (studyPetAttribute = {}));
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
studyPetAttribute; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PetStudayAttributeItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(e.prototype, "selected", {
            set: function(t) {
                this.img_select.visible = t && this.data,
                egret.superSetter(e, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.dataChanged = function() {
            this.data ? (this.icon.visible = !0, this.icon.source = "resource/assets/item/petItem/icon/" + this.data + ".png", this.lab_num.text = ItemManager.getNumByID(this.data) + "") : (this.icon.visible = !1, this.lab_num.text = "")
        },
        e.prototype.destroy = function() {
            this.data = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.StudyPetAttrItembagRender = e,
    __reflect(e.prototype, "studyPetAttribute.StudyPetAttrItembagRender")
} (studyPetAttribute || (studyPetAttribute = {}));
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
generateEUI.paths["resource/eui_skins/AttrProgressBarSkin.exml"] = window.AttrProgressBarSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["thumb", "labelDisplay"],
        this.minHeight = 18,
        this.minWidth = 30,
        this.elementsContent = [this._Image1_i(), this.thumb_i(), this.labelDisplay_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 14,
        t.scale9Grid = new egret.Rectangle(1, 1, 4, 4),
        t.source = "study_pet_attribute_texture_s9_6_png",
        t.width = 438,
        t.x = 0,
        t.y = 1,
        t
    },
    i.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.height = 10,
        t.source = "study_pet_attribute_texture_s9_5_png",
        t.width = 434,
        t.x = 2,
        t.y = 3,
        t
    },
    i.labelDisplay_i = function() {
        var t = new eui.Label;
        return this.labelDisplay = t,
        t.fontFamily = "Tahoma",
        t.horizontalCenter = 0,
        t.size = 15,
        t.text = "",
        t.textAlign = "center",
        t.textColor = 7368816,
        t.verticalAlign = "middle",
        t.verticalCenter = 0,
        t.visible = !1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetStudayAttributeItemSkin.exml"] = window.PetStudayAttributeItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "img_select", "lab_num"],
        this.height = 80,
        this.width = 80,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.img_select_i(), this.lab_num_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_icon_bg_style_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 50,
        t.width = 50,
        t.x = 15,
        t.y = 15,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.source = "common_icon_select_style_1_png",
        t.x = -6,
        t.y = -6,
        t
    },
    i.lab_num_i = function() {
        var t = new eui.Label;
        return this.lab_num = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "9999",
        t.textAlign = "right",
        t.width = 60,
        t.x = 18,
        t.y = 60,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/StudyPetAttributeSkin.exml"] = window.StudyPetAttributeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["lab_atk", "lab_atk_study", "lab_satk_study", "lab_satk", "lab_speed_study", "lab_speed", "lab_def_study", "lab_def", "lab_sdef_study", "lab_sdef", "lab_hp_study", "lab_hp", "lab_total_study", "img_btn_close", "texture_003", "btnMin5", "tbg5", "inputTxt5", "btnMax5", "btnPlus5", "selectItem5", "btnMin0", "tbg0", "inputTxt0", "btnMax0", "btnPlus0", "selectItem0", "btnMin1", "tbg1", "inputTxt1", "btnMax1", "btnPlus1", "selectItem1", "btnMin2", "tbg2", "inputTxt2", "btnMax2", "btnPlus2", "selectItem2", "btnMin3", "tbg3", "inputTxt3", "btnMax3", "btnPlus3", "selectItem3", "btnMin4", "tbg4", "inputTxt4", "btnMax4", "btnPlus4", "selectItem4", "Plus", "bg2", "icon2", "studay", "itemnum", "img_btnAssign", "img_btnReset", "studyAssign", "rb_item", "rb_study", "rbg", "list_viewport", "scroller_item"],
        this.height = 640,
        this.width = 536,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Label1_i(), this._Label2_i(), this.lab_atk_i(), this.lab_atk_study_i(), this._Label3_i(), this._Label4_i(), this.lab_satk_study_i(), this.lab_satk_i(), this._Label5_i(), this._Label6_i(), this.lab_speed_study_i(), this.lab_speed_i(), this._Label7_i(), this._Label8_i(), this.lab_def_study_i(), this.lab_def_i(), this._Label9_i(), this._Label10_i(), this.lab_sdef_study_i(), this.lab_sdef_i(), this._Label11_i(), this._Label12_i(), this.lab_hp_study_i(), this.lab_hp_i(), this._Label13_i(), this.lab_total_study_i(), this._Label14_i(), this.img_btn_close_i(), this._Image8_i(), this.studyAssign_i(), this.rbg_i(), this.scroller_item_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    u = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "study_pet_attributeitem_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "study_pet_attributeitem_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "study_pet_attributestudy_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "study_pet_attributestudy_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    h = e.prototype;
    return h._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "pet_use_item_panel_bg_png",
        t.width = 531,
        t.x = 5,
        t.y = 0,
        t
    },
    h._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 70,
        t.source = "common_texture_002_png",
        t.width = 484,
        t.x = 34,
        t.y = 50,
        t
    },
    h._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 33,
        t.y = 211,
        t
    },
    h._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 33,
        t.y = 175,
        t
    },
    h._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 283,
        t.y = 175,
        t
    },
    h._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 283,
        t.y = 211,
        t
    },
    h._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 126,
        t.source = "common_texture_002_png",
        t.width = 484,
        t.x = 34,
        t.y = 130,
        t
    },
    h._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "攻击:",
        t.textColor = 7072255,
        t.x = 54,
        t.y = 150,
        t
    },
    h._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "学习力:",
        t.textColor = 7072255,
        t.x = 151,
        t.y = 150,
        t
    },
    h.lab_atk_i = function() {
        var t = new eui.Label;
        return this.lab_atk = t,
        t.size = 18,
        t.text = "100",
        t.textColor = 16777215,
        t.x = 103,
        t.y = 150,
        t
    },
    h.lab_atk_study_i = function() {
        var t = new eui.Label;
        return this.lab_atk_study = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 16777215,
        t.x = 217,
        t.y = 150,
        t
    },
    h._Label3_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "特攻:",
        t.textColor = 7072255,
        t.x = 54,
        t.y = 186,
        t
    },
    h._Label4_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "学习力:",
        t.textColor = 7072255,
        t.x = 151,
        t.y = 186,
        t
    },
    h.lab_satk_study_i = function() {
        var t = new eui.Label;
        return this.lab_satk_study = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 16777215,
        t.x = 217,
        t.y = 186,
        t
    },
    h.lab_satk_i = function() {
        var t = new eui.Label;
        return this.lab_satk = t,
        t.size = 18,
        t.text = "100",
        t.textColor = 16777215,
        t.x = 103,
        t.y = 186,
        t
    },
    h._Label5_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "速度:",
        t.textColor = 7072255,
        t.x = 54,
        t.y = 222,
        t
    },
    h._Label6_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "学习力:",
        t.textColor = 7072255,
        t.x = 151,
        t.y = 222,
        t
    },
    h.lab_speed_study_i = function() {
        var t = new eui.Label;
        return this.lab_speed_study = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 16777215,
        t.x = 217,
        t.y = 222,
        t
    },
    h.lab_speed_i = function() {
        var t = new eui.Label;
        return this.lab_speed = t,
        t.size = 18,
        t.text = "100",
        t.textColor = 16777215,
        t.x = 103,
        t.y = 222,
        t
    },
    h._Label7_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "防御:",
        t.textColor = 7072255,
        t.x = 309,
        t.y = 149,
        t
    },
    h._Label8_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "学习力:",
        t.textColor = 7072255,
        t.x = 405,
        t.y = 149,
        t
    },
    h.lab_def_study_i = function() {
        var t = new eui.Label;
        return this.lab_def_study = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 16777215,
        t.x = 471,
        t.y = 149,
        t
    },
    h.lab_def_i = function() {
        var t = new eui.Label;
        return this.lab_def = t,
        t.size = 18,
        t.text = "100",
        t.textColor = 16777215,
        t.x = 357,
        t.y = 149,
        t
    },
    h._Label9_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "特防:",
        t.textColor = 7072255,
        t.x = 308,
        t.y = 185,
        t
    },
    h._Label10_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "学习力:",
        t.textColor = 7072255,
        t.x = 405,
        t.y = 185,
        t
    },
    h.lab_sdef_study_i = function() {
        var t = new eui.Label;
        return this.lab_sdef_study = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 16777215,
        t.x = 471,
        t.y = 185,
        t
    },
    h.lab_sdef_i = function() {
        var t = new eui.Label;
        return this.lab_sdef = t,
        t.size = 18,
        t.text = "100",
        t.textColor = 16777215,
        t.x = 357,
        t.y = 185,
        t
    },
    h._Label11_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "体力:",
        t.textColor = 7072255,
        t.x = 308,
        t.y = 221,
        t
    },
    h._Label12_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "学习力:",
        t.textColor = 7072255,
        t.x = 405,
        t.y = 221,
        t
    },
    h.lab_hp_study_i = function() {
        var t = new eui.Label;
        return this.lab_hp_study = t,
        t.size = 18,
        t.text = "255",
        t.textColor = 16777215,
        t.x = 471,
        t.y = 221,
        t
    },
    h.lab_hp_i = function() {
        var t = new eui.Label;
        return this.lab_hp = t,
        t.size = 18,
        t.text = "100",
        t.textColor = 16777215,
        t.x = 356,
        t.y = 221,
        t
    },
    h._Label13_i = function() {
        var t = new eui.Label;
        return t.size = 22,
        t.text = "当前学习力：",
        t.textColor = 7072255,
        t.x = 168,
        t.y = 63,
        t
    },
    h.lab_total_study_i = function() {
        var t = new eui.Label;
        return this.lab_total_study = t,
        t.size = 22,
        t.text = "000/510",
        t.textColor = 16777215,
        t.x = 297,
        t.y = 64,
        t
    },
    h._Label14_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "单项学习力上限255",
        t.textColor = 4173823,
        t.x = 206,
        t.y = 96,
        t
    },
    h.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.height = 101,
        t.source = "pet_use_item_panel_img_btn_back_png",
        t.width = 18,
        t.x = 0,
        t.y = 272,
        t
    },
    h._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 304,
        t.source = "common_texture_003_png",
        t.width = 486,
        t.x = 33,
        t.y = 310,
        t
    },
    h.studyAssign_i = function() {
        var t = new eui.Group;
        return this.studyAssign = t,
        t.x = 42,
        t.y = 325,
        t.elementsContent = [this.texture_003_i(), this.Plus_i(), this.bg2_i(), this._Label15_i(), this.icon2_i(), this._Label16_i(), this.studay_i(), this.itemnum_i(), this.img_btnAssign_i(), this.img_btnReset_i()],
        t
    },
    h.texture_003_i = function() {
        var t = new eui.Image;
        return this.texture_003 = t,
        t.height = 175,
        t.source = "common_texture_003_png",
        t.width = 468,
        t.x = 0,
        t.y = 31,
        t
    },
    h.Plus_i = function() {
        var t = new eui.Group;
        return this.Plus = t,
        t.x = 6,
        t.y = 56,
        t.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this.selectItem5_i(), this.selectItem0_i(), this.selectItem1_i(), this.selectItem2_i(), this.selectItem3_i(), this.selectItem4_i()],
        t
    },
    h._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 0,
        t.y = 86,
        t
    },
    h._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 235,
        t.y = 86,
        t
    },
    h._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 0,
        t.y = 37,
        t
    },
    h._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 235,
        t.y = 37,
        t
    },
    h._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "common_speed_png",
        t.width = 23,
        t.x = 15,
        t.y = 102,
        t
    },
    h._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_hp_png",
        t.width = 22,
        t.x = 247,
        t.y = 101,
        t
    },
    h._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "common_satk_png",
        t.width = 20,
        t.x = 17,
        t.y = 51,
        t
    },
    h._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_sdef_png",
        t.width = 18,
        t.x = 249,
        t.y = 52,
        t
    },
    h._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_def_png",
        t.width = 18,
        t.x = 249,
        t.y = 1,
        t
    },
    h._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_atk_png",
        t.width = 21,
        t.x = 16,
        t.y = 1,
        t
    },
    h.selectItem5_i = function() {
        var t = new eui.Group;
        return this.selectItem5 = t,
        t.x = 49,
        t.y = 100,
        t.elementsContent = [this.btnMin5_i(), this.tbg5_i(), this.inputTxt5_i(), this.btnMax5_i(), this.btnPlus5_i()],
        t
    },
    h.btnMin5_i = function() {
        var t = new eui.Image;
        return this.btnMin5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    h.tbg5_i = function() {
        var t = new eui.Image;
        return this.tbg5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    h.inputTxt5_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt5 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_5",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = i,
        t
    },
    h.btnMax5_i = function() {
        var t = new eui.Image;
        return this.btnMax5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    h.btnPlus5_i = function() {
        var t = new eui.Image;
        return this.btnPlus5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    h.selectItem0_i = function() {
        var t = new eui.Group;
        return this.selectItem0 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 280,
        t.y = 100,
        t.elementsContent = [this.btnMin0_i(), this.tbg0_i(), this.inputTxt0_i(), this.btnMax0_i(), this.btnPlus0_i()],
        t
    },
    h.btnMin0_i = function() {
        var t = new eui.Image;
        return this.btnMin0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    h.tbg0_i = function() {
        var t = new eui.Image;
        return this.tbg0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    h.inputTxt0_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt0 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_0",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = n,
        t
    },
    h.btnMax0_i = function() {
        var t = new eui.Image;
        return this.btnMax0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    h.btnPlus0_i = function() {
        var t = new eui.Image;
        return this.btnPlus0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    h.selectItem1_i = function() {
        var t = new eui.Group;
        return this.selectItem1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 49,
        t.y = 0,
        t.elementsContent = [this.btnMin1_i(), this.tbg1_i(), this.inputTxt1_i(), this.btnMax1_i(), this.btnPlus1_i()],
        t
    },
    h.btnMin1_i = function() {
        var t = new eui.Image;
        return this.btnMin1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    h.tbg1_i = function() {
        var t = new eui.Image;
        return this.tbg1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    h.inputTxt1_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt1 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_1",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = s,
        t
    },
    h.btnMax1_i = function() {
        var t = new eui.Image;
        return this.btnMax1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    h.btnPlus1_i = function() {
        var t = new eui.Image;
        return this.btnPlus1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    h.selectItem2_i = function() {
        var t = new eui.Group;
        return this.selectItem2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 280,
        t.y = 0,
        t.elementsContent = [this.btnMin2_i(), this.tbg2_i(), this.inputTxt2_i(), this.btnMax2_i(), this.btnPlus2_i()],
        t
    },
    h.btnMin2_i = function() {
        var t = new eui.Image;
        return this.btnMin2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    h.tbg2_i = function() {
        var t = new eui.Image;
        return this.tbg2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    h.inputTxt2_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt2 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_2",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = r,
        t
    },
    h.btnMax2_i = function() {
        var t = new eui.Image;
        return this.btnMax2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    h.btnPlus2_i = function() {
        var t = new eui.Image;
        return this.btnPlus2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    h.selectItem3_i = function() {
        var t = new eui.Group;
        return this.selectItem3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 49,
        t.y = 51,
        t.elementsContent = [this.btnMin3_i(), this.tbg3_i(), this.inputTxt3_i(), this.btnMax3_i(), this.btnPlus3_i()],
        t
    },
    h.btnMin3_i = function() {
        var t = new eui.Image;
        return this.btnMin3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    h.tbg3_i = function() {
        var t = new eui.Image;
        return this.tbg3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    h.inputTxt3_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt3 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_3",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = a,
        t
    },
    h.btnMax3_i = function() {
        var t = new eui.Image;
        return this.btnMax3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    h.btnPlus3_i = function() {
        var t = new eui.Image;
        return this.btnPlus3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    h.selectItem4_i = function() {
        var t = new eui.Group;
        return this.selectItem4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 280,
        t.y = 51,
        t.elementsContent = [this.btnMin4_i(), this.tbg4_i(), this.inputTxt4_i(), this.btnMax4_i(), this.btnPlus4_i()],
        t
    },
    h.btnMin4_i = function() {
        var t = new eui.Image;
        return this.btnMin4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    h.tbg4_i = function() {
        var t = new eui.Image;
        return this.tbg4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    h.inputTxt4_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt4 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_4",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = u,
        t
    },
    h.btnMax4_i = function() {
        var t = new eui.Image;
        return this.btnMax4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    h.btnPlus4_i = function() {
        var t = new eui.Image;
        return this.btnPlus4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    h.bg2_i = function() {
        var t = new eui.Image;
        return this.bg2 = t,
        t.height = 40,
        t.source = "study_pet_attribute_bg2_png",
        t.width = 462,
        t.x = 3,
        t.y = 0,
        t
    },
    h._Label15_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "积累学习力",
        t.textColor = 4173823,
        t.x = 31,
        t.y = 11,
        t
    },
    h.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_icon2_png",
        t.width = 8,
        t.x = 13,
        t.y = 8,
        t
    },
    h._Label16_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "最多累积2000",
        t.textColor = 4173823,
        t.x = 356,
        t.y = 11,
        t
    },
    h.studay_i = function() {
        var t = new eui.Image;
        return this.studay = t,
        t.height = 21,
        t.source = "study_pet_attribute_studay_png",
        t.width = 25,
        t.x = 277,
        t.y = 9,
        t
    },
    h.itemnum_i = function() {
        var t = new eui.Label;
        return this.itemnum = t,
        t.size = 16,
        t.text = "1000",
        t.textColor = 13756916,
        t.x = 307,
        t.y = 14,
        t
    },
    h.img_btnAssign_i = function() {
        var t = new eui.Image;
        return this.img_btnAssign = t,
        t.height = 52,
        t.source = "study_pet_attribute_img_btnAssign_png",
        t.width = 176,
        t.x = 256,
        t.y = 218,
        t
    },
    h.img_btnReset_i = function() {
        var t = new eui.Image;
        return this.img_btnReset = t,
        t.height = 52,
        t.source = "study_pet_attribute_img_btnReset_png",
        t.width = 176,
        t.x = 36,
        t.y = 218,
        t
    },
    h.rbg_i = function() {
        var t = new eui.Group;
        return this.rbg = t,
        t.x = 39,
        t.y = 270,
        t.elementsContent = [this.rb_item_i(), this.rb_study_i()],
        t
    },
    h.rb_item_i = function() {
        var t = new eui.RadioButton;
        return this.rb_item = t,
        t.groupName = "g1",
        t.value = "2",
        t.x = 127,
        t.y = -5,
        t.skinName = _,
        t
    },
    h.rb_study_i = function() {
        var t = new eui.RadioButton;
        return this.rb_study = t,
        t.groupName = "g1",
        t.value = "1",
        t.x = 0,
        t.y = -5,
        t.skinName = o,
        t
    },
    h.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.height = 268,
        t.scrollPolicyH = "off",
        t.width = 456,
        t.x = 48,
        t.y = 328,
        t.viewport = this._Group1_i(),
        t
    },
    h._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_viewport_i()],
        t
    },
    h.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.height = 268,
        t.width = 456,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    h._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 13,
        t.orientation = "rows",
        t.paddingLeft = 4,
        t.paddingTop = 4,
        t.requestedColumnCount = 5,
        t.verticalGap = 13,
        t
    },
    e
} (eui.Skin);