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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._aniChechList = [],
            i._bossConfigure = [{
                idx: 0,
                sflag: 1,
                fflag: 4,
                cnt: 1,
                cflag: 25,
                bossInfo: [{
                    battle: 13267,
                    boss: 1625,
                    flag: 13,
                    pid: 253793,
                    desc: "身为天蛇守卫，巴勒斯肩负着看守“天蛇心”的重任"
                }]
            },
            {
                idx: 1,
                sflag: 2,
                fflag: 5,
                cnt: 2,
                cflag: 26,
                bossInfo: [{
                    battle: 13268,
                    boss: 2397,
                    flag: 14,
                    pid: 253794,
                    desc: "这位先知之子曾在伊洛维奇摇摆不定时出现。\n现在，他被迫为了守护自己的秘宝而战！"
                },
                {
                    battle: 13269,
                    boss: 1598,
                    flag: 15,
                    pid: 253795,
                    desc: "德高望重的古老先知，已将自己的毕生所学传授于奥古德。 擅长运用海洋之力进行战斗"
                },
                {
                    battle: 13270,
                    boss: 2396,
                    flag: 16,
                    pid: 253796,
                    desc: "无辜的小奥德，甚至还不知道究竟发生了什么"
                }]
            },
            {
                idx: 2,
                sflag: 3,
                fflag: 6,
                cnt: 3,
                cflag: 27,
                bossInfo: [{
                    battle: 13271,
                    boss: 2533,
                    flag: 17,
                    pid: 253797,
                    desc: "天蛇七魔将之一，号称“沙皇”"
                },
                {
                    battle: 13272,
                    boss: 2542,
                    flag: 18,
                    pid: 253797,
                    desc: "天蛇七魔将之一，号称“极寒壁垒”"
                },
                {
                    battle: 13273,
                    boss: 2552,
                    flag: 19,
                    pid: 253797,
                    desc: "天蛇七魔将之一，号称“玄灯冥神”"
                },
                {
                    battle: 13274,
                    boss: 2556,
                    flag: 20,
                    pid: 253797,
                    desc: "天蛇七魔将之首，他甚至骄傲地将他的称号加在了名字里。"
                },
                {
                    battle: 13275,
                    boss: 2557,
                    flag: 21,
                    pid: 253797,
                    desc: "天蛇七魔将之一，号称“狂鹰利眼”"
                },
                {
                    battle: 13276,
                    boss: 2565,
                    flag: 22,
                    pid: 253797,
                    desc: "天蛇七魔将之一，号称“大智愚者”"
                },
                {
                    battle: 13277,
                    boss: 2572,
                    flag: 23,
                    pid: 253797,
                    desc: "天蛇七魔将之一，号称“暗沼行者”"
                }]
            }],
            i.skinName = t.PveAiXiaLaLevel1Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210730版本系统功能", "艾夏拉关卡", "进入第一关天蛇之祸面板"),
            this.initOldPveBtnClose(0, this, "pve_ai_xia_la_level1_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.taskInfo.setData({
                closeCallBack: function() {
                    i.closeTaskInfo()
                },
                onSelcteHead: function(e) {
                    var n = e.info,
                    a = {
                        petId: n.boss,
                        pop: n.desc,
                        fightCallBack: function(t, e) {
                            t.apply(e, null),
                            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, i.onFightOver, i),
                            FightManager.fightNoMapBoss("", n.battle)
                        },
                        buyCallBack: function(e, a) {
                            e.apply(a, null),
                            KTool.buyProductByCallback(n.pid, 1,
                            function() {
                                SocketConnection.sendByQueue(42373, [4, n.flag - 12],
                                function() {
                                    t.MgrData.getInstance().updateValues().then(function() {
                                        i.update()
                                    })
                                })
                            })
                        },
                        caller: i
                    };
                    PopViewManager.getInstance().openView(new t.BattlePop, null, a)
                }
            }),
            this.addEvents(),
            this._aniChechList.push(common.TweenUtil.cacheProp(this.pet, ["x", "alpha"]), common.TweenUtil.cacheProp(this.grpBack, ["x", "y", "alpha"]), common.TweenUtil.cacheProp(this.GrpRight, ["right", "x", "y", "alpha"]))
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnFix,
            function() {
                t.onOpenTaskInfo(0)
            },
            this),
            ImageButtonUtil.add(this.btnFix_2,
            function() {
                t.onOpenTaskInfo(1)
            },
            this),
            ImageButtonUtil.add(this.btnFix_3,
            function() {
                t.onOpenTaskInfo(2)
            },
            this),
            ImageButtonUtil.add(this.juxing_5,
            function() {
                t.fastFinish(0)
            },
            this),
            ImageButtonUtil.add(this.juxing_5_2,
            function() {
                t.fastFinish(1)
            },
            this),
            ImageButtonUtil.add(this.juxing_5_3,
            function() {
                t.fastFinish(2)
            },
            this)
        },
        i.prototype.fastFinish = function(e) {
            var i = this;
            PayManager.doPayFunc(function() {
                t.MgrData.getInstance().checkLevelStar() ? KTool.buyProductByCallback(253792, 1,
                function() {
                    SocketConnection.sendByQueue(42373, [3, 4 + e],
                    function() {
                        t.MgrData.getInstance().updateValues().then(function() {
                            i.update()
                        })
                    })
                }) : Alert.show("每天仅能挑战一个关卡，你确定要开始挑战此关卡吗",
                function() {
                    t.MgrData.getInstance().openLevel(1).then(function() {
                        KTool.buyProductByCallback(253792, 1,
                        function() {
                            SocketConnection.sendByQueue(42373, [3, 4 + e],
                            function() {
                                t.MgrData.getInstance().updateValues().then(function() {
                                    i.update()
                                })
                            })
                        })
                    })
                })
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.beforeAdd = function() {
            this.task.visible = !0,
            this.taskInfo.visible = !1
        },
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            t.MgrData.getInstance().checkCompleteLevel(1);
            for (var e = [this.btnFix, this.btnFix_2, this.btnFix_3], i = [this.juxing_5, this.juxing_5_2, this.juxing_5_3], n = [this.mrzl1, this.mrzl2, this.mrzl3], a = [this.yhd1, this.yhd2, this.yhd3], s = [this.yhdone1, this.yhdone2, this.yhdone3], r = 0; r < this._bossConfigure.length; r++) {
                var o = Boolean(BitUtil.getBit(t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level_state), this._bossConfigure[r].cflag - 1)),
                _ = Boolean(BitUtil.getBit(t.MgrData.getInstance().getValue(AttrConst.daily_czlsc_lvel1_state), this._bossConfigure[r].fflag - 1)),
                l = o || _;
                DisplayUtil.setEnabled(e[r], !l, l),
                n[r].visible = _,
                a[r].visible = o,
                s[r].visible = !1,
                DisplayUtil.setEnabled(i[r], !o, o)
            }
            this.taskInfo.visible && this.taskInfo.update()
        },
        i.prototype.removed = function() {
            common.TweenUtil.removeDisplaysTweens([this.pet, this.grpBack, this.GrpRight])
        },
        i.prototype.playOpenAnimation = function() {
            this._aniChechList.forEach(function(t) {
                t.reset()
            });
            var e, i;
            e = this.pet.x;
            var n = {
                from: {
                    x: .5 * -this.pet.width,
                    alpha: 0
                },
                target: {
                    x: 0,
                    alpha: 1
                }
            };
            e = this.grpBack.x;
            var a = {
                from: {
                    left: -60
                },
                target: {
                    left: 60
                }
            };
            i = this.GrpRight.right;
            var s = {
                from: {
                    right: .5 * -this.grpBack.width,
                    alpha: 0
                },
                target: {
                    right: 46,
                    alpha: 1
                }
            };
            t.setDisplayProps([this.pet, this.GrpRight, this.grpBack], [n, s, a]),
            egret.Tween.get(this.pet).to(n.target, 200),
            egret.Tween.get(this.grpBack).to(a.target, 200),
            egret.Tween.get(this.GrpRight).wait(200).to(s.target, 200)
        },
        i.prototype.onFightOver = function(e) {
            var i = this;
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            t.MgrData.getInstance().updateValues().then(function() {
                var n = i._bossConfigure[i._currentTaskIdx],
                a = Boolean(BitUtil.getBit(t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level_state), n.cflag - 1));
                if (a) return void Alarm.show("恭喜你，任务完成！",
                function() {
                    i.closeTaskInfo()
                });
                var s = Boolean(BitUtil.getBit(t.MgrData.getInstance().getValue(AttrConst.daily_czlsc_lvel1_state), n.fflag - 1));
                if (s) return void Alarm.show("很遗憾，任务失败！",
                function() {
                    i.closeTaskInfo()
                });
                var r = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level_state);
                r = r >> 4 * (n.cnt - 1) & 15,
                Alarm.show("本次战斗持续" + e.dataObj.roundNum + "回合，今天你已累计在此任务中战斗了" + r + "回合！")
            })
        },
        i.prototype.onOpenTaskInfo = function(e) {
            var i = this;
            this._currentTaskIdx = e,
            t.MgrData.getInstance().checkLevelStar() ? this.openTaskInfo(e) : Alert.show("每天仅能挑战一个关卡，你确定要开始挑战此关卡吗",
            function() {
                t.MgrData.getInstance().openLevel(1).then(function() {
                    i.openTaskInfo(e)
                })
            })
        },
        i.prototype.openTaskInfo = function(e) {
            var i = this,
            n = t.MgrData.getInstance().getValue(AttrConst.daily_czlsc_lvel1_state),
            a = Boolean(BitUtil.getBit(n, this._bossConfigure[e].sflag - 1));
            a ? (this.taskInfo.setShow(this._bossConfigure[e]), this.task.visible = !1, this.taskInfo.visible = !0) : t.MgrData.getInstance().openLevelTask(e + 1).then(function() {
                i.taskInfo.setShow(i._bossConfigure[e]),
                i.task.visible = !1,
                i.taskInfo.visible = !0
            })
        },
        i.prototype.closeTaskInfo = function() {
            this.task.visible = !0,
            this.taskInfo.visible = !1
        },
        i.prototype.destroy = function() {
            this._aniChechList.forEach(function(t) {
                t.destroy()
            }),
            this.removeEvents(),
            this.taskInfo.destroy(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level1 = e,
    __reflect(e.prototype, "pveAiXiaLa.Level1", ["IPanel"])
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(a, s) {
        function r(t) {
            try {
                _(n.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, o)
        }
        _((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
            switch (s = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
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
                if (r = _.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < r[1]) {
                    _.label = r[1],
                    r = i;
                    break
                }
                if (r && _.label < r[2]) {
                    _.label = r[2],
                    _.ops.push(i);
                    break
                }
                r[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, s, r, o, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
pveAiXiaLa; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.setValues([AttrConst.forever_czlsc_flag, AttrConst.forever_czlsc_level_state, AttrConst.forever_czlsc_level2_state, AttrConst.forever_czlsc_level4_state], [AttrConst.daily_czlsc_selected_flag, AttrConst.daily_czlsc_lvel1_state, AttrConst.daily_czlsc_level2_state, AttrConst.daily_czlsc_upenergy_cnt, AttrConst.daily_czlsc_upenergy_progress, AttrConst.daily_czlsc_battle_cnt]),
            e
        }
        return __extends(e, t),
        e.getInstance = function() {
            return e._ins || (e._ins = new e),
            e._ins
        },
        e.prototype.checkPetFirst = function(t) {
            if (!PetManager.isDefaultPet(t)) {
                var e = PetXMLInfo.getName(t);
                return Alarm.show("请先将" + e + "设为首发位置!",
                function() {
                    ModuleManager.showModuleByID(10)
                }),
                !1
            }
            return ! 0
        },
        e.prototype.checkLevelStar = function() {
            var t = this.getValue(AttrConst.daily_czlsc_selected_flag);
            return t > 0
        },
        e.prototype.openLevelTask = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.CZLSC, [3, t])["catch"](function() {
                            throw new Error("常长老输出第一关任务开启失败")
                        })];
                    case 1:
                        return e = i.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return i.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.openLevel = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.CZLSC, [2, t])["catch"](function() {
                            throw new Error("常长老输出开启关卡失败")
                        })];
                    case 1:
                        return e = i.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return i.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.level2ChooseBoss = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.CZLSC, [5, 0])["catch"](function() {
                            throw new Error("常长老输出第二关选择boss错误")
                        })];
                    case 1:
                        return t = e.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.level4Open = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.CZLSC, [8, 0])["catch"](function() {
                            throw new Error("常长老输出第四关灌注错误")
                        })];
                    case 1:
                        return t = e.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.getPet = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.CZLSC, [1, t])["catch"](function() {
                            throw new Error("获取精灵")
                        })];
                    case 1:
                        return e = i.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return i.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.checkCompleteLevel = function(t) {
            var e = this,
            i = this.getValue(AttrConst.forever_czlsc_flag);
            1 === BitUtil.getBit(i, t - 1) && egret.setTimeout(function() {
                Alarm.show("当前系列关卡已经全部完成,点击确认返回主面板",
                function() {
                    e.dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
                })
            },
            this, 0)
        },
        e.prototype.UpEnergyMsg = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.CZLSC, [9, t])["catch"](function() {
                            throw new Error("常长老兑换输出出错 choice ====" + t)
                        })];
                    case 1:
                        return e = i.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return i.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e
    } (BasicMgrData);
    t.MgrData = e,
    __reflect(e.prototype, "pveAiXiaLa.MgrData")
} (pveAiXiaLa || (pveAiXiaLa = {}));
var pveAiXiaLa; !
function(t) {
    function e(t, e) {
        t.forEach(function(t, i) {
            Object.keys(e[i].from).forEach(function(n) {
                t[n] = e[i].from[n]
            })
        })
    }
    t.setDisplayProps = e
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemXInWuSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.juxing,
            function() {
                PayManager.doPayFunc(function() {
                    for (var i = 0,
                    n = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level2_state), a = 1; 4 >= a; a++) KTool.getBit(n, a) && i++;
                    t.MgrData.getInstance().checkLevelStar() ? KTool.buyProductByCallback(253798 + i, 1,
                    function() {
                        SocketConnection.sendByQueue(42373, [5, e._data.idx],
                        function() {
                            t.MgrData.getInstance().updateValues().then(function() {
                                e._data.flag = !0,
                                e.update(e._data),
                                e.parent.parent.parent.update()
                            })
                        })
                    }) : Alert.show("每天仅能挑战一个关卡，你确定要开始挑战此关卡吗",
                    function() {
                        t.MgrData.getInstance().openLevel(2).then(function() {
                            KTool.buyProductByCallback(253798 + i, 1,
                            function() {
                                SocketConnection.sendByQueue(42373, [5, e._data.idx],
                                function() {
                                    t.MgrData.getInstance().updateValues().then(function() {
                                        e._data.flag = !0,
                                        e.update(e._data),
                                        e.parent.parent.parent.update()
                                    })
                                })
                            })
                        })
                    })
                },
                e)
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.update = function(t) {
            var e = t.flag,
            i = t.name,
            n = t.source;
            t.idx;
            this.icon.source = e ? n: null,
            this.txtItem.text = i,
            this.txtItem.visible = e,
            this.cyxs.visible = e,
            this.daifaxian.visible = !e,
            this.juxing.visible = !e,
            this._data = t
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.ItemXinWu = e,
    __reflect(e.prototype, "pveAiXiaLa.ItemXinWu")
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PveAiXiaLaLeveltaskSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this.list_view.dataProvider;
            e.removeAll(),
            this.list_view.itemRenderer = t.HeadRender,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose_1,
            function() {
                t._customData.closeCallBack()
            },
            this),
            this.list_view.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTap, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.list_view.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTap, this)
        },
        i.prototype.setData = function(t) {
            this._customData = t
        },
        i.prototype.onTouchTap = function(t) {
            this._customData.onSelcteHead(t.item)
        },
        i.prototype.setShow = function(t) {
            this._curentData = t,
            this.update()
        },
        i.prototype.update = function() {
            var e = this._curentData,
            i = this.list_view.dataProvider;
            i.removeAll(),
            i.replaceAll(this.getListData(e)),
            this.src_head.validateNow();
            var n = 10,
            a = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level_state);
            a = a >> 4 * (e.cnt - 1) & 15,
            this.txtRound.text = "剩余回合数：" + (n - a),
            this.t3.source = "pve_ai_xia_la_leveltask_t" + (e.idx + 1) + "_png";
            var s = e.idx;
            if (2 != s) for (var r = 0; r < i.length; r++) if (!i.getItemAt(r).bossFlag) {
                this.list_view.selectedIndex = r;
                break
            }
        },
        i.prototype.getListData = function(e) {
            for (var i = e.idx,
            n = (e.sflag, e.fflag, e.cnt, e.cflag, e.bossInfo), a = [], s = 0; s < n.length; s++) a.push({
                boss: n[s].boss,
                isLast: s === n.length - 1,
                idx: i,
                bossFlag: BitUtil.getBit(t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level_state), n[s].flag - 1),
                enabled: 2 === i,
                info: n[s]
            });
            if (2 != i) for (var s = 0; s < a.length; s++) if (!a[s].bossFlag) {
                a[s].enabled = !0;
                break
            }
            return a
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level1TaskInfo = e,
    __reflect(e.prototype, "pveAiXiaLa.Level1TaskInfo")
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.HeadRenderSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            var t = this.data,
            e = t.boss,
            i = t.isLast,
            n = (t.idx, t.bossFlag),
            a = t.enabled;
            this.jiantou.visible = !i,
            this.icon.source = ClientConfig.getPetHeadPath(e),
            this.touchEnabled = this.touchChildren = a,
            this.yzs.visible = n
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                this.s.visible = t,
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i
    } (eui.ItemRenderer);
    t.HeadRender = e,
    __reflect(e.prototype, "pveAiXiaLa.HeadRender")
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.init({
                main: {
                    panel: t.Main,
                    isMain: !0
                },
                level1: {
                    panel: t.Level1
                },
                level2: {
                    panel: t.Level2
                },
                level3: {
                    panel: t.Level3
                },
                level4: {
                    panel: t.Level4
                },
                upEnergy: {
                    panel: t.UpEnergy
                }
            },
            t.MgrData.getInstance()),
            i
        }
        return __extends(i, e),
        i.prototype.initlized = function() {
            var e = this;
            t.MgrData.getInstance().updateValues().then(function() {
                e.openPanel("main")
            })
        },
        i
    } (BasicMainPanel);
    t.PveAiXiaLa = e,
    __reflect(e.prototype, "pveAiXiaLa.PveAiXiaLa")
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._bossConfigure = [{
                battle: 13278,
                boss: 3185,
                desc: "若能成功抓捕这名大暗黑天成员，将有机会随机获得一枚“常”长老的信物"
            },
            {
                battle: 13279,
                boss: 1480,
                desc: "若能成功抓捕这名大暗黑天成员，将有机会随机获得一枚“常”长老的信物"
            },
            {
                battle: 13280,
                boss: 2593,
                desc: "若能成功抓捕这名大暗黑天成员，将有机会随机获得一枚“常”长老的信物"
            },
            {
                battle: 13281,
                boss: 2637,
                desc: "若能成功抓捕这名大暗黑天成员，将有机会随机获得一枚“常”长老的信物"
            },
            {
                battle: 13282,
                boss: 3204,
                desc: "若能成功抓捕这名大暗黑天成员，将有机会随机获得一枚“常”长老的信物"
            },
            {
                battle: 13283,
                boss: 2823,
                desc: "若能成功抓捕这名大暗黑天成员，将有机会随机获得一枚“常”长老的信物"
            },
            {
                battle: 13284,
                boss: 3608,
                desc: "若能成功抓捕这名大暗黑天成员，将有机会随机获得一枚“常”长老的信物"
            },
            {
                battle: 13285,
                boss: 3573,
                desc: "若能成功抓捕这名大暗黑天成员，将有机会随机获得一枚“常”长老的信物"
            }],
            i._aniChechList = [],
            i.skinName = t.PveAiXiaLaLevel2Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210730版本系统功能", "艾夏拉关卡", "进入第二关身份之谜面板"),
            this.initOldPveBtnClose(0, this, "pve_ai_xia_la_level2_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this._offset = new egret.Point(this.selected.x - this.b1.x, this.selected.y - this.b2.y),
            this.addEvents(),
            this._aniChechList.push(common.TweenUtil.cacheProp(this.grpBack, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.battleCount, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.grpCards, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.grpContent, ["right", "center", "left", "x", "y", "alpha"]))
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFight,
            function() {
                return e._halfCnt <= 0 ? void Alarm.show("今日次数不足,请明日再来") : e._currentId > 0 ? void e.openPop() : void(t.MgrData.getInstance().checkLevelStar() ? e.chooseBoss() : Alert.show("每天仅能挑战一个关卡，你确定要开始挑战此关卡吗",
                function() {
                    t.MgrData.getInstance().openLevel(2).then(function() {
                        e.chooseBoss()
                    })
                }))
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.beforeAdd = function() {},
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            var e = this;
            t.MgrData.getInstance().checkCompleteLevel(2);
            var i = t.MgrData.getInstance().getValue(AttrConst.daily_czlsc_level2_state),
            n = 255 & i;
            this._halfCnt = 5 - n,
            this.txtCount.text = this._halfCnt + "/5",
            this._currentId = i >> 8 & 255,
            this._currentId > 0 && this.openPop();
            var a = [this.b1, this.b2, this.b3, this.b4, this.b5, this.b6, this.b7, this.b8];
            this.selected.visible = !1,
            a.forEach(function(t, i) {
                e._currentId - 1 === i ? (t.alpha = 1, e.selected.visible = !0, e.selected.x = t.x + e._offset.x, e.selected.y = t.y + e._offset.y) : t.alpha = .7
            });
            for (var s = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level2_state), r = [{
                name: "老旧的照片",
                source: "pve_ai_xia_la_level2_xiansuo_1_png"
            },
            {
                name: "精致的镜子",
                source: "pve_ai_xia_la_level2_xiansuo_2_png"
            },
            {
                name: "玩具剑",
                source: "pve_ai_xia_la_level2_xiansuo_3_png"
            },
            {
                name: "蛇形玉佩",
                source: "pve_ai_xia_la_level2_xiansuo_4_png"
            }], o = 0; 4 > o; o++) {
                var _ = this["xinwu" + o];
                _.update({
                    flag: Boolean(BitUtil.getBit(s, o)),
                    name: r[o].name,
                    source: r[o].source,
                    idx: o + 1
                })
            }
        },
        i.prototype.removed = function() {
            common.TweenUtil.removeDisplaysTweens([this.grpCards, this.grpContent, this.grpBack, this.battleCount])
        },
        i.prototype.playOpenAnimation = function() {
            this._aniChechList.forEach(function(t) {
                t.reset()
            });
            var e, i, n;
            e = this.grpBack.x;
            var a = {
                from: {
                    left: -60
                },
                target: {
                    left: 60
                }
            };
            n = this.battleCount.right;
            var s = {
                from: {
                    right: -this.grpBack.width
                },
                target: {
                    right: 29
                }
            };
            i = this.grpCards.y;
            var r = {
                from: {
                    y: .5 * -this.grpCards.height,
                    alpha: 0
                },
                target: {
                    y: 55,
                    alpha: 1
                }
            };
            i = this.grpContent.y;
            var o = {
                from: {
                    y: 640 + .5 * this.grpCards.height,
                    alpha: 0
                },
                target: {
                    y: 438,
                    alpha: 1
                }
            };
            t.setDisplayProps([this.grpBack, this.battleCount, this.grpContent, this.grpCards], [a, s, o, r]),
            egret.Tween.get(this.grpBack).to(a.target, 200),
            egret.Tween.get(this.battleCount).to(s.target, 200),
            egret.Tween.get(this.grpCards).wait(200).to(r.target, 200),
            egret.Tween.get(this.grpContent).wait(600).to(o.target, 200)
        },
        i.prototype.openPop = function() {
            var e = this,
            i = this._bossConfigure[this._currentId - 1],
            n = {
                petId: i.boss,
                pop: i.desc,
                fightCallBack: function(t, n) {
                    t.apply(n, null),
                    EventManager.addEventListener(PetFightEvent.ALARM_CLICK, e.onFightOver, e),
                    FightManager.fightNoMapBoss("", i.battle)
                },
                buyCallBack: function(i, n) {
                    i.apply(n, null),
                    KTool.buyProductByCallback(253802, 1,
                    function() {
                        SocketConnection.sendByQueue(42373, [6, e._currentId],
                        function() {
                            e.onFightOver(null),
                            t.MgrData.getInstance().updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                openClose: function() {
                    t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
                },
                caller: this
            },
            a = PopViewManager.createDefaultStyleObject();
            a.caller = this,
            a.clickMaskHandler = function() {},
            PopViewManager.getInstance().openView(new t.BattlePop, null, n)
        },
        i.prototype.onFightOver = function(e) {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this);
            var i = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level2_state);
            t.MgrData.getInstance().updateValues().then(function() {
                var e = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level2_state);
                i === e ? Alarm.show("你仔细地搜索了一番，但是没有发现什么有价值的东西。") : Alarm.show("恭喜你，获得了一个新信物!")
            })
        },
        i.prototype.chooseBoss = function() {
            var e = this;
            t.MgrData.getInstance().level2ChooseBoss().then(function() {
                e.update()
            })
        },
        i.prototype.destroy = function() {
            for (var t = 0; 4 > t; t++) this["xinwu" + t].destroy();
            this._aniChechList.forEach(function(t) {
                t.destroy()
            }),
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level2 = e,
    __reflect(e.prototype, "pveAiXiaLa.Level2", ["IPanel"])
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._aniChechList = [],
            i._configure = [{
                lvl: 1,
                round: 15,
                desc: "无",
                battle: 13286
            },
            {
                lvl: 2,
                round: 10,
                desc: "无",
                battle: 13287
            },
            {
                lvl: 3,
                round: 8,
                desc: "使用致命一击击败",
                battle: 13288
            },
            {
                lvl: 4,
                round: 5,
                desc: "在满血状态下击败",
                battle: 13289
            },
            {
                lvl: 5,
                round: 3,
                desc: "使用属性技能击败",
                battle: 13290
            },
            {
                lvl: 5,
                round: 3,
                desc: "使用属性技能击败",
                battle: 13290
            }],
            i.skinName = t.PveAiXiaLaLevel3Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210730版本系统功能", "艾夏拉关卡", "进入第三关长老威严面板"),
            this.initOldPveBtnClose(0, this, "pve_ai_xia_la_level3_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.addEvents(),
            this._aniChechList.push(common.TweenUtil.cacheProp(this.grpBack, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.GrpRight, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.pet, ["right", "center", "left", "x", "y", "alpha"])),
            this.adaptLeftContent(this.btns)
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnOnefight,
            function() {
                t.MgrData.getInstance().checkLevelStar() ? PayManager.canPay() ? KTool.buyProductByCallback(253803 + e._currentIdx, 1,
                function() {
                    SocketConnection.sendByQueue(42373, [7, e._currentIdx + 1],
                    function() {
                        t.MgrData.getInstance().updateValues().then(function() {
                            e.update()
                        })
                    })
                }) : Alarm.show("暂未开放，敬请期待！") : Alert.show("每天仅能挑战一个关卡，你确定要开始挑战此关卡吗",
                function() {
                    t.MgrData.getInstance().openLevel(3).then(function() {
                        PayManager.canPay() ? KTool.buyProductByCallback(253803 + e._currentIdx, 1,
                        function() {
                            SocketConnection.sendByQueue(42373, [7, e._currentIdx + 1],
                            function() {
                                t.MgrData.getInstance().updateValues().then(function() {
                                    e.update()
                                })
                            })
                        }) : Alarm.show("暂未开放，敬请期待！")
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                t.MgrData.getInstance().checkLevelStar() ? e.battle() : Alert.show("每天仅能挑战一个关卡，你确定要开始挑战此关卡吗",
                function() {
                    t.MgrData.getInstance().openLevel(3).then(function() {
                        e.update(),
                        e.battle()
                    })
                })
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.beforeAdd = function() {},
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            t.MgrData.getInstance().checkCompleteLevel(3);
            var e = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level2_state);
            e = e >> 8 & 255,
            this._currentIdx = e;
            var i = [this.star, this.star_2, this.star_3, this.star_4, this.unstar_];
            i.forEach(function(t, i) {
                e >= i ? t.source = "pve_ai_xia_la_level3_star_png": t.source = "pve_ai_xia_la_level3_unstar__png"
            }),
            this.txtHH.text = this._configure[e].round + "回合",
            this.txtYq.text = this._configure[e].desc
        },
        i.prototype.battle = function() {
            FightManager.fightNoMapBoss("", this._configure[this._currentIdx].battle)
        },
        i.prototype.removed = function() {
            common.TweenUtil.removeDisplaysTweens([this.grpBack, this.GrpRight, this.pet])
        },
        i.prototype.playOpenAnimation = function() {
            this._aniChechList.forEach(function(t) {
                t.reset()
            });
            var e, i;
            e = this.grpBack.x;
            var n = {
                from: {
                    left: -60
                },
                target: {
                    left: 60
                }
            };
            i = this.GrpRight.right;
            var a = {
                from: {
                    right: .5 * -this.GrpRight.width,
                    alpha: 0
                },
                target: {
                    right: 2,
                    alpha: 1
                }
            };
            e = this.pet.x;
            var s = {
                from: {
                    x: .5 * -this.pet.width,
                    alpha: 0
                },
                target: {
                    x: 0,
                    alpha: 1
                }
            };
            t.setDisplayProps([this.grpBack, this.pet, this.GrpRight], [n, s, a]),
            egret.Tween.get(this.pet).to(s.target, 200),
            egret.Tween.get(this.grpBack).to(n.target, 200),
            egret.Tween.get(this.GrpRight).wait(200).to(a.target, 200)
        },
        i.prototype.destroy = function() {
            this._aniChechList.forEach(function(t) {
                t.destroy()
            }),
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level3 = e,
    __reflect(e.prototype, "pveAiXiaLa.Level3", ["IPanel"])
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._aniChechList = [],
            i._configure = [{
                battle: 13291,
                boss: 3592,
                desc: "与这名长老进行战斗并在20回合后将其击败，即可引发他的力量灌注至封印之内",
                cflag: 1
            },
            {
                battle: 13292,
                boss: 3575,
                desc: "与这名长老进行战斗并在20回合后将其击败，即可引发他的力量灌注至封印之内",
                cflag: 2
            },
            {
                battle: 13293,
                boss: 3665,
                desc: "与这名长老进行战斗并在20回合后将其击败，即可引发他的力量灌注至封印之内",
                cflag: 3
            },
            {
                battle: 13294,
                boss: 3217,
                desc: "与这名长老进行战斗并在20回合后将其击败，即可引发他的力量灌注至封印之内",
                cflag: 4
            },
            {
                battle: 13295,
                boss: 3214,
                desc: "与这名长老进行战斗并在20回合后将其击败，即可引发他的力量灌注至封印之内",
                cflag: 5
            },
            {
                battle: 13296,
                boss: 3554,
                desc: "与这名长老进行战斗并在20回合后将其击败，即可引发他的力量灌注至封印之内",
                cflag: 6
            }],
            i.skinName = t.PveAiXiaLaLevel4Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210730版本系统功能", "艾夏拉关卡", "进入第四关打开封印面板"),
            this.initOldPveBtnClose(0, this, "pve_ai_xia_la_level4_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.addEvents(),
            this._aniChechList.push(common.TweenUtil.cacheProp(this.grpBack, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.grpDown, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.grpCard, ["right", "center", "left", "x", "y", "alpha"]))
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnOne,
            function() {
                PayManager.doPayFunc(function() {
                    t.MgrData.getInstance().checkLevelStar() ? KTool.buyProductByCallback(253808, 1,
                    function() {
                        SocketConnection.sendByQueue(42373, [8, 7],
                        function() {
                            t.MgrData.getInstance().updateValues().then(function() {
                                e.update()
                            })
                        })
                    }) : Alert.show("每天仅能挑战一个关卡，你确定要开始挑战此关卡吗",
                    function() {
                        t.MgrData.getInstance().openLevel(4).then(function() {
                            KTool.buyProductByCallback(253808, 1,
                            function() {
                                SocketConnection.sendByQueue(42373, [8, 7],
                                function() {
                                    t.MgrData.getInstance().updateValues().then(function() {
                                        e.update()
                                    })
                                })
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFix,
            function() {
                if (e._dailyUseCnt >= 1) return void Alarm.show("今日次数已用完，请明日再来");
                var i = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_flag);
                t.MgrData.getInstance().level4Open().then(function() {
                    i === t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_flag) && Alarm.show("打开封印失败，下次打开封印的概率增加"),
                    e.update()
                })
            },
            this);
            var i = [this.a_1d, this.a_2d, this.a_3d, this.a_4d, this.a_5d, this.a_6d];
            i.forEach(function(i, n) {
                ImageButtonUtil.add(i,
                function() {
                    t.MgrData.getInstance().checkLevelStar() ? e.openPop(n) : Alert.show("每天仅能挑战一个关卡，你确定要开始挑战此关卡吗",
                    function() {
                        t.MgrData.getInstance().openLevel(4).then(function() {
                            e.openPop(n)
                        })
                    })
                },
                e)
            })
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.beforeAdd = function() {},
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            var e = this;
            t.MgrData.getInstance().checkCompleteLevel(4),
            this._dailyUseCnt = t.MgrData.getInstance().getValue(AttrConst.daily_czlsc_level2_state) >> 16 & 255;
            var i = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_level4_state),
            n = [this.a_1l, this.a_2l, this.a_3l, this.a_4l, this.a_5l, this.a_6l],
            a = [this.a_1d, this.a_2d, this.a_3d, this.a_4d, this.a_5d, this.a_6d],
            s = 0;
            n.forEach(function(t, n) {
                t.touchEnabled = !1;
                var r = Boolean(BitUtil.getBit(i, n));
                t.visible = r,
                a[n].touchEnabled = !r && e._dailyUseCnt < 1,
                r && s++
            });
            var r = [this.shuijing, this.shuijing_2, this.shuijing_3, this.unshuijing, this.unshuijing_2, this.unshuijing_3];
            r.forEach(function(t, e) {
                t.source = s > e ? "pve_ai_xia_la_level4_shuijing_png": "pve_ai_xia_la_level4_unshuijing_png"
            });
            var o = i >> 8 & 255,
            _ = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            l = Math.min(o, _.length - 1);
            this.a_090.text = _[l] + "%";
            var u = 6 === s;
            DisplayUtil.setEnabled(this.btnFix, u, !u)
        },
        i.prototype.removed = function() {
            common.TweenUtil.removeDisplaysTweens([this.grpBack, this.grpCard, this.grpDown])
        },
        i.prototype.playOpenAnimation = function() {
            this._aniChechList.forEach(function(t) {
                t.reset()
            });
            var e, i;
            e = this.grpBack.x;
            var n = {
                from: {
                    left: -60
                },
                target: {
                    left: 60
                }
            };
            i = this.grpCard.y;
            var a = {
                from: {
                    y: .5 * -this.grpCard.height,
                    alpha: 0
                },
                target: {
                    y: 73,
                    alpha: 1
                }
            };
            i = this.grpDown.y;
            var s = {
                from: {
                    y: 640 + .5 * this.grpDown.height,
                    alpha: 0
                },
                target: {
                    y: 470,
                    alpha: 1
                }
            };
            t.setDisplayProps([this.grpBack, this.grpCard, this.grpDown], [n, a, s]),
            egret.Tween.get(this.grpBack).to(n.target, 200),
            egret.Tween.get(this.grpCard).wait(200).to(a.target, 200),
            egret.Tween.get(this.grpDown).wait(600).to(s.target, 200)
        },
        i.prototype.openPop = function(e) {
            var i = this,
            n = this._configure[e],
            a = {
                petId: n.boss,
                pop: n.desc,
                fightCallBack: function(t, e) {
                    t.apply(e, null),
                    FightManager.fightNoMapBoss("", n.battle)
                },
                buyCallBack: function(n, a) {
                    n.apply(a, null),
                    KTool.buyProductByCallback(253809, 1,
                    function() {
                        SocketConnection.sendByQueue(42373, [8, e + 1],
                        function() {
                            t.MgrData.getInstance().updateValues().then(function() {
                                i.update()
                            })
                        })
                    })
                },
                caller: this
            },
            s = PopViewManager.createDefaultStyleObject();
            s.caller = this,
            s.clickMaskHandler = function() {},
            PopViewManager.getInstance().openView(new t.BattlePop, null, a)
        },
        i.prototype.destroy = function() {
            this._aniChechList.forEach(function(t) {
                t.destroy()
            }),
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level4 = e,
    __reflect(e.prototype, "pveAiXiaLa.Level4", ["IPanel"])
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._petState = -1,
            t._aniChechList = [],
            t.skinName = "pveAiXiaLa.PveAiXiaLaMainSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(41, this, "",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_CLOSE_MODULE)
            },
            this),
            StatLogger.log("20210730版本系统功能", "艾夏拉关卡", "进入艾夏拉关卡面板"),
            this.animHuoyan = DragonbonesUtil.createAnimate("aixiala_ske_json", "aixiala_tex_json", "aixiala_tex_png", "aixiala"),
            this.animLizi = DragonbonesUtil.createAnimate("aixiala_ske_json", "aixiala_tex_json", "aixiala_tex_png", "aixiala"),
            this.animShandian1 = DragonbonesUtil.createAnimate("aixiala_ske_json", "aixiala_tex_json", "aixiala_tex_png", "aixiala"),
            this.animShandian2 = DragonbonesUtil.createAnimate("aixiala_ske_json", "aixiala_tex_json", "aixiala_tex_png", "aixiala"),
            this.animHuoyan.x = this.animLizi.x = 280,
            this.animHuoyan.y = this.animLizi.y = 640,
            this.animShandian1.x = 160,
            this.animShandian1.y = this.animShandian2.y = 280,
            this.animShandian2.scaleX = -1,
            this.animShandian2.x = 450,
            this.addChild(this.animHuoyan),
            this.addChild(this.animLizi),
            this.addChild(this.animShandian1),
            this.addChild(this.animShandian2),
            this.animHuoyan.animation.play("huoyan", 0),
            this.animLizi.animation.play("lizi", 0),
            this.animShandian1.animation.play("shandian", 0),
            this.animShandian2.animation.play("shandian", 0),
            this.addChild(this.btnBuy),
            this.addEvents(),
            this._aniChechList.push(common.TweenUtil.cacheProp(this.pet, ["x", "alpha"]), common.TweenUtil.cacheProp(this.title, ["y", "alpha"]), common.TweenUtil.cacheProp(this.grpBack, ["x"]), common.TweenUtil.cacheProp(this.btnInfo, ["y"]), common.TweenUtil.cacheProp(this.btnBuy, ["y"]), common.TweenUtil.cacheProp(this.levelBtns, ["y"]))
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3673)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                switch (e._petState) {
                case 0:
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(253788 + e.levComplete, 1,
                        function() {
                            t.MgrData.getInstance().getPet(e.levComplete).then(function() {
                                e.update()
                            })
                        })
                    },
                    e);
                    break;
                case 1:
                    StatLogger.log("20210730版本系统功能", "艾夏拉关卡", "点击领取艾夏拉"),
                    t.MgrData.getInstance().getPet(4).then(function() {
                        e.update()
                    });
                    break;
                case 2:
                    t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_OPEN_PANEL, !1, "upEnergy")
                }
            },
            this),
            ImageButtonUtil.add(this.level1,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_OPEN_PANEL, !1, "level1")
            },
            this),
            ImageButtonUtil.add(this.level2,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_OPEN_PANEL, !1, "level2")
            },
            this),
            ImageButtonUtil.add(this.level3,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_OPEN_PANEL, !1, "level3")
            },
            this),
            ImageButtonUtil.add(this.level4,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_OPEN_PANEL, !1, "level4")
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.beforeAdd = function() {},
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            for (var e = this,
            i = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_flag), n = t.MgrData.getInstance().getValue(AttrConst.daily_czlsc_selected_flag), a = 0, s = 0; 4 > s; s++) if (1 === BitUtil.getBit(n, s)) {
                a = s + 1;
                break
            }
            var r = [this.level1, this.level2, this.level3, this.level4],
            o = [this.tag0, this.tag1, this.tag2, this.tag3];
            this.levComplete = 0,
            r.forEach(function(t, n) {
                var s = Boolean(BitUtil.getBit(i, n));
                s ? (e.levComplete++, t.touchEnabled = !1, t.alpha = .5, o[n].visible = !0, o[n].source = "pve_ai_xia_la-main_done_png") : 0 === a ? (t.touchEnabled = !0, t.alpha = 1, o[n].visible = !1) : a === n + 1 ? (t.touchEnabled = !0, t.alpha = 1, o[n].visible = !1) : (t.touchEnabled = !1, t.alpha = .5, o[n].visible = !0, o[n].source = "pve_ai_xia_la-main_tm_png")
            });
            var _ = Boolean(BitUtil.getBit(i, 4));
            this._petState = 0,
            this.txtLabel.text = "至尊获得",
            _ ? (this._petState = 2, this.txtLabel.text = "能力提升") : 4 === this.levComplete && (this.txtLabel.text = "领取精灵", this._petState = 1)
        },
        i.prototype.removed = function() {
            common.TweenUtil.removeDisplaysTweens([this.pet, this.title, this.btnInfo, this.btnBuy, this.grpBack, this.levelBtns])
        },
        i.prototype.playOpenAnimation = function() {
            this._aniChechList.forEach(function(t) {
                t.reset()
            });
            var e, i;
            e = this.pet.x;
            var n = {
                from: {
                    x: .5 * -this.pet.width,
                    alpha: 0
                },
                target: {
                    x: 0,
                    alpha: 1
                }
            };
            i = this.title.y;
            var a = {
                from: {
                    y: this.title.parent.globalToLocal(0, .5 * -this.title.height).y,
                    alpha: 0
                },
                target: {
                    y: 0,
                    alpha: 1
                }
            };
            e = this.grpBack.x;
            var s = {
                from: {
                    left: -60
                },
                target: {
                    left: 60
                }
            };
            i = this.btnBuy.y;
            var r = {
                from: {
                    y: this.btnBuy.parent.globalToLocal(0, this.grpBack.height + 640).y
                },
                target: {
                    y: 535
                }
            };
            i = this.btnInfo.y;
            var o = {
                from: {
                    y: this.btnInfo.height + 640
                },
                target: {
                    y: 537
                }
            };
            i = this.levelBtns.y;
            var _ = {
                from: {
                    y: this.levelBtns.parent.globalToLocal(0, this.levelBtns.height + 640).y,
                    alpha: 0
                },
                target: {
                    y: 253,
                    alpha: 1
                }
            };
            t.setDisplayProps([this.pet, this.title, this.btnInfo, this.btnBuy, this.grpBack, this.levelBtns], [n, a, o, r, s, _]),
            egret.Tween.get(this.pet).to(n.target, 200),
            egret.Tween.get(this.title).to(a.target, 200),
            egret.Tween.get(this.grpBack).wait(200).to(s.target, 200),
            egret.Tween.get(this.btnInfo).wait(200).to(o.target, 200),
            egret.Tween.get(this.btnBuy).wait(200).to(r.target, 200),
            egret.Tween.get(this.levelBtns).wait(600).to(_.target, 200)
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this._aniChechList.forEach(function(t) {
                t.destroy()
            }),
            this.animHuoyan.dispose(),
            this.animLizi.dispose(),
            this.animShandian1.dispose(),
            this.animShandian2.dispose(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Main = e,
    __reflect(e.prototype, "pveAiXiaLa.Main", ["IPanel"])
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._aniChechList = [],
            i._petCheckId = 3673,
            i._useItemId = 1717252,
            i._effId = 959,
            i._skillID = 32341,
            i._markId = 41300,
            i.bossArry = [{
                battle: 13297,
                show: 2920,
                cnt: 1
            },
            {
                battle: 13298,
                show: 2663,
                cnt: 1
            },
            {
                battle: 13299,
                show: 1906,
                cnt: 1
            },
            {
                battle: 13300,
                show: 1750,
                cnt: 1
            },
            {
                battle: 13301,
                show: 1813,
                cnt: 2
            },
            {
                battle: 13302,
                show: 2082,
                cnt: 2
            },
            {
                battle: 13303,
                show: 2685,
                cnt: 2
            },
            {
                battle: 13304,
                show: 3135,
                cnt: 2
            },
            {
                battle: 13305,
                show: 3100,
                cnt: 3
            },
            {
                battle: 13306,
                show: 3423,
                cnt: 3
            }],
            i.skinName = t.PveAiXiaLaUpenergySkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210730版本系统功能", "艾夏拉关卡", "进入能力提升面板"),
            this.initOldPveBtnClose(0, this, "pve_ai_xia_la_level5_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.grpLeftAni.anchorOffsetX = .5 * this.grpLeftAni.width,
            this.grpLeftAni.anchorOffsetY = .5 * this.grpLeftAni.height,
            this.grpLeftAni.x += this.grpLeftAni.anchorOffsetX,
            this.grpLeftAni.y += this.grpLeftAni.anchorOffsetY,
            this.addEvents(),
            this._aniChechList.push(common.TweenUtil.cacheProp(this.grpBack, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.grpRightTop, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.grpLeftAni, ["right", "center", "left", "x", "y", "alpha", "scaleX", "scaleY"]), common.TweenUtil.cacheProp(this.grpRightDown, ["right", "center", "left", "x", "y", "alpha"]), common.TweenUtil.cacheProp(this.title, ["right", "center", "left", "x", "y", "alpha"]))
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnOk, core.gameUtil.throttle(function() {
                if (e._halfBattleCnt <= 0 && e._isStartFlag) return void Alarm.show("今日次数不足");
                var t = e._currentIdx;
                FightManager.fightNoMapBoss("", e._currentBossInfo.battle, !1, !0,
                function() {
                    t === e.bossArry.length && FightManager.isWin && Alarm.show("恭喜你击败了全部对手，完成了本轮试炼！")
                })
            },
            this, 1e3, !0), this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProduct("253810_11623",
                function() {
                    t.MgrData.getInstance().updateValues().then(function() {
                        e.update()
                    })
                },
                e, 1717252)
            },
            this),
            ImageButtonUtil.add(this.btnFix,
            function() {
                e.doExchange(10, 1)
            },
            this),
            ImageButtonUtil.add(this.btnFix_3,
            function() {
                e.doExchange(25, 3)
            },
            this),
            ImageButtonUtil.add(this.btnFix_2,
            function() {
                e.doExchange(15, 2)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var t = {};
                t.id = e._skillID,
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_texing,
            function() {
                var t = [EffectIconControl.getConfigById(e._effId)];
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.icon_3,
            function() {
                var t = {};
                t.ins = e._markId,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.beforeAdd = function() {},
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            var e = this,
            i = t.MgrData.getInstance().getValue(AttrConst.forever_czlsc_flag),
            n = t.MgrData.getInstance().getValue(AttrConst.daily_czlsc_upenergy_progress),
            a = t.MgrData.getInstance().getValue(AttrConst.daily_czlsc_upenergy_cnt);
            this.txtLabel.text = 0 === n ? "开始试炼": "继续试炼";
            var s = this.bossArry[n];
            this._currentBossInfo = s,
            this._isStartFlag = 0 === n;
            var r = 10;
            this.txtRound.text = "第" + (n + 1) + "/" + r + "轮",
            this.txtitemCount.text = "常字令x" + s.cnt,
            this.txtCnt.text = 2 - a + "/2",
            this.txtPet.text = PetXMLInfo.getName(s.show),
            RES.getResByUrl(ClientConfig.getfightPetPng(s.show + ""),
            function(t, i) {
                e.pet.source = t,
                e.pet.anchorOffsetX = .5 * t.textureWidth,
                e.pet.anchorOffsetY = t.textureHeight,
                e.pet.x = e.pet.y = 0
            },
            this);
            var o = Boolean(BitUtil.getBit(i, 5)),
            _ = Boolean(BitUtil.getBit(i, 6)),
            l = Boolean(BitUtil.getBit(i, 7));
            this.btnFix.visible = !o,
            this.flagMark.visible = o,
            this.btnFix_2.visible = !_,
            this.flagSkill.visible = _,
            this.btnFix_3.visible = !l,
            this.flagTexing.visible = l,
            this.onUpdateByItemChangeEvent()
        },
        i.prototype.doExchange = function(e, i) {
            var n = this,
            a = ItemManager.getNumByID(this._useItemId);
            if (e > a) return void Alarm.show("道具数量不足!");
            if (!PetManager.isDefaultPet(this._petCheckId)) {
                var s = PetXMLInfo.getName(this._petCheckId);
                return void Alarm.show("请先将" + s + "设为首发位置!",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            }
            t.MgrData.getInstance().UpEnergyMsg(i).then(function() {
                BubblerManager.getInstance().showText("兑换成功"),
                n.update()
            })["catch"](function(t) {
                console.warn(t.sta)
            })
        },
        i.prototype.removed = function() {
            common.TweenUtil.removeDisplaysTweens([this.grpBack, this.grpRightTop, this.grpLeftAni, this.title, this.grpRightDown])
        },
        i.prototype.playOpenAnimation = function() {
            this._aniChechList.forEach(function(t) {
                t.reset()
            });
            var e, i, n;
            e = this.grpBack.x;
            var a = {
                from: {
                    left: -60
                },
                target: {
                    left: 60
                }
            };
            n = this.grpRightTop.right;
            var s = {
                from: {
                    right: -this.grpRightTop.width
                },
                target: {
                    right: 29
                }
            },
            r = {
                from: {
                    scaleX: 0,
                    scaleY: 0
                },
                target: {
                    scaleX: 1,
                    scaleY: 1
                }
            };
            i = this.title.y;
            var o = {
                from: {
                    y: .5 * -this.title.height,
                    alpha: 0
                },
                target: {
                    y: 92,
                    alpha: 1
                }
            };
            i = this.grpRightDown.y;
            var _ = {
                from: {
                    y: 640 + .5 * this.grpRightDown.height,
                    alpha: 0
                },
                target: {
                    y: 252,
                    alpha: 1
                }
            };
            t.setDisplayProps([this.grpBack, this.grpRightTop, this.grpLeftAni, this.title, this.grpRightDown], [a, s, r, o, _]),
            egret.Tween.get(this.grpBack).to(a.target, 200),
            egret.Tween.get(this.grpRightTop).to(s.target, 200),
            egret.Tween.get(this.grpLeftAni).wait(200).to(r.target, 200),
            egret.Tween.get(this.title).wait(600).to(o.target, 200),
            egret.Tween.get(this.grpRightDown).wait(600).to(_.target, 200)
        },
        i.prototype.onUpdateByItemChangeEvent = function(t) {
            void 0 === t && (t = null),
            this.txtItem.text = ItemManager.getNumByID(this._useItemId) + ""
        },
        i.prototype.destroy = function() {
            this._aniChechList.forEach(function(t) {
                t.destroy()
            }),
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.UpEnergy = e,
    __reflect(e.prototype, "pveAiXiaLa.UpEnergy", ["IPanel"])
} (pveAiXiaLa || (pveAiXiaLa = {}));
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
pveAiXiaLa; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PveAiXiaLaBattlePopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnBuy, this.onTouchButton, this),
            ImageButtonUtil.add(this.btnFight, this.onTouchButton, this),
            ImageButtonUtil.add(this.imgBtn_cure, this.onTouchButton, this),
            ImageButtonUtil.add(this.imgBtn_pet, this.onTouchButton, this),
            ImageButtonUtil.add(this.btnClose, this.onTouchButton, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._myData = this._data
        },
        i.prototype._upDateView = function() {
            var t = this,
            e = this._myData.petId;
            RES.getResByUrl(ClientConfig.getfightPetPng(e + ""),
            function(e, i) {
                t.petStyle.source = e,
                t.petStyle.anchorOffsetX = .5 * e.textureWidth,
                t.petStyle.anchorOffsetY = e.textureHeight,
                t.petStyle.x = t.petStyle.y = 0
            },
            this),
            this.txtNick.text = PetXMLInfo.getName(e);
            var i = StringUtil.str2Html(this._myData.pop);
            "string" == typeof i ? this.txtDesc.text = i: this.txtDesc.textFlow = i
        },
        i.prototype.onTouchButton = function(t) {
            var e = this,
            i = this._myData.fightCallBack,
            n = this._myData.buyCallBack,
            a = this._myData.caller;
            switch (t.currentTarget) {
            case this.btnBuy:
                PayManager.doPayFunc(function() {
                    n.apply(a, [e.hide, e])
                },
                this);
                break;
            case this.btnFight:
                i.apply(a, [this.hide, this]);
                break;
            case this.imgBtn_cure:
                PetManager.cureAll();
                break;
            case this.imgBtn_pet:
                this.hide(),
                ModuleManager.showModuleByID(10);
                break;
            case this.btnClose:
                this.hide(),
                this._myData.openClose && this._myData.openClose.apply(a, null)
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.BattlePop = e,
    __reflect(e.prototype, "pveAiXiaLa.BattlePop")
} (pveAiXiaLa || (pveAiXiaLa = {})),
window.pveAiXiaLa = window.pveAiXiaLa || {};
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
generateEUI.paths["resource/eui_skins/comp/ItemXInWuSkin.exml"] = window.pveAiXiaLa.ItemXInWuSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["itemkuang", "icon", "txtItem", "cyxs", "daifaxian", "juxing"],
        this.height = 104,
        this.width = 80,
        this.elementsContent = [this.itemkuang_i(), this.icon_i(), this.txtItem_i(), this.cyxs_i(), this.daifaxian_i(), this.juxing_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.itemkuang_i = function() {
        var t = new eui.Image;
        return this.itemkuang = t,
        t.source = "pve_ai_xia_la_level2_itemkuang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "pve_ai_xia_la_level2_icon_png",
        t.visible = !0,
        t.x = 21,
        t.y = 26,
        t
    },
    i.txtItem_i = function() {
        var t = new eui.Label;
        return this.txtItem = t,
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "老旧的照片",
        t.textColor = 10385393,
        t.visible = !0,
        t.y = 88,
        t
    },
    i.cyxs_i = function() {
        var t = new eui.Label;
        return this.cyxs = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "重要线索",
        t.textColor = 15520511,
        t.visible = !0,
        t.x = 8,
        t.y = 1,
        t
    },
    i.daifaxian_i = function() {
        var t = new eui.Image;
        return this.daifaxian = t,
        t.source = "pve_ai_xia_la_level2_daifaxian_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.juxing_i = function() {
        var t = new eui.Image;
        return this.juxing = t,
        t.source = "pve_ai_xia_la_level2_juxing_asd_png",
        t.visible = !0,
        t.x = 39,
        t.y = 39,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/PveAiXiaLaLeveltaskSkin.exml"] = window.pveAiXiaLa.PveAiXiaLaLeveltaskSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["mubiaobg_2", "txtRound", "btnClose_1", "t3", "list_view", "src_head"],
        this.height = 299,
        this.width = 585,
        this.elementsContent = [this.mubiaobg_2_i(), this.txtRound_i(), this.btnClose_1_i(), this.t3_i(), this.src_head_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.mubiaobg_2_i = function() {
        var t = new eui.Image;
        return this.mubiaobg_2 = t,
        t.source = "pve_ai_xia_la_leveltask_mubiaobg_2_png",
        t.x = 66,
        t.y = 10,
        t
    },
    i.txtRound_i = function() {
        var t = new eui.Label;
        return this.txtRound = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20.0215074787369,
        t.text = "剩余回合数：20",
        t.textColor = 16777215,
        t.x = 75,
        t.y = 18,
        t
    },
    i.btnClose_1_i = function() {
        var t = new eui.Image;
        return this.btnClose_1 = t,
        t.source = "pve_ai_xia_la_leveltask_btnClose_1_png",
        t.x = 521,
        t.y = 0,
        t
    },
    i.t3_i = function() {
        var t = new eui.Image;
        return this.t3 = t,
        t.bottom = 0,
        t.source = "pve_ai_xia_la_leveltask_t3_png",
        t.x = 0,
        t
    },
    i.src_head_i = function() {
        var t = new eui.Scroller;
        return this.src_head = t,
        t.width = 521,
        t.x = 64,
        t.y = 66,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_view_i()],
        t
    },
    i.list_view_i = function() {
        var t = new eui.List;
        return this.list_view = t,
        t.height = 200,
        t.itemRendererSkinName = pveAiXiaLa.HeadRenderSkin,
        t.x = 2,
        t.y = -1,
        t.layout = this._HorizontalLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()],
        t
    },
    i._Object1_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object2_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object3_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object4_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/HeadRenderSkin.exml"] = window.pveAiXiaLa.HeadRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["a", "icon", "jiantou", "s", "yzs"],
        this.height = 122,
        this.width = 141,
        this.elementsContent = [this.a_i(), this.icon_i(), this.jiantou_i(), this.s_i(), this.yzs_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.a_i = function() {
        var t = new eui.Image;
        return this.a = t,
        t.source = "pve_ai_xia_la_leveltask_2_png",
        t.visible = !1,
        t.x = 1,
        t.y = 1,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 108,
        t.width = 107,
        t.x = 8,
        t.y = 7,
        t
    },
    i.jiantou_i = function() {
        var t = new eui.Image;
        return this.jiantou = t,
        t.source = "pve_ai_xia_la_leveltask_jiantou_png",
        t.x = 121,
        t.y = 40,
        t
    },
    i.s_i = function() {
        var t = new eui.Image;
        return this.s = t,
        t.source = "pve_ai_xia_la_leveltask_s_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.yzs_i = function() {
        var t = new eui.Image;
        return this.yzs = t,
        t.source = "pve_ai_xia_la_leveltask_yzs_png",
        t.visible = !0,
        t.x = 0,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveAiXiaLaLevel1Skin.exml"] = window.pveAiXiaLa.PveAiXiaLaLevel1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "axllyzjtsxnzrdsfttdwcyxdah_tdbmhdwlfzsfblmychddbxsrl_t", "desc_2", "desc", "task1_2", "txtLabel", "btnFix", "juxing_5", "btnOne", "mrzl1", "yhd1", "yhdone1", "task1", "task2_2", "txtLabel_3", "btnFix_2", "juxing_5_2", "btnOne_2", "mrzl2", "yhd2", "yhdone2", "task2", "task3_2", "txtLabel_5", "btnFix_3", "juxing_5_3", "btnOne_3", "mrzl3", "yhd3", "yhdone3", "task3", "task", "taskInfo", "GrpRight"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.pet_i(), this.GrpRight_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_ai_xia_la_level3_bg_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "pve_ai_xia_la_level1_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.GrpRight_i = function() {
        var t = new eui.Group;
        return this.GrpRight = t,
        t.height = 521,
        t.right = 46,
        t.width = 520,
        t.y = 74,
        t.elementsContent = [this.desc_i(), this.task_i(), this.taskInfo_i()],
        t
    },
    i.desc_i = function() {
        var t = new eui.Group;
        return this.desc = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.axllyzjtsxnzrdsfttdwcyxdah_tdbmhdwlfzsfblmychddbxsrl_t_i(), this.desc_2_i()],
        t
    },
    i.axllyzjtsxnzrdsfttdwcyxdah_tdbmhdwlfzsfblmychddbxsrl_t_i = function() {
        var t = new eui.Label;
        return this.axllyzjtsxnzrdsfttdwcyxdah_tdbmhdwlfzsfblmychddbxsrl_t = t,
        t.size = 18,
        t.text = "艾夏拉利用自己天蛇星女主人的身份，偷偷地完成一些大暗黑\n天的秘密行动。为了防止身份暴露，每一次行动都必须势若雷\n霆！",
        t.textColor = 13879550,
        t.width = 509,
        t.x = 0,
        t.y = 0,
        t
    },
    i.desc_2_i = function() {
        var t = new eui.Image;
        return this.desc_2 = t,
        t.source = "pve_ai_xia_la_level1_desc_png",
        t.x = 48,
        t.y = 83,
        t
    },
    i.task_i = function() {
        var t = new eui.Group;
        return this.task = t,
        t.visible = !0,
        t.x = 1,
        t.y = 245,
        t.elementsContent = [this.task1_i(), this.task2_i(), this.task3_i()],
        t
    },
    i.task1_i = function() {
        var t = new eui.Group;
        return this.task1 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.task1_2_i(), this.btnFix_i(), this.btnOne_i(), this.mrzl1_i(), this.yhd1_i(), this.yhdone1_i()],
        t
    },
    i.task1_2_i = function() {
        var t = new eui.Image;
        return this.task1_2 = t,
        t.source = "pve_ai_xia_la_level1_task1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFix_i = function() {
        var t = new eui.Group;
        return this.btnFix = t,
        t.x = 317,
        t.y = 21,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "开始任务",
        t.textColor = 8341784,
        t.visible = !0,
        t.x = 11,
        t.y = 11,
        t
    },
    i.btnOne_i = function() {
        var t = new eui.Group;
        return this.btnOne = t,
        t.visible = !0,
        t.x = 432,
        t.y = 9,
        t.elementsContent = [this.juxing_5_i()],
        t
    },
    i.juxing_5_i = function() {
        var t = new eui.Image;
        return this.juxing_5 = t,
        t.source = "pve_ai_xia_la_level1_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.mrzl1_i = function() {
        var t = new eui.Image;
        return this.mrzl1 = t,
        t.source = "pve_ai_xia_la_enery_level1_mrzl_png",
        t.x = 305,
        t.y = 15,
        t
    },
    i.yhd1_i = function() {
        var t = new eui.Image;
        return this.yhd1 = t,
        t.source = "pve_ai_xia_la_enery_level1_yhd_png",
        t.visible = !0,
        t.x = 313,
        t.y = 15,
        t
    },
    i.yhdone1_i = function() {
        var t = new eui.Image;
        return this.yhdone1 = t,
        t.source = "pve_ai_xia_la_enery_level1_yhd_png",
        t.x = 412,
        t.y = 16,
        t
    },
    i.task2_i = function() {
        var t = new eui.Group;
        return this.task2 = t,
        t.x = 0,
        t.y = 87,
        t.elementsContent = [this.task2_2_i(), this.btnFix_2_i(), this.btnOne_2_i(), this.mrzl2_i(), this.yhd2_i(), this.yhdone2_i()],
        t
    },
    i.task2_2_i = function() {
        var t = new eui.Image;
        return this.task2_2 = t,
        t.source = "pve_ai_xia_la_level1_task2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFix_2_i = function() {
        var t = new eui.Group;
        return this.btnFix_2 = t,
        t.x = 317,
        t.y = 21,
        t.elementsContent = [this._Image2_i(), this.txtLabel_3_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_3_i = function() {
        var t = new eui.Label;
        return this.txtLabel_3 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "开始任务",
        t.textColor = 8341784,
        t.x = 11,
        t.y = 11,
        t
    },
    i.btnOne_2_i = function() {
        var t = new eui.Group;
        return this.btnOne_2 = t,
        t.x = 432,
        t.y = 9,
        t.elementsContent = [this.juxing_5_2_i()],
        t
    },
    i.juxing_5_2_i = function() {
        var t = new eui.Image;
        return this.juxing_5_2 = t,
        t.source = "pve_ai_xia_la_level1_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.mrzl2_i = function() {
        var t = new eui.Image;
        return this.mrzl2 = t,
        t.source = "pve_ai_xia_la_enery_level1_mrzl_png",
        t.x = 305,
        t.y = 15,
        t
    },
    i.yhd2_i = function() {
        var t = new eui.Image;
        return this.yhd2 = t,
        t.source = "pve_ai_xia_la_enery_level1_yhd_png",
        t.x = 313,
        t.y = 15,
        t
    },
    i.yhdone2_i = function() {
        var t = new eui.Image;
        return this.yhdone2 = t,
        t.source = "pve_ai_xia_la_enery_level1_yhd_png",
        t.x = 412,
        t.y = 16,
        t
    },
    i.task3_i = function() {
        var t = new eui.Group;
        return this.task3 = t,
        t.x = 0,
        t.y = 174,
        t.elementsContent = [this.task3_2_i(), this.btnFix_3_i(), this.btnOne_3_i(), this.mrzl3_i(), this.yhd3_i(), this.yhdone3_i()],
        t
    },
    i.task3_2_i = function() {
        var t = new eui.Image;
        return this.task3_2 = t,
        t.source = "pve_ai_xia_la_level1_task3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFix_3_i = function() {
        var t = new eui.Group;
        return this.btnFix_3 = t,
        t.x = 317,
        t.y = 21,
        t.elementsContent = [this._Image3_i(), this.txtLabel_5_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_5_i = function() {
        var t = new eui.Label;
        return this.txtLabel_5 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "开始任务",
        t.textColor = 8341784,
        t.x = 11,
        t.y = 11,
        t
    },
    i.btnOne_3_i = function() {
        var t = new eui.Group;
        return this.btnOne_3 = t,
        t.x = 432,
        t.y = 9,
        t.elementsContent = [this.juxing_5_3_i()],
        t
    },
    i.juxing_5_3_i = function() {
        var t = new eui.Image;
        return this.juxing_5_3 = t,
        t.source = "pve_ai_xia_la_level1_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.mrzl3_i = function() {
        var t = new eui.Image;
        return this.mrzl3 = t,
        t.source = "pve_ai_xia_la_enery_level1_mrzl_png",
        t.x = 305,
        t.y = 15,
        t
    },
    i.yhd3_i = function() {
        var t = new eui.Image;
        return this.yhd3 = t,
        t.source = "pve_ai_xia_la_enery_level1_yhd_png",
        t.x = 313,
        t.y = 15,
        t
    },
    i.yhdone3_i = function() {
        var t = new eui.Image;
        return this.yhdone3 = t,
        t.source = "pve_ai_xia_la_enery_level1_yhd_png",
        t.x = 412,
        t.y = 16,
        t
    },
    i.taskInfo_i = function() {
        var t = new pveAiXiaLa.Level1TaskInfo;
        return this.taskInfo = t,
        t.skinName = "pveAiXiaLa.PveAiXiaLaLeveltaskSkin",
        t.visible = !1,
        t.x = -65,
        t.y = 222,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveAiXiaLaLevel2Skin.exml"] = window.pveAiXiaLa.PveAiXiaLaLevel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "b1", "selected", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "grpCards", "infobg", "mtndkyjb5wdahtcy", "dot", "zjjzhsyydjlsjhdymxw", "dot_2", "dnsjdqbdcclxwsjkt_gcg", "dot_3", "btnFight", "zyxzbdddahtcydsswmkyzdyxccldxwy_cltcjzssf", "p1", "infobg_2", "xinwubg", "t", "xinwu3", "xinwu1", "xinwu2", "xinwu0", "xiansuo", "grpContent", "numbg", "jrsyjbcs", "txtCount", "battleCount"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grpCards_i(), this.grpContent_i(), this.battleCount_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_ai_xia_la_level3_bg_png",
        t.y = 0,
        t
    },
    i.grpCards_i = function() {
        var t = new eui.Group;
        return this.grpCards = t,
        t.horizontalCenter = 2,
        t.visible = !0,
        t.y = 55,
        t.elementsContent = [this.b1_i(), this.selected_i(), this.b2_i(), this.b3_i(), this.b4_i(), this.b5_i(), this.b6_i(), this.b7_i(), this.b8_i()],
        t
    },
    i.b1_i = function() {
        var t = new eui.Image;
        return this.b1 = t,
        t.source = "pve_ai_xia_la_level2_b1_png",
        t.x = 10,
        t.y = 20,
        t
    },
    i.selected_i = function() {
        var t = new eui.Image;
        return this.selected = t,
        t.source = "pve_ai_xia_la_level2_selected_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.b2_i = function() {
        var t = new eui.Image;
        return this.b2 = t,
        t.source = "pve_ai_xia_la_level2_b2_png",
        t.x = 144,
        t.y = 20,
        t
    },
    i.b3_i = function() {
        var t = new eui.Image;
        return this.b3 = t,
        t.source = "pve_ai_xia_la_level2_b3_png",
        t.x = 278,
        t.y = 20,
        t
    },
    i.b4_i = function() {
        var t = new eui.Image;
        return this.b4 = t,
        t.source = "pve_ai_xia_la_level2_b4_png",
        t.x = 412,
        t.y = 20,
        t
    },
    i.b5_i = function() {
        var t = new eui.Image;
        return this.b5 = t,
        t.source = "pve_ai_xia_la_level2_b5_png",
        t.x = 546,
        t.y = 20,
        t
    },
    i.b6_i = function() {
        var t = new eui.Image;
        return this.b6 = t,
        t.source = "pve_ai_xia_la_level2_b6_png",
        t.x = 680,
        t.y = 20,
        t
    },
    i.b7_i = function() {
        var t = new eui.Image;
        return this.b7 = t,
        t.source = "pve_ai_xia_la_level2_b7_png",
        t.x = 814,
        t.y = 20,
        t
    },
    i.b8_i = function() {
        var t = new eui.Image;
        return this.b8 = t,
        t.source = "pve_ai_xia_la_level2_b8_png",
        t.x = 948,
        t.y = 20,
        t
    },
    i.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.height = 208,
        t.horizontalCenter = 11,
        t.width = 1066,
        t.y = 438,
        t.elementsContent = [this.p1_i(), this.xiansuo_i()],
        t
    },
    i.p1_i = function() {
        var t = new eui.Group;
        return this.p1 = t,
        t.x = 399,
        t.y = 2,
        t.elementsContent = [this.infobg_i(), this.mtndkyjb5wdahtcy_i(), this.dot_i(), this.zjjzhsyydjlsjhdymxw_i(), this.dot_2_i(), this.dnsjdqbdcclxwsjkt_gcg_i(), this.dot_3_i(), this.btnFight_i(), this.zyxzbdddahtcydsswmkyzdyxccldxwy_cltcjzssf_i()],
        t
    },
    i.infobg_i = function() {
        var t = new eui.Image;
        return this.infobg = t,
        t.source = "pve_ai_xia_la_level2_infobg_png",
        t.width = 440,
        t.x = 0,
        t.y = 48,
        t
    },
    i.mtndkyjb5wdahtcy_i = function() {
        var t = new eui.Label;
        return this.mtndkyjb5wdahtcy = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "每天你都可以缉捕5位大暗黑天成员",
        t.textColor = 13024494,
        t.x = 46,
        t.y = 57,
        t
    },
    i.dot_i = function() {
        var t = new eui.Image;
        return this.dot = t,
        t.source = "pve_ai_xia_la_level2_dot_png",
        t.x = 7,
        t.y = 48,
        t
    },
    i.zjjzhsyydjlsjhdymxw_i = function() {
        var t = new eui.Label;
        return this.zjjzhsyydjlsjhdymxw = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "在将其抓获时，有一定几率随机获得一枚信物",
        t.textColor = 13024494,
        t.x = 46,
        t.y = 85,
        t
    },
    i.dot_2_i = function() {
        var t = new eui.Image;
        return this.dot_2 = t,
        t.source = "pve_ai_xia_la_level2_dot_png",
        t.x = 7,
        t.y = 76,
        t
    },
    i.dnsjdqbdcclxwsjkt_gcg_i = function() {
        var t = new eui.Label;
        return this.dnsjdqbdcclxwsjkt_gcg = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "当你收集到全部的“常”长老信物时，即可通\n过此关",
        t.textColor = 13024494,
        t.width = 386,
        t.x = 46,
        t.y = 113,
        t
    },
    i.dot_3_i = function() {
        var t = new eui.Image;
        return this.dot_3 = t,
        t.source = "pve_ai_xia_la_level2_dot_png",
        t.x = 7,
        t.y = 105,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "pve_ai_xia_la_level2_btnFight_png",
        t.x = 451,
        t.y = 77,
        t
    },
    i.zyxzbdddahtcydsswmkyzdyxccldxwy_cltcjzssf_i = function() {
        var t = new eui.Label;
        return this.zyxzbdddahtcydsswmkyzdyxccldxwy_cltcjzssf = t,
        t.size = 18,
        t.text = "在一些抓捕到的大暗黑天成员的身上，我们可以找到一些“常”长老的信物，以\n此来推测其真实身份",
        t.textColor = 13879550,
        t.width = 660,
        t.x = 0,
        t.y = 0,
        t
    },
    i.xiansuo_i = function() {
        var t = new eui.Group;
        return this.xiansuo = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.infobg_2_i(), this.xinwubg_i(), this.t_i(), this.xinwu3_i(), this.xinwu1_i(), this.xinwu2_i(), this.xinwu0_i()],
        t
    },
    i.infobg_2_i = function() {
        var t = new eui.Image;
        return this.infobg_2 = t,
        t.source = "pve_ai_xia_la_level2_infobg_png",
        t.x = 0,
        t.y = 5,
        t
    },
    i.xinwubg_i = function() {
        var t = new eui.Image;
        return this.xinwubg = t,
        t.source = "pve_ai_xia_la_level2_xinwubg_png",
        t.x = 0,
        t.y = 4,
        t
    },
    i.t_i = function() {
        var t = new eui.Image;
        return this.t = t,
        t.source = "pve_ai_xia_la_level2_t_png",
        t.x = 4,
        t.y = 0,
        t
    },
    i.xinwu3_i = function() {
        var t = new pveAiXiaLa.ItemXinWu;
        return this.xinwu3 = t,
        t.skinName = "pveAiXiaLa.ItemXInWuSkin",
        t.x = 276,
        t.y = 43,
        t
    },
    i.xinwu1_i = function() {
        var t = new pveAiXiaLa.ItemXinWu;
        return this.xinwu1 = t,
        t.skinName = "pveAiXiaLa.ItemXInWuSkin",
        t.visible = !0,
        t.x = 187,
        t.y = 43,
        t
    },
    i.xinwu2_i = function() {
        var t = new pveAiXiaLa.ItemXinWu;
        return this.xinwu2 = t,
        t.skinName = "pveAiXiaLa.ItemXInWuSkin",
        t.x = 97,
        t.y = 43,
        t
    },
    i.xinwu0_i = function() {
        var t = new pveAiXiaLa.ItemXinWu;
        return this.xinwu0 = t,
        t.skinName = "pveAiXiaLa.ItemXInWuSkin",
        t.x = 8,
        t.y = 43,
        t
    },
    i.battleCount_i = function() {
        var t = new eui.Group;
        return this.battleCount = t,
        t.right = 29,
        t.scaleX = 1,
        t.scaleY = 1,
        t.y = 13,
        t.elementsContent = [this.numbg_i(), this.jrsyjbcs_i(), this.txtCount_i()],
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "pve_ai_xia_la_level2_numbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.jrsyjbcs_i = function() {
        var t = new eui.Label;
        return this.jrsyjbcs = t,
        t.size = 18,
        t.text = "今日剩余缉捕次数：",
        t.textColor = 16777215,
        t.x = 18,
        t.y = 8,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.size = 18,
        t.text = "10/10",
        t.textColor = 16777215,
        t.x = 176,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveAiXiaLaLevel3Skin.exml"] = window.pveAiXiaLa.PveAiXiaLaLevel3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "imgBtn_pet", "imgBtn_cure", "btns", "tt", "hgxz", "txtHH", "dot", "asdad", "txtYq", "dot_2", "hh", "btnFight", "btnOnefight", "imgNand", "star", "star_2", "star_3", "star_4", "unstar_", "GrpRight"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.pet_i(), this.btns_i(), this.GrpRight_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_ai_xia_la_level3_bg_png",
        t.y = 0,
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "pve_ai_xia_la_level3_pet_png",
        t.x = 0,
        t.y = 55,
        t
    },
    i.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.x = 24,
        t.y = 243,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "pve_ai_xia_la_level3_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "pve_ai_xia_la_level3_imgBtn_cure_png",
        t.x = 0,
        t.y = 80,
        t
    },
    i.GrpRight_i = function() {
        var t = new eui.Group;
        return this.GrpRight = t,
        t.height = 482,
        t.right = 2,
        t.width = 512,
        t.y = 97,
        t.elementsContent = [this.tt_i(), this.hh_i(), this.btnFight_i(), this.btnOnefight_i(), this.imgNand_i(), this.star_i(), this.star_2_i(), this.star_3_i(), this.star_4_i(), this.unstar__i()],
        t
    },
    i.tt_i = function() {
        var t = new eui.Image;
        return this.tt = t,
        t.source = "pve_ai_xia_la_level3_tt_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.hh_i = function() {
        var t = new eui.Group;
        return this.hh = t,
        t.x = 17,
        t.y = 274,
        t.elementsContent = [this.hgxz_i(), this.txtHH_i(), this.dot_i(), this.asdad_i(), this.txtYq_i(), this.dot_2_i()],
        t
    },
    i.hgxz_i = function() {
        var t = new eui.Label;
        return this.hgxz = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "回合限制：",
        t.textColor = 16777215,
        t.x = 31,
        t.y = 0,
        t
    },
    i.txtHH_i = function() {
        var t = new eui.Label;
        return this.txtHH = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "88回合",
        t.textColor = 13024494,
        t.x = 158,
        t.y = 1,
        t
    },
    i.dot_i = function() {
        var t = new eui.Image;
        return this.dot = t,
        t.source = "pve_ai_xia_la_level3_dot_png",
        t.x = 0,
        t.y = -7.437,
        t
    },
    i.asdad_i = function() {
        var t = new eui.Label;
        return this.asdad = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "击败要求：",
        t.textColor = 16777215,
        t.x = 31,
        t.y = 40,
        t
    },
    i.txtYq_i = function() {
        var t = new eui.Label;
        return this.txtYq = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "击败要求要求要求要求要求",
        t.textColor = 13024494,
        t.x = 159,
        t.y = 40,
        t
    },
    i.dot_2_i = function() {
        var t = new eui.Image;
        return this.dot_2 = t,
        t.source = "pve_ai_xia_la_level3_dot_png",
        t.x = 0,
        t.y = 33.06,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "pve_ai_xia_la_level3_btnFight_png",
        t.x = 19,
        t.y = 395,
        t
    },
    i.btnOnefight_i = function() {
        var t = new eui.Image;
        return this.btnOnefight = t,
        t.source = "pve_ai_xia_la_level3_btnOnefight_png",
        t.visible = !0,
        t.x = 236,
        t.y = 395,
        t
    },
    i.imgNand_i = function() {
        var t = new eui.Image;
        return this.imgNand = t,
        t.source = "pve_ai_xia_la_level3_imgNand_png",
        t.x = 0,
        t.y = 209,
        t
    },
    i.star_i = function() {
        var t = new eui.Image;
        return this.star = t,
        t.source = "pve_ai_xia_la_level3_star_png",
        t.x = 169,
        t.y = 214,
        t
    },
    i.star_2_i = function() {
        var t = new eui.Image;
        return this.star_2 = t,
        t.source = "pve_ai_xia_la_level3_star_png",
        t.x = 218,
        t.y = 214,
        t
    },
    i.star_3_i = function() {
        var t = new eui.Image;
        return this.star_3 = t,
        t.source = "pve_ai_xia_la_level3_star_png",
        t.x = 267,
        t.y = 214,
        t
    },
    i.star_4_i = function() {
        var t = new eui.Image;
        return this.star_4 = t,
        t.source = "pve_ai_xia_la_level3_star_png",
        t.x = 315,
        t.y = 214,
        t
    },
    i.unstar__i = function() {
        var t = new eui.Image;
        return this.unstar_ = t,
        t.source = "pve_ai_xia_la_level3_unstar__png",
        t.x = 363,
        t.y = 214,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveAiXiaLaLevel4Skin.exml"] = window.pveAiXiaLa.PveAiXiaLaLevel4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "a_1d", "a_1l", "a_2d", "a_2l", "a_3d", "a_3l", "a_4d", "a_4l", "a_5d", "a_5l", "a_6d", "a_6l", "grpCard", "xydkccldfyclxyskxqzxhxyqbdahtclmdll", "shuijing", "shuijing_2", "shuijing_3", "unshuijing", "unshuijing_2", "unshuijing_3", "bcdkfycgl", "a_090", "info", "juxing_5", "btnOne", "txtLabel_2", "btnFix", "grpDown"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grpCard_i(), this.grpDown_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_ai_xia_la_level3_bg_png",
        t.y = 0,
        t
    },
    i.grpCard_i = function() {
        var t = new eui.Group;
        return this.grpCard = t,
        t.height = 405,
        t.horizontalCenter = 0,
        t.width = 1136,
        t.y = 73,
        t.elementsContent = [this.a_1d_i(), this.a_1l_i(), this.a_2d_i(), this.a_2l_i(), this.a_3d_i(), this.a_3l_i(), this.a_4d_i(), this.a_4l_i(), this.a_5d_i(), this.a_5l_i(), this.a_6d_i(), this.a_6l_i()],
        t
    },
    i.a_1d_i = function() {
        var t = new eui.Image;
        return this.a_1d = t,
        t.source = "pve_ai_xia_la_level4_1d_png",
        t.x = 45,
        t.y = 7,
        t
    },
    i.a_1l_i = function() {
        var t = new eui.Image;
        return this.a_1l = t,
        t.source = "pve_ai_xia_la_level4_1l_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_2d_i = function() {
        var t = new eui.Image;
        return this.a_2d = t,
        t.source = "pve_ai_xia_la_level4_2d_png",
        t.x = 222,
        t.y = 7,
        t
    },
    i.a_2l_i = function() {
        var t = new eui.Image;
        return this.a_2l = t,
        t.source = "pve_ai_xia_la_level4_2l_png",
        t.x = 170,
        t.y = 0,
        t
    },
    i.a_3d_i = function() {
        var t = new eui.Image;
        return this.a_3d = t,
        t.source = "pve_ai_xia_la_level4_3d_png",
        t.x = 399,
        t.y = 7,
        t
    },
    i.a_3l_i = function() {
        var t = new eui.Image;
        return this.a_3l = t,
        t.source = "pve_ai_xia_la_level4_3l_png",
        t.x = 347,
        t.y = 0,
        t
    },
    i.a_4d_i = function() {
        var t = new eui.Image;
        return this.a_4d = t,
        t.source = "pve_ai_xia_la_level4_4d_png",
        t.x = 575,
        t.y = 7,
        t
    },
    i.a_4l_i = function() {
        var t = new eui.Image;
        return this.a_4l = t,
        t.source = "pve_ai_xia_la_level4_4l_png",
        t.x = 523,
        t.y = 0,
        t
    },
    i.a_5d_i = function() {
        var t = new eui.Image;
        return this.a_5d = t,
        t.source = "pve_ai_xia_la_level4_5d_png",
        t.visible = !0,
        t.x = 752,
        t.y = 7,
        t
    },
    i.a_5l_i = function() {
        var t = new eui.Image;
        return this.a_5l = t,
        t.source = "pve_ai_xia_la_level4_5l_png",
        t.visible = !0,
        t.x = 700,
        t.y = 0,
        t
    },
    i.a_6d_i = function() {
        var t = new eui.Image;
        return this.a_6d = t,
        t.source = "pve_ai_xia_la_level4_6d_png",
        t.x = 929,
        t.y = 7,
        t
    },
    i.a_6l_i = function() {
        var t = new eui.Image;
        return this.a_6l = t,
        t.source = "pve_ai_xia_la_level4_6l_png",
        t.visible = !0,
        t.x = 877,
        t.y = 0,
        t
    },
    i.grpDown_i = function() {
        var t = new eui.Group;
        return this.grpDown = t,
        t.height = 133,
        t.horizontalCenter = 10.5,
        t.visible = !0,
        t.width = 1063,
        t.y = 470,
        t.elementsContent = [this.xydkccldfyclxyskxqzxhxyqbdahtclmdll_i(), this.shuijing_i(), this.shuijing_2_i(), this.shuijing_3_i(), this.unshuijing_i(), this.unshuijing_2_i(), this.unshuijing_3_i(), this.bcdkfycgl_i(), this.a_090_i(), this.info_i(), this.btnOne_i(), this.btnFix_i()],
        t
    },
    i.xydkccldfyclxyskxqzxhxyqbdahtclmdll_i = function() {
        var t = new eui.Label;
        return this.xydkccldfyclxyskxqzxhxyqbdahtclmdll = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "想要打开“常”长老的封印，除了需要三颗星球之星，还需要全部大暗黑天长老们的力量",
        t.textColor = 13879550,
        t.x = 0,
        t.y = 0,
        t
    },
    i.shuijing_i = function() {
        var t = new eui.Image;
        return this.shuijing = t,
        t.source = "pve_ai_xia_la_level4_shuijing_png",
        t.x = 770,
        t.y = 73,
        t
    },
    i.shuijing_2_i = function() {
        var t = new eui.Image;
        return this.shuijing_2 = t,
        t.source = "pve_ai_xia_la_level4_shuijing_png",
        t.x = 797,
        t.y = 73,
        t
    },
    i.shuijing_3_i = function() {
        var t = new eui.Image;
        return this.shuijing_3 = t,
        t.source = "pve_ai_xia_la_level4_shuijing_png",
        t.x = 824,
        t.y = 73,
        t
    },
    i.unshuijing_i = function() {
        var t = new eui.Image;
        return this.unshuijing = t,
        t.source = "pve_ai_xia_la_level4_unshuijing_png",
        t.x = 853,
        t.y = 73,
        t
    },
    i.unshuijing_2_i = function() {
        var t = new eui.Image;
        return this.unshuijing_2 = t,
        t.source = "pve_ai_xia_la_level4_unshuijing_png",
        t.x = 880,
        t.y = 73,
        t
    },
    i.unshuijing_3_i = function() {
        var t = new eui.Image;
        return this.unshuijing_3 = t,
        t.source = "pve_ai_xia_la_level4_unshuijing_png",
        t.x = 907,
        t.y = 73,
        t
    },
    i.bcdkfycgl_i = function() {
        var t = new eui.Label;
        return this.bcdkfycgl = t,
        t.size = 20,
        t.text = "本次打开封印成功率：",
        t.textColor = 13879550,
        t.x = 765,
        t.y = 27,
        t
    },
    i.a_090_i = function() {
        var t = new eui.Label;
        return this.a_090 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 30,
        t.text = "090%",
        t.textColor = 16773461,
        t.x = 814,
        t.y = 53,
        t
    },
    i.info_i = function() {
        var t = new eui.Image;
        return this.info = t,
        t.source = "pve_ai_xia_la_level4_info_png",
        t.x = 0,
        t.y = 29,
        t
    },
    i.btnOne_i = function() {
        var t = new eui.Group;
        return this.btnOne = t,
        t.x = 1001,
        t.y = 10,
        t.elementsContent = [this.juxing_5_i()],
        t
    },
    i.juxing_5_i = function() {
        var t = new eui.Image;
        return this.juxing_5 = t,
        t.source = "pve_ai_xia_la_level4_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFix_i = function() {
        var t = new eui.Group;
        return this.btnFix = t,
        t.x = 962,
        t.y = 83,
        t.elementsContent = [this._Image1_i(), this.txtLabel_2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_2_i = function() {
        var t = new eui.Label;
        return this.txtLabel_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "解除封印",
        t.textColor = 8341784,
        t.x = 11,
        t.y = 11,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveAiXiaLaMainSkin.exml"] = window.pveAiXiaLa.PveAiXiaLaMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "level1", "level2", "level3", "level4", "tag0", "tag1", "tag2", "tag3", "levelBtns", "title", "btnInfo", "bbg", "txtLabel", "btnBuy"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.pet_i(), this._Group1_i(), this.btnInfo_i(), this.btnBuy_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_ai_xia_la_level3_bg_png",
        t.y = 0,
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "pve_ai_xia_la-main_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 570,
        t.horizontalCenter = 287.5,
        t.width = 457,
        t.y = 37,
        t.elementsContent = [this.levelBtns_i(), this.title_i()],
        t
    },
    i.levelBtns_i = function() {
        var t = new eui.Group;
        return this.levelBtns = t,
        t.height = 317,
        t.width = 457,
        t.x = 0,
        t.y = 253,
        t.elementsContent = [this.level1_i(), this.level2_i(), this.level3_i(), this.level4_i(), this.tag0_i(), this.tag1_i(), this.tag2_i(), this.tag3_i()],
        t
    },
    i.level1_i = function() {
        var t = new eui.Image;
        return this.level1 = t,
        t.source = "pve_ai_xia_la-main_level1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.level2_i = function() {
        var t = new eui.Image;
        return this.level2 = t,
        t.source = "pve_ai_xia_la-main_level2_png",
        t.x = 117,
        t.y = 55,
        t
    },
    i.level3_i = function() {
        var t = new eui.Image;
        return this.level3 = t,
        t.source = "pve_ai_xia_la-main_level3_png",
        t.x = 235,
        t.y = 0,
        t
    },
    i.level4_i = function() {
        var t = new eui.Image;
        return this.level4 = t,
        t.source = "pve_ai_xia_la-main_level4_png",
        t.x = 352,
        t.y = 55,
        t
    },
    i.tag0_i = function() {
        var t = new eui.Image;
        return this.tag0 = t,
        t.source = "pve_ai_xia_la-main_done_png",
        t.visible = !0,
        t.x = 25,
        t.y = 32,
        t
    },
    i.tag1_i = function() {
        var t = new eui.Image;
        return this.tag1 = t,
        t.source = "pve_ai_xia_la-main_done_png",
        t.x = 138,
        t.y = 89,
        t
    },
    i.tag2_i = function() {
        var t = new eui.Image;
        return this.tag2 = t,
        t.source = "pve_ai_xia_la-main_tm_png",
        t.x = 258,
        t.y = 33,
        t
    },
    i.tag3_i = function() {
        var t = new eui.Image;
        return this.tag3 = t,
        t.source = "pve_ai_xia_la-main_tm_png",
        t.x = 375,
        t.y = 86,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pve_ai_xia_la-main_title_png",
        t.x = 38,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "pve_ai_xia_la-main_btnInfo_png",
        t.x = 31,
        t.y = 537,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 188,
        t.y = 535,
        t.elementsContent = [this.bbg_i(), this.txtLabel_i()],
        t
    },
    i.bbg_i = function() {
        var t = new eui.Image;
        return this.bbg = t,
        t.source = "pve_ai_xia_la-main_btnBuy_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 34,
        t.text = "至尊获得",
        t.textColor = 16777215,
        t.x = 52,
        t.y = 23,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveAiXiaLaUpenergySkin.exml"] = window.pveAiXiaLa.PveAiXiaLaUpenergySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "title", "imgBtn_pet", "imgBtn_cure", "btns", "numbg", "jrsyslcs", "txtCnt", "battleCount", "numbg_2", "btnAdd", "czl", "txtItem", "icon_2", "Changziling", "grpRightTop", "petbg", "roundbg", "asdasdvc", "txtPet", "txtRound", "tipsbg", "txtitemCount", "jbkhd", "icon", "txtLabel", "btnOk", "pet", "grpLeftAni", "grpLeft", "leftbg", "t2", "itemkuang", "txtLabel_2", "txtLabel_kb", "ckyn", "btnFix", "titlebg", "zsky", "icon_3", "flagMark", "item1", "itemkuang_2", "txtLabel_3", "txtLabel_kb_2", "icon_4", "btnFix_2", "titlebg_2", "diwujineng", "icon_1", "flagSkill", "item2", "itemkuang_3", "txtLabel_4", "txtNum", "icon_5", "btnFix_3", "titlebg_3", "zstx", "icon_texing", "flagTexing", "item3", "grpRightDown"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.title_i(), this.btns_i(), this.grpRightTop_i(), this.grpLeft_i(), this.grpRightDown_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_ai_xia_la_level3_bg_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Label;
        return this.title = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 299.5,
        t.size = 18,
        t.text = "每次试炼一共有10轮挑战，关卡奖励将随着击败精\n灵数量的增加而增加，一旦战斗失败，试炼将重新\n开始",
        t.textColor = 14472441,
        t.width = 423,
        t.y = 92,
        t
    },
    i.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.x = 24,
        t.y = 243,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "pve_ai_xia_la_upEnergy_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "pve_ai_xia_la_upEnergy_imgBtn_cure_png",
        t.x = 0,
        t.y = 80,
        t
    },
    i.grpRightTop_i = function() {
        var t = new eui.Group;
        return this.grpRightTop = t,
        t.height = 34,
        t.right = 29,
        t.width = 531,
        t.y = 12,
        t.elementsContent = [this.battleCount_i(), this.Changziling_i()],
        t
    },
    i.battleCount_i = function() {
        var t = new eui.Group;
        return this.battleCount = t,
        t.x = 289,
        t.y = 1,
        t.elementsContent = [this.numbg_i(), this.jrsyslcs_i(), this.txtCnt_i()],
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "pve_ai_xia_la_upEnergy_numbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.jrsyslcs_i = function() {
        var t = new eui.Label;
        return this.jrsyslcs = t,
        t.size = 18,
        t.text = "今日剩余试炼次数：",
        t.textColor = 16777215,
        t.x = 18,
        t.y = 8,
        t
    },
    i.txtCnt_i = function() {
        var t = new eui.Label;
        return this.txtCnt = t,
        t.size = 18,
        t.text = "10/10",
        t.textColor = 16777215,
        t.x = 176,
        t.y = 9,
        t
    },
    i.Changziling_i = function() {
        var t = new eui.Group;
        return this.Changziling = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.numbg_2_i(), this.btnAdd_i(), this.czl_i(), this.txtItem_i(), this.icon_2_i()],
        t
    },
    i.numbg_2_i = function() {
        var t = new eui.Image;
        return this.numbg_2 = t,
        t.source = "pve_ai_xia_la_upEnergy_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "pve_ai_xia_la_upEnergy_btnAdd_png",
        t.x = 226,
        t.y = 0,
        t
    },
    i.czl_i = function() {
        var t = new eui.Label;
        return this.czl = t,
        t.size = 18,
        t.text = "常字令：",
        t.textColor = 16777215,
        t.x = 95,
        t.y = 8,
        t
    },
    i.txtItem_i = function() {
        var t = new eui.Label;
        return this.txtItem = t,
        t.size = 18,
        t.text = "10/10",
        t.textColor = 16777215,
        t.x = 163,
        t.y = 10,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.source = "pve_ai_xia_la_upEnergy_icon_png",
        t.x = 67,
        t.y = 4,
        t
    },
    i.grpLeft_i = function() {
        var t = new eui.Group;
        return this.grpLeft = t,
        t.height = 507,
        t.horizontalCenter = -204.5,
        t.width = 517,
        t.y = 76,
        t.elementsContent = [this.grpLeftAni_i()],
        t
    },
    i.grpLeftAni_i = function() {
        var t = new eui.Group;
        return this.grpLeftAni = t,
        t.height = 507,
        t.width = 517,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.petbg_i(), this.roundbg_i(), this.asdasdvc_i(), this.txtPet_i(), this.txtRound_i(), this.tipsbg_i(), this.txtitemCount_i(), this.jbkhd_i(), this.icon_i(), this.btnOk_i(), this._Group1_i()],
        t
    },
    i.petbg_i = function() {
        var t = new eui.Image;
        return this.petbg = t,
        t.source = "pve_ai_xia_la_upEnergy_petbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.roundbg_i = function() {
        var t = new eui.Image;
        return this.roundbg = t,
        t.source = "pve_ai_xia_la_upEnergy_roundbg_png",
        t.x = 15,
        t.y = 13,
        t
    },
    i.asdasdvc_i = function() {
        var t = new eui.Label;
        return this.asdasdvc = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "当前挑战关卡：",
        t.textColor = 16777215,
        t.x = 23,
        t.y = 19,
        t
    },
    i.txtPet_i = function() {
        var t = new eui.Label;
        return this.txtPet = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "小达",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 167,
        t.x = 326,
        t.y = 19,
        t
    },
    i.txtRound_i = function() {
        var t = new eui.Label;
        return this.txtRound = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "08/10",
        t.textColor = 16777215,
        t.x = 167,
        t.y = 22,
        t
    },
    i.tipsbg_i = function() {
        var t = new eui.Image;
        return this.tipsbg = t,
        t.source = "pve_ai_xia_la_upEnergy_tipsbg_png",
        t.x = 12,
        t.y = 382,
        t
    },
    i.txtitemCount_i = function() {
        var t = new eui.Label;
        return this.txtitemCount = t,
        t.size = 20,
        t.text = " 常字令x1",
        t.textColor = 16773461,
        t.x = 294,
        t.y = 394,
        t
    },
    i.jbkhd_i = function() {
        var t = new eui.Label;
        return this.jbkhd = t,
        t.size = 20,
        t.text = "击败可获得    ",
        t.textColor = 16773461,
        t.width = 104,
        t.x = 133,
        t.y = 395,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "pve_ai_xia_la_upEnergy_icon_png",
        t.x = 248,
        t.y = 388,
        t
    },
    i.btnOk_i = function() {
        var t = new eui.Group;
        return this.btnOk = t,
        t.x = 171,
        t.y = 431,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "开始试炼",
        t.textColor = 9261339,
        t.x = 34,
        t.y = 11,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 256,
        t.y = 370,
        t.elementsContent = [this.pet_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_ai_xia_la_upEnergy_pet_png",
        t.x = -144,
        t.y = -271.99999999999994,
        t
    },
    i.grpRightDown_i = function() {
        var t = new eui.Group;
        return this.grpRightDown = t,
        t.horizontalCenter = 300,
        t.visible = !0,
        t.y = 252,
        t.elementsContent = [this.leftbg_i(), this.t2_i(), this.item1_i(), this.item2_i(), this.item3_i()],
        t
    },
    i.leftbg_i = function() {
        var t = new eui.Image;
        return this.leftbg = t,
        t.source = "pve_ai_xia_la_upEnergy_leftbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.t2_i = function() {
        var t = new eui.Image;
        return this.t2 = t,
        t.source = "pve_ai_xia_la_upEnergy_t2_png",
        t.x = 11,
        t.y = 18,
        t
    },
    i.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.x = 18,
        t.y = 94,
        t.elementsContent = [this.itemkuang_i(), this.btnFix_i(), this.titlebg_i(), this.zsky_i(), this.icon_3_i(), this.flagMark_i()],
        t
    },
    i.itemkuang_i = function() {
        var t = new eui.Image;
        return this.itemkuang = t,
        t.source = "pve_ai_xia_la_upEnergy_itemkuang_png",
        t.x = 0,
        t.y = 33,
        t
    },
    i.btnFix_i = function() {
        var t = new eui.Group;
        return this.btnFix = t,
        t.x = 0,
        t.y = 161,
        t.elementsContent = [this._Image2_i(), this.txtLabel_2_i(), this.txtLabel_kb_i(), this.ckyn_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_2_i = function() {
        var t = new eui.Label;
        return this.txtLabel_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "兑换",
        t.textColor = 8341784,
        t.x = 70,
        t.y = 11,
        t
    },
    i.txtLabel_kb_i = function() {
        var t = new eui.Label;
        return this.txtLabel_kb = t,
        t.size = 22,
        t.text = "x10",
        t.textColor = 8341784,
        t.x = 33,
        t.y = 11,
        t
    },
    i.ckyn_i = function() {
        var t = new eui.Image;
        return this.ckyn = t,
        t.source = "pve_ai_xia_la_upEnergy_ckyn_png",
        t.x = 9,
        t.y = 7,
        t
    },
    i.titlebg_i = function() {
        var t = new eui.Image;
        return this.titlebg = t,
        t.source = "pve_ai_xia_la_upEnergy_titlebg_png",
        t.x = 0,
        t.y = 5,
        t
    },
    i.zsky_i = function() {
        var t = new eui.Label;
        return this.zsky = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "专属刻印",
        t.textColor = 16777215,
        t.x = 20,
        t.y = 9,
        t
    },
    i.icon_3_i = function() {
        var t = new eui.Image;
        return this.icon_3 = t,
        t.source = "pve_ai_xia_la_upEnergy_icon_mark_png",
        t.x = 28,
        t.y = 61,
        t
    },
    i.flagMark_i = function() {
        var t = new eui.Image;
        return this.flagMark = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_ai_xia_la_enery_up_panel_flagYhd_png",
        t.visible = !0,
        t.x = -11,
        t.y = 154,
        t
    },
    i.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.x = 170,
        t.y = 95,
        t.elementsContent = [this.itemkuang_2_i(), this.btnFix_2_i(), this.titlebg_2_i(), this.diwujineng_i(), this.icon_1_i(), this.flagSkill_i()],
        t
    },
    i.itemkuang_2_i = function() {
        var t = new eui.Image;
        return this.itemkuang_2 = t,
        t.source = "pve_ai_xia_la_upEnergy_itemkuang_png",
        t.x = 0,
        t.y = 32,
        t
    },
    i.btnFix_2_i = function() {
        var t = new eui.Group;
        return this.btnFix_2 = t,
        t.x = 0,
        t.y = 160,
        t.elementsContent = [this._Image3_i(), this.txtLabel_3_i(), this.txtLabel_kb_2_i(), this.icon_4_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_3_i = function() {
        var t = new eui.Label;
        return this.txtLabel_3 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "兑换",
        t.textColor = 8341784,
        t.x = 70,
        t.y = 11,
        t
    },
    i.txtLabel_kb_2_i = function() {
        var t = new eui.Label;
        return this.txtLabel_kb_2 = t,
        t.size = 22,
        t.text = "x15",
        t.textColor = 8341784,
        t.x = 33,
        t.y = 11,
        t
    },
    i.icon_4_i = function() {
        var t = new eui.Image;
        return this.icon_4 = t,
        t.source = "pve_ai_xia_la_upEnergy_icon_png",
        t.x = 9,
        t.y = 7,
        t
    },
    i.titlebg_2_i = function() {
        var t = new eui.Image;
        return this.titlebg_2 = t,
        t.source = "pve_ai_xia_la_upEnergy_titlebg_png",
        t.x = 0,
        t.y = 4,
        t
    },
    i.diwujineng_i = function() {
        var t = new eui.Label;
        return this.diwujineng = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "第五技能",
        t.textColor = 16777215,
        t.x = 20,
        t.y = 9,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.source = "pve_ai_xia_la_upEnergy_icon_1_png",
        t.x = 37,
        t.y = 70,
        t
    },
    i.flagSkill_i = function() {
        var t = new eui.Image;
        return this.flagSkill = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_ai_xia_la_enery_up_panel_flagYhd_png",
        t.visible = !0,
        t.x = -11,
        t.y = 154,
        t
    },
    i.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 321,
        t.y = 94,
        t.elementsContent = [this.itemkuang_3_i(), this.btnFix_3_i(), this.titlebg_3_i(), this.zstx_i(), this.icon_texing_i(), this.flagTexing_i()],
        t
    },
    i.itemkuang_3_i = function() {
        var t = new eui.Image;
        return this.itemkuang_3 = t,
        t.source = "pve_ai_xia_la_upEnergy_itemkuang_png",
        t.x = 0,
        t.y = 33,
        t
    },
    i.btnFix_3_i = function() {
        var t = new eui.Group;
        return this.btnFix_3 = t,
        t.x = 0,
        t.y = 161,
        t.elementsContent = [this._Image4_i(), this.txtLabel_4_i(), this.txtNum_i(), this.icon_5_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_4_i = function() {
        var t = new eui.Label;
        return this.txtLabel_4 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "兑换",
        t.textColor = 8341784,
        t.x = 70,
        t.y = 11,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.size = 22,
        t.text = "x25",
        t.textColor = 8341784,
        t.x = 33,
        t.y = 11,
        t
    },
    i.icon_5_i = function() {
        var t = new eui.Image;
        return this.icon_5 = t,
        t.source = "pve_ai_xia_la_upEnergy_icon_png",
        t.x = 9,
        t.y = 7,
        t
    },
    i.titlebg_3_i = function() {
        var t = new eui.Image;
        return this.titlebg_3 = t,
        t.source = "pve_ai_xia_la_upEnergy_titlebg_png",
        t.x = 0,
        t.y = 5,
        t
    },
    i.zstx_i = function() {
        var t = new eui.Label;
        return this.zstx = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "专属特性",
        t.textColor = 16777215,
        t.x = 20,
        t.y = 9,
        t
    },
    i.icon_texing_i = function() {
        var t = new eui.Image;
        return this.icon_texing = t,
        t.source = "pve_ai_xia_la_upEnergy_icon_texing_png",
        t.x = 38,
        t.y = 68,
        t
    },
    i.flagTexing_i = function() {
        var t = new eui.Image;
        return this.flagTexing = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_ai_xia_la_enery_up_panel_flagYhd_png",
        t.visible = !0,
        t.x = -11,
        t.y = 154,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveAiXiaLaBattlePopSkin.exml"] = window.pveAiXiaLa.PveAiXiaLaBattlePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["fightbg", "bg2", "txtDesc", "titlebg", "txtNick", "imgtitle", "txtLabel", "btnBuy", "txtLabel_2", "btnFight", "btnClose", "petStyle", "imgBtn_pet", "imgBtn_cure", "bts"],
        this.height = 370,
        this.width = 684,
        this.elementsContent = [this.fightbg_i(), this.bg2_i(), this.txtDesc_i(), this.titlebg_i(), this.txtNick_i(), this.imgtitle_i(), this.btnBuy_i(), this.btnFight_i(), this.btnClose_i(), this._Group1_i(), this.bts_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.fightbg_i = function() {
        var t = new eui.Image;
        return this.fightbg = t,
        t.source = "pve_ai_xia_la_battle_pop_fightbg_png",
        t.x = 68,
        t.y = 22,
        t
    },
    i.bg2_i = function() {
        var t = new eui.Image;
        return this.bg2 = t,
        t.source = "pve_ai_xia_la_battle_pop_bg2_png",
        t.x = 411,
        t.y = 118,
        t
    },
    i.txtDesc_i = function() {
        var t = new eui.Label;
        return this.txtDesc = t,
        t.size = 18.0193567308632,
        t.text = "与这名长老进行战斗并在\n20回合后将其击败，即可\n引发他的力量灌注至封印\n之内",
        t.textColor = 15332094,
        t.width = 203,
        t.x = 424,
        t.y = 134,
        t
    },
    i.titlebg_i = function() {
        var t = new eui.Image;
        return this.titlebg = t,
        t.source = "pve_ai_xia_la_battle_pop_titlebg_png",
        t.x = 412,
        t.y = 72,
        t
    },
    i.txtNick_i = function() {
        var t = new eui.Label;
        return this.txtNick = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20.0215074787369,
        t.text = "幽冥帝尊•修罗",
        t.textColor = 16182900,
        t.x = 432,
        t.y = 76,
        t
    },
    i.imgtitle_i = function() {
        var t = new eui.Image;
        return this.imgtitle = t,
        t.source = "pve_ai_xia_la_battle_pop_imgtitle_png",
        t.x = 413,
        t.y = 67,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 540,
        t.y = 297,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "一键击败",
        t.textColor = 8341784,
        t.x = 11,
        t.y = 11,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Group;
        return this.btnFight = t,
        t.x = 412,
        t.y = 297,
        t.elementsContent = [this._Image2_i(), this.txtLabel_2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_2_i = function() {
        var t = new eui.Label;
        return this.txtLabel_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "开始挑战",
        t.textColor = 8341784,
        t.x = 11,
        t.y = 11,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "pve_ai_xia_la_battle_pop_btnClose_png",
        t.x = 630,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 238,
        t.y = 323,
        t.elementsContent = [this.petStyle_i()],
        t
    },
    i.petStyle_i = function() {
        var t = new eui.Image;
        return this.petStyle = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_ai_xia_la_battle_pop_petStyle_png",
        t.x = -135.00000000000003,
        t.y = -270,
        t
    },
    i.bts_i = function() {
        var t = new eui.Group;
        return this.bts = t,
        t.x = 0,
        t.y = 119,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "pve_ai_xia_la_battle_pop_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "pve_ai_xia_la_battle_pop_imgBtn_cure_png",
        t.x = 0,
        t.y = 80,
        t
    },
    e
} (eui.Skin);