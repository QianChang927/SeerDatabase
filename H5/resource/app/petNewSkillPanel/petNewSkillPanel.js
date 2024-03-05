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
petNewSkillPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._exSkillIds = [],
            t.skinName = "NewSkillPanelSkin_2022",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.tip.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                i.hide(),
                i.onClickMaskHandler(null)
            },
            this),
            this._arraryCollection = new eui.ArrayCollection,
            this._listSkill.itemRenderer = t.RecommendSkillItem,
            this._listSkill.dataProvider = this._arraryCollection,
            this.petM.SetInitComp(core.component.pet.PetModel.DYNAMIC_MODEL, !1, !1),
            this.petM.SetCacheMax(12),
            this.petM.pet_bg.visible = !1,
            PetManager.addEventListener(PetEvent.UPDATE_INFO, this.onEventPetInfoChangedHanlder, this),
            this._listSkill.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype._parseData = function() {
            this._data && this._data.petinfo && (this._petInfo = this._data.petinfo),
            this._data && this._data.skillIds && (this._skillIds = this._data.skillIds),
            this.updateView()
        },
        i.prototype.initialized = function() {
            e.prototype.initialized.call(this),
            this.initPetData()
        },
        i.prototype.initPetData = function() {
            this.onEventPetInfoChangedHanlder()
        },
        i.prototype.updateView = function() {
            var t = this;
            PetManager.upDateBagPetInfo(this._petInfo.catchTime,
            function(e) {
                t._petInfo = e,
                t.txtTopLevel.text = "LV." + t._petInfo.level,
                t.imgAttr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(t._petInfo.id)),
                t.txtName.text = t._petInfo.name,
                t.petImg.source = "resource/assets/fightResource/pet/" + t._petInfo.id + ".png",
                t.petImg.width > 446 && (t.petImg.width = 446),
                t.petImg.height > 348 && (t.petImg.height = 348);
                var i = [];
                if (t._skillIds && 0 != t._skillIds.length) {
                    var n = PetXMLInfo.getExtraSkill(t._petInfo.id);
                    if (n) {
                        var l = t._skillIds.indexOf(n.ID);
                        l >= 0 && (t._skillIds.splice(l, 1), t._exSkillIds.push(n.ID))
                    }
                    for (var r = PetXMLInfo.getAdditionFifthSkill(t._petInfo.id), o = 0, s = r; o < s.length; o++) {
                        var a = s[o],
                        _ = t._skillIds.indexOf(a);
                        _ >= 0 && (t._skillIds.splice(_, 1), t._exSkillIds.push(a))
                    }
                    if (t._skillIds.length > 0) {
                        var h = PetXMLInfo.getSkillListForLv(t._petInfo.id, t._petInfo.level),
                        u = h.indexOf(t._skillIds[0]);
                        if (u >= 0) {
                            t._skillIds = h.slice(u, h.length);
                            for (var p = PetXMLInfo.getRecSkillList(t._petInfo.id), c = p.map(function(t) {
                                return t.ID
                            }), g = [], f = 0, m = p; f < m.length; f++) {
                                var d = m[f];
                                void 0 != d.Tag ? g.push(d.Tag) : g.push(0)
                            }
                            for (var v in t._skillIds) {
                                var w = -2;
                                c.length > 0 && c.indexOf(t._skillIds[v]) >= 0 && (w = g[c.indexOf(t._skillIds[v])]),
                                i.push({
                                    id: t._skillIds[v],
                                    tag: 2 + w
                                })
                            }
                        }
                    }
                    if (t._exSkillIds && 0 != t._exSkillIds.length) for (var v in t._exSkillIds) i.push({
                        id: t._exSkillIds[v],
                        tag: 1
                    });
                    t._arraryCollection.replaceAll(i)
                }
            })
        },
        i.prototype._onShowSkillTipsPop = function(t) {
            if (t.item) {
                var e = {
                    id: t.item.id,
                    petInfo: null
                },
                i = {};
                i.dir = "right-top",
                i.rx = -10,
                i.ry = 10,
                i.srcWorldPos = this.parent.parent.parent.localToGlobal(),
                tipsPop.TipsPop.openSkillPop(e, i)
            }
        },
        i.prototype.onEventPetInfoChangedHanlder = function() {
            this._petInfo = PetManager.getPetInfo(this._petInfo.catchTime),
            this.setPetState()
        },
        i.prototype.setPetState = function() {
            650 == this._petInfo.id || 651 == this._petInfo.id || 652 == this._petInfo.id ? PetManager.getBlackCanStudySkill(this._petInfo.catchTime, this.setCanJumpSkillPanelStatus.bind(this)) : PetManager.getCanStudySkill(this._petInfo.catchTime, this.setCanJumpSkillPanelStatus.bind(this))
        },
        i.prototype.setCanJumpSkillPanelStatus = function(t) {
            var e = PetXMLInfo.getSkillListForLv(this._petInfo.id, this._petInfo.level);
            e = 650 == this._petInfo.id || 651 == this._petInfo.id || 652 == this._petInfo.id ? t: e.concat(t)
        },
        i.prototype.onClickMaskHandler = function(t) {
            this.dispatchEventWith(i.EVENT_CLOSE_MODULE)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            PetManager.removeEventListener(PetEvent.UPDATE_INFO, this.onEventPetInfoChangedHanlder, this)
        },
        i.prototype.destroy = function() {
            this._listSkill.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShowSkillTipsPop, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.tip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.destroy, this),
            egret.Tween.removeTweens(this),
            e.prototype.destroy.call(this)
        },
        i.EVENT_CLOSE_MODULE = "event_close_module",
        i
    } (PopView);
    t.NewSkillPanel = e,
    __reflect(e.prototype, "petNewSkillPanel.NewSkillPanel")
} (petNewSkillPanel || (petNewSkillPanel = {}));
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
petNewSkillPanel; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this;
            n._view = new t.NewSkillPanel;
            var l = {
                petinfo: n.data.petinfo,
                skillIds: n.data.skillIds
            };
            n._view.addEventListener(t.NewSkillPanel.EVENT_CLOSE_MODULE, n.onCloseModuleEvent, n);
            var r = PopViewManager.createDefaultStyleObject();
            return r.clickMaskHandler = n._view.onClickMaskHandler,
            r.comps = [popView.components.CompName.PROMPT_CLOSE_TXT],
            r.caller = n._view,
            PopViewManager.getInstance().openView(n._view, r, l),
            n
        }
        return __extends(i, e),
        i.prototype.onCloseModuleEvent = function(t) {
            this._view.hide(),
            FightManager.isFighting && ModuleManager.ignoreReshow++,
            this.onClose()
        },
        i.prototype.destroy = function() {
            this._view.removeEventListener(t.NewSkillPanel.EVENT_CLOSE_MODULE, this.onCloseModuleEvent, this),
            this._view = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PetNewSkillPanel = e,
    __reflect(e.prototype, "petNewSkillPanel.PetNewSkillPanel")
} (petNewSkillPanel || (petNewSkillPanel = {}));
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
petNewSkillPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return DisplayUtil.cacheAsBitmapDisplayObj(e),
            e.skinName = petManualInfo.SkillItemNew,
            e.addEvents(),
            e
        }
        return __extends(e, t),
        e.prototype.addEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            var t, e;
            if ("number" == typeof this.data ? (t = this.data, e = 0) : (t = this.data.id, e = this.data.tag), t > 0) {
                var i = SkillXMLInfo.getTypeID(t),
                n = "";
                n = 4 == SkillXMLInfo.getCategory(t) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(i)),
                this.icon_attr.source = n,
                this.icon_attr.visible = !0,
                this.txt_name.text = SkillXMLInfo.getName(t),
                this.txt_hurti_value.text = SkillXMLInfo.getDamage(t).toString();
                var l = SkillXMLInfo.getPP(t).toString();
                this.txt_pp_value.text = l + "/" + l
            } else this.icon_attr.visible = !1,
            this.txt_name.text = "暂无",
            this.txt_hurti_value.text = "无",
            this.txt_pp_value.text = "无";
            e && (this.tag.source = "pet_info_manual_tag" + e + "_png"),
            this.tag.visible = !!e
        },
        e.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.RecommendSkillItem = e,
    __reflect(e.prototype, "petNewSkillPanel.RecommendSkillItem")
} (petNewSkillPanel || (petNewSkillPanel = {})),
window.petManualInfo = window.petManualInfo || {};
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
generateEUI.paths["resource/eui_skins/item/SkillItemNew.exml"] = window.petManualInfo.SkillItemNew = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["tag", "icon_attr", "txt_name", "txt_hurti_value", "txt_pp_value", "skill"],
        this.height = 89,
        this.width = 282,
        this.elementsContent = [this.skill_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.skill_i = function() {
        var t = new eui.Group;
        return this.skill = t,
        t.visible = !0,
        t.elementsContent = [this._Image1_i(), this.tag_i(), this.icon_attr_i(), this.txt_name_i(), this._Label1_i(), this.txt_hurti_value_i(), this._Label2_i(), this.txt_pp_value_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ppim_info_skill_item_bg1_png",
        t.visible = !0,
        t.x = 6,
        t.y = 7,
        t
    },
    i.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.visible = !0,
        t.x = 235,
        t.y = 10,
        t
    },
    i.icon_attr_i = function() {
        var t = new eui.Image;
        return this.icon_attr = t,
        t.height = 35,
        t.source = "ppim_info_icon_attr_png",
        t.width = 35,
        t.x = 14,
        t.y = 26,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "技能名称七个字",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 26,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "威力：",
        t.textColor = 11133439,
        t.x = 70,
        t.y = 57,
        t
    },
    i.txt_hurti_value_i = function() {
        var t = new eui.Label;
        return this.txt_hurti_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "200",
        t.textColor = 11133439,
        t.x = 115,
        t.y = 57,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "PP：",
        t.textColor = 11133439,
        t.x = 155,
        t.y = 57,
        t
    },
    i.txt_pp_value_i = function() {
        var t = new eui.Label;
        return this.txt_pp_value = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "20",
        t.textColor = 11133439,
        t.x = 190,
        t.y = 57,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewSkillPanelSkin_2021_11.exml"] = window.NewSkillPanelSkin_2021_11 = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgScrollBarBG", "imgScrollBar", "img_btn_changeSkill", "skill_icon", "lab_skill_desc", "scroller_desc", "lab_skill_name", "txt_attribute", "lab_pp", "lab_power"],
        this.height = 250,
        this.width = 480,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.imgScrollBarBG_i(), this.imgScrollBar_i(), this.img_btn_changeSkill_i(), this.skill_icon_i(), this.scroller_desc_i(), this._Group2_i(), this.lab_pp_i(), this.lab_power_i(), this._Image5_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 5,
        t.left = 5,
        t.right = 5,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "new_tips_2021_11_img6_png",
        t.top = 5,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 69.097,
        t.left = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img5_png",
        t.top = 5,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "new_tips_2021_11_img7_png",
        t.x = 24,
        t.y = 13,
        t
    },
    i.imgScrollBarBG_i = function() {
        var t = new eui.Image;
        return this.imgScrollBarBG = t,
        t.bottom = 5,
        t.right = 5,
        t.source = "new_tips_2021_11_img2_png",
        t.top = 74,
        t
    },
    i.imgScrollBar_i = function() {
        var t = new eui.Image;
        return this.imgScrollBar = t,
        t.right = 5,
        t.source = "new_tips_2021_11_img1_png",
        t.y = 74,
        t
    },
    i.img_btn_changeSkill_i = function() {
        var t = new eui.Group;
        return this.img_btn_changeSkill = t,
        t.right = 20,
        t.visible = !1,
        t.y = 210,
        t.elementsContent = [this._Image4_i(), this._Label1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "new_mark_tips_2021_11_aaa_png",
        t.visible = !0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "替 换",
        t.textColor = 11301415,
        t.x = 24,
        t.y = 3.05,
        t
    },
    i.skill_icon_i = function() {
        var t = new eui.Image;
        return this.skill_icon = t,
        t.x = 28,
        t.y = 20,
        t
    },
    i.scroller_desc_i = function() {
        var t = new eui.Scroller;
        return this.scroller_desc = t,
        t.height = 134,
        t.left = 24,
        t.right = 24,
        t.y = 87,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.lab_skill_desc_i()],
        t
    },
    i.lab_skill_desc_i = function() {
        var t = new eui.Label;
        return this.lab_skill_desc = t,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.textColor = 8822740,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 87,
        t.y = 18.82,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.lab_skill_name_i(), this.txt_attribute_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t.verticalAlign = "bottom",
        t
    },
    i.lab_skill_name_i = function() {
        var t = new eui.Label;
        return this.lab_skill_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "技能名技能名技能名",
        t.textColor = 12900350,
        t.x = 0,
        t.y = .18,
        t
    },
    i.txt_attribute_i = function() {
        var t = new eui.Label;
        return this.txt_attribute = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "属性技能",
        t.textColor = 6088025,
        t
    },
    i.lab_pp_i = function() {
        var t = new eui.Label;
        return this.lab_pp = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "PP: 000",
        t.textColor = 4252667,
        t.x = 183,
        t.y = 46,
        t
    },
    i.lab_power_i = function() {
        var t = new eui.Label;
        return this.lab_power = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "威力: 000",
        t.textColor = 16580432,
        t.x = 88,
        t.y = 46,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = .5,
        t.source = "new_tips_2021_11_imgnewskill_png",
        t.y = -25.252,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewSkillPanelSkin_2022.exml"] = window.NewSkillPanelSkin_2022 = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["scrollBar", "petImg", "petM", "_listSkill", "imgAttr", "txtTopLevel", "txtName", "tip"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Group4_i(), this.tip_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 350,
            t.scale9Grid = new egret.Rectangle(2, 2, 50, 50),
            t.width = 8,
            t.x = 0,
            t.y = 0,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 80,
            t.scale9Grid = new egret.Rectangle(37, 27, 5, 8),
            t.source = "new_tips_2021_11_img1_png",
            t.width = 8,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Group4_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = -14.5,
        t.visible = !0,
        t.elementsContent = [this._Image1_i(), this.scrollBar_i(), this._Group1_i(), this._Scroller1_i(), this._Group3_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "bbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.scrollBar_i = function() {
        var t = new eui.VScrollBar;
        return this.scrollBar = t,
        t.height = 394.93,
        t.visible = !1,
        t.width = 21.024,
        t.x = 811,
        t.y = 79.59,
        t.skinName = i,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 348.185,
        t.visible = !0,
        t.width = 446.577,
        t.x = 40.643,
        t.y = 50.574,
        t.elementsContent = [this.petImg_i(), this.petM_i()],
        t
    },
    n.petImg_i = function() {
        var t = new eui.Image;
        return this.petImg = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 50,
        t.visible = !0,
        t
    },
    n.petM_i = function() {
        var t = new core.component.pet.PetModel;
        return this.petM = t,
        t.height = 20,
        t.visible = !1,
        t.width = 20,
        t.x = 60.53,
        t.y = 0,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 352,
        t.visible = !0,
        t.width = 282,
        t.x = 537,
        t.y = 98,
        t.viewport = this._listSkill_i(),
        t
    },
    n._listSkill_i = function() {
        var t = new eui.List;
        return this._listSkill = t,
        t.height = 352,
        t.visible = !0,
        t.width = 282,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 61,
        t.y = 414,
        t.elementsContent = [this._Image2_i(), this._Group2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "imgtoopbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.verticalCenter = 0,
        t.visible = !0,
        t.x = 153.61,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgAttr_i(), this.txtTopLevel_i(), this.txtName_i()],
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t.verticalAlign = "middle",
        t
    },
    n.imgAttr_i = function() {
        var t = new eui.Image;
        return this.imgAttr = t,
        t.height = 20,
        t.width = 20,
        t.x = 0,
        t.y = 1,
        t
    },
    n.txtTopLevel_i = function() {
        var t = new eui.Label;
        return this.txtTopLevel = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "Lv.",
        t.textColor = 16770655,
        t.x = 32,
        t.y = 4,
        t
    },
    n.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 13689343,
        t.x = 82,
        t.y = 3,
        t
    },
    n.tip_i = function() {
        var t = new eui.Label;
        return this.tip = t,
        t.bottom = 40,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "点击空白区域关闭当前弹窗",
        t.textColor = 11133439,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewSkillPanelSkin.exml"] = window.NewSkillPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "line", "img_btn_changeSkill", "skill_icon", "lab_skill_name", "txt_attribute", "lab_power", "lab_pp", "lab_pet_name", "lab_skill_desc", "scroller_desc"],
        this.height = 340,
        this.width = 300,
        this.elementsContent = [this.bg_i(), this.line_i(), this.img_btn_changeSkill_i(), this._Label1_i(), this._Image1_i(), this.skill_icon_i(), this.lab_skill_name_i(), this.txt_attribute_i(), this._Label2_i(), this.lab_power_i(), this._Label3_i(), this.lab_pp_i(), this.lab_pet_name_i(), this.scroller_desc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 340,
        t.source = "common_bg_tips_s9_png",
        t.width = 300,
        t.x = 0,
        t.y = 0,
        t
    },
    i.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.height = 1,
        t.source = "common_tips_pop_clothes_line_1_png",
        t.width = 279,
        t.x = 10,
        t.y = 42,
        t
    },
    i.img_btn_changeSkill_i = function() {
        var t = new eui.Image;
        return this.img_btn_changeSkill = t,
        t.height = 40,
        t.source = "common_tips_pop_imgBtn_th_png",
        t.width = 90,
        t.x = 104,
        t.y = 278,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "等级提升，学会了以下新技能",
        t.textAlign = "center",
        t.textColor = 16773733,
        t.width = 300,
        t.x = 0,
        t.y = 12,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 51,
        t.source = "common_icon_bg_style_1_png",
        t.width = 51,
        t.x = 20,
        t.y = 53,
        t
    },
    i.skill_icon_i = function() {
        var t = new eui.Image;
        return this.skill_icon = t,
        t.height = 48,
        t.width = 48,
        t.x = 22,
        t.y = 55,
        t
    },
    i.lab_skill_name_i = function() {
        var t = new eui.Label;
        return this.lab_skill_name = t,
        t.size = 18,
        t.text = "众生恩赐",
        t.textColor = 16773477,
        t.x = 82,
        t.y = 58,
        t
    },
    i.txt_attribute_i = function() {
        var t = new eui.Label;
        return this.txt_attribute = t,
        t.size = 18,
        t.text = "（属性攻击）",
        t.textColor = 9828353,
        t.x = 165,
        t.y = 58,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "威力:",
        t.textColor = 4175861,
        t.x = 82,
        t.y = 82,
        t
    },
    i.lab_power_i = function() {
        var t = new eui.Label;
        return this.lab_power = t,
        t.size = 16,
        t.text = "160",
        t.textColor = 4175861,
        t.x = 126,
        t.y = 84,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "PP:",
        t.textColor = 4175861,
        t.x = 175,
        t.y = 84,
        t
    },
    i.lab_pp_i = function() {
        var t = new eui.Label;
        return this.lab_pp = t,
        t.size = 16,
        t.text = "5/5",
        t.textColor = 4175861,
        t.x = 206,
        t.y = 84,
        t
    },
    i.lab_pet_name_i = function() {
        var t = new eui.Label;
        return this.lab_pet_name = t,
        t.size = 18,
        t.text = "精灵名字多少个字啦啦啦啦",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 69,
        t.y = 299,
        t
    },
    i.scroller_desc_i = function() {
        var t = new eui.Scroller;
        return this.scroller_desc = t,
        t.height = 146,
        t.width = 260,
        t.x = 20,
        t.y = 118,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.lab_skill_desc_i()],
        t
    },
    i.lab_skill_desc_i = function() {
        var t = new eui.Label;
        return this.lab_skill_desc = t,
        t.anchorOffsetX = 0,
        t.lineSpacing = 7,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "技能使用成功时，100%改变对方防御等级-1100%改变对方防御\n技能使用成功时，100%改变对方防御等级-1\n技能使用成功时，100%改变对方防御等级-1技能使用成功时，100%改变对方防御等级-1",
        t.textColor = 16777215,
        t.width = 260,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin);