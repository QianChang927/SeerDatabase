var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, i) {
    function n() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    n.prototype = i.prototype,
    t.prototype = new n
},
mingYi; !
function(t) {
    var i = function(i) {
        function n() {
            var t = i.call(this) || this;
            return t.skinName = MingyiAssistSkin,
            t
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(58, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.addEvent(),
            this.setDifficulty(1)
        },
        n.prototype.addEvent = function() {
            var i = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                i.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(58)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(254820 + i.numDifficulty, 1,
                function() {
                    SocketConnection.sendWithPromise(45746, [14, i.numDifficulty]).then(function() {
                        i.updateValues()
                    })
                }) : Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnEasy,
            function() {
                i.setDifficulty(1)
            },
            this),
            ImageButtonUtil.add(this.BtnMiddle,
            function() {
                i.setDifficulty(2)
            },
            this),
            ImageButtonUtil.add(this.btnHard,
            function() {
                i.setDifficulty(3)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                i.numPower < 2 ? BubblerManager.getInstance().showText("你的圣光能量不足！") : FightManager.fightNoMapBoss("", 14552 + i.numDifficulty)
            },
            this),
            ImageButtonUtil.add(this.btnDailyBonus,
            function() {
                i.numWinTime < 6 ? BubblerManager.getInstance().showText("今日战胜次数不足！") : SocketConnection.sendByQueue(t.CMDConst.CMD, [14, 4],
                function() {
                    i.updateValues()
                })
            },
            this),
            ImageButtonUtil.add(this.btnSupply,
            function() {
                i.service.openPanel(t.ModuleConst.HOLY_LIGHT_SUPPLY_PANEL, "1")
            },
            this)
        },
        n.prototype.setDifficulty = function(t) {
            this.numDifficulty = t,
            this.imgEasy.visible = 1 == t,
            this.imgMiddle.visible = 2 == t,
            this.imgHard.visible = 3 == t
        },
        n.prototype.setPower = function(t, i) {
            if (0 == i) {
                this.jinDu1.visible = !0,
                this.jinDu2.visible = !1,
                this.jinDu1.value = t / 6 * 100;
                for (var n = 1; 7 >= n; n++) this["point" + (n + 7)].visible = !1,
                this["point" + n].visible = t + 1 >= n
            } else {
                this.jinDu1.visible = !1,
                this.jinDu2.visible = !0,
                this.jinDu2.value = i / 6 * 100;
                for (var n = 1; 7 >= n; n++) this["point" + n].visible = !1,
                this["point" + (n + 7)].visible = i + 1 >= n
            }
        },
        n.prototype.beforeUpdate = function() {
            return this.jinDu1.value = 0,
            this.jinDu2.value = 0,
            Promise.resolve()
        },
        n.prototype.update = function() {
            var i = this;
            this.numWinTime = this.service.getValue(t.AttrConst.daily_level1WinTime),
            this.txtWinTime.text = this.numWinTime + "";
            var n = SystemTimerManager.sysBJDate.getTime() / 1e3 - this.service.getValue(t.AttrConst.forever_freeHolyPower);
            n = Math.floor(n / 3600),
            n = n > 6 ? 6 : n;
            var e = this.service.getValue(t.AttrConst.forever_moreHolyPower);
            this.numPower = e + n,
            this.setPower(n, e);
            var s = this.service.getValue(t.AttrConst.forever_level1SumHurt);
            this.txtSumHurt.text = s + "/200000";
            var o = 1 == this.service.getValue(t.AttrConst.daily_bitbuff_hasGetMoreHurt);
            DisplayUtil.setEnabled(this.btnDailyBonus, !o, o),
            s >= 2e5 && Alarm.show("已完成圣光之助。",
            function() {
                i.service.backToMainPanel()
            })
        },
        n
    } (BasicPanel);
    t.HolyLightAssistPanel = i,
    __reflect(i.prototype, "mingYi.HolyLightAssistPanel")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, i) {
    function n() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    n.prototype = i.prototype,
    t.prototype = new n
},
mingYi; !
function(t) {
    var i = function(i) {
        function n() {
            var n = i.call(this) || this;
            return n.service.setValues([t.AttrConst.forever_freeHolyPower, t.AttrConst.forever_getState, t.AttrConst.forever_level1SumHurt, t.AttrConst.forever_level2Comprehension, t.AttrConst.forever_level2LeftBossIndex, t.AttrConst.forever_level2RateOfSuccess, t.AttrConst.forever_moreHolyPower, t.AttrConst.forever_taskState], [t.AttrConst.daily_holyEnergyFightTime, t.AttrConst.daily_level1WinTime, t.AttrConst.daily_upFightTime], [], [t.AttrConst.daily_bitbuff_hasGetMoreHurt]),
            n.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.HOLY_LIGHT_ASSIST_PANEL
            },
            {
                panelName: t.ModuleConst.HOLY_LIGHT_CHANGE_PANEL
            },
            {
                panelName: t.ModuleConst.HOLY_LIGHT_SUPPLY_PANEL
            },
            {
                panelName: t.ModuleConst.UP_PANEL
            }]),
            n
        }
        return __extends(n, i),
        n
    } (BasicMultPanelModule);
    t.MingYi = i,
    __reflect(i.prototype, "mingYi.MingYi")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
