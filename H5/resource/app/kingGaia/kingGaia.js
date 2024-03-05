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
kingGaia; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.service.setValues([e.KingGaiaConst.forever_KE, e.KingGaiaConst.forever_TAO, e.KingGaiaConst.forever_TE, e.KingGaiaConst.forever_WU, e.KingGaiaConst.forever_pet_state], [e.KingGaiaConst.daily_KE_times, e.KingGaiaConst.daily_TAO_times, e.KingGaiaConst.daily_TE_times, e.KingGaiaConst.daily_WU_times, e.KingGaiaConst.daily_trial_time, e.KingGaiaConst.daily_trial_point, e.KingGaiaConst.daily_box_state, e.KingGaiaConst.daily_boss_state], [e.KingGaiaConst.bitbuf_Tao, e.KingGaiaConst.bitbuf_hasOneKey]),
            i.init([{
                panelName: e.KingGaiaConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.KingGaiaConst.PANEL1
            },
            {
                panelName: e.KingGaiaConst.PANEL2
            }]),
            i
        }
        return __extends(i, t),
        i.prototype.reShow = function() {
            var e = this;
            this.service.updateValues().then(function() {
                e.destroyed || e.currentPanel && "KingGaia.Panel2Skin" != e.currentPanel.name && e.currentPanel.update && e.currentPanel.update()
            })
        },
        i
    } (BasicMultPanelModule);
    e.KingGaia = t,
    __reflect(t.prototype, "kingGaia.KingGaia")
} (kingGaia || (kingGaia = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
kingGaia; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "kingGaia.KingGaiaMainpanel",
        e.PANEL1 = "kingGaia.KingGaiaPanel1",
        e.PANEL2 = "kingGaia.KingGaiaPanel2",
        e.curLevel = 0,
        e.kingGaia_CMD = 45690,
        e.forever_pet_state = 102223,
        e.forever_KE = 102243,
        e.forever_TE = 102244,
        e.forever_WU = 102245,
        e.forever_TAO = 102246,
        e.forever1 = 102225,
        e.forever2 = 102226,
        e.forever3 = 102228,
        e.forever4 = 102227,
        e.forever5 = 102225,
        e.forever6 = 102225,
        e.forever7 = 102225,
        e.forever8 = 102225,
        e.forever9 = 102225,
        e.forever10 = 102225,
        e.daily_boss_state = 13991,
        e.daily_trial_time = 13992,
        e.daily_KE_times = 13993,
        e.daily_TE_times = 13994,
        e.daily_WU_times = 13995,
        e.daily_TAO_times = 13996,
        e.daily_trial_point = 13997,
        e.daily_box_state = 13998,
        e.bitbuf_Tao = 15141,
        e.bitbuf_hasOneKey = 15142,
        e
    } ();
    e.KingGaiaConst = t,
    __reflect(t.prototype, "kingGaia.KingGaiaConst")
} (kingGaia || (kingGaia = {}));
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
    return new(i || (i = Promise))(function(a, r) {
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function u(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((n = n.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
kingGaia; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.leftTime = 0,
            i.canDown = !0,
            i.new_monster_level_id = 137,
            i.onTimer = function() {
                if (i.leftTime > 0) {
                    var e = SystemTimerManager.getTimeClockString(i.leftTime, !0);
                    i.txt_freeTime.text = e,
                    i.leftTime--
                } else i.grp_noOpen.visible = !1,
                i.btnJuexing.visible = !0,
                SystemTimerManager.removeTickFun(i.onTimer)
            },
            i.skinName = e.MainpanelSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(132, this, "kg_mainpanel_wanggaiya_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "kg_mainpanel_btncollected_png": "kg_mainpanel_btncollect_png"
            })
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnJuexing,
            function() {
                StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击主界面-【开启战王试炼】"),
                StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "进入关卡界面"),
                t.service.openPanel(e.KingGaiaConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1710974,
                        productID: 248766
                    },
                    e.caller = t,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(248766, i,
                        function() {
                            KTool.doExchange(9412, i,
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击主界面-【能力提升】"),
                t.service.openPanel(e.KingGaiaConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btnDiscount,
            function() {
                StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击主界面-【优惠极品】");
                var t = new e.KingGaiaOneKeyPop,
                i = PopViewManager.createDefaultStyleObject();
                i.maskShapeStyle = {
                    maskAlpha: .8,
                    maskColor: 0
                },
                PopViewManager.getInstance().openView(t, i)
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击主界面-【兑换精灵】"),
                ItemManager.getNumByID(1710974) >= 120 ? KTool.doExchange(9419, 1,
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                }) : BubblerManager.getInstance().showText("王者之心数量不足!")
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3242,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnSuper,
            function() {
                StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProductBySocket(248758,
                    function() {
                        SocketConnection.sendByQueue(e.KingGaiaConst.kingGaia_CMD, [1, 0],
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
        i.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "kg_mainpanel_btncollected_png": "kg_mainpanel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.checkIsOpen = function() {
            var e = SystemTimerManager.sysDate,
            t = e.getHours(),
            i = !1;
            if (t >= 13 && 15 > t || t >= 18 && 20 > t) return ! 0;
            var n = 0;
            13 > t ? n = 13 : t >= 15 && 18 > t ? n = 18 : t >= 20 && (n = 13, i = !0);
            var a = i ? e.getDate() + 1 : e.getDate();
            return this.leftTime = SystemTimerManager.getTimeByDate(e.getFullYear(), e.getMonth() + 1, a, n) - Math.floor(e.getTime() / 1e3),
            SystemTimerManager.addTickFun(this.onTimer),
            !1
        },
        i.prototype.update = function() {
            var t = this.checkIsOpen();
            this.btnJuexing.visible = t,
            this.grp_noOpen.visible = !t;
            var i = this.service.getValue(e.KingGaiaConst.forever_pet_state),
            n = 1 == this.service.getValue(e.KingGaiaConst.bitbuf_hasOneKey);
            this.btnExchange.visible = this.btnSuper.visible = this.cishu.visible = 0 == KTool.getBit(i, 1),
            this.hasGet.visible = this.btnDiscount.visible = 1 == KTool.getBit(i, 1);
            var a = ItemManager.getNumByID(1710974),
            r = a >= 120 ? 589568 : 16711680;
            this.txt_itemNum.textFlow = [{
                text: a + "",
                style: {
                    textColor: r
                }
            },
            {
                text: "/120",
                style: {
                    textColor: 16774231
                }
            }];
            for (var o = 0,
            s = 0; 3 > s; s++) o += KTool.getBit(i, 2 + s);
            var u = 1 == this.service.getValue(e.KingGaiaConst.bitbuf_Tao);
            DisplayUtil.setEnabled(this.btnUp, 3 > o || !u, 3 == o && u),
            DisplayUtil.setEnabled(this.btnDiscount, !n, n)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            SystemTimerManager.removeTickFun(this.onTimer)
        },
        i
    } (BasicPanel);
    e.KingGaiaMainpanel = t,
    __reflect(t.prototype, "kingGaia.KingGaiaMainpanel")
} (kingGaia || (kingGaia = {}));
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
kingGaia; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.OnekeypopSkin,
            i
        }
        return __extends(i, t),
        i.prototype.initialized = function() {
            var t = this;
            GameInfo.isChecking && (this.btnAdd.visible = !1),
            ImageButtonUtil.add(this.btnclose,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                t.hide(),
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248759, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingGaiaConst.kingGaia_CMD, [2, 0],
                        function() {
                            Alarm.show("恭喜你王·盖亚超级极品成功！"),
                            t.update()
                        })
                    })
                },
                t)
            },
            this),
            this.update()
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getBitSet([15142],
            function(t) {
                var i = 1 == t[0];
                DisplayUtil.setEnabled(e.btnBuy, !i, i),
                UserInfoManager.getDiamond(function(t) {
                    e.txt_diamond.text = core.gameUtil.ConvertToTenThousand(t)
                },
                e)
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.KingGaiaOneKeyPop = t,
    __reflect(t.prototype, "kingGaia.KingGaiaOneKeyPop")
} (kingGaia || (kingGaia = {}));
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
kingGaia; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.leftTime = 0,
            i.closeTime = 0,
            i.proValues = [30, 70, 100],
            i.curProgress = -1,
            i.onTimer = function() {
                if (i.closeTime > 0) {
                    var e = SystemTimerManager.getTimeClockString(i.closeTime, !0);
                    i.txt_time.text = e,
                    i.closeTime--
                } else Alarm.show("当前副本已关闭",
                function() {
                    i.service.backToMainPanel()
                }),
                SystemTimerManager.removeTickFun(i.onTimer)
            },
            i.skinName = e.Panel1Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(135, this, "kg_mainpanel_title1_png",
            function() {
                e.service.backToMainPanel(),
                EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, e.onFightOver, e)
            },
            this),
            this.grpBack.btnHelp.x = 275,
            this.grpBack.title.y = 10,
            this.addEvents(),
            this.bar_pro.maximum = 100;
            var i = SystemTimerManager.sysBJDate.getHours();
            this.isNight = i >= 18,
            this.getProgress(),
            null == this._timer && (this._timer = new egret.Timer(6e4), this._timer.addEventListener(egret.TimerEvent.TIMER, this.getProgress, this)),
            this._timer.start(),
            this.showLeftTime(),
            this.animInit()
        },
        i.prototype.animInit = function() {
            this.drawAnim1 = SpineUtil.createAnimate("wanggaiya"),
            this.drawAnim2 = SpineUtil.createAnimate("wanggaiya"),
            this.drawAnim3 = SpineUtil.createAnimate("wanggaiya"),
            this.grp_contents.addChild(this.drawAnim1),
            this.grp_contents.addChild(this.drawAnim2),
            this.grp_contents.addChild(this.drawAnim3),
            this.drawAnim1.touchEnabled = this.drawAnim2.touchEnabled = this.drawAnim3.touchEnabled = !1,
            this.drawAnim1.touchChildren = this.drawAnim2.touchChildren = this.drawAnim3.touchChildren = !1,
            this.drawAnim1.scaleX = this.drawAnim1.scaleY = .5,
            this.drawAnim2.scaleX = this.drawAnim2.scaleY = .5,
            this.drawAnim3.scaleX = this.drawAnim3.scaleY = .5,
            this.drawAnim1.x = this.drawAnim2.x = this.drawAnim3.x = 550,
            this.drawAnim1.y = this.drawAnim2.y = this.drawAnim3.y = 300,
            this.drawAnim1.visible = this.drawAnim2.visible = this.drawAnim3.visible = !1
        },
        i.prototype.beforeAdd = function(t) {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            e.KingGaiaConst.curLevel = 1
        },
        i.prototype.getProgress = function() {
            var t = this;
            SocketConnection.sendByQueue(e.KingGaiaConst.kingGaia_CMD, [5, 0],
            function(e) {
                var i = -1 == t.curProgress,
                n = e.data;
                t.curProgress = n.readUnsignedInt(),
                t.txtProgress.text = t.curProgress + "%",
                t.bar_pro.value = t.curProgress,
                100 == t.curProgress && t._timer.stop(),
                i ? t.update() : t.service.updateValues().then(function() {
                    t.update()
                })
            })
        },
        i.prototype.addEvents = function() {
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
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1710974,
                        productID: 248766
                    },
                    e.caller = t,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(248766, i,
                        function() {
                            KTool.doExchange(9412, i,
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248760, 1,
                    function() {
                        KTool.doExchange(9406, 1,
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
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                return StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击关卡界面-【发起挑战】"),
                t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void FightManager.fightNoMapBoss(8017)
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["btnReward" + i],
                function() {
                    StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击关卡界面-【任意宝箱】");
                    var n = t.service.getValue(e.KingGaiaConst.daily_box_state),
                    a = t.isNight ? 1 == KTool.getBit(n, i + 3) : 1 == KTool.getBit(n, i),
                    r = t.isNight ? i + 3 : i;
                    a || SocketConnection.sendByQueue(e.KingGaiaConst.kingGaia_CMD, [4, r],
                    function() {
                        t.getProgress()
                    })
                },
                n)
            },
            n = this, a = 1; 3 >= a; a++) i(a);
            for (var r = function(e) {
                ImageButtonUtil.add(o["btnAdd" + e],
                function() {
                    PayManager.doPayFunc(function() {
                        var i = {};
                        i.type = "product_diamond",
                        i.ins = {
                            iconID: 1710968 + e,
                            productID: 248760 + e
                        },
                        i.caller = t,
                        i.callBack = function(i, n) {
                            KTool.buyProductByCallback(248760 + e, n,
                            function() {
                                KTool.doExchange(9406 + e, n,
                                function() {
                                    t.service.updateValues().then(function() {
                                        t.update()
                                    })
                                })
                            })
                        },
                        ModuleManager.showModuleByID(1, i)
                    },
                    t)
                },
                o)
            },
            o = this, a = 1; 5 >= a; a++) r(a);
            ImageButtonUtil.add(this.btnExchange,
            function() {
                StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击关卡界面-【兑换精灵】"),
                ItemManager.getNumByID(1710974) >= 120 ? KTool.doExchange(9419, 1,
                function() {
                    t.service.updateValues().then(function() {
                        t.update(),
                        t.service.backToMainPanel()
                    })
                }) : BubblerManager.getInstance().showText("王者之心数量不足!")
            },
            this),
            ImageButtonUtil.add(this.btnJihuo,
            function() {
                StatLogger.log("20230324版本系统功能", "王·盖亚搬迁", "点击关卡界面-【全部合成】");
                for (var e = [], i = [], n = 9999, a = 1; 5 >= a; a++) {
                    var r = ItemManager.getNumByID(1710968 + a);
                    0 == r ? i.push(1710968 + a) : n = n > r ? r: n,
                    e.push(r)
                }
                if (0 != i.length) {
                    for (var o = "",
                    a = 0; a < i.length; a++) o += ItemXMLInfo.getName(i[a]) + ",";
                    o = o.substring(0, o.length - 1);
                    var s = "<font color='#ff0000'>" + o + "</font>数量不足";
                    BubblerManager.getInstance().showText(s, !0)
                } else KTool.doExchange(9418, n,
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this),
            EventManager.addEventListener("updatePanel1",
            function() {
                t.service.updateValues().then(function() {
                    t.update()
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.onFightOver = function() {
            if (FightManager.isWin) {
                this.getProgress();
                var t = new e.KingGaiaWinPop,
                i = PopViewManager.createDefaultStyleObject();
                i.ignoreMaskClick = !0,
                PopViewManager.getInstance().openView(t, i)
            }
        },
        i.prototype.showLeftTime = function() {
            var e = SystemTimerManager.sysDate,
            t = this.isNight ? 20 : 15;
            this.closeTime = SystemTimerManager.getTimeByDate(e.getFullYear(), e.getMonth() + 1, e.getDate(), t) - Math.floor(e.getTime() / 1e3),
            console.log("当前剩余" + this.closeTime),
            SystemTimerManager.addTickFun(this.onTimer)
        },
        i.prototype.update = function() {
            var t = this;
            this.leftTime = 10 - this.service.getValue(e.KingGaiaConst.daily_boss_state);
            var i = this.service.getValue(e.KingGaiaConst.daily_box_state),
            n = this.service.getValue(e.KingGaiaConst.daily_trial_time);
            this.txt_leftTime.text = "" + this.leftTime;
            var a = this.service.getValue(e.KingGaiaConst.forever_pet_state),
            r = 1 == KTool.getBit(a, 1);
            this.cishu.visible = !r,
            ItemManager.updateItems([1710969, 1710970, 1710971, 1710972, 1710973],
            function() {
                for (var e = 1; 5 >= e; e++) t["txt_num" + e].text = ItemManager.getNumByID(1710968 + e)
            });
            var o = ItemManager.getNumByID(1710974),
            s = o >= 120 ? 589568 : 16711680;
            if (this.txt_itemNum.textFlow = [{
                text: o + "",
                style: {
                    textColor: s
                }
            },
            {
                text: "/120",
                style: {
                    textColor: 16774231
                }
            }], DisplayUtil.setEnabled(this.btnAdd, 10 != this.leftTime, 10 == this.leftTime), DisplayUtil.setEnabled(this.btnExchange, !r, r), this.leftT.visible = 10 != this.leftTime, 0 != n && this.service.registerClock(600 + n,
            function() {
                SocketConnection.sendByQueue(e.KingGaiaConst.kingGaia_CMD, [6, 0],
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this, this.txt_countDown), -1 != this.curProgress) for (var u = 1; 3 >= u; u++) {
                var _ = this.isNight ? 1 == KTool.getBit(i, u + 3) : 1 == KTool.getBit(i, u);
                this["yijihuo_" + u].visible = _;
                var g = !_ && this.curProgress >= this.proValues[u - 1];
                this.setBox(g, u),
                this["btnReward" + u].visible = _ || this.curProgress >= this.proValues[u - 1],
                this["imgNo" + u].visible = this.curProgress < this.proValues[u - 1]
            }
        },
        i.prototype.setBox = function(e, t) {
            e ? (this["drawAnim" + t].visible = !0, this["drawAnim" + t].play("baoxiang" + t, 0, 0, {})) : this["drawAnim" + t].visible = !1
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            SystemTimerManager.removeTickFun(this.onTimer),
            EventManager.removeAll(this),
            this._timer.removeEventListener(egret.TimerEvent.TIMER, this.getProgress, this)
        },
        i
    } (BasicPanel);
    e.KingGaiaPanel1 = t,
    __reflect(t.prototype, "kingGaia.KingGaiaPanel1")
} (kingGaia || (kingGaia = {}));
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
kingGaia; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.leftTime = 0,
            i.needID = [3205, 3142, 3170, 3190],
            i.foreverValue = [102243, 102245, 102244, 102246],
            i.dailyValue = [13993, 13995, 13994, 13996],
            i.txtConditions = ["最后一击以<font color='#ff0000'>特殊攻击</font>战胜boss进度+5%", "最后一击以<font color='#ff0000'>低于800的伤害</font>战胜boss进度+5%", "最后一击以<font color='#ff0000'>致命一击</font>战胜boss进度+5%", "最后一击以<font color='#ff0000'>高于1000的伤害</font>战胜boss进度+5%"],
            i.bossId = [8018, 8022, 8020, 8024],
            i.onekeyID = [248767, 248769, 248768, 248770],
            i.lastValue = 0,
            i.isEnterFight = !1,
            i.skinName = e.Panel2Skin,
            i.name = "KingGaia.Panel2Skin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kg_mainpanel_title5_png",
            function() {
                e.service.backToMainPanel(),
                EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, e.onFightOver, e)
            },
            this),
            this.grpBack.title.y = 10,
            this.rbGroup = this.rb_1.group,
            this.rbGroup.selectedValue = this.curTab = 1,
            this.addEvents()
        },
        i.prototype.beforeAdd = function(e) {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.onFightOver = function() {
            var e = this;
            this.isEnterFight = !0,
            this.service.updateValues().then(function() {
                e.update()
            })
        },
        i.prototype.addEvents = function() {
            var t = this;
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
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
            ImageButtonUtil.add(this.btnTe,
            function() {
                t.service.showPetEff(3242)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 30158
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(40745) ? (e = {},
                e.ins = 40745, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 40745, tipsPop.TipsPop.openItemPop(e))
            },
            this);
            var i = ["专属刻印", "第五技能", "专属特性", "抗性礼包"];
            ImageButtonUtil.add(this.btnTiozhan,
            function() {
                if (t.leftTime <= 0) return void BubblerManager.getInstance().showText("剩余挑战次数不足！");
                var e = t.service.getValue(t.foreverValue[t.curTab - 1]);
                if (100 == e) return void BubblerManager.getInstance().showText("进度已达到100%，可以领取" + i[t.curTab - 1]);
                for (var n = !1,
                a = 0; a < PetManager.infos.length; a++) if (PetManager.infos[a].id == t.needID[t.curTab - 1]) {
                    n = !0;
                    break
                }
                var r = n ? t.bossId[t.curTab - 1] + 1 : t.bossId[t.curTab - 1];
                FightManager.fightNoMapBoss(r)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(t.onekeyID[t.curTab - 1], 1,
                    function() {
                        if (!PetManager.isDefaultPet(3242)) return void Alarm.show("请将王·盖亚放入首发出战位置",
                        function() {
                            ModuleManager.showModuleByID(10)
                        });
                        if (4 != t.curTab) {
                            var i = t.curTab;
                            2 == t.curTab ? i = 3 : 3 == t.curTab && (i = 2),
                            SocketConnection.sendByQueue(e.KingGaiaConst.kingGaia_CMD, [3, 1 + i],
                            function() {
                                return [t.service.updateValues().then(function() {
                                    t.update()
                                })]
                            })
                        } else KTool.doExchange(9413, 1,
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this);
            var n = [248771, 248773, 248772, 248774],
            a = [9414, 9416, 9415, 9417];
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(n[t.curTab - 1], 1,
                    function() {
                        KTool.doExchange(a[t.curTab - 1], 1,
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
            ImageButtonUtil.add(this.btnJihuo,
            function() {
                if (4 != t.curTab) {
                    var i = t.curTab;
                    2 == t.curTab ? i = 3 : 3 == t.curTab && (i = 2),
                    SocketConnection.sendByQueue(e.KingGaiaConst.kingGaia_CMD, [9, 1 + i],
                    function() {
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    })
                } else KTool.doExchange(9425, 1,
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this)
        },
        i.prototype.onChangeTab = function() {
            this.curTab = ~~this.rbGroup.selectedValue,
            this.update()
        },
        i.prototype.update = function() {
            var t = this.service.getValue(this.foreverValue[this.curTab - 1]);
            this.isEnterFight && FightManager.isWin && (this.isEnterFight = !1, t == this.lastValue && BubblerManager.getInstance().showText("没有按条件击败对手，未能增长进度")),
            this.lastValue = t;
            var i = this.service.getValue(e.KingGaiaConst.forever_pet_state);
            this.leftTime = 4 - this.service.getValue(this.dailyValue[this.curTab - 1]),
            this.txt_leftTime.text = this.leftTime + "";
            for (var n = 1; 4 >= n; n++) this["pet" + n].visible = this["show" + n].visible = this.curTab == n,
            this["hasGet" + n].visible = KTool.getBit(i, 1 + n),
            4 == n && (this["hasGet" + n].visible = 1 == this.service.getValue(e.KingGaiaConst.bitbuf_Tao));
            this.txt_name.text = PetXMLInfo.getName(this.needID[this.curTab - 1]),
            this.txt_progress.text = t + "%",
            this.bars.value = t;
            var a, r = this.curTab;
            4 != this.curTab ? (2 == this.curTab ? r = 3 : 3 == this.curTab && (r = 2), a = 1 == KTool.getBit(i, 1 + r)) : a = 1 == this.service.getValue(e.KingGaiaConst.bitbuf_Tao),
            this.txt_info.textFlow = (new egret.HtmlTextParser).parse(this.txtConditions[this.curTab - 1]),
            DisplayUtil.setEnabled(this.btnJihuo, 100 == t && !a, 100 != t || a),
            DisplayUtil.setEnabled(this.btnAdd, 4 != this.leftTime, 4 == this.leftTime),
            DisplayUtil.setEnabled(this.btnTiozhan, this.checkCanBuy(), !this.checkCanBuy()),
            DisplayUtil.setEnabled(this.btnOnekey, this.checkCanBuy(), !this.checkCanBuy())
        },
        i.prototype.checkCanBuy = function() {
            if (4 != this.curTab) {
                var t = this.curTab;
                2 == this.curTab ? t = 3 : 3 == this.curTab && (t = 2);
                var i = this.service.getValue(e.KingGaiaConst.forever_pet_state);
                return 0 == KTool.getBit(i, t + 1)
            }
            var i = this.service.getValue(e.KingGaiaConst.bitbuf_Tao);
            return 0 == i
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this)
        },
        i
    } (BasicPanel);
    e.KingGaiaPanel2 = t,
    __reflect(t.prototype, "kingGaia.KingGaiaPanel2")
} (kingGaia || (kingGaia = {}));
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
kingGaia; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.WinpopSkin,
            i.getInfo(),
            i
        }
        return __extends(i, t),
        i.prototype.getInfo = function() {
            for (var t = this,
            i = [102225, 102226, 102228, 102227, 102229, 102230, 102231, 102232, 102233, 102234, 102236, 102237, 102239, 102238, 102240, 102235], n = new egret.ByteArray, a = 0, r = i; a < r.length; a++) {
                var o = r[a];
                n.writeUnsignedInt(o)
            }
            SocketConnection.sendByQueue(CommandID.GET_MULTI_FOREVER_BY_DB, [i.length, n],
            function(e) {
                var i = e.data;
                i.position = 0;
                for (var n = i.readUnsignedInt(), a = [], r = 0; 5 > r; r++) a.push(i.readFloat());
                for (var r = 0; n - 5 > r; r++) a.push(i.readUnsignedInt());
                for (var o = 1; 5 >= o; o++) a[o - 1] = a[o - 1].toFixed(0),
                t["txt_average" + o].text = "生涯平均：" + a[o - 1],
                t["txt_info" + o].text = a[o - 1 + 5],
                t["rec" + o].visible = a[o - 1 + 5] >= a[o - 1 + 10];
                t.setJiangpai(a);
                var s = a[15] >= 8e4;
                t.txt_record.text = a[15],
                t.type2.visible = !s,
                t.type1.visible = s,
                KTool.getPlayerInfo([707],
                function(e) {
                    for (var i = [], n = 1; 5 >= n; n++) 1 == KTool.getBit(e[0], n) && i.push(1710968 + n);
                    if (s) {
                        console.log("爆的数量：" + i);
                        for (var a = 1; 4 >= a; a++) t["icon1_" + a].source = ClientConfig.getItemIcon(i[a - 1]),
                        t["txt_name1" + a].text = ItemXMLInfo.getName(i[a - 1])
                    } else for (var r = 1; 3 >= r; r++) t["icon2_" + r].source = ClientConfig.getItemIcon(i[r - 1]),
                    t["txt_name2" + r].text = ItemXMLInfo.getName(i[r - 1])
                })
            }),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(e.KingGaiaConst.kingGaia_CMD, [7, 0],
                function() {
                    t.hide(),
                    EventManager.dispatchEventWith("updatePanel1")
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.setJiangpai = function(e) {
            var t = new Array(5);
            e[5] > 5e3 ? t[0] = 3 : e[5] > 1e3 && e[5] <= 5e3 ? t[0] = 2 : t[0] = 1,
            e[6] < 500 ? t[1] = 3 : e[6] >= 500 && e[6] <= 1500 ? t[1] = 2 : t[1] = 1,
            1 == e[7] ? t[2] = 3 : e[7] > 1 && e[7] <= 3 ? t[2] = 2 : t[2] = 1,
            1 == e[8] ? t[3] = 3 : e[8] > 1 && e[8] <= 5 ? t[3] = 2 : t[3] = 1,
            0 == e[9] ? t[4] = 3 : e[9] > 0 && e[9] <= 2 ? t[4] = 2 : t[4] = 1,
            console.log(t);
            for (var i = 1; 5 >= i; i++) this["jiangpai" + i].source = "kg_winpop_jiangpai" + t[i - 1] + "_png"
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.KingGaiaWinPop = t,
    __reflect(t.prototype, "kingGaia.KingGaiaWinPop")
} (kingGaia || (kingGaia = {})),
window.kingGaia = window.kingGaia || {};
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
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.kingGaia.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnExchange", "hasGet", "txt_itemNum", "btnAdd", "cishu", "btnCollect", "btnInfo", "btnDiscount", "btnSuper", "btnUp", "lift", "btnJuexing", "txt_freeTime", "grp_noOpen", "title"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kg_mainpanel_bg_png",
        e.percentWidth = 101,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 20.5,
        e.y = 2,
        e.elementsContent = [this.btnExchange_i(), this.hasGet_i(), this.cishu_i(), this.btnCollect_i(), this.btnInfo_i(), this.btnDiscount_i(), this.btnSuper_i(), this.btnUp_i(), this.lift_i(), this.btnJuexing_i(), this.grp_noOpen_i(), this.title_i()],
        e
    },
    i.btnExchange_i = function() {
        var e = new eui.Image;
        return this.btnExchange = e,
        e.source = "kg_mainpanel_duihuan_png",
        e.visible = !0,
        e.x = 392,
        e.y = 490,
        e
    },
    i.hasGet_i = function() {
        var e = new eui.Image;
        return this.hasGet = e,
        e.source = "kg_mainpanel_yihuode_png",
        e.visible = !0,
        e.x = 391,
        e.y = 489,
        e
    },
    i.cishu_i = function() {
        var e = new eui.Group;
        return this.cishu = e,
        e.visible = !0,
        e.x = 306,
        e.y = 580,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this._Image2_i(), this.txt_itemNum_i(), this.btnAdd_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kg_mainpanel_juxing_904_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "需要       王者之心：",
        e.textColor = 16767958,
        e.x = 75,
        e.y = 7,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kg_mainpanel_tuceng_18_png",
        e.x = 120,
        e.y = 6,
        e
    },
    i.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "xxx/120",
        e.textAlign = "right",
        e.textColor = 16711680,
        e.width = 76,
        e.x = 235,
        e.y = 8,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "kg_mainpanel_btnadd_png",
        e.x = 320,
        e.y = 2,
        e
    },
    i.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "kg_mainpanel_btncollect_png",
        e.x = 0,
        e.y = 485,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "kg_mainpanel_btninfo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 550,
        e
    },
    i.btnDiscount_i = function() {
        var e = new eui.Image;
        return this.btnDiscount = e,
        e.source = "kg_mainpanel_btninfo11_yhjp_png",
        e.visible = !0,
        e.x = 153,
        e.y = 541,
        e
    },
    i.btnSuper_i = function() {
        var e = new eui.Image;
        return this.btnSuper = e,
        e.source = "kg_mainpanel_btninfo1_zzhd_png",
        e.visible = !0,
        e.x = 153,
        e.y = 541,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "kg_mainpanel_btninfo111_kb_2_png",
        e.visible = !0,
        e.x = 64,
        e.y = 541,
        e
    },
    i.lift_i = function() {
        var e = new eui.Image;
        return this.lift = e,
        e.source = "kg_mainpanel_lift_png",
        e.x = 73,
        e.y = 116,
        e
    },
    i.btnJuexing_i = function() {
        var e = new eui.Image;
        return this.btnJuexing = e,
        e.source = "kg_mainpanel_btnjuexing_png",
        e.visible = !0,
        e.x = 850,
        e.y = 545,
        e
    },
    i.grp_noOpen_i = function() {
        var e = new eui.Group;
        return this.grp_noOpen = e,
        e.x = 864,
        e.y = 540,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Label2_i(), this.txt_freeTime_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 66,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "kg_mainpanel_jx_908_kb_png",
        e.width = 160,
        e.x = 4,
        e.y = 3,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "kg_mainpanel_juxing_908_png",
        e.width = 161,
        e.x = 4,
        e.y = 34,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kg_mainpanel_xz_18_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kg_mainpanel_xz_18_kb_png",
        e.x = 0,
        e.y = 59,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "距离免费开启",
        e.textColor = 16777215,
        e.x = 21,
        e.y = 6,
        e
    },
    i.txt_freeTime_i = function() {
        var e = new eui.Label;
        return this.txt_freeTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 25,
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 118,
        e.x = 26,
        e.y = 38,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "kg_mainpanel_title_png",
        e.visible = !0,
        e.x = 559,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/OnekeypopSkin.exml"] = window.kingGaia.OnekeypopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnAdd", "txt_diamond", "btnBuy", "btnclose", "pop"],
        this.height = 608,
        this.width = 985,
        this.elementsContent = [this.pop_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.pop_i = function() {
        var e = new eui.Group;
        return this.pop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnAdd_i(), this._Label1_i(), this.txt_diamond_i(), this._Image5_i(), this.btnBuy_i(), this.btnclose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kg_onekeypop_bg_png",
        e.visible = !0,
        e.x = 155,
        e.y = 264,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kg_onekeypop_title_png",
        e.x = 165,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kg_onekeypop_txtbg_png",
        e.x = 277,
        e.y = 514,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kg_onekeypop_juxing_904_png",
        e.x = 281,
        e.y = 468,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "kg_onekeypop_btnadd_png",
        e.x = 539,
        e.y = 513,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "您现在拥有钻石：",
        e.textColor = 16777215,
        e.x = 325,
        e.y = 517,
        e
    },
    i.txt_diamond_i = function() {
        var e = new eui.Label;
        return this.txt_diamond = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "2218",
        e.textColor = 16774499,
        e.x = 468,
        e.y = 518,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kg_onekeypop_zu_1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 136,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "kg_onekeypop_btnbuy_png",
        e.x = 366,
        e.y = 545,
        e
    },
    i.btnclose_i = function() {
        var e = new eui.Image;
        return this.btnclose = e,
        e.source = "kg_onekeypop_btnclose_png",
        e.x = 951,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.kingGaia.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_countDown", "leftT", "btnTiaozhan", "txt_leftTime", "btnAdd", "btnBag", "btnCure", "txt_num1", "btnAdd1", "item1", "txt_num2", "btnAdd2", "item2", "txt_num3", "btnAdd3", "item3", "txt_num4", "btnAdd4", "item4", "txt_num5", "btnAdd5", "item5", "btnJihuo", "items", "btnExchange", "txt_itemNum", "btnAddItem", "cishu", "bar_pro", "txtProgress", "btnReward3", "btnReward2", "btnReward1", "imgNo3", "imgNo2", "imgNo1", "yijihuo_1", "yijihuo_3", "yijihuo_2", "progess", "txt_time", "title", "grp_contents"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grp_contents_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.height = 353,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "kg_panel1_jd_zndxz_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "kg_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.grp_contents_i = function() {
        var e = new eui.Group;
        return this.grp_contents = e,
        e.horizontalCenter = -2,
        e.width = 1110,
        e.y = 19,
        e.elementsContent = [this.leftT_i(), this.btnTiaozhan_i(), this._Image2_i(), this._Label2_i(), this.txt_leftTime_i(), this.btnAdd_i(), this.btnBag_i(), this.btnCure_i(), this.items_i(), this.btnExchange_i(), this.cishu_i(), this.progess_i(), this.title_i()],
        e
    },
    n.leftT_i = function() {
        var e = new eui.Group;
        return this.leftT = e,
        e.x = 365,
        e.y = 479,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this.txt_countDown_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "kg_panel1_jx_904_kb_2_png",
        e.width = 231,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "挑战次数恢复倒计时：",
        e.textColor = 16744040,
        e.x = 20,
        e.y = 5,
        e
    },
    n.txt_countDown_i = function() {
        var e = new eui.Label;
        return this.txt_countDown = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "XX:XX",
        e.textColor = 16774231,
        e.x = 176,
        e.y = 5,
        e
    },
    n.btnTiaozhan_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan = e,
        e.source = "kg_panel1_btntiaozhan_png",
        e.x = 409,
        e.y = 508,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_jx_904_kb_2_png",
        e.x = 359,
        e.y = 563,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "剩余挑战次数：",
        e.textColor = 16767958,
        e.x = 370,
        e.y = 570,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "XX/XX",
        e.textColor = 16774231,
        e.x = 503,
        e.y = 571,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "kg_mainpanel_btnadd_png",
        e.x = 566,
        e.y = 565,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kg_panel1_jlbb_png",
        e.x = 0,
        e.y = 424,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kg_panel1_jlhf_png",
        e.x = 0,
        e.y = 514,
        e
    },
    n.items_i = function() {
        var e = new eui.Group;
        return this.items = e,
        e.x = 730,
        e.y = 134,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.item1_i(), this.item2_i(), this.item3_i(), this.item4_i(), this.item5_i(), this._Image13_i(), this.btnJihuo_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_tuoyuan_1_png",
        e.x = 36,
        e.y = 29,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_dbx_1_png",
        e.x = 24,
        e.y = 33,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_tuoyuan_2_png",
        e.x = 109,
        e.y = 102,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_tux_png",
        e.x = 130,
        e.y = 116,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_tuceng_24_png",
        e.x = 130,
        e.y = 131,
        e
    },
    n.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 53,
        e.y = 0,
        e.elementsContent = [this._Image8_i(), this.txt_num1_i(), this.btnAdd1_i()],
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_jx_9041_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_num1_i = function() {
        var e = new eui.Label;
        return this.txt_num1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "10",
        e.textAlign = "right",
        e.textColor = 16774231,
        e.width = 30,
        e.x = 20,
        e.y = 81,
        e
    },
    n.btnAdd1_i = function() {
        var e = new eui.Image;
        return this.btnAdd1 = e,
        e.source = "kg_mainpanel_btnadd_png",
        e.x = 65,
        e.y = 74,
        e
    },
    n.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 212,
        e.y = 1,
        e.elementsContent = [this._Image9_i(), this.txt_num2_i(), this.btnAdd2_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_jx_904_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_num2_i = function() {
        var e = new eui.Label;
        return this.txt_num2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "000",
        e.textAlign = "right",
        e.textColor = 16774231,
        e.width = 30,
        e.x = 21,
        e.y = 80,
        e
    },
    n.btnAdd2_i = function() {
        var e = new eui.Image;
        return this.btnAdd2 = e,
        e.source = "kg_mainpanel_btnadd_png",
        e.x = 66,
        e.y = 73,
        e
    },
    n.item3_i = function() {
        var e = new eui.Group;
        return this.item3 = e,
        e.x = 0,
        e.y = 144,
        e.elementsContent = [this._Image10_i(), this.txt_num3_i(), this.btnAdd3_i()],
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_jx_9042_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_num3_i = function() {
        var e = new eui.Label;
        return this.txt_num3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "000",
        e.textAlign = "right",
        e.textColor = 16774231,
        e.width = 30,
        e.x = 22,
        e.y = 79,
        e
    },
    n.btnAdd3_i = function() {
        var e = new eui.Image;
        return this.btnAdd3 = e,
        e.source = "kg_mainpanel_btnadd_png",
        e.x = 66,
        e.y = 72,
        e
    },
    n.item4_i = function() {
        var e = new eui.Group;
        return this.item4 = e,
        e.x = 261,
        e.y = 144,
        e.elementsContent = [this._Image11_i(), this.txt_num4_i(), this.btnAdd4_i()],
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_jx_90421_kb_3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_num4_i = function() {
        var e = new eui.Label;
        return this.txt_num4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "000",
        e.textAlign = "right",
        e.textColor = 16774231,
        e.width = 30,
        e.x = 22,
        e.y = 79,
        e
    },
    n.btnAdd4_i = function() {
        var e = new eui.Image;
        return this.btnAdd4 = e,
        e.source = "kg_mainpanel_btnadd_png",
        e.x = 66,
        e.y = 72,
        e
    },
    n.item5_i = function() {
        var e = new eui.Group;
        return this.item5 = e,
        e.x = 132,
        e.y = 254,
        e.elementsContent = [this._Image12_i(), this.txt_num5_i(), this.btnAdd5_i()],
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_jx_90422_kb_3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_num5_i = function() {
        var e = new eui.Label;
        return this.txt_num5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "000",
        e.textAlign = "right",
        e.textColor = 16774231,
        e.width = 30,
        e.x = 22,
        e.y = 79,
        e
    },
    n.btnAdd5_i = function() {
        var e = new eui.Image;
        return this.btnAdd5 = e,
        e.source = "kg_mainpanel_btnadd_png",
        e.x = 66,
        e.y = 72,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_wzzx_png",
        e.x = 131,
        e.y = 110,
        e
    },
    n.btnJihuo_i = function() {
        var e = new eui.Image;
        return this.btnJihuo = e,
        e.source = "kg_panel1_btnjihuo_png",
        e.x = 131,
        e.y = 196,
        e
    },
    n.btnExchange_i = function() {
        var e = new eui.Image;
        return this.btnExchange = e,
        e.source = "kg_panel1_btnexchange_png",
        e.x = 997,
        e.y = 490,
        e
    },
    n.cishu_i = function() {
        var e = new eui.Group;
        return this.cishu = e,
        e.x = 820,
        e.y = 10,
        e.elementsContent = [this._Image14_i(), this._Label3_i(), this._Image15_i(), this.txt_itemNum_i(), this.btnAddItem_i()],
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_juxing_904_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9873835323606,
        e.text = " 王者之心：",
        e.textColor = 16767958,
        e.x = 42,
        e.y = 7,
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_tuceng_18_png",
        e.x = 10,
        e.y = 6,
        e
    },
    n.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "120/120",
        e.textAlign = "right",
        e.textColor = 16711680,
        e.width = 83,
        e.x = 120,
        e.y = 8,
        e
    },
    n.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "kg_mainpanel_btnadd_png",
        e.x = 218,
        e.y = 2,
        e
    },
    n.progess_i = function() {
        var e = new eui.Group;
        return this.progess = e,
        e.visible = !0,
        e.x = 99,
        e.y = 119,
        e.elementsContent = [this._Image16_i(), this._Image17_i(), this.bar_pro_i(), this._Image18_i(), this.txtProgress_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this.btnReward3_i(), this.btnReward2_i(), this.btnReward1_i(), this.imgNo3_i(), this.imgNo2_i(), this.imgNo1_i(), this.yijihuo_1_i(), this.yijihuo_3_i(), this.yijihuo_2_i()],
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_jx_9042_png",
        e.x = 6,
        e.y = 409,
        e
    },
    n._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_jindude1_png",
        e.x = 32,
        e.y = 36,
        e
    },
    n.bar_pro_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_pro = e,
        e.direction = "btt",
        e.value = 0,
        e.visible = !0,
        e.width = 13,
        e.x = 43,
        e.y = 48,
        e.skinName = i,
        e
    },
    n._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_tzjd_png",
        e.x = 12,
        e.y = 412,
        e
    },
    n.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "100%",
        e.textAlign = "center",
        e.textColor = 16774487,
        e.width = 53,
        e.x = 26,
        e.y = 436,
        e
    },
    n._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_zu_6_png",
        e.visible = !0,
        e.x = 7,
        e.y = 0,
        e
    },
    n._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_zu_6_png",
        e.visible = !0,
        e.x = 7,
        e.y = 117,
        e
    },
    n._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_zu_6_png",
        e.visible = !0,
        e.x = 7,
        e.y = 234,
        e
    },
    n.btnReward3_i = function() {
        var e = new eui.Image;
        return this.btnReward3 = e,
        e.source = "kg_panel1_tuceng_21_png",
        e.visible = !0,
        e.x = 18,
        e.y = 12,
        e
    },
    n.btnReward2_i = function() {
        var e = new eui.Image;
        return this.btnReward2 = e,
        e.source = "kg_panel1_tuceng_22_png",
        e.visible = !0,
        e.x = 17,
        e.y = 130,
        e
    },
    n.btnReward1_i = function() {
        var e = new eui.Image;
        return this.btnReward1 = e,
        e.source = "kg_panel1_tuceng_23_png",
        e.visible = !0,
        e.x = 21,
        e.y = 249,
        e
    },
    n.imgNo3_i = function() {
        var e = new eui.Image;
        return this.imgNo3 = e,
        e.source = "kg_panel1_tc_21_kb_png",
        e.visible = !0,
        e.x = 22,
        e.y = 16,
        e
    },
    n.imgNo2_i = function() {
        var e = new eui.Image;
        return this.imgNo2 = e,
        e.source = "kg_panel1_tc_22_kb_png",
        e.visible = !0,
        e.x = 21,
        e.y = 134,
        e
    },
    n.imgNo1_i = function() {
        var e = new eui.Image;
        return this.imgNo1 = e,
        e.source = "kg_panel1_tc_23_kb_png",
        e.visible = !0,
        e.x = 25,
        e.y = 253,
        e
    },
    n.yijihuo_1_i = function() {
        var e = new eui.Image;
        return this.yijihuo_1 = e,
        e.source = "kg_panel1_yijihuo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 265,
        e
    },
    n.yijihuo_3_i = function() {
        var e = new eui.Image;
        return this.yijihuo_3 = e,
        e.source = "kg_panel1_yijihuo_png",
        e.x = 0,
        e.y = 28,
        e
    },
    n.yijihuo_2_i = function() {
        var e = new eui.Image;
        return this.yijihuo_2 = e,
        e.source = "kg_panel1_yijihuo_png",
        e.x = 0,
        e.y = 147,
        e
    },
    n.title_i = function() {
        var e = new eui.Group;
        return this.title = e,
        e.x = 123,
        e.y = 0,
        e.elementsContent = [this._Image22_i(), this._Image23_i(), this._Label4_i(), this.txt_time_i()],
        e
    },
    n._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_title_png",
        e.x = 287,
        e.y = 0,
        e
    },
    n._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel1_tipsbg_png",
        e.x = 0,
        e.y = 50,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "本轮试炼剩余时间：",
        e.textColor = 16755113,
        e.x = 286,
        e.y = 54,
        e
    },
    n.txt_time_i = function() {
        var e = new eui.Label;
        return this.txt_time = e,
        e.fontFamily = "MFShangHei",
        e.size = 25,
        e.text = "00:00:00",
        e.textColor = 16773005,
        e.x = 470,
        e.y = 50,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.kingGaia.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet1", "pet2", "pet3", "pet4", "pets", "txt_leftTime", "btnAdd", "cishu", "btnBag", "btnCure", "down1", "up1", "rb_1", "btnKe", "hasGet1", "down2", "up2", "rb_2", "btnWu", "hasGet3", "down3", "up3", "rb_3", "btnTe", "hasGet2", "rb_4", "down4", "up4", "btnGift", "hasGet4", "ri", "bars", "jindu", "txt_progress", "bar", "txt_info", "btnJihuo", "txt_name", "show1", "show2", "show3", "show4", "lift", "btnTiozhan", "btnOnekey"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group5_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 8), new eui.SetProperty("_Image1", "y", 8)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "kg_panel2_up1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "kg_panel2_down1_png",
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 8), new eui.SetProperty("_Image1", "y", 8)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "kg_panel2_up2_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "kg_panel2_down2_png",
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 8), new eui.SetProperty("_Image1", "y", 8)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "kg_panel2_up3_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "kg_panel2_down3_png",
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "x", 8), new eui.SetProperty("_Image1", "y", 8)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "kg_panel2_up4_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "kg_panel2_down4_png",
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "kg_panel2_jindu_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    s = t.prototype;
    return s.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kg_panel2_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    s._Group5_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -14.5,
        e.y = 20,
        e.elementsContent = [this.pets_i(), this.cishu_i(), this.btnBag_i(), this.btnCure_i(), this._Image2_i(), this._Image3_i(), this._Label2_i(), this.ri_i(), this.bar_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this.txt_info_i(), this.btnJihuo_i(), this.lift_i(), this.btnTiozhan_i(), this.btnOnekey_i()],
        e
    },
    s.pets_i = function() {
        var e = new eui.Group;
        return this.pets = e,
        e.x = 229,
        e.y = 33,
        e.elementsContent = [this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i()],
        e
    },
    s.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "kg_panel2_3162_png",
        e.x = 0,
        e.y = 0,
        e
    },
    s.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "kg_panel2_3194_png",
        e.x = 50,
        e.y = 8,
        e
    },
    s.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "kg_panel2_3183_png",
        e.x = 12,
        e.y = 4,
        e
    },
    s.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.source = "kg_panel2_3214_png",
        e.x = 21,
        e.y = 34,
        e
    },
    s.cishu_i = function() {
        var e = new eui.Group;
        return this.cishu = e,
        e.x = 415,
        e.y = 562,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this.txt_leftTime_i(), this.btnAdd_i()],
        e
    },
    s._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_juxing_904_png",
        e.x = 0,
        e.y = 0,
        e
    },
    s._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9873835323606,
        e.text = "今日剩余挑战次数：",
        e.textColor = 16767958,
        e.x = 26,
        e.y = 7,
        e
    },
    s.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "5",
        e.textColor = 16774231,
        e.x = 211,
        e.y = 8,
        e
    },
    s.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "kg_panel2_btnadd_png",
        e.x = 239,
        e.y = 2,
        e
    },
    s.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kg_panel1_jlbb_png",
        e.x = 0,
        e.y = 423,
        e
    },
    s.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kg_panel1_jlhf_png",
        e.x = 0,
        e.y = 513,
        e
    },
    s._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_title_png",
        e.x = 469,
        e.y = 0,
        e
    },
    s._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_tipsbg_png",
        e.x = 123,
        e.y = 49,
        e
    },
    s._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "挑战进度达到100%即可免费领取对应能力提升组件",
        e.textColor = 16755113,
        e.x = 322,
        e.y = 53,
        e
    },
    s.ri_i = function() {
        var e = new eui.Group;
        return this.ri = e,
        e.x = 834,
        e.y = 113,
        e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        e
    },
    s._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.down1_i(), this.up1_i(), this.rb_1_i(), this._Image4_i(), this.btnKe_i(), this.hasGet1_i()],
        e
    },
    s.down1_i = function() {
        var e = new eui.Image;
        return this.down1 = e,
        e.source = "kg_panel2_down1_png",
        e.visible = !1,
        e.x = 8,
        e.y = 8,
        e
    },
    s.up1_i = function() {
        var e = new eui.Image;
        return this.up1 = e,
        e.source = "kg_panel2_up1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    s.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "se_tab",
        e.scaleX = 1,
        e.scaleY = 1,
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    s._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_keyin_png",
        e.touchEnabled = !1,
        e.x = 33,
        e.y = 17,
        e
    },
    s.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "kg_panel2_tuceng_16_png",
        e.visible = !0,
        e.x = 95,
        e.y = 19,
        e
    },
    s.hasGet1_i = function() {
        var e = new eui.Image;
        return this.hasGet1 = e,
        e.source = "kg_panel2_zu_38_png",
        e.touchEnabled = !1,
        e.x = 90,
        e.y = 32,
        e
    },
    s._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 23,
        e.y = 83,
        e.elementsContent = [this.down2_i(), this.up2_i(), this.rb_2_i(), this._Image5_i(), this.btnWu_i(), this.hasGet3_i()],
        e
    },
    s.down2_i = function() {
        var e = new eui.Image;
        return this.down2 = e,
        e.source = "kg_panel2_down2_png",
        e.visible = !1,
        e.x = 8,
        e.y = 8,
        e
    },
    s.up2_i = function() {
        var e = new eui.Image;
        return this.up2 = e,
        e.source = "kg_panel2_up2_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    s.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "se_tab",
        e.scaleX = 1,
        e.scaleY = 1,
        e.value = "2",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.skinName = n,
        e
    },
    s._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_diwu_png",
        e.touchEnabled = !1,
        e.x = 22,
        e.y = 17,
        e
    },
    s.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "kg_panel2_diwujineng_png",
        e.x = 88,
        e.y = 22,
        e
    },
    s.hasGet3_i = function() {
        var e = new eui.Image;
        return this.hasGet3 = e,
        e.source = "kg_panel2_zu_38_png",
        e.touchEnabled = !1,
        e.x = 78,
        e.y = 32,
        e
    },
    s._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 22,
        e.y = 166,
        e.elementsContent = [this.down3_i(), this.up3_i(), this.rb_3_i(), this._Image6_i(), this.btnTe_i(), this.hasGet2_i()],
        e
    },
    s.down3_i = function() {
        var e = new eui.Image;
        return this.down3 = e,
        e.source = "kg_panel2_down3_png",
        e.visible = !1,
        e.x = 8,
        e.y = 8,
        e
    },
    s.up3_i = function() {
        var e = new eui.Image;
        return this.up3 = e,
        e.source = "kg_panel2_up3_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    s.rb_3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_3 = e,
        e.groupName = "se_tab",
        e.scaleX = 1,
        e.scaleY = 1,
        e.value = "3",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.skinName = a,
        e
    },
    s._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_texing_png",
        e.touchEnabled = !1,
        e.x = 23,
        e.y = 18,
        e
    },
    s.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "kg_panel2_zstx_png",
        e.x = 90,
        e.y = 28,
        e
    },
    s.hasGet2_i = function() {
        var e = new eui.Image;
        return this.hasGet2 = e,
        e.source = "kg_panel2_zu_38_png",
        e.touchEnabled = !1,
        e.x = 79,
        e.y = 32,
        e
    },
    s._Group4_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 248,
        e.elementsContent = [this.rb_4_i(), this.down4_i(), this.up4_i(), this._Image7_i(), this.btnGift_i(), this.hasGet4_i()],
        e
    },
    s.rb_4_i = function() {
        var e = new eui.RadioButton;
        return this.rb_4 = e,
        e.groupName = "se_tab",
        e.scaleX = 1,
        e.scaleY = 1,
        e.value = "4",
        e.visible = !0,
        e.y = 0,
        e.skinName = r,
        e
    },
    s.down4_i = function() {
        var e = new eui.Image;
        return this.down4 = e,
        e.source = "kg_panel2_down4_png",
        e.visible = !1,
        e.x = 8,
        e.y = 8,
        e
    },
    s.up4_i = function() {
        var e = new eui.Image;
        return this.up4 = e,
        e.source = "kg_panel2_up4_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    s._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_kangxing_png",
        e.touchEnabled = !1,
        e.x = 33,
        e.y = 18,
        e
    },
    s.btnGift_i = function() {
        var e = new eui.Image;
        return this.btnGift = e,
        e.source = "kg_panel2_tuceng_15_png",
        e.x = 95,
        e.y = 22,
        e
    },
    s.hasGet4_i = function() {
        var e = new eui.Image;
        return this.hasGet4 = e,
        e.source = "kg_panel2_zu_38_png",
        e.touchEnabled = !1,
        e.x = 90,
        e.y = 33,
        e
    },
    s.bar_i = function() {
        var e = new eui.Group;
        return this.bar = e,
        e.x = 288,
        e.y = 476,
        e.elementsContent = [this._Image8_i(), this.bars_i(), this.jindu_i(), this.txt_progress_i()],
        e
    },
    s._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_di_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    s.bars_i = function() {
        var e = new eui.ProgressBar;
        return this.bars = e,
        e.maximum = 100,
        e.value = 0,
        e.width = 442,
        e.x = 6,
        e.y = 8,
        e.skinName = o,
        e
    },
    s.jindu_i = function() {
        var e = new eui.Image;
        return this.jindu = e,
        e.source = "kg_panel2_jindu_png",
        e.visible = !1,
        e.x = 6,
        e.y = 8,
        e
    },
    s.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "100%",
        e.textColor = 16774231,
        e.x = 470,
        e.y = 5,
        e
    },
    s._Image9_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(143, 10, 143, 10),
        e.source = "kg_panel2_juxing_92_png",
        e.width = 440,
        e.x = 336,
        e.y = 440,
        e
    },
    s._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_jx_9042_kb_png",
        e.x = 339,
        e.y = 447,
        e
    },
    s._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_jx_9042_kb_2_png",
        e.x = 771,
        e.y = 447,
        e
    },
    s.txt_info_i = function() {
        var e = new eui.Label;
        return this.txt_info = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "最后一击战胜boss的伤害高于1000进度+5%",
        e.textAlign = "center",
        e.textColor = 6153817,
        e.width = 425,
        e.x = 344,
        e.y = 445,
        e
    },
    s.btnJihuo_i = function() {
        var e = new eui.Image;
        return this.btnJihuo = e,
        e.source = "kg_panel2_btnjihuo_png",
        e.x = 835,
        e.y = 473,
        e
    },
    s.lift_i = function() {
        var e = new eui.Group;
        return this.lift = e,
        e.x = 55,
        e.y = 118,
        e.elementsContent = [this._Image12_i(), this._Image13_i(), this._Label3_i(), this._Image14_i(), this._Label4_i(), this.txt_name_i(), this.show1_i(), this.show2_i(), this.show3_i(), this.show4_i()],
        e
    },
    s._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_jx_9042_png",
        e.x = 3,
        e.y = 3,
        e
    },
    s._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_xz_18_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    s._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "背包内放入",
        e.textColor = 16767957,
        e.x = 19,
        e.y = 118,
        e
    },
    s._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kg_panel2_jx_9045_png",
        e.x = 124,
        e.y = 19,
        e
    },
    s._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "可以降低难度",
        e.textColor = 16755113,
        e.x = 15,
        e.y = 159,
        e
    },
    s.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "王我奶奶你",
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 80,
        e.x = 22,
        e.y = 141,
        e
    },
    s.show1_i = function() {
        var e = new eui.Image;
        return this.show1 = e,
        e.source = "kg_panel2_3205_png",
        e.visible = !1,
        e.x = 12,
        e.y = 11,
        e
    },
    s.show2_i = function() {
        var e = new eui.Image;
        return this.show2 = e,
        e.source = "kg_panel2_3142_png",
        e.visible = !1,
        e.x = 12,
        e.y = 11,
        e
    },
    s.show3_i = function() {
        var e = new eui.Image;
        return this.show3 = e,
        e.source = "kg_panel2_3170_png",
        e.visible = !1,
        e.x = 12,
        e.y = 11,
        e
    },
    s.show4_i = function() {
        var e = new eui.Image;
        return this.show4 = e,
        e.source = "kg_panel2_3190_png",
        e.visible = !0,
        e.x = 12,
        e.y = 11,
        e
    },
    s.btnTiozhan_i = function() {
        var e = new eui.Image;
        return this.btnTiozhan = e,
        e.height = 46,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "kg_panel2_btntiaozhan_png",
        e.width = 134,
        e.x = 573,
        e.y = 507.00000000000006,
        e
    },
    s.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.height = 46,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "kg_panel2_btnonekey_png",
        e.width = 134,
        e.x = 394,
        e.y = 507.00000000000006,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WinpopSkin.exml"] = window.kingGaia.WinpopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "txt_info1", "txt_average1", "info1", "txt_info2", "txt_average2", "info2", "txt_info4", "txt_average4", "info3", "txt_info3", "txt_average3", "info4", "txt_info5", "txt_average5", "info5", "jiangpai1", "jiangpai2", "jiangpai3", "jiangpai4", "jiangpai5", "rec1", "rec2", "rec3", "rec4", "rec5", "icon1_1", "icon1_2", "icon1_3", "icon1_4", "txt_name11", "txt_name12", "txt_name13", "txt_name14", "type1", "icon2_1", "icon2_2", "icon2_3", "txt_name21", "txt_name22", "txt_name23", "type2", "reward", "btnGet", "txt_record", "win"],
        this.height = 526,
        this.width = 917,
        this.elementsContent = [this.win_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.win_i = function() {
        var e = new eui.Group;
        return this.win = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnClose_i(), this.info1_i(), this.info2_i(), this.info3_i(), this.info4_i(), this.info5_i(), this.jiangpai1_i(), this.jiangpai2_i(), this.jiangpai3_i(), this.jiangpai4_i(), this.jiangpai5_i(), this.rec1_i(), this.rec2_i(), this.rec3_i(), this.rec4_i(), this.rec5_i(), this.reward_i(), this.btnGet_i(), this._Image19_i(), this.txt_record_i(), this._Image20_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 523,
        e.scale9Grid = new egret.Rectangle(3, 2, 3, 3),
        e.source = "kg_winpop_zu_18_png",
        e.width = 917,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "kg_winpop_btnclose_png",
        e.x = 872,
        e.y = 4,
        e
    },
    i.info1_i = function() {
        var e = new eui.Group;
        return this.info1 = e,
        e.x = 36,
        e.y = 71,
        e.elementsContent = [this._Image2_i(), this._Label1_i(), this.txt_info1_i(), this.txt_average1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_zu_11_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0058117691039,
        e.text = "单回合最高伤害",
        e.textColor = 16767957,
        e.x = 5,
        e.y = 125,
        e
    },
    i.txt_info1_i = function() {
        var e = new eui.Label;
        return this.txt_info1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "XXXXXXX",
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 82,
        e.x = 42,
        e.y = 155,
        e
    },
    i.txt_average1_i = function() {
        var e = new eui.Label;
        return this.txt_average1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "生涯平均：XXXXXXX",
        e.textColor = 16755113,
        e.x = 5,
        e.y = 182,
        e
    },
    i.info2_i = function() {
        var e = new eui.Group;
        return this.info2 = e,
        e.x = 207,
        e.y = 71,
        e.elementsContent = [this._Image3_i(), this._Label2_i(), this.txt_info2_i(), this.txt_average2_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_zu_11_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9595702404893,
        e.text = "累计承受伤害",
        e.textColor = 16767957,
        e.x = 16,
        e.y = 125,
        e
    },
    i.txt_info2_i = function() {
        var e = new eui.Label;
        return this.txt_info2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "XXXXXXX",
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 82,
        e.x = 43,
        e.y = 155,
        e
    },
    i.txt_average2_i = function() {
        var e = new eui.Label;
        return this.txt_average2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "生涯平均：XXXXXXX",
        e.textColor = 16755113,
        e.x = 6,
        e.y = 182,
        e
    },
    i.info3_i = function() {
        var e = new eui.Group;
        return this.info3 = e,
        e.x = 379,
        e.y = 71,
        e.elementsContent = [this._Image4_i(), this._Label3_i(), this.txt_info4_i(), this.txt_average4_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_zu_11_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9595702404893,
        e.text = "消耗回合数",
        e.textColor = 16767957,
        e.x = 26,
        e.y = 125,
        e
    },
    i.txt_info4_i = function() {
        var e = new eui.Label;
        return this.txt_info4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "XXXXXXX",
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 82,
        e.x = 43,
        e.y = 155,
        e
    },
    i.txt_average4_i = function() {
        var e = new eui.Label;
        return this.txt_average4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "生涯平均：XXXXXXX",
        e.textColor = 16755113,
        e.x = 6,
        e.y = 182,
        e
    },
    i.info4_i = function() {
        var e = new eui.Group;
        return this.info4 = e,
        e.x = 551,
        e.y = 71,
        e.elementsContent = [this._Image5_i(), this._Label4_i(), this.txt_info3_i(), this.txt_average3_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_zu_11_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9595702404893,
        e.text = "使用精灵数",
        e.textColor = 16767957,
        e.x = 26,
        e.y = 125,
        e
    },
    i.txt_info3_i = function() {
        var e = new eui.Label;
        return this.txt_info3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "XXXXXXX",
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 82,
        e.x = 42,
        e.y = 155,
        e
    },
    i.txt_average3_i = function() {
        var e = new eui.Label;
        return this.txt_average3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "生涯平均：XXXXXXX",
        e.textColor = 16755113,
        e.x = 5,
        e.y = 182,
        e
    },
    i.info5_i = function() {
        var e = new eui.Group;
        return this.info5 = e,
        e.x = 722,
        e.y = 71,
        e.elementsContent = [this._Image6_i(), this._Label5_i(), this.txt_info5_i(), this.txt_average5_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_zu_11_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9595702404893,
        e.text = "阵亡精灵数",
        e.textColor = 16767957,
        e.x = 26,
        e.y = 125,
        e
    },
    i.txt_info5_i = function() {
        var e = new eui.Label;
        return this.txt_info5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "XXXXXXX",
        e.textAlign = "center",
        e.textColor = 16774231,
        e.width = 82,
        e.x = 43,
        e.y = 155,
        e
    },
    i.txt_average5_i = function() {
        var e = new eui.Label;
        return this.txt_average5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "生涯平均：XXXXXXX",
        e.textColor = 16755113,
        e.x = 6,
        e.y = 182,
        e
    },
    i.jiangpai1_i = function() {
        var e = new eui.Image;
        return this.jiangpai1 = e,
        e.source = "",
        e.x = 65,
        e.y = 83,
        e
    },
    i.jiangpai2_i = function() {
        var e = new eui.Image;
        return this.jiangpai2 = e,
        e.source = "",
        e.x = 237,
        e.y = 83,
        e
    },
    i.jiangpai3_i = function() {
        var e = new eui.Image;
        return this.jiangpai3 = e,
        e.source = "",
        e.x = 408,
        e.y = 83,
        e
    },
    i.jiangpai4_i = function() {
        var e = new eui.Image;
        return this.jiangpai4 = e,
        e.source = "",
        e.x = 579,
        e.y = 83,
        e
    },
    i.jiangpai5_i = function() {
        var e = new eui.Image;
        return this.jiangpai5 = e,
        e.source = "",
        e.x = 751,
        e.y = 83,
        e
    },
    i.rec1_i = function() {
        var e = new eui.Image;
        return this.rec1 = e,
        e.source = "kg_winpop_zuijiajilu_png",
        e.x = 31,
        e.y = 61,
        e
    },
    i.rec2_i = function() {
        var e = new eui.Image;
        return this.rec2 = e,
        e.source = "kg_winpop_zuijiajilu_png",
        e.x = 203,
        e.y = 61,
        e
    },
    i.rec3_i = function() {
        var e = new eui.Image;
        return this.rec3 = e,
        e.source = "kg_winpop_zuijiajilu_png",
        e.x = 375,
        e.y = 61,
        e
    },
    i.rec4_i = function() {
        var e = new eui.Image;
        return this.rec4 = e,
        e.source = "kg_winpop_zuijiajilu_png",
        e.x = 546,
        e.y = 61,
        e
    },
    i.rec5_i = function() {
        var e = new eui.Image;
        return this.rec5 = e,
        e.source = "kg_winpop_zuijiajilu_png",
        e.x = 718,
        e.y = 61,
        e
    },
    i.reward_i = function() {
        var e = new eui.Group;
        return this.reward = e,
        e.x = 37,
        e.y = 323,
        e.elementsContent = [this._Image7_i(), this.type1_i(), this.type2_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_jx_9043_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.type1_i = function() {
        var e = new eui.Group;
        return this.type1 = e,
        e.visible = !1,
        e.x = 58,
        e.y = 22,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this.icon1_1_i(), this.icon1_2_i(), this.icon1_3_i(), this.icon1_4_i(), this.txt_name11_i(), this.txt_name12_i(), this.txt_name13_i(), this.txt_name14_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_dikuang_png",
        e.x = 122,
        e.y = 0,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_dikuang_png",
        e.x = 240,
        e.y = 0,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_dikuang_png",
        e.x = 358,
        e.y = 0,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_sljl_png",
        e.x = 0,
        e.y = 28,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_dikuang_png",
        e.x = 633,
        e.y = 0,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_zu_19_png",
        e.x = 510,
        e.y = 15,
        e
    },
    i.icon1_1_i = function() {
        var e = new eui.Image;
        return this.icon1_1 = e,
        e.height = 55,
        e.width = 55,
        e.x = 135,
        e.y = 15,
        e
    },
    i.icon1_2_i = function() {
        var e = new eui.Image;
        return this.icon1_2 = e,
        e.height = 55,
        e.width = 55,
        e.x = 253,
        e.y = 15,
        e
    },
    i.icon1_3_i = function() {
        var e = new eui.Image;
        return this.icon1_3 = e,
        e.height = 55,
        e.width = 55,
        e.x = 371,
        e.y = 15,
        e
    },
    i.icon1_4_i = function() {
        var e = new eui.Image;
        return this.icon1_4 = e,
        e.height = 55,
        e.width = 55,
        e.x = 646,
        e.y = 15,
        e
    },
    i.txt_name11_i = function() {
        var e = new eui.Label;
        return this.txt_name11 = e,
        e.fontFamily = "MFShangHei",
        e.size = 12,
        e.text = "名字啊啊",
        e.textAlign = "right",
        e.textColor = 16767958,
        e.x = 140,
        e.y = 85,
        e
    },
    i.txt_name12_i = function() {
        var e = new eui.Label;
        return this.txt_name12 = e,
        e.fontFamily = "MFShangHei",
        e.size = 12,
        e.text = "名字啊啊",
        e.textAlign = "right",
        e.textColor = 16767958,
        e.x = 258,
        e.y = 85,
        e
    },
    i.txt_name13_i = function() {
        var e = new eui.Label;
        return this.txt_name13 = e,
        e.fontFamily = "MFShangHei",
        e.size = 12,
        e.text = "名字啊啊",
        e.textAlign = "right",
        e.textColor = 16767958,
        e.x = 375,
        e.y = 85,
        e
    },
    i.txt_name14_i = function() {
        var e = new eui.Label;
        return this.txt_name14 = e,
        e.fontFamily = "MFShangHei",
        e.size = 12,
        e.text = "名字啊啊",
        e.textAlign = "right",
        e.textColor = 16767958,
        e.x = 650,
        e.y = 85,
        e
    },
    i.type2_i = function() {
        var e = new eui.Group;
        return this.type2 = e,
        e.visible = !0,
        e.x = 195,
        e.y = 22,
        e.elementsContent = [this._Image14_i(), this._Image15_i(), this._Image16_i(), this.icon2_1_i(), this.icon2_2_i(), this.icon2_3_i(), this._Image17_i(), this.txt_name21_i(), this.txt_name22_i(), this.txt_name23_i()],
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_dikuang_png",
        e.x = 122,
        e.y = 0,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_dikuang_png",
        e.x = 240,
        e.y = 0,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_dikuang_png",
        e.x = 358,
        e.y = 0,
        e
    },
    i.icon2_1_i = function() {
        var e = new eui.Image;
        return this.icon2_1 = e,
        e.height = 55,
        e.width = 55,
        e.x = 135,
        e.y = 15,
        e
    },
    i.icon2_2_i = function() {
        var e = new eui.Image;
        return this.icon2_2 = e,
        e.height = 55,
        e.width = 55,
        e.x = 253,
        e.y = 15,
        e
    },
    i.icon2_3_i = function() {
        var e = new eui.Image;
        return this.icon2_3 = e,
        e.height = 55,
        e.width = 55,
        e.x = 371,
        e.y = 15,
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_sljl_png",
        e.x = 0,
        e.y = 28,
        e
    },
    i.txt_name21_i = function() {
        var e = new eui.Label;
        return this.txt_name21 = e,
        e.fontFamily = "MFShangHei",
        e.size = 12,
        e.text = "名字啊啊",
        e.textAlign = "right",
        e.textColor = 16767958,
        e.x = 140,
        e.y = 85,
        e
    },
    i.txt_name22_i = function() {
        var e = new eui.Label;
        return this.txt_name22 = e,
        e.fontFamily = "MFShangHei",
        e.size = 12,
        e.text = "名字啊啊",
        e.textAlign = "right",
        e.textColor = 16767958,
        e.x = 258,
        e.y = 85,
        e
    },
    i.txt_name23_i = function() {
        var e = new eui.Label;
        return this.txt_name23 = e,
        e.fontFamily = "MFShangHei",
        e.size = 12,
        e.text = "名字啊啊",
        e.textAlign = "right",
        e.textColor = 16767958,
        e.x = 375,
        e.y = 85,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Group;
        return this.btnGet = e,
        e.x = 388,
        e.y = 462,
        e.elementsContent = [this._Image18_i(), this._Label6_i()],
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_yellow_png",
        e.width = 134,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "领取奖励",
        e.textColor = 10181146,
        e.x = 27,
        e.y = 13,
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_zgpf_png",
        e.x = 331,
        e.y = 284,
        e
    },
    i.txt_record_i = function() {
        var e = new eui.Label;
        return this.txt_record = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "XXXXXXX",
        e.textColor = 16774231,
        e.x = 489,
        e.y = 287,
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "kg_winpop_title_kb_png",
        e.x = 373,
        e.y = 6,
        e
    },
    t
} (eui.Skin);