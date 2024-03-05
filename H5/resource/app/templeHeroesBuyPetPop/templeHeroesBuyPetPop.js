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
templeHeroesBuyPetPop; !
function(e) {
    e.id = 3197;
    var t = function(t) {
        function n(i) {
            void 0 === i && (i = null);
            var n = t.call(this) || this;
            return n.exchangeObj = {
                3197 : "258566_13283",
                3512 : "258478_13254",
                3404 : "258479_13253",
                3661 : "258425_13247",
                3888 : "258735_13330"
            },
            n.skinName = TempleHeroesBuyPetPopSkin,
            i ? (n.data = i, e.id = n.data.id, n) : n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this._list.itemRenderer = e.TempleHeroesItem,
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    return TempleHeroManager.checkYearVip() ? UserInfoManager.diamond < i.data.price ? void BubblerManager.getInstance().showText("钻石不足") : void TempleHeroManager.buyProduct(i.exchangeObj[e.id],
                    function() {
                        TempleHeroManager.updateAllData(),
                        i.onClose()
                    },
                    i) : void 0
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            this.updateView()
        },
        n.prototype.updateView = function() {
            this.num.text = this.data.price + "",
            this.attr.text = PetXMLInfo.getTypeCN(e.id),
            this.attr_icon.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(e.id));
            var t = this.data.append.split("&"),
            n = Array.apply(null, new Array(t.length));
            n.map(function(e, o) {
                var r = new i;
                r.type = o + 1,
                r.id = t[o],
                n[o] = r
            }),
            this._list.dataProvider = new eui.ArrayCollection(n),
            this.bg.source = "temple_heroes_buy_pet_pop_" + e.id + "_jpg"
        },
        n
    } (BaseModule);
    e.TempleHeroesBuyPetPop = t,
    __reflect(t.prototype, "templeHeroesBuyPetPop.TempleHeroesBuyPetPop");
    var i = function() {
        function e() {}
        return e
    } ();
    e.itemPrice = i,
    __reflect(i.prototype, "templeHeroesBuyPetPop.itemPrice")
} (templeHeroesBuyPetPop || (templeHeroesBuyPetPop = {}));
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
templeHeroesBuyPetPop; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.info = null,
            e.skinName = TempleHeroesItemSkin,
            e
        }
        return __extends(i, t),
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        i.prototype.updateView = function() {
            var t = this;
            switch (ImageButtonUtil.remove(this.icon), this.info.type) {
            case 1:
                this.icon.source = "temple_heroes_buy_pet_pop_icon_type1_png",
                ImageButtonUtil.add(this.icon,
                function() {
                    ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], e.id, "", AppDoStyle.NULL)
                },
                this);
                break;
            case 2:
                this.icon.source = "temple_heroes_buy_pet_pop_icon_type2_png",
                ImageButtonUtil.add(this.icon,
                function() {
                    var e = {};
                    e.id = ~~t.info.id,
                    tipsPop.TipsPop.openSkillPop(e)
                },
                this);
                break;
            case 3:
                this.icon.width = this.icon.height = 60,
                this.icon.source = ClientConfig.getMarkPath(~~this.info.id),
                ImageButtonUtil.add(this.icon,
                function() {
                    var e = ~~t.info.id,
                    i = {
                        ins: e
                    };
                    tipsPop.TipsPop.openCounterMarkPop(i)
                },
                this)
            }
            this.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseItemRenderer);
    e.TempleHeroesItem = t,
    __reflect(t.prototype, "templeHeroesBuyPetPop.TempleHeroesItem")
} (templeHeroesBuyPetPop || (templeHeroesBuyPetPop = {}));
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
generateEUI.paths["resource/eui_skins/TempleHeroesBuyPetPopSkin.exml"] = window.TempleHeroesBuyPetPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnClose", "num", "btnBuy", "attr", "_list", "attr_icon"],
        this.height = 480,
        this.width = 943,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Image4_i(), this.num_i(), this.btnBuy_i(), this.attr_i(), this._Scroller1_i(), this.attr_icon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "temple_heroes_buy_pet_pop_3197_jpg",
        e.x = 6,
        e.y = 11,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 460,
        e.scale9Grid = new egret.Rectangle(0, 17, 12, 78),
        e.source = "temple_heroes_buy_pet_pop_line1_png",
        e.width = 12,
        e.x = 913,
        e.y = 11,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 11,
        e.scale9Grid = new egret.Rectangle(3, 0, 94, 11),
        e.source = "temple_heroes_buy_pet_pop_line2_png",
        e.width = 909,
        e.x = 16,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 285,
        e.scale9Grid = new egret.Rectangle(87, 37, 24, 7),
        e.source = "temple_heroes_buy_pet_pop_giftbg_png",
        e.width = 115,
        e.x = 0,
        e.y = 34,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "temple_heroes_buy_pet_pop_btnclose_png",
        e.x = 861,
        e.y = 11,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_buy_pet_pop_numbg_png",
        e.x = 769,
        e.y = 376,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "XXX",
        e.textColor = 4187130,
        e.x = 849,
        e.y = 386,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "temple_heroes_buy_pet_pop_btnbuy_png",
        e.x = 766,
        e.y = 411,
        e
    },
    i.attr_i = function() {
        var e = new eui.Label;
        return this.attr = e,
        e.fontFamily = "MFShangHei",
        e.size = 20.0204702295504,
        e.text = "属性  属性",
        e.textColor = 4187130,
        e.x = 80,
        e.y = 424,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.width = 75,
        e.x = 22,
        e.y = 74,
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
        return e
    },
    i.attr_icon_i = function() {
        var e = new eui.Image;
        return this.attr_icon = e,
        e.height = 20,
        e.source = "common_sdef_png",
        e.width = 20,
        e.x = 39,
        e.y = 424,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TempleHeroesItemSkin.exml"] = window.TempleHeroesItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon"],
        this.height = 75,
        this.width = 75,
        this.elementsContent = [this._Image1_i(), this.icon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 75,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(6, 7, 7, 6),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_panel_itembg_png",
        e.verticalCenter = 0,
        e.width = 75,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.horizontalCenter = -.5,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = -.5,
        e
    },
    t
} (eui.Skin);