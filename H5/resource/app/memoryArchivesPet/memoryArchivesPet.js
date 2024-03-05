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
memoryArchivesPet; !
function(e) {
    var t = function(e) {
        function t(t) {
            void 0 === t && (t = null);
            var i = e.call(this) || this;
            return i.id = 4113,
            i.skinName = MemoryArchivesPetSkin,
            i.data = t,
            i.data && (i.id = ~~i.data),
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.onClose, this),
            this._list.itemRenderer = i,
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP,
            function(e) {
                StatLogger.log("20230605版本系统功能", "精灵档案馆", "在精灵传记弹窗中点击了关联精灵按钮"),
                t.id = ~~e.item,
                t.updateView()
            },
            this),
            EventManager.addEventListener(ModuleManager.TOUCH_MODULE_MASK, this.onClose, this),
            this.updateView()
        },
        t.prototype.updateView = function() {
            var e = this,
            t = config.ArchivesStory.getItems().filter(function(t) {
                return t.monid == e.id
            }),
            i = t[0],
            r = 1 == i.html,
            n = "　　",
            s = n + i.txt;
            this._scr.viewport.scrollV = 0,
            this._scr.stopAnimation(),
            s = s.replace(/\\n/g, "\n　　"),
            r ? this.desc.textFlow = (new egret.HtmlTextParser).parse(s) : this.desc.text = s;
            var o = i.samemonid.trim().length;
            this.some.visible = o > 0,
            this.petName.text = i.monname,
            this.title.source = 0 == i.storyid ? "": "memory_archives_pet_title" + i.storyid + "_png",
            this.pet.source = ClientConfig.getPetHalfIcon(this.id);
            var a = i.samemonid.split("_").map(Number);
            o > 0 && (this._list.dataProvider = new eui.ArrayCollection(a))
        },
        t
    } (BaseModule);
    e.MemoryArchivesPet = t,
    __reflect(t.prototype, "memoryArchivesPet.MemoryArchivesPet");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = MemoryArchivesPetItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            this.data && this.updateView()
        },
        t.prototype.updateView = function() {
            this.head.source = ClientConfig.getPetHeadPath(~~this.data)
        },
        t
    } (BaseItemRenderer);
    e.MemoryArchivesPetItem = i,
    __reflect(i.prototype, "memoryArchivesPet.MemoryArchivesPetItem")
} (memoryArchivesPet || (memoryArchivesPet = {}));
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
generateEUI.paths["resource/eui_skins/MemoryArchivesPetItemSkin.exml"] = window.MemoryArchivesPetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["head"],
        this.height = 70,
        this.width = 70,
        this.elementsContent = [this._Image1_i(), this.head_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "memory_archives_pet_headbg_png",
        e.verticalCenter = 0,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 70,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 70,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MemoryArchivesPetSkin.exml"] = window.MemoryArchivesPetSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "desc", "_scr", "pet", "petName", "close", "_list", "some"],
        this.height = 449,
        this.width = 755,
        this.elementsContent = [this._Group3_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 443,
        e.width = 755,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.title_i(), this._scr_i(), this._Group2_i(), this.close_i(), this.some_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "memory_archives_pet_bg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 8,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.horizontalCenter = -242.5,
        e.source = "memory_archives_pet_title1_png",
        e.verticalCenter = -158.5,
        e
    },
    i._scr_i = function() {
        var e = new eui.Scroller;
        return this._scr = e,
        e.height = 342.992,
        e.width = 434,
        e.x = 274,
        e.y = 54,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.desc_i()],
        e
    },
    i.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 18,
        e.textColor = 6388143,
        e.width = 434,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 264,
        e.width = 155,
        e.x = 57,
        e.y = 137,
        e.elementsContent = [this._Image2_i(), this.pet_i(), this.petName_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 262,
        e.horizontalCenter = .5,
        e.scale9Grid = new egret.Rectangle(16, 14, 123, 197),
        e.source = "memory_archives_pet_petbg_png",
        e.verticalCenter = -26,
        e.width = 164,
        e
    },
    i.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.height = 280,
        e.horizontalCenter = 0,
        e.scaleX = .9,
        e.scaleY = .9,
        e.verticalCenter = -25,
        e.visible = !0,
        e.width = 170,
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = .5,
        e.size = 20,
        e.text = "战武天尊",
        e.textColor = 9025023,
        e.y = 243.414,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "memory_archives_pet_close_png",
        e.x = 721,
        e.y = -2.636,
        e
    },
    i.some_i = function() {
        var e = new eui.Group;
        return this.some = e,
        e.bottom = 5,
        e.height = 355,
        e.visible = !0,
        e.x = 754,
        e.elementsContent = [this._Label1_i(), this._Scroller1_i()],
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.bottom = 0,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "相关精灵",
        e.textColor = 10406399,
        e.x = 0,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.bottom = 29,
        e.width = 70,
        e.x = 5,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.verticalAlign = "bottom",
        e
    },
    t
} (eui.Skin);