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
    return new(i || (i = Promise))(function(s, o) {
        function r(e) {
            try {
                a(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function u(e) {
            try {
                a(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function a(e) {
            e.done ? s(e.value) : new i(function(t) {
                t(e.value)
            }).then(r, u)
        }
        a((n = n.apply(e, t || [])).next())
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
        if (s) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (s = 1, o && (r = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(o, i[1])).done) return r;
            switch (o = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return a.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                a.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (r = a.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    a = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    a.label = i[1];
                    break
                }
                if (6 === i[0] && a.label < r[1]) {
                    a.label = r[1],
                    r = i;
                    break
                }
                if (r && a.label < r[2]) {
                    a.label = r[2],
                    a.ops.push(i);
                    break
                }
                r[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            i = t.call(e, a)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            s = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var s, o, r, u, a = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
cassiusSuperEvo; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.isEvo = !1,
            e.getAll = !1,
            e.canDown = !0,
            e.confId = 0,
            e.hasWrongDoor = 0,
            e.step = 0,
            e.answer = 0,
            e.stoneIndex = 0,
            e.payPath = 0,
            e.skinName = CassiusSuperEvoSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.adaptBgByScale.call(this, this.bg),
            this.initBtnClose("cassius_super_evo_title_png", this),
            this.initBtnHelp(function() {
                StatLogger.log("20230609版本系统功能", "卡修斯超进化搬迁", "点击主界面-【？】"),
                tipsPop.TipsPop.openHelpPopById(164)
            },
            this);
            for (var n = function(t) {
                ImageButtonUtil.add(s["a_" + (t + 1)],
                function() {
                    0 == i.stoneIndex || i.stoneIndex == t + 1 || 5 == i.step || 4 == i.step && i.hasWrongDoor > 0 ? 0 == i.step && i.payPath <= 0 || 5 == i.step || 4 == i.step && i.hasWrongDoor > 0 ? (StatLogger.log("20230609版本系统功能", "卡修斯超进化搬迁", "点击主界面-右侧全新【关卡】"), SocketConnection.sendByQueue(43112, [t + 1],
                    function() {
                        ModuleManager.showModule("cassiusSuperEvo", [], t + 1, "CassiusSuperEvoFightPanel", AppDoStyle.HIDEN)
                    })) : (StatLogger.log("20230609版本系统功能", "卡修斯超进化搬迁", "点击主界面-右侧进行中【关卡】"), ModuleManager.showModule("cassiusSuperEvo", [], t + 1, "CassiusSuperEvoFightPanel", AppDoStyle.HIDEN)) : Alert.show("你上一次的迷宫还没有完成哦，如果现在选择另一个迷宫进入，之前的迷宫进度将会重置，你确认要继续吗？",
                    function() {
                        StatLogger.log("20230609版本系统功能", "卡修斯超进化搬迁", "点击主界面-右侧全新【关卡】时有正在进行中的其他关卡"),
                        SocketConnection.sendByQueue(43112, [t + 1],
                        function() {
                            e.selectDoor = 0,
                            ModuleManager.showModule("cassiusSuperEvo", [], t + 1, "CassiusSuperEvoFightPanel", AppDoStyle.HIDEN)
                        })
                    })
                },
                s)
            },
            s = this, o = 0; 4 > o; o++) n(o);
            ImageButtonUtil.add(this.btnSuper,
            function() {
                PetManager.isDefaultPet(796) || PetManager.isDefaultPet(797) || PetManager.isDefaultPet(798) ? (StatLogger.log("20230609版本系统功能", "卡修斯超进化搬迁", "点击主界面-左侧【开始超进化】"), SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 80],
                function() {
                    BubblerManager.getInstance().showText("进化成功！"),
                    i.updateView(),
                    PetManager.upDateBagPetInfo(PetManager.defaultTime)
                })) : Alarm.show("请将卡修斯设为首位！",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            ImageButtonUtil.add(this.evo,
            function() {
                i.getAll ? Alert.show("你已拥有足够进化道具，是否仍然要付费购买？",
                function() {
                    BuyProductManager.buyProduct("240673_2829",
                    function() {
                        PetManager.upDateBagPetInfo(PetManager.defaultTime)
                    },
                    i)
                }) : BuyProductManager.buyProduct("240673_2829",
                function() {
                    PetManager.upDateBagPetInfo(PetManager.defaultTime)
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 2323,
                    type: "pet"
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.sign,
            function() {
                StatLogger.log("20230609版本系统功能", "卡修斯超进化搬迁", "点击主界面-右侧【签到】"),
                PopViewManager.getInstance().openView(new e.CassiusSuperEvoSignPop)
            },
            this),
            ImageButtonUtil.add(this.mark,
            function() {
                StatLogger.log("20230609版本系统功能", "卡修斯超进化搬迁", "点击主界面-右侧【专属刻印】"),
                PopViewManager.getInstance().openView(new e.CassiusSuperEvoMarkPop)
            },
            this),
            ImageButtonUtil.add(this.buyItem,
            function() {
                PopViewManager.getInstance().openView(new e.CassiusSuperEvoBuyPop)
            },
            this),
            ImageButtonUtil.add(this.collect,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                    function(t) {
                        switch (t.label) {
                        case 0:
                            return this.canDown ? (this.canDown = !1, e = "cassius_super_evo_collect_png" == this.collect.source, [4, PetFactorCollectionManager.setCollection(this.confId, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                        case 1:
                            return t.sent(),
                            this.canDown = !0,
                            [2]
                        }
                    })
                })
            },
            this),
            EventManager.addEventListener(PetFactorCollectionManager.PetFactorCollectionManager_setCollection, this.updateFav, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                e.markFight && (FightManager.isWin && SocketConnection.sendWithCallback(CommandID.KAXIUSI_EV_LOTTERY,
                function(e) {}), PopViewManager.getInstance().openView(new e.CassiusSuperEvoMarkPop), e.markFight = !1)
            },
            this),
            EventManager.addEventListener("CassiusSuperEvoMarkPop_buy_mark",
            function() {
                i.updateView()
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                var e = [1700769, 1700770, 1700771, 1700772];
                i.getAll = !0;
                for (var t = 0; t < e.length; t++) {
                    var n = ItemManager.getNumByID(e[t]);
                    i["getNum" + (t + 1)].text = n + "/3",
                    i["a_" + (t + 1)].touchEnabled = 3 > n,
                    i["gotItem_" + (t + 1)].visible = n >= 3,
                    i["go_" + (t + 1)].visible = 3 > n,
                    3 > n && (i.getAll = !1)
                }
                i.btnSuper.visible = !i.isEvo && i.getAll
            },
            this),
            config.New_monster_level.load(function() {
                i.updateView()
            },
            this)
        },
        i.prototype.reShow = function() {
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this,
            t = [1700769, 1700770, 1700771, 1700772];
            this.getAll = !0;
            for (var i = 0; i < t.length; i++) {
                var n = ItemManager.getNumByID(t[i]);
                this["getNum" + (i + 1)].text = n + "/3",
                this["a_" + (i + 1)].touchEnabled = 3 > n,
                this["gotItem_" + (i + 1)].visible = n >= 3,
                this["go_" + (i + 1)].visible = 3 > n,
                this["go_" + (i + 1)].source = "cassius_super_evo_btnget_png",
                3 > n && (this.getAll = !1)
            }
            KTool.getBitSet([25663, 16063],
            function(t) {
                e.isEvo = 1 == t[0],
                e.btnSuper.visible = !e.isEvo && e.getAll,
                e.evo.touchEnabled = !e.isEvo,
                e.mark.touchEnabled = 0 == t[1],
                e.gotEvo.visible = e.isEvo,
                e.gotMark.visible = 1 == t[1],
                e.gotPet.visible = e.isEvo,
                e.buyItem.visible = !e.isEvo,
                e.sign.visible = !e.isEvo,
                KTool.getMultiValue([5129, 5130],
                function(t) {
                    var i = t[0];
                    e.payPath = t[1],
                    e.answer = 255 & i,
                    e.step = i >> 8 & 255,
                    e.hasWrongDoor = i >> 16 & 255,
                    e.stoneIndex = i >> 24 & 255,
                    e.stoneIndex > 0 && 5 != e.step && !(4 == e.step && e.hasWrongDoor > 0) && (e["go_" + e.stoneIndex].source = "cassius_super_evo_btnDoing_png")
                })
            }),
            this.updateFav()
        },
        i.prototype.updateFav = function() {
            var e = this,
            t = config.New_monster_level.getItems().filter(function(e) {
                return 2323 == ~~e.monsterid
            });
            t.length > 0 && (this.confId = t[0].id, PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.confId);
                e.collect.source = t ? "cassius_super_evo_collected_png": "cassius_super_evo_collect_png"
            }))
        },
        i
    } (BaseModule);
    e.CassiusSuperEvo = t,
    __reflect(t.prototype, "cassiusSuperEvo.CassiusSuperEvo")
} (cassiusSuperEvo || (cassiusSuperEvo = {}));
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
cassiusSuperEvo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = CassiusSuperEvoBuyPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this);
            for (var i = function(e) {
                ImageButtonUtil.add(n["btnBuy_" + (e + 1)],
                function() {
                    BuyProductManager.buyProduct(240669 + e + "_" + (2825 + e),
                    function() {
                        for (var e = [1700769, 1700770, 1700771, 1700772], i = !0, n = 0; n < e.length; n++) {
                            var s = ItemManager.getNumByID(e[n]);
                            3 > s && (i = !1)
                        }
                        i && Alert.show("进化道具已集齐，快开始超进化吧！",
                        function() {
                            t.hide()
                        })
                    },
                    t)
                },
                n),
                ImageButtonUtil.add(n["touch" + (e + 1)],
                function() {
                    var t = [1700769, 1700770, 1700771, 1700772],
                    i = {};
                    i.id = t[e],
                    tipsPop.TipsPop.openItemPop(i)
                },
                n)
            },
            n = this, s = 0; 4 > s; s++) i(s);
            ImageButtonUtil.add(this.close, this.hide, this)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.CassiusSuperEvoBuyPop = t,
    __reflect(t.prototype, "cassiusSuperEvo.CassiusSuperEvoBuyPop")
} (cassiusSuperEvo || (cassiusSuperEvo = {}));
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
cassiusSuperEvo; !
function(e) {
    e.selectDoor = 0;
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.path = [[1, 3, 4, 2], [1, 2, 2, 2], [4, 2, 3, 1], [3, 1, 2, 4]],
            i.modifyPath = [],
            i.rightPath = 0,
            i.curBoss = [],
            i.step = 0,
            i.answer = 0,
            i.stoneIndex = 0,
            i.hasWrongDoor = 0,
            i.boss = [55, 1405, 1031, 1134, 546, 921, 668, 856, 1742, 848, 1097, 1492, 465, 1325, 2017, 1358, 624, 2122, 1616, 1798],
            i.type = e || 1,
            i.skinName = CassiusSuperEvoFightPanelSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.adaptBgByScale.call(this, this.bg),
            this.initBtnClose("cassius_super_evo_title" + this.type + "_png", this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                FightManager.isWin && (e.selectDoor = 0),
                i.updateView(!0)
            },
            this),
            ImageButtonUtil.add(this.dia,
            function() {
                BuyProductManager.buyProduct("240674_2830",
                function() {
                    StatLogger.log("20230609版本系统功能", "卡修斯超进化搬迁", "点击任意关卡-右侧【秘籍】"),
                    i.updateView()
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.go1,
            function() {
                i.onClickDoor(0)
            },
            this, !1),
            ImageButtonUtil.add(this.go2,
            function() {
                i.onClickDoor(1)
            },
            this, !1),
            ImageButtonUtil.add(this.go3,
            function() {
                i.onClickDoor(2)
            },
            this, !1),
            ImageButtonUtil.add(this.no1,
            function() {
                BubblerManager.getInstance().showText("错误道路已被封锁，请选择其他道路")
            },
            this, !1),
            ImageButtonUtil.add(this.no2,
            function() {
                BubblerManager.getInstance().showText("错误道路已被封锁，请选择其他道路")
            },
            this, !1),
            ImageButtonUtil.add(this.no3,
            function() {
                BubblerManager.getInstance().showText("错误道路已被封锁，请选择其他道路")
            },
            this, !1),
            EventManager.addEventListener("CassiusSuperEvoFightPop_close_pop",
            function() {
                i.onClose()
            },
            this),
            this.updateView()
        },
        i.prototype.updateView = function(t) {
            var i = this;
            void 0 === t && (t = !1),
            KTool.getMultiValue([5129, 5130],
            function(n) {
                var s = n[0];
                if (i.rightPath = n[1], i.answer = 255 & s, i.step = s >> 8 & 255, i.hasWrongDoor = s >> 16 & 255, i.stoneIndex = s >> 24 & 255, i.curBoss = [], i.curBoss.push(1620 + 4 * i.step + i.type - 1), i.curBoss.push(i.boss[4 * i.step + i.type - 1]), i.floor.textFlow = [{
                    text: "第"
                },
                {
                    text: "" + (i.step + 1),
                    style: {
                        textColor: 16774548
                    }
                },
                {
                    text: "/5层"
                }], 4 == i.path[i.answer - 1][i.step] ? i.modifyPath = [2, 3, 4] : i.modifyPath = [1, 2, 3], i.go2.source = i.step < 5 ? "cassius_super_evo_fight_panel_go_png": "cassius_super_evo_fight_panel_go1_png", i.gotDia.visible = i.rightPath > 0, i.rightPath > 0 ? i.dia.touchEnabled = !1 : DisplayUtil.setEnabled(i.dia, i.step <= 0, !0), i.showDoor(), e.selectDoor && (i.curBoss = [], i.curBoss.push(1620 + 4 * i.step + e.selectDoor - 1), i.curBoss.push(i.boss[4 * i.step + e.selectDoor - 1]), i.loadBoss(i.curBoss)), i.step >= 4 && i.hasWrongDoor > 0 && Alarm.show("道路错误，请不要灰心，多试几次！累积到第8次探索迷宫就一定会找到正确的路线！",
                function() {
                    i.onClose()
                }), i.step < 5 && FightManager.isWin && t && BubblerManager.getInstance().showText("已战胜敌人，请继续选择道路"), 5 == i.step) {
                    for (var o = [1700769, 1700770, 1700771, 1700772], r = !0, u = 0; u < o.length; u++) {
                        var a = ItemManager.getNumByID(o[u]);
                        3 > a && (r = !1)
                    }
                    r && BubblerManager.getInstance().showText("进化道具已集齐，快开始超进化吧！"),
                    i.onClose()
                }
            })
        },
        i.prototype.setDoorEnable = function(e) {
            void 0 === e && (e = !0),
            this.step < 4 ? (this.go1.visible = this.go2.visible = this.go3.visible = e, this.no1.visible = this.no2.visible = this.no3.visible = !e) : (this.go2.visible = !0, this.go2.source = "cassius_super_evo_fight_panel_go1_png", this.go1.visible = this.go3.visible = !1, this.no1.visible = this.no2.visible = this.no3.visible = !1),
            this.enterIma.visible = e
        },
        i.prototype.loadBoss = function(t) {
            PopViewManager.getInstance().openView(new e.CassiusSuperEvoFightPop, null, {
                id: t,
                step: this.step,
                stoneIndex: this.stoneIndex
            })
        },
        i.prototype.onClickDoor = function(t) {
            StatLogger.log("20230609版本系统功能", "卡修斯超进化搬迁", "点击任意关卡-中间任意【传送门】"),
            this.step < 4 ? (e.selectDoor = this.modifyPath[t], this.zoom()) : (e.selectDoor = this.stoneIndex, this.zoom())
        },
        i.prototype.zoom = function() {
            4 == this.step && this.setDoorEnable(!1),
            this.updateView()
        },
        i.prototype.showDoor = function() {
            if (this.setDoorEnable(!0), this.step < 4) {
                if (MainManager.actorInfo.isVip && (this.go2.visible = !1, this.no2.visible = !0, 4 == this.path[this.answer - 1][this.step] ? this.modifyPath = [2, 3, 4] : (this.modifyPath = [1, 2, 3], 2 == this.path[this.answer - 1][this.step] && (this.modifyPath = [1, 3, 2]))), this.rightPath > 0) {
                    for (var e = 0; 3 > e; e++) this.go1.visible = this.go2.visible = this.go3.visible = !1,
                    this.no1.visible = this.no2.visible = this.no3.visible = !0;
                    this.setCurrDoor()
                }
            } else this.enterIma.visible = !0,
            this.setDoorEnable(!0)
        },
        i.prototype.setCurrDoor = function() {
            for (var e = this.path[this.rightPath - 1][this.step], t = 0; 3 > t; t++) this.modifyPath[t] == e && (this["go" + (t + 1)].visible = !0, this["no" + (t + 1)].visible = !1)
        },
        i
    } (BaseModule);
    e.CassiusSuperEvoFightPanel = t,
    __reflect(t.prototype, "cassiusSuperEvo.CassiusSuperEvoFightPanel")
} (cassiusSuperEvo || (cassiusSuperEvo = {}));
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
cassiusSuperEvo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.isFight = !1,
            t.skinName = CassiusSuperEvoFightPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.createChildren = function() {
            var t = this;
            e.prototype.createChildren.call(this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.bag,
            function() {
                t.hide(),
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.fight,
            function() {
                t.isFight = !0,
                FightManager.fightNoMapBoss(t._data.id[0]),
                t.hide()
            },
            this)
        },
        t.prototype._upDateView = function() {
            var e = this._data.step,
            t = this._data.id[1];
            this.imaPet.source = ClientConfig.getPetHeadPath(t),
            this.petName.text = PetXMLInfo.getName(t);
            var i = [1700769, 1700770, 1700771, 1700772][this._data.stoneIndex - 1],
            n = ItemXMLInfo.getName(i);
            this.title.text = 4 == e ? "击败敌人即可获得" + n + "！": "击败敌人才可继续选择道路"
        },
        t.prototype.destroy = function() { ! this.isFight && EventManager.dispatchEventWith("CassiusSuperEvoFightPop_close_pop"),
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.CassiusSuperEvoFightPop = t,
    __reflect(t.prototype, "cassiusSuperEvo.CassiusSuperEvoFightPop")
} (cassiusSuperEvo || (cassiusSuperEvo = {}));
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
cassiusSuperEvo; !
function(e) {
    e.markFight = !1;
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.canNum = 0,
            e.skinName = CassiusSuperEvoMarkPopSkin,
            e
        }
        return __extends(i, t),
        i.prototype.createChildren = function() {
            var i = this;
            t.prototype.createChildren.call(this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.markIcon,
            function() {
                var e = {
                    ins: 40120
                };
                tipsPop.TipsPop.openCounterMarkPop(e)
            },
            this),
            ImageButtonUtil.add(this.bag,
            function() {
                i.hide(),
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("240295_2286",
                function() {
                    BubblerManager.getInstance().showText("购买次数成功"),
                    i._upDateView()
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.oneKey,
            function() {
                BuyProductManager.buyProduct("240273_2287",
                function() {
                    BubblerManager.getInstance().showText("一键获得成功"),
                    EventManager.dispatchEventWith("CassiusSuperEvoMarkPop_buy_mark"),
                    i._upDateView()
                },
                i)
            },
            this);
            for (var n = function(t) {
                ImageButtonUtil.add(s["btnStart_" + (t + 1)],
                function() {
                    return i.canNum <= 0 ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : (e.markFight = !0, i.hide(), void FightManager.fightNoMapBoss(1144 + t))
                },
                s)
            },
            s = this, o = 0; 5 > o; o++) n(o);
            this.icon.source = "resource/assets/item/doodle/icon/5.png"
        },
        i.prototype._upDateView = function() {
            var e = this;
            KTool.getBitSet([16063],
            function(t) {
                DisplayUtil.setEnabled(e.oneKey, 0 == t[0], !0),
                KTool.getMultiValue([5102, 5103, 15052],
                function(t) {
                    console.log(t[0]);
                    var i = t[1] + 3 - t[2];
                    e.canNum = Math.max(0, i),
                    e.times.text = e.canNum + "",
                    DisplayUtil.setEnabled(e.add, e.canNum <= 0, !0);
                    for (var n = t[0], s = 0; 5 > s; s++) {
                        var o = n >= s;
                        if (e["mas" + (s + 1)].visible = !o, e["notOpen_" + (s + 1)].visible = !o, e["btnStart_" + (s + 1)].visible = o, 4 > s) {
                            var r = n > s;
                            e["light_" + (s + 1)].visible = r,
                            e["dark_" + (s + 1)].visible = !r
                        }
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.CassiusSuperEvoMarkPop = t,
    __reflect(t.prototype, "cassiusSuperEvo.CassiusSuperEvoMarkPop")
} (cassiusSuperEvo || (cassiusSuperEvo = {}));
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
cassiusSuperEvo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = CassiusSuperEvoSignPopSkin,
            t._list.itemRenderer = i,
            EventManager.addEventListener("CassiusSuperEvoSignItem_sign_item", t._upDateView, t),
            ImageButtonUtil.add(t.close, t.hide, t),
            t
        }
        return __extends(t, e),
        t.prototype._upDateView = function() {
            var e = this;
            KTool.getMultiValue([121561, 201550],
            function(t) {
                for (var i = t[0], n = 1 == t[1], s = [], o = 0; 4 > o; o++) {
                    var r = {};
                    i > o ? r.state = 2 : i == o ? r.state = n ? 0 : 1 : r.state = 0,
                    r.id = 1700769 + o,
                    s.push(r),
                    3 > o && (e["dark_" + (o + 1)].visible = o >= i, e["light_" + (o + 1)].visible = i > o)
                }
                e._list.dataProvider = new eui.ArrayCollection(s)
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this)
        },
        t
    } (PopView);
    e.CassiusSuperEvoSignPop = t,
    __reflect(t.prototype, "cassiusSuperEvo.CassiusSuperEvoSignPop");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.info = null,
            t.skinName = CassiusSuperEvoSignItemSkin,
            ImageButtonUtil.add(t.icon,
            function() {
                1 == t.info.state ? SocketConnection.sendByQueue(41455, [t.itemIndex + 1],
                function() {
                    EventManager.dispatchEventWith("CassiusSuperEvoSignItem_sign_item"),
                    1 == t.info.state && 3 == t.itemIndex && Alarm.show("本轮奖励已领取完毕，明日签到可从头再次领取！", PopViewManager.getInstance().hideAll)
                }) : BubblerManager.getInstance().showText(0 == t.info.state ? "尚未满足签到天数需求，请改日再试": "本轮已领取过该奖励")
            },
            t),
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            this.currentState = ["go", "get", "got"][this.info.state],
            this.icon.source = ClientConfig.getItemIcon(this.info.id),
            this.day.text = "第" + ["一", "二", "三", "四"][this.itemIndex] + "天"
        },
        t
    } (BaseItemRenderer);
    e.CassiusSuperEvoSignItem = i,
    __reflect(i.prototype, "cassiusSuperEvo.CassiusSuperEvoSignItem")
} (cassiusSuperEvo || (cassiusSuperEvo = {}));
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
generateEUI.paths["resource/eui_skins/CassiusSuperEvoBuyPopSkin.exml"] = window.CassiusSuperEvoBuyPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["close", "btnBuy_1", "btnBuy_2", "btnBuy_3", "btnBuy_4", "touch1", "touch2", "touch3", "touch4"],
        this.height = 255,
        this.width = 590,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 255,
        e.width = 590,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.close_i(), this.btnBuy_1_i(), this.btnBuy_2_i(), this.btnBuy_3_i(), this.btnBuy_4_i(), this.touch1_i(), this.touch2_i(), this.touch3_i(), this.touch4_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_super_evo_pop_buybg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "cassius_super_evo_pop_close_png",
        e.x = 555,
        e.y = 1,
        e
    },
    i.btnBuy_1_i = function() {
        var e = new eui.Image;
        return this.btnBuy_1 = e,
        e.source = "cassius_super_evo_pop_btnbuy_png",
        e.x = 50,
        e.y = 183,
        e
    },
    i.btnBuy_2_i = function() {
        var e = new eui.Image;
        return this.btnBuy_2 = e,
        e.source = "cassius_super_evo_pop_btnbuy_png",
        e.x = 184,
        e.y = 183,
        e
    },
    i.btnBuy_3_i = function() {
        var e = new eui.Image;
        return this.btnBuy_3 = e,
        e.source = "cassius_super_evo_pop_btnbuy_png",
        e.x = 317,
        e.y = 183,
        e
    },
    i.btnBuy_4_i = function() {
        var e = new eui.Image;
        return this.btnBuy_4 = e,
        e.source = "cassius_super_evo_pop_btnbuy_png",
        e.x = 451,
        e.y = 183,
        e
    },
    i.touch1_i = function() {
        var e = new eui.Group;
        return this.touch1 = e,
        e.height = 103,
        e.width = 104,
        e.x = 42,
        e.y = 68,
        e
    },
    i.touch2_i = function() {
        var e = new eui.Group;
        return this.touch2 = e,
        e.height = 103,
        e.width = 104,
        e.x = 175,
        e.y = 68,
        e
    },
    i.touch3_i = function() {
        var e = new eui.Group;
        return this.touch3 = e,
        e.height = 103,
        e.width = 104,
        e.x = 309,
        e.y = 68,
        e
    },
    i.touch4_i = function() {
        var e = new eui.Group;
        return this.touch4 = e,
        e.height = 103,
        e.width = 104,
        e.x = 442,
        e.y = 68,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/CassiusSuperEvoFightPanelSkin.exml"] = window.CassiusSuperEvoFightPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "enterIma", "no1", "no2", "no3", "go1", "go2", "go3", "floor", "dia", "gotDia"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "cassius_super_evo_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 597,
        e.width = 1062,
        e.x = 37,
        e.y = 16,
        e.elementsContent = [this.enterIma_i(), this._Image1_i(), this.no1_i(), this.no2_i(), this.no3_i(), this.go1_i(), this.go2_i(), this.go3_i(), this._Image2_i(), this.floor_i(), this.dia_i(), this.gotDia_i()],
        e
    },
    i.enterIma_i = function() {
        var e = new eui.Image;
        return this.enterIma = e,
        e.horizontalCenter = 0,
        e.source = "cassius_super_evo_fight_panel_ima1_png",
        e.y = 486,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_super_evo_fight_panel_text_png",
        e.x = 180,
        e.y = 38,
        e
    },
    i.no1_i = function() {
        var e = new eui.Image;
        return this.no1 = e,
        e.source = "cassius_super_evo_fight_panel_no_png",
        e.visible = !0,
        e.x = 38.65,
        e.y = 202,
        e
    },
    i.no2_i = function() {
        var e = new eui.Image;
        return this.no2 = e,
        e.source = "cassius_super_evo_fight_panel_no_png",
        e.visible = !0,
        e.x = 382,
        e.y = 154,
        e
    },
    i.no3_i = function() {
        var e = new eui.Image;
        return this.no3 = e,
        e.source = "cassius_super_evo_fight_panel_no_png",
        e.visible = !0,
        e.x = 720.51,
        e.y = 202,
        e
    },
    i.go1_i = function() {
        var e = new eui.Image;
        return this.go1 = e,
        e.source = "cassius_super_evo_fight_panel_go_png",
        e.x = 38.65,
        e.y = 171,
        e
    },
    i.go2_i = function() {
        var e = new eui.Image;
        return this.go2 = e,
        e.horizontalCenter = 0,
        e.source = "cassius_super_evo_fight_panel_go1_png",
        e.verticalCenter = 1.5,
        e.visible = !0,
        e
    },
    i.go3_i = function() {
        var e = new eui.Image;
        return this.go3 = e,
        e.source = "cassius_super_evo_fight_panel_go_png",
        e.visible = !0,
        e.x = 720.51,
        e.y = 171,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "cassius_super_evo_fight_panel_floorbg_png",
        e.visible = !0,
        e.y = 89,
        e
    },
    i.floor_i = function() {
        var e = new eui.Label;
        return this.floor = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 30,
        e.text = "第5/5层",
        e.textColor = 16776554,
        e.y = 96,
        e
    },
    i.dia_i = function() {
        var e = new eui.Image;
        return this.dia = e,
        e.source = "cassius_super_evo_fight_panel_dia1_png",
        e.x = 938,
        e.y = 0,
        e
    },
    i.gotDia_i = function() {
        var e = new eui.Image;
        return this.gotDia = e,
        e.source = "cassius_super_evo_gotevo1_png",
        e.visible = !0,
        e.x = 954.576,
        e.y = 36.276,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/CassiusSuperEvoFightPopSkin.exml"] = window.CassiusSuperEvoFightPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "petName", "imaPet", "close", "bag", "cure", "fight"],
        this.height = 460,
        this.width = 748,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 460,
        e.width = 748,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.title_i(), this._Group1_i(), this.close_i(), this.bag_i(), this.cure_i(), this.fight_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_super_evo_fight_panel_popbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.title_i = function() {
        var e = new eui.Label;
        return this.title = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 134,
        e.size = 18,
        e.text = "击败敌人才可继续选择道路",
        e.textColor = 8631271,
        e.y = 97,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 448,
        e.y = 197,
        e.elementsContent = [this.petName_i(), this._Image2_i(), this.imaPet_i()],
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "神王宙斯",
        e.textColor = 8035552,
        e.x = 16,
        e.y = 107,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_super_evo_fight_panel_petbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imaPet_i = function() {
        var e = new eui.Image;
        return this.imaPet = e,
        e.height = 100,
        e.horizontalCenter = 0,
        e.verticalCenter = -10.5,
        e.width = 100,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "cassius_super_evo_pop_close_png",
        e.x = 711,
        e.y = 38,
        e
    },
    i.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.source = "cassius_super_evo_pop_bag_png",
        e.x = 642,
        e.y = 210,
        e
    },
    i.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.source = "cassius_super_evo_pop_cure_png",
        e.x = 641,
        e.y = 294,
        e
    },
    i.fight_i = function() {
        var e = new eui.Image;
        return this.fight = e,
        e.source = "cassius_super_evo_fight_panel_fight_png",
        e.x = 433,
        e.y = 368,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/CassiusSuperEvoMarkPopSkin.exml"] = window.CassiusSuperEvoMarkPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bag", "cure", "close", "oneKey", "times", "num", "icon", "add", "dark_1", "dark_2", "dark_3", "dark_4", "light_1", "light_2", "light_3", "light_4", "btnStart_1", "btnStart_2", "btnStart_3", "notOpen_1", "notOpen_2", "notOpen_3", "btnStart_4", "notOpen_4", "btnStart_5", "notOpen_5", "mas1", "mas2", "mas3", "mas4", "mas5", "markIcon"],
        this.height = 423,
        this.width = 748,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.bag_i(), this.cure_i(), this.close_i(), this.oneKey_i(), this._Label1_i(), this.times_i(), this.num_i(), this.icon_i(), this.add_i(), this.dark_1_i(), this.dark_2_i(), this.dark_3_i(), this.dark_4_i(), this.light_1_i(), this.light_2_i(), this.light_3_i(), this.light_4_i(), this.btnStart_1_i(), this.btnStart_2_i(), this.btnStart_3_i(), this.notOpen_1_i(), this.notOpen_2_i(), this.notOpen_3_i(), this.btnStart_4_i(), this.notOpen_4_i(), this.btnStart_5_i(), this.notOpen_5_i(), this.mas1_i(), this.mas2_i(), this.mas3_i(), this.mas4_i(), this.mas5_i(), this.markIcon_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_super_evo_pop_markbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.source = "cassius_super_evo_pop_bag_png",
        e.x = 19,
        e.y = 337,
        e
    },
    i.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.source = "cassius_super_evo_pop_cure_png",
        e.x = 106,
        e.y = 337,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "cassius_super_evo_pop_close_png",
        e.x = 711,
        e.y = 1,
        e
    },
    i.oneKey_i = function() {
        var e = new eui.Image;
        return this.oneKey = e,
        e.source = "cassius_super_evo_pop_btnyijian_png",
        e.x = 594,
        e.y = 359,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余挑战机会：",
        e.textColor = 8631271,
        e.x = 273,
        e.y = 376,
        e
    },
    i.times_i = function() {
        var e = new eui.Label;
        return this.times = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "3",
        e.textColor = 16514896,
        e.x = 433,
        e.y = 376,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "30",
        e.textColor = 16514896,
        e.x = 665,
        e.y = 335.278,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 20,
        e.width = 20,
        e.x = 635,
        e.y = 333.971,
        e
    },
    i.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.source = "cassius_super_evo_pop_add_png",
        e.x = 451,
        e.y = 370,
        e
    },
    i.dark_1_i = function() {
        var e = new eui.Image;
        return this.dark_1 = e,
        e.source = "cassius_super_evo_pop_dark_png",
        e.x = 143,
        e.y = 172,
        e
    },
    i.dark_2_i = function() {
        var e = new eui.Image;
        return this.dark_2 = e,
        e.source = "cassius_super_evo_pop_dark_png",
        e.x = 277,
        e.y = 172,
        e
    },
    i.dark_3_i = function() {
        var e = new eui.Image;
        return this.dark_3 = e,
        e.source = "cassius_super_evo_pop_dark_png",
        e.x = 411,
        e.y = 172,
        e
    },
    i.dark_4_i = function() {
        var e = new eui.Image;
        return this.dark_4 = e,
        e.source = "cassius_super_evo_pop_dark_png",
        e.x = 553,
        e.y = 172,
        e
    },
    i.light_1_i = function() {
        var e = new eui.Image;
        return this.light_1 = e,
        e.source = "cassius_super_evo_pop_light_png",
        e.x = 135,
        e.y = 163,
        e
    },
    i.light_2_i = function() {
        var e = new eui.Image;
        return this.light_2 = e,
        e.source = "cassius_super_evo_pop_light_png",
        e.x = 269,
        e.y = 163,
        e
    },
    i.light_3_i = function() {
        var e = new eui.Image;
        return this.light_3 = e,
        e.source = "cassius_super_evo_pop_light_png",
        e.x = 403,
        e.y = 163,
        e
    },
    i.light_4_i = function() {
        var e = new eui.Image;
        return this.light_4 = e,
        e.source = "cassius_super_evo_pop_light_png",
        e.x = 545,
        e.y = 163,
        e
    },
    i.btnStart_1_i = function() {
        var e = new eui.Image;
        return this.btnStart_1 = e,
        e.source = "cassius_super_evo_pop_btnstart_png",
        e.x = 42,
        e.y = 261,
        e
    },
    i.btnStart_2_i = function() {
        var e = new eui.Image;
        return this.btnStart_2 = e,
        e.source = "cassius_super_evo_pop_btnstart_png",
        e.x = 176,
        e.y = 261,
        e
    },
    i.btnStart_3_i = function() {
        var e = new eui.Image;
        return this.btnStart_3 = e,
        e.source = "cassius_super_evo_pop_btnstart_png",
        e.x = 310,
        e.y = 261,
        e
    },
    i.notOpen_1_i = function() {
        var e = new eui.Image;
        return this.notOpen_1 = e,
        e.source = "cassius_super_evo_pop_notopen_png",
        e.x = 41,
        e.y = 266,
        e
    },
    i.notOpen_2_i = function() {
        var e = new eui.Image;
        return this.notOpen_2 = e,
        e.source = "cassius_super_evo_pop_notopen_png",
        e.x = 175,
        e.y = 266,
        e
    },
    i.notOpen_3_i = function() {
        var e = new eui.Image;
        return this.notOpen_3 = e,
        e.source = "cassius_super_evo_pop_notopen_png",
        e.x = 309,
        e.y = 266,
        e
    },
    i.btnStart_4_i = function() {
        var e = new eui.Image;
        return this.btnStart_4 = e,
        e.source = "cassius_super_evo_pop_btnstart_png",
        e.x = 444,
        e.y = 261,
        e
    },
    i.notOpen_4_i = function() {
        var e = new eui.Image;
        return this.notOpen_4 = e,
        e.source = "cassius_super_evo_pop_notopen_png",
        e.x = 443,
        e.y = 266,
        e
    },
    i.btnStart_5_i = function() {
        var e = new eui.Image;
        return this.btnStart_5 = e,
        e.source = "cassius_super_evo_pop_btnstart_png",
        e.x = 602,
        e.y = 261,
        e
    },
    i.notOpen_5_i = function() {
        var e = new eui.Image;
        return this.notOpen_5 = e,
        e.source = "cassius_super_evo_pop_notopen_png",
        e.x = 600,
        e.y = 266,
        e
    },
    i.mas1_i = function() {
        var e = new eui.Image;
        return this.mas1 = e,
        e.source = "cassius_super_evo_pop_mas_png",
        e.x = 34,
        e.y = 128,
        e
    },
    i.mas2_i = function() {
        var e = new eui.Image;
        return this.mas2 = e,
        e.source = "cassius_super_evo_pop_mas_png",
        e.x = 168,
        e.y = 128,
        e
    },
    i.mas3_i = function() {
        var e = new eui.Image;
        return this.mas3 = e,
        e.source = "cassius_super_evo_pop_mas_png",
        e.x = 302,
        e.y = 128,
        e
    },
    i.mas4_i = function() {
        var e = new eui.Image;
        return this.mas4 = e,
        e.source = "cassius_super_evo_pop_mas_png",
        e.x = 436,
        e.y = 128,
        e
    },
    i.mas5_i = function() {
        var e = new eui.Image;
        return this.mas5 = e,
        e.source = "cassius_super_evo_pop_mas5_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 583,
        e.y = 108,
        e
    },
    i.markIcon_i = function() {
        var e = new eui.Image;
        return this.markIcon = e,
        e.source = "cassius_super_evo_pop_markicon_png",
        e.x = 654,
        e.y = 168,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/CassiusSuperEvoSignItemSkin.exml"] = window.CassiusSuperEvoSignItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["day", "icon"],
        this.currentState = "go",
        this.height = 173,
        this.width = 151,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("go", [new eui.SetProperty("_Image2", "visible", !1), new eui.SetProperty("_Image3", "visible", !1)]), new eui.State("got", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("day", "visible", !0), new eui.SetProperty("day", "textColor", 16775919)]), new eui.State("get", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("day", "visible", !0), new eui.SetProperty("day", "textColor", 16775919), new eui.SetProperty("_Image3", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.day_i(), this.icon_i(), this._Image3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "cassius_super_evo_pop_getbg_png",
        e.x = 16,
        e.y = 22,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.source = "cassius_super_evo_pop_gotbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.day_i = function() {
        var e = new eui.Label;
        return this.day = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第一天",
        e.textColor = 12642047,
        e.x = 43,
        e.y = 132,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 70,
        e.horizontalCenter = -.5,
        e.verticalCenter = -7.5,
        e.width = 70,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return this._Image3 = e,
        e.source = "cassius_super_evo_pop_got_png",
        e.touchEnabled = !1,
        e.x = 26,
        e.y = 58,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/CassiusSuperEvoSignPopSkin.exml"] = window.CassiusSuperEvoSignPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["close", "_list", "dark_1", "light_1", "dark_2", "light_2", "dark_3", "light_3"],
        this.height = 352,
        this.width = 748,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 352,
        e.width = 748,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.close_i(), this._Scroller1_i(), this.dark_1_i(), this.light_1_i(), this.dark_2_i(), this.light_2_i(), this.dark_3_i(), this.light_3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_super_evo_pop_signbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "cassius_super_evo_pop_close_png",
        e.x = 711,
        e.y = 0,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 174,
        e.width = 673.264,
        e.x = 39,
        e.y = 91,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = CassiusSuperEvoSignItemSkin,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 20,
        e
    },
    i.dark_1_i = function() {
        var e = new eui.Image;
        return this.dark_1 = e,
        e.source = "cassius_super_evo_pop_dark1_png",
        e.visible = !0,
        e.x = 186,
        e.y = 160,
        e
    },
    i.light_1_i = function() {
        var e = new eui.Image;
        return this.light_1 = e,
        e.source = "cassius_super_evo_pop_light1_png",
        e.visible = !1,
        e.x = 179,
        e.y = 154,
        e
    },
    i.dark_2_i = function() {
        var e = new eui.Image;
        return this.dark_2 = e,
        e.source = "cassius_super_evo_pop_dark1_png",
        e.visible = !0,
        e.x = 358,
        e.y = 160,
        e
    },
    i.light_2_i = function() {
        var e = new eui.Image;
        return this.light_2 = e,
        e.source = "cassius_super_evo_pop_light1_png",
        e.visible = !1,
        e.x = 351,
        e.y = 154,
        e
    },
    i.dark_3_i = function() {
        var e = new eui.Image;
        return this.dark_3 = e,
        e.source = "cassius_super_evo_pop_dark1_png",
        e.visible = !0,
        e.x = 530,
        e.y = 160,
        e
    },
    i.light_3_i = function() {
        var e = new eui.Image;
        return this.light_3 = e,
        e.source = "cassius_super_evo_pop_light1_png",
        e.visible = !1,
        e.x = 523,
        e.y = 154,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/CassiusSuperEvoSkin.exml"] = window.CassiusSuperEvoSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "gotPet", "btnSuper", "btnInfo", "collect", "btnGet_1", "go_1", "getNum1", "name1", "item1", "gotItem_1", "a_1", "btnGet_2", "go_2", "getNum2", "name2", "item2", "gotItem_2", "a_2", "btnGet_3", "go_3", "getNum3", "name3", "item3", "gotItem_3", "a_3", "btnGet_4", "go_4", "getNum4", "name4", "item4", "gotItem_4", "a_4", "evo", "mark", "buyItem", "sign", "gotEvo", "gotMark", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.mainGroup_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "cassius_super_evo_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.cacheAsBitmap = !0,
        e.height = 597,
        e.horizontalCenter = 9,
        e.verticalCenter = -5.5,
        e.width = 1072,
        e.elementsContent = [this._Image1_i(), this.gotPet_i(), this.btnSuper_i(), this.btnInfo_i(), this.collect_i(), this.a_1_i(), this.a_2_i(), this.a_3_i(), this.a_4_i(), this.evo_i(), this.mark_i(), this.buyItem_i(), this.sign_i(), this.gotEvo_i(), this.gotMark_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "cassius_super_evo_pet_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.gotPet_i = function() {
        var e = new eui.Image;
        return this.gotPet = e,
        e.source = "cassius_super_evo_gotpet_png",
        e.visible = !0,
        e.x = 248,
        e.y = 310,
        e
    },
    i.btnSuper_i = function() {
        var e = new eui.Image;
        return this.btnSuper = e,
        e.source = "cassius_super_evo_btnsuper_png",
        e.x = 204,
        e.y = 467,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "cassius_super_evo_btninfo_png",
        e.x = 10,
        e.y = 536,
        e
    },
    i.collect_i = function() {
        var e = new eui.Image;
        return this.collect = e,
        e.source = "cassius_super_evo_collect_png",
        e.x = 90,
        e.y = 535,
        e
    },
    i.a_1_i = function() {
        var e = new eui.Group;
        return this.a_1 = e,
        e.x = 688,
        e.y = 73,
        e.elementsContent = [this.btnGet_1_i(), this.go_1_i(), this.getNum1_i(), this.name1_i(), this.item1_i(), this.gotItem_1_i()],
        e
    },
    i.btnGet_1_i = function() {
        var e = new eui.Image;
        return this.btnGet_1 = e,
        e.source = "cassius_super_evo_itembg_png",
        e.x = 0,
        e.y = 27,
        e
    },
    i.go_1_i = function() {
        var e = new eui.Image;
        return this.go_1 = e,
        e.source = "cassius_super_evo_btnget_png",
        e.touchEnabled = !1,
        e.x = 195,
        e.y = 72,
        e
    },
    i.getNum1_i = function() {
        var e = new eui.Label;
        return this.getNum1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "6/8",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 129,
        e.y = 71,
        e
    },
    i.name1_i = function() {
        var e = new eui.Image;
        return this.name1 = e,
        e.source = "cassius_super_evo_name1_png",
        e.touchEnabled = !1,
        e.x = 121,
        e.y = 37,
        e
    },
    i.item1_i = function() {
        var e = new eui.Image;
        return this.item1 = e,
        e.source = "cassius_super_evo_item1_png",
        e.touchEnabled = !1,
        e.x = 21,
        e.y = 0,
        e
    },
    i.gotItem_1_i = function() {
        var e = new eui.Image;
        return this.gotItem_1 = e,
        e.source = "cassius_super_evo_gotitem_png",
        e.touchEnabled = !1,
        e.x = 11,
        e.y = 49,
        e
    },
    i.a_2_i = function() {
        var e = new eui.Group;
        return this.a_2 = e,
        e.x = 688,
        e.y = 178,
        e.elementsContent = [this.btnGet_2_i(), this.go_2_i(), this.getNum2_i(), this.name2_i(), this.item2_i(), this.gotItem_2_i()],
        e
    },
    i.btnGet_2_i = function() {
        var e = new eui.Image;
        return this.btnGet_2 = e,
        e.source = "cassius_super_evo_itembg_png",
        e.x = 0,
        e.y = 26,
        e
    },
    i.go_2_i = function() {
        var e = new eui.Image;
        return this.go_2 = e,
        e.source = "cassius_super_evo_btnget_png",
        e.touchEnabled = !1,
        e.x = 195,
        e.y = 71,
        e
    },
    i.getNum2_i = function() {
        var e = new eui.Label;
        return this.getNum2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "6/8",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 129,
        e.y = 70,
        e
    },
    i.name2_i = function() {
        var e = new eui.Image;
        return this.name2 = e,
        e.source = "cassius_super_evo_name2_png",
        e.touchEnabled = !1,
        e.x = 121,
        e.y = 36,
        e
    },
    i.item2_i = function() {
        var e = new eui.Image;
        return this.item2 = e,
        e.source = "cassius_super_evo_item2_png",
        e.touchEnabled = !1,
        e.x = 22,
        e.y = 0,
        e
    },
    i.gotItem_2_i = function() {
        var e = new eui.Image;
        return this.gotItem_2 = e,
        e.source = "cassius_super_evo_gotitem_png",
        e.touchEnabled = !1,
        e.x = 11,
        e.y = 47,
        e
    },
    i.a_3_i = function() {
        var e = new eui.Group;
        return this.a_3 = e,
        e.x = 688,
        e.y = 282,
        e.elementsContent = [this.btnGet_3_i(), this.go_3_i(), this.getNum3_i(), this.name3_i(), this.item3_i(), this.gotItem_3_i()],
        e
    },
    i.btnGet_3_i = function() {
        var e = new eui.Image;
        return this.btnGet_3 = e,
        e.source = "cassius_super_evo_itembg_png",
        e.x = 0,
        e.y = 26,
        e
    },
    i.go_3_i = function() {
        var e = new eui.Image;
        return this.go_3 = e,
        e.source = "cassius_super_evo_btnget_png",
        e.touchEnabled = !1,
        e.x = 195,
        e.y = 71,
        e
    },
    i.getNum3_i = function() {
        var e = new eui.Label;
        return this.getNum3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "6/8",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 129,
        e.y = 70,
        e
    },
    i.name3_i = function() {
        var e = new eui.Image;
        return this.name3 = e,
        e.source = "cassius_super_evo_name3_png",
        e.touchEnabled = !1,
        e.x = 121,
        e.y = 36,
        e
    },
    i.item3_i = function() {
        var e = new eui.Image;
        return this.item3 = e,
        e.source = "cassius_super_evo_item3_png",
        e.touchEnabled = !1,
        e.x = 22,
        e.y = 0,
        e
    },
    i.gotItem_3_i = function() {
        var e = new eui.Image;
        return this.gotItem_3 = e,
        e.source = "cassius_super_evo_gotitem_png",
        e.touchEnabled = !1,
        e.x = 11,
        e.y = 48,
        e
    },
    i.a_4_i = function() {
        var e = new eui.Group;
        return this.a_4 = e,
        e.x = 688,
        e.y = 385,
        e.elementsContent = [this.btnGet_4_i(), this.go_4_i(), this.getNum4_i(), this.name4_i(), this.item4_i(), this.gotItem_4_i()],
        e
    },
    i.btnGet_4_i = function() {
        var e = new eui.Image;
        return this.btnGet_4 = e,
        e.source = "cassius_super_evo_itembg_png",
        e.x = 0,
        e.y = 27,
        e
    },
    i.go_4_i = function() {
        var e = new eui.Image;
        return this.go_4 = e,
        e.source = "cassius_super_evo_btnget_png",
        e.touchEnabled = !1,
        e.x = 195,
        e.y = 72,
        e
    },
    i.getNum4_i = function() {
        var e = new eui.Label;
        return this.getNum4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "6/8",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 129,
        e.y = 71,
        e
    },
    i.name4_i = function() {
        var e = new eui.Image;
        return this.name4 = e,
        e.source = "cassius_super_evo_name4_png",
        e.touchEnabled = !1,
        e.x = 122,
        e.y = 37,
        e
    },
    i.item4_i = function() {
        var e = new eui.Image;
        return this.item4 = e,
        e.source = "cassius_super_evo_item4_png",
        e.touchEnabled = !1,
        e.x = 22,
        e.y = 0,
        e
    },
    i.gotItem_4_i = function() {
        var e = new eui.Image;
        return this.gotItem_4 = e,
        e.source = "cassius_super_evo_gotitem_png",
        e.touchEnabled = !1,
        e.x = 11,
        e.y = 49,
        e
    },
    i.evo_i = function() {
        var e = new eui.Image;
        return this.evo = e,
        e.source = "cassius_super_evo_evo_png",
        e.x = 983,
        e.y = 535,
        e
    },
    i.mark_i = function() {
        var e = new eui.Image;
        return this.mark = e,
        e.source = "cassius_super_evo_mark_png",
        e.x = 893,
        e.y = 535,
        e
    },
    i.buyItem_i = function() {
        var e = new eui.Image;
        return this.buyItem = e,
        e.source = "cassius_super_evo_buyitem_png",
        e.x = 804,
        e.y = 535,
        e
    },
    i.sign_i = function() {
        var e = new eui.Image;
        return this.sign = e,
        e.source = "cassius_super_evo_sign_png",
        e.x = 948,
        e.y = 0,
        e
    },
    i.gotEvo_i = function() {
        var e = new eui.Image;
        return this.gotEvo = e,
        e.source = "cassius_super_evo_gotevo_png",
        e.visible = !0,
        e.x = 975,
        e.y = 550,
        e
    },
    i.gotMark_i = function() {
        var e = new eui.Image;
        return this.gotMark = e,
        e.source = "cassius_super_evo_gotevo_png",
        e.visible = !0,
        e.x = 885.912,
        e.y = 550,
        e
    },
    t
} (eui.Skin);