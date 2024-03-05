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
jianBiMecha; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = JianBiMechaSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210820版本系统功能", "坚壁机甲关卡", "进入坚壁机甲主面板"),
            this.initOldPveBtnClose(48, this, "jian_bi_mecha_title_png",
            function() {
                ModuleManager.hideModule(t)
            },
            this),
            this.addEvent(),
            this.refresh(),
            this.init()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener("return_to_main", this.refresh, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.reShow = function() {
            this.refresh()
        },
        i.prototype.init = function() {
            this.childMask.visible = !1,
            this.Child.visible = !1
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener("return_to_main",
            function() {
                e.refresh()
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var t = {};
                t.ins = 40959,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var t = {};
                t.id = 30839,
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3386, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnFastGetKe,
            function() {
                e.isFirstPet() && BuyProductManager.buyProductBySocket(250590,
                function() {
                    SocketConnection.sendByQueue(42341, [2, 1],
                    function() {
                        e.refresh()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFastGetWu,
            function() {
                e.isFirstPet() && BuyProductManager.buyProductBySocket(250592,
                function() {
                    SocketConnection.sendByQueue(42341, [2, 3],
                    function() {
                        e.refresh()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFastGetTe,
            function() {
                e.isFirstPet() && BuyProductManager.buyProductBySocket(250591,
                function() {
                    SocketConnection.sendByQueue(42341, [2, 2],
                    function() {
                        e.refresh()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnSuperGet,
            function() {
                BuyProductManager.buyProductBySocket(250585,
                function() {
                    SocketConnection.sendByQueue(42341, [1, 1],
                    function() {
                        e.refresh()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFastGet1,
            function() {
                BuyProductManager.buyProduct("250587_10232",
                function() {
                    e.refresh()
                },
                e, 1713329)
            },
            this),
            ImageButtonUtil.add(this.btnFastGet2,
            function() {
                BuyProductManager.buyProduct("250588_10234",
                function() {
                    e.refresh()
                },
                e, 1713330)
            },
            this),
            ImageButtonUtil.add(this.btnFastGet3,
            function() {
                BuyProductManager.buyProduct("250589_10237",
                function() {
                    e.refresh()
                },
                e, 1713331)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(48)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(e)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3386)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                e.isItemEnough(12, 8, 20) && SocketConnection.sendByQueue(42341, [1, 2], e.refresh.bind(e))
            },
            this),
            ImageButtonUtil.add(this.btnGetKe,
            function() {
                e.isFirstPet() && e.isItemEnough(2, 5, 8) && SocketConnection.sendByQueue(42341, [3, 1], e.refresh.bind(e))
            },
            this),
            ImageButtonUtil.add(this.btnGetWu,
            function() {
                e.isFirstPet() && e.isItemEnough(2, 15, 20) && SocketConnection.sendByQueue(42341, [3, 3], e.refresh.bind(e))
            },
            this),
            ImageButtonUtil.add(this.btnGetTe,
            function() {
                e.isFirstPet() && e.isItemEnough(2, 15, 20) && SocketConnection.sendByQueue(42341, [3, 2], e.refresh.bind(e))
            },
            this),
            ImageButtonUtil.add(this.btnGetHeXin,
            function() {
                var i = new t.JianBiMechaHeXin;
                e.addChild(i)
            },
            this),
            ImageButtonUtil.add(this.btnGetWuZhuang,
            function() {
                var i = new t.JianBiMechaWuZhuang;
                e.addChild(i)
            },
            this),
            ImageButtonUtil.add(this.btnGetFangJu,
            function() {
                var i = new t.JianBiMechaFangJu;
                e.addChild(i)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                e.childMask.visible = !0,
                e.Child.visible = !0
            },
            this),
            ImageButtonUtil.add(this.btnCloseChild,
            function() {
                e.childMask.visible = !1,
                e.Child.visible = !1
            },
            this),
            ImageButtonUtil.add(this.childMask,
            function() {
                e.childMask.visible = !1,
                e.Child.visible = !1
            },
            this)
        },
        i.prototype.refresh = function() {
            var t = this;
            ItemManager.updateItems([1713329, 1713330, 1713331],
            function() {
                t.numHeXin = ItemManager.getNumByID(1713329),
                t.numWuZhuang = ItemManager.getNumByID(1713330),
                t.numFangJu = ItemManager.getNumByID(1713331),
                t.txtHeXin.text = t.numHeXin.toString(),
                t.txtWuZhuang.text = t.numWuZhuang.toString(),
                t.txtFangJu.text = t.numFangJu.toString()
            }),
            KTool.getMultiValue([AttrConst.forever_jbjj_state2],
            function(e) {
                var i = 1 == KTool.getBit(e[0], 1),
                n = 1 == KTool.getBit(e[0], 2),
                u = 1 == KTool.getBit(e[0], 3),
                a = 1 == KTool.getBit(e[0], 4);
                t.btnGet.visible = !i,
                t.btnSuperGet.visible = !i,
                t.btnUp.visible = i,
                t.imgTips.visible = !i,
                15 == e[0] && (DisplayUtil.setEnabled(t.btnFastGet1, !1, !0), DisplayUtil.setEnabled(t.btnFastGet2, !1, !0), DisplayUtil.setEnabled(t.btnFastGet3, !1, !0), DisplayUtil.setEnabled(t.btnGetHeXin, !1, !0), DisplayUtil.setEnabled(t.btnGetWuZhuang, !1, !0), DisplayUtil.setEnabled(t.btnGetFangJu, !1, !0)),
                t.imgHasKe.visible = n,
                t.imgHasTe.visible = u,
                t.imgHasWu.visible = a,
                t.btnGetKe.visible = !n,
                t.btnFastGetKe.visible = !n,
                t.btnGetWu.visible = !a,
                t.btnFastGetWu.visible = !a,
                t.btnGetTe.visible = !u,
                t.btnFastGetTe.visible = !u
            })
        },
        i.prototype.isItemEnough = function(t, e, i) {
            return this.numHeXin < t ? (BubblerManager.getInstance().showText("你拥有的坚壁核心不足！"), !1) : this.numWuZhuang < e ? (BubblerManager.getInstance().showText("你拥有的坚壁武装不足！"), !1) : this.numFangJu < i ? (BubblerManager.getInstance().showText("你拥有的坚壁防具不足！"), !1) : !0
        },
        i.prototype.isFirstPet = function() {
            return PetManager.isDefaultPet(3386) ? !0 : (Alarm.show("请先将坚壁机甲放入背包首发！",
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            }), !1)
        },
        i
    } (BaseModule);
    t.JianBiMecha = e,
    __reflect(e.prototype, "jianBiMecha.JianBiMecha")
} (jianBiMecha || (jianBiMecha = {}));
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
jianBiMecha; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = JianBiMechaFangJuSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20210820版本系统功能", "坚壁机甲关卡", "进入了锻造坚壁防具面板"),
            this.initOldPveBtnClose(51, this, "jian_bi_mecha_fang_ju_title_png",
            function() {
                e.destroy(),
                EventManager.dispatchEvent(new egret.Event("return_to_main"))
            },
            this),
            this.init(),
            this.addEvent(),
            this.refresh()
        },
        e.prototype.init = function() {
            this.lastNum = -1
        },
        e.prototype.reShow = function() {
            this.lastNum = -1,
            this.refresh()
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.reShow, this)
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(51)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.destroy(),
                EventManager.dispatchEvent(new egret.Event("return_to_main"))
            },
            this),
            ImageButtonUtil.add(this.btnAddFangJu,
            function() {
                BuyProductManager.buyProduct("250589_10237",
                function() {
                    t.refresh()
                },
                t, 1713331)
            },
            this),
            ImageButtonUtil.add(this.btnAddHammer,
            function() {
                BuyProductManager.buyProduct("250597_10236",
                function() {
                    t.refresh()
                },
                t, 1713332)
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                BuyProductManager.buyProduct("250596_10235",
                function() {
                    t.refresh()
                },
                t)
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
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.reShow, this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                t.numFightTime <= 0 ? BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : FightManager.fightNoMapBoss("", 9874)
            },
            this),
            ImageButtonUtil.add(this.btnDouble,
            function() {
                t.numHammer < 1 ? BubblerManager.getInstance().showText("修理锤数量不足！") : SocketConnection.sendByQueue(42341, [6, 1], t.refresh.bind(t))
            },
            this),
            ImageButtonUtil.add(this.btnCollect,
            function() {
                Alert.show("每日仅可领取防具1次，你确定领取吗？",
                function() {
                    SocketConnection.sendByQueue(42341, [6, 2], t.refresh.bind(t))
                })
            },
            this)
        },
        e.prototype.refresh = function(t) {
            var e = this;
            void 0 === t && (t = !1),
            ItemManager.updateItems([1713331, 1713332],
            function() {
                e.numFangJu = ItemManager.getNumByID(1713331),
                e.numHammer = ItemManager.getNumByID(1713332),
                e.txtFangJu.text = e.numFangJu.toString(),
                e.txtHammer.text = e.numHammer.toString()
            }),
            KTool.getMultiValue([AttrConst.daily_jbjj_timeFangJu, AttrConst.daily_jbjj_state1, AttrConst.daily_jbjj_numFangJuGet],
            function(t) {
                e.numFightTime = 6 - t[0];
                var i = 1 == KTool.getBit(t[1], 4),
                n = Math.pow(2, t[2]);
                e.txtFightTime.text = e.numFightTime.toString();
                var u = 0 == e.numFightTime;
                DisplayUtil.setEnabled(e.btnAddFightTime, u, !u),
                DisplayUtil.setEnabled(e.btnCollect, !i, !1),
                DisplayUtil.setEnabled(e.btnDouble, !i, !1),
                e.imgComeTomorrow.visible = i,
                e.imgComeTomorrow0.visible = i,
                e.txtCurrentNum.text = "x" + n.toString(),
                1 == n ? e.txtSuccessRate.text = "100%": 2 == n ? e.txtSuccessRate.text = "85%": 4 == n ? e.txtSuccessRate.text = "70%": 8 == n ? e.txtSuccessRate.text = "55%": 16 == n ? e.txtSuccessRate.text = "40%": 32 == n ? e.txtSuccessRate.text = "25%": 64 == n ? e.txtSuccessRate.text = "10%": 128 == n && (e.txtSuccessRate.text = "10%"),
                e.a_1.visible = 1 == n,
                e.a_2.visible = 2 == n || 4 == n,
                e.a_3.visible = 8 == n || 16 == n,
                e.a_4.visible = n >= 32,
                e.lastNum == 2 * n ? Alarm.show("敲击失败！") : e.lastNum == n / 2 && Alarm.show("敲击成功！"),
                e.lastNum = n
            })
        },
        e
    } (BaseModule);
    t.JianBiMechaFangJu = e,
    __reflect(e.prototype, "jianBiMecha.JianBiMechaFangJu")
} (jianBiMecha || (jianBiMecha = {}));
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
jianBiMecha; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = JianBiMechaHeXinSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20210820版本系统功能", "坚壁机甲关卡", "进入了合成坚壁核心关卡面板"),
            this.initOldPveBtnClose(49, this, "jian_bi_mecha_he_xin_title_png",
            function() {
                e.destroy(),
                EventManager.dispatchEvent(new egret.Event("return_to_main"))
            },
            this),
            this.init(),
            this.addEvent(),
            this.refresh()
        },
        e.prototype.init = function() {
            this.hasQuit = !1
        },
        e.prototype.reShow = function() {
            this.hasQuit = !1,
            this.refresh()
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.hasQuit = !0,
            egret.clearInterval(this.interval),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.reShow, this)
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(49)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.destroy(),
                EventManager.dispatchEvent(new egret.Event("return_to_main"))
            },
            this),
            ImageButtonUtil.add(this.btnAddChip,
            function() {
                BuyProductManager.buyProduct("250586_10231",
                function() {
                    t.refresh()
                },
                t, 1713328)
            },
            this),
            ImageButtonUtil.add(this.btnAddHeXin,
            function() {
                BuyProductManager.buyProduct("250587_10232",
                function() {
                    t.refresh()
                },
                t, 1713329)
            },
            this),
            ImageButtonUtil.add(this.btnSkip,
            function() {
                BuyProductManager.buyProductBySocket(250593,
                function() {
                    SocketConnection.sendByQueue(42341, [4, 2],
                    function() {
                        t.refresh()
                    })
                },
                t)
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
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.reShow, this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                t.hasQuit = !0,
                egret.clearInterval(t.interval),
                FightManager.fightNoMapBoss("", 9870)
            },
            this),
            ImageButtonUtil.add(this.btnSynthetize,
            function() {
                t.numChip < 5 ? BubblerManager.getInstance().showText("你拥有的核心碎片不足！") : SocketConnection.sendByQueue(42341, [4, 1], t.refresh.bind(t))
            },
            this),
            ImageButtonUtil.add(this.btnCollect,
            function() {
                SocketConnection.sendByQueue(42341, [4, 3], t.refresh.bind(t))
            },
            this)
        },
        e.prototype.refresh = function() {
            var t = this;
            ItemManager.updateItems([1713328, 1713329],
            function() {
                t.numChip = ItemManager.getNumByID(1713328),
                t.numHeXin = ItemManager.getNumByID(1713329),
                t.txtChip.text = t.numChip.toString(),
                t.txtHeXin.text = t.numHeXin.toString()
            }),
            KTool.getMultiValue([AttrConst.forever_jbjj_timeLeft],
            function(e) {
                var i = 0 == e[0] ? 0 : 1;
                if (1 == i) {
                    var n = SystemTimerManager.sysBJDate.getTime() / 1e3 - e[0] + 1;
                    n > 300 && (i = 2)
                }
                1 == i && (t.interval = egret.setInterval(function() {
                    egret.clearInterval(t.interval),
                    t.hasQuit || t.refresh()
                },
                t, 1e3), t.setTxtTime(n)),
                t.a_1.visible = 0 == i,
                t.a_2.visible = 1 == i,
                t.a_3.visible = 2 == i
            })
        },
        e.prototype.setTxtTime = function(t) {
            var e = 300 - t,
            i = Math.floor(e / 60),
            n = e % 60;
            this.txtTime.text = "0" + i.toString() + ":" + (10 > ~~n ? "0": "") + ~~n.toString()
        },
        e
    } (BaseModule);
    t.JianBiMechaHeXin = e,
    __reflect(e.prototype, "jianBiMecha.JianBiMechaHeXin")
} (jianBiMecha || (jianBiMecha = {}));
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
jianBiMecha; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = JianBiMechaWuZhuangSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20210820版本系统功能", "坚壁机甲关卡", "进入了获取坚壁武装关卡面板"),
            this.initOldPveBtnClose(50, this, "jian_bi_mecha_wu_zhuang_title_png",
            function() {
                e.destroy(),
                EventManager.dispatchEvent(new egret.Event("return_to_main"))
            },
            this),
            this.addEvent(),
            this.refresh()
        },
        e.prototype.reShow = function() {
            this.refresh(!0)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.reShow, this)
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(50)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.destroy(),
                EventManager.dispatchEvent(new egret.Event("return_to_main"))
            },
            this),
            ImageButtonUtil.add(this.btnAddWuZhuang,
            function() {
                BuyProductManager.buyProduct("250588_10234",
                function() {
                    t.refresh()
                },
                t, 1713330)
            },
            this),
            ImageButtonUtil.add(this.btnFastFight,
            function() {
                return 4 == t.numStage ? void Alarm.show("能量已达到上限，明天再过来获得坚壁武装吧！",
                function() {
                    ModuleManager.hideModule(t),
                    ModuleManager.showModuleByID(99)
                }) : void BuyProductManager.buyProductBySocket(250595,
                function() {
                    SocketConnection.sendByQueue(42341, [5, 0],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                BuyProductManager.buyProduct("250594_10233",
                function() {
                    t.refresh()
                },
                t)
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
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.reShow, this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                t.numFightTime <= 0 ? BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : 4 == t.numStage ? Alarm.show("能量已达到上限，明天再过来获得坚壁武装吧！",
                function() {
                    ModuleManager.hideModule(t),
                    ModuleManager.showModuleByID(99)
                }) : FightManager.fightNoMapBoss("", 9870 + t.numStage)
            },
            this)
        },
        e.prototype.refresh = function(t) {
            var e = this;
            void 0 === t && (t = !1),
            ItemManager.updateItems([1713330],
            function() {
                e.numWuZhuang = ItemManager.getNumByID(1713330),
                e.txtWuZhuang.text = e.numWuZhuang.toString()
            }),
            KTool.getMultiValue([AttrConst.daily_jbjj_timeWuZhuang, AttrConst.daily_jbjj_energy],
            function(i) {
                e.numFightTime = 10 - i[0];
                var n = i[1];
                n >= 100 ? e.numStage = 4 : n >= 80 ? e.numStage = 3 : n >= 50 ? e.numStage = 2 : e.numStage = 1,
                e.txtFightTime.text = e.numFightTime.toString();
                var u = 0 == e.numFightTime;
                DisplayUtil.setEnabled(e.btnAddFightTime, u, !u),
                e.txtEnergy.text = (n > 100 ? 100 : n).toString() + "/100",
                n > 100 && (DisplayUtil.setEnabled(e.btnFastFight, !1, !0), DisplayUtil.setEnabled(e.btnFight, !1, !0));
                var a = 10 * n;
                50 == n ? a = 501.5 : 80 == n && (a = 836.5),
                e.jinDu.value = a,
                e.mask1.visible = e.numStage >= 4,
                e.mask2.visible = e.numStage >= 3,
                e.mask3.visible = e.numStage >= 2,
                e.gou1.visible = e.numStage >= 4,
                e.gou2.visible = e.numStage >= 3,
                e.gou3.visible = e.numStage >= 2,
                e.imgPet1.visible = 1 == e.numStage,
                e.imgPet2.visible = 2 == e.numStage,
                e.imgPet3.visible = e.numStage >= 3,
                e.imgTips.visible = e.numStage >= 3,
                t && n >= 100 && Alarm.show("能量已达到上限，明天再过来获得坚壁武装吧！",
                function() {
                    ModuleManager.hideModule(e),
                    ModuleManager.showModuleByID(99)
                })
            })
        },
        e
    } (BaseModule);
    t.JianBiMechaWuZhuang = e,
    __reflect(e.prototype, "jianBiMecha.JianBiMechaWuZhuang")
} (jianBiMecha || (jianBiMecha = {}));
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
generateEUI.paths["resource/eui_skins/JianBiMechaFangJuSkin.exml"] = window.JianBiMechaFangJuSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "name", "numbg", "btnAddFangJu", "jbfj_2", "numbg_2", "btnAddHammer", "xiulichui_2", "btnPet", "btnCure", "a_111", "a_1", "a_2", "a_3", "a_4", "img", "btnCollect", "btnDouble", "imgComeTomorrow", "imgComeTomorrow0", "xiulichui_3", "numbg_3", "btnAddFightTime", "btnFight", "jbfj", "txtFangJu", "xiulichui", "txtHammer", "txtCurrentNum", "txtNeedHammer", "txtSuccessRate", "jrsytzcs", "txtFightTime", "up_bg", "title", "btnHelp", "btnClose", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "destroy_mecha_bg_jpg",
        t.top = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 4.5,
        t.y = 10,
        t.elementsContent = [this.name_i(), this.numbg_i(), this.btnAddFangJu_i(), this.jbfj_2_i(), this.numbg_2_i(), this.btnAddHammer_i(), this.xiulichui_2_i(), this.btnPet_i(), this.btnCure_i(), this.a_111_i(), this.a_1_i(), this.a_2_i(), this.a_3_i(), this.a_4_i(), this.img_i(), this.btnCollect_i(), this.btnDouble_i(), this.imgComeTomorrow_i(), this.imgComeTomorrow0_i(), this.xiulichui_3_i(), this._Image1_i(), this.numbg_3_i(), this.btnAddFightTime_i(), this.btnFight_i(), this.jbfj_i(), this.txtFangJu_i(), this.xiulichui_i(), this.txtHammer_i(), this.txtCurrentNum_i(), this.txtNeedHammer_i(), this.txtSuccessRate_i(), this.jrsytzcs_i(), this.txtFightTime_i()],
        t
    },
    i.name_i = function() {
        var t = new eui.Image;
        return this.name = t,
        t.source = "jian_bi_mecha_fang_ju_name_png",
        t.visible = !0,
        t.x = 5,
        t.y = 36,
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "jian_bi_mecha_he_xin_numbg_png",
        t.x = 792.945,
        t.y = 3,
        t
    },
    i.btnAddFangJu_i = function() {
        var t = new eui.Image;
        return this.btnAddFangJu = t,
        t.source = "jian_bi_mecha_he_xin_btnAddChip_png",
        t.x = 992.94,
        t.y = 2,
        t
    },
    i.jbfj_2_i = function() {
        var t = new eui.Image;
        return this.jbfj_2 = t,
        t.source = "jian_bi_mecha_fang_ju_jbfj_png",
        t.x = 824.946,
        t.y = 1,
        t
    },
    i.numbg_2_i = function() {
        var t = new eui.Image;
        return this.numbg_2 = t,
        t.source = "jian_bi_mecha_he_xin_numbg_png",
        t.x = 547.375,
        t.y = 3,
        t
    },
    i.btnAddHammer_i = function() {
        var t = new eui.Image;
        return this.btnAddHammer = t,
        t.source = "jian_bi_mecha_he_xin_btnAddChip_png",
        t.x = 747.371,
        t.y = 2,
        t
    },
    i.xiulichui_2_i = function() {
        var t = new eui.Image;
        return this.xiulichui_2 = t,
        t.source = "jian_bi_mecha_fang_ju_xiulichui_png",
        t.x = 585.881,
        t.y = 8.103,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "jian_bi_mecha_he_xin_btnPet_png",
        t.x = 0,
        t.y = 245,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "jian_bi_mecha_he_xin_btnCure_png",
        t.x = 0,
        t.y = 320,
        t
    },
    i.a_111_i = function() {
        var t = new eui.Image;
        return this.a_111 = t,
        t.source = "jian_bi_mecha_fang_ju_111_png",
        t.visible = !0,
        t.x = 610.084,
        t.y = 132.716,
        t
    },
    i.a_1_i = function() {
        var t = new eui.Image;
        return this.a_1 = t,
        t.height = 271.124,
        t.source = "jian_bi_mecha_fang_ju_1_png",
        t.visible = !0,
        t.width = 232.147,
        t.x = 689.011,
        t.y = 146.154,
        t
    },
    i.a_2_i = function() {
        var t = new eui.Image;
        return this.a_2 = t,
        t.source = "jian_bi_mecha_fang_ju_4_png",
        t.visible = !0,
        t.x = 665.084,
        t.y = 139.716,
        t
    },
    i.a_3_i = function() {
        var t = new eui.Image;
        return this.a_3 = t,
        t.height = 287.124,
        t.source = "jian_bi_mecha_fang_ju_2_png",
        t.visible = !0,
        t.width = 315.821,
        t.x = 644.174,
        t.y = 133.166,
        t
    },
    i.a_4_i = function() {
        var t = new eui.Image;
        return this.a_4 = t,
        t.height = 267.035,
        t.source = "jian_bi_mecha_fang_ju_3_png",
        t.visible = !0,
        t.width = 287,
        t.x = 656.084,
        t.y = 148.198,
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.source = "jian_bi_mecha_fang_ju_img_png",
        t.x = 635.084,
        t.y = 77.716,
        t
    },
    i.btnCollect_i = function() {
        var t = new eui.Image;
        return this.btnCollect = t,
        t.source = "jian_bi_mecha_fang_ju_btnCollect_png",
        t.visible = !0,
        t.x = 816.084,
        t.y = 487.716,
        t
    },
    i.btnDouble_i = function() {
        var t = new eui.Image;
        return this.btnDouble = t,
        t.source = "jian_bi_mecha_fang_ju_btnDouble_png",
        t.x = 606.084,
        t.y = 484.716,
        t
    },
    i.imgComeTomorrow_i = function() {
        var t = new eui.Image;
        return this.imgComeTomorrow = t,
        t.source = "jian_bi_mecha_fang_ju_imgComeTomorrow_png",
        t.visible = !0,
        t.x = 613.084,
        t.y = 495.716,
        t
    },
    i.imgComeTomorrow0_i = function() {
        var t = new eui.Image;
        return this.imgComeTomorrow0 = t,
        t.source = "jian_bi_mecha_fang_ju_imgComeTomorrow_png",
        t.visible = !0,
        t.x = 822.214,
        t.y = 495.706,
        t
    },
    i.xiulichui_3_i = function() {
        var t = new eui.Image;
        return this.xiulichui_3 = t,
        t.source = "jian_bi_mecha_fang_ju_xiulichui_png",
        t.x = 635.084,
        t.y = 558.303,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "jian_bi_mecha_fang_ju_bcqjcgl_png",
        t.x = 638.304,
        t.y = 85.616,
        t
    },
    i.numbg_3_i = function() {
        var t = new eui.Image;
        return this.numbg_3 = t,
        t.source = "jian_bi_mecha_wu_zhuang_numbg_png",
        t.x = 153.5,
        t.y = 463,
        t
    },
    i.btnAddFightTime_i = function() {
        var t = new eui.Image;
        return this.btnAddFightTime = t,
        t.source = "jian_bi_mecha_he_xin_btnAddChip_png",
        t.x = 399.5,
        t.y = 462,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "jian_bi_mecha_he_xin_btnFight_png",
        t.visible = !0,
        t.x = 197,
        t.y = 511,
        t
    },
    i.jbfj_i = function() {
        var t = new eui.Label;
        return this.jbfj = t,
        t.size = 18,
        t.text = "坚壁防具：",
        t.textColor = 16777215,
        t.x = 861.939,
        t.y = 11,
        t
    },
    i.txtFangJu_i = function() {
        var t = new eui.Label;
        return this.txtFangJu = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 945.94,
        t.y = 13,
        t
    },
    i.xiulichui_i = function() {
        var t = new eui.Label;
        return this.xiulichui = t,
        t.size = 18,
        t.text = "修理锤：",
        t.textColor = 16777215,
        t.x = 621.372,
        t.y = 11,
        t
    },
    i.txtHammer_i = function() {
        var t = new eui.Label;
        return this.txtHammer = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 692.373,
        t.y = 13,
        t
    },
    i.txtCurrentNum_i = function() {
        var t = new eui.Label;
        return this.txtCurrentNum = t,
        t.size = 40,
        t.text = "x869",
        t.textColor = 16773461,
        t.visible = !0,
        t.x = 895.084,
        t.y = 436.716,
        t
    },
    i.txtNeedHammer_i = function() {
        var t = new eui.Label;
        return this.txtNeedHammer = t,
        t.size = 18,
        t.text = "需要修理锤x1",
        t.textColor = 16777215,
        t.x = 664.788,
        t.y = 559.245,
        t
    },
    i.txtSuccessRate_i = function() {
        var t = new eui.Label;
        return this.txtSuccessRate = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 32,
        t.text = "100%",
        t.textColor = 16773461,
        t.x = 871.399,
        t.y = 94.04,
        t
    },
    i.jrsytzcs_i = function() {
        var t = new eui.Label;
        return this.jrsytzcs = t,
        t.size = 18,
        t.text = "今日剩余挑战次数：",
        t.textColor = 16777215,
        t.x = 193.5,
        t.y = 471,
        t
    },
    i.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.size = 18,
        t.text = "22",
        t.textColor = 16777215,
        t.x = 352.5,
        t.y = 470.48,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.title_i(), this.btnHelp_i(), this.btnClose_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "jian_bi_mecha_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "jian_bi_mecha_fang_ju_title_png",
        t.x = 111,
        t.y = 7,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "jian_bi_mecha_btnHelp_png",
        t.x = 302,
        t.y = 7,
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
generateEUI.paths["resource/eui_skins/JianBiMechaHeXinSkin.exml"] = window.JianBiMechaHeXinSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "img", "pet", "name", "numbg", "btnAddHeXin", "jbhx_2", "numbg_2", "btnAddChip", "jbhxs", "btnPet", "btnCure", "hechengbg", "btnFight", "txtHeXin", "jbhx", "hxsp", "txtChip", "hxspx5", "btnSynthetize", "a_1", "txtTime", "btnSkip", "a_2", "btnCollect", "a_3", "up_bg", "btnClose", "btnHelp", "title", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "destroy_mecha_bg_jpg",
        t.top = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -6.5,
        t.y = 12,
        t.elementsContent = [this.img_i(), this.pet_i(), this.name_i(), this.numbg_i(), this.btnAddHeXin_i(), this.jbhx_2_i(), this.numbg_2_i(), this.btnAddChip_i(), this.jbhxs_i(), this.btnPet_i(), this.btnCure_i(), this.hechengbg_i(), this.btnFight_i(), this.txtHeXin_i(), this.jbhx_i(), this.hxsp_i(), this.txtChip_i(), this.a_1_i(), this.a_2_i(), this.a_3_i()],
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.source = "jian_bi_mecha_he_xin_img_png",
        t.visible = !0,
        t.x = 567,
        t.y = 106,
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "jian_bi_mecha_he_xin_pet_png",
        t.visible = !0,
        t.x = 172,
        t.y = 142,
        t
    },
    i.name_i = function() {
        var t = new eui.Image;
        return this.name = t,
        t.source = "jian_bi_mecha_he_xin_name_png",
        t.visible = !0,
        t.x = 135,
        t.y = 361,
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "jian_bi_mecha_he_xin_numbg_png",
        t.visible = !0,
        t.x = 809.702,
        t.y = -.824,
        t
    },
    i.btnAddHeXin_i = function() {
        var t = new eui.Image;
        return this.btnAddHeXin = t,
        t.source = "jian_bi_mecha_he_xin_btnAddChip_png",
        t.visible = !0,
        t.x = 1009.702,
        t.y = -1.824,
        t
    },
    i.jbhx_2_i = function() {
        var t = new eui.Image;
        return this.jbhx_2 = t,
        t.source = "jian_bi_mecha_he_xin_jbhx_png",
        t.visible = !0,
        t.x = 839.702,
        t.y = -.824,
        t
    },
    i.numbg_2_i = function() {
        var t = new eui.Image;
        return this.numbg_2 = t,
        t.source = "jian_bi_mecha_he_xin_numbg_png",
        t.visible = !0,
        t.x = 567,
        t.y = 0,
        t
    },
    i.btnAddChip_i = function() {
        var t = new eui.Image;
        return this.btnAddChip = t,
        t.source = "jian_bi_mecha_he_xin_btnAddChip_png",
        t.visible = !0,
        t.x = 767,
        t.y = -1,
        t
    },
    i.jbhxs_i = function() {
        var t = new eui.Image;
        return this.jbhxs = t,
        t.source = "jian_bi_mecha_he_xin_jbhxs_png",
        t.visible = !0,
        t.x = 598,
        t.y = 0,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "jian_bi_mecha_he_xin_btnPet_png",
        t.visible = !0,
        t.x = 0,
        t.y = 243,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "jian_bi_mecha_he_xin_btnCure_png",
        t.visible = !0,
        t.x = 0,
        t.y = 318,
        t
    },
    i.hechengbg_i = function() {
        var t = new eui.Image;
        return this.hechengbg = t,
        t.source = "jian_bi_mecha_he_xin_hechengbg_png",
        t.visible = !0,
        t.x = 570,
        t.y = 494,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "jian_bi_mecha_he_xin_btnFight_png",
        t.visible = !0,
        t.x = 183,
        t.y = 509,
        t
    },
    i.txtHeXin_i = function() {
        var t = new eui.Label;
        return this.txtHeXin = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 962.702,
        t.y = 9.176,
        t
    },
    i.jbhx_i = function() {
        var t = new eui.Label;
        return this.jbhx = t,
        t.size = 18,
        t.text = "坚壁核心：",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 878.702,
        t.y = 7.176,
        t
    },
    i.hxsp_i = function() {
        var t = new eui.Label;
        return this.hxsp = t,
        t.size = 18,
        t.text = "核心碎片：",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 634,
        t.y = 8,
        t
    },
    i.txtChip_i = function() {
        var t = new eui.Label;
        return this.txtChip = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 718,
        t.y = 10,
        t
    },
    i.a_1_i = function() {
        var t = new eui.Group;
        return this.a_1 = t,
        t.visible = !1,
        t.x = 643,
        t.y = 509,
        t.elementsContent = [this.hxspx5_i(), this._Image1_i(), this.btnSynthetize_i()],
        t
    },
    i.hxspx5_i = function() {
        var t = new eui.Label;
        return this.hxspx5 = t,
        t.size = 20,
        t.text = "核心碎片x5",
        t.textColor = 16773461,
        t.visible = !0,
        t.x = 0,
        t.y = 46,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "jian_bi_mecha_he_xin_xuyao_png",
        t.x = 17.702,
        t.y = 8.908,
        t
    },
    i.btnSynthetize_i = function() {
        var t = new eui.Image;
        return this.btnSynthetize = t,
        t.source = "jian_bi_mecha_he_xin_btnSynthetize_png",
        t.x = 153,
        t.y = 0,
        t
    },
    i.a_2_i = function() {
        var t = new eui.Group;
        return this.a_2 = t,
        t.visible = !1,
        t.x = 597,
        t.y = 509,
        t.elementsContent = [this.txtTime_i(), this.btnSkip_i(), this._Image2_i()],
        t
    },
    i.txtTime_i = function() {
        var t = new eui.Label;
        return this.txtTime = t,
        t.size = 20,
        t.text = "00：00",
        t.textColor = 16773461,
        t.x = 66,
        t.y = 48,
        t
    },
    i.btnSkip_i = function() {
        var t = new eui.Image;
        return this.btnSkip = t,
        t.source = "jian_bi_mecha_he_xin_btnSkip_png",
        t.x = 199,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "jian_bi_mecha_he_xin_jlgcjshy_png",
        t.x = 4.745,
        t.y = 13,
        t
    },
    i.a_3_i = function() {
        var t = new eui.Group;
        return this.a_3 = t,
        t.visible = !1,
        t.x = 620,
        t.y = 509,
        t.elementsContent = [this.btnCollect_i(), this._Image3_i()],
        t
    },
    i.btnCollect_i = function() {
        var t = new eui.Image;
        return this.btnCollect = t,
        t.source = "jian_bi_mecha_he_xin_btnCollect_png",
        t.visible = !0,
        t.x = 176,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "jian_bi_mecha_he_xin_cggchx_png",
        t.x = -6,
        t.y = 22,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.btnHelp_i(), this.title_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "jian_bi_mecha_up_bg_png",
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
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "jian_bi_mecha_btnHelp_png",
        t.x = 302,
        t.y = 7,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "jian_bi_mecha_he_xin_title_png",
        t.x = 112,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/JianBiMechaSkin.exml"] = window.JianBiMechaSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "pet", "btnInfo", "btnGet", "btnSuperGet", "btnUp", "imgTips", "left", "rightbg", "btnGetHeXin", "btnFastGet1", "btnGetWuZhuang", "btnFastGet2", "btnGetFangJu", "btnFastGet3", "txtHeXin", "txtWuZhuang", "txtFangJu", "right", "up_bg", "title", "btnClose", "btnHelp", "top", "childMask", "bg", "line", "line_", "iconkuang0", "btnWu", "iconkuang_0", "btnTe", "iconkuang_1", "btnKe", "btnFastGetTe", "btnGetTe", "btnFastGetWu", "btnGetWu", "btnFastGetKe", "btnGetKe", "btnCloseChild", "imgHasKe", "imgHasWu", "imgHasTe", "nlds0", "jbhxx0", "dhxy0", "jbwzx0", "jbfjx0", "jbhxx2_0", "dhxy_kb0", "jbwzx1", "jbfjx1", "jbhxx2_1", "dhxy_kb_0", "jbwzx15_0", "jbfjx20_0", "zsky0", "diwujineng0", "zstx0", "Child"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.left_i(), this.right_i(), this.top_i(), this.childMask_i(), this.Child_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "destroy_mecha_bg_jpg",
        t.top = 0,
        t.visible = !0,
        t
    },
    i.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.horizontalCenter = -265.5,
        t.visible = !0,
        t.y = 45.842,
        t.elementsContent = [this.pet_i(), this.btnInfo_i(), this.btnGet_i(), this.btnSuperGet_i(), this.btnUp_i(), this.imgTips_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "jian_bi_mecha_dhjbjjxy_png",
        t.visible = !0,
        t.x = 34.485,
        t.y = -1.315,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "jian_bi_mecha_btnInfo_png",
        t.visible = !0,
        t.x = 26,
        t.y = 485,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "jian_bi_mecha_btnFight_png",
        t.visible = !0,
        t.x = 334,
        t.y = 488,
        t
    },
    i.btnSuperGet_i = function() {
        var t = new eui.Image;
        return this.btnSuperGet = t,
        t.source = "jian_bi_mecha_btnBuy_png",
        t.visible = !0,
        t.x = 134,
        t.y = 485,
        t
    },
    i.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "jian_bi_mecha_btnUp_png",
        t.visible = !0,
        t.x = 234,
        t.y = 485,
        t
    },
    i.imgTips_i = function() {
        var t = new eui.Image;
        return this.imgTips = t,
        t.source = "jian_bi_mecha_dhjbjxy_png",
        t.visible = !1,
        t.x = 84.025,
        t.y = 400.889,
        t
    },
    i.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.horizontalCenter = 310.5,
        t.visible = !0,
        t.y = 2.842,
        t.elementsContent = [this.rightbg_i(), this.btnGetHeXin_i(), this.btnFastGet1_i(), this.btnGetWuZhuang_i(), this.btnFastGet2_i(), this.btnGetFangJu_i(), this.btnFastGet3_i(), this.txtHeXin_i(), this.txtWuZhuang_i(), this.txtFangJu_i()],
        t
    },
    i.rightbg_i = function() {
        var t = new eui.Image;
        return this.rightbg = t,
        t.source = "jian_bi_mecha_rightbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGetHeXin_i = function() {
        var t = new eui.Image;
        return this.btnGetHeXin = t,
        t.source = "jian_bi_mecha_btnGetFangJu_png",
        t.visible = !0,
        t.x = 315.67,
        t.y = 126.838,
        t
    },
    i.btnFastGet1_i = function() {
        var t = new eui.Image;
        return this.btnFastGet1 = t,
        t.source = "jian_bi_mecha_btnFastGet1_png",
        t.x = 247,
        t.y = 168,
        t
    },
    i.btnGetWuZhuang_i = function() {
        var t = new eui.Image;
        return this.btnGetWuZhuang = t,
        t.source = "jian_bi_mecha_btnGetFangJu_png",
        t.visible = !0,
        t.x = 316.656,
        t.y = 288.723,
        t
    },
    i.btnFastGet2_i = function() {
        var t = new eui.Image;
        return this.btnFastGet2 = t,
        t.source = "jian_bi_mecha_btnFastGet1_png",
        t.x = 247.986,
        t.y = 329.885,
        t
    },
    i.btnGetFangJu_i = function() {
        var t = new eui.Image;
        return this.btnGetFangJu = t,
        t.source = "jian_bi_mecha_btnGetFangJu_png",
        t.visible = !0,
        t.x = 316.113,
        t.y = 449.728,
        t
    },
    i.btnFastGet3_i = function() {
        var t = new eui.Image;
        return this.btnFastGet3 = t,
        t.source = "jian_bi_mecha_btnFastGet1_png",
        t.x = 247.443,
        t.y = 490.889,
        t
    },
    i.txtHeXin_i = function() {
        var t = new eui.Label;
        return this.txtHeXin = t,
        t.size = 18,
        t.text = "8",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.width = 35,
        t.x = 91.638,
        t.y = 123.721,
        t
    },
    i.txtWuZhuang_i = function() {
        var t = new eui.Label;
        return this.txtWuZhuang = t,
        t.size = 18,
        t.text = "88",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.width = 35,
        t.x = 91.534,
        t.y = 286.18,
        t
    },
    i.txtFangJu_i = function() {
        var t = new eui.Label;
        return this.txtFangJu = t,
        t.size = 18,
        t.text = "888",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.width = 35,
        t.x = 91.794,
        t.y = 446.48,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.title_i(), this.btnClose_i(), this.btnHelp_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "jian_bi_mecha_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "jian_bi_mecha_title_png",
        t.x = 112,
        t.y = 7,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "jian_bi_mecha_btnHelp_png",
        t.x = 240,
        t.y = 7,
        t
    },
    i.childMask_i = function() {
        var t = new eui.Rect;
        return this.childMask = t,
        t.alpha = .6,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !1,
        t
    },
    i.Child_i = function() {
        var t = new eui.Group;
        return this.Child = t,
        t.horizontalCenter = -2.5,
        t.verticalCenter = 0,
        t.visible = !1,
        t.width = 780,
        t.elementsContent = [this.bg_i(), this.line_i(), this.line__i(), this.iconkuang0_i(), this.btnWu_i(), this.iconkuang_0_i(), this.btnTe_i(), this.iconkuang_1_i(), this.btnKe_i(), this.btnFastGetTe_i(), this.btnGetTe_i(), this.btnFastGetWu_i(), this.btnGetWu_i(), this.btnFastGetKe_i(), this.btnGetKe_i(), this.btnCloseChild_i(), this.imgHasKe_i(), this.imgHasWu_i(), this.imgHasTe_i(), this.nlds0_i(), this.jbhxx0_i(), this.dhxy0_i(), this.jbwzx0_i(), this.jbfjx0_i(), this.jbhxx2_0_i(), this.dhxy_kb0_i(), this.jbwzx1_i(), this.jbfjx1_i(), this.jbhxx2_1_i(), this.dhxy_kb_0_i(), this.jbwzx15_0_i(), this.jbfjx20_0_i(), this.zsky0_i(), this.diwujineng0_i(), this.zstx0_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(39, 0, 2, 456),
        t.source = "jian_bi_mecha_bg_png",
        t.y = .88,
        t
    },
    i.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.source = "jian_bi_mecha_line_png",
        t.x = 528,
        t.y = 44,
        t
    },
    i.line__i = function() {
        var t = new eui.Image;
        return this.line_ = t,
        t.source = "jian_bi_mecha_line_png",
        t.x = 248,
        t.y = 44,
        t
    },
    i.iconkuang0_i = function() {
        var t = new eui.Image;
        return this.iconkuang0 = t,
        t.source = "jian_bi_mecha_iconkuang_png",
        t.x = 352,
        t.y = 85,
        t
    },
    i.btnWu_i = function() {
        var t = new eui.Image;
        return this.btnWu = t,
        t.source = "jian_bi_mecha_btnWu_png",
        t.x = 361,
        t.y = 98,
        t
    },
    i.iconkuang_0_i = function() {
        var t = new eui.Image;
        return this.iconkuang_0 = t,
        t.source = "jian_bi_mecha_iconkuang_png",
        t.x = 610,
        t.y = 85,
        t
    },
    i.btnTe_i = function() {
        var t = new eui.Image;
        return this.btnTe = t,
        t.source = "jian_bi_mecha_btnTe_png",
        t.x = 625,
        t.y = 103,
        t
    },
    i.iconkuang_1_i = function() {
        var t = new eui.Image;
        return this.iconkuang_1 = t,
        t.source = "jian_bi_mecha_iconkuang_png",
        t.x = 92,
        t.y = 85,
        t
    },
    i.btnKe_i = function() {
        var t = new eui.Image;
        return this.btnKe = t,
        t.source = "jian_bi_mecha_btnKe_png",
        t.x = 101,
        t.y = 97,
        t
    },
    i.btnFastGetTe_i = function() {
        var t = new eui.Image;
        return this.btnFastGetTe = t,
        t.source = "jian_bi_mecha_btnFastGetKe_png",
        t.x = 560,
        t.y = 362,
        t
    },
    i.btnGetTe_i = function() {
        var t = new eui.Image;
        return this.btnGetTe = t,
        t.source = "jian_bi_mecha_btnGetKe_png",
        t.x = 639,
        t.y = 373,
        t
    },
    i.btnFastGetWu_i = function() {
        var t = new eui.Image;
        return this.btnFastGetWu = t,
        t.source = "jian_bi_mecha_btnFastGetKe_png",
        t.x = 300,
        t.y = 362,
        t
    },
    i.btnGetWu_i = function() {
        var t = new eui.Image;
        return this.btnGetWu = t,
        t.source = "jian_bi_mecha_btnGetKe_png",
        t.x = 379,
        t.y = 373,
        t
    },
    i.btnFastGetKe_i = function() {
        var t = new eui.Image;
        return this.btnFastGetKe = t,
        t.source = "jian_bi_mecha_btnFastGetKe_png",
        t.visible = !0,
        t.x = 40,
        t.y = 362,
        t
    },
    i.btnGetKe_i = function() {
        var t = new eui.Image;
        return this.btnGetKe = t,
        t.source = "jian_bi_mecha_btnGetKe_png",
        t.x = 119,
        t.y = 373,
        t
    },
    i.btnCloseChild_i = function() {
        var t = new eui.Image;
        return this.btnCloseChild = t,
        t.source = "jian_bi_mecha_btnClose_png",
        t.x = 723,
        t.y = 12,
        t
    },
    i.imgHasKe_i = function() {
        var t = new eui.Image;
        return this.imgHasKe = t,
        t.source = "jian_bi_mecha_yiduihuan_png",
        t.visible = !0,
        t.x = 59.306,
        t.y = 365.258,
        t
    },
    i.imgHasWu_i = function() {
        var t = new eui.Image;
        return this.imgHasWu = t,
        t.source = "jian_bi_mecha_yiduihuan_png",
        t.x = 318,
        t.y = 363.07,
        t
    },
    i.imgHasTe_i = function() {
        var t = new eui.Image;
        return this.imgHasTe = t,
        t.source = "jian_bi_mecha_yiduihuan_png",
        t.x = 579,
        t.y = 363.07,
        t
    },
    i.nlds0_i = function() {
        var t = new eui.Label;
        return this.nlds0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "能力提升",
        t.textColor = 16772517,
        t.visible = !0,
        t.x = 339,
        t.y = 23,
        t
    },
    i.jbhxx0_i = function() {
        var t = new eui.Label;
        return this.jbhxx0 = t,
        t.size = 16,
        t.text = "坚壁核心x2",
        t.textColor = 16772773,
        t.x = 90,
        t.y = 277,
        t
    },
    i.dhxy0_i = function() {
        var t = new eui.Label;
        return this.dhxy0 = t,
        t.size = 16,
        t.text = "兑换需要：",
        t.textColor = 16777215,
        t.x = 96,
        t.y = 255,
        t
    },
    i.jbwzx0_i = function() {
        var t = new eui.Label;
        return this.jbwzx0 = t,
        t.size = 16,
        t.text = "坚壁武装x5",
        t.textColor = 16772773,
        t.x = 90,
        t.y = 298,
        t
    },
    i.jbfjx0_i = function() {
        var t = new eui.Label;
        return this.jbfjx0 = t,
        t.size = 16,
        t.text = "坚壁防具x8",
        t.textColor = 16772773,
        t.x = 90,
        t.y = 319,
        t
    },
    i.jbhxx2_0_i = function() {
        var t = new eui.Label;
        return this.jbhxx2_0 = t,
        t.size = 16,
        t.text = "坚壁核心x2",
        t.textColor = 16772773,
        t.x = 350,
        t.y = 277,
        t
    },
    i.dhxy_kb0_i = function() {
        var t = new eui.Label;
        return this.dhxy_kb0 = t,
        t.size = 16,
        t.text = "兑换需要：",
        t.textColor = 16777215,
        t.x = 356,
        t.y = 255,
        t
    },
    i.jbwzx1_i = function() {
        var t = new eui.Label;
        return this.jbwzx1 = t,
        t.size = 16,
        t.text = "坚壁武装x15",
        t.textColor = 16772773,
        t.x = 346,
        t.y = 298,
        t
    },
    i.jbfjx1_i = function() {
        var t = new eui.Label;
        return this.jbfjx1 = t,
        t.size = 16,
        t.text = "坚壁防具x20",
        t.textColor = 16772773,
        t.x = 346,
        t.y = 319,
        t
    },
    i.jbhxx2_1_i = function() {
        var t = new eui.Label;
        return this.jbhxx2_1 = t,
        t.size = 16,
        t.text = "坚壁核心x2",
        t.textColor = 16772773,
        t.x = 608,
        t.y = 277,
        t
    },
    i.dhxy_kb_0_i = function() {
        var t = new eui.Label;
        return this.dhxy_kb_0 = t,
        t.size = 16,
        t.text = "兑换需要：",
        t.textColor = 16777215,
        t.x = 614,
        t.y = 255,
        t
    },
    i.jbwzx15_0_i = function() {
        var t = new eui.Label;
        return this.jbwzx15_0 = t,
        t.size = 16,
        t.text = "坚壁武装x15",
        t.textColor = 16772773,
        t.x = 604,
        t.y = 298,
        t
    },
    i.jbfjx20_0_i = function() {
        var t = new eui.Label;
        return this.jbfjx20_0 = t,
        t.size = 16,
        t.text = "坚壁防具x20",
        t.textColor = 16772773,
        t.x = 604,
        t.y = 319,
        t
    },
    i.zsky0_i = function() {
        var t = new eui.Label;
        return this.zsky0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "专属刻印",
        t.textColor = 16773461,
        t.x = 91,
        t.y = 180,
        t
    },
    i.diwujineng0_i = function() {
        var t = new eui.Label;
        return this.diwujineng0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "第五技能",
        t.textColor = 16773461,
        t.x = 350,
        t.y = 180,
        t
    },
    i.zstx0_i = function() {
        var t = new eui.Label;
        return this.zstx0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "专属特性",
        t.textColor = 16773461,
        t.x = 609,
        t.y = 180,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/JianBiMechaWuZhuangSkin.exml"] = window.JianBiMechaWuZhuangSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgPet1", "imgPet2", "imgPet3", "btnPet", "btnCure", "right", "jinDu", "mask1", "gou1", "mask2", "gou2", "mask3", "gou3", "btnFight", "btnFastFight", "numbg", "btnAddWuZhuang", "jbwz_2", "numbg_2", "btnAddFightTime", "imgTips", "jbwz", "txtWuZhuang", "jrsytzcs", "txtFightTime", "txtEnergy", "wupinbg", "nlx10", "nlx8", "nlx6", "info", "up_bg", "title", "btnHelp", "btnClose", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.top_i()]
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
            t.height = 388,
            t.source = "jian_bi_mecha_wu_zhuang_jinDu_png",
            t.width = 11,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "destroy_mecha_bg_jpg",
        t.top = 0,
        t.visible = !0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -17.5,
        t.y = 11,
        t.elementsContent = [this.imgPet1_i(), this.imgPet2_i(), this.imgPet3_i(), this.btnPet_i(), this.btnCure_i(), this.right_i(), this.jinDu_i(), this.mask1_i(), this.gou1_i(), this.mask2_i(), this.gou2_i(), this.mask3_i(), this.gou3_i(), this.btnFight_i(), this.btnFastFight_i(), this.numbg_i(), this.btnAddWuZhuang_i(), this.jbwz_2_i(), this.numbg_2_i(), this.btnAddFightTime_i(), this._Image1_i(), this.imgTips_i(), this.jbwz_i(), this.txtWuZhuang_i(), this.jrsytzcs_i(), this.txtFightTime_i(), this.txtEnergy_i(), this.info_i()],
        t
    },
    n.imgPet1_i = function() {
        var t = new eui.Image;
        return this.imgPet1 = t,
        t.source = "jian_bi_mecha_wu_zhuang_imgPet1_png",
        t.visible = !1,
        t.x = 108,
        t.y = 77,
        t
    },
    n.imgPet2_i = function() {
        var t = new eui.Image;
        return this.imgPet2 = t,
        t.source = "jian_bi_mecha_wu_zhuang_imgPet2_png",
        t.visible = !1,
        t.x = 2,
        t.y = 12,
        t
    },
    n.imgPet3_i = function() {
        var t = new eui.Image;
        return this.imgPet3 = t,
        t.source = "jian_bi_mecha_wu_zhuang_imgPet3_png",
        t.visible = !0,
        t.x = 0,
        t.y = 54,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "jian_bi_mecha_he_xin_btnPet_png",
        t.visible = !0,
        t.x = 22,
        t.y = 244,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "jian_bi_mecha_he_xin_btnCure_png",
        t.visible = !0,
        t.x = 22,
        t.y = 319,
        t
    },
    n.right_i = function() {
        var t = new eui.Image;
        return this.right = t,
        t.source = "jian_bi_mecha_wu_zhuang_right_png",
        t.visible = !0,
        t.x = 641,
        t.y = 57,
        t
    },
    n.jinDu_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDu = t,
        t.direction = "ttb",
        t.maximum = 1e3,
        t.rotation = 180,
        t.x = 660.868,
        t.y = 450.808,
        t.skinName = i,
        t
    },
    n.mask1_i = function() {
        var t = new eui.Image;
        return this.mask1 = t,
        t.source = "jian_bi_mecha_wu_zhuang_mask_png",
        t.visible = !1,
        t.x = 662,
        t.y = 62,
        t
    },
    n.gou1_i = function() {
        var t = new eui.Image;
        return this.gou1 = t,
        t.source = "jian_bi_mecha_wu_zhuang_gou_png",
        t.visible = !1,
        t.x = 841,
        t.y = 68,
        t
    },
    n.mask2_i = function() {
        var t = new eui.Image;
        return this.mask2 = t,
        t.height = 130.808,
        t.source = "jian_bi_mecha_wu_zhuang_mask_png",
        t.visible = !1,
        t.x = 662,
        t.y = 126,
        t
    },
    n.gou2_i = function() {
        var t = new eui.Image;
        return this.gou2 = t,
        t.source = "jian_bi_mecha_wu_zhuang_gou_png",
        t.visible = !1,
        t.x = 841,
        t.y = 168.052,
        t
    },
    n.mask3_i = function() {
        var t = new eui.Image;
        return this.mask3 = t,
        t.height = 196.868,
        t.source = "jian_bi_mecha_wu_zhuang_mask_png",
        t.visible = !1,
        t.x = 662,
        t.y = 255,
        t
    },
    n.gou3_i = function() {
        var t = new eui.Image;
        return this.gou3 = t,
        t.source = "jian_bi_mecha_wu_zhuang_gou_png",
        t.visible = !1,
        t.x = 841,
        t.y = 330.698,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "jian_bi_mecha_he_xin_btnFight_png",
        t.visible = !0,
        t.x = 853,
        t.y = 510,
        t
    },
    n.btnFastFight_i = function() {
        var t = new eui.Image;
        return this.btnFastFight = t,
        t.source = "jian_bi_mecha_wu_zhuang_btnFastFight_png",
        t.visible = !0,
        t.x = 643,
        t.y = 507,
        t
    },
    n.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "jian_bi_mecha_he_xin_numbg_png",
        t.x = 852.816,
        t.y = 7.881,
        t
    },
    n.btnAddWuZhuang_i = function() {
        var t = new eui.Image;
        return this.btnAddWuZhuang = t,
        t.source = "jian_bi_mecha_he_xin_btnAddChip_png",
        t.x = 1052.816,
        t.y = 6.881,
        t
    },
    n.jbwz_2_i = function() {
        var t = new eui.Image;
        return this.jbwz_2 = t,
        t.source = "jian_bi_mecha_wu_zhuang_jbwz_png",
        t.x = 879.816,
        t.y = 5.881,
        t
    },
    n.numbg_2_i = function() {
        var t = new eui.Image;
        return this.numbg_2 = t,
        t.source = "jian_bi_mecha_wu_zhuang_numbg_png",
        t.x = 724.848,
        t.y = 464.65,
        t
    },
    n.btnAddFightTime_i = function() {
        var t = new eui.Image;
        return this.btnAddFightTime = t,
        t.source = "jian_bi_mecha_he_xin_btnAddChip_png",
        t.x = 970.848,
        t.y = 463.65,
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "jian_bi_mecha_wu_zhuang_dqnljd_png",
        t.visible = !0,
        t.x = 643.701,
        t.y = 30.286,
        t
    },
    n.imgTips_i = function() {
        var t = new eui.Image;
        return this.imgTips = t,
        t.source = "jian_bi_mecha_wu_zhuang_dhk_png",
        t.visible = !1,
        t.x = 128,
        t.y = 93.5,
        t
    },
    n.jbwz_i = function() {
        var t = new eui.Label;
        return this.jbwz = t,
        t.size = 18,
        t.text = "坚壁武装：",
        t.textColor = 16777215,
        t.x = 921.816,
        t.y = 15.881,
        t
    },
    n.txtWuZhuang_i = function() {
        var t = new eui.Label;
        return this.txtWuZhuang = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 1005.816,
        t.y = 16.469,
        t
    },
    n.jrsytzcs_i = function() {
        var t = new eui.Label;
        return this.jrsytzcs = t,
        t.size = 18,
        t.text = "今日剩余挑战次数：",
        t.textColor = 16777215,
        t.x = 764.848,
        t.y = 472.65,
        t
    },
    n.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.size = 18,
        t.text = "22",
        t.textColor = 16777215,
        t.x = 923.848,
        t.y = 473.827,
        t
    },
    n.txtEnergy_i = function() {
        var t = new eui.Label;
        return this.txtEnergy = t,
        t.size = 20,
        t.text = "000/100",
        t.textColor = 16773461,
        t.visible = !0,
        t.width = 75.9999999999999,
        t.x = 797,
        t.y = 38,
        t
    },
    n.info_i = function() {
        var t = new eui.Group;
        return this.info = t,
        t.height = 100,
        t.visible = !0,
        t.width = 393,
        t.x = 115,
        t.y = 481,
        t.elementsContent = [this.wupinbg_i(), this.nlx10_i(), this.nlx8_i(), this.nlx6_i(), this._Image2_i(), this._Image3_i(), this._Image4_i()],
        t
    },
    n.wupinbg_i = function() {
        var t = new eui.Image;
        return this.wupinbg = t,
        t.source = "jian_bi_mecha_wu_zhuang_wupinbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.nlx10_i = function() {
        var t = new eui.Label;
        return this.nlx10 = t,
        t.size = 18,
        t.text = "能量x10",
        t.textColor = 16773461,
        t.x = 262,
        t.y = 19,
        t
    },
    n.nlx8_i = function() {
        var t = new eui.Label;
        return this.nlx8 = t,
        t.size = 18,
        t.text = "能量x8",
        t.textColor = 16773461,
        t.x = 279,
        t.y = 43,
        t
    },
    n.nlx6_i = function() {
        var t = new eui.Label;
        return this.nlx6 = t,
        t.size = 18,
        t.text = "能量x6",
        t.textColor = 16773461,
        t.x = 286,
        t.y = 68,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "jian_bi_mecha_wu_zhuang_11-15hgnzsjkhd_png",
        t.x = 39.85,
        t.y = 60.215,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "jian_bi_mecha_wu_zhuang_3hgnzsjkhd_png",
        t.x = 41.432,
        t.y = 10.185,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "jian_bi_mecha_wu_zhuang_4-10hgnzsjkhd_png",
        t.x = 26.1,
        t.y = 34.218,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.title_i(), this.btnHelp_i(), this.btnClose_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "jian_bi_mecha_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "jian_bi_mecha_wu_zhuang_title_png",
        t.x = 112,
        t.y = 7,
        t
    },
    n.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "jian_bi_mecha_btnHelp_png",
        t.x = 302,
        t.y = 7,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    e
} (eui.Skin);