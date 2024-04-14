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
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                _(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, _ = {
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
pveXTeamRoom; !
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {},
        t.prototype.UpdateAll = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.UpdateView()];
                    case 1:
                        return t.sent(),
                        [4, this.playTweens()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve().then(function() {
                            e.completeCallBack()
                        })]
                    }
                })
            })
        },
        t.prototype.UpdateView = function() {
            return Promise.resolve()
        },
        t.prototype.playTweens = function() {
            return Promise.resolve()
        },
        t.prototype.clearTweens = function() {},
        t.prototype.completeCallBack = function() {},
        t.prototype.destroy = function() {
            this.clearTweens(),
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.BaseView = t,
    __reflect(t.prototype, "pveXTeamRoom.BaseView", ["pveXTeamRoom.IView"])
} (pveXTeamRoom || (pveXTeamRoom = {}));
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
pveXTeamRoom; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            i.skinName = e.RewardStyle1Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        i.prototype._initEvents = function() {},
        i.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.dataChanged = function() {
            var e = this.data;
            this.icon.source = ItemXMLInfo.getIconURL(e.id),
            this.txt_count.text = e.count + "",
            this.reward_flag.visible = Boolean(e.rewardFlag)
        },
        i.prototype.destroy = function() {
            this._removeEvents()
        },
        i
    } (eui.ItemRenderer);
    e.RewardStyle1 = t,
    __reflect(t.prototype, "pveXTeamRoom.RewardStyle1")
} (pveXTeamRoom || (pveXTeamRoom = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                _(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, _ = {
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
pveXTeamRoom; !
function(e) {
    var t; !
    function(e) {
        e[e.BOSS = 0] = "BOSS",
        e[e.GUIYUE = 1] = "GUIYUE",
        e[e.CHANYI = 2] = "CHANYI",
        e[e.LIQ = 3] = "LIQ"
    } (t = e.EXP_TYPE || (e.EXP_TYPE = {}));
    var i = function(t) {
        function i(i) {
            var n = t.call(this, i) || this;
            return n.skinName = e.XTeamRoomMainViewSkin,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.initBtnClose("x_team_room_main_view_top_title_png", this,
            function() {
                e.DataManger.getInstance().currentSelectedId > 0 ? e.DataManger.getInstance().setConfigId(0) : e.DataManger.getInstance().GetFbOpenFlag() ? Alert.show("中途退出视为未通关，确认退出吗？",
                function() {
                    e.DataManger.getInstance().c2s_Close_Fb().then(function() {
                        i._onShowView()
                    })
                }) : i.onClose()
            },
            this),
            this.initBtnHelpById(104),
            this.adaptLeftContent(this.grp_petBtn),
            this.select_view.hide(),
            this.normallevel_view.hide(),
            this.bosslevel_view.hide(),
            this._viewList = [this.select_view, this.normallevel_view, this.bosslevel_view],
            this._initEvents(),
            e.DataManger.getInstance().BindViewInstance(this),
            e.DataManger.getInstance().initData().then(function() {
                var t = 0;
                i.data && (t = i.data),
                e.DataManger.getInstance().setConfigId(t)
            })
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_cure, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imgBtn_pet, this._onTouchImageButton, this),
            e.DataManger.getInstance().addEventListener("event_change_selecetd_id", this.onChangeView, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            e.DataManger.getInstance().removeEventListener("event_change_selecetd_id", this.onChangeView, this)
        },
        i.prototype.show = function() {
            t.prototype.show.call(this)
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this)
        },
        i.prototype._getCurrentView = function() {
            if (0 === e.DataManger.getInstance().currentSelectedId) return this._viewList[0];
            var t = config.X_Team.getItem(e.DataManger.getInstance().currentSelectedId);
            return t.indexType > 0 ? this._viewList[1] : this._viewList[2]
        },
        i.prototype._onShowView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return e = this._getCurrentView(),
                        [4, e.UpdateView()];
                    case 1:
                        return t.sent(),
                        e.show(),
                        [4, e.playTweens()];
                    case 2:
                        return t.sent(),
                        e.completeCallBack(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.UpdateTitle = function() {
            this.grp_petBtn.visible = e.DataManger.getInstance().currentSelectedId > 0
        },
        i.prototype.onChangeView = function() {
            this.select_view.hide(),
            this.normallevel_view.hide(),
            this.bosslevel_view.hide(),
            this.UpdateTitle(),
            this._onShowView()
        },
        i.prototype._onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.imgBtn_pet:
                ModuleManager.showModuleByID(10);
                break;
            case this.imgBtn_cure:
                PetManager.cureAll()
            }
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            this.select_view.destroy(),
            this.normallevel_view.destroy(),
            this.bosslevel_view.destroy(),
            t.prototype.destroy.call(this),
            e.DataManger.getInstance().setConfigId( - 1),
            e.DataManger.getInstance().ClearBindViewInstance()
        },
        i
    } (BaseModule);
    e.PveXTeamRoom = i,
    __reflect(i.prototype, "pveXTeamRoom.PveXTeamRoom")
} (pveXTeamRoom || (pveXTeamRoom = {}));
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
pveXTeamRoom; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.CompLevelItemSkin,
            i
        }
        return __extends(i, t),
        i.prototype.setData = function(e) {
            this.updateView()
        },
        i.prototype.childrenCreated = function() {
            this._expType = +this.currentState.split("_")[1],
            this._maskCirl = new egret.Sprite,
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this,
            function() {
                var i = config.X_Team.getItemsByField("indexType", ["=="], [t._expType]);
                e.DataManger.getInstance().setConfigId(i[0].id)
            },
            this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.updateView = function() {
            var t = e.DataManger.getInstance().GetExpValueByType(this._expType),
            i = e.DataManger.getInstance().DAILY_EXP_LIMIT;
            this.txt_Progress.text = i - t + "%",
            this.progress.scaleX = (i - t) / i
        },
        i.prototype._drawProgress = function(e) {
            this._maskCirl.graphics.clear(),
            this._maskCirl.graphics.beginFill(16711680, 1);
            var t = Math.max(.5 * this.progress.width, .5 * this.progress.height);
            this._maskCirl.graphics.moveTo(0, 0),
            this._maskCirl.graphics.lineTo(t, 0),
            this._maskCirl.graphics.drawArc(0, 0, t, 0, 360 * e * Math.PI / 180),
            this._maskCirl.graphics.endFill()
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.CompLevelItem = t,
    __reflect(t.prototype, "pveXTeamRoom.CompLevelItem")
} (pveXTeamRoom || (pveXTeamRoom = {}));
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
pveXTeamRoom; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.PetPageSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.touchEnabled = !1,
            this.img.pixelHitTest = !0,
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            this.img.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapHandler, this)
        },
        i.prototype._removeEvents = function() {
            this.img.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapHandler, this)
        },
        i.prototype.setData = function(e) {
            this._cfg = e,
            this.updateAll()
        },
        i.prototype.setSelected = function(e) {
            this.selected_pos.visible = e
        },
        i.prototype.updateAll = function() {
            var e = RES.getRes("x_team_room_pet_page_" + this._cfg.boss + "_png");
            this.img.source = e
        },
        i.prototype._onTouchTapHandler = function(e) {
            this.dispatchEventWith("event_selected_item", !1, this)
        },
        i.prototype.getConfig = function() {
            return this._cfg
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this),
            this._cfg = null
        },
        i
    } (BaseModule);
    e.PetPage = t,
    __reflect(t.prototype, "pveXTeamRoom.PetPage")
} (pveXTeamRoom || (pveXTeamRoom = {}));
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
pveXTeamRoom; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            i.skinName = e.RewardStyle2Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        i.prototype._initEvents = function() {},
        i.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.dataChanged = function() {
            var e = this.data;
            this.icon.source = ItemXMLInfo.getIconURL(e.id),
            this.txt_count.text = e.count + ""
        },
        i.prototype.destroy = function() {
            this._removeEvents()
        },
        i
    } (eui.ItemRenderer);
    e.RewardStyle2 = t,
    __reflect(t.prototype, "pveXTeamRoom.RewardStyle2")
} (pveXTeamRoom || (pveXTeamRoom = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                _(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, _ = {
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
pveXTeamRoom; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.WEEKLY_REWARD_LIMIT = 5,
            t.DAILY_EXP_LIMIT = 100,
            t.ROUND_LIMT = 40,
            t.DDAILY_OPEN_FB_LIMIT = 3,
            t
        }
        return __extends(t, e),
        t.getInstance = function() {
            return this._instance || (t._instance = new t),
            t._instance
        },
        t.prototype.UpdateAllValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this._viewIns.updateConfigMulitValues()];
                    case 1:
                        return e.sent(),
                        [4, this.initData()];
                    case 2:
                        return e.sent(),
                        this._viewIns.UpdateTitle(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        t.prototype.initData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                function(i) {
                    return e = core.constant.ValueType,
                    t = this._viewIns.getMultivalue.bind(this._viewIns),
                    this._dailyFBOpenCnt = t(e.DAILY, 12769),
                    this._currentRoundNum = t(e.DAILY, 12770),
                    this._dailyExp_Def = t(e.DAILY, 12771),
                    this._dailyExp_Atk = t(e.DAILY, 12772),
                    this._dailyExp_GUSHANG = t(e.DAILY, 12773),
                    this._dailyMinRound = t(e.DAILY, 12774),
                    this._dailyRoundHistroy = t(e.DAILY, 12775),
                    this._weeklyBattleCnt = t(e.WEEKLY, 20133),
                    this._weeklyDailyRewardCnt = t(e.WEEKLY, 20139),
                    this._foreverRoundHistroy = t(e.FOREVER, 108104),
                    this._weeklyRewardFlag = Boolean(t(e.WEEKLY_BITBUF, 2000036)),
                    this._currentOpenFBFlag = Boolean(t(e.PLAYER_INFO, 1197)),
                    this._dailyRewardFlag = Boolean(t(e.DAILYBITBUF, 1000585)),
                    [2, Promise.resolve()]
                })
            })
        },
        t.prototype.setConfigId = function(e, t) {
            void 0 === t && (t = !0),
            this._currentSelectedId != e && (this._currentSelectedId = e, t && this.dispatchEventWith("event_change_selecetd_id"))
        },
        t.prototype.GetExpValueByType = function(e) {
            return 1 === e ? this._dailyExp_Def: 2 === e ? this._dailyExp_Atk: 3 === e ? this._dailyExp_GUSHANG: 0
        },
        t.prototype.GetDailyRewardFlag = function() {
            return this._dailyRewardFlag
        },
        t.prototype.GetDailyFBOpenCnt = function() {
            return this._dailyFBOpenCnt
        },
        t.prototype.GetCurrentRoundNum = function() {
            return this._currentRoundNum
        },
        t.prototype.GetHistoryRoundNum = function() {
            return this._foreverRoundHistroy
        },
        t.prototype.GetDailyHistroyRoundNum = function() {
            for (var e = [], t = 8, i = 0; 3 > i; i++) {
                var n = this._dailyRoundHistroy >> i * t & 255;
                0 === n || n > this.ROUND_LIMT ? e.push(0) : e.push(n)
            }
            return e
        },
        t.prototype.GetDailyReward = function() {
            var e = [{
                st: 1,
                ed: 1,
                types: "1_1",
                items: "300790_300403",
                num: "3_2"
            },
            {
                st: 2,
                ed: 3,
                types: "1_1",
                items: "300790_300403",
                num: "3_1"
            },
            {
                st: 4,
                ed: 8,
                types: "1_1",
                items: "1707511_300402",
                num: "20_1"
            },
            {
                st: 9,
                ed: 20,
                types: "1_1",
                items: "1707511_300401",
                num: "20_2"
            },
            {
                st: 21,
                ed: 40,
                types: "1_1",
                items: "1707511_300401",
                num: "20_1"
            }],
            t = this._dailyMinRound;
            if (0 === t) return null;
            for (var i = 0; i < e.length; i++) if (e[i].st <= t && t <= e[i].ed) return core.gameUtil.RewardDataFormat.parseRewardStyle1(e[i].types, e[i].items, e[i].num);
            return console.error("通关数为%i,没有与配置符合的奖励", t),
            null
        },
        t.prototype.GetDailyMinRoundCnt = function() {
            return this._dailyMinRound
        },
        t.prototype.GetWeeklyBattleCnt = function() {
            return this._weeklyBattleCnt
        },
        t.prototype.GetWeeklyRewardGetFlag = function() {
            return this._weeklyRewardFlag
        },
        t.prototype.GetWeekRewardState = function() {
            var e = this.GetWeeklyRewardGetFlag();
            if (e) return - 1;
            var i = t.getInstance().WEEKLY_REWARD_LIMIT,
            n = t.getInstance().GetWeeklyBattleCnt();
            return n >= i ? 1 : 0
        },
        t.prototype.GetFbOpenFlag = function() {
            return this._currentOpenFBFlag
        },
        t.prototype.GetWeekDailyRewardCnt = function() {
            return this._weeklyDailyRewardCnt
        },
        t.prototype.c2s_get_weekly_reward = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [105, 3, 0, 0])];
                    case 1:
                        return e.sent(),
                        this._weeklyRewardFlag = !0,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        t.prototype.c2s_go_battle = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return egret.lifecycle.stage.touchChildren = !1,
                    egret.setTimeout(function() {
                        egret.lifecycle.stage.touchChildren = !0
                    },
                    this, 1e3),
                    [2, SocketConnection.sendWithPromise(CommandID.FIGHT_H5_PVE_BOSS, [105, e, 0])]
                })
            })
        },
        t.prototype.c2s_Start_Fb = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [105, 1, 1, 0])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        t.prototype.c2s_Close_Fb = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [105, 1, 2, 0])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        t.prototype.c2s_Get_DailyReward = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42395, [105, 2, 0, 0])];
                    case 1:
                        return e.sent(),
                        [4, this.UpdateAllValue()];
                    case 2:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        Object.defineProperty(t.prototype, "currentSelectedId", {
            get: function() {
                return this._currentSelectedId
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.BindViewInstance = function(e) {
            this._viewIns = e
        },
        t.prototype.ClearBindViewInstance = function() {
            this._viewIns = null
        },
        t
    } (egret.EventDispatcher);
    e.DataManger = t,
    __reflect(t.prototype, "pveXTeamRoom.DataManger")
} (pveXTeamRoom || (pveXTeamRoom = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                _(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, _ = {
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
pveXTeamRoom; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.BossLevelViewSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.list_reward.itemRenderer = e.RewardStyle2,
            this._rewardArry = new eui.ArrayCollection,
            this.list_reward.dataProvider = this._rewardArry,
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_battle, this._onTouchImageButton, this),
            this.list_reward.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this)
        },
        i.prototype._removeEvents = function() {
            this.list_reward.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function() {
            var t = config.X_Team.getItem(7);
            this._rewardArry.replaceAll(core.gameUtil.RewardDataFormat.parseRewardStyle1(t.rewardtype, t.rewardid, t.rewardcnt)),
            this._rewardArry.refresh(),
            this.txt_round.text = "" + e.DataManger.getInstance().GetCurrentRoundNum();
            for (var i = ["fangyu", "gongji", "gushang"], n = 1; 3 >= n; n++) {
                var r = e.DataManger.getInstance().GetExpValueByType(n);
                this["done_" + n].visible = 60 >= 100 - r,
                this["txt_" + i[n - 1]].textColor = 60 >= 100 - r ? "0x3fe3fa": "0x859fd3"
            }
            return Promise.resolve()
        },
        i.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            i = {};
            i.id = t.id,
            tipsPop.TipsPop.openItemPop(i)
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        i.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        i.prototype.clearTweens = function() {},
        i.prototype.completeCallBack = function() {},
        i.prototype._onTouchImageButton = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_battle:
                var i = this,
                n = e.DataManger.getInstance().GetDailyFBOpenCnt();
                EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
                function(t) {
                    EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, arguments.callee, i),
                    e.DataManger.getInstance().UpdateAllValue().then(function() {
                        if (!e.DataManger.getInstance().GetFbOpenFlag()) {
                            var t = e.DataManger.getInstance().GetDailyHistroyRoundNum();
                            0 !== t[n - 1] ? (e.DataManger.getInstance().setConfigId(0), Alarm.show("通关成功！本次副本挑战共" + t[n - 1] + "回合！")) : (e.DataManger.getInstance().setConfigId(0), Alarm.show("副本挑战失败！"))
                        }
                        i.UpdateAll()
                    })
                },
                i),
                e.DataManger.getInstance().c2s_go_battle(7)
            }
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this),
            this.list_reward.removeChildren(),
            this._rewardArry.removeAll()
        },
        i
    } (e.BaseView);
    e.BossLevelView = t,
    __reflect(t.prototype, "pveXTeamRoom.BossLevelView")
} (pveXTeamRoom || (pveXTeamRoom = {}));
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
pveXTeamRoom; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.NewSelectLevelViewSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.adaptRightContent(this.grpright),
            this.list_DailyReward.itemRenderer = e.RewardStyle1,
            this.list_DailyReward.dataProvider = new eui.ArrayCollection,
            this._canOpenMovieClip = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", "canopen"),
            this._canOpenMovieClip.name = "canopen",
            this._canOpenMovieClip.scaleX = .4,
            this._canOpenMovieClip.scaleY = .4,
            this._canOpenMovieClip.x = 256,
            this._canOpenMovieClip.x = 180,
            this._canOpenMovieClip.y = -2,
            this._canOpenMovieClip.visible = !1,
            this.icon_box.parent.addChild(this._canOpenMovieClip),
            this._openMovieClip = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", "open"),
            this._openMovieClip.name = "open",
            this._openMovieClip.scaleX = .4,
            this._openMovieClip.scaleY = .4,
            this._openMovieClip.x = 180,
            this._openMovieClip.y = 2,
            this._openMovieClip.visible = !1,
            this.icon_box.parent.addChild(this._openMovieClip),
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.item_1, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.item_2, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.item_3, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnStart, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnFight, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btnReward, this._onTouchImageButton, this),
            this.list_DailyReward.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this._canOpenMovieClip.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchImageButton, this),
            this._openMovieClip.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchImageButton, this)
        },
        i.prototype._removeEvents = function() {
            this.list_DailyReward.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this._canOpenMovieClip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchImageButton, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function() {
            this._setHistroyState(),
            this._setDailyHistroy(),
            this._setDailyReward(),
            this._setWeekRewardStatus(),
            this.txt_openCnt.text = e.DataManger.getInstance().GetDailyFBOpenCnt() + "/3",
            this.txt_round.text = "" + e.DataManger.getInstance().GetCurrentRoundNum();
            var t = e.DataManger.getInstance().GetFbOpenFlag();
            if (this.after_open.visible = t, this.after_open2.visible = t, this.item_1.visible = this.item_2.visible = this.item_3.visible = t, t) {
                var i = [this.item_1, this.item_2, this.item_3];
                gsap.from(i, {
                    x: 500,
                    alpha: 0,
                    stagger: .05,
                    ease: Quad.easeOut
                })
            } else {
                var n = [this.rightUp, this.history_fastest, this.today_result, this.passLv_reward];
                gsap.from(n, {
                    x: 500,
                    alpha: 0,
                    stagger: .05,
                    ease: Quad.easeOut
                })
            }
            if (this.before_open.visible = !t, this.today_result.visible = !t, t) this.item_1.updateView(),
            this.item_2.updateView(),
            this.item_3.updateView();
            else {
                var r = e.DataManger.getInstance().GetDailyFBOpenCnt();
                this.img_clear.visible = r >= e.DataManger.getInstance().DDAILY_OPEN_FB_LIMIT || e.DataManger.getInstance().GetDailyRewardFlag(),
                this.gr_btnStart.visible = !this.img_clear.visible
            }
            return Promise.resolve()
        },
        i.prototype._setHistroyState = function() {
            var t = e.DataManger.getInstance().GetHistoryRoundNum();
            this.txt_histroy.text = t > 0 ? t + "回合": "未通关"
        },
        i.prototype._setDailyHistroy = function() {
            for (var t = e.DataManger.getInstance().GetDailyFBOpenCnt(), i = e.DataManger.getInstance().GetDailyHistroyRoundNum(), n = !0, r = 0, o = 0; o < i.length; o++) t > o + 1 ? this["result" + (o + 1)].visible = !0 : o + 1 !== t || e.DataManger.getInstance().GetFbOpenFlag() ? this["result" + (o + 1)].visible = !1 : this["result" + (o + 1)].visible = !0,
            this["result" + (o + 1)].visible && (n = !1, 0 == r && i[o] > 0 && (r = i[o]), i[o] > 0 && i[o] < r && (r = i[o]), this["txt_dailyHistroy" + o].textColor = "0x859fd3", this["img_today_result_tx_bg_" + o].source = "x_team_room_main_view_img_today_result_tx_bg_1_png", this["txt_dailyHistroy" + o].text = i[o] > 0 ? o + 1 + "." + i[o] + "回合": o + 1 + ".未通关");
            if (!n && r > 0) {
                var a = i.indexOf(r);
                this["img_today_result_tx_bg_" + a].source = "x_team_room_main_view_img_today_result_tx_bg_0_png",
                this["txt_dailyHistroy" + a].textColor = "0x3fe3fa"
            }
            this.txt_NodailyHistory.visible = n
        },
        i.prototype._setDailyReward = function() {
            var t = e.DataManger.getInstance().GetWeekDailyRewardCnt(),
            i = t >= 5;
            if (this.txtRewardFlag.visible = i, this.list_DailyReward.visible = !this.txtRewardFlag.visible, this.btnReward.visible = !1, this.flagGot.visible = !1, this.txt_noReward.visible = !this.txtRewardFlag.visible, !i) {
                var n = e.DataManger.getInstance().GetDailyReward();
                if (this.list_DailyReward.dataProvider.removeAll(), n) {
                    for (var r = 0; r < n.length; r++) this.list_DailyReward.dataProvider.addItem(n[r]);
                    this.txt_noReward.visible = !1,
                    this.btnReward.visible = !e.DataManger.getInstance().GetDailyRewardFlag(),
                    this.flagGot.visible = !this.btnReward.visible
                }
            }
        },
        i.prototype._setWeekRewardStatus = function() {
            var t = e.DataManger.getInstance().GetWeeklyBattleCnt();
            this.txt_week.text = t + "/5";
            var i = e.DataManger.getInstance().GetWeekRewardState();
            this._weekRewardStateFlag != i && (this._weekRewardStateFlag = i, this._openMovieClip.visible = !1, this._canOpenMovieClip.visible = !1, this._canOpenMovieClip.touchEnabled = !0, -1 === i ? (this._openMovieClip.visible = !0, this._openMovieClip.gotoAndStop(this._openMovieClip.totalFrames)) : 0 === i ? (this._openMovieClip.touchEnabled = !0, this._openMovieClip.visible = !0, this._openMovieClip.gotoAndStop(1)) : (this._canOpenMovieClip.visible = !0, this._canOpenMovieClip.gotoAndPlay(1, -1)))
        },
        i.prototype.playTweens = function() {
            return Promise.resolve()
        },
        i.prototype.clearTweens = function() {},
        i.prototype._onTouchImageButton = function(t) {
            var i = this;
            switch (t.currentTarget) {
            case this._canOpenMovieClip:
                this._canOpenMovieClip.isPlaying ? e.DataManger.getInstance().c2s_get_weekly_reward().then(function() {
                    i.UpdateView()
                }) : this._showTips({
                    id: 2300017,
                    type: 1,
                    count: 1
                });
                break;
            case this._openMovieClip:
                this._openMovieClip.isPlaying || this._showTips({
                    id: 2300017,
                    type: 1,
                    count: 1
                });
                break;
            case this.btnStart:
                e.DataManger.getInstance().c2s_Start_Fb().then(function() {
                    i.UpdateView()
                });
                break;
            case this.btnReward:
                var n = e.DataManger.getInstance().GetFbOpenFlag();
                if (n) Alert.show("领取奖励后今日无法继续挑战，确定直接领取奖励吗？",
                function() {
                    e.DataManger.getInstance().c2s_Get_DailyReward().then(function() {
                        i.UpdateView()
                    })
                });
                else {
                    var r = e.DataManger.getInstance().GetDailyFBOpenCnt();
                    r < e.DataManger.getInstance().DDAILY_OPEN_FB_LIMIT ? 1 === e.DataManger.getInstance().GetDailyMinRoundCnt() ? e.DataManger.getInstance().c2s_Get_DailyReward().then(function() {
                        i.UpdateView()
                    }) : Alert.show("领取奖励后今日无法再开启副本，还有挑战机会未用完，直接领取奖励吗？",
                    function() {
                        e.DataManger.getInstance().c2s_Get_DailyReward().then(function() {
                            i.UpdateView()
                        })
                    }) : e.DataManger.getInstance().c2s_Get_DailyReward().then(function() {
                        i.UpdateView()
                    })
                }
                break;
            case this.btnFight:
                0 == e.DataManger.getInstance().GetExpValueByType(1) && 0 == e.DataManger.getInstance().GetExpValueByType(2) && 0 == e.DataManger.getInstance().GetExpValueByType(3) ? Alert.show("当前X·神迹处于全胜状态，是否直接开始最终试炼？\n	(挑战削弱关卡可以削弱X·神迹的实力)",
                function() {
                    e.DataManger.getInstance().setConfigId(7)
                }) : e.DataManger.getInstance().setConfigId(7);
                break;
            case this.item_1:
                this._openNormalView(1);
                break;
            case this.item_2:
                this._openNormalView(2);
                break;
            case this.item_3:
                this._openNormalView(3)
            }
        },
        i.prototype._openNormalView = function(t) {
            var i = e.DataManger.getInstance().GetExpValueByType(t);
            if (20 >= 100 - i) {
                var n = ["防御", "攻击", "固伤"];
                return void BubblerManager.getInstance().showText(n[t - 1] + "指数已经下降至最低点，可以选择其他的关卡进行挑战")
            }
            var r = config.X_Team.getItemsByField("indexType", ["=="], [t]);
            e.DataManger.getInstance().setConfigId(r[0].id)
        },
        i.prototype._onTouchTapItem = function(e) {
            this._showTips(e.item)
        },
        i.prototype._showTips = function(e) {
            var t = {};
            t.id = e.id,
            tipsPop.TipsPop.openItemPop(t)
        },
        i.prototype.destroy = function() {
            var e = [this.rightUp, this.history_fastest, this.today_result, this.passLv_reward];
            gsap.killTweensOf(e);
            var i = [this.item_1, this.item_2, this.item_3];
            gsap.killTweensOf(i),
            this.clearTweens(),
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (e.BaseView);
    e.NewSelectedLevelView = t,
    __reflect(t.prototype, "pveXTeamRoom.NewSelectedLevelView")
} (pveXTeamRoom || (pveXTeamRoom = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function a(e) {
            try {
                _(n.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function _(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
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
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, _ = {
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
pveXTeamRoom; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._arr = ["防御", "攻击", "固伤"],
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.adaptRightContent(this.grpright),
            this.progress_item.value = 0,
            this.progress_item.slideDuration = 0,
            this.list_reward.itemRenderer = e.RewardStyle2,
            this._rewardArry = new eui.ArrayCollection,
            this.list_reward.dataProvider = this._rewardArry,
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            this.page1.addEventListener("event_selected_item", this._onTouchImageButton, this),
            this.page2.addEventListener("event_selected_item", this._onTouchImageButton, this),
            this.list_reward.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            ImageButtonUtil.add(this.imgBtn_battle, this._onTouchImageButton, this)
        },
        i.prototype._removeEvents = function() {
            this.list_reward.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this.page1.removeEventListener("event_selected_item", this._onTouchImageButton, this),
            this.page2.removeEventListener("event_selected_item", this._onTouchImageButton, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function() {
            var t = e.DataManger.getInstance().currentSelectedId,
            i = config.X_Team.getItem(t),
            n = config.X_Team.getItemsByField("indexType", ["=="], [i.indexType]);
            this.page1.setData(n[0]),
            this.page2.setData(n[1]),
            this._currentSelectedPage || (this._currentSelectedPage = this.page1),
            this.tx_name.text = this._arr[i.indexType - 1];
            var r = e.DataManger.getInstance().DAILY_EXP_LIMIT,
            o = e.DataManger.getInstance().GetExpValueByType(i.indexType);
            return this.txt_crtV.text = r - o + "%",
            this.progress_item.minimum = 0,
            this.progress_item.maximum = r,
            this.progress_item.value = r - o,
            DisplayUtil.setEnabled(this.imgBtn_battle, r - o > 20, !(r - o > 20)),
            this.t_desc.text = this._arr[i.indexType - 1] + "指数小于等于60%，即可削弱X·神迹的" + this._arr[i.indexType - 1] + "能力\n" + this._arr[i.indexType - 1] + "指数最低可以降至20%",
            this.txt_round.text = "" + e.DataManger.getInstance().GetCurrentRoundNum(),
            Promise.resolve()
        },
        i.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.updateSelectedPageState(),
                        e = this.progress_item.value,
                        this._progressValue = 0,
                        this.progress_item.value = 0,
                        this.txt_crtV.text = "0%",
                        [4, common.TweenUtil.TweenToPromise(egret.Tween.get(this).to({
                            progressValue: e
                        },
                        500, egret.Ease.quadOut))];
                    case 1:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens(),
            this._currentSelectedPage = null
        },
        i.prototype.clearTweens = function() {
            egret.Tween.removeTweens(this)
        },
        Object.defineProperty(i.prototype, "progressValue", {
            get: function() {
                return this._progressValue
            },
            set: function(e) {
                this._progressValue = e,
                this.progress_item.value = e,
                this.txt_crtV.text = Math.floor(e) + "%"
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype._onTouchImageButton = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_battle:
                var i = this,
                n = e.DataManger.getInstance().currentSelectedId,
                r = config.X_Team.getItem(n),
                o = e.DataManger.getInstance().GetExpValueByType(r.indexType);
                EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
                function(t) {
                    EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, arguments.callee, i),
                    e.DataManger.getInstance().UpdateAllValue().then(function() {
                        return e.DataManger.getInstance().GetFbOpenFlag() ? (FightManager.isWin && o === e.DataManger.getInstance().GetExpValueByType(r.indexType) && Alarm.show("未按照挑战规则战胜！"), void i.UpdateAll()) : (e.DataManger.getInstance().setConfigId(0), void Alarm.show("副本挑战失败"))
                    })
                },
                i);
                var r = this._currentSelectedPage.getConfig();
                e.DataManger.getInstance().c2s_go_battle(r.id);
                break;
            case this.page1:
            case this.page2:
                this._currentSelectedPage = t.currentTarget,
                this.updateSelectedPageState()
            }
        },
        i.prototype.completeCallBack = function() {
            var t = e.DataManger.getInstance().currentSelectedId,
            i = config.X_Team.getItem(t),
            n = e.DataManger.getInstance().DAILY_EXP_LIMIT,
            r = e.DataManger.getInstance().GetExpValueByType(i.indexType),
            o = n - r;
            if (! (o > 60)) {
                if (20 >= o) {
                    var a = ["防御", "攻击", "固伤"];
                    return void Alarm.show(a[i.indexType - 1] + "指数已经下降至最低点，可以选择其他的关卡进行挑战！",
                    function() {
                        e.DataManger.getInstance().setConfigId(0)
                    })
                }
                var s = egret.localStorage.getItem("pve_x_team_daily_cache_" + MainManager.actorID + "_type_" + i.indexType + "_open_num_" + e.DataManger.getInstance().GetDailyFBOpenCnt());
                if (s) {
                    var _ = Number(s.split("_")[1]),
                    l = SystemTimerManager.sysBJDate;
                    l.getTime() - _ >= 864e5 && this._showAlarm(i.indexType)
                } else this._showAlarm(i.indexType)
            }
        },
        i.prototype._showAlarm = function(t) {
            var i = {
                1 : "已成功削弱X·神迹的防御能力！",
                2 : "已成功削弱X·神迹的攻击能力！",
                3 : "已成功削弱X·神迹的固伤能力！"
            };
            Alarm.show(i[t],
            function() {
                var i = SystemTimerManager.sysBJDate,
                n = new Date(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0, 0).getTime();
                egret.localStorage.setItem("pve_x_team_daily_cache_" + MainManager.actorID + "_type_" + t + "_open_num_" + e.DataManger.getInstance().GetDailyFBOpenCnt(), "zeroTm_" + n)
            })
        },
        i.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            i = {};
            i.id = t.id,
            tipsPop.TipsPop.openItemPop(i)
        },
        i.prototype.updateSelectedPageState = function() {
            for (var e = this.pagePet.numChildren,
            t = 0; e > t; t++) {
                var i = this.pagePet.getChildAt(t);
                i.setSelected(i === this._currentSelectedPage)
            }
            var n = this._currentSelectedPage.getConfig();
            this._rewardArry.replaceAll(core.gameUtil.RewardDataFormat.parseRewardStyle1(n.rewardtype, n.rewardid, n.rewardcnt)),
            this._rewardArry.refresh()
        },
        i.prototype.destroy = function() {
            for (; this.pagePet.numChildren;) {
                var e = this.pagePet.removeChildAt(0);
                e.destroy()
            }
            this.list_reward.removeChildren(),
            this._rewardArry.removeAll(),
            this.clearTweens(),
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (e.BaseView);
    e.NormalLevelView = t,
    __reflect(t.prototype, "pveXTeamRoom.NormalLevelView")
} (pveXTeamRoom || (pveXTeamRoom = {})),
window.pveXTeamRoom = window.pveXTeamRoom || {};
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
generateEUI.paths["resource/eui_skins/comp/CompLevelItemSkin.exml"] = window.pveXTeamRoom.CompLevelItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_LevelItems_bg", "progressBg", "progress", "txt_Progress"],
        this.height = 61,
        this.width = 353,
        this.elementsContent = [this.imge_LevelItems_bg_i(), this.progressBg_i(), this.progress_i(), this.txt_Progress_i()],
        this.states = [new eui.State("state_1", [new eui.SetProperty("imge_LevelItems_bg", "source", "x_team_room_main_view_texture_imge_levelitems_bg_1_png"), new eui.SetProperty("progressBg", "source", "x_team_room_main_view_texture_progressBg_1_png"), new eui.SetProperty("progress", "width", 107)]), new eui.State("state_2", [new eui.SetProperty("imge_LevelItems_bg", "source", "x_team_room_main_view_texture_imge_levelitems_bg_2_png"), new eui.SetProperty("progressBg", "source", "x_team_room_main_view_texture_progressBg_2_png")]), new eui.State("state_3", [new eui.SetProperty("imge_LevelItems_bg", "source", "x_team_room_main_view_texture_imge_levelitems_bg_3_png"), new eui.SetProperty("progressBg", "source", "x_team_room_main_view_texture_progressBg_3_png"), new eui.SetProperty("progress", "width", 107)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imge_LevelItems_bg_i = function() {
        var e = new eui.Image;
        return this.imge_LevelItems_bg = e,
        e.height = 67,
        e.source = "x_team_room_main_view_texture_imge_levelitems_bg_1_png",
        e.width = 353,
        e.x = 0,
        e.y = 0,
        e
    },
    i.progressBg_i = function() {
        var e = new eui.Image;
        return this.progressBg = e,
        e.source = "x_team_room_main_view_texture_progressBg_1_png",
        e.x = 89,
        e.y = 16,
        e
    },
    i.progress_i = function() {
        var e = new eui.Image;
        return this.progress = e,
        e.source = "x_team_room_main_view_texture_progress_png",
        e.width = 107,
        e.x = 90,
        e.y = 17,
        e
    },
    i.txt_Progress_i = function() {
        var e = new eui.Label;
        return this.txt_Progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "70%",
        e.textColor = 16777215,
        e.x = 88,
        e.y = 29,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/PetPageSkin.exml"] = window.pveXTeamRoom.PetPageSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_pet_bg", "img", "selected_pos", "item"],
        this.height = 497,
        this.width = 289,
        this.elementsContent = [this.item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.item_i = function() {
        var e = new eui.Group;
        return this.item = e,
        e.touchEnabled = !1,
        e.elementsContent = [this.img_pet_bg_i(), this.img_i(), this.selected_pos_i()],
        e
    },
    i.img_pet_bg_i = function() {
        var e = new eui.Image;
        return this.img_pet_bg = e,
        e.source = "x_team_room_main_view_pet_page_img_pet_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.img_i = function() {
        var e = new eui.Image;
        return this.img = e,
        e.source = "x_team_room_pet_page_3632_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.selected_pos_i = function() {
        var e = new eui.Image;
        return this.selected_pos = e,
        e.source = "x_team_room_main_view_pet_page_selected_pos_png",
        e.touchEnabled = !1,
        e.x = 20,
        e.y = 20,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ProgressStyle1Skin.exml"] = window.pveXTeamRoom.ProgressStyle1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["thumb", "labelDisplay"],
        this.height = 23,
        this.width = 368,
        this.elementsContent = [this._Image1_i(), this.thumb_i(), this.labelDisplay_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.percentHeight = 100,
        e.source = "x_team_room_main_view_normal_level_view_progress_bg_png",
        e.percentWidth = 100,
        e
    },
    i.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e,
        e.height = 15,
        e.source = "x_team_room_main_view_normal_level_view_progress_png",
        e.width = 341,
        e.x = 14,
        e.y = 5,
        e
    },
    i.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e,
        e.horizontalCenter = 0,
        e.textColor = 16777215,
        e.verticalCenter = 0,
        e.visible = !1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ProgressStyle2Skin.exml"] = window.pveXTeamRoom.ProgressStyle2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["thumb", "labelDisplay"],
        this.height = 4,
        this.width = 106,
        this.elementsContent = [this._Image1_i(), this.thumb_i(), this.labelDisplay_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "x_team_room_main_view_boss_level_view_progress_bg_png",
        e
    },
    i.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e,
        e.percentHeight = 100,
        e.source = "x_team_room_main_view_boss_level_view_progress_hight_png",
        e.percentWidth = 100,
        e
    },
    i.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e,
        e.horizontalCenter = 0,
        e.textColor = 16777215,
        e.verticalCenter = 0,
        e.visible = !1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/RewardStyle1Skin.exml"] = window.pveXTeamRoom.RewardStyle1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon_bg", "icon", "txt_count", "reward_flag"],
        this.height = 73,
        this.width = 73,
        this.elementsContent = [this.icon_bg_i(), this.icon_i(), this.txt_count_i(), this.reward_flag_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.icon_bg_i = function() {
        var e = new eui.Image;
        return this.icon_bg = e,
        e.source = "common_item_bg_style_73_73_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 55,
        e.horizontalCenter = 0,
        e.source = "",
        e.verticalCenter = 0,
        e.width = 55,
        e
    },
    i.txt_count_i = function() {
        var e = new eui.Label;
        return this.txt_count = e,
        e.bottom = 5,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "999",
        e.textAlign = "right",
        e.textColor = 16777215,
        e
    },
    i.reward_flag_i = function() {
        var e = new eui.Image;
        return this.reward_flag = e,
        e.bottom = 0,
        e.horizontalCenter = 0,
        e.scaleX = .9666666666666667,
        e.scaleY = .966667,
        e.source = "common_reward_ylq_png",
        e.visible = !1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/RewardStyle2Skin.exml"] = window.pveXTeamRoom.RewardStyle2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "txt_count"],
        this.height = 73,
        this.width = 73,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.txt_count_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "common_item_bg_style_73_73_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 55,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 55,
        e
    },
    i.txt_count_i = function() {
        var e = new eui.Label;
        return this.txt_count = e,
        e.bottom = 5,
        e.fontFamily = "MFShangHei",
        e.right = 9,
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.text = "9999",
        e.textAlign = "right",
        e.textColor = 16777215,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/BossLevelViewSkin.exml"] = window.pveXTeamRoom.BossLevelViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["BG", "boss_bg", "boss_icon", "rightbg", "imge_normal_lv_reward_bg", "imge_reward_title", "list_reward", "reward", "imge_boss_lv_showInfo_bg", "done_1", "done_2", "done_3", "txt_fangyu", "txt_gongji", "txt_gushang", "flag", "result", "imgBtn_battle", "txt_round_title", "txt_round", "normal_lv_fight", "imge_boss_lv_showInfo_333", "imge_boss_lv_showInfo_222", "imge_boss_lv_showInfo_111", "boss_title", "boss_lv_showInfo_title", "grpright", "info"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.BG_i = function() {
        var e = new eui.Image;
        return this.BG = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "common_ui_bg_3_jpg",
        e.top = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -37.5,
        e.touchEnabled = !1,
        e.verticalCenter = 1,
        e.elementsContent = [this.boss_bg_i(), this.boss_icon_i(), this.grpright_i(), this.info_i()],
        e
    },
    i.boss_bg_i = function() {
        var e = new eui.Image;
        return this.boss_bg = e,
        e.height = 330,
        e.source = "x_team_room_main_view_boss_level_view_boss_bg_png",
        e.width = 521,
        e.x = 108,
        e.y = 229,
        e
    },
    i.boss_icon_i = function() {
        var e = new eui.Image;
        return this.boss_icon = e,
        e.height = 489,
        e.source = "x_team_room_main_view_boss_level_view_boss_icon_png",
        e.width = 641,
        e.x = 0,
        e.y = 36,
        e
    },
    i.grpright_i = function() {
        var e = new eui.Group;
        return this.grpright = e,
        e.x = 659,
        e.y = 0,
        e.elementsContent = [this.rightbg_i(), this.reward_i(), this.result_i(), this.normal_lv_fight_i(), this.boss_lv_showInfo_title_i()],
        e
    },
    i.rightbg_i = function() {
        var e = new eui.Image;
        return this.rightbg = e,
        e.height = 507,
        e.source = "x_team_room_main_view_boss_level_view_rightbg_png",
        e.visible = !1,
        e.width = 402,
        e.x = 1,
        e.y = 41,
        e
    },
    i.reward_i = function() {
        var e = new eui.Group;
        return this.reward = e,
        e.width = 383,
        e.x = 9,
        e.y = 278,
        e.elementsContent = [this.imge_normal_lv_reward_bg_i(), this.imge_reward_title_i(), this.list_reward_i()],
        e
    },
    i.imge_normal_lv_reward_bg_i = function() {
        var e = new eui.Image;
        return this.imge_normal_lv_reward_bg = e,
        e.source = "x_team_room_main_view_normal_level_view_imge_normal_lv_reward_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_reward_title_i = function() {
        var e = new eui.Image;
        return this.imge_reward_title = e,
        e.source = "x_team_room_main_view_normal_level_view_imge_reward_title_png",
        e.x = 15,
        e.y = 11,
        e
    },
    i.list_reward_i = function() {
        var e = new eui.List;
        return this.list_reward = e,
        e.height = 80,
        e.horizontalCenter = 0,
        e.y = 52,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 14,
        e
    },
    i.result_i = function() {
        var e = new eui.Group;
        return this.result = e,
        e.height = 145,
        e.x = 9,
        e.y = 133,
        e.elementsContent = [this.imge_boss_lv_showInfo_bg_i(), this._Image1_i(), this.flag_i()],
        e
    },
    i.imge_boss_lv_showInfo_bg_i = function() {
        var e = new eui.Image;
        return this.imge_boss_lv_showInfo_bg = e,
        e.source = "x_team_room_main_view_boss_level_view_imge_boss_lv_showinfo_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "x_team_room_main_view_boss_level_view_imge__boss_lv_showinfo_title_2_png",
        e.x = 18,
        e.y = 11,
        e
    },
    i.flag_i = function() {
        var e = new eui.Group;
        return this.flag = e,
        e.x = 134,
        e.y = 44,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.done_1_i(), this.done_2_i(), this.done_3_i(), this.txt_fangyu_i(), this.txt_gongji_i(), this.txt_gushang_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "x_team_room_main_view_boss_level_view_Done_bg_png",
        e.x = 4,
        e.y = 7,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "x_team_room_main_view_boss_level_view_Done_bg_png",
        e.x = 4,
        e.y = 38,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "x_team_room_main_view_boss_level_view_Done_bg_png",
        e.x = 4,
        e.y = 68,
        e
    },
    i.done_1_i = function() {
        var e = new eui.Image;
        return this.done_1 = e,
        e.source = "x_team_room_main_view_boss_level_view_Done_png",
        e.x = 5,
        e.y = 8,
        e
    },
    i.done_2_i = function() {
        var e = new eui.Image;
        return this.done_2 = e,
        e.source = "x_team_room_main_view_boss_level_view_Done_png",
        e.x = 5,
        e.y = 39,
        e
    },
    i.done_3_i = function() {
        var e = new eui.Image;
        return this.done_3 = e,
        e.source = "x_team_room_main_view_boss_level_view_Done_png",
        e.x = 5,
        e.y = 69,
        e
    },
    i.txt_fangyu_i = function() {
        var e = new eui.Label;
        return this.txt_fangyu = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "防御能力",
        e.textColor = 4187130,
        e.x = 24,
        e.y = 6,
        e
    },
    i.txt_gongji_i = function() {
        var e = new eui.Label;
        return this.txt_gongji = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "攻击能力",
        e.textColor = 8757203,
        e.x = 24,
        e.y = 37,
        e
    },
    i.txt_gushang_i = function() {
        var e = new eui.Label;
        return this.txt_gushang = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "固伤能力",
        e.textColor = 8757203,
        e.x = 24,
        e.y = 68,
        e
    },
    i.normal_lv_fight_i = function() {
        var e = new eui.Group;
        return this.normal_lv_fight = e,
        e.x = 137,
        e.y = 453,
        e.elementsContent = [this.imgBtn_battle_i(), this.txt_round_title_i(), this.txt_round_i()],
        e
    },
    i.imgBtn_battle_i = function() {
        var e = new eui.Image;
        return this.imgBtn_battle = e,
        e.source = "x_team_room_main_view_normal_level_view_imge_btn_fight_png",
        e.x = 11,
        e.y = 19,
        e
    },
    i.txt_round_title_i = function() {
        var e = new eui.Label;
        return this.txt_round_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "当前回合总数：",
        e.textColor = 12046335,
        e.x = 17,
        e.y = 1,
        e
    },
    i.txt_round_i = function() {
        var e = new eui.Label;
        return this.txt_round = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "20",
        e.textColor = 12046335,
        e.x = 122,
        e.y = 1,
        e
    },
    i.boss_lv_showInfo_title_i = function() {
        var e = new eui.Group;
        return this.boss_lv_showInfo_title = e,
        e.x = 0,
        e.y = 54,
        e.elementsContent = [this.imge_boss_lv_showInfo_333_i(), this.imge_boss_lv_showInfo_222_i(), this.imge_boss_lv_showInfo_111_i(), this.boss_title_i()],
        e
    },
    i.imge_boss_lv_showInfo_333_i = function() {
        var e = new eui.Image;
        return this.imge_boss_lv_showInfo_333 = e,
        e.source = "x_team_room_main_view_boss_level_view_imge_boss_lv_showinfo_333_png",
        e.x = 50,
        e.y = 7,
        e
    },
    i.imge_boss_lv_showInfo_222_i = function() {
        var e = new eui.Image;
        return this.imge_boss_lv_showInfo_222 = e,
        e.source = "x_team_room_main_view_boss_level_view_imge_boss_lv_showinfo_222_png",
        e.x = 4,
        e.y = 6,
        e
    },
    i.imge_boss_lv_showInfo_111_i = function() {
        var e = new eui.Image;
        return this.imge_boss_lv_showInfo_111 = e,
        e.anchorOffsetY = 0,
        e.height = 60,
        e.source = "x_team_room_main_view_boss_level_view_imge_boss_lv_showinfo_111_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.boss_title_i = function() {
        var e = new eui.Image;
        return this.boss_title = e,
        e.source = "x_team_room_main_view_boss_level_view_boss_title_png",
        e.x = 121,
        e.y = 0,
        e
    },
    i.info_i = function() {
        var e = new eui.Group;
        return this.info = e,
        e.x = 120,
        e.y = 488,
        e.elementsContent = [this._Image5_i(), this._Label1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "x_team_room_main_view_boss_level_view_namebg_png",
        e.width = 458,
        e.x = 1,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 26,
        e.text = "X·神迹",
        e.textColor = 16777215,
        e.x = 176,
        e.y = 4,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/NewSelectLevelViewSkin.exml"] = window.pveXTeamRoom.NewSelectLevelViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["BG", "Pet", "img_clear", "imge_passLv_bg", "list_DailyReward", "imge_passLv_title", "txt_noReward", "txtRewardFlag", "btnReward", "flagGot", "passLv_reward", "img_today_result_bg", "img_today_result_title", "imge_3423434256", "imge_34343", "txt_NodailyHistory", "img_today_result_tx_bg_2", "txt_dailyHistroy2", "result3", "img_today_result_tx_bg_1", "txt_dailyHistroy1", "result2", "img_today_result_tx_bg_0", "txt_dailyHistroy0", "result1", "today_result", "imge_history_fastest_bg", "lishizuigao", "txt_histroy", "tx_desc_343434", "history_fastest", "imge_rightUp_bg", "txt_week_title", "txt_week", "icon_box", "rightUp", "btnStart", "txt_daily_open_num", "txt_openCnt", "gr_btnStart", "before_open", "btnFight", "txt_round_title", "txt_round", "gr_btnFight", "after_open", "item_1", "item_2", "item_3", "after_open2", "grpright"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.Pet_i(), this.img_clear_i(), this.grpright_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.BG_i = function() {
        var e = new eui.Image;
        return this.BG = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "common_ui_bg_3_jpg",
        e.top = 0,
        e
    },
    i.Pet_i = function() {
        var e = new eui.Image;
        return this.Pet = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "x_team_room_main_view_imge_big_bg_png",
        e.top = 0,
        e
    },
    i.img_clear_i = function() {
        var e = new eui.Image;
        return this.img_clear = e,
        e.right = 54,
        e.source = "x_team_room_main_view_img_clear_png",
        e.y = 524,
        e
    },
    i.grpright_i = function() {
        var e = new eui.Group;
        return this.grpright = e,
        e.anchorOffsetX = 0,
        e.right = 29,
        e.width = 426,
        e.y = 0,
        e.elementsContent = [this.passLv_reward_i(), this.today_result_i(), this.history_fastest_i(), this.rightUp_i(), this.before_open_i(), this.after_open_i(), this.after_open2_i()],
        e
    },
    i.passLv_reward_i = function() {
        var e = new eui.Group;
        return this.passLv_reward = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 5,
        e.y = 360,
        e.elementsContent = [this.imge_passLv_bg_i(), this.list_DailyReward_i(), this.imge_passLv_title_i(), this.txt_noReward_i(), this.txtRewardFlag_i(), this.btnReward_i(), this.flagGot_i()],
        e
    },
    i.imge_passLv_bg_i = function() {
        var e = new eui.Image;
        return this.imge_passLv_bg = e,
        e.source = "x_team_room_main_view_imge_passlv_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.list_DailyReward_i = function() {
        var e = new eui.List;
        return this.list_DailyReward = e,
        e.anchorOffsetX = 0,
        e.height = 62,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 155,
        e.x = 146,
        e.y = 48,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i.imge_passLv_title_i = function() {
        var e = new eui.Image;
        return this.imge_passLv_title = e,
        e.source = "x_team_room_main_view_imge_passlv_title_png",
        e.x = 16,
        e.y = 11,
        e
    },
    i.txt_noReward_i = function() {
        var e = new eui.Image;
        return this.txt_noReward = e,
        e.source = "x_team_room_main_view_txt_noreward_png",
        e.x = 97,
        e.y = 76,
        e
    },
    i.txtRewardFlag_i = function() {
        var e = new eui.Image;
        return this.txtRewardFlag = e,
        e.source = "x_team_room_main_view_txtrewardflag_png",
        e.x = 97,
        e.y = 76,
        e
    },
    i.btnReward_i = function() {
        var e = new eui.Image;
        return this.btnReward = e,
        e.source = "x_team_room_main_view_btnreward_png",
        e.x = 179,
        e.y = 125,
        e
    },
    i.flagGot_i = function() {
        var e = new eui.Image;
        return this.flagGot = e,
        e.height = 47,
        e.source = "x_team_room_main_view_flagGot_png",
        e.width = 118,
        e.x = 166,
        e.y = 119,
        e
    },
    i.today_result_i = function() {
        var e = new eui.Group;
        return this.today_result = e,
        e.x = -30,
        e.y = 166,
        e.elementsContent = [this.img_today_result_bg_i(), this.img_today_result_title_i(), this.imge_3423434256_i(), this.imge_34343_i(), this.txt_NodailyHistory_i(), this.result3_i(), this.result2_i(), this.result1_i()],
        e
    },
    i.img_today_result_bg_i = function() {
        var e = new eui.Image;
        return this.img_today_result_bg = e,
        e.source = "x_team_room_main_view_img_today_result_bg_png",
        e.x = 72,
        e.y = 17,
        e
    },
    i.img_today_result_title_i = function() {
        var e = new eui.Image;
        return this.img_today_result_title = e,
        e.source = "x_team_room_main_view_img_today_result_title_png",
        e.x = 100,
        e.y = 31,
        e
    },
    i.imge_3423434256_i = function() {
        var e = new eui.Image;
        return this.imge_3423434256 = e,
        e.source = "x_team_room_main_view_imge_3423434256_png",
        e.x = 0,
        e.y = 179,
        e
    },
    i.imge_34343_i = function() {
        var e = new eui.Image;
        return this.imge_34343 = e,
        e.source = "x_team_room_main_view_imge_34343_png",
        e.x = 80,
        e.y = 0,
        e
    },
    i.txt_NodailyHistory_i = function() {
        var e = new eui.Label;
        return this.txt_NodailyHistory = e,
        e.fontFamily = "锐字洪荒之力简",
        e.horizontalCenter = 15,
        e.size = 20,
        e.text = "今日还未挑战过副本",
        e.textAlign = "center",
        e.textColor = 5736134,
        e.visible = !0,
        e.width = 130,
        e.y = 74,
        e
    },
    i.result3_i = function() {
        var e = new eui.Group;
        return this.result3 = e,
        e.x = 96,
        e.y = 123,
        e.elementsContent = [this.img_today_result_tx_bg_2_i(), this.txt_dailyHistroy2_i()],
        e
    },
    i.img_today_result_tx_bg_2_i = function() {
        var e = new eui.Image;
        return this.img_today_result_tx_bg_2 = e,
        e.source = "x_team_room_main_view_img_today_result_tx_bg_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_dailyHistroy2_i = function() {
        var e = new eui.Label;
        return this.txt_dailyHistroy2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 21,
        e.size = 18,
        e.text = "3.未通关\n",
        e.textColor = 8757203,
        e.width = 157,
        e.x = 20,
        e.y = 3,
        e
    },
    i.result2_i = function() {
        var e = new eui.Group;
        return this.result2 = e,
        e.x = 96,
        e.y = 92,
        e.elementsContent = [this.img_today_result_tx_bg_1_i(), this.txt_dailyHistroy1_i()],
        e
    },
    i.img_today_result_tx_bg_1_i = function() {
        var e = new eui.Image;
        return this.img_today_result_tx_bg_1 = e,
        e.source = "x_team_room_main_view_img_today_result_tx_bg_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_dailyHistroy1_i = function() {
        var e = new eui.Label;
        return this.txt_dailyHistroy1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 20,
        e.size = 18,
        e.text = "2.99回合\n",
        e.textColor = 8757203,
        e.width = 140,
        e.x = 20,
        e.y = 4,
        e
    },
    i.result1_i = function() {
        var e = new eui.Group;
        return this.result1 = e,
        e.x = 96,
        e.y = 61,
        e.elementsContent = [this.img_today_result_tx_bg_0_i(), this.txt_dailyHistroy0_i()],
        e
    },
    i.img_today_result_tx_bg_0_i = function() {
        var e = new eui.Image;
        return this.img_today_result_tx_bg_0 = e,
        e.source = "x_team_room_main_view_img_today_result_tx_bg_0_png",
        e.x = 1,
        e.y = 0,
        e
    },
    i.txt_dailyHistroy0_i = function() {
        var e = new eui.Label;
        return this.txt_dailyHistroy0 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 19,
        e.size = 18,
        e.text = "1.99回合\n",
        e.textColor = 4187130,
        e.width = 146,
        e.x = 20,
        e.y = 4,
        e
    },
    i.history_fastest_i = function() {
        var e = new eui.Group;
        return this.history_fastest = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 100,
        e.y = 58,
        e.elementsContent = [this.imge_history_fastest_bg_i(), this.lishizuigao_i(), this.txt_histroy_i(), this.tx_desc_343434_i()],
        e
    },
    i.imge_history_fastest_bg_i = function() {
        var e = new eui.Image;
        return this.imge_history_fastest_bg = e,
        e.source = "x_team_room_main_view_imge_history_fastest_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.lishizuigao_i = function() {
        var e = new eui.Label;
        return this.lishizuigao = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "历史最快：",
        e.textColor = 4187130,
        e.x = 18,
        e.y = 9,
        e
    },
    i.txt_histroy_i = function() {
        var e = new eui.Label;
        return this.txt_histroy = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "XX回合",
        e.textColor = 4187130,
        e.x = 119,
        e.y = 10,
        e
    },
    i.tx_desc_343434_i = function() {
        var e = new eui.Label;
        return this.tx_desc_343434 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "挑战总回合数越少，奖励越高！\n超过40回合未通关或中途退出，视为挑战失败",
        e.textColor = 8757203,
        e.width = 281,
        e.x = 22,
        e.y = 33,
        e
    },
    i.rightUp_i = function() {
        var e = new eui.Group;
        return this.rightUp = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 180,
        e.y = 16,
        e.elementsContent = [this.imge_rightUp_bg_i(), this.txt_week_title_i(), this.txt_week_i(), this.icon_box_i()],
        e
    },
    i.imge_rightUp_bg_i = function() {
        var e = new eui.Image;
        return this.imge_rightUp_bg = e,
        e.source = "x_team_room_main_view_top_imge_rightup_bg_png",
        e.x = 0,
        e.y = 3,
        e
    },
    i.txt_week_title_i = function() {
        var e = new eui.Label;
        return this.txt_week_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "本周完成次数：",
        e.textColor = 12834813,
        e.x = 27,
        e.y = 6,
        e
    },
    i.txt_week_i = function() {
        var e = new eui.Label;
        return this.txt_week = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "9/9",
        e.textColor = 12834813,
        e.x = 137,
        e.y = 6,
        e
    },
    i.icon_box_i = function() {
        var e = new eui.Image;
        return this.icon_box = e,
        e.source = "x_team_room_main_view_top_imge_box_icon_png_png",
        e.visible = !1,
        e.x = 180,
        e.y = 0,
        e
    },
    i.before_open_i = function() {
        var e = new eui.Group;
        return this.before_open = e,
        e.anchorOffsetY = 0,
        e.height = 81.33,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 237.97,
        e.y = 545.27,
        e.elementsContent = [this.gr_btnStart_i()],
        e
    },
    i.gr_btnStart_i = function() {
        var e = new eui.Group;
        return this.gr_btnStart = e,
        e.anchorOffsetY = 0,
        e.height = 93,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.btnStart_i(), this.txt_daily_open_num_i(), this.txt_openCnt_i()],
        e
    },
    i.btnStart_i = function() {
        var e = new eui.Image;
        return this.btnStart = e,
        e.source = "x_team_room_main_view_imge_btn_fight_png",
        e.x = 0,
        e.y = 20,
        e
    },
    i.txt_daily_open_num_i = function() {
        var e = new eui.Label;
        return this.txt_daily_open_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "今日挑战次数：",
        e.textColor = 12046335,
        e.x = 2,
        e.y = 1,
        e
    },
    i.txt_openCnt_i = function() {
        var e = new eui.Label;
        return this.txt_openCnt = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "3/3",
        e.textColor = 12046335,
        e.x = 107,
        e.y = 1,
        e
    },
    i.after_open_i = function() {
        var e = new eui.Group;
        return this.after_open = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 82,
        e.right = 54,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 143,
        e.x = 257.99999999999994,
        e.y = 547,
        e.elementsContent = [this.gr_btnFight_i()],
        e
    },
    i.gr_btnFight_i = function() {
        var e = new eui.Group;
        return this.gr_btnFight = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.btnFight_i(), this.txt_round_title_i(), this.txt_round_i()],
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "x_team_room_main_view_txtlabel_kb_png",
        e.x = 7,
        e.y = 20,
        e
    },
    i.txt_round_title_i = function() {
        var e = new eui.Label;
        return this.txt_round_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "当前回合总数：",
        e.textColor = 12046335,
        e.x = 13.33,
        e.y = 1,
        e
    },
    i.txt_round_i = function() {
        var e = new eui.Label;
        return this.txt_round = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "20",
        e.textColor = 12046335,
        e.x = 120.33,
        e.y = 1,
        e
    },
    i.after_open2_i = function() {
        var e = new eui.Group;
        return this.after_open2 = e,
        e.anchorOffsetX = 0,
        e.height = 200,
        e.right = -3,
        e.width = 356,
        e.y = 154,
        e.elementsContent = [this.item_1_i(), this.item_2_i(), this.item_3_i()],
        e
    },
    i.item_1_i = function() {
        var e = new pveXTeamRoom.CompLevelItem;
        return this.item_1 = e,
        e.currentState = "state_1",
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "pveXTeamRoom.CompLevelItemSkin",
        e.x = 0,
        e.y = 0,
        e
    },
    i.item_2_i = function() {
        var e = new pveXTeamRoom.CompLevelItem;
        return this.item_2 = e,
        e.currentState = "state_2",
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "pveXTeamRoom.CompLevelItemSkin",
        e.x = 0,
        e.y = 69,
        e
    },
    i.item_3_i = function() {
        var e = new pveXTeamRoom.CompLevelItem;
        return this.item_3 = e,
        e.currentState = "state_3",
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "pveXTeamRoom.CompLevelItemSkin",
        e.x = 0,
        e.y = 137,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/NormalLevelViewSkin.exml"] = window.pveXTeamRoom.NormalLevelViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["BG", "imge_right_bg", "imge_normal_lv_reward_bg", "imge_reward_title", "list_reward", "reward", "imge_jiantou", "tx_name", "txt_crtV", "img_blue_reddot", "t_desc", "progress_item", "showExp", "imgBtn_battle", "txt_round_title", "txt_round", "normal_lv_fight", "grpright", "page1", "page2", "pagePet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.grpright_i(), this.pagePet_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.BG_i = function() {
        var e = new eui.Image;
        return this.BG = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "common_ui_bg_3_jpg",
        e.top = 0,
        e
    },
    i.grpright_i = function() {
        var e = new eui.Group;
        return this.grpright = e,
        e.anchorOffsetX = 0,
        e.height = 456,
        e.horizontalCenter = 322.5,
        e.verticalCenter = 3,
        e.width = 411,
        e.elementsContent = [this.imge_right_bg_i(), this.reward_i(), this.showExp_i(), this.normal_lv_fight_i()],
        e
    },
    i.imge_right_bg_i = function() {
        var e = new eui.Image;
        return this.imge_right_bg = e,
        e.source = "x_team_room_main_view_normal_level_view_imge_right_bg_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.reward_i = function() {
        var e = new eui.Group;
        return this.reward = e,
        e.x = 22,
        e.y = 257,
        e.elementsContent = [this.imge_normal_lv_reward_bg_i(), this.imge_reward_title_i(), this.list_reward_i()],
        e
    },
    i.imge_normal_lv_reward_bg_i = function() {
        var e = new eui.Image;
        return this.imge_normal_lv_reward_bg = e,
        e.source = "x_team_room_main_view_normal_level_view_imge_normal_lv_reward_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_reward_title_i = function() {
        var e = new eui.Image;
        return this.imge_reward_title = e,
        e.source = "x_team_room_main_view_normal_level_view_imge_reward_title_png",
        e.x = 15,
        e.y = 11,
        e
    },
    i.list_reward_i = function() {
        var e = new eui.List;
        return this.list_reward = e,
        e.height = 80,
        e.horizontalCenter = 0,
        e.y = 47,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 14,
        e
    },
    i.showExp_i = function() {
        var e = new eui.Group;
        return this.showExp = e,
        e.x = 8,
        e.y = 0,
        e.elementsContent = [this.imge_jiantou_i(), this.tx_name_i(), this.txt_crtV_i(), this.img_blue_reddot_i(), this.t_desc_i(), this.progress_item_i()],
        e
    },
    i.imge_jiantou_i = function() {
        var e = new eui.Image;
        return this.imge_jiantou = e,
        e.source = "x_team_room_main_view_normal_level_view_imge_jiantou_png",
        e.x = 20,
        e.y = 14,
        e
    },
    i.tx_name_i = function() {
        var e = new eui.Label;
        return this.tx_name = e,
        e.fontFamily = "REEJI",
        e.size = 40,
        e.text = "攻击",
        e.textColor = 4187130,
        e.x = 152,
        e.y = 10,
        e
    },
    i.txt_crtV_i = function() {
        var e = new eui.Label;
        return this.txt_crtV = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "100%",
        e.textColor = 8631282,
        e.x = 169,
        e.y = 100,
        e
    },
    i.img_blue_reddot_i = function() {
        var e = new eui.Image;
        return this.img_blue_reddot = e,
        e.source = "x_team_room_main_view_normal_level_view_img_blue_reddot_png",
        e.x = 0,
        e.y = 140,
        e
    },
    i.t_desc_i = function() {
        var e = new eui.Label;
        return this.t_desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "攻击指数小于等于60%，即可削弱X·神级的\n攻击能力攻击指数最低可以降至20%",
        e.textColor = 4187130,
        e.width = 338,
        e.x = 22,
        e.y = 141,
        e
    },
    i.progress_item_i = function() {
        var e = new eui.ProgressBar;
        return this.progress_item = e,
        e.maximum = 100,
        e.minimum = 0,
        e.skinName = "pveXTeamRoom.ProgressStyle1Skin",
        e.value = 90,
        e.x = 3,
        e.y = 62,
        e
    },
    i.normal_lv_fight_i = function() {
        var e = new eui.Group;
        return this.normal_lv_fight = e,
        e.x = 137,
        e.y = 453,
        e.elementsContent = [this.imgBtn_battle_i(), this.txt_round_title_i(), this.txt_round_i()],
        e
    },
    i.imgBtn_battle_i = function() {
        var e = new eui.Image;
        return this.imgBtn_battle = e,
        e.source = "x_team_room_main_view_normal_level_view_imge_btn_fight_png",
        e.x = 11,
        e.y = 19,
        e
    },
    i.txt_round_title_i = function() {
        var e = new eui.Label;
        return this.txt_round_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "当前回合总数：",
        e.textColor = 12046335,
        e.x = 14,
        e.y = 1,
        e
    },
    i.txt_round_i = function() {
        var e = new eui.Label;
        return this.txt_round = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "20",
        e.textColor = 12046335,
        e.x = 121,
        e.y = 1,
        e
    },
    i.pagePet_i = function() {
        var e = new eui.Group;
        return this.pagePet = e,
        e.horizontalCenter = -217.5,
        e.verticalCenter = 23.5,
        e.elementsContent = [this.page1_i(), this.page2_i()],
        e
    },
    i.page1_i = function() {
        var e = new pveXTeamRoom.PetPage;
        return this.page1 = e,
        e.skinName = "pveXTeamRoom.PetPageSkin",
        e
    },
    i.page2_i = function() {
        var e = new pveXTeamRoom.PetPage;
        return this.page2 = e,
        e.skinName = "pveXTeamRoom.PetPageSkin",
        e.x = 271,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/XTeamRoomMainViewSkin.exml"] = window.pveXTeamRoom.XTeamRoomMainViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["BG", "select_view", "normallevel_view", "bosslevel_view", "node_view", "imgBtn_pet", "imgBtn_cure", "grp_petBtn"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.node_view_i(), this.grp_petBtn_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.BG_i = function() {
        var e = new eui.Image;
        return this.BG = e,
        e.horizontalCenter = 0,
        e.source = "common_ui_bg_3_jpg",
        e.y = 0,
        e
    },
    i.node_view_i = function() {
        var e = new eui.Group;
        return this.node_view = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.touchEnabled = !1,
        e.elementsContent = [this.select_view_i(), this.normallevel_view_i(), this.bosslevel_view_i()],
        e
    },
    i.select_view_i = function() {
        var e = new pveXTeamRoom.NewSelectedLevelView;
        return this.select_view = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "pveXTeamRoom.NewSelectLevelViewSkin",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.normallevel_view_i = function() {
        var e = new pveXTeamRoom.NormalLevelView;
        return this.normallevel_view = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "pveXTeamRoom.NormalLevelViewSkin",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.bosslevel_view_i = function() {
        var e = new pveXTeamRoom.BossLevelView;
        return this.bosslevel_view = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "pveXTeamRoom.BossLevelViewSkin",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_petBtn_i = function() {
        var e = new eui.Group;
        return this.grp_petBtn = e,
        e.touchEnabled = !1,
        e.x = 15,
        e.y = 104,
        e.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 57,
        e.source = "common_imgbtn_pet_png",
        e.width = 57,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 57,
        e.source = "common_imgbtn_cure_png",
        e.width = 57,
        e.x = 0,
        e.y = 69,
        e
    },
    t
} (eui.Skin);