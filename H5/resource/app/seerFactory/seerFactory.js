var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
seerFactory; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "seerFactory.MainPanel",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "seerFactory.PanelConst");
    var i = function() {
        function t() {}
        return t.AFTER_BUY = "seerFactory.AfterBuy",
        t
    } ();
    t.EventConst = i,
    __reflect(i.prototype, "seerFactory.EventConst")
} (seerFactory || (seerFactory = {}));
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
seerFactory; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "SeerFactoryMainPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent(),
            this.resize()
        },
        i.prototype.init = function() {
            this.list.itemRenderer = t.SuitItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection,
            this.arrData = [null, [], []];
            for (var e = config.SeerFactory.getItems(), i = 0, n = e; i < n.length; i++) {
                var r = n[i];
                r.vipOnly ? this.arrData[2].push(r) : this.arrData[1].push(r)
            }
            this.rb1.selected = !0,
            this.setIndex(1)
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.rb1.group.addEventListener(egret.Event.CHANGE, this.onSetIndex, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.closeModule()
            },
            this),
            EventManager.addEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this.onSetIndex, this),
            this.txtItem.text = ItemManager.getNumByID(1) + "",
            EventManager.addEventListener(RobotEvent.SEERDOU_CHANGE_EVENT,
            function() {
                t.txtItem.text = ItemManager.getNumByID(1) + ""
            },
            this)
        },
        i.prototype.destroy = function() {
            this.rb1.group.removeEventListener(egret.Event.CHANGE, this.onSetIndex, this),
            e.prototype.destroy.call(this)
        },
        i.prototype.onSetIndex = function() {
            var t = +this.rb1.group.selectedValue;
            this.setIndex(t)
        },
        i.prototype.setIndex = function(t) {
            this.scroller.stopAnimation(),
            this.arrData[t].forEach(function(t) {
                for (var e = t.suitPartID.split("|"), i = !0, n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    if (0 == ItemManager.getNumByID( + o)) {
                        i = !1;
                        break
                    }
                }
                t.hasBuy = i
            }),
            this.arrData[t].sort(function(t, e) {
                return + t.hasBuy - +e.hasBuy
            }),
            this.arrayCollection.source = this.arrData[t]
        },
        i.prototype.resize = function() {
            this.list.layout.horizontalGap = (this.scroller.width - 870) / 3
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "seerFactory.MainPanel")
} (seerFactory || (seerFactory = {}));
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
seerFactory; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.init([{
                panelName: t.PanelConst.MAIN_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.SeerFactory = e,
    __reflect(e.prototype, "seerFactory.SeerFactory")
} (seerFactory || (seerFactory = {}));
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
seerFactory; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "SeerFactorySuitItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.imgSuit,
            function() {
                tipsPop.TipsPop.openSuitPop({
                    id: t.data.suitID
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                if (!t.data.hasBuy) {
                    if (t.data.vipOnly && !MainManager.actorInfo.isVip) return void(GameInfo.isChecking ? Alarm.show("你还不是VIP用户！") : Alert.show(TextFormatUtil.getRedTxt(SuitXMLInfo.getName(t.data.suitID)) + "是VIP专属，不是VIP不能购买是否现在开启VIP？",
                    function() {
                        VipController.openVip()
                    }));
                    t.data.cointype = 1,
                    t.data.coinid = 1,
                    t.data.coins = 2,
                    t.data.price = t.data.suitPrice;
                    var e = {};
                    e.ins = t.data,
                    e.caller = t,
                    e.callBack = function(e, i) {
                        if (MainManager.actorInfo.coins >= t.data.suitPrice) {
                            var n = t.data.suitPartID.split("|");
                            n = n.filter(function(t) {
                                return 0 == ItemManager.getNumByID( + t)
                            });
                            for (var r = 0,
                            o = n; r < o.length; r++) {
                                var a = o[r];
                                SocketConnection.send(CommandID.ITEM_BUY, +a, 1)
                            }
                        } else BubblerManager.getInstance().showText("赛尔豆不够，无法购买！")
                    },
                    ModuleManager.showModuleByID(1, e)
                }
            },
            this, !1)
        },
        e.prototype.dataChanged = function() {
            var t = this;
            this.cacheAsBitmap = !0;
            var e = this.data;
            this.txtName.text = SuitXMLInfo.getName(e.suitID),
            this.data.hasBuy ? (this.txtPrice.text = "已拥有", this.imgCoin.width = 0, DisplayUtil.setEnabled(this.btnBuy, !1, !0)) : (this.txtPrice.text = e.suitPrice ? e.suitPrice + "": "免费", this.imgCoin.width = 28, DisplayUtil.setEnabled(this.btnBuy, !0, !1)),
            RES.getResByUrl(ClientConfig.getSuitBodyPng(e.suitID),
            function(e) {
                t.imgSuit.source = e,
                DisplayUtil.equalScale(t.imgSuit, 180, 180)
            },
            this)
        },
        e
    } (BaseItemRenderer);
    t.SuitItem = e,
    __reflect(e.prototype, "seerFactory.SuitItem")
} (seerFactory || (seerFactory = {}));
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
generateEUI.paths["resource/eui_skins/SeerFactoryMainPanelSkin.exml"] = window.SeerFactoryMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "rb1", "rb2", "imgItemBG", "imgItem", "txtItem", "list", "scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.rb1_i(), this.rb2_i(), this._Group1_i(), this.scroller_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 60,
            this.width = 156,
            this.elementsContent = [this._Image1_i(), this._Group1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", -6), new eui.SetProperty("_Image1", "verticalCenter", -1)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "seer_factory_main_panel_imgbtn1down_png"), new eui.SetProperty("_Image1", "left", 0), new eui.SetProperty("_Image1", "right", 0), new eui.SetProperty("_Image1", "top", 0), new eui.SetProperty("_Image1", "bottom", 0)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 24,
            t.source = "seer_factory_main_panel_imgbtn1up_png",
            t.width = 113,
            t
        },
        i._Group1_i = function() {
            var t = new eui.Group;
            return t.bottom = 0,
            t.left = 0,
            t.right = 0,
            t.top = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 60,
            this.width = 156,
            this.elementsContent = [this._Image1_i(), this._Group1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", -11), new eui.SetProperty("_Image1", "verticalCenter", -2)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "seer_factory_main_panel_imgbtn2down_png"), new eui.SetProperty("_Image1", "left", 0), new eui.SetProperty("_Image1", "right", 0), new eui.SetProperty("_Image1", "top", 0), new eui.SetProperty("_Image1", "bottom", 0)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 25,
            t.source = "seer_factory_main_panel_imgbtn2up_png",
            t.width = 98,
            t
        },
        i._Group1_i = function() {
            var t = new eui.Group;
            return t.bottom = 0,
            t.left = 0,
            t.right = 0,
            t.top = 0,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_3_jpg",
        t.top = 0,
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 595,
        t.source = "adapt_leftbg_png",
        t.width = 155,
        t.x = 0,
        t.y = 45,
        t
    },
    r.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "seer_factory_main_panel_btnclose_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.rb1_i = function() {
        var t = new eui.RadioButton;
        return this.rb1 = t,
        t.groupName = "seerF",
        t.value = "1",
        t.y = 64,
        t.skinName = i,
        t
    },
    r.rb2_i = function() {
        var t = new eui.RadioButton;
        return this.rb2 = t,
        t.groupName = "seerF",
        t.value = "2",
        t.y = 124,
        t.skinName = n,
        t
    },
    r._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 32,
        t.y = 12,
        t.elementsContent = [this.imgItemBG_i(), this.imgItem_i(), this.txtItem_i()],
        t
    },
    r.imgItemBG_i = function() {
        var t = new eui.Image;
        return this.imgItemBG = t,
        t.source = "seer_factory_main_panel_imgitembg_png",
        t.x = 30,
        t.y = 3,
        t
    },
    r.imgItem_i = function() {
        var t = new eui.Image;
        return this.imgItem = t,
        t.source = "seer_factory_main_panel_imgitem_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.txtItem_i = function() {
        var t = new eui.Label;
        return this.txtItem = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 12834813,
        t.x = 68,
        t.y = 5,
        t
    },
    r.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 542,
        t.left = 173,
        t.right = 47,
        t.y = 67,
        t.viewport = this.list_i(),
        t
    },
    r.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.width = 916,
        t.x = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.requestedColumnCount = 4,
        t.verticalGap = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SeerFactorySuitItemSkin.exml"] = window.SeerFactorySuitItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgSuit", "txtName", "imgCoin", "txtPrice", "btnBuy"],
        this.height = 258,
        this.width = 217,
        this.elementsContent = [this._Image1_i(), this.imgSuit_i(), this.txtName_i(), this.btnBuy_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "seer_factory_suit_item_imgbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgSuit_i = function() {
        var t = new eui.Image;
        return this.imgSuit = t,
        t.bottom = 68,
        t.height = 180,
        t.horizontalCenter = 0,
        t.width = 180,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 9025023,
        t.y = 205,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 1,
        t.y = 223,
        t.elementsContent = [this._Image2_i(), this._Group1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "seer_factory_suit_item_imgbtn_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 7,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.imgCoin_i(), this.txtPrice_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 4,
        t
    },
    i.imgCoin_i = function() {
        var t = new eui.Image;
        return this.imgCoin = t,
        t.height = 18,
        t.source = "seer_factory_main_panel_imgitem_png",
        t.width = 28,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 10180889,
        t.x = 32,
        t.y = 1,
        t
    },
    e
} (eui.Skin);