var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.itemID = [1719897, 1719898, 1719899, 1719900, 1719901, 1719902, 1719903, 1719904, 1719905],
            e.total = 0,
            e.skinName = t.MainPanelSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(81, this, "msss_main_panel_toptitle_png",
            function() {
                t.service.closeModule()
            },
            this),
            this.grpBack.title.y = 0,
            this.grpBack.btnHelp.x = 350,
            this.addEvents(),
            this.service.registerItems(this.itemID, this.itemsUpdate, this)
        },
        e.prototype.beforeAdd = function() {
            StatLogger.log("20211105版本系统功能", "月照星魂关卡", "进入月照星魂关卡面板")
        },
        e.prototype.itemsUpdate = function() {
            for (var t = 1; t <= this.itemID.length; t++) {
                var i = ItemManager.getNumByID(this.itemID[t - 1]);
                this["icon" + t].visible = i > 0,
                this["txt_n" + t].visible = i > 0,
                this["txt_n" + t].text = i.toString()
            }
        },
        e.prototype.backToMain = function() {
            this.total > 330 && (Alarm.show("恭喜你，最终挑战已经解锁！"), EventManager.removeEventListener("backToMain", this.backToMain, this))
        },
        e.prototype.addEvents = function() {
            var i = this;
            EventManager.addEventListener("backToMain", this.backToMain, this),
            EventManager.addEventListener("UpdateMainPanel",
            function() {
                i.updateValues()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3866)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                i.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnSuperGet,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(255892, 1,
                function() {
                    KTool.doExchange(12597, 1,
                    function() {
                        i.updateValues()
                    })
                },
                i) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                StatLogger.log("20211105版本系统功能", "月照星魂关卡", "点击领取月照星魂"),
                KTool.doExchange(12598, 1,
                function() {
                    i.updateValues()
                })
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(81)
            },
            this),
            ImageButtonUtil.add(this.btnfinal,
            function() {
                StatLogger.log("20211105版本系统功能", "月照星魂关卡", "进入最终挑战关卡"),
                i.service.openPanel(t.ModuleConst.FINAL_CHALLENGE)
            },
            this),
            ImageButtonUtil.add(this.btn_1,
            function() {
                StatLogger.log("20211105版本系统功能", "月照星魂关卡", "进入前往回忆关卡面板"),
                i.service.openPanel(t.ModuleConst.HUI_YI_SHEM_QIAN)
            },
            this),
            ImageButtonUtil.add(this.btn_2,
            function() {
                StatLogger.log("20211105版本系统功能", "月照星魂关卡", "进入聘用助手关卡面板"),
                i.service.openPanel(t.ModuleConst.PIN_YONG_ZHU_SHOU)
            },
            this),
            ImageButtonUtil.add(this.btn_3,
            function() {
                StatLogger.log("20211105版本系统功能", "月照星魂关卡", "进入拿回照片关卡面板"),
                i.service.openPanel(t.ModuleConst.NA_HUI_ZHAO_PIAN)
            },
            this),
            ImageButtonUtil.add(this.btn_4,
            function() {
                StatLogger.log("20211105版本系统功能", "月照星魂关卡", "进入制作回忆相册面板"),
                i.service.openPanel(t.ModuleConst.MAKE_HUI_YI_XIANGCE)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20211105版本系统功能", "月照星魂关卡", "进入能力提升面板"),
                i.service.openPanel(t.ModuleConst.UPGRADE_ABILITY_PANEL)
            },
            this)
        },
        e.prototype.update = function() {
            var i, e = this.service.getValue(t.AttrConst.forever_pet_state),
            n = this.service.getValue(t.AttrConst.forever_level_state),
            _ = this.service.getValue(t.AttrConst.forever_level1_turns),
            s = this.service.getValue(t.AttrConst.forever_level2_state),
            a = (this.service.getValue(t.AttrConst.forever_level3_photoNumber), this.service.getValue(t.AttrConst.forever_level4_score)),
            o = (2 - this.service.getValue(t.AttrConst.daily_level4_times), 0);
            this.total = 0,
            this.gouup.visible = _ > 0,
            this.xing1.visible = _ >= 1,
            this.xing2.visible = 5 >= _ && _ > 0,
            this.xing3.visible = 1 == _;
            for (var r = 1; 6 >= r; r++) {
                var u = 1 == KTool.getBit(s, r);
                this["img_" + r].visible = u
            }
            for (var r = 1; r <= this.itemID.length; r++) {
                var g = ItemManager.getNumByID(this.itemID[r - 1]);
                this["icon" + r].visible = g > 0,
                this["txt_n" + r].visible = g > 0,
                this["txt_n" + r].text = g.toString(),
                o += g
            }
            for (var h = [0, 0, 0], r = 0; 3 > r; r++) h[r] = a >> 8 * r & 255,
            this.total += h[r];
            i = _ > 0 && s > 0 && (63 & s) > 0 && o > 0 && this.total <= 330,
            DisplayUtil.setEnabled(this.btn_1, 0 == n, 0 != n),
            DisplayUtil.setEnabled(this.btn_2, 0 == n, 0 != n),
            DisplayUtil.setEnabled(this.btn_3, 0 == n, 0 != n),
            DisplayUtil.setEnabled(this.btn_4, i, !i),
            DisplayUtil.setEnabled(this.btnfinal, this.total >= 330 && 1 == n, this.total < 330 || 1 != n),
            this.txt_3.text = "" + this.total,
            this.txt_5.text = "1、" + h[0] + "         2、" + h[1] + "        3、" + h[2],
            this.Got.visible = 1 == KTool.getBit(e, 1),
            this.btnSuperGet.visible = 0 == n,
            this.btnGetPet.visible = 2 == n && 1 != KTool.getBit(e, 1),
            this.btnUp.visible = 1 == KTool.getBit(e, 1)
        },
        e.prototype.destroy = function() {
            i.prototype.destroy.call(this),
            EventManager.removeEventListener("backToMain", this.backToMain, this)
        },
        e
    } (BasicPanel);
    t.MainPanel = i,
    __reflect(i.prototype, "moonShiningStarSoul.MainPanel")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.service.setValues([t.AttrConst.forever_level1_turns, t.AttrConst.forever_level2_state, t.AttrConst.forever_level3_photoNumber, t.AttrConst.forever_level3_state, t.AttrConst.forever_level4_score, t.AttrConst.forever_level4_themeNumber, t.AttrConst.forever_level_state, t.AttrConst.forever_pet_state], [t.AttrConst.daily_level1_times, t.AttrConst.daily_level2_times, t.AttrConst.daily_level3_times, t.AttrConst.daily_level4_times, t.AttrConst.daily_level5_times, t.AttrConst.daily_upgrade_times], [t.AttrConst.bitbuf_level4_randomTheme], [], [], [], [t.AttrConst.playerinfo_level4_score]),
            e.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.HUI_YI_SHEM_QIAN
            },
            {
                panelName: t.ModuleConst.NA_HUI_ZHAO_PIAN
            },
            {
                panelName: t.ModuleConst.MAKE_HUI_YI_XIANGCE
            },
            {
                panelName: t.ModuleConst.FINAL_CHALLENGE
            },
            {
                panelName: t.ModuleConst.PIN_YONG_ZHU_SHOU
            },
            {
                panelName: t.ModuleConst.UPGRADE_ABILITY_PANEL
            }]),
            e
        }
        return __extends(e, i),
        e
    } (BasicMultPanelModule);
    t.MoonShiningStarSoul = i,
    __reflect(i.prototype, "moonShiningStarSoul.MoonShiningStarSoul")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
moonShiningStarSoul; !
function(t) {
    var i = function() {
        function t() {}
        return t.moonShiningStarSoul_CMD = 45752,
        t
    } ();
    t.CMDConst = i,
    __reflect(i.prototype, "moonShiningStarSoul.CMDConst")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
moonShiningStarSoul; !
function(t) {
    var i = function() {
        function t() {}
        return t.MAIN_PANEL = "moonShiningStarSoul.MainPanel",
        t.HUI_YI_SHEM_QIAN = "moonShiningStarSoul.HuiYiShenQian",
        t.PIN_YONG_ZHU_SHOU = "moonShiningStarSoul.PinYongZhuShou",
        t.NA_HUI_ZHAO_PIAN = "moonShiningStarSoul.NaHuiZhaoPian",
        t.MAKE_HUI_YI_XIANGCE = "moonShiningStarSoul.MakeHuiYiXiangCe",
        t.UPGRADE_ABILITY_PANEL = "moonShiningStarSoul.UpgradeAbility",
        t.FINAL_CHALLENGE = "moonShiningStarSoul.FinalChallenge",
        t
    } ();
    t.ModuleConst = i,
    __reflect(i.prototype, "moonShiningStarSoul.ModuleConst")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.bossID = 16123,
            e.skinName = t.FinalChallengeSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "msss_final_challenge_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.grpBack.title.y = 0,
            this.addEvents()
        },
        e.prototype.addEvents = function() {
            var i = this;
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(255901, 1,
                function() {
                    KTool.doExchange(12613, 1,
                    function() {
                        i.updateValues()
                    })
                },
                i) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(255902, 1,
                function() {
                    SocketConnection.sendWithPromise(45752, [23, 1]).then(function() {
                        Alarm.show("已完成最终关卡。",
                        function() {
                            i.service.backToMainPanel(),
                            EventManager.dispatchEventWith("UpdateMainPanel", !0)
                        })
                    })
                },
                i) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                i.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                if (!i.isclickFight) {
                    i.isclickFight = !0;
                    var e = 3 - i.service.getValue(t.AttrConst.daily_level5_times);
                    if (0 >= e) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                    FightManager.fightNoMapBoss("", i.bossID)
                }
            },
            this)
        },
        e.prototype.update = function() {
            var i = this;
            this.isclickFight = !1;
            var e = this.service.getValue(t.AttrConst.forever_level_state),
            n = 3 - this.service.getValue(t.AttrConst.daily_level5_times),
            _ = 0 >= n;
            this.timesLeftText.text = n.toString(),
            DisplayUtil.setEnabled(this.btnadd, _, !_),
            e > 1 && Alarm.show("已完成最终关卡。",
            function() {
                i.service.backToMainPanel()
            })
        },
        e
    } (BasicPanel);
    t.FinalChallenge = i,
    __reflect(i.prototype, "moonShiningStarSoul.FinalChallenge")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.bossID = 16115,
            e.skinName = t.HuiYiShenQianSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "msss_hui_yi_shen_qian_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.grpBack.title.y = 0,
            this.addEvents()
        },
        e.prototype.onFightOver = function(t) {
            var i = t.dataObj;
            FightManager.isWin && Alarm.show("本次挑战回合数为：" + i._roundNum)
        },
        e.prototype.addEvents = function() {
            var i = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(255895, 1,
                function() {
                    KTool.doExchange(12599, 1,
                    function() {
                        i.updateValues()
                    })
                },
                i) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(255894, 1,
                function() {
                    SocketConnection.sendWithPromise(45752, [18, 1]).then(function() {
                        Alarm.show("本次挑战回合数为：1",
                        function() {
                            EventManager.dispatchEventWith("UpdateMainPanel"),
                            i.service.backToMainPanel(),
                            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, i.onFightOver, i)
                        })
                    })
                },
                i) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                i.service.backToMainPanel(),
                EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, i.onFightOver, i)
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                if (!i.isclickFight) {
                    i.isclickFight = !0;
                    var e = 4 - i.service.getValue(t.AttrConst.daily_level1_times);
                    if (0 >= e) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                    FightManager.fightNoMapBoss("", i.bossID)
                }
            },
            this)
        },
        e.prototype.update = function() {
            this.isclickFight = !1;
            var i = (this.service.getValue(t.AttrConst.forever_level_state), this.service.getValue(t.AttrConst.forever_level1_turns)),
            e = 4 - this.service.getValue(t.AttrConst.daily_level1_times),
            n = 0 >= e;
            this.minTurnText.text = "" + i,
            this.timesLeftText.text = e.toString(),
            DisplayUtil.setEnabled(this.btnadd, n, !n),
            DisplayUtil.setEnabled(this.btnfight, 1 != i, 1 == i),
            DisplayUtil.setEnabled(this.btnyijian, 1 != i, 1 == i),
            1 == i && DisplayUtil.setEnabled(this.btnadd, !1, !0)
        },
        e.prototype.destroy = function() {
            i.prototype.destroy.call(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        e
    } (BasicPanel);
    t.HuiYiShenQian = i,
    __reflect(i.prototype, "moonShiningStarSoul.HuiYiShenQian")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
moonShiningStarSoul; !
function(t) {
    var i = function() {
        function t() {}
        return t.forever_pet_state = 106467,
        t.forever_level_state = 106468,
        t.forever_level1_turns = 106469,
        t.forever_level2_state = 106470,
        t.forever_level3_state = 106471,
        t.forever_level3_photoNumber = 106472,
        t.forever_level4_themeNumber = 106473,
        t.forever_level4_score = 106474,
        t.daily_level1_times = 14804,
        t.daily_level2_times = 14805,
        t.daily_level3_times = 14806,
        t.daily_level4_times = 14807,
        t.daily_level5_times = 14808,
        t.daily_upgrade_times = 14809,
        t.playerinfo_level4_score = 1006,
        t.bitbuf_level4_randomTheme = 11242,
        t
    } ();
    t.AttrConst = i,
    __reflect(i.prototype, "moonShiningStarSoul.AttrConst")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.itemID = [1719897, 1719898, 1719899, 1719900, 1719901, 1719902, 1719903, 1719904, 1719905],
            e.currentSelecZhutId = 0,
            e.currentSelecZhaotId = 0,
            e.touchFlag = 0,
            e.skinName = t.MakeHuiYiXiangCeSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(82, this, "msss_make_hui_yi_xiang_ce_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 0,
            this.grpBack.btnHelp.x = 350,
            this.addEvents(),
            this.timer = new egret.Timer(1e3, 1)
        },
        e.prototype.beforeUpdate = function() {
            for (var t = 1; 6 >= t; t++) this["select" + t].visible = !1;
            for (var t = 1; 9 >= t; t++) this["pageSelect" + t].visible = !1,
            this["pageSelect" + t].touchEnabled = !1;
            return this.selectZhu.visible = !1,
            this.selectZhao.visible = !1,
            this.currentSelecZhaotId = 0,
            this.currentSelecZhutId = 0,
            this.service.updateValues(),
            Promise.resolve()
        },
        e.prototype.pageBeginTouchHandler = function(t) {
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerCountEnd, this),
            this.timer.start(),
            this.touchFlag = 1,
            this.targetSource = t.target.source.toString()
        },
        e.prototype.pageEndTouchHandler = function(i) {
            if (3 == this.touchFlag) {
                var e = i.target.source.toString(),
                n = new t.Photo(Number(e[32]));
                this.service.openPop(n),
                this.touchFlag = 0
            }
        },
        e.prototype.timerCountEnd = function(i) {
            1 == this.touchFlag && (this.touchFlag = 0);
            var e = new t.Photo(Number(this.targetSource[32]));
            this.service.openPop(e),
            this.timer.reset(),
            this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerCountEnd, this)
        },
        e.prototype.addEvents = function() {
            for (var i = this,
            e = function(t) {
                n["petup" + t].addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    i.currentSelecZhutId = t,
                    i.selectZhu.visible = !0,
                    i["select" + t].visible = !0;
                    for (var e = 1; 6 >= e; e++) e != t && (i["select" + e].visible = !1);
                    DisplayUtil.setEnabled(i.btnmake, 0 != i.currentSelecZhutId && 0 != i.currentSelecZhaotId, 0 == i.currentSelecZhutId || 0 == i.currentSelecZhaotId)
                },
                n)
            },
            n = this, _ = 1; 6 >= _; _++) e(_);
            for (var s = function(t) {
                a["pageup" + t].addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    i.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, i.timerCountEnd, i),
                    i.currentSelecZhaotId = t,
                    i.selectZhao.visible = !0,
                    i["pageSelect" + t].visible = !0;
                    for (var e = 1; 9 >= e; e++) e != t && (i["pageSelect" + e].visible = !1);
                    DisplayUtil.setEnabled(i.btnmake, 0 != i.currentSelecZhutId && 0 != i.currentSelecZhaotId, 0 == i.currentSelecZhutId || 0 == i.currentSelecZhaotId)
                },
                a),
                a["pageup" + t].addEventListener(egret.TouchEvent.TOUCH_BEGIN, a.pageBeginTouchHandler, a),
                a["pageup" + t].addEventListener(egret.TouchEvent.TOUCH_END, a.pageEndTouchHandler, a)
            },
            a = this, _ = 1; 9 >= _; _++) s(_);
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(255893, 1,
                function() {
                    KTool.doExchange(12612, 1,
                    function() {
                        i.updateValues()
                    })
                },
                i) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                i.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(82)
            },
            this),
            ImageButtonUtil.add(this.btnmake,
            function() {
                var e = 2 - i.service.getValue(t.AttrConst.daily_level4_times);
                return 0 >= e ? void Alarm.show("您的每日制作次数不足") : void SocketConnection.sendByQueue(t.CMDConst.moonShiningStarSoul_CMD, [20, 2],
                function() {
                    i.service.updateValues().then(function() {
                        SocketConnection.sendByQueue(t.CMDConst.moonShiningStarSoul_CMD, [21, i.currentSelecZhutId],
                        function() {
                            i.service.updateValues().then(function() {
                                SocketConnection.sendByQueue(t.CMDConst.moonShiningStarSoul_CMD, [22, i.currentSelecZhaotId],
                                function() {
                                    i.service.updateValues().then(function() {
                                        var e = {};
                                        e.ZhuId = i.currentSelecZhutId,
                                        e.ZhaoId = i.currentSelecZhaotId;
                                        var n = new t.JieSuan(e, i.service);
                                        i.service.getValue(t.AttrConst.playerinfo_level4_score);
                                        i.service.openPop(n, !0)
                                    })
                                })
                            })
                        })
                    })
                })
            },
            this)
        },
        e.prototype.update = function() {
            var i = this;
            0 == this.service.getValue(t.AttrConst.bitbuf_level4_randomTheme) && SocketConnection.sendByQueue(t.CMDConst.moonShiningStarSoul_CMD, [20, 1],
            function() {
                i.service.updateValues().then(function() {
                    i.update()
                })
            });
            for (var e = this.service.getValue(t.AttrConst.forever_level1_turns), n = [], _ = this.service.getValue(t.AttrConst.forever_level2_state), s = 2 - this.service.getValue(t.AttrConst.daily_level4_times), a = this.service.getValue(t.AttrConst.forever_level4_themeNumber), o = (this.service.getValue(t.AttrConst.bitbuf_level4_randomTheme), 1); 9 >= o; o++) {
                var r = ItemManager.getNumByID(this.itemID[o - 1]);
                DisplayUtil.setEnabled(this["pageup" + o], r > 0, 0 >= r),
                this["page" + o].visible = r > 0,
                this["icon" + o].text = r.toString()
            }
            this.xing1.visible = e >= 1,
            this.xing2.visible = 5 >= e && e > 0,
            this.xing3.visible = 1 == e,
            1 == e ? this.score.text = "25": e >= 2 && 5 > e ? this.score.text = "15": e >= 5 && (this.score.text = "7");
            for (var o = 1; 6 >= o; o++) n[o - 1] = 1 == KTool.getBit(_, o),
            DisplayUtil.setEnabled(this["petup" + o], n[o - 1], !n[o - 1]);
            DisplayUtil.setEnabled(this.btnadd, 0 == s, !(0 == s)),
            this.hunli.visible = 1 == a,
            this.miyue.visible = 2 == a,
            this.xuesheng.visible = 3 == a,
            this.timesLeftText.text = s.toString(),
            DisplayUtil.setEnabled(this.btnmake, 0 != this.currentSelecZhutId && 0 != this.currentSelecZhaotId, 0 == this.currentSelecZhutId || 0 == this.currentSelecZhaotId)
        },
        e.prototype.destroy = function() {
            i.prototype.destroy.call(this);
            for (var t = 1; 6 >= t; t++) this["pageup" + t].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pageBeginTouchHandler, this),
            this["pageup" + t].removeEventListener(egret.TouchEvent.TOUCH_END, this.pageEndTouchHandler, this)
        },
        e
    } (BasicPanel);
    t.MakeHuiYiXiangCe = i,
    __reflect(i.prototype, "moonShiningStarSoul.MakeHuiYiXiangCe")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.bossID = 16119,
            e.itemID = [1719897, 1719898, 1719899, 1719900, 1719901, 1719902, 1719903, 1719904, 1719905],
            e.exchangeID = 12603,
            e.skinName = t.NaHuiZhaoPianSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.addEvents(),
            this.service.registerItems(this.itemID, this.itemsUpdate, this),
            this.initOldPveBtnClose(0, this, "msss_na_hui_zhao_pian_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grp_left),
            this.grpBack.title.y = 0
        },
        e.prototype.itemsUpdate = function() {
            for (var t = 0; t < this.itemID.length; t++) {
                var i = ItemManager.getNumByID(this.itemID[t]);
                this["img_down" + (t + 1)].visible = 0 == i,
                this["txt_" + (t + 1)].text = i.toString()
            }
        },
        e.prototype.addEvents = function() {
            var i = this;
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(255897, 1,
                function() {
                    KTool.doExchange(12602, 1,
                    function() {
                        i.updateValues()
                    })
                },
                i) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                i.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnna,
            function() {
                var e = i.service.getValue(t.AttrConst.forever_level3_state);
                return 1 != KTool.getBit(e, 1) || 1 != KTool.getBit(e, 2) || 1 != KTool.getBit(e, 3) || 1 != KTool.getBit(e, 4) ? void Alarm.show("您尚未击败四个精灵") : void SocketConnection.sendByQueue(t.CMDConst.moonShiningStarSoul_CMD, [38, 2],
                function() {
                    i.service.updateValues().then(function() {
                        i.update()
                    })
                })
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(n["btnfight" + e],
                function() {
                    if (!i.isclickFight) {
                        i.isclickFight = !0;
                        var n = 10 - i.service.getValue(t.AttrConst.daily_level3_times);
                        if (0 >= n) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                        FightManager.fightNoMapBoss("", i.bossID + e - 1)
                    }
                },
                n)
            },
            n = this, _ = 1; 4 >= _; _++) e(_);
            for (var s = [0, 255898, 255898, 255899, 255899, 255899, 255900, 255900, 255900, 255900], a = function(t) {
                ImageButtonUtil.add(o["btnadd_" + t],
                function() {
                    if (!PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                    var e = t,
                    n = s[e],
                    _ = {};
                    _.type = "product_diamond",
                    _.ins = {
                        iconID: 1719897 + e - 1,
                        productID: n
                    },
                    _.caller = i,
                    _.callBack = function(t, _) {
                        KTool.buyProductByCallback(n, _,
                        function() {
                            KTool.doExchange(12603 + e - 1, _,
                            function() {
                                i.updateValues()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, _)
                },
                o)
            },
            o = this, _ = 1; 9 >= _; _++) a(_)
        },
        e.prototype.update = function() {
            this.isclickFight = !1;
            var i = (this.service.getValue(t.AttrConst.forever_level_state), 10 - this.service.getValue(t.AttrConst.daily_level3_times)),
            e = 0 >= i,
            n = this.service.getValue(t.AttrConst.forever_level3_state),
            _ = this.service.getValue(t.AttrConst.forever_level3_photoNumber);
            this.timesLeftText.text = i.toString();
            for (var s = [!1, !1, !1, !1], a = 0, o = 1; 4 >= o; o++) s[o - 1] = 1 == KTool.getBit(n, o),
            this["gou" + o].visible = s[o - 1],
            DisplayUtil.setEnabled(this["btnfight" + o], !s[o - 1], s[o - 1]),
            this["imgxing" + o].visible = !1,
            s[o - 1] && a++;
            this.itemsUpdate();
            for (var r = 0; a > r; r++) this["imgxing" + (r + 1)].visible = !0;
            var u = 1 + 2 * _,
            g = 10 + 3 * _;
            u >= 30 && (u = 30),
            g >= 35 && (g = 35),
            this.txt_l1.text = u.toString() + "%",
            this.txt_l2.text = g.toString() + "%",
            DisplayUtil.setEnabled(this.btnadd, e, !e),
            DisplayUtil.setEnabled(this.btnna, 4 == a, 4 != a)
        },
        e
    } (BasicPanel);
    t.NaHuiZhaoPian = i,
    __reflect(i.prototype, "moonShiningStarSoul.NaHuiZhaoPian")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.bossID = [16116, 16117, 16118],
            e.jinbi = [50, 110, 100, 85, 60, 30],
            e.itemID = 1719894,
            e.itemNum = 0,
            e.skinName = t.PinYongZhuShouSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "msss_pin_yong_zhu_shou_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 0,
            this.addEvents(),
            this.service.registerItemUpdateForText(this.itemID, this.itemNumText, this)
        },
        e.prototype.addEvents = function() {
            var i = this;
            ImageButtonUtil.add(this.btnadditem,
            function() {
                if (!PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                var t = {};
                t.type = "product_diamond",
                t.ins = {
                    iconID: 1719894,
                    productID: 255896
                },
                t.caller = i,
                t.callBack = function(t, e) {
                    KTool.buyProductByCallback(255896, e,
                    function() {
                        KTool.doExchange(12601, e,
                        function() {
                            i.updateValues()
                        })
                    })
                },
                ModuleManager.showModuleByID(1, t)
            },
            this),
            ImageButtonUtil.add(this.btnaddtime,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(255921, 1,
                function() {
                    KTool.doExchange(12600, 1,
                    function() {
                        i.updateValues()
                    })
                },
                i) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                i.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                i.service.showPetBag()
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(n["btnfight" + e],
                function() {
                    if (!i.isclickFight) {
                        i.isclickFight = !0;
                        var n = 12 - i.service.getValue(t.AttrConst.daily_level2_times);
                        if (0 >= n) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                        FightManager.fightNoMapBoss("", i.bossID[e - 1])
                    }
                },
                n)
            },
            n = this, _ = 1; 3 >= _; _++) e(_);
            for (var s = function(e) {
                ImageButtonUtil.add(a["btnpin" + e],
                function() {
                    return i.itemNum < i.jinbi[e - 1] ? void BubblerManager.getInstance().showText("你拥有的金币数量不足！") : void SocketConnection.sendByQueue(t.CMDConst.moonShiningStarSoul_CMD, [19, e],
                    function() {
                        i.service.updateSomeValues([t.AttrConst.forever_level2_state]).then(function() {
                            i.update()
                        })
                    })
                },
                a)
            },
            a = this, _ = 1; 6 >= _; _++) s(_);
            ImageButtonUtil.add(this.btnget,
            function() {
                var e = i.service.getValue(t.AttrConst.forever_level2_state);
                return 1 != KTool.getBit(e, 7) || 1 != KTool.getBit(e, 8) || 1 != KTool.getBit(e, 9) ? void Alarm.show("您尚未击败三个精灵") : void SocketConnection.sendByQueue(t.CMDConst.moonShiningStarSoul_CMD, [38, 1],
                function() {
                    i.service.updateSomeValues([t.AttrConst.forever_level2_state]).then(function() {
                        i.update()
                    })
                })
            },
            this)
        },
        e.prototype.update = function() {
            this.isclickFight = !1,
            this.itemNum = ItemManager.getNumByID(this.itemID);
            for (var i = 12 - this.service.getValue(t.AttrConst.daily_level2_times), e = this.service.getValue(t.AttrConst.forever_level2_state), n = [!1, !1, !1], _ = [], s = 0, a = 1; 3 >= a; a++) n[a - 1] = 1 == KTool.getBit(e, 6 + a),
            this["img_get" + a].visible = n[a - 1],
            DisplayUtil.setEnabled(this["btnfight" + a], !n[a - 1], n[a - 1]),
            n[a - 1] && s++,
            this["imgxing" + a].visible = !1;
            for (var o = 0; s > o; o++) this["imgxing" + (o + 1)].visible = !0;
            this.timesLeftText.text = i.toString();
            for (var a = 1; 6 >= a; a++) _[a - 1] = 1 == KTool.getBit(e, a),
            this["haspin" + a].visible = _[a - 1],
            this["btnpin" + a].visible = !_[a - 1];
            DisplayUtil.setEnabled(this.btnget, 3 == s, 3 != s),
            DisplayUtil.setEnabled(this.btnaddtime, 0 == i, 0 != i)
        },
        e.prototype.destroy = function() {
            this.service.unregisterItems(this),
            i.prototype.destroy.call(this)
        },
        e
    } (BasicPanel);
    t.PinYongZhuShou = i,
    __reflect(i.prototype, "moonShiningStarSoul.PinYongZhuShou")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.itemId = 1719912,
            e.markId = 41582,
            e.bossId = 16124,
            e.skillId = 33310,
            e.state = [!1, !1, !1, !1],
            e.maxChangeTimes = 0,
            e.skinName = t.UpgradeAbilitySkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initOldPveBtnClose(0, this, "msss_upgrade_ability_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.grpBack.title.y = 0,
            this.service.registerItemUpdateForText(this.itemId, this.itemNumText, this)
        },
        e.prototype.addEvent = function() {
            var i = this;
            ImageButtonUtil.add(this.btnadditem,
            function() {
                if (!PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                var t = {};
                t.type = "product_diamond",
                t.ins = {
                    iconID: 1719912,
                    productID: 255904
                },
                t.caller = i,
                t.callBack = function(t, e) {
                    KTool.buyProductByCallback(255904, e,
                    function() {
                        KTool.doExchange(12615, e,
                        function() {
                            i.updateValues()
                        })
                    })
                },
                ModuleManager.showModuleByID(1, t)
            },
            this),
            ImageButtonUtil.add(this.btnaddtimes,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(255903, 1,
                function() {
                    KTool.doExchange(12614, 1,
                    function() {
                        i.updateValues()
                    })
                },
                i) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                i.service.backToMainPanel()
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(n["btnfight_" + e],
                function() {
                    var n = i.maxChangeTimes - i.service.getValue(t.AttrConst.daily_upgrade_times);
                    return 0 >= n ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void FightManager.fightNoMapBoss("", i.bossId + e)
                },
                n)
            },
            n = this, _ = 0; 3 > _; _++) e(_);
            for (var _ = 0; 3 > _; _++) this["btndui_" + _].index = _,
            ImageButtonUtil.add(this["btndui_" + _], this.exchange, this);
            ImageButtonUtil.add(this.icon_ke,
            function() {
                var t;
                CountermarkXMLInfo.isminMark(i.markId) ? (t = {},
                t.ins = i.markId, tipsPop.TipsPop.openCounterMarkPop(t)) : (t = {},
                t.id = i.markId, tipsPop.TipsPop.openItemPop(t))
            },
            this),
            ImageButtonUtil.add(this.icon_wu,
            function() {
                var t = {
                    id: i.skillId
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_te,
            function() {
                i.service.showPetEff(3866)
            },
            this)
        },
        e.prototype.exchange = function(i) {
            var e = this,
            n = i.currentTarget.index,
            _ = 15;
            if (PetManager.isDefaultPet(3866)) {
                var s = ItemManager.getNumByID(this.itemId);
                s >= _ ? SocketConnection.sendByQueue(t.CMDConst.moonShiningStarSoul_CMD, [24, n + 1],
                function() {
                    e.service.updateValues().then(function() {
                        switch (n) {
                        case 2:
                            BubblerManager.getInstance().showText("您已成功兑换专属特性！");
                            break;
                        case 1:
                            BubblerManager.getInstance().showText("您已成功兑换第五技能！")
                        }
                        e.update()
                    })
                }):
                BubblerManager.getInstance().showText("兑换需要15个月之魂魄，请先获得足够数量再来兑换！")
            } else BubblerManager.getInstance().showText("请先将月照星魂设为首发精灵！");
            this.update()
        },
        e.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        e.prototype.update = function() {
            this.itemNum = ItemManager.getNumByID(this.itemId),
            this.maxChangeTimes = MainManager.actorInfo.isVip ? 5 : 3,
            this.leftTime = this.maxChangeTimes - this.service.getValue(t.AttrConst.daily_upgrade_times);
            var i = this.service.getValue(t.AttrConst.forever_pet_state);
            this.leftTime == this.maxChangeTimes;
            this.state[0] = 1 == KTool.getBit(i, 1),
            this.state[1] = 1 == KTool.getBit(i, 2),
            this.state[2] = 1 == KTool.getBit(i, 3),
            this.state[3] = 1 == KTool.getBit(i, 4),
            this.timeLeftText.text = this.leftTime.toString(),
            this.itemNumText.text = this.itemNum.toString();
            for (var e = 1; 3 >= e; e++) this["get" + e].visible = this.state[e],
            1 == e && this.state[e] && (this.icon_ke.touchEnabled = !1),
            2 == e && this.state[e] && (this.icon_wu.touchEnabled = !1),
            3 == e && this.state[e] && (this.icon_te.touchEnabled = !1);
            DisplayUtil.setEnabled(this.btnaddtimes, 0 == this.leftTime, 0 != this.leftTime),
            DisplayUtil.setEnabled(this.btndui_0, !this.state[1], this.state[1]),
            DisplayUtil.setEnabled(this.btndui_1, !this.state[2], this.state[2]),
            DisplayUtil.setEnabled(this.btndui_2, !this.state[3], this.state[3])
        },
        e.prototype.destroy = function() {
            this.service.unregisterItems(this),
            i.prototype.destroy.call(this)
        },
        e
    } (BasicPanel);
    t.UpgradeAbility = i,
    __reflect(i.prototype, "moonShiningStarSoul.UpgradeAbility")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e(e, n) {
            var _ = i.call(this) || this;
            return _.str = ["索格瑞亚笨手笨脚地打坏了婚礼会场的一个杯子…", "索格瑞亚忙前忙后还算是认真~", "索格瑞亚一拳打倒了小学生，拍摄现场顿时崩了？？？", "恶魔男爵表演了一段魔术，惊艳四座~", "恶魔男爵变出了一朵玫瑰献给月照~", "恶魔男爵在学校里变魔术，吸引了熊孩子的注意力，恭喜拍摄现场少了熊孩子！", "流云在婚纱店里出不来了？？？", "流云为月照化了美美的妆~", "流云后期修图将两人P的满满的少年感~", "卟祈酱做饭错过了拍摄时间。", "卟祈酱为月照墨影准备了旅行便当作为拍摄道具~", "卟祈酱把拍摄背景定位了食堂？？？", "魂王后期修图把婚礼修成了诡异阴森的感觉。", "魂王不喜欢旅行。", "学生会会长暗翼魂王邀请了月照的班主任参与拍摄！", "混沌飞王不喜欢婚礼。", "混沌飞王不喜欢旅行。", "混沌飞王不喜欢学校。"],
            _.data = e,
            _.skinName = t.JieSuanPopSkin,
            _.service = n,
            _
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            this.addEvents(),
            this.update()
        },
        e.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnconfirm,
            function() {
                t.service.updateValues().then(function() {
                    t.hide(),
                    EventManager.dispatchEventWith("backToMain")
                }),
                t.service.backToMainPanel()
            },
            this)
        },
        e.prototype.initData = function() {},
        e.prototype.update = function() {
            for (var i = this.service.getValue(t.AttrConst.playerinfo_level4_score), e = this.service.getValue(t.AttrConst.forever_level4_themeNumber), n = 255 & i, _ = i >> 8 & 255, s = i >> 16 & 255, a = i >> 24 & 255, o = 1; 6 >= o; o++) this["img_" + o].visible = this.data.ZhuId == o;
            for (var o = 1; 9 >= o; o++) this["img_z" + o].visible = this.data.ZhaoId == o;
            this.txt_1.text = this.str[3 * (this.data.ZhuId - 1) + e - 1],
            this.txt_2.text = _.toString(),
            this.txt_3.text = "" + s * a / 100,
            this.txt_4.text = s.toString(),
            this.txt_5.text = a.toString() + "%",
            this.txt_6.text = n.toString(),
            this.txt_7.text = _.toString(),
            this.txt_8.text = "" + s * a / 100,
            this.txt_9.text = (n + _ + s * (a / 100)).toString()
        },
        e
    } (PopView);
    t.JieSuan = i,
    __reflect(i.prototype, "moonShiningStarSoul.JieSuan")
} (moonShiningStarSoul || (moonShiningStarSoul = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
moonShiningStarSoul; !
function(t) {
    var i = function(i) {
        function e(e) {
            var n = i.call(this) || this;
            return n.skinName = t.PhotoSkin,
            n.curSelectZhaoId = e,
            n
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            this.initDatas()
        },
        e.prototype.initDatas = function() {
            this.img.source = "msss_jie_suan_pop_img_z" + this.curSelectZhaoId + "_jpg"
        },
        e
    } (PopView);
    t.Photo = i,
    __reflect(i.prototype, "moonShiningStarSoul.Photo")
} (moonShiningStarSoul || (moonShiningStarSoul = {})),
window.moonShiningStarSoul = window.moonShiningStarSoul || {};
var __extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/FinalChallengeSkin.exml"] = window.moonShiningStarSoul.FinalChallengeSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnfight", "btnyijian", "timesLeftText", "btnadd", "righttop", "btnpet", "btncure", "grp_btns", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.btnfight_i(), this.btnyijian_i(), this._Image2_i(), this.righttop_i(), this.grp_btns_i(), this.top_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "msss_final_challenge_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "msss_hui_yi_shen_qian_btnfight_png",
        t.x = 285,
        t.y = 542,
        t
    },
    e.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.source = "msss_hui_yi_shen_qian_btnyijian_png",
        t.x = 614,
        t.y = 542,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "msss_final_challenge_title_png",
        t.x = 235,
        t.y = 56,
        t
    },
    e.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.x = 908,
        t.y = 15,
        t.elementsContent = [this._Image3_i(), this.timesLeftText_i(), this._Image4_i(), this.btnadd_i()],
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_txtbg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.timesLeftText_i = function() {
        var t = new eui.Label;
        return this.timesLeftText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99",
        t.textColor = 16775327,
        t.x = 159,
        t.y = 0,
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_add_png",
        t.x = 185,
        t.y = 0,
        t
    },
    e.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "msss_main_panel_add_y_png",
        t.visible = !0,
        t.x = 185,
        t.y = 0,
        t
    },
    e.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 35,
        t.y = 253,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    e.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "msss_hui_yi_shen_qian_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "msss_hui_yi_shen_qian_btncure_png",
        t.x = 0,
        t.y = 75,
        t
    },
    e.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.btnback_i(), this._Image6_i()],
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_up_bg_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "msss_main_panel_btnclose_png",
        t.visible = !1,
        t.x = 18,
        t.y = 10,
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "msss_final_challenge_toptitle_png",
        t.visible = !1,
        t.x = 78,
        t.y = 0,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HuiYiShenQianSkin.exml"] = window.moonShiningStarSoul.HuiYiShenQianSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnfight", "btnyijian", "btnpet", "btncure", "grp_btns", "timesLeftText", "btnadd", "minTurnText", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.btnfight_i(), this.btnyijian_i(), this._Image2_i(), this._Image3_i(), this.grp_btns_i(), this._Group1_i(), this._Group2_i(), this._Image7_i(), this.top_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "msss_hui_yi_shen_qian_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "msss_hui_yi_shen_qian_btnfight_png",
        t.x = 285,
        t.y = 542,
        t
    },
    e.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.source = "msss_hui_yi_shen_qian_btnyijian_png",
        t.x = 614,
        t.y = 542,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "msss_hui_yi_shen_qian_tag_png",
        t.x = 585,
        t.y = 511,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "msss_hui_yi_shen_qian_img_1_png",
        t.x = 169,
        t.y = 60,
        t
    },
    e.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 35,
        t.y = 253,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    e.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "msss_hui_yi_shen_qian_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "msss_hui_yi_shen_qian_btncure_png",
        t.x = 0,
        t.y = 75,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 908,
        t.y = 15,
        t.elementsContent = [this._Image4_i(), this.timesLeftText_i(), this._Image5_i(), this.btnadd_i()],
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_txtbg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.timesLeftText_i = function() {
        var t = new eui.Label;
        return this.timesLeftText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99",
        t.textColor = 16775327,
        t.x = 159,
        t.y = 0,
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_add_png",
        t.x = 185,
        t.y = 0,
        t
    },
    e.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "msss_main_panel_add_y_png",
        t.x = 185,
        t.y = 0,
        t
    },
    e._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 677,
        t.y = 15,
        t.elementsContent = [this._Image6_i(), this.minTurnText_i()],
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "msss_hui_yi_shen_qian_txtbg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.minTurnText_i = function() {
        var t = new eui.Label;
        return this.minTurnText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99",
        t.textColor = 16775327,
        t.x = 159,
        t.y = 0,
        t
    },
    e._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "msss_hui_yi_shen_qian_img_2_png",
        t.x = 791,
        t.y = 106,
        t
    },
    e.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.btnback_i(), this._Image9_i()],
        t
    },
    e._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "msss_main_panel_btnclose_png",
        t.x = 18,
        t.y = 10,
        t
    },
    e._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "msss_hui_yi_shen_qian_toptitle_png",
        t.x = 78,
        t.y = 0,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/JieSuanPopSkin.exml"] = window.moonShiningStarSoul.JieSuanPopSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["img_z1", "img_z2", "img_z3", "img_z4", "img_z5", "img_z6", "img_z7", "img_z8", "img_z9", "img_1", "img_2", "img_3", "img_4", "img_5", "img_6", "txt_1", "txt_2", "txt_3", "txt_4", "txt_5", "txt_6", "txt_7", "txt_8", "txt_9", "btnconfirm"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "msss_jie_suan_pop_bg_png",
        t.x = 105,
        t.y = 72,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 124,
        t.y = 126,
        t.elementsContent = [this.img_z1_i(), this.img_z2_i(), this.img_z3_i(), this.img_z4_i(), this.img_z5_i(), this.img_z6_i(), this.img_z7_i(), this.img_z8_i(), this.img_z9_i(), this.img_1_i(), this.img_2_i(), this.img_3_i(), this.img_4_i(), this.img_5_i(), this.img_6_i(), this._Image2_i(), this._Image3_i(), this.txt_1_i(), this.txt_2_i(), this.txt_3_i(), this.txt_4_i(), this.txt_5_i(), this.txt_6_i(), this.txt_7_i(), this.txt_8_i(), this.txt_9_i(), this.btnconfirm_i()],
        t
    },
    e.img_z1_i = function() {
        var t = new eui.Image;
        return this.img_z1 = t,
        t.source = "msss_jie_suan_pop_img_z1_png",
        t.x = 42,
        t.y = 249,
        t
    },
    e.img_z2_i = function() {
        var t = new eui.Image;
        return this.img_z2 = t,
        t.source = "msss_jie_suan_pop_img_z2_png",
        t.x = 42,
        t.y = 249,
        t
    },
    e.img_z3_i = function() {
        var t = new eui.Image;
        return this.img_z3 = t,
        t.source = "msss_jie_suan_pop_img_z3_png",
        t.x = 42,
        t.y = 249,
        t
    },
    e.img_z4_i = function() {
        var t = new eui.Image;
        return this.img_z4 = t,
        t.source = "msss_jie_suan_pop_img_z4_png",
        t.x = 42,
        t.y = 249,
        t
    },
    e.img_z5_i = function() {
        var t = new eui.Image;
        return this.img_z5 = t,
        t.source = "msss_jie_suan_pop_img_z5_png",
        t.x = 42,
        t.y = 249,
        t
    },
    e.img_z6_i = function() {
        var t = new eui.Image;
        return this.img_z6 = t,
        t.source = "msss_jie_suan_pop_img_z6_png",
        t.x = 42,
        t.y = 249,
        t
    },
    e.img_z7_i = function() {
        var t = new eui.Image;
        return this.img_z7 = t,
        t.source = "msss_jie_suan_pop_img_z7_png",
        t.x = 42,
        t.y = 249,
        t
    },
    e.img_z8_i = function() {
        var t = new eui.Image;
        return this.img_z8 = t,
        t.source = "msss_jie_suan_pop_img_z8_png",
        t.x = 42,
        t.y = 249,
        t
    },
    e.img_z9_i = function() {
        var t = new eui.Image;
        return this.img_z9 = t,
        t.source = "msss_jie_suan_pop_img_z9_png",
        t.x = 42,
        t.y = 249,
        t
    },
    e.img_1_i = function() {
        var t = new eui.Image;
        return this.img_1 = t,
        t.source = "msss_jie_suan_pop_img_1_png",
        t.visible = !0,
        t.x = 40,
        t.y = 57,
        t
    },
    e.img_2_i = function() {
        var t = new eui.Image;
        return this.img_2 = t,
        t.source = "msss_jie_suan_pop_img_2_png",
        t.visible = !0,
        t.x = 40,
        t.y = 57,
        t
    },
    e.img_3_i = function() {
        var t = new eui.Image;
        return this.img_3 = t,
        t.source = "msss_jie_suan_pop_img_3_png",
        t.visible = !0,
        t.x = 40,
        t.y = 57,
        t
    },
    e.img_4_i = function() {
        var t = new eui.Image;
        return this.img_4 = t,
        t.source = "msss_jie_suan_pop_img_4_png",
        t.visible = !0,
        t.x = 40,
        t.y = 57,
        t
    },
    e.img_5_i = function() {
        var t = new eui.Image;
        return this.img_5 = t,
        t.source = "msss_jie_suan_pop_img_5_png",
        t.visible = !0,
        t.x = 40,
        t.y = 57,
        t
    },
    e.img_6_i = function() {
        var t = new eui.Image;
        return this.img_6 = t,
        t.source = "msss_jie_suan_pop_img_6_png",
        t.visible = !0,
        t.x = 40,
        t.y = 57,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "msss_jie_suan_pop_img_b1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "msss_jie_suan_pop_img_b2_png",
        t.x = 1,
        t.y = 194,
        t
    },
    e.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "恶魔男爵在学校里变魔术，吸引了熊孩子\n的注意力，恭喜拍摄现场少了熊孩子！",
        t.textColor = 16774802,
        t.width = 324,
        t.x = 211,
        t.y = 95,
        t
    },
    e.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17.8485186144633,
        t.text = " 99",
        t.textColor = 16774656,
        t.x = 557,
        t.y = 11,
        t
    },
    e.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17.8485186144633,
        t.text = "99",
        t.textColor = 16774656,
        t.x = 557,
        t.y = 205,
        t
    },
    e.txt_4_i = function() {
        var t = new eui.Label;
        return this.txt_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17.9917780244007,
        t.text = "99",
        t.textColor = 16774400,
        t.x = 515,
        t.y = 321,
        t
    },
    e.txt_5_i = function() {
        var t = new eui.Label;
        return this.txt_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17.9917780244007,
        t.text = "99%",
        t.textColor = 16774400,
        t.x = 500,
        t.y = 353,
        t
    },
    e.txt_6_i = function() {
        var t = new eui.Label;
        return this.txt_6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0029342336461,
        t.text = "99",
        t.textColor = 16774400,
        t.x = 826,
        t.y = 49,
        t
    },
    e.txt_7_i = function() {
        var t = new eui.Label;
        return this.txt_7 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0029342336461,
        t.text = "99",
        t.textColor = 16774400,
        t.x = 826,
        t.y = 89,
        t
    },
    e.txt_8_i = function() {
        var t = new eui.Label;
        return this.txt_8 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0029342336461,
        t.text = "99",
        t.textColor = 16774400,
        t.x = 826,
        t.y = 130,
        t
    },
    e.txt_9_i = function() {
        var t = new eui.Label;
        return this.txt_9 = t,
        t.fontFamily = "MFShangHei",
        t.size = 21.8741096162235,
        t.text = "999",
        t.textColor = 16774400,
        t.x = 811,
        t.y = 185,
        t
    },
    e.btnconfirm_i = function() {
        var t = new eui.Image;
        return this.btnconfirm = t,
        t.source = "msss_jie_suan_pop_btn1__png",
        t.x = 667,
        t.y = 336,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.moonShiningStarSoul.MainPanelSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["Got", "btnfinal", "btnSuperGet", "btnGetPet", "btnUp", "btnInfo", "goudowm", "gouup", "xing1", "xing2", "xing3", "btn_1", "btn_2", "img_1_down", "img_1", "img_2_down", "img_2", "img_3_down", "img_3", "img_4_down", "img_4", "img_5_down", "img_5", "img_6_down", "img_6", "btn_3", "icon1down", "icon2down", "icon3down", "icon4down", "icon5down", "icon6down", "icon7down", "icon8down", "icon9down", "icon1", "icon2", "icon3", "icon4", "icon5", "icon6", "icon7", "icon8", "icon9", "txt_n1", "txt_n2", "txt_n3", "txt_n4", "txt_n5", "txt_n6", "txt_n7", "txt_n8", "txt_n9", "txt_3", "btn_4", "txt_5", "right", "btnClose", "btnhelp", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.Got_i(), this.btnfinal_i(), this.btnSuperGet_i(), this.btnGetPet_i(), this.btnUp_i(), this.btnInfo_i(), this.right_i(), this._Image14_i(), this.top_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "msss_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e.Got_i = function() {
        var t = new eui.Image;
        return this.Got = t,
        t.source = "msss_main_panel_got_png",
        t.x = 249,
        t.y = 271,
        t
    },
    e.btnfinal_i = function() {
        var t = new eui.Image;
        return this.btnfinal = t,
        t.source = "msss_main_panel_btnfinal_png",
        t.x = 230,
        t.y = 542,
        t
    },
    e.btnSuperGet_i = function() {
        var t = new eui.Image;
        return this.btnSuperGet = t,
        t.source = "msss_main_panel_btnone1_png",
        t.visible = !0,
        t.x = 517,
        t.y = 513,
        t
    },
    e.btnGetPet_i = function() {
        var t = new eui.Image;
        return this.btnGetPet = t,
        t.source = "msss_main_panel_btnone2_png",
        t.visible = !1,
        t.x = 517,
        t.y = 513,
        t
    },
    e.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "msss_main_panel_btnone3_png",
        t.visible = !0,
        t.x = 517,
        t.y = 513,
        t
    },
    e.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "msss_main_panel_btninfo_png",
        t.x = 44,
        t.y = 546,
        t
    },
    e.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.right = 10,
        t.y = 15,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 40,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.goudowm_i(), this.gouup_i(), this._Image4_i(), this._Image5_i(), this.xing1_i(), this._Image6_i(), this.xing2_i(), this._Image7_i(), this.xing3_i(), this.btn_1_i()],
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_img_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_txt_1_png",
        t.x = 61,
        t.y = 60,
        t
    },
    e.goudowm_i = function() {
        var t = new eui.Image;
        return this.goudowm = t,
        t.source = "msss_main_panel_btnchoosedown1_png",
        t.visible = !0,
        t.x = 156,
        t.y = 56,
        t
    },
    e.gouup_i = function() {
        var t = new eui.Image;
        return this.gouup = t,
        t.source = "msss_main_panel_btnchooseup1_png",
        t.visible = !0,
        t.x = 156,
        t.y = 56,
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_txt_2_png",
        t.x = 229,
        t.y = 60,
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.visible = !0,
        t.x = 302,
        t.y = 56,
        t
    },
    e.xing1_i = function() {
        var t = new eui.Image;
        return this.xing1 = t,
        t.source = "msss_main_panel_btnup_png",
        t.x = 302,
        t.y = 56,
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.x = 331,
        t.y = 56,
        t
    },
    e.xing2_i = function() {
        var t = new eui.Image;
        return this.xing2 = t,
        t.source = "msss_main_panel_btnup_png",
        t.x = 331,
        t.y = 56,
        t
    },
    e._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.x = 360,
        t.y = 56,
        t
    },
    e.xing3_i = function() {
        var t = new eui.Image;
        return this.xing3 = t,
        t.source = "msss_main_panel_btnup_png",
        t.x = 360,
        t.y = 56,
        t
    },
    e.btn_1_i = function() {
        var t = new eui.Image;
        return this.btn_1 = t,
        t.source = "msss_main_panel_btn1_png",
        t.x = 338,
        t.y = 2,
        t
    },
    e._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 128,
        t.elementsContent = [this._Image8_i(), this.btn_2_i(), this.img_1_down_i(), this.img_1_i(), this.img_2_down_i(), this.img_2_i(), this.img_3_down_i(), this.img_3_i(), this.img_4_down_i(), this.img_4_i(), this.img_5_down_i(), this.img_5_i(), this.img_6_down_i(), this.img_6_i()],
        t
    },
    e._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_img_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btn_2_i = function() {
        var t = new eui.Image;
        return this.btn_2 = t,
        t.source = "msss_main_panel_btn2_png",
        t.x = 338,
        t.y = 2,
        t
    },
    e.img_1_down_i = function() {
        var t = new eui.Image;
        return this.img_1_down = t,
        t.source = "msss_main_panel_img_z1down_png",
        t.visible = !0,
        t.x = 21,
        t.y = 59,
        t
    },
    e.img_1_i = function() {
        var t = new eui.Image;
        return this.img_1 = t,
        t.source = "msss_main_panel_img_z1up_png",
        t.visible = !0,
        t.x = 20,
        t.y = 56,
        t
    },
    e.img_2_down_i = function() {
        var t = new eui.Image;
        return this.img_2_down = t,
        t.source = "msss_main_panel_img_z2down_png",
        t.x = 92,
        t.y = 59,
        t
    },
    e.img_2_i = function() {
        var t = new eui.Image;
        return this.img_2 = t,
        t.source = "msss_main_panel_img_z2up_png",
        t.x = 91,
        t.y = 56,
        t
    },
    e.img_3_down_i = function() {
        var t = new eui.Image;
        return this.img_3_down = t,
        t.source = "msss_main_panel_img_z3down_png",
        t.x = 162,
        t.y = 59,
        t
    },
    e.img_3_i = function() {
        var t = new eui.Image;
        return this.img_3 = t,
        t.source = "msss_main_panel_img_z3up_png",
        t.x = 161,
        t.y = 56,
        t
    },
    e.img_4_down_i = function() {
        var t = new eui.Image;
        return this.img_4_down = t,
        t.source = "msss_main_panel_img_z4down_png",
        t.x = 233,
        t.y = 59,
        t
    },
    e.img_4_i = function() {
        var t = new eui.Image;
        return this.img_4 = t,
        t.source = "msss_main_panel_img_z4up_png",
        t.x = 232,
        t.y = 56,
        t
    },
    e.img_5_down_i = function() {
        var t = new eui.Image;
        return this.img_5_down = t,
        t.source = "msss_main_panel_img_z5down_png",
        t.x = 304,
        t.y = 59,
        t
    },
    e.img_5_i = function() {
        var t = new eui.Image;
        return this.img_5 = t,
        t.source = "msss_main_panel_img_z5up_png",
        t.x = 303,
        t.y = 56,
        t
    },
    e.img_6_down_i = function() {
        var t = new eui.Image;
        return this.img_6_down = t,
        t.source = "msss_main_panel_img_z6down_png",
        t.x = 375,
        t.y = 59,
        t
    },
    e.img_6_i = function() {
        var t = new eui.Image;
        return this.img_6 = t,
        t.source = "msss_main_panel_img_z6up_png",
        t.x = 374,
        t.y = 56,
        t
    },
    e._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 280,
        t.elementsContent = [this._Image9_i(), this.btn_3_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this.icon1down_i(), this.icon2down_i(), this.icon3down_i(), this.icon4down_i(), this.icon5down_i(), this.icon6down_i(), this.icon7down_i(), this.icon8down_i(), this.icon9down_i(), this.icon1_i(), this.icon2_i(), this.icon3_i(), this.icon4_i(), this.icon5_i(), this.icon6_i(), this.icon7_i(), this.icon8_i(), this.icon9_i(), this.txt_n1_i(), this.txt_n2_i(), this.txt_n3_i(), this.txt_n4_i(), this.txt_n5_i(), this.txt_n6_i(), this.txt_n7_i(), this.txt_n8_i(), this.txt_n9_i()],
        t
    },
    e._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_img_3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btn_3_i = function() {
        var t = new eui.Image;
        return this.btn_3 = t,
        t.source = "msss_main_panel_btn3_png",
        t.x = 338,
        t.y = 2,
        t
    },
    e._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_img_jing_png",
        t.visible = !0,
        t.x = 23,
        t.y = 58,
        t
    },
    e._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_img_jian_png",
        t.visible = !0,
        t.x = 201,
        t.y = 58,
        t
    },
    e._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_img_yuan_png",
        t.x = 53,
        t.y = 140,
        t
    },
    e.icon1down_i = function() {
        var t = new eui.Image;
        return this.icon1down = t,
        t.source = "msss_main_panel_img_n1down_png",
        t.visible = !0,
        t.x = 52,
        t.y = 64,
        t
    },
    e.icon2down_i = function() {
        var t = new eui.Image;
        return this.icon2down = t,
        t.source = "msss_main_panel_img_n2down_png",
        t.x = 121,
        t.y = 64,
        t
    },
    e.icon3down_i = function() {
        var t = new eui.Image;
        return this.icon3down = t,
        t.source = "msss_main_panel_img_n3down_png",
        t.x = 230,
        t.y = 64,
        t
    },
    e.icon4down_i = function() {
        var t = new eui.Image;
        return this.icon4down = t,
        t.source = "msss_main_panel_img_n4down_png",
        t.x = 299,
        t.y = 64,
        t
    },
    e.icon5down_i = function() {
        var t = new eui.Image;
        return this.icon5down = t,
        t.source = "msss_main_panel_img_n5down_png",
        t.x = 367,
        t.y = 64,
        t
    },
    e.icon6down_i = function() {
        var t = new eui.Image;
        return this.icon6down = t,
        t.source = "msss_main_panel_img_n6down_png",
        t.x = 86,
        t.y = 146,
        t
    },
    e.icon7down_i = function() {
        var t = new eui.Image;
        return this.icon7down = t,
        t.source = "msss_main_panel_img_n7down_png",
        t.x = 169,
        t.y = 146,
        t
    },
    e.icon8down_i = function() {
        var t = new eui.Image;
        return this.icon8down = t,
        t.source = "msss_main_panel_img_n8down_png",
        t.x = 253,
        t.y = 146,
        t
    },
    e.icon9down_i = function() {
        var t = new eui.Image;
        return this.icon9down = t,
        t.source = "msss_main_panel_img_n9down_png",
        t.x = 337,
        t.y = 146,
        t
    },
    e.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.source = "msss_main_panel_img_n1up_png",
        t.visible = !0,
        t.x = 52,
        t.y = 64,
        t
    },
    e.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.source = "msss_main_panel_img_n2up_png",
        t.x = 121,
        t.y = 64,
        t
    },
    e.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.source = "msss_main_panel_img_n3up_png",
        t.x = 230,
        t.y = 64,
        t
    },
    e.icon4_i = function() {
        var t = new eui.Image;
        return this.icon4 = t,
        t.source = "msss_main_panel_img_n4up_png",
        t.x = 299,
        t.y = 64,
        t
    },
    e.icon5_i = function() {
        var t = new eui.Image;
        return this.icon5 = t,
        t.source = "msss_main_panel_img_n5up_png",
        t.x = 367,
        t.y = 64,
        t
    },
    e.icon6_i = function() {
        var t = new eui.Image;
        return this.icon6 = t,
        t.source = "msss_main_panel_img_n6up_png",
        t.x = 86,
        t.y = 146,
        t
    },
    e.icon7_i = function() {
        var t = new eui.Image;
        return this.icon7 = t,
        t.source = "msss_main_panel_img_n7up_png",
        t.x = 169,
        t.y = 146,
        t
    },
    e.icon8_i = function() {
        var t = new eui.Image;
        return this.icon8 = t,
        t.source = "msss_main_panel_img_n8up_png",
        t.x = 253,
        t.y = 146,
        t
    },
    e.icon9_i = function() {
        var t = new eui.Image;
        return this.icon9 = t,
        t.source = "msss_main_panel_img_n9up_png",
        t.x = 337,
        t.y = 146,
        t
    },
    e.txt_n1_i = function() {
        var t = new eui.Label;
        return this.txt_n1 = t,
        t.size = 14.0214667304483,
        t.text = "00",
        t.textColor = 16774400,
        t.x = 93,
        t.y = 111,
        t
    },
    e.txt_n2_i = function() {
        var t = new eui.Label;
        return this.txt_n2 = t,
        t.size = 14.0214667304483,
        t.text = "00",
        t.textColor = 16774400,
        t.x = 162,
        t.y = 111,
        t
    },
    e.txt_n3_i = function() {
        var t = new eui.Label;
        return this.txt_n3 = t,
        t.size = 14,
        t.text = "00",
        t.textColor = 16774400,
        t.x = 272,
        t.y = 111,
        t
    },
    e.txt_n4_i = function() {
        var t = new eui.Label;
        return this.txt_n4 = t,
        t.size = 14,
        t.text = "00",
        t.textColor = 16774400,
        t.x = 341,
        t.y = 112,
        t
    },
    e.txt_n5_i = function() {
        var t = new eui.Label;
        return this.txt_n5 = t,
        t.size = 14.0000000000001,
        t.text = "00",
        t.textColor = 16774400,
        t.x = 409,
        t.y = 111,
        t
    },
    e.txt_n6_i = function() {
        var t = new eui.Label;
        return this.txt_n6 = t,
        t.size = 14.0000000000001,
        t.text = "00",
        t.textColor = 16774400,
        t.x = 128,
        t.y = 193,
        t
    },
    e.txt_n7_i = function() {
        var t = new eui.Label;
        return this.txt_n7 = t,
        t.size = 14.0000000000001,
        t.text = "00",
        t.textColor = 16774400,
        t.x = 211,
        t.y = 193,
        t
    },
    e.txt_n8_i = function() {
        var t = new eui.Label;
        return this.txt_n8 = t,
        t.size = 14.0000000000001,
        t.text = "00",
        t.textColor = 16774400,
        t.x = 295,
        t.y = 193,
        t
    },
    e.txt_n9_i = function() {
        var t = new eui.Label;
        return this.txt_n9 = t,
        t.size = 14.0000000000002,
        t.text = "00",
        t.textColor = 16774400,
        t.x = 379,
        t.y = 193,
        t
    },
    e._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 504,
        t.elementsContent = [this._Image13_i(), this.txt_3_i(), this.btn_4_i(), this.txt_5_i(), this._Label1_i()],
        t
    },
    e._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_img_4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 19.9461708068848,
        t.text = "999",
        t.textColor = 16187136,
        t.x = 240,
        t.y = 12,
        t
    },
    e.btn_4_i = function() {
        var t = new eui.Image;
        return this.btn_4 = t,
        t.source = "msss_main_panel_btn4_png",
        t.x = 321,
        t.y = 1,
        t
    },
    e.txt_5_i = function() {
        var t = new eui.Label;
        return this.txt_5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 32,
        t.size = 15.9582395553589,
        t.text = "1.xxx         2.xxx        3.xxx",
        t.textColor = 15923456,
        t.visible = !0,
        t.width = 300,
        t.x = 135,
        t.y = 62,
        t
    },
    e._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 15.9582395553589,
        t.text = "分数前三：",
        t.textColor = 16777215,
        t.x = 51,
        t.y = 62,
        t
    },
    e._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_title_png",
        t.x = 83,
        t.y = 310,
        t
    },
    e.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image15_i(), this.btnClose_i(), this._Image16_i(), this.btnhelp_i()],
        t
    },
    e._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "msss_main_panel_btnclose_png",
        t.x = 16,
        t.y = 9,
        t
    },
    e._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_toptitle_png",
        t.x = 79,
        t.y = 0,
        t
    },
    e.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "msss_main_panel_btnhelp_png",
        t.x = 370,
        t.y = 12,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MakeHuiYiXiangCeSkin.exml"] = window.moonShiningStarSoul.MakeHuiYiXiangCeSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnmake", "img2", "xing1", "xing2", "xing3", "imgtxt", "score", "a", "img3", "petup1", "petup2", "petup3", "petup4", "petup5", "petup6", "select1", "select2", "select3", "select4", "select5", "select6", "selectZhu", "right", "pageup1", "pageup2", "pageup3", "pageup4", "pageup5", "pageup6", "pageup7", "pageup8", "pageup9", "icon1", "page1", "icon2", "page2", "icon3", "page3", "icon4", "page4", "icon5", "page5", "icon6", "page6", "icon7", "page7", "icon8", "page8", "icon9", "page9", "pageSelect1", "pageSelect2", "pageSelect3", "pageSelect4", "pageSelect5", "pageSelect6", "pageSelect7", "pageSelect8", "pageSelect9", "selectZhao", "left", "timesLeftText", "btnadd", "righttop", "hunli", "miyue", "xuesheng", "title", "btnback", "btnhelp", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.right_i(), this.left_i(), this.righttop_i(), this.title_i(), this.top_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "msss_pin_yong_zhu_shou_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_tuceng_10_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 382,
        t
    },
    e.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.x = 714,
        t.y = 111,
        t.elementsContent = [this._Image3_i(), this.btnmake_i(), this._Group1_i(), this._Group2_i(), this.selectZhu_i()],
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_img1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnmake_i = function() {
        var t = new eui.Image;
        return this.btnmake = t,
        t.source = "msss_make_hui_yi_xiang_ce_btnmake_png",
        t.x = 77,
        t.y = 391,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 18,
        t.y = 26,
        t.elementsContent = [this.img2_i(), this.a_i()],
        t
    },
    e.img2_i = function() {
        var t = new eui.Image;
        return this.img2 = t,
        t.source = "msss_make_hui_yi_xiang_ce_img2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.a_i = function() {
        var t = new eui.Group;
        return this.a = t,
        t.x = 19,
        t.y = 48,
        t.elementsContent = [this.xing1_i(), this.xing2_i(), this.xing3_i(), this.imgtxt_i(), this.score_i()],
        t
    },
    e.xing1_i = function() {
        var t = new eui.Image;
        return this.xing1 = t,
        t.source = "msss_main_panel_btnup_png",
        t.x = 81,
        t.y = 0,
        t
    },
    e.xing2_i = function() {
        var t = new eui.Image;
        return this.xing2 = t,
        t.source = "msss_main_panel_btnup_png",
        t.x = 106,
        t.y = 0,
        t
    },
    e.xing3_i = function() {
        var t = new eui.Image;
        return this.xing3 = t,
        t.source = "msss_main_panel_btnup_png",
        t.x = 132,
        t.y = 0,
        t
    },
    e.imgtxt_i = function() {
        var t = new eui.Image;
        return this.imgtxt = t,
        t.source = "msss_make_hui_yi_xiang_ce_imgtxt_png",
        t.x = 0,
        t.y = 4,
        t
    },
    e.score_i = function() {
        var t = new eui.Label;
        return this.score = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9806268592364,
        t.text = "XX",
        t.textColor = 16054585,
        t.x = 247,
        t.y = 3,
        t
    },
    e._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 18,
        t.y = 108,
        t.elementsContent = [this.img3_i(), this.petup1_i(), this.petup2_i(), this.petup3_i(), this.petup4_i(), this.petup5_i(), this.petup6_i(), this.select1_i(), this.select2_i(), this.select3_i(), this.select4_i(), this.select5_i(), this.select6_i()],
        t
    },
    e.img3_i = function() {
        var t = new eui.Image;
        return this.img3 = t,
        t.source = "msss_make_hui_yi_xiang_ce_img3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.petup1_i = function() {
        var t = new eui.Image;
        return this.petup1 = t,
        t.source = "msss_make_hui_yi_xiang_ce_petup1_png",
        t.x = 20,
        t.y = 51,
        t
    },
    e.petup2_i = function() {
        var t = new eui.Image;
        return this.petup2 = t,
        t.source = "msss_make_hui_yi_xiang_ce_petup2_png",
        t.x = 126,
        t.y = 51,
        t
    },
    e.petup3_i = function() {
        var t = new eui.Image;
        return this.petup3 = t,
        t.source = "msss_make_hui_yi_xiang_ce_petup3_png",
        t.x = 231,
        t.y = 51,
        t
    },
    e.petup4_i = function() {
        var t = new eui.Image;
        return this.petup4 = t,
        t.source = "msss_make_hui_yi_xiang_ce_petup4_png",
        t.x = 20,
        t.y = 146,
        t
    },
    e.petup5_i = function() {
        var t = new eui.Image;
        return this.petup5 = t,
        t.source = "msss_make_hui_yi_xiang_ce_petup5_png",
        t.x = 126,
        t.y = 146,
        t
    },
    e.petup6_i = function() {
        var t = new eui.Image;
        return this.petup6 = t,
        t.source = "msss_make_hui_yi_xiang_ce_petup6_png",
        t.x = 231,
        t.y = 146,
        t
    },
    e.select1_i = function() {
        var t = new eui.Image;
        return this.select1 = t,
        t.source = "msss_make_hui_yi_xiang_ce_select_png",
        t.x = 17,
        t.y = 48,
        t
    },
    e.select2_i = function() {
        var t = new eui.Image;
        return this.select2 = t,
        t.source = "msss_make_hui_yi_xiang_ce_select_png",
        t.x = 123,
        t.y = 48,
        t
    },
    e.select3_i = function() {
        var t = new eui.Image;
        return this.select3 = t,
        t.source = "msss_make_hui_yi_xiang_ce_select_png",
        t.x = 228,
        t.y = 48,
        t
    },
    e.select4_i = function() {
        var t = new eui.Image;
        return this.select4 = t,
        t.source = "msss_make_hui_yi_xiang_ce_select_png",
        t.x = 17,
        t.y = 143,
        t
    },
    e.select5_i = function() {
        var t = new eui.Image;
        return this.select5 = t,
        t.source = "msss_make_hui_yi_xiang_ce_select_png",
        t.x = 123,
        t.y = 143,
        t
    },
    e.select6_i = function() {
        var t = new eui.Image;
        return this.select6 = t,
        t.source = "msss_make_hui_yi_xiang_ce_select_png",
        t.x = 228,
        t.y = 143,
        t
    },
    e.selectZhu_i = function() {
        var t = new eui.Image;
        return this.selectZhu = t,
        t.height = 30,
        t.source = "msss_main_panel_btnchooseup1_png",
        t.width = 30,
        t.x = 303,
        t.y = 109,
        t
    },
    e.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.x = 59,
        t.y = 111,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.pageup1_i(), this.pageup2_i(), this.pageup3_i(), this.pageup4_i(), this.pageup5_i(), this.pageup6_i(), this.pageup7_i(), this.pageup8_i(), this.pageup9_i(), this.page1_i(), this.page2_i(), this.page3_i(), this.page4_i(), this.page5_i(), this.page6_i(), this.page7_i(), this.page8_i(), this.page9_i(), this.pageSelect1_i(), this.pageSelect2_i(), this.pageSelect3_i(), this.pageSelect4_i(), this.pageSelect5_i(), this.pageSelect6_i(), this.pageSelect7_i(), this.pageSelect8_i(), this.pageSelect9_i(), this._Image17_i(), this.selectZhao_i()],
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_leftbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_jingxiu_png",
        t.x = 23,
        t.y = 87,
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_jianxiu_png",
        t.x = 23,
        t.y = 225,
        t
    },
    e._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_yuan_png",
        t.x = 23,
        t.y = 354,
        t
    },
    e.pageup1_i = function() {
        var t = new eui.Image;
        return this.pageup1 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageup1_png",
        t.x = 73,
        t.y = 89,
        t
    },
    e.pageup2_i = function() {
        var t = new eui.Image;
        return this.pageup2 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageup2_png",
        t.x = 207,
        t.y = 89,
        t
    },
    e.pageup3_i = function() {
        var t = new eui.Image;
        return this.pageup3 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageup3_png",
        t.x = 73,
        t.y = 227,
        t
    },
    e.pageup4_i = function() {
        var t = new eui.Image;
        return this.pageup4 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageup4_png",
        t.x = 208,
        t.y = 227,
        t
    },
    e.pageup5_i = function() {
        var t = new eui.Image;
        return this.pageup5 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageup5_png",
        t.x = 343,
        t.y = 227,
        t
    },
    e.pageup6_i = function() {
        var t = new eui.Image;
        return this.pageup6 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageup6_png",
        t.x = 73,
        t.y = 356,
        t
    },
    e.pageup7_i = function() {
        var t = new eui.Image;
        return this.pageup7 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageup7_png",
        t.x = 208,
        t.y = 356,
        t
    },
    e.pageup8_i = function() {
        var t = new eui.Image;
        return this.pageup8 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageup8_png",
        t.x = 343,
        t.y = 356,
        t
    },
    e.pageup9_i = function() {
        var t = new eui.Image;
        return this.pageup9 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageup9_png",
        t.x = 478,
        t.y = 356,
        t
    },
    e.page1_i = function() {
        var t = new eui.Group;
        return this.page1 = t,
        t.x = 85,
        t.y = 153,
        t.elementsContent = [this._Image8_i(), this.icon1_i()],
        t
    },
    e._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_pagebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon1_i = function() {
        var t = new eui.Label;
        return this.icon1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99",
        t.textColor = 16774807,
        t.x = 41,
        t.y = 1,
        t
    },
    e.page2_i = function() {
        var t = new eui.Group;
        return this.page2 = t,
        t.x = 219,
        t.y = 153,
        t.elementsContent = [this._Image9_i(), this.icon2_i()],
        t
    },
    e._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_pagebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon2_i = function() {
        var t = new eui.Label;
        return this.icon2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99",
        t.textColor = 16774807,
        t.x = 41,
        t.y = 1,
        t
    },
    e.page3_i = function() {
        var t = new eui.Group;
        return this.page3 = t,
        t.x = 85,
        t.y = 291,
        t.elementsContent = [this._Image10_i(), this.icon3_i()],
        t
    },
    e._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_pagebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon3_i = function() {
        var t = new eui.Label;
        return this.icon3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99",
        t.textColor = 16774807,
        t.x = 41,
        t.y = 2,
        t
    },
    e.page4_i = function() {
        var t = new eui.Group;
        return this.page4 = t,
        t.x = 219,
        t.y = 291,
        t.elementsContent = [this._Image11_i(), this.icon4_i()],
        t
    },
    e._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_pagebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon4_i = function() {
        var t = new eui.Label;
        return this.icon4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99",
        t.textColor = 16774807,
        t.x = 41,
        t.y = 1,
        t
    },
    e.page5_i = function() {
        var t = new eui.Group;
        return this.page5 = t,
        t.x = 354,
        t.y = 291,
        t.elementsContent = [this._Image12_i(), this.icon5_i()],
        t
    },
    e._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_pagebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon5_i = function() {
        var t = new eui.Label;
        return this.icon5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99",
        t.textColor = 16774807,
        t.x = 41,
        t.y = 1,
        t
    },
    e.page6_i = function() {
        var t = new eui.Group;
        return this.page6 = t,
        t.x = 85,
        t.y = 420,
        t.elementsContent = [this._Image13_i(), this.icon6_i()],
        t
    },
    e._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_pagebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon6_i = function() {
        var t = new eui.Label;
        return this.icon6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99",
        t.textColor = 16774807,
        t.x = 41,
        t.y = 1,
        t
    },
    e.page7_i = function() {
        var t = new eui.Group;
        return this.page7 = t,
        t.x = 219,
        t.y = 420,
        t.elementsContent = [this._Image14_i(), this.icon7_i()],
        t
    },
    e._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_pagebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon7_i = function() {
        var t = new eui.Label;
        return this.icon7 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99",
        t.textColor = 16774807,
        t.x = 41,
        t.y = 1,
        t
    },
    e.page8_i = function() {
        var t = new eui.Group;
        return this.page8 = t,
        t.x = 354,
        t.y = 420,
        t.elementsContent = [this._Image15_i(), this.icon8_i()],
        t
    },
    e._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_pagebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon8_i = function() {
        var t = new eui.Label;
        return this.icon8 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99",
        t.textColor = 16774807,
        t.x = 41,
        t.y = 1,
        t
    },
    e.page9_i = function() {
        var t = new eui.Group;
        return this.page9 = t,
        t.visible = !0,
        t.x = 489,
        t.y = 420,
        t.elementsContent = [this._Image16_i(), this.icon9_i()],
        t
    },
    e._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_pagebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon9_i = function() {
        var t = new eui.Label;
        return this.icon9 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99",
        t.textColor = 16774807,
        t.visible = !0,
        t.x = 41,
        t.y = 1,
        t
    },
    e.pageSelect1_i = function() {
        var t = new eui.Image;
        return this.pageSelect1 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageselect_png",
        t.x = 59,
        t.y = 75,
        t
    },
    e.pageSelect2_i = function() {
        var t = new eui.Image;
        return this.pageSelect2 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageselect_png",
        t.x = 194,
        t.y = 75,
        t
    },
    e.pageSelect3_i = function() {
        var t = new eui.Image;
        return this.pageSelect3 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageselect_png",
        t.x = 59,
        t.y = 214,
        t
    },
    e.pageSelect4_i = function() {
        var t = new eui.Image;
        return this.pageSelect4 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageselect_png",
        t.x = 194,
        t.y = 214,
        t
    },
    e.pageSelect5_i = function() {
        var t = new eui.Image;
        return this.pageSelect5 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageselect_png",
        t.x = 329,
        t.y = 214,
        t
    },
    e.pageSelect6_i = function() {
        var t = new eui.Image;
        return this.pageSelect6 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageselect_png",
        t.visible = !0,
        t.x = 59,
        t.y = 343,
        t
    },
    e.pageSelect7_i = function() {
        var t = new eui.Image;
        return this.pageSelect7 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageselect_png",
        t.x = 194,
        t.y = 343,
        t
    },
    e.pageSelect8_i = function() {
        var t = new eui.Image;
        return this.pageSelect8 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageselect_png",
        t.x = 329,
        t.y = 343,
        t
    },
    e.pageSelect9_i = function() {
        var t = new eui.Image;
        return this.pageSelect9 = t,
        t.source = "msss_make_hui_yi_xiang_ce_pageselect_png",
        t.x = 464,
        t.y = 343,
        t
    },
    e._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_xuanze_png",
        t.x = 20,
        t.y = 26,
        t
    },
    e.selectZhao_i = function() {
        var t = new eui.Image;
        return this.selectZhao = t,
        t.height = 30,
        t.source = "msss_main_panel_btnchooseup1_png",
        t.visible = !0,
        t.width = 30,
        t.x = 574,
        t.y = 28,
        t
    },
    e.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.x = 897,
        t.y = 15,
        t.elementsContent = [this._Image18_i(), this.timesLeftText_i(), this._Image19_i(), this.btnadd_i()],
        t
    },
    e._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_txtbg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.timesLeftText_i = function() {
        var t = new eui.Label;
        return this.timesLeftText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99",
        t.textColor = 16775327,
        t.x = 159,
        t.y = 0,
        t
    },
    e._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_add_png",
        t.x = 185,
        t.y = 0,
        t
    },
    e.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "msss_main_panel_add_y_png",
        t.x = 185,
        t.y = 0,
        t
    },
    e.title_i = function() {
        var t = new eui.Group;
        return this.title = t,
        t.x = 169,
        t.y = 53,
        t.elementsContent = [this._Image20_i(), this.hunli_i(), this.miyue_i(), this.xuesheng_i()],
        t
    },
    e._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_yljsh_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    e.hunli_i = function() {
        var t = new eui.Image;
        return this.hunli = t,
        t.source = "msss_make_hui_yi_xiang_ce_hunli_png",
        t.visible = !0,
        t.x = 417,
        t.y = 13,
        t
    },
    e.miyue_i = function() {
        var t = new eui.Image;
        return this.miyue = t,
        t.source = "msss_make_hui_yi_xiang_ce_miyue_png",
        t.x = 431,
        t.y = 13,
        t
    },
    e.xuesheng_i = function() {
        var t = new eui.Image;
        return this.xuesheng = t,
        t.source = "msss_make_hui_yi_xiang_ce_xuesheng_png",
        t.x = 430,
        t.y = 13,
        t
    },
    e.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image21_i(), this.btnback_i(), this._Image22_i(), this.btnhelp_i()],
        t
    },
    e._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "msss_main_panel_btnclose_png",
        t.x = 18,
        t.y = 10,
        t
    },
    e._Image22_i = function() {
        var t = new eui.Image;
        return t.source = "msss_make_hui_yi_xiang_ce_toptitle_png",
        t.x = 78,
        t.y = 0,
        t
    },
    e.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "msss_main_panel_btnhelp_png",
        t.x = 283,
        t.y = 12,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NaHuiZhaoPianSkin.exml"] = window.moonShiningStarSoul.NaHuiZhaoPianSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnna", "imgxing1", "imgxing2", "imgxing3", "imgxing4", "btnfight1", "btnfight2", "btnfight3", "btnfight4", "gou1", "gou2", "gou3", "gou4", "img_up1", "img_up2", "img_up3", "img_up4", "img_up5", "img_up6", "img_up7", "img_up8", "img_up9", "txt_1", "txt_2", "txt_3", "txt_4", "txt_5", "txt_6", "txt_7", "txt_8", "txt_9", "img_down1", "img_down2", "img_down3", "img_down4", "img_down5", "img_down6", "img_down7", "img_down8", "img_down9", "btnadd_1", "btnadd_2", "btnadd_3", "btnadd_4", "btnadd_5", "btnadd_6", "btnadd_7", "btnadd_8", "btnadd_9", "txt_l1", "txt_l2", "btnpet", "btncure", "grp_left", "timesLeftText", "btnadd", "righttop", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.grp_left_i(), this.righttop_i(), this.top_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "msss_pin_yong_zhu_shou_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 26,
        t.y = 96,
        t.elementsContent = [this._Image2_i(), this.btnna_i(), this.imgxing1_i(), this.imgxing2_i(), this.imgxing3_i(), this.imgxing4_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this.btnfight1_i(), this.btnfight2_i(), this.btnfight3_i(), this.btnfight4_i(), this.gou1_i(), this.gou2_i(), this.gou3_i(), this.gou4_i()],
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_img_rbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnna_i = function() {
        var t = new eui.Image;
        return this.btnna = t,
        t.source = "msss_na_hui_zhao_pian_btnna_png",
        t.x = 415,
        t.y = 53,
        t
    },
    e.imgxing1_i = function() {
        var t = new eui.Image;
        return this.imgxing1 = t,
        t.source = "msss_main_panel_btnup_png",
        t.visible = !1,
        t.x = 233,
        t.y = 57,
        t
    },
    e.imgxing2_i = function() {
        var t = new eui.Image;
        return this.imgxing2 = t,
        t.source = "msss_main_panel_btnup_png",
        t.visible = !1,
        t.x = 259,
        t.y = 57,
        t
    },
    e.imgxing3_i = function() {
        var t = new eui.Image;
        return this.imgxing3 = t,
        t.source = "msss_main_panel_btnup_png",
        t.visible = !1,
        t.x = 284,
        t.y = 57,
        t
    },
    e.imgxing4_i = function() {
        var t = new eui.Image;
        return this.imgxing4 = t,
        t.source = "msss_main_panel_btnup_png",
        t.visible = !1,
        t.x = 309,
        t.y = 57,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.x = 233,
        t.y = 57,
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.x = 259,
        t.y = 57,
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.x = 284,
        t.y = 57,
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.x = 309,
        t.y = 57,
        t
    },
    e._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_imgpet1_png",
        t.x = 25,
        t.y = 124,
        t
    },
    e._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_imgpet2_png",
        t.x = 25,
        t.y = 213,
        t
    },
    e._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_imgpet3_png",
        t.x = 25,
        t.y = 301,
        t
    },
    e._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_imgpet4_png",
        t.x = 25,
        t.y = 390,
        t
    },
    e.btnfight1_i = function() {
        var t = new eui.Image;
        return this.btnfight1 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 318,
        t.y = 136,
        t
    },
    e.btnfight2_i = function() {
        var t = new eui.Image;
        return this.btnfight2 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 318,
        t.y = 225,
        t
    },
    e.btnfight3_i = function() {
        var t = new eui.Image;
        return this.btnfight3 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 318,
        t.y = 314,
        t
    },
    e.btnfight4_i = function() {
        var t = new eui.Image;
        return this.btnfight4 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 318,
        t.y = 403,
        t
    },
    e.gou1_i = function() {
        var t = new eui.Image;
        return this.gou1 = t,
        t.source = "msss_na_hui_zhao_pian_get1_png",
        t.visible = !0,
        t.x = 26,
        t.y = 125,
        t
    },
    e.gou2_i = function() {
        var t = new eui.Image;
        return this.gou2 = t,
        t.source = "msss_na_hui_zhao_pian_get1_png",
        t.visible = !0,
        t.x = 26,
        t.y = 214,
        t
    },
    e.gou3_i = function() {
        var t = new eui.Image;
        return this.gou3 = t,
        t.source = "msss_na_hui_zhao_pian_get1_png",
        t.x = 26,
        t.y = 303,
        t
    },
    e.gou4_i = function() {
        var t = new eui.Image;
        return this.gou4 = t,
        t.height = 89.629,
        t.source = "msss_na_hui_zhao_pian_get1_png",
        t.visible = !0,
        t.x = 26,
        t.y = 392,
        t
    },
    e.grp_left_i = function() {
        var t = new eui.Group;
        return this.grp_left = t,
        t.x = 109,
        t.y = 96,
        t.elementsContent = [this._Image11_i(), this.img_up1_i(), this.img_up2_i(), this.img_up3_i(), this.img_up4_i(), this.img_up5_i(), this.img_up6_i(), this.img_up7_i(), this.img_up8_i(), this.img_up9_i(), this.txt_1_i(), this.txt_2_i(), this.txt_3_i(), this.txt_4_i(), this.txt_5_i(), this.txt_6_i(), this.txt_7_i(), this.txt_8_i(), this.txt_9_i(), this.img_down1_i(), this.img_down2_i(), this.img_down3_i(), this.img_down4_i(), this.img_down5_i(), this.img_down6_i(), this.img_down7_i(), this.img_down8_i(), this.img_down9_i(), this.btnadd_1_i(), this.btnadd_2_i(), this.btnadd_3_i(), this.btnadd_4_i(), this.btnadd_5_i(), this.btnadd_6_i(), this.btnadd_7_i(), this.btnadd_8_i(), this.btnadd_9_i(), this._Image12_i(), this.txt_l1_i(), this._Image13_i(), this.txt_l2_i(), this._Image14_i(), this.btnpet_i(), this.btncure_i()],
        t
    },
    e._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_img_l1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.img_up1_i = function() {
        var t = new eui.Image;
        return this.img_up1 = t,
        t.source = "msss_main_panel_img_n1up_png",
        t.visible = !0,
        t.x = 45,
        t.y = 92,
        t
    },
    e.img_up2_i = function() {
        var t = new eui.Image;
        return this.img_up2 = t,
        t.source = "msss_main_panel_img_n2up_png",
        t.x = 144,
        t.y = 92,
        t
    },
    e.img_up3_i = function() {
        var t = new eui.Image;
        return this.img_up3 = t,
        t.source = "msss_main_panel_img_n3up_png",
        t.x = 45,
        t.y = 235,
        t
    },
    e.img_up4_i = function() {
        var t = new eui.Image;
        return this.img_up4 = t,
        t.source = "msss_main_panel_img_n4up_png",
        t.x = 144,
        t.y = 235,
        t
    },
    e.img_up5_i = function() {
        var t = new eui.Image;
        return this.img_up5 = t,
        t.source = "msss_main_panel_img_n5up_png",
        t.x = 243,
        t.y = 235,
        t
    },
    e.img_up6_i = function() {
        var t = new eui.Image;
        return this.img_up6 = t,
        t.source = "msss_main_panel_img_n6up_png",
        t.x = 45,
        t.y = 377,
        t
    },
    e.img_up7_i = function() {
        var t = new eui.Image;
        return this.img_up7 = t,
        t.source = "msss_main_panel_img_n7up_png",
        t.x = 144,
        t.y = 377,
        t
    },
    e.img_up8_i = function() {
        var t = new eui.Image;
        return this.img_up8 = t,
        t.source = "msss_main_panel_img_n8up_png",
        t.x = 243,
        t.y = 377,
        t
    },
    e.img_up9_i = function() {
        var t = new eui.Image;
        return this.img_up9 = t,
        t.source = "msss_main_panel_img_n9up_png",
        t.x = 342,
        t.y = 377,
        t
    },
    e.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.size = 13.987553412276,
        t.text = "00",
        t.textColor = 16774656,
        t.x = 87,
        t.y = 139,
        t
    },
    e.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.size = 13.987553412276,
        t.text = "00",
        t.textColor = 16774656,
        t.x = 186,
        t.y = 139,
        t
    },
    e.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.size = 13.987553412276,
        t.text = "00",
        t.textColor = 16774656,
        t.x = 87,
        t.y = 282,
        t
    },
    e.txt_4_i = function() {
        var t = new eui.Label;
        return this.txt_4 = t,
        t.size = 13.987553412276,
        t.text = "00",
        t.textColor = 16774656,
        t.x = 186,
        t.y = 282,
        t
    },
    e.txt_5_i = function() {
        var t = new eui.Label;
        return this.txt_5 = t,
        t.size = 13.987553412276,
        t.text = "00",
        t.textColor = 16774656,
        t.x = 285,
        t.y = 282,
        t
    },
    e.txt_6_i = function() {
        var t = new eui.Label;
        return this.txt_6 = t,
        t.size = 13.987553412276,
        t.text = "00",
        t.textColor = 16774656,
        t.x = 87,
        t.y = 425,
        t
    },
    e.txt_7_i = function() {
        var t = new eui.Label;
        return this.txt_7 = t,
        t.size = 13.987553412276,
        t.text = "00",
        t.textColor = 16774656,
        t.x = 186,
        t.y = 425,
        t
    },
    e.txt_8_i = function() {
        var t = new eui.Label;
        return this.txt_8 = t,
        t.size = 13.987553412276,
        t.text = "00",
        t.textColor = 16774656,
        t.x = 285,
        t.y = 425,
        t
    },
    e.txt_9_i = function() {
        var t = new eui.Label;
        return this.txt_9 = t,
        t.size = 13.987553412276,
        t.text = "00",
        t.textColor = 16774656,
        t.x = 384,
        t.y = 425,
        t
    },
    e.img_down1_i = function() {
        var t = new eui.Image;
        return this.img_down1 = t,
        t.source = "msss_main_panel_img_n1down_png",
        t.visible = !0,
        t.x = 45,
        t.y = 92,
        t
    },
    e.img_down2_i = function() {
        var t = new eui.Image;
        return this.img_down2 = t,
        t.source = "msss_main_panel_img_n2down_png",
        t.x = 144,
        t.y = 92,
        t
    },
    e.img_down3_i = function() {
        var t = new eui.Image;
        return this.img_down3 = t,
        t.source = "msss_main_panel_img_n3down_png",
        t.x = 45,
        t.y = 235,
        t
    },
    e.img_down4_i = function() {
        var t = new eui.Image;
        return this.img_down4 = t,
        t.source = "msss_main_panel_img_n4down_png",
        t.x = 144,
        t.y = 235,
        t
    },
    e.img_down5_i = function() {
        var t = new eui.Image;
        return this.img_down5 = t,
        t.source = "msss_main_panel_img_n5down_png",
        t.x = 243,
        t.y = 235,
        t
    },
    e.img_down6_i = function() {
        var t = new eui.Image;
        return this.img_down6 = t,
        t.source = "msss_main_panel_img_n6down_png",
        t.visible = !0,
        t.x = 45,
        t.y = 377,
        t
    },
    e.img_down7_i = function() {
        var t = new eui.Image;
        return this.img_down7 = t,
        t.source = "msss_main_panel_img_n7down_png",
        t.x = 144,
        t.y = 377,
        t
    },
    e.img_down8_i = function() {
        var t = new eui.Image;
        return this.img_down8 = t,
        t.source = "msss_main_panel_img_n8down_png",
        t.x = 243,
        t.y = 377,
        t
    },
    e.img_down9_i = function() {
        var t = new eui.Image;
        return this.img_down9 = t,
        t.source = "msss_main_panel_img_n9down_png",
        t.x = 342,
        t.y = 377,
        t
    },
    e.btnadd_1_i = function() {
        var t = new eui.Image;
        return this.btnadd_1 = t,
        t.source = "msss_na_hui_zhao_pian_btnadd_png",
        t.x = 47,
        t.y = 156,
        t
    },
    e.btnadd_2_i = function() {
        var t = new eui.Image;
        return this.btnadd_2 = t,
        t.source = "msss_na_hui_zhao_pian_btnadd_png",
        t.x = 146,
        t.y = 156,
        t
    },
    e.btnadd_3_i = function() {
        var t = new eui.Image;
        return this.btnadd_3 = t,
        t.source = "msss_na_hui_zhao_pian_btnadd_png",
        t.x = 47,
        t.y = 299,
        t
    },
    e.btnadd_4_i = function() {
        var t = new eui.Image;
        return this.btnadd_4 = t,
        t.source = "msss_na_hui_zhao_pian_btnadd_png",
        t.x = 146,
        t.y = 299,
        t
    },
    e.btnadd_5_i = function() {
        var t = new eui.Image;
        return this.btnadd_5 = t,
        t.source = "msss_na_hui_zhao_pian_btnadd_png",
        t.x = 245,
        t.y = 299,
        t
    },
    e.btnadd_6_i = function() {
        var t = new eui.Image;
        return this.btnadd_6 = t,
        t.source = "msss_na_hui_zhao_pian_btnadd_png",
        t.x = 47,
        t.y = 441,
        t
    },
    e.btnadd_7_i = function() {
        var t = new eui.Image;
        return this.btnadd_7 = t,
        t.source = "msss_na_hui_zhao_pian_btnadd_png",
        t.x = 146,
        t.y = 441,
        t
    },
    e.btnadd_8_i = function() {
        var t = new eui.Image;
        return this.btnadd_8 = t,
        t.source = "msss_na_hui_zhao_pian_btnadd_png",
        t.x = 245,
        t.y = 441,
        t
    },
    e.btnadd_9_i = function() {
        var t = new eui.Image;
        return this.btnadd_9 = t,
        t.source = "msss_na_hui_zhao_pian_btnadd_png",
        t.x = 344,
        t.y = 441,
        t
    },
    e._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_img_l2_png",
        t.x = 15,
        t.y = 50,
        t
    },
    e.txt_l1_i = function() {
        var t = new eui.Label;
        return this.txt_l1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14.9964347022316,
        t.text = "XX%",
        t.textColor = 16448395,
        t.x = 305,
        t.y = 57,
        t
    },
    e._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_img_l3_png",
        t.x = 15,
        t.y = 193,
        t
    },
    e.txt_l2_i = function() {
        var t = new eui.Label;
        return this.txt_l2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14.9964347022316,
        t.text = "XX%",
        t.textColor = 16448395,
        t.x = 305,
        t.y = 200,
        t
    },
    e._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_img_l4_png",
        t.x = 15,
        t.y = 335,
        t
    },
    e.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "msss_hui_yi_shen_qian_btnpet_png",
        t.x = -73.99999999999999,
        t.y = 157,
        t
    },
    e.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "msss_hui_yi_shen_qian_btncure_png",
        t.x = -73.99999999999999,
        t.y = 231.99999999999994,
        t
    },
    e.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.right = 22,
        t.y = 15,
        t.elementsContent = [this._Image15_i(), this.timesLeftText_i(), this._Image16_i(), this.btnadd_i()],
        t
    },
    e._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_txtbg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.timesLeftText_i = function() {
        var t = new eui.Label;
        return this.timesLeftText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99",
        t.textColor = 16775327,
        t.x = 159,
        t.y = 0,
        t
    },
    e._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_add_png",
        t.x = 185,
        t.y = 0,
        t
    },
    e.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "msss_main_panel_add_y_png",
        t.x = 185,
        t.y = 0,
        t
    },
    e.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image17_i(), this.btnback_i(), this._Image18_i()],
        t
    },
    e._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "msss_main_panel_btnclose_png",
        t.x = 18,
        t.y = 10,
        t
    },
    e._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_toptitle_png",
        t.x = 78,
        t.y = 0,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PhotoSkin.exml"] = window.moonShiningStarSoul.PhotoSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["img"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.img_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.source = "msss_jie_suan_pop_img_z1_jpg",
        t.x = 300,
        t.y = 150,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PinYongZhuShouSkin.exml"] = window.moonShiningStarSoul.PinYongZhuShouSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgxing1", "imgxing2", "imgxing3", "btnget", "btnfight1", "btnfight2", "btnfight3", "img_get1", "img_get2", "img_get3", "right", "btnpin1", "haspin1", "btnpin2", "haspin2", "btnpin3", "haspin3", "btnpin4", "haspin4", "btnpin5", "haspin5", "btnpin6", "haspin6", "btnpet", "btncure", "left", "timesLeftText", "btnaddtime", "itemNumText", "btnadditem", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.right_i(), this.left_i(), this._Group1_i(), this.top_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "msss_pin_yong_zhu_shou_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.right = 0,
        t.visible = !0,
        t.y = 86,
        t.elementsContent = [this._Image2_i(), this.imgxing1_i(), this._Image3_i(), this.imgxing2_i(), this._Image4_i(), this.imgxing3_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.btnget_i(), this.btnfight1_i(), this.btnfight2_i(), this.btnfight3_i(), this.img_get1_i(), this.img_get2_i(), this.img_get3_i()],
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.imgxing1_i = function() {
        var t = new eui.Image;
        return this.imgxing1 = t,
        t.source = "msss_main_panel_btnup_png",
        t.visible = !1,
        t.x = 265,
        t.y = 62,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.x = 265,
        t.y = 62,
        t
    },
    e.imgxing2_i = function() {
        var t = new eui.Image;
        return this.imgxing2 = t,
        t.source = "msss_main_panel_btnup_png",
        t.visible = !1,
        t.x = 288,
        t.y = 62,
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.visible = !0,
        t.x = 288,
        t.y = 62,
        t
    },
    e.imgxing3_i = function() {
        var t = new eui.Image;
        return this.imgxing3 = t,
        t.source = "msss_main_panel_btnup_png",
        t.visible = !1,
        t.x = 311,
        t.y = 62,
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_btndown_png",
        t.x = 311,
        t.y = 62,
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_3_png",
        t.x = 15,
        t.y = 361,
        t
    },
    e._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_2_png",
        t.x = 16,
        t.y = 231,
        t
    },
    e._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_1_png",
        t.x = 16,
        t.y = 101,
        t
    },
    e.btnget_i = function() {
        var t = new eui.Image;
        return this.btnget = t,
        t.height = 31,
        t.source = "msss_pin_yong_zhu_shou_btnget_png",
        t.width = 69,
        t.x = 341,
        t.y = 58,
        t
    },
    e.btnfight1_i = function() {
        var t = new eui.Image;
        return this.btnfight1 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 232,
        t.y = 131,
        t
    },
    e.btnfight2_i = function() {
        var t = new eui.Image;
        return this.btnfight2 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 232,
        t.y = 260,
        t
    },
    e.btnfight3_i = function() {
        var t = new eui.Image;
        return this.btnfight3 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 232,
        t.y = 389,
        t
    },
    e.img_get1_i = function() {
        var t = new eui.Image;
        return this.img_get1 = t,
        t.source = "msss_pin_yong_zhu_shou_img_get1_png",
        t.visible = !0,
        t.x = 17,
        t.y = 103,
        t
    },
    e.img_get2_i = function() {
        var t = new eui.Image;
        return this.img_get2 = t,
        t.source = "msss_pin_yong_zhu_shou_img_get1_png",
        t.x = 17,
        t.y = 233,
        t
    },
    e.img_get3_i = function() {
        var t = new eui.Image;
        return this.img_get3 = t,
        t.source = "msss_pin_yong_zhu_shou_img_get1_png",
        t.x = 17,
        t.y = 363,
        t
    },
    e.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.left = 45,
        t.y = 86,
        t.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this.btnpin1_i(), this.haspin1_i(), this.btnpin2_i(), this.haspin2_i(), this.btnpin3_i(), this.haspin3_i(), this.btnpin4_i(), this.haspin4_i(), this.btnpin5_i(), this.haspin5_i(), this.btnpin6_i(), this.haspin6_i(), this.btnpet_i(), this.btncure_i()],
        t
    },
    e._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_lbg_png",
        t.x = 74,
        t.y = 0,
        t
    },
    e._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_l1_png",
        t.visible = !0,
        t.x = 90,
        t.y = 102,
        t
    },
    e._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_l2_png",
        t.x = 356,
        t.y = 102,
        t
    },
    e._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_l3_png",
        t.x = 90,
        t.y = 232,
        t
    },
    e._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_l4_png",
        t.x = 356,
        t.y = 232,
        t
    },
    e._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_l5_png",
        t.visible = !0,
        t.x = 90,
        t.y = 362,
        t
    },
    e._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_img_l6_png",
        t.x = 356,
        t.y = 362,
        t
    },
    e._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "50",
        t.textColor = 16777215,
        t.x = 224,
        t.y = 186,
        t
    },
    e._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "110",
        t.textColor = 16777215,
        t.x = 490,
        t.y = 186,
        t
    },
    e._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "100",
        t.textColor = 16777215,
        t.x = 224,
        t.y = 316,
        t
    },
    e._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "85",
        t.textColor = 16777215,
        t.x = 490,
        t.y = 316,
        t
    },
    e._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "60",
        t.textColor = 16777215,
        t.x = 224,
        t.y = 446,
        t
    },
    e._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "30",
        t.textColor = 16777215,
        t.x = 490,
        t.y = 446,
        t
    },
    e.btnpin1_i = function() {
        var t = new eui.Image;
        return this.btnpin1 = t,
        t.source = "msss_pin_yong_zhu_shou_btnpin1_png",
        t.visible = !0,
        t.x = 281,
        t.y = 178,
        t
    },
    e.haspin1_i = function() {
        var t = new eui.Image;
        return this.haspin1 = t,
        t.source = "msss_pin_yong_zhu_shou_haspin_1_png",
        t.visible = !0,
        t.x = 281,
        t.y = 178,
        t
    },
    e.btnpin2_i = function() {
        var t = new eui.Image;
        return this.btnpin2 = t,
        t.source = "msss_pin_yong_zhu_shou_btnpin1_png",
        t.x = 547,
        t.y = 178,
        t
    },
    e.haspin2_i = function() {
        var t = new eui.Image;
        return this.haspin2 = t,
        t.source = "msss_pin_yong_zhu_shou_haspin_1_png",
        t.x = 547,
        t.y = 178,
        t
    },
    e.btnpin3_i = function() {
        var t = new eui.Image;
        return this.btnpin3 = t,
        t.source = "msss_pin_yong_zhu_shou_btnpin1_png",
        t.x = 281,
        t.y = 308,
        t
    },
    e.haspin3_i = function() {
        var t = new eui.Image;
        return this.haspin3 = t,
        t.source = "msss_pin_yong_zhu_shou_haspin_1_png",
        t.x = 281,
        t.y = 308,
        t
    },
    e.btnpin4_i = function() {
        var t = new eui.Image;
        return this.btnpin4 = t,
        t.source = "msss_pin_yong_zhu_shou_btnpin1_png",
        t.x = 547,
        t.y = 308,
        t
    },
    e.haspin4_i = function() {
        var t = new eui.Image;
        return this.haspin4 = t,
        t.source = "msss_pin_yong_zhu_shou_haspin_1_png",
        t.x = 547,
        t.y = 308,
        t
    },
    e.btnpin5_i = function() {
        var t = new eui.Image;
        return this.btnpin5 = t,
        t.source = "msss_pin_yong_zhu_shou_btnpin1_png",
        t.x = 281,
        t.y = 438,
        t
    },
    e.haspin5_i = function() {
        var t = new eui.Image;
        return this.haspin5 = t,
        t.source = "msss_pin_yong_zhu_shou_haspin_1_png",
        t.x = 281,
        t.y = 438,
        t
    },
    e.btnpin6_i = function() {
        var t = new eui.Image;
        return this.btnpin6 = t,
        t.source = "msss_pin_yong_zhu_shou_btnpin1_png",
        t.x = 547,
        t.y = 438,
        t
    },
    e.haspin6_i = function() {
        var t = new eui.Image;
        return this.haspin6 = t,
        t.source = "msss_pin_yong_zhu_shou_haspin_1_png",
        t.x = 547,
        t.y = 438,
        t
    },
    e.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "msss_hui_yi_shen_qian_btnpet_png",
        t.x = 0,
        t.y = 167,
        t
    },
    e.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "msss_hui_yi_shen_qian_btncure_png",
        t.x = 0,
        t.y = 242,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.y = 15,
        t.elementsContent = [this._Image16_i(), this.timesLeftText_i(), this._Image17_i(), this.btnaddtime_i(), this._Image18_i(), this.itemNumText_i(), this._Image19_i(), this.btnadditem_i()],
        t
    },
    e._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_txtbg1_png",
        t.x = 196,
        t.y = 0,
        t
    },
    e.timesLeftText_i = function() {
        var t = new eui.Label;
        return this.timesLeftText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99",
        t.textColor = 16775327,
        t.x = 355,
        t.y = 0,
        t
    },
    e._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_add_png",
        t.x = 381,
        t.y = 0,
        t
    },
    e.btnaddtime_i = function() {
        var t = new eui.Image;
        return this.btnaddtime = t,
        t.source = "msss_main_panel_add_y_png",
        t.x = 381,
        t.y = 0,
        t
    },
    e._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_txtbg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.itemNumText_i = function() {
        var t = new eui.Label;
        return this.itemNumText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 16775327,
        t.x = 113,
        t.y = 0,
        t
    },
    e._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_add_png",
        t.x = 150,
        t.y = 0,
        t
    },
    e.btnadditem_i = function() {
        var t = new eui.Image;
        return this.btnadditem = t,
        t.source = "msss_main_panel_add_y_png",
        t.x = 150,
        t.y = 0,
        t
    },
    e.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image20_i(), this.btnback_i(), this._Image21_i()],
        t
    },
    e._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "msss_main_panel_btnclose_png",
        t.x = 18,
        t.y = 10,
        t
    },
    e._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "msss_pin_yong_zhu_shou_toptitle_png",
        t.x = 78,
        t.y = 0,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/UpgradeAbilitySkin.exml"] = window.moonShiningStarSoul.UpgradeAbilitySkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["icon_ke", "icon_wu", "icon_te", "btndui_0", "btndui_1", "btndui_2", "btnfight_0", "btnfight_1", "btnfight_2", "get1", "get2", "get3", "timeLeftText", "btnaddtimes", "itemNumText", "btnadditem", "btnpet", "btncure", "grp_btns", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.grp_btns_i(), this.top_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "msss_upgrade_ability_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.icon_ke_i(), this.icon_wu_i(), this.icon_te_i(), this.btndui_0_i(), this.btndui_1_i(), this.btndui_2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.btnfight_0_i(), this.btnfight_1_i(), this.btnfight_2_i(), this._Image6_i(), this.get1_i(), this.get2_i(), this.get3_i()],
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "msss_upgrade_ability_img_rbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    e.icon_ke_i = function() {
        var t = new eui.Image;
        return this.icon_ke = t,
        t.source = "msss_upgrade_ability_icon_ke_png",
        t.x = 38,
        t.y = 90,
        t
    },
    e.icon_wu_i = function() {
        var t = new eui.Image;
        return this.icon_wu = t,
        t.source = "msss_upgrade_ability_icon_wu_png",
        t.x = 194,
        t.y = 90,
        t
    },
    e.icon_te_i = function() {
        var t = new eui.Image;
        return this.icon_te = t,
        t.source = "msss_upgrade_ability_icon_te_png",
        t.x = 349,
        t.y = 90,
        t
    },
    e.btndui_0_i = function() {
        var t = new eui.Image;
        return this.btndui_0 = t,
        t.source = "msss_upgrade_ability_btndui_png",
        t.x = 38,
        t.y = 246,
        t
    },
    e.btndui_1_i = function() {
        var t = new eui.Image;
        return this.btndui_1 = t,
        t.source = "msss_upgrade_ability_btndui_png",
        t.x = 194,
        t.y = 246,
        t
    },
    e.btndui_2_i = function() {
        var t = new eui.Image;
        return this.btndui_2 = t,
        t.source = "msss_upgrade_ability_btndui_png",
        t.x = 349,
        t.y = 246,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "msss_upgrade_ability_img_4_png",
        t.x = 50,
        t.y = 384,
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "msss_upgrade_ability_img_5_png",
        t.x = 50,
        t.y = 461,
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "msss_upgrade_ability_img_6_png",
        t.x = 50,
        t.y = 539,
        t
    },
    e.btnfight_0_i = function() {
        var t = new eui.Image;
        return this.btnfight_0 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 297,
        t.y = 388,
        t
    },
    e.btnfight_1_i = function() {
        var t = new eui.Image;
        return this.btnfight_1 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 297,
        t.y = 465,
        t
    },
    e.btnfight_2_i = function() {
        var t = new eui.Image;
        return this.btnfight_2 = t,
        t.source = "msss_pin_yong_zhu_shou_btnfight1_png",
        t.x = 297,
        t.y = 543,
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "msss_upgrade_ability_img_r1_png",
        t.x = 33,
        t.y = 318,
        t
    },
    e.get1_i = function() {
        var t = new eui.Image;
        return this.get1 = t,
        t.source = "msss_upgrade_ability_get1_png",
        t.x = 38,
        t.y = 162,
        t
    },
    e.get2_i = function() {
        var t = new eui.Image;
        return this.get2 = t,
        t.source = "msss_upgrade_ability_get1_png",
        t.x = 194,
        t.y = 162,
        t
    },
    e.get3_i = function() {
        var t = new eui.Image;
        return this.get3 = t,
        t.source = "msss_upgrade_ability_get1_png",
        t.x = 349,
        t.y = 162,
        t
    },
    e._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 908,
        t.y = 15,
        t.elementsContent = [this._Image7_i(), this.timeLeftText_i(), this._Image8_i(), this.btnaddtimes_i()],
        t
    },
    e._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "msss_na_hui_zhao_pian_txtbg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99",
        t.textColor = 16775327,
        t.x = 159,
        t.y = 0,
        t
    },
    e._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_add_png",
        t.x = 185,
        t.y = 0,
        t
    },
    e.btnaddtimes_i = function() {
        var t = new eui.Image;
        return this.btnaddtimes = t,
        t.source = "msss_main_panel_add_y_png",
        t.x = 185,
        t.y = 0,
        t
    },
    e._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 695,
        t.y = 15,
        t.elementsContent = [this._Image9_i(), this.itemNumText_i(), this._Image10_i(), this.btnadditem_i()],
        t
    },
    e._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "msss_upgrade_ability_txtbg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.itemNumText_i = function() {
        var t = new eui.Label;
        return this.itemNumText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 16775327,
        t.x = 130,
        t.y = 0,
        t
    },
    e._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_add_png",
        t.x = 167,
        t.y = 0,
        t
    },
    e.btnadditem_i = function() {
        var t = new eui.Image;
        return this.btnadditem = t,
        t.source = "msss_main_panel_add_y_png",
        t.x = 167,
        t.y = 0,
        t
    },
    e.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 35,
        t.y = 253,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    e.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "msss_hui_yi_shen_qian_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "msss_hui_yi_shen_qian_btncure_png",
        t.visible = !0,
        t.x = 0,
        t.y = 75,
        t
    },
    e.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image11_i(), this.btnback_i(), this._Image12_i()],
        t
    },
    e._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "msss_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "msss_main_panel_btnclose_png",
        t.x = 18,
        t.y = 10,
        t
    },
    e._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "msss_upgrade_ability_toptitle_png",
        t.x = 78,
        t.y = 0,
        t
    },
    i
} (eui.Skin);