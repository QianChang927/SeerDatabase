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
kingMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.service.setValues([e.KingMuseConst.forever_close_time, e.KingMuseConst.forever_current_level, e.KingMuseConst.forever_item_num, e.KingMuseConst.forever_level1_bossNum, e.KingMuseConst.forever_level1_openTimes, e.KingMuseConst.forever_level2_bossNum, e.KingMuseConst.forever_level2_openTimes, e.KingMuseConst.forever_level3_bossNum, e.KingMuseConst.forever_level3_heiq1, e.KingMuseConst.forever_level3_openTimes, e.KingMuseConst.forever_pet_state], [e.KingMuseConst.daily_Shishi, e.KingMuseConst.daily_level1_time1, e.KingMuseConst.daily_level1_time2, e.KingMuseConst.daily_level2_time1, e.KingMuseConst.daily_level2_time2, e.KingMuseConst.daily_level3_time1, e.KingMuseConst.daily_level3_time2], [e.KingMuseConst.bitbuf_hasOneKey]),
            n.init([{
                panelName: e.KingMuseConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.KingMuseConst.PANEL1
            },
            {
                panelName: e.KingMuseConst.PANEL2
            },
            {
                panelName: e.KingMuseConst.PANEL3
            }]),
            n
        }
        return __extends(n, t),
        n.prototype.reShow = function() {
            var e = this;
            this.service.updateValues().then(function() {
                e.destroyed || e.currentPanel && "kingMuse.Panel2Skin" != e.currentPanel.name && e.currentPanel.update && e.currentPanel.update()
            })
        },
        n
    } (BasicMultPanelModule);
    e.KingMuse = t,
    __reflect(t.prototype, "kingMuse.KingMuse")
} (kingMuse || (kingMuse = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
kingMuse; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "kingMuse.KingMuseMainPanel",
        e.PANEL1 = "kingMuse.KingMusePanel1",
        e.PANEL2 = "kingMuse.KingMusePanel2",
        e.PANEL3 = "kingMuse.KingMusePanel3",
        e.CMD = 45681,
        e.forever_pet_state = 102100,
        e.forever_current_level = 102102,
        e.forever_level1_bossNum = 102102,
        e.forever_level2_bossNum = 102103,
        e.forever_level3_bossNum = 102104,
        e.forever_level3_heiq1 = 102105,
        e.forever_close_time = 102106,
        e.forever_item_num = 102107,
        e.forever_level1_openTimes = 102108,
        e.forever_level2_openTimes = 102109,
        e.forever_level3_openTimes = 102110,
        e.daily_Shishi = 13944,
        e.daily_level1_time1 = 13945,
        e.daily_level1_time2 = 13948,
        e.daily_level2_time1 = 13946,
        e.daily_level2_time2 = 13949,
        e.daily_level3_time1 = 13947,
        e.daily_level3_time2 = 13950,
        e.bitbuf_hasOneKey = 15129,
        e
    } ();
    e.KingMuseConst = t,
    __reflect(t.prototype, "kingMuse.KingMuseConst")
} (kingMuse || (kingMuse = {}));
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
kingMuse; !
function(e) {
    var t = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.skinName = LevelPetItemSkin,
            n.data = t,
            n
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.setData = function(e) {
            e && (this.data = e),
            3 != this.data.curLevel ? (this.currentState = "defalt", this.petBg.source = "km_panel" + (this.data.curLevel + 1) + "_gk_2db_png", this.cur.source = "km_panel" + (this.data.curLevel + 1) + "_xzzt_2_png", this.notCur.source = "km_panel" + (this.data.curLevel + 1) + "_wxzzt_2_png", this.hasPass.source = "km_panel" + (this.data.curLevel + 1) + "_yitongguo_png", this.Se.source = "km_panel" + (this.data.curLevel + 1) + "_gk_2dbSe_png") : (this.currentState = "Level4", this.bar_value.value = this.data.curBlackNum, this.txt_progress.text = "已驱散梦魇:" + this.data.curBlackNum + "/6", this.grp_bars.visible = this.data.id == this.data.curLevelBossIndex),
            this.Se.visible = this.data.id == this.data.curLevelBossIndex,
            this.cur.visible = this.data.id == this.data.curLevelBossIndex,
            this.notCur.visible = this.data.id != this.data.curLevelBossIndex,
            this.hasPass.visible = this.data.id < this.data.curLevelBossIndex,
            this.petHead.source = ClientConfig.getPetHeadPath(this.data.bossID),
            this.alpha = this.data.id < this.data.curLevelBossIndex ? .6 : 1
        },
        t
    } (eui.Component);
    e.LevelPetItem = t,
    __reflect(t.prototype, "kingMuse.LevelPetItem")
} (kingMuse || (kingMuse = {}));
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
    return new(n || (n = Promise))(function(r, a) {
        function o(e) {
            try {
                u(i.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new n(function(t) {
                t(e.value)
            }).then(o, s)
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(a, n[1])).done) return o;
            switch (a = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = n;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(n);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
        } catch(i) {
            n = [6, i],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
kingMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.canDown = !0,
            n.new_monster_level_id = 136,
            n.onTimer = function() {
                if (n.leftTime > 0) {
                    var e = SystemTimerManager.getTimeClockString(n.leftTime, !0);
                    n.txt_freeTime.text = e,
                    n.leftTime--
                } else n.noOpen.visible = !1,
                n.btnOpen.visible = !0,
                SystemTimerManager.removeTickFun(n.onTimer)
            },
            n.skinName = e.MainpanelSkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(131, this, "km_mainpane_bulaike_muse_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "km_main_btncollected_png": "km_main_btncollect_png"
            })
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOpen,
            function() {
                StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击主界面-【开启命运之门】"),
                t.service.openPanel(e.KingMuseConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击主界面-【能力提升】"),
                t.service.openPanel(e.KingMuseConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btnDiscount,
            function() {
                StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击主界面-【优惠极品】");
                var t = new e.OneKeyPos,
                n = PopViewManager.createDefaultStyleObject();
                n.maskShapeStyle = {
                    maskAlpha: .8,
                    maskColor: 0
                },
                PopViewManager.getInstance().openView(t, n)
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击主界面-【兑换精灵】");
                var t = new e.Exchangepop,
                n = PopViewManager.createDefaultStyleObject();
                n.maskShapeStyle = {
                    maskAlpha: .8,
                    maskColor: 0
                },
                PopViewManager.getInstance().openView(t, n)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3205,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnSuper,
            function() {
                StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProductBySocket(248462,
                    function() {
                        SocketConnection.sendByQueue(e.KingMuseConst.CMD, [1, 0],
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
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this),
            EventManager.addEventListener("openPanel1",
            function() {
                t.service.openPanel(e.KingMuseConst.PANEL1)
            },
            this)
        },
        n.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "km_main_btncollected_png": "km_main_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.checkIsOpen = function() {
            var e = SystemTimerManager.sysDate,
            t = e.getHours(),
            n = !1;
            if (t >= 13 && 15 > t || t >= 18 && 20 > t) return ! 0;
            var i = 0;
            13 > t ? i = 13 : t >= 15 && 18 > t ? i = 18 : t >= 20 && (i = 13, n = !0);
            var r = n ? e.getDate() + 1 : e.getDate();
            return this.leftTime = SystemTimerManager.getTimeByDate(e.getFullYear(), e.getMonth() + 1, r, i) - Math.floor(e.getTime() / 1e3),
            SystemTimerManager.addTickFun(this.onTimer),
            !1
        },
        n.prototype.update = function() {
            var t = this.checkIsOpen();
            this.btnOpen.visible = t,
            this.noOpen.visible = !t;
            var n = this.service.getValue(e.KingMuseConst.forever_pet_state);
            this.btnExchange.visible = this.btnSuper.visible = 0 == KTool.getBit(n, 1),
            this.hasGet.visible = this.btnDiscount.visible = 1 == KTool.getBit(n, 1);
            for (var i = 0,
            r = 0; 3 > r; r++) i += KTool.getBit(n, 2 + r);
            DisplayUtil.setEnabled(this.btnUp, 3 > i, 3 == i)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            SystemTimerManager.removeTickFun(this.onTimer)
        },
        n
    } (BasicPanel);
    e.KingMuseMainPanel = t,
    __reflect(t.prototype, "kingMuse.KingMuseMainPanel")
} (kingMuse || (kingMuse = {}));
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
kingMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.itemsId = [1710511, 1710512, 1710513],
            n.skinName = e.Panel1Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "km_mainpane_title6_png",
            function() {
                EventManager.dispatchEventWith("RemovePanel2Events"),
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents();
            var n = SystemTimerManager.sysBJDate.getHours();
            this.isNight = n >= 18
        },
        n.prototype.addEvents = function() {
            for (var t = this,
            n = ["希望", "史诗", "梦魇"], i = function(i) {
                3 > i && ImageButtonUtil.add(r["btnHecheng" + i],
                function() {
                    if (StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击选关界面-【合成】按钮"), ItemManager.getNumByID(t.itemsId[i - 1]) < 5) {
                        var e = "数量不足，需要<font color='#ff0000'>5个</font>" + ItemXMLInfo.getName(t.itemsId[i - 1]) + "才能合成";
                        return void BubblerManager.getInstance().showText(e, !0)
                    }
                    KTool.doExchange(9277 + i, 1,
                    function() {
                        var e = "消耗5个" + ItemXMLInfo.getName(t.itemsId[i - 1]) + "，合成1个<font color='#ff0000'>" + ItemXMLInfo.getName(t.itemsId[i]) + "</font>";
                        BubblerManager.getInstance().showText(e, !0),
                        t.update()
                    })
                },
                r),
                ImageButtonUtil.add(r["btnAdd_" + i],
                function() {
                    PayManager.doPayFunc(function() {
                        var e = {};
                        e.type = "product_diamond",
                        e.ins = {
                            iconID: t.itemsId[i - 1],
                            productID: 248466 + i
                        },
                        e.caller = t,
                        e.callBack = function(e, n) {
                            KTool.buyProductByCallback(248466 + i, n,
                            function() {
                                KTool.doExchange(9269 + i, n,
                                function() {
                                    t.update()
                                })
                            })
                        },
                        ModuleManager.showModuleByID(1, e)
                    },
                    t)
                },
                r),
                ImageButtonUtil.add(r["btnAddOpenTime" + i],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(248469 + i, 1,
                        function() {
                            KTool.doExchange(9272 + i, 1,
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    t)
                },
                r),
                ImageButtonUtil.add(r["btnOpen_" + i],
                function() {
                    switch (i) {
                    case 1:
                        StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击选关界面-希望之门【开启】按钮");
                        break;
                    case 2:
                        StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击选关界面-史诗之门【开启】按钮");
                        break;
                    case 3:
                        StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击选关界面-梦魇之门【开启】按钮")
                    }
                    var r = t.isNight ? t.service.getValue(13947 + i) : t.service.getValue(13944 + i);
                    return 2 - r + t.service.getValue(102107 + i) <= 0 ? void BubblerManager.getInstance().showText(n[i - 1] + "之门免费开启次数不足") : void SocketConnection.sendByQueue(45681, [7, 0],
                    function() {
                        SocketConnection.sendByQueue(e.KingMuseConst.CMD, [6, i],
                        function() {
                            t.service.updateValues().then(function() {
                                t.service.openPanel(e.KingMuseConst.PANEL2, i)
                            })
                        })
                    })
                },
                r)
            },
            r = this, a = 1; 3 >= a; a++) i(a);
            ImageButtonUtil.add(this.btnExchange,
            function() {
                if (StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击选关界面-【兑换精灵】按钮"), ItemManager.getNumByID(t.itemsId[2]) < 40) {
                    var n = "数量不足，需要<font color='#ff0000'>40个</font>超能圣光才能兑换,是否直接购买超能圣光？";
                    return void Alert.show(n,
                    function() {
                        PayManager.doPayFunc(function() {
                            var e = {};
                            e.type = "product_diamond",
                            e.ins = {
                                iconID: t.itemsId[2],
                                productID: 248469
                            },
                            e.caller = t,
                            e.callBack = function(e, n) {
                                KTool.buyProductByCallback(248469, n,
                                function() {
                                    KTool.doExchange(9272, n,
                                    function() {
                                        t.update()
                                    })
                                })
                            },
                            ModuleManager.showModuleByID(1, e)
                        },
                        t)
                    })
                }
                SocketConnection.sendByQueue(e.KingMuseConst.CMD, [4, 0],
                function() {
                    t.update()
                })
            },
            this)
        },
        n.prototype.update = function() {
            for (var t = 1; 3 >= t; t++) {
                var n = this.isNight ? this.service.getValue(13947 + t) : this.service.getValue(13944 + t);
                this["txt_num" + t].text = ItemManager.getNumByID(this.itemsId[t - 1]),
                this["txt_openTimes" + t].text = "免费开启次数：" + (2 - n + this.service.getValue(102107 + t))
            }
            var i = this.service.getValue(e.KingMuseConst.forever_pet_state),
            r = 1 == KTool.getBit(i, 1);
            DisplayUtil.setEnabled(this.btnExchange, !r, r)
        },
        n
    } (BasicPanel);
    e.KingMusePanel1 = t,
    __reflect(t.prototype, "kingMuse.KingMusePanel1")
} (kingMuse || (kingMuse = {}));
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
kingMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.curLevel = 0,
            n.closeTime = 0,
            n.bossIds = [[2756, 2726, 2745, 2751, 2717, 2908, 2650, 2545], [242, 916, 1189, 1646, 1346, 2269, 1681, 2363], [2625, 2631, 2637, 2336]],
            n.itemsId = [1710511, 1710512, 1710513],
            n.curPetitems = [],
            n.curLevelBossIndex = 0,
            n.curItemNum = 0,
            n.strName = ["超能微光", "超能幽光", "超能圣光"],
            n.skinName = e.Panel2Skin,
            n.name = "kingMuse.Panel2Skin",
            n.initOldPveBtnClose(0, n, "km_mainpane_title1_png",
            function() {
                var t = "现在退出将无法获得任何奖励，是否现在退出？";
                Alert.show(t,
                function() {
                    n.curLevel = 0,
                    n.service.unregisterClock(n.txt_time),
                    SocketConnection.sendByQueue(e.KingMuseConst.CMD, [7, 0],
                    function() {
                        n.service.updateValues().then(function() {
                            n.service.openPanel(e.KingMuseConst.PANEL1)
                        })
                    })
                })
            },
            n),
            n.grpBack.title.y = 10,
            n
        }
        return __extends(n, t),
        n.prototype.beforeAdd = function(e) {
            this.curLevel = e,
            this.currentState = "Level" + this.curLevel,
            this.updateTitleRes("km_mainpane_title" + this.curLevel + "_png"),
            this.initData()
        },
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this);
            var e = SystemTimerManager.sysBJDate.getHours();
            this.isNight = e >= 18,
            this.addEvents(),
            this.initData()
        },
        n.prototype.initData = function() {
            this.petHead.mask = this._mask,
            this.curPetitems = [],
            this.jiantou_2.source = "km_panel" + (this.curLevel + 1) + "_jiantou_2_png",
            this.jiantou_3.source = "km_panel" + (this.curLevel + 1) + "_jiantou_3_png",
            this.petItems.removeChildren();
            for (var t = 0; t < this.bossIds[this.curLevel - 1].length; t++) {
                var n = {
                    id: t,
                    bossID: this.bossIds[this.curLevel - 1][t],
                    curboss: this.bossIds[this.curLevel - 1][this.curLevelBossIndex],
                    curLevel: this.curLevel,
                    curBlackNum: 0
                },
                i = new e.LevelPetItem(n);
                if (this.petItems.addChild(i), this.bossIds[this.curLevel - 1].length > 4) {
                    var r = t % 2 == 1 ? 183 : 0,
                    a = t % 2 == 1 ? 85 : 0,
                    o = 364;
                    i.x = r + Math.floor(t / 2) * o,
                    i.y = a
                } else {
                    var r = 255 * t,
                    a = t % 2 == 1 ? 85 : 0;
                    i.x = r,
                    i.y = a
                }
                this.curPetitems.push(i),
                this.petItems.addChild(i);
                var s = t % 2 == 1 ? this.jiantou_3.source: this.jiantou_2.source;
                if (7 > t && this.bossIds[this.curLevel - 1].length > 4) {
                    var u = new eui.Image(s);
                    this.petItems.addChild(u);
                    var _ = t % 2 == 1 ? 125 : 111;
                    u.x = i.x + _,
                    u.y = t % 2 == 1 ? 283 : 276
                } else if (3 > t && 4 == this.bossIds[this.curLevel - 1].length) {
                    var u = new eui.Image(s);
                    this.petItems.addChild(u);
                    var _ = 200;
                    u.x = i.x + _,
                    u.y = t % 2 == 1 ? 328 : 318
                }
            }
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            this.showLeftTime(),
            this._scol.viewport.scrollH = 0
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
            this);
            var n = [7783, 7791, 7799];
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss(n[t.curLevel - 1] + t.curLevelBossIndex)
            },
            this),
            ImageButtonUtil.add(this.btnYijian,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248475 + t.curLevel, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingMuseConst.CMD, [5, t.curLevel],
                        function() {
                            t.service.updateValues().then(function() {
                                var n = t.service.getValue(e.KingMuseConst.forever_item_num) - t.curItemNum,
                                i = "增加累积<font color='#ff0000'>" + n + "个" + t.strName[t.curLevel - 1] + "</font>，通过希望之门即可领取";
                                BubblerManager.getInstance().showText(i, !0),
                                t.update(),
                                t.animMove()
                            })
                        })
                    })
                },
                t)
            },
            this),
            EventManager.addEventListener("RemovePanel2Events",
            function() {
                t.service.unregisterClock(t.txt_time),
                EventManager.removeAll(t)
            },
            this)
        },
        n.prototype.onFightOver = function(t) {
            var n = this,
            i = t.dataObj;
            0 != this.curLevel && this.service.updateValues().then(function() {
                var t = "";
                if (1 == n.curLevel) {
                    if (FightManager.isWin && i._roundNum < 4) t = "承担伤害回合数不足，未获得累积奖励";
                    else if (FightManager.isWin && i._roundNum >= 4) {
                        var r = n.service.getValue(e.KingMuseConst.forever_item_num) - n.curItemNum;
                        t = "增加累积<font color='#ff0000'>" + r + "个" + n.strName[n.curLevel - 1] + "</font>，通过希望之门即可领取"
                    }
                } else if (2 == n.curLevel) {
                    if (FightManager.isWin) {
                        var r = n.service.getValue(e.KingMuseConst.forever_item_num) - n.curItemNum;
                        t = "增加累积<font color='#ff0000'>" + r + "个" + n.strName[n.curLevel - 1] + "</font>，通过希望之门即可领取"
                    }
                } else {
                    var a = n.service.getValue(e.KingMuseConst.forever_level3_heiq1);
                    FightManager.isWin && (t = 0 == a ? "完全驱散梦魇，累积获得<font color='#ff0000'>1个超能圣光</font>，通过梦魇之门即可获得": "驱散了" + a + "个梦魇，还剩<font color='#ff0000'>" + (6 - a) + "个</font>梦魇即可完全驱散，继续加油")
                }
                "" != t && BubblerManager.getInstance().showText(t, !0),
                n.update(),
                n.animMove()
            })
        },
        n.prototype.animMove = function() {
            var e = this;
            if (! (this.curLevelBossIndex > 4 && this.curLevel < 3 || this.curLevelBossIndex > 1 && 3 == this.curLevel)) {
                var t = this.curLevel < 3 ? 180 : 240;
                egret.Tween.get(this._scol.viewport).to({
                    scrollH: t * this.curLevelBossIndex
                },
                300).call(function() {
                    egret.Tween.removeTweens(e._scol)
                })
            }
        },
        n.prototype.showLeftTime = function() {
            var t = this;
            this.service.updateSomeValues([e.KingMuseConst.forever_close_time]).then(function() {
                t.closeTime = t.service.getValue(e.KingMuseConst.forever_close_time),
                t.service.unregisterClock(t.txt_time),
                t.service.registerClock(t.closeTime,
                function() {
                    t.service.unregisterClock(t.txt_time),
                    Alarm.show("当前副本已关闭",
                    function() {
                        SocketConnection.sendByQueue(e.KingMuseConst.CMD, [7, 0],
                        function() {
                            t.service.backToMainPanel(),
                            EventManager.removeAll(t)
                        })
                    })
                },
                t, t.txt_time)
            })
        },
        n.prototype.update = function() {
            this.curItemNum = this.service.getValue(e.KingMuseConst.forever_item_num),
            this.txt_hasGetNum.text = this.curItemNum + "",
            this.curLevelBossIndex = this.service.getValue(102101 + this.curLevel);
            var t = this.service.getValue(e.KingMuseConst.forever_level3_heiq1);
            if (8 != this.curLevelBossIndex && this.curLevel < 3 || 4 != this.curLevelBossIndex && 3 == this.curLevel) {
                this.petHead.source = ClientConfig.getPetHeadPath(this.bossIds[this.curLevel - 1][this.curLevelBossIndex]),
                this.txt_level.text = "第" + (this.curLevelBossIndex + 1) + "/" + this.bossIds[this.curLevel - 1].length + "关";
                for (var n = 0; n < this.curPetitems.length; n++) this.curPetitems[n].setData({
                    id: n,
                    bossID: this.bossIds[this.curLevel - 1][n],
                    curLevelBossIndex: this.curLevelBossIndex,
                    curLevel: this.curLevel,
                    curBlackNum: t
                })
            } else {
                EventManager.removeAll(this);
                var i = {};
                i.hasReward = 0 != this.curItemNum,
                i.leftTime = this.closeTime - SystemTimerManager.time,
                i.curLevel = this.curLevel,
                i.curindex = this.curLevelBossIndex,
                i.itemNum = this.curItemNum;
                var r = new e.RewardPop(i),
                a = PopViewManager.createDefaultStyleObject();
                a.ignoreMaskClick = !0,
                PopViewManager.getInstance().openView(r, a)
            }
        },
        n.prototype.destroy = function() {
            EventManager.removeAll(this),
            t.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    e.KingMusePanel2 = t,
    __reflect(t.prototype, "kingMuse.KingMusePanel2")
} (kingMuse || (kingMuse = {}));
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
kingMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.skinName = e.Panel6Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "km_mainpane_title5_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1710543,
                        productID: 248491
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(248491, n,
                        function() {
                            KTool.doExchange(9277, n,
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
                    KTool.buyProductByCallback(248474, 1,
                    function() {
                        KTool.doExchange(9276, 1,
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
                return PetManager.isDefaultPet(3205) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248466, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingMuseConst.CMD, [3, 0],
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t) : void Alarm.show("请将王·缪斯放入出战背包首发！",
                function() {
                    t.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                t.service.showPetEff(3205)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 19989
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(40717) ? (e = {},
                e.ins = 40717, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 40717, tipsPop.TipsPop.openItemPop(e))
            },
            this);
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnFight" + n],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void(t.isclickFight || (t.isclickFight = !0, FightManager.fightNoMapBoss(7783 - n)))
                },
                i),
                ImageButtonUtil.add(i["btnExchange" + n],
                function() {
                    if (ItemManager.getNumByID(1710543) < 15) return void BubblerManager.getInstance().showText("史诗之心数量不足，参与挑战可以获得！");
                    if (!PetManager.isDefaultPet(3205)) return void Alarm.show("请将王·缪斯放入出战背包首发！",
                    function() {
                        t.service.showPetBag()
                    });
                    var i = "";
                    3 == n ? i = "成功兑换第五技能，可以前往背包查看": 2 == n && (i = "成功兑换专属特性，可以前往背包查看"),
                    SocketConnection.sendByQueue(e.KingMuseConst.CMD, [2, 1 + n],
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
            i = this, r = 1; 3 >= r; r++) n(r);
            ImageButtonUtil.add(this.btnBag,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this)
        },
        n.prototype.update = function() {
            this.isclickFight = !1;
            var t = MainManager.actorInfo.isVip ? 8 : 5,
            n = this.service.getValue(e.KingMuseConst.forever_pet_state);
            this.leftTime = t - this.service.getValue(e.KingMuseConst.daily_Shishi),
            this.txt_itemNum.text = ItemManager.getNumByID(1710543) + "",
            this.txt_leftTime.text = "" + this.leftTime,
            DisplayUtil.setEnabled(this.btnAdd, this.leftTime != t, this.leftTime == t);
            for (var i = 0,
            r = 1; 3 >= r; r++) {
                var a = 1 == KTool.getBit(n, 1 + r);
                DisplayUtil.setEnabled(this["btnExchange" + r], !a, a),
                a && i++
            }
            DisplayUtil.setEnabled(this.btnOnekey, 0 == i, 0 != i)
        },
        n
    } (BasicPanel);
    e.KingMusePanel3 = t,
    __reflect(t.prototype, "kingMuse.KingMusePanel3")
} (kingMuse || (kingMuse = {}));
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
kingMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.itemsId = [1710511, 1710512, 1710513],
            n.skinName = e.ExchangepopSkin,
            n
        }
        return __extends(n, t),
        n.prototype.initialized = function() {},
        n.prototype.initEvents = function() {
            for (var t = this,
            n = function(e) {
                3 > e && ImageButtonUtil.add(i["btnHecheng" + e],
                function() {
                    if (StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击精灵界面-【合成】按钮"), ItemManager.getNumByID(t.itemsId[e - 1]) < 5) {
                        var n = "数量不足，需要<font color='#ff0000'>5个</font>" + ItemXMLInfo.getName(t.itemsId[e - 1]) + "才能合成";
                        return void BubblerManager.getInstance().showText(n, !0)
                    }
                    KTool.doExchange(9277 + e, 1,
                    function() {
                        var n = "消耗5个" + ItemXMLInfo.getName(t.itemsId[e - 1]) + "，合成1个<font color='#ff0000'>" + ItemXMLInfo.getName(t.itemsId[e]) + "</font>";
                        BubblerManager.getInstance().showText(n, !0),
                        t._upDateView()
                    })
                },
                i),
                ImageButtonUtil.add(i["btnAdd" + e],
                function() {
                    StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击精灵界面-【+】按钮"),
                    PayManager.doPayFunc(function() {
                        var n = {};
                        n.type = "product_diamond",
                        n.ins = {
                            iconID: t.itemsId[e - 1],
                            productID: 248466 + e
                        },
                        n.caller = t,
                        n.callBack = function(n, i) {
                            KTool.buyProductByCallback(248466 + e, i,
                            function() {
                                KTool.doExchange(9269 + e, i,
                                function() {
                                    t._upDateView()
                                })
                            })
                        },
                        ModuleManager.showModuleByID(1, n)
                    },
                    t)
                },
                i),
                ImageButtonUtil.add(i["icon" + e],
                function() {
                    var n = {};
                    n.id = t.itemsId[e - 1],
                    tipsPop.TipsPop.openItemPop(n)
                },
                i)
            },
            i = this, r = 1; 3 >= r; r++) n(r);
            ImageButtonUtil.add(this.btnExchange,
            function() {
                if (StatLogger.log("20230317版本系统功能", "王·缪斯搬迁", "点击精灵界面-【兑换精灵】按钮"), ItemManager.getNumByID(t.itemsId[2]) < 40) {
                    var n = "数量不足，需要<font color='#ff0000'>40个</font>超能圣光才能兑换,是否直接购买超能圣光？";
                    return void Alert.show(n,
                    function() {
                        PayManager.doPayFunc(function() {
                            var e = {};
                            e.type = "product_diamond",
                            e.ins = {
                                iconID: t.itemsId[2],
                                productID: 248469
                            },
                            e.caller = t,
                            e.callBack = function(e, n) {
                                KTool.buyProductByCallback(248469, n,
                                function() {
                                    KTool.doExchange(9272, n,
                                    function() {
                                        t._upDateView()
                                    })
                                })
                            },
                            ModuleManager.showModuleByID(1, e)
                        },
                        t)
                    })
                }
                SocketConnection.sendByQueue(e.KingMuseConst.CMD, [4, 0],
                function() {
                    t._upDateView()
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this)
        },
        n.prototype._upDateView = function() {
            var t = this;
            ItemManager.updateItems(this.itemsId,
            function() {
                for (var n = 1; 3 >= n; n++) t["txt_num" + n].text = ItemManager.getNumByID(t.itemsId[n - 1]);
                KTool.getMultiValue([e.KingMuseConst.forever_pet_state],
                function(e) {
                    var n = 1 == KTool.getBit(e[0], 1);
                    DisplayUtil.setEnabled(t.btnExchange, !n, n)
                })
            })
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.Exchangepop = t,
    __reflect(t.prototype, "kingMuse.Exchangepop")
} (kingMuse || (kingMuse = {}));
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
kingMuse; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.skinName = e.OnekeySkin,
            n
        }
        return __extends(n, t),
        n.prototype.initialized = function() {
            var t = this;
            GameInfo.isChecking && (this.btnAdd.visible = !1),
            ImageButtonUtil.add(this.btnClose,
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
                return PetManager.isDefaultPet(3205) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247506, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingMuseConst.CMD, [9, 0],
                        function() {
                            Alarm.show("恭喜你王·缪斯超级极品成功！"),
                            t.update()
                        })
                    })
                },
                t) : void Alarm.show("请将王·缪斯放入出战背包首发！",
                function() {
                    t.hide(),
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            this.update()
        },
        n.prototype.update = function() {
            var e = this;
            KTool.getBitSet([15129],
            function(t) {
                var n = 1 == t[0];
                DisplayUtil.setEnabled(e.btnBuy, !n, n),
                UserInfoManager.getDiamond(function(t) {
                    e.txt_diamond.text = core.gameUtil.ConvertToTenThousand(t)
                },
                e)
            })
        },
        n
    } (PopView);
    e.OneKeyPos = t,
    __reflect(t.prototype, "kingMuse.OneKeyPos")
} (kingMuse || (kingMuse = {}));
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
kingMuse; !
function(e) {
    var t = function(t) {
        function n(n) {
            var i = t.call(this) || this;
            return i.itemsId = [1710511, 1710512, 1710513],
            i.itemNums = [{
                num1: 1e4,
                num2: 1e3
            },
            {
                num1: 5e3,
                num2: 500
            },
            {
                num1: 2e3,
                num2: 200
            }],
            i.skinName = e.RewardpopSkin,
            i.obj = n,
            i
        }
        return __extends(n, t),
        n.prototype.initialized = function() {
            var t = this,
            n = [8, 8, 4];
            if (this.grp_hasReward.visible = this.obj.hasReward, this.noReward.visible = this.obj.noReward, this.icon1.source = ClientConfig.getItemIcon(1), this.icon2.source = ClientConfig.getItemIcon(1400352), this.icon3.source = ClientConfig.getItemIcon(this.itemsId[this.obj.curLevel - 1]), this.txt_time.text = SystemTimerManager.getTimeClockString(this.obj.leftTime), this.txt_pass.text = this.obj.curindex + "/" + n[this.obj.curLevel - 1], this.obj.hasReward) {
                var i = this.obj.leftTime / 60;
                this.tag3.visible = i >= 10,
                this.tag2.visible = 10 > i && i >= 5,
                this.tag1.visible = 5 > i,
                this.txtNum3.text = this.obj.itemNum,
                i >= 10 ? (this.txtNum1.text = this.itemNums[0].num1 + "", this.txtNum2.text = this.itemNums[0].num2 + "") : 10 > i && i >= 5 ? (this.txtNum1.text = this.itemNums[1].num1 + "", this.txtNum2.text = this.itemNums[1].num2 + "") : (this.txtNum1.text = this.itemNums[2].num1 + "", this.txtNum2.text = this.itemNums[2].num2 + "")
            }
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(e.KingMuseConst.CMD, [8, 0],
                function() {
                    t.hide(),
                    SocketConnection.sendByQueue(e.KingMuseConst.CMD, [7, 0],
                    function() {
                        EventManager.dispatchEventWith("openPanel1")
                    })
                })
            },
            this)
        },
        n
    } (PopView);
    e.RewardPop = t,
    __reflect(t.prototype, "kingMuse.RewardPop")
} (kingMuse || (kingMuse = {})),
window.kingMuse = window.kingMuse || {};
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
generateEUI.paths["resource/eui_skins/ExchangepopSkin.exml"] = window.kingMuse.ExchangepopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btnExchange", "btnHecheng2", "btnHecheng1", "txt_num1", "btnAdd1", "icon1", "item1", "txt_num2", "btnAdd2", "icon2", "item2", "txt_num3", "btnAdd3", "icon3", "item3", "hec", "exchangePop"],
        this.height = 396,
        this.width = 699,
        this.elementsContent = [this.exchangePop_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.exchangePop_i = function() {
        var e = new eui.Group;
        return this.exchangePop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.btnExchange_i(), this._Image3_i(), this._Label1_i(), this._Image4_i(), this.hec_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 396,
        e.scale9Grid = new egret.Rectangle(3, 3, 5, 6),
        e.source = "km_exchangepop_axc_png",
        e.width = 699,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_pet_png",
        e.x = 18,
        e.y = 18,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 33,
        e.source = "common_pop_btn_close_png",
        e.width = 33,
        e.x = 661,
        e.y = 1,
        e
    },
    n.btnExchange_i = function() {
        var e = new eui.Image;
        return this.btnExchange = e,
        e.source = "km_exchangepop_btntiaozhan_png",
        e.x = 392,
        e.y = 292,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_1710513_kb_png",
        e.x = 429,
        e.y = 262,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "X40",
        e.textColor = 16743239,
        e.x = 471,
        e.y = 270,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_zu_119_png",
        e.x = 323,
        e.y = 185,
        e
    },
    n.hec_i = function() {
        var e = new eui.Group;
        return this.hec = e,
        e.x = 288,
        e.y = 50,
        e.elementsContent = [this._Label2_i(), this.btnHecheng2_i(), this._Label3_i(), this.btnHecheng1_i(), this._Image5_i(), this._Image6_i(), this.item1_i(), this.item2_i(), this.item3_i()],
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "x5",
        e.textColor = 16748134,
        e.x = 232,
        e.y = 11,
        e
    },
    n.btnHecheng2_i = function() {
        var e = new eui.Image;
        return this.btnHecheng2 = e,
        e.source = "km_exchangepop_btnhecheng_png",
        e.x = 258,
        e.y = 4,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "x5",
        e.textColor = 16748134,
        e.x = 73,
        e.y = 11,
        e
    },
    n.btnHecheng1_i = function() {
        var e = new eui.Image;
        return this.btnHecheng1 = e,
        e.source = "km_exchangepop_btnhecheng_png",
        e.x = 99,
        e.y = 4,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_juxing_914_png",
        e.x = 82,
        e.y = 47,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_juxing_914_png",
        e.x = 247,
        e.y = 47,
        e
    },
    n.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.txt_num1_i(), this.btnAdd1_i(), this._Image7_i(), this.icon1_i()],
        e
    },
    n.txt_num1_i = function() {
        var e = new eui.Label;
        return this.txt_num1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textColor = 16745305,
        e.x = 4,
        e.y = 74,
        e
    },
    n.btnAdd1_i = function() {
        var e = new eui.Image;
        return this.btnAdd1 = e,
        e.source = "km_exchangepop_btnadd_png",
        e.x = 35,
        e.y = 71,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_jx_911_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.source = "km_exchangepop_1710511_png",
        e.x = 16,
        e.y = 16,
        e
    },
    n.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 159,
        e.y = 0,
        e.elementsContent = [this.txt_num2_i(), this.btnAdd2_i(), this._Image8_i(), this.icon2_i()],
        e
    },
    n.txt_num2_i = function() {
        var e = new eui.Label;
        return this.txt_num2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textColor = 16745305,
        e.x = 2,
        e.y = 74,
        e
    },
    n.btnAdd2_i = function() {
        var e = new eui.Image;
        return this.btnAdd2 = e,
        e.source = "km_exchangepop_btnadd_png",
        e.x = 33,
        e.y = 71,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_jx_911_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.icon2_i = function() {
        var e = new eui.Image;
        return this.icon2 = e,
        e.source = "km_exchangepop_1710512_png",
        e.x = 6,
        e.y = 7,
        e
    },
    n.item3_i = function() {
        var e = new eui.Group;
        return this.item3 = e,
        e.x = 316,
        e.y = 0,
        e.elementsContent = [this.txt_num3_i(), this.btnAdd3_i(), this._Image9_i(), this.icon3_i()],
        e
    },
    n.txt_num3_i = function() {
        var e = new eui.Label;
        return this.txt_num3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textColor = 16745305,
        e.x = 3,
        e.y = 74,
        e
    },
    n.btnAdd3_i = function() {
        var e = new eui.Image;
        return this.btnAdd3 = e,
        e.source = "km_exchangepop_btnadd_png",
        e.x = 34,
        e.y = 71,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_jx_911_kb_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.icon3_i = function() {
        var e = new eui.Image;
        return this.icon3 = e,
        e.source = "km_exchangepop_1710513_png",
        e.x = 3,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LevelPetItemSkin.exml"] = window.LevelPetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["notCur", "cur", "petBg", "Se", "petHead", "hasPass", "barBg", "bar_value", "level4barBg", "txt_progress", "grp_bars", "pet1"],
        this.currentState = "defalt",
        this.height = 282,
        this.width = 162,
        this.elementsContent = [this.pet1_i()],
        this.states = [new eui.State("Level4", [new eui.SetProperty("notCur", "x", 78), new eui.SetProperty("notCur", "y", 280), new eui.SetProperty("notCur", "source", "km_panel4_wxzzt_1_png"), new eui.SetProperty("cur", "x", 46), new eui.SetProperty("cur", "y", 248), new eui.SetProperty("cur", "source", "km_bar_xzzt1_2_kb_png"), new eui.SetProperty("petBg", "source", "km_bar_gk_1db_kb_5_png"), new eui.SetProperty("Se", "source", "km_bar_gk_1db_kb_5Se_png"), new eui.SetProperty("Se", "x", 25), new eui.SetProperty("Se", "y", 25), new eui.SetProperty("petHead", "x", 47), new eui.SetProperty("petHead", "y", 80), new eui.SetProperty("petHead", "width", 150), new eui.SetProperty("petHead", "height", 150), new eui.SetProperty("hasPass", "source", "km_panel4_yitongguo_png"), new eui.SetProperty("hasPass", "x", 46), new eui.SetProperty("hasPass", "y", 130), new eui.SetProperty("barBg", "visible", !1), new eui.SetProperty("bar_value", "x", 11), new eui.SetProperty("bar_value", "y", 11), new eui.SetProperty("bar_value", "visible", !1), new eui.SetProperty("level4barBg", "visible", !1), new eui.SetProperty("txt_progress", "textColor", 15849557), new eui.SetProperty("txt_progress", "x", 35), new eui.SetProperty("txt_progress", "y", 28), new eui.SetProperty("txt_progress", "width", 140), new eui.SetProperty("txt_progress", "textAlign", "center"), new eui.SetProperty("txt_progress", "visible", !0), new eui.SetProperty("_Group1", "visible", !0), new eui.SetProperty("", "width", 242), new eui.SetProperty("", "height", 378)]), new eui.State("defalt", [])]
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
            e.source = "km_bar_jindu_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i.pet1_i = function() {
        var e = new eui.Group;
        return this.pet1 = e,
        e.elementsContent = [this.notCur_i(), this.cur_i(), this.petBg_i(), this.Se_i(), this.petHead_i(), this.hasPass_i(), this._Group1_i()],
        e
    },
    i.notCur_i = function() {
        var e = new eui.Image;
        return this.notCur = e,
        e.source = "km_panel2_wxzzt_2_png",
        e.visible = !0,
        e.x = 37,
        e.y = 187,
        e
    },
    i.cur_i = function() {
        var e = new eui.Image;
        return this.cur = e,
        e.source = "km_panel2_xzzt_2_png",
        e.visible = !0,
        e.x = 5,
        e.y = 152,
        e
    },
    i.petBg_i = function() {
        var e = new eui.Image;
        return this.petBg = e,
        e.alpha = 1,
        e.source = "km_panel2_gk_2db_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.Se_i = function() {
        var e = new eui.Image;
        return this.Se = e,
        e.alpha = 1,
        e.source = "km_panel2_gk_2dbSe_png",
        e.visible = !0,
        e.x = 15,
        e.y = 15,
        e
    },
    i.petHead_i = function() {
        var e = new eui.Image;
        return this.petHead = e,
        e.height = 100,
        e.source = "",
        e.width = 100,
        e.x = 31,
        e.y = 54,
        e
    },
    i.hasPass_i = function() {
        var e = new eui.Image;
        return this.hasPass = e,
        e.source = "km_panel2_yitongguo_png",
        e.visible = !0,
        e.x = 31,
        e.y = 87,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.visible = !1,
        e.x = 17,
        e.y = 209,
        e.elementsContent = [this.grp_bars_i()],
        e
    },
    i.grp_bars_i = function() {
        var e = new eui.Group;
        return this.grp_bars = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.barBg_i(), this.bar_value_i(), this.level4barBg_i(), this.txt_progress_i()],
        e
    },
    i.barBg_i = function() {
        var e = new eui.Image;
        return this.barBg = e,
        e.source = "km_bar_juxing_13_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.bar_value_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_value = e,
        e.maximum = 6,
        e.width = 183,
        e.x = 0,
        e.y = 0,
        e.skinName = n,
        e
    },
    i.level4barBg_i = function() {
        var e = new eui.Image;
        return this.level4barBg = e,
        e.source = "km_bar_juxing_778_png",
        e.visible = !0,
        e.x = 24,
        e.y = 25,
        e
    },
    i.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已驱散梦魇:X/6",
        e.textColor = 13149695,
        e.x = 35,
        e.y = 23,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.kingMuse.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_freeTime", "noOpen", "btnOpen", "btnExchange", "hasGet", "btnCollect", "btnInfo", "btnSuper", "btnDiscount", "btnUp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "km_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -.5,
        e.source = "km_mainpanel_zu_66_png",
        e.visible = !0,
        e.y = 264,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -6,
        e.y = 38,
        e.elementsContent = [this._Image2_i(), this.noOpen_i(), this.btnOpen_i(), this.btnExchange_i(), this.hasGet_i(), this._Image5_i(), this._Label1_i(), this.btnCollect_i(), this.btnInfo_i(), this.btnSuper_i(), this.btnDiscount_i(), this.btnUp_i(), this._Image6_i(), this._Image7_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "km_mainpanel_lihui_png",
        e.x = 185,
        e.y = 40,
        e
    },
    n.noOpen_i = function() {
        var e = new eui.Group;
        return this.noOpen = e,
        e.visible = !0,
        e.x = 853,
        e.y = 517,
        e.elementsContent = [this._Image3_i(), this.txt_freeTime_i(), this._Image4_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "km_mainpanel_zu_125_png",
        e.x = 32,
        e.y = 0,
        e
    },
    n.txt_freeTime_i = function() {
        var e = new eui.Label;
        return this.txt_freeTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "00:00:00",
        e.textColor = 16777215,
        e.x = 127,
        e.y = 26,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "km_mainpanel_jx_3_kb_2_png",
        e.x = 0,
        e.y = 15,
        e
    },
    n.btnOpen_i = function() {
        var e = new eui.Image;
        return this.btnOpen = e,
        e.source = "km_mainpanel_btnopen_png",
        e.visible = !0,
        e.x = 858,
        e.y = 511,
        e
    },
    n.btnExchange_i = function() {
        var e = new eui.Image;
        return this.btnExchange = e,
        e.source = "km_mainpanel_btnexchange_png",
        e.x = 412,
        e.y = 509,
        e
    },
    n.hasGet_i = function() {
        var e = new eui.Image;
        return this.hasGet = e,
        e.source = "km_mainpanel_yihuode_png",
        e.visible = !0,
        e.x = 423,
        e.y = 521,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "km_mainpanel_ad_png",
        e.visible = !0,
        e.x = 215,
        e.y = 85,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每天13:00-15:00,18:00-20:00限时开启命运之门，参与即可免费获得王·缪斯",
        e.textColor = 16745304,
        e.width = 618,
        e.x = 249,
        e.y = 96,
        e
    },
    n.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "km_main_btncollect_png",
        e.x = 0,
        e.y = 466,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "km_mainpanel_btninfo_png",
        e.x = 0,
        e.y = 527,
        e
    },
    n.btnSuper_i = function() {
        var e = new eui.Image;
        return this.btnSuper = e,
        e.source = "km_mainpanel_btnsuper_png",
        e.x = 144,
        e.y = 517,
        e
    },
    n.btnDiscount_i = function() {
        var e = new eui.Image;
        return this.btnDiscount = e,
        e.source = "km_mainpanel_btndiscount_png",
        e.x = 143,
        e.y = 517,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "km_mainpanel_btnup_png",
        e.x = 59,
        e.y = 517,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "km_mainpanel_zczs_png",
        e.x = 13,
        e.y = 169,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "km_mainpanel_title_png",
        e.visible = !0,
        e.x = 97,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/OnekeySkin.exml"] = window.kingMuse.OnekeySkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnAdd", "txt_diamond", "btnBuy", "btnClose"],
        this.height = 607,
        this.width = 934,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnAdd_i(), this._Label1_i(), this.txt_diamond_i(), this._Image2_i(), this.btnBuy_i(), this.btnClose_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "km_onekey_zu_126_png",
        e.touchEnabled = !1,
        e.x = 155,
        e.y = 0,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "km_exchangepop_btnadd_png",
        e.x = 539,
        e.y = 512,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "您现在拥有钻石：",
        e.textColor = 16777215,
        e.x = 325,
        e.y = 516,
        e
    },
    n.txt_diamond_i = function() {
        var e = new eui.Label;
        return this.txt_diamond = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "2218",
        e.textColor = 16774499,
        e.x = 468,
        e.y = 517,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "km_onekey_zu_124_png",
        e.x = 0,
        e.y = 88,
        e
    },
    n.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "km_onekey_btnbuy_png",
        e.x = 366,
        e.y = 545,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 33,
        e.source = "common_pop_btn_close_png",
        e.width = 34,
        e.x = 900,
        e.y = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.kingMuse.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnExchange", "btnHecheng1", "btnHecheng2", "txt_num1", "btnAdd_1", "item1", "txt_num2", "btnAdd_2", "item2", "txt_num3", "btnAdd_3", "item3", "compose", "btnOpen_1", "txt_openTimes1", "btnAddOpenTime1", "door1", "btnOpen_2", "txt_openTimes2", "btnAddOpenTime2", "door2", "btnOpen_3", "txt_openTimes3", "btnAddOpenTime3", "door3", "door"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "km_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 61,
        e.width = 1020,
        e.y = 21,
        e.elementsContent = [this.btnExchange_i(), this.compose_i(), this.door_i(), this._Image18_i(), this._Label6_i(), this._Image19_i()],
        e
    },
    n.btnExchange_i = function() {
        var e = new eui.Image;
        return this.btnExchange = e,
        e.source = "km_panel1_btnexcgange_png",
        e.x = 901,
        e.y = 509,
        e
    },
    n.compose_i = function() {
        var e = new eui.Group;
        return this.compose = e,
        e.x = 127,
        e.y = 503,
        e.elementsContent = [this._Label1_i(), this.btnHecheng1_i(), this._Image1_i(), this._Label2_i(), this.btnHecheng2_i(), this._Image2_i(), this.item1_i(), this.item2_i(), this.item3_i()],
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "x5",
        e.textColor = 16748134,
        e.x = 143,
        e.y = 42,
        e
    },
    n.btnHecheng1_i = function() {
        var e = new eui.Image;
        return this.btnHecheng1 = e,
        e.source = "km_panel1_btnhecheng_png",
        e.x = 169,
        e.y = 36,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_jx_914_kb_5_png",
        e.touchEnabled = !1,
        e.x = 90,
        e.y = 18,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "x5",
        e.textColor = 16748134,
        e.x = 422,
        e.y = 42,
        e
    },
    n.btnHecheng2_i = function() {
        var e = new eui.Image;
        return this.btnHecheng2 = e,
        e.source = "km_panel1_btnhecheng_png",
        e.x = 448,
        e.y = 36,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_jx_914_kb_5_png",
        e.touchEnabled = !1,
        e.x = 372,
        e.y = 18,
        e
    },
    n.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.txt_num1_i(), this.btnAdd_1_i(), this._Image4_i(), this._Image5_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_jx_904_kb_png",
        e.x = 0,
        e.y = 68,
        e
    },
    n.txt_num1_i = function() {
        var e = new eui.Label;
        return this.txt_num1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textColor = 16745305,
        e.x = 15,
        e.y = 73,
        e
    },
    n.btnAdd_1_i = function() {
        var e = new eui.Image;
        return this.btnAdd_1 = e,
        e.source = "km_exchangepop_btnadd_png",
        e.x = 46,
        e.y = 70,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_jx_911_kb_2_png",
        e.x = 11,
        e.y = 0,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_1710511_png",
        e.x = 27,
        e.y = 15,
        e
    },
    n.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 279,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this.txt_num2_i(), this.btnAdd_2_i(), this._Image7_i(), this._Image8_i()],
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_jx_904_kb_png",
        e.x = 0,
        e.y = 68,
        e
    },
    n.txt_num2_i = function() {
        var e = new eui.Label;
        return this.txt_num2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textColor = 16745305,
        e.x = 14,
        e.y = 73,
        e
    },
    n.btnAdd_2_i = function() {
        var e = new eui.Image;
        return this.btnAdd_2 = e,
        e.source = "km_exchangepop_btnadd_png",
        e.x = 45,
        e.y = 70,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_jx_911_kb_2_png",
        e.x = 11,
        e.y = 0,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_1710512_png",
        e.x = 18,
        e.y = 7,
        e
    },
    n.item3_i = function() {
        var e = new eui.Group;
        return this.item3 = e,
        e.x = 557,
        e.y = 0,
        e.elementsContent = [this._Image9_i(), this.txt_num3_i(), this.btnAdd_3_i(), this._Image10_i(), this._Image11_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_jx_904_kb_png",
        e.x = 0,
        e.y = 68,
        e
    },
    n.txt_num3_i = function() {
        var e = new eui.Label;
        return this.txt_num3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textColor = 16745305,
        e.x = 14,
        e.y = 73,
        e
    },
    n.btnAdd_3_i = function() {
        var e = new eui.Image;
        return this.btnAdd_3 = e,
        e.source = "km_exchangepop_btnadd_png",
        e.x = 45,
        e.y = 70,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_jx_911_kb_2_png",
        e.x = 10,
        e.y = 0,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "km_exchangepop_1710513_png",
        e.x = 13,
        e.y = 5,
        e
    },
    n.door_i = function() {
        var e = new eui.Group;
        return this.door = e,
        e.x = 52,
        e.y = 114,
        e.elementsContent = [this.door1_i(), this.door2_i(), this.door3_i()],
        e
    },
    n.door1_i = function() {
        var e = new eui.Group;
        return this.door1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image12_i(), this.btnOpen_1_i(), this._Label3_i(), this._Image13_i(), this.txt_openTimes1_i(), this.btnAddOpenTime1_i()],
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_zu_124_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnOpen_1_i = function() {
        var e = new eui.Image;
        return this.btnOpen_1 = e,
        e.source = "km_panel1_btnopen_png",
        e.x = 7,
        e.y = 289,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "可获得超能微光",
        e.textColor = 3837402,
        e.x = 55,
        e.y = 353,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_juxing_904_png",
        e.x = 6,
        e.y = 253,
        e
    },
    n.txt_openTimes1_i = function() {
        var e = new eui.Label;
        return this.txt_openTimes1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "免费开启次数：99",
        e.textColor = 16769906,
        e.x = 34,
        e.y = 260,
        e
    },
    n.btnAddOpenTime1_i = function() {
        var e = new eui.Image;
        return this.btnAddOpenTime1 = e,
        e.height = 29,
        e.source = "km_exchangepop_btnadd_png",
        e.width = 29,
        e.x = 178,
        e.y = 255,
        e
    },
    n.door2_i = function() {
        var e = new eui.Group;
        return this.door2 = e,
        e.x = 279,
        e.y = 0,
        e.elementsContent = [this._Image14_i(), this.btnOpen_2_i(), this._Label4_i(), this._Image15_i(), this.txt_openTimes2_i(), this.btnAddOpenTime2_i()],
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_zu_77_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnOpen_2_i = function() {
        var e = new eui.Image;
        return this.btnOpen_2 = e,
        e.source = "km_panel1_btnopen_png",
        e.x = 6,
        e.y = 289,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "可获得超能幽光",
        e.textColor = 15968293,
        e.x = 54,
        e.y = 353,
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_juxing_904_png",
        e.x = 6,
        e.y = 253,
        e
    },
    n.txt_openTimes2_i = function() {
        var e = new eui.Label;
        return this.txt_openTimes2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "免费开启次数：99",
        e.textColor = 16769906,
        e.x = 33,
        e.y = 260,
        e
    },
    n.btnAddOpenTime2_i = function() {
        var e = new eui.Image;
        return this.btnAddOpenTime2 = e,
        e.height = 29,
        e.source = "km_exchangepop_btnadd_png",
        e.visible = !0,
        e.width = 29,
        e.x = 177,
        e.y = 255,
        e
    },
    n.door3_i = function() {
        var e = new eui.Group;
        return this.door3 = e,
        e.x = 556,
        e.y = 0,
        e.elementsContent = [this._Image16_i(), this.btnOpen_3_i(), this._Label5_i(), this._Image17_i(), this.txt_openTimes3_i(), this.btnAddOpenTime3_i()],
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_zu_125_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnOpen_3_i = function() {
        var e = new eui.Image;
        return this.btnOpen_3 = e,
        e.source = "km_panel1_btnopen_png",
        e.x = 6,
        e.y = 289,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "可获得超能圣光",
        e.textColor = 14377785,
        e.x = 55,
        e.y = 353,
        e
    },
    n._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_juxing_904_png",
        e.x = 6,
        e.y = 253,
        e
    },
    n.txt_openTimes3_i = function() {
        var e = new eui.Label;
        return this.txt_openTimes3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "免费开启次数：99",
        e.textColor = 16769906,
        e.x = 34,
        e.y = 260,
        e
    },
    n.btnAddOpenTime3_i = function() {
        var e = new eui.Image;
        return this.btnAddOpenTime3 = e,
        e.height = 29,
        e.source = "km_exchangepop_btnadd_png",
        e.width = 29,
        e.x = 178,
        e.y = 255,
        e
    },
    n._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_tipsbg_png",
        e.x = 0,
        e.y = 82,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "不同命运之门可获得不同奖励，消耗40个超能圣光即可兑换王·缪斯",
        e.textAlign = "center",
        e.textColor = 16769907,
        e.width = 836,
        e.x = 31,
        e.y = 89,
        e
    },
    n._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel1_zu_126_png",
        e.x = 233,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.kingMuse.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "jiantou_4", "jiantou_3", "jiantou_2", "jiantou_1", "btnBag", "btnCure", "petItems", "_scol", "txt_time", "txt_hasGetNum", "leftTime", "btnFight", "btnYijian", "_mask", "petHead", "txt_level", "rightInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this._Group2_i()],
        this.states = [new eui.State("Level1", [new eui.SetProperty("jiantou_3", "source", "km_panel2_jiantou_3_png"), new eui.SetProperty("jiantou_2", "source", "km_panel2_jiantou_2_png"), new eui.SetProperty("_Image1", "source", "km_panel2_levelbg_png")]), new eui.State("Level2", [new eui.SetProperty("bg", "source", "km_panel3_bg_jpg"), new eui.SetProperty("jiantou_3", "source", "km_panel3_jiantou_3_png"), new eui.SetProperty("jiantou_2", "source", "km_panel3_jiantou_2_png"), new eui.SetProperty("_Image1", "source", "km_panel3_levelbg_png"), new eui.SetProperty("btnBag", "source", "km_panel3_jlbb_png"), new eui.SetProperty("btnCure", "source", "km_panel3_jlhf_png"), new eui.SetProperty("txt_time", "textColor", 16752234), new eui.SetProperty("_Label2", "text", "已获得超能幽光            ："), new eui.SetProperty("_Label2", "visible", !0), new eui.SetProperty("_Label2", "textColor", 16744269), new eui.SetProperty("txt_hasGetNum", "textColor", 16744269), new eui.SetProperty("_Image2", "source", "km_panel3_1710512_png"), new eui.SetProperty("_Image2", "scaleX", .8), new eui.SetProperty("_Image2", "scaleY", .8), new eui.SetProperty("_Image3", "source", "km_panel3_dishi_png"), new eui.SetProperty("_Image4", "source", "km_panel3_xz_121_kb_png"), new eui.SetProperty("_Image5", "source", "km_panel3_zu_21_png"), new eui.SetProperty("_mask", "source", "km_panel3_zu_21_png"), new eui.SetProperty("_Image7", "source", "km_panel3_zu_84_png"), new eui.SetProperty("_Image8", "source", "km_panel3_bt_kb_png")]), new eui.State("Level3", [new eui.SetProperty("bg", "source", "km_mainpanel_bg_jpg"), new eui.SetProperty("_Image1", "source", "km_panel4_levelbg_png"), new eui.SetProperty("btnBag", "source", "km_panel4_jlbb_png"), new eui.SetProperty("btnCure", "source", "km_panel4_jlhf_png"), new eui.SetProperty("_scol", "scrollPolicyV", "off"), new eui.SetProperty("txt_time", "textColor", 16725044), new eui.SetProperty("_Label2", "textColor", 16732749), new eui.SetProperty("_Label2", "text", "已获得超能圣光            ："), new eui.SetProperty("txt_hasGetNum", "textColor", 16732749), new eui.SetProperty("_Image2", "source", "km_panel4_1710513_png"), new eui.SetProperty("_Image2", "scaleX", .8), new eui.SetProperty("_Image2", "scaleY", .8), new eui.SetProperty("_Image3", "source", "km_panel4_dishi_png"), new eui.SetProperty("_Image4", "source", "km_panel4_xz_1211_kb_2_png"), new eui.SetProperty("btnYijian", "source", "km_panel4_yjqs_png"), new eui.SetProperty("_Image5", "visible", !0), new eui.SetProperty("_Image5", "source", "km_panel4_z_212_kb_2_png"), new eui.SetProperty("_mask", "visible", !0), new eui.SetProperty("_mask", "source", "km_panel4_z_212_kb_2_png"), new eui.SetProperty("_Image7", "source", "km_panel4_zu_84_png"), new eui.SetProperty("_Image7", "x", 12), new eui.SetProperty("_Image7", "y", 176), new eui.SetProperty("_Image8", "source", "km_panel4_bt_kb_png")])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "km_panel2_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 124,
        e.y = 164,
        e.elementsContent = [this.jiantou_4_i(), this.jiantou_3_i(), this.jiantou_2_i(), this.jiantou_1_i()],
        e
    },
    n.jiantou_4_i = function() {
        var e = new eui.Image;
        return this.jiantou_4 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "km_panel2_jiantou_4_png",
        e.x = 481.00000000000006,
        e.y = 269,
        e
    },
    n.jiantou_3_i = function() {
        var e = new eui.Image;
        return this.jiantou_3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 308,
        e.y = 276,
        e
    },
    n.jiantou_2_i = function() {
        var e = new eui.Image;
        return this.jiantou_2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 111,
        e.y = 283,
        e
    },
    n.jiantou_1_i = function() {
        var e = new eui.Image;
        return this.jiantou_1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "km_panel2_jiantou_1_png",
        e.x = -78,
        e.y = 284,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 22,
        e.visible = !0,
        e.y = 21,
        e.elementsContent = [this._Image1_i(), this.btnBag_i(), this.btnCure_i(), this._scol_i(), this.leftTime_i(), this._Image3_i(), this.rightInfo_i(), this._Image8_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "km_panel2_levelbg_png",
        e.visible = !0,
        e.x = 13,
        e.y = 115,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "km_panel2_jlbb_png",
        e.x = 0,
        e.y = 412,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "km_panel2_jlhf_png",
        e.x = 0,
        e.y = 502,
        e
    },
    n._scol_i = function() {
        var e = new eui.Scroller;
        return this._scol = e,
        e.height = 450,
        e.scrollPolicyV = "off",
        e.width = 760,
        e.x = 83,
        e.y = 119,
        e.viewport = this.petItems_i(),
        e
    },
    n.petItems_i = function() {
        var e = new eui.Group;
        return this.petItems = e,
        e
    },
    n.leftTime_i = function() {
        var e = new eui.Group;
        return this.leftTime = e,
        e.x = 439,
        e.y = 535,
        e.elementsContent = [this._Label1_i(), this.txt_time_i(), this._Label2_i(), this.txt_hasGetNum_i(), this._Image2_i()],
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "剩余时间：",
        e.textColor = 16639873,
        e.x = 17,
        e.y = 6,
        e
    },
    n.txt_time_i = function() {
        var e = new eui.Label;
        return this.txt_time = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "XX：XX",
        e.textColor = 6928383,
        e.x = 114,
        e.y = 6,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return this._Label2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已获得超能微光            ：",
        e.textColor = 5081343,
        e.x = 0,
        e.y = 40,
        e
    },
    n.txt_hasGetNum_i = function() {
        var e = new eui.Label;
        return this.txt_hasGetNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "000",
        e.textColor = 5081343,
        e.x = 200,
        e.y = 40,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.source = "km_panel2_1710511_png",
        e.x = 138,
        e.y = 32,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.source = "km_panel2_dishi_png",
        e.visible = !0,
        e.x = 87,
        e.y = 76,
        e
    },
    n.rightInfo_i = function() {
        var e = new eui.Group;
        return this.rightInfo = e,
        e.x = 845,
        e.y = 124,
        e.elementsContent = [this._Image4_i(), this.btnFight_i(), this.btnYijian_i(), this._Image5_i(), this._mask_i(), this.petHead_i(), this.txt_level_i(), this._Image6_i(), this._Image7_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return this._Image4 = e,
        e.source = "km_panel2_xz_1211_kb_2_png",
        e.visible = !0,
        e.x = -10,
        e.y = 0,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.height = 34,
        e.source = "km_panel2_btnFight_png",
        e.width = 86,
        e.x = 125,
        e.y = 386,
        e
    },
    n.btnYijian_i = function() {
        var e = new eui.Image;
        return this.btnYijian = e,
        e.height = 34,
        e.source = "km_panel2_yjjb_png",
        e.width = 86,
        e.x = 25,
        e.y = 386,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return this._Image5 = e,
        e.source = "km_panel2_z_211_kb_2_png",
        e.x = 71,
        e.y = 63,
        e
    },
    n._mask_i = function() {
        var e = new eui.Image;
        return this._mask = e,
        e.source = "km_panel2_z_211_kb_2_png",
        e.visible = !0,
        e.x = 71,
        e.y = 63,
        e
    },
    n.petHead_i = function() {
        var e = new eui.Image;
        return this.petHead = e,
        e.height = 100,
        e.source = "",
        e.visible = !0,
        e.width = 100,
        e.x = 70,
        e.y = 70,
        e
    },
    n.txt_level_i = function() {
        var e = new eui.Label;
        return this.txt_level = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "第0/0关",
        e.textColor = 16639873,
        e.x = 80,
        e.y = 31,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel2_jx_912_kb_4_png",
        e.x = 51,
        e.y = 31,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return this._Image7 = e,
        e.alpha = 1,
        e.source = "km_panel2_zu_122_png",
        e.touchEnabled = !1,
        e.x = 22,
        e.y = 186,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return this._Image8 = e,
        e.source = "km_panel2_bt_kb_3_png",
        e.x = 424,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel6Skin.exml"] = window.kingMuse.Panel6Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnAdd", "btnFight3", "pet3", "btnFight2", "pet2", "btnFight1", "pet1", "btnOnekey", "btnKe", "btnExchange1", "p1", "btnTe", "btnExchange2", "p2", "btnExchange3", "btnWu", "p3", "txt_itemNum", "btnAddItem", "ri", "txt_leftTime", "btnBag", "btnCure"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "km_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -8.5,
        e.y = 22,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this.btnAdd_i(), this.pet3_i(), this.pet2_i(), this.pet1_i(), this.btnOnekey_i(), this.ri_i(), this._Image25_i(), this._Label12_i(), this.txt_leftTime_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_juxing_904_png",
        e.x = 302,
        e.y = 580,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "VIP赛尔每日额外获得3次免费挑战机会",
        e.textColor = 14441010,
        e.x = 363,
        e.y = 587,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "km_panel6_btnadd_png",
        e.x = 655,
        e.y = 548,
        e
    },
    n.pet3_i = function() {
        var e = new eui.Group;
        return this.pet3 = e,
        e.x = 480,
        e.y = 87,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Label2_i(), this._Image4_i(), this.btnFight3_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_pet3_png",
        e.x = 47,
        e.y = 0,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_2699_png",
        e.x = 0,
        e.y = 72,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战胜可获得        *1",
        e.textColor = 16772933,
        e.x = 138,
        e.y = 408,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_1710543_png",
        e.x = 234,
        e.y = 407,
        e
    },
    n.btnFight3_i = function() {
        var e = new eui.Image;
        return this.btnFight3 = e,
        e.source = "km_panel6_btntiaozhan_png",
        e.x = 142,
        e.y = 345,
        e
    },
    n.pet2_i = function() {
        var e = new eui.Group;
        return this.pet2 = e,
        e.x = 264,
        e.y = 86,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this._Label3_i(), this._Image7_i(), this.btnFight2_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_pet2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_2847_png",
        e.x = 22,
        e.y = 33,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战胜可获得        *2",
        e.textColor = 16772933,
        e.x = 91,
        e.y = 409,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_1710543_kb_png",
        e.x = 187,
        e.y = 408,
        e
    },
    n.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "km_panel6_btntiaozhan_png",
        e.x = 95,
        e.y = 346,
        e
    },
    n.pet1_i = function() {
        var e = new eui.Group;
        return this.pet1 = e,
        e.x = 0,
        e.y = 87,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this._Label4_i(), this._Image10_i(), this.btnFight1_i()],
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_pet1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_3074_png",
        e.x = 38,
        e.y = 63,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战胜可获得        *3",
        e.textColor = 16772933,
        e.x = 91,
        e.y = 408,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_1710543_png",
        e.x = 187,
        e.y = 407,
        e
    },
    n.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "km_panel6_btntiaozhan_png",
        e.x = 96,
        e.y = 345,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.source = "km_panel6_btnonekey_png",
        e.x = 880,
        e.y = 540,
        e
    },
    n.ri_i = function() {
        var e = new eui.Group;
        return this.ri = e,
        e.x = 827,
        e.y = 108,
        e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this.p1_i(), this.p2_i(), this.p3_i(), this._Label11_i(), this.txt_itemNum_i(), this.btnAddItem_i(), this._Image24_i()],
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 407,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "km_panel6_jx_908_kb_png",
        e.width = 254,
        e.x = 5,
        e.y = 3,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_juxing_908_png",
        e.x = 5,
        e.y = 356,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_xz_18_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_juxing_909_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 15,
        e.y = 121,
        e
    },
    n.p1_i = function() {
        var e = new eui.Group;
        return this.p1 = e,
        e.x = 38,
        e.y = 12,
        e.elementsContent = [this._Label5_i(), this._Label6_i(), this._Image15_i(), this.btnKe_i(), this._Image16_i(), this.btnExchange1_i(), this._Image17_i()],
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "消耗",
        e.textColor = 16769906,
        e.x = 108,
        e.y = 81,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*60",
        e.textColor = 16769906,
        e.x = 165,
        e.y = 83,
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_jx_907_kb_png",
        e.x = 0,
        e.y = 34,
        e
    },
    n.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "km_panel6_407171_png",
        e.x = 6,
        e.y = 41,
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_1710543_png",
        e.x = 140,
        e.y = 80,
        e
    },
    n.btnExchange1_i = function() {
        var e = new eui.Image;
        return this.btnExchange1 = e,
        e.source = "km_panel6_btnexchange_png",
        e.x = 102,
        e.y = 41,
        e
    },
    n._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_zsky_png",
        e.x = 48,
        e.y = 0,
        e
    },
    n.p2_i = function() {
        var e = new eui.Group;
        return this.p2 = e,
        e.x = 38,
        e.y = 127,
        e.elementsContent = [this._Label7_i(), this._Label8_i(), this._Image18_i(), this.btnTe_i(), this._Image19_i(), this.btnExchange2_i(), this._Image20_i()],
        e
    },
    n._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "消耗",
        e.textColor = 16769906,
        e.x = 108,
        e.y = 81,
        e
    },
    n._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*80",
        e.textColor = 16769906,
        e.x = 165,
        e.y = 83,
        e
    },
    n._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_jx_907_kb_png",
        e.x = 0,
        e.y = 34,
        e
    },
    n.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "km_panel6_te_png",
        e.x = 10,
        e.y = 47,
        e
    },
    n._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_1710543_png",
        e.x = 140,
        e.y = 81,
        e
    },
    n.btnExchange2_i = function() {
        var e = new eui.Image;
        return this.btnExchange2 = e,
        e.source = "km_panel6_btnexchange_png",
        e.x = 102,
        e.y = 41,
        e
    },
    n._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_zstx_png",
        e.x = 48,
        e.y = 0,
        e
    },
    n.p3_i = function() {
        var e = new eui.Group;
        return this.p3 = e,
        e.x = 38,
        e.y = 242,
        e.elementsContent = [this._Label9_i(), this._Label10_i(), this._Image21_i(), this._Image22_i(), this.btnExchange3_i(), this._Image23_i(), this.btnWu_i()],
        e
    },
    n._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "消耗",
        e.textColor = 16769906,
        e.x = 108,
        e.y = 81,
        e
    },
    n._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*100",
        e.textColor = 16769906,
        e.x = 165,
        e.y = 83,
        e
    },
    n._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_jx_907_kb_png",
        e.x = 0,
        e.y = 34,
        e
    },
    n._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_1710543_png",
        e.x = 140,
        e.y = 81,
        e
    },
    n.btnExchange3_i = function() {
        var e = new eui.Image;
        return this.btnExchange3 = e,
        e.source = "km_panel6_btnexchange_png",
        e.x = 102,
        e.y = 41,
        e
    },
    n._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_diwujineng_png",
        e.x = 48,
        e.y = 0,
        e
    },
    n.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "km_panel6_wu_png",
        e.x = 7,
        e.y = 43,
        e
    },
    n._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前拥有       ：",
        e.textColor = 16769906,
        e.x = 45,
        e.y = 365,
        e
    },
    n.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16769906,
        e.x = 160,
        e.y = 366,
        e
    },
    n.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "km_panel6_btnadd_png",
        e.x = 202,
        e.y = 361,
        e
    },
    n._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_1710543_png",
        e.x = 122,
        e.y = 367,
        e
    },
    n._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "km_panel6_bt_kb_2_png",
        e.x = 427,
        e.y = 0,
        e
    },
    n._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 22,
        e.text = "今日剩余挑战机会:",
        e.textColor = 16639873,
        e.x = 412,
        e.y = 551,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 22,
        e.text = "0",
        e.textColor = 16740149,
        e.x = 617,
        e.y = 552,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "km_panel3_jlbb_png",
        e.x = 81,
        e.y = 537,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "km_panel3_jlhf_png",
        e.x = 167,
        e.y = 537,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/RewardpopSkin.exml"] = window.kingMuse.RewardpopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "txt_pass", "txt_time", "noReward", "btnGet", "icon1", "icon2", "icon3", "txtNum1", "txtNum2", "txtNum3", "tag3", "tag2", "tag1", "grp_hasReward", "rewarPop"],
        this.height = 355,
        this.width = 554,
        this.elementsContent = [this.rewarPop_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.rewarPop_i = function() {
        var e = new eui.Group;
        return this.rewarPop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Label1_i(), this.txt_pass_i(), this._Label2_i(), this.txt_time_i(), this._Image2_i(), this.noReward_i(), this.grp_hasReward_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 355,
        e.scale9Grid = new egret.Rectangle(1, 1, 4, 4),
        e.source = "km_rewardpop_bg4_png",
        e.width = 554,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "km_rewardpop_close1_png",
        e.visible = !1,
        e.x = 515,
        e.y = 1,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "通过关卡：",
        e.textColor = 16772313,
        e.x = 66,
        e.y = 78,
        e
    },
    n.txt_pass_i = function() {
        var e = new eui.Label;
        return this.txt_pass = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "0/0",
        e.textColor = 16769345,
        e.x = 156,
        e.y = 77,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "剩余时间：",
        e.textColor = 16772313,
        e.x = 357,
        e.y = 77,
        e
    },
    n.txt_time_i = function() {
        var e = new eui.Label;
        return this.txt_time = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "00/00",
        e.textColor = 16769345,
        e.x = 447,
        e.y = 77,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "km_rewardpop_rwjs_png",
        e.x = 227,
        e.y = 18,
        e
    },
    n.noReward_i = function() {
        var e = new eui.Image;
        return this.noReward = e,
        e.source = "km_rewardpop_bcwhdjl_png",
        e.x = 192,
        e.y = 163,
        e
    },
    n.grp_hasReward_i = function() {
        var e = new eui.Group;
        return this.grp_hasReward = e,
        e.visible = !0,
        e.x = 9,
        e.y = 3,
        e.elementsContent = [this.btnGet_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.icon1_i(), this.icon2_i(), this.icon3_i(), this.txtNum1_i(), this.txtNum2_i(), this.txtNum3_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this.tag3_i(), this.tag2_i(), this.tag1_i()],
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "km_rewardpop_btntiaozhan_png",
        e.x = 199,
        e.y = 292,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "km_rewardpop_bljl_png",
        e.visible = !0,
        e.x = 219,
        e.y = 121,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "km_rewardpop_kuang_png",
        e.visible = !0,
        e.x = 209,
        e.y = 150,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "km_rewardpop_kuang_png",
        e.visible = !0,
        e.x = 52,
        e.y = 165,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "km_rewardpop_kuang_png",
        e.visible = !0,
        e.x = 365,
        e.y = 165,
        e
    },
    n.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.height = 100,
        e.width = 100,
        e.x = 60,
        e.y = 170,
        e
    },
    n.icon2_i = function() {
        var e = new eui.Image;
        return this.icon2 = e,
        e.height = 100,
        e.visible = !0,
        e.width = 100,
        e.x = 370,
        e.y = 170,
        e
    },
    n.icon3_i = function() {
        var e = new eui.Image;
        return this.icon3 = e,
        e.height = 100,
        e.width = 100,
        e.x = 215,
        e.y = 155,
        e
    },
    n.txtNum1_i = function() {
        var e = new eui.Label;
        return this.txtNum1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10000",
        e.textAlign = "right",
        e.textColor = 16769345,
        e.width = 60,
        e.x = 98,
        e.y = 255,
        e
    },
    n.txtNum2_i = function() {
        var e = new eui.Label;
        return this.txtNum2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10000",
        e.textAlign = "right",
        e.textColor = 16769345,
        e.width = 60,
        e.x = 410,
        e.y = 255,
        e
    },
    n.txtNum3_i = function() {
        var e = new eui.Label;
        return this.txtNum3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "100",
        e.textAlign = "right",
        e.textColor = 16769345,
        e.width = 40,
        e.x = 275,
        e.y = 240,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "km_rewardpop_z_45_kb_4_png",
        e.visible = !0,
        e.x = 59,
        e.y = 278,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "km_rewardpop_z_45_kb_4_png",
        e.visible = !0,
        e.x = 373,
        e.y = 277,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "km_rewardpop_pfdb_png",
        e.visible = !0,
        e.x = 5,
        e.y = 0,
        e
    },
    n.tag3_i = function() {
        var e = new eui.Image;
        return this.tag3 = e,
        e.source = "km_rewardpop_sss_png",
        e.x = 0,
        e.y = 20,
        e
    },
    n.tag2_i = function() {
        var e = new eui.Image;
        return this.tag2 = e,
        e.source = "km_rewardpop_ss_png",
        e.x = 10,
        e.y = 19,
        e
    },
    n.tag1_i = function() {
        var e = new eui.Image;
        return this.tag1 = e,
        e.source = "km_rewardpop_s_png",
        e.x = 19,
        e.y = 20,
        e
    },
    t
} (eui.Skin);