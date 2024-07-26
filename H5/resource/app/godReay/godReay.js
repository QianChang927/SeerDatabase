var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
godReay; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "godReay.MainPanel",
        e.LEVEL_PANEL = "godReay.LevelPanel",
        e.FLY_PANEL = "godReay.FlyPanel",
        e.SKILL_PANEL = "godReay.SkillPanel",
        e
    } ();
    e.PanelConst = t,
    __reflect(t.prototype, "godReay.PanelConst")
} (godReay || (godReay = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, s) {
        function a(e) {
            try {
                _(n.next(e))
            } catch(t) {
                s(t)
            }
        }
        function o(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                s(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        _((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, s && (a = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(s, i[1])).done) return a;
            switch (s = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, s, a, o, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
godReay; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "GodReayFlyPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            TimeDelayUtils.clearAllTimeByThisObj(this)
        },
        i.prototype.removed = function() {
            TimeDelayUtils.clearAllTimeByThisObj(this)
        },
        i.prototype.init = function() {
            this.adaptRightContent(this.groupRight),
            this.initOldPveBtnClose(0, this, "god_reay_fly_panel_imgtitle_png")
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnPet,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                t.service.cureAllPet()
            },
            this),
            ImageButtonUtil.add(this.btnSkip,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击生翼界面-【跳过冷却】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240648_2743",
                    function() {
                        t.updateValues()
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnRoll,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击生翼界面-【抽取对手】"),
                SocketConnection.sendByQueue(46147, [0],
                function(e) {
                    t.service.updateSomeValues([4198]).then(function() {
                        var i = e.data,
                        n = i.readUnsignedInt();
                        t.playRollAni([0, 2, 1, 3, 4][n]).then(function() {
                            t.btnRoll.visible = !1,
                            t.btnFight1.visible = !0
                        })
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight1,
            function() {
                var e = 1560 + t.service.getValue(4198);
                FightManager.fightNoMapBoss(e, void 0, void 0, void 0,
                function() {
                    var e = [0, 2, 1, 3, 4][t.service.getValue(4198)],
                    i = t.service.getValue([0, 4195, 4194, 4196, 4197][e]),
                    n = 2e3 * (e + 1);
                    n > i && (t.lastBossIndex = e)
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight2,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击生翼界面-【指定挑战】"),
                t.service.openPop(new e.FlyPop(t.service), !1, null, null, null, t)
            },
            this),
            ImageButtonUtil.add(this.btnFly,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击生翼界面-【生翼】"),
                SocketConnection.sendByQueue(46149, [],
                function() {
                    t.service.updateValues().then(function() {
                        Alarm.show("雷伊已成功生翼，实力更进一步！",
                        function() {
                            t.service.backToMainPanel()
                        })
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240647_2748",
                    function() {
                        t.updateValues()
                    },
                    t)
                },
                t)
            },
            this)
        },
        i.prototype.update = function() {
            var e = this,
            t = SystemTimerManager.sysBJDate.getTime() / 1e3,
            i = this.service.getValue(14114),
            n = this.service.getValue(14109),
            r = MainManager.actorInfo.isVip ? 8 : 5,
            s = n > 0 ? r + Math.max(0, Math.floor((t - i) / 300)) - n: r;
            if (s = Math.min(s, r), this.txtTimes.text = s + "/" + r, this.btnSkip.visible = 0 == s, this.groupAddTimes.visible = r > s, r > s) {
                var a = 300 - (t - i) % 300;
                this.txtAddTimes.text = TimeUtil.countDownFormat(a, "mm:ss"),
                TimeDelayUtils.setInterval(function() {
                    e.txtAddTimes.text = TimeUtil.countDownFormat(--a, "mm:ss"),
                    0 > a && (TimeDelayUtils.clearAllTimeByThisObj(e), e.updateValues())
                },
                1e3, this)
            }
            var o = [0, 2, 1, 3, 4][this.service.getValue(4198)];
            this.btnRoll.visible = s > 0 && 0 == o,
            this.btnFight1.visible = s > 0 && o > 0;
            for (var _ = !0,
            u = 1; 4 >= u; u++) {
                this["imgSelect" + u].visible = u == o;
                var g = this.service.getValue([0, 4195, 4194, 4196, 4197][u]),
                l = 2e3 * (u + 1);
                this["txtProgress" + u].text = g + "/" + l,
                this["progress" + u].value = g / l * 100,
                this["imgHas" + u].visible = g >= l,
                _ = _ && g >= l
            }
            var h = !!this.service.getValue(9042) || !PetManager.hasPet(70);
            if (this.imgHas.visible = h, this.btnFly.visible = _ && !h, this.btnOneKey.visible = !_ && !h, this.groupFight.visible = !_, this.lastBossIndex) {
                var u = this.lastBossIndex;
                this.lastBossIndex = 0;
                var g = this.service.getValue([0, 4195, 4194, 4196, 4197][u]),
                l = 2e3 * (u + 1);
                g >= l && BubblerManager.getInstance().showText("已对" + ["", "克萨雷恩", "圣光天马", "托鲁克", "金翅托鲁克"][u] + "造成足够伤害！")
            }
        },
        i.prototype.playRollAni = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(i) {
                    return [2, new Promise(function(i, n) {
                        var r = {
                            i: 0
                        };
                        egret.lifecycle.stage.touchChildren = !1,
                        egret.Tween.get(r, {
                            onChange: function() {
                                for (var e = Math.floor(r.i) % 4, i = 1; 4 >= i; i++) t["imgSelect" + i].visible = i == e + 1
                            }
                        }).to({
                            i: 27 + e
                        },
                        4e3, egret.Ease.quadInOut).call(function() {
                            egret.lifecycle.stage.touchChildren = !0,
                            i()
                        })
                    })]
                })
            })
        },
        i
    } (BasicPanel);
    e.FlyPanel = t,
    __reflect(t.prototype, "godReay.FlyPanel")
} (godReay || (godReay = {}));
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
godReay; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.skinName = "GodReayFlyPopSkin",
            i.service = t,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent(),
            this.updateTimes(),
            this.selectBoss(0)
        },
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            TimeDelayUtils.clearAllTimeByThisObj(this)
        },
        t.prototype.init = function() {
            var e = this;
            this.imgDiamond.source = ClientConfig.getItemIcon(5),
            this.txtDiamond.text = UserInfoManager.diamond + "",
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED,
            function() {
                e.txtDiamond.text = UserInfoManager.diamond + ""
            },
            this);
            for (var t = 1; 4 >= t; t++) {
                var i = this.service.getValue([0, 4195, 4194, 4196, 4197][t]),
                n = 2e3 * (t + 1);
                this["txtProgress" + t].text = i + "/" + n,
                this["progress" + t].value = i / n * 100,
                this["imgHas" + t].visible = i >= n,
                this["group" + t].touchEnabled = this["group" + t].touchChildren = n > i
            }
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.imgDiamond,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                e.service.cureAllPet()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnAddDiamond,
            function() {
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.btnSkip,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击生翼指定挑战弹窗-【跳过冷却】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240648_2743",
                    function() {
                        e.service.updateValues().then(function() {
                            e.updateTimes()
                        })
                    },
                    e)
                },
                e)
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["group" + t],
                function() {
                    e.selectBoss(t)
                },
                i, !1, !1)
            },
            i = this, n = 1; 4 >= n; n++) t(n);
            ImageButtonUtil.add(this.btnFight,
            function() {
                e.curBoss ? (StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击生翼指定挑战弹窗-【指定挑战】"), PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct([0, 240650, 240649, 240651, 240652][e.curBoss] + "_" + [0, 2745, 2744, 2746, 2747][e.curBoss],
                    function() {
                        FightManager.fightNoMapBoss([0, 1562, 1561, 1563, 1564][e.curBoss]),
                        e.hide()
                    },
                    e)
                },
                e)) : BubblerManager.getInstance().showText("请先选择想要挑战的对手")
            },
            this)
        },
        t.prototype.updateTimes = function() {
            var e = this,
            t = SystemTimerManager.sysBJDate.getTime() / 1e3,
            i = this.service.getValue(14114),
            n = this.service.getValue(14109),
            r = MainManager.actorInfo.isVip ? 8 : 5,
            s = n > 0 ? r + Math.max(0, Math.floor((t - i) / 300)) - n: r;
            if (s = Math.min(s, r), this.txtTimes.text = s + "/" + r, this.btnSkip.visible = 0 == s, this.btnFight.visible = s > 0, this.groupAddTimes.visible = r > s, r > s) {
                var a = 300 - (t - i) % 300;
                this.txtAddTimes.text = TimeUtil.countDownFormat(a, "mm:ss"),
                TimeDelayUtils.setInterval(function() {
                    e.txtAddTimes.text = TimeUtil.countDownFormat(--a, "mm:ss"),
                    0 > a && (TimeDelayUtils.clearAllTimeByThisObj(e), e.service.updateValues().then(function() {
                        e.updateTimes()
                    }))
                },
                1e3, this)
            }
        },
        t.prototype.selectBoss = function(e) {
            this.curBoss = e;
            for (var t = 1; 4 >= t; t++) this["imgSelect" + t].visible = t == e
        },
        t
    } (PopView);
    e.FlyPop = t,
    __reflect(t.prototype, "godReay.FlyPop")
} (godReay || (godReay = {}));
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
godReay; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.service.setValues([4194, 4195, 4196, 4197, 4198, 4204, 4200, 4201, 4202, 4203, 4206, 4207, 4208, 4210, 4211, 4212], [14109, 14110, 14111, 14112, 14113, 14117, 14114, 14115, 14118, 14119, 14120, 14121, 14122, 14123], [9042, 9665, 9666, 9667, 9668, 25671]),
            n.init([{
                panelName: e.PanelConst.MAIN_PANEL,
                isMain: !i || !i["goto"]
            },
            {
                panelName: e.PanelConst.LEVEL_PANEL,
                isMain: i && 1 == i["goto"]
            },
            {
                panelName: e.PanelConst.FLY_PANEL,
                isMain: i && 2 == i["goto"]
            }]),
            n
        }
        return __extends(i, t),
        i
    } (BasicMultPanelModule);
    e.GodReay = t,
    __reflect(t.prototype, "godReay.GodReay")
} (godReay || (godReay = {}));
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
godReay; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "GodReayLevelPanelSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.adaptLeftContent(this.groupLeft),
            this.txtFight.textFlow = (new egret.HtmlTextParser).parse("仅能使用<font color= #ff9d24>雷伊</font>首发出战"),
            this.addEvent()
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            TimeDelayUtils.clearAllTimeByThisObj(this)
        },
        t.prototype.removed = function() {
            TimeDelayUtils.clearAllTimeByThisObj(this)
        },
        t.prototype.beforeAdd = function(e) {
            this.bossIndex = e,
            this.grpBack && this.grpBack.parent && this.grpBack.parent.removeChild(this.grpBack),
            this.initOldPveBtnClose(0, this, "god_reay_level_panel_imgtitle" + this.bossIndex + "_png"),
            this.txtTop.text = "击败所有不同等级的" + ["布莱克", "缪斯", "卡修斯", "盖亚"][this.bossIndex - 1] + "即可获得雷神之" + ["气", "能", "力", "怒"][this.bossIndex - 1]
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                e.service.cureAllPet()
            },
            this),
            ImageButtonUtil.add(this.btnSkip,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击任意关卡界面-【跳过冷却】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240653_2788",
                    function() {
                        e.updateValues()
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                PetManager.isDefaultPet(70) ? FightManager.fightNoMapBoss(1559 + 5 * e.bossIndex + e.levelIndex, void 0, void 0, void 0,
                function(t) {
                    t.winnerID == MainManager.actorID && e.levelIndex < 5 && BubblerManager.getInstance().showText("成功战胜" + [20, 40, 60, 80][e.levelIndex - 1] + "级的" + ["布莱克", "缪斯", "卡修斯", "盖亚"][e.bossIndex - 1] + "，再接再厉！")
                }) : (StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击任意关卡界面-【开始挑战】时首发不是雷伊"), Alarm.show("仅能使用" + TextFormatUtil.getRedTxt("雷伊") + "作为首发出战精灵",
                function() {
                    e.service.showPetBag()
                }))
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct([240657, 240656, 240655, 240658][e.bossIndex - 1] + "_" + [2751, 2750, 2749, 2752][e.bossIndex - 1],
                    function() {
                        e.updateValues()
                    },
                    e)
                },
                e)
            },
            this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.updateValues, this)
        },
        t.prototype.update = function() {
            var e = this,
            t = SystemTimerManager.sysBJDate.getTime() / 1e3,
            i = this.service.getValue(14115),
            n = this.service.getValue(14117),
            r = MainManager.actorInfo.isVip ? 8 : 5,
            s = n > 0 ? r + Math.max(0, Math.floor((t - i) / 300)) - n: r;
            if (s = Math.min(s, r), this.txtTimes.text = s + "/" + r, this.btnSkip.visible = 0 == s, this.txtFight.visible = this.btnFight.visible = s > 0, this.groupAddTimes.visible = r > s, r > s) {
                var a = 300 - (t - i) % 300;
                this.txtAddTimes.text = TimeUtil.countDownFormat(a, "mm:ss"),
                TimeDelayUtils.setInterval(function() {
                    e.txtAddTimes.text = TimeUtil.countDownFormat(--a, "mm:ss"),
                    0 > a && (TimeDelayUtils.clearAllTimeByThisObj(e), SocketConnection.mainSocket.connected ? e.updateValues() : e.update())
                },
                1e3, this)
            }
            if (this.levelIndex = this.service.getValue([4202, 4201, 4200, 4203][this.bossIndex - 1]) + 1, this.levelIndex > 5) return void this.service.backToMainPanel();
            this.imgPetBG.source = "god_reay_level_panel_imgpetbg" + this.levelIndex + "_png",
            this.imgPet.source = "god_reay_level_panel_imgpet_" + this.bossIndex + "_" + this.levelIndex + "_png",
            this.imgSelect5.visible = 5 == this.levelIndex;
            for (var o = 1; 4 >= o; o++) this["imgHas" + o].visible = o < this.levelIndex,
            this["imgArrow" + o].visible = o < this.levelIndex,
            this["imgSelect" + o].visible = o == this.levelIndex
        },
        t
    } (BasicPanel);
    e.LevelPanel = t,
    __reflect(t.prototype, "godReay.LevelPanel")
} (godReay || (godReay = {}));
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
godReay; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "GodReayMainPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            TimeDelayUtils.clearAllTimeByThisObj(this),
            EventManager.removeEventListener("UpdateGodReayMainPanel", this.updateValues, this)
        },
        i.prototype.removed = function() {
            TimeDelayUtils.clearAllTimeByThisObj(this)
        },
        i.prototype.init = function() {
            this.initOldPveBtnClose(155, this, "god_reay_main_panel_imgtitle_png"),
            EventManager.addEventListener("UpdateGodReayMainPanel", this.updateValues, this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnSign,
            function() {
                t.service.openPop(new e.SignPop(t.service))
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                t.service.showPetInfo(2394)
            },
            this),
            ImageButtonUtil.add(this.btnFly,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击主界面-【前往生翼】"),
                t.service.openPanel(e.PanelConst.FLY_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击主界面-【第五技能】"),
                t.service.openPanel(e.PanelConst.SKILL_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnEvo,
            function() {
                return t.service.getValue(9042) ? PetManager.isDefaultPet(70) ? void SocketConnection.sendByQueue(43076, [PetManager.getBagPetsById(70, !0)[0].catchTime, 74],
                function() {
                    t.updateValues(),
                    Alert.show("恭喜你！雷伊已完成超进化！\n可以前往背包查看",
                    function() {
                        t.service.showPetBag()
                    })
                }) : void Alarm.show("请将" + TextFormatUtil.getRedTxt("雷伊") + "设为首发",
                function() {
                    t.service.showPetBag()
                }) : void Alert.show("必须先雷伊生翼才可以超进化，是否前往雷伊生翼？",
                function() {
                    t.service.openPanel(e.PanelConst.FLY_PANEL)
                })
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["btn" + i],
                function() {
                    t.service.openPanel(e.PanelConst.LEVEL_PANEL, i),
                    StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击主界面-【关卡" + i + "】")
                },
                n)
            },
            n = this, r = 1; 4 >= r; r++) i(r);
            ImageButtonUtil.add(this.btnSkip,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击主界面-【跳过冷却】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240653_2788",
                    function() {
                        t.updateValues()
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击主界面-【超进化】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240654_2789",
                    function() {
                        t.updateValues()
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnCollect,
            function() {
                egret.lifecycle.stage.touchChildren = !1,
                PetFactorCollectionManager.setCollection(149, !0).then(function() {
                    egret.lifecycle.stage.touchChildren = !0,
                    t.btnCollect.visible = !1,
                    t.btnHasCollect.visible = !0
                })
            },
            this),
            ImageButtonUtil.add(this.btnHasCollect,
            function() {
                egret.lifecycle.stage.touchChildren = !1,
                PetFactorCollectionManager.setCollection(149, !1).then(function() {
                    egret.lifecycle.stage.touchChildren = !0,
                    t.btnCollect.visible = !0,
                    t.btnHasCollect.visible = !1
                })
            },
            this)
        },
        i.prototype.update = function() {
            var e = this,
            t = PetFactorCollectionManager.checkPetIdIndexIsCollection(149);
            this.btnCollect.visible = !t,
            this.btnHasCollect.visible = t;
            var i = !!this.service.getValue(25671) || PetManager.hasPet(2394);
            this.imgHasEvo.visible = i;
            for (var n = !0,
            r = 1; 4 >= r; r++) {
                var s = !!this.service.getValue(9669 - r),
                a = !!this.service.getValue(9670 - r);
                n = n && s,
                this["imgHas" + r].visible = s,
                this["imgNot" + r].visible = !(s || a),
                DisplayUtil.setEnabled(this["btn" + r], !s && a, !1)
            }
            this.imgHasOneKey.visible = n,
            this.btnEvo.visible = n && !i,
            DisplayUtil.setEnabled(this.btnOneKey, !n, !1),
            DisplayUtil.setEnabled(this.btnEvo, n && !i, !1);
            var o = SystemTimerManager.sysBJDate.getTime() / 1e3,
            _ = this.service.getValue(14115),
            u = this.service.getValue(14117),
            g = MainManager.actorInfo.isVip ? 8 : 5,
            l = u > 0 ? g + Math.max(0, Math.floor((o - _) / 300)) - u: g;
            if (l = Math.min(l, g), this.txtTimes.text = l + "/" + g, this.groupAddTimes.visible = g > l, g > l) {
                var h = 300 - (o - _) % 300;
                this.txtAddTimes.text = TimeUtil.countDownFormat(h, "mm:ss"),
                TimeDelayUtils.setInterval(function() {
                    e.txtAddTimes.text = TimeUtil.countDownFormat(--h, "mm:ss"),
                    0 > h && (TimeDelayUtils.clearAllTimeByThisObj(e), e.updateValues())
                },
                1e3, this)
            }
        },
        i
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "godReay.MainPanel")
} (godReay || (godReay = {}));
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
godReay; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.isTodayGot = !1,
            i.sumDay = 0,
            i.gotStateArr = [],
            i.gotName = ["雷神之气", "雷神之能", "雷神之力", "雷神之怒"],
            i.skinName = "GodReaySignSkin",
            i.service = t,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            KTool.getMultiValue([202295, 123331],
            function(e) {
                t.sumDay = e[1],
                t.isTodayGot = 1 == e[0],
                t.gotStateArr.push(t.service.getValue(9668)),
                t.gotStateArr.push(t.service.getValue(9667)),
                t.gotStateArr.push(t.service.getValue(9666)),
                t.gotStateArr.push(t.service.getValue(9665)),
                t.init()
            })
        },
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.init = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this);
            for (var t = function(t) {
                i.isTodayGot || t != i.sumDay + 1 || ImageButtonUtil.add(i["prize_" + t],
                function() {
                    e.getPrize(t)
                },
                i),
                i.sumDay >= t ? i["getFlag_" + t].visible = !0 : i["getFlag_" + t].visible = !1,
                i["bg_" + t].source = "god_reay_sign_imge_nocanGet_png"
            },
            i = this, n = 1; 4 >= n; n++) t(n);
            this.isTodayGot ? this["tx_curdaily_" + (this.sumDay + 1)] && (this["tx_curdaily_" + (this.sumDay + 1)].text = "明日可领", this["tx_curdaily_" + (this.sumDay + 1)].textColor = 16773475) : (this["bg_" + (this.sumDay + 1)] && (this["bg_" + (this.sumDay + 1)].source = "god_reay_sign_imge_canGet_png"), this["arrow_dark_" + this.sumDay] && (this["arrow_dark_" + this.sumDay].source = "god_reay_sign_arrow_light_png"))
        },
        t.prototype.getPrize = function(e) {
            this.gotStateArr[e - 1] && BubblerManager.getInstance().showText(this.gotName[e - 1] + "已达到数量上限，无法再次获得"),
            ImageButtonUtil.remove(this["prize_" + e]),
            SocketConnection.sendWithPromise(46148, [e]).then(function() {
                EventManager.dispatchEventWith("UpdateGodReayMainPanel")
            }),
            this["getFlag_" + e].visible = !0,
            this["arrow_dark_" + e] && (this["arrow_dark_" + e].source = "god_reay_sign_arrow_light_png"),
            this["arrow_dark_" + (e - 1)] && (this["arrow_dark_" + (e - 1)].source = "god_reay_sign_arrow_dark_png"),
            this["tx_curdaily_" + (e + 1)] && (this["tx_curdaily_" + (e + 1)].text = "明日可领", this["tx_curdaily_" + (e + 1)].textColor = 16773475),
            this["bg_" + e].source = "god_reay_sign_imge_nocanGet_png"
        },
        t
    } (PopView);
    e.SignPop = t,
    __reflect(t.prototype, "godReay.SignPop")
} (godReay || (godReay = {}));
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
godReay; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "GodReaySkillPanelSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            TimeDelayUtils.clearAllTimeByThisObj(this)
        },
        t.prototype.removed = function() {
            TimeDelayUtils.clearAllTimeByThisObj(this)
        },
        t.prototype.init = function() {
            this.adaptLeftContent(this.groupLevel),
            this.initOldPveBtnClose(0, this, "god_reay_skill_panel_imgtitle_png", this.service.backToMainPanel, this.service)
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                e.service.cureAllPet()
            },
            this),
            ImageButtonUtil.add(this.imgSkill,
            function() {
                e.service.showSkillInfo(15895)
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["imgLevel" + t],
                function() {
                    e.selectLevel(t),
                    StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击第五技能界面-左侧【第" + ["一", "二", "三"][t - 1] + "层】")
                },
                i, !1, !1)
            },
            i = this, n = 1; 3 >= n; n++) t(n);
            ImageButtonUtil.add(this.btnFight,
            function() {
                e.oldValue = e.service.getValue([0, 4206, 4207, 4208][e.curLevel]),
                FightManager.fightNoMapBoss(1604 + e.curLevel, void 0, void 0, void 0,
                function(t) {
                    e.onFightEnd = !0
                })
            },
            this),
            ImageButtonUtil.add(this.btnSkip,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击第五技能界面-【跳过冷却】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240682_" + (2803 + 3 * e.curLevel),
                    function() {
                        e.updateValues()
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240683_" + (2804 + 3 * e.curLevel),
                    function() {
                        e.updateValues()
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnPass,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击第五技能界面-【直接通过】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240684_" + (2805 + 3 * e.curLevel),
                    function() {
                        e.updateValues()
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                PayManager.doPayFunc(function() {
                    var t = e.getCatchTime();
                    t > 0 && BuyProductManager.buyProductBySocket(240681,
                    function() {
                        SocketConnection.sendByQueue(46131, [t],
                        function() {
                            PetManager.updateBagInfo(function() {
                                BubblerManager.getInstance().showText("雷伊觉醒第五技能成功")
                            })
                        })
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnOpen,
            function() {
                StatLogger.log("20230602版本系统功能", "雷神雷伊搬迁", "点击第五技能界面-【开启技能】");
                var t = e.getCatchTime();
                t > 0 && SocketConnection.sendByQueue(46151, [t],
                function() {
                    PetManager.updateBagInfo(function() {
                        BubblerManager.getInstance().showText("雷伊觉醒第五技能成功")
                    })
                })
            },
            this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.updateValues, this)
        },
        t.prototype.update = function() {
            var e = this;
            if (!this.curLevel) {
                for (var t = 1; 3 >= t; t++) {
                    var i = this.service.getValue([0, 4206, 4207, 4208][t]),
                    n = [0, 3e5, 50, 200][t];
                    if (n > i) {
                        this.selectLevel(t);
                        break
                    }
                }
                return void(this.curLevel || this.selectLevel(1))
            }
            var r = SystemTimerManager.sysBJDate.getTime() / 1e3,
            s = this.service.getValue([0, 14119, 14121, 14123][this.curLevel]),
            a = this.service.getValue([0, 14118, 14120, 14122][this.curLevel]),
            o = this.service.getValue([0, 4210, 4211, 4212][this.curLevel]),
            _ = MainManager.actorInfo.isVip ? 6 : 5,
            u = _ + o - a;
            if (u = Math.min(u, _), this.txtTimes.text = u + "/" + _, this.groupAddTimes.visible = this.btnSkip.visible = s > 0 && 300 >= r - s, this.btnFight.visible = !(s > 0 && 300 >= r - s) && u > 0, this.btnAddTimes.visible = !(s > 0 && 300 >= r - s) && 0 >= u, s > 0 && 300 >= r - s) {
                var g = 300 - (r - s) % 300;
                this.txtAddTimes.text = TimeUtil.countDownFormat(g, "mm:ss"),
                TimeDelayUtils.setInterval(function() {
                    e.txtAddTimes.text = TimeUtil.countDownFormat(--g, "mm:ss"),
                    0 > g && (TimeDelayUtils.clearAllTimeByThisObj(e), SocketConnection.mainSocket.connected ? e.updateValues() : e.update())
                },
                1e3, this)
            }
            var l = this.service.getValue([0, 4206, 4207, 4208][this.curLevel]),
            h = [0, 3e5, 50, 200][this.curLevel];
            this.txtProgress.text = l + "/" + h,
            this.progress.value = l / h * 100,
            this.groupButton.visible = h > l;
            for (var c = !0,
            t = 1; 3 >= t; t++) {
                var i = this.service.getValue([0, 4206, 4207, 4208][t]),
                n = [0, 3e5, 50, 200][t],
                m = i >= n;
                this["imgHas" + t].visible = m,
                DisplayUtil.setEnabled(this["imgLevel" + t], !m, !1),
                c = c && m
            }
            if (this.btnOpen.visible = c, this.btnOneKey.visible = !c, this.onFightEnd && (this.onFightEnd = !1, l > this.oldValue)) {
                var p = void 0;
                l >= h ? p = "恭喜，历经磨练通过了第" + this.curLevel + "层考验！": 1 == this.curLevel ? p = "本次累积" + TextFormatUtil.getRedTxt(l - this.oldValue + "") + "伤害，\n还需造成" + TextFormatUtil.getRedTxt(h - l + "") + "伤害，请再接再厉": 2 == this.curLevel ? p = "本次击中雷伊" + TextFormatUtil.getRedTxt(l - this.oldValue + "") + "次，\n还需击中" + TextFormatUtil.getRedTxt(h - l + "") + "次，请再接再厉": 3 == this.curLevel && (p = "本次抵挡" + TextFormatUtil.getRedTxt(l - this.oldValue + "") + "次攻击，\n还需抵挡" + TextFormatUtil.getRedTxt(h - l + "") + "次，请再接再厉"),
                Alarm.show(p)
            }
        },
        t.prototype.selectLevel = function(e) {
            if (this.curLevel != e) {
                for (var t = 1; 3 >= t; t++) this["imgSelect" + t].visible = t == e;
                this.curLevel = e,
                this.txtTask1.text = ["", "对雷神雷伊造成伤害达到300000", "累积击中雷神雷伊50次", "累积抵挡雷神雷伊攻击200次"][e],
                this.txtTask2.text = ["", "累积伤害", "击中次数", "抵挡攻击"][e],
                this.update()
            }
        },
        t.prototype.getCatchTime = function() {
            var e = this,
            t = PetManager.getBagPetsById(2394, !0)[0];
            return t ? PetManager.getPetInfo(t.catchTime).hideSKill ? (BubblerManager.getInstance().showText("你的雷神雷伊已经开启了第五技能"), -1) : t.catchTime: (Alarm.show("请先将雷神雷伊放入背包",
            function() {
                e.service.showPetBag()
            }), 0)
        },
        t
    } (BasicPanel);
    e.SkillPanel = t,
    __reflect(t.prototype, "godReay.SkillPanel")
} (godReay || (godReay = {}));
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
generateEUI.paths["resource/eui_skins/GodReayFlyPanelSkin.exml"] = window.GodReayFlyPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnOneKey", "btnFly", "imgHas", "progress1", "txtProgress1", "imgHas1", "imgSelect1", "progress2", "txtProgress2", "imgHas2", "imgSelect2", "progress3", "txtProgress3", "imgHas3", "imgSelect3", "progress4", "txtProgress4", "imgHas4", "imgSelect4", "btnRoll", "btnSkip", "btnFight1", "btnFight2", "txtTimes", "txtAddTimes", "groupAddTimes", "groupFight", "groupRight", "btnCure", "btnPet"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.groupRight_i(), this._Group6_i(), this.btnCure_i(), this.btnPet_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "god_reay_fly_panel_imgprogress1_png",
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "god_reay_fly_panel_imgprogress1_png",
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "god_reay_fly_panel_imgprogress1_png",
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
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "god_reay_fly_panel_imgprogress1_png",
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "god_reay_level_panel_bg_jpg",
        e.y = 0,
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -230,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.btnOneKey_i(), this.btnFly_i(), this.imgHas_i()],
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_panel_imgreay_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "god_reay_fly_panel_btnonekey_png",
        e.visible = !1,
        e.x = 427,
        e.y = 539,
        e
    },
    a.btnFly_i = function() {
        var e = new eui.Image;
        return this.btnFly = e,
        e.source = "god_reay_fly_panel_btnfly_png",
        e.visible = !1,
        e.x = 341,
        e.y = 532,
        e
    },
    a.imgHas_i = function() {
        var e = new eui.Image;
        return this.imgHas = e,
        e.source = "god_reay_fly_panel_imghas_png",
        e.visible = !1,
        e.x = 374,
        e.y = 540,
        e
    },
    a.groupRight_i = function() {
        var e = new eui.Group;
        return this.groupRight = e,
        e.right = 40,
        e.y = 85,
        e.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this.groupFight_i()],
        e
    },
    a._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.progress1_i(), this.txtProgress1_i(), this.imgHas1_i(), this.imgSelect1_i()],
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_panel_imgboss1_png",
        e.visible = !0,
        e.x = 12,
        e.y = 3,
        e
    },
    a.progress1_i = function() {
        var e = new eui.ProgressBar;
        return this.progress1 = e,
        e.height = 8,
        e.width = 334,
        e.x = 18,
        e.y = 94,
        e.skinName = i,
        e
    },
    a.txtProgress1_i = function() {
        var e = new eui.Label;
        return this.txtProgress1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.2794917876302,
        e.textColor = 16774079,
        e.visible = !0,
        e.x = 27,
        e.y = 77,
        e
    },
    a.imgHas1_i = function() {
        var e = new eui.Image;
        return this.imgHas1 = e,
        e.source = "god_reay_fly_panel_imghas1_png",
        e.visible = !0,
        e.x = 11,
        e.y = 3,
        e
    },
    a.imgSelect1_i = function() {
        var e = new eui.Image;
        return this.imgSelect1 = e,
        e.source = "god_reay_fly_panel_imgselect1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 110,
        e.elementsContent = [this._Image4_i(), this.progress2_i(), this.txtProgress2_i(), this.imgHas2_i(), this.imgSelect2_i()],
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_panel_imgboss2_png",
        e.visible = !0,
        e.x = 12,
        e.y = 3,
        e
    },
    a.progress2_i = function() {
        var e = new eui.ProgressBar;
        return this.progress2 = e,
        e.height = 8,
        e.width = 334,
        e.x = 18,
        e.y = 94,
        e.skinName = n,
        e
    },
    a.txtProgress2_i = function() {
        var e = new eui.Label;
        return this.txtProgress2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.2794917876302,
        e.textColor = 16774079,
        e.visible = !0,
        e.x = 27,
        e.y = 77,
        e
    },
    a.imgHas2_i = function() {
        var e = new eui.Image;
        return this.imgHas2 = e,
        e.source = "god_reay_fly_panel_imghas1_png",
        e.visible = !0,
        e.x = 11,
        e.y = 3,
        e
    },
    a.imgSelect2_i = function() {
        var e = new eui.Image;
        return this.imgSelect2 = e,
        e.source = "god_reay_fly_panel_imgselect1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Group4_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 219,
        e.elementsContent = [this._Image5_i(), this.progress3_i(), this.txtProgress3_i(), this.imgHas3_i(), this.imgSelect3_i()],
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_panel_imgboss3_png",
        e.visible = !0,
        e.x = 12,
        e.y = 3,
        e
    },
    a.progress3_i = function() {
        var e = new eui.ProgressBar;
        return this.progress3 = e,
        e.height = 8,
        e.width = 334,
        e.x = 18,
        e.y = 94,
        e.skinName = r,
        e
    },
    a.txtProgress3_i = function() {
        var e = new eui.Label;
        return this.txtProgress3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.2794917876302,
        e.textColor = 16774079,
        e.visible = !0,
        e.x = 27,
        e.y = 77,
        e
    },
    a.imgHas3_i = function() {
        var e = new eui.Image;
        return this.imgHas3 = e,
        e.source = "god_reay_fly_panel_imghas1_png",
        e.visible = !0,
        e.x = 11,
        e.y = 3,
        e
    },
    a.imgSelect3_i = function() {
        var e = new eui.Image;
        return this.imgSelect3 = e,
        e.source = "god_reay_fly_panel_imgselect1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Group5_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 327,
        e.elementsContent = [this._Image6_i(), this.progress4_i(), this.txtProgress4_i(), this.imgHas4_i(), this.imgSelect4_i()],
        e
    },
    a._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_panel_imgboss4_png",
        e.visible = !0,
        e.x = 12,
        e.y = 3,
        e
    },
    a.progress4_i = function() {
        var e = new eui.ProgressBar;
        return this.progress4 = e,
        e.height = 8,
        e.width = 334,
        e.x = 18,
        e.y = 94,
        e.skinName = s,
        e
    },
    a.txtProgress4_i = function() {
        var e = new eui.Label;
        return this.txtProgress4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.2794917876302,
        e.textColor = 16774079,
        e.visible = !0,
        e.x = 27,
        e.y = 77,
        e
    },
    a.imgHas4_i = function() {
        var e = new eui.Image;
        return this.imgHas4 = e,
        e.source = "god_reay_fly_panel_imghas1_png",
        e.visible = !0,
        e.x = 11,
        e.y = 3,
        e
    },
    a.imgSelect4_i = function() {
        var e = new eui.Image;
        return this.imgSelect4 = e,
        e.source = "god_reay_fly_panel_imgselect1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a.groupFight_i = function() {
        var e = new eui.Group;
        return this.groupFight = e,
        e.x = 13,
        e.y = 439,
        e.elementsContent = [this.btnRoll_i(), this.btnSkip_i(), this.btnFight1_i(), this.btnFight2_i(), this._Image7_i(), this.txtTimes_i(), this.groupAddTimes_i()],
        e
    },
    a.btnRoll_i = function() {
        var e = new eui.Image;
        return this.btnRoll = e,
        e.source = "god_reay_fly_panel_btnroll_png",
        e.visible = !0,
        e.x = 209,
        e.y = 14,
        e
    },
    a.btnSkip_i = function() {
        var e = new eui.Image;
        return this.btnSkip = e,
        e.source = "god_reay_level_panel_btnskip_png",
        e.visible = !0,
        e.x = 209,
        e.y = 14,
        e
    },
    a.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "god_reay_level_panel_btnfight_png",
        e.visible = !0,
        e.x = 209,
        e.y = 15,
        e
    },
    a.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "god_reay_fly_panel_btnfight2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 14,
        e
    },
    a._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imgtimes_png",
        e.x = 300,
        e.y = 0,
        e
    },
    a.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.7685465173946,
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 44,
        e.x = 304,
        e.y = 4,
        e
    },
    a.groupAddTimes_i = function() {
        var e = new eui.Group;
        return this.groupAddTimes = e,
        e.x = 94,
        e.y = 75,
        e.elementsContent = [this.txtAddTimes_i(), this._Label1_i()],
        e
    },
    a.txtAddTimes_i = function() {
        var e = new eui.Label;
        return this.txtAddTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.textColor = 16774079,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "后恢复次数",
        e.textColor = 14197605,
        e.x = 66,
        e.y = 2,
        e
    },
    a._Group6_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 54,
        e.elementsContent = [this._Image8_i(), this._Label2_i()],
        e
    },
    a._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imgtop_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "对4个对手均造成指定伤害即可免费雷伊生翼",
        e.textColor = 16763020,
        e.x = 104,
        e.y = 5,
        e
    },
    a.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "god_reay_level_panel_btncure_png",
        e.x = 37,
        e.y = 533,
        e
    },
    a.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "god_reay_level_panel_btnpet_png",
        e.visible = !0,
        e.x = 37,
        e.y = 442,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodReayFlyPopSkin.exml"] = window.GodReayFlyPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnFight", "btnSkip", "txtTimes", "txtAddTimes", "groupAddTimes", "btnClose", "btnPet", "btnCure", "txtDiamond", "btnAddDiamond", "imgDiamond", "progress1", "txtProgress1", "imgHas1", "imgSelect1", "group1", "progress2", "txtProgress2", "imgHas2", "imgSelect2", "group2", "progress3", "txtProgress3", "imgHas3", "imgSelect3", "group3", "progress4", "txtProgress4", "imgHas4", "imgSelect4", "group4"],
        this.height = 455,
        this.width = 948,
        this.elementsContent = [this._Image1_i(), this.btnFight_i(), this.btnSkip_i(), this._Image2_i(), this.txtTimes_i(), this.groupAddTimes_i(), this.btnClose_i(), this.btnPet_i(), this.btnCure_i(), this.txtDiamond_i(), this.btnAddDiamond_i(), this.imgDiamond_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "god_reay_fly_panel_imgprogress1_png",
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "god_reay_fly_panel_imgprogress1_png",
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "god_reay_fly_panel_imgprogress1_png",
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
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "god_reay_fly_panel_imgprogress1_png",
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_pop_bg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "god_reay_fly_pop_btnfight_png",
        e.visible = !0,
        e.x = 376,
        e.y = 343,
        e
    },
    a.btnSkip_i = function() {
        var e = new eui.Image;
        return this.btnSkip = e,
        e.source = "god_reay_level_panel_btnskip_png",
        e.visible = !0,
        e.x = 406,
        e.y = 350,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imgtimes_png",
        e.visible = !0,
        e.x = 520,
        e.y = 334,
        e
    },
    a.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.7685465173946,
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 40,
        e.x = 526,
        e.y = 340,
        e
    },
    a.groupAddTimes_i = function() {
        var e = new eui.Group;
        return this.groupAddTimes = e,
        e.x = 396,
        e.y = 412,
        e.elementsContent = [this.txtAddTimes_i(), this._Label1_i()],
        e
    },
    a.txtAddTimes_i = function() {
        var e = new eui.Label;
        return this.txtAddTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 24.0135346826242,
        e.textColor = 16774079,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "后恢复次数",
        e.textColor = 14197605,
        e.x = 66,
        e.y = 2,
        e
    },
    a.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "god_reay_fly_pop_btnclose_png",
        e.x = 896,
        e.y = 11,
        e
    },
    a.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "god_reay_level_panel_btnpet_png",
        e.x = 27,
        e.y = 273,
        e
    },
    a.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "god_reay_level_panel_btncure_png",
        e.x = 27,
        e.y = 364,
        e
    },
    a.txtDiamond_i = function() {
        var e = new eui.Label;
        return this.txtDiamond = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 16514895,
        e.x = 757,
        e.y = 22,
        e
    },
    a.btnAddDiamond_i = function() {
        var e = new eui.Image;
        return this.btnAddDiamond = e,
        e.source = "god_reay_fly_pop_btnadddiamond_png",
        e.x = 827,
        e.y = 22,
        e
    },
    a.imgDiamond_i = function() {
        var e = new eui.Image;
        return this.imgDiamond = e,
        e.height = 30,
        e.width = 30,
        e.x = 713,
        e.y = 16,
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 91,
        e.layout = this._TileLayout1_i(),
        e.elementsContent = [this.group1_i(), this.group2_i(), this.group3_i(), this.group4_i()],
        e
    },
    a._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -10,
        e.requestedRowCount = 2,
        e.verticalGap = 4,
        e
    },
    a.group1_i = function() {
        var e = new eui.Group;
        return this.group1 = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.progress1_i(), this.txtProgress1_i(), this.imgHas1_i(), this.imgSelect1_i()],
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_panel_imgboss1_png",
        e.visible = !0,
        e.x = 12,
        e.y = 3,
        e
    },
    a.progress1_i = function() {
        var e = new eui.ProgressBar;
        return this.progress1 = e,
        e.height = 8,
        e.width = 334,
        e.x = 18,
        e.y = 94,
        e.skinName = i,
        e
    },
    a.txtProgress1_i = function() {
        var e = new eui.Label;
        return this.txtProgress1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.2794917876302,
        e.textColor = 16774079,
        e.visible = !0,
        e.x = 27,
        e.y = 77,
        e
    },
    a.imgHas1_i = function() {
        var e = new eui.Image;
        return this.imgHas1 = e,
        e.source = "god_reay_fly_panel_imghas1_png",
        e.visible = !0,
        e.x = 11,
        e.y = 3,
        e
    },
    a.imgSelect1_i = function() {
        var e = new eui.Image;
        return this.imgSelect1 = e,
        e.source = "god_reay_fly_panel_imgselect1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a.group2_i = function() {
        var e = new eui.Group;
        return this.group2 = e,
        e.visible = !0,
        e.x = 0,
        e.y = 110,
        e.elementsContent = [this._Image4_i(), this.progress2_i(), this.txtProgress2_i(), this.imgHas2_i(), this.imgSelect2_i()],
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_panel_imgboss2_png",
        e.visible = !0,
        e.x = 12,
        e.y = 3,
        e
    },
    a.progress2_i = function() {
        var e = new eui.ProgressBar;
        return this.progress2 = e,
        e.height = 8,
        e.width = 334,
        e.x = 18,
        e.y = 94,
        e.skinName = n,
        e
    },
    a.txtProgress2_i = function() {
        var e = new eui.Label;
        return this.txtProgress2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.2794917876302,
        e.textColor = 16774079,
        e.visible = !0,
        e.x = 27,
        e.y = 77,
        e
    },
    a.imgHas2_i = function() {
        var e = new eui.Image;
        return this.imgHas2 = e,
        e.source = "god_reay_fly_panel_imghas1_png",
        e.visible = !0,
        e.x = 11,
        e.y = 3,
        e
    },
    a.imgSelect2_i = function() {
        var e = new eui.Image;
        return this.imgSelect2 = e,
        e.source = "god_reay_fly_panel_imgselect1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a.group3_i = function() {
        var e = new eui.Group;
        return this.group3 = e,
        e.visible = !0,
        e.x = 0,
        e.y = 219,
        e.elementsContent = [this._Image5_i(), this.progress3_i(), this.txtProgress3_i(), this.imgHas3_i(), this.imgSelect3_i()],
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_panel_imgboss3_png",
        e.visible = !0,
        e.x = 12,
        e.y = 3,
        e
    },
    a.progress3_i = function() {
        var e = new eui.ProgressBar;
        return this.progress3 = e,
        e.height = 8,
        e.width = 334,
        e.x = 18,
        e.y = 94,
        e.skinName = r,
        e
    },
    a.txtProgress3_i = function() {
        var e = new eui.Label;
        return this.txtProgress3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.2794917876302,
        e.textColor = 16774079,
        e.visible = !0,
        e.x = 27,
        e.y = 77,
        e
    },
    a.imgHas3_i = function() {
        var e = new eui.Image;
        return this.imgHas3 = e,
        e.source = "god_reay_fly_panel_imghas1_png",
        e.visible = !0,
        e.x = 11,
        e.y = 3,
        e
    },
    a.imgSelect3_i = function() {
        var e = new eui.Image;
        return this.imgSelect3 = e,
        e.source = "god_reay_fly_panel_imgselect1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a.group4_i = function() {
        var e = new eui.Group;
        return this.group4 = e,
        e.visible = !0,
        e.x = 0,
        e.y = 327,
        e.elementsContent = [this._Image6_i(), this.progress4_i(), this.txtProgress4_i(), this.imgHas4_i(), this.imgSelect4_i()],
        e
    },
    a._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_fly_panel_imgboss4_png",
        e.visible = !0,
        e.x = 12,
        e.y = 3,
        e
    },
    a.progress4_i = function() {
        var e = new eui.ProgressBar;
        return this.progress4 = e,
        e.height = 8,
        e.width = 334,
        e.x = 18,
        e.y = 94,
        e.skinName = s,
        e
    },
    a.txtProgress4_i = function() {
        var e = new eui.Label;
        return this.txtProgress4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.2794917876302,
        e.textColor = 16774079,
        e.visible = !0,
        e.x = 27,
        e.y = 77,
        e
    },
    a.imgHas4_i = function() {
        var e = new eui.Image;
        return this.imgHas4 = e,
        e.source = "god_reay_fly_panel_imghas1_png",
        e.visible = !0,
        e.x = 11,
        e.y = 3,
        e
    },
    a.imgSelect4_i = function() {
        var e = new eui.Image;
        return this.imgSelect4 = e,
        e.source = "god_reay_fly_panel_imgselect1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodReayLevelPanelSkin.exml"] = window.GodReayLevelPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgPetBG", "imgPet", "btnFight", "btnSkip", "txtAddTimes", "groupAddTimes", "txtFight", "txtTimes", "imgArrow4", "imgArrow3", "imgArrow2", "imgArrow1", "imgSelect5", "imgSelect4", "imgSelect3", "imgSelect2", "imgSelect1", "imgHas5", "imgHas4", "imgHas3", "imgHas2", "imgHas1", "btnPet", "btnCure", "groupLeft", "txtTop", "btnOneKey"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.groupLeft_i(), this._Group3_i(), this.btnOneKey_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "god_reay_level_panel_bg_jpg",
        e.visible = !0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.visible = !0,
        e.width = 1257,
        e.elementsContent = [this.imgPetBG_i(), this._Image2_i(), this.imgPet_i(), this.btnFight_i(), this.btnSkip_i(), this._Image3_i(), this._Image4_i(), this.groupAddTimes_i(), this.txtFight_i(), this.txtTimes_i()],
        e
    },
    i.imgPetBG_i = function() {
        var e = new eui.Image;
        return this.imgPetBG = e,
        e.visible = !0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imgreay_png",
        e.visible = !0,
        e.x = 587,
        e
    },
    i.imgPet_i = function() {
        var e = new eui.Image;
        return this.imgPet = e,
        e.visible = !0,
        e.x = 125,
        e.y = 6,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "god_reay_level_panel_btnfight_png",
        e.visible = !0,
        e.x = 874,
        e.y = 539,
        e
    },
    i.btnSkip_i = function() {
        var e = new eui.Image;
        return this.btnSkip = e,
        e.source = "god_reay_level_panel_btnskip_png",
        e.visible = !0,
        e.x = 874,
        e.y = 538,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imgtimes_png",
        e.x = 965,
        e.y = 524,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imgvs_png",
        e.x = 526,
        e.y = 337,
        e
    },
    i.groupAddTimes_i = function() {
        var e = new eui.Group;
        return this.groupAddTimes = e,
        e.visible = !0,
        e.x = 863,
        e.y = 600,
        e.elementsContent = [this.txtAddTimes_i(), this._Label1_i()],
        e
    },
    i.txtAddTimes_i = function() {
        var e = new eui.Label;
        return this.txtAddTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "XX:XX",
        e.textColor = 16774231,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "后恢复次数",
        e.textColor = 16776661,
        e.x = 57,
        e.y = 0,
        e
    },
    i.txtFight_i = function() {
        var e = new eui.Label;
        return this.txtFight = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20.0465682428909,
        e.textColor = 16776661,
        e.visible = !0,
        e.y = 600,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.7685465173946,
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 42,
        e.x = 970,
        e.y = 528,
        e
    },
    i.groupLeft_i = function() {
        var e = new eui.Group;
        return this.groupLeft = e,
        e.x = 38,
        e.y = 71,
        e.elementsContent = [this._Group2_i(), this.btnPet_i(), this.btnCure_i()],
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 2,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.imgArrow4_i(), this.imgArrow3_i(), this.imgArrow2_i(), this.imgArrow1_i(), this.imgSelect5_i(), this.imgSelect4_i(), this.imgSelect3_i(), this.imgSelect2_i(), this.imgSelect1_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this.imgHas5_i(), this.imgHas4_i(), this.imgHas3_i(), this.imgHas2_i(), this.imgHas1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imglevelbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgArrow4_i = function() {
        var e = new eui.Image;
        return this.imgArrow4 = e,
        e.source = "god_reay_level_panel_imgarrow1_png",
        e.visible = !1,
        e.x = 71,
        e.y = 273,
        e
    },
    i.imgArrow3_i = function() {
        var e = new eui.Image;
        return this.imgArrow3 = e,
        e.source = "god_reay_level_panel_imgarrow1_png",
        e.visible = !1,
        e.x = 71,
        e.y = 204,
        e
    },
    i.imgArrow2_i = function() {
        var e = new eui.Image;
        return this.imgArrow2 = e,
        e.source = "god_reay_level_panel_imgarrow1_png",
        e.visible = !1,
        e.x = 71,
        e.y = 135,
        e
    },
    i.imgArrow1_i = function() {
        var e = new eui.Image;
        return this.imgArrow1 = e,
        e.source = "god_reay_level_panel_imgarrow1_png",
        e.visible = !1,
        e.x = 71,
        e.y = 65,
        e
    },
    i.imgSelect5_i = function() {
        var e = new eui.Image;
        return this.imgSelect5 = e,
        e.source = "god_reay_level_panel_imgselect1_png",
        e.visible = !1,
        e.x = 12,
        e.y = 283,
        e
    },
    i.imgSelect4_i = function() {
        var e = new eui.Image;
        return this.imgSelect4 = e,
        e.source = "god_reay_level_panel_imgselect1_png",
        e.visible = !1,
        e.x = 12,
        e.y = 214,
        e
    },
    i.imgSelect3_i = function() {
        var e = new eui.Image;
        return this.imgSelect3 = e,
        e.source = "god_reay_level_panel_imgselect1_png",
        e.visible = !1,
        e.x = 12,
        e.y = 145,
        e
    },
    i.imgSelect2_i = function() {
        var e = new eui.Image;
        return this.imgSelect2 = e,
        e.source = "god_reay_level_panel_imgselect1_png",
        e.visible = !1,
        e.x = 12,
        e.y = 75,
        e
    },
    i.imgSelect1_i = function() {
        var e = new eui.Image;
        return this.imgSelect1 = e,
        e.source = "god_reay_level_panel_imgselect1_png",
        e.visible = !1,
        e.x = 12,
        e.y = 5,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imglevel5_png",
        e.x = 40,
        e.y = 293,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imglevel4_png",
        e.x = 46,
        e.y = 223,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imglevel3_png",
        e.x = 46,
        e.y = 154,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imglevel2_png",
        e.visible = !0,
        e.x = 46,
        e.y = 84,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imglevel1_png",
        e.visible = !0,
        e.x = 46,
        e.y = 14,
        e
    },
    i.imgHas5_i = function() {
        var e = new eui.Image;
        return this.imgHas5 = e,
        e.source = "god_reay_level_panel_imghas1_png",
        e.visible = !1,
        e.x = 21,
        e.y = 297,
        e
    },
    i.imgHas4_i = function() {
        var e = new eui.Image;
        return this.imgHas4 = e,
        e.source = "god_reay_level_panel_imghas1_png",
        e.visible = !1,
        e.x = 21,
        e.y = 227,
        e
    },
    i.imgHas3_i = function() {
        var e = new eui.Image;
        return this.imgHas3 = e,
        e.source = "god_reay_level_panel_imghas1_png",
        e.visible = !1,
        e.x = 21,
        e.y = 158,
        e
    },
    i.imgHas2_i = function() {
        var e = new eui.Image;
        return this.imgHas2 = e,
        e.source = "god_reay_level_panel_imghas1_png",
        e.visible = !1,
        e.x = 21,
        e.y = 89,
        e
    },
    i.imgHas1_i = function() {
        var e = new eui.Image;
        return this.imgHas1 = e,
        e.source = "god_reay_level_panel_imghas1_png",
        e.visible = !1,
        e.x = 21,
        e.y = 18,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "god_reay_level_panel_btnpet_png",
        e.x = 0,
        e.y = 371,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "god_reay_level_panel_btncure_png",
        e.x = 0,
        e.y = 462,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 54,
        e.elementsContent = [this._Image11_i(), this.txtTop_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imgtop_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtTop_i = function() {
        var e = new eui.Label;
        return this.txtTop = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.textColor = 16763020,
        e.y = 5,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.right = 44,
        e.source = "god_reay_level_panel_btnonekey_png",
        e.y = 537,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodReayMainPanelSkin.exml"] = window.GodReayMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnEvo", "imgHasEvo", "btnInfo", "btnFly", "btnSign", "btnHasCollect", "btnCollect", "btnOneKey", "imgHasOneKey", "btnUp", "btn4", "btn3", "btn2", "btn1", "imgHas4", "imgHas3", "imgHas2", "imgHas1", "imgNot1", "imgNot2", "imgNot3", "imgNot4", "btnSkip", "txtAddTimes", "groupAddTimes", "txtTimes"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group6_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.left = 0,
        e.right = 0,
        e.source = "god_reay_main_panel_bg_jpg",
        e.visible = !0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.btnEvo_i(), this.imgHasEvo_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_main_panel_imgpet_png",
        e.x = -146,
        e.y = 0,
        e
    },
    i.btnEvo_i = function() {
        var e = new eui.Image;
        return this.btnEvo = e,
        e.source = "god_reay_main_panel_imgevo_png",
        e.visible = !0,
        e.x = 340,
        e.y = 545,
        e
    },
    i.imgHasEvo_i = function() {
        var e = new eui.Image;
        return this.imgHasEvo = e,
        e.source = "god_reay_main_panel_imghasevo_png",
        e.visible = !0,
        e.x = 316,
        e.y = 325,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.bottom = 0,
        e.top = 0,
        e.x = 31,
        e.elementsContent = [this.btnInfo_i(), this.btnFly_i(), this.btnSign_i(), this.btnHasCollect_i(), this.btnCollect_i()],
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "god_reay_main_panel_btninfo_png",
        e.x = 17,
        e.y = 485,
        e
    },
    i.btnFly_i = function() {
        var e = new eui.Image;
        return this.btnFly = e,
        e.source = "god_reay_main_panel_btnfly_png",
        e.visible = !0,
        e.x = 0,
        e.y = 173,
        e
    },
    i.btnSign_i = function() {
        var e = new eui.Image;
        return this.btnSign = e,
        e.source = "god_reay_main_panel_btnsign_png",
        e.visible = !0,
        e.x = 64,
        e.y = 62.572,
        e
    },
    i.btnHasCollect_i = function() {
        var e = new eui.Image;
        return this.btnHasCollect = e,
        e.source = "god_reay_main_panel_btnhascollect_png",
        e.visible = !0,
        e.x = 101,
        e.y = 484,
        e
    },
    i.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "god_reay_main_panel_btncollect_png",
        e.x = 101,
        e.y = 484,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.right = 48,
        e.y = 23,
        e.elementsContent = [this._Group3_i(), this._Group4_i(), this._Group5_i()],
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 128,
        e.y = 519,
        e.elementsContent = [this.btnOneKey_i(), this.imgHasOneKey_i(), this.btnUp_i()],
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "god_reay_main_panel_btnonekey_png",
        e.x = 102,
        e.y = 0,
        e
    },
    i.imgHasOneKey_i = function() {
        var e = new eui.Image;
        return this.imgHasOneKey = e,
        e.source = "god_reay_main_panel_imghasup_png",
        e.visible = !0,
        e.x = 100,
        e.y = 24,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "god_reay_main_panel_btnup_png",
        e.x = 3,
        e.y = 1,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 94,
        e.elementsContent = [this.btn4_i(), this.btn3_i(), this.btn2_i(), this.btn1_i(), this.imgHas4_i(), this.imgHas3_i(), this.imgHas2_i(), this.imgHas1_i(), this.imgNot1_i(), this.imgNot2_i(), this.imgNot3_i(), this.imgNot4_i()],
        e
    },
    i.btn4_i = function() {
        var e = new eui.Image;
        return this.btn4 = e,
        e.source = "god_reay_main_panel_btn4_png",
        e.x = 0,
        e.y = 302,
        e
    },
    i.btn3_i = function() {
        var e = new eui.Image;
        return this.btn3 = e,
        e.source = "god_reay_main_panel_btn3_png",
        e.x = 0,
        e.y = 201,
        e
    },
    i.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "god_reay_main_panel_btn2_png",
        e.x = 0,
        e.y = 101,
        e
    },
    i.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "god_reay_main_panel_btn1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgHas4_i = function() {
        var e = new eui.Image;
        return this.imgHas4 = e,
        e.source = "god_reay_main_panel_imghas1_png",
        e.visible = !1,
        e.x = 2,
        e.y = 306,
        e
    },
    i.imgHas3_i = function() {
        var e = new eui.Image;
        return this.imgHas3 = e,
        e.source = "god_reay_main_panel_imghas1_png",
        e.visible = !1,
        e.x = 2,
        e.y = 204,
        e
    },
    i.imgHas2_i = function() {
        var e = new eui.Image;
        return this.imgHas2 = e,
        e.source = "god_reay_main_panel_imghas1_png",
        e.visible = !1,
        e.x = 2,
        e.y = 104,
        e
    },
    i.imgHas1_i = function() {
        var e = new eui.Image;
        return this.imgHas1 = e,
        e.source = "god_reay_main_panel_imghas1_png",
        e.visible = !1,
        e.x = 2,
        e.y = 4,
        e
    },
    i.imgNot1_i = function() {
        var e = new eui.Image;
        return this.imgNot1 = e,
        e.source = "god_reay_main_panel_btnmask_png",
        e.visible = !1,
        e
    },
    i.imgNot2_i = function() {
        var e = new eui.Image;
        return this.imgNot2 = e,
        e.source = "god_reay_main_panel_btnmask_png",
        e.visible = !1,
        e.y = 101,
        e
    },
    i.imgNot3_i = function() {
        var e = new eui.Image;
        return this.imgNot3 = e,
        e.source = "god_reay_main_panel_btnmask_png",
        e.visible = !1,
        e.y = 201,
        e
    },
    i.imgNot4_i = function() {
        var e = new eui.Image;
        return this.imgNot4 = e,
        e.source = "god_reay_main_panel_btnmask_png",
        e.visible = !1,
        e.y = 302,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 22,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.groupAddTimes_i(), this.txtTimes_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_main_panel_imgtimes_png",
        e.x = 79,
        e.y = 0,
        e
    },
    i.groupAddTimes_i = function() {
        var e = new eui.Group;
        return this.groupAddTimes = e,
        e.x = 0,
        e.y = 27,
        e.elementsContent = [this._Image4_i(), this.btnSkip_i(), this.txtAddTimes_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_main_panel_imgadditems_png",
        e.x = 0,
        e.y = 3,
        e
    },
    i.btnSkip_i = function() {
        var e = new eui.Image;
        return this.btnSkip = e,
        e.source = "god_reay_main_panel_btnskip_png",
        e.visible = !0,
        e.x = 202,
        e.y = 0,
        e
    },
    i.txtAddTimes_i = function() {
        var e = new eui.Label;
        return this.txtAddTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "XX:XX",
        e.textColor = 16774079,
        e.x = 25,
        e.y = 4,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "X/5",
        e.textColor = 16766817,
        e.x = 255,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodReaySignSkin.exml"] = window.GodReaySignSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "bg_1", "prize_1", "getFlag_1", "tx_curdaily", "bg_2", "prize_2", "getFlag_2", "tx_curdaily_2", "bg_3", "prize_3", "getFlag_3", "tx_curdaily_3", "bg_4", "prize_4", "getFlag_4", "tx_curdaily_4", "arrow_dark_1", "arrow_dark_2", "arrow_dark_3"],
        this.height = 352,
        this.width = 748,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Label1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this.arrow_dark_1_i(), this.arrow_dark_2_i(), this.arrow_dark_3_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 352,
        e.source = "god_reay_sign_imge_sign_bg_png",
        e.width = 748,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 44,
        e.source = "god_reay_sign_imge_title_png",
        e.width = 296,
        e.x = 225,
        e.y = 9,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 33,
        e.source = "god_reay_sign_imge_btn_sign_close_png",
        e.width = 33,
        e.x = 711,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每天签到可领取一个道具，仅可领取一次",
        e.textColor = 16424043,
        e.x = 210,
        e.y = 317,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 177,
        e.horizontalCenter = -259.5,
        e.width = 151,
        e.y = 91,
        e.elementsContent = [this.bg_1_i(), this.prize_1_i(), this.getFlag_1_i(), this.tx_curdaily_i()],
        e
    },
    i.bg_1_i = function() {
        var e = new eui.Image;
        return this.bg_1 = e,
        e.horizontalCenter = 0,
        e.source = "god_reay_sign_imge_nocanGet_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e
    },
    i.prize_1_i = function() {
        var e = new eui.Image;
        return this.prize_1 = e,
        e.height = 91,
        e.horizontalCenter = 0,
        e.source = "god_reay_sign_1701304_png",
        e.width = 88,
        e.y = 29,
        e
    },
    i.getFlag_1_i = function() {
        var e = new eui.Group;
        return this.getFlag_1 = e,
        e.x = 22,
        e.y = 22,
        e.elementsContent = [this._Image3_i(), this._Image4_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "god_reay_sign_imge_getFlagBg_png",
        e.width = 103,
        e.x = 0,
        e.y = 1,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "god_reay_sign_imge_getFlag_png",
        e.width = 100,
        e.x = 4,
        e.y = 36,
        e
    },
    i.tx_curdaily_i = function() {
        var e = new eui.Label;
        return this.tx_curdaily = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 24,
        e.text = "第一天",
        e.textAlign = "center",
        e.textColor = 16775919,
        e.width = 111,
        e.y = 131,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 177,
        e.horizontalCenter = -88.5,
        e.width = 151,
        e.y = 91,
        e.elementsContent = [this.bg_2_i(), this.prize_2_i(), this.getFlag_2_i(), this.tx_curdaily_2_i()],
        e
    },
    i.bg_2_i = function() {
        var e = new eui.Image;
        return this.bg_2 = e,
        e.horizontalCenter = 0,
        e.source = "god_reay_sign_imge_canGet_png",
        e.verticalCenter = 0,
        e
    },
    i.prize_2_i = function() {
        var e = new eui.Image;
        return this.prize_2 = e,
        e.height = 73,
        e.horizontalCenter = 0,
        e.source = "god_reay_sign_1701303_png",
        e.width = 73,
        e.y = 39,
        e
    },
    i.getFlag_2_i = function() {
        var e = new eui.Group;
        return this.getFlag_2 = e,
        e.x = 22,
        e.y = 22,
        e.elementsContent = [this._Image5_i(), this._Image6_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "god_reay_sign_imge_getFlagBg_png",
        e.width = 103,
        e.x = 0,
        e.y = 1,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "god_reay_sign_imge_getFlag_png",
        e.width = 100,
        e.x = 4,
        e.y = 36,
        e
    },
    i.tx_curdaily_2_i = function() {
        var e = new eui.Label;
        return this.tx_curdaily_2 = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 24,
        e.text = "第二天",
        e.textAlign = "center",
        e.textColor = 16775919,
        e.visible = !0,
        e.width = 111,
        e.y = 131,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 177,
        e.horizontalCenter = 83.5,
        e.width = 151,
        e.y = 91,
        e.elementsContent = [this.bg_3_i(), this.prize_3_i(), this.getFlag_3_i(), this.tx_curdaily_3_i()],
        e
    },
    i.bg_3_i = function() {
        var e = new eui.Image;
        return this.bg_3 = e,
        e.horizontalCenter = 0,
        e.source = "god_reay_sign_imge_canGet_png",
        e.verticalCenter = 0,
        e
    },
    i.prize_3_i = function() {
        var e = new eui.Image;
        return this.prize_3 = e,
        e.height = 75,
        e.horizontalCenter = 0,
        e.source = "god_reay_sign_1701302_png",
        e.width = 87,
        e.y = 34,
        e
    },
    i.getFlag_3_i = function() {
        var e = new eui.Group;
        return this.getFlag_3 = e,
        e.x = 22,
        e.y = 22,
        e.elementsContent = [this._Image7_i(), this._Image8_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "god_reay_sign_imge_getFlagBg_png",
        e.width = 103,
        e.x = 0,
        e.y = 1,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "god_reay_sign_imge_getFlag_png",
        e.width = 100,
        e.x = 4,
        e.y = 36,
        e
    },
    i.tx_curdaily_3_i = function() {
        var e = new eui.Label;
        return this.tx_curdaily_3 = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 24,
        e.text = "第三天",
        e.textAlign = "center",
        e.textColor = 16775919,
        e.width = 111,
        e.y = 131,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 177,
        e.horizontalCenter = 254.5,
        e.width = 151,
        e.y = 91,
        e.elementsContent = [this.bg_4_i(), this.prize_4_i(), this.getFlag_4_i(), this.tx_curdaily_4_i()],
        e
    },
    i.bg_4_i = function() {
        var e = new eui.Image;
        return this.bg_4 = e,
        e.horizontalCenter = 0,
        e.source = "god_reay_sign_imge_canGet_png",
        e.verticalCenter = 0,
        e
    },
    i.prize_4_i = function() {
        var e = new eui.Image;
        return this.prize_4 = e,
        e.height = 82,
        e.horizontalCenter = 0,
        e.source = "god_reay_sign_1701301_png",
        e.width = 74,
        e.y = 34,
        e
    },
    i.getFlag_4_i = function() {
        var e = new eui.Group;
        return this.getFlag_4 = e,
        e.x = 22,
        e.y = 22,
        e.elementsContent = [this._Image9_i(), this._Image10_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "god_reay_sign_imge_getFlagBg_png",
        e.width = 103,
        e.x = 0,
        e.y = 1,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "god_reay_sign_imge_getFlag_png",
        e.width = 100,
        e.x = 4,
        e.y = 36,
        e
    },
    i.tx_curdaily_4_i = function() {
        var e = new eui.Label;
        return this.tx_curdaily_4 = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 24,
        e.text = "第四天",
        e.textAlign = "center",
        e.textColor = 16775919,
        e.width = 111,
        e.y = 131,
        e
    },
    i.arrow_dark_1_i = function() {
        var e = new eui.Image;
        return this.arrow_dark_1 = e,
        e.horizontalCenter = -172.5,
        e.source = "god_reay_sign_arrow_dark_png",
        e.y = 160,
        e
    },
    i.arrow_dark_2_i = function() {
        var e = new eui.Image;
        return this.arrow_dark_2 = e,
        e.horizontalCenter = -.5,
        e.source = "god_reay_sign_arrow_dark_png",
        e.y = 160,
        e
    },
    i.arrow_dark_3_i = function() {
        var e = new eui.Image;
        return this.arrow_dark_3 = e,
        e.horizontalCenter = 171.5,
        e.source = "god_reay_sign_arrow_dark_png",
        e.y = 160,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodReaySkillPanelSkin.exml"] = window.GodReaySkillPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnOneKey", "btnOpen", "imgSelect3", "imgSelect2", "imgSelect1", "imgLevel3", "imgLevel2", "imgLevel1", "imgHas3", "imgHas2", "imgHas1", "groupLevel", "btnPet", "btnCure", "imgSkill", "progress", "txtProgress", "txtTask2", "txtTask1", "txtAddTimes", "groupAddTimes", "btnAddTimes", "btnSkip", "btnFight", "btnPass", "txtTimes", "groupButton"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "god_reay_skill_panel_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "god_reay_level_panel_bg_jpg",
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 54,
        e.elementsContent = [this._Image2_i(), this._Label1_i(), this._Image3_i(), this.btnOneKey_i(), this.btnOpen_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imgtop_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "各层考验次数独立，VIP玩家每日额外获得1次挑战次数",
        e.textColor = 16763020,
        e.x = 58,
        e.y = 5,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "god_reay_skill_panel_imgreay_png",
        e.x = -175.797,
        e.y = -7,
        e
    },
    n.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "god_reay_skill_panel_btnonekey_png",
        e.visible = !0,
        e.x = 179.202,
        e.y = 484.99999999999994,
        e
    },
    n.btnOpen_i = function() {
        var e = new eui.Image;
        return this.btnOpen = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "god_reay_skill_panel_btnopen_png",
        e.visible = !0,
        e.x = 179.201,
        e.y = 484.99999999999994,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 33,
        e.y = 71,
        e.elementsContent = [this.groupLevel_i(), this.btnPet_i(), this.btnCure_i()],
        e
    },
    n.groupLevel_i = function() {
        var e = new eui.Group;
        return this.groupLevel = e,
        e.visible = !0,
        e.x = 2,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this.imgSelect3_i(), this.imgSelect2_i(), this.imgSelect1_i(), this.imgLevel3_i(), this.imgLevel2_i(), this.imgLevel1_i(), this.imgHas3_i(), this.imgHas2_i(), this.imgHas1_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_skill_panel_imglevelbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.imgSelect3_i = function() {
        var e = new eui.Image;
        return this.imgSelect3 = e,
        e.source = "god_reay_skill_panel_imgselect1_png",
        e.visible = !1,
        e.x = 12,
        e.y = 187,
        e
    },
    n.imgSelect2_i = function() {
        var e = new eui.Image;
        return this.imgSelect2 = e,
        e.source = "god_reay_skill_panel_imgselect1_png",
        e.visible = !1,
        e.x = 12,
        e.y = 96,
        e
    },
    n.imgSelect1_i = function() {
        var e = new eui.Image;
        return this.imgSelect1 = e,
        e.source = "god_reay_skill_panel_imgselect1_png",
        e.visible = !1,
        e.x = 12,
        e.y = 5,
        e
    },
    n.imgLevel3_i = function() {
        var e = new eui.Image;
        return this.imgLevel3 = e,
        e.source = "god_reay_skill_panel_imglevel3_png",
        e.visible = !0,
        e.x = 27,
        e.y = 190,
        e
    },
    n.imgLevel2_i = function() {
        var e = new eui.Image;
        return this.imgLevel2 = e,
        e.source = "god_reay_skill_panel_imglevel2_png",
        e.visible = !0,
        e.x = 27,
        e.y = 99,
        e
    },
    n.imgLevel1_i = function() {
        var e = new eui.Image;
        return this.imgLevel1 = e,
        e.source = "god_reay_skill_panel_imglevel1_png",
        e.visible = !0,
        e.x = 27,
        e.y = 8,
        e
    },
    n.imgHas3_i = function() {
        var e = new eui.Image;
        return this.imgHas3 = e,
        e.source = "god_reay_skill_panel_imghas1_png",
        e.visible = !1,
        e.x = 22,
        e.y = 213,
        e
    },
    n.imgHas2_i = function() {
        var e = new eui.Image;
        return this.imgHas2 = e,
        e.source = "god_reay_skill_panel_imghas1_png",
        e.visible = !1,
        e.x = 22,
        e.y = 122,
        e
    },
    n.imgHas1_i = function() {
        var e = new eui.Image;
        return this.imgHas1 = e,
        e.source = "god_reay_skill_panel_imghas1_png",
        e.visible = !1,
        e.x = 22,
        e.y = 31,
        e
    },
    n.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "god_reay_level_panel_btnpet_png",
        e.x = 0,
        e.y = 371,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "god_reay_level_panel_btncure_png",
        e.x = 0,
        e.y = 462,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.right = 0,
        e.y = 112,
        e.elementsContent = [this._Image5_i(), this.imgSkill_i(), this._Image6_i(), this._Image7_i(), this.progress_i(), this.txtProgress_i(), this.txtTask2_i(), this.txtTask1_i(), this.groupButton_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_skill_panel_imgskillbg_png",
        e.x = 59,
        e.y = 0,
        e
    },
    n.imgSkill_i = function() {
        var e = new eui.Image;
        return this.imgSkill = e,
        e.source = "god_reay_skill_panel_imgskill_png",
        e.x = 80,
        e.y = 54,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_skill_panel_imgtaskbg_png",
        e.visible = !0,
        e.x = 80,
        e.y = 177,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_skill_panel_imgprogressbg_png",
        e.visible = !0,
        e.x = 96,
        e.y = 346,
        e
    },
    n.progress_i = function() {
        var e = new eui.ProgressBar;
        return this.progress = e,
        e.height = 23,
        e.visible = !0,
        e.width = 374,
        e.x = 96,
        e.y = 346,
        e.skinName = i,
        e
    },
    n.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.right = 47,
        e.size = 20,
        e.textColor = 16774079,
        e.y = 318,
        e
    },
    n.txtTask2_i = function() {
        var e = new eui.Label;
        return this.txtTask2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 30,
        e.textColor = 16774079,
        e.x = 101,
        e.y = 307,
        e
    },
    n.txtTask1_i = function() {
        var e = new eui.Label;
        return this.txtTask1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24.0135346826242,
        e.textColor = 14132069,
        e.width = 358,
        e.x = 102,
        e.y = 233,
        e
    },
    n.groupButton_i = function() {
        var e = new eui.Group;
        return this.groupButton = e,
        e.x = 110,
        e.y = 412,
        e.elementsContent = [this.groupAddTimes_i(), this.btnAddTimes_i(), this.btnSkip_i(), this.btnFight_i(), this.btnPass_i(), this._Image8_i(), this.txtTimes_i()],
        e
    },
    n.groupAddTimes_i = function() {
        var e = new eui.Group;
        return this.groupAddTimes = e,
        e.x = 192,
        e.y = 75,
        e.elementsContent = [this.txtAddTimes_i(), this._Label2_i()],
        e
    },
    n.txtAddTimes_i = function() {
        var e = new eui.Label;
        return this.txtAddTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 24.0135346826242,
        e.textColor = 16774079,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "后可再次挑战",
        e.textColor = 14197605,
        e.x = 65,
        e.y = 1,
        e
    },
    n.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.source = "god_reay_skill_panel_btnaddtimes_png",
        e.visible = !0,
        e.x = 209,
        e.y = 14,
        e
    },
    n.btnSkip_i = function() {
        var e = new eui.Image;
        return this.btnSkip = e,
        e.source = "god_reay_level_panel_btnskip_png",
        e.visible = !0,
        e.x = 209,
        e.y = 14,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "god_reay_level_panel_btnfight_png",
        e.visible = !0,
        e.x = 209,
        e.y = 15,
        e
    },
    n.btnPass_i = function() {
        var e = new eui.Image;
        return this.btnPass = e,
        e.source = "god_reay_skill_panel_btnpass_png",
        e.x = 0,
        e.y = 14,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "god_reay_level_panel_imgtimes_png",
        e.x = 300,
        e.y = 0,
        e
    },
    n.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.7685465173946,
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 41,
        e.x = 306,
        e.y = 4,
        e
    },
    t
} (eui.Skin);