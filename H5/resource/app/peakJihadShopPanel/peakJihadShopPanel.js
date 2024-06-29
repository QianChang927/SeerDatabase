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
peakJihadShopPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.itemParseInfo = null,
            t.skinName = PeakJihadShopItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.itemIcon,
            function() {
                if (2 == t.itemParseInfo.type) {
                    var e = t.itemParseInfo.id,
                    i = {
                        ins: e
                    };
                    tipsPop.TipsPop.openCounterMarkPop(i)
                } else if (10 == t.itemParseInfo.type) {
                    var n = AchieveXMLInfo.getRule(t.itemParseInfo.id, t.itemParseInfo.num),
                    r = {};
                    r.SpeNameBonus = n.SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(r)
                } else {
                    var o = {};
                    o.id = t.itemParseInfo.id,
                    tipsPop.TipsPop.openItemPop(o)
                }
            },
            this),
            ImageButtonUtil.add(this.buyGroup,
            function() {
                var e = ItemManager.getNumByID(t.info.consumeitemid),
                i = t.info.discount < 1 ? 10 : t.info.discount;
                return e < t.info.price * i / 10 ? void BubblerManager.getInstance().showText("道具不足") : void SocketConnection.sendByQueue(41904, [1, t.info.id],
                function() {
                    console.log("购买成功"),
                    EventManager.dispatchEventWith(PeakJihadController.PeakJihadController_Buy_SHOP_ITEM)
                })
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            switch (this.itemParseInfo = ItemManager.parseItem(this.info.commodity)[0], this.itemNum.text = core.gameUtil.ConvertItemNumView(this.itemParseInfo.num, 0), this.itemParseInfo.type) {
            case 1:
            case 3:
                var e = ItemXMLInfo.getName(this.itemParseInfo.id);
                this.itemName.text = e.length > 8 ? e.substring(0, 7) + "...": e,
                this.itemIcon.source = ClientConfig.getItemIcon(this.itemParseInfo.id);
                break;
            case 2:
                var t = CountermarkXMLInfo.getDes(this.itemParseInfo.id);
                this.itemName.text = t.length > 8 ? t.substring(0, 7) + "...": t,
                this.itemIcon.source = ClientConfig.getMarkPath(this.itemParseInfo.id);
                break;
            case 10:
                var i = AchieveXMLInfo.getRule(this.itemParseInfo.id, this.itemParseInfo.num);
                this.itemName.text = i.title,
                this.itemIcon.source = ClientConfig.getAchievePointIcon(i.AchievementPoint),
                this.itemNum.text = "1"
            }
            var n = {
                id: this.info.consumeitemid,
                num: this.info.price
            };
            this.itemBuyIcon.source = ClientConfig.getItemIcon(n.id),
            this.itemPriceOri.text = "" + 10 * n.num / this.info.discount,
            this.info.discount < 1 ? (this.currentState = "2", this.itemPrice.text = "" + n.num, this.itemSaleGroup.visible = !1) : (this.currentState = "1", this.itemPrice.text = "" + n.num, this.itemSaleGroup.visible = !0, this.itemSaleNum.text = this.info.discount + "折");
            var r = ["每日限购", "每周限购", "每月限购", "赛季限购", "永久限购"],
            o = !1;
            if (this.info.bagLimit > 0) this.itemLimit.visible = !1,
            o = this.info.bagLimit - ItemManager.getNumByID(this.itemParseInfo.id) <= 0;
            else if (1 == this.info.limit) this.itemLimit.visible = !1;
            else {
                this.itemLimit.visible = !0;
                var a = PeakJihadController.shopValue.getValue(this.info.id);
                o = this.info.quantity <= a,
                o && (this.currentState = "3", this.itemPrice.text = "已购买"),
                this.itemLimit.text = r[this.info.limit - 2] + "：" + a + "/" + this.info.quantity
            }
            DisplayUtil.setEnabled(this.buyGroup, !o, !0),
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadShopItem = t,
    __reflect(t.prototype, "peakJihadShopPanel.PeakJihadShopItem")
} (peakJihadShopPanel || (peakJihadShopPanel = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                u(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
        }
        u((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = i;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(i);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, u = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
peakJihadShopPanel; !
function(e) {
    var t = function(t) {
        function n(e) {
            void 0 === e && (e = null);
            var i = t.call(this) || this;
            return i.oriTabValue = -1,
            i.groupName = "PeakJihadShopPanel_groupName",
            i.defautKey = 1,
            i.defautTab = -1,
            i.data = e,
            null != i.data && (i.defautKey = ~~i.data.type, i.defautTab = ~~i.data.tab),
            i.skinName = PeakJihadShopPanelSkin,
            i
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initBtnClose("peak_jihad_shop_panel_title_png", this),
            this.adaptBgByScale(this.bg),
            this._listItem.itemRenderer = e.PeakJihadShopItem,
            this._listPet.itemRenderer = e.PeakJihadShopPet,
            this._listSuit.itemRenderer = e.PeakJihadShopSuit,
            this.icon0.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId1),
            this.icon1.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId2),
            ImageButtonUtil.add(this.icon0,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId1,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon1,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId2,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItemNum, this),
            this.updateItemNum(),
            this.initTab()
        },
        n.prototype.initTab = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t = this;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return config.Pvp_shop.hasLoader ? [3, 2] : [4, config.Pvp_shop.loadAsync()];
                    case 1:
                        i.sent(),
                        i.label = 2;
                    case 2:
                        return e = new MenuData,
                        e["default"] = this.defautKey,
                        e.groupName = this.groupName,
                        e.root = [1, 2],
                        e.data = {
                            1 : {
                                title: "普通兑换"
                            },
                            2 : {
                                title: "稀有兑换"
                            }
                        },
                        this.menu = Menu.createMenu(e, this.menuGroup),
                        this.mainGroup.right = DeviceInfoManager.adapterOffSetX || 35,
                        EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.updateTab, this),
                        EventManager.addEventListener(PeakJihadController.PeakJihadController_Buy_SHOP_ITEM,
                        function() {
                            return __awaiter(t, void 0, void 0,
                            function() {
                                return __generator(this,
                                function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return [4, PeakJihadController.updateOrderShopValue()];
                                    case 1:
                                        return e.sent(),
                                        this.updateView(),
                                        [2]
                                    }
                                })
                            })
                        },
                        this),
                        this.once(egret.Event.RENDER,
                        function() {
                            t.mainGroup.left = t.menuGroup.width + 10
                        },
                        this),
                        [4, PeakJihadController.updateOrderShopValue()];
                    case 3:
                        return i.sent(),
                        [2]
                    }
                })
            })
        },
        n.prototype.updateTab = function() {
            for (var e = this,
            t = ~~this.menu.selectedValue,
            n = [], r = config.Pvp_shop.getItems().filter(function(e) {
                return e.type == t
            }), o = 0; o < r.length; o++) n.indexOf(r[o].producttype) < 0 && n.push(r[o].producttype);
            this.rbGrp.removeChildren(),
            this.tabGroup && this.tabGroup.removeEventListener(eui.UIEvent.CHANGE, this.updateView, this),
            this.tabGroup = null;
            for (var a = ["道具", "刻印", "宝石", "皮肤", "套装", "精灵"], o = 0; o < n.length; o++) {
                var s = new i;
                if (this.rbGrp.addChild(s), s.value = n[o], s.setDesc(a[n[o] - 1]), s.groupName = "PeakJihadShopPanel_tab_groupName", this.tabGroup = s.group, -1 != this.defautTab && n[o] == this.defautTab) {
                    var u = this.rbGrp.getChildAt(o);
                    this.oriTabValue = this.defautTab,
                    this.tabGroup.selectedValue = u.value,
                    this.tabGroup.addEventListener(eui.UIEvent.CHANGE, this.updateView, this)
                } else if (0 == o) {
                    var u = this.rbGrp.getChildAt(0);
                    this.oriTabValue = u.value,
                    this.tabGroup.selectedValue = u.value,
                    this.tabGroup.addEventListener(eui.UIEvent.CHANGE, this.updateView, this)
                }
            }
            this.once(egret.Event.RENDER,
            function() {
                e.updateView()
            },
            this)
        },
        n.prototype.updateView = function() {
            var e = ~~this.menu.selectedValue,
            t = ~~this.tabGroup.selectedValue || this.oriTabValue;
            if (1 > t) return void console.error("二级页签加载错误_" + t);
            var i, n;
            switch (t) {
            case 1:
            case 2:
            case 3:
                this._scrollerPet.visible = this._scrollerSuit.visible = !1,
                this._scrollerItem.visible = !0,
                i = this._listItem,
                n = this._scrollerItem;
                break;
            case 4:
            case 6:
                this._scrollerItem.visible = this._scrollerSuit.visible = !1,
                this._scrollerPet.visible = !0,
                i = this._listPet,
                n = this._scrollerPet;
                break;
            case 5:
                this._scrollerPet.visible = this._scrollerItem.visible = !1,
                this._scrollerSuit.visible = !0,
                i = this._listSuit,
                n = this._scrollerSuit
            }
            n.stopAnimation(),
            n.viewport.scrollV = 0;
            var r = [];
            r = config.Pvp_shop.getItems().filter(function(i) {
                return i.type == e && i.producttype == t
            }),
            r.sort(function(e, t) {
                return e.id - t.id
            }),
            r.sort(function(e, t) {
                return t.sort - e.sort
            }),
            i.dataProvider = new eui.ArrayCollection(r)
        },
        n.prototype.updateItemNum = function() {
            this.num0.text = String(ItemManager.getNumByID(PeakJihadController.itemId1)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId1),
            this.num1.text = String(ItemManager.getNumByID(PeakJihadController.itemId2)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId2)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.tabGroup && this.tabGroup.removeEventListener(eui.UIEvent.CHANGE, this.updateView, this)
        },
        n
    } (BaseModule);
    e.PeakJihadShopPanel = t,
    __reflect(t.prototype, "peakJihadShopPanel.PeakJihadShopPanel");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = RBitemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.setDesc = function(e) {
            this.txt_desc.text = e
        },
        t
    } (eui.RadioButton);
    e.RBitem = i,
    __reflect(i.prototype, "peakJihadShopPanel.RBitem")
} (peakJihadShopPanel || (peakJihadShopPanel = {}));
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
peakJihadShopPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PeakJihadShopPetSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.petBuyGroup,
            function() {
                var e = ItemManager.getNumByID(t.info.consumeitemid),
                i = t.info.discount < 1 ? 10 : t.info.discount;
                return e < t.info.price * i / 10 ? void BubblerManager.getInstance().showText("道具不足") : void SocketConnection.sendByQueue(41904, [1, t.info.id],
                function() {
                    EventManager.dispatchEventWith(PeakJihadController.PeakJihadController_Buy_SHOP_ITEM)
                })
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            var e = {
                id: this.info.consumeitemid,
                num: this.info.price
            };
            this.petBuyIcon.source = ClientConfig.getItemIcon(e.id),
            this.itemPriceOri.text = "" + e.num,
            this.info.discount < 1 ? (this.currentState = "2", this.petPrice.text = "" + e.num, this.petSaleGroup.visible = !1) : (this.currentState = "1", this.petPrice.text = "" + e.num * this.info.discount / 10, this.petSaleGroup.visible = !0, this.petSaleNum.text = this.info.discount + "折");
            var t = ItemManager.parseItem(this.info.commodity)[0].id;
            if (4 == this.info.producttype) {
                var i = PetSkinXMLInfo.getSkinInfo(t),
                n = PetSkinXMLInfo.getSkinInfo(t).name;
                this.petName.text = n.length > 8 ? n.substring(0, 7) + "...": n,
                this.petIcon.source = ClientConfig.getPetHalfIcon(14e5 + i.id)
            } else {
                this.petIcon.source = ClientConfig.getPetHalfIcon(t);
                var r = PetXMLInfo.getName(t);
                this.petName.text = r.length > 8 ? r.substring(0, 7) + "...": r
            }
            var o = ["每日限购", "每周限购", "每月限购", "赛季限购", "永久限购"],
            a = !1;
            if (1 == this.info.limit) this.petLimit.visible = !1;
            else {
                this.petLimit.visible = !0;
                var s = PeakJihadController.shopValue.getValue(this.info.id);
                a = this.info.quantity <= s,
                a && (this.currentState = "3", this.petPrice.text = "已购买"),
                this.petLimit.text = o[this.info.limit - 2] + "：" + s + "/" + this.info.quantity
            }
            DisplayUtil.setEnabled(this.petBuyGroup, !a, !0)
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadShopPet = t,
    __reflect(t.prototype, "peakJihadShopPanel.PeakJihadShopPet")
} (peakJihadShopPanel || (peakJihadShopPanel = {}));
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
peakJihadShopPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.itemParseInfo = null,
            t.skinName = PeakJihadShopSuitSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.suitIcon,
            function() {
                var e = {
                    id: t.info.suit
                };
                tipsPop.TipsPop.openSuitPop(e)
            },
            this, !1),
            ImageButtonUtil.add(this.suitBuyGroup,
            function() {
                var e = ItemManager.getNumByID(t.info.consumeitemid),
                i = t.info.discount < 1 ? 10 : t.info.discount;
                return e < t.info.price * i / 10 ? void BubblerManager.getInstance().showText("道具不足") : void SocketConnection.sendByQueue(41904, [1, t.info.id],
                function() {
                    EventManager.dispatchEventWith(PeakJihadController.PeakJihadController_Buy_SHOP_ITEM)
                })
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            var e = {
                id: this.info.consumeitemid,
                num: this.info.price
            };
            this.suitBuyIcon.source = ClientConfig.getItemIcon(e.id),
            this.itemPriceOri.text = "" + e.num,
            this.info.discount < 1 ? (this.currentState = "2", this.suitPrice.text = "" + e.num, this.suitTag.visible = !1) : (this.currentState = "1", this.suitPrice.text = "" + e.num * this.info.discount / 10, this.suitTag.visible = !0, this.suitSale.text = "VIP " + this.info.discount + "折"),
            this.itemParseInfo = ItemManager.parseItem(this.info.commodity)[0];
            var t = this.info.suit,
            i = SuitXMLInfo.getName(t);
            this.suitName.text = i.length > 8 ? i.substring(0, 7) + "...": i,
            ClientConfig.setSuitIconSize(t, this.suitIcon);
            var n = ["每日限购", "每周限购", "每月限购", "赛季限购", "永久限购"],
            r = !1;
            if (1 == this.info.limit) this.itemLimit.visible = !1;
            else {
                this.itemLimit.visible = !0;
                var o = PeakJihadController.shopValue.getValue(this.info.id);
                r = this.info.quantity <= o;
                var a = ItemManager.GetMySuitIds().indexOf(t) >= 0; (r || a) && (this.currentState = "3", this.suitPrice.text = "已购买", o = this.info.quantity),
                this.itemLimit.text = n[this.info.limit - 2] + "：" + o + "/" + this.info.quantity,
                DisplayUtil.setEnabled(this.suitBuyGroup, !r && !a, !0)
            }
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadShopSuit = t,
    __reflect(t.prototype, "peakJihadShopPanel.PeakJihadShopSuit")
} (peakJihadShopPanel || (peakJihadShopPanel = {}));
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
generateEUI.paths["resource/eui_skins/PeakJihadShopItemSkin.exml"] = window.PeakJihadShopItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["itemPrice", "itemPriceOri", "itemBuyIcon", "buyGroup", "itemLimit", "itemIcon", "itemName", "itemNum", "dayTime", "timeGroup", "itemSaleNum", "itemSaleGroup"],
        this.height = 169,
        this.width = 146,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("1", [new eui.SetProperty("itemPrice", "horizontalCenter", -9), new eui.SetProperty("itemBuyIcon", "verticalCenter", .5), new eui.SetProperty("itemBuyIcon", "horizontalCenter", -41.5)]), new eui.State("2", [new eui.SetProperty("itemPrice", "left", 70), new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image3", "visible", !1), new eui.SetProperty("itemBuyIcon", "verticalCenter", .5), new eui.SetProperty("itemBuyIcon", "horizontalCenter", -14)]), new eui.State("3", [new eui.SetProperty("itemPrice", "horizontalCenter", 0), new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image3", "visible", !1), new eui.SetProperty("itemBuyIcon", "verticalCenter", .5), new eui.SetProperty("itemBuyIcon", "horizontalCenter", -41.5), new eui.SetProperty("itemBuyIcon", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.buyGroup_i(), this.itemLimit_i(), this._Image4_i(), this.itemIcon_i(), this.itemName_i(), this.itemNum_i(), this.timeGroup_i(), this.itemSaleGroup_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_shop_panel_itembg_png",
        e.x = 1,
        e.y = 0,
        e
    },
    i.buyGroup_i = function() {
        var e = new eui.Group;
        return this.buyGroup = e,
        e.horizontalCenter = .5,
        e.touchChildren = !1,
        e.y = 134,
        e.elementsContent = [this._Image2_i(), this.itemPrice_i(), this.itemPriceOri_i(), this._Image3_i(), this.itemBuyIcon_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "peak_jihad_shop_panel_itembtnbg_png",
        e.width = 139,
        e.x = 0,
        e.y = 0,
        e
    },
    i.itemPrice_i = function() {
        var e = new eui.Label;
        return this.itemPrice = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "3000",
        e.textColor = 10180889,
        e.y = 7,
        e
    },
    i.itemPriceOri_i = function() {
        var e = new eui.Label;
        return this.itemPriceOri = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 34.5,
        e.size = 16,
        e.text = "3000",
        e.textColor = 13209671,
        e.y = 11,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.source = "peak_jihad_shop_panel_itembuyno_png",
        e.x = 84,
        e.y = 17,
        e
    },
    i.itemBuyIcon_i = function() {
        var e = new eui.Image;
        return this.itemBuyIcon = e,
        e.height = 30,
        e.width = 30,
        e
    },
    i.itemLimit_i = function() {
        var e = new eui.Label;
        return this.itemLimit = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 2.5,
        e.size = 14,
        e.text = "每日限兑：1/1",
        e.textColor = 4187130,
        e.y = 115,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_shop_panel_itemnamebg_png",
        e.x = 5,
        e.y = 3,
        e
    },
    i.itemIcon_i = function() {
        var e = new eui.Image;
        return this.itemIcon = e,
        e.height = 70,
        e.horizontalCenter = 0,
        e.verticalCenter = -9,
        e.width = 70,
        e
    },
    i.itemName_i = function() {
        var e = new eui.Label;
        return this.itemName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "道具道具道具道...",
        e.textColor = 14543359,
        e.y = 7,
        e
    },
    i.itemNum_i = function() {
        var e = new eui.Label;
        return this.itemNum = e,
        e.fontFamily = "MFShangHei",
        e.right = 23,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1518417,
        e.text = "999",
        e.textColor = 14543359,
        e.y = 89,
        e
    },
    i.timeGroup_i = function() {
        var e = new eui.Group;
        return this.timeGroup = e,
        e.visible = !1,
        e.x = 6,
        e.y = 28,
        e.elementsContent = [this._Image5_i(), this.dayTime_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_shop_panel_timebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.dayTime_i = function() {
        var e = new eui.Label;
        return this.dayTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "剩30天",
        e.textColor = 16317183,
        e.x = 34,
        e.y = 2,
        e
    },
    i.itemSaleGroup_i = function() {
        var e = new eui.Group;
        return this.itemSaleGroup = e,
        e.x = 0,
        e.y = 28,
        e.elementsContent = [this._Image6_i(), this.itemSaleNum_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "peak_jihad_shop_panel_itemsalebg_png",
        e.width = 40,
        e.x = 0,
        e.y = 0,
        e
    },
    i.itemSaleNum_i = function() {
        var e = new eui.Label;
        return this.itemSaleNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "8折",
        e.textColor = 16777215,
        e.x = 6,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadShopPanelSkin.exml"] = window.PeakJihadShopPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "icon0", "num0", "icon1", "num1", "menuGroup", "rbGrp", "_listItem", "_scrollerItem", "_listPet", "_scrollerPet", "_listSuit", "_scrollerSuit", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group3_i(), this.menuGroup_i(), this.mainGroup_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peakjihad_common_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 60,
        e.top = 0,
        e.visible = !0,
        e.elementsContent = [this._Group1_i(), this._Group2_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.right = 168,
        e.y = 12,
        e.elementsContent = [this._Image1_i(), this.icon0_i(), this.num0_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_shop_panel_item_num_bg_png",
        e.x = 0,
        e.y = 3.171,
        e
    },
    i.icon0_i = function() {
        var e = new eui.Image;
        return this.icon0 = e,
        e.height = 55,
        e.left = -1,
        e.scaleX = .7,
        e.scaleY = .7,
        e.width = 55,
        e.y = -6,
        e
    },
    i.num0_i = function() {
        var e = new eui.Label;
        return this.num0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.right = 7,
        e.y = 12,
        e.elementsContent = [this._Image2_i(), this.icon1_i(), this.num1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_shop_panel_item_num_bg_png",
        e.x = 0,
        e.y = 2.108,
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.height = 55,
        e.left = -1,
        e.scaleX = .7,
        e.scaleY = .7,
        e.width = 55,
        e.y = -6,
        e
    },
    i.num1_i = function() {
        var e = new eui.Label;
        return this.num1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    i.menuGroup_i = function() {
        var e = new eui.Group;
        return this.menuGroup = e,
        e.x = 0,
        e.y = 48,
        e
    },
    i.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.left = 170,
        e.right = 30,
        e.y = 64,
        e.elementsContent = [this.rbGrp_i(), this._scrollerItem_i(), this._scrollerPet_i(), this._scrollerSuit_i()],
        e
    },
    i.rbGrp_i = function() {
        var e = new eui.Group;
        return this.rbGrp = e,
        e.height = 33,
        e.width = 600,
        e.x = 0,
        e.y = 0,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e
    },
    i._scrollerItem_i = function() {
        var e = new eui.Scroller;
        return this._scrollerItem = e,
        e.height = 508,
        e.left = 0,
        e.right = 0,
        e.y = 47,
        e.viewport = this._listItem_i(),
        e
    },
    i._listItem_i = function() {
        var e = new eui.List;
        return this._listItem = e,
        e.itemRendererSkinName = PeakJihadShopItemSkin,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 10,
        e.verticalGap = 10,
        e
    },
    i._scrollerPet_i = function() {
        var e = new eui.Scroller;
        return this._scrollerPet = e,
        e.height = 508,
        e.left = 0,
        e.right = 6,
        e.visible = !0,
        e.y = 47,
        e.viewport = this._listPet_i(),
        e
    },
    i._listPet_i = function() {
        var e = new eui.List;
        return this._listPet = e,
        e.itemRendererSkinName = PeakJihadShopPetSkin,
        e.layout = this._TileLayout2_i(),
        e
    },
    i._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 6,
        e.requestedColumnCount = 5,
        e.verticalGap = 10,
        e
    },
    i._scrollerSuit_i = function() {
        var e = new eui.Scroller;
        return this._scrollerSuit = e,
        e.height = 508,
        e.left = 0,
        e.right = 6,
        e.visible = !0,
        e.y = 47,
        e.viewport = this._listSuit_i(),
        e
    },
    i._listSuit_i = function() {
        var e = new eui.List;
        return this._listSuit = e,
        e.itemRendererSkinName = PeakJihadShopSuitSkin,
        e.layout = this._TileLayout3_i(),
        e
    },
    i._TileLayout3_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 20,
        e.verticalGap = 20,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadShopPetSkin.exml"] = window.PeakJihadShopPetSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["petIcon", "petPrice", "petBuyIcon", "itemPriceOri", "petBuyGroup", "petName", "petLimit", "gotPet", "petDayTime", "petTimeGroup", "petSaleNum", "petSaleGroup"],
        this.height = 288,
        this.width = 178,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("1", [new eui.SetProperty("petPrice", "x", 55)]), new eui.State("2", [new eui.SetProperty("petPrice", "x", 78), new eui.SetProperty("petBuyIcon", "verticalCenter", .5), new eui.SetProperty("petBuyIcon", "x", 56.25), new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image4", "visible", !1)]), new eui.State("3", [new eui.SetProperty("petPrice", "horizontalCenter", 0), new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image4", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.petIcon_i(), this._Image1_i(), this._Image2_i(), this.petBuyGroup_i(), this._Image5_i(), this.petName_i(), this.petLimit_i(), this.gotPet_i(), this.petTimeGroup_i(), this.petSaleGroup_i()],
        e
    },
    i.petIcon_i = function() {
        var e = new eui.Image;
        return this.petIcon = e,
        e.height = 280,
        e.visible = !0,
        e.width = 170,
        e.x = 5,
        e.y = 5,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_shop_panel_petbg2_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 6,
        e.y = 159,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_shop_panel_petbg_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.petBuyGroup_i = function() {
        var e = new eui.Group;
        return this.petBuyGroup = e,
        e.touchChildren = !1,
        e.x = 4,
        e.y = 253,
        e.elementsContent = [this._Image3_i(), this.petPrice_i(), this.petBuyIcon_i(), this.itemPriceOri_i(), this._Image4_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "peak_jihad_shop_panel_itembtnbg_png",
        e.width = 172,
        e.x = 0,
        e.y = 0,
        e
    },
    i.petPrice_i = function() {
        var e = new eui.Label;
        return this.petPrice = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "3000",
        e.textColor = 10181146,
        e.x = 55,
        e.y = 7,
        e
    },
    i.petBuyIcon_i = function() {
        var e = new eui.Image;
        return this.petBuyIcon = e,
        e.height = 30,
        e.verticalCenter = .5,
        e.visible = !0,
        e.width = 30,
        e.x = 32.69,
        e
    },
    i.itemPriceOri_i = function() {
        var e = new eui.Label;
        return this.itemPriceOri = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 38,
        e.size = 16,
        e.text = "3000",
        e.textColor = 13209671,
        e.y = 11,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return this._Image4 = e,
        e.source = "peak_jihad_shop_panel_itembuyno_png",
        e.x = 104.31,
        e.y = 17,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_shop_panel_linedone_png",
        e.visible = !0,
        e.x = 11,
        e.y = 255,
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "战武天尊",
        e.textColor = 15660287,
        e.y = 233,
        e
    },
    i.petLimit_i = function() {
        var e = new eui.Label;
        return this.petLimit = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "限兑：1/1",
        e.textColor = 10923696,
        e.y = 213,
        e
    },
    i.gotPet_i = function() {
        var e = new eui.Image;
        return this.gotPet = e,
        e.source = "peak_jihad_shop_panel_gotpet_png",
        e.visible = !1,
        e.x = 65,
        e.y = 261,
        e
    },
    i.petTimeGroup_i = function() {
        var e = new eui.Group;
        return this.petTimeGroup = e,
        e.visible = !1,
        e.x = 26,
        e.y = 9,
        e.elementsContent = [this._Image6_i(), this.petDayTime_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 18,
        e.source = "peak_jihad_shop_panel_pettimebg_png",
        e.width = 67,
        e.x = 0,
        e.y = 0,
        e
    },
    i.petDayTime_i = function() {
        var e = new eui.Label;
        return this.petDayTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "剩30天",
        e.textColor = 16317183,
        e.x = 15,
        e.y = 2,
        e
    },
    i.petSaleGroup_i = function() {
        var e = new eui.Group;
        return this.petSaleGroup = e,
        e.x = 0,
        e.y = 9,
        e.elementsContent = [this._Image7_i(), this.petSaleNum_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "peak_jihad_shop_panel_itemsalebg_png",
        e.width = 40,
        e.x = 0,
        e.y = 0,
        e
    },
    i.petSaleNum_i = function() {
        var e = new eui.Label;
        return this.petSaleNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "8折",
        e.textColor = 16777215,
        e.x = 6,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadShopSuitSkin.exml"] = window.PeakJihadShopSuitSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["suitName", "suitIcon", "itemLimit", "suitPrice", "suitBuyIcon", "itemPriceOri", "suitBuyGroup", "suitSale", "suitTag"],
        this.height = 258,
        this.width = 214,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("1", []), new eui.State("2", [new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("3", [new eui.SetProperty("suitPrice", "horizontalCenter", 0), new eui.SetProperty("suitBuyIcon", "visible", !1), new eui.SetProperty("itemPriceOri", "visible", !1), new eui.SetProperty("_Image3", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.suitName_i(), this.suitIcon_i(), this.itemLimit_i(), this.suitBuyGroup_i(), this.suitTag_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peak_jihad_shop_panel_zbk_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.suitName_i = function() {
        var e = new eui.Label;
        return this.suitName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "套装套装",
        e.textColor = 9025023,
        e.y = 201,
        e
    },
    i.suitIcon_i = function() {
        var e = new eui.Image;
        return this.suitIcon = e,
        e.bottom = 85,
        e.horizontalCenter = -1,
        e
    },
    i.itemLimit_i = function() {
        var e = new eui.Label;
        return this.itemLimit = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 14,
        e.text = "每日限兑：1/1",
        e.textColor = 4187130,
        e.y = 170,
        e
    },
    i.suitBuyGroup_i = function() {
        var e = new eui.Group;
        return this.suitBuyGroup = e,
        e.touchChildren = !1,
        e.x = 0,
        e.y = 223,
        e.elementsContent = [this._Image2_i(), this.suitPrice_i(), this.suitBuyIcon_i(), this.itemPriceOri_i(), this._Image3_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "peak_jihad_shop_panel_itembtnbg_png",
        e.width = 214,
        e.x = 0,
        e.y = 0,
        e
    },
    i.suitPrice_i = function() {
        var e = new eui.Label;
        return this.suitPrice = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 6.5,
        e.size = 18,
        e.text = "3000",
        e.textColor = 10181146,
        e.y = 7,
        e
    },
    i.suitBuyIcon_i = function() {
        var e = new eui.Image;
        return this.suitBuyIcon = e,
        e.height = 30,
        e.horizontalCenter = -29,
        e.verticalCenter = .5,
        e.width = 30,
        e
    },
    i.itemPriceOri_i = function() {
        var e = new eui.Label;
        return this.itemPriceOri = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 54,
        e.size = 16,
        e.text = "3000",
        e.textColor = 13209671,
        e.y = 11,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.source = "peak_jihad_shop_panel_itembuyno_png",
        e.x = 141,
        e.y = 17,
        e
    },
    i.suitTag_i = function() {
        var e = new eui.Group;
        return this.suitTag = e,
        e.x = 0,
        e.y = 12,
        e.elementsContent = [this._Image4_i(), this.suitSale_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.scale9Grid = new egret.Rectangle(3, 7, 6, 6),
        e.source = "peak_jihad_shop_panel_itemsalebg_png",
        e.width = 71,
        e.x = 0,
        e.y = 0,
        e
    },
    i.suitSale_i = function() {
        var e = new eui.Label;
        return this.suitSale = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "VIP 8折",
        e.textColor = 16777215,
        e.x = 11,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/RBitemSkin.exml"] = window.RBitemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_desc"],
        this.height = 33,
        this.width = 101,
        this.elementsContent = [this._Image1_i(), this.txt_desc_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "peak_jihad_shop_panel_baoshi_down_png"), new eui.SetProperty("txt_desc", "textColor", 8230346)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "peak_jihad_shop_panel_baoshi_up_png"), new eui.SetProperty("txt_desc", "textColor", 15989246)]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "peak_jihad_shop_panel_baoshi_down_png")])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "peak_jihad_shop_panel_baoshi_up_png",
        e
    },
    i.txt_desc_i = function() {
        var e = new eui.Label;
        return this.txt_desc = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 0,
        e.size = 14,
        e.text = "段位奖励",
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin);