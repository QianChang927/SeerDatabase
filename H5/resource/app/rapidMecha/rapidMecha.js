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
rapidMecha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.AttrConst.forever_pet_state], [t.AttrConst.daily_end_time, t.AttrConst.daily_gift_state, t.AttrConst.daily_boosB_times]),
            i.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.RapidMecha = e,
    __reflect(e.prototype, "rapidMecha.RapidMecha")
} (rapidMecha || (rapidMecha = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
rapidMecha; !
function(t) {
    var e = function() {
        function t() {}
        return t.forever_pet_state = 101215,
        t.daily_gift_state = 201342,
        t.daily_end_time = 201343,
        t.daily_boosB_times = 201344,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "rapidMecha.AttrConst")
} (rapidMecha || (rapidMecha = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
rapidMecha; !
function(t) {
    var e = function() {
        function t() {}
        return t.rapidMechaCMD = 42340,
        t
    } ();
    t.CMDConst = e,
    __reflect(e.prototype, "rapidMecha.CMDConst")
} (rapidMecha || (rapidMecha = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
rapidMecha; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "rapidMecha.MainPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "rapidMecha.ModuleConst")
} (rapidMecha || (rapidMecha = {}));
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
rapidMecha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.itemId1 = 1713284,
            i.itemId2 = 1713285,
            i.skinName = t.MainPanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initOldPveBtnClose(88, this, "rm_main_panel_topbg_png",
            function() {
                t.service.closeModule()
            },
            this),
            this.service.registerItemUpdateForText(this.itemId1, this.itemNumText1, this),
            this.service.registerItemUpdateForText(this.itemId2, this.itemNumText2, this),
            this.checkState()
        },
        i.prototype.checkState = function() {
            var e = this.service.getValue(t.AttrConst.daily_end_time),
            i = SystemTimerManager.sysBJDate.getTime() / 1e3;
            0 == e ? this.btnMake.currentState = "noFight": 1800 > e - i && e - i > 0 ? this.btnMake.currentState = "fighting": i > e && (this.btnMake.currentState = "finished")
        },
        i.prototype.winFunc = function() {
            var t = this;
            FightManager.isWin && ("noFight" == this.btnMake.currentState && (this.btnMake.currentState = "fighting", this.btnMake.touchEnabled = !1), this.service.updateValues().then(function() {
                t.update()
            }))
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.winFunc, this),
            ImageButtonUtil.add(this.btnAddItem1,
            function() {
                BuyProductManager.buyProduct("250543_10209",
                function() {
                    e.update()
                },
                e, 1713284)
            },
            this),
            ImageButtonUtil.add(this.btnAddItem2,
            function() {
                BuyProductManager.buyProduct("250544_10210",
                function() {
                    e.update()
                },
                e, 1713285)
            },
            this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                BuyProductManager.buyProductBySocket(259878,
                function() {
                    SocketConnection.sendByQueue(42340, [18, 1],
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFast1,
            function() {
                e.service.updateValues().then(function() {
                    var i = e.service.getValue(t.AttrConst.daily_end_time);
                    SystemTimerManager.sysBJDate.getTime();
                    return i > 0 ? void Alarm.show("你已经开始铸造了哦！") : void BuyProductManager.buyProductBySocket(259849,
                    function() {
                        SocketConnection.sendByQueue(42340, [17, 1],
                        function() {
                            "noFight" == e.btnMake.currentState && (e.btnMake.currentState = "fighting", e.btnMake.touchEnabled = !1),
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    },
                    e)
                })
            },
            this),
            ImageButtonUtil.add(this.btnFast2,
            function() {
                var i = e.service.getValue(t.AttrConst.daily_end_time),
                n = SystemTimerManager.sysBJDate.getTime();
                return 0 == i ? void Alarm.show("请先开始铸造哦！") : n > 1e3 * i ? void Alarm.show("你已经完成铸造了") : void BuyProductManager.buyProductBySocket(259850,
                function() {
                    SocketConnection.sendByQueue(42340, [17, 2],
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3381)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(88)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnMake, this.make, this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                var i = new t.UpgradePop(e.service);
                e.service.openPop(i)
            },
            this),
            ImageButtonUtil.add(this.btnBuyGet,
            function() {
                BuyProductManager.buyProductBySocket(250542,
                function() {
                    SocketConnection.sendByQueue(42340, [9, 1],
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnMakeFast,
            function() {
                var i = e.service.getValue(t.AttrConst.daily_end_time),
                n = SystemTimerManager.sysBJDate.getTime();
                return 0 == i ? void Alarm.show("请先开始铸造哦！") : n > 1e3 * i ? void Alarm.show("你已经完成铸造了") : void FightManager.fightNoMapBoss(18317)
            },
            this)
        },
        i.prototype.make = function() {
            var e = this;
            switch (this.btnMake.currentState) {
            case "noFight":
                FightManager.fightNoMapBoss(18316);
                break;
            case "finished":
                var i = this.service.getValue(t.AttrConst.daily_gift_state);
                if (i) return void BubblerManager.getInstance().showText("您今天已经领取过奖励");
                SocketConnection.sendByQueue(t.CMDConst.rapidMechaCMD, [16, 0],
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            }
        },
        i.prototype.update = function() {
            var e = this,
            i = this.service.getValue(t.AttrConst.daily_boosB_times),
            n = this.service.getValue(t.AttrConst.daily_gift_state),
            a = this.service.getValue(t.AttrConst.daily_end_time),
            r = this.service.getValue(t.AttrConst.forever_pet_state),
            s = 1 == n ? 0 : 1;
            this.checkState(),
            DisplayUtil.setEnabled(this.btnFast1, !0, !1),
            DisplayUtil.setEnabled(this.btnFast2, !0, !1),
            "fighting" == this.btnMake.currentState ? (ImageButtonUtil.remove(this.btnMake), DisplayUtil.setEnabled(this.btnFast1, !1, !0)) : "finished" == this.btnMake.currentState && (ImageButtonUtil.add(this.btnMake, this.make, this), DisplayUtil.setEnabled(this.btnFast1, !1, !0)),
            this.service.unregisterClock(this.btnMake.timeText),
            this.service.registerClock(a,
            function() {
                e.update()
            },
            this, this.btnMake.timeText),
            this.timesText.text = "" + s,
            this._left.text = "还需" + (5 - i) + "次挑战才可获得极速圣芯",
            this.btnFast1.visible = this.btnFast2.visible = 0 == n,
            this._left.visible = "fighting" == this.btnMake.currentState && 5 > i,
            DisplayUtil.setEnabled(this.btnMakeFast, 1 != n, 1 == n),
            DisplayUtil.setEnabled(this.btnMake, 1 != n, 1 == n),
            DisplayUtil.setEnabled(this.btnAddTimes, 0 != n, 0 == n),
            1 == n && (DisplayUtil.setEnabled(this.btnFast1, !1, !0), DisplayUtil.setEnabled(this.btnFast2, !1, !0)),
            KTool.getBit(r, 1) > 0 && DisplayUtil.setEnabled(this.btnBuyGet, !1, !0),
            15 == r && (DisplayUtil.setEnabled(this.btnMakeFast, !1, !0), DisplayUtil.setEnabled(this.btnMake, !1, !0), DisplayUtil.setEnabled(this.btnAddTimes, !1, !0), DisplayUtil.setEnabled(this.btnFast1, !1, !0), DisplayUtil.setEnabled(this.btnFast2, !1, !0))
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            e.prototype.destroy.call(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.winFunc, this)
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "rapidMecha.MainPanel")
} (rapidMecha || (rapidMecha = {}));
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
rapidMecha; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.markId = 40954,
            n.skillId = 30809,
            n.itemId1 = 1713284,
            n.itemId2 = 1713285,
            n.skinName = t.UpgradePopSkin,
            n.service = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvents(),
            this.update()
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnBuy0,
            function() {
                BuyProductManager.buyProductBySocket(250546,
                function() {
                    SocketConnection.sendByQueue(42340, [9, 2],
                    function() {
                        t.service.updateValues().then(function() {
                            t.hide()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnBuy1,
            function() {
                t.buy(1)
            },
            this),
            ImageButtonUtil.add(this.btnBuy2,
            function() {
                t.buy(2)
            },
            this),
            ImageButtonUtil.add(this.btnBuy3,
            function() {
                t.buy(3)
            },
            this),
            ImageButtonUtil.add(this.icon1,
            function() {
                t.service.showMarkInfo(t.markId)
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                t.service.showPetEff(3381)
            },
            this),
            ImageButtonUtil.add(this.icon3,
            function() {
                t.service.showSkillInfo(t.skillId)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this);
            for (var e = 0; 4 > e; e++) this["btnDui" + e].index = e,
            ImageButtonUtil.add(this["btnDui" + e], this.exchange, this)
        },
        i.prototype.buy = function(t) {
            var e = this;
            PetManager.isDefaultPet(3381) || 0 == t ? BuyProductManager.buyProductBySocket(250547 + t - 1,
            function() {
                SocketConnection.sendByQueue(42340, [10, t],
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this) : BubblerManager.getInstance().showText("请先将极速机甲设为首发精灵！")
        },
        i.prototype.exchange = function(e) {
            var i = this,
            n = e.currentTarget.index,
            a = (this.service.getValue(t.AttrConst.forever_pet_state), [40, 20, 30, 40, 4, 2, 3, 3]);
            if (PetManager.isDefaultPet(3381) || 0 == n) {
                var r = ItemManager.getNumByID(this.itemId1),
                s = ItemManager.getNumByID(this.itemId2);
                if (r >= a[n] && s >= a[n + 4]) {
                    var u = 0 == n ? 9 : 11,
                    o = 0 == n ? 3 : n;
                    SocketConnection.sendByQueue(t.CMDConst.rapidMechaCMD, [u, o],
                    function() {
                        i.service.updateValues().then(function() {
                            switch (n) {
                            case 2:
                                BubblerManager.getInstance().showText("您已成功兑换专属特性！");
                                break;
                            case 3:
                                BubblerManager.getInstance().showText("您已成功兑换第五技能！")
                            }
                            0 == n ? i.hide() : i.update()
                        })
                    })
                } else BubblerManager.getInstance().showText("您的物品数量不足，请先获得足够数量再来兑换！")
            } else BubblerManager.getInstance().showText("请先将极速机甲设为首发精灵！")
        },
        i.prototype.update = function() {
            for (var e = this.service.getValue(t.AttrConst.forever_pet_state), i = 0; 4 > i; i++) {
                var n = !!KTool.getBit(e, i + 1);
                this["tagGot" + i].visible = n,
                DisplayUtil.setEnabled(this["btnBuy" + i], !n, n),
                DisplayUtil.setEnabled(this["btnDui" + i], !n, n)
            }
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.UpgradePop = e,
    __reflect(e.prototype, "rapidMecha.UpgradePop")
} (rapidMecha || (rapidMecha = {})),
window.rapidMecha = window.rapidMecha || {};
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
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.rapidMecha.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnBack", "btnHelp", "_left", "btnMake", "btnFast1", "btnMakeFast", "btnFast2", "btnAddTimes", "timesText", "Right", "btnPet", "btnCure", "btnGet", "btnBuyGet", "btnInfo", "itemNumText2", "btnAddItem2", "itemNumText1", "btnAddItem1", "righttop"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Group2_i(), this.btnGet_i(), this.btnBuyGet_i(), this.btnInfo_i(), this.righttop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["btnMake", "btnFinished", "btnFinished0", "timeText"],
            this.elementsContent = [],
            this.btnMake_i(),
            this.btnFinished_i(),
            this.btnFinished0_i(),
            this.timeText_i(),
            this.states = [new eui.State("noFight", [new eui.AddItems("btnMake", "", 0, ""), new eui.SetProperty("btnMake", "visible", !0), new eui.SetProperty("timeText", "visible", !0)]), new eui.State("fighting", [new eui.AddItems("btnFinished0", "", 1, ""), new eui.AddItems("timeText", "", 1, ""), new eui.SetProperty("btnMake", "visible", !0), new eui.SetProperty("btnFinished", "visible", !0), new eui.SetProperty("btnFinished0", "visible", !0), new eui.SetProperty("timeText", "visible", !0)]), new eui.State("finished", [new eui.AddItems("btnFinished", "", 1, ""), new eui.SetProperty("btnMake", "visible", !0), new eui.SetProperty("btnFinished", "visible", !0), new eui.SetProperty("timeText", "visible", !0)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.btnMake_i = function() {
            var t = new eui.Image;
            return this.btnMake = t,
            t.source = "rm_main_panel_btnstartbeat2_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        i.btnFinished_i = function() {
            var t = new eui.Image;
            return this.btnFinished = t,
            t.source = "rm_main_panel_btnstartbeat5_png",
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        i.btnFinished0_i = function() {
            var t = new eui.Image;
            return this.btnFinished0 = t,
            t.source = "rm_main_panel_btnstartbeat4_png",
            t.touchEnabled = !1,
            t.visible = !0,
            t.x = 0,
            t.y = 0,
            t
        },
        i.timeText_i = function() {
            var t = new eui.Label;
            return this.timeText = t,
            t.fontFamily = "MFShangHei",
            t.size = 30,
            t.text = "00:00",
            t.textColor = 16777215,
            t.x = 48,
            t.y = 70,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.horizontalCenter = 0,
        t.source = "rm_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.y = 0,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "rm_main_panel_pet_png",
        t.visible = !0,
        t.x = 0,
        t.y = 31,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.btnBack_i(), this.btnHelp_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "rm_main_panel_topbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.source = "rm_main_panel_btnback_png",
        t.x = 18,
        t.y = 10,
        t
    },
    n.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "rm_main_panel_btnhelp_png",
        t.x = 229,
        t.y = 12,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.visible = !0,
        t.y = 16,
        t.elementsContent = [this._Image4_i(), this._left_i(), this.btnMake_i(), this.btnFast1_i(), this.btnMakeFast_i(), this.btnFast2_i(), this.Right_i(), this.btnPet_i(), this.btnCure_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "rm_main_panel_img_rdi_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._left_i = function() {
        var t = new eui.Label;
        return this._left = t,
        t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "还需N次挑战才可获得极速圣芯",
        t.textColor = 8243186,
        t.x = 260,
        t.y = 105,
        t
    },
    n.btnMake_i = function() {
        var t = new eui.Component;
        return this.btnMake = t,
        t.height = 164,
        t.visible = !0,
        t.width = 162,
        t.x = 327,
        t.y = 345,
        t.skinName = i,
        t
    },
    n.btnFast1_i = function() {
        var t = new eui.Image;
        return this.btnFast1 = t,
        t.source = "rm_main_panel_btnfastbeat1_png",
        t.visible = !0,
        t.x = 453,
        t.y = 328,
        t
    },
    n.btnMakeFast_i = function() {
        var t = new eui.Image;
        return this.btnMakeFast = t,
        t.source = "rm_main_panel_btnstartbeat1_png",
        t.visible = !0,
        t.x = 327,
        t.y = 129,
        t
    },
    n.btnFast2_i = function() {
        var t = new eui.Image;
        return this.btnFast2 = t,
        t.source = "rm_main_panel_btnfastbeat1_png",
        t.visible = !0,
        t.x = 453,
        t.y = 112,
        t
    },
    n.Right_i = function() {
        var t = new eui.Group;
        return this.Right = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 234,
        t.y = 539.9999999999999,
        t.elementsContent = [this._Image5_i(), this.btnAddTimes_i(), this._Label1_i(), this.timesText_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "rm_main_panel_numbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnAddTimes_i = function() {
        var t = new eui.Image;
        return this.btnAddTimes = t,
        t.source = "rm_main_panel_add_y_png",
        t.x = 239,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "今日剩余铸造次数：",
        t.textColor = 16777215,
        t.x = 17,
        t.y = 7,
        t
    },
    n.timesText_i = function() {
        var t = new eui.Label;
        return this.timesText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "10/10",
        t.textColor = 16777215,
        t.x = 173,
        t.y = 7,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "rm_main_panel_btnpet_png",
        t.x = 82,
        t.y = 525.0000000000001,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "rm_main_panel_btncure_png",
        t.x = 152,
        t.y = 525.0000000000001,
        t
    },
    n.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "rm_main_panel_btnget_png",
        t.x = 325,
        t.y = 525,
        t
    },
    n.btnBuyGet_i = function() {
        var t = new eui.Image;
        return this.btnBuyGet = t,
        t.source = "rm_main_panel_btnbuyget_png",
        t.x = 99,
        t.y = 525,
        t
    },
    n.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "rm_main_panel_btninfo_png",
        t.x = 26,
        t.y = 532,
        t
    },
    n.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.right = 34,
        t.y = 11,
        t.elementsContent = [this._Group3_i(), this._Group4_i()],
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 214,
        t.y = 1,
        t.elementsContent = [this._Image6_i(), this.itemNumText2_i(), this._Label2_i(), this.btnAddItem2_i(), this._Image7_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "rm_main_panel_img_di2_png",
        t.x = 0,
        t.y = 2,
        t
    },
    n.itemNumText2_i = function() {
        var t = new eui.Label;
        return this.itemNumText2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "00",
        t.textColor = 8243186,
        t.x = 131,
        t.y = 3,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0101510119681,
        t.text = "极速圣芯：",
        t.textColor = 8177906,
        t.x = 46,
        t.y = 3,
        t
    },
    n.btnAddItem2_i = function() {
        var t = new eui.Image;
        return this.btnAddItem2 = t,
        t.height = 20,
        t.source = "rm_main_panel_add_y_png",
        t.width = 20,
        t.x = 170,
        t.y = 3,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "rm_main_panel_img_2_png",
        t.x = 10,
        t.y = 0,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.itemNumText1_i(), this._Label3_i(), this.btnAddItem1_i(), this._Image9_i()],
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "rm_main_panel_img_di2_png",
        t.x = 0,
        t.y = 3,
        t
    },
    n.itemNumText1_i = function() {
        var t = new eui.Label;
        return this.itemNumText1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0175207439479,
        t.text = "00",
        t.textColor = 8243186,
        t.x = 131,
        t.y = 4,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0175207439478,
        t.text = "机械芯片：",
        t.textColor = 8243186,
        t.x = 45,
        t.y = 4,
        t
    },
    n.btnAddItem1_i = function() {
        var t = new eui.Image;
        return this.btnAddItem1 = t,
        t.height = 20,
        t.source = "rm_main_panel_add_y_png",
        t.width = 20,
        t.x = 170,
        t.y = 4,
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "rm_main_panel_img_1_png",
        t.x = 10,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/UpgradePopSkin.exml"] = window.rapidMecha.UpgradePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "icon1", "btnBuy1", "btnDui1", "tagGot1", "r1", "btnBuy2", "btnDui2", "tagGot2", "icon2", "r2", "btnBuy3", "btnDui3", "icon3", "tagGot3", "r3", "btnBuy0", "btnDui0", "tagGot0"],
        this.height = 552,
        this.width = 950,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Image4_i(), this.r1_i(), this.r2_i(), this.r3_i(), this.btnBuy0_i(), this.btnDui0_i(), this.tagGot0_i(), this._Label4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(33, 184, 34, 184),
        t.source = "rm_upgrade_pop_bg1_png",
        t.width = 950,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "rm_upgrade_pop_countbg_png",
        t.x = 38,
        t.y = 403,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "rm_upgrade_pop_pet_png",
        t.x = 35,
        t.y = 54,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "rm_upgrade_pop_btnclose_png",
        t.x = 893,
        t.y = 11,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "rm_upgrade_pop_txt_4_png",
        t.x = 424,
        t.y = 21,
        t
    },
    i.r1_i = function() {
        var t = new eui.Group;
        return this.r1 = t,
        t.x = 513,
        t.y = 54,
        t.elementsContent = [this._Image5_i(), this._Label1_i(), this._Image6_i(), this.icon1_i(), this.btnBuy1_i(), this.btnDui1_i(), this.tagGot1_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "rm_upgrade_pop_wupinbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "机甲芯片*20\n极速圣芯*2",
        t.textColor = 14349311,
        t.width = 107,
        t.x = 68,
        t.y = 108,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "rm_upgrade_pop_txt_1_png",
        t.x = 14,
        t.y = 19,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.source = "rm_upgrade_pop_img_1_png",
        t.x = 91,
        t.y = 27,
        t
    },
    i.btnBuy1_i = function() {
        var t = new eui.Image;
        return this.btnBuy1 = t,
        t.height = 45,
        t.source = "rm_upgrade_pop_btnbuy_png",
        t.visible = !0,
        t.width = 144,
        t.x = 216,
        t.y = 29,
        t
    },
    i.btnDui1_i = function() {
        var t = new eui.Image;
        return this.btnDui1 = t,
        t.height = 45,
        t.source = "rm_upgrade_pop_btnbuy2_png",
        t.width = 144,
        t.x = 216,
        t.y = 82,
        t
    },
    i.tagGot1_i = function() {
        var t = new eui.Image;
        return this.tagGot1 = t,
        t.source = "rm_upgrade_pop_taggot_png",
        t.visible = !0,
        t.x = 212,
        t.y = 30,
        t
    },
    i.r2_i = function() {
        var t = new eui.Group;
        return this.r2 = t,
        t.x = 513,
        t.y = 215,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this.btnBuy2_i(), this.btnDui2_i(), this.tagGot2_i(), this.icon2_i(), this._Label2_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "rm_upgrade_pop_wupinbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "rm_upgrade_pop_txt_2_png",
        t.x = 15,
        t.y = 18,
        t
    },
    i.btnBuy2_i = function() {
        var t = new eui.Image;
        return this.btnBuy2 = t,
        t.height = 45,
        t.source = "rm_upgrade_pop_btnbuy_png",
        t.width = 144,
        t.x = 216,
        t.y = 30,
        t
    },
    i.btnDui2_i = function() {
        var t = new eui.Image;
        return this.btnDui2 = t,
        t.height = 45,
        t.source = "rm_upgrade_pop_btnbuy2_png",
        t.width = 144,
        t.x = 216,
        t.y = 82,
        t
    },
    i.tagGot2_i = function() {
        var t = new eui.Image;
        return this.tagGot2 = t,
        t.source = "rm_upgrade_pop_taggot_png",
        t.x = 212,
        t.y = 30,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.source = "rm_upgrade_pop_icon_texing_kb_png",
        t.x = 98,
        t.y = 30,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "机甲芯片*30\n极速圣芯*3",
        t.textColor = 14414847,
        t.width = 107,
        t.x = 68,
        t.y = 109,
        t
    },
    i.r3_i = function() {
        var t = new eui.Group;
        return this.r3 = t,
        t.x = 513,
        t.y = 376,
        t.elementsContent = [this._Image9_i(), this._Image10_i(), this.btnBuy3_i(), this.btnDui3_i(), this.icon3_i(), this.tagGot3_i(), this._Label3_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "rm_upgrade_pop_wupinbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "rm_upgrade_pop_txt_3_png",
        t.x = 16,
        t.y = 21,
        t
    },
    i.btnBuy3_i = function() {
        var t = new eui.Image;
        return this.btnBuy3 = t,
        t.height = 45,
        t.source = "rm_upgrade_pop_btnbuy_png",
        t.visible = !0,
        t.width = 144,
        t.x = 216,
        t.y = 30,
        t
    },
    i.btnDui3_i = function() {
        var t = new eui.Image;
        return this.btnDui3 = t,
        t.height = 45,
        t.source = "rm_upgrade_pop_btnbuy2_png",
        t.visible = !0,
        t.width = 144,
        t.x = 216,
        t.y = 82,
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.source = "rm_upgrade_pop_icon_1_png",
        t.visible = !0,
        t.x = 101,
        t.y = 39,
        t
    },
    i.tagGot3_i = function() {
        var t = new eui.Image;
        return this.tagGot3 = t,
        t.source = "rm_upgrade_pop_taggot_png",
        t.x = 212,
        t.y = 30,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "机甲芯片*40\n极速圣芯*3",
        t.textColor = 14414847,
        t.width = 107,
        t.x = 68,
        t.y = 110,
        t
    },
    i.btnBuy0_i = function() {
        var t = new eui.Image;
        return this.btnBuy0 = t,
        t.source = "rm_upgrade_pop_btnbuy_png",
        t.x = 50,
        t.y = 467,
        t
    },
    i.btnDui0_i = function() {
        var t = new eui.Image;
        return this.btnDui0 = t,
        t.source = "rm_upgrade_pop_btnbuy2_png",
        t.x = 280,
        t.y = 467,
        t
    },
    i.tagGot0_i = function() {
        var t = new eui.Image;
        return this.tagGot0 = t,
        t.height = 120,
        t.source = "rm_upgrade_pop_taggot_png",
        t.visible = !0,
        t.width = 200,
        t.x = 178,
        t.y = 181,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "需要：机甲芯片*40+极速圣芯*4",
        t.textColor = 14414847,
        t.x = 70,
        t.y = 421,
        t
    },
    e
} (eui.Skin);