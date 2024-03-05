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
peakWarAwardExchange; !
function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.doExchange = function() {
            var t = this,
            e = this.data;
            if (e.exchangeConfig) {
                var i = {};
                i.ins = e.exchangeConfig,
                i.caller = this,
                i.callBack = function(i, n) {
                    var r = ~~e.exchangeId;
                    KTool.doExchange(r, n,
                    function() {
                        t.setExchangeBtn()
                    },
                    function() {
                        console.warn("exchange fail")
                    })
                },
                ModuleManager.showModuleByID(1, i)
            } else this._oldDoExchangeHandler()
        },
        i.prototype._oldDoExchangeHandler = function() {
            var e = this;
            if (this.data) {
                var i = ["圣战奖章", "荣耀铸币"];
                t.PeakWarAwardExchange.moneyCounts[this.data.moneyType] >= this.data.price ? Alert.show("你确定消耗" + this.data.price + i[this.data.moneyType] + "兑换此物品吗？",
                function() {
                    var t = ~~e.data.exchangeId;
                    KTool.doExchange(t, 1,
                    function() {
                        e.setExchangeBtn()
                    },
                    function() {
                        console.warn("exchange fail")
                    })
                }) : Alarm.show("所需" + i[this.data.moneyType] + "不够！")
            }
        },
        i.prototype.setExchangeBtn = function() {
            var t = this;
            if (this.data) {
                var e = ~~this.data.forever;
                ItemManager.updateItems([this.data.itemID],
                function() {
                    var i = ItemXMLInfo.getMaxNum(t.data.itemID),
                    n = ItemManager.getNumByID(t.data.itemID);
                    n >= i ? DisplayUtil.setEnabled(t.btnExchange, !1, !0) : KTool.getMultiValue([e],
                    function(e) {
                        BitUtil.getBit(e[0], ~~t.data.restrictions - 1) > 0 ? (DisplayUtil.setEnabled(t.btnExchange, !1, !1), t.txtCount.text = "已兑换", t.coin.width = 0) : DisplayUtil.setEnabled(t.btnExchange, !0, !1)
                    })
                })
            }
        },
        i
    } (eui.ItemRenderer);
    t.PeakWarAwardBaseRender = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardBaseRender")
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
markItemOwer = {},
peakWarAwardExchange; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PeakWarAwardSuitItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                t.prototype.doExchange.call(e)
            },
            markItemOwer)
        },
        e.prototype.dataChanged = function() {
            if (this.data) {
                this.btnExchange.visible = !0,
                this.txtName.text = this.data.name,
                this.txtCount.text = "" + this.data.price;
                var e = ClientConfig.getResPath("assets/item/cloth/suiticon/" + this.data.itemID + ".png");
                this.icon.source = e,
                this.icon.scaleX = this.icon.scaleY = .8,
                this.coin.visible = !0,
                this.coin.source = ItemXMLInfo.getIconURL(this.data.exchangeConfig.coinid),
                this.coin.width = 55,
                this.coin.scaleX = this.coin.scaleY = .54
            } else this.btnExchange.visible = !1,
            this.txtName.text = "",
            this.txtCount.text = "",
            this.icon.source = null,
            this.coin.visible = !1;
            t.prototype.setExchangeBtn.call(this)
        },
        e
    } (t.PeakWarAwardBaseRender);
    t.PeakWarAwardSuitRender = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardSuitRender")
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
peakWarAwardExchange; !
function(t) {
    var e = function() {
        function t() {}
        return t.setup = function() {
            var e = config.xml.getAnyRes("peakCrusade_reward");
            t.list = [],
            t.parse2(e.root)
        },
        t.parse2 = function(e) {
            for (var n = e.menu,
            r = 0,
            a = n; r < a.length; r++) for (var o = a[r], s = [].concat(o.item), h = 0, c = s; h < c.length; h++) {
                var _ = c[h],
                u = new i(_);
                u.cat = ~~o.id,
                u.exchangeConfig = this._transToExchangeConfig(u.cat, u.itemID),
                t.list.push(u)
            }
        },
        t.parse = function(e) {
            for (var n = e.children,
            r = 0,
            a = n; r < a.length; r++) {
                var o = a[r];
                if (o && "menu" == o.name) for (var s = o.children,
                h = 0,
                c = s; h < c.length; h++) {
                    var _ = c[h],
                    u = _.attributes,
                    l = new i(u);
                    l.cat = o.attributes.id,
                    l.exchangeConfig = this._transToExchangeConfig(~~l.cat, l.itemID),
                    t.list.push(l)
                }
            }
        },
        t._transToExchangeConfig = function(t, e) {
            var i = config.Exchange_clt.getItems(),
            n = [2, 3, 4, 99, 5, 6],
            r = [2, 1, 3, 1, 1, 1];
            t = r[n.indexOf(t)];
            for (var a = 0,
            o = i; a < o.length; a++) {
                var s = o[a];
                if (1 === s.shopid && s.type === t && s.realid === e) return s
            }
            return null
        },
        t.getListByCat = function(e) {
            for (var i = [], n = 0, r = t.list; n < r.length; n++) {
                var a = r[n];~~a.cat == e && a.itemID && i.push(a)
            }
            return i
        },
        t.destroy = function() {
            t.list = []
        },
        t.list = [],
        t
    } ();
    t.PeakWarAwardConfigController = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardConfigController");
    var i = function() {
        function t(t) {
            if (this.moneyType = 0, this.forever = 0, t) {
                for (var e in t) this[e] = t[e];
                this.name = t.name,
                this.itemID = ~~t.itemID,
                this.price = ~~t.price,
                this.requireLv = ~~t.requireLv,
                this.restrictions = ~~t.restrictions,
                this.exchangeId = ~~t.exchangeId,
                this.moneyType = ~~t.PriceType,
                this.des = t.des,
                this.forever = ~~t.forever,
                this.monappend = t.monappend
            }
        }
        return t
    } ();
    t.PeakWarAwardInfo = i,
    __reflect(i.prototype, "peakWarAwardExchange.PeakWarAwardInfo")
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
markItemOwer = {},
peakWarAwardExchange; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PeakWarAwardItemItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                t.prototype.doExchange.call(e)
            },
            markItemOwer)
        },
        e.prototype.dataChanged = function() {
            if (this.data) {
                this.btnExchange.visible = !0,
                this.txtName.text = this.data.name,
                this.txtCount.text = "" + this.data.price,
                this.icon.source = ItemXMLInfo.getIconURL(this.data.itemID),
                this.coin.visible = !0,
                this.name_bg.visible = !0;
                this.data.moneyType;
                this.coin.source = ItemXMLInfo.getIconURL(this.data.exchangeConfig.coinid),
                this.coin.scaleX = this.coin.scaleY = .54,
                this.coin.width = 55
            } else this.btnExchange.visible = !1,
            this.txtName.text = "",
            this.txtCount.text = "",
            this.icon.source = null,
            this.coin.visible = !1,
            this.name_bg.visible = !1;
            t.prototype.setExchangeBtn.call(this)
        },
        e
    } (t.PeakWarAwardBaseRender);
    t.PeakWarAwardItemRender = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardItemRender")
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
markItemOwer = {},
peakWarAwardExchange; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PeakWarAwardMarkItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                t.prototype.doExchange.call(e)
            },
            markItemOwer)
        },
        e.prototype.dataChanged = function() {
            if (this.data) {
                this.btnExchange.visible = !0,
                this.txtName.text = this.data.name,
                this.txtCount.text = "" + this.data.price;
                var e = ClientConfig.getMarkPath(this.data.itemID);
                this.icon.source = e,
                this.coin.visible = !0,
                this.name_bg.visible = !0,
                this.coin.source = ItemXMLInfo.getIconURL(this.data.exchangeConfig.coinid),
                this.coin.scaleX = this.coin.scaleY = .54
            } else this.btnExchange.visible = !1,
            this.txtName.text = "",
            this.txtCount.text = "",
            this.icon.source = null,
            this.coin.visible = !1,
            this.name_bg.visible = !1;
            t.prototype.setExchangeBtn.call(this)
        },
        e
    } (t.PeakWarAwardBaseRender);
    t.PeakWarAwardMarkRender = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardMarkRender")
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
peakWarAwardExchange; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PeakWarAwardPetHeadSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            if (Boolean(this.data)) {
                var t = this.data.MonId || this.data.itemID;
                this.icon.source = ClientConfig.getPetHeadPath(t),
                this.touchEnabled = !0,
                this.touchChildren = !0
            } else this.icon.source = null,
            this.touchEnabled = !1,
            this.touchChildren = !1;
            this.icon.width = this.icon.height = 80
        },
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.PeakWarAwardPetHeadRender = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardPetHeadRender")
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
markItemOwer = {},
peakWarAwardExchange; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PeakWarAwardStoneItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                t.prototype.doExchange.call(e)
            },
            markItemOwer)
        },
        e.prototype.dataChanged = function() {
            this.data ? (this.btnExchange.visible = !0, this.txtName.text = this.data.name, this.txtCount.text = "" + this.data.price, this.icon.source = ItemXMLInfo.getIconURL(this.data.itemID), this.coin.visible = !0, this.name_bg.visible = !0, this.coin.source = ItemXMLInfo.getIconURL(this.data.exchangeConfig.coinid), this.coin.scaleX = this.coin.scaleY = .54) : (this.btnExchange.visible = !1, this.txtName.text = "", this.txtCount.text = "", this.icon.source = null, this.coin.visible = !1, this.name_bg.visible = !1),
            t.prototype.setExchangeBtn.call(this)
        },
        e
    } (t.PeakWarAwardBaseRender);
    t.PeakWarAwardStoneRender = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardStoneRender")
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
peakWarAwardExchange; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            n.cls = [t.PeakWarAwardPet, t.PeakWarAwardSkin, t.PeakWarAwardMark, t.PeakWarAwardStone, t.PeakWarAwardSuit, t.PeakWarAwardItem],
            n.pages = [null, null, null, null, null, null],
            n.curRab = 0,
            n.rbBtnArr = [],
            StatLogger.log("1023版本系统功能", "巅峰圣战", "进入奖励界面"),
            n.skinName = PeakWarAwardExchangeSkin,
            n.data = i;
            var r = GainWayManger.getJumpInfo(n.data);
            return r && (n.curRab = r.menuDefault),
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var n = this;
            if (e.prototype.childrenCreated.call(this), this.adaptLeftContent(this.grp_left), this.rbBtnArr = [], this.rbBtnArr.push(this.btn_pet), this.rbBtnArr.push(this.btn_skin), this.rbBtnArr.push(this.btn_mark), this.rbBtnArr.push(this.btn_stone), this.rbBtnArr.push(this.btn_cloth), this.rbBtnArr.push(this.btn_item), t.PeakWarAwardConfigController.setup(), ImageButtonUtil.add(this.back,
            function() {
                n.onClose()
            },
            this), this.btn_pet.visible = this.btn_skin.visible = !GameInfo.isChecking, GameInfo.isChecking) this.pages[2] = new this.cls[2],
            this.grpContainer.addChild(this.pages[2]),
            this.btn_pet.selected = !1,
            this.btn_mark.selected = !0;
            else {
                var r;
                this.curRab > 0 ? (r = this.rbBtnArr[this.curRab - 1], r.selected = !0, this.pages[this.curRab - 1] = new this.cls[this.curRab - 1], this.grpContainer.addChild(this.pages[this.curRab - 1])) : (r = this.rbBtnArr[0], r.selected = !0, this.pages[0] = new this.cls[0], this.grpContainer.addChild(this.pages[0]))
            }
            this.btn_item.group.addEventListener(eui.UIEvent.CHANGE,
            function(t) {
                var e = n.btn_item.group;
                n.grpContainer.removeChildren();
                var i = ~~e.selectedValue;
                n.pages[i] || (n.pages[i] = new n.cls[i]),
                n.grpContainer.addChild(n.pages[i])
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItemNums, this),
            this.showItems(),
            KTool.getMultiValue([PeakJihad2016Controller.curMonthStarLvId, PeakJihad2016Controller.curJJMonthStarLvId],
            function(t) {
                i.curStarLv = t[0],
                i.curJJStarLv = t[1]
            }),
            KTool.getBitSet([462],
            function(t) {
                i.isHvaeYueka = !!t[0]
            }),
            this.grpContainer.x = this.grpContainer.x + DeviceInfoManager.adapterOffSetX,
            this.grp_left.width = 140 + DeviceInfoManager.adapterOffSetX,
            this.adaptBgByScale(this.bg)
        },
        i.prototype.updateItemNums = function() {
            this.showItems()
        },
        i.prototype.showItems = function() {
            var t = ItemManager.getNumByID(1717451),
            e = ItemXMLInfo.getMaxNum(1717451),
            n = ItemManager.getNumByID(1717452),
            r = ItemXMLInfo.getMaxNum(1717452);
            this.icon_coin0.source = ItemXMLInfo.getIconURL(1717451),
            this.icon_coin1.source = ItemXMLInfo.getIconURL(1717452),
            i.moneyCounts[0] = t,
            i.moneyCounts[1] = n,
            this.txtCount_0.text = t + "/" + e,
            this.txtCount_1.text = n + "/" + r
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItemNums, this),
            t.PeakWarAwardConfigController.destroy(),
            e.prototype.destroy.call(this)
        },
        i.moneyCounts = [0, 0],
        i.isHvaeYueka = !1,
        i
    } (BaseModule);
    t.PeakWarAwardExchange = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardExchange")
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
peakWarAwardExchange; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PeakWarAwardItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.percentWidth = 100,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.PeakWarAwardItemRender;
            var i = [];
            i = t.PeakWarAwardConfigController.getListByCat(5),
            i = i.concat(t.PeakWarAwardConfigController.getListByCat(6)),
            this.markList = new eui.ArrayCollection(i),
            this._list.dataProvider = this.markList
        },
        i.prototype.init = function() {},
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.PeakWarAwardItem = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardItem", ["IPeakWarAwardBasePage"])
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
peakWarAwardExchange; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PeakWarAwardMarkSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.percentWidth = 100,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.PeakWarAwardMarkRender;
            var i = t.PeakWarAwardConfigController.getListByCat(2);
            this.markList = new eui.ArrayCollection(i),
            this._list.dataProvider = this.markList
        },
        i.prototype.init = function() {},
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.PeakWarAwardMark = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardMark", ["IPeakWarAwardBasePage"])
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
peakWarAwardExchange; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.ITEM_WIDTH = 106,
            t.SPACING = 6,
            t.arrNotShowTipsId = [4561],
            t.skinName = PeakWarAwardPetSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ModuleManager,
            this.percentWidth = 100,
            this.y = -18,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.PeakWarAwardPetHeadRender;
            for (var n = t.PeakWarAwardConfigController.getListByCat(0), r = this._getListCount(), a = n.length; r > a; a++) n.push(null);
            this.petList = new eui.ArrayCollection(n),
            this._list.dataProvider = this.petList,
            ImageButtonUtil.add(this.btnExchange,
            function() {
                if (i.currItem = i._list.selectedItem, i.currItem) if (t.PeakWarAwardExchange.curStarLv >= i.currItem.requireLv || t.PeakWarAwardExchange.isHvaeYueka || t.PeakWarAwardExchange.curJJStarLv >= i.currItem.requireLv) {
                    var e = ["圣战奖章", "荣耀铸币"];
                    t.PeakWarAwardExchange.moneyCounts[i.currItem.moneyType] >= i.currItem.price ? Alert.show("你确定消耗" + i.currItem.price + e[i.currItem.moneyType] + "兑换此物品吗？",
                    function() {
                        var t = i.currItem.exchangeId;
                        KTool.doExchange(t, 1,
                        function() {
                            i.updateExchangeBtn()
                        })
                    }) : Alarm.show("所需" + e[i.currItem.moneyType] + "不够！")
                } else Alarm.show("兑换专属精灵需要无敌猛将及以上段位!")
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                i.currItem = i._list.selectedItem,
                i.currItem && PetManager.showPetIntroduce(i.currItem.itemID)
            },
            this),
            ImageButtonUtil.add(this.iconAttr, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.iconSkill, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.iconMark, this.onTouchIamgeButtonHandler, this),
            this._scroller.addEventListener(egret.Event.CHANGE, this.onScroller, this),
            this._list.addEventListener(egret.Event.CHANGE, this.onItemChange, this),
            this._list.selectedIndex = 0,
            this.onItemChange()
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.iconAttr:
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], this.currItem.itemID, "", AppDoStyle.NULL);
                break;
            case this.iconSkill:
                var e = {};
                e.id = +this.currItem.monappend.split("_")[1],
                tipsPop.TipsPop.openSkillPop(e);
                break;
            case this.iconMark:
                var i = {};
                i.ins = +this.currItem.monappend.split("_")[0],
                tipsPop.TipsPop.openCounterMarkPop(i)
            }
        },
        i.prototype._getListCount = function() {
            var t = 950,
            e = this._list.layout,
            i = e.gap,
            n = egret.lifecycle.stage.stageWidth - 1136;
            return Math.ceil((t + n + i) / (this.ITEM_WIDTH + i)) + 1
        },
        i.prototype.showAward = function() {},
        i.prototype.onItemChange = function(t) {
            this.currItem = this._list.selectedItem,
            this.bg.source = "resource/assets/peak_award/pet/" + this.currItem.itemID + "_bg.png",
            this.title.source = "resource/assets/peak_award/pet/" + this.currItem.itemID + "_title.png",
            this.iconMark.source = CountermarkXMLInfo.getIconURL( + this.currItem.monappend.split("_")[0]),
            this.coin.source = ItemXMLInfo.getIconURL(1717451),
            this.txtCoin.text = "" + this.currItem.price,
            this.updateExchangeBtn(),
            this.txtTips.visible = -1 == this.arrNotShowTipsId.indexOf(this.currItem.itemID)
        },
        i.prototype.updateExchangeBtn = function() {
            var t = this;
            if (0 == this.currItem.itemID) DisplayUtil.setEnabled(this.btnExchange, !1, !0);
            else {
                var e = this.currItem.forever,
                i = PetManager.hasPet(this.currItem.itemID);
                i ? DisplayUtil.setEnabled(this.btnExchange, !1, !0) : KTool.getMultiValue([e],
                function(e) {
                    BitUtil.getBit(e[0], t.currItem.restrictions - 1) > 0 ? DisplayUtil.setEnabled(t.btnExchange, !1, !0) : DisplayUtil.setEnabled(t.btnExchange, !0, !1)
                })
            }
        },
        i.prototype.onScroller = function(t) {
            if (this.petList.length > 6) {
                this._scroller.viewport.scrollH,
                (this.petList.length / 2 - 5) * (this.ITEM_WIDTH + this.SPACING)
            }
        },
        i.prototype.onListPre = function() {
            egret.Tween.removeTweens(this._scroller.viewport);
            var t = this._scroller.viewport.scrollH - 5 * (this.ITEM_WIDTH + this.SPACING);
            t = 0 > t ? 0 : t,
            egret.Tween.get(this._scroller.viewport).to({
                scrollH: t
            },
            1200, egret.Ease.backOut).call(this.onScroller, this)
        },
        i.prototype.onListNext = function() {
            egret.Tween.removeTweens(this._scroller.viewport);
            var t = 5 * (this.ITEM_WIDTH + this.SPACING) + this._scroller.viewport.scrollH,
            e = (this.petList.length - 5) * (this.ITEM_WIDTH + this.SPACING);
            t > e && (t = e),
            egret.Tween.get(this._scroller.viewport).to({
                scrollH: t
            },
            1200, egret.Ease.backOut).call(this.onScroller, this)
        },
        i.prototype.init = function() {},
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this._scroller.removeEventListener(egret.Event.CHANGE, this.onScroller, this),
            this._list.removeEventListener(egret.Event.CHANGE, this.onItemChange, this)
        },
        i
    } (eui.Component);
    t.PeakWarAwardPet = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardPet", ["IPeakWarAwardBasePage"])
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
peakWarAwardExchange; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.ITEM_WIDTH = 106,
            t.SPACING = 6,
            t.skinName = PeakWarAwardSkinSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.percentWidth = 100,
            this.y = -18,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.PeakWarAwardPetHeadRender;
            var n = t.PeakWarAwardConfigController.getListByCat(1);
            n.map(function(t) {
                t && (t.MonId = PetSkinXMLInfo.getSkinInfo(t.itemID).skinPetId)
            });
            for (var r = this._getListCount(), a = n.length; r > a; a++) n.push(null);
            this.petList = new eui.ArrayCollection(n),
            this._list.dataProvider = this.petList,
            ImageButtonUtil.add(this.btnExchange,
            function() {
                if (i.currItem = i._list.selectedItem, i.currItem) {
                    var e = ["圣战奖章", "荣耀铸币"];
                    t.PeakWarAwardExchange.moneyCounts[i.currItem.moneyType] >= i.currItem.price ? Alert.show("你确定消耗" + i.currItem.price + e[i.currItem.moneyType] + "兑换此物品吗？",
                    function() {
                        var t = i.currItem.exchangeId;
                        KTool.doExchange(t, 1,
                        function() {
                            i.updateExchangeBtn()
                        })
                    }) : Alarm.show("所需" + e[i.currItem.moneyType] + "不够！")
                }
            },
            this),
            this._scroller.addEventListener(egret.Event.CHANGE, this.onScroller, this),
            this._list.addEventListener(egret.Event.CHANGE, this.onItemChange, this),
            this._list.selectedIndex = 0,
            this.onItemChange()
        },
        i.prototype._getListCount = function() {
            var t = 950,
            e = this._list.layout,
            i = e.gap,
            n = egret.lifecycle.stage.stageWidth - 1136;
            return Math.ceil((t + n + i) / (this.ITEM_WIDTH + i)) + 1
        },
        i.prototype.showAward = function() {},
        i.prototype.onItemChange = function(t) {
            this.currItem = this._list.selectedItem,
            this.bg.source = "resource/assets/peak_award/skin/" + this.currItem.itemID + "_bg.png",
            this.title.source = "resource/assets/peak_award/skin/" + this.currItem.itemID + "_title.png",
            this.coin.source = ItemXMLInfo.getIconURL(1717451),
            this.txtCoin.text = "" + this.currItem.price,
            this.updateExchangeBtn()
        },
        i.prototype.updateExchangeBtn = function() {
            var t = this;
            if (0 == this.currItem.itemID) DisplayUtil.setEnabled(this.btnExchange, !1, !0);
            else {
                var e = this.currItem.forever,
                i = PetSkinController.instance.havePermanentSkin(this.currItem.itemID);
                i ? DisplayUtil.setEnabled(this.btnExchange, !1, !0) : KTool.getMultiValue([e],
                function(e) {
                    BitUtil.getBit(e[0], t.currItem.restrictions - 1) > 0 ? DisplayUtil.setEnabled(t.btnExchange, !1, !0) : DisplayUtil.setEnabled(t.btnExchange, !0, !1)
                })
            }
        },
        i.prototype.onScroller = function(t) {
            if (this.petList.length > 6) {
                this._scroller.viewport.scrollH,
                (this.petList.length / 2 - 5) * (this.ITEM_WIDTH + this.SPACING)
            }
        },
        i.prototype.onListPre = function() {
            egret.Tween.removeTweens(this._scroller.viewport);
            var t = this._scroller.viewport.scrollH - 5 * (this.ITEM_WIDTH + this.SPACING);
            t = 0 > t ? 0 : t,
            egret.Tween.get(this._scroller.viewport).to({
                scrollH: t
            },
            1200, egret.Ease.backOut).call(this.onScroller, this)
        },
        i.prototype.onListNext = function() {
            egret.Tween.removeTweens(this._scroller.viewport);
            var t = 5 * (this.ITEM_WIDTH + this.SPACING) + this._scroller.viewport.scrollH,
            e = (this.petList.length - 5) * (this.ITEM_WIDTH + this.SPACING);
            t > e && (t = e),
            egret.Tween.get(this._scroller.viewport).to({
                scrollH: t
            },
            1200, egret.Ease.backOut).call(this.onScroller, this)
        },
        i.prototype.init = function() {},
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.PeakWarAwardSkin = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardSkin", ["IPeakWarAwardBasePage"])
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
peakWarAwardExchange; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PeakWarAwardStoneSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.percentWidth = 100,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.PeakWarAwardStoneRender;
            var i = t.PeakWarAwardConfigController.getListByCat(3);
            this.markList = new eui.ArrayCollection(i),
            this._list.dataProvider = this.markList
        },
        i.prototype.init = function() {},
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.PeakWarAwardStone = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardStone", ["IPeakWarAwardBasePage"])
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
peakWarAwardExchange; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PeakWarAwardSuitSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.percentWidth = 100,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.PeakWarAwardSuitRender;
            var i = t.PeakWarAwardConfigController.getListByCat(4);
            this.markList = new eui.ArrayCollection(i),
            this._list.dataProvider = this.markList
        },
        i.prototype.init = function() {},
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.PeakWarAwardSuit = e,
    __reflect(e.prototype, "peakWarAwardExchange.PeakWarAwardSuit", ["IPeakWarAwardBasePage"])
} (peakWarAwardExchange || (peakWarAwardExchange = {}));
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
generateEUI.paths["resource/eui_skins/item/PeakWarAwardItemItemSkin.exml"] = window.PeakWarAwardItemItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "name_bg", "txtName", "icon", "coin", "txtCount", "btnExchange"],
        this.height = 187,
        this.width = 144,
        this.elementsContent = [this.item_bg_i(), this.name_bg_i(), this.txtName_i(), this.icon_i(), this.btnExchange_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 144,
        t.source = "peak_war_award_mark_item_bg_png",
        t.width = 144,
        t.x = 0,
        t.y = 0,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.height = 28,
        t.source = "peak_war_award_mark_name_bg_png",
        t.width = 142,
        t.x = 1,
        t.y = 116,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "黑体",
        t.size = 16.459020614624,
        t.text = "圣战之巅",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 140,
        t.x = 2,
        t.y = 121,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 64,
        t.source = "",
        t.width = 63,
        t.x = 41,
        t.y = 28,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Group;
        return this.btnExchange = t,
        t.x = 0,
        t.y = 147,
        t.elementsContent = [this._Image1_i(), this._Group1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 144,
        t.x = 0,
        t.y = -2,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 5,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.coin_i(), this.txtCount_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 55,
        t.scaleX = .54,
        t.scaleY = .54,
        t.source = "peak_war_award_suit_coin_png",
        t.width = 55,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "300",
        t.textColor = 8341784,
        t.x = 35,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PeakWarAwardItemSkin.exml"] = window.PeakWarAwardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scroller"],
        this.height = 550,
        this.width = 954,
        this.elementsContent = [this._scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 550,
        t.maxWidth = 1158,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 506,
        t.width = 840,
        t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 550,
        t.itemRendererSkinName = PeakWarAwardMarkItemSkin,
        t.width = 954,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.orientation = "rows",
        t.verticalGap = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PeakWarAwardMarkItemSkin.exml"] = window.PeakWarAwardMarkItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "name_bg", "txtName", "icon", "txtCount", "coin", "btnExchange"],
        this.height = 187,
        this.width = 144,
        this.elementsContent = [this.item_bg_i(), this.name_bg_i(), this.txtName_i(), this.icon_i(), this.btnExchange_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 144,
        t.source = "peak_war_award_mark_item_bg_png",
        t.width = 144,
        t.x = 0,
        t.y = 0,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.height = 28,
        t.source = "peak_war_award_mark_name_bg_png",
        t.width = 142,
        t.x = 1,
        t.y = 116,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "黑体",
        t.size = 16.459020614624,
        t.text = "圣战之巅",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 140,
        t.x = 2,
        t.y = 121,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 64,
        t.source = "",
        t.width = 63,
        t.x = 41,
        t.y = 28,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Group;
        return this.btnExchange = t,
        t.x = 0,
        t.y = 147,
        t.elementsContent = [this._Image1_i(), this._Group1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 144,
        t.x = 0,
        t.y = -2,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 5,
        t.elementsContent = [this.txtCount_i(), this.coin_i()],
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "300",
        t.textColor = 8341784,
        t.x = 35,
        t.y = 5,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 55,
        t.scaleX = .54,
        t.scaleY = .54,
        t.source = "peak_war_award_suit_coin_png",
        t.width = 55,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PeakWarAwardPetHeadSkin.exml"] = window.PeakWarAwardPetHeadSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["head_bg", "icon", "select"],
        this.currentState = "up",
        this.height = 82,
        this.maxHeight = 106,
        this.maxWidth = 106,
        this.width = 82,
        this.elementsContent = [this.head_bg_i(), this.icon_i(), this.select_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("select", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.head_bg_i = function() {
        var t = new eui.Image;
        return this.head_bg = t,
        t.height = 82,
        t.horizontalCenter = 0,
        t.source = "peak_war_award_pet_head_bg_png",
        t.verticalCenter = 0,
        t.width = 82,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.horizontalCenter = 0,
        t.maxHeight = 105,
        t.maxWidth = 105,
        t.verticalCenter = 0,
        t
    },
    i.select_i = function() {
        var t = new eui.Image;
        return this.select = t,
        t.height = 88,
        t.horizontalCenter = 0,
        t.source = "common_reward_selcted_head_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 88,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PeakWarAwardStoneItemSkin.exml"] = window.PeakWarAwardStoneItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "name_bg", "txtName", "icon", "txtCount", "coin", "btnExchange"],
        this.height = 187,
        this.width = 144,
        this.elementsContent = [this.item_bg_i(), this.name_bg_i(), this.txtName_i(), this.icon_i(), this.btnExchange_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 144,
        t.source = "peak_war_award_mark_item_bg_png",
        t.width = 144,
        t.x = 0,
        t.y = 0,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.height = 28,
        t.source = "peak_war_award_mark_name_bg_png",
        t.width = 142,
        t.x = 1,
        t.y = 116,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "黑体",
        t.size = 16.459020614624,
        t.text = "圣战之巅",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 140,
        t.x = 2,
        t.y = 121,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 64,
        t.source = "",
        t.width = 63,
        t.x = 41,
        t.y = 28,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Group;
        return this.btnExchange = t,
        t.x = 0,
        t.y = 147,
        t.elementsContent = [this._Image1_i(), this._Group1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 144,
        t.x = 0,
        t.y = -2,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 5,
        t.elementsContent = [this.txtCount_i(), this.coin_i()],
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "300",
        t.textColor = 8341784,
        t.x = 35,
        t.y = 5,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 55,
        t.scaleX = .54,
        t.scaleY = .54,
        t.source = "peak_war_award_suit_coin_png",
        t.width = 55,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PeakWarAwardSuitItemSkin.exml"] = window.PeakWarAwardSuitItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txtName", "btnbg", "coin", "txtCount", "btnExchange", "icon"],
        this.height = 278,
        this.width = 226,
        this.elementsContent = [this.bg_i(), this.txtName_i(), this.btnExchange_i(), this.icon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 236,
        t.source = "peak_war_award_suit_bg_png",
        t.width = 226,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "黑体",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "套装名称套装名称",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 200,
        t.y = 211,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Group;
        return this.btnExchange = t,
        t.x = 0,
        t.y = 238,
        t.elementsContent = [this.btnbg_i(), this._Group1_i()],
        t
    },
    i.btnbg_i = function() {
        var t = new eui.Image;
        return this.btnbg = t,
        t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 226,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 5,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.coin_i(), this.txtCount_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 55,
        t.scaleX = .54,
        t.scaleY = .54,
        t.source = "peak_war_award_suit_coin_png",
        t.width = 55,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "300",
        t.textColor = 8341784,
        t.x = 35,
        t.y = 5,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.bottom = 87,
        t.horizontalCenter = 0,
        t.source = "",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakWarAwardExchangeSkin.exml"] = window.PeakWarAwardExchangeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "top_bg", "item_bg0", "txtCount_0", "icon_coin0", "item_bg1", "txtCount_1", "icon_coin1", "title", "back", "grpContainer", "leftbg", "btn_pet", "btn_skin", "btn_mark", "btn_stone", "btn_cloth", "btn_item", "grp_left"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this._Group4_i(), this.grpContainer_i(), this.grp_left_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.scale9Grid = new egret.Rectangle(2, 25, 97, 25),
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.right = 26,
            t.size = 26,
            t.text = "专属精灵",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.scale9Grid = new egret.Rectangle(2, 25, 97, 25),
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.right = 26,
            t.size = 26,
            t.text = "精灵皮肤",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.scale9Grid = new egret.Rectangle(2, 25, 97, 25),
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.right = 26,
            t.size = 26,
            t.text = "高级刻印",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.scale9Grid = new egret.Rectangle(2, 25, 97, 25),
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.right = 26,
            t.size = 26,
            t.text = "刻印宝石",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.scale9Grid = new egret.Rectangle(2, 25, 97, 25),
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.right = 26,
            t.size = 26,
            t.text = "对战套装",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.scale9Grid = new egret.Rectangle(2, 25, 97, 25),
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.right = 26,
            t.size = 26,
            t.text = "药剂道具",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    h = e.prototype;
    return h.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.fillMode = "scale",
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(279, 418, 715, 195),
        t.source = "common_ui_bg_2_png",
        t.y = 0,
        t
    },
    h._Group1_i = function() {
        var t = new eui.Group;
        return t.percentWidth = 100,
        t.y = 48,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    h._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    h._Group4_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.right = 0,
        t.y = 0,
        t.elementsContent = [this.top_bg_i(), this._Group2_i(), this._Group3_i(), this.back_i()],
        t
    },
    h.top_bg_i = function() {
        var t = new eui.Image;
        return this.top_bg = t,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(556, 5, 27, 4),
        t.source = "common_top_bg_style1_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    h._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 168,
        t.y = 12,
        t.elementsContent = [this.item_bg0_i(), this.txtCount_0_i(), this.icon_coin0_i()],
        t
    },
    h.item_bg0_i = function() {
        var t = new eui.Image;
        return this.item_bg0 = t,
        t.source = "common_reward_progress_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    h.txtCount_0_i = function() {
        var t = new eui.Label;
        return this.txtCount_0 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "1500/1500",
        t.textColor = 13887988,
        t.visible = !0,
        t.x = 41,
        t.y = 5,
        t
    },
    h.icon_coin0_i = function() {
        var t = new eui.Image;
        return this.icon_coin0 = t,
        t.height = 55,
        t.left = 0,
        t.scaleX = .7,
        t.scaleY = .7,
        t.source = "peak_war_award_exchange_icon_coin0_png",
        t.visible = !0,
        t.width = 55,
        t.y = -6,
        t
    },
    h._Group3_i = function() {
        var t = new eui.Group;
        return t.right = 7,
        t.y = 12,
        t.elementsContent = [this.item_bg1_i(), this.txtCount_1_i(), this.icon_coin1_i()],
        t
    },
    h.item_bg1_i = function() {
        var t = new eui.Image;
        return this.item_bg1 = t,
        t.source = "common_reward_progress_bg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    h.txtCount_1_i = function() {
        var t = new eui.Label;
        return this.txtCount_1 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "2500/2500",
        t.textColor = 13887988,
        t.x = 41,
        t.y = 5,
        t
    },
    h.icon_coin1_i = function() {
        var t = new eui.Image;
        return this.icon_coin1 = t,
        t.height = 55,
        t.left = 0,
        t.scaleX = .7,
        t.scaleY = .7,
        t.source = "peak_war_award_exchange_icon_coin1_png",
        t.visible = !0,
        t.width = 55,
        t.y = -6,
        t
    },
    h.back_i = function() {
        var t = new eui.Group;
        return this.back = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.title_i(), this._Image1_i()],
        t
    },
    h.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 35,
        t.source = "peak_war_award_exchange_title_png",
        t.width = 126,
        t.x = 114,
        t.y = 7,
        t
    },
    h._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    h.grpContainer_i = function() {
        var t = new eui.Group;
        return this.grpContainer = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 166,
        t.y = 69,
        t
    },
    h.grp_left_i = function() {
        var t = new eui.Group;
        return this.grp_left = t,
        t.left = 0,
        t.maxWidth = 166,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 140,
        t.y = 51,
        t.elementsContent = [this.leftbg_i(), this.btn_pet_i(), this.btn_skin_i(), this.btn_mark_i(), this.btn_stone_i(), this.btn_cloth_i(), this.btn_item_i()],
        t
    },
    h.leftbg_i = function() {
        var t = new eui.Image;
        return this.leftbg = t,
        t.height = 592,
        t.left = 0,
        t.right = 9,
        t.scale9Grid = new egret.Rectangle(2, 7, 8, 14),
        t.source = "comon_left_bg_png",
        t
    },
    h.btn_pet_i = function() {
        var t = new eui.RadioButton;
        return this.btn_pet = t,
        t.groupName = "navbar",
        t.label = "",
        t.selected = !1,
        t.value = "0",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 18,
        t.skinName = i,
        t
    },
    h.btn_skin_i = function() {
        var t = new eui.RadioButton;
        return this.btn_skin = t,
        t.groupName = "navbar",
        t.label = "",
        t.value = "1",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 84,
        t.skinName = n,
        t
    },
    h.btn_mark_i = function() {
        var t = new eui.RadioButton;
        return this.btn_mark = t,
        t.groupName = "navbar",
        t.label = "",
        t.value = "2",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 150,
        t.skinName = r,
        t
    },
    h.btn_stone_i = function() {
        var t = new eui.RadioButton;
        return this.btn_stone = t,
        t.groupName = "navbar",
        t.label = "",
        t.value = "3",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 216,
        t.skinName = a,
        t
    },
    h.btn_cloth_i = function() {
        var t = new eui.RadioButton;
        return this.btn_cloth = t,
        t.groupName = "navbar",
        t.label = "",
        t.value = "4",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 282,
        t.skinName = o,
        t
    },
    h.btn_item_i = function() {
        var t = new eui.RadioButton;
        return this.btn_item = t,
        t.groupName = "navbar",
        t.value = "5",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 348,
        t.skinName = s,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PeakWarAwardMarkSkin.exml"] = window.PeakWarAwardMarkSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scroller"],
        this.height = 550,
        this.width = 954,
        this.elementsContent = [this._scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 550,
        t.maxWidth = 1158,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 506,
        t.width = 954,
        t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 550,
        t.itemRendererSkinName = PeakWarAwardMarkItemSkin,
        t.width = 954,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.orientation = "rows",
        t.verticalGap = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PeakWarAwardPetSkin.exml"] = window.PeakWarAwardPetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "title", "exchange_bg", "txtCoin", "coin", "btnExchange", "bottom_bg", "_list", "_scroller", "iconAttr", "iconSkill", "iconMark", "txtTips", "btnInfo"],
        this.height = 589,
        this.width = 1004,
        this.elementsContent = [this.bg_i(), this.title_i(), this.btnExchange_i(), this._Group3_i(), this._Group7_i(), this.txtTips_i(), this._Image1_i(), this.btnInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(796, 73, 17, 443),
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.right = 0,
        t.visible = !0,
        t.y = 52,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Group;
        return this.btnExchange = t,
        t.right = 60,
        t.y = 338,
        t.elementsContent = [this.exchange_bg_i(), this._Group1_i()],
        t
    },
    i.exchange_bg_i = function() {
        var t = new eui.Image;
        return this.exchange_bg = t,
        t.height = 50,
        t.source = "common_reward_btnRewardbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 11,
        t.elementsContent = [this.txtCoin_i(), this.coin_i()],
        t
    },
    i.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "300",
        t.textColor = 9261339,
        t.x = 40.8,
        t.y = 2,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 55,
        t.scaleX = .56,
        t.scaleY = .56,
        t.source = "peak_award_pet_coin_png",
        t.width = 55,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.left = 5,
        t.right = 5,
        t.visible = !0,
        t.y = 483,
        t.elementsContent = [this.bottom_bg_i(), this._scroller_i()],
        t
    },
    i.bottom_bg_i = function() {
        var t = new eui.Image;
        return this.bottom_bg = t,
        t.height = 106,
        t.scale9Grid = new egret.Rectangle(1, 3, 10, 8),
        t.source = "peak_award_pet_bottom_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 106,
        t.left = 22,
        t.right = 22,
        t.y = 0,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.height = 106,
        t.width = 896,
        t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.anchorOffsetX = 0,
        t.height = 106,
        t.width = 896,
        t.x = 0,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 14,
        t.verticalAlign = "middle",
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.right = 36,
        t.visible = !0,
        t.width = 159,
        t.y = 224,
        t.elementsContent = [this._Group4_i(), this._Group5_i(), this._Group6_i()],
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 47,
        t.width = 47,
        t.x = 56,
        t.y = 0,
        t.elementsContent = [this.iconAttr_i()],
        t
    },
    i.iconAttr_i = function() {
        var t = new eui.Image;
        return this.iconAttr = t,
        t.horizontalCenter = 0,
        t.scaleX = .86,
        t.scaleY = .86,
        t.source = "peak_war_award_icon_2_png",
        t.verticalCenter = 0,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 47,
        t.width = 47,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.iconSkill_i()],
        t
    },
    i.iconSkill_i = function() {
        var t = new eui.Image;
        return this.iconSkill = t,
        t.horizontalCenter = 0,
        t.scaleX = .86,
        t.scaleY = .86,
        t.source = "peak_war_award_icon_1_png",
        t.verticalCenter = 0,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 47,
        t.width = 47,
        t.x = 112,
        t.y = 0,
        t.elementsContent = [this.iconMark_i()],
        t
    },
    i.iconMark_i = function() {
        var t = new eui.Image;
        return this.iconMark = t,
        t.height = 55,
        t.horizontalCenter = 0,
        t.scaleX = .86,
        t.scaleY = .86,
        t.source = "peak_war_award_icon_0_png",
        t.verticalCenter = 0,
        t.width = 55,
        t.x = -56,
        t.y = 40,
        t
    },
    i.txtTips_i = function() {
        var t = new eui.Label;
        return this.txtTips = t,
        t.alpha = .8,
        t.right = 42,
        t.size = 18,
        t.text = "无敌猛将及以上段位解锁兑换",
        t.y = 420,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 91,
        t.source = "peak_award_pet_infobg_png",
        t.width = 91,
        t.x = 10,
        t.y = 392,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.source = "peak_award_pet_btnInfo_png",
        t.width = 74,
        t.x = 23,
        t.y = 399,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PeakWarAwardSkinSkin.exml"] = window.PeakWarAwardSkinSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "title", "exchange_bg", "txtCoin", "coin", "btnExchange", "bottom_bg", "_list", "_scroller", "iconAttr", "iconSkill", "iconMark"],
        this.height = 589,
        this.width = 1004,
        this.elementsContent = [this.bg_i(), this.title_i(), this.btnExchange_i(), this._Group3_i(), this._Group7_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.scale9Grid = new egret.Rectangle(824, 73, 17, 443),
        t.visible = !0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.right = 0,
        t.source = "peak_war_award_petskin_title_png",
        t.y = 52,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Group;
        return this.btnExchange = t,
        t.right = 60,
        t.y = 393,
        t.elementsContent = [this.exchange_bg_i(), this._Group1_i()],
        t
    },
    i.exchange_bg_i = function() {
        var t = new eui.Image;
        return this.exchange_bg = t,
        t.height = 50,
        t.source = "common_reward_btnRewardbg_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 11,
        t.elementsContent = [this.txtCoin_i(), this.coin_i()],
        t
    },
    i.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "300",
        t.textColor = 8341784,
        t.x = 40.8,
        t.y = 2,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 55,
        t.scaleX = .56,
        t.scaleY = .56,
        t.source = "peak_award_pet_coin_png",
        t.width = 55,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.left = 5,
        t.right = 5,
        t.y = 483,
        t.elementsContent = [this.bottom_bg_i(), this._scroller_i()],
        t
    },
    i.bottom_bg_i = function() {
        var t = new eui.Image;
        return this.bottom_bg = t,
        t.height = 106,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(1, 3, 10, 8),
        t.source = "peak_award_pet_bottom_bg_png",
        t.y = 0,
        t
    },
    i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 106,
        t.left = 22,
        t.right = 22,
        t.y = 0,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.height = 106,
        t.width = 896,
        t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.anchorOffsetX = 0,
        t.height = 106,
        t.width = 896,
        t.x = 0,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 14,
        t.verticalAlign = "middle",
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 678,
        t.y = 272,
        t.elementsContent = [this._Group4_i(), this._Group5_i(), this._Group6_i()],
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 80,
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.iconAttr_i()],
        t
    },
    i.iconAttr_i = function() {
        var t = new eui.Image;
        return this.iconAttr = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 80,
        t.width = 80,
        t.x = 96,
        t.y = 0,
        t.elementsContent = [this.iconSkill_i()],
        t
    },
    i.iconSkill_i = function() {
        var t = new eui.Image;
        return this.iconSkill = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 0,
        t.x = -56,
        t.y = 40,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 80,
        t.width = 80,
        t.x = 192,
        t.y = 0,
        t.elementsContent = [this.iconMark_i()],
        t
    },
    i.iconMark_i = function() {
        var t = new eui.Image;
        return this.iconMark = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = 0,
        t.x = -56,
        t.y = 40,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PeakWarAwardStoneSkin.exml"] = window.PeakWarAwardStoneSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scroller"],
        this.height = 550,
        this.width = 954,
        this.elementsContent = [this._scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 550,
        t.maxWidth = 1158,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 506,
        t.width = 840,
        t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 550,
        t.itemRendererSkinName = PeakWarAwardMarkItemSkin,
        t.width = 954,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.orientation = "rows",
        t.verticalGap = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/PeakWarAwardSuitSkin.exml"] = window.PeakWarAwardSuitSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scroller"],
        this.height = 530,
        this.width = 954,
        this.elementsContent = [this._scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 530,
        t.maxHeight = 1158,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 506,
        t.width = 840,
        t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 530,
        t.itemRendererSkinName = PeakWarAwardMarkItemSkin,
        t.width = 954,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 15,
        t.orientation = "rows",
        t.verticalGap = 14,
        t
    },
    e
} (eui.Skin);