mingYi; !
function(t) {
    var i = function() {
        function t() {}
        return t.CMD = 45746,
        t
    } ();
    t.CMDConst = i,
    __reflect(i.prototype, "mingYi.CMDConst")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
mingYi; !
function(t) {
    var i = function() {
        function t() {}
        return t.shining_dust = 1718523,
        t.shining_power = 1718524,
        t.holy_feather = 1718527,
        t
    } ();
    t.ItemConst = i,
    __reflect(i.prototype, "mingYi.ItemConst")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
mingYi; !
function(t) {
    var i = function() {
        function t() {}
        return t.MAIN_PANEL = "mingYi.MainPanel",
        t.HOLY_LIGHT_CHANGE_PANEL = "mingYi.HolyLightChangePanel",
        t.HOLY_LIGHT_ASSIST_PANEL = "mingYi.HolyLightAssistPanel",
        t.HOLY_LIGHT_SUPPLY_PANEL = "mingYi.HolyLightSupplyPanel",
        t.UP_PANEL = "mingYi.UpPanel",
        t.ENERGY_SUPPLY_POP = "mingYi.EnergySupplyPop",
        t
    } ();
    t.ModuleConst = i,
    __reflect(i.prototype, "mingYi.ModuleConst")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
mingYi; !
function(t) {
    var i = function() {
        function t() {}
        return t.forever_getState = 106146,
        t.forever_taskState = 106147,
        t.forever_level1SumHurt = 106148,
        t.forever_level2LeftBossIndex = 106149,
        t.forever_level2Comprehension = 106150,
        t.forever_level2RateOfSuccess = 106151,
        t.forever_freeHolyPower = 106152,
        t.forever_moreHolyPower = 106153,
        t.daily_bitbuff_hasGetMoreHurt = 1000405,
        t.daily_level1WinTime = 14637,
        t.daily_holyEnergyFightTime = 14638,
        t.daily_upFightTime = 14639,
        t
    } ();
    t.AttrConst = i,
    __reflect(i.prototype, "mingYi.AttrConst")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, i) {
    function n() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    n.prototype = i.prototype,
    t.prototype = new n
},
mingYi; !
function(t) {
    var i = function(i) {
        function n() {
            var t = i.call(this) || this;
            return t.skinName = MingyiChangeSkin,
            t
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(59, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.addEvent()
        },
        n.prototype.addEvent = function() {
            var i = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                i.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(59)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnSupply,
            function() {
                i.service.openPanel(t.ModuleConst.HOLY_LIGHT_SUPPLY_PANEL, "2")
            },
            this),
            ImageButtonUtil.add(this.btnFastFight,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(254824, 1,
                function() {
                    SocketConnection.sendByQueue(t.CMDConst.CMD, [15, 1],
                    function() {
                        i.updateValues()
                    })
                }) : Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnFight1,
            function() {
                i.numPower < 1 ? BubblerManager.getInstance().showText("圣光能量不足！") : FightManager.fightNoMapBoss("", 14555 + i.bossIndex)
            },
            this),
            ImageButtonUtil.add(this.btnFight2,
            function() {
                i.numPower < 3 ? BubblerManager.getInstance().showText("圣光能量不足！") : FightManager.fightNoMapBoss("", 14560)
            },
            this)
        },
        n.prototype.beforeUpdate = function() {
            return this.jinDu1.value = 0,
            this.jinDu2.value = 0,
            Promise.resolve()
        },
        n.prototype.update = function() {
            var i = this,
            n = 1 == KTool.getBit(this.service.getValue(t.AttrConst.forever_taskState), 2);
            n && Alarm.show("已完成圣光蜕变。",
            function() {
                i.service.backToMainPanel()
            }),
            this.bossIndex = this.service.getValue(t.AttrConst.forever_level2LeftBossIndex),
            0 != this.bossIndex ? this.setIndex(this.bossIndex) : SocketConnection.sendByQueue(t.CMDConst.CMD, [15, 0],
            function() {
                i.service.updateValues().then(function() {
                    i.bossIndex = i.service.getValue(t.AttrConst.forever_level2LeftBossIndex),
                    i.setIndex(i.bossIndex)
                })
            });
            var e = SystemTimerManager.sysBJDate.getTime() / 1e3 - this.service.getValue(t.AttrConst.forever_freeHolyPower);
            e = Math.floor(e / 3600),
            e = e > 6 ? 6 : e;
            var s = this.service.getValue(t.AttrConst.forever_moreHolyPower);
            this.numPower = s + e,
            this.setPower(e, s);
            var o = this.service.getValue(t.AttrConst.forever_level2RateOfSuccess);
            this.txtRate.text = o + "%";
            var u = this.service.getValue(t.AttrConst.forever_level2Comprehension);
            this.txtComprehension.text = u + "",
            this.btnFastFight.visible = 100 > u,
            this.btnFight2.visible = u >= 100,
            this.btnFight1.visible = 100 > u
        },
        n.prototype.setIndex = function(t) {
            1 == t ? (this.txtDescribe.text = "对手无法使用属性技能", this.txtComprehensionCanGet.text = "20") : 2 == t ? (this.txtDescribe.text = "对手无法进入能力强化状态", this.txtComprehensionCanGet.text = "15") : 3 == t ? (this.txtDescribe.text = "每回合全属性+1", this.txtComprehensionCanGet.text = "20") : 4 == t && (this.txtDescribe.text = "对手每回合全属性-1", this.txtComprehensionCanGet.text = "25")
        },
        n.prototype.setPower = function(t, i) {
            if (0 == i) {
                this.jinDu1.visible = !0,
                this.jinDu2.visible = !1,
                this.jinDu1.value = t / 6 * 100;
                for (var n = 1; 7 >= n; n++) this["point" + (n + 7)].visible = !1,
                this["point" + n].visible = t + 1 >= n
            } else {
                this.jinDu1.visible = !1,
                this.jinDu2.visible = !0,
                this.jinDu2.value = i / 6 * 100;
                for (var n = 1; 7 >= n; n++) this["point" + n].visible = !1,
                this["point" + (n + 7)].visible = i + 1 >= n
            }
        },
        n
    } (BasicPanel);
    t.HolyLightChangePanel = i,
    __reflect(i.prototype, "mingYi.HolyLightChangePanel")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, i) {
    function n() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    n.prototype = i.prototype,
    t.prototype = new n
},
mingYi; !
function(t) {
    var i = function(i) {
        function n() {
            var t = i.call(this) || this;
            return t.skinName = MingyiSupplySkin,
            t
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(60, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.addEvent(),
            this.initItem()
        },
        n.prototype.beforeAdd = function(i) {
            "1" == i ? this.backTo = t.ModuleConst.HOLY_LIGHT_ASSIST_PANEL: "2" == i && (this.backTo = t.ModuleConst.HOLY_LIGHT_CHANGE_PANEL)
        },
        n.prototype.initItem = function() {
            this.service.registerItemUpdateForText(t.ItemConst.shining_power, this.txtItem1, this),
            this.service.registerItemUpdateForText(t.ItemConst.shining_dust, this.txtItem2, this),
            this.txtItem1.text = ItemManager.getNumByID(t.ItemConst.shining_power) + "",
            this.txtItem2.text = ItemManager.getNumByID(t.ItemConst.shining_dust) + ""
        },
        n.prototype.addEvent = function() {
            var i = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                i.service.openPanel(i.backTo)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(60)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(254828, 1,
                function() {
                    KTool.doExchange(12111, 1,
                    function() {
                        i.updateValues()
                    })
                }) : Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnPop,
            function() {
                var n = new t.EnergySupplyPop(i.update, i);
                i.service.openPop(n)
            },
            this);
            for (var n = function(t) {
                ImageButtonUtil.add(e["btnFight" + t],
                function() {
                    i.numFightTime < 1 ? BubblerManager.getInstance().showText("今日剩余战斗次数不足！") : FightManager.fightNoMapBoss("", 14560 + t)
                },
                e)
            },
            e = this, s = 1; 4 >= s; s++) n(s)
        },
        n.prototype.beforeUpdate = function() {
            return this.jinDu1.value = 0,
            this.jinDu2.value = 0,
            Promise.resolve()
        },
        n.prototype.update = function() {
            var i = this;
            this.service.updateValues().then(function() {
                var n = SystemTimerManager.sysBJDate.getTime() / 1e3 - i.service.getValue(t.AttrConst.forever_freeHolyPower),
                e = Math.floor(n / 3600),
                s = i.service.getValue(t.AttrConst.forever_moreHolyPower),
                o = e + s;
                i.setPower(e, s),
                6 > o ? (i.txtCountdown.visible = !0, i.imgCountDown.visible = !0, n = 3600 - n % 3600, i.service.unregisterClock(i.txtCountdown), i.service.registerClockWithLeftSecond(n,
                function() {
                    i.update()
                },
                i, i.txtCountdown)) : (i.txtCountdown.visible = !1, i.imgCountDown.visible = !1)
            }),
            this.numFightTime = 12 - this.service.getValue(t.AttrConst.daily_holyEnergyFightTime),
            this.txtFightTime.text = this.numFightTime + "",
            0 == this.numFightTime ? DisplayUtil.setEnabled(this.btnAddFightTime, !0, !1) : DisplayUtil.setEnabled(this.btnAddFightTime, !1, !0)
        },
        n.prototype.setPower = function(t, i) {
            if (0 == i) {
                this.jinDu1.visible = !0,
                this.jinDu2.visible = !1,
                this.jinDu1.value = t / 6 * 100;
                for (var n = 1; 7 >= n; n++) this["point" + (n + 7)].visible = !1,
                this["point" + n].visible = t + 1 >= n
            } else {
                this.jinDu1.visible = !1,
                this.jinDu2.visible = !0,
                this.jinDu2.value = i / 6 * 100;
                for (var n = 1; 7 >= n; n++) this["point" + n].visible = !1,
                this["point" + (n + 7)].visible = i + 1 >= n
            }
        },
        n.prototype.destroy = function() {
            this.service.unregisterClock(this.txtCountdown),
            i.prototype.destroy.call(this)
        },
        n.prototype.removed = function() {
            this.service.unregisterClock(this.txtCountdown)
        },
        n
    } (BasicPanel);
    t.HolyLightSupplyPanel = i,
    __reflect(i.prototype, "mingYi.HolyLightSupplyPanel")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, i) {
    function n() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    n.prototype = i.prototype,
    t.prototype = new n
},
mingYi; !
function(t) {
    var i = function(i) {
        function n() {
            var t = i.call(this) || this;
            return t.skinName = "MingyiMainSkin",
            t
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.service.closeModule()
            },
            this),
            this.addEvent()
        },
        n.prototype.addEvent = function() {
            var i = this;
            ImageButtonUtil.add(this.btnOneKey1,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(254819, 1,
                function() {
                    KTool.doExchange(12107, 1,
                    function() {
                        i.updateValues()
                    })
                }) : i.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnOneKey2,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(254820, 1,
                function() {
                    KTool.doExchange(12108, 1,
                    function() {
                        i.updateValues()
                    })
                }) : i.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnSuper,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(254818, 1,
                function() {
                    KTool.doExchange(12105, 1,
                    function() {
                        i.updateValues()
                    })
                }) : i.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                i.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                i.service.showPetInfo(3759)
            },
            this),
            ImageButtonUtil.add(this.btnAssist,
            function() {
                i.service.openPanel(t.ModuleConst.HOLY_LIGHT_ASSIST_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnChange,
            function() {
                i.service.openPanel(t.ModuleConst.HOLY_LIGHT_CHANGE_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                i.service.openPanel(t.ModuleConst.UP_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                KTool.doExchange(12106, 1,
                function() {
                    i.updateValues()
                })
            },
            this)
        },
        n.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        n.prototype.update = function() {
            var i = this.service.getValue(t.AttrConst.forever_taskState),
            n = 1 == KTool.getBit(i, 1),
            e = 1 == KTool.getBit(i, 2),
            s = 1 == KTool.getBit(this.service.getValue(t.AttrConst.forever_getState), 1);
            DisplayUtil.setEnabled(this.btnOneKey1, !n, n),
            DisplayUtil.setEnabled(this.btnOneKey2, !e, e),
            this.imgFinish1.visible = n,
            this.imgFinish2.visible = e,
            this.btnAssist.alpha = n ? .5 : 1,
            this.btnChange.alpha = e ? .5 : 1,
            DisplayUtil.setEnabled(this.btnAssist, !n, !1),
            DisplayUtil.setEnabled(this.btnChange, !e, !1),
            this.btnSuper.visible = !n || !e,
            this.btnGetPet.visible = n && e && !s,
            this.btnUp.visible = s
        },
        n
    } (BasicPanel);
    t.MainPanel = i,
    __reflect(i.prototype, "mingYi.MainPanel")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, i) {
    function n() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    n.prototype = i.prototype,
    t.prototype = new n
},
mingYi; !
function(t) {
    var i = function(i) {
        function n() {
            var t = i.call(this) || this;
            return t.skinName = MingyiUpSkin,
            t
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.addEvent(),
            this.setDifficulty(1),
            this.initItem()
        },
        n.prototype.initItem = function() {
            this.txtItem.text = "当前拥有圣洁之羽    ：" + ItemManager.getNumByID(t.ItemConst.holy_feather),
            this.service.registerItemUpdateForText(t.ItemConst.holy_feather, this.txtItem, this, "当前拥有圣洁之羽    ：$0")
        },
        n.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(254829, 1,
                function() {
                    KTool.doExchange(12112, 1,
                    function() {
                        t.updateValues()
                    })
                }) : t.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                if (PayManager.canPay()) {
                    var i = {};
                    i.type = "product_diamond",
                    i.ins = {
                        iconID: 1718527,
                        productID: 254830
                    },
                    i.caller = t,
                    i.callBack = function(i, n) {
                        KTool.buyProductByCallback(254830, n,
                        function() {
                            KTool.doExchange(12113, n,
                            function() {
                                t.updateValues()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, i)
                } else t.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnDifficulty1,
            function() {
                t.setDifficulty(1)
            },
            this),
            ImageButtonUtil.add(this.btnDifficulty2,
            function() {
                t.setDifficulty(2)
            },
            this),
            ImageButtonUtil.add(this.btnDifficulty3,
            function() {
                t.setDifficulty(3)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                t.service.showSkillInfo(32768)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                t.service.showMarkInfo(41426)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                t.service.showPetEff(3759)
            },
            this),
            ImageButtonUtil.add(this.btnGetKe,
            function() {
                t.exchange(1)
            },
            this),
            ImageButtonUtil.add(this.btnGetWu,
            function() {
                t.exchange(2)
            },
            this),
            ImageButtonUtil.add(this.btnGetTe,
            function() {
                t.exchange(3)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                t.numFightTime < 1 ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : FightManager.fightNoMapBoss("", 14564 + t.numDifficulty)
            },
            this)
        },
        n.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        n.prototype.setDifficulty = function(t) {
            this.numDifficulty = t;
            for (var i = 1; 3 >= i; i++) this["imgDifficulty" + i].visible = t == i
        },
        n.prototype.exchange = function(i) {
            var n = this;
            if (this.isFirstPet()) {
                var e = ItemManager.getNumByID(t.ItemConst.holy_feather);
                15 > e ? BubblerManager.getInstance().showText("圣洁之羽数量不足！") : SocketConnection.sendByQueue(t.CMDConst.CMD, [17, i],
                function() {
                    n.updateValues()
                })
            }
        },
        n.prototype.isFirstPet = function() {
            var t = this;
            return PetManager.isDefaultPet(3759) ? !0 : (Alarm.show("需要将明翼置于首发才能获得能力提升哦！",
            function() {
                t.service.showPetBag()
            }), !1)
        },
        n.prototype.update = function() {
            var i = MainManager.actorInfo.isVip ? 5 : 3;
            this.numFightTime = i - this.service.getValue(t.AttrConst.daily_upFightTime),
            this.txtFightTime.text = "当前剩余挑战次数：" + this.numFightTime + "/" + i;
            var n = this.service.getValue(t.AttrConst.forever_getState),
            e = 1 == KTool.getBit(n, 2),
            s = 1 == KTool.getBit(n, 3),
            o = 1 == KTool.getBit(n, 4);
            DisplayUtil.setEnabled(this.btnGetKe, !e, e),
            DisplayUtil.setEnabled(this.btnGetTe, !o, o),
            DisplayUtil.setEnabled(this.btnGetWu, !s, s),
            DisplayUtil.setEnabled(this.btnAddFightTime, 0 == this.numFightTime, !(0 == this.numFightTime))
        },
        n.prototype.destroy = function() {
            this.service.unregisterItems(this),
            i.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    t.UpPanel = i,
    __reflect(i.prototype, "mingYi.UpPanel")
} (mingYi || (mingYi = {}));
var __reflect = this && this.__reflect ||
function(t, i, n) {
    t.__class__ = i,
    n ? n.push(i) : n = [i],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, i) {
    function n() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    n.prototype = i.prototype,
    t.prototype = new n
},
mingYi; !
function(t) {
    var i = function(i) {
        function n(t, n) {
            var e = i.call(this) || this;
            return e.skinName = MingyiEnergySupplyPopSkin,
            e.callback = t,
            e.thisObj = n,
            e
        }
        return __extends(n, i),
        n.prototype.destroy = function() {
            i.prototype.destroy.call(this),
            this.callback = null,
            this.thisObj = null
        },
        n.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.update()
        },
        n.prototype.addEvent = function() {
            var i = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(i)
            },
            this),
            ImageButtonUtil.add(this.btnBuy1,
            function() {
                if (PayManager.canPay()) {
                    var n = {};
                    n.type = "product_diamond",
                    n.ins = {
                        iconID: 1718523,
                        productID: 254825
                    },
                    n.caller = i,
                    n.callBack = function(n, e) {
                        KTool.buyProductByCallback(254825, e,
                        function() {
                            KTool.doExchange(12109, e,
                            function() {
                                ItemManager.updateItems([t.ItemConst.shining_dust],
                                function() {
                                    i.update(),
                                    i.callback && i.callback.call(i.thisObj)
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, n)
                } else i.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnBuy2,
            function() {
                if (PayManager.canPay()) {
                    var n = {};
                    n.type = "product_diamond",
                    n.ins = {
                        iconID: 1718524,
                        productID: 254826
                    },
                    n.caller = i,
                    n.callBack = function(n, e) {
                        KTool.buyProductByCallback(254826, e,
                        function() {
                            KTool.doExchange(12110, e,
                            function() {
                                ItemManager.updateItems([t.ItemConst.shining_power],
                                function() {
                                    i.update(),
                                    i.callback && i.callback.call(i.thisObj)
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, n)
                } else i.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnBuy3,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(254827, 1,
                function() {
                    SocketConnection.sendWithPromise(45746, [16, 3]).then(function() {
                        i.update(),
                        i.callback && i.callback.call(i.thisObj)
                    })
                }) : i.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnUse1,
            function() {
                DisplayUtil.setEnabled(i.btnUse1, !1, !1),
                SocketConnection.sendByQueue(t.CMDConst.CMD, [16, 1],
                function() {
                    i.update(),
                    i.callback && i.callback.call(i.thisObj)
                })
            },
            this),
            ImageButtonUtil.add(this.btnUse2,
            function() {
                DisplayUtil.setEnabled(i.btnUse2, !1, !1),
                SocketConnection.sendByQueue(t.CMDConst.CMD, [16, 2],
                function() {
                    i.update(),
                    i.callback && i.callback.call(i.thisObj)
                })
            },
            this)
        },
        n.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        n.prototype.update = function() {
            var i = this,
            n = ItemManager.getNumByID(t.ItemConst.shining_dust),
            e = ItemManager.getNumByID(t.ItemConst.shining_power);
            this.txt1.text = n + "",
            this.txt2.text = e + "",
            KTool.getMultiValue([t.AttrConst.forever_freeHolyPower, t.AttrConst.forever_moreHolyPower],
            function(t) {
                i.freePower = (SystemTimerManager.sysBJDate.getTime() / 1e3 - t[0]) / 3600;
                var s = i.freePower + t[1],
                o = n > 0 && 6 > s,
                u = e > 0 && 6 > s;
                DisplayUtil.setEnabled(i.btnUse1, o, !o),
                DisplayUtil.setEnabled(i.btnUse2, u, !u),
                DisplayUtil.setEnabled(i.btnBuy3, 6 > s, !(6 > s))
            })
        },
        n
    } (PopView);
    t.EnergySupplyPop = i,
    __reflect(i.prototype, "mingYi.EnergySupplyPop")
} (mingYi || (mingYi = {}));
var __extends = this && this.__extends ||
function(t, i) {
    function n() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    n.prototype = i.prototype,
    t.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/MingyiAssistSkin.exml"] = window.MingyiAssistSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnFight", "btnOneKey", "btnEasy", "imgEasy", "BtnMiddle", "imgMiddle", "btnHard", "imgHard", "jinDu1", "jinDu2", "point1", "point2", "point3", "point4", "point5", "point6", "point7", "point8", "point9", "point10", "point11", "point12", "point13", "point14", "btnPet", "btnCure", "btnDailyBonus", "btnSupply", "txtSumHurt", "txtWinTime", "btnHelp", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(i, t);
    var n = function(t) {
        function i() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(i, t);
        var n = i.prototype;
        return n.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "mingyi_assist_imgjindu_png",
            t
        },
        i
    } (eui.Skin),
    e = function(t) {
        function i() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(i, t);
        var n = i.prototype;
        return n.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "mingyi_assist_jindu2_png",
            t
        },
        i
    } (eui.Skin),
    s = i.prototype;
    return s._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "bg_jpg",
        t.top = 0,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -3,
        t.width = 1084,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnFight_i(), this.btnOneKey_i(), this.btnEasy_i(), this.imgEasy_i(), this.BtnMiddle_i(), this.imgMiddle_i(), this.btnHard_i(), this.imgHard_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.jinDu1_i(), this.jinDu2_i(), this.point1_i(), this.point2_i(), this.point3_i(), this.point4_i(), this.point5_i(), this.point6_i(), this.point7_i(), this.point8_i(), this.point9_i(), this.point10_i(), this.point11_i(), this.point12_i(), this.point13_i(), this.point14_i(), this.btnPet_i(), this.btnCure_i(), this.btnDailyBonus_i(), this.btnSupply_i(), this.txtSumHurt_i(), this.txtWinTime_i()],
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_assist_pet_png",
        t.x = 99,
        t.y = 0,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_assist_sgzz_png",
        t.x = 344,
        t.y = 0,
        t
    },
    s.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "mingyi_assist_btnfight_png",
        t.x = 303,
        t.y = 463.12,
        t
    },
    s.btnOneKey_i = function() {
        var t = new eui.Image;
        return this.btnOneKey = t,
        t.source = "mingyi_assist_btnonekey_png",
        t.x = 542.02,
        t.y = 463,
        t
    },
    s.btnEasy_i = function() {
        var t = new eui.Image;
        return this.btnEasy = t,
        t.source = "mingyi_assist_btneasy_png",
        t.visible = !0,
        t.x = 109,
        t.y = 91,
        t
    },
    s.imgEasy_i = function() {
        var t = new eui.Image;
        return this.imgEasy = t,
        t.source = "mingyi_assist_easy2_png",
        t.visible = !0,
        t.x = 103,
        t.y = 81,
        t
    },
    s.BtnMiddle_i = function() {
        var t = new eui.Image;
        return this.BtnMiddle = t,
        t.source = "mingyi_assist_btnmiddle_png",
        t.x = 83,
        t.y = 147,
        t
    },
    s.imgMiddle_i = function() {
        var t = new eui.Image;
        return this.imgMiddle = t,
        t.source = "mingyi_assist_m2_png",
        t.visible = !0,
        t.x = 77,
        t.y = 137,
        t
    },
    s.btnHard_i = function() {
        var t = new eui.Image;
        return this.btnHard = t,
        t.source = "mingyi_assist_btnhard_png",
        t.x = 57,
        t.y = 202,
        t
    },
    s.imgHard_i = function() {
        var t = new eui.Image;
        return this.imgHard = t,
        t.source = "mingyi_assist_d2_png",
        t.visible = !0,
        t.x = 52,
        t.y = 192,
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_assist_yljsh_png",
        t.x = 742,
        t.y = 87,
        t
    },
    s._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_assist_jrzscs_png",
        t.x = 804,
        t.y = 163,
        t
    },
    s._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_assist_jindubg_png",
        t.visible = !0,
        t.x = 142,
        t.y = 542,
        t
    },
    s.jinDu1_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDu1 = t,
        t.visible = !0,
        t.x = 164,
        t.y = 560,
        t.skinName = n,
        t
    },
    s.jinDu2_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDu2 = t,
        t.visible = !0,
        t.x = 164,
        t.y = 556.5,
        t.skinName = e,
        t
    },
    s.point1_i = function() {
        var t = new eui.Image;
        return this.point1 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 148,
        t.y = 548,
        t
    },
    s.point2_i = function() {
        var t = new eui.Image;
        return this.point2 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 274,
        t.y = 548,
        t
    },
    s.point3_i = function() {
        var t = new eui.Image;
        return this.point3 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 400,
        t.y = 548,
        t
    },
    s.point4_i = function() {
        var t = new eui.Image;
        return this.point4 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 525,
        t.y = 548,
        t
    },
    s.point5_i = function() {
        var t = new eui.Image;
        return this.point5 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 651,
        t.y = 548,
        t
    },
    s.point6_i = function() {
        var t = new eui.Image;
        return this.point6 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 777,
        t.y = 548,
        t
    },
    s.point7_i = function() {
        var t = new eui.Image;
        return this.point7 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 902,
        t.y = 548,
        t
    },
    s.point8_i = function() {
        var t = new eui.Image;
        return this.point8 = t,
        t.source = "mingyi_assist_point8_png",
        t.visible = !0,
        t.x = 135.13,
        t.y = 535.068,
        t
    },
    s.point9_i = function() {
        var t = new eui.Image;
        return this.point9 = t,
        t.source = "mingyi_assist_point8_png",
        t.visible = !0,
        t.x = 261.13,
        t.y = 535.068,
        t
    },
    s.point10_i = function() {
        var t = new eui.Image;
        return this.point10 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 387.13,
        t.y = 535.068,
        t
    },
    s.point11_i = function() {
        var t = new eui.Image;
        return this.point11 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 512.13,
        t.y = 535.067,
        t
    },
    s.point12_i = function() {
        var t = new eui.Image;
        return this.point12 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 638.13,
        t.y = 535.066,
        t
    },
    s.point13_i = function() {
        var t = new eui.Image;
        return this.point13 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 764.13,
        t.y = 535.066,
        t
    },
    s.point14_i = function() {
        var t = new eui.Image;
        return this.point14 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 889.129,
        t.y = 535.066,
        t
    },
    s.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "mingyi_assist_btnpet_png",
        t.x = 0,
        t.y = 266,
        t
    },
    s.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "mingyi_assist_brncure_png",
        t.x = 0,
        t.y = 340,
        t
    },
    s.btnDailyBonus_i = function() {
        var t = new eui.Image;
        return this.btnDailyBonus = t,
        t.source = "lQLPDhqi5PYQr4rNASrNASWwsdzeJ3xRpf_w9s4znmuw3Q_293_298_png",
        t.x = 8.392,
        t.y = 498.868,
        t
    },
    s.btnSupply_i = function() {
        var t = new eui.Image;
        return this.btnSupply = t,
        t.source = "lQLPDhqi42FZgg7NASrNASWwoaGqIIwnQxxJJvIs2VkVg_293_298_png",
        t.x = 951,
        t.y = 497,
        t
    },
    s.txtSumHurt_i = function() {
        var t = new eui.Label;
        return this.txtSumHurt = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 28,
        t.text = "200000/200000",
        t.textColor = 16773461,
        t.visible = !0,
        t.width = 274.764,
        t.x = 778.982,
        t.y = 120,
        t
    },
    s.txtWinTime_i = function() {
        var t = new eui.Label;
        return this.txtWinTime = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 28,
        t.text = "0",
        t.textAlign = "left",
        t.textColor = 16773461,
        t.verticalAlign = "middle",
        t.width = 47.957,
        t.x = 963.411,
        t.y = 171.267,
        t
    },
    s._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.btnHelp_i(), this.btnClose_i()],
        t
    },
    s._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "mingyi_assist_btnhelp_png",
        t.x = 130,
        t.y = 5,
        t
    },
    s.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MingyiChangeSkin.exml"] = window.MingyiChangeSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnFight1", "btnFastFight", "btnFight2", "jinDu1", "jinDu2", "point1", "point2", "point3", "point4", "point5", "point6", "point7", "point8", "point9", "point10", "point11", "point12", "point13", "point14", "btnPet", "btnCure", "btnSupply", "txtComprehension", "txtDescribe", "txtComprehensionCanGet", "txtRate", "btnHelp", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(i, t);
    var n = function(t) {
        function i() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(i, t);
        var n = i.prototype;
        return n.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "mingyi_assist_imgjindu_png",
            t
        },
        i
    } (eui.Skin),
    e = function(t) {
        function i() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(i, t);
        var n = i.prototype;
        return n.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "mingyi_assist_jindu2_png",
            t
        },
        i
    } (eui.Skin),
    s = i.prototype;
    return s._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "bg_jpg",
        t.top = 0,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 11.5,
        t.width = 1113,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.btnFight1_i(), this.btnFastFight_i(), this.btnFight2_i(), this._Image7_i(), this.jinDu1_i(), this.jinDu2_i(), this.point1_i(), this.point2_i(), this.point3_i(), this.point4_i(), this.point5_i(), this.point6_i(), this.point7_i(), this.point8_i(), this.point9_i(), this.point10_i(), this.point11_i(), this.point12_i(), this.point13_i(), this.point14_i(), this.btnPet_i(), this.btnCure_i(), this._Image8_i(), this.btnSupply_i(), this.txtComprehension_i(), this.txtDescribe_i(), this.txtComprehensionCanGet_i(), this.txtRate_i()],
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_change_pet1_png",
        t.x = 107,
        t.y = 95,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_change_pet2_png",
        t.x = 663,
        t.y = 0,
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_change_dqlwl_png",
        t.x = 676,
        t.y = 361,
        t
    },
    s._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_change_jbkhdlwl_png",
        t.x = 73,
        t.y = 361,
        t
    },
    s._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_change_sgtb_png",
        t.x = 343,
        t.y = 0,
        t
    },
    s.btnFight1_i = function() {
        var t = new eui.Image;
        return this.btnFight1 = t,
        t.source = "mingyi_change_btnfight1_png",
        t.visible = !0,
        t.x = 138,
        t.y = 460,
        t
    },
    s.btnFastFight_i = function() {
        var t = new eui.Image;
        return this.btnFastFight = t,
        t.source = "mingyi_change_btnfastfight_png",
        t.visible = !1,
        t.x = 719,
        t.y = 462,
        t
    },
    s.btnFight2_i = function() {
        var t = new eui.Image;
        return this.btnFight2 = t,
        t.source = "mingyi_change_btnfight1_png",
        t.visible = !1,
        t.x = 715,
        t.y = 460,
        t
    },
    s._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_assist_jindubg_png",
        t.x = 142,
        t.y = 542,
        t
    },
    s.jinDu1_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDu1 = t,
        t.visible = !0,
        t.x = 164,
        t.y = 560,
        t.skinName = n,
        t
    },
    s.jinDu2_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDu2 = t,
        t.visible = !0,
        t.x = 164,
        t.y = 556.5,
        t.skinName = e,
        t
    },
    s.point1_i = function() {
        var t = new eui.Image;
        return this.point1 = t,
        t.source = "mingyi_assist_point1_png",
        t.visible = !0,
        t.x = 148,
        t.y = 548,
        t
    },
    s.point2_i = function() {
        var t = new eui.Image;
        return this.point2 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 274,
        t.y = 548,
        t
    },
    s.point3_i = function() {
        var t = new eui.Image;
        return this.point3 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 400,
        t.y = 548,
        t
    },
    s.point4_i = function() {
        var t = new eui.Image;
        return this.point4 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 525,
        t.y = 548,
        t
    },
    s.point5_i = function() {
        var t = new eui.Image;
        return this.point5 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 651,
        t.y = 548,
        t
    },
    s.point6_i = function() {
        var t = new eui.Image;
        return this.point6 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 777,
        t.y = 548,
        t
    },
    s.point7_i = function() {
        var t = new eui.Image;
        return this.point7 = t,
        t.source = "mingyi_assist_point1_png",
        t.x = 902,
        t.y = 548,
        t
    },
    s.point8_i = function() {
        var t = new eui.Image;
        return this.point8 = t,
        t.source = "mingyi_assist_point8_png",
        t.visible = !0,
        t.x = 135.13,
        t.y = 535.068,
        t
    },
    s.point9_i = function() {
        var t = new eui.Image;
        return this.point9 = t,
        t.source = "mingyi_assist_point8_png",
        t.visible = !0,
        t.x = 261.13,
        t.y = 535.068,
        t
    },
    s.point10_i = function() {
        var t = new eui.Image;
        return this.point10 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 387.13,
        t.y = 535.068,
        t
    },
    s.point11_i = function() {
        var t = new eui.Image;
        return this.point11 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 512.13,
        t.y = 535.067,
        t
    },
    s.point12_i = function() {
        var t = new eui.Image;
        return this.point12 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 638.13,
        t.y = 535.066,
        t
    },
    s.point13_i = function() {
        var t = new eui.Image;
        return this.point13 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 764.13,
        t.y = 535.066,
        t
    },
    s.point14_i = function() {
        var t = new eui.Image;
        return this.point14 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 889.129,
        t.y = 535.066,
        t
    },
    s.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "mingyi_assist_btnpet_png",
        t.x = 0,
        t.y = 266,
        t
    },
    s.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "mingyi_assist_brncure_png",
        t.x = 0,
        t.y = 340,
        t
    },
    s._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_change_tbgl_png",
        t.x = 419,
        t.y = 140,
        t
    },
    s.btnSupply_i = function() {
        var t = new eui.Image;
        return this.btnSupply = t,
        t.source = "lQLPDhqi42FZgg7NASrNASWwoaGqIIwnQxxJJvIs2VkVg_293_298_png",
        t.x = 951,
        t.y = 497,
        t
    },
    s.txtComprehension_i = function() {
        var t = new eui.Label;
        return this.txtComprehension = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "80",
        t.textColor = 16773461,
        t.x = 893,
        t.y = 386.59,
        t
    },
    s.txtDescribe_i = function() {
        var t = new eui.Label;
        return this.txtDescribe = t,
        t.size = 18,
        t.text = "对手",
        t.textColor = 16773461,
        t.x = 204,
        t.y = 374,
        t
    },
    s.txtComprehensionCanGet_i = function() {
        var t = new eui.Label;
        return this.txtComprehensionCanGet = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "1",
        t.textColor = 16773461,
        t.x = 397,
        t.y = 398.59,
        t
    },
    s.txtRate_i = function() {
        var t = new eui.Label;
        return this.txtRate = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 40,
        t.text = "100%",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 106,
        t.x = 487,
        t.y = 268,
        t
    },
    s._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image9_i(), this.btnHelp_i(), this.btnClose_i()],
        t
    },
    s._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "mingyi_assist_btnhelp_png",
        t.x = 129,
        t.y = 4,
        t
    },
    s.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MingyiEnergySupplyPopSkin.exml"] = window.MingyiEnergySupplyPopSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["txt1", "txt2", "btnUse1", "btnUse2", "btnBuy1", "btnBuy2", "btnBuy3", "btnClose"],
        this.height = 368,
        this.width = 626,
        this.elementsContent = [this._Image1_i(), this.txt1_i(), this.txt2_i(), this.btnUse1_i(), this.btnUse2_i(), this.btnBuy1_i(), this.btnBuy2_i(), this.btnBuy3_i(), this.btnClose_i()]
    }
    __extends(i, t);
    var n = i.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_supply_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.size = 22,
        t.text = "100",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.verticalAlign = "middle",
        t.x = 174,
        t.y = 108,
        t
    },
    n.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.size = 22,
        t.text = "100",
        t.textColor = 16773461,
        t.x = 174,
        t.y = 203.478,
        t
    },
    n.btnUse1_i = function() {
        var t = new eui.Image;
        return this.btnUse1 = t,
        t.source = "mingyi_supply_btnuse1_png",
        t.x = 491,
        t.y = 97,
        t
    },
    n.btnUse2_i = function() {
        var t = new eui.Image;
        return this.btnUse2 = t,
        t.source = "mingyi_supply_btnuse1_png",
        t.x = 491,
        t.y = 192,
        t
    },
    n.btnBuy1_i = function() {
        var t = new eui.Image;
        return this.btnBuy1 = t,
        t.source = "mingyi_supply_btnbuy1_png",
        t.x = 375,
        t.y = 97,
        t
    },
    n.btnBuy2_i = function() {
        var t = new eui.Image;
        return this.btnBuy2 = t,
        t.source = "mingyi_supply_btnbuy1_png",
        t.x = 375,
        t.y = 193,
        t
    },
    n.btnBuy3_i = function() {
        var t = new eui.Image;
        return this.btnBuy3 = t,
        t.source = "mingyi_supply_btnbuy1_png",
        t.x = 434,
        t.y = 292,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "mingyi_supply_btnclose_png",
        t.x = 568,
        t.y = 17,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MingyiMainSkin.exml"] = window.MingyiMainSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnGetPet", "btnUp", "btnSuper", "btnInfo", "btnAssist", "btnChange", "imgFinish1", "imgFinish2", "btnOneKey1", "btnOneKey2", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(i, t);
    var n = i.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "bg_jpg",
        t.top = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -2.5,
        t.width = 1055,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.btnGetPet_i(), this.btnUp_i(), this.btnSuper_i(), this.btnInfo_i(), this.btnAssist_i(), this.btnChange_i(), this.imgFinish1_i(), this.imgFinish2_i(), this.btnOneKey1_i(), this.btnOneKey2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_pet_png",
        t.x = 164,
        t.y = 0,
        t
    },
    n.btnGetPet_i = function() {
        var t = new eui.Image;
        return this.btnGetPet = t,
        t.source = "mingyi_main_btnget_png",
        t.visible = !1,
        t.x = 954,
        t.y = 489,
        t
    },
    n.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "mingyi_main_btnup_png",
        t.visible = !1,
        t.x = 954,
        t.y = 489,
        t
    },
    n.btnSuper_i = function() {
        var t = new eui.Image;
        return this.btnSuper = t,
        t.source = "mingyi_main_btnsuper_png",
        t.visible = !1,
        t.x = 954,
        t.y = 489,
        t
    },
    n.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "mingyi_main_btninfo_png",
        t.x = 0,
        t.y = 541,
        t
    },
    n.btnAssist_i = function() {
        var t = new eui.Image;
        return this.btnAssist = t,
        t.source = "mingyi_main_btnassist_png",
        t.visible = !0,
        t.x = 2,
        t.y = 158,
        t
    },
    n.btnChange_i = function() {
        var t = new eui.Image;
        return this.btnChange = t,
        t.source = "mingyi_main_btnchange_png",
        t.x = 714,
        t.y = 158,
        t
    },
    n.imgFinish1_i = function() {
        var t = new eui.Image;
        return this.imgFinish1 = t,
        t.source = "mingyi_main_imgfinish_png",
        t.visible = !1,
        t.x = 59,
        t.y = 223,
        t
    },
    n.imgFinish2_i = function() {
        var t = new eui.Image;
        return this.imgFinish2 = t,
        t.source = "mingyi_main_imgfinish_png",
        t.visible = !1,
        t.x = 771,
        t.y = 223,
        t
    },
    n.btnOneKey1_i = function() {
        var t = new eui.Image;
        return this.btnOneKey1 = t,
        t.source = "mingyi_main_btnonekey1_png",
        t.x = 93,
        t.y = 347,
        t
    },
    n.btnOneKey2_i = function() {
        var t = new eui.Image;
        return this.btnOneKey2 = t,
        t.source = "mingyi_main_btnonekey2_png",
        t.x = 760,
        t.y = 347,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_title_png",
        t.x = 361,
        t.y = 379,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_tglggkjkwcsgzzdtb_png",
        t.x = 345,
        t.y = 569,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_line_png",
        t.x = 335,
        t.y = 563,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.btnClose_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MingyiSupplySkin.exml"] = window.MingyiSupplySkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["jinDu1", "jinDu2", "point1", "point2", "point3", "point4", "point5", "point6", "point7", "point8", "point9", "point10", "point11", "point12", "point13", "point14", "btnPet", "btnCure", "btnFight4", "btnFight3", "btnFight2", "btnFight1", "imgCountDown", "btnAddFightTime", "btnPop", "txtItem1", "txtCountdown", "txtFightTime", "txtItem2", "btnHelp", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(i, t);
    var n = function(t) {
        function i() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(i, t);
        var n = i.prototype;
        return n.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "mingyi_assist_imgjindu_png",
            t
        },
        i
    } (eui.Skin),
    e = function(t) {
        function i() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(i, t);
        var n = i.prototype;
        return n.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "mingyi_assist_jindu2_png",
            t
        },
        i
    } (eui.Skin),
    s = i.prototype;
    return s._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "bg_jpg",
        t.top = 0,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -47.5,
        t.width = 1001,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.jinDu1_i(), this.jinDu2_i(), this.point1_i(), this.point2_i(), this.point3_i(), this.point4_i(), this.point5_i(), this.point6_i(), this.point7_i(), this.point8_i(), this.point9_i(), this.point10_i(), this.point11_i(), this.point12_i(), this.point13_i(), this.point14_i(), this.btnPet_i(), this.btnCure_i(), this.btnFight4_i(), this.btnFight3_i(), this.btnFight2_i(), this.btnFight1_i(), this.imgCountDown_i(), this._Image4_i(), this.btnAddFightTime_i(), this._Image5_i(), this._Image6_i(), this.btnPop_i(), this.txtItem1_i(), this.txtCountdown_i(), this.txtFightTime_i(), this.txtItem2_i()],
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_supply_snbc_png",
        t.x = 353,
        t.y = 0,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_assist_jindubg_png",
        t.x = 145,
        t.y = 542,
        t
    },
    s.jinDu1_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDu1 = t,
        t.visible = !0,
        t.x = 164,
        t.y = 560,
        t.skinName = n,
        t
    },
    s.jinDu2_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDu2 = t,
        t.visible = !0,
        t.x = 164,
        t.y = 556.5,
        t.skinName = e,
        t
    },
    s.point1_i = function() {
        var t = new eui.Image;
        return this.point1 = t,
        t.source = "mingyi_assist_point1_png",
        t.visible = !0,
        t.x = 151,
        t.y = 548,
        t
    },
    s.point2_i = function() {
        var t = new eui.Image;
        return this.point2 = t,
        t.source = "mingyi_assist_point1_png",
        t.visible = !0,
        t.x = 277,
        t.y = 548,
        t
    },
    s.point3_i = function() {
        var t = new eui.Image;
        return this.point3 = t,
        t.source = "mingyi_assist_point1_png",
        t.visible = !0,
        t.x = 403,
        t.y = 548,
        t
    },
    s.point4_i = function() {
        var t = new eui.Image;
        return this.point4 = t,
        t.source = "mingyi_assist_point1_png",
        t.visible = !0,
        t.x = 528,
        t.y = 548,
        t
    },
    s.point5_i = function() {
        var t = new eui.Image;
        return this.point5 = t,
        t.source = "mingyi_assist_point1_png",
        t.visible = !0,
        t.x = 654,
        t.y = 548,
        t
    },
    s.point6_i = function() {
        var t = new eui.Image;
        return this.point6 = t,
        t.source = "mingyi_assist_point1_png",
        t.visible = !0,
        t.x = 780,
        t.y = 548,
        t
    },
    s.point7_i = function() {
        var t = new eui.Image;
        return this.point7 = t,
        t.source = "mingyi_assist_point1_png",
        t.visible = !0,
        t.x = 905,
        t.y = 548,
        t
    },
    s.point8_i = function() {
        var t = new eui.Image;
        return this.point8 = t,
        t.source = "mingyi_assist_point8_png",
        t.visible = !0,
        t.x = 137.81,
        t.y = 535.068,
        t
    },
    s.point9_i = function() {
        var t = new eui.Image;
        return this.point9 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 263.81,
        t.y = 535.068,
        t
    },
    s.point10_i = function() {
        var t = new eui.Image;
        return this.point10 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 389.81,
        t.y = 535.068,
        t
    },
    s.point11_i = function() {
        var t = new eui.Image;
        return this.point11 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 514.81,
        t.y = 535.067,
        t
    },
    s.point12_i = function() {
        var t = new eui.Image;
        return this.point12 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 640.81,
        t.y = 535.066,
        t
    },
    s.point13_i = function() {
        var t = new eui.Image;
        return this.point13 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 766.81,
        t.y = 535.066,
        t
    },
    s.point14_i = function() {
        var t = new eui.Image;
        return this.point14 = t,
        t.source = "mingyi_assist_point8_png",
        t.x = 891.809,
        t.y = 535.066,
        t
    },
    s.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "mingyi_assist_btnpet_png",
        t.x = 3,
        t.y = 266,
        t
    },
    s.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "mingyi_assist_brncure_png",
        t.x = 3,
        t.y = 340,
        t
    },
    s.btnFight4_i = function() {
        var t = new eui.Image;
        return this.btnFight4 = t,
        t.source = "mingyi_supply_btnfight4_png",
        t.x = 801,
        t.y = 86,
        t
    },
    s.btnFight3_i = function() {
        var t = new eui.Image;
        return this.btnFight3 = t,
        t.source = "mingyi_supply_btnfight3_png",
        t.x = 567,
        t.y = 86,
        t
    },
    s.btnFight2_i = function() {
        var t = new eui.Image;
        return this.btnFight2 = t,
        t.source = "mingyi_supply_btnfight2_png",
        t.x = 334,
        t.y = 86,
        t
    },
    s.btnFight1_i = function() {
        var t = new eui.Image;
        return this.btnFight1 = t,
        t.source = "mingyi_supply_btnfight1_png",
        t.x = 101,
        t.y = 86,
        t
    },
    s.imgCountDown_i = function() {
        var t = new eui.Image;
        return this.imgCountDown = t,
        t.source = "mingyi_supply_zj1d_png",
        t.x = 0,
        t.y = 533,
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_supply_sytzcs_png",
        t.x = 676,
        t.y = 488,
        t
    },
    s.btnAddFightTime_i = function() {
        var t = new eui.Image;
        return this.btnAddFightTime = t,
        t.source = "mingyi_supply_btnaddfighttime_png",
        t.x = 884,
        t.y = 487,
        t
    },
    s._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_supply_1718523_png",
        t.x = 407,
        t.y = 474,
        t
    },
    s._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_supply_1718524_png",
        t.x = 176,
        t.y = 472,
        t
    },
    s.btnPop_i = function() {
        var t = new eui.Image;
        return this.btnPop = t,
        t.source = "lQLPDhqi5PYQr4TNASrNASWwfOVn0vFA0uIspq2Oxt9Gw_293_298_png",
        t.x = 954,
        t.y = 497,
        t
    },
    s.txtItem1_i = function() {
        var t = new eui.Label;
        return this.txtItem1 = t,
        t.size = 22,
        t.text = "999",
        t.textColor = 16773461,
        t.x = 244,
        t.y = 493.508,
        t
    },
    s.txtCountdown_i = function() {
        var t = new eui.Label;
        return this.txtCountdown = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 27,
        t.text = "00:00",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.verticalAlign = "middle",
        t.x = 31.524,
        t.y = 536.5,
        t
    },
    s.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 16773461,
        t.x = 847.84,
        t.y = 494.84,
        t
    },
    s.txtItem2_i = function() {
        var t = new eui.Label;
        return this.txtItem2 = t,
        t.size = 22,
        t.text = "999",
        t.textColor = 16773461,
        t.x = 489,
        t.y = 493.508,
        t
    },
    s._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.btnHelp_i(), this.btnClose_i()],
        t
    },
    s._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "mingyi_assist_btnhelp_png",
        t.x = 129,
        t.y = 4,
        t
    },
    s.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MingyiUpSkin.exml"] = window.MingyiUpSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["txtFightTime", "btnAddFightTime", "txtItem", "btnAddItem", "btnPet", "btnCure", "btnFight", "btnGetWu", "btnWu", "btnGetTe", "btnTe", "btnGetKe", "btnKe", "btnDifficulty1", "imgDifficulty1", "btnDifficulty2", "imgDifficulty2", "btnDifficulty3", "imgDifficulty3", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(i, t);
    var n = i.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "bg_jpg",
        t.top = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -18,
        t.width = 1054,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.txtFightTime_i(), this.btnAddFightTime_i(), this._Image5_i(), this.txtItem_i(), this._Image6_i(), this.btnAddItem_i(), this.btnPet_i(), this.btnCure_i(), this.btnFight_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this.btnGetWu_i(), this.btnWu_i(), this._Image10_i(), this.btnGetTe_i(), this.btnTe_i(), this._Image11_i(), this.btnGetKe_i(), this.btnKe_i(), this.btnDifficulty1_i(), this.imgDifficulty1_i(), this.btnDifficulty2_i(), this.imgDifficulty2_i(), this.btnDifficulty3_i(), this.imgDifficulty3_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_up_img_png",
        t.x = 264,
        t.y = 448,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_pet_png",
        t.x = 178,
        t.y = 0,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_up_numbg_png",
        t.x = 200,
        t.y = 578,
        t
    },
    n.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.size = 18,
        t.text = "当前剩余挑战次数：4/5",
        t.textColor = 16766349,
        t.x = 242,
        t.y = 585,
        t
    },
    n.btnAddFightTime_i = function() {
        var t = new eui.Image;
        return this.btnAddFightTime = t,
        t.source = "mingyi_supply_btnaddfighttime_png",
        t.x = 447,
        t.y = 577,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_up_numbg_png",
        t.x = 575,
        t.y = 578,
        t
    },
    n.txtItem_i = function() {
        var t = new eui.Label;
        return this.txtItem = t,
        t.size = 18,
        t.text = "当前拥有圣洁之羽    ：5555",
        t.textColor = 16766349,
        t.width = 229.958,
        t.x = 590,
        t.y = 585,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_up_1718527_png",
        t.x = 742,
        t.y = 581,
        t
    },
    n.btnAddItem_i = function() {
        var t = new eui.Image;
        return this.btnAddItem = t,
        t.source = "mingyi_supply_btnaddfighttime_png",
        t.x = 822,
        t.y = 577,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "mingyi_assist_btnpet_png",
        t.x = 0,
        t.y = 266,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "mingyi_assist_brncure_png",
        t.x = 0,
        t.y = 340,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "mingyi_change_btnfight1_png",
        t.x = 424,
        t.y = 490,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_up_nlds_png",
        t.x = 474,
        t.y = 7,
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_up_my15gsjzyjkdhdwjnzstxzskyzdyg_xzkgndkyjkhdsjzydsde_png",
        t.x = 147,
        t.y = 66,
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_up_itembg1_png",
        t.x = 862,
        t.y = 144,
        t
    },
    n.btnGetWu_i = function() {
        var t = new eui.Image;
        return this.btnGetWu = t,
        t.source = "mingyi_up_btngetke_png",
        t.x = 950,
        t.y = 193,
        t
    },
    n.btnWu_i = function() {
        var t = new eui.Image;
        return this.btnWu = t,
        t.source = "mingyi_up_btnwu_png",
        t.x = 912,
        t.y = 176,
        t
    },
    n._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_up_itembg1_png",
        t.x = 892,
        t.y = 276,
        t
    },
    n.btnGetTe_i = function() {
        var t = new eui.Image;
        return this.btnGetTe = t,
        t.source = "mingyi_up_btngetke_png",
        t.x = 979,
        t.y = 326,
        t
    },
    n.btnTe_i = function() {
        var t = new eui.Image;
        return this.btnTe = t,
        t.source = "mingyi_up_btnte_png",
        t.x = 943,
        t.y = 307,
        t
    },
    n._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_up_itembg1_png",
        t.x = 863,
        t.y = 398,
        t
    },
    n.btnGetKe_i = function() {
        var t = new eui.Image;
        return this.btnGetKe = t,
        t.source = "mingyi_up_btngetke_png",
        t.x = 952,
        t.y = 447,
        t
    },
    n.btnKe_i = function() {
        var t = new eui.Image;
        return this.btnKe = t,
        t.source = "mingyi_up_btnke_png",
        t.x = 912,
        t.y = 430,
        t
    },
    n.btnDifficulty1_i = function() {
        var t = new eui.Image;
        return this.btnDifficulty1 = t,
        t.source = "mingyi_up_1_png",
        t.x = 108,
        t.y = 157,
        t
    },
    n.imgDifficulty1_i = function() {
        var t = new eui.Image;
        return this.imgDifficulty1 = t,
        t.source = "mingyi_up_btndifficulty1_png",
        t.visible = !0,
        t.x = 100,
        t.y = 148,
        t
    },
    n.btnDifficulty2_i = function() {
        var t = new eui.Image;
        return this.btnDifficulty2 = t,
        t.source = "mingyi_up_2_png",
        t.x = 108,
        t.y = 260,
        t
    },
    n.imgDifficulty2_i = function() {
        var t = new eui.Image;
        return this.imgDifficulty2 = t,
        t.source = "mingyi_up_btndifficulty2_png",
        t.visible = !0,
        t.x = 100,
        t.y = 251,
        t
    },
    n.btnDifficulty3_i = function() {
        var t = new eui.Image;
        return this.btnDifficulty3 = t,
        t.source = "mingyi_up_3_png",
        t.x = 108,
        t.y = 362,
        t
    },
    n.imgDifficulty3_i = function() {
        var t = new eui.Image;
        return this.imgDifficulty3 = t,
        t.source = "mingyi_up_btndifficulty3_png",
        t.visible = !0,
        t.x = 100,
        t.y = 353,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image12_i(), this.btnClose_i()],
        t
    },
    n._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "mingyi_main_up_bg_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.visible = !1,
        t
    },
    i
} (eui.Skin);