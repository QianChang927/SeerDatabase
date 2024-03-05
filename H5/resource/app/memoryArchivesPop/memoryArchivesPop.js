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
memoryArchivesPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = MemoryArchivesPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.tab1,
            function() {
                e.onClose(),
                StatLogger.log("20230602版本系统功能", "精灵档案馆", "点击打开精灵档案馆-永夜纪年"),
                ModuleManager.showModuleByID(225, 1, AppDoStyle.HIDEN)
            },
            this, !1),
            ImageButtonUtil.add(this.tab2,
            function() {
                e.onClose(),
                StatLogger.log("20230602版本系统功能", "精灵档案馆", "点击打开精灵档案馆-莱达物语"),
                ModuleManager.showModuleByID(225, 2, AppDoStyle.HIDEN)
            },
            this, !1),
            ImageButtonUtil.add(this.close, this.onClose, this, !1),
            ImageButtonUtil.add(this.tips,
            function() {
                tipsPop.TipsPop.openHelpPopById(157)
            },
            this),
            StatLogger.log("20230602版本系统功能", "精灵档案馆", "点击打开精灵档案馆的集合弹窗"),
            this.ani = SpineUtil.createAnimate("jiyidanganguan"),
            SpineUtil.play(this.ani, "animation", this.aniGroup, null, this, 0),
            EventManager.addEventListener(ModuleManager.TOUCH_MODULE_MASK, this.onClose, this)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.aniGroup.removeChildren(),
            this.ani = null
        },
        e
    } (BaseModule);
    t.MemoryArchivesPop = e,
    __reflect(e.prototype, "memoryArchivesPop.MemoryArchivesPop")
} (memoryArchivesPop || (memoryArchivesPop = {}));
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
generateEUI.paths["resource/eui_skins/MemoryArchivesPopSkin.exml"] = window.MemoryArchivesPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "t2", "t1", "other", "tab1", "tab2", "close", "aniGroup", "tips"],
        this.height = 517,
        this.width = 805,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 517,
        t.width = 805,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.title_i(), this.t2_i(), this.t1_i(), this.other_i(), this.tab1_i(), this.tab2_i(), this._Label1_i(), this._Label2_i(), this.close_i(), this.aniGroup_i(), this.tips_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "memory_archives_pop_bg_png",
        t.x = 0,
        t.y = 23.486,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "memory_archives_pop_title_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.t2_i = function() {
        var t = new eui.Label;
        return this.t2 = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "永夜纪年",
        t.textColor = 11783167,
        t.visible = !0,
        t.x = 355.894,
        t.y = 360.457,
        t
    },
    i.t1_i = function() {
        var t = new eui.Label;
        return this.t1 = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "莱达物语",
        t.textColor = 11717631,
        t.x = 341.17,
        t.y = 99.66,
        t
    },
    i.other_i = function() {
        var t = new eui.Image;
        return this.other = t,
        t.source = "memory_archives_pop_other_png",
        t.visible = !1,
        t.x = 727,
        t.y = 445,
        t
    },
    i.tab1_i = function() {
        var t = new eui.Group;
        return this.tab1 = t,
        t.height = 244.037,
        t.width = 221.423,
        t.x = 87,
        t.y = 230,
        t
    },
    i.tab2_i = function() {
        var t = new eui.Group;
        return this.tab2 = t,
        t.height = 244.037,
        t.width = 221.423,
        t.x = 513.567,
        t.y = 74.563,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "一本揭示命运窥视未来的奇书，由永夜天王圣甲•布莱克持有，是一种魔咒，也是一种诱惑。书中记录了赛尔宇宙精灵们的相关故事。",
        t.textColor = 6388143,
        t.width = 373,
        t.x = 357,
        t.y = 390,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "收录在记忆体中特别的一卷，由逐界苍星索拉里斯从魔盒中提炼而出，并上传到云端。书中记录了莱达宇宙某个重要轮回里精灵们的相关故事。",
        t.textColor = 6388143,
        t.width = 378,
        t.x = 66,
        t.y = 131,
        t
    },
    i.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "memory_archives_pop_close_png",
        t.x = 756,
        t.y = 32,
        t
    },
    i.aniGroup_i = function() {
        var t = new eui.Group;
        return this.aniGroup = t,
        t.horizontalCenter = -10,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.verticalCenter = .5,
        t
    },
    i.tips_i = function() {
        var t = new eui.Image;
        return this.tips = t,
        t.source = "common_help_icon_1_png",
        t.x = 262,
        t.y = 30.624,
        t
    },
    e
} (eui.Skin);