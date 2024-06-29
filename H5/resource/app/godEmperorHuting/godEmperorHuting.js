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
godEmperorHuting; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.AttrConst.forever_pet_state, t.AttrConst.forever_secondItem_count, t.AttrConst.forever_third_attack_damage, t.AttrConst.forever_fourth_difficulty, t.AttrConst.forever_fourth_boss_defeated, t.AttrConst.forever_minwang_beat_turn, t.AttrConst.forever_curminwang], [t.AttrConst.daily_scond_times, t.AttrConst.daily_third_times, t.AttrConst.daily_fourth_times, t.AttrConst.daily_fifth_times]),
            i.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.LIEHUANG_CHULING_PANEL
            },
            {
                panelName: t.ModuleConst.CHONGSU_JIANLING_PNAEL
            },
            {
                panelName: t.ModuleConst.SHOWLIE_ZAIQI_PANEL
            },
            {
                panelName: t.ModuleConst.SHISHEN_ZHILU_PANEL
            },
            {
                panelName: t.ModuleConst.UPGRADE_ABILITY_PANEL
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.GodEmperorHuting = e,
    __reflect(e.prototype, "godEmperorHuting.GodEmperorHuting")
} (godEmperorHuting || (godEmperorHuting = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
godEmperorHuting; !
function(t) {
    var e = function() {
        function t() {}
        return t.forever_pet_state = 8693,
        t.forever_secondItem_count = 8694,
        t.forever_third_attack_damage = 8695,
        t.forever_fourth_difficulty = 8696,
        t.forever_fourth_boss_defeated = 8697,
        t.forever_minwang_beat_turn = 8698,
        t.forever_curminwang = 8699,
        t.daily_scond_times = 11161,
        t.daily_third_times = 11162,
        t.daily_fourth_times = 11163,
        t.daily_fifth_times = 11164,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "godEmperorHuting.AttrConst")
} (godEmperorHuting || (godEmperorHuting = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
godEmperorHuting; !
function(t) {
    var e = function() {
        function t() {}
        return t.EmperorHunting_CMD = 41752,
        t
    } ();
    t.CMDConst = e,
    __reflect(e.prototype, "godEmperorHuting.CMDConst")
} (godEmperorHuting || (godEmperorHuting = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
godEmperorHuting; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "godEmperorHuting.MainPanel",
        t.LIEHUANG_CHULING_PANEL = "godEmperorHuting.LieHuangChuLing",
        t.CHONGSU_JIANLING_PNAEL = "godEmperorHuting.ChongSuJianLing",
        t.SHOWLIE_ZAIQI_PANEL = "godEmperorHuting.ShouLieZaiQi",
        t.SHISHEN_ZHILU_PANEL = "godEmperorHuting.ShiShenZhiLu",
        t.UPGRADE_ABILITY_PANEL = "godEmperorHuting.UpgradeAbilityPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "godEmperorHuting.ModuleConst")
} (godEmperorHuting || (godEmperorHuting = {}));
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
godEmperorHuting; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.bossesId = [11304, 11305, 11306, 11307],
            i.itemNum = 0,
            i.skinName = t.ChongSuJianLingSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this);
            for (var i = 1; 4 >= i; i++) this["pet_selected_" + i].visible = !1;
            this.addEvents(),
            DisplayUtil.setEnabled(this.btnfight, !1, !0)
        },
        i.prototype.beforeUpdate = function() {
            for (var t = 1; 4 >= t; t++) this["pet_selected_" + t].visible = !1;
            return DisplayUtil.setEnabled(this.btnfight, !1, !0),
            Promise.resolve()
        },
        i.prototype.addEvents = function() {
            for (var e = this,
            i = function(t) {
                n["btn_" + t].addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    DisplayUtil.setEnabled(e.btnfight, !0, !1),
                    e.currentSelectId = t,
                    e["pet_selected_" + t].visible = !0;
                    for (var i = 1; 4 >= i; i++) i != t && (e["pet_selected_" + i].visible = !1)
                },
                n)
            },
            n = this, r = 1; 4 >= r; r++) i(r);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.setbtnFight, this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                var i = e.chanllegeMaxTime - e.service.getValue(t.AttrConst.daily_scond_times);
                return 0 >= i ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void FightManager.fightNoMapBoss("", e.bossesId[e.currentSelectId - 1])
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252031, 1,
                function() {
                    KTool.doExchange(10876, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252032, 1,
                function() {
                    KTool.doExchange(10877, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnvip,
            function() {
                tipsPop.TipsPop.openHelpPopById(66)
            },
            this)
        },
        i.prototype.setbtnFight = function() {
            if (FightManager.isWin) {
                DisplayUtil.setEnabled(this.btnfight, !1, !0);
                for (var t = 1; 4 >= t; t++) this["pet_selected_" + t].visible = !1;
                4 == this.currentSelectId ? Alarm.show("恭喜你获得了5个箭之精魄") : Alarm.show("恭喜你获得了" + this.currentSelectId + "个箭之精魄")
            } else DisplayUtil.setEnabled(this.btnfight, !0, !1)
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待")
        },
        i.prototype.update = function() {
            var e = this;
            this.chanllegeMaxTime = MainManager.actorInfo.isVip ? 5 : 3,
            this.leftTime = this.chanllegeMaxTime - this.service.getValue(t.AttrConst.daily_scond_times),
            this.itemNum = this.service.getValue(t.AttrConst.forever_secondItem_count);
            var i = this.service.getValue(t.AttrConst.forever_pet_state),
            n = 1 == KTool.getBit(i, 3),
            r = this.leftTime <= 0;
            if (DisplayUtil.setEnabled(this.btnadd, r, !r), n) return void Alarm.show("已完成重塑箭灵。",
            function() {
                EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, e.setbtnFight, e),
                e.service.backToMainPanel()
            });
            var _ = this.service.getValue(t.AttrConst.forever_pet_state);
            return 1 == KTool.getBit(_, 3) ? void Alarm.show("恭喜你收集到了足够的箭之精魄，成功重塑了箭灵！",
            function() {
                EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, e.setbtnFight, e),
                e.service.backToMainPanel()
            }) : (this.itemNumText.text = "箭之精魄：" + this.itemNum.toString(), void(this.timeLeftText.text = "剩余挑战次数：" + this.leftTime.toString() + "/" + this.chanllegeMaxTime.toString()))
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.setbtnFight, this)
        },
        i
    } (BasicPanel);
    t.ChongSuJianLing = e,
    __reflect(e.prototype, "godEmperorHuting.ChongSuJianLing")
} (godEmperorHuting || (godEmperorHuting = {}));
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
godEmperorHuting; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.LieHuangChuLingSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.addEvents(),
            this.update()
        },
        i.prototype.addEvents = function() {
            var t = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [636, 0, 0, 0, 0, 0])
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252030, 1,
                function() {
                    KTool.doExchange(10875, 1,
                    function() {
                        t.updateValues()
                    })
                },
                t) : void t.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                t.service.backToMainPanel()
            },
            this)
        },
        i.prototype.checkfinish = function() {
            var t = this;
            FightManager.isWin ? (Alarm.show("已完成猎皇初临。",
            function() {
                t.service.backToMainPanel(),
                Alarm.show("恭喜你击败了煊耀圣皇，通过了猎皇初临关卡！")
            }), EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this)) : Alarm.show("很遗憾挑战失败，请再接再厉！")
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待")
        },
        i.prototype.update = function() {
            var e = this,
            i = this.service.getValue(t.AttrConst.forever_pet_state),
            n = !!BitUtil.getBit(i, 2);
            if (n) return void Alarm.show("已完成猎皇初临。",
            function() {
                e.service.backToMainPanel(),
                EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, e.checkfinish, e),
                Alarm.show("恭喜你击败了煊耀圣皇，通过了猎皇初临关卡！")
            });
            var r = this.service.getValue(t.AttrConst.forever_pet_state);
            return 1 == KTool.getBit(r, 2) ? void Alarm.show("已完成猎皇初临。",
            function() {
                e.service.backToMainPanel(),
                EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, e.checkfinish, e),
                Alarm.show("恭喜你击败了煊耀圣皇，通过了猎皇初临关卡！")
            }) : void 0
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.LieHuangChuLing = e,
    __reflect(e.prototype, "godEmperorHuting.LieHuangChuLing")
} (godEmperorHuting || (godEmperorHuting = {}));
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
godEmperorHuting; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MainPanelSkin,
            i
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
            this.addEvents()
        },
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnclose,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3514)
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252029, 1,
                function() {
                    KTool.doExchange(10874, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnup,
            function() {
                e.service.openPanel(t.ModuleConst.UPGRADE_ABILITY_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn_1,
            function() {
                e.service.openPanel(t.ModuleConst.LIEHUANG_CHULING_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn_2,
            function() {
                e.service.openPanel(t.ModuleConst.CHONGSU_JIANLING_PNAEL)
            },
            this),
            ImageButtonUtil.add(this.btn_3,
            function() {
                e.service.openPanel(t.ModuleConst.SHOWLIE_ZAIQI_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn_4,
            function() {
                e.service.openPanel(t.ModuleConst.SHISHEN_ZHILU_PANEL)
            },
            this)
        },
        i.prototype.update = function() {
            for (var e = this.service.getValue(t.AttrConst.forever_pet_state), i = !!KTool.getBit(e, 1), n = 4; n > 0; n--) {
                var r = !!KTool.getBit(e, n + 1),
                _ = i || r;
                this["beat_" + n].visible = _,
                this["btn_" + n].touchEnabled = !_,
                this["btn_" + n].filters = null,
                4 > n && !r && DisplayUtil.setEnabled(this["btn_" + (n + 1)], r, !r)
            }
            this.btnyijian.visible = !i,
            this.btnup.visible = i
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "godEmperorHuting.MainPanel")
} (godEmperorHuting || (godEmperorHuting = {}));
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
godEmperorHuting; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.curSelectId = -1,
            i.skinName = t.ShiShenZhiLuSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            DisplayUtil.setEnabled(this.btnfight_2, !1, !0),
            this.addEvents(),
            this.initOldPveBtnClose(65, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this)
        },
        i.prototype.beforeUpdate = function() {
            for (var t = 1; 4 >= t; t++) this["selected_" + t].visible = !1;
            return DisplayUtil.setEnabled(this.btnfight_2, !1, !0),
            Promise.resolve()
        },
        i.prototype.addEvents = function() {
            var t = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.afterFight, this);
            for (var e = function(e) {
                i["pet_" + e].addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    DisplayUtil.setEnabled(t.btnfight_2, !0, !1),
                    DisplayUtil.setEnabled(t.btnbuy, !0, !1),
                    t.curSelectId = e,
                    t["selected_" + e].visible = !0;
                    for (var i = 1; 4 >= i; i++) i != e && (t["selected_" + i].visible = !1)
                },
                i)
            },
            i = this, n = 1; 4 >= n; n++) e(n);
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252035, 1,
                function() {
                    KTool.doExchange(10880, 1,
                    function() {
                        t.updateValues()
                    })
                },
                t) : void t.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252040, 1,
                function() {
                    KTool.doExchange(10885, 1,
                    function() {
                        t.updateValues()
                    })
                },
                t) : void t.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnreduce,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252041, 1,
                function() {
                    KTool.doExchange(10886, 1,
                    function() {
                        t.updateValues()
                    })
                },
                t) : void t.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnbuy,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252036 + (t.curSelectId - 1), 1,
                function() {
                    KTool.doExchange(10881 + (t.curSelectId - 1), 1,
                    function() {
                        t["selected_" + t.curSelectId].visible = !1,
                        t.curSelectId = -1,
                        t.updateValues()
                    })
                },
                t) : void t.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnfight_1,
            function() {
                FightManager.fightNoMapBoss("", t.curMinwang),
                t.curGroup = 1
            },
            this),
            ImageButtonUtil.add(this.btnfight_2,
            function() {
                if (t.curGroup = 2, t.leftTime > 0) {
                    var e = 11316 + 4 * (t.curdiff - 1) + (t.curSelectId - 1);
                    FightManager.fightNoMapBoss("", e)
                } else BubblerManager.getInstance().showText("您今天的挑战次数已经用完！")
            },
            this),
            ImageButtonUtil.add(this.btnvip,
            function() {
                tipsPop.TipsPop.openHelpPopById(66)
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(65)
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                t.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                t.service.showPetBag()
            },
            this)
        },
        i.prototype.afterFight = function() {
            var e = this;
            if (2 == this.curGroup) {
                if (FightManager.isWin) {
                    DisplayUtil.setEnabled(this.btnfight_2, !1, !0),
                    DisplayUtil.setEnabled(this.btnbuy, !1, !0),
                    this.curSelectId = -1;
                    for (var i = 1; 4 >= i; i++) this["selected_" + i].visible = !1;
                    this.a_1.visible = !1,
                    this.a_2.visible = !0,
                    this.curTurn = this.service.getValue(t.AttrConst.forever_minwang_beat_turn),
                    this.curdiff = this.service.getValue(t.AttrConst.forever_fourth_difficulty)
                } else this.curMinwang = this.service.getValue(t.AttrConst.forever_curminwang),
                0 == this.curMinwang && SocketConnection.sendByQueue(t.CMDConst.EmperorHunting_CMD, [5],
                function() {
                    e.curMinwang = e.service.getValue(t.AttrConst.forever_curminwang),
                    e.curTurn = e.service.getValue(t.AttrConst.forever_minwang_beat_turn),
                    e.curdiff = e.service.getValue(t.AttrConst.forever_fourth_difficulty)
                }),
                this.curdiff = this.service.getValue(t.AttrConst.forever_fourth_difficulty),
                this.a_2.visible = !1,
                this.a_1.visible = !0;
                this.update()
            } else if (FightManager.isWin) {
                for (var i = 1; 4 >= i; i++) this["selected_" + i].visible = !1;
                DisplayUtil.setEnabled(this.btnfight_2, !1, !0),
                DisplayUtil.setEnabled(this.btnbuy, !1, !0),
                this.curSelectId = -1
            }
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待")
        },
        i.prototype.update = function() {
            var e = this;
            if (this.curdiff = this.service.getValue(t.AttrConst.forever_fourth_difficulty), this.curdiff > 0) {
                this.a_1.visible = !1,
                this.a_2.visible = !0;
                var i = MainManager.actorInfo.isVip ? 4 : 3,
                n = this.service.getValue(t.AttrConst.forever_pet_state),
                r = this.service.getValue(t.AttrConst.forever_fourth_boss_defeated);
                DisplayUtil.setEnabled(this.btnfight_2, this.curSelectId >= 0, this.curSelectId < 0),
                DisplayUtil.setEnabled(this.btnbuy, this.curSelectId >= 0, this.curSelectId < 0),
                DisplayUtil.setEnabled(this.btnreduce, this.curdiff > 1, !(this.curdiff > 1));
                for (var _ = 1; 4 >= _; _++) this["pet_mask_" + _].visible = !!KTool.getBit(r, _);
                this.leftTime = i - this.service.getValue(t.AttrConst.daily_fourth_times);
                var s = this.leftTime <= 0;
                if (DisplayUtil.setEnabled(this.btnadd, s, !s), this.timeLeftText.text = "剩余挑战次数：" + this.leftTime.toString() + "/" + i.toString(), this.difficultyText.text = "" + this.curdiff.toString(), 1 == KTool.getBit(n, 5)) return void Alarm.show("已完成弑神之路。",
                function() {
                    EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, e.afterFight, e),
                    e.service.backToMainPanel()
                })
            } else this.curMinwang = this.service.getValue(t.AttrConst.forever_curminwang),
            0 == this.curMinwang && SocketConnection.sendByQueue(t.CMDConst.EmperorHunting_CMD, [5],
            function() {
                e.service.updateValues().then(function() {
                    e.curMinwang = e.service.getValue(t.AttrConst.forever_curminwang),
                    e.pet_3492.visible = 11312 == e.curMinwang,
                    e.pet_3496.visible = 11313 == e.curMinwang,
                    e.pet_3504.visible = 11314 == e.curMinwang,
                    e.pet_3507.visible = 11315 == e.curMinwang
                })
            }),
            this.a_1.visible = !0,
            this.a_2.visible = !1,
            this.pet_3492.visible = 11312 == this.curMinwang,
            this.pet_3496.visible = 11313 == this.curMinwang,
            this.pet_3504.visible = 11314 == this.curMinwang,
            this.pet_3507.visible = 11315 == this.curMinwang;
            var a = this.service.getValue(t.AttrConst.forever_pet_state);
            return 1 == KTool.getBit(a, 5) ? void Alarm.show("恭喜你通过了所有关卡，可以前往猎皇飞升关卡强化弑神猎皇了！",
            function() {
                e.service.backToMainPanel()
            }) : void 0
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.afterFight, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.ShiShenZhiLu = e,
    __reflect(e.prototype, "godEmperorHuting.ShiShenZhiLu")
} (godEmperorHuting || (godEmperorHuting = {}));
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
godEmperorHuting; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.bossId = 11308,
            i.skinName = t.ShouLieZaiQiSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.addEvents()
        },
        i.prototype.beforeUpdate = function() {
            return this.rateBar.value = 0,
            Promise.resolve()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252033, 1,
                function() {
                    KTool.doExchange(10878, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252034, 1,
                function() {
                    KTool.doExchange(10879, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnvip,
            function() {
                tipsPop.TipsPop.openHelpPopById(66)
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                var i = e.chanllegeMaxTime - e.service.getValue(t.AttrConst.daily_third_times);
                return 0 >= i ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void SocketConnection.sendByQueue(t.CMDConst.EmperorHunting_CMD, [4],
                function() {
                    e.update()
                })
            },
            this)
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待")
        },
        i.prototype.update = function() {
            var e = this;
            return new Promise(function(i, n) {
                e.chanllegeMaxTime = MainManager.actorInfo.isVip ? 5 : 3,
                e.leftTime = e.chanllegeMaxTime - e.service.getValue(t.AttrConst.daily_third_times),
                e.damage = e.service.getValue(t.AttrConst.forever_third_attack_damage);
                var r = e.service.getValue(t.AttrConst.forever_pet_state),
                _ = e.leftTime <= 0;
                if (e.damagePer = e.damage / 1e4, e.damagePer >= 1 && (e.damagePer = 1), e.rateBar.value = 100 * e.damagePer, DisplayUtil.setEnabled(e.btnadd, _, !_), e.timeLeftText.text = "剩余挑战次数：" + e.leftTime.toString() + "/" + e.chanllegeMaxTime.toString(), e.damageText.text = "" + e.damage.toString() + "/10000", 1 == KTool.getBit(r, 4)) return void Alarm.show("已完成狩猎再启。",
                function() {
                    e.service.backToMainPanel()
                });
                var s = e.service.getValue(t.AttrConst.forever_pet_state);
                1 == KTool.getBit(s, 4) && Alarm.show("恭喜你通过狩猎累积了足够的伤害，通过了狩猎再启关卡！",
                function() {
                    e.service.backToMainPanel()
                }),
                i()
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.ShouLieZaiQi = e,
    __reflect(e.prototype, "godEmperorHuting.ShouLieZaiQi")
} (godEmperorHuting || (godEmperorHuting = {}));
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
godEmperorHuting; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.itemId = 1715111,
            i.markId = 41110,
            i.state = [!1, !1, !1, !1],
            i.skinName = t.UpgradeAbilityPanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this),
            DisplayUtil.setEnabled(this.btnfight, !1, !0),
            this.service.registerItemUpdateForText(this.itemId, this.itemNumText, this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.setbtnFight, this);
            for (var i = function(t) {
                n["btndifficulty_" + t].addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    DisplayUtil.setEnabled(e.btnfight, !0, !1),
                    e.curSelectId = t,
                    e["btndifficultySe_" + t].visible = !0;
                    for (var i = 1; 3 >= i; i++) i != t && (e["btndifficultySe_" + i].visible = !1)
                },
                n)
            },
            n = this, r = 1; 3 >= r; r++) i(r);
            ImageButtonUtil.add(this.btnadditem,
            function() {
                if (!PayManager.canPay()) return void e.noOpen();
                var t = {};
                t.type = "product_diamond",
                t.ins = {
                    iconID: 1715111,
                    productID: 252043
                },
                t.caller = e,
                t.callBack = function(t, i) {
                    KTool.buyProductByCallback(252043, i,
                    function() {
                        KTool.doExchange(10888, i,
                        function() {
                            e.updateValues()
                        })
                    })
                },
                ModuleManager.showModuleByID(1, t)
            },
            this),
            ImageButtonUtil.add(this.btnaddtimes,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(252042, 1,
                function() {
                    KTool.doExchange(10887, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnvip,
            function() {
                tipsPop.TipsPop.openHelpPopById(66)
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                var i = e.chanllegeMaxTime - e.service.getValue(t.AttrConst.daily_fifth_times);
                return 0 >= i ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void FightManager.fightNoMapBoss("", 11336 + e.curSelectId - 1)
            },
            this);
            for (var r = 0; 3 > r; r++) this["btndui_" + r].index = r,
            ImageButtonUtil.add(this["btndui_" + r], this.exchange, this);
            ImageButtonUtil.add(this.icon_ke,
            function() {
                var t;
                CountermarkXMLInfo.isminMark(e.markId) ? (t = {},
                t.ins = e.markId, tipsPop.TipsPop.openCounterMarkPop(t)) : (t = {},
                t.id = e.markId, tipsPop.TipsPop.openItemPop(t))
            },
            this),
            ImageButtonUtil.add(this.icon_wu,
            function() {
                var t = {
                    id: 31519
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_te,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3514, "", AppDoStyle.NULL)
            },
            this)
        },
        i.prototype.setbtnFight = function() {
            if (FightManager.isWin) {
                DisplayUtil.setEnabled(this.btnfight, !1, !0);
                for (var t = 1; 3 >= t; t++) this["btndifficultySe_" + t].visible = !1
            } else DisplayUtil.setEnabled(this.btnfight, !0, !1)
        },
        i.prototype.exchange = function(e) {
            var i = this,
            n = e.currentTarget.index;
            switch (e.currentTarget.index) {
            case 0:
                n = 2;
                break;
            case 1:
                n = 3;
                break;
            case 2:
                n = 1
            }
            var r = 15;
            if (PetManager.isDefaultPet(3514)) {
                var _ = ItemManager.getNumByID(this.itemId);
                _ >= r ? SocketConnection.sendByQueue(t.CMDConst.EmperorHunting_CMD, [n],
                function() {
                    i.service.updateValues().then(function() {
                        switch (n) {
                        case 3:
                            BubblerManager.getInstance().showText("您已成功兑换专属特性！");
                            break;
                        case 2:
                            BubblerManager.getInstance().showText("您已成功兑换第五技能！")
                        }
                        i.update()
                    })
                }):
                BubblerManager.getInstance().showText("您没有足够的猎皇圣造！")
            } else BubblerManager.getInstance().showText("请将弑神猎皇设置为出战背包首发！");
            this.update()
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        i.prototype.update = function() {
            this.itemNum = ItemManager.getNumByID(this.itemId),
            this.chanllegeMaxTime = MainManager.actorInfo.isVip ? 5 : 3,
            this.leftTime = this.chanllegeMaxTime - this.service.getValue(t.AttrConst.daily_fifth_times);
            var e = this.service.getValue(t.AttrConst.forever_pet_state),
            i = this.leftTime <= 0;
            this.state[0] = 1 == KTool.getBit(e, 1),
            this.state[1] = 1 == KTool.getBit(e, 6),
            this.state[2] = 1 == KTool.getBit(e, 7),
            this.state[3] = 1 == KTool.getBit(e, 8),
            this.timeLeftText.text = "剩余挑战次数：" + this.leftTime.toString() + "/" + this.chanllegeMaxTime.toString(),
            this.itemNumText.text = "当前拥有猎皇圣造    :" + this.itemNum.toString(),
            DisplayUtil.setEnabled(this.btnaddtimes, i, !i),
            DisplayUtil.setEnabled(this.btndui_2, !this.state[1], this.state[1]),
            DisplayUtil.setEnabled(this.btndui_0, !this.state[2], this.state[2]),
            DisplayUtil.setEnabled(this.btndui_1, !this.state[3], this.state[3])
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.setbtnFight, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.UpgradeAbilityPanel = e,
    __reflect(e.prototype, "godEmperorHuting.UpgradeAbilityPanel")
} (godEmperorHuting || (godEmperorHuting = {})),
window.godEmperorHuting = window.godEmperorHuting || {};
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
generateEUI.paths["resource/eui_skins/ChongSuJianLingSkin.exml"] = window.godEmperorHuting.ChongSuJianLingSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnyijian", "btnfight", "btn_1", "btn_2", "btn_3", "btn_4", "pet_selected_1", "pet_selected_2", "pet_selected_3", "pet_selected_4", "content", "timeLeftText", "btnadd", "challengeTime", "itemNumText", "item", "btnvip", "btnpet", "btncure", "left", "btnback"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "geh_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 616,
        t.horizontalCenter = .5,
        t.width = 1099,
        t.y = 11,
        t.elementsContent = [this.btnyijian_i(), this.btnfight_i(), this._Image2_i(), this.content_i(), this.challengeTime_i(), this.item_i(), this.left_i()],
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.height = 102,
        t.source = "geh_lie_huang_chu_ling_btnyijian_png",
        t.width = 102,
        t.x = 984.27,
        t.y = 503.088,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "geh_chong_su_jian_ling_btnfight_png",
        t.visible = !0,
        t.x = 424,
        t.y = 514,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "geh_chong_su_jian_ling_title_png",
        t.x = 147,
        t.y = 0,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.visible = !0,
        t.x = 109,
        t.y = 106,
        t.elementsContent = [this.btn_1_i(), this.btn_2_i(), this.btn_3_i(), this.btn_4_i(), this.pet_selected_1_i(), this.pet_selected_2_i(), this.pet_selected_3_i(), this.pet_selected_4_i()],
        t
    },
    i.btn_1_i = function() {
        var t = new eui.Image;
        return this.btn_1 = t,
        t.source = "geh_chong_su_jian_ling_btn1_png",
        t.visible = !0,
        t.x = 9,
        t.y = 9,
        t
    },
    i.btn_2_i = function() {
        var t = new eui.Image;
        return this.btn_2 = t,
        t.source = "geh_chong_su_jian_ling_btn2_png",
        t.x = 224,
        t.y = 9,
        t
    },
    i.btn_3_i = function() {
        var t = new eui.Image;
        return this.btn_3 = t,
        t.source = "geh_chong_su_jian_ling_btn3_png",
        t.x = 440,
        t.y = 9,
        t
    },
    i.btn_4_i = function() {
        var t = new eui.Image;
        return this.btn_4 = t,
        t.source = "geh_chong_su_jian_ling_btn4_png",
        t.x = 662,
        t.y = 9,
        t
    },
    i.pet_selected_1_i = function() {
        var t = new eui.Image;
        return this.pet_selected_1 = t,
        t.source = "geh_chong_su_jian_ling_selected_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.pet_selected_2_i = function() {
        var t = new eui.Image;
        return this.pet_selected_2 = t,
        t.source = "geh_chong_su_jian_ling_selected_png",
        t.visible = !0,
        t.x = 214,
        t.y = 0,
        t
    },
    i.pet_selected_3_i = function() {
        var t = new eui.Image;
        return this.pet_selected_3 = t,
        t.source = "geh_chong_su_jian_ling_selected_png",
        t.visible = !0,
        t.x = 430,
        t
    },
    i.pet_selected_4_i = function() {
        var t = new eui.Image;
        return this.pet_selected_4 = t,
        t.source = "geh_chong_su_jian_ling_selected_png",
        t.visible = !0,
        t.x = 652,
        t.y = 0,
        t
    },
    i.challengeTime_i = function() {
        var t = new eui.Group;
        return this.challengeTime = t,
        t.x = 657,
        t.y = 542,
        t.elementsContent = [this._Image3_i(), this.timeLeftText_i(), this.btnadd_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "geh_chong_su_jian_ling_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数：4/5",
        t.textColor = 16247179,
        t.x = 23,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "geh_chong_su_jian_ling_btnadd_png",
        t.x = 193,
        t.y = 0,
        t
    },
    i.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.x = 837,
        t.y = 10,
        t.elementsContent = [this._Image4_i(), this.itemNumText_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "geh_chong_su_jian_ling_numbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.itemNumText_i = function() {
        var t = new eui.Label;
        return this.itemNumText = t,
        t.size = 18,
        t.text = "箭之精魄：3000",
        t.textColor = 16247179,
        t.x = 50,
        t.y = 7,
        t
    },
    i.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.x = 0,
        t.y = 222,
        t.elementsContent = [this.btnvip_i(), this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnvip_i = function() {
        var t = new eui.Image;
        return this.btnvip = t,
        t.source = "geh_chong_su_jian_ling_btnvip_png",
        t.x = 0,
        t.y = 148,
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "geh_chong_su_jian_ling_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "geh_chong_su_jian_ling_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.btnback_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "geh_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "geh_main_panel_btnclose_png",
        t.x = 34,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LieHuangChuLingSkin.exml"] = window.godEmperorHuting.LieHuangChuLingSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnyijian", "btnfight", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "geh_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 640,
        t.horizontalCenter = 0,
        t.width = 1136,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.btnyijian_i(), this.btnfight_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "geh_lie_huang_chu_ling_battle_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.height = 102,
        t.source = "geh_lie_huang_chu_ling_btnyijian_png",
        t.width = 102,
        t.x = 1020,
        t.y = 525,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "geh_lie_huang_chu_ling_btnfight_png",
        t.x = 447,
        t.y = 510,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.btnback_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "geh_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "geh_main_panel_btnclose_png",
        t.x = 34,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.godEmperorHuting.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnup", "btngetPet", "btnyijian", "btnInfo", "btn_1", "beat_1", "btn_2", "beat_2", "btn_3", "beat_3", "btn_4", "beat_4", "btnclose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group6_i(), this._Group7_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "geh_main_panel_bg_jpg",
        t.percentWidth = 100,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -7,
        t.y = 13,
        t.elementsContent = [this._Image2_i(), this.btnup_i(), this.btngetPet_i(), this.btnyijian_i(), this.btnInfo_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "geh_main_panel_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnup_i = function() {
        var t = new eui.Image;
        return this.btnup = t,
        t.height = 102,
        t.source = "geh_main_panel_btnup_png",
        t.visible = !1,
        t.width = 102,
        t.x = 1020,
        t.y = 512,
        t
    },
    i.btngetPet_i = function() {
        var t = new eui.Image;
        return this.btngetPet = t,
        t.height = 102,
        t.source = "geh_main_panel_btngetPet_png",
        t.visible = !1,
        t.width = 102,
        t.x = 1020,
        t.y = 512,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.height = 102,
        t.source = "geh_main_panel_btnyijian_png",
        t.width = 102,
        t.x = 1020,
        t.y = 512,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "geh_main_panel_btninfo_png",
        t.x = 37,
        t.y = 528,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.x = 735,
        t.y = 72,
        t.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.btn_1_i(), this.beat_1_i()],
        t
    },
    i.btn_1_i = function() {
        var t = new eui.Image;
        return this.btn_1 = t,
        t.source = "geh_main_panel_btn1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.beat_1_i = function() {
        var t = new eui.Image;
        return this.beat_1 = t,
        t.source = "geh_main_panel_beat_png",
        t.visible = !0,
        t.x = 54,
        t.y = 35,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 40,
        t.y = 115,
        t.elementsContent = [this.btn_2_i(), this.beat_2_i()],
        t
    },
    i.btn_2_i = function() {
        var t = new eui.Image;
        return this.btn_2 = t,
        t.source = "geh_main_panel_btn2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.beat_2_i = function() {
        var t = new eui.Image;
        return this.beat_2 = t,
        t.source = "geh_main_panel_beat_png",
        t.visible = !0,
        t.x = 44,
        t.y = 35,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 40,
        t.y = 243,
        t.elementsContent = [this.btn_3_i(), this.beat_3_i()],
        t
    },
    i.btn_3_i = function() {
        var t = new eui.Image;
        return this.btn_3 = t,
        t.source = "geh_main_panel_btn3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.beat_3_i = function() {
        var t = new eui.Image;
        return this.beat_3 = t,
        t.source = "geh_main_panel_beat_png",
        t.visible = !0,
        t.x = 44,
        t.y = 17,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 356,
        t.elementsContent = [this.btn_4_i(), this.beat_4_i()],
        t
    },
    i.btn_4_i = function() {
        var t = new eui.Image;
        return this.btn_4 = t,
        t.source = "geh_main_panel_btn4_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.beat_4_i = function() {
        var t = new eui.Image;
        return this.beat_4 = t,
        t.source = "geh_main_panel_beat_png",
        t.visible = !0,
        t.x = 54,
        t.y = 19,
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.btnclose_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "geh_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnclose_i = function() {
        var t = new eui.Image;
        return this.btnclose = t,
        t.source = "geh_main_panel_btnclose_png",
        t.x = 34,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ShiShenZhiLuSkin.exml"] = window.godEmperorHuting.ShiShenZhiLuSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnfight_2", "btnbuy", "difficultyText", "btnreduce", "difficulty", "pet_4", "pet_mask_4", "selected_4", "pet_3", "pet_mask_3", "selected_3", "pet_2", "pet_mask_2", "selected_2", "pet_1", "pet_mask_1", "selected_1", "petList", "timeLeftText", "btnadd", "challengeTime", "a_2", "pet_3504", "pet_3507", "pet_3492", "pet_3496", "btnfight_1", "a_1", "btnyijian", "btnvip", "btnpet", "btncure", "btnback", "btnhelp", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group6_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "geh_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.height = 627,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.width = 1122,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.a_2_i(), this.a_1_i(), this.btnyijian_i(), this._Group5_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "geh_shi_shen_zhi_lu_title_png",
        t.x = 503,
        t.y = 12,
        t
    },
    i.a_2_i = function() {
        var t = new eui.Group;
        return this.a_2 = t,
        t.visible = !0,
        t.x = 35,
        t.y = 84,
        t.elementsContent = [this.btnfight_2_i(), this.btnbuy_i(), this.difficulty_i(), this.petList_i(), this.challengeTime_i()],
        t
    },
    i.btnfight_2_i = function() {
        var t = new eui.Image;
        return this.btnfight_2 = t,
        t.source = "geh_chong_su_jian_ling_btnfight_png",
        t.x = 297,
        t.y = 441,
        t
    },
    i.btnbuy_i = function() {
        var t = new eui.Image;
        return this.btnbuy = t,
        t.source = "geh_shi_shen_zhi_lu_btnbuy_png",
        t.x = 533,
        t.y = 443,
        t
    },
    i.difficulty_i = function() {
        var t = new eui.Group;
        return this.difficulty = t,
        t.x = 0,
        t.y = 412,
        t.elementsContent = [this._Image3_i(), this._Label1_i(), this.difficultyText_i(), this.btnreduce_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "geh_shi_shen_zhi_lu_nandubg_png",
        t.x = 62,
        t.y = 40,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "当前难度：",
        t.textColor = 16777215,
        t.x = 107,
        t.y = 45,
        t
    },
    i.difficultyText_i = function() {
        var t = new eui.Label;
        return this.difficultyText = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.height = 25,
        t.size = 25,
        t.text = "N",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.verticalAlign = "middle",
        t.width = 20,
        t.x = 140,
        t.y = 65,
        t
    },
    i.btnreduce_i = function() {
        var t = new eui.Image;
        return this.btnreduce = t,
        t.source = "geh_shi_shen_zhi_lu_btnreduce_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.petList_i = function() {
        var t = new eui.Group;
        return this.petList = t,
        t.x = 99,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 658,
        t.y = 0,
        t.elementsContent = [this.pet_4_i(), this.pet_mask_4_i(), this.selected_4_i()],
        t
    },
    i.pet_4_i = function() {
        var t = new eui.Image;
        return this.pet_4 = t,
        t.source = "geh_shi_shen_zhi_lu_pet_4_png",
        t.x = 10,
        t.y = 10,
        t
    },
    i.pet_mask_4_i = function() {
        var t = new eui.Image;
        return this.pet_mask_4 = t,
        t.height = 392,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "geh_shi_shen_zhi_lu_pet_mask_png",
        t.visible = !1,
        t.width = 185,
        t.x = 12,
        t.y = 12,
        t
    },
    i.selected_4_i = function() {
        var t = new eui.Image;
        return this.selected_4 = t,
        t.source = "geh_shi_shen_zhi_lu_selected_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 439,
        t.y = 0,
        t.elementsContent = [this.pet_3_i(), this.pet_mask_3_i(), this.selected_3_i()],
        t
    },
    i.pet_3_i = function() {
        var t = new eui.Image;
        return this.pet_3 = t,
        t.source = "geh_shi_shen_zhi_lu_pet_3_png",
        t.x = 10,
        t.y = 10,
        t
    },
    i.pet_mask_3_i = function() {
        var t = new eui.Image;
        return this.pet_mask_3 = t,
        t.height = 392,
        t.source = "geh_shi_shen_zhi_lu_pet_mask_png",
        t.visible = !1,
        t.width = 185,
        t.x = 12,
        t.y = 12,
        t
    },
    i.selected_3_i = function() {
        var t = new eui.Image;
        return this.selected_3 = t,
        t.source = "geh_shi_shen_zhi_lu_selected_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 219,
        t.y = 0,
        t.elementsContent = [this.pet_2_i(), this.pet_mask_2_i(), this.selected_2_i()],
        t
    },
    i.pet_2_i = function() {
        var t = new eui.Image;
        return this.pet_2 = t,
        t.source = "geh_shi_shen_zhi_lu_pet_2_png",
        t.x = 10,
        t.y = 10,
        t
    },
    i.pet_mask_2_i = function() {
        var t = new eui.Image;
        return this.pet_mask_2 = t,
        t.height = 392,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "geh_shi_shen_zhi_lu_pet_mask_png",
        t.visible = !1,
        t.width = 185,
        t.x = 12,
        t.y = 12,
        t
    },
    i.selected_2_i = function() {
        var t = new eui.Image;
        return this.selected_2 = t,
        t.source = "geh_shi_shen_zhi_lu_selected_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet_1_i(), this.pet_mask_1_i(), this.selected_1_i()],
        t
    },
    i.pet_1_i = function() {
        var t = new eui.Image;
        return this.pet_1 = t,
        t.source = "geh_shi_shen_zhi_lu_pet_1_png",
        t.x = 10,
        t.y = 10,
        t
    },
    i.pet_mask_1_i = function() {
        var t = new eui.Image;
        return this.pet_mask_1 = t,
        t.height = 392,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "geh_shi_shen_zhi_lu_pet_mask_png",
        t.visible = !1,
        t.width = 185,
        t.x = 12,
        t.y = 12,
        t
    },
    i.selected_1_i = function() {
        var t = new eui.Image;
        return this.selected_1 = t,
        t.source = "geh_shi_shen_zhi_lu_selected_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.challengeTime_i = function() {
        var t = new eui.Group;
        return this.challengeTime = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 825,
        t.y = -64,
        t.elementsContent = [this._Image4_i(), this.timeLeftText_i(), this.btnadd_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "geh_chong_su_jian_ling_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数：4/5",
        t.textColor = 16247179,
        t.x = 23,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "geh_chong_su_jian_ling_btnadd_png",
        t.x = 193,
        t.y = 0,
        t
    },
    i.a_1_i = function() {
        var t = new eui.Group;
        return this.a_1 = t,
        t.visible = !1,
        t.x = 253,
        t.y = 86,
        t.elementsContent = [this.pet_3504_i(), this.pet_3507_i(), this.pet_3492_i(), this.pet_3496_i(), this.btnfight_1_i()],
        t
    },
    i.pet_3504_i = function() {
        var t = new eui.Image;
        return this.pet_3504 = t,
        t.source = "geh_shi_shen_zhi_lu_pet_3504_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.pet_3507_i = function() {
        var t = new eui.Image;
        return this.pet_3507 = t,
        t.source = "geh_shi_shen_zhi_lu_pet_3507_png",
        t.visible = !1,
        t
    },
    i.pet_3492_i = function() {
        var t = new eui.Image;
        return this.pet_3492 = t,
        t.source = "geh_shi_shen_zhi_lu_pet_3492_png",
        t.visible = !0,
        t
    },
    i.pet_3496_i = function() {
        var t = new eui.Image;
        return this.pet_3496 = t,
        t.source = "geh_shi_shen_zhi_lu_pet_3496_png",
        t.visible = !1,
        t
    },
    i.btnfight_1_i = function() {
        var t = new eui.Image;
        return this.btnfight_1 = t,
        t.source = "geh_chong_su_jian_ling_btnfight_png",
        t.x = 194,
        t.y = 439,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.height = 102,
        t.source = "geh_lie_huang_chu_ling_btnyijian_png",
        t.width = 102,
        t.x = 1020,
        t.y = 525,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.x = 23,
        t.y = 233,
        t.elementsContent = [this.btnvip_i(), this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnvip_i = function() {
        var t = new eui.Image;
        return this.btnvip = t,
        t.source = "geh_chong_su_jian_ling_btnvip_png",
        t.x = 0,
        t.y = 148,
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "geh_chong_su_jian_ling_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "geh_chong_su_jian_ling_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.btnback_i(), this.btnhelp_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "geh_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "geh_main_panel_btnclose_png",
        t.x = 34,
        t.y = 9,
        t
    },
    i.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "geh_shi_shen_zhi_lu_help_png",
        t.x = 130,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ShouLieZaiQiSkin.exml"] = window.godEmperorHuting.ShouLieZaiQiSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["content", "rate", "damageText", "rateBar", "damage", "btnyijian", "btnfight", "timeLeftText", "btnadd", "challengeTime", "btnvip", "btnpet", "btncure", "left", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "geh_shou_lie_zai_qi_rate_png",
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "geh_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 616,
        t.horizontalCenter = 4.5,
        t.width = 1099,
        t.y = 11,
        t.elementsContent = [this.content_i(), this.damage_i(), this.btnyijian_i(), this.btnfight_i(), this.challengeTime_i(), this.left_i()],
        t
    },
    n.content_i = function() {
        var t = new eui.Image;
        return this.content = t,
        t.source = "geh_shou_lie_zai_qi_content_png",
        t.x = 52,
        t.y = 0,
        t
    },
    n.damage_i = function() {
        var t = new eui.Group;
        return this.damage = t,
        t.x = 941,
        t.y = 91,
        t.elementsContent = [this._Image2_i(), this.rate_i(), this._Image3_i(), this._Label1_i(), this.damageText_i(), this.rateBar_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "geh_shou_lie_zai_qi_ratebg_png",
        t.visible = !0,
        t.x = 61,
        t.y = 47,
        t
    },
    n.rate_i = function() {
        var t = new eui.Image;
        return this.rate = t,
        t.bottom = 6,
        t.height = 0,
        t.source = "geh_shou_lie_zai_qi_rate_png",
        t.visible = !1,
        t.x = 67,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "geh_shou_lie_zai_qi_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "累计伤害：",
        t.textColor = 16247179,
        t.x = 40,
        t.y = 7,
        t
    },
    n.damageText_i = function() {
        var t = new eui.Label;
        return this.damageText = t,
        t.size = 18,
        t.text = "10000/10000",
        t.textColor = 16773461,
        t.width = 120,
        t.x = 30,
        t.y = 29,
        t
    },
    n.rateBar_i = function() {
        var t = new eui.ProgressBar;
        return this.rateBar = t,
        t.direction = "btt",
        t.height = 335,
        t.value = 100,
        t.width = 25,
        t.x = 67,
        t.y = 54,
        t.skinName = i,
        t
    },
    n.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.height = 102,
        t.source = "geh_lie_huang_chu_ling_btnyijian_png",
        t.width = 102,
        t.x = 997,
        t.y = 514,
        t
    },
    n.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "geh_chong_su_jian_ling_btnfight_png",
        t.x = 424,
        t.y = 514,
        t
    },
    n.challengeTime_i = function() {
        var t = new eui.Group;
        return this.challengeTime = t,
        t.x = 657,
        t.y = 542,
        t.elementsContent = [this._Image4_i(), this.timeLeftText_i(), this.btnadd_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "geh_chong_su_jian_ling_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    n.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数：4/5",
        t.textColor = 16247179,
        t.x = 23,
        t.y = 8,
        t
    },
    n.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "geh_chong_su_jian_ling_btnadd_png",
        t.x = 193,
        t.y = 0,
        t
    },
    n.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.x = 0,
        t.y = 222,
        t.elementsContent = [this.btnvip_i(), this.btnpet_i(), this.btncure_i()],
        t
    },
    n.btnvip_i = function() {
        var t = new eui.Image;
        return this.btnvip = t,
        t.source = "geh_chong_su_jian_ling_btnvip_png",
        t.x = 0,
        t.y = 148,
        t
    },
    n.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "geh_chong_su_jian_ling_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "geh_chong_su_jian_ling_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.btnback_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "geh_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "geh_main_panel_btnclose_png",
        t.x = 34,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/UpgradeAbilityPanelSkin.exml"] = window.godEmperorHuting.UpgradeAbilityPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["timeLeftText", "btnaddtimes", "challengeTime", "itemNumText", "btnadditem", "item", "btnvip", "btnpet", "btncure", "btnfight", "btndui_0", "icon_wu", "btndui_1", "icon_te", "btndui_2", "icon_ke", "r", "btndifficulty_1", "btndifficultySe_1", "btndifficulty_2", "btndifficultySe_2", "btndifficulty_3", "btndifficultySe_3", "l", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group2_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "geh_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -18,
        t.y = 12,
        t.elementsContent = [this._Image2_i(), this.challengeTime_i(), this.item_i(), this._Group1_i(), this.btnfight_i(), this.r_i(), this.l_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "geh_upgrade_ability_panel_content_png",
        t.x = 147,
        t.y = 0,
        t
    },
    i.challengeTime_i = function() {
        var t = new eui.Group;
        return this.challengeTime = t,
        t.x = 200,
        t.y = 565,
        t.elementsContent = [this._Image3_i(), this.timeLeftText_i(), this.btnaddtimes_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "geh_chong_su_jian_ling_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.size = 18,
        t.text = "当前剩余挑战次数：4/5",
        t.textColor = 16247179,
        t.x = 42,
        t.y = 8,
        t
    },
    i.btnaddtimes_i = function() {
        var t = new eui.Image;
        return this.btnaddtimes = t,
        t.source = "geh_chong_su_jian_ling_btnadd_png",
        t.x = 247,
        t.y = 0,
        t
    },
    i.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.x = 575,
        t.y = 565,
        t.elementsContent = [this._Image4_i(), this.itemNumText_i(), this._Image5_i(), this.btnadditem_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "geh_chong_su_jian_ling_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.itemNumText_i = function() {
        var t = new eui.Label;
        return this.itemNumText = t,
        t.size = 18,
        t.text = "当前拥有猎皇圣造    ：55",
        t.textColor = 16247179,
        t.width = 214,
        t.x = 15,
        t.y = 8,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "geh_upgrade_ability_panel_imgitem_png",
        t.visible = !0,
        t.x = 170,
        t.y = 6,
        t
    },
    i.btnadditem_i = function() {
        var t = new eui.Image;
        return this.btnadditem = t,
        t.source = "geh_chong_su_jian_ling_btnadd_png",
        t.x = 247,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 254,
        t.elementsContent = [this.btnvip_i(), this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnvip_i = function() {
        var t = new eui.Image;
        return this.btnvip = t,
        t.source = "geh_chong_su_jian_ling_btnvip_png",
        t.x = 0,
        t.y = 148,
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "geh_chong_su_jian_ling_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "geh_chong_su_jian_ling_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "geh_chong_su_jian_ling_btnfight_png",
        t.x = 424,
        t.y = 477,
        t
    },
    i.r_i = function() {
        var t = new eui.Group;
        return this.r = t,
        t.x = 871,
        t.y = 131,
        t.elementsContent = [this._Image6_i(), this.btndui_0_i(), this.icon_wu_i(), this._Image7_i(), this.btndui_1_i(), this.icon_te_i(), this._Image8_i(), this.btndui_2_i(), this.icon_ke_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "geh_upgrade_ability_panel_itembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btndui_0_i = function() {
        var t = new eui.Image;
        return this.btndui_0 = t,
        t.source = "geh_upgrade_ability_panel_btndui_png",
        t.x = 79,
        t.y = 50,
        t
    },
    i.icon_wu_i = function() {
        var t = new eui.Image;
        return this.icon_wu = t,
        t.source = "geh_upgrade_ability_panel_btnwu_png",
        t.x = 41,
        t.y = 33,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "geh_upgrade_ability_panel_itembg_png",
        t.x = 31,
        t.y = 132,
        t
    },
    i.btndui_1_i = function() {
        var t = new eui.Image;
        return this.btndui_1 = t,
        t.source = "geh_upgrade_ability_panel_btndui_png",
        t.x = 108,
        t.y = 183,
        t
    },
    i.icon_te_i = function() {
        var t = new eui.Image;
        return this.icon_te = t,
        t.source = "geh_upgrade_ability_panel_btnte_png",
        t.x = 72,
        t.y = 164,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "geh_upgrade_ability_panel_itembg_png",
        t.x = 1,
        t.y = 254,
        t
    },
    i.btndui_2_i = function() {
        var t = new eui.Image;
        return this.btndui_2 = t,
        t.source = "geh_upgrade_ability_panel_btndui_png",
        t.x = 81,
        t.y = 304,
        t
    },
    i.icon_ke_i = function() {
        var t = new eui.Image;
        return this.icon_ke = t,
        t.source = "geh_upgrade_ability_panel_btnke_png",
        t.x = 40,
        t.y = 286,
        t
    },
    i.l_i = function() {
        var t = new eui.Group;
        return this.l = t,
        t.x = 101,
        t.y = 137,
        t.elementsContent = [this.btndifficulty_1_i(), this.btndifficultySe_1_i(), this.btndifficulty_2_i(), this.btndifficultySe_2_i(), this.btndifficulty_3_i(), this.btndifficultySe_3_i()],
        t
    },
    i.btndifficulty_1_i = function() {
        var t = new eui.Image;
        return this.btndifficulty_1 = t,
        t.source = "geh_upgrade_ability_panel_btndifficulty_1_png",
        t.x = 8,
        t.y = 9,
        t
    },
    i.btndifficultySe_1_i = function() {
        var t = new eui.Image;
        return this.btndifficultySe_1 = t,
        t.source = "geh_upgrade_ability_panel_btndifficultyse_1_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btndifficulty_2_i = function() {
        var t = new eui.Image;
        return this.btndifficulty_2 = t,
        t.source = "geh_upgrade_ability_panel_btndifficulty_2_png",
        t.x = 8,
        t.y = 112,
        t
    },
    i.btndifficultySe_2_i = function() {
        var t = new eui.Image;
        return this.btndifficultySe_2 = t,
        t.source = "geh_upgrade_ability_panel_btndifficultyse_2_png",
        t.visible = !1,
        t.x = 0,
        t.y = 103,
        t
    },
    i.btndifficulty_3_i = function() {
        var t = new eui.Image;
        return this.btndifficulty_3 = t,
        t.source = "geh_upgrade_ability_panel_btndifficulty_3_png",
        t.x = 8,
        t.y = 214,
        t
    },
    i.btndifficultySe_3_i = function() {
        var t = new eui.Image;
        return this.btndifficultySe_3 = t,
        t.source = "geh_upgrade_ability_panel_btndifficultyse_3_png",
        t.visible = !1,
        t.x = 0,
        t.y = 205,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image9_i(), this.btnback_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "geh_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "geh_main_panel_btnclose_png",
        t.x = 34,
        t.y = 9,
        t
    },
    e
} (eui.Skin);