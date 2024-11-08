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
fightingPetOrBossInfoPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BossEffectItemSkin,
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
            var t = BossEffectIconController.getRows(this._vo.effectID, this._vo.args);
            this.currentState = "state_" + t;
            var e = BossEffectIconController.getTips(this._vo.effectID, this._vo.args);
            this.buffdec.text = e;
            var i = BossEffectIconController.getIconId(this._vo.effectID, this._vo.args);
            this.buffIcon.source = ClientConfig.getBossEffectIcon(i)
        },
        e.prototype.getVo = function() {
            return this._vo
        },
        e.prototype.destroy = function() {
            this.removeEvents()
        },
        e
    } (eui.ItemRenderer);
    t.BossEffctItem = e,
    __reflect(e.prototype, "fightingPetOrBossInfoPop.BossEffctItem")
} (fightingPetOrBossInfoPop || (fightingPetOrBossInfoPop = {}));
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
fightingPetOrBossInfoPop; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "FightingpetorbossinfoBossSkin",
            t
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            e.prototype.initialized.call(this)
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._myData = t,
            this._petInfo = this._myData.petInfo,
            this._useId = this._myData.userID
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._ary = new eui.ArrayCollection,
            this.scroller_skill.viewport = this.list_skill,
            this.list_skill.itemRenderer = t.BossSkillItem,
            this.list_skill.dataProvider = this._ary,
            this._ary_effect = new eui.ArrayCollection,
            this.scroller_bossEffect.viewport = this.viewport_list,
            this.viewport_list.itemRenderer = t.BossEffctItem,
            this.viewport_list.dataProvider = this._ary_effect,
            this.initView()
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imge_close, this.onTouchIamgeButtonHandler, this),
            this.list_skill.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.list_skill.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this)
        },
        i.prototype._onTouchTapItem = function(t) {
            var e = t.item,
            i = {};
            i.id = e.id,
            tipsPop.TipsPop.openSkillPop(i)
        },
        i.prototype.initView = function() {
            this.imge_head.source = ClientConfig.getPetHeadPath(this._petInfo.id, this._petInfo.catchTime, this._petInfo.skinId),
            this.tx_id.text = String(this._petInfo.id);
            var t = PetXMLInfo.getName(this._petInfo.id);
            this.tx_name.text = t;
            var e = ["无性别", "雄性", "雌性"];
            this.tx_gender.text = e[PetXMLInfo.getPetGender(this._petInfo.id)];
            for (var i = 0; i < this._petInfo.effectList.length; i++) {
                var n = this._petInfo.effectList[i],
                s = BossEffectIconController.getIconId(n.effectID, n.args);
                if (1 == n.status && s >= 0) {
                    this._isHaveAdd = !0,
                    this.updateRenderList_effect();
                    break
                }
            }
            this.noOpenTx2.visible = !this._isHaveAdd,
            this.updateRenderList(),
            this.imgScrollBar.visible = this.imgScrollBarBG.visible = this.scroller_bossEffect.viewport.contentHeight > this.scroller_bossEffect.height,
            this.imgScrollBar.visible && (this.scroller_bossEffect.addEventListener(egret.Event.CHANGE, this.onMove, this), this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller_bossEffect.height / this.viewport_list.height)
        },
        i.prototype.upDateView = function() {},
        i.prototype.onMove = function(t) {
            var e = this.scroller_bossEffect.viewport.scrollV;
            if (0 > e) this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller_bossEffect.height / (this.scroller_bossEffect.viewport.contentHeight - e),
            this.imgScrollBar.y = 35;
            else if (e > this.scroller_bossEffect.viewport.contentHeight - this.scroller_bossEffect.height) this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller_bossEffect.height / (e + this.scroller_bossEffect.height),
            this.imgScrollBar.y = 35 + this.imgScrollBarBG.height - this.imgScrollBar.height;
            else {
                this.imgScrollBar.height = this.imgScrollBarBG.height * this.scroller_bossEffect.height / this.scroller_bossEffect.viewport.contentHeight;
                var i = e / (this.scroller_bossEffect.viewport.contentHeight - this.scroller_bossEffect.height);
                this.imgScrollBar.y = 35 + (this.imgScrollBarBG.height - this.imgScrollBar.height) * i
            }
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.imge_close:
                this.dispatchEventWith("event_close_panel")
            }
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.list_skill.selectedIndex = 0
        },
        i.prototype.updateRender = function() {
            var t = this._parseTileRenderData();
            this._ary.replaceAll(t),
            this._ary.refresh(),
            this.list_skill.validateNow()
        },
        i.prototype._parseTileRenderData = function() {
            for (var t = [], e = this._petInfo, i = 0; i < e.skillArray.length; i++) {
                var n = e.skillArray[i];
                t.push(n)
            }
            return e.hideSKill && e.SKILL_NUM >= 5 && t.push(e.hideSKill),
            t
        },
        i.prototype.updateRenderList_effect = function() {
            this.updateRender_effect(),
            this.viewport_list.selectedIndex = 0
        },
        i.prototype.updateRender_effect = function() {
            var t = this._parseTileRenderData_effect();
            this._ary_effect.replaceAll(t),
            this._ary_effect.refresh(),
            this.viewport_list.validateNow()
        },
        i.prototype._parseTileRenderData_effect = function() {
            for (var t = [], e = this._petInfo, i = 0; i < e.effectList.length; i++) {
                var n = e.effectList[i],
                s = BossEffectIconController.getIconId(n.effectID, n.args);
                1 == n.status && s >= 0 && t.push(n)
            }
            return t.sort(function(t, e) {
                var i = BossEffectIconController.getSort(t.effectID, t.args),
                n = BossEffectIconController.getSort(e.effectID, e.args),
                s = BossEffectIconController.getIconId(t.effectID, t.args),
                r = BossEffectIconController.getIconId(e.effectID, e.args);
                return i == n ? r > s ? -1 : 1 : n > i ? -1 : 1
            }),
            t
        },
        i.prototype.destroy = function() {
            this._myData = null,
            this._petInfo = null,
            this._useId = null,
            this._resistenceinfo = null,
            this._ary = null,
            this.scroller_bossEffect.removeEventListener(egret.Event.CHANGE, this.onMove, this),
            this.arrEff = null,
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.BossInfoIvew = e,
    __reflect(e.prototype, "fightingPetOrBossInfoPop.BossInfoIvew")
} (fightingPetOrBossInfoPop || (fightingPetOrBossInfoPop = {}));
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
fightingPetOrBossInfoPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BossSkillItemSkin,
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
            this._vo = this.data,
            this.tx_skillname.text = this._vo.name;
            var t = SkillXMLInfo.getTypeID(this._vo.id),
            e = "" + t;
            4 == SkillXMLInfo.getCategory(this._vo.id) && (e = "prop"),
            this.type_icon.source = null,
            e && (this.type_icon.source = ClientConfig.getpettypeticon(e));
            var i = SkillXMLInfo.getDamage(this._vo.id);
            this.txtPower.text = "" + i
        },
        e.prototype.getVo = function() {
            return this._vo
        },
        e.prototype.destroy = function() {
            this.removeEvents()
        },
        e
    } (eui.ItemRenderer);
    t.BossSkillItem = e,
    __reflect(e.prototype, "fightingPetOrBossInfoPop.BossSkillItem")
} (fightingPetOrBossInfoPop || (fightingPetOrBossInfoPop = {}));
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
fightingPetOrBossInfoPop; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i._data = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this._data.obj.userID > 0 ? this._view = new t.PetInfoView: PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6 && PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6_JJ && PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6_WILD && PetFightModel.type != PetFightModel.PEAK_JIHAD_3V3 || 0 != this._data.obj.userID ? this._view = new t.BossInfoIvew: this._view = new t.PetInfoView;
            var i = PopViewManager.createDefaultStyleObject();
            i.caller = this._view,
            i.maskShapeStyle.maskAlpha = 0,
            i.clickMaskHandler = function() {
                e._view.hide(),
                e.onClose()
            },
            this._view.addEventListener("event_close_panel",
            function() {
                e._view.hide(),
                e.onClose()
            },
            this),
            "object" == typeof this._data && this._data.isFight ? PopViewManager.getInstance().openView(this._view, i, this._data.obj) : PopViewManager.getInstance().openView(this._view, i, this._data)
        },
        i.prototype.destroy = function() {
            this._data = null,
            this._view && (this._view.hide(), this._view = null),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.FightingPetOrBossInfoPop = e,
    __reflect(e.prototype, "fightingPetOrBossInfoPop.FightingPetOrBossInfoPop")
} (fightingPetOrBossInfoPop || (fightingPetOrBossInfoPop = {}));
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
fightingPetOrBossInfoPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "FightingpetorbossinfoPetSkin",
            e
        }
        return __extends(e, t),
        e.prototype.initialized = function() {
            t.prototype.initialized.call(this)
        },
        e.prototype.setData = function(e) {
            t.prototype.setData.call(this, e),
            this._myData = e,
            this._petInfo = this._myData.petInfo,
            this._useId = this._myData.userID,
            this._resistenceinfo = this._myData.resistenceinfo
        },
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initView()
        },
        e.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imge_close, this.onTouchIamgeButtonHandler, this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.initView = function() {
            var t = this;
            this.imge_head.source = ClientConfig.getPetHeadPath(this._petInfo.id, this._petInfo.catchTime, this._petInfo.skinId),
            this.tx_id.text = String(this._petInfo.id);
            var e = PetXMLInfo.getName(this._petInfo.id);
            this.tx_name.text = e;
            var i = ["无性别", "雄性", "雌性"];
            this.tx_gender.text = i[PetXMLInfo.getPetGender(this._petInfo.id)];
            var n = [],
            s = [];
            if (this._useId == MainManager.actorID) {
                this.tx_nick.text = MainManager.actorInfo.nick,
                this.tx_titleAdd.text = MainManager.actorInfo.curTitle > 0 ? AchieveXMLInfo.getTitle(MainManager.actorInfo.curTitle) : "无";
                for (var r = 0,
                o = MainManager.actorInfo.clothes; r < o.length; r++) {
                    var _ = o[r];
                    s.push(_.id)
                }
                n = SuitXMLInfo.getSuitIDs(s),
                this.tx_suitAdd.text = n[0] > 0 ? SuitXMLInfo.getName(n[0]) : "无"
            } else 0 != this._useId ? UserInfoManager.getInfo(this._useId,
            function(e) {
                UserInfoManager.upDateMoreInfo(e,
                function() {
                    t.tx_nick.text = e.nick,
                    t.tx_titleAdd.text = e.curTitle > 0 ? AchieveXMLInfo.getTitle(e.curTitle) : "无";
                    for (var i = 0,
                    r = e.clothes; i < r.length; i++) {
                        var o = r[i];
                        s.push(o.id)
                    }
                    n = SuitXMLInfo.getSuitIDs(s),
                    t.tx_suitAdd.text = n[0] > 0 ? SuitXMLInfo.getName(n[0]) : "无"
                })
            }) : (this.tx_nick.text = "赛尔小助手", this.tx_titleAdd.text = "无", this.tx_suitAdd.text = "无");
            if (0 != this._resistenceinfo.resist_state) {
                this.noOenresist1.visible = !1,
                this.noOenresist2.visible = !1,
                this.gr_resistence_info.visible = !0,
                this.tx_hurt_0.text = ResistanceSysController.getResistanceByLevel(0, this._resistenceinfo.cirt).present + this._resistenceinfo.cirt_adj + "%",
                this.tx_hurt_1.text = ResistanceSysController.getResistanceByLevel(0, this._resistenceinfo.regular).present + this._resistenceinfo.cirt_adj + "%",
                this.tx_hurt_2.text = ResistanceSysController.getResistanceByLevel(0, this._resistenceinfo.precent).present + this._resistenceinfo.cirt_adj + "%";
                var a, l;
                for (a = 1; 4 > a; a++) l = PetStatusEffectConfig.getName(0, this._resistenceinfo["ctl_" + a + "_idx"]),
                this["tx_title_abnormal_" + (a - 1)].text = "免疫" + l + "：",
                this["tx_abnormal_" + (a - 1)].text = ResistanceSysController.getResistanceByLevel(1, this._resistenceinfo["ctl_" + a]).present + this._resistenceinfo["ctl_" + a + "_adj"] + this._resistenceinfo.resist_all + "%";
                for (a = 1; 4 > a; a++) l = PetStatusEffectConfig.getName(0, this._resistenceinfo["weak_" + a + "_idx"]),
                this["tx_title_abnormal_" + (a + 2)].text = "免疫" + l + "：",
                this["tx_abnormal_" + (a + 2)].text = ResistanceSysController.getResistanceByLevel(1, this._resistenceinfo["weak_" + a]).present + this._resistenceinfo["weak_" + a + "_adj"] + this._resistenceinfo.resist_all + "%";
                if (0 != this._resistenceinfo.resist_all) {
                    var h = "<font color='#ff0000'>全免抗性：</font>",
                    f = "<font color='#ff0000'>" + this._resistenceinfo.resist_all + "%</font>";
                    this.tx_title_abnormal_6.textFlow = (new egret.HtmlTextParser).parse(h),
                    this.tx_abnormal_6.textFlow = (new egret.HtmlTextParser).parse(f)
                } else this.tx_title_abnormal_6.text = "",
                this.tx_abnormal_6.text = ""
            } else this.noOenresist1.visible = !0,
            this.noOenresist2.visible = !0,
            this.gr_resistence_info.visible = !1;
            if (this._isHaveAdd = !1, this.arrEff = [], this._petInfo.effectList.forEach(function(e) {
                var i = EffectIconControl.getIconId(t._petInfo.id, e.effectID, e.args),
                n = EffectIconControl.getIconId(t._petInfo.id, e.effectID);
                if (i > 0) {
                    t._isHaveAdd = !0;
                    var s = EffectIconControl.getConfig(t._petInfo.id, e.effectID, e.args);
                    t.arrEff.push(s)
                } else if (n > 0) {
                    t._isHaveAdd = !0;
                    var r = EffectIconControl.getConfig(t._petInfo.id, e.effectID);
                    t.arrEff.push(r)
                }
            },
            this), !this._isHaveAdd) {
                var c = EffectIconControl.getIconId(this._petInfo.id);
                if (c > 0) {
                    this._isHaveAdd = !0;
                    var u = EffectIconControl.getConfig(this._petInfo.id);
                    this.arrEff.push(u)
                }
            }
            if (this.noOpenTx1.visible = !this._isHaveAdd, this._isHaveAdd) {
                if (this.arrEff[0].to && !FightManager.isFighting) {
                    var g = EffectIconControl.getConfigById(this.arrEff[0].to);
                    g.isShowCome = !0,
                    this.arrEff.push(g)
                }
                var x = 0;
                1 == this.arrEff.length || 0 != this.arrEff.lastIndexOf(this.arrEff[0]) && (x = this.arrEff.lastIndexOf(this.arrEff[0]) - 1, this.arrEff.shift());
                var p = this.arrEff[x];
                x > 0 ? this.imgIcon.source = "pet_eff_desc_panel_icon_strong_png": this.imgIcon.source = "pet_eff_desc_panel_icon_now_png",
                this.groupTag.removeChildren();
                var m = p.kind;
                if (null != m) {
                    var d = m.toString().split(" ").map(Number);
                    for (var y in d) {
                        var b = new eui.Image("tag" + (d[y] + 1) + "_png");
                        this.groupTag.addChild(b)
                    }
                }
                var v = EffectDesManager.transferDesc(p),
                I = v[0],
                w = v[1],
                S = (new egret.HtmlTextParser).parse(I);
                "string" == typeof S ? this.txtIntro.text = S: this.txtIntro.textFlow = S,
                w && w.length ? (this.imgLine.visible = this.txtDescribe.visible = !0, this.txtIntro.parent.addChild(this.imgLine), this.txtIntro.parent.addChild(this.txtDescribe), this.txtDescribe.textFlow = (new egret.HtmlTextParser).parse(EffectDesManager.transferDesArr(w))) : (this.imgLine.visible = this.txtDescribe.visible = !1, 3 == this.txtIntro.parent.numChildren && (this.txtIntro.parent.removeChild(this.imgLine), this.txtIntro.parent.removeChild(this.txtDescribe)))
            }
        },
        e.prototype.upDateView = function() {},
        e.prototype.onTouchIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.imge_close:
                this.dispatchEventWith("event_close_panel")
            }
        },
        e.prototype.destroy = function() {
            this._myData = null,
            this._petInfo = null,
            this._useId = null,
            this._resistenceinfo = null,
            this.arrEff = null,
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.PetInfoView = e,
    __reflect(e.prototype, "fightingPetOrBossInfoPop.PetInfoView")
} (fightingPetOrBossInfoPop || (fightingPetOrBossInfoPop = {}));
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
generateEUI.paths["resource/eui_skins/FightingpetorbossinfoBossSkin.exml"] = window.FightingpetorbossinfoBossSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_pop_bg", "imge_title", "imge_close", "bossInfo_bg", "imge_basic_info_bg", "imge_head", "tx_title_id", "tx_title_name", "tx_title_gender", "tx_id", "tx_name", "tx_gender", "tx_basic_info_title", "gr_basic_info", "imge_skill_bg", "list_skill", "scroller_skill", "tx_skill_title", "gr_skill", "imge_effect_bg", "imgScrollBarBG", "imgScrollBar", "tx_effect_title", "noOpenTx2", "viewport_list", "scroller_bossEffect", "effect", "gr_fightingBossInfo"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.gr_fightingBossInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gr_fightingBossInfo_i = function() {
        var t = new eui.Group;
        return this.gr_fightingBossInfo = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bossInfo_bg_i(), this.gr_basic_info_i(), this.gr_skill_i(), this.effect_i()],
        t
    },
    i.bossInfo_bg_i = function() {
        var t = new eui.Group;
        return this.bossInfo_bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imge_pop_bg_i(), this.imge_title_i(), this.imge_close_i()],
        t
    },
    i.imge_pop_bg_i = function() {
        var t = new eui.Image;
        return this.imge_pop_bg = t,
        t.source = "title_pop_2022_imge_735x431_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_title_i = function() {
        var t = new eui.Image;
        return this.imge_title = t,
        t.source = "fightingpetorbossinfo_boss_imge_title_png",
        t.x = 37,
        t.y = 2,
        t
    },
    i.imge_close_i = function() {
        var t = new eui.Image;
        return this.imge_close = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 712,
        t.y = 0,
        t
    },
    i.gr_basic_info_i = function() {
        var t = new eui.Group;
        return this.gr_basic_info = t,
        t.x = 23,
        t.y = 46,
        t.elementsContent = [this.imge_basic_info_bg_i(), this._Image1_i(), this.imge_head_i(), this.tx_title_id_i(), this.tx_title_name_i(), this.tx_title_gender_i(), this.tx_id_i(), this.tx_name_i(), this.tx_gender_i(), this.tx_basic_info_title_i()],
        t
    },
    i.imge_basic_info_bg_i = function() {
        var t = new eui.Image;
        return this.imge_basic_info_bg = t,
        t.source = "fightingpetorbossinfo_pet_imge_basic_info_bg_png",
        t.x = 122,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "fightingpetorbossinfo_pet_imge_head_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_head_i = function() {
        var t = new eui.Image;
        return this.imge_head = t,
        t.height = 100,
        t.source = "",
        t.width = 100,
        t.x = 1.5,
        t.y = 1.5,
        t
    },
    i.tx_title_id_i = function() {
        var t = new eui.Label;
        return this.tx_title_id = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.size = 15.9871928768001,
        t.text = "精灵ID：",
        t.textColor = 8757203,
        t.width = 114,
        t.x = 136,
        t.y = 32,
        t
    },
    i.tx_title_name_i = function() {
        var t = new eui.Label;
        return this.tx_title_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9871928768001,
        t.text = "精灵名称：",
        t.textColor = 8757203,
        t.x = 136,
        t.y = 57,
        t
    },
    i.tx_title_gender_i = function() {
        var t = new eui.Label;
        return this.tx_title_gender = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9871928768001,
        t.text = "精灵性别：",
        t.textColor = 8757203,
        t.x = 136,
        t.y = 81,
        t
    },
    i.tx_id_i = function() {
        var t = new eui.Label;
        return this.tx_id = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.size = 15.9716984211149,
        t.text = "30000",
        t.textColor = 4187130,
        t.width = 72,
        t.x = 204,
        t.y = 32,
        t
    },
    i.tx_name_i = function() {
        var t = new eui.Label;
        return this.tx_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9716984211149,
        t.text = "最多需要九个字符呢",
        t.textColor = 4187130,
        t.x = 224,
        t.y = 57,
        t
    },
    i.tx_gender_i = function() {
        var t = new eui.Label;
        return this.tx_gender = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9716984211149,
        t.text = "雄性雌性无性别",
        t.textColor = 4187130,
        t.x = 224,
        t.y = 81,
        t
    },
    i.tx_basic_info_title_i = function() {
        var t = new eui.Label;
        return this.tx_basic_info_title = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "基础信息",
        t.textColor = 12834813,
        t.x = 133,
        t.y = 3,
        t
    },
    i.gr_skill_i = function() {
        var t = new eui.Group;
        return this.gr_skill = t,
        t.x = 22,
        t.y = 161,
        t.elementsContent = [this.imge_skill_bg_i(), this.scroller_skill_i(), this.tx_skill_title_i()],
        t
    },
    i.imge_skill_bg_i = function() {
        var t = new eui.Image;
        return this.imge_skill_bg = t,
        t.source = "fightingpetorbossinfo_boss_imge_skill_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.scroller_skill_i = function() {
        var t = new eui.Scroller;
        return this.scroller_skill = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 186,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "auto",
        t.width = 284,
        t.x = 13,
        t.y = 46,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 185,
        t.width = 381,
        t.layout = this._VerticalLayout2_i(),
        t.elementsContent = [this.list_skill_i()],
        t
    },
    i._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 15,
        t.horizontalAlign = "justify",
        t
    },
    i.list_skill_i = function() {
        var t = new eui.List;
        return this.list_skill = t,
        t.anchorOffsetY = 0,
        t.height = 185,
        t.width = 200,
        t.x = -1,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 8,
        t
    },
    i.tx_skill_title_i = function() {
        var t = new eui.Label;
        return this.tx_skill_title = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "所持技能",
        t.textColor = 12834813,
        t.x = 12,
        t.y = 4,
        t
    },
    i.effect_i = function() {
        var t = new eui.Group;
        return this.effect = t,
        t.x = 339,
        t.y = 161,
        t.elementsContent = [this.imge_effect_bg_i(), this.imgScrollBarBG_i(), this.imgScrollBar_i(), this.tx_effect_title_i(), this.noOpenTx2_i(), this.scroller_bossEffect_i()],
        t
    },
    i.imge_effect_bg_i = function() {
        var t = new eui.Image;
        return this.imge_effect_bg = t,
        t.source = "fightingpetorbossinfo_pet_imge_effect_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgScrollBarBG_i = function() {
        var t = new eui.Image;
        return this.imgScrollBarBG = t,
        t.source = "fightingpetorbossinfo_boss_scrollbar_bg_png",
        t.x = 387,
        t.y = 26,
        t
    },
    i.imgScrollBar_i = function() {
        var t = new eui.Image;
        return this.imgScrollBar = t,
        t.source = "fightingpetorbossinfo_boss_scrollbar_png",
        t.x = 387,
        t.y = 26,
        t
    },
    i.tx_effect_title_i = function() {
        var t = new eui.Label;
        return this.tx_effect_title = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "BOSS可见特性",
        t.textColor = 12834813,
        t.x = 11,
        t.y = 4,
        t
    },
    i.noOpenTx2_i = function() {
        var t = new eui.Label;
        return this.noOpenTx2 = t,
        t.fontFamily = "MFShangHei",
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
        t.height = 232,
        t.width = 387,
        t.x = 0,
        t.y = 31,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetY = 0,
        t.height = 232,
        t.y = -1,
        t.elementsContent = [this.viewport_list_i()],
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 231,
        t.width = 384,
        t.x = 2,
        t.y = 0,
        t.layout = this._VerticalLayout3_i(),
        t
    },
    i._VerticalLayout3_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FightingpetorbossinfoPetSkin.exml"] = window.FightingpetorbossinfoPetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_pop_bg", "imge_title", "imge_close", "gr_bg", "imge_head", "imge_basic_info_bg", "tx_title_id", "tx_title_name", "tx_title_gender", "tx_id", "tx_name", "tx_gender", "tx_title_nick", "tx_title_titleAdd", "tx_title_suitAdd", "tx_nick", "tx_titleAdd", "tx_suitAdd", "tx_basic_title", "gr_basic_info", "imge_resistence_bg", "tx_resistence_hurt_title", "tx_resistence_abnormal_title", "noOenresist1", "noOenresist2", "tx_title_hurt_0", "tx_title_hurt_1", "tx_title_hurt_2", "tx_hurt_0", "tx_hurt_1", "tx_hurt_2", "tx_title_abnormal_0", "tx_title_abnormal_1", "tx_title_abnormal_2", "tx_title_abnormal_6", "tx_abnormal_0", "tx_abnormal_1", "tx_abnormal_2", "tx_abnormal_6", "tx_title_abnormal_3", "tx_title_abnormal_4", "tx_title_abnormal_5", "tx_abnormal_3", "tx_abnormal_4", "tx_abnormal_5", "gr_resistence_info", "gr_resistence", "imge_effect_bg", "tx_effect_title", "noOpenTx1", "imgIcon", "groupTag", "txtIntro", "imgLine", "txtDescribe", "scroller", "gr_effect", "gr_fightingpetInfo"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.gr_fightingpetInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gr_fightingpetInfo_i = function() {
        var t = new eui.Group;
        return this.gr_fightingpetInfo = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.gr_bg_i(), this.gr_basic_info_i(), this.gr_resistence_i(), this.gr_effect_i()],
        t
    },
    i.gr_bg_i = function() {
        var t = new eui.Group;
        return this.gr_bg = t,
        t.height = 431,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imge_pop_bg_i(), this.imge_title_i(), this.imge_close_i()],
        t
    },
    i.imge_pop_bg_i = function() {
        var t = new eui.Image;
        return this.imge_pop_bg = t,
        t.source = "title_pop_2022_imge_735x431_bg_png",
        t.width = 753,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_title_i = function() {
        var t = new eui.Image;
        return this.imge_title = t,
        t.source = "fightingpetorbossinfo_pet_imge_title_png",
        t.x = 36,
        t.y = 2,
        t
    },
    i.imge_close_i = function() {
        var t = new eui.Image;
        return this.imge_close = t,
        t.source = "common_pop_btn_close_png",
        t.x = 712,
        t.y = 0,
        t
    },
    i.gr_basic_info_i = function() {
        var t = new eui.Group;
        return this.gr_basic_info = t,
        t.x = 23,
        t.y = 46,
        t.elementsContent = [this._Image1_i(), this.imge_head_i(), this.imge_basic_info_bg_i(), this.tx_title_id_i(), this.tx_title_name_i(), this.tx_title_gender_i(), this.tx_id_i(), this.tx_name_i(), this.tx_gender_i(), this.tx_title_nick_i(), this.tx_title_titleAdd_i(), this.tx_title_suitAdd_i(), this.tx_nick_i(), this.tx_titleAdd_i(), this.tx_suitAdd_i(), this.tx_basic_title_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "fightingpetorbossinfo_pet_imge_head_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_head_i = function() {
        var t = new eui.Image;
        return this.imge_head = t,
        t.height = 100,
        t.width = 100,
        t.x = 1.5,
        t.y = 1.5,
        t
    },
    i.imge_basic_info_bg_i = function() {
        var t = new eui.Image;
        return this.imge_basic_info_bg = t,
        t.source = "fightingpetorbossinfo_pet_imge_basic_info_bg_png",
        t.x = 122,
        t.y = 0,
        t
    },
    i.tx_title_id_i = function() {
        var t = new eui.Label;
        return this.tx_title_id = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.size = 15.9871928768001,
        t.text = "精灵ID：",
        t.textColor = 8757203,
        t.width = 77,
        t.x = 136,
        t.y = 32,
        t
    },
    i.tx_title_name_i = function() {
        var t = new eui.Label;
        return this.tx_title_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9871928768001,
        t.text = "精灵名称：",
        t.textColor = 8757203,
        t.x = 136,
        t.y = 57,
        t
    },
    i.tx_title_gender_i = function() {
        var t = new eui.Label;
        return this.tx_title_gender = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9871928768001,
        t.text = "精灵性别：",
        t.textColor = 8757203,
        t.x = 136,
        t.y = 81,
        t
    },
    i.tx_id_i = function() {
        var t = new eui.Label;
        return this.tx_id = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.size = 15.9716984211149,
        t.text = "30000",
        t.textColor = 4187130,
        t.width = 67,
        t.x = 204,
        t.y = 32,
        t
    },
    i.tx_name_i = function() {
        var t = new eui.Label;
        return this.tx_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9716984211149,
        t.text = "最多需要九个字符呢",
        t.textColor = 4187130,
        t.x = 224,
        t.y = 57,
        t
    },
    i.tx_gender_i = function() {
        var t = new eui.Label;
        return this.tx_gender = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9716984211149,
        t.text = "雄性雌性无性别",
        t.textColor = 4187130,
        t.x = 224,
        t.y = 81,
        t
    },
    i.tx_title_nick_i = function() {
        var t = new eui.Label;
        return this.tx_title_nick = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9871928768001,
        t.text = "所属玩家:  ",
        t.textColor = 8757203,
        t.x = 421,
        t.y = 32,
        t
    },
    i.tx_title_titleAdd_i = function() {
        var t = new eui.Label;
        return this.tx_title_titleAdd = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9871928768001,
        t.text = "当前称号：",
        t.textColor = 8757203,
        t.x = 421,
        t.y = 57,
        t
    },
    i.tx_title_suitAdd_i = function() {
        var t = new eui.Label;
        return this.tx_title_suitAdd = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9871928768001,
        t.text = "当前套装：",
        t.textColor = 8757203,
        t.x = 421,
        t.y = 81,
        t
    },
    i.tx_nick_i = function() {
        var t = new eui.Label;
        return this.tx_nick = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9716984211149,
        t.text = "玩家昵称",
        t.textColor = 4187130,
        t.x = 511,
        t.y = 32,
        t
    },
    i.tx_titleAdd_i = function() {
        var t = new eui.Label;
        return this.tx_titleAdd = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9716984211149,
        t.text = "称号名称",
        t.textColor = 4187130,
        t.x = 510,
        t.y = 57,
        t
    },
    i.tx_suitAdd_i = function() {
        var t = new eui.Label;
        return this.tx_suitAdd = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9716984211149,
        t.text = "套装名称",
        t.textColor = 4187130,
        t.x = 510,
        t.y = 81,
        t
    },
    i.tx_basic_title_i = function() {
        var t = new eui.Label;
        return this.tx_basic_title = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "基础信息",
        t.textColor = 12834813,
        t.x = 133,
        t.y = 3,
        t
    },
    i.gr_resistence_i = function() {
        var t = new eui.Group;
        return this.gr_resistence = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 266,
        t.width = 310,
        t.x = 22,
        t.y = 161,
        t.elementsContent = [this.imge_resistence_bg_i(), this.tx_resistence_hurt_title_i(), this.tx_resistence_abnormal_title_i(), this.noOenresist1_i(), this.noOenresist2_i(), this.gr_resistence_info_i()],
        t
    },
    i.imge_resistence_bg_i = function() {
        var t = new eui.Image;
        return this.imge_resistence_bg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "fightingpetorbossinfo_pet_imge_resistence_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.tx_resistence_hurt_title_i = function() {
        var t = new eui.Label;
        return this.tx_resistence_hurt_title = t,
        t.fontFamily = "REEJI",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "伤害抗性",
        t.textColor = 12834813,
        t.x = 11,
        t.y = 3,
        t
    },
    i.tx_resistence_abnormal_title_i = function() {
        var t = new eui.Label;
        return this.tx_resistence_abnormal_title = t,
        t.fontFamily = "REEJI",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "异常抗性",
        t.textColor = 12834813,
        t.x = 11,
        t.y = 121,
        t
    },
    i.noOenresist1_i = function() {
        var t = new eui.Label;
        return this.noOenresist1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "该精灵尚未开启抗性",
        t.textColor = 8820664,
        t.y = 61,
        t
    },
    i.noOenresist2_i = function() {
        var t = new eui.Label;
        return this.noOenresist2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "该精灵尚未开启抗性",
        t.textColor = 8820664,
        t.y = 186,
        t
    },
    i.gr_resistence_info_i = function() {
        var t = new eui.Group;
        return this.gr_resistence_info = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 259,
        t.width = 306,
        t.x = 0,
        t.elementsContent = [this.tx_title_hurt_0_i(), this.tx_title_hurt_1_i(), this.tx_title_hurt_2_i(), this.tx_hurt_0_i(), this.tx_hurt_1_i(), this.tx_hurt_2_i(), this.tx_title_abnormal_0_i(), this.tx_title_abnormal_1_i(), this.tx_title_abnormal_2_i(), this.tx_title_abnormal_6_i(), this.tx_abnormal_0_i(), this.tx_abnormal_1_i(), this.tx_abnormal_2_i(), this.tx_abnormal_6_i(), this.tx_title_abnormal_3_i(), this.tx_title_abnormal_4_i(), this.tx_title_abnormal_5_i(), this.tx_abnormal_3_i(), this.tx_abnormal_4_i(), this.tx_abnormal_5_i()],
        t
    },
    i.tx_title_hurt_0_i = function() {
        var t = new eui.Label;
        return this.tx_title_hurt_0 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9871928768001,
        t.text = "暴击伤害减免:  ",
        t.textColor = 8757203,
        t.x = 17,
        t.y = 38,
        t
    },
    i.tx_title_hurt_1_i = function() {
        var t = new eui.Label;
        return this.tx_title_hurt_1 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9871928768001,
        t.text = "固定伤害减免：",
        t.textColor = 8757203,
        t.x = 18,
        t.y = 63,
        t
    },
    i.tx_title_hurt_2_i = function() {
        var t = new eui.Label;
        return this.tx_title_hurt_2 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9871928768001,
        t.text = "百分比伤害减免：",
        t.textColor = 8757203,
        t.x = 17,
        t.y = 87,
        t
    },
    i.tx_hurt_0_i = function() {
        var t = new eui.Label;
        return this.tx_hurt_0 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9716984211149,
        t.text = "35%",
        t.textColor = 4187130,
        t.x = 139,
        t.y = 40,
        t
    },
    i.tx_hurt_1_i = function() {
        var t = new eui.Label;
        return this.tx_hurt_1 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9716984211149,
        t.text = "35%",
        t.textColor = 4187130,
        t.x = 139,
        t.y = 64,
        t
    },
    i.tx_hurt_2_i = function() {
        var t = new eui.Label;
        return this.tx_hurt_2 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9716984211149,
        t.text = "35%",
        t.textColor = 4187130,
        t.x = 155,
        t.y = 88,
        t
    },
    i.tx_title_abnormal_0_i = function() {
        var t = new eui.Label;
        return this.tx_title_abnormal_0 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9871928768,
        t.text = "免疫麻痹:  ",
        t.textColor = 8757203,
        t.x = 18,
        t.y = 155,
        t
    },
    i.tx_title_abnormal_1_i = function() {
        var t = new eui.Label;
        return this.tx_title_abnormal_1 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9871928768,
        t.text = "免疫麻痹：",
        t.textColor = 8757203,
        t.x = 18,
        t.y = 179,
        t
    },
    i.tx_title_abnormal_2_i = function() {
        var t = new eui.Label;
        return this.tx_title_abnormal_2 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9871928768,
        t.text = "免疫麻痹：",
        t.textColor = 8757203,
        t.x = 18,
        t.y = 203,
        t
    },
    i.tx_title_abnormal_6_i = function() {
        var t = new eui.Label;
        return this.tx_title_abnormal_6 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9360898817037,
        t.text = "免疫麻痹:  ",
        t.textColor = 8757203,
        t.x = 18,
        t.y = 226,
        t
    },
    i.tx_abnormal_0_i = function() {
        var t = new eui.Label;
        return this.tx_abnormal_0 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9716984211149,
        t.text = "100%",
        t.textColor = 4187130,
        t.x = 105,
        t.y = 155,
        t
    },
    i.tx_abnormal_1_i = function() {
        var t = new eui.Label;
        return this.tx_abnormal_1 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9716984211149,
        t.text = "100%",
        t.textColor = 4187130,
        t.x = 105,
        t.y = 179,
        t
    },
    i.tx_abnormal_2_i = function() {
        var t = new eui.Label;
        return this.tx_abnormal_2 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9716984211149,
        t.text = "100%",
        t.textColor = 4187130,
        t.x = 105,
        t.y = 203,
        t
    },
    i.tx_abnormal_6_i = function() {
        var t = new eui.Label;
        return this.tx_abnormal_6 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9206449539812,
        t.text = "100%",
        t.textColor = 4187130,
        t.x = 105,
        t.y = 227,
        t
    },
    i.tx_title_abnormal_3_i = function() {
        var t = new eui.Label;
        return this.tx_title_abnormal_3 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9871928768,
        t.text = "免疫麻痹:  ",
        t.textColor = 8757203,
        t.x = 168,
        t.y = 155,
        t
    },
    i.tx_title_abnormal_4_i = function() {
        var t = new eui.Label;
        return this.tx_title_abnormal_4 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9871928768,
        t.text = "免疫麻痹：",
        t.textColor = 8757203,
        t.x = 168,
        t.y = 179,
        t
    },
    i.tx_title_abnormal_5_i = function() {
        var t = new eui.Label;
        return this.tx_title_abnormal_5 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9871928768,
        t.text = "免疫麻痹：",
        t.textColor = 8757203,
        t.x = 168,
        t.y = 203,
        t
    },
    i.tx_abnormal_3_i = function() {
        var t = new eui.Label;
        return this.tx_abnormal_3 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9716984211149,
        t.text = "100%",
        t.textColor = 4187130,
        t.x = 256,
        t.y = 155,
        t
    },
    i.tx_abnormal_4_i = function() {
        var t = new eui.Label;
        return this.tx_abnormal_4 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9716984211149,
        t.text = "100%",
        t.textColor = 4187130,
        t.x = 256,
        t.y = 179,
        t
    },
    i.tx_abnormal_5_i = function() {
        var t = new eui.Label;
        return this.tx_abnormal_5 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 15.9716984211149,
        t.text = "100%",
        t.textColor = 4187130,
        t.x = 256,
        t.y = 203,
        t
    },
    i.gr_effect_i = function() {
        var t = new eui.Group;
        return this.gr_effect = t,
        t.x = 339,
        t.y = 161,
        t.elementsContent = [this.imge_effect_bg_i(), this.tx_effect_title_i(), this.noOpenTx1_i(), this.imgIcon_i(), this.groupTag_i(), this.scroller_i()],
        t
    },
    i.imge_effect_bg_i = function() {
        var t = new eui.Image;
        return this.imge_effect_bg = t,
        t.source = "fightingpetorbossinfo_pet_imge_effect_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.tx_effect_title_i = function() {
        var t = new eui.Label;
        return this.tx_effect_title = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "专属特性",
        t.textColor = 12834813,
        t.x = 11,
        t.y = 4,
        t
    },
    i.noOpenTx1_i = function() {
        var t = new eui.Label;
        return this.noOpenTx1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "尚未开启专属特性",
        t.textColor = 8820664,
        t.y = 91,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 25,
        t.width = 23,
        t.x = 8.76,
        t.y = 29.57,
        t
    },
    i.groupTag_i = function() {
        var t = new eui.Group;
        return this.groupTag = t,
        t.height = 26.345,
        t.x = 54.71,
        t.y = 30.06,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.horizontalAlign = "left",
        t.verticalAlign = "middle",
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.height = 175,
        t.width = 382,
        t.x = 4,
        t.y = 59,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.width = 381,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.txtIntro_i(), this.imgLine_i(), this.txtDescribe_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 15,
        t.horizontalAlign = "justify",
        t
    },
    i.txtIntro_i = function() {
        var t = new eui.Label;
        return this.txtIntro = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.textColor = 6388143,
        t
    },
    i.imgLine_i = function() {
        var t = new eui.Image;
        return this.imgLine = t,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(122, 0, 25, 1),
        t.scaleY = 2,
        t.source = "new_mark_tips_2021_11_img1_png",
        t
    },
    i.txtDescribe_i = function() {
        var t = new eui.Label;
        return this.txtDescribe = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 6,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.textColor = 8822740,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/BossEffectItemSkin.exml"] = window.BossEffectItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["buffbg", "buffdec", "buffIcon", "gr_effect_item_1"],
        this.height = 40,
        this.width = 370,
        this.elementsContent = [this.gr_effect_item_1_i()],
        this.states = [new eui.State("state_1", []), new eui.State("state_2", [new eui.SetProperty("buffbg", "source", "fightingpetorbossinfo_boss_buffbg_2_png"), new eui.SetProperty("buffdec", "width", 288), new eui.SetProperty("", "height", 58)]), new eui.State("state_3", [new eui.SetProperty("buffbg", "source", "fightingpetorbossinfo_boss_buffbg_3_png"), new eui.SetProperty("", "height", 81)]), new eui.State("state_4", [new eui.SetProperty("buffbg", "source", "fightingpetorbossinfo_boss_buffbg_4_png"), new eui.SetProperty("", "height", 103)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gr_effect_item_1_i = function() {
        var t = new eui.Group;
        return this.gr_effect_item_1 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.buffbg_i(), this.buffdec_i(), this.buffIcon_i()],
        t
    },
    i.buffbg_i = function() {
        var t = new eui.Image;
        return this.buffbg = t,
        t.source = "fightingpetorbossinfo_boss_buffbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.buffdec_i = function() {
        var t = new eui.Label;
        return this.buffdec = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9977379500579,
        t.text = "文字文字文字文字文字文字文字文字  ",
        t.textColor = 12046079,
        t.verticalCenter = 0,
        t.width = 288,
        t.x = 53,
        t
    },
    i.buffIcon_i = function() {
        var t = new eui.Image;
        return this.buffIcon = t,
        t.source = "fightingpetorbossinfo_boss_bufficon_png",
        t.verticalCenter = 0,
        t.x = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/BossSkillItemSkin.exml"] = window.BossSkillItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["type_icon", "imge_skillbg", "tx_skillname", "txtPower", "txt1", "gr_skill_Item"],
        this.height = 35,
        this.width = 294,
        this.elementsContent = [this.gr_skill_Item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.gr_skill_Item_i = function() {
        var t = new eui.Group;
        return this.gr_skill_Item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this.imge_skillbg_i(), this.tx_skillname_i(), this.txtPower_i(), this.txt1_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 32,
        t.verticalCenter = 0,
        t.width = 32,
        t.x = 0,
        t.elementsContent = [this.type_icon_i()],
        t
    },
    i.type_icon_i = function() {
        var t = new eui.Image;
        return this.type_icon = t,
        t.height = 32,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t.width = 32,
        t
    },
    i.imge_skillbg_i = function() {
        var t = new eui.Image;
        return this.imge_skillbg = t,
        t.source = "fightingpetorbossinfo_boss_imge_skillbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.tx_skillname_i = function() {
        var t = new eui.Label;
        return this.tx_skillname = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9977379500579,
        t.text = "文字文字文字文字  ",
        t.textColor = 12046079,
        t.x = 40,
        t.y = 9,
        t
    },
    i.txtPower_i = function() {
        var t = new eui.Label;
        return this.txtPower = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "35",
        t.textColor = 12046079,
        t.verticalAlign = "middle",
        t.verticalCenter = 0,
        t.x = 244,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "黑体",
        t.size = 14,
        t.text = "威力：",
        t.textColor = 12046079,
        t.verticalCenter = 0,
        t.x = 204,
        t
    },
    e
} (eui.Skin);