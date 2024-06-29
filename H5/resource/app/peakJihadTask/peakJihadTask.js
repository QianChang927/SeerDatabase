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
    return new(i || (i = Promise))(function(a, r) {
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function o(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, o)
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
            if (a = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, s, o, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
peakJihadTask; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            return i._selectType = 1,
            i.DAILY_TASK_CONFIG = [{
                id: 13191,
                name: "完成8场自由战",
                maxValue: 8,
                reward: [{
                    itemid: 1717451,
                    num: 24
                }]
            },
            {
                id: 13192,
                name: "获得5场自由战的胜利",
                maxValue: 5,
                reward: [{
                    itemid: 1717451,
                    num: 35
                }]
            },
            {
                id: 16641,
                name: "完成6场3V3模式",
                maxValue: 6,
                reward: [{
                    itemid: 1717451,
                    num: 42
                }]
            },
            {
                id: 16642,
                name: "获得3场3V3模式的胜利",
                maxValue: 3,
                reward: [{
                    itemid: 1717451,
                    num: 51
                }]
            },
            {
                id: 16639,
                name: "完成6场6V6模式",
                maxValue: 6,
                reward: [{
                    itemid: 1717451,
                    num: 60
                }]
            },
            {
                id: 16640,
                name: "获得3场6V6模式（狂野&竞技皆可）的胜利",
                maxValue: 3,
                reward: [{
                    itemid: 1717451,
                    num: 72
                }]
            },
            {
                id: 16643,
                name: "在任意模式中累积击败10只精灵",
                maxValue: 10,
                reward: [{
                    itemid: 1717451,
                    num: 20
                }]
            }],
            i._dailyTaskBits = [],
            i._dailyTaskData = [],
            i._dailyTaskProgressState = [],
            i._dailyTaskStatus = [],
            i._isFirstOpenDaily = !0,
            i.cron1 = [new CronTimeVo("*", "6-21", "*", "*", "*", "*")],
            i.WEEK_TASK_CONFIG = [{
                ids: [20114, 20115],
                names: ["完成20场自由战", "获得10场自由战胜利"],
                max: [20, 10],
                title: "自由战模式",
                boxid: 1,
                tips: "<font color ='#C2902A'>铜宝箱:\n		开启后必定获得荣耀铸币*5；且有几率获得强化庆系列刻印1枚</font>"
            },
            {
                ids: [20116, 20117],
                names: ["完成30场6v6模式", "获得10场6v6胜利"],
                max: [30, 10],
                title: "6V6模式",
                boxid: 3,
                tips: "<font color ='#C2902A'>金宝箱:\n		开启后必定获得当月荣耀铸币*35、泰坦之灵*5万；且有几率获得精灵王系列刻印1枚、通用刻印激活水晶1枚</font>"
            },
            {
                ids: [20118, 20119],
                names: ["完成20场3v3模式", "获得6场3v3胜利"],
                max: [20, 6],
                title: "3V3模式",
                boxid: 2,
                tips: "<font color ='#C2902A'>银宝箱:\n		开启后必定获得荣耀铸币*20、泰坦之灵*3万；且有几率获得征战系列刻印1枚</font>"
            }],
            i._isFirstOpenWeekTask = !0,
            StatLogger.log("1023版本系统功能", "巅峰圣战", "进入任务界面"),
            t && "number" == typeof t && (i._selectType = t),
            i._taskArryCol = new eui.ArrayCollection,
            i.skinName = PeakJihadTaskMainSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._radioButtonGroupNavBar = this.rd_daily.group,
            this._radioButtonGroupNavBar.selectedValue = this._selectType,
            this.scroller_task.viewport = this.list_viewport,
            this.list_viewport.dataProvider = this._taskArryCol,
            this.addEvents(),
            this.resetList(),
            this._updateTask(),
            this.adaptBgByScale(this.bg),
            this.grp_left.width = 229 + DeviceInfoManager.adapterOffSetX,
            this.grp_right.x = this.grp_right.x + DeviceInfoManager.adapterOffSetX
        },
        i.prototype.addEvents = function() {
            EventManager.addEventListener(i.EVENT_CLICK_BOX, this.onTouchTapBox, this),
            ImageButtonUtil.add(this.btnClose, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_help, this.onTouchImageButtonHandler, this),
            this._radioButtonGroupNavBar.addEventListener(egret.Event.CHANGE, this.onChangeNavBar, this),
            SocketConnection.addCmdListener(45134, this.forceUpdateDailyTaskHandler, this)
        },
        i.prototype.removeEvents = function() {
            SocketConnection.removeCmdListener(45134, this.forceUpdateDailyTaskHandler, this),
            EventManager.removeEventListener(i.EVENT_CLICK_BOX, this.onTouchTapBox, this),
            ImageButtonUtil.removeAll(this),
            this._radioButtonGroupNavBar.removeEventListener(egret.Event.CHANGE, this.onChangeNavBar, this)
        },
        i.prototype.onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnClose:
                ModuleManager.hideModule(this);
                break;
            case this.img_btn_help:
                var e = ["1.每日可开启1个每日任务，每位玩家最多可同时存在3个每日任务", "2.单个每日任务最多可存在3天，若在活动时间内尚未完成或尚未领取奖励则时间结束后将视为自动放弃"],
                i = ["1.每周任务会在每周五0点进行重置（即当前任务进度清零，重新开始累积），且每周五可以开启上周完成的任务奖励宝箱！", "2.每周任务的奖励可领取时间持续一周，尚未领取则视为自动放弃，所以记得每周都来开启宝箱哦！"],
                n = {};
                n.titleSource = RES.getRes("help_mulit_pop_title_dfsz_png"),
                n.data = [{
                    tabName: "每日任务",
                    desc: e.join("\n")
                },
                {
                    tabName: "每周任务",
                    desc: i.join("\n")
                }],
                tipsPop.TipsPop.openMulitHelpPop(n)
            }
        },
        i.prototype.onChangeNavBar = function(t) {
            this._selectType = ~~this._radioButtonGroupNavBar.selectedValue,
            this.resetList(),
            this._updateTask()
        },
        i.prototype.resetList = function() {
            this._taskArryCol.removeAll(),
            1 === this._selectType ? this.list_viewport.itemRenderer = t.PeakjihadTaskDailyItem: this.list_viewport.itemRenderer = t.PeakjihadTaskWeekItem,
            this.scroller_task.stopAnimation(),
            this.scroller_task.viewport.scrollV = 0
        },
        i.prototype._updateTask = function() {
            1 === this._selectType ? this._updateDailyTask() : this._updateWeekTask()
        },
        i.prototype._updateDailyTask = function(t) {
            var e = this;
            void 0 === t && (t = !1),
            t || this._isFirstOpenDaily ? (this._isFirstOpenDaily = !1, this.initDailyTaskInfo().then(function() {
                return e.checkGetAwad() ? void SocketConnection.send(45134, 2) : e.checkGetTask() ? void SocketConnection.send(45134, 1) : void e._taskArryCol.replaceAll(e.getDailyRenderVos())
            })) : this._taskArryCol.replaceAll(this.getDailyRenderVos())
        },
        i.prototype.forceUpdateDailyTaskHandler = function() {
            this._updateDailyTask(!0)
        },
        i.prototype.initDailyTaskInfo = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, a, r, s, r, o;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return t = this,
                        [4, this.requestDailyTaskInfo()];
                    case 1:
                        for (t._dailyTaskData = _.sent(), e = this._dailyTaskData, i = e[0], n = e[1], a = [], this._dailyTaskBits = [], r = 0; r < this.DAILY_TASK_CONFIG.length; r++) BitUtil.getBit(n, r) > 0 && (this._dailyTaskBits.push(r + 1), a.push(this.DAILY_TASK_CONFIG[r].id));
                        return s = this,
                        [4, this.requestDailyTaskStatus(a)];
                    case 2:
                        for (s._dailyTaskProgressState = _.sent(), r = 0; r < this._dailyTaskProgressState.length; r++) o = BitUtil.getBit(n, this._dailyTaskBits[r] - 1 + 7) > 0 ? 1 : 0,
                        o = BitUtil.getBit(i, this._dailyTaskBits[r]) > 0 ? -1 : o,
                        this._dailyTaskStatus.push({
                            id: a[r],
                            state: o
                        });
                        return [2]
                    }
                })
            })
        },
        i.prototype.getDailyRenderVos = function() {
            for (var t = [], e = this._dailyTaskProgressState, i = 0; 3 > i; i++) if (i < this._dailyTaskBits.length) {
                var n = this.DAILY_TASK_CONFIG[this._dailyTaskBits[i] - 1].id,
                a = this.getDailyTaskState(n),
                r = e[i]; (void 0 === r || null === r) && console.error("任务数据有错误当前任务进度状态:" + e + ">>>>>当前接取的任务数据" + this._dailyTaskData),
                t.push({
                    conf: this.DAILY_TASK_CONFIG[this._dailyTaskBits[i] - 1],
                    state: a,
                    p: r,
                    id: i
                })
            } else t.push({
                conf: null,
                state: 0,
                p: 0,
                id: i
            });
            return t
        },
        i.prototype.getDailyTaskState = function(t) {
            for (var e = 0,
            i = this._dailyTaskStatus; e < i.length; e++) {
                var n = i[e];
                if (n.id === t) return n.state
            }
            return 0
        },
        i.prototype.checkGetAwad = function() {
            for (var t = 0; t < this._dailyTaskStatus.length; t++) if (1 === this._dailyTaskStatus[t].state) return ! 0;
            for (var e = this._dailyTaskData,
            i = e[0], n = e[1], t = 0; 7 > t; t++) if (BitUtil.getBit(n, t + 7) > 0 && BitUtil.getBit(i, t + 1) <= 0) return ! 0;
            return ! 1
        },
        i.prototype.checkGetTask = function() {
            var t = BitUtil.getBit(this._dailyTaskData[0], 0) <= 0 ? !1 : !0;
            return ! t && this._dailyTaskBits.length < 3 ? this.isInTime() ? !0 : (BubblerManager.getInstance().showText("每天6:00—22:00才可以领取每日任务哦！"), !1) : !1
        },
        i.prototype.isInTime = function() {
            return null == this.ac1 && (this.ac1 = new ActivityControl(this.cron1)),
            this.ac1.isInActivityTime ? !0 : !1
        },
        i.prototype.requestDailyTaskInfo = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return [2, new Promise(function(t, e) {
                        KTool.getMultiValue([18072, 100667],
                        function(e) {
                            return t(e)
                        })
                    })]
                })
            })
        },
        i.prototype.requestDailyTaskStatus = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        KTool.getMultiValue(t,
                        function(t) {
                            return e(t)
                        })
                    })]
                })
            })
        },
        i.prototype._updateWeekTask = function(t) {
            var e = this;
            if (void 0 === t && (t = !1), t || this._isFirstOpenWeekTask) this.initWeekTaskData().then(function() {
                e._taskArryCol.removeAll();
                var t = e.getWeekTaskRenderVos();
                e._isFirstOpenWeekTask = !1,
                egret.setTimeout(function() {
                    for (var i = 0; i < t.length; i++) e._taskArryCol.addItem(t[i])
                },
                e, 0)
            })["catch"](function(t) {});
            else {
                this._taskArryCol.removeAll();
                var i = this.getWeekTaskRenderVos();
                egret.setTimeout(function() {
                    for (var t = 0; t < i.length; t++) e._taskArryCol.addItem(i[t])
                },
                this, 0)
            }
        },
        i.prototype.initWeekTaskData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return t = this,
                        [4, this.requestWeekTaskProgress()];
                    case 1:
                        return t._weekTaskProgress = i.sent(),
                        e = this,
                        [4, this.requestWeekTaskData()];
                    case 2:
                        return e._weekDataFlags = i.sent(),
                        [2]
                    }
                })
            })
        },
        i.prototype.requestWeekTaskProgress = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        for (var n = [], a = 0; a < t.WEEK_TASK_CONFIG.length; a++) n = n.concat(t.WEEK_TASK_CONFIG[a].ids);
                        KTool.getMultiValue(n,
                        function(i) {
                            for (var n = [], a = 0; a < t.WEEK_TASK_CONFIG.length; a++) {
                                var r = [],
                                s = n.length;
                                r.push(i[2 * s]),
                                r.push(i[2 * s + 1]),
                                n.push(r)
                            }
                            return e(n)
                        })
                    })]
                })
            })
        },
        i.prototype.requestWeekTaskData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return [2, new Promise(function(t, e) {
                        KTool.getMultiValue([4936, 20120, 4933, 4937],
                        function(e) {
                            return t(e)
                        })
                    })]
                })
            })
        },
        i.prototype.getWeekTaskRenderVos = function() {
            for (var t = [], e = this._weekDataFlags[1], i = 0; i < this.WEEK_TASK_CONFIG.length; i++) {
                var n = this._weekTaskProgress[i],
                a = this.WEEK_TASK_CONFIG[i].boxid - 1,
                r = 0;
                SystemTimerManager.time >= this._weekDataFlags[3] && SystemTimerManager.time < this._weekDataFlags[3] + 604800 && (r = BitUtil.getBit(e, a) > 0 ? -1 : BitUtil.getBit(this._weekDataFlags[0], a) > 0 ? 1 : 0),
                t.push({
                    conf: this.WEEK_TASK_CONFIG[i],
                    p: n,
                    state: r
                })
            }
            return t = t.sort(function(t, e) {
                return t.conf.boxid - e.conf.boxid
            })
        },
        i.prototype.onTouchTapBox = function(t) {
            var e = this,
            i = t.data.conf.boxid,
            n = i - 1,
            a = this._weekDataFlags[0],
            r = this._weekDataFlags[3];
            BitUtil.getBit(a, n) > 0 && SystemTimerManager.time > r && SystemTimerManager.time < r + 604800 ? SocketConnection.sendWithPromise(46341, [1, i]).then(function() {
                e._updateWeekTask(!0)
            }) : BubblerManager.getInstance().showText("你上周没有完成这个任务，所以本周无法开启这个宝箱！")
        },
        i.prototype.destroy = function() {
            this._taskArryCol.removeAll(),
            this._taskArryCol = null,
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i.EVENT_CLICK_BOX = "event_click_box",
        i
    } (BaseModule);
    t.PeakJihadTask = e,
    __reflect(e.prototype, "peakJihadTask.PeakJihadTask")
} (peakJihadTask || (peakJihadTask = {}));
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
peakJihadTask; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PeakJihadTaskDailyItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            if (this._vo = this.data, this._vo) {
                var t = this._vo.conf;
                if (this.task_title.source = "peak_jihad_task_daily_item_task_title_" + (this._vo.id + 1) + "_png", this.grp_reward.visible = null !== t, this.lab_task.text = null !== t ? t.name: "每天都会刷新一个新任务，敬请关注！", t) {
                    var e = t.reward[0];
                    if (!e) return;
                    this.reward_icon.source = ClientConfig.getItemIcon(e.itemid),
                    this.lab_reward_item.text = e.num + "";
                    var i = this._vo.state;
                    this.grp_progress.visible = 0 === i,
                    this.img_ywc.visible = 0 !== i;
                    var n = this._vo.p,
                    a = this._vo.conf.maxValue;
                    this.lab_progress.text = Math.min(n, a) + "/" + a
                }
            }
        },
        e.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.PeakjihadTaskDailyItem = e,
    __reflect(e.prototype, "peakJihadTask.PeakjihadTaskDailyItem")
} (peakJihadTask || (peakJihadTask = {}));
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
peakJihadTask; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.mapBoxAni = ["daily_task_box_green", "daily_task_box_yellow", "daily_task_box_red"],
            t.skinName = PeakJihadTaskWeekItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.dataChanged = function() {
            if (this._vo = this.data, this._vo) {
                this._aniCanOpen || (this._aniCanOpen = core.manager.MovieClipManager.createMoveClip(this.mapBoxAni[this._vo.conf.boxid - 1], "canopen"), this.grp_ani.addChild(this._aniCanOpen), this._aniCanOpen.gotoAndStop(1), this._aniCanOpen.touchEnabled = !0, this._aniCanOpen.scaleX = this._aniCanOpen.scaleY = .8, ImageButtonUtil.add(this._aniCanOpen, this.onTouchRewardHandler, this, !1, !1), this._aniOpen = core.manager.MovieClipManager.createMoveClip(this.mapBoxAni[this._vo.conf.boxid - 1], "open"), this.grp_ani.addChild(this._aniOpen), this._aniOpen.gotoAndStop(this._aniOpen.totalFrames), this._aniOpen.touchEnabled = !0, this._aniOpen.scaleX = this._aniOpen.scaleY = .8, ImageButtonUtil.add(this._aniOpen, this.onTouchRewardHandler, this, !1, !1)),
                this.txt_titile.text = this._vo.conf.title;
                for (var t = this._vo.conf.names,
                e = 0; 2 > e; e++) {
                    this["lab_task_" + e].text = t[e];
                    var i = this._vo.p[e],
                    n = this._vo.conf.max[e];
                    this["lab_progress_" + e].text = Math.min(i, n) + "/" + n
                }
                this.img_ylc.visible = !1,
                this._aniCanOpen.visible = !1,
                this._aniOpen.visible = !1,
                1 === this._vo.state ? (this._aniCanOpen.gotoAndPlay(1, -1), this._aniCanOpen.visible = !0) : 0 === this._vo.state ? (this._aniOpen.visible = !0, this._aniOpen.gotoAndStop(1)) : -1 === this._vo.state && (this._aniOpen.gotoAndStop(this._aniOpen.totalFrames), this._aniOpen.visible = !0)
            }
        },
        i.prototype.onTouchRewardHandler = function(e) {
            0 === this._vo.state || -1 === this._vo.state ? PopViewManager.getInstance().openView(new t.PeakRewardPop, null, this._vo.conf.boxid) : this._aniCanOpen.isPlaying && EventManager.dispatchEvent(new egret.Event(t.PeakJihadTask.EVENT_CLICK_BOX, !1, !1, this.data))
        },
        i.prototype.destroy = function() {
            this._aniCanOpen && this._aniCanOpen.parent && this._aniCanOpen.parent.removeChild(this._aniCanOpen),
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.PeakjihadTaskWeekItem = e,
    __reflect(e.prototype, "peakJihadTask.PeakjihadTaskWeekItem")
} (peakJihadTask || (peakJihadTask = {}));
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
peakJihadTask; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "RewardItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            var t = this.data;
            this.icon.source = 1 === t.type ? ItemXMLInfo.getIconURL(t.id) : CountermarkXMLInfo.getIconURL(t.id),
            this.txtName.text = StringUtil.parseStrLimitLen(t.name, 5),
            this.txtCount.text = t.num,
            this.txtJl.text = t.drop
        },
        e
    } (eui.ItemRenderer);
    t.PeakRewardItem = e,
    __reflect(e.prototype, "peakJihadTask.PeakRewardItem")
} (peakJihadTask || (peakJihadTask = {}));
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
peakJihadTask; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PeakJihadTaskRewardPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.list_viewport.itemRenderer = t.PeakRewardItem,
            this.list_viewport.dataProvider = new eui.ArrayCollection
        },
        i.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._parseData = function() {
            this._boxid = this._data
        },
        i.prototype._upDateView = function() {
            var t = this;
            3 === this._boxid && KTool.getMultiValueAsync([4933]).then(function(e) {
                var i = e[0],
                n = 11 - i;
                t.txtCnt.text = n > 0 ? "再开启" + n + "次金色箱必定获得精灵王系列刻印x1": "本次开启必定获得精灵王系列刻印x1"
            }),
            this._showReward()
        },
        i.prototype._showReward = function() {
            for (var t, e = [{
                boxId: 1,
                reward: [{
                    type: 1,
                    id: 1717452,
                    num: 5,
                    name: "荣耀铸币",
                    drop: "100%掉落"
                },
                {
                    type: 2,
                    id: 40512,
                    num: 1,
                    name: "强化庆系列刻印",
                    drop: "几率掉落"
                }]
            },
            {
                boxId: 2,
                reward: [{
                    type: 1,
                    id: 1717452,
                    num: 20,
                    name: "荣耀铸币",
                    drop: "100%掉落"
                },
                {
                    type: 1,
                    id: 1400352,
                    num: 3e4,
                    name: "泰坦之灵",
                    drop: "100%掉落"
                },
                {
                    type: 2,
                    id: 40711,
                    num: 1,
                    name: "征战系列刻印",
                    drop: "几率掉落"
                }]
            },
            {
                boxId: 3,
                reward: [{
                    type: 1,
                    id: 1717452,
                    num: 35,
                    name: "荣耀铸币",
                    drop: "100%掉落"
                },
                {
                    type: 1,
                    id: 1400352,
                    num: 5e4,
                    name: "泰坦之灵",
                    drop: "100%掉落"
                },
                {
                    type: 2,
                    id: 40646,
                    num: 1,
                    name: "精灵王系列刻印",
                    drop: "几率掉落"
                },
                {
                    type: 1,
                    id: 300066,
                    num: 1,
                    name: "通用刻印激活水晶",
                    drop: "几率掉落"
                }]
            }], i = 0; i < e.length; i++) e[i].boxId === this._boxid && (t = e[i]);
            var n = t.reward;
            this.list_viewport.dataProvider.replaceAll(n),
            this.list_viewport.validateNow(),
            n.length > 3 ? this.list_viewport.horizontalCenter = 0 / 0 : this.list_viewport.horizontalCenter = 0
        },
        i
    } (PopView);
    t.PeakRewardPop = e,
    __reflect(e.prototype, "peakJihadTask.PeakRewardPop")
} (peakJihadTask || (peakJihadTask = {}));
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
generateEUI.paths["resource/eui_skins/PeakJihadTaskDailyItemSkin.exml"] = window.PeakJihadTaskDailyItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["task_title", "lab_task", "reward_icon", "lab_reward_item", "lab_progress", "grp_progress", "img_ywc", "grp_reward"],
        this.height = 96,
        this.width = 829,
        this.elementsContent = [this._Image1_i(), this.task_title_i(), this._Image2_i(), this.lab_task_i(), this.grp_reward_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "peak_jihad_task_daily_item_texture_taskbg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.task_title_i = function() {
        var t = new eui.Image;
        return this.task_title = t,
        t.source = "peak_jihad_task_daily_item_task_title_1_png",
        t.x = 29,
        t.y = 39,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "peak_jihad_task_daily_item_texture_1_png",
        t.x = 108,
        t.y = 37,
        t
    },
    i.lab_task_i = function() {
        var t = new eui.Label;
        return this.lab_task = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "每天都会刷新一个新任务，敬请关注！",
        t.textColor = 16777215,
        t.wordWrap = !0,
        t.x = 159,
        t.y = 40,
        t
    },
    i.grp_reward_i = function() {
        var t = new eui.Group;
        return this.grp_reward = t,
        t.x = 551,
        t.y = 8,
        t.elementsContent = [this._Group1_i(), this._Group2_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 174,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.reward_icon_i(), this.lab_reward_item_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t
    },
    i.reward_icon_i = function() {
        var t = new eui.Image;
        return this.reward_icon = t,
        t.height = 50,
        t.width = 50,
        t.x = 15,
        t.y = 15,
        t
    },
    i.lab_reward_item_i = function() {
        var t = new eui.Label;
        return this.lab_reward_item = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.stroke = 2,
        t.strokeColor = 4144959,
        t.text = "100",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 32,
        t.x = 43,
        t.y = 56,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 27,
        t.elementsContent = [this.grp_progress_i(), this.img_ywc_i()],
        t
    },
    i.grp_progress_i = function() {
        var t = new eui.Group;
        return this.grp_progress = t,
        t.x = 0,
        t.y = 3.67,
        t.elementsContent = [this._Label1_i(), this.lab_progress_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "黑体",
        t.size = 20,
        t.text = "进度:",
        t.textColor = 3143013,
        t.x = 0,
        t.y = 0,
        t
    },
    i.lab_progress_i = function() {
        var t = new eui.Label;
        return this.lab_progress = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "1/6",
        t.textAlign = "left",
        t.textColor = 3143013,
        t.x = 61,
        t.y = 1,
        t
    },
    i.img_ywc_i = function() {
        var t = new eui.Image;
        return this.img_ywc = t,
        t.source = "peak_jihad_task_daily_item_img_ywc_png",
        t.x = 9,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadTaskMainSkin.exml"] = window.PeakJihadTaskMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "title", "img_btn_close", "btnClose", "img_btn_help", "left_bg", "rd_daily", "rd_week", "grp_left", "list_viewport", "scroller_task", "grp_right"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this._Group2_i(), this.grp_left_i(), this.grp_right_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.scale9Grid = new egret.Rectangle(2, 25, 97, 25),
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.right = 26,
            t.size = 26,
            t.text = "每日巅峰任务",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 76,
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up2_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.scale9Grid = new egret.Rectangle(2, 25, 97, 25),
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.right = 26,
            t.size = 26,
            t.text = "每周巅峰任务",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    a = e.prototype;
    return a.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "common_ui_bg_2_png",
        t.y = 0,
        t
    },
    a._Group1_i = function() {
        var t = new eui.Group;
        return t.percentWidth = 100,
        t.x = 0,
        t.y = 48,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    a._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    a._Group2_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.right = 0,
        t.top = 0,
        t.elementsContent = [this._Image1_i(), this.btnClose_i(), this.img_btn_help_i()],
        t
    },
    a._Image1_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(877, 22, 117, 10),
        t.source = "common_top_bg_style1_png",
        t.top = 0,
        t
    },
    a.btnClose_i = function() {
        var t = new eui.Group;
        return this.btnClose = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.title_i(), this.img_btn_close_i()],
        t
    },
    a.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "peak_jihad_task_main_title_png",
        t.x = 112,
        t.y = 7,
        t
    },
    a.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.img_btn_help_i = function() {
        var t = new eui.Image;
        return this.img_btn_help = t,
        t.source = "common_help_icon_png",
        t.x = 250,
        t.y = 8,
        t
    },
    a.grp_left_i = function() {
        var t = new eui.Group;
        return this.grp_left = t,
        t.left = 0,
        t.maxWidth = 277,
        t.y = 51,
        t.elementsContent = [this.left_bg_i(), this.rd_daily_i(), this.rd_week_i()],
        t
    },
    a.left_bg_i = function() {
        var t = new eui.Image;
        return this.left_bg = t,
        t.left = 0,
        t.right = 9,
        t.source = "peak_jihad_task_main_left_bg_png",
        t.y = 0,
        t
    },
    a.rd_daily_i = function() {
        var t = new eui.RadioButton;
        return this.rd_daily = t,
        t.groupName = "navbar",
        t.label = "",
        t.value = "1",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 17,
        t.skinName = i,
        t
    },
    a.rd_week_i = function() {
        var t = new eui.RadioButton;
        return this.rd_week = t,
        t.groupName = "navbar",
        t.value = "2",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 83,
        t.skinName = n,
        t
    },
    a.grp_right_i = function() {
        var t = new eui.Group;
        return this.grp_right = t,
        t.x = 227,
        t.y = 51,
        t.elementsContent = [this.scroller_task_i()],
        t
    },
    a.scroller_task_i = function() {
        var t = new eui.Scroller;
        return this.scroller_task = t,
        t.height = 316,
        t.width = 829,
        t.x = 41,
        t.y = 37,
        t.viewport = this.list_viewport_i(),
        t
    },
    a.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    a._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 14,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadTaskRewardPopSkin.exml"] = window.PeakJihadTaskRewardPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "titleReward", "btnClose", "txtCnt", "list_viewport", "scroller_item", "reward"],
        this.height = 378,
        this.width = 630,
        this.elementsContent = [this.reward_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.reward_i = function() {
        var t = new eui.Group;
        return this.reward = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.titleReward_i(), this.btnClose_i(), this.txtCnt_i(), this.scroller_item_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 378,
        t.source = "common_s9_pop_bg1_png",
        t.visible = !1,
        t.width = 630,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 11,
        t.y = 31,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 15,
        t.y = 12,
        t
    },
    i.titleReward_i = function() {
        var t = new eui.Image;
        return this.titleReward = t,
        t.source = "peak_jihad_task_reward_pop_titleReward_png",
        t.x = 48,
        t.y = 18,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_1_png",
        t.x = 577,
        t.y = -10,
        t
    },
    i.txtCnt_i = function() {
        var t = new eui.Label;
        return this.txtCnt = t,
        t.size = 18,
        t.textColor = 3492213,
        t.x = 136,
        t.y = 320,
        t
    },
    i.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.height = 200,
        t.width = 496,
        t.x = 69,
        t.y = 117,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.list_viewport_i()],
        t
    },
    i.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.horizontalCenter = 0,
        t.itemRendererSkinName = RewardItemSkin,
        t.verticalCenter = 0,
        t.layout = this._HorizontalLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 20,
        t.paddingLeft = 0,
        t
    },
    i._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i()],
        t
    },
    i._Object1_i = function() {
        var t = {};
        return t["null"] = "",
        t
    },
    i._Object2_i = function() {
        var t = {};
        return t["null"] = "null",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadTaskWeekItemSkin.exml"] = window.PeakJihadTaskWeekItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["lab_task_0", "lab_progress_0", "lab_task_1", "lab_progress_1", "reward", "grp_ani", "img_ylc", "txt_titile"],
        this.height = 96,
        this.width = 829,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.lab_task_0_i(), this.lab_progress_0_i(), this._Label1_i(), this._Image3_i(), this.lab_task_1_i(), this.lab_progress_1_i(), this._Label2_i(), this.reward_i(), this.grp_ani_i(), this.img_ylc_i(), this.txt_titile_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 96,
        t.source = "peak_jihad_task_daily_item_texture_taskbg_png",
        t.width = 829,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "peak_jihad_task_daily_item_texture_1_png",
        t.width = 30,
        t.x = 146,
        t.y = 15,
        t
    },
    i.lab_task_0_i = function() {
        var t = new eui.Label;
        return this.lab_task_0 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "完成25场自由战",
        t.textColor = 16777215,
        t.x = 198,
        t.y = 17,
        t
    },
    i.lab_progress_0_i = function() {
        var t = new eui.Label;
        return this.lab_progress_0 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "10/25",
        t.textColor = 3143013,
        t.x = 599,
        t.y = 17,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "黑体",
        t.size = 20,
        t.text = "进度：",
        t.textColor = 3143013,
        t.x = 538,
        t.y = 17,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "peak_jihad_task_daily_item_texture_1_png",
        t.width = 30,
        t.x = 146,
        t.y = 58,
        t
    },
    i.lab_task_1_i = function() {
        var t = new eui.Label;
        return this.lab_task_1 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "获得12场自由战胜利",
        t.textColor = 16777215,
        t.x = 197,
        t.y = 60,
        t
    },
    i.lab_progress_1_i = function() {
        var t = new eui.Label;
        return this.lab_progress_1 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "10/25",
        t.textColor = 3143013,
        t.x = 599,
        t.y = 60,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "黑体",
        t.size = 20,
        t.text = "进度：",
        t.textColor = 3143013,
        t.x = 538,
        t.y = 60,
        t
    },
    i.reward_i = function() {
        var t = new eui.Image;
        return this.reward = t,
        t.source = "peak_jihad_task_week_item_reward_1_png",
        t.visible = !1,
        t.x = 710,
        t.y = 19,
        t
    },
    i.grp_ani_i = function() {
        var t = new eui.Group;
        return this.grp_ani = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 32,
        t.width = 43,
        t.x = 700,
        t.y = 16,
        t
    },
    i.img_ylc_i = function() {
        var t = new eui.Image;
        return this.img_ylc = t,
        t.height = 26,
        t.source = "peak_jihad_task_week_item_img_ylc_png",
        t.width = 78,
        t.x = 706,
        t.y = 35,
        t
    },
    i.txt_titile_i = function() {
        var t = new eui.Label;
        return this.txt_titile = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "自由战模式",
        t.textColor = 4175861,
        t.x = 30,
        t.y = 39,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/RewardItemSkin.exml"] = window.RewardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["titleBg", "txtJl", "icon", "txtName", "txtCount", "common_avatar_bg_size_110_110_png", "item"],
        this.height = 144,
        this.width = 132,
        this.elementsContent = [this.item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.elementsContent = [this.titleBg_i(), this.txtJl_i(), this.common_avatar_bg_size_110_110_png_i()],
        t
    },
    i.titleBg_i = function() {
        var t = new eui.Image;
        return this.titleBg = t,
        t.height = 33,
        t.source = "peak_jihad_task_reward_pop_titleBg_png",
        t.width = 132,
        t.x = 0,
        t.y = 111,
        t
    },
    i.txtJl_i = function() {
        var t = new eui.Label;
        return this.txtJl = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "几率掉落",
        t.textColor = 16777215,
        t.x = 25,
        t.y = 118,
        t
    },
    i.common_avatar_bg_size_110_110_png_i = function() {
        var t = new eui.Group;
        return this.common_avatar_bg_size_110_110_png = t,
        t.x = 14,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.icon_i(), this.txtName_i(), this.txtCount_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 104,
        t.source = "common_icon_bg_style_66_66_png",
        t.width = 105,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "common_icon_name_bg_105_105_png",
        t.width = 103,
        t.x = 1,
        t.y = 80,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 55,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = -5.5,
        t.width = 55,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.size = 16,
        t.text = "刻印十四字...",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 94,
        t.x = 3,
        t.y = 84,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.right = 2,
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "99",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.y = 60,
        t
    },
    e
} (eui.Skin);