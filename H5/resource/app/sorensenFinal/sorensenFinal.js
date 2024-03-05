var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
sorensenFinal; !
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20210709版本系统功能", "索伦森获得线（第三阶段）", "进入【索伦森（第三阶段）】关卡面板"),
            EventManager.addEventListener(i.CHANGE_PANEL, this.onChangePanel, this),
            this.openPanel(i.MAIN_PANEL)
        },
        i.prototype.onChangePanel = function(e) {
            this.openPanel(e.data)
        },
        i.prototype.openPanel = function(t) {
            switch (this.desPanel(), t) {
            case 0:
                ModuleManager.hideModule(this);
                break;
            case i.MAIN_PANEL:
                this._curPanel = new e.SorensenFinalMain;
                break;
            case i.LEVEL_1:
                StatLogger.log("20210709版本系统功能", "索伦森获得线（第三阶段）", "进入【剥离圣灵】关卡"),
                this._curPanel = new e.SorensenFinalLevel1;
                break;
            case i.LEVEL_2:
                StatLogger.log("20210709版本系统功能", "索伦森获得线（第三阶段）", "进入【凝聚混沌】关卡"),
                this._curPanel = new e.SorensenFinalLevel2;
                break;
            case i.LEVEL_3:
                StatLogger.log("20210709版本系统功能", "索伦森获得线（第三阶段）", "进入【魂锁炼狱】关卡"),
                this._curPanel = new e.SorensenFinalLevel3;
                break;
            case i.LEVEL_4:
                StatLogger.log("20210709版本系统功能", "索伦森获得线（第三阶段）", "进入【宇宙主宰】关卡"),
                this._curPanel = new e.SorensenFinalLevel4;
                break;
            case i.POWER_UP:
                this._curPanel = new e.SorensenFinalPowerUp
            }
            this.addChild(this._curPanel)
        },
        i.prototype.desPanel = function() {
            this._curPanel && (this._curPanel.destroy(), this._curPanel.parent && this._curPanel.parent.removeChild(this._curPanel))
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(i.CHANGE_PANEL, this.onChangePanel, this),
            this.desPanel(),
            t.prototype.destroy.call(this)
        },
        i.CHANGE_PANEL = "sorensen_final_change_panel",
        i.MAIN_PANEL = 1,
        i.LEVEL_1 = 2,
        i.LEVEL_2 = 3,
        i.LEVEL_3 = 4,
        i.LEVEL_4 = 5,
        i.POWER_UP = 6,
        i
    } (BaseModule);
    e.SorensenFinal = t,
    __reflect(t.prototype, "sorensenFinal.SorensenFinal")
} (sorensenFinal || (sorensenFinal = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
sorensenFinal; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = SorensenFinalLevel1Skin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData(),
            this.initOldPveBtnClose(0, this, "",
            function() {
                EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.MAIN_PANEL)
            },
            this)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnFight,
            function() {
                SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [598, 0, 0, 0, 0, 0])
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([101264, 101265],
            function(t) {
                e._levelState = t[0],
                e._progress = t[1],
                e.updateView()
            })
        },
        i.prototype.updateView = function() {
            this._levelState > 0 && EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.MAIN_PANEL),
            this._bar.value = this._progress,
            this.txt_progress.text = Math.min(this._progress, 4e3) + "/4000"
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.SorensenFinalLevel1 = t,
    __reflect(t.prototype, "sorensenFinal.SorensenFinalLevel1")
} (sorensenFinal || (sorensenFinal = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
sorensenFinal; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = SorensenFinalLevel2Skin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData(),
            this.initOldPveBtnClose(0, this, "",
            function() {
                EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.grp_btnleft)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                BuyProductManager.buyProductBySocket(250917,
                function(t) {
                    SocketConnection.sendByQueue(42345, [2, t],
                    function() {
                        e.updateData()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                BuyProductManager.buyProduct("250918_10383",
                function(t) {
                    e.updateData()
                },
                e)
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["boss_" + t],
                function() {
                    return e._fightTimes >= 4 ? void Alarm.show("挑战次数不足") : void FightManager.fightNoMapBoss("", 10233 + t)
                },
                i)
            },
            i = this, n = 0; 3 > n; n++) t(n);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([101264, 101265, 18298],
            function(t) {
                e._levelState = t[0],
                e._itemNum = t[1],
                e._fightTimes = t[2],
                e.updateView()
            })
        },
        i.prototype.updateView = function() {
            this._levelState > 1 && EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.MAIN_PANEL),
            this.txt_fightTimes.text = "当前剩余挑战次数：" + Math.max(0, 4 - this._fightTimes) + "/4",
            this.txt_itemNum.text = "当前拥有混沌之魄：" + this._itemNum;
            var t = this._fightTimes >= 4;
            DisplayUtil.setEnabled(this.btnAddTimes, t, !0)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.SorensenFinalLevel2 = t,
    __reflect(t.prototype, "sorensenFinal.SorensenFinalLevel2")
} (sorensenFinal || (sorensenFinal = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
sorensenFinal; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "SorensenFinalLevel3Skin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData(),
            this.initOldPveBtnClose(0, this, "",
            function() {
                EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.grp_btnleft)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProduct("250919_10384",
                function(t) {
                    e.updateData()
                },
                e)
            },
            this);
            for (var t = function(t) {
                i["img_level_" + t].addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    e.chooseLevel(t)
                },
                i)
            },
            i = this, n = 0; 7 > n; n++) t(n);
            ImageButtonUtil.add(this.btnFight,
            function() {
                return e._fightTimes >= 10 ? void Alarm.show("挑战次数不足") : e._curBoss ? void SocketConnection.sendByQueue(42345, [17, e._curBoss]) : void Alarm.show("请选择封印")
            },
            this),
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                return e._curBoss ? void BuyProductManager.buyProductBySocket(250920,
                function() {
                    SocketConnection.sendByQueue(42345, [3, e._curBoss],
                    function() {
                        e.updateData(),
                        e.chooseLevel( - 1)
                    })
                },
                e) : void Alarm.show("请选择封印")
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.chooseLevel = function(e) {
            this._curBoss = e + 1;
            for (var t = 0; 7 > t; t++) this["img_selected_" + t].visible = t == e
        },
        i.prototype.onFightOver = function() {
            FightManager.isWin && this.chooseLevel( - 1),
            this.updateData()
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([101264, 101265, 18299, 18300],
            function(t) {
                e._levelState = t[0],
                e._bossState = t[1],
                e._fightTimes = t[2],
                e._difficuty = t[3] + 1,
                e.updateView()
            })
        },
        i.prototype.updateView = function() {
            this._levelState > 2 && EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.MAIN_PANEL),
            this.txt_fightTimes.text = "当前剩余挑战次数：" + Math.max(0, 10 - this._fightTimes) + "/10";
            for (var t = 0; 7 > t; t++) {
                var i = KTool.getBit(this._bossState, t + 1);
                this["img_level_" + t].visible = !i,
                this["flag_done_" + t].visible = !!i,
                this["star_" + t].visible = t < this._difficuty
            }
            var n = this._fightTimes >= 10;
            DisplayUtil.setEnabled(this.btnAdd, n, !0)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this);
            for (var e = 0; 7 > e; e++) this["img_level_" + e].removeEventListener(egret.TouchEvent.TOUCH_TAP, arguments.callee, this);
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.SorensenFinalLevel3 = t,
    __reflect(t.prototype, "sorensenFinal.SorensenFinalLevel3")
} (sorensenFinal || (sorensenFinal = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
sorensenFinal; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._galaxyState = [],
            e._config = [[{
                id: 3397,
                name: "九霄雷神"
            },
            {
                id: 3384,
                name: "爆破先锋"
            },
            {
                id: 3405,
                name: "科穆宁"
            },
            {
                id: 3416,
                name: "辛西娅"
            },
            {
                id: 3403,
                name: "艾丽娅"
            }], [{
                id: 2887,
                name: "雷神•雷伊"
            },
            {
                id: 3293,
                name: "女皇•阿克希亚"
            },
            {
                id: 2698,
                name: "霸王龟"
            },
            {
                id: 2616,
                name: "提亚戈斯"
            },
            {
                id: 3308,
                name: "万世北溟•玄武"
            }], [{
                id: 2852,
                name: "赤瞳•缪斯"
            },
            {
                id: 3022,
                name: "王之哈莫"
            },
            {
                id: 2876,
                name: "镰翼金乌"
            },
            {
                id: 3280,
                name: "德罗西尼"
            },
            {
                id: 3289,
                name: "天苍玄魂•青龙"
            }], [{
                id: 2586,
                name: "圣刃•神力号"
            },
            {
                id: 2594,
                name: "强袭•勇气号"
            },
            {
                id: 2606,
                name: "天火•烈焰号"
            },
            {
                id: 3297,
                name: "希望号"
            },
            {
                id: 3301,
                name: "圣尊啸傲•白虎"
            }], [{
                id: 2817,
                name: "大地之神•卡修斯"
            },
            {
                id: 2833,
                name: "夜魔之神•布莱克"
            },
            {
                id: 3368,
                name: "加奥什"
            },
            {
                id: 3356,
                name: "圣世之光•奥尔德"
            },
            {
                id: 3318,
                name: "炽羽炎凰•朱雀"
            }], [{
                id: 2809,
                name: "神•圣光天马"
            },
            {
                id: 2780,
                name: "战神•盖亚"
            },
            {
                id: 2151,
                name: "加尔鲁什"
            },
            {
                id: 1913,
                name: "吉拉迪诺"
            },
            {
                id: 3315,
                name: "圣光麒麟"
            }], [{
                id: 2455,
                name: "布鲁克"
            },
            {
                id: 3164,
                name: "霸王项羽"
            },
            {
                id: 3227,
                name: "月之子•奇拉美"
            },
            {
                id: 2886,
                name: "德尔波拉"
            },
            {
                id: 2933,
                name: "泰坦"
            }]],
            e.skinName = SorensenFinalLevel4Skin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this);
            var i = SystemTimerManager.sysBJDate.getDay();
            this["img_selected_" + i].visible = !0,
            this._curGalaxy = i,
            this.addEvent(),
            this.updateData(),
            this.initOldPveBtnClose(39, this, "",
            function() {
                EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.grp_btnleft)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProduct("250921_10385",
                function(t) {
                    e.updateData()
                },
                e)
            },
            this);
            for (var t = function(t) {
                i["galaxy_" + t].addEventListener(egret.TouchEvent.TOUCH_TAP,
                function() {
                    e.chooseGalaxy(t)
                },
                i),
                5 > t && ImageButtonUtil.add(i["boss_" + t],
                function() {
                    if (e._fightTimes >= 5) return void Alarm.show("挑战次数不足");
                    var i;
                    i = 0 == e._curGalaxy ? 10273 + t: 10238 + 5 * e._curGalaxy + t,
                    FightManager.fightNoMapBoss("", i)
                },
                i)
            },
            i = this, n = 0; 7 > n; n++) t(n);
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                BuyProductManager.buyProductBySocket(250953,
                function() {
                    SocketConnection.sendByQueue(42345, [18, e._curGalaxy || 7],
                    function() {
                        e.updateData()
                    })
                },
                e)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([101264, 101265, 101266, 18301],
            function(t) {
                e._levelState = t[0],
                e._galaxyState = [],
                e._galaxyState[0] = t[2] >> 16 & 255;
                for (var i = 0; 4 > i; i++) e._galaxyState.push(t[1] >> 8 * i & 255);
                for (var i = 0; 2 > i; i++) e._galaxyState.push(t[2] >> 8 * i & 255);
                e._fightTimes = t[3],
                e.updateView()
            })
        },
        i.prototype.updateView = function() {
            this._levelState > 3 && EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.MAIN_PANEL);
            for (var t = SystemTimerManager.sysBJDate.getDay(), i = 0; 7 > i; i++) {
                var n = this._galaxyState[i];
                this["flag_beated_" + i].visible = 31 == n,
                this["lock_" + i].visible = 31 != n && i != t
            }
            for (var _ = this._galaxyState[this._curGalaxy], s = this._config[this._curGalaxy], i = 0; 5 > i; i++) {
                this["img_boss_" + i].source = s[i].id + "_png",
                this["txt_name_" + i].text = s[i].name;
                var r = KTool.getBit(_, i + 1);
                this["flag_win_" + i].visible = !!r,
                this["flag_close_" + i].visible = !r && this._curGalaxy != t,
                this["beatmask_" + i].visible = !!r || this._curGalaxy != t,
                this["boss_" + i].touchEnabled = this["boss_" + i].touchChildren = !r && this._curGalaxy == t
            }
            this.txt_fightTimes.text = "当前剩余挑战次数：" + Math.max(0, 5 - this._fightTimes) + "/5",
            this.btnOneTap.visible = 31 != _;
            var a = this._fightTimes >= 5;
            DisplayUtil.setEnabled(this.btnAdd, a, !0)
        },
        i.prototype.chooseGalaxy = function(e) {
            this._curGalaxy = e;
            for (var t = 0; 7 > t; t++) this["img_selected_" + t].visible = t == e;
            this.updateView()
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this);
            for (var e = 0; 7 > e; e++) this["galaxy_" + e].removeEventListener(egret.TouchEvent.TOUCH_TAP, arguments.callee, this);
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.SorensenFinalLevel4 = t,
    __reflect(t.prototype, "sorensenFinal.SorensenFinalLevel4")
} (sorensenFinal || (sorensenFinal = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
sorensenFinal; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "SorensenFinalSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData(),
            this.initOldPveBtnClose(119, this, "",
            function() {
                EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, 0)
            },
            this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    var e = [0, 2e3, 3312][t._preState];
                    if (e && !PetManager.isDefaultPet(e)) return void Alarm.show("请将" + PetXMLInfo.getName(e) + "设置为出战背包首发！",
                    function() {
                        ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                    });
                    var i = 1198 - [0, 50, 200][t._preState] - [0, 100, 250, 400][t._levelState];
                    KTool.buyProductByCallback(250911, i,
                    function() {
                        SocketConnection.sendByQueue(42345, [6, t._preState + 1],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3414)
            },
            this),
            ImageButtonUtil.add(this.btnEvo,
            function() {
                var e = [0, 2e3, 3312][t._preState];
                if (e && !PetManager.isDefaultPet(e)) return void Alarm.show("请将" + PetXMLInfo.getName(e) + "设置为出战背包首发，并卸下刻印！",
                function() {
                    ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                });
                var i = PetManager.getPetInfo(PetManager.defaultTime);
                return e && (i.abilityMark || i.skillMark || i.commonMark) ? void Alarm.show("本次进化无法携带刻印进行进化，请卸下刻印！",
                function() {
                    ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                }) : void SocketConnection.sendByQueue(42345, [6, t._preState + 1],
                function() {
                    t.updateData(),
                    PetManager.upDateBagPetInfo(PetManager.defaultTime)
                })
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.POWER_UP)
            },
            this),
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                return PetManager.isDefaultPet(3414) ? void PopViewManager.getInstance().openView(new e.SorensenFinalSellPop) : void Alarm.show("请先将混沌魔君索伦森放入出战背包首发",
                function() {
                    ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                })
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, 0),
                ModuleManager.showModuleByID(88)
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["level_" + i],
                function() {
                    EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal["LEVEL_" + (i + 1)])
                },
                n),
                ImageButtonUtil.add(n["btnPass_" + i],
                function() {
                    BuyProductManager.buyProductBySocket(250912 + i,
                    function() {
                        SocketConnection.sendByQueue(42345, [1, i + 1],
                        function() {
                            t.updateData()
                        })
                    },
                    t)
                },
                n)
            },
            n = this, _ = 0; 4 > _; _++) i(_)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([101264, 101268],
            function(t) {
                e._levelState = t[0],
                e._petState = t[1],
                e.updateView()
            }),
            PetManager.hasPet(3312) ? this._preState = 2 : PetManager.hasPet(2e3) ? this._preState = 1 : this._preState = 0
        },
        i.prototype.updateView = function() {
            for (var e = 0; 4 > e; e++) this["btnPass_" + e].visible = this["level_" + e].touchEnabled = !KTool.getBit(this._petState, 1) && this._levelState == e,
            this["flag_passed_" + e].visible = !!KTool.getBit(this._petState, 1) || e < this._levelState;
            this.btnEvo.visible = this._levelState >= 4 && !KTool.getBit(this._petState, 1),
            this.flag_evo.visible = !!KTool.getBit(this._petState, 1),
            this.btnBuy.visible = this._levelState < 4 && !KTool.getBit(this._petState, 1),
            this.btnUp.visible = !!KTool.getBit(this._petState, 1) && !KTool.getBit(this._petState, 2),
            this.btnOneTap.visible = !!KTool.getBit(this._petState, 2) && !KTool.getBit(this._petState, 3)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.SorensenFinalMain = t,
    __reflect(t.prototype, "sorensenFinal.SorensenFinalMain")
} (sorensenFinal || (sorensenFinal = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
sorensenFinal; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = SorensenFinalPowerUpSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData(),
            this.initOldPveBtnClose(0, this, "",
            function() {
                EventManager.dispatchEventWith(e.SorensenFinal.CHANGE_PANEL, !1, e.SorensenFinal.MAIN_PANEL)
            },
            this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnGet,
            function() {
                PayManager.doPayFunc(function() {
                    PetManager.isDefaultPet(3414) ? KTool.buyProductByCallback(250924, 1,
                    function() {
                        SocketConnection.sendByQueue(42345, [5, 2],
                        function() {
                            e.updateData()
                        })
                    }) : Alarm.show("请将混沌魔君索伦森置于首发",
                    function() {
                        ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                    })
                },
                e)
            },
            this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([101268],
            function(t) {
                e.btnGet.visible = !KTool.getBit(t[0], 2)
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.SorensenFinalPowerUp = t,
    __reflect(t.prototype, "sorensenFinal.SorensenFinalPowerUp")
} (sorensenFinal || (sorensenFinal = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
sorensenFinal; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._curNature = 0,
            t._attrList = [0, 0, 0, 255, 0, 255],
            t._tmpAttr = [0, 0, 0, 0, 0, 0],
            t.skinName = SorensenFinalSellPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.grp_study.visible = !1,
            this.addEvent(),
            this.updateView(),
            this.reset()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    return PetManager.isDefaultPet(3414) ? void KTool.buyProductByCallback(250916, 1,
                    function() {
                        SocketConnection.sendByQueue(43229, [32, e._curNature].concat(e._attrList, [PetManager.defaultTime]),
                        function() {
                            e.updateView()
                        })
                    }) : void Alert.show("请将混沌魔君索伦森放入出战背包首发！",
                    function() {
                        ModuleManager.showModule("petBag", ["petBag"], {
                            type: 1,
                            clsName: "sorensenFinal.SorensenFinalSellPop"
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnSet_0,
            function() {
                e.showStudy()
            },
            this),
            ImageButtonUtil.add(this.btnSet_1,
            function() {
                ModuleManager.showModule("natureChoosePanel", ["nature_choose_panel"], {
                    petinfo: e._petInfo,
                    callBack: function(t) {
                        e._curNature = t,
                        e.updateView()
                    },
                    caller: e
                },
                null, AppDoStyle.NULL)
            },
            this),
            this.addStudyEvent()
        },
        t.prototype.addStudyEvent = function() {
            var e = this;
            this._rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideStudy, this),
            ImageButtonUtil.add(this.img_btnReset, this.reset, this);
            for (var t = 0; 6 > t; t++) ImageButtonUtil.add(this["btnMax" + t], this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this["btnMin" + t], this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this["btnPlus" + t], this.onTouchTapImageButtonHandler, this),
            this["inputTxt" + t].addEventListener(egret.Event.CHANGE, this.txtChangeHandle, this);
            ImageButtonUtil.add(this.img_btnAssign,
            function() {
                return e.totalNum < 510 ? void BubblerManager.getInstance().showText("学习力总和需要为510！") : (e._attrList = e._tmpAttr, e.txt_attr_1.visible = !1, e.txt_attr_0.text = "自定义完成", void e.hideStudy())
            },
            this)
        },
        t.prototype.updateView = function() {
            var e = this;
            this._petInfo = PetManager.getPetInfo(PetManager.getPetsById(3414)[0].catchTime),
            100 != this._curNature && (this.txt_nature.text = NatureXMLInfo.getName(this._curNature)),
            KTool.getMultiValue([101268],
            function(t) {
                DisplayUtil.setEnabled(e.btnBuy, !KTool.getBit(t[0], 3))
            })
        },
        t.prototype.showStudy = function() {
            this.grp_study.width = egret.lifecycle.stage.stageWidth,
            this.grp_study.height = egret.lifecycle.stage.stageHeight,
            this.grp_study.scaleX = this.grp_study.scaleY = 0,
            this.grp_study.visible = !0;
            for (var e = 0; e < this._tmpAttr.length; e++) this["num" + e] = this._tmpAttr[e];
            this.txt_studyNum.text = "当前学习力总和：" + this.totalNum,
            egret.Tween.get(this.grp_study).to({
                scaleX: 1,
                scaleY: 1
            },
            150, egret.Ease.backOut)
        },
        t.prototype.hideStudy = function() {
            var e = this;
            255 == this._attrList[3] && 255 == this._attrList[5] ? this._tmpAttr = [0, 0, 0, 0, 0, 0] : this._tmpAttr = this._attrList.concat(),
            egret.Tween.get(this.grp_study).to({
                scaleX: 0,
                scaleY: 0
            },
            150, egret.Ease.backIn).call(function() {
                e.grp_study.visible = !1
            })
        },
        t.prototype.onTouchTapImageButtonHandler = function(e) {
            switch (e.target) {
            case this.btnMin0:
                this.checkInput(0, this.num0 - 1);
                break;
            case this.btnMax0:
                this.checkInput(0, 255);
                break;
            case this.btnPlus0:
                this.checkInput(0, this.num0 + 1);
                break;
            case this.btnMin1:
                this.checkInput(1, this.num1 - 1);
                break;
            case this.btnMax1:
                this.checkInput(1, 255);
                break;
            case this.btnPlus1:
                this.checkInput(1, this.num1 + 1);
                break;
            case this.btnMin2:
                this.checkInput(2, this.num2 - 1);
                break;
            case this.btnMax2:
                this.checkInput(2, 255);
                break;
            case this.btnPlus2:
                this.checkInput(2, this.num2 + 1);
                break;
            case this.btnMin3:
                this.checkInput(3, this.num3 - 1);
                break;
            case this.btnMax3:
                this.checkInput(3, 255);
                break;
            case this.btnPlus3:
                this.checkInput(3, this.num3 + 1);
                break;
            case this.btnMin4:
                this.checkInput(4, this.num4 - 1);
                break;
            case this.btnMax4:
                this.checkInput(4, 255);
                break;
            case this.btnPlus4:
                this.checkInput(4, this.num4 + 1);
                break;
            case this.btnMin5:
                this.checkInput(5, this.num5 - 1);
                break;
            case this.btnMax5:
                this.checkInput(5, 255);
                break;
            case this.btnPlus5:
                this.checkInput(5, this.num5 + 1)
            }
        },
        t.prototype.checkInput = function(e, t) {
            t = Math.min(t, 255),
            t = Math.max(0, t);
            var i = this["num" + e],
            n = t - i;
            this.totalNum + n > 510 && (t -= this.totalNum + n - 510),
            this["num" + e] = t,
            this.txt_studyNum.text = "当前学习力总和：" + this.totalNum
        },
        t.prototype.txtChangeHandle = function(e) {
            var t = e.currentTarget,
            i = e.currentTarget.name,
            n = ~~i.split("_")[1];
            this.checkInput(n, ~~t.text)
        },
        t.prototype.reset = function() {
            for (var e = 0; 6 > e; e++) this["num" + e] = 0;
            this.txt_studyNum.text = "当前学习力总和：" + this.totalNum
        },
        Object.defineProperty(t.prototype, "num0", {
            get: function() {
                return this._tmpAttr[0]
            },
            set: function(e) {
                this._tmpAttr[0] = e,
                this.inputTxt0.text = this.num0.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "num1", {
            get: function() {
                return this._tmpAttr[1]
            },
            set: function(e) {
                this._tmpAttr[1] = e,
                this.inputTxt1.text = this.num1.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "num2", {
            get: function() {
                return this._tmpAttr[2]
            },
            set: function(e) {
                this._tmpAttr[2] = e,
                this.inputTxt2.text = this.num2.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "num3", {
            get: function() {
                return this._tmpAttr[3]
            },
            set: function(e) {
                this._tmpAttr[3] = e,
                this.inputTxt3.text = this.num3.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "num4", {
            get: function() {
                return this._tmpAttr[4]
            },
            set: function(e) {
                this._tmpAttr[4] = e,
                this.inputTxt4.text = this.num4.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "num5", {
            get: function() {
                return this._tmpAttr[5]
            },
            set: function(e) {
                this._tmpAttr[5] = e,
                this.inputTxt5.text = this.num5.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "totalNum", {
            get: function() {
                return this._tmpAttr.reduce(function(e, t) {
                    return e + t
                })
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this._rect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hideStudy, this)
        },
        t
    } (PopView);
    e.SorensenFinalSellPop = t,
    __reflect(t.prototype, "sorensenFinal.SorensenFinalSellPop")
} (sorensenFinal || (sorensenFinal = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/SorensenFinalLevel1Skin.exml"] = window.SorensenFinalLevel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["_bar", "txt_progress", "btnFight"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Group1_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this.btnFight_i(), this._Label1_i(), this._Image13_i(), this._Image14_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.height = 28,
            e.source = "sorensen_final_level_1_img_bar_png",
            e.width = 605,
            e
        },
        i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.height = 28,
            e.scale9Grid = new egret.Rectangle(33, 9, 34, 10),
            e.source = "sorensen_final_level_1_img_thumb_png",
            e.width = 605,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "sorensen_final_level_1_bg_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.horizontalCenter = -1.5,
        e.source = "sorensen_final_level_1_bgimg_png",
        e.width = 989,
        e.y = 0,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 532,
        e.source = "sorensen_final_level_1_pet_0_png",
        e.width = 525,
        e.x = 0,
        e.y = 74,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 497,
        e.right = 0,
        e.source = "sorensen_final_level_1_pet_1_png",
        e.width = 542,
        e.y = 92,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 168,
        e.horizontalCenter = 42.5,
        e.source = "sorensen_final_level_1_img_Jindubg_png",
        e.width = 985,
        e.y = 362,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 168,
        e.horizontalCenter = 27,
        e.source = "sorensen_final_level_1_img_vs_png",
        e.width = 338,
        e.y = 227,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 2.5,
        e.y = 427,
        e.elementsContent = [this._bar_i(), this._Image7_i(), this.txt_progress_i(), this._Image8_i(), this._Image9_i()],
        e
    },
    n._bar_i = function() {
        var e = new eui.ProgressBar;
        return this._bar = e,
        e.height = 28,
        e.maximum = 4e3,
        e.width = 605,
        e.x = 107,
        e.y = 28,
        e.skinName = i,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "sorensen_final_level_1_numbg_png",
        e.width = 256,
        e.x = 276,
        e.y = 56,
        e
    },
    n.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 0,
        e.size = 22,
        e.text = "2600/4000",
        e.textColor = 16775675,
        e.y = 55,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 83,
        e.source = "sorensen_final_level_1_label_chaos_png",
        e.width = 197,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 83,
        e.source = "sorensen_final_level_1_label_holy_png",
        e.width = 197,
        e.x = 610,
        e.y = 0,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.horizontalCenter = -10.5,
        e.source = "sorensen_final_level_1_txtbg_png",
        e.width = 743,
        e.y = 56,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.horizontalCenter = -10.5,
        e.source = "sorensen_final_level_1_line_png",
        e.width = 743,
        e.y = 56,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.horizontalCenter = -10.5,
        e.source = "sorensen_final_level_1_line_png",
        e.width = 743,
        e.y = 110,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.height = 69,
        e.right = 40,
        e.source = "sorensen_final_level_1_btnFight_png",
        e.width = 230,
        e.y = 552,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.horizontalCenter = 1,
        e.lineSpacing = 2,
        e.size = 18,
        e.text = "使用魔君索伦森，对体内的圣灵幻影造成伤害，即可将圣灵之力转化为\n混沌之力，当混沌之力积攒到4000点时，通过此关卡",
        e.textAlign = "center",
        e.textColor = 15911626,
        e.y = 66,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 11,
        e.horizontalCenter = -10,
        e.source = "sorensen_final_level_1_light_png",
        e.width = 836,
        e.y = 51,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.horizontalCenter = .5,
        e.source = "sorensen_final_level_1_title_png",
        e.width = 135,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SorensenFinalLevel2Skin.exml"] = window.SorensenFinalLevel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["boss_2", "boss_1", "boss_0", "txt_fightTimes", "btnAddTimes", "txt_itemNum", "btnAddItem", "imgBtn_pet", "imgBtn_cure", "grp_btnleft"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.boss_2_i(), this.boss_1_i(), this.boss_0_i(), this._Group1_i(), this._Group2_i(), this.grp_btnleft_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Label1_i(), this._Image8_i(), this._Image9_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "sorensen_final_level_1_bg_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.boss_2_i = function() {
        var e = new eui.Image;
        return this.boss_2 = e,
        e.height = 472,
        e.horizontalCenter = 300.5,
        e.source = "sorensen_final_level_2_boss_2_png",
        e.width = 263,
        e.y = 75,
        e
    },
    i.boss_1_i = function() {
        var e = new eui.Image;
        return this.boss_1 = e,
        e.height = 472,
        e.horizontalCenter = 2.5,
        e.source = "sorensen_final_level_2_boss_1_png",
        e.width = 263,
        e.y = 75,
        e
    },
    i.boss_0_i = function() {
        var e = new eui.Image;
        return this.boss_0 = e,
        e.height = 472,
        e.horizontalCenter = -295.5,
        e.source = "sorensen_final_level_2_boss_0_png",
        e.width = 263,
        e.y = 75,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -181.5,
        e.y = 561,
        e.elementsContent = [this._Image2_i(), this.txt_fightTimes_i(), this.btnAddTimes_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "sorensen_final_level_2_infobg_png",
        e.width = 277,
        e.x = 0,
        e.y = 1,
        e
    },
    i.txt_fightTimes_i = function() {
        var e = new eui.Label;
        return this.txt_fightTimes = e,
        e.size = 18,
        e.text = "当前剩余挑战次数：4/5",
        e.textColor = 16777215,
        e.x = 42,
        e.y = 8,
        e
    },
    i.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.height = 34,
        e.source = "sorensen_final_level_2_btnAdd_png",
        e.width = 36,
        e.x = 247,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 177.5,
        e.y = 559,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.txt_itemNum_i(), this.btnAddItem_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "sorensen_final_level_2_infobg_png",
        e.width = 277,
        e.x = 0,
        e.y = 3,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "sorensen_final_level_2_itemIcon_png",
        e.width = 32,
        e.x = 4,
        e.y = 0,
        e
    },
    i.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.size = 18,
        e.text = "当前拥有混沌之魄：95",
        e.textColor = 16777215,
        e.x = 42,
        e.y = 10,
        e
    },
    i.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.height = 34,
        e.source = "sorensen_final_level_2_btnAdd_png",
        e.width = 36,
        e.x = 247,
        e.y = 2,
        e
    },
    i.grp_btnleft_i = function() {
        var e = new eui.Group;
        return this.grp_btnleft = e,
        e.x = 34,
        e.y = 469,
        e.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "sorensen_final_level_2_imgBtn_pet_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "sorensen_final_level_2_imgBtn_cure_png",
        e.width = 60,
        e.x = 0,
        e.y = 68,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.horizontalCenter = -10.5,
        e.source = "sorensen_final_level_2_txtbg_png",
        e.width = 743,
        e.y = 56,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.horizontalCenter = -10.5,
        e.source = "sorensen_final_level_1_line_png",
        e.width = 743,
        e.y = 56,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.horizontalCenter = -10.5,
        e.source = "sorensen_final_level_1_line_png",
        e.width = 743,
        e.y = 91,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.horizontalCenter = 2.5,
        e.size = 18,
        e.text = "击败混沌力量的拥有者，即可凝聚混沌之魄，当凝聚到15个时，通关此关卡",
        e.textColor = 15911626,
        e.y = 66,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 11,
        e.horizontalCenter = -10,
        e.source = "sorensen_final_level_1_light_png",
        e.width = 836,
        e.y = 51,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.horizontalCenter = 1,
        e.source = "sorensen_final_level_2_title_png",
        e.width = 134,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SorensenFinalLevel3Skin.exml"] = window.SorensenFinalLevel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_fightTimes", "btnAdd", "star_0", "star_1", "star_2", "star_3", "star_4", "star_5", "star_6", "flag_done_6", "img_selected_6", "img_level_6", "level_6", "flag_done_5", "img_selected_5", "img_level_5", "level_5", "flag_done_4", "img_selected_4", "img_level_4", "level_4", "flag_done_3", "img_selected_3", "img_level_3", "level_3", "flag_done_2", "img_selected_2", "img_level_2", "level_2", "flag_done_1", "img_selected_1", "img_level_1", "level_1", "flag_done_0", "img_selected_0", "img_level_0", "level_0", "btnFight", "btnOneTap", "imgBtn_pet", "imgBtn_cure", "grp_btnleft"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Group2_i(), this.level_6_i(), this.level_5_i(), this.level_4_i(), this.level_3_i(), this.level_2_i(), this.level_1_i(), this.level_0_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Label2_i(), this._Image15_i(), this.btnFight_i(), this.btnOneTap_i(), this.grp_btnleft_i(), this._Image16_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "sorensen_final_level_1_bg_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 532,
        e.horizontalCenter = 39.5,
        e.source = "sorensen_final_level_3_pet_png",
        e.width = 567,
        e.y = 74,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 93.5,
        e.y = 561,
        e.elementsContent = [this._Image3_i(), this.txt_fightTimes_i(), this.btnAdd_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "sorensen_final_level_2_infobg_png",
        e.width = 277,
        e.x = 0,
        e.y = 1,
        e
    },
    i.txt_fightTimes_i = function() {
        var e = new eui.Label;
        return this.txt_fightTimes = e,
        e.horizontalCenter = -5.5,
        e.size = 18,
        e.text = "当前剩余挑战次数：4/5",
        e.textColor = 16777215,
        e.y = 8,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 34,
        e.source = "sorensen_final_level_2_btnAdd_png",
        e.width = 36,
        e.x = 247,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -256.5,
        e.y = 559,
        e.elementsContent = [this._Image4_i(), this._Label1_i(), this._Image5_i(), this.star_0_i(), this._Image6_i(), this.star_1_i(), this._Image7_i(), this.star_2_i(), this._Image8_i(), this.star_3_i(), this._Image9_i(), this.star_4_i(), this._Image10_i(), this.star_5_i(), this._Image11_i(), this.star_6_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "sorensen_final_level_2_infobg_png",
        e.width = 277,
        e.x = 0,
        e.y = 3,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.size = 18,
        e.text = "当前难度：",
        e.textColor = 16777215,
        e.x = 7,
        e.y = 10,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "sorensen_final_level_3_starbg_png",
        e.width = 29,
        e.x = 93,
        e.y = 4,
        e
    },
    i.star_0_i = function() {
        var e = new eui.Image;
        return this.star_0 = e,
        e.height = 36,
        e.source = "sorensen_final_level_3_star_png",
        e.width = 37,
        e.x = 89,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "sorensen_final_level_3_starbg_png",
        e.width = 29,
        e.x = 125,
        e.y = 4,
        e
    },
    i.star_1_i = function() {
        var e = new eui.Image;
        return this.star_1 = e,
        e.height = 36,
        e.source = "sorensen_final_level_3_star_png",
        e.width = 37,
        e.x = 121,
        e.y = 0,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "sorensen_final_level_3_starbg_png",
        e.width = 29,
        e.x = 156,
        e.y = 4,
        e
    },
    i.star_2_i = function() {
        var e = new eui.Image;
        return this.star_2 = e,
        e.height = 36,
        e.source = "sorensen_final_level_3_star_png",
        e.width = 37,
        e.x = 152,
        e.y = 0,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "sorensen_final_level_3_starbg_png",
        e.width = 29,
        e.x = 188,
        e.y = 4,
        e
    },
    i.star_3_i = function() {
        var e = new eui.Image;
        return this.star_3 = e,
        e.height = 36,
        e.source = "sorensen_final_level_3_star_png",
        e.width = 37,
        e.x = 184,
        e.y = 0,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "sorensen_final_level_3_starbg_png",
        e.width = 29,
        e.x = 219,
        e.y = 4,
        e
    },
    i.star_4_i = function() {
        var e = new eui.Image;
        return this.star_4 = e,
        e.height = 36,
        e.source = "sorensen_final_level_3_star_png",
        e.width = 37,
        e.x = 215,
        e.y = 0,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "sorensen_final_level_3_starbg_png",
        e.width = 29,
        e.x = 251,
        e.y = 4,
        e
    },
    i.star_5_i = function() {
        var e = new eui.Image;
        return this.star_5 = e,
        e.height = 36,
        e.source = "sorensen_final_level_3_star_png",
        e.width = 37,
        e.x = 247,
        e.y = 0,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "sorensen_final_level_3_starbg_png",
        e.width = 29,
        e.x = 282,
        e.y = 4,
        e
    },
    i.star_6_i = function() {
        var e = new eui.Image;
        return this.star_6 = e,
        e.height = 36,
        e.source = "sorensen_final_level_3_star_png",
        e.width = 37,
        e.x = 278,
        e.y = 0,
        e
    },
    i.level_6_i = function() {
        var e = new eui.Group;
        return this.level_6 = e,
        e.horizontalCenter = 442.5,
        e.y = 134,
        e.elementsContent = [this.flag_done_6_i(), this.img_selected_6_i(), this.img_level_6_i()],
        e
    },
    i.flag_done_6_i = function() {
        var e = new eui.Image;
        return this.flag_done_6 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_flag_done_6_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.img_selected_6_i = function() {
        var e = new eui.Image;
        return this.img_selected_6 = e,
        e.height = 218,
        e.source = "sorensen_final_level_3_img_selected_png",
        e.visible = !1,
        e.width = 167,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_level_6_i = function() {
        var e = new eui.Image;
        return this.img_level_6 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_img_level_6_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.level_5_i = function() {
        var e = new eui.Group;
        return this.level_5 = e,
        e.horizontalCenter = 338.5,
        e.y = 268,
        e.elementsContent = [this.flag_done_5_i(), this.img_selected_5_i(), this.img_level_5_i()],
        e
    },
    i.flag_done_5_i = function() {
        var e = new eui.Image;
        return this.flag_done_5 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_flag_done_5_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.img_selected_5_i = function() {
        var e = new eui.Image;
        return this.img_selected_5 = e,
        e.height = 218,
        e.source = "sorensen_final_level_3_img_selected_png",
        e.visible = !1,
        e.width = 167,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_level_5_i = function() {
        var e = new eui.Image;
        return this.img_level_5 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_img_level_5_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.level_4_i = function() {
        var e = new eui.Group;
        return this.level_4 = e,
        e.horizontalCenter = 177.5,
        e.y = 340,
        e.elementsContent = [this.flag_done_4_i(), this.img_selected_4_i(), this.img_level_4_i()],
        e
    },
    i.flag_done_4_i = function() {
        var e = new eui.Image;
        return this.flag_done_4 = e,
        e.height = 150,
        e.source = "sorensen_final_level_3_flag_done_4_png",
        e.width = 134,
        e.x = 17,
        e.y = 46,
        e
    },
    i.img_selected_4_i = function() {
        var e = new eui.Image;
        return this.img_selected_4 = e,
        e.height = 218,
        e.source = "sorensen_final_level_3_img_selected_png",
        e.visible = !1,
        e.width = 167,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_level_4_i = function() {
        var e = new eui.Image;
        return this.img_level_4 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_img_level_4_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.level_3_i = function() {
        var e = new eui.Group;
        return this.level_3 = e,
        e.horizontalCenter = -4.5,
        e.y = 352,
        e.elementsContent = [this.flag_done_3_i(), this.img_selected_3_i(), this.img_level_3_i()],
        e
    },
    i.flag_done_3_i = function() {
        var e = new eui.Image;
        return this.flag_done_3 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_flag_done_3_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.img_selected_3_i = function() {
        var e = new eui.Image;
        return this.img_selected_3 = e,
        e.height = 218,
        e.source = "sorensen_final_level_3_img_selected_png",
        e.visible = !1,
        e.width = 167,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_level_3_i = function() {
        var e = new eui.Image;
        return this.img_level_3 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_img_level_3_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.level_2_i = function() {
        var e = new eui.Group;
        return this.level_2 = e,
        e.horizontalCenter = -190.5,
        e.y = 340,
        e.elementsContent = [this.flag_done_2_i(), this.img_selected_2_i(), this.img_level_2_i()],
        e
    },
    i.flag_done_2_i = function() {
        var e = new eui.Image;
        return this.flag_done_2 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_flag_done_2_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.img_selected_2_i = function() {
        var e = new eui.Image;
        return this.img_selected_2 = e,
        e.height = 218,
        e.source = "sorensen_final_level_3_img_selected_png",
        e.visible = !1,
        e.width = 167,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_level_2_i = function() {
        var e = new eui.Image;
        return this.img_level_2 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_img_level_2_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.level_1_i = function() {
        var e = new eui.Group;
        return this.level_1 = e,
        e.horizontalCenter = -351.5,
        e.y = 267,
        e.elementsContent = [this.flag_done_1_i(), this.img_selected_1_i(), this.img_level_1_i()],
        e
    },
    i.flag_done_1_i = function() {
        var e = new eui.Image;
        return this.flag_done_1 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_flag_done_1_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.img_selected_1_i = function() {
        var e = new eui.Image;
        return this.img_selected_1 = e,
        e.height = 218,
        e.source = "sorensen_final_level_3_img_selected_png",
        e.visible = !1,
        e.width = 167,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_level_1_i = function() {
        var e = new eui.Image;
        return this.img_level_1 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_img_level_1_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.level_0_i = function() {
        var e = new eui.Group;
        return this.level_0 = e,
        e.horizontalCenter = -455.5,
        e.y = 134,
        e.elementsContent = [this.flag_done_0_i(), this.img_selected_0_i(), this.img_level_0_i()],
        e
    },
    i.flag_done_0_i = function() {
        var e = new eui.Image;
        return this.flag_done_0 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_flag_done_0_png",
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i.img_selected_0_i = function() {
        var e = new eui.Image;
        return this.img_selected_0 = e,
        e.height = 218,
        e.source = "sorensen_final_level_3_img_selected_png",
        e.visible = !1,
        e.width = 167,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_level_0_i = function() {
        var e = new eui.Image;
        return this.img_level_0 = e,
        e.height = 152,
        e.source = "sorensen_final_level_3_img_level_0_png",
        e.visible = !0,
        e.width = 136,
        e.x = 16,
        e.y = 45,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.horizontalCenter = -10.5,
        e.source = "sorensen_final_level_1_txtbg_png",
        e.width = 743,
        e.y = 56,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.horizontalCenter = -10.5,
        e.source = "sorensen_final_level_1_line_png",
        e.width = 743,
        e.y = 56,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.horizontalCenter = -10.5,
        e.source = "sorensen_final_level_1_line_png",
        e.width = 743,
        e.y = 110,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.horizontalCenter = 2,
        e.lineSpacing = 2,
        e.size = 18,
        e.text = "索伦森的混沌之力被圣光的七道封印留下的魂锁所制约，需要破除魂锁才能展现出真正的力量。\n每次破除封印后未破除的其他封印都会变强，直到第二天才会恢复。",
        e.textAlign = "center",
        e.textColor = 15911626,
        e.y = 66,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 11,
        e.source = "sorensen_final_level_1_light_png",
        e.width = 836,
        e.x = 140,
        e.y = 51,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.height = 68,
        e.right = 41,
        e.source = "sorensen_final_level_3_btnFight_png",
        e.width = 229,
        e.y = 487,
        e
    },
    i.btnOneTap_i = function() {
        var e = new eui.Image;
        return this.btnOneTap = e,
        e.height = 65,
        e.right = 42,
        e.source = "sorensen_final_level_3_btnOneTap_png",
        e.width = 213,
        e.y = 556,
        e
    },
    i.grp_btnleft_i = function() {
        var e = new eui.Group;
        return this.grp_btnleft = e,
        e.x = 34,
        e.y = 469,
        e.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "sorensen_final_level_2_imgBtn_pet_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "sorensen_final_level_2_imgBtn_cure_png",
        e.width = 60,
        e.x = 0,
        e.y = 68,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 45,
        e.horizontalCenter = 1.5,
        e.source = "sorensen_final_level_3_title_png",
        e.width = 135,
        e.y = 12,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SorensenFinalLevel4Skin.exml"] = window.SorensenFinalLevel4Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_fightTimes", "btnAdd", "img_boss_0", "txt_name_0", "beatmask_0", "flag_win_0", "flag_close_0", "boss_0", "img_boss_1", "txt_name_1", "beatmask_1", "flag_win_1", "flag_close_1", "boss_1", "img_boss_4", "txt_name_4", "beatmask_4", "flag_win_4", "flag_close_4", "boss_4", "img_boss_2", "txt_name_2", "beatmask_2", "flag_win_2", "flag_close_2", "boss_2", "img_boss_3", "txt_name_3", "beatmask_3", "flag_win_3", "flag_close_3", "boss_3", "btnOneTap", "imgBtn_pet", "imgBtn_cure", "grp_btnleft", "img_selected_0", "galaxy_0", "lock_0", "flag_beated_0", "img_selected_1", "galaxy_1", "lock_1", "flag_beated_1", "img_selected_2", "galaxy_2", "lock_2", "flag_beated_2", "img_selected_3", "galaxy_3", "lock_3", "flag_beated_3", "img_selected_4", "galaxy_4", "lock_4", "flag_beated_4", "img_selected_5", "galaxy_5", "lock_5", "flag_beated_5", "img_selected_6", "galaxy_6", "lock_6", "flag_beated_6"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Image3_i(), this._Image4_i(), this._Group2_i(), this.btnOneTap_i(), this.grp_btnleft_i(), this._Group10_i(), this._Image15_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "sorensen_final_level_1_bg_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 3.5,
        e.y = 578,
        e.elementsContent = [this._Image2_i(), this.txt_fightTimes_i(), this.btnAdd_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "sorensen_final_level_2_infobg_png",
        e.width = 277,
        e.x = 0,
        e.y = 1,
        e
    },
    i.txt_fightTimes_i = function() {
        var e = new eui.Label;
        return this.txt_fightTimes = e,
        e.horizontalCenter = -5.5,
        e.size = 18,
        e.text = "当前剩余挑战次数：4/5",
        e.textColor = 16777215,
        e.y = 8,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 34,
        e.source = "sorensen_final_level_2_btnAdd_png",
        e.width = 36,
        e.x = 247,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 137,
        e.horizontalCenter = .5,
        e.source = "sorensen_final_level_4_labelbg_png",
        e.width = 1135,
        e.y = 56,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 11,
        e.horizontalCenter = -10,
        e.source = "sorensen_final_level_1_light_png",
        e.width = 836,
        e.y = 51,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 7,
        e.y = 166,
        e.elementsContent = [this.boss_0_i(), this.boss_1_i(), this.boss_4_i(), this.boss_2_i(), this.boss_3_i()],
        e
    },
    i.boss_0_i = function() {
        var e = new eui.Group;
        return this.boss_0 = e,
        e.x = 0,
        e.y = 6,
        e.elementsContent = [this._Image5_i(), this.img_boss_0_i(), this._Image6_i(), this.txt_name_0_i(), this.beatmask_0_i(), this.flag_win_0_i(), this.flag_close_0_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 373,
        e.source = "sorensen_final_level_4_banS_png",
        e.width = 182,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_boss_0_i = function() {
        var e = new eui.Image;
        return this.img_boss_0 = e,
        e.height = 319,
        e.width = 162,
        e.x = 10,
        e.y = 45,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_level_4_bossLine_png",
        e.width = 155,
        e.x = 14,
        e.y = 327,
        e
    },
    i.txt_name_0_i = function() {
        var e = new eui.Label;
        return this.txt_name_0 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "大地之神•卡修斯",
        e.textColor = 16769255,
        e.y = 338,
        e
    },
    i.beatmask_0_i = function() {
        var e = new eui.Image;
        return this.beatmask_0 = e,
        e.height = 318,
        e.source = "sorensen_final_level_4_beatmask_png",
        e.width = 162,
        e.x = 10,
        e.y = 45,
        e
    },
    i.flag_win_0_i = function() {
        var e = new eui.Image;
        return this.flag_win_0 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_win_png",
        e.width = 161,
        e.x = 11,
        e.y = 196,
        e
    },
    i.flag_close_0_i = function() {
        var e = new eui.Image;
        return this.flag_close_0 = e,
        e.height = 77,
        e.source = "sorensen_final_level_4_flag_close_png",
        e.width = 94,
        e.x = 44,
        e.y = 166,
        e
    },
    i.boss_1_i = function() {
        var e = new eui.Group;
        return this.boss_1 = e,
        e.x = 178,
        e.y = 6,
        e.elementsContent = [this._Image7_i(), this.img_boss_1_i(), this._Image8_i(), this.txt_name_1_i(), this.beatmask_1_i(), this.flag_win_1_i(), this.flag_close_1_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 373,
        e.source = "sorensen_final_level_4_banS_png",
        e.width = 182,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_boss_1_i = function() {
        var e = new eui.Image;
        return this.img_boss_1 = e,
        e.height = 319,
        e.width = 162,
        e.x = 10,
        e.y = 45,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_level_4_bossLine_png",
        e.width = 155,
        e.x = 14,
        e.y = 327,
        e
    },
    i.txt_name_1_i = function() {
        var e = new eui.Label;
        return this.txt_name_1 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "夜魔之神•布莱克",
        e.textColor = 16769256,
        e.y = 338,
        e
    },
    i.beatmask_1_i = function() {
        var e = new eui.Image;
        return this.beatmask_1 = e,
        e.height = 318,
        e.source = "sorensen_final_level_4_beatmask_png",
        e.width = 162,
        e.x = 10,
        e.y = 45,
        e
    },
    i.flag_win_1_i = function() {
        var e = new eui.Image;
        return this.flag_win_1 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_win_png",
        e.width = 161,
        e.x = 11,
        e.y = 196,
        e
    },
    i.flag_close_1_i = function() {
        var e = new eui.Image;
        return this.flag_close_1 = e,
        e.height = 77,
        e.source = "sorensen_final_level_4_flag_close_png",
        e.width = 94,
        e.x = 44,
        e.y = 166,
        e
    },
    i.boss_4_i = function() {
        var e = new eui.Group;
        return this.boss_4 = e,
        e.x = 358,
        e.y = 0,
        e.elementsContent = [this._Image9_i(), this.img_boss_4_i(), this._Image10_i(), this.txt_name_4_i(), this.beatmask_4_i(), this.flag_win_4_i(), this.flag_close_4_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 401,
        e.source = "sorensen_final_level_4_banM_png",
        e.width = 242,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_boss_4_i = function() {
        var e = new eui.Image;
        return this.img_boss_4 = e,
        e.height = 338,
        e.width = 222,
        e.x = 10,
        e.y = 45,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_level_4_bossLine_png",
        e.width = 215,
        e.x = 14,
        e.y = 353,
        e
    },
    i.txt_name_4_i = function() {
        var e = new eui.Label;
        return this.txt_name_4 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "炽羽炎凰•朱雀",
        e.textColor = 16769256,
        e.y = 362,
        e
    },
    i.beatmask_4_i = function() {
        var e = new eui.Image;
        return this.beatmask_4 = e,
        e.height = 346,
        e.source = "sorensen_final_level_4_beatmask_png",
        e.width = 222,
        e.x = 10,
        e.y = 45,
        e
    },
    i.flag_win_4_i = function() {
        var e = new eui.Image;
        return this.flag_win_4 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_win_png",
        e.width = 161,
        e.x = 34,
        e.y = 202,
        e
    },
    i.flag_close_4_i = function() {
        var e = new eui.Image;
        return this.flag_close_4 = e,
        e.height = 77,
        e.source = "sorensen_final_level_4_flag_close_png",
        e.width = 94,
        e.x = 68,
        e.y = 176,
        e
    },
    i.boss_2_i = function() {
        var e = new eui.Group;
        return this.boss_2 = e,
        e.x = 598,
        e.y = 6,
        e.elementsContent = [this._Image11_i(), this.img_boss_2_i(), this._Image12_i(), this.txt_name_2_i(), this.beatmask_2_i(), this.flag_win_2_i(), this.flag_close_2_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 373,
        e.source = "sorensen_final_level_4_banS_png",
        e.width = 182,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_boss_2_i = function() {
        var e = new eui.Image;
        return this.img_boss_2 = e,
        e.height = 319,
        e.width = 162,
        e.x = 10,
        e.y = 45,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_level_4_bossLine_png",
        e.width = 155,
        e.x = 14,
        e.y = 327,
        e
    },
    i.txt_name_2_i = function() {
        var e = new eui.Label;
        return this.txt_name_2 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "加奥什",
        e.textColor = 16769256,
        e.y = 338,
        e
    },
    i.beatmask_2_i = function() {
        var e = new eui.Image;
        return this.beatmask_2 = e,
        e.height = 318,
        e.source = "sorensen_final_level_4_beatmask_png",
        e.width = 162,
        e.x = 10,
        e.y = 45,
        e
    },
    i.flag_win_2_i = function() {
        var e = new eui.Image;
        return this.flag_win_2 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_win_png",
        e.width = 161,
        e.x = 11,
        e.y = 196,
        e
    },
    i.flag_close_2_i = function() {
        var e = new eui.Image;
        return this.flag_close_2 = e,
        e.height = 77,
        e.source = "sorensen_final_level_4_flag_close_png",
        e.width = 94,
        e.x = 44,
        e.y = 166,
        e
    },
    i.boss_3_i = function() {
        var e = new eui.Group;
        return this.boss_3 = e,
        e.x = 776,
        e.y = 6,
        e.elementsContent = [this._Image13_i(), this.img_boss_3_i(), this._Image14_i(), this.txt_name_3_i(), this.beatmask_3_i(), this.flag_win_3_i(), this.flag_close_3_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 373,
        e.source = "sorensen_final_level_4_banS_png",
        e.width = 182,
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_boss_3_i = function() {
        var e = new eui.Image;
        return this.img_boss_3 = e,
        e.height = 319,
        e.width = 162,
        e.x = 10,
        e.y = 45,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_level_4_bossLine_png",
        e.width = 155,
        e.x = 14,
        e.y = 327,
        e
    },
    i.txt_name_3_i = function() {
        var e = new eui.Label;
        return this.txt_name_3 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "圣世之光•奥尔德",
        e.textColor = 16769256,
        e.y = 338,
        e
    },
    i.beatmask_3_i = function() {
        var e = new eui.Image;
        return this.beatmask_3 = e,
        e.height = 318,
        e.source = "sorensen_final_level_4_beatmask_png",
        e.width = 162,
        e.x = 10,
        e.y = 45,
        e
    },
    i.flag_win_3_i = function() {
        var e = new eui.Image;
        return this.flag_win_3 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_win_png",
        e.width = 161,
        e.x = 11,
        e.y = 196,
        e
    },
    i.flag_close_3_i = function() {
        var e = new eui.Image;
        return this.flag_close_3 = e,
        e.height = 77,
        e.source = "sorensen_final_level_4_flag_close_png",
        e.width = 94,
        e.x = 44,
        e.y = 166,
        e
    },
    i.btnOneTap_i = function() {
        var e = new eui.Image;
        return this.btnOneTap = e,
        e.height = 65,
        e.right = 41,
        e.source = "sorensen_final_level_4_btnOneTap_png",
        e.width = 215,
        e.y = 556,
        e
    },
    i.grp_btnleft_i = function() {
        var e = new eui.Group;
        return this.grp_btnleft = e,
        e.x = 34,
        e.y = 469,
        e.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "sorensen_final_level_2_imgBtn_pet_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "sorensen_final_level_2_imgBtn_cure_png",
        e.width = 60,
        e.x = 0,
        e.y = 68,
        e
    },
    i._Group10_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -6,
        e.y = 55,
        e.elementsContent = [this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group9_i()],
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 912,
        e.y = 0,
        e.elementsContent = [this.img_selected_0_i(), this.galaxy_0_i(), this.lock_0_i(), this.flag_beated_0_i()],
        e
    },
    i.img_selected_0_i = function() {
        var e = new eui.Image;
        return this.img_selected_0 = e,
        e.height = 137,
        e.source = "sorensen_final_level_4_img_selected_png",
        e.visible = !1,
        e.width = 204,
        e.x = 0,
        e.y = 1,
        e
    },
    i.galaxy_0_i = function() {
        var e = new eui.Image;
        return this.galaxy_0 = e,
        e.height = 140,
        e.source = "sorensen_final_level_4_galaxy_0_png",
        e.visible = !0,
        e.width = 125,
        e.x = 47,
        e.y = 0,
        e
    },
    i.lock_0_i = function() {
        var e = new eui.Image;
        return this.lock_0 = e,
        e.height = 76,
        e.source = "sorensen_final_level_4_lock_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 68,
        e.x = 75,
        e.y = 28,
        e
    },
    i.flag_beated_0_i = function() {
        var e = new eui.Image;
        return this.flag_beated_0 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_beated_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 121,
        e.x = 49,
        e.y = 56,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.img_selected_1_i(), this.galaxy_1_i(), this.lock_1_i(), this.flag_beated_1_i()],
        e
    },
    i.img_selected_1_i = function() {
        var e = new eui.Image;
        return this.img_selected_1 = e,
        e.height = 137,
        e.source = "sorensen_final_level_4_img_selected_png",
        e.visible = !1,
        e.width = 204,
        e.x = 0,
        e.y = 1,
        e
    },
    i.galaxy_1_i = function() {
        var e = new eui.Image;
        return this.galaxy_1 = e,
        e.height = 140,
        e.source = "sorensen_final_level_4_galaxy_1_png",
        e.visible = !0,
        e.width = 125,
        e.x = 47,
        e.y = 0,
        e
    },
    i.lock_1_i = function() {
        var e = new eui.Image;
        return this.lock_1 = e,
        e.height = 76,
        e.source = "sorensen_final_level_4_lock_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 68,
        e.x = 75,
        e.y = 28,
        e
    },
    i.flag_beated_1_i = function() {
        var e = new eui.Image;
        return this.flag_beated_1 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_beated_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 121,
        e.x = 49,
        e.y = 56,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 152,
        e.y = 0,
        e.elementsContent = [this.img_selected_2_i(), this.galaxy_2_i(), this.lock_2_i(), this.flag_beated_2_i()],
        e
    },
    i.img_selected_2_i = function() {
        var e = new eui.Image;
        return this.img_selected_2 = e,
        e.height = 137,
        e.source = "sorensen_final_level_4_img_selected_png",
        e.visible = !1,
        e.width = 204,
        e.x = 0,
        e.y = 1,
        e
    },
    i.galaxy_2_i = function() {
        var e = new eui.Image;
        return this.galaxy_2 = e,
        e.height = 140,
        e.source = "sorensen_final_level_4_galaxy_2_png",
        e.visible = !0,
        e.width = 125,
        e.x = 47,
        e.y = 0,
        e
    },
    i.lock_2_i = function() {
        var e = new eui.Image;
        return this.lock_2 = e,
        e.height = 76,
        e.source = "sorensen_final_level_4_lock_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 68,
        e.x = 75,
        e.y = 28,
        e
    },
    i.flag_beated_2_i = function() {
        var e = new eui.Image;
        return this.flag_beated_2 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_beated_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 121,
        e.x = 49,
        e.y = 56,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 304,
        e.y = 0,
        e.elementsContent = [this.img_selected_3_i(), this.galaxy_3_i(), this.lock_3_i(), this.flag_beated_3_i()],
        e
    },
    i.img_selected_3_i = function() {
        var e = new eui.Image;
        return this.img_selected_3 = e,
        e.height = 137,
        e.source = "sorensen_final_level_4_img_selected_png",
        e.visible = !1,
        e.width = 204,
        e.x = 0,
        e.y = 1,
        e
    },
    i.galaxy_3_i = function() {
        var e = new eui.Image;
        return this.galaxy_3 = e,
        e.height = 140,
        e.source = "sorensen_final_level_4_galaxy_3_png",
        e.visible = !0,
        e.width = 125,
        e.x = 47,
        e.y = 0,
        e
    },
    i.lock_3_i = function() {
        var e = new eui.Image;
        return this.lock_3 = e,
        e.height = 76,
        e.source = "sorensen_final_level_4_lock_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 68,
        e.x = 75,
        e.y = 28,
        e
    },
    i.flag_beated_3_i = function() {
        var e = new eui.Image;
        return this.flag_beated_3 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_beated_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 121,
        e.x = 49,
        e.y = 56,
        e
    },
    i._Group7_i = function() {
        var e = new eui.Group;
        return e.x = 456,
        e.y = 0,
        e.elementsContent = [this.img_selected_4_i(), this.galaxy_4_i(), this.lock_4_i(), this.flag_beated_4_i()],
        e
    },
    i.img_selected_4_i = function() {
        var e = new eui.Image;
        return this.img_selected_4 = e,
        e.height = 137,
        e.source = "sorensen_final_level_4_img_selected_png",
        e.visible = !1,
        e.width = 204,
        e.x = 0,
        e.y = 1,
        e
    },
    i.galaxy_4_i = function() {
        var e = new eui.Image;
        return this.galaxy_4 = e,
        e.height = 140,
        e.source = "sorensen_final_level_4_galaxy_4_png",
        e.visible = !0,
        e.width = 125,
        e.x = 47,
        e.y = 0,
        e
    },
    i.lock_4_i = function() {
        var e = new eui.Image;
        return this.lock_4 = e,
        e.height = 76,
        e.source = "sorensen_final_level_4_lock_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 68,
        e.x = 75,
        e.y = 28,
        e
    },
    i.flag_beated_4_i = function() {
        var e = new eui.Image;
        return this.flag_beated_4 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_beated_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 121,
        e.x = 49,
        e.y = 56,
        e
    },
    i._Group8_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 608,
        e.y = 0,
        e.elementsContent = [this.img_selected_5_i(), this.galaxy_5_i(), this.lock_5_i(), this.flag_beated_5_i()],
        e
    },
    i.img_selected_5_i = function() {
        var e = new eui.Image;
        return this.img_selected_5 = e,
        e.height = 137,
        e.source = "sorensen_final_level_4_img_selected_png",
        e.visible = !1,
        e.width = 204,
        e.x = 0,
        e.y = 1,
        e
    },
    i.galaxy_5_i = function() {
        var e = new eui.Image;
        return this.galaxy_5 = e,
        e.height = 140,
        e.source = "sorensen_final_level_4_galaxy_5_png",
        e.visible = !0,
        e.width = 125,
        e.x = 47,
        e.y = 0,
        e
    },
    i.lock_5_i = function() {
        var e = new eui.Image;
        return this.lock_5 = e,
        e.height = 76,
        e.source = "sorensen_final_level_4_lock_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 68,
        e.x = 75,
        e.y = 28,
        e
    },
    i.flag_beated_5_i = function() {
        var e = new eui.Image;
        return this.flag_beated_5 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_beated_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 121,
        e.x = 49,
        e.y = 56,
        e
    },
    i._Group9_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 760,
        e.y = 0,
        e.elementsContent = [this.img_selected_6_i(), this.galaxy_6_i(), this.lock_6_i(), this.flag_beated_6_i()],
        e
    },
    i.img_selected_6_i = function() {
        var e = new eui.Image;
        return this.img_selected_6 = e,
        e.height = 137,
        e.source = "sorensen_final_level_4_img_selected_png",
        e.visible = !1,
        e.width = 204,
        e.x = 0,
        e.y = 1,
        e
    },
    i.galaxy_6_i = function() {
        var e = new eui.Image;
        return this.galaxy_6 = e,
        e.height = 140,
        e.source = "sorensen_final_level_4_galaxy_6_png",
        e.visible = !0,
        e.width = 125,
        e.x = 47,
        e.y = 0,
        e
    },
    i.lock_6_i = function() {
        var e = new eui.Image;
        return this.lock_6 = e,
        e.height = 76,
        e.source = "sorensen_final_level_4_lock_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 68,
        e.x = 75,
        e.y = 28,
        e
    },
    i.flag_beated_6_i = function() {
        var e = new eui.Image;
        return this.flag_beated_6 = e,
        e.height = 31,
        e.source = "sorensen_final_level_4_flag_beated_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 121,
        e.x = 49,
        e.y = 56,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.horizontalCenter = 1,
        e.source = "sorensen_final_level_4_title_png",
        e.width = 134,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SorensenFinalPowerUpSkin.exml"] = window.SorensenFinalPowerUpSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnGet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.btnGet_i(), this._Image11_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "sorensen_final_bg_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.right = 44,
        e.y = 7,
        e.elementsContent = [this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 345,
        e.scale9Grid = new egret.Rectangle(11, 10, 10, 11),
        e.source = "sorensen_final_power_up_txtbg_png",
        e.width = 289,
        e.x = 0,
        e.y = 187,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 6,
        e.size = 18,
        e.text = "登场时消除对手能力提升状态，\n消除成功则对手2回合内无法处\n于能力提升状态，同时对手下1\n次属性技能无效；回合开始时若\n对手有高于自身的能力等级，则\n使对手该能力等级变为与自身相\n同；自身处于能力提升状态时，\n每回合恢复自身最大体力的1/3\n并造成等量固定伤害，自身不处\n于能力提升状态时有50%几率免\n疫攻击伤害，未触发则受到的攻\n击减少50%（boss无效）",
        e.textColor = 16773461,
        e.x = 19,
        e.y = 223,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 217,
        e.source = "sorensen_final_power_up_iconBg_png",
        e.width = 120,
        e.x = 159,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.source = "sorensen_final_power_up_icon_texing_png",
        e.width = 52,
        e.x = 194,
        e.y = 127,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 5.5,
        e.y = 259,
        e.elementsContent = [this._Image5_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Image6_i(), this._Image7_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 104,
        e.scale9Grid = new egret.Rectangle(11, 10, 10, 11),
        e.source = "sorensen_final_power_up_txtbg_png",
        e.width = 363,
        e.x = 0,
        e.y = 176,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 6,
        e.size = 18,
        e.text = "体力10/95\n特防6/32",
        e.textColor = 16773461,
        e.x = 33,
        e.y = 217,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 6,
        e.size = 18,
        e.text = "特攻5/50",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 217,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 6,
        e.size = 18,
        e.text = "防御6/32",
        e.textColor = 16773461,
        e.x = 258,
        e.y = 217,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 6,
        e.size = 18,
        e.text = "速度5/32",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 241,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 217,
        e.source = "sorensen_final_power_up_iconBg_png",
        e.width = 120,
        e.x = 126,
        e.y = 0,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 74,
        e.source = "sorensen_final_power_up_40988_png",
        e.width = 78,
        e.x = 147,
        e.y = 119,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 55,
        e.y = 7,
        e.elementsContent = [this._Image8_i(), this._Label6_i(), this._Image9_i(), this._Image10_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 345,
        e.scale9Grid = new egret.Rectangle(11, 10, 10, 11),
        e.source = "sorensen_final_power_up_txtbg_png",
        e.width = 289,
        e.x = 0,
        e.y = 187,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 6,
        e.size = 18,
        e.text = "威力:160；\n\n必中；\n\n消除对手能力提升状态，消除\n成功对手下2次攻击技能无效；\n\n未击败对手则下2回合自身先制\n+2；\n\n对手每有1项能力等级与自身相\n同则附加120点固定伤害",
        e.textColor = 16773461,
        e.x = 22,
        e.y = 225,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 217,
        e.source = "sorensen_final_power_up_iconBg_png",
        e.width = 120,
        e.x = 10,
        e.y = 0,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 58,
        e.source = "sorensen_final_power_up_icon_1_png",
        e.width = 54,
        e.x = 44,
        e.y = 128,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 65,
        e.right = 41,
        e.source = "sorensen_final_power_up_btnGet_png",
        e.width = 215,
        e.y = 556,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 85,
        e.horizontalCenter = -10,
        e.source = "sorensen_final_power_up_title_png",
        e.width = 836,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SorensenFinalSellPopSkin.exml"] = window.SorensenFinalSellPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "txt_attr_0", "txt_attr_1", "txt_nature", "btnSet_0", "btnSet_1", "btnBuy", "_rect", "btnMin5", "inputTxt5", "btnMax5", "btnPlus5", "selectItem5", "btnMin0", "inputTxt0", "btnMax0", "btnPlus0", "selectItem0", "btnMin1", "inputTxt1", "btnMax1", "btnPlus1", "selectItem1", "btnMin2", "inputTxt2", "btnMax2", "btnPlus2", "selectItem2", "btnMin3", "inputTxt3", "btnMax3", "btnPlus3", "selectItem3", "btnMin4", "inputTxt4", "btnMax4", "btnPlus4", "selectItem4", "txt_studyNum", "img_btnAssign", "img_btnReset", "grp_study"],
        this.height = 524,
        this.width = 796,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Label1_i(), this._Label2_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this.txt_attr_0_i(), this.txt_attr_1_i(), this._Label8_i(), this.txt_nature_i(), this._Label9_i(), this._Label10_i(), this._Group1_i(), this.btnSet_0_i(), this.btnSet_1_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this.btnBuy_i(), this.grp_study_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "10",
            e.right = "10",
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 3143013,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 10,
            e.right = 10,
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 2966635,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "10",
            e.right = "10",
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 3143013,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 10,
            e.right = 10,
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 2966635,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "10",
            e.right = "10",
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 3143013,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 10,
            e.right = 10,
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 2966635,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "10",
            e.right = "10",
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 3143013,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 10,
            e.right = 10,
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 2966635,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "10",
            e.right = "10",
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 3143013,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 10,
            e.right = 10,
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 2966635,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "10",
            e.right = "10",
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 3143013,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 10,
            e.right = 10,
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 2966635,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 453,
        e.source = "sorensen_final_sell_pop_bg_png",
        e.width = 783,
        e.x = 0,
        e.y = 19,
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 495,
        e.source = "sorensen_final_sell_pop_pet_png",
        e.width = 465,
        e.x = 6,
        e.y = 30,
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "sorensen_final_sell_pop_title_png",
        e.width = 375,
        e.x = 371,
        e.y = 31,
        e
    },
    o.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 56,
        e.source = "sorensen_final_sell_pop_BtnClose_png",
        e.width = 54,
        e.x = 742,
        e.y = 0,
        e
    },
    o._Label1_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "极品等级：",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 381,
        e.y = 90,
        e
    },
    o._Label2_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "极品学习力：",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 381,
        e.y = 129,
        e
    },
    o._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 48,
        e.source = "sorensen_final_sell_pop_right_png",
        e.width = 49,
        e.x = 633,
        e.y = 77,
        e
    },
    o._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 48,
        e.source = "sorensen_final_sell_pop_right_png",
        e.width = 49,
        e.x = 633,
        e.y = 127,
        e
    },
    o._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 48,
        e.source = "sorensen_final_sell_pop_right_png",
        e.width = 49,
        e.x = 633,
        e.y = 177,
        e
    },
    o._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 48,
        e.source = "sorensen_final_sell_pop_right_png",
        e.width = 49,
        e.x = 633,
        e.y = 221,
        e
    },
    o._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 48,
        e.source = "sorensen_final_sell_pop_right_png",
        e.width = 49,
        e.x = 633,
        e.y = 265,
        e
    },
    o._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 48,
        e.source = "sorensen_final_sell_pop_right_png",
        e.width = 49,
        e.x = 633,
        e.y = 308,
        e
    },
    o._Label3_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "极品天赋：",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 381,
        e.y = 192,
        e
    },
    o._Label4_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "极品性格：",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 381,
        e.y = 236,
        e
    },
    o._Label5_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "极品体力上限：",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 381,
        e.y = 280,
        e
    },
    o._Label6_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "极品特性：",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 381,
        e.y = 324,
        e
    },
    o._Label7_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "100",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 603,
        e.y = 91,
        e
    },
    o.txt_attr_0_i = function() {
        var e = new eui.Label;
        return this.txt_attr_0 = e,
        e.lineSpacing = 3,
        e.right = 165,
        e.size = 20,
        e.text = "特攻255",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.y = 129,
        e
    },
    o.txt_attr_1_i = function() {
        var e = new eui.Label;
        return this.txt_attr_1 = e,
        e.lineSpacing = 3,
        e.right = 165,
        e.size = 20,
        e.text = "速度255",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.y = 151,
        e
    },
    o._Label8_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "31",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 615,
        e.y = 192,
        e
    },
    o.txt_nature_i = function() {
        var e = new eui.Label;
        return this.txt_nature = e,
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "保守",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 593,
        e.y = 235,
        e
    },
    o._Label9_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "20",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 612,
        e.y = 280,
        e
    },
    o._Label10_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "随机",
        e.textColor = 16756669,
        e.touchEnabled = !1,
        e.x = 592,
        e.y = 323,
        e
    },
    o._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 395,
        e.y = 365,
        e.elementsContent = [this._Image10_i(), this._Label11_i(), this._Image11_i(), this._Image12_i(), this._Label12_i(), this._Image13_i()],
        e
    },
    o._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "sorensen_final_sell_pop_pricebg_png",
        e.width = 351,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Label11_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 20,
        e.text = "原价：620",
        e.textColor = 10575663,
        e.touchEnabled = !1,
        e.x = 48,
        e.y = 4,
        e
    },
    o._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "sorensen_final_sell_pop_diamond_png",
        e.width = 26,
        e.x = 141,
        e.y = 0,
        e
    },
    o._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "sorensen_final_sell_pop_delline_png",
        e.width = 134,
        e.x = 39,
        e.y = 12,
        e
    },
    o._Label12_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 22,
        e.text = "现价：498",
        e.textColor = 16769060,
        e.touchEnabled = !1,
        e.x = 180,
        e.y = 2,
        e
    },
    o._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "sorensen_final_sell_pop_diamond_png",
        e.width = 26,
        e.x = 283,
        e.y = 0,
        e
    },
    o.btnSet_0_i = function() {
        var e = new eui.Image;
        return this.btnSet_0 = e,
        e.height = 40,
        e.source = "sorensen_final_sell_pop_btnSet_png",
        e.width = 70,
        e.x = 685,
        e.y = 131,
        e
    },
    o.btnSet_1_i = function() {
        var e = new eui.Image;
        return this.btnSet_1 = e,
        e.height = 40,
        e.source = "sorensen_final_sell_pop_btnSet_png",
        e.width = 70,
        e.x = 685,
        e.y = 225,
        e
    },
    o._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_sell_pop_line_png",
        e.width = 413,
        e.x = 363,
        e.y = 121,
        e
    },
    o._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_sell_pop_line_png",
        e.width = 414,
        e.x = 362,
        e.y = 179,
        e
    },
    o._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_sell_pop_line_png",
        e.width = 414,
        e.x = 362,
        e.y = 222,
        e
    },
    o._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_sell_pop_line_png",
        e.width = 413,
        e.x = 363,
        e.y = 267,
        e
    },
    o._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_sell_pop_line_png",
        e.width = 413,
        e.x = 363,
        e.y = 310,
        e
    },
    o.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.height = 52,
        e.source = "sorensen_final_sell_pop_btnBuy_png",
        e.width = 176,
        e.x = 480,
        e.y = 398,
        e
    },
    o.grp_study_i = function() {
        var e = new eui.Group;
        return this.grp_study = e,
        e.height = 640,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.visible = !0,
        e.width = 1136,
        e.elementsContent = [this._rect_i(), this._Group3_i()],
        e
    },
    o._rect_i = function() {
        var e = new eui.Rect;
        return this._rect = e,
        e.fillAlpha = 0,
        e.percentHeight = 100,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.percentWidth = 100,
        e
    },
    o._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.elementsContent = [this._Image19_i(), this._Image20_i(), this._Group2_i(), this._Image37_i(), this._Label13_i(), this._Image38_i(), this.txt_studyNum_i(), this.img_btnAssign_i(), this.img_btnReset_i()],
        e
    },
    o._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 304,
        e.source = "common_texture_003_png",
        e.visible = !0,
        e.width = 486,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image20_i = function() {
        var e = new eui.Image;
        return e.height = 175,
        e.source = "common_texture_003_png",
        e.width = 468,
        e.x = 9,
        e.y = 46,
        e
    },
    o._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 15,
        e.y = 71,
        e.elementsContent = [this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i(), this._Image25_i(), this._Image26_i(), this._Image27_i(), this._Image28_i(), this._Image29_i(), this._Image30_i(), this.selectItem5_i(), this.selectItem0_i(), this.selectItem1_i(), this.selectItem2_i(), this.selectItem3_i(), this.selectItem4_i()],
        e
    },
    o._Image21_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_texture_line_1_png",
        e.width = 220,
        e.x = 0,
        e.y = 86,
        e
    },
    o._Image22_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_texture_line_1_png",
        e.width = 220,
        e.x = 235,
        e.y = 86,
        e
    },
    o._Image23_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_texture_line_1_png",
        e.width = 220,
        e.x = 0,
        e.y = 37,
        e
    },
    o._Image24_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "sorensen_final_texture_line_1_png",
        e.width = 220,
        e.x = 235,
        e.y = 37,
        e
    },
    o._Image25_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "common_speed_png",
        e.width = 23,
        e.x = 15,
        e.y = 102,
        e
    },
    o._Image26_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "common_hp_png",
        e.width = 22,
        e.x = 247,
        e.y = 101,
        e
    },
    o._Image27_i = function() {
        var e = new eui.Image;
        return e.height = 23,
        e.source = "common_satk_png",
        e.width = 20,
        e.x = 17,
        e.y = 51,
        e
    },
    o._Image28_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "common_sdef_png",
        e.width = 18,
        e.x = 249,
        e.y = 52,
        e
    },
    o._Image29_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "common_def_png",
        e.width = 18,
        e.x = 249,
        e.y = 1,
        e
    },
    o._Image30_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "common_atk_png",
        e.width = 21,
        e.x = 16,
        e.y = 1,
        e
    },
    o.selectItem5_i = function() {
        var e = new eui.Group;
        return this.selectItem5 = e,
        e.x = 49,
        e.y = 100,
        e.elementsContent = [this.btnMin5_i(), this._Image31_i(), this.inputTxt5_i(), this.btnMax5_i(), this.btnPlus5_i()],
        e
    },
    o.btnMin5_i = function() {
        var e = new eui.Image;
        return this.btnMin5 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMin_png",
        e.width = 24,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image31_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "sorensen_final_attribute_tbg_png",
        e.width = 58,
        e.x = 26,
        e.y = 0,
        e
    },
    o.inputTxt5_i = function() {
        var e = new eui.TextInput;
        return this.inputTxt5 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 24,
        e.maxChars = 3,
        e.name = "inputTxt_5",
        e.restrict = '"0-9"',
        e.text = "255",
        e.textColor = 3143013,
        e.width = 57,
        e.x = 27,
        e.y = 4,
        e.skinName = i,
        e
    },
    o.btnMax5_i = function() {
        var e = new eui.Image;
        return this.btnMax5 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMax_png",
        e.width = 48,
        e.x = 118,
        e.y = 0,
        e
    },
    o.btnPlus5_i = function() {
        var e = new eui.Image;
        return this.btnPlus5 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnPlus_png",
        e.width = 24,
        e.x = 86,
        e.y = 0,
        e
    },
    o.selectItem0_i = function() {
        var e = new eui.Group;
        return this.selectItem0 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 280,
        e.y = 100,
        e.elementsContent = [this.btnMin0_i(), this._Image32_i(), this.inputTxt0_i(), this.btnMax0_i(), this.btnPlus0_i()],
        e
    },
    o.btnMin0_i = function() {
        var e = new eui.Image;
        return this.btnMin0 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMin_png",
        e.width = 24,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image32_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "sorensen_final_attribute_tbg_png",
        e.width = 58,
        e.x = 26,
        e.y = 0,
        e
    },
    o.inputTxt0_i = function() {
        var e = new eui.TextInput;
        return this.inputTxt0 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 24,
        e.maxChars = 3,
        e.name = "inputTxt_0",
        e.restrict = '"0-9"',
        e.text = "255",
        e.textColor = 3143013,
        e.width = 57,
        e.x = 27,
        e.y = 4,
        e.skinName = n,
        e
    },
    o.btnMax0_i = function() {
        var e = new eui.Image;
        return this.btnMax0 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMax_png",
        e.width = 48,
        e.x = 118,
        e.y = 0,
        e
    },
    o.btnPlus0_i = function() {
        var e = new eui.Image;
        return this.btnPlus0 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnPlus_png",
        e.width = 24,
        e.x = 86,
        e.y = 0,
        e
    },
    o.selectItem1_i = function() {
        var e = new eui.Group;
        return this.selectItem1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 49,
        e.y = 0,
        e.elementsContent = [this.btnMin1_i(), this._Image33_i(), this.inputTxt1_i(), this.btnMax1_i(), this.btnPlus1_i()],
        e
    },
    o.btnMin1_i = function() {
        var e = new eui.Image;
        return this.btnMin1 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMin_png",
        e.width = 24,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image33_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "sorensen_final_attribute_tbg_png",
        e.width = 58,
        e.x = 26,
        e.y = 0,
        e
    },
    o.inputTxt1_i = function() {
        var e = new eui.TextInput;
        return this.inputTxt1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 24,
        e.maxChars = 3,
        e.name = "inputTxt_1",
        e.restrict = '"0-9"',
        e.text = "255",
        e.textColor = 3143013,
        e.width = 57,
        e.x = 27,
        e.y = 4,
        e.skinName = _,
        e
    },
    o.btnMax1_i = function() {
        var e = new eui.Image;
        return this.btnMax1 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMax_png",
        e.width = 48,
        e.x = 118,
        e.y = 0,
        e
    },
    o.btnPlus1_i = function() {
        var e = new eui.Image;
        return this.btnPlus1 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnPlus_png",
        e.width = 24,
        e.x = 86,
        e.y = 0,
        e
    },
    o.selectItem2_i = function() {
        var e = new eui.Group;
        return this.selectItem2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 280,
        e.y = 0,
        e.elementsContent = [this.btnMin2_i(), this._Image34_i(), this.inputTxt2_i(), this.btnMax2_i(), this.btnPlus2_i()],
        e
    },
    o.btnMin2_i = function() {
        var e = new eui.Image;
        return this.btnMin2 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMin_png",
        e.width = 24,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image34_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "sorensen_final_attribute_tbg_png",
        e.width = 58,
        e.x = 26,
        e.y = 0,
        e
    },
    o.inputTxt2_i = function() {
        var e = new eui.TextInput;
        return this.inputTxt2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 24,
        e.maxChars = 3,
        e.name = "inputTxt_2",
        e.restrict = '"0-9"',
        e.text = "255",
        e.textColor = 3143013,
        e.width = 57,
        e.x = 27,
        e.y = 4,
        e.skinName = s,
        e
    },
    o.btnMax2_i = function() {
        var e = new eui.Image;
        return this.btnMax2 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMax_png",
        e.width = 48,
        e.x = 118,
        e.y = 0,
        e
    },
    o.btnPlus2_i = function() {
        var e = new eui.Image;
        return this.btnPlus2 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnPlus_png",
        e.width = 24,
        e.x = 86,
        e.y = 0,
        e
    },
    o.selectItem3_i = function() {
        var e = new eui.Group;
        return this.selectItem3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 49,
        e.y = 51,
        e.elementsContent = [this.btnMin3_i(), this._Image35_i(), this.inputTxt3_i(), this.btnMax3_i(), this.btnPlus3_i()],
        e
    },
    o.btnMin3_i = function() {
        var e = new eui.Image;
        return this.btnMin3 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMin_png",
        e.width = 24,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image35_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "sorensen_final_attribute_tbg_png",
        e.width = 58,
        e.x = 26,
        e.y = 0,
        e
    },
    o.inputTxt3_i = function() {
        var e = new eui.TextInput;
        return this.inputTxt3 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 24,
        e.maxChars = 3,
        e.name = "inputTxt_3",
        e.restrict = '"0-9"',
        e.text = "255",
        e.textColor = 3143013,
        e.width = 57,
        e.x = 27,
        e.y = 4,
        e.skinName = r,
        e
    },
    o.btnMax3_i = function() {
        var e = new eui.Image;
        return this.btnMax3 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMax_png",
        e.width = 48,
        e.x = 118,
        e.y = 0,
        e
    },
    o.btnPlus3_i = function() {
        var e = new eui.Image;
        return this.btnPlus3 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnPlus_png",
        e.width = 24,
        e.x = 86,
        e.y = 0,
        e
    },
    o.selectItem4_i = function() {
        var e = new eui.Group;
        return this.selectItem4 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 280,
        e.y = 51,
        e.elementsContent = [this.btnMin4_i(), this._Image36_i(), this.inputTxt4_i(), this.btnMax4_i(), this.btnPlus4_i()],
        e
    },
    o.btnMin4_i = function() {
        var e = new eui.Image;
        return this.btnMin4 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMin_png",
        e.width = 24,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image36_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "sorensen_final_attribute_tbg_png",
        e.width = 58,
        e.x = 26,
        e.y = 0,
        e
    },
    o.inputTxt4_i = function() {
        var e = new eui.TextInput;
        return this.inputTxt4 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 24,
        e.maxChars = 3,
        e.name = "inputTxt_4",
        e.restrict = '"0-9"',
        e.text = "255",
        e.textColor = 3143013,
        e.width = 57,
        e.x = 27,
        e.y = 4,
        e.skinName = a,
        e
    },
    o.btnMax4_i = function() {
        var e = new eui.Image;
        return this.btnMax4 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnMax_png",
        e.width = 48,
        e.x = 118,
        e.y = 0,
        e
    },
    o.btnPlus4_i = function() {
        var e = new eui.Image;
        return this.btnPlus4 = e,
        e.height = 24,
        e.source = "sorensen_final_attribute_btnPlus_png",
        e.width = 24,
        e.x = 86,
        e.y = 0,
        e
    },
    o._Image37_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "sorensen_final_attribute_bg2_png",
        e.visible = !0,
        e.width = 462,
        e.x = 12,
        e.y = 15,
        e
    },
    o._Label13_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "输入你想要的学习力",
        e.textColor = 4173823,
        e.x = 40,
        e.y = 26,
        e
    },
    o._Image38_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "sorensen_final_attribute_icon2_png",
        e.width = 8,
        e.x = 22,
        e.y = 23,
        e
    },
    o.txt_studyNum_i = function() {
        var e = new eui.Label;
        return this.txt_studyNum = e,
        e.right = 21,
        e.size = 16,
        e.text = "当前学习力总和：123",
        e.textColor = 4173823,
        e.y = 26,
        e
    },
    o.img_btnAssign_i = function() {
        var e = new eui.Image;
        return this.img_btnAssign = e,
        e.height = 52,
        e.source = "sorensen_final_attribute_img_btnAssign_png",
        e.width = 176,
        e.x = 265,
        e.y = 233,
        e
    },
    o.img_btnReset_i = function() {
        var e = new eui.Image;
        return this.img_btnReset = e,
        e.height = 52,
        e.source = "sorensen_final_attribute_img_btnReset_png",
        e.width = 176,
        e.x = 45,
        e.y = 233,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SorensenFinalSkin.exml"] = window.SorensenFinalSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["level_0", "level_1", "level_2", "level_3", "btnPass_0", "btnPass_1", "btnPass_2", "btnPass_3", "flag_passed_3", "flag_passed_2", "flag_passed_1", "flag_passed_0", "btnGo", "btnEvo", "flag_evo", "btnInfo", "btnBuy", "btnUp", "btnOneTap"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this.btnEvo_i(), this.flag_evo_i(), this.btnInfo_i(), this.btnBuy_i(), this.btnUp_i(), this.btnOneTap_i(), this._Label2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "sorensen_final_bg_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -20.5,
        e.width = 1083,
        e.y = 140,
        e.elementsContent = [this.level_0_i(), this.level_1_i(), this.level_2_i(), this.level_3_i(), this.btnPass_0_i(), this.btnPass_1_i(), this.btnPass_2_i(), this.btnPass_3_i(), this.flag_passed_3_i(), this.flag_passed_2_i(), this.flag_passed_1_i(), this.flag_passed_0_i()],
        e
    },
    i.level_0_i = function() {
        var e = new eui.Image;
        return this.level_0 = e,
        e.height = 354,
        e.pixelHitTest = !0,
        e.source = "sorensen_final_level_0_png",
        e.width = 295,
        e.x = 0,
        e.y = 0,
        e
    },
    i.level_1_i = function() {
        var e = new eui.Image;
        return this.level_1 = e,
        e.height = 354,
        e.pixelHitTest = !0,
        e.source = "sorensen_final_level_1_png",
        e.width = 295,
        e.x = 256,
        e.y = 47,
        e
    },
    i.level_2_i = function() {
        var e = new eui.Image;
        return this.level_2 = e,
        e.height = 354,
        e.pixelHitTest = !0,
        e.source = "sorensen_final_level_2_png",
        e.width = 295,
        e.x = 512,
        e.y = 47,
        e
    },
    i.level_3_i = function() {
        var e = new eui.Image;
        return this.level_3 = e,
        e.height = 354,
        e.pixelHitTest = !0,
        e.source = "sorensen_final_level_3_png",
        e.width = 315,
        e.x = 768,
        e.y = 0,
        e
    },
    i.btnPass_0_i = function() {
        var e = new eui.Image;
        return this.btnPass_0 = e,
        e.height = 58,
        e.source = "sorensen_final_btnPass_png",
        e.width = 148,
        e.x = 104,
        e.y = 302,
        e
    },
    i.btnPass_1_i = function() {
        var e = new eui.Image;
        return this.btnPass_1 = e,
        e.height = 58,
        e.source = "sorensen_final_btnPass_png",
        e.width = 148,
        e.x = 360,
        e.y = 349,
        e
    },
    i.btnPass_2_i = function() {
        var e = new eui.Image;
        return this.btnPass_2 = e,
        e.height = 58,
        e.source = "sorensen_final_btnPass_png",
        e.width = 148,
        e.x = 616,
        e.y = 349,
        e
    },
    i.btnPass_3_i = function() {
        var e = new eui.Image;
        return this.btnPass_3 = e,
        e.height = 58,
        e.source = "sorensen_final_btnPass_png",
        e.width = 148,
        e.x = 873,
        e.y = 302,
        e
    },
    i.flag_passed_3_i = function() {
        var e = new eui.Image;
        return this.flag_passed_3 = e,
        e.height = 52,
        e.source = "sorensen_final_flag_passed_png",
        e.width = 144,
        e.x = 875,
        e.y = 305,
        e
    },
    i.flag_passed_2_i = function() {
        var e = new eui.Image;
        return this.flag_passed_2 = e,
        e.height = 52,
        e.source = "sorensen_final_flag_passed_png",
        e.width = 144,
        e.x = 618,
        e.y = 352,
        e
    },
    i.flag_passed_1_i = function() {
        var e = new eui.Image;
        return this.flag_passed_1 = e,
        e.height = 52,
        e.source = "sorensen_final_flag_passed_png",
        e.width = 144,
        e.x = 362,
        e.y = 352,
        e
    },
    i.flag_passed_0_i = function() {
        var e = new eui.Image;
        return this.flag_passed_0 = e,
        e.height = 52,
        e.source = "sorensen_final_flag_passed_png",
        e.width = 144,
        e.x = 107,
        e.y = 305,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 100,
        e.right = 0,
        e.width = 320,
        e.y = 524,
        e.elementsContent = [this.btnGo_i(), this._Image2_i(), this._Label1_i()],
        e
    },
    i.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.height = 100,
        e.source = "sorensen_final_btnGo_png",
        e.width = 233,
        e.x = 87,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 10,
        e.source = "sorensen_final_img_j_png",
        e.width = 39,
        e.x = 39,
        e.y = 81,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "进化必需",
        e.textColor = 8201781,
        e.x = 0,
        e.y = 56,
        e
    },
    i.btnEvo_i = function() {
        var e = new eui.Image;
        return this.btnEvo = e,
        e.height = 69,
        e.source = "sorensen_final_btnEvo_png",
        e.width = 230,
        e.x = 56,
        e.y = 552,
        e
    },
    i.flag_evo_i = function() {
        var e = new eui.Image;
        return this.flag_evo = e,
        e.height = 52,
        e.source = "sorensen_final_flag_evo_png",
        e.width = 144,
        e.x = 105,
        e.y = 561,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.height = 74,
        e.right = 9,
        e.source = "sorensen_final_btnInfo_png",
        e.width = 94,
        e.y = 28,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.height = 74,
        e.right = 113,
        e.source = "sorensen_final_btnBuy_png",
        e.visible = !1,
        e.width = 94,
        e.y = 28,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.height = 74,
        e.right = 113,
        e.source = "sorensen_final_btnUp_png",
        e.visible = !1,
        e.width = 94,
        e.y = 28,
        e
    },
    i.btnOneTap_i = function() {
        var e = new eui.Image;
        return this.btnOneTap = e,
        e.height = 74,
        e.right = 113,
        e.source = "sorensen_final_btnOneTap_png",
        e.visible = !1,
        e.width = 93,
        e.y = 28,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = -23.5,
        e.size = 16,
        e.text = "每位小赛尔只能拥有1种形态的索伦森，通过关卡挑战或拥有索伦森其他形态时，至尊购买混沌魔君索伦森可获得优惠哦！（详见活动说明）",
        e.textColor = 8201781,
        e.width = 507,
        e.y = 574,
        e
    },
    t
} (eui.Skin);