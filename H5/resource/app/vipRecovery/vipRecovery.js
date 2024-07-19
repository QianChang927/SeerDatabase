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
vipRecovery; !
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this,
            t = new i,
            n = PopViewManager.createDefaultStyleObject();
            n.caller = this,
            n.clickMaskHandler = function() {
                t.hide(),
                e.onClose()
            },
            PopViewManager.getInstance().openView(t, n)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.VipRecovery = t,
    __reflect(t.prototype, "vipRecovery.VipRecovery");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "ViprecoverySkin",
            t
        }
        return __extends(t, e),
        t.prototype.initialized = function() {
            this.imgeCheckGou.visible = !1;
            var t = core.manager.BitBuffSetManager.getInstance().getValueByID(9);
            t && (MainManager.actorInfo.isVip ? this.imgeCheckGou.visible = !0 : (core.manager.BitBuffSetManager.getInstance().setValueID(9, 0), this.imgeCheckGou.visible = !1)),
            e.prototype.initialized.call(this)
        },
        t.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.btnCure, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.btnAutoCure, this.onTouchIamgeButtonHandler, this)
        },
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.setData = function(t) {
            e.prototype.setData.call(this, t)
        },
        t.prototype.onChangecheck = function() {
            this.setAutoCure()
        },
        t.prototype.onTouchIamgeButtonHandler = function(e) {
            switch (e.target) {
            case this.btnClose:
                this.hide(),
                ModuleManager.hideModule("vipRecovery.VipRecovery");
                break;
            case this.btnCure:
                StatLogger.log("20240705版本系统功能", "20240705精灵背包", "点击精灵治疗面板【全体恢复】按钮"),
                PetManager.infos.length + PetManager.secondInfos.length > 0 && PetManager.cureAll(!0, !0, !0);
                break;
            case this.btnAutoCure:
                StatLogger.log("20240705版本系统功能", "20240705精灵背包", "点击精灵治疗面板【自动恢复】按钮"),
                this.setAutoCure()
            }
        },
        t.prototype.setAutoCure = function() {
            var e = this;
            if (MainManager.actorInfo.isVip) {
                var t, i = 1 == core.manager.BitBuffSetManager.getInstance().getValueByID(9) ? !0 : !1;
                t = i ? 0 : 1,
                core.manager.BitBuffSetManager.getInstance().setValueIDAsync(9, t).then(function() {
                    1 == t && PetManager.updateBagInfo(),
                    e.imgeCheckGou.visible = !i;
                    var n = 1 == t ? "开启": "关闭";
                    BubblerManager.getInstance().showText("已成功" + n + "自动恢复功能!")
                })
            } else BubblerManager.getInstance().showText("很抱歉，该特权仅限VIP用户使用！")
        },
        t.prototype.chooseFun = function(e, t) {
            this.hide(),
            ModuleManager.hideModule("vipRecovery.VipRecovery")
        },
        t
    } (PopView);
    e.vipRecoveryPopView = i,
    __reflect(i.prototype, "vipRecovery.vipRecoveryPopView")
} (vipRecovery || (vipRecovery = {}));
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
generateEUI.paths["resource/eui_skins/ViprecoverySkin.exml"] = window.ViprecoverySkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgTitleBG", "imgBg", "txtTitledesc", "txtTitle", "txtQuanti", "btnCure", "txtZhiNeng", "btnAutoCure", "grpBtns", "imgeCheckBg", "imgeCheckGou", "imgTitle", "btnClose", "grpUI"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.imgTitleBG_i(), this.grpUI_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "common_dialog_s9_pop_bg4_png",
        e.x = 328,
        e.y = 178,
        e
    },
    i.imgTitleBG_i = function() {
        var e = new eui.Image;
        return this.imgTitleBG = e,
        e.source = "viprecovery_imgtitlebg_png",
        e.x = 328,
        e.y = 178,
        e
    },
    i.grpUI_i = function() {
        var e = new eui.Group;
        return this.grpUI = e,
        e.x = 330,
        e.y = 178,
        e.elementsContent = [this.imgBg_i(), this.txtTitledesc_i(), this.txtTitle_i(), this.grpBtns_i(), this.imgeCheckBg_i(), this.imgeCheckGou_i(), this.imgTitle_i(), this.btnClose_i()],
        e
    },
    i.imgBg_i = function() {
        var e = new eui.Image;
        return this.imgBg = e,
        e.source = "viprecovery_imgbg_png",
        e.x = 0,
        e.y = 34,
        e
    },
    i.txtTitledesc_i = function() {
        var e = new eui.Label;
        return this.txtTitledesc = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "开启后自动恢复所有精灵状态",
        e.textColor = 13820671,
        e.x = 228,
        e.y = 104,
        e
    },
    i.txtTitle_i = function() {
        var e = new eui.Label;
        return this.txtTitle = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 25,
        e.size = 18,
        e.text = "VIP专享特权：\n",
        e.textColor = 4187130,
        e.width = 139,
        e.x = 272,
        e.y = 74,
        e
    },
    i.grpBtns_i = function() {
        var e = new eui.Group;
        return this.grpBtns = e,
        e.x = 249,
        e.y = 148,
        e.elementsContent = [this.btnCure_i(), this.btnAutoCure_i()],
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Group;
        return this.btnCure = e,
        e.x = 28,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.txtQuanti_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_blue_png",
        e.width = 134,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtQuanti_i = function() {
        var e = new eui.Label;
        return this.txtQuanti = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "全体恢复",
        e.textColor = 2975915,
        e.x = 23,
        e.y = 12,
        e
    },
    i.btnAutoCure_i = function() {
        var e = new eui.Group;
        return this.btnAutoCure = e,
        e.x = 0,
        e.y = 55,
        e.elementsContent = [this._Image3_i(), this.txtZhiNeng_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_yellow_png",
        e.width = 134,
        e.x = 28,
        e.y = 0,
        e
    },
    i.txtZhiNeng_i = function() {
        var e = new eui.Label;
        return this.txtZhiNeng = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "自动恢复",
        e.textColor = 10181146,
        e.x = 51,
        e.y = 12,
        e
    },
    i.imgeCheckBg_i = function() {
        var e = new eui.Image;
        return this.imgeCheckBg = e,
        e.source = "viprecovery_imgcheckbg_png",
        e.x = 250,
        e.y = 215,
        e
    },
    i.imgeCheckGou_i = function() {
        var e = new eui.Image;
        return this.imgeCheckGou = e,
        e.source = "viprecovery_imggou_png",
        e.x = 253,
        e.y = 220,
        e
    },
    i.imgTitle_i = function() {
        var e = new eui.Image;
        return this.imgTitle = e,
        e.source = "viprecovery_imgtitle_png",
        e.x = 32,
        e.y = 1,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 437,
        e.y = 0,
        e
    },
    t
} (eui.Skin);