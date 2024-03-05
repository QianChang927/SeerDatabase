var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(r, s) {
        function a(t) {
            try {
                u(i.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                u(i["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new n(function(e) {
                e(t.value)
            }).then(a, o)
        }
        u((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, s && (a = s[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(s, n[1])).done) return a;
            switch (s = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                s = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = n;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(n);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = e.call(t, u)
        } catch(i) {
            n = [6, i],
            s = 0
        } finally {
            r = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var r, s, a, o, u = {
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
pveZhanZhiKuangRe; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.setValues([AttrConst.forever_yklszzkr_state, AttrConst.forever_yklszzkr_levelState, AttrConst.forever_yklszzkr_level2val, AttrConst.forever_yklszzkr_level3progress, AttrConst.forever_yklszzkr_level3_yxzx, AttrConst.forever_yklszzkr_level4hurt], [AttrConst.daily_yklszzkr_level2Cnt, AttrConst.daily_yklszzkr_level3Cnt, AttrConst.daily_yklszzkr_level4Cnt, AttrConst.daily_yklszzkr_level4State, AttrConst.daily_yklszzkr_upEneryCnt, AttrConst.daily_yklszzkr_level3Taget, AttrConst.daily_yklszzkr_level2Round]),
            e
        }
        return __extends(e, t),
        e.getInstance = function() {
            return e._ins || (e._ins = new e),
            e._ins
        },
        e.prototype.getPetByOneKey = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.EXCHANGE_CLOTH_COMPLETE, [11243])["catch"](function() {
                            throw new Error("战之狂热形态输出出错")
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
                        return [4, SocketConnection.sendWithPromise(CommandID.EXCHANGE_CLOTH_COMPLETE, [11261])["catch"](function() {
                            throw new Error("战之狂热形态输出出错")
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
        e.prototype.checkCompleteLevel = function(t) {
            var e = this,
            n = this.getValue(AttrConst.forever_yklszzkr_levelState);
            n >= t && egret.setTimeout(function() {
                Alarm.show("当前系列关卡已经全部完成,点击确认返回主面板",
                function() {
                    e.dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
                })
            },
            this, 0)
        },
        e.prototype.oneKeyPassLv = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.YKLS_ZZKR, [16, t])["catch"](function() {
                            throw new Error("战之狂热一键通关出错 flag=== 16  choice ====" + t)
                        })];
                    case 1:
                        return e = n.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return n.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.level3Msg = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.YKLS_ZZKR, [17, t])["catch"](function() {
                            throw new Error("战之狂热形态输出出错 flag=== 17  choice ====" + t)
                        })];
                    case 1:
                        return e = n.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return n.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.level4Msg = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.YKLS_ZZKR, [18, t])["catch"](function() {
                            throw new Error("战之狂热形态输出出错 flag=== 18  choice ====" + t)
                        })];
                    case 1:
                        return e = n.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return n.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.UpEnergyMsg = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.YKLS_ZZKR, [19, t])["catch"](function() {
                            throw new Error("战之狂热形态输出出错 flag=== 19  choice ====" + t)
                        })];
                    case 1:
                        return e = n.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return n.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e
    } (BasicMgrData);
    t.MgrData = e,
    __reflect(e.prototype, "pveZhanZhiKuangRe.MgrData")
} (pveZhanZhiKuangRe || (pveZhanZhiKuangRe = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
pveZhanZhiKuangRe; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.init({
                main: {
                    panel: t.Main,
                    isMain: !0
                },
                level1: {
                    panel: t.Level1Panel
                },
                level2: {
                    panel: t.Level2Panel
                },
                level3: {
                    panel: t.Level3Panel
                },
                level4: {
                    panel: t.Level4Panel
                },
                upEnergy: {
                    panel: t.UpEnergyPanel
                }
            },
            t.MgrData.getInstance()),
            n
        }
        return __extends(n, e),
        n.prototype.initlized = function() {
            var e = this;
            t.MgrData.getInstance().updateValues().then(function() {
                e.openPanel("main")
            })
        },
        n
    } (BasicMainPanel);
    t.PveZhanZhiKuangRe = e,
    __reflect(e.prototype, "pveZhanZhiKuangRe.PveZhanZhiKuangRe")
} (pveZhanZhiKuangRe || (pveZhanZhiKuangRe = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
pveZhanZhiKuangRe; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._lock = !1,
            n.skinName = t.Level1Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "level1_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.btns),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
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
            ImageButtonUtil.add(this.btnFight,
            function() {
                e._lock || (SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [728, 0, 0, 0, 0, 0]), e._lock = !0)
            },
            this),
            ImageButtonUtil.add(this.btnOne,
            function() {
                BuyProductManager.buyProductBySocket(252839,
                function() {
                    SocketConnection.sendByQueue(42362, [16, 1],
                    function() {
                        t.MgrData.getInstance().updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.beforeAdd = function() {},
        n.prototype.beforeUpdate = function() {
            return this._lock = !1,
            Promise.resolve()
        },
        n.prototype.update = function() {
            t.MgrData.getInstance().checkCompleteLevel(1)
        },
        n.prototype.removed = function() {},
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.Level1Panel = e,
    __reflect(e.prototype, "pveZhanZhiKuangRe.Level1Panel", ["IPanel"])
} (pveZhanZhiKuangRe || (pveZhanZhiKuangRe = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
pveZhanZhiKuangRe; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "pveZhanZhiKuangRe.Level2Skin",
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "level2_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this._maxY = this.progressMask.y,
            this.adaptLeftContent(this.btns),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
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
            ImageButtonUtil.add(this.btnShenshou,
            function() {
                var n = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_state);
                return 1 === BitUtil.getBit(n, 4) ? void Alarm.show("已经开启过神兽协助，无需重复开启") : void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252842, 1,
                    function() {
                        KTool.doExchange(11245, 1,
                        function() {
                            BubblerManager.getInstance().showText("已呼唤神兽协防，每次挑战抵挡的回合数增加3回合！"),
                            t.MgrData.getInstance().updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                return e._hlafCnt > 0 ? void Alarm.show("当前无需购买挑战次数") : void BuyProductManager.buyProduct("252841_11244",
                function() {
                    t.MgrData.getInstance().updateValues().then(function() {
                        e.update()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return e._hlafCnt <= 0 ? void Alarm.show("今日挑战次数不足!") : void FightManager.fightNoMapBoss("", 12133)
            },
            this),
            ImageButtonUtil.add(this.btnOne,
            function() {
                BuyProductManager.buyProductBySocket(252840,
                function() {
                    SocketConnection.sendByQueue(42362, [16, 2],
                    function() {
                        t.MgrData.getInstance().updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.beforeAdd = function() {},
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            t.MgrData.getInstance().checkCompleteLevel(2);
            var e = 3,
            n = t.MgrData.getInstance().getValue(AttrConst.daily_yklszzkr_level2Cnt);
            this._hlafCnt = e - n,
            this._hlafCnt > 0 ? DisplayUtil.setEnabled(this.btnAdd, !1, !0) : DisplayUtil.setEnabled(this.btnAdd, !0, !1),
            this.txtCount.text = "当前剩余挑战次数：" + this._hlafCnt + "/" + e;
            var i = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_level2val);
            this.progressMask.y = MathUtil.lerp(0, this._maxY + this.progressMask.height, 100, this._maxY, Math.min(i, 100)),
            this.txtv1.text = i + "%";
            var r = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_state);
            1 === BitUtil.getBit(r, 4) && DisplayUtil.setEnabled(this.btnShenshou, !1, !0)
        },
        n.prototype.removed = function() {},
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.Level2Panel = e,
    __reflect(e.prototype, "pveZhanZhiKuangRe.Level2Panel", ["IPanel"])
} (pveZhanZhiKuangRe || (pveZhanZhiKuangRe = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
pveZhanZhiKuangRe; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._levelConfigure = {
                1 : {
                    bossId: 3460,
                    battle: 12134,
                    pval: 5,
                    yval: 10
                },
                2 : {
                    bossId: 3427,
                    battle: 12135,
                    pval: 10,
                    yval: 20
                },
                3 : {
                    bossId: 3402,
                    battle: 12136,
                    pval: 15,
                    yval: 30
                },
                4 : {
                    bossId: 3396,
                    battle: 12137,
                    pval: 20,
                    yval: 40
                },
                5 : {
                    bossId: 3488,
                    battle: 12138,
                    pval: 25,
                    yval: 50
                }
            },
            n.skinName = t.Level3Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "level3_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.btns),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
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
            this.tips.touchEnabled = !1,
            ImageButtonUtil.add(this.btnZhiyin,
            function() {
                var n = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_state);
                return 1 === BitUtil.getBit(n, 5) ? void Alarm.show("已经开启过站长指引，无需重复开启") : void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252846, 1,
                    function() {
                        KTool.doExchange(11247, 1,
                        function() {
                            t.MgrData.getInstance().updateValues().then(function() {
                                e.update()
                            }),
                            BubblerManager.getInstance().showText("贾斯汀站长开始指引英卡洛斯固守本心，每次挑战胜利增加的野性之心减半！")
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                return e._hlafCnt > 0 ? void Alarm.show("当前无需购买挑战次数") : void BuyProductManager.buyProduct("252844_11246",
                function() {
                    t.MgrData.getInstance().updateValues().then(function() {
                        e.update()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFind,
            function() {
                t.MgrData.getInstance().level3Msg(1).then(function() {
                    e.update()
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return e._hlafCnt <= 0 ? void Alarm.show("今日挑战次数不足!") : void FightManager.fightNoMapBoss("", e._levelConfigure[e._lvl].battle)
            },
            this),
            ImageButtonUtil.add(this.btnOne,
            function() {
                BuyProductManager.buyProductBySocket(252843,
                function() {
                    SocketConnection.sendByQueue(42362, [16, 3],
                    function() {
                        t.MgrData.getInstance().updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnYijian,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252848, 1,
                    function() {
                        t.MgrData.getInstance().level3Msg(3).then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFind2,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252845, 1,
                    function() {
                        t.MgrData.getInstance().level3Msg(2).then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnQinchu,
            function() {
                return e._yVal <= 0 ? void Alarm.show("当前野性之心数值还不需要被清除") : void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252847, 1,
                    function() {
                        t.MgrData.getInstance().level3Msg(4).then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.beforeAdd = function() {},
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            var e = this;
            t.MgrData.getInstance().checkCompleteLevel(3);
            var n = t.MgrData.getInstance().getValue(AttrConst.daily_yklszzkr_level3Cnt),
            i = 3;
            this._hlafCnt = i - n,
            this._hlafCnt > 0 ? DisplayUtil.setEnabled(this.btnAdd, !1, !0) : DisplayUtil.setEnabled(this.btnAdd, !0, !1),
            this.txtcount.text = "当前剩余挑战次数：" + this._hlafCnt + "/" + i;
            var r = t.MgrData.getInstance().getValue(AttrConst.daily_yklszzkr_level3Taget);
            this._lvl = r,
            0 === r ? (this.pet.source = null, this.btnFind.visible = !0, this.group_battle.visible = !1, this.zhanli.visible = !1, this.txtbg2_2.visible = !1, this.txtbg2.visible = !1, this.txtd1_2.text = "", this.txtd1.text = "") : (this.btnFind.visible = !1, this.group_battle.visible = !0, this.zhanli.visible = !0, this.txtbg2_2.visible = !0, this.txtbg2.visible = !0, this.txtlv.text = r + "", RES.getResByUrl(ClientConfig.getfightPetPng(this._levelConfigure[r].bossId + ""),
            function(t, n) {
                e.pet.source = t,
                e.pet.anchorOffsetX = .5 * t.textureWidth,
                e.pet.anchorOffsetY = t.textureHeight,
                e.pet.x = e.pet.y = 0
            },
            this), this.txtd1_2.text = "战胜当前boss后\n增加" + this._levelConfigure[r].pval + "%", this.txtd1.text = "战胜当前boss后\n增加" + this._levelConfigure[r].yval + "%");
            var s = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_level3progress),
            a = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_level3_yxzx);
            this._yVal = Math.ceil((a - SystemTimerManager.time) / 60),
            this.txtv1.text = s + "%",
            this.txtv2.text = Math.max(0, this._yVal) + "%";
            var o = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_state);
            1 === BitUtil.getBit(o, 5) && DisplayUtil.setEnabled(this.btnZhiyin, !1, !0)
        },
        n.prototype.removed = function() {},
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.Level3Panel = e,
    __reflect(e.prototype, "pveZhanZhiKuangRe.Level3Panel", ["IPanel"])
} (pveZhanZhiKuangRe || (pveZhanZhiKuangRe = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(r, s) {
        function a(t) {
            try {
                u(i.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                u(i["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new n(function(e) {
                e(t.value)
            }).then(a, o)
        }
        u((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, s && (a = s[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(s, n[1])).done) return a;
            switch (s = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                s = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = n;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(n);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = e.call(t, u)
        } catch(i) {
            n = [6, i],
            s = 0
        } finally {
            r = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var r, s, a, o, u = {
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
pveZhanZhiKuangRe; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._levelConfigure = {
                1 : {
                    tab: "rb_1",
                    battle: 12139,
                    result: [{
                        r: "对战中打出8次致命一击并击败燃魂巨兽",
                        c: "累积伤害+5000",
                        f: "累积伤害-3500"
                    },
                    {
                        r: "造成的最高攻击伤害超过15000并击败燃魂巨兽",
                        c: "累积伤害+3500",
                        f: "累积伤害-2500"
                    },
                    {
                        r: "5回合内击败燃魂巨兽",
                        c: "累积伤害+2000",
                        f: "累积伤害-1500"
                    }]
                },
                2 : {
                    tab: "rb_2",
                    battle: 12140,
                    result: [{
                        r: "偶数回合造成的固定伤害之和高于5000",
                        c: "累积伤害+3500",
                        f: "累积伤害-2000"
                    },
                    {
                        r: "5回合内击败燃魂巨兽",
                        c: "累积伤害+2500",
                        f: "累积伤害-1500"
                    },
                    {
                        r: "击败燃魂巨兽时自身处于能力提升状态",
                        c: "累积伤害+1500",
                        f: "累积伤害-1000"
                    }]
                },
                3 : {
                    tab: "rb_0",
                    battle: 12141,
                    result: [{
                        r: "对战中不打出致命一击并击败燃魂巨兽",
                        c: "累积伤害+3500",
                        f: "累积伤害-2000"
                    },
                    {
                        r: "5回合内击败燃魂巨兽",
                        c: "累积伤害+2500",
                        f: "累积伤害-1500"
                    },
                    {
                        r: "击败燃魂巨兽时自身不处于能力提升状态",
                        c: "累积伤害+1500",
                        f: "累积伤害-1000"
                    }]
                }
            },
            n.skinName = t.Level4Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.rb_0.selected = this.rb_1.selected = this.rb_2.selected = !1,
            this.rb_0.touchEnabled = this.rb_1.touchEnabled = this.rb_2.touchEnabled = !1,
            this.addEvents(),
            this.initOldPveBtnClose(0, this, "level4_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.btns)
        },
        n.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                return e._hlafCnt > 0 ? void Alarm.show("当前无需购买挑战次数") : void BuyProductManager.buyProduct("252850_11248",
                function() {
                    t.MgrData.getInstance().updateValues().then(function() {
                        e.update()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return e._hlafCnt <= 0 ? void Alarm.show("今日挑战次数不足!") : void FightManager.fightNoMapBoss("", e._levelConfigure[e._currentTabVal].battle)
            },
            this),
            ImageButtonUtil.add(this.btnBeat,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(1 == e._currentTabVal ? 252852 : 252851, 1,
                    function() {
                        t.MgrData.getInstance().level4Msg(2).then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnOne,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252849, 1,
                    function() {
                        t.MgrData.getInstance().oneKeyPassLv(4).then(function() {
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
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.beforeAdd = function() {},
        n.prototype.beforeUpdate = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return e = t.MgrData.getInstance().getValue(AttrConst.daily_yklszzkr_level4State),
                        0 !== e ? [3, 2] : [4, t.MgrData.getInstance().level4Msg(1)];
                    case 1:
                        n.sent(),
                        n.label = 2;
                    case 2:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype.update = function() {
            t.MgrData.getInstance().checkCompleteLevel(4);
            var e = t.MgrData.getInstance().getValue(AttrConst.daily_yklszzkr_level4Cnt),
            n = 3;
            this._hlafCnt = n - e,
            this.txtCount.text = "当前剩余挑战次数：" + this._hlafCnt + "/" + n,
            this._hlafCnt > 0 ? DisplayUtil.setEnabled(this.btnAdd, !1, !0) : DisplayUtil.setEnabled(this.btnAdd, !0, !1);
            var i = t.MgrData.getInstance().getValue(AttrConst.daily_yklszzkr_level4State),
            r = 255 & i;
            this._currentTabVal = r;
            var s = i >> 8 & 255,
            a = this._levelConfigure[r].tab;
            this[a].selected = !0,
            this.txtEff.text = this._levelConfigure[r].result[s - 1].r,
            this.txtSucc.text = this._levelConfigure[r].result[s - 1].c,
            this.txth.text = this._levelConfigure[r].result[s - 1].f;
            var o = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_level4hurt),
            u = 1e5;
            this.txtp.text = o + "/" + u,
            this.pmask.scaleX = Math.min(Math.max(0, o / u), 1)
        },
        n.prototype.removed = function() {},
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.Level4Panel = e,
    __reflect(e.prototype, "pveZhanZhiKuangRe.Level4Panel", ["IPanel"])
} (pveZhanZhiKuangRe || (pveZhanZhiKuangRe = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
pveZhanZhiKuangRe; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._petState = -1,
            n.skinName = t.MainSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.bg.anchorOffsetX = .5 * this.bg.width,
            this.bg.anchorOffsetY = .5 * this.bg.height,
            this.bg.x += this.bg.anchorOffsetX,
            this.bg.y += this.bg.anchorOffsetY,
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_CLOSE_MODULE)
            },
            this),
            this.onResize(),
            this.initEvents()
        },
        n.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_CLOSE_MODULE)
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
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3586)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_CLOSE_MODULE),
                ModuleManager.showModuleByID(127)
            },
            this),
            ImageButtonUtil.add(this.btnOne,
            function() {
                switch (e._petState) {
                case 0:
                    PayManager.doPayFunc(function() {
                        PetManager.isDefaultPet(124) ? KTool.buyProductByCallback(252838, 1,
                        function() {
                            t.MgrData.getInstance().getPetByOneKey().then(function() {
                                e.update()
                            })
                        }) : Alert.show("请先将英卡洛斯放入背包首发（仅需拥有，不会被消耗）！",
                        function() {
                            ModuleManager.showModuleByID(10)
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
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this)
        },
        n.prototype.onResize = function() {
            var t = egret.lifecycle.stage.stageWidth,
            e = 1136,
            n = t / e;
            n && (this.bg.scaleX = this.bg.scaleY = n)
        },
        n.prototype.beforeAdd = function() {},
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            var e = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_levelState);
            this._level = e;
            for (var n = [this.level1, this.level2, this.level3, this.level4], i = [this.tag, this.tag_2, this.tag_3, this.tag_4], r = 0; r < n.length; r++) {
                var s = r;
                e === s ? (DisplayUtil.setEnabled(n[r], !0, !1), i[r].visible = !1, n[r].alpha = 1) : e > s ? (DisplayUtil.setEnabled(n[r], !1, !1), n[r].alpha = .4, i[r].visible = !0) : (DisplayUtil.setEnabled(n[r], !1, !0), i[r].visible = !1, n[r].alpha = 1)
            }
            var a = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_state),
            o = Boolean(BitUtil.getBit(a, 0));
            this._petState = 0,
            this.txtLabel.text = "一键进化",
            o ? (this._petState = 2, this.txtLabel.text = "能力提升") : 4 === e && (this.txtLabel.text = "免费进化", this._petState = 1),
            this.Got.visible = o
        },
        n.prototype.removed = function() {},
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.Main = e,
    __reflect(e.prototype, "pveZhanZhiKuangRe.Main", ["IPanel"])
} (pveZhanZhiKuangRe || (pveZhanZhiKuangRe = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
pveZhanZhiKuangRe; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._petCheckId = 3586,
            n._useItemId = 1716092,
            n._effId = 879,
            n._skillID = 31897,
            n._markId = 41205,
            n._currentTabIdx = -1,
            n._cofigureBoss = [12142, 12143, 12144],
            n.skinName = t.UpenergySkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.rb_1.selected = !0,
            this._currentTabIdx = +this.rb_1.value,
            this.initOldPveBtnClose(0, this, "upenergy_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.addEvents(),
            this.adaptLeftContent(this.btns)
        },
        n.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.MgrData.getInstance().dispatchEventWith(BasicMainPanel.EVENT_BACK_MAIN_PANEL)
            },
            this),
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
            this.rb_2.group.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                return e._halfBattleCnt > 0 ? void Alarm.show("当前无需购买挑战次数") : void BuyProductManager.buyProduct("252853_11249",
                function() {
                    t.MgrData.getInstance().updateValues().then(function() {
                        e.update()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAdd_2,
            function() {
                BuyProductManager.buyProduct("252854_11250",
                function() {
                    t.MgrData.getInstance().updateValues().then(function() {
                        e.update()
                    })
                },
                e, 1716092)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return e._halfBattleCnt <= 0 ? void Alarm.show("今日挑战次数不足!") : void FightManager.fightNoMapBoss("", e._cofigureBoss[e._currentTabIdx - 1])
            },
            this),
            ImageButtonUtil.add(this.btnMark,
            function() {
                e.doExchange(15, 3)
            },
            this),
            ImageButtonUtil.add(this.brnTexing,
            function() {
                e.doExchange(15, 2)
            },
            this),
            ImageButtonUtil.add(this.btnSkill,
            function() {
                e.doExchange(15, 1)
            },
            this),
            ImageButtonUtil.add(this.icon_skill,
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
            ImageButtonUtil.add(this.icon_mark,
            function() {
                var t = {};
                t.ins = e._markId,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this)
        },
        n.prototype.removeEvents = function() {
            this.rb_2.group.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this),
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onChangeTab = function(t) {
            this._currentTabIdx = +t.currentTarget.selectedValue
        },
        n.prototype.onUpdateByItemChangeEvent = function(t) {
            void 0 === t && (t = null),
            this.dqyykzzl_0.text = ":" + ItemManager.getNumByID(this._useItemId)
        },
        n.prototype.doExchange = function(e, n) {
            var i = this,
            r = ItemManager.getNumByID(this._useItemId);
            if (e > r) return void Alarm.show("道具数量不足!");
            if (!PetManager.isDefaultPet(this._petCheckId)) {
                var s = PetXMLInfo.getName(this._petCheckId);
                return void Alarm.show("请先将" + s + "设为首发位置!",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            }
            t.MgrData.getInstance().UpEnergyMsg(n).then(function() {
                BubblerManager.getInstance().showText("兑换成功"),
                i.update()
            })["catch"](function(t) {
                console.log(t.sta)
            })
        },
        n.prototype.beforeAdd = function() {},
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            var e = t.MgrData.getInstance().getValue(AttrConst.daily_yklszzkr_upEneryCnt),
            n = MainManager.actorInfo.isVip ? 5 : 3;
            this._halfBattleCnt = n - e,
            this._halfBattleCnt > 0 ? DisplayUtil.setEnabled(this.btnAdd, !1, !0) : DisplayUtil.setEnabled(this.btnAdd, !0, !1),
            this.dqsytzcs45.text = "当前剩余挑战次数：" + this._halfBattleCnt + "/" + n;
            var i = t.MgrData.getInstance().getValue(AttrConst.forever_yklszzkr_state),
            r = Boolean(BitUtil.getBit(i, 1)),
            s = Boolean(BitUtil.getBit(i, 2)),
            a = Boolean(BitUtil.getBit(i, 3));
            this.btnMark.visible = !a,
            this.flagMark.visible = a,
            this.brnTexing.visible = !s,
            this.flagTexing.visible = s,
            this.btnSkill.visible = !r,
            this.flagSkill.visible = r,
            this.onUpdateByItemChangeEvent()
        },
        n.prototype.removed = function() {},
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.UpEnergyPanel = e,
    __reflect(e.prototype, "pveZhanZhiKuangRe.UpEnergyPanel", ["IPanel"])
} (pveZhanZhiKuangRe || (pveZhanZhiKuangRe = {})),
window.pveZhanZhiKuangRe = window.pveZhanZhiKuangRe || {};
var __extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/panel/Level1Skin.exml"] = window.pveZhanZhiKuangRe.Level1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "vs", "L", "R", "imgBtn_pet", "imgBtn_cure", "btns", "btnOne", "btnFight", "up_bg", "btnClose", "title", "top", "txtbg", "sygzcjxtyzzzsdxdzbjc10ghgmlsbjktg", "t"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.vs_i(), this.L_i(), this.R_i(), this.btns_i(), this._Group1_i(), this.top_i(), this.t_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "level1_bg_png",
        t.y = 0,
        t
    },
    n.vs_i = function() {
        var t = new eui.Image;
        return this.vs = t,
        t.horizontalCenter = 46,
        t.source = "level1_vs_png",
        t.y = 161,
        t
    },
    n.L_i = function() {
        var t = new eui.Image;
        return this.L = t,
        t.left = 0,
        t.source = "level1_L_png",
        t.y = 0,
        t
    },
    n.R_i = function() {
        var t = new eui.Image;
        return this.R = t,
        t.right = 0,
        t.source = "level1_R_png",
        t.y = 63,
        t
    },
    n.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.left = 34,
        t.y = 255,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    n.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "level1_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "level1_imgBtn_cure_png",
        t.x = 0,
        t.y = 68,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 144,
        t.right = 29,
        t.width = 218,
        t.y = 474,
        t.elementsContent = [this.btnOne_i(), this.btnFight_i()],
        t
    },
    n.btnOne_i = function() {
        var t = new eui.Image;
        return this.btnOne = t,
        t.source = "level1_btnOne_png",
        t.x = 0,
        t.y = 71,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "level1_btnFight_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 31,
        t.y = 2,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.title_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "level1_up_bg_png",
        t.x = 63,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "level1_btnClose_png",
        t.x = 0,
        t.y = 3,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "level1_title_png",
        t.x = 81,
        t.y = 5,
        t
    },
    n.t_i = function() {
        var t = new eui.Group;
        return this.t = t,
        t.horizontalCenter = .5,
        t.y = 60,
        t.elementsContent = [this.txtbg_i(), this.sygzcjxtyzzzsdxdzbjc10ghgmlsbjktg_i()],
        t
    },
    n.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.source = "level1_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.sygzcjxtyzzzsdxdzbjc10ghgmlsbjktg_i = function() {
        var t = new eui.Label;
        return this.sygzcjxtyzzzsdxdzbjc10ghgmlsbjktg = t,
        t.size = 18,
        t.text = "使用光之惩戒形态与诅咒之神•狄修对战并坚持10个回合，无论胜败均可通关",
        t.textColor = 16768178,
        t.x = 143,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/Level2Skin.exml"] = window.pveZhanZhiKuangRe.Level2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "infobg2", "t1", "t2", "t3", "coutbg", "txtCount", "btnAdd", "countComp", "imgBtn_pet", "imgBtn_cure", "btns", "asjdk", "progressBarBg", "progressBar", "progressMask", "txtv1", "energy", "btnOne", "btnFight", "up_bg", "btnClose", "title", "top", "txtbg", "ddrhjsdjgdddhgsydxsdahnlyddahnldd100stg", "t", "btnShenshou", "tips"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.pet_i(), this._Group1_i(), this.countComp_i(), this.btns_i(), this.energy_i(), this._Group2_i(), this.top_i(), this.t_i(), this._Group3_i()],
        eui.Binding.$bindProperties(this, ["progressMask"], [0], this.progressBar, "mask")
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "level1_bg_png",
        t.y = 0,
        t
    },
    n.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.horizontalCenter = 40,
        t.source = "level2_pet_png",
        t.y = 85,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 404.5,
        t.y = 110,
        t.elementsContent = [this.infobg2_i(), this.t1_i(), this.t2_i(), this.t3_i()],
        t
    },
    n.infobg2_i = function() {
        var t = new eui.Image;
        return this.infobg2 = t,
        t.source = "level2_infobg2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.t1_i = function() {
        var t = new eui.Image;
        return this.t1 = t,
        t.source = "level2_t1_png",
        t.x = 16,
        t.y = 15,
        t
    },
    n.t2_i = function() {
        var t = new eui.Image;
        return this.t2 = t,
        t.source = "level2_t2_png",
        t.x = 16,
        t.y = 116,
        t
    },
    n.t3_i = function() {
        var t = new eui.Image;
        return this.t3 = t,
        t.source = "level2_t3_png",
        t.x = 16,
        t.y = 217,
        t
    },
    n.countComp_i = function() {
        var t = new eui.Group;
        return this.countComp = t,
        t.horizontalCenter = .5,
        t.y = 576,
        t.elementsContent = [this.coutbg_i(), this.txtCount_i(), this.btnAdd_i()],
        t
    },
    n.coutbg_i = function() {
        var t = new eui.Image;
        return this.coutbg = t,
        t.source = "level2_coutbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    n.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.size = 18,
        t.text = "当前剩余挑战次数：4/5",
        t.textColor = 16777215,
        t.x = 42,
        t.y = 8,
        t
    },
    n.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "level2_btnAdd_png",
        t.x = 247,
        t.y = 0,
        t
    },
    n.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.left = 34,
        t.y = 255,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    n.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "level2_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "level2_imgBtn_cure_png",
        t.x = 0,
        t.y = 68,
        t
    },
    n.energy_i = function() {
        var t = new eui.Group;
        return this.energy = t,
        t.height = 396,
        t.horizontalCenter = -377.5,
        t.width = 153,
        t.y = 117,
        t.elementsContent = [this.asjdk_i(), this.progressBarBg_i(), this.progressBar_i(), this.progressMask_i(), this.txtv1_i()],
        t
    },
    n.asjdk_i = function() {
        var t = new eui.Image;
        return this.asjdk = t,
        t.source = "level2_asjdk_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.progressBarBg_i = function() {
        var t = new eui.Image;
        return this.progressBarBg = t,
        t.source = "level2_progressBarBg_png",
        t.visible = !0,
        t.x = 47,
        t.y = 64,
        t
    },
    n.progressBar_i = function() {
        var t = new eui.Image;
        return this.progressBar = t,
        t.height = 306,
        t.source = "level2_progressBar_png",
        t.visible = !0,
        t.x = 61,
        t.y = 77,
        t
    },
    n.progressMask_i = function() {
        var t = new eui.Rect;
        return this.progressMask = t,
        t.height = 306,
        t.visible = !0,
        t.width = 33,
        t.x = 61,
        t.y = 77,
        t
    },
    n.txtv1_i = function() {
        var t = new eui.Label;
        return this.txtv1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 14,
        t.text = "100%",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 100,
        t.x = 26.424,
        t.y = 215.633,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 144,
        t.horizontalCenter = 431,
        t.width = 218,
        t.y = 474,
        t.elementsContent = [this.btnOne_i(), this.btnFight_i()],
        t
    },
    n.btnOne_i = function() {
        var t = new eui.Image;
        return this.btnOne = t,
        t.source = "level2_btnOne_png",
        t.x = 0,
        t.y = 71,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "level2_btnFight_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 31,
        t.y = 2,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.title_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "level2_up_bg_png",
        t.x = 63,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "level2_btnClose_png",
        t.x = 0,
        t.y = 3,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "level2_title_png",
        t.x = 81,
        t.y = 5,
        t
    },
    n.t_i = function() {
        var t = new eui.Group;
        return this.t = t,
        t.horizontalCenter = .5,
        t.y = 60,
        t.elementsContent = [this.txtbg_i(), this.ddrhjsdjgdddhgsydxsdahnlyddahnldd100stg_i()],
        t
    },
    n.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.source = "level2_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.ddrhjsdjgdddhgsydxsdahnlyddahnldd100stg_i = function() {
        var t = new eui.Label;
        return this.ddrhjsdjgdddhgsydxsdahnlyddahnldd100stg = t,
        t.size = 18,
        t.text = "抵挡燃魂巨兽的进攻，抵挡的回合数越多，吸收的暗黑能量越多，当暗黑能量达到100%时通关",
        t.textColor = 16768178,
        t.x = 80,
        t.y = 10,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 117,
        t.left = 14,
        t.width = 361,
        t.y = 507,
        t.elementsContent = [this.btnShenshou_i(), this.tips_i()],
        t
    },
    n.btnShenshou_i = function() {
        var t = new eui.Image;
        return this.btnShenshou = t,
        t.source = "level2_btnShenshou_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.tips_i = function() {
        var t = new eui.Image;
        return this.tips = t,
        t.source = "level2_tips_png",
        t.visible = !0,
        t.x = 118,
        t.y = 55,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/Level3Skin.exml"] = window.pveZhanZhiKuangRe.Level3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "cbg", "txtcount", "btnAdd", "add", "imgBtn_pet", "imgBtn_cure", "btns", "btnOne", "up_bg", "btnClose", "title", "top", "btnZhiyin", "tips", "pet", "zhanli_2", "txtlv", "zhanli", "btnFind", "btnYijian", "btnFight", "btnFind2", "group_battle", "yexing_2", "txtbg2", "txtd1", "txtv2", "btnQinchu", "yexing", "tiaozhanbg", "txtbg2_2", "txtd1_2", "txtv1", "tiaozhan", "txtbg", "tgjbjddjlsfnxdyxtsbzyxzxbcg100jkcggsbx_zyyxzxcg100jcztzjd", "t"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.add_i(), this.btns_i(), this.btnOne_i(), this.top_i(), this._Group1_i(), this._Group3_i(), this.t_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "level1_bg_png",
        t.y = 0,
        t
    },
    n.add_i = function() {
        var t = new eui.Group;
        return this.add = t,
        t.horizontalCenter = .5,
        t.y = 577,
        t.elementsContent = [this.cbg_i(), this.txtcount_i(), this.btnAdd_i()],
        t
    },
    n.cbg_i = function() {
        var t = new eui.Image;
        return this.cbg = t,
        t.source = "level3_cbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    n.txtcount_i = function() {
        var t = new eui.Label;
        return this.txtcount = t,
        t.size = 18,
        t.text = "当前剩余挑战次数：4/5",
        t.textColor = 16777215,
        t.x = 42,
        t.y = 8,
        t
    },
    n.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "level3_btnAdd_png",
        t.x = 247,
        t.y = 0,
        t
    },
    n.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.left = 34,
        t.y = 255,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    n.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "level3_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "level3_imgBtn_cure_png",
        t.x = 0,
        t.y = 68,
        t
    },
    n.btnOne_i = function() {
        var t = new eui.Image;
        return this.btnOne = t,
        t.horizontalCenter = 430,
        t.source = "level3_btnOne_png",
        t.visible = !0,
        t.y = 545,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 31,
        t.y = 2,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.title_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "level3_up_bg_png",
        t.x = 63,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "level3_btnClose_png",
        t.x = 0,
        t.y = 3,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "level3_title_png",
        t.x = 81,
        t.y = 5,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 117,
        t.left = 14,
        t.width = 361,
        t.y = 507,
        t.elementsContent = [this.btnZhiyin_i(), this.tips_i()],
        t
    },
    n.btnZhiyin_i = function() {
        var t = new eui.Image;
        return this.btnZhiyin = t,
        t.source = "level3_btnZhiyin_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.tips_i = function() {
        var t = new eui.Image;
        return this.tips = t,
        t.source = "level3_tips_png",
        t.x = 5,
        t.y = 55,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 428,
        t.horizontalCenter = 14,
        t.width = 882,
        t.y = 110,
        t.elementsContent = [this._Group2_i(), this.zhanli_i(), this.btnFind_i(), this.group_battle_i(), this.yexing_i(), this.tiaozhan_i()],
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 425,
        t.y = 360,
        t.elementsContent = [this.pet_i()],
        t
    },
    n.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "level3_pet_png",
        t.visible = !0,
        t.x = -177.99999999999994,
        t.y = -359.99999999999994,
        t
    },
    n.zhanli_i = function() {
        var t = new eui.Group;
        return this.zhanli = t,
        t.x = 553,
        t.y = 13,
        t.elementsContent = [this.zhanli_2_i(), this.txtlv_i()],
        t
    },
    n.zhanli_2_i = function() {
        var t = new eui.Image;
        return this.zhanli_2 = t,
        t.source = "level3_zhanli_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtlv_i = function() {
        var t = new eui.Label;
        return this.txtlv = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 45,
        t.text = "5",
        t.textColor = 16773461,
        t.x = 103,
        t.y = 13,
        t
    },
    n.btnFind_i = function() {
        var t = new eui.Image;
        return this.btnFind = t,
        t.source = "level3_btnFind_png",
        t.x = 329,
        t.y = 355,
        t
    },
    n.group_battle_i = function() {
        var t = new eui.Group;
        return this.group_battle = t,
        t.height = 73,
        t.visible = !0,
        t.width = 620,
        t.x = 128,
        t.y = 355,
        t.elementsContent = [this.btnYijian_i(), this.btnFight_i(), this.btnFind2_i()],
        t
    },
    n.btnYijian_i = function() {
        var t = new eui.Image;
        return this.btnYijian = t,
        t.source = "level3_btnYijian_png",
        t.x = 201,
        t.y = 0,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "level3_btnFight_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFind2_i = function() {
        var t = new eui.Image;
        return this.btnFind2 = t,
        t.source = "level3_btnFind2_png",
        t.x = 402,
        t.y = 0,
        t
    },
    n.yexing_i = function() {
        var t = new eui.Group;
        return this.yexing = t,
        t.x = 665,
        t.y = 90,
        t.elementsContent = [this.yexing_2_i(), this.txtbg2_i(), this.txtd1_i(), this.txtv2_i(), this.btnQinchu_i()],
        t
    },
    n.yexing_2_i = function() {
        var t = new eui.Image;
        return this.yexing_2 = t,
        t.source = "level3_yexing_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtbg2_i = function() {
        var t = new eui.Image;
        return this.txtbg2 = t,
        t.source = "level3_txtbg2_png",
        t.x = 27,
        t.y = 144,
        t
    },
    n.txtd1_i = function() {
        var t = new eui.Label;
        return this.txtd1 = t,
        t.size = 18,
        t.text = "战胜当前boss后\n增加50%",
        t.textColor = 16773461,
        t.width = 154,
        t.x = 47,
        t.y = 149,
        t
    },
    n.txtv2_i = function() {
        var t = new eui.Label;
        return this.txtv2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 30,
        t.text = "100%",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 100,
        t.x = 57,
        t.y = 83,
        t
    },
    n.btnQinchu_i = function() {
        var t = new eui.Image;
        return this.btnQinchu = t,
        t.source = "level3_btnQinchu_png",
        t.x = 143,
        t.y = 76,
        t
    },
    n.tiaozhan_i = function() {
        var t = new eui.Group;
        return this.tiaozhan = t,
        t.x = 0,
        t.y = 102,
        t.elementsContent = [this.tiaozhanbg_i(), this.txtbg2_2_i(), this.txtd1_2_i(), this.txtv1_i()],
        t
    },
    n.tiaozhanbg_i = function() {
        var t = new eui.Image;
        return this.tiaozhanbg = t,
        t.source = "level3_tiaozhanbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtbg2_2_i = function() {
        var t = new eui.Image;
        return this.txtbg2_2 = t,
        t.source = "level3_txtbg2_png",
        t.x = 35,
        t.y = 154,
        t
    },
    n.txtd1_2_i = function() {
        var t = new eui.Label;
        return this.txtd1_2 = t,
        t.size = 18,
        t.text = "战胜当前boss后\n增加50%",
        t.textColor = 16773461,
        t.width = 142,
        t.x = 55,
        t.y = 159,
        t
    },
    n.txtv1_i = function() {
        var t = new eui.Label;
        return this.txtv1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 36,
        t.text = "100%",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 100,
        t.x = 63,
        t.y = 88,
        t
    },
    n.t_i = function() {
        var t = new eui.Group;
        return this.t = t,
        t.horizontalCenter = .5,
        t.y = 60,
        t.elementsContent = [this.txtbg_i(), this.tgjbjddjlsfnxdyxtsbzyxzxbcg100jkcggsbx_zyyxzxcg100jcztzjd_i()],
        t
    },
    n.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.source = "level3_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.tgjbjddjlsfnxdyxtsbzyxzxbcg100jkcggsbx_zyyxzxcg100jcztzjd_i = function() {
        var t = new eui.Label;
        return this.tgjbjddjlsfnxdyxtsbzyxzxbcg100jkcggsbx_zyyxzxcg100jcztzjd = t,
        t.size = 18,
        t.text = "通过击败强大的精灵释放内心的野性，同时保证野性之心不超过100%，即可成功固守本心\n注意：野性之心超过100%将重置挑战进度，每小时下降50%\n",
        t.textColor = 16768178,
        t.width = 727,
        t.x = 98,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/Level4Skin.exml"] = window.pveZhanZhiKuangRe.Level4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "cbg", "txtCount", "btnAdd", "add", "imgBtn_pet", "imgBtn_cure", "btns", "btnOne", "pet", "progressBarBg2", "progressBar2", "pmask", "txtp", "progressBar", "img2", "rb_0", "rb_1", "rb_2", "tabs", "btnFight", "btnBeat", "infobg2", "infobg", "txtEff", "tztj", "effect", "infobg_2", "txtSucc", "sljl", "succ", "infobg_3", "txth", "sbcf", "faily", "info", "up_bg", "btnClose", "title", "top", "txtbg", "gjjsmbhtztjjhtzljzgdshjkjbrhjs", "t"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.add_i(), this.btns_i(), this.btnOne_i(), this._Group1_i(), this.top_i(), this.t_i()],
        eui.Binding.$bindProperties(this, ["pmask"], [0], this.progressBar2, "mask")
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "level40_up_png"), new eui.SetProperty("_Image1", "x", 9), new eui.SetProperty("_Image1", "y", 53)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "level40_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "level41_up_png"), new eui.SetProperty("_Image1", "x", 22), new eui.SetProperty("_Image1", "y", 83)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "level41_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "level42_up_png"), new eui.SetProperty("_Image1", "x", 10), new eui.SetProperty("_Image1", "y", 109)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "level42_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "level1_bg_png",
        t.y = 0,
        t
    },
    s.add_i = function() {
        var t = new eui.Group;
        return this.add = t,
        t.horizontalCenter = .5,
        t.y = 577,
        t.elementsContent = [this.cbg_i(), this.txtCount_i(), this.btnAdd_i()],
        t
    },
    s.cbg_i = function() {
        var t = new eui.Image;
        return this.cbg = t,
        t.source = "level4_cbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    s.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.size = 18,
        t.text = "当前剩余挑战次数：4/5",
        t.textColor = 16777215,
        t.x = 42,
        t.y = 8,
        t
    },
    s.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "level4_btnAdd_png",
        t.x = 247,
        t.y = 0,
        t
    },
    s.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.left = 34,
        t.y = 98,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    s.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "level4_imgBtn_pet_png",
        t.x = 0,
        t.y = 157,
        t
    },
    s.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "level4_imgBtn_cure_png",
        t.x = 0,
        t.y = 225,
        t
    },
    s.btnOne_i = function() {
        var t = new eui.Image;
        return this.btnOne = t,
        t.horizontalCenter = 431,
        t.source = "level4_btnOne_png",
        t.y = 545,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 481,
        t.horizontalCenter = 42,
        t.width = 1022,
        t.y = 95,
        t.elementsContent = [this.pet_i(), this.progressBar_i(), this.tabs_i(), this.btnFight_i(), this.btnBeat_i(), this.info_i()],
        t
    },
    s.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "level4_pet_png",
        t.visible = !0,
        t.x = 212,
        t.y = 2,
        t
    },
    s.progressBar_i = function() {
        var t = new eui.Group;
        return this.progressBar = t,
        t.x = 278,
        t.y = 335,
        t.elementsContent = [this.progressBarBg2_i(), this.progressBar2_i(), this.pmask_i(), this.txtp_i()],
        t
    },
    s.progressBarBg2_i = function() {
        var t = new eui.Image;
        return this.progressBarBg2 = t,
        t.height = 46,
        t.source = "level4-5_progressBarBg2_png",
        t.width = 404,
        t.x = 0,
        t.y = 0,
        t
    },
    s.progressBar2_i = function() {
        var t = new eui.Image;
        return this.progressBar2 = t,
        t.height = 20,
        t.source = "level4-5_progressBar2_png",
        t.visible = !0,
        t.width = 378,
        t.x = 13,
        t.y = 13,
        t
    },
    s.pmask_i = function() {
        var t = new eui.Image;
        return this.pmask = t,
        t.height = 46,
        t.scaleX = .2,
        t.source = "level4-5_progressBarBg2_png",
        t.width = 404,
        t
    },
    s.txtp_i = function() {
        var t = new eui.Label;
        return this.txtp = t,
        t.size = 20,
        t.text = "80000/100000",
        t.textColor = 16776958,
        t.x = 141,
        t.y = 15,
        t
    },
    s.tabs_i = function() {
        var t = new eui.Group;
        return this.tabs = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.img2_i(), this.rb_0_i(), this.rb_1_i(), this.rb_2_i()],
        t
    },
    s.img2_i = function() {
        var t = new eui.Image;
        return this.img2 = t,
        t.source = "level4_img2_png",
        t.x = 187,
        t.y = 46,
        t
    },
    s.rb_0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_0 = t,
        t.x = 19,
        t.y = -13,
        t.skinName = n,
        t
    },
    s.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.x = 2,
        t.y = 90,
        t.skinName = i,
        t
    },
    s.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.x = 17,
        t.y = 198,
        t.skinName = r,
        t
    },
    s.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "level4_btnFight_png",
        t.x = 260,
        t.y = 379,
        t
    },
    s.btnBeat_i = function() {
        var t = new eui.Image;
        return this.btnBeat = t,
        t.source = "level4_btnBeat_png",
        t.x = 460,
        t.y = 379,
        t
    },
    s.info_i = function() {
        var t = new eui.Group;
        return this.info = t,
        t.x = 725,
        t.y = 15,
        t.elementsContent = [this.infobg2_i(), this.effect_i(), this.succ_i(), this.faily_i()],
        t
    },
    s.infobg2_i = function() {
        var t = new eui.Image;
        return this.infobg2 = t,
        t.source = "level4_infobg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.effect_i = function() {
        var t = new eui.Group;
        return this.effect = t,
        t.x = 16,
        t.y = 15,
        t.elementsContent = [this.infobg_i(), this.txtEff_i(), this.tztj_i()],
        t
    },
    s.infobg_i = function() {
        var t = new eui.Image;
        return this.infobg = t,
        t.source = "level4_infobg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.txtEff_i = function() {
        var t = new eui.Label;
        return this.txtEff = t,
        t.size = 18,
        t.text = "对战中打出8次致命一击\n并击败燃魂巨兽",
        t.textColor = 16773461,
        t.width = 197,
        t.x = 35,
        t.y = 51,
        t
    },
    s.tztj_i = function() {
        var t = new eui.Label;
        return this.tztj = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "挑战条件",
        t.textColor = 15452579,
        t.x = 92,
        t.y = 18,
        t
    },
    s.succ_i = function() {
        var t = new eui.Group;
        return this.succ = t,
        t.x = 16,
        t.y = 116,
        t.elementsContent = [this.infobg_2_i(), this.txtSucc_i(), this.sljl_i()],
        t
    },
    s.infobg_2_i = function() {
        var t = new eui.Image;
        return this.infobg_2 = t,
        t.source = "level4_infobg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.txtSucc_i = function() {
        var t = new eui.Label;
        return this.txtSucc = t,
        t.size = 18,
        t.text = "累积伤害+5000",
        t.textColor = 16773461,
        t.x = 72,
        t.y = 60,
        t
    },
    s.sljl_i = function() {
        var t = new eui.Label;
        return this.sljl = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "胜利奖励",
        t.textColor = 15452579,
        t.x = 92,
        t.y = 18,
        t
    },
    s.faily_i = function() {
        var t = new eui.Group;
        return this.faily = t,
        t.x = 16,
        t.y = 217,
        t.elementsContent = [this.infobg_3_i(), this.txth_i(), this.sbcf_i()],
        t
    },
    s.infobg_3_i = function() {
        var t = new eui.Image;
        return this.infobg_3 = t,
        t.source = "level4_infobg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.txth_i = function() {
        var t = new eui.Label;
        return this.txth = t,
        t.size = 18,
        t.text = "累积伤害-3500",
        t.textColor = 16773461,
        t.x = 72,
        t.y = 61,
        t
    },
    s.sbcf_i = function() {
        var t = new eui.Label;
        return this.sbcf = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "失败惩罚",
        t.textColor = 15452579,
        t.x = 92,
        t.y = 18,
        t
    },
    s.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 31,
        t.y = 2,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.title_i()],
        t
    },
    s.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "level4_up_bg_png",
        t.x = 63,
        t.y = 0,
        t
    },
    s.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "level4_btnClose_png",
        t.x = 0,
        t.y = 3,
        t
    },
    s.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "level4_title_png",
        t.x = 81,
        t.y = 5,
        t
    },
    s.t_i = function() {
        var t = new eui.Group;
        return this.t = t,
        t.horizontalCenter = .5,
        t.y = 60,
        t.elementsContent = [this.txtbg_i(), this.gjjsmbhtztjjhtzljzgdshjkjbrhjs_i()],
        t
    },
    s.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.source = "level4_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.gjjsmbhtztjjhtzljzgdshjkjbrhjs_i = function() {
        var t = new eui.Label;
        return this.gjjsmbhtztjjhtzljzgdshjkjbrhjs = t,
        t.size = 18,
        t.text = "根据巨兽目标和挑战条件进行挑战，累计足够的伤害即可击败燃魂巨兽",
        t.textColor = 16768178,
        t.x = 170,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/MainSkin.exml"] = window.pveZhanZhiKuangRe.MainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnInfo", "level1", "level2", "level3", "level4", "tag", "tag_2", "tag_3", "tag_4", "btnGet", "img_j", "jinhuabixu", "title", "Got", "txtLabel", "btnOne", "up_bg", "btnClose", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.btnInfo_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.top_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "main_bg_png",
        t.y = 0,
        t
    },
    n.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.left = 27,
        t.source = "main_btnInfo_png",
        t.y = 547,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 437,
        t.horizontalCenter = 330,
        t.width = 440,
        t.y = 87,
        t.elementsContent = [this.level1_i(), this.level2_i(), this.level3_i(), this.level4_i(), this.tag_i(), this.tag_2_i(), this.tag_3_i(), this.tag_4_i()],
        t
    },
    n.level1_i = function() {
        var t = new eui.Image;
        return this.level1 = t,
        t.source = "main_level1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.level2_i = function() {
        var t = new eui.Image;
        return this.level2 = t,
        t.source = "main_level2_png",
        t.x = 54,
        t.y = 109,
        t
    },
    n.level3_i = function() {
        var t = new eui.Image;
        return this.level3 = t,
        t.source = "main_level3_png",
        t.x = 68,
        t.y = 222,
        t
    },
    n.level4_i = function() {
        var t = new eui.Image;
        return this.level4 = t,
        t.source = "main_level4_png",
        t.x = 33,
        t.y = 334,
        t
    },
    n.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.source = "pve_zhan_zhi_kuang_re_main_tag_png",
        t.x = 73,
        t.y = 34,
        t
    },
    n.tag_2_i = function() {
        var t = new eui.Image;
        return this.tag_2 = t,
        t.source = "pve_zhan_zhi_kuang_re_main_tag_png",
        t.x = 126,
        t.y = 144,
        t
    },
    n.tag_3_i = function() {
        var t = new eui.Image;
        return this.tag_3 = t,
        t.source = "pve_zhan_zhi_kuang_re_main_tag_png",
        t.x = 140,
        t.y = 255,
        t
    },
    n.tag_4_i = function() {
        var t = new eui.Image;
        return this.tag_4 = t,
        t.source = "pve_zhan_zhi_kuang_re_main_tag_png",
        t.x = 106,
        t.y = 369,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 84,
        t.right = 0,
        t.width = 320,
        t.y = 540,
        t.elementsContent = [this.btnGet_i(), this.img_j_i(), this.jinhuabixu_i()],
        t
    },
    n.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "main_btnGet_png",
        t.x = 87,
        t.y = 0,
        t
    },
    n.img_j_i = function() {
        var t = new eui.Image;
        return this.img_j = t,
        t.source = "main_img_j_png",
        t.x = 39,
        t.y = 65,
        t
    },
    n.jinhuabixu_i = function() {
        var t = new eui.Label;
        return this.jinhuabixu = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "进化必需",
        t.textColor = 9641502,
        t.x = 0,
        t.y = 40,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.height = 336,
        t.horizontalCenter = -189,
        t.width = 534,
        t.y = 284,
        t.elementsContent = [this.title_i(), this.Got_i(), this.btnOne_i()],
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pve_zzkr_main_title_png",
        t.x = 0,
        t.y = 30,
        t
    },
    n.Got_i = function() {
        var t = new eui.Image;
        return this.Got = t,
        t.source = "main_Got_png",
        t.x = 120,
        t.y = 0,
        t
    },
    n.btnOne_i = function() {
        var t = new eui.Group;
        return this.btnOne = t,
        t.x = 128,
        t.y = 259,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 77,
        t.source = "pve_zhan_zhi_kuang_re_btnbg_png",
        t.width = 251,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtLabel_i = function() {
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
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "main_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "main_btnClose_png",
        t.x = 31,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/UpenergySkin.exml"] = window.pveZhanZhiKuangRe.UpenergySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgBtn_pet", "imgBtn_cure", "btns", "up_bg", "btnClose", "title", "top", "pet", "jx_29_kb", "dqsytzcs45", "btnAdd", "add", "jx_29_kb_2", "dqyykzzl_55", "dqyykzzl_0", "a_1716092_kb", "btnAdd_2", "add2", "btnFight", "itembg1", "btnSkill", "icon_skill", "flagSkill", "skill", "itembg2", "brnTexing", "icon_texing", "flagTexing", "texing", "itembg3", "btnMark", "icon_mark", "flagMark", "mark", "exchange", "rb_1", "rb_2", "rb_3", "txtbg", "my15gkzzljkdhdwjnzstxzskyzdyg_xzgkdndkyjkhdkzzldsde", "t"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.btns_i(), this.top_i(), this._Group1_i(), this.t_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "upenergy1_up_png"), new eui.SetProperty("_Image1", "x", 9), new eui.SetProperty("_Image1", "y", 9)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "upenergy1_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "upenergy2_up_png"), new eui.SetProperty("_Image1", "x", 9), new eui.SetProperty("_Image1", "y", 9)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "upenergy2_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "upenergy3_up_png"), new eui.SetProperty("_Image1", "x", 9), new eui.SetProperty("_Image1", "y", 9)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "upenergy3_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "level1_bg_png",
        t.y = 0,
        t
    },
    s.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.left = 34,
        t.y = 255,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    s.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "upenergy_imgBtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "upenergy_imgBtn_cure_png",
        t.x = 0,
        t.y = 68,
        t
    },
    s.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 31,
        t.y = 2,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.title_i()],
        t
    },
    s.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "upenergy_up_bg_png",
        t.x = 63,
        t.y = 0,
        t
    },
    s.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "upenergy_btnClose_png",
        t.x = 0,
        t.y = 3,
        t
    },
    s.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "upenergy_title_png",
        t.x = 81,
        t.y = 5,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 543,
        t.horizontalCenter = 31.5,
        t.width = 953,
        t.y = 68,
        t.elementsContent = [this.pet_i(), this.add_i(), this.add2_i(), this.btnFight_i(), this.exchange_i(), this.rb_1_i(), this.rb_2_i(), this.rb_3_i()],
        t
    },
    s.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.source = "upenergy_pet_png",
        t.x = 124,
        t.y = 0,
        t
    },
    s.add_i = function() {
        var t = new eui.Group;
        return this.add = t,
        t.x = 100,
        t.y = 509,
        t.elementsContent = [this.jx_29_kb_i(), this.dqsytzcs45_i(), this.btnAdd_i()],
        t
    },
    s.jx_29_kb_i = function() {
        var t = new eui.Image;
        return this.jx_29_kb = t,
        t.source = "upenergy_jx_29_kb_png",
        t.x = 0,
        t.y = 1,
        t
    },
    s.dqsytzcs45_i = function() {
        var t = new eui.Label;
        return this.dqsytzcs45 = t,
        t.size = 18,
        t.text = "当前剩余挑战次数：4/5",
        t.textColor = 16777215,
        t.x = 42,
        t.y = 8,
        t
    },
    s.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "upenergy_btnAdd_png",
        t.x = 247,
        t.y = 0,
        t
    },
    s.add2_i = function() {
        var t = new eui.Group;
        return this.add2 = t,
        t.x = 475,
        t.y = 509,
        t.elementsContent = [this.jx_29_kb_2_i(), this.dqyykzzl_55_i(), this.dqyykzzl_0_i(), this.a_1716092_kb_i(), this.btnAdd_2_i()],
        t
    },
    s.jx_29_kb_2_i = function() {
        var t = new eui.Image;
        return this.jx_29_kb_2 = t,
        t.source = "upenergy_jx_29_kb_png",
        t.x = 0,
        t.y = 1,
        t
    },
    s.dqyykzzl_55_i = function() {
        var t = new eui.Label;
        return this.dqyykzzl_55 = t,
        t.size = 18,
        t.text = "当前拥有狂战之镰",
        t.textColor = 16777215,
        t.visible = !0,
        t.width = 214,
        t.x = 15,
        t.y = 8,
        t
    },
    s.dqyykzzl_0_i = function() {
        var t = new eui.Label;
        return this.dqyykzzl_0 = t,
        t.size = 18,
        t.text = ":55  ",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 192,
        t.y = 8,
        t
    },
    s.a_1716092_kb_i = function() {
        var t = new eui.Image;
        return this.a_1716092_kb = t,
        t.source = "upenergy_1716092_kb_png",
        t.x = 163,
        t.y = 8,
        t
    },
    s.btnAdd_2_i = function() {
        var t = new eui.Image;
        return this.btnAdd_2 = t,
        t.source = "upenergy_btnAdd_png",
        t.x = 247,
        t.y = 0,
        t
    },
    s.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "upenergy_btnFight_png",
        t.x = 324,
        t.y = 419,
        t
    },
    s.exchange_i = function() {
        var t = new eui.Group;
        return this.exchange = t,
        t.x = 747,
        t.y = 78,
        t.elementsContent = [this.skill_i(), this.texing_i(), this.mark_i()],
        t
    },
    s.skill_i = function() {
        var t = new eui.Group;
        return this.skill = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.itembg1_i(), this.btnSkill_i(), this.icon_skill_i(), this.flagSkill_i()],
        t
    },
    s.itembg1_i = function() {
        var t = new eui.Image;
        return this.itembg1 = t,
        t.source = "upenergy_itembg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.btnSkill_i = function() {
        var t = new eui.Image;
        return this.btnSkill = t,
        t.source = "upenergy_btnSkill_png",
        t.x = 103,
        t.y = 47,
        t
    },
    s.icon_skill_i = function() {
        var t = new eui.Image;
        return this.icon_skill = t,
        t.source = "upenergy_icon_skill_png",
        t.x = 65,
        t.y = 30,
        t
    },
    s.flagSkill_i = function() {
        var t = new eui.Image;
        return this.flagSkill = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_zhan_zhi_kuang_re_upenergy_flagMark_png",
        t.x = 88,
        t.y = 59.000000000000014,
        t
    },
    s.texing_i = function() {
        var t = new eui.Group;
        return this.texing = t,
        t.x = 53,
        t.y = 129,
        t.elementsContent = [this.itembg2_i(), this.brnTexing_i(), this.icon_texing_i(), this.flagTexing_i()],
        t
    },
    s.itembg2_i = function() {
        var t = new eui.Image;
        return this.itembg2 = t,
        t.source = "upenergy_itembg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.brnTexing_i = function() {
        var t = new eui.Image;
        return this.brnTexing = t,
        t.source = "upenergy_brnTexing_png",
        t.x = 79,
        t.y = 51,
        t
    },
    s.icon_texing_i = function() {
        var t = new eui.Image;
        return this.icon_texing = t,
        t.source = "upenergy_icon_texing_png",
        t.x = 43,
        t.y = 32,
        t
    },
    s.flagTexing_i = function() {
        var t = new eui.Image;
        return this.flagTexing = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_zhan_zhi_kuang_re_upenergy_flagMark_png",
        t.visible = !0,
        t.x = 64,
        t.y = 63,
        t
    },
    s.mark_i = function() {
        var t = new eui.Group;
        return this.mark = t,
        t.x = 16,
        t.y = 254,
        t.elementsContent = [this.itembg3_i(), this.btnMark_i(), this.icon_mark_i(), this.flagMark_i()],
        t
    },
    s.itembg3_i = function() {
        var t = new eui.Image;
        return this.itembg3 = t,
        t.source = "upenergy_itembg3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.btnMark_i = function() {
        var t = new eui.Image;
        return this.btnMark = t,
        t.source = "upenergy_btnMark_png",
        t.x = 89,
        t.y = 47,
        t
    },
    s.icon_mark_i = function() {
        var t = new eui.Image;
        return this.icon_mark = t,
        t.source = "upenergy_icon_mark_png",
        t.x = 50,
        t.y = 32,
        t
    },
    s.flagMark_i = function() {
        var t = new eui.Image;
        return this.flagMark = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_zhan_zhi_kuang_re_upenergy_flagMark_png",
        t.x = 74.00000000000011,
        t.y = 58.99999999999994,
        t
    },
    s.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "tab",
        t.value = "1",
        t.x = 0,
        t.y = 80,
        t.skinName = n,
        t
    },
    s.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "tab",
        t.value = "2",
        t.x = 0,
        t.y = 183,
        t.skinName = i,
        t
    },
    s.rb_3_i = function() {
        var t = new eui.RadioButton;
        return this.rb_3 = t,
        t.groupName = "tab",
        t.value = "3",
        t.x = 0,
        t.y = 285,
        t.skinName = r,
        t
    },
    s.t_i = function() {
        var t = new eui.Group;
        return this.t = t,
        t.horizontalCenter = .5,
        t.y = 60,
        t.elementsContent = [this.txtbg_i(), this.my15gkzzljkdhdwjnzstxzskyzdyg_xzgkdndkyjkhdkzzldsde_i()],
        t
    },
    s.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.source = "upenergy_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.my15gkzzljkdhdwjnzstxzskyzdyg_xzgkdndkyjkhdkzzldsde_i = function() {
        var t = new eui.Label;
        return this.my15gkzzljkdhdwjnzstxzskyzdyg_xzgkdndkyjkhdkzzldsde = t,
        t.size = 18,
        t.text = "每有15个狂战之镰，即可兑换第五技能、专属特性、专属刻印中的一个，\n选择合适的难度，可以加快获得狂战之镰的速度哦！",
        t.textColor = 16768178,
        t.width = 602,
        t.x = 161,
        t.y = 10,
        t
    },
    e
} (eui.Skin);