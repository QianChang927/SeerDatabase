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
wishFloatingBottle; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.skinName = t.WishShopItemSkin,
            n.cacheAsBitmap = !0,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent()
        },
        i.prototype.dataChanged = function() {
            return e.prototype.dataChanged.call(this),
            this.data ? (this._maxExchangeNum = null, this.info = this.data, this.isPet = 4 == this.data.type, this.hadCoinNum = this.data.hadCoinNum, void this.initData()) : (this.width = 145, this.height = 169, this.items.visible = !1, void(this.pets.visible = !1))
        },
        i.prototype.initData = function() {
            if (this.isPet) this.width = 178,
            this.height = 295,
            this.items.visible = !1,
            this.pets.visible = !0,
            this.pet.source = ClientConfig.getPetHalfIcon(this.info.realid),
            this.petName.text = PetXMLInfo.getName(Number(this.info.realid)),
            this.stoneNum2.text = this.info.price + "";
            else {
                this.width = 145,
                this.height = 169,
                this.items.visible = !0,
                this.pets.visible = !1,
                2 == this.info.type ? this.iconId.source = ClientConfig.getMarkPath(this.info.realid) : this.iconId.source = ClientConfig.getItemIcon(this.info.realid);
                var t = 0 == this.info.count ? 1 : this.info.count,
                e = "";
                e = t > 1 ? StringUtil.combineNameAndNumber(ItemXMLInfo.getName(this.info.realid), t, 7) : StringUtil.parseStrLimitLen(ItemXMLInfo.getName(this.info.realid), 7),
                this.iconName.text = e,
                this.stoneNum1.text = this.info.price + ""
            }
            this.updateView()
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.iconId,
            function() {
                if (2 == t.info.type) {
                    var e = {};
                    e.ins = t.info.realid,
                    tipsPop.TipsPop.openCounterMarkPop(e)
                } else {
                    var i = {};
                    i.id = t.info.realid,
                    tipsPop.TipsPop.openItemPop(i)
                }
            },
            this),
            ImageButtonUtil.add(this.Buy,
            function() {
                if (t.exNum >= t.info.LimitCnt) return void BubblerManager.getInstance().showText("兑换数量达到上限");
                if (ItemManager.getNumByID(t.info.coinid) < t.info.price) return void BubblerManager.getInstance().showText("您的星愿石不足");
                var e = {};
                e.ins = t.info,
                e.caller = t,
                e.callBack = function(e, i) {
                    SocketConnection.sendByQueue(42395, [109, t.info.id, i, 0],
                    function(e) {
                        t.hasBuy = !0,
                        t.updateView(),
                        EventManager.dispatchEventWith("floating_bottle_buy_item")
                    })
                },
                ModuleManager.showModuleByID(1, e)
            },
            this),
            ImageButtonUtil.add(this.Buy1,
            function() {
                if (t.exNum >= t.info.LimitCnt) return void BubblerManager.getInstance().showText("兑换数量达到上限");
                if (ItemManager.getNumByID(t.info.coinid) < t.info.price) return void BubblerManager.getInstance().showText("您的星愿石不足");
                var e = {};
                e.ins = t.info,
                e.caller = t,
                e.callBack = function(e, i) {
                    SocketConnection.sendByQueue(42395, [109, t.info.id, i, 0],
                    function(e) {
                        t.hasBuy = !0,
                        t.updateView(),
                        EventManager.dispatchEventWith("floating_bottle_buy_item")
                    })
                },
                ModuleManager.showModuleByID(1, e)
            },
            this)
        },
        i.prototype.updateView = function() {
            var t = this;
            if (void 0 === this._maxExchangeNum || null === this._maxExchangeNum || this.hasBuy) {
                this.hasBuy = !1;
                var e = this.info.realid,
                i = ItemXMLInfo.getMaxNum(e) - ItemManager.getNumByID(e);
                if (this._maxExchangeNum = Math.max(1, Math.min(this.info.LimitCnt, i)), this.info.Limittype) return void KTool.getMultiValue([this.info.UserInfoId],
                function(e) {
                    if (void 0 != t.info) {
                        var i, n = e[0];
                        i = t.info.UserInfoBitPos ? KTool.getBit(n, t.info.UserInfoBitPos) : n;
                        var s = t.info.LimitCnt - i;
                        t._maxExchangeNum = Math.min(s, t._maxExchangeNum),
                        t.updateView()
                    }
                })
            }
            var n = ["", "每日限兑：", "每周限兑：", "每月限兑：", "永久限兑："];
            this.isPet ? (this.petLimitText.text = "" + n[this.info.Limittype] + (this.info.LimitCnt - this._maxExchangeNum) + "/" + this.info.LimitCnt, this.yiduihuan.visible = 0 == this._maxExchangeNum, this.Buy1.visible = 0 != this._maxExchangeNum) : (this.iconLimitText.text = "" + n[this.info.Limittype] + (this.info.LimitCnt - this._maxExchangeNum) + "/" + this.info.LimitCnt, DisplayUtil.setEnabled(this.Buy, 0 != this._maxExchangeNum, 0 == this._maxExchangeNum))
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.removeChildren(),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.info = null
        },
        i
    } (BaseItemRenderer);
    t.WishShopItem = e,
    __reflect(e.prototype, "wishFloatingBottle.WishShopItem")
} (wishFloatingBottle || (wishFloatingBottle = {}));
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
    return new(i || (i = Promise))(function(s, o) {
        function a(t) {
            try {
                h(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function r(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? s(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, r)
        }
        h((n = n.apply(t, e || [])).next())
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
        if (s) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (s = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            s = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var s, o, a, r, h = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return r = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this
    }),
    r
},
wishFloatingBottle; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this;
            return n.jumpInfo = null,
            n.panelNames = ["WishMainPanel", "WishSign", "WishList", "WishShop"],
            n.panels = {},
            n.jumpInfo = i,
            n.service.setValues([], [t.AttrConst.daily_wish_state, t.AttrConst.daily_wish_times, t.AttrConst.daily_wish_record, t.AttrConst.daily_login_time], [], [], [t.AttrConst.weekly_login_times]),
            n.init([{
                panelName: t.ModuleConst.WISH_MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.WISH_SIGN
            },
            {
                panelName: t.ModuleConst.WISH_SHOP
            },
            {
                panelName: t.ModuleConst.WISH_LIST
            }]),
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var i = this;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return e.prototype.childrenCreated.call(this),
                        [4, this.openPanel(t.ModuleConst.WISH_MAIN_PANEL).then(function() {
                            i.jumpInfo ? i.openRBPanel(i.jumpInfo.childIndex) : i.openRBPanel(1)
                        })];
                    case 1:
                        return [2, n.sent()]
                    }
                })
            })
        },
        i.prototype.openRBPanel = function(e) {
            var i = this,
            n = this.panelNames[e],
            s = this.panelMap[t.ModuleConst.WISH_MAIN_PANEL].grp_Container;
            this.panels[n] ? (this.curPanel = this.panels[n], 3 == e ? this.curPanel.showList() : 2 == e && this.curPanel.initData(), s.removeChildren(), s.addChild(this.curPanel), this.curPanel.update()) : t[n] && this.service.updateValues().then(function() {
                i.jumpInfo ? i.curPanel = new t[n]({
                    service: i.service,
                    childTab: i.jumpInfo.tab
                }) : i.curPanel = new t[n]({
                    service: i.service
                }),
                i.curPanel.name = n,
                s.removeChildren(),
                s.addChild(i.curPanel),
                i.panels[n] = i.curPanel
            })
        },
        i.prototype.update = function() {
            this.curPanel.update()
        },
        i.prototype.destroy = function() {
            for (var t in this.panels) {
                var i = this.panels[t];
                DisplayUtil.removeForParent(i),
                i.destroy()
            }
            e.prototype.destroy.call(this)
        },
        i
    } (BasicMultPanelModule);
    t.WishFloatingBottle = e,
    __reflect(e.prototype, "wishFloatingBottle.WishFloatingBottle")
} (wishFloatingBottle || (wishFloatingBottle = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
wishFloatingBottle; !
function(t) {
    var e = function() {
        function t() {}
        return t.wishFloatingBottleLogin = 45801,
        t
    } ();
    t.CMDConst = e,
    __reflect(e.prototype, "wishFloatingBottle.CMDConst")
} (wishFloatingBottle || (wishFloatingBottle = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
wishFloatingBottle; !
function(t) {
    var e = function() {
        function t() {}
        return t.WISH_MAIN_PANEL = "wishFloatingBottle.WishMainPanel",
        t.WISH_SIGN = "wishFloatingBottle.WishSign",
        t.WISH_SHOP = "wishFloatingBottle.WishShop",
        t.WISH_LIST = "wishFloatingBottle.WishList",
        t.WISH_PANELS = [t.WISH_SIGN, t.WISH_LIST, t.WISH_SHOP],
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "wishFloatingBottle.ModuleConst")
} (wishFloatingBottle || (wishFloatingBottle = {}));
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
wishFloatingBottle; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.skinName = t.WishListItemSkin,
            n.cacheAsBitmap = !0,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent()
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.info = this.data,
            this.initData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.iconimg,
            function() {
                if (4 == t.info.wishType) {
                    var e = {};
                    e.ins = t.info.realid,
                    tipsPop.TipsPop.openCounterMarkPop(e)
                } else {
                    var i = {};
                    i.id = t.info.realid,
                    tipsPop.TipsPop.openItemPop(i)
                }
            },
            this)
        },
        i.prototype.initData = function() {
            4 == this.info.wishType ? this.iconimg.source = ClientConfig.getMarkPath(this.info.realid) : this.iconimg.source = ClientConfig.getItemIcon(this.info.realid);
            var t = StringUtil.parseStrLimitLen(ItemXMLInfo.getName(this.info.realid), 6);
            this.info.exchangenum > 1 ? this.iconNum.text = "" + this.info.exchangenum: this.iconNum.visible = !1,
            this.iconName.text = t
        },
        i
    } (BaseItemRenderer);
    t.WishListItem = e,
    __reflect(e.prototype, "wishFloatingBottle.WishListItem")
} (wishFloatingBottle || (wishFloatingBottle = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
wishFloatingBottle; !
function(t) {
    var e = function() {
        function t() {}
        return t.daily_wish_times = 12231,
        t.daily_wish_state = 201345,
        t.daily_wish_record = 201346,
        t.daily_login_time = 12462,
        t.weekly_login_times = 20235,
        t.weekly_login_state = 20096,
        t.weekly_item1_leftNum = 20128,
        t.weekly_item2_leftNum = 20129,
        t.weekly_item3_leftNum = 20130,
        t.weekly_item4_leftNum = 20131,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "wishFloatingBottle.AttrConst")
} (wishFloatingBottle || (wishFloatingBottle = {}));
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
wishFloatingBottle; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = wishSignItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.grp,
            function() {
                KTool.getMultiValue([201345],
                function(e) {
                    var n = 1 == e[0];
                    return n ? void Alarm.show("您今天已经签到过了！") : void SocketConnection.sendByQueue(t.CMDConst.wishFloatingBottleLogin, [1, i.itemIndex + 1],
                    function() {
                        i.grp.touchEnabled = !1,
                        i.currentState = "done",
                        i.imgDay.source = "wfb_sign_" + (i.itemIndex + 1) + "_png"
                    })
                })
            },
            this)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.currentState = this.data[0],
            this.grp.touchEnabled = this.data[1],
            "sign" == this.currentState ? (this.imgDay.source = "wfb_sign_" + (this.itemIndex + 1) + "liang_png", egret.Tween.get(this.kuang, {
                loop: !0
            }).to({
                scaleX: 1.1,
                scaleY: 1.1
            },
            500).to({
                scaleX: 1,
                scaleY: 1
            },
            500), this.cacheAsBitmap = !1) : (this.imgDay.source = "wfb_sign_" + (this.itemIndex + 1) + "_png", this.cacheAsBitmap = !0)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            egret.Tween.removeTweens(this.kuang)
        },
        i
    } (BaseItemRenderer);
    t.WishSignItem = e,
    __reflect(e.prototype, "wishFloatingBottle.WishSignItem")
} (wishFloatingBottle || (wishFloatingBottle = {}));
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
wishFloatingBottle; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.group_pai = [],
            n.lables = [],
            n.txtNames = [],
            n.imgs = [],
            n.skinName = t.WishListSkin,
            n.items.itemRenderer = t.WishListItem,
            n.service = i.service,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptRightContent(this.righttop),
            this.addEvents(),
            this.curIndex = 1,
            this.curID = 0,
            this.initData(),
            this._resize(),
            this.initRoulette(),
            this.initAnimation(),
            this.update()
        },
        i.prototype.initData = function() {
            for (var t = 0; 5 > t; t++) this.imgs[t] = "wfb_wish_list_itembg1_png";
            var e = config.WishFloatingBottle.getItems().filter(function(t) {
                return 1 == t.wishtype
            }),
            i = e[0],
            n = this.getData(i);
            this.listDataprovider = new eui.ArrayCollection(n),
            this.items.dataProvider = this.listDataprovider
        },
        i.prototype.getData = function(t) {
            for (var e = [], i = t.wishrealid.split("_").map(Number), n = t.wishoutput.split("_").map(Number), s = 0; s < i.length; s++) {
                var o = {};
                o.realid = i[s],
                o.exchangenum = n[s],
                o.wishType = t.wishtype,
                e.push(o)
            }
            return e
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(87)
            },
            this),
            ImageButtonUtil.add(this.btnWish,
            function() {
                e.btnWish.touchEnabled = !1;
                var i = e.service.getValue(t.AttrConst.daily_wish_times);
                return i >= e.getTimes ? (BubblerManager.getInstance().showText("很抱歉，今日剩余许愿次数不足！"), void(e.btnWish.touchEnabled = !0)) : (e.anim1.visible = !0, e.anim1.x = e.group_pai[e.curID].x - 5, e.anim1.y = e.group_pai[e.curID].y - 5, e.anim1.rotation = e.group_pai[e.curID].rotation, e.anim1.animation.play("kapai_H5_yuanwangqingdan", 1), void SocketConnection.sendByQueue(t.CMDConst.wishFloatingBottleLogin, [2, e.curIndex],
                function(t) {
                    var i = t.data,
                    n = 1 == i.readUnsignedInt();
                    AwardManager.pause(),
                    egret.setTimeout(function() {
                        n ? BubblerManager.getInstance().showText("许愿成功，神秘的力量帮你完成了心愿！") : BubblerManager.getInstance().showText("许愿失败，漂流瓶遗失在了星河里！"),
                        e.updateValues()
                    },
                    e, 3e3),
                    egret.setTimeout(function() {
                        AwardManager.resume()
                    },
                    e, 2e3)
                }))
            },
            this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.updateValues, this)
        },
        i.prototype.updateValues = function() {
            var t = this;
            this.service.updateValues().then(function() {
                t.update(),
                t.btnWish.touchEnabled = !0
            })
        },
        i.prototype.initAnimation = function() {
            this.anim1 = DragonbonesUtil.createAnimate("H5_yuanwangqingdan_ske_json", "H5_yuanwangqingdan_tex_json", "H5_yuanwangqingdan_tex_png", "H5_yuanwangqingdan"),
            this.anim2 = DragonbonesUtil.createAnimate("H5_yuanwangqingdan_ske_json", "H5_yuanwangqingdan_tex_json", "H5_yuanwangqingdan_tex_png", "H5_yuanwangqingdan"),
            this._group.addChildAt(this.anim1, 0),
            this.c.addChildAt(this.anim2, 0),
            this.anim2.x = this.xian.x + 439,
            this.anim2.y = this.xian.y + 184,
            this.anim1.scaleX = .6,
            this.anim1.scaleY = .6,
            this.anim2.scaleX = .5,
            this.anim2.scaleY = .5,
            this.anim1.visible = !1,
            this.anim2.animation.play("xinggui_H5_yuanwangqingdan", 0)
        },
        i.prototype.initRoulette = function() {
            var e = this;
            this.wishRecord = this.service.getValue(t.AttrConst.daily_wish_record),
            this._group = new Roulette(this.imgs,
            function(t) {
                e.setState(t)
            },
            this),
            this._group.lock(),
            this._group.closestId = 1,
            this._group.ids = 0,
            this._group.radius = 1100,
            this._group.numAllImgs = 20,
            this._group.positionOfStage = Roulette.DOWN,
            this._group.numShowImgs = 5,
            this._group.scaleOfUpAndDown = 1,
            this._group.scaleOfMoveArea = 1.2,
            this.a.addChild(this._group),
            this._group.x = 650,
            this._group.y = -150,
            this._group.refresh(),
            this._group.customizeAfterUpdateCaller = this,
            this._group.customizeAfterUpdate = function() {
                e._group.map.forEach(function(t) {
                    t.img.parent.rotation = t.img.rotation,
                    t.img.rotation = 0,
                    t.img.parent.alpha = t.img.alpha,
                    t.img.alpha = 1,
                    t.img.parent.scaleX = t.img.scaleX,
                    t.img.parent.scaleY = t.img.scaleY,
                    t.img.scaleX = t.img.scaleY = 1,
                    t.label.text = (e.wishRecord >> (t.id - 1) % 5 * 4 & 15) + ""
                })
            };
            for (var i = ["培  养", "辅  助", "抗  性", "刻  印", "技能石"], n = 0; 20 > n; n++) {
                this.lables[n] = new eui.Label,
                this.lables[n].text = (this.wishRecord >> n % 5 * 4 & 15) + "",
                this.group_pai[n] = new eui.Group,
                this._group.map[n].label = this.lables[n],
                this.group_pai[n].width = this._group.map[n].img.width,
                this.group_pai[n].height = this._group.map[n].img.height,
                this.group_pai[n].anchorOffsetX = this._group.map[n].img.anchorOffsetX,
                this.group_pai[n].anchorOffsetY = this._group.map[n].img.anchorOffsetY,
                this.group_pai[n].x = this._group.map[n].img.x,
                this.group_pai[n].y = this._group.map[n].img.y,
                this._group.map[n].img.anchorOffsetX = this._group.map[n].img.anchorOffsetY = 0,
                this._group.map[n].img.x = this._group.map[n].img.y = 0,
                this._group.map[n].img.horizontalCenter = 0,
                this.group_pai[n].addChild(this._group.map[n].img),
                this.group_pai[n].addChild(this.lables[n]);
                var s = new eui.Image;
                s.texture = RES.getRes("wfb_wish_list_icon" + (n % 5 + 1) + "_png"),
                s.name = "imgPaiIcon_" + n,
                s.horizontalCenter = 0,
                s.verticalCenter = -43,
                this.group_pai[n].addChild(s),
                this._group.addChild(this.group_pai[n]),
                this.lables[n].size = 25,
                this.lables[n].x = 145,
                this.lables[n].y = 184,
                this.txtNames[n] = new eui.Label,
                this.txtNames[n].text = i[n % 5],
                this.txtNames[n].fontFamily = "MFShangHei",
                this.txtNames[n].size = 18,
                this.txtNames[n].x = 71,
                this.txtNames[n].y = 30,
                this.txtNames[n].name = "txtPaiName_" + n,
                this.txtNames[n].horizontalCenter = 0,
                this.group_pai[n].addChild(this.txtNames[n]),
                this.group_pai[n].cacheAsBitmap = !0
            }
            this.a.x = 10,
            this.group_pai[16].alpha = 0,
            this.group_pai[17].alpha = 0,
            this.group_pai[3].alpha = 0,
            this._group.map[0].img.scaleX = this._group.map[0].img.scaleY = 1,
            this.group_pai[0].scaleY = this.group_pai[0].scaleX = 1,
            this._group.map[0].img.source = "wfb_wish_list_itembg2_png";
            var o = this.group_pai[0].getChildByName("imgPaiIcon_0");
            o.source = "wfb_wish_list_icon6_png"
        },
        i.prototype._resize = function() {
            e.prototype._resize.call(this),
            this.b.horizontalCenter = 0 - .6 * (1136 - egret.lifecycle.stage.stageWidth),
            this.d.horizontalCenter = 100.5 - .1 * (1136 - egret.lifecycle.stage.stageWidth)
        },
        i.prototype.setState = function(t) {
            for (var e = this,
            i = 0; i < this._group.map.length; i++) {
                var n = this.group_pai[i].getChildByName("imgPaiIcon_" + i);
                i != t[2] ? (this._group.map[i].img.source = "wfb_wish_list_itembg1_png", n.source = "wfb_wish_list_icon" + (i % 5 + 1) + "_png") : (this._group.map[i].img.source = "wfb_wish_list_itembg2_png", n.source = "wfb_wish_list_icon" + (i % 5 + 6) + "_png"),
                this.lables[i].text = (this.wishRecord >> i % 5 * 4 & 15) + ""
            }
            this.curIndex = t[0],
            this.curID = t[2];
            var s = config.WishFloatingBottle.getItems().filter(function(t) {
                return t.wishtype == e.curIndex
            }),
            o = s[0],
            a = this.getData(o);
            this.items.dataProvider = new eui.ArrayCollection(a)
        },
        i.prototype.update = function() {
            var t = this;
            this.showTxt();
            var e = config.WishFloatingBottle.getItems().filter(function(e) {
                return e.wishtype == t._group.closestId
            }),
            i = e[0],
            n = this.getData(i);
            this.items.dataProvider = new eui.ArrayCollection(n)
        },
        i.prototype.showTxt = function() {
            this.wishRecord = this.service.getValue(t.AttrConst.daily_wish_record);
            var e = this.service.getValue(t.AttrConst.daily_login_time),
            i = this.service.getValue(t.AttrConst.daily_wish_times),
            n = e + Math.floor(SystemTimerManager.sysBJDate.getTime() / 1e3) - MainManager.actorInfo.logintimeThisTime,
            s = Math.floor(n / 60);
            s >= 120 ? this.getTimes = 10 : s >= 90 ? this.getTimes = 7 : s >= 60 ? this.getTimes = 5 : s >= 30 ? this.getTimes = 3 : s >= 15 ? this.getTimes = 2 : s >= 5 ? this.getTimes = 1 : this.getTimes = 0;
            for (var o = 0; 20 > o; o++) this._group.map[o].label.text = (this.wishRecord >> (this._group.map[o].id - 1) % 5 * 4 & 15) + "";
            this.timeText.text = s + "",
            this.txtTimes1.text = this.getTimes + "",
            this.txtTimes2.text = i + ""
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.anim1.dispose(),
            this.anim2.dispose(),
            EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.updateValues, this),
            this._group.destroy()
        },
        i
    } (BaseModule);
    t.WishList = e,
    __reflect(e.prototype, "wishFloatingBottle.WishList")
} (wishFloatingBottle || (wishFloatingBottle = {}));
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
wishFloatingBottle; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MainPanelSkin,
            i
        }
        return __extends(i, e),
        i
    } (BasicPanel);
    t.WishMainPanel = e,
    __reflect(e.prototype, "wishFloatingBottle.WishMainPanel")
} (wishFloatingBottle || (wishFloatingBottle = {}));
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
wishFloatingBottle; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.maxGap = 50,
            n.skinName = t.WishShopSkin,
            n.service = i.service,
            n.curTab = i.childTab > 0 ? i.childTab: 1,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.imgItem.source = ClientConfig.getItemIcon(1720852),
            this.rbGroup = this.rb_0.group,
            this.rbGroup.selectedValue = this.curTab,
            this._list.itemRenderer = t.WishShopItem,
            this.adaptRightContent(this.righttop),
            this.adaptLeftContent(this.shop),
            this.adaptLeftContent(this._scrl),
            this.addEvent(),
            this.service.updateValues().then(function() {
                i.update(),
                i.showList()
            }),
            this._layout = this._list.layout
        },
        i.prototype.addEvent = function() {
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener("floating_bottle_buy_item", this.update, this),
            ImageButtonUtil.add(this.imgItem,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1720852
                })
            },
            this)
        },
        i.prototype.onChangeTab = function() {
            this.curTab = ~~this.rbGroup.selectedValue,
            this.showList()
        },
        i.prototype.showList = function() {
            var t, e = config.Exchange_clt.getItems().filter(function(t) {
                return 4 == t.shopid
            });
            switch (this._scrl.viewport.scrollV = 0, this._scrl.stopAnimation(), this.curTab) {
            case 1:
                t = e.filter(function(t) {
                    return 4 == t.type
                }),
                this._layout.verticalGap = 13,
                this._layout.requestedColumnCount = 5,
                this._layout.columnAlign = "left";
                break;
            case 2:
                t = e.filter(function(t) {
                    return 1 == t.type
                }),
                this._layout.verticalGap = 6,
                this._layout.requestedColumnCount = 6;
                break;
            case 3:
                t = e.filter(function(t) {
                    return 2 == t.type
                }),
                this._layout.verticalGap = 6,
                this._layout.requestedColumnCount = 6
            }
            for (var i in t) t[i].hadCoinNum = ~~ItemManager.getNumByID(1720852);
            var n = 6 - t.length;
            if (n > 0) for (var i = 0; n > i; i++) t.push(null);
            this._list.dataProvider = new eui.ArrayCollection(t),
            this._list.validateNow()
        },
        i.prototype.update = function() {
            this.txtCoin2.text = ItemManager.getNumByID(1720852) + "",
            this.showList()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.removeEventListener("floating_bottle_buy_item", this.update, this)
        },
        i
    } (BasicPanel);
    t.WishShop = e,
    __reflect(e.prototype, "wishFloatingBottle.WishShop")
} (wishFloatingBottle || (wishFloatingBottle = {}));
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
wishFloatingBottle; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.skinName = t.SignSkin,
            n.service = i.service,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list.itemRenderer = t.WishSignItem,
            this.addEvent(),
            this.update(),
            this.initData(),
            this.cuculateDate()
        },
        i.prototype.initData = function() {
            "sign" == this.com_7.currentState && egret.Tween.get(this.com_7.kuang, {
                loop: !0
            }).to({
                scaleX: 1.1,
                scaleY: 1.1
            },
            500).to({
                scaleX: 1,
                scaleY: 1
            },
            500)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(86)
            },
            this),
            ImageButtonUtil.add(this.com_7,
            function() {
                var i = e.service.getValue(t.AttrConst.daily_wish_state),
                n = 1 == i;
                return n ? void Alarm.show("您今天已经签到过了！") : void SocketConnection.sendByQueue(t.CMDConst.wishFloatingBottleLogin, [1, 7],
                function() {
                    e.service && e.service.updateValues().then(function() {
                        e.com_7.touchEnabled = !1,
                        e.update()
                    })
                })
            },
            this)
        },
        i.prototype.cuculateDate = function() {
            var t, e, i = SystemTimerManager.sysBJDate.getTime(),
            n = new Date(i),
            s = 864e5,
            o = n.getDay();
            switch (o) {
            case 0:
                e = new Date(i - 2 * s);
                break;
            case 1:
                e = new Date(i - 3 * s);
                break;
            case 2:
                e = new Date(i - 4 * s);
                break;
            case 3:
                e = new Date(i - 5 * s);
                break;
            case 4:
                e = new Date(i - 6 * s);
                break;
            case 5:
                e = n;
                break;
            case 6:
                e = new Date(i - 1 * s)
            }
            var a = new Date(e.getTime() + 6 * s),
            r = a.getFullYear(),
            h = a.getMonth(),
            u = a.getDate(),
            _ = e.getFullYear(),
            l = e.getMonth(),
            c = e.getDate();
            t = _ + "." + (l + 1) + "." + c + "——" + r + "." + (h + 1) + "." + u,
            this.loginTime.text = t
        },
        i.prototype.update = function() {
            var e = ["no", "sign", "done"],
            i = [];
            if (this.service) {
                var n = this.service.getValue(t.AttrConst.daily_wish_state),
                s = this.service.getValue(t.AttrConst.weekly_login_times);
                this.manageDay7(n, s);
                for (var o = 6; o >= 1; o--) {
                    var a = 1 == n;
                    a ? o >= s + 1 ? i.push([e[0], !1]) : i.push([e[2], !1]) : o > s + 1 ? i.push([e[0], !1]) : o == s + 1 ? i.push([e[1], !0]) : i.push([e[2], !1])
                }
                this.list.dataProvider = new eui.ArrayCollection(i.reverse()),
                this.list.validateNow()
            }
        },
        i.prototype.manageDay7 = function(t, e) {
            var i = ["no", "sign", "done"],
            n = 1 == t;
            n ? 7 >= e + 1 ? (this.com_7.currentState = i[0], this.com_7.touchEnabled = !1) : (this.com_7.currentState = i[2], this.com_7.touchEnabled = !1) : 7 > e + 1 ? (this.com_7.currentState = i[0], this.com_7.touchEnabled = !1) : 7 == e + 1 ? (this.com_7.currentState = i[1], this.com_7.touchEnabled = !0) : (this.com_7.currentState = i[2], this.com_7.touchEnabled = !1)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            egret.Tween.removeTweens(this.com_7.kuang)
        },
        i
    } (BasicPanel);
    t.WishSign = e,
    __reflect(e.prototype, "wishFloatingBottle.WishSign")
} (wishFloatingBottle || (wishFloatingBottle = {})),
window.wishFloatingBottle = window.wishFloatingBottle || {};
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
generateEUI.paths["resource/eui_skins/item/WishListItemSkin.exml"] = window.wishFloatingBottle.WishListItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["iconName", "iconimg", "iconNum"],
        this.height = 95,
        this.width = 84,
        this.elementsContent = [this.iconName_i(), this._Image1_i(), this.iconimg_i(), this.iconNum_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.iconName_i = function() {
        var t = new eui.Label;
        return this.iconName = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "道具名称六字",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.width = 84,
        t.x = 0,
        t.y = 81,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_list_l1_kb_115_png",
        t.x = 3,
        t.y = 0,
        t
    },
    i.iconimg_i = function() {
        var t = new eui.Image;
        return this.iconimg = t,
        t.height = 40,
        t.horizontalCenter = -2,
        t.verticalCenter = -7.5,
        t.width = 40,
        t
    },
    i.iconNum_i = function() {
        var t = new eui.Label;
        return this.iconNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "00",
        t.textColor = 12834813,
        t.x = 65,
        t.y = 63,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/WishShopItemSkin.exml"] = window.wishFloatingBottle.WishShopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnCommon1", "stoneNum1", "Buy", "iconId", "iconName", "iconNum", "iconLimitText", "mzxd11", "yjxd11", "items", "pet", "kuang", "di", "linedone", "yiduihuan", "btnCommon2", "stoneNum2", "Buy1", "petName", "petLimitText", "mzxd00", "yjxd00", "pets"],
        this.height = 299,
        this.width = 181,
        this.elementsContent = [this.items_i(), this.pets_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.items_i = function() {
        var t = new eui.Group;
        return this.items = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.Buy_i(), this.iconId_i(), this.iconName_i(), this.iconNum_i(), this.iconLimitText_i(), this.mzxd11_i(), this.yjxd11_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_shop_itembg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.Buy_i = function() {
        var t = new eui.Group;
        return this.Buy = t,
        t.x = 3,
        t.y = 134,
        t.elementsContent = [this.btnCommon1_i(), this._Group1_i()],
        t
    },
    i.btnCommon1_i = function() {
        var t = new eui.Image;
        return this.btnCommon1 = t,
        t.height = 31,
        t.scale9Grid = new egret.Rectangle(69, 0, 6, 31),
        t.source = "wfb_wish_shop_btncommon1_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 139,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -2,
        t.y = 0,
        t.elementsContent = [this.stoneNum1_i(), this._Image2_i()],
        t
    },
    i.stoneNum1_i = function() {
        var t = new eui.Label;
        return this.stoneNum1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 2384035,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 26,
        t.y = 8,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_shop_17208521_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.iconId_i = function() {
        var t = new eui.Image;
        return this.iconId = t,
        t.height = 50,
        t.visible = !0,
        t.width = 50,
        t.x = 45,
        t.y = 45,
        t
    },
    i.iconName_i = function() {
        var t = new eui.Label;
        return this.iconName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "道具道具...",
        t.textAlign = "center",
        t.textColor = 14543359,
        t.visible = !0,
        t.width = 130,
        t.x = 9,
        t.y = 115,
        t
    },
    i.iconNum_i = function() {
        var t = new eui.Label;
        return this.iconNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "x9999",
        t.textColor = 14543359,
        t.visible = !1,
        t.x = 92,
        t.y = 116,
        t
    },
    i.iconLimitText_i = function() {
        var t = new eui.Label;
        return this.iconLimitText = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "每日限兑：1/1",
        t.textColor = 4187130,
        t.visible = !0,
        t.x = 27,
        t.y = 7,
        t
    },
    i.mzxd11_i = function() {
        var t = new eui.Label;
        return this.mzxd11 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "每周限兑：1/1",
        t.textColor = 4187130,
        t.visible = !1,
        t.x = 27,
        t.y = 7,
        t
    },
    i.yjxd11_i = function() {
        var t = new eui.Label;
        return this.yjxd11 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "永久限兑：1/1",
        t.textColor = 4187130,
        t.visible = !1,
        t.x = 27,
        t.y = 7,
        t
    },
    i.pets_i = function() {
        var t = new eui.Group;
        return this.pets = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this.pet_i(), this.kuang_i(), this.di_i(), this.linedone_i(), this.yiduihuan_i(), this.Buy1_i(), this.petName_i(), this.petLimitText_i(), this.mzxd00_i(), this.yjxd00_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.height = 283,
        t.visible = !0,
        t.width = 169,
        t.x = 5,
        t.y = 5,
        t
    },
    i.kuang_i = function() {
        var t = new eui.Image;
        return this.kuang = t,
        t.height = 293,
        t.scale9Grid = new egret.Rectangle(14, 32, 15, 4),
        t.source = "wfb_wish_shop_kuang_png",
        t.visible = !0,
        t.width = 178,
        t.x = 0,
        t.y = 0,
        t
    },
    i.di_i = function() {
        var t = new eui.Image;
        return this.di = t,
        t.height = 127,
        t.source = "wfb_wish_shop_di_png",
        t.visible = !0,
        t.x = 6,
        t.y = 161,
        t
    },
    i.linedone_i = function() {
        var t = new eui.Image;
        return this.linedone = t,
        t.height = 1,
        t.source = "wfb_wish_shop_linedone_png",
        t.visible = !0,
        t.width = 157,
        t.x = 10,
        t.y = 255,
        t
    },
    i.yiduihuan_i = function() {
        var t = new eui.Label;
        return this.yiduihuan = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 65,
        t.y = 268,
        t
    },
    i.Buy1_i = function() {
        var t = new eui.Group;
        return this.Buy1 = t,
        t.visible = !0,
        t.x = 5,
        t.y = 258,
        t.elementsContent = [this.btnCommon2_i(), this._Group2_i()],
        t
    },
    i.btnCommon2_i = function() {
        var t = new eui.Image;
        return this.btnCommon2 = t,
        t.height = 31,
        t.scale9Grid = new egret.Rectangle(72, 0, 5, 31),
        t.source = "wfb_wish_shop_btncommon1_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 170,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -1,
        t.y = 0,
        t.elementsContent = [this.stoneNum2_i(), this._Image3_i()],
        t
    },
    i.stoneNum2_i = function() {
        var t = new eui.Label;
        return this.stoneNum2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 2318243,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 28,
        t.y = 8,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_shop_17208521_png",
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "战武天尊",
        t.textColor = 15660287,
        t.visible = !0,
        t.x = 53,
        t.y = 237,
        t
    },
    i.petLimitText_i = function() {
        var t = new eui.Label;
        return this.petLimitText = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "每日限兑0/0",
        t.textColor = 4187130,
        t.visible = !0,
        t.x = 42,
        t.y = 8,
        t
    },
    i.mzxd00_i = function() {
        var t = new eui.Label;
        return this.mzxd00 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "每周限兑0/0",
        t.textColor = 4187130,
        t.visible = !1,
        t.x = 42,
        t.y = 8,
        t
    },
    i.yjxd00_i = function() {
        var t = new eui.Label;
        return this.yjxd00 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "永久限兑0/0",
        t.textColor = 4187130,
        t.visible = !1,
        t.x = 43,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/WishSignItemSkin.exml"] = window.wishSignItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["hasGet", "selectedBg", "imgDay", "gift", "kuang", "grp"],
        this.elementsContent = [this.grp_i()],
        this.hasGet_i(),
        this.selectedBg_i(),
        this.states = [new eui.State("sign", [new eui.AddItems("selectedBg", "grp", 2, "imgDay"), new eui.SetProperty("hasGet", "visible", !0), new eui.SetProperty("selectedBg", "visible", !0), new eui.SetProperty("kuang", "x", 72), new eui.SetProperty("kuang", "y", 96), new eui.SetProperty("kuang", "anchorOffsetX", 50), new eui.SetProperty("kuang", "anchorOffsetY", 50)]), new eui.State("done", [new eui.AddItems("hasGet", "grp", 2, "imgDay"), new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "touchEnabled", !1), new eui.SetProperty("hasGet", "visible", !0), new eui.SetProperty("hasGet", "touchEnabled", !1), new eui.SetProperty("selectedBg", "visible", !0), new eui.SetProperty("imgDay", "touchEnabled", !1), new eui.SetProperty("gift", "visible", !0), new eui.SetProperty("gift", "touchEnabled", !1), new eui.SetProperty("kuang", "visible", !1)]), new eui.State("no", [new eui.SetProperty("_Image1", "touchEnabled", !1), new eui.SetProperty("hasGet", "visible", !0), new eui.SetProperty("selectedBg", "visible", !0), new eui.SetProperty("imgDay", "touchEnabled", !1), new eui.SetProperty("gift", "touchEnabled", !1), new eui.SetProperty("kuang", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_i = function() {
        var t = new eui.Group;
        return this.grp = t,
        t.elementsContent = [this._Image1_i(), this.imgDay_i(), this.gift_i(), this.kuang_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.height = 175,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "wfb_sign_346_png",
        t.width = 141,
        t.x = 0,
        t.y = 0,
        t
    },
    i.hasGet_i = function() {
        var t = new eui.Image;
        return this.hasGet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "wfb_sign_hasget_png",
        t.visible = !1,
        t.x = 78,
        t.y = 108.99999999999997,
        t
    },
    i.selectedBg_i = function() {
        var t = new eui.Image;
        return this.selectedBg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "wfb_sign_selected_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgDay_i = function() {
        var t = new eui.Image;
        return this.imgDay = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.y = 0,
        t
    },
    i.gift_i = function() {
        var t = new eui.Image;
        return this.gift = t,
        t.height = 100,
        t.horizontalCenter = -1,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 7.5,
        t.visible = !0,
        t.width = 100,
        t.x = 20,
        t.y = 45.99999999999997,
        t
    },
    i.kuang_i = function() {
        var t = new eui.Image;
        return this.kuang = t,
        t.height = 100,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "wfb_sign_kuang_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.wishFloatingBottle.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["grp_Container"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grp_Container_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_Container_i = function() {
        var t = new eui.Group;
        return this.grp_Container = t,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SignSkin.exml"] = window.wishFloatingBottle.SignSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["com_7", "loginTime", "btnHelp", "list", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.content_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["day7", "gift", "hasGet7", "selected7", "kuang"],
            this.elementsContent = [this.day7_i(), this.gift_i(), this.hasGet7_i(), this.selected7_i(), this.kuang_i()],
            this.states = [new eui.State("sign", [new eui.SetProperty("day7", "visible", !0), new eui.SetProperty("hasGet7", "visible", !1), new eui.SetProperty("selected7", "visible", !0), new eui.SetProperty("kuang", "x", 106), new eui.SetProperty("kuang", "y", 175), new eui.SetProperty("kuang", "anchorOffsetX", 83), new eui.SetProperty("kuang", "anchorOffsetY", 111)]), new eui.State("done", [new eui.SetProperty("day7", "touchEnabled", !1), new eui.SetProperty("gift", "visible", !0), new eui.SetProperty("gift", "touchEnabled", !1), new eui.SetProperty("hasGet7", "visible", !0), new eui.SetProperty("hasGet7", "touchEnabled", !1), new eui.SetProperty("selected7", "visible", !1), new eui.SetProperty("kuang", "visible", !1)]), new eui.State("no", [new eui.SetProperty("day7", "touchEnabled", !1), new eui.SetProperty("gift", "touchEnabled", !1), new eui.SetProperty("hasGet7", "visible", !1), new eui.SetProperty("selected7", "visible", !1), new eui.SetProperty("kuang", "visible", !1)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.day7_i = function() {
            var t = new eui.Image;
            return this.day7 = t,
            t.source = "wfb_sign_day7_png",
            t.x = 6,
            t.y = 6,
            t
        },
        i.gift_i = function() {
            var t = new eui.Image;
            return this.gift = t,
            t.height = 130,
            t.horizontalCenter = 7,
            t.verticalCenter = 2,
            t.visible = !0,
            t.width = 130,
            t
        },
        i.hasGet7_i = function() {
            var t = new eui.Image;
            return this.hasGet7 = t,
            t.source = "wfb_sign_hasget_png",
            t.visible = !1,
            t.x = 138,
            t.y = 274,
            t
        },
        i.selected7_i = function() {
            var t = new eui.Image;
            return this.selected7 = t,
            t.source = "wfb_sign_selected7_png",
            t.visible = !1,
            t.x = 0,
            t.y = 0,
            t
        },
        i.kuang_i = function() {
            var t = new eui.Image;
            return this.kuang = t,
            t.source = "wfb_sign_kuang1_png",
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -.5,
        t.source = "wfb_sign_bg_jpg",
        t.percentWidth = 100,
        t.y = 0,
        t
    },
    n.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.horizontalCenter = 100,
        t.visible = !0,
        t.y = 184,
        t.elementsContent = [this.com_7_i(), this._Image2_i(), this._Image3_i(), this.loginTime_i(), this.btnHelp_i(), this._Scroller1_i()],
        t
    },
    n.com_7_i = function() {
        var t = new eui.Component;
        return this.com_7 = t,
        t.name = "day_7",
        t.visible = !0,
        t.x = 421,
        t.y = 0,
        t.skinName = i,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "wfb_sign_title_png",
        t.x = -87,
        t.y = -154,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "wfb_sign_timebg_png",
        t.visible = !0,
        t.x = 157,
        t.y = -31,
        t
    },
    n.loginTime_i = function() {
        var t = new eui.Label;
        return this.loginTime = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "活动时间：0000.00.00—0000.00.00",
        t.textColor = 10550527,
        t.visible = !0,
        t.width = 311,
        t.x = 155,
        t.y = -25,
        t
    },
    n.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "wfb_sign_btnhelp_png",
        t.x = 563,
        t.y = -49,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 346,
        t.width = 422,
        t.x = 0,
        t.y = 0,
        t.viewport = this.list_i(),
        t
    },
    n.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = -2,
        t.orientation = "rows",
        t.requestedColumnCount = 3,
        t.verticalGap = -6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WishListSkin.exml"] = window.wishFloatingBottle.WishListSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["xian", "c", "a", "b", "items", "timeText", "btnHelp", "d", "btnWish", "txtTimes2", "txtTimes1", "righttop"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.c_i(), this._Image2_i(), this.b_i(), this._Image3_i(), this._Image4_i(), this._Scroller1_i(), this.d_i(), this.btnWish_i(), this.righttop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -.5,
        t.source = "wfb_sign_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.y = 0,
        t
    },
    i.c_i = function() {
        var t = new eui.Group;
        return this.c = t,
        t.horizontalCenter = 37,
        t.visible = !0,
        t.y = 174,
        t.elementsContent = [this.xian_i()],
        t
    },
    i.xian_i = function() {
        var t = new eui.Image;
        return this.xian = t,
        t.source = "wfb_wish_list_xian_png",
        t.visible = !0,
        t.x = 95,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 39.5,
        t.source = "wfb_wish_list_juxing_2_png",
        t.visible = !0,
        t.y = 407,
        t
    },
    i.b_i = function() {
        var t = new eui.Group;
        return this.b = t,
        t.percentHeight = 100,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.a_i()],
        t
    },
    i.a_i = function() {
        var t = new eui.Group;
        return this.a = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 120,
        t.horizontalCenter = 82,
        t.scale9Grid = new egret.Rectangle(0, 15, 850, 12),
        t.source = "wfb_wish_list_juxing_358_png",
        t.visible = !0,
        t.y = 490,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 82,
        t.source = "wfb_wish_list_juxing_359_png",
        t.visible = !0,
        t.y = 608,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 95,
        t.horizontalCenter = 11,
        t.width = 582,
        t.y = 503,
        t.viewport = this.items_i(),
        t
    },
    i.items_i = function() {
        var t = new eui.List;
        return this.items = t,
        t.height = 95,
        t.horizontalCenter = 11,
        t.width = 582,
        t.y = 503,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.d_i = function() {
        var t = new eui.Group;
        return this.d = t,
        t.cacheAsBitmap = !0,
        t.horizontalCenter = 100.5,
        t.visible = !0,
        t.y = 60,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Label1_i(), this.timeText_i(), this.btnHelp_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_list_txtbg_png",
        t.x = 4,
        t.y = 98,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_list_juxing_357_png",
        t.x = 0,
        t.y = 64,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_list_jx_356_kb_png",
        t.x = 4,
        t.y = 116,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_list_jx_357_kb_2_png",
        t.visible = !0,
        t.x = 11,
        t.y = 74,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_list_title_png",
        t.visible = !0,
        t.x = 1,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "今日在线                分钟",
        t.textColor = 12834813,
        t.visible = !0,
        t.width = 168,
        t.x = 9,
        t.y = 100,
        t
    },
    i.timeText_i = function() {
        var t = new eui.Label;
        return this.timeText = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 24.0135346826242,
        t.text = "0000",
        t.textAlign = "center",
        t.textColor = 9961469,
        t.width = 57,
        t.x = 73,
        t.y = 93,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "wfb_wish_list_btnhelp_png",
        t.x = 314.99999999999994,
        t.y = 95,
        t
    },
    i.btnWish_i = function() {
        var t = new eui.Image;
        return this.btnWish = t,
        t.horizontalCenter = 395,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "wfb_wish_list_btnwish_png",
        t.y = 505,
        t
    },
    i.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.cacheAsBitmap = !0,
        t.right = 12,
        t.y = 14,
        t.elementsContent = [this._Image10_i(), this._Label2_i(), this.txtTimes2_i(), this._Image11_i(), this._Label3_i(), this.txtTimes1_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_list_jx_20_kb_2_png",
        t.x = 160,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "今日已许愿",
        t.textColor = 12834813,
        t.x = 174,
        t.y = 3,
        t
    },
    i.txtTimes2_i = function() {
        var t = new eui.Label;
        return this.txtTimes2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "00/10",
        t.textColor = 12834813,
        t.x = 259,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_list_jx_20_kb_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "今日许愿次数",
        t.textColor = 12834813,
        t.x = 14,
        t.y = 3,
        t
    },
    i.txtTimes1_i = function() {
        var t = new eui.Label;
        return this.txtTimes1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "00",
        t.textColor = 12834813,
        t.x = 119,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WishShopSkin.exml"] = window.wishFloatingBottle.WishShopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scrl", "rb_0", "rb_1", "rb_2", "shop", "imgItem", "txtCoin2", "righttop"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._scrl_i(), this.shop_i(), this.righttop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["jingling"],
            this.elementsContent = [this._Image1_i(), this.jingling_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "wfb_wish_shop_juxing_1_png"), new eui.SetProperty("_Image1", "y", -2), new eui.SetProperty("_Image1", "x", -1), new eui.SetProperty("jingling", "textColor", 16777215), new eui.SetProperty("jingling", "y", 10), new eui.SetProperty("jingling", "x", 40)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "wfb_wish_shop_juxing_2_png",
            t.percentWidth = 100,
            t
        },
        i.jingling_i = function() {
            var t = new eui.Label;
            return this.jingling = t,
            t.fontFamily = "MFShangHei",
            t.size = 18,
            t.text = "精灵",
            t.textColor = 8233440,
            t.visible = !0,
            t.x = 40,
            t.y = 10,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["jingling0"],
            this.elementsContent = [this._Image1_i(), this.jingling0_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "wfb_wish_shop_juxing_1_png"), new eui.SetProperty("_Image1", "y", -2), new eui.SetProperty("_Image1", "x", -1), new eui.SetProperty("jingling0", "textColor", 16777215), new eui.SetProperty("jingling0", "y", 10), new eui.SetProperty("jingling0", "x", 40)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "wfb_wish_shop_juxing_2_png",
            t.percentWidth = 100,
            t
        },
        i.jingling0_i = function() {
            var t = new eui.Label;
            return this.jingling0 = t,
            t.fontFamily = "MFShangHei",
            t.size = 18,
            t.text = "道具",
            t.textColor = 8233440,
            t.visible = !0,
            t.x = 40,
            t.y = 10,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["jingling0"],
            this.elementsContent = [this._Image1_i(), this.jingling0_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "wfb_wish_shop_juxing_1_png"), new eui.SetProperty("_Image1", "y", -2), new eui.SetProperty("_Image1", "x", -1), new eui.SetProperty("jingling0", "textColor", 16777215), new eui.SetProperty("jingling0", "y", 10), new eui.SetProperty("jingling0", "x", 40)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "wfb_wish_shop_juxing_2_png",
            t.percentWidth = 100,
            t
        },
        i.jingling0_i = function() {
            var t = new eui.Label;
            return this.jingling0 = t,
            t.fontFamily = "MFShangHei",
            t.size = 18,
            t.text = "刻印",
            t.textColor = 8233440,
            t.visible = !0,
            t.x = 40,
            t.y = 10,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -.5,
        t.source = "wfb_sign_bg_jpg",
        t.percentWidth = 100,
        t.y = 0,
        t
    },
    o._scrl_i = function() {
        var t = new eui.Scroller;
        return this._scrl = t,
        t.height = 460,
        t.horizontalCenter = 90,
        t.scrollPolicyH = "off",
        t.visible = !0,
        t.width = 935,
        t.y = 123,
        t.viewport = this._list_i(),
        t
    },
    o._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.width = 935,
        t.layout = this._TileLayout1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingWidth",
        t.orientation = "rows",
        t.requestedColumnCount = 5,
        t
    },
    o.shop_i = function() {
        var t = new eui.Group;
        return this.shop = t,
        t.horizontalCenter = -209,
        t.y = 78,
        t.elementsContent = [this.rb_0_i(), this.rb_1_i(), this.rb_2_i()],
        t
    },
    o.rb_0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_0 = t,
        t.groupName = "wish_shop_tab",
        t.value = "1",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "wish_shop_tab",
        t.value = "2",
        t.visible = !0,
        t.x = 113,
        t.y = 0,
        t.skinName = n,
        t
    },
    o.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "wish_shop_tab",
        t.value = "3",
        t.visible = !0,
        t.x = 226,
        t.y = 0,
        t.skinName = s,
        t
    },
    o.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.right = 12,
        t.y = 9,
        t.elementsContent = [this._Image2_i(), this.imgItem_i(), this.txtCoin2_i()],
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "wfb_wish_shop_img_di2_png",
        t.x = 11,
        t.y = 5,
        t
    },
    o.imgItem_i = function() {
        var t = new eui.Image;
        return this.imgItem = t,
        t.height = 30,
        t.width = 30,
        t.x = 10,
        t.y = 0,
        t
    },
    o.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 18.5,
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    e
} (eui.Skin);