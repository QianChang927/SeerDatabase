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
roomShop; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.groupName = "RoomShop_tabGroup",
            t.skinName = RoomShopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            GameInfo.isChecking && (this.tab_item_2.visible = !1),
            e.prototype.childrenCreated.call(this),
            e.prototype.initBtnClose.call(this, "room_shop_close_png", this),
            this.adaptLeftContent(this._scro),
            this.adaptLeftContent(this.group_bu),
            this.adaptBgByScale(this.bg),
            this._scro.right = DeviceInfoManager.adapterOffSetX + 26;
            var i = new MenuData;
            i.root = [3, 2, 1],
            i["default"] = 3,
            i.groupName = this.groupName,
            i.data = {
                1 : {
                    title: "墙面装饰"
                },
                2 : {
                    title: "地面摆设"
                },
                3 : {
                    title: "基地房型"
                }
            },
            this.menu = Menu.createMenu(i, this.menuGroup),
            this.tabItemGroup = this.tab_item_1.group,
            this.tabItemGroup.selectedValue = 1,
            this._list.itemRenderer = t.RoomShopItem,
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.changeTab1, this),
            this.tabItemGroup.addEventListener(egret.Event.CHANGE, this.changeTab, this),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED, this.updateDiamond, this),
            EventManager.addEventListener(roomModel.RoomEvent.BUY_FURNITURE, this.updateDiamond, this),
            this.updateView()
        },
        i.prototype.changeTab1 = function() {
            this._scro.stopAnimation(),
            this._scro.viewport.scrollV = 0,
            this.tabItemGroup.selectedValue = 1;
            var t = ~~this.menu.selectedValue || 3,
            e = config.BaseShop.getItems().filter(function(e) {
                return e.type == t && 0 == e.vipOnly
            });
            this._list.dataProvider = new eui.ArrayCollection(e)
        },
        i.prototype.changeTab = function() {
            this._scro.stopAnimation(),
            this._scro.viewport.scrollV = 0;
            var t = ~~ (2 == (~~this.tabItemGroup.selectedValue || 1)),
            e = ~~this.menu.selectedValue || 3,
            i = config.BaseShop.getItems().filter(function(i) {
                return i.type == e && t == i.vipOnly
            });
            this._list.dataProvider = new eui.ArrayCollection(i)
        },
        i.prototype.updateView = function() {
            this.updateDiamond(),
            this.changeTab()
        },
        i.prototype.updateDiamond = function() {
            this.icon_gold.source = ClientConfig.getItemIcon(1),
            this.txtCoin.text = core.gameUtil.ConvertToTenThousand(ItemManager.getNumByID(1)),
            this.top_2.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.tabItemGroup.removeEventListener(egret.Event.CHANGE, this.changeTab, this)
        },
        i
    } (BaseModule);
    t.RoomShop = e,
    __reflect(e.prototype, "roomShop.RoomShop")
} (roomShop || (roomShop = {}));
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
roomShop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = RoomShopItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.createChildren = function() {
            var e = this;
            t.prototype.createChildren.call(this),
            ImageButtonUtil.add(this.buy,
            function() {
                if (RoomManager.curRoomFurnitureMap.length >= 400 && !RoomManager.curRoomFurnitureMap.containsKey(e.info.id)) return void Alarm.show("基地道具的类型数量超过限制（400个）！");
                if (!MainManager.actorInfo.isVip && e.info.vipOnly) return void(GameInfo.isChecking ? BubblerManager.getInstance().showText("你还不是VIP用户！") : Alert.show("成为VIP才可购买专属装扮！是否现在成为VIP？",
                function() {
                    PayManager.canPay() ? VipController.openVip() : BubblerManager.getInstance().showText("暂未开放，敬请期待")
                }));
                var t = ItemManager.parseItem(e.info.cost);
                if (t[0].num <= ItemManager.getNumByID(t[0].id)) {
                    var i = {
                        type: "furniture_buyItem",
                        id: e.info.id,
                        num: e.info.num
                    };
                    ModuleManager.showModuleByID(1, i)
                } else Alarm.show("道具不足")
            },
            this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            EventManager.addEventListener(roomModel.RoomEvent.BUY_FURNITURE, this.updateView, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.info = this.data, this.updateView())
        },
        e.prototype.updateView = function() {
            this.item_name.text = this.info.name.length > 8 ? this.info.name.substring(0, 8) + "...": this.info.name,
            this.icon.source = ClientConfig.getFurnitureIcon(this.info.id),
            this.item_num.text = "" + this.info.num,
            this.item_num.visible = 1 != this.info.num;
            var t = ItemManager.parseItem(this.info.cost);
            t.length > 0 && (this.buy_icon.source = ClientConfig.getItemIcon(t[0].id), this.buy_num.text = t[0].num + "");
            var e = RoomManager.curRoomFurnitureMap.getValue(this.info.id),
            i = !e || e.allCount < this.info.max;
            DisplayUtil.setEnabled(this.buy, i, !0),
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.RoomShopItem = e,
    __reflect(e.prototype, "roomShop.RoomShopItem")
} (roomShop || (roomShop = {}));
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
generateEUI.paths["resource/eui_skins/RoomShopItemSkin.exml"] = window.RoomShopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["buy_bn", "buy_num", "buy_icon", "buy", "icon", "item_name", "item_limit", "item_num", "time_bg", "s30t", "time", "tag_bg", "tag_2", "tag", "item"],
        this.height = 174,
        this.width = 147,
        this.elementsContent = [this.item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this._Image1_i(), this.buy_i(), this.icon_i(), this.item_name_i(), this.item_limit_i(), this.item_num_i(), this.time_i(), this.tag_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "room_shop_buybg_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i.buy_i = function() {
        var t = new eui.Group;
        return this.buy = t,
        t.x = 4,
        t.y = 138,
        t.elementsContent = [this.buy_bn_i(), this.buy_num_i(), this.buy_icon_i()],
        t
    },
    i.buy_bn_i = function() {
        var t = new eui.Image;
        return this.buy_bn = t,
        t.source = "room_shop_buy_bn_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.buy_num_i = function() {
        var t = new eui.Label;
        return this.buy_num = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.verticalCenter = .5,
        t.x = 65.9,
        t
    },
    i.buy_icon_i = function() {
        var t = new eui.Image;
        return this.buy_icon = t,
        t.height = 30,
        t.horizontalCenter = -22,
        t.source = "room_shop_icon_gold_png",
        t.verticalCenter = 1.5,
        t.width = 30,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 80,
        t.horizontalCenter = 0,
        t.source = "room_shop_icon_png",
        t.verticalCenter = -9,
        t.width = 80,
        t
    },
    i.item_name_i = function() {
        var t = new eui.Label;
        return this.item_name = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 16,
        t.text = "道具道具道具道...",
        t.textColor = 14543359,
        t.y = 8,
        t
    },
    i.item_limit_i = function() {
        var t = new eui.Label;
        return this.item_limit = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "每日限兑：1/1",
        t.textColor = 4187130,
        t.visible = !1,
        t.x = 30,
        t.y = 118,
        t
    },
    i.item_num_i = function() {
        var t = new eui.Label;
        return this.item_num = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 35.5,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1518417,
        t.text = "999",
        t.textColor = 14543359,
        t.touchEnabled = !1,
        t.y = 94,
        t
    },
    i.time_i = function() {
        var t = new eui.Group;
        return this.time = t,
        t.visible = !1,
        t.x = 26,
        t.y = 29,
        t.elementsContent = [this.time_bg_i(), this.s30t_i()],
        t
    },
    i.time_bg_i = function() {
        var t = new eui.Image;
        return this.time_bg = t,
        t.source = "room_shop_time_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.s30t_i = function() {
        var t = new eui.Label;
        return this.s30t = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 16,
        t.y = 2,
        t
    },
    i.tag_i = function() {
        var t = new eui.Group;
        return this.tag = t,
        t.visible = !1,
        t.x = 0,
        t.y = 29,
        t.elementsContent = [this.tag_bg_i(), this.tag_2_i()],
        t
    },
    i.tag_bg_i = function() {
        var t = new eui.Image;
        return this.tag_bg = t,
        t.source = "room_shop_tag_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.tag_2_i = function() {
        var t = new eui.Label;
        return this.tag_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "8折",
        t.textColor = 16777215,
        t.x = 7,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/RoomShopSkin.exml"] = window.RoomShopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "menuGroup", "txtCoin", "icon_gold", "top_2", "tab_item_1", "tab_item_2", "group_bu", "_list", "_scro"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.menuGroup_i(), this.top_2_i(), this.group_bu_i(), this._scro_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "room_shop_tab_item_1_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "room_shop_tab_item_1_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "room_shop_tab_item_2_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "room_shop_tab_item_2_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "room_shop_bg_jpg",
        t.verticalCenter = 0,
        t
    },
    o.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.x = 0,
        t.y = 48,
        t
    },
    o.top_2_i = function() {
        var t = new eui.Group;
        return this.top_2 = t,
        t.height = 36,
        t.right = 43,
        t.top = 11,
        t.width = 146,
        t.elementsContent = [this._Image1_i(), this.txtCoin_i(), this.icon_gold_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "room_shop_img_di2_png",
        t.x = 13,
        t.y = 5,
        t
    },
    o.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 5.5,
        t.size = 18.0101510119682,
        t.text = "0",
        t.textColor = 12834813,
        t.y = 8.101,
        t
    },
    o.icon_gold_i = function() {
        var t = new eui.Image;
        return this.icon_gold = t,
        t.height = 30,
        t.horizontalCenter = -62,
        t.source = "room_shop_icon_gold_png",
        t.verticalCenter = -2,
        t.width = 30,
        t
    },
    o.group_bu_i = function() {
        var t = new eui.Group;
        return this.group_bu = t,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.tab_item_1_i(), this.tab_item_2_i()],
        t
    },
    o.tab_item_1_i = function() {
        var t = new eui.RadioButton;
        return this.tab_item_1 = t,
        t.groupName = "tab_item_group",
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.tab_item_2_i = function() {
        var t = new eui.RadioButton;
        return this.tab_item_2 = t,
        t.groupName = "tab_item_group",
        t.value = "2",
        t.x = 100,
        t.y = 0,
        t.skinName = n,
        t
    },
    o._scro_i = function() {
        var t = new eui.Scroller;
        return this._scro = t,
        t.bottom = 9,
        t.left = 177,
        t.right = 26,
        t.top = 110,
        t.viewport = this._list_i(),
        t
    },
    o._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t
    },
    e
} (eui.Skin);