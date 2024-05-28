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
qianShang; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "QianShangLevel1PanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.addEvent(),
            this.initOldPveBtnClose(72, this, "qian_shang_level1_panel_xzzs_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.upX = this.btnBoss1.x,
            this.downX = this.btnBoss2.x,
            this.btnBoss1.x = this.downX,
            this.imgHasWin1.x += this.downX - this.upX,
            this.imgUp2.x -= this.downX - this.upX,
            this.imgUp3.x -= this.downX - this.upX,
            this.imgUp4.x -= this.downX - this.upX
        },
        i.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                t.service.showHelpPop(72)
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
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                BuyProductManager.buyProductBySocket(256123,
                function() {
                    SocketConnection.sendByQueue(e.CMDConst.CMD, [18, 2],
                    function() {
                        t.service.updateSomeValues([e.AttrConst.forever_taskState]).then(function() {
                            t.service.backToMainPanel()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                BuyProductManager.buyProductBySocket(256126,
                function() {
                    SocketConnection.sendByQueue(e.CMDConst.CMD, [18, 6 + t.numIndex],
                    function() {
                        t.service.updateSomeValues([e.AttrConst.forever_level1WinState]).then(function() {
                            t.update(),
                            t.backFromFight()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                BuyProductManager.buyProduct("256132_12733",
                function() {
                    t.service.updateSomeValues([e.AttrConst.daily_fightTime]).then(function() {
                        t.update()
                    })
                },
                t)
            },
            this);
            for (var i = function(e) {
                ImageButtonUtil.add(n["btnBoss" + e],
                function() {
                    t.setIndex(e)
                },
                n)
            },
            n = this, a = 1; 4 >= a; a++) i(a);
            ImageButtonUtil.add(this.btnFight,
            function() {
                0 == t.numFightTime ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : (1 == t.numIndex ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战伽玛千花") : 2 == t.numIndex ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战伽玛悍刀") : 3 == t.numIndex ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战伽玛鬼雀") : 4 == t.numIndex && StatLogger.log("20211022版本系统功能", "千裳", "开始挑战伽玛夜煞"), FightManager.fightNoMapBoss("", 16483 + t.numIndex))
            },
            this)
        },
        i.prototype.backFromFight = function() {
            var t = this;
            this.service.updateSomeValues([e.AttrConst.forever_taskState]).then(function() {
                var i = t.service.getValue(e.AttrConst.forever_taskState) > 0;
                if (i) {
                    Alarm.show("恭喜你找到千裳真身，继续下一关的挑战吧！",
                    function() {
                        t.service.backToMainPanel()
                    });
                    for (var n = 1; 4 >= n; n++) t["imgBoss" + n].visible = !1,
                    t["imgUp" + n].visible = !1
                } else FightManager.isWin && Alarm.show("很抱歉，这只精灵不是千裳，继续寻找吧！")
            })
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        i.prototype.setIndex = function(e, t) {
            var i = this;
            void 0 === t && (t = !1);
            var n = 200,
            a = this.numIndex;
            this.numIndex && (this["imgUp" + a].visible = !1, egret.Tween.removeTweens(this["btnBoss" + a]), egret.Tween.get(this["btnBoss" + a]).to({
                x: this.downX
            },
            t ? 0 : n * Math.abs(this["btnBoss" + a].x - this.downX) / Math.abs(this.upX - this.downX))),
            this.numIndex = e,
            egret.Tween.removeTweens(this["btnBoss" + e]),
            egret.Tween.get(this["btnBoss" + e]).to({
                x: this.upX
            },
            t ? 0 : n * Math.abs(this["btnBoss" + e].x - this.upX) / Math.abs(this.upX - this.downX)).call(function() {
                i["imgUp" + e].visible = !0,
                i["imgBoss" + e].visible = !0,
                t || (i["imgBoss" + a].visible = !1)
            },
            this)
        },
        i.prototype.update = function() {
            if (this.service) {
                this.service.getValue(e.AttrConst.forever_taskState) > 0;
                this.numFightTime = 4 - (255 & this.service.getValue(e.AttrConst.daily_fightTime)),
                this.txtFightTime.text = this.numFightTime + "",
                DisplayUtil.setEnabled(this.btnAddFightTime, this.numFightTime <= 0, !0);
                for (var t = this.service.getValue(e.AttrConst.forever_level1WinState), i = 1; 4 >= i; i++) {
                    var n = 1 == KTool.getBit(t, i);
                    this["imgHasWin" + i].visible = n,
                    DisplayUtil.setEnabled(this["btnBoss" + i], !n, !1)
                }
                for (var i = 1; 4 >= i; i++) this["imgBoss" + i].visible = !1;
                for (var i = 1; 4 >= i; i++) if (!this["imgHasWin" + i].visible) {
                    this.setIndex(i, !0);
                    break
                }
            }
        },
        i.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        i
    } (BasicPanel);
    e.Level1Panel = t,
    __reflect(t.prototype, "qianShang.Level1Panel")
} (qianShang || (qianShang = {}));
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
qianShang; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.service.setValues([e.AttrConst.forever_getState, e.AttrConst.forever_level1WinState, e.AttrConst.forever_level2State, e.AttrConst.forever_level2Tip, e.AttrConst.forever_level3NumItemThisRound, e.AttrConst.forever_level3State1, e.AttrConst.forever_level3State2, e.AttrConst.forever_level3State3, e.AttrConst.forever_level3WinState, e.AttrConst.forever_levle3SumItem, e.AttrConst.forever_taskState], [e.AttrConst.daily_fightTime], [], [], [], [], [e.AttrConst.playerInfo_level2WinIndex]),
            i.init([{
                panelName: e.PanelConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: e.PanelConst.LEVEL1_PANEL
            },
            {
                panelName: e.PanelConst.LEVEL2_PANEL
            },
            {
                panelName: e.PanelConst.LEVEL3_PANEL
            },
            {
                panelName: e.PanelConst.UP_PANEL
            }]),
            i
        }
        return __extends(i, t),
        i
    } (BasicMultPanelModule);
    e.QianShang = t,
    __reflect(t.prototype, "qianShang.QianShang")
} (qianShang || (qianShang = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
qianShang; !
function(e) {
    var t = function() {
        function e() {}
        return e.CMD = 45754,
        e
    } ();
    e.CMDConst = t,
    __reflect(t.prototype, "qianShang.CMDConst")
} (qianShang || (qianShang = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
qianShang; !
function(e) {
    var t = function() {
        function e() {}
        return e.QIAN_SHANG_ZHI_YE = 1720234,
        e.YE_ZHI_SHANG = 1720230,
        e.YE_ZHI_SHANG_SUI_PIAN = 1720249,
        e
    } ();
    e.ItemConst = t,
    __reflect(t.prototype, "qianShang.ItemConst")
} (qianShang || (qianShang = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
qianShang; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "qianShang.MainPanel",
        e.LEVEL1_PANEL = "qianShang.Level1Panel",
        e.LEVEL2_PANEL = "qianShang.Level2Panel",
        e.LEVEL3_PANEL = "qianShang.Level3Panel",
        e.UP_PANEL = "qianShang.UpPanel",
        e
    } ();
    e.PanelConst = t,
    __reflect(t.prototype, "qianShang.PanelConst")
} (qianShang || (qianShang = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
qianShang; !
function(e) {
    var t = function() {
        function e() {}
        return e.daily_fightTime = 14839,
        e.forever_getState = 106570,
        e.forever_taskState = 106572,
        e.forever_level1WinState = 106574,
        e.forever_level2State = 106576,
        e.forever_level2Tip = 106578,
        e.forever_level3State1 = 106580,
        e.forever_level3State2 = 106582,
        e.forever_level3State3 = 106584,
        e.forever_level3WinState = 106586,
        e.forever_level3NumItemThisRound = 106588,
        e.forever_levle3SumItem = 106590,
        e.playerInfo_level2WinIndex = 1025,
        e
    } ();
    e.AttrConst = t,
    __reflect(t.prototype, "qianShang.AttrConst")
} (qianShang || (qianShang = {}));
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
qianShang; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.arrayTips = [],
            e.skinName = "QianShangLevel2PanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.addEvent(),
            this.initOldPveBtnClose(73, this, "qian_shang_level2_panel_hzmc_png",
            function() {
                e.service.backToMainPanel()
            },
            this)
        },
        i.prototype.refreshArrayTips = function() {
            for (var t = this.service.getValue(e.AttrConst.forever_level2Tip), i = 1; 7 >= i; i++) this.arrayTips[i] = t >> 4 * (i - 1) & 15
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                t.service.showHelpPop(73)
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
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                BuyProductManager.buyProductBySocket(256124,
                function() {
                    SocketConnection.sendByQueue(e.CMDConst.CMD, [19, 2],
                    function() {
                        t.service.updateValues().then(function() {
                            t.service.backToMainPanel()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                BuyProductManager.buyProductBySocket(256127,
                function() {
                    SocketConnection.sendByQueue(e.CMDConst.CMD, [22, 7 + t.numIndex],
                    function() {
                        t.service.updateValues().then(function() {
                            t.update(),
                            t.backFromFight()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                BuyProductManager.buyProduct("256132_12735",
                function() {
                    t.service.updateSomeValues([e.AttrConst.daily_fightTime]).then(function() {
                        t.update()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                0 == t.numFightTime ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : (1 == t.numIndex ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战鲁迪诺加斯") : 2 == t.numIndex ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战月照雪芙") : 3 == t.numIndex ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战伊诺美丽") : 4 == t.numIndex ? 4 == t.finalPosition ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战千裳") : StatLogger.log("20211022版本系统功能", "千裳", "开始挑战月照星魂") : 5 == t.numIndex ? 5 == t.finalPosition ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战千裳") : StatLogger.log("20211022版本系统功能", "千裳", "开始挑战魂王无烬梦") : 6 == t.numIndex ? 6 == t.finalPosition ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战千裳") : StatLogger.log("20211022版本系统功能", "千裳", "开始挑战扫荡魔锋") : 7 == t.numIndex && (7 == t.finalPosition ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战千裳") : StatLogger.log("20211022版本系统功能", "千裳", "开始挑战鲜血女王")), SocketConnection.sendByQueue(e.CMDConst.CMD, [21, 7 + t.numIndex]))
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["imgHide" + i],
                function() {
                    t.btnTips.visible ? SocketConnection.sendByQueue(e.CMDConst.CMD, [20, 7 + i],
                    function() {
                        t.service.updateSomeValues([e.AttrConst.forever_level2State]).then(function() {
                            t.update(),
                            t.setIndex(i)
                        })
                    }) : Alarm.show("请先战胜翻出的精灵！")
                },
                n)
            },
            n = this, a = 2; 7 >= a; a++) i(a);
            ImageButtonUtil.add(this.btnTips,
            function() {
                var i, n = t.service.getValue(e.AttrConst.playerInfo_level2WinIndex),
                a = t.arrayTips[n];
                i = 1 == a ? "千裳往左侧方向去了！": 2 == a ? "千裳往右侧方向去了！": "并未看见过千裳！",
                Alarm.show(i)
            },
            this)
        },
        i.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        i.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        i.prototype.backFromFight = function() {
            var t = this;
            this.service.updateSomeValues([e.AttrConst.forever_taskState]).then(function() {
                t.service.getValue(e.AttrConst.forever_taskState) >= 2 && Alarm.show("恭喜你找到千裳，继续下一关的挑战吧！",
                function() {
                    t.service.backToMainPanel()
                })
            })
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        i.prototype.setIndex = function(e) {
            this.numIndex = e;
            for (var t = 1; 7 >= t; t++) this["imgBoss" + t].visible = e == t,
            this["imgUp" + t].visible = e == t;
            this.btnFastBeat.visible = !0,
            this.btnFight.visible = !0,
            this.btnTips.visible = !1,
            1 == e ? (this.txtTruthRate.visible = !0, this.imgTruthRateBG.visible = !0, this.txtTruthRate.text = "100%") : 3 >= e ? (this.txtTruthRate.visible = !0, this.imgTruthRateBG.visible = !0, this.txtTruthRate.text = "50%") : (this.txtTruthRate.visible = !1, this.imgTruthRateBG.visible = !1)
        },
        i.prototype.update = function() {
            var t = this;
            if (this.service) {
                this.refreshArrayTips(),
                this.numFightTime = 4 - (this.service.getValue(e.AttrConst.daily_fightTime) >> 8 & 255),
                this.txtFightTime.text = this.numFightTime + "",
                DisplayUtil.setEnabled(this.btnAddFightTime, this.numFightTime <= 0, !0),
                this.btnFastBeat.visible = !1,
                this.btnFight.visible = !1,
                this.btnTips.visible = !0;
                for (var i = this.service.getValue(e.AttrConst.forever_level2State), n = 1; 7 >= n; n++) {
                    var a = i >> 4 * (n - 1) & 15;
                    if (1 == n && 0 == a) return void SocketConnection.sendByQueue(e.CMDConst.CMD, [20, 8],
                    function() {
                        t.service.updateSomeValues([e.AttrConst.forever_level2State]).then(function() {
                            t.update()
                        })
                    });
                    1 != n && (this["imgHide" + n].visible = 0 == a),
                    this["imgHasWin" + n].visible = 2 == a,
                    1 == a && this.setIndex(n)
                }
                this.finalPosition = i >> 28 & 15,
                this.finalPosition >= 4 && this.finalPosition <= 7 && (this["imgHead" + this.finalPosition].source = "qian_shang_level2_panel_imgbosshead8_png"),
                this["imgBoss" + this.finalPosition] = this.imgBoss8
            }
        },
        i
    } (BasicPanel);
    e.Level2Panel = t,
    __reflect(t.prototype, "qianShang.Level2Panel")
} (qianShang || (qianShang = {}));
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
qianShang; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.arrayBlock = [],
            e.arrayData = [],
            e.arrayWin = [],
            e.skinName = "QianShangLevel3PanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.service.registerItemUpdateForText(1720230, this.txtItem1, this),
            this.addEvent(),
            this.initOldPveBtnClose(74, this, "qian_shang_level3_panel_jmtx_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.initMap()
        },
        i.prototype.initMap = function() {
            for (var e = this,
            t = function(t) {
                var n = new eui.Group;
                i.groupMain.addChild(n),
                i.arrayBlock[t] = n,
                n.width = 50,
                n.height = 50,
                t >= 1 && 3 >= t ? (n.x = 121, n.y = 185 + 117 * (t - 1)) : t >= 4 && 7 >= t ? (n.x = 225, n.y = 127 + 117 * (t - 4)) : t >= 8 && 10 >= t ? (n.x = 329, n.y = 185 + 117 * (t - 8)) : t >= 11 && 14 >= t ? (n.x = 433, n.y = 127 + 117 * (t - 11)) : t >= 15 && 17 >= t ? (n.x = 537, n.y = 185 + 117 * (t - 15)) : (n.x = 641, n.y = 127 + 117 * (t - 18));
                var a = new eui.Image("qian_shang_level3_panel_img1_png");
                a.name = "imgUsual",
                n.addChild(a),
                a.x = n.width / 2 - a.width / 2,
                a.y = n.height / 2 - a.height / 2,
                a.pixelHitTest = !0;
                var s = new eui.Image("qian_shang_level3_panel_start_png");
                s.name = "imgStart",
                n.addChild(s),
                s.x = n.width / 2 - s.width / 2,
                s.y = n.height / 2 - s.height / 2,
                s.pixelHitTest = !0;
                var _ = new eui.Image("qian_shang_level3_panel_end_png");
                _.name = "imgEnd",
                n.addChild(_),
                _.x = n.width / 2 - _.width / 2,
                _.y = n.height / 2 - _.height / 2,
                _.pixelHitTest = !0;
                var r = new eui.Image("qian_shang_level3_panel_img2_png");
                r.name = "imgHasExplore1",
                n.addChild(r),
                r.x = n.width / 2 - r.width / 2,
                r.y = n.height / 2 - r.height / 2,
                r.pixelHitTest = !0;
                var o = new eui.Image("qian_shang_level3_panel_imgitem2_png");
                o.name = "imgItem1",
                n.addChild(o),
                o.x = n.width / 2 - o.width / 2,
                o.y = n.height / 2 - o.height / 2,
                o.pixelHitTest = !0;
                var g = new eui.Image("qian_shang_level3_panel_imgitem1_png");
                g.name = "imgItem2",
                n.addChild(g),
                g.x = n.width / 2 - g.width / 2,
                g.y = n.height / 2 - g.height / 2,
                g.pixelHitTest = !0;
                var u = new eui.Image("qian_shang_level3_panel_num_png");
                u.name = "imgTxt",
                n.addChild(u),
                u.x = n.width / 2 - u.width / 2 + 16,
                u.y = n.height / 2 - u.height / 2 + 30,
                u.pixelHitTest = !0;
                var h = new eui.Label;
                h.name = "txt",
                n.addChild(h),
                h.x = n.width / 2 - h.width / 2 + 20,
                h.y = n.height / 2 - h.height / 2 + 20,
                h.size = 20;
                var l = new eui.Image("qian_shang_level3_panel_imghasexplore_png");
                l.name = "imgHasExplore2",
                n.addChild(l),
                l.x = n.width / 2 - l.width / 2,
                l.y = n.height / 2 - l.height / 2,
                l.pixelHitTest = !0;
                var m = new eui.Image("qian_shang_level3_panel_imgup_png");
                m.name = "imgUp",
                n.addChild(m),
                m.x = n.width / 2 - m.width / 2,
                m.y = n.height / 2 - m.height / 2,
                m.pixelHitTest = !0,
                ImageButtonUtil.add(n,
                function() {
                    e.setIndex(t)
                },
                i)
            },
            i = this, n = 1; 21 >= n; n++) t(n)
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            t.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                t.service.showHelpPop(74)
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
                BuyProductManager.buyProduct("256132_12737",
                function() {
                    t.service.updateSomeValues([e.AttrConst.daily_fightTime]).then(function() {
                        t.update()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddItem1,
            function() {
                BuyProductManager.buyProduct("256128_12743",
                function() {
                    t.service.updateSomeValues([e.AttrConst.daily_fightTime]).then(function() {
                        t.update()
                    })
                },
                t, 1720230)
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                t.numItem2 < 15 ? BubblerManager.getInstance().showText("很抱歉，夜之裳碎片不足，无法兑换！") : KTool.doExchange(12741, 1,
                function() {
                    t.service.updateSomeValues([e.AttrConst.forever_levle3SumItem]).then(function() {
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                BuyProductManager.buyProductBySocket(256125,
                function() {
                    SocketConnection.sendByQueue(e.CMDConst.CMD, [23, 2],
                    function() {
                        t.service.updateSomeValues([e.AttrConst.forever_taskState]).then(function() {
                            t.update()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnReset,
            function() {
                t.numExploreTime < 5 ? BubblerManager.getInstance().showText("一轮探索次数达到5次才可以重新探索哦！") : Alert.show("重新探索只能获得3个夜之裳碎片，确认重新探索吗？",
                function() {
                    SocketConnection.sendByQueue(e.CMDConst.CMD, [24, 2],
                    function() {
                        t.updateValues()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                0 == t.numFightTime ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : SocketConnection.sendByQueue(e.CMDConst.CMD, [25, 21 + t.numIndex])
            },
            this),
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                BuyProductManager.buyProductBySocket(256129,
                function() {
                    SocketConnection.sendByQueue(e.CMDConst.CMD, [26, 21 + t.numIndex],
                    function() {
                        t.updateValues()
                    })
                },
                t)
            },
            this)
        },
        i.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        i.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        i.prototype.backFromFight = function() {
            var t = this;
            this.service.updateValues().then(function() {
                if (t.willFail) Alarm.show("超过10次探索机会，探索失败！仅能获得5个夜之裳碎片！",
                function() {
                    t.updateValues()
                }),
                t.willFail = !1;
                else if (t.backFromPopFight) {
                    if (1 == t.backFromPopFight) {
                        if (3 == t.service.getValue(e.AttrConst.forever_taskState)) return;
                        var i = t.service.getValue(e.AttrConst.forever_level3NumItemThisRound),
                        n = 65535 & i,
                        a = i >> 16 & 65535,
                        s = new e.Level3Pop;
                        t.service.openPop(s, !1, {
                            isEnoughItem: !0,
                            numItem1: n,
                            numItem2: a,
                            fightTime: t.numFightTime,
                            thisObj: t,
                            updateParentPanel: function() {
                                t.updateValues(),
                                t.backFromFight()
                            },
                            updateAfterFight: function(e) {
                                t.backFromPopFight = e
                            }
                        })
                    } else if (2 == t.backFromPopFight) {
                        if (FightManager.isWin) return Alarm.show("本轮探险成功！",
                        function() {
                            t.updateValues()
                        }),
                        void(t.backFromPopFight = 0);
                        var i = t.service.getValue(e.AttrConst.forever_level3NumItemThisRound),
                        n = 65535 & i,
                        a = i >> 16 & 65535,
                        s = new e.Level3Pop;
                        t.service.openPop(s, !1, {
                            isEnoughItem: !1,
                            numItem1: n,
                            numItem2: a,
                            fightTime: t.numFightTime,
                            thisObj: t,
                            updateParentPanel: function() {
                                t.updateValues(),
                                t.backFromFight()
                            },
                            updateAfterFight: function(e) {
                                t.backFromPopFight = e
                            }
                        })
                    } else if (3 == t.backFromPopFight) return Alarm.show("本轮探险成功！",
                    function() {
                        t.updateValues()
                    }),
                    void(t.backFromPopFight = 0);
                    t.backFromPopFight = 0
                }
            })
        },
        i.prototype.update = function() {
            var t = this;
            if (this.service) {
                if (3 == this.service.getValue(e.AttrConst.forever_taskState)) return void Alarm.show("关卡挑战成功，快去领取精灵吧！",
                function() {
                    t.service.backToMainPanel(),
                    t.service = null
                });
                this.numFightTime = 11 - (this.service.getValue(e.AttrConst.daily_fightTime) >> 16 & 255),
                this.txtFightTime.text = this.numFightTime + "";
                var i = this.service.getValue(e.AttrConst.forever_levle3SumItem);
                this.numItem2 = i >> 16 & 65535,
                this.txtItem2.text = this.numItem2 + "",
                DisplayUtil.setEnabled(this.btnAddFightTime, this.numFightTime <= 0, !0);
                for (var n = 1; 3 >= n; n++) for (var a = 1; 7 >= a; a++) {
                    var s = this.service.getValue(106580 + 2 * (n - 1));
                    this.arrayData[7 * (n - 1) + a] = s >> 4 * (a - 1) & 15
                }
                this.numExploreTime = 0;
                for (var _ = this.service.getValue(e.AttrConst.forever_level3WinState), a = 1; 21 >= a; a++) this.arrayWin[a] = 1 == KTool.getBit(_, a),
                this.arrayWin[a] && this.numExploreTime++;
                this.txtExploreTime.text = this.numExploreTime + "",
                DisplayUtil.setEnabled(this.btnReset, this.numExploreTime >= 5, this.numExploreTime < 5);
                for (var a = 1; 21 >= a; a++) {
                    for (var r = this.arrayBlock[a], n = 0; n < r.numChildren; n++) {
                        var o = r.getChildAt(n);
                        switch (this.arrayData[a]) {
                        case 0:
                            o.visible = "imgUsual" == o.name;
                            break;
                        case 1:
                            o.visible = "imgUsual" == o.name || "imgItem1" == o.name || "imgTxt" == o.name || "txt" == o.name,
                            "txt" == o.name && (o.text = this.getItemNum(a, 1, 1) + "");
                            break;
                        case 2:
                            o.visible = "imgUsual" == o.name || "imgItem1" == o.name || "imgTxt" == o.name || "txt" == o.name,
                            "txt" == o.name && (o.text = this.getItemNum(a, 1, 2) + "");
                            break;
                        case 3:
                            o.visible = "imgUsual" == o.name || "imgItem2" == o.name || "imgTxt" == o.name || "txt" == o.name,
                            "txt" == o.name && (o.text = this.getItemNum(a, 2, 1) + "");
                            break;
                        case 4:
                            o.visible = "imgUsual" == o.name || "imgItem2" == o.name || "imgTxt" == o.name || "txt" == o.name,
                            "txt" == o.name && (o.text = this.getItemNum(a, 2, 2) + "");
                            break;
                        case 5:
                            o.visible = "imgUsual" == o.name || "imgStart" == o.name;
                            break;
                        case 6:
                            o.visible = "imgUsual" == o.name || "imgEnd" == o.name
                        }
                    }
                    this.arrayWin[a] && (r.getChildByName("imgUsual").visible = !1, r.getChildByName("imgHasExplore1").visible = !0, r.getChildByName("imgHasExplore2").visible = !0);
                    var g = !r.getChildByName("imgHasExplore1").visible;
                    DisplayUtil.setEnabled(r, g, !1)
                }
                var u = this.service.getValue(e.AttrConst.forever_level3WinState) >> 24 & 255;
                this.setIndex(u)
            }
        },
        i.prototype.setIndex = function(t) {
            var i = this,
            n = !1;
            5 == this.arrayData[t] ? (this.imgWord1.visible = !0, this.imgWord2.visible = !1, this.imgWord3.visible = !1, this.groupFight.visible = !1, this.numIndex && (this.arrayBlock[this.numIndex].getChildByName("imgUp").visible = !1), this.numIndex = t, FightManager.isFighting || (this.willFail = !1), this.arrayBlock[t].getChildByName("imgUp").visible = !0) : 6 == this.arrayData[t] ? (this.imgWord1.visible = !1, this.imgWord2.visible = !1, this.imgWord3.visible = !0, this.groupFight.visible = !1, this.numIndex && (this.arrayBlock[this.numIndex].getChildByName("imgUp").visible = !1), this.numIndex = t, FightManager.isFighting || (this.willFail = !1), this.arrayBlock[t].getChildByName("imgUp").visible = !0, SocketConnection.sendByQueue(e.CMDConst.CMD, [31, 21 + t],
            function(t) {
                var n, a = t.data.readUnsignedInt();
                if (5 == a) n = !0;
                else if (4 != a) return;
                var s = i.service.getValue(e.AttrConst.forever_level3NumItemThisRound),
                _ = 65535 & s,
                r = s >> 16 & 65535,
                o = new e.Level3Pop;
                i.service.openPop(o, !1, {
                    isEnoughItem: n,
                    numItem1: _,
                    numItem2: r,
                    fightTime: i.numFightTime,
                    thisObj: i,
                    updateParentPanel: function() {
                        i.updateValues(),
                        i.backFromFight()
                    },
                    updateAfterFight: function(e) {
                        i.backFromPopFight = e
                    }
                })
            })) : SocketConnection.sendByQueue(e.CMDConst.CMD, [31, 21 + t],
            function(e) {
                var a = e.data.readUnsignedInt();
                if (6 == a) return BubblerManager.getInstance().showText("不能回头哦！"),
                void(n = !0);
                if (7 == a) return BubblerManager.getInstance().showText("只能探索相邻的格子！"),
                void(n = !0);
                if (2 == a ? i.willFail = !0 : 3 == a && Alarm.show("本轮探索次数不足，请走向终点！"), 0 == i.arrayData[t]) i.imgWord1.visible = !1,
                i.imgWord2.visible = !0,
                i.imgWord3.visible = !1,
                i.groupFight.visible = !1;
                else {
                    i.imgWord1.visible = !1,
                    i.imgWord2.visible = !1,
                    i.imgWord3.visible = !1,
                    i.groupFight.visible = !0;
                    var s = i.arrayWin[t];
                    DisplayUtil.setEnabled(i.btnFight, !s, s),
                    DisplayUtil.setEnabled(i.btnFastBeat, !s, s)
                }
                n || (i.numIndex && (i.arrayBlock[i.numIndex].getChildByName("imgUp").visible = !1), i.numIndex = t, i.arrayBlock[t].getChildByName("imgUp").visible = !0)
            })
        },
        i.prototype.getItemNum = function(e, t, i) {
            return 7 >= e ? 1 == t ? 1 : 1 == i ? 1 : 2 : 14 >= e ? 1 == t ? 1 : 1 == i ? 2 : 3 : 1 == t ? 1 : 1 == i ? 4 : 5
        },
        i
    } (BasicPanel);
    e.Level3Panel = t,
    __reflect(t.prototype, "qianShang.Level3Panel")
} (qianShang || (qianShang = {}));
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
qianShang; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "QianShangMainPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                e.service.closeModule()
            },
            this),
            this.addEvent()
        },
        i.prototype.beforeAdd = function() {
            StatLogger.log("20211022版本系统功能", "千裳", "打开主界面")
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                t.service.showPetInfo(3894)
            },
            this),
            ImageButtonUtil.add(this.btnSuperGet,
            function() {
                BuyProductManager.buyProduct("256122_12729",
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                KTool.doExchange(12731, 1,
                function() {
                    StatLogger.log("20211022版本系统功能", "千裳", "免费领取千裳"),
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                t.service.openPanel(e.PanelConst.UP_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnLevel1,
            function() {
                StatLogger.log("20211022版本系统功能", "千裳", "进入第一关"),
                t.service.openPanel(e.PanelConst.LEVEL1_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnLevel2,
            function() {
                StatLogger.log("20211022版本系统功能", "千裳", "进入第二关"),
                t.service.openPanel(e.PanelConst.LEVEL2_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnLevel3,
            function() {
                StatLogger.log("20211022版本系统功能", "千裳", "进入第三关"),
                t.service.openPanel(e.PanelConst.LEVEL3_PANEL)
            },
            this)
        },
        i.prototype.update = function() {
            if (this.service) {
                var t = this.service.getValue(e.AttrConst.forever_getState),
                i = 1 == KTool.getBit(t, 1),
                n = this.service.getValue(e.AttrConst.forever_taskState),
                a = 3 == n;
                this.btnSuperGet.visible = !a,
                this.btnGetPet.visible = a && !i,
                this.btnUp.visible = this.imgHasPet.visible = i,
                this.imgHas1.visible = n > 0,
                this.imgHas2.visible = n > 1,
                this.imgHas3.visible = n > 2,
                DisplayUtil.setEnabled(this.btnLevel1, 0 == n, !1),
                DisplayUtil.setEnabled(this.btnLevel2, 1 == n, 0 == n),
                DisplayUtil.setEnabled(this.btnLevel3, 2 == n, 2 > n)
            }
        },
        i
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "qianShang.MainPanel")
} (qianShang || (qianShang = {}));
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
qianShang; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "QianShangUpPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.addEvent(),
            this.initOldPveBtnClose(75, this, "qian_shang_up_panel_nlds_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.initItem()
        },
        i.prototype.initItem = function() {
            this.service.registerItemUpdateForText(e.ItemConst.QIAN_SHANG_ZHI_YE, this.txtItem, this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                t.service.showHelpPop(75)
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
                BuyProductManager.buyProduct("256132_12739",
                function() {
                    t.service.updateSomeValues([e.AttrConst.daily_fightTime]).then(function() {
                        t.update()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                BuyProductManager.buyProduct("256131_12745",
                function() {
                    t.service.updateSomeValues([e.AttrConst.daily_fightTime]).then(function() {
                        t.update()
                    })
                },
                t, e.ItemConst.QIAN_SHANG_ZHI_YE)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                t.service.showMarkInfo(41616)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                t.service.showSkillInfo(33451)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                t.service.showPetEff(3894)
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
            ImageButtonUtil.add(this.btnEasy,
            function() {
                t.fight(1),
                StatLogger.log("20211022版本系统功能", "千裳", "千裳关卡与简单boss进入战斗")
            },
            this),
            ImageButtonUtil.add(this.btnNormal,
            function() {
                t.fight(2),
                StatLogger.log("20211022版本系统功能", "千裳", "千裳关与进阶boss进入战斗")
            },
            this),
            ImageButtonUtil.add(this.btnDifficult,
            function() {
                t.fight(3),
                StatLogger.log("20211022版本系统功能", "千裳", "千裳关与困难boss进入战斗")
            },
            this)
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        i.prototype.exchange = function(t) {
            var i = this;
            PetManager.isDefaultPet(3894) ? ItemManager.getNumByID(e.ItemConst.QIAN_SHANG_ZHI_YE) < 15 ? BubblerManager.getInstance().showText("兑换需要15个千裳之夜，请先获得足够的数量再来兑换！") : SocketConnection.sendByQueue(e.CMDConst.CMD, [30, t],
            function() {
                i.service.updateSomeValues([e.AttrConst.forever_getState]).then(function() {
                    i.update()
                })
            }) : BubblerManager.getInstance().showText("请先将千裳设为首发精灵再来进行兑换！")
        },
        i.prototype.fight = function(e) {
            0 == this.numFightTime ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : FightManager.fightNoMapBoss("", 16522 + e)
        },
        i.prototype.update = function() {
            this.numFightTime = (MainManager.actorInfo.isVip ? 5 : 3) - (this.service.getValue(e.AttrConst.daily_fightTime) >> 24 & 255),
            this.txtFightTime.text = this.numFightTime + "",
            DisplayUtil.setEnabled(this.btnAddFightTime, this.numFightTime <= 0, !0);
            var t = this.service.getValue(e.AttrConst.forever_getState),
            i = 1 == KTool.getBit(t, 2),
            n = 1 == KTool.getBit(t, 3),
            a = 1 == KTool.getBit(t, 4);
            this.imgHasKe.visible = i,
            this.imgHasWu.visible = n,
            this.imgHasTe.visible = a,
            DisplayUtil.setEnabled(this.btnGetKe, !i, i),
            DisplayUtil.setEnabled(this.btnGetWu, !n, n),
            DisplayUtil.setEnabled(this.btnGetTe, !a, a)
        },
        i
    } (BasicPanel);
    e.UpPanel = t,
    __reflect(t.prototype, "qianShang.UpPanel")
} (qianShang || (qianShang = {}));
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
qianShang; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "QianShangLevel3PopSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.addEvent()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                BuyProductManager.buyProductBySocket(256130,
                function() {
                    SocketConnection.sendByQueue(45754, [28, 2],
                    function() {
                        e.updateParentPanel.call(e.thisObj),
                        e.onClose()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnGiveMoney,
            function() {
                SocketConnection.sendByQueue(45754, [27, 2],
                function() {
                    e.updateAfterFight.call(e.thisObj, [3]),
                    e.updateParentPanel.call(e.thisObj),
                    e.onClose()
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                0 == e.numFightTime ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : (e.isEnoughItem ? StatLogger.log("20211022版本系统功能", "千裳", "开始挑战终点千裳") : StatLogger.log("20211022版本系统功能", "千裳", "开始挑战终点索格瑞亚"), e.updateAfterFight.call(e.thisObj, [e.isEnoughItem ? 1 : 2]), FightManager.fightNoMapBoss("", e.isEnoughItem ? 16519 : 16517), e.onClose())
            },
            this)
        },
        t.prototype.onClose = function() {
            PopViewManager.getInstance().hideView(this)
        },
        t.prototype._parseData = function() {
            this.txtItem1.text = this._data.numItem1 + "",
            this.txtItem2.text = this._data.numItem2 + "",
            this.isEnoughItem = this._data.isEnoughItem,
            this.imgPet1.visible = this.isEnoughItem,
            this.imgPet2.visible = !this.isEnoughItem,
            this.imgWord1.visible = this.isEnoughItem,
            this.imgWord2.visible = !this.isEnoughItem,
            this.btnFastBeat.visible = this.isEnoughItem,
            this.btnGiveMoney.visible = !this.isEnoughItem,
            this.numFightTime = this._data.fightTime,
            this.thisObj = this._data.thisObj,
            this.updateParentPanel = this._data.updateParentPanel,
            this.updateAfterFight = this._data.updateAfterFight
        },
        t
    } (PopView);
    e.Level3Pop = t,
    __reflect(t.prototype, "qianShang.Level3Pop")
} (qianShang || (qianShang = {}));
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
generateEUI.paths["resource/eui_skins/QianShangLevel1PanelSkin.exml"] = window.QianShangLevel1PanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgBoss1", "imgBoss2", "imgBoss3", "imgBoss4", "btnPet", "btnCure", "btnBoss1", "btnBoss2", "btnBoss3", "btnBoss4", "imgUp1", "imgUp2", "imgUp3", "imgUp4", "btnFight", "btnFastBeat", "btnOneKey", "btnAddFightTime", "imgHasWin1", "imgHasWin2", "imgHasWin3", "imgHasWin4", "txtFightTime", "btnClose", "btnHelp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "qian_shang_main_panel_bg_jpg",
        e.top = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -16.5,
        e.width = 1103,
        e.y = 0,
        e.elementsContent = [this.imgBoss1_i(), this.imgBoss2_i(), this.imgBoss3_i(), this.imgBoss4_i(), this.btnPet_i(), this.btnCure_i(), this._Image2_i(), this.btnBoss1_i(), this.btnBoss2_i(), this.btnBoss3_i(), this.btnBoss4_i(), this.imgUp1_i(), this.imgUp2_i(), this.imgUp3_i(), this.imgUp4_i(), this.btnFight_i(), this.btnFastBeat_i(), this.btnOneKey_i(), this._Image3_i(), this.btnAddFightTime_i(), this.imgHasWin1_i(), this.imgHasWin2_i(), this.imgHasWin3_i(), this.imgHasWin4_i(), this.txtFightTime_i()],
        e
    },
    i.imgBoss1_i = function() {
        var e = new eui.Image;
        return this.imgBoss1 = e,
        e.source = "qian_shang_level1_panel_imgboss1_png",
        e.visible = !1,
        e.x = 116,
        e.y = 22,
        e
    },
    i.imgBoss2_i = function() {
        var e = new eui.Image;
        return this.imgBoss2 = e,
        e.source = "qian_shang_level1_panel_imgboss2_png",
        e.visible = !1,
        e.x = 0,
        e.y = 23,
        e
    },
    i.imgBoss3_i = function() {
        var e = new eui.Image;
        return this.imgBoss3 = e,
        e.source = "qian_shang_level1_panel_imgboss3_png",
        e.visible = !1,
        e.x = 69,
        e.y = 30,
        e
    },
    i.imgBoss4_i = function() {
        var e = new eui.Image;
        return this.imgBoss4 = e,
        e.source = "qian_shang_level1_panel_imgboss4_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "qian_shang_level1_panel_btnpet_png",
        e.visible = !0,
        e.x = 24,
        e.y = 257,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "qian_shang_level1_panel_btncure_png",
        e.x = 24,
        e.y = 331,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level1_panel_shutiao_png",
        e.visible = !0,
        e.x = 677,
        e.y = 17,
        e
    },
    i.btnBoss1_i = function() {
        var e = new eui.Image;
        return this.btnBoss1 = e,
        e.source = "qian_shang_level1_panel_btnboss1_png",
        e.x = 697,
        e.y = 132,
        e
    },
    i.btnBoss2_i = function() {
        var e = new eui.Image;
        return this.btnBoss2 = e,
        e.source = "qian_shang_level1_panel_btnboss2_png",
        e.x = 715,
        e.y = 230,
        e
    },
    i.btnBoss3_i = function() {
        var e = new eui.Image;
        return this.btnBoss3 = e,
        e.source = "qian_shang_level1_panel_btnboss3_png",
        e.x = 715,
        e.y = 328,
        e
    },
    i.btnBoss4_i = function() {
        var e = new eui.Image;
        return this.btnBoss4 = e,
        e.source = "qian_shang_level1_panel_btnboss4_png",
        e.x = 715,
        e.y = 426,
        e
    },
    i.imgUp1_i = function() {
        var e = new eui.Image;
        return this.imgUp1 = e,
        e.source = "qian_shang_level1_panel_imgup_png",
        e.visible = !1,
        e.x = 572,
        e.y = 115,
        e
    },
    i.imgUp2_i = function() {
        var e = new eui.Image;
        return this.imgUp2 = e,
        e.source = "qian_shang_level1_panel_imgup_png",
        e.visible = !1,
        e.x = 589.81,
        e.y = 213.87,
        e
    },
    i.imgUp3_i = function() {
        var e = new eui.Image;
        return this.imgUp3 = e,
        e.source = "qian_shang_level1_panel_imgup_png",
        e.visible = !1,
        e.x = 589.81,
        e.y = 311.62,
        e
    },
    i.imgUp4_i = function() {
        var e = new eui.Image;
        return this.imgUp4 = e,
        e.source = "qian_shang_level1_panel_imgup_png",
        e.visible = !1,
        e.x = 591.23,
        e.y = 409.57,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "qian_shang_level1_panel_btnfight_png",
        e.x = 116,
        e.y = 538,
        e
    },
    i.btnFastBeat_i = function() {
        var e = new eui.Image;
        return this.btnFastBeat = e,
        e.source = "qian_shang_level1_panel_btnfastbeat_png",
        e.x = 350,
        e.y = 540,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "qian_shang_level1_panel_btnonekey_png",
        e.x = 995,
        e.y = 489,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level1_panel_asfaskjg_png",
        e.x = 892,
        e.y = 14,
        e
    },
    i.btnAddFightTime_i = function() {
        var e = new eui.Image;
        return this.btnAddFightTime = e,
        e.source = "qian_shang_level1_panel_btnaddfighttime_png",
        e.x = 1082,
        e.y = 14,
        e
    },
    i.imgHasWin1_i = function() {
        var e = new eui.Image;
        return this.imgHasWin1 = e,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.x = 744.352,
        e.y = 149.296,
        e
    },
    i.imgHasWin2_i = function() {
        var e = new eui.Image;
        return this.imgHasWin2 = e,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.x = 759.147,
        e.y = 246.276,
        e
    },
    i.imgHasWin3_i = function() {
        var e = new eui.Image;
        return this.imgHasWin3 = e,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.x = 758.873,
        e.y = 345.996,
        e
    },
    i.imgHasWin4_i = function() {
        var e = new eui.Image;
        return this.imgHasWin4 = e,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.x = 759.969,
        e.y = 443.113,
        e
    },
    i.txtFightTime_i = function() {
        var e = new eui.Label;
        return this.txtFightTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "00",
        e.textColor = 16630738,
        e.x = 1046,
        e.y = 15,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this.btnClose_i(), this._Image5_i(), this.btnHelp_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_main_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "qian_shang_main_panel_btnclose_png",
        e.x = 16,
        e.y = 8,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level1_panel_xzzs_png",
        e.x = 84,
        e.y = 3,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "qian_shang_level1_panel_btnhelp_png",
        e.x = 222,
        e.y = 12,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/QianShangLevel2PanelSkin.exml"] = window.QianShangLevel2PanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgBoss1", "imgBoss2", "imgBoss3", "imgBoss4", "imgBoss5", "imgBoss6", "imgBoss7", "imgBoss8", "btnPet", "btnCure", "imgHide2", "imgHide3", "imgHead4", "imgHide4", "imgHead5", "imgHide5", "imgHead6", "imgHide6", "imgHead7", "imgHide7", "imgUp1", "imgUp2", "imgUp3", "imgUp4", "imgUp5", "imgUp6", "imgUp7", "imgHasWin1", "imgHasWin2", "imgHasWin3", "imgHasWin4", "imgHasWin5", "imgHasWin6", "imgHasWin7", "imgTruthRateBG", "btnAddFightTime", "btnFight", "btnTips", "btnFastBeat", "btnOneKey", "txtTruthRate", "txtFightTime", "btnClose", "btnHelp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "qian_shang_main_panel_bg_jpg",
        e.top = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -14.5,
        e.width = 1107,
        e.y = 0,
        e.elementsContent = [this.imgBoss1_i(), this.imgBoss2_i(), this.imgBoss3_i(), this.imgBoss4_i(), this.imgBoss5_i(), this.imgBoss6_i(), this.imgBoss7_i(), this.imgBoss8_i(), this.btnPet_i(), this.btnCure_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.imgHide2_i(), this._Image7_i(), this._Image8_i(), this.imgHide3_i(), this._Image9_i(), this.imgHead4_i(), this.imgHide4_i(), this._Image10_i(), this.imgHead5_i(), this.imgHide5_i(), this._Image11_i(), this.imgHead6_i(), this.imgHide6_i(), this._Image12_i(), this.imgHead7_i(), this.imgHide7_i(), this.imgUp1_i(), this.imgUp2_i(), this.imgUp3_i(), this.imgUp4_i(), this.imgUp5_i(), this.imgUp6_i(), this.imgUp7_i(), this.imgHasWin1_i(), this.imgHasWin2_i(), this.imgHasWin3_i(), this.imgHasWin4_i(), this.imgHasWin5_i(), this.imgHasWin6_i(), this.imgHasWin7_i(), this.imgTruthRateBG_i(), this._Image13_i(), this.btnAddFightTime_i(), this.btnFight_i(), this.btnTips_i(), this.btnFastBeat_i(), this.btnOneKey_i(), this.txtTruthRate_i(), this.txtFightTime_i()],
        e
    },
    i.imgBoss1_i = function() {
        var e = new eui.Image;
        return this.imgBoss1 = e,
        e.source = "qian_shang_level2_panel_imgboss1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 83,
        e
    },
    i.imgBoss2_i = function() {
        var e = new eui.Image;
        return this.imgBoss2 = e,
        e.source = "qian_shang_level2_panel_imgboss2_png",
        e.visible = !1,
        e.x = 46,
        e.y = 65,
        e
    },
    i.imgBoss3_i = function() {
        var e = new eui.Image;
        return this.imgBoss3 = e,
        e.source = "qian_shang_level2_panel_imgboss3_png",
        e.visible = !1,
        e.x = 135,
        e.y = 26,
        e
    },
    i.imgBoss4_i = function() {
        var e = new eui.Image;
        return this.imgBoss4 = e,
        e.source = "qian_shang_level2_panel_imgboss4_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgBoss5_i = function() {
        var e = new eui.Image;
        return this.imgBoss5 = e,
        e.source = "qian_shang_level2_panel_imgboss5_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgBoss6_i = function() {
        var e = new eui.Image;
        return this.imgBoss6 = e,
        e.source = "qian_shang_level2_panel_imgboss6_png",
        e.visible = !1,
        e.x = 41,
        e.y = 38,
        e
    },
    i.imgBoss7_i = function() {
        var e = new eui.Image;
        return this.imgBoss7 = e,
        e.source = "qian_shang_level2_panel_imgboss7_png",
        e.visible = !1,
        e.x = 58,
        e.y = 18,
        e
    },
    i.imgBoss8_i = function() {
        var e = new eui.Image;
        return this.imgBoss8 = e,
        e.source = "qian_shang_main_panel_pet_png",
        e.visible = !1,
        e.x = 70,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "qian_shang_level1_panel_btnpet_png",
        e.x = 24,
        e.y = 257,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "qian_shang_level1_panel_btncure_png",
        e.x = 24,
        e.y = 331,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_line_png",
        e.x = 661,
        e.y = 147,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_headbg1_png",
        e.x = 812,
        e.y = 83,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_imgbosshead1_png",
        e.x = 817,
        e.y = 88,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_headbg1_png",
        e.x = 686,
        e.y = 202,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_imgbosshead2_png",
        e.x = 691,
        e.y = 206,
        e
    },
    i.imgHide2_i = function() {
        var e = new eui.Image;
        return this.imgHide2 = e,
        e.source = "qian_shang_level2_panel_imghide2_png",
        e.x = 687.36,
        e.y = 203.36,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_headbg1_png",
        e.x = 938,
        e.y = 202,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_imgbosshead3_png",
        e.x = 943,
        e.y = 206,
        e
    },
    i.imgHide3_i = function() {
        var e = new eui.Image;
        return this.imgHide3 = e,
        e.source = "qian_shang_level2_panel_imghide2_png",
        e.visible = !0,
        e.x = 939.36,
        e.y = 203.36,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_headbg1_png",
        e.x = 620,
        e.y = 390,
        e
    },
    i.imgHead4_i = function() {
        var e = new eui.Image;
        return this.imgHead4 = e,
        e.source = "qian_shang_level2_panel_imgbosshead4_png",
        e.visible = !0,
        e.x = 624,
        e.y = 394,
        e
    },
    i.imgHide4_i = function() {
        var e = new eui.Image;
        return this.imgHide4 = e,
        e.source = "qian_shang_level2_panel_imghide2_png",
        e.visible = !0,
        e.x = 620.36,
        e.y = 391.36,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_headbg1_png",
        e.x = 753,
        e.y = 390,
        e
    },
    i.imgHead5_i = function() {
        var e = new eui.Image;
        return this.imgHead5 = e,
        e.source = "qian_shang_level2_panel_imgbosshead5_png",
        e.visible = !0,
        e.x = 757,
        e.y = 394,
        e
    },
    i.imgHide5_i = function() {
        var e = new eui.Image;
        return this.imgHide5 = e,
        e.source = "qian_shang_level2_panel_imghide2_png",
        e.visible = !0,
        e.x = 753.36,
        e.y = 391.36,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_headbg1_png",
        e.visible = !0,
        e.x = 872,
        e.y = 390,
        e
    },
    i.imgHead6_i = function() {
        var e = new eui.Image;
        return this.imgHead6 = e,
        e.source = "qian_shang_level2_panel_imgbosshead6_png",
        e.visible = !0,
        e.x = 876,
        e.y = 394,
        e
    },
    i.imgHide6_i = function() {
        var e = new eui.Image;
        return this.imgHide6 = e,
        e.source = "qian_shang_level2_panel_imghide2_png",
        e.visible = !0,
        e.x = 872.36,
        e.y = 391.36,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_headbg1_png",
        e.visible = !0,
        e.x = 1005,
        e.y = 390,
        e
    },
    i.imgHead7_i = function() {
        var e = new eui.Image;
        return this.imgHead7 = e,
        e.source = "qian_shang_level2_panel_imgbosshead7_png",
        e.visible = !0,
        e.x = 1009,
        e.y = 394,
        e
    },
    i.imgHide7_i = function() {
        var e = new eui.Image;
        return this.imgHide7 = e,
        e.source = "qian_shang_level2_panel_imghide2_png",
        e.visible = !0,
        e.x = 1005.36,
        e.y = 391.36,
        e
    },
    i.imgUp1_i = function() {
        var e = new eui.Image;
        return this.imgUp1 = e,
        e.source = "qian_shang_level2_panel_imgup_png",
        e.visible = !1,
        e.x = 800.17,
        e.y = 70.48,
        e
    },
    i.imgUp2_i = function() {
        var e = new eui.Image;
        return this.imgUp2 = e,
        e.source = "qian_shang_level2_panel_imgup_png",
        e.visible = !1,
        e.x = 674,
        e.y = 190,
        e
    },
    i.imgUp3_i = function() {
        var e = new eui.Image;
        return this.imgUp3 = e,
        e.source = "qian_shang_level2_panel_imgup_png",
        e.visible = !1,
        e.x = 925.97,
        e.y = 190.36,
        e
    },
    i.imgUp4_i = function() {
        var e = new eui.Image;
        return this.imgUp4 = e,
        e.source = "qian_shang_level2_panel_imgup_png",
        e.visible = !1,
        e.x = 605.59,
        e.y = 375.88,
        e
    },
    i.imgUp5_i = function() {
        var e = new eui.Image;
        return this.imgUp5 = e,
        e.source = "qian_shang_level2_panel_imgup_png",
        e.visible = !1,
        e.x = 739.3,
        e.y = 375.88,
        e
    },
    i.imgUp6_i = function() {
        var e = new eui.Image;
        return this.imgUp6 = e,
        e.source = "qian_shang_level2_panel_imgup_png",
        e.visible = !1,
        e.x = 857.7,
        e.y = 376.06,
        e
    },
    i.imgUp7_i = function() {
        var e = new eui.Image;
        return this.imgUp7 = e,
        e.source = "qian_shang_level2_panel_imgup_png",
        e.visible = !1,
        e.x = 992.47,
        e.y = 376.41,
        e
    },
    i.imgHasWin1_i = function() {
        var e = new eui.Image;
        return this.imgHasWin1 = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.visible = !0,
        e.x = 801.66,
        e.y = 116.468,
        e
    },
    i.imgHasWin2_i = function() {
        var e = new eui.Image;
        return this.imgHasWin2 = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.visible = !0,
        e.x = 675.73,
        e.y = 236,
        e
    },
    i.imgHasWin3_i = function() {
        var e = new eui.Image;
        return this.imgHasWin3 = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.visible = !0,
        e.x = 928.365,
        e.y = 236,
        e
    },
    i.imgHasWin4_i = function() {
        var e = new eui.Image;
        return this.imgHasWin4 = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.visible = !0,
        e.x = 608.312,
        e.y = 427.5,
        e
    },
    i.imgHasWin5_i = function() {
        var e = new eui.Image;
        return this.imgHasWin5 = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.visible = !0,
        e.x = 742.144,
        e.y = 427.5,
        e
    },
    i.imgHasWin6_i = function() {
        var e = new eui.Image;
        return this.imgHasWin6 = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.visible = !0,
        e.x = 861.122,
        e.y = 427.5,
        e
    },
    i.imgHasWin7_i = function() {
        var e = new eui.Image;
        return this.imgHasWin7 = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_level1_panel_imgbeated_png",
        e.visible = !0,
        e.x = 993.578,
        e.y = 427.5,
        e
    },
    i.imgTruthRateBG_i = function() {
        var e = new eui.Image;
        return this.imgTruthRateBG = e,
        e.source = "qian_shang_level2_panel_img_di1_png",
        e.x = 705,
        e.y = 14,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level1_panel_asfaskjg_png",
        e.x = 893,
        e.y = 14,
        e
    },
    i.btnAddFightTime_i = function() {
        var e = new eui.Image;
        return this.btnAddFightTime = e,
        e.source = "qian_shang_level1_panel_btnaddfighttime_png",
        e.x = 1082,
        e.y = 14,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "qian_shang_level1_panel_btnfight_png",
        e.visible = !1,
        e.x = 116,
        e.y = 538,
        e
    },
    i.btnTips_i = function() {
        var e = new eui.Image;
        return this.btnTips = e,
        e.source = "qian_shang_level2_panel_btntips_png",
        e.visible = !1,
        e.x = 230,
        e.y = 538,
        e
    },
    i.btnFastBeat_i = function() {
        var e = new eui.Image;
        return this.btnFastBeat = e,
        e.source = "qian_shang_level1_panel_btnfastbeat_png",
        e.visible = !1,
        e.x = 350,
        e.y = 540,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "qian_shang_level1_panel_btnonekey_png",
        e.visible = !0,
        e.x = 995,
        e.y = 489,
        e
    },
    i.txtTruthRate_i = function() {
        var e = new eui.Label;
        return this.txtTruthRate = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "100%",
        e.textColor = 16630739,
        e.visible = !0,
        e.x = 806,
        e.y = 14,
        e
    },
    i.txtFightTime_i = function() {
        var e = new eui.Label;
        return this.txtFightTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "00",
        e.textColor = 16630738,
        e.x = 1046,
        e.y = 15,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image14_i(), this.btnClose_i(), this._Image15_i(), this.btnHelp_i()],
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_main_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "qian_shang_main_panel_btnclose_png",
        e.x = 16,
        e.y = 8,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level2_panel_hzmc_png",
        e.x = 84,
        e.y = 3,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "qian_shang_level1_panel_btnhelp_png",
        e.x = 222,
        e.y = 12,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/QianShangLevel3PanelSkin.exml"] = window.QianShangLevel3PanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnPet", "btnCure", "btnReset", "btnOneKey", "txtFightTime", "btnAddFightTime", "txtExploreTime", "imgWord1", "imgWord2", "imgWord3", "txtItem1", "btnAddItem1", "txtItem2", "btnExchange", "btnFastBeat", "btnFight", "groupFight", "groupMain", "btnClose", "btnHelp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.groupMain_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "qian_shang_main_panel_bg_jpg",
        e.top = 0,
        e
    },
    i.groupMain_i = function() {
        var e = new eui.Group;
        return this.groupMain = e,
        e.horizontalCenter = -4.5,
        e.width = 1079,
        e.y = 6,
        e.elementsContent = [this.btnPet_i(), this.btnCure_i(), this._Image2_i(), this.btnReset_i(), this.btnOneKey_i(), this.txtFightTime_i(), this.btnAddFightTime_i(), this.txtExploreTime_i(), this.imgWord1_i(), this.imgWord2_i(), this.imgWord3_i(), this._Image3_i(), this._Image4_i(), this.txtItem1_i(), this.btnAddItem1_i(), this._Image5_i(), this._Image6_i(), this.txtItem2_i(), this.btnExchange_i(), this.groupFight_i()],
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "qian_shang_level1_panel_btnpet_png",
        e.x = 0,
        e.y = 251,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "qian_shang_level1_panel_btncure_png",
        e.x = 0,
        e.y = 325,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_panel_txxq_png",
        e.visible = !0,
        e.x = 766,
        e.y = 12,
        e
    },
    i.btnReset_i = function() {
        var e = new eui.Image;
        return this.btnReset = e,
        e.source = "qian_shang_level3_panel_btnreset_png",
        e.x = 806,
        e.y = 455,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "qian_shang_level3_panel_btnonekey_png",
        e.x = 810,
        e.y = 534,
        e
    },
    i.txtFightTime_i = function() {
        var e = new eui.Label;
        return this.txtFightTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "00",
        e.textColor = 16630738,
        e.x = 982,
        e.y = 407.41,
        e
    },
    i.btnAddFightTime_i = function() {
        var e = new eui.Image;
        return this.btnAddFightTime = e,
        e.source = "qian_shang_level1_panel_btnaddfighttime_png",
        e.x = 1025,
        e.y = 407,
        e
    },
    i.txtExploreTime_i = function() {
        var e = new eui.Label;
        return this.txtExploreTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "00/10",
        e.textColor = 16630738,
        e.x = 966,
        e.y = 375.41,
        e
    },
    i.imgWord1_i = function() {
        var e = new eui.Image;
        return this.imgWord1 = e,
        e.source = "qian_shang_level3_panel_txtword1_png",
        e.visible = !1,
        e.x = 824,
        e.y = 202,
        e
    },
    i.imgWord2_i = function() {
        var e = new eui.Image;
        return this.imgWord2 = e,
        e.source = "qian_shang_level3_panel_txtword2_png",
        e.visible = !1,
        e.x = 783,
        e.y = 201,
        e
    },
    i.imgWord3_i = function() {
        var e = new eui.Image;
        return this.imgWord3 = e,
        e.source = "qian_shang_level3_panel_txtword3_png",
        e.visible = !1,
        e.x = 824,
        e.y = 201,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_panel_txtbg1_png",
        e.visible = !0,
        e.x = 642,
        e.y = 8,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_panel_1720230_png",
        e.visible = !0,
        e.x = 652,
        e.y = 1,
        e
    },
    i.txtItem1_i = function() {
        var e = new eui.Label;
        return this.txtItem1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "9999",
        e.textColor = 16630739,
        e.x = 752,
        e.y = 7.89,
        e
    },
    i.btnAddItem1_i = function() {
        var e = new eui.Image;
        return this.btnAddItem1 = e,
        e.source = "qian_shang_level1_panel_btnaddfighttime_png",
        e.x = 802,
        e.y = 9,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_panel_txtbg2_png",
        e.x = 845,
        e.y = 8,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_panel_1720249_png",
        e.x = 856,
        e.y = 0,
        e
    },
    i.txtItem2_i = function() {
        var e = new eui.Label;
        return this.txtItem2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "00",
        e.textColor = 16630738,
        e.x = 995,
        e.y = 7.89,
        e
    },
    i.btnExchange_i = function() {
        var e = new eui.Image;
        return this.btnExchange = e,
        e.source = "qian_shang_level3_panel_btnexchange_png",
        e.x = 1032,
        e.y = 9,
        e
    },
    i.groupFight_i = function() {
        var e = new eui.Group;
        return this.groupFight = e,
        e.x = 814.17,
        e.y = 143.92,
        e.elementsContent = [this._Image7_i(), this.btnFastBeat_i(), this.btnFight_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_fight_pop_3893_png",
        e.x = 54.78,
        e.y = 0,
        e
    },
    i.btnFastBeat_i = function() {
        var e = new eui.Image;
        return this.btnFastBeat = e,
        e.source = "qian_shang_level3_fight_pop_btnfastbeat_png",
        e.x = 127.45,
        e.y = 148.22,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "qian_shang_level3_fight_pop_btnfight_png",
        e.x = 0,
        e.y = 148.22,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image8_i(), this.btnClose_i(), this._Image9_i(), this.btnHelp_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_main_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "qian_shang_main_panel_btnclose_png",
        e.x = 16,
        e.y = 8,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_panel_jmtx_png",
        e.x = 84,
        e.y = 3,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "qian_shang_level1_panel_btnhelp_png",
        e.x = 222,
        e.y = 12,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/QianShangLevel3PopSkin.exml"] = window.QianShangLevel3PopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "imgPet2", "imgPet1", "txtItem1", "txtItem2", "btnFastBeat", "btnGiveMoney", "btnFight", "imgWord2", "imgWord1"],
        this.height = 353,
        this.width = 606,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Image2_i(), this.imgPet2_i(), this.imgPet1_i(), this._Image3_i(), this.txtItem1_i(), this.txtItem2_i(), this._Image4_i(), this._Image5_i(), this.btnFastBeat_i(), this.btnGiveMoney_i(), this.btnFight_i(), this.imgWord2_i(), this.imgWord1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_pop_m_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "qian_shang_level3_pop_btnclose_png",
        e.x = 561,
        e.y = 3,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_pop_petbg_png",
        e.x = 87,
        e.y = 300,
        e
    },
    i.imgPet2_i = function() {
        var e = new eui.Image;
        return this.imgPet2 = e,
        e.source = "qian_shang_level3_pop_3839_png",
        e.visible = !1,
        e.x = 26,
        e.y = 46,
        e
    },
    i.imgPet1_i = function() {
        var e = new eui.Image;
        return this.imgPet1 = e,
        e.source = "qian_shang_level3_pop_3894qc_png",
        e.visible = !1,
        e.x = 33,
        e.y = 38,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_pop_yzcsp_png",
        e.visible = !0,
        e.x = 307,
        e.y = 177,
        e
    },
    i.txtItem1_i = function() {
        var e = new eui.Label;
        return this.txtItem1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "00",
        e.textColor = 16773461,
        e.x = 492,
        e.y = 190.963,
        e
    },
    i.txtItem2_i = function() {
        var e = new eui.Label;
        return this.txtItem2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "00",
        e.textColor = 16773461,
        e.x = 492,
        e.y = 238.963,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_pop_bltxsd_png",
        e.x = 306,
        e.y = 147,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_level3_pop_line_png",
        e.x = 503,
        e.y = 132,
        e
    },
    i.btnFastBeat_i = function() {
        var e = new eui.Image;
        return this.btnFastBeat = e,
        e.source = "qian_shang_level3_pop_btnfastbeat_png",
        e.visible = !1,
        e.x = 445,
        e.y = 284,
        e
    },
    i.btnGiveMoney_i = function() {
        var e = new eui.Image;
        return this.btnGiveMoney = e,
        e.source = "qian_shang_level3_pop_btngivemoney_png",
        e.visible = !1,
        e.x = 445,
        e.y = 284,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "qian_shang_level3_pop_btnfight_png",
        e.visible = !0,
        e.x = 338,
        e.y = 284,
        e
    },
    i.imgWord2_i = function() {
        var e = new eui.Image;
        return this.imgWord2 = e,
        e.source = "qian_shang_level3_pop_zdswzyymxldxg_qgdeglf_1gyzch15gyzcsp_png",
        e.visible = !1,
        e.x = 306,
        e.y = 64,
        e
    },
    i.imgWord1_i = function() {
        var e = new eui.Image;
        return this.imgWord1 = e,
        e.source = "qian_shang_level3_pop_zsqcjktgzdlqjl_png",
        e.visible = !1,
        e.x = 307,
        e.y = 82,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/QianShangMainPanelSkin.exml"] = window.QianShangMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnLevel1", "imgHas1", "btnLevel2", "imgHas2", "btnLevel3", "imgHas3", "btnInfo", "btnSuperGet", "btnUp", "btnGetPet", "imgHasPet", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "qian_shang_main_panel_bg_jpg",
        e.top = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -13,
        e.width = 1034,
        e.y = 2,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnLevel1_i(), this.imgHas1_i(), this.btnLevel2_i(), this.imgHas2_i(), this.btnLevel3_i(), this.imgHas3_i(), this.btnInfo_i(), this.btnSuperGet_i(), this.btnUp_i(), this.btnGetPet_i(), this.imgHasPet_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_main_panel_pet_png",
        e.x = 20,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_main_panel_quxian_1_png",
        e.x = 572,
        e.y = 34,
        e
    },
    i.btnLevel1_i = function() {
        var e = new eui.Image;
        return this.btnLevel1 = e,
        e.source = "qian_shang_main_panel_btnlevel1_png",
        e.x = 650,
        e.y = 246,
        e
    },
    i.imgHas1_i = function() {
        var e = new eui.Image;
        return this.imgHas1 = e,
        e.source = "qian_shang_main_panel_imghas1_png",
        e.x = 676,
        e.y = 271,
        e
    },
    i.btnLevel2_i = function() {
        var e = new eui.Image;
        return this.btnLevel2 = e,
        e.source = "qian_shang_main_panel_btnlevel2_png",
        e.x = 699,
        e.y = 349,
        e
    },
    i.imgHas2_i = function() {
        var e = new eui.Image;
        return this.imgHas2 = e,
        e.source = "qian_shang_main_panel_imghas1_png",
        e.x = 726,
        e.y = 375,
        e
    },
    i.btnLevel3_i = function() {
        var e = new eui.Image;
        return this.btnLevel3 = e,
        e.source = "qian_shang_main_panel_btnlevel3_png",
        e.x = 748,
        e.y = 451,
        e
    },
    i.imgHas3_i = function() {
        var e = new eui.Image;
        return this.imgHas3 = e,
        e.source = "qian_shang_main_panel_imghas1_png",
        e.visible = !0,
        e.x = 774,
        e.y = 478,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "qian_shang_main_panel_btninfo_png",
        e.x = 0,
        e.y = 539,
        e
    },
    i.btnSuperGet_i = function() {
        var e = new eui.Image;
        return this.btnSuperGet = e,
        e.source = "qian_shang_main_panel_btnsuperget_png",
        e.visible = !1,
        e.x = 200,
        e.y = 538,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "qian_shang_main_panel_btnup_png",
        e.visible = !1,
        e.x = 200,
        e.y = 538,
        e
    },
    i.btnGetPet_i = function() {
        var e = new eui.Image;
        return this.btnGetPet = e,
        e.source = "qian_shang_main_panel_btngetpet_png",
        e.visible = !1,
        e.x = 200,
        e.y = 538,
        e
    },
    i.imgHasPet_i = function() {
        var e = new eui.Image;
        return this.imgHasPet = e,
        e.source = "qian_shang_main_panel_imghaspet_png",
        e.visible = !0,
        e.x = 183,
        e.y = 334,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this.btnClose_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_main_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "qian_shang_main_panel_btnclose_png",
        e.x = 16,
        e.y = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/QianShangUpPanelSkin.exml"] = window.QianShangUpPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnPet", "btnCure", "btnTe", "btnGetTe", "imgHasTe", "btnWu", "btnGetWu", "imgHasWu", "btnGetKe", "btnKe", "imgHasKe", "btnEasy", "btnNormal", "btnDifficult", "btnAddItem", "btnAddFightTime", "txtItem", "txtFightTime", "btnClose", "btnHelp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "qian_shang_main_panel_bg_jpg",
        e.top = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -4.5,
        e.width = 1079,
        e.y = 2,
        e.elementsContent = [this._Image2_i(), this.btnPet_i(), this.btnCure_i(), this._Image3_i(), this.btnTe_i(), this.btnGetTe_i(), this.imgHasTe_i(), this.btnWu_i(), this.btnGetWu_i(), this.imgHasWu_i(), this.btnGetKe_i(), this.btnKe_i(), this.imgHasKe_i(), this.btnEasy_i(), this.btnNormal_i(), this.btnDifficult_i(), this._Image4_i(), this.btnAddItem_i(), this._Image5_i(), this.btnAddFightTime_i(), this.txtItem_i(), this.txtFightTime_i(), this._Image6_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_main_panel_pet_png",
        e.x = 34,
        e.y = 0,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "qian_shang_level1_panel_btnpet_png",
        e.x = 0,
        e.y = 255,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "qian_shang_level1_panel_btncure_png",
        e.x = 0,
        e.y = 329,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_up_panel_line_png",
        e.visible = !0,
        e.x = 654,
        e.y = 16,
        e
    },
    i.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "qian_shang_up_panel_btnte_png",
        e.x = 759,
        e.y = 451,
        e
    },
    i.btnGetTe_i = function() {
        var e = new eui.Image;
        return this.btnGetTe = e,
        e.source = "qian_shang_up_panel_btngetke_png",
        e.x = 867,
        e.y = 475,
        e
    },
    i.imgHasTe_i = function() {
        var e = new eui.Image;
        return this.imgHasTe = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_main_panel_imghaspet_png",
        e.visible = !1,
        e.x = 727,
        e.y = 464,
        e
    },
    i.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "qian_shang_up_panel_btnwu_png",
        e.x = 758,
        e.y = 293,
        e
    },
    i.btnGetWu_i = function() {
        var e = new eui.Image;
        return this.btnGetWu = e,
        e.source = "qian_shang_up_panel_btngetke_png",
        e.visible = !0,
        e.x = 867,
        e.y = 317,
        e
    },
    i.imgHasWu_i = function() {
        var e = new eui.Image;
        return this.imgHasWu = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_main_panel_imghaspet_png",
        e.visible = !1,
        e.x = 727,
        e.y = 307,
        e
    },
    i.btnGetKe_i = function() {
        var e = new eui.Image;
        return this.btnGetKe = e,
        e.source = "qian_shang_up_panel_btngetke_png",
        e.visible = !0,
        e.x = 867,
        e.y = 161,
        e
    },
    i.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "qian_shang_up_panel_btnke_png",
        e.visible = !0,
        e.x = 750,
        e.y = 125,
        e
    },
    i.imgHasKe_i = function() {
        var e = new eui.Image;
        return this.imgHasKe = e,
        e.scaleX = .5,
        e.scaleY = .5,
        e.source = "qian_shang_main_panel_imghaspet_png",
        e.visible = !1,
        e.x = 727,
        e.y = 150,
        e
    },
    i.btnEasy_i = function() {
        var e = new eui.Image;
        return this.btnEasy = e,
        e.source = "qian_shang_up_panel_btneasy_png",
        e.x = 103,
        e.y = 552,
        e
    },
    i.btnNormal_i = function() {
        var e = new eui.Image;
        return this.btnNormal = e,
        e.source = "qian_shang_up_panel_btnnormal_png",
        e.x = 256,
        e.y = 552,
        e
    },
    i.btnDifficult_i = function() {
        var e = new eui.Image;
        return this.btnDifficult = e,
        e.source = "qian_shang_up_panel_btndifficult_png",
        e.x = 409,
        e.y = 552,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_up_panel_txtbg1_png",
        e.x = 651.765,
        e.y = 13,
        e
    },
    i.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "qian_shang_level1_panel_btnaddfighttime_png",
        e.x = 827,
        e.y = 13,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_up_panel_txtbg2_png",
        e.x = 869,
        e.y = 13,
        e
    },
    i.btnAddFightTime_i = function() {
        var e = new eui.Image;
        return this.btnAddFightTime = e,
        e.source = "qian_shang_level1_panel_btnaddfighttime_png",
        e.x = 1058,
        e.y = 13,
        e
    },
    i.txtItem_i = function() {
        var e = new eui.Label;
        return this.txtItem = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "9999",
        e.textColor = 16630739,
        e.x = 778,
        e.y = 13,
        e
    },
    i.txtFightTime_i = function() {
        var e = new eui.Label;
        return this.txtFightTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "00",
        e.textColor = 16630738,
        e.x = 1023,
        e.y = 13,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_up_panel_righttop_png",
        e.x = 664.815,
        e.y = 11.179,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image7_i(), this.btnClose_i(), this._Image8_i(), this.btnHelp_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_main_panel_up_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "qian_shang_main_panel_btnclose_png",
        e.x = 16,
        e.y = 8,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "qian_shang_up_panel_nlds_png",
        e.x = 84,
        e.y = 3,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "qian_shang_level1_panel_btnhelp_png",
        e.x = 222,
        e.y = 12,
        e
    },
    t
} (eui.Skin);