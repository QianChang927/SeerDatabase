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
templeHeroesBuySkinPop; !
function(e) {
    var t = function(e) {
        function t(t) {
            void 0 === t && (t = null);
            var n = e.call(this) || this;
            return n.exchangeObj = {
                190 : "258357_1",
                359 : "258358_2",
                157 : "258559_13284",
                171 : "258560_13285",
                184 : "258474_13256",
                222 : "258473_13255",
                279 : "258420_13248",
                295 : "258421_13249"
            },
            n.skinName = TempleHeroesBuySkinPopSkin,
            t ? (n.data = t, n) : n
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    if (TempleHeroManager.checkYearVip()) {
                        if (UserInfoManager.diamond < t.data.price) return void BubblerManager.getInstance().showText("钻石不足");
                        var e = t.exchangeObj[t.data.id];
                        if (190 == t.data.id || 359 == t.data.id) {
                            var n = e.split("_").map(Number);
                            TempleHeroManager.buyProductBySocket(n[0],
                            function() {
                                KTool.buyProductByCallback(n[0], 1,
                                function() {
                                    SocketConnection.sendByQueue(45786, [2, n[1]],
                                    function() {
                                        TempleHeroManager.updateAllData(),
                                        t.onClose()
                                    })
                                })
                            },
                            t)
                        } else TempleHeroManager.buyProduct(e,
                        function() {
                            TempleHeroManager.updateAllData(),
                            t.onClose()
                        },
                        t)
                    }
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            this.updateView()
        },
        t.prototype.updateView = function() {
            this.num.text = this.data.price + "";
            var e = PetSkinXMLInfo.getSkinInfo(this.data.id);
            this.petName.text = "绑定于：" + PetXMLInfo.getName(e.monId),
            this.bg.source = "temple_heroes_buy_skin_pop_" + this.data.id + "_jpg",
            this.imgType.source = "common_pet_skin_icon_" + e.type + "_png"
        },
        t
    } (BaseModule);
    e.TempleHeroesBuySkinPop = t,
    __reflect(t.prototype, "templeHeroesBuySkinPop.TempleHeroesBuySkinPop")
} (templeHeroesBuySkinPop || (templeHeroesBuySkinPop = {}));
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
generateEUI.paths["resource/eui_skins/TempleHeroesBuySkinPopSkin.exml"] = window.TempleHeroesBuySkinPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnBuy", "btnClose", "num", "petName", "imgType"],
        this.height = 480,
        this.width = 937,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnBuy_i(), this.btnClose_i(), this.num_i(), this.petName_i(), this.imgType_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "temple_heroes_buy_skin_pop_157_jpg",
        e.x = 0,
        e.y = 11,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 460,
        e.scale9Grid = new egret.Rectangle(0, 17, 12, 78),
        e.source = "temple_heroes_buy_pet_pop_line1_png",
        e.width = 12,
        e.x = 913,
        e.y = 11,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 11,
        e.scale9Grid = new egret.Rectangle(3, 0, 94, 11),
        e.source = "temple_heroes_buy_pet_pop_line2_png",
        e.width = 909,
        e.x = 16,
        e.y = 0,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_buy_skin_pop_diabg_png",
        e.x = 763,
        e.y = 376,
        e
    },
    n.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "temple_heroes_buy_skin_pop_btnbuy_png",
        e.x = 760,
        e.y = 411,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "temple_heroes_buy_skin_pop_btnclose_png",
        e.x = 855,
        e.y = 11,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "XXX",
        e.textColor = 4187130,
        e.x = 843,
        e.y = 386,
        e
    },
    n.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "绑定于：精灵名称",
        e.textColor = 13228251,
        e.x = 76,
        e.y = 436,
        e
    },
    n.imgType_i = function() {
        var e = new eui.Image;
        return this.imgType = e,
        e.source = "common_pet_skin_icon_2_png",
        e.x = 1.073,
        e.y = 11.274,
        e
    },
    t
} (eui.Skin);