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
redPupilMuse; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.service.setValues([e.RedPupilMuseConst.forever_level1_state, e.RedPupilMuseConst.forever_level2_state, e.RedPupilMuseConst.forever_level3_chstate, e.RedPupilMuseConst.forever_level3_state, e.RedPupilMuseConst.forever_pet_state, e.RedPupilMuseConst.forever_level4_flower1, e.RedPupilMuseConst.forever_level4_flower2, e.RedPupilMuseConst.forever_level4_flower3, e.RedPupilMuseConst.forever_level4_flower4, e.RedPupilMuseConst.forever_level4_flower5, e.RedPupilMuseConst.forever_level4_flower6, e.RedPupilMuseConst.forever_level4_state, e.RedPupilMuseConst.forever_levels_state], [e.RedPupilMuseConst.dailt_level1_times, e.RedPupilMuseConst.dailt_level2_times, e.RedPupilMuseConst.dailt_level3_times, e.RedPupilMuseConst.dailt_level4_times], [e.RedPupilMuseConst.bitbuf_haspet]),
            i.init([{
                panelName: e.RedPupilMuseConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.RedPupilMuseConst.PANEL1
            },
            {
                panelName: e.RedPupilMuseConst.PANEL2
            },
            {
                panelName: e.RedPupilMuseConst.PANEL3
            },
            {
                panelName: e.RedPupilMuseConst.PANEL4
            },
            {
                panelName: e.RedPupilMuseConst.PANEL5
            }]),
            i
        }
        return __extends(i, t),
        i.prototype.reShow = function() {
            var e = this;
            "" == this.currentPanel.name && this.service.updateValues().then(function() {
                e.destroyed || e.currentPanel && e.currentPanel.update && e.currentPanel.update()
            })
        },
        i
    } (BasicMultPanelModule);
    e.RedPupilMuse = t,
    __reflect(t.prototype, "redPupilMuse.RedPupilMuse")
} (redPupilMuse || (redPupilMuse = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
redPupilMuse; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "redPupilMuse.RedPupilMuseMainPanel",
        e.PANEL1 = "redPupilMuse.RedPupilMusePanel1",
        e.PANEL2 = "redPupilMuse.RedPupilMusePanel2",
        e.PANEL3 = "redPupilMuse.RedPupilMusePanel3",
        e.PANEL4 = "redPupilMuse.RedPupilMusePanel4",
        e.PANEL5 = "redPupilMuse.RedPupilMusePanel5",
        e.CMD = 42179,
        e.forever_levels_state = 6419,
        e.forever_pet_state = 6420,
        e.forever_level1_state = 6421,
        e.forever_level2_state = 6422,
        e.forever_level3_state = 6423,
        e.forever_level3_chstate = 6424,
        e.forever_level4_state = 6425,
        e.forever_level4_flower1 = 6426,
        e.forever_level4_flower2 = 6427,
        e.forever_level4_flower3 = 6428,
        e.forever_level4_flower4 = 6429,
        e.forever_level4_flower5 = 6430,
        e.forever_level4_flower6 = 6431,
        e.dailt_level1_times = 16325,
        e.dailt_level2_times = 16326,
        e.dailt_level3_times = 16327,
        e.dailt_level4_times = 16328,
        e.bitbuf_haspet = 174,
        e
    } ();
    e.RedPupilMuseConst = t,
    __reflect(t.prototype, "redPupilMuse.RedPupilMuseConst")
} (redPupilMuse || (redPupilMuse = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function u(e) {
            try {
                _(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(u, s)
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
            if (r = 1, a && (u = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(u = u.call(a, i[1])).done) return u;
            switch (a = 0, u && (i = [0, u.value]), i[0]) {
            case 0:
            case 1:
                u = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (u = _.trys, !(u = u.length > 0 && u[u.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!u || i[1] > u[0] && i[1] < u[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < u[1]) {
                    _.label = u[1],
                    u = i;
                    break
                }
                if (u && _.label < u[2]) {
                    _.label = u[2],
                    _.ops.push(i);
                    break
                }
                u[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = u = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, u, s, _ = {
        label: 0,
        sent: function() {
            if (1 & u[0]) throw u[1];
            return u[1]
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
redPupilMuse; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.canDown = !0,
            i.new_monster_level_id = 140,
            i.skinName = e.MainpanelSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(138, this, "rpm_mainpanel_stms_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230414版本系统功能", "赤瞳·缪斯搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "rpm_mainpanel_btncollected_png": "rpm_mainpanel_btncollect_png"
            })
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btn1,
            function() {
                StatLogger.log("20230414版本系统功能", "赤瞳·缪斯搬迁", "点击主界面-【联盟传承】"),
                t.service.openPanel(e.RedPupilMuseConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                StatLogger.log("20230414版本系统功能", "赤瞳·缪斯搬迁", "点击主界面-【天蛇祝福】"),
                t.service.openPanel(e.RedPupilMuseConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                StatLogger.log("20230414版本系统功能", "赤瞳·缪斯搬迁", "点击主界面-【圣剑之光】"),
                t.service.openPanel(e.RedPupilMuseConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btn4,
            function() {
                StatLogger.log("20230414版本系统功能", "赤瞳·缪斯搬迁", "点击主界面-【赤瞳再现】");
                var i = 1 == t.service.getValue(e.RedPupilMuseConst.bitbuf_haspet);
                i && StatLogger.log("20230414版本系统功能", "赤瞳·缪斯搬迁", "已获得精灵后，点击主界面-【赤瞳再现】"),
                t.service.openPanel(e.RedPupilMuseConst.PANEL4)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230414版本系统功能", "赤瞳·缪斯搬迁", "点击主界面-【能力提升】");
                var t = new e.Uppop;
                PopViewManager.getInstance().openView(t)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 2852,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this),
            ImageButtonUtil.add(this.btnSuper,
            function() {
                StatLogger.log("20230414版本系统功能", "赤瞳·缪斯搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProductBySocket(244520,
                    function() {
                        KTool.doExchange(7320, 1,
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
            EventManager.addEventListener("openpanel4",
            function() {
                t.service.openPanel(e.RedPupilMuseConst.PANEL4)
            },
            this),
            EventManager.addEventListener("backToMain",
            function() {
                t.service.updateValues().then(function() {
                    t.service.backToMainPanel(),
                    t.update()
                })
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                KTool.doExchange(7321, 1,
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this)
        },
        i.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "rpm_mainpanel_btncollected_png": "rpm_mainpanel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.update = function() {
            for (var t = this.service.getValue(e.RedPupilMuseConst.forever_levels_state), i = this.service.getValue(e.RedPupilMuseConst.forever_pet_state), n = 1 == this.service.getValue(e.RedPupilMuseConst.bitbuf_haspet), r = 0, a = 0; 3 > a; a++) {
                var u = 1 == KTool.getBit(i, a + 1);
                u && r++
            }
            for (var a = 1; 3 >= a; a++) this["yiwancheng_" + a].visible = t > a - 1 || 3 == r;
            this.btnSuper.visible = !n,
            this.btnUp.visible = !this.btnSuper.visible,
            this.img_hasUp.visible = this.yiwancheng_4.visible = 3 == r,
            this.img_hasPet.visible = n,
            DisplayUtil.setEnabled(this.btn1, 1 > t && 3 != r, t >= 1 || 3 == r),
            DisplayUtil.setEnabled(this.btn2, 1 == t && 3 != r, 1 != t || 3 == r),
            DisplayUtil.setEnabled(this.btn3, 2 == t && 3 != r, 2 != t || 3 == r),
            DisplayUtil.setEnabled(this.btnUp, 3 > r, 3 == t),
            DisplayUtil.setEnabled(this.btn4, t >= 3 && 3 > r, 3 > t || 3 == r),
            this.btnGet.visible = 4 == t && !n
        },
        i
    } (BasicPanel);
    e.RedPupilMuseMainPanel = t,
    __reflect(t.prototype, "redPupilMuse.RedPupilMuseMainPanel")
} (redPupilMuse || (redPupilMuse = {}));
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
redPupilMuse; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.leftTime = 0,
            i.infoStr = ["力量", "战神", "大地", "地神", "暗夜", "夜神"],
            i.skinName = e.Panel1Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "rpm_panel1_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            this.name = "redPupilMuse.Panel1Skin"
        },
        i.prototype.addEvents = function() {
            for (var t = this,
            i = function(e) {
                ImageButtonUtil.add(n["a_" + e],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void FightManager.fightNoMapBoss(4552 + e)
                },
                n)
            },
            n = this, r = 1; 6 >= r; r++) i(r);
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
                    KTool.buyProductByCallback(244529, 1,
                    function() {
                        KTool.doExchange(7313, 1,
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
                    KTool.buyProductByCallback(244525, 1,
                    function() {
                        KTool.doExchange(7322, 1,
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
                var i = t.service.getValue(e.RedPupilMuseConst.forever_level1_state);
                t.service.updateValues().then(function() {
                    var n = t.service.getValue(e.RedPupilMuseConst.forever_level1_state),
                    r = "";
                    if (n != i) {
                        for (var a = 0,
                        u = 1; 6 >= u; u++) if (KTool.getBit(i, u) != KTool.getBit(n, u)) {
                            a = u;
                            break
                        }
                        r = "恭喜领悟了<font color='#ff0000'>" + t.infoStr[a - 1] + "</font>神谕，再接再厉！"
                    } else r = "很遗憾未领悟神谕，请继续挑战";
                    BubblerManager.getInstance().showText(r, !0),
                    t.update()
                })
            },
            this)
        },
        i.prototype.update = function() {
            var t = this,
            i = MainManager.actorInfo.isVip ? 9 : 5;
            this.leftTime = i - this.service.getValue(e.RedPupilMuseConst.dailt_level1_times);
            var n = this.service.getValue(e.RedPupilMuseConst.forever_level1_state),
            r = this.service.getValue(e.RedPupilMuseConst.forever_levels_state),
            a = r >= 1;
            this.txt_leftTime.text = "" + this.leftTime;
            for (var u = 1; 6 >= u; u++) this["hasDone" + u].visible = 1 == KTool.getBit(n, u);
            if (a) {
                EventManager.removeAll(this);
                var s = "在战神联盟伙伴的帮助下，缪斯成功领悟神谕之力！";
                Alarm.show(s,
                function() {
                    t.service.openPanel(e.RedPupilMuseConst.PANEL2)
                })
            }
            DisplayUtil.setEnabled(this.btnAdd, this.leftTime < 5, this.leftTime >= 5)
        },
        i
    } (BasicPanel);
    e.RedPupilMusePanel1 = t,
    __reflect(t.prototype, "redPupilMuse.RedPupilMusePanel1")
} (redPupilMuse || (redPupilMuse = {}));
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
redPupilMuse; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i._petIdArr = [1845, 2341, 2527, 2323, 2394],
            i.leftTime = 0,
            i.skinName = e.Panel2Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "rpm_panel1_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.addEvents(),
            this.checkBitForTips(function(t) {
                e._isWeaken = t
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(244530, 1,
                    function() {
                        KTool.doExchange(7314, 1,
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
                    KTool.buyProductByCallback(244526, 1,
                    function() {
                        KTool.doExchange(7323, 1,
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
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : 6 != PetManager.infos.length ? void Alarm.show("当前你只能使用6只出战精灵进行挑战，请调整出战背包",
                function() {
                    t.service.showPetBag()
                }) : void FightManager.fightNoMapBoss(6322)
            },
            this),
            ImageButtonUtil.add(this.btnContinue,
            function() {
                var i = 6 - t.service.getValue(e.RedPupilMuseConst.forever_level2_state);
                return PetManager.infos.length != i ? void Alarm.show("当前你只能使用" + i + "只出战精灵进行挑战，请调整出战背包",
                function() {
                    t.service.showPetBag()
                }) : void(1 == i ? 2703 == PetManager.getPetInfo(PetManager.defaultTime).id ? FightManager.fightNoMapBoss(4592) : FightManager.fightNoMapBoss(6323) : FightManager.fightNoMapBoss(6322))
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                FightManager.isWin || Alarm.show("挑战失败，需从头开始挑战")
            },
            this)
        },
        i.prototype.checkBitForTips = function(e) {
            PetManager.checkMultiPet(this._petIdArr,
            function(t) {
                for (var i = !0,
                n = 0; n < t.length; n++) t[n] || (i = !1);
                null != e && e(i)
            })
        },
        i.prototype.update = function() {
            var t = this,
            i = MainManager.actorInfo.isVip ? 2 : 1;
            this.leftTime = i - this.service.getValue(e.RedPupilMuseConst.dailt_level2_times);
            var n = this.service.getValue(e.RedPupilMuseConst.forever_level2_state);
            this.txt_leftTime.text = "" + this.leftTime,
            this.txt_petNum.text = 6 - n + "",
            this.txt_progress.text = "阶段" + n + "/6";
            var r = this.service.getValue(e.RedPupilMuseConst.forever_levels_state),
            a = r >= 2;
            if (this.btnContinue.visible = 0 != n, this.btnFight.visible = 0 == n, this.imgLow.visible = 5 == n, a) {
                EventManager.removeAll(this);
                var u = "亲人的祝福激励了缪斯，是时候更进一步了！";
                Alarm.show(u,
                function() {
                    t.service.openPanel(e.RedPupilMuseConst.PANEL3)
                })
            }
            DisplayUtil.setEnabled(this.btnAdd, 0 == this.leftTime, 0 != this.leftTime)
        },
        i
    } (BasicPanel);
    e.RedPupilMusePanel2 = t,
    __reflect(t.prototype, "redPupilMuse.RedPupilMusePanel2")
} (redPupilMuse || (redPupilMuse = {}));
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
redPupilMuse; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.rightValue = 0,
            i.leftTime = 0,
            i.petHeadIDs = [1068, 1230, 438, 957, 1947, 2788, 2797, 2804, 2811, 2815, 2823, 2834, 2841, 2814, 2849],
            i.curMax = 0,
            i.skinName = e.Panel3Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "rpm_panel3_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.rbGroup1 = this.rb_enemy1.group,
            this.rightValue = this.rbGroup1.selectedValue = 1,
            this.addEvents(),
            this.animInit()
        },
        i.prototype.animInit = function() {
            this.acAnim = SpineUtil.createAnimate("chitongdonghua1"),
            this.grp_content.addChild(this.acAnim),
            this.acAnim.touchEnabled = !1,
            this.acAnim.x = 552,
            this.acAnim.y = 320,
            this.acAnim.visible = !1
        },
        i.prototype.addEvents = function() {
            var t = this;
            this.rbGroup1.addEventListener(egret.Event.CHANGE, this.onChangeRight, this),
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
                    KTool.buyProductByCallback(244531, 1,
                    function() {
                        KTool.doExchange(7315, 1,
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
                    KTool.buyProductByCallback(244527, 1,
                    function() {
                        KTool.doExchange(7324, 1,
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
                if (t.leftTime <= 0) return void BubblerManager.getInstance().showText("剩余挑战次数不足！");
                var e = 15 - t.curMax * (1 + t.curMax) / 2;
                if (e + t.rightValue < 10) FightManager.fightNoMapBoss(4560 + e + t.rightValue);
                else {
                    var i = 10;
                    2 == t.curMax ? i = 16 : 1 == t.curMax && (i = 20),
                    FightManager.fightNoMapBoss(6323 + (i - e + t.rightValue - 1))
                }
            },
            this),
            ImageButtonUtil.add(this.btnFast,
            function() {
                var i = t.service.getValue(e.RedPupilMuseConst.forever_level3_state),
                n = 15 - t.curMax * (1 + t.curMax) / 2;
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(244533 + i, 1,
                    function() {
                        SocketConnection.sendByQueue(e.RedPupilMuseConst.CMD, [1, n + t.rightValue, 0],
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
            ImageButtonUtil.add(this.bar,
            function() {
                t.acAnim.visible = !0,
                t.acAnim.play("muse_chitong_ain1", 1, 0, {
                    playEnd: function() {
                        SocketConnection.sendByQueue(e.RedPupilMuseConst.CMD, [3, 0, 0],
                        function() {
                            t.service.updateValues().then(function() {
                                t.rbGroup1.selectedValue = t.rightValue = 1,
                                t.update()
                            }),
                            t.acAnim.visible = !1
                        })
                    }
                })
            },
            this)
        },
        i.prototype.onChangeRight = function() {
            this.rightValue = ~~this.rbGroup1.selectedValue,
            this.update()
        },
        i.prototype.update = function() {
            var t = this,
            i = MainManager.actorInfo.isVip ? 5 : 3;
            this.leftTime = i - this.service.getValue(e.RedPupilMuseConst.dailt_level3_times),
            this.txt_leftTime.text = "" + this.leftTime;
            var n = this.service.getValue(e.RedPupilMuseConst.forever_levels_state),
            r = this.service.getValue(e.RedPupilMuseConst.forever_level3_state),
            a = this.service.getValue(e.RedPupilMuseConst.forever_level3_chstate),
            u = n >= 3;
            if (this.curMax = 5 - r, this.showStar(r, a), this.showHead(r, a), this.showPet(r, a), u) {
                var s = "从威斯克手下围攻中成功突破，圣剑散发出更加强大的光辉！";
                Alarm.show(s,
                function() {
                    t.service.openPanel(e.RedPupilMuseConst.PANEL4)
                })
            }
            DisplayUtil.setEnabled(this.btnAdd, 0 == this.leftTime, 0 != this.leftTime)
        },
        i.prototype.showHead = function(e, t) {
            for (var i = 15 - this.curMax * (1 + this.curMax) / 2, n = 1; 5 >= n; n++) this["rb_enemy" + n].visible = n <= this.curMax;
            for (var r = [], n = 1; n <= this.curMax; n++) {
                this["rb_enemy" + n].head.source = ClientConfig.getPetHeadPath(this.petHeadIDs[n + i - 1]);
                var a = 1 == KTool.getBit(t, n + i);
                a && r.push(n),
                this["rb_enemy" + n].pass.visible = a,
                this["rb_enemy" + n].touchChildren = this["rb_enemy" + n].touchEnabled = !a
            }
            if (r.length != this.curMax) {
                for (; r.indexOf(this.rightValue) > -1;) this.rightValue != this.curMax ? this.rightValue++:this.rightValue = 1;
                this.rbGroup1.selectedValue = this.rightValue
            }
        },
        i.prototype.showStar = function(e, t) {
            for (var i = 1; 5 >= i; i++) this["s" + i].visible = e >= i;
            this.bar_zhandou.maximum = 100 * this.curMax;
            for (var n = 0,
            r = 15 - this.curMax * (1 + this.curMax) / 2, i = 1; i <= this.curMax; i++) 1 == KTool.getBit(t, i + r) && n++;
            this.bar_zhandou.value = 100 * n;
            var a = n == this.curMax;
            this.qianghua.visible = a,
            this.btnFast.visible = this.btnFight.visible = !a,
            this.bar.touchChildren = this.bar.touchEnabled = a
        },
        i.prototype.showPet = function(e, t) {
            for (var i = 1; 5 >= i; i++) this["grp" + i].visible = e + 1 == i;
            for (var i = 1; i <= this.curMax; i++) this["grp" + (e + 1) + "_pet" + i].visible = this.rightValue == i
        },
        i.prototype.destroy = function() {
            this.rbGroup1.removeEventListener(egret.Event.CHANGE, this.onChangeRight, this),
            t.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    e.RedPupilMusePanel3 = t,
    __reflect(t.prototype, "redPupilMuse.RedPupilMusePanel3")
} (redPupilMuse || (redPupilMuse = {}));
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
redPupilMuse; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.leftTime = 0,
            i.hasAcNum = 0,
            i.skinName = e.Panel4Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "rpm_panel4_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.name = "redPupilMuse.Panel4Skin",
            this.grpBack.title.y = 10,
            this.addEvents(),
            this.closePop(0),
            this.animInit()
        },
        i.prototype.animInit = function() {
            this.acAnim = SpineUtil.createAnimate("chitongdonghua2"),
            this.addChild(this.acAnim),
            this.acAnim.touchEnabled = !1,
            this.acAnim.x = 552,
            this.acAnim.y = 320,
            this.acAnim.visible = !1
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
            ImageButtonUtil.add(this.btnUp,
            function() {
                var t = new e.Uppop;
                PopViewManager.getInstance().openView(t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                t.closePop(0),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(244532, 1,
                    function() {
                        KTool.doExchange(7316, 1,
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
                t.closePop(0),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(244528, 1,
                    function() {
                        KTool.doExchange(7325, 1,
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
            for (var i = function(i) {
                ImageButtonUtil.add(n["f" + i + "_icon"],
                function() {
                    t.closePop(i)
                },
                n),
                ImageButtonUtil.add(n["dikuang_an_" + i],
                function() {
                    t.closePop(i)
                },
                n),
                ImageButtonUtil.add(n["jihuo_" + i],
                function() {
                    return t.closeAll(),
                    t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : (AwardManager.pause(), void FightManager.fightNoMapBoss(6329 + i))
                },
                n),
                ImageButtonUtil.add(n["genghuan_" + i],
                function() {
                    return t.closeAll(),
                    t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : (AwardManager.pause(), void FightManager.fightNoMapBoss(6329 + i))
                },
                n),
                ImageButtonUtil.add(n["btnFast" + i],
                function() {
                    t.closeAll(),
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(244538, 1,
                        function() {
                            t.acAnim.visible = !0,
                            t.acAnim.x = t["f" + i].x + 75,
                            t.acAnim.y = t["f" + i].y + 65,
                            t.acAnim.play("muse_chitong_ain2", 1, 0, {
                                playEnd: function() {
                                    SocketConnection.sendByQueue(e.RedPupilMuseConst.CMD, [2, i, 7],
                                    function() {
                                        t.service.updateValues().then(function() {
                                            t.update()
                                        }),
                                        t.acAnim.visible = !1
                                    })
                                }
                            })
                        })
                    },
                    t)
                },
                n),
                ImageButtonUtil.add(n["btnZhi" + i],
                function() {
                    t.closeAll(),
                    t.hasAcNum = 6 == t.hasAcNum ? 5 : t.hasAcNum;
                    var n = new e.ChoosePop(t.hasAcNum, i);
                    PopViewManager.getInstance().openView(n)
                },
                n)
            },
            n = this, r = 1; 6 >= r; r++) i(r);
            EventManager.addEventListener("updatePanel",
            function() {
                for (var e = [], i = 1; 6 >= i; i++) {
                    var n = t.service.getValue(6425 + i);
                    e.push(n)
                }
                t.service.updateValues().then(function() {
                    for (var i = [], n = 1; 6 >= n; n++) {
                        var r = t.service.getValue(6425 + n);
                        i.push(r)
                    }
                    for (var a = 0,
                    n = 1; 6 >= n; n++) if (e[n - 1] != i[n - 1]) {
                        a = n;
                        break
                    }
                    0 != a ? (t.acAnim.visible = !0, t.acAnim.x = t["f" + a].x + 75, t.acAnim.y = t["f" + a].y + 65, t.acAnim.play("muse_chitong_ain2", 1, 0, {
                        playEnd: function() {
                            t.update(),
                            AwardManager.resume(),
                            t.acAnim.visible = !1
                        }
                    })) : t.update()
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                for (var e = [], i = 1; 6 >= i; i++) {
                    var n = t.service.getValue(6425 + i);
                    e.push(n)
                }
                t.service.updateValues().then(function() {
                    if (FightManager.isWin) {
                        for (var i = [], n = 1; 6 >= n; n++) {
                            var r = t.service.getValue(6425 + n);
                            i.push(r)
                        }
                        for (var a = 0,
                        n = 1; 6 >= n; n++) if (e[n - 1] != i[n - 1]) {
                            a = n;
                            break
                        }
                        0 != a && (t.acAnim.visible = !0, t.acAnim.x = t["f" + a].x + 75, t.acAnim.y = t["f" + a].y + 65, t.acAnim.play("muse_chitong_ain2", 1, 0, {
                            playEnd: function() {
                                t.update(),
                                AwardManager.resume(),
                                t.acAnim.visible = !1
                            }
                        }))
                    } else t.update()
                })
            },
            this),
            this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAll, this),
            this.panel4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAll, this)
        },
        i.prototype.closeAll = function() {
            this.closePop(0)
        },
        i.prototype.closePop = function(e) {
            for (var t = 1; 6 >= t; t++) this["grp_pop" + t].visible = e == t
        },
        i.prototype.update = function() {
            var t = this,
            i = MainManager.actorInfo.isVip ? 8 : 5;
            this.leftTime = i - this.service.getValue(e.RedPupilMuseConst.dailt_level4_times),
            this.txt_leftTime.text = "" + this.leftTime;
            var n = 1 == this.service.getValue(e.RedPupilMuseConst.bitbuf_haspet),
            r = this.service.getValue(e.RedPupilMuseConst.forever_levels_state);
            this.hasAcNum = 0;
            for (var a = 1; 6 >= a; a++) {
                var u = this.service.getValue(6425 + a);
                0 != u && this.hasAcNum++,
                this["dikuang_liang_" + a].visible = 0 != u,
                this["jihuo_" + a].visible = 0 == u,
                this["genghuan_" + a].visible = 0 != u,
                0 != u ? this["f" + a + "_icon"].source = "rpm_panel4_" + u + "_png": (this["genghuan_" + a].visible = !1, this["f" + a + "_icon"].source = "")
            }
            this.yihuode.visible = n;
            var s = r >= 4;
            if (s && !n) {
                var _ = "万花之印成功激活，可以领取完全体赤瞳·缪斯！";
                Alarm.show(_,
                function() {
                    t.service.backToMainPanel()
                })
            }
            this.btnOnekey.visible = !n,
            this.btnUp.visible = n,
            DisplayUtil.setEnabled(this.btnOnekey, !n, n),
            DisplayUtil.setEnabled(this.btnAdd, 0 == this.leftTime, 0 != this.leftTime)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAll, this),
            this.panel4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAll, this)
        },
        i
    } (BasicPanel);
    e.RedPupilMusePanel4 = t,
    __reflect(t.prototype, "redPupilMuse.RedPupilMusePanel4")
} (redPupilMuse || (redPupilMuse = {}));
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
redPupilMuse; !
function(e) {
    var t = function(t) {
        function i(i, n) {
            var r = t.call(this) || this;
            return r.va = 0,
            r.acNum = 0,
            r.price = [8, 48, 88, 128, 178, 228],
            r.se = 0,
            r.skinName = e.ChoosepopSkin,
            r.acNum = i,
            r.se = n,
            r
        }
        return __extends(i, t),
        i.prototype.initialized = function() {
            var t = this;
            this.rbGroup = this.rb_flower1.group,
            this.acNum = 0,
            KTool.getMultiValue([6426, 6427, 6428, 6429, 6430, 6431],
            function(e) {
                for (var i = 1; 6 >= i; i++) - 1 != e.indexOf(i) && t.acNum++,
                t["rb_flower" + i].hasActive.visible = -1 != e.indexOf(i),
                t["rb_flower" + i].touchEnabled = -1 == e.indexOf(i);
                t.show()
            }),
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChange, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnZhi,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(244539 + t.acNum, 1,
                    function() {
                        AwardManager.pause(),
                        SocketConnection.sendByQueue(e.RedPupilMuseConst.CMD, [2, t.se, t.va],
                        function() {
                            t.hide(),
                            EventManager.dispatchEventWith("updatePanel")
                        })
                    })
                },
                t)
            },
            this)
        },
        i.prototype.onChange = function() {
            this.va = ~~this.rbGroup.selectedValue,
            this.show()
        },
        i.prototype.show = function() {
            DisplayUtil.setEnabled(this.btnZhi, 0 != this.va, 0 == this.va);
            var e = this.acNum > 5 ? 5 : this.acNum;
            this.grpSe.visible = 6 != this.acNum,
            this.txt_price.text = this.price[e] + ""
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChange, this)
        },
        i
    } (PopView);
    e.ChoosePop = t,
    __reflect(t.prototype, "redPupilMuse.ChoosePop")
} (redPupilMuse || (redPupilMuse = {}));
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
redPupilMuse; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.UppopSkin,
            i
        }
        return __extends(i, t),
        i.prototype.initialized = function() {
            this.addEvent(),
            this.update()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                e.hide(),
                EventManager.dispatchEventWith("openpanel4")
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1705611,
                        productID: 244521
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(244521, i,
                        function() {
                            KTool.doExchange(7312, i,
                            function() {
                                e.update()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 2852, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 17810
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(40425) ? (e = {},
                e.ins = 40425, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 40425, tipsPop.TipsPop.openItemPop(e))
            },
            this);
            for (var t = [10, 15, 20], i = function(i) {
                ImageButtonUtil.add(n["btnExchange_" + i],
                function() {
                    if (ItemManager.getNumByID(1705611) < t[i - 1]) return void BubblerManager.getInstance().showText("万花瞳印数量不足，无法兑换");
                    if (!PetManager.isDefaultPet(2852)) return void Alarm.show("请将赤瞳·缪斯放入首发出战位置",
                    function() {
                        ModuleManager.showModuleByID(10),
                        e.hide()
                    });
                    var n = "";
                    3 == i ? n = "兑换成功！已获得第五技能,可以前往背包查看": 2 == i && (n = "兑换成功！已获得专属特性,可以前往背包查看"),
                    KTool.doExchange(7325 + i, 1,
                    function() {
                        1 != i && Alert.show(n,
                        function() {
                            e.hide(),
                            ModuleManager.showModuleByID(10)
                        }),
                        e.update()
                    })
                },
                n)
            },
            n = this, r = 1; 3 >= r; r++) i(r)
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([6420],
            function(t) {
                for (var i = 0,
                n = 1; 3 >= n; n++) {
                    var r = 1 == KTool.getBit(t[0], n);
                    r && (i++, e["btnExchange_" + n].source = "rpm_uppop_btnhasEx_png"),
                    DisplayUtil.setEnabled(e["btnExchange_" + n], !r, r)
                }
                e.txt_num.text = ItemManager.getNumByID(1705611) + "",
                3 == i && (e.hide(), EventManager.dispatchEventWith("backToMain"))
            })
        },
        i
    } (PopView);
    e.Uppop = t,
    __reflect(t.prototype, "redPupilMuse.Uppop")
} (redPupilMuse || (redPupilMuse = {})),
window.redPupilMuse = window.redPupilMuse || {};
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
generateEUI.paths["resource/eui_skins/ChoosepopSkin.exml"] = window.redPupilMuse.ChoosepopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "rb_flower1", "rb_flower2", "rb_flower3", "rb_flower4", "rb_flower5", "rb_flower6", "txt_price", "btnZhi", "grpSe", "choosePop"],
        this.height = 355,
        this.width = 518,
        this.elementsContent = [this.choosePop_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasActive"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.hasActive_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_zu_2_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_1_png",
            e.visible = !0,
            e.x = 13,
            e.y = 26,
            e
        },
        i._Image3_i = function() {
            var e = new eui.Image;
            return this._Image3 = e,
            e.source = "rpm_choosepop_xuanzhong_png",
            e.visible = !1,
            e.x = 8,
            e.y = 21,
            e
        },
        i.hasActive_i = function() {
            var e = new eui.Image;
            return this.hasActive = e,
            e.source = "rpm_choosepop_yijibai_png",
            e.visible = !1,
            e.x = 12,
            e.y = 26,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "MFShangHei",
            e.size = 16,
            e.text = "瞳之印",
            e.textColor = 16774231,
            e.x = 23,
            e.y = 3,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasActive"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.hasActive_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_zu_2_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_tuceng_16_png",
            e.visible = !0,
            e.x = 13,
            e.y = 26,
            e
        },
        i._Image3_i = function() {
            var e = new eui.Image;
            return this._Image3 = e,
            e.source = "rpm_choosepop_xuanzhong_png",
            e.visible = !1,
            e.x = 8,
            e.y = 21,
            e
        },
        i.hasActive_i = function() {
            var e = new eui.Image;
            return this.hasActive = e,
            e.source = "rpm_choosepop_yijibai_png",
            e.visible = !1,
            e.x = 12,
            e.y = 26,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "MFShangHei",
            e.size = 16,
            e.text = "花之印",
            e.textColor = 16774231,
            e.x = 23,
            e.y = 3,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasActive"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.hasActive_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_zu_2_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_tuceng_17_png",
            e.visible = !0,
            e.x = 13,
            e.y = 26,
            e
        },
        i._Image3_i = function() {
            var e = new eui.Image;
            return this._Image3 = e,
            e.source = "rpm_choosepop_xuanzhong_png",
            e.visible = !1,
            e.x = 8,
            e.y = 21,
            e
        },
        i.hasActive_i = function() {
            var e = new eui.Image;
            return this.hasActive = e,
            e.source = "rpm_choosepop_yijibai_png",
            e.visible = !1,
            e.x = 12,
            e.y = 26,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "MFShangHei",
            e.size = 16,
            e.text = "剑之印",
            e.textColor = 16774231,
            e.x = 23,
            e.y = 3,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasActive"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.hasActive_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_zu_2_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_tuceng_18_png",
            e.visible = !0,
            e.x = 13,
            e.y = 26,
            e
        },
        i._Image3_i = function() {
            var e = new eui.Image;
            return this._Image3 = e,
            e.source = "rpm_choosepop_xuanzhong_png",
            e.visible = !1,
            e.x = 8,
            e.y = 21,
            e
        },
        i.hasActive_i = function() {
            var e = new eui.Image;
            return this.hasActive = e,
            e.source = "rpm_choosepop_yijibai_png",
            e.visible = !1,
            e.x = 12,
            e.y = 26,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "MFShangHei",
            e.size = 16,
            e.text = "魂之印",
            e.textColor = 16774231,
            e.x = 23,
            e.y = 3,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasActive"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.hasActive_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_zu_2_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_tuceng_19_png",
            e.visible = !0,
            e.x = 13,
            e.y = 26,
            e
        },
        i._Image3_i = function() {
            var e = new eui.Image;
            return this._Image3 = e,
            e.source = "rpm_choosepop_xuanzhong_png",
            e.visible = !1,
            e.x = 8,
            e.y = 21,
            e
        },
        i.hasActive_i = function() {
            var e = new eui.Image;
            return this.hasActive = e,
            e.source = "rpm_choosepop_yijibai_png",
            e.visible = !1,
            e.x = 12,
            e.y = 26,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "MFShangHei",
            e.size = 16,
            e.text = "灵之印",
            e.textColor = 16774231,
            e.x = 23,
            e.y = 3,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasActive"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.hasActive_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_zu_2_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_choosepop_tuceng_20_png",
            e.visible = !0,
            e.x = 13,
            e.y = 26,
            e
        },
        i._Image3_i = function() {
            var e = new eui.Image;
            return this._Image3 = e,
            e.source = "rpm_choosepop_xuanzhong_png",
            e.visible = !1,
            e.x = 8,
            e.y = 21,
            e
        },
        i.hasActive_i = function() {
            var e = new eui.Image;
            return this.hasActive = e,
            e.source = "rpm_choosepop_yijibai_png",
            e.visible = !1,
            e.x = 12,
            e.y = 26,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return e.fontFamily = "MFShangHei",
            e.size = 16,
            e.text = "魄之印",
            e.textColor = 16774231,
            e.x = 23,
            e.y = 3,
            e
        },
        t
    } (eui.Skin),
    _ = t.prototype;
    return _.choosePop_i = function() {
        var e = new eui.Group;
        return this.choosePop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnClose_i(), this.rb_flower1_i(), this.rb_flower2_i(), this.rb_flower3_i(), this.rb_flower4_i(), this.rb_flower5_i(), this.rb_flower6_i(), this._Image2_i(), this.grpSe_i()],
        e
    },
    _._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_choosepop_bg4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "rpm_choosepop_close1_png",
        e.x = 472,
        e.y = 9,
        e
    },
    _.rb_flower1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_flower1 = e,
        e.groupName = "flower",
        e.value = "1",
        e.visible = !0,
        e.x = 71,
        e.y = 50,
        e.skinName = i,
        e
    },
    _.rb_flower2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_flower2 = e,
        e.groupName = "flower",
        e.value = "2",
        e.visible = !0,
        e.x = 213,
        e.y = 50,
        e.skinName = n,
        e
    },
    _.rb_flower3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_flower3 = e,
        e.groupName = "flower",
        e.value = "3",
        e.visible = !0,
        e.x = 354,
        e.y = 50,
        e.skinName = r,
        e
    },
    _.rb_flower4_i = function() {
        var e = new eui.RadioButton;
        return this.rb_flower4 = e,
        e.groupName = "flower",
        e.value = "4",
        e.visible = !0,
        e.x = 71,
        e.y = 158,
        e.skinName = a,
        e
    },
    _.rb_flower5_i = function() {
        var e = new eui.RadioButton;
        return this.rb_flower5 = e,
        e.groupName = "flower",
        e.value = "5",
        e.visible = !0,
        e.x = 213,
        e.y = 158,
        e.skinName = u,
        e
    },
    _.rb_flower6_i = function() {
        var e = new eui.RadioButton;
        return this.rb_flower6 = e,
        e.groupName = "flower",
        e.value = "6",
        e.visible = !0,
        e.x = 354,
        e.y = 158,
        e.skinName = s,
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_choosepop_xzhy_png",
        e.visible = !0,
        e.x = 210,
        e.y = 13,
        e
    },
    _.grpSe_i = function() {
        var e = new eui.Group;
        return this.grpSe = e,
        e.visible = !0,
        e.x = 191,
        e.y = 268,
        e.elementsContent = [this._Image3_i(), this.txt_price_i(), this._Image4_i(), this.btnZhi_i()],
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_choosepop_jx_904_kb_2_png",
        e.x = 5,
        e.y = 2,
        e
    },
    _.txt_price_i = function() {
        var e = new eui.Label;
        return this.txt_price = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "XXX",
        e.textColor = 16774231,
        e.x = 62,
        e.y = 6,
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_choosepop_icon_gold_png",
        e.x = 19,
        e.y = 0,
        e
    },
    _.btnZhi_i = function() {
        var e = new eui.Image;
        return this.btnZhi = e,
        e.source = "rpm_choosepop_btntiaozhan_kb_2_png",
        e.x = 0,
        e.y = 29,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.redPupilMuse.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "img_hasPet", "btnCollect", "btnInfo", "btnSuper", "btnUp", "img_hasUp", "btn1", "btn2", "btn3", "btn4", "yiwancheng_1", "yiwancheng_2", "yiwancheng_3", "yiwancheng_4", "btnGet", "btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "rpm_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -28,
        e.width = 1160,
        e.y = 67,
        e.elementsContent = [this._Image1_i(), this.img_hasPet_i(), this._Image2_i(), this.btnCollect_i(), this.btnInfo_i(), this.btnSuper_i(), this.btnUp_i(), this.img_hasUp_i(), this.btns_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_mainpanel_tuceng_1_png",
        e.x = 48,
        e.y = 11,
        e
    },
    i.img_hasPet_i = function() {
        var e = new eui.Image;
        return this.img_hasPet = e,
        e.source = "rpm_mainpanel_yihuode_png",
        e.x = 339,
        e.y = 217,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_mainpanel_biaoti_png",
        e.visible = !0,
        e.x = 0,
        e.y = 153,
        e
    },
    i.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "rpm_mainpanel_btncollect_png",
        e.x = 64,
        e.y = 423,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "rpm_mainpanel_btninfo_png",
        e.x = 64,
        e.y = 485,
        e
    },
    i.btnSuper_i = function() {
        var e = new eui.Image;
        return this.btnSuper = e,
        e.source = "rpm_mainpanel_btnsuper_png",
        e.x = 1057,
        e.y = 476,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "rpm_mainpanel_btnup_png",
        e.x = 1057,
        e.y = 476,
        e
    },
    i.img_hasUp_i = function() {
        var e = new eui.Image;
        return this.img_hasUp = e,
        e.source = "rpm_mainpanel_yihuode_png",
        e.x = 1057,
        e.y = 499,
        e
    },
    i.btns_i = function() {
        var e = new eui.Group;
        return this.btns = e,
        e.height = 549,
        e.width = 348,
        e.x = 736,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btn4_i(), this.yiwancheng_1_i(), this.yiwancheng_2_i(), this.yiwancheng_3_i(), this.yiwancheng_4_i(), this.btnGet_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_mainpanel_ti_png",
        e.x = 33.936,
        e.y = -38.37,
        e
    },
    i.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "rpm_mainpanel_btn1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "rpm_mainpanel_btn2_png",
        e.x = 0,
        e.y = 110,
        e
    },
    i.btn3_i = function() {
        var e = new eui.Image;
        return this.btn3 = e,
        e.source = "rpm_mainpanel_btn3_png",
        e.x = 0,
        e.y = 221,
        e
    },
    i.btn4_i = function() {
        var e = new eui.Image;
        return this.btn4 = e,
        e.source = "rpm_mainpanel_btn4_png",
        e.x = 0,
        e.y = 331,
        e
    },
    i.yiwancheng_1_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_1 = e,
        e.source = "rpm_mainpanel_yiwancheng_png",
        e.x = 23,
        e.y = 23,
        e
    },
    i.yiwancheng_2_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_2 = e,
        e.source = "rpm_mainpanel_yiwancheng_png",
        e.x = 23,
        e.y = 133,
        e
    },
    i.yiwancheng_3_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_3 = e,
        e.source = "rpm_mainpanel_yiwancheng_png",
        e.x = 23,
        e.y = 244,
        e
    },
    i.yiwancheng_4_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_4 = e,
        e.source = "rpm_mainpanel_yiwancheng_png",
        e.visible = !1,
        e.x = 23,
        e.y = 354,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 77,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "rpm_mainpanel_btnGet_png",
        e.width = 231,
        e.x = -450,
        e.y = 471.9999999999999,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.redPupilMuse.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "title", "a_1", "a_3", "a_5", "a_2", "a_4", "a_6", "hasDone1", "hasDone3", "hasDone2", "hasDone4", "hasDone5", "hasDone6", "content", "txt_leftTime", "btnAdd", "cishu", "btnOnekey", "btnBag", "btnCure"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "rpm_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 3,
        e.width = 1110,
        e.y = 54,
        e.elementsContent = [this.title_i(), this.content_i(), this.cishu_i(), this.btnOnekey_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    i.title_i = function() {
        var e = new eui.Group;
        return this.title = e,
        e.x = 123,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this._Label2_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel1_tipsbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "与战神联盟成员的切磋战斗，领悟所有种类的神谕之力，即可通过此关！",
        e.textColor = 16759667,
        e.x = 120,
        e.y = 5,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "每天首次战胜必定领悟，其余战胜有概率领悟",
        e.textColor = 16770585,
        e.x = 230,
        e.y = 32,
        e
    },
    i.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 113,
        e.y = 62,
        e.elementsContent = [this.a_1_i(), this.a_3_i(), this.a_5_i(), this.a_2_i(), this.a_4_i(), this.a_6_i(), this.hasDone1_i(), this.hasDone3_i(), this.hasDone2_i(), this.hasDone4_i(), this.hasDone5_i(), this.hasDone6_i(), this._Image2_i()],
        e
    },
    i.a_1_i = function() {
        var e = new eui.Image;
        return this.a_1 = e,
        e.source = "rpm_panel1_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_3_i = function() {
        var e = new eui.Image;
        return this.a_3 = e,
        e.source = "rpm_panel1_2_png",
        e.x = 30,
        e.y = 148,
        e
    },
    i.a_5_i = function() {
        var e = new eui.Image;
        return this.a_5 = e,
        e.source = "rpm_panel1_3_png",
        e.x = 60,
        e.y = 296,
        e
    },
    i.a_2_i = function() {
        var e = new eui.Image;
        return this.a_2 = e,
        e.source = "rpm_panel1_4_png",
        e.x = 544,
        e.y = 0,
        e
    },
    i.a_4_i = function() {
        var e = new eui.Image;
        return this.a_4 = e,
        e.source = "rpm_panel1_5_png",
        e.x = 514,
        e.y = 148,
        e
    },
    i.a_6_i = function() {
        var e = new eui.Image;
        return this.a_6 = e,
        e.source = "rpm_panel1_6_png",
        e.x = 484,
        e.y = 296,
        e
    },
    i.hasDone1_i = function() {
        var e = new eui.Image;
        return this.hasDone1 = e,
        e.source = "rpm_panel1_zuolingwu_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasDone3_i = function() {
        var e = new eui.Image;
        return this.hasDone3 = e,
        e.source = "rpm_panel1_zuolingwu_png",
        e.x = 30,
        e.y = 148,
        e
    },
    i.hasDone2_i = function() {
        var e = new eui.Image;
        return this.hasDone2 = e,
        e.source = "rpm_panel1_youlingwu_png",
        e.x = 544,
        e.y = 0,
        e
    },
    i.hasDone4_i = function() {
        var e = new eui.Image;
        return this.hasDone4 = e,
        e.source = "rpm_panel1_youlingwu_png",
        e.x = 514,
        e.y = 148,
        e
    },
    i.hasDone5_i = function() {
        var e = new eui.Image;
        return this.hasDone5 = e,
        e.source = "rpm_panel1_youlingwu_png",
        e.x = 60,
        e.y = 296,
        e
    },
    i.hasDone6_i = function() {
        var e = new eui.Image;
        return this.hasDone6 = e,
        e.source = "rpm_panel1_youlingwu_png",
        e.x = 484,
        e.y = 296,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_mainpanel_ti1_png",
        e.x = 366,
        e.y = 28.336,
        e
    },
    i.cishu_i = function() {
        var e = new eui.Group;
        return this.cishu = e,
        e.x = 434,
        e.y = 512,
        e.elementsContent = [this._Image3_i(), this._Label3_i(), this.txt_leftTime_i(), this.btnAdd_i(), this._Label4_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel1_jx_904_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0296401571647,
        e.text = "今日剩余挑战次数：",
        e.textColor = 16776661,
        e.x = 10,
        e.y = 7,
        e
    },
    i.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "X",
        e.textColor = 16774231,
        e.x = 183,
        e.y = 8,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "rpm_panel1_btnadd_png",
        e.x = 207,
        e.y = 2,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.1667647552469,
        e.text = "VIP每日额外获得3次免费次数",
        e.textColor = 16743233,
        e.x = 13,
        e.y = 32,
        e
    },
    i.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "rpm_panel1_btnonekey_png",
        e.x = 1010,
        e.y = 483,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "rpm_panel1_jlbb_png",
        e.x = 0,
        e.y = 388,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "rpm_panel1_jlhf_png",
        e.x = 0,
        e.y = 479,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.redPupilMuse.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "tipsbg", "title", "txt_leftTime", "btnAdd", "cishu", "pets", "txt_progress", "txt_petNum", "jieduan", "imgLow", "btnOnekey", "btnBag", "btnCure", "btnContinue", "btnFight"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "rpm_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 13,
        e.width = 1130,
        e.y = 54,
        e.elementsContent = [this.title_i(), this.cishu_i(), this.pets_i(), this.jieduan_i(), this.imgLow_i(), this.btnOnekey_i(), this.btnBag_i(), this.btnCure_i(), this.btnContinue_i(), this.btnFight_i()],
        e
    },
    i.title_i = function() {
        var e = new eui.Group;
        return this.title = e,
        e.x = 123,
        e.y = 0,
        e.elementsContent = [this.tipsbg_i(), this._Label1_i(), this._Label2_i()],
        e
    },
    i.tipsbg_i = function() {
        var e = new eui.Image;
        return this.tipsbg = e,
        e.source = "rpm_panel2_tipsbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9068517867105,
        e.text = "神谕指引着缪斯，缪斯前往天蛇星，希望亲人们能够帮助自己。",
        e.textColor = 16759667,
        e.x = 160,
        e.y = 5,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9068517867105,
        e.text = "完成全部磨练即可通过关卡，一旦失败需要从头开始挑战！",
        e.textColor = 15576425,
        e.x = 160,
        e.y = 32,
        e
    },
    i.cishu_i = function() {
        var e = new eui.Group;
        return this.cishu = e,
        e.x = 428,
        e.y = 512,
        e.elementsContent = [this._Image1_i(), this._Label3_i(), this.txt_leftTime_i(), this.btnAdd_i(), this._Label4_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel2_jx_904_kb_2_png",
        e.x = 10,
        e.y = 0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "今日剩余可挑战轮数：",
        e.textColor = 16776661,
        e.x = 0,
        e.y = 7,
        e
    },
    i.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "X",
        e.textColor = 16774231,
        e.x = 194,
        e.y = 6,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "rpm_panel2_btnadd_png",
        e.x = 218,
        e.y = 2,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.1667647552469,
        e.text = "VIP每日额外获得1轮免费次数",
        e.textColor = 16743233,
        e.x = 21,
        e.y = 32,
        e
    },
    i.pets_i = function() {
        var e = new eui.Group;
        return this.pets = e,
        e.x = 49,
        e.y = 49,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel2_zu_52_png",
        e.x = 80,
        e.y = 254,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel2_zu_52_png",
        e.x = 594,
        e.y = 254,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel2_tuceng_8_png",
        e.x = 0,
        e.y = 41,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel2_zu_6_png",
        e.x = 566,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel2_zu_53_png",
        e.x = 349,
        e.y = 40,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_mainpanel_ti2_png",
        e.x = 705,
        e.y = 363,
        e
    },
    i.jieduan_i = function() {
        var e = new eui.Group;
        return this.jieduan = e,
        e.x = 418,
        e.y = 64,
        e.elementsContent = [this._Image8_i(), this.txt_progress_i(), this._Label5_i(), this.txt_petNum_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel2_juxing_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "阶段X/6",
        e.textColor = 15329219,
        e.x = 90,
        e.y = 3,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "使用    只精灵出战",
        e.textColor = 15055997,
        e.x = 62,
        e.y = 29,
        e
    },
    i.txt_petNum_i = function() {
        var e = new eui.Label;
        return this.txt_petNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "Y",
        e.textColor = 16770585,
        e.x = 102,
        e.y = 29,
        e
    },
    i.imgLow_i = function() {
        var e = new eui.Image;
        return this.imgLow = e,
        e.source = "rpm_panel2_jiangdi_png",
        e.visible = !0,
        e.x = 129,
        e.y = 397,
        e
    },
    i.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "rpm_panel1_btnonekey_png",
        e.x = 1010,
        e.y = 483,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "rpm_panel1_jlbb_png",
        e.x = 0,
        e.y = 388,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "rpm_panel1_jlhf_png",
        e.x = 0,
        e.y = 479,
        e
    },
    i.btnContinue_i = function() {
        var e = new eui.Image;
        return this.btnContinue = e,
        e.source = "rpm_panel2_zu_55_png",
        e.visible = !0,
        e.x = 484,
        e.y = 464,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "rpm_panel2_zu_54_png",
        e.visible = !0,
        e.x = 484,
        e.y = 464,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.redPupilMuse.Panel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "tipsbg", "jbqbdskywcycjhjh5csjjktggk", "grp1_pet1", "grp1_pet2", "grp1_pet3", "grp1_pet4", "grp1_pet5", "grp1", "grp2_pet1", "grp2_pet2", "grp2_pet3", "grp2_pet4", "grp2", "grp3_pet1", "grp3_pet2", "grp3_pet3", "grp3", "grp4_pet1", "grp4_pet2", "grp4", "grp5_pet1", "grp5", "pets", "rb_enemy1", "rb_enemy2", "rb_enemy3", "rb_enemy4", "rb_enemy5", "yijibai", "xuanzhong", "grp_petsSelect", "btnFight", "btnFast", "rig", "bar_zhandou", "tiao", "qianghua", "bar", "s1", "star1", "s2", "star2", "s3", "star3", "s4", "star4", "s5", "star5", "stars", "txt_leftTime", "btnAdd", "cisu", "btnOnekey", "btnBag", "btnCure", "grp_content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grp_content_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["head", "pass"],
            this.elementsContent = [this._Image1_i(), this.head_i(), this._Image2_i(), this.pass_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_panel3_1_png",
            e.visible = !0,
            e.x = 14,
            e.y = 12,
            e
        },
        i.head_i = function() {
            var e = new eui.Image;
            return this.head = e,
            e.height = 70,
            e.source = "",
            e.visible = !0,
            e.width = 70,
            e.x = 14,
            e.y = 12,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "rpm_panel3_xuanzhong_png",
            e.touchEnabled = !1,
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        i.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "rpm_panel3_yijibai_png",
            e.visible = !1,
            e.x = 14,
            e.y = 12,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["head", "pass"],
            this.elementsContent = [this._Image1_i(), this.head_i(), this._Image2_i(), this.pass_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_panel3_1_png",
            e.visible = !0,
            e.x = 14,
            e.y = 12,
            e
        },
        i.head_i = function() {
            var e = new eui.Image;
            return this.head = e,
            e.height = 70,
            e.source = "",
            e.visible = !0,
            e.width = 70,
            e.x = 14,
            e.y = 12,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "rpm_panel3_xuanzhong_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        i.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "rpm_panel3_yijibai_png",
            e.visible = !1,
            e.x = 14,
            e.y = 12,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["head", "pass"],
            this.elementsContent = [this._Image1_i(), this.head_i(), this._Image2_i(), this.pass_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_panel3_1_png",
            e.visible = !0,
            e.x = 14,
            e.y = 12,
            e
        },
        i.head_i = function() {
            var e = new eui.Image;
            return this.head = e,
            e.height = 70,
            e.source = "",
            e.visible = !0,
            e.width = 70,
            e.x = 14,
            e.y = 12,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "rpm_panel3_xuanzhong_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        i.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "rpm_panel3_yijibai_png",
            e.visible = !1,
            e.x = 14,
            e.y = 12,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["head", "pass"],
            this.elementsContent = [this._Image1_i(), this.head_i(), this._Image2_i(), this.pass_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_panel3_1_png",
            e.visible = !0,
            e.x = 14,
            e.y = 12,
            e
        },
        i.head_i = function() {
            var e = new eui.Image;
            return this.head = e,
            e.height = 70,
            e.source = "",
            e.visible = !0,
            e.width = 70,
            e.x = 14,
            e.y = 12,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "rpm_panel3_xuanzhong_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        i.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "rpm_panel3_yijibai_png",
            e.visible = !1,
            e.x = 14,
            e.y = 12,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["head", "pass"],
            this.elementsContent = [this._Image1_i(), this.head_i(), this._Image2_i(), this.pass_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "rpm_panel3_1_png",
            e.visible = !0,
            e.x = 14,
            e.y = 12,
            e
        },
        i.head_i = function() {
            var e = new eui.Image;
            return this.head = e,
            e.height = 70,
            e.source = "",
            e.visible = !0,
            e.width = 70,
            e.x = 14,
            e.y = 12,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "rpm_panel3_xuanzhong_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        i.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "rpm_panel3_yijibai_png",
            e.visible = !1,
            e.x = 14,
            e.y = 12,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "rpm_panel3_tiao_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    _ = t.prototype;
    return _.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "rpm_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    _.grp_content_i = function() {
        var e = new eui.Group;
        return this.grp_content = e,
        e.horizontalCenter = 3,
        e.width = 1110,
        e.y = 54,
        e.elementsContent = [this._Group1_i(), this._Image1_i(), this._Image2_i(), this._Image3_i(), this.rig_i(), this.bar_i(), this.stars_i(), this.cisu_i(), this._Image19_i(), this.btnOnekey_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    _._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 123,
        e.y = 0,
        e.elementsContent = [this.tipsbg_i(), this.jbqbdskywcycjhjh5csjjktggk_i()],
        e
    },
    _.tipsbg_i = function() {
        var e = new eui.Image;
        return this.tipsbg = e,
        e.source = "rpm_panel3_tipsbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.jbqbdskywcycjhjh5csjjktggk_i = function() {
        var e = new eui.Label;
        return this.jbqbdskywcycjhjh5csjjktggk = e,
        e.fontFamily = "MFShangHei",
        e.size = 19.9068517867105,
        e.text = "击败全部对手可以完成一次强化，强化5次圣剑即可通过关卡",
        e.textColor = 16759667,
        e.x = 174,
        e.y = 5,
        e
    },
    _._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_zu_52_png",
        e.x = 129,
        e.y = 303,
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_zu_52_png",
        e.x = 615,
        e.y = 303,
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_tuceng_8_png",
        e.x = 32,
        e.y = 98,
        e
    },
    _.rig_i = function() {
        var e = new eui.Group;
        return this.rig = e,
        e.visible = !0,
        e.x = 534,
        e.y = 47,
        e.elementsContent = [this.pets_i(), this.grp_petsSelect_i(), this.btnFight_i(), this.btnFast_i()],
        e
    },
    _.pets_i = function() {
        var e = new eui.Group;
        return this.pets = e,
        e.visible = !0,
        e.x = 0,
        e.y = 13,
        e.elementsContent = [this.grp1_i(), this.grp2_i(), this.grp3_i(), this.grp4_i(), this.grp5_i()],
        e
    },
    _.grp1_i = function() {
        var e = new eui.Group;
        return this.grp1 = e,
        e.x = 70,
        e.y = 65,
        e.elementsContent = [this.grp1_pet1_i(), this.grp1_pet2_i(), this.grp1_pet3_i(), this.grp1_pet4_i(), this.grp1_pet5_i()],
        e
    },
    _.grp1_pet1_i = function() {
        var e = new eui.Image;
        return this.grp1_pet1 = e,
        e.source = "rpm_panel3_1068_png",
        e.visible = !1,
        e.x = 0,
        e.y = 105,
        e
    },
    _.grp1_pet2_i = function() {
        var e = new eui.Image;
        return this.grp1_pet2 = e,
        e.source = "rpm_panel3_1230_png",
        e.visible = !1,
        e.x = 22,
        e.y = 104,
        e
    },
    _.grp1_pet3_i = function() {
        var e = new eui.Image;
        return this.grp1_pet3 = e,
        e.source = "rpm_panel3_438_png",
        e.visible = !1,
        e.x = 63,
        e.y = 17,
        e
    },
    _.grp1_pet4_i = function() {
        var e = new eui.Image;
        return this.grp1_pet4 = e,
        e.source = "rpm_panel3_957_png",
        e.visible = !1,
        e.x = 90,
        e.y = 28,
        e
    },
    _.grp1_pet5_i = function() {
        var e = new eui.Image;
        return this.grp1_pet5 = e,
        e.source = "rpm_panel3_1947_png",
        e.visible = !1,
        e.x = 75,
        e.y = 0,
        e
    },
    _.grp2_i = function() {
        var e = new eui.Group;
        return this.grp2 = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.grp2_pet1_i(), this.grp2_pet2_i(), this.grp2_pet3_i(), this.grp2_pet4_i()],
        e
    },
    _.grp2_pet1_i = function() {
        var e = new eui.Image;
        return this.grp2_pet1 = e,
        e.source = "rpm_panel3_2788_png",
        e.visible = !1,
        e.x = 106,
        e.y = 56,
        e
    },
    _.grp2_pet2_i = function() {
        var e = new eui.Image;
        return this.grp2_pet2 = e,
        e.source = "rpm_panel3_2797_png",
        e.visible = !1,
        e.x = 75,
        e.y = 98,
        e
    },
    _.grp2_pet3_i = function() {
        var e = new eui.Image;
        return this.grp2_pet3 = e,
        e.source = "rpm_panel3_2804_png",
        e.visible = !1,
        e.x = 56,
        e.y = 33,
        e
    },
    _.grp2_pet4_i = function() {
        var e = new eui.Image;
        return this.grp2_pet4 = e,
        e.source = "rpm_panel3_2811_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    _.grp3_i = function() {
        var e = new eui.Group;
        return this.grp3 = e,
        e.visible = !0,
        e.x = 19,
        e.y = 0,
        e.elementsContent = [this.grp3_pet1_i(), this.grp3_pet2_i(), this.grp3_pet3_i()],
        e
    },
    _.grp3_pet1_i = function() {
        var e = new eui.Image;
        return this.grp3_pet1 = e,
        e.source = "rpm_panel3_2815_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    _.grp3_pet2_i = function() {
        var e = new eui.Image;
        return this.grp3_pet2 = e,
        e.source = "rpm_panel3_2823_png",
        e.visible = !0,
        e.x = 8,
        e.y = 10,
        e
    },
    _.grp3_pet3_i = function() {
        var e = new eui.Image;
        return this.grp3_pet3 = e,
        e.source = "rpm_panel3_2834_png",
        e.visible = !1,
        e.x = 37,
        e.y = 12,
        e
    },
    _.grp4_i = function() {
        var e = new eui.Group;
        return this.grp4 = e,
        e.visible = !1,
        e.x = 20,
        e.y = 0,
        e.elementsContent = [this.grp4_pet1_i(), this.grp4_pet2_i()],
        e
    },
    _.grp4_pet1_i = function() {
        var e = new eui.Image;
        return this.grp4_pet1 = e,
        e.source = "rpm_panel3_2841_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.grp4_pet2_i = function() {
        var e = new eui.Image;
        return this.grp4_pet2 = e,
        e.source = "rpm_panel3_2814_png",
        e.x = 64,
        e.y = 3,
        e
    },
    _.grp5_i = function() {
        var e = new eui.Group;
        return this.grp5 = e,
        e.visible = !1,
        e.x = 20,
        e.y = 0,
        e.elementsContent = [this.grp5_pet1_i()],
        e
    },
    _.grp5_pet1_i = function() {
        var e = new eui.Image;
        return this.grp5_pet1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "rpm_panel3_2849_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    _.grp_petsSelect_i = function() {
        var e = new eui.Group;
        return this.grp_petsSelect = e,
        e.x = 430,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this._Group2_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this.yijibai_i(), this.xuanzhong_i()],
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_headBg_png",
        e.visible = !0,
        e.x = 0,
        e.y = -10,
        e
    },
    _._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 1,
        e.y = -10,
        e.layout = this._VerticalLayout1_i(),
        e.elementsContent = [this.rb_enemy1_i(), this.rb_enemy2_i(), this.rb_enemy3_i(), this.rb_enemy4_i(), this.rb_enemy5_i()],
        e
    },
    _._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = -10,
        e
    },
    _.rb_enemy1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy1 = e,
        e.groupName = "enemyChoose",
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    _.rb_enemy2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy2 = e,
        e.groupName = "enemyChoose",
        e.value = "2",
        e.visible = !0,
        e.x = 0,
        e.y = 88,
        e.skinName = n,
        e
    },
    _.rb_enemy3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy3 = e,
        e.groupName = "enemyChoose",
        e.value = "3",
        e.visible = !0,
        e.x = 0,
        e.y = 172,
        e.skinName = r,
        e
    },
    _.rb_enemy4_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy4 = e,
        e.groupName = "enemyChoose",
        e.value = "4",
        e.visible = !0,
        e.x = 0,
        e.y = 256,
        e.skinName = a,
        e
    },
    _.rb_enemy5_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy5 = e,
        e.groupName = "enemyChoose",
        e.value = "5",
        e.visible = !0,
        e.x = 0,
        e.y = 342,
        e.skinName = u,
        e
    },
    _._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_1_png",
        e.visible = !1,
        e.x = 14,
        e.y = 16,
        e
    },
    _._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_1_png",
        e.visible = !1,
        e.x = 14,
        e.y = 98,
        e
    },
    _._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_1_png",
        e.visible = !1,
        e.x = 14,
        e.y = 181,
        e
    },
    _._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_1_png",
        e.visible = !1,
        e.x = 14,
        e.y = 263,
        e
    },
    _._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_1_png",
        e.visible = !1,
        e.x = 14,
        e.y = 345,
        e
    },
    _.yijibai_i = function() {
        var e = new eui.Image;
        return this.yijibai = e,
        e.source = "rpm_panel3_yijibai_png",
        e.visible = !1,
        e.x = 14,
        e.y = 98,
        e
    },
    _.xuanzhong_i = function() {
        var e = new eui.Image;
        return this.xuanzhong = e,
        e.source = "rpm_panel3_xuanzhong_png",
        e.visible = !1,
        e.x = 1,
        e.y = 4,
        e
    },
    _.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.height = 46,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "rpm_panel3_btnTiaozhan_png",
        e.width = 134,
        e.x = 275.0000000000001,
        e.y = 407,
        e
    },
    _.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.height = 46,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "rpm_panel3_btnTiaozhan_kb_png",
        e.width = 134,
        e.x = 116.00000000000011,
        e.y = 407,
        e
    },
    _.bar_i = function() {
        var e = new eui.Group;
        return this.bar = e,
        e.x = 452,
        e.y = 119,
        e.elementsContent = [this._Image10_i(), this.bar_zhandou_i(), this.tiao_i(), this.qianghua_i()],
        e
    },
    _._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_di_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    _.bar_zhandou_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_zhandou = e,
        e.direction = "btt",
        e.maximum = 0,
        e.value = 0,
        e.visible = !0,
        e.x = 10,
        e.y = 10,
        e.skinName = s,
        e
    },
    _.tiao_i = function() {
        var e = new eui.Image;
        return this.tiao = e,
        e.source = "rpm_panel3_tiao_png",
        e.visible = !1,
        e.x = 10,
        e.y = 10,
        e
    },
    _.qianghua_i = function() {
        var e = new eui.Image;
        return this.qianghua = e,
        e.source = "rpm_panel3_qianghua_png",
        e.visible = !0,
        e.x = 77,
        e.y = 121,
        e
    },
    _.stars_i = function() {
        var e = new eui.Group;
        return this.stars = e,
        e.x = 418,
        e.y = 60,
        e.elementsContent = [this._Image11_i(), this.star1_i(), this.star2_i(), this.star3_i(), this.star4_i(), this.star5_i(), this._Image17_i()],
        e
    },
    _._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_juxing_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.star1_i = function() {
        var e = new eui.Group;
        return this.star1 = e,
        e.visible = !0,
        e.x = 26,
        e.y = 3,
        e.elementsContent = [this._Image12_i(), this.s1_i()],
        e
    },
    _._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_icon_star_bg_kb_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    _.s1_i = function() {
        var e = new eui.Image;
        return this.s1 = e,
        e.source = "rpm_panel3_zu_1_png",
        e.x = 3,
        e.y = 3,
        e
    },
    _.star2_i = function() {
        var e = new eui.Group;
        return this.star2 = e,
        e.x = 69,
        e.y = 2,
        e.elementsContent = [this._Image13_i(), this.s2_i()],
        e
    },
    _._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_icon_star_bg_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.s2_i = function() {
        var e = new eui.Image;
        return this.s2 = e,
        e.source = "rpm_panel3_zu_1_png",
        e.x = 3,
        e.y = 4,
        e
    },
    _.star3_i = function() {
        var e = new eui.Group;
        return this.star3 = e,
        e.x = 113,
        e.y = 2,
        e.elementsContent = [this._Image14_i(), this.s3_i()],
        e
    },
    _._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_icon_star_bg_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.s3_i = function() {
        var e = new eui.Image;
        return this.s3 = e,
        e.source = "rpm_panel3_zu_1_png",
        e.x = 3,
        e.y = 4,
        e
    },
    _.star4_i = function() {
        var e = new eui.Group;
        return this.star4 = e,
        e.x = 156,
        e.y = 2,
        e.elementsContent = [this._Image15_i(), this.s4_i()],
        e
    },
    _._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_icon_star_bg_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.s4_i = function() {
        var e = new eui.Image;
        return this.s4 = e,
        e.source = "rpm_panel3_zu_1_png",
        e.x = 3,
        e.y = 4,
        e
    },
    _.star5_i = function() {
        var e = new eui.Group;
        return this.star5 = e,
        e.x = 200,
        e.y = 3,
        e.elementsContent = [this._Image16_i(), this.s5_i()],
        e
    },
    _._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_icon_star_bg_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.s5_i = function() {
        var e = new eui.Image;
        return this.s5 = e,
        e.source = "rpm_panel3_zu_1_png",
        e.x = 3,
        e.y = 3,
        e
    },
    _._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_zu_58_png",
        e.x = 76,
        e.y = 39,
        e
    },
    _.cisu_i = function() {
        var e = new eui.Group;
        return this.cisu = e,
        e.x = 434,
        e.y = 512,
        e.elementsContent = [this._Image18_i(), this._Label1_i(), this.txt_leftTime_i(), this.btnAdd_i(), this._Label2_i()],
        e
    },
    _._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel3_jx_904_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0296401571647,
        e.text = "今日剩余挑战次数：",
        e.textColor = 16776661,
        e.x = 10,
        e.y = 7,
        e
    },
    _.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20.0296401571647,
        e.text = "X",
        e.textColor = 16774231,
        e.x = 183,
        e.y = 6,
        e
    },
    _.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "rpm_panel3_btnadd_png",
        e.x = 207,
        e.y = 2,
        e
    },
    _._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.1667647552469,
        e.text = "VIP每日额外获得2次免费次数",
        e.textColor = 16743233,
        e.x = 13,
        e.y = 32,
        e
    },
    _._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_mainpanel_ti2_png",
        e.x = 728.54,
        e.y = 399.821,
        e
    },
    _.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "rpm_panel3_btnonekey_png",
        e.x = 1010,
        e.y = 483,
        e
    },
    _.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "rpm_panel3_jlbb_png",
        e.x = 0,
        e.y = 388,
        e
    },
    _.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "rpm_panel3_jlhf_png",
        e.x = 0,
        e.y = 479,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.redPupilMuse.Panel4Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "title", "btnOnekey", "txt_leftTime", "btnAdd", "cishu", "btnUp", "yihuode", "btnBag", "btnCure", "panel4", "dikuang_an_1", "dikuang_liang_1", "jihuo_1", "genghuan_1", "f1_icon", "btnFast1", "btnZhi1", "grp_pop1", "f1", "dikuang_an_2", "dikuang_liang_2", "jihuo_2", "genghuan_2", "f2_icon", "btnFast2", "btnZhi2", "grp_pop2", "f2", "dikuang_an_3", "dikuang_liang_3", "jihuo_3", "genghuan_3", "f3_icon", "btnFast3", "btnZhi3", "grp_pop3", "f3", "dikuang_an_4", "dikuang_liang_4", "jihuo_4", "genghuan_4", "f4_icon", "btnFast4", "btnZhi4", "grp_pop4", "f4", "dikuang_an_5", "dikuang_liang_5", "jihuo_5", "genghuan_5", "f5_icon", "btnFast5", "btnZhi5", "grp_pop5", "f5", "dikuang_an_6", "dikuang_liang_6", "jihuo_6", "genghuan_6", "f6_icon", "btnFast6", "btnZhi6", "grp_pop6", "f6"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.panel4_i(), this._Image5_i(), this.f1_i(), this.f2_i(), this.f3_i(), this.f4_i(), this.f5_i(), this.f6_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "rpm_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.panel4_i = function() {
        var e = new eui.Group;
        return this.panel4 = e,
        e.horizontalCenter = 2,
        e.y = 54,
        e.elementsContent = [this._Image1_i(), this.title_i(), this.btnOnekey_i(), this.cishu_i(), this.btnUp_i(), this.yihuode_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_tuceng_8_png",
        e.x = 233,
        e.y = 78,
        e
    },
    i.title_i = function() {
        var e = new eui.Group;
        return this.title = e,
        e.x = 114,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Label1_i(), this._Label2_i(), this._Image3_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_tipsbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9068517867105,
        e.text = "免费挑战可以激活/更换随机一种花印，凑齐6种不同花印即可领取赤瞳·缪斯",
        e.textColor = 16759667,
        e.x = 107,
        e.y = 5,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9068517867105,
        e.text = "激活花印均可获得2个万花瞳印，用来进行能力强化",
        e.textColor = 16759667,
        e.x = 200,
        e.y = 32,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_zu_1_png",
        e.x = 112,
        e.y = 56,
        e
    },
    i.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "rpm_panel4_btnonekey_png",
        e.x = 1001,
        e.y = 483,
        e
    },
    i.cishu_i = function() {
        var e = new eui.Group;
        return this.cishu = e,
        e.x = 409,
        e.y = 512,
        e.elementsContent = [this._Image4_i(), this._Label3_i(), this.txt_leftTime_i(), this.btnAdd_i(), this._Label4_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_jx_904_kb_2_png",
        e.x = 30,
        e.y = 0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0587136894767,
        e.text = "今日剩余免费激活次数：",
        e.textColor = 16776661,
        e.x = 0,
        e.y = 7,
        e
    },
    i.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20.0587136894767,
        e.text = "X",
        e.textColor = 16774231,
        e.x = 214,
        e.y = 6,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "rpm_panel4_btnadd_png",
        e.x = 238,
        e.y = 2,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.1667647552469,
        e.text = "VIP每日获得额外3次免费次数",
        e.textColor = 16743233,
        e.x = 29,
        e.y = 32,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "rpm_panel4_btnup_png",
        e.x = 1001,
        e.y = 489,
        e
    },
    i.yihuode_i = function() {
        var e = new eui.Image;
        return this.yihuode = e,
        e.source = "rpm_panel4_yihuode_png",
        e.x = 477,
        e.y = 262,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "rpm_panel3_jlbb_png",
        e.x = 0,
        e.y = 388,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "rpm_panel3_jlhf_png",
        e.x = 0,
        e.y = 479,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_mainpanel_ti2_png",
        e.x = 502.437,
        e.y = 137.238,
        e
    },
    i.f1_i = function() {
        var e = new eui.Group;
        return this.f1 = e,
        e.horizontalCenter = -428,
        e.visible = !0,
        e.y = 152,
        e.elementsContent = [this.dikuang_an_1_i(), this.dikuang_liang_1_i(), this.jihuo_1_i(), this.genghuan_1_i(), this.f1_icon_i(), this.grp_pop1_i()],
        e
    },
    i.dikuang_an_1_i = function() {
        var e = new eui.Image;
        return this.dikuang_an_1 = e,
        e.source = "rpm_panel4_dikuang_an_png",
        e.visible = !0,
        e.x = 16,
        e.y = 16,
        e
    },
    i.dikuang_liang_1_i = function() {
        var e = new eui.Image;
        return this.dikuang_liang_1 = e,
        e.source = "rpm_panel4_dikuang_liang_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.jihuo_1_i = function() {
        var e = new eui.Image;
        return this.jihuo_1 = e,
        e.source = "rpm_panel4_jihuo_png",
        e.visible = !0,
        e.x = 29,
        e.y = 132,
        e
    },
    i.genghuan_1_i = function() {
        var e = new eui.Image;
        return this.genghuan_1 = e,
        e.source = "rpm_panel4_genghuan_png",
        e.visible = !0,
        e.x = 29,
        e.y = 132,
        e
    },
    i.f1_icon_i = function() {
        var e = new eui.Image;
        return this.f1_icon = e,
        e.source = "rpm_panel4_1_png",
        e.visible = !0,
        e.x = 41,
        e.y = 44,
        e
    },
    i.grp_pop1_i = function() {
        var e = new eui.Group;
        return this.grp_pop1 = e,
        e.visible = !0,
        e.x = 18,
        e.y = 11,
        e.elementsContent = [this._Image6_i(), this.btnFast1_i(), this.btnZhi1_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_di_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnFast1_i = function() {
        var e = new eui.Image;
        return this.btnFast1 = e,
        e.source = "rpm_panel4_kuaisu_png",
        e.x = 11,
        e.y = 18,
        e
    },
    i.btnZhi1_i = function() {
        var e = new eui.Image;
        return this.btnZhi1 = e,
        e.source = "rpm_panel4_zhiding_png",
        e.x = 11,
        e.y = 63,
        e
    },
    i.f2_i = function() {
        var e = new eui.Group;
        return this.f2 = e,
        e.horizontalCenter = -258,
        e.visible = !0,
        e.y = 225,
        e.elementsContent = [this.dikuang_an_2_i(), this.dikuang_liang_2_i(), this.jihuo_2_i(), this.genghuan_2_i(), this.f2_icon_i(), this.grp_pop2_i()],
        e
    },
    i.dikuang_an_2_i = function() {
        var e = new eui.Image;
        return this.dikuang_an_2 = e,
        e.source = "rpm_panel4_dikuang_an_png",
        e.x = 16,
        e.y = 16,
        e
    },
    i.dikuang_liang_2_i = function() {
        var e = new eui.Image;
        return this.dikuang_liang_2 = e,
        e.source = "rpm_panel4_dikuang_liang_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.jihuo_2_i = function() {
        var e = new eui.Image;
        return this.jihuo_2 = e,
        e.source = "rpm_panel4_jihuo_png",
        e.x = 29,
        e.y = 132,
        e
    },
    i.genghuan_2_i = function() {
        var e = new eui.Image;
        return this.genghuan_2 = e,
        e.source = "rpm_panel4_genghuan_png",
        e.x = 29,
        e.y = 132,
        e
    },
    i.f2_icon_i = function() {
        var e = new eui.Image;
        return this.f2_icon = e,
        e.source = "rpm_panel4_1_png",
        e.x = 41,
        e.y = 44,
        e
    },
    i.grp_pop2_i = function() {
        var e = new eui.Group;
        return this.grp_pop2 = e,
        e.x = 18,
        e.y = 11,
        e.elementsContent = [this._Image7_i(), this.btnFast2_i(), this.btnZhi2_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_di_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnFast2_i = function() {
        var e = new eui.Image;
        return this.btnFast2 = e,
        e.source = "rpm_panel4_kuaisu_png",
        e.x = 11,
        e.y = 18,
        e
    },
    i.btnZhi2_i = function() {
        var e = new eui.Image;
        return this.btnZhi2 = e,
        e.source = "rpm_panel4_zhiding_png",
        e.x = 11,
        e.y = 63,
        e
    },
    i.f3_i = function() {
        var e = new eui.Group;
        return this.f3 = e,
        e.horizontalCenter = -372,
        e.y = 377,
        e.elementsContent = [this.dikuang_an_3_i(), this.dikuang_liang_3_i(), this.jihuo_3_i(), this.genghuan_3_i(), this.f3_icon_i(), this.grp_pop3_i()],
        e
    },
    i.dikuang_an_3_i = function() {
        var e = new eui.Image;
        return this.dikuang_an_3 = e,
        e.source = "rpm_panel4_dikuang_an_png",
        e.x = 16,
        e.y = 16,
        e
    },
    i.dikuang_liang_3_i = function() {
        var e = new eui.Image;
        return this.dikuang_liang_3 = e,
        e.source = "rpm_panel4_dikuang_liang_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.jihuo_3_i = function() {
        var e = new eui.Image;
        return this.jihuo_3 = e,
        e.source = "rpm_panel4_jihuo_png",
        e.x = 29,
        e.y = 132,
        e
    },
    i.genghuan_3_i = function() {
        var e = new eui.Image;
        return this.genghuan_3 = e,
        e.source = "rpm_panel4_genghuan_png",
        e.visible = !0,
        e.x = 29,
        e.y = 132,
        e
    },
    i.f3_icon_i = function() {
        var e = new eui.Image;
        return this.f3_icon = e,
        e.source = "rpm_panel4_1_png",
        e.x = 41,
        e.y = 44,
        e
    },
    i.grp_pop3_i = function() {
        var e = new eui.Group;
        return this.grp_pop3 = e,
        e.x = 18,
        e.y = 11,
        e.elementsContent = [this._Image8_i(), this.btnFast3_i(), this.btnZhi3_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_di_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnFast3_i = function() {
        var e = new eui.Image;
        return this.btnFast3 = e,
        e.source = "rpm_panel4_kuaisu_png",
        e.x = 11,
        e.y = 18,
        e
    },
    i.btnZhi3_i = function() {
        var e = new eui.Image;
        return this.btnZhi3 = e,
        e.source = "rpm_panel4_zhiding_png",
        e.x = 11,
        e.y = 63,
        e
    },
    i.f4_i = function() {
        var e = new eui.Group;
        return this.f4 = e,
        e.horizontalCenter = 428,
        e.y = 152,
        e.elementsContent = [this.dikuang_an_4_i(), this.dikuang_liang_4_i(), this.jihuo_4_i(), this.genghuan_4_i(), this.f4_icon_i(), this.grp_pop4_i()],
        e
    },
    i.dikuang_an_4_i = function() {
        var e = new eui.Image;
        return this.dikuang_an_4 = e,
        e.source = "rpm_panel4_dikuang_an_png",
        e.x = 16,
        e.y = 16,
        e
    },
    i.dikuang_liang_4_i = function() {
        var e = new eui.Image;
        return this.dikuang_liang_4 = e,
        e.source = "rpm_panel4_dikuang_liang_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.jihuo_4_i = function() {
        var e = new eui.Image;
        return this.jihuo_4 = e,
        e.source = "rpm_panel4_jihuo_png",
        e.x = 29,
        e.y = 132,
        e
    },
    i.genghuan_4_i = function() {
        var e = new eui.Image;
        return this.genghuan_4 = e,
        e.source = "rpm_panel4_genghuan_png",
        e.x = 29,
        e.y = 132,
        e
    },
    i.f4_icon_i = function() {
        var e = new eui.Image;
        return this.f4_icon = e,
        e.source = "rpm_panel4_1_png",
        e.x = 41,
        e.y = 44,
        e
    },
    i.grp_pop4_i = function() {
        var e = new eui.Group;
        return this.grp_pop4 = e,
        e.x = 18,
        e.y = 11,
        e.elementsContent = [this._Image9_i(), this.btnFast4_i(), this.btnZhi4_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_di_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnFast4_i = function() {
        var e = new eui.Image;
        return this.btnFast4 = e,
        e.source = "rpm_panel4_kuaisu_png",
        e.x = 11,
        e.y = 18,
        e
    },
    i.btnZhi4_i = function() {
        var e = new eui.Image;
        return this.btnZhi4 = e,
        e.source = "rpm_panel4_zhiding_png",
        e.x = 11,
        e.y = 63,
        e
    },
    i.f5_i = function() {
        var e = new eui.Group;
        return this.f5 = e,
        e.horizontalCenter = 258,
        e.y = 225,
        e.elementsContent = [this.dikuang_an_5_i(), this.dikuang_liang_5_i(), this.jihuo_5_i(), this.genghuan_5_i(), this.f5_icon_i(), this.grp_pop5_i()],
        e
    },
    i.dikuang_an_5_i = function() {
        var e = new eui.Image;
        return this.dikuang_an_5 = e,
        e.source = "rpm_panel4_dikuang_an_png",
        e.x = 16,
        e.y = 16,
        e
    },
    i.dikuang_liang_5_i = function() {
        var e = new eui.Image;
        return this.dikuang_liang_5 = e,
        e.source = "rpm_panel4_dikuang_liang_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.jihuo_5_i = function() {
        var e = new eui.Image;
        return this.jihuo_5 = e,
        e.source = "rpm_panel4_jihuo_png",
        e.x = 29,
        e.y = 132,
        e
    },
    i.genghuan_5_i = function() {
        var e = new eui.Image;
        return this.genghuan_5 = e,
        e.source = "rpm_panel4_genghuan_png",
        e.x = 29,
        e.y = 132,
        e
    },
    i.f5_icon_i = function() {
        var e = new eui.Image;
        return this.f5_icon = e,
        e.source = "rpm_panel4_1_png",
        e.x = 41,
        e.y = 44,
        e
    },
    i.grp_pop5_i = function() {
        var e = new eui.Group;
        return this.grp_pop5 = e,
        e.x = 18,
        e.y = 11,
        e.elementsContent = [this._Image10_i(), this.btnFast5_i(), this.btnZhi5_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_di_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnFast5_i = function() {
        var e = new eui.Image;
        return this.btnFast5 = e,
        e.source = "rpm_panel4_kuaisu_png",
        e.x = 11,
        e.y = 18,
        e
    },
    i.btnZhi5_i = function() {
        var e = new eui.Image;
        return this.btnZhi5 = e,
        e.source = "rpm_panel4_zhiding_png",
        e.x = 11,
        e.y = 63,
        e
    },
    i.f6_i = function() {
        var e = new eui.Group;
        return this.f6 = e,
        e.horizontalCenter = 364,
        e.y = 377,
        e.elementsContent = [this.dikuang_an_6_i(), this.dikuang_liang_6_i(), this.jihuo_6_i(), this.genghuan_6_i(), this.f6_icon_i(), this.grp_pop6_i()],
        e
    },
    i.dikuang_an_6_i = function() {
        var e = new eui.Image;
        return this.dikuang_an_6 = e,
        e.source = "rpm_panel4_dikuang_an_png",
        e.x = 16,
        e.y = 16,
        e
    },
    i.dikuang_liang_6_i = function() {
        var e = new eui.Image;
        return this.dikuang_liang_6 = e,
        e.source = "rpm_panel4_dikuang_liang_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.jihuo_6_i = function() {
        var e = new eui.Image;
        return this.jihuo_6 = e,
        e.source = "rpm_panel4_jihuo_png",
        e.x = 29,
        e.y = 132,
        e
    },
    i.genghuan_6_i = function() {
        var e = new eui.Image;
        return this.genghuan_6 = e,
        e.source = "rpm_panel4_genghuan_png",
        e.x = 29,
        e.y = 132,
        e
    },
    i.f6_icon_i = function() {
        var e = new eui.Image;
        return this.f6_icon = e,
        e.source = "rpm_panel4_1_png",
        e.x = 41,
        e.y = 44,
        e
    },
    i.grp_pop6_i = function() {
        var e = new eui.Group;
        return this.grp_pop6 = e,
        e.x = 18,
        e.y = 11,
        e.elementsContent = [this._Image11_i(), this.btnFast6_i(), this.btnZhi6_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_panel4_di_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnFast6_i = function() {
        var e = new eui.Image;
        return this.btnFast6 = e,
        e.source = "rpm_panel4_kuaisu_png",
        e.x = 11,
        e.y = 18,
        e
    },
    i.btnZhi6_i = function() {
        var e = new eui.Image;
        return this.btnZhi6 = e,
        e.source = "rpm_panel4_zhiding_png",
        e.x = 11,
        e.y = 63,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/UppopSkin.exml"] = window.redPupilMuse.UppopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnGo", "txt_num", "btnAdd", "btnClose", "btnExchange_1", "btnKe", "ke", "btnExchange_2", "btnTe", "te", "btnExchange_3", "btnWu", "wu", "upPop"],
        this.height = 355,
        this.width = 518,
        this.elementsContent = [this.upPop_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.upPop_i = function() {
        var e = new eui.Group;
        return this.upPop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnGo_i(), this._Label1_i(), this.txt_num_i(), this.btnAdd_i(), this.btnClose_i(), this.ke_i(), this.te_i(), this.wu_i(), this._Image11_i(), this._Image12_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_choosepop_bg4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.source = "rpm_uppop_btngo_png",
        e.x = 298,
        e.y = 290,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9145105121161,
        e.text = "万花瞳印:",
        e.textColor = 16759667,
        e.x = 95,
        e.y = 303,
        e
    },
    i.txt_num_i = function() {
        var e = new eui.Label;
        return this.txt_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "XXXX",
        e.textColor = 16774231,
        e.x = 202,
        e.y = 303,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "rpm_uppop_btnadd_png",
        e.x = 255,
        e.y = 298,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "rpm_uppop_close1_png",
        e.x = 472,
        e.y = 9,
        e
    },
    i.ke_i = function() {
        var e = new eui.Group;
        return this.ke = e,
        e.x = 37,
        e.y = 55,
        e.elementsContent = [this._Label2_i(), this._Image2_i(), this.btnExchange_1_i(), this._Image3_i(), this.btnKe_i(), this._Image4_i()],
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0587136894767,
        e.text = "x10",
        e.textColor = 16774231,
        e.x = 68,
        e.y = 114,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_tuceng_59_png",
        e.x = 35,
        e.y = 108,
        e
    },
    i.btnExchange_1_i = function() {
        var e = new eui.Image;
        return this.btnExchange_1 = e,
        e.source = "rpm_uppop_btnexchange_png",
        e.x = 23,
        e.y = 141,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_zu_2_png",
        e.x = 30,
        e.y = 37,
        e
    },
    i.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "rpm_uppop_tuceng_60_png",
        e.x = 39,
        e.y = 45,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_zsky_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.te_i = function() {
        var e = new eui.Group;
        return this.te = e,
        e.x = 212,
        e.y = 55,
        e.elementsContent = [this._Label3_i(), this._Image5_i(), this.btnExchange_2_i(), this._Image6_i(), this.btnTe_i(), this._Image7_i()],
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0587136894767,
        e.text = "x15",
        e.textColor = 16774231,
        e.x = 48,
        e.y = 114,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_tuceng_59_png",
        e.x = 15,
        e.y = 108,
        e
    },
    i.btnExchange_2_i = function() {
        var e = new eui.Image;
        return this.btnExchange_2 = e,
        e.source = "rpm_uppop_btnexchange_png",
        e.x = 3,
        e.y = 141,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_zu_2_png",
        e.x = 10,
        e.y = 37,
        e
    },
    i.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "rpm_uppop_zhuanshu_png",
        e.x = 22,
        e.y = 51,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_zstx_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.wu_i = function() {
        var e = new eui.Group;
        return this.wu = e,
        e.x = 366,
        e.y = 55,
        e.elementsContent = [this._Label4_i(), this._Image8_i(), this.btnExchange_3_i(), this._Image9_i(), this.btnWu_i(), this._Image10_i()],
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0587136894767,
        e.text = "x20",
        e.textColor = 16774231,
        e.x = 49,
        e.y = 114,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_tuceng_59_png",
        e.x = 16,
        e.y = 108,
        e
    },
    i.btnExchange_3_i = function() {
        var e = new eui.Image;
        return this.btnExchange_3 = e,
        e.source = "rpm_uppop_btnexchange_png",
        e.x = 4,
        e.y = 141,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_zu_2_png",
        e.x = 11,
        e.y = 37,
        e
    },
    i.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "rpm_uppop_diwu_png",
        e.x = 20,
        e.y = 45,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_diwujineng_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_nlds_png",
        e.x = 209,
        e.y = 12,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "rpm_uppop_tuceng_59_png",
        e.x = 60,
        e.y = 298,
        e
    },
    t
} (eui.Skin);