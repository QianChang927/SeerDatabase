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
    return new(i || (i = Promise))(function(o, s) {
        function r(t) {
            try {
                _(n.next(t))
            } catch(e) {
                s(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function _(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, a)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (o = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
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
            o = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, s, r, a, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveYingKaLuoSi; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.setValues([AttrConst.forever_gzcjykls_flag, AttrConst.forever_gzcjykls_state, AttrConst.forever_gzcjykls_fighted, AttrConst.forever_gzcjykls_ext, AttrConst.forever_gzcjykls_cnt, AttrConst.forever_gzcjykls_activate], [AttrConst.daily_gzcjykls_times, AttrConst.daily_gzcjykls_rounds, AttrConst.daily_gzcjykls_boss]),
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
        e.prototype.getPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.GZCJ_YKLS, [1, 0])["catch"](function() {
                            throw new Error("进化光之惩戒出错")
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
        e.prototype.extractMonster = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.GZCJ_YKLS, [3, 2])["catch"](function() {
                            throw new Error("抽取第二关挑战monster的时候出现错误")
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
        e.prototype.exchangeItem = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.GZCJ_YKLS, [5, t])];
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
    __reflect(e.prototype, "pveYingKaLuoSi.MgrData")
} (pveYingKaLuoSi || (pveYingKaLuoSi = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
pveYingKaLuoSi; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "main",
        t.LEVEL1_PANEL = "level1",
        t.LEVEL2_PANEL = "level2",
        t.LEVEL3_PANEL = "level3",
        t.UP_ENERGY_PANEL = "upEnergy",
        t
    } ();
    t.PanelCont = e,
    __reflect(e.prototype, "pveYingKaLuoSi.PanelCont")
} (pveYingKaLuoSi || (pveYingKaLuoSi = {}));
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
pveYingKaLuoSi; !
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
    t.PveYingKaLuoSi = e,
    __reflect(e.prototype, "pveYingKaLuoSi.PveYingKaLuoSi")
} (pveYingKaLuoSi || (pveYingKaLuoSi = {}));
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
pveYingKaLuoSi; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompPointSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.setState = function(t) {
            this.light.visible = t
        },
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.CompPoint = e,
    __reflect(e.prototype, "pveYingKaLuoSi.CompPoint")
} (pveYingKaLuoSi || (pveYingKaLuoSi = {}));
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
pveYingKaLuoSi; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._bossIds = [12099, 12100, 12101, 12102, 12103, 12104],
            i._currentIdx = -1,
            i._canBattleBossFlag = !1,
            i.skinName = t.PveYingkaluosiLevel1Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "pve_yingkaluosi_level1_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.btns),
            this._monsterItems = [this.monster1, this.monster2, this.monster3, this.monster4, this.monster0],
            this._monsterItemFlags = [this.flagYhd_2, this.flagYhd_3, this.flagYhd_4, this.flagYhd_5, this.flagYhd],
            this.initEvents()
        },
        i.prototype.initEvents = function() {
            var t = this;
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
            ImageButtonUtil.add(this.btnGo,
            function() {
                PayManager.doPayFunc(function() {
                    if (t._canBattleBossFlag) t.onFastBattle(t._bossIds.length - 1);
                    else {
                        if (t._currentIdx < 0) return void Alarm.show("请先选择一个目标");
                        t.onFastBattle(t._currentIdx)
                    }
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnNormal_,
            function() {
                if (t._canBattleBossFlag) t.onBattle(t._bossIds.length - 1);
                else {
                    if (t._currentIdx < 0) return void Alarm.show("请先选择一个目标");
                    t.onBattle(t._currentIdx)
                }
            },
            this),
            this._monsterItems.forEach(function(e) {
                ImageButtonUtil.add(e,
                function() {
                    var i = t._monsterItems.indexOf(e);
                    t.onSelectedBoss(i)
                },
                t, !1, !1)
            })
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onSelectedBoss = function(t) {
            return this._currentIdx = t,
            this._currentIdx < 0 ? void(this.selected.visible = !1) : (this.selected.visible = !0, this.selected.x = this._monsterItems[t].x, void(this.selected.y = this._monsterItems[t].y))
        },
        i.prototype.onBattle = function(t) {
            FightManager.fightNoMapBoss("", this._bossIds[t])
        },
        i.prototype.onFastBattle = function(e) {
            var i = this,
            n = e == this._bossIds.length - 1 ? 252764 : 252763;
            KTool.buyProductByCallback(n, 1,
            function() {
                SocketConnection.sendByQueue(43285, [2, e + 1],
                function() {
                    t.MgrData.getInstance().updateValues().then(function() {
                        i.update()
                    })
                })
            })
        },
        i.prototype.beforeAdd = function() {
            this.onSelectedBoss( - 1)
        },
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            var e = this,
            i = t.MgrData.getInstance().getValue(AttrConst.forever_gzcjykls_fighted),
            n = 0;
            this._monsterItems.forEach(function(t, o) {
                var s = Boolean(BitUtil.getBit(i, o));
                s ? (t.alpha = .5, t.touchEnabled = !1, e._monsterItemFlags[o].visible = !0, o === e._currentIdx && e.onSelectedBoss( - 1), n++) : (t.alpha = 1, t.touchEnabled = !0, e._monsterItemFlags[o].visible = !1)
            }),
            n *= 20,
            this.txtProgress.text = n + " %";
            var o = ["恶灵兽击伤了贾斯丁站长，在站长恢复之前，我们必须守住这一波攻势\n点击头像即可进入对战", "贾斯丁站长已经恢复了，请一同击败幕后主使恶灵兽吧！"];
            this.elsjslgsdzczzchfzqwmbxszzybgs_djtxxzjljhtzjbsyjlhelschxs_.text = 100 > n ? o[0] : o[1],
            this.lock.visible = 100 > n,
            this.now.visible = 100 === n,
            this._canBattleBossFlag = 100 === n,
            this.Got.visible = !1,
            Boolean(BitUtil.getBit(i, this._bossIds.length - 1)) && (Alarm.show("当前系列关卡已经全部完成,点击确认返回主面板",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            }), this.Got.visible = !0)
        },
        i.prototype.removed = function() {},
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level1 = e,
    __reflect(e.prototype, "pveYingKaLuoSi.Level1", ["IPanel"])
} (pveYingKaLuoSi || (pveYingKaLuoSi = {}));
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
pveYingKaLuoSi; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._bossIds = [12105, 12106, 12107, 12108, 12109, 12110, 12111, 12112, 12113],
            i.skinName = t.PveYingkaluosiLevel2Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "pve_yingkaluosi_level2_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this._monsterItems = [this.a_1, this.a_2, this.a_3, this.a_4, this.a_5, this.a_6, this.a_7, this.a_8, this.a_9],
            this.initEvents(),
            this.adaptLeftContent(this.btns)
        },
        i.prototype.initEvents = function() {
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
            ImageButtonUtil.add(this.btnFught,
            function() {
                if (! (e._currentIdx > -1)) throw new Error("idx有误");
                FightManager.fightNoMapBoss("", e._bossIds[e._currentIdx])
            },
            this),
            ImageButtonUtil.add(this.btnChou,
            function() {
                e.btnChou.touchEnabled = !1,
                t.MgrData.getInstance().extractMonster().then(function() {
                    e.btnChou.touchEnabled = !0,
                    e.update()
                })["catch"](function() {
                    e.btnChou.touchEnabled = !0
                })
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                PayManager.doPayFunc(function() {
                    var i = t.MgrData.getInstance().getValue(AttrConst.forever_gzcjykls_ext);
                    0 == i ? KTool.buyProductByCallback(252766, 1,
                    function() {
                        SocketConnection.sendByQueue(43285, [3, 1],
                        function() {
                            t.MgrData.getInstance().updateValues().then(function() {
                                Alarm.show("当前系列关卡已经全部完成,点击确认返回主面板",
                                function() {
                                    t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
                                })
                            })
                        })
                    }) : KTool.buyProductByCallback(252765, 1,
                    function() {
                        SocketConnection.sendByQueue(43285, [3, 3],
                        function() {
                            t.MgrData.getInstance().updateValues().then(function() {
                                e.update()
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
        i.prototype.beforeAdd = function() {},
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            var e = t.MgrData.getInstance().getValue(AttrConst.forever_gzcjykls_ext);
            this._currentIdx = e - 1,
            0 === e ? (this.selected.visible = !1, this.btnFught.visible = !1, this.btnChou.visible = !0) : (this.btnFught.visible = !0, this.btnChou.visible = !1, this.selected.visible = !0, this.selected.x = this._monsterItems[e - 1].x - 10, this.selected.y = this._monsterItems[e - 1].y - 10);
            var i = t.MgrData.getInstance().getValue(AttrConst.forever_gzcjykls_cnt),
            n = 255 & i,
            o = i >> 8 & 255;
            this.txtYiZhi.text = n + "/10",
            this.txtZhengYi.text = o + "/10",
            10 === n && 10 === o && Alarm.show("当前系列关卡已经全部完成,点击确认返回主面板",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            })
        },
        i.prototype.removed = function() {},
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level2 = e,
    __reflect(e.prototype, "pveYingKaLuoSi.Level2", ["IPanel"])
} (pveYingKaLuoSi || (pveYingKaLuoSi = {}));
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
pveYingKaLuoSi; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._levelConfig = [{
                bits: [0, 1],
                bossImg: "a_3549",
                boss: 12114
            },
            {
                bits: [2, 3, 4],
                bossImg: "a_3477",
                boss: 12115
            },
            {
                bits: [5, 6, 7, 8],
                bossImg: "a_3564",
                boss: 12116
            },
            {
                bits: [9, 10, 11, 12, 13],
                bossImg: "a_3554",
                boss: 12117
            }],
            t.skinName = "PveYingkaluosiLevel3Skin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents(),
            this.initOldPveBtnClose(0, this, "pve_yingkaluosi_level3_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.btns),
            this.adaptRightContent(this.grp_right)
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                e._currentLevelIdx = null,
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return e._halfCnt <= 0 ? void Alarm.show("今日挑战次数不足") : void FightManager.fightNoMapBoss("", e._levelConfig[e._currentLevelIdx].boss)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback([252768, 252770, 252772, 252774][e._currentLevelIdx], 1,
                    function() {
                        SocketConnection.sendByQueue(43285, [4, 2],
                        function() {
                            t.MgrData.getInstance().updateValues().then(function() {
                                FightManager.isWin = !0,
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnJihuo,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback([252768, 252770, 252772, 252774][e._currentLevelIdx] - 1, 1,
                    function() {
                        SocketConnection.sendByQueue(43285, [4, 1],
                        function() {
                            t.MgrData.getInstance().updateValues().then(function() {
                                e.update()
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
        i.prototype.beforeAdd = function() {
            this._currentLevelIdx = void 0
        },
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            var e = this,
            i = t.MgrData.getInstance().getValue(AttrConst.forever_gzcjykls_activate),
            n = t.MgrData.getInstance().getValue(AttrConst.daily_gzcjykls_times),
            o = 20 - n;
            this._halfCnt = o,
            this.txt_count0.text = o + "";
            for (var s, r = 0; r < this._levelConfig.length; r++) {
                for (var a = this._levelConfig[r].bits, _ = 0; _ < a.length; _++) if (0 === BitUtil.getBit(i, a[_])) {
                    s = r;
                    break
                }
                if (s > -1) break
            }
            void 0 === s && (s = this._levelConfig.length - 1, setTimeout(function() {
                Alarm.show("当前系列关卡已经全部完成,点击确认返回主面板",
                function() {
                    t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
                })
            },
            0)),
            this._levelConfig.forEach(function(t, n) {
                if (e["level" + (n + 1)].visible = n === s, e[t.bossImg].visible = n === s, n === s) {
                    var o = !1;
                    t.bits.forEach(function(t) {
                        e["node" + t].setState(Boolean(BitUtil.getBit(i, t))),
                        Boolean(BitUtil.getBit(i, t)) && (o = !0)
                    }),
                    !o && e._currentLevelIdx >= 0 && e._currentLevelIdx == s && FightManager.isWin && BubblerManager.getInstance().showText("你激活了一个已经激活的节点，所有的节点都被重置了！")
                }
                s > n ? (e["done" + (n + 1)].visible = !0, e["light" + (n + 1)].visible = !0, e["dark" + (n + 1)].visible = !1) : n > s ? (e["done" + (n + 1)].visible = !1, e["light" + (n + 1)].visible = !1, e["dark" + (n + 1)].visible = !0) : (e["done" + (n + 1)].visible = !1, e["light" + (n + 1)].visible = !0, e["dark" + (n + 1)].visible = !1)
            }),
            this._currentLevelIdx = s
        },
        i.prototype.removed = function() {},
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level3 = e,
    __reflect(e.prototype, "pveYingKaLuoSi.Level3", ["IPanel"])
} (pveYingKaLuoSi || (pveYingKaLuoSi = {}));
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
pveYingKaLuoSi; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._petState = -1,
            i.skinName = t.PveYingkaluosiMainSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_CLOSE_MODULE)
            },
            this),
            this.onResize(),
            this.initEvents()
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnJianding,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_OPEN_PANEL, !1, "level1")
            },
            this),
            ImageButtonUtil.add(this.btnZhiming,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_OPEN_PANEL, !1, "level2")
            },
            this),
            ImageButtonUtil.add(this.btnChuangshuo,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_OPEN_PANEL, !1, "level3")
            },
            this),
            ImageButtonUtil.add(this.btnOne,
            function() {
                switch (e._petState) {
                case 0:
                    PayManager.doPayFunc(function() {
                        t.MgrData.getInstance().checkPetFirst(124) && KTool.getMultiValue([7095],
                        function(i) {
                            var n = i[0] > 0 ? 252816 + i[0] : 252762;
                            KTool.buyProductByCallback(n, 1,
                            function() {
                                t.MgrData.getInstance().getPet().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    e);
                    break;
                case 1:
                    t.MgrData.getInstance().checkPetFirst(124) && t.MgrData.getInstance().getPet().then(function() {
                        e.update()
                    });
                    break;
                case 2:
                    t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_OPEN_PANEL, !1, "upEnergy")
                }
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3577)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_CLOSE_MODULE),
                ModuleManager.showModuleByID(127)
            },
            this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this)
        },
        i.prototype.onResize = function() {
            this.width = egret.lifecycle.stage.stageWidth,
            this.height = egret.lifecycle.stage.stageHeight;
            var t = egret.lifecycle.stage.stageWidth / 1136,
            e = egret.lifecycle.stage.stageHeight / 640,
            i = t > e ? t: e;
            this.bg.scaleX = i,
            this.bg.scaleY = i
        },
        i.prototype.beforeAdd = function() {},
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            var e = t.MgrData.getInstance().getValue(AttrConst.forever_gzcjykls_state);
            this._level = e;
            for (var i = [this.btnJianding, this.btnZhiming, this.btnChuangshuo], n = [this.Got0, this.Got1, this.Got2], o = 0; o < i.length; o++) {
                var s = o;
                s === e ? (DisplayUtil.setEnabled(i[o], !0, !1), n[o].visible = !1, i[o].alpha = 1) : e > s ? (DisplayUtil.setEnabled(i[o], !1, !1), i[o].alpha = .5, n[o].visible = !0) : (DisplayUtil.setEnabled(i[o], !1, !0), n[o].visible = !1, i[o].alpha = 1)
            }
            var r = t.MgrData.getInstance().getValue(AttrConst.forever_gzcjykls_flag),
            a = Boolean(BitUtil.getBit(r, 0));
            this._petState = 0,
            this.txtLabel.text = "一键进化",
            a ? (this._petState = 2, this.txtLabel.text = "能力提升") : 3 === e && (this.txtLabel.text = "免费进化", this._petState = 1),
            this.Got.visible = a
        },
        i.prototype.removed = function() {},
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Main = e,
    __reflect(e.prototype, "pveYingKaLuoSi.Main", ["IPanel"])
} (pveYingKaLuoSi || (pveYingKaLuoSi = {}));
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
pveYingKaLuoSi; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._useItemId = 1715982,
            i._petCheckId = 3577,
            i.bossArry = [{
                battle: 12118,
                show: 2920,
                cnt: 1
            },
            {
                battle: 12119,
                show: 2663,
                cnt: 1
            },
            {
                battle: 12120,
                show: 1906,
                cnt: 2
            },
            {
                battle: 12121,
                show: 1750,
                cnt: 2
            },
            {
                battle: 12122,
                show: 1813,
                cnt: 2
            },
            {
                battle: 12123,
                show: 2082,
                cnt: 3
            },
            {
                battle: 12124,
                show: 2685,
                cnt: 3
            },
            {
                battle: 12125,
                show: 3135,
                cnt: 3
            },
            {
                battle: 12126,
                show: 3100,
                cnt: 5
            },
            {
                battle: 12127,
                show: 3423,
                cnt: 5
            }],
            i.skinName = t.PveYingkaluosiUpenergySkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents(),
            this.initOldPveBtnClose(40, this, "pve_yingkaluosi_upenergy_5_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.btns)
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnFix_,
            function() {
                BuyProductManager.buyProduct("252775_11225",
                function() {
                    t.MgrData.getInstance().updateValues().then(function() {
                        e.update()
                    })
                },
                e, 1715982)
            },
            this),
            ImageButtonUtil.add(this.btnFix,
            function() {
                e.doExchange(30, 1)
            },
            this),
            ImageButtonUtil.add(this.btnFix_2,
            function() {
                e.doExchange(40, 3)
            },
            this),
            ImageButtonUtil.add(this.btnFix_3,
            function() {
                e.doExchange(60, 2)
            },
            this),
            ImageButtonUtil.add(this.btnOk, core.gameUtil.throttle(function() {
                if (e._halfBattleCnt <= 0 && e._isStartFlag) return void Alarm.show("今日次数不足");
                var i = t.MgrData.getInstance().getValue(16825);
                FightManager.fightNoMapBoss("", e._currentBossInfo.battle, !1, !0,
                function() {
                    i === e.bossArry.length && FightManager.isWin && Alarm.show("恭喜你击败了全部对手，完成了本轮试炼！")
                })
            },
            this, 1e3, !0), this),
            ImageButtonUtil.add(this.mobiaoti_1,
            function() {
                var t = {};
                t.ins = 41192,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var t = {};
                t.id = 31847,
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_texing,
            function() {
                var t = [EffectIconControl.getConfigById(881)];
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t, "", AppDoStyle.NULL)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this)
        },
        i.prototype.doExchange = function(e, i) {
            var n = this,
            o = ItemManager.getNumByID(this._useItemId);
            if (e > o) return void Alarm.show("道具数量不足!");
            if (!PetManager.isDefaultPet(this._petCheckId)) {
                var s = PetXMLInfo.getName(this._petCheckId);
                return void Alarm.show("请先将" + s + "设为首发位置!",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            }
            t.MgrData.getInstance().exchangeItem(i).then(function() {
                BubblerManager.getInstance().showText("兑换成功"),
                n.update()
            })["catch"](function(t) {
                throw new Error("兑换choice为" + i + "的道具出现问题")
            })
        },
        i.prototype.beforeAdd = function() {},
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.update = function() {
            var e = this,
            i = t.MgrData.getInstance().getValue(AttrConst.forever_gzcjykls_flag),
            n = t.MgrData.getInstance().getValue(AttrConst.daily_gzcjykls_boss),
            o = t.MgrData.getInstance().getValue(AttrConst.daily_gzcjykls_rounds);
            this.txtLabel_4.text = 0 === n ? "开始试炼": "继续试炼";
            var s = this.bossArry[n];
            this._currentBossInfo = s,
            this._isStartFlag = 0 === n;
            var r = 10;
            this.txtRound.text = "第" + (n + 1) + "/" + r + "轮",
            this.txtitemCount.text = "惩戒之镰x" + s.cnt,
            this.txt_count2.text = 2 - o + "",
            RES.getResByUrl(ClientConfig.getfightPetPng(s.show + ""),
            function(t, i) {
                e.pet.source = t,
                e.pet.anchorOffsetX = .5 * t.textureWidth,
                e.pet.anchorOffsetY = t.textureHeight,
                e.pet.x = e.pet.y = 0
            },
            this);
            var a = Boolean(BitUtil.getBit(i, 1)),
            _ = Boolean(BitUtil.getBit(i, 2)),
            u = Boolean(BitUtil.getBit(i, 3));
            this.btnFix.visible = !a,
            this.flagYhd.visible = a,
            this.btnFix_3.visible = !_,
            this.flagYhd_3.visible = _,
            this.btnFix_2.visible = !u,
            this.flagYhd_2.visible = u,
            this.onUpdateByItemChangeEvent()
        },
        i.prototype.removed = function() {},
        i.prototype.onUpdateByItemChangeEvent = function(t) {
            void 0 === t && (t = null),
            this.txt_count.text = ItemManager.getNumByID(this._useItemId) + ""
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.UpEnergy = e,
    __reflect(e.prototype, "pveYingKaLuoSi.UpEnergy", ["IPanel"])
} (pveYingKaLuoSi || (pveYingKaLuoSi = {})),
window.pveYingKaLuoSi = window.pveYingKaLuoSi || {};
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
generateEUI.paths["resource/eui_skins/comp/CompPointSkin.exml"] = window.pveYingKaLuoSi.CompPointSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["dark", "light"],
        this.height = 85,
        this.width = 88,
        this.elementsContent = [this.dark_i(), this.light_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.dark_i = function() {
        var t = new eui.Image;
        return this.dark = t,
        t.source = "pve_yingkaluosi_level3_dark_png",
        t.x = 15,
        t.y = 15,
        t
    },
    i.light_i = function() {
        var t = new eui.Image;
        return this.light = t,
        t.source = "pve_yingkaluosi_level3_light_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveYingkaluosiLevel1Skin.exml"] = window.pveYingKaLuoSi.PveYingkaluosiLevel1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgBtn_pet", "imgBtn_cure", "btns", "selected", "monster0", "flagYhd", "monster1", "flagYhd_2", "monster2", "flagYhd_3", "monster3", "flagYhd_4", "monster4", "flagYhd_5", "huifu", "huifujindu", "txtProgress", "img", "now", "lock", "Got", "grpBoss", "btnGo", "btnNormal_", "txtbg", "elsjslgsdzczzchfzqwmbxszzybgs_djtxxzjljhtzjbsyjlhelschxs_"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.btns_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_yingkaluosi_level1_bg_png",
        t.y = 0,
        t
    },
    i.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.left = 31,
        t.y = 242,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "pve_yingkaluosi_level1_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "pve_yingkaluosi_level1_imgBtn_cure_png",
        t.x = 0,
        t.y = 72,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 370,
        t.horizontalCenter = -113.5,
        t.width = 543,
        t.y = 183,
        t.elementsContent = [this.selected_i(), this.monster0_i(), this.flagYhd_i(), this.monster1_i(), this.flagYhd_2_i(), this.monster2_i(), this.flagYhd_3_i(), this.monster3_i(), this.flagYhd_4_i(), this.monster4_i(), this.flagYhd_5_i()],
        t
    },
    i.selected_i = function() {
        var t = new eui.Image;
        return this.selected = t,
        t.source = "pve_yingkaluosi_level1_selected_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.monster0_i = function() {
        var t = new eui.Image;
        return this.monster0 = t,
        t.source = "pve_yingkaluosi_level1_monster0_png",
        t.x = .4,
        t.y = 2,
        t
    },
    i.flagYhd_i = function() {
        var t = new eui.Image;
        return this.flagYhd = t,
        t.source = "pve_yingkaluosi_level1_flagYhd_png",
        t.x = 29,
        t.y = 88,
        t
    },
    i.monster1_i = function() {
        var t = new eui.Image;
        return this.monster1 = t,
        t.source = "pve_yingkaluosi_level1_monster1_png",
        t.x = 189,
        t.y = 2,
        t
    },
    i.flagYhd_2_i = function() {
        var t = new eui.Image;
        return this.flagYhd_2 = t,
        t.source = "pve_yingkaluosi_level1_flagYhd_png",
        t.x = 211,
        t.y = 88,
        t
    },
    i.monster2_i = function() {
        var t = new eui.Image;
        return this.monster2 = t,
        t.source = "pve_yingkaluosi_level1_monster2_png",
        t.x = 385,
        t.y = 2,
        t
    },
    i.flagYhd_3_i = function() {
        var t = new eui.Image;
        return this.flagYhd_3 = t,
        t.source = "pve_yingkaluosi_level1_flagYhd_png",
        t.x = 408,
        t.y = 88,
        t
    },
    i.monster3_i = function() {
        var t = new eui.Image;
        return this.monster3 = t,
        t.source = "pve_yingkaluosi_level1_monster3_png",
        t.x = 105,
        t.y = 210,
        t
    },
    i.flagYhd_4_i = function() {
        var t = new eui.Image;
        return this.flagYhd_4 = t,
        t.source = "pve_yingkaluosi_level1_flagYhd_png",
        t.x = 132,
        t.y = 267,
        t
    },
    i.monster4_i = function() {
        var t = new eui.Image;
        return this.monster4 = t,
        t.source = "pve_yingkaluosi_level1_monster4_png",
        t.x = 294,
        t.y = 213,
        t
    },
    i.flagYhd_5_i = function() {
        var t = new eui.Image;
        return this.flagYhd_5 = t,
        t.source = "pve_yingkaluosi_level1_flagYhd_png",
        t.x = 322,
        t.y = 267,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.y = 419,
        t.elementsContent = [this.huifu_i(), this.huifujindu_i(), this.txtProgress_i()],
        t
    },
    i.huifu_i = function() {
        var t = new eui.Image;
        return this.huifu = t,
        t.source = "pve_yingkaluosi_level1_huifu_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.huifujindu_i = function() {
        var t = new eui.Label;
        return this.huifujindu = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "恢复进度",
        t.textColor = 11717744,
        t.x = 22,
        t.y = 150,
        t
    },
    i.txtProgress_i = function() {
        var t = new eui.Label;
        return this.txtProgress = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 40,
        t.text = "100%",
        t.textColor = 16777215,
        t.x = 80,
        t.y = 175,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 366,
        t.width = 392,
        t.y = 128,
        t.elementsContent = [this.grpBoss_i(), this.btnGo_i(), this.btnNormal__i()],
        t
    },
    i.grpBoss_i = function() {
        var t = new eui.Group;
        return this.grpBoss = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.img_i(), this.now_i(), this.lock_i(), this.Got_i()],
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.source = "pve_yingkaluosi_level1_img_png",
        t.visible = !0,
        t.x = 0,
        t.y = 250,
        t
    },
    i.now_i = function() {
        var t = new eui.Image;
        return this.now = t,
        t.source = "pve_yingkaluosi_level1_now_png",
        t.visible = !1,
        t.x = 7,
        t.y = 0,
        t
    },
    i.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.source = "pve_yingkaluosi_level1_lock_png",
        t.visible = !0,
        t.x = 14,
        t.y = 6,
        t
    },
    i.Got_i = function() {
        var t = new eui.Image;
        return this.Got = t,
        t.source = "pve_yingkaluosi_level1_Got_png",
        t.visible = !0,
        t.x = 46,
        t.y = 138,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "pve_yingkaluosi_level1_btnGo_png",
        t.x = 56,
        t.y = 414,
        t
    },
    i.btnNormal__i = function() {
        var t = new eui.Image;
        return this.btnNormal_ = t,
        t.source = "pve_yingkaluosi_level1_btnNormal__png",
        t.x = 56,
        t.y = 335,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = .5,
        t.y = 60,
        t.elementsContent = [this.txtbg_i(), this.elsjslgsdzczzchfzqwmbxszzybgs_djtxxzjljhtzjbsyjlhelschxs__i()],
        t
    },
    i.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.source = "pve_yingkaluosi_level1_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.elsjslgsdzczzchfzqwmbxszzybgs_djtxxzjljhtzjbsyjlhelschxs__i = function() {
        var t = new eui.Label;
        return this.elsjslgsdzczzchfzqwmbxszzybgs_djtxxzjljhtzjbsyjlhelschxs_ = t,
        t.size = 18,
        t.text = "恶灵兽击伤了贾斯丁站长，在站长恢复之前，我们必须守住这一波攻势\n点击头像选择精灵进行挑战，击败所有精灵后恶灵兽才会现身\n",
        t.textColor = 14221234,
        t.width = 565,
        t.x = 170,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveYingkaluosiLevel2Skin.exml"] = window.pveYingKaLuoSi.PveYingkaluosiLevel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgBtn_pet", "imgBtn_cure", "btns", "txtbg", "mjbymdryklshsjhd1dzdyzhzzygmrgjzyxlxdd10ddlzxccg2dtdnl_jhsh", "titleDesc", "a_1", "a_2", "a_3", "a_4", "a_5", "a_6", "a_7", "a_8", "a_9", "selected", "monsters", "bg22", "img", "zdyz", "zygm", "txtYiZhi", "txtZhengYi", "btnGo", "btnFught", "btnChou", "dekuang", "light1", "light1_2", "wenzi", "right"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.btns_i(), this.titleDesc_i(), this.monsters_i(), this.right_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_yingkaluosi_level1_bg_png",
        t.y = 0,
        t
    },
    i.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.left = 31,
        t.y = 242,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "pve_yingkaluosi_level1_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "pve_yingkaluosi_level1_imgBtn_cure_png",
        t.x = 0,
        t.y = 72,
        t
    },
    i.titleDesc_i = function() {
        var t = new eui.Group;
        return this.titleDesc = t,
        t.x = 60,
        t.y = 60,
        t.elementsContent = [this.txtbg_i(), this.mjbymdryklshsjhd1dzdyzhzzygmrgjzyxlxdd10ddlzxccg2dtdnl_jhsh_i()],
        t
    },
    i.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.source = "pve_yingkaluosi_level2_txtbg_png",
        t.x = 59,
        t.y = 0,
        t
    },
    i.mjbymdryklshsjhd1dzdyzhzzygmrgjzyxlxdd10ddlzxccg2dtdnl_jhsh_i = function() {
        var t = new eui.Label;
        return this.mjbymdryklshsjhd1dzdyzhzzygmrgjzyxlxdd10ddlzxccg2dtdnl_jhsh = t,
        t.size = 18,
        t.text = "每击败一名敌人，英卡洛斯会随机获得1点战斗意志或者正义光芒。如果其中一项率先达到10点，但两者相差超过2点，他的能力\n就会失衡。发生能力失衡时，达到10点的一项会被清空，另一项能力也会降低3点！当两项能力同时达到10点时，即可通过此关！",
        t.textAlign = "center",
        t.textColor = 14221235,
        t.width = 1031,
        t.x = 0,
        t.y = 7,
        t
    },
    i.monsters_i = function() {
        var t = new eui.Group;
        return this.monsters = t,
        t.height = 478,
        t.horizontalCenter = -164,
        t.width = 514,
        t.y = 126,
        t.elementsContent = [this.a_1_i(), this.a_2_i(), this.a_3_i(), this.a_4_i(), this.a_5_i(), this.a_6_i(), this.a_7_i(), this.a_8_i(), this.a_9_i(), this.selected_i()],
        t
    },
    i.a_1_i = function() {
        var t = new eui.Image;
        return this.a_1 = t,
        t.source = "pve_yingkaluosi_level2_1_png",
        t.x = 10,
        t.y = 10,
        t
    },
    i.a_2_i = function() {
        var t = new eui.Image;
        return this.a_2 = t,
        t.source = "pve_yingkaluosi_level2_2_png",
        t.x = 184,
        t.y = 10,
        t
    },
    i.a_3_i = function() {
        var t = new eui.Image;
        return this.a_3 = t,
        t.source = "pve_yingkaluosi_level2_3_png",
        t.x = 358,
        t.y = 10,
        t
    },
    i.a_4_i = function() {
        var t = new eui.Image;
        return this.a_4 = t,
        t.source = "pve_yingkaluosi_level2_4_png",
        t.x = 10,
        t.y = 172,
        t
    },
    i.a_5_i = function() {
        var t = new eui.Image;
        return this.a_5 = t,
        t.source = "pve_yingkaluosi_level2_5_png",
        t.x = 184,
        t.y = 172,
        t
    },
    i.a_6_i = function() {
        var t = new eui.Image;
        return this.a_6 = t,
        t.source = "pve_yingkaluosi_level2_6_png",
        t.x = 358,
        t.y = 172,
        t
    },
    i.a_7_i = function() {
        var t = new eui.Image;
        return this.a_7 = t,
        t.source = "pve_yingkaluosi_level2_7_png",
        t.x = 10,
        t.y = 334,
        t
    },
    i.a_8_i = function() {
        var t = new eui.Image;
        return this.a_8 = t,
        t.source = "pve_yingkaluosi_level2_8_png",
        t.x = 184,
        t.y = 334,
        t
    },
    i.a_9_i = function() {
        var t = new eui.Image;
        return this.a_9 = t,
        t.source = "pve_yingkaluosi_level2_9_png",
        t.x = 358,
        t.y = 334,
        t
    },
    i.selected_i = function() {
        var t = new eui.Image;
        return this.selected = t,
        t.source = "pve_yingkaluosi_level2_selected_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.horizontalCenter = 337,
        t.y = 138,
        t.elementsContent = [this.bg22_i(), this.img_i(), this.zdyz_i(), this.zygm_i(), this.txtYiZhi_i(), this.txtZhengYi_i(), this.btnGo_i(), this.btnFught_i(), this.btnChou_i(), this.dekuang_i(), this.light1_i(), this.light1_2_i(), this.wenzi_i()],
        t
    },
    i.bg22_i = function() {
        var t = new eui.Image;
        return this.bg22 = t,
        t.source = "pve_yingkaluosi_level2_bg22_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.source = "pve_yingkaluosi_level2_img_png",
        t.x = 28,
        t.y = 155,
        t
    },
    i.zdyz_i = function() {
        var t = new eui.Label;
        return this.zdyz = t,
        t.size = 24,
        t.text = "战斗意志",
        t.textColor = 16734016,
        t.x = 76,
        t.y = 168,
        t
    },
    i.zygm_i = function() {
        var t = new eui.Label;
        return this.zygm = t,
        t.size = 24,
        t.text = "正义光芒",
        t.textColor = 16771588,
        t.x = 250,
        t.y = 167,
        t
    },
    i.txtYiZhi_i = function() {
        var t = new eui.Label;
        return this.txtYiZhi = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 35,
        t.text = "10/10",
        t.textColor = 16777215,
        t.x = 70,
        t.y = 208,
        t
    },
    i.txtZhengYi_i = function() {
        var t = new eui.Label;
        return this.txtZhengYi = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 35,
        t.text = "10/10",
        t.textColor = 16777215,
        t.x = 246,
        t.y = 208,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "pve_yingkaluosi_level2_btnGo_png",
        t.x = 92,
        t.y = 394,
        t
    },
    i.btnFught_i = function() {
        var t = new eui.Image;
        return this.btnFught = t,
        t.source = "pve_yingkaluosi_level1_btnNormal__png",
        t.visible = !0,
        t.x = 92,
        t.y = 315,
        t
    },
    i.btnChou_i = function() {
        var t = new eui.Image;
        return this.btnChou = t,
        t.source = "pve_yingkaluosi_level2_btnChou_png",
        t.visible = !0,
        t.x = 92,
        t.y = 315,
        t
    },
    i.dekuang_i = function() {
        var t = new eui.Image;
        return this.dekuang = t,
        t.source = "pve_yingkaluosi_level2_dekuang_png",
        t.x = 67,
        t.y = 52,
        t
    },
    i.light1_i = function() {
        var t = new eui.Image;
        return this.light1 = t,
        t.source = "pve_yingkaluosi_level2_light1_png",
        t.x = 53,
        t.y = 49,
        t
    },
    i.light1_2_i = function() {
        var t = new eui.Image;
        return this.light1_2 = t,
        t.source = "pve_yingkaluosi_level2_light1_png",
        t.x = 53,
        t.y = 59,
        t
    },
    i.wenzi_i = function() {
        var t = new eui.Image;
        return this.wenzi = t,
        t.source = "pve_yingkaluosi_level2_wenzi_png",
        t.x = 104,
        t.y = 58,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveYingkaluosiLevel3Skin.exml"] = window.PveYingkaluosiLevel3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txtbg0", "jrsyzdcs0", "txt_count0", "battleCount", "imgBtn_pet", "imgBtn_cure", "btns", "jihuobg", "dark4", "light4", "dark3", "light3", "dark2", "light2", "dark1", "light1", "done1", "done2", "done3", "done4", "btnJihuo", "grp_right", "img", "a_3564", "a_3477", "a_3549", "a_3554", "pet", "btnGo", "btnFight", "node0", "node1", "level1", "node2", "node4", "node3", "level2", "node5", "node7", "node8", "node6", "level3", "node9", "node12", "node13", "node10", "node11", "level4", "center", "txtbg", "mcjbdsdhwyklsdsljhycjddqbjdbjhtjkywzjhyxsx_nxywyklsdsljh4cs", "titleDesc"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.battleCount_i(), this.btns_i(), this.grp_right_i(), this.center_i(), this.titleDesc_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_yingkaluosi_level1_bg_png",
        t.y = 0,
        t
    },
    i.battleCount_i = function() {
        var t = new eui.Group;
        return this.battleCount = t,
        t.right = 17,
        t.y = 7,
        t.elementsContent = [this.txtbg0_i(), this.jrsyzdcs0_i(), this.txt_count0_i()],
        t
    },
    i.txtbg0_i = function() {
        var t = new eui.Image;
        return this.txtbg0 = t,
        t.source = "pve_yingkaluosi_upenergy_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.jrsyzdcs0_i = function() {
        var t = new eui.Label;
        return this.jrsyzdcs0 = t,
        t.size = 18,
        t.text = "今日剩余战斗次数：",
        t.textColor = 16777215,
        t.x = 49,
        t.y = 12,
        t
    },
    i.txt_count0_i = function() {
        var t = new eui.Label;
        return this.txt_count0 = t,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.x = 211,
        t.y = 14,
        t
    },
    i.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.height = 132,
        t.left = 31,
        t.width = 60,
        t.y = 242,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "pve_yingkaluosi_level1_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "pve_yingkaluosi_level1_imgBtn_cure_png",
        t.x = 0,
        t.y = 72,
        t
    },
    i.grp_right_i = function() {
        var t = new eui.Group;
        return this.grp_right = t,
        t.height = 474,
        t.right = 4,
        t.visible = !0,
        t.width = 129,
        t.y = 61,
        t.elementsContent = [this.jihuobg_i(), this.dark4_i(), this.light4_i(), this.dark3_i(), this.light3_i(), this.dark2_i(), this.light2_i(), this.dark1_i(), this.light1_i(), this.done1_i(), this.done2_i(), this.done3_i(), this.done4_i(), this.btnJihuo_i()],
        t
    },
    i.jihuobg_i = function() {
        var t = new eui.Image;
        return this.jihuobg = t,
        t.source = "pve_yingkaluosi_level3_jihuobg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.dark4_i = function() {
        var t = new eui.Image;
        return this.dark4 = t,
        t.source = "pve_yingkaluosi_level3_dark3_png",
        t.visible = !0,
        t.x = 6,
        t.y = 290,
        t
    },
    i.light4_i = function() {
        var t = new eui.Image;
        return this.light4 = t,
        t.source = "pve_yingkaluosi_level3_light3_png",
        t.visible = !0,
        t.x = 2,
        t.y = 285,
        t
    },
    i.dark3_i = function() {
        var t = new eui.Image;
        return this.dark3 = t,
        t.source = "pve_yingkaluosi_level3_dark4_png",
        t.visible = !0,
        t.x = 6,
        t.y = 224,
        t
    },
    i.light3_i = function() {
        var t = new eui.Image;
        return this.light3 = t,
        t.source = "pve_yingkaluosi_level3_light4_png",
        t.visible = !0,
        t.x = 2,
        t.y = 219,
        t
    },
    i.dark2_i = function() {
        var t = new eui.Image;
        return this.dark2 = t,
        t.source = "pve_yingkaluosi_level3_dark1_png",
        t.visible = !0,
        t.x = 6,
        t.y = 159,
        t
    },
    i.light2_i = function() {
        var t = new eui.Image;
        return this.light2 = t,
        t.source = "pve_yingkaluosi_level3_light1_png",
        t.visible = !0,
        t.x = 2,
        t.y = 154,
        t
    },
    i.dark1_i = function() {
        var t = new eui.Image;
        return this.dark1 = t,
        t.source = "pve_yingkaluosi_level3_dark2_png",
        t.visible = !0,
        t.x = 6,
        t.y = 94,
        t
    },
    i.light1_i = function() {
        var t = new eui.Image;
        return this.light1 = t,
        t.source = "pve_yingkaluosi_level3_light2_png",
        t.visible = !0,
        t.x = 2,
        t.y = 89,
        t
    },
    i.done1_i = function() {
        var t = new eui.Image;
        return this.done1 = t,
        t.source = "pve_yingkaluosi_level3_done_png",
        t.visible = !1,
        t.x = 7,
        t.y = 94,
        t
    },
    i.done2_i = function() {
        var t = new eui.Image;
        return this.done2 = t,
        t.source = "pve_yingkaluosi_level3_done_png",
        t.visible = !1,
        t.x = 7,
        t.y = 159,
        t
    },
    i.done3_i = function() {
        var t = new eui.Image;
        return this.done3 = t,
        t.source = "pve_yingkaluosi_level3_done_png",
        t.visible = !1,
        t.x = 7,
        t.y = 224,
        t
    },
    i.done4_i = function() {
        var t = new eui.Image;
        return this.done4 = t,
        t.source = "pve_yingkaluosi_level3_done_png",
        t.visible = !1,
        t.x = 7,
        t.y = 290,
        t
    },
    i.btnJihuo_i = function() {
        var t = new eui.Image;
        return this.btnJihuo = t,
        t.source = "pve_yingkaluosi_level3_btnJihuo_png",
        t.x = 8,
        t.y = 361,
        t
    },
    i.center_i = function() {
        var t = new eui.Group;
        return this.center = t,
        t.height = 540,
        t.horizontalCenter = -8.5,
        t.width = 859,
        t.y = 79,
        t.elementsContent = [this.img_i(), this.pet_i(), this.btnGo_i(), this.btnFight_i(), this.level1_i(), this.level2_i(), this.level3_i(), this.level4_i()],
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.source = "pve_yingkaluosi_level3_img_png",
        t.x = 203,
        t.y = 380,
        t
    },
    i.pet_i = function() {
        var t = new eui.Group;
        return this.pet = t,
        t.x = 90,
        t.y = 0,
        t.elementsContent = [this.a_3564_i(), this.a_3477_i(), this.a_3549_i(), this.a_3554_i()],
        t
    },
    i.a_3564_i = function() {
        var t = new eui.Image;
        return this.a_3564 = t,
        t.source = "pve_yingkaluosi_level3_3564_png",
        t.visible = !1,
        t.x = 100,
        t.y = 5,
        t
    },
    i.a_3477_i = function() {
        var t = new eui.Image;
        return this.a_3477 = t,
        t.source = "pve_yingkaluosi_level3_3477_png",
        t.visible = !1,
        t.x = 14,
        t.y = 0,
        t
    },
    i.a_3549_i = function() {
        var t = new eui.Image;
        return this.a_3549 = t,
        t.source = "pve_yingkaluosi_level3_3549_png",
        t.visible = !1,
        t.x = 0,
        t.y = 31,
        t
    },
    i.a_3554_i = function() {
        var t = new eui.Image;
        return this.a_3554 = t,
        t.source = "pve_yingkaluosi_level3_3554_png",
        t.visible = !1,
        t.x = 105,
        t.y = 4,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "pve_yingkaluosi_level1_btnGo_png",
        t.x = 447,
        t.y = 463,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "pve_yingkaluosi_level3_btnFight_png",
        t.x = 190,
        t.y = 463,
        t
    },
    i.level1_i = function() {
        var t = new eui.Group;
        return this.level1 = t,
        t.visible = !1,
        t.x = 29,
        t.y = 140,
        t.elementsContent = [this.node0_i(), this.node1_i()],
        t
    },
    i.node0_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node0 = t,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t
    },
    i.node1_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node1 = t,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 25,
        t.y = 96,
        t
    },
    i.level2_i = function() {
        var t = new eui.Group;
        return this.level2 = t,
        t.visible = !1,
        t.x = 17,
        t.y = 113,
        t.elementsContent = [this.node2_i(), this.node4_i(), this.node3_i()],
        t
    },
    i.node2_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t
    },
    i.node4_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.y = 142,
        t
    },
    i.node3_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 61,
        t.y = 70,
        t
    },
    i.level3_i = function() {
        var t = new eui.Group;
        return this.level3 = t,
        t.visible = !1,
        t.x = 18,
        t.y = 101,
        t.elementsContent = [this.node5_i(), this.node7_i(), this.node8_i(), this.node6_i()],
        t
    },
    i.node5_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node5 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 0,
        t.y = 0,
        t
    },
    i.node7_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node7 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 0,
        t.y = 105,
        t
    },
    i.node8_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node8 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 75,
        t.y = 174,
        t
    },
    i.node6_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node6 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 75,
        t.y = 61,
        t
    },
    i.level4_i = function() {
        var t = new eui.Group;
        return this.level4 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 90,
        t.elementsContent = [this.node9_i(), this.node12_i(), this.node13_i(), this.node10_i(), this.node11_i()],
        t
    },
    i.node9_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node9 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 6,
        t.y = 0,
        t
    },
    i.node12_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node12 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 0,
        t.y = 144,
        t
    },
    i.node13_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node13 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 52,
        t.y = 216,
        t
    },
    i.node10_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node10 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 97,
        t.y = 1,
        t
    },
    i.node11_i = function() {
        var t = new pveYingKaLuoSi.CompPoint;
        return this.node11 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.skinName = "pveYingKaLuoSi.CompPointSkin",
        t.x = 52,
        t.y = 74,
        t
    },
    i.titleDesc_i = function() {
        var t = new eui.Group;
        return this.titleDesc = t,
        t.horizontalCenter = .5,
        t.y = 60,
        t.elementsContent = [this.txtbg_i(), this.mcjbdsdhwyklsdsljhycjddqbjdbjhtjkywzjhyxsx_nxywyklsdsljh4cs_i()],
        t
    },
    i.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.source = "pve_yingkaluosi_level3_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.mcjbdsdhwyklsdsljhycjddqbjdbjhtjkywzjhyxsx_nxywyklsdsljh4cs_i = function() {
        var t = new eui.Label;
        return this.mcjbdsdhwyklsdsljhycjddqbjdbjhtjkywzjhyxsx_nxywyklsdsljh4cs = t,
        t.size = 18,
        t.text = "每次击败对手，都会为英卡洛斯的双镰激活一处节点。当全部节点被激活，它就可以完整激活一项属性！\n你需要为英卡洛斯的双镰激活4种属性。注意，如果激活了重复节点，会令当前属性内的节点全部重置！",
        t.textAlign = "center",
        t.textColor = 14221234,
        t.width = 842,
        t.x = 28,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveYingkaluosiMainSkin.exml"] = window.pveYingKaLuoSi.PveYingkaluosiMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnInfo", "btnJianding", "btnZhiming", "btnChuangshuo", "Got0", "Got1", "Got2", "btnGet", "img_j", "jinhuabixu", "title", "Got", "txtLabel", "btnOne"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.btnInfo_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "pve_yingkaluosi_main_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.left = 27,
        t.source = "pve_yingkaluosi_main_btnInfo_png",
        t.y = 547,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 318,
        t.horizontalCenter = 337,
        t.width = 328,
        t.y = 155,
        t.elementsContent = [this.btnJianding_i(), this.btnZhiming_i(), this.btnChuangshuo_i(), this.Got0_i(), this.Got1_i(), this.Got2_i()],
        t
    },
    i.btnJianding_i = function() {
        var t = new eui.Image;
        return this.btnJianding = t,
        t.source = "pve_yingkaluosi_main_btnJianding_png",
        t.x = 5,
        t.y = 0,
        t
    },
    i.btnZhiming_i = function() {
        var t = new eui.Image;
        return this.btnZhiming = t,
        t.source = "pve_yingkaluosi_main_btnZhiming_png",
        t.x = 0,
        t.y = 118,
        t
    },
    i.btnChuangshuo_i = function() {
        var t = new eui.Image;
        return this.btnChuangshuo = t,
        t.source = "pve_yingkaluosi_main_btnChuangshuo__png",
        t.x = 3,
        t.y = 234,
        t
    },
    i.Got0_i = function() {
        var t = new eui.Image;
        return this.Got0 = t,
        t.source = "pve_yingkaluosi_main-1_tag_png",
        t.x = 55,
        t.y = 35,
        t
    },
    i.Got1_i = function() {
        var t = new eui.Image;
        return this.Got1 = t,
        t.source = "pve_yingkaluosi_main-1_tag_png",
        t.x = 55,
        t.y = 144.759,
        t
    },
    i.Got2_i = function() {
        var t = new eui.Image;
        return this.Got2 = t,
        t.source = "pve_yingkaluosi_main-1_tag_png",
        t.visible = !0,
        t.x = 55,
        t.y = 256.088,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 100,
        t.right = 60,
        t.width = 320,
        t.y = 524,
        t.elementsContent = [this.btnGet_i(), this.img_j_i(), this.jinhuabixu_i()],
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "pve_yingkaluosi_main_btnGet_png",
        t.x = 87,
        t.y = 0,
        t
    },
    i.img_j_i = function() {
        var t = new eui.Image;
        return this.img_j = t,
        t.source = "pve_yingkaluosi_main_img_j_png",
        t.x = 39,
        t.y = 81,
        t
    },
    i.jinhuabixu_i = function() {
        var t = new eui.Label;
        return this.jinhuabixu = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "进化必需",
        t.textColor = 7317860,
        t.x = 0,
        t.y = 56,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 397,
        t.horizontalCenter = -202,
        t.width = 590,
        t.y = 225,
        t.elementsContent = [this.title_i(), this.Got_i(), this.btnOne_i()],
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pve_yingkaluosi_main_title_png",
        t.x = 0,
        t.y = 106,
        t
    },
    i.Got_i = function() {
        var t = new eui.Image;
        return this.Got = t,
        t.source = "pve_yingkaluosi_main_Got_png",
        t.x = 161,
        t.y = 0,
        t
    },
    i.btnOne_i = function() {
        var t = new eui.Group;
        return this.btnOne = t,
        t.x = 167,
        t.y = 320,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 77,
        t.source = "pve_yingkaluosi_main-1_bg_png",
        t.width = 251,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 36,
        t.text = "一键进化",
        t.textColor = 16777215,
        t.x = 52,
        t.y = 22,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveYingkaluosiUpenergySkin.exml"] = window.pveYingKaLuoSi.PveYingkaluosiUpenergySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "storebg_s9", "buybg", "btnFix_", "txt_name", "yiyongyou", "txt_count", "a_1715982_244236", "itemBuy", "buybg_2", "txtLabel", "btnFix", "flagYhd", "txt_name_2", "dhxy", "txt_count_2", "a_1715982_244236_2", "mobiaoti_1", "itemExchange1", "buybg_3", "txtLabel_2", "btnFix_2", "flagYhd_2", "diwujineng", "dhxy_2", "txt_count_3", "a_1715982_244236_3", "icon_1", "itemExchange2", "buybg_4", "txtLabel_3", "btnFix_3", "flagYhd_3", "zstx", "dhxy_3", "txt_count_4", "a_1715982_244236_4", "icon_texing", "itemExchange3", "right", "petbg", "txtRound", "pet", "tipsbg", "txtitemCount", "jbkhd", "icon", "txtLabel_4", "btnOk", "left", "btnPet", "btnCure", "btns", "txtbg", "jrsyzdcs", "txt_count2", "battleCount"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.right_i(), this.left_i(), this.btns_i(), this.battleCount_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "pve_yingkaluosi_level1_bg_png",
        t.y = 0,
        t
    },
    i.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.height = 495,
        t.horizontalCenter = 290,
        t.width = 422,
        t.y = 91,
        t.elementsContent = [this.storebg_s9_i(), this.itemBuy_i(), this.itemExchange1_i(), this.itemExchange2_i(), this.itemExchange3_i()],
        t
    },
    i.storebg_s9_i = function() {
        var t = new eui.Image;
        return this.storebg_s9 = t,
        t.height = 495,
        t.scale9Grid = new egret.Rectangle(16, 15, 17, 14),
        t.source = "pve_yingkaluosi_upenergy_storebg_s9_png",
        t.width = 422,
        t.x = 0,
        t.y = 0,
        t
    },
    i.itemBuy_i = function() {
        var t = new eui.Group;
        return this.itemBuy = t,
        t.x = 15,
        t.y = 30,
        t.elementsContent = [this.buybg_i(), this.btnFix__i(), this.txt_name_i(), this.yiyongyou_i(), this.txt_count_i(), this.a_1715982_244236_i()],
        t
    },
    i.buybg_i = function() {
        var t = new eui.Image;
        return this.buybg = t,
        t.source = "pve_yingkaluosi_upenergy_buybg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFix__i = function() {
        var t = new eui.Image;
        return this.btnFix_ = t,
        t.source = "pve_yingkaluosi_upenergy_btnFix__png",
        t.x = 246,
        t.y = 53,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "惩戒之镰",
        t.textColor = 16773461,
        t.x = 109,
        t.y = 20,
        t
    },
    i.yiyongyou_i = function() {
        var t = new eui.Label;
        return this.yiyongyou = t,
        t.size = 18,
        t.text = "已拥有：",
        t.textColor = 16773461,
        t.x = 110,
        t.y = 73,
        t
    },
    i.txt_count_i = function() {
        var t = new eui.Label;
        return this.txt_count = t,
        t.size = 18,
        t.text = "1",
        t.textColor = 16773461,
        t.x = 182,
        t.y = 75,
        t
    },
    i.a_1715982_244236_i = function() {
        var t = new eui.Image;
        return this.a_1715982_244236 = t,
        t.source = "pve_yingkaluosi_upenergy_1715982_244236_png",
        t.x = 30,
        t.y = 34,
        t
    },
    i.itemExchange1_i = function() {
        var t = new eui.Group;
        return this.itemExchange1 = t,
        t.x = 15,
        t.y = 138,
        t.elementsContent = [this.buybg_2_i(), this.btnFix_i(), this.flagYhd_i(), this.txt_name_2_i(), this.dhxy_i(), this.txt_count_2_i(), this.a_1715982_244236_2_i(), this.mobiaoti_1_i()],
        t
    },
    i.buybg_2_i = function() {
        var t = new eui.Image;
        return this.buybg_2 = t,
        t.source = "pve_yingkaluosi_upenergy_buybg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFix_i = function() {
        var t = new eui.Group;
        return this.btnFix = t,
        t.x = 246,
        t.y = 53,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "立即兑换",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    i.flagYhd_i = function() {
        var t = new eui.Image;
        return this.flagYhd = t,
        t.source = "pve_yingkaluosi_upenergy_flagYhd_png",
        t.visible = !0,
        t.x = 234,
        t.y = 47,
        t
    },
    i.txt_name_2_i = function() {
        var t = new eui.Label;
        return this.txt_name_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "专属刻印",
        t.textColor = 9363073,
        t.x = 109,
        t.y = 20,
        t
    },
    i.dhxy_i = function() {
        var t = new eui.Label;
        return this.dhxy = t,
        t.size = 18,
        t.text = "兑换需要：",
        t.textColor = 9363073,
        t.x = 108,
        t.y = 73,
        t
    },
    i.txt_count_2_i = function() {
        var t = new eui.Label;
        return this.txt_count_2 = t,
        t.size = 18,
        t.text = "30",
        t.textColor = 16773461,
        t.x = 210,
        t.y = 75,
        t
    },
    i.a_1715982_244236_2_i = function() {
        var t = new eui.Image;
        return this.a_1715982_244236_2 = t,
        t.height = 22,
        t.source = "pve_yingkaluosi_upenergy_1715982_244236_png",
        t.width = 25,
        t.x = 185,
        t.y = 70,
        t
    },
    i.mobiaoti_1_i = function() {
        var t = new eui.Image;
        return this.mobiaoti_1 = t,
        t.source = "pve_yingkaluosi_upenergy_mobiaoti_1_png",
        t.x = 32,
        t.y = 29,
        t
    },
    i.itemExchange2_i = function() {
        var t = new eui.Group;
        return this.itemExchange2 = t,
        t.x = 15,
        t.y = 246,
        t.elementsContent = [this.buybg_3_i(), this.btnFix_2_i(), this.flagYhd_2_i(), this.diwujineng_i(), this.dhxy_2_i(), this.txt_count_3_i(), this.a_1715982_244236_3_i(), this.icon_1_i()],
        t
    },
    i.buybg_3_i = function() {
        var t = new eui.Image;
        return this.buybg_3 = t,
        t.source = "pve_yingkaluosi_upenergy_buybg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFix_2_i = function() {
        var t = new eui.Group;
        return this.btnFix_2 = t,
        t.x = 246,
        t.y = 53,
        t.elementsContent = [this._Image2_i(), this.txtLabel_2_i()],
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
        t.text = "立即兑换",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    i.flagYhd_2_i = function() {
        var t = new eui.Image;
        return this.flagYhd_2 = t,
        t.source = "pve_yingkaluosi_upenergy_flagYhd_png",
        t.x = 234,
        t.y = 47,
        t
    },
    i.diwujineng_i = function() {
        var t = new eui.Label;
        return this.diwujineng = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "第五技能",
        t.textColor = 9363073,
        t.x = 109,
        t.y = 20,
        t
    },
    i.dhxy_2_i = function() {
        var t = new eui.Label;
        return this.dhxy_2 = t,
        t.size = 18,
        t.text = "兑换需要：",
        t.textColor = 9363073,
        t.x = 108,
        t.y = 73,
        t
    },
    i.txt_count_3_i = function() {
        var t = new eui.Label;
        return this.txt_count_3 = t,
        t.size = 18,
        t.text = "40",
        t.textColor = 16773461,
        t.x = 209,
        t.y = 75,
        t
    },
    i.a_1715982_244236_3_i = function() {
        var t = new eui.Image;
        return this.a_1715982_244236_3 = t,
        t.height = 22,
        t.source = "pve_yingkaluosi_upenergy_1715982_244236_png",
        t.width = 25,
        t.x = 185,
        t.y = 71,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.source = "pve_yingkaluosi_upenergy_icon_1_png",
        t.x = 36,
        t.y = 34,
        t
    },
    i.itemExchange3_i = function() {
        var t = new eui.Group;
        return this.itemExchange3 = t,
        t.x = 15,
        t.y = 354,
        t.elementsContent = [this.buybg_4_i(), this.btnFix_3_i(), this.flagYhd_3_i(), this.zstx_i(), this.dhxy_3_i(), this.txt_count_4_i(), this.a_1715982_244236_4_i(), this.icon_texing_i()],
        t
    },
    i.buybg_4_i = function() {
        var t = new eui.Image;
        return this.buybg_4 = t,
        t.source = "pve_yingkaluosi_upenergy_buybg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFix_3_i = function() {
        var t = new eui.Group;
        return this.btnFix_3 = t,
        t.x = 246,
        t.y = 53,
        t.elementsContent = [this._Image3_i(), this.txtLabel_3_i()],
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
        t.text = "立即兑换",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    i.flagYhd_3_i = function() {
        var t = new eui.Image;
        return this.flagYhd_3 = t,
        t.source = "pve_yingkaluosi_upenergy_flagYhd_png",
        t.x = 234,
        t.y = 47,
        t
    },
    i.zstx_i = function() {
        var t = new eui.Label;
        return this.zstx = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "专属特性",
        t.textColor = 9363073,
        t.x = 109,
        t.y = 20,
        t
    },
    i.dhxy_3_i = function() {
        var t = new eui.Label;
        return this.dhxy_3 = t,
        t.size = 18,
        t.text = "兑换需要：",
        t.textColor = 9363073,
        t.x = 108,
        t.y = 73,
        t
    },
    i.txt_count_4_i = function() {
        var t = new eui.Label;
        return this.txt_count_4 = t,
        t.size = 18,
        t.text = "60",
        t.textColor = 16773461,
        t.x = 210,
        t.y = 75,
        t
    },
    i.a_1715982_244236_4_i = function() {
        var t = new eui.Image;
        return this.a_1715982_244236_4 = t,
        t.height = 22,
        t.source = "pve_yingkaluosi_upenergy_1715982_244236_png",
        t.width = 25,
        t.x = 185,
        t.y = 71,
        t
    },
    i.icon_texing_i = function() {
        var t = new eui.Image;
        return this.icon_texing = t,
        t.source = "pve_yingkaluosi_upenergy_icon_texing_png",
        t.x = 38,
        t.y = 32,
        t
    },
    i.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.horizontalCenter = -188,
        t.y = 80,
        t.elementsContent = [this.petbg_i(), this.txtRound_i(), this._Group1_i(), this.tipsbg_i(), this.txtitemCount_i(), this.jbkhd_i(), this.icon_i(), this.btnOk_i()],
        t
    },
    i.petbg_i = function() {
        var t = new eui.Image;
        return this.petbg = t,
        t.source = "pve_yingkaluosi_upenergy_petbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtRound_i = function() {
        var t = new eui.Label;
        return this.txtRound = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "第一轮",
        t.textColor = 16777215,
        t.x = 224,
        t.y = 34,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 0,
        t.width = 0,
        t.x = 263,
        t.y = 364,
        t.elementsContent = [this.pet_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_yingkaluosi_upenergy_pet_png",
        t.x = -143,
        t.y = -269.9999999999999,
        t
    },
    i.tipsbg_i = function() {
        var t = new eui.Image;
        return this.tipsbg = t,
        t.source = "pve_yingkaluosi_upenergy_tipsbg_png",
        t.x = 33,
        t.y = 372,
        t
    },
    i.txtitemCount_i = function() {
        var t = new eui.Label;
        return this.txtitemCount = t,
        t.size = 20,
        t.text = " 惩戒之镰x1",
        t.textColor = 16773461,
        t.x = 286,
        t.y = 380,
        t
    },
    i.jbkhd_i = function() {
        var t = new eui.Label;
        return this.jbkhd = t,
        t.size = 20,
        t.text = "击败可获得    ",
        t.textColor = 16773461,
        t.width = 104,
        t.x = 136,
        t.y = 381,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "pve_yingkaluosi_upenergy_icon_png",
        t.x = 243,
        t.y = 376,
        t
    },
    i.btnOk_i = function() {
        var t = new eui.Group;
        return this.btnOk = t,
        t.x = 188,
        t.y = 428,
        t.elementsContent = [this._Image4_i(), this.txtLabel_4_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_4_i = function() {
        var t = new eui.Label;
        return this.txtLabel_4 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "开始挑战",
        t.textColor = 9261339,
        t.x = 34,
        t.y = 11,
        t
    },
    i.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.x = 53,
        t.y = 252,
        t.elementsContent = [this.btnPet_i(), this.btnCure_i()],
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "pve_yingkaluosi_level1_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "pve_yingkaluosi_level1_imgBtn_cure_png",
        t.x = 0,
        t.y = 76,
        t
    },
    i.battleCount_i = function() {
        var t = new eui.Group;
        return this.battleCount = t,
        t.right = 17,
        t.y = 7,
        t.elementsContent = [this.txtbg_i(), this.jrsyzdcs_i(), this.txt_count2_i()],
        t
    },
    i.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.source = "pve_yingkaluosi_upenergy_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.jrsyzdcs_i = function() {
        var t = new eui.Label;
        return this.jrsyzdcs = t,
        t.size = 18,
        t.text = "今日剩余战斗次数：",
        t.textColor = 16777215,
        t.x = 49,
        t.y = 12,
        t
    },
    i.txt_count2_i = function() {
        var t = new eui.Label;
        return this.txt_count2 = t,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.x = 211,
        t.y = 14,
        t
    },
    e
} (eui.Skin);