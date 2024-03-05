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
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
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
                a = i[1],
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
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
peakJihadFirstPage; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._isclick = !1,
            t.timeArr = [60, 150, 300, 480, 720, 1080, 1500, 1800],
            t.skinName = PeakJihadLeisureModeSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initBtnClose("peakjihad_leisure_mode_title_png", this),
            e.prototype.initBtnHelp.call(this,
            function() {
                var e = {};
                e.titleSource = RES.getRes("PeakJihad_rule_title_png"),
                e.data = [{
                    tabName: "基本规则",
                    id: 143
                },
                {
                    tabName: "段位规则",
                    id: 144
                },
                {
                    tabName: "排位规则",
                    id: 145
                }],
                tipsPop.TipsPop.openMulitHelpPop(e)
            },
            this),
            this.adaptBgByScale(this.bg),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.breakLineSynchronizedData, this),
            ImageButtonUtil.add(this.ima3, this.match, this, !1),
            ImageButtonUtil.add(this.ima6,
            function() {
                PetManager.updateBagInfo(function() {
                    t.startMatch()
                })
            },
            this, !1),
            ImageButtonUtil.add(this.imaTest,
            function() {
                ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadTrain")
            },
            this, !1),
            ImageButtonUtil.add(this.none,
            function() {
                BubblerManager.getInstance().showText("敬请期待")
            },
            this, !1)
        },
        t.prototype.match = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t = this;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, this.checkReward()];
                    case 1:
                        return (e = i.sent()) ? (KTool.getMultiValue([16625, 100689, 16626],
                        function(e) {
                            if (e[0] > 0 || e[1] > 0) {
                                var i = SystemTimerManager.time;
                                if (e[0] > 0 || e[1] > 0) {
                                    var n = 0;
                                    e[0] > 0 && (n = e[0] + t.timeArr[Math.min(e[2], t.timeArr.length - 1)]),
                                    e[0] > 0 && i > n ? SocketConnection.sendByQueue(42285, [4],
                                    function() {
                                        t.next1()
                                    }) : Alarm.show("由于你在最近的比赛中有中途退出行为，请稍后再试")
                                }
                            } else PetManager.updateBagInfo(function() {
                                PeakJihadController.getFristBagALLPetLvIsFull2() ? t.next1() : Alarm.show("请在出战背包内放入6只满级并且满状态的精灵再来参加巅峰战哦！",
                                function() {
                                    ModuleManager.showModuleByID(10)
                                })
                            })
                        }), [2]) : (Alert.show("请领取竞技模式赛季结算奖励后进行匹配",
                        function() {
                            PeakJihadController.isBird ? Alert.show("您当前未解锁竞技模式，通关巅峰初阶试炼后可解锁，是否需要前往？",
                            function() {
                                ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadTrain", AppDoStyle.HIDEN)
                            }) : ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadSportsMode", AppDoStyle.HIDEN)
                        }), [2])
                    }
                })
            })
        },
        t.prototype.next1 = function() {
            var e = this;
            SocketConnection.sendByQueue(45137, [1, 1],
            function() {
                ModuleManager.showModuleByID(43, {
                    callback: null,
                    thisObj: e,
                    fightMod: 1
                })
            })
        },
        t.prototype.startMatch = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t = this;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return PeakJihadController.getAllBagALLPetLvIsFull() ? [4, this.checkReward()] : (Alert.show("请在出战背包放入至少六只精灵，并保证背包所有精灵为满级满状态再开始对战！",
                        function() {
                            ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                        }), [2]);
                    case 1:
                        return (e = i.sent()) ? this._isclick ? [2] : (this._isclick = !0, KTool.getMultiValue([3307, 16625, 100689, 16626],
                        function(e) {
                            t._curStep = e[0],
                            t._isclick = !1;
                            var i = SystemTimerManager.time;
                            if (e[1] > 0 || e[2] > 0) {
                                var n = 0;
                                e[1] > 0 && (n = e[1] + t.timeArr[Math.min(e[3], t.timeArr.length - 1)]),
                                e[1] > 0 && i > n ? SocketConnection.sendByQueue(42285, [4],
                                function() {
                                    t.next()
                                }) : Alarm.show("由于你在最近的比赛中有中途退出行为，请稍后再试")
                            } else t.next()
                        }), [2]) : (Alert.show("请领取竞技模式赛季结算奖励后进行匹配",
                        function() {
                            PeakJihadController.isBird ? Alert.show("您当前未解锁竞技模式，通关巅峰初阶试炼后可解锁，是否需要前往？",
                            function() {
                                ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadTrain", AppDoStyle.HIDEN)
                            }) : ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadSportsMode", AppDoStyle.HIDEN)
                        }), [2])
                    }
                })
            })
        },
        t.prototype.next = function() {
            var e = this;
            0 == this._curStep && SocketConnection.sendByQueue(45137, [1, 2],
            function(t) {
                ModuleManager.showModuleByID(43, {
                    callback: function() {},
                    thisObj: e,
                    fightMod: 2
                })
            })
        },
        t.prototype.checkReward = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([124799])];
                    case 1:
                        return e = t.sent(),
                        [2, 1 == e[0]]
                    }
                })
            })
        },
        t.prototype.breakLineSynchronizedData = function() {
            var e = this;
            KTool.getMultiValue([3307, 1046],
            function(t) {
                e._curStep = t[0],
                1 == t[0] && 1 == t[1] && (ModuleManager.hideModule("peakJihadMatchWaitModePanel"), ModuleManager.showModuleByID(43, {
                    callback: function() {},
                    thisObj: e,
                    fightMod: 2
                }))
            })
        },
        t
    } (BaseModule);
    e.PeakJihadLeisureMode = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadLeisureMode")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
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
                a = i[1],
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
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
peakJihadFirstPage; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.data = t,
            i.skinName = PeakjihadfirstpageSkin,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            e.prototype.initBtnClose.call(this, "PeakJihadFirstPage_title_png", this),
            e.prototype.initBtnHelp.call(this,
            function() {
                var e = {};
                e.titleSource = RES.getRes("PeakJihad_rule_title_png"),
                e.data = [{
                    tabName: "基本规则",
                    id: 143
                },
                {
                    tabName: "段位规则",
                    id: 144
                },
                {
                    tabName: "排位规则",
                    id: 145
                }],
                tipsPop.TipsPop.openMulitHelpPop(e)
            },
            this),
            this.icon0.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId1),
            this.icon1.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId2),
            this.spine = SpineUtil.createAnimate("dianfengshengzhanbeijing");
            var i = egret.lifecycle.stage.stageWidth,
            n = Math.max(1, i / 1136);
            this.spine.scaleX = this.spine.scaleY = n,
            SpineUtil.play(this.spine, "animation", this.group_ani, null, this, 0),
            this.addEvent(),
            this.updatePanelData(),
            PeakJihadOrderManager.init().then(function() {
                "sport" == t.data && (ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadSportsMode", AppDoStyle.HIDEN), t.data = null)
            })
        },
        t.prototype.reShow = function() {
            this.updatePanelData()
        },
        t.prototype.addEvent = function() {
            ImageButtonUtil.add(this.icon0,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId1,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon1,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId2,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.freeBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn0, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn1, this.onTouchTapImageButton, this, !1),
            ImageButtonUtil.add(this.rankBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.awardBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btnJingjichi,
            function() {
                ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadSportsPool", AppDoStyle.HIDEN)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItemNums, this)
        },
        t.prototype.updateItemNums = function() {
            this.num0.text = String(ItemManager.getNumByID(PeakJihadController.itemId1)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId1),
            this.num1.text = String(ItemManager.getNumByID(PeakJihadController.itemId2)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId2)
        },
        t.prototype.updatePanelData = function() {
            var e = this;
            this.updateItemNums(),
            KTool.getMultiValue([3315],
            function(t) {
                return __awaiter(e, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return this._roomId = t[0],
                            [4, PeakJihadController.updateBird()];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    })
                })
            })
        },
        t.prototype.onTouchTapImageButton = function(e) {
            switch (e.target) {
            case this.btn1:
                StatLogger.log("1023版本系统功能", "巅峰圣战", "点击【6V6模式】按钮"),
                ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadSportsMode", AppDoStyle.HIDEN);
                break;
            case this.freeBtn:
                if (StatLogger.log("1023版本系统功能", "巅峰圣战", "点击【自由模式】按钮"), this._roomId > 0) return ModuleManager.hideModule(this, !0),
                void ModuleManager.showModule("peakJihadFreeWar", [], null, "PeakJihadRoomPanel");
                ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadFreeMode", AppDoStyle.HIDEN);
                break;
            case this.btn0:
                ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadLeisureMode", AppDoStyle.HIDEN);
                break;
            case this.rankBtn:
                ModuleManager.showModule("peakJihadRankPanel", ["peak_jihad_rank_panel"]);
                break;
            case this.awardBtn:
                ModuleManager.showModule("peakJihadShopPanel", ["peak_jihad_shop_panel"])
            }
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.PeakJihadFirstPage = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadFirstPage")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
peakJihadFirstPage; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._isPlanner = !1,
            e.skinName = PeakJihadFreeModeSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initBtnClose("peakjihad_free_mode_title_png", this,
            function() {
                ModuleManager.CloseAll(),
                ModuleManager.showModuleByID(8)
            },
            this),
            this.adaptBgByScale(this.bg),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.sJoinBtn, this.onTouchTapImageButton, this, !1),
            ImageButtonUtil.add(this.cBtn, this.onTouchTapImageButton, this, !1),
            ImageButtonUtil.add(this.dJoinBtn, this.onTouchTapImageButton, this, !1)
        },
        i.prototype.onTouchTapImageButton = function(e) {
            switch (e.target) {
            case this.sJoinBtn:
                SocketConnection.sendByQueue(45139, [1, 3, 0],
                function(e) {
                    var t = e.data;
                    t.position = 0;
                    var i = t.readUnsignedInt();
                    0 != i ? KTool.getOnlineUsersForeverOrDailyVal([i, 100859],
                    function(e) {
                        e > 0 ? Alarm.show("策划活动特别版本未开放！") : (ModuleManager.CloseAll(), ModuleManager.showModule("peakJihadFreeWar", ["peakJihadFreeWar"], null, "PeakJihadRoomPanel", AppDoStyle.DESTROY))
                    }) : Alarm.show("目前没有空闲的房间可加入,请稍后再试！")
                });
                break;
            case this.cBtn:
                this._isPlanner ? Alarm.show("策划活动特别版本未开放！") : (ModuleManager.CloseAll(), ModuleManager.showModule("peakJihadFreeWar", ["peakJihadFreeWar"], null, "PeakJihadCreateARoomPanel", AppDoStyle.DESTROY));
                break;
            case this.dJoinBtn:
                this.onGoBtnClick()
            }
        },
        i.prototype.onGoBtnClick = function() {
            PopViewManager.getInstance().openView(new e.PeakJiHadFreeInputPopView)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.PeakJihadFreeMode = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadFreeMode")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
peakJihadFirstPage; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.achieveId = 0,
            t.skinName = PeakjihadladderAchieveItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.get,
            function() {
                SocketConnection.sendByQueue(41908, [2, t.info.id],
                function() {
                    BubblerManager.getInstance().showText("获得新成就"),
                    EventManager.dispatchEventWith(PeakJihadController.PeakJihadController_GET_ACHIEVE_REWARD)
                })
            },
            this),
            ImageButtonUtil.add(this.icon,
            function() {
                var e = ItemManager.parseItem(t.info.rewardinfo)[0];
                tipsPop.TipsPop.openTitlePop({
                    branchId: e.id,
                    ruleId: e.num
                })
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            var e = 1 == KTool.getBit(PeakJihadController.achieveValue, this.info.id),
            t = !1,
            i = 0;
            switch (this.info.foreverType) {
            case 1:
                i = PeakJihadController.curMaxLevel;
                break;
            case 2:
                i = PeakJihadController.battleTimes;
                break;
            case 3:
                i = PeakJihadController.wins
            }
            t = i >= this.info.value,
            this.currentState = e ? "got": t ? "get": "go",
            this.achieveId = ItemManager.parseItem(this.info.rewardinfo)[0].type,
            this.icon.source = ClientConfig.getAchieveIcon(this.achieveId);
            var n = 1 == this.info.foreverType ? ~~t: i,
            r = 1 == this.info.foreverType ? 1 : this.info.value;
            this.title.text = this.info.title + (" (" + Math.min(n, r) + "/" + r + ")"),
            this.desc.text = this.info.describe
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadLadderAchieveItem = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadLadderAchieveItem")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
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
                a = i[1],
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
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
peakJihadFirstPage; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = PeakjihadladderAchieveRewardSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this),
            EventManager.addEventListener(PeakJihadController.PeakJihadController_GET_ACHIEVE_REWARD,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, PeakJihadController.updateCurLevel()];
                        case 1:
                            return e.sent(),
                            this.updateView(),
                            [2]
                        }
                    })
                })
            },
            this),
            this._list.itemRenderer = e.PeakJihadLadderAchieveItem,
            this.updateView()
        },
        i.prototype.updateView = function() {
            for (var e = config.Pvp_achieve.getItems(), t = [], i = [], n = [], r = 0; r < e.length; r++) {
                var a = 1 == KTool.getBit(PeakJihadController.achieveValue, e[r].id),
                o = 0;
                switch (e[r].foreverType) {
                case 1:
                    o = PeakJihadController.curMaxLevel;
                    break;
                case 2:
                    o = PeakJihadController.battleTimes;
                    break;
                case 3:
                    o = PeakJihadController.wins
                }
                var s = o >= e[r].value;
                a ? n.push(e[r]) : s ? t.push(e[r]) : i.push(e[r])
            }
            var u = t.concat(i, n);
            this._list.dataProvider = new eui.ArrayCollection(u)
        },
        i
    } (PopView);
    e.PeakJihadLadderAchieveReward = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadLadderAchieveReward")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
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
                a = i[1],
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
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
peakJihadFirstPage; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.groupName = "PeakJihadLadderReward_Group",
            t.skinName = PeakjihadladderRewardSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this);
            var n = new MenuData;
            n.root = [1, 2],
            n["default"] = 1,
            n.groupName = this.groupName,
            n.adapter = !1,
            n.data = {
                1 : {
                    title: "段位奖励"
                },
                2 : {
                    title: "赛季奖励"
                }
            },
            this._list.itemRenderer = i,
            PeakJihadController.getLadderRewardState().then(function() {
                t.menu = Menu.createMenu(n, t.rbGrp, 0, !1, 300, 172)
            }),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this._onChangeTab, this),
            EventManager.addEventListener(PeakJihadController.PeakJihadController_GET_LADDER_REWARD,
            function() {
                return __awaiter(t, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, PeakJihadController.getLadderRewardState()];
                        case 1:
                            return e.sent(),
                            this._onChangeTab(),
                            [2]
                        }
                    })
                })
            },
            this)
        },
        t.prototype._onChangeTab = function() {
            this._scroller.stopAnimation(),
            this._scroller.viewport.scrollV = 0;
            var e = ~~this.menu.selectedValue,
            t = config.Pvp_reward.getItems().filter(function(t) {
                return t.group == e
            });
            t = t.sort(function(e, t) {
                return e.type - t.type
            }),
            this._list.dataProvider = new eui.ArrayCollection(t),
            this.desc.text = 1 == e ? "玩家在竞技模式中达到对应段位即可领取奖励": "赛季结算后根据玩家赛季当前段位发送奖励"
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.menu && this.menu.destroy(),
            EventManager.removeAll(this)
        },
        t
    } (PopView);
    e.PeakJihadLadderReward = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadLadderReward");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PeakjihadladderRewardItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = n,
            ImageButtonUtil.add(this.get,
            function() {
                SocketConnection.sendByQueue(41903, [t.info.id, 0],
                function() {
                    EventManager.dispatchEventWith(PeakJihadController.PeakJihadController_GET_LADDER_REWARD)
                })
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        t.prototype.updateView = function() {
            if (this.levelIcon.source = ClientConfig.GetPeakjihadMiniLevelPath(this.info.type + 1), this.level.text = PeakJihadController.RATINGS_NAME[this.info.type], this.currentState = 1 == this.info.group ? "level": "season", 1 == ~~this.info.group) this.setStatus();
            else {
                var e = ItemManager.parseItem(this.info.reward);
                this._list.dataProvider = new eui.ArrayCollection(e)
            }
        },
        t.prototype.setStatus = function() {
            var e = PeakJihadController.ladderRewardState[this.info.type];
            this.get.visible = 1 == e,
            this.go.visible = 0 == e,
            this.got.visible = 2 == e;
            var t = ItemManager.parseItem(this.info.reward);
            t = t.map(function(t) {
                return t.state = e,
                t
            }),
            this._list.dataProvider = new eui.ArrayCollection(t)
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadLadderRewardItem = i,
    __reflect(i.prototype, "peakJihadFirstPage.PeakJihadLadderRewardItem");
    var n = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = RewardItemRenderSKin,
            ImageButtonUtil.add(t.icon,
            function() {
                if (5 != ~~t.info.id) if (9 == t.info.type) {
                    var e = config.Profilephoto.getItem(t.info.id);
                    BubblerManager.getInstance().showText(e.name)
                } else tipsPop.TipsPop.openItemPop({
                    id: ~~t.info.id
                })
            },
            t),
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            if (this.data) {
                if (this.info = this.data, this.num.text = "" + this.info.num, this.mas.visible = 2 == this.info.state, 9 == this.info.type) {
                    var e = config.Profilephoto.getItem(this.info.id);
                    1 === e.type ? this.icon.source = ClientConfig.GetAvatarHead(e.icon) : this.icon.source = ClientConfig.GetAvatarFrame(e.icon)
                } else this.icon.source = ClientConfig.getItemIcon(this.info.id);
                this.cacheAsBitmap = !0
            }
        },
        t
    } (BaseItemRenderer);
    e.RewardItemRender = n,
    __reflect(n.prototype, "peakJihadFirstPage.RewardItemRender");
    var r = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PeakRBitemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.setDesc = function(e) {
            this.txt_desc.text = e,
            this.cacheAsBitmap = !0
        },
        t
    } (eui.RadioButton);
    e.PeakRBitem = r,
    __reflect(r.prototype, "peakJihadFirstPage.PeakRBitem")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
peakJihadFirstPage; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PeakjihadfreeinputpopviewSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this);
            for (var t = 0; 10 > t; t++) this["btn" + t].name = "btn_" + t;
            this.addEvent(),
            this.roomid = ""
        },
        Object.defineProperty(t.prototype, "roomid", {
            get: function() {
                return this._roomid
            },
            set: function(e) {
                this._roomid = e,
                this.id.text = this._roomid,
                "" == this.roomid && (this.id.text = "请输入想要进入的房间号")
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.addEvent = function() {
            ImageButtonUtil.add(this.enterBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.delBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn0, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn1, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn2, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn3, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn4, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn5, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn6, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn7, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn8, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btn9, this.onTouchTapImageButton, this)
        },
        t.prototype.removeEvent = function() {
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.onTouchTapImageButton = function(e) {
            var t = e.currentTarget.name;
            if ( - 1 != t.indexOf("btn_")) {
                var i = Number(t.split("_")[1]);
                if (0 == this.roomid.length && 0 == i || this.roomid.length >= 20) return;
                return void(this.roomid += i.toString())
            }
            switch (e.currentTarget) {
            case this.enterBtn:
                this.onGoBtnClick();
                break;
            case this.delBtn:
                if (0 == this.roomid.length) return;
                this.roomid = this.roomid.substr(0, this.roomid.length - 1)
            }
        },
        t.prototype.onGoBtnClick = function() {
            var e = this;
            if ("" != this.id.text && "请输入想要进入的房间号" != this.id.text) {
                var t = Number(this.id.text),
                i = this;
                SocketConnection.sendByQueue(45136, [1, t],
                function(t) {
                    i.roomid = "";
                    var n = t.data;
                    n.position = 0;
                    var r = n.readUnsignedInt();
                    0 != r ? KTool.getOnlineUsersForeverOrDailyVal([r, 100859],
                    function(t) {
                        t > 0 ? Alarm.show("策划活动特别版本未开放！") : (e.hide(), ModuleManager.hideModule("peakJihadFirstPage"), ModuleManager.showModule("peakJihadFreeWar", ["peakJihadFreeWar"], null, "PeakJihadRoomPanel"))
                    }) : Alarm.show("输入的房间不存在或者已经被其他伙伴加入了，你可以继续尝试或者换个房间加入！")
                })
            }
        },
        t.prototype.destroy = function() {
            this.removeEvent(),
            e.prototype.destroy.call(this)
        },
        t
    } (PopView);
    e.PeakJiHadFreeInputPopView = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJiHadFreeInputPopView")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
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
                a = i[1],
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
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
peakJihadFirstPage; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._isclick = !1,
            e.timeArr = [60, 150, 300, 480, 720, 1080, 1500, 1800],
            e.skinName = PeakjihadSportsModeSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.initBtnClose("peakjihad_sports_mode_title_png", this),
            t.prototype.initBtnHelp.call(this,
            function() {
                var e = {};
                e.titleSource = RES.getRes("PeakJihad_rule_title_png"),
                e.data = [{
                    tabName: "基本规则",
                    id: 143
                },
                {
                    tabName: "段位规则",
                    id: 144
                },
                {
                    tabName: "排位规则",
                    id: 145
                }],
                tipsPop.TipsPop.openMulitHelpPop(e)
            },
            this);
            var n = egret.lifecycle.stage.stageWidth / 1136;
            this.bgGroup0.scaleX = this.bgGroup0.scaleY = .6 * n,
            this.icon0.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId1),
            this.icon1.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId2),
            this.adaptBgByScale(this.bg),
            this.leftGroup.left = Math.max(DeviceInfoManager.adapterOffSetX, 11),
            this.rightGroup.right = DeviceInfoManager.adapterOffSetX,
            this.spine = SpineUtil.createAnimate("2023_zjcx_spine"),
            SpineUtil.play(this.spine, "2023ani_cangxing", this.bgGroup, null, this, 0),
            this.spine1 = SpineUtil.createAnimate("2023_zjcx_spinebg"),
            SpineUtil.play(this.spine1, "2023ani_cangxing", this.bgGroup0, null, this, 0),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItemNums, this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.breaklineSynchronizedData, this),
            EventManager.addEventListener(PeakJihadController.PeakJihadController_GET_LADDER_REWARD, this.updateDot, this),
            this._list.itemRenderer = e.PeakjihadSportsModePet,
            this.updateItemNums(),
            ImageButtonUtil.add(this.icon0,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId1,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon1,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId2,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.task,
            function() {
                ModuleManager.showModuleByID(211, {
                    type: 2
                },
                AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnJiangli,
            function() {
                ModuleManager.showModuleByID(211, {
                    type: 1
                },
                AppDoStyle.HIDEN)
            },
            this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.touchPet, this),
            ImageButtonUtil.add(this.suit,
            function() {
                ModuleManager.showModuleByID(27)
            },
            this),
            ImageButtonUtil.add(this.reward,
            function() {
                PopViewManager.getInstance().openView(new e.PeakJihadLadderReward, null)
            },
            this),
            ImageButtonUtil.add(this.btnMatch,
            function() {
                PeakJihadController.isBird ? Alert.show("您当前未解锁竞技模式，通关巅峰初阶试炼后可解锁，是否需要前往？",
                function() {
                    ModuleManager.showModule("peakJihadFirstPage", [], null, "PeakJihadTrain", AppDoStyle.HIDEN)
                }) : PetManager.updateBagInfo(function() {
                    i.startMatch()
                })
            },
            this),
            ImageButtonUtil.add(this.achieve,
            function() {
                PopViewManager.getInstance().openView(new e.PeakJihadLadderAchieveReward)
            },
            this),
            KTool.getMultiValue([124799],
            function(e) {
                i.update();
                var t = e[0];
                if (0 == t) {
                    var n = config.Pvp_reward.getItems().filter(function(e) {
                        return 2 == e.group && e.type == PeakJihadController.curLevel
                    })[0];
                    SocketConnection.sendByQueue(41903, [n.id, 0], i.update)
                }
            })
        },
        i.prototype.reShow = function() {
            this.update()
        },
        i.prototype.update = function() {
            var e = this;
            PeakJihadController.updateCurLevel().then(function() {
                var t = config.Pass_reward.getItem(Math.min(PeakJihadOrderManager.orderLevel, PeakJihadOrderManager.maxLevel));
                e.bar.maximum = Math.max(t.exp, 1),
                e.level.text = PeakJihadController.getTitleByLevelScore(),
                e.icon.source = ClientConfig.getPeakjihadLevelPath(PeakJihadController.curLevel + 1),
                e.curLevel.text = "" + PeakJihadOrderManager.orderLevel,
                e.curExp.text = t.exp > 0 ? PeakJihadOrderManager.orderExp + "/" + t.exp: "已满级",
                e.bar.value = t.exp > 0 ? PeakJihadOrderManager.orderExp: 1;
                var i = PeakJihadController.isInAcTime(!1);
                e.btnMatch.visible = i,
                e.cant.visible = !i,
                e.updateDot();
                var n = PetManager.getBagMap(),
                r = [0, 0, 0, 0, 0, 0].map(function(e, t) {
                    return n[t] ? e[t] = n[t].id: 0
                });
                n = PetManager.getSecondBagMap();
                var a = [0, 0, 0, 0, 0, 0].map(function(e, t) {
                    return n[t] ? e[t] = n[t].id: 0
                }),
                o = r.concat(a),
                s = config.Pvp_ban.getItems(),
                u = s[0].name.split(";").map(Number),
                h = s[1].name.split(";").map(Number),
                l = [];
                if (o.map(function(e) {
                    var t = 0;
                    return u.indexOf(e) > -1 ? t = s[0].quantity: h.indexOf(e) > -1 && (t = s[1].quantity),
                    l.push({
                        id: e,
                        quality: t
                    })
                }), e._list.dataProvider = new eui.ArrayCollection(l), !i) {
                    var c = SystemTimerManager.sysBJDate.getTime(),
                    _ = Math.floor((SystemTimerManager.sysBJDate.setHours(11, 0, 0) - c) / 1e3),
                    d = Math.floor((SystemTimerManager.sysBJDate.setHours(18, 0, 0) - c) / 1e3),
                    p = _ > 0 ? _: d;
                    0 > d && 0 > _ && (p = Math.floor((SystemTimerManager.sysBJDate.setHours(11, 0, 0) - c) / 1e3 + 86400)),
                    e.time.text = TimeUtil.countDownFormat(p, "hh:mm:ss"),
                    TimeDelayUtils.setInterval(function() {
                        p--,
                        e.time.text = TimeUtil.countDownFormat(p, "hh:mm:ss"),
                        0 >= p && (TimeDelayUtils.clearAllTimeByThisObj(e), e.update())
                    },
                    1e3, e)
                }
            })
        },
        i.prototype.startMatch = function() {
            var e = this;
            if (PeakJihadController.isInAcTime()) {
                var t = PeakJihadController.getBagALLPetLvIsFullAndNotSame();
                if (!t) {
                    var i = this.checkMost(),
                    n = "" == i ? "请在出战背包放入至少六只精灵，并保证背包所有精灵不重复且为满级满状态再开始对战！": i;
                    return void Alert.show(n,
                    function() {
                        ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
                    })
                }
                this._isclick || (this._isclick = !0, KTool.getMultiValue([3307, 16625, 100689, 16626],
                function(t) {
                    e._curStep = t[0],
                    e._isclick = !1;
                    var i = SystemTimerManager.time;
                    if (t[1] > 0 || t[2] > 0) {
                        var n = 0;
                        t[1] > 0 && (n = t[1] + e.timeArr[Math.min(t[3], e.timeArr.length - 1)]),
                        t[1] > 0 && i > n ? SocketConnection.sendByQueue(42285, [4],
                        function() {
                            e.next()
                        }) : Alarm.show("由于你在最近的比赛中有中途退出行为，请稍后再试")
                    } else e.next()
                }))
            }
        },
        i.prototype.next = function() {
            var e = this;
            0 == this._curStep && SocketConnection.sendByQueue(45137, [1, 3],
            function(t) {
                ModuleManager.showModuleByID(43, {
                    callback: function() {},
                    thisObj: e,
                    fightMod: 3
                })
            })
        },
        i.prototype.breaklineSynchronizedData = function() {
            var e = this;
            KTool.getMultiValue([3307, 1046],
            function(t) {
                e._curStep = t[0],
                1 == t[0] && 1 == t[1] && (ModuleManager.hideModule("peakJihadMatchWaitModePanel"), ModuleManager.showModuleByID(43, {
                    callback: function() {},
                    thisObj: e,
                    fightMod: 3
                }))
            })
        },
        i.prototype.updateItemNums = function() {
            this.num0.text = String(ItemManager.getNumByID(PeakJihadController.itemId1)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId1),
            this.num1.text = String(ItemManager.getNumByID(PeakJihadController.itemId2)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId2)
        },
        i.prototype.checkMost = function() {
            for (var e = [], t = 0, i = PetManager.allInfos; t < i.length; t++) {
                var n = i[t];
                e.push(n.id)
            }
            e.sort();
            for (var r = config.Pvp_ban.getItems(), a = 0, o = 0, s = function(t) {
                if (a > 0) return "break";
                var i = r.filter(function(e) {
                    return e.type == t
                })[0];
                o = i.quantity;
                for (var n = 0,
                s = i.name.split(";").map(Number), u = 0; u < s.length; u++) {
                    var h = s[u];
                    e.indexOf(h) > -1 && n++,
                    n > o && 0 == a && (a = i.type)
                }
            },
            u = 1; 2 >= u; u++) {
                var h = s(u);
                if ("break" === h) break
            }
            return 0 == a ? "": "背包内的" + (1 == a ? "": "准") + "限制级精灵最多只能携带" + o + "只"
        },
        i.prototype.touchPet = function() {
            ModuleManager.showModuleByID(10)
        },
        i.prototype.updateDot = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, r, a, i, o, s;
                return __generator(this,
                function(u) {
                    switch (u.label) {
                    case 0:
                        return [4, PeakJihadController.getLadderRewardState()];
                    case 1:
                        for (u.sent(), e = config.Pvp_achieve.getItems(), t = !1, i = 0; i < e.length; i++) if (1 != KTool.getBit(PeakJihadController.achieveValue, e[i].id)) {
                            switch (n = 0, e[i].foreverType) {
                            case 1:
                                n = PeakJihadController.curMaxLevel;
                                break;
                            case 2:
                                n = PeakJihadController.battleTimes;
                                break;
                            case 3:
                                n = PeakJihadController.wins
                            }
                            if (n >= e[i].value) {
                                t = !0;
                                break
                            }
                        }
                        for (this.dotAchieve.visible = t, r = !1, a = config.Pvp_reward.getItems().filter(function(e) {
                            return 1 == e.group
                        }), i = 0; i < a.length; i++) if (o = a[i], s = PeakJihadController.ladderRewardState[o.type], 1 == s) {
                            r = !0;
                            break
                        }
                        return this.dotReward.visible = r,
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.touchPet, this),
            DisplayUtil.removeForParent(this.spine),
            DisplayUtil.removeForParent(this.spine1),
            this.spine = null,
            this.spine1 = null,
            ModuleManager.hasmodule("peakJihadFirstPage.PeakJihadFirstPage") || ModuleManager.showModuleByID(8)
        },
        i
    } (BaseModule);
    e.PeakJihadSportsMode = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadSportsMode")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
peakJihadFirstPage; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PeakjihadSportsModePetSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.update())
        },
        t.prototype.update = function() {
            this.petId = this.info.id,
            this.numGroup.visible = this.info.quality > 0;
            var e = this.info.quality;
            this.num.text = e + "",
            this.txt_id.text = this.petId + "",
            this.txt_id.visible = window.DEBUG,
            this.head.source = this.petId > 0 ? ClientConfig.getPetHeadPath(this.petId) : "",
            this.imgAttr.source = this.petId > 0 ? ClientConfig.getpettypeticon(PetXMLInfo.getType(this.petId)) : "",
            this.currentState = this.petId > 0 ? "have": "no"
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.PeakjihadSportsModePet = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakjihadSportsModePet")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
peakJihadFirstPage; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.groupName = "PeakJihadSportsPool_groupName",
            t.skinName = PeakJihadSportsPoolSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initBtnClose("peakjihad_sports_mode_title_png", this),
            this.initBtnHelpById(146),
            this.adaptBgByScale(this.bg),
            this._list.itemRenderer = i,
            this.icon0.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId1),
            this.icon1.source = ItemXMLInfo.getIconURL(PeakJihadController.itemId2),
            ImageButtonUtil.add(this.icon0,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId1,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon1,
            function() {
                var e = {};
                e.id = PeakJihadController.itemId2,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateItemNums, this),
            this.updateItemNums();
            var n = new MenuData;
            n["default"] = 1,
            n.groupName = this.groupName,
            n.root = [1, 2],
            n.data = {
                1 : {
                    title: "限制池"
                },
                2 : {
                    title: "准限制池"
                }
            },
            this.menu = Menu.createMenu(n, this.menuGroup),
            this._scroller.right = DeviceInfoManager.adapterOffSetX || 33,
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.updateView, this),
            this.once(egret.Event.RENDER,
            function() {
                t._scroller.left = t.menuGroup.width + 20
            },
            this)
        },
        t.prototype.updateView = function() {
            for (var e = ~~this.menu.selectedValue,
            t = config.Pvp_ban.getItems().filter(function(t) {
                return t.type == e
            }), i = t[0].name.split(";").map(Number), n = [], r = 0; r < i.length; r++) n.push({
                id: i[r],
                quality: t[0].quantity
            });
            this._list.dataProvider = new eui.ArrayCollection(n)
        },
        t.prototype.updateItemNums = function() {
            this.num0.text = String(ItemManager.getNumByID(PeakJihadController.itemId1)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId1),
            this.num1.text = String(ItemManager.getNumByID(PeakJihadController.itemId2)) + "/" + ItemXMLInfo.getMaxNum(PeakJihadController.itemId2)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.menu && this.menu.destroy()
        },
        t
    } (BaseModule);
    e.PeakJihadSportsPool = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadSportsPool");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = PeakJihadSportsPoolItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.head,
            function() {
                PetManager.showPetManualInfo(t.petId, 1)
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.update())
        },
        t.prototype.update = function() {
            this.petId = this.info.id;
            var e = this.info.quality;
            this.num.text = e + "",
            this.txt_id.text = this.petId + "",
            this.txt_id.visible = window.DEBUG;
            var t = PetXMLInfo.getName(this.petId);
            this.txtName.text = t.length > 6 ? t.substring(0, 5) + "...": t,
            this.head.source = ClientConfig.getPetHeadPath(this.petId),
            this.imgAttr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this.petId)),
            this.rec.visible = !PetManager.hasPet(this.petId),
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (BaseItemRenderer);
    e.PeakJihadSportsPoolItem = i,
    __reflect(i.prototype, "peakJihadFirstPage.PeakJihadSportsPoolItem")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
peakJihadFirstPage; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.need = !0,
            e.groupName = "PeakJihadTrain_groupName",
            e.skinName = PeakJihadTrainSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initBtnClose("peakjihadfirstpage_train_title1_png", this),
            this.adaptBgByScale(this.bg),
            this._scr.left = 161 + DeviceInfoManager.adapterOffSetX,
            this.adaptRightContent(this._scr),
            this.need = !0,
            this._list.itemRenderer = e.PeakJihadTrainItem;
            var i = new MenuData;
            i["default"] = 1,
            i.groupName = this.groupName,
            i.root = [1],
            i.data = {
                1 : {
                    title: "初级试炼"
                },
                2 : {
                    title: "中级试炼"
                },
                3 : {
                    title: "高级试炼"
                }
            },
            this.menu = Menu.createMenu(i, this.menuGroup),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.updateView, this)
        },
        i.prototype.updateTab = function() {
            var e = this,
            t = ~~this.menu.selectedValue,
            i = config.Pvp_StageConfig.filter(function(e) {
                return e.index == t
            });
            if (i.length > 0) {
                var n = 203890 + t;
                KTool.getMultiValue([i[0].UserInfoID, n],
                function(t) {
                    i.sort(function(e, i) {
                        return~~ (t[0] >= e.order) - ~~ (t[0] >= i.order)
                    }),
                    PeakJihadController.curBirdValue = t[0],
                    PeakJihadController.curBirdTimes = t[1],
                    e._list.dataProvider = new eui.ArrayCollection(i),
                    e.need && e.once(egret.Event.RENDER,
                    function() {
                        gsap.killTweensOf(e._list.$children),
                        DisplayUtil.setScrollerItemIncludeInLayout(e._scr, !1),
                        gsap.from(e._list.$children, {
                            x: e._scr.width + 350,
                            alpha: 0,
                            stagger: .1
                        }).then(function() {
                            DisplayUtil.setScrollerItemIncludeInLayout(e._scr, !0)
                        })
                    },
                    e),
                    e.need = !0
                })
            } else this._list.dataProvider = new eui.ArrayCollection([])
        },
        i.prototype.updateView = function() {
            gsap.killTweensOf(this._list.$children),
            DisplayUtil.setScrollerItemIncludeInLayout(this._scr, !0),
            this._scr.stopAnimation(),
            this._scr.viewport.scrollH = 0,
            this.updateTab()
        },
        i.prototype.reShow = function() {
            this.need = !1,
            this.updateView()
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.menu && this.menu.destroy(),
            gsap.killTweensOf(this._scr.$children)
        },
        i
    } (BaseModule);
    e.PeakJihadTrain = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadTrain")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
peakJihadFirstPage; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return t && (i.info = t),
            i.skinName = PeakJihadTrainFightPopSkin,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.start,
            function() {
                t.startFight(),
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.close, this.hide, this),
            this.updateView()
        },
        t.prototype.updateView = function() {
            this.title.text = "试炼等级" + this.info.index + "-" + this.info.order,
            this.desc.text = this.info.monsterName,
            this.tip.text = this.info.bossIntro;
            var e = ItemManager.parseItem(this.info.firstReward)[0];
            this.icon.source = ClientConfig.getItemIcon(e.id),
            this.num.text = "*" + e.num
        },
        t.prototype.startFight = function() {
            var e = this,
            t = this.info.fightMonsterIndexs.split("_").map(Number);
            if (0 == t.length) return void BubblerManager.getInstance().showText("请至少选择1只出战精灵！");
            var i = this.info.id;
            SocketConnection.sendByQueue(41907, [this.info.index, i, t.length, t],
            function() {
                e.hide()
            },
            function(e) {
                console.log(e)
            })
        },
        t
    } (PopView);
    e.PeakJihadTrainFightPop = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadTrainFightPop")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
peakJihadFirstPage; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = PeakJihadTrainItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.touchGroup,
            function() {
                return PeakJihadController.curBirdTimes >= 20 ? void BubblerManager.getInstance().showText("当前试炼每日挑战次数已用完") : void(PeakJihadController.curBirdValue + 1 < i.info.order ? BubblerManager.getInstance().showText("请先完成试炼等级" + i.info.index + "-" + (PeakJihadController.curBirdValue + 1)) : PopViewManager.getInstance().openView(new e.PeakJihadTrainFightPop(KTool.clone(i.info))))
            },
            this, !1)
        },
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        i.prototype.updateView = function() {
            var e = this.info.index,
            t = PeakJihadController.curBirdValue >= this.info.order;
            this.pet.source = "resource/assets/peakJihad/pet/" + this.info.monsterId + ".png",
            this.done.visible = t,
            this.touchGroup.touchEnabled = !t,
            this.not.visible = PeakJihadController.curBirdValue + 1 < this.info.order,
            this.desc.text = this.info.monsterName,
            this.level.text = "试炼等级" + e + "-" + this.info.order,
            this.levelName.source = "peakjihadfirstpage_train_levelname" + e + "_png"
        },
        i
    } (BaseItemRenderer);
    e.PeakJihadTrainItem = t,
    __reflect(t.prototype, "peakJihadFirstPage.PeakJihadTrainItem")
} (peakJihadFirstPage || (peakJihadFirstPage = {}));
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
generateEUI.paths["resource/eui_skins/PeakjihadfirstpageSkin.exml"] = window.PeakjihadfirstpageSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["static_bg", "group_ani", "bg", "bg2", "noticeTxt", "group_guanggao", "freeBtn", "btn0", "btn1", "rankBtn", "awardBtn", "btnJingjichi", "icon0", "num0", "icon1", "num1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.static_bg_i(), this.group_ani_i(), this.group_guanggao_i(), this._Group1_i(), this._Group4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.static_bg_i = function() {
        var e = new eui.Image;
        return this.static_bg = e,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "PeakJihadStatic_bg_jpg",
        e.verticalCenter = 0,
        e.visible = !1,
        e
    },
    i.group_ani_i = function() {
        var e = new eui.Group;
        return this.group_ani = e,
        e.height = 0,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 0,
        e
    },
    i.group_guanggao_i = function() {
        var e = new eui.Group;
        return this.group_guanggao = e,
        e.visible = !1,
        e.x = 4,
        e.y = 57,
        e.elementsContent = [this.bg_i(), this.bg2_i(), this.noticeTxt_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "PeakJihadFirstPage_bg_png",
        e.x = 3,
        e.y = 0,
        e
    },
    i.bg2_i = function() {
        var e = new eui.Image;
        return this.bg2 = e,
        e.source = "PeakJihadFirstPage_bg2_png",
        e.x = 0,
        e.y = 1,
        e
    },
    i.noticeTxt_i = function() {
        var e = new eui.Label;
        return this.noticeTxt = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "系统公告：这里是系统公告公告公告公告公告",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 30,
        e.y = 5,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.left = 0,
        e.right = 0,
        e.y = 300,
        e.elementsContent = [this._Image1_i(), this.freeBtn_i(), this.btn0_i(), this.btn1_i(), this.rankBtn_i(), this.awardBtn_i(), this.btnJingjichi_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.height = 340,
        e.horizontalCenter = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(148, 0, 166, 340),
        e.source = "peakjihad_anniubg_png",
        e.width = 1136,
        e
    },
    i.freeBtn_i = function() {
        var e = new eui.Image;
        return this.freeBtn = e,
        e.right = 251,
        e.source = "peakjihad_btnziyou_png",
        e.y = 143.216,
        e
    },
    i.btn0_i = function() {
        var e = new eui.Image;
        return this.btn0 = e,
        e.right = 250,
        e.source = "peakjihad_btnxiuxian_png",
        e.y = 222.216,
        e
    },
    i.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.right = 72,
        e.source = "peakjihad_btnjingji_png",
        e.y = 96.216,
        e
    },
    i.rankBtn_i = function() {
        var e = new eui.Image;
        return this.rankBtn = e,
        e.horizontalCenter = -441,
        e.source = "peakjihad_btnpaihang_png",
        e.y = 259,
        e
    },
    i.awardBtn_i = function() {
        var e = new eui.Image;
        return this.awardBtn = e,
        e.horizontalCenter = -239,
        e.source = "peakjihad_btnjiangli_png",
        e.y = 259,
        e
    },
    i.btnJingjichi_i = function() {
        var e = new eui.Image;
        return this.btnJingjichi = e,
        e.horizontalCenter = -35,
        e.source = "peakjihad_btnjingjichi_png",
        e.y = 259,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.right = 60,
        e.top = 0,
        e.visible = !0,
        e.elementsContent = [this._Group2_i(), this._Group3_i()],
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.right = 168,
        e.y = 12,
        e.elementsContent = [this._Image2_i(), this.icon0_i(), this.num0_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_item_num_bg_png",
        e.x = 0,
        e.y = 3.171,
        e
    },
    i.icon0_i = function() {
        var e = new eui.Image;
        return this.icon0 = e,
        e.height = 55,
        e.left = -1,
        e.scaleX = .7,
        e.scaleY = .7,
        e.source = "PeakJihadFirstPage_icon0_png",
        e.width = 55,
        e.y = -6,
        e
    },
    i.num0_i = function() {
        var e = new eui.Label;
        return this.num0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.right = 7,
        e.y = 12,
        e.elementsContent = [this._Image3_i(), this.icon1_i(), this.num1_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_item_num_bg_png",
        e.x = 0,
        e.y = 2.108,
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.height = 55,
        e.left = -1,
        e.scaleX = .7,
        e.scaleY = .7,
        e.source = "PeakJihadFirstPage_icon1_png",
        e.width = 55,
        e.y = -6,
        e
    },
    i.num1_i = function() {
        var e = new eui.Label;
        return this.num1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadfreeinputpopviewSkin.exml"] = window.PeakjihadfreeinputpopviewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["InputBg", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9", "enterBtn", "btn0", "delBtn", "bg4", "id"],
        this.height = 388,
        this.width = 538,
        this.elementsContent = [this.InputBg_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btn4_i(), this.btn5_i(), this.btn6_i(), this.btn7_i(), this.btn8_i(), this.btn9_i(), this.enterBtn_i(), this.btn0_i(), this.delBtn_i(), this.bg4_i(), this.id_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.InputBg_i = function() {
        var e = new eui.Image;
        return this.InputBg = e,
        e.height = 388,
        e.scale9Grid = new egret.Rectangle(43, 33, 13, 34),
        e.source = "PeakJiHadFreeInputPopView_InputBg_png",
        e.width = 538,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn1_png",
        e.width = 146,
        e.x = 36,
        e.y = 82,
        e
    },
    i.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn2_png",
        e.width = 146,
        e.x = 199,
        e.y = 82,
        e
    },
    i.btn3_i = function() {
        var e = new eui.Image;
        return this.btn3 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn3_png",
        e.width = 146,
        e.x = 361,
        e.y = 82,
        e
    },
    i.btn4_i = function() {
        var e = new eui.Image;
        return this.btn4 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn4_png",
        e.width = 146,
        e.x = 36,
        e.y = 152,
        e
    },
    i.btn5_i = function() {
        var e = new eui.Image;
        return this.btn5 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn5_png",
        e.width = 146,
        e.x = 199,
        e.y = 152,
        e
    },
    i.btn6_i = function() {
        var e = new eui.Image;
        return this.btn6 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn6_png",
        e.width = 146,
        e.x = 361,
        e.y = 152,
        e
    },
    i.btn7_i = function() {
        var e = new eui.Image;
        return this.btn7 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn7_png",
        e.width = 146,
        e.x = 36,
        e.y = 221,
        e
    },
    i.btn8_i = function() {
        var e = new eui.Image;
        return this.btn8 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn8_png",
        e.width = 146,
        e.x = 199,
        e.y = 221,
        e
    },
    i.btn9_i = function() {
        var e = new eui.Image;
        return this.btn9 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn9_png",
        e.width = 146,
        e.x = 361,
        e.y = 221,
        e
    },
    i.enterBtn_i = function() {
        var e = new eui.Image;
        return this.enterBtn = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_enterBtn_png",
        e.width = 146,
        e.x = 361,
        e.y = 291,
        e
    },
    i.btn0_i = function() {
        var e = new eui.Image;
        return this.btn0 = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_btn0_png",
        e.width = 146,
        e.x = 199,
        e.y = 291,
        e
    },
    i.delBtn_i = function() {
        var e = new eui.Image;
        return this.delBtn = e,
        e.height = 58,
        e.source = "PeakJiHadFreeInputPopView_delBtn_png",
        e.width = 146,
        e.x = 36,
        e.y = 291,
        e
    },
    i.bg4_i = function() {
        var e = new eui.Image;
        return this.bg4 = e,
        e.height = 40,
        e.source = "PeakJiHadFreeInputPopView_bg4_png",
        e.width = 470,
        e.x = 38,
        e.y = 29,
        e
    },
    i.id_i = function() {
        var e = new eui.Label;
        return this.id = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "请输入想要进入的房间号",
        e.textAlign = "center",
        e.textColor = 13097725,
        e.width = 198,
        e.x = 173,
        e.y = 41,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadFreeModeSkin.exml"] = window.PeakJihadFreeModeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "sJoinBtn", "cBtn", "dJoinBtn"],
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
        e.source = "peakjihad_common_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 65,
        e.elementsContent = [this.sJoinBtn_i(), this.cBtn_i(), this.dJoinBtn_i()],
        e
    },
    i.sJoinBtn_i = function() {
        var e = new eui.Image;
        return this.sJoinBtn = e,
        e.source = "PeakJihadFree_sJoinBtn_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.cBtn_i = function() {
        var e = new eui.Image;
        return this.cBtn = e,
        e.source = "PeakJihadFree_cBtn_png",
        e.x = 308,
        e.y = 0,
        e
    },
    i.dJoinBtn_i = function() {
        var e = new eui.Image;
        return this.dJoinBtn = e,
        e.source = "PeakJihadFree_dJoinBtn_png",
        e.x = 616,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadladderAchieveItemSkin.exml"] = window.PeakjihadladderAchieveItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "desc", "icon", "get", "got", "go"],
        this.currentState = "go",
        this.height = 106,
        this.width = 721,
        this.elementsContent = [this._Group2_i()],
        this.states = [new eui.State("go", [new eui.SetProperty("get", "visible", !1), new eui.SetProperty("got", "visible", !1), new eui.SetProperty("go", "visible", !0)]), new eui.State("get", [new eui.SetProperty("got", "visible", !1), new eui.SetProperty("go", "visible", !1)]), new eui.State("got", [new eui.SetProperty("get", "visible", !1), new eui.SetProperty("got", "visible", !0), new eui.SetProperty("go", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.title_i(), this.desc_i(), this._Image2_i(), this.icon_i(), this._Group1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pea_jihad_achieve_pop_achieveitembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.title_i = function() {
        var e = new eui.Label;
        return this.title = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "S1赛季猛将 (1/1)",
        e.textColor = 12834813,
        e.x = 40,
        e.y = 28,
        e
    },
    i.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "玩家在S1赛季竞技模式中首次达到猛将段位时获得",
        e.textColor = 16774235,
        e.x = 39,
        e.y = 58,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadladder_reward_itemnumbg_png",
        e.x = 460,
        e.y = 17,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 50,
        e.width = 50,
        e.x = 471,
        e.y = 28,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.x = 561.65,
        e.y = 30,
        e.elementsContent = [this.get_i(), this.got_i(), this.go_i()],
        e
    },
    i.get_i = function() {
        var e = new eui.Image;
        return this.get = e,
        e.source = "peakjihadladder_reward_get_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.got_i = function() {
        var e = new eui.Image;
        return this.got = e,
        e.source = "peakjihadladder_reward_got_png",
        e.x = 4,
        e.y = 3,
        e
    },
    i.go_i = function() {
        var e = new eui.Image;
        return this.go = e,
        e.source = "peak_jihad_order_task_panel_go1_png",
        e.x = 38,
        e.y = 13,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadladderAchieveRewardSkin.exml"] = window.PeakjihadladderAchieveRewardSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["close", "_list"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.close_i(), this._Scroller1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imge_735x431_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pea_jihad_achieve_pop_title_png",
        e.x = 36,
        e.y = 1,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "high_ladder_rank_reward_view_close_png",
        e.x = 707.175,
        e.y = 1.229,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 377.215,
        e.width = 722,
        e.x = 14,
        e.y = 42,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = -6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadladderRewardItemSkin.exml"] = window.PeakjihadladderRewardItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["level", "levelIcon", "get", "got", "go", "_list"],
        this.currentState = "level",
        this.height = 90,
        this.width = 789,
        this.elementsContent = [this._Group2_i(), this._Scroller1_i()],
        this.states = [new eui.State("season", [new eui.SetProperty("_Group1", "visible", !1), new eui.SetProperty("_Scroller1", "x", 466)]), new eui.State("level", [])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.level_i(), this.levelIcon_i(), this._Group1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadladder_reward_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.level_i = function() {
        var e = new eui.Label;
        return this.level = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "白银",
        e.textColor = 16514895,
        e.x = 102,
        e.y = 34,
        e
    },
    i.levelIcon_i = function() {
        var e = new eui.Image;
        return this.levelIcon = e,
        e.height = 45,
        e.width = 45,
        e.x = 41,
        e.y = 22,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.x = 641,
        e.y = 22,
        e.elementsContent = [this.get_i(), this.got_i(), this.go_i()],
        e
    },
    i.get_i = function() {
        var e = new eui.Image;
        return this.get = e,
        e.source = "peakjihadladder_reward_get_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.got_i = function() {
        var e = new eui.Image;
        return this.got = e,
        e.source = "peakjihadladder_reward_got_png",
        e.visible = !1,
        e.x = 4,
        e.y = 3,
        e
    },
    i.go_i = function() {
        var e = new eui.Image;
        return this.go = e,
        e.source = "peak_jihad_order_task_panel_go1_png",
        e.visible = !1,
        e.x = 38,
        e.y = 13,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return this._Scroller1 = e,
        e.height = 72,
        e.width = 312,
        e.x = 322,
        e.y = 9,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadLadderRewardSkin.exml"] = window.PeakjihadladderRewardSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["desc", "close", "rbGrp", "_list", "_scroller"],
        this.height = 550,
        this.width = 1005,
        this.elementsContent = [this._Group1_i(), this._scroller_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.desc_i(), this.close_i(), this.rbGrp_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadladder_reward_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.horizontalCenter = 88.5,
        e.size = 16,
        e.text = "玩家在竞技模式中达到对应段位即可领取奖励",
        e.textColor = 6388143,
        e.y = 501,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "high_ladder_rank_reward_view_close_png",
        e.x = 961.436,
        e.y = 4.604,
        e
    },
    i.rbGrp_i = function() {
        var e = new eui.Group;
        return this.rbGrp = e,
        e.height = 300,
        e.width = 172,
        e.x = 6,
        e.y = 48,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    i._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.height = 416.892,
        e.width = 790,
        e.x = 190,
        e.y = 74,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.layout = this._VerticalLayout2_i(),
        e
    },
    i._VerticalLayout2_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadLeisureModeSkin.exml"] = window.PeakJihadLeisureModeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "ima6", "ima3", "imaTest", "none"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peakjihad_common_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 575,
        e.horizontalCenter = 0,
        e.width = 980,
        e.y = 65,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 126,
        e.y = 65,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.ima6_i(), this.ima3_i(), this.imaTest_i(), this.none_i()],
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 30,
        e
    },
    i.ima6_i = function() {
        var e = new eui.Image;
        return this.ima6 = e,
        e.source = "peakjihad_leisure_mode_ima6_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.ima3_i = function() {
        var e = new eui.Image;
        return this.ima3 = e,
        e.source = "peakjihad_leisure_mode_ima3_png",
        e.x = 308,
        e.y = 0,
        e
    },
    i.imaTest_i = function() {
        var e = new eui.Image;
        return this.imaTest = e,
        e.source = "peakjihad_leisure_mode_imaTest_png",
        e.x = 318,
        e.y = 0,
        e
    },
    i.none_i = function() {
        var e = new eui.Image;
        return this.none = e,
        e.source = "peakjihad_leisure_mode_none_png",
        e.x = 616,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadSportsModePetSkin.exml"] = window.PeakjihadSportsModePetSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["head", "txt_id", "imgAttr", "num", "numGroup"],
        this.height = 74,
        this.width = 74,
        this.elementsContent = [this._Group1_i(), this._Image4_i()],
        this.states = [new eui.State("have", [new eui.SetProperty("_Image4", "visible", !1)]), new eui.State("no", [new eui.SetProperty("_Group1", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.cacheAsBitmap = !0,
        e.height = 74,
        e.width = 74,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.head_i(), this.txt_id_i(), this._Image2_i(), this.imgAttr_i(), this.numGroup_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "pea_jihad_sport_head__png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 70,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 70,
        e
    },
    i.txt_id_i = function() {
        var e = new eui.Label;
        return this.txt_id = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "9527",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 5.443,
        e.y = 4.962,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_sports_pool_imgattrbg_png",
        e.touchEnabled = !1,
        e.x = 35.066,
        e.y = 1.934,
        e
    },
    i.imgAttr_i = function() {
        var e = new eui.Image;
        return this.imgAttr = e,
        e.height = 23,
        e.horizontalCenter = 22.5,
        e.source = "peakjihad_sports_pool_imgattr_png",
        e.touchEnabled = !1,
        e.verticalCenter = -23.5,
        e.width = 23,
        e
    },
    i.numGroup_i = function() {
        var e = new eui.Group;
        return this.numGroup = e,
        e.x = 0,
        e.y = 41,
        e.elementsContent = [this._Image3_i(), this.num_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_sports_pool_numbg_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = .5,
        e.size = 20,
        e.text = "3",
        e.textColor = 16776257,
        e.touchEnabled = !1,
        e.y = 6,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return this._Image4 = e,
        e.source = "pea_jihad_sport_none__png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadSportsModeSkin.exml"] = window.PeakjihadSportsModeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bgGroup0", "bg", "bgGroup", "level", "icon", "btnMatch", "time", "cant", "rightGroup", "icon0", "num0", "icon1", "num1", "exp", "bar", "curLevel", "curExp", "task", "btnJiangli", "reward", "achieve", "suit", "dotReward", "dotAchieve", "_list", "leftGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bgGroup0_i(), this.bg_i(), this.bgGroup_i(), this.rightGroup_i(), this._Group4_i(), this.leftGroup_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "pea_jihad_sport_exppro_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.bgGroup0_i = function() {
        var e = new eui.Group;
        return this.bgGroup0 = e,
        e.horizontalCenter = 0,
        e.scaleX = .6,
        e.scaleY = .6,
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e
    },
    n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.alpha = .8,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(195, 147, 801, 374),
        e.source = "blurry_base_bgmask_png",
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e
    },
    n.bgGroup_i = function() {
        var e = new eui.Group;
        return this.bgGroup = e,
        e.horizontalCenter = -150,
        e.scaleX = .5,
        e.scaleY = .5,
        e.touchEnabled = !1,
        e.verticalCenter = 50,
        e
    },
    n.rightGroup_i = function() {
        var e = new eui.Group;
        return this.rightGroup = e,
        e.height = 640,
        e.right = 0,
        e.visible = !0,
        e.width = 637,
        e.y = 0,
        e.elementsContent = [this._Group1_i(), this.cant_i()],
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 640,
        e.width = 637,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.level_i(), this.icon_i(), this.btnMatch_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_sports_mode_rightbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.level_i = function() {
        var e = new eui.Label;
        return this.level = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 161.5,
        e.size = 22,
        e.text = "圣皇",
        e.textColor = 16383837,
        e.y = 344.96,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 192,
        e.width = 192,
        e.x = 385,
        e.y = 144,
        e
    },
    n.btnMatch_i = function() {
        var e = new eui.Image;
        return this.btnMatch = e,
        e.source = "peakjihad_sports_mode_btnjingji_png",
        e.visible = !0,
        e.x = 383.93,
        e.y = 398.26,
        e
    },
    n.cant_i = function() {
        var e = new eui.Group;
        return this.cant = e,
        e.height = 180,
        e.width = 180,
        e.x = 392.336,
        e.y = 405,
        e.elementsContent = [this._Image2_i(), this.time_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pea_jihad_sport_cantbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.time_i = function() {
        var e = new eui.Label;
        return this.time = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "00:00:00",
        e.textAlign = "center",
        e.textColor = 16514896,
        e.width = 120,
        e.x = 30,
        e.y = 116,
        e
    },
    n._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 60,
        e.top = 0,
        e.visible = !0,
        e.elementsContent = [this._Group2_i(), this._Group3_i()],
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.right = 168,
        e.y = 12,
        e.elementsContent = [this._Image3_i(), this.icon0_i(), this.num0_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_item_num_bg_png",
        e.x = 0,
        e.y = 3.171,
        e
    },
    n.icon0_i = function() {
        var e = new eui.Image;
        return this.icon0 = e,
        e.height = 55,
        e.left = -2,
        e.scaleX = .7,
        e.scaleY = .7,
        e.source = "PeakJihadFirstPage_icon0_png",
        e.width = 55,
        e.y = -6,
        e
    },
    n.num0_i = function() {
        var e = new eui.Label;
        return this.num0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.right = 7,
        e.y = 12,
        e.elementsContent = [this._Image4_i(), this.icon1_i(), this.num1_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_item_num_bg_png",
        e.x = 0,
        e.y = 2.108,
        e
    },
    n.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.height = 55,
        e.left = -2,
        e.scaleX = .7,
        e.scaleY = .7,
        e.source = "PeakJihadFirstPage_icon1_png",
        e.width = 55,
        e.y = -6,
        e
    },
    n.num1_i = function() {
        var e = new eui.Label;
        return this.num1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    n.leftGroup_i = function() {
        var e = new eui.Group;
        return this.leftGroup = e,
        e.height = 605,
        e.left = 11,
        e.width = 453,
        e.y = 14,
        e.elementsContent = [this._Group5_i(), this._Scroller1_i()],
        e
    },
    n._Group5_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 605,
        e.width = 453,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.exp_i(), this.bar_i(), this.curLevel_i(), this.curExp_i(), this.task_i(), this.btnJiangli_i(), this.reward_i(), this.achieve_i(), this.suit_i(), this.dotReward_i(), this.dotAchieve_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pea_jihad_sport_line_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.exp_i = function() {
        var e = new eui.Image;
        return this.exp = e,
        e.source = "peakjihad_sports_mode_exp_png",
        e.visible = !0,
        e.x = 10,
        e.y = 499,
        e
    },
    n.bar_i = function() {
        var e = new eui.ProgressBar;
        return this.bar = e,
        e.rotation = 270,
        e.visible = !0,
        e.x = 16.19,
        e.y = 598.28,
        e.skinName = i,
        e
    },
    n.curLevel_i = function() {
        var e = new eui.Label;
        return this.curLevel = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -80.5,
        e.size = 30,
        e.text = "0",
        e.textColor = 16777215,
        e.y = 549,
        e
    },
    n.curExp_i = function() {
        var e = new eui.Label;
        return this.curExp = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -167,
        e.size = 18,
        e.text = "0",
        e.textColor = 16514895,
        e.y = 547,
        e
    },
    n.task_i = function() {
        var e = new eui.Image;
        return this.task = e,
        e.source = "peakjihad_sports_mode_btnmeiri_png",
        e.x = 216,
        e.y = 516,
        e
    },
    n.btnJiangli_i = function() {
        var e = new eui.Image;
        return this.btnJiangli = e,
        e.source = "peakjihad_sports_mode_btnjiangli_png",
        e.x = 324,
        e.y = 516,
        e
    },
    n.reward_i = function() {
        var e = new eui.Image;
        return this.reward = e,
        e.source = "peakjihad_sports_mode_btnduanwei_png",
        e.x = 163,
        e.y = 411,
        e
    },
    n.achieve_i = function() {
        var e = new eui.Image;
        return this.achieve = e,
        e.source = "pea_jihad_achieve_pop_btnchengjiu_png",
        e.x = 259,
        e.y = 411,
        e
    },
    n.suit_i = function() {
        var e = new eui.Image;
        return this.suit = e,
        e.source = "peakjihad_sports_mode_btnzhuangban_png",
        e.x = 67,
        e.y = 411,
        e
    },
    n.dotReward_i = function() {
        var e = new eui.Image;
        return this.dotReward = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 226,
        e.y = 416.544,
        e
    },
    n.dotAchieve_i = function() {
        var e = new eui.Image;
        return this.dotAchieve = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 321.831,
        e.y = 416,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.cacheAsBitmap = !0,
        e.height = 334,
        e.width = 250.5,
        e.x = 27,
        e.y = 57,
        e.viewport = this._list_i(),
        e
    },
    n._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = PeakjihadSportsModePetSkin,
        e.layout = this._TileLayout1_i(),
        e
    },
    n._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 10,
        e.paddingLeft = 4,
        e.paddingTop = 2,
        e.requestedColumnCount = 3,
        e.verticalGap = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadSportsPoolItemSkin.exml"] = window.PeakJihadSportsPoolItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtName", "head", "txt_id", "imgAttr", "num", "rec"],
        this.height = 136,
        this.width = 111,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.txtName_i(), this.head_i(), this.txt_id_i(), this._Image2_i(), this.imgAttr_i(), this._Image3_i(), this.num_i(), this.rec_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_sports_pool_itembg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = .5,
        e.size = 16,
        e.text = "精灵名字最多",
        e.textColor = 9025023,
        e.y = 110,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 100,
        e.horizontalCenter = -.5,
        e.verticalCenter = -13,
        e.width = 100,
        e
    },
    i.txt_id_i = function() {
        var e = new eui.Label;
        return this.txt_id = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "9527",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 5.443,
        e.y = 4.962,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_sports_pool_imgattrbg_png",
        e.touchEnabled = !1,
        e.x = 68,
        e.y = 5,
        e
    },
    i.imgAttr_i = function() {
        var e = new eui.Image;
        return this.imgAttr = e,
        e.height = 23,
        e.horizontalCenter = 36.5,
        e.source = "peakjihad_sports_pool_imgattr_png",
        e.touchEnabled = !1,
        e.verticalCenter = -51.5,
        e.width = 23,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_sports_pool_numbg_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 77,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -40.5,
        e.size = 20,
        e.text = "3",
        e.textColor = 16776257,
        e.touchEnabled = !1,
        e.y = 83,
        e
    },
    i.rec_i = function() {
        var e = new eui.Image;
        return this.rec = e,
        e.source = "peakjihad_sports_pool_rec_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.x = 2,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadSportsPoolSkin.exml"] = window.PeakJihadSportsPoolSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "icon0", "num0", "icon1", "num1", "menuGroup", "_list", "_scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group3_i(), this.menuGroup_i(), this._scroller_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peakjihad_common_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 60,
        e.top = 0,
        e.visible = !0,
        e.elementsContent = [this._Group1_i(), this._Group2_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.right = 168,
        e.y = 12,
        e.elementsContent = [this._Image1_i(), this.icon0_i(), this.num0_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_item_num_bg_png",
        e.x = 0,
        e.y = 3.171,
        e
    },
    i.icon0_i = function() {
        var e = new eui.Image;
        return this.icon0 = e,
        e.height = 55,
        e.left = -1,
        e.scaleX = .7,
        e.scaleY = .7,
        e.source = "PeakJihadFirstPage_icon0_png",
        e.width = 55,
        e.y = -6,
        e
    },
    i.num0_i = function() {
        var e = new eui.Label;
        return this.num0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.right = 7,
        e.y = 12,
        e.elementsContent = [this._Image2_i(), this.icon1_i(), this.num1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad_item_num_bg_png",
        e.x = 0,
        e.y = 2.108,
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.height = 55,
        e.left = -1,
        e.scaleX = .7,
        e.scaleY = .7,
        e.source = "PeakJihadFirstPage_icon1_png",
        e.width = 55,
        e.y = -6,
        e
    },
    i.num1_i = function() {
        var e = new eui.Label;
        return this.num1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15.5,
        e.size = 16,
        e.textColor = 13887988,
        e.y = 5,
        e
    },
    i.menuGroup_i = function() {
        var e = new eui.Group;
        return this.menuGroup = e,
        e.x = 0,
        e.y = 48,
        e
    },
    i._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.height = 558,
        e.left = 237,
        e.right = 33,
        e.y = 65,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 10,
        e.verticalGap = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadTrainFightPopSkin.exml"] = window.PeakJihadTrainFightPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["close", "title", "num", "icon", "desc", "tip", "start"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.close_i(), this.title_i(), this._Label1_i(), this._Label2_i(), this.num_i(), this.icon_i(), this.desc_i(), this.tip_i(), this.start_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadfirstpage_train_popbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "high_ladder_rank_reward_view_close_png",
        e.x = 439,
        e.y = 0,
        e
    },
    i.title_i = function() {
        var e = new eui.Label;
        return this.title = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "试炼等级1-1",
        e.textColor = 16514895,
        e.x = 32,
        e.y = 8,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "提示",
        e.textColor = 4187130,
        e.x = 21,
        e.y = 83.56,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "通关奖励：",
        e.textColor = 4187130,
        e.x = 171,
        e.y = 192,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "*100",
        e.textColor = 4187130,
        e.x = 274,
        e.y = 192,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 22,
        e.source = "peakjihadfirstpage_train_icon_png",
        e.width = 22,
        e.x = 254,
        e.y = 190,
        e
    },
    i.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "试炼描述试炼描述试炼描述",
        e.textColor = 13820671,
        e.width = 434,
        e.x = 21,
        e.y = 45.05,
        e
    },
    i.tip_i = function() {
        var e = new eui.Label;
        return this.tip = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "通过技能技能技能可以有效克制地方技能技能技能，来达到XXX的目的一次扩大优势获得胜利",
        e.textColor = 8757203,
        e.width = 434,
        e.x = 21,
        e.y = 107.56,
        e
    },
    i.start_i = function() {
        var e = new eui.Image;
        return this.start = e,
        e.source = "peakjihadfirstpage_train_start_png",
        e.x = 173,
        e.y = 213,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadTrainItemSkin.exml"] = window.PeakJihadTrainItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["pet", "levelName", "level", "desc", "done", "not", "touchGroup"],
        this.height = 541,
        this.width = 320,
        this.elementsContent = [this.touchGroup_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.touchGroup_i = function() {
        var e = new eui.Group;
        return this.touchGroup = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.pet_i(), this._Image2_i(), this.levelName_i(), this.level_i(), this.desc_i(), this.done_i(), this.not_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadfirstpage_train_itembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.height = 495,
        e.width = 280,
        e.x = 21,
        e.y = 23,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadfirstpage_train_txtBg_png",
        e.visible = !0,
        e.x = 20,
        e.y = 403.526,
        e
    },
    i.levelName_i = function() {
        var e = new eui.Image;
        return this.levelName = e,
        e.source = "peakjihadfirstpage_train_levelname1_png",
        e.x = 39,
        e.y = 26,
        e
    },
    i.level_i = function() {
        var e = new eui.Label;
        return this.level = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "试炼等级2-1",
        e.textColor = 7923711,
        e.x = 46,
        e.y = 66,
        e
    },
    i.desc_i = function() {
        var e = new eui.Label;
        return this.desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "试炼描述试炼描述试炼描述试炼描述试炼描述试炼描述试炼描述",
        e.textAlign = "center",
        e.textColor = 8431332,
        e.verticalCenter = 190.5,
        e.width = 240,
        e.x = 40,
        e
    },
    i.done_i = function() {
        var e = new eui.Image;
        return this.done = e,
        e.source = "peakjihadfirstpage_train_done_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.x = 20,
        e.y = 245,
        e
    },
    i.not_i = function() {
        var e = new eui.Image;
        return this.not = e,
        e.height = 507.667,
        e.source = "peakjihad_sports_pool_rec_png",
        e.visible = !1,
        e.width = 290.724,
        e.x = 14.361,
        e.y = 11.607,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadTrainSkin.exml"] = window.PeakJihadTrainSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "_list", "_scr", "menuGroup"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_i(), this._scr_i(), this.menuGroup_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peakjihad_common_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._scr_i = function() {
        var e = new eui.Scroller;
        return this._scr = e,
        e.height = 542,
        e.left = 226,
        e.right = 30,
        e.y = 63,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = PeakJihadTrainItemSkin,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i.menuGroup_i = function() {
        var e = new eui.Group;
        return this.menuGroup = e,
        e.x = 0,
        e.y = 48,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakRBitemSkin.exml"] = window.PeakRBitemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_desc"],
        this.height = 63,
        this.width = 171,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_desc_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("txt_desc", "textColor", 8036825)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "help_mulit_pop_bg_down_png"), new eui.SetProperty("txt_desc", "textColor", 15857151)]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "help_mulit_pop_bg_down_png")])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.alpha = 0,
        e.height = 63,
        e.source = "help_mulit_pop_bg_down_png",
        e.visible = !0,
        e.width = 171,
        e
    },
    i.txt_desc_i = function() {
        var e = new eui.Label;
        return this.txt_desc = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = -1.5,
        e.size = 20,
        e.text = "段位奖励",
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/RewardItemRenderSKin.exml"] = window.RewardItemRenderSKin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "num", "mas"],
        this.height = 72,
        this.width = 72,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 72,
        e.width = 72,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.icon_i(), this.num_i(), this.mas_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadladder_reward_itemnumbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 50,
        e.horizontalCenter = 0,
        e.verticalCenter = -5,
        e.width = 50,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.y = 53,
        e
    },
    i.mas_i = function() {
        var e = new eui.Image;
        return this.mas = e,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "peak_jihad_order_task_panel_itemgot_png",
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e.x = 1,
        e.y = 1,
        e
    },
    t
} (eui.Skin);