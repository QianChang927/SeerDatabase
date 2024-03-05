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
springFestivalSign; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SpringFestivalSignSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateView()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.onClose()
            },
            this),
            ImageButtonUtil.add(this.imgItem1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 300697
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem3,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400154
                })
            },
            this),
            ImageButtonUtil.add(this.btnGetItem,
            function() {
                SocketConnection.sendByQueue(41388, [69, t.currentDay],
                function() {
                    t.updateView()
                })
            },
            this),
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                SocketConnection.sendByQueue(41388, [69, 14],
                function() {
                    t.updateView()
                })
            },
            this),
            EventManager.addEventListener(ModuleEvent.CLOSE_MODULE,
            function() {
                ModuleManager.currModule == t && (ToolBarManager.showMainPanel(), ToolBarManager.ShowToolBar())
            },
            this)
        },
        e.prototype.updateView = function() {
            var t = this;
            KTool.getMultiValue([121593, 201589],
            function(e) {
                var i = KTool.getByte(e[0], 0),
                n = KTool.getByte(e[0], 1);
                t.currentDay = i + 1,
                t.setLantern(i);
                var s = SystemTimerManager.sysBJDate.getDate();
                0 == e[1] ? t.currentState = "sign": 22 == s ? t.currentState = "hasGotAllItem": t.currentState = "tomorrow",
                t.once(egret.Event.RENDER,
                function() {
                    3 > i ? (t.btnGetPet.visible = !0, DisplayUtil.setEnabled(t.btnGetPet, !1, !0)) : 0 == n ? (t.btnGetPet.visible = !0, t.hasGotPet.visible = !1, DisplayUtil.setEnabled(t.btnGetPet, !0, !1)) : (t.btnGetPet.visible = !1, t.hasGotPet.visible = !0)
                },
                t)
            }),
            this.imgItem1.source = ClientConfig.getItemIcon(1400152),
            this.imgItem2.source = ClientConfig.getItemIcon(300697),
            this.imgItem3.source = ClientConfig.getItemIcon(1400154)
        },
        e.prototype.setLantern = function(t) {
            for (var e = 1; 3 >= e; ++e) t >= e ? this["imgLantern" + e].source = "spring_festival_sign_light_png": this["imgLantern" + e].source = "spring_festival_sign_dark_png"
        },
        e
    } (BaseModule);
    t.SpringFestivalSign = e,
    __reflect(e.prototype, "springFestivalSign.SpringFestivalSign")
} (springFestivalSign || (springFestivalSign = {}));
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
generateEUI.paths["resource/eui_skins/SpringFestivalSignSkin.exml"] = window.SpringFestivalSignSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBg", "imgItem1", "imgItem2", "imgItem3", "btnClose", "imgLantern1", "imgLantern2", "imgLantern3", "btnGetItem", "hasGotItem", "hasGotAllItem", "btnGetPet", "hasGotPet", "txtLv_kb_2", "txtLv_kb_3"],
        this.height = 640,
        this.width = 1101,
        this.elementsContent = [this.imgBg_i(), this.imgItem1_i(), this.imgItem2_i(), this.imgItem3_i(), this.btnClose_i(), this.imgLantern1_i(), this.imgLantern2_i(), this.imgLantern3_i(), this.btnGetItem_i(), this.hasGotItem_i(), this.hasGotAllItem_i(), this.btnGetPet_i(), this.hasGotPet_i(), this._Label1_i(), this.txtLv_kb_2_i(), this.txtLv_kb_3_i()],
        this.states = [new eui.State("sign", [new eui.SetProperty("hasGotItem", "visible", !1), new eui.SetProperty("hasGotAllItem", "visible", !1), new eui.SetProperty("btnGetPet", "visible", !1), new eui.SetProperty("hasGotPet", "visible", !1)]), new eui.State("tomorrow", [new eui.SetProperty("btnGetItem", "visible", !1), new eui.SetProperty("hasGotItem", "visible", !0), new eui.SetProperty("hasGotAllItem", "visible", !1), new eui.SetProperty("btnGetPet", "visible", !1), new eui.SetProperty("hasGotPet", "visible", !1)]), new eui.State("hasGotAllItem", [new eui.SetProperty("btnGetItem", "visible", !1), new eui.SetProperty("hasGotItem", "visible", !1), new eui.SetProperty("btnGetPet", "visible", !1), new eui.SetProperty("hasGotPet", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBg_i = function() {
        var t = new eui.Image;
        return this.imgBg = t,
        t.source = "spring_festival_sign_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 55,
        t.width = 55,
        t.x = 567,
        t.y = 308,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 55,
        t.width = 55,
        t.x = 682,
        t.y = 337,
        t
    },
    i.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 55,
        t.width = 55,
        t.x = 796,
        t.y = 307,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "spring_festival_sign_btnclose_png",
        t.x = 1023,
        t.y = 29,
        t
    },
    i.imgLantern1_i = function() {
        var t = new eui.Image;
        return this.imgLantern1 = t,
        t.anchorOffsetX = .5,
        t.anchorOffsetY = .5,
        t.source = "spring_festival_sign_light_png",
        t.x = 36,
        t.y = 122,
        t
    },
    i.imgLantern2_i = function() {
        var t = new eui.Image;
        return this.imgLantern2 = t,
        t.source = "spring_festival_sign_dark_png",
        t.x = -8.5,
        t.y = 222,
        t
    },
    i.imgLantern3_i = function() {
        var t = new eui.Image;
        return this.imgLantern3 = t,
        t.source = "spring_festival_sign_dark_png",
        t.x = 62,
        t.y = 340,
        t
    },
    i.btnGetItem_i = function() {
        var t = new eui.Image;
        return this.btnGetItem = t,
        t.source = "spring_festival_sign_qifu_png",
        t.x = 622,
        t.y = 509,
        t
    },
    i.hasGotItem_i = function() {
        var t = new eui.Image;
        return this.hasGotItem = t,
        t.source = "spring_festival_sign_mrzl_png",
        t.x = 654,
        t.y = 479,
        t
    },
    i.hasGotAllItem_i = function() {
        var t = new eui.Image;
        return this.hasGotAllItem = t,
        t.source = "spring_festival_sign_yilingqu_png",
        t.x = 654,
        t.y = 479,
        t
    },
    i.btnGetPet_i = function() {
        var t = new eui.Image;
        return this.btnGetPet = t,
        t.source = "spring_festival_sign_qf_kb_png",
        t.x = 274,
        t.y = 514,
        t
    },
    i.hasGotPet_i = function() {
        var t = new eui.Image;
        return this.hasGotPet = t,
        t.source = "spring_festival_sign_yihuode_png",
        t.x = 285,
        t.y = 480,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 14834489,
        t.text = "2",
        t.textColor = 16776958,
        t.x = 612,
        t.y = 347,
        t
    },
    i.txtLv_kb_2_i = function() {
        var t = new eui.Label;
        return this.txtLv_kb_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 14834489,
        t.text = "1",
        t.textColor = 16776958,
        t.x = 726,
        t.y = 376,
        t
    },
    i.txtLv_kb_3_i = function() {
        var t = new eui.Label;
        return this.txtLv_kb_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 14834489,
        t.text = "20",
        t.textColor = 16777215,
        t.x = 833,
        t.y = 345,
        t
    },
    e
} (eui.Skin);