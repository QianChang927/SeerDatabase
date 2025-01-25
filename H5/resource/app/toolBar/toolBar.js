var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
toolBar; !
function(t) {
    var e = function() {
        function t(t) {
            this._cfg = t,
            this._createbutton()
        }
        return t.prototype._createbutton = function() {
            var t = this;
            this._instance = new eui.Group;
            var e = new eui.Image;
            e.source = this._cfg.res,
            e.horizontalCenter = e.verticalCenter = 0,
            e.scaleX = e.scaleY = .5;
            var i = new eui.Rect;
            i.alpha = 0,
            i.width = 109,
            i.height = 51,
            this._instance.addChild(i),
            this._instance.addChild(e),
            this._instance.name = this._cfg.key,
            this._cfg.reddot && (this.redPoint = new eui.Image("main_act_button_redPoint_png"), this.redPoint.right = 7, this.redPoint.y = 10, this.redPoint.width = this.redPoint.height = 11, this._instance.addChild(this.redPoint), this.redPoint.visible = !!HotRedManager.getInstance().getHotRedState(~~this._cfg.reddot), HotRedManager.getInstance().registerHotEvent(~~this._cfg.reddot,
            function() {
                t.redPoint.visible = !!HotRedManager.getInstance().getHotRedState(~~t._cfg.reddot)
            },
            this))
        },
        Object.defineProperty(t.prototype, "instance", {
            get: function() {
                return this._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.GetConfig = function() {
            return this._cfg
        },
        t.prototype.destroy = function() {
            HotRedManager.getInstance().removeRegisterHotEventAll(this),
            this._cfg = null,
            this._instance.parent && this._instance.parent.removeChild(this._instance),
            this._instance = null
        },
        t
    } ();
    t.LeftButtonItem = e,
    __reflect(e.prototype, "toolBar.LeftButtonItem")
} (toolBar || (toolBar = {}));
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
toolBar; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            i._info = t,
            i.skinName = "MainActButtonSkin";
            var n = i._info.reddotid + "";
            return i._info.reddotid ? i.reddotArr = n.split("|").map(parseFloat) : i.reddotArr = [],
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvents(),
            this.updateView()
        },
        i.prototype.addEvents = function() {
            "" != this._info.controller && EventManager.addEventListener(ToolBarPointConst.ON_RED_POINT_CHANGE, this.checkPoint, this)
        },
        i.prototype.updateView = function() {
            var t = this;
            if (this.grp_yongzheLevel.visible = !1, 5 == this._info.id && this.braveLevel(), RES.getResByUrl(ClientConfig.getMainActIcon(this._info.image),
            function(e) {
                t.img_act.source = e,
                DisplayUtil.keepEqualDis(t.img_act, 78, 60)
            }), this.grp_time.visible = !!this._info.isdeadline, this.cacheAsBitmap = !this.grp_time.visible, this._info.isdeadline && this.showDeadLine(), this.reddotArr.length > 0) {
                this.checkRedPoint();
                for (var e = 0,
                i = this.reddotArr; e < i.length; e++) {
                    var n = i[e];
                    HotRedManager.getInstance().registerHotEvent(n, this.checkRedPoint, this)
                }
            } else this.checkPoint();
            this._info.dest && ImageButtonUtil.add(this.img_act,
            function() {~~t._info.dest > 0 ? ModuleManager.showModuleByID(~~t._info.dest) : new Function(t._info.dest)();
                var e = !!t._info.dailyRed;
                if (e) {
                    var i = SystemTimerManager.sysBJDate,
                    n = i.getFullYear() + "_" + (i.getMonth() + 1) + "_" + i.getDate(),
                    o = "toolbar_point_manager_daily_" + MainManager.actorInfo.userID + "_" + n + "_" + t._info.id;
                    "false" != egret.localStorage.getItem(o) && (egret.localStorage.setItem(o, "false"), EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                        id: t._info.id
                    }))
                }
            },
            this)
        },
        i.prototype.showDeadLine = function() {
            var t = this,
            e = new Date(this._info.finishtime.replace(/_/g, "/"));
            this._endTime = e.getTime(),
            egret.clearInterval(this._interval),
            this.showTimeClock(this._info.isdown),
            this._interval = egret.setInterval(function() {
                t.showTimeClock(t._info.isdown)
            },
            this, 1e3)
        },
        i.prototype.braveLevel = function() {
            var t = this;
            EventManager.addEventListener("updateBarveLevel", this.braveLevel, this),
            this.grp_yongzheLevel.visible = !0,
            KTool.getMultiValue([121020],
            function(e) {
                var i = 255 & e[0];
                i += 1,
                t.txt_level.text = "" + i
            })
        },
        i.prototype.showTimeClock = function(e) {
            var i = SystemTimerManager.sysBJDate.getTime(),
            n = this._endTime - i;
            if (0 >= n) return egret.clearInterval(this._interval),
            void EventManager.dispatchEventWith(t.ToolBar.UPDATE_TOOLBAR);
            if (1 == e) {
                var o = Math.floor(n / 36e5),
                a = Math.floor(n % 36e5 / 6e4),
                r = Math.floor(n % 6e4 / 1e3);
                this.txt_time.text = core.gameUtil.addLeadingZero(o) + ":" + core.gameUtil.addLeadingZero(a) + ":" + core.gameUtil.addLeadingZero(r)
            } else if (2 == e) {
                var s = Math.ceil(n / 864e5),
                o = Math.floor(n / 36e5);
                this.txt_time.text = s + "天" + o + "小时"
            }
        },
        i.prototype.checkRedPoint = function() {
            this.redPoint.visible = !1;
            for (var t = 0,
            e = this.reddotArr; t < e.length; t++) {
                var i = e[t];
                this.redPoint.visible = this.redPoint.visible || !!HotRedManager.getInstance().getHotRedState(i) && this.additionRedCondition(i)
            }
        },
        i.prototype.checkPoint = function() {
            this.redPoint.visible = ToolBarPointManager.getRedStateById(this._info.id)
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener("updateBarveLevel", this.braveLevel, this),
            egret.clearInterval(this._interval),
            TimeDelayUtils.clearAllTimeByThisObj(this),
            ImageButtonUtil.removeAll(this),
            HotRedManager.getInstance().removeRegisterHotEventAll(this),
            EventManager.removeAll(this),
            this.removeChildren()
        },
        i.prototype.additionRedCondition = function(t) {
            switch (t) {
            case 2016:
                return null != AnnouncementManager.tempInfo.LatestRecommend;
            case 2017:
                return null != AnnouncementManager.tempInfo.CommunityActivity;
            default:
                return ! 0
            }
        },
        i
    } (eui.Component);
    t.MainActButton = e,
    __reflect(e.prototype, "toolBar.MainActButton")
} (toolBar || (toolBar = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
toolBar; !
function(t) {
    var e = function() {
        function t(t) {
            this.redShowArr = [],
            this._cfg = t,
            this._createbutton()
        }
        return t.prototype._createbutton = function() {
            var t = this;
            this._instance = new eui.Group;
            var e = new eui.Image;
            e.source = this._cfg.res,
            e.horizontalCenter = e.verticalCenter = 0,
            e.scaleX = e.scaleY = .5,
            this.image = e;
            var i = new eui.Rect;
            if (i.alpha = 0, i.width = 109, i.height = 51, this._instance.addChild(i), this._instance.addChild(e), this._instance.name = this._cfg.key, this._instance.index = this._cfg.id, this._instance.touchChildren = !1, this._cfg.reddot) {
                this.redPoint = new eui.Image("main_act_button_redPoint_png"),
                this.redPoint.right = 2,
                this.redPoint.y = 0,
                this.redPoint.width = this.redPoint.height = 20,
                this._instance.addChild(this.redPoint);
                var n = this._cfg.reddot.split("_");
                if (n.length <= 1) {
                    if (this.redPoint.visible = !!HotRedManager.getInstance().getHotRedState(~~this._cfg.reddot), HotRedManager.getInstance().registerHotEvent(~~this._cfg.reddot,
                    function() {
                        t.redPoint.visible = !!HotRedManager.getInstance().getHotRedState(~~t._cfg.reddot)
                    },
                    this), 2 == this._cfg.id) {
                        EventManager.addEventListener(core.AvatarDataMgr.EVENT_CHANGE_CARD, this.redDotEvent, this);
                        for (var o = config.Profilephoto.getItems(), a = 0, r = o; a < r.length; a++) {
                            var s = r[a];
                            if (core.AvatarDataMgr.GetInstance().GetIsNewFlag(s.id)) return void(this.redPoint.visible = !0)
                        }
                    }
                } else {
                    for (var h = function(e) {
                        g.redShowArr.push(HotRedManager.getInstance().getHotRedState(~~n[e])),
                        HotRedManager.getInstance().registerHotEvent(~~n[e],
                        function() {
                            t.redShowArr[e] = HotRedManager.getInstance().getHotRedState(~~n[e]),
                            t.redPoint.visible = t.redShowArr.indexOf(1) > -1
                        },
                        g)
                    },
                    g = this, u = 0; u < n.length; u++) h(u);
                    this.redPoint.visible = this.redShowArr.indexOf(1) > -1,
                    5 == this._cfg.id && (this.redPoint.visible = this.redShowArr.indexOf(1) > -1 && !(!MainManager.actorInfo.teamInfo || 0 == MainManager.actorInfo.teamInfo.id))
                }
                EventManager.addEventListener("RedPointChangeEvent", this.redDotEvent, this)
            }
        },
        t.prototype.redDotEvent = function() {
            switch (this._cfg.id) {
            case 2:
                for (var t = config.Profilephoto.getItems(), e = 0, i = t; e < i.length; e++) {
                    var n = i[e];
                    if (core.AvatarDataMgr.GetInstance().GetIsNewFlag(n.id)) return void(this.redPoint.visible = !0)
                }
                this.redPoint.visible = !1
            }
        },
        t.prototype.setLock = function() {
            this.image.source = "new_seer_lock_kb_png",
            this.image.scaleX = this.image.scaleY = 1,
            this.instance.touchEnabled = !1,
            this.redPoint && (this.redPoint.visible = !1)
        },
        t.prototype.show = function() {
            this.image.source = this._cfg.res,
            this.image.scaleX = this.image.scaleY = .5,
            this.instance.touchEnabled = !0,
            this.redPoint && GuideManager.isCompleted() && (this.redPoint.visible = !0)
        },
        Object.defineProperty(t.prototype, "instance", {
            get: function() {
                return this._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.GetConfig = function() {
            return this._cfg
        },
        t.prototype.destroy = function() {
            HotRedManager.getInstance().removeRegisterHotEventAll(this),
            this._cfg = null,
            this._instance.parent && this._instance.parent.removeChild(this._instance),
            this._instance = null
        },
        t
    } ();
    t.ToolbarSystemButton = e,
    __reflect(e.prototype, "toolBar.ToolbarSystemButton")
} (toolBar || (toolBar = {}));
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
    return new(i || (i = Promise))(function(o, a) {
        function r(t) {
            try {
                h(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, s)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (o = 1, a && (r = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(a, i[1])).done) return r;
            switch (a = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (r = h.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < r[1]) {
                    h.label = r[1],
                    r = i;
                    break
                }
                if (r && h.label < r[2]) {
                    h.label = r[2],
                    h.ops.push(i);
                    break
                }
                r[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            o = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, a, r, s, h = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
toolBar; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.showMapMode = !0,
            t._flagFirstScene = !0,
            t.numHideState = 1,
            t.worldType = 0,
            t.selectStar = 0,
            t._iconList = [],
            t.isShowUnityApply = !0,
            t.skinName = "ToolBarSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.width = LevelManager.stage.stageWidth,
            this.height = LevelManager.stage.stageHeight,
            this.iconCoin1.source = ClientConfig.getItemIcon(1),
            this.iconCoin2.source = ClientConfig.getItemIcon(5),
            e.prototype.childrenCreated.call(this),
            this.grpDiamond.visible = !IS_RELEASE,
            this.grpBottomRight.touchEnabled = !1,
            this.grpTopRight.touchEnabled = !1,
            this.grpTop.touchEnabled = !1,
            this.headBg.touchEnabled = !1,
            this.head.touchEnabled = !1,
            this.touchEnabled = !1,
            this.avatarIcon.setScale(.7),
            this.grpMap.visible = !0,
            GameInfo.isChecking && (this.grpDiamond.visible = !1),
            this.adaptBound(),
            this.addEvent(),
            this.showMoney(),
            this.showPlayerInfo(),
            this.onChangeHead(),
            this.updateMailStatus(),
            this.setBattery(),
            this.initButtons(),
            this.showSystemTime(),
            this.currentState = "normal"
        },
        i.prototype.showSystemTime = function() {
            if (!IS_RELEASE) {
                this.txtTime = new eui.Label,
                this.txtTime.size = 16,
                this.txtTime.textColor = 12834813,
                this.txtTime.strokeColor = 0,
                this.txtTime.stroke = 2,
                this.txtTime.x = 4,
                this.txtTime.y = egret.lifecycle.stage.stageHeight - this.grpBottomBg.height - 18,
                this.txtTime.touchEnabled = !1,
                this.txtTime.name = "txtTime",
                this.addChild(this.txtTime);
                var t = new egret.Timer(1e3);
                t.addEventListener(egret.TimerEvent.TIMER, this.updateTimer, this),
                t.start()
            }
        },
        i.prototype.updateTimer = function() {
            if (SystemTimerManager.sysBJDate && !isNaN(SystemTimerManager.sysBJDate.getTime())) {
                var t = SystemTimerManager.sysBJDate;
                this.txtTime.text = TimeUtil.format("yyyy-MM-dd hh:mm:ss", t),
                OnlineManager.getInstance().currServerInfo && (this.txtTime.text += "  服务器:" + window.OnlineManager.instance.currServerInfo.onlineID)
            } else this.txtTime.text = "暂未时间数据"
        },
        i.prototype.adaptBound = function() {
            egret.Capabilities.isMobile && (this.grpBottomRight.right = DeviceInfoManager.adapterOffSetX, this.grpTop.left = this.grpTop.right = DeviceInfoManager.adapterOffSetX, this.grpRightLine.right = 105 + DeviceInfoManager.adapterOffSetX)
        },
        i.prototype.setBattery = function() {
            SystemTimerManager.addTickFun(this.updateBatteryTimer.bind(this)),
            this.updateBatteryTimer()
        },
        i.prototype.updateBatteryTimer = function() {
            this.txtBattery.text = "100%",
            this.setEnergy()
        },
        i.prototype.setMapName = function(t) {
            this.txtMapName.text = t
        },
        i.prototype.initButtons = function() {
            var t = this;
            GuideManager.isCompleted() ? KTool.getMultiValue([121906],
            function(e) {
                SystemTimerManager.sysBJDate.getDate() >= 3 && 0 == SystemTimerManager.sysBJDate.getMonth() && SystemTimerManager.sysBJDate.getHours() > 10 && (t.isShowUnityApply = 1 == e[0]),
                t.initMainIcon()
            }) : this.btnHideLeftMenu.visible = this.btnShowLeftMenu.visible = !1,
            this.initSysButtons()
        },
        i.prototype.xinshouShow = function() {
            return new Promise(function(t, e) {
                MainManager.actorInfo.regTime < 1616688e3 && t(!1);
                var i = egret.localStorage.getItem("newSeerFirstKejin_FirstEnter");
                KTool.getMultiValue([120204, 120205, 120206],
                function(e) {
                    if (e[0] >= 127) if (null != i) {
                        var n = 0,
                        o = 0;
                        1 == KTool.getBit(e[1], 11) && o++,
                        1 == KTool.getBit(e[1], 12) && o++;
                        for (var a = 1; 3 >= a; a++) {
                            if (0 == KTool.getBit(e[1], a)) {
                                t(!0);
                                break
                            }
                            n++
                        }
                        t(3 == n && 2 == o ? !1 : !0)
                    } else t(!0);
                    else t(!0)
                })
            })
        },
        i.prototype.backflowShow = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return [2, new Promise(function(t, e) {
                        KTool.getMultiValue([2791],
                        function(e) {
                            t(1 == KTool.getBit(e[0], 15))
                        })
                    })]
                })
            })
        },
        i.prototype.initMainIcon = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, o, a, r, s, e, h, g, u, e, l, c, _;
                return __generator(this,
                function(d) {
                    switch (d.label) {
                    case 0:
                        if (!config.Active_sort.hasLoader) return config.Active_sort.load(this.initMainIcon, this),
                        [2];
                        for (e = 0; e < this._iconList.length; e++) i = this._iconList[e],
                        i && (i.destroy(), DisplayUtil.removeForParent(i));
                        return this._iconList.length = 0,
                        n = config.Active_sort.getItems(),
                        o = [],
                        [4, this.xinshouShow()];
                    case 1:
                        return a = d.sent(),
                        [4, this.backflowShow()];
                    case 2:
                        for (r = d.sent(), ToolBarManager.isNewSeerIconShow = a, ToolBarManager.isNewSeerIconShow || EventManager.dispatchEventWith("NewSeerDoneTask"), o = [], s = n.filter(function(t) {
                            return t.truepos > 0
                        }), e = 0; e < s.length; e++) if (h = s[e], (!IS_RELEASE || h.isshow) && !(h.isdeadline && (g = new Date(h.finishtime.replace(/_/g, "/")).getTime(), u = SystemTimerManager.sysBJDate.getTime(), u >= g)) && ("至尊年费" != h.name || !GameInfo.isChecking) && ("新手福利" != h.name || a) && ("老兵回归" != h.name || r)) if (GameInfo.isChecking)("星愿好礼" == h.name || "老兵回归" == h.name) && o.push(h);
                        else {
                            if ("Unity招募" == h.name) {
                                if (this.isShowUnityApply) {
                                    o.push(h);
                                    continue
                                }
                                continue
                            }
                            o.push(h)
                        }
                        for (o.filter(function(t) {
                            return null != t
                        }), o.sort(function(t, e) {
                            return t.priority - e.priority
                        }), e = 0; e < o.length; e++) l = new t.MainActButton(o[e]),
                        l.name = o[e].name,
                        l.anchorOffsetX = l.width / 2,
                        l.anchorOffsetY = l.height / 2,
                        c = Math.floor(e / 6),
                        _ = e % 6,
                        l.x = 5 + 78 * c + l.anchorOffsetX,
                        l.y = 130 + 73 * _ + l.anchorOffsetY,
                        this.grpTop.addChild(l),
                        this._iconList.push(l);
                        return this.updateLeftMenuRedDot(),
                        2 == this.leftMenuState ? this.hideLeftMenu(!0) : this.leftMenuState || (this.leftMenuState = 1, this.btnHideLeftMenu.visible = !0, this.btnShowLeftMenu.visible = !1),
                        [2]
                    }
                })
            })
        },
        i.prototype.initSysButtons = function() {
            var e = config.Toolbar.getItems().filter(function(t) {
                return "leftbottom" === t.type
            }).sort(function(t, e) {
                return t.pos - e.pos
            });
            if (!this.systemButtons) {
                this.systemButtons = new HashMap;
                for (var i = 0; i < e.length; i++) if (!GameInfo.isChecking || 5 != e[i].id) {
                    var n = new t.ToolbarSystemButton(e[i]);
                    ImageButtonUtil.add(n.instance, this.onTouchSystemButtons, this),
                    this.systemButtons.add(e[i].key, n),
                    this.grpBottomRight.addChild(n.instance)
                }
            }
        },
        i.prototype.lockAllButtons = function() {
            for (var t = 0; t < this._iconList.length; t++) this._iconList[t].visible = !1;
            for (var e = this.systemButtons.getKeys(), t = 0; t < e.length; t++) {
                var i = this.systemButtons.getValue(e[t]);
                i.setLock()
            }
            this.btnFriend.visible = !1,
            this.grpMail.visible = !1,
            this.btnSet.visible = !1,
            this.btnAdd.visible = !1,
            this.grpMap.visible = !1,
            this.btnHide.visible = !1,
            this.btnShow.visible = !1
        },
        i.prototype.setBottomButtonsVisible = function(t) {
            this.grpBottomBg.visible = t,
            this.grpBottomRight.visible = t
        },
        i.prototype.showAllButtons = function() {
            for (var t = 0; t < this._iconList.length; t++) this._iconList[t].visible = !0;
            for (var e = this.systemButtons.getKeys(), t = 0; t < e.length; t++) {
                var i = this.systemButtons.getValue(e[t]);
                i.show()
            }
            this.btnFriend.visible = !0,
            this.grpMail.visible = !0,
            this.btnSet.visible = !0,
            this.btnAdd.visible = !0,
            this.grpMap.visible = !0
        },
        i.prototype.showButtonsByNames = function(t) {
            for (var e = 0; e < t.length; e++) if (this.systemButtons.getValue(t[e])) {
                var i = this.systemButtons.getValue(t[e]);
                i.show()
            } else {
                for (var n = 0; n < this._iconList.length; n++) this._iconList[n].name == t[e] && (this._iconList[n].visible = !0);
                this[t[e]] && (this[t[e]].visible = !0)
            }
        },
        i.prototype.onTouchSystemButtons = function(t) {
            var e = t.currentTarget.index,
            i = config.Toolbar.getItem(e);
            if (i) {
                var n = i.response.split("|"),
                o = +n[0],
                a = n[1];
                1 == o ? ModuleManager.showModuleByID( + a) : 2 == o ? MapManager.changeMap( + a) : 3 == o && this[a] && this[a].call(this),
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【" + i.stat + "】按钮")
            }
        },
        i.prototype.showTeam = function() {
            if (MainManager.actorInfo.teamInfo && MainManager.actorInfo.teamInfo.id > 0) {
                var t = TeamInfoManager.getApplyList();
                if (MainManager.actorInfo.teamInfo.priv < 2 && t.length > 0) {
                    var e = t.shift(),
                    i = PopViewManager.createDefaultStyleObject();
                    i.caller = this,
                    i.clickMaskHandler = function() {},
                    PopViewManager.getInstance().openView(new tipsPop.TeamApplyView, i, e, LevelManager.appLevel),
                    RedPointManager.addRedPointWithNum(this, "toolbar_btnTeam", t.length, null)
                } else ModuleManager.showModuleByID(74)
            } else KTool.getMultiValue([127],
            function(t) {
                var e = SystemTimerManager.sysBJDate.getTime() / 1e3;
                e - t[0] < 86400 ? Alarm.show("离开战队后需要等待24小时后，才能进行加入战队或创建战队的操作。") : ModuleManager.showModuleByID(73)
            })
        },
        i.prototype.showBase = function() {
            StatLogger.log("20210930版本系统功能", "主界面优化", "点击【基地】按钮"),
            RoomManager.changeRoom(MainManager.actorID)
        },
        i.prototype.setEnergy = function() {
            this.iconBatteryValue.source = "main_iconBattery3_png"
        },
        i.prototype.onChangeHead = function(t) {
            this.avatarIcon.setData({
                headId: MainManager.actorInfo.head_id,
                headFrameId: MainManager.actorInfo.head_frame_id
            })
        },
        i.prototype.showPlayerInfo = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return this.txtName.text = MainManager.actorInfo.nick,
                        [4, AchieveManager.init()];
                    case 1:
                        return i.sent(),
                        t = AchieveManager.getCurAchieveInfo(),
                        this.militaryIcon.source = ClientConfig.getAchieveRankIcon(t.id),
                        e = config.Profilephoto.getItem(MainManager.actorInfo.nickBg),
                        this.nameBg.source = ClientConfig.getTitleBg(e.icon),
                        [2]
                    }
                })
            })
        },
        i.prototype.updateMailStatus = function() {
            var t = MailManger.getInstance().getUnReadStatus();
            this.mailHot.visible = t
        },
        i.prototype.show = function() {},
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnSet,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【设置】按钮"),
                ModuleManager.showModuleByID(72)
            },
            this),
            ImageButtonUtil.add(this.btnReturn,
            function() {
                ToolBarManager.showMainPanel(),
                1 === t._hideMode && t.showHandle(),
                t.ShowMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnStar,
            function() {
                ModuleManager.showModuleByID(162, [t.worldType, t.selectStar])
            },
            this),
            ImageButtonUtil.add(this.btnSmallMap,
            function() {
                MainManager.actorModel.stop(),
                MapManager.openMapSelectPop()
            },
            this),
            ImageButtonUtil.add(this.grpMail,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【邮件】按钮"),
                ModuleManager.showModuleByID(6)
            },
            this),
            ImageButtonUtil.add(this.btnFriend,
            function() {
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【好友】按钮"),
                ModuleManager.showModuleByID(24)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                ModuleManager.showModuleByID(config.ModuleConst.HELP_BOOK)
            },
            this),
            ImageButtonUtil.add(this.iconCoin1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1
                })
            },
            this),
            ImageButtonUtil.add(this.iconCoin2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.rechargeDiamond(),
                StatLogger.log("20210930版本系统功能", "主界面优化", "点击【钻石添加】按钮")
            },
            this),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED,
            function(e) {
                t.txtCoin2.text = core.gameUtil.ConvertItemNumView(e.data)
            },
            this),
            EventManager.addEventListener(RobotEvent.SEERDOU_CHANGE_EVENT,
            function() {
                t.txtCoin1.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins)
            },
            this),
            MailManger.getInstance().addEventListener(MaillEvent.EVENT_UPDATE_UNREAD_STATE, this.updateMailStatus, this),
            ImageButtonUtil.add(this.btnShow,
            function() {
                t.showHandle()
            },
            this),
            ImageButtonUtil.add(this.btnHide, this.btnHideClickHandle, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.showMoney, this),
            EventManager.addEventListener("Xinshou_Destroy", this.initMainIcon, this),
            MainManager.actorInfo.addEventListener(UserInfoEvent.EVENT_CHANGE_HEAD_ID, this.onChangeHead, this),
            MainManager.actorInfo.addEventListener(UserInfoEvent.EVENT_CHANGE_HEAD_FRAME_ID, this.onChangeHead, this),
            MainManager.actorInfo.addEventListener(UserInfoEvent.EVENT_CHANGE_NICKNAME, this.updatePlayerNickName, this),
            EventManager.addEventListener(TeamInfoManager.NOTIFY_APPLY_JOIN_TEAM, this.onNotifyApplyJoinTeam, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
            EventManager.addEventListener(UserInfoEvent.EVENT_CHANGE_NICKNAME_FRAME_ID,
            function() {
                var e = config.Profilephoto.getItem(MainManager.actorInfo.nickBg);
                t.nameBg.source = ClientConfig.getTitleBg(e.icon)
            },
            this),
            ImageButtonUtil.add(this.btnShowLeftMenu, this.showLeftMenu, this),
            ImageButtonUtil.add(this.btnHideLeftMenu,
            function() {
                t.hideLeftMenu()
            },
            this)
        },
        i.prototype.onResize = function(t) {
            this.width = LevelManager.stage.stageWidth,
            this.height = LevelManager.stage.stageHeight
        },
        i.prototype.onNotifyApplyJoinTeam = function(t) {
            var e = t.data,
            i = this.systemButtons.getValue("btnTeam");
            RedPointManager.addRedPointWithNum(this, "toolbar_btnTeam", e.length, i.instance, -30)
        },
        i.prototype.showHandle = function(t) {
            var e = this;
            if (void 0 === t && (t = 300), 0 !== this._hideMode) {
                this._hideMode = 0,
                this.btnShow.visible = !1,
                this.btnHide.visible = !0;
                var i = [this.head, this.grpMap, this.groupLineMask, this.grpTopRight, this.grpBottomRight, this.grpBottomBg];
                this.playButtonsEffect(i, 0, 1, t),
                this.grpMap.visible = this.showMapMode,
                this.groupLineMask.visible = this.showMapMode,
                this.showMapMode && (this.grpSeerCoin.visible = !1, this.grpDiamond.visible = !1),
                this.initMainIcon(),
                ChatManager.getInstance().showChatWithOutPar(),
                this.grpMap.scaleX = .2,
                egret.Tween.get(this.grpMap).to({
                    scaleX: 1
                },
                t),
                this.btnHide.touchEnabled = !1,
                egret.setTimeout(function() {
                    e.btnHide.touchEnabled = !0
                },
                null, 500)
            }
        },
        i.prototype.showBtnInMapMode = function() {
            var t = [this.head, this.grpMap, this.groupLineMask, this.grpTopRight, this.grpBottomRight, this.grpBottomBg];
            this.playButtonsEffect(t, 0, 1, 0),
            this.grpSeerCoin.visible = !1,
            this.grpDiamond.visible = !1
        },
        i.prototype.btnHideClickHandle = function() {
            this.playHideAni()
        },
        i.prototype.playHideAni = function(t) {
            var e = this;
            if (void 0 === t && (t = 300), 1 !== this._hideMode) {
                this._hideMode = 1,
                this.btnShow.visible = !0,
                this.btnHide.visible = !1,
                this.grpSeerCoin.visible = !1,
                this.grpDiamond.visible = !1;
                for (var i = [], n = [], o = 0; o < this._iconList.length; o++) {
                    var a = this._iconList[o];
                    a._info.mapisshow ? i[a._info.mapisshow - 1] = a: n.push(a)
                }
                for (var o = 0; o < i.length; o++) {
                    var r = i[o];
                    r && (r.x = 5 + o % 2 * 87, r.y = 97 + 80 * Math.floor(o / 2))
                }
                var s = [this.head, this.grpMap, this.groupLineMask, this.grpTopRight, this.grpBottomRight, this.grpBottomBg];
                s = s.concat(n),
                this.playButtonsEffect(s, 1, 0, t),
                ChatManager.getInstance().hideChat(t > 0),
                egret.Tween.get(this.grpMap).to({
                    scaleX: .2
                },
                t).call(function() {
                    e.grpMap.scaleX = 1
                }),
                this.btnShow.touchEnabled = !1,
                egret.setTimeout(function() {
                    e.btnShow.touchEnabled = !0
                },
                null, 500)
            }
        },
        i.prototype.showFirstInitAni = function(t) {
            var e = t;
            this.visible = !0,
            this.playButtonsEffect([this.grpTop, this.grpBottomRight, this.grpTopRight], 0, 1, e)
        },
        i.prototype.playButtonsEffect = function(t, e, i, n) {
            for (var o = function(o) {
                var a = t[o],
                r = !!i;
                0 == n ? a.visible = r: (a.visible = !0, a.alpha = e, egret.Tween.get(a).to({
                    alpha: i
                },
                n).call(function() {
                    a.visible = r
                })),
                a.touchChildren = r
            },
            a = 0; a < t.length; a++) o(a)
        },
        Object.defineProperty(i.prototype, "isShowMainFlag", {
            get: function() {
                return this._isShowMainFlag
            },
            set: function(t) {
                this._isShowMainFlag = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.ShowMainPanel = function() {
            var t = this;
            if (this.btnShow.visible = !1, this.btnHide.visible = !1, this._isShowMainFlag = !0, this.grpMap.visible = !1, this.groupTitle.visible = !1, this.groupLineMask.visible = !1, this.showMapMode = !1, this.grpSeerCoin.visible = !0, this.grpDiamond.visible = !0, GameInfo.isChecking ? (this.btnFriend.visible = !1, this.grpMail.visible = !1, this.grpDiamond.visible = !1, this.grp_leftMenuOp.visible = !1, this.military.visible = !1, this.txtName.x = 90) : this.txtName.x = 133, this._flagFirstScene = !0, MapManager.hideMap(), SoundManager.loadSound().then(function() {
                SoundManager.playMusic()
            }), this.updateLeftMenuRedDot(), AchieveManager.$inited) {
                var e = AchieveManager.getCurAchieveInfo();
                this.militaryIcon.source = ClientConfig.getAchieveRankIcon(e.id),
                AchieveManager.getOutsideRedState().then(function(e) {
                    t.systemButtons.getValue("btnInfo").redPoint.visible = e
                })
            }
            this.txtTime && (this.txtTime.visible = !0)
        },
        i.prototype.ShowScene = function() {
            this.txtTime && (this.txtTime.visible = !1),
            this.showMapMode || (ToolBarManager.hideMainPanel(), this._isShowMainFlag = !1, this.showMapMode = !0, this.grpMap.visible = !0, this.groupLineMask.visible = !0, this.groupTitle.visible = !0, this._flagFirstScene && (this._hideMode = 1, this.showHandle()), this._flagFirstScene = !1, MapManager.openMap()),
            this.visible = !0
        },
        i.prototype.hideToolBar = function() {
            this._flagFirstScene && this.playHideAni(0),
            this.currentState = "normal"
        },
        i.prototype.showMoney = function(t) {
            var e = this;
            this.txtCoin1.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins),
            UserInfoManager.getDiamond(function(t) {
                e.txtCoin2.text = core.gameUtil.ConvertItemNumView(t)
            },
            this)
        },
        i.prototype.updatePlayerNickName = function() {
            this.txtName.text = MainManager.actorInfo.nick
        },
        Object.defineProperty(i.prototype, "hideMode", {
            get: function() {
                return this._hideMode
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.destroy = function() {
            for (var t = 0; t < this._iconList.length; t++) {
                var e = this._iconList[t];
                e.destroy(),
                DisplayUtil.removeForParent(e)
            }
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            HotRedManager.getInstance().removeRegisterHotEventAll(this),
            SystemTimerManager.removeTickFun(this.updateBatteryTimer.bind(this)),
            MainManager.actorInfo.removeEventListener(UserInfoEvent.EVENT_CHANGE_NICKNAME, this.updatePlayerNickName, this),
            MainManager.actorInfo.removeEventListener(UserInfoEvent.EVENT_CHANGE_HEAD_ID, this.onChangeHead, this),
            MainManager.actorInfo.removeEventListener(UserInfoEvent.EVENT_CHANGE_HEAD_FRAME_ID, this.onChangeHead, this),
            MailManger.getInstance().removeEventListener(MaillEvent.EVENT_UPDATE_UNREAD_STATE, this.updateMailStatus, this)
        },
        i.prototype.showLeftMenu = function() {
            this.leftMenuState = 1,
            this.btnHideLeftMenu.visible = !0,
            this.btnShowLeftMenu.visible = !1;
            for (var t = this.numHideState; t < this._iconList.length; t++) {
                var e = this._iconList[t];
                e && (e.visible = !0, egret.Tween.get(e).to({
                    scaleX: 1,
                    scaleY: 1
                },
                100))
            }
        },
        i.prototype.hideLeftMenu = function(t) {
            void 0 === t && (t = !1),
            this.leftMenuState = 2,
            this.btnShowLeftMenu.visible = !0,
            this.btnHideLeftMenu.visible = !1;
            for (var e = function(e) {
                var n = i._iconList[e];
                n && egret.Tween.get(n).to({
                    scaleX: 0,
                    scaleY: 0
                },
                t ? 0 : 100).call(function() {
                    n.visible = !1
                })
            },
            i = this, n = this.numHideState; n < this._iconList.length; n++) e(n)
        },
        i.prototype.updateLeftMenuRedDot = function() {
            for (var t = !1,
            e = 0; e < this._iconList.length; e++) {
                var i = this._iconList[e];
                if (i && i.redPoint.visible) {
                    t = !0;
                    break
                }
            }
            this.imgLeftMenuRedDot.visible = t
        },
        i.prototype.SetBackToMapData = function(t, e) {
            this.worldType = t,
            this.selectStar = e
        },
        i.prototype.SetCurrentState = function(t) {
            this.currentState = t
        },
        i.UPDATE_TOOLBAR = "update_toolbar",
        i
    } (eui.Component);
    t.ToolBar = e,
    __reflect(e.prototype, "toolBar.ToolBar")
} (toolBar || (toolBar = {}));
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
generateEUI.paths["resource/eui_skins/MainActButtonSkin.exml"] = window.MainActButtonSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_act", "redPoint", "txt_level", "grp_yongzheLevel", "txt_time", "grp_time"],
        this.elementsContent = [this.img_act_i(), this.redPoint_i(), this.grp_yongzheLevel_i(), this.grp_time_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_act_i = function() {
        var t = new eui.Image;
        return this.img_act = t,
        t.height = 60,
        t.horizontalCenter = 0,
        t.top = 0,
        t.visible = !0,
        t.width = 78,
        t
    },
    i.redPoint_i = function() {
        var t = new eui.Image;
        return this.redPoint = t,
        t.height = 22,
        t.source = "main_act_button_redPoint_png",
        t.visible = !1,
        t.width = 21,
        t.x = 48,
        t
    },
    i.grp_yongzheLevel_i = function() {
        var t = new eui.Group;
        return this.grp_yongzheLevel = t,
        t.height = 18,
        t.horizontalCenter = 0,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 21,
        t.y = 18,
        t.elementsContent = [this.txt_level_i()],
        t
    },
    i.txt_level_i = function() {
        var t = new eui.Label;
        return this.txt_level = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 3427204,
        t.text = "1",
        t.textAlign = "center",
        t.textColor = 13032447,
        t.verticalAlign = "middle",
        t.y = 0,
        t
    },
    i.grp_time_i = function() {
        var t = new eui.Group;
        return this.grp_time = t,
        t.horizontalCenter = 0,
        t.y = 54,
        t.elementsContent = [this._Image1_i(), this.txt_time_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 14,
        t.source = "main_act_button_timebg_png",
        t.width = 69,
        t
    },
    i.txt_time_i = function() {
        var t = new eui.Label;
        return this.txt_time = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 3427204,
        t.text = "99:99:99",
        t.textColor = 5043455,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ToolBarSkin.exml"] = window.ToolBarSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["groupLineMask", "grpRightLine", "leftLine", "grpBottomBg", "grpBottomRight", "batteryBg", "iconBattery", "iconBatteryValue", "txtBattery", "Battery", "headBg", "avatarIcon", "headContainer", "Seer", "militaryIcon", "military", "nameBg", "txtName", "headMask", "btnShowLeftMenu", "btnHideLeftMenu", "imgLeftMenuRedDot", "grp_leftMenuOp", "head", "btnWish", "txtCoin1", "iconCoin1", "grpSeerCoin", "iconCoin2", "btnAdd", "txtCoin2", "grpDiamond", "btnHelp", "btnFriend", "btnMail", "mailHot", "grpMail", "btnSet", "grpTopRight", "grpTop", "txtMapName", "groupTitle", "btnSmallMap", "btnStar", "btnReturn", "grpMap", "btnHide", "btnShow"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.groupLineMask_i(), this.grpBottomBg_i(), this.grpBottomRight_i(), this.grpTop_i(), this.groupTitle_i(), this.grpMap_i(), this.btnHide_i(), this.btnShow_i()],
        this.states = [new eui.State("normal", [new eui.SetProperty("btnStar", "visible", !1)]), new eui.State("map", [new eui.SetProperty("btnSmallMap", "x", 165), new eui.SetProperty("btnStar", "visible", !0), new eui.SetProperty("btnReturn", "x", 90)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.groupLineMask_i = function() {
        var t = new eui.Group;
        return this.groupLineMask = t,
        t.bottom = 0,
        t.cacheAsBitmap = !0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.visible = !0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.source = "toolbar_imgLine_png",
        t.top = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.right = 0,
        t.scaleX = -1,
        t.source = "toolbar_imgLine_png",
        t.top = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.bottom = 516,
        t.left = 0,
        t.right = 0,
        t.rotation = 90,
        t.source = "toolbar_imgLine_png",
        t.top = 0,
        t
    },
    i.grpBottomBg_i = function() {
        var t = new eui.Group;
        return this.grpBottomBg = t,
        t.cacheAsBitmap = !0,
        t.height = 62,
        t.touchEnabled = !1,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 578,
        t.elementsContent = [this._Image4_i(), this.grpRightLine_i(), this.leftLine_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 62,
        t.scale9Grid = new egret.Rectangle(174, 17, 31, 17),
        t.source = "main_bottomBg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpRightLine_i = function() {
        var t = new eui.Group;
        return this.grpRightLine = t,
        t.cacheAsBitmap = !0,
        t.right = 105,
        t.y = 8,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "main_bottomBg_line_png",
        t.width = 13,
        t.x = 108,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "main_bottomBg_line_png",
        t.width = 13,
        t.x = 217,
        t.y = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "main_bottomBg_line_png",
        t.width = 13,
        t.x = 326,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "main_bottomBg_line_png",
        t.width = 13,
        t.x = 434,
        t.y = 0,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "main_bottomBg_line_png",
        t.width = 13,
        t.x = 543,
        t.y = 0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "main_bottomBg_line_png",
        t.width = 13,
        t.x = 652,
        t.y = 0,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "main_bottomBg_line_png",
        t.width = 13,
        t.x = 0,
        t.y = 0,
        t
    },
    i.leftLine_i = function() {
        var t = new eui.Image;
        return this.leftLine = t,
        t.height = 40,
        t.source = "main_bottomBg_line_png",
        t.visible = !1,
        t.width = 13,
        t.x = 46,
        t.y = 8,
        t
    },
    i.grpBottomRight_i = function() {
        var t = new eui.Group;
        return this.grpBottomRight = t,
        t.bottom = 0,
        t.cacheAsBitmap = !0,
        t.height = 62,
        t.right = 0,
        t.visible = !0,
        t.width = 764,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i.grpTop_i = function() {
        var t = new eui.Group;
        return this.grpTop = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.touchEnabled = !1,
        t.visible = !0,
        t.elementsContent = [this.head_i(), this.btnWish_i(), this.grpSeerCoin_i(), this.grpDiamond_i(), this.grpTopRight_i()],
        t
    },
    i.head_i = function() {
        var t = new eui.Group;
        return this.head = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.Battery_i(), this.headBg_i(), this.headContainer_i(), this.Seer_i(), this.military_i(), this.nameBg_i(), this.txtName_i(), this.headMask_i(), this.grp_leftMenuOp_i()],
        t
    },
    i.Battery_i = function() {
        var t = new eui.Group;
        return this.Battery = t,
        t.visible = !0,
        t.x = 56,
        t.y = 8,
        t.elementsContent = [this.batteryBg_i(), this.iconBattery_i(), this.iconBatteryValue_i(), this.txtBattery_i()],
        t
    },
    i.batteryBg_i = function() {
        var t = new eui.Image;
        return this.batteryBg = t,
        t.height = 60,
        t.source = "main_battery_bg_png",
        t.width = 228,
        t.x = 0,
        t.y = 0,
        t
    },
    i.iconBattery_i = function() {
        var t = new eui.Image;
        return this.iconBattery = t,
        t.height = 26,
        t.source = "main_iconBattery_png",
        t.width = 40,
        t.x = 26,
        t.y = 32,
        t
    },
    i.iconBatteryValue_i = function() {
        var t = new eui.Image;
        return this.iconBatteryValue = t,
        t.source = "main_iconBattery1_png",
        t.x = 29,
        t.y = 35,
        t
    },
    i.txtBattery_i = function() {
        var t = new eui.Label;
        return this.txtBattery = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "04:56",
        t.textColor = 15135739,
        t.x = 66,
        t.y = 37,
        t
    },
    i.headBg_i = function() {
        var t = new eui.Image;
        return this.headBg = t,
        t.source = "main_head_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.headContainer_i = function() {
        var t = new eui.Group;
        return this.headContainer = t,
        t.cacheAsBitmap = !0,
        t.height = 70,
        t.width = 70,
        t.x = 10,
        t.y = 7,
        t.elementsContent = [this.avatarIcon_i()],
        t
    },
    i.avatarIcon_i = function() {
        var t = new core.component.AvatarIcon;
        return this.avatarIcon = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i.Seer_i = function() {
        var t = new eui.Image;
        return this.Seer = t,
        t.height = 246,
        t.source = "main_Seer_png",
        t.visible = !1,
        t.width = 27,
        t.x = 0,
        t.y = 76,
        t
    },
    i.military_i = function() {
        var t = new eui.Group;
        return this.military = t,
        t.x = 85,
        t.y = 8,
        t.elementsContent = [this.militaryIcon_i()],
        t
    },
    i.militaryIcon_i = function() {
        var t = new eui.Image;
        return this.militaryIcon = t,
        t.height = 31,
        t.source = "main_military_icon_png",
        t.width = 31,
        t.x = 0,
        t.y = 0,
        t
    },
    i.nameBg_i = function() {
        var t = new eui.Image;
        return this.nameBg = t,
        t.height = 45,
        t.width = 144,
        t.x = 111,
        t.y = 2,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "赛尔先锋锋",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 100,
        t.x = 133,
        t.y = 17,
        t
    },
    i.headMask_i = function() {
        var t = new eui.Image;
        return this.headMask = t,
        t.height = 70,
        t.source = "main_head_png",
        t.visible = !1,
        t.width = 70,
        t.x = 10,
        t.y = 7.16,
        t
    },
    i.grp_leftMenuOp_i = function() {
        var t = new eui.Group;
        return this.grp_leftMenuOp = t,
        t.x = 32,
        t.y = 92,
        t.elementsContent = [this.btnShowLeftMenu_i(), this.btnHideLeftMenu_i(), this.imgLeftMenuRedDot_i()],
        t
    },
    i.btnShowLeftMenu_i = function() {
        var t = new eui.Image;
        return this.btnShowLeftMenu = t,
        t.source = "toolbar_left_btnshow_png",
        t.visible = !0,
        t.x = 0,
        t.y = 6,
        t
    },
    i.btnHideLeftMenu_i = function() {
        var t = new eui.Image;
        return this.btnHideLeftMenu = t,
        t.source = "toolbar_left__btnhide_png",
        t.visible = !0,
        t.x = 0,
        t.y = 6,
        t
    },
    i.imgLeftMenuRedDot_i = function() {
        var t = new eui.Image;
        return this.imgLeftMenuRedDot = t,
        t.height = 22,
        t.source = "main_act_button_redPoint_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 21,
        t.x = 16,
        t.y = 0,
        t
    },
    i.btnWish_i = function() {
        var t = new eui.Image;
        return this.btnWish = t,
        t.height = 67,
        t.source = "main_btnWish_png",
        t.visible = !1,
        t.width = 69,
        t.x = 14,
        t.y = 96,
        t
    },
    i.grpSeerCoin_i = function() {
        var t = new eui.Group;
        return this.grpSeerCoin = t,
        t.cacheAsBitmap = !0,
        t.right = 420,
        t.visible = !0,
        t.width = 161,
        t.y = 17,
        t.elementsContent = [this._Image12_i(), this.txtCoin1_i(), this.iconCoin1_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "main_Count_bg_png",
        t.width = 133,
        t.x = 22,
        t.y = 4,
        t
    },
    i.txtCoin1_i = function() {
        var t = new eui.Label;
        return this.txtCoin1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 17,
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 5,
        t
    },
    i.iconCoin1_i = function() {
        var t = new eui.Image;
        return this.iconCoin1 = t,
        t.height = 45,
        t.width = 45,
        t.x = 0,
        t.y = -11,
        t
    },
    i.grpDiamond_i = function() {
        var t = new eui.Group;
        return this.grpDiamond = t,
        t.cacheAsBitmap = !0,
        t.right = 258,
        t.visible = !0,
        t.width = 155,
        t.y = 16,
        t.elementsContent = [this._Image13_i(), this.iconCoin2_i(), this.btnAdd_i(), this.txtCoin2_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "main_Count_bg_png",
        t.width = 133,
        t.x = 13,
        t.y = 5,
        t
    },
    i.iconCoin2_i = function() {
        var t = new eui.Image;
        return this.iconCoin2 = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 21,
        t.source = "main_btnAdd_png",
        t.width = 21,
        t.x = 129,
        t.y = 5,
        t
    },
    i.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "0",
        t.textColor = 12834813,
        t.y = 6,
        t
    },
    i.grpTopRight_i = function() {
        var t = new eui.Group;
        return this.grpTopRight = t,
        t.cacheAsBitmap = !0,
        t.right = 39,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.y = 13,
        t.layout = this._HorizontalLayout2_i(),
        t.elementsContent = [this.btnHelp_i(), this.btnFriend_i(), this.grpMail_i(), this.btnSet_i()],
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 20,
        t.verticalAlign = "middle",
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.height = 35,
        t.source = "main_panel_btnhelp_png",
        t.width = 36,
        t.x = 16,
        t.y = 10,
        t
    },
    i.btnFriend_i = function() {
        var t = new eui.Image;
        return this.btnFriend = t,
        t.height = 30,
        t.source = "main_btnFriend_png",
        t.visible = !0,
        t.width = 35,
        t.x = 0,
        t.y = 3,
        t
    },
    i.grpMail_i = function() {
        var t = new eui.Group;
        return this.grpMail = t,
        t.height = 27,
        t.x = 61,
        t.elementsContent = [this.btnMail_i(), this.mailHot_i()],
        t
    },
    i.btnMail_i = function() {
        var t = new eui.Image;
        return this.btnMail = t,
        t.height = 27,
        t.source = "main_btnMail_png",
        t.width = 35,
        t.x = 0,
        t
    },
    i.mailHot_i = function() {
        var t = new eui.Image;
        return this.mailHot = t,
        t.height = 16,
        t.source = "main_mail_hot_png",
        t.visible = !0,
        t.width = 15,
        t.x = 23,
        t.y = -5,
        t
    },
    i.btnSet_i = function() {
        var t = new eui.Image;
        return this.btnSet = t,
        t.height = 35,
        t.source = "main_btnSet_png",
        t.visible = !0,
        t.width = 34,
        t.x = 121,
        t.y = 1,
        t
    },
    i.groupTitle_i = function() {
        var t = new eui.Group;
        return this.groupTitle = t,
        t.cacheAsBitmap = !0,
        t.horizontalCenter = 0,
        t.y = 0,
        t.elementsContent = [this._Image14_i(), this.txtMapName_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "toolbar_imgmapnamebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtMapName_i = function() {
        var t = new eui.Label;
        return this.txtMapName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.grpMap_i = function() {
        var t = new eui.Group;
        return this.grpMap = t,
        t.right = 0,
        t.touchEnabled = !1,
        t.y = 490,
        t.elementsContent = [this._Image15_i(), this.btnSmallMap_i(), this.btnStar_i(), this.btnReturn_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "toolbar_imgbtnbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnSmallMap_i = function() {
        var t = new eui.Image;
        return this.btnSmallMap = t,
        t.source = "toolbar_btnsmallmap_png",
        t.x = 213,
        t.y = 10,
        t
    },
    i.btnStar_i = function() {
        var t = new eui.Image;
        return this.btnStar = t,
        t.source = "toolbar_btnstar_png",
        t.visible = !1,
        t.x = 213,
        t.y = 10,
        t
    },
    i.btnReturn_i = function() {
        var t = new eui.Image;
        return this.btnReturn = t,
        t.source = "toolbar_btnreturn_png",
        t.x = 135,
        t.y = 10,
        t
    },
    i.btnHide_i = function() {
        var t = new eui.Image;
        return this.btnHide = t,
        t.right = 45,
        t.source = "toolbar_btnhide_png",
        t.visible = !0,
        t.y = 500,
        t
    },
    i.btnShow_i = function() {
        var t = new eui.Image;
        return this.btnShow = t,
        t.right = 43,
        t.source = "toolbar_btnshow_png",
        t.visible = !0,
        t.y = 500,
        t
    },
    e
} (eui.Skin);