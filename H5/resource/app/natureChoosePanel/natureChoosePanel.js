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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
natureChoosePanel; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i._data = t,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this,
            t = new i,
            r = PopViewManager.createDefaultStyleObject();
            r.caller = this,
            r.clickMaskHandler = function() {
                t.hide(),
                e.onClose()
            },
            PopViewManager.getInstance().openView(t, r, this._data)
        },
        t.prototype.destroy = function() {
            this._data = null,
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.NatureChoosePanel = t,
    __reflect(t.prototype, "natureChoosePanel.NatureChoosePanel");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._len = 25,
            t._selctNatureId = -1,
            t.skinName = NatureChoosePanelSkin,
            t
        }
        return __extends(t, e),
        t.prototype.initialized = function() {
            e.prototype.initialized.call(this),
            this.updateView()
        },
        t.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnConfirm, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnClose, this.onTouchImageButton, this);
            for (var e = 1; e <= this._len; e++) {
                var t = this["grp_" + e];
                t.name = "grp_" + e,
                t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchGroupSelect, this)
            }
        },
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this);
            for (var e = 1; e <= this._len; e++) {
                var t = this["grp_" + e];
                t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchGroupSelect, this)
            }
        },
        t.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._myData = t
        },
        t.prototype.onTouchGroupSelect = function(e) {
            var t = e.currentTarget.name;
            this._selctNatureId = ~~t.split("_")[1] - 1,
            this.updateView()
        },
        t.prototype.updateView = function() {
            for (var e = 1; e <= this._len; e++) {
                var t = this["select_" + e];
                t.visible = this._selctNatureId + 1 === e
            }
        },
        t.prototype.onTouchImageButton = function(e) {
            var t = this;
            switch (e.currentTarget) {
            case this.btnConfirm:
                if (this._selctNatureId < 0) return void BubblerManager.getInstance().showText("请选择你想要转化的性格");
                var i = this._myData.petinfo;
                Alert.show("确定要将" + i.name + "转换为" + TextFormatUtil.getRedTxt(NatureXMLInfo.getName(this._selctNatureId)) + "性格吗？",
                function() {
                    t._myData.callBack.apply(t._myData.callBack.call || t._myData.caller, [t._selctNatureId]),
                    t.hide(),
                    ModuleManager.hideModule("natureChoosePanel.NatureChoosePanel")
                });
                break;
            case this.btnClose:
                this.hide(),
                ModuleManager.hideModule("natureChoosePanel.NatureChoosePanel")
            }
        },
        t.prototype.destroy = function() {
            this._myData = null,
            e.prototype.destroy.call(this)
        },
        t
    } (PopView);
    e.ChoosePopView = i,
    __reflect(i.prototype, "natureChoosePanel.ChoosePopView")
} (natureChoosePanel || (natureChoosePanel = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/NatureChoosePanelSkin.exml"] = window.NatureChoosePanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnConfirm", "btnClose", "select_1", "select_2", "select_3", "select_4", "select_9", "select_10", "select_11", "select_12", "select_5", "select_6", "select_7", "select_8", "select_13", "select_14", "select_15", "select_16", "select_21", "select_22", "select_23", "select_24", "select_25", "select_17", "select_18", "select_19", "select_20", "grp_1", "grp_2", "grp_3", "grp_4", "grp_9", "grp_10", "grp_11", "grp_12", "grp_5", "grp_6", "grp_7", "grp_8", "grp_13", "grp_14", "grp_15", "grp_16", "grp_17", "grp_18", "grp_19", "grp_20", "grp_21", "grp_22", "grp_23", "grp_24", "grp_25"],
        this.height = 550,
        this.width = 1005,
        this.elementsContent = [this._Image1_i(), this.btnConfirm_i(), this.btnClose_i(), this.select_1_i(), this.select_2_i(), this.select_3_i(), this.select_4_i(), this.select_9_i(), this.select_10_i(), this.select_11_i(), this.select_12_i(), this.select_5_i(), this.select_6_i(), this.select_7_i(), this.select_8_i(), this.select_13_i(), this.select_14_i(), this.select_15_i(), this.select_16_i(), this.select_21_i(), this.select_22_i(), this.select_23_i(), this.select_24_i(), this.select_25_i(), this.select_17_i(), this.select_18_i(), this.select_19_i(), this.select_20_i(), this.grp_1_i(), this.grp_2_i(), this.grp_3_i(), this.grp_4_i(), this.grp_9_i(), this.grp_10_i(), this.grp_11_i(), this.grp_12_i(), this.grp_5_i(), this.grp_6_i(), this.grp_7_i(), this.grp_8_i(), this.grp_13_i(), this.grp_14_i(), this.grp_15_i(), this.grp_16_i(), this.grp_17_i(), this.grp_18_i(), this.grp_19_i(), this.grp_20_i(), this.grp_21_i(), this.grp_22_i(), this.grp_23_i(), this.grp_24_i(), this.grp_25_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 550,
        e.scale9Grid = new egret.Rectangle(335, 487, 335, 1),
        e.source = "nature_choose_panel_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnConfirm_i = function() {
        var e = new eui.Image;
        return this.btnConfirm = e,
        e.source = "nature_choose_panel_btnconfirm_png",
        e.x = 438,
        e.y = 491,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "nature_choose_panel_btnclose_png",
        e.x = 962,
        e.y = 3,
        e
    },
    i.select_1_i = function() {
        var e = new eui.Image;
        return this.select_1 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 92,
        e
    },
    i.select_2_i = function() {
        var e = new eui.Image;
        return this.select_2 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 122,
        e
    },
    i.select_3_i = function() {
        var e = new eui.Image;
        return this.select_3 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 151,
        e
    },
    i.select_4_i = function() {
        var e = new eui.Image;
        return this.select_4 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 181,
        e
    },
    i.select_9_i = function() {
        var e = new eui.Image;
        return this.select_9 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 91,
        e
    },
    i.select_10_i = function() {
        var e = new eui.Image;
        return this.select_10 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 121,
        e
    },
    i.select_11_i = function() {
        var e = new eui.Image;
        return this.select_11 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 151,
        e
    },
    i.select_12_i = function() {
        var e = new eui.Image;
        return this.select_12 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 181,
        e
    },
    i.select_5_i = function() {
        var e = new eui.Image;
        return this.select_5 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 216,
        e
    },
    i.select_6_i = function() {
        var e = new eui.Image;
        return this.select_6 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 246,
        e
    },
    i.select_7_i = function() {
        var e = new eui.Image;
        return this.select_7 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 276,
        e
    },
    i.select_8_i = function() {
        var e = new eui.Image;
        return this.select_8 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 306,
        e
    },
    i.select_13_i = function() {
        var e = new eui.Image;
        return this.select_13 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 216,
        e
    },
    i.select_14_i = function() {
        var e = new eui.Image;
        return this.select_14 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 246,
        e
    },
    i.select_15_i = function() {
        var e = new eui.Image;
        return this.select_15 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 276,
        e
    },
    i.select_16_i = function() {
        var e = new eui.Image;
        return this.select_16 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 306,
        e
    },
    i.select_21_i = function() {
        var e = new eui.Image;
        return this.select_21 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 342,
        e
    },
    i.select_22_i = function() {
        var e = new eui.Image;
        return this.select_22 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 372,
        e
    },
    i.select_23_i = function() {
        var e = new eui.Image;
        return this.select_23 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 401,
        e
    },
    i.select_24_i = function() {
        var e = new eui.Image;
        return this.select_24 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 431,
        e
    },
    i.select_25_i = function() {
        var e = new eui.Image;
        return this.select_25 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 471,
        e.y = 461,
        e
    },
    i.select_17_i = function() {
        var e = new eui.Image;
        return this.select_17 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 342,
        e
    },
    i.select_18_i = function() {
        var e = new eui.Image;
        return this.select_18 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 372,
        e
    },
    i.select_19_i = function() {
        var e = new eui.Image;
        return this.select_19 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 401,
        e
    },
    i.select_20_i = function() {
        var e = new eui.Image;
        return this.select_20 = e,
        e.height = 12,
        e.source = "nature_choose_panel_select_png",
        e.width = 12,
        e.x = 961,
        e.y = 432,
        e
    },
    i.grp_1_i = function() {
        var e = new eui.Group;
        return this.grp_1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 83,
        e
    },
    i.grp_2_i = function() {
        var e = new eui.Group;
        return this.grp_2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 112,
        e
    },
    i.grp_3_i = function() {
        var e = new eui.Group;
        return this.grp_3 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 142,
        e
    },
    i.grp_4_i = function() {
        var e = new eui.Group;
        return this.grp_4 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 172,
        e
    },
    i.grp_9_i = function() {
        var e = new eui.Group;
        return this.grp_9 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 83,
        e
    },
    i.grp_10_i = function() {
        var e = new eui.Group;
        return this.grp_10 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 113,
        e
    },
    i.grp_11_i = function() {
        var e = new eui.Group;
        return this.grp_11 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 143,
        e
    },
    i.grp_12_i = function() {
        var e = new eui.Group;
        return this.grp_12 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 172,
        e
    },
    i.grp_5_i = function() {
        var e = new eui.Group;
        return this.grp_5 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 210,
        e
    },
    i.grp_6_i = function() {
        var e = new eui.Group;
        return this.grp_6 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 238,
        e
    },
    i.grp_7_i = function() {
        var e = new eui.Group;
        return this.grp_7 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 270,
        e
    },
    i.grp_8_i = function() {
        var e = new eui.Group;
        return this.grp_8 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 297,
        e
    },
    i.grp_13_i = function() {
        var e = new eui.Group;
        return this.grp_13 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 207,
        e
    },
    i.grp_14_i = function() {
        var e = new eui.Group;
        return this.grp_14 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 237,
        e
    },
    i.grp_15_i = function() {
        var e = new eui.Group;
        return this.grp_15 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 267,
        e
    },
    i.grp_16_i = function() {
        var e = new eui.Group;
        return this.grp_16 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 296,
        e
    },
    i.grp_17_i = function() {
        var e = new eui.Group;
        return this.grp_17 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 333.96,
        e
    },
    i.grp_18_i = function() {
        var e = new eui.Group;
        return this.grp_18 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 362.96,
        e
    },
    i.grp_19_i = function() {
        var e = new eui.Group;
        return this.grp_19 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 391.96,
        e
    },
    i.grp_20_i = function() {
        var e = new eui.Group;
        return this.grp_20 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 550,
        e.y = 421.96,
        e
    },
    i.grp_21_i = function() {
        var e = new eui.Group;
        return this.grp_21 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 334,
        e
    },
    i.grp_22_i = function() {
        var e = new eui.Group;
        return this.grp_22 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 363,
        e
    },
    i.grp_23_i = function() {
        var e = new eui.Group;
        return this.grp_23 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 392,
        e
    },
    i.grp_24_i = function() {
        var e = new eui.Group;
        return this.grp_24 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 423,
        e
    },
    i.grp_25_i = function() {
        var e = new eui.Group;
        return this.grp_25 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 28,
        e.width = 433,
        e.x = 60,
        e.y = 452,
        e
    },
    t
} (eui.Skin);