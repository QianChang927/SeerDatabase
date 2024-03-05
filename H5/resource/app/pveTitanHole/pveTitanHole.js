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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.tw = null,
            i.skinName = t.PlayerSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.anchorOffsetX = this.width / 2,
            this.anchorOffsetY = this.height / 2;
            var t = this.allow.y;
            this.allow.y = t - this.allow.height / 3,
            this.allow.alpha = 1,
            this.tw ? this.tw.restart() : this.tw = gsap.from(this.allow, {
                y: -10,
                alpha: .5,
                yoyo: !0,
                repeat: -1,
                duration: 1,
                ease: Sine.easeInOut
            })
        },
        i.prototype.destroy = function() {
            gsap.killTweensOf(this.allow),
            this.tw = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Player = e,
    __reflect(e.prototype, "pveTitanHole.Player")
} (pveTitanHole || (pveTitanHole = {}));
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
pveTitanHole; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.EVENT_SELECTED_DIFFICUL_STEP = "event_selected_difficul_step",
        e.EVENT_LEVEL_STEP_CHANGED = "event_level_step_changed",
        e.EVENT_UPDATE_GRID_DATA = "event_update_grid_data",
        e.EVENT_UPDATE_REWARD_STATUS = "event_update_reward_status",
        e.EVENT_UPDATE_VIEW = "event_update_view",
        e.titan_hole_update_all = "titan_hole_update_all",
        e.titan_hole_update_panel = "titan_hole_update_panel",
        e.titan_hole_close_all = "titan_hole_close_all",
        e.UPDATE_MODE_ITEMS_AND_TIPS = "UPDATE_MODE_ITEMS_AND_TIPS",
        e
    } (BaseModule);
    t.ConstantEvents = e,
    __reflect(e.prototype, "pveTitanHole.ConstantEvents")
} (pveTitanHole || (pveTitanHole = {}));
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.childPanel = null,
            t.skinName = PveTitanHoleSkin,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.destroyChild(),
            this.updateView(),
            EventManager.addEventListener(t.ConstantEvents.titan_hole_update_all, this.updateAll, this),
            EventManager.addEventListener(t.ConstantEvents.titan_hole_update_panel, this.updateView, this),
            EventManager.addEventListener(t.ConstantEvents.titan_hole_close_all, this.onClose, this),
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this.updateView, this)
        },
        i.prototype.updateAll = function() {
            var e = this;
            this.updateConfigMulitValues().then(function() {
                t.DataManger.getInstance().updateTalksValue().then(function() {
                    t.DataManger.getInstance().updateAllData(e.getMultivalue.bind(e)),
                    TimeDelayUtils.setTimeout(function() {
                        e.childPanel && e.childPanel.updateView && e.childPanel.updateView()
                    },
                    100, e)
                })
            })
        },
        i.prototype.updateView = function() {
            var e = this;
            this.updateConfigMulitValues().then(function() {
                t.DataManger.getInstance().updateTalksValue().then(function() {
                    t.DataManger.getInstance().updateAllData(e.getMultivalue.bind(e)),
                    TimeDelayUtils.setTimeout(function() {
                        t.DataManger.getInstance().getCurrentMode() ? e.childPanel instanceof t.TitanHoleLevelMain ? e.childPanel.updateView() : (e.destroyChild(), e.childPanel = new t.TitanHoleLevelMain, e.panel_group.addChild(e.childPanel)) : e.childPanel instanceof t.TitanHoleMainOpti ? e.childPanel.updateView() : (e.destroyChild(), e.childPanel = new t.TitanHoleMainOpti, e.panel_group.addChild(e.childPanel))
                    },
                    100, e)
                })
            })
        },
        i.prototype.reShow = function() {
            this.updateView()
        },
        i.prototype.destroyChild = function() {
            this.childPanel && (DisplayUtil.removeForParent(this.childPanel), this.childPanel.destroy(), this.childPanel = null)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.destroyChild()
        },
        i
    } (BaseModule);
    t.PveTitanHole = e,
    __reflect(e.prototype, "pveTitanHole.PveTitanHole")
} (pveTitanHole || (pveTitanHole = {}));
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._itemId2 = 1400153,
            t.tl = null,
            t.oriStep = 0,
            t.skinName = "TitanHoleLevelMainSkin",
            t.left = t.right = t.bottom = t.top = 0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.touch1.source = ClientConfig.getItemIcon(1400152),
            this.touch2.source = ClientConfig.getItemIcon(1400153),
            this.touch3.source = ClientConfig.getItemIcon(2500005),
            e.prototype.initBtnClose.call(this, "titan_hole_main_close_png", this,
            function() {
                EventManager.dispatchEventWith(t.ConstantEvents.titan_hole_close_all)
            },
            this),
            this.initBtnHelp(this._showHelp, this),
            this._list.itemRenderer = t.titanHoleLevelStepItem,
            ImageButtonUtil.add(this.imgBtn_selectedNd, this.end, this),
            ImageButtonUtil.add(this.imgBtn_pet, this.imaPet, this),
            ImageButtonUtil.add(this.imgBtn_cure, PetManager.cureAll, this),
            ImageButtonUtil.add(this.imgBtn_reward, this.showReward, this),
            ImageButtonUtil.add(this.imgBtn_battle, this.battle, this),
            ImageButtonUtil.add(this.handle, this.showHandle, this),
            ImageButtonUtil.add(this.touch1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: t.DataManger.getInstance().DoubleRewardCostItemID
                })
            },
            this, !1),
            ImageButtonUtil.add(this.touch2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: i._itemId2
                })
            },
            this, !1),
            ImageButtonUtil.add(this.touch3,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2500005
                })
            },
            this, !1),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this),
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_REWARD_STATUS, this._setRewardUIStatus, this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this;
            this._setDoubleItemStatus();
            for (var i = t.DataManger.getInstance().getLevelStep(), n = 1; 4 >= n; n++) this["pos_level" + n].visible = !1;
            if (this._list.dataProvider = new eui.ArrayCollection([1, 2, 3, 4]), this.txt_levelType.text = t.DataManger.getInstance().getDifficultCN(), !(0 >= i)) {
                this["pos_level" + i].visible = !0,
                this["_levelView" + i].updateView(),
                4 == i ? (this.txt_level4Times.visible = this.imgLevel4Times.visible = !0, KTool.getMultiValue([201546],
                function(t) {
                    e.txt_level4Times.text = "剩余挑战次数：" + (2 - t[0]) + "/2"
                })) : this.txt_level4Times.visible = this.imgLevel4Times.visible = !1;
                var o = t.DataManger.getInstance().getCurrentMode() || 1,
                r = config.TitanMineReward.getItems().filter(function(t) {
                    return t.type == o
                })[0]["text" + i];
                this.desc.text = r,
                this.imgBtn_battle.source = 3 == i ? "titan_hole_main_level_ima_mine_png": "titan_hole_main_level_imachanllge_png",
                this.imgBtn_battle.visible = !0,
                this.groupBottom.cacheAsBitmap = !0,
                this.oriStep != i && this.playTween(),
                this.oriStep = i
            }
        },
        i.prototype.playTween = function() {
            if (!this.tl || !this.tl.isActive()) if (this.tl) this.tl.restart();
            else {
                var e = t.DataManger.getInstance().getLevelStep();
                this.tl = new gsap.core.Timeline,
                this.tl.from(this.progress, {
                    x: -500,
                    alpha: 0,
                    duration: .5
                },
                "<"),
                this.tl.from(this.groupBottom, {
                    y: 700,
                    alpha: 0,
                    duration: .5
                },
                "<"),
                this.tl.from(this.top_icon, {
                    top: -50,
                    alpha: 0,
                    duration: .5
                },
                "<"),
                this.tl.from(this["pos_level" + e], {
                    scaleX: 1.3,
                    scaleY: 1.3,
                    alpha: 0,
                    duration: 1
                },
                "<")
            }
        },
        i.prototype.battle = function() {
            var e = this,
            i = t.DataManger.getInstance().getLevelStep();
            switch (i) {
            case 1:
            case 2:
            case 4:
                if (this.fightCmdSending) return;
                this.fightCmdSending = !0,
                t.DataManger.getInstance().c2s_go_battle().then(function() {
                    e.fightCmdSending = !1
                });
                break;
            case 3:
                this._levelView3 && (this.imgBtn_battle.visible = !1, this._levelView3.startGame())
            }
        },
        i.prototype.end = function() {
            Alert.show("现在是否更换模式？更换后当前进度将重置，当前已获得的战利品视为放弃。",
            function() {
                t.DataManger.getInstance().resetModel()
            })
        },
        i.prototype.imaPet = function() {
            ModuleManager.showModuleByID(10)
        },
        i.prototype.showReward = function() {
            PopViewManager.getInstance().openView(new t.RewardPop)
        },
        i.prototype.showHandle = function() {
            var e = this;
            if (!this._onChangeDoubleItemStatusFlag) {
                this._onChangeDoubleItemStatusFlag = !0;
                var i = "titan_hole_main_handleon_png" == this.handle.source;
                i ? t.DataManger.getInstance().c2s_setDoubleItemStatus(!1).then(function() {
                    e.toggle(),
                    e._onChangeDoubleItemStatusFlag = !1
                }) : ItemManager.getNumByID(t.DataManger.getInstance().DoubleRewardCostItemID) > 0 ? t.DataManger.getInstance().c2s_setDoubleItemStatus(!0).then(function() {
                    e.toggle(),
                    e._onChangeDoubleItemStatusFlag = !1
                }) : (BubblerManager.getInstance().showText("激励模组数量不足"), this._onChangeDoubleItemStatusFlag = !1)
            }
        },
        i.prototype.toggle = function(e) {
            void 0 === e && (e = !0);
            var i = t.DataManger.getInstance().getDoubleItemUseFlag();
            this.handle.source = i ? "titan_hole_main_handleon_png": "titan_hole_main_handleoff_png",
            e && BubblerManager.getInstance().showText("激励模组已" + (i ? "打开": "关闭"))
        },
        i.prototype.onUpdateByItemChangeEvent = function(t) {
            this._setDoubleItemStatus()
        },
        i.prototype._setRewardUIStatus = function() {
            var e = t.DataManger.getInstance().checkHaveReward();
            DisplayUtil.setEnabled(this.imgBtn_reward, e, !e)
        },
        i.prototype._setDoubleItemStatus = function() {
            var e = t.DataManger.getInstance().DoubleRewardCostItemID,
            i = ItemManager.getNumByID(e),
            n = ItemManager.getNumByID(this._itemId2),
            o = ItemManager.getNumByID(2500005);
            this.txt_count.text = i + "",
            this.txt_count2.text = n + "",
            this.txt_count3.text = o + "",
            0 >= n && SocketConnection.sendByQueue(42395, [104, 7, 0, 0]),
            this.toggle(!1)
        },
        i.prototype._showHelp = function() {
            var t = ["在泰坦矿洞中，总共会有4个阶段：", "第一阶段，击退矿洞守卫，获得泰坦之灵和刻印；", "第二阶段，在限定的回合里尽可能多的击败矿工，获得泰坦之灵和刻印；", "第三阶段，开采矿脉，获得泰坦之灵和刻印宝石；", "第四阶段，在与敌方首领的战斗中坚持10回合；共有2次挑战机会，如果全部失败，则会扣除之前获得的部分奖励！", "*在成功通关一次对应难度之下的4个阶段后，即可成功解锁该难度矿洞的扫荡功能，之后可以通过扫荡获得奖励。使用扫荡功能时，会在第三阶段自动开采可移动次数上限数量的矿脉，并在第四阶段自动击败敌方首领。"],
            e = t.join("\n"),
            i = {};
            i.str = e,
            tipsPop.TipsPop.openHelpPop(i)
        },
        i.prototype.destroy = function() {
            this.tl && this.tl.clear(),
            this.tl = null;
            for (var t = 1; 4 >= t; t++) this["_levelView" + t].destroy();
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.TitanHoleLevelMain = e,
    __reflect(e.prototype, "pveTitanHole.TitanHoleLevelMain")
} (pveTitanHole || (pveTitanHole = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function a(t) {
            try {
                _(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function _(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.tl = null,
            t._itemId2 = 1400153,
            t.updating = !1,
            t.skinName = TitanHoleMainOptiSkin,
            t.left = t.right = t.bottom = t.top = 0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.touch1.source = ClientConfig.getItemIcon(1400152),
            this.touch2.source = ClientConfig.getItemIcon(1400153),
            this.touch3.source = ClientConfig.getItemIcon(2500005),
            e.prototype.initBtnClose.call(this, "titan_hole_main_close_png", this,
            function() {
                EventManager.dispatchEventWith(t.ConstantEvents.titan_hole_close_all)
            },
            this),
            this.initBtnHelp(this._showHelp, this),
            this._mode_list.itemRenderer = t.TitanHoleModeItem,
            this._list.itemRenderer = t.TitanHoleItem;
            var n = [1, 2, 3];
            this._mode_list.dataProvider = new eui.ArrayCollection(n),
            ImageButtonUtil.add(this.handle, this.showHandle, this),
            ImageButtonUtil.add(this.ima_wipe, this.wipe, this),
            ImageButtonUtil.add(this.ima_hit, this.hitFunc, this),
            ImageButtonUtil.add(this.touch1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: t.DataManger.getInstance().DoubleRewardCostItemID
                })
            },
            this),
            ImageButtonUtil.add(this.touch2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: i._itemId2
                })
            },
            this),
            ImageButtonUtil.add(this.touch3,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2500005
                })
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this),
            EventManager.addEventListener(t.ConstantEvents.UPDATE_MODE_ITEMS_AND_TIPS, this.updateItemsTips, this),
            this.updateView(),
            this.playTween()
        },
        i.prototype.updateView = function() {
            var e = StringUtil.connectArgs("每天有{0}次进入泰坦矿洞的机会，今天已进入{1}/{2}次", t.DataManger.getInstance().DAILY_PVE_COUNT_LIMIT, ~~t.DataManger.getInstance().getDailyTimes(), t.DataManger.getInstance().DAILY_PVE_COUNT_LIMIT);
            this.txt_tips.text = e,
            this._setDoubleItemStatus(),
            this.group_cache.cacheAsBitmap = !0,
            this.top_icon.cacheAsBitmap = !0,
            this.group_top.cacheAsBitmap = !0
        },
        i.prototype.playTween = function() {
            this.tl && this.tl.isActive() || (this.tl ? this.tl.restart() : (this.tl = new gsap.core.Timeline, this.tl.from(this.group_left, {
                x: -500,
                alpha: 0,
                duration: .5
            },
            "<"), this.tl.from(this.group_bottom, {
                y: 700,
                alpha: 0,
                duration: .5
            },
            "<"), this.tl.from(this.top_icon, {
                top: -50,
                alpha: 0,
                duration: .5
            },
            "<"), this.tl.from(this.bg_1, {
                scaleX: 1.5,
                scaleY: 1.5,
                alpha: .5,
                duration: .5
            },
            "<")))
        },
        i.prototype.updateItemsTips = function() {
            var t = ~~i.curSelect.info || 1,
            e = config.TitanMineReward.getItems().filter(function(e) {
                return e.type == t
            })[0].rewardinfo,
            n = ItemManager.parseItem(e);
            this._list.dataProvider = new eui.ArrayCollection(n)
        },
        i.prototype.hitFunc = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return t.DataManger.getInstance().getDailyTimes() >= t.DataManger.getInstance().DAILY_PVE_COUNT_LIMIT ? (BubblerManager.getInstance().showText("今日进入次数已经达到上限"), [2]) : i.curSelect ? [4, t.DataManger.getInstance().c2s_selecte_mode(~~i.curSelect.info)] : [3, 2];
                    case 1:
                        e.sent(),
                        EventManager.dispatchEventWith(t.ConstantEvents.titan_hole_update_panel),
                        e.label = 2;
                    case 2:
                        return [2]
                    }
                })
            })
        },
        i.prototype.wipe = function() {
            if (t.DataManger.getInstance().getDailyTimes() >= t.DataManger.getInstance().DAILY_PVE_COUNT_LIMIT) return void BubblerManager.getInstance().showText("今日进入次数已经达到上限");
            var e = ItemManager.getNumByID(this._itemId2) + ItemManager.getNumByID(2500005);
            if (1 > e) return void BubblerManager.getInstance().showText("记忆作战模组数量不足");
            if (!this.updating) {
                var n = ~~i.curSelect.info,
                o = t.DataManger.getInstance().getUnlockMode();
                if (n > o) return void BubblerManager.getInstance().showText("请先通关当前模式");
                var r = this;
                SocketConnection.sendByQueue(42395, [104, 6, n, 0],
                function() {
                    EventManager.dispatchEventWith(t.ConstantEvents.titan_hole_update_all)
                },
                function() {
                    r.updating = !1
                })
            }
        },
        i.prototype.onUpdateByItemChangeEvent = function(t) {
            this._setDoubleItemStatus()
        },
        i.prototype._setDoubleItemStatus = function() {
            var e = t.DataManger.getInstance().DoubleRewardCostItemID,
            i = ItemManager.getNumByID(e),
            n = ItemManager.getNumByID(this._itemId2),
            o = ItemManager.getNumByID(2500005);
            this.txt_count.text = i + "",
            this.txt_count2.text = n + "",
            this.txt_count3.text = o + "",
            0 >= n && SocketConnection.sendByQueue(42395, [104, 7, 0, 0]),
            this.toggle(!1)
        },
        i.prototype._showHelp = function() {
            var t = ["在泰坦矿洞中，总共会有4个阶段：", "第一阶段，击退矿洞守卫，获得泰坦之灵和刻印；", "第二阶段，在限定的回合里尽可能多的击败矿工，获得泰坦之灵和刻印；", "第三阶段，开采矿脉，获得泰坦之灵和刻印宝石；", "第四阶段，在与敌方首领的战斗中坚持10回合；共有2次挑战机会，如果全部失败，则会扣除之前获得的部分奖励！", "*在成功通关一次对应难度之下的4个阶段后，即可成功解锁该难度矿洞的扫荡功能，之后可以通过扫荡获得奖励。使用扫荡功能时，会在第三阶段自动开采可移动次数上限数量的矿脉，并在第四阶段自动击败敌方首领。"],
            e = t.join("\n"),
            i = {};
            i.str = e,
            tipsPop.TipsPop.openHelpPop(i)
        },
        i.prototype.showHandle = function() {
            var e = this;
            if (!this._onChangeDoubleItemStatusFlag) {
                this._onChangeDoubleItemStatusFlag = !0;
                var i = "titan_hole_main_handleon_png" == this.handle.source;
                i ? t.DataManger.getInstance().c2s_setDoubleItemStatus(!1).then(function() {
                    e.toggle(),
                    e._onChangeDoubleItemStatusFlag = !1
                }) : ItemManager.getNumByID(t.DataManger.getInstance().DoubleRewardCostItemID) > 0 ? t.DataManger.getInstance().c2s_setDoubleItemStatus(!0).then(function() {
                    e.toggle(),
                    e._onChangeDoubleItemStatusFlag = !1
                }) : (BubblerManager.getInstance().showText("激励模组数量不足"), this._onChangeDoubleItemStatusFlag = !1)
            }
        },
        i.prototype.toggle = function(e) {
            void 0 === e && (e = !0);
            var i = t.DataManger.getInstance().getDoubleItemUseFlag();
            this.handle.source = i ? "titan_hole_main_handleon_png": "titan_hole_main_handleoff_png",
            e && BubblerManager.getInstance().showText("激励模组已" + (i ? "打开": "关闭"))
        },
        i.prototype.destroy = function() {
            i.curSelect && i.curSelect.destroy(),
            i.curSelect = null,
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this),
            this.tl && this.tl.clear(),
            this.tl = null
        },
        i.curSelect = null,
        i
    } (BaseModule);
    t.TitanHoleMainOpti = e,
    __reflect(e.prototype, "pveTitanHole.TitanHoleMainOpti")
} (pveTitanHole || (pveTitanHole = {}));
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this, i) || this;
            return n.skinName = t.GridSKin,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.updateView()
        },
        i.prototype.updateData = function(t) {
            this.data = t,
            this.updateView()
        },
        i.prototype.updateView = function() {
            var t = this.data;
            this.texture_null.visible = t.unlockFlag,
            this.texture_start.visible = t.StartPosFlag,
            this.texture_locked.visible = !t.unlockFlag,
            this.txt_debug.text = t.idx + ""
        },
        i.prototype.setSelectedFlag = function(t) {
            this.texture_selecet.visible = t,
            t && (this.texture_selecet.alpha = 0, egret.Tween.get(this.texture_selecet).to({
                alpha: 1
            },
            100, egret.Ease.quadOut))
        },
        i.prototype.destroy = function() {
            egret.Tween.removeTweens(this.texture_selecet),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.GridItem = e,
    __reflect(e.prototype, "pveTitanHole.GridItem")
} (pveTitanHole || (pveTitanHole = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function a(t) {
            try {
                _(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function _(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.DoubleRewardCostItemID = 1400152,
            t.DAILY_PVE_COUNT_LIMIT = 2,
            t._dataConfig = config.xml.getAnyRes("titanlode").root,
            t
        }
        return __extends(i, e),
        i.getInstance = function() {
            return i._instance || (i._instance = new i),
            i._instance
        },
        i.prototype.getSTEP_2_MONSTER_LIMIT = function() {
            for (var t, e = this._currentMode,
            i = this._dataConfig.titanlode,
            n = 0; n < i.length; n++) {
                var o = i[n];
                if (e === +o.mode && 2 === +o.step) {
                    t = +o.passarg.split(" ")[1];
                    break
                }
            }
            return t
        },
        i.prototype.updateTalksValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return t = [1, 2, 3, 4],
                        [4, core.manager.BitBuffSetManager.getInstance().getRealTimeValusAsync(t)];
                    case 1:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.getSTEP_2_REWARD_ROUND_LIMIT = function() {
            for (var t, e = this._currentMode,
            i = this._dataConfig.titanlode,
            n = 0; n < i.length; n++) {
                var o = i[n];
                if (e === +o.mode && 2 === +o.step) {
                    t = +o.passarg.split(" ")[0];
                    break
                }
            }
            return t
        },
        i.prototype.getSTEP_4_REWARD_ROUND_LIMIT = function() {
            for (var t, e = this._currentMode,
            i = this._dataConfig.titanlode,
            n = 0; n < i.length; n++) {
                var o = i[n];
                if (e === +o.mode && 4 === +o.step) {
                    t = +o.passarg;
                    break
                }
            }
            return t
        },
        i.prototype.getStepShowBossList = function() {
            for (var t = this._currentMode,
            e = this._levelStep,
            i = "",
            n = this._dataConfig.titanlode,
            o = 0; o < n.length; o++) {
                var r = n[o];
                if (t === +r.mode && +r.step === e) {
                    i = r.cltboss + "";
                    break
                }
            }
            return i.split(" ").map(function(t) {
                return~~t
            })
        },
        i.prototype.getUnlockMode = function() {
            return this._unlockMode
        },
        i.prototype.getCurrentMode = function() {
            return this._currentMode
        },
        i.prototype.getLevelStep = function() {
            return this._levelStep
        },
        i.prototype._updateSelectedDifficultStep = function(e) {
            this._currentMode = e,
            this.dispatchEventWith(t.ConstantEvents.EVENT_SELECTED_DIFFICUL_STEP)
        },
        i.prototype._updateLevelStepChanged = function(e) {
            this._levelStep = e,
            this.dispatchEventWith(t.ConstantEvents.EVENT_LEVEL_STEP_CHANGED)
        },
        i.prototype.getDailyTimes = function() {
            return this._dailyCrt
        },
        i.prototype.getDifficultCN = function() {
            var t = ["简单", "普通", "困难"];
            return t[this._currentMode - 1]
        },
        i.prototype.getStep3GridsAllData = function() {
            if (!this._gridDataLsit || 0 === this._gridDataLsit.length) {
                this._gridDataLsit = [];
                for (var t = this.getCowAndRow(), e = t.row, i = t.col, n = 0; e > n; n++) {
                    for (var o = [], r = 0; i > r; r++) {
                        var a = {};
                        a.idx = n * i + r,
                        a.StartPosFlag = 0 === a.idx,
                        a.unlockFlag = this._parseGridState(a.idx),
                        o.push(a)
                    }
                    this._gridDataLsit.push(o)
                }
            }
            return this._gridDataLsit
        },
        i.prototype._parseGridState = function(t) {
            var e = this._step3GridStateList[Math.floor(t / 32)],
            i = t % 32;
            return Boolean(e >> i & 1)
        },
        i.prototype._updateGridData = function(e) {
            var i = this.idx2RowCol(e);
            this.getStep3GridsAllData()[i.row - 1][i.col - 1].unlockFlag = this._parseGridState(e),
            this.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_GRID_DATA, !1, e)
        },
        i.prototype.getStep3GridDataByIdx = function(t) {
            var e = this.idx2RowCol(t);
            return this.getStep3GridsAllData()[e.row - 1][e.col - 1]
        },
        i.prototype.rowCol2Idx = function(t, e) {
            var i = this.getCowAndRow(),
            n = i.col;
            return (t - 1) * n + (e - 1)
        },
        i.prototype.idx2RowCol = function(t) {
            var e = this.getCowAndRow(),
            i = e.col,
            n = Math.floor(t / i),
            o = t - n * i;
            return {
                row: n + 1,
                col: o + 1
            }
        },
        i.prototype.getStep3PlayerPosIdx = function() {
            return this._step3PlayerPosIdx
        },
        i.prototype.getStep3MovedLimit = function() {
            for (var t, e = this._currentMode,
            i = this._dataConfig.titanlode,
            n = 0; n < i.length; n++) {
                var o = i[n];
                if (e === +o.mode && 3 === +o.step) {
                    t = +o.passarg;
                    break
                }
            }
            return t
        },
        i.prototype.getStep3MovedCnt = function() {
            return this._step3MovedCnt
        },
        i.prototype.getCowAndRow = function() {
            for (var t, e, i = this._dataConfig.map,
            n = this._currentMode,
            o = 0; o < i.length; o++) {
                var r = i[o];
                if (n === +r.id) {
                    e = +r.maxcnt,
                    t = +r.colcnt;
                    break
                }
            }
            var a = Math.floor(e / t);
            return {
                row: a,
                col: t
            }
        },
        i.prototype.updateAllData = function(t) {
            var e = core.constant.ValueType,
            i = t(e.FOREVER, 108059);
            this._unlockMode = i,
            this._openDoubleFlag = Boolean(t(e.BITBUF, 640)),
            this._dailyCrt = t(e.DAILY, 18724),
            this._currentMode = 255 & t(e.DAILY, 18725),
            this._levelStep = t(e.DAILY, 18725) >> 8 & 255,
            this._step2DataUseRoundCnt = 255 & t(e.DAILY, 18726),
            this._step2DataKillMonsterCnt = t(e.DAILY, 18726) >> 8 & 255,
            this._step3MovedCnt = 255 & t(e.DAILY, 18727),
            this._step4LoseOlineFlag = t(e.DAILY, 18748);
            var n = t(e.DAILY, 18727) >> 8 & 255;
            this._step3PlayerPosIdx = Math.max(0, n - 1),
            this._step3GridStateList = [],
            this._step3GridStateList.push(t(e.DAILY, 18728), t(e.DAILY, 18729)),
            this._gridDataLsit = [],
            this._currentMyRewardList = [],
            this._tiTanItemCnt = t(e.DAILY, 18737);
            for (var o = 18739,
            r = 18743,
            a = o; r >= a; a++) {
                for (var s = 0,
                _ = 0; 4 > _; _++) {
                    var l = 8 * _,
                    u = t(e.DAILY, a);
                    if (s = u >> l & 255, !(s > 0)) break;
                    this._currentMyRewardList.push(s)
                }
                if (0 === s) break
            }
        },
        i.prototype.getTiTanCnt = function() {
            return this._tiTanItemCnt
        },
        i.prototype.getMyRewardIds = function() {
            return this._currentMyRewardList
        },
        i.prototype.checkHaveReward = function() {
            return this._currentMyRewardList.length > 0 || this._tiTanItemCnt > 0
        },
        i.prototype.c2s_selecte_mode = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [104, 1, t, 0])];
                    case 1:
                        return e = i.sent(),
                        ++this._dailyCrt,
                        this._updateLevelStepChanged(this._levelStep + 1),
                        this._updateSelectedDifficultStep(t),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.c2s_go_battle = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return egret.lifecycle.stage.touchChildren = !1,
                    egret.setTimeout(function() {
                        egret.lifecycle.stage.touchChildren = !0
                    },
                    this, 1e3),
                    [2, SocketConnection.sendWithPromise(CommandID.FIGHT_H5_PVE_BOSS, [104, this._currentMode, this._levelStep])]
                })
            })
        },
        i.prototype.c2s_setDoubleItemStatus = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(i) {
                    return [2, SocketConnection.sendWithPromise(42395, [104, 4, Number(t), 0]).then(function(t) {
                        e._openDoubleFlag = !e._openDoubleFlag
                    })]
                })
            })
        },
        i.prototype.resetModel = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [104, 3, 0, 0])];
                    case 1:
                        return e.sent(),
                        this._resetData(),
                        EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW),
                        [2]
                    }
                })
            })
        },
        i.prototype._resetData = function() {
            this._currentMode = 0,
            this._levelStep = 0,
            this._step2DataUseRoundCnt = 0,
            this._step2DataKillMonsterCnt = 0,
            this._step3MovedCnt = 0,
            this._step3PlayerPosIdx = 0,
            this._step3GridStateList = [],
            this._gridDataLsit = [],
            this._currentMyRewardList = [],
            this._tiTanItemCnt = 0,
            this._step4LoseOlineFlag = 0
        },
        i.prototype.c2s_get_final_reward = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return FightManager.isFighting ? [2, Promise.resolve()] : (EventManager.addEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this._resetDataCache, this), [4, SocketConnection.sendWithPromise(42395, [104, 5, 0, 0])]);
                    case 1:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._resetDataCache = function() {
            EventManager.removeEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this._resetDataCache, this),
            this._resetData(),
            EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
        },
        i.prototype.getStep4LoseOnlineState = function() {
            return this._step4LoseOlineFlag
        },
        i.prototype.c2s_Battle_step3 = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, o, r, a;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return i = e + 1,
                        [4, SocketConnection.sendWithPromise(42395, [104, 2, i, 0])];
                    case 1:
                        return n = s.sent(),
                        o = n.data,
                        r = o.readUnsignedInt(),
                        r = this.getStep3MapRewardIdById(r),
                        this._step3PlayerPosIdx = e,
                        ++this._step3MovedCnt,
                        this.changeStep3GridStatus(e),
                        r > 0 && (a = this.getRewardById(r), 1400352 === a.realid ? this._tiTanItemCnt += a.realcnt: this._currentMyRewardList.push(r), EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_REWARD_STATUS)),
                        [2, Promise.resolve(r)]
                    }
                })
            })
        },
        i.prototype.changeStep3GridStatus = function(t) {
            var e = BitUtil.setBit(this._step3GridStateList[Math.floor(t / 32)], t % 32);
            this._step3GridStateList[Math.floor(t / 32)] = e,
            this._updateGridData(t)
        },
        i.prototype.Step3GameOver = function() {
            this._updateLevelStepChanged(this._levelStep + 1),
            EventManager.dispatchEventWith(t.ConstantEvents.titan_hole_update_all)
        },
        i.prototype.getStep2UseRound = function() {
            return this._step2DataUseRoundCnt
        },
        i.prototype.getStep2KillMonsterCnt = function() {
            return this._step2DataKillMonsterCnt
        },
        i.prototype.getStep3MapRewardIdById = function(t) {
            if (0 === t) return 0;
            for (var e = this._dataConfig.map,
            i = 0; i < e.length; i++) {
                var n = e[i],
                o = n.Show;
                if (this._currentMode === +n.id) for (var r = 0; r < o.length; r++) {
                    var a = o[r];
                    if (t === +a.id) return + a.rewardid
                }
            }
            return 0
        },
        i.prototype.getAllRewardIds = function() {
            for (var t = [], e = [], i = this._dataConfig.rewards.reward, n = 0; n < i.length; n++) {
                var o = i[n],
                r = +o.id,
                a = +o.realid;
                1400352 === a || e.indexOf(o) >= 0 || (t.push(r), e.push(a))
            }
            return t
        },
        i.prototype.getDoubleItemUseFlag = function() {
            return this._openDoubleFlag
        },
        i.prototype.getRewardById = function(t) {
            for (var e = this._dataConfig.rewards.reward,
            i = 0; i < e.length; i++) {
                var n = e[i];
                if (t === +n.id) return {
                    id: +n.id,
                    type: +n.type,
                    realid: +n.realid,
                    realcnt: +n.realcnt
                }
            }
            return null
        },
        i
    } (egret.EventDispatcher);
    t.DataManger = e,
    __reflect(e.prototype, "pveTitanHole.DataManger")
} (pveTitanHole || (pveTitanHole = {}));
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            i.skinName = t.RewardItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {},
        i.prototype.dataChanged = function() {
            var e = t.DataManger.getInstance().getRewardById(this.data);
            1 === e.type ? (this.imgMark.source = ItemXMLInfo.getIconURL(e.realid), this.txtLvl.text = "Lv." + GemsXMLInfo.getLv(e.realid)) : (this.imgMark.source = CountermarkXMLInfo.getIconURL(e.realid), this.txtLvl.text = "Lv.1");
            var i = ItemXMLInfo.getName(e.realid);
            this.txtName.text = StringUtil.parseStrLimitLen(i, 6)
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.RewardItem = e,
    __reflect(e.prototype, "pveTitanHole.RewardItem")
} (pveTitanHole || (pveTitanHole = {}));
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.info = 0 / 0,
            t.skinName = TitanHoleModeItemSkin,
            t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this,
            function() {
                t.TitanHoleMainOpti.curSelect != e && (t.TitanHoleMainOpti.curSelect.select_ima.visible = !1, t.TitanHoleMainOpti.curSelect = e, t.TitanHoleMainOpti.curSelect.select_ima.visible = !0, EventManager.dispatchEventWith(t.ConstantEvents.UPDATE_MODE_ITEMS_AND_TIPS))
            },
            this, !1, !1)
        },
        i.prototype.dataChanged = function() {
            if (e.prototype.dataChanged.call(this), this.data) {
                this.info = ~~this.data;
                var i = ["简单模式", "普通模式", "困难模式"];
                this.level.text = "0" + this.info,
                this.modeText.text = i[this.info - 1];
                var n = ~~t.DataManger.getInstance().getUnlockMode();
                this.currentState = n >= this.info ? "got": n + 1 == this.info ? "go": "cant",
                this.touchEnabled = "cant" != this.currentState,
                this.touchChildren = !1;
                var o = ~~t.DataManger.getInstance().getCurrentMode() || 1;
                o == this.info ? (t.TitanHoleMainOpti.curSelect = this, t.TitanHoleMainOpti.curSelect.select_ima.visible = !0, EventManager.dispatchEventWith(t.ConstantEvents.UPDATE_MODE_ITEMS_AND_TIPS)) : this.select_ima.visible = !1,
                this.cacheAsBitmap = !0
            }
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.TitanHoleModeItem = e,
    __reflect(e.prototype, "pveTitanHole.TitanHoleModeItem");
    var i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.info = 1,
            t.skinName = titanHoleLevelStepItemSkin,
            t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            if (e.prototype.dataChanged.call(this), this.info = this.data, this.info) {
                this.title.text = ["打开通路", "清扫矿区", "矿藏开采", "安全撤离"][this.info - 1];
                var i = t.DataManger.getInstance().getLevelStep();
                this.currentState = this.info < i ? "got": this.info == i ? "go": "cant",
                this.cacheAsBitmap = !0
            }
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.titanHoleLevelStepItem = i,
    __reflect(i.prototype, "pveTitanHole.titanHoleLevelStepItem");
    var n = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = TitanHoleItemSkin,
            e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            ImageButtonUtil.add(e.icon,
            function() {
                5 != ~~e.info.id && tipsPop.TipsPop.openItemPop({
                    id: ~~e.info.id
                })
            },
            e),
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.info = this.data,
            this.info && (this.icon.source = ClientConfig.getItemIcon(this.info.id), this.cacheAsBitmap = !0)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.TitanHoleItem = n,
    __reflect(n.prototype, "pveTitanHole.TitanHoleItem")
} (pveTitanHole || (pveTitanHole = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function a(t) {
            try {
                _(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function _(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Level1ViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, o, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return e = t.DataManger.getInstance().getStepShowBossList(),
                        i = ClientConfig.getfightPetPng(PetXMLInfo.getRealId(e[0]) + ""),
                        [4, RES.getResByUrl(i)];
                    case 1:
                        return n = r.sent(),
                        this.boss_left.source = n,
                        this.boss_left.width = n.textureWidth,
                        this.boss_left.height = n.textureHeight,
                        o = ClientConfig.getfightPetPng(PetXMLInfo.getRealId(e[1]) + ""),
                        [4, RES.getResByUrl(o)];
                    case 2:
                        return n = r.sent(),
                        this.boss_right.source = n,
                        this.boss_right.width = n.textureWidth,
                        this.boss_right.height = n.textureHeight,
                        this.boss_left.visible = this.boss_right.visible = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level1View = e,
    __reflect(e.prototype, "pveTitanHole.Level1View", ["pveTitanHole.ILevelView"])
} (pveTitanHole || (pveTitanHole = {}));
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Level2ViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.updateView = function() {
            var e = this,
            i = t.DataManger.getInstance().getStepShowBossList(),
            n = t.DataManger.getInstance().getSTEP_2_MONSTER_LIMIT(),
            o = t.DataManger.getInstance().getSTEP_2_REWARD_ROUND_LIMIT(),
            r = t.DataManger.getInstance().getStep2UseRound(),
            a = t.DataManger.getInstance().getStep2KillMonsterCnt();
            this.txtRound.text = r + "/" + o,
            this.txtDef.text = a + "/" + n;
            var s = ClientConfig.getfightPetPng(PetXMLInfo.getRealId(i[0]) + "");
            RES.getResByUrl(s,
            function(t) {
                e.icon_boss.source = t,
                e.icon_boss.width = t.textureWidth,
                e.icon_boss.height = t.textureHeight,
                e.cacheAsBitmap = !0
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level2View = e,
    __reflect(e.prototype, "pveTitanHole.Level2View")
} (pveTitanHole || (pveTitanHole = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function a(t) {
            try {
                _(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function _(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._isGameStart = !1,
            i._besize = 0,
            i._includeIdx = [],
            i.skinName = t.Level3ViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this._createGame(),
            this._initEvent()
        },
        i.prototype._initEvent = function() {},
        i.prototype._removeEvents = function() {},
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return this._updateMovedCnt(),
                    [2, Promise.resolve()]
                })
            })
        },
        i.prototype._updateMovedCnt = function() {
            var e = t.DataManger.getInstance().getStep3MovedLimit() - t.DataManger.getInstance().getStep3MovedCnt();
            this.txt_tips.text = "注意：你无法进入已经走过的区域！剩余行走次数：" + e
        },
        i.prototype._createGame = function() {
            for (var e = t.DataManger.getInstance().getStep3GridsAllData(), i = 0; i < e.length; i++) for (var n = e[i], o = 0; o < n.length; o++) {
                var r = new t.GridItem(n[o]);
                r.name = "grid_" + n[o].idx,
                r.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this),
                r.x = 71 * o,
                r.y = 71 * i,
                this.gameNode.addChild(r)
            }
            this._player = new t.Player,
            this.gameNode.addChild(this._player);
            var a = this._getPlayerPos(t.DataManger.getInstance().getStep3PlayerPosIdx());
            this._player.x = a.x,
            this._player.y = a.y,
            this._player.visible = !1
        },
        i.prototype._getPlayerPos = function(t) {
            var e = this.gameNode.getChildByName("grid_" + t);
            return new egret.Point(e.x + e.width / 2, e.y + e.height / 2)
        },
        i.prototype.startGame = function() {
            this._player.visible = !0,
            this._isGameStart = !0,
            t.DataManger.getInstance().changeStep3GridStatus(0),
            this.setNearGridGuide(),
            this._checkGameOver() && this._gameOver()
        },
        i.prototype.setNearGridGuide = function() {
            this._includeIdx = [];
            var e, i, n, o, r, a = t.DataManger.getInstance().getStep3PlayerPosIdx(),
            s = t.DataManger.getInstance().idx2RowCol(a),
            _ = s.row - 1,
            l = s.col - 1,
            u = t.DataManger.getInstance().getCowAndRow();
            l > 0 && (r = t.DataManger.getInstance().rowCol2Idx(s.row, s.col - 1), e = this.gameNode.getChildByName("grid_" + r), e.data.unlockFlag || (e.setSelectedFlag(!0), this._includeIdx.push(r))),
            l < u.col - 1 && (r = t.DataManger.getInstance().rowCol2Idx(s.row, s.col + 1), i = this.gameNode.getChildByName("grid_" + r), i.data.unlockFlag || (i.setSelectedFlag(!0), this._includeIdx.push(r))),
            _ > 0 && (r = t.DataManger.getInstance().rowCol2Idx(s.row - 1, s.col), n = this.gameNode.getChildByName("grid_" + r), n.data.unlockFlag || (n.setSelectedFlag(!0), this._includeIdx.push(r))),
            _ < u.row - 1 && (r = t.DataManger.getInstance().rowCol2Idx(s.row + 1, s.col), o = this.gameNode.getChildByName("grid_" + r), o.data.unlockFlag || (o.setSelectedFlag(!0), this._includeIdx.push(r)))
        },
        i.prototype._checkGameOver = function() {
            var e = this._includeIdx.length <= 0,
            i = t.DataManger.getInstance().getStep3MovedCnt() >= t.DataManger.getInstance().getStep3MovedLimit();
            return i || e
        },
        i.prototype._clearNearGridGuide = function() {
            for (var e = t.DataManger.getInstance().getCowAndRow(), i = 0; i < e.col * e.row; i++) {
                var n = this.gameNode.getChildByName("grid_" + i);
                n.setSelectedFlag(!1)
            }
        },
        i.prototype._onTouchItem = function(e) {
            var i = this;
            if (!this._isGameStart) return void BubblerManager.getInstance().showText("请先点击开始采矿!");
            if (!this._moveStausFlag) {
                this._moveStausFlag = !0;
                var n = ~~e.currentTarget.name.split("_")[1];
                t.DataManger.getInstance().getStep3GridDataByIdx(n).unlockFlag ? (BubblerManager.getInstance().showText("只能在未解锁的位置上行走!"), this._moveStausFlag = !1) : this._includeIdx.indexOf(n) > -1 ? this.playerMove(n).then(function() {
                    return i._updateMovedCnt(),
                    i.setNearGridGuide(),
                    i._checkGameOver() ? void i._gameOver() : void(i._moveStausFlag = !1)
                }) : (BubblerManager.getInstance().showText("只能在临近的位置上行走"), this._moveStausFlag = !1)
            }
        },
        i.prototype._gameOver = function() {
            Alarm.show("开采结束，你可以点击已获得战利品按钮查看开采到的资源",
            function() {
                t.DataManger.getInstance().Step3GameOver()
            })
        },
        i.prototype.playerMove = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, o, r, a;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return [4, t.DataManger.getInstance().c2s_Battle_step3(e)];
                    case 1:
                        return i = s.sent(),
                        this._clearNearGridGuide(),
                        n = this._getPlayerPos(e),
                        [4, common.TweenUtil.TweenToPromise(egret.Tween.get(this._player).to({
                            x: n.x,
                            y: n.y
                        },
                        200, egret.Ease.sineOut))];
                    case 2:
                        return s.sent(),
                        o = this.gameNode.getChildByName("grid_" + e),
                        o.updateData(t.DataManger.getInstance().getStep3GridDataByIdx(e)),
                        0 === i ? BubblerManager.getInstance().showText("未获得任何道具") : (r = t.DataManger.getInstance().getRewardById(i), a = "恭喜获得{0}x{1}!", BubblerManager.getInstance().showText(StringUtil.connectArgs(a, ItemXMLInfo.getName(r.realid), r.realcnt))),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._flyItem = function(t, e) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return [2, Promise.resolve()]
                })
            })
        },
        Object.defineProperty(i.prototype, "besize", {
            get: function() {
                return this._besize
            },
            set: function(t) {},
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.destroy = function() {
            for (; this.gameNode.numChildren > 0;) {
                var t = this.gameNode.getChildAt(0);
                t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this),
                t.destroy()
            }
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level3View = e,
    __reflect(e.prototype, "pveTitanHole.Level3View", ["pveTitanHole.ILevelView"])
} (pveTitanHole || (pveTitanHole = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function a(t) {
            try {
                _(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function _(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, _ = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Level4ViewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return e = t.DataManger.getInstance().getStepShowBossList(),
                        i = ClientConfig.getfightPetPng(PetXMLInfo.getRealId(e[0]) + ""),
                        [4, RES.getResByUrl(i)];
                    case 1:
                        return n = o.sent(),
                        this.icon_boss.source = n,
                        this.icon_boss.width = n.textureWidth,
                        this.icon_boss.height = n.textureHeight,
                        this.icon_boss.anchorOffsetX = n.textureWidth / 2,
                        this.icon_boss.anchorOffsetY = n.textureHeight,
                        this.icon_boss.visible = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level4View = e,
    __reflect(e.prototype, "pveTitanHole.Level4View", ["pveTitanHole.ILevelView"])
} (pveTitanHole || (pveTitanHole = {}));
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
pveTitanHole; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.RewardPopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.txt_1.text = "泰坦之灵：" + t.DataManger.getInstance().getTiTanCnt(),
            this.scroller_item.viewport = this.viewport_list,
            this.viewport_list.itemRenderer = t.RewardItem,
            this.viewport_list.dataProvider = new eui.ArrayCollection(t.DataManger.getInstance().getMyRewardIds()),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        i.prototype.initEvents = function() {
            this.viewport_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchItemTap, this)
        },
        i.prototype.removeEvents = function() {
            this.viewport_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchItemTap, this)
        },
        i.prototype._upDateView = function() {},
        i.prototype._onTouchItemTap = function(e) {
            var i, n = t.DataManger.getInstance().getRewardById(e.item);
            1 === n.type ? (i = {},
            i.id = n.realid, tipsPop.TipsPop.openItemPop(i)) : (i = {},
            i.ins = n.realid, tipsPop.TipsPop.openCounterMarkPop(i))
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.RewardPop = e,
    __reflect(e.prototype, "pveTitanHole.RewardPop")
} (pveTitanHole || (pveTitanHole = {}));
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
pveTitanHole; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = TitanHoleMoppingPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                e._canMop ? (e.hide(), SocketConnection.sendByQueue(42395, [104, 6, e._type, 0],
                function() {
                    EventManager.dispatchEventWith("titan_hole_update_all")
                })) : (e.txt.text = "需要在主界面勾选【记忆作战模组】后，才可以进行一键\n扫荡哦！", e.btnOneTap.visible = e.btnEnter.visible = !1, e.btnConfirm.visible = !0)
            },
            this),
            ImageButtonUtil.add(this.btnConfirm, this.hide, this),
            ImageButtonUtil.add(this.btnEnter,
            function() {
                e.hide(),
                EventManager.dispatchEventWith("titan_hole_start_fight", !1, e._type)
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        e.prototype.setData = function(e) {
            t.prototype.setData.call(this, e),
            this._type = e.type,
            this._canMop = e.canMop
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.TitanHoleMoppingPop = e,
    __reflect(e.prototype, "pveTitanHole.TitanHoleMoppingPop")
} (pveTitanHole || (pveTitanHole = {})),
window.pveTitanHole = window.pveTitanHole || {};
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
generateEUI.paths["resource/eui_skins/item/GridSkin.exml"] = window.pveTitanHole.GridSKin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["texture_null", "texture_locked", "texture_start", "texture_selecet", "txt_debug"],
        this.height = 68,
        this.width = 69,
        this.elementsContent = [this.texture_null_i(), this.texture_locked_i(), this.texture_start_i(), this.texture_selecet_i(), this.txt_debug_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.texture_null_i = function() {
        var t = new eui.Image;
        return this.texture_null = t,
        t.height = 65,
        t.source = "level3_view_texture_null_png",
        t.width = 65,
        t.x = 2,
        t.y = 2,
        t
    },
    i.texture_locked_i = function() {
        var t = new eui.Image;
        return this.texture_locked = t,
        t.height = 68,
        t.source = "level3_view_texture_locked_png",
        t.width = 69,
        t.x = 0,
        t.y = 0,
        t
    },
    i.texture_start_i = function() {
        var t = new eui.Image;
        return this.texture_start = t,
        t.height = 65,
        t.source = "level3_view_texture_start_png",
        t.visible = !1,
        t.width = 65,
        t.x = 2,
        t.y = 2,
        t
    },
    i.texture_selecet_i = function() {
        var t = new eui.Image;
        return this.texture_selecet = t,
        t.anchorOffsetX = 35.5,
        t.anchorOffsetY = 35.5,
        t.height = 71,
        t.source = "level3_view_texture_selecet_png",
        t.visible = !1,
        t.width = 71,
        t.x = 34.5,
        t.y = 34,
        t
    },
    i.txt_debug_i = function() {
        var t = new eui.Label;
        return this.txt_debug = t,
        t.right = 0,
        t.size = 24,
        t.text = "Label",
        t.textAlign = "right",
        t.top = 0,
        t.visible = !1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PlayerSkin.exml"] = window.pveTitanHole.PlayerSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["player", "allow"],
        this.height = 54,
        this.width = 48,
        this.elementsContent = [this.player_i(), this.allow_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.player_i = function() {
        var t = new eui.Image;
        return this.player = t,
        t.source = "level3_view_texture_my_png",
        t.x = -8,
        t.y = -5,
        t
    },
    i.allow_i = function() {
        var t = new eui.Image;
        return this.allow = t,
        t.height = 14,
        t.source = "level3_view_texture_allow_png",
        t.width = 32,
        t.x = 7,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/RewardItemSkin.exml"] = window.pveTitanHole.RewardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgMark", "txtName", "txtLvl"],
        this.height = 131,
        this.width = 104,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this._Image1_i(), this.imgMark_i(), this.txtName_i(), this.txtLvl_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_reward_pop_itembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgMark_i = function() {
        var t = new eui.Image;
        return this.imgMark = t,
        t.height = 70,
        t.horizontalCenter = 0,
        t.verticalCenter = -3.5,
        t.width = 70,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -1,
        t.size = 16,
        t.text = "刻印名字最多",
        t.textColor = 9025023,
        t.y = 108.058,
        t
    },
    i.txtLvl_i = function() {
        var t = new eui.Label;
        return this.txtLvl = t,
        t.fontFamily = "MFShangHei",
        t.right = 9,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1327750,
        t.text = "LV.0",
        t.textColor = 7667455,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/TitanHoleItemSkin.exml"] = window.TitanHoleItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txt_tips"],
        this.height = 73,
        this.width = 73,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.txt_tips_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 73,
        t.source = "common_icon_bg_style_1_png",
        t.width = 73,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.anchorOffsetX = 25,
        t.anchorOffsetY = 23.5,
        t.height = 50,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 50,
        t
    },
    i.txt_tips_i = function() {
        var t = new eui.Label;
        return this.txt_tips = t,
        t.bottom = 1,
        t.fontFamily = "MFShangHei",
        t.right = 3,
        t.size = 10,
        t.text = "1",
        t.textColor = 9157375,
        t.visible = !1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/titanHoleLevelStepItemSkin.exml"] = window.titanHoleLevelStepItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["go", "got", "title"],
        this.currentState = "go",
        this.height = 58,
        this.width = 208,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("cant", [new eui.SetProperty("go", "visible", !1), new eui.SetProperty("got", "visible", !1), new eui.SetProperty("title", "textColor", 9873617)]), new eui.State("go", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("got", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("go", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.go_i(), this.got_i(), this.title_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.source = "titan_hole_main_level_cant_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.go_i = function() {
        var t = new eui.Image;
        return this.go = t,
        t.source = "titan_hole_main_level_go_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.got_i = function() {
        var t = new eui.Image;
        return this.got = t,
        t.source = "titan_hole_main_level_got_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Label;
        return this.title = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "打开通路",
        t.textColor = 4187130,
        t.x = 30,
        t.y = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/TitanHoleModeItemSkin.exml"] = window.TitanHoleModeItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["mode_mask", "select_ima", "mode_bg", "lock", "wipe", "go", "got", "level", "modeText"],
        this.height = 77,
        this.width = 231,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("cant", [new eui.SetProperty("mode_bg", "visible", !1), new eui.SetProperty("wipe", "visible", !1), new eui.SetProperty("go", "visible", !1), new eui.SetProperty("got", "visible", !1), new eui.SetProperty("level", "visible", !0), new eui.SetProperty("modeText", "textColor", 9480405)]), new eui.State("go", [new eui.SetProperty("mode_mask", "visible", !1), new eui.SetProperty("mode_bg", "visible", !0), new eui.SetProperty("lock", "visible", !1), new eui.SetProperty("wipe", "visible", !1), new eui.SetProperty("got", "visible", !1)]), new eui.State("got", [new eui.SetProperty("mode_mask", "visible", !1), new eui.SetProperty("lock", "visible", !1), new eui.SetProperty("wipe", "visible", !1), new eui.SetProperty("go", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this.mode_mask_i(), this.select_ima_i(), this.mode_bg_i(), this.lock_i(), this.wipe_i(), this.go_i(), this.got_i(), this.level_i(), this.modeText_i()],
        t
    },
    i.mode_mask_i = function() {
        var t = new eui.Image;
        return this.mode_mask = t,
        t.source = "titan_hole_main_mode_mask_png",
        t.x = 10,
        t.y = 10,
        t
    },
    i.select_ima_i = function() {
        var t = new eui.Image;
        return this.select_ima = t,
        t.height = 77,
        t.scale9Grid = new egret.Rectangle(20, 19, 8, 9),
        t.source = "titan_hole_main_selected_png",
        t.visible = !0,
        t.width = 231,
        t.x = 0,
        t.y = 0,
        t
    },
    i.mode_bg_i = function() {
        var t = new eui.Image;
        return this.mode_bg = t,
        t.source = "titan_hole_main_mode_bg_png",
        t.x = 11,
        t.y = 10,
        t
    },
    i.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.source = "titan_hole_main_lock_png",
        t.x = 186,
        t.y = 28,
        t
    },
    i.wipe_i = function() {
        var t = new eui.Image;
        return this.wipe = t,
        t.source = "titan_hole_main_wipe_png",
        t.x = 185,
        t.y = 29,
        t
    },
    i.go_i = function() {
        var t = new eui.Image;
        return this.go = t,
        t.source = "titan_hole_main_go_png",
        t.x = 181,
        t.y = 28,
        t
    },
    i.got_i = function() {
        var t = new eui.Image;
        return this.got = t,
        t.source = "titan_hole_main_got_png",
        t.x = 183,
        t.y = 28,
        t
    },
    i.level_i = function() {
        var t = new eui.Label;
        return this.level = t,
        t.alpha = .4,
        t.fontFamily = "REEJI",
        t.size = 28,
        t.text = "02",
        t.textColor = 5290698,
        t.x = 20,
        t.y = 19,
        t
    },
    i.modeText_i = function() {
        var t = new eui.Label;
        return this.modeText = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "普通模式",
        t.textColor = 4187130,
        t.x = 37,
        t.y = 28,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/level/Level1ViewSkin.exml"] = window.pveTitanHole.Level1ViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["boss_left", "group_left", "boss_right", "group_right"],
        this.height = 436,
        this.width = 703,
        this.elementsContent = [this.group_left_i(), this.group_right_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.group_left_i = function() {
        var t = new eui.Group;
        return this.group_left = t,
        t.height = 425,
        t.width = 305,
        t.x = 0,
        t.y = 11,
        t.elementsContent = [this._Image1_i(), this.boss_left_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.source = "titan_hole_main_level_level1_bg_png",
        t.x = 0,
        t
    },
    i.boss_left_i = function() {
        var t = new eui.Image;
        return this.boss_left = t,
        t.bottom = 114,
        t.height = 336,
        t.horizontalCenter = -52,
        t.width = 343,
        t
    },
    i.group_right_i = function() {
        var t = new eui.Group;
        return this.group_right = t,
        t.height = 425,
        t.width = 305,
        t.x = 398,
        t.y = 11,
        t.elementsContent = [this._Image2_i(), this.boss_right_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.source = "titan_hole_main_level_level1_bg_png",
        t.x = 0,
        t
    },
    i.boss_right_i = function() {
        var t = new eui.Image;
        return this.boss_right = t,
        t.bottom = 114,
        t.height = 336,
        t.horizontalCenter = 17,
        t.scaleX = -1,
        t.scaleY = 1,
        t.width = 343,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/level/Level2ViewSkin.exml"] = window.pveTitanHole.Level2ViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtRound", "txtDef", "icon_boss"],
        this.height = 425,
        this.width = 739,
        this.elementsContent = [this._Image1_i(), this.txtRound_i(), this.txtDef_i(), this.icon_boss_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_level_level2_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtRound_i = function() {
        var t = new eui.Label;
        return this.txtRound = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 16514896,
        t.x = 628,
        t.y = 148,
        t
    },
    i.txtDef_i = function() {
        var t = new eui.Label;
        return this.txtDef = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 16514896,
        t.x = 628,
        t.y = 207,
        t
    },
    i.icon_boss_i = function() {
        var t = new eui.Image;
        return this.icon_boss = t,
        t.bottom = 119,
        t.horizontalCenter = -140,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/level/Level3ViewSkin.exml"] = window.pveTitanHole.Level3ViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_tips", "gameNode"],
        this.height = 421,
        this.width = 841,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_tips_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 421,
        t.scale9Grid = new egret.Rectangle(61, 43, 282, 342),
        t.source = "level3_view_level_bg_png",
        t.width = 841,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_level_level3_bg_png",
        t.x = 63.26,
        t.y = -1.6,
        t
    },
    i.txt_tips_i = function() {
        var t = new eui.Label;
        return this.txt_tips = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "注意：你无法进入已经走过的区域！剩余行走次数：00",
        t.textColor = 11181180,
        t.x = 51,
        t.y = 3,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 352,
        t.width = 780,
        t.x = 41,
        t.y = 40,
        t.elementsContent = [this.gameNode_i()],
        t
    },
    i.gameNode_i = function() {
        var t = new eui.Group;
        return this.gameNode = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/level/Level4ViewSkin.exml"] = window.pveTitanHole.Level4ViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon_boss"],
        this.height = 477,
        this.width = 616,
        this.elementsContent = [this._Image1_i(), this.icon_boss_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_level_level4_bg_png",
        t.x = 0,
        t.y = 52,
        t
    },
    i.icon_boss_i = function() {
        var t = new eui.Image;
        return this.icon_boss = t,
        t.bottom = 121,
        t.height = 336,
        t.horizontalCenter = -3,
        t.width = 343,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/RewardPopSkin.exml"] = window.pveTitanHole.RewardPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnClose", "txt_1", "txt_types", "viewport_list", "scroller_item"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.bg_i(), this.btnClose_i(), this.txt_1_i(), this.txt_types_i(), this.scroller_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "titan_hole_main_reward_pop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "titan_hole_main_reward_pop_btnclose_png",
        t.x = 712,
        t.y = 0,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "泰坦之灵：120000",
        t.textColor = 12834813,
        t.x = 58,
        t.y = 63,
        t
    },
    i.txt_types_i = function() {
        var t = new eui.Label;
        return this.txt_types = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "刻印、刻印宝石：",
        t.textColor = 12834813,
        t.x = 58,
        t.y = 110,
        t
    },
    i.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.height = 271,
        t.width = 648,
        t.x = 57.53,
        t.y = 151,
        t.viewport = this.viewport_list_i(),
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.height = 200,
        t.itemRendererSkinName = pveTitanHole.RewardItemSkin,
        t.width = 200,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 32,
        t.orientation = "rows",
        t.requestedColumnCount = 5,
        t.verticalGap = 24,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/TitanHoleMoppingPopSkin.exml"] = window.TitanHoleMoppingPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "txt", "txtLabel", "btnOneTap", "txtLabel_2", "btnEnter", "txtLabel_3", "btnConfirm"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.txt_i(), this.btnOneTap_i(), this.btnEnter_i(), this.btnConfirm_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 4,
        t.y = 22,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 566,
        t.y = 0,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -13,
        t.lineSpacing = 12,
        t.size = 18,
        t.text = "您当前已经解锁该难度矿洞的扫荡功能，可以通过消耗【记忆\n作战模组】*1直接通过扫荡获得奖励。",
        t.textAlign = "center",
        t.textColor = 2500699,
        t.width = 486,
        t.y = 109,
        t
    },
    i.btnOneTap_i = function() {
        var t = new eui.Group;
        return this.btnOneTap = t,
        t.x = 102,
        t.y = 286,
        t.elementsContent = [this._Image3_i(), this.txtLabel_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "common_btn_bg_style_blue_1_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "一键扫荡",
        t.textColor = 16777215,
        t.x = 36,
        t.y = 12,
        t
    },
    i.btnEnter_i = function() {
        var t = new eui.Group;
        return this.btnEnter = t,
        t.x = 330,
        t.y = 286,
        t.elementsContent = [this._Image4_i(), this.txtLabel_2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_2_i = function() {
        var t = new eui.Label;
        return this.txtLabel_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "进入挑战",
        t.textColor = 9261339,
        t.x = 37,
        t.y = 14,
        t
    },
    i.btnConfirm_i = function() {
        var t = new eui.Group;
        return this.btnConfirm = t,
        t.visible = !1,
        t.x = 216,
        t.y = 286,
        t.elementsContent = [this._Image5_i(), this.txtLabel_3_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_3_i = function() {
        var t = new eui.Label;
        return this.txtLabel_3 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "确认",
        t.textColor = 9261339,
        t.x = 63,
        t.y = 14,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveTitanHoleSkin.exml"] = window.PveTitanHoleSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["panel_group"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.panel_group_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.panel_group_i = function() {
        var t = new eui.Group;
        return this.panel_group = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.elementsContent = [this._Image1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_ui_bg_3_jpg",
        t.top = 0,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TitanHoleLevelMainSkin.exml"] = window.TitanHoleLevelMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "progress", "_levelView1", "pos_level1", "_levelView2", "pos_level2", "_levelView3", "pos_level3", "_levelView4", "pos_level4", "imgBtn_selectedNd", "imgBtn_reward", "imgBtn_battle", "imgBtn_pet", "imgBtn_cure", "imgLevel4Times", "desc", "txt_levelType", "txt_level4Times", "groupBottom", "btnClose", "tips", "touch2", "touch1", "touch3", "txt_count", "txt_count2", "txt_count3", "handle", "top_icon"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this.pos_level1_i(), this.pos_level2_i(), this.pos_level3_i(), this.pos_level4_i(), this.groupBottom_i(), this.btnClose_i(), this.tips_i(), this.top_icon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "titan_hole_main_level_bg_jpg",
        t.top = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.source = "titan_hole_main_top_bg_png",
        t.top = 0,
        t.visible = !1,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 340,
        t.horizontalCenter = -425,
        t.width = 254,
        t.y = 64,
        t.elementsContent = [this._Image3_i(), this.progress_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 324,
        t.source = "titan_hole_main_level_info_bg_png",
        t.width = 254,
        t.x = 0,
        t.y = 0,
        t
    },
    i.progress_i = function() {
        var t = new eui.Scroller;
        return this.progress = t,
        t.height = 297,
        t.width = 208,
        t.x = 21,
        t.y = 30,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = titanHoleLevelStepItemSkin,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 21,
        t
    },
    i.pos_level1_i = function() {
        var t = new eui.Group;
        return this.pos_level1 = t,
        t.height = 436,
        t.horizontalCenter = 126.5,
        t.verticalCenter = -54,
        t.visible = !1,
        t.width = 703,
        t.elementsContent = [this._levelView1_i()],
        t
    },
    i._levelView1_i = function() {
        var t = new pveTitanHole.Level1View;
        return this._levelView1 = t,
        t.skinName = "pveTitanHole.Level1ViewSkin",
        t.x = 0,
        t.y = 0,
        t
    },
    i.pos_level2_i = function() {
        var t = new eui.Group;
        return this.pos_level2 = t,
        t.height = 425,
        t.horizontalCenter = 131.5,
        t.verticalCenter = -48.5,
        t.visible = !1,
        t.width = 739,
        t.elementsContent = [this._levelView2_i()],
        t
    },
    i._levelView2_i = function() {
        var t = new pveTitanHole.Level2View;
        return this._levelView2 = t,
        t.skinName = "pveTitanHole.Level2ViewSkin",
        t.x = 0,
        t.y = 0,
        t
    },
    i.pos_level3_i = function() {
        var t = new eui.Group;
        return this.pos_level3 = t,
        t.height = 421,
        t.horizontalCenter = 121.5,
        t.verticalCenter = -95.5,
        t.visible = !1,
        t.width = 841,
        t.elementsContent = [this._levelView3_i()],
        t
    },
    i._levelView3_i = function() {
        var t = new pveTitanHole.Level3View;
        return this._levelView3 = t,
        t.skinName = "pveTitanHole.Level3ViewSkin",
        t.x = 0,
        t.y = 0,
        t
    },
    i.pos_level4_i = function() {
        var t = new eui.Group;
        return this.pos_level4 = t,
        t.height = 477,
        t.horizontalCenter = 106,
        t.verticalCenter = -64.5,
        t.visible = !1,
        t.width = 616,
        t.elementsContent = [this._levelView4_i()],
        t
    },
    i._levelView4_i = function() {
        var t = new pveTitanHole.Level4View;
        return this._levelView4 = t,
        t.skinName = "pveTitanHole.Level4ViewSkin",
        t.x = 0,
        t.y = 0,
        t
    },
    i.groupBottom_i = function() {
        var t = new eui.Group;
        return this.groupBottom = t,
        t.horizontalCenter = .5,
        t.visible = !0,
        t.y = 429.117,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.imgBtn_selectedNd_i(), this.imgBtn_reward_i(), this.imgBtn_battle_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this.imgLevel4Times_i(), this.desc_i(), this.txt_levelType_i(), this.txt_level4Times_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 188,
        t.scale9Grid = new egret.Rectangle(363, 4, 363, 238),
        t.source = "titan_hole_main_infobg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_level_finfo_bg_png",
        t.x = 139,
        t.y = 19.179,
        t
    },
    i.imgBtn_selectedNd_i = function() {
        var t = new eui.Image;
        return this.imgBtn_selectedNd = t,
        t.source = "titan_hole_main_level_imaover_png",
        t.x = 272,
        t.y = 44.179,
        t
    },
    i.imgBtn_reward_i = function() {
        var t = new eui.Image;
        return this.imgBtn_reward = t,
        t.source = "titan_hole_main_level_imareward_png",
        t.x = 854,
        t.y = 3,
        t
    },
    i.imgBtn_battle_i = function() {
        var t = new eui.Image;
        return this.imgBtn_battle = t,
        t.horizontalCenter = 413.5,
        t.source = "titan_hole_main_level_imachanllge_png",
        t.verticalCenter = 51,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "titan_hole_main_level_imapet_png",
        t.x = 40,
        t.y = 27.179,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "titan_hole_main_level_imacure_png",
        t.x = 40,
        t.y = 107.179,
        t
    },
    i.imgLevel4Times_i = function() {
        var t = new eui.Image;
        return this.imgLevel4Times = t,
        t.source = "titan_hole_main_txttimebg_png",
        t.x = 848,
        t.y = 86,
        t
    },
    i.desc_i = function() {
        var t = new eui.Label;
        return this.desc = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字\n文字文字文字文字文字文字文字",
        t.textColor = 9157375,
        t.width = 626,
        t.x = 149,
        t.y = 126.179,
        t
    },
    i.txt_levelType_i = function() {
        var t = new eui.Label;
        return this.txt_levelType = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "普通",
        t.textColor = 4187130,
        t.x = 150,
        t.y = 51.179,
        t
    },
    i.txt_level4Times_i = function() {
        var t = new eui.Label;
        return this.txt_level4Times = t,
        t.fontFamily = "REEJI",
        t.size = 24,
        t.text = "剩余挑战次数：2/2",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 854,
        t.y = 90,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Group;
        return this.btnClose = t,
        t.height = 48,
        t.visible = !1,
        t.width = 205,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_close_png",
        t.visible = !0,
        t.x = 14,
        t.y = 5,
        t
    },
    i.tips_i = function() {
        var t = new eui.Image;
        return this.tips = t,
        t.left = 259,
        t.source = "titan_hole_main_help_png",
        t.top = 13,
        t.visible = !1,
        t
    },
    i.top_icon_i = function() {
        var t = new eui.Group;
        return this.top_icon = t,
        t.height = 34,
        t.right = 31,
        t.top = 12,
        t.width = 312.078,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this.touch2_i(), this.touch1_i(), this.touch3_i(), this.txt_count_i(), this.txt_count2_i(), this.txt_count3_i(), this.handle_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.right = 66,
        t.source = "titan_hole_main_icon_ima_png",
        t.visible = !0,
        t.y = 7,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.right = 195.07799999999997,
        t.source = "titan_hole_main_icon_ima_png",
        t.visible = !0,
        t.y = 7,
        t
    },
    i.touch2_i = function() {
        var t = new eui.Image;
        return this.touch2 = t,
        t.height = 30,
        t.visible = !0,
        t.width = 30,
        t.x = 10,
        t.y = 2,
        t
    },
    i.touch1_i = function() {
        var t = new eui.Image;
        return this.touch1 = t,
        t.height = 30,
        t.visible = !0,
        t.width = 30,
        t.x = 132,
        t.y = 2,
        t
    },
    i.touch3_i = function() {
        var t = new eui.Image;
        return this.touch3 = t,
        t.height = 30,
        t.visible = !0,
        t.width = 30,
        t.x = -113,
        t.y = 2,
        t
    },
    i.txt_count_i = function() {
        var t = new eui.Label;
        return this.txt_count = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 42.96100000000001,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.y = 10,
        t
    },
    i.txt_count2_i = function() {
        var t = new eui.Label;
        return this.txt_count2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -80.03899999999999,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.y = 10,
        t
    },
    i.txt_count3_i = function() {
        var t = new eui.Label;
        return this.txt_count3 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -210.039,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.y = 10,
        t
    },
    i.handle_i = function() {
        var t = new eui.Image;
        return this.handle = t,
        t.horizontalCenter = 132.461,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "titan_hole_main_handleoff_png",
        t.verticalCenter = 0,
        t.x = -113.92200000000003,
        t.y = 298.00000000000006,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TitanHoleMainOptiSkin.exml"] = window.TitanHoleMainOptiSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg_1", "btnClose", "tips", "group_top", "_mode_list", "group_left", "txt_tips", "ima_hit", "ima_wipe", "group_cache", "_list", "group_bottom", "touch2", "touch3", "touch1", "txt_count", "txt_count2", "txt_count3", "handle", "top_icon"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.bg_1_i(), this._Image2_i(), this.group_top_i(), this._Group1_i(), this.group_bottom_i(), this.top_icon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_3_jpg",
        t.top = 0,
        t
    },
    i.bg_1_i = function() {
        var t = new eui.Image;
        return this.bg_1 = t,
        t.horizontalCenter = 103.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "titan_hole_main_bg_1_png",
        t.y = 4,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "titan_hole_main_bg_mask_png",
        t.top = 0,
        t.touchEnabled = !1,
        t
    },
    i.group_top_i = function() {
        var t = new eui.Group;
        return this.group_top = t,
        t.left = 0,
        t.top = 0,
        t.visible = !1,
        t.elementsContent = [this._Image3_i(), this.btnClose_i(), this.tips_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_top_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Group;
        return this.btnClose = t,
        t.height = 48,
        t.width = 205,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_close_png",
        t.visible = !0,
        t.x = 14,
        t.y = 5,
        t
    },
    i.tips_i = function() {
        var t = new eui.Image;
        return this.tips = t,
        t.source = "titan_hole_main_help_png",
        t.x = 259,
        t.y = 13,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -433.5,
        t.y = 97,
        t.elementsContent = [this.group_left_i()],
        t
    },
    i.group_left_i = function() {
        var t = new eui.Group;
        return this.group_left = t,
        t.height = 252,
        t.width = 239,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this._Scroller1_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_info_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 237.244,
        t.width = 232,
        t.x = 4,
        t.y = 9.51,
        t.viewport = this._mode_list_i(),
        t
    },
    i._mode_list_i = function() {
        var t = new eui.List;
        return this._mode_list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    i.group_bottom_i = function() {
        var t = new eui.Group;
        return this.group_bottom = t,
        t.height = 243,
        t.horizontalCenter = 0,
        t.width = 1089,
        t.y = 362,
        t.elementsContent = [this.group_cache_i(), this._Scroller2_i()],
        t
    },
    i.group_cache_i = function() {
        var t = new eui.Group;
        return this.group_cache = t,
        t.height = 243,
        t.horizontalCenter = 0,
        t.width = 1089,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.txt_tips_i(), this._Image7_i(), this._Image8_i(), this.ima_hit_i(), this.ima_wipe_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_infobg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_tips_i = function() {
        var t = new eui.Label;
        return this.txt_tips = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "每天有00次进入泰坦矿洞的机会，今天已进入00/00次",
        t.textColor = 9157375,
        t.width = 331,
        t.x = 722.108,
        t.y = 66,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_title1_png",
        t.x = 702,
        t.y = 26,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "titan_hole_main_title3_png",
        t.x = 39,
        t.y = 26,
        t
    },
    i.ima_hit_i = function() {
        var t = new eui.Image;
        return this.ima_hit = t,
        t.source = "titan_hole_main_ima_hit_png",
        t.x = 740,
        t.y = 174,
        t
    },
    i.ima_wipe_i = function() {
        var t = new eui.Image;
        return this.ima_wipe = t,
        t.source = "titan_hole_main_ima_wipe_png",
        t.x = 903,
        t.y = 174,
        t
    },
    i._Scroller2_i = function() {
        var t = new eui.Scroller;
        return t.height = 163,
        t.width = 529,
        t.x = 60,
        t.y = 65,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.requestedColumnCount = 6,
        t
    },
    i.top_icon_i = function() {
        var t = new eui.Group;
        return this.top_icon = t,
        t.height = 34,
        t.right = 31,
        t.top = 12,
        t.width = 312.078,
        t.elementsContent = [this._Image9_i(), this._Image10_i(), this.touch2_i(), this.touch3_i(), this.touch1_i(), this.txt_count_i(), this.txt_count2_i(), this.txt_count3_i(), this.handle_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.right = 66,
        t.source = "titan_hole_main_icon_ima_png",
        t.visible = !0,
        t.y = 7,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.right = 195.07799999999997,
        t.source = "titan_hole_main_icon_ima_png",
        t.visible = !0,
        t.y = 7,
        t
    },
    i.touch2_i = function() {
        var t = new eui.Image;
        return this.touch2 = t,
        t.height = 30,
        t.visible = !0,
        t.width = 30,
        t.x = 10,
        t.y = 2,
        t
    },
    i.touch3_i = function() {
        var t = new eui.Image;
        return this.touch3 = t,
        t.height = 30,
        t.visible = !0,
        t.width = 30,
        t.x = -110,
        t.y = 2,
        t
    },
    i.touch1_i = function() {
        var t = new eui.Image;
        return this.touch1 = t,
        t.height = 30,
        t.visible = !0,
        t.width = 30,
        t.x = 132,
        t.y = 2,
        t
    },
    i.txt_count_i = function() {
        var t = new eui.Label;
        return this.txt_count = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 42.96100000000001,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.y = 10,
        t
    },
    i.txt_count2_i = function() {
        var t = new eui.Label;
        return this.txt_count2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -80.03899999999999,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.y = 10,
        t
    },
    i.txt_count3_i = function() {
        var t = new eui.Label;
        return this.txt_count3 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -203.039,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.y = 10,
        t
    },
    i.handle_i = function() {
        var t = new eui.Image;
        return this.handle = t,
        t.horizontalCenter = 132.461,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "titan_hole_main_handleoff_png",
        t.verticalCenter = 0,
        t.x = -113.92200000000003,
        t.y = 298.00000000000006,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/toggleButtonSkin.exml"] = window.pveTitanHole.toggleButtonSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = [],
        this.height = 22,
        this.width = 45,
        this.elementsContent = [this._Image1_i(), this._Image2_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "titan_hole_main_off_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "titan_hole_main_off_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "titan_hole_main_off_png")]), new eui.State("upAndSelected", [new eui.SetProperty("_Image2", "horizontalCenter", 11)]), new eui.State("downAndSelected", [new eui.SetProperty("_Image2", "horizontalCenter", 11)]), new eui.State("disabledAndSelected", [new eui.SetProperty("_Image2", "horizontalCenter", 11)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.source = "titan_hole_main_on_png",
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return this._Image2 = t,
        t.horizontalCenter = -11.5,
        t.source = "titan_hole_main_handle_png",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TitanHoleMainSkin.exml"] = window.pveTitanHole.TitanHoleMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "npc", "imgBtn_step2", "imgBtn_step1", "imgBtn_step0", "grp_Btn", "grp_ready_down", "title_left", "tipsbg", "txt_tips", "grp_ready_up", "grp_ready_show", "pos_level1", "pos_level2", "pos_level3", "pos_level4", "imgBtn_pet", "imgBtn_selectedNd", "imgBtn_cure", "grp_petBtn", "rb_1", "rb_2", "rb_3", "rb_4", "progress", "imgBtn_reward", "imgBtn_battle", "img_reddot", "txt_levelType", "grp_down", "grp_level_show", "img_btn_close", "txt_count", "icon1", "toggle_doubleAward", "txt_count2", "icon2", "toggle_mopping", "img_help", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grp_ready_show_i(), this.grp_level_show_i(), this.top_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "level11_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "level11_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "level12_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "level12_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "level13_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "level13_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "level14_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "level14_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    a = e.prototype;
    return a.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 1,
        t.left = 0,
        t.right = 0,
        t.source = "titan_hole_main_bg1_png",
        t.top = -1,
        t
    },
    a.grp_ready_show_i = function() {
        var t = new eui.Group;
        return this.grp_ready_show = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.touchEnabled = !1,
        t.visible = !1,
        t.elementsContent = [this.npc_i(), this.grp_ready_down_i(), this.title_left_i(), this.grp_ready_up_i()],
        t
    },
    a.npc_i = function() {
        var t = new eui.Image;
        return this.npc = t,
        t.height = 332,
        t.horizontalCenter = 352,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "titan_hole_main_npc_png",
        t.verticalCenter = 21,
        t.width = 326,
        t
    },
    a.grp_ready_down_i = function() {
        var t = new eui.Group;
        return this.grp_ready_down = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.elementsContent = [this._Image1_i(), this.grp_Btn_i()],
        t
    },
    a._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 221,
        t.left = 0,
        t.right = 0,
        t.source = "titan_hole_main_bg2_png",
        t.y = 0,
        t
    },
    a.grp_Btn_i = function() {
        var t = new eui.Group;
        return this.grp_Btn = t,
        t.horizontalCenter = 8,
        t.verticalCenter = 44,
        t.width = 876,
        t.elementsContent = [this.imgBtn_step2_i(), this.imgBtn_step1_i(), this.imgBtn_step0_i()],
        t
    },
    a.imgBtn_step2_i = function() {
        var t = new eui.Image;
        return this.imgBtn_step2 = t,
        t.height = 87,
        t.source = "titan_hole_main_difficult_locked_png",
        t.width = 292,
        t.x = 573,
        t.y = 0,
        t
    },
    a.imgBtn_step1_i = function() {
        var t = new eui.Image;
        return this.imgBtn_step1 = t,
        t.source = "titan_hole_main_normal_locked_png",
        t.visible = !0,
        t.x = 294,
        t
    },
    a.imgBtn_step0_i = function() {
        var t = new eui.Image;
        return this.imgBtn_step0 = t,
        t.source = "titan_hole_main_simple_locked_png",
        t.x = 8,
        t
    },
    a.title_left_i = function() {
        var t = new eui.Image;
        return this.title_left = t,
        t.bottom = 149,
        t.height = 101,
        t.left = 14,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "titan_hole_main_img_js_png",
        t.width = 484,
        t
    },
    a.grp_ready_up_i = function() {
        var t = new eui.Group;
        return this.grp_ready_up = t,
        t.horizontalCenter = 0,
        t.verticalCenter = -231.5,
        t.elementsContent = [this.tipsbg_i(), this.txt_tips_i()],
        t
    },
    a.tipsbg_i = function() {
        var t = new eui.Image;
        return this.tipsbg = t,
        t.height = 31,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "titan_hole_main_tipsbg_png",
        t.width = 714,
        t.x = 0,
        t.y = 0,
        t
    },
    a.txt_tips_i = function() {
        var t = new eui.Label;
        return this.txt_tips = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "每天有00次进入泰坦矿洞的机会，今天已进入00/00次",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 525,
        t.x = 65,
        t.y = 6,
        t
    },
    a.grp_level_show_i = function() {
        var t = new eui.Group;
        return this.grp_level_show = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.touchEnabled = !1,
        t.visible = !0,
        t.elementsContent = [this.pos_level1_i(), this.pos_level2_i(), this.pos_level3_i(), this.pos_level4_i(), this.grp_petBtn_i(), this.progress_i(), this.grp_down_i()],
        t
    },
    a.pos_level1_i = function() {
        var t = new eui.Group;
        return this.pos_level1 = t,
        t.height = 0,
        t.horizontalCenter = -502,
        t.verticalCenter = -185,
        t.width = 0,
        t
    },
    a.pos_level2_i = function() {
        var t = new eui.Group;
        return this.pos_level2 = t,
        t.horizontalCenter = -368,
        t.verticalCenter = -185,
        t
    },
    a.pos_level3_i = function() {
        var t = new eui.Group;
        return this.pos_level3 = t,
        t.horizontalCenter = -480,
        t.verticalCenter = -290,
        t
    },
    a.pos_level4_i = function() {
        var t = new eui.Group;
        return this.pos_level4 = t,
        t.horizontalCenter = -341,
        t.verticalCenter = -185,
        t
    },
    a.grp_petBtn_i = function() {
        var t = new eui.Group;
        return this.grp_petBtn = t,
        t.bottom = 96,
        t.height = 194,
        t.left = 13,
        t.touchEnabled = !1,
        t.width = 57,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_selectedNd_i(), this.imgBtn_cure_i()],
        t
    },
    a.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 57,
        t.source = "level1_imgBtn_pet_png",
        t.width = 57,
        t.x = 0,
        t.y = 68,
        t
    },
    a.imgBtn_selectedNd_i = function() {
        var t = new eui.Image;
        return this.imgBtn_selectedNd = t,
        t.height = 57,
        t.source = "level1_view_imgBtn_re_png",
        t.width = 57,
        t.x = 0,
        t.y = 0,
        t
    },
    a.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 57,
        t.source = "level1_imgBtn_cure_png",
        t.width = 57,
        t.x = 0,
        t.y = 137,
        t
    },
    a.progress_i = function() {
        var t = new eui.Group;
        return this.progress = t,
        t.horizontalCenter = 8.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.verticalCenter = -233,
        t.elementsContent = [this.rb_1_i(), this.rb_2_i(), this.rb_3_i(), this.rb_4_i()],
        t
    },
    a.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "GrpbtnlevelStp1",
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    a.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "GrpbtnlevelStp2",
        t.value = "2",
        t.x = 193,
        t.y = 0,
        t.skinName = n,
        t
    },
    a.rb_3_i = function() {
        var t = new eui.RadioButton;
        return this.rb_3 = t,
        t.groupName = "GrpbtnlevelStp3",
        t.value = "3",
        t.x = 385,
        t.y = 0,
        t.skinName = o,
        t
    },
    a.rb_4_i = function() {
        var t = new eui.RadioButton;
        return this.rb_4 = t,
        t.groupName = "GrpbtnlevelStp4",
        t.value = "4",
        t.x = 577,
        t.y = 0,
        t.skinName = r,
        t
    },
    a.grp_down_i = function() {
        var t = new eui.Group;
        return this.grp_down = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.elementsContent = [this._Image2_i(), this.imgBtn_reward_i(), this.imgBtn_battle_i(), this.img_reddot_i(), this.txt_levelType_i()],
        t
    },
    a._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 117,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(549, 149, 54, 34),
        t.source = "titan_hole_main_bg2_png",
        t.y = 0,
        t
    },
    a.imgBtn_reward_i = function() {
        var t = new eui.Image;
        return this.imgBtn_reward = t,
        t.height = 40,
        t.source = "level1_imgBtn_reward_png",
        t.width = 160,
        t.x = 213,
        t.y = 61,
        t
    },
    a.imgBtn_battle_i = function() {
        var t = new eui.Image;
        return this.imgBtn_battle = t,
        t.bottom = 16,
        t.height = 87,
        t.right = 19,
        t.source = "level1_imgBtn_battle_png",
        t.width = 248,
        t
    },
    a.img_reddot_i = function() {
        var t = new eui.Image;
        return this.img_reddot = t,
        t.height = 27,
        t.source = "level4_view_img_reddot_png",
        t.touchEnabled = !1,
        t.width = 27,
        t.x = 355,
        t.y = 50,
        t
    },
    a.txt_levelType_i = function() {
        var t = new eui.Label;
        return this.txt_levelType = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "当前难度：简单",
        t.textColor = 16777215,
        t.x = 27,
        t.y = 69,
        t
    },
    a.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.touchEnabled = !1,
        t.visible = !0,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this.img_btn_close_i(), this._Group1_i(), this._Group2_i(), this.img_help_i()],
        t
    },
    a._Image3_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "common_top_bg_style1_png",
        t.y = 0,
        t
    },
    a._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "titan_hole_main_title_png",
        t.width = 124,
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
    a._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.verticalCenter = 0,
        t.visible = !0,
        t.elementsContent = [this._Label1_i(), this.txt_count_i(), this.icon1_i(), this.toggle_doubleAward_i()],
        t
    },
    a._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "激励模组：",
        t.textColor = 16777215,
        t.x = 38,
        t.y = 9,
        t
    },
    a.txt_count_i = function() {
        var t = new eui.Label;
        return this.txt_count = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.x = 128,
        t.y = 9,
        t
    },
    a.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 50,
        t.scaleX = .7,
        t.scaleY = .7,
        t.source = "titan_hole_main_icon1_png",
        t.width = 50,
        t.x = 0,
        t.y = 0,
        t
    },
    a.toggle_doubleAward_i = function() {
        var t = new eui.ToggleSwitch;
        return this.toggle_doubleAward = t,
        t.label = "ToggleButton",
        t.skinName = "pveTitanHole.toggleButtonSkin",
        t.x = 169,
        t.y = 5,
        t
    },
    a._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 269,
        t.y = 9,
        t.elementsContent = [this._Label2_i(), this.txt_count2_i(), this.icon2_i(), this.toggle_mopping_i()],
        t
    },
    a._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "记忆作战模组：",
        t.textColor = 16777215,
        t.x = 37,
        t.y = 7,
        t
    },
    a.txt_count2_i = function() {
        var t = new eui.Label;
        return this.txt_count2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.x = 163,
        t.y = 7,
        t
    },
    a.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 33,
        t.source = "titan_hole_main_icon1_png",
        t.width = 33,
        t.x = 0,
        t.y = 0,
        t
    },
    a.toggle_mopping_i = function() {
        var t = new eui.ToggleSwitch;
        return this.toggle_mopping = t,
        t.label = "ToggleButton",
        t.skinName = "pveTitanHole.toggleButtonSkin",
        t.x = 204,
        t.y = 5,
        t
    },
    a.img_help_i = function() {
        var t = new eui.Image;
        return this.img_help = t,
        t.source = "common_help_icon_png",
        t.x = 237,
        t.y = 8,
        t
    },
    e
} (eui.Skin);