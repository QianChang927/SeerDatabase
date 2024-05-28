var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                _(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, _ = {
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
pveExpTraining; !
function(t) {
    var e = function() {
        function t() {
            this._testData = {
                unlock_cnt: 0,
                quick_mark: 0,
                challenge_cnt: 0,
                all_layer_info: [{
                    linear_cnt: 0,
                    unlock_quick_cnt: 0
                }]
            },
            this.DoubleRewardCostItemID = 1400152,
            this.SweepCostItemID = 1400153,
            this._lastBattleFloor = -1,
            this.DailyBattleLimitCnt = 6,
            this.DailyRewardCnt = 6,
            this.DailyRewardBoxID = 5
        }
        return t.getInstance = function() {
            return this._instance || (t._instance = new t),
            t._instance
        },
        t.prototype.setLastBattleFloor = function(t) {
            this._lastBattleFloor = t
        },
        t.prototype.getLastBattleFloor = function(t) {
            return this._lastBattleFloor
        },
        t.prototype._createAndUpdateFloorData = function(t) {
            var e = t.unlock_cnt,
            i = t.quick_mark;
            this._challengeCnt = t.challenge_cnt;
            var n = t.all_layer_info,
            r = config.PveBossExperienceTraining.getItems();
            if (this._floorList) for (var a = 0; a < this._floorList.length; a++) {
                var o = this._floorList[a],
                s = o.canSweep,
                _ = o.isActivateFlag,
                u = Boolean(BitUtil.getBit(i, a)),
                g = e >= a;
                if (o.canSweep = u, o.flagOpenSweep = u !== s, a > 0) {
                    var h = this._floorList[a - 1];
                    h.flagFirstClearance = g !== _
                }
                o.isActivateFlag = g,
                o.battleBossIndex = a < n.length ? n[a].linear_cnt: 0,
                o.sweepProgress = a < n.length ? n[a].unlock_quick_cnt: 0
            } else {
                this._floorList = [];
                for (var a = 0; a < r.length; a++) {
                    var l = r[a],
                    o = {};
                    o.floor = l.id,
                    o.isActivateFlag = e >= a,
                    o.canSweep = Boolean(BitUtil.getBit(i, a)),
                    o.flagFirstClearance = !1,
                    o.flagOpenSweep = !1,
                    o.battleBossIndex = a < n.length ? n[a].linear_cnt: 0,
                    o.sweepProgress = a < n.length ? n[a].unlock_quick_cnt: 0,
                    this._floorList.push(o)
                }
            }
        },
        t.prototype.setTestData = function(t) {
            this._testData = {
                unlock_cnt: 1,
                quick_mark: 1,
                challenge_cnt: 0,
                all_layer_info: [{
                    linear_cnt: 3,
                    unlock_quick_cnt: 0
                },
                {
                    linear_cnt: 0,
                    unlock_quick_cnt: 0
                }]
            }
        },
        t.prototype.c2s_all_floor_data = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return e = core.constant.ValueType,
                        this._openDoubleFlag = Boolean(t(e.BITBUF, 639)),
                        this._dailyRewarStateFlag = Boolean(t(e.DAILYBITBUF, 1000571)),
                        [4, SocketConnection.sendWithPromise(42397, [116])];
                    case 1:
                        return i = r.sent(),
                        n = this._parseData(i.data),
                        this._createAndUpdateFloorData(n),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        t.prototype._parseData = function(t) {
            for (var e, i = t.readUnsignedInt(), n = t.readUnsignedInt(), r = t.readUnsignedInt(), a = (t.readUnsignedInt(), []); t.readAvailable;) e = {
                linear_cnt: t.readUnsignedInt(),
                unlock_quick_cnt: t.readUnsignedInt()
            },
            a.push(e);
            return {
                unlock_cnt: i,
                quick_mark: n,
                challenge_cnt: r,
                all_layer_info: a
            }
        },
        t.prototype.c2s_reward_daily_box = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, SocketConnection.sendWithPromise(42395, [116, 3, 0, 0]).then(function(e) {
                        t._dailyRewarStateFlag = !0
                    })]
                })
            })
        },
        t.prototype.c2s_sweep = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(i) {
                    return [2, SocketConnection.sendWithPromise(42395, [116, 2, t, 0]).then(function(i) {++e._challengeCnt;
                        var n = e._floorList[t - 1];
                        n.battleBossIndex = 0,
                        e._openDoubleFlag = Boolean(i.data.readUnsignedInt())
                    })]
                })
            })
        },
        t.prototype.c2s_setDoubleItemStatus = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(i) {
                    return [2, SocketConnection.sendWithPromise(42395, [116, 1, Number(t), 0]).then(function(t) {
                        e._openDoubleFlag = !e._openDoubleFlag
                    })]
                })
            })
        },
        t.prototype.c2s_battle_boss = function(t, e) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return egret.lifecycle.stage.touchChildren = !1,
                    egret.setTimeout(function() {
                        egret.lifecycle.stage.touchChildren = !0
                    },
                    this, 1e3),
                    [2, SocketConnection.sendWithPromise(CommandID.FIGHT_H5_PVE_BOSS, [116, t, 1])]
                })
            })
        },
        t.prototype.getFloorData = function(t) {
            return this._floorList[t - 1]
        },
        t.prototype.getAllData = function() {
            return this._floorList
        },
        t.prototype.checkBattleCount = function() {
            var t = this._challengeCnt < this.DailyBattleLimitCnt;
            return t || BubblerManager.getInstance().showText("你今天的训练次数已经用完，请明天再来！"),
            t
        },
        t.prototype.getChallengeCnt = function() {
            return this._challengeCnt
        },
        t.prototype.getDailyRewardState = function() {
            return this._dailyRewarStateFlag ? -1 : this._challengeCnt >= this.DailyRewardCnt ? 1 : 0
        },
        t.prototype.getDoubleItemUseFlag = function() {
            return this._openDoubleFlag
        },
        t.prototype.checkSweepFlag = function() {
            var t = this.checkBattleCount(),
            e = ItemManager.getNumByID(this.SweepCostItemID) > 0;
            return e || BubblerManager.getInstance().showText(ItemXMLInfo.getName(this.SweepCostItemID) + "道具数量不足，无法开启扫荡"),
            t && e
        },
        t.prototype.getBestBattleFloor = function() {
            for (var t = this._floorList.length - 1; t >= 0; t--) if (this._floorList[t].isActivateFlag) return this._floorList[t].floor;
            return 1
        },
        t
    } ();
    t.DataManger = e,
    __reflect(e.prototype, "pveExpTraining.DataManger")
} (pveExpTraining || (pveExpTraining = {}));
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
pveExpTraining; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "PveExpBossItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.setInfo = function(t, e, i) {
            this.txtName.text = PetXMLInfo.getName(t),
            this.imgIcon.source = ClientConfig.getPetHeadPath(t)
        },
        e
    } (eui.Component);
    t.BossItem = e,
    __reflect(e.prototype, "pveExpTraining.BossItem")
} (pveExpTraining || (pveExpTraining = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
pveExpTraining; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "studytraining.MainPanel",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "pveExpTraining.PanelConst");
    var i = function() {
        function t() {}
        return t.BOSS_POSITION_3 = [291, 95, 463, 220, 632, 150],
        t.BOSS_POSITION_4 = [291, 222, 463, 95, 632, 223, 805, 155],
        t.BOSS_POSITION_5 = [291, 95, 463, 220, 632, 93, 807, 223, 980, 150],
        t.BOSS_POSITION_6 = [291, 100, 425, 226, 555, 100, 688, 226, 821, 100, 978, 153],
        t
    } ();
    t.PositionConst = i,
    __reflect(i.prototype, "pveExpTraining.PositionConst");
    var n = function() {
        function t() {}
        return t
    } ();
    t.ValueConst = n,
    __reflect(n.prototype, "pveExpTraining.ValueConst")
} (pveExpTraining || (pveExpTraining = {}));
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
pveExpTraining; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "PveExpLevelMenuItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            var t;
            t = this.data.index < 10 ? "00" + this.data.index: this.data.index < 100 ? "0" + this.data.index: "" + this.data.index,
            this.txtNumLevel.text = t,
            this.imgLock.visible = 0 == this.data.state,
            this.imgUnlock.visible = 0 != this.data.state,
            this.imgIsFighting.visible = 1 == this.data.state,
            this.imgDefeated.visible = 2 == this.data.state,
            this.imgFastFight.visible = 3 == this.data.state;
            var e = 0 == this.data.state ? 8757203 : 4187130;
            this.txtLevel.textColor = this.txtNumLevel.textColor = e,
            this.touchEnabled = this.touchChildren = 0 != this.data.state
        },
        e
    } (eui.ItemRenderer);
    t.LevelMenuItem = e,
    __reflect(e.prototype, "pveExpTraining.LevelMenuItem")
} (pveExpTraining || (pveExpTraining = {}));
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
pveExpTraining; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "PveExpTrainingNewSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            this.imgItem1.source = ClientConfig.getItemIcon(1400152),
            this.imgItem2.source = ClientConfig.getItemIcon(1400153),
            this.imgItem0.source = ClientConfig.getItemIcon(2500005),
            e.prototype.initBtnClose.call(this, "pve_exp_training_imgtitle_png", this),
            this.initBtnHelpById(94),
            this.scroller.left = DeviceInfoManager.adapterOffSetX,
            this.adaptRightContent(this.rightGroup),
            t.DataManger.getInstance().c2s_all_floor_data(this.getMultivalue.bind(this)).then(function() {
                egret.setTimeout(function() {
                    i.initData(),
                    i.updateData()
                },
                i, 0)
            })
        },
        i.prototype.initData = function() {
            this.addEvent(),
            this.initConfig(),
            this.initLevelMenu()
        },
        i.prototype.addEvent = function() {
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
            this.levelMenu.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.listItemTap, this),
            ImageButtonUtil.add(this.btnFight1, this.fight, this),
            ImageButtonUtil.add(this.btnFight2, this.fight, this),
            ImageButtonUtil.add(this.btnFastFight, this.fastFight, this),
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!e.isSwitchOn) {
                    if (ItemManager.getNumByID(1400152) <= 0) return void BubblerManager.getInstance().showText("您的激励模组数量不足！");
                    t.DataManger.getInstance().c2s_setDoubleItemStatus(!0).then(function() {
                        e.imgSwitchOn.visible = !0,
                        e.imgSwitchOff.visible = !1,
                        e.isSwitchOn = !0,
                        BubblerManager.getInstance().showText("激励模组已开启")
                    })
                }
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgSwitchOn,
            function() {
                e.isSwitchOn && t.DataManger.getInstance().c2s_setDoubleItemStatus(!1).then(function() {
                    e.imgSwitchOn.visible = !1,
                    e.imgSwitchOff.visible = !0,
                    e.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgItem1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400153
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem0,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2500005
                })
            },
            this)
        },
        i.prototype.listItemTap = function() {
            var t = this.levelMenu.selectedItem.index;
            this.levelMenu.selectedIndex = t - 1,
            this.levelinfo = this.levelData[t - 1],
            this.curFloor = t,
            this.updateRightView(),
            this.updateData()
        },
        i.prototype._checkShowAlarm = function(e) {
            var i = t.DataManger.getInstance().getFloorData(this.curFloor);
            0 == i.battleBossIndex && e && BubblerManager.getInstance().showText("已通关经验训练场第" + this.curFloor + "层"),
            i.flagFirstClearance && (Alarm.show("你解锁了下一层的挑战！"), BubblerManager.getInstance().showText("已通关经验训练场第" + this.curFloor + "层"), i.flagFirstClearance = !1),
            i.flagOpenSweep && (Alarm.show("恭喜你开启" + this.curFloor + "层的扫荡功能，之后可以直接扫荡获得奖励！"), i.flagOpenSweep = !1)
        },
        i.prototype.fightOverInfo = function() {
            var e = this;
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.fightOverInfo, this),
            t.DataManger.getInstance().c2s_all_floor_data(this.getMultivalue.bind(this)).then(function() {
                e._checkShowAlarm(FightManager.isWin),
                e.initLevelMenu(e.levelMenu.selectedIndex),
                e.updateData()
            })
        },
        i.prototype.fight = function() {
            if (t.DataManger.getInstance().checkBattleCount()) {
                EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.fightOverInfo, this),
                t.DataManger.getInstance().c2s_battle_boss(this.curFloor, this.curBoss + 1)
            }
        },
        i.prototype.fastFight = function() {
            var e = this;
            ItemManager.getNumByID(1400153) > 0 || ItemManager.getNumByID(2500005) > 0 ? t.DataManger.getInstance().checkBattleCount() ? t.DataManger.getInstance().c2s_sweep(this.curFloor).then(function() {
                t.DataManger.getInstance().c2s_all_floor_data(e.getMultivalue.bind(e)).then(function() {
                    e.updateRightView(),
                    e.updateData()
                })
            }) : BubblerManager.getInstance().showText("您的对战次数不足") : Alarm.show("道具数量不足！")
        },
        i.prototype.initConfig = function() {
            this.levelData = t.DataManger.getInstance().getAllData(),
            this.levelMenu.itemRenderer = t.LevelMenuItem
        },
        i.prototype.initLevelMenu = function(e) {
            this.isSwitchOn = t.DataManger.getInstance().getDoubleItemUseFlag(),
            this.imgSwitchOff.visible = !t.DataManger.getInstance().getDoubleItemUseFlag(),
            this.imgSwitchOn.visible = t.DataManger.getInstance().getDoubleItemUseFlag();
            for (var i = [], n = this.levelData.length, r = 0; n > r; r++) {
                var a = {};
                a.index = r + 1,
                a.index < t.DataManger.getInstance().getBestBattleFloor() ? a.state = 2 : a.index == t.DataManger.getInstance().getBestBattleFloor() ? a.state = 1 : a.state = 0,
                this.levelData[r].canSweep && (2 == a.state || 6 == a.index ? a.state = 3 : console.error("已战胜状态与可扫荡状态冲突，当前obj.state=" + a.state)),
                i[r] = a
            }
            this.levelMenu.dataProvider = new eui.ArrayCollection(i),
            null == e ? (this.curFloor = t.DataManger.getInstance().getBestBattleFloor(), this.levelMenu.selectedIndex = this.curFloor - 1, this.updateRightView()) : (this.curFloor = this.levelMenu.selectedItem.index, this.levelMenu.selectedIndex = e, this.updateRightView(e + 1))
        },
        i.prototype.updateRightView = function(e) {
            var i = null == e ? config.PveBossExperienceTraining.getItem(this.curFloor) : config.PveBossExperienceTraining.getItem(e),
            n = this.levelMenu.selectedItem.index;
            this.levelinfo = this.levelData[n - 1],
            this.curBoss = this.levelinfo.battleBossIndex;
            for (var r, a = 0,
            o = this.levelData; a < o.length; a++) {
                var s = o[a];
                if (s.floor == n) {
                    r = s;
                    break
                }
            }
            r || console.error("curData not found");
            var _;
            _ = 10 > n ? "00" + n: 100 > n ? "0" + n: "" + n,
            this.txtLevel.text = _ + "层";
            for (var u = i.rewardid.split("_"), g = i.rewardnum.split("_"), h = u.length, l = 0; 3 > l; l++) this["imgRewardItem" + (l + 1)].visible = !1,
            this["imgRewardItemBG" + (l + 1)].visible = !1,
            this["txtRewardItem" + (l + 1)].visible = !1,
            ImageButtonUtil.remove(this["imgRewardItem" + (l + 1)]);
            for (var c = function(t) {
                m["imgRewardItem" + (t + 1)].visible = !0,
                m["imgRewardItemBG" + (t + 1)].visible = !0,
                m["txtRewardItem" + (t + 1)].visible = !0,
                m["imgRewardItem" + (t + 1)].source = ClientConfig.getItemIcon(u[t]),
                m["txtRewardItem" + (t + 1)].text = g[t],
                ImageButtonUtil.add(m["imgRewardItem" + (t + 1)],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: +u[t]
                    })
                },
                m)
            },
            m = this, l = 0; h > l; l++) c(l);
            this.txtContent1.text = i.raidunlocktext,
            this.txtContent2.text = "首次战胜该层所有精灵，即可解锁下一层挑战";
            for (var p = i.bosslist.split("_"), l = 3; 6 >= l; l++) this["imgLine" + l].visible = l == p.length;
            var f = t.PositionConst["BOSS_POSITION_" + p.length],
            v = p[p.length - 1];
            this.groupMonster.removeChildren();
            var x = 0,
            d = !1;
            for (var I in p) {
                var w = p[I],
                b = new t.BossItem,
                y = void 0;
                y = +I < this.curBoss ? 2 : +I == this.curBoss ? 1 : 0;
                var B = +w == +v;
                B && (d = !0),
                b.setInfo( + w, d, y),
                b.x = f[x++],
                b.y = f[x++],
                this.groupMonster.addChild(b)
            }
            var C = 3 == this.levelMenu.selectedItem.state;
            this.btnFight1.visible = !C,
            this.btnFight2.visible = C,
            this.btnFastFight.visible = C
        },
        i.prototype.updateData = function() {
            var e = this;
            this.txtNumItem1.text = ItemManager.getNumByID(1400152).toString(),
            this.txtNumItem2.text = ItemManager.getNumByID(1400153).toString(),
            this.txtNumItem0.text = ItemManager.getNumByID(2500005).toString();
            var i = t.DataManger.getInstance().getChallengeCnt();
            this.txtNumBox.text = i + "/6";
            var n = "open";
            1 == t.DataManger.getInstance().getDailyRewardState() && 6 == i && (n = "canopen"),
            this._boxEffect && this._boxEffect.parent && this._boxEffect.parent.removeChild(this._boxEffect),
            this._boxEffect = core.manager.MovieClipManager.getInstance().getMovieClip("box", "green", n),
            this._boxEffect.touchEnabled = !0,
            this._boxEffect.scaleX = .4,
            this._boxEffect.scaleY = .4,
            this.imgBox.visible = !1,
            this.imgBox.parent.addChild(this._boxEffect),
            this._boxEffect.x = this.imgBox.x,
            this._boxEffect.y = this.imgBox.y,
            "open" == n ? this._boxEffect.gotoAndStop( - 1 == t.DataManger.getInstance().getDailyRewardState() ? this._boxEffect.totalFrames: 0) : this._boxEffect.gotoAndPlay(0, -1),
            ImageButtonUtil.remove(this._boxEffect),
            "canopen" == n ? ImageButtonUtil.add(this._boxEffect,
            function() {
                t.DataManger.getInstance().c2s_reward_daily_box().then(function() {
                    e.updateData()
                })
            },
            this) : ImageButtonUtil.add(this._boxEffect,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2300005
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.levelMenu.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.listItemTap, this)
        },
        i
    } (BaseModule);
    t.PveExpTraining = e,
    __reflect(e.prototype, "pveExpTraining.PveExpTraining")
} (pveExpTraining || (pveExpTraining = {})),
window.pveExpTraining = window.pveExpTraining || {};
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
generateEUI.paths["resource/eui_skins/item/itemHeadSkin.exml"] = window.pveExpTraining.itemHeadSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "icon_mask", "img_foreground", "lock", "selected_bg", "title_boss", "win", "itemIcon"],
        this.height = 173,
        this.width = 160,
        this.elementsContent = [this.itemIcon_i()],
        eui.Binding.$bindProperties(this, ["icon_mask"], [0], this.icon, "mask")
    }
    __extends(e, t);
    var i = e.prototype;
    return i.itemIcon_i = function() {
        var t = new eui.Group;
        return this.itemIcon = t,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this.img_foreground_i(), this.lock_i(), this.selected_bg_i(), this.title_boss_i(), this.win_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ready_battle_icon_null_png",
        t.x = 12,
        t.y = 12,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 13.5,
        t.y = 17.5,
        t.elementsContent = [this.icon_i(), this.icon_mask_i()],
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 138,
        t.source = "ready_battle_icon_head_png",
        t.width = 138,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_mask_i = function() {
        var t = new eui.Image;
        return this.icon_mask = t,
        t.source = "ready_battle_mask_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_foreground_i = function() {
        var t = new eui.Image;
        return this.img_foreground = t,
        t.source = "ready_battle_waikuag_png",
        t.x = 14.67,
        t.y = 12.68,
        t
    },
    i.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.height = 137,
        t.source = "ready_battle_lock_png",
        t.width = 125,
        t.x = 19,
        t.y = 18,
        t
    },
    i.selected_bg_i = function() {
        var t = new eui.Image;
        return this.selected_bg = t,
        t.height = 173,
        t.source = "ready_battle_selected_bg_png",
        t.width = 158,
        t.x = 2,
        t.y = 0,
        t
    },
    i.title_boss_i = function() {
        var t = new eui.Image;
        return this.title_boss = t,
        t.height = 31,
        t.source = "ready_battle_title_boss_png",
        t.width = 106,
        t.x = 29,
        t.y = 123,
        t
    },
    i.win_i = function() {
        var t = new eui.Image;
        return this.win = t,
        t.height = 59,
        t.source = "ready_battle_win_png",
        t.width = 60,
        t.x = 0,
        t.y = 32,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ItemTabSkin.exml"] = window.pveExpTraining.ItemTabSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["tab_lock_bg", "tab_activate_bg", "icon_sweep", "selected_bg", "bmpTxt_floor", "tab"],
        this.height = 80,
        this.width = 280,
        this.elementsContent = [this.tab_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.tab_i = function() {
        var t = new eui.Group;
        return this.tab = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.tab_lock_bg_i(), this.tab_activate_bg_i(), this.icon_sweep_i(), this.selected_bg_i(), this._Group1_i()],
        t
    },
    i.tab_lock_bg_i = function() {
        var t = new eui.Image;
        return this.tab_lock_bg = t,
        t.height = 63,
        t.source = "pve_exp_training_tab_lock_bg_png",
        t.visible = !1,
        t.width = 263,
        t.x = 10,
        t.y = 7,
        t
    },
    i.tab_activate_bg_i = function() {
        var t = new eui.Image;
        return this.tab_activate_bg = t,
        t.height = 62,
        t.source = "pve_exp_training_tab_activate_bg_png",
        t.width = 262,
        t.x = 9,
        t.y = 9,
        t
    },
    i.icon_sweep_i = function() {
        var t = new eui.Image;
        return this.icon_sweep = t,
        t.height = 60,
        t.source = "pve_exp_training_icon_sweep_png",
        t.touchEnabled = !1,
        t.visible = !1,
        t.width = 60,
        t.x = 210,
        t.y = 10,
        t
    },
    i.selected_bg_i = function() {
        var t = new eui.Image;
        return this.selected_bg = t,
        t.height = 80,
        t.source = "pve_exp_training_selected_bg_png",
        t.touchEnabled = !1,
        t.width = 280,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 38,
        t.width = 158,
        t.x = 59,
        t.y = 21,
        t.elementsContent = [this.bmpTxt_floor_i()],
        t
    },
    i.bmpTxt_floor_i = function() {
        var t = new eui.BitmapLabel;
        return this.bmpTxt_floor = t,
        t.font = "FontStylePve1_fnt",
        t.horizontalCenter = 0,
        t.letterSpacing = -8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.text = "第1层",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveExpBossItemSkin.exml"] = window.PveExpBossItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "imgSelected", "imgIcon", "imgBoss", "imgDefeated", "imgLocked"],
        this.currentState = "up",
        this.elementsContent = [this._Image1_i(), this.txtName_i(), this.imgSelected_i(), this.imgIcon_i(), this.imgBoss_i(), this.imgDefeated_i(), this.imgLocked_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pve_exp_training_boss_item_imgbg_png",
        t.visible = !0,
        t.x = -3,
        t.y = -3,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字精灵名",
        t.textAlign = "center",
        t.textColor = 3787242,
        t.width = 112,
        t.x = -6,
        t.y = 108,
        t
    },
    i.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.source = "pve_exp_training_boss_item_imgselected_png",
        t.visible = !1,
        t.x = -10,
        t.y = -10,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 96,
        t.source = "pve_exp_training_boss_item_imgicon_png",
        t.visible = !0,
        t.width = 96,
        t.x = 2,
        t.y = 2,
        t
    },
    i.imgBoss_i = function() {
        var t = new eui.Image;
        return this.imgBoss = t,
        t.source = "pve_exp_training_boss_item_imgboss_png",
        t.visible = !1,
        t.x = -6,
        t.y = -33,
        t
    },
    i.imgDefeated_i = function() {
        var t = new eui.Image;
        return this.imgDefeated = t,
        t.source = "pve_exp_training_boss_item_imgdefeated_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgLocked_i = function() {
        var t = new eui.Image;
        return this.imgLocked = t,
        t.source = "pve_exp_training_boss_item_imglocked_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveExpLevelMenuItemSkin.exml"] = window.PveExpLevelMenuItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgSelected", "imgLock", "imgUnlock", "imgFastFight", "imgIsFighting", "imgDefeated", "txtNumLevel", "txtLevel"],
        this.currentState = "up",
        this.elementsContent = [this.imgSelected_i(), this.imgLock_i(), this.imgUnlock_i(), this.imgFastFight_i(), this.imgIsFighting_i(), this.imgDefeated_i(), this.txtNumLevel_i(), this.txtLevel_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("imgSelected", "visible", !0), new eui.SetProperty("imgLock", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.source = "pve_exp_training_level_menu_item_imgselected_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgLock_i = function() {
        var t = new eui.Image;
        return this.imgLock = t,
        t.source = "pve_exp_training_level_menu_item_imglock_png",
        t.visible = !1,
        t.x = 9,
        t.y = 10,
        t
    },
    i.imgUnlock_i = function() {
        var t = new eui.Image;
        return this.imgUnlock = t,
        t.source = "pve_exp_training_level_menu_item_imgunlock_png",
        t.visible = !1,
        t.x = 9,
        t.y = 10,
        t
    },
    i.imgFastFight_i = function() {
        var t = new eui.Image;
        return this.imgFastFight = t,
        t.source = "pve_exp_training_level_menu_item_imgfastfight_png",
        t.visible = !1,
        t.x = 184,
        t.y = 29,
        t
    },
    i.imgIsFighting_i = function() {
        var t = new eui.Image;
        return this.imgIsFighting = t,
        t.source = "pve_exp_training_level_menu_item_imgisfighting_png",
        t.visible = !1,
        t.x = 180,
        t.y = 28,
        t
    },
    i.imgDefeated_i = function() {
        var t = new eui.Image;
        return this.imgDefeated = t,
        t.source = "pve_exp_training_level_menu_item_imgdefeated_png",
        t.visible = !1,
        t.x = 181,
        t.y = 28,
        t
    },
    i.txtNumLevel_i = function() {
        var t = new eui.Label;
        return this.txtNumLevel = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "001",
        t.textColor = 4187130,
        t.visible = !0,
        t.x = 34,
        t.y = 30,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "层",
        t.textColor = 8757203,
        t.visible = !0,
        t.x = 87,
        t.y = 29,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveExpTrainingNewSkin.exml"] = window.PveExpTrainingNewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["groupMonster", "txtNumDefeat", "groupNumDefeat", "imgRewardItemBG1", "imgRewardItemBG2", "imgRewardItemBG3", "imgRewardItem1", "imgRewardItem2", "imgRewardItem3", "txtRewardItem1", "txtRewardItem2", "txtRewardItem3", "txtContent2", "txtContent1", "btnFastFight", "btnFight2", "btnFight1", "txtLevel", "btnPet", "btnCure", "imgLine6", "imgLine5", "imgLine4", "imgLine3", "rightGroup", "txtNumItem2", "imgItem2", "txtNumItem0", "imgItem0", "txtNumItem1", "imgItem1", "imgSwitchOff", "imgSwitchOn", "txtNumBox", "imgBox", "levelMenu", "scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.groupMonster_i(), this.rightGroup_i(), this._Group5_i(), this.scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "pve_exp_training_bg_jpg",
        t.top = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pve_exp_training_imglevelmenubg_png",
        t.visible = !0,
        t.x = 16,
        t.y = 56,
        t
    },
    i.groupMonster_i = function() {
        var t = new eui.Group;
        return this.groupMonster = t,
        t.height = 0,
        t.horizontalCenter = -568,
        t.visible = !0,
        t.width = 0,
        t.y = 0,
        t
    },
    i.rightGroup_i = function() {
        var t = new eui.Group;
        return this.rightGroup = t,
        t.cacheAsBitmap = !0,
        t.horizontalCenter = 124,
        t.y = 66,
        t.elementsContent = [this._Image3_i(), this.groupNumDefeat_i(), this.imgRewardItemBG1_i(), this.imgRewardItemBG2_i(), this.imgRewardItemBG3_i(), this.imgRewardItem1_i(), this.imgRewardItem2_i(), this.imgRewardItem3_i(), this.txtRewardItem1_i(), this.txtRewardItem2_i(), this.txtRewardItem3_i(), this.txtContent2_i(), this.txtContent1_i(), this._Image4_i(), this._Image5_i(), this.btnFastFight_i(), this.btnFight2_i(), this.btnFight1_i(), this._Image6_i(), this._Image7_i(), this.txtLevel_i(), this.btnPet_i(), this.btnCure_i(), this.imgLine6_i(), this.imgLine5_i(), this.imgLine4_i(), this.imgLine3_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pve_exp_training_imgrightbg_png",
        t.x = 1,
        t.y = 308,
        t
    },
    i.groupNumDefeat_i = function() {
        var t = new eui.Group;
        return this.groupNumDefeat = t,
        t.visible = !1,
        t.width = 225,
        t.x = 556,
        t.y = 457,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Label1_i(), this.txtNumDefeat_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.horizontalAlign = "center",
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "今日已得学习力：",
        t.textColor = 16580432,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNumDefeat_i = function() {
        var t = new eui.Label;
        return this.txtNumDefeat = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 16580432,
        t.x = 130,
        t.y = 0,
        t
    },
    i.imgRewardItemBG1_i = function() {
        var t = new eui.Image;
        return this.imgRewardItemBG1 = t,
        t.height = 60,
        t.source = "pve_exp_training_rewarditem1_png",
        t.width = 60,
        t.x = 547,
        t.y = 368,
        t
    },
    i.imgRewardItemBG2_i = function() {
        var t = new eui.Image;
        return this.imgRewardItemBG2 = t,
        t.height = 60,
        t.source = "pve_exp_training_rewarditem1_png",
        t.width = 60,
        t.x = 638,
        t.y = 368,
        t
    },
    i.imgRewardItemBG3_i = function() {
        var t = new eui.Image;
        return this.imgRewardItemBG3 = t,
        t.height = 60,
        t.source = "pve_exp_training_rewarditem1_png",
        t.width = 60,
        t.x = 729,
        t.y = 368,
        t
    },
    i.imgRewardItem1_i = function() {
        var t = new eui.Image;
        return this.imgRewardItem1 = t,
        t.height = 50,
        t.width = 50,
        t.x = 552,
        t.y = 373,
        t
    },
    i.imgRewardItem2_i = function() {
        var t = new eui.Image;
        return this.imgRewardItem2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 643,
        t.y = 373,
        t
    },
    i.imgRewardItem3_i = function() {
        var t = new eui.Image;
        return this.imgRewardItem3 = t,
        t.height = 50,
        t.width = 50,
        t.x = 734,
        t.y = 373,
        t
    },
    i.txtRewardItem1_i = function() {
        var t = new eui.Label;
        return this.txtRewardItem1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 552.228,
        t.y = 409.1,
        t
    },
    i.txtRewardItem2_i = function() {
        var t = new eui.Label;
        return this.txtRewardItem2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 642.859,
        t.y = 409.1,
        t
    },
    i.txtRewardItem3_i = function() {
        var t = new eui.Label;
        return this.txtRewardItem3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 734.095,
        t.y = 409.1,
        t
    },
    i.txtContent2_i = function() {
        var t = new eui.Label;
        return this.txtContent2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 9157375,
        t.width = 332,
        t.x = 130,
        t.y = 359,
        t
    },
    i.txtContent1_i = function() {
        var t = new eui.Label;
        return this.txtContent1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 9157375,
        t.width = 332,
        t.x = 130,
        t.y = 466,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pve_exp_training_txttitle1_png",
        t.x = 122,
        t.y = 329,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pve_exp_training_txttitle3_png",
        t.x = 529,
        t.y = 329,
        t
    },
    i.btnFastFight_i = function() {
        var t = new eui.Image;
        return this.btnFastFight = t,
        t.source = "pve_exp_training_btnfastfight_png",
        t.visible = !0,
        t.x = 671,
        t.y = 482,
        t
    },
    i.btnFight2_i = function() {
        var t = new eui.Image;
        return this.btnFight2 = t,
        t.source = "pve_exp_training_btnfight_png",
        t.visible = !0,
        t.x = 528,
        t.y = 482,
        t
    },
    i.btnFight1_i = function() {
        var t = new eui.Image;
        return this.btnFight1 = t,
        t.source = "pve_exp_training_btnfight_png",
        t.visible = !1,
        t.x = 600,
        t.y = 482,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "pve_exp_training_txttitle2_png",
        t.x = 122,
        t.y = 436,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "pve_exp_training_imglevelbg_png",
        t.x = 0,
        t.y = 2,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "REEJI",
        t.italic = !0,
        t.size = 24,
        t.text = "001层",
        t.textColor = 7984483,
        t.width = 100,
        t.x = 23,
        t.y = 0,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "pve_exp_training_btnpet_png",
        t.x = 28,
        t.y = 363,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "pve_exp_training_btncure_png",
        t.x = 28,
        t.y = 443,
        t
    },
    i.imgLine6_i = function() {
        var t = new eui.Image;
        return this.imgLine6 = t,
        t.source = "pve_exp_training_xianlu0_png",
        t.visible = !0,
        t.x = 57,
        t.y = 64,
        t
    },
    i.imgLine5_i = function() {
        var t = new eui.Image;
        return this.imgLine5 = t,
        t.source = "pve_exp_training_xianlu1_png",
        t.visible = !1,
        t.x = 57,
        t.y = 59,
        t
    },
    i.imgLine4_i = function() {
        var t = new eui.Image;
        return this.imgLine4 = t,
        t.source = "pve_exp_training_xianlu2_png",
        t.visible = !1,
        t.x = 53,
        t.y = 60,
        t
    },
    i.imgLine3_i = function() {
        var t = new eui.Image;
        return this.imgLine3 = t,
        t.source = "pve_exp_training_xianlu3_png",
        t.visible = !1,
        t.x = 57,
        t.y = 96,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.right = 21,
        t.y = 12,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 415,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.txtNumItem2_i(), this.imgItem2_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(70, 7, 71, 8),
        t.source = "pve_exp_training_imgitem2bg_png",
        t.width = 99.34,
        t.x = 111.66,
        t.y = 6,
        t
    },
    i.txtNumItem2_i = function() {
        var t = new eui.Label;
        return this.txtNumItem2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 165,
        t.y = 7,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 30,
        t.width = 30,
        t.x = 121,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 303,
        t.elementsContent = [this._Image9_i(), this.txtNumItem0_i(), this.imgItem0_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(70, 7, 71, 8),
        t.source = "pve_exp_training_imgitem2bg_png",
        t.width = 99.34,
        t.x = 111.66,
        t.y = 6,
        t
    },
    i.txtNumItem0_i = function() {
        var t = new eui.Label;
        return this.txtNumItem0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 165,
        t.y = 7,
        t
    },
    i.imgItem0_i = function() {
        var t = new eui.Image;
        return this.imgItem0 = t,
        t.height = 30,
        t.width = 30,
        t.x = 121,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 557,
        t.y = 0,
        t.elementsContent = [this._Image10_i(), this.txtNumItem1_i(), this.imgItem1_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(60, 7, 61, 8),
        t.source = "pve_exp_training_imgitem1bg_png",
        t.width = 100.834,
        t.x = 80.166,
        t.y = 6,
        t
    },
    i.txtNumItem1_i = function() {
        var t = new eui.Label;
        return this.txtNumItem1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 138,
        t.y = 7,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 90,
        t.y = 0,
        t
    },
    i.imgSwitchOff_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOff = t,
        t.source = "pve_exp_training_imgswitchoff_png",
        t.visible = !1,
        t.x = 187,
        t.y = 7,
        t
    },
    i.imgSwitchOn_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOn = t,
        t.source = "pve_exp_training_imgswitchon_png",
        t.visible = !1,
        t.x = 187,
        t.y = 5,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.width = 414,
        t.x = -30,
        t.y = 1,
        t.elementsContent = [this._Image11_i(), this._Label2_i(), this.txtNumBox_i(), this.imgBox_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "pve_exp_training_imgboxbg_png",
        t.x = 39,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "每日肃清任意六层可得",
        t.textColor = 7984483,
        t.x = 126,
        t.y = 5,
        t
    },
    i.txtNumBox_i = function() {
        var t = new eui.Label;
        return this.txtNumBox = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "0/6",
        t.textColor = 7984483,
        t.x = 374,
        t.y = 5,
        t
    },
    i.imgBox_i = function() {
        var t = new eui.Image;
        return this.imgBox = t,
        t.height = 30,
        t.source = "pve_exp_training_imgbox_png",
        t.width = 36,
        t.x = 316,
        t.y = 1,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 555,
        t.width = 240,
        t.x = 20,
        t.y = 55,
        t.viewport = this.levelMenu_i(),
        t
    },
    i.levelMenu_i = function() {
        var t = new eui.List;
        return this.levelMenu = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -15,
        t
    },
    e
} (eui.Skin);