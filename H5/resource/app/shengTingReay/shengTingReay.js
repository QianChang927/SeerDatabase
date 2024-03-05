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
shengTingReay; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = "ShengTingReayLevel3PanelSkin",
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            this.initOldPveBtnClose(0, this, "sheng_ting_reay_level3_panel_imgtitle_png", this.service.backToMainPanel, this.service),
            this.adaptLeftContent(this.btnPet),
            this.adaptLeftContent(this.btnCure),
            this.addEvent(),
            this.adaptRightContent(this.groupRight),
            this.ani = SpineUtil.createAnimate("puni")
        },
        n.prototype.addEvent = function() {
            var t = this;
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
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss(10090)
            },
            this),
            ImageButtonUtil.add(this.btnRefine,
            function() {
                0 == t.numTimes ? BubblerManager.getInstance().showText("今日剩余提炼次数不足！") : 0 == t.numHolyGuang && 0 == t.numHolyMang && 0 == t.numHolyXing ? BubblerManager.getInstance().showText("没有道具，无法提炼") : Alert.show("是否将三种道具全部提炼？",
                function() {
                    SocketConnection.sendByQueue(e.CMDConst.CMD1, [11, 2],
                    function() {
                        var n = t.service.getValue(e.AttrConst.forever_compound1);
                        t.service.updateSomeValues([e.AttrConst.forever_taskState, e.AttrConst.forever_compound1, e.AttrConst.forever_compound2, e.AttrConst.daily_holyTestRefineTime]).then(function() {
                            t.groupAni.addChild(t.ani);
                            var i = t.ani.play("animation");
                            i.waitNamedEvent("jindutiao").then(function(i) {
                                t.groupAni.removeChild(t.ani),
                                t.update();
                                var s = t.service.getValue(e.AttrConst.forever_compound1) - n;
                                s > 0 && BubblerManager.getInstance().showText("提炼成功，增加<font color= #ff0000>" + s + "</font>点圣灵之力！", !0)
                            })
                        })
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250848, 1,
                    function() {
                        SocketConnection.sendWithPromise(42343, [9, 3]).then(function() {
                            Alarm.show("恭喜你完成圣灵考验关卡，至尊获得圣霆·雷伊现仅需598钻！",
                            function() {
                                t.service.openPanel(e.PanelConst.final_test_panel),
                                EventManager.dispatchEventWith("shengTingReay.updateMainPanel")
                            })
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastFight,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250853, 1,
                    function() {
                        SocketConnection.sendWithPromise(42343, [11, 1]).then(function() {
                            t.service.updateValues().then(function() {
                                t.update(),
                                FightManager.isWin = !0,
                                t.backFromFight()
                            })
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250854, 1,
                    function() {
                        KTool.doExchange(10352, 1,
                        function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddPower,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1713672,
                        productID: 250852
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(250852, n,
                        function() {
                            SocketConnection.sendWithPromise(42343, [12, n]).then(function() {
                                t.updateValues()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this)
        },
        n.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        n.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        n.prototype.backFromFight = function() {
            var t = this;
            FightManager.isWin && this.service.updateValues().then(function() {
                var n = t.service.getValue(e.AttrConst.forever_compound3),
                i = {
                    num1: 255 & n,
                    num2: n >> 8 & 255,
                    num3: n >> 16 & 255
                };
                t.service.openPop(new e.HolyTestWinPop, !1, i),
                n = t.service.getValue(e.AttrConst.forever_compound2),
                t.numHolyGuang = 255 & n,
                t.numHolyMang = n >> 8 & 255,
                t.numHolyXing = n >> 16 & 255;
                var s = "",
                r = !1;
                0 == t.numHolyGuang && (s += "因为超过储存上限，<font color= #ff0000>圣灵之光</font>被清零！", r = !0),
                0 == t.numHolyMang && (r && (s += "；"), s += "因为超过储存上限，<font color= #ff0000>圣灵之芒</font>被清零！", r = !0),
                0 == t.numHolyXing && (r && (s += "；"), s += "因为超过储存上限，<font color= #ff0000>圣灵之星</font>被清零！"),
                s && BubblerManager.getInstance().showText(s, !0)
            })
        },
        n.prototype.update = function() {
            var t = this;
            if (this.service.getValue(e.AttrConst.forever_taskState) > 2 && this.parent) return void Alarm.show("恭喜你完成圣灵考验关卡，至尊获得圣霆·雷伊现仅需598钻！",
            function() {
                t.service.updateValues().then(function() {
                    t.service.openPanel(e.PanelConst.final_test_panel)
                })
            });
            this.numTimes = 3 - this.service.getValue(e.AttrConst.daily_holyTestRefineTime),
            this.txtTimes.text = this.numTimes + "",
            DisplayUtil.setEnabled(this.btnAddTimes, 0 == this.numTimes, this.numTimes > 0);
            var n = this.service.getValue(e.AttrConst.forever_compound1);
            this.txtProgress.text = n + "/100",
            this.progress.value = n;
            var i = this.service.getValue(e.AttrConst.forever_compound2);
            this.numHolyGuang = 255 & i,
            this.numHolyMang = i >> 8 & 255,
            this.numHolyXing = i >> 16 & 255,
            this.txtItem1.text = this.numHolyGuang + "/10",
            this.txtItem2.text = this.numHolyMang + "/10",
            this.txtItem3.text = this.numHolyXing + "/10",
            this.imgMax1.visible = this.numHolyGuang >= 10,
            this.imgMax2.visible = this.numHolyMang >= 10,
            this.imgMax3.visible = this.numHolyXing >= 10,
            this.setRing(1, this.numHolyGuang),
            this.setRing(2, this.numHolyMang),
            this.setRing(3, this.numHolyXing)
        },
        n.prototype.setRing = function(e, t) {
            var n = this["imgRing" + e];
            n.visible = t > 0;
            var i = new egret.Shape,
            s = i.graphics;
            s.lineStyle(20, void 0, void 0, void 0, void 0, egret.CapsStyle.NONE);
            var r = t / 5 * Math.PI;
            s.drawArc(n.width / 2, n.height / 2, n.width / 2 - 12, -Math.PI / 2, -Math.PI / 2 + r, !1),
            n.parent.addChild(i),
            i.y = 32,
            n.mask = i
        },
        n
    } (BasicPanel);
    e.HolyTestPanel = t,
    __reflect(t.prototype, "shengTingReay.HolyTestPanel")
} (shengTingReay || (shengTingReay = {}));
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
shengTingReay; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.service.setValues([e.AttrConst.forever_compound1, e.AttrConst.forever_compound2, e.AttrConst.forever_compound3, e.AttrConst.forever_getState, e.AttrConst.forever_taskState], [e.AttrConst.daily_finalTestFightTime, e.AttrConst.daily_finalTestWinState, e.AttrConst.daily_holyTestRefineTime, e.AttrConst.daily_thunderTrainingFightTime, e.AttrConst.daily_upFightTime]),
            n.init([{
                panelName: e.PanelConst.main_panel,
                isMain: !0
            },
            {
                panelName: e.PanelConst.self_breach_panel
            },
            {
                panelName: e.PanelConst.thunder_training_panel
            },
            {
                panelName: e.PanelConst.final_test_panel
            },
            {
                panelName: e.PanelConst.holy_test_panel
            },
            {
                panelName: e.PanelConst.up_panel
            }]),
            n
        }
        return __extends(n, t),
        n
    } (BasicMultPanelModule);
    e.ShengTingReay = t,
    __reflect(t.prototype, "shengTingReay.ShengTingReay")
} (shengTingReay || (shengTingReay = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
shengTingReay; !
function(e) {
    var t = function() {
        function e() {}
        return e.CMD1 = 42343,
        e.CMD2 = 43229,
        e
    } ();
    e.CMDConst = t,
    __reflect(t.prototype, "shengTingReay.CMDConst")
} (shengTingReay || (shengTingReay = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
shengTingReay; !
function(e) {
    var t = function() {
        function e() {}
        return e.holy_power = 1713672,
        e.sheng_ting_zhi_zhao = 1713673,
        e
    } ();
    e.ItemConst = t,
    __reflect(t.prototype, "shengTingReay.ItemConst")
} (shengTingReay || (shengTingReay = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
shengTingReay; !
function(e) {
    var t = function() {
        function e() {}
        return e.main_panel = "shengTingReay.MainPanel",
        e.self_breach_panel = "shengTingReay.SelfBreachPanel",
        e.thunder_training_panel = "shengTingReay.ThunderTrainingPanel",
        e.holy_test_panel = "shengTingReay.HolyTestPanel",
        e.final_test_panel = "shengTingReay.FinalTestPanel",
        e.up_panel = "shengTingReay.UpPanel",
        e
    } ();
    e.PanelConst = t,
    __reflect(t.prototype, "shengTingReay.PanelConst")
} (shengTingReay || (shengTingReay = {}));
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
shengTingReay; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = "ShengTingReayLevel4PanelSkin",
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            this.initOldPveBtnClose(0, this, "sheng_ting_reay_level4_panel_imgtitle_png", this.service.backToMainPanel, this.service),
            this.adaptLeftContent(this.btnPet),
            this.adaptLeftContent(this.btnCure),
            this.addEvent(),
            this.ani = SpineUtil.createAnimate("zhongjishilian")
        },
        n.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        n.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        n.prototype.backFromFight = function() {
            var t = this;
            this.service.updateValues().then(function() {
                if (t.service.getValue(e.AttrConst.forever_taskState) > 3 && t.parent) return void Alarm.show("恭喜你完成终极试炼关卡，快去领取圣霆·雷伊吧！",
                function() {
                    t.service.backToMainPanel()
                });
                t.numCurDifficulty = 100 - t.service.getValue(e.AttrConst.forever_compound1);
                var n = t.numOldDifficulty - t.numCurDifficulty;
                if (n > 2) console.warn("当前实力变化异常！");
                else if (n > 0) {
                    BubblerManager.getInstance().showText("恭喜你，圣霆•雷伊实力已被削弱" + n + "%"),
                    t.groupAni.addChild(t.ani);
                    var i = ["qinglong", "zhuque", "baihu", "xaunwu"][t.lastBossIndex - 1],
                    s = t.ani.play(i, 1);
                    s.waitPlayEnd().then(function() {
                        t.groupAni.removeChild(t.ani)
                    })
                }
            })
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250849, 1,
                    function() {
                        SocketConnection.sendWithPromise(42343, [9, 4]).then(function() {
                            Alarm.show("恭喜你完成终极试炼关卡，快去领取圣霆·雷伊吧！",
                            function() {
                                e.service.backToMainPanel(),
                                EventManager.dispatchEventWith("shengTingReay.updateMainPanel", !0)
                            })
                        })
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250855, 1,
                    function() {
                        KTool.doExchange(10353, 1,
                        function() {
                            e.updateValues()
                        })
                    },
                    e)
                },
                e)
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(n["btnFight" + t],
                function() {
                    e.numTimes <= 0 ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : (e.numOldDifficulty = e.numCurDifficulty, e.lastBossIndex = t, FightManager.fightNoMapBoss(10090 + t))
                },
                n)
            },
            n = this, i = 1; 4 >= i; i++) t(i);
            ImageButtonUtil.add(this.btnFight,
            function() {
                if (e.numTimes <= 0) BubblerManager.getInstance().showText("今日剩余挑战次数不足！");
                else {
                    var t = void 0;
                    t = e.numCurDifficulty >= 70 ? 10095 : e.numCurDifficulty >= 30 ? 10096 : e.numCurDifficulty >= 10 ? 10097 : 10098,
                    e.numOldDifficulty = e.numCurDifficulty,
                    FightManager.fightNoMapBoss(t)
                }
            },
            this)
        },
        n.prototype.update = function() {
            this.numTimes = 5 - this.service.getValue(e.AttrConst.daily_finalTestFightTime),
            this.txtTimes.text = this.numTimes + "",
            DisplayUtil.setEnabled(this.btnAddTimes, 0 == this.numTimes, this.numTimes > 0),
            this.numCurDifficulty = 100 - this.service.getValue(e.AttrConst.forever_compound1),
            this.txtProgress.text = this.numCurDifficulty + "%",
            this.progress.value = this.numCurDifficulty,
            this.groupTxtProgress.x = 80 + 3.2 * this.numCurDifficulty
        },
        n
    } (BasicPanel);
    e.FinalTestPanel = t,
    __reflect(t.prototype, "shengTingReay.FinalTestPanel")
} (shengTingReay || (shengTingReay = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
shengTingReay; !
function(e) {
    var t = function() {
        function e() {}
        return e.daily_thunderTrainingFightTime = 18282,
        e.daily_holyTestRefineTime = 18283,
        e.daily_finalTestFightTime = 18284,
        e.daily_upFightTime = 18285,
        e.daily_finalTestWinState = 18286,
        e.forever_getState = 101244,
        e.forever_taskState = 101245,
        e.forever_compound1 = 101246,
        e.forever_compound2 = 101247,
        e.forever_compound3 = 101248,
        e
    } ();
    e.AttrConst = t,
    __reflect(t.prototype, "shengTingReay.AttrConst")
} (shengTingReay || (shengTingReay = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(s, r) {
        function a(e) {
            try {
                _(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function o(e) {
            try {
                _(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            e.done ? s(e.value) : new n(function(t) {
                t(e.value)
            }).then(a, o)
        }
        _((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (s) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (s = 1, r && (a = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(r, n[1])).done) return a;
            switch (r = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
                break;
            case 4:
                return _.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                _.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    _ = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    _.label = n[1];
                    break
                }
                if (6 === n[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = n;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(n);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            n = t.call(e, _)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            s = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var s, r, a, o, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
shengTingReay; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.canDown = !0,
            e.new_monster_level_id = 36,
            e.skinName = "ShengTingReayMainPanelSkin",
            e
        }
        return __extends(n, t),
        n.prototype.beforeAdd = function() {
            StatLogger.log("20211015版本系统功能", "圣霆·雷伊关卡", "进入圣霆·雷伊关卡面板")
        },
        n.prototype.childrenCreated = function() {
            var e = this;
            this.initOldPveBtnClose(67, this, "sheng_ting_reay_main_panel_imgtitle_png", this.service.closeModule, this.service),
            this.addEvent(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "sheng_ting_reay_main_panel_btncollected_png": "sheng_ting_reay_main_panel_btncollect_png"
            })
        },
        n.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener("shengTingReay.updateMainPanel", this.updateValues, this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                t.service.showPetInfo(3406)
            },
            this),
            ImageButtonUtil.add(this.btnSuperGet,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250842 + t.numTaskStage - 1, 1,
                    function() {
                        SocketConnection.sendWithPromise(42343, [8, 1]).then(function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge1,
            function() {
                StatLogger.log("20211015版本系统功能", "圣霆·雷伊关卡", "进入第一关自我突破关卡面板"),
                t.service.openPanel(e.PanelConst.self_breach_panel)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge2,
            function() {
                StatLogger.log("20211015版本系统功能", "圣霆·雷伊关卡", "进入第二关雷电训练关卡面板"),
                t.service.openPanel(e.PanelConst.thunder_training_panel)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge3,
            function() {
                StatLogger.log("20211015版本系统功能", "圣霆·雷伊关卡", "进入第三关圣灵考验关卡面板"),
                t.service.openPanel(e.PanelConst.holy_test_panel)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge4,
            function() {
                StatLogger.log("20211015版本系统功能", "圣霆·雷伊关卡", "进入第四关终极试炼关卡面板"),
                t.service.openPanel(e.PanelConst.final_test_panel)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20211015版本系统功能", "圣霆·雷伊关卡", "进入能力提升面板"),
                t.service.openPanel(e.PanelConst.up_panel)
            },
            this),
            ImageButtonUtil.add(this.btnBest,
            function() {
                StatLogger.log("20211015版本系统功能", "圣霆·雷伊关卡", "进入优惠极品面板"),
                t.service.openPreferentialBestPanel(1, 250860, 43229, 29)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(e.CMDConst.CMD1, [8, 2],
                function() {
                    StatLogger.log("20211015版本系统功能", "圣霆·雷伊关卡", "点击领取圣霆雷伊"),
                    t.service.updateSomeValues([e.AttrConst.forever_getState]).then(function() {
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this)
        },
        n.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "sheng_ting_reay_main_panel_btncollected_png": "sheng_ting_reay_main_panel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.update = function() {
            this.numTaskStage = this.service.getValue(e.AttrConst.forever_taskState) + 1;
            for (var t = this.service.getValue(e.AttrConst.forever_getState), n = 1 == KTool.getBit(t, 1), i = 1 == KTool.getBit(t, 2), s = 1 == KTool.getBit(t, 3), r = 1; 4 >= r; r++) this["imgFinish" + r].visible = r < this.numTaskStage,
            this["btnChallenge" + r].touchEnabled = r == this.numTaskStage,
            this["btnChallenge" + r].source = r <= this.numTaskStage ? "sheng_ting_reay_main_panel_btnyellow_png": "sheng_ting_reay_main_panel_btnblue_png";
            this.btnSuperGet.visible = this.numTaskStage < 5,
            this.btnGet.visible = 5 == this.numTaskStage && !n,
            this.btnUp.visible = this.btnBest.visible = this.imgHasPet.visible = n,
            this.imgHasUp.visible = i,
            this.imgHasBest.visible = s,
            DisplayUtil.setEnabled(this.btnUp, !i, !1),
            DisplayUtil.setEnabled(this.btnBest, !s, !1)
        },
        n
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "shengTingReay.MainPanel")
} (shengTingReay || (shengTingReay = {}));
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
shengTingReay; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = "ShengTingReayLevel1PanelSkin",
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            this.initOldPveBtnClose(0, this, "sheng_ting_reay_level1_panel_imgtitle_png", this.service.backToMainPanel, this.service),
            this.addEvent()
        },
        n.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250846, 1,
                    function() {
                        SocketConnection.sendWithPromise(42343, [9, 1]).then(function() {
                            Alarm.show("恭喜你完成自我突破关卡，至尊获得圣霆·雷伊现仅需948钻！",
                            function() {
                                t.service.openPanel(e.PanelConst.thunder_training_panel),
                                EventManager.dispatchEventWith("shengTingReay.updateMainPanel")
                            })
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [587, 0, 0, 0, 0, 0])
            },
            this)
        },
        n.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        n.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        n.prototype.backFromFight = function() {
            var t = this;
            this.service.updateSomeValues([e.AttrConst.forever_taskState]).then(function() {
                t.service.getValue(e.AttrConst.forever_taskState) > 0 && t.parent && Alarm.show("恭喜你完成自我突破关卡，至尊获得圣霆·雷伊现仅需948钻！",
                function() {
                    t.service.openPanel(e.PanelConst.thunder_training_panel)
                })
            })
        },
        n
    } (BasicPanel);
    e.SelfBreachPanel = t,
    __reflect(t.prototype, "shengTingReay.SelfBreachPanel")
} (shengTingReay || (shengTingReay = {}));
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
shengTingReay; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = "ShengTingReayLevel2PanelSkin",
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            this.initOldPveBtnClose(0, this, "sheng_ting_reay_level2_panel_imgtitle_png", this.service.backToMainPanel, this.service),
            this.adaptLeftContent(this.btnPet),
            this.adaptLeftContent(this.btnCure),
            this.addEvent(),
            this.service.updateValues().then(function() {
                e.updateProgress()
            })
        },
        n.prototype.addEvent = function() {
            var t = this;
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
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250850, 1,
                    function() {
                        KTool.doExchange(10351, 1,
                        function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250847, 1,
                    function() {
                        SocketConnection.sendWithPromise(42343, [9, 2]).then(function() {
                            Alarm.show("恭喜你完成雷电训练关卡，至尊获得圣霆·雷伊现仅需798钻！",
                            function() {
                                t.service.updateValues().then(function() {
                                    t.service.openPanel(e.PanelConst.holy_test_panel),
                                    EventManager.dispatchEventWith("shengTingReay.updateMainPanel", !0)
                                })
                            })
                        })
                    },
                    t)
                },
                t)
            },
            this);
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnFastFight" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(250851, 1,
                        function() {
                            SocketConnection.sendWithPromise(42343, [10, n]).then(function() {
                                t.updateValues(),
                                t.backFromFight()
                            })
                        },
                        t)
                    },
                    t)
                },
                i),
                ImageButtonUtil.add(i["btnFight" + n],
                function() {
                    t.service.getValue(e.AttrConst.daily_thunderTrainingFightTime) >= 6 ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : FightManager.fightNoMapBoss(10086 + n)
                },
                i)
            },
            i = this, s = 1; 3 >= s; s++) n(s)
        },
        n.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        n.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        n.prototype.backFromFight = function() {
            var t = this;
            this.service.updateValues().then(function() {
                t.service.getValue(e.AttrConst.forever_taskState) > 1 && t.parent && Alarm.show("恭喜你完成雷电训练关卡，至尊获得圣霆·雷伊现仅需798钻！",
                function() {
                    t.service.openPanel(e.PanelConst.holy_test_panel)
                }),
                t.updateProgress()
            })
        },
        n.prototype.update = function() {
            var t = 6 - this.service.getValue(e.AttrConst.daily_thunderTrainingFightTime);
            this.txtTimes.text = t + "",
            DisplayUtil.setEnabled(this.btnAddTimes, 0 == t, t > 0)
        },
        n.prototype.updateProgress = function() {
            var t = this.service.getValue(e.AttrConst.forever_compound1),
            n = this.service.getValue(e.AttrConst.forever_compound2),
            i = this.service.getValue(e.AttrConst.forever_compound3);
            this.txtBoss1.text = t + "/2000",
            this.txtBoss2.text = n + "/3000",
            this.txtBoss3.text = i + "/4000",
            this.progress1.value = t / 20,
            this.progress2.value = n / 30,
            this.progress3.value = i / 40,
            DisplayUtil.setEnabled(this.btnFight1, 2e3 > t, !1),
            DisplayUtil.setEnabled(this.btnFight2, 3e3 > n, !1),
            DisplayUtil.setEnabled(this.btnFight3, 4e3 > i, !1),
            DisplayUtil.setEnabled(this.btnFastFight1, 2e3 > t, !1),
            DisplayUtil.setEnabled(this.btnFastFight2, 3e3 > n, !1),
            DisplayUtil.setEnabled(this.btnFastFight3, 4e3 > i, !1),
            this.imgFinish1.visible = t >= 2e3,
            this.imgFinish2.visible = n >= 3e3,
            this.imgFinish3.visible = i >= 4e3
        },
        n
    } (BasicPanel);
    e.ThunderTrainingPanel = t,
    __reflect(t.prototype, "shengTingReay.ThunderTrainingPanel")
} (shengTingReay || (shengTingReay = {}));
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
shengTingReay; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.isInActivity = !1,
            e.skinName = "ShengTingReayUpPanelSkin",
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            this.initOldPveBtnClose(0, this, "sheng_ting_reay_up_panel_imgtitle_png", this.service.backToMainPanel, this.service),
            this.adaptLeftContent(this.btnPet),
            this.adaptLeftContent(this.btnCure),
            this.service.registerItems(e.ItemConst.sheng_ting_zhi_zhao, this.updateItem, this),
            this.addEvent()
        },
        n.prototype.updateItem = function() {
            var t = ItemManager.getNumByID(e.ItemConst.sheng_ting_zhi_zhao);
            this.txtItem.textFlow = (new egret.HtmlTextParser).parse("<font color= #" + (t >= 30 ? "00ff00": "ff0000") + ">" + t + "</font>/30")
        },
        n.prototype.destroy = function() {
            this.service.unregisterItems(this),
            t.prototype.destroy.call(this)
        },
        n.prototype.addEvent = function() {
            var t = this;
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
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250859, 1,
                    function() {
                        KTool.doExchange(10354, 1,
                        function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1713673,
                        productID: 250858
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(250858, n,
                        function() {
                            KTool.doExchange(10355, n,
                            function() {
                                t.updateValues()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                PayManager.doPayFunc(function() {
                    if (PetManager.isDefaultPet(3406)) {
                        var e = t.isInActivity ? 250857 : 250856;
                        KTool.buyProductByCallback(e, 1,
                        function() {
                            SocketConnection.sendWithPromise(42343, [13, 2]).then(function() {
                                t.updateValues()
                            })
                        },
                        t)
                    } else Alarm.show("请将圣霆·雷伊设置为背包首发！",
                    function() {
                        ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.imgMark,
            function() {
                t.service.showMarkInfo(40979)
            },
            this),
            ImageButtonUtil.add(this.imgSkill,
            function() {
                t.service.showSkillInfo(30949)
            },
            this),
            ImageButtonUtil.add(this.imgEffect,
            function() {
                t.service.showPetEff(3406)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                ItemManager.getNumByID(e.ItemConst.sheng_ting_zhi_zhao) < 30 ? BubblerManager.getInstance().showText("你拥有的圣霆之兆数量不足！") : PetManager.isDefaultPet(3406) ? SocketConnection.sendByQueue(e.CMDConst.CMD1, [13, 1],
                function() {
                    t.service.updateSomeValues([e.AttrConst.forever_getState]).then(function() {
                        t.update()
                    })
                }) : Alarm.show("请将圣霆·雷伊设置为背包首发！",
                function() {
                    ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                t.numTimes <= 0 ? BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : FightManager.fightNoMapBoss(10099)
            },
            this)
        },
        n.prototype.update = function() {
            var t = this,
            n = 1 == KTool.getBit(this.service.getValue(e.AttrConst.forever_getState), 2);
            return n && this.parent ? void Alarm.show("恭喜你完成能力提升",
            function() {
                t.service.backToMainPanel()
            }) : (this.numTimes = 5 - this.service.getValue(e.AttrConst.daily_upFightTime), this.txtTimes.text = this.numTimes + "", void DisplayUtil.setEnabled(this.btnAddTimes, 0 == this.numTimes, this.numTimes > 0))
        },
        n
    } (BasicPanel);
    e.UpPanel = t,
    __reflect(t.prototype, "shengTingReay.UpPanel")
} (shengTingReay || (shengTingReay = {}));
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
shengTingReay; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "ShengTingReayAwardPopSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnOK, this.hide, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        t.prototype._parseData = function() {
            this.num1 = this._data.num1,
            this.num2 = this._data.num2,
            this.num3 = this._data.num3
        },
        t.prototype._upDateView = function() {
            this.txt1.text = this.num1 + "",
            this.txt2.text = this.num2 + "",
            this.txt3.text = this.num3 + ""
        },
        t
    } (PopView);
    e.HolyTestWinPop = t,
    __reflect(t.prototype, "shengTingReay.HolyTestWinPop")
} (shengTingReay || (shengTingReay = {}));
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
generateEUI.paths["resource/eui_skins/ShengTingReayAwardPopSkin.exml"] = window.ShengTingReayAwardPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt1", "txt2", "txt3", "btnClose", "btnOK"],
        this.height = 379,
        this.width = 597,
        this.elementsContent = [this._Image1_i(), this.txt1_i(), this.txt2_i(), this.txt3_i(), this.btnClose_i(), this.btnOK_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_award_pop_imgbg_png",
        e.x = 0,
        e.y = 19,
        e
    },
    n.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "2",
        e.textColor = 16773283,
        e.x = 123,
        e.y = 270,
        e
    },
    n.txt2_i = function() {
        var e = new eui.Label;
        return this.txt2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "2",
        e.textColor = 16773283,
        e.x = 283,
        e.y = 270,
        e
    },
    n.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "3",
        e.textColor = 16773283,
        e.x = 441,
        e.y = 270,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "sheng_ting_reay_award_pop_btnclose_png",
        e.x = 543,
        e.y = 0,
        e
    },
    n.btnOK_i = function() {
        var e = new eui.Image;
        return this.btnOK = e,
        e.source = "sheng_ting_reay_award_pop_btnok_png",
        e.x = 225,
        e.y = 310,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ShengTingReayBestPopSkin.exml"] = window.ShengTingReayPreferentialBestPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnAddDiamond", "btnNature", "btnStudy", "btnBuy", "btnClose", "txtRecommend2", "txtRecommend1", "txtNature", "txtDiamond"],
        this.height = 608,
        this.width = 985,
        this.elementsContent = [this._Image1_i(), this.btnAddDiamond_i(), this.btnNature_i(), this.btnStudy_i(), this.btnBuy_i(), this.btnClose_i(), this.txtRecommend2_i(), this.txtRecommend1_i(), this.txtNature_i(), this.txtDiamond_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_best_pop_imgbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnAddDiamond_i = function() {
        var e = new eui.Image;
        return this.btnAddDiamond = e,
        e.source = "sheng_ting_reay_best_pop_btnadddiamond_png",
        e.x = 539,
        e.y = 513,
        e
    },
    n.btnNature_i = function() {
        var e = new eui.Image;
        return this.btnNature = e,
        e.source = "sheng_ting_reay_best_pop_btnnature_png",
        e.x = 882,
        e.y = 307,
        e
    },
    n.btnStudy_i = function() {
        var e = new eui.Image;
        return this.btnStudy = e,
        e.source = "sheng_ting_reay_best_pop_btnnature_png",
        e.x = 882,
        e.y = 190,
        e
    },
    n.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "sheng_ting_reay_best_pop_btnbuy_png",
        e.x = 366,
        e.y = 545,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "sheng_ting_reay_best_pop_btnclose_png",
        e.x = 951,
        e.y = 11,
        e
    },
    n.txtRecommend2_i = function() {
        var e = new eui.Label;
        return this.txtRecommend2 = e,
        e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "速度 255",
        e.textColor = 16774500,
        e.x = 769,
        e.y = 243,
        e
    },
    n.txtRecommend1_i = function() {
        var e = new eui.Label;
        return this.txtRecommend1 = e,
        e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "攻击 255",
        e.textColor = 16774500,
        e.x = 769,
        e.y = 226,
        e
    },
    n.txtNature_i = function() {
        var e = new eui.Label;
        return this.txtNature = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "固执",
        e.textColor = 16774500,
        e.x = 771,
        e.y = 342,
        e
    },
    n.txtDiamond_i = function() {
        var e = new eui.Label;
        return this.txtDiamond = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "2218",
        e.textColor = 16774499,
        e.x = 468,
        e.y = 517,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ShengTingReayLevel1PanelSkin.exml"] = window.ShengTingReayLevel1PanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnFight", "btnOneKey"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.btnOneKey_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "sheng_ting_reay_level1_panel_bg_jpg",
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnFight_i(), this._Label1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level1_panel_img_png",
        e.x = 510,
        e.y = 0,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level2_panel_imgreay_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "sheng_ting_reay_level2_panel_btnfight1_png",
        e.x = 819,
        e.y = 536,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.stroke = 1,
        e.strokeColor = 3153166,
        e.text = "使用圣霆•雷伊击败三种形态雷伊组成的挑战即可通过本关！",
        e.textColor = 16768358,
        e.x = 364,
        e.y = 42,
        e
    },
    n.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.right = 60,
        e.source = "sheng_ting_reay_level1_panel_btnonekey_png",
        e.y = 537,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ShengTingReayLevel2PanelSkin.exml"] = window.ShengTingReayLevel2PanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtTop", "btnPet", "btnCure", "progress1", "txtBoss1", "btnFight1", "btnFastFight1", "imgFinish1", "progress2", "txtBoss2", "btnFight2", "btnFastFight2", "imgFinish2", "progress3", "txtBoss3", "btnFight3", "btnFastFight3", "imgFinish3", "txtTimes", "btnAddTimes", "btnOneKey"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this.txtTop_i(), this._Group1_i(), this._Group6_i(), this.btnOneKey_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "sheng_ting_reay_level2_panel_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "sheng_ting_reay_level2_panel_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "sheng_ting_reay_level2_panel_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "sheng_ting_reay_level1_panel_bg_jpg",
        e.y = 0,
        e
    },
    r.txtTop_i = function() {
        var e = new eui.Label;
        return this.txtTop = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.stroke = 1,
        e.strokeColor = 3153166,
        e.text = "对3个电系强者均造成足够的累积伤害即可通过关卡",
        e.textColor = 16773283,
        e.y = 43,
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 12,
        e.y = 17,
        e.elementsContent = [this._Image2_i(), this.btnPet_i(), this.btnCure_i()],
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level2_panel_imgreay_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "sheng_ting_reay_level2_panel_btnpet_png",
        e.y = 362,
        e
    },
    r.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "sheng_ting_reay_level2_panel_btncure_png",
        e.y = 452,
        e
    },
    r._Group6_i = function() {
        var e = new eui.Group;
        return e.right = 92,
        e.y = 102,
        e.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()],
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.progress1_i(), this._Image3_i(), this.txtBoss1_i(), this.btnFight1_i(), this.btnFastFight1_i(), this.imgFinish1_i()],
        e
    },
    r.progress1_i = function() {
        var e = new eui.ProgressBar;
        return this.progress1 = e,
        e.x = 18,
        e.skinName = n,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level2_panel_imgboss1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.txtBoss1_i = function() {
        var e = new eui.Label;
        return this.txtBoss1 = e,
        e.fontFamily = "MFShangHei",
        e.right = 10,
        e.size = 30,
        e.text = "XXXX/2000",
        e.textColor = 16764731,
        e.y = 9,
        e
    },
    r.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "sheng_ting_reay_level2_panel_btnfight1_png",
        e.x = 372,
        e.y = 66,
        e
    },
    r.btnFastFight1_i = function() {
        var e = new eui.Image;
        return this.btnFastFight1 = e,
        e.source = "sheng_ting_reay_level2_panel_btnfastfight1_png",
        e.x = 220,
        e.y = 66,
        e
    },
    r.imgFinish1_i = function() {
        var e = new eui.Image;
        return this.imgFinish1 = e,
        e.source = "sheng_ting_reay_level2_panel_imgfinish1_png",
        e.visible = !1,
        e.x = 7,
        e.y = 0,
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.y = 147,
        e.elementsContent = [this.progress2_i(), this._Image4_i(), this.txtBoss2_i(), this.btnFight2_i(), this.btnFastFight2_i(), this.imgFinish2_i()],
        e
    },
    r.progress2_i = function() {
        var e = new eui.ProgressBar;
        return this.progress2 = e,
        e.x = 18,
        e.skinName = i,
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level2_panel_imgboss2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.txtBoss2_i = function() {
        var e = new eui.Label;
        return this.txtBoss2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 10,
        e.size = 30,
        e.text = "XXXX/2000",
        e.textColor = 16764731,
        e.y = 9,
        e
    },
    r.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "sheng_ting_reay_level2_panel_btnfight1_png",
        e.x = 372,
        e.y = 66,
        e
    },
    r.btnFastFight2_i = function() {
        var e = new eui.Image;
        return this.btnFastFight2 = e,
        e.source = "sheng_ting_reay_level2_panel_btnfastfight1_png",
        e.x = 220,
        e.y = 66,
        e
    },
    r.imgFinish2_i = function() {
        var e = new eui.Image;
        return this.imgFinish2 = e,
        e.source = "sheng_ting_reay_level2_panel_imgfinish1_png",
        e.visible = !1,
        e.x = 7,
        e.y = 0,
        e
    },
    r._Group4_i = function() {
        var e = new eui.Group;
        return e.y = 292,
        e.elementsContent = [this.progress3_i(), this._Image5_i(), this.txtBoss3_i(), this.btnFight3_i(), this.btnFastFight3_i(), this.imgFinish3_i()],
        e
    },
    r.progress3_i = function() {
        var e = new eui.ProgressBar;
        return this.progress3 = e,
        e.x = 18,
        e.skinName = s,
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level2_panel_imgboss3_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.txtBoss3_i = function() {
        var e = new eui.Label;
        return this.txtBoss3 = e,
        e.fontFamily = "MFShangHei",
        e.right = 10,
        e.size = 30,
        e.text = "XXXX/2000",
        e.textColor = 16764731,
        e.y = 9,
        e
    },
    r.btnFight3_i = function() {
        var e = new eui.Image;
        return this.btnFight3 = e,
        e.source = "sheng_ting_reay_level2_panel_btnfight1_png",
        e.x = 372,
        e.y = 66,
        e
    },
    r.btnFastFight3_i = function() {
        var e = new eui.Image;
        return this.btnFastFight3 = e,
        e.source = "sheng_ting_reay_level2_panel_btnfastfight1_png",
        e.x = 220,
        e.y = 66,
        e
    },
    r.imgFinish3_i = function() {
        var e = new eui.Image;
        return this.imgFinish3 = e,
        e.source = "sheng_ting_reay_level2_panel_imgfinish1_png",
        e.visible = !1,
        e.width = 520,
        e.x = 3,
        e.y = 0,
        e
    },
    r._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 16,
        e.y = 463,
        e.elementsContent = [this._Label1_i(), this.txtTimes_i(), this.btnAddTimes_i()],
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "今日剩余挑战次数：",
        e.textColor = 7984127,
        e.x = 0,
        e.y = 5,
        e
    },
    r.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "6",
        e.textColor = 16773260,
        e.x = 183,
        e.y = 5,
        e
    },
    r.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.source = "sheng_ting_reay_level2_panel_btnaddtimes_png",
        e.x = 216,
        e.y = 0,
        e
    },
    r.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.right = 60,
        e.source = "sheng_ting_reay_level1_panel_btnonekey_png",
        e.y = 537,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ShengTingReayLevel3PanelSkin.exml"] = window.ShengTingReayLevel3PanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtTop", "btnFight", "btnFastFight", "btnPet", "btnCure", "btnRefine", "txtTimes", "btnAddTimes", "imgItem1", "txtItem1", "imgRing1", "imgMax1", "imgItem2", "txtItem2", "imgRing2", "imgMax2", "imgItem3", "txtItem3", "imgRing3", "imgMax3", "progress", "btnAddPower", "txtProgress", "groupAni", "groupRight", "btnOneKey"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this.txtTop_i(), this._Group1_i(), this.groupRight_i(), this.btnOneKey_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "sheng_ting_reay_level3_panel_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "sheng_ting_reay_level1_panel_bg_jpg",
        e.y = 0,
        e
    },
    i.txtTop_i = function() {
        var e = new eui.Image;
        return this.txtTop = e,
        e.horizontalCenter = 0,
        e.source = "sheng_ting_reay_level3_panel_txttop_png",
        e.y = 45,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 12,
        e.y = 83,
        e.elementsContent = [this._Image2_i(), this.btnFight_i(), this.btnFastFight_i(), this.btnPet_i(), this.btnCure_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level3_panel_imgpuni_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "sheng_ting_reay_level2_panel_btnfight1_png",
        e.x = 326,
        e.y = 473,
        e
    },
    i.btnFastFight_i = function() {
        var e = new eui.Image;
        return this.btnFastFight = e,
        e.source = "sheng_ting_reay_level3_panel_btnfastfgiht_png",
        e.x = 155,
        e.y = 473,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "sheng_ting_reay_level2_panel_btnpet_png",
        e.y = 296,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "sheng_ting_reay_level2_panel_btncure_png",
        e.y = 386,
        e
    },
    i.groupRight_i = function() {
        var e = new eui.Group;
        return this.groupRight = e,
        e.right = 30,
        e.visible = !0,
        e.width = 603,
        e.y = 136,
        e.elementsContent = [this._Image3_i(), this.btnRefine_i(), this._Group2_i(), this._Group6_i(), this._Image4_i(), this.progress_i(), this.btnAddPower_i(), this.txtProgress_i(), this.groupAni_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level3_panel_imgitembg_png",
        e.width = 602,
        e.x = 0,
        e.y = 76,
        e
    },
    i.btnRefine_i = function() {
        var e = new eui.Image;
        return this.btnRefine = e,
        e.source = "sheng_ting_reay_level3_panel_btnrefine_png",
        e.x = 226,
        e.y = 418,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 178,
        e.y = 359,
        e.elementsContent = [this._Label1_i(), this.txtTimes_i(), this.btnAddTimes_i()],
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "今日剩余提炼次数：",
        e.textColor = 8114943,
        e.x = 0,
        e.y = 5,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "6",
        e.textColor = 16773260,
        e.x = 185,
        e.y = 2,
        e
    },
    i.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.source = "sheng_ting_reay_level2_panel_btnaddtimes_png",
        e.x = 215,
        e.y = 0,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 97,
        e.elementsContent = [this._Group3_i(), this._Group4_i(), this._Group5_i()],
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imgItem1_i(), this.txtItem1_i(), this.imgRing1_i(), this.imgMax1_i()],
        e
    },
    i.imgItem1_i = function() {
        var e = new eui.Image;
        return this.imgItem1 = e,
        e.source = "sheng_ting_reay_level3_panel_imgitem1_png",
        e.x = 30,
        e.y = 0,
        e
    },
    i.txtItem1_i = function() {
        var e = new eui.Label;
        return this.txtItem1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 24,
        e.text = "XX/10",
        e.textColor = 16773283,
        e.y = 168,
        e
    },
    i.imgRing1_i = function() {
        var e = new eui.Image;
        return this.imgRing1 = e,
        e.source = "sheng_ting_reay_level3_panel_imgringprogress_png",
        e.y = 32,
        e
    },
    i.imgMax1_i = function() {
        var e = new eui.Image;
        return this.imgMax1 = e,
        e.source = "sheng_ting_reay_level3_panel_imgmax1_png",
        e.x = 0,
        e.y = 102,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 206,
        e.y = 0,
        e.elementsContent = [this.imgItem2_i(), this.txtItem2_i(), this.imgRing2_i(), this.imgMax2_i()],
        e
    },
    i.imgItem2_i = function() {
        var e = new eui.Image;
        return this.imgItem2 = e,
        e.source = "sheng_ting_reay_level3_panel_imgitem2_png",
        e.x = 30,
        e.y = 0,
        e
    },
    i.txtItem2_i = function() {
        var e = new eui.Label;
        return this.txtItem2 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 24,
        e.text = "XX/10",
        e.textColor = 16773283,
        e.y = 169,
        e
    },
    i.imgRing2_i = function() {
        var e = new eui.Image;
        return this.imgRing2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "sheng_ting_reay_level3_panel_imgringprogress_png",
        e.y = 32,
        e
    },
    i.imgMax2_i = function() {
        var e = new eui.Image;
        return this.imgMax2 = e,
        e.source = "sheng_ting_reay_level3_panel_imgmax2_png",
        e.x = 0,
        e.y = 102,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 412,
        e.y = 0,
        e.elementsContent = [this.imgItem3_i(), this.txtItem3_i(), this.imgRing3_i(), this.imgMax3_i()],
        e
    },
    i.imgItem3_i = function() {
        var e = new eui.Image;
        return this.imgItem3 = e,
        e.source = "sheng_ting_reay_level3_panel_imgitem3_png",
        e.x = 30,
        e.y = 0,
        e
    },
    i.txtItem3_i = function() {
        var e = new eui.Label;
        return this.txtItem3 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 24,
        e.text = "XX/10",
        e.textColor = 16773283,
        e.y = 169,
        e
    },
    i.imgRing3_i = function() {
        var e = new eui.Image;
        return this.imgRing3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "sheng_ting_reay_level3_panel_imgringprogress_png",
        e.y = 32,
        e
    },
    i.imgMax3_i = function() {
        var e = new eui.Image;
        return this.imgMax3 = e,
        e.source = "sheng_ting_reay_level3_panel_imgmax3_png",
        e.x = 0,
        e.y = 102,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level3_panel_imgprogressbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.progress_i = function() {
        var e = new eui.ProgressBar;
        return this.progress = e,
        e.height = 10,
        e.width = 568,
        e.x = 20,
        e.y = 54,
        e.skinName = n,
        e
    },
    i.btnAddPower_i = function() {
        var e = new eui.Image;
        return this.btnAddPower = e,
        e.source = "sheng_ting_reay_level2_panel_btnaddtimes_png",
        e.x = 153,
        e.y = 9,
        e
    },
    i.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 30,
        e.stroke = 1,
        e.strokeColor = 16764987,
        e.text = "XX/90",
        e.textColor = 0,
        e.x = 507,
        e.y = 7,
        e
    },
    i.groupAni_i = function() {
        var e = new eui.Group;
        return this.groupAni = e,
        e.x = 79,
        e.y = 185,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.right = 60,
        e.source = "sheng_ting_reay_level1_panel_btnonekey_png",
        e.y = 537,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ShengTingReayLevel4PanelSkin.exml"] = window.ShengTingReayLevel4PanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["groupAni", "btnFight4", "btnFight3", "btnFight2", "btnFight1", "btnFight", "txtTimes", "btnAddTimes", "progress", "txtProgress", "groupTxtProgress", "btnCure", "btnPet", "btnOneKey"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Group3_i(), this.btnCure_i(), this.btnPet_i(), this.btnOneKey_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["imgProgress4", "imgProgress3", "imgProgress2", "imgProgress1", "thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.thumb_i = function() {
            var e = new eui.Group;
            return this.thumb = e,
            e.elementsContent = [this.imgProgress4_i(), this.imgProgress3_i(), this.imgProgress2_i(), this.imgProgress1_i()],
            e
        },
        n.imgProgress4_i = function() {
            var e = new eui.Image;
            return this.imgProgress4 = e,
            e.source = "sheng_ting_reay_level4_panel_imgprogress4_png",
            e.x = 224,
            e
        },
        n.imgProgress3_i = function() {
            var e = new eui.Image;
            return this.imgProgress3 = e,
            e.source = "sheng_ting_reay_level4_panel_imgprogress3_png",
            e.x = 128,
            e
        },
        n.imgProgress2_i = function() {
            var e = new eui.Image;
            return this.imgProgress2 = e,
            e.source = "sheng_ting_reay_level4_panel_imgprogress2_png",
            e.x = 32,
            e
        },
        n.imgProgress1_i = function() {
            var e = new eui.Image;
            return this.imgProgress1 = e,
            e.source = "sheng_ting_reay_level4_panel_imgprogress1_png",
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "sheng_ting_reay_level1_panel_bg_jpg",
        e.y = 0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 663,
        e.horizontalCenter = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.groupAni_i(), this._Image4_i(), this.btnFight4_i(), this.btnFight3_i(), this.btnFight2_i(), this.btnFight1_i(), this.btnFight_i(), this._Group1_i(), this._Group2_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level4_panel_imgbg_png",
        e.x = 10,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = .88,
        e.scaleY = .88,
        e.source = "sheng_ting_reay_level2_panel_imgreay_png",
        e.visible = !0,
        e.x = 273,
        e.y = 27,
        e
    },
    i.groupAni_i = function() {
        var e = new eui.Group;
        return this.groupAni = e,
        e.x = 535,
        e.y = 323,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level4_panel_imgtxt_png",
        e.x = 275,
        e.y = 45,
        e
    },
    i.btnFight4_i = function() {
        var e = new eui.Image;
        return this.btnFight4 = e,
        e.source = "sheng_ting_reay_level4_panel_btnfight1_png",
        e.x = 838,
        e.y = 431,
        e
    },
    i.btnFight3_i = function() {
        var e = new eui.Image;
        return this.btnFight3 = e,
        e.source = "sheng_ting_reay_level4_panel_btnfight1_png",
        e.x = 892,
        e.y = 241,
        e
    },
    i.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "sheng_ting_reay_level4_panel_btnfight1_png",
        e.x = 160,
        e.y = 431,
        e
    },
    i.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "sheng_ting_reay_level4_panel_btnfight1_png",
        e.x = 106,
        e.y = 241,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "sheng_ting_reay_level4_panel_btnfight_png",
        e.x = 476,
        e.y = 522,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 429,
        e.y = 579,
        e.elementsContent = [this._Label1_i(), this.txtTimes_i(), this.btnAddTimes_i()],
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "今日剩余挑战次数：",
        e.textColor = 8114943,
        e.x = 0,
        e.y = 5,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "5",
        e.textColor = 16773260,
        e.x = 185,
        e.y = 2,
        e
    },
    i.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.source = "sheng_ting_reay_level2_panel_btnaddtimes_png",
        e.x = 215,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 302,
        e.y = 440,
        e.elementsContent = [this._Image5_i(), this.progress_i(), this._Image6_i(), this.groupTxtProgress_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level4_panel_imgprogressbg1_png",
        e.x = 0,
        e.y = 22,
        e
    },
    i.progress_i = function() {
        var e = new eui.ProgressBar;
        return this.progress = e,
        e.height = 10,
        e.width = 320,
        e.x = 137,
        e.y = 52,
        e.skinName = n,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level4_panel_imgprogressbg2_png",
        e.visible = !0,
        e.x = 168,
        e.y = 51,
        e
    },
    i.groupTxtProgress_i = function() {
        var e = new eui.Group;
        return this.groupTxtProgress = e,
        e.x = 401,
        e.y = 0,
        e.elementsContent = [this._Image7_i(), this.txtProgress_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level4_panel_imgprogresstxt_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 24,
        e.text = "100%",
        e.textColor = 16773539,
        e.y = 6,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "sheng_ting_reay_level2_panel_btncure_png",
        e.x = 20,
        e.y = 469,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "sheng_ting_reay_level2_panel_btnpet_png",
        e.x = 20,
        e.y = 379,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.right = 60,
        e.source = "sheng_ting_reay_level1_panel_btnonekey_png",
        e.y = 537,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ShengTingReayMainPanelSkin.exml"] = window.ShengTingReayMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnGet", "imgHasPet", "btnInfo", "btnCollect", "btnBest", "btnSuperGet", "btnUp", "imgHasUp", "imgHasBest", "btnChallenge1", "imgFinish1", "btnChallenge2", "imgFinish2", "btnChallenge3", "imgFinish3", "btnChallenge4", "imgFinish4"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group6_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "sheng_ting_reay_main_panel_bg_jpg",
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.left = 50,
        e.y = 428,
        e.elementsContent = [this._Image2_i(), this.btnGet_i(), this.imgHasPet_i(), this.btnInfo_i(), this.btnCollect_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_main_panel_imgtxt_png",
        e.x = 136,
        e.y = 0,
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "sheng_ting_reay_main_panel_btnget_png",
        e.x = 107,
        e.y = 96,
        e
    },
    n.imgHasPet_i = function() {
        var e = new eui.Image;
        return this.imgHasPet = e,
        e.source = "sheng_ting_reay_main_panel_imghaspet_png",
        e.x = 99,
        e.y = 110,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "sheng_ting_reay_main_panel_btninfo_png",
        e.x = 0,
        e.y = 101,
        e
    },
    n.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "sheng_ting_reay_main_panel_btncollect_png",
        e.x = 0,
        e.y = 40,
        e
    },
    n._Group6_i = function() {
        var e = new eui.Group;
        return e.right = 36,
        e.width = 369,
        e.y = 74,
        e.elementsContent = [this.btnBest_i(), this.btnSuperGet_i(), this.btnUp_i(), this.imgHasUp_i(), this.imgHasBest_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()],
        e
    },
    n.btnBest_i = function() {
        var e = new eui.Image;
        return this.btnBest = e,
        e.source = "sheng_ting_reay_main_panel_btnbest_png",
        e.visible = !0,
        e.x = 187,
        e.y = 444,
        e
    },
    n.btnSuperGet_i = function() {
        var e = new eui.Image;
        return this.btnSuperGet = e,
        e.source = "sheng_ting_reay_main_panel_btnsuperget_png",
        e.visible = !0,
        e.x = 276,
        e.y = 444,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "sheng_ting_reay_main_panel_btnup_png",
        e.visible = !0,
        e.x = 274,
        e.y = 444,
        e
    },
    n.imgHasUp_i = function() {
        var e = new eui.Image;
        return this.imgHasUp = e,
        e.source = "sheng_ting_reay_main_panel_imghasup_png",
        e.visible = !0,
        e.x = 280,
        e.y = 472,
        e
    },
    n.imgHasBest_i = function() {
        var e = new eui.Image;
        return this.imgHasBest = e,
        e.source = "sheng_ting_reay_main_panel_imghasup_png",
        e.visible = !0,
        e.x = 194,
        e.y = 472,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 87,
        e.width = 298,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.btnChallenge1_i(), this._Image3_i(), this.imgFinish1_i()],
        e
    },
    n.btnChallenge1_i = function() {
        var e = new eui.Image;
        return this.btnChallenge1 = e,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_main_panel_imgtxt1_png",
        e.touchEnabled = !1,
        e.x = 78,
        e.y = 24,
        e
    },
    n.imgFinish1_i = function() {
        var e = new eui.Image;
        return this.imgFinish1 = e,
        e.source = "sheng_ting_reay_main_panel_imgfinish1_png",
        e.visible = !0,
        e.x = 59,
        e.y = 25,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 87,
        e.width = 298,
        e.x = 0,
        e.y = 110,
        e.elementsContent = [this.btnChallenge2_i(), this._Image4_i(), this.imgFinish2_i()],
        e
    },
    n.btnChallenge2_i = function() {
        var e = new eui.Image;
        return this.btnChallenge2 = e,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_main_panel_imgtxt2_png",
        e.touchEnabled = !1,
        e.x = 77,
        e.y = 24,
        e
    },
    n.imgFinish2_i = function() {
        var e = new eui.Image;
        return this.imgFinish2 = e,
        e.source = "sheng_ting_reay_main_panel_imgfinish1_png",
        e.visible = !0,
        e.x = 59,
        e.y = 25,
        e
    },
    n._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 87,
        e.width = 298,
        e.x = 0,
        e.y = 219,
        e.elementsContent = [this.btnChallenge3_i(), this._Image5_i(), this.imgFinish3_i()],
        e
    },
    n.btnChallenge3_i = function() {
        var e = new eui.Image;
        return this.btnChallenge3 = e,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_main_panel_imgtxt3_png",
        e.touchEnabled = !1,
        e.x = 77,
        e.y = 24,
        e
    },
    n.imgFinish3_i = function() {
        var e = new eui.Image;
        return this.imgFinish3 = e,
        e.source = "sheng_ting_reay_main_panel_imgfinish1_png",
        e.visible = !0,
        e.x = 59,
        e.y = 25,
        e
    },
    n._Group5_i = function() {
        var e = new eui.Group;
        return e.height = 87,
        e.width = 298,
        e.x = 0,
        e.y = 329,
        e.elementsContent = [this.btnChallenge4_i(), this._Image6_i(), this.imgFinish4_i()],
        e
    },
    n.btnChallenge4_i = function() {
        var e = new eui.Image;
        return this.btnChallenge4 = e,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_main_panel_imgtxt4_png",
        e.touchEnabled = !1,
        e.x = 77,
        e.y = 24,
        e
    },
    n.imgFinish4_i = function() {
        var e = new eui.Image;
        return this.imgFinish4 = e,
        e.source = "sheng_ting_reay_main_panel_imgfinish1_png",
        e.visible = !0,
        e.x = 59,
        e.y = 25,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ShengTingReayUpPanelSkin.exml"] = window.ShengTingReayUpPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtTimes", "btnAddTimes", "btnFight", "btnPet", "btnCure", "imgEffect", "imgSkill", "imgMark", "btnUp", "btnOneKey", "txtItem", "btnAddItem", "groupItem"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "sheng_ting_reay_level1_panel_bg_jpg",
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "sheng_ting_reay_up_panel_imgtop_png",
        e.y = 35,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -30,
        e.y = 595,
        e.elementsContent = [this._Label1_i(), this.txtTimes_i(), this.btnAddTimes_i()],
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "今日剩余挑战次数：",
        e.textColor = 8114943,
        e.x = 0,
        e.y = 5,
        e
    },
    n.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "5",
        e.textColor = 16773260,
        e.x = 185,
        e.y = 3,
        e
    },
    n.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.source = "sheng_ting_reay_level2_panel_btnaddtimes_png",
        e.x = 215,
        e.y = 0,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 12,
        e.y = 17,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.btnFight_i(), this.btnPet_i(), this.btnCure_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_level2_panel_imgreay_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_up_panel_imgfight_png",
        e.x = 171,
        e.y = 498,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "sheng_ting_reay_level2_panel_btnfight1_png",
        e.x = 237,
        e.y = 539,
        e
    },
    n.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "sheng_ting_reay_level2_panel_btnpet_png",
        e.x = 8,
        e.y = 362,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "sheng_ting_reay_level2_panel_btncure_png",
        e.x = 8,
        e.y = 452,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.right = 30,
        e.y = 149,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this.imgEffect_i(), this.imgSkill_i(), this.imgMark_i(), this.btnUp_i(), this.btnOneKey_i(), this.groupItem_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_up_panel_imgupbg_png",
        e.width = 557,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_up_panel_imgupbg1_png",
        e.x = 383,
        e.y = 43,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_up_panel_imgupbg1_png",
        e.x = 212,
        e.y = 43,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_up_panel_imgupbg1_png",
        e.x = 40,
        e.y = 43,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "专属特性",
        e.textColor = 16049801,
        e.x = 402,
        e.y = 59,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第五技能",
        e.textColor = 16049801,
        e.x = 231,
        e.y = 59,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "专属刻印",
        e.textColor = 16049801,
        e.x = 59,
        e.y = 58,
        e
    },
    n.imgEffect_i = function() {
        var e = new eui.Image;
        return this.imgEffect = e,
        e.source = "sheng_ting_reay_up_panel_imgeffect_png",
        e.x = 425,
        e.y = 121,
        e
    },
    n.imgSkill_i = function() {
        var e = new eui.Image;
        return this.imgSkill = e,
        e.source = "sheng_ting_reay_up_panel_imgskill_png",
        e.x = 247,
        e.y = 111,
        e
    },
    n.imgMark_i = function() {
        var e = new eui.Image;
        return this.imgMark = e,
        e.source = "sheng_ting_reay_up_panel_imgmark_png",
        e.x = 74,
        e.y = 108,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "sheng_ting_reay_up_panel_btnup_png",
        e.x = 211,
        e.y = 301,
        e
    },
    n.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "sheng_ting_reay_up_panel_btnonekeybuy_png",
        e.x = 169,
        e.y = 403,
        e
    },
    n.groupItem_i = function() {
        var e = new eui.Group;
        return this.groupItem = e,
        e.x = 149,
        e.y = 245,
        e.elementsContent = [this._Label5_i(), this.txtItem_i(), this.btnAddItem_i(), this._Image9_i()],
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "圣霆之兆：",
        e.textColor = 7984127,
        e.x = 43,
        e.y = 11,
        e
    },
    n.txtItem_i = function() {
        var e = new eui.Label;
        return this.txtItem = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "XX/30",
        e.textColor = 16773260,
        e.x = 147,
        e.y = 9,
        e
    },
    n.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "sheng_ting_reay_level2_panel_btnaddtimes_png",
        e.x = 226,
        e.y = 6,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "sheng_ting_reay_up_panel_imgitem_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin);