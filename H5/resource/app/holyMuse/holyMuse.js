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
holyMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.service.setValues([e.HolyMuseConst.forever_level1_state, e.HolyMuseConst.forever_level2_stone, e.HolyMuseConst.forever_level3_item1, e.HolyMuseConst.forever_level3_item2, e.HolyMuseConst.forever_level3_item3, e.HolyMuseConst.forever_level3_item4, e.HolyMuseConst.forever_level4_acticeTime, e.HolyMuseConst.forever_level5_bossTime, e.HolyMuseConst.forever_level5_hasWish, e.HolyMuseConst.forever_level5_leftWish, e.HolyMuseConst.forever_levels_state], [e.HolyMuseConst.daily_level1_times, e.HolyMuseConst.daily_level2_times, e.HolyMuseConst.daily_level3_times, e.HolyMuseConst.daily_level4_times, e.HolyMuseConst.daily_level5_times], [e.HolyMuseConst.foreverBitbuf_upgrade], [e.HolyMuseConst.dailyBitbuf_wish]),
            n.init([{
                panelName: e.HolyMuseConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.HolyMuseConst.PANEL1
            },
            {
                panelName: e.HolyMuseConst.PANEL2
            },
            {
                panelName: e.HolyMuseConst.PANEL3
            },
            {
                panelName: e.HolyMuseConst.PANEL4
            },
            {
                panelName: e.HolyMuseConst.PANEL5
            }]),
            n
        }
        return __extends(n, t),
        n.prototype.reShow = function() {
            var e = this;
            this.service.updateValues().then(function() {
                e.destroyed || e.currentPanel && e.currentPanel.update && e.currentPanel.update()
            })
        },
        n
    } (BasicMultPanelModule);
    e.HolyMuse = t,
    __reflect(t.prototype, "holyMuse.HolyMuse")
} (holyMuse || (holyMuse = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
holyMuse; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "holyMuse.HolyMuseMainPanel",
        e.PANEL1 = "holyMuse.HolyMusePanel1",
        e.PANEL2 = "holyMuse.HolyMusePanel2",
        e.PANEL3 = "holyMuse.HolyMusePanel3",
        e.PANEL4 = "holyMuse.HolyMusePanel4",
        e.PANEL5 = "holyMuse.HolyMusePanel5",
        e.holyMuse_CMD = 43735,
        e.forever_levels_state = 102801,
        e.forever_level1_state = 102802,
        e.forever_level4_acticeTime = 102803,
        e.forever_level5_hasWish = 102804,
        e.forever_level5_leftWish = 102805,
        e.forever_level5_bossTime = 102806,
        e.forever_level2_stone = 102807,
        e.forever_level3_item1 = 102808,
        e.forever_level3_item2 = 102809,
        e.forever_level3_item3 = 102810,
        e.forever_level3_item4 = 102811,
        e.daily_level1_times = 13338,
        e.daily_level2_times = 13339,
        e.daily_level3_times = 13340,
        e.daily_level4_times = 13341,
        e.daily_level5_times = 13342,
        e.foreverBitbuf_upgrade = 15286,
        e.dailyBitbuf_wish = 1000353,
        e.exchange_level1 = 10582,
        e.exchange_level2 = 10583,
        e.exchange_level3 = 10584,
        e.exchange_level4 = 10585,
        e.exchange_level5 = 10586,
        e.exchange_stone = 10587,
        e.exchange_item1 = 10588,
        e.exchange_item2 = 10589,
        e.exchange_item3 = 10590,
        e.exchange_item4 = 10591,
        e.exchange_diamond = 10592,
        e.exchange_light = 10593,
        e
    } ();
    e.HolyMuseConst = t,
    __reflect(t.prototype, "holyMuse.HolyMuseConst")
} (holyMuse || (holyMuse = {}));
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
    return new(n || (n = Promise))(function(a, o) {
        function s(e) {
            try {
                u(i.next(e))
            } catch(t) {
                o(t)
            }
        }
        function r(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function u(e) {
            e.done ? a(e.value) : new n(function(t) {
                t(e.value)
            }).then(s, r)
        }
        u((i = i.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (a = 1, o && (s = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(s = s.call(o, n[1])).done) return s;
            switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
                s = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < s[1]) {
                    u.label = s[1],
                    s = n;
                    break
                }
                if (s && u.label < s[2]) {
                    u.label = s[2],
                    u.ops.push(n);
                    break
                }
                s[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            a = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, o, s, r, u = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
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
holyMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.canDown = !0,
            n.new_monster_level_id = 132,
            n.skinName = e.MainSkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(127, this, "hm_main_stms_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230210版本系统功能", "圣瞳缪斯搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "hm_main_btncollected_png": "hm_main_btncollect_png"
            })
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btn1,
            function() {
                StatLogger.log("20230210版本系统功能", "圣瞳缪斯搬迁", "点击主界面-【肩负使命】"),
                t.service.openPanel(e.HolyMuseConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                StatLogger.log("20230210版本系统功能", "圣瞳缪斯搬迁", "点击主界面-【兄妹之战】"),
                t.service.openPanel(e.HolyMuseConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                StatLogger.log("20230210版本系统功能", "圣瞳缪斯搬迁", "点击主界面-【圣灵之助】"),
                t.service.openPanel(e.HolyMuseConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btn4,
            function() {
                StatLogger.log("20230210版本系统功能", "圣瞳缪斯搬迁", "点击主界面-【圣瞳之力】"),
                t.service.openPanel(e.HolyMuseConst.PANEL4)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230210版本系统功能", "圣瞳缪斯搬迁", "点击主界面-【至尊获得】"),
                t.service.openPanel(e.HolyMuseConst.PANEL5)
            },
            this),
            ImageButtonUtil.add(this.btnZhi,
            function() {
                PayManager.doPayFunc(function() {
                    var n = [251526, 251527, 251528, 251529],
                    i = t.service.getValue(e.HolyMuseConst.forever_levels_state);
                    BuyProductManager.buyProductBySocket(n[i],
                    function() {
                        SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [1, 0],
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
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(43735, [1, 0],
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                StatLogger.log("20230210版本系统功能", "圣瞳缪斯搬迁", "点击主界面-【精灵详情】"),
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3465,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
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
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "hm_main_btncollected_png": "hm_main_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.update = function() {
            var t = this.service.getValue(e.HolyMuseConst.forever_levels_state);
            this.btnUp.visible = t >= 5,
            this.btnZhi.visible = 4 > t,
            this.btnGet.visible = 4 == t,
            this.btnUp.visible = 5 == t,
            DisplayUtil.setEnabled(this.btn1, 1 > t, t >= 1),
            DisplayUtil.setEnabled(this.btn2, 1 == t, 1 != t),
            DisplayUtil.setEnabled(this.btn3, 2 == t, 2 != t),
            DisplayUtil.setEnabled(this.btn4, 3 == t, 3 != t),
            this.pass1.visible = t >= 1;
            for (var n = 1; 4 >= n; n++) this["pass" + n].visible = t >= n;
            this.btnHasdone.visible = t >= 5
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    e.HolyMuseMainPanel = t,
    __reflect(t.prototype, "holyMuse.HolyMuseMainPanel")
} (holyMuse || (holyMuse = {}));
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
holyMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.progressValue = 0,
            n.skinName = e.Panel1Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hm_main_jfsm_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.bar_panel1.maximum = 2500,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void(t.isclickFight || (t.isclickFight = !0, SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [615, 0, 0, 0, 0, 0])))
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251530, 1,
                    function() {
                        SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [2, 1],
                        function() {
                            t.service.updateSomeValues([e.HolyMuseConst.daily_level1_times, e.HolyMuseConst.forever_level1_state, e.HolyMuseConst.forever_levels_state]).then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251534, 1,
                    function() {
                        KTool.doExchange(e.HolyMuseConst.exchange_level1, 1,
                        function() {
                            t.service.updateSomeValues([e.HolyMuseConst.daily_level1_times, e.HolyMuseConst.forever_level1_state, e.HolyMuseConst.forever_levels_state]).then(function() {
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
                t.service.updateValues().then(function() {
                    FightManager.isWin && BubblerManager.getInstance().showText("战斗胜利，获得500超能之力")
                })
            },
            this)
        },
        n.prototype.update = function() {
            var t = this;
            this.isclickFight = !1,
            this.leftTime = 10 - this.service.getValue(e.HolyMuseConst.daily_level1_times),
            this.progressValue = this.service.getValue(e.HolyMuseConst.forever_level1_state);
            var n = this.service.getValue(e.HolyMuseConst.forever_levels_state),
            i = n >= 1;
            if (this.txtLeftTime.text = "今日剩余免费游戏次数：" + this.leftTime, this.bar_panel1.value = this.progressValue, this.txt_Progress.text = this.progressValue + "/2500", i) {
                EventManager.removeAll(this);
                var a = "已完成<font color='#ff0000'>肩负使命</font>关卡,至尊获得圣瞳缪斯价格降低为<font color='#ff0000'>898</font>钻石";
                Alarm.show(a,
                function() {
                    t.service.openPanel(e.HolyMuseConst.PANEL2)
                })
            }
            DisplayUtil.setEnabled(this.btnAdd, 10 != this.leftTime, 10 == this.leftTime)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeAll(this)
        },
        n
    } (BasicPanel);
    e.HolyMusePanel1 = t,
    __reflect(t.prototype, "holyMuse.HolyMusePanel1")
} (holyMuse || (holyMuse = {}));
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
holyMuse; !
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
            this.initOldPveBtnClose(0, this, "hm_main_xmzz_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.bar_panel2.maximum = 20,
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
                    KTool.buyProductByCallback(251539, 1,
                    function() {
                        KTool.doExchange(e.HolyMuseConst.exchange_level2, 1,
                        function() {
                            t.service.updateSomeValues([e.HolyMuseConst.daily_level2_times, e.HolyMuseConst.forever_level2_stone, e.HolyMuseConst.forever_levels_state]).then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251531, 1,
                    function() {
                        SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [2, 2],
                        function() {
                            t.service.updateSomeValues([e.HolyMuseConst.daily_level2_times, e.HolyMuseConst.forever_level2_stone, e.HolyMuseConst.forever_levels_state]).then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this);
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnFast" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(251535 + n, 1,
                        function() {
                            SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [4, n],
                            function() {
                                t.service.updateSomeValues([e.HolyMuseConst.daily_level2_times, e.HolyMuseConst.forever_level2_stone, e.HolyMuseConst.forever_levels_state]).then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    t)
                },
                i),
                ImageButtonUtil.add(i["btnFight" + n],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void FightManager.fightNoMapBoss(10830 + n)
                },
                i)
            },
            i = this, a = 1; 3 >= a; a++) n(a)
        },
        n.prototype.update = function() {
            var t = this;
            this.leftTime = 6 - this.service.getValue(e.HolyMuseConst.daily_level2_times),
            this.txt_leftTime.text = "今日剩余免费游戏次数：" + this.leftTime;
            var n = this.service.getValue(e.HolyMuseConst.forever_level2_stone);
            this.bar_panel2.value = n,
            this.txt_Progress.text = n + "/20";
            var i = this.service.getValue(e.HolyMuseConst.forever_levels_state),
            a = i >= 2;
            if (a) {
                var o = "已完成<font color='#ff0000'>兄妹之战</font>关卡,至尊获得圣瞳缪斯价格降低为<font color='#ff0000'>758</font>钻石";
                Alarm.show(o,
                function() {
                    t.service.openPanel(e.HolyMuseConst.PANEL3)
                }),
                EventManager.removeAll(this)
            }
            DisplayUtil.setEnabled(this.btnAdd, 6 != this.leftTime, 6 == this.leftTime)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    e.HolyMusePanel2 = t,
    __reflect(t.prototype, "holyMuse.HolyMusePanel2")
} (holyMuse || (holyMuse = {}));
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
holyMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.skinName = e.Panel3Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hm_main_slzz_png",
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
                    KTool.buyProductByCallback(251545, 1,
                    function() {
                        KTool.doExchange(e.HolyMuseConst.exchange_level3, 1,
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
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251532, 1,
                    function() {
                        SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [2, 3],
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
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnBeginFight_" + n],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void FightManager.fightNoMapBoss(10833 + n)
                },
                i),
                ImageButtonUtil.add(i["btnFast" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(251544, 1,
                        function() {
                            SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [5, n],
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
                ImageButtonUtil.add(i["btnAddItem" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        var e = {};
                        e.type = "product_diamond",
                        e.ins = {
                            iconID: 1714496 + n,
                            productID: 251539 + n
                        },
                        e.caller = t,
                        e.callBack = function(e, i) {
                            KTool.buyProductByCallback(251539 + n, i,
                            function() {
                                KTool.doExchange(10587 + n, i,
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
                i)
            },
            i = this, a = 1; 4 >= a; a++) n(a)
        },
        n.prototype.update = function() {
            var t = this;
            this.leftTime = 15 - this.service.getValue(e.HolyMuseConst.daily_level3_times),
            this.txt_leftTime.text = "今日剩余免费游戏次数：" + this.leftTime;
            var n = this.service.getValue(e.HolyMuseConst.forever_level3_item1),
            i = this.service.getValue(e.HolyMuseConst.forever_level3_item2),
            a = this.service.getValue(e.HolyMuseConst.forever_level3_item3),
            o = this.service.getValue(e.HolyMuseConst.forever_level3_item4);
            this.txtNum1.text = n + "/20",
            this.txtNum2.text = i + "/20",
            this.txtNum3.text = a + "/20",
            this.txtNum4.text = o + "/20";
            var s = this.service.getValue(e.HolyMuseConst.forever_levels_state),
            r = s >= 3;
            if (r) {
                var u = "已完成<font color='#ff0000'>圣灵之助</font>关卡,至尊获得圣瞳缪斯价格降低为<font color='#ff0000'>598</font>钻石";
                Alarm.show(u,
                function() {
                    t.service.openPanel(e.HolyMuseConst.PANEL4)
                }),
                EventManager.removeAll(this)
            }
            DisplayUtil.setEnabled(this.btnAdd, 15 != this.leftTime, 15 == this.leftTime)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeAll(this)
        },
        n
    } (BasicPanel);
    e.HolyMusePanel3 = t,
    __reflect(t.prototype, "holyMuse.HolyMusePanel3")
} (holyMuse || (holyMuse = {}));
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
holyMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.actionTime = 0,
            n.showRate = [0, 5, 10, 20, 25, 30, 40, 45, 50, 65, 80, 90, 100, 100, 100],
            n.needItem = [1, 1, 1, 2, 3, 4, 5, 6],
            n.skinName = e.Panel4Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hm_main_stzl_png",
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
                    KTool.buyProductByCallback(251549, 1,
                    function() {
                        KTool.doExchange(e.HolyMuseConst.exchange_level4, 1,
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
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251533, 1,
                    function() {
                        SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [2, 4],
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
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnFight" + n],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void FightManager.fightNoMapBoss(10837 + n)
                },
                i),
                ImageButtonUtil.add(i["btnFast" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(251548, 1,
                        function() {
                            SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [6, n],
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
                ImageButtonUtil.add(i["btnAddItem" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        var e = {};
                        e.type = "product_diamond",
                        e.ins = {
                            iconID: 1714500 + n,
                            productID: 251545 + n
                        },
                        e.caller = t,
                        e.callBack = function(e, i) {
                            KTool.buyProductByCallback(251545 + n, i,
                            function() {
                                KTool.doExchange(10591 + n, i,
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
                i)
            },
            i = this, a = 1; 2 >= a; a++) n(a);
            ImageButtonUtil.add(this.btnAction,
            function() {
                var n = t.actionTime > 7 ? 7 : t.actionTime;
                return ItemManager.getNumByID(1714501) < t.needItem[n] || ItemManager.getNumByID(1714502) < t.needItem[n] ? void BubblerManager.getInstance().showText("所需道具数量不足!") : void SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [6, 3],
                function() {
                    t.service.updateValues().then(function() {
                        var n = t.service.getValue(e.HolyMuseConst.forever_levels_state),
                        i = n >= 4;
                        if (i) t.update();
                        else {
                            var a = "激活失败，<font color='#ff0000'>成功概率提升</font>，请继续努力！";
                            Alarm.show(a,
                            function() {
                                t.update()
                            })
                        }
                    })
                })
            })
        },
        n.prototype.update = function() {
            var t = this;
            this.leftTime = 6 - this.service.getValue(e.HolyMuseConst.daily_level4_times),
            this.txt_leftTime.text = "今日剩余免费游戏次数：" + this.leftTime,
            this.actionTime = this.service.getValue(e.HolyMuseConst.forever_level4_acticeTime);
            var n = this.service.getValue(e.HolyMuseConst.forever_levels_state),
            i = n >= 4;
            if (i) {
                var a = "已完成<font color='#ff0000'>圣瞳之力</font>关卡";
                Alarm.show(a,
                function() {
                    t.service.backToMainPanel()
                })
            }
            var o = this.actionTime;
            this.txt_winRate.text = this.showRate[o] + "%";
            var s = this.actionTime > 7 ? 7 : this.actionTime,
            r = ItemManager.getNumByID(1714501),
            u = ItemManager.getNumByID(1714502),
            _ = r >= this.needItem[s] ? 589568 : 16711680;
            this.txt_item1.textFlow = [{
                text: r + "",
                style: {
                    textColor: _
                }
            },
            {
                text: "/" + this.needItem[s]
            }];
            var l = u >= this.needItem[s] ? 589568 : 16711680;
            this.txt_item2.textFlow = [{
                text: u + "",
                style: {
                    textColor: l
                }
            },
            {
                text: "/" + this.needItem[s]
            }],
            DisplayUtil.setEnabled(this.btnAdd, 6 != this.leftTime, 6 == this.leftTime)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    e.HolyMusePanel4 = t,
    __reflect(t.prototype, "holyMuse.HolyMusePanel4")
} (holyMuse || (holyMuse = {}));
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
holyMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.drawTime = 0,
            n.skinName = e.Panel5Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "hm_main_nlts_png",
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
                    KTool.buyProductByCallback(251552, 1,
                    function() {
                        KTool.doExchange(e.HolyMuseConst.exchange_level5, 1,
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
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                return PetManager.isDefaultPet(3465) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251551, 1,
                    function() {
                        SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [7, 1],
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t) : void Alarm.show("请将圣瞳缪斯放于首发！",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void FightManager.fightNoMapBoss(10840)
            },
            this),
            ImageButtonUtil.add(this.btnDraw,
            function() {
                t.drawTime <= 0 && BubblerManager.getInstance().showText("祈祷次数不足，战胜圣瞳缪斯可获得祈祷次数"),
                SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [7, 2],
                function() {
                    t.service.updateValues().then(function() {
                        var n = 1 == t.service.getValue(e.HolyMuseConst.foreverBitbuf_upgrade);
                        if (n) Alarm.show("祈祷生效！请领取谱尼的祝福！");
                        else {
                            var i = "祈祷失败，<font color='#ff0000'>成功概率提升</font>，请继续努力！";
                            Alarm.show(i)
                        }
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnFreeGet,
            function() {
                if (!PetManager.isDefaultPet(3465)) return void Alarm.show("请将圣瞳缪斯放于首发！",
                function() {
                    ModuleManager.showModuleByID(10)
                });
                var n = 1 == t.service.getValue(e.HolyMuseConst.foreverBitbuf_upgrade);
                n && SocketConnection.sendByQueue(e.HolyMuseConst.holyMuse_CMD, [7, 3],
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                t.service.showPetEff(3465)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 31261
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(41055) ? (e = {},
                e.ins = 41055, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 41055, tipsPop.TipsPop.openItemPop(e))
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                t.service.updateValues().then(function() {
                    if (FightManager.isWin) {
                        var n = t.service.getValue(e.HolyMuseConst.forever_level5_bossTime);
                        if (0 == n) {
                            var i = "挑战成功，<font color='#ff0000'>获得1次祈祷机会！</font>";
                            BubblerManager.getInstance().showText(i, !0)
                        }
                    }
                    t.update()
                })
            },
            this)
        },
        n.prototype.update = function() {
            var t = this.service.getValue(e.HolyMuseConst.forever_levels_state),
            n = t >= 6;
            this.leftTime = 6 - this.service.getValue(e.HolyMuseConst.daily_level5_times),
            this.drawTime = this.service.getValue(e.HolyMuseConst.forever_level5_leftWish);
            var i = 1 == this.service.getValue(e.HolyMuseConst.dailyBitbuf_wish),
            a = this.service.getValue(e.HolyMuseConst.forever_level5_bossTime),
            o = this.service.getValue(e.HolyMuseConst.forever_level5_hasWish),
            s = 1 == this.service.getValue(e.HolyMuseConst.foreverBitbuf_upgrade);
            i || this.drawTime++;
            var r = 1 == this.service.getValue(e.HolyMuseConst.foreverBitbuf_upgrade);
            this.txt_leftTime.text = "今日剩余免费游戏次数：" + this.leftTime,
            this.txt_leftDrawTime.text = "剩余祈祷次数：" + this.drawTime,
            this.txt_winTime.text = "已战胜：" + a + "/2",
            this.txt_drawRate.text = 5 * o + 5 + "%",
            DisplayUtil.setEnabled(this.btnDraw, this.drawTime > 0 && !s, 0 == this.drawTime || s),
            DisplayUtil.setEnabled(this.btnAdd, 6 != this.leftTime, 6 == this.leftTime);
            var u = !n && r;
            DisplayUtil.setEnabled(this.btnFreeGet, u, !u),
            n && this.service.backToMainPanel()
        },
        n.prototype.destroy = function() {
            EventManager.removeAll(this),
            t.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    e.HolyMusePanel5 = t,
    __reflect(t.prototype, "holyMuse.HolyMusePanel5")
} (holyMuse || (holyMuse = {})),
window.holyMuse = window.holyMuse || {};
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
generateEUI.paths["resource/eui_skins/MainSkin.exml"] = window.holyMuse.MainSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnCollect", "btnInfo", "btnHasdone", "btnZhi", "btnUp", "btnGet", "btn1", "pass1", "btn2", "pass2", "btn4", "btn3", "pass4", "pass3"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.btnCollect_i(), this.btnInfo_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "hm_main_bg_jpg",
        e.visible = !0,
        e.percentWidth = 100,
        e.y = 0,
        e
    },
    n.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.left = 30,
        e.source = "hm_main_btncollect_png",
        e.y = 500,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.left = 30,
        e.source = "hm_main_btninfo_png",
        e.x = 30,
        e.y = 565,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -6,
        e.touchEnabled = !1,
        e.width = 1050,
        e.y = 188,
        e.elementsContent = [this.btnHasdone_i(), this.btnZhi_i(), this.btnUp_i(), this.btnGet_i(), this.btn1_i(), this.pass1_i(), this.btn2_i(), this.pass2_i(), this.btn4_i(), this.btn3_i(), this.pass4_i(), this.pass3_i()],
        e
    },
    n.btnHasdone_i = function() {
        var e = new eui.Image;
        return this.btnHasdone = e,
        e.source = "hm_main_hasGet_png",
        e.x = 456,
        e.y = 269,
        e
    },
    n.btnZhi_i = function() {
        var e = new eui.Image;
        return this.btnZhi = e,
        e.source = "hm_main_btnzhi_png",
        e.x = 410,
        e.y = 355,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "hm_main_nlds_png",
        e.x = 455,
        e.y = 370,
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "hm_main_btnGet_png",
        e.x = 455,
        e.y = 370,
        e
    },
    n.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "hm_main_btn1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.source = "hm_main_hasDone_png",
        e.x = 11,
        e.y = 0,
        e
    },
    n.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "hm_main_btn2_png",
        e.x = 104,
        e.y = 180,
        e
    },
    n.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.source = "hm_main_hasDone_png",
        e.x = 115,
        e.y = 180,
        e
    },
    n.btn4_i = function() {
        var e = new eui.Image;
        return this.btn4 = e,
        e.source = "hm_main_btn3_png",
        e.x = 857,
        e.y = 0,
        e
    },
    n.btn3_i = function() {
        var e = new eui.Image;
        return this.btn3 = e,
        e.source = "hm_main_btn4_png",
        e.x = 729,
        e.y = 180,
        e
    },
    n.pass4_i = function() {
        var e = new eui.Image;
        return this.pass4 = e,
        e.source = "hm_main_hasDone_png",
        e.x = 868,
        e.y = 0,
        e
    },
    n.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.source = "hm_main_hasDone_png",
        e.x = 740,
        e.y = 180,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.holyMuse.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnOnekey", "btnFight", "txtLeftTime", "btnAdd", "bar_panel1", "txt_Progress"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.btnOnekey_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "hm_panel1_juxing_903_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(94, 5, 93, 5),
            e.source = "hm_panel1_jx_903thumb_png",
            e.visible = !0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.percentHeight = 100,
        e.source = "hm_panel1_panel1bg_png",
        e.percentWidth = 100,
        e.y = 0,
        e
    },
    i.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.right = 80,
        e.source = "hm_panel1_btnonekey_png",
        e.y = 537,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 14,
        e.y = 438,
        e.elementsContent = [this.btnFight_i(), this.txtLeftTime_i(), this.btnAdd_i(), this._Image2_i(), this.bar_panel1_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.txt_Progress_i()],
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "hm_panel1_btnfight_png",
        e.x = 249,
        e.y = 87,
        e
    },
    i.txtLeftTime_i = function() {
        var e = new eui.Label;
        return this.txtLeftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余免费游戏次数：99",
        e.textColor = 16769906,
        e.x = 208,
        e.y = 146,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 453,
        e.y = 141,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel1_tc_14_kb_png",
        e.visible = !0,
        e.x = 36,
        e.y = 28,
        e
    },
    i.bar_panel1_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_panel1 = e,
        e.value = 100,
        e.x = 120,
        e.y = 44,
        e.skinName = n,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel1__hd_zl_png",
        e.x = 553,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel1_cn_zl_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel1_juxing_905_png",
        e.visible = !0,
        e.x = 213,
        e.y = 13,
        e
    },
    i.txt_Progress_i = function() {
        var e = new eui.Label;
        return this.txt_Progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "XXXX/2500",
        e.textColor = 16769906,
        e.x = 276,
        e.y = 21,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.holyMuse.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_leftTime", "btnAdd", "bar_panel2", "txt_Progress", "btnBag", "btnCure", "btnOnekey", "btnFight1", "btnFast1", "diff1", "btnFight2", "btnFast2", "diff2", "btnFight3", "btnFast3", "diff3", "panel2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.panel2_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "hm_panel1_juxing_903_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(94, 5, 93, 5),
            e.source = "hm_panel2_jx_903_kb_png",
            e.visible = !0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "hm_panel2_bg_jpg",
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.panel2_i = function() {
        var e = new eui.Group;
        return this.panel2 = e,
        e.horizontalCenter = 4,
        e.width = 1110,
        e.y = 46,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_leftTime_i(), this.btnAdd_i(), this._Image3_i(), this.bar_panel2_i(), this._Image4_i(), this.txt_Progress_i(), this._Image5_i(), this._Image6_i(), this.btnBag_i(), this.btnCure_i(), this.btnOnekey_i(), this.diff1_i(), this.diff2_i(), this.diff3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_panel2title_png",
        e.x = 288,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_juxing_904_png",
        e.x = 249,
        e.y = 531,
        e
    },
    i.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余免费游戏次数：99",
        e.textColor = 16769906,
        e.x = 423,
        e.y = 538,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 668,
        e.y = 533,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel1_tc_14_kb_png",
        e.visible = !0,
        e.x = 226,
        e.y = 487,
        e
    },
    i.bar_panel2_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_panel2 = e,
        e.maximum = 20,
        e.visible = !0,
        e.x = 384,
        e.y = 503,
        e.skinName = n,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel1_juxing_905_png",
        e.visible = !0,
        e.x = 446,
        e.y = 472,
        e
    },
    i.txt_Progress_i = function() {
        var e = new eui.Label;
        return this.txt_Progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "XX/20",
        e.textColor = 16769906,
        e.x = 528,
        e.y = 480,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_nls_png",
        e.x = 305,
        e.y = 492,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_1714496_png",
        e.x = 287,
        e.y = 497,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hm_panel2_jlbb_png",
        e.x = 0,
        e.y = 397,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hm_panel2_jlhf_png",
        e.x = 0,
        e.y = 487,
        e
    },
    i.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "hm_panel1_btnonekey_png",
        e.x = 1010,
        e.y = 491,
        e
    },
    i.diff1_i = function() {
        var e = new eui.Group;
        return this.diff1 = e,
        e.x = 80,
        e.y = 125,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Label1_i(), this._Image10_i(), this.btnFight1_i(), this.btnFast1_i(), this._Image11_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_zu_8_png",
        e.x = 0,
        e.y = 177,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_tuceng_16_png",
        e.x = 80,
        e.y = 124,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_jx_904_kb_png",
        e.x = 45,
        e.y = 282,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜获得      x1",
        e.textColor = 16748134,
        e.x = 100,
        e.y = 287,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_1714496_png",
        e.x = 166,
        e.y = 285,
        e
    },
    i.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "hm_panel2_txtlabel_png",
        e.x = 163,
        e.y = 312,
        e
    },
    i.btnFast1_i = function() {
        var e = new eui.Image;
        return this.btnFast1 = e,
        e.source = "hm_panel2_yjzs_png",
        e.x = 63,
        e.y = 312,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_jian_chan_png",
        e.x = 75,
        e.y = 0,
        e
    },
    i.diff2_i = function() {
        var e = new eui.Group;
        return this.diff2 = e,
        e.x = 390,
        e.y = 125,
        e.elementsContent = [this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Label2_i(), this._Image15_i(), this.btnFight2_i(), this.btnFast2_i(), this._Image16_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_zu_8_png",
        e.x = 0,
        e.y = 177,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_tuceng_19_png",
        e.x = 75,
        e.y = 81,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_jx_904_kb_png",
        e.x = 45,
        e.y = 282,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜获得      x3",
        e.textColor = 16748134,
        e.x = 100,
        e.y = 287,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_1714496_png",
        e.x = 166,
        e.y = 285,
        e
    },
    i.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "hm_panel2_txtlabel_png",
        e.x = 163,
        e.y = 312,
        e
    },
    i.btnFast2_i = function() {
        var e = new eui.Image;
        return this.btnFast2 = e,
        e.source = "hm_panel2_yjzs_png",
        e.x = 63,
        e.y = 312,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_zhong_deng_png",
        e.x = 75,
        e.y = 0,
        e
    },
    i.diff3_i = function() {
        var e = new eui.Group;
        return this.diff3 = e,
        e.x = 667,
        e.y = 125,
        e.elementsContent = [this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Label3_i(), this._Image20_i(), this.btnFight3_i(), this.btnFast3_i(), this._Image21_i()],
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_zu_8_png",
        e.x = 32,
        e.y = 177,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_tuceng_20_png",
        e.x = 0,
        e.y = 6,
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_jx_904_kb_png",
        e.x = 79,
        e.y = 282,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜获得      x5",
        e.textColor = 16748134,
        e.x = 133,
        e.y = 287,
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_1714496_png",
        e.x = 199,
        e.y = 285,
        e
    },
    i.btnFight3_i = function() {
        var e = new eui.Image;
        return this.btnFight3 = e,
        e.source = "hm_panel2_txtlabel_png",
        e.x = 196,
        e.y = 312,
        e
    },
    i.btnFast3_i = function() {
        var e = new eui.Image;
        return this.btnFast3 = e,
        e.source = "hm_panel2_yjzs_png",
        e.x = 96,
        e.y = 312,
        e
    },
    i._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_kun_nan_png",
        e.x = 108,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.holyMuse.Panel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_leftTime", "btnAdd", "btnBag", "btnCure", "btnOnekey", "txtNum1", "btnAddItem1", "need1", "txtNum2", "btnAddItem2", "need2", "txtNum4", "btnAddItem4", "need4", "txtNum3", "btnAddItem3", "need3", "btnBeginFight_4", "btnFast4", "btnBeginFight_3", "btnFast3", "btnBeginFight_1", "btnFast1", "btnBeginFight_2", "btnFast2", "content", "panel3"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.panel3_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "hm_panel2_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.panel3_i = function() {
        var e = new eui.Group;
        return this.panel3 = e,
        e.horizontalCenter = 4,
        e.width = 1110,
        e.y = 47,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_leftTime_i(), this.btnAdd_i(), this.btnBag_i(), this.btnCure_i(), this.btnOnekey_i(), this.content_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_panel3title_png",
        e.x = 292,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_tuceng_25_png",
        e.x = 356,
        e.y = 109,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余免费游戏次数：99",
        e.textColor = 16769906,
        e.x = 423,
        e.y = 537,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 668,
        e.y = 532,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hm_panel2_jlbb_png",
        e.x = 0,
        e.y = 396,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hm_panel2_jlhf_png",
        e.x = 0,
        e.y = 486,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "hm_panel1_btnonekey_png",
        e.x = 1010,
        e.y = 490,
        e
    },
    n.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 125,
        e.y = 138,
        e.elementsContent = [this.need1_i(), this.need2_i(), this.need4_i(), this.need3_i(), this._Image11_i(), this.btnBeginFight_4_i(), this.btnFast4_i(), this._Image12_i(), this.btnBeginFight_3_i(), this.btnFast3_i(), this._Image13_i(), this.btnBeginFight_1_i(), this.btnFast1_i(), this._Image14_i(), this.btnBeginFight_2_i(), this.btnFast2_i()],
        e
    },
    n.need1_i = function() {
        var e = new eui.Group;
        return this.need1 = e,
        e.x = 256,
        e.y = 21,
        e.elementsContent = [this._Image3_i(), this._Label1_i(), this.txtNum1_i(), this._Image4_i(), this.btnAddItem1_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_juxing_909_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "需要：",
        e.textColor = 16768349,
        e.x = 14,
        e.y = 8,
        e
    },
    n.txtNum1_i = function() {
        var e = new eui.Label;
        return this.txtNum1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99/99",
        e.textColor = 16768349,
        e.x = 82,
        e.y = 8,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_1714497_png",
        e.x = 59,
        e.y = 5,
        e
    },
    n.btnAddItem1_i = function() {
        var e = new eui.Image;
        return this.btnAddItem1 = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 135,
        e.y = 1,
        e
    },
    n.need2_i = function() {
        var e = new eui.Group;
        return this.need2 = e,
        e.x = 456,
        e.y = 21,
        e.elementsContent = [this._Image5_i(), this._Label2_i(), this.txtNum2_i(), this._Image6_i(), this.btnAddItem2_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_juxing_909_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "需要：",
        e.textColor = 16768349,
        e.x = 14,
        e.y = 8,
        e
    },
    n.txtNum2_i = function() {
        var e = new eui.Label;
        return this.txtNum2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99/99",
        e.textColor = 16768349,
        e.x = 82,
        e.y = 8,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_1714498_png",
        e.x = 59,
        e.y = 5,
        e
    },
    n.btnAddItem2_i = function() {
        var e = new eui.Image;
        return this.btnAddItem2 = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 135,
        e.y = 1,
        e
    },
    n.need4_i = function() {
        var e = new eui.Group;
        return this.need4 = e,
        e.x = 256,
        e.y = 291,
        e.elementsContent = [this._Image7_i(), this._Label3_i(), this.txtNum4_i(), this._Image8_i(), this.btnAddItem4_i()],
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_juxing_909_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "需要：",
        e.textColor = 16768349,
        e.x = 14,
        e.y = 8,
        e
    },
    n.txtNum4_i = function() {
        var e = new eui.Label;
        return this.txtNum4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99/99",
        e.textColor = 16768349,
        e.x = 82,
        e.y = 8,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_1714500_png",
        e.x = 59,
        e.y = 5,
        e
    },
    n.btnAddItem4_i = function() {
        var e = new eui.Image;
        return this.btnAddItem4 = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 135,
        e.y = 1,
        e
    },
    n.need3_i = function() {
        var e = new eui.Group;
        return this.need3 = e,
        e.x = 456,
        e.y = 291,
        e.elementsContent = [this._Image9_i(), this._Label4_i(), this.txtNum3_i(), this._Image10_i(), this.btnAddItem3_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_juxing_909_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "需要：",
        e.textColor = 16768349,
        e.x = 14,
        e.y = 8,
        e
    },
    n.txtNum3_i = function() {
        var e = new eui.Label;
        return this.txtNum3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99/99",
        e.textColor = 16768349,
        e.x = 82,
        e.y = 8,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_1714499_png",
        e.x = 59,
        e.y = 5,
        e
    },
    n.btnAddItem3_i = function() {
        var e = new eui.Image;
        return this.btnAddItem3 = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 135,
        e.y = 1,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_fightbg3_png",
        e.x = 0,
        e.y = 180,
        e
    },
    n.btnBeginFight_4_i = function() {
        var e = new eui.Image;
        return this.btnBeginFight_4 = e,
        e.source = "hm_panel3_btnbeginfight_png",
        e.x = 129,
        e.y = 310,
        e
    },
    n.btnFast4_i = function() {
        var e = new eui.Image;
        return this.btnFast4 = e,
        e.source = "hm_panel2_yjzs_png",
        e.x = 29,
        e.y = 310,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_fightbg4_png",
        e.x = 633,
        e.y = 180,
        e
    },
    n.btnBeginFight_3_i = function() {
        var e = new eui.Image;
        return this.btnBeginFight_3 = e,
        e.source = "hm_panel3_btnbeginfight_png",
        e.x = 762,
        e.y = 310,
        e
    },
    n.btnFast3_i = function() {
        var e = new eui.Image;
        return this.btnFast3 = e,
        e.source = "hm_panel2_yjzs_png",
        e.x = 662,
        e.y = 310,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_fightbg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnBeginFight_1_i = function() {
        var e = new eui.Image;
        return this.btnBeginFight_1 = e,
        e.source = "hm_panel3_btnbeginfight_png",
        e.x = 129,
        e.y = 130,
        e
    },
    n.btnFast1_i = function() {
        var e = new eui.Image;
        return this.btnFast1 = e,
        e.source = "hm_panel2_yjzs_png",
        e.x = 29,
        e.y = 130,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel3_fightbg2_png",
        e.x = 633,
        e.y = 0,
        e
    },
    n.btnBeginFight_2_i = function() {
        var e = new eui.Image;
        return this.btnBeginFight_2 = e,
        e.source = "hm_panel3_btnbeginfight_png",
        e.x = 762,
        e.y = 130,
        e
    },
    n.btnFast2_i = function() {
        var e = new eui.Image;
        return this.btnFast2 = e,
        e.source = "hm_panel2_yjzs_png",
        e.x = 662,
        e.y = 130,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.holyMuse.Panel4Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnFight1", "btnFast1", "btnFight2", "btnFast2", "pets", "txt_leftTime", "btnAdd", "txt_winRate", "btnAction", "btnBag", "btnCure", "btnOnekey", "txt_item1", "btnAddItem1", "txt_item2", "btnAddItem2", "panel4"],
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
        e.source = "hm_panel2_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.panel4_i = function() {
        var e = new eui.Group;
        return this.panel4 = e,
        e.horizontalCenter = 4,
        e.width = 1110,
        e.y = 46,
        e.elementsContent = [this.pets_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this.txt_leftTime_i(), this.btnAdd_i(), this.txt_winRate_i(), this.btnAction_i(), this.btnBag_i(), this.btnCure_i(), this.btnOnekey_i(), this._Image10_i(), this.txt_item1_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this.btnAddItem1_i(), this.txt_item2_i(), this._Label3_i(), this.btnAddItem2_i()],
        e
    },
    n.pets_i = function() {
        var e = new eui.Group;
        return this.pets = e,
        e.touchEnabled = !1,
        e.x = 80,
        e.y = 128,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Image4_i(), this.btnFight1_i(), this.btnFast1_i(), this._Image5_i(), this._Label2_i(), this._Image6_i(), this.btnFight2_i(), this.btnFast2_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_zu_11_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_zu_9_png",
        e.touchEnabled = !1,
        e.x = 579,
        e.y = 2,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_jx_904_kb_png",
        e.x = 72,
        e.y = 319,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜获得      x2",
        e.textColor = 16748134,
        e.width = 113,
        e.x = 128,
        e.y = 324,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_1714501_png",
        e.x = 195,
        e.y = 322,
        e
    },
    n.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "hm_panel2_txtlabel_png",
        e.x = 193,
        e.y = 349,
        e
    },
    n.btnFast1_i = function() {
        var e = new eui.Image;
        return this.btnFast1 = e,
        e.source = "hm_panel2_yjzs_png",
        e.x = 83,
        e.y = 349,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_jx_904_kb_png",
        e.x = 672,
        e.y = 319,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜获得      x2",
        e.textColor = 16748134,
        e.width = 113,
        e.x = 728,
        e.y = 324,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_1714502_png",
        e.x = 796,
        e.y = 322,
        e
    },
    n.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "hm_panel2_txtlabel_png",
        e.x = 793,
        e.y = 349,
        e
    },
    n.btnFast2_i = function() {
        var e = new eui.Image;
        return this.btnFast2 = e,
        e.source = "hm_panel2_yjzs_png",
        e.x = 683,
        e.y = 349,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_panel4title_png",
        e.x = 269,
        e.y = 0,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel2_juxing_904_png",
        e.x = 249,
        e.y = 531,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_tuceng_29_png",
        e.touchEnabled = !1,
        e.x = 334,
        e.y = 88,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余免费游戏次数：99",
        e.textColor = 16769906,
        e.x = 423,
        e.y = 538,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 668,
        e.y = 533,
        e
    },
    n.txt_winRate_i = function() {
        var e = new eui.Label;
        return this.txt_winRate = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99%",
        e.textColor = 16775389,
        e.x = 587,
        e.y = 504,
        e
    },
    n.btnAction_i = function() {
        var e = new eui.Image;
        return this.btnAction = e,
        e.source = "hm_panel4_btnaction_png",
        e.x = 484,
        e.y = 456,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hm_panel2_jlbb_png",
        e.x = 0,
        e.y = 397,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hm_panel2_jlhf_png",
        e.x = 0,
        e.y = 487,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "hm_panel1_btnonekey_png",
        e.x = 1010,
        e.y = 491,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_juxing_910_png",
        e.x = 411,
        e.y = 388,
        e
    },
    n.txt_item1_i = function() {
        var e = new eui.Label;
        return this.txt_item1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99/99",
        e.textColor = 16769906,
        e.x = 452,
        e.y = 414,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_1714501_png",
        e.x = 430,
        e.y = 413,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_1714502_png",
        e.x = 562,
        e.y = 413,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel4_jhxh_png",
        e.x = 501,
        e.y = 372,
        e
    },
    n.btnAddItem1_i = function() {
        var e = new eui.Image;
        return this.btnAddItem1 = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 504,
        e.y = 408,
        e
    },
    n.txt_item2_i = function() {
        var e = new eui.Label;
        return this.txt_item2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99/99",
        e.textColor = 16769906,
        e.x = 588,
        e.y = 414,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "激活成功率：",
        e.textColor = 16745305,
        e.x = 483,
        e.y = 504,
        e
    },
    n.btnAddItem2_i = function() {
        var e = new eui.Image;
        return this.btnAddItem2 = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 640,
        e.y = 408,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel5Skin.exml"] = window.holyMuse.Panel5Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_leftTime", "btnAdd", "btnAddDrawTime", "btnFight", "btnDraw", "btnBag", "btnCure", "txt_winTime", "txt_drawRate", "btnFreeGet", "btnOneKey", "btnWu", "btnTe", "btnKe", "upInfo", "txt_leftDrawTime", "panel5"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.panel5_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "hm_panel5_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.panel5_i = function() {
        var e = new eui.Group;
        return this.panel5 = e,
        e.horizontalCenter = -8.5,
        e.y = 46,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.txt_leftTime_i(), this.btnAdd_i(), this.btnAddDrawTime_i(), this.btnFight_i(), this.btnDraw_i(), this.btnBag_i(), this.btnCure_i(), this.txt_winTime_i(), this._Label1_i(), this.txt_drawRate_i(), this.btnFreeGet_i(), this.btnOneKey_i(), this.upInfo_i(), this.txt_leftDrawTime_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel5_jx_9041_png",
        e.x = 657,
        e.y = 531,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel5_jx_904_kb_png",
        e.x = 670,
        e.y = 452,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel5_juxing_904_png",
        e.x = 69,
        e.y = 531,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel5_jx_904_kb_png",
        e.x = 155,
        e.y = 452,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余免费游戏次数：99",
        e.textColor = 16769906,
        e.x = 143,
        e.y = 538,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "hm_panel1_btnadd_png",
        e.x = 388,
        e.y = 533,
        e
    },
    n.btnAddDrawTime_i = function() {
        var e = new eui.Image;
        return this.btnAddDrawTime = e,
        e.source = "hm_panel1_btnadd_png",
        e.visible = !1,
        e.x = 872,
        e.y = 533,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "hm_panel5_txtlabel_png",
        e.x = 199,
        e.y = 484,
        e
    },
    n.btnDraw_i = function() {
        var e = new eui.Image;
        return this.btnDraw = e,
        e.source = "hm_panel5_btndraw_png",
        e.x = 714,
        e.y = 484,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "hm_panel2_jlbb_png",
        e.x = 8,
        e.y = 397,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "hm_panel2_jlhf_png",
        e.x = 8,
        e.y = 487,
        e
    },
    n.txt_winTime_i = function() {
        var e = new eui.Label;
        return this.txt_winTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "已战胜：0/2",
        e.textColor = 16748134,
        e.x = 220,
        e.y = 457,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "祈祷成功率：",
        e.textColor = 16748134,
        e.x = 720,
        e.y = 457,
        e
    },
    n.txt_drawRate_i = function() {
        var e = new eui.Label;
        return this.txt_drawRate = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9%",
        e.textColor = 16748134,
        e.x = 819,
        e.y = 457,
        e
    },
    n.btnFreeGet_i = function() {
        var e = new eui.Image;
        return this.btnFreeGet = e,
        e.source = "hm_panel5_btnfreeget_png",
        e.x = 1015,
        e.y = 491,
        e
    },
    n.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "hm_panel5_yjzs_png",
        e.x = 1015,
        e.y = 437,
        e
    },
    n.upInfo_i = function() {
        var e = new eui.Group;
        return this.upInfo = e,
        e.x = 1025,
        e.y = 154,
        e.elementsContent = [this._Image5_i(), this.btnWu_i(), this.btnTe_i(), this.btnKe_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "hm_panel5_jx_911_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "hm_panel5_diwujineng_png",
        e.x = 10,
        e.y = 122,
        e
    },
    n.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "hm_panel5_zstx_png",
        e.x = 11,
        e.y = 52,
        e
    },
    n.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "hm_panel5_tuceng_35_png",
        e.x = 7,
        e.y = 195,
        e
    },
    n.txt_leftDrawTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftDrawTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "剩余祈祷次数：9",
        e.textColor = 16769906,
        e.x = 711,
        e.y = 539,
        e
    },
    t
} (eui.Skin);