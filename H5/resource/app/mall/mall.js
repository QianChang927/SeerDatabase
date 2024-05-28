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
mall; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "MallRechargeItemSkin",
            e.cacheAsBitmap = !0,
            e.addEventListener(egret.Event.ADDED_TO_STAGE, e.addEvent, e),
            e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            e
        }
        return __extends(e, t),
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.canPay() ? PayManager.buyDiamond(t.data.id) : Alarm.show("暂未开放，敬请期待！")
            },
            this, !1)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.dataChanged = function() {
            this.txtPrice.text = "￥ " + this.data.money / 100,
            this.txtNum.text = this.data.quantity,
            this.imgIcon.source = "mall_recharge_item_imgicon" + this.data.id % 10 + "_png",
            this.imgHot.visible = !!this.data.heat,
            this.txtGive.text = this.data.give,
            this.imgGive.visible = this.txtGive.visible = !!this.data.give
        },
        e
    } (eui.ItemRenderer);
    t.RechargeItem = e,
    __reflect(e.prototype, "mall.RechargeItem")
} (mall || (mall = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                u(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        u((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
mall; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "MallPanelSkin",
            i.data = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            return IS_RELEASE ? void this.onClose() : (this.init(), this.addEvent(), this.createView(), void(this.isChecking ? this.createMenu() : (this.turnToPage(2, 1), this.list.visible = !1, EventManager.addEventListener(i.EVENT_RED_DOT,
            function(t) {
                if (1 == t.data.sub) {
                    EventManager.removeEventListener(i.EVENT_RED_DOT, arguments.callee, this),
                    this.turnToPage(2, 2);
                    var e = this;
                    EventManager.addEventListener(i.EVENT_RED_DOT,
                    function(t) {
                        2 == t.data.sub && (EventManager.removeEventListener(i.EVENT_RED_DOT, arguments.callee, this), e.createMenu(), egret.setTimeout(function() {
                            e.list.visible = !0
                        },
                        this, 100))
                    },
                    this)
                }
            },
            this))))
        },
        i.prototype.createMenu = function() {
            var t = this;
            this.groupName = "mall";
            var e = new MenuData;
            e.groupName = this.groupName,
            this.isChecking ? (e.root = [1], e.data = {
                1 : {
                    title: "培养"
                }
            }) : (e.root = [1, 2, 4, 5, 6, 7, 8, 9], e.data = {
                1 : {
                    title: "推荐"
                },
                2 : {
                    title: "礼包"
                },
                4 : {
                    title: "皮肤"
                },
                5 : {
                    title: "刻印"
                },
                6 : {
                    title: "培养"
                },
                7 : {
                    title: "装扮"
                },
                8 : {
                    title: "精灵"
                },
                9 : {
                    title: "充值"
                }
            });
            var i = GainWayManger.getJumpInfo(this.data, e);
            null != i ? e["default"] = i.menuDefault: e["default"] = "recharge" == this.data ? 9 : 1,
            this.menu = Menu.createMenu(e, this, 48),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName,
            function() {
                KTool.getMultiValue([121020],
                function(n) {
                    var r, a = 255 & n[0];
                    switch (t.menu.selectedValue) {
                    case 2:
                        r = 14 > a ? ["日常礼包", "限时礼包"] : ["日常礼包", "限时礼包", "交易所"];
                        break;
                    case 4:
                        r = [],
                        t.arrRecommendSkin.length > 0 && r.push("推荐皮肤"),
                        t.arrTimeLimitSkin.length > 0 && r.push("限时皮肤"),
                        t.arrHistoricalSkin.length > 0 && r.push("史诗皮肤"),
                        t.arrClassicSkin.length > 0 && r.push("经典皮肤");
                        break;
                    case 5:
                        r = ["精灵王刻印", "秩序刻印"];
                        break;
                    case 6:
                        r = ["人气推荐", "抗性道具", "快速升级", "学习力提升", "极品强化", "辅助道具", "技能石"];
                        break;
                    case 7:
                        r = ["炫酷套装", "能力套装", "变形套装", "特殊单品"];
                        break;
                    case 8:
                        r = ["推荐", "副本", "竞技"];
                        break;
                    default:
                        r = []
                    }
                    t.subMenu.dataProvider = new eui.ArrayCollection(r),
                    null != i && i.tab > 0 ? (e["default"] = i.menuDefault, t.subMenu.selectedIndex = i.tab - 1, t.turnToPage(t.menu.selectedValue, t.subMenu.selectedIndex + 1)) : (t.subMenu.selectedIndex = t.flagRecommend ? 1 : 0, t.turnToPage(t.menu.selectedValue, t.flagRecommend ? 2 : 1)),
                    t.flagRecommend = !1,
                    Menu.updateRed(t.groupName, 2, t.redVisible)
                })
            },
            this)
        },
        Object.defineProperty(i.prototype, "isChecking", {
            get: function() {
                return GameInfo.isChecking
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.createView = function() {
            this.adaptLeftContent(this.viewContainer),
            this.recommendView = new t.RecommendView,
            this.exchangeView = new t.ExchangeView
        },
        i.prototype.destroy = function() {
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._resize, this),
            HotRedManager.getInstance().removeRegisterHotEventAll(this),
            ImageButtonUtil.removeAll(this.recommendView),
            this.exchangeView.destroy(),
            this.menu && this.menu.destroy(),
            e.prototype.destroy.call(this)
        },
        i.prototype.init = function() {
            this.initBtnClose("mall_recharge_panel_imgtitle_png", this),
            this.initBtnHelpById(162),
            this.updateSeerDou(),
            this.updateDiamond(),
            this.adaptLeftContent(this.subMenu),
            this.adaptRightContent(this.groupItem1),
            this.adaptRightContent(this.groupItem2),
            this.adaptRightContent(this.groupFilter),
            this.scroller.left += DeviceInfoManager.adapterOffSetX,
            this.scroller.right += DeviceInfoManager.adapterOffSetX,
            this.groupRecharge.left += DeviceInfoManager.adapterOffSetX,
            this.groupRecharge.right += DeviceInfoManager.adapterOffSetX,
            this.imgSeerDou.source = ClientConfig.getItemIcon(1),
            this.imgDiamond.source = ClientConfig.getItemIcon(5),
            this.imgCard.source = ClientConfig.getItemIcon(1723116),
            this.imgChip.source = ClientConfig.getItemIcon(1723117),
            this.subMenu.itemRenderer = t.SubMenuItem,
            this.shopConfigData = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("shop_config")).root,
            this.giftConfigData = this.shopConfigData.menu[4].menu.item.sort(function(t, e) {
                return t.price - e.price
            }),
            this.markConfigData = this.shopConfigData.menu[3],
            this.developConfigData = this.shopConfigData.menu[2],
            this.dressUpConfigData = this.shopConfigData.menu[5],
            this.petConfigData = this.shopConfigData.menu[1],
            this.skinConfigData = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("skin_shop")).root.Skins.Skin,
            this.skinTimeLimitConfigData = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("open_time_limit")).ActivityConfigPool.Activity[14].TimeLimit;
            var e;
            e = this.skinConfigData.filter(function(t) {
                return 1 == +t.Rec
            }),
            e = this.dealWithTimeLimit(e),
            this.arrRecommendSkin = e,
            e = this.skinConfigData.filter(function(t) {
                return (t.Show + "").length > 2
            }),
            e = this.dealWithTimeLimit(e),
            this.arrTimeLimitSkin = e,
            e = this.skinConfigData.filter(function(t) {
                return 2 == +t.Show
            }),
            this.arrHistoricalSkin = e,
            e = this.skinConfigData.filter(function(t) {
                return 1 == +t.Show
            }),
            this.arrClassicSkin = e,
            i.arrRedDot = [[], []],
            this.isChecking && (this.groupItem1.getChildAt(1).right = 0, this.groupItem1.removeChild(this.groupItem1.getChildAt(0))),
            this.tileLayout = new eui.TileLayout,
            this.tileLayout.paddingTop = 10,
            this.horizontalLayout = new eui.HorizontalLayout,
            this.horizontalLayout.gap = 25
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(RobotEvent.SEERDOU_CHANGE_EVENT, this.updateSeerDou, this),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED, this.updateDiamond, this),
            EventManager.addEventListener(i.UPDATE_SKIN_ITEM, this.updateSkinItem, this),
            EventManager.addEventListener(i.UPDATE_SKIN_HAS_BUY_STATE, this.updateSkinList, this),
            EventManager.addEventListener(i.UPDATE_CLOTH_HAS_BUY_STATE, this.updateClothList, this),
            EventManager.addEventListener(i.EVENT_RED_DOT, this.onRedDot, this),
            EventManager.addEventListener(i.EVENT_TURN_RECHARGE, this.turnRechargeDirectly, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._resize, this),
            this.subMenu.addEventListener(eui.UIEvent.CHANGE,
            function() {
                e.turnToPage(e.curNum, e.subMenu.selectedIndex + 1)
            },
            this),
            ImageButtonUtil.add(this.btnAddDiamond, this.turnRechargeDirectly, this),
            ImageButtonUtil.add(this.btnBuyCard,
            function() {
                var t = {};
                t.type = "mall_buyItem",
                t.ins = {
                    itemID: 1723116,
                    name: "皮肤礼卡",
                    coins: 1,
                    productID: 258356,
                    POPID: 392,
                    coinid: 5,
                    price: 10
                },
                t.caller = e,
                t.callBack = function(t, e) {
                    KTool.buyProductByCallback(258356, e,
                    function() {
                        KTool.doExchange(13233, e,
                        function() {
                            EventManager.dispatchEventWith(i.UPDATE_SKIN_ITEM)
                        })
                    })
                },
                ModuleManager.showModuleByID(1, t)
            },
            this),
            ImageButtonUtil.add(this.btnHC,
            function() {
                PopViewManager.getInstance().openView(new t.SkinPop)
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                PopViewManager.getInstance().openView(new t.RechargePop)
            },
            this),
            ImageButtonUtil.add(this.imgGou,
            function() {
                e.imgGou.visible = !1,
                e.updateSkinList()
            },
            this),
            ImageButtonUtil.add(this.imgGouBG,
            function() {
                e.imgGou.visible = !0,
                e.updateSkinList()
            },
            this),
            ImageButtonUtil.add(this.imgSeerDou,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1
                })
            },
            this),
            ImageButtonUtil.add(this.imgDiamond,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            ImageButtonUtil.add(this.imgCard,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1723116
                })
            },
            this),
            ImageButtonUtil.add(this.imgChip,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1723117
                })
            },
            this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.updateSkinList, this)
        },
        i.prototype.updateSeerDou = function() {
            this.txtSeerDou.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins)
        },
        i.prototype.updateDiamond = function(t) {
            var e = this;
            t ? this.txtDiamond.text = core.gameUtil.ConvertItemNumView(t.data) : UserInfoManager.getDiamond(function(t) {
                e.txtDiamond.text = core.gameUtil.ConvertItemNumView(t)
            },
            this)
        },
        i.prototype.updateSkinItem = function() {
            this.txtChip.text = ItemManager.getNumByID(1723117) + "",
            this.txtCard.text = ItemManager.getNumByID(1723116) + ""
        },
        i.prototype.updateArrSkinHasBuyState = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        t.arrSkinHasBuyState = [],
                        SocketConnection.sendByQueue(47309, [],
                        function(i) {
                            var n = i.data;
                            n.position = 0;
                            for (var r = n.readUnsignedInt(), a = 0; r > a; a++) {
                                var o = n.readUnsignedInt();
                                n.readUnsignedInt();
                                t.arrSkinHasBuyState[o] = !0
                            }
                            e()
                        })
                    })]
                })
            })
        },
        i.prototype.updateSkinList = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i = this;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return e = [],
                        this.updateSkinItem(),
                        [4, this.updateArrSkinHasBuyState()];
                    case 1:
                        switch (n.sent(), this.list.itemRenderer = t.SkinItem, this.subMenu.dataProvider.source[this.subMenu.selectedIndex]) {
                        case "推荐皮肤":
                            e = this.arrRecommendSkin;
                            break;
                        case "限时皮肤":
                            e = this.arrTimeLimitSkin;
                            break;
                        case "史诗皮肤":
                            e = this.arrHistoricalSkin;
                            break;
                        case "经典皮肤":
                            e = this.arrClassicSkin;
                            break;
                        default:
                            return console.error("皮肤子菜单有误"),
                            [2]
                        }
                        return e.forEach(function(t) {
                            t.hasBuy = i.arrSkinHasBuyState[t.ID]
                        },
                        this),
                        e.sort(function(t, e) {
                            return (t.hasBuy || 0) - (e.hasBuy || 0) || t.ID - e.ID
                        }),
                        this.imgGou.visible && (e = e.filter(function(t) {
                            return PetManager.hasPet(t.MonID)
                        })),
                        this.txtSearch.text && (e = e.filter(function(t) {
                            return SearchUtil.isMatch(i.txtSearch.text, PetXMLInfo.getName(t.MonID)) || SearchUtil.isMatch(i.txtSearch.text, t.MonID + "")
                        })),
                        this.list.dataProvider = new eui.ArrayCollection(e),
                        [2]
                    }
                })
            })
        },
        i.prototype.updateClothList = function() {
            var t, e = this.curPage,
            n = this.dressUpConfigData.menu[e].item;
            3 >= e ? t = i.POP_TYPE_SUIT: 4 == e ? t = i.POP_TYPE_CLOTH: 5 == e && (t = i.POP_TYPE_CAR),
            n.forEach(function(e) {
                e.popType = t;
                for (var i = (e.itemID + "").split("|"), n = !0, r = 0, a = i; r < a.length; r++) {
                    var o = a[r];
                    if (0 == ItemManager.getNumByID(~~o)) {
                        n = !1;
                        break
                    }
                }
                e.hasBuy = n
            },
            this),
            n.sort(function(t, e) {
                var i = GoldProductXMLInfo.getPriceByProID(t.productID) * (t.vip || 1),
                n = GoldProductXMLInfo.getPriceByProID(e.productID) * (e.vip || 1);
                return (t.hasBuy || 0) - (e.hasBuy || 0) || i - n
            }),
            this.list.dataProvider = new eui.ArrayCollection(n)
        },
        i.prototype.turnToPage = function(e, n) {
            return void 0 === n && (n = 1),
            __awaiter(this, void 0, void 0,
            function() {
                var r, a, o, s, u, h, l = this;
                return __generator(this,
                function(c) {
                    switch (c.label) {
                    case 0:
                        switch (this.isChecking && (e = 6, n = 6), this.curNum = e, this.curPage = n, this.groupItem1.visible = !0, this.groupItem2.visible = 4 == e, this.groupFilter.visible = 4 == e, this.groupRecharge.visible = 9 == e, this.scroller.visible = 1 != e, this.usualBtnHelp.visible = 2 == e && 3 == n, this.viewContainer.removeChildren(), 1 == e ? this.viewContainer.addChild(this.recommendView) : 2 == e && 3 == n && (this.viewContainer.addChild(this.exchangeView), this.exchangeView.update()), this.viewContainer.visible = this.viewContainer.numChildren > 0, this.scroller.stopAnimation(), this.list.layout = this.tileLayout, this.scroller.scrollPolicyH = eui.ScrollPolicy.OFF, r = [], a = 100, o = e) {
                        case 2:
                            return [3, 1];
                        case 4:
                            return [3, 7];
                        case 5:
                            return [3, 9];
                        case 6:
                            return [3, 10];
                        case 7:
                            return [3, 11];
                        case 8:
                            return [3, 12];
                        case 9:
                            return [3, 13]
                        }
                        return [3, 14];
                    case 1:
                        return 3 != n ? [3, 2] : (this.list.itemRenderer = null, this.list.dataProvider = null, [3, 6]);
                    case 2:
                        return this.list.itemRenderer = t.GiftItem,
                        this.list.layout = this.horizontalLayout,
                        this.scroller.scrollPolicyH = eui.ScrollPolicy.AUTO,
                        1 != n ? [3, 3] : (r.push({
                            isVipGift: !0
                        }), r = r.concat(this.giftConfigData), [3, 5]);
                    case 3:
                        return 2 != n ? [3, 5] : (r = config.Shop.getItems().sort(function(t, e) {
                            return t.limittype - e.limittype || t.Discountprice - e.Discountprice || t.id - e.id
                        }), [4, KTool.getMultiValueAsync([100527, 20050, 201065])]);
                    case 4:
                        s = c.sent(),
                        r.forEach(function(t) {
                            t.va = s,
                            t.isFree = 0 == t.Discountprice
                        },
                        this),
                        c.label = 5;
                    case 5:
                        this.list.dataProvider = new eui.ArrayCollection(r),
                        c.label = 6;
                    case 6:
                        return [3, 15];
                    case 7:
                        return this.initGroupFilter(),
                        this.updateSkinItem(),
                        [4, this.updateArrSkinHasBuyState()];
                    case 8:
                        switch (c.sent(), this.list.itemRenderer = t.SkinItem, this.subMenu.dataProvider.source[this.subMenu.selectedIndex]) {
                        case "推荐皮肤":
                            r = this.arrRecommendSkin;
                            break;
                        case "限时皮肤":
                            r = this.arrTimeLimitSkin;
                            break;
                        case "史诗皮肤":
                            r = this.arrHistoricalSkin;
                            break;
                        case "经典皮肤":
                            r = this.arrClassicSkin;
                            break;
                        default:
                            return console.error("皮肤子菜单有误"),
                            [2]
                        }
                        return r.forEach(function(t) {
                            t.hasBuy = l.arrSkinHasBuyState[t.ID]
                        },
                        this),
                        r.sort(function(t, e) {
                            return (t.hasBuy || 0) - (e.hasBuy || 0) || t.ID - e.ID
                        }),
                        this.list.dataProvider = new eui.ArrayCollection(r),
                        a = 178,
                        [3, 15];
                    case 9:
                        return this.list.itemRenderer = t.CommonItem,
                        r = this.markConfigData.menu[n - 1].item,
                        r.forEach(function(t) {
                            t.popType = i.POP_TYPE_MARK
                        },
                        this),
                        this.list.dataProvider = new eui.ArrayCollection(r),
                        a = 148,
                        [3, 15];
                    case 10:
                        return this.list.itemRenderer = t.CommonItem,
                        r = 7 == n ? this.markConfigData.menu[2].item: this.developConfigData.menu[n - 1].item.filter(function(t) {
                            return ! t.hide || 1 != t.hide
                        }),
                        r.forEach(function(t) {
                            t.popType = i.POP_TYPE_ITEM
                        },
                        this),
                        this.isChecking && (r = r.filter(function(t) {
                            return 2 == t.coins
                        })),
                        this.list.dataProvider = new eui.ArrayCollection(r),
                        a = 148,
                        [3, 15];
                    case 11:
                        return this.list.itemRenderer = t.DressUpItem,
                        r = this.dressUpConfigData.menu[n].item,
                        3 >= n ? u = i.POP_TYPE_SUIT: 4 == n ? u = i.POP_TYPE_CLOTH: 5 == n && (u = i.POP_TYPE_CAR),
                        r.forEach(function(t) {
                            t.popType = u;
                            for (var e = (t.itemID + "").split("|"), i = !0, n = 0, r = e; n < r.length; n++) {
                                var a = r[n];
                                if (0 == ItemManager.getNumByID(~~a)) {
                                    i = !1;
                                    break
                                }
                            }
                            t.hasBuy = i
                        },
                        this),
                        r.sort(function(t, e) {
                            var i = GoldProductXMLInfo.getPriceByProID(t.productID) * (t.vip || 1),
                            n = GoldProductXMLInfo.getPriceByProID(e.productID) * (e.vip || 1);
                            return (t.hasBuy || 0) - (e.hasBuy || 0) || i - n
                        }),
                        this.list.dataProvider = new eui.ArrayCollection(r),
                        a = 215,
                        [3, 15];
                    case 12:
                        return this.list.itemRenderer = t.PetItem,
                        this.list.layout = this.horizontalLayout,
                        this.scroller.scrollPolicyH = eui.ScrollPolicy.AUTO,
                        h = [[1713283, 1713280], [1713283, 1713280, 1723635], [1723634]],
                        r = this.petConfigData.menu.item,
                        r = r.filter(function(t) {
                            return - 1 != h[n - 1].indexOf( + t.itemID)
                        }),
                        this.list.dataProvider = new eui.ArrayCollection(r),
                        [3, 15];
                    case 13:
                        return this.list.itemRenderer = t.RechargeItem,
                        r = config.Recharge.getItems(),
                        r = r.filter(function(t) {
                            return 2 == t.type
                        }),
                        this.list.dataProvider = new eui.ArrayCollection(r),
                        a = 309,
                        [3, 15];
                    case 14:
                        return this.list.itemRenderer = null,
                        this.list.dataProvider = null,
                        [3, 15];
                    case 15:
                        return this.list.layout == this.tileLayout && egret.setTimeout(function() {
                            var t = l.list.width,
                            e = Math.floor(t / a),
                            i = (t - e * a) / (e - 1);
                            l.tileLayout.requestedColumnCount = Math.min(e, r.length),
                            l.tileLayout.horizontalGap = i
                        },
                        this, 0),
                        [2]
                    }
                })
            })
        },
        i.prototype._resize = function() {
            this.turnToPage(this.curNum, this.curPage)
        },
        i.prototype.dealWithTimeLimit = function(t) {
            for (var e, i, n = this,
            r = t.filter(function(t) {
                if ((t.Show + "").length <= 2) return ! 0;
                for (var r = +(t.Show + "").split("_")[1], a = 0, o = n.skinTimeLimitConfigData; a < o.length; a++) {
                    var s = o[a];
                    if (s.TID == r) {
                        i = new Date;
                        var u = new Date(s.StartTime);
                        return e = new Date(s.EndTime),
                        n.isTimeLimit(i, u, e)
                    }
                }
            }), a = 0, o = r; a < o.length; a++) {
                var s = o[a];
                if ((s.Show + "").length > 2) {
                    for (var u = +(s.Show + "").split("_")[1], h = 0, l = this.skinTimeLimitConfigData; h < l.length; h++) {
                        var c = l[h];
                        if (c.TID == u) {
                            e = new Date(c.EndTime);
                            break
                        }
                    }
                    s.dayLeft = 1,
                    s.dayLeft += Math.floor((e.getTime() - i.getTime()) / 1e3 / 60 / 60 / 24)
                }
            }
            return r
        },
        i.prototype.isTimeLimit = function(t, e, i) {
            return t.getTime() > e.getTime() && t.getTime() < i.getTime()
        },
        i.prototype.initGroupFilter = function() {
            this.imgGou.visible = !1,
            this.txtSearch.text = ""
        },
        i.prototype.onRedDot = function(t) {
            var e = this,
            n = t.data.sub,
            r = t.data.index,
            a = t.data.flag;
            if (i.arrRedDot[n - 1][r - 1] = a, 2 == this.curNum) for (var o = this.subMenu.numChildren,
            s = 0; o > s; s++) {
                var u = this.subMenu.getChildAt(s);
                u.dataChanged()
            }
            for (var h = !1,
            l = 0,
            c = i.arrRedDot; l < c.length; l++) {
                var _ = c[l];
                if ( - 1 != _.indexOf(!0)) {
                    h = !0;
                    break
                }
            }
            egret.setTimeout(function() {
                Menu.updateRed(e.groupName, 2, h),
                e.redVisible = h
            },
            this, 50)
        },
        i.prototype.turnDirectly = function(t, e) {
            this.flagRecommend = !!e,
            this.menu.updateView(t)
        },
        i.prototype.turnRechargeDirectly = function() {
            9 != this.curNum && (this.subMenu.dataProvider = new eui.ArrayCollection([]), this.turnDirectly(9))
        },
        i.POP_TYPE_ITEM = 1,
        i.POP_TYPE_MARK = 2,
        i.POP_TYPE_SUIT = 3,
        i.POP_TYPE_CLOTH = 4,
        i.POP_TYPE_CAR = 5,
        i.POP_TYPE_PET = 6,
        i.POP_TYPE_SKIN = 7,
        i.UPDATE_SKIN_ITEM = "updateSkinItem",
        i.UPDATE_SKIN_HAS_BUY_STATE = "updateSkinHasBuyState",
        i.UPDATE_CLOTH_HAS_BUY_STATE = "updateClothHasBuyState",
        i.EVENT_RED_DOT = "eventRedDot",
        i.EVENT_TURN_RECHARGE = "eventTurnRecharge",
        i
    } (BaseModule);
    t.Mall = e,
    __reflect(e.prototype, "mall.Mall")
} (mall || (mall = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                u(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        u((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
mall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "MallCommonItemSkin",
            t.addEventListener(egret.Event.ADDED_TO_STAGE, t.addEvent, t),
            t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t
        }
        return __extends(i, e),
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.imgIcon,
            function() {
                if (e.data.popType == t.Mall.POP_TYPE_ITEM) {
                    var i = {};
                    i.id = e.itemId,
                    tipsPop.TipsPop.openItemPop(i)
                } else if (e.data.popType == t.Mall.POP_TYPE_MARK) {
                    var i = {};
                    i.ins = e.itemId,
                    tipsPop.TipsPop.openCounterMarkPop(i)
                }
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.txtRestrict.text = "",
            this.txtPrice2.text = ""
        },
        i.prototype.dataChanged = function() {
            var e = this;
            if (this.cacheAsBitmap = !0, ImageButtonUtil.remove(this.btnBuy), ImageButtonUtil.add(this.btnBuy,
            function() {
                if (e.data.isVipGift) return MainManager.actorInfo.isVip ? void SocketConnection.sendByQueue(42248, [1],
                function() {
                    e.dataChanged()
                }) : void Alert.show("您不是VIP用户，是否需要前往成为VIP？",
                function() {
                    VipController.openVip()
                });
                if (e.data.isFree) return void SocketConnection.sendByQueue(45825, [e.data.exchangeId, 1],
                function() {
                    e.dataChanged()
                });
                var i = {};
                e.data.popType == t.Mall.POP_TYPE_MARK ? i.type = "mall_buyMark": i.type = "mall_buyItem",
                e.data.oldPrice = e.data.price,
                e.data.Discountprice && (e.data.price = e.data.Discountprice),
                i.ins = e.data,
                e.data.popType != t.Mall.POP_TYPE_MARK && (e.data.itemID = e.itemId),
                i.ins.coinid = 2 == e.data.coins ? 1 : 5,
                i.ins.batch || (i.ins.batch = i.ins.limitnum),
                i.caller = e,
                i.callBack = function(i, n) {
                    t.ShopConfig.getInstance().buy(e.data, n).then(function() {
                        e.hasBuy = !0,
                        e.data.price = e.data.oldPrice,
                        e.dataChanged()
                    })
                },
                ModuleManager.showModuleByID(1, i)
            },
            this, !1), this.imgRedDot.visible = !1, 2 == this.data.coins && (this.data.cointype = 1), this.imgCoin.width = 2 == this.data.coins ? 27 : 18, this.imgCoin.source = 2 == this.data.coins ? "mall_recharge_panel_img2_png": "mall_gift_item_img1_png", this.groupCountdown.visible = !1, this.data.isVipGift) return this.txtName.text = "VIP每日礼包",
            this.imgCoin.width = 0,
            this.imgIcon.source = ClientConfig.getItemIcon(2301001),
            this.itemId = 2301001,
            void KTool.getBitSet([1000231],
            function(i) {
                var n = 1 == i[0];
                e.txtPrice1.text = n ? "已领取": "免费领取",
                DisplayUtil.setEnabled(e.btnBuy, !n, n),
                e.imgRedDot.visible = !n && MainManager.actorInfo.isVip,
                EventManager.dispatchEventWith(t.Mall.EVENT_RED_DOT, !1, {
                    sub: 1,
                    index: 1,
                    flag: e.imgRedDot.visible
                })
            });
            if (this.data.shopExcel) {
                this.txtName.text = this.data.name,
                this.groupCountdown.visible = !0;
                var i = ItemXMLInfo.getTargetItemId(this.data.itemID);
                i > 0 ? (this.data.popType == t.Mall.POP_TYPE_ITEM ? this.imgIcon.source = ClientConfig.getItemIcon(i) : this.data.popType == t.Mall.POP_TYPE_MARK && (this.imgIcon.source = ClientConfig.getMarkPath(i)), this.itemId = i) : (this.imgIcon.source = ClientConfig.getItemIcon(this.data.itemID), this.itemId = this.data.itemID),
                this.data.itemID = this.itemId;
                var n = void 0;
                if (1 == this.data.id ? n = KTool.getBit(this.data.va[0], 5) : 2 == this.data.id ? n = KTool.getBit(this.data.va[1], 27) : 3 == this.data.id ? n = KTool.getBit(this.data.va[1], 28) : 4 == this.data.id ? n = KTool.getBit(this.data.va[2], 1) : 5 == this.data.id && (n = KTool.getBit(this.data.va[1], 1)), this.hasBuy && (n = 1), this.data.id >= 6) return void this.dataChangedOfNewFreeGift();
                DisplayUtil.setEnabled(this.btnBuy, !n, !!n),
                n >= this.data.limitnum ? (this.imgCoin.width = 0, this.txtPrice1.text = this.data.isFree ? "已领取": "已购买", this.txtPrice2.text = "") : this.data.isFree ? (this.imgCoin.width = 0, this.txtPrice2.text = "", this.txtPrice1.text = "免费领取") : (this.txtPrice1.text = this.data.Discountprice, this.txtPrice2.text = this.data.oldPrice ? this.data.oldPrice + "": this.data.price);
                var r = this.data.limitnum;
                return void(1 == this.data.limittype ? this.txtRestrict.text = "每日限购：" + n + "/" + r: 2 == this.data.limittype ? this.txtRestrict.text = "每周限购：" + n + "/" + r: 3 == this.data.limittype ? this.txtRestrict.text = "每月限购：" + n + "/" + r: 4 == this.data.limittype && (this.txtRestrict.text = "永久限购：" + n + "/" + r))
            }
            DisplayUtil.setEnabled(this.btnBuy, !0, !1);
            var a = ItemXMLInfo.getTargetItemId(this.data.itemID);
            a > 0 ? this.data.popType == t.Mall.POP_TYPE_ITEM ? (this.imgIcon.source = ClientConfig.getItemIcon(a), this.itemId = a) : this.data.popType == t.Mall.POP_TYPE_MARK && (this.imgIcon.source = ClientConfig.getMarkPath(a), this.itemId = a) : (this.data.popType == t.Mall.POP_TYPE_ITEM ? (this.imgIcon.source = ClientConfig.getItemIcon(this.data.itemID), this.itemId = a) : this.data.popType == t.Mall.POP_TYPE_MARK && (this.imgIcon.source = ClientConfig.getMarkPath(this.data.itemID), this.itemId = a), this.itemId = this.data.itemID),
            this.data.popType != t.Mall.POP_TYPE_MARK && (this.data.itemID = this.itemId);
            var o = ItemXMLInfo.getName(this.itemId);
            this.txtName.text = StringUtil.parseStrLimitLen(o, 8),
            2 == this.data.coins && (this.data.price = ItemXMLInfo.getPrice(this.data.itemID)),
            this.txtPrice1.text = this.data.oldPrice ? this.data.oldPrice + "": this.data.price
        },
        i.prototype.dataChangedOfNewFreeGift = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([this.data.userInfo])];
                    case 1:
                        return e = n.sent()[0],
                        DisplayUtil.setEnabled(this.btnBuy, !e, !!e),
                        e >= this.data.limitnum ? (this.imgCoin.width = 0, this.txtPrice1.text = this.data.isFree ? "已领取": "已购买", this.txtPrice2.text = "") : this.data.isFree ? (this.imgCoin.width = 0, this.txtPrice2.text = "", this.txtPrice1.text = "免费领取") : (this.txtPrice1.text = this.data.Discountprice, this.txtPrice2.text = this.data.oldPrice ? this.data.oldPrice + "": this.data.price),
                        this.imgRedDot.visible = e < this.data.limitnum,
                        EventManager.dispatchEventWith(t.Mall.EVENT_RED_DOT, !1, {
                            sub: 2,
                            index: this.data.exchangeId,
                            flag: this.imgRedDot.visible
                        }),
                        i = this.data.limitnum,
                        1 == this.data.limittype ? this.txtRestrict.text = "每日限购：" + e + "/" + i: 2 == this.data.limittype ? this.txtRestrict.text = "每周限购：" + e + "/" + i: 3 == this.data.limittype ? this.txtRestrict.text = "每月限购：" + e + "/" + i: 4 == this.data.limittype && (this.txtRestrict.text = "永久限购：" + e + "/" + i),
                        [2]
                    }
                })
            })
        },
        i
    } (eui.ItemRenderer);
    t.CommonItem = e,
    __reflect(e.prototype, "mall.CommonItem")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "MallDressUpItemSkin",
            t.addEventListener(egret.Event.ADDED_TO_STAGE, t.addEvent, t),
            t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t
        }
        return __extends(i, e),
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBuy,
            function() {
                var i = {};
                26 == e.data.type ? i.type = "mall_buySuit": 14 == e.data.type ? i.type = "mall_buyEquipment": i.type = "mall_buyFlypet",
                i.ins = e.data,
                i.caller = e,
                i.callBack = function(i, n) {
                    t.ShopConfig.getInstance().buy(e.data, n).then(function() {
                        egret.setTimeout(function() {
                            e.dataChanged(),
                            EventManager.dispatchEventWith(t.Mall.UPDATE_CLOTH_HAS_BUY_STATE)
                        },
                        null, 300)
                    })
                },
                ModuleManager.showModuleByID(1, i)
            },
            this, !1),
            this.imgIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickIcon, this)
        },
        i.prototype.onClickIcon = function() {
            this.data.popType == t.Mall.POP_TYPE_SUIT ? tipsPop.TipsPop.openSuitPop({
                id: this.itemId
            }) : this.data.popType == t.Mall.POP_TYPE_CLOTH ? tipsPop.TipsPop.openClothesPop({
                clothesId: this.itemId
            }) : this.data.popType == t.Mall.POP_TYPE_CAR && tipsPop.TipsPop.openManualCarPop({
                id: this.itemId
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.dataChanged = function() {
            var t = this;
            if (this.cacheAsBitmap = !0, this.txtCountdown.text = "vip折扣", this.txtName.text = this.data.name, 2 == this.data.coins) this.imgCoin.source = ClientConfig.getItemIcon(1),
            this.imgCoin.width = this.imgCoin.height = 20,
            this.txtPrice2.text = ItemXMLInfo.getPrice(this.data.itemID) + "",
            this.groupCountdown.visible = this.groupPriceCountdown.visible = !1,
            this.txtPrice1.text = "";
            else {
                this.imgCoin.source = "mall_gift_item_img1_png",
                this.imgCoin.width = this.imgCoin.height = 18;
                var e = this.data.vip;
                if (1 == e) this.groupCountdown.visible = this.groupPriceCountdown.visible = !1,
                this.txtPrice1.text = "",
                this.txtPrice2.text = GoldProductXMLInfo.getPriceByProID(this.data.productID) + "";
                else {
                    this.groupCountdown.visible = !0;
                    var i = GoldProductXMLInfo.getPriceByProID(this.data.productID);
                    this.groupPriceCountdown.visible = !0,
                    this.txtPrice1.text = i + "",
                    this.txtPrice2.text = i * GoldProductXMLInfo.getVipByProID(this.data.productID) + "",
                    this.txtCountdown.text = "vip" + 10 * GoldProductXMLInfo.getVipByProID(this.data.productID) + "折"
                }
            }
            var n;
            if (26 == this.data.type) {
                var r = this.data.itemID.split("|").map(Number),
                a = SuitXMLInfo.getSuitID(r);
                n = ClientConfig.getSuitBodyPng(a),
                this.itemId = a
            } else 14 == this.data.type ? (n = ClientConfig.getclothicon(this.data.itemID), this.itemId = this.data.itemID) : (n = ClientConfig.getMountIcon(this.data.itemID), this.itemId = this.data.itemID);
            this.data.hasBuy ? (this.imgCoin.width = 0, this.txtPrice1.text = "", this.txtPrice2.text = "已拥有", DisplayUtil.setEnabled(this.btnBuy, !1, !0)) : DisplayUtil.setEnabled(this.btnBuy, !0, !1),
            RES.getResByUrl(n,
            function(e) {
                t.imgIcon.texture = e,
                t.imgIcon.validateNow(),
                egret.setTimeout(function() {
                    var e = 1;
                    t.imgIcon.height > 128 && (e = 128 / t.imgIcon.height),
                    t.imgIcon.scaleX = e,
                    t.imgIcon.scaleY = e
                },
                null, 0)
            },
            null, RES.ResourceItem.TYPE_IMAGE)
        },
        i
    } (eui.ItemRenderer);
    t.DressUpItem = e,
    __reflect(e.prototype, "mall.DressUpItem")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "MallCommonItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.imgIcon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: t.itemId
                })
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                var e = t.data.data.price.split("_");
                ItemManager.getNumByID(e[1]) >= e[2] ? SocketConnection.sendByQueue(41957, [t.data.index],
                function() {
                    EventManager.dispatchEventWith("mall_exchange_update")
                }) : BubblerManager.getInstance().showText("您的道具数量不足")
            },
            this, !1),
            this.imgRedDot.visible = !1,
            this.imgIcon.verticalCenter = -5
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.dataChanged = function() {
            var t = this.data.data;
            this.imgBG.source = "rarity_mall_item_" + t.type + "_png";
            var e = t.price.split("_");
            this.imgCoin.source = ClientConfig.getItemIcon(e[1]),
            this.imgCoin.height = this.imgCoin.width = this.data.hasBuy ? 0 : 1 == +e[1] ? 27 : 18,
            this.txtPrice1.text = this.data.hasBuy ? "已购买": core.gameUtil.ConvertItemNumView(e[2]),
            DisplayUtil.setEnabled(this.btnBuy, !this.data.hasBuy, !0);
            var i = t.rewardinfo.split("_");
            this.itemId = +i[1],
            this.txtName.text = ItemXMLInfo.getName(this.itemId),
            this.imgIcon.source = ClientConfig.getItemIcon(this.itemId)
        },
        e
    } (eui.ItemRenderer);
    t.ExchangeItem = e,
    __reflect(e.prototype, "mall.ExchangeItem")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "MallGiftBuyItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            this.cacheAsBitmap = !0,
            ImageButtonUtil.add(this.imgIcon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: t.data.id
                })
            },
            this)
        },
        e.prototype.dataChanged = function() {
            this.txtNum.text = "数量：" + this.data.num,
            this.txtName.text = ItemXMLInfo.getName(this.data.id),
            this.imgIcon.source = ClientConfig.getItemIcon(this.data.id)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        e
    } (eui.ItemRenderer);
    t.GiftBuyItem = e,
    __reflect(e.prototype, "mall.GiftBuyItem")
} (mall || (mall = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                u(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        u((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
mall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "MallBigGiftAndPetItemSkin",
            t.reward.visible = !1,
            t.imgIcon.width = 219,
            t.imgIcon.height = 204,
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            var e = this;
            if (this.cacheAsBitmap = !0, ImageButtonUtil.remove(this.btnBuy), this.txtRestrict.parent.visible = !1, ImageButtonUtil.add(this.imgIcon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: e.itemId
                })
            },
            this), ImageButtonUtil.add(this.btnBuy,
            function() {
                if (e.data.isVipGift) return void(MainManager.actorInfo.isVip ? SocketConnection.sendByQueue(42248, [1],
                function() {
                    e.dataChanged()
                }) : Alert.show("您不是VIP用户，是否需要前往成为VIP？",
                function() {
                    VipController.openVip()
                }));
                if (e.data.isFree) return void SocketConnection.sendByQueue(45825, [e.data.exchangeId, 1],
                function() {
                    e.dataChanged()
                });
                var i = new t.GiftBuyPop({
                    id: e.data.itemID,
                    price: e.data.Discountprice || e.data.price,
                    maxNum: e.data.limitnum || 99,
                    callback: function(i) {
                        t.ShopConfig.getInstance().buy(e.data, i).then(function() {
                            e.data.hasBuy = !0,
                            e.data.price = e.data.oldPrice || e.data.price,
                            e.dataChanged()
                        })
                    },
                    caller: e
                });
                PopViewManager.getInstance().openView(i)
            },
            this, !1), this.txtPrice1.text = "", this.groupTag.visible = !1, this.imgRedDot.visible = !1, 2 == this.data.coins && (this.data.cointype = 1), this.imgCoin.width = 2 == this.data.coins ? 27 : 25, this.imgCoin.source = 2 == this.data.coins ? "mall_recharge_panel_img2_png": "mall_gift_item_img1_png", this.data.isVipGift) return this.txtName.text = "VIP每日礼包",
            this.imgCoin.width = 0,
            this.imgIcon.source = this.getIconSource(2301001),
            this.itemId = 2301001,
            void KTool.getBitSet([1000231],
            function(i) {
                var n = 1 == i[0];
                e.txtHas.text = "已领取",
                e.txtHas.visible = n,
                e.btnBuy.visible = !n,
                e.txtPrice2.text = "免费领取",
                DisplayUtil.setEnabled(e.btnBuy, !n, n),
                e.imgRedDot.visible = !n && MainManager.actorInfo.isVip,
                EventManager.dispatchEventWith(t.Mall.EVENT_RED_DOT, !1, {
                    sub: 1,
                    index: 1,
                    flag: e.imgRedDot.visible
                })
            });
            if (this.data.shopExcel) {
                this.txtName.text = this.data.name,
                this.groupTag.visible = !0,
                this.txtTag.text = "特惠";
                var i = ItemXMLInfo.getTargetItemId(this.data.itemID);
                i > 0 ? this.itemId = i: this.itemId = this.data.itemID,
                this.data.itemID = this.itemId,
                this.imgIcon.source = this.getIconSource(this.itemId);
                var n = void 0;
                if (1 == this.data.id ? n = KTool.getBit(this.data.va[0], 5) : 2 == this.data.id ? n = KTool.getBit(this.data.va[1], 27) : 3 == this.data.id ? n = KTool.getBit(this.data.va[1], 28) : 4 == this.data.id ? n = KTool.getBit(this.data.va[2], 1) : 5 == this.data.id && (n = KTool.getBit(this.data.va[1], 1)), this.data.hasBuy && (n = 1), this.data.id >= 6) return void this.dataChangedOfNewFreeGift();
                DisplayUtil.setEnabled(this.btnBuy, !n, !!n),
                n >= this.data.limitnum ? (this.imgCoin.width = 0, this.txtHas.visible = !0, this.btnBuy.visible = !1, this.txtHas.text = this.data.isFree ? "已领取": "已购买") : (this.btnBuy.visible = !0, this.txtHas.visible = !1, this.data.isFree ? (this.imgCoin.width = 0, this.txtPrice2.text = "免费领取") : (this.txtPrice2.text = this.data.Discountprice, this.txtPrice1.text = this.data.oldPrice ? this.data.oldPrice + "": this.data.price)),
                this.txtRestrict.parent.visible = !0;
                var r = this.data.limitnum;
                return void(1 == this.data.limittype ? this.txtRestrict.text = "每日限购：" + n + "/" + r: 2 == this.data.limittype ? this.txtRestrict.text = "每周限购：" + n + "/" + r: 3 == this.data.limittype ? this.txtRestrict.text = "每月限购：" + n + "/" + r: 4 == this.data.limittype ? this.txtRestrict.text = "永久限购：" + n + "/" + r: this.txtRestrict.parent.visible = !1)
            }
            this.btnBuy.visible = !0,
            this.txtHas.visible = !1,
            DisplayUtil.setEnabled(this.btnBuy, !0, !1);
            var a = ItemXMLInfo.getTargetItemId(this.data.itemID);
            a > 0 ? this.itemId = a: this.itemId = this.data.itemID,
            this.imgIcon.source = this.getIconSource(this.itemId),
            this.data.popType != t.Mall.POP_TYPE_MARK && (this.data.itemID = this.itemId);
            var o = ItemXMLInfo.getName(this.itemId);
            this.txtName.text = StringUtil.parseStrLimitLen(o, 8),
            2 == this.data.coins && (this.data.price = ItemXMLInfo.getPrice(this.data.itemID)),
            this.txtPrice2.text = this.data.oldPrice ? this.data.oldPrice + "": this.data.price
        },
        i.prototype.dataChangedOfNewFreeGift = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([this.data.userInfo])];
                    case 1:
                        return e = n.sent()[0],
                        DisplayUtil.setEnabled(this.btnBuy, !e, !!e),
                        e >= this.data.limitnum ? (this.imgCoin.width = 0, this.txtHas.visible = !0, this.btnBuy.visible = !1, this.txtHas.text = this.data.isFree ? "已领取": "已购买") : (this.btnBuy.visible = !0, this.txtHas.visible = !1, this.data.isFree ? (this.imgCoin.width = 0, this.txtPrice2.text = "免费领取") : (this.txtPrice2.text = this.data.Discountprice, this.txtPrice1.text = this.data.oldPrice ? this.data.oldPrice + "": this.data.price)),
                        this.imgRedDot.visible = e < this.data.limitnum,
                        EventManager.dispatchEventWith(t.Mall.EVENT_RED_DOT, !1, {
                            sub: 2,
                            index: this.data.exchangeId,
                            flag: this.imgRedDot.visible
                        }),
                        this.txtRestrict.parent.visible = !0,
                        i = this.data.limitnum,
                        1 == this.data.limittype ? this.txtRestrict.text = "每日限购：" + e + "/" + i: 2 == this.data.limittype ? this.txtRestrict.text = "每周限购：" + e + "/" + i: 3 == this.data.limittype ? this.txtRestrict.text = "每月限购：" + e + "/" + i: 4 == this.data.limittype ? this.txtRestrict.text = "永久限购：" + e + "/" + i: this.txtRestrict.parent.visible = !1,
                        [2]
                    }
                })
            })
        },
        i.prototype.getIconSource = function(t) {
            return "resource/assets/mall/giftIcon/" + t + ".png"
        },
        i
    } (BaseItemRenderer);
    t.GiftItem = e,
    __reflect(e.prototype, "mall.GiftItem")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "MallBigGiftAndPetItemSkin",
            t.imgIcon.height = 456,
            t.addEventListener(egret.Event.ADDED_TO_STAGE, t.addEvent, t),
            t
        }
        return __extends(i, e),
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBuy,
            function() {
                t.ShopConfig.getInstance().buy(e.data, 1)
            },
            this, !1),
            ImageButtonUtil.add(this.imgIcon,
            function() {
                PetManager.showPetManualInfo(e.data.MonsterID, 1)
            },
            this, !1, !1),
            ImageButtonUtil.add(this.petIcon,
            function() {
                PetManager.showPetManualInfo(e.data.MonsterID, 1)
            },
            this),
            ImageButtonUtil.add(this.skillIcon,
            function() {
                var t = {};
                t.id = e.data.moveID,
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.specialIcon,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], e.data.MonsterID, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.markIcon,
            function() {
                var t = {};
                t.ins = e.data.mintMark,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this)
        },
        i.prototype.dataChanged = function() {
            this.cacheAsBitmap = !0,
            this.txtHas.visible = !1,
            this.txtRestrict.parent.visible = !1,
            this.reward.visible = !0,
            DisplayUtil.setEnabled(this.btnBuy, !0, !1);
            var t = this.data.MonsterID;
            this.txtName.text = PetXMLInfo.getName(t),
            this.imgIcon.source = this.getPetSource(t),
            this.petIcon.source = ClientConfig.getPetHeadPath(t),
            this.markIcon.source = ClientConfig.getMarkPath(this.data.mintMark),
            this.txtPrice1.text = "",
            this.txtPrice2.text = this.data.price,
            this.data.hasBuy && this.setHasBuy()
        },
        i.prototype.setHasBuy = function() {
            this.imgCoin.width = 0,
            this.txtHas.visible = !0,
            this.txtPrice1.text = this.txtPrice2.text = "",
            DisplayUtil.setEnabled(this.btnBuy, !1, !0)
        },
        i.prototype.getPetSource = function(t) {
            return "resource/assets/mall/petIcon/" + t + ".png"
        },
        i
    } (BaseItemRenderer);
    t.PetItem = e,
    __reflect(e.prototype, "mall.PetItem")
} (mall || (mall = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                u(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        u((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
mall; !
function(t) {
    var e = function() {
        function t() {
            this._shopConfig = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("shop_config")).root
        }
        return t.getInstance = function() {
            return t._instance || (t._instance = new t),
            t._instance
        },
        t.prototype.getFirstMenuById = function(t) {
            return this._shopConfig.menu[~~t]
        },
        t.prototype.buy = function(t, e) {
            return void 0 === e && (e = 1),
            __awaiter(this, void 0, void 0,
            function() {
                var i, n, r, a, o;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        if (!t.checkown) return [3, 4];
                        for (i = t.checkown.split("|"), n = !0, r = 0, a = i; r < a.length; r++) o = a[r],
                        0 == ItemManager.getNumByID(~~o) && (n = !1);
                        return n ? (Alarm.show("当前物品已拥有无需再次购买！"), [3, 3]) : [3, 1];
                    case 1:
                        return [4, this.confirmbuy(t, e)];
                    case 2:
                        s.sent(),
                        s.label = 3;
                    case 3:
                        return [3, 10];
                    case 4:
                        return t.productID > 0 && 201312091 != t.productID ? this.checkIsCanBuy(t) ? [4, this.confirmbuy(t, e)] : [3, 6] : [3, 8];
                    case 5:
                        return s.sent(),
                        [3, 7];
                    case 6:
                        Alarm.show("当前物品已拥有无需再次购买！"),
                        s.label = 7;
                    case 7:
                        return [3, 10];
                    case 8:
                        return [4, this.confirmbuy(t, e)];
                    case 9:
                        s.sent(),
                        s.label = 10;
                    case 10:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        t.prototype.checkIsCanBuy = function(t) {
            if (MoneyProductXMLInfo.containsPid(t.productID) ? this._midItemId = ~~MoneyProductXMLInfo.getItemIDs(t.productID)[0] : this._midItemId = ~~GoldProductXMLInfo.getItemIDs(t.productID)[0], 3 == ItemXMLInfo.getExchangeType(this._midItemId)) {
                for (var e = t.itemID.toString().split("|"), i = !0, n = 0, r = e; n < r.length; n++) {
                    var a = r[n];
                    0 == ItemManager.getNumByID(~~a) && (i = !1)
                }
                return i ? !1 : !0
            }
            return ! 0
        },
        t.prototype.confirmbuy = function(t, e) {
            var i = this;
            return t.exchangeId ? new Promise(function(i) {
                KTool.buyProductByCallback(t.productID, e,
                function() {
                    KTool.doExchange(t.exchangeId, e,
                    function() {
                        EventManager.dispatchEvent(new DynamicEvent("SuperMArketBuyNewItem", t.exchangeId)),
                        i()
                    })
                })
            }) : t.usenew ? new Promise(function(i) {
                KTool.buyProductByCallback(t.productID, e,
                function() {
                    SocketConnection.sendByQueue(42248, [t.usenew],
                    function() {
                        EventManager.dispatchEvent(new DynamicEvent("SuperMArketBuyNewItem", t.usenew)),
                        i()
                    })
                })
            }) : t.specialPreferential > 0 ? (this.buyspecialPreferential(t, e), Promise.resolve()) : ItemXMLInfo.getExchangeType(this._midItemId) > 0 && t.productID > 0 ? new Promise(function(n) {
                KTool.buyProductByCallback(t.productID, e,
                function() {
                    SocketConnection.sendWithCallback(45775,
                    function() {
                        i._midItemId = 0,
                        247483 == t.productID && EventManager.dispatchEvent(new DynamicEvent("SuperMArketBuyNewItem", 2)),
                        n()
                    },
                    [i._midItemId, e])
                })
            }) : new Promise(function(n) {
                if (GoldProductXMLInfo.containsPid(t.productID)) {
                    var r = function() {
                        n(),
                        a()
                    },
                    a = function() {
                        EventManager.removeEventListener(RobotEvent.GOLD_BUY, r, i),
                        EventManager.removeEventListener(RobotEvent.NOT_ENOUGH_BUY, a, i),
                        EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY, a, i)
                    };
                    ProductAction.buyGoldProduct(t.productID, e),
                    EventManager.addEventListener(RobotEvent.GOLD_BUY, r, i),
                    EventManager.addEventListener(RobotEvent.NOT_ENOUGH_BUY, a, i),
                    EventManager.addEventListener(RobotEvent.CANCEL_MONEY_BUY, a, i)
                } else 2 == t.coins && ProductAction.buyCoinsProduct2(parseInt(t.itemID), e,
                function() {
                    n()
                })
            })
        },
        t.prototype.buyspecialPreferential = function(e, i) {
            SocketConnection.sendWithCallback(CommandID.GET_FULL_LEVEL_PET_NUM,
            function(n) {
                var r = n.data;
                r.position = 0;
                var a = r.readUnsignedInt(),
                o = !1;
                switch (e.specialPreferential) {
                case t.PREFRENTIAL_TYPE_1:
                    0 == a && (o = !0);
                    break;
                case t.PREFRENTIAL_TYPE_2:
                    a > 0 && 6 > a && (o = !0);
                    break;
                case t.PREFRENTIAL_TYPE_3:
                    a >= 6 && 30 >= a && (o = !0);
                    break;
                case t.PREFRENTIAL_TYPE_4:
                    a >= 30 && (o = !0)
                }
                o ? ProductAction.buyMoneyProduct(e.targetProductId, i) : ProductAction.buyMoneyProduct(e.productID, i)
            })
        },
        t._instance = null,
        t.PREFRENTIAL_TYPE_1 = 1,
        t.PREFRENTIAL_TYPE_2 = 2,
        t.PREFRENTIAL_TYPE_3 = 3,
        t.PREFRENTIAL_TYPE_4 = 4,
        t
    } ();
    t.ShopConfig = e,
    __reflect(e.prototype, "mall.ShopConfig")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "MallSkinItemSkin",
            t.addEventListener(egret.Event.ADDED_TO_STAGE, t.addEvent, t),
            t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t
        }
        return __extends(i, e),
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBuy,
            function() {
                return e.data.CardPrice > ItemManager.getNumByID(1723116) ? void BubblerManager.getInstance().showText("你的皮肤礼卡数量不足") : void Alert.show(TextFormatUtil.getRedTxt(e.data.Name) + "需要花费" + TextFormatUtil.getRedTxt(e.data.CardPrice) + "皮肤礼卡，你的皮肤礼卡数量为" + TextFormatUtil.getRedTxt(ItemManager.getNumByID(1723116) + "") + "，确认购买此物品吗？",
                function() {
                    SocketConnection.sendByQueue(43327, [e.data.ID],
                    function() {
                        e.setHasBuy(),
                        EventManager.dispatchEventWith(t.Mall.UPDATE_SKIN_HAS_BUY_STATE)
                    })
                })
            },
            this, !1),
            ImageButtonUtil.add(this.imgPet,
            function() {
                PetManager.showPetManualInfo(e.data.ID, 2)
            },
            this, !1, !1)
        },
        i.prototype.destroy = function() {
            this.txtPrice1.text = "",
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.dataChanged = function() {
            this.cacheAsBitmap = !0,
            this.btnBuy.visible = !0,
            this.txtHas.visible = !1,
            this.groupTime.visible = !1,
            this.data.popType == t.Mall.POP_TYPE_PET ? (this.imgCoin.source = "mall_gift_item_img1_png", this.imgCoin.width = 17) : (this.imgCoin.source = "mall_skin_item_img3_png", this.imgCoin.width = 25),
            this.txtName.text = this.data.Name,
            this.imgPet.source = ClientConfig.getPetHalfIcon(this.data.SkinID),
            this.data.OriginalPrice ? (this.txtPrice1.text = this.data.OriginalPrice, this.txtPrice2.text = this.data.CardPrice, this.groupCountdown.visible = this.groupPriceCountDown.visible = !0, this.txtCountdown.text = "特惠") : (this.txtPrice2.text = this.data.CardPrice, this.txtPrice1.text = "", this.groupCountdown.visible = this.groupPriceCountDown.visible = !1),
            this.data.dayLeft && (this.groupTime.visible = !0, this.txtTime.text = "剩" + this.data.dayLeft + "天", this.groupCountdown.visible || (this.groupCountdown.visible = !0, this.txtCountdown.text = "限时")),
            this.data.hasBuy && this.setHasBuy()
        },
        i.prototype.setHasBuy = function() {
            this.txtHas.visible = !0,
            this.btnBuy.visible = !1
        },
        i
    } (eui.ItemRenderer);
    t.SkinItem = e,
    __reflect(e.prototype, "mall.SkinItem")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "MallSubMenuSkin",
            t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            this.txtUp.text = this.data,
            this.txtDown.text = this.data,
            "日常礼包" == this.data ? this.imgRedDot.visible = -1 != t.Mall.arrRedDot[0].indexOf(!0) : "限时礼包" == this.data ? this.imgRedDot.visible = -1 != t.Mall.arrRedDot[1].indexOf(!0) : this.imgRedDot.visible = !1
        },
        i.prototype.destroy = function() {
            HotRedManager.getInstance().removeRegisterHotEventAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.SubMenuItem = e,
    __reflect(e.prototype, "mall.SubMenuItem")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "MallGiftBuyPopSkin",
            i.data = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.txtName.text = ItemXMLInfo.getName(this.data.id),
            this.imgIcon.source = ClientConfig.getItemIcon(this.data.id),
            this.maxNum = Math.min(this.data.maxNum, Math.floor(UserInfoManager.diamond / this.data.price)),
            this.setNum(1);
            var e = ItemXMLInfo.getItemObj(this.data.id),
            i = (e.ExchangeOutId + "").split("|").map(Number),
            n = (e.ExchangeOutCnt + "").split("|").map(Number),
            r = [];
            for (var a in i) r.push({
                id: i[a],
                num: n[a]
            });
            this.list.itemRenderer = t.GiftBuyItem,
            this.list.dataProvider = new eui.ArrayCollection(r)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                t.setNum(t.curNum + 1)
            },
            this),
            ImageButtonUtil.add(this.btnReduce,
            function() {
                t.setNum(t.curNum - 1)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                t.hide(),
                t.data.callback.call(t.data.caller, t.curNum)
            },
            this),
            this.slideArea.addEventListener(egret.TouchEvent.TOUCH_MOVE,
            function(e) {
                var i = e.localX / 236;
                t.setNum(Math.round(i * t.maxNum))
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this);
            for (var t = this.list.numChildren,
            e = 0; t > e; e++) {
                var i = this.list.getChildAt(e);
                i.destroy()
            }
        },
        i.prototype.setNum = function(t) {
            1 > t && (t = 1),
            t > this.maxNum && (t = this.maxNum),
            this.curNum = t,
            this.txtNum.text = "购买数量：" + this.curNum,
            this.txtPrice.text = "" + this.curNum * this.data.price,
            DisplayUtil.setEnabled(this.btnBuy, this.curNum > 0);
            var e = this.curNum,
            i = this.maxNum;
            this.maxNum > 0 ? (1 == this.curNum && 1 == this.maxNum && (e = 2, i = 2), this.imgSlide.width = 236 * (e - 1) / (i - 1)) : this.imgSlide.width = 0,
            this.imgSlideRect.x = 112 + this.imgSlide.width
        },
        i
    } (PopView);
    t.GiftBuyPop = e,
    __reflect(e.prototype, "mall.GiftBuyPop")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "MallRechargePopSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.addEvent(),
            this.initItem()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnExchange100,
            function() {
                t.exchange(100)
            },
            this),
            ImageButtonUtil.add(this.btnExchange500,
            function() {
                t.exchange(500)
            },
            this),
            ImageButtonUtil.add(this.btnExchange1000,
            function() {
                t.exchange(1e3)
            },
            this),
            ImageButtonUtil.add(this.btnConfirm,
            function() {
                t.exchange( + t.inputNum.text)
            },
            this),
            ImageButtonUtil.add(this.imgDiamond,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            SocketConnection.addCmdListener(CommandID.MONEY_BUY_PRODUCT,
            function() {
                t.updateMiCoin(),
                egret.setTimeout(function() {
                    SocketConnection.sendByQueue(CommandID.REFRESH_USER_VIPINFO, [])
                },
                t, 2e3)
            },
            this)
        },
        e.prototype.initItem = function() {
            this.imgDiamond.source = ClientConfig.getItemIcon(5),
            this.updateMiCoin(),
            this.updateDiamond(),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED, this.updateDiamond, this)
        },
        e.prototype.updateDiamond = function(t) {
            var e = this;
            if (t) {
                var i = t.data;
                this.txtNumDiamond.text = core.gameUtil.ConvertItemNumView(i)
            } else UserInfoManager.getDiamond(function(t) {
                e.txtNumDiamond.text = core.gameUtil.ConvertItemNumView(t)
            },
            this)
        },
        e.prototype.updateMiCoin = function() {
            var t = this;
            EventManager.dispatchEventWith(RobotEvent.MONEY_BUY),
            SocketConnection.sendByQueue(CommandID.MONEY_CHECK_REMAIN, [],
            function(e) {
                var i = e.data;
                i.position = 0;
                var n = Math.floor(i.readUnsignedInt() / 10) / 10;
                t.txtNumMiCoin.text = core.gameUtil.ConvertItemNumView(n)
            }),
            this.num && (tipsPop.TipsPop.openGetDiamondPop(this.num), this.num = null)
        },
        e.prototype.destroy = function() {
            SocketConnection.removeCmdListener(CommandID.MONEY_BUY_PRODUCT, this.updateMiCoin, this),
            EventManager.removeEventListener(RobotEvent.DIAMOND_CHANGED, this.updateDiamond, this),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e.prototype.exchange = function(t) {
            return 0 >= t || t > 1e4 ? void BubblerManager.getInstance().showText("请输入1-10000的数字") : t % 10 != 0 ? void BubblerManager.getInstance().showText("兑换数量必须为10的倍数") : (ProductAction.buyMoneyProduct(200003, t), void(this.num = t))
        },
        e
    } (PopView);
    t.RechargePop = e,
    __reflect(e.prototype, "mall.RechargePop")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "SkinPopSkin",
            t
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "curNum", {
            get: function() {
                return this._curNum
            },
            set: function(t) {
                this._curNum = t,
                this.txtNum.text = t + "",
                this.txtNumChip1.text = 10 * t + ""
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.childrenCreated = function() {
            this.addEvent(),
            this.init()
        },
        i.prototype.init = function() {
            this.imgIcon.source = ClientConfig.getItemIcon(1723116);
            var t = ItemManager.getNumByID(1723117);
            this.maxNum = Math.floor(t / 10),
            this.maxNum < 1 && (this.maxNum = 1),
            this.txtNumChip2.text = "/" + t,
            this.curNum = 1
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnHC, this.hc, this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                t.setNum(t.curNum + 1)
            },
            this),
            ImageButtonUtil.add(this.btnMinus,
            function() {
                t.setNum(t.curNum - 1)
            },
            this),
            ImageButtonUtil.add(this.btnMax,
            function() {
                t.setNum(Number.POSITIVE_INFINITY)
            },
            this),
            ImageButtonUtil.add(this.btnMin,
            function() {
                t.setNum(1)
            },
            this)
        },
        i.prototype.setNum = function(t) {
            1 > t ? t = 1 : t > this.maxNum && (t = this.maxNum),
            this.curNum = t
        },
        i.prototype.hc = function() {
            var e = this;
            return + this.txtNumChip1.text > ItemManager.getNumByID(1723117) ? void BubblerManager.getInstance().showText("你的碎片不足！") : void KTool.doExchange(13234, this.curNum,
            function() {
                ItemManager.updateItems([1723116, 1723117],
                function() {
                    EventManager.dispatchEventWith(t.Mall.UPDATE_SKIN_ITEM)
                }),
                PopViewManager.getInstance().hideView(e)
            })
        },
        i
    } (PopView);
    t.SkinPop = e,
    __reflect(e.prototype, "mall.SkinPop")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.itemId = 1400156,
            t.skinName = "MallExchangeViewSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnRefresh,
            function() {
                return e.numTimes >= 20 ? void BubblerManager.getInstance().showText("今日刷新次数已达上限") : e.hasSpecial ? void Alert.show("当前交易所内有珍贵道具尚未兑换，是否确认刷新？",
                function() {
                    e.confirmRefresh()
                }) : void e.confirmRefresh()
            },
            this),
            this.list.itemRenderer = t.ExchangeItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.touchEnabled = !1,
            EventManager.addEventListener("mall_exchange_update", this.update, this)
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this);
            for (var t = 0; t < this.list.numChildren; t++) {
                var e = this.list.getChildAt(t);
                e.destroy()
            }
        },
        i.prototype.confirmRefresh = function() {
            var t = this;
            return this.numTimes >= 5 && ItemManager.getNumByID(this.itemId) <= 0 ? void(MainManager.actorInfo.coins < 1e6 ? BubblerManager.getInstance().showText("道具数量不足") : (egret.lifecycle.stage.touchChildren = !1, SocketConnection.sendByQueue(41957, [100],
            function() {
                SocketConnection.sendByQueue(41956, [],
                function() {
                    t.update(),
                    egret.lifecycle.stage.touchChildren = !0
                },
                function() {
                    egret.lifecycle.stage.touchChildren = !0
                })
            },
            function() {
                egret.lifecycle.stage.touchChildren = !0
            }))) : (egret.lifecycle.stage.touchChildren = !1, void SocketConnection.sendByQueue(41956, [],
            function() {
                t.update(),
                egret.lifecycle.stage.touchChildren = !0
            },
            function() {
                egret.lifecycle.stage.touchChildren = !0
            }))
        },
        i.prototype.update = function() {
            var t = this;
            return config.Mallrefresh.hasLoader ? void SocketConnection.sendByQueue(41955, [],
            function(e) {
                var i = e.data;
                t.numTimes = i.readUnsignedInt(),
                t.txtAllTimes.text = 20 - t.numTimes + "/20",
                t.txtFreeTimes.text = Math.max(0, 5 - t.numTimes) + "/5",
                t.txtCoin.text = ItemManager.getNumByID(t.itemId) + "",
                t.numTimes < 5 || ItemManager.getNumByID(t.itemId) > 0 ? (t.txtConsume.x = 325, t.txtConsume.text = "免费", t.imgCoin.source = null) : (t.txtConsume.x = 350, t.txtConsume.text = "100万", t.imgCoin.source = ClientConfig.getItemIcon(1));
                var n = i.readUnsignedInt(),
                r = i.readUnsignedInt(),
                a = [];
                t.hasSpecial = !1;
                for (var o = 0; r > o; o++) {
                    var s = config.Mallrefresh.getItem(i.readUnsignedInt());
                    if (s) {
                        var u = !!KTool.getBit(n, o + 1);
                        a[o] = {
                            data: s,
                            hasBuy: u,
                            index: o
                        },
                        s.type >= 4 && !u && (t.hasSpecial = !0)
                    }
                }
                t.arrayCollection.source = a
            }) : void config.Mallrefresh.load(this.update, this)
        },
        i
    } (eui.Component);
    t.ExchangeView = e,
    __reflect(e.prototype, "mall.ExchangeView")
} (mall || (mall = {}));
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
mall; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "MallRecommendPanelSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGo1,
            function() {
                t.parent.parent.parent.turnDirectly(8)
            },
            this),
            ImageButtonUtil.add(this.btnGo2,
            function() {
                t.parent.parent.parent.turnDirectly(5),
                t.parent.parent.parent.subMenu.dataProvider = new eui.ArrayCollection(["精灵王刻印", "秩序刻印"]),
                t.parent.parent.parent.subMenu.selectedIndex = 0
            },
            this),
            ImageButtonUtil.add(this.btnGo3,
            function() {
                t.parent.parent.parent.turnDirectly(7, 2),
                t.parent.parent.parent.subMenu.dataProvider = new eui.ArrayCollection(["炫酷套装", "能力套装", "变形套装", "特殊单品"]),
                t.parent.parent.parent.subMenu.selectedIndex = 1
            },
            this),
            ImageButtonUtil.add(this.btnGo4,
            function() {
                t.parent.parent.parent.turnDirectly(2, 2),
                t.parent.parent.parent.subMenu.dataProvider = new eui.ArrayCollection(["日常礼包", "限时礼包"]),
                t.parent.parent.parent.subMenu.selectedIndex = 1
            },
            this)
        },
        e
    } (eui.Component);
    t.RecommendView = e,
    __reflect(e.prototype, "mall.RecommendView")
} (mall || (mall = {}));
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
generateEUI.paths["resource/eui_skins/item/MallBigGiftAndPetItemSkin.exml"] = window.MallBigGiftAndPetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgIcon", "txtName", "petIcon", "skillIcon", "specialIcon", "markIcon", "reward", "txtRestrict", "imgCoin", "txtPrice2", "txtPrice1", "groupPriceCountDown", "btnBuy", "txtHas", "txtTag", "groupTag", "imgRedDot"],
        this.height = 484,
        this.width = 264,
        this.elementsContent = [this._Image1_i(), this.imgIcon_i(), this._Image2_i(), this._Image3_i(), this.txtName_i(), this.reward_i(), this._Group1_i(), this.btnBuy_i(), this.txtHas_i(), this.groupTag_i(), this.imgRedDot_i(), this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mall_big_gift_item_imgbg_png",
        t.x = -18,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.fillMode = "clip",
        t.height = 456,
        t.horizontalCenter = 2,
        t.verticalCenter = 6,
        t.width = 232,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mall_big_gift_item_petTitleBg_png",
        t.width = 236,
        t.x = 15,
        t.y = 16,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.bottom = 13,
        t.height = 128,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(42, 97, 7, 24),
        t.source = "mall_skin_item_imgnamebg2_png",
        t.width = 234,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20,
        t.textColor = 16645631,
        t.y = 26,
        t
    },
    i.reward_i = function() {
        var t = new eui.Group;
        return this.reward = t,
        t.touchThrough = !0,
        t.visible = !0,
        t.x = 15,
        t.y = 15,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.petIcon_i(), this.skillIcon_i(), this.specialIcon_i(), this.markIcon_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 126,
        t.source = "mall_big_gift_item_reward_bg1_png",
        t.width = 241,
        t.x = -3,
        t.y = 337,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "mall_big_gift_item_reward_bg2_png",
        t.x = 7,
        t.y = 345,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "mall_big_gift_item_reward_bg2_png",
        t.x = 63,
        t.y = 345,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "mall_big_gift_item_reward_bg2_png",
        t.x = 119,
        t.y = 345,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "mall_big_gift_item_reward_bg2_png",
        t.x = 175,
        t.y = 345,
        t
    },
    i.petIcon_i = function() {
        var t = new eui.Image;
        return this.petIcon = t,
        t.height = 48,
        t.source = "",
        t.width = 48,
        t.x = 9,
        t.y = 347,
        t
    },
    i.skillIcon_i = function() {
        var t = new eui.Image;
        return this.skillIcon = t,
        t.source = "mall_big_gift_item_skill_png",
        t.x = 68,
        t.y = 350,
        t
    },
    i.specialIcon_i = function() {
        var t = new eui.Image;
        return this.specialIcon = t,
        t.source = "mall_big_gift_item_special_png",
        t.x = 124,
        t.y = 354,
        t
    },
    i.markIcon_i = function() {
        var t = new eui.Image;
        return this.markIcon = t,
        t.height = 48,
        t.source = "",
        t.width = 48,
        t.x = 177,
        t.y = 347,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 37,
        t.y = 387,
        t.elementsContent = [this._Image9_i(), this.txtRestrict_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "mall_big_gift_item_imgrestrice_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtRestrict_i = function() {
        var t = new eui.Label;
        return this.txtRestrict = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "限兑：0/1",
        t.textColor = 16774759,
        t.y = 3,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.height = 62,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.width = 245,
        t.y = 415,
        t.elementsContent = [this._Image10_i(), this._Group2_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "mall_big_gift_item_imgbuybg_png",
        t.top = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgCoin_i(), this.txtPrice2_i(), this.groupPriceCountDown_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.height = 25,
        t.source = "mall_gift_item_img1_png",
        t.width = 25,
        t
    },
    i.txtPrice2_i = function() {
        var t = new eui.Label;
        return this.txtPrice2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "100",
        t.textColor = 10180889,
        t
    },
    i.groupPriceCountDown_i = function() {
        var t = new eui.Group;
        return this.groupPriceCountDown = t,
        t.visible = !0,
        t.elementsContent = [this.txtPrice1_i(), this._Image11_i()],
        t
    },
    i.txtPrice1_i = function() {
        var t = new eui.Label;
        return this.txtPrice1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "100",
        t.textColor = 13209671,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "mall_skin_item_img2_png",
        t.width = 0,
        t.y = 5,
        t
    },
    i.txtHas_i = function() {
        var t = new eui.Label;
        return this.txtHas = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 22,
        t.text = "已拥有",
        t.textAlign = "center",
        t.textColor = 4187130,
        t.visible = !1,
        t.y = 433,
        t
    },
    i.groupTag_i = function() {
        var t = new eui.Group;
        return this.groupTag = t,
        t.visible = !1,
        t.x = 10,
        t.y = 69,
        t.elementsContent = [this._Image12_i(), this.txtTag_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(22, 8, 22, 9),
        t.source = "mall_big_gift_item_imgtag_png",
        t.y = 0,
        t
    },
    i.txtTag_i = function() {
        var t = new eui.Label;
        return this.txtTag = t,
        t.fontFamily = "MFShangHei",
        t.left = 6,
        t.right = 6,
        t.size = 20,
        t.textAlign = "center",
        t.textColor = 16777215,
        t.y = 3,
        t
    },
    i.imgRedDot_i = function() {
        var t = new eui.Image;
        return this.imgRedDot = t,
        t.source = "mall_img_reddot_png",
        t.visible = !1,
        t.x = 226,
        t.y = 400,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 70,
        t.visible = !1,
        t.width = 229,
        t.x = 18,
        t.y = 349,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/MallCommonItemSkin.exml"] = window.MallCommonItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBG", "imgCoin", "txtPrice1", "txtPrice2", "groupPriceCountDown", "btnBuy", "imgIcon", "txtNum", "txtName", "txtRestrict", "imgRedDot", "txtCountdown", "groupCountdown"],
        this.height = 173,
        this.width = 148,
        this.elementsContent = [this.imgBG_i(), this.btnBuy_i(), this.imgIcon_i(), this.txtNum_i(), this.txtName_i(), this.txtRestrict_i(), this.imgRedDot_i(), this.groupCountdown_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBG_i = function() {
        var t = new eui.Image;
        return this.imgBG = t,
        t.height = 173,
        t.source = "mall_gift_item_img3_png",
        t.visible = !0,
        t.width = 146,
        t.x = 2,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.visible = !0,
        t.x = 6,
        t.y = 139,
        t.elementsContent = [this._Image1_i(), this._Group1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mall_gift_item_img2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgCoin_i(), this.txtPrice1_i(), this.groupPriceCountDown_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.height = 18,
        t.source = "mall_recharge_panel_img2_png",
        t.width = 27,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPrice1_i = function() {
        var t = new eui.Label;
        return this.txtPrice1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 10180889,
        t.x = 21,
        t.y = 1,
        t
    },
    i.groupPriceCountDown_i = function() {
        var t = new eui.Group;
        return this.groupPriceCountDown = t,
        t.visible = !0,
        t.x = 66,
        t.y = 2,
        t.elementsContent = [this.txtPrice2_i(), this._Image2_i()],
        t
    },
    i.txtPrice2_i = function() {
        var t = new eui.Label;
        return this.txtPrice2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 13209671,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "mall_skin_item_img2_png",
        t.width = 0,
        t.y = 5,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 80,
        t.horizontalCenter = 0,
        t.verticalCenter = -15,
        t.width = 80,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.right = 20,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 2572916,
        t.textColor = 14543359,
        t.y = 92,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.textColor = 14543359,
        t.x = 10,
        t.y = 8,
        t
    },
    i.txtRestrict_i = function() {
        var t = new eui.Label;
        return this.txtRestrict = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 14,
        t.textColor = 4187130,
        t.y = 117,
        t
    },
    i.imgRedDot_i = function() {
        var t = new eui.Image;
        return this.imgRedDot = t,
        t.height = 25,
        t.source = "mall_img_reddot_png",
        t.visible = !0,
        t.width = 25,
        t.x = 132,
        t.y = -8,
        t
    },
    i.groupCountdown_i = function() {
        var t = new eui.Group;
        return this.groupCountdown = t,
        t.visible = !0,
        t.x = 0,
        t.y = 28,
        t.elementsContent = [this._Image3_i(), this.txtCountdown_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(13, 6, 14, 6),
        t.source = "mall_gift_item_imgcountdown_png",
        t.width = 0,
        t.y = 0,
        t
    },
    i.txtCountdown_i = function() {
        var t = new eui.Label;
        return this.txtCountdown = t,
        t.fontFamily = "MFShangHei",
        t.left = 5,
        t.right = 12,
        t.size = 14,
        t.text = "特惠",
        t.textColor = 16777215,
        t.visible = !0,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/MallDressUpItemSkin.exml"] = window.MallDressUpItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "imgIcon", "imgCoin", "txtPrice2", "txtPrice1", "groupPriceCountdown", "btnBuy", "txtCountdown", "groupCountdown"],
        this.height = 255,
        this.width = 215,
        this.elementsContent = [this._Image1_i(), this.txtName_i(), this.imgIcon_i(), this.btnBuy_i(), this.groupCountdown_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mall_dress_up_item_img2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 9025023,
        t.y = 200,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.bottom = 85,
        t.horizontalCenter = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 0,
        t.y = 224,
        t.elementsContent = [this._Image2_i(), this._Group1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mall_gift_item_img2_png",
        t.width = 215,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 9,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgCoin_i(), this.txtPrice2_i(), this.groupPriceCountdown_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.source = "mall_gift_item_img1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPrice2_i = function() {
        var t = new eui.Label;
        return this.txtPrice2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 10180889,
        t.x = 21,
        t.y = 1,
        t
    },
    i.groupPriceCountdown_i = function() {
        var t = new eui.Group;
        return this.groupPriceCountdown = t,
        t.visible = !1,
        t.x = 66,
        t.y = 2,
        t.elementsContent = [this.txtPrice1_i(), this._Image3_i()],
        t
    },
    i.txtPrice1_i = function() {
        var t = new eui.Label;
        return this.txtPrice1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 13209671,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "mall_skin_item_img2_png",
        t.width = 0,
        t.y = 5,
        t
    },
    i.groupCountdown_i = function() {
        var t = new eui.Group;
        return this.groupCountdown = t,
        t.visible = !1,
        t.x = 0,
        t.y = 28,
        t.elementsContent = [this._Image4_i(), this.txtCountdown_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(13, 6, 14, 6),
        t.source = "mall_gift_item_imgcountdown_png",
        t.width = 0,
        t.y = 0,
        t
    },
    i.txtCountdown_i = function() {
        var t = new eui.Label;
        return this.txtCountdown = t,
        t.fontFamily = "MFShangHei",
        t.left = 5,
        t.right = 12,
        t.size = 14,
        t.text = "vip折扣",
        t.textColor = 16777215,
        t.y = .749,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/MallGiftBuyItemSkin.exml"] = window.MallGiftBuyItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "txtNum", "imgIcon"],
        this.height = 59,
        this.width = 264,
        this.elementsContent = [this._Image1_i(), this.txtName_i(), this.txtNum_i(), this.imgIcon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mall_gift_buy_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "道具道具",
        t.textColor = 8757203,
        t.x = 70,
        t.y = 9,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "数量：9999",
        t.textColor = 8757203,
        t.x = 70,
        t.y = 35,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 40,
        t.width = 40,
        t.x = 9,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/MallRechargeItemSkin.exml"] = window.MallRechargeItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgIcon", "imgGive", "imgHot", "txtPrice", "btnBuy", "txtNum", "txtGive"],
        this.elementsContent = [this._Image1_i(), this.imgIcon_i(), this.imgGive_i(), this.imgHot_i(), this._Image2_i(), this.btnBuy_i(), this.txtNum_i(), this.txtGive_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.horizontalCenter = 0,
        t.source = "mall_recharge_item_imgicon1_png",
        t.verticalCenter = 0,
        t
    },
    i.imgGive_i = function() {
        var t = new eui.Image;
        return this.imgGive = t,
        t.bottom = 46,
        t.right = 14,
        t.source = "mall_recharge_item_imgfirst_png",
        t
    },
    i.imgHot_i = function() {
        var t = new eui.Image;
        return this.imgHot = t,
        t.source = "mall_recharge_item_imghot_png",
        t.x = 186,
        t.y = 13,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_item_num_png",
        t.x = 17,
        t.y = 13,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 8,
        t.y = 188,
        t.elementsContent = [this._Image3_i(), this.txtPrice_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_pop_juxing_923_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "￥ 6",
        t.textColor = 8865551,
        t.y = 12,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "60",
        t.textColor = 16514896,
        t.x = 48,
        t.y = 18,
        t
    },
    i.txtGive_i = function() {
        var t = new eui.Label;
        return this.txtGive = t,
        t.fontFamily = "REEJI",
        t.rotation = 16,
        t.size = 25,
        t.text = "100",
        t.textAlign = "center",
        t.textColor = 16580432,
        t.width = 78.291,
        t.x = 212.223,
        t.y = 137.79,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/MallSkinItemSkin.exml"] = window.MallSkinItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgPet", "txtRestrict", "txtName", "imgCoin", "txtPrice2", "txtPrice1", "groupPriceCountDown", "btnBuy", "txtHas", "txtCountdown", "groupCountdown", "txtTime", "groupTime"],
        this.height = 290,
        this.width = 178,
        this.elementsContent = [this._Image1_i(), this.imgPet_i(), this._Image2_i(), this.txtRestrict_i(), this.txtName_i(), this.btnBuy_i(), this.txtHas_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 290,
        t.scale9Grid = new egret.Rectangle(9, 24, 4, 9),
        t.source = "mall_skin_item_imgbg_png",
        t.visible = !0,
        t.width = 178,
        t
    },
    i.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.height = 250,
        t.horizontalCenter = 0,
        t.width = 170,
        t.y = 4,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mall_skin_item_imgnamebg_png",
        t.x = 5,
        t.y = 164,
        t
    },
    i.txtRestrict_i = function() {
        var t = new eui.Label;
        return this.txtRestrict = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.textColor = 10858415,
        t.visible = !1,
        t.y = 215,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 16777215,
        t.y = 235,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 4,
        t.y = 255,
        t.elementsContent = [this._Image3_i(), this._Group1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 31.34,
        t.source = "mall_gift_item_img2_png",
        t.width = 170.868,
        t.x = .541,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgCoin_i(), this.txtPrice2_i(), this.groupPriceCountDown_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.height = 25,
        t.source = "mall_skin_item_img3_png",
        t.verticalCenter = 0,
        t.width = 25,
        t.x = 0,
        t
    },
    i.txtPrice2_i = function() {
        var t = new eui.Label;
        return this.txtPrice2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 10180889,
        t.x = 21,
        t.y = 1,
        t
    },
    i.groupPriceCountDown_i = function() {
        var t = new eui.Group;
        return this.groupPriceCountDown = t,
        t.visible = !0,
        t.x = 66,
        t.y = 2,
        t.elementsContent = [this.txtPrice1_i(), this._Image4_i()],
        t
    },
    i.txtPrice1_i = function() {
        var t = new eui.Label;
        return this.txtPrice1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 13209671,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "mall_skin_item_img2_png",
        t.width = 0,
        t.y = 5,
        t
    },
    i.txtHas_i = function() {
        var t = new eui.Label;
        return this.txtHas = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "已拥有",
        t.textColor = 4187130,
        t.visible = !0,
        t.y = 264,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 14,
        t.layout = this._HorizontalLayout2_i(),
        t.elementsContent = [this.groupCountdown_i(), this.groupTime_i()],
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i.groupCountdown_i = function() {
        var t = new eui.Group;
        return this.groupCountdown = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.txtCountdown_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(13, 6, 14, 6),
        t.source = "mall_gift_item_imgcountdown_png",
        t.width = 0,
        t.y = 0,
        t
    },
    i.txtCountdown_i = function() {
        var t = new eui.Label;
        return this.txtCountdown = t,
        t.fontFamily = "MFShangHei",
        t.left = 5,
        t.right = 12,
        t.size = 14,
        t.text = "特惠",
        t.textColor = 16777215,
        t.y = 2,
        t
    },
    i.groupTime_i = function() {
        var t = new eui.Group;
        return this.groupTime = t,
        t.visible = !1,
        t.x = 26,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.txtTime_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(22, 16, 8, 9),
        t.source = "mall_gift_item_imgtime_png",
        t.width = 0,
        t.y = 0,
        t
    },
    i.txtTime_i = function() {
        var t = new eui.Label;
        return this.txtTime = t,
        t.fontFamily = "MFShangHei",
        t.left = 5,
        t.right = 12,
        t.size = 14,
        t.textColor = 16317183,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/MallSubMenuSkin.exml"] = window.MallSubMenuSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtUp", "txtDown", "imgRedDot"],
        this.currentState = "up",
        this.width = 101,
        this.elementsContent = [this.imgRedDot_i()],
        this._Image1_i(),
        this._Image2_i(),
        this.txtUp_i(),
        this.txtDown_i(),
        this.states = [new eui.State("down", [new eui.AddItems("_Image1", "", 0, ""), new eui.AddItems("txtUp", "", 2, "imgRedDot")]), new eui.State("up", [new eui.AddItems("_Image2", "", 2, "imgRedDot"), new eui.AddItems("txtDown", "", 2, "imgRedDot")])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.source = "mall_up3_png",
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return this._Image2 = t,
        t.source = "mall_down3_png",
        t
    },
    i.txtUp_i = function() {
        var t = new eui.Label;
        return this.txtUp = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "Name",
        t.textColor = 16777215,
        t.y = 9,
        t
    },
    i.txtDown_i = function() {
        var t = new eui.Label;
        return this.txtDown = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "Name",
        t.textColor = 7242936,
        t.y = 9,
        t
    },
    i.imgRedDot_i = function() {
        var t = new eui.Image;
        return this.imgRedDot = t,
        t.height = 16,
        t.source = "mall_img_reddot_png",
        t.visible = !0,
        t.width = 16,
        t.x = 87,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MallPanelSkin.exml"] = window.MallPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["list", "scroller", "btnExchange", "groupRecharge", "subMenu", "imgGouBG", "imgGou", "txtSearch", "btnSearch", "groupFilter", "viewContainer", "imgChip", "btnHC", "btnBuyCard", "imgCard", "txtChip", "txtCard", "groupItem2", "imgDiamond", "btnAddDiamond", "txtDiamond", "imgSeerDou", "txtSeerDou", "groupItem1"],
        this.elementsContent = [this._Image1_i(), this.scroller_i(), this.groupRecharge_i(), this.subMenu_i(), this.groupFilter_i(), this._Group1_i(), this.groupItem2_i(), this.groupItem1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "mall_recharge_panel_bg_jpg",
        t.top = 0,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 495,
        t.left = 177,
        t.right = 22,
        t.y = 105,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.paddingTop = 10,
        t
    },
    i.groupRecharge_i = function() {
        var t = new eui.Group;
        return this.groupRecharge = t,
        t.left = 184,
        t.right = 30,
        t.visible = !1,
        t.y = 65,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnExchange_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_img1_png",
        t.visible = !1,
        t.y = 6,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.right = 0,
        t.source = "mall_recharge_img2_png",
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "mall_recharge_btn_png",
        t.y = 3,
        t
    },
    i.subMenu_i = function() {
        var t = new eui.List;
        return this.subMenu = t,
        t.height = 62,
        t.visible = !0,
        t.x = 184,
        t.y = 50,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t.verticalAlign = "middle",
        t
    },
    i.groupFilter_i = function() {
        var t = new eui.Group;
        return this.groupFilter = t,
        t.right = 22,
        t.visible = !0,
        t.y = 71.166,
        t.elementsContent = [this._Image4_i(), this.imgGouBG_i(), this.imgGou_i(), this.txtSearch_i(), this._Label1_i(), this.btnSearch_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "mall_imgsearchbg_png",
        t.x = 101,
        t.y = 0,
        t
    },
    i.imgGouBG_i = function() {
        var t = new eui.Image;
        return this.imgGouBG = t,
        t.source = "mall_imggoubg_png",
        t.x = 58,
        t.y = 3,
        t
    },
    i.imgGou_i = function() {
        var t = new eui.Image;
        return this.imgGou = t,
        t.source = "mall_imggou_png",
        t.visible = !0,
        t.x = 62,
        t.y = 9,
        t
    },
    i.txtSearch_i = function() {
        var t = new eui.EditableText;
        return this.txtSearch = t,
        t.fontFamily = "MFShangHei",
        t.prompt = "输入精灵名或ID",
        t.promptColor = 4149623,
        t.size = 16,
        t.width = 115,
        t.x = 110,
        t.y = 7,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0000005618,
        t.text = "已拥有精灵",
        t.textColor = 5008299,
        t.x = -34,
        t.y = 6,
        t
    },
    i.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.source = "mall_btnsearch_png",
        t.x = 233,
        t.y = 1,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.left = 184,
        t.right = 30,
        t.touchEnabled = !1,
        t.y = 85,
        t.elementsContent = [this.viewContainer_i()],
        t
    },
    i.viewContainer_i = function() {
        var t = new eui.Group;
        return this.viewContainer = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.touchEnabled = !1,
        t
    },
    i.groupItem2_i = function() {
        var t = new eui.Group;
        return this.groupItem2 = t,
        t.right = 380,
        t.visible = !0,
        t.y = 11,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this.imgChip_i(), this.btnHC_i(), this.btnBuyCard_i(), this.imgCard_i(), this.txtChip_i(), this.txtCard_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_item_img4_png",
        t.x = 187,
        t.y = 5,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_item_img4_png",
        t.x = 22,
        t.y = 5,
        t
    },
    i.imgChip_i = function() {
        var t = new eui.Image;
        return this.imgChip = t,
        t.height = 30,
        t.width = 30,
        t.x = 171.421,
        t.y = .774,
        t
    },
    i.btnHC_i = function() {
        var t = new eui.Image;
        return this.btnHC = t,
        t.source = "mall_skin_item_btnhc_png",
        t.x = 298.616,
        t.y = 4.742,
        t
    },
    i.btnBuyCard_i = function() {
        var t = new eui.Image;
        return this.btnBuyCard = t,
        t.source = "mall_recharge_panel_btnadddiamond_png",
        t.x = 133.358,
        t.y = 4.937,
        t
    },
    i.imgCard_i = function() {
        var t = new eui.Image;
        return this.imgCard = t,
        t.height = 45,
        t.width = 45,
        t.y = -9,
        t
    },
    i.txtChip_i = function() {
        var t = new eui.Label;
        return this.txtChip = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 225,
        t.y = 6,
        t
    },
    i.txtCard_i = function() {
        var t = new eui.Label;
        return this.txtCard = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 71,
        t.y = 6,
        t
    },
    i.groupItem1_i = function() {
        var t = new eui.Group;
        return this.groupItem1 = t,
        t.right = 39,
        t.visible = !0,
        t.y = 11,
        t.elementsContent = [this._Group2_i(), this._Group3_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 174,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.imgDiamond_i(), this.btnAddDiamond_i(), this.txtDiamond_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_item_img4_png",
        t.visible = !0,
        t.x = 13,
        t.y = 5,
        t
    },
    i.imgDiamond_i = function() {
        var t = new eui.Image;
        return this.imgDiamond = t,
        t.height = 30,
        t.visible = !0,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnAddDiamond_i = function() {
        var t = new eui.Image;
        return this.btnAddDiamond = t,
        t.source = "mall_recharge_panel_btnadddiamond_png",
        t.visible = !0,
        t.x = 129,
        t.y = 5,
        t
    },
    i.txtDiamond_i = function() {
        var t = new eui.Label;
        return this.txtDiamond = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.visible = !0,
        t.x = 51,
        t.y = 6,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.y = 2,
        t.elementsContent = [this._Image8_i(), this.imgSeerDou_i(), this.txtSeerDou_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_item_img4_png",
        t.x = 22,
        t.y = 3,
        t
    },
    i.imgSeerDou_i = function() {
        var t = new eui.Image;
        return this.imgSeerDou = t,
        t.height = 45,
        t.width = 45,
        t.x = 0,
        t.y = -10,
        t
    },
    i.txtSeerDou_i = function() {
        var t = new eui.Label;
        return this.txtSeerDou = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 71,
        t.y = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/MallGiftBuyPopSkin.exml"] = window.MallGiftBuyPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtPrice", "btnBuy", "imgIcon", "btnClose", "btnAdd", "btnReduce", "txtName", "txtNum", "imgSlide", "imgSlideRect", "slideArea", "list"],
        this.height = 323,
        this.width = 492,
        this.elementsContent = [this._Group2_i(), this.imgSlide_i(), this.imgSlideRect_i(), this.slideArea_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.btnBuy_i(), this.imgIcon_i(), this.btnClose_i(), this._Image4_i(), this.btnAdd_i(), this.btnReduce_i(), this.txtName_i(), this.txtNum_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mall_gift_buy_pop_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 166,
        t.y = 273,
        t.elementsContent = [this._Image2_i(), this._Group1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mall_gift_buy_pop_imgbuy_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this.txtPrice_i(), this._Image3_i()],
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "9999",
        t.textColor = 8668954,
        t.x = 31,
        t.y = 3,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "mall_gift_buy_pop_imgcoin_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 92,
        t.width = 92,
        t.x = 42,
        t.y = 79,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "mall_gift_buy_pop_btnclose_png",
        t.x = 450,
        t.y = 13,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "mall_gift_buy_pop_imgslide1_png",
        t.x = 127,
        t.y = 233,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "mall_gift_buy_pop_btnadd_png",
        t.x = 375,
        t.y = 227,
        t
    },
    i.btnReduce_i = function() {
        var t = new eui.Image;
        return this.btnReduce = t,
        t.source = "mall_gift_buy_pop_btnreduce_png",
        t.x = 86,
        t.y = 227,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "礼包 名物品名",
        t.textColor = 16514896,
        t.x = 188,
        t.y = 26,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "购买数量：999",
        t.textColor = 4187130,
        t.x = 192,
        t.y = 211,
        t
    },
    i.imgSlide_i = function() {
        var t = new eui.Image;
        return this.imgSlide = t,
        t.source = "mall_gift_buy_pop_imgslide2_png",
        t.x = 128,
        t.y = 234,
        t
    },
    i.imgSlideRect_i = function() {
        var t = new eui.Image;
        return this.imgSlideRect = t,
        t.source = "mall_gift_buy_pop_imgsliderect_png",
        t.x = 223,
        t.y = 221,
        t
    },
    i.slideArea_i = function() {
        var t = new eui.Group;
        return this.slideArea = t,
        t.height = 25,
        t.width = 236,
        t.x = 127,
        t.y = 228,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 127,
        t.width = 270,
        t.x = 186,
        t.y = 63,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/MallRechargePopSkin.exml"] = window.MallRechargePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnConfirm", "btnExchange100", "btnExchange500", "btnExchange1000", "imgDiamond", "imgMiCoin", "txtNumDiamond", "txtNumMiCoin", "inputNum"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.btnConfirm_i(), this.btnExchange100_i(), this.btnExchange500_i(), this.btnExchange1000_i(), this.imgDiamond_i(), this.imgMiCoin_i(), this.txtNumDiamond_i(), this.txtNumMiCoin_i(), this.inputNum_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recharge_pop_icon2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "title_pop_2022_btnclose_png",
        t.x = 439,
        t.y = 0,
        t
    },
    i.btnConfirm_i = function() {
        var t = new eui.Image;
        return this.btnConfirm = t,
        t.source = "mall_recharge_pop_btnconfirm_png",
        t.x = 314,
        t.y = 203,
        t
    },
    i.btnExchange100_i = function() {
        var t = new eui.Image;
        return this.btnExchange100 = t,
        t.source = "mall_recharge_pop_btnexchange100_png",
        t.x = 38,
        t.y = 153,
        t
    },
    i.btnExchange500_i = function() {
        var t = new eui.Image;
        return this.btnExchange500 = t,
        t.source = "mall_recharge_pop_btnexchange500_png",
        t.x = 182,
        t.y = 153,
        t
    },
    i.btnExchange1000_i = function() {
        var t = new eui.Image;
        return this.btnExchange1000 = t,
        t.source = "mall_recharge_pop_btnexchange1000_png",
        t.x = 326,
        t.y = 153,
        t
    },
    i.imgDiamond_i = function() {
        var t = new eui.Image;
        return this.imgDiamond = t,
        t.height = 30,
        t.width = 30,
        t.x = 213,
        t.y = 3,
        t
    },
    i.imgMiCoin_i = function() {
        var t = new eui.Image;
        return this.imgMiCoin = t,
        t.source = "mall_recharge_pop_micoin_png",
        t.width = 30,
        t.x = 306,
        t.y = 7,
        t
    },
    i.txtNumDiamond_i = function() {
        var t = new eui.Label;
        return this.txtNumDiamond = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 16777215,
        t.x = 248,
        t.y = 8,
        t
    },
    i.txtNumMiCoin_i = function() {
        var t = new eui.Label;
        return this.txtNumMiCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "left",
        t.textColor = 16777215,
        t.x = 341,
        t.y = 8,
        t
    },
    i.inputNum_i = function() {
        var t = new eui.EditableText;
        return this.inputNum = t,
        t.fontFamily = "MFShangHei",
        t.prompt = "输入兑换数量",
        t.promptColor = 4149623,
        t.restrict = "0-9",
        t.size = 16,
        t.width = 142,
        t.x = 102,
        t.y = 218,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/SkinPopSkin.exml"] = window.SkinPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnHC", "txtNum", "btnMin", "btnMax", "btnAdd", "btnMinus", "txtNumChip1", "txtNumChip2", "imgIcon", "btnClose"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this.btnHC_i(), this._Group1_i(), this._Label2_i(), this._Group2_i(), this._Group3_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "skin_pop_img1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnHC_i = function() {
        var t = new eui.Group;
        return this.btnHC = t,
        t.horizontalCenter = 0,
        t.y = 220,
        t.elementsContent = [this._Image2_i(), this._Label1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "skin_pop_img2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20.0112789021868,
        t.text = "合 成",
        t.textColor = 10180889,
        t.y = 13,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.width = 314,
        t.y = 160,
        t.elementsContent = [this._Image3_i(), this.txtNum_i(), this.btnMin_i(), this.btnMax_i(), this.btnAdd_i(), this.btnMinus_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "skin_pop_img3_png",
        t.x = 91,
        t.y = 0,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.textColor = 7461887,
        t.y = 7,
        t
    },
    i.btnMin_i = function() {
        var t = new eui.Image;
        return this.btnMin = t,
        t.source = "skin_pop_btnmin_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.btnMax_i = function() {
        var t = new eui.Image;
        return this.btnMax = t,
        t.source = "skin_pop_btnmax_png",
        t.x = 266,
        t.y = 1,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "skin_pop_btnadd_png",
        t.x = 230,
        t.y = 1,
        t
    },
    i.btnMinus_i = function() {
        var t = new eui.Image;
        return this.btnMinus = t,
        t.source = "skin_pop_btnminus_png",
        t.x = 56,
        t.y = 1,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "皮肤礼卡碎片合成",
        t.textColor = 13820671,
        t.x = 232,
        t.y = 54,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 232,
        t.y = 113.85,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtNumChip1_i(), this.txtNumChip2_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i.txtNumChip1_i = function() {
        var t = new eui.Label;
        return this.txtNumChip1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 7461887,
        t.x = 0,
        t.y = .15,
        t
    },
    i.txtNumChip2_i = function() {
        var t = new eui.Label;
        return this.txtNumChip2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 8822740,
        t.x = 23.53,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 128,
        t.y = 54,
        t.elementsContent = [this._Image4_i(), this.imgIcon_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "skin_pop_img4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 28,
        t.horizontalCenter = 0,
        t.source = "mall_skin_item_img3_png",
        t.verticalCenter = 0,
        t.width = 39,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "title_pop_2022_btnclose_png",
        t.x = 438,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/MallExchangeViewSkin.exml"] = window.MallExchangeViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnRefresh", "imgCoin", "txtFreeTimes", "txtConsume", "txtCoin", "txtAllTimes", "list"],
        this.width = 975,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "mall_exchange_view_imgpet_png",
        t.x = 391,
        t.y = -85,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mall_exchange_view_imgbg_png",
        t.x = 0,
        t.y = 14,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 24,
        t.y = 30,
        t.elementsContent = [this.btnRefresh_i(), this.imgCoin_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this.txtFreeTimes_i(), this.txtConsume_i(), this.txtCoin_i(), this.txtAllTimes_i()],
        t
    },
    i.btnRefresh_i = function() {
        var t = new eui.Image;
        return this.btnRefresh = t,
        t.source = "mall_exchange_view_imgrefresh_png",
        t.x = 538,
        t.y = 9,
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.height = 30,
        t.width = 30,
        t.x = 318,
        t.y = -5,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "本次刷新消耗：",
        t.textColor = 12834813,
        t.x = 199,
        t.y = 1,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "拥有交易令：",
        t.textColor = 12834813,
        t.x = 0,
        t.y = 29,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "今日剩余次数：",
        t.textColor = 12834813,
        t.x = 200,
        t.y = 29,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "免费刷新次数：",
        t.textColor = 12834813,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txtFreeTimes_i = function() {
        var t = new eui.Label;
        return this.txtFreeTimes = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 131,
        t.y = 1,
        t
    },
    i.txtConsume_i = function() {
        var t = new eui.Label;
        return this.txtConsume = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 350,
        t.y = 1,
        t
    },
    i.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 112,
        t.y = 29,
        t
    },
    i.txtAllTimes_i = function() {
        var t = new eui.Label;
        return this.txtAllTimes = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 331,
        t.y = 29,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 371,
        t.width = 625,
        t.x = 32,
        t.y = 113,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.paddingBottom = 10,
        t.paddingTop = 10,
        t.requestedColumnCount = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/MallRecommendPanelSkin.exml"] = window.MallRecommendPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnGo1", "btnGo2", "btnGo3", "btnGo4"],
        this.elementsContent = [this.btnGo1_i(), this.btnGo2_i(), this.btnGo3_i(), this.btnGo4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.btnGo1_i = function() {
        var t = new eui.Group;
        return this.btnGo1 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recommend_panel_img1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recommend_panel_btngo1_png",
        t.x = 337,
        t.y = 445,
        t
    },
    i.btnGo2_i = function() {
        var t = new eui.Group;
        return this.btnGo2 = t,
        t.x = 531,
        t.y = 7,
        t.elementsContent = [this._Image3_i(), this._Image4_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recommend_panel_img2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recommend_panel_btngo2_png",
        t.x = 314,
        t.y = 110,
        t
    },
    i.btnGo3_i = function() {
        var t = new eui.Group;
        return this.btnGo3 = t,
        t.x = 531,
        t.y = 180,
        t.elementsContent = [this._Image5_i(), this._Image6_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recommend_panel_img3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recommend_panel_btngo2_png",
        t.x = 314,
        t.y = 112,
        t
    },
    i.btnGo4_i = function() {
        var t = new eui.Group;
        return this.btnGo4 = t,
        t.x = 531,
        t.y = 355,
        t.elementsContent = [this._Image7_i(), this._Image8_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recommend_panel_img4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "mall_recommend_panel_btngo2_png",
        t.x = 314,
        t.y = 111,
        t
    },
    e
} (eui.Skin);