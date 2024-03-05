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
bagStorageSwitchChoosePanel; !
function(e) {
    var t = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            EventManager.addEventListener("bagStorageSwitchChoosePanel.closePop", this.onClose, this);
            var e = new i,
            t = PopViewManager.createDefaultStyleObject();
            t.maskShapeStyle.maskAlpha = 0,
            PopViewManager.getInstance().openView(e, t, {
                info: this.data.info,
                fun: this.data.fun,
                caller: this.data.caller
            })
        },
        t
    } (BaseModule);
    e.BagStorageSwitchChoosePanel = t,
    __reflect(t.prototype, "bagStorageSwitchChoosePanel.BagStorageSwitchChoosePanel");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._isChangeing = !1,
            t.skinName = "BagStorageSwitchchoosePanelSkin",
            t
        }
        return __extends(t, e),
        t.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._petStorageInfo = t.info,
            this._fun = t.fun,
            this._caller = t.caller
        },
        t.prototype.initialized = function() {
            var e = this;
            PetManager.updateBagInfo(function() {
                e.select.visible = !1;
                var t = PetManager.infos;
                e.defaultTime = PetManager.infos[0].catchTime;
                for (var i = PetManager.EACH_BAG_MAX,
                n = 0; n < PetManager.EACH_BAG_MAX; n++) e["fight_pet_" + n].setData(t[n]);
                for (t = PetManager.secondInfos, i = PetManager.secondBagTotalLength, n = 0; 6 > n; n++) e["unfight_pet_" + n].index = n,
                n >= i ? e["unfight_pet_" + n].setData(null) : e["unfight_pet_" + n].setData(t[n])
            })
        },
        t.prototype.initEvents = function() {
            for (var e = this,
            t = 0; 6 > t; t++) this["fight_pet_" + t].name = "fightPet_" + t,
            this["fight_pet_" + t].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapSelectFightPets, this),
            this["unfight_pet_" + t].name = "unfightPet_" + t,
            this["unfight_pet_" + t].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapSelectUnFightPetss, this);
            ImageButtonUtil.add(this.close,
            function() {
                e._isChangeing || e.hide()
            },
            this)
        },
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this);
            for (var e = 0; 6 > e; e++) this["fight_pet_" + e].name = "fightPet_" + e,
            this["fight_pet_" + e].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapSelectFightPets, this),
            this["unfight_pet_" + e].name = "unfightPet_" + e,
            this["unfight_pet_" + e].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapSelectUnFightPetss, this)
        },
        t.prototype.onTouchTapSelectFightPets = function(e) {
            var t = ~~e.currentTarget.name.split("_")[1];
            this.updateSelect(e.currentTarget, t + 1)
        },
        t.prototype.onTouchTapSelectUnFightPetss = function(e) {
            var t = ~~e.currentTarget.name.split("_")[1];
            this.updateSelect(e.currentTarget, t + 7)
        },
        t.prototype.updateSelect = function(e, t) {
            var i = this;
            if (!this._isChangeing) {
                var n = e.localToGlobal(0, 0),
                o = this.globalToLocal(n.x, n.y);
                this.select.x = o.x,
                this.select.y = o.y,
                this.select.visible = !0;
                var a = e.getData();
                this._dst = a;
                var h = new egret.Event("replace_pet", !1, !0, a.id);
                if (EventManager.dispatchEvent(h)) {
                    var _ = "点击确认替换<font color= #5de75a>" + PetXMLInfo.getName(a.id) + "</font>为<font color= #5de75a>" + PetXMLInfo.getName(this._petStorageInfo.id) + "</font>到背包中";
                    Alert.show(_,
                    function() {
                        i._isChangeing = !0;
                        var e = a.catchTime;
                        SocketConnection.sendByQueue(41467, [t, a.catchTime, i._petStorageInfo.catchTime],
                        function() {
                            i._fun.apply(i._caller, [e]),
                            PetManager.dispatchEvent(new PetEvent(PetEvent.STORAGE_ADDED, e)),
                            i.hide()
                        })
                    })
                }
            }
        },
        t.prototype._petStorageToInBag = function(e) {
            var t = this;
            PetManager.removeEventListener(PetEvent.STORAGE_ADDED, this._petStorageToInBag, this),
            PetManager.storageToBag(this._petStorageInfo.catchTime,
            function() {
                t.defaultTime == t._dst.catchTime && (PetManager.setDefault(t._petStorageInfo.catchTime, !0), t._petStorageInfo = null)
            }),
            this.hide()
        },
        t.prototype._petStorageToSecondBag = function(e) {
            PetManager.removeEventListener(PetEvent.STORAGE_ADDED, this._petStorageToSecondBag, this),
            PetManager.storageToSecondBag(this._petStorageInfo.catchTime),
            this.hide()
        },
        t.prototype.destroy = function() {
            PetManager.removeEventListener(PetEvent.STORAGE_ADDED, this._petStorageToSecondBag, this),
            PetManager.removeEventListener(PetEvent.STORAGE_ADDED, this._petStorageToInBag, this),
            this._fun = null,
            this._caller = null,
            e.prototype.destroy.call(this),
            EventManager.dispatchEventWith("bagStorageSwitchChoosePanel.closePop")
        },
        t
    } (PopView);
    e.ChoosePopView = i,
    __reflect(i.prototype, "bagStorageSwitchChoosePanel.ChoosePopView")
} (bagStorageSwitchChoosePanel || (bagStorageSwitchChoosePanel = {}));
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
bagStorageSwitchChoosePanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "ChooseHeadSkin",
            t
        }
        return __extends(t, e),
        t.prototype.setData = function(e) {
            if (this._petInfo = e, e) {
                this.pet_Default.visible = 1 == e.sortIndex,
                this.grp_pet.visible = !0,
                this.vipFlag.visible = !1,
                this.touchChildren = this.touchEnabled = !0;
                var t = PetXMLInfo.getType(this._petInfo.id);
                this.elem_icon.source = ClientConfig.getpettypeticon(t),
                this.head.source = ClientConfig.getPetHeadPath(this._petInfo.id, this._petInfo.catchTime, this._petInfo.skinId),
                this.txtLv.text = "lv." + this._petInfo.level;
                var i = PetXMLInfo.getName(this._petInfo.id);
                this.txtName.text = StringUtil.parseStrLimitLen(i, 6)
            } else {
                if (this.grp_pet.visible = !1, !this.isUnlock) {
                    var n = PetManager.SECOND_BAG_UNLOCK_LEVELS[this.index];
                    this.vipFlag.source = "bag_Storage_SwitchChoose_Panel_vipPng_" + n + "_png",
                    this.vipFlag.visible = !0,
                    GameInfo.isChecking && (this.visible = !1)
                }
                this.touchChildren = this.touchEnabled = !1
            }
        },
        t.prototype.getData = function() {
            return this._petInfo
        },
        Object.defineProperty(t.prototype, "index", {
            get: function() {
                return this._index
            },
            set: function(e) {
                this._index = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isUnlock", {
            get: function() {
                return this._index + 1 <= PetManager.secondBagTotalLength
            },
            enumerable: !0,
            configurable: !0
        }),
        t
    } (eui.Component);
    e.ChooseHead = t,
    __reflect(t.prototype, "bagStorageSwitchChoosePanel.ChooseHead")
} (bagStorageSwitchChoosePanel || (bagStorageSwitchChoosePanel = {}));
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
generateEUI.paths["resource/eui_skins/ChooseHeadSkin.exml"] = window.ChooseHeadSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["vipFlag", "txtName", "head", "txtLv", "elem_icon", "pet_Default", "grp_pet"],
        this.height = 136,
        this.width = 111,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.vipFlag_i(), this.grp_pet_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 136,
        e.source = "bag_Storage_SwitchChoose_Panel_petkuang_png",
        e.visible = !0,
        e.width = 111,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "common_pet_head_bg_size_110_134_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "common_pet_head_bg_null_size_110_134_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.vipFlag_i = function() {
        var e = new eui.Image;
        return this.vipFlag = e,
        e.horizontalCenter = 0,
        e.source = "bag_Storage_SwitchChoose_Panel_vipPng_3_png",
        e.verticalCenter = 0,
        e
    },
    i.grp_pet_i = function() {
        var e = new eui.Group;
        return this.grp_pet = e,
        e.height = 136,
        e.visible = !0,
        e.width = 111,
        e.elementsContent = [this._Image4_i(), this.txtName_i(), this.head_i(), this.txtLv_i(), this._Image5_i(), this.elem_icon_i(), this.pet_Default_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.scale9Grid = new egret.Rectangle(13, 3, 84, 19),
        e.source = "common_pet_head_name_bg_110_134_png",
        e.visible = !0,
        e.width = 105,
        e.x = 2,
        e.y = 105,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "精灵名字最多",
        e.textAlign = "center",
        e.textColor = 9025023,
        e.width = 110,
        e.x = 0,
        e.y = 110,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 100,
        e.width = 100,
        e.x = 5,
        e.y = 5,
        e
    },
    i.txtLv_i = function() {
        var e = new eui.Label;
        return this.txtLv = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "LV.100",
        e.textColor = 16514896,
        e.x = 3,
        e.y = 88,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 23,
        e.source = "bag_Storage_SwitchChoose_Panel_juxing_26_png",
        e.visible = !0,
        e.width = 37,
        e.x = 68,
        e.y = 5,
        e
    },
    i.elem_icon_i = function() {
        var e = new eui.Image;
        return this.elem_icon = e,
        e.height = 23,
        e.width = 22,
        e.x = 81,
        e.y = 5,
        e
    },
    i.pet_Default_i = function() {
        var e = new eui.Image;
        return this.pet_Default = e,
        e.height = 17,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "bag_Storage_SwitchChoose_Panel_shoufa_png",
        e.width = 40,
        e.x = 65,
        e.y = 85,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BagStorageSwitchchoosePanelSkin.exml"] = window.BagStorageSwitchchoosePanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "bg", "close", "czjl", "dmjl", "lab_title", "select", "fight_pet_0", "fight_pet_1", "fight_pet_2", "fight_pet_3", "fight_pet_4", "fight_pet_5", "grp_pets_0", "unfight_pet_0", "unfight_pet_1", "unfight_pet_2", "unfight_pet_3", "unfight_pet_4", "unfight_pet_5", "grp_pets_1"],
        this.height = 462,
        this.width = 778,
        this.elementsContent = [this.bg_i(), this.close_i(), this.czjl_i(), this.dmjl_i(), this.lab_title_i(), this.select_i(), this.grp_pets_0_i(), this.grp_pets_1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Group;
        return this.bg = e,
        e.width = 778,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.fillMode = "repeat",
        e.height = 430,
        e.source = "common_s9_pop_bg4_png",
        e.percentWidth = 100,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "common_pop_up_bg_big_png",
        e.percentWidth = 100,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "bag_Storage_SwitchChoose_Panel_TiHuanJingLing_png",
        e.x = 49,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_pop_btn_close_png",
        e.x = 740,
        e.y = 0,
        e
    },
    i.czjl_i = function() {
        var e = new eui.Image;
        return this.czjl = e,
        e.height = 99,
        e.source = "bag_Storage_SwitchChoose_Panel_vipPng_czjl_png",
        e.width = 33,
        e.x = 12,
        e.y = 85,
        e
    },
    i.dmjl_i = function() {
        var e = new eui.Image;
        return this.dmjl = e,
        e.height = 99,
        e.source = "bag_Storage_SwitchChoose_Panel_vipPng_dmjl_png",
        e.width = 33,
        e.x = 12,
        e.y = 249,
        e
    },
    i.lab_title_i = function() {
        var e = new eui.Label;
        return this.lab_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前背包已满，请选择需要替换的精灵",
        e.textColor = 6388143,
        e.x = 228,
        e.y = 386,
        e
    },
    i.select_i = function() {
        var e = new eui.Image;
        return this.select = e,
        e.height = 134,
        e.source = "bag_Storage_SwitchChoose_Panel_kuang_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 112,
        e.x = 50,
        e.y = 63,
        e
    },
    i.grp_pets_0_i = function() {
        var e = new eui.Group;
        return this.grp_pets_0 = e,
        e.touchEnabled = !1,
        e.x = 50,
        e.y = 65,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.fight_pet_0_i(), this.fight_pet_1_i(), this.fight_pet_2_i(), this.fight_pet_3_i(), this.fight_pet_4_i(), this.fight_pet_5_i()],
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 8,
        e
    },
    i.fight_pet_0_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.fight_pet_0 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 113,
        e.y = 33,
        e
    },
    i.fight_pet_1_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.fight_pet_1 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 123,
        e.y = 43,
        e
    },
    i.fight_pet_2_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.fight_pet_2 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 133,
        e.y = 53,
        e
    },
    i.fight_pet_3_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.fight_pet_3 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 143,
        e.y = 63,
        e
    },
    i.fight_pet_4_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.fight_pet_4 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 153,
        e.y = 73,
        e
    },
    i.fight_pet_5_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.fight_pet_5 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 163,
        e.y = 83,
        e
    },
    i.grp_pets_1_i = function() {
        var e = new eui.Group;
        return this.grp_pets_1 = e,
        e.touchEnabled = !1,
        e.x = 50,
        e.y = 230,
        e.layout = this._HorizontalLayout2_i(),
        e.elementsContent = [this.unfight_pet_0_i(), this.unfight_pet_1_i(), this.unfight_pet_2_i(), this.unfight_pet_3_i(), this.unfight_pet_4_i(), this.unfight_pet_5_i()],
        e
    },
    i._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 8,
        e
    },
    i.unfight_pet_0_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.unfight_pet_0 = e,
        e.skinName = "ChooseHeadSkin",
        e.visible = !0,
        e.x = 20,
        e.y = 75,
        e
    },
    i.unfight_pet_1_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.unfight_pet_1 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 30,
        e.y = 85,
        e
    },
    i.unfight_pet_2_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.unfight_pet_2 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 40,
        e.y = 95,
        e
    },
    i.unfight_pet_3_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.unfight_pet_3 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 50,
        e.y = 105,
        e
    },
    i.unfight_pet_4_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.unfight_pet_4 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 60,
        e.y = 115,
        e
    },
    i.unfight_pet_5_i = function() {
        var e = new bagStorageSwitchChoosePanel.ChooseHead;
        return this.unfight_pet_5 = e,
        e.skinName = "ChooseHeadSkin",
        e.x = 70,
        e.y = 125,
        e
    },
    t
} (eui.Skin);