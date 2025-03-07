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
petBagAbilityInfoPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            return t && (i.petinfo = t),
            i.openPanel(),
            i
        }
        return __extends(i, e),
        i.prototype.openPanel = function() {
            egret.registerClass;
            egret.getDefinitionByName("petBagAbilityInfoPanel.PetBagAbilityInfoPopPanel");
            try {
                this._view = new t.PetBagAbilityInfoPopPanel(this.petinfo),
                this._view.addEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this);
                var e = PopViewManager.createDefaultStyleObject();
                e.maskShapeStyle.maskAlpha = 0,
                e.caller = this._view,
                PopViewManager.getInstance().openView(this._view, e, this.petinfo)
            } catch(i) {
                console.error(i)
            }
        },
        i.prototype._onClosePanelEvent = function(t) {
            this.onClose()
        },
        i.prototype.destroy = function() {
            this._view.removeEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this),
            this._view = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PetBagAbilityInfoPanel = e,
    __reflect(e.prototype, "petBagAbilityInfoPanel.PetBagAbilityInfoPanel")
} (petBagAbilityInfoPanel || (petBagAbilityInfoPanel = {}));
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
petBagAbilityInfoPanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.TYPE_NAMES = ["normal", "pvp", "pve"],
            i.ATT_NAMES = ["hp", "attack", "defence", "s_a", "s_d", "speed"],
            e && (i.petinfo = e),
            i.skinName = PetbagabilityinfoSkin,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.rb_hp.group.selectedValue = 1,
            this.rb_hp.selected = !0,
            this.attType = 0,
            this.addEvent()
        },
        e.prototype.destroy = function() {
            this.removeEvents(),
            t.prototype.destroy.call(this)
        },
        e.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchTapImageButton, this),
            this.rb_hp.group.addEventListener(egret.Event.CHANGE, this.changeHandle, this)
        },
        e.prototype.changeHandle = function(t) {
            this.attType = this.rb_hp.group.selectedValue - 1
        },
        Object.defineProperty(e.prototype, "attType", {
            get: function() {
                return this._attType
            },
            set: function(t) {
                var e = this;
                this._attType = t,
                this.normaltotal.text = this.petinfo["base_" + this.ATT_NAMES[this.attType] + "_total"],
                this.pvetotal.text = this.petinfo["pve_" + this.ATT_NAMES[this.attType] + "_total"],
                this.pvptotal.text = this.petinfo["pvp_" + this.ATT_NAMES[this.attType] + "_total"],
                SocketConnection.sendWithPromise(43325, [this.petinfo.catchTime, this.attType + 1]).then(function(t) {
                    for (var i = t.data,
                    n = i.readUnsignedInt(), r = 0; n > r; r++) for (var o = i.readUnsignedInt(), a = 0; o > a; a++) if (e[e.TYPE_NAMES[r] + "Txt_" + a]) {
                        var s = i.readUnsignedInt(),
                        _ = i.readUnsignedInt();
                        e[e.TYPE_NAMES[r] + "Txt_" + a].visible = !0,
                        e[e.TYPE_NAMES[r] + "t" + a].visible = !0,
                        0 == s && 0 == _ ? (e[e.TYPE_NAMES[r] + "Txt_" + a].text = "无", (8 == a || 9 == a) && (e[e.TYPE_NAMES[r] + "Txt_" + a].visible = !1, e[e.TYPE_NAMES[r] + "t" + a].visible = !1)) : 0 != s ? e[e.TYPE_NAMES[r] + "Txt_" + a].text = "+" + s + (0 == _ ? "": ", +" + _ + "%") : 0 == s && (e[e.TYPE_NAMES[r] + "Txt_" + a].text = "+" + _ + "%")
                    } else i.readUnsignedInt(),
                    i.readUnsignedInt()
                })
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.removeEvents = function() {
            this.rb_hp.group.removeEventListener(egret.Event.CHANGE, this.changeHandle, this),
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.btnClose:
                this.hide(),
                this.dispatchEventWith("event_close_panel")
            }
        },
        e
    } (PopView);
    t.PetBagAbilityInfoPopPanel = e,
    __reflect(e.prototype, "petBagAbilityInfoPanel.PetBagAbilityInfoPopPanel")
} (petBagAbilityInfoPanel || (petBagAbilityInfoPanel = {}));
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
generateEUI.paths["resource/eui_skins/PetbagabilityinfoSkin.exml"] = window.PetbagabilityinfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["texture_left", "title", "panel", "rb_hp", "rb_attack", "rb_defence", "rb_sa", "rb_sd", "rb_speed", "rbg_attName", "txtTip", "txtBg2", "totalBg2", "normaltotalTip", "normaltotal", "normalt0", "normalTxt_0", "normalTxt0", "normalt1", "normalTxt_1", "normalTxt1", "normalt2", "normalTxt_2", "normalTxt2", "normalt3", "normalTxt_3", "normalTxt3", "normalt4", "normalTxt_4", "normalTxt4", "normalt6", "normalTxt_6", "normalTxt5", "normalt7", "normalTxt_7", "normalTxt6", "normalt9", "normalTxt_9", "normalTxt7", "normal", "txtBg1", "totalBg1", "pvetotalTip", "pvetotal", "pvet5", "pveTxt_5", "pveTxt0", "pvet6", "pveTxt_6", "pveTxt1", "pvet7", "pveTxt_7", "pveTxt2", "pvet9", "pveTxt_9", "pveTxt3", "pvet8", "pveTxt_8", "pveTxt4", "pve", "txtBg", "totalBg", "pvptotalTip", "pvptotal", "pvpt6", "pvpTxt_6", "pvpTxt0", "pvpt7", "pvpTxt_7", "pvpTxt1", "pvpt9", "pvpTxt_9", "pvpTxt2", "pvp", "btnClose"],
        this.height = 462,
        this.width = 778,
        this.elementsContent = [this.panel_i(), this.rbg_attName_i(), this.txtTip_i(), this.normal_i(), this.pve_i(), this.pvp_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfohp_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfohp_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfoattack_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfoattack_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfodefence_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfodefence_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfosa_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfosa_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfosd_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfosd_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfospeed_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PetBagAbilityInfospeed_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    _ = e.prototype;
    return _.panel_i = function() {
        var t = new eui.Group;
        return this.panel = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.texture_left_i(), this._Image3_i(), this.title_i()],
        t
    },
    _._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 462,
        t.source = "common_s9_pop_bg1_png",
        t.visible = !1,
        t.width = 778,
        t.x = 0,
        t.y = 0,
        t
    },
    _._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 594,
        t.x = 174,
        t.y = 32,
        t
    },
    _.texture_left_i = function() {
        var t = new eui.Image;
        return this.texture_left = t,
        t.height = 403,
        t.source = "common_s9_pop_bg3_png",
        t.width = 163,
        t.x = 15,
        t.y = 36,
        t
    },
    _._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_title_medium_png",
        t.x = 16,
        t.y = 13,
        t
    },
    _.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "PetBagAbilityInfo_title_png",
        t.x = 49,
        t.y = 19,
        t
    },
    _.rbg_attName_i = function() {
        var t = new eui.Group;
        return this.rbg_attName = t,
        t.x = 21,
        t.y = 72,
        t.elementsContent = [this.rb_hp_i(), this.rb_attack_i(), this.rb_defence_i(), this.rb_sa_i(), this.rb_sd_i(), this.rb_speed_i()],
        t
    },
    _.rb_hp_i = function() {
        var t = new eui.RadioButton;
        return this.rb_hp = t,
        t.value = "1",
        t.x = -3,
        t.y = -4,
        t.skinName = i,
        t
    },
    _.rb_attack_i = function() {
        var t = new eui.RadioButton;
        return this.rb_attack = t,
        t.value = "2",
        t.x = -3,
        t.y = 50,
        t.skinName = n,
        t
    },
    _.rb_defence_i = function() {
        var t = new eui.RadioButton;
        return this.rb_defence = t,
        t.value = "3",
        t.x = -3,
        t.y = 104,
        t.skinName = r,
        t
    },
    _.rb_sa_i = function() {
        var t = new eui.RadioButton;
        return this.rb_sa = t,
        t.value = "4",
        t.x = -3,
        t.y = 158,
        t.skinName = o,
        t
    },
    _.rb_sd_i = function() {
        var t = new eui.RadioButton;
        return this.rb_sd = t,
        t.value = "5",
        t.x = -3,
        t.y = 212,
        t.skinName = a,
        t
    },
    _.rb_speed_i = function() {
        var t = new eui.RadioButton;
        return this.rb_speed = t,
        t.value = "6",
        t.x = -3,
        t.y = 266,
        t.skinName = s,
        t
    },
    _.txtTip_i = function() {
        var t = new eui.Label;
        return this.txtTip = t,
        t.anchorOffsetX = 0,
        t.size = 16,
        t.text = "基础值是在PVE和PVP玩法下都会生效的数值；PVE值是基础值加上仅在PVE玩法下生效的加成；PVP值为基础值加上仅有的PVP玩法下生效的加成。",
        t.textColor = 3492213,
        t.width = 552,
        t.x = 198,
        t.y = 395,
        t
    },
    _.normal_i = function() {
        var t = new eui.Group;
        return this.normal = t,
        t.x = 189,
        t.y = 73,
        t.elementsContent = [this.txtBg2_i(), this.totalBg2_i(), this.normaltotalTip_i(), this.normaltotal_i(), this.normalTxt0_i(), this.normalTxt1_i(), this.normalTxt2_i(), this.normalTxt3_i(), this.normalTxt4_i(), this.normalTxt5_i(), this.normalTxt6_i(), this.normalTxt7_i()],
        t
    },
    _.txtBg2_i = function() {
        var t = new eui.Image;
        return this.txtBg2 = t,
        t.height = 312,
        t.source = "PetBagAbilityInfo_txtBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 0,
        t
    },
    _.totalBg2_i = function() {
        var t = new eui.Image;
        return this.totalBg2 = t,
        t.height = 34,
        t.source = "PetBagAbilityInfo_totalBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 0,
        t
    },
    _.normaltotalTip_i = function() {
        var t = new eui.Label;
        return this.normaltotalTip = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "基础总值：",
        t.textColor = 16773477,
        t.x = 8,
        t.y = 9,
        t
    },
    _.normaltotal_i = function() {
        var t = new eui.Label;
        return this.normaltotal = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "9999",
        t.textColor = 16773477,
        t.x = 100,
        t.y = 9,
        t
    },
    _.normalTxt0_i = function() {
        var t = new eui.Group;
        return this.normalTxt0 = t,
        t.x = 9,
        t.y = 48,
        t.elementsContent = [this.normalt0_i(), this.normalTxt_0_i()],
        t
    },
    _.normalt0_i = function() {
        var t = new eui.Label;
        return this.normalt0 = t,
        t.size = 16,
        t.text = "学习力：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.normalTxt_0_i = function() {
        var t = new eui.Label;
        return this.normalTxt_0 = t,
        t.size = 16,
        t.text = "+999",
        t.textColor = 3492213,
        t.x = 64,
        t.y = 2,
        t
    },
    _.normalTxt1_i = function() {
        var t = new eui.Group;
        return this.normalTxt1 = t,
        t.x = 8,
        t.y = 81,
        t.elementsContent = [this.normalt1_i(), this.normalTxt_1_i()],
        t
    },
    _.normalt1_i = function() {
        var t = new eui.Label;
        return this.normalt1 = t,
        t.size = 16,
        t.text = "刻印：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.normalTxt_1_i = function() {
        var t = new eui.Label;
        return this.normalTxt_1 = t,
        t.size = 16,
        t.text = "+999",
        t.textColor = 3492213,
        t.x = 50,
        t.y = 2,
        t
    },
    _.normalTxt2_i = function() {
        var t = new eui.Group;
        return this.normalTxt2 = t,
        t.x = 9,
        t.y = 114,
        t.elementsContent = [this.normalt2_i(), this.normalTxt_2_i()],
        t
    },
    _.normalt2_i = function() {
        var t = new eui.Label;
        return this.normalt2 = t,
        t.size = 16,
        t.text = "战队加成：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.normalTxt_2_i = function() {
        var t = new eui.Label;
        return this.normalTxt_2 = t,
        t.size = 16,
        t.text = "+999",
        t.textColor = 3492213,
        t.x = 79,
        t.y = 0,
        t
    },
    _.normalTxt3_i = function() {
        var t = new eui.Group;
        return this.normalTxt3 = t,
        t.x = 8,
        t.y = 147,
        t.elementsContent = [this.normalt3_i(), this.normalTxt_3_i()],
        t
    },
    _.normalt3_i = function() {
        var t = new eui.Label;
        return this.normalt3 = t,
        t.size = 16,
        t.text = "称号加成：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.normalTxt_3_i = function() {
        var t = new eui.Label;
        return this.normalTxt_3 = t,
        t.size = 16,
        t.text = "+999",
        t.textColor = 3492213,
        t.x = 80,
        t.y = 2,
        t
    },
    _.normalTxt4_i = function() {
        var t = new eui.Group;
        return this.normalTxt4 = t,
        t.x = 8,
        t.y = 179,
        t.elementsContent = [this.normalt4_i(), this.normalTxt_4_i()],
        t
    },
    _.normalt4_i = function() {
        var t = new eui.Label;
        return this.normalt4 = t,
        t.size = 16,
        t.text = "年费加成：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.normalTxt_4_i = function() {
        var t = new eui.Label;
        return this.normalTxt_4 = t,
        t.size = 16,
        t.text = "+999",
        t.textColor = 3492213,
        t.x = 80,
        t.y = 0,
        t
    },
    _.normalTxt5_i = function() {
        var t = new eui.Group;
        return this.normalTxt5 = t,
        t.x = 9,
        t.y = 212,
        t.elementsContent = [this.normalt6_i(), this.normalTxt_6_i()],
        t
    },
    _.normalt6_i = function() {
        var t = new eui.Label;
        return this.normalt6 = t,
        t.size = 16,
        t.text = "专属加成：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.normalTxt_6_i = function() {
        var t = new eui.Label;
        return this.normalTxt_6 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 3492213,
        t.x = 79,
        t.y = 2,
        t
    },
    _.normalTxt6_i = function() {
        var t = new eui.Group;
        return this.normalTxt6 = t,
        t.x = 9,
        t.y = 245,
        t.elementsContent = [this.normalt7_i(), this.normalTxt_7_i()],
        t
    },
    _.normalt7_i = function() {
        var t = new eui.Label;
        return this.normalt7 = t,
        t.size = 16,
        t.text = "装扮加成：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.normalTxt_7_i = function() {
        var t = new eui.Label;
        return this.normalTxt_7 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 3492213,
        t.x = 79,
        t.y = 2,
        t
    },
    _.normalTxt7_i = function() {
        var t = new eui.Group;
        return this.normalTxt7 = t,
        t.x = 8,
        t.y = 278,
        t.elementsContent = [this.normalt9_i(), this.normalTxt_9_i()],
        t
    },
    _.normalt9_i = function() {
        var t = new eui.Label;
        return this.normalt9 = t,
        t.size = 16,
        t.text = "特殊加成：",
        t.textColor = 39935,
        t.x = 0,
        t.y = 0,
        t
    },
    _.normalTxt_9_i = function() {
        var t = new eui.Label;
        return this.normalTxt_9 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 39935,
        t.x = 80,
        t.y = 2,
        t
    },
    _.pve_i = function() {
        var t = new eui.Group;
        return this.pve = t,
        t.x = 382,
        t.y = 73,
        t.elementsContent = [this.txtBg1_i(), this.totalBg1_i(), this.pvetotalTip_i(), this.pvetotal_i(), this.pveTxt0_i(), this.pveTxt1_i(), this.pveTxt2_i(), this.pveTxt3_i(), this.pveTxt4_i()],
        t
    },
    _.txtBg1_i = function() {
        var t = new eui.Image;
        return this.txtBg1 = t,
        t.height = 312,
        t.source = "PetBagAbilityInfo_txtBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 0,
        t
    },
    _.totalBg1_i = function() {
        var t = new eui.Image;
        return this.totalBg1 = t,
        t.height = 34,
        t.source = "PetBagAbilityInfo_totalBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pvetotalTip_i = function() {
        var t = new eui.Label;
        return this.pvetotalTip = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "PVE总值：",
        t.textColor = 16773477,
        t.x = 8,
        t.y = 9,
        t
    },
    _.pvetotal_i = function() {
        var t = new eui.Label;
        return this.pvetotal = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "9999",
        t.textColor = 16773477,
        t.x = 100,
        t.y = 9,
        t
    },
    _.pveTxt0_i = function() {
        var t = new eui.Group;
        return this.pveTxt0 = t,
        t.x = 8,
        t.y = 48,
        t.elementsContent = [this.pvet5_i(), this.pveTxt_5_i()],
        t
    },
    _.pvet5_i = function() {
        var t = new eui.Label;
        return this.pvet5 = t,
        t.size = 16,
        t.text = "道具加成：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pveTxt_5_i = function() {
        var t = new eui.Label;
        return this.pveTxt_5 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 3492213,
        t.x = 80,
        t.y = 2,
        t
    },
    _.pveTxt1_i = function() {
        var t = new eui.Group;
        return this.pveTxt1 = t,
        t.x = 9,
        t.y = 81,
        t.elementsContent = [this.pvet6_i(), this.pveTxt_6_i()],
        t
    },
    _.pvet6_i = function() {
        var t = new eui.Label;
        return this.pvet6 = t,
        t.size = 16,
        t.text = "专属特性：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pveTxt_6_i = function() {
        var t = new eui.Label;
        return this.pveTxt_6 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 3492213,
        t.x = 79,
        t.y = 2,
        t
    },
    _.pveTxt2_i = function() {
        var t = new eui.Group;
        return this.pveTxt2 = t,
        t.x = 9,
        t.y = 114,
        t.elementsContent = [this.pvet7_i(), this.pveTxt_7_i()],
        t
    },
    _.pvet7_i = function() {
        var t = new eui.Label;
        return this.pvet7 = t,
        t.size = 16,
        t.text = "装扮加成：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pveTxt_7_i = function() {
        var t = new eui.Label;
        return this.pveTxt_7 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 3492213,
        t.x = 79,
        t.y = 2,
        t
    },
    _.pveTxt3_i = function() {
        var t = new eui.Group;
        return this.pveTxt3 = t,
        t.x = 8,
        t.y = 147,
        t.elementsContent = [this.pvet9_i(), this.pveTxt_9_i()],
        t
    },
    _.pvet9_i = function() {
        var t = new eui.Label;
        return this.pvet9 = t,
        t.size = 16,
        t.text = "特殊加成：",
        t.textColor = 39935,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pveTxt_9_i = function() {
        var t = new eui.Label;
        return this.pveTxt_9 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 39935,
        t.x = 80,
        t.y = 2,
        t
    },
    _.pveTxt4_i = function() {
        var t = new eui.Group;
        return this.pveTxt4 = t,
        t.x = 8,
        t.y = 179,
        t.elementsContent = [this.pvet8_i(), this.pveTxt_8_i()],
        t
    },
    _.pvet8_i = function() {
        var t = new eui.Label;
        return this.pvet8 = t,
        t.size = 16,
        t.text = "超能加成：",
        t.textColor = 40191,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pveTxt_8_i = function() {
        var t = new eui.Label;
        return this.pveTxt_8 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 40191,
        t.x = 80,
        t.y = 2,
        t
    },
    _.pvp_i = function() {
        var t = new eui.Group;
        return this.pvp = t,
        t.x = 574,
        t.y = 73,
        t.elementsContent = [this.txtBg_i(), this.totalBg_i(), this.pvptotalTip_i(), this.pvptotal_i(), this.pvpTxt0_i(), this.pvpTxt1_i(), this.pvpTxt2_i()],
        t
    },
    _.txtBg_i = function() {
        var t = new eui.Image;
        return this.txtBg = t,
        t.height = 312,
        t.source = "PetBagAbilityInfo_txtBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 0,
        t
    },
    _.totalBg_i = function() {
        var t = new eui.Image;
        return this.totalBg = t,
        t.height = 34,
        t.source = "PetBagAbilityInfo_totalBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pvptotalTip_i = function() {
        var t = new eui.Label;
        return this.pvptotalTip = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "PVP总值：",
        t.textColor = 16773477,
        t.x = 8,
        t.y = 9,
        t
    },
    _.pvptotal_i = function() {
        var t = new eui.Label;
        return this.pvptotal = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "9999",
        t.textColor = 16773477,
        t.x = 100,
        t.y = 9,
        t
    },
    _.pvpTxt0_i = function() {
        var t = new eui.Group;
        return this.pvpTxt0 = t,
        t.x = 9,
        t.y = 48,
        t.elementsContent = [this.pvpt6_i(), this.pvpTxt_6_i()],
        t
    },
    _.pvpt6_i = function() {
        var t = new eui.Label;
        return this.pvpt6 = t,
        t.size = 16,
        t.text = "专属特性：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pvpTxt_6_i = function() {
        var t = new eui.Label;
        return this.pvpTxt_6 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 3492213,
        t.x = 79,
        t.y = 2,
        t
    },
    _.pvpTxt1_i = function() {
        var t = new eui.Group;
        return this.pvpTxt1 = t,
        t.x = 9,
        t.y = 81,
        t.elementsContent = [this.pvpt7_i(), this.pvpTxt_7_i()],
        t
    },
    _.pvpt7_i = function() {
        var t = new eui.Label;
        return this.pvpt7 = t,
        t.size = 16,
        t.text = "装扮加成：",
        t.textColor = 3492213,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pvpTxt_7_i = function() {
        var t = new eui.Label;
        return this.pvpTxt_7 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 3492213,
        t.x = 79,
        t.y = 2,
        t
    },
    _.pvpTxt2_i = function() {
        var t = new eui.Group;
        return this.pvpTxt2 = t,
        t.x = 8,
        t.y = 114,
        t.elementsContent = [this.pvpt9_i(), this.pvpTxt_9_i()],
        t
    },
    _.pvpt9_i = function() {
        var t = new eui.Label;
        return this.pvpt9 = t,
        t.size = 16,
        t.text = "特殊加成：",
        t.textColor = 39935,
        t.x = 0,
        t.y = 0,
        t
    },
    _.pvpTxt_9_i = function() {
        var t = new eui.Label;
        return this.pvpTxt_9 = t,
        t.size = 16,
        t.text = "+999，+99%",
        t.textColor = 39935,
        t.x = 80,
        t.y = 2,
        t
    },
    _.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_1_png",
        t.x = 726,
        t.y = -9,
        t
    },
    e
} (eui.Skin);