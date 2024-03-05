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
petIntroducePanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.enStr = ["hp", "atk", "def", "satk", "sdef", "speed"],
            e.cnStr = ["体力", "攻击", "防御", "特攻", "特防", "速度"],
            e.skinName = PetIntroduceAttrItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        e.prototype.updateView = function() {
            this.icon.source = "common_" + this.enStr[this._info.idx] + "_png",
            this.txt_name.text = this.cnStr[this._info.idx],
            this.txt_num.text = this._info.value + "";
            for (var t = Math.round(this._info.value / 20), e = 0; 10 > e; e++) this["exp_" + e].visible = t > e
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.PetIntroduceAttrItem = e,
    __reflect(e.prototype, "petIntroducePanel.PetIntroduceAttrItem")
} (petIntroducePanel || (petIntroducePanel = {}));
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
petIntroducePanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return t && t.petId ? (i._petId = t.petId, StatLogger.log("20210108版本系统功能", "精灵介绍", "查看" + PetXMLInfo.getName(i._petId) + "精灵介绍")) : ModuleManager.hideModule(i),
            t && t.callback && (i._callback = t.callback),
            t && t.thisObj && (i._thisObj = t.thisObj),
            i.skinName = PetIntroducePanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grp_left),
            this.list_skill.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(t)
            },
            this),
            ImageButtonUtil.add(this.btnSpec,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t._petId, "", AppDoStyle.NULL)
            },
            this),
            this.scrl_skill.addEventListener(egret.Event.CHANGE, this.scrlChange, this),
            this.updateView()
        },
        i.prototype.onItemTap = function(t) {
            var e = {
                id: t.item.ID
            };
            tipsPop.TipsPop.openSkillPop(e)
        },
        i.prototype.updateView = function() {
            this.pet.source = ClientConfig.getPetIntroducePng(this._petId),
            this.txt_petName.text = PetXMLInfo.getName(this._petId);
            var e = PetXMLInfo.getType(this._petId);
            this.txt_petAttr.text = PetXMLInfo.getTypeCN(this._petId),
            this.img_petAttr.source = ClientConfig.getpettypeticon(e),
            this.btnSpec.visible = !!EffectIconControl.getAllEffctByPetId(this._petId);
            var i = PetXMLInfo.getAllEvById(this._petId),
            n = i.reduce(function(t, e) {
                return t + e
            });
            this.txt_attr.text = n + "";
            for (var r = [], _ = 0; _ < i.length; _++) {
                var a = {
                    idx: _,
                    value: i[_]
                };
                r.push(a)
            }
            this.list_attr.itemRenderer = t.PetIntroduceAttrItem,
            this.list_attr.dataProvider = new eui.ArrayCollection(r);
            var o = [],
            s = PetXMLInfo.getExtraSkill(this._petId);
            s && o.push(s);
            var u = PetXMLInfo.getRecSkillList(this._petId);
            o = o.concat(u);
            var l = PetXMLInfo.getOthSkillList(this._petId);
            o = o.concat(l),
            this.list_skill.itemRenderer = t.PetIntroduceSkillItem,
            this.list_skill.dataProvider = new eui.ArrayCollection(o),
            this.list_skill.validateNow(),
            this.scrlChange();
            var h = PetXMLInfo.getCharacterAttrParam(this._petId);
            0 == h ? (this.txt_chara.text = "固执", this.txt_charaInfo.text = "（攻击+10% ,特攻-10%）", this.txt_study.text = "攻击力") : 4 == h && (this.txt_chara.text = "保守", this.txt_charaInfo.text = "（特攻+10% ,攻击-10%）", this.txt_study.text = "特攻")
        },
        i.prototype.scrlChange = function() {
            this.arrow_up.visible = this.scrl_skill.viewport.scrollV > 0,
            this.arrow_down.visible = this.scrl_skill.viewport.scrollV < this.scrl_skill.viewport.contentHeight - this.scrl_skill.viewport.height
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.list_skill.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this),
            this.scrl_skill.removeEventListener(egret.Event.CHANGE, this.scrlChange, this),
            e.prototype.destroy.call(this),
            this._callback && this._callback.apply(this._thisObj, [])
        },
        i
    } (BaseModule);
    t.PetIntroducePanel = e,
    __reflect(e.prototype, "petIntroducePanel.PetIntroducePanel")
} (petIntroducePanel || (petIntroducePanel = {}));
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
petIntroducePanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PetIntroduceSkillItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        e.prototype.updateView = function() {
            var t = this._info.ID;
            if (t > 0) {
                var e = SkillXMLInfo.getTypeID(t);
                4 == SkillXMLInfo.getCategory(t) ? this.prop.source = ClientConfig.getpettypeticon("prop") : this.prop.source = ClientConfig.getpettypeticon(String(e)),
                this.txt_skillName.text = SkillXMLInfo.getName(t),
                this.txt_power.text = "威力：" + SkillXMLInfo.getDamage(t).toString();
                var i = SkillXMLInfo.getPP(t).toString();
                this.txt_pp.text = "PP：" + i
            }
            var n = this._info.Tag;
            n ? this.tag.source = "skill_tag" + n + "_png": this.tag.source = "skill_tag0_png"
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.PetIntroduceSkillItem = e,
    __reflect(e.prototype, "petIntroducePanel.PetIntroduceSkillItem")
} (petIntroducePanel || (petIntroducePanel = {}));
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
generateEUI.paths["resource/eui_skins/PetIntroduceAttrItemSkin.exml"] = window.PetIntroduceAttrItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_name", "icon", "txt_num", "exp_0", "exp_1", "exp_2", "exp_3", "exp_4", "exp_5", "exp_6", "exp_7", "exp_8", "exp_9"],
        this.height = 24,
        this.width = 262,
        this.elementsContent = [this.txt_name_i(), this.icon_i(), this.txt_num_i(), this._Image1_i(), this.exp_0_i(), this.exp_1_i(), this.exp_2_i(), this.exp_3_i(), this.exp_4_i(), this.exp_5_i(), this.exp_6_i(), this.exp_7_i(), this.exp_8_i(), this.exp_9_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "体力",
        t.textColor = 13102333,
        t.touchEnabled = !1,
        t.x = 31,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.horizontalCenter = -120,
        t.verticalCenter = -1,
        t
    },
    i.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.right = 127,
        t.size = 20,
        t.text = "20",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.y = 2,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 14,
        t.source = "pet_introduce_attr_item_expbg_png",
        t.width = 106,
        t.x = 151,
        t.y = 5,
        t
    },
    i.exp_0_i = function() {
        var t = new eui.Image;
        return this.exp_0 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 147,
        t.y = 0,
        t
    },
    i.exp_1_i = function() {
        var t = new eui.Image;
        return this.exp_1 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 157,
        t.y = 0,
        t
    },
    i.exp_2_i = function() {
        var t = new eui.Image;
        return this.exp_2 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 167,
        t.y = 0,
        t
    },
    i.exp_3_i = function() {
        var t = new eui.Image;
        return this.exp_3 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 177,
        t.y = 0,
        t
    },
    i.exp_4_i = function() {
        var t = new eui.Image;
        return this.exp_4 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 187,
        t.y = 0,
        t
    },
    i.exp_5_i = function() {
        var t = new eui.Image;
        return this.exp_5 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 197,
        t.y = 0,
        t
    },
    i.exp_6_i = function() {
        var t = new eui.Image;
        return this.exp_6 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 208,
        t.y = 0,
        t
    },
    i.exp_7_i = function() {
        var t = new eui.Image;
        return this.exp_7 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 218,
        t.y = 0,
        t
    },
    i.exp_8_i = function() {
        var t = new eui.Image;
        return this.exp_8 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 228,
        t.y = 0,
        t
    },
    i.exp_9_i = function() {
        var t = new eui.Image;
        return this.exp_9 = t,
        t.height = 24,
        t.source = "pet_introduce_attr_item_exp_png",
        t.width = 24,
        t.x = 238,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetIntroducePanelSkin.exml"] = window.PetIntroducePanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "list_skill", "scrl_skill", "arrow_down", "arrow_up", "grp_skill", "txt_chara", "txt_charaInfo", "txt_study", "grp_growth", "list_attr", "txt_attr", "grp_attr", "grp_left", "btnSpec", "btnClose", "namebg", "txt_petName", "txt_petAttr", "img_petAttr", "grp_name"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Rect1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.pet_i(), this.grp_skill_i(), this.grp_left_i(), this.btnSpec_i(), this.btnClose_i(), this.grp_name_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "common_ui_bg_2_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.fillAlpha = .4,
        t.fillColor = 529446,
        t.height = 640,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.right = 29,
        t.source = "pet_introduce_panel_img_3_png",
        t.width = 237,
        t.y = 626,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 8,
        t.horizontalCenter = -22,
        t.source = "pet_introduce_panel_img_2_png",
        t.width = 108,
        t.y = 620,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 8,
        t.horizontalCenter = -125.5,
        t.source = "pet_introduce_panel_img_1_png",
        t.width = 93,
        t.y = 620,
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.horizontalCenter = 0,
        t.y = 0,
        t
    },
    i.grp_skill_i = function() {
        var t = new eui.Group;
        return this.grp_skill = t,
        t.right = 0,
        t.y = 24,
        t.elementsContent = [this._Image5_i(), this.scrl_skill_i(), this.arrow_down_i(), this.arrow_up_i(), this._Image6_i(), this._Image7_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 555,
        t.source = "pet_introduce_panel_skillbg_png",
        t.width = 410,
        t.x = 0,
        t.y = 0,
        t
    },
    i.scrl_skill_i = function() {
        var t = new eui.Scroller;
        return this.scrl_skill = t,
        t.height = 387,
        t.width = 300,
        t.x = 81,
        t.y = 139,
        t.viewport = this.list_skill_i(),
        t
    },
    i.list_skill_i = function() {
        var t = new eui.List;
        return this.list_skill = t,
        t.height = 387,
        t.width = 300,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 15,
        t
    },
    i.arrow_down_i = function() {
        var t = new eui.Image;
        return this.arrow_down = t,
        t.height = 26,
        t.source = "pet_introduce_arrow_down_png",
        t.width = 36,
        t.x = 220,
        t.y = 528,
        t
    },
    i.arrow_up_i = function() {
        var t = new eui.Image;
        return this.arrow_up = t,
        t.height = 26,
        t.source = "pet_introduce_arrow_up_png",
        t.width = 36,
        t.x = 220,
        t.y = 113,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "pet_introduce_panel_tips_png",
        t.width = 173,
        t.x = 208,
        t.y = 93,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "pet_introduce_panel_title_skill_png",
        t.x = 74,
        t.y = 57,
        t
    },
    i.grp_left_i = function() {
        var t = new eui.Group;
        return this.grp_left = t,
        t.visible = !0,
        t.x = 0,
        t.y = 37,
        t.elementsContent = [this._Label1_i(), this._Image8_i(), this.grp_growth_i(), this.grp_attr_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "专属特性和技能效果以PVP战斗中为准",
        t.textColor = 3304365,
        t.touchEnabled = !1,
        t.x = 44,
        t.y = 574,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "pet_introduce_panel_img_mark_png",
        t.width = 22,
        t.x = 18,
        t.y = 572,
        t
    },
    i.grp_growth_i = function() {
        var t = new eui.Group;
        return this.grp_growth = t,
        t.x = 0,
        t.y = 323,
        t.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Label2_i(), this.txt_chara_i(), this.txt_charaInfo_i(), this._Image12_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Image13_i(), this._Label9_i(), this.txt_study_i(), this._Label10_i(), this._Label11_i(), this._Label12_i(), this._Label13_i(), this._Label14_i(), this._Label15_i(), this._Label16_i(), this._Label17_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 240,
        t.source = "pet_introduce_panel_ycbg_png",
        t.width = 373,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "pet_introduce_panel_title_growth_png",
        t.x = 25,
        t.y = 6,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 49,
        t.source = "pet_introduce_panel_developbg_png",
        t.width = 296,
        t.x = 32,
        t.y = 56,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "性格：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 42,
        t.y = 73,
        t
    },
    i.txt_chara_i = function() {
        var t = new eui.Label;
        return this.txt_chara = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "固执",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 97,
        t.y = 73,
        t
    },
    i.txt_charaInfo_i = function() {
        var t = new eui.Label;
        return this.txt_charaInfo = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "（+10%攻击）",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 137,
        t.y = 74,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 49,
        t.source = "pet_introduce_panel_developbg_png",
        t.width = 296,
        t.x = 32,
        t.y = 113,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "特性：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 41,
        t.y = 129,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "瞬杀",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 95,
        t.y = 129,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 16,
        t.text = "（有几率秒杀对手）",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 140,
        t.y = 130,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "特性：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 41,
        t.y = 140,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "瞬杀",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 95,
        t.y = 140,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 16,
        t.text = "（有几率秒杀对手）",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 140,
        t.y = 141,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 49,
        t.source = "pet_introduce_panel_developbg_png",
        t.width = 296,
        t.x = 32,
        t.y = 170,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "学习力：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 42,
        t.y = 186,
        t
    },
    i.txt_study_i = function() {
        var t = new eui.Label;
        return this.txt_study = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "攻击力",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 114,
        t.y = 186,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "255",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 168,
        t.y = 186,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "速度",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 213,
        t.y = 186,
        t
    },
    i._Label12_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "255 ",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.x = 250,
        t.y = 186,
        t
    },
    i._Label13_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "学习力：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 42,
        t.y = 197,
        t
    },
    i._Label14_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "攻击力",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 114,
        t.y = 197,
        t
    },
    i._Label15_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "255",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 168,
        t.y = 197,
        t
    },
    i._Label16_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "速度",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 213,
        t.y = 197,
        t
    },
    i._Label17_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "255 ",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 250,
        t.y = 197,
        t
    },
    i.grp_attr_i = function() {
        var t = new eui.Group;
        return this.grp_attr = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image14_i(), this.list_attr_i(), this._Image15_i(), this.txt_attr_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 309,
        t.source = "pet_introduce_panel_infobg_png",
        t.width = 433,
        t.x = 0,
        t.y = 0,
        t
    },
    i.list_attr_i = function() {
        var t = new eui.List;
        return this.list_attr = t,
        t.height = 190,
        t.width = 242,
        t.x = 34,
        t.y = 106,
        t.layout = this._VerticalLayout2_i(),
        t
    },
    i._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 9,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "pet_introduce_panel_title_attr_png",
        t.width = 112,
        t.x = 25,
        t.y = 54,
        t
    },
    i.txt_attr_i = function() {
        var t = new eui.Label;
        return this.txt_attr = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 46,
        t.text = "2648",
        t.textColor = 16317951,
        t.touchEnabled = !1,
        t.x = 153,
        t.y = 49,
        t
    },
    i.btnSpec_i = function() {
        var t = new eui.Image;
        return this.btnSpec = t,
        t.height = 84,
        t.horizontalCenter = 160,
        t.source = "pet_introduce_panel_btnSpec_png",
        t.width = 84,
        t.y = 531,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.right = 10,
        t.source = "pet_introduce_panel_btnClose_png",
        t.width = 56,
        t.y = 3,
        t
    },
    i.grp_name_i = function() {
        var t = new eui.Group;
        return this.grp_name = t,
        t.horizontalCenter = -13,
        t.y = 20,
        t.elementsContent = [this.namebg_i(), this.txt_petName_i(), this.txt_petAttr_i(), this.img_petAttr_i()],
        t
    },
    i.namebg_i = function() {
        var t = new eui.Image;
        return this.namebg = t,
        t.height = 73,
        t.source = "pet_introduce_panel_namebg_png",
        t.width = 328,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_petName_i = function() {
        var t = new eui.Label;
        return this.txt_petName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 24,
        t.text = "精灵名字最长十个字数",
        t.textColor = 15332095,
        t.touchEnabled = !1,
        t.x = 71,
        t.y = 15,
        t
    },
    i.txt_petAttr_i = function() {
        var t = new eui.Label;
        return this.txt_petAttr = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "精灵属性",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 76,
        t.y = 45,
        t
    },
    i.img_petAttr_i = function() {
        var t = new eui.Image;
        return this.img_petAttr = t,
        t.height = 33,
        t.source = "pet_introduce_panel_img_petAttr_png",
        t.width = 30,
        t.x = 20,
        t.y = 21,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetIntroduceSkillItemSkin.exml"] = window.PetIntroduceSkillItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["prop", "txt_skillName", "txt_power", "txt_pp", "tag", "txt_tag"],
        this.height = 65,
        this.width = 300,
        this.elementsContent = [this._Image1_i(), this.prop_i(), this.txt_skillName_i(), this.txt_power_i(), this.txt_pp_i(), this.tag_i(), this.txt_tag_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 65,
        t.source = "pet_introduce_skill_item_skillbg_png",
        t.width = 278,
        t.x = 0,
        t.y = 0,
        t
    },
    i.prop_i = function() {
        var t = new eui.Image;
        return this.prop = t,
        t.horizontalCenter = -116.5,
        t.verticalCenter = 0,
        t
    },
    i.txt_skillName_i = function() {
        var t = new eui.Label;
        return this.txt_skillName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "技能名称有最多十个字",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 71,
        t.y = 7,
        t
    },
    i.txt_power_i = function() {
        var t = new eui.Label;
        return this.txt_power = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "威力：200",
        t.textColor = 11133439,
        t.touchEnabled = !1,
        t.x = 70,
        t.y = 40,
        t
    },
    i.txt_pp_i = function() {
        var t = new eui.Label;
        return this.txt_pp = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "PP：20",
        t.textColor = 11133439,
        t.touchEnabled = !1,
        t.x = 172,
        t.y = 40,
        t
    },
    i.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.height = 65,
        t.source = "pet_introduce_skill_item_tagbg_png",
        t.visible = !0,
        t.width = 22,
        t.x = 278,
        t.y = 0,
        t
    },
    i.txt_tag_i = function() {
        var t = new eui.Label;
        return this.txt_tag = t,
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "第五",
        t.textColor = 11987455,
        t.touchEnabled = !1,
        t.visible = !1,
        t.width = 16,
        t.x = 281,
        t.y = 14,
        t
    },
    e
} (eui.Skin);