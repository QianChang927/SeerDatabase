var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
holyKylin; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.service.setValues([e.HolyKylinConst.forever_level1_bar1, e.HolyKylinConst.forever_level1_bar2, e.HolyKylinConst.forever_level1_bar3, e.HolyKylinConst.forever_level1_bar4, e.HolyKylinConst.forever_level1_bar5, e.HolyKylinConst.forever_level1_bar6, e.HolyKylinConst.forever_level2_overTimes, e.HolyKylinConst.forever_pet_state, e.HolyKylinConst.forever_level_state, e.HolyKylinConst.forever_level3_state, e.HolyKylinConst.forever_level2_value, e.HolyKylinConst.forever_level2_state, e.HolyKylinConst.forever_level2_overTimes], [e.HolyKylinConst.daily_level1_times, e.HolyKylinConst.daily_level2_times, e.HolyKylinConst.daily_level3_times]),
            n.init([{
                panelName: e.HolyKylinConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.HolyKylinConst.PANEL1
            },
            {
                panelName: e.HolyKylinConst.PANEL2
            },
            {
                panelName: e.HolyKylinConst.PANEL3
            }]),
            n
        }
        return __extends(n, t),
        n
    } (BasicMultPanelModule);
    e.HolyKylin = t,
    __reflect(t.prototype, "holyKylin.HolyKylin")
} (holyKylin || (holyKylin = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
holyKylin; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "holyKylin.HolyKylinMainPanel",
        e.PANEL1 = "holyKylin.HolyKylinPanel1",
        e.PANEL2 = "holyKylin.HolyKylinPanel2",
        e.PANEL3 = "holyKylin.HolyKylinPanel3",
        e.forever_pet_state = 4718,
        e.forever_level_state = 4719,
        e.forever_level1_bar1 = 4720,
        e.forever_level1_bar2 = 4721,
        e.forever_level1_bar3 = 4722,
        e.forever_level1_bar4 = 4723,
        e.forever_level1_bar5 = 4724,
        e.forever_level1_bar6 = 4725,
        e.forever_level2_value = 4726,
        e.forever_level2_overTimes = 4727,
        e.forever_level2_state = 4728,
        e.forever_level3_state = 4729,
        e.daily_level1_times = 14455,
        e.daily_level2_times = 14456,
        e.daily_level3_times = 14457,
        e
    } ();
    e.HolyKylinConst = t,
    __reflect(t.prototype, "holyKylin.HolyKylinConst")
} (holyKylin || (holyKylin = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
holyKylin; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = "holyKylin.MainpanelSkin",
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(158, this, "hk_mainpanel_stms_png",
            function() {
                e.service.closeModule()
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            EventManager.addEventListener("hasBuyUp",
            function() {
                t.service.updateValues().then(function() {
                    t.update()
                })
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                var n = new e.HolyKylinUpPop;
                PopViewManager.getInstance().openView(n, null, null, t)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                var n = new e.HolyKylinOnekeyPop,
                i = PopViewManager.createDefaultStyleObject();
                i.maskShapeStyle.maskAlpha = .8,
                PopViewManager.getInstance().openView(n, i, null, t)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3315,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btn1,
            function() {
                t.service.openPanel(e.HolyKylinConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                t.service.openPanel(e.HolyKylinConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                t.service.openPanel(e.HolyKylinConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btnEnvole,
            function() {
                var n = new e.HolyKylinEnvolePop;
                PopViewManager.getInstance().openView(n, null, null, t)
            },
            this),
            ImageButtonUtil.add(this.btnEvolveNeed,
            function() {
                ModuleManager.showModuleByID(56)
            },
            this),
            EventManager.addEventListener("holyKylin.updateMain",
            function() {
                t.updateValues()
            },
            this)
        },
        n.prototype.update = function() {
            StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "进入主界面");
            var t = this.service.getValue(e.HolyKylinConst.forever_level_state),
            n = this.service.getValue(e.HolyKylinConst.forever_pet_state);
            this.btnEnvole.visible = 7 == t && 0 == KTool.getBit(n, 1),
            this.imghasPet.visible = 1 == KTool.getBit(n, 1);
            var i = 1 == KTool.getBit(n, 8);
            DisplayUtil.setEnabled(this.btnOnekey, !i, !0);
            for (var a = 1; 3 >= a; a++) {
                var s = a;
                2 == a ? s = 3 : 3 == a && (s = 2);
                var o = 1 == KTool.getBit(t, s);
                this["pass" + a].visible = o,
                DisplayUtil.setEnabled(this["btn" + a], !o, o)
            }
        },
        n
    } (BasicPanel);
    e.HolyKylinMainPanel = t,
    __reflect(t.prototype, "holyKylin.HolyKylinMainPanel")
} (holyKylin || (holyKylin = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
holyKylin; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.index = 0,
            e.leftTime = 0,
            e.curLevel = 1,
            e.states = [],
            e.names = ["地面之魂", "电系之魂", "战斗之魂", "远古之魂", "神秘之魂", "圣灵之魂"],
            e.skinName = "holyKylin.Panel1Skin",
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(159, this, "hk_panel1_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            EventManager.addEventListener("hasBuyUp",
            function() {
                t.service.updateValues().then(function() {
                    t.update()
                })
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this);
            for (var n = function(e) {
                ImageButtonUtil.add(i["btnFast" + e],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(249807 + e + t.index, 1,
                        function() {
                            SocketConnection.sendByQueue(46311, [1, e + t.index],
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    t)
                },
                i),
                ImageButtonUtil.add(i["btnFight_" + e],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : (FightManager.fightNoMapBoss(9037 + e + t.index), void StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "挑战" + t.names[e - 1 + t.index]))
                },
                i)
            },
            i = this, a = 1; a <= 4 - this.curLevel; a++) n(a);
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249814, 1,
                    function() {
                        KTool.doExchange(9919, 1,
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                var n = new e.HolyKylinUpPop;
                PopViewManager.getInstance().openView(n, null, null, t)
            },
            this)
        },
        n.prototype.setBar = function() {
            var e = 0;
            this.states = [];
            for (var t = 1; 6 >= t; t++) {
                var n = this.service.getValue(4719 + t);
                n >= 100 && (e++, n = 100),
                this.states.push(n)
            }
            e >= 3 && (this.curLevel = 2),
            e >= 5 && (this.curLevel = 3);
            var i = 0;
            switch (this.curLevel) {
            case 1:
                break;
            case 2:
                this.level3.visible = !1,
                this.level1.x = 100,
                this.level2.x = 400;
                break;
            case 3:
                this.level2.visible = this.level3.visible = !1,
                this.level1.x = 250
            }
            i = e > 3 ? 100 : 83,
            this.bar_value.value = 50 + e * i
        },
        n.prototype.serLevel = function() {
            this.index = 0,
            2 == this.curLevel && (this.index = 3),
            3 == this.curLevel && (this.index = 5);
            for (var e = 1; e <= 4 - this.curLevel; e++) {
                var t = +this["txt_state" + e].text.match(/[0-9]+/g)[0],
                n = this.states[e - 1 + this.index];
                n > t && 100 > n - t && BubblerManager.getInstance().showText("恭喜你，成功为" + this.names[e - 1 + this.index] + "增加" + (n - t) + "%的进度！");
                var i = 100 == this.states[e - 1 + this.index];
                this["pass" + e].visible = i,
                this["txt_state" + e].text = this.states[e - 1 + this.index] + "%",
                this["txt_name" + e].text = this.names[e - 1 + this.index],
                this["icon_" + e].source = "hk_panel1_icon" + (e + this.index) + "_png",
                DisplayUtil.setEnabled(this["btnFast" + e], !i, i),
                DisplayUtil.setEnabled(this["btnFight_" + e], !i, i)
            }
        },
        n.prototype.update = function() {
            var t = this;
            StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "进入【兽魂爆发】关卡界面"),
            this.setBar(),
            this.serLevel(),
            this.leftTime = 20 - this.service.getValue(e.HolyKylinConst.daily_level1_times),
            this.txtCoin2.text = "今日挑战次数：" + this.leftTime,
            DisplayUtil.setEnabled(this.btnadd, 20 != this.leftTime, 20 == this.leftTime);
            var n = this.service.getValue(e.HolyKylinConst.forever_pet_state);
            this.hasGet.visible = 1 == KTool.getBit(n, 2),
            this.notGet.visible = 0 == KTool.getBit(n, 2);
            var i = this.service.getValue(e.HolyKylinConst.forever_level_state);
            1 == KTool.getBit(i, 1) && this.stage && Alarm.show("恭喜你，成功通过了兽魂爆发关卡！",
            function() {
                EventManager.removeAll(t),
                t.service.backToMainPanel()
            })
        },
        n
    } (BasicPanel);
    e.HolyKylinPanel1 = t,
    __reflect(t.prototype, "holyKylin.HolyKylinPanel1")
} (holyKylin || (holyKylin = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
holyKylin; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.leftTime = 0,
            e.curDif = 0,
            e.skinName = "holyKylin.Panel2Skin",
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(160, this, "hk_panel2_stms_png",
            function() {
                e.service.backToMainPanel()
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            EventManager.addEventListener("hasBuyUp",
            function() {
                t.service.updateValues().then(function() {
                    t.update()
                })
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                var n = new e.HolyKylinUpPop;
                PopViewManager.getInstance().openView(n, null, null, t)
            },
            this);
            for (var n = function(e) {
                ImageButtonUtil.add(i["btnFast_" + e],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(249818 + e, 1,
                        function() {
                            SocketConnection.sendByQueue(46311, [3, e],
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    t)
                },
                i),
                ImageButtonUtil.add(i["btnFight_" + e],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : void(4 != e ? (FightManager.fightNoMapBoss(9061 + e), StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "挑战" + ["圣光灵皇", "重生之翼", "瀚宇星皇"][e - 1])) : (FightManager.fightNoMapBoss(9068 - t.curDif), StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "挑战圣光麒麟")))
                },
                i)
            },
            i = this, a = 1; 4 >= a; a++) n(a);
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249849, 1,
                    function() {
                        KTool.doExchange(9921, 1,
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249848, 1,
                    function() {
                        SocketConnection.sendByQueue(46311, [6, 0],
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this)
        },
        n.prototype.update = function() {
            var t = this;
            StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "进入【英雄赞歌】关卡界面"),
            this.leftTime = 10 - this.service.getValue(e.HolyKylinConst.daily_level3_times);
            var n = this.service.getValue(e.HolyKylinConst.forever_level2_overTimes);
            this.txt_leftTime.text = n + "/5次",
            this.txtCoin2.text = "今日挑战次数：" + this.leftTime,
            DisplayUtil.setEnabled(this.btnadd, 10 != this.leftTime, 10 == this.leftTime),
            this.showStar();
            var i = this.service.getValue(e.HolyKylinConst.forever_pet_state);
            this.hasGet.visible = 1 == KTool.getBit(i, 4),
            this.notGet.visible = 0 == KTool.getBit(i, 4);
            var a = this.service.getValue(e.HolyKylinConst.forever_level_state);
            1 == KTool.getBit(a, 3) && this.stage && Alarm.show("恭喜你，成功通过了英雄赞歌关卡！",
            function() {
                EventManager.removeAll(t),
                t.service.backToMainPanel()
            })
        },
        n.prototype.showStar = function() {
            var t = this.service.getValue(e.HolyKylinConst.forever_level3_state),
            n = this.service.getValue(e.HolyKylinConst.forever_level2_state);
            this.arrow1.visible = n >= 1,
            this.arrow2.visible = n >= 2;
            for (var i = [], a = 1; 3 >= a; a++) {
                var s = t >> 8 * (a - 1) & 255,
                o = n >= a;
                this["star" + a].visible = 0 != s,
                this["pass" + a].visible = o,
                DisplayUtil.setEnabled(this["btnFast_" + a], n == a - 1, n != a - 1),
                DisplayUtil.setEnabled(this["btnFight_" + a], n == a - 1, n != a - 1),
                0 != s && (i.push(s), 2 != s && (this["star" + a].source = "hk_panel2_star" + (s - 1) + "_png"))
            }
            this.curDif = this.findMostFrequent(i);
            var r = this.service.getValue(e.HolyKylinConst.forever_pet_state);
            this.hasGet.visible = 1 == KTool.getBit(r, 4),
            this.notGet.visible = 0 == KTool.getBit(r, 4),
            this.btnFast_4.visible = this.btnFight_4.visible = this.btnAddTimes.visible = 3 == n
        },
        n.prototype.findMostFrequent = function(e) {
            for (var t = {},
            n = 0; n < e.length; n++) t[e[n]] ? t[e[n]]++:t[e[n]] = 1;
            var i = 0;
            for (var a in t) t[a] > i && (i = t[a]);
            var s = [];
            for (var a in t) t[a] === i && s.push(a);
            return i
        },
        n
    } (BasicPanel);
    e.HolyKylinPanel2 = t,
    __reflect(t.prototype, "holyKylin.HolyKylinPanel2")
} (holyKylin || (holyKylin = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
holyKylin; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.curValue = 0,
            e.leftTime = 0,
            e.conditions = ["10回合内击败弗里德", "5回合内击败弗里德", "3回合内击败弗里德", "承受3回合攻击击败乔特鲁德", "承受5回合攻击击败乔特鲁德", "承受10回合攻击击败乔特鲁德", "使用物理攻击击败霍德尔", "使用特殊攻击击败霍德尔", "使用致命一击击败霍德尔", "最后一击伤害大于1000击败阿尔斯兰", "最后一击伤害大于2000击败阿尔斯兰", "最后一击伤害大于2500击败阿尔斯兰", "最后一击伤害小于1000击败海瑟薇", "最后一击伤害小于800击败海瑟薇", "最后一击伤害小于500击败海瑟薇", "精灵满血状态击败莱茵哈特", "精灵打出致命一击击败莱茵哈特", "精灵使用固定伤害击败莱茵哈特"],
            e.skinName = "holyKylin.Panel3Skin",
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(161, this, "hk_panel3_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.addEvents(),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275
        },
        n.prototype.addEvents = function() {
            var t = this;
            EventManager.addEventListener("hasBuyUp",
            function() {
                t.service.updateValues().then(function() {
                    t.update()
                })
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                var n = new e.HolyKylinUpPop;
                PopViewManager.getInstance().openView(n, null, null, t)
            },
            this);
            for (var n = function(e) {
                ImageButtonUtil.add(i["head" + e],
                function() {
                    t.curValue = e,
                    t.oldPassArr = null,
                    t.showPetInfo()
                },
                i)
            },
            i = this, a = 1; 6 >= a; a++) n(a);
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249818, 1,
                    function() {
                        KTool.doExchange(9920, 1,
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFast,
            function() {
                var e = t.service.getValue(4726),
                n = e >> 4 * (t.curValue - 1) & 15;
                t.oldPassArr = t.curPassArr,
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249815 + n, 1,
                    function() {
                        SocketConnection.sendByQueue(46311, [2, 3 * (t.curValue - 1) + 1 + n],
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                var e = t.service.getValue(4726),
                n = e >> 4 * (t.curValue - 1) & 15;
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : (t.oldPassArr = t.curPassArr, void FightManager.fightNoMapBoss(9044 + 3 * (t.curValue - 1) + n))
            },
            this)
        },
        n.prototype.showPetInfo = function() {
            var e = this.service.getValue(4726);
            this.curPassArr = [];
            for (var t = 1; 6 >= t; t++) {
                var n = e >> 4 * (t - 1) & 15;
                this.curPassArr.push(n),
                this["pass" + t].visible = 3 == n,
                this["head" + t].touchEnabled = 3 != n
            }
            if (0 == this.curValue || 3 == this.curPassArr[this.curValue - 1]) for (var t = 1; 6 >= t; t++) if (3 != this.curPassArr[t - 1]) {
                this.curValue = t;
                break
            }
            var i = e >> 4 * (this.curValue - 1) & 15;
            DisplayUtil.setEnabled(this.btnFast, 3 != i, 3 == i),
            DisplayUtil.setEnabled(this.btnFight, 3 != i, 3 == i);
            for (var a = 1; 6 >= a; a++) this["head" + a].alpha = this.curValue == a ? 1 : .6,
            this["pet" + a].visible = this.curValue == a;
            for (var s = 0,
            t = 0; t < this.curPassArr.length; t++) if (3 != this.curPassArr[t]) {
                s = t + 1;
                break
            }
            for (var t = 1; 3 >= t; t++) this["love" + t].source = this.curPassArr[this.curValue - 1] >= t ? "hk_panel3_xx-sx_png": "hk_panel3_xx_no_png";
            if (this.txt_condition.text = this.conditions[3 * (this.curValue - 1) + this.curPassArr[this.curValue - 1]], this.oldPassArr) {
                var o = this.curPassArr[this.curValue - 1],
                r = this.oldPassArr[this.curValue - 1];
                o > r && BubblerManager.getInstance().showText("恭喜你，成功获得了该精灵王的认可！"),
                this.oldPassArr = null
            }
        },
        n.prototype.update = function() {
            var t = this;
            StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "进入【王者传说】关卡界面"),
            this.showPetInfo(),
            this.leftTime = 10 - this.service.getValue(e.HolyKylinConst.daily_level2_times),
            this.txtCoin2.text = "今日挑战次数：" + this.leftTime,
            DisplayUtil.setEnabled(this.btnadd, this.leftTime <= 0, !0);
            var n = this.service.getValue(e.HolyKylinConst.forever_pet_state);
            this.hasGet.visible = 1 == KTool.getBit(n, 3),
            this.notGet.visible = 0 == KTool.getBit(n, 3);
            var i = this.service.getValue(e.HolyKylinConst.forever_level_state);
            1 == KTool.getBit(i, 2) && this.stage && Alarm.show("恭喜你，成功通过了王者传说关卡！",
            function() {
                EventManager.removeAll(t),
                t.service.backToMainPanel()
            })
        },
        n
    } (BasicPanel);
    e.HolyKylinPanel3 = t,
    __reflect(t.prototype, "holyKylin.HolyKylinPanel3")
} (holyKylin || (holyKylin = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
holyKylin; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "holyKylin.EnvolepopSkin",
            StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "进入【圣光进化】面板"),
            t
        }
        return __extends(t, e),
        t.prototype.initialized = function() {
            this.addEvent(),
            this.update()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnEnvole,
            function() {
                return PetManager.isDefaultPet(3310) ? e.hasItem ? void SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 627],
                function(t) {
                    e.hide(),
                    BubblerManager.getInstance().showText("进化成功！"),
                    EventManager.dispatchEventWith("holyKylin.updateMain");
                    var n = t.data,
                    i = n.readUnsignedInt();
                    PetManager.upDateBagPetInfo(i)
                }) : void BubblerManager.getInstance().showText("你尚未获得圣光之角，无法将天火麒麟进化为圣光麒麟！") : void Alarm.show("请将天火麒麟放到背包首发位置",
                function() {
                    e.hide(),
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnGo1,
            function() {
                e.hide(),
                ModuleManager.showModuleByID(56)
            },
            this),
            ImageButtonUtil.add(this.btnGo2,
            function() {
                e.hide(),
                ModuleManager.showModuleByID(18, {
                    type: 1,
                    subType: "ITEM",
                    childParam: 3,
                    reshowCOLLECTION: 0
                })
            },
            this),
            ImageButtonUtil.add(this.btnBuy1,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249760, 1,
                    function() {
                        SocketConnection.sendByQueue(43235, [8, 0],
                        function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnBuy2,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1712359,
                        productID: 249826
                    },
                    t.caller = e,
                    t.callBack = function(t, n) {
                        KTool.buyProductByCallback(249826, n,
                        function() {
                            KTool.doExchange(9923, n,
                            function() {
                                e.update()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this)
        },
        t.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([6773, 4718],
            function(t) {
                e.hasPet = PetManager.hasPet(3310),
                e.hasGet1.visible = e.hasPet,
                DisplayUtil.setEnabled(e.btnBuy1, !e.hasPet, e.hasPet),
                DisplayUtil.setEnabled(e.btnGo1, !e.hasPet, e.hasPet),
                ItemManager.updateItems([1712359],
                function() {
                    e.hasItem = ItemManager.getNumByID(1712359) > 0,
                    e.hasGet2.visible = e.hasItem,
                    DisplayUtil.setEnabled(e.btnGo2, !e.hasItem, e.hasItem),
                    DisplayUtil.setEnabled(e.btnBuy2, !e.hasItem, e.hasItem)
                })
            })
        },
        t
    } (PopView);
    e.HolyKylinEnvolePop = t,
    __reflect(t.prototype, "holyKylin.HolyKylinEnvolePop")
} (holyKylin || (holyKylin = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
holyKylin; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "holyKylin.OnekeypopSkin",
            StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "进入优惠极品圣光麒麟界面"),
            t
        }
        return __extends(t, e),
        t.prototype.initialized = function() {
            var e = this;
            GameInfo.isChecking && (this.btnAdd.visible = !1),
            ImageButtonUtil.add(this.btnclose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                e.hide(),
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    return PetManager.isDefaultPet(3315) ? void KTool.buyProductByCallback(249807, 1,
                    function() {
                        SocketConnection.sendByQueue(46312, [2, 100, 0, 255, 0, 0, 0, 255],
                        function() {
                            Alarm.show("恭喜你圣光麒麟超级极品成功！"),
                            EventManager.dispatchEventWith("holyKylin.updateMain"),
                            e.hide()
                        })
                    }) : void Alarm.show("请将圣光麒麟放到背包首发位置",
                    function() {
                        e.hide(),
                        ModuleManager.showModuleByID(10)
                    })
                },
                e)
            },
            this),
            this.update(),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED,
            function() {
                UserInfoManager.getDiamond(function(t) {
                    e.txt_diamond.text = core.gameUtil.ConvertToTenThousand(t)
                },
                e)
            },
            this)
        },
        t.prototype.update = function() {
            var e = this;
            KTool.getBitSet([627],
            function(t) {
                var n = 1 == t[0];
                DisplayUtil.setEnabled(e.btnBuy, !n, n)
            }),
            UserInfoManager.getDiamond(function(t) {
                e.txt_diamond.text = core.gameUtil.ConvertToTenThousand(t)
            },
            this)
        },
        t.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.HolyKylinOnekeyPop = t,
    __reflect(t.prototype, "holyKylin.HolyKylinOnekeyPop")
} (holyKylin || (holyKylin = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
holyKylin; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "holyKylin.UppopSkin",
            StatLogger.log("20230616版本系统功能", "圣光麒麟搬迁", "进入【圣光提升】界面"),
            t
        }
        return __extends(t, e),
        t.prototype.initialized = function() {
            var e = this;
            this.btnKe.source = ClientConfig.getMarkPath(40859),
            this.update(),
            ImageButtonUtil.add(this.btnBack,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3315, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 30487
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(40859) ? (e = {},
                e.ins = 40859, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 40859, tipsPop.TipsPop.openItemPop(e))
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(n["btnBuy_" + t],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(249822 + t, 1,
                        function() {
                            SocketConnection.sendByQueue(46311, [4, t],
                            function() {
                                EventManager.dispatchEventWith("hasBuyUp"),
                                e.update()
                            })
                        })
                    },
                    e)
                },
                n),
                ImageButtonUtil.add(n["btnGet_" + t],
                function() {
                    return PetManager.isDefaultPet(3315) ? void SocketConnection.sendByQueue(46311, [5, t],
                    function() {
                        e.update()
                    }) : void Alarm.show("请将圣光麒麟放到背包首发位置",
                    function() {
                        e.hide(),
                        ModuleManager.showModuleByID(10)
                    })
                },
                n)
            },
            n = this, i = 1; 3 >= i; i++) t(i)
        },
        t.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([4718],
            function(t) {
                for (var n = 1; 3 >= n; n++) e["btnGet_" + n].visible = 1 == KTool.getBit(t[0], n + 1),
                e["hasGet_" + n].visible = 1 == KTool.getBit(t[0], n + 4),
                e["btnBuy_" + n].visible = 0 == KTool.getBit(t[0], n + 1)
            })
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.HolyKylinUpPop = t,
    __reflect(t.prototype, "holyKylin.HolyKylinUpPop")
} (holyKylin || (holyKylin = {})),
window.holyKylin = window.holyKylin || {};
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/EnvolepopSkin.exml"] = window.holyKylin.EnvolepopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnBack", "btnBuy1", "btnGo1", "hasGet1", "le", "btnBuy2", "btnGo2", "hasGet2", "ri", "btnEnvole"],
        this.height = 453,
        this.width = 855,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnBack_i(), this.le_i(), this.ri_i(), this.btnEnvole_i(), this._Label3_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hk_envolepop_jx_1_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hk_envolepop_sgjh_png",
        e.x = 33,
        e.y = 14,
        e
    },
    n.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "hk_envolepop_btnback_png",
        e.x = 808,
        e.y = 13,
        e
    },
    n.le_i = function() {
        var e = new eui.Group;
        return this.le = e,
        e.x = 68,
        e.y = 102,
        e.elementsContent = [this._Image3_i(), this._Label1_i(), this.btnBuy1_i(), this.btnGo1_i(), this._Image4_i(), this.hasGet1_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hk_envolepop_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "天火麒麟",
        e.textColor = 16772558,
        e.x = 47,
        e.y = 33,
        e
    },
    n.btnBuy1_i = function() {
        var e = new eui.Image;
        return this.btnBuy1 = e,
        e.source = "hk_envolepop_btnbuy1_png",
        e.x = 4,
        e.y = 277,
        e
    },
    n.btnGo1_i = function() {
        var e = new eui.Image;
        return this.btnGo1 = e,
        e.source = "hk_envolepop_txtlabel_png",
        e.x = 51,
        e.y = 233,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hk_envolepop_jx_7_kb_2_png",
        e.x = 15,
        e.y = 75,
        e
    },
    n.hasGet1_i = function() {
        var e = new eui.Image;
        return this.hasGet1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "hk_envolepop_yihuode_png",
        e.visible = !0,
        e.x = 4,
        e.y = 64,
        e
    },
    n.ri_i = function() {
        var e = new eui.Group;
        return this.ri = e,
        e.x = 608,
        e.y = 102,
        e.elementsContent = [this._Image5_i(), this._Label2_i(), this.btnBuy2_i(), this.btnGo2_i(), this._Image6_i(), this.hasGet2_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hk_envolepop_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "圣光之角",
        e.textColor = 16772558,
        e.x = 47,
        e.y = 33,
        e
    },
    n.btnBuy2_i = function() {
        var e = new eui.Image;
        return this.btnBuy2 = e,
        e.source = "hk_envolepop_btnbuy1_png",
        e.x = 4,
        e.y = 277,
        e
    },
    n.btnGo2_i = function() {
        var e = new eui.Image;
        return this.btnGo2 = e,
        e.source = "hk_envolepop_txtlabel_png",
        e.x = 51,
        e.y = 233,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hk_envolepop_tuceng_3_png",
        e.x = 57,
        e.y = 95,
        e
    },
    n.hasGet2_i = function() {
        var e = new eui.Image;
        return this.hasGet2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "hk_envolepop_yihuode_png",
        e.visible = !0,
        e.x = 4,
        e.y = 64,
        e
    },
    n.btnEnvole_i = function() {
        var e = new eui.Image;
        return this.btnEnvole = e,
        e.source = "hk_envolepop_btnenvole_png",
        e.visible = !0,
        e.x = 300,
        e.y = 133,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "恭喜你通过了试炼，拥有圣光之角即可将天火麒麟进化为圣光麒麟!",
        e.textColor = 16763728,
        e.x = 126,
        e.y = 67,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.holyKylin.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnOnekey", "btnInfo", "imghasPet", "btnUp", "up", "btn1", "pass1", "btn2", "pass2", "btn3", "pass3", "btns", "btnEnvole", "btnEvolveNeed"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group4_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "hk_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 21,
        e.width = 1110,
        e.y = 250,
        e.elementsContent = [this.btnOnekey_i(), this.btnInfo_i(), this.imghasPet_i(), this.up_i(), this.btns_i(), this.btnEnvole_i(), this.btnEvolveNeed_i()],
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "hk_mainpanel_yhjp_png",
        e.visible = !0,
        e.x = 89,
        e.y = 302,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "hk_mainpanel_btninfo_png",
        e.x = 19,
        e.y = 303,
        e
    },
    n.imghasPet_i = function() {
        var e = new eui.Image;
        return this.imghasPet = e,
        e.source = "hk_main_panel_imghas_png",
        e.visible = !0,
        e.x = 275,
        e.y = 292,
        e
    },
    n.up_i = function() {
        var e = new eui.Group;
        return this.up = e,
        e.x = 700,
        e.y = 160,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this.btnUp_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hk_mainpanel_zu_2_png",
        e.x = 0,
        e.y = 27,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "获得圣光提升通关更加轻松",
        e.textColor = 14645319,
        e.x = 16,
        e.y = 36,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "hk_mainpanel_btnup_png",
        e.x = 276,
        e.y = 0,
        e
    },
    n.btns_i = function() {
        var e = new eui.Group;
        return this.btns = e,
        e.x = 570,
        e.y = 0,
        e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i()],
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.btn1_i(), this.pass1_i()],
        e
    },
    n.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "hk_mainpanel_btn1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.source = "hk_mainpanel_pass_png",
        e.visible = !1,
        e.x = 0,
        e.y = 7,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 254,
        e.y = 0,
        e.elementsContent = [this.btn2_i(), this.pass2_i()],
        e
    },
    n.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "hk_mainpanel_btn2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.source = "hk_mainpanel_pass_png",
        e.visible = !1,
        e.x = 0,
        e.y = 7,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 121,
        e.y = 90,
        e.elementsContent = [this.btn3_i(), this.pass3_i()],
        e
    },
    n.btn3_i = function() {
        var e = new eui.Image;
        return this.btn3 = e,
        e.source = "hk_mainpanel_btn3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.source = "hk_mainpanel_pass_png",
        e.visible = !1,
        e.x = 0,
        e.y = 7,
        e
    },
    n.btnEnvole_i = function() {
        var e = new eui.Image;
        return this.btnEnvole = e,
        e.source = "hk_mainpanel_btnenvole_png",
        e.visible = !0,
        e.x = 246,
        e.y = 291,
        e
    },
    n.btnEvolveNeed_i = function() {
        var e = new eui.Image;
        return this.btnEvolveNeed = e,
        e.source = "hk_mainpanel_btnevolveneed_png",
        e.x = 716,
        e.y = 245,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/OnekeypopSkin.exml"] = window.holyKylin.OnekeypopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnAdd", "txt_diamond", "btnBuy", "btnclose", "oneKeyPop"],
        this.height = 607,
        this.width = 985,
        this.elementsContent = [this.oneKeyPop_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.oneKeyPop_i = function() {
        var e = new eui.Group;
        return this.oneKeyPop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnAdd_i(), this._Label1_i(), this.txt_diamond_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.btnBuy_i(), this.btnclose_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hk_onekeypop_zu_1_png",
        e.x = 146,
        e.y = 0,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hk_onekeypop_btnadd_png",
        e.x = 539,
        e.y = 512,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "您现在拥有钻石：",
        e.textColor = 16777215,
        e.x = 325,
        e.y = 516,
        e
    },
    n.txt_diamond_i = function() {
        var e = new eui.Label;
        return this.txt_diamond = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "2218",
        e.textColor = 16774499,
        e.x = 468,
        e.y = 516,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hk_onekeypop_3_png",
        e.x = 0,
        e.y = 382,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hk_onekeypop_2_png",
        e.x = 0,
        e.y = 266,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hk_onekeypop_1_png",
        e.x = 0,
        e.y = 148,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hk_onekeypop_6_png",
        e.x = 609,
        e.y = 382,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hk_onekeypop_5_png",
        e.x = 609,
        e.y = 266,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hk_onekeypop_4_png",
        e.x = 609,
        e.y = 148,
        e
    },
    n.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "hk_onekeypop_btnbuy_png",
        e.x = 366,
        e.y = 544,
        e
    },
    n.btnclose_i = function() {
        var e = new eui.Image;
        return this.btnclose = e,
        e.source = "hk_onekeypop_btnclose_png",
        e.x = 951,
        e.y = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.holyKylin.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnBag", "btnCure", "btnUp", "hasGet", "notGet", "up", "bar_value", "point1", "point2", "point3", "juxing_13", "txt_name1", "txt_state1", "btnFast1", "btnFight_1", "icon_1", "pass1", "level1", "txt_name2", "txt_state2", "btnFast2", "btnFight_2", "icon_2", "pass2", "level2", "txt_name3", "txt_state3", "btnFast3", "btnFight_3", "icon_3", "pass3", "level3", "levels", "txtCoin2", "btnadd", "tims"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "hk_panel1_jx_8_kb_5_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.left = 0,
        e.right = 0,
        e.source = "hk_panel1_bg_jpg",
        e.visible = !0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 41,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnBag_i(), this.btnCure_i(), this.up_i(), this._Image3_i(), this.bar_value_i(), this.point1_i(), this.point2_i(), this.point3_i(), this.juxing_13_i(), this.levels_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this.tims_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_zu_4_png",
        e.x = 652,
        e.y = 0,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hk_panel1_jlbb1_png",
        e.x = 1019,
        e.y = 235,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hk_panel1_jlhf_png",
        e.x = 1019,
        e.y = 326,
        e
    },
    i.up_i = function() {
        var e = new eui.Group;
        return this.up = e,
        e.x = 0,
        e.y = 537,
        e.elementsContent = [this._Image2_i(), this._Label1_i(), this.btnUp_i(), this.hasGet_i(), this.notGet_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_zu_5_png",
        e.x = 62,
        e.y = 17,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "兽魂爆发关卡战胜\n进度额外增加10%",
        e.textColor = 15569749,
        e.x = 106,
        e.y = 27,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "hk_panel1_sg_ds_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasGet_i = function() {
        var e = new eui.Image;
        return this.hasGet = e,
        e.source = "hk_panel1_yijihuo_png",
        e.x = 279,
        e.y = 17,
        e
    },
    i.notGet_i = function() {
        var e = new eui.Image;
        return this.notGet = e,
        e.source = "hk_panel1_wei_png",
        e.x = 279,
        e.y = 17,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_jx_8_kb_3_png",
        e.x = 57,
        e.y = 106,
        e
    },
    i.bar_value_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_value = e,
        e.maximum = 600,
        e.value = 300,
        e.x = 73,
        e.y = 123,
        e.skinName = n,
        e
    },
    i.point1_i = function() {
        var e = new eui.Image;
        return this.point1 = e,
        e.source = "hk_panel1_jx_8_kb_4_png",
        e.x = 122,
        e.y = 115,
        e
    },
    i.point2_i = function() {
        var e = new eui.Image;
        return this.point2 = e,
        e.source = "hk_panel1_jx_8_kb_4_png",
        e.x = 367,
        e.y = 115,
        e
    },
    i.point3_i = function() {
        var e = new eui.Image;
        return this.point3 = e,
        e.source = "hk_panel1_jx_8_kb_4_png",
        e.x = 612,
        e.y = 115,
        e
    },
    i.juxing_13_i = function() {
        var e = new eui.Image;
        return this.juxing_13 = e,
        e.source = "hk_panel1_juxing_13_png",
        e.x = 22,
        e.y = 143,
        e
    },
    i.levels_i = function() {
        var e = new eui.Group;
        return this.levels = e,
        e.width = 682,
        e.x = 37,
        e.y = 190,
        e.layout = this._BasicLayout1_i(),
        e.elementsContent = [this.level1_i(), this.level2_i(), this.level3_i()],
        e
    },
    i._BasicLayout1_i = function() {
        var e = new eui.BasicLayout;
        return e
    },
    i.level1_i = function() {
        var e = new eui.Group;
        return this.level1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this.txt_name1_i(), this.txt_state1_i(), this.btnFast1_i(), this.btnFight_1_i(), this.icon_1_i(), this.pass1_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_1_png",
        e.x = -4,
        e.y = -34,
        e
    },
    i.txt_name1_i = function() {
        var e = new eui.Label;
        return this.txt_name1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "地面之魂",
        e.textColor = 16772558,
        e.x = 45,
        e.y = 0,
        e
    },
    i.txt_state1_i = function() {
        var e = new eui.Label;
        return this.txt_state1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "100%",
        e.textAlign = "center",
        e.textColor = 16305484,
        e.width = 60,
        e.x = 65,
        e.y = 40,
        e
    },
    i.btnFast1_i = function() {
        var e = new eui.Image;
        return this.btnFast1 = e,
        e.source = "hk_panel1_txtlabel_png",
        e.x = 47,
        e.y = 222,
        e
    },
    i.btnFight_1_i = function() {
        var e = new eui.Image;
        return this.btnFight_1 = e,
        e.source = "hk_panel1_btnfight_png",
        e.x = 0,
        e.y = 265,
        e
    },
    i.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.x = 60,
        e.y = 121,
        e
    },
    i.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.source = "hk_panel1_pass_png",
        e.x = 9,
        e.y = 75,
        e
    },
    i.level2_i = function() {
        var e = new eui.Group;
        return this.level2 = e,
        e.visible = !0,
        e.x = 250,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.txt_name2_i(), this.txt_state2_i(), this.btnFast2_i(), this.btnFight_2_i(), this.icon_2_i(), this.pass2_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_1_png",
        e.x = -4,
        e.y = -34,
        e
    },
    i.txt_name2_i = function() {
        var e = new eui.Label;
        return this.txt_name2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "地面之魂",
        e.textColor = 16772558,
        e.x = 45,
        e.y = 0,
        e
    },
    i.txt_state2_i = function() {
        var e = new eui.Label;
        return this.txt_state2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "100%",
        e.textAlign = "center",
        e.textColor = 16305484,
        e.width = 60,
        e.x = 65,
        e.y = 40,
        e
    },
    i.btnFast2_i = function() {
        var e = new eui.Image;
        return this.btnFast2 = e,
        e.source = "hk_panel1_txtlabel_png",
        e.x = 47,
        e.y = 222,
        e
    },
    i.btnFight_2_i = function() {
        var e = new eui.Image;
        return this.btnFight_2 = e,
        e.source = "hk_panel1_btnfight_png",
        e.x = 0,
        e.y = 265,
        e
    },
    i.icon_2_i = function() {
        var e = new eui.Image;
        return this.icon_2 = e,
        e.x = 59,
        e.y = 119,
        e
    },
    i.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.source = "hk_panel1_pass_png",
        e.x = 9,
        e.y = 75,
        e
    },
    i.level3_i = function() {
        var e = new eui.Group;
        return this.level3 = e,
        e.visible = !0,
        e.x = 494,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this.txt_name3_i(), this.txt_state3_i(), this.btnFast3_i(), this.btnFight_3_i(), this.icon_3_i(), this.pass3_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_1_png",
        e.x = -4,
        e.y = -34,
        e
    },
    i.txt_name3_i = function() {
        var e = new eui.Label;
        return this.txt_name3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "地面之魂",
        e.textColor = 16772558,
        e.x = 45,
        e.y = 0,
        e
    },
    i.txt_state3_i = function() {
        var e = new eui.Label;
        return this.txt_state3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "100%",
        e.textAlign = "center",
        e.textColor = 16305484,
        e.width = 60,
        e.x = 65,
        e.y = 40,
        e
    },
    i.btnFast3_i = function() {
        var e = new eui.Image;
        return this.btnFast3 = e,
        e.source = "hk_panel1_txtlabel_png",
        e.x = 47,
        e.y = 222,
        e
    },
    i.btnFight_3_i = function() {
        var e = new eui.Image;
        return this.btnFight_3 = e,
        e.source = "hk_panel1_btnfight_png",
        e.x = 0,
        e.y = 265,
        e
    },
    i.icon_3_i = function() {
        var e = new eui.Image;
        return this.icon_3 = e,
        e.x = 60,
        e.y = 121,
        e
    },
    i.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.source = "hk_panel1_pass_png",
        e.x = 9,
        e.y = 75,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_dyjd_png",
        e.x = 60,
        e.y = 67,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_dejd_png",
        e.x = 305,
        e.y = 69,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_dsjd_png",
        e.x = 550,
        e.y = 66,
        e
    },
    i.tims_i = function() {
        var e = new eui.Group;
        return this.tims = e,
        e.x = 897,
        e.y = 23,
        e.elementsContent = [this._Image10_i(), this.txtCoin2_i(), this.btnadd_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_jx_20_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日挑战次数：00",
        e.textColor = 16514895,
        e.x = 19,
        e.y = 1,
        e
    },
    i.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "hk_panel1_btnadd_png",
        e.x = 178,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.holyKylin.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnBag", "btnCure", "btnUp", "hasGet", "notGet", "up", "arrow1", "arrow2", "btnFast_1", "btnFight_1", "pass1", "level1", "btnFast_2", "btnFight_2", "pass2", "level2", "btnFast_3", "btnFight_3", "pass3", "level3", "levels", "star1", "star2", "star3", "spa", "btnFight_4", "btnFast_4", "txt_leftTime", "btnAddTimes", "txtCoin2", "btnadd", "tims"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.left = 0,
        e.right = 0,
        e.source = "hk_panel1_bg_jpg",
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnBag_i(), this.btnCure_i(), this.up_i(), this._Image3_i(), this.arrow1_i(), this.arrow2_i(), this.levels_i(), this._Image10_i(), this.spa_i(), this.btnFight_4_i(), this.btnFast_4_i(), this._Image15_i(), this._Label5_i(), this.txt_leftTime_i(), this.btnAddTimes_i(), this.tims_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_zu_4_png",
        e.x = 734,
        e.y = 0,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hk_panel1_jlbb1_png",
        e.x = 1101,
        e.y = 235,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hk_panel1_jlhf_png",
        e.x = 1101,
        e.y = 326,
        e
    },
    n.up_i = function() {
        var e = new eui.Group;
        return this.up = e,
        e.x = 77,
        e.y = 537,
        e.elementsContent = [this._Image2_i(), this._Label1_i(), this.btnUp_i(), this.hasGet_i(), this.notGet_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_zu_5_png",
        e.x = 62,
        e.y = 17,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "英雄赞歌出战精灵\n受到伤害减少25%",
        e.textColor = 15569749,
        e.x = 106,
        e.y = 27,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "hk_panel1_sg_ds_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.hasGet_i = function() {
        var e = new eui.Image;
        return this.hasGet = e,
        e.source = "hk_panel1_yijihuo_png",
        e.x = 279,
        e.y = 17,
        e
    },
    n.notGet_i = function() {
        var e = new eui.Image;
        return this.notGet = e,
        e.source = "hk_panel1_wei_png",
        e.x = 279,
        e.y = 17,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_juxing_13_png",
        e.x = 104,
        e.y = 143,
        e
    },
    n.arrow1_i = function() {
        var e = new eui.Image;
        return this.arrow1 = e,
        e.source = "hk_panel2_jt2_kb_png",
        e.x = 311,
        e.y = 317,
        e
    },
    n.arrow2_i = function() {
        var e = new eui.Image;
        return this.arrow2 = e,
        e.source = "hk_panel2_jt2_kb_png",
        e.x = 556,
        e.y = 317,
        e
    },
    n.levels_i = function() {
        var e = new eui.Group;
        return this.levels = e,
        e.x = 119,
        e.y = 190,
        e.elementsContent = [this.level1_i(), this.level2_i(), this.level3_i()],
        e
    },
    n.level1_i = function() {
        var e = new eui.Group;
        return this.level1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this.btnFast_1_i(), this.btnFight_1_i(), this._Label2_i(), this.pass1_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_1_png",
        e.x = -4,
        e.y = -34,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_jx_7_kb_png",
        e.x = 8,
        e.y = 38,
        e
    },
    n.btnFast_1_i = function() {
        var e = new eui.Image;
        return this.btnFast_1 = e,
        e.source = "hk_panel2_btnFasta_png",
        e.x = 47,
        e.y = 222,
        e
    },
    n.btnFight_1_i = function() {
        var e = new eui.Image;
        return this.btnFight_1 = e,
        e.source = "hk_panel1_btnfight_png",
        e.x = 0,
        e.y = 265,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "圣光灵皇",
        e.textColor = 16772558,
        e.x = 45,
        e.y = 0,
        e
    },
    n.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "hk_panel2_pass_png",
        e.visible = !1,
        e.x = -3,
        e.y = 25,
        e
    },
    n.level2_i = function() {
        var e = new eui.Group;
        return this.level2 = e,
        e.x = 250,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this._Label3_i(), this.btnFast_2_i(), this.btnFight_2_i(), this._Image7_i(), this.pass2_i()],
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_1_png",
        e.x = -4,
        e.y = -34,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "重生之翼",
        e.textColor = 16772558,
        e.x = 45,
        e.y = 0,
        e
    },
    n.btnFast_2_i = function() {
        var e = new eui.Image;
        return this.btnFast_2 = e,
        e.source = "hk_panel2_btnFasta_png",
        e.x = 47,
        e.y = 222,
        e
    },
    n.btnFight_2_i = function() {
        var e = new eui.Image;
        return this.btnFight_2 = e,
        e.source = "hk_panel1_btnfight_png",
        e.x = 0,
        e.y = 265,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_jx_7_kb_3_png",
        e.x = 8,
        e.y = 38,
        e
    },
    n.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "hk_panel2_pass_png",
        e.x = -3,
        e.y = 25,
        e
    },
    n.level3_i = function() {
        var e = new eui.Group;
        return this.level3 = e,
        e.x = 494,
        e.y = 0,
        e.elementsContent = [this._Image8_i(), this._Label4_i(), this.btnFast_3_i(), this.btnFight_3_i(), this._Image9_i(), this.pass3_i()],
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_1_png",
        e.x = -4,
        e.y = -34,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "瀚宇星皇",
        e.textColor = 16772558,
        e.x = 45,
        e.y = 0,
        e
    },
    n.btnFast_3_i = function() {
        var e = new eui.Image;
        return this.btnFast_3 = e,
        e.source = "hk_panel2_btnFasta_png",
        e.x = 47,
        e.y = 222,
        e
    },
    n.btnFight_3_i = function() {
        var e = new eui.Image;
        return this.btnFight_3 = e,
        e.source = "hk_panel1_btnfight_png",
        e.x = 0,
        e.y = 265,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_jx_7_kb_4_png",
        e.x = 8,
        e.y = 38,
        e
    },
    n.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "hk_panel2_pass_png",
        e.x = -3,
        e.y = 25,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_zu_4_png",
        e.x = 145,
        e.y = 79,
        e
    },
    n.spa_i = function() {
        var e = new eui.Group;
        return this.spa = e,
        e.x = 276,
        e.y = 74,
        e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this.star1_i(), this.star2_i(), this.star3_i()],
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_zljc_png",
        e.x = 0,
        e.y = 9,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_star1_png",
        e.x = 187,
        e.y = 9,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_star1_png",
        e.x = 237,
        e.y = 9,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_star1_png",
        e.x = 287,
        e.y = 9,
        e
    },
    n.star1_i = function() {
        var e = new eui.Image;
        return this.star1 = e,
        e.source = "hk_panel2_star3_png",
        e.x = 177,
        e.y = 0,
        e
    },
    n.star2_i = function() {
        var e = new eui.Image;
        return this.star2 = e,
        e.source = "hk_panel2_star3_png",
        e.x = 227,
        e.y = 0,
        e
    },
    n.star3_i = function() {
        var e = new eui.Image;
        return this.star3 = e,
        e.source = "hk_panel2_star3_png",
        e.x = 277,
        e.y = 0,
        e
    },
    n.btnFight_4_i = function() {
        var e = new eui.Image;
        return this.btnFight_4 = e,
        e.source = "hk_panel2_btnfight_png",
        e.x = 822,
        e.y = 558,
        e
    },
    n.btnFast_4_i = function() {
        var e = new eui.Image;
        return this.btnFast_4 = e,
        e.source = "hk_panel2_btnfast_png",
        e.x = 1002,
        e.y = 558,
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel2_jx_904_kb_2_png",
        e.x = 826,
        e.y = 507,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "已累积战胜",
        e.textColor = 16776661,
        e.x = 896,
        e.y = 514,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "0/5次",
        e.textColor = 16775235,
        e.x = 1009,
        e.y = 514,
        e
    },
    n.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.source = "hk_panel2_jx_3_kb_png",
        e.x = 1120,
        e.y = 509,
        e
    },
    n.tims_i = function() {
        var e = new eui.Group;
        return this.tims = e,
        e.x = 897,
        e.y = 23,
        e.elementsContent = [this._Image16_i(), this.txtCoin2_i(), this.btnadd_i()],
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_jx_20_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日挑战次数：00",
        e.textColor = 16514895,
        e.x = 19,
        e.y = 1,
        e
    },
    n.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "hk_panel1_btnadd_png",
        e.x = 178,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.holyKylin.Panel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet1", "pet2", "pet3", "pet4", "pet5", "pet6", "pets", "pass1", "head1", "pass2", "head2", "pass3", "head3", "pass4", "head4", "pass5", "head5", "pass6", "head6", "heads", "btnFight", "btnFast", "love1", "love2", "love3", "txt_condition", "infos", "btnUp", "hasGet", "notGet", "up", "txtCoin2", "btnadd", "tims", "btnBag", "btnCure"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "hk_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 5,
        e.width = 1110,
        e.y = 0,
        e.elementsContent = [this.pets_i(), this._Image1_i(), this.heads_i(), this.btnFight_i(), this.btnFast_i(), this.infos_i(), this._Image13_i(), this._Label2_i(), this.up_i(), this.tims_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    n.pets_i = function() {
        var e = new eui.Group;
        return this.pets = e,
        e.x = 32,
        e.y = 0,
        e.elementsContent = [this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i(), this.pet5_i(), this.pet6_i()],
        e
    },
    n.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "hk_panel3_pet2959_png",
        e.visible = !0,
        e.x = 103,
        e.y = 0,
        e
    },
    n.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "hk_panel3_pet3036_png",
        e.visible = !0,
        e.x = 11,
        e.y = 0,
        e
    },
    n.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "hk_panel3_pet3200_png",
        e.visible = !0,
        e.x = 92,
        e.y = 29,
        e
    },
    n.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.source = "hk_panel3_pet3223_png",
        e.visible = !0,
        e.x = 0,
        e.y = 1,
        e
    },
    n.pet5_i = function() {
        var e = new eui.Image;
        return this.pet5 = e,
        e.source = "hk_panel3_pet3211_png",
        e.visible = !0,
        e.x = 58,
        e.y = 0,
        e
    },
    n.pet6_i = function() {
        var e = new eui.Image;
        return this.pet6 = e,
        e.source = "hk_panel3_pet3174_png",
        e.visible = !0,
        e.x = 70,
        e.y = 6,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_juxing_12_png",
        e.x = 785,
        e.y = 91,
        e
    },
    n.heads_i = function() {
        var e = new eui.Group;
        return this.heads = e,
        e.visible = !0,
        e.x = 785,
        e.y = 143,
        e.elementsContent = [this.head1_i(), this.head2_i(), this.head3_i(), this.head4_i(), this.head5_i(), this.head6_i()],
        e
    },
    n.head1_i = function() {
        var e = new eui.Group;
        return this.head1 = e,
        e.alpha = 1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.pass1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_2959_png",
        e.x = 3,
        e.y = 0,
        e
    },
    n.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.source = "hk_panel3_yihuode_png",
        e.x = 0,
        e.y = 40,
        e
    },
    n.head2_i = function() {
        var e = new eui.Group;
        return this.head2 = e,
        e.alpha = 1,
        e.x = 150,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.pass2_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_3036_png",
        e.x = 3,
        e.y = 0,
        e
    },
    n.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.source = "hk_panel3_yihuode_png",
        e.x = 0,
        e.y = 40,
        e
    },
    n.head3_i = function() {
        var e = new eui.Group;
        return this.head3 = e,
        e.alpha = 1,
        e.x = 0,
        e.y = 150,
        e.elementsContent = [this._Image4_i(), this.pass3_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_3200_png",
        e.x = 3,
        e.y = 0,
        e
    },
    n.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.source = "hk_panel3_yihuode_png",
        e.visible = !0,
        e.x = 0,
        e.y = 40,
        e
    },
    n.head4_i = function() {
        var e = new eui.Group;
        return this.head4 = e,
        e.alpha = 1,
        e.x = 150,
        e.y = 150,
        e.elementsContent = [this._Image5_i(), this.pass4_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_3223_png",
        e.x = 3,
        e.y = 0,
        e
    },
    n.pass4_i = function() {
        var e = new eui.Image;
        return this.pass4 = e,
        e.source = "hk_panel3_yihuode_png",
        e.x = 0,
        e.y = 40,
        e
    },
    n.head5_i = function() {
        var e = new eui.Group;
        return this.head5 = e,
        e.alpha = 1,
        e.x = 0,
        e.y = 300,
        e.elementsContent = [this._Image6_i(), this.pass5_i()],
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_3211_png",
        e.x = 3,
        e.y = 0,
        e
    },
    n.pass5_i = function() {
        var e = new eui.Image;
        return this.pass5 = e,
        e.source = "hk_panel3_yihuode_png",
        e.x = 0,
        e.y = 40,
        e
    },
    n.head6_i = function() {
        var e = new eui.Group;
        return this.head6 = e,
        e.alpha = 1,
        e.x = 150,
        e.y = 300,
        e.elementsContent = [this._Image7_i(), this.pass6_i()],
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_3174_png",
        e.x = 3,
        e.y = 0,
        e
    },
    n.pass6_i = function() {
        var e = new eui.Image;
        return this.pass6 = e,
        e.source = "hk_panel3_yihuode_png",
        e.x = 0,
        e.y = 40,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "hk_panel3_txtlabel_png",
        e.x = 355,
        e.y = 558,
        e
    },
    n.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.source = "hk_panel3_txtlabel_kb_png",
        e.x = 535,
        e.y = 558,
        e
    },
    n.infos_i = function() {
        var e = new eui.Group;
        return this.infos = e,
        e.x = 150,
        e.y = 427,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this.love1_i(), this.love2_i(), this.love3_i(), this._Image10_i(), this._Image11_i(), this._Label1_i(), this._Image12_i(), this.txt_condition_i()],
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_juxing_11_png",
        e.visible = !0,
        e.x = 99,
        e.y = 7,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_juxing_9_png",
        e.x = 11,
        e.y = 6,
        e
    },
    n.love1_i = function() {
        var e = new eui.Image;
        return this.love1 = e,
        e.source = "hk_panel3_xx-sx_png",
        e.visible = !0,
        e.x = 156,
        e.y = 0,
        e
    },
    n.love2_i = function() {
        var e = new eui.Image;
        return this.love2 = e,
        e.source = "hk_panel3_xx-sx_png",
        e.x = 196,
        e.y = 0,
        e
    },
    n.love3_i = function() {
        var e = new eui.Image;
        return this.love3 = e,
        e.source = "hk_panel3_xx-sx_png",
        e.x = 236,
        e.y = 0,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_juxing_10_png",
        e.x = 0,
        e.y = 48,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_juxing_8_png",
        e.x = 11,
        e.y = 46,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "认可条件：",
        e.textColor = 16776661,
        e.x = 20,
        e.y = 53,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_renkedu_png",
        e.x = 22,
        e.y = 7,
        e
    },
    n.txt_condition_i = function() {
        var e = new eui.Label;
        return this.txt_condition = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "最后一击伤害大于1000击败阿尔斯兰",
        e.textColor = 16775528,
        e.x = 101,
        e.y = 53,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel3_zu_114_png",
        e.x = 791,
        e.y = 91,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "认可目标",
        e.textColor = 16776661,
        e.x = 895,
        e.y = 98,
        e
    },
    n.up_i = function() {
        var e = new eui.Group;
        return this.up = e,
        e.x = 0,
        e.y = 537,
        e.elementsContent = [this._Image14_i(), this._Label3_i(), this.btnUp_i(), this.hasGet_i(), this.notGet_i()],
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_zu_5_png",
        e.x = 62,
        e.y = 17,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "王者传说关卡出战\n精灵伤害提高25%",
        e.textColor = 15569749,
        e.x = 106,
        e.y = 27,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "hk_panel1_sg_ds_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.hasGet_i = function() {
        var e = new eui.Image;
        return this.hasGet = e,
        e.source = "hk_panel1_yijihuo_png",
        e.x = 279,
        e.y = 17,
        e
    },
    n.notGet_i = function() {
        var e = new eui.Image;
        return this.notGet = e,
        e.source = "hk_panel1_wei_png",
        e.x = 279,
        e.y = 17,
        e
    },
    n.tims_i = function() {
        var e = new eui.Group;
        return this.tims = e,
        e.x = 897,
        e.y = 23,
        e.elementsContent = [this._Image15_i(), this.txtCoin2_i(), this.btnadd_i()],
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "hk_panel1_jx_20_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日挑战次数：00",
        e.textColor = 16514895,
        e.x = 19,
        e.y = 1,
        e
    },
    n.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "hk_panel1_btnadd_png",
        e.x = 178,
        e.y = 0,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hk_panel3_jlbb1_png",
        e.x = 0,
        e.y = 235,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hk_panel3_jlhf_png",
        e.x = 0,
        e.y = 326,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/UppopSkin.exml"] = window.holyKylin.UppopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnBack", "btnGet_1", "btnBuy_1", "hasGet_1", "btnKe", "ad1", "btnGet_2", "btnBuy_2", "hasGet_2", "btnTe", "ad2", "btnGet_3", "btnBuy_3", "hasGet_3", "btnWu", "ad3"],
        this.height = 453,
        this.width = 855,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnBack_i(), this.ad1_i(), this.ad2_i(), this.ad3_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hk_envolepop_jx_1_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hk_uppop_sgzf_png",
        e.x = 33,
        e.y = 13,
        e
    },
    n.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "hk_uppop_btnback_png",
        e.x = 808,
        e.y = 13,
        e
    },
    n.ad1_i = function() {
        var e = new eui.Group;
        return this.ad1 = e,
        e.x = 93,
        e.y = 110,
        e.elementsContent = [this._Image3_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this.btnGet_1_i(), this.btnBuy_1_i(), this.hasGet_1_i(), this.btnKe_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hk_uppop_1_png",
        e.x = -4,
        e.y = -34,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "专属刻印",
        e.textColor = 16772558,
        e.x = 43,
        e.y = 0,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "附赠麒麟祝福",
        e.textColor = 16777215,
        e.x = 32,
        e.y = 170,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "兽魂爆发关卡战胜\n进度额外增加10%",
        e.textColor = 15569749,
        e.x = 20,
        e.y = 206,
        e
    },
    n.btnGet_1_i = function() {
        var e = new eui.Image;
        return this.btnGet_1 = e,
        e.source = "hk_envolepop_btnGet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 264,
        e
    },
    n.btnBuy_1_i = function() {
        var e = new eui.Image;
        return this.btnBuy_1 = e,
        e.source = "hk_uppop_btnbuy_png",
        e.visible = !0,
        e.x = 0,
        e.y = 264,
        e
    },
    n.hasGet_1_i = function() {
        var e = new eui.Image;
        return this.hasGet_1 = e,
        e.source = "hk_envolepop_hasGet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 264,
        e
    },
    n.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.height = 75,
        e.source = "hk_uppop_btnke_png",
        e.width = 75,
        e.x = 53,
        e.y = 60,
        e
    },
    n.ad2_i = function() {
        var e = new eui.Group;
        return this.ad2 = e,
        e.x = 343,
        e.y = 110,
        e.elementsContent = [this._Image4_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this.btnGet_2_i(), this.btnBuy_2_i(), this.hasGet_2_i(), this.btnTe_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hk_uppop_1_png",
        e.x = -4,
        e.y = -34,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "专属特性",
        e.textColor = 16772558,
        e.x = 43,
        e.y = 0,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "附赠麒麟祝福",
        e.textColor = 16777215,
        e.x = 32,
        e.y = 170,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "王者传说关卡出战\n精灵伤害提高25%",
        e.textColor = 15569749,
        e.x = 20,
        e.y = 207,
        e
    },
    n.btnGet_2_i = function() {
        var e = new eui.Image;
        return this.btnGet_2 = e,
        e.source = "hk_envolepop_btnGet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 264,
        e
    },
    n.btnBuy_2_i = function() {
        var e = new eui.Image;
        return this.btnBuy_2 = e,
        e.source = "hk_uppop_btnbuy_png",
        e.visible = !0,
        e.x = 0,
        e.y = 264,
        e
    },
    n.hasGet_2_i = function() {
        var e = new eui.Image;
        return this.hasGet_2 = e,
        e.source = "hk_envolepop_hasGet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 264,
        e
    },
    n.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "hk_uppop_btnte_png",
        e.x = 53,
        e.y = 69,
        e
    },
    n.ad3_i = function() {
        var e = new eui.Group;
        return this.ad3 = e,
        e.x = 593,
        e.y = 109,
        e.elementsContent = [this._Image5_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this.btnGet_3_i(), this.btnBuy_3_i(), this.hasGet_3_i(), this.btnWu_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hk_uppop_1_png",
        e.x = -4,
        e.y = -34,
        e
    },
    n._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "第五技能",
        e.textColor = 16772558,
        e.x = 43,
        e.y = 0,
        e
    },
    n._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "附赠麒麟祝福",
        e.textColor = 16777215,
        e.x = 32,
        e.y = 171,
        e
    },
    n._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "英雄赞歌出战精灵\n受到伤害减少25%",
        e.textColor = 15569749,
        e.x = 20,
        e.y = 207,
        e
    },
    n.btnGet_3_i = function() {
        var e = new eui.Image;
        return this.btnGet_3 = e,
        e.source = "hk_envolepop_btnGet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 264,
        e
    },
    n.btnBuy_3_i = function() {
        var e = new eui.Image;
        return this.btnBuy_3 = e,
        e.source = "hk_uppop_btnbuy_png",
        e.x = 0,
        e.y = 265,
        e
    },
    n.hasGet_3_i = function() {
        var e = new eui.Image;
        return this.hasGet_3 = e,
        e.source = "hk_envolepop_hasGet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 264,
        e
    },
    n.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "hk_uppop_btnwu_png",
        e.x = 53,
        e.y = 63,
        e
    },
    t
} (eui.Skin);