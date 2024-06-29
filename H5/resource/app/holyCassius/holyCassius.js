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
holyCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.service.setValues([e.holyCassiusConst.forever_level1_fallTime, e.holyCassiusConst.forever_level1_state, e.holyCassiusConst.forever_level2_state, e.holyCassiusConst.forever_level3_state, e.holyCassiusConst.forever_level4_attackDamage, e.holyCassiusConst.forever_level4_fixedDamager, e.holyCassiusConst.forever_levels_state, e.holyCassiusConst.forever_pet_state], [e.holyCassiusConst.daily_level1_times, e.holyCassiusConst.daily_level2_times, e.holyCassiusConst.daily_level3_times, e.holyCassiusConst.daily_level4_times, e.holyCassiusConst.daily_level5_times], [e.holyCassiusConst.foreverBitbuf_useMountain, e.holyCassiusConst.foreverBitbuf_hasUseMountain]),
            n.init([{
                panelName: e.holyCassiusConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.holyCassiusConst.PANEL1
            },
            {
                panelName: e.holyCassiusConst.PANEL2
            },
            {
                panelName: e.holyCassiusConst.PANEL3
            },
            {
                panelName: e.holyCassiusConst.PANEL4
            },
            {
                panelName: e.holyCassiusConst.PANEL5
            }]),
            n
        }
        return __extends(n, t),
        n.prototype.reShow = function() {
            var e = this;
            this.service.updateValues().then(function() {
                e.destroyed || e.currentPanel && "holyCassius.panel4" != e.currentPanel.name && "holyCassius.panel3" != e.currentPanel.name && e.currentPanel.update && e.currentPanel.update()
            })
        },
        n
    } (BasicMultPanelModule);
    e.HolyCassius = t,
    __reflect(t.prototype, "holyCassius.HolyCassius")
} (holyCassius || (holyCassius = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
holyCassius; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "holyCassius.HolyCassiusMainPanel",
        e.PANEL1 = "holyCassius.HolyCassiusPanel1",
        e.PANEL2 = "holyCassius.HolyCassiusPanel2",
        e.PANEL3 = "holyCassius.HolyCassiusPanel3",
        e.PANEL4 = "holyCassius.HolyCassiusPanel4",
        e.PANEL5 = "holyCassius.HolyCassiusPanel5",
        e.holyCassius_CMD = 43283,
        e.forever_pet_state = 7072,
        e.forever_levels_state = 7073,
        e.forever_level1_state = 7074,
        e.forever_level1_fallTime = 7075,
        e.forever_level2_state = 7076,
        e.forever_level3_state = 7077,
        e.forever_level4_attackDamage = 7078,
        e.forever_level4_fixedDamager = 7079,
        e.daily_level1_times = 15539,
        e.daily_level2_times = 15540,
        e.daily_level3_times = 15541,
        e.daily_level4_times = 15542,
        e.daily_level5_times = 15543,
        e.foreverBitbuf_useMountain = 16449,
        e.foreverBitbuf_hasUseMountain = 16448,
        e.exchange_level1 = 11188,
        e.exchange_level2 = 11189,
        e.exchange_level3 = 11190,
        e.exchange_level4 = 11191,
        e.exchange_level5 = 11192,
        e.exchange_item = 11193,
        e
    } ();
    e.holyCassiusConst = t,
    __reflect(t.prototype, "holyCassius.holyCassiusConst")
} (holyCassius || (holyCassius = {}));
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
    return new(n || (n = Promise))(function(s, a) {
        function o(e) {
            try {
                _(i.next(e))
            } catch(t) {
                a(t)
            }
        }
        function r(e) {
            try {
                _(i["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function _(e) {
            e.done ? s(e.value) : new n(function(t) {
                t(e.value)
            }).then(o, r)
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
            if (s = 1, a && (o = a[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(a, n[1])).done) return o;
            switch (a = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return _.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                _.label++,
                a = n[1],
                n = [0];
                continue;
            case 7:
                n = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    _ = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    _.label = n[1];
                    break
                }
                if (6 === n[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = n;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(n);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            n = t.call(e, _)
        } catch(i) {
            n = [6, i],
            a = 0
        } finally {
            s = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var s, a, o, r, _ = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return r = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this
    }),
    r
},
holyCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.canDown = !0,
            n.new_monster_level_id = 134,
            n.skinName = e.MainpanelSkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(129, this, "hc_mainpanel_stms_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230224版本系统功能", "圣地卡修斯搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "hc_mainpanel_btncollected_png": "hc_mainpanel_btncollect_png"
            })
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btn1,
            function() {
                StatLogger.log("20230224版本系统功能", "圣地卡修斯搬迁", "点击主界面-【感受圣灵】"),
                t.service.openPanel(e.holyCassiusConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                StatLogger.log("20230224版本系统功能", "圣地卡修斯搬迁", "点击主界面-【诅咒再起】"),
                t.service.openPanel(e.holyCassiusConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                StatLogger.log("20230224版本系统功能", "圣地卡修斯搬迁", "点击主界面-【破除诅咒】"),
                t.service.openPanel(e.holyCassiusConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btn4,
            function() {
                StatLogger.log("20230224版本系统功能", "圣地卡修斯搬迁", "点击主界面-【拯救山神】"),
                t.service.openPanel(e.holyCassiusConst.PANEL4)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230224版本系统功能", "圣地卡修斯搬迁", "点击主界面-【能力提升】"),
                t.service.openPanel(e.holyCassiusConst.PANEL5)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3568,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                StatLogger.log("20230224版本系统功能", "圣地卡修斯搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProductBySocket(252700,
                    function() {
                        SocketConnection.sendByQueue(e.holyCassiusConst.holyCassius_CMD, [1, 0],
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    },
                    t)
                },
                t)
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
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "hc_mainpanel_btncollected_png": "hc_mainpanel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.update = function() {
            for (var t = this.service.getValue(e.holyCassiusConst.forever_levels_state), n = this.service.getValue(e.holyCassiusConst.forever_pet_state), i = 1 == KTool.getBit(n, 1), s = 0, a = 1; 4 >= a; a++) this["pass" + a].visible = t >= a || i,
            s += KTool.getBit(n, a);
            DisplayUtil.setEnabled(this.btn1, 1 > t && !i, t >= 1 || i),
            DisplayUtil.setEnabled(this.btn2, 1 == t && !i, 1 != t || i),
            DisplayUtil.setEnabled(this.btn3, 2 == t && !i, 2 != t || i),
            DisplayUtil.setEnabled(this.btn4, 3 == t && !i, 3 != t || i),
            this.btnUp.visible = i && 4 != s,
            this.btnOnekey.visible = 4 > t || i,
            this.hasGetPet.visible = i,
            DisplayUtil.setEnabled(this.btnOnekey, !i, i)
        },
        n
    } (BasicPanel);
    e.HolyCassiusMainPanel = t,
    __reflect(t.prototype, "holyCassius.HolyCassiusMainPanel")
} (holyCassius || (holyCassius = {}));
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
holyCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.bossIndex = 0,
            n.leftTime = 0,
            n.hasPass4 = !1,
            n.skinName = e.Panel1Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hc_mainpanel_title1_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252702, 1,
                    function() {
                        KTool.doExchange(e.holyCassiusConst.exchange_level1, 1,
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
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void(t.isclickFight || (t.isclickFight = !0, SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [718 + t.bossIndex, 0, 0, 0, 0, 0])))
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252701, 1,
                    function() {
                        SocketConnection.sendByQueue(e.holyCassiusConst.holyCassius_CMD, [2, 1],
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
            this.isclickFight = !1,
            this.leftTime = 5 - this.service.getValue(e.holyCassiusConst.daily_level1_times);
            var n = this.service.getValue(e.holyCassiusConst.forever_levels_state);
            this.bossIndex = this.service.getValue(e.holyCassiusConst.forever_level1_state);
            for (var i = this.service.getValue(e.holyCassiusConst.forever_level1_fallTime), s = 1; 5 >= s; s++) this["grp_pet" + s].visible = this.bossIndex + 1 == s;
            var a = n >= 1;
            if (this.txtLeftTime.text = "剩余挑战次数：" + this.leftTime, this.txt_overtime.text = "已击败状态：" + this.bossIndex + "/5", this.btnFight.visible = 0 == i, this.wait.visible = 0 != i, this.service.registerClock(i + 30,
            function() {
                FightManager.isFighting || (t.wait.visible = !1, t.btnFight.visible = !0)
            },
            this, this.txt_waitTime), a && !this.hasPass4) {
                this.hasPass4 = !0,
                EventManager.removeAll(this);
                var o = "恭喜你成功感悟了圣灵的真义！";
                Alarm.show(o,
                function() {
                    t.service.openPanel(e.holyCassiusConst.PANEL2)
                })
            }
            DisplayUtil.setEnabled(this.btnAdd, 5 != this.leftTime, 5 == this.leftTime)
        },
        n
    } (BasicPanel);
    e.HolyCassiusPanel1 = t,
    __reflect(t.prototype, "holyCassius.HolyCassiusPanel1")
} (holyCassius || (holyCassius = {}));
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
holyCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.skinName = e.Panel2Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hc_mainpanel_title2_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252704, 1,
                    function() {
                        KTool.doExchange(e.holyCassiusConst.exchange_level2, 1,
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
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void(t.isclickFight || (t.isclickFight = !0, FightManager.fightNoMapBoss(11988)))
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252703, 1,
                    function() {
                        SocketConnection.sendByQueue(e.holyCassiusConst.holyCassius_CMD, [2, 2],
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
            this.isclickFight = !1,
            this.leftTime = 3 - this.service.getValue(e.holyCassiusConst.daily_level2_times);
            var n = this.service.getValue(e.holyCassiusConst.forever_levels_state),
            i = this.service.getValue(e.holyCassiusConst.forever_level2_state),
            s = n >= 2;
            if (this.txt_leftTime.text = "剩余挑战次数：" + this.leftTime, egret.setTimeout(function() {
                t.bar_value.value = i
            },
            this, 200), this.txtProgress.text = i + "%", s) {
                EventManager.removeAll(this);
                var a = "恭喜你成功净化了诅咒！";
                Alarm.show(a,
                function() {
                    t.service.openPanel(e.holyCassiusConst.PANEL3)
                })
            }
            DisplayUtil.setEnabled(this.btnAdd, 3 != this.leftTime, 3 == this.leftTime)
        },
        n
    } (BasicPanel);
    e.HolyCassiusPanel2 = t,
    __reflect(t.prototype, "holyCassius.HolyCassiusPanel2")
} (holyCassius || (holyCassius = {}));
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
holyCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.txtStrs = ["坚持15回合后击败狄修", "单精灵击败狄修", "击败狄修且最后一击为致命一击", "击败狄修且最后伤害为物理攻击", "击败狄修且最后一击为特殊攻击", "3回合内击败狄修"],
            n.skinName = e.Panel3Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.name = "holyCassius.panel4",
            this.initOldPveBtnClose(0, this, "hc_mainpanel_title3_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252706, 1,
                    function() {
                        KTool.doExchange(e.holyCassiusConst.exchange_level3, 1,
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
                var n = t.service.getValue(e.holyCassiusConst.forever_level3_state),
                i = t.service.getValue(e.holyCassiusConst.foreverBitbuf_useMountain),
                s = t.service.getValue(e.holyCassiusConst.foreverBitbuf_hasUseMountain),
                a = 1 == i && 1 != s;
                return 1 != n || 1 == PetManager.infos.length || a ? t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void(t.isclickFight || (t.isclickFight = !0, FightManager.fightNoMapBoss(11989))) : void Alarm.show("请将出战背包精灵调整为1只！")
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252705, 1,
                    function() {
                        SocketConnection.sendByQueue(e.holyCassiusConst.holyCassius_CMD, [2, 3],
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
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252820, 1,
                    function() {
                        SocketConnection.sendByQueue(e.holyCassiusConst.holyCassius_CMD, [10, 0],
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
            ImageButtonUtil.add(this.btnMountain,
            function() {
                var n = "使用山神守护可使当前挑战条件无效，<font color='#ff0000'>仅能使用1次</font>，确定使用吗？";
                Alert.show(n,
                function() {
                    SocketConnection.sendByQueue(e.holyCassiusConst.holyCassius_CMD, [3, 0],
                    function() {
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    })
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                t.service.updateValues().then(function() {
                    if (FightManager.isWin) {
                        var n = t.service.getValue(e.holyCassiusConst.forever_level3_state);
                        if (n == t.overTime) {
                            var i = "很遗憾，需要<font color='#ff0000'>" + t.txtStrs[t.overTime] + "</font>才能完成本次挑战";
                            Alarm.show(i)
                        }
                    }
                    t.update()
                })
            },
            this)
        },
        n.prototype.update = function() {
            var t = this;
            this.isclickFight = !1,
            this.leftTime = 3 - this.service.getValue(e.holyCassiusConst.daily_level3_times),
            this.overTime = this.service.getValue(e.holyCassiusConst.forever_level3_state);
            var n = this.service.getValue(e.holyCassiusConst.forever_levels_state),
            i = this.service.getValue(e.holyCassiusConst.foreverBitbuf_useMountain),
            s = this.service.getValue(e.holyCassiusConst.foreverBitbuf_hasUseMountain);
            this.hasUse.visible = 1 == i;
            var a = n >= 3;
            if (this.txt_leftTime.text = "剩余挑战次数：" + this.leftTime, this.txt_overTime.text = this.overTime + "/6", this.txtInfo.text = this.txtStrs[this.overTime], this.txtInfo.textColor = 16769906, this.line.visible = !1, 1 == i && 1 != s && (this.txtInfo.textColor = 12600657, this.line.visible = !0, this.line.width = this.txtInfo.width), a) {
                EventManager.removeAll(this);
                var o = "恭喜你成功净化了诅咒！";
                Alarm.show(o,
                function() {
                    t.service.openPanel(e.holyCassiusConst.PANEL4)
                })
            }
            DisplayUtil.setEnabled(this.btnAdd, 3 != this.leftTime, 3 == this.leftTime)
        },
        n
    } (BasicPanel);
    e.HolyCassiusPanel3 = t,
    __reflect(t.prototype, "holyCassius.HolyCassiusPanel3")
} (holyCassius || (holyCassius = {}));
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
holyCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.damage1 = 0,
            n.damage2 = 0,
            n.leftTime = 0,
            n.hasPass4 = !1,
            n.skinName = e.Panel4Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            this.name = "holyCassius.panel4",
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hc_mainpanel_title4_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252708, 1,
                    function() {
                        KTool.doExchange(e.holyCassiusConst.exchange_level4, 1,
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
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void(t.isclickFight || (t.isclickFight = !0, FightManager.fightNoMapBoss(11990)))
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252707, 1,
                    function() {
                        SocketConnection.sendByQueue(e.holyCassiusConst.holyCassius_CMD, [2, 4],
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
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                FightManager.isWin && t.service.updateValues().then(function() {
                    var n = t.service.getValue(e.holyCassiusConst.forever_level4_attackDamage),
                    i = t.service.getValue(e.holyCassiusConst.forever_level4_fixedDamager),
                    s = n - t.damage1,
                    a = i - t.damage2;
                    if (0 == s && 0 == a) Alarm.show("很遗憾，本次挑战中为山神注入的圣灵力量超过了领悟的圣灵力量的十分之一，无法为山神缓解伤势，请再接再厉！此时攻击伤害和固定伤害均不累计",
                    function() {
                        t.update()
                    });
                    else {
                        var o = "本次累计<font color='#ff984d'$>" + s + "攻击伤害</font>与<font color='#5cd8f3'$>" + a + "固定伤害</font>";
                        Alarm.show(o,
                        function() {
                            t.update()
                        })
                    }
                })
            },
            this)
        },
        n.prototype.update = function() {
            var t = this;
            this.isclickFight = !1,
            this.leftTime = 3 - this.service.getValue(e.holyCassiusConst.daily_level4_times);
            var n = this.service.getValue(e.holyCassiusConst.forever_levels_state);
            this.damage1 = this.service.getValue(e.holyCassiusConst.forever_level4_attackDamage),
            this.damage2 = this.service.getValue(e.holyCassiusConst.forever_level4_fixedDamager),
            this.txt_leftTime.text = "剩余挑战次数：" + this.leftTime;
            var i = n >= 4,
            s = this.damage1 > 1e4 ? 1e4: this.damage1,
            a = this.damage2 > 1e4 ? 1e4: this.damage2;
            if (this.txt_damage1.text = s + "/10000", this.txt_damage2.text = a + "/10000", i && !this.hasPass4) {
                this.hasPass4 = !0,
                EventManager.removeAll(this);
                var o = "恭喜你成功拯救了命悬一线的山神！";
                Alarm.show(o,
                function() {
                    t.service.backToMainPanel()
                })
            }
            DisplayUtil.setEnabled(this.btnAdd, 3 != this.leftTime, 3 == this.leftTime)
        },
        n
    } (BasicPanel);
    e.HolyCassiusPanel4 = t,
    __reflect(t.prototype, "holyCassius.HolyCassiusPanel4")
} (holyCassius || (holyCassius = {}));
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
holyCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.skinName = e.Panel5Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hc_mainpanel_title5_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252709, 1,
                    function() {
                        KTool.doExchange(e.holyCassiusConst.exchange_level5, 1,
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
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var n = {};
                    n.type = "product_diamond",
                    n.ins = {
                        iconID: 1715922,
                        productID: 252710
                    },
                    n.caller = t,
                    n.callBack = function(n, i) {
                        KTool.buyProductByCallback(252710, i,
                        function() {
                            KTool.doExchange(e.holyCassiusConst.exchange_item, i,
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, n)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                t.service.showPetEff(3568)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 31797
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(41182) ? (e = {},
                e.ins = 41182, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 41182, tipsPop.TipsPop.openItemPop(e))
            },
            this);
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnFight" + n],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void(t.isclickFight || (t.isclickFight = !0, FightManager.fightNoMapBoss(11990 + n)))
                },
                i),
                ImageButtonUtil.add(i["btnExcchange" + n],
                function() {
                    if (ItemManager.getNumByID(1715922) < 15) return void BubblerManager.getInstance().showText("牺牲圣令数量不足，参与挑战可以获得！");
                    if (!PetManager.isDefaultPet(3568)) return void Alarm.show("请将圣地卡修斯放入出战背包首发！",
                    function() {
                        t.service.showPetBag()
                    });
                    var i = "";
                    3 == n ? i = "成功兑换第五技能，可以前往背包查看": 2 == n && (i = "成功兑换专属特性，可以前往背包查看"),
                    SocketConnection.sendByQueue(e.holyCassiusConst.holyCassius_CMD, [4, n],
                    function() {
                        1 != n && Alert.show(i,
                        function() {
                            t.service.showPetBag()
                        }),
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    })
                },
                i)
            },
            i = this, s = 1; 3 >= s; s++) n(s)
        },
        n.prototype.update = function() {
            this.isclickFight = !1;
            var t = MainManager.actorInfo.isVip ? 5 : 3;
            this.leftTime = t - this.service.getValue(e.holyCassiusConst.daily_level5_times);
            var n = this.service.getValue(e.holyCassiusConst.forever_pet_state);
            this.txt_leftTime.text = "剩余挑战次数：" + this.leftTime,
            this.txt_itemNum.text = ItemManager.getNumByID(1715922) + "",
            DisplayUtil.setEnabled(this.btnAdd, this.leftTime != t, this.leftTime == t);
            for (var i = 1; 3 >= i; i++) {
                var s = KTool.getBit(n, 1 + i);
                DisplayUtil.setEnabled(this["btnExcchange" + i], 1 != s, 1 == s)
            }
        },
        n
    } (BasicPanel);
    e.HolyCassiusPanel5 = t,
    __reflect(t.prototype, "holyCassius.HolyCassiusPanel5")
} (holyCassius || (holyCassius = {})),
window.holyCassius = window.holyCassius || {};
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
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.holyCassius.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btn1", "btn2", "btn3", "btn4", "btnInfo", "btnCollect", "btnOnekey", "btnUp", "pass1", "pass2", "pass3", "pass4", "hasGetPet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.percentHeight = 100,
        e.source = "hc_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 3,
        e.y = 282,
        e.elementsContent = [this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btn4_i(), this.btnInfo_i(), this.btnCollect_i(), this.btnOnekey_i(), this.btnUp_i(), this.pass1_i(), this.pass2_i(), this.pass3_i(), this.pass4_i(), this.hasGetPet_i()],
        e
    },
    n.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.pixelHitTest = !0,
        e.source = "hc_mainpanel_icon1_png",
        e.x = 69,
        e.y = 198,
        e
    },
    n.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.pixelHitTest = !0,
        e.source = "hc_mainpanel_icon2_png",
        e.x = 303,
        e.y = 123,
        e
    },
    n.btn3_i = function() {
        var e = new eui.Image;
        return this.btn3 = e,
        e.pixelHitTest = !0,
        e.source = "hc_mainpanel_icon3_png",
        e.x = 515,
        e.y = 192,
        e
    },
    n.btn4_i = function() {
        var e = new eui.Image;
        return this.btn4 = e,
        e.pixelHitTest = !0,
        e.source = "hc_mainpanel_icon4_png",
        e.x = 766,
        e.y = 120,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "hc_mainpanel_btninfo_png",
        e.x = 0,
        e.y = 283,
        e
    },
    n.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "hc_mainpanel_btncollect_png",
        e.x = 0,
        e.y = 212,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "hc_mainpanel_zzhd_png",
        e.x = 1001,
        e.y = 255,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "hc_mainpanel_nlds_png",
        e.visible = !1,
        e.x = 1001,
        e.y = 255,
        e
    },
    n.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.source = "hc_mainpanel_yiwancheng_png",
        e.x = 80,
        e.y = 204,
        e
    },
    n.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.height = 79,
        e.source = "hc_mainpanel_yiwancheng_png",
        e.width = 200,
        e.x = 314,
        e.y = 129,
        e
    },
    n.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.height = 79,
        e.source = "hc_mainpanel_yiwancheng_png",
        e.width = 200,
        e.x = 526,
        e.y = 201,
        e
    },
    n.pass4_i = function() {
        var e = new eui.Image;
        return this.pass4 = e,
        e.height = 79,
        e.source = "hc_mainpanel_yiwancheng_png",
        e.width = 200,
        e.x = 777,
        e.y = 126,
        e
    },
    n.hasGetPet_i = function() {
        var e = new eui.Image;
        return this.hasGetPet = e,
        e.height = 76,
        e.source = "hc_mainpanel_yihuode_png",
        e.width = 231,
        e.x = 554,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.holyCassius.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "grp_pet1", "grp_pet2", "grp_pet3", "grp_pet4", "grp_pet5", "txt_overtime", "txtLeftTime", "btnFight", "txt_waitTime", "wait", "btnAdd", "btnOnekey", "panel1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.panel1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "hc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.panel1_i = function() {
        var e = new eui.Group;
        return this.panel1 = e,
        e.horizontalCenter = 9.5,
        e.visible = !0,
        e.y = 38,
        e.elementsContent = [this.grp_pet1_i(), this.grp_pet2_i(), this.grp_pet3_i(), this.grp_pet4_i(), this.grp_pet5_i(), this._Image11_i(), this._Group1_i(), this._Image14_i(), this._Image15_i(), this.txtLeftTime_i(), this.btnFight_i(), this.wait_i(), this.btnAdd_i(), this.btnOnekey_i(), this._Image17_i(), this._Image18_i(), this._Label2_i()],
        e
    },
    n.grp_pet1_i = function() {
        var e = new eui.Group;
        return this.grp_pet1 = e,
        e.visible = !0,
        e.x = 756,
        e.y = 142,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet1-txt_png",
        e.x = 172,
        e.y = 15,
        e
    },
    n.grp_pet2_i = function() {
        var e = new eui.Group;
        return this.grp_pet2 = e,
        e.visible = !0,
        e.x = 754,
        e.y = 124,
        e.elementsContent = [this._Image3_i(), this._Image4_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet2-txt_png",
        e.x = 172,
        e.y = 15,
        e
    },
    n.grp_pet3_i = function() {
        var e = new eui.Group;
        return this.grp_pet3 = e,
        e.visible = !1,
        e.x = 629,
        e.y = 105,
        e.elementsContent = [this._Image5_i(), this._Image6_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet3-txt_png",
        e.x = 301,
        e.y = 15,
        e
    },
    n.grp_pet4_i = function() {
        var e = new eui.Group;
        return this.grp_pet4 = e,
        e.visible = !1,
        e.x = 710,
        e.y = 105,
        e.elementsContent = [this._Image7_i(), this._Image8_i()],
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet4-txt_png",
        e.x = 220,
        e.y = 15,
        e
    },
    n.grp_pet5_i = function() {
        var e = new eui.Group;
        return this.grp_pet5 = e,
        e.visible = !1,
        e.x = 572,
        e.y = 23,
        e.elementsContent = [this._Image9_i(), this._Image10_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet5_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_pet5-txt_png",
        e.visible = !0,
        e.x = 358,
        e.y = 100,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_zu_17_png",
        e.x = 0,
        e.y = 94,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 709,
        e.y = 463,
        e.elementsContent = [this._Image12_i(), this._Image13_i(), this.txt_overtime_i()],
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_jx_904_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_img_orange_reddot_png",
        e.x = 33,
        e.y = 1,
        e
    },
    n.txt_overtime_i = function() {
        var e = new eui.Label;
        return this.txt_overtime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已击败状态：9/5",
        e.textColor = 16769906,
        e.x = 64,
        e.y = 8,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_vs_png",
        e.x = 385,
        e.y = 78,
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_juxing_904_png",
        e.x = 255,
        e.y = 539,
        e
    },
    n.txtLeftTime_i = function() {
        var e = new eui.Label;
        return this.txtLeftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "剩余游戏次数：99",
        e.textAlign = "center",
        e.textColor = 16769906,
        e.visible = !0,
        e.width = 220,
        e.x = 449,
        e.y = 546,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "hc_panel1_btnfight_png",
        e.x = 490,
        e.y = 487,
        e
    },
    n.wait_i = function() {
        var e = new eui.Group;
        return this.wait = e,
        e.visible = !1,
        e.x = 400,
        e.y = 490,
        e.elementsContent = [this._Image16_i(), this._Label1_i(), this.txt_waitTime_i()],
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 39,
        e.source = "hc_panel3_jx_906_kb_3_png",
        e.width = 285,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "挑战等待时间：",
        e.textColor = 16769906,
        e.x = 32,
        e.y = 8,
        e
    },
    n.txt_waitTime_i = function() {
        var e = new eui.Label;
        return this.txt_waitTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "99:99",
        e.textColor = 16777215,
        e.x = 192,
        e.y = 8,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hc_panel1_btnadd_png",
        e.x = 694,
        e.y = 541,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "hc_mainpanel_yjtg_png",
        e.x = 1016,
        e.y = 499,
        e
    },
    n._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_title1_png",
        e.x = 412,
        e.y = 0,
        e
    },
    n._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_jx_904_kb_2_png",
        e.x = 255,
        e.y = 83,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "使用圣地卡修斯击败卡修斯所有形态即可通关。",
        e.textColor = 14906267,
        e.x = 366,
        e.y = 91,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.holyCassius.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnFight", "btnAdd", "btnOnekey", "bar_value", "btnBag", "btnCure", "txtProgress", "txt_leftTime", "panel2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.panel2_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "hc_panel2_jindu_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "hc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.panel2_i = function() {
        var e = new eui.Group;
        return this.panel2 = e,
        e.horizontalCenter = 4,
        e.width = 1120,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnFight_i(), this.btnAdd_i(), this.btnOnekey_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.bar_value_i(), this._Image8_i(), this.btnBag_i(), this.btnCure_i(), this._Label1_i(), this.txtProgress_i(), this.txt_leftTime_i(), this._Label2_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel2_jingling_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel2_xz_16_png",
        e.x = 811,
        e.y = 476,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel2_juxing_905_png",
        e.x = 848,
        e.y = 385,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_juxing_904_png",
        e.x = 254,
        e.y = 577,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "hc_panel1_btnfight_png",
        e.x = 489,
        e.y = 525,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hc_panel1_btnadd_png",
        e.x = 653,
        e.y = 579,
        e
    },
    i.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "hc_mainpanel_yjtg_png",
        e.x = 1015,
        e.y = 537,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel2_zzzq_png",
        e.x = 410,
        e.y = 39,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel2_jx_904_kb_2_png",
        e.x = 114,
        e.y = 121,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel2_di_png",
        e.x = 278,
        e.y = 496,
        e
    },
    i.bar_value_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_value = e,
        e.value = 0,
        e.width = 516,
        e.x = 356,
        e.y = 504,
        e.skinName = n,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel2_jhjd_png",
        e.x = 150,
        e.y = 491,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hc_panel2_jlbb_png",
        e.x = 5,
        e.y = 443,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hc_panel2_jlhf_png",
        e.x = 5,
        e.y = 533,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "                              谱尼的考验引出了潜藏在王•卡修斯内心深处的诅咒之力，\n挑战黑化的王•卡修斯，根据击败使用的回合数获得不同的净化进度，达到100%即可通关。",
        e.textColor = 14906267,
        e.x = 187,
        e.y = 128,
        e
    },
    i.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "100%",
        e.textColor = 16775806,
        e.x = 294,
        e.y = 500,
        e
    },
    i.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "剩余挑战次数：99",
        e.textColor = 16769906,
        e.x = 484,
        e.y = 584,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.lineSpacing = 4,
        e.size = 16,
        e.text = "击败回合数---净化进度\n<3回合---25%\n3~5回合---15%\n>5回合---5%",
        e.textColor = 16769906,
        e.x = 880,
        e.y = 395,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.holyCassius.Panel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_leftTime", "btnFight", "btnFast", "btnAdd", "btnOnekey", "btnBag", "btnCure", "txtInfo", "line", "info", "txt_overTime", "btnMountain", "hasUse", "panel3"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.panel3_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "hc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.panel3_i = function() {
        var e = new eui.Group;
        return this.panel3 = e,
        e.horizontalCenter = -1.5,
        e.width = 1110,
        e.y = 39,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_leftTime_i(), this.btnFight_i(), this.btnFast_i(), this.btnAdd_i(), this.btnOnekey_i(), this._Image3_i(), this._Image4_i(), this._Label1_i(), this.btnBag_i(), this.btnCure_i(), this.info_i(), this._Image7_i(), this._Label3_i(), this.txt_overTime_i(), this.btnMountain_i(), this.hasUse_i(), this._Image8_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel3_zu_20_png",
        e.x = 369,
        e.y = 112,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_juxing_904_png",
        e.x = 249,
        e.y = 538,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "剩余挑战次数：99",
        e.textColor = 16769906,
        e.x = 479,
        e.y = 545,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "hc_panel1_btnfight_png",
        e.x = 596,
        e.y = 486,
        e
    },
    n.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.source = "hc_panel3_btnfast_png",
        e.x = 373,
        e.y = 487,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hc_panel1_btnadd_png",
        e.x = 648,
        e.y = 540,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "hc_mainpanel_yjtg_png",
        e.x = 1010,
        e.y = 498,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel3_pczz_png",
        e.x = 404,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel3_jx_904_kb_2_png",
        e.x = 109,
        e.y = 82,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "卡修斯内心诅咒的真正来源竟是狄修，在不同条件下击败狄修6次即可破除诅咒。",
        e.textColor = 14906267,
        e.x = 222,
        e.y = 89,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hc_panel2_jlbb_png",
        e.x = 0,
        e.y = 404,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hc_panel2_jlhf_png",
        e.x = 0,
        e.y = 494,
        e
    },
    n.info_i = function() {
        var e = new eui.Group;
        return this.info = e,
        e.x = 320,
        e.y = 123,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this._Label2_i(), this.txtInfo_i(), this.line_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel3_jx_904_kb_3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel3_img_orange_reddot_kb_png",
        e.x = 9,
        e.y = 1,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "本次挑战条件：",
        e.textColor = 16769906,
        e.x = 36,
        e.y = 7,
        e
    },
    n.txtInfo_i = function() {
        var e = new eui.Label;
        return this.txtInfo = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "说明文字最多十五个字前端同学调用",
        e.textColor = 16769906,
        e.x = 160,
        e.y = 7,
        e
    },
    n.line_i = function() {
        var e = new eui.Image;
        return this.line = e,
        e.height = 1,
        e.source = "hc_panel3_xz_19_png",
        e.x = 160,
        e.y = 15,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel3_jx_906_kb_3_png",
        e.x = 414,
        e.y = 438,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "已击败状态：",
        e.textColor = 16769906,
        e.x = 458,
        e.y = 447,
        e
    },
    n.txt_overTime_i = function() {
        var e = new eui.Label;
        return this.txt_overTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "6/6",
        e.textColor = 16777215,
        e.x = 598,
        e.y = 446,
        e
    },
    n.btnMountain_i = function() {
        var e = new eui.Image;
        return this.btnMountain = e,
        e.source = "hc_panel3_btnsszy_png",
        e.x = 806,
        e.y = 268,
        e
    },
    n.hasUse_i = function() {
        var e = new eui.Image;
        return this.hasUse = e,
        e.source = "hc_panel3_yishixiao_png",
        e.x = 806,
        e.y = 268,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel3_jlzt_kb_png",
        e.x = 889,
        e.y = 173,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.holyCassius.Panel4Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_damage1", "txt_damage2", "txt_leftTime", "btnFight", "btnAdd", "btnOnekey", "panel4"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.panel4_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "hc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.panel4_i = function() {
        var e = new eui.Group;
        return this.panel4 = e,
        e.horizontalCenter = -9,
        e.width = 1120,
        e.y = 39,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.txt_damage1_i(), this._Image5_i(), this._Image6_i(), this.txt_damage2_i(), this._Image7_i(), this.txt_leftTime_i(), this.btnFight_i(), this.btnAdd_i(), this.btnOnekey_i(), this._Image8_i(), this._Image9_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel4_tuceng_50_png",
        e.x = 687,
        e.y = 67,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel4_tuceng_49_png",
        e.x = 0,
        e.y = 62,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel4_jx_906_kb_3_png",
        e.visible = !0,
        e.x = 139,
        e.y = 462,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel4_yljgjsh_png",
        e.x = 170,
        e.y = 470,
        e
    },
    n.txt_damage1_i = function() {
        var e = new eui.Label;
        return this.txt_damage1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "10000/10000",
        e.textColor = 16777215,
        e.x = 316,
        e.y = 469,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel4_jx_906_kb_3_png",
        e.x = 679,
        e.y = 462,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel4_yljgdsh_png",
        e.x = 710,
        e.y = 470,
        e
    },
    n.txt_damage2_i = function() {
        var e = new eui.Label;
        return this.txt_damage2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "10000/10000",
        e.textColor = 16777215,
        e.x = 856,
        e.y = 469,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_juxing_904_png",
        e.x = 268,
        e.y = 538,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "剩余挑战次数：99",
        e.textColor = 16769906,
        e.x = 498,
        e.y = 545,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "hc_panel4_btnfight_png",
        e.x = 503,
        e.y = 486,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hc_panel1_btnadd_png",
        e.x = 667,
        e.y = 540,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "hc_mainpanel_yjtg_png",
        e.x = 1029,
        e.y = 498,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel4_zjss_png",
        e.x = 423,
        e.y = 0,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel4_zu_21_png",
        e.x = 74,
        e.y = 82,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel5Skin.exml"] = window.holyCassius.Panel5Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnBag", "btnCure", "txt_need1", "btnKe", "btnExcchange1", "txt_need2", "btnWu", "btnExcchange3", "txt_need3", "btnExcchange2", "btnTe", "txt_itemNum", "btnAddItem", "btnFight2", "btnFight3", "btnFight1", "txt_leftTime", "btnAdd", "panel5"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.panel5_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "hc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.panel5_i = function() {
        var e = new eui.Group;
        return this.panel5 = e,
        e.horizontalCenter = -7.5,
        e.width = 1087,
        e.y = 39,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnBag_i(), this.btnCure_i(), this._Image3_i(), this._Label1_i(), this.txt_need1_i(), this._Image4_i(), this.btnKe_i(), this._Image5_i(), this.btnExcchange1_i(), this._Image6_i(), this._Label2_i(), this.txt_need2_i(), this._Image7_i(), this.btnWu_i(), this._Image8_i(), this.btnExcchange3_i(), this._Image9_i(), this._Label3_i(), this.txt_need3_i(), this._Image10_i(), this._Image11_i(), this.btnExcchange2_i(), this._Image12_i(), this.btnTe_i(), this._Label4_i(), this.txt_itemNum_i(), this.btnAddItem_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Label5_i(), this._Image18_i(), this._Label6_i(), this._Label7_i(), this._Image19_i(), this.btnFight2_i(), this.btnFight3_i(), this.btnFight1_i(), this._Image20_i(), this.txt_leftTime_i(), this._Label8_i(), this.btnAdd_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_tuceng_53_png",
        e.x = 49,
        e.y = 32,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_slfx_png",
        e.x = 406,
        e.y = 0,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hc_panel2_jlbb_png",
        e.x = 0,
        e.y = 404,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hc_panel2_jlhf_png",
        e.x = 0,
        e.y = 494,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_zu_22_png",
        e.x = 805,
        e.y = 94,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "消耗",
        e.textColor = 16769906,
        e.x = 955,
        e.y = 191,
        e
    },
    n.txt_need1_i = function() {
        var e = new eui.Label;
        return this.txt_need1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "x15",
        e.textColor = 16769906,
        e.x = 1008,
        e.y = 193,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_zu_23_png",
        e.visible = !0,
        e.x = 847,
        e.y = 144,
        e
    },
    n.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "hc_panel5_41182_png",
        e.x = 853,
        e.y = 151,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_1715922_png",
        e.x = 985,
        e.y = 187,
        e
    },
    n.btnExcchange1_i = function() {
        var e = new eui.Image;
        return this.btnExcchange1 = e,
        e.source = "hc_panel5_btnexcchange_png",
        e.x = 949,
        e.y = 151,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_zsky_png",
        e.x = 895,
        e.y = 110,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "消耗",
        e.textColor = 16769906,
        e.x = 955,
        e.y = 306,
        e
    },
    n.txt_need2_i = function() {
        var e = new eui.Label;
        return this.txt_need2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "x15",
        e.textColor = 16769906,
        e.x = 1008,
        e.y = 308,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_zu_23_png",
        e.x = 847,
        e.y = 259,
        e
    },
    n.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "hc_panel5_dwjn_png",
        e.x = 858,
        e.y = 268,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_1715922_png",
        e.x = 985,
        e.y = 302,
        e
    },
    n.btnExcchange3_i = function() {
        var e = new eui.Image;
        return this.btnExcchange3 = e,
        e.source = "hc_panel5_btnexcchange_png",
        e.x = 949,
        e.y = 266,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_diwujineng_png",
        e.x = 895,
        e.y = 225,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "消耗",
        e.textColor = 16769906,
        e.x = 955,
        e.y = 421,
        e
    },
    n.txt_need3_i = function() {
        var e = new eui.Label;
        return this.txt_need3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "x15",
        e.textColor = 16769906,
        e.x = 1008,
        e.y = 423,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_zu_23_png",
        e.x = 847,
        e.y = 374,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_1715922_png",
        e.x = 985,
        e.y = 417,
        e
    },
    n.btnExcchange2_i = function() {
        var e = new eui.Image;
        return this.btnExcchange2 = e,
        e.source = "hc_panel5_btnexcchange_png",
        e.x = 949,
        e.y = 381,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_zstx11_png",
        e.x = 895,
        e.y = 340,
        e
    },
    n.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "hc_panel5_zstx_png",
        e.x = 857,
        e.y = 387,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前拥有       ：",
        e.textColor = 16769906,
        e.visible = !0,
        e.x = 854,
        e.y = 463,
        e
    },
    n.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16769906,
        e.x = 969,
        e.y = 464,
        e
    },
    n.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "hc_panel1_btnadd_png",
        e.x = 1011,
        e.y = 459,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_1715922_png",
        e.x = 930,
        e.y = 461,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_jx_909_kb_png",
        e.x = 353,
        e.y = 471,
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_1715922_png",
        e.x = 467,
        e.y = 493,
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_jx_909_kb_png",
        e.x = 572,
        e.y = 471,
        e
    },
    n._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_1715922_png",
        e.x = 688,
        e.y = 493,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "可获得2~4个",
        e.textColor = 16769906,
        e.x = 379,
        e.y = 496,
        e
    },
    n._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_jx_909_kb_png",
        e.x = 131,
        e.y = 471,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "可获得1~2个",
        e.textColor = 16769906,
        e.x = 159,
        e.y = 497,
        e
    },
    n._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "可获得4~6个",
        e.textColor = 16769906,
        e.x = 599,
        e.y = 496,
        e
    },
    n._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel5_1715922_png",
        e.x = 244,
        e.y = 493,
        e
    },
    n.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "hc_panel5_btnfight2_png",
        e.x = 366,
        e.y = 451,
        e
    },
    n.btnFight3_i = function() {
        var e = new eui.Image;
        return this.btnFight3 = e,
        e.source = "hc_panel5_btnfight3_png",
        e.x = 587,
        e.y = 451,
        e
    },
    n.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "hc_panel5_btnfight1_png",
        e.x = 144,
        e.y = 451,
        e
    },
    n._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "hc_panel1_juxing_904_png",
        e.x = 130,
        e.y = 528,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "剩余挑战次数：99",
        e.textColor = 16769906,
        e.x = 360,
        e.y = 535,
        e
    },
    n._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 5513751,
        e.text = "VIP赛尔每日额外获得2次挑战次数",
        e.textColor = 16777215,
        e.x = 310,
        e.y = 560,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hc_panel1_btnadd_png",
        e.x = 530,
        e.y = 530,
        e
    },
    t
} (eui.Skin);