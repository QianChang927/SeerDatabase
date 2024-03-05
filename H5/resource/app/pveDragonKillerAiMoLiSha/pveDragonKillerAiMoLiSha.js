var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
pveDragonKillerAiMoLiSha; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "pveDragonKillerAiMoLiSha.MainPanel",
        t.LEVEL1_PANEL = "pveDragonKillerAiMoLiSha.Level1Panel",
        t.LEVEL2_PANEL = "pveDragonKillerAiMoLiSha.Level2Panel",
        t.LEVEL3_PANEL = "pveDragonKillerAiMoLiSha.Level3Panel",
        t.UP_PANEL = "pveDragonKillerAiMoLiSha.UpPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "pveDragonKillerAiMoLiSha.ModuleConst")
} (pveDragonKillerAiMoLiSha || (pveDragonKillerAiMoLiSha = {}));
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
pveDragonKillerAiMoLiSha; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this;
            return n.service.setValues([AttrConst.forever_amls_getState, AttrConst.forever_amls_taskState, AttrConst.forever_amls_level1WinTime, AttrConst.forever_amls_level2JinDu, AttrConst.forever_amls_level3StartTime, AttrConst.forever_amls_level3HasDefeatBossState], [AttrConst.daily_amls_level1FightTime, AttrConst.daily_amls_level2FightTime, AttrConst.daily_amls_level3FightTime, AttrConst.daily_amls_UpFightTime, AttrConst.daily_amls_level2Boss1HasFightTime, AttrConst.daily_amls_level2Boss2HasFightTime, AttrConst.daily_amls_level2Boss3HasFightTime, AttrConst.daily_amls_level2Boss4HasFightTime]),
            n.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.LEVEL1_PANEL
            },
            {
                panelName: t.ModuleConst.LEVEL2_PANEL
            },
            {
                panelName: t.ModuleConst.LEVEL3_PANEL
            },
            {
                panelName: t.ModuleConst.UP_PANEL
            }]),
            n
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.PveDragonKillerAiMoLiSha = e,
    __reflect(e.prototype, "pveDragonKillerAiMoLiSha.PveDragonKillerAiMoLiSha")
} (pveDragonKillerAiMoLiSha || (pveDragonKillerAiMoLiSha = {}));
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
pveDragonKillerAiMoLiSha; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = AiMoLiSaLevel1PanelSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                BuyProductManager.buyProductBySocket(252738,
                function() {
                    SocketConnection.sendByQueue(46320, [56, 1],
                    function() {
                        t.service.updateValues().then(function() {
                            BubblerManager.getInstance().showText("一键通关成功"),
                            t.service.backToMainPanel()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                BuyProductManager.buyProduct("252737_11212",
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                0 == t.numFightTime ? BubblerManager.getInstance().showText("今日可对战次数不足!") : (t.numOldWinTime = t.numWinTime, FightManager.fightNoMapBoss("", 12051))
            },
            this)
        },
        e.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        e.prototype.backFromFight = function() {
            var t = this;
            this.service.updateValues().then(function() {
                t.numWinTime == t.numOldWinTime ? Alarm.show("没有完成天邪龙皇的试炼，请再次尝试。") : 3 == t.numWinTime && Alarm.show("已完成屠龙秘武。",
                function() {
                    t.service.backToMainPanel()
                })
            })
        },
        e.prototype.update = function() {
            this.numWinTime = this.service.getValue(AttrConst.forever_amls_level1WinTime),
            this.numFightTime = 5 - this.service.getValue(AttrConst.daily_amls_level1FightTime),
            this.txtWinTime.text = this.numWinTime + "/3",
            this.txtFightTime.text = this.numFightTime + "",
            DisplayUtil.setEnabled(this.btnAddFightTime, this.numFightTime <= 0, !0)
        },
        e.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        e
    } (BasicPanel);
    t.Level1Panel = e,
    __reflect(e.prototype, "pveDragonKillerAiMoLiSha.Level1Panel")
} (pveDragonKillerAiMoLiSha || (pveDragonKillerAiMoLiSha = {}));
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
pveDragonKillerAiMoLiSha; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = AiMoLiSaLevel2PanelSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.addEvent()
        },
        e.prototype.addEvent = function() {
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
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                BuyProductManager.buyProductBySocket(252741,
                function() {
                    SocketConnection.sendByQueue(46320, [56, 2],
                    function() {
                        t.service.updateValues().then(function() {
                            BubblerManager.getInstance().showText("一键通关成功"),
                            t.service.backToMainPanel()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                BuyProductManager.buyProduct("252739_11213",
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProductBySocket(252740,
                function() {
                    SocketConnection.sendByQueue(46320, [60, 0],
                    function() {
                        t.service.updateValues().then(function() {
                            t.numJinDu = t.service.getValue(AttrConst.forever_amls_level2JinDu),
                            t.numJinDu >= 100 ? Alarm.show("已完成弑龙利爪。",
                            function() {
                                t.service.backToMainPanel()
                            }) : t.update()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight1,
            function() {
                t.fight(1)
            },
            this),
            ImageButtonUtil.add(this.btnFight2,
            function() {
                t.fight(2)
            },
            this),
            ImageButtonUtil.add(this.btnFight3,
            function() {
                t.fight(3)
            },
            this),
            ImageButtonUtil.add(this.btnFight4,
            function() {
                t.fight(4)
            },
            this)
        },
        e.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        e.prototype.backFromFight = function() {
            var t = this;
            this.service.updateValues().then(function() {
                t.oldJinDu == t.numJinDu ? Alarm.show("很遗憾挑战失败，请再接再厉！") : t.numJinDu >= 100 && Alarm.show("已完成弑龙利爪。",
                function() {
                    t.service.backToMainPanel()
                })
            })
        },
        e.prototype.fight = function(t) {
            0 == this.numFightTime ? BubblerManager.getInstance().showText("今日可对战次数不足！") : (this.oldJinDu = this.numJinDu, FightManager.fightNoMapBoss("", 12051 + t))
        },
        e.prototype.update = function() {
            this.numFightTime = 8 - this.service.getValue(AttrConst.daily_amls_level2FightTime),
            this.numJinDu = this.service.getValue(AttrConst.forever_amls_level2JinDu),
            this.txtFightTime.text = this.numFightTime + "",
            this.txtJinDu.text = this.numJinDu + "/100",
            DisplayUtil.setEnabled(this.btnAddFightTime, this.numFightTime <= 0, !0)
        },
        e.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        e
    } (BasicPanel);
    t.Level2Panel = e,
    __reflect(e.prototype, "pveDragonKillerAiMoLiSha.Level2Panel")
} (pveDragonKillerAiMoLiSha || (pveDragonKillerAiMoLiSha = {}));
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
pveDragonKillerAiMoLiSha; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.done = !1,
            e.skinName = AiMoLiSaLevel3PanelSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFastFight1,
            function() {
                BuyProductManager.buyProductBySocket(252743,
                function() {
                    SocketConnection.sendByQueue(46320, [57, 1],
                    function() {
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastFight2,
            function() {
                BuyProductManager.buyProductBySocket(252743,
                function() {
                    SocketConnection.sendByQueue(46320, [57, 2],
                    function() {
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastFight3,
            function() {
                BuyProductManager.buyProductBySocket(252743,
                function() {
                    SocketConnection.sendByQueue(46320, [57, 3],
                    function() {
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                BuyProductManager.buyProductBySocket(252744,
                function() {
                    SocketConnection.sendByQueue(46320, [56, 3],
                    function() {
                        t.service.updateValues().then(function() {
                            BubblerManager.getInstance().showText("一键通关成功"),
                            Alarm.show("已完成龙族杀手，可以领取艾莫莉萨了哦！",
                            function() {
                                t.done = !0,
                                t.service.backToMainPanel()
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProduct("252742_11214",
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight1,
            function() {
                t.fight(1)
            },
            this),
            ImageButtonUtil.add(this.btnFight2,
            function() {
                t.fight(2)
            },
            this),
            ImageButtonUtil.add(this.btnFight3,
            function() {
                t.fight(3)
            },
            this)
        },
        e.prototype.removed = function() {
            this.service.unregisterClock(this.txtCountdown)
        },
        e.prototype.fight = function(t) {
            0 == this.numFightTime ? BubblerManager.getInstance().showText("今日可对战次数不足！") : 0 == this.startTime ? SocketConnection.sendByQueue(46320, [58, 1],
            function() {
                FightManager.fightNoMapBoss("", 12055 + t)
            }) : FightManager.fightNoMapBoss("", 12055 + t)
        },
        e.prototype.update = function() {
            var t = this;
            if (!this.done) {
                this.numFightTime = 10 - this.service.getValue(AttrConst.daily_amls_level3FightTime),
                this.txtFightTime.text = this.numFightTime + "/10",
                DisplayUtil.setEnabled(this.btnAdd, this.numFightTime <= 0, !0);
                var e = this.service.getValue(AttrConst.forever_amls_level3HasDefeatBossState);
                this.numWinTime1 = 255 & e,
                this.numWinTime2 = e >> 8 & 255,
                this.numWinTime3 = e >> 16 & 255;
                for (var i = 1; 4 > i; i++) this["txtWinTime" + i].text = this["numWinTime" + i] + "/3",
                DisplayUtil.setEnabled(this["btnFastFight" + i], this["numWinTime" + i] < 3, !0),
                this["btnFight" + i].touchEnabled = this["numWinTime" + i] < 3;
                if (3 == this.service.getValue(AttrConst.forever_amls_taskState)) return void Alarm.show("已完成龙族杀手，可以领取艾莫莉萨了哦！",
                function() {
                    t.done = !0,
                    t.service.backToMainPanel()
                });
                this.startTime = this.service.getValue(AttrConst.forever_amls_level3StartTime),
                0 != this.startTime && (this.timeHasPass = SystemTimerManager.sysBJDate.getTime() / 1e3 - this.startTime, this.timeHasPass > 601 ? (SocketConnection.sendByQueue(46320, [58, 2]), Alarm.show("艾莫莉萨没有及时击败3位长老，挑战失败！",
                function() {
                    t.updateValues()
                })) : (this.service.unregisterClock(this.txtCountdown), this.startCountdown(600 - this.timeHasPass)))
            }
        },
        e.prototype.destroy = function() {
            this.service.unregisterClock(this.txtCountdown),
            t.prototype.destroy.call(this)
        },
        e.prototype.startCountdown = function(t) {
            10 > t && t++,
            this.service.registerClock(SystemTimerManager.sysBJDate.getTime() / 1e3 + t,
            function() {
                FightManager.isFighting || (SocketConnection.sendByQueue(46320, [58, 2]), Alarm.show("艾莫莉萨没有及时击败3位长老，挑战失败！"))
            },
            this, this.txtCountdown)
        },
        e
    } (BasicPanel);
    t.Level3Panel = e,
    __reflect(e.prototype, "pveDragonKillerAiMoLiSha.Level3Panel")
} (pveDragonKillerAiMoLiSha || (pveDragonKillerAiMoLiSha = {}));
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
pveDragonKillerAiMoLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = AiMoLiSaMainPanelSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.service.closeModule()
            },
            this),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3573)
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                BuyProductManager.buyProductBySocket(252736,
                function() {
                    SocketConnection.sendByQueue(46320, [55, 2],
                    function() {
                        e.updateValues()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnLevel1,
            function() {
                e.service.openPanel(t.ModuleConst.LEVEL1_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnLevel2,
            function() {
                e.service.openPanel(t.ModuleConst.LEVEL2_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnLevel3,
            function() {
                e.service.openPanel(t.ModuleConst.LEVEL3_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                SocketConnection.sendByQueue(46320, [55, 1],
                function() {
                    e.updateValues()
                })
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                e.service.openPanel(t.ModuleConst.UP_PANEL)
            },
            this)
        },
        i.prototype.update = function() {
            var t = 1 == (1 & this.service.getValue(AttrConst.forever_amls_getState)),
            e = t ? 3 : this.service.getValue(AttrConst.forever_amls_taskState);
            this.btnLevel1.visible = 0 == e,
            this.btnLevel2.visible = 1 >= e,
            this.btnLevel3.visible = 2 >= e,
            this.btnLevel1End.visible = e >= 1,
            this.btnLevel2End.visible = e >= 2,
            this.btnLevel3End.visible = 3 == e,
            DisplayUtil.setEnabled(this.btnLevel2, e >= 1, 1 > e),
            DisplayUtil.setEnabled(this.btnLevel3, e >= 2, 2 > e),
            this.btnOneKey.visible = 2 >= e,
            this.btnGetPet.visible = 3 == e && !t,
            this.btnUp.visible = t
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "pveDragonKillerAiMoLiSha.MainPanel")
} (pveDragonKillerAiMoLiSha || (pveDragonKillerAiMoLiSha = {}));
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
pveDragonKillerAiMoLiSha; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = AiMoLiSaUpPanelSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.addEvent(),
            this.setDifficulty(1),
            this.txtItem.text = ItemManager.getNumByID(1715963) + "",
            this.service.registerItemUpdateForText(1715963, this.txtItem, this)
        },
        e.prototype.destroy = function() {
            this.service.unregisterItems(this),
            t.prototype.destroy.call(this)
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
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
                t.service.showSkillInfo(31827)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                t.service.showPetEff(3573)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                t.service.showMarkInfo(41188)
            },
            this),
            ImageButtonUtil.add(this.btnGetWu,
            function() {
                t.isItemEnough() && t.isFirstPet() && SocketConnection.sendByQueue(46320, [59, 3],
                function() {
                    t.updateValues()
                })
            },
            this),
            ImageButtonUtil.add(this.btnGetTe,
            function() {
                t.isItemEnough() && t.isFirstPet() && SocketConnection.sendByQueue(46320, [59, 2],
                function() {
                    t.updateValues()
                })
            },
            this),
            ImageButtonUtil.add(this.btnGetKe,
            function() {
                t.isItemEnough() && t.isFirstPet() && SocketConnection.sendByQueue(46320, [59, 1],
                function() {
                    t.updateValues()
                })
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                BuyProductManager.buyProduct("252746_11215",
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                BuyProductManager.buyProduct("252745_11216",
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                },
                t, 1715963)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                0 == t.numFightTime ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : FightManager.fightNoMapBoss("", 12058 + t.numdifficulty)
            },
            this)
        },
        e.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        e.prototype.setDifficulty = function(t) {
            this.numdifficulty = t;
            for (var e = 1; 3 >= e; e++) this["imgDifficulty" + e].visible = e == t
        },
        e.prototype.isFirstPet = function() {
            var t = this;
            return PetManager.isDefaultPet(3573) ? !0 : (Alarm.show("需要将艾莫莉萨置于首发才能获得能力提升哦！",
            function() {
                t.service.showPetBag()
            }), !1)
        },
        e.prototype.isItemEnough = function() {
            return ItemManager.getNumByID(1715963) < 15 ? (BubblerManager.getInstance().showText("所需物品数量不足！"), !1) : !0
        },
        e.prototype.update = function() {
            var t = MainManager.actorInfo.isVip ? 5 : 3;
            this.numFightTime = t - this.service.getValue(AttrConst.daily_amls_UpFightTime),
            this.txtFightTime.text = "当前剩余挑战次数：" + this.numFightTime + "/" + t,
            DisplayUtil.setEnabled(this.btnAddFightTime, this.numFightTime <= 0, !0);
            var e = this.service.getValue(AttrConst.forever_amls_getState),
            i = 1 == KTool.getBit(e, 2),
            n = 1 == KTool.getBit(e, 3),
            a = 1 == KTool.getBit(e, 4);
            DisplayUtil.setEnabled(this.btnGetKe, !i, i),
            DisplayUtil.setEnabled(this.btnGetTe, !n, n),
            DisplayUtil.setEnabled(this.btnGetWu, !a, a),
            ItemManager.updateItems([1715963])
        },
        e
    } (BasicPanel);
    t.UpPanel = e,
    __reflect(e.prototype, "pveDragonKillerAiMoLiSha.UpPanel")
} (pveDragonKillerAiMoLiSha || (pveDragonKillerAiMoLiSha = {}));
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
generateEUI.paths["resource/eui_skins/Level1PanelSkin.exml"] = window.AiMoLiSaLevel1PanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnAddFightTime", "btnFight", "btnOneKey", "btnPet", "btnCure", "txtWinTime", "txtFightTime", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "main_panel_bg_jpg",
        t.top = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.width = 1072,
        t.y = 16,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnAddFightTime_i(), this.btnFight_i(), this.btnOneKey_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.btnPet_i(), this.btnCure_i(), this._Label1_i(), this.txtWinTime_i(), this.txtFightTime_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "level1_panel_pet_png",
        t.x = 69,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "level1_panel_numbg_png",
        t.visible = !0,
        t.x = 414,
        t.y = 560,
        t
    },
    i.btnAddFightTime_i = function() {
        var t = new eui.Image;
        return this.btnAddFightTime = t,
        t.source = "level1_panel_btnaddfighttime_png",
        t.x = 623,
        t.y = 559,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "level1_panel_btnfight_png",
        t.x = 412,
        t.y = 470,
        t
    },
    i.btnOneKey_i = function() {
        var t = new eui.Image;
        return this.btnOneKey = t,
        t.source = "main_panel_btnonekey_png",
        t.x = 969,
        t.y = 473,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "level1_panel_txlhdgjxcs10hgbjbtlj3cjkjswddll__png",
        t.x = 147,
        t.y = 49,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "level1_panel_title_png",
        t.x = 483,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "level1_panel_ci_png",
        t.visible = !0,
        t.x = 7,
        t.y = 520,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "level1_panel_btnpet_png",
        t.x = 0,
        t.y = 250,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "level1_panel_btncure_png",
        t.x = 0,
        t.y = 324,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "当前剩余挑战次数：",
        t.textColor = 12564735,
        t.visible = !0,
        t.x = 415,
        t.y = 566,
        t
    },
    i.txtWinTime_i = function() {
        var t = new eui.Label;
        return this.txtWinTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "3/3",
        t.textColor = 16773461,
        t.x = 48,
        t.y = 554,
        t
    },
    i.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 12564735,
        t.x = 588,
        t.y = 567.215,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.btnClose_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Level2PanelSkin.exml"] = window.AiMoLiSaLevel2PanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnAddFightTime", "btnOneKey", "btnFight1", "btnFight2", "btnFight4", "btnFight3", "btnPet", "btnCure", "txtFightTime", "txtJinDu", "btnAdd", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "main_panel_bg_jpg",
        t.top = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.width = 1072,
        t.y = 17,
        t.elementsContent = [this._Image2_i(), this.btnAddFightTime_i(), this.btnOneKey_i(), this.btnFight1_i(), this.btnFight2_i(), this.btnFight4_i(), this.btnFight3_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.btnPet_i(), this.btnCure_i(), this._Label1_i(), this.txtFightTime_i(), this.txtJinDu_i(), this.btnAdd_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "level2_panel_numbg_png",
        t.x = 399,
        t.y = 559,
        t
    },
    i.btnAddFightTime_i = function() {
        var t = new eui.Image;
        return this.btnAddFightTime = t,
        t.source = "level1_panel_btnaddfighttime_png",
        t.x = 623,
        t.y = 558,
        t
    },
    i.btnOneKey_i = function() {
        var t = new eui.Image;
        return this.btnOneKey = t,
        t.source = "main_panel_btnonekey_png",
        t.x = 969,
        t.y = 472,
        t
    },
    i.btnFight1_i = function() {
        var t = new eui.Image;
        return this.btnFight1 = t,
        t.source = "level2_panel_1_png",
        t.x = 149,
        t.y = 110,
        t
    },
    i.btnFight2_i = function() {
        var t = new eui.Image;
        return this.btnFight2 = t,
        t.source = "level2_panel_3_png",
        t.x = 547,
        t.y = 110,
        t
    },
    i.btnFight4_i = function() {
        var t = new eui.Image;
        return this.btnFight4 = t,
        t.source = "level2_panel_4_png",
        t.x = 547,
        t.y = 309,
        t
    },
    i.btnFight3_i = function() {
        var t = new eui.Image;
        return this.btnFight3 = t,
        t.source = "level2_panel_2_png",
        t.x = 150,
        t.y = 310,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "level2_panel_djtxjkjrtzmtsctzry1gbosszsdhzj5dlxjd_zhmctztybosslxjddhbsycz_png",
        t.visible = !0,
        t.x = 147,
        t.y = 48,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "level2_panel_title_png",
        t.x = 482,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "level2_panel_lxjd_png",
        t.visible = !0,
        t.x = 7,
        t.y = 520,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "level1_panel_btnpet_png",
        t.x = 0,
        t.y = 249,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "level1_panel_btncure_png",
        t.x = 0,
        t.y = 323,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "当前剩余挑战次数：",
        t.textColor = 12107007,
        t.x = 415,
        t.y = 565,
        t
    },
    i.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 12106751,
        t.x = 588,
        t.y = 566.994,
        t
    },
    i.txtJinDu_i = function() {
        var t = new eui.Label;
        return this.txtJinDu = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "100/100",
        t.textColor = 16773461,
        t.x = 38,
        t.y = 551.608,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "level1_panel_btnaddfighttime_png",
        t.x = 168.887,
        t.y = 548.39,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.btnClose_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Level3PanelSkin.exml"] = window.AiMoLiSaLevel3PanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnOneKey", "btnFight3", "btnFastFight3", "btnFight2", "btnFastFight2", "btnFight1", "btnFastFight1", "btnPet", "btnCure", "txtFightTime", "txtWinTime3", "txtWinTime2", "txtWinTime1", "txtCountdown", "btnAdd", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "main_panel_bg_jpg",
        t.top = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.width = 1072,
        t.y = 16,
        t.elementsContent = [this.btnOneKey_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnFight3_i(), this.btnFastFight3_i(), this.btnFight2_i(), this.btnFastFight2_i(), this.btnFight1_i(), this.btnFastFight1_i(), this._Image5_i(), this.btnPet_i(), this.btnCure_i(), this.txtFightTime_i(), this.txtWinTime3_i(), this.txtWinTime2_i(), this.txtWinTime1_i(), this.txtCountdown_i(), this.btnAdd_i()],
        t
    },
    i.btnOneKey_i = function() {
        var t = new eui.Image;
        return this.btnOneKey = t,
        t.source = "main_panel_btnonekey_png",
        t.x = 969,
        t.y = 473,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "level3_panel_djjkjrtz10fznljjblzsjtg3cjktgbgk_png",
        t.visible = !0,
        t.x = 147,
        t.y = 49,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "level3_panel_lzss_png",
        t.x = 483,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "level3_panel_sycs_png",
        t.x = 7,
        t.y = 521,
        t
    },
    i.btnFight3_i = function() {
        var t = new eui.Image;
        return this.btnFight3 = t,
        t.source = "level3_panel_3_png",
        t.x = 734,
        t.y = 107,
        t
    },
    i.btnFastFight3_i = function() {
        var t = new eui.Image;
        return this.btnFastFight3 = t,
        t.source = "level3_panel_btnfight1_png",
        t.x = 780,
        t.y = 469,
        t
    },
    i.btnFight2_i = function() {
        var t = new eui.Image;
        return this.btnFight2 = t,
        t.source = "level3_panel_2_png",
        t.x = 442,
        t.y = 170,
        t
    },
    i.btnFastFight2_i = function() {
        var t = new eui.Image;
        return this.btnFastFight2 = t,
        t.source = "level3_panel_btnfight1_png",
        t.x = 487,
        t.y = 532,
        t
    },
    i.btnFight1_i = function() {
        var t = new eui.Image;
        return this.btnFight1 = t,
        t.source = "level3_panel_1_png",
        t.x = 149,
        t.y = 121,
        t
    },
    i.btnFastFight1_i = function() {
        var t = new eui.Image;
        return this.btnFastFight1 = t,
        t.source = "level3_panel_btnfight1_png",
        t.x = 193,
        t.y = 469,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "level3_panel_time_png",
        t.visible = !0,
        t.x = 399,
        t.y = 67,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "level1_panel_btnpet_png",
        t.x = 0,
        t.y = 250,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "level1_panel_btncure_png",
        t.x = 0,
        t.y = 324,
        t
    },
    i.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "10/10",
        t.textColor = 16773461,
        t.x = 44,
        t.y = 554,
        t
    },
    i.txtWinTime3_i = function() {
        var t = new eui.Label;
        return this.txtWinTime3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "3/3",
        t.textColor = 16777215,
        t.x = 850,
        t.y = 399,
        t
    },
    i.txtWinTime2_i = function() {
        var t = new eui.Label;
        return this.txtWinTime2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "3/3",
        t.textColor = 16777215,
        t.x = 557,
        t.y = 462,
        t
    },
    i.txtWinTime1_i = function() {
        var t = new eui.Label;
        return this.txtWinTime1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "3/3",
        t.textColor = 16777215,
        t.x = 265,
        t.y = 413,
        t
    },
    i.txtCountdown_i = function() {
        var t = new eui.Label;
        return this.txtCountdown = t,
        t.fontFamily = "MFShangHei",
        t.size = 40,
        t.text = "00:00",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 494,
        t.y = 107.62,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "level1_panel_btnaddfighttime_png",
        t.x = 157.22,
        t.y = 548.39,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.btnClose_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.AiMoLiSaMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnOneKey", "btnInfo", "btnUp", "btnLevel1", "btnLevel2", "btnLevel3", "btnLevel1End", "btnLevel2End", "btnLevel3End", "btnGetPet", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "main_panel_bg_jpg",
        t.top = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnOneKey_i(), this.btnInfo_i(), this.btnUp_i(), this.btnLevel1_i(), this.btnLevel2_i(), this.btnLevel3_i(), this.btnLevel1End_i(), this.btnLevel2End_i(), this.btnLevel3End_i(), this.btnGetPet_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "main_panel_pet_png",
        t.x = 0,
        t.y = 40,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "main_panel_title_png",
        t.x = 502,
        t.y = 0,
        t
    },
    i.btnOneKey_i = function() {
        var t = new eui.Image;
        return this.btnOneKey = t,
        t.source = "main_panel_btnonekey1_png",
        t.visible = !0,
        t.x = 992,
        t.y = 489,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "main_panel_btninfo_png",
        t.visible = !0,
        t.x = 34,
        t.y = 539,
        t
    },
    i.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "main_panel_btnup_png",
        t.visible = !1,
        t.x = 993,
        t.y = 488,
        t
    },
    i.btnLevel1_i = function() {
        var t = new eui.Image;
        return this.btnLevel1 = t,
        t.source = "main_panel_1_png",
        t.visible = !1,
        t.x = 702,
        t.y = 217,
        t
    },
    i.btnLevel2_i = function() {
        var t = new eui.Image;
        return this.btnLevel2 = t,
        t.source = "main_panel_2_png",
        t.visible = !1,
        t.x = 717,
        t.y = 333,
        t
    },
    i.btnLevel3_i = function() {
        var t = new eui.Image;
        return this.btnLevel3 = t,
        t.source = "main_panel_3_png",
        t.visible = !1,
        t.x = 645,
        t.y = 454,
        t
    },
    i.btnLevel1End_i = function() {
        var t = new eui.Image;
        return this.btnLevel1End = t,
        t.source = "main_panel_1_d_png",
        t.visible = !1,
        t.x = 702,
        t.y = 216,
        t
    },
    i.btnLevel2End_i = function() {
        var t = new eui.Image;
        return this.btnLevel2End = t,
        t.source = "main_panel_2_d_png",
        t.visible = !1,
        t.x = 718,
        t.y = 332,
        t
    },
    i.btnLevel3End_i = function() {
        var t = new eui.Image;
        return this.btnLevel3End = t,
        t.source = "main_panel_3_d_png",
        t.visible = !1,
        t.x = 645,
        t.y = 453,
        t
    },
    i.btnGetPet_i = function() {
        var t = new eui.Image;
        return this.btnGetPet = t,
        t.source = "main_panel_btnget_png",
        t.visible = !1,
        t.x = 258,
        t.y = 487.935,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.btnClose_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/UpPanelSkin.exml"] = window.AiMoLiSaUpPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnAddFightTime", "btnAddItem", "btnPet", "btnCure", "btnFight", "btnGetWu", "btnWu", "btnGetTe", "btnTe", "btnGetKe", "btnKe", "btnDifficulty1", "imgDifficulty1", "btnDifficulty2", "imgDifficulty2", "btnDifficulty3", "imgDifficulty3", "txtFightTime", "txtItem", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "main_panel_bg_jpg",
        t.top = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.width = 1053,
        t.y = 16,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnAddFightTime_i(), this._Image4_i(), this._Image5_i(), this.btnAddItem_i(), this.btnPet_i(), this.btnCure_i(), this.btnFight_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.btnGetWu_i(), this.btnWu_i(), this._Image9_i(), this.btnGetTe_i(), this.btnTe_i(), this._Image10_i(), this.btnGetKe_i(), this.btnKe_i(), this.btnDifficulty1_i(), this.imgDifficulty1_i(), this.btnDifficulty2_i(), this.imgDifficulty2_i(), this.btnDifficulty3_i(), this.imgDifficulty3_i(), this.txtFightTime_i(), this.txtItem_i(), this._Label1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "up_panel_aimolisa_png",
        t.x = 264,
        t.y = 65,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "up_panel_addbg_png",
        t.x = 199,
        t.y = 562,
        t
    },
    i.btnAddFightTime_i = function() {
        var t = new eui.Image;
        return this.btnAddFightTime = t,
        t.source = "level1_panel_btnaddfighttime_png",
        t.x = 446,
        t.y = 561,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "up_panel_addbg_png",
        t.x = 574,
        t.y = 562,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "up_panel_xglz__png",
        t.x = 745.99,
        t.y = 567.87,
        t
    },
    i.btnAddItem_i = function() {
        var t = new eui.Image;
        return this.btnAddItem = t,
        t.source = "level1_panel_btnaddfighttime_png",
        t.x = 821,
        t.y = 561,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "level1_panel_btnpet_png",
        t.x = 0,
        t.y = 251,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "level1_panel_btncure_png",
        t.x = 0,
        t.y = 325,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "level1_panel_btnfight_png",
        t.x = 421,
        t.y = 471,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "up_panel_title_png",
        t.x = 482,
        t.y = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "up_panel_my15gxlgzjkdhdwjnzstxzskyzdyg_xzkgndkyjkhdxlgzdsde_png",
        t.x = 146,
        t.y = 50,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "up_panel_itembg1_png",
        t.x = 871,
        t.y = 128,
        t
    },
    i.btnGetWu_i = function() {
        var t = new eui.Image;
        return this.btnGetWu = t,
        t.source = "up_panel_btngetke_png",
        t.x = 949,
        t.y = 177,
        t
    },
    i.btnWu_i = function() {
        var t = new eui.Image;
        return this.btnWu = t,
        t.source = "up_panel_btnwu_png",
        t.x = 911,
        t.y = 160,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "up_panel_itembg1_png",
        t.x = 900,
        t.y = 260,
        t
    },
    i.btnGetTe_i = function() {
        var t = new eui.Image;
        return this.btnGetTe = t,
        t.source = "up_panel_btngetke_png",
        t.x = 978,
        t.y = 310,
        t
    },
    i.btnTe_i = function() {
        var t = new eui.Image;
        return this.btnTe = t,
        t.source = "up_panel_btnte_png",
        t.x = 942,
        t.y = 291,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "up_panel_itembg1_png",
        t.x = 872,
        t.y = 382,
        t
    },
    i.btnGetKe_i = function() {
        var t = new eui.Image;
        return this.btnGetKe = t,
        t.source = "up_panel_btngetke_png",
        t.x = 951,
        t.y = 431,
        t
    },
    i.btnKe_i = function() {
        var t = new eui.Image;
        return this.btnKe = t,
        t.source = "up_panel_btnke_png",
        t.x = 911,
        t.y = 413,
        t
    },
    i.btnDifficulty1_i = function() {
        var t = new eui.Image;
        return this.btnDifficulty1 = t,
        t.source = "up_panel_1_png",
        t.visible = !0,
        t.x = 113.094,
        t.y = 163.732,
        t
    },
    i.imgDifficulty1_i = function() {
        var t = new eui.Image;
        return this.imgDifficulty1 = t,
        t.source = "up_panel_1_1_png",
        t.visible = !1,
        t.x = 103.854,
        t.y = 154.548,
        t
    },
    i.btnDifficulty2_i = function() {
        var t = new eui.Image;
        return this.btnDifficulty2 = t,
        t.source = "up_panel_2_png",
        t.x = 113.094,
        t.y = 270,
        t
    },
    i.imgDifficulty2_i = function() {
        var t = new eui.Image;
        return this.imgDifficulty2 = t,
        t.source = "up_panel_2_1_png",
        t.visible = !1,
        t.x = 103.854,
        t.y = 260.816,
        t
    },
    i.btnDifficulty3_i = function() {
        var t = new eui.Image;
        return this.btnDifficulty3 = t,
        t.source = "up_panel_3_png",
        t.x = 111.24,
        t.y = 378.928,
        t
    },
    i.imgDifficulty3_i = function() {
        var t = new eui.Image;
        return this.imgDifficulty3 = t,
        t.source = "up_panel_3_1_png",
        t.visible = !1,
        t.x = 102,
        t.y = 369.744,
        t
    },
    i.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.size = 18,
        t.text = "当前剩余挑战次数：4/5",
        t.textColor = 16777215,
        t.x = 241,
        t.y = 569,
        t
    },
    i.txtItem_i = function() {
        var t = new eui.Label;
        return this.txtItem = t,
        t.size = 18,
        t.text = "55",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 25.027,
        t.x = 777.97,
        t.y = 569,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "当前拥有邪龙骨爪:",
        t.textColor = 16777215,
        t.width = 160.609,
        t.x = 589,
        t.y = 569,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image11_i(), this.btnClose_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    e
} (eui.Skin);