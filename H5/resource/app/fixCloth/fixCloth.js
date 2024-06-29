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
fixCloth; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = ClothItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            var t = this;
            this.icon.source = ClientConfig.getClothSmallIcon(this.data),
            this.txtName.text = ItemXMLInfo.getName(this.data),
            this.txt_price.text = ItemXMLInfo.getRepairPrice(this.data) + "",
            ImageButtonUtil.add(this.fix,
            function() {
                var e = new egret.ByteArray;
                e.writeUnsignedInt(t.data),
                SocketConnection.sendByQueue(CommandID.ITEM_REPAIR, [1, e],
                function() {
                    EventManager.dispatchEventWith("fixOne"),
                    BubblerManager.getInstance().showText("修复成功！")
                })
            },
            this),
            ImageButtonUtil.add(this.icon,
            function() {
                var e = {};
                e.clothesId = t.data,
                tipsPop.TipsPop.openClothesPop(e)
            },
            this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        e
    } (eui.ItemRenderer);
    t.ClothItem = e,
    __reflect(e.prototype, "fixCloth.ClothItem")
} (fixCloth || (fixCloth = {}));
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
fixCloth; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.list = [],
            t.skinName = FixclothSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this._scol.viewport = this._list,
            this.txtCoin2.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins, 0),
            ItemManager.addEventListener(ItemEvent.CLOTH_LIST, this.onListCloth, this),
            ItemManager.getCloth(),
            this._list.itemRenderer = t.ClothItem,
            ImageButtonUtil.add(this.btnFix,
            function() {
                if (i.list.length <= 0) return void Alarm.show("全部装备已修复！",
                function() {
                    ModuleManager.hideModule(i)
                });
                for (var t = new egret.ByteArray,
                e = 0,
                n = i.list; e < n.length; e++) {
                    var o = n[e];
                    t.writeUnsignedInt(o)
                }
                SocketConnection.sendByQueue(CommandID.ITEM_REPAIR, [i.list.length, t],
                function() {
                    Alarm.show("全部装备已修复！",
                    function() {
                        ModuleManager.hideModule(i)
                    }),
                    ItemManager.getCloth()
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(i)
            }),
            EventManager.addEventListener("fixOne",
            function() {
                ItemManager.getCloth()
            },
            this)
        },
        i.prototype.onListCloth = function() {
            for (var t = [], e = ItemManager.getClothIDs(), i = 0, n = e; i < n.length; i++) {
                var o = n[i],
                r = ItemManager.getClothInfo(o);
                0 != ItemXMLInfo.getLifeTime(r.itemID) && r.leftTime < 1 && t.push(o)
            }
            this.list = t,
            this._list.dataProvider = new eui.ArrayCollection(t)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeAll(this)
        },
        i
    } (BaseModule);
    t.FixCloth = e,
    __reflect(e.prototype, "fixCloth.FixCloth")
} (fixCloth || (fixCloth = {}));
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
generateEUI.paths["resource/eui_skins/ClothItemSkin.exml"] = window.ClothItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txt_price", "fix", "txtName"],
        this.height = 150,
        this.width = 115,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.scaleX = .5,
        t.scaleY = .5,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.icon_i(), this.fix_i(), this.txtName_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 300,
        t.source = "aaa_jx_2_kb_3_png",
        t.width = 231,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 140,
        t.source = "",
        t.width = 140,
        t.x = 47,
        t.y = 75,
        t
    },
    i.fix_i = function() {
        var t = new eui.Group;
        return this.fix = t,
        t.x = 0,
        t.y = 246,
        t.elementsContent = [this._Image2_i(), this.txt_price_i(), this._Image3_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "aaa_btncomm_png",
        t.width = 231,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_price_i = function() {
        var t = new eui.Label;
        return this.txt_price = t,
        t.fontFamily = "MFShangHei",
        t.size = 36.3546798029557,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 100,
        t.y = 13,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "fixcloth_iconcoin2_png",
        t.x = 54,
        t.y = 15,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 32,
        t.text = "宝石名称名称",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 192,
        t.x = 21,
        t.y = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FixclothSkin.exml"] = window.FixclothSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "bg", "btnClose", "_list", "_scol", "txtLabel", "btnFix", "txtCoin2", "iconCoin2", "coin"],
        this.height = 431,
        this.width = 754,
        this.elementsContent = [this.bg_i(), this.btnClose_i(), this._scol_i(), this.btnFix_i(), this.coin_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.visible = !0,
        t.width = 754,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 430,
        t.source = "common_s9_pop_bg4_png",
        t.percentWidth = 100,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_big_png",
        t.percentWidth = 100,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "fixcloth_yhgg_png",
        t.x = 49,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_pop_btn_close_png",
        t.x = 710,
        t.y = 0,
        t
    },
    i._scol_i = function() {
        var t = new eui.Scroller;
        return this._scol = t,
        t.height = 310,
        t.width = 726,
        t.x = 15,
        t.y = 46,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 310,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 726,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t
    },
    i.btnFix_i = function() {
        var t = new eui.Group;
        return this.btnFix = t,
        t.x = 310,
        t.y = 368,
        t.elementsContent = [this._Image3_i(), this.txtLabel_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "common_btn_bg_yellow_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "全部修复",
        t.textColor = 10181146,
        t.x = 27,
        t.y = 13,
        t
    },
    i.coin_i = function() {
        var t = new eui.Group;
        return this.coin = t,
        t.x = 504,
        t.y = 4,
        t.elementsContent = [this._Image4_i(), this.txtCoin2_i(), this.iconCoin2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "fixcloth_img_di2_png",
        t.x = 22,
        t.y = 4,
        t
    },
    i.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 71,
        t.y = 5,
        t
    },
    i.iconCoin2_i = function() {
        var t = new eui.Image;
        return this.iconCoin2 = t,
        t.source = "fixcloth_iconcoin2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin);