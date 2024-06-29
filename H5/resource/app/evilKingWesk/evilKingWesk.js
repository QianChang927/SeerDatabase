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
evilKingWesk; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this;
            return StatLogger.log("20210903版本系统功能", "万古邪皇·威斯克搬迁", "进入万古邪皇·威斯克的主面板"),
            n.service.setValues([t.AttrConst.forever_pet_state, t.AttrConst.forever_attack_kill_count, t.AttrConst.forever_average_damage_max, t.AttrConst.forever_defend_damage_max, t.AttrConst.forever_round_max, t.AttrConst.forever_use_pet_max, t.AttrConst.forever_pet_dead_max, t.AttrConst.forever_curr_combine_score, t.AttrConst.forever_award_can_got], [t.AttrConst.daily_attack_try_times, t.AttrConst.daily_attack_times_reset_timestamp, t.AttrConst.daily_get_items_fight_times, t.AttrConst.daily_fight_success_times], [t.AttrConst.bitbuf_buy_pet, t.AttrConst.bitbuf_exchanged_medicament]),
            n.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.FIGHT_WEST_PANEL
            },
            {
                panelName: t.ModuleConst.UPGRADE_ABILITY_PANEL
            }]),
            n
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.EvilKingWesk = e,
    __reflect(e.prototype, "evilKingWesk.EvilKingWesk")
} (evilKingWesk || (evilKingWesk = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
evilKingWesk; !
function(t) {
    var e = function() {
        function t() {}
        return t.forever_pet_state = 102155,
        t.forever_attack_kill_count = 102156,
        t.daily_attack_try_times = 13967,
        t.daily_attack_times_reset_timestamp = 13968,
        t.daily_get_items_fight_times = 13969,
        t.daily_fight_success_times = 201338,
        t.forever_curr_damage_average = 102157,
        t.forever_average_damage_max = 102168,
        t.forever_defend_damage_average = 102158,
        t.forever_defend_damage_max = 102169,
        t.forever_round_average = 102160,
        t.forever_round_max = 102171,
        t.forever_use_pet_average = 102159,
        t.forever_use_pet_max = 102170,
        t.forever_pet_dead_average = 102161,
        t.forever_pet_dead_max = 102172,
        t.forever_curr_damage_max = 102162,
        t.forever_curr_defend_damage_max = 102163,
        t.forever_curr_use_pet = 102164,
        t.forever_curr_round = 102165,
        t.forever_curr_pet_dead = 102166,
        t.forever_curr_combine_score = 102167,
        t.forever_award_can_got = 121100,
        t.bitbuf_buy_pet = 15134,
        t.bitbuf_exchanged_medicament = 15135,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "evilKingWesk.AttrConst")
} (evilKingWesk || (evilKingWesk = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
evilKingWesk; !
function(t) {
    var e = function() {
        function t() {}
        return t.WESK_CMD = 45686,
        t
    } ();
    t.CMD = e,
    __reflect(e.prototype, "evilKingWesk.CMD")
} (evilKingWesk || (evilKingWesk = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
evilKingWesk; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "evilKingWesk.MainPanel",
        t.FIGHT_WEST_PANEL = "evilKingWesk.FightWestPanel",
        t.UPGRADE_ABILITY_PANEL = "evilKingWesk.UpgradeAbilityPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "evilKingWesk.ModuleConst")
} (evilKingWesk || (evilKingWesk = {}));
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
evilKingWesk; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.itemId = 1710639,
            i.bossId_start = 7868,
            i.EXCHANGE_NEED_ITEM_NUM = 800,
            i.curr_boss = 0,
            i.skinName = t.FightWestPanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(56, this, "",
            function() {
                i.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grpLeft),
            this.addEvents(),
            this.update(),
            this.service.registerItemUpdateForText(this.itemId, this.txtItemCount, this);
            var n = this.service.getValue(t.AttrConst.forever_award_can_got);
            n > 0 && this.showAwardPop(this.bossId_start + n - 1)
        },
        i.prototype.playOpenAnimate = function() {},
        i.prototype.update = function() {
            var i = this;
            if (this.service) {
                e.prototype.update.call(this),
                this.showItemNum(),
                this.grpClock.visible = !1;
                var n = this.service.getValue(t.AttrConst.daily_attack_times_reset_timestamp),
                _ = 5 - this.service.getValue(t.AttrConst.daily_attack_try_times);
                n > 0 && (this.grpClock.visible = !0, this.service.unregisterClock(this.txtClock), this.service.registerClock(n,
                function() {
                    i.addFightTimes()
                },
                this, this.txtClock)),
                this.txtLeftTimes.text = _.toString() + "/5",
                DisplayUtil.setEnabled(this.btnBuyTimes, 1 > _, !0);
                var r = this.service.getValue(t.AttrConst.forever_pet_state),
                s = !!BitUtil.getBit(r, 0);
                this.got_icon.visible = s,
                this.btnExchange.touchEnabled = !s
            }
        },
        i.prototype.addFightTimes = function() {
            var e = this;
            SocketConnection.sendByQueue(t.CMD.WESK_CMD, [8, 0],
            function() {
                e.service && e.service.updateValues().then(function() {
                    e.update()
                })
            })
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            e.prototype.destroy.call(this)
        },
        i.prototype.showItemNum = function() {
            var t = ItemManager.getNumByID(this.itemId);
            this.txtItemCount.text = "" + t
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(56)
            },
            this),
            ImageButtonUtil.add(this.btnBuyItem,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1710639,
                        productID: 248583
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(248583, i,
                        function() {
                            KTool.doExchange(9336, i,
                            function() {
                                e.service.updateValues().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                var i = 5 - e.service.getValue(t.AttrConst.daily_attack_try_times);
                if (0 == i) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                for (var n = e.service.getValue(t.AttrConst.daily_fight_success_times), _ = [0, 2, 4, 5, 6], r = 0, s = _.length; s >= 0; s--) if (n >= _[s]) {
                    r = e.bossId_start + s;
                    break
                }
                e.curr_boss = r,
                EventManager.addEventListener(PetFightEvent.ALARM_CLICK, e.onClikFightAlarm, e),
                FightManager.fightNoMapBoss("", r)
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                var i = e.service.getValue(t.AttrConst.forever_pet_state);
                if (1 == BitUtil.getBit(i, 0)) return void BubblerManager.getInstance().showText("您已经兑换过精灵");
                var n = ItemManager.getNumByID(e.itemId);
                n >= e.EXCHANGE_NEED_ITEM_NUM ? SocketConnection.sendByQueue(t.CMD.WESK_CMD, [5, 0],
                function(t) {
                    var i = t.data;
                    i.readUnsignedInt();
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                },
                function() {}) : BubblerManager.getInstance().showText("您的邪皇之骨数量不足！")
            },
            this),
            ImageButtonUtil.add(this.btnBuyTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248576, 1,
                    function() {
                        KTool.doExchange(9333, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this)
        },
        i.prototype.onClikFightAlarm = function(t) {
            FightManager.isWin && this.showAwardPop(this.curr_boss),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onClikFightAlarm, this)
        },
        i.prototype.showAwardPop = function(e) {
            var i = {
                7868 : 8,
                7869 : 8,
                7870 : 9,
                7871 : 9,
                7872 : 10
            },
            n = new t.FightSuccesPop(this.service, i[e]),
            _ = PopViewManager.createDefaultStyleObject();
            _.ignoreMaskClick = !0,
            PopViewManager.getInstance().openView(n, _, null, this)
        },
        i
    } (BasicPanel);
    t.FightWestPanel = e,
    __reflect(e.prototype, "evilKingWesk.FightWestPanel")
} (evilKingWesk || (evilKingWesk = {}));
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
evilKingWesk; !
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
            this.addEvents(),
            this.initOldPveBtnClose(55, this, "",
            function() {
                t.service.closeModule()
            },
            this),
            this.update()
        },
        i.prototype.update = function() {
            if (this.service) {
                e.prototype.update.call(this);
                var i = 1 == this.service.getValue(t.AttrConst.bitbuf_buy_pet),
                n = this.service.getValue(t.AttrConst.forever_pet_state),
                _ = 1 == KTool.getBit(n, 1);
                DisplayUtil.setEnabled(this.btnBuy, !_, !0),
                DisplayUtil.setEnabled(this.btnUpgrade, !i, !0)
            }
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(55)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                StatLogger.log("20210903版本系统功能", "万古邪皇·威斯克搬迁", "进入免费获得面板"),
                e.service.openPanel(t.ModuleConst.FIGHT_WEST_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248574, 1,
                    function() {
                        SocketConnection.sendByQueue(45686, [1, 0],
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnUpgrade,
            function() {
                StatLogger.log("20210903版本系统功能", "万古邪皇·威斯克搬迁", "进入至尊提升面板"),
                e.service.openPanel(t.ModuleConst.UPGRADE_ABILITY_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                StatLogger.log("20210903版本系统功能", "万古邪皇·威斯克搬迁", "点击查看精灵详细"),
                PetManager.showPetIntroduce(3214)
            },
            this)
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "evilKingWesk.MainPanel")
} (evilKingWesk || (evilKingWesk = {}));
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
evilKingWesk; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.itemId_0 = 1710671,
            i.itemId_1 = 1710672,
            i.boss_0 = 7873,
            i.boss_1 = 7874,
            i.markId = 40731,
            i.skillId = 30029,
            i.texingId = 2419,
            i.medicamentId = 300800,
            i.status = [0, 0, 0, 0, 0, 0],
            i.skinName = t.UpgradeAbilityPanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(57, this, "",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grpLeft),
            this.addEvents(),
            this.update(),
            this.service.registerItemUpdateForText(this.itemId_0, this.txtItem_0, this),
            this.service.registerItemUpdateForText(this.itemId_1, this.txtItem_1, this)
        },
        i.prototype.update = function() {
            if (this.service) {
                e.prototype.update.call(this),
                this.txtLeftTimes.text = "" + (8 - this.service.getValue(t.AttrConst.daily_get_items_fight_times)),
                this.showItemNum();
                var i = this.service.getValue(t.AttrConst.forever_pet_state),
                n = this.service.getValue(t.AttrConst.bitbuf_exchanged_medicament);
                this.status[0] = BitUtil.getBit(i, 0),
                this.status[1] = PetSkinController.instance.haveSkin(143) ? 1 : 0,
                this.status[2] = BitUtil.getBit(i, 3),
                this.status[3] = BitUtil.getBit(i, 2),
                this.status[4] = BitUtil.getBit(i, 1),
                this.status[5] = n,
                DisplayUtil.setEnabled(this.btnAddTimes, 8 == this.service.getValue(t.AttrConst.daily_get_items_fight_times), !0);
                for (var _ = 0; 5 > _; _++) this["icon_got_" + _].visible = !!this.status[_ + 1]
            }
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            e.prototype.destroy.call(this)
        },
        i.prototype.showItemNum = function() {
            var t = ItemManager.getNumByID(this.itemId_0);
            this.txtItem_0.text = "" + t;
            var e = ItemManager.getNumByID(this.itemId_1);
            this.txtItem_1.text = "" + e
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.openPanel(t.ModuleConst.MAIN_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(57)
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFight_0,
            function() {
                var i = 8 - e.service.getValue(t.AttrConst.daily_get_items_fight_times);
                i > 0 ? FightManager.fightNoMapBoss("", e.boss_0) : BubblerManager.getInstance().showText("您今天的挑战次数已经用完！")
            },
            this),
            ImageButtonUtil.add(this.btnFight_1,
            function() {
                var i = 8 - e.service.getValue(t.AttrConst.daily_get_items_fight_times);
                i > 0 ? FightManager.fightNoMapBoss("", e.boss_1) : BubblerManager.getInstance().showText("您今天的挑战次数已经用完！")
            },
            this),
            ImageButtonUtil.add(this.btnAddItem_0,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1710671,
                        productID: 248584
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(248584, i,
                        function() {
                            KTool.doExchange(9337, i,
                            function() {
                                e.service.updateValues().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAddItem_1,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1710672,
                        productID: 248585
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(248585, i,
                        function() {
                            KTool.doExchange(9338, i,
                            function() {
                                e.service.updateValues().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248586, 1,
                    function() {
                        KTool.doExchange(9339, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.icon_yao,
            function() {
                var t = {};
                t.id = e.medicamentId,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_mark,
            function() {
                var t;
                CountermarkXMLInfo.isminMark(e.markId) ? (t = {},
                t.ins = e.markId, tipsPop.TipsPop.openCounterMarkPop(t)) : (t = {},
                t.id = e.markId, tipsPop.TipsPop.openItemPop(t))
            },
            this),
            ImageButtonUtil.add(this.icon_skill,
            function() {
                var t = {
                    id: 30029
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_texing,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3214, "", AppDoStyle.NULL)
            },
            this);
            for (var i = 0; 5 > i; i++) this["btnExchange_" + i].index = i,
            this["btnBuy_" + i].index = i,
            ImageButtonUtil.add(this["btnExchange_" + i], this.onClickExchange, this),
            ImageButtonUtil.add(this["btnBuy_" + i], this.onClickBuy, this)
        },
        i.prototype.onClickBuy = function(e) {
            var i = this,
            n = e.currentTarget.index;
            if (0 == this.status[0]) BubblerManager.getInstance().showText("请先获取精灵！");
            else {
                var _ = [248578, 248579, 248580, 248581, 248582],
                r = [0, 3, 2, 1, 4];
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(_[n], 1,
                    function() {
                        4 == n ? KTool.doExchange(9335, 1,
                        function() {
                            i.service.updateValues().then(function() {
                                i.update()
                            })
                        }) : 0 != n ? SocketConnection.sendByQueue(t.CMD.WESK_CMD, [3, 1 + r[n]],
                        function(t) {
                            i.service.updateValues().then(function() {
                                i.update()
                            })
                        }) : i.service.updateValues().then(function() {
                            i.update()
                        })
                    })
                },
                this)
            }
        },
        i.prototype.onClickExchange = function(e) {
            var i = this,
            n = e.currentTarget.index,
            _ = [300, 90, 70, 60, 80];
            if (0 == this.status[0]) BubblerManager.getInstance().showText("请先获取精灵！");
            else if (0 == n) {
                var r = ItemManager.getNumByID(this.itemId_0);
                r >= _[n] ? KTool.doExchange(9340, 1,
                function() {
                    i.service.updateValues().then(function() {
                        i.update()
                    })
                },
                function() {
                    BubblerManager.getInstance().showText("皮肤兑换失败！")
                }) : BubblerManager.getInstance().showText("您没有足够的邪皇精粹！")
            } else {
                var s = ItemManager.getNumByID(this.itemId_1);
                s >= _[n] ? 4 == n ? KTool.doExchange(9341, 1,
                function() {
                    i.service.updateValues().then(function() {
                        i.update()
                    })
                },
                function() {
                    BubblerManager.getInstance().showText("兑换失败！")
                }) : PetManager.containsBagForID(3214) ? SocketConnection.sendByQueue(t.CMD.WESK_CMD, [4, 5 - n],
                function() {
                    i.service.updateValues().then(function() {
                        i.update()
                    })
                },
                function() {}) : Alarm.show("精灵不在战斗背包中") : BubblerManager.getInstance().showText("您没有足够的邪皇暗晶！")
            }
        },
        i
    } (BasicPanel);
    t.UpgradeAbilityPanel = e,
    __reflect(e.prototype, "evilKingWesk.UpgradeAbilityPanel")
} (evilKingWesk || (evilKingWesk = {}));
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
evilKingWesk; !
function(t) {
    var e = function(e) {
        function i(i, n) {
            var _ = e.call(this) || this;
            return _.baseScore = 8,
            _.service = i,
            _.baseScore = n,
            _.skinName = t.FightSuccesPopSkin,
            _
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnReward,
            function() {
                SocketConnection.sendByQueue(45686, [9, 0],
                function() {
                    PopViewManager.getInstance().hideView(t)
                },
                function() {})
            },
            this),
            this.txtNum_0.text = "" + this.baseScore,
            this.updateDisplay()
        },
        i.prototype.updateDisplay = function() {
            for (var e = this,
            i = [t.AttrConst.forever_curr_damage_average, t.AttrConst.forever_defend_damage_average, t.AttrConst.forever_round_average, t.AttrConst.forever_use_pet_average, t.AttrConst.forever_pet_dead_average], n = [t.AttrConst.forever_curr_damage_max, t.AttrConst.forever_curr_defend_damage_max, t.AttrConst.forever_curr_round, t.AttrConst.forever_curr_use_pet, t.AttrConst.forever_curr_pet_dead], _ = new egret.ByteArray, r = 0, s = i; r < s.length; r++) {
                var u = s[r];
                _.writeInt(u)
            }
            for (var o = 0,
            a = n; o < a.length; o++) {
                var u = a[o];
                _.writeInt(u)
            }
            SocketConnection.sendByQueue(CommandID.GET_MULTI_FOREVER, [i.length + n.length, _],
            function(i) {
                if (e.service) {
                    var n = i.data;
                    n.position = 0;
                    for (var _ = (n.readUnsignedInt(), []), r = 0; 5 > r; r++) _.push(Math.round(n.readFloat()));
                    for (var r = 5; 10 > r; r++) _.push(n.readUnsignedInt());
                    for (var s = [t.AttrConst.forever_average_damage_max, t.AttrConst.forever_defend_damage_max, t.AttrConst.forever_round_max, t.AttrConst.forever_use_pet_max, t.AttrConst.forever_pet_dead_max], u = ["单回合最高伤害", "累计承受伤害", "使用回合数", "使用精灵数", "阵亡精灵数"], o = {
                        jin: "金牌",
                        yin: "银牌",
                        tong: "铜牌"
                    },
                    a = 0; 5 > a; a++) {
                        var c = _[a],
                        g = e.service.getValue(s[a]),
                        l = _[5 + a];
                        e["txtResult_" + a + "_0"].text = "" + g,
                        e["txtResult_" + a + "_1"].text = "" + c;
                        var h = e.getMedal(a, l);
                        StatLogger.log("20210903版本系统功能", "万古邪皇·威斯克搬迁", u[a] + "为" + o[h]),
                        e["result_icon_" + a].source = "ekw_fight_succes_pop_icon_" + h + "_png",
                        e["txtResult_" + a + "_2"].text = "" + l
                    }
                    var p = e.service.getValue(t.AttrConst.forever_curr_combine_score);
                    e.txtCombinedScore.text = "" + p,
                    e.icon_1_1.visible = !1,
                    e.icon_1_2.visible = !1,
                    e.icon_1_3.visible = !1;
                    var x = 1;
                    p > 8e4 ? x = 3 : p >= 2e4 && (x = 2),
                    e.txtNum_2.text = "" + e.baseScore * x,
                    e["icon_1_" + x].visible = !0
                }
            })
        },
        i.prototype.getMedal = function(t, e) {
            var i = "tong";
            return 0 == t ? e > 5e3 ? i = "jin": e > 1e3 && (i = "yin") : 1 == t ? 500 > e ? i = "jin": 1500 >= e && (i = "yin") : 2 == t ? 1 == e ? i = "jin": 3 >= e && (i = "yin") : 3 == t ? 1 == e ? i = "jin": 5 >= e && (i = "yin") : (t = 4) && (0 == e ? i = "jin": 2 >= e && (i = "yin")),
            i
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.service = null,
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.FightSuccesPop = e,
    __reflect(e.prototype, "evilKingWesk.FightSuccesPop")
} (evilKingWesk || (evilKingWesk = {})),
window.evilKingWesk = window.evilKingWesk || {};
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
generateEUI.paths["resource/eui_skins/FightSuccesPopSkin.exml"] = window.evilKingWesk.FightSuccesPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "XL", "result_bg_0", "result_icon_0", "result_title_0", "sypj", "txtResult_0_1", "txtResult_0_2", "txtResult_0_0", "syzj", "result_0", "result_bg_1", "result_icon_1", "result_title_1", "sypj_2", "txtResult_1_1", "txtResult_1_2", "txtResult_1_0", "syzj_2", "result_1", "result_bg_2", "result_icon_2", "zu_3", "syzj_3", "sypj_3", "txtResult_2_1", "txtResult_2_2", "txtResult_2_0", "result_2", "result_bg_3", "result_icon_3", "zu_2", "sypj_4", "txtResult_3_1", "txtResult_3_2", "txtResult_3_0", "syzj_4", "result_3", "result_bg_4", "result_icon_4", "zu_1", "sypj_5", "txtResult_4_1", "txtResult_4_2", "txtResult_4_0", "syzj_5", "result_4", "combine_score_bg", "bczgpf", "txtCombinedScore", "txtLabel", "btnReward", "kuang_0", "icon_0", "txtTitle_0", "txtNum_0", "reward_0", "kuang_1", "txtTitle_1", "icon_1_3", "icon_1_2", "icon_1_1", "reward_1", "kuang_2", "txtTitle_2", "icon_2", "txtNum_2", "reward_2", "chengyi", "dengyu", "txtTips"],
        this.height = 529,
        this.width = 927,
        this.elementsContent = [this.XL_i(), this.result_0_i(), this.result_1_i(), this.result_2_i(), this.result_3_i(), this.result_4_i(), this.combine_score_bg_i(), this.bczgpf_i(), this.txtCombinedScore_i(), this.btnReward_i(), this.reward_0_i(), this.reward_1_i(), this.reward_2_i(), this.chengyi_i(), this.dengyu_i(), this.txtTips_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.XL_i = function() {
        var t = new eui.Group;
        return this.XL = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 488,
        t.source = "common_pop_point_png",
        t.width = 916,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_big_png",
        t.width = 909,
        t.x = 4,
        t.y = 22,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "ekw_fight_succes_pop_title_png",
        t.x = 32,
        t.y = 29,
        t
    },
    i.result_0_i = function() {
        var t = new eui.Group;
        return this.result_0 = t,
        t.x = 32,
        t.y = 82,
        t.elementsContent = [this.result_bg_0_i(), this.result_icon_0_i(), this.result_title_0_i(), this.sypj_i(), this.txtResult_0_1_i(), this.txtResult_0_2_i(), this.txtResult_0_0_i(), this.syzj_i()],
        t
    },
    i.result_bg_0_i = function() {
        var t = new eui.Image;
        return this.result_bg_0 = t,
        t.source = "ekw_fight_succes_pop_result_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.result_icon_0_i = function() {
        var t = new eui.Image;
        return this.result_icon_0 = t,
        t.source = "ekw_fight_succes_pop_icon_tong_png",
        t.x = 50,
        t.y = 45,
        t
    },
    i.result_title_0_i = function() {
        var t = new eui.Image;
        return this.result_title_0 = t,
        t.source = "ekw_fight_succes_pop_result_title_0_png",
        t.x = 17,
        t.y = 11,
        t
    },
    i.sypj_i = function() {
        var t = new eui.Label;
        return this.sypj = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯平均：",
        t.textColor = 5069183,
        t.x = 10,
        t.y = 160,
        t
    },
    i.txtResult_0_1_i = function() {
        var t = new eui.Label;
        return this.txtResult_0_1 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 82,
        t.y = 159,
        t
    },
    i.txtResult_0_2_i = function() {
        var t = new eui.Label;
        return this.txtResult_0_2 = t,
        t.size = 20,
        t.text = "0",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 90,
        t.x = 37,
        t.y = 131,
        t
    },
    i.txtResult_0_0_i = function() {
        var t = new eui.Label;
        return this.txtResult_0_0 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 82,
        t.y = 184,
        t
    },
    i.syzj_i = function() {
        var t = new eui.Label;
        return this.syzj = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯最佳：",
        t.textColor = 5069183,
        t.x = 10,
        t.y = 185,
        t
    },
    i.result_1_i = function() {
        var t = new eui.Group;
        return this.result_1 = t,
        t.x = 205,
        t.y = 82,
        t.elementsContent = [this.result_bg_1_i(), this.result_icon_1_i(), this.result_title_1_i(), this.sypj_2_i(), this.txtResult_1_1_i(), this.txtResult_1_2_i(), this.txtResult_1_0_i(), this.syzj_2_i()],
        t
    },
    i.result_bg_1_i = function() {
        var t = new eui.Image;
        return this.result_bg_1 = t,
        t.source = "ekw_fight_succes_pop_result_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.result_icon_1_i = function() {
        var t = new eui.Image;
        return this.result_icon_1 = t,
        t.source = "ekw_fight_succes_pop_icon_tong_png",
        t.x = 50,
        t.y = 45,
        t
    },
    i.result_title_1_i = function() {
        var t = new eui.Image;
        return this.result_title_1 = t,
        t.source = "ekw_fight_succes_pop_result_title_1_png",
        t.x = 26,
        t.y = 11,
        t
    },
    i.sypj_2_i = function() {
        var t = new eui.Label;
        return this.sypj_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯平均：",
        t.textColor = 5069183,
        t.x = 9,
        t.y = 161,
        t
    },
    i.txtResult_1_1_i = function() {
        var t = new eui.Label;
        return this.txtResult_1_1 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 82,
        t.y = 160,
        t
    },
    i.txtResult_1_2_i = function() {
        var t = new eui.Label;
        return this.txtResult_1_2 = t,
        t.size = 20,
        t.text = "0",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 90,
        t.x = 37,
        t.y = 131,
        t
    },
    i.txtResult_1_0_i = function() {
        var t = new eui.Label;
        return this.txtResult_1_0 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 82,
        t.y = 185,
        t
    },
    i.syzj_2_i = function() {
        var t = new eui.Label;
        return this.syzj_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯最佳：",
        t.textColor = 5069183,
        t.x = 9,
        t.y = 186,
        t
    },
    i.result_2_i = function() {
        var t = new eui.Group;
        return this.result_2 = t,
        t.x = 378,
        t.y = 82,
        t.elementsContent = [this.result_bg_2_i(), this.result_icon_2_i(), this.zu_3_i(), this.syzj_3_i(), this.sypj_3_i(), this.txtResult_2_1_i(), this.txtResult_2_2_i(), this.txtResult_2_0_i()],
        t
    },
    i.result_bg_2_i = function() {
        var t = new eui.Image;
        return this.result_bg_2 = t,
        t.source = "ekw_fight_succes_pop_result_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.result_icon_2_i = function() {
        var t = new eui.Image;
        return this.result_icon_2 = t,
        t.source = "ekw_fight_succes_pop_icon_jin_png",
        t.x = 44,
        t.y = 44,
        t
    },
    i.zu_3_i = function() {
        var t = new eui.Image;
        return this.zu_3 = t,
        t.source = "ekw_fight_succes_pop_zu_3_png",
        t.x = 35,
        t.y = 11,
        t
    },
    i.syzj_3_i = function() {
        var t = new eui.Label;
        return this.syzj_3 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯最佳：",
        t.textColor = 5069183,
        t.x = 9,
        t.y = 185,
        t
    },
    i.sypj_3_i = function() {
        var t = new eui.Label;
        return this.sypj_3 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯平均：",
        t.textColor = 5069183,
        t.x = 9,
        t.y = 160,
        t
    },
    i.txtResult_2_1_i = function() {
        var t = new eui.Label;
        return this.txtResult_2_1 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 82,
        t.y = 159,
        t
    },
    i.txtResult_2_2_i = function() {
        var t = new eui.Label;
        return this.txtResult_2_2 = t,
        t.size = 20,
        t.text = "0",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 90,
        t.x = 37,
        t.y = 131,
        t
    },
    i.txtResult_2_0_i = function() {
        var t = new eui.Label;
        return this.txtResult_2_0 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 82,
        t.y = 184,
        t
    },
    i.result_3_i = function() {
        var t = new eui.Group;
        return this.result_3 = t,
        t.x = 550,
        t.y = 82,
        t.elementsContent = [this.result_bg_3_i(), this.result_icon_3_i(), this.zu_2_i(), this.sypj_4_i(), this.txtResult_3_1_i(), this.txtResult_3_2_i(), this.txtResult_3_0_i(), this.syzj_4_i()],
        t
    },
    i.result_bg_3_i = function() {
        var t = new eui.Image;
        return this.result_bg_3 = t,
        t.source = "ekw_fight_succes_pop_result_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.result_icon_3_i = function() {
        var t = new eui.Image;
        return this.result_icon_3 = t,
        t.source = "ekw_fight_succes_pop_icon_yin_png",
        t.x = 50,
        t.y = 45,
        t
    },
    i.zu_2_i = function() {
        var t = new eui.Image;
        return this.zu_2 = t,
        t.source = "ekw_fight_succes_pop_zu_2_png",
        t.x = 35,
        t.y = 11,
        t
    },
    i.sypj_4_i = function() {
        var t = new eui.Label;
        return this.sypj_4 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯平均：",
        t.textColor = 5069183,
        t.x = 9,
        t.y = 160,
        t
    },
    i.txtResult_3_1_i = function() {
        var t = new eui.Label;
        return this.txtResult_3_1 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 81,
        t.y = 159,
        t
    },
    i.txtResult_3_2_i = function() {
        var t = new eui.Label;
        return this.txtResult_3_2 = t,
        t.size = 20,
        t.text = "0",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 90,
        t.x = 37,
        t.y = 131,
        t
    },
    i.txtResult_3_0_i = function() {
        var t = new eui.Label;
        return this.txtResult_3_0 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 81,
        t.y = 184,
        t
    },
    i.syzj_4_i = function() {
        var t = new eui.Label;
        return this.syzj_4 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯最佳：",
        t.textColor = 5069183,
        t.x = 9,
        t.y = 185,
        t
    },
    i.result_4_i = function() {
        var t = new eui.Group;
        return this.result_4 = t,
        t.x = 723,
        t.y = 81,
        t.elementsContent = [this.result_bg_4_i(), this.result_icon_4_i(), this.zu_1_i(), this.sypj_5_i(), this.txtResult_4_1_i(), this.txtResult_4_2_i(), this.txtResult_4_0_i(), this.syzj_5_i()],
        t
    },
    i.result_bg_4_i = function() {
        var t = new eui.Image;
        return this.result_bg_4 = t,
        t.source = "ekw_fight_succes_pop_result_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.result_icon_4_i = function() {
        var t = new eui.Image;
        return this.result_icon_4 = t,
        t.source = "ekw_fight_succes_pop_icon_jin_png",
        t.x = 44,
        t.y = 44,
        t
    },
    i.zu_1_i = function() {
        var t = new eui.Image;
        return this.zu_1 = t,
        t.source = "ekw_fight_succes_pop_zu_1_png",
        t.x = 35,
        t.y = 11,
        t
    },
    i.sypj_5_i = function() {
        var t = new eui.Label;
        return this.sypj_5 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯平均：",
        t.textColor = 5069183,
        t.x = 9,
        t.y = 161,
        t
    },
    i.txtResult_4_1_i = function() {
        var t = new eui.Label;
        return this.txtResult_4_1 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 81,
        t.y = 160,
        t
    },
    i.txtResult_4_2_i = function() {
        var t = new eui.Label;
        return this.txtResult_4_2 = t,
        t.size = 20,
        t.text = "0",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 90,
        t.x = 37,
        t.y = 132,
        t
    },
    i.txtResult_4_0_i = function() {
        var t = new eui.Label;
        return this.txtResult_4_0 = t,
        t.size = 18,
        t.text = "0",
        t.textColor = 16773461,
        t.width = 88,
        t.x = 81,
        t.y = 185,
        t
    },
    i.syzj_5_i = function() {
        var t = new eui.Label;
        return this.syzj_5 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "生涯最佳：",
        t.textColor = 5069183,
        t.x = 9,
        t.y = 186,
        t
    },
    i.combine_score_bg_i = function() {
        var t = new eui.Image;
        return this.combine_score_bg = t,
        t.source = "ekw_fight_succes_pop_combine_score_bg_png",
        t.x = 33,
        t.y = 310,
        t
    },
    i.bczgpf_i = function() {
        var t = new eui.Label;
        return this.bczgpf = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "本次综合评分：",
        t.textColor = 4544401,
        t.x = 279,
        t.y = 321,
        t
    },
    i.txtCombinedScore_i = function() {
        var t = new eui.Label;
        return this.txtCombinedScore = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 28,
        t.text = "0",
        t.textColor = 4544401,
        t.x = 437,
        t.y = 318,
        t
    },
    i.btnReward_i = function() {
        var t = new eui.Group;
        return this.btnReward = t,
        t.x = 689,
        t.y = 391,
        t.elementsContent = [this._Image3_i(), this.txtLabel_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 41,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "领取奖励",
        t.textColor = 8341784,
        t.x = 19,
        t.y = 11,
        t
    },
    i.reward_0_i = function() {
        var t = new eui.Group;
        return this.reward_0 = t,
        t.x = 146,
        t.y = 357,
        t.elementsContent = [this.kuang_0_i(), this.icon_0_i(), this.txtTitle_0_i(), this.txtNum_0_i()],
        t
    },
    i.kuang_0_i = function() {
        var t = new eui.Image;
        return this.kuang_0 = t,
        t.source = "ekw_fight_succes_pop_reward_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.source = "ekw_fight_succes_pop_item_1710639_png",
        t.x = 32,
        t.y = 36,
        t
    },
    i.txtTitle_0_i = function() {
        var t = new eui.Label;
        return this.txtTitle_0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "基础奖励",
        t.textColor = 16777215,
        t.x = 15,
        t.y = 5,
        t
    },
    i.txtNum_0_i = function() {
        var t = new eui.Label;
        return this.txtNum_0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "10",
        t.textColor = 5069183,
        t.x = 70,
        t.y = 86,
        t
    },
    i.reward_1_i = function() {
        var t = new eui.Group;
        return this.reward_1 = t,
        t.x = 343,
        t.y = 357,
        t.elementsContent = [this.kuang_1_i(), this.txtTitle_1_i(), this.icon_1_3_i(), this.icon_1_2_i(), this.icon_1_1_i()],
        t
    },
    i.kuang_1_i = function() {
        var t = new eui.Image;
        return this.kuang_1 = t,
        t.source = "ekw_fight_succes_pop_reward_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtTitle_1_i = function() {
        var t = new eui.Label;
        return this.txtTitle_1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "奖励倍数",
        t.textColor = 16777215,
        t.x = 15,
        t.y = 5,
        t
    },
    i.icon_1_3_i = function() {
        var t = new eui.Image;
        return this.icon_1_3 = t,
        t.source = "ekw_fight_succes_pop_icon_1_3_png",
        t.x = 29,
        t.y = 40,
        t
    },
    i.icon_1_2_i = function() {
        var t = new eui.Image;
        return this.icon_1_2 = t,
        t.source = "ekw_fight_succes_pop_icon_1_2_png",
        t.x = 29,
        t.y = 40,
        t
    },
    i.icon_1_1_i = function() {
        var t = new eui.Image;
        return this.icon_1_1 = t,
        t.source = "ekw_fight_succes_pop_icon_1_1_png",
        t.x = 47,
        t.y = 40,
        t
    },
    i.reward_2_i = function() {
        var t = new eui.Group;
        return this.reward_2 = t,
        t.x = 540,
        t.y = 357,
        t.elementsContent = [this.kuang_2_i(), this.txtTitle_2_i(), this.icon_2_i(), this.txtNum_2_i()],
        t
    },
    i.kuang_2_i = function() {
        var t = new eui.Image;
        return this.kuang_2 = t,
        t.source = "ekw_fight_succes_pop_reward_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtTitle_2_i = function() {
        var t = new eui.Label;
        return this.txtTitle_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "最终奖励",
        t.textColor = 16777215,
        t.x = 15,
        t.y = 5,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.source = "ekw_fight_succes_pop_item_1710639_png",
        t.x = 35,
        t.y = 36,
        t
    },
    i.txtNum_2_i = function() {
        var t = new eui.Label;
        return this.txtNum_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "30",
        t.textColor = 5003391,
        t.x = 71,
        t.y = 86,
        t
    },
    i.chengyi_i = function() {
        var t = new eui.Image;
        return this.chengyi = t,
        t.source = "ekw_fight_succes_pop_chengyi_png",
        t.x = 281,
        t.y = 393,
        t
    },
    i.dengyu_i = function() {
        var t = new eui.Image;
        return this.dengyu = t,
        t.source = "ekw_fight_succes_pop_dengyu_png",
        t.x = 477,
        t.y = 400,
        t
    },
    i.txtTips_i = function() {
        var t = new eui.Label;
        return this.txtTips = t,
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "TIPS：评分0-20000奖励倍数为1，评分20000-80000奖励倍数为2，评分＞80000奖励倍数为3",
        t.textColor = 4544401,
        t.width = 847.946,
        t.y = 488,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FightWestPanelSkin.exml"] = window.evilKingWesk.FightWestPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "need", "numbg", "btnBuyTimes", "txt1", "txtLeftTimes", "txtClock", "grpClock", "Cishu", "btnFight", "btnExchange", "got_icon", "grpBtns", "up_bg", "btnClose", "btnHelp", "top", "numbg_2", "btnBuyItem", "txt2", "txtItemCount", "a_1710639", "grpItems", "btnBag", "btnCure", "grpLeft"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.top_i(), this.grpItems_i(), this.grpLeft_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "ekw_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 627,
        t.horizontalCenter = 30.5,
        t.visible = !0,
        t.width = 975,
        t.y = 13,
        t.elementsContent = [this.pet_i(), this.grpBtns_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "ekw_fight_west_panel_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpBtns_i = function() {
        var t = new eui.Group;
        return this.grpBtns = t,
        t.x = 204,
        t.y = 483,
        t.elementsContent = [this.need_i(), this.Cishu_i(), this.btnFight_i(), this.btnExchange_i(), this.got_icon_i()],
        t
    },
    i.need_i = function() {
        var t = new eui.Image;
        return this.need = t,
        t.source = "ekw_fight_west_panel_need_png",
        t.x = 467,
        t.y = 69,
        t
    },
    i.Cishu_i = function() {
        var t = new eui.Group;
        return this.Cishu = t,
        t.visible = !0,
        t.x = 0,
        t.y = 7,
        t.elementsContent = [this.numbg_i(), this.btnBuyTimes_i(), this.txt1_i(), this.txtLeftTimes_i(), this.grpClock_i()],
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "ekw_fight_west_panel_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.btnBuyTimes_i = function() {
        var t = new eui.Image;
        return this.btnBuyTimes = t,
        t.source = "ekw_fight_west_panel_btnadd_png",
        t.x = 208,
        t.y = 0,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.size = 20,
        t.text = "免费挑战次数：",
        t.textColor = 16777215,
        t.x = 34,
        t.y = 7,
        t
    },
    i.txtLeftTimes_i = function() {
        var t = new eui.Label;
        return this.txtLeftTimes = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 173,
        t.y = 7,
        t
    },
    i.grpClock_i = function() {
        var t = new eui.Group;
        return this.grpClock = t,
        t.x = 12.09,
        t.y = 41,
        t.elementsContent = [this.txtClock_i(), this._Label1_i()],
        t
    },
    i.txtClock_i = function() {
        var t = new eui.Label;
        return this.txtClock = t,
        t.size = 18,
        t.text = "99:99",
        t.textAlign = "right",
        t.textColor = 12229119,
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "后次数+1",
        t.textAlign = "left",
        t.textColor = 12229119,
        t.width = 150,
        t.x = 84.13,
        t.y = 0,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "ekw_fight_west_panel_btnfight_png",
        t.x = 263,
        t.y = 0,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.source = "ekw_fight_west_panel_btnexchange_png",
        t.x = 505,
        t.y = 0,
        t
    },
    i.got_icon_i = function() {
        var t = new eui.Image;
        return this.got_icon = t,
        t.source = "ekw_pp_done_png",
        t.x = 514,
        t.y = 16,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.btnHelp_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "ekw_fight_west_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "ekw_fight_west_panel_btnclose_png",
        t.x = 31,
        t.y = 5,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "ekw_fight_west_panel_btnhelp_png",
        t.x = 130,
        t.y = 5,
        t
    },
    i.grpItems_i = function() {
        var t = new eui.Group;
        return this.grpItems = t,
        t.right = 54,
        t.y = 15,
        t.elementsContent = [this.numbg_2_i(), this.btnBuyItem_i(), this.txt2_i(), this.txtItemCount_i(), this.a_1710639_i()],
        t
    },
    i.numbg_2_i = function() {
        var t = new eui.Image;
        return this.numbg_2 = t,
        t.source = "ekw_fight_west_panel_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.btnBuyItem_i = function() {
        var t = new eui.Image;
        return this.btnBuyItem = t,
        t.source = "ekw_fight_west_panel_btnadd_png",
        t.x = 200,
        t.y = 0,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.size = 18,
        t.text = "邪皇之骨：",
        t.textColor = 16777215,
        t.verticalAlign = "top",
        t.x = 70,
        t.y = 9,
        t
    },
    i.txtItemCount_i = function() {
        var t = new eui.Label;
        return this.txtItemCount = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.verticalAlign = "top",
        t.x = 154,
        t.y = 9,
        t
    },
    i.a_1710639_i = function() {
        var t = new eui.Image;
        return this.a_1710639 = t,
        t.source = "ekw_fight_west_panel_1710639_png",
        t.x = 36,
        t.y = 1,
        t
    },
    i.grpLeft_i = function() {
        var t = new eui.Group;
        return this.grpLeft = t,
        t.x = 19,
        t.y = 262,
        t.elementsContent = [this.btnBag_i(), this.btnCure_i()],
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "ekw_fight_west_panel_btnbag_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "ekw_fight_west_panel_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.evilKingWesk.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "title", "btnInfo", "btnBuy", "btnGet", "btnUpgrade", "up_bg", "btnClose", "btnHelp", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "ekw_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 17,
        t.elementsContent = [this.pet_i(), this.title_i(), this.btnInfo_i(), this.btnBuy_i(), this.btnGet_i(), this.btnUpgrade_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "ekw_main_panel_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "ekw_main_panel_title_png",
        t.x = 264,
        t.y = 26,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "ekw_main_panel_btninfo_png",
        t.x = 35,
        t.y = 502,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.source = "ekw_main_panel_btnbuy_png",
        t.x = 418,
        t.y = 475,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "ekw_main_panel_btnget_png",
        t.x = 156,
        t.y = 492,
        t
    },
    i.btnUpgrade_i = function() {
        var t = new eui.Image;
        return this.btnUpgrade = t,
        t.source = "ekw_main_panel_btnupgrade_png",
        t.x = 707,
        t.y = 493,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.btnHelp_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "ekw_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "ekw_main_panel_btnclose_png",
        t.x = 31,
        t.y = 5,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "ekw_main_panel_btnhelp_png",
        t.x = 130,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/UpgradeAbilityPanelSkin.exml"] = window.evilKingWesk.UpgradeAbilityPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "tipsbg_1", "tipsbg_0", "tzhdxhaj", "tzhdxhjc", "numbg", "btnAddTimes", "sytzcs", "txtLeftTimes", "Cishu", "item_1710672", "item_1710671", "btnFight_1", "btnFight_0", "items_bg0", "icon_0", "btnExchangeBg_0", "txtNum_0", "buy_icon_0", "btnExchange_0", "btnBuy_0", "title_0", "icon_got_0", "item0", "items_bg1", "btnExchangeBg_1", "txtNum_1", "buy_icon_1", "btnExchange_1", "btnBuy_1", "title_1", "icon_skill", "icon_got_1", "item1", "items_bg2", "btnExchangeBg_2", "txtNum_2", "buy_icon_2", "btnExchange_2", "btnBuy_2", "icon_texing", "title_2", "icon_got_2", "item2", "items_bg3", "btnExchangeBg_3", "txtNum_3", "buy_icon_3", "btnExchange_3", "btnBuy_3", "title_3", "icon_mark", "icon_got_3", "item3", "items_bg4", "btnExchangeBg_4", "txtNum_4", "buy_icon_4", "btnExchange_4", "btnBuy_4", "title_4", "icon_yao", "icon_got_4", "item4", "right", "btnBag", "btnCure", "grpLeft", "up_bg", "btnClose", "btnHelp", "top", "numbg_1", "btnAddItem_1", "xhaj", "txtItem_1", "item_1", "Anjing", "numbg_0", "btnAddItem_0", "xhjc", "txtItem_0", "item_0", "Jingcui"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.grpLeft_i(), this.top_i(), this.Anjing_i(), this.Jingcui_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "ekw_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 5.5,
        t.y = 60,
        t.elementsContent = [this.pet_i(), this.tipsbg_1_i(), this.tipsbg_0_i(), this.tzhdxhaj_i(), this.tzhdxhjc_i(), this.Cishu_i(), this.item_1710672_i(), this.item_1710671_i(), this.btnFight_1_i(), this.btnFight_0_i(), this.right_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "ekw_upgrade_ability_panel_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.tipsbg_1_i = function() {
        var t = new eui.Image;
        return this.tipsbg_1 = t,
        t.source = "ekw_upgrade_ability_panel_tipsbg_png",
        t.x = 290,
        t.y = 376,
        t
    },
    i.tipsbg_0_i = function() {
        var t = new eui.Image;
        return this.tipsbg_0 = t,
        t.source = "ekw_upgrade_ability_panel_tipsbg_png",
        t.x = 27,
        t.y = 376,
        t
    },
    i.tzhdxhaj_i = function() {
        var t = new eui.Label;
        return this.tzhdxhaj = t,
        t.size = 20,
        t.text = "挑战获得邪皇暗晶",
        t.textColor = 16777215,
        t.x = 389,
        t.y = 389,
        t
    },
    i.tzhdxhjc_i = function() {
        var t = new eui.Label;
        return this.tzhdxhjc = t,
        t.size = 20,
        t.text = "挑战获得邪皇精粹",
        t.textColor = 16777215,
        t.x = 127,
        t.y = 389,
        t
    },
    i.Cishu_i = function() {
        var t = new eui.Group;
        return this.Cishu = t,
        t.x = 175,
        t.y = 502,
        t.elementsContent = [this.numbg_i(), this.btnAddTimes_i(), this.sytzcs_i(), this.txtLeftTimes_i()],
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "ekw_upgrade_ability_panel_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.btnAddTimes_i = function() {
        var t = new eui.Image;
        return this.btnAddTimes = t,
        t.source = "ekw_upgrade_ability_panel_btnadd_png",
        t.x = 209,
        t.y = 0,
        t
    },
    i.sytzcs_i = function() {
        var t = new eui.Label;
        return this.sytzcs = t,
        t.size = 20,
        t.text = "剩余挑战次数：",
        t.textColor = 16777215,
        t.x = 34,
        t.y = 8,
        t
    },
    i.txtLeftTimes_i = function() {
        var t = new eui.Label;
        return this.txtLeftTimes = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 173,
        t.y = 8,
        t
    },
    i.item_1710672_i = function() {
        var t = new eui.Image;
        return this.item_1710672 = t,
        t.source = "ekw_upgrade_ability_panel_item_1710672_png",
        t.x = 346,
        t.y = 379,
        t
    },
    i.item_1710671_i = function() {
        var t = new eui.Image;
        return this.item_1710671 = t,
        t.source = "ekw_upgrade_ability_panel_item_1710671_png",
        t.x = 87,
        t.y = 375,
        t
    },
    i.btnFight_1_i = function() {
        var t = new eui.Image;
        return this.btnFight_1 = t,
        t.source = "ekw_upgrade_ability_panel_btnfight_1_png",
        t.x = 313,
        t.y = 417,
        t
    },
    i.btnFight_0_i = function() {
        var t = new eui.Image;
        return this.btnFight_0 = t,
        t.source = "ekw_upgrade_ability_panel_btnfight_0_png",
        t.x = 50,
        t.y = 417,
        t
    },
    i.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.x = 621,
        t.y = 23,
        t.elementsContent = [this.item0_i(), this.item1_i(), this.item2_i(), this.item3_i(), this.item4_i()],
        t
    },
    i.item0_i = function() {
        var t = new eui.Group;
        return this.item0 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.items_bg0_i(), this.icon_0_i(), this.btnExchange_0_i(), this.btnBuy_0_i(), this.title_0_i(), this.icon_got_0_i()],
        t
    },
    i.items_bg0_i = function() {
        var t = new eui.Image;
        return this.items_bg0 = t,
        t.source = "ekw_upgrade_ability_panel_items_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.source = "ekw_upgrade_ability_panel_icon_0_png",
        t.x = 26,
        t.y = 1,
        t
    },
    i.btnExchange_0_i = function() {
        var t = new eui.Group;
        return this.btnExchange_0 = t,
        t.x = 192,
        t.y = 19,
        t.elementsContent = [this.btnExchangeBg_0_i(), this.txtNum_0_i(), this.buy_icon_0_i()],
        t
    },
    i.btnExchangeBg_0_i = function() {
        var t = new eui.Image;
        return this.btnExchangeBg_0 = t,
        t.source = "ekw_upgrade_ability_panel_btn_exchange_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum_0_i = function() {
        var t = new eui.Label;
        return this.txtNum_0 = t,
        t.size = 22,
        t.text = "x300",
        t.textColor = 16777215,
        t.x = 65,
        t.y = 17,
        t
    },
    i.buy_icon_0_i = function() {
        var t = new eui.Image;
        return this.buy_icon_0 = t,
        t.scaleX = .8,
        t.scaleY = .8,
        t.source = "ekw_upgrade_ability_panel_item_1710671_png",
        t.x = 28,
        t.y = 12,
        t
    },
    i.btnBuy_0_i = function() {
        var t = new eui.Image;
        return this.btnBuy_0 = t,
        t.source = "ekw_upgrade_ability_panel_buy_icon_png",
        t.x = 351,
        t.y = 15,
        t
    },
    i.title_0_i = function() {
        var t = new eui.Image;
        return this.title_0 = t,
        t.source = "ekw_upgrade_ability_panel_title_0_png",
        t.x = 2,
        t.y = 20,
        t
    },
    i.icon_got_0_i = function() {
        var t = new eui.Image;
        return this.icon_got_0 = t,
        t.source = "ekw_upgrade_ability_panel_icon_got_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.x = 0,
        t.y = 100,
        t.elementsContent = [this.items_bg1_i(), this.btnExchange_1_i(), this.btnBuy_1_i(), this.title_1_i(), this.icon_skill_i(), this.icon_got_1_i()],
        t
    },
    i.items_bg1_i = function() {
        var t = new eui.Image;
        return this.items_bg1 = t,
        t.source = "ekw_upgrade_ability_panel_items_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnExchange_1_i = function() {
        var t = new eui.Group;
        return this.btnExchange_1 = t,
        t.x = 192,
        t.y = 19,
        t.elementsContent = [this.btnExchangeBg_1_i(), this.txtNum_1_i(), this.buy_icon_1_i()],
        t
    },
    i.btnExchangeBg_1_i = function() {
        var t = new eui.Image;
        return this.btnExchangeBg_1 = t,
        t.source = "ekw_upgrade_ability_panel_btn_exchange_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum_1_i = function() {
        var t = new eui.Label;
        return this.txtNum_1 = t,
        t.size = 22,
        t.text = "x90",
        t.textColor = 16777215,
        t.x = 71,
        t.y = 17,
        t
    },
    i.buy_icon_1_i = function() {
        var t = new eui.Image;
        return this.buy_icon_1 = t,
        t.scaleX = .8,
        t.scaleY = .8,
        t.source = "ekw_upgrade_ability_panel_item_1710672_png",
        t.x = 27,
        t.y = 14,
        t
    },
    i.btnBuy_1_i = function() {
        var t = new eui.Image;
        return this.btnBuy_1 = t,
        t.source = "ekw_upgrade_ability_panel_buy_icon_png",
        t.x = 351,
        t.y = 15,
        t
    },
    i.title_1_i = function() {
        var t = new eui.Image;
        return this.title_1 = t,
        t.source = "ekw_upgrade_ability_panel_title_1_png",
        t.x = 2,
        t.y = 20,
        t
    },
    i.icon_skill_i = function() {
        var t = new eui.Image;
        return this.icon_skill = t,
        t.source = "ekw_upgrade_ability_panel_icon_skill_png",
        t.x = 104,
        t.y = 13,
        t
    },
    i.icon_got_1_i = function() {
        var t = new eui.Image;
        return this.icon_got_1 = t,
        t.source = "ekw_upgrade_ability_panel_icon_got_png",
        t.visible = !1,
        t.x = 0,
        t.y = 1,
        t
    },
    i.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.x = 0,
        t.y = 201,
        t.elementsContent = [this.items_bg2_i(), this.btnExchange_2_i(), this.btnBuy_2_i(), this.icon_texing_i(), this.title_2_i(), this.icon_got_2_i()],
        t
    },
    i.items_bg2_i = function() {
        var t = new eui.Image;
        return this.items_bg2 = t,
        t.source = "ekw_upgrade_ability_panel_items_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnExchange_2_i = function() {
        var t = new eui.Group;
        return this.btnExchange_2 = t,
        t.x = 192,
        t.y = 18,
        t.elementsContent = [this.btnExchangeBg_2_i(), this.txtNum_2_i(), this.buy_icon_2_i()],
        t
    },
    i.btnExchangeBg_2_i = function() {
        var t = new eui.Image;
        return this.btnExchangeBg_2 = t,
        t.source = "ekw_upgrade_ability_panel_btn_exchange_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum_2_i = function() {
        var t = new eui.Label;
        return this.txtNum_2 = t,
        t.size = 22,
        t.text = "x70",
        t.textColor = 16777215,
        t.x = 71,
        t.y = 17,
        t
    },
    i.buy_icon_2_i = function() {
        var t = new eui.Image;
        return this.buy_icon_2 = t,
        t.scaleX = .8,
        t.scaleY = .8,
        t.source = "ekw_upgrade_ability_panel_item_1710672_png",
        t.x = 28,
        t.y = 14,
        t
    },
    i.btnBuy_2_i = function() {
        var t = new eui.Image;
        return this.btnBuy_2 = t,
        t.source = "ekw_upgrade_ability_panel_buy_icon_png",
        t.x = 351,
        t.y = 14,
        t
    },
    i.icon_texing_i = function() {
        var t = new eui.Image;
        return this.icon_texing = t,
        t.source = "ekw_upgrade_ability_panel_icon_texing_png",
        t.x = 107,
        t.y = 11,
        t
    },
    i.title_2_i = function() {
        var t = new eui.Image;
        return this.title_2 = t,
        t.source = "ekw_upgrade_ability_panel_title_2_png",
        t.x = 2,
        t.y = 20,
        t
    },
    i.icon_got_2_i = function() {
        var t = new eui.Image;
        return this.icon_got_2 = t,
        t.source = "ekw_upgrade_ability_panel_icon_got_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 0,
        t.y = 301,
        t.elementsContent = [this.items_bg3_i(), this.btnExchange_3_i(), this.btnBuy_3_i(), this.title_3_i(), this.icon_mark_i(), this.icon_got_3_i()],
        t
    },
    i.items_bg3_i = function() {
        var t = new eui.Image;
        return this.items_bg3 = t,
        t.source = "ekw_upgrade_ability_panel_items_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnExchange_3_i = function() {
        var t = new eui.Group;
        return this.btnExchange_3 = t,
        t.x = 192,
        t.y = 18,
        t.elementsContent = [this.btnExchangeBg_3_i(), this.txtNum_3_i(), this.buy_icon_3_i()],
        t
    },
    i.btnExchangeBg_3_i = function() {
        var t = new eui.Image;
        return this.btnExchangeBg_3 = t,
        t.source = "ekw_upgrade_ability_panel_btn_exchange_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum_3_i = function() {
        var t = new eui.Label;
        return this.txtNum_3 = t,
        t.size = 22,
        t.text = "x60",
        t.textColor = 16777215,
        t.x = 71,
        t.y = 17,
        t
    },
    i.buy_icon_3_i = function() {
        var t = new eui.Image;
        return this.buy_icon_3 = t,
        t.scaleX = .8,
        t.scaleY = .8,
        t.source = "ekw_upgrade_ability_panel_item_1710672_png",
        t.x = 28,
        t.y = 14,
        t
    },
    i.btnBuy_3_i = function() {
        var t = new eui.Image;
        return this.btnBuy_3 = t,
        t.source = "ekw_upgrade_ability_panel_buy_icon_png",
        t.x = 351,
        t.y = 14,
        t
    },
    i.title_3_i = function() {
        var t = new eui.Image;
        return this.title_3 = t,
        t.source = "ekw_upgrade_ability_panel_title_3_png",
        t.x = 2,
        t.y = 20,
        t
    },
    i.icon_mark_i = function() {
        var t = new eui.Image;
        return this.icon_mark = t,
        t.source = "ekw_upgrade_ability_panel_icon_mark_png",
        t.x = 105,
        t.y = 13,
        t
    },
    i.icon_got_3_i = function() {
        var t = new eui.Image;
        return this.icon_got_3 = t,
        t.source = "ekw_upgrade_ability_panel_icon_got_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item4_i = function() {
        var t = new eui.Group;
        return this.item4 = t,
        t.x = 0,
        t.y = 401,
        t.elementsContent = [this.items_bg4_i(), this.btnExchange_4_i(), this.btnBuy_4_i(), this.title_4_i(), this.icon_yao_i(), this.icon_got_4_i()],
        t
    },
    i.items_bg4_i = function() {
        var t = new eui.Image;
        return this.items_bg4 = t,
        t.source = "ekw_upgrade_ability_panel_items_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnExchange_4_i = function() {
        var t = new eui.Group;
        return this.btnExchange_4 = t,
        t.x = 192,
        t.y = 18,
        t.elementsContent = [this.btnExchangeBg_4_i(), this.txtNum_4_i(), this.buy_icon_4_i()],
        t
    },
    i.btnExchangeBg_4_i = function() {
        var t = new eui.Image;
        return this.btnExchangeBg_4 = t,
        t.source = "ekw_upgrade_ability_panel_btn_exchange_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum_4_i = function() {
        var t = new eui.Label;
        return this.txtNum_4 = t,
        t.size = 22,
        t.text = "x80",
        t.textColor = 16777215,
        t.x = 71,
        t.y = 17,
        t
    },
    i.buy_icon_4_i = function() {
        var t = new eui.Image;
        return this.buy_icon_4 = t,
        t.scaleX = .8,
        t.scaleY = .8,
        t.source = "ekw_upgrade_ability_panel_item_1710672_png",
        t.x = 28,
        t.y = 14,
        t
    },
    i.btnBuy_4_i = function() {
        var t = new eui.Image;
        return this.btnBuy_4 = t,
        t.source = "ekw_upgrade_ability_panel_buy_icon_png",
        t.x = 351,
        t.y = 14,
        t
    },
    i.title_4_i = function() {
        var t = new eui.Image;
        return this.title_4 = t,
        t.source = "ekw_upgrade_ability_panel_title_4_png",
        t.x = 2,
        t.y = 20,
        t
    },
    i.icon_yao_i = function() {
        var t = new eui.Image;
        return this.icon_yao = t,
        t.source = "ekw_upgrade_ability_panel_icon_yao_png",
        t.x = 114,
        t.y = 13,
        t
    },
    i.icon_got_4_i = function() {
        var t = new eui.Image;
        return this.icon_got_4 = t,
        t.source = "ekw_upgrade_ability_panel_icon_got_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpLeft_i = function() {
        var t = new eui.Group;
        return this.grpLeft = t,
        t.x = 19,
        t.y = 262,
        t.elementsContent = [this.btnBag_i(), this.btnCure_i()],
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "ekw_upgrade_ability_panel_btnbag_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "ekw_upgrade_ability_panel_btncure_png",
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
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.btnHelp_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "ekw_upgrade_ability_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "ekw_upgrade_ability_panel_btnclose_png",
        t.x = 31,
        t.y = 5,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "ekw_upgrade_ability_panel_btnhelp_png",
        t.x = 130,
        t.y = 5,
        t
    },
    i.Anjing_i = function() {
        var t = new eui.Group;
        return this.Anjing = t,
        t.x = 841,
        t.y = 12,
        t.elementsContent = [this.numbg_1_i(), this.btnAddItem_1_i(), this.xhaj_i(), this.txtItem_1_i(), this.item_1_i()],
        t
    },
    i.numbg_1_i = function() {
        var t = new eui.Image;
        return this.numbg_1 = t,
        t.source = "ekw_upgrade_ability_panel_numbg_png",
        t.x = 0,
        t.y = 4,
        t
    },
    i.btnAddItem_1_i = function() {
        var t = new eui.Image;
        return this.btnAddItem_1 = t,
        t.source = "ekw_upgrade_ability_panel_btnadd_png",
        t.x = 200,
        t.y = 3,
        t
    },
    i.xhaj_i = function() {
        var t = new eui.Label;
        return this.xhaj = t,
        t.size = 18,
        t.text = "邪皇暗晶：",
        t.textColor = 16777215,
        t.x = 70,
        t.y = 12,
        t
    },
    i.txtItem_1_i = function() {
        var t = new eui.Label;
        return this.txtItem_1 = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 154,
        t.y = 12,
        t
    },
    i.item_1_i = function() {
        var t = new eui.Image;
        return this.item_1 = t,
        t.source = "ekw_upgrade_ability_panel_item_1710672_png",
        t.x = 23,
        t.y = 0,
        t
    },
    i.Jingcui_i = function() {
        var t = new eui.Group;
        return this.Jingcui = t,
        t.x = 592,
        t.y = 10,
        t.elementsContent = [this.numbg_0_i(), this.btnAddItem_0_i(), this.xhjc_i(), this.txtItem_0_i(), this.item_0_i()],
        t
    },
    i.numbg_0_i = function() {
        var t = new eui.Image;
        return this.numbg_0 = t,
        t.source = "ekw_upgrade_ability_panel_numbg_png",
        t.x = 0,
        t.y = 6,
        t
    },
    i.btnAddItem_0_i = function() {
        var t = new eui.Image;
        return this.btnAddItem_0 = t,
        t.source = "ekw_upgrade_ability_panel_btnadd_png",
        t.x = 200,
        t.y = 5,
        t
    },
    i.xhjc_i = function() {
        var t = new eui.Label;
        return this.xhjc = t,
        t.size = 18,
        t.text = "邪皇精粹：",
        t.textColor = 16777215,
        t.x = 70,
        t.y = 14,
        t
    },
    i.txtItem_0_i = function() {
        var t = new eui.Label;
        return this.txtItem_0 = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 154,
        t.y = 14,
        t
    },
    i.item_0_i = function() {
        var t = new eui.Image;
        return this.item_0 = t,
        t.source = "ekw_upgrade_ability_panel_item_1710671_png",
        t.x = 25,
        t.y = 0,
        t
    },
    e
} (eui.Skin);