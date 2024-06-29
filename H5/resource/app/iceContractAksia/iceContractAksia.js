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
iceContractAksia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.AttrConst.forever_pet_state, t.AttrConst.forever_level_state, t.AttrConst.forever_second_state, t.AttrConst.forever_third_state, t.AttrConst.forever_fourth_state], [t.AttrConst.daily_first_times, t.AttrConst.daily_second_times, t.AttrConst.daily_second_countdown, t.AttrConst.daily_third_times, t.AttrConst.daily_forth_times, t.AttrConst.daily_upgrade_times]),
            i.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.HUNDUN_ZHIXI_PANEL
            },
            {
                panelName: t.ModuleConst.BINGXUE_ZHISHANG_PANEL
            },
            {
                panelName: t.ModuleConst.YUNXING_ZHIFENG_PANEL
            },
            {
                panelName: t.ModuleConst.TIANXIN_QIYUE_PANEL
            },
            {
                panelName: t.ModuleConst.UPGRADE_ABILITY_PANEL
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.IceContractAksia = e,
    __reflect(e.prototype, "iceContractAksia.IceContractAksia")
} (iceContractAksia || (iceContractAksia = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
iceContractAksia; !
function(t) {
    var e = function() {
        function t() {}
        return t.forever_pet_state = 101669,
        t.forever_level_state = 101670,
        t.forever_second_state = 101671,
        t.forever_third_state = 101672,
        t.forever_fourth_state = 101673,
        t.daily_first_times = 18661,
        t.daily_second_times = 18662,
        t.daily_second_countdown = 18663,
        t.daily_third_times = 18664,
        t.daily_forth_times = 18665,
        t.daily_upgrade_times = 18666,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "iceContractAksia.AttrConst")
} (iceContractAksia || (iceContractAksia = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
iceContractAksia; !
function(t) {
    var e = function() {
        function t() {}
        return t.IceContractAksia_CMD = 42375,
        t
    } ();
    t.CMDConst = e,
    __reflect(e.prototype, "iceContractAksia.CMDConst")
} (iceContractAksia || (iceContractAksia = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
iceContractAksia; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "iceContractAksia.MainPanel",
        t.HUNDUN_ZHIXI_PANEL = "iceContractAksia.HunDunZhiXi",
        t.YUNXING_ZHIFENG_PANEL = "iceContractAksia.YunXingZhiFeng",
        t.BINGXUE_ZHISHANG_PANEL = "iceContractAksia.BingXueZhiShang",
        t.TIANXIN_QIYUE_PANEL = "iceContractAksia.TianXinQiYue",
        t.UPGRADE_ABILITY_PANEL = "iceContractAksia.UpgradeAbilityPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "iceContractAksia.ModuleConst")
} (iceContractAksia || (iceContractAksia = {}));
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
iceContractAksia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BingXueZhiShangSkin,
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
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnyijian_2,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254087, 1,
                function() {
                    SocketConnection.sendWithPromise(42375, [15, 3]).then(function() {
                        Alarm.show("恭喜你成功通过了冰雪之殇！",
                        function() {
                            e.service.backToMainPanel(),
                            EventManager.dispatchEventWith("UpdateMainPanel", !0)
                        })
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnyijian_1,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254088 + e.curBos, 1,
                function() {
                    SocketConnection.sendWithPromise(42375, [17, e.curBos + 1]).then(function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254098, 1,
                function() {
                    KTool.doExchange(11773, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                if (!e.isclickFight) {
                    e.isclickFight = !0;
                    var i = 5 - e.service.getValue(t.AttrConst.daily_third_times);
                    if (0 >= i) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                    SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [823 + e.curBos, 0, 0, 0, 0, 0])
                }
            },
            this)
        },
        i.prototype.update = function() {
            var e = this;
            this.isclickFight = !1;
            var i = 5 - this.service.getValue(t.AttrConst.daily_third_times),
            n = this.service.getValue(t.AttrConst.forever_level_state);
            this.curBos = this.service.getValue(t.AttrConst.forever_third_state);
            var a = 0 >= i;
            this.timesText.text = "剩余挑战次数:" + i.toString() + "/5";
            for (var r = 1; 10 >= r; r++) this["a_" + r].visible = this.curBos == r - 1;
            return DisplayUtil.setEnabled(this.btnadd, a, !a),
            n >= 3 && this.service ? void Alarm.show("已完成冰雪之殇。",
            function() {
                e.service.backToMainPanel()
            }) : void 0
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.BingXueZhiShang = e,
    __reflect(e.prototype, "iceContractAksia.BingXueZhiShang")
} (iceContractAksia || (iceContractAksia = {}));
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
iceContractAksia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.HunDunZhiXiSkin,
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
            var e = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                if (!e.isclickFight) {
                    e.isclickFight = !0;
                    var i = 3 - e.service.getValue(t.AttrConst.daily_first_times);
                    if (0 >= i) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                    SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [822, 0, 0, 0, 0, 0])
                }
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254083, 1,
                function() {
                    SocketConnection.sendWithPromise(42375, [15, 1]).then(function() {
                        Alarm.show("已完成混沌之袭。",
                        function() {
                            e.service.backToMainPanel(),
                            EventManager.dispatchEventWith("UpdateMainPanel", !0)
                        })
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254084, 1,
                function() {
                    KTool.doExchange(11771, 1,
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
            this)
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待")
        },
        i.prototype.checkfinish = function() {
            FightManager.isWin || Alarm.show("很遗憾挑战失败，请再接再厉！")
        },
        i.prototype.update = function() {
            var e = this;
            if (this.isclickFight = !1, this.service) {
                var i = this.service.getValue(t.AttrConst.forever_level_state),
                n = 3 - this.service.getValue(t.AttrConst.daily_first_times),
                a = 0 >= n;
                this.timeLeftText.text = "剩余挑战次数:" + n.toString() + "/3",
                DisplayUtil.setEnabled(this.btnadd, a, !a),
                i >= 1 && (EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this), Alarm.show("已完成混沌之袭。",
                function() {
                    e.service.backToMainPanel(),
                    e.service = null
                }))
            }
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.HunDunZhiXi = e,
    __reflect(e.prototype, "iceContractAksia.HunDunZhiXi")
} (iceContractAksia || (iceContractAksia = {}));
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
iceContractAksia; !
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
            EventManager.addEventListener("UpdateMainPanel",
            function() {
                e.updateValues()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3699)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254082, 1,
                function() {
                    KTool.doExchange(11769, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btngetPet,
            function() {
                KTool.doExchange(11770, 1,
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btn_1,
            function() {
                e.service.openPanel(t.ModuleConst.HUNDUN_ZHIXI_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn_2,
            function() {
                e.service.openPanel(t.ModuleConst.YUNXING_ZHIFENG_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn_3,
            function() {
                e.service.openPanel(t.ModuleConst.BINGXUE_ZHISHANG_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn_4,
            function() {
                e.service.openPanel(t.ModuleConst.TIANXIN_QIYUE_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnup,
            function() {
                e.service.openPanel(t.ModuleConst.UPGRADE_ABILITY_PANEL)
            },
            this)
        },
        i.prototype.update = function() {
            for (var e = this.service.getValue(t.AttrConst.forever_pet_state), i = this.service.getValue(t.AttrConst.forever_level_state), n = !!KTool.getBit(e, 1), a = 4; a > 0; a--) {
                var r = i >= a,
                s = n || r;
                this["beat_" + a].visible = s,
                this["btn_" + a].touchEnabled = !s,
                this["btn_" + a].filters = null,
                4 > a && !r && DisplayUtil.setEnabled(this["btn_" + (a + 1)], r, !r)
            }
            this.btnyijian.visible = !(i >= 4),
            this.btngetPet.visible = i >= 4,
            this.btnup.visible = n
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "iceContractAksia.MainPanel")
} (iceContractAksia || (iceContractAksia = {}));
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
iceContractAksia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.boosId = 13664,
            i.lastBoss = !1,
            i.skinName = t.TianXinQiYueSkin,
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
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待")
        },
        i.prototype.checkfinish = function() {
            FightManager.isWin && 3 == this.curBos && (this.lastBoss = !0)
        },
        i.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this),
            ImageButtonUtil.add(this.btnyijian_1,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254099, 1,
                function() {
                    SocketConnection.sendWithPromise(42375, [15, 4]).then(function() {
                        Alarm.show("恭喜你成功通过了天心之契！",
                        function() {
                            e.service.backToMainPanel(),
                            EventManager.dispatchEventWith("UpdateMainPanel", !0)
                        })
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnyijian_2,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254100 + e.curBos, 1,
                function() {
                    SocketConnection.sendWithPromise(42375, [18, e.curBos + 1]).then(function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254104, 1,
                function() {
                    KTool.doExchange(11774, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btntianxin,
            function() {
                if (!e.isclickFight) {
                    e.isclickFight = !0;
                    var i = 3 - e.service.getValue(t.AttrConst.daily_forth_times);
                    if (0 >= i) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                    FightManager.fightNoMapBoss("", 13668)
                }
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
            ImageButtonUtil.add(this.btnfight,
            function() {
                var i, n = 3 - e.service.getValue(t.AttrConst.daily_forth_times);
                return 1 == e.lastBoss ? i = 1 : 0,
                0 >= n ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void FightManager.fightNoMapBoss("", e.boosId + e.curBos)
            },
            this)
        },
        i.prototype.update = function() {
            var e = this;
            if (this.isclickFight = !1, this.service) {
                this.curBos = this.service.getValue(t.AttrConst.forever_fourth_state);
                var i = 3 - this.service.getValue(t.AttrConst.daily_forth_times),
                n = this.service.getValue(t.AttrConst.forever_level_state),
                a = 0 >= i;
                DisplayUtil.setEnabled(this.btnadd, a, !a),
                this.imgwei.visible = !0,
                this.imgyi.visible = !1,
                this.percentText.text = "融合能量进度:" + (this.curBos / 4 * 100).toString() + "%",
                this.timeLeftText.text = "剩余挑战次数:" + i.toString() + "/3",
                4 == this.curBos ? (this.imgwei.visible = !1, this.imgyi.visible = !0, this.percentText.text = "融合完成，可以开始缔结天心之契了！", DisplayUtil.setEnabled(this.btnyijian_2, !1, !0), DisplayUtil.setEnabled(this.btnfight, !1, !0)) : (DisplayUtil.setEnabled(this.btnyijian_2, !0, !1), DisplayUtil.setEnabled(this.btnfight, !0, !1)),
                DisplayUtil.setEnabled(this.btntianxin, 4 == this.curBos, 4 != this.curBos),
                n >= 4 && (EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this), Alarm.show("已完成天心契约。",
                function() {
                    e.service.backToMainPanel()
                }))
            }
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.TianXinQiYue = e,
    __reflect(e.prototype, "iceContractAksia.TianXinQiYue")
} (iceContractAksia || (iceContractAksia = {}));
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
iceContractAksia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.itemId = 1717627,
            i.markId = 41353,
            i.bossId = 13669,
            i.state = [!1, !1, !1, !1],
            i.skinName = t.UpgradeAbilityPanelSkin,
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
            this.addEvent(),
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
            n = this, a = 1; 3 >= a; a++) i(a);
            ImageButtonUtil.add(this.btnadditem,
            function() {
                if (!PayManager.canPay()) return void e.noOpen();
                var t = {};
                t.type = "product_diamond",
                t.ins = {
                    iconID: 1717627,
                    productID: 254106
                },
                t.caller = e,
                t.callBack = function(t, i) {
                    KTool.buyProductByCallback(254106, i,
                    function() {
                        KTool.doExchange(11776, i,
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
                return PayManager.canPay() ? void KTool.buyProductByCallback(254105, 1,
                function() {
                    KTool.doExchange(11775, 1,
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
            ImageButtonUtil.add(this.btnfight,
            function() {
                if (!e.isclickFight) {
                    e.isclickFight = !0;
                    var i = e.chanllegeMaxTime - e.service.getValue(t.AttrConst.daily_upgrade_times);
                    if (0 >= i) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                    FightManager.fightNoMapBoss("", e.bossId + e.curSelectId - 1)
                }
            },
            this);
            for (var a = 0; 3 > a; a++) this["btndui_" + a].index = a,
            ImageButtonUtil.add(this["btndui_" + a], this.exchange, this);
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
                    id: 32452
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_te,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3699, "", AppDoStyle.NULL)
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
            n = e.currentTarget.index,
            a = 15;
            if (PetManager.isDefaultPet(3699)) {
                var r = ItemManager.getNumByID(this.itemId);
                r >= a ? SocketConnection.sendByQueue(t.CMDConst.IceContractAksia_CMD, [19, n + 1],
                function() {
                    i.service.updateValues().then(function() {
                        switch (n) {
                        case 2:
                            BubblerManager.getInstance().showText("您已成功兑换专属特性！");
                            break;
                        case 1:
                            BubblerManager.getInstance().showText("您已成功兑换第五技能！")
                        }
                        i.update()
                    })
                }):
                BubblerManager.getInstance().showText("您没有足够的冰雪之心！")
            } else BubblerManager.getInstance().showText("请将冰之契约•阿克希亚设置为出战背包首发！");
            this.update()
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        i.prototype.update = function() {
            this.isclickFight = !1,
            this.itemNum = ItemManager.getNumByID(this.itemId),
            this.chanllegeMaxTime = MainManager.actorInfo.isVip ? 5 : 3,
            this.leftTime = this.chanllegeMaxTime - this.service.getValue(t.AttrConst.daily_upgrade_times);
            var e = this.service.getValue(t.AttrConst.forever_pet_state),
            i = this.leftTime <= 0;
            this.state[0] = 1 == KTool.getBit(e, 1),
            this.state[1] = 1 == KTool.getBit(e, 2),
            this.state[2] = 1 == KTool.getBit(e, 3),
            this.state[3] = 1 == KTool.getBit(e, 4),
            this.timeLeftText.text = "剩余挑战次数：" + this.leftTime.toString() + "/" + this.chanllegeMaxTime.toString(),
            this.itemNumText.text = "当前拥有冰雪之心:" + this.itemNum.toString(),
            DisplayUtil.setEnabled(this.btnaddtimes, i, !i),
            DisplayUtil.setEnabled(this.btndui_0, !this.state[1], this.state[1]),
            DisplayUtil.setEnabled(this.btndui_1, !this.state[2], this.state[2]),
            DisplayUtil.setEnabled(this.btndui_2, !this.state[3], this.state[3])
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.setbtnFight, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.UpgradeAbilityPanel = e,
    __reflect(e.prototype, "iceContractAksia.UpgradeAbilityPanel")
} (iceContractAksia || (iceContractAksia = {}));
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
iceContractAksia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.BossID = 13660,
            i.skinName = t.YunXingZhiFengSkin,
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
        i.prototype.beforeUpdate = function() {
            var t = this;
            return this.service.updateValues().then(function() {
                t.update()
            }),
            Promise.resolve()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnfight,
            function() {
                if (!e.isclickFight) {
                    e.isclickFight = !0;
                    var i = 3 - e.service.getValue(t.AttrConst.daily_second_times);
                    if (0 >= i) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                    FightManager.fightNoMapBoss("", e.BossID + e.state)
                }
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254085, 1,
                function() {
                    SocketConnection.sendWithPromise(42375, [15, 2]).then(function() {
                        Alarm.show("您已完成陨星之锋。",
                        function() {
                            e.service.backToMainPanel(),
                            EventManager.dispatchEventWith("UpdateMainPanel", !0)
                        })
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254086, 1,
                function() {
                    KTool.doExchange(11772, 1,
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
            this)
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待")
        },
        i.prototype.update = function() {
            var i = this;
            if (e.prototype.update.call(this), void 0 != this.service) {
                this.isclickFight = !1,
                this.grpClock.visible = !1;
                var n = 3 - this.service.getValue(t.AttrConst.daily_second_times),
                a = 0 >= n,
                r = this.service.getValue(t.AttrConst.forever_second_state),
                s = this.service.getValue(t.AttrConst.daily_second_countdown),
                _ = 65535 & r;
                switch (this.state = r >> 16 & 31, s > 0 ? (this.grpClock.visible = !0, this.service.unregisterClock(this.countDownText), this.service.registerClock(s + 600,
                function() {
                    i.addFightTimes()
                },
                this, this.countDownText)) : SocketConnection.sendByQueue(t.CMDConst.IceContractAksia_CMD, [16, 1],
                function() {
                    i.service.updateValues().then(function() {
                        i.update()
                    })
                }), this.state) {
                case 1:
                    this.curStateText.text = "当前形态：攻击形态",
                    this.curContentText.text = "造成的伤害翻倍\n攻击必定致命一击";
                    break;
                case 2:
                    this.curStateText.text = "当前形态：防御形态",
                    this.curContentText.text = "受到的伤害减少50%\n受到攻击双防+2";
                    break;
                case 3:
                    this.curStateText.text = "当前形态：疾速形态",
                    this.curContentText.text = "必定先手\n10%几率秒杀对手"
                }
                this.damageText.text = "已累计伤害：" + _.toString() + "/50000",
                this.timesLeftText.text = "剩余挑战次数:" + n.toString() + "/3",
                DisplayUtil.setEnabled(this.btnadd, a, !a),
                _ >= 5e4 && Alarm.show("您已完成陨星之锋。",
                function() {
                    i.service.backToMainPanel(),
                    i.service = null
                })
            }
        },
        i.prototype.addFightTimes = function() {
            var e = this;
            SocketConnection.sendByQueue(t.CMDConst.IceContractAksia_CMD, [16, 1],
            function() {
                e.service.updateValues().then(function() {
                    e.update()
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.YunXingZhiFeng = e,
    __reflect(e.prototype, "iceContractAksia.YunXingZhiFeng")
} (iceContractAksia || (iceContractAksia = {})),
window.iceContractAksia = window.iceContractAksia || {};
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
generateEUI.paths["resource/eui_skins/BingXueZhiShangSkin.exml"] = window.iceContractAksia.BingXueZhiShangSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_1", "pet_1", "a_1", "txt_2", "pet_2", "a_2", "txt_3", "pet_3", "a_3", "txt_4", "pet_4", "a_4", "txt_5", "pet_5", "a_5", "txt_6", "pet_6", "a_6", "txt_7", "pet_7", "a_7", "txt_8", "pet_8", "a_8", "txt_9", "pet_9", "a_9", "txt_10", "pet_10", "a_10", "u", "timesText", "btnadd", "btnfight", "btnyijian_1", "btnyijian_2", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group2_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "main_panel_img_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -13,
        t.y = 7,
        t.elementsContent = [this._Image2_i(), this._Label1_i(), this.u_i(), this._Group1_i(), this._Image4_i(), this.btnfight_i(), this.btnyijian_1_i(), this.btnyijian_2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "yun_xing_zhi_feng_img_1_png",
        t.visible = !0,
        t.x = 741,
        t.y = 208,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 25,
        t.stroke = 1.5,
        t.strokeColor = 1941453,
        t.text = "特殊能力",
        t.textColor = 16777215,
        t.x = 842,
        t.y = 222,
        t
    },
    i.u_i = function() {
        var t = new eui.Group;
        return this.u = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.a_1_i(), this.a_2_i(), this.a_3_i(), this.a_4_i(), this.a_5_i(), this.a_6_i(), this.a_7_i(), this.a_8_i(), this.a_9_i(), this.a_10_i()],
        t
    },
    i.a_1_i = function() {
        var t = new eui.Group;
        return this.a_1 = t,
        t.visible = !0,
        t.x = 116,
        t.y = 31,
        t.elementsContent = [this.txt_1_i(), this.pet_1_i()],
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "无",
        t.textColor = 8780024,
        t.x = 767,
        t.y = 278,
        t
    },
    i.pet_1_i = function() {
        var t = new eui.Image;
        return this.pet_1 = t,
        t.source = "bing_xue_zhi_shang_pet_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_2_i = function() {
        var t = new eui.Group;
        return this.a_2 = t,
        t.visible = !0,
        t.x = 65,
        t.y = 27,
        t.elementsContent = [this.txt_2_i(), this.pet_2_i()],
        t
    },
    i.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "致命一击概率提升50%",
        t.textColor = 8780024,
        t.x = 741,
        t.y = 281,
        t
    },
    i.pet_2_i = function() {
        var t = new eui.Image;
        return this.pet_2 = t,
        t.source = "bing_xue_zhi_shang_pet_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_3_i = function() {
        var t = new eui.Group;
        return this.a_3 = t,
        t.visible = !0,
        t.x = 187,
        t.y = 59,
        t.elementsContent = [this.txt_3_i(), this.pet_3_i()],
        t
    },
    i.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "先制+2",
        t.textColor = 8780024,
        t.x = 677,
        t.y = 249,
        t
    },
    i.pet_3_i = function() {
        var t = new eui.Image;
        return this.pet_3 = t,
        t.source = "bing_xue_zhi_shang_pet_3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_4_i = function() {
        var t = new eui.Group;
        return this.a_4 = t,
        t.x = 0,
        t.y = 37,
        t.elementsContent = [this.txt_4_i(), this.pet_4_i()],
        t
    },
    i.txt_4_i = function() {
        var t = new eui.Label;
        return this.txt_4 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "每回合使对手速度-2、\n命中-2",
        t.textColor = 8780024,
        t.x = 802,
        t.y = 255,
        t
    },
    i.pet_4_i = function() {
        var t = new eui.Image;
        return this.pet_4 = t,
        t.source = "bing_xue_zhi_shang_pet_4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_5_i = function() {
        var t = new eui.Group;
        return this.a_5 = t,
        t.visible = !0,
        t.x = 72,
        t.y = 19,
        t.elementsContent = [this.txt_5_i(), this.pet_5_i()],
        t
    },
    i.txt_5_i = function() {
        var t = new eui.Label;
        return this.txt_5 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "攻击吸取对手能力提升状态",
        t.textColor = 8780024,
        t.x = 711,
        t.y = 289,
        t
    },
    i.pet_5_i = function() {
        var t = new eui.Image;
        return this.pet_5 = t,
        t.source = "bing_xue_zhi_shang_pet_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_6_i = function() {
        var t = new eui.Group;
        return this.a_6 = t,
        t.visible = !0,
        t.x = 22,
        t.y = 0,
        t.elementsContent = [this.txt_6_i(), this.pet_6_i()],
        t
    },
    i.txt_6_i = function() {
        var t = new eui.Label;
        return this.txt_6 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "每回合恢复250点体力",
        t.textColor = 8780024,
        t.x = 784,
        t.y = 308,
        t
    },
    i.pet_6_i = function() {
        var t = new eui.Image;
        return this.pet_6 = t,
        t.source = "bing_xue_zhi_shang_pet_6_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_7_i = function() {
        var t = new eui.Group;
        return this.a_7 = t,
        t.visible = !0,
        t.x = 87,
        t.y = 25,
        t.elementsContent = [this.txt_7_i(), this.pet_7_i()],
        t
    },
    i.txt_7_i = function() {
        var t = new eui.Label;
        return this.txt_7 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "攻击必定致命一击",
        t.textColor = 8780024,
        t.x = 732,
        t.y = 283,
        t
    },
    i.pet_7_i = function() {
        var t = new eui.Image;
        return this.pet_7 = t,
        t.source = "bing_xue_zhi_shang_pet_7_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_8_i = function() {
        var t = new eui.Group;
        return this.a_8 = t,
        t.visible = !0,
        t.x = 95,
        t.y = 37,
        t.elementsContent = [this.txt_8_i(), this.pet_8_i()],
        t
    },
    i.txt_8_i = function() {
        var t = new eui.Label;
        return this.txt_8 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "每回合50%几率使对手冰封",
        t.textColor = 8780024,
        t.x = 693,
        t.y = 271,
        t
    },
    i.pet_8_i = function() {
        var t = new eui.Image;
        return this.pet_8 = t,
        t.source = "bing_xue_zhi_shang_pet_8_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_9_i = function() {
        var t = new eui.Group;
        return this.a_9 = t,
        t.visible = !0,
        t.x = 75,
        t.y = 74,
        t.elementsContent = [this.txt_9_i(), this.pet_9_i()],
        t
    },
    i.txt_9_i = function() {
        var t = new eui.Label;
        return this.txt_9 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "每回合附加220点固定伤害",
        t.textColor = 8780024,
        t.x = 713,
        t.y = 234,
        t
    },
    i.pet_9_i = function() {
        var t = new eui.Image;
        return this.pet_9 = t,
        t.source = "bing_xue_zhi_shang_pet_9_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_10_i = function() {
        var t = new eui.Group;
        return this.a_10 = t,
        t.visible = !0,
        t.x = 50,
        t.y = 70,
        t.elementsContent = [this.txt_10_i(), this.pet_10_i()],
        t
    },
    i.txt_10_i = function() {
        var t = new eui.Label;
        return this.txt_10 = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1328788,
        t.text = "每回合全属性+1、\n对手每回合全属性-1",
        t.textColor = 8780024,
        t.width = 170,
        t.x = 760,
        t.y = 222,
        t
    },
    i.pet_10_i = function() {
        var t = new eui.Image;
        return this.pet_10 = t,
        t.source = "bing_xue_zhi_shang_pet_10_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 678,
        t.y = 579,
        t.elementsContent = [this._Image3_i(), this.timesText_i(), this.btnadd_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timesText_i = function() {
        var t = new eui.Label;
        return this.timesText = t,
        t.size = 18,
        t.text = "剩余挑战次数:3/5",
        t.textColor = 13367295,
        t.x = 23,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "hun_dun_zhi_xi_btnadd_png",
        t.x = 188,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "bing_xue_zhi_shang_title_png",
        t.x = 138,
        t.y = 7,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "hun_dun_zhi_xi_btnfight_png",
        t.x = 800,
        t.y = 500,
        t
    },
    i.btnyijian_1_i = function() {
        var t = new eui.Image;
        return this.btnyijian_1 = t,
        t.source = "bing_xue_zhi_shang_btnyijian_1_png",
        t.x = 564,
        t.y = 506,
        t
    },
    i.btnyijian_2_i = function() {
        var t = new eui.Image;
        return this.btnyijian_2 = t,
        t.height = 100,
        t.source = "hun_dun_zhi_xi_btnyijian_png",
        t.width = 100,
        t.x = 28,
        t.y = 482,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 8,
        t.elementsContent = [this._Image5_i(), this.btnback_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_up_bg_png",
        t.x = 0,
        t.y = 40,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "main_panel_btnClose_png",
        t.x = 33,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HunDunZhiXiSkin.exml"] = window.iceContractAksia.HunDunZhiXiSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnfight", "timeLeftText", "btnyijian", "btnadd", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "main_panel_img_bg_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.btnfight_i(), this._Image3_i(), this.timeLeftText_i(), this.btnyijian_i(), this.btnadd_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_pets_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "hun_dun_zhi_xi_btnfight_png",
        t.x = 446,
        t.y = 519,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_numbg_png",
        t.x = 670,
        t.y = 550,
        t
    },
    i.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数:3/5",
        t.textColor = 13367295,
        t.x = 693,
        t.y = 557,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.height = 100,
        t.source = "hun_dun_zhi_xi_btnyijian_png",
        t.width = 100,
        t.x = 1025,
        t.y = 525,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "hun_dun_zhi_xi_btnadd_png",
        t.x = 855,
        t.y = 549,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 8,
        t.elementsContent = [this._Image4_i(), this.btnback_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_up_bg_png",
        t.x = 0,
        t.y = 40,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "main_panel_btnClose_png",
        t.x = 33,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.iceContractAksia.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btn_1", "btn_2", "btn_3", "btn_4", "beat_1", "beat_2", "beat_3", "beat_4", "beat", "btnyijian", "btngetPet", "btnup", "btnInfo", "btnClose", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "main_panel_img_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -4.5,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.beat_i(), this.btnyijian_i(), this.btngetPet_i(), this.btnup_i(), this.btnInfo_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "main_panel_pet_ice_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.beat_i = function() {
        var t = new eui.Group;
        return this.beat = t,
        t.visible = !0,
        t.x = 656,
        t.y = 93,
        t.elementsContent = [this.btn_1_i(), this.btn_2_i(), this.btn_3_i(), this.btn_4_i(), this.beat_1_i(), this.beat_2_i(), this.beat_3_i(), this.beat_4_i()],
        t
    },
    i.btn_1_i = function() {
        var t = new eui.Image;
        return this.btn_1 = t,
        t.source = "main_panel_btn1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btn_2_i = function() {
        var t = new eui.Image;
        return this.btn_2 = t,
        t.source = "main_panel_btn2_png",
        t.x = 47,
        t.y = 119,
        t
    },
    i.btn_3_i = function() {
        var t = new eui.Image;
        return this.btn_3 = t,
        t.source = "main_panel_btn3_png",
        t.x = 47,
        t.y = 238,
        t
    },
    i.btn_4_i = function() {
        var t = new eui.Image;
        return this.btn_4 = t,
        t.source = "main_panel_btn4_png",
        t.x = 0,
        t.y = 357,
        t
    },
    i.beat_1_i = function() {
        var t = new eui.Image;
        return this.beat_1 = t,
        t.source = "main_panel_beat_png",
        t.x = 50,
        t.y = 18,
        t
    },
    i.beat_2_i = function() {
        var t = new eui.Image;
        return this.beat_2 = t,
        t.source = "main_panel_beat_png",
        t.visible = !0,
        t.x = 97,
        t.y = 137,
        t
    },
    i.beat_3_i = function() {
        var t = new eui.Image;
        return this.beat_3 = t,
        t.source = "main_panel_beat_png",
        t.x = 97,
        t.y = 256,
        t
    },
    i.beat_4_i = function() {
        var t = new eui.Image;
        return this.beat_4 = t,
        t.source = "main_panel_beat_png",
        t.x = 50,
        t.y = 375,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.source = "main_panel_btnyijian_png",
        t.visible = !0,
        t.x = 1e3,
        t.y = 520,
        t
    },
    i.btngetPet_i = function() {
        var t = new eui.Image;
        return this.btngetPet = t,
        t.height = 100,
        t.source = "main_panel_btngetPet_png",
        t.visible = !1,
        t.width = 100,
        t.x = 1025,
        t.y = 520,
        t
    },
    i.btnup_i = function() {
        var t = new eui.Image;
        return this.btnup = t,
        t.height = 100,
        t.source = "main_panel_btnup_png",
        t.visible = !1,
        t.width = 100,
        t.x = 1025,
        t.y = 520,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "main_panel_btnInfo_png",
        t.x = 44,
        t.y = 546,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.btnClose_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "main_panel_btnClose_png",
        t.x = 33,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TianXinQiYueSkin.exml"] = window.iceContractAksia.TianXinQiYueSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgyi", "imgwei", "percentText", "btntianxin", "timeLeftText", "btnadd", "times", "btnfight", "btnyijian_2", "btnpet", "btncure", "btnback", "top", "btnyijian_1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group3_i(), this.top_i(), this.btnyijian_1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "main_panel_img_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -12,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this.imgyi_i(), this.imgwei_i(), this._Group1_i(), this._Image3_i(), this.btntianxin_i(), this.times_i(), this.btnfight_i(), this.btnyijian_2_i(), this._Group2_i()],
        t
    },
    i.imgyi_i = function() {
        var t = new eui.Image;
        return this.imgyi = t,
        t.source = "tian_xin_qi_yue_pet_2_png",
        t.visible = !0,
        t.x = 24,
        t.y = 0,
        t
    },
    i.imgwei_i = function() {
        var t = new eui.Image;
        return this.imgwei = t,
        t.source = "tian_xin_qi_yue_pet_1_png",
        t.visible = !0,
        t.x = 62,
        t.y = 32,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 743,
        t.y = 402,
        t.elementsContent = [this._Image2_i(), this.percentText_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "tian_xin_qi_yue_img_di_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.percentText_i = function() {
        var t = new eui.Label;
        return this.percentText = t,
        t.height = 25,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1941453,
        t.text = "融合能量进度： 000%",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.width = 250,
        t.x = 10,
        t.y = 11,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "tian_xin_qi_yue_title_png",
        t.x = 97,
        t.y = 14,
        t
    },
    i.btntianxin_i = function() {
        var t = new eui.Image;
        return this.btntianxin = t,
        t.source = "tian_xin_qi_yue_btntianxin_png",
        t.visible = !0,
        t.x = 702,
        t.y = 91,
        t
    },
    i.times_i = function() {
        var t = new eui.Group;
        return this.times = t,
        t.x = 685,
        t.y = 586,
        t.elementsContent = [this._Image4_i(), this.timeLeftText_i(), this.btnadd_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数:3/5",
        t.textColor = 13367295,
        t.x = 23,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "hun_dun_zhi_xi_btnadd_png",
        t.x = 188,
        t.y = 0,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "hun_dun_zhi_xi_btnfight_png",
        t.visible = !0,
        t.x = 813,
        t.y = 508,
        t
    },
    i.btnyijian_2_i = function() {
        var t = new eui.Image;
        return this.btnyijian_2 = t,
        t.source = "bing_xue_zhi_shang_btnyijian_1_png",
        t.x = 571,
        t.y = 513,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.x = 0,
        t.y = 252,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "yun_xing_zhi_feng_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "yun_xing_zhi_feng_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 8,
        t.elementsContent = [this._Image5_i(), this.btnback_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_up_bg_png",
        t.x = 0,
        t.y = 40,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "main_panel_btnClose_png",
        t.x = 33,
        t.y = 0,
        t
    },
    i.btnyijian_1_i = function() {
        var t = new eui.Image;
        return this.btnyijian_1 = t,
        t.height = 100,
        t.left = 21,
        t.source = "hun_dun_zhi_xi_btnyijian_png",
        t.visible = !0,
        t.width = 100,
        t.y = 520,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/UpgradeAbilityPanelSkin.exml"] = window.iceContractAksia.UpgradeAbilityPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btndui_0", "icon_ke", "icon_wu", "btndui_1", "btndui_2", "icon_te", "btndifficulty_1", "btndifficultySe_1", "btndifficulty_2", "btndifficultySe_2", "btndifficulty_3", "btndifficultySe_3", "timeLeftText", "btnaddtimes", "itemNumText", "btnadditem", "btnfight", "btnpet", "btncure", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group6_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "main_panel_img_bg_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -26.5,
        t.visible = !0,
        t.width = 1050,
        t.y = 14,
        t.elementsContent = [this._Image2_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Image9_i(), this.btnfight_i(), this._Group5_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "tian_xin_qi_yue_pet_2_png",
        t.x = 197,
        t.y = 18,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 850,
        t.y = 97,
        t.elementsContent = [this._Image3_i(), this.btndui_0_i(), this.icon_ke_i(), this._Image4_i(), this.icon_wu_i(), this.btndui_1_i(), this._Image5_i(), this.btndui_2_i(), this.icon_te_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "upgrade_ability_panel_itembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btndui_0_i = function() {
        var t = new eui.Image;
        return this.btndui_0 = t,
        t.source = "upgrade_ability_panel_btndui_png",
        t.x = 81,
        t.y = 52,
        t
    },
    i.icon_ke_i = function() {
        var t = new eui.Image;
        return this.icon_ke = t,
        t.source = "upgrade_ability_panel_img_1_png",
        t.visible = !0,
        t.x = 42,
        t.y = 34,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "upgrade_ability_panel_itembg_png",
        t.x = 31,
        t.y = 132,
        t
    },
    i.icon_wu_i = function() {
        var t = new eui.Image;
        return this.icon_wu = t,
        t.source = "upgrade_ability_panel_img_2_png",
        t.visible = !0,
        t.x = 74,
        t.y = 172,
        t
    },
    i.btndui_1_i = function() {
        var t = new eui.Image;
        return this.btndui_1 = t,
        t.source = "upgrade_ability_panel_btndui_png",
        t.x = 108,
        t.y = 185,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "upgrade_ability_panel_itembg_png",
        t.x = 1,
        t.y = 254,
        t
    },
    i.btndui_2_i = function() {
        var t = new eui.Image;
        return this.btndui_2 = t,
        t.source = "upgrade_ability_panel_btndui_png",
        t.x = 83,
        t.y = 306,
        t
    },
    i.icon_te_i = function() {
        var t = new eui.Image;
        return this.icon_te = t,
        t.source = "upgrade_ability_panel_img_3_png",
        t.x = 47,
        t.y = 290,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 113,
        t.y = 133,
        t.elementsContent = [this.btndifficulty_1_i(), this.btndifficultySe_1_i(), this.btndifficulty_2_i(), this.btndifficultySe_2_i(), this.btndifficulty_3_i(), this.btndifficultySe_3_i()],
        t
    },
    i.btndifficulty_1_i = function() {
        var t = new eui.Image;
        return this.btndifficulty_1 = t,
        t.source = "upgrade_ability_panel_btndifficulty_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btndifficultySe_1_i = function() {
        var t = new eui.Image;
        return this.btndifficultySe_1 = t,
        t.source = "upgrade_ability_panel_btndifficultySe_1_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btndifficulty_2_i = function() {
        var t = new eui.Image;
        return this.btndifficulty_2 = t,
        t.source = "upgrade_ability_panel_btndifficulty_2_png",
        t.x = 0,
        t.y = 103,
        t
    },
    i.btndifficultySe_2_i = function() {
        var t = new eui.Image;
        return this.btndifficultySe_2 = t,
        t.source = "upgrade_ability_panel_btndifficultySe_2_png",
        t.visible = !1,
        t.x = 0,
        t.y = 103,
        t
    },
    i.btndifficulty_3_i = function() {
        var t = new eui.Image;
        return this.btndifficulty_3 = t,
        t.source = "upgrade_ability_panel_btndifficulty_3_png",
        t.x = 0,
        t.y = 205,
        t
    },
    i.btndifficultySe_3_i = function() {
        var t = new eui.Image;
        return this.btndifficultySe_3 = t,
        t.source = "upgrade_ability_panel_btndifficultySe_3__png",
        t.visible = !1,
        t.x = 0,
        t.y = 205,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 254,
        t.y = 574,
        t.elementsContent = [this._Image6_i(), this.timeLeftText_i(), this.btnaddtimes_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数:3/5",
        t.textColor = 13367295,
        t.x = 22,
        t.y = 8,
        t
    },
    i.btnaddtimes_i = function() {
        var t = new eui.Image;
        return this.btnaddtimes = t,
        t.source = "hun_dun_zhi_xi_btnadd_png",
        t.x = 187,
        t.y = 0,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 594,
        t.y = 574,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this.itemNumText_i(), this.btnadditem_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_numbg_png",
        t.x = 17,
        t.y = 1,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "upgrade_ability_panel_img_4_png",
        t.x = 0,
        t.y = 4,
        t
    },
    i.itemNumText_i = function() {
        var t = new eui.Label;
        return this.itemNumText = t,
        t.size = 18,
        t.text = "已获得冰雪之心：000",
        t.textColor = 13367295,
        t.x = 27,
        t.y = 8,
        t
    },
    i.btnadditem_i = function() {
        var t = new eui.Image;
        return this.btnadditem = t,
        t.source = "hun_dun_zhi_xi_btnadd_png",
        t.x = 205,
        t.y = 0,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "upgrade_ability_panel_title_png",
        t.x = 145,
        t.y = 0,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "hun_dun_zhi_xi_btnfight_png",
        t.x = 423,
        t.y = 486,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = -17,
        t.y = 224.00000000000003,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "yun_xing_zhi_feng_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "yun_xing_zhi_feng_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 8,
        t.elementsContent = [this._Image10_i(), this.btnback_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_up_bg_png",
        t.x = 0,
        t.y = 40,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "main_panel_btnClose_png",
        t.x = 33,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/YunXingZhiFengSkin.exml"] = window.iceContractAksia.YunXingZhiFengSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "timesLeftText", "btnadd", "curStateText", "curContentText", "r", "countDownText", "grpClock", "damageText", "btnfight", "btnyijian", "btnpet", "btncure", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group5_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "main_panel_img_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 6,
        t.y = 0,
        t.elementsContent = [this.pet_i(), this._Group1_i(), this.r_i(), this._Group2_i(), this._Group3_i(), this.btnfight_i(), this.btnyijian_i(), this._Group4_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "yun_xing_zhi_feng_pet_png",
        t.visible = !0,
        t.width = 1100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 647,
        t.y = 549,
        t.elementsContent = [this._Image2_i(), this.timesLeftText_i(), this.btnadd_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timesLeftText_i = function() {
        var t = new eui.Label;
        return this.timesLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数:3/5",
        t.textColor = 13367295,
        t.x = 23,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "hun_dun_zhi_xi_btnadd_png",
        t.x = 185,
        t.y = 0,
        t
    },
    i.r_i = function() {
        var t = new eui.Group;
        return this.r = t,
        t.x = 750,
        t.y = 107,
        t.elementsContent = [this._Image3_i(), this.curStateText_i(), this.curContentText_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "yun_xing_zhi_feng_img_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.curStateText_i = function() {
        var t = new eui.Label;
        return this.curStateText = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 25,
        t.stroke = 1,
        t.strokeColor = 1941710,
        t.text = "当前形态：防御形态",
        t.textColor = 16777215,
        t.x = 40,
        t.y = 14,
        t
    },
    i.curContentText_i = function() {
        var t = new eui.Label;
        return this.curContentText = t,
        t.border = !1,
        t.borderColor = 0,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1195394,
        t.text = "受到的伤害减少50%\n受到攻击双防+2",
        t.textColor = 8780024,
        t.width = 163,
        t.x = 73,
        t.y = 79,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 66,
        t.y = 122,
        t.elementsContent = [this._Image4_i(), this.grpClock_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "yun_xing_zhi_feng_txt_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpClock_i = function() {
        var t = new eui.Group;
        return this.grpClock = t,
        t.x = 34,
        t.y = 11,
        t.elementsContent = [this._Label1_i(), this.countDownText_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.stroke = 1.5,
        t.strokeColor = 1941710,
        t.text = "距离下一次改变形态 ：",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    i.countDownText_i = function() {
        var t = new eui.Label;
        return this.countDownText = t,
        t.height = 20,
        t.size = 18,
        t.stroke = 1.5,
        t.strokeColor = 1941710,
        t.text = "10：00",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 60,
        t.x = 176,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 98,
        t.y = 188,
        t.elementsContent = [this._Image5_i(), this.damageText_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "yun_xing_zhi_feng_txt_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.damageText_i = function() {
        var t = new eui.Label;
        return this.damageText = t,
        t.size = 18,
        t.stroke = 1.5,
        t.strokeColor = 1941710,
        t.text = "已累计伤害：0000/50000",
        t.textColor = 16777215,
        t.width = 208,
        t.x = 34,
        t.y = 11,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "hun_dun_zhi_xi_btnfight_png",
        t.x = 424,
        t.y = 519,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.height = 100,
        t.source = "hun_dun_zhi_xi_btnyijian_png",
        t.width = 100,
        t.x = 1e3,
        t.y = 525,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.left = 1,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = -22.999999999999993,
        t.y = 252.00000000000006,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "yun_xing_zhi_feng_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "yun_xing_zhi_feng_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 8,
        t.elementsContent = [this._Image6_i(), this.btnback_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hun_dun_zhi_xi_up_bg_png",
        t.x = 0,
        t.y = 40,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "main_panel_btnClose_png",
        t.x = 33,
        t.y = 0,
        t
    },
    e
} (eui.Skin);