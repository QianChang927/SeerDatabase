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
holyGaia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.HolyGaiaConst.forever_level1_failTime, t.HolyGaiaConst.forever_level2_fightTime, t.HolyGaiaConst.forever_level3_buyState, t.HolyGaiaConst.forever_level3_state, t.HolyGaiaConst.forever_level_paperNumber, t.HolyGaiaConst.forever_level_taskNumer, t.HolyGaiaConst.forever_levels_state, t.HolyGaiaConst.forever_pass_state], [t.HolyGaiaConst.daily_level2_times, t.HolyGaiaConst.daily_level3_times, t.HolyGaiaConst.daily_level4_times]),
            i.init([{
                panelName: t.HolyGaiaConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: t.HolyGaiaConst.PANEL1
            },
            {
                panelName: t.HolyGaiaConst.PANEL2
            },
            {
                panelName: t.HolyGaiaConst.PANEL3
            },
            {
                panelName: t.HolyGaiaConst.PANEL4
            },
            {
                panelName: t.HolyGaiaConst.PANEL5
            }]),
            i
        }
        return __extends(i, e),
        i.prototype.reShow = function() {
            var t = this;
            this.service.updateValues().then(function() {
                t.destroyed || t.currentPanel && "holyGaia.panel4" != t.currentPanel.name && t.currentPanel.update && t.currentPanel.update()
            })
        },
        i
    } (BasicMultPanelModule);
    t.HolyGaia = e,
    __reflect(e.prototype, "holyGaia.HolyGaia")
} (holyGaia || (holyGaia = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
holyGaia; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAINPANEL = "holyGaia.HolyGaiaMainPanel",
        t.PANEL1 = "holyGaia.HolyGaiaPanel1",
        t.PANEL2 = "holyGaia.HolyGaiaPanel2",
        t.PANEL3 = "holyGaia.HolyGaiaPanel3",
        t.PANEL4 = "holyGaia.HolyGaiaPanel4",
        t.PANEL5 = "holyGaia.HolyGaiaPanel5",
        t.holyGaia_CMD = 43269,
        t.forever_levels_state = 6942,
        t.forever_pass_state = 6943,
        t.forever_level1_failTime = 6944,
        t.forever_level2_fightTime = 6945,
        t.forever_level3_state = 6946,
        t.forever_level3_buyState = 6947,
        t.forever_level_taskNumer = 6948,
        t.forever_level_paperNumber = 6949,
        t.daily_level2_times = 15471,
        t.daily_level3_times = 15472,
        t.daily_level4_times = 15473,
        t.exchange_level2 = 10675,
        t.exchange_level3 = 10676,
        t.exchange_level4 = 10677,
        t
    } ();
    t.HolyGaiaConst = e,
    __reflect(e.prototype, "holyGaia.HolyGaiaConst")
} (holyGaia || (holyGaia = {}));
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
holyGaia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BuypopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            var i = this;
            e.prototype.initialized.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                i.hide()
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                return PetManager.isDefaultPet(3481) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251676, 1,
                    function() {
                        SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [1, 2],
                        function() {
                            EventManager.dispatchEventWith("buyGaia_Ability"),
                            i.update()
                        })
                    })
                },
                i) : (Alarm.show("请将圣战盖亚放于首发！",
                function() {
                    ModuleManager.showModuleByID(10)
                }), void i.hide())
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var t = {
                    id: 31351
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3481, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnMark,
            function() {
                var t;
                CountermarkXMLInfo.isminMark(41074) ? (t = {},
                t.ins = 41074, tipsPop.TipsPop.openCounterMarkPop(t)) : (t = {},
                t.id = 41074, tipsPop.TipsPop.openItemPop(t))
            },
            this),
            this.update()
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([t.HolyGaiaConst.forever_levels_state],
            function(t) {
                var i = 1 == KTool.getBit(t[0], 2);
                DisplayUtil.setEnabled(e.btnBuy, !i, i)
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.HolyGaiaBuyPop = e,
    __reflect(e.prototype, "holyGaia.HolyGaiaBuyPop")
} (holyGaia || (holyGaia = {}));
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
    return new(i || (i = Promise))(function(a, o) {
        function r(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, s)
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
            if (a = 1, o && (r = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(o, i[1])).done) return r;
            switch (o = 0, r && (i = [0, r.value]), i[0]) {
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
                o = i[1],
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
            o = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, o, r, s, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
holyGaia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.canDown = !0,
            i.new_monster_level_id = 133,
            i.skinName = t.MainpanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(128, this, "hg_mainpanel_stms_png",
            function() {
                t.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230217版本系统功能", "圣战盖亚搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var e = PetFactorCollectionManager.checkPetIdIndexIsCollection(t.new_monster_level_id);
                t.btnCollect.source = e ? "hg_mainpanel_btncollected_png": "hg_mainpanel_btncollect_png"
            })
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btn1,
            function() {
                StatLogger.log("20230217版本系统功能", "圣战盖亚搬迁", "点击主界面-【力量试炼】"),
                e.service.openPanel(t.HolyGaiaConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                StatLogger.log("20230217版本系统功能", "圣战盖亚搬迁", "点击主界面-【勇气试炼】"),
                e.service.openPanel(t.HolyGaiaConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                StatLogger.log("20230217版本系统功能", "圣战盖亚搬迁", "点击主界面-【智慧试炼】"),
                e.service.openPanel(t.HolyGaiaConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btn4,
            function() {
                StatLogger.log("20230217版本系统功能", "圣战盖亚搬迁", "点击主界面-【最终试炼】"),
                e.service.openPanel(t.HolyGaiaConst.PANEL4)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3481,
                    type: "pet",
                    thisObj: e
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                StatLogger.log("20230217版本系统功能", "圣战盖亚搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251675, 1,
                    function() {
                        SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [1, 1],
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnJuexing,
            function() {
                StatLogger.log("20230217版本系统功能", "圣战盖亚搬迁", "点击主界面-【战灵觉醒】");
                var e = new t.HolyGaiaBuyPop;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this),
            EventManager.addEventListener("buyGaia_Ability",
            function() {
                e.service.updateValues().then(function() {
                    e.update()
                })
            },
            this)
        },
        i.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, t = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = t ? "hg_mainpanel_btncollected_png": "hg_mainpanel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, t)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return e.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.update = function() {
            var e = this.service.getValue(t.HolyGaiaConst.forever_pass_state),
            i = this.service.getValue(t.HolyGaiaConst.forever_levels_state),
            n = 1 == KTool.getBit(i, 1),
            a = e >= 4;
            this.btnJuexing.visible = a,
            this.btnOnekey.visible = !a,
            DisplayUtil.setEnabled(this.btn1, 1 > e && !n, e >= 1 || n),
            DisplayUtil.setEnabled(this.btn2, 1 == e && !n, 1 != e || n),
            DisplayUtil.setEnabled(this.btn3, 2 == e && !n, 2 != e || n),
            DisplayUtil.setEnabled(this.btn4, 3 == e && !n, 3 != e || n);
            for (var o = 1; 4 >= o; o++) this["pass" + o].visible = e >= o || n;
            for (var o = 1; 2 >= o; o++) this["hasGet" + o].visible = 1 == KTool.getBit(i, o)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.HolyGaiaMainPanel = e,
    __reflect(e.prototype, "holyGaia.HolyGaiaMainPanel")
} (holyGaia || (holyGaia = {}));
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
holyGaia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Panel1Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hg_mainpanel_title1_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFight,
            function() {
                e.isclickFight || (e.isclickFight = !0, SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [619, 0, 0, 0, 0, 0]))
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251677, 1,
                    function() {
                        SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [2, 1],
                        function() {
                            e.service.updateSomeValues([t.HolyGaiaConst.forever_level1_failTime, t.HolyGaiaConst.forever_pass_state]).then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnSkip,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251681, 1,
                    function() {
                        SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [3, 0],
                        function() {
                            e.service.updateSomeValues([t.HolyGaiaConst.forever_level1_failTime, t.HolyGaiaConst.forever_pass_state]).then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this)
        },
        i.prototype.update = function() {
            var e = this;
            this.isclickFight = !1;
            var i = this.service.getValue(t.HolyGaiaConst.forever_pass_state),
            n = i >= 1;
            if (n) {
                var a = "已完成<font color='#ff0000'>力量试炼</font>关卡";
                Alarm.show(a,
                function() {
                    e.service.openPanel(t.HolyGaiaConst.PANEL2)
                }),
                EventManager.removeAll(this)
            }
            var o = this.service.getValue(t.HolyGaiaConst.forever_level1_failTime);
            this.grp_time.visible = o > 0,
            this.btnFight.visible = 0 == o,
            this.service.registerClock(o + 60,
            function() {
                FightManager.isFighting || (e.grp_time.visible = !1, e.btnFight.visible = !0)
            },
            this, this.txt_waitTime)
        },
        i.prototype.destroy = function() {
            this.service.unregisterClock(this.txt_waitTime),
            EventManager.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.HolyGaiaPanel1 = e,
    __reflect(e.prototype, "holyGaia.HolyGaiaPanel1")
} (holyGaia || (holyGaia = {}));
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
holyGaia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.leftTime = 0,
            i.skinName = t.Panel2Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hg_mainpanel_title2_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBag,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251678, 1,
                    function() {
                        SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [2, 2],
                        function() {
                            e.service.updateSomeValues([t.HolyGaiaConst.daily_level2_times, t.HolyGaiaConst.forever_pass_state, t.HolyGaiaConst.forever_level2_fightTime]).then(function() {
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
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251683, 1,
                    function() {
                        KTool.doExchange(t.HolyGaiaConst.exchange_level2, 1,
                        function() {
                            e.service.updateSomeValues([t.HolyGaiaConst.daily_level2_times, t.HolyGaiaConst.forever_pass_state, t.HolyGaiaConst.forever_level2_fightTime]).then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                return e.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [8, 0],
                function() {
                    e.service.updateSomeValues([t.HolyGaiaConst.daily_level2_times, t.HolyGaiaConst.forever_pass_state, t.HolyGaiaConst.forever_level2_fightTime]).then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnYijian,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251682, 1,
                    function() {
                        SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [4, 0],
                        function() {
                            e.service.updateSomeValues([t.HolyGaiaConst.daily_level2_times, t.HolyGaiaConst.forever_pass_state, t.HolyGaiaConst.forever_level2_fightTime]).then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this)
        },
        i.prototype.update = function() {
            var e = this;
            this.leftTime = 5 - this.service.getValue(t.HolyGaiaConst.daily_level2_times);
            var i = this.service.getValue(t.HolyGaiaConst.forever_level2_fightTime);
            this.txt_leftTime.text = this.leftTime + "次",
            this.txt_hasDefeatTime.text = i + "/5";
            var n = this.service.getValue(t.HolyGaiaConst.forever_pass_state),
            a = n >= 2;
            if (a) {
                var o = "已完成<font color='#ff0000'>勇气试炼</font>关卡";
                Alarm.show(o,
                function() {
                    e.service.openPanel(t.HolyGaiaConst.PANEL3)
                }),
                EventManager.removeAll(this)
            }
            DisplayUtil.setEnabled(this.btnAdd, 5 != this.leftTime, 5 == this.leftTime)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.HolyGaiaPanel2 = e,
    __reflect(e.prototype, "holyGaia.HolyGaiaPanel2")
} (holyGaia || (holyGaia = {}));
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
holyGaia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.leftTime = 0,
            i.stateStr = ["傲慢", "自信", "嫉妒", "积极", "暴怒", "专注"],
            i.skinName = t.Panel3Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hg_mainpanel_title3_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBag,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251679, 1,
                    function() {
                        SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [2, 3],
                        function() {
                            e.service.updateValues().then(function() {
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
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251686, 1,
                    function() {
                        KTool.doExchange(t.HolyGaiaConst.exchange_level3, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["btnTiaozhan" + i],
                function() {
                    return e.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void FightManager.fightNoMapBoss(10962 + 2 * (e.curDayValue - 1) + i)
                },
                n),
                ImageButtonUtil.add(n["btnYijian" + i],
                function() {
                    var n = 1 == KTool.getBit(e.defeatState, 2 + 2 * (e.curDayValue - 1) + i);
                    return n ? void Alarm.show("您已经完成该关卡了！") : void PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(251685, 1,
                        function() {
                            SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [5, i],
                            function() {
                                e.service.updateValues().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    e)
                },
                n)
            },
            n = this, a = 1; 2 >= a; a++) i(a);
            ImageButtonUtil.add(this.btnTiqian,
            function() {
                e.pass2Boss ? e.skip() : Alert.show("今日开放的挑战尚未全部击败，若提前挑战则无法挑战今日boss，是否提前挑战？",
                function() {
                    e.skip()
                })
            },
            this)
        },
        i.prototype.skip = function() {
            var e = this;
            PayManager.doPayFunc(function() {
                KTool.buyProductByCallback(251684, 1,
                function() {
                    SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [5, 3],
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    })
                })
            },
            this)
        },
        i.prototype.update = function() {
            var e = this;
            this.defeatState = this.service.getValue(t.HolyGaiaConst.forever_levels_state);
            this.service.getValue(t.HolyGaiaConst.forever_level3_buyState);
            this.curDayValue = this.service.getValue(t.HolyGaiaConst.forever_level3_state),
            this.pass2Boss = 1 == KTool.getBit(this.defeatState, 3 + 2 * (this.curDayValue - 1)) && 1 == KTool.getBit(this.defeatState, 3 + 2 * (this.curDayValue - 1) + 1);
            var i = 1 == KTool.getBit(this.defeatState, 3 + 2 * (this.curDayValue - 1)),
            n = 1 == KTool.getBit(this.defeatState, 3 + 2 * (this.curDayValue - 1) + 1);
            this.img_pass1.visible = i,
            this.img_pass2.visible = n,
            console.log(this.curDayValue);
            for (var a = this.curDayValue,
            o = 1; 3 >= o; o++) a > 3 && (a -= 3),
            this["daytxt" + (2 * (o - 1) + 1)].text = this.stateStr[2 * (a - 1)],
            this["daytxt" + 2 * o].text = this.stateStr[2 * (a - 1) + 1],
            this["gou_" + (2 * (o - 1) + 1)].visible = KTool.getBit(this.defeatState, 3 + 2 * (a - 1)),
            this["gou_" + 2 * o].visible = KTool.getBit(this.defeatState, 3 + 2 * (a - 1) + 1),
            a++;
            this.txt_petName1.textFlow = [{
                text: this.stateStr[2 * (this.curDayValue - 1)],
                style: {
                    textColor: 16773189
                }
            },
            {
                text: "的X博士奥古斯",
                style: {
                    textColor: 16735045
                }
            }],
            this.txt_petName2.textFlow = [{
                text: this.stateStr[2 * (this.curDayValue - 1) + 1],
                style: {
                    textColor: 16773189
                }
            },
            {
                text: "的X博士奥古斯",
                style: {
                    textColor: 16735045
                }
            }],
            DisplayUtil.setEnabled(this.btnTiaozhan1, !i, i),
            DisplayUtil.setEnabled(this.btnTiaozhan2, !n, n),
            DisplayUtil.setEnabled(this.btnYijian1, !i, i),
            DisplayUtil.setEnabled(this.btnYijian2, !n, n),
            this.leftTime = 3 - this.service.getValue(t.HolyGaiaConst.daily_level3_times),
            this.txt_leftTime.text = this.leftTime + "次";
            var r = this.service.getValue(t.HolyGaiaConst.forever_pass_state),
            s = r >= 3;
            if (s) {
                var _ = "已完成<font color='#ff0000'>智慧试炼</font>关卡";
                Alarm.show(_,
                function() {
                    e.service.openPanel(t.HolyGaiaConst.PANEL4)
                }),
                EventManager.removeAll(this)
            }
            DisplayUtil.setEnabled(this.btnAdd, 3 != this.leftTime, 3 == this.leftTime)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.HolyGaiaPanel3 = e,
    __reflect(e.prototype, "holyGaia.HolyGaiaPanel3")
} (holyGaia || (holyGaia = {}));
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
holyGaia; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.leftTime = 0,
            i.markStr = ["起源战符", "胜利战符", "希望战符", "光明战符", "正义战符", "天威战符", "地脉战符", "英雄战符", "和谐战符", "羁绊战符"],
            i.taskStr = ["出战背包只有1只精灵并击败圣战盖亚", "5回合内击败圣战盖亚", "所有攻击伤害不超过300击败圣战盖亚", "所有攻击伤害不低于300击败圣战盖亚", "最后一击以致命一击击败圣战盖亚", "最后一击以特殊攻击击败圣战盖亚", "出战背包中没有相同的精灵并击败圣战盖亚", "自身处于能力提升状态下击败圣战盖亚", "战斗中最高攻击伤害达到1000并击败圣战盖亚", "满血状态下击败圣战盖亚"],
            i.hasPass4 = !1,
            i.passState = [],
            i.skinName = t.Panel4Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hg_mainpanel_title4_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.name = "holyGaia.panel4",
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBag,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251680, 1,
                    function() {
                        SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [2, 4],
                        function() {
                            e.service.updateValues().then(function() {
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
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251688, 1,
                    function() {
                        KTool.doExchange(t.HolyGaiaConst.exchange_level4, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss(10969)
            },
            this),
            ImageButtonUtil.add(this.btnRedraw,
            function() {
                KTool.buyProductByCallback(251687, 1,
                function() {
                    SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [6, 2],
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnDraw,
            function() {
                return e.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余抽取次数不足！") : void SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [6, 1],
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["btnJihuo_" + i],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(251689, 1,
                        function() {
                            SocketConnection.sendByQueue(t.HolyGaiaConst.holyGaia_CMD, [7, i],
                            function() {
                                e.service.updateValues().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    e)
                },
                n)
            },
            n = this, a = 1; 10 >= a; a++) i(a);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                FightManager.isWin ? e.service.updateValues().then(function() {
                    for (var i = e.service.getValue(t.HolyGaiaConst.forever_levels_state), n = [], a = 1; 10 >= a; a++) {
                        var o = 1 == KTool.getBit(i, 8 + a);
                        o != e.passState[a - 1] && n.push(a - 1)
                    }
                    if (n.length > 0) {
                        for (var r = "",
                        a = 0; a < n.length; a++) r += e.markStr[n[a]],
                        a != n.length - 1 && (r += ",");
                        var s = "挑战胜利！完成<font color='#ff0000'>" + n.length + "个</font>任务，激活<font color='#ff0000'>" + r + "</font>!";
                        Alarm.show(s,
                        function() {
                            e.passState = [],
                            e.update()
                        })
                    } else Alarm.show("很遗憾，未完成任务，无法激活战符,请按照任务要求完成战斗",
                    function() {
                        e.passState = [],
                        e.update()
                    })
                }) : (Alarm.show("很遗憾，未完成任务，无法激活战符,请按照任务要求完成战斗"), e.service.updateValues().then(function() {
                    e.passState = [],
                    e.update()
                }))
            },
            this)
        },
        i.prototype.update = function() {
            var e = this;
            this.leftTime = 3 - this.service.getValue(t.HolyGaiaConst.daily_level4_times);
            for (var i = this.service.getValue(t.HolyGaiaConst.forever_level_taskNumer), n = this.service.getValue(t.HolyGaiaConst.forever_level_paperNumber), a = this.service.getValue(t.HolyGaiaConst.forever_levels_state), o = 1; 3 >= o; o++) {
                var r = i >> 8 * (o - 1) & 255,
                s = n >> 8 * (o - 1) & 255;
                this["grp_hasTask" + o].visible = 0 != r,
                this["notask" + o].visible = 0 == r,
                0 != r && (this["txt_taskInfo" + o].text = this.taskStr[r - 1], this["markName" + o].text = this.markStr[s - 1])
            }
            this.txt_leftTime.text = this.leftTime + "次",
            this.btnDraw.visible = 0 == i,
            this.btnRedraw.visible = 0 != i,
            this.btnFight.visible = 0 != i;
            for (var o = 1; 10 >= o; o++) {
                var _ = 1 == KTool.getBit(a, 8 + o);
                this.passState.push(_),
                this["yijihuo_" + o].visible = _,
                DisplayUtil.setEnabled(this["btnJihuo_" + o], !_, _)
            }
            var u = this.service.getValue(t.HolyGaiaConst.forever_pass_state),
            h = u >= 4;
            if (h && !this.hasPass4) {
                this.hasPass4 = !0;
                var l = "已完成<font color='#ff0000'>最终试炼</font>关卡";
                Alarm.show(l,
                function() {
                    e.service.backToMainPanel()
                }),
                EventManager.removeAll(this)
            }
            DisplayUtil.setEnabled(this.btnAdd, 3 != this.leftTime, 3 == this.leftTime)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.HolyGaiaPanel4 = e,
    __reflect(e.prototype, "holyGaia.HolyGaiaPanel4")
} (holyGaia || (holyGaia = {})),
window.holyGaia = window.holyGaia || {};
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
generateEUI.paths["resource/eui_skins/BuypopSkin.exml"] = window.holyGaia.BuypopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnBuy", "btnClose", "btnWu", "btnTe", "btnMark", "buyPop"],
        this.height = 430,
        this.width = 815,
        this.elementsContent = [this.buyPop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.buyPop_i = function() {
        var t = new eui.Group;
        return this.buyPop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.btnBuy_i(), this._Image3_i(), this._Image4_i(), this._Label2_i(), this.btnClose_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.btnWu_i(), this.btnTe_i(), this.btnMark_i(), this._Label3_i(), this._Image8_i(), this._Image9_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "hg_buypop_bg_png",
        t.x = 62,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 565,
        t.y = 319,
        t.elementsContent = [this._Image2_i(), this._Label1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "common_btn_bg_yellow_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "购买觉醒",
        t.textColor = 10181146,
        t.x = 28,
        t.y = 13,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hg_buypop_juxing_8_png",
        t.x = 577,
        t.y = 291,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hg_buypop_icon_gold_png",
        t.x = 591,
        t.y = 293,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "298",
        t.textColor = 16773196,
        t.x = 619,
        t.y = 295,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "hg_buypop_btnclose_png",
        t.x = 773,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hg_buypop_dikuang_png",
        t.x = 500,
        t.y = 144,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hg_buypop_dikuang_png",
        t.x = 594,
        t.y = 144,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "hg_buypop_dikuang_png",
        t.x = 688,
        t.y = 144,
        t
    },
    i.btnWu_i = function() {
        var t = new eui.Image;
        return this.btnWu = t,
        t.source = "hg_buypop_diwujineng_png",
        t.x = 604,
        t.y = 155,
        t
    },
    i.btnTe_i = function() {
        var t = new eui.Image;
        return this.btnTe = t,
        t.source = "hg_buypop_zstx_png",
        t.x = 513,
        t.y = 162,
        t
    },
    i.btnMark_i = function() {
        var t = new eui.Image;
        return this.btnMark = t,
        t.source = "hg_buypop_keyin_png",
        t.x = 697,
        t.y = 153,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "一键获得强力三件套",
        t.textColor = 16776170,
        t.x = 537,
        t.y = 238,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "hg_buypop_title2_png",
        t.x = 551,
        t.y = 57,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "hg_buypop_3481_png",
        t.x = 0,
        t.y = 32,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.holyGaia.MainpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnInfo", "btnCollect", "btnOnekey", "btnJuexing", "btn1", "btn2", "btn3", "btn4", "hasGet1", "pass1", "pass2", "pass3", "pass4", "hasGet2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.btnInfo_i(), this.btnCollect_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "hg_mainpanel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.left = 60,
        t.source = "hg_mainpanel_btninfo_png",
        t.width = 53,
        t.y = 543,
        t
    },
    i.btnCollect_i = function() {
        var t = new eui.Image;
        return this.btnCollect = t,
        t.source = "hg_mainpanel_btncollect_png",
        t.x = 60,
        t.y = 480,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 139,
        t.y = 70,
        t.elementsContent = [this.btnOnekey_i(), this.btnJuexing_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btn4_i(), this.hasGet1_i(), this.pass1_i(), this.pass2_i(), this.pass3_i(), this.pass4_i(), this.hasGet2_i()],
        t
    },
    i.btnOnekey_i = function() {
        var t = new eui.Image;
        return this.btnOnekey = t,
        t.source = "hg_mainpanel_btnonekey_png",
        t.x = 579,
        t.y = 477,
        t
    },
    i.btnJuexing_i = function() {
        var t = new eui.Image;
        return this.btnJuexing = t,
        t.source = "hg_mainpanel_btnjuexing_png",
        t.visible = !0,
        t.x = 579,
        t.y = 477,
        t
    },
    i.btn1_i = function() {
        var t = new eui.Image;
        return this.btn1 = t,
        t.source = "hg_mainpanel_btn1_png",
        t.x = 364,
        t.y = 0,
        t
    },
    i.btn2_i = function() {
        var t = new eui.Image;
        return this.btn2 = t,
        t.source = "hg_mainpanel_btn2_png",
        t.x = 412,
        t.y = 109,
        t
    },
    i.btn3_i = function() {
        var t = new eui.Image;
        return this.btn3 = t,
        t.source = "hg_mainpanel_btn3_png",
        t.x = 412,
        t.y = 217,
        t
    },
    i.btn4_i = function() {
        var t = new eui.Image;
        return this.btn4 = t,
        t.source = "hg_mainpanel_btn4_png",
        t.x = 364,
        t.y = 326,
        t
    },
    i.hasGet1_i = function() {
        var t = new eui.Image;
        return this.hasGet1 = t,
        t.height = 56,
        t.source = "hg_mainpanel_tag_png",
        t.width = 180,
        t.x = 0,
        t.y = 277,
        t
    },
    i.pass1_i = function() {
        var t = new eui.Image;
        return this.pass1 = t,
        t.height = 41,
        t.source = "hg_mainpanel_yiwancheng_png",
        t.width = 199,
        t.x = 420,
        t.y = 20,
        t
    },
    i.pass2_i = function() {
        var t = new eui.Image;
        return this.pass2 = t,
        t.height = 41,
        t.source = "hg_mainpanel_yiwancheng_png",
        t.width = 199,
        t.x = 476,
        t.y = 129,
        t
    },
    i.pass3_i = function() {
        var t = new eui.Image;
        return this.pass3 = t,
        t.height = 41,
        t.source = "hg_mainpanel_yiwancheng_png",
        t.width = 199,
        t.x = 476,
        t.y = 237,
        t
    },
    i.pass4_i = function() {
        var t = new eui.Image;
        return this.pass4 = t,
        t.height = 41,
        t.source = "hg_mainpanel_yiwancheng_png",
        t.width = 199,
        t.x = 420,
        t.y = 346,
        t
    },
    i.hasGet2_i = function() {
        var t = new eui.Image;
        return this.hasGet2 = t,
        t.height = 33,
        t.source = "hg_mainpanel_yihuode_png",
        t.width = 159,
        t.x = 590,
        t.y = 494,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.holyGaia.Panel1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnOnekey", "btnFight", "btnSkip", "txt_waitTime", "grp_time"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "hg_panel1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -1,
        t.width = 1100,
        t.y = 20,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnOnekey_i(), this.btnFight_i(), this.grp_time_i(), this._Label2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel1_title_png",
        t.x = 470,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel2_tipsbg_png",
        t.x = 123,
        t.y = 49,
        t
    },
    i.btnOnekey_i = function() {
        var t = new eui.Image;
        return this.btnOnekey = t,
        t.source = "hg_panel2_btnonekey_png",
        t.x = 990,
        t.y = 517,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "hg_panel2_btnfight_png",
        t.x = 436,
        t.y = 523,
        t
    },
    i.grp_time_i = function() {
        var t = new eui.Group;
        return this.grp_time = t,
        t.visible = !0,
        t.x = 348,
        t.y = 536,
        t.elementsContent = [this._Image3_i(), this.btnSkip_i(), this._Label1_i(), this.txt_waitTime_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel2_timebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnSkip_i = function() {
        var t = new eui.Image;
        return this.btnSkip = t,
        t.source = "hg_panel2_btnskip_png",
        t.x = 214,
        t.y = 3,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "挑战等待时间：",
        t.textColor = 16767957,
        t.x = 58,
        t.y = 6,
        t
    },
    i.txt_waitTime_i = function() {
        var t = new eui.Label;
        return this.txt_waitTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "24:24",
        t.textColor = 16773005,
        t.x = 97,
        t.y = 31,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "使用王·盖亚击败斗天武神瑞尔斯即可通过力量训练",
        t.textColor = 16283490,
        t.x = 321,
        t.y = 53,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.holyGaia.Panel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnOnekey", "btnBag", "btnCure", "btnTiaozhan", "btnYijian", "btnAdd", "txt_leftTime", "txt_hasDefeatTime", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "hg_panel2_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.horizontalCenter = -11.5,
        t.width = 1110,
        t.y = 20,
        t.elementsContent = [this._Image1_i(), this.btnOnekey_i(), this.btnBag_i(), this.btnCure_i(), this._Image2_i(), this._Image3_i(), this.btnTiaozhan_i(), this.btnYijian_i(), this._Image4_i(), this.btnAdd_i(), this._Image5_i(), this._Image6_i(), this._Label1_i(), this._Label2_i(), this.txt_leftTime_i(), this.txt_hasDefeatTime_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel2_490_png",
        t.x = 316,
        t.y = 41,
        t
    },
    i.btnOnekey_i = function() {
        var t = new eui.Image;
        return this.btnOnekey = t,
        t.source = "hg_panel2_btnonekey_png",
        t.x = 990,
        t.y = 517,
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "hg_panel2_jlbb_png",
        t.x = 0,
        t.y = 423,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "hg_panel2_jlhf_png",
        t.x = 0,
        t.y = 513,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel2_tipsbg_png",
        t.x = 123,
        t.y = 49,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel2_title_png",
        t.x = 469,
        t.y = 0,
        t
    },
    i.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.source = "hg_panel2_btntiaozhan_png",
        t.x = 554,
        t.y = 507,
        t
    },
    i.btnYijian_i = function() {
        var t = new eui.Image;
        return this.btnYijian = t,
        t.source = "hg_panel2_btnyijian_png",
        t.x = 402,
        t.y = 507,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel2_txtbg_png",
        t.x = 425,
        t.y = 556,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "hg_panel2_btnadd_png",
        t.x = 621,
        t.y = 562,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel2_cishubg_png",
        t.x = 612,
        t.y = 154,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel2_yjtcs_png",
        t.x = 634,
        t.y = 199,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "击退劳克蒙德召唤出的随机试炼精灵五次即可通过勇气试炼！",
        t.textColor = 16283490,
        t.x = 282,
        t.y = 53,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "剩余挑战次数：",
        t.textColor = 16767958,
        t.x = 451,
        t.y = 567,
        t
    },
    i.txt_leftTime_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "5次",
        t.textColor = 16773260,
        t.x = 585,
        t.y = 567,
        t
    },
    i.txt_hasDefeatTime_i = function() {
        var t = new eui.Label;
        return this.txt_hasDefeatTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "3/5",
        t.textColor = 16772933,
        t.x = 668,
        t.y = 232,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.holyGaia.Panel3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "daytxt2", "gou_2", "daytxt1", "gou_1", "day1", "daytxt4", "gou_4", "daytxt3", "gou_3", "day2", "daytxt6", "gou_6", "daytxt5", "gou_5", "day3", "btnTiqian", "btnBag", "btnCure", "tipsbg", "btnOnekey", "txt_petName1", "btnTiaozhan1", "btnYijian1", "pet1", "txt_petName2", "btnTiaozhan2", "btnYijian2", "pet2", "btnAdd", "img_pass1", "img_pass2", "txt_leftTime"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "hg_panel2_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 4,
        t.width = 1110,
        t.y = 19,
        t.elementsContent = [this._Group1_i(), this.btnBag_i(), this.btnCure_i(), this.tipsbg_i(), this.btnOnekey_i(), this._Image14_i(), this.pet1_i(), this.pet2_i(), this.btnAdd_i(), this.img_pass1_i(), this.img_pass2_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this.txt_leftTime_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 833,
        t.y = 110,
        t.elementsContent = [this._Image1_i(), this.day1_i(), this.day2_i(), this.day3_i(), this._Label1_i(), this.btnTiqian_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 403,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "hg_panel3_kuang_png",
        t.width = 246,
        t.x = 5,
        t.y = 0,
        t
    },
    i.day1_i = function() {
        var t = new eui.Group;
        return this.day1 = t,
        t.x = 0,
        t.y = 39,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.daytxt2_i(), this._Image4_i(), this.gou_2_i(), this.daytxt1_i(), this._Image5_i(), this.gou_1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_tiao_png",
        t.visible = !0,
        t.x = 0,
        t.y = 18,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_jrxt_png",
        t.x = 6,
        t.y = 0,
        t
    },
    i.daytxt2_i = function() {
        var t = new eui.Label;
        return this.daytxt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "自信",
        t.textColor = 16772933,
        t.x = 178,
        t.y = 48,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_goubg_png",
        t.x = 146,
        t.y = 46,
        t
    },
    i.gou_2_i = function() {
        var t = new eui.Image;
        return this.gou_2 = t,
        t.source = "hg_panel3_gou_png",
        t.x = 150,
        t.y = 52,
        t
    },
    i.daytxt1_i = function() {
        var t = new eui.Label;
        return this.daytxt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "傲慢",
        t.textColor = 16772933,
        t.x = 68,
        t.y = 49,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_goubg_png",
        t.x = 36,
        t.y = 46,
        t
    },
    i.gou_1_i = function() {
        var t = new eui.Image;
        return this.gou_1 = t,
        t.source = "hg_panel3_gou_png",
        t.x = 40,
        t.y = 52,
        t
    },
    i.day2_i = function() {
        var t = new eui.Group;
        return this.day2 = t,
        t.x = 0,
        t.y = 139,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this.daytxt4_i(), this._Image8_i(), this.gou_4_i(), this.daytxt3_i(), this._Image9_i(), this.gou_3_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_tiao_png",
        t.x = 0,
        t.y = 19,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_mrxt_png",
        t.x = 6,
        t.y = 0,
        t
    },
    i.daytxt4_i = function() {
        var t = new eui.Label;
        return this.daytxt4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "积极",
        t.textColor = 16772933,
        t.x = 177,
        t.y = 49,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_goubg_png",
        t.x = 146,
        t.y = 46,
        t
    },
    i.gou_4_i = function() {
        var t = new eui.Image;
        return this.gou_4 = t,
        t.source = "hg_panel3_gou_png",
        t.x = 150,
        t.y = 52,
        t
    },
    i.daytxt3_i = function() {
        var t = new eui.Label;
        return this.daytxt3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "嫉妒",
        t.textColor = 16772933,
        t.x = 68,
        t.y = 48,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_goubg_png",
        t.x = 36,
        t.y = 46,
        t
    },
    i.gou_3_i = function() {
        var t = new eui.Image;
        return this.gou_3 = t,
        t.source = "hg_panel3_gou_png",
        t.x = 40,
        t.y = 52,
        t
    },
    i.day3_i = function() {
        var t = new eui.Group;
        return this.day3 = t,
        t.x = 0,
        t.y = 241,
        t.elementsContent = [this._Image10_i(), this._Image11_i(), this.daytxt6_i(), this._Image12_i(), this.gou_6_i(), this.daytxt5_i(), this._Image13_i(), this.gou_5_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_tiao_png",
        t.x = 0,
        t.y = 19,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_hrxt_png",
        t.x = 6,
        t.y = 0,
        t
    },
    i.daytxt6_i = function() {
        var t = new eui.Label;
        return this.daytxt6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "专注",
        t.textColor = 16772933,
        t.x = 178,
        t.y = 49,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_goubg_png",
        t.x = 146,
        t.y = 46,
        t
    },
    i.gou_6_i = function() {
        var t = new eui.Image;
        return this.gou_6 = t,
        t.source = "hg_panel3_gou_png",
        t.x = 150,
        t.y = 52,
        t
    },
    i.daytxt5_i = function() {
        var t = new eui.Label;
        return this.daytxt5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "暴怒",
        t.textColor = 16772933,
        t.x = 69,
        t.y = 48,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_goubg_png",
        t.x = 36,
        t.y = 46,
        t
    },
    i.gou_5_i = function() {
        var t = new eui.Image;
        return this.gou_5 = t,
        t.source = "hg_panel3_gou_png",
        t.x = 40,
        t.y = 52,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "已击败的形态",
        t.textColor = 16283491,
        t.x = 73,
        t.y = 6,
        t
    },
    i.btnTiqian_i = function() {
        var t = new eui.Image;
        return this.btnTiqian = t,
        t.source = "hg_panel3_btntiqian_png",
        t.x = 62,
        t.y = 349,
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "hg_panel2_jlbb_png",
        t.x = 0,
        t.y = 424,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "hg_panel2_jlhf_png",
        t.x = 0,
        t.y = 514,
        t
    },
    i.tipsbg_i = function() {
        var t = new eui.Image;
        return this.tipsbg = t,
        t.source = "hg_panel2_tipsbg_png",
        t.x = 123,
        t.y = 50,
        t
    },
    i.btnOnekey_i = function() {
        var t = new eui.Image;
        return this.btnOnekey = t,
        t.source = "hg_panel2_btnonekey_png",
        t.x = 990,
        t.y = 518,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_title_png",
        t.x = 469,
        t.y = 0,
        t
    },
    i.pet1_i = function() {
        var t = new eui.Group;
        return this.pet1 = t,
        t.x = 125,
        t.y = 54,
        t.elementsContent = [this._Image15_i(), this.txt_petName1_i(), this.btnTiaozhan1_i(), this.btnYijian1_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_petbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_petName1_i = function() {
        var t = new eui.Label;
        return this.txt_petName1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "啥啥的叉叉博士奥古斯",
        t.textAlign = "center",
        t.textColor = 16772933,
        t.width = 220,
        t.x = 68,
        t.y = 63,
        t
    },
    i.btnTiaozhan1_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan1 = t,
        t.source = "hg_panel2_btntiaozhan_png",
        t.x = 185,
        t.y = 414,
        t
    },
    i.btnYijian1_i = function() {
        var t = new eui.Image;
        return this.btnYijian1 = t,
        t.source = "hg_panel3_btnyijian_png",
        t.x = 33,
        t.y = 414,
        t
    },
    i.pet2_i = function() {
        var t = new eui.Group;
        return this.pet2 = t,
        t.x = 469,
        t.y = 54,
        t.elementsContent = [this._Image16_i(), this.txt_petName2_i(), this.btnTiaozhan2_i(), this.btnYijian2_i()],
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel3_petbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_petName2_i = function() {
        var t = new eui.Label;
        return this.txt_petName2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "啥啥的叉叉博士奥古斯",
        t.textAlign = "center",
        t.textColor = 16772933,
        t.width = 220,
        t.x = 68,
        t.y = 63,
        t
    },
    i.btnTiaozhan2_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan2 = t,
        t.source = "hg_panel2_btntiaozhan_png",
        t.x = 185,
        t.y = 414,
        t
    },
    i.btnYijian2_i = function() {
        var t = new eui.Image;
        return this.btnYijian2 = t,
        t.source = "hg_panel3_btnyijian_png",
        t.x = 33,
        t.y = 414,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "hg_panel2_btnadd_png",
        t.x = 621,
        t.y = 563,
        t
    },
    i.img_pass1_i = function() {
        var t = new eui.Image;
        return this.img_pass1 = t,
        t.height = 36,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "hg_panel3_yijibai_png",
        t.width = 295,
        t.x = 149.99999999999997,
        t.y = 284.99999999999994,
        t
    },
    i.img_pass2_i = function() {
        var t = new eui.Image;
        return this.img_pass2 = t,
        t.height = 36,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "hg_panel3_yijibai_png",
        t.width = 295,
        t.x = 485.99999999999994,
        t.y = 284.99999999999994,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 6367260,
        t.text = "注意：每个形态的奥古斯特将拥有不同的能力，请小赛尔自行探索",
        t.textColor = 16313442,
        t.x = 317,
        t.y = 77,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "击败所有不同形态的X博士奥古斯特即可通过智慧试炼",
        t.textColor = 16283490,
        t.x = 314,
        t.y = 54,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "剩余挑战次数：",
        t.textColor = 16767958,
        t.x = 451,
        t.y = 568,
        t
    },
    i.txt_leftTime_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "5次",
        t.textColor = 16773260,
        t.x = 585,
        t.y = 568,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.holyGaia.Panel4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnDraw", "btnFight", "btnRedraw", "txt_leftTime", "btnAdd", "btnOnekey", "btnJihuo_1", "yijihuo_1", "mark1", "btnJihuo_6", "yijihuo_6", "mark6", "btnJihuo_5", "yijihuo_5", "mark5", "btnJihuo_4", "yijihuo_4", "mark4", "btnJihuo_3", "yijihuo_3", "mark3", "btnJihuo_8", "yijihuo_8", "mark8", "btnJihuo_7", "yijihuo_7", "mark7", "btnJihuo_9", "yijihuo_9", "mark9", "btnJihuo_10", "yijihuo_10", "mark10", "btnJihuo_2", "yijihuo_2", "mark2", "txt_taskInfo1", "markName1", "grp_hasTask1", "notask1", "task1", "txt_taskInfo2", "markName2", "grp_hasTask2", "notask2", "task2", "txt_taskInfo3", "markName3", "grp_hasTask3", "notask3", "task3", "task", "btnBag", "btnCure"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "hg_panel4_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -8.5,
        t.y = 20,
        t.elementsContent = [this.btnDraw_i(), this.btnFight_i(), this.btnRedraw_i(), this._Label1_i(), this.txt_leftTime_i(), this.btnAdd_i(), this._Image1_i(), this._Label2_i(), this._Label3_i(), this._Image2_i(), this.btnOnekey_i(), this.mark1_i(), this.mark6_i(), this.mark5_i(), this.mark4_i(), this.mark3_i(), this.mark8_i(), this.mark7_i(), this.mark9_i(), this.mark10_i(), this.mark2_i(), this.task_i(), this.btnBag_i(), this.btnCure_i()],
        t
    },
    i.btnDraw_i = function() {
        var t = new eui.Image;
        return this.btnDraw = t,
        t.source = "hg_panel4_btndraw_png",
        t.x = 484,
        t.y = 521,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "hg_panel4_btnfight_png",
        t.x = 560,
        t.y = 521,
        t
    },
    i.btnRedraw_i = function() {
        var t = new eui.Image;
        return this.btnRedraw = t,
        t.source = "hg_panel4_btnredraw_png",
        t.x = 408,
        t.y = 521,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "剩余抽取次数：",
        t.textColor = 16767958,
        t.x = 459,
        t.y = 577,
        t
    },
    i.txt_leftTime_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "5次",
        t.textColor = 16773260,
        t.x = 593,
        t.y = 577,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "hg_panel2_btnadd_png",
        t.x = 641,
        t.y = 572,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel2_tipsbg_png",
        t.x = 73,
        t.y = 49,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "你已兼具力量、勇气、智慧三大本源，只需同时激活十个战符即可通过最终试炼",
        t.textColor = 16283490,
        t.x = 202,
        t.y = 53,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "注意：重复激活战符时，战符将失去激活状态！",
        t.textColor = 16313442,
        t.x = 389,
        t.y = 79,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_title_png",
        t.x = 468,
        t.y = 0,
        t
    },
    i.btnOnekey_i = function() {
        var t = new eui.Image;
        return this.btnOnekey = t,
        t.source = "hg_panel2_btnonekey_png",
        t.x = 990,
        t.y = 517,
        t
    },
    i.mark1_i = function() {
        var t = new eui.Group;
        return this.mark1 = t,
        t.x = 20,
        t.y = 127,
        t.elementsContent = [this._Image3_i(), this.btnJihuo_1_i(), this.yijihuo_1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark10_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_1_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_1 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.visible = !0,
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_1_i = function() {
        var t = new eui.Image;
        return this.yijihuo_1 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 4,
        t.y = 65,
        t
    },
    i.mark6_i = function() {
        var t = new eui.Group;
        return this.mark6 = t,
        t.x = 150,
        t.y = 127,
        t.elementsContent = [this._Image4_i(), this.btnJihuo_6_i(), this.yijihuo_6_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark9_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_6_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_6 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_6_i = function() {
        var t = new eui.Image;
        return this.yijihuo_6 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 4,
        t.y = 65,
        t
    },
    i.mark5_i = function() {
        var t = new eui.Group;
        return this.mark5 = t,
        t.x = 150,
        t.y = 273,
        t.elementsContent = [this._Image5_i(), this.btnJihuo_5_i(), this.yijihuo_5_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark8_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_5_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_5 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_5_i = function() {
        var t = new eui.Image;
        return this.yijihuo_5 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 4,
        t.y = 66,
        t
    },
    i.mark4_i = function() {
        var t = new eui.Group;
        return this.mark4 = t,
        t.x = 20,
        t.y = 273,
        t.elementsContent = [this._Image6_i(), this.btnJihuo_4_i(), this.yijihuo_4_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark7_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_4_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_4 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_4_i = function() {
        var t = new eui.Image;
        return this.yijihuo_4 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 4,
        t.y = 66,
        t
    },
    i.mark3_i = function() {
        var t = new eui.Group;
        return this.mark3 = t,
        t.x = 280,
        t.y = 203,
        t.elementsContent = [this._Image7_i(), this.btnJihuo_3_i(), this.yijihuo_3_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark6_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_3_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_3 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_3_i = function() {
        var t = new eui.Image;
        return this.yijihuo_3 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 4,
        t.y = 66,
        t
    },
    i.mark8_i = function() {
        var t = new eui.Group;
        return this.mark8 = t,
        t.x = 980,
        t.y = 127,
        t.elementsContent = [this._Image8_i(), this.btnJihuo_8_i(), this.yijihuo_8_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_8_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_8 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_8_i = function() {
        var t = new eui.Image;
        return this.yijihuo_8 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 4,
        t.y = 66,
        t
    },
    i.mark7_i = function() {
        var t = new eui.Group;
        return this.mark7 = t,
        t.x = 850,
        t.y = 128,
        t.elementsContent = [this._Image9_i(), this.btnJihuo_7_i(), this.yijihuo_7_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_7_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_7 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_7_i = function() {
        var t = new eui.Image;
        return this.yijihuo_7 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 4,
        t.y = 65,
        t
    },
    i.mark9_i = function() {
        var t = new eui.Group;
        return this.mark9 = t,
        t.x = 850,
        t.y = 273,
        t.elementsContent = [this._Image10_i(), this.btnJihuo_9_i(), this.yijihuo_9_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_9_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_9 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_9_i = function() {
        var t = new eui.Image;
        return this.yijihuo_9 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 4,
        t.y = 66,
        t
    },
    i.mark10_i = function() {
        var t = new eui.Group;
        return this.mark10 = t,
        t.x = 980,
        t.y = 273,
        t.elementsContent = [this._Image11_i(), this.btnJihuo_10_i(), this.yijihuo_10_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_10_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_10 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_10_i = function() {
        var t = new eui.Image;
        return this.yijihuo_10 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 3,
        t.y = 66,
        t
    },
    i.mark2_i = function() {
        var t = new eui.Group;
        return this.mark2 = t,
        t.x = 720,
        t.y = 203,
        t.elementsContent = [this._Image12_i(), this.btnJihuo_2_i(), this.yijihuo_2_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_mark1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJihuo_2_i = function() {
        var t = new eui.Image;
        return this.btnJihuo_2 = t,
        t.source = "hg_panel4_btnjihuo_png",
        t.x = 10,
        t.y = 72,
        t
    },
    i.yijihuo_2_i = function() {
        var t = new eui.Image;
        return this.yijihuo_2 = t,
        t.source = "hg_panel4_yijihuo_png",
        t.x = 4,
        t.y = 66,
        t
    },
    i.task_i = function() {
        var t = new eui.Group;
        return this.task = t,
        t.x = 74,
        t.y = 403,
        t.elementsContent = [this._Image13_i(), this._Image14_i(), this._Image15_i(), this.task1_i(), this.task2_i(), this.task3_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_taskbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_line_png",
        t.x = 339,
        t.y = 2,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_line_png",
        t.x = 614,
        t.y = 2,
        t
    },
    i.task1_i = function() {
        var t = new eui.Group;
        return this.task1 = t,
        t.x = 73,
        t.y = 11,
        t.elementsContent = [this.grp_hasTask1_i(), this.notask1_i(), this._Label5_i(), this._Image16_i()],
        t
    },
    i.grp_hasTask1_i = function() {
        var t = new eui.Group;
        return this.grp_hasTask1 = t,
        t.x = 20,
        t.y = 25,
        t.elementsContent = [this.txt_taskInfo1_i(), this._Label4_i(), this.markName1_i()],
        t
    },
    i.txt_taskInfo1_i = function() {
        var t = new eui.Label;
        return this.txt_taskInfo1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "任务文本最多二十个字\n任务文本最多二十个字",
        t.textColor = 16767958,
        t.width = 180,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "完成任务激活战符：",
        t.textColor = 16283491,
        t.x = 0,
        t.y = 48,
        t
    },
    i.markName1_i = function() {
        var t = new eui.Label;
        return this.markName1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "胜利战符",
        t.textColor = 16763904,
        t.x = 141,
        t.y = 48,
        t
    },
    i.notask1_i = function() {
        var t = new eui.Label;
        return this.notask1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "请抽取任务",
        t.textColor = 16767957,
        t.visible = !0,
        t.x = 95,
        t.y = 40,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "任务1：",
        t.textColor = 16283490,
        t.x = 21,
        t.y = 1,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_img_yellow_reddot_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.task2_i = function() {
        var t = new eui.Group;
        return this.task2 = t,
        t.x = 353,
        t.y = 11,
        t.elementsContent = [this.grp_hasTask2_i(), this.notask2_i(), this._Label7_i(), this._Image17_i()],
        t
    },
    i.grp_hasTask2_i = function() {
        var t = new eui.Group;
        return this.grp_hasTask2 = t,
        t.x = 20,
        t.y = 25,
        t.elementsContent = [this.txt_taskInfo2_i(), this._Label6_i(), this.markName2_i()],
        t
    },
    i.txt_taskInfo2_i = function() {
        var t = new eui.Label;
        return this.txt_taskInfo2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "任务文本最多二十个字\n任务文本最多二十个字",
        t.textColor = 16767958,
        t.width = 180,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "完成任务激活战符：",
        t.textColor = 16283491,
        t.x = 0,
        t.y = 48,
        t
    },
    i.markName2_i = function() {
        var t = new eui.Label;
        return this.markName2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "胜利战符",
        t.textColor = 16763904,
        t.x = 141,
        t.y = 48,
        t
    },
    i.notask2_i = function() {
        var t = new eui.Label;
        return this.notask2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "请抽取任务",
        t.textColor = 16767957,
        t.visible = !1,
        t.x = 93,
        t.y = 40,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "任务2：",
        t.textColor = 16283490,
        t.x = 21,
        t.y = 1,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_img_yellow_reddot_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.task3_i = function() {
        var t = new eui.Group;
        return this.task3 = t,
        t.x = 633,
        t.y = 11,
        t.elementsContent = [this.grp_hasTask3_i(), this.notask3_i(), this._Label9_i(), this._Image18_i()],
        t
    },
    i.grp_hasTask3_i = function() {
        var t = new eui.Group;
        return this.grp_hasTask3 = t,
        t.x = 20,
        t.y = 25,
        t.elementsContent = [this.txt_taskInfo3_i(), this._Label8_i(), this.markName3_i()],
        t
    },
    i.txt_taskInfo3_i = function() {
        var t = new eui.Label;
        return this.txt_taskInfo3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "任务文本最多二十个字\n任务文本最多二十个字",
        t.textColor = 16767958,
        t.width = 180,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "完成任务激活战符：",
        t.textColor = 16283491,
        t.x = 0,
        t.y = 48,
        t
    },
    i.markName3_i = function() {
        var t = new eui.Label;
        return this.markName3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "胜利战符",
        t.textColor = 16763904,
        t.x = 141,
        t.y = 48,
        t
    },
    i.notask3_i = function() {
        var t = new eui.Label;
        return this.notask3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "请抽取任务",
        t.textColor = 16767957,
        t.x = 90,
        t.y = 40,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "任务3：",
        t.textColor = 16283490,
        t.x = 21,
        t.y = 1,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "hg_panel4_img_yellow_reddot_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "hg_panel2_jlbb_png",
        t.x = 0,
        t.y = 423,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "hg_panel2_jlhf_png",
        t.x = 0,
        t.y = 513,
        t
    },
    e
} (eui.Skin);