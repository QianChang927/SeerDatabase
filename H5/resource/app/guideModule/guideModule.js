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
guideModule; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._loadSkinCompleteFlag = !1,
            t._createCompleteFlag = !1,
            t._setDataFlag = !1,
            t.addEventListener(eui.UIEvent.COMPLETE, t._loaderSkinComplete, t),
            t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t._creationComplete, t),
            t.visible = !1,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype._loaderSkinComplete = function() {
            this.removeEventListener(eui.UIEvent.COMPLETE, this._loaderSkinComplete, this),
            this._loadSkinCompleteFlag = !0,
            this._initView()
        },
        t.prototype._creationComplete = function() {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this._creationComplete, this),
            this._createCompleteFlag = !0,
            this._initView()
        },
        t.prototype._initView = function() {
            this._loadSkinCompleteFlag && this._createCompleteFlag && this._setDataFlag && (this._parseData(), this._initEvents(), this._updateView(), this.dispatchEventWith(t.EVENT_INITIALIZED))
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {},
        t.prototype.setData = function(e, t) {
            this._cfg = e,
            this._data = t,
            this._setDataFlag = !0,
            this._initView()
        },
        t.prototype._parseData = function() {},
        t.prototype.Show = function() {
            this.visible = !0
        },
        t.prototype._updateView = function() {},
        t.prototype.Hide = function() {
            this.visible = !1,
            this._destroy()
        },
        t.prototype.GetConfig = function() {
            return this._cfg
        },
        t.prototype._destroy = function() {
            this._removeEvents(),
            this.parent && this.parent.removeChild(this),
            this.removeChildren(),
            this._data = null
        },
        t.EVENT_INITIALIZED = "event_initialized",
        t
    } (eui.Component);
    e.BaseGuideComp = t,
    __reflect(t.prototype, "guideModule.BaseGuideComp", ["guideModule.IGuideComp"])
} (guideModule || (guideModule = {}));
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
guideModule; !
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.SetSize = function(e) {},
        t.prototype.SetDesc = function(e) {},
        t.prototype.Destroy = function() {
            this.parent && this.parent.removeChild(this)
        },
        t
    } (eui.Component);
    e.BaseBubble = t,
    __reflect(t.prototype, "guideModule.BaseBubble")
} (guideModule || (guideModule = {}));
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i._isAddEventsFlag = !1,
            i._colorValue = 0,
            i.name = "CompTouchTap",
            i.skinName = e.TouchTapSKin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.touchEnabled = !1,
            this.percentWidth = this.percentHeight = 100,
            t.prototype.childrenCreated.call(this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._onResize, this)
        },
        i.prototype._onResize = function(e) {
            var t = this;
            egret.setTimeout(function() {
                t.removeChildAt(0),
                t._updateView()
            },
            this, 100)
        },
        i.prototype._initEvents = function() {
            var t = this._cfg.compData;
            t.targetName && egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this, !1, Number.MAX_VALUE),
            t.event && e.GuideModule.GetInstance().addEventListener(t.event, this._onGuideEvent, this)
        },
        i.prototype._updateView = function() {
            this._drawMask()
        },
        i.prototype._drawMask = function() {
            var t, i = this._cfg.compData,
            n = 5,
            o = 5;
            if (i && i.rect) t = e.createRectangle(i.point, i.rect.x, i.rect.y, i.rect.w, i.rect.h);
            else {
                var r, s, u, a, h = this._data;
                if (h instanceof egret.DisplayObject) {
                    this._isAddEventsFlag || i.event || i.targetName || (this._isAddEventsFlag = !0, h.once(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        e.GuideModule.GetInstance().hideGuide()
                    },
                    this, !1, Number.MAX_VALUE));
                    var _ = h.getTransformedBounds(egret.lifecycle.stage);
                    if (i.offsetData) {
                        i.offsetData.w -= 2 * n,
                        i.offsetData.h -= 2 * o;
                        var c = _.x + .5 * _.width,
                        d = _.y + .5 * _.height;
                        c += i.offsetData.x,
                        c += i.offsetData.y,
                        r = c - .5 * i.offsetData.w,
                        s = d - .5 * i.offsetData.h,
                        u = i.offsetData.w,
                        a = i.offsetData.h
                    } else r = _.x,
                    s = _.y,
                    u = _.width,
                    a = _.height
                } else r = this._data.x,
                s = this._data.y,
                u = this._data.width,
                a = this._data.height;
                t = new egret.Rectangle(r, s, u, a)
            }
            var l = e.DrawRectMask([t]);
            l.name = "maskBg",
            l.touchEnabled = !1,
            this.addChildAt(l, 0),
            e.ChangeRect(t, n, o),
            this.wk.width = t.width,
            this.wk.height = t.height,
            this.wk.x = t.x,
            this.wk.y = t.y,
            this.hand.scaleX = "left" === i.hand ? -1 : 1,
            1 === this.hand.scaleX ? i.handPos ? (this.hand.x = this.wk.x + this.wk.width + i.handPos.x, this.hand.y = this.wk.y + i.handPos.y) : (this.hand.x = this.wk.x + this.wk.width + 20, this.hand.y = this.wk.y + 20) : i.handPos ? (this.hand.x = this.wk.x + i.handPos.x, this.hand.y = this.wk.y + i.handPos.y) : (this.hand.x = this.wk.x - 20, this.hand.y = this.wk.y + 20);
            var p = this.wk.x + .5 * this.wk.width,
            g = this.wk.y + .5 * this.wk.height;
            egret.Tween.get(this.hand, {
                loop: !0
            }).to({
                x: p,
                y: g
            },
            500).wait(500);
            var f = new egret.GlowFilter(16776960, 1, 17.5, 17.5, 2, 3);
            this.wk.filters = [f],
            this.colorValue = 1,
            egret.Tween.get(this, {
                loop: !0
            }).to({
                colorValue: 3
            },
            1e3)
        },
        Object.defineProperty(i.prototype, "colorValue", {
            get: function() {
                return this._colorValue
            },
            set: function(e) {
                this._colorValue = e;
                var t = this.wk.filters[0];
                t.strength = e
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype._onTouchItem = function(t) {
            var i = this._cfg.compData;
            t.target.name === i.targetName && (console.log(t.target.name), e.GuideModule.GetInstance().hideGuide())
        },
        i.prototype._onGuideEvent = function(t) {
            e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._removeEvents = function() {
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._onResize, this);
            var t = this._cfg.compData;
            t.targetName && egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this, !1),
            t.event && e.GuideModule.GetInstance().removeEventListener(t.event, this._onGuideEvent, this)
        },
        i.prototype._destroy = function() {
            egret.Tween.removeTweens(this.hand),
            t.prototype._destroy.call(this)
        },
        i
    } (e.BaseGuideComp);
    e.CompTouchTap = t,
    __reflect(t.prototype, "guideModule.CompTouchTap")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompTouchTap, "guideModule.CompTouchTap");
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
    return new(i || (i = Promise))(function(o, r) {
        function s(e) {
            try {
                a(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function u(e) {
            try {
                a(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new i(function(t) {
                t(e.value)
            }).then(s, u)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return a.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (s = a.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    a = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    a.label = i[1];
                    break
                }
                if (6 === i[0] && a.label < s[1]) {
                    a.label = s[1],
                    s = i;
                    break
                }
                if (s && a.label < s[2]) {
                    a.label = s[2],
                    a.ops.push(i);
                    break
                }
                s[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            i = t.call(e, a)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, s, u, a = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
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
guideModule; !
function(e) {
    var t; !
    function(e) {
        e.LeftTop = "leftTop",
        e.LeftBottom = "leftBottom",
        e.RightTop = "rightTop",
        e.RightBottom = "rightBottom",
        e.Center = "center"
    } (t = e.GuidePointType || (e.GuidePointType = {}));
    var i; !
    function(e) {
        e.Component = "component",
        e.AddEvent = "addEvent",
        e.RegisterEvent = "registerEvent",
        e.Msg2Server = "msg2Server"
    } (i = e.GuideAction || (e.GuideAction = {}));
    var n = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e._currentGuideStep = 0,
            e._currentChildId = 0,
            e._isCompleteGuideFlag = !1,
            e._initEvents(),
            e
        }
        return __extends(n, t),
        n.GetInstance = function() {
            return n._instance || (n._instance = new n),
            n._instance
        },
        n.prototype._initEvents = function() {
            this.addEventListener(e.GuideEvent.EVENT_GUIDE_START, this._onStart, this),
            this.addEventListener(e.GuideEvent.EVENT_GUIDE_GOTO_STEP, this._onGotoStep, this)
        },
        n.prototype._removeEvents = function() {
            this.removeEventListener(e.GuideEvent.EVENT_GUIDE_START, this._onStart, this),
            this.removeEventListener(e.GuideEvent.EVENT_GUIDE_GOTO_STEP, this._onGotoStep, this)
        },
        n.prototype.SetUp = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i = this;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, RES.getResByUrl("resource/config/guide.json",
                        function(e, t) {},
                        this, RES.ResourceItem.TYPE_JSON)];
                    case 1:
                        return t = n.sent(),
                        this._guideConfig = t.data,
                        [4, this.getUpdateProgressValues()];
                    case 2:
                        return n.sent(),
                        [4, this.setGuideStartConfig()];
                    case 3:
                        return n.sent(),
                        [4, config.Tutorial_talk.loadAsync()];
                    case 4:
                        return n.sent(),
                        [4, config.Npc.loadAsync()];
                    case 5:
                        return n.sent(),
                        [2, Promise.resolve().then(function() {
                            i.dispatchEventWith(e.GuideEvent.EVENT_INIT_GUIDE_COMPLETE)
                        })]
                    }
                })
            })
        },
        n.prototype._onStart = function(t) {
            if (this.removeEventListener(e.GuideEvent.EVENT_GUIDE_START, this._onStart, this), this._isCompleteGuideFlag) return this._removeEvents(),
            void e.log("引导已经全部完成");
            e.log("引导程序启动");
            var i = this.getGuideConfig(this._currentGuideStep, this._currentChildId);
            this._startGuid(i)
        },
        n.prototype.setGuideStartConfig = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, o, r;
                return __generator(this,
                function(s) {
                    return this._currentGuideStep = this._value_108100,
                    this._currentChildId = 1,
                    3 === this._currentGuideStep ? (e = this.GetNewSeerEvolutionChildProgress(1), 1 > e ? this._currentChildId = 1 : 1 === e ? this._currentChildId = 1001 : 2 === e ? this._currentChildId = 2001 : 3 === e ? this._currentChildId = 3001 : this._currentChildId = 4001) : 4 === this._currentGuideStep ? this._currentChildId = 1001 : 5 === this._currentGuideStep ? 1 === BitUtil.getBit(this._value_108102, 0) && (this._currentChildId = 1001) : 6 === this._currentGuideStep ? 1 === BitUtil.getBit(this._value_108102, 3) ? this._currentChildId = 2001 : 1 === BitUtil.getBit(this._value_108102, 2) && (this._currentChildId = 1001) : 7 === this._currentGuideStep ? (t = this.GetNewSeerEvolutionChildProgress(2), t >= 1 && (this._currentChildId = 1001)) : 9 === this._currentGuideStep ? 1 === BitUtil.getBit(this._value_108102, 6) ? this._currentChildId = 2001 : 1 === BitUtil.getBit(this._value_108102, 5) && (this._currentChildId = 1001) : 10 === this._currentGuideStep && (i = this.GetNewSeerEvolutionChildProgress(3), i > 0 && (this._currentChildId = 1001)),
                    n = egret.localStorage.getItem("new_seer_guide_uid@" + MainManager.actorInfo.userID),
                    n && (o = +n.split("_")[0], this._currentGuideStep === o && (r = +n.split("_")[1], r > this._currentChildId && (this._currentChildId = r))),
                    [2, Promise.resolve()]
                })
            })
        },
        n.prototype.dynamicsConfigLink = function(e, t) {
            for (var i, n = t.id,
            o = t.resetArray,
            r = 0; r < o.length; r++) i.push(this.getGuideConfig(e, o[r]));
            for (var r = 1; r < i.length; r++) {
                var s = i[r],
                u = i[r - 1];
                u.nextParams.nextId = s.id
            }
            return i[r - 1].nextParams.nextId = n,
            i
        },
        n.prototype.waitServerMsgCallBack = function(e, t) {
            this._isWaitServerMsgFlag ? (this._waitServerCallBack = e, this._waitServerCaller = t) : e.apply(t, null)
        },
        n.prototype.hideGuide = function() {
            this._currentGuideComp && (this._currentGuideComp.removeEventListener(e.BaseGuideComp.EVENT_INITIALIZED, this.compCreated, this), this._currentGuideComp.Hide(), this._currentGuideComp = null, this._isCompleteGuideFlag || this._onComplete())
        },
        n.prototype._onComplete = function(t) {
            var i = this;
            n.GetInstance().LockTouchEvent();
            var o = this._currentConfig.nextParams;
            if (o) {
                o.nextId ? this._currentChildId = o.nextId: this._currentChildId++,
                o.nextStep && (this._currentGuideStep = o.nextStep);
                var r = o.delay || 0;
                r > 0 ? egret.setTimeout(function() {
                    i._next(t)
                },
                this, r) : this._next(t)
            } else e.log("新手引导已经完成"),
            this._isCompleteGuideFlag = !0,
            this._removeEvents(),
            this.dispatchEventWith(e.GuideEvent.EVENT_GUIDE_COMPLETE),
            ToolBarManager.UpdateToolBarLeftButtons(),
            n.GetInstance().UnLockTouchEvent(),
            EventManager.addEventListener("event_mian_panel_first_addtoStage", this._onFirstOpenMain, this, !1, -1),
            ToolBarManager.showMainPanel()
        },
        n.prototype._onFirstOpenMain = function(e) {
            EventManager.removeEventListener("event_mian_panel_first_addtoStage", this._onFirstOpenMain, this),
            ToolBarManager.HideToolBar(),
            ChatManager.getinstance().hideChat(!1),
            EventManager.dispatchEventWith("event_first_open_main_panel")
        },
        n.prototype._onGotoStep = function(e) {
            var t = e.data,
            i = t.step,
            n = t.id;
            this._currentGuideStep = i,
            this._currentChildId = n,
            this._next(t)
        },
        n.prototype._next = function(e) {
            var t = this.getGuideConfig(this._currentGuideStep, this._currentChildId);
            return t ? void this._startGuid(t, e) : console.error("GuideModule>>>>>引导配置错误::没有Step_%i>>>id:%i", this._currentGuideStep, this._currentChildId)
        },
        n.prototype._startGuid = function(t, i) {
            if (t.resetArray) {
                var o = this.dynamicsConfigLink(this._currentGuideStep, t);
                t = o[0],
                this._currentChildId = o[0].id,
                e.log("动态生成前置引导>>>", o)
            }
            e.log("引导步骤Step_%i>>>>>>>Id:%i", this._currentGuideStep, t.id),
            this._currentConfig = t,
            this._flagStr = t.flag ? t.flag: "",
            n.GetInstance().LockTouchEvent(),
            this._doGuide(i)
        },
        n.prototype._doGuide = function(t) {
            var o = this,
            r = this._currentConfig;
            switch (r.actionType) {
            case i.Component:
                var s = r.actionData;
                e.log("创建引导组件%s", s.compName);
                var u = egret.getDefinitionByName("guideModule." + s.compName),
                a = new u;
                this._currentGuideComp = a,
                n.GetInstance().LockTouchEvent(),
                a.addEventListener(e.BaseGuideComp.EVENT_INITIALIZED, this.compCreated, this),
                a.setData(r.actionData, t),
                LevelManager.GuideLayer.addChild(a);
                break;
            case i.AddEvent:
                e.log("监听自定义事件guide_myCustom_event_%s", r.actionData),
                n.GetInstance().UnLockTouchEvent(),
                this.once("guide_myCustom_event_" + r.actionData, this.onEventCompleted, this);
                break;
            case i.RegisterEvent:
                e.log("开启一组自定义事件guide_register@%s", r.actionData),
                n.GetInstance().UnLockTouchEvent(),
                this.once("guide_register_event_complete@" + r.actionData, this.onEventCompleted, this),
                this.dispatchEventWith("guide_register_event@" + r.actionData, !1, r.actionData);
                break;
            case i.Msg2Server:
                e.log("发送消息");
                var h = r.actionData;
                42404 === h.id ? (this._isWaitServerMsgFlag = !0, this.c2s_new_seer(h.data).then(function() {
                    o._onComplete(),
                    o._isWaitServerMsgFlag = !1,
                    o.doWaitServerCallBack()
                })) : (this._isWaitServerMsgFlag = !0, SocketConnection.sendWithPromise(h.id, h.data).then(function() {
                    o._onComplete(),
                    o._isWaitServerMsgFlag = !1,
                    o.doWaitServerCallBack()
                })["catch"](function() {
                    o._isWaitServerMsgFlag = !1,
                    console.log("引导过程中发送协议%i" + h.id + ">>>参数:" + JSON.stringify(h.data) + "，出现错误")
                }))
            }
        },
        n.prototype.doWaitServerCallBack = function() {
            if (this._waitServerCallBack && this._waitServerCaller) {
                var e = this._waitServerCallBack,
                t = this._waitServerCaller;
                this._waitServerCallBack = null,
                this._waitServerCaller = null,
                e.apply(t, null)
            }
        },
        n.prototype.onEventCompleted = function(t) {
            e.log("GuideModule>>>>>引导::接收到事件@%s", t.type),
            this._onComplete(t.data)
        },
        n.prototype.compCreated = function(t) {
            this._currentGuideComp.removeEventListener(e.BaseGuideComp.EVENT_INITIALIZED, this.compCreated, this),
            this._currentGuideComp.Show(),
            n.GetInstance().UnLockTouchEvent(),
            e.log("引导组件%s创建完成", this._currentGuideComp.GetConfig().compName)
        },
        n.prototype.getGuideConfig = function(e, t) {
            var i = this._guideConfig["step_" + e];
            if (!i) return null;
            for (var n = 0; n < i.length; n++) if (i[n].id === t) return i[n];
            return null
        },
        n.prototype.getUpdateProgressValues = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([108100, 108101, 108102, 108103])];
                    case 1:
                        return e = i.sent(),
                        this._value_108100 = e[0],
                        t = core.gameUtil.GetHrefParameter("showGuide"),
                        "true" === t ? 15 === this._value_108100 && (this._isCompleteGuideFlag = !0) : this._isCompleteGuideFlag = !0,
                        this._value_108101 = e[1],
                        this._value_108102 = e[2],
                        this._value_108103 = e[3],
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype.UpdateProgressValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.getUpdateProgressValues()];
                    case 1:
                        return [2, e.sent()]
                    }
                })
            })
        },
        n.prototype.c2s_new_seer = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(42404, e)["catch"](function() {
                            return Promise.resolve()
                        })];
                    case 1:
                        return t.sent(),
                        [4, this.getUpdateProgressValues()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype.GetGuideStep = function() {
            return this._currentGuideStep
        },
        n.prototype.GetChildId = function() {
            return this._currentChildId
        },
        n.prototype.isCompleteFlag = function() {
            return ! 1
        },
        n.prototype.GetValue = function(e) {
            return this["_value_" + e]
        },
        n.prototype.GetNewSeerEvolutionChildProgress = function(e) {
            var t = this._value_108101;
            return t >> 8 * (e - 1) & 255
        },
        n.prototype.CheckNewSeerFlag = function(e) {
            return this._isCompleteGuideFlag ? !1 : "@" + e === this._flagStr
        },
        n.prototype.ShowBuZhuoTiShiPopView = function() {
            var t = PopViewManager.createDefaultStyleObject();
            t.caller = this,
            t.clickMaskHandler = function() {},
            PopViewManager.getInstance().openView(new e.NewSeerOtherBuzhuoTiShi, t)
        },
        n.prototype.LockTouchEvent = function() {
            egret.lifecycle.stage.touchChildren = !1
        },
        n.prototype.UnLockTouchEvent = function() {
            egret.lifecycle.stage.touchChildren = !0
        },
        n
    } (egret.EventDispatcher);
    e.GuideModule = n,
    __reflect(n.prototype, "guideModule.GuideModule")
} (guideModule || (guideModule = {}));
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
guideModule; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.name = "CompCircleMask",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.percentWidth = this.percentHeight = 100,
            e.prototype.childrenCreated.call(this)
        },
        t.prototype._updateView = function() {},
        t
    } (e.BaseGuideComp);
    e.CompCircleMask = t,
    __reflect(t.prototype, "guideModule.CompCircleMask")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompCircleMask, "guide.CompCircleMask");
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "CompDialogNext",
            i.skinName = e.DialogNextSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.touchEnabled = !1,
            this.percentWidth = this.percentHeight = 100,
            t.prototype.childrenCreated.call(this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._onResize, this)
        },
        i.prototype._onResize = function(e) {
            var t = this;
            egret.setTimeout(function() {
                t.group_bgMask.removeChildren(),
                t._updateView()
            },
            this, 100)
        },
        i.prototype._initEvents = function() {
            this.group_bgMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onNext, this),
            this.group_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onNext, this)
        },
        i.prototype._onNext = function() {
            e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._updateView = function() {
            this._drawMask()
        },
        i.prototype._drawMask = function() {
            var t, i = this._cfg.compData;
            t = i && i.rect ? e.createRectangle(i.point, i.rect.x, i.rect.y, i.rect.w, i.rect.h) : new egret.Rectangle(this._data.x, this._data.y, this._data.w, this._data.h);
            var n = e.DrawRectMask([t]);
            if (n.name = "maskBg", n.touchEnabled = !1, this.group_bgMask.addChildAt(n, 0), e.ChangeRect(t, 10, 10), this.k.width = t.width, this.k.height = t.height, this.k.x = t.x, this.k.y = t.y, i.npcData) {
                this.npc.scaleX = "left" === i.npcData.dir ? 1 : -1,
                this.npc.x = t.x + i.npcData.x,
                this.npc.y = t.y + i.npcData.y;
                var o = i.npcData.bubble,
                r = e.createBubble(o.data);
                this.group_bgMask.addChild(r),
                r.x = this.npc.x + o.x,
                r.y = this.npc.y + o.y
            }
        },
        i.prototype._onGuideEvent = function(t) {
            e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._removeEvents = function() {
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._onResize, this),
            this.group_bgMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onNext, this),
            this.group_next.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onNext, this)
        },
        i.prototype._destroy = function() {
            this.group_bgMask.removeChildren(),
            t.prototype._destroy.call(this)
        },
        i
    } (e.BaseGuideComp);
    e.CompDialogNext = t,
    __reflect(t.prototype, "guideModule.CompDialogNext")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompDialogNext, "guideModule.CompDialogNext");
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "CompDragMove",
            i.skinName = e.DragMoveSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.touchEnabled = !1,
            this.percentWidth = this.percentHeight = 100,
            this._initHandPos = new egret.Point(this.hand.x, this.hand.y),
            t.prototype.childrenCreated.call(this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._onResize, this)
        },
        i.prototype._onResize = function(e) {
            var t = this;
            egret.setTimeout(function() {
                t.group_other.removeChildren(),
                t._updateView()
            },
            this, 100)
        },
        i.prototype._initEvents = function() {
            var t = this._cfg.compData;
            t.targetName && egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this, !1, -99999999),
            t.event && e.GuideModule.GetInstance().addEventListener(t.event, this._onGuideEvent, this)
        },
        i.prototype._updateView = function() {
            this._drawMask()
        },
        i.prototype._drawMask = function() {
            var t, i = this._cfg.compData;
            t = i && i.rect ? e.createRectangle(i.point, i.rect.x, i.rect.y, i.rect.w, i.rect.h) : new egret.Rectangle(this._data.x, this._data.y, this._data.w, this._data.h);
            var n = e.DrawRectMask([t]);
            if (n.name = "maskBg", n.touchEnabled = !1, this.group_other.addChildAt(n, 0), e.ChangeRect(t, 10, 10), this.wk.width = t.width, this.wk.height = t.height, this.wk.x = t.x, this.wk.y = t.y, this._setMove(t, i.arrowPoint.x, i.arrowPoint.y), i.bubbleData) {
                var o = this._addBubble(i.bubbleData.data);
                o.x = t.x + i.bubbleData.x,
                o.y = t.y + i.bubbleData.y,
                this.group_other.addChildAt(o, 1)
            }
        },
        i.prototype._addBubble = function(t) {
            return e.createBubble(t)
        },
        i.prototype._setMove = function(e, t, i) {
            var n = e.x + t,
            o = e.y + i;
            this.group_arrow.x = n,
            this.group_arrow.y = o,
            this._playTweens()
        },
        i.prototype._playTweens = function() {
            egret.Tween.removeTweens(this.hand),
            this.hand.x = this._initHandPos.x;
            var e = 15;
            egret.Tween.get(this.hand, {
                loop: !0
            }).to({
                x: e
            },
            1500, egret.Ease.quadIn)
        },
        i.prototype._onTouchItem = function(t) {
            var i = this._cfg.compData;
            t.target.name === i.targetName && (console.log(t.target.name), e.GuideModule.GetInstance().hideGuide())
        },
        i.prototype._onGuideEvent = function(t) {
            e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._removeEvents = function() {
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._onResize, this);
            var t = this._cfg.compData;
            t.targetName && egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this, !1),
            t.event && e.GuideModule.GetInstance().removeEventListener(t.event, this._onGuideEvent, this)
        },
        i.prototype._destroy = function() {
            this.group_other.removeChildren(),
            egret.Tween.removeTweens(this.hand),
            t.prototype._destroy.call(this)
        },
        i
    } (e.BaseGuideComp);
    e.CompDragMove = t,
    __reflect(t.prototype, "guideModule.CompDragMove")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompDragMove, "guideModule.CompDragMove");
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "CompMoreNext",
            i.skinName = e.MoreNextKuangSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.touchEnabled = !1,
            this.percentWidth = this.percentHeight = 100,
            t.prototype.childrenCreated.call(this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._onResize, this)
        },
        i.prototype._onResize = function(e) {
            var t = this;
            egret.setTimeout(function() {
                t.group_bgMask.removeChildren(),
                t._updateView()
            },
            this, 100)
        },
        i.prototype._initEvents = function() {
            this.group_bgMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onNext, this),
            this.group_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onNext, this)
        },
        i.prototype._onNext = function() {
            e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._updateView = function() {
            this._drawMask()
        },
        i.prototype._drawMask = function() {
            var e = this._cfg.compData,
            t = e.data;
            t ? this._createItemsByConfig(e) : this._createItemsByObj(this._data, e)
        },
        i.prototype._createItemsByConfig = function(t) {
            for (var i = t.data,
            n = [], o = 0; o < i.length; o++) {
                var r = this._createKImage(),
                s = i[o].rect,
                u = e.createRectangle(i[o].point, s.x, s.y, s.w, s.h);
                n.push(u),
                e.ChangeRect(u, 10, 10),
                r.width = u.width,
                r.height = u.height,
                r.x = u.x,
                r.y = u.y,
                this.group_bgMask.addChild(r);
                var a = i[o].bubble,
                h = e.createBubble(a.data);
                this.group_bgMask.addChild(h),
                h.x = r.x + r.width / 2 + a.x,
                h.y = r.y + r.height / 2 + a.y
            }
            var _ = e.DrawRectMask(n);
            _.name = "maskBg",
            _.touchEnabled = !1,
            this.group_bgMask.addChildAt(_, 0)
        },
        i.prototype._createKImage = function() {
            var e = new eui.Image;
            return e.source = RES.getRes("guide_s9_box_bg_png"),
            e.touchEnabled = !1,
            e
        },
        i.prototype._createItemsByObj = function(t, i) {
            for (var n = [], o = i.data, r = 0; r < t.length; r++) {
                var s = this._createKImage(),
                u = t[r].rect,
                a = new egret.Rectangle(u.x, u.y, u.w, u.h);
                e.ChangeRect(a, 10, 10),
                s.width = a.width,
                s.height = a.height,
                s.x = a.x,
                s.y = a.y,
                this.group_bgMask.addChild(s);
                var h = o[r].bubble,
                _ = e.createBubble(h.data);
                this.group_bgMask.addChild(_),
                _.x = s.x + s.width / 2 + h.x,
                _.y = s.y + s.height / 2 + h.y,
                n.push(a)
            }
            var c = e.DrawRectMask(n);
            c.name = "maskBg",
            c.touchEnabled = !1,
            this.group_bgMask.addChildAt(c, 0)
        },
        i.prototype._onGuideEvent = function(t) {
            e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._removeEvents = function() {
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._onResize, this),
            this.group_bgMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onNext, this),
            this.group_next.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onNext, this)
        },
        i.prototype._destroy = function() {
            this.group_bgMask.removeChildren(),
            t.prototype._destroy.call(this)
        },
        i
    } (e.BaseGuideComp);
    e.CompMoreNext = t,
    __reflect(t.prototype, "guideModule.CompMoreNext")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompMoreNext, "guideModule.CompMoreNext");
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "CompDragMove",
            i.skinName = e.MoveDownSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.touchEnabled = !1,
            this.percentWidth = this.percentHeight = 100,
            this._initHandPos = new egret.Point(this.hand.x, this.hand.y),
            t.prototype.childrenCreated.call(this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._onResize, this)
        },
        i.prototype._onResize = function(e) {
            var t = this;
            egret.setTimeout(function() {
                t.group_other.removeChildren(),
                t._updateView()
            },
            this, 100)
        },
        i.prototype._initEvents = function() {
            var t = this._cfg.compData;
            t.targetName && egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this, !1, -99999999),
            t.event && e.GuideModule.GetInstance().addEventListener(t.event, this._onGuideEvent, this)
        },
        i.prototype._updateView = function() {
            this._drawMask()
        },
        i.prototype._drawMask = function() {
            var t, i = this._cfg.compData;
            t = i && i.rect ? e.createRectangle(i.point, i.rect.x, i.rect.y, i.rect.w, i.rect.h) : new egret.Rectangle(this._data.x, this._data.y, this._data.w, this._data.h);
            var n = e.DrawRectMask([t]);
            if (n.name = "maskBg", n.touchEnabled = !1, this.group_other.addChildAt(n, 0), e.ChangeRect(t, 10, 10), this.wk.width = t.width, this.wk.height = t.height, this.wk.x = t.x, this.wk.y = t.y, this._setMove(t, i.arrowPoint.x, i.arrowPoint.y), i.bubbleData) {
                var o = this._addBubble(i.bubbleData.data);
                o.x = t.x + i.bubbleData.x,
                o.y = t.y + i.bubbleData.y,
                this.group_other.addChildAt(o, 1)
            }
        },
        i.prototype._addBubble = function(t) {
            return e.createBubble(t)
        },
        i.prototype._setMove = function(e, t, i) {
            var n = e.x + t,
            o = e.y + i;
            this.group_arrow.x = n,
            this.group_arrow.y = o,
            this._playTweens()
        },
        i.prototype._playTweens = function() {
            egret.Tween.removeTweens(this.hand),
            this.hand.x = this._initHandPos.x;
            var e = 15;
            egret.Tween.get(this.hand, {
                loop: !0
            }).to({
                x: e
            },
            1500, egret.Ease.quadIn)
        },
        i.prototype._onTouchItem = function(t) {
            var i = this._cfg.compData;
            t.target.name === i.targetName && (console.log(t.target.name), e.GuideModule.GetInstance().hideGuide())
        },
        i.prototype._onGuideEvent = function(t) {
            e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._removeEvents = function() {
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._onResize, this);
            var t = this._cfg.compData;
            t.targetName && egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this, !1),
            t.event && e.GuideModule.GetInstance().removeEventListener(t.event, this._onGuideEvent, this)
        },
        i.prototype._destroy = function() {
            this.group_other.removeChildren(),
            egret.Tween.removeTweens(this.hand),
            t.prototype._destroy.call(this)
        },
        i
    } (e.BaseGuideComp);
    e.CompMoveDown = t,
    __reflect(t.prototype, "guideModule.CompMoveDown")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompMoveDown, "guideModule.CompMoveDown");
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "CompSelectedGuid",
            i.skinName = e.NewSeerSelectePanelSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.percentWidth = this.percentHeight = 100,
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnNew,
            function() {
                var t = e.GuideModule.GetInstance().GetValue(108103);
                0 === t ? e.GuideModule.GetInstance().c2s_new_seer([1, 1]).then(function() {
                    e.GuideModule.GetInstance().hideGuide(),
                    e.GuideModule.GetInstance().dispatchEventWith(e.GuideEvent.EVENT_SELECTED_NEW)
                }) : Alert.show("确定后将清除页游端帐号数据重新开始新手引导",
                function() {
                    SocketConnection.sendWithPromise(42404, [1, 1]).then(function() {
                        Alarm.show("清除成功，需要重新启动游戏",
                        function() {
                            core.gameUtil.ReloaderGame()
                        },
                        egret.lifecycle.stage)
                    })
                },
                null, egret.lifecycle.stage)
            },
            this),
            ImageButtonUtil.add(this.btnOld,
            function() {
                e.GuideModule.GetInstance().c2s_new_seer([1, 2]).then(function() {
                    e.GuideModule.GetInstance().hideGuide(),
                    e.GuideModule.GetInstance().dispatchEventWith(e.GuideEvent.EVENT_SELECTED_OLD)
                })
            },
            this)
        },
        i.prototype._updateView = function() {},
        i
    } (e.BaseGuideComp);
    e.CompSelectedGuid = t,
    __reflect(t.prototype, "guideModule.CompSelectedGuid")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompSelectedGuid, "guideModule.CompSelectedGuid");
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "CompStory",
            i.skinName = e.StorySkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.percentWidth = this.percentHeight = 100,
            t.prototype.childrenCreated.call(this)
        },
        i.prototype._initEvents = function() {
            this.group_click.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this)
        },
        i.prototype._removeEvents = function() {
            this.group_click.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this)
        },
        i.prototype._onTouchItem = function(t) {
            e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._updateView = function() {},
        i
    } (e.BaseGuideComp);
    e.CompStory = t,
    __reflect(t.prototype, "guideModule.CompStory")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompStory, "guideModule.CompStory");
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "CompTalk",
            i.skinName = e.TalkSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.touchEnabled = !0,
            this.percentWidth = this.percentHeight = 100,
            t.prototype.childrenCreated.call(this),
            this.item.visible = !1;
            var e = this.click_icon.y;
            this.click_icon.y = e - this.click_icon.height / 2,
            egret.Tween.get(this.click_icon, {
                loop: !0
            }).to({
                y: e
            },
            500, egret.Ease.cubicOut)
        },
        i.prototype._initEvents = function() {
            this.group_click.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this),
            this.item.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this)
        },
        i.prototype._updateView = function() {
            if (!this._talkList) {
                var e = this._cfg.compData.talkGroupId;
                this._talkList = config.Tutorial_talk.getItems().filter(function(t) {
                    return t.groupId === e
                }),
                this._talkList.sort(function(e, t) {
                    return e.id - t.id
                })
            }
            this._onShowTalk()
        },
        i.prototype._onShowTalk = function() {
            this._talkList.length > 0 ? this._showTalk(this._talkList.shift()) : e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._showTalk = function(e) {
            var t = this;
            if (this.item.visible = !0, this.bgk.source = "guide_talk_bg_" + e.Panel + "_png", this.click_icon.source = "guide_talk_next_btn_" + e.Panel + "_png", this.txt_name.text = config.Npc.getItem(e.npcId).npcDes, RES.getResByUrl("resource/assets/guide/npc_" + e.npcId + ".png",
            function(e, i) {
                t.npc.source = e
            },
            this, "image"), this.txt_desc.visible = !1, this.img_desc.visible = !1, e.msg) {
                var i = StringUtil.str2Html(e.msg);
                "string" == typeof i ? this.txt_desc.text = i: this.txt_desc.textFlow = i,
                this.txt_desc.visible = !0
            } else e.isPic && (this.img_desc.visible = !0, this.img_desc.source = RES.getRes("guide_talk_pic_" + e.isPic + "_png"))
        },
        i.prototype._onTouchItem = function(e) {
            this._onShowTalk()
        },
        i.prototype._removeEvents = function() {
            this.group_click.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this),
            this.item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchItem, this)
        },
        i.prototype._destroy = function() {
            egret.Tween.removeTweens(this.click_icon),
            t.prototype._destroy.call(this)
        },
        i
    } (e.BaseGuideComp);
    e.CompTalk = t,
    __reflect(t.prototype, "guideModule.CompTalk")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompTalk, "guideModule.CompTalk");
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "CompTouching",
            i.skinName = e.TouchingSKin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.touchEnabled = !1,
            this.percentWidth = this.percentHeight = 100,
            t.prototype.childrenCreated.call(this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._onResize, this)
        },
        i.prototype._onResize = function(e) {
            var t = this;
            egret.setTimeout(function() {
                t.group_bgMask.removeChildren(),
                t._updateView()
            },
            this, 100)
        },
        i.prototype._initEvents = function() {
            var t = this._cfg.compData;
            t.event && e.GuideModule.GetInstance().addEventListener(t.event, this._onGuideEvent, this)
        },
        i.prototype._updateView = function() {
            this._drawMask()
        },
        i.prototype._drawMask = function() {
            var t, i = this._cfg.compData;
            t = i && i.rect ? e.createRectangle(i.point, i.rect.x, i.rect.y, i.rect.w, i.rect.h) : new egret.Rectangle(this._data.x, this._data.y, this._data.w, this._data.h);
            var n = e.DrawRectMask([t]);
            n.name = "maskBg",
            n.touchEnabled = !1,
            this.group_bgMask.addChildAt(n, 0),
            e.ChangeRect(t, 10, 10),
            this.group_item.width = t.width,
            this.group_item.height = t.height,
            this.group_item.x = t.x,
            this.group_item.y = t.y,
            this._showAni()
        },
        i.prototype._showAni = function() {
            var e = .2;
            this.circle.scaleX = this.circle.scaleY = e,
            egret.Tween.removeTweens(this.circle),
            egret.Tween.get(this.circle, {
                loop: !0
            }).to({
                scaleX: .8,
                scaleY: .8
            },
            1e3, egret.Ease.quadOut)
        },
        i.prototype._onGuideEvent = function(t) {
            e.GuideModule.GetInstance().hideGuide()
        },
        i.prototype._removeEvents = function() {
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._onResize, this);
            var t = this._cfg.compData;
            t.event && e.GuideModule.GetInstance().removeEventListener(t.event, this._onGuideEvent, this)
        },
        i.prototype._destroy = function() {
            egret.Tween.removeTweens(this.circle),
            this.group_bgMask.removeChildren(),
            t.prototype._destroy.call(this)
        },
        i
    } (e.BaseGuideComp);
    e.CompTouching = t,
    __reflect(t.prototype, "guideModule.CompTouching")
} (guideModule || (guideModule = {})),
egret.registerClass(guideModule.CompTouchTap, "guideModule.CompTouchTap");
var guideModule; !
function(e) {
    function t(e) {
        var t = new eui.Group,
        i = new egret.Bitmap,
        n = RES.getRes("common_mask_bg_s9_png");
        i.alpha = .3,
        t.addChild(i),
        i.texture = n,
        i.width = egret.lifecycle.stage.stageWidth,
        i.height = egret.lifecycle.stage.stageHeight;
        for (var o = 0; o < e.length; o++) {
            var r = e[o],
            s = new egret.Sprite;
            s.graphics.beginFill(16711680, 1),
            s.graphics.drawRect(0, 0, r.width, r.height),
            s.graphics.endFill(),
            s.x = r.x,
            s.y = r.y,
            t.addChild(s),
            s.blendMode = egret.BlendMode.ERASE
        }
        var u = new egret.RenderTexture;
        u.drawToTexture(t);
        var a = new eui.Image;
        a.pixelHitTest = !0,
        a.texture = u;
        var h = new eui.Group;
        return h.name = "guideMask",
        a.name = "rectBg",
        h.addChild(a),
        h
    }
    function i(e, t, i) {
        var n = new eui.Group,
        o = new egret.Bitmap,
        r = RES.getRes("common_mask_bg_s9_png");
        o.alpha = .7,
        n.addChild(o),
        o.texture = r,
        o.width = egret.lifecycle.stage.stageWidth,
        o.height = egret.lifecycle.stage.stageHeight;
        var s = new egret.Sprite;
        s.graphics.beginFill(16711680, 1),
        s.graphics.drawCircle(0, 0, e),
        s.graphics.endFill(),
        s.x = t,
        s.y = i,
        n.addChild(s),
        s.blendMode = egret.BlendMode.ERASE;
        var u = new egret.RenderTexture;
        u.drawToTexture(n);
        var a = new eui.Image;
        a.texture = u;
        var h = new eui.Group;
        return h.name = "guideMask",
        a.name = "rectBg",
        h.addChild(a),
        a.pixelHitTest = !0,
        h.touchEnabled = !1,
        h
    }
    function n(e) {
        var t = egret.getDefinitionByName("guideModule." + e.BubbleClass),
        i = new t;
        return i.SetSize(e.size),
        e.desc && i.SetDesc(e.desc),
        i
    }
    function o(t, i, n, o, r) {
        switch (t) {
        case e.GuidePointType.RightTop:
            var s = 1136 - i;
            i = egret.lifecycle.stage.stageWidth - s;
            break;
        case e.GuidePointType.LeftTop:
            i = i;
            break;
        case e.GuidePointType.Center:
            var u = i - (1136 - o) / 2;
            i = (egret.lifecycle.stage.stageWidth - o) / 2 + u
        }
        return new egret.Rectangle(i, n, o, r)
    }
    function r(e, t, i) {
        return e.x -= t,
        e.y -= i,
        e.width += 2 * t,
        e.height += 2 * i,
        e
    }
    function s() {
        var t = e.GuideModule.GetInstance().GetValue(108100),
        i = e.GuideModule.GetInstance().GetChildId();
        return t > 3 || 3 === t && i >= 2
    }
    function u() {
        var t = e.GuideModule.GetInstance().GetValue(108100);
        return t >= 13
    }
    function a(t, i, n, o, r) {
        t = "guide_register_event@" + t,
        e.GuideModule.GetInstance().addEventListener(t, i, n, o, r)
    }
    function h(e, t) {
        console.warn("已经废弃请调用registerEventCompleted方法"),
        this.registerEventCompleted(e, t)
    }
    function _(t, i) {
        t = "guide_register_event_complete@" + t,
        e.GuideModule.GetInstance().dispatchEventWith(t, !1, i)
    }
    function c(t, i, n, o) {
        t = "guide_register_event@" + t,
        e.GuideModule.GetInstance().removeEventListener(t, i, n, o)
    }
    function d(e) {
        return e.split("@")[1]
    }
    function l(t, i) {
        e.GuideModule.GetInstance().waitServerMsgCallBack(t, i)
    }
    function p(t, i, n, o) {
        return t = "guide_myCustom_event_" + t,
        e.GuideModule.GetInstance().dispatchEventWith(t, i, n, o)
    }
    function g(t, i) {
        e.GuideModule.GetInstance().dispatchEventWith(t, !1, i)
    }
    function f() {
        var t = ItemManager.getNumByID(300004),
        i = e.GuideModule.GetInstance().GetValue(108102),
        n = e.GuideModule.GetInstance().GetValue(108100);
        13 === n && 0 === t && 0 === BitUtil.getBit(i, 10) && e.GuideModule.GetInstance().dispatchEventWith(e.GuideEvent.EVENT_GUIDE_GOTO_STEP, !1, {
            step: 14,
            id: 2000001
        })
    }
    function v(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        e = "GUIDE========>>>>",
        console.log.apply(this, v.arguments)
    }
    e.DrawRectMask = t,
    e.DrawCircleMask = i,
    e.createBubble = n,
    e.createRectangle = o,
    e.ChangeRect = r,
    e.CheckEvlLockState = s,
    e.CheckBzLockState = u,
    e.registerEvent = a,
    e.DispatchCustomEventComplete = h,
    e.registerEventCompleted = _,
    e.relieveEvent = c,
    e.simplifyEventType = d,
    e.dispatchCustomEventCallBack = l,
    e.dispatchCustomEventWith = p,
    e.dispatchCompItemTouchEvent = g,
    e.CheckUseCanGetItem300004 = f,
    e.log = v
} (guideModule || (guideModule = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
guideModule; !
function(e) {
    var t = function() {
        function e() {}
        return e.EVENT_INIT_GUIDE_COMPLETE = "event_init_guide_complete",
        e.EVENT_GUIDE_START = "event_guide_start",
        e.EVENT_GUIDE_GOTO_STEP = "event_guide_goto_step",
        e.EVENT_GUIDE_COMPLETE = "event_guide_complete",
        e.EVENT_SELECTED_NEW = "event_selected_new",
        e.EVENT_SELECTED_OLD = "event_selected_old",
        e
    } ();
    e.GuideEvent = t,
    __reflect(t.prototype, "guideModule.GuideEvent")
} (guideModule || (guideModule = {}));
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "BubbleBottom",
            i.skinName = e.BubbleBottomSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.SetSize = function(e) {
            this.bg.width = e.w,
            this.bg.height = e.h,
            this.txt.width = this.bg.width - 24 - this.txt.x,
            this.width = this.bg.width,
            this.height = this.bg.height,
            this.anchorOffsetX = 84,
            this.txt.size = 16 | e.textSize
        },
        i.prototype.SetDesc = function(e) {
            var t = StringUtil.str2Html(e);
            "string" == typeof t ? this.txt.text = t: this.txt.textFlow = t
        },
        i.prototype.Destroy = function() {
            this.parent && this.parent.removeChild(this)
        },
        i
    } (e.BaseBubble);
    e.BubbleBottom = t,
    __reflect(t.prototype, "guideModule.BubbleBottom")
} (guideModule || (guideModule = {}));
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "BubbleLeft",
            i.skinName = e.BubbleLeftSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.SetSize = function(e) {
            this.bg.width = e.w,
            this.bg.height = e.h,
            this.txt.width = this.bg.width - 36 - this.txt.x,
            this.width = this.bg.width,
            this.height = this.bg.height,
            this.anchorOffsetX = this.bg.width,
            this.anchorOffsetY = 52.5,
            this.txt.size = 16 | e.textSize
        },
        i.prototype.SetDesc = function(e) {
            var t = StringUtil.str2Html(e);
            "string" == typeof t ? this.txt.text = t: this.txt.textFlow = t
        },
        i.prototype.Destroy = function() {
            this.parent && this.parent.removeChild(this)
        },
        i
    } (e.BaseBubble);
    e.BubbleLeft = t,
    __reflect(t.prototype, "guideModule.BubbleLeft")
} (guideModule || (guideModule = {}));
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "BubbleRight",
            i.skinName = e.BubbleRightSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.SetSize = function(e) {
            this.bg.width = e.w,
            this.bg.height = e.h,
            this.txt.width = this.bg.width - 36 - this.txt.x,
            this.width = this.bg.width,
            this.height = this.bg.height,
            this.anchorOffsetY = 52.5,
            this.txt.size = 16 | e.textSize
        },
        i.prototype.SetDesc = function(e) {
            var t = StringUtil.str2Html(e);
            "string" == typeof t ? this.txt.text = t: this.txt.textFlow = t
        },
        i.prototype.Destroy = function() {
            this.parent && this.parent.removeChild(this)
        },
        i
    } (e.BaseBubble);
    e.BubbleRight = t,
    __reflect(t.prototype, "guideModule.BubbleRight")
} (guideModule || (guideModule = {}));
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.name = "BubbleTop",
            i.skinName = e.BubbleTopSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.SetSize = function(e) {
            this.bg.width = e.w,
            this.bg.height = e.h,
            this.txt.width = this.bg.width - 24 - this.txt.x,
            this.width = this.bg.width,
            this.height = this.bg.height,
            this.anchorOffsetX = 84,
            this.anchorOffsetY = this.height,
            this.txt.size = 16 | e.textSize
        },
        i.prototype.SetDesc = function(e) {
            var t = StringUtil.str2Html(e);
            "string" == typeof t ? this.txt.text = t: this.txt.textFlow = t
        },
        i.prototype.Destroy = function() {
            this.parent && this.parent.removeChild(this)
        },
        i
    } (e.BaseBubble);
    e.BubbleTop = t,
    __reflect(t.prototype, "guideModule.BubbleTop")
} (guideModule || (guideModule = {}));
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
guideModule; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "guideModule.NewSeerOtherViewBztsSkin",
            e
        }
        return __extends(i, t),
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnSure,
            function() {
                e.hide()
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._upDateView = function() {},
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            e.GuideModule.GetInstance().dispatchEventWith("event_close_buzhuotishi_panel")
        },
        i
    } (PopView);
    e.NewSeerOtherBuzhuoTiShi = t,
    __reflect(t.prototype, "guideModule.NewSeerOtherBuzhuoTiShi")
} (guideModule || (guideModule = {})),
window.guideModule = window.guideModule || {};
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
generateEUI.paths["resource/eui_skins/comp/BubbleBottomSkin.exml"] = window.guideModule.BubbleBottomSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt"],
        this.height = 300,
        this.width = 400,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.txt_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "guide_s9_bubble_top_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_i = function() {
        var e = new eui.Label;
        return this.txt = e,
        e.lineSpacing = 10,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "LabelLabelLabelLabel",
        e.width = 110,
        e.x = 30,
        e.y = 43,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/BubbleLeftSkin.exml"] = window.guideModule.BubbleLeftSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt"],
        this.height = 300,
        this.width = 400,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.txt_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "guide_s9_bubble_right_png",
        e
    },
    i.txt_i = function() {
        var e = new eui.Label;
        return this.txt = e,
        e.lineSpacing = 10,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "LabelLabelLabelLabel",
        e.width = 113,
        e.x = 30,
        e.y = 28,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/BubbleRightSkin.exml"] = window.guideModule.BubbleRightSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt"],
        this.height = 300,
        this.width = 400,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.txt_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "guide_s9_bubble_left_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_i = function() {
        var e = new eui.Label;
        return this.txt = e,
        e.lineSpacing = 10,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "LabelLabelLabelLabel",
        e.width = 113,
        e.x = 42,
        e.y = 28,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/BubbleTopSkin.exml"] = window.guideModule.BubbleTopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt"],
        this.height = 300,
        this.width = 400,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.txt_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "guide_s9_bubble_down_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_i = function() {
        var e = new eui.Label;
        return this.txt = e,
        e.lineSpacing = 10,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "LabelLabelLabelLabel",
        e.width = 110,
        e.x = 30,
        e.y = 28,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/DialogNextSkin.exml"] = window.guideModule.DialogNextSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group_bgMask", "k", "group_next", "npc"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.group_bgMask_i(), this.k_i(), this.group_next_i(), this.npc_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.group_bgMask_i = function() {
        var e = new eui.Group;
        return this.group_bgMask = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.touchEnabled = !0,
        e
    },
    i.k_i = function() {
        var e = new eui.Image;
        return this.k = e,
        e.scale9Grid = new egret.Rectangle(17, 17, 3, 2),
        e.source = "guide_s9_box_bg_png",
        e.touchEnabled = !1,
        e.x = 116,
        e.y = 76,
        e
    },
    i.group_next_i = function() {
        var e = new eui.Group;
        return this.group_next = e,
        e.bottom = 39,
        e.right = 54,
        e.touchEnabled = !0,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_guide_img_next_png",
        e.x = 37,
        e.y = 8,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_guide_point_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.npc_i = function() {
        var e = new eui.Image;
        return this.npc = e,
        e.anchorOffsetX = 116.5,
        e.anchorOffsetY = 167,
        e.scaleX = 1,
        e.source = "guide_dialog_npc_png",
        e.touchEnabled = !1,
        e.x = 116.5,
        e.y = 167,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/DragMoveSkin.exml"] = window.guideModule.DragMoveSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group_other", "arrow", "hand", "group_arrow", "wk"],
        this.height = 300,
        this.width = 400,
        this.elementsContent = [this.group_other_i(), this.group_arrow_i(), this.wk_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.group_other_i = function() {
        var e = new eui.Group;
        return this.group_other = e,
        e.left = 0,
        e.top = 0,
        e.touchEnabled = !1,
        e
    },
    i.group_arrow_i = function() {
        var e = new eui.Group;
        return this.group_arrow = e,
        e.height = 105,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.width = 171,
        e.x = 98,
        e.y = 55,
        e.elementsContent = [this.arrow_i(), this.hand_i()],
        e
    },
    i.arrow_i = function() {
        var e = new eui.Image;
        return this.arrow = e,
        e.source = "guide_arrow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hand_i = function() {
        var e = new eui.Image;
        return this.hand = e,
        e.scaleX = -1,
        e.source = "guide_click_hand_png",
        e.x = 171,
        e.y = 22,
        e
    },
    i.wk_i = function() {
        var e = new eui.Image;
        return this.wk = e,
        e.scale9Grid = new egret.Rectangle(17, 17, 3, 2),
        e.source = "guide_s9_box_bg_png",
        e.touchEnabled = !1,
        e.x = 275,
        e.y = 81,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/MoreNextKuangSkin.exml"] = window.guideModule.MoreNextKuangSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group_bgMask", "group_next"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.group_bgMask_i(), this.group_next_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.group_bgMask_i = function() {
        var e = new eui.Group;
        return this.group_bgMask = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.touchEnabled = !0,
        e
    },
    i.group_next_i = function() {
        var e = new eui.Group;
        return this.group_next = e,
        e.bottom = 39,
        e.right = 54,
        e.touchEnabled = !0,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_guide_img_next_png",
        e.x = 37,
        e.y = 8,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "new_seer_guide_point_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/MoveDownSkin.exml"] = window.guideModule.MoveDownSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group_other", "arrow", "hand", "group_arrow", "wk"],
        this.height = 300,
        this.width = 400,
        this.elementsContent = [this.group_other_i(), this.group_arrow_i(), this.wk_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.group_other_i = function() {
        var e = new eui.Group;
        return this.group_other = e,
        e.left = 0,
        e.top = 0,
        e.touchEnabled = !1,
        e
    },
    i.group_arrow_i = function() {
        var e = new eui.Group;
        return this.group_arrow = e,
        e.height = 105,
        e.rotation = 90,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.width = 171,
        e.x = 231,
        e.y = 55,
        e.elementsContent = [this.arrow_i(), this.hand_i()],
        e
    },
    i.arrow_i = function() {
        var e = new eui.Image;
        return this.arrow = e,
        e.source = "guide_arrow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hand_i = function() {
        var e = new eui.Image;
        return this.hand = e,
        e.scaleX = -1,
        e.scaleY = -1,
        e.source = "guide_click_hand_png",
        e.x = 147,
        e.y = 39,
        e
    },
    i.wk_i = function() {
        var e = new eui.Image;
        return this.wk = e,
        e.scale9Grid = new egret.Rectangle(17, 17, 3, 2),
        e.source = "guide_s9_box_bg_png",
        e.touchEnabled = !1,
        e.x = 275,
        e.y = 81,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/NewSeerSelectePanelSkin.exml"] = window.guideModule.NewSeerSelectePanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnNew", "btnOld"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.alpha = .7,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "common_mask_bg_s9_png",
        e.top = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e.elementsContent = [this.btnNew_i(), this.btnOld_i()],
        e
    },
    i.btnNew_i = function() {
        var e = new eui.Image;
        return this.btnNew = e,
        e.height = 241,
        e.source = "new_seer_selecte_panel_btnNew_png",
        e.width = 346,
        e.x = 0,
        e.y = 10,
        e
    },
    i.btnOld_i = function() {
        var e = new eui.Image;
        return this.btnOld = e,
        e.height = 252,
        e.source = "new_seer_selecte_panel_btnOld_png",
        e.width = 456,
        e.x = 388,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/StorySkin.exml"] = window.guideModule.StorySkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group_click"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.group_click_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.group_click_i = function() {
        var e = new eui.Group;
        return this.group_click = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.touchEnabled = !0,
        e.elementsContent = [this._Rect1_i(), this._Label1_i()],
        e
    },
    i._Rect1_i = function() {
        var e = new eui.Rect;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.horizontalCenter = 0,
        e.size = 50,
        e.text = "这里有个故事，点击关闭",
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/TalkSkin.exml"] = window.guideModule.TalkSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group_click", "npc", "bgk", "click_icon", "txt_name", "txt_desc", "img_desc", "item"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.group_click_i(), this.item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.group_click_i = function() {
        var e = new eui.Group;
        return this.group_click = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.touchEnabled = !0,
        e
    },
    i.item_i = function() {
        var e = new eui.Group;
        return this.item = e,
        e.left = 0,
        e.touchEnabled = !0,
        e.verticalCenter = -89,
        e.elementsContent = [this.npc_i(), this.bgk_i(), this.click_icon_i(), this.txt_name_i(), this.txt_desc_i(), this.img_desc_i()],
        e
    },
    i.npc_i = function() {
        var e = new eui.Image;
        return this.npc = e,
        e.scaleY = 1,
        e.source = "guide_npc_test_png",
        e
    },
    i.bgk_i = function() {
        var e = new eui.Image;
        return this.bgk = e,
        e.source = "guide_talk_bg_3_png",
        e.x = 0,
        e.y = 247,
        e
    },
    i.click_icon_i = function() {
        var e = new eui.Image;
        return this.click_icon = e,
        e.height = 38,
        e.source = "guide_talk_next_btn_3_png",
        e.width = 51,
        e.x = 574,
        e.y = 418,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 28,
        e.text = "雷小伊",
        e.textColor = 16777215,
        e.x = 83,
        e.y = 250,
        e
    },
    i.txt_desc_i = function() {
        var e = new eui.Label;
        return this.txt_desc = e,
        e.size = 24,
        e.text = "但是别急，这时候就得使用消除状态的技能了",
        e.textColor = 16777215,
        e.width = 501,
        e.x = 70,
        e.y = 300,
        e
    },
    i.img_desc_i = function() {
        var e = new eui.Image;
        return this.img_desc = e,
        e.x = 70,
        e.y = 300,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/TouchingSKin.exml"] = window.guideModule.TouchingSKin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["group_bgMask", "circle", "group_item"],
        this.height = 300,
        this.width = 400,
        this.elementsContent = [this.group_bgMask_i(), this.group_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.group_bgMask_i = function() {
        var e = new eui.Group;
        return this.group_bgMask = e,
        e.left = 0,
        e.top = 0,
        e.touchEnabled = !1,
        e
    },
    i.group_item_i = function() {
        var e = new eui.Group;
        return this.group_item = e,
        e.height = 108,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.width = 190,
        e.x = 127,
        e.y = 124,
        e.elementsContent = [this._Image1_i(), this._Group1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(17, 17, 3, 2),
        e.source = "guide_s9_box_bg_png",
        e.top = 0,
        e.touchEnabled = !1,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e.elementsContent = [this._Image2_i(), this.circle_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "guide_changan_cire_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.circle_i = function() {
        var e = new eui.Image;
        return this.circle = e,
        e.horizontalCenter = 0,
        e.scaleX = .2,
        e.scaleY = .2,
        e.source = "guide_changan_cire_1_png",
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/TouchTapSKin.exml"] = window.guideModule.TouchTapSKin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["hand", "wk"],
        this.height = 300,
        this.width = 400,
        this.elementsContent = [this.hand_i(), this.wk_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.hand_i = function() {
        var e = new eui.Image;
        return this.hand = e,
        e.scaleX = -1,
        e.source = "guide_click_hand_png",
        e.x = 135,
        e.y = 95,
        e
    },
    i.wk_i = function() {
        var e = new eui.Image;
        return this.wk = e,
        e.scale9Grid = new egret.Rectangle(17, 17, 3, 2),
        e.source = "guide_s9_box_bg_png",
        e.touchEnabled = !1,
        e.x = 275,
        e.y = 81,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/other/NewSeerOtherViewBztsSkin.exml"] = window.guideModule.NewSeerOtherViewBztsSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bz_title", "bg", "btnClose", "btnSure", "p2", "p1"],
        this.height = 462,
        this.width = 778,
        this.elementsContent = [this.bg_i(), this._Label1_i(), this.btnClose_i(), this.btnSure_i(), this.p2_i(), this.p1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Group;
        return this.bg = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.bz_title_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 462,
        e.source = "common_s9_pop_bg1_png",
        e.width = 778,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 411,
        e.source = "common_pop_point_png",
        e.width = 755,
        e.x = 13,
        e.y = 32,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "common_pop_title_medium_png",
        e.x = 16,
        e.y = 13,
        e
    },
    i.bz_title_i = function() {
        var e = new eui.Image;
        return this.bz_title = e,
        e.source = "new_seer_other_view_bzts_bz_title_png",
        e.x = 49,
        e.y = 19,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.size = 20,
        e.text = "捕捉成功率和精灵血量有关",
        e.textColor = 2500699,
        e.x = 269,
        e.y = 94,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_close_1_png",
        e.x = 726,
        e.y = -9,
        e
    },
    i.btnSure_i = function() {
        var e = new eui.Image;
        return this.btnSure = e,
        e.height = 52,
        e.source = "new_seer_other_view_bzts_btnSure_png",
        e.width = 176,
        e.x = 301,
        e.y = 377,
        e
    },
    i.p2_i = function() {
        var e = new eui.Image;
        return this.p2 = e,
        e.height = 107,
        e.source = "new_seer_other_view_bzts_p2_png",
        e.width = 577,
        e.x = 119,
        e.y = 127,
        e
    },
    i.p1_i = function() {
        var e = new eui.Image;
        return this.p1 = e,
        e.height = 107,
        e.source = "new_seer_other_view_bzts_p1_png",
        e.width = 577,
        e.x = 119,
        e.y = 239,
        e
    },
    t
} (eui.Skin);