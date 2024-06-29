var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
mechaFrenzy; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.skinName = e.MechaFrenzySkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20210806版本系统功能", "毁灭机甲关卡", "进入机甲狂潮集合面板"),
            this.addEvent()
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(e)
            },
            this),
            ImageButtonUtil.add(this.btnInfo1,
            function() {
                PetManager.showPetIntroduce(3390)
            },
            this),
            ImageButtonUtil.add(this.btnGo1,
            function() {
                ModuleManager.showModule("destroyMecha", ["destroy_mecha"], e, "DestroyMechaMain", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnInfo2,
            function() {
                PetManager.showPetIntroduce(3386)
            },
            this),
            ImageButtonUtil.add(this.btnGo2,
            function() {
                ModuleManager.showModuleByID(99)
            },
            this)
        },
        n
    } (BaseModule);
    e.MechaFrenzy = t,
    __reflect(t.prototype, "mechaFrenzy.MechaFrenzy")
} (mechaFrenzy || (mechaFrenzy = {})),
window.mechaFrenzy = window.mechaFrenzy || {};
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/MechaFrenzySkin.exml"] = window.mechaFrenzy.MechaFrenzySkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "imgMain", "btnInfo1", "buyshadow1", "jingqingqidai", "btnGo1", "btnInfo2", "buyshadow2", "btnGo2", "up_bg", "btnClose", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.top_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "mecha_frenzy_bg_jpg",
        e.top = 0,
        e.visible = !0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this.imgMain_i(), this.btnInfo1_i(), this.buyshadow1_i(), this.jingqingqidai_i(), this.btnGo1_i(), this.btnInfo2_i(), this.buyshadow2_i(), this.btnGo2_i()],
        e
    },
    n.imgMain_i = function() {
        var e = new eui.Image;
        return this.imgMain = e,
        e.height = 640,
        e.source = "mecha_frenzy_main_png",
        e.visible = !0,
        e.width = 1136,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnInfo1_i = function() {
        var e = new eui.Image;
        return this.btnInfo1 = e,
        e.source = "mecha_frenzy_btnInfo_png",
        e.visible = !0,
        e.x = 373,
        e.y = 531,
        e
    },
    n.buyshadow1_i = function() {
        var e = new eui.Image;
        return this.buyshadow1 = e,
        e.source = "mecha_frenzy_buyshadow_png",
        e.visible = !0,
        e.x = 465,
        e.y = 595,
        e
    },
    n.jingqingqidai_i = function() {
        var e = new eui.Image;
        return this.jingqingqidai = e,
        e.source = "mecha_frenzy_jingqingqidai_png",
        e.visible = !0,
        e.x = 58,
        e.y = 524,
        e
    },
    n.btnGo1_i = function() {
        var e = new eui.Image;
        return this.btnGo1 = e,
        e.source = "mecha_frenzy_btnBuy_png",
        e.visible = !0,
        e.x = 453,
        e.y = 527,
        e
    },
    n.btnInfo2_i = function() {
        var e = new eui.Image;
        return this.btnInfo2 = e,
        e.source = "mecha_frenzy_btnInfo_png",
        e.visible = !0,
        e.x = 791.021,
        e.y = 507.454,
        e
    },
    n.buyshadow2_i = function() {
        var e = new eui.Image;
        return this.buyshadow2 = e,
        e.source = "mecha_frenzy_buyshadow_png",
        e.visible = !0,
        e.x = 883.021,
        e.y = 571.454,
        e
    },
    n.btnGo2_i = function() {
        var e = new eui.Image;
        return this.btnGo2 = e,
        e.source = "mecha_frenzy_btnBuy_png",
        e.visible = !0,
        e.x = 871.021,
        e.y = 503.454,
        e
    },
    n.top_i = function() {
        var e = new eui.Group;
        return this.top = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.up_bg_i(), this.btnClose_i()],
        e
    },
    n.up_bg_i = function() {
        var e = new eui.Image;
        return this.up_bg = e,
        e.source = "mecha_frenzy_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_close_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin);