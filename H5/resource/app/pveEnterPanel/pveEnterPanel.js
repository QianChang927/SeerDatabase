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
    return new(i || (i = Promise))(function(r, o) {
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
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
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
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
                o = i[1],
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
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourceMarkItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                if (3 != i._info.curTab && ItemManager.getNumByID(i._info.cfg.coinid) < i._info.cfg.price) return void Alarm.show("所需" + ItemXMLInfo.getName(i._info.cfg.coinid) + "不足！");
                var e = {};
                e.ins = i._info.cfg,
                e.caller = i,
                e.callBack = function(e, n) {
                    SocketConnection.sendByQueue(42395, [109, i._info.cfg.id, n, 0],
                    function(e) {
                        EventManager.dispatchEventWith(t.PanelConst.EVENT_UPDATE_ITEM_DATA)
                    })
                },
                ModuleManager.showModuleByID(1, e)
            },
            this, !1),
            ImageButtonUtil.add(this.itemIcon,
            function() {
                var t = {};
                t.id = i._info.cfg.realid,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            this.cacheAsBitmap = !0
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, t, e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return this.itemIcon.visible = !0,
                        this.achieveIcon.visible = !1,
                        this.grpTime.visible = !1,
                        t = this._info.cfg.count ? this._info.cfg.count >= 1e4 ? Math.floor(this._info.cfg.count / 1e4) + "万": this._info.cfg.count >= 1e3 ? Math.floor(this._info.cfg.count / 1e3) + "千": this._info.cfg.count: 1,
                        this.txt_itemName.text = StringUtil.parseStrLimitLen(ItemXMLInfo.getName(this._info.cfg.realid), 8),
                        this.txt_itemNum.text = t + "",
                        this.itemIcon.source = ClientConfig.getItemIcon(this._info.cfg.realid),
                        this.coin.source = ClientConfig.getItemIcon(this._info.cfg.coinid),
                        this.txt_cost.text = this._info.cfg.price + "",
                        this.grpTag.visible = this._info.isDiscount,
                        this._info.cfg.Limittype ? (this.txt_limit.visible = !0, this._info.cfg.UserInfoId ? [4, KTool.getMultiValueAsync([this._info.cfg.UserInfoId])] : [3, 2]) : [3, 4];
                    case 1:
                        return e = n.sent(),
                        t = this._info.cfg.UserInfoBitPos ? KTool.getBit(e[0], this._info.cfg.UserInfoBitPos) : e[0],
                        [3, 3];
                    case 2:
                        t = this._info.userInfo,
                        n.label = 3;
                    case 3:
                        return i = ["每日", "每周", "每月", "永久"],
                        this.txt_limit.text = i[this._info.cfg.Limittype - 1] + "限兑：" + Math.min(t, this._info.cfg.LimitCnt) + "/" + this._info.cfg.LimitCnt,
                        t >= this._info.cfg.LimitCnt && DisplayUtil.setEnabled(this.btnBuy, !1),
                        [3, 5];
                    case 4:
                        this.txt_limit.visible = !1,
                        n.label = 5;
                    case 5:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i
    } (BaseItemRenderer);
    t.PveResourceItemItem = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceItemItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
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
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
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
                o = i[1],
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
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n._type = i,
            n._setTimeOutFlag = 0,
            n.skinName = t.PveEnterPanelSkin,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.rbg_tab = this.rb_0.group,
            1 == this._type ? (this.grp_rb.visible = !1, this._curPage = 3, this.title.source = "pve_enter_panel_title_2_png", this.left_down.visible = !1) : (this._curPage = this.rbg_tab.selectedValue = 1, this.title.source = "pve_enter_panel_title_1_png", this.left_down.visible = !0),
            this.setPage(),
            this._initEvents()
        },
        i.prototype.setPage = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r, o = this;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        t = [],
                        e = config.PveEnter.getItems().filter(function(t) {
                            return t.kind == o._curPage && (t.isShow || window.DEBUG)
                        }),
                        e.sort(function(t, e) {
                            return t.order - e.order
                        });
                        for (i in e) n = {},
                        n.cfg = e[i],
                        1 == e[i].showType ? n.isOpen = !0 : n.isOpen = this._checkOpen(e[i]),
                        t.push(n);
                        return t.sort(function(t, e) {
                            return t.isOpen && e.isOpen ? 0 : t.isOpen && !e.isOpen ? -1 : 1
                        }),
                        this._scrl.stopAnimation(),
                        3 == this._curPage ? (SocketConnection.sendByQueue(41389, [3],
                        function(e) {
                            var i = e.data;
                            i.position = 0;
                            for (var n in t) t[n].isOpen = !0;
                            o._list.itemRenderer = egret.getDefinitionByName("pveEnterPanel.PveEnterItemType" + o._curPage),
                            o._list.dataProvider = new eui.ArrayCollection(t),
                            o.btnTask.visible = !1
                        }), [2]) : 5 != this._curPage ? [3, 3] : [4, PveSptManager.init()];
                    case 1:
                        return s.sent(),
                        r = PveSptManager,
                        [4, KTool.getPlayerInfoValueAsync([PveSptManager._lastEnterInfoAttr])];
                    case 2:
                        r.lastEnterInfo = s.sent()[0],
                        t.push(null),
                        s.label = 3;
                    case 3:
                        return this._list.itemRenderer = egret.getDefinitionByName("pveEnterPanel.PveEnterItemType" + this._curPage),
                        this._list.dataProvider = new eui.ArrayCollection(t),
                        this.btnTask.visible = 5 == this._curPage && PveSptManager.taskUnlockState > 0,
                        [2]
                    }
                })
            })
        },
        i.prototype._initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.img_btn_close,
            function() {
                t.onClose()
            },
            this),
            ImageButtonUtil.add(this.imgBtn_reward,
            function() {
                5 == t._curPage ? ModuleManager.showModuleByID(36, {
                    type: 1
                }) : ModuleManager.showModuleByID(36)
            },
            this),
            ImageButtonUtil.add(this.btnTask,
            function() {
                ModuleManager.showModule("pveSpt", ["pve_spt"], null, "PveSptTask")
            },
            this),
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener("event_jump_to_pve", this._onTouchTapRightItem, this),
            EventManager.addEventListener(PveSptManager.EVENT_CLOSE_GALAXY, this.setPage, this),
            EventManager.addEventListener(PveSptManager.EVENT_GOTO_TASK, this.gotoTask, this, !1)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.removeEventListener("event_jump_to_pve", this._onTouchTapRightItem, this),
            EventManager.removeEventListener(PveSptManager.EVENT_CLOSE_GALAXY, this.setPage, this),
            EventManager.removeEventListener(PveSptManager.EVENT_GOTO_TASK, this.gotoTask, this, !1)
        },
        i.prototype.gotoTask = function(t) {
            var e = t.data;
            ModuleManager.showModule("pveSpt", ["pve_spt"], {
                id: e.galaxyId,
                difficulty: e.difficulty,
                jump: e.planetId
            },
            "PveSptGalaxy")
        },
        i.prototype.onChangeTab = function() {
            this._curPage = ~~this.rbg_tab.selectedValue,
            this.setPage()
        },
        i.prototype._onTouchTapRightItem = function(t) {
            var e = t.data;
            if (e.moduleID > 0) {
                if (e.showType > 1 && !this._checkOpen(e)) return void Alarm.show("副本已经关闭");
                var i;
                if (e.openParam && (i = KTool.evalPram(e.openParam)), e.statLog) {
                    var n = e.statLog.split(",");
                    StatLogger.log(n[0], n[1], n[2])
                }
                window.DEBUG || e.isOpen ? ModuleManager.showModuleByID(e.moduleID, i) : Alarm.show("暂未开放")
            } else Alarm.show("暂未开放")
        },
        i.prototype._checkOpen = function(t) {
            var e = SystemTimerManager.sysBJDate;
            if (2 === t.showType) {
                for (var i = e.getDay(), n = t.timeLimit.split("*"), r = 0; r < n.length; r++) if (i === ~~n[r]) return ! 0
            } else if (3 === t.showType) {
                var n = t.timeLimit.split("*"),
                o = SystemTimerManager.checkTimeLimitByBJDate(n);
                if ("" !== o) return ! 0
            }
            return ! 1
        },
        i.prototype.show = function() {
            e.prototype.show.call(this)
        },
        i.prototype.hide = function() {
            e.prototype.hide.call(this)
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PveEnterPanelOld = e,
    __reflect(e.prototype, "pveEnterPanel.PveEnterPanelOld")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemLeftPageSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.list_reward.itemRenderer = t.RewardItem,
            this._rewardsArry = new eui.ArrayCollection,
            this.list_reward.dataProvider = this._rewardsArry,
            ImageButtonUtil.add(this.grp_item,
            function() {
                var t = new egret.Event("event_jump_to_pve", !1, !1, e.data.cfg);
                EventManager.dispatchEvent(t)
            },
            this, !0, !0, this._onCheck.bind(this)),
            this.list_reward.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this._updateView()
        },
        i.prototype._onCheck = function(t) {
            for (var e = this.list_reward.numChildren,
            i = 0; e > i; i++) {
                var n = this.list_reward.getChildAt(i),
                r = t.stageX,
                o = t.stageY,
                s = n.localToGlobal(),
                a = new egret.Rectangle(s.x, s.y, n.width, n.height);
                if (a.contains(r, o)) return ! 1
            }
            return ! 0
        },
        i.prototype.setData = function(t) {
            this.data = t,
            this._updateView()
        },
        i.prototype._updateView = function() {
            if (this.data) {
                var t = this.data,
                e = t.cfg;
                if (this.title.source = "resource/assets/pve/title/big/" + e.res + ".png", this._rewardsArry) {
                    var i = e.reward || "";
                    if ("" === i) this._rewardsArry.replaceAll([]);
                    else {
                        var n = core.gameUtil.RewardDataFormat.parseRewardStyle2(i);
                        this._rewardsArry.replaceAll(n)
                    }
                    this._rewardsArry.refresh()
                }
            }
        },
        i.prototype._onTouchTapItem = function(t) {
            this._showTips(t.item)
        },
        i.prototype._showTips = function(t) {
            var e;
            1 === t.type ? (e = {},
            e.id = t.id, tipsPop.TipsPop.openItemPop(e)) : (e = {},
            e.ins = t.id, tipsPop.TipsPop.openCounterMarkPop(e))
        },
        i.prototype.destroy = function() {
            this.list_reward.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this.list_reward.removeChildren(),
            ImageButtonUtil.remove(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.ItemLeftPage = e,
    __reflect(e.prototype, "pveEnterPanel.ItemLeftPage")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.ItemPagePointSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {},
        i.prototype.setData = function(t) {
            this.data = t
        },
        i.prototype.setSelected = function(t) {
            this.texture_Dark.visible = !t,
            this.texture_Light.visible = t
        },
        i.prototype.destroy = function() {},
        i
    } (BaseModule);
    t.ItemPagePoint = e,
    __reflect(e.prototype, "pveEnterPanel.ItemPagePoint")
} (pveEnterPanel || (pveEnterPanel = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
pveEnterPanel; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "pveEnterPanel.PveEnterMain",
        t.RESOURCE_COLLECTION = "pveEnterPanel.PveResourceCollection",
        t.PANEL_BASE = "pveEnterPanel.PveResourceBase",
        t.PANEL_ADVANCE = "pveEnterPanel.PveResourceAdvance",
        t.PANEL_PET = "pveEnterPanel.PveResourceStrongPet",
        t.PANEL_MARK = "pveEnterPanel.PveResourceMark",
        t.PANEL_ITEM = "pveEnterPanel.PveResourceItem",
        t.PANEL_TASK = "pveEnterPanel.PveResourceTask",
        t.PANEL_EXPLOIT = "pveEnterPanel.PveResourceExploit",
        t.PANEL_ACHIEVE = "pveEnterPanel.PveResourceAchieve",
        t.EVENT_UPDATE_PET_DATA = "pve_enter_event_update_pet_data",
        t.EVENT_UPDATE_MARK_DATA = "pve_enter_event_update_mark_data",
        t.EVENT_UPDATE_ITEM_DATA = "pve_enter_event_update_item_data",
        t.EVENT_UPDATE_ACHIEVE_DATA = "pve_enter_event_update_ahieve_data",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "pveEnterPanel.PanelConst")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            i.skinName = t.ItemRightPageSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.list_reward.itemRenderer = t.RewardItem,
            this._rewardsArry = new eui.ArrayCollection,
            this.list_reward.dataProvider = this._rewardsArry,
            ImageButtonUtil.add(this.grp_item,
            function() {
                var t = new egret.Event("event_jump_to_pve", !1, !1, i.data.cfg);
                EventManager.dispatchEvent(t)
            },
            this, !0, !0, this._onCheck.bind(this)),
            this.list_reward.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this)
        },
        i.prototype._onCheck = function(t) {
            for (var e = this.list_reward.numChildren,
            i = 0; e > i; i++) {
                var n = this.list_reward.getChildAt(i),
                r = t.stageX,
                o = t.stageY,
                s = n.localToGlobal(),
                a = new egret.Rectangle(s.x, s.y, n.width, n.height);
                if (a.contains(r, o)) return ! 1
            }
            return ! 0
        },
        i.prototype.dataChanged = function() {
            var t = this.data,
            e = t.cfg;
            this.title.source = "resource/assets/pve/title/small/" + e.res + ".png",
            this.grp_item.touchEnabled = t.isOpen,
            this.title.touchEnabled = t.isOpen,
            t.isOpen ? this.filters = [] : DisplayUtil.setColor(this, DisplayUtil.COLOR_GRAY),
            DisplayUtil.setEnabled(this, t.isOpen, !t.isOpen),
            this.touchChildren = !0;
            var i = e.reward || "";
            if ("" === i) this._rewardsArry.replaceAll([]);
            else {
                var n = core.gameUtil.RewardDataFormat.parseRewardStyle2(i);
                this._rewardsArry.replaceAll(n)
            }
            this._rewardsArry.refresh()
        },
        i.prototype._onTouchTapItem = function(t) {
            this._showTips(t.item)
        },
        i.prototype._showTips = function(t) {
            var e;
            1 === t.type ? (e = {},
            e.id = t.id, tipsPop.TipsPop.openItemPop(e)) : (e = {},
            e.ins = t.id, tipsPop.TipsPop.openCounterMarkPop(e))
        },
        i.prototype.destroy = function() {
            this.list_reward.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this.list_reward.removeChildren(),
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.ItemRightPage = e,
    __reflect(e.prototype, "pveEnterPanel.ItemRightPage")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = PetResourceAwardItemSkin,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.itemData = this.data,
            ImageButtonUtil.add(this.icon, this._showTips, this),
            this.updateView()
        },
        e.prototype.updateView = function() {
            1 === this.itemData.type ? this.icon.source = ItemXMLInfo.getIconURL(this.itemData.id) : 2 === this.itemData.type && (this.icon.source = CountermarkXMLInfo.getIconURL(this.itemData.id))
        },
        e.prototype._showTips = function() {
            if (this.itemData) {
                var t;
                1 === this.itemData.type ? (t = {},
                t.id = this.itemData.id, tipsPop.TipsPop.openItemPop(t)) : (t = {},
                t.ins = this.itemData.id, tipsPop.TipsPop.openCounterMarkPop(t)),
                this.cacheAsBitmap = !0
            }
        },
        e
    } (BaseItemRenderer);
    t.PetResourceAwardItem = e,
    __reflect(e.prototype, "pveEnterPanel.PetResourceAwardItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveEnterItemType1Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            ImageButtonUtil.add(this.grp_item,
            function() {
                var e = new egret.Event("event_jump_to_pve", !1, !1, t._enterCfg);
                EventManager.dispatchEvent(e)
            },
            this, !0, !0, this._onCheck.bind(this))
        },
        i.prototype._onCheck = function(t) {
            for (var e = this._list.numChildren,
            i = 0; e > i; i++) {
                var n = this._list.getChildAt(i),
                r = t.stageX,
                o = t.stageY,
                s = n.localToGlobal(),
                a = new egret.Rectangle(s.x, s.y, n.width, n.height);
                if (a.contains(r, o)) return ! 1
            }
            return ! 0
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._vo = this.data,
            this._enterCfg = this._vo.cfg,
            this.initView()
        },
        i.prototype.initView = function() {
            this.bg.source = "resource/assets/pve/title/new/type_" + this._enterCfg.kind + "/" + this._enterCfg.res + ".png";
            var e = core.gameUtil.RewardDataFormat.parseRewardStyle2(this._enterCfg.reward);
            this._list.itemRenderer = t.RewardItem,
            this._list.dataProvider = new eui.ArrayCollection(e)
        },
        i.prototype._onTouchTapItem = function(t) {
            this._showTips(t.item)
        },
        i.prototype._showTips = function(t) {
            var e;
            1 === t.type ? (e = {},
            e.id = t.id, tipsPop.TipsPop.openItemPop(e)) : (e = {},
            e.ins = t.id, tipsPop.TipsPop.openCounterMarkPop(e))
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this.removeChildren()
        },
        i
    } (eui.ItemRenderer);
    t.PveEnterItemType1 = e,
    __reflect(e.prototype, "pveEnterPanel.PveEnterItemType1")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveEnterItemType2Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            ImageButtonUtil.add(this.grp_item,
            function() {
                var e = new egret.Event("event_jump_to_pve", !1, !1, t._enterCfg);
                EventManager.dispatchEvent(e)
            },
            this, !0, !0, this._onCheck.bind(this))
        },
        i.prototype._onCheck = function(t) {
            for (var e = this._list.numChildren,
            i = 0; e > i; i++) {
                var n = this._list.getChildAt(i),
                r = t.stageX,
                o = t.stageY,
                s = n.localToGlobal(),
                a = new egret.Rectangle(s.x, s.y, n.width, n.height);
                if (a.contains(r, o)) return ! 1
            }
            return ! 0
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._vo = this.data,
            this._enterCfg = this._vo.cfg,
            this.initView()
        },
        i.prototype.initView = function() {
            this.bg.source = "resource/assets/pve/title/new/type_" + this._enterCfg.kind + "/" + this._enterCfg.res + ".png";
            var e = core.gameUtil.RewardDataFormat.parseRewardStyle2(this._enterCfg.reward);
            if (this._list.itemRenderer = t.RewardItem, this._list.dataProvider = new eui.ArrayCollection(e), this.txt_openTime.visible = !0, 2 == this._enterCfg.showType) {
                var i = this._enterCfg.timeLimit.split("*").map(Number);
                i.sort(function(t, e) {
                    return e ? t - e: -1
                });
                var n = ["日", "一", "二", "三", "四", "五", "六"],
                r = "开放时间：";
                r += i.map(function(t) {
                    return "周" + n[t]
                }).join("，"),
                this.txt_openTime.text = r
            } else 3 == this._enterCfg.showType ? this.txt_openTime.text = "开放时间：每天" + this._enterCfg.timeLimit: this.txt_openTime.visible = !1;
            this.img_lock.visible = !this._vo.isOpen,
            this.grp_item.touchEnabled = this._vo.isOpen
        },
        i.prototype._onTouchTapItem = function(t) {
            this._showTips(t.item)
        },
        i.prototype._showTips = function(t) {
            var e;
            1 === t.type ? (e = {},
            e.id = t.id, tipsPop.TipsPop.openItemPop(e)) : (e = {},
            e.ins = t.id, tipsPop.TipsPop.openCounterMarkPop(e))
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this.removeChildren()
        },
        i
    } (eui.ItemRenderer);
    t.PveEnterItemType2 = e,
    __reflect(e.prototype, "pveEnterPanel.PveEnterItemType2")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PveEnterItemType3Skin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.grp_item,
            function() {
                var t = new egret.Event("event_jump_to_pve", !1, !1, e._enterCfg);
                EventManager.dispatchEvent(t)
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._vo = this.data,
            this._enterCfg = this._vo.cfg,
            this.initView()
        },
        e.prototype.initView = function() {
            this.grp_manual.removeChildren(),
            this.bg.source = "resource/assets/pve/title/new/type_" + this._enterCfg.kind + "/" + this._enterCfg.res + ".png";
            var t = PetBook.PetBookXMLInfo.getLabels(this._enterCfg.monsterid);
            for (var e in t) {
                var i = new eui.Image("common_manual_title_" + t[e] + "_png");
                i.x = 53 * ~~e,
                this.grp_manual.addChild(i)
            }
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.PveEnterItemType3 = e,
    __reflect(e.prototype, "pveEnterPanel.PveEnterItemType3")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PveEnterItemType4Skin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.grp_item,
            function() {
                var t = new egret.Event("event_jump_to_pve", !1, !1, e._enterCfg);
                EventManager.dispatchEvent(t)
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._vo = this.data,
            this._enterCfg = this._vo.cfg,
            this.initView()
        },
        e.prototype.initView = function() {
            this.bg.source = "resource/assets/pve/title/new/type_" + this._enterCfg.kind + "/" + this._enterCfg.res + ".png"
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.PveEnterItemType4 = e,
    __reflect(e.prototype, "pveEnterPanel.PveEnterItemType4")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveEnterItemType5Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this)
        },
        i.prototype._onCheck = function(t) {
            for (var e = this._list.numChildren,
            i = 0; e > i; i++) {
                var n = this._list.getChildAt(i),
                r = t.stageX,
                o = t.stageY,
                s = n.localToGlobal(),
                a = new egret.Rectangle(s.x, s.y, n.width, n.height);
                if (a.contains(r, o)) return ! 1
            }
            return ! 0
        },
        i.prototype.dataChanged = function() {
            if (e.prototype.dataChanged.call(this), ImageButtonUtil.removeAll(this), this._vo = this.data, !this.data) return this.bg.source = "resource/assets/pve/title/new/type_5/spt_empty_normal.png",
            this._list.visible = this._bar.visible = this.txt_progress.visible = !1,
            void(this.img_lock.visible = !0);
            this._list.visible = this._bar.visible = this.txt_progress.visible = !0,
            this._enterCfg = this._vo.cfg,
            this.galaxyId = this._enterCfg.order,
            this.difficulty = PveSptManager.getLastDifficulty(this.galaxyId);
            var t = 255 & PveSptManager.unlockProgress,
            i = PveSptManager.unlockProgress >> 8 & 255;
            1 == this.difficulty ? this._unlock = this.galaxyId - 1 <= t: this._unlock = this.galaxyId - 1 <= i && this.galaxyId <= t;
            var n = PveSptManager.challengeProgress[this.galaxyId - 1];
            this.challengeProgress = n >> 16 * (this.difficulty - 1) & 255,
            this.initView()
        },
        i.prototype.initView = function() {
            var e = this,
            i = ["normal", "hard"];
            this.bg.source = "resource/assets/pve/title/new/type_" + this._enterCfg.kind + "/" + this._enterCfg.res + "_" + i[this.difficulty - 1] + ".png";
            var n = core.gameUtil.RewardDataFormat.parseRewardStyle2(this._enterCfg.reward);
            this._list.itemRenderer = t.RewardItem,
            this._list.dataProvider = new eui.ArrayCollection(n),
            this.img_lock.visible = !this._unlock;
            var r = config.SPTtask.getItems().filter(function(t) {
                return t.galaxyid == e.galaxyId && t.taskmode == e.difficulty && 1 == t.tasktype
            }),
            o = r.length;
            this.txt_progress.text = Math.floor(this.challengeProgress / o * 100) + "%",
            this._bar.maximum = o,
            this._bar.value = this.challengeProgress,
            this._unlock && ImageButtonUtil.add(this.grp_item,
            function() {
                if (e._unlock && e.galaxyId) {
                    var t = {
                        galaxyId: e.galaxyId,
                        difficulty: e.difficulty
                    };
                    EventManager.dispatchEventWith(PveSptManager.EVENT_GOTO_TASK, !0, t, !0)
                }
            },
            this, !0, !0, this._onCheck.bind(this))
        },
        i.prototype._onTouchTapItem = function(t) {
            this._showTips(t.item)
        },
        i.prototype._showTips = function(t) {
            var e;
            1 === t.type ? (e = {},
            e.id = t.id, tipsPop.TipsPop.openItemPop(e)) : (e = {},
            e.ins = t.id, tipsPop.TipsPop.openCounterMarkPop(e))
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeChildren()
        },
        i
    } (eui.ItemRenderer);
    t.PveEnterItemType5 = e,
    __reflect(e.prototype, "pveEnterPanel.PveEnterItemType5")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourceMarkItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.achieveIcon,
            function() {
                if (i._SpeNameBonus) {
                    var t = {};
                    t.SpeNameBonus = i._SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(t)
                }
            },
            this),
            ImageButtonUtil.add(this.itemIcon,
            function() {
                var t = {};
                t.branchId = i._branchId,
                t.ruleId = i._ruleId,
                tipsPop.TipsPop.openTitlePop(t)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                var e = {};
                e.ins = i._info,
                e.caller = i,
                e.callBack = function(e, n) {
                    SocketConnection.sendByQueue(42395, [109, i._info.id, 1, 0],
                    function() {
                        AchieveManager.updateSingleInfo(i._branchId).then(function() {
                            i.updateView(),
                            EventManager.dispatchEventWith(t.PanelConst.EVENT_UPDATE_ACHIEVE_DATA)
                        })
                    })
                },
                ModuleManager.showModuleByID(1, e)
            },
            this, !1),
            this.cacheAsBitmap = !0
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.initView(),
            this.updateView()
        },
        i.prototype.initView = function() {
            this.txt_itemNum.visible = !1,
            this.grpTag.visible = this.grpTime.visible = this.txt_limit.visible = !1,
            this._branchId = Math.floor(this._info.realid / 100),
            this._ruleId = this._info.realid % 100;
            var t = AchieveXMLInfo.getRule(this._branchId, this._ruleId),
            e = t.achName ? t.achName: AchieveXMLInfo.getBranchById(this._branchId).Desc;
            this._SpeNameBonus = null,
            t && (this.txt_itemName.text = StringUtil.parseStrLimitLen(e, 8), this._SpeNameBonus = t.SpeNameBonus),
            this._SpeNameBonus ? (this.achieveIcon.visible = !0, this.itemIcon.visible = !1, this.achieveIcon.width = this.achieveIcon.height = 70, this.achieveIcon.source = ClientConfig.getAchieveIcon(t.proicon)) : (this.achieveIcon.visible = !1, this.itemIcon.visible = !0, this.itemIcon.source = ClientConfig.getAchieveIcon(t.proicon)),
            this.coin.source = ClientConfig.getItemIcon(this._info.coinid),
            this.txt_cost.text = this._info.price + ""
        },
        i.prototype.updateView = function() {
            var t = null,
            e = AchieveManager.getAwardMask(this._branchId, this._ruleId);
            e && (t = e.rule_mask),
            this.btnBuy.visible = !t,
            this.flag_done.visible = !!t
        },
        i.prototype.destroy = function() {
            this.removeChildren(),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.PveResourceAchieveItem = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceAchieveItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourceBaseItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.grp_times.visible = !1,
            ImageButtonUtil.addWithoutLock(this.grp_content,
            function() {
                var t = new egret.Event("event_jump_to_pve", !1, !1, i._info);
                EventManager.dispatchEvent(t)
            },
            this, !0, !0, this._onCheck.bind(this)),
            this.grp_item.itemRenderer = t.PetResourceAwardItem
        },
        i.prototype._onCheck = function(t) {
            for (var e = this.grp_item.numChildren,
            i = 0; e > i; i++) {
                var n = this.grp_item.getChildAt(i),
                r = t.stageX,
                o = t.stageY,
                s = n.localToGlobal(),
                a = new egret.Rectangle(s.x, s.y, n.width, n.height);
                if (a.contains(r, o)) return ! 1
            }
            return ! 0
        },
        i.prototype.updateView = function() {
            this.bg.source = "resource/assets/pve/entry/dungeon_enter/" + this._info.res + ".png";
            var t = core.gameUtil.RewardDataFormat.parseRewardStyle2(this._info.reward);
            if (this.grp_item.dataProvider = new eui.ArrayCollection(t), this.grp_item.validateNow(), this.txt_openTime.visible = !0, 2 == this._info.showType) {
                var e = this._info.timeLimit.split("*").map(Number);
                e.sort(function(t, e) {
                    return e ? t - e: -1
                });
                var i = ["日", "一", "二", "三", "四", "五", "六"],
                n = "每周";
                n += e.map(function(t) {
                    return i[t]
                }).join(""),
                n += "开启",
                this.txt_openTime.text = n
            } else 3 == this._info.showType ? this.txt_openTime.text = "每天" + this._info.timeLimit + "开启": this.txt_openTime.visible = !1;
            this.cacheAsBitmap = !0
        },
        i
    } (BaseItemRenderer);
    t.PveResourceAdvanceItem = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceAdvanceItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourceBaseItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.service = this._info.service,
            this.updateView()
        },
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.addWithoutLock(this.grp_content,
            function() {
                var t = new egret.Event("event_jump_to_pve", !1, !1, i._info);
                EventManager.dispatchEvent(t)
            },
            this, !0, !0, this._onCheck.bind(this)),
            this.grp_item.itemRenderer = t.PetResourceAwardItem
        },
        i.prototype._onCheck = function(t) {
            for (var e = this.grp_item.numChildren,
            i = 0; e > i; i++) {
                var n = this.grp_item.getChildAt(i),
                r = t.stageX,
                o = t.stageY,
                s = n.localToGlobal(),
                a = new egret.Rectangle(s.x, s.y, n.width, n.height);
                if (a.contains(r, o)) return ! 1
            }
            return ! 0
        },
        i.prototype.updateView = function() {
            this.bg.source = "resource/assets/pve/entry/dungeon_enter/" + this._info.res + ".png";
            var t = core.gameUtil.RewardDataFormat.parseRewardStyle2(this._info.reward);
            if (this.grp_item.dataProvider = new eui.ArrayCollection(t), this.grp_item.validateNow(), this.txt_openTime.visible = !0, 2 == this._info.showType) {
                var e = this._info.timeLimit.split("*").map(Number);
                e.sort(function(t, e) {
                    return e ? t - e: -1
                });
                var i = ["日", "一", "二", "三", "四", "五", "六"],
                n = "每周";
                n += e.map(function(t) {
                    return i[t]
                }).join(""),
                n += "开启",
                this.txt_openTime.text = n
            } else 3 == this._info.showType ? this.txt_openTime.text = "每天" + this._info.timeLimit + "开启": this.txt_openTime.visible = !1;
            this.updateTimes(),
            this.cacheAsBitmap = !0
        },
        i.prototype.updateTimes = function() {
            if (this._info.times) {
                this.grp_times.visible = !0;
                var t = this._info.times.split("_"),
                e = (~~t[0], ~~t[1]),
                i = ~~t[2],
                n = this.service.getValue(i);
                this.txt_times.text = Math.min(n, e) + "/" + e
            } else this.grp_times.visible = !1
        },
        i
    } (BaseItemRenderer);
    t.PveResourceBaseItem = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceBaseItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.param = i,
            n.init([{
                panelName: t.PanelConst.MAIN_PANEL,
                isMain: !0,
                defaultParam: i
            },
            {
                panelName: t.PanelConst.RESOURCE_COLLECTION
            }]),
            StatLogger.log("20211126版本系统功能", "主界面日常挑战", "玩家总点击进入次数"),
            n
        }
        return __extends(i, e),
        i.prototype.reShow = function() {
            e.prototype.reShow.call(this),
            this.currentPanel.playOpenAnimate()
        },
        i.prototype.initialized = function() {
            var e = this;
            this.service.updateValues().then(function() {
                e.param ? e.service.openPanel(t.PanelConst.RESOURCE_COLLECTION, e.param) : e.service.backToMainPanel()
            })
        },
        i
    } (BasicMultPanelModule);
    t.PveEnterPanel = e,
    __reflect(e.prototype, "pveEnterPanel.PveEnterPanel")
} (pveEnterPanel || (pveEnterPanel = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
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
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
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
                o = i[1],
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
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourceMarkItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                var e = {};
                e.ins = i._info.cfg,
                e.isDiscount = i._info.isDiscount,
                e.caller = i,
                e.callBack = function(e, n) {
                    SocketConnection.sendByQueue(42395, [109, i._info.cfg.id, n, 0],
                    function(e) {
                        EventManager.dispatchEventWith(t.PanelConst.EVENT_UPDATE_MARK_DATA)
                    })
                },
                ModuleManager.showModuleByID(1, e)
            },
            this, !1),
            ImageButtonUtil.add(this.itemIcon,
            function() {
                var t = {};
                t.ins = i._info.cfg.realid,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            this.btnBuy.visible = !1,
            this.flag_done.visible = !1
        },
        i.prototype.dataChanged = function() {
            this._info = this.data,
            this.updateView()
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return this.itemIcon.visible = !0,
                        this.achieveIcon.visible = !1,
                        this.grpTime.visible = !1,
                        this.itemIcon.source = ClientConfig.getMarkPath(this._info.cfg.realid),
                        this.txt_itemName.text = StringUtil.parseStrLimitLen(ItemXMLInfo.getName(this._info.cfg.realid), 8),
                        this.txt_itemNum.text = "1",
                        this.txt_limit.visible = !1,
                        this.grpTag.visible = this._info.isDiscount,
                        this.coin.source = ClientConfig.getItemIcon(this._info.cfg.coinid),
                        this.txt_cost.text = this._info.isDiscount ? .625 * this._info.cfg.price + "": this._info.cfg.price + "",
                        this._info.cfg.Limittype ? (this.txt_limit.visible = !0, this._info.cfg.UserInfoBitPos ? [4, KTool.getMultiValueAsync([this._info.cfg.UserInfoId])] : [3, 2]) : [3, 5];
                    case 1:
                        return e = n.sent(),
                        t = KTool.getBit(e[0], this._info.cfg.UserInfoBitPos),
                        [3, 4];
                    case 2:
                        return this._info.cfg.BitSetId ? [4, KTool.getBitSetAsync([this._info.cfg.BitSetId])] : [3, 4];
                    case 3:
                        e = n.sent(),
                        t = e[0],
                        n.label = 4;
                    case 4:
                        return i = ["每日", "每周", "每月", "永久"],
                        this.txt_limit.text = i[this._info.cfg.Limittype - 1] + "限兑：" + Math.min(t, 1) + "/1",
                        t >= 1 ? (this.btnBuy.visible = !1, this.flag_done.visible = !0) : (this.btnBuy.visible = !0, this.flag_done.visible = !1),
                        [3, 6];
                    case 5:
                        this.txt_limit.visible = !1,
                        this.btnBuy.visible = !0,
                        n.label = 6;
                    case 6:
                        return this.cacheAsBitmap = !0,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i
    } (BaseItemRenderer);
    t.PveResourceMarkItem = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceMarkItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourceStrongPetItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                var e = {};
                e.ins = i._info.cfg,
                e.caller = i,
                e.callBack = function(e, n) {
                    SocketConnection.sendByQueue(42395, [109, i._info.cfg.id, n, 0],
                    function(e) {
                        EventManager.dispatchEventWith(t.PanelConst.EVENT_UPDATE_PET_DATA)
                    })
                },
                ModuleManager.showModuleByID(1, e)
            },
            this, !1)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        i.prototype.updateView = function() {
            this.img_pet.source = ClientConfig.getPetHalfIcon(this._info.cfg.realid),
            this.txt_name.text = PetXMLInfo.getName(this._info.cfg.realid),
            this.coin.source = ClientConfig.getItemIcon(this._info.cfg.coinid),
            this.txt_cost.text = this._info.cfg.price + "",
            1 == this._info.cfg.Subtag || 17 == this._info.cfg.Subtag ? (this.flag_done.visible = this._info.isGet, this.btnBuy.visible = !this._info.isGet, this.txt_limit.text = this._info.isGet ? "限兑：1/1": "限兑：0/1") : (this.flag_done.visible = !1, this.btnBuy.visible = !0, this.txt_limit.visible = !1),
            this.grp_tag.visible = !1,
            this.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {
            this.removeChildren(),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.PveResourceStrongPetItem = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceStrongPetItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PveResourceTaskItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        e.prototype.updateView = function() {
            var t = this;
            switch (this.image.source = ClientConfig.getItemIcon(this._info[1]), this._info[0]) {
            case 1:
                ImageButtonUtil.add(this.image,
                function() {
                    var e = {};
                    e.id = t._info[1],
                    tipsPop.TipsPop.openItemPop(e)
                },
                this)
            }
            this.num.text = this._info[2] + ""
        },
        e
    } (BaseItemRenderer);
    t.PveResourceTaskItem = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceTaskItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            i.skinName = t.RewardSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.cacheAsBitmap = !0
        },
        i.prototype.dataChanged = function() {
            var t = this.data;
            1 === t.type ? this.icon.source = ItemXMLInfo.getIconURL(t.id) : 2 === t.type && (this.icon.source = CountermarkXMLInfo.getIconURL(t.id)),
            this.txt_num.text = t.count > 0 ? t.count + "": ""
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.RewardItem = e,
    __reflect(e.prototype, "pveEnterPanel.RewardItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.hasPlay = !1,
            i.skinName = PveEnterMainSkin,
            t && (i._param = t),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.img_1,
            function() {
                StatLogger.log("20211126版本系统功能", "主界面日常挑战", "玩家进入资源收集"),
                i.service.openPanel(t.PanelConst.RESOURCE_COLLECTION)
            },
            this),
            ImageButtonUtil.add(this.img_2,
            function() {
                StatLogger.log("20211126版本系统功能", "主界面日常挑战", "玩家进入战斗力测试机"),
                ModuleManager.showModuleByID(82)
            },
            this),
            ImageButtonUtil.add(this.img_3,
            function() {
                StatLogger.log("20211126版本系统功能", "主界面日常挑战", "玩家进入SPT挑战"),
                ModuleManager.showModuleByID(56)
            },
            this),
            this._rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this),
            this._anim1 = DragonbonesUtil.createAnimate("H5xinshoujiemian_ske_json", "H5xinshoujiemian_tex_json", "H5xinshoujiemian_tex_png", "pveEnter"),
            this._anim2 = DragonbonesUtil.createAnimate("H5xinshoujiemian_ske_json", "H5xinshoujiemian_tex_json", "H5xinshoujiemian_tex_png", "pveEnter"),
            this._anim3 = DragonbonesUtil.createAnimate("H5xinshoujiemian_ske_json", "H5xinshoujiemian_tex_json", "H5xinshoujiemian_tex_png", "pveEnter"),
            this.adaptBgByScale(this.bg),
            this.grpAnim.addChildAt(this._anim1, 0),
            this.grpAnim.addChildAt(this._anim2, 0),
            this.grpAnim.addChildAt(this._anim3, 0),
            this._anim1.x = this.img_1.x + 9,
            this._anim1.y = this.img_1.y + 3,
            this._anim2.x = this.img_2.x + 9,
            this._anim2.y = this.img_2.y + 3,
            this._anim3.x = this.img_3.x + 9,
            this._anim3.y = this.img_3.y + 3,
            this._anim1.animation.play("H5 xinshoujiemian", 0),
            this._anim2.animation.play("H5 xinshoujiemian", 0),
            this._anim3.animation.play("H5 xinshoujiemian", 0),
            this._anim1.alpha = this._anim2.alpha = this._anim3.alpha = .7,
            this.playAnim(),
            this._param && 1 == this._param.type && ~~this._param.reshowCOLLECTION && this.service.openPanel(t.PanelConst.RESOURCE_COLLECTION, this._param.subType)
        },
        i.prototype.playOpenAnimate = function() {
            this._anim1 && !this.hasPlay && this.playAnim()
        },
        i.prototype.playAnim = function() {
            var t = this;
            this.hasPlay = !0,
            this._anim1.visible = this._anim2.visible = this._anim3.visible = !1;
            for (var e = [], i = 1; 4 > i; i++) {
                var n = this["img_" + i],
                r = n.x;
                n.x = egret.lifecycle.stage.stageWidth + n.width,
                e.push(egret.Tween.get(n).to({
                    x: r
                },
                100 + 20 * i, egret.Ease.quadOut))
            }
            var o = (s = common.TweenUtil).createAllTween.apply(s, e);
            Promise.all(o).then(function() {
                t._anim1.visible = t._anim2.visible = t._anim3.visible = !0
            });
            var s
        }, i.prototype.onTouch = function() {
            this.service.closeModule()
        },
        i.prototype.destroy = function() {
            this._rect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            for (var t = 1; 4 > t; t++) this["_anim" + t].dispose();
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.PveEnterMain = e,
    __reflect(e.prototype, "pveEnterPanel.PveEnterMain")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.all1 = [],
            i.all2 = [],
            i.skinName = "PveResourceAchieveSkin",
            i.defalutTab = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grpTop),
            this.adaptLeftContent(this._scr),
            this.adaptRightContent(this.itemCount),
            this._scr.right = DeviceInfoManager.adapterOffSetX > 24 ? DeviceInfoManager.adapterOffSetX: 24,
            this._list.itemRenderer = t.PveResourceAchieveItem,
            this.all1 = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 8 == t.Subtag
            }),
            this.all2 = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 14 == t.Subtag
            }),
            this.rbg_tab = this.rb_1.group,
            this.curTab = this.defalutTab || 1,
            this.rbg_tab.selectedValue = this.curTab,
            this.updateData(),
            EventManager.addEventListener(t.PanelConst.EVENT_UPDATE_ITEM_DATA, this.updateData, this),
            EventManager.addEventListener(t.PanelConst.EVENT_UPDATE_ACHIEVE_DATA, this.updateData, this),
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onTabChange, this),
            ImageButtonUtil.add(this.icon_gold,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1707511
                })
            },
            this)
        },
        i.prototype.beforeAdd = function(t) {
            this.curTab = this.rb_1.group.selectedValue = t,
            this.updateData()
        },
        i.prototype.updateData = function() {
            this.itemCount.visible = 1 == this.curTab;
            var t = this._list.layout.horizontalGap,
            e = this["all" + this.curTab],
            i = e[0];
            if (this.icon_gold.source = ClientConfig.getItemIcon(i.coinid), this.txtCoin.text = ItemManager.getNumByID(i.coinid) + "", e.sort(function(t, e) {
                var i = Math.floor(t.realid / 100),
                n = t.realid % 100,
                r = AchieveManager.getAwardMask(i, n),
                o = r.rule_mask,
                s = Math.floor(e.realid / 100),
                a = e.realid % 100,
                _ = AchieveManager.getAwardMask(s, a),
                h = _.rule_mask;
                return o - h
            }), this.removeListChildren(), this._list.dataProvider = new eui.ArrayCollection(e), 2 == this.curTab && this.all2.length < 6) {
                var n = this._list.layout;
                n.columnAlign = eui.ColumnAlign.LEFT,
                n.horizontalGap = t
            } else {
                var n = this._list.layout;
                n.columnAlign = eui.ColumnAlign.JUSTIFY_USING_GAP
            }
        },
        i.prototype.removeListChildren = function() {
            for (var t = 0; t < this._list.numChildren; t++) {
                var e = this._list.getChildAt(t);
                e.destroy()
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.removeListChildren(),
            this.rb_1.group.removeEventListener(egret.Event.CHANGE, this.onTabChange, this)
        },
        i.prototype.onTabChange = function() {
            this._scr.stopAnimation(),
            this.curTab = ~~this.rbg_tab.selectedValue,
            this.updateData()
        },
        i
    } (BasicPanel);
    t.PveResourceAchieve = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceAchieve")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourceBaseSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this._scr),
            this._list.itemRenderer = t.PveResourceAdvanceItem,
            this._scr.right += DeviceInfoManager.adapterOffSetX;
            var i = config.Dungeon_enter.getItems().filter(function(t) {
                return 2 == t.kind && (!IS_RELEASE || t.isShow)
            });
            GameInfo.isChecking && (i = config.Dungeon_enter.getItems().filter(function(t) {
                return 2 == t.kind && (!IS_RELEASE || t.isShow) && 8 != t.id && 9 != t.id
            })),
            i.sort(function(t, e) {
                return t.order - e.order
            }),
            this._list.dataProvider = new eui.ArrayCollection(i),
            this._list.validateNow(),
            this._listData = i
        },
        i.prototype.update = function() {
            this._list.dataProvider = new eui.ArrayCollection(this._listData),
            this._list.validateNow(),
            this.playAnim()
        },
        i.prototype.playAnim = function() {
            for (var t = [], e = function(e) {
                var n = i._list.getChildAt(e),
                r = n.x;
                n.includeInLayout = !1,
                n.x = i._list.width + n.width * e,
                t.push(egret.Tween.get(n).to({
                    x: r
                },
                400 + 100 * e, egret.Ease.quadOut).call(function() {
                    n.includeInLayout = !0
                }))
            },
            i = this, n = 0; n < this._list.numChildren; n++) e(n);
            var r = (o = common.TweenUtil).createAllTween.apply(o, t);
            Promise.all(r);
            var o
        }, i
    } (BasicPanel);
    t.PveResourceAdvance = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceAdvance")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourceBaseSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this._scr),
            this._scr.right += DeviceInfoManager.adapterOffSetX,
            this._list.itemRenderer = t.PveResourceBaseItem;
            var n = config.Dungeon_enter.getItems().filter(function(t) {
                return 1 == t.kind && (!IS_RELEASE || t.isShow)
            });
            n.sort(function(t, e) {
                return t.order - e.order
            });
            for (var r = [], o = 0; o < n.length; o++) {
                var s = n[o];
                s.times && r.push(~~s.times.split("_")[2])
            }
            this.service.setValues(r),
            this.service.updateValues().then(function() {
                for (var t = 0; t < n.length; t++) n[t].service = i.service;
                i._list.dataProvider = new eui.ArrayCollection(n),
                i._list.validateNow(),
                i._listData = n,
                i.playAnim()
            }),
            EventManager.addEventListener(ModuleEvent.CLOSE_MODULE, this.refreshView, this)
        },
        i.prototype.refreshView = function() {
            var t = this;
            "pveEnterPanel" == ModuleManager.currModule.moduleName && this.service.updateValues().then(function() {
                t.update()
            })
        },
        i.prototype.update = function() {
            for (var t = 0; t < this._list.numChildren; t++) {
                var e = this._list.getChildAt(t);
                e.updateTimes()
            }
            this._list.dataProvider = new eui.ArrayCollection(this._listData),
            this._list.validateNow(),
            this.playAnim()
        },
        i.prototype.playAnim = function() {
            for (var t = [], e = function(e) {
                var n = i._list.getChildAt(e),
                r = n.x;
                n.includeInLayout = !1,
                n.x = i._list.width + n.width * e,
                t.push(egret.Tween.get(n).to({
                    x: r
                },
                400 + 100 * e, egret.Ease.quadOut).call(function() {
                    n.includeInLayout = !0
                }))
            },
            i = this, n = 0; n < this._list.numChildren; n++) e(n);
            var r = (o = common.TweenUtil).createAllTween.apply(o, t);
            Promise.all(r);
            var o
        }, i
    } (BasicPanel);
    t.PveResourceBase = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceBase")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._curTab = "BASE",
            t.panelMap = {},
            t.panelParam = null,
            t.groupName = "pve_major",
            t.skinName = "PveResourceCollectionSkin",
            t
        }
        return __extends(i, e),
        i.prototype.beforeAdd = function(t) {
            t && (this._data = t, this._defaultType = t.subType, this.panelParam = t.childParam)
        },
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            e.prototype.initBtnClose.call(this, "pve_resource_collection_title_png", this,
            function() {
                t.service.backToMainPanel()
            },
            this);
            var i = new MenuData;
            if (i.root = ["BASE", "ADVANCE", "TASK", "MALL"], i.groupName = this.groupName, GameInfo.isChecking ? i.data = {
                BASE: {
                    title: "基础"
                },
                ADVANCE: {
                    title: "进阶"
                },
                TASK: {
                    title: "功勋任务"
                },
                MALL: {
                    title: "商城",
                    child: ["PET", "MARK", "ITEM"]
                },
                PET: {
                    title: "强力精灵",
                    parent: "MALL"
                },
                MARK: {
                    title: "全能刻印",
                    parent: "MALL"
                },
                ITEM: {
                    title: "珍贵道具",
                    parent: "MALL"
                },
                ACHIEVE: {
                    title: "经典成就",
                    parent: "MALL"
                }
            }: i.data = {
                BASE: {
                    title: "基础"
                },
                ADVANCE: {
                    title: "进阶"
                },
                TASK: {
                    title: "功勋任务"
                },
                MALL: {
                    title: "商城",
                    child: ["PET", "MARK", "ITEM", "ACHIEVE", "EXPLOIT"]
                },
                PET: {
                    title: "强力精灵",
                    parent: "MALL"
                },
                MARK: {
                    title: "全能刻印",
                    parent: "MALL"
                },
                ITEM: {
                    title: "珍贵道具",
                    parent: "MALL"
                },
                ACHIEVE: {
                    title: "经典成就",
                    parent: "MALL"
                },
                EXPLOIT: {
                    title: "精灵因子",
                    parent: "MALL"
                }
            },
            this._data) {
                var n = GainWayManger.getJumpInfo(this._data, i);
                n && (this._defaultType = n.menuDefault, this.panelParam = n.tab)
            }
            this._curTab = i["default"] = this._defaultType || "BASE",
            this.menu = Menu.createMenu(i, this.menuGroup),
            this.menu.selectedValue = "BASE",
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.updateView, this),
            EventManager.addEventListener("event_jump_to_pve", this._onTouchTapRightItem, this),
            EventManager.addEventListener("event_jump_to_animalMark", this.jumpToAnimMark, this)
        },
        i.prototype.jumpToAnimMark = function(t) {
            this._curTab = t.data.subType,
            this.panelParam = t.data.childParam,
            this.menu.updateView(this._curTab),
            this.updateView()
        },
        i.prototype._onTouchTapRightItem = function(t) {
            var e = t.data;
            if (e.moduleID > 0) {
                if (e.showType > 1 && !this._checkOpen(e)) return void Alarm.show("不在活动时间内");
                var i;
                if (e.openParam && (i = KTool.evalPram(e.openParam)), e.statLog) {
                    var n = e.statLog.split(",");
                    StatLogger.log(n[0], n[1], n[2])
                }
                window.DEBUG || e.isOpen ? ModuleManager.showModuleByID(e.moduleID, i) : Alarm.show("暂未开放")
            } else Alarm.show("暂未开放")
        },
        i.prototype._checkOpen = function(t) {
            var e = SystemTimerManager.sysBJDate;
            if (2 === t.showType) {
                for (var i = e.getDay(), n = t.timeLimit.split("*"), r = 0; r < n.length; r++) if (i === ~~n[r]) return ! 0
            } else if (3 === t.showType) {
                var n = t.timeLimit.split("*"),
                o = SystemTimerManager.checkTimeLimitByBJDate(n);
                if ("" !== o) return ! 0
            }
            return ! 1
        },
        i.prototype.updateView = function() {
            switch (this._curTab = this.menu.selectedValue, this._curTab) {
            case "BASE":
                StatLogger.log("20211126版本系统功能", "主界面日常挑战", "玩家进入基础选项卡");
                break;
            case "ADVANCE":
                StatLogger.log("20211126版本系统功能", "主界面日常挑战", "玩家进入进阶选项卡")
            }
            var e = t.PanelConst["PANEL_" + this._curTab];
            if (this.currentPanel) {
                if (this.currentPanel == this.panelMap[e]) return;
                DisplayUtil.removeForParent(this.currentPanel),
                this.currentPanel.removed()
            }
            if (this.currentPanel = this.panelMap[e], !this.currentPanel) {
                var i = egret.getDefinitionByName(e);
                this.currentPanel = new i(this.panelParam),
                this.currentPanel.service = this.service,
                this.panelMap[e] = this.currentPanel
            }
            this.grp_content.addChild(this.currentPanel),
            this.panelParam && (this.currentPanel.beforeAdd(this.panelParam), this.panelParam = null),
            this.currentPanel.update()
        },
        i.prototype.update = function() {
            this.currentPanel && (this.currentPanel = null),
            this.updateView()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this);
            for (var t in this.panelMap) {
                var i = this.panelMap[t];
                DisplayUtil.removeForParent(i),
                i.removed(),
                i.destroy()
            }
            this.menu && this.menu.destroy(),
            EventManager.removeEventListener("event_jump_to_pve", this._onTouchTapRightItem, this),
            EventManager.removeEventListener("event_jump_to_animalMark", this.jumpToAnimMark, this)
        },
        i
    } (BasicPanel);
    t.PveResourceCollection = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceCollection")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = PveResourceExploitSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this._scr),
            this.adaptRightContent(this.itemCount),
            this._scr.right = DeviceInfoManager.adapterOffSetX > 24 ? DeviceInfoManager.adapterOffSetX: 24,
            this._list.itemRenderer = t.PveResourceItemItem,
            EventManager.addEventListener(t.PanelConst.EVENT_UPDATE_ITEM_DATA, this.updateData, this),
            this.showDAItem(),
            ImageButtonUtil.add(this.icon_gold,
            function() {
                var t = config.Exchange_clt.getItem(i.allItems[0]);
                tipsPop.TipsPop.openItemPop({
                    id: t.coinid
                })
            },
            this)
        },
        i.prototype.beforeAdd = function(t) {
            this.showDAItem()
        },
        i.prototype.update = function() {
            e.prototype.update.call(this),
            this.updateData()
        },
        i.prototype.showDAItem = function() {
            this.allItems = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 19 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData()
        },
        i.prototype.updateData = function() {
            var t = this,
            e = config.Exchange_clt.getItem(this.allItems[0]);
            this.itemCount.visible = 19 == e.Subtag,
            this.icon_gold.source = ClientConfig.getItemIcon(e.coinid),
            this.txtCoin.text = ItemManager.getNumByID(e.coinid) + "",
            this._forveridArr = [];
            for (var i = 0; i < this.allItems.length; i++) {
                var n = config.Exchange_clt.getItem(this.allItems[i]); - 1 == this._forveridArr.indexOf(n.UserInfoId) && this._forveridArr.push(n.UserInfoId)
            }
            KTool.getMultiValue(this._forveridArr,
            function(e) {
                t._curDataForver = e,
                t.showList()
            })
        },
        i.prototype.showList = function() {
            for (var t = [], e = 0; e < this.allItems.length; e++) {
                var i = {};
                i.cfg = config.Exchange_clt.getItem(this.allItems[e]),
                i.isCanGet = ItemManager.getNumByID(i.cfg.coinid) >= i.cfg.price;
                var n = this._forveridArr.indexOf(i.cfg.UserInfoId);
                i.userInfo = this._curDataForver[n],
                t.push(i)
            }
            this.removeListChildren(),
            this._list.dataProvider = new eui.ArrayCollection(t)
        },
        i.prototype.removeListChildren = function() {
            for (var t = 0; t < this._list.numChildren; t++) {
                var e = this._list.getChildAt(t);
                e.destroy()
            }
        },
        i
    } (BasicPanel);
    t.PveResourceExploit = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceExploit")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i._curTab = 1,
            i.skinName = PveResourceItemSkin,
            i.defalutTab = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grpTop),
            this.adaptLeftContent(this._scr),
            this.adaptRightContent(this.itemCount),
            this._scr.right = DeviceInfoManager.adapterOffSetX > 24 ? DeviceInfoManager.adapterOffSetX: 24,
            this.rbg_tab = this.rb_0.group,
            this._curTab = this.rbg_tab.selectedValue = 1,
            this._list.itemRenderer = t.PveResourceItemItem,
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener(t.PanelConst.EVENT_UPDATE_ITEM_DATA, this.updateData, this),
            this.updateView(),
            ImageButtonUtil.add(this.icon_gold,
            function() {
                var t = config.Exchange_clt.getItem(i.allItems[0]);
                tipsPop.TipsPop.openItemPop({
                    id: t.coinid
                })
            },
            this)
        },
        i.prototype.beforeAdd = function(t) {
            this._curTab = this.rbg_tab.selectedValue = t,
            this.updateView()
        },
        i.prototype.onChangeTab = function() {
            this._scr.stopAnimation(),
            this._curTab = ~~this.rbg_tab.selectedValue,
            this.updateView()
        },
        i.prototype.update = function() {
            e.prototype.update.call(this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            1 == this._curTab ? this.showGxItem() : 2 == this._curTab ? this.showJwItem() : 3 == this._curTab && this.showDAItem()
        },
        i.prototype.showGxItem = function() {
            this.allItems = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 11 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData(),
            this._list.layout.requestedColumnCount = 6
        },
        i.prototype.showJwItem = function() {
            this.allItems = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 12 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData(),
            this._list.layout.requestedColumnCount = 6
        },
        i.prototype.showDAItem = function() {
            this.allItems = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 16 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData(),
            this._list.layout.requestedColumnCount = 5
        },
        i.prototype.updateData = function() {
            var t = this,
            e = config.Exchange_clt.getItem(this.allItems[0]);
            this.itemCount.visible = 16 != e.Subtag,
            this.icon_gold.source = ClientConfig.getItemIcon(e.coinid),
            this.txtCoin.text = ItemManager.getNumByID(e.coinid) + "",
            this._forveridArr = [];
            for (var i = 0; i < this.allItems.length; i++) {
                var n = config.Exchange_clt.getItem(this.allItems[i]); - 1 == this._forveridArr.indexOf(n.UserInfoId) && this._forveridArr.push(n.UserInfoId)
            }
            KTool.getMultiValue(this._forveridArr,
            function(e) {
                t._curDataForver = e,
                t.showList()
            })
        },
        i.prototype.showList = function() {
            for (var t = [], e = 0; e < this.allItems.length; e++) {
                var i = {};
                i.cfg = config.Exchange_clt.getItem(this.allItems[e]),
                i.isCanGet = ItemManager.getNumByID(i.cfg.coinid) >= i.cfg.price;
                var n = this._forveridArr.indexOf(i.cfg.UserInfoId);
                i.userInfo = this._curDataForver[n],
                i.curTab = this._curTab,
                t.push(i)
            }
            this.removeListChildren(),
            this._list.dataProvider = new eui.ArrayCollection(t)
        },
        i.prototype.removeListChildren = function() {
            for (var t = 0; t < this._list.numChildren; t++) {
                var e = this._list.getChildAt(t);
                e.destroy()
            }
        },
        i.prototype.destroy = function() {
            for (e.prototype.destroy.call(this); this._list.numChildren;) {
                var i = this._list.getChildAt(0);
                DisplayUtil.removeForParent(i),
                i.destroy()
            }
            this.removeListChildren(),
            EventManager.removeEventListener(t.PanelConst.EVENT_UPDATE_ITEM_DATA, this.updateData, this),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this)
        },
        i
    } (BasicPanel);
    t.PveResourceItem = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceItem")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i._curTab = 1,
            i.skinName = "PveResourceMarkSkin",
            i.defalutTab = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grpTop),
            this.adaptLeftContent(this._scr),
            this.adaptRightContent(this.itemCount),
            this._scr.right = DeviceInfoManager.adapterOffSetX > 24 ? DeviceInfoManager.adapterOffSetX: 24,
            this.rbg_tab = this.rb_0.group,
            this._curTab = this.rbg_tab.selectedValue = this.defalutTab || 1,
            this._list.itemRenderer = t.PveResourceMarkItem,
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener(t.PanelConst.EVENT_UPDATE_MARK_DATA, this.updateData, this),
            EventManager.addEventListener(t.PanelConst.EVENT_UPDATE_ITEM_DATA, this.updateData, this),
            this.updateView(),
            ImageButtonUtil.add(this.icon_gold,
            function() {
                var t = config.Exchange_clt.getItem(i.allMarks[0]);
                tipsPop.TipsPop.openItemPop({
                    id: t.coinid
                })
            },
            this)
        },
        i.prototype.beforeAdd = function(t) {
            this._curTab = this.rbg_tab.selectedValue = t,
            this.updateView()
        },
        i.prototype.onChangeTab = function() {
            this._scr.stopAnimation(),
            this._curTab = ~~this.rbg_tab.selectedValue,
            this.updateView()
        },
        i.prototype.update = function() {
            e.prototype.update.call(this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            1 == this._curTab ? this.showGxMark() : 2 == this._curTab ? this.showKingMark() : 3 == this._curTab && this.showDevineAnimalMark()
        },
        i.prototype.showGxMark = function() {
            this.allMarks = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 3 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData()
        },
        i.prototype.showKingMark = function() {
            this.allMarks = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 4 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData()
        },
        i.prototype.showDevineAnimalMark = function() {
            this.allMarks = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 15 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData()
        },
        i.prototype.updateData = function() {
            var t = this,
            e = config.Exchange_clt.getItem(this.allMarks[0]);
            this.itemCount.visible = 15 != e.Subtag,
            this.icon_gold.source = ClientConfig.getItemIcon(e.coinid),
            this.txtCoin.text = ItemManager.getNumByID(e.coinid) + "",
            KTool.getBitSet([2000038],
            function(e) {
                t.touchChildren = t.touchEnabled = !0,
                t._curDataBit = e,
                t.showList()
            })
        },
        i.prototype.showList = function() {
            for (var t = [], e = Math.floor(SystemTimerManager.sysBJDate.getTime() / 1e3), i = Math.floor((e - 57600) / 604800 % this.allMarks.length), n = 0; n < this.allMarks.length; n++) {
                var r = {};
                r.cfg = config.Exchange_clt.getItem(this.allMarks[n]),
                r.isCanGet = ItemManager.getNumByID(r.cfg.coinid) >= r.cfg.price,
                4 != r.cfg.Subtag ? r.isDiscount = !1 : 0 == this._curDataBit[0] ? r.isDiscount = r.cfg.id - this.allMarks[0] == i ? !0 : !1 : r.isDiscount = !1,
                t.push(r)
            }
            15 != config.Exchange_clt.getItem(this.allMarks[0]).Subtag && t.sort(function(t, e) {
                return t.isDiscount ? -1 : e.isDiscount ? 1 : t.cfg.realid < e.cfg.realid ? -1 : 1
            }),
            this.removeListChildren(),
            this._list.dataProvider = new eui.ArrayCollection(t)
        },
        i.prototype.removeListChildren = function() {
            for (var t = 0; t < this._list.numChildren; t++) {
                var e = this._list.getChildAt(t);
                e.destroy()
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this)
        },
        i
    } (BasicPanel);
    t.PveResourceMark = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceMark")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i._curTab = 1,
            i.allPets = [],
            i._getPetNum = {},
            i.value = 1,
            i.value = ~~t || 1,
            i.skinName = PveResourceStrongPetSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grpTop),
            this.adaptLeftContent(this._scr),
            this.adaptRightContent(this.itemCount),
            this._scr.right = DeviceInfoManager.adapterOffSetX > 24 ? DeviceInfoManager.adapterOffSetX: 24,
            this.rbg_tab = this.rb_0.group,
            this._curTab = this.rbg_tab.selectedValue = this.value,
            this._list.itemRenderer = t.PveResourceStrongPetItem,
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener(t.PanelConst.EVENT_UPDATE_PET_DATA, this.updateData, this),
            EventManager.addEventListener(t.PanelConst.EVENT_UPDATE_ITEM_DATA, this.updateData, this),
            this.updateView(),
            ImageButtonUtil.add(this.coin1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1
                })
            },
            this),
            ImageButtonUtil.add(this.coin2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1707511
                })
            },
            this)
        },
        i.prototype.beforeAdd = function(t) {
            this.value = ~~t,
            this._curTab = this.rbg_tab.selectedValue = this.value,
            this.updateView()
        },
        i.prototype.update = function() {},
        i.prototype.onChangeTab = function() {
            this._scr.stopAnimation(),
            this._curTab = ~~this.rbg_tab.selectedValue,
            this.updateView()
        },
        i.prototype.updateView = function() {
            1 == this._curTab ? this.showGxPet() : 2 == this._curTab ? this.showKingPet() : 3 == this._curTab && this.showBeast()
        },
        i.prototype.showGxPet = function() {
            this.allPets = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 1 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData()
        },
        i.prototype.showKingPet = function() {
            this.allPets = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 2 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData()
        },
        i.prototype.showBeast = function() {
            this.allPets = config.Exchange_clt.getItems().filter(function(t) {
                return 2 == t.shopid && 17 == t.Subtag
            }).map(function(t) {
                return t.id
            }),
            this.updateData()
        },
        i.prototype.updateData = function() {
            var t = this;
            this.txtCoin.text = core.gameUtil.ConvertToTenThousand(MainManager.actorInfo.coins),
            this.coin1.source = ClientConfig.getItemIcon(1),
            this.coin2.source = ClientConfig.getItemIcon(1707511),
            this.txtGold.text = ItemManager.getNumByID(1707511) + "",
            this._forveridArr = [],
            this._itemsidArr = [],
            this._monsterIdArr = [];
            for (var e = 0; e < this.allPets.length; e++) {
                var i = config.Exchange_clt.getItem(this.allPets[e]); - 1 == this._forveridArr.indexOf(i.UserInfoId) && this._forveridArr.push(i.UserInfoId),
                -1 == this._itemsidArr.indexOf(i.coinid) && this._itemsidArr.push(i.coinid),
                -1 == this._monsterIdArr.indexOf(i.realid) && this._monsterIdArr.push(i.realid)
            }
            KTool.getMultiValue(this._forveridArr,
            function(e) {
                t._curDataForver = e,
                t.touchChildren = t.touchEnabled = !0,
                PetManager.checkMultiPet(t._monsterIdArr,
                function(e) {
                    for (var i in t._monsterIdArr) t._getPetNum[t._monsterIdArr[i]] = e[i];
                    t.showList()
                })
            })
        },
        i.prototype.showList = function() {
            for (var t = [], e = 0; e < this.allPets.length; e++) {
                var i = {};
                i.cfg = config.Exchange_clt.getItem(this.allPets[e]);
                var n = this._forveridArr.indexOf(i.cfg.UserInfoId);
                BitUtil.getBit(this._curDataForver[n], i.cfg.UserInfoBitPos - 1) > 0 ? (i.isGet = !0, i.isCanGet = !1) : i.cfg.isjustone && this._getPetNum[i.cfg.realid] ? (i.isGet = !0, i.isCanGet = !1) : i.isCanGet = ItemManager.getNumByID(i.cfg.coinid) >= i.cfg.price ? !0 : !1,
                t.push(i)
            }
            t.sort(function(t, e) {
                return~~t.isGet - ~~e.isGet
            }),
            this.removeListChildren(),
            this._list.dataProvider = new eui.ArrayCollection(t)
        },
        i.prototype.removeListChildren = function() {
            for (var t = 0; t < this._list.numChildren; t++) {
                var e = this._list.getChildAt(t);
                e.destroy()
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.removeListChildren(),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.removeEventListener(t.PanelConst.EVENT_UPDATE_PET_DATA, this.updateData, this)
        },
        i
    } (BasicPanel);
    t.PveResourceStrongPet = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceStrongPet")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourceTaskSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.coin,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1
                })
            },
            this),
            ImageButtonUtil.add(this.medal,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1707511
                })
            },
            this),
            this.dailyList.itemRenderer = t.PveResourceTaskItem,
            this.weeklyList.itemRenderer = t.PveResourceTaskItem
        },
        i.prototype.update = function() {
            this.playAnim(),
            this.updateView()
        },
        i.prototype.playAnim = function() {
            var t = this.daily.x;
            this.daily.x = this.content.width,
            gsap.to(this.daily, {
                x: t,
                duration: .4
            }),
            t = this.weekly.x,
            this.weekly.x = this.content.width + this.weekly.width,
            gsap.to(this.weekly, {
                x: t,
                duration: .5
            })
        },
        i.prototype.updateView = function() {
            var t = this;
            this.coin.source = ClientConfig.getItemIcon(1),
            this.txtCoinNum.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins),
            this.medal.source = ClientConfig.getItemIcon(1707511),
            this.txtMedalNum.text = ItemManager.getNumByID(1707511) + "",
            SocketConnection.sendByQueue(41464, [],
            function(e) {
                var i = e.data,
                n = i.readUnsignedInt(),
                r = i.readUnsignedInt(),
                o = i.readUnsignedInt(),
                s = i.readUnsignedInt(),
                a = i.readUnsignedInt(),
                _ = i.readUnsignedInt(),
                h = config.Medaltask.getItem(n),
                u = config.Medaltask.getItem(s);
                h && t.manageShowRewards("daily", h, r, o),
                u && t.manageShowRewards("weekly", u, a, _)
            })
        },
        i.prototype.manageShowRewards = function(t, e, i, n) {
            var r = t.charAt(0).toUpperCase() + t.slice(1);
            this["txt" + r + "TaskInfoContent"].text = e.describe;
            for (var o = e.rewardinfo.split(";"), s = [], a = 0; 4 > a; ++a) if (a < o.length) {
                var _ = o[a].split("_").map(Number);
                s.push(_)
            }
            this[t + "List"].dataProvider = new eui.ArrayCollection(s),
            this[t + "List"].validateNow(),
            this["txt" + r + "TaskPgs"].textFlow = [{
                text: "" + n,
                style: {
                    textColor: 16580432
                }
            },
            {
                text: "/" + e.value,
                style: {
                    textColor: 12900350
                }
            }];
            var h;
            0 == i ? n < +e.value ? h = 0 : n >= +e.value && (h = 1) : 1 == i && (h = 2),
            this.manageButtons(t, e, h)
        },
        i.prototype.manageButtons = function(t, e, i) {
            var n = this,
            r = t.charAt(0).toUpperCase() + t.slice(1);
            switch (i) {
            case 0:
                var o = e.jump.split("_").map(Number);
                switch (o[0]) {
                case 1:
                    ImageButtonUtil.add(this["btn" + r + "Go"],
                    function() {
                        MapManager.changeMap(o[1])
                    },
                    this);
                    break;
                case 2:
                    ImageButtonUtil.add(this["btn" + r + "Go"],
                    function() {
                        ModuleManager.showModuleByID(o[1])
                    },
                    this)
                }
                this[t + "HasGot"].visible = !1,
                this["btn" + r + "Get"].visible = !1;
                break;
            case 1:
                this["btn" + r + "Go"].visible = !1,
                this[t + "HasGot"].visible = !1,
                this["btn" + r + "Get"].visible = !0;
                var s = "daily" == t ? 1 : 2;
                ImageButtonUtil.add(this["btn" + r + "Get"],
                function() {
                    SocketConnection.sendByQueue(41465, [s, e.id],
                    function(t) {
                        var e = t.data,
                        i = 0 == e.readUnsignedInt() ? !0 : !1;
                        i && n.updateView()
                    })
                },
                this);
                break;
            case 2:
                this["btn" + r + "Go"].visible = !1,
                this[t + "HasGot"].visible = !0,
                this["btn" + r + "Get"].visible = !1
            }
        },
        i
    } (BasicPanel);
    t.PveResourceTask = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourceTask")
} (pveEnterPanel || (pveEnterPanel = {}));
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
pveEnterPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveResourcePetPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                SocketConnection.sendByQueue(42395, [109, i._info.cfg.id, 1, 0],
                function(e) {
                    i.hide(),
                    EventManager.dispatchEventWith(t.PanelConst.EVENT_UPDATE_PET_DATA)
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnDetail,
            function() {
                i.hide(),
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: i._info.cfg.realid,
                    type: "pet",
                    callback: i.onCb,
                    thisObj: i
                },
                "", AppDoStyle.HIDEN)
            },
            this)
        },
        i.prototype.onCb = function() {
            PopViewManager.getInstance().openView(new i, null, this._info)
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._info = t,
            this.updateView()
        },
        i.prototype.updateView = function() {
            this.img_head.source = ClientConfig.getPetHeadPath(this._info.cfg.realid),
            this.txt_name.text = PetXMLInfo.getName(this._info.cfg.realid),
            this.coin.source = ClientConfig.getItemIcon(this._info.cfg.coinid),
            this.txt_cost.text = this._info.cfg.price + "",
            this.txt_num.textFlow = [{
                text: "当前拥有：",
                style: {
                    textColor: 6258105
                }
            },
            {
                text: ItemManager.getNumByID(this._info.cfg.coinid) + "",
                style: {
                    textColor: 4252667
                }
            }],
            DisplayUtil.setEnabled(this.btnBuy, this._info.isCanGet)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.PveResourcePetPop = e,
    __reflect(e.prototype, "pveEnterPanel.PveResourcePetPop")
} (pveEnterPanel || (pveEnterPanel = {})),
window.pveEnterPanel = window.pveEnterPanel || {};
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
generateEUI.paths["resource/eui_skins/comp/ItemLeftPageSkin.exml"] = window.pveEnterPanel.ItemLeftPageSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "list_reward", "grp_item"],
        this.height = 488,
        this.width = 348,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.touchEnabled = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.title_i(), this._Group1_i()],
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 488,
        t.source = "pve_enter_panel_item_init2_png",
        t.width = 348,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 46,
        t.width = 216,
        t.x = 124,
        t.y = 431,
        t.elementsContent = [this.list_reward_i()],
        t
    },
    i.list_reward_i = function() {
        var t = new eui.List;
        return this.list_reward = t,
        t.height = 46,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ItemPagePointSkin.exml"] = window.pveEnterPanel.ItemPagePointSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["texture_Dark", "texture_Light"],
        this.height = 14,
        this.width = 14,
        this.elementsContent = [this.texture_Dark_i(), this.texture_Light_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.texture_Dark_i = function() {
        var t = new eui.Image;
        return this.texture_Dark = t,
        t.height = 14,
        t.source = "pve_enter_panel_texture_Dark_png",
        t.width = 14,
        t.x = 0,
        t.y = 0,
        t
    },
    i.texture_Light_i = function() {
        var t = new eui.Image;
        return this.texture_Light = t,
        t.height = 14,
        t.source = "pve_enter_panel_texture_Light_png",
        t.width = 14,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/ItemRightPageSkin.exml"] = window.pveEnterPanel.ItemRightPageSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "list_reward", "grp_item"],
        this.height = 130,
        this.width = 677,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.touchEnabled = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.title_i(), this._Group1_i()],
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pve_enter_panel_item_init_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 46,
        t.width = 216,
        t.x = 451,
        t.y = 76,
        t.elementsContent = [this.list_reward_i()],
        t
    },
    i.list_reward_i = function() {
        var t = new eui.List;
        return this.list_reward = t,
        t.height = 46,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PetResourceAwardItemSkin.exml"] = window.PetResourceAwardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon"],
        this.height = 69,
        this.width = 69,
        this.elementsContent = [this._Image1_i(), this.icon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 69,
        t.source = "pet_resource_award_item_bg_png",
        t.width = 69,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 50,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 50,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveEnterItemType1Skin.exml"] = window.PveEnterItemType1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "grp_item"],
        this.height = 462,
        this.width = 271,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this._list_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 462,
        t.width = 271,
        t.x = 0,
        t.y = 0,
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 46,
        t.touchThrough = !0,
        t.width = 222,
        t.x = 24,
        t.y = 366,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveEnterItemType2Skin.exml"] = window.PveEnterItemType2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "img_lock", "txt_openTime", "grp_item"],
        this.height = 462,
        this.width = 271,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this._list_i(), this.img_lock_i(), this.txt_openTime_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 462,
        t.touchEnabled = !1,
        t.width = 271,
        t.x = 0,
        t.y = 0,
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 46,
        t.touchThrough = !0,
        t.width = 222,
        t.x = 24,
        t.y = 366,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -2,
        t
    },
    i.img_lock_i = function() {
        var t = new eui.Image;
        return this.img_lock = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_enter_panel_lock_png",
        t.touchEnabled = !1,
        t.verticalCenter = 0,
        t.x = 15,
        t.y = 15,
        t
    },
    i.txt_openTime_i = function() {
        var t = new eui.Label;
        return this.txt_openTime = t,
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "开放时间：10.21-10.23",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 427,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveEnterItemType3Skin.exml"] = window.PveEnterItemType3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "grp_manual", "img_clear", "grp_item"],
        this.height = 462,
        this.width = 271,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.grp_manual_i(), this.img_clear_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 462,
        t.width = 271,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_manual_i = function() {
        var t = new eui.Group;
        return this.grp_manual = t,
        t.horizontalCenter = -.5,
        t.y = 419,
        t
    },
    i.img_clear_i = function() {
        var t = new eui.Image;
        return this.img_clear = t,
        t.height = 430,
        t.horizontalCenter = 0,
        t.source = "pve_enter_item_type_3_img_clear_png",
        t.verticalCenter = 0,
        t.visible = !1,
        t.width = 255,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveEnterItemType4Skin.exml"] = window.PveEnterItemType4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "grp_item"],
        this.height = 462,
        this.width = 271,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 462,
        t.width = 271,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveEnterItemType5Skin.exml"] = window.PveEnterItemType5Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "_bar", "txt_progress", "img_lock", "grp_item"],
        this.height = 462,
        this.width = 271,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 17,
            t.source = "pve_enter_item_type_5_barBg_png",
            t.width = 222,
            t.x = 0,
            t.y = 0,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 7,
            t.source = "pve_enter_item_type_5_img_bar_png",
            t.width = 212,
            t.x = 5,
            t.y = 5,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this.bg_i(), this._list_i(), this._bar_i(), this.txt_progress_i(), this.img_lock_i()],
        t
    },
    n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 432,
        t.width = 241,
        t.x = 0,
        t.y = 0,
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 46,
        t.touchThrough = !0,
        t.width = 222,
        t.x = 8,
        t.y = 371,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -2,
        t
    },
    n._bar_i = function() {
        var t = new eui.ProgressBar;
        return this._bar = t,
        t.height = 17,
        t.slideDuration = 0,
        t.value = 0,
        t.width = 222,
        t.x = 9,
        t.y = 307,
        t.skinName = i,
        t
    },
    n.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 16,
        t.text = "100%",
        t.textColor = 12710655,
        t.x = 107,
        t.y = 288,
        t
    },
    n.img_lock_i = function() {
        var t = new eui.Image;
        return this.img_lock = t,
        t.source = "pve_enter_item_type_5_img_lock_png",
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveResourceBaseItemSkin.exml"] = window.PveResourceBaseItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "timesbg", "txt_times", "grp_times", "txt_openTime", "grp_item", "grp_content"],
        this.height = 476,
        this.width = 261,
        this.elementsContent = [this.grp_content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_content_i = function() {
        var t = new eui.Group;
        return this.grp_content = t,
        t.height = 476,
        t.width = 261,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.grp_times_i(), this.txt_openTime_i(), this._Scroller1_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 476,
        t.width = 261,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_times_i = function() {
        var t = new eui.Group;
        return this.grp_times = t,
        t.x = 45,
        t.y = 282,
        t.elementsContent = [this.timesbg_i(), this._Label1_i(), this.txt_times_i()],
        t
    },
    i.timesbg_i = function() {
        var t = new eui.Image;
        return this.timesbg = t,
        t.height = 30,
        t.source = "pve_enter_panel_timesbg_type1_png",
        t.width = 211,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "今日完成次数：",
        t.textColor = 15923199,
        t.x = 53,
        t.y = 5,
        t
    },
    i.txt_times_i = function() {
        var t = new eui.Label;
        return this.txt_times = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "0/5",
        t.textColor = 7072255,
        t.x = 168,
        t.y = 5,
        t
    },
    i.txt_openTime_i = function() {
        var t = new eui.Label;
        return this.txt_openTime = t,
        t.fontFamily = "MFShangHei",
        t.right = 23,
        t.size = 16,
        t.text = "每周五六日开启",
        t.textColor = 6854368,
        t.y = 444,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.horizontalCenter = -2.5,
        t.verticalCenter = 162,
        t.visible = !0,
        t.viewport = this.grp_item_i(),
        t
    },
    i.grp_item_i = function() {
        var t = new eui.List;
        return this.grp_item = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveResourceMarkItemSkin.exml"] = window.PveResourceMarkItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_cost", "coin", "btnBuy", "itemIcon", "achieveIcon", "flag_done", "txt_itemName", "txt_limit", "txt_itemNum", "txt_letfTime", "grpTime", "txt_tag", "grpTag"],
        this.height = 173,
        this.width = 147,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnBuy_i(), this.itemIcon_i(), this.achieveIcon_i(), this.flag_done_i(), this.txt_itemName_i(), this.txt_limit_i(), this.txt_itemNum_i(), this.grpTime_i(), this.grpTag_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pve_resource_mark_item_bg_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "pve_resource_mark_item_namebg_png",
        t.width = 138,
        t.x = 5,
        t.y = 3,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 4,
        t.y = 138,
        t.elementsContent = [this._Image3_i(), this._Group1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 31,
        t.scale9Grid = new egret.Rectangle(57, 10, 58, 11),
        t.source = "pve_resource_strong_pet_item_btnbg_png",
        t.width = 141,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 4,
        t.elementsContent = [this.txt_cost_i(), this.coin_i()],
        t
    },
    i.txt_cost_i = function() {
        var t = new eui.Label;
        return this.txt_cost = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 26,
        t.y = 4,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 24,
        t.source = "pve_resource_strong_pet_item_coin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    i.itemIcon_i = function() {
        var t = new eui.Image;
        return this.itemIcon = t,
        t.height = 70,
        t.width = 70,
        t.x = 39,
        t.y = 45,
        t
    },
    i.achieveIcon_i = function() {
        var t = new eui.Image;
        return this.achieveIcon = t,
        t.height = 53,
        t.source = "pve_resource_mark_item_achieve_num_10_png",
        t.visible = !1,
        t.width = 75,
        t.x = 35,
        t.y = 53,
        t
    },
    i.flag_done_i = function() {
        var t = new eui.Label;
        return this.flag_done = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.visible = !1,
        t.x = 50,
        t.y = 147,
        t
    },
    i.txt_itemName_i = function() {
        var t = new eui.Label;
        return this.txt_itemName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "道具道具道具道...",
        t.textAlign = "center",
        t.textColor = 14543359,
        t.width = 137,
        t.x = 5,
        t.y = 7,
        t
    },
    i.txt_limit_i = function() {
        var t = new eui.Label;
        return this.txt_limit = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "每日限兑：1/1",
        t.textColor = 4187130,
        t.x = 29,
        t.y = 117,
        t
    },
    i.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 37.5,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1518417,
        t.text = "999",
        t.textColor = 14543359,
        t.y = 92,
        t
    },
    i.grpTime_i = function() {
        var t = new eui.Group;
        return this.grpTime = t,
        t.x = 26,
        t.y = 28,
        t.elementsContent = [this._Image4_i(), this.txt_letfTime_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "pve_resource_mark_item_timebg_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_letfTime_i = function() {
        var t = new eui.Label;
        return this.txt_letfTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 15,
        t.y = 2,
        t
    },
    i.grpTag_i = function() {
        var t = new eui.Group;
        return this.grpTag = t,
        t.x = 0,
        t.y = 28,
        t.elementsContent = [this._Image5_i(), this.txt_tag_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pve_resource_mark_item_tagbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_tag_i = function() {
        var t = new eui.Label;
        return this.txt_tag = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "特惠",
        t.textColor = 16777215,
        t.x = 4,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveResourceStrongPetItemSkin.exml"] = window.PveResourceStrongPetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_pet", "txt_cost", "coin", "btnBuy", "txt_name", "txt_limit", "flag_done", "txt_tag", "grp_tag"],
        this.height = 292,
        this.width = 178,
        this.elementsContent = [this.img_pet_i(), this._Image1_i(), this._Image2_i(), this.btnBuy_i(), this.txt_name_i(), this.txt_limit_i(), this.flag_done_i(), this.grp_tag_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_pet_i = function() {
        var t = new eui.Image;
        return this.img_pet = t,
        t.height = 284,
        t.width = 170,
        t.x = 5,
        t.y = 5,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 126,
        t.source = "pve_resource_strong_pet_item_zhezhao_png",
        t.width = 168,
        t.x = 6,
        t.y = 163,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 292,
        t.source = "pve_resource_strong_pet_item_waikuang_png",
        t.width = 178,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.height = 31,
        t.visible = !0,
        t.width = 172,
        t.x = 4,
        t.y = 257,
        t.elementsContent = [this._Image3_i(), this._Group1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 31,
        t.source = "pve_resource_strong_pet_item_btnbg_png",
        t.visible = !0,
        t.width = 172,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 4,
        t.elementsContent = [this.txt_cost_i(), this.coin_i()],
        t
    },
    i.txt_cost_i = function() {
        var t = new eui.Label;
        return this.txt_cost = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 26,
        t.y = 4,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 24,
        t.source = "pve_resource_strong_pet_item_coin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "战武天尊",
        t.textColor = 15660287,
        t.y = 237,
        t
    },
    i.txt_limit_i = function() {
        var t = new eui.Label;
        return this.txt_limit = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "限兑：1/1",
        t.textColor = 10923696,
        t.y = 217,
        t
    },
    i.flag_done_i = function() {
        var t = new eui.Group;
        return this.flag_done = t,
        t.x = 11,
        t.y = 259,
        t.elementsContent = [this._Image4_i(), this._Label1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pve_resource_strong_pet_item_linedone_png",
        t.width = 157,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.x = 54,
        t.y = 6,
        t
    },
    i.grp_tag_i = function() {
        var t = new eui.Group;
        return this.grp_tag = t,
        t.x = 2,
        t.y = 2,
        t.elementsContent = [this._Image5_i(), this.txt_tag_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "pve_resource_strong_pet_item_tagbg_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_tag_i = function() {
        var t = new eui.Label;
        return this.txt_tag = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -8,
        t.rotation = 315,
        t.size = 11,
        t.text = "折扣",
        t.textColor = 16777215,
        t.verticalCenter = -10,
        t.visible = !0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveResourceTaskItemSkin.exml"] = window.PveResourceTaskItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "image", "num", "rewardItem"],
        this.elementsContent = [this.rewardItem_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.rewardItem_i = function() {
        var t = new eui.Group;
        return this.rewardItem = t,
        t.elementsContent = [this.bg_i(), this.image_i(), this.num_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_resource_award_item_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.image_i = function() {
        var t = new eui.Image;
        return this.image = t,
        t.height = 44,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 43,
        t.x = 13,
        t.y = 14,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.right = 3,
        t.size = 12,
        t.text = "2000",
        t.textAlign = "right",
        t.y = 56,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/RewardSkin.exml"] = window.pveEnterPanel.RewardSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon_bg", "icon", "txt_num"],
        this.height = 46,
        this.width = 46,
        this.elementsContent = [this.icon_bg_i(), this.icon_i(), this.txt_num_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.icon_bg_i = function() {
        var t = new eui.Image;
        return this.icon_bg = t,
        t.height = 46,
        t.source = "pve_enter_panel_icon_bg_png",
        t.width = 46,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 34,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t.width = 34,
        t
    },
    i.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.bottom = 3,
        t.right = 4,
        t.size = 12,
        t.text = "Label",
        t.textAlign = "right",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveEnterMainSkin.exml"] = window.PveEnterMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_rect", "grpAnim", "img_1", "img_2", "img_3", "grpImg"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._rect_i(), this.grpAnim_i(), this.grpImg_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "blurry_base_bg_jpg",
        t.y = 0,
        t
    },
    i._rect_i = function() {
        var t = new eui.Image;
        return this._rect = t,
        t.source = "blurry_base_bgmask_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpAnim_i = function() {
        var t = new eui.Group;
        return this.grpAnim = t,
        t.height = 471,
        t.horizontalCenter = 1,
        t.width = 800,
        t.y = 86,
        t
    },
    i.grpImg_i = function() {
        var t = new eui.Group;
        return this.grpImg = t,
        t.cacheAsBitmap = !0,
        t.height = 471,
        t.horizontalCenter = 1,
        t.width = 800,
        t.y = 86,
        t.elementsContent = [this.img_1_i(), this.img_2_i(), this.img_3_i()],
        t
    },
    i.img_1_i = function() {
        var t = new eui.Image;
        return this.img_1 = t,
        t.pixelHitTest = !0,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "pve_enter_main_img_1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_2_i = function() {
        var t = new eui.Image;
        return this.img_2 = t,
        t.pixelHitTest = !0,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "pve_enter_main_img_2_png",
        t.visible = !0,
        t.x = 286,
        t.y = 0,
        t
    },
    i.img_3_i = function() {
        var t = new eui.Image;
        return this.img_3 = t,
        t.pixelHitTest = !0,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "pve_enter_main_img_3_png",
        t.visible = !0,
        t.x = 573,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveResourceAchieveSkin.exml"] = window.PveResourceAchieveSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtCoin", "icon_gold", "itemCount", "_list", "_scr", "rb_1", "rb_2", "grpTop"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.itemCount_i(), this._scr_i(), this.grpTop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "功勋成就",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "精灵王成就",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.itemCount_i = function() {
        var t = new eui.Group;
        return this.itemCount = t,
        t.cacheAsBitmap = !0,
        t.right = 43,
        t.visible = !0,
        t.y = 11,
        t.elementsContent = [this._Image1_i(), this.txtCoin_i(), this.icon_gold_i()],
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "pve_resource_collection_img_di2_png",
        t.width = 133,
        t.x = 13,
        t.y = 5,
        t
    },
    r.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 4.5,
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    r.icon_gold_i = function() {
        var t = new eui.Image;
        return this.icon_gold = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    r._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 525,
        t.left = 179,
        t.right = 22,
        t.scrollPolicyH = "off",
        t.y = 115,
        t.viewport = this._list_i(),
        t
    },
    r._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.orientation = "rows",
        t.requestedColumnCount = 6,
        t
    },
    r.grpTop_i = function() {
        var t = new eui.Group;
        return this.grpTop = t,
        t.cacheAsBitmap = !0,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.rb_1_i(), this.rb_2_i()],
        t
    },
    r.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "pve_achieve_tab",
        t.selected = !1,
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    r.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "pve_achieve_tab",
        t.value = "2",
        t.x = 100,
        t.y = 0,
        t.skinName = n,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveResourceBaseSkin.exml"] = window.PveResourceBaseSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scr"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._scr_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 476,
        t.left = 200,
        t.right = 0,
        t.y = 110,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.width = 936,
        t.x = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 26,
        t.paddingRight = 26,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveResourceCollectionSkin.exml"] = window.PveResourceCollectionSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["grp_content", "menuGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.grp_content_i(), this.menuGroup_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "pve_resource_collection_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_content_i = function() {
        var t = new eui.Group;
        return this.grp_content = t,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.x = 0,
        t.y = 48,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveResourceExploitSkin.exml"] = window.PveResourceExploitSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtCoin", "icon_gold", "itemCount", "_list", "_scr"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.itemCount_i(), this._scr_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.itemCount_i = function() {
        var t = new eui.Group;
        return this.itemCount = t,
        t.cacheAsBitmap = !0,
        t.right = 43,
        t.y = 11,
        t.elementsContent = [this._Image1_i(), this.txtCoin_i(), this.icon_gold_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "pve_resource_collection_img_di2_png",
        t.width = 133,
        t.x = 13,
        t.y = 5,
        t
    },
    i.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 4.5,
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    i.icon_gold_i = function() {
        var t = new eui.Image;
        return this.icon_gold = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 525,
        t.left = 179,
        t.right = 22,
        t.scrollPolicyH = "off",
        t.y = 115,
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
        return t.columnAlign = "justifyUsingGap",
        t.orientation = "rows",
        t.requestedColumnCount = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveResourceItemSkin.exml"] = window.PveResourceItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtCoin", "icon_gold", "itemCount", "rb_0", "rb_1", "rb_2", "grpTop", "_list", "_scr"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.itemCount_i(), this.grpTop_i(), this._scr_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "功勋点数",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "界神印记",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "神兽道具",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.itemCount_i = function() {
        var t = new eui.Group;
        return this.itemCount = t,
        t.cacheAsBitmap = !0,
        t.right = 43,
        t.y = 11,
        t.elementsContent = [this._Image1_i(), this.txtCoin_i(), this.icon_gold_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "pve_resource_collection_img_di2_png",
        t.width = 133,
        t.x = 13,
        t.y = 5,
        t
    },
    o.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 4.5,
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    o.icon_gold_i = function() {
        var t = new eui.Image;
        return this.icon_gold = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    o.grpTop_i = function() {
        var t = new eui.Group;
        return this.grpTop = t,
        t.cacheAsBitmap = !0,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.rb_0_i(), this.rb_1_i(), this.rb_2_i()],
        t
    },
    o.rb_0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_0 = t,
        t.groupName = "pve_item_tab",
        t.height = 33,
        t.value = "1",
        t.width = 101,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "pve_item_tab",
        t.height = 33,
        t.value = "2",
        t.width = 101,
        t.x = 100,
        t.y = 0,
        t.skinName = n,
        t
    },
    o.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "pve_item_tab",
        t.value = "3",
        t.x = 200,
        t.y = 0,
        t.skinName = r,
        t
    },
    o._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 525,
        t.left = 179,
        t.right = 22,
        t.scrollPolicyH = "off",
        t.y = 115,
        t.viewport = this._list_i(),
        t
    },
    o._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.orientation = "rows",
        t.requestedColumnCount = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveResourceMarkSkin.exml"] = window.PveResourceMarkSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtCoin", "icon_gold", "itemCount", "rb_0", "rb_1", "rb_2", "grpTop", "_list", "_scr"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.itemCount_i(), this.grpTop_i(), this._scr_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "功勋刻印",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "精灵王刻印",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "神兽刻印",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.itemCount_i = function() {
        var t = new eui.Group;
        return this.itemCount = t,
        t.cacheAsBitmap = !0,
        t.right = 43,
        t.y = 11,
        t.elementsContent = [this._Image1_i(), this.txtCoin_i(), this.icon_gold_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "pve_resource_collection_img_di2_png",
        t.width = 133,
        t.x = 13,
        t.y = 5,
        t
    },
    o.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 4.5,
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    o.icon_gold_i = function() {
        var t = new eui.Image;
        return this.icon_gold = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    o.grpTop_i = function() {
        var t = new eui.Group;
        return this.grpTop = t,
        t.cacheAsBitmap = !0,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.rb_0_i(), this.rb_1_i(), this.rb_2_i()],
        t
    },
    o.rb_0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_0 = t,
        t.groupName = "pve_mark_tab",
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "pve_mark_tab",
        t.value = "2",
        t.x = 100,
        t.y = 0,
        t.skinName = n,
        t
    },
    o.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "pve_mark_tab",
        t.value = "3",
        t.x = 200,
        t.y = 0,
        t.skinName = r,
        t
    },
    o._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 525,
        t.left = 179,
        t.right = 22,
        t.scrollPolicyH = "off",
        t.y = 115,
        t.viewport = this._list_i(),
        t
    },
    o._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.orientation = "rows",
        t.requestedColumnCount = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveResourceStrongPetSkin.exml"] = window.PveResourceStrongPetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["rb_0", "rb_1", "rb_2", "grpTop", "_list", "_scr", "txtGold", "txtCoin", "coin2", "btnAdd", "coin1", "itemCount"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpTop_i(), this._scr_i(), this.itemCount_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "功勋精灵",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "精灵王",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbup_png"), new eui.SetProperty("_Label1", "textColor", 7177143)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_resource_collection_rbdown_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 33,
            t.width = 101,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.size = 18,
            t.text = "神兽",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.grpTop_i = function() {
        var t = new eui.Group;
        return this.grpTop = t,
        t.cacheAsBitmap = !0,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.rb_0_i(), this.rb_1_i(), this.rb_2_i()],
        t
    },
    o.rb_0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_0 = t,
        t.groupName = "strong_pet_tab",
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "strong_pet_tab",
        t.value = "2",
        t.x = 100,
        t.y = 0,
        t.skinName = n,
        t
    },
    o.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "strong_pet_tab",
        t.value = "3",
        t.x = 201.114,
        t.y = 0,
        t.skinName = r,
        t
    },
    o._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 528,
        t.left = 177,
        t.right = 24,
        t.scrollPolicyH = "off",
        t.y = 112,
        t.viewport = this._list_i(),
        t
    },
    o._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.orientation = "rows",
        t.requestedColumnCount = 5,
        t.verticalGap = 13,
        t
    },
    o.itemCount_i = function() {
        var t = new eui.Group;
        return this.itemCount = t,
        t.cacheAsBitmap = !0,
        t.right = 39,
        t.y = 11,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.txtGold_i(), this.txtCoin_i(), this.coin2_i(), this.btnAdd_i(), this.coin1_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "pve_resource_collection_img_di2_png",
        t.width = 133,
        t.x = 187,
        t.y = 5,
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "pve_resource_collection_img_di2_png",
        t.width = 133,
        t.x = 22,
        t.y = 5,
        t
    },
    o.txtGold_i = function() {
        var t = new eui.Label;
        return this.txtGold = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 89.5,
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    o.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -64.5,
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    o.coin2_i = function() {
        var t = new eui.Image;
        return this.coin2 = t,
        t.height = 30,
        t.width = 30,
        t.x = 174,
        t.y = 0,
        t
    },
    o.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 21,
        t.source = "pve_resource_collection_btnAdd_png",
        t.visible = !1,
        t.width = 21,
        t.x = 303,
        t.y = 5,
        t
    },
    o.coin1_i = function() {
        var t = new eui.Image;
        return this.coin1 = t,
        t.height = 45,
        t.width = 45,
        t.x = 0,
        t.y = -7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveResourceTaskSkin.exml"] = window.PveResourceTaskSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["taskBg", "txtTitleToday", "dailyList", "btnDailyGo", "btnDailyGet", "dailyHasGot", "txtDailyTaskInfoContent", "txtDailyTaskPgs", "txtTaskInfo", "txtTaskReward", "txtTaskPgsTitle", "daily", "taskBg_2", "txtTitleWeekly", "weeklyList", "btnWeeklyGo", "btnWeeklyGet", "weeklyHasGot", "txtWeeklyTaskInfoContent", "txtWeeklyTaskPgs", "txtTaskInfo_2", "txtTaskReward_2", "txtTaskPgsTitle_2", "weekly", "content", "imgDi2", "imgDi2_2", "txtMedalNum", "txtCoinNum", "medal", "coin", "topMid"],
        this.height = 571,
        this.width = 1097,
        this.elementsContent = [this.content_i(), this.topMid_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.horizontalCenter = 101.5,
        t.width = 756,
        t.y = 94,
        t.elementsContent = [this.daily_i(), this.weekly_i()],
        t
    },
    i.daily_i = function() {
        var t = new eui.Group;
        return this.daily = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.taskBg_i(), this.txtTitleToday_i(), this._Scroller1_i(), this.btnDailyGo_i(), this.btnDailyGet_i(), this.dailyHasGot_i(), this.txtDailyTaskInfoContent_i(), this.txtDailyTaskPgs_i(), this.txtTaskInfo_i(), this.txtTaskReward_i(), this.txtTaskPgsTitle_i()],
        t
    },
    i.taskBg_i = function() {
        var t = new eui.Image;
        return this.taskBg = t,
        t.source = "pve_enter_panel_taskbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtTitleToday_i = function() {
        var t = new eui.Image;
        return this.txtTitleToday = t,
        t.source = "pve_enter_panel_txttitletoday_png",
        t.x = 13,
        t.y = 12,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.width = 296,
        t.x = 26,
        t.y = 194,
        t.viewport = this.dailyList_i(),
        t
    },
    i.dailyList_i = function() {
        var t = new eui.List;
        return this.dailyList = t,
        t.touchThrough = !0,
        t.x = 26,
        t.y = 194,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.btnDailyGo_i = function() {
        var t = new eui.Image;
        return this.btnDailyGo = t,
        t.source = "pve_enter_panel_btngo_png",
        t.visible = !0,
        t.x = 108,
        t.y = 402,
        t
    },
    i.btnDailyGet_i = function() {
        var t = new eui.Image;
        return this.btnDailyGet = t,
        t.source = "pve_enter_panel_btnget_png",
        t.visible = !0,
        t.x = 108,
        t.y = 402,
        t
    },
    i.dailyHasGot_i = function() {
        var t = new eui.Image;
        return this.dailyHasGot = t,
        t.source = "pve_enter_panel_hasgot_png",
        t.visible = !0,
        t.x = 112,
        t.y = 406,
        t
    },
    i.txtDailyTaskInfoContent_i = function() {
        var t = new eui.Label;
        return this.txtDailyTaskInfoContent = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.31482923847006,
        t.text = "在六界神王殿中取得5次战斗胜利",
        t.textColor = 12834813,
        t.width = 300,
        t.x = 28,
        t.y = 110,
        t
    },
    i.txtDailyTaskPgs_i = function() {
        var t = new eui.Label;
        return this.txtDailyTaskPgs = t,
        t.fontFamily = "MFShangHei",
        t.size = 17.9952115380226,
        t.text = "0/5",
        t.textColor = 16514895,
        t.x = 28,
        t.y = 314,
        t
    },
    i.txtTaskInfo_i = function() {
        var t = new eui.Label;
        return this.txtTaskInfo = t,
        t.fontFamily = "REEJI",
        t.size = 18.32,
        t.text = "任务描述",
        t.textColor = 4187130,
        t.x = 27,
        t.y = 79,
        t
    },
    i.txtTaskReward_i = function() {
        var t = new eui.Label;
        return this.txtTaskReward = t,
        t.fontFamily = "REEJI",
        t.size = 18.32,
        t.text = "任务奖励",
        t.textColor = 4187130,
        t.x = 27,
        t.y = 166,
        t
    },
    i.txtTaskPgsTitle_i = function() {
        var t = new eui.Label;
        return this.txtTaskPgsTitle = t,
        t.fontFamily = "REEJI",
        t.size = 18.32,
        t.text = "任务进度",
        t.textColor = 4187130,
        t.x = 27,
        t.y = 287,
        t
    },
    i.weekly_i = function() {
        var t = new eui.Group;
        return this.weekly = t,
        t.x = 411,
        t.y = 0,
        t.elementsContent = [this.taskBg_2_i(), this.txtTitleWeekly_i(), this._Scroller2_i(), this.btnWeeklyGo_i(), this.btnWeeklyGet_i(), this.weeklyHasGot_i(), this.txtWeeklyTaskInfoContent_i(), this.txtWeeklyTaskPgs_i(), this.txtTaskInfo_2_i(), this.txtTaskReward_2_i(), this.txtTaskPgsTitle_2_i()],
        t
    },
    i.taskBg_2_i = function() {
        var t = new eui.Image;
        return this.taskBg_2 = t,
        t.source = "pve_enter_panel_taskbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtTitleWeekly_i = function() {
        var t = new eui.Image;
        return this.txtTitleWeekly = t,
        t.source = "pve_enter_panel_txttitleweekly_png",
        t.x = 13,
        t.y = 12,
        t
    },
    i._Scroller2_i = function() {
        var t = new eui.Scroller;
        return t.width = 296,
        t.x = 26,
        t.y = 194,
        t.viewport = this.weeklyList_i(),
        t
    },
    i.weeklyList_i = function() {
        var t = new eui.List;
        return this.weeklyList = t,
        t.touchThrough = !0,
        t.x = 26,
        t.y = 194,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.btnWeeklyGo_i = function() {
        var t = new eui.Image;
        return this.btnWeeklyGo = t,
        t.source = "pve_enter_panel_btngo_png",
        t.x = 108,
        t.y = 402,
        t
    },
    i.btnWeeklyGet_i = function() {
        var t = new eui.Image;
        return this.btnWeeklyGet = t,
        t.source = "pve_enter_panel_btnget_png",
        t.visible = !0,
        t.x = 108,
        t.y = 402,
        t
    },
    i.weeklyHasGot_i = function() {
        var t = new eui.Image;
        return this.weeklyHasGot = t,
        t.source = "pve_enter_panel_hasgot_png",
        t.x = 112,
        t.y = 406,
        t
    },
    i.txtWeeklyTaskInfoContent_i = function() {
        var t = new eui.Label;
        return this.txtWeeklyTaskInfoContent = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.31482923847006,
        t.text = "在六界神王殿中取得5次战斗胜利",
        t.textColor = 12834813,
        t.width = 300,
        t.x = 28,
        t.y = 110,
        t
    },
    i.txtWeeklyTaskPgs_i = function() {
        var t = new eui.Label;
        return this.txtWeeklyTaskPgs = t,
        t.fontFamily = "MFShangHei",
        t.size = 17.9952115380226,
        t.text = "0/5",
        t.textColor = 16514895,
        t.x = 28,
        t.y = 314,
        t
    },
    i.txtTaskInfo_2_i = function() {
        var t = new eui.Label;
        return this.txtTaskInfo_2 = t,
        t.fontFamily = "REEJI",
        t.size = 18.32,
        t.text = "任务描述",
        t.textColor = 4187130,
        t.x = 27,
        t.y = 79,
        t
    },
    i.txtTaskReward_2_i = function() {
        var t = new eui.Label;
        return this.txtTaskReward_2 = t,
        t.fontFamily = "REEJI",
        t.size = 18.32,
        t.text = "任务奖励",
        t.textColor = 4187130,
        t.x = 27,
        t.y = 166,
        t
    },
    i.txtTaskPgsTitle_2_i = function() {
        var t = new eui.Label;
        return this.txtTaskPgsTitle_2 = t,
        t.fontFamily = "REEJI",
        t.size = 18.32,
        t.text = "任务进度",
        t.textColor = 4187130,
        t.x = 27,
        t.y = 287,
        t
    },
    i.topMid_i = function() {
        var t = new eui.Group;
        return this.topMid = t,
        t.right = 0,
        t.width = 324,
        t.y = 11,
        t.elementsContent = [this.imgDi2_i(), this.imgDi2_2_i(), this.txtMedalNum_i(), this.txtCoinNum_i(), this.medal_i(), this.coin_i()],
        t
    },
    i.imgDi2_i = function() {
        var t = new eui.Image;
        return this.imgDi2 = t,
        t.source = "pve_resource_collection_img_di2_png",
        t.x = 187,
        t.y = 5,
        t
    },
    i.imgDi2_2_i = function() {
        var t = new eui.Image;
        return this.imgDi2_2 = t,
        t.source = "pve_resource_collection_img_di2_png",
        t.x = 22,
        t.y = 5,
        t
    },
    i.txtMedalNum_i = function() {
        var t = new eui.Label;
        return this.txtMedalNum = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 89.5,
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    i.txtCoinNum_i = function() {
        var t = new eui.Label;
        return this.txtCoinNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.x = 67,
        t.y = 6,
        t
    },
    i.medal_i = function() {
        var t = new eui.Image;
        return this.medal = t,
        t.height = 30,
        t.width = 30,
        t.x = 174,
        t.y = 0,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 45,
        t.width = 45,
        t.x = 0,
        t.y = -7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveResourcePetPopSkin.exml"] = window.PveResourcePetPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "txt_cost", "coin", "btnBuy", "btnDetail", "txt_name", "txt_desc", "txt_num", "img_head"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this.btnBuy_i(), this._Image4_i(), this.btnDetail_i(), this.txt_name_i(), this.txt_desc_i(), this.txt_num_i(), this._Image5_i(), this._Rect1_i(), this.img_head_i(), this._Image6_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.scale9Grid = new egret.Rectangle(8, 8, 5, 3),
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_m_png",
        t.width = 476,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 439,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 329,
        t.y = 213,
        t.elementsContent = [this._Image3_i(), this._Group2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "common_btn_bg_yellow_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 12,
        t.elementsContent = [this.txt_cost_i(), this.coin_i()],
        t
    },
    i.txt_cost_i = function() {
        var t = new eui.Label;
        return this.txt_cost = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "500",
        t.textColor = 10181146,
        t.x = 33,
        t.y = 0,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 22,
        t.source = "pve_resource_strong_pet_item_coin_png",
        t.width = 23,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 131,
        t.source = "pve_resource_pet_pop_petbg_png",
        t.width = 436,
        t.x = 23,
        t.y = 48,
        t
    },
    i.btnDetail_i = function() {
        var t = new eui.Image;
        return this.btnDetail = t,
        t.height = 34,
        t.source = "pve_resource_pet_pop_btnDetail_png",
        t.width = 101,
        t.x = 35,
        t.y = 218,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "火焰至尊 艾恩斯",
        t.textColor = 13820671,
        t.x = 173,
        t.y = 65,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 7,
        t.size = 18,
        t.text = "赠送精灵的第五技能，专属特性，\n专属刻印",
        t.textColor = 6258105,
        t.x = 173,
        t.y = 103,
        t
    },
    i.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.fontFamily = "MFShangHei",
        t.right = 19,
        t.size = 18,
        t.text = "当前拥有：8000000",
        t.textColor = 6258105,
        t.y = 191,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "pve_resource_pet_pop_title_png",
        t.width = 104,
        t.x = 33,
        t.y = 1,
        t
    },
    i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.height = 100,
        t.width = 100,
        t.x = 38,
        t.y = 63,
        t
    },
    i.img_head_i = function() {
        var t = new eui.Image;
        return this.img_head = t,
        t.height = 98,
        t.source = "pve_resource_pet_pop_img_head_png",
        t.width = 98,
        t.x = 39,
        t.y = 64,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 103,
        t.source = "pve_resource_pet_pop_headFrame_png",
        t.width = 103,
        t.x = 37,
        t.y = 62,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveEnterPanelSkin.exml"] = window.pveEnterPanel.PveEnterPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "img_btn_close", "top", "texture_reward_bg", "imgBtn_reward", "btnTask", "left_down", "_list", "_scrl", "rb_3", "rb_2", "rb_1", "rb_0", "grp_rb"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.top_i(), this.left_down_i(), this._scrl_i(), this.grp_rb_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_enter_panel3_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_enter_panel3_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_enter_panel2_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_enter_panel2_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_enter_panel1_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_enter_panel1_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_enter_panel0_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_enter_panel0_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    s = e.prototype;
    return s._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.horizontalCenter = 0,
        t.source = "common_ui_bg_2_png",
        t.percentWidth = 100,
        t.y = 0,
        t
    },
    s.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.title_i(), this.img_btn_close_i()],
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(581, 22, 320, 16),
        t.source = "common_top_bg_style1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    s.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pve_enter_panel_title_1_png",
        t.x = 112,
        t.y = 8,
        t
    },
    s.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.left_down_i = function() {
        var t = new eui.Group;
        return this.left_down = t,
        t.bottom = 0,
        t.left = 0,
        t.visible = !0,
        t.elementsContent = [this.texture_reward_bg_i(), this.imgBtn_reward_i(), this.btnTask_i()],
        t
    },
    s.texture_reward_bg_i = function() {
        var t = new eui.Image;
        return this.texture_reward_bg = t,
        t.height = 113,
        t.source = "pve_enter_panel_texture_reward_bg_png",
        t.visible = !0,
        t.width = 113,
        t.x = 0,
        t.y = 0,
        t
    },
    s.imgBtn_reward_i = function() {
        var t = new eui.Image;
        return this.imgBtn_reward = t,
        t.height = 52,
        t.source = "pve_enter_panel_imgBtn_reward_png",
        t.width = 146,
        t.x = 25,
        t.y = 55,
        t
    },
    s.btnTask_i = function() {
        var t = new eui.Image;
        return this.btnTask = t,
        t.height = 52,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_enter_panel_imgBtn_task_png",
        t.width = 145,
        t.x = 177.00000000000003,
        t.y = 55,
        t
    },
    s._scrl_i = function() {
        var t = new eui.Scroller;
        return this._scrl = t,
        t.height = 462,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 100,
        t.viewport = this._list_i(),
        t
    },
    s._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    s._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t.paddingLeft = 44,
        t.paddingRight = 44,
        t
    },
    s.grp_rb_i = function() {
        var t = new eui.Group;
        return this.grp_rb = t,
        t.right = 9,
        t.y = 583,
        t.elementsContent = [this.rb_3_i(), this.rb_2_i(), this.rb_1_i(), this.rb_0_i()],
        t
    },
    s.rb_3_i = function() {
        var t = new eui.RadioButton;
        return this.rb_3 = t,
        t.groupName = "pve_enter_tab",
        t.value = "4",
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    s.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "pve_enter_tab",
        t.value = "5",
        t.x = 122,
        t.y = 0,
        t.skinName = n,
        t
    },
    s.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "pve_enter_tab",
        t.value = "2",
        t.x = 244,
        t.y = 0,
        t.skinName = r,
        t
    },
    s.rb_0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_0 = t,
        t.groupName = "pve_enter_tab",
        t.value = "1",
        t.x = 366,
        t.y = 0,
        t.skinName = o,
        t
    },
    e
} (eui.Skin);