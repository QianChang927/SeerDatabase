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
fightingPetInfoPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = fingInfoAddBossEffectItem,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        e.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(e.prototype, "selected", {
            get: function() {
                return egret.superSetter(e, this, "selected")
            },
            set: function(t) {
                egret.superSetter(e, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.dataChanged = function() {
            this._vo = this.data;
            var t = BossEffectIconController.getTips(this._vo.effectID, this._vo.args);
            this.buffdec.text = t;
            var e = BossEffectIconController.getIconId(this._vo.effectID, this._vo.args);
            this.buffIcon.source = ClientConfig.getBossEffectIcon(e)
        },
        e.prototype.getVo = function() {
            return this._vo
        },
        e.prototype.destroy = function() {
            this.removeEvents()
        },
        e
    } (eui.ItemRenderer);
    t.AddBossEffctItem = e,
    __reflect(e.prototype, "fightingPetInfoPanel.AddBossEffctItem")
} (fightingPetInfoPanel || (fightingPetInfoPanel = {}));
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
fightingPetInfoPanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            n._view = new i;
            var r = PopViewManager.createDefaultStyleObject();
            return r.caller = n._view,
            r.maskShapeStyle.maskAlpha = 0,
            r.clickMaskHandler = n._view.clickMaskHandler,
            n._view.addEventListener("event_close_panel", n._onCloseAll, n),
            "object" == typeof n.data && n.data.isFight ? PopViewManager.getInstance().openView(n._view, r, n.data.obj, n.data.parentCon) : PopViewManager.getInstance().openView(n._view, r, e),
            n
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype._onCloseAll = function() {
            this._view && this._view.hide(),
            this.onClose()
        },
        e.prototype.destroy = function() {
            this._view = null,
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.FightingPetInfoPanel = e,
    __reflect(e.prototype, "fightingPetInfoPanel.FightingPetInfoPanel");
    var i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = FightingPetInfoPanelSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._ary = new eui.ArrayCollection,
            this.scroller_bossEffect.viewport = this.viewport_list,
            this.viewport_list.itemRenderer = t.AddBossEffctItem,
            this.viewport_list.dataProvider = this._ary
        },
        i.prototype._parseData = function() {
            this._userId = this._data.userID,
            this._petInfo = this._data.petInfo;
            var t = this._petInfo;
            if (this._effectInfos = this._data.effectInfos, this._resistenceinfo = this._data.resistenceinfo, 0 != this._userId) {
                for (var e = 0; e < t.effectList.length; e++) {
                    var i = t.effectList[e],
                    n = i.args,
                    r = EffectIconControl.getIconId(t.id, i.effectID, n),
                    s = EffectIconControl.getIconId(t.id, i.effectID);
                    r > 0 ? (this._isHaveAdd = !0, this._desc = EffectIconControl.getTips(t.id, i.effectID, n)) : s > 0 && (this._isHaveAdd = !0, this._desc = EffectIconControl.getTips(t.id, i.effectID))
                }
                if (!this._isHaveAdd) {
                    var o = EffectIconControl.getIconId(t.id);
                    o > 0 && (this._isHaveAdd = !0, this._desc = EffectIconControl.getTips(t.id))
                }
            } else for (var e = 0; e < t.effectList.length; e++) {
                var i = t.effectList[e],
                f = BossEffectIconController.getIconId(i.effectID, i.args);
                if (1 == i.status && f >= 0) {
                    this._isHaveAdd = !0,
                    this.updateRenderList();
                    break
                }
            }
        },
        i.prototype._upDateView = function() {
            this.petName.text = PetXMLInfo.getName(this._petInfo.id);
            for (var t = ["攻击", "防御", "特攻", "特防", "速度", "命中"], e = 0; e < t.length; e++) {
                var i = "" + PetStatusEffectType.TRAIT + "_" + (e + 1),
                n = this._effectInfos[i];
                n ? this["attributeTx_" + e].text = t[e] + String(n.parm >= 6 ? "+": "-") + Math.abs(n.parm - 6) : this["attributeTx_" + e].text = t[e] + "+0"
            }
            if (0 != this._resistenceinfo.resist_state) {
                this.noOenresist.visible = !1;
                var r = "";
                r += "暴击伤害减免：" + (ResistanceSysController.getResistanceByLevel(0, this._resistenceinfo.cirt).present + this._resistenceinfo.cirt_adj) + "%",
                r += "\n固定伤害减免：" + (ResistanceSysController.getResistanceByLevel(0, this._resistenceinfo.regular).present + this._resistenceinfo.cirt_adj) + "%",
                r += "\n百分比伤害减免：" + (ResistanceSysController.getResistanceByLevel(0, this._resistenceinfo.precent).present + this._resistenceinfo.cirt_adj) + "%";
                var e, s;
                for (e = 1; 4 > e; e++) s = PetStatusEffectConfig.getName(0, this._resistenceinfo["ctl_" + e + "_idx"]),
                r += "\n免疫" + s + "：" + (ResistanceSysController.getResistanceByLevel(1, this._resistenceinfo["ctl_" + e]).present + this._resistenceinfo["ctl_" + e + "_adj"] + this._resistenceinfo.resist_all) + "%";
                for (e = 1; 4 > e; e++) s = PetStatusEffectConfig.getName(0, this._resistenceinfo["weak_" + e + "_idx"]),
                r += "\n免疫" + s + "：" + (ResistanceSysController.getResistanceByLevel(1, this._resistenceinfo["weak_" + e]).present + this._resistenceinfo["weak_" + e + "_adj"] + this._resistenceinfo.resist_all) + "%";
                0 != this._resistenceinfo.resist_all && (r += "\n<font color='#ff0000'>全免抗性：" + this._resistenceinfo.resist_all + "%</font>"),
                this.resistanceInfoTx.textFlow = (new egret.HtmlTextParser).parse(r)
            } else this.noOenresist.visible = !0,
            this.resistanceInfoTx.text = "";
            0 != this._userId ? (this.addBossEffects_gr.visible = !1, this.addPetEffect_gr.visible = !0, this.effectDecTx.text = this._desc, this.noOpenTx1.visible = !this._isHaveAdd) : (this.addBossEffects_gr.visible = !0, this.addPetEffect_gr.visible = !1, this.noOpenTx2.visible = !this._isHaveAdd)
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.viewport_list.selectedIndex = 0
        },
        i.prototype.updateRender = function() {
            var t = this._parseTileRenderData();
            this._ary.replaceAll(t),
            this._ary.refresh(),
            this.viewport_list.validateNow()
        },
        i.prototype._parseTileRenderData = function() {
            for (var t = [], e = this._petInfo, i = 0; i < e.effectList.length; i++) {
                var n = e.effectList[i],
                r = BossEffectIconController.getIconId(n.effectID, n.args);
                1 == n.status && r >= 0 && t.push(n)
            }
            return t
        },
        i.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtn_close,
            function() {
                t.clickMaskHandler()
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.clickMaskHandler = function() {
            this.dispatchEventWith("event_close_panel")
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.View = i,
    __reflect(i.prototype, "fightingPetInfoPanel.View")
} (fightingPetInfoPanel || (fightingPetInfoPanel = {}));
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
generateEUI.paths["resource/eui_skins/FightingPetInfoPanelSkin.exml"] = window.FightingPetInfoPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgBtn_close", "petName", "effectDecTx", "noOpenTx1", "addPetEffect_gr", "noOpenTx2", "viewport_list", "scroller_bossEffect", "addBossEffects_gr", "attributeTx_0", "attributeTx_1", "attributeTx_2", "attributeTx_3", "attributeTx_4", "attributeTx_5", "attribute_gr", "resistanceInfoTx", "resistanceInfo_gr", "noOenresist", "resistance_gr", "titlebg3", "title3Tx", "texture_3", "title3_gr", "titlebg2", "title2Tx", "texture_2", "title2_gr", "titlebg1", "title1Tx", "texture_1", "title1_gr"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this.bg_i(), this._Image4_i(), this.imgBtn_close_i(), this.petName_i(), this.addPetEffect_gr_i(), this.addBossEffects_gr_i(), this.attribute_gr_i(), this.resistance_gr_i(), this.title3_gr_i(), this.title2_gr_i(), this.title1_gr_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.source = "common_s9_pop_bg1_png",
        t.visible = !1,
        t.width = 756,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 430,
        t.source = "common_pop_point_png",
        t.width = 753,
        t.x = 11,
        t.y = 31,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_title_samll_png",
        t.width = 744,
        t.x = 15,
        t.y = 12,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.source = "FightInfoUI_uititle_png",
        t.x = 52,
        t.y = 19,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.source = "FightInfoUI_BtnClose_png",
        t.x = 714,
        t.y = 0,
        t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "黑体",
        t.size = 22,
        t.text = "精灵名称精灵名称",
        t.textColor = 3492213,
        t.x = 38,
        t.y = 78,
        t
    },
    i.addPetEffect_gr_i = function() {
        var t = new eui.Group;
        return this.addPetEffect_gr = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 268,
        t.width = 429,
        t.x = 294,
        t.y = 152,
        t.elementsContent = [this._Scroller1_i(), this.noOpenTx1_i()],
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 263,
        t.width = 426,
        t.x = 2,
        t.y = 4,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.width = 425,
        t.elementsContent = [this.effectDecTx_i()],
        t
    },
    i.effectDecTx_i = function() {
        var t = new eui.Label;
        return this.effectDecTx = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "黑体",
        t.height = 336,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "秒杀对手于无形秒杀对手于无形秒杀对手于无形秒杀对手于无形秒杀对手于无形秒杀对手于无形秒杀对手于无形秒杀对手于无形",
        t.textColor = 8820664,
        t.width = 424,
        t.x = 1,
        t.y = 5,
        t
    },
    i.noOpenTx1_i = function() {
        var t = new eui.Label;
        return this.noOpenTx1 = t,
        t.fontFamily = "黑体",
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "尚未开启专属特性",
        t.textColor = 8820664,
        t.y = 91,
        t
    },
    i.addBossEffects_gr_i = function() {
        var t = new eui.Group;
        return this.addBossEffects_gr = t,
        t.anchorOffsetY = 0,
        t.height = 267,
        t.x = 294,
        t.y = 154,
        t.elementsContent = [this.noOpenTx2_i(), this.scroller_bossEffect_i()],
        t
    },
    i.noOpenTx2_i = function() {
        var t = new eui.Label;
        return this.noOpenTx2 = t,
        t.fontFamily = "黑体",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "尚未拥有常态附加效果",
        t.textAlign = "center",
        t.textColor = 8820664,
        t.y = 89,
        t
    },
    i.scroller_bossEffect_i = function() {
        var t = new eui.Scroller;
        return this.scroller_bossEffect = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 266,
        t.width = 429,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetY = 0,
        t.height = 264,
        t.y = -1,
        t.elementsContent = [this.viewport_list_i()],
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 265,
        t.width = 428,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    i.attribute_gr_i = function() {
        var t = new eui.Group;
        return this.attribute_gr = t,
        t.x = 42,
        t.y = 142,
        t.elementsContent = [this.attributeTx_0_i(), this.attributeTx_1_i(), this.attributeTx_2_i(), this.attributeTx_3_i(), this.attributeTx_4_i(), this.attributeTx_5_i()],
        t
    },
    i.attributeTx_0_i = function() {
        var t = new eui.Label;
        return this.attributeTx_0 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "攻击+4",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    i.attributeTx_1_i = function() {
        var t = new eui.Label;
        return this.attributeTx_1 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "防御-2",
        t.textColor = 3492213,
        t.x = 68,
        t.y = 0,
        t
    },
    i.attributeTx_2_i = function() {
        var t = new eui.Label;
        return this.attributeTx_2 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "速度+3",
        t.textColor = 3492213,
        t.x = 133,
        t.y = 0,
        t
    },
    i.attributeTx_3_i = function() {
        var t = new eui.Label;
        return this.attributeTx_3 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "特攻+2",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 23,
        t
    },
    i.attributeTx_4_i = function() {
        var t = new eui.Label;
        return this.attributeTx_4 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "特防-2",
        t.textColor = 3492213,
        t.x = 67,
        t.y = 23,
        t
    },
    i.attributeTx_5_i = function() {
        var t = new eui.Label;
        return this.attributeTx_5 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "命中-8",
        t.textColor = 3492213,
        t.x = 133,
        t.y = 23,
        t
    },
    i.resistance_gr_i = function() {
        var t = new eui.Group;
        return this.resistance_gr = t,
        t.anchorOffsetY = 0,
        t.height = 225,
        t.x = 40,
        t.y = 222,
        t.elementsContent = [this.resistanceInfo_gr_i(), this.noOenresist_i()],
        t
    },
    i.resistanceInfo_gr_i = function() {
        var t = new eui.Group;
        return this.resistanceInfo_gr = t,
        t.anchorOffsetX = 0,
        t.width = 208,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Scroller2_i()],
        t
    },
    i._Scroller2_i = function() {
        var t = new eui.Scroller;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 224,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "auto",
        t.width = 208,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.resistanceInfoTx_i()],
        t
    },
    i.resistanceInfoTx_i = function() {
        var t = new eui.Label;
        return this.resistanceInfoTx = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "黑体",
        t.height = 237,
        t.lineSpacing = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：5%\n属百分比伤害减免：10%",
        t.textColor = 3492213,
        t.width = 209,
        t.x = 0,
        t.y = 0,
        t
    },
    i.noOenresist_i = function() {
        var t = new eui.Label;
        return this.noOenresist = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "尚未开启抗性",
        t.textColor = 8820664,
        t.x = 43,
        t.y = 92,
        t
    },
    i.title3_gr_i = function() {
        var t = new eui.Group;
        return this.title3_gr = t,
        t.x = 28,
        t.y = 191,
        t.elementsContent = [this.titlebg3_i(), this.title3Tx_i(), this.texture_3_i()],
        t
    },
    i.titlebg3_i = function() {
        var t = new eui.Image;
        return this.titlebg3 = t,
        t.source = "FightInfoUI_titlebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.title3Tx_i = function() {
        var t = new eui.Label;
        return this.title3Tx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "精灵抗性",
        t.textColor = 16317183,
        t.x = 14,
        t.y = 4,
        t
    },
    i.texture_3_i = function() {
        var t = new eui.Image;
        return this.texture_3 = t,
        t.source = "FightInfoUI_texture_2_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i.title2_gr_i = function() {
        var t = new eui.Group;
        return this.title2_gr = t,
        t.x = 277,
        t.y = 111,
        t.elementsContent = [this.titlebg2_i(), this.title2Tx_i(), this.texture_2_i()],
        t
    },
    i.titlebg2_i = function() {
        var t = new eui.Image;
        return this.titlebg2 = t,
        t.source = "FightInfoUI_titlebg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.title2Tx_i = function() {
        var t = new eui.Label;
        return this.title2Tx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "附加特效",
        t.textColor = 16317183,
        t.x = 18,
        t.y = 4,
        t
    },
    i.texture_2_i = function() {
        var t = new eui.Image;
        return this.texture_2 = t,
        t.source = "FightInfoUI_texture_2_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i.title1_gr_i = function() {
        var t = new eui.Group;
        return this.title1_gr = t,
        t.x = 28,
        t.y = 111,
        t.elementsContent = [this.titlebg1_i(), this.title1Tx_i(), this.texture_1_i()],
        t
    },
    i.titlebg1_i = function() {
        var t = new eui.Image;
        return this.titlebg1 = t,
        t.source = "FightInfoUI_titlebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.title1Tx_i = function() {
        var t = new eui.Label;
        return this.title1Tx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "属性等级",
        t.textColor = 16317183,
        t.x = 14,
        t.y = 4,
        t
    },
    i.texture_1_i = function() {
        var t = new eui.Image;
        return this.texture_1 = t,
        t.source = "FightInfoUI_texture_2_png",
        t.x = 2,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FingInfoAddBossEffectItem.exml"] = window.fingInfoAddBossEffectItem = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["buffbg", "buffIcon", "buffdec", "buff_gr"],
        this.height = 44,
        this.width = 423,
        this.elementsContent = [this.buff_gr_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.buff_gr_i = function() {
        var t = new eui.Group;
        return this.buff_gr = t,
        t.anchorOffsetX = 0,
        t.width = 422,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.buffbg_i(), this.buffIcon_i(), this.buffdec_i()],
        t
    },
    i.buffbg_i = function() {
        var t = new eui.Image;
        return this.buffbg = t,
        t.source = "FightInfoUI_buffbg_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.buffIcon_i = function() {
        var t = new eui.Image;
        return this.buffIcon = t,
        t.source = "FightInfoUI_buffIcon_png",
        t.x = 9,
        t.y = 4,
        t
    },
    i.buffdec_i = function() {
        var t = new eui.Label;
        return this.buffdec = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "黑体",
        t.height = 37,
        t.size = 18,
        t.text = "特效文字文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文字文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文特效文字文字文字文字文字",
        t.textColor = 3492213,
        t.width = 367,
        t.x = 56,
        t.y = 4,
        t
    },
    e
} (eui.Skin);