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
destroyMecha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.DestroyMechaMainSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210806版本系统功能", "毁灭机甲关卡", "进入毁灭机甲主面板"),
            this.initOldPveBtnClose(42, this, "destroy_mecha_main_title_png",
            function() {
                ModuleManager.hideModule(t)
            },
            this),
            this.addEvent(),
            this.refresh()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.refresh, this)
        },
        i.prototype.reShow = function() {
            this.refresh()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnSuperGet,
            function() {
                BuyProductManager.buyProductBySocket(250631 + t.step,
                function() {
                    SocketConnection.sendByQueue(42341, [7, 1],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastBeat1,
            function() {
                BuyProductManager.buyProductBySocket(250635,
                function() {
                    SocketConnection.sendByQueue(42341, [10, 1],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastBeat2,
            function() {
                BuyProductManager.buyProductBySocket(250635,
                function() {
                    SocketConnection.sendByQueue(42341, [10, 2],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddChip,
            function() {
                BuyProductManager.buyProduct("250636_10257",
                function() {
                    t.refresh()
                },
                t, 1713399)
            },
            this),
            ImageButtonUtil.add(this.btnAddTime,
            function() {
                t.challengeTimes <= 0 ? BuyProductManager.buyProduct("250634_10258",
                function() {
                    t.refresh()
                },
                t) : BubblerManager.getInstance().showText("无需购买 挑战次数！")
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(t)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3390)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(42)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(42341, [7, 2], t.refresh.bind(t))
            },
            this),
            ImageButtonUtil.add(this.btnForge,
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModule("destroyMecha", ["destroy_mecha"], null, "DestroyMechaForge", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnIntensify,
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModule("destroyMecha", ["destroy_mecha"], null, "DestroyMechaIntensify", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnStartBeat1,
            function() {
                t.fight(1)
            },
            this),
            ImageButtonUtil.add(this.btnStartBeat2,
            function() {
                t.fight(2)
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
            this)
        },
        i.prototype.refresh = function() {
            var t = this;
            ItemManager.updateItems([1713399],
            function() {
                t.txtChips.text = ItemManager.getNumByID(1713399).toString()
            }),
            KTool.getMultiValue([101221, 18260, 18261],
            function(e) {
                var i, n = 1 == KTool.getBit(e[0], 1),
                o = 1 == KTool.getBit(e[0], 5),
                r = 1 == KTool.getBit(e[0], 6);
                n ? i = 2 : o && r ? i = 1 : (i = 0, o ? t.step = 2 : r ? t.step = 1 : t.step = 0),
                t.challengeTimes = 10 - e[1],
                t.challengeTimes > 0 ? DisplayUtil.setEnabled(t.btnAddTime, !1, !0) : DisplayUtil.setEnabled(t.btnAddTime, !0, !1);
                var s = e[2] >> 0 & 255,
                u = e[2] >> 8 & 255;
                t.btnSuperGet.visible = t.btnForge.visible = 0 == i,
                t.btnGet.visible = 1 == i,
                t.btnIntensify.visible = 2 == i,
                1 == i && BubblerManager.getInstance().showText("挑战完成，快领取毁灭机甲吧！"),
                t.txtTimes.text = t.challengeTimes.toString(),
                1 == s || 3 == s ? t.txtContinueBeat1.text = "1": 2 == s && (t.txtContinueBeat1.text = "3"),
                1 == u || 3 == u ? t.txtContinueBeat2.text = "1": 2 == u && (t.txtContinueBeat2.text = "3");
                var a = 0 == s,
                h = 0 == u;
                a || h || (a = h = !0),
                t.txtContinueBeat1.visible = !a,
                t.btnContinueBeat1.visible = !a,
                t.btnStartBeat1.visible = a,
                t.imgContinueBeat1.visible = !a,
                t.btnFastBeat1.visible = a,
                t.txtContinueBeat2.visible = !h,
                t.btnContinueBeat2.visible = !h,
                t.btnStartBeat2.visible = h,
                t.imgContinueBeat2.visible = !h,
                t.btnFastBeat2.visible = h
            })
        },
        i.prototype.fight = function(t) {
            this.challengeTimes <= 0 ? BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : FightManager.fightNoMapBoss("", 1 == t ? 9902 : 9903)
        },
        i
    } (BaseModule);
    t.DestroyMecha = e,
    __reflect(e.prototype, "destroyMecha.DestroyMecha")
} (destroyMecha || (destroyMecha = {}));
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
destroyMecha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.arrayGoal = [["15回合内击败马尔修斯", "10回合内击败马尔修斯", "5回合内击败马尔修斯", "3回合内击败马尔修斯", "1回合内击败马尔修斯"], ["使用物理攻击击败马尔修斯", "使用特殊攻击击败马尔修斯", "使用固定伤害击败马尔修斯", "使用暴击伤害击败马尔修斯", "精灵满血击败马尔修斯"], ["单回合最高伤害大于500", "单回合最高伤害大于800", "单回合最高伤害大于1000", "单回合最高伤害大于1200", "单回合最高伤害大于1500"]],
            i.skinName = t.DestroyMechaForgeSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210806版本系统功能", "毁灭机甲关卡", "进入锻造核心机甲和武装部件的关卡面板"),
            this.initOldPveBtnClose(43, this, "destroy_mecha_forge_title_png",
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModule("destroyMecha", ["destroy_mecha"], null, "DestroyMecha", AppDoStyle.NULL)
            },
            this),
            this.addEvent(),
            this.refresh()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.refresh, this)
        },
        i.prototype.reShow = function() {
            this.refresh()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                BuyProductManager.buyProductBySocket(250644,
                function() {
                    SocketConnection.sendByQueue(42341, [12, 1],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastForge,
            function() {
                BuyProductManager.buyProductBySocket(250637,
                function() {
                    SocketConnection.sendByQueue(42341, [11, 1],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastArm,
            function() {
                BuyProductManager.buyProductBySocket(250638,
                function() {
                    SocketConnection.sendByQueue(42341, [11, 2],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddChip,
            function() {
                BuyProductManager.buyProduct("250636_10257",
                function() {
                    t.refresh()
                },
                t, 1713399)
            },
            this),
            ImageButtonUtil.add(this.btnAddJinDu,
            function() {
                BuyProductManager.buyProductBySocket(250645,
                function(e) {
                    SocketConnection.sendByQueue(42341, [15, e],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.heart,
            function() {
                BuyProductManager.buyProductBySocket(250643,
                function() {
                    SocketConnection.sendByQueue(42341, [12, 3],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.leftwing,
            function() {
                BuyProductManager.buyProductBySocket(250641,
                function() {
                    SocketConnection.sendByQueue(42341, [12, 2],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.leftFoot,
            function() {
                BuyProductManager.buyProductBySocket(250639,
                function() {
                    SocketConnection.sendByQueue(42341, [12, 5],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.rightWing,
            function() {
                BuyProductManager.buyProductBySocket(250642,
                function() {
                    SocketConnection.sendByQueue(42341, [12, 4],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.rightFoot,
            function() {
                BuyProductManager.buyProductBySocket(250640,
                function() {
                    SocketConnection.sendByQueue(42341, [12, 6],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModule("destroyMecha", ["destroy_mecha"], null, "DestroyMecha", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                var t = config.Help_tips.getItem(43),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
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
            ImageButtonUtil.add(this.btnBeat,
            function() {
                t.numChips > 0 ? FightManager.fightNoMapBoss("", 9904) : BubblerManager.getInstance().showText("机甲碎片数量不足。")
            },
            this),
            ImageButtonUtil.add(this.btnRoll,
            function() {
                t.numChips < 2 ? BubblerManager.getInstance().showText("机甲碎片数量不足。") : SocketConnection.sendByQueue(42341, [13, 1], t.refresh.bind(t))
            },
            this),
            ImageButtonUtil.add(this.btnReRoll,
            function() {
                t.numChips < 1 ? BubblerManager.getInstance().showText("机甲碎片数量不足。") : SocketConnection.sendByQueue(42341, [13, 2], t.refresh.bind(t))
            },
            this),
            ImageButtonUtil.add(this.btnGoToChallenge,
            function() {
                FightManager.fightNoMapBoss("", 9905)
            },
            this)
        },
        i.prototype.refresh = function() {
            var t = this;
            ItemManager.updateItems([1713399],
            function() {
                t.numChips = ItemManager.getNumByID(1713399),
                t.txtChips.text = t.numChips.toString()
            }),
            KTool.getMultiValue([101221, 101223, 101224, 101225, 101226],
            function(e) {
                var i = 1 == KTool.getBit(e[0], 5),
                n = 1 == KTool.getBit(e[0], 6);
                i && n && (ModuleManager.hideModule(t), ModuleManager.showModule("destroyMecha", ["destroy_mecha"], null, "DestroyMecha", AppDoStyle.NULL));
                var o = 10 * (e[1] >> 8 & 255),
                r = 10 * (e[1] >> 0 & 255),
                s = 10 * (e[1] >> 16 & 255),
                u = 10 * (e[2] >> 0 & 255),
                a = 10 * (e[2] >> 8 & 255),
                h = o >= 100,
                _ = r >= 100,
                g = u >= 100,
                c = s >= 100,
                l = a >= 100,
                b = e[3],
                d = e[4] >> 0 & 255,
                f = e[4] >> 8 & 255,
                y = e[4] >> 16 & 255,
                m = 0 != d;
                t.mask1.visible = i,
                t.mask2.visible = n,
                t.txtHeart.text = o + "%",
                t.txtLeftWing.text = r + "%",
                t.txtLeftFoot.text = u + "%",
                t.txtRightWing.text = s + "%",
                t.txtRightFoot.text = a + "%",
                t.jinDuHeart.value = h ? 100 : o,
                t.jinDuLeftWing.value = _ ? 100 : r,
                t.jinDuLeftFoot.value = g ? 100 : u,
                t.jinDuRightWing.value = c ? 100 : s,
                t.jinDuRightFoot.value = l ? 100 : a,
                t.txtFastForgeHeart.visible = !h,
                t.txtFastForgeLeftWing.visible = !_,
                t.txtFastForgeLeftFoot.visible = !g,
                t.txtFastForgeRightWing.visible = !c,
                t.txtFastForgeRightFoot.visible = !l,
                DisplayUtil.setEnabled(t.heart, !h, !1),
                DisplayUtil.setEnabled(t.leftwing, !_, !1),
                DisplayUtil.setEnabled(t.leftFoot, !g, !1),
                DisplayUtil.setEnabled(t.rightWing, !c, !1),
                DisplayUtil.setEnabled(t.rightFoot, !l, !1),
                t.txtJinDu.text = b + "/100",
                t.jinDuArm.value = b > 100 ? 100 : b,
                t.btnRoll.visible = !m,
                t.btnReRoll.visible = m,
                t.btnGoToChallenge.visible = m;
                var p = "请先抽取击败条件";
                t.txtGoal1.text = 0 == d ? p: t.arrayGoal[0][d - 1],
                t.txtGoal2.text = 0 == d ? p: t.arrayGoal[1][f - 1],
                t.txtGoal3.text = 0 == d ? p: t.arrayGoal[2][y - 1]
            })
        },
        i
    } (BaseModule);
    t.DestroyMechaForge = e,
    __reflect(e.prototype, "destroyMecha.DestroyMechaForge")
} (destroyMecha || (destroyMecha = {}));
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
destroyMecha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.DestroyMechaIntensifySkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210806版本系统功能", "毁灭机甲关卡", "进入毁灭机甲能力提升面板"),
            this.initOldPveBtnClose(47, this, "destroy_mecha_intensify_title_png",
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModule("destroyMecha", ["destroy_mecha"], null, "DestroyMecha", AppDoStyle.NULL)
            },
            this),
            this.grpBack.btnHelp.x = 350,
            this.addEvent(),
            this.refresh()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.refresh, this)
        },
        i.prototype.reShow = function() {
            this.refresh()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                BuyProductManager.buyProductBySocket(250650,
                function() {
                    SocketConnection.sendByQueue(42341, [14, 1],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddChip,
            function() {
                BuyProductManager.buyProduct("250636_10257",
                function() {
                    t.refresh()
                },
                t, 1713399)
            },
            this),
            ImageButtonUtil.add(this.btnAddTime,
            function() {
                BuyProductManager.buyProduct("250649_10259",
                function() {
                    t.refresh()
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnSuperGet1,
            function() {
                BuyProductManager.buyProductBySocket(250646,
                function() {
                    SocketConnection.sendByQueue(42341, [8, 1],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnSuperGet2,
            function() {
                BuyProductManager.buyProductBySocket(250647,
                function() {
                    SocketConnection.sendByQueue(42341, [8, 2],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnSuperGet3,
            function() {
                BuyProductManager.buyProductBySocket(250648,
                function() {
                    SocketConnection.sendByQueue(42341, [8, 3],
                    function() {
                        t.refresh()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModule("destroyMecha", ["destroy_mecha"], null, "DestroyMecha", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                var t = config.Help_tips.getItem(47),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnFreeGet1,
            function() {
                PetManager.isDefaultPet(3390) ? t.sumTimes < 4 ? BubblerManager.getInstance().showText("你的累计战胜次数不足。") : SocketConnection.sendByQueue(42341, [9, 1], t.refresh.bind(t)) : BubblerManager.getInstance().showText("请先将毁灭机甲放入背包首发！")
            },
            this),
            ImageButtonUtil.add(this.btnFreeGet2,
            function() {
                PetManager.isDefaultPet(3390) ? t.sumTimes < 12 ? BubblerManager.getInstance().showText("你的累计战胜次数不足。") : SocketConnection.sendByQueue(42341, [9, 2], t.refresh.bind(t)) : BubblerManager.getInstance().showText("请先将毁灭机甲放入背包首发！")
            },
            this),
            ImageButtonUtil.add(this.btnFreeGet3,
            function() {
                PetManager.isDefaultPet(3390) ? t.sumTimes < 8 ? BubblerManager.getInstance().showText("你的累计战胜次数不足。") : SocketConnection.sendByQueue(42341, [9, 3], t.refresh.bind(t)) : BubblerManager.getInstance().showText("请先将毁灭机甲放入背包首发！")
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
            ImageButtonUtil.add(this.btnBeat,
            function() {
                t.challengeTimes < 1 ? BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : FightManager.fightNoMapBoss("", 9906 + t.numFire)
            },
            this),
            ImageButtonUtil.add(this.btnReduceAnger,
            function() {
                t.numChips >= 20 ? SocketConnection.sendByQueue(42341, [14, 2], t.refresh.bind(t)) : BubblerManager.getInstance().showText("机甲碎片不足。")
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var t = {};
                t.ins = 40963,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var t = {};
                t.id = 30861,
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3390, "", AppDoStyle.NULL)
            },
            this)
        },
        i.prototype.refresh = function() {
            var t = this;
            this.numChips = ItemManager.getNumByID(1713399),
            this.txtChips.text = this.numChips.toString(),
            KTool.getMultiValue([101222, 101221, 18263, 18262],
            function(e) {
                t.sumTimes = e[0],
                t.challengeTimes = 4 - e[2];
                var i = 1 == KTool.getBit(e[1], 2),
                n = 1 == KTool.getBit(e[1], 3),
                o = 1 == KTool.getBit(e[1], 4);
                t.numFire = e[3],
                t.txtSumTime.text = t.sumTimes.toString(),
                t.txtTimes.text = t.challengeTimes.toString(),
                DisplayUtil.setEnabled(t.btnFreeGet1, !i, i),
                DisplayUtil.setEnabled(t.btnFreeGet2, !n, n),
                DisplayUtil.setEnabled(t.btnFreeGet3, !o, o),
                DisplayUtil.setEnabled(t.btnSuperGet1, !i, i),
                DisplayUtil.setEnabled(t.btnSuperGet2, !n, n),
                DisplayUtil.setEnabled(t.btnSuperGet3, !o, o),
                t.imgHasKe1.visible = i,
                t.imgHasWu1.visible = o,
                t.imgHasTe1.visible = n,
                t.fire1.visible = t.numFire >= 1,
                t.fire2.visible = t.numFire >= 2,
                t.fire3.visible = t.numFire >= 3,
                DisplayUtil.setEnabled(t.btnReduceAnger, 0 != t.numFire, 0 == t.numFire),
                DisplayUtil.setEnabled(t.btnAddTime, 0 == t.challengeTimes, 0 != t.challengeTimes)
            })
        },
        i
    } (BaseModule);
    t.DestroyMechaIntensify = e,
    __reflect(e.prototype, "destroyMecha.DestroyMechaIntensify")
} (destroyMecha || (destroyMecha = {}));
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
destroyMecha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.DestroyMechaSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                ModuleManager.hideModule(t)
            },
            this),
            this.addEvent()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(t)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3390)
            },
            this),
            ImageButtonUtil.add(this.btnGo0,
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModule("destroyMecha", ["destroy_mecha"], null, "DestroyMechaMain", AppDoStyle.NULL)
            },
            this)
        },
        i
    } (BaseModule);
    t.DestroyMechaMain = e,
    __reflect(e.prototype, "destroyMecha.DestroyMechaMain")
} (destroyMecha || (destroyMecha = {})),
window.destroyMecha = window.destroyMecha || {};
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
generateEUI.paths["resource/eui_skins/DestroyMechaForgeSkin.exml"] = window.destroyMecha.DestroyMechaForgeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "rightbg", "BGJinDu", "btnAddJinDu", "txtJinDu", "jinDuArm", "btnFastArm", "listbg0", "listbg_0", "listbg_1", "txtGoal1", "txtGoal2", "txtGoal3", "goal", "btnRoll", "btnGoToChallenge", "btnReRoll", "Right", "mask2", "leftbg", "outRightFoot2", "jinDuRightFoot", "outRightFoot1", "txtRightFoot", "txtFastForgeRightFoot", "rightFoot", "outRightWing2", "jinDuRightWing", "outRightWing1", "txtRightWing", "txtFastForgeRightWing", "rightWing", "outLeftFoot2", "jinDuLeftFoot", "outLeftFoot1", "txtLeftFoot", "txtFastForgeLeftFoot", "leftFoot", "outLeftWing2", "jinDuLeftWing", "outLeftWing1", "txtLeftWing", "txtFastForgeLeftWing", "leftwing", "outHeart2", "jinDuHeart", "outHeart1", "txtHeart", "txtFastForgeHeart", "heart", "btnFastBeat", "btnBeat", "btnFastForge", "Left", "mask1", "numbg", "btnAddChip", "jjsp", "txtChips", "jjsp_2", "Suipian", "btnPet", "btnCure", "up_bg", "btnHelp", "btnClose", "title", "top"],
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
            t.height = 26,
            t.source = "destroy_mecha_forge_imgJinDu_png",
            t.width = 387.451,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
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
            t.height = 129,
            t.horizontalCenter = 0,
            t.source = "destroy_mecha_forge_inRightWing_png",
            t.verticalCenter = 0,
            t.width = 128,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
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
            t.height = 129,
            t.horizontalCenter = 0,
            t.source = "destroy_mecha_forge_inRightWing_png",
            t.verticalCenter = 0,
            t.width = 128,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
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
            t.height = 129,
            t.horizontalCenter = 0,
            t.source = "destroy_mecha_forge_inRightWing_png",
            t.verticalCenter = 0,
            t.width = 128,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
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
            t.height = 129,
            t.horizontalCenter = 0,
            t.source = "destroy_mecha_forge_inRightWing_png",
            t.verticalCenter = 0,
            t.width = 128,
            t
        },
        e
    } (eui.Skin),
    u = function(t) {
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
            t.height = 129,
            t.horizontalCenter = 0,
            t.source = "destroy_mecha_forge_inRightWing_png",
            t.verticalCenter = 0,
            t.width = 128,
            t
        },
        e
    } (eui.Skin),
    a = e.prototype;
    return a.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "destroy_mecha_bg_jpg",
        t.top = 0,
        t
    },
    a._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 12,
        t.elementsContent = [this.Right_i(), this.mask2_i(), this.Left_i(), this.mask1_i(), this.Suipian_i(), this.btnPet_i(), this.btnCure_i()],
        t
    },
    a.Right_i = function() {
        var t = new eui.Group;
        return this.Right = t,
        t.x = 509,
        t.y = 4,
        t.elementsContent = [this.rightbg_i(), this.BGJinDu_i(), this.btnAddJinDu_i(), this.txtJinDu_i(), this.jinDuArm_i(), this.btnFastArm_i(), this.goal_i(), this.btnRoll_i(), this.btnGoToChallenge_i(), this.btnReRoll_i()],
        t
    },
    a.rightbg_i = function() {
        var t = new eui.Image;
        return this.rightbg = t,
        t.source = "destroy_mecha_forge_rightbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.BGJinDu_i = function() {
        var t = new eui.Image;
        return this.BGJinDu = t,
        t.source = "destroy_mecha_forge_BGJinDu_png",
        t.x = 102,
        t.y = 222,
        t
    },
    a.btnAddJinDu_i = function() {
        var t = new eui.Image;
        return this.btnAddJinDu = t,
        t.source = "destroy_mecha_main_btnAdd_png",
        t.x = 520,
        t.y = 245,
        t
    },
    a.txtJinDu_i = function() {
        var t = new eui.Label;
        return this.txtJinDu = t,
        t.size = 18,
        t.text = "100/100",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.width = 69.625,
        t.x = 452.535,
        t.y = 289,
        t
    },
    a.jinDuArm_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDuArm = t,
        t.height = 26,
        t.width = 387.451,
        t.x = 123,
        t.y = 250,
        t.skinName = i,
        t
    },
    a.btnFastArm_i = function() {
        var t = new eui.Image;
        return this.btnFastArm = t,
        t.source = "destroy_mecha_forge_btnFastArm_png",
        t.x = 468,
        t.y = 86,
        t
    },
    a.goal_i = function() {
        var t = new eui.Group;
        return this.goal = t,
        t.x = 121,
        t.y = 367,
        t.elementsContent = [this.listbg0_i(), this.listbg_0_i(), this.listbg_1_i(), this.txtGoal1_i(), this.txtGoal2_i(), this.txtGoal3_i()],
        t
    },
    a.listbg0_i = function() {
        var t = new eui.Image;
        return this.listbg0 = t,
        t.source = "destroy_mecha_forge_groupgobal_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.listbg_0_i = function() {
        var t = new eui.Image;
        return this.listbg_0 = t,
        t.source = "destroy_mecha_forge_groupgobal_png",
        t.x = 0,
        t.y = 46,
        t
    },
    a.listbg_1_i = function() {
        var t = new eui.Image;
        return this.listbg_1 = t,
        t.source = "destroy_mecha_forge_groupgobal_png",
        t.x = 0,
        t.y = 92,
        t
    },
    a.txtGoal1_i = function() {
        var t = new eui.Label;
        return this.txtGoal1 = t,
        t.horizontalCenter = -1.5,
        t.size = 20,
        t.text = "15回合内击败马尔修斯",
        t.textColor = 9482239,
        t.y = 8,
        t
    },
    a.txtGoal2_i = function() {
        var t = new eui.Label;
        return this.txtGoal2 = t,
        t.horizontalCenter = -5,
        t.size = 20,
        t.text = "使用物理攻击击败马尔修斯",
        t.textColor = 9482239,
        t.y = 54,
        t
    },
    a.txtGoal3_i = function() {
        var t = new eui.Label;
        return this.txtGoal3 = t,
        t.horizontalCenter = -2,
        t.size = 20,
        t.text = "单回合最高伤害大于500",
        t.textColor = 9482239,
        t.y = 100,
        t
    },
    a.btnRoll_i = function() {
        var t = new eui.Image;
        return this.btnRoll = t,
        t.source = "destroy_mecha_forge_btnRoll_png",
        t.visible = !1,
        t.x = 245,
        t.y = 516,
        t
    },
    a.btnGoToChallenge_i = function() {
        var t = new eui.Image;
        return this.btnGoToChallenge = t,
        t.source = "destroy_mecha_forge_btnFight_png",
        t.visible = !1,
        t.x = 111.966,
        t.y = 515.514,
        t
    },
    a.btnReRoll_i = function() {
        var t = new eui.Image;
        return this.btnReRoll = t,
        t.source = "destroy_mecha_forge_btnReroll_png",
        t.visible = !1,
        t.x = 371.356,
        t.y = 514.973,
        t
    },
    a.mask2_i = function() {
        var t = new eui.Image;
        return this.mask2 = t,
        t.source = "destroy_mecha_forge_mask2_png",
        t.visible = !1,
        t.x = 555,
        t.y = 51,
        t
    },
    a.Left_i = function() {
        var t = new eui.Group;
        return this.Left = t,
        t.x = 0,
        t.y = 4,
        t.elementsContent = [this.leftbg_i(), this.rightFoot_i(), this.rightWing_i(), this.leftFoot_i(), this.leftwing_i(), this.heart_i(), this.btnFastBeat_i(), this.btnBeat_i(), this.btnFastForge_i()],
        t
    },
    a.leftbg_i = function() {
        var t = new eui.Image;
        return this.leftbg = t,
        t.source = "destroy_mecha_forge_leftbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.rightFoot_i = function() {
        var t = new eui.Group;
        return this.rightFoot = t,
        t.x = 333,
        t.y = 340,
        t.elementsContent = [this.outRightFoot2_i(), this.jinDuRightFoot_i(), this.outRightFoot1_i(), this.txtRightFoot_i(), this.txtFastForgeRightFoot_i()],
        t
    },
    a.outRightFoot2_i = function() {
        var t = new eui.Image;
        return this.outRightFoot2 = t,
        t.source = "destroy_mecha_forge_outRightFoot2_png",
        t.visible = !0,
        t.x = -.661,
        t.y = 2.671,
        t
    },
    a.jinDuRightFoot_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDuRightFoot = t,
        t.direction = "btt",
        t.width = 128,
        t.x = 29.213,
        t.y = 31.904,
        t.skinName = n,
        t
    },
    a.outRightFoot1_i = function() {
        var t = new eui.Image;
        return this.outRightFoot1 = t,
        t.source = "destroy_mecha_forge_outRightFoot1_png",
        t.visible = !0,
        t
    },
    a.txtRightFoot_i = function() {
        var t = new eui.Label;
        return this.txtRightFoot = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "100%",
        t.textColor = 16773461,
        t.x = 39,
        t.y = 47,
        t
    },
    a.txtFastForgeRightFoot_i = function() {
        var t = new eui.Image;
        return this.txtFastForgeRightFoot = t,
        t.source = "txtFastForge_png",
        t.visible = !1,
        t.x = 46.817,
        t.y = 130.678,
        t
    },
    a.rightWing_i = function() {
        var t = new eui.Group;
        return this.rightWing = t,
        t.x = 333,
        t.y = 162,
        t.elementsContent = [this.outRightWing2_i(), this.jinDuRightWing_i(), this.outRightWing1_i(), this.txtRightWing_i(), this.txtFastForgeRightWing_i()],
        t
    },
    a.outRightWing2_i = function() {
        var t = new eui.Image;
        return this.outRightWing2 = t,
        t.source = "destroy_mecha_forge_outRightFoot2_png",
        t.visible = !0,
        t.x = -.661,
        t.y = 2.671,
        t
    },
    a.jinDuRightWing_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDuRightWing = t,
        t.direction = "btt",
        t.visible = !0,
        t.width = 128,
        t.x = 29.213,
        t.y = 31.873,
        t.skinName = o,
        t
    },
    a.outRightWing1_i = function() {
        var t = new eui.Image;
        return this.outRightWing1 = t,
        t.source = "destroy_mecha_forge_outRightWing1_png",
        t
    },
    a.txtRightWing_i = function() {
        var t = new eui.Label;
        return this.txtRightWing = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "100%",
        t.textColor = 16773461,
        t.x = 39,
        t.y = 47,
        t
    },
    a.txtFastForgeRightWing_i = function() {
        var t = new eui.Image;
        return this.txtFastForgeRightWing = t,
        t.source = "txtFastForge_png",
        t.visible = !1,
        t.x = 46.817,
        t.y = 129.465,
        t
    },
    a.leftFoot_i = function() {
        var t = new eui.Group;
        return this.leftFoot = t,
        t.x = 53,
        t.y = 340,
        t.elementsContent = [this.outLeftFoot2_i(), this.jinDuLeftFoot_i(), this.outLeftFoot1_i(), this.txtLeftFoot_i(), this.txtFastForgeLeftFoot_i()],
        t
    },
    a.outLeftFoot2_i = function() {
        var t = new eui.Image;
        return this.outLeftFoot2 = t,
        t.source = "destroy_mecha_forge_outRightFoot2_png",
        t.visible = !0,
        t.x = -.661,
        t.y = 2.671,
        t
    },
    a.jinDuLeftFoot_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDuLeftFoot = t,
        t.direction = "btt",
        t.width = 128,
        t.x = 29.213,
        t.y = 32.141,
        t.skinName = r,
        t
    },
    a.outLeftFoot1_i = function() {
        var t = new eui.Image;
        return this.outLeftFoot1 = t,
        t.source = "destroy_mecha_forge_outLeftFoot1_png",
        t.visible = !0,
        t.x = 21,
        t.y = 16,
        t
    },
    a.txtLeftFoot_i = function() {
        var t = new eui.Label;
        return this.txtLeftFoot = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "100%",
        t.textColor = 16773461,
        t.x = 38,
        t.y = 47,
        t
    },
    a.txtFastForgeLeftFoot_i = function() {
        var t = new eui.Image;
        return this.txtFastForgeLeftFoot = t,
        t.source = "txtFastForge_png",
        t.visible = !1,
        t.x = 46.817,
        t.y = 130.01,
        t
    },
    a.leftwing_i = function() {
        var t = new eui.Group;
        return this.leftwing = t,
        t.x = 53,
        t.y = 162,
        t.elementsContent = [this.outLeftWing2_i(), this.jinDuLeftWing_i(), this.outLeftWing1_i(), this.txtLeftWing_i(), this.txtFastForgeLeftWing_i()],
        t
    },
    a.outLeftWing2_i = function() {
        var t = new eui.Image;
        return this.outLeftWing2 = t,
        t.source = "destroy_mecha_forge_outRightFoot2_png",
        t.visible = !0,
        t.x = -.661,
        t.y = 2.671,
        t
    },
    a.jinDuLeftWing_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDuLeftWing = t,
        t.direction = "btt",
        t.width = 128,
        t.x = 29.213,
        t.y = 31.873,
        t.skinName = s,
        t
    },
    a.outLeftWing1_i = function() {
        var t = new eui.Image;
        return this.outLeftWing1 = t,
        t.source = "destroy_mecha_forge_outLeftWing1_png",
        t
    },
    a.txtLeftWing_i = function() {
        var t = new eui.Label;
        return this.txtLeftWing = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "100%",
        t.textColor = 16773461,
        t.x = 39,
        t.y = 47,
        t
    },
    a.txtFastForgeLeftWing_i = function() {
        var t = new eui.Image;
        return this.txtFastForgeLeftWing = t,
        t.source = "txtFastForge_png",
        t.visible = !1,
        t.x = 46.817,
        t.y = 129.522,
        t
    },
    a.heart_i = function() {
        var t = new eui.Group;
        return this.heart = t,
        t.x = 196,
        t.y = 233,
        t.elementsContent = [this.outHeart2_i(), this.jinDuHeart_i(), this.outHeart1_i(), this.txtHeart_i(), this.txtFastForgeHeart_i()],
        t
    },
    a.outHeart2_i = function() {
        var t = new eui.Image;
        return this.outHeart2 = t,
        t.source = "destroy_mecha_forge_outRightFoot2_png",
        t.visible = !0,
        t.x = -.661,
        t.y = 2.671,
        t
    },
    a.jinDuHeart_i = function() {
        var t = new eui.ProgressBar;
        return this.jinDuHeart = t,
        t.direction = "btt",
        t.horizontalCenter = 2,
        t.scaleX = 1.13,
        t.scaleY = 1.13,
        t.verticalCenter = 3,
        t.skinName = u,
        t
    },
    a.outHeart1_i = function() {
        var t = new eui.Image;
        return this.outHeart1 = t,
        t.source = "destroy_mecha_forge_outHeart1_png",
        t.visible = !0,
        t.x = 21,
        t.y = 3,
        t
    },
    a.txtHeart_i = function() {
        var t = new eui.Label;
        return this.txtHeart = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "100%",
        t.textColor = 16773461,
        t.x = 39,
        t.y = 34,
        t
    },
    a.txtFastForgeHeart_i = function() {
        var t = new eui.Image;
        return this.txtFastForgeHeart = t,
        t.source = "txtFastForge_png",
        t.visible = !1,
        t.x = 46.817,
        t.y = 132.106,
        t
    },
    a.btnFastBeat_i = function() {
        var t = new eui.Image;
        return this.btnFastBeat = t,
        t.source = "destroy_mecha_forge_btnFastBeat_png",
        t.x = 292,
        t.y = 514,
        t
    },
    a.btnBeat_i = function() {
        var t = new eui.Image;
        return this.btnBeat = t,
        t.source = "destroy_mecha_forge_btnBeat_png",
        t.x = 93,
        t.y = 517,
        t
    },
    a.btnFastForge_i = function() {
        var t = new eui.Image;
        return this.btnFastForge = t,
        t.source = "destroy_mecha_forge_btnFastForge_png",
        t.x = 44,
        t.y = 85,
        t
    },
    a.mask1_i = function() {
        var t = new eui.Image;
        return this.mask1 = t,
        t.source = "destroy_mecha_forge_mask1_png",
        t.visible = !1,
        t.x = 27,
        t.y = 51,
        t
    },
    a.Suipian_i = function() {
        var t = new eui.Group;
        return this.Suipian = t,
        t.x = 859,
        t.y = 0,
        t.elementsContent = [this.numbg_i(), this.btnAddChip_i(), this.jjsp_i(), this.txtChips_i(), this.jjsp_2_i()],
        t
    },
    a.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "destroy_mecha_forge_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    a.btnAddChip_i = function() {
        var t = new eui.Image;
        return this.btnAddChip = t,
        t.source = "destroy_mecha_main_btnAdd_png",
        t.x = 200,
        t.y = 0,
        t
    },
    a.jjsp_i = function() {
        var t = new eui.Label;
        return this.jjsp = t,
        t.size = 18,
        t.text = "机甲碎片：",
        t.textColor = 16777215,
        t.x = 51,
        t.y = 9,
        t
    },
    a.txtChips_i = function() {
        var t = new eui.Label;
        return this.txtChips = t,
        t.size = 18,
        t.text = "0000",
        t.textColor = 16777215,
        t.x = 137,
        t.y = 10,
        t
    },
    a.jjsp_2_i = function() {
        var t = new eui.Image;
        return this.jjsp_2 = t,
        t.source = "destroy_mecha_forge_jjsp_png",
        t.x = 20,
        t.y = 1,
        t
    },
    a.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "destroy_mecha_main_btnPet_png",
        t.x = 535,
        t.y = 243,
        t
    },
    a.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "destroy_mecha_main_btnCure_png",
        t.x = 535,
        t.y = 318,
        t
    },
    a.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnHelp_i(), this.btnClose_i(), this.title_i()],
        t
    },
    a.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "destroy_mecha_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "destroy_mecha_main_btnHelp_png",
        t.x = 300,
        t.y = 7,
        t
    },
    a.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "destroy_mecha_forge_title_png",
        t.x = 111,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DestroyMechaIntensifySkin.exml"] = window.destroyMecha.DestroyMechaIntensifySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "numbg", "btnAddChip", "jjsp", "txtChips", "jjsp_2", "Suipian", "numbg_2", "btnAddTime", "jrsytzcs", "txtTimes", "Cishu", "btnPet", "btnCure", "wupinbg", "zsky", "btnKe", "btnFreeGet1", "btnSuperGet1", "wupinbg_2", "diwujineng", "btnWu", "btnFreeGet3", "btnSuperGet3", "wupinbg_3", "zstx", "btnFreeGet2", "btnSuperGet2", "countbg", "ljzscs", "txtSumTime", "nuqibg", "firebg", "firebg_2", "firebg_3", "btnTe", "fire1", "fire2", "fire3", "dqnqz", "btnBeat", "btnFastBeat", "btnReduceAnger", "imgHasKe1", "imgHasWu1", "imgHasTe1", "up_bg", "btnClose", "btnHelp", "title", "top"],
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
        return t.horizontalCenter = 5.5,
        t.y = 12,
        t.elementsContent = [this.pet_i(), this.Suipian_i(), this.Cishu_i(), this.btnPet_i(), this.btnCure_i(), this.wupinbg_i(), this.zsky_i(), this.btnKe_i(), this.btnFreeGet1_i(), this.btnSuperGet1_i(), this.wupinbg_2_i(), this.diwujineng_i(), this.btnWu_i(), this.btnFreeGet3_i(), this.btnSuperGet3_i(), this.wupinbg_3_i(), this.zstx_i(), this.btnFreeGet2_i(), this.btnSuperGet2_i(), this.countbg_i(), this.ljzscs_i(), this.txtSumTime_i(), this.nuqibg_i(), this.firebg_i(), this.firebg_2_i(), this.firebg_3_i(), this.btnTe_i(), this.fire1_i(), this.fire2_i(), this.fire3_i(), this.dqnqz_i(), this.btnBeat_i(), this.btnFastBeat_i(), this.btnReduceAnger_i(), this.imgHasKe1_i(), this.imgHasWu1_i(), this.imgHasTe1_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "destroy_mecha_intensify_pet_png",
        t.x = 0,
        t.y = 19,
        t
    },
    i.Suipian_i = function() {
        var t = new eui.Group;
        return this.Suipian = t,
        t.x = 859,
        t.y = 0,
        t.elementsContent = [this.numbg_i(), this.btnAddChip_i(), this.jjsp_i(), this.txtChips_i(), this.jjsp_2_i()],
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "destroy_mecha_intensify_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.btnAddChip_i = function() {
        var t = new eui.Image;
        return this.btnAddChip = t,
        t.source = "destroy_mecha_main_btnAdd_png",
        t.x = 200,
        t.y = 0,
        t
    },
    i.jjsp_i = function() {
        var t = new eui.Label;
        return this.jjsp = t,
        t.size = 18,
        t.text = "机甲碎片：",
        t.textColor = 16777215,
        t.x = 51,
        t.y = 9,
        t
    },
    i.txtChips_i = function() {
        var t = new eui.Label;
        return this.txtChips = t,
        t.size = 18,
        t.text = "0000",
        t.textColor = 16777215,
        t.x = 137,
        t.y = 10,
        t
    },
    i.jjsp_2_i = function() {
        var t = new eui.Image;
        return this.jjsp_2 = t,
        t.source = "destroy_mecha_intensify_jjsp_png",
        t.x = 20,
        t.y = 1,
        t
    },
    i.Cishu_i = function() {
        var t = new eui.Group;
        return this.Cishu = t,
        t.x = 196,
        t.y = 552,
        t.elementsContent = [this.numbg_2_i(), this.btnAddTime_i(), this.jrsytzcs_i(), this.txtTimes_i()],
        t
    },
    i.numbg_2_i = function() {
        var t = new eui.Image;
        return this.numbg_2 = t,
        t.source = "destroy_mecha_intensify_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.btnAddTime_i = function() {
        var t = new eui.Image;
        return this.btnAddTime = t,
        t.source = "destroy_mecha_main_btnAdd_png",
        t.x = 246,
        t.y = 0,
        t
    },
    i.jrsytzcs_i = function() {
        var t = new eui.Label;
        return this.jrsytzcs = t,
        t.size = 18,
        t.text = "今日剩余挑战次数：",
        t.textColor = 16777215,
        t.x = 40,
        t.y = 9,
        t
    },
    i.txtTimes_i = function() {
        var t = new eui.Label;
        return this.txtTimes = t,
        t.size = 18,
        t.text = "22",
        t.textColor = 16777215,
        t.x = 199,
        t.y = 11,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "destroy_mecha_main_btnPet_png",
        t.x = 22,
        t.y = 243,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "destroy_mecha_main_btnCure_png",
        t.x = 22,
        t.y = 318,
        t
    },
    i.wupinbg_i = function() {
        var t = new eui.Image;
        return this.wupinbg = t,
        t.source = "destroy_mecha_intensify_wupinbg_png",
        t.x = 696,
        t.y = 69,
        t
    },
    i.zsky_i = function() {
        var t = new eui.Label;
        return this.zsky = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "专属刻印",
        t.textColor = 16777215,
        t.x = 739,
        t.y = 56,
        t
    },
    i.btnKe_i = function() {
        var t = new eui.Image;
        return this.btnKe = t,
        t.source = "destroy_mecha_intensify_keyin_png",
        t.x = 758,
        t.y = 114,
        t
    },
    i.btnFreeGet1_i = function() {
        var t = new eui.Image;
        return this.btnFreeGet1 = t,
        t.source = "destroy_mecha_intensify_btnFreeGet1_png",
        t.x = 916,
        t.y = 153,
        t
    },
    i.btnSuperGet1_i = function() {
        var t = new eui.Image;
        return this.btnSuperGet1 = t,
        t.source = "destroy_mecha_intensify_btnSuperGet1_png",
        t.x = 917,
        t.y = 101,
        t
    },
    i.wupinbg_2_i = function() {
        var t = new eui.Image;
        return this.wupinbg_2 = t,
        t.source = "destroy_mecha_intensify_wupinbg_png",
        t.x = 696,
        t.y = 228,
        t
    },
    i.diwujineng_i = function() {
        var t = new eui.Label;
        return this.diwujineng = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "第五技能",
        t.textColor = 16777215,
        t.x = 739,
        t.y = 215,
        t
    },
    i.btnWu_i = function() {
        var t = new eui.Image;
        return this.btnWu = t,
        t.source = "destroy_mecha_intensify_icon_1_png",
        t.x = 771,
        t.y = 286,
        t
    },
    i.btnFreeGet3_i = function() {
        var t = new eui.Image;
        return this.btnFreeGet3 = t,
        t.source = "destroy_mecha_intensify_btnFreeGet1_png",
        t.x = 916,
        t.y = 312,
        t
    },
    i.btnSuperGet3_i = function() {
        var t = new eui.Image;
        return this.btnSuperGet3 = t,
        t.source = "destroy_mecha_intensify_btnSuperGet1_png",
        t.x = 917,
        t.y = 260,
        t
    },
    i.wupinbg_3_i = function() {
        var t = new eui.Image;
        return this.wupinbg_3 = t,
        t.source = "destroy_mecha_intensify_wupinbg_png",
        t.x = 696,
        t.y = 386,
        t
    },
    i.zstx_i = function() {
        var t = new eui.Label;
        return this.zstx = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "专属特性",
        t.textColor = 16777215,
        t.x = 739,
        t.y = 373,
        t
    },
    i.btnFreeGet2_i = function() {
        var t = new eui.Image;
        return this.btnFreeGet2 = t,
        t.source = "destroy_mecha_intensify_btnFreeGet1_png",
        t.x = 916,
        t.y = 470,
        t
    },
    i.btnSuperGet2_i = function() {
        var t = new eui.Image;
        return this.btnSuperGet2 = t,
        t.source = "destroy_mecha_intensify_btnSuperGet1_png",
        t.x = 917,
        t.y = 418,
        t
    },
    i.countbg_i = function() {
        var t = new eui.Image;
        return this.countbg = t,
        t.source = "destroy_mecha_intensify_countbg_png",
        t.x = 695,
        t.y = 540,
        t
    },
    i.ljzscs_i = function() {
        var t = new eui.Label;
        return this.ljzscs = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "累计战胜次数：",
        t.textColor = 11184127,
        t.x = 768,
        t.y = 558,
        t
    },
    i.txtSumTime_i = function() {
        var t = new eui.Label;
        return this.txtSumTime = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "000",
        t.textColor = 11184127,
        t.x = 964,
        t.y = 562,
        t
    },
    i.nuqibg_i = function() {
        var t = new eui.Image;
        return this.nuqibg = t,
        t.source = "destroy_mecha_intensify_nuqibg_png",
        t.x = 0,
        t.y = 401,
        t
    },
    i.firebg_i = function() {
        var t = new eui.Image;
        return this.firebg = t,
        t.source = "destroy_mecha_intensify_firebg_png",
        t.x = 388,
        t.y = 419,
        t
    },
    i.firebg_2_i = function() {
        var t = new eui.Image;
        return this.firebg_2 = t,
        t.source = "destroy_mecha_intensify_firebg_png",
        t.x = 345,
        t.y = 419,
        t
    },
    i.firebg_3_i = function() {
        var t = new eui.Image;
        return this.firebg_3 = t,
        t.source = "destroy_mecha_intensify_firebg_png",
        t.x = 302,
        t.y = 419,
        t
    },
    i.btnTe_i = function() {
        var t = new eui.Image;
        return this.btnTe = t,
        t.source = "destroy_mecha_intensify_icon_texing_kb_png",
        t.x = 768,
        t.y = 438,
        t
    },
    i.fire1_i = function() {
        var t = new eui.Image;
        return this.fire1 = t,
        t.source = "destroy_mecha_intensify_fire1_png",
        t.visible = !1,
        t.x = 297,
        t.y = 414,
        t
    },
    i.fire2_i = function() {
        var t = new eui.Image;
        return this.fire2 = t,
        t.source = "destroy_mecha_intensify_fire1_png",
        t.visible = !1,
        t.x = 340,
        t.y = 414,
        t
    },
    i.fire3_i = function() {
        var t = new eui.Image;
        return this.fire3 = t,
        t.source = "destroy_mecha_intensify_fire1_png",
        t.visible = !1,
        t.x = 383,
        t.y = 414,
        t
    },
    i.dqnqz_i = function() {
        var t = new eui.Label;
        return this.dqnqz = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "当前怒气值：",
        t.textColor = 16777215,
        t.x = 133,
        t.y = 429,
        t
    },
    i.btnBeat_i = function() {
        var t = new eui.Image;
        return this.btnBeat = t,
        t.source = "destroy_mecha_forge_btnBeat_png",
        t.x = 142,
        t.y = 473,
        t
    },
    i.btnFastBeat_i = function() {
        var t = new eui.Image;
        return this.btnFastBeat = t,
        t.source = "destroy_mecha_forge_btnFastBeat_png",
        t.x = 342,
        t.y = 470,
        t
    },
    i.btnReduceAnger_i = function() {
        var t = new eui.Image;
        return this.btnReduceAnger = t,
        t.source = "destroy_mecha_intensify_btnReduceAnger_png",
        t.x = 449,
        t.y = 421,
        t
    },
    i.imgHasKe1_i = function() {
        var t = new eui.Image;
        return this.imgHasKe1 = t,
        t.source = "destroy_mecha_intensify_tagGot_png",
        t.x = 908.352,
        t.y = 101.648,
        t
    },
    i.imgHasWu1_i = function() {
        var t = new eui.Image;
        return this.imgHasWu1 = t,
        t.source = "destroy_mecha_intensify_tagGot_png",
        t.x = 908.352,
        t.y = 259.841,
        t
    },
    i.imgHasTe1_i = function() {
        var t = new eui.Image;
        return this.imgHasTe1 = t,
        t.source = "destroy_mecha_intensify_tagGot_png",
        t.x = 908.352,
        t.y = 418.226,
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
        t.source = "destroy_mecha_up_bg_png",
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
        t.source = "destroy_mecha_main_btnHelp_png",
        t.x = 361,
        t.y = 7,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "destroy_mecha_intensify_title_png",
        t.x = 112,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DestroyMechaMainSkin.exml"] = window.destroyMecha.DestroyMechaMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "taskbg", "btnStartBeat2", "btnContinueBeat2", "btnFastBeat2", "btnStartBeat1", "btnContinueBeat1", "btnFastBeat1", "imgContinueBeat1", "imgContinueBeat2", "txtContinueBeat1", "txtContinueBeat2", "task", "numbg", "btnAddTime", "jrsytzcs", "txtTimes", "Count", "Right", "btnInfo", "btnPet", "btnCure", "btnSuperGet", "btnForge", "btnGet", "numbg_2", "jjsp", "txtChips", "jjsp_2", "btnAddChip", "Suipian", "btnIntensify", "up_bg", "title", "btnClose", "btnHelp", "top"],
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
        return t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 12,
        t.elementsContent = [this.pet_i(), this.Right_i(), this.btnInfo_i(), this.btnPet_i(), this.btnCure_i(), this.btnSuperGet_i(), this.btnForge_i(), this.btnGet_i(), this.Suipian_i(), this.btnIntensify_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "destroy_mecha_intensify_pet_png",
        t.x = 0,
        t.y = 19,
        t
    },
    i.Right_i = function() {
        var t = new eui.Group;
        return this.Right = t,
        t.x = 556,
        t.y = 4,
        t.elementsContent = [this.task_i(), this.Count_i()],
        t
    },
    i.task_i = function() {
        var t = new eui.Group;
        return this.task = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.taskbg_i(), this.btnStartBeat2_i(), this.btnContinueBeat2_i(), this.btnFastBeat2_i(), this.btnStartBeat1_i(), this.btnContinueBeat1_i(), this.btnFastBeat1_i(), this.imgContinueBeat1_i(), this.imgContinueBeat2_i(), this.txtContinueBeat1_i(), this.txtContinueBeat2_i()],
        t
    },
    i.taskbg_i = function() {
        var t = new eui.Image;
        return this.taskbg = t,
        t.source = "destroy_mecha_main_mainbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnStartBeat2_i = function() {
        var t = new eui.Image;
        return this.btnStartBeat2 = t,
        t.source = "destroy_mecha_main_btnStartBeat_png",
        t.visible = !1,
        t.x = 314,
        t.y = 334,
        t
    },
    i.btnContinueBeat2_i = function() {
        var t = new eui.Image;
        return this.btnContinueBeat2 = t,
        t.source = "destroy_mecha_main_btnContinueBeat2_png",
        t.visible = !1,
        t.x = 345,
        t.y = 372,
        t
    },
    i.btnFastBeat2_i = function() {
        var t = new eui.Image;
        return this.btnFastBeat2 = t,
        t.source = "destroy_mecha_main_btnFastBeat_png",
        t.visible = !0,
        t.x = 452,
        t.y = 327,
        t
    },
    i.btnStartBeat1_i = function() {
        var t = new eui.Image;
        return this.btnStartBeat1 = t,
        t.source = "destroy_mecha_main_btnStartBeat_png",
        t.visible = !1,
        t.x = 314,
        t.y = 118,
        t
    },
    i.btnContinueBeat1_i = function() {
        var t = new eui.Image;
        return this.btnContinueBeat1 = t,
        t.source = "destroy_mecha_main_btnContinueBeat1_png",
        t.visible = !1,
        t.x = 335,
        t.y = 149,
        t
    },
    i.btnFastBeat1_i = function() {
        var t = new eui.Image;
        return this.btnFastBeat1 = t,
        t.source = "destroy_mecha_main_btnFastBeat_png",
        t.visible = !0,
        t.x = 452,
        t.y = 111,
        t
    },
    i.imgContinueBeat1_i = function() {
        var t = new eui.Image;
        return this.imgContinueBeat1 = t,
        t.source = "destroy_mecha_main_numbg__png",
        t.visible = !0,
        t.x = 420.973,
        t.y = 170.153,
        t
    },
    i.imgContinueBeat2_i = function() {
        var t = new eui.Image;
        return this.imgContinueBeat2 = t,
        t.source = "destroy_mecha_main_numbg2__png",
        t.visible = !0,
        t.x = 417.722,
        t.y = 382.853,
        t
    },
    i.txtContinueBeat1_i = function() {
        var t = new eui.Label;
        return this.txtContinueBeat1 = t,
        t.height = 17.839,
        t.size = 18,
        t.text = "0",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.width = 13.895,
        t.x = 427.98,
        t.y = 176.136,
        t
    },
    i.txtContinueBeat2_i = function() {
        var t = new eui.Label;
        return this.txtContinueBeat2 = t,
        t.height = 17.839,
        t.size = 18,
        t.text = "0",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.width = 13.895,
        t.x = 424.161,
        t.y = 389.822,
        t
    },
    i.Count_i = function() {
        var t = new eui.Group;
        return this.Count = t,
        t.x = 234,
        t.y = 539,
        t.elementsContent = [this.numbg_i(), this.btnAddTime_i(), this.jrsytzcs_i(), this.txtTimes_i()],
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "destroy_mecha_main_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.btnAddTime_i = function() {
        var t = new eui.Image;
        return this.btnAddTime = t,
        t.source = "destroy_mecha_main_btnAdd_png",
        t.x = 237,
        t.y = 0,
        t
    },
    i.jrsytzcs_i = function() {
        var t = new eui.Label;
        return this.jrsytzcs = t,
        t.size = 18,
        t.text = "今日剩余挑战次数：",
        t.textColor = 16777215,
        t.x = 17,
        t.y = 9,
        t
    },
    i.txtTimes_i = function() {
        var t = new eui.Label;
        return this.txtTimes = t,
        t.size = 18,
        t.text = "10/10",
        t.textColor = 16777215,
        t.x = 174,
        t.y = 10,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "destroy_mecha_main_btnInfo_png",
        t.x = 25,
        t.y = 519,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "destroy_mecha_main_btnPet_png",
        t.x = 638,
        t.y = 529,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "destroy_mecha_main_btnCure_png",
        t.x = 708,
        t.y = 529,
        t
    },
    i.btnSuperGet_i = function() {
        var t = new eui.Image;
        return this.btnSuperGet = t,
        t.source = "destroy_mecha_main_btnSuperGet_png",
        t.visible = !1,
        t.x = 142,
        t.y = 518,
        t
    },
    i.btnForge_i = function() {
        var t = new eui.Image;
        return this.btnForge = t,
        t.source = "destroy_mecha_main_btnForge_png",
        t.visible = !1,
        t.x = 342,
        t.y = 521,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "destroy_mecha_main_btnGet_png",
        t.visible = !1,
        t.x = 240,
        t.y = 518,
        t
    },
    i.Suipian_i = function() {
        var t = new eui.Group;
        return this.Suipian = t,
        t.x = 859,
        t.y = 0,
        t.elementsContent = [this.numbg_2_i(), this.jjsp_i(), this.txtChips_i(), this.jjsp_2_i(), this.btnAddChip_i()],
        t
    },
    i.numbg_2_i = function() {
        var t = new eui.Image;
        return this.numbg_2 = t,
        t.source = "destroy_mecha_main_numbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    i.jjsp_i = function() {
        var t = new eui.Label;
        return this.jjsp = t,
        t.size = 18,
        t.text = "机甲碎片：",
        t.textColor = 16777215,
        t.x = 51,
        t.y = 9,
        t
    },
    i.txtChips_i = function() {
        var t = new eui.Label;
        return this.txtChips = t,
        t.size = 18,
        t.text = "0000",
        t.textColor = 16777215,
        t.x = 137,
        t.y = 10,
        t
    },
    i.jjsp_2_i = function() {
        var t = new eui.Image;
        return this.jjsp_2 = t,
        t.source = "destroy_mecha_main_jjsp_png",
        t.x = 20,
        t.y = 1,
        t
    },
    i.btnAddChip_i = function() {
        var t = new eui.Image;
        return this.btnAddChip = t,
        t.source = "destroy_mecha_main_btnAdd_png",
        t.visible = !0,
        t.x = 200,
        t.y = 0,
        t
    },
    i.btnIntensify_i = function() {
        var t = new eui.Image;
        return this.btnIntensify = t,
        t.source = "destroy_mecha_main_btnIntensify_png",
        t.visible = !1,
        t.x = 240,
        t.y = 518,
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
        t.source = "destroy_mecha_up_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "destroy_mecha_main_title_png",
        t.x = 112,
        t.y = 7,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "destroy_mecha_main_btnHelp_png",
        t.x = 249,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DestroyMechaSkin.exml"] = window.destroyMecha.DestroyMechaSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgMain", "btnInfo", "buyshadow", "btnGo0", "jingqingqidai", "jingqingqidai_2", "up_bg", "btnClose", "top"],
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
        return t.horizontalCenter = -1,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this.imgMain_i(), this.btnInfo_i(), this.buyshadow_i(), this.btnGo0_i(), this.jingqingqidai_i(), this.jingqingqidai_2_i()],
        t
    },
    i.imgMain_i = function() {
        var t = new eui.Image;
        return this.imgMain = t,
        t.height = 640,
        t.source = "destroyMecha_destroy_mecha.png",
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "destroy_mecha_btnInfo_png",
        t.x = 373,
        t.y = 531,
        t
    },
    i.buyshadow_i = function() {
        var t = new eui.Image;
        return this.buyshadow = t,
        t.source = "destroy_mecha_buyshadow_png",
        t.x = 465,
        t.y = 595,
        t
    },
    i.btnGo0_i = function() {
        var t = new eui.Image;
        return this.btnGo0 = t,
        t.source = "destroy_mecha_btnBuy_png",
        t.x = 453,
        t.y = 527,
        t
    },
    i.jingqingqidai_i = function() {
        var t = new eui.Image;
        return this.jingqingqidai = t,
        t.source = "destroy_mecha_jingqingqidai_png",
        t.x = 942,
        t.y = 524,
        t
    },
    i.jingqingqidai_2_i = function() {
        var t = new eui.Image;
        return this.jingqingqidai_2 = t,
        t.source = "destroy_mecha_jingqingqidai_png",
        t.x = 58,
        t.y = 524,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "destroy_mecha_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin);