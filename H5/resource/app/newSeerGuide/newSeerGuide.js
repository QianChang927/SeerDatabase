var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
newSeerGuide; !
function(t) {
    var e = function() {
        function t(t) {
            this.index = 1,
            this.data = t
        }
        return t.prototype.start = function(t, e) {},
        t.prototype.destroy = function() {
            this.callback = null,
            this.thisObj = null,
            this.data = null
        },
        t
    } ();
    t.GuideAction = e,
    __reflect(e.prototype, "newSeerGuide.GuideAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
newSeerGuide; !
function(t) {
    var e = function() {
        function t() {}
        return t.getHandMovie = function() {
            return this.animate || (this.animate = SpineUtil.createAnimate("H5_beibaojiantou")),
            this.animate.touchChildren = !1,
            this.animate.touchEnabled = !1,
            this.animate
        },
        t.getHandMovie2 = function() {
            return this.animate2 || (this.animate2 = DragonbonesUtil.createAnimate("H5_xinshoujiemian_ske_json", "H5_xinshoujiemian_tex_json", "H5_xinshoujiemian_tex_png", "H5_xinshoujiemian")),
            this.animate2.touchChildren = !1,
            this.animate2.touchEnabled = !1,
            this.animate2
        },
        t.getTip = function(t, e) {
            var n = new eui.Component;
            return n.skinName = NewGuideTipSkin,
            n.txtTitle.text = t,
            n.txtContent.text = e,
            n.tip_bg.height = n.txtContent.height + 58,
            n.touchChildren = !1,
            n.touchEnabled = !1,
            n
        },
        t
    } ();
    t.GuideUtil = e,
    __reflect(e.prototype, "newSeerGuide.GuideUtil")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(a, r) {
        function o(t) {
            try {
                c(i.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                c(i["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function c(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(o, s)
        }
        c((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; c;) try {
            if (a = 1, r && (o = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(r, n[1])).done) return o;
            switch (r = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return c.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                c.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = c.ops.pop(),
                c.trys.pop();
                continue;
            default:
                if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    c = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    c.label = n[1];
                    break
                }
                if (6 === n[0] && c.label < o[1]) {
                    c.label = o[1],
                    o = n;
                    break
                }
                if (o && c.label < o[2]) {
                    c.label = o[2],
                    c.ops.push(n);
                    break
                }
                o[2] && c.ops.pop(),
                c.trys.pop();
                continue
            }
            n = e.call(t, c)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, c = {
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
newSeerGuide; !
function(t) {
    var e = function() {
        function e() {}
        return e.prototype.start = function() {
            var t = this;
            if (!GameInfo.isChecking) {
                var e = config.xml.getAnyRes("newer_guide_h5").root.steps;
                PetStorage2015InfoManager.getTotalInfo(function() {
                    t.steps = e,
                    t.startStep(),
                    UserManager.isShow = !1,
                    MapManager.hideAllPeople()
                })
            }
        },
        e.prototype.nextStep = function() {
            var t = this;
            0 == GuideManager.step && (LoadingManager.hideProgressBar(), ModuleManager.destroyAllModule()),
            GuideManager.step++,
            egret.lifecycle.stage.touchChildren = !1,
            KTool.getMultiValue([120200],
            function(e) {
                egret.lifecycle.stage.touchChildren = !0,
                e[0] != GuideManager.step && GuideManager.step < t.steps.length ? Alarm.show("出错啦！请尝试重新登录或联系客服！\n客服QQ —800006461\n在线提问—登录界面客服入口",
                function() {}) : t.startStep()
            })
        },
        e.prototype.startStep = function() {
            var e = this;
            GuideManager.step < this.steps.length ? this.checkBagAndStorage().then(function() {
                var n = new t.GuideStep(e.steps[GuideManager.step], e.nextStep, e);
                e.filterToolbars(),
                e.filterNPC(),
                n.start()
            }) : (ToolBarManager.toolBar.showAllButtons(), ChatManager.getInstance().chat.checkNewSeer(), OnlineManager.getInstance().firstShowMainPanel(), UserManager.isShow = !0, AutoOpenManager.guideComplete = !0)
        },
        e.prototype.filterToolbars = function() {
            ToolBarManager.toolBar.showBtnInMapMode(),
            ToolBarManager.toolBar.lockAllButtons();
            var t = this.steps[GuideManager.step];
            if (t.toolbar && t.toolbar.length > 0) {
                var e = t.toolbar.split(",");
                ToolBarManager.toolBar.showButtonsByNames(e)
            }
            ChatManager.getInstance().showChatWithOutPar(),
            ChatManager.getInstance().chat.touchChildren = !1,
            ChatManager.getInstance().chat.touchEnabled = !1
        },
        e.prototype.filterNPC = function() {
            MapManager.hideAllPeople(),
            NpcController.hideAllNpc();
            var t = this.steps[GuideManager.step];
            if (t.npcs) for (var e = t.npcs.split(","), n = 0; n < e.length; n++) {
                var i = NpcController.GetNpcById( + e[n]);
                i && (i.visible = !0)
            }
        },
        e.prototype.checkBagAndStorage = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, n, i, a, r, o, s, s, c, h, l, u, d, l, _, p, g, f, y;
                return __generator(this,
                function(v) {
                    switch (v.label) {
                    case 0:
                        if (egret.lifecycle.stage.touchChildren = !1, t = this.steps[GuideManager.step].pets, !t) return [3, 16];
                        for (e = !1, n = t.split(",").map(Number), i = PetManager.getBagMap(), a = PetManager.getSecondBagMap(), r = 0; r < n.length; r++) {
                            if (o = !1, 0 == r) {
                                if (i[0] && i[0].id == n[r]) continue
                            } else if (6 > r) {
                                for (s = 1; 6 > s; s++) if (i[s] && i[s].id == n[r]) {
                                    o = !0;
                                    break
                                }
                            } else for (s = 0; 3 > s; s++) if (a[s] && a[s].id == n[r]) {
                                o = !0;
                                break
                            }
                            o || (e = !0)
                        }
                        if (!e) return [3, 16];
                        c = 0,
                        h = i,
                        v.label = 1;
                    case 1:
                        return c < h.length ? (l = h[c], [4, PetManager.bagToStorage(l.catchTime)]) : [3, 4];
                    case 2:
                        v.sent(),
                        v.label = 3;
                    case 3:
                        return c++,
                        [3, 1];
                    case 4:
                        u = 0,
                        d = a,
                        v.label = 5;
                    case 5:
                        return u < d.length ? (l = d[u], [4, PetManager.secondBagToStorage(l.catchTime)]) : [3, 8];
                    case 6:
                        v.sent(),
                        v.label = 7;
                    case 7:
                        return u++,
                        [3, 5];
                    case 8:
                        return [4, PetStorage2015InfoManager.getTotalInfo()];
                    case 9:
                        v.sent(),
                        _ = 0,
                        p = 0,
                        g = n,
                        v.label = 10;
                    case 10:
                        return p < g.length ? (f = g[p], y = PetStorage2015InfoManager.getInfoByID(f)[0].catchTime, 6 > _ ? [4, PetManager.storageToBag(y)] : [3, 12]) : [3, 16];
                    case 11:
                        return v.sent(),
                        [3, 14];
                    case 12:
                        return [4, PetManager.storageToSecondBag(y)];
                    case 13:
                        v.sent(),
                        v.label = 14;
                    case 14:
                        _++,
                        v.label = 15;
                    case 15:
                        return p++,
                        [3, 10];
                    case 16:
                        return egret.lifecycle.stage.touchChildren = !0,
                        [2]
                    }
                })
            })
        },
        e
    } ();
    t.NewSeerGuide = e,
    __reflect(e.prototype, "newSeerGuide.NewSeerGuide")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this, t) || this;
            return n.alpha = .01,
            n.doing = !0,
            n.interval = 0,
            n.container = new eui.Group,
            n.container.touchEnabled = !1,
            n
        }
        return __extends(n, e),
        n.prototype.start = function(e, n) {
            var i = this;
            if (this.callback = e, this.thisObj = n, !t.ActionCondition.checkCondition(this.data.condition)) return void this.completed();
            var a = this.getRect();
            if (this.drawRect(a.x, a.y, a.width, a.height), this.data.startEvent) this.doing = !1,
            egret.lifecycle.stage.touchChildren = !1,
            EventManager.addEventListener(this.data.startEvent, this.onStart, this);
            else {
                var r = 400;
                void 0 != this.data.await && (r = +this.data.await),
                this.interval = egret.setTimeout(function() {
                    a = i.getRect(),
                    i.drawHand(a.x, a.y, a.width, a.height),
                    i.showTips()
                },
                this, r),
                void 0 != this.data.defaultMask && (this.alpha = .6)
            }
            this.data.endEvent && EventManager.addEventListener(this.data.endEvent, this.onEnd, this),
            EventManager.addEventListener(ImageButtonUtil.CLICK_BUTTON, this.onClickBtn, this),
            EventManager.addEventListener(GuideManager.UPDATE_DISPLAY_OBJECT_RECT, this.onResize, this),
            this.eventType = this.data.event,
            this.eventType && this.eventType != ImageButtonUtil.CLICK_BUTTON && EventManager.addEventListener(this.eventType, this.onListener, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this)
        },
        n.prototype.onStart = function() {
            LevelManager.GuideLayer.removeChildren(),
            this.alpha = .01,
            void 0 != this.data.defaultMask && (this.alpha = .6);
            var t = this.getRect();
            this.drawRect(t.x, t.y, t.width, t.height),
            this.drawHand(t.x, t.y, t.width, t.height),
            this.showTips(),
            this.doing = !0,
            egret.lifecycle.stage.touchChildren = !0
        },
        n.prototype.onEnd = function() {
            this.completed()
        },
        n.prototype.onResize = function() {
            LevelManager.GuideLayer.removeChildren();
            var t = this.getRect();
            this.drawRect(t.x, t.y, t.width, t.height),
            this.drawHand(t.x, t.y, t.width, t.height),
            this.showTips()
        },
        n.prototype.showTips = function() {
            if (this.data) {
                if (!this.tips && this.data.tip) {
                    var e = this.data.tipTitle || "新手提示",
                    n = this.data.tip;
                    this.tips = t.GuideUtil.getTip(e, n)
                }
                if (this.tips) {
                    this.tips.visible = !0;
                    var i = egret.lifecycle.stage,
                    a = this.data.align,
                    r = this.data.tipPos.split(","),
                    o = +r[0],
                    s = +r[1];
                    "center" == a ? o = .5 * i.stageWidth - (568 - o) : "right" == a && (o = i.stageWidth - (1136 - o)),
                    this.tips.x = o,
                    this.tips.y = s,
                    LevelManager.GuideLayer.addChild(this.tips)
                }
            }
        },
        n.prototype.drawRect = function(t, e, n, i) {
            if (this.data) {
                var a = 0;
                void 0 != this.data.rotation && (a = +this.data.rotation);
                var r;
                r = 0 == i ? core.gameUtil.DrawCircleMask(n, t, e) : core.gameUtil.DrawRectMask(new egret.Rectangle(t, e, n, i), a),
                this.destroyMask(),
                this.mask = r,
                this.mask.alpha = this.alpha,
                this.mask.touchEnabled = !0,
                this.mask.once(egret.TouchEvent.TOUCH_TAP, this.onClickMask, this),
                LevelManager.GuideLayer.addChild(this.mask)
            }
        },
        n.prototype.getRect = function() {
            var t;
            if (this.data && this.data.getRect && (GuideManager.currRect = null, EventManager.dispatchEventWith(GuideManager.GET_DISPLAY_OBJECT_RECT, !1, this.data.getRect), t = GuideManager.currRect || t), !t && this.data.rect) {
                var e = this.data.rect.split(","),
                n = this.data.align,
                i = +e[0],
                a = +e[1],
                r = +e[2],
                o = 0;
                void 0 != e[3] && (o = +e[3]);
                var s = egret.lifecycle.stage;
                "center" == n ? i = .5 * s.stageWidth - (568 - i) : "right" == n && (i = s.stageWidth - (1136 - i)),
                egret.Capabilities.isMobile && void 0 != this.data.align && ("left" == this.data.align ? i += DeviceInfoManager.adapterOffSetX: "right" == this.data.align && (i -= DeviceInfoManager.adapterOffSetX)),
                t = new egret.Rectangle(i, a, r, o)
            }
            return t
        },
        n.prototype.drawHand = function(e, n, i, a) {
            if (this.data) {
                var r = t.GuideUtil.getHandMovie2();
                if (r.x = e + .5 * i, r.y = n + .5 * a, void 0 != this.data.handOffSet && this.data.handOffSet.length > 0) {
                    var o = this.data.handOffSet.split(",");
                    r.x = e + .5 * i + +o[0],
                    r.y = n + .5 * a + +o[1]
                }
                void 0 != this.data.handRotation && (r.rotation = +this.data.handRotation),
                this.playHandMovie2(r),
                this.hand = r,
                this.hand.visible = !0,
                LevelManager.GuideLayer.addChild(r)
            }
        },
        n.prototype.playHandMovie2 = function(t) {
            return t.scaleX = 1,
            t.scaleY = 1,
            void 0 != this.data.handScaleX && (t.scaleX = this.data.handScaleX),
            void 0 != this.data.handScaleY && (t.scaleY = this.data.handScaleY),
            this.data.handType ? void(2 == this.data.handType ? DragonbonesUtil.play(t, "piaofujiantou", 0) : 3 == this.data.handType ? DragonbonesUtil.play(t, "zuohua_long", 0) : 4 == this.data.handType ? DragonbonesUtil.play(t, "shanghua", 0) : 5 == this.data.handType ? DragonbonesUtil.play(t, "zuohua_short", 0) : 6 == this.data.handType ? DragonbonesUtil.play(t, "changan", 0) : 7 == this.data.handType ? DragonbonesUtil.play(t, "changan_meishou", 0) : 8 == this.data.handType && DragonbonesUtil.play(t, "dianji_meishou", 0)) : void DragonbonesUtil.play(t, "dianji", 0)
        },
        n.prototype.destroyMask = function() {
            this.mask && (DisplayUtil.removeForParent(this.mask), this.mask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickMask, this)),
            this.mask = null
        },
        n.prototype.showMask = function() {
            this.alpha = .6,
            this.mask && (this.mask.alpha = this.alpha)
        },
        n.prototype.onClickMask = function(t) {
            this.doing && this.showMask();
            var e = "";
            e.substring(e.indexOf("("), -1)
        },
        n.prototype.hideGuide = function() {
            this.mask && (this.mask.alpha = .01),
            this.hand && (this.hand.visible = !1),
            this.tips && (this.tips.visible = !1)
        },
        n.prototype.onClickBtn = function(t) {
            if (this.eventType && this.eventType == ImageButtonUtil.CLICK_BUTTON) {
                var e = t.data.name == this.data.eventArgs;
                if (e || (e = t.data.target && t.data.owner && t.data.owner[this.data.eventArgs] == t.data.target), e) return this.data.endEvent ? void(this.data.startEvent && (this.doing = !1, this.hideGuide())) : void this.completed();
                t.preventDefault()
            }
            this.showMask()
        },
        n.prototype.onListener = function(t) {
            return t.data == this.data.eventArgs || !t.data && !this.data.eventArgs ? this.data.endEvent ? (this.doing = !1, void this.hideGuide()) : void this.completed() : (t.preventDefault(), void this.showMask())
        },
        n.prototype.completed = function() {
            EventManager.removeEventListener(ImageButtonUtil.CLICK_BUTTON, this.onClickBtn, this),
            EventManager.removeEventListener(this.eventType, this.onListener, this),
            EventManager.removeEventListener(this.data.startEvent, this.onStart, this),
            EventManager.removeEventListener(this.data.endEvent, this.onEnd, this),
            EventManager.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this),
            egret.clearTimeout(this.interval),
            LevelManager.GuideLayer.removeChildren(),
            this.callback.call(this.thisObj),
            this.destroyMask(),
            this.destroy()
        },
        n
    } (t.GuideAction);
    t.ButtonAction = e,
    __reflect(e.prototype, "newSeerGuide.ButtonAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            var n = this;
            MapManager.changeMap(this.data.mapId,
            function() {
                NpcController.hideAllNpc(),
                t.call(e),
                n.destroy()
            })
        },
        e
    } (t.GuideAction);
    t.ChangeMapAction = e,
    __reflect(e.prototype, "newSeerGuide.ChangeMapAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            PopViewManager.getInstance().hideAll(),
            t.call(e)
        },
        e
    } (t.GuideAction);
    t.CloseModuleAction = e,
    __reflect(e.prototype, "newSeerGuide.CloseModuleAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            for (var n = this,
            i = this.data.param,
            a = i.split(":"), r = ( + a[0], []), o = 1; o < a.length; o++) r.push( + a[o]);
            SocketConnection.sendWithCallback2( + a[0],
            function() {
                t.call(e),
                n.destroy()
            },
            r,
            function() {
                console.error("新手出错了")
            })
        },
        e
    } (t.GuideAction);
    t.CommandAction = e,
    __reflect(e.prototype, "newSeerGuide.CommandAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            var n = this;
            this.callback = t,
            this.thisObj = e;
            for (var i = this.data.param,
            a = i.split(":"), r = ( + a[0], []), o = 1; o < a.length; o++) r.push( + a[o]);
            this.data.outputPanel ? (AwardManager.pause(), egret.lifecycle.stage.touchChildren = !1, SocketConnection.sendWithCallback2( + a[0],
            function() {
                PetManager.updateBagInfo(function() {
                    ModuleManager.showModuleByID( + n.data.outputPanel).then(function() {
                        egret.lifecycle.stage.touchChildren = !0
                    })
                })
            },
            r,
            function() {
                console.error("新手出错了")
            })) : (egret.lifecycle.stage.touchChildren = !1, SocketConnection.sendWithCallback2( + a[0],
            function() {},
            r,
            function() {
                console.error("新手出错了")
            })),
            EventManager.addEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this.onCloseDialog, this)
        },
        e.prototype.onCloseDialog = function() {
            AwardManager.clear(),
            AwardManager.resume(),
            this.callback.call(this.thisObj),
            EventManager.removeEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this.onCloseDialog, this),
            this.destroy()
        },
        e
    } (t.GuideAction);
    t.CommandGetAwardAction = e,
    __reflect(e.prototype, "newSeerGuide.CommandGetAwardAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            ToolBarManager.toolBar.setBottomButtonsVisible(!1),
            ChatManager.getInstance().chat.visible = !1,
            egret.setTimeout(function() {
                ChatManager.getInstance().chat.visible = !1
            },
            this, 600),
            npcDialog.showDialogIds( + this.data.talkGroupId,
            function() {
                ToolBarManager.toolBar.setBottomButtonsVisible(!0),
                ChatManager.getInstance().chat.visible = !0,
                t.call(e)
            },
            this)
        },
        e
    } (t.GuideAction);
    t.DialogAction = e,
    __reflect(e.prototype, "newSeerGuide.DialogAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            var n = this.data.eventType,
            i = this.data.param,
            a = new egret.Event(n, !1, !1, i);
            EventManager.dispatchEvent(a),
            t.call(e)
        },
        e
    } (t.GuideAction);
    t.DispatcherAction = e,
    __reflect(e.prototype, "newSeerGuide.DispatcherAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
newSeerGuide; !
function(t) {
    var e = function() {
        function e(t, e, n) {
            this.subStep = -1,
            this.data = t,
            this.actions = t.substep,
            this.callback = e,
            this.thisObj = n
        }
        return e.prototype.start = function() {
            this.next()
        },
        e.prototype.next = function() {
            if (0 == GuideManager.step && 1 == this.subStep && (LoadingManager.hideProgressBar(), ModuleManager.destroyAllModule()), this.subStep++, this.subStep >= this.actions.length) this.callback.call(this.thisObj);
            else {
                var e = this.actions[this.subStep],
                n = +e.type;
                switch (this.currAction = null, n) {
                case 1:
                    this.currAction = new t.SwfFullscreenMovieAction(e);
                    break;
                case 2:
                    this.currAction = new t.OpenPanelAction(e);
                    break;
                case 3:
                    this.currAction = new t.DialogAction(e);
                    break;
                case 4:
                    this.currAction = new t.CommandGetAwardAction(e);
                    break;
                case 5:
                    this.currAction = new t.ButtonAction(e);
                    break;
                case 6:
                    this.currAction = new t.TryFightAction(e);
                    break;
                case 7:
                    this.currAction = new t.FightBossAction(e);
                    break;
                case 8:
                    this.currAction = new t.NewSceneNPCAction(e);
                    break;
                case 9:
                    this.currAction = new t.EventAction(e);
                    break;
                case 10:
                    this.currAction = new t.DispatcherAction(e);
                    break;
                case 11:
                    this.currAction = new t.HidePopAction(e);
                    break;
                case 12:
                    this.currAction = new t.CloseModuleAction(e);
                    break;
                case 13:
                    this.currAction = new t.VideoAction(e);
                    break;
                case 14:
                    this.currAction = new t.ChangeMapAction(e)
                }
                if (!this.currAction) throw new Error("没有找到对应的新手引导步骤！");
                this.currAction.start(this.next, this),
                this.currAction.data && this.currAction.data.stat && StatLogger.log("2021版新手引导", "第" + (GuideManager.step + 1) + "步", this.currAction.data.stat)
            }
        },
        e
    } ();
    t.GuideStep = e,
    __reflect(e.prototype, "newSeerGuide.GuideStep")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            FightManager.fightNoMapBoss( + this.data.bossId),
            FightManager.closeClock = !0,
            1 == +this.data.mustWin ? (this.callback = t, this.thisObj = e, EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onBattleResult, this)) : t.call(e)
        },
        e.prototype.onBattleResult = function() {
            var t = this;
            FightManager.isWin ? this.completed() : (PetManager._cureAll(!1, !1), this.data.failDialogID ? npcDialog.showDialogIds(this.data.failDialogID,
            function() {
                FightManager.fightNoMapBoss( + t.data.bossId),
                FightManager.closeClock = !0
            },
            this) : (FightManager.fightNoMapBoss( + this.data.bossId), FightManager.closeClock = !0))
        },
        e.prototype.completed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onBattleResult, this),
            this.callback.call(this.thisObj),
            this.destroy()
        },
        e
    } (t.GuideAction);
    t.FightBossAction = e,
    __reflect(e.prototype, "newSeerGuide.FightBossAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            PopViewManager.getInstance().hideAll(),
            t.call(e)
        },
        e
    } (t.GuideAction);
    t.HidePopAction = e,
    __reflect(e.prototype, "newSeerGuide.HidePopAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            var n = this;
            if (this.data.npcs) {
                LevelManager.root.touchChildren = !1;
                for (var i = this.data.npcs.split(","), a = 0; a < i.length; a++) {
                    var r = NpcController.GetNpcById( + i[a]);
                    r && !r.visible && (r.visible = !0, r.alpha = 0, this.showAppearMv(r))
                }
                egret.setTimeout(function() {
                    LevelManager.root.touchChildren = !0,
                    t.call(e),
                    n.destroy()
                },
                this, 500)
            }
        },
        e.prototype.showAppearMv = function(t) {
            var e = t.scaleX,
            n = t.scaleY;
            t.alpha = 0,
            t.scaleX = .6 * t.scaleX,
            t.scaleY = .6 * t.scaleY,
            egret.Tween.get(t).to({
                alpha: 1,
                scaleX: e,
                scaleY: n
            },
            300)
        },
        e
    } (t.GuideAction);
    t.NewSceneNPCAction = e,
    __reflect(e.prototype, "newSeerGuide.NewSceneNPCAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(a, r) {
        function o(t) {
            try {
                c(i.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                c(i["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function c(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(o, s)
        }
        c((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; c;) try {
            if (a = 1, r && (o = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(r, n[1])).done) return o;
            switch (r = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
                break;
            case 4:
                return c.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                c.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = c.ops.pop(),
                c.trys.pop();
                continue;
            default:
                if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    c = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    c.label = n[1];
                    break
                }
                if (6 === n[0] && c.label < o[1]) {
                    c.label = o[1],
                    o = n;
                    break
                }
                if (o && c.label < o[2]) {
                    c.label = o[2],
                    c.ops.push(n);
                    break
                }
                o[2] && c.ops.pop(),
                c.trys.pop();
                continue
            }
            n = e.call(t, c)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, c = {
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
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            this.callback = t,
            this.thisObj = e,
            this.openPanel()
        },
        e.prototype.openPanel = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, ModuleManager.showModuleByID( + this.data.param)];
                    case 1:
                        return t.sent(),
                        this.callback.call(this.thisObj),
                        this.destroy(),
                        [2]
                    }
                })
            })
        },
        e
    } (t.GuideAction);
    t.OpenPanelAction = e,
    __reflect(e.prototype, "newSeerGuide.OpenPanelAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.data = e,
            n
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            var n = this,
            i = this.data.swfName,
            a = "resource/cjs_animate/animate/" + i + "/" + i + ".js",
            r = new eui.Group;
            r.touchChildren = r.touchEnabled = !1,
            LevelManager.topLevel.addChild(r),
            CjsUtil.setContainer(r),
            GuideManager.step > 0 && LoadingManager.instance.showloading("正在加载资源，请稍候！"),
            CjsUtil.closeBackgroundRun(),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
            new Promise(function(t, e) {
                n.data.sound ? SoundManager.loadSound("resource/sound/" + n.data.sound).then(function() {
                    t(null)
                })["catch"](function() {
                    t(null)
                }) : t(null)
            }).then(function() {
                var o = function() {
                    var s = CjsUtil.getUiAnimate(a);
                    if (!s) return void CjsUtil.loadUiAnimate(a, i, o, n);
                    s.x = .5 * egret.lifecycle.stage.stageWidth,
                    s.y = .5 * egret.lifecycle.stage.stageHeight,
                    CjsUtil.setAniFrameRate(30),
                    SoundManager.loadSound("resource/sound/" + n.data.sound).then(function() {
                        SoundManager.playMusic(1)
                    })["catch"](function() {
                        SoundManager.playMusic(1)
                    }),
                    GuideManager.step > 0 && LoadingManager.instance.hideloading(),
                    egret.lifecycle.stage.stageWidth > 1408 && (s.scaleX = s.scaleY = egret.lifecycle.stage.stageWidth / 1408, s.y = .5 * egret.lifecycle.stage.stageHeight - 640 * (s.scaleY - 1) * .5 * .7),
                    egret.setTimeout(function() {
                        LoadingManager.hideProgressBar(),
                        ModuleManager.destroyAllModule()
                    },
                    n, 1e3),
                    n.animate = s,
                    CjsUtil.showAnimate(s),
                    n.startTime = Date.now();
                    var c = egret.setInterval(function() {
                        n.syncSound()
                    },
                    n, 80),
                    h = function() {
                        egret.clearInterval(c),
                        s.removeAllEventListeners("completed"),
                        ImageButtonUtil.removeAll(n),
                        t.call(e),
                        DisplayUtil.removeForParent(r),
                        CjsUtil.stop(),
                        n.destroy(),
                        CjsUtil.setAniFrameRate(30),
                        GuideManager.step > 0 && SoundManager.loadSound().then(function() {
                            SoundManager.playMusic()
                        }),
                        egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, n.onResize, n),
                        n.animate = null,
                        CjsUtil.openBackgroundRun()
                    };
                    IS_RELEASE || ImageButtonUtil.add(egret.lifecycle.stage.getChildAt(0), h, n),
                    s.addEventListener("completed",
                    function(t) {
                        h()
                    })
                };
                CjsUtil.loadUiAnimate(a, i, o, n)
            })
        },
        e.prototype.syncSound = function() {
            if (this.animate) {
                var t = this.animate.currentFrame / 24,
                e = SoundManager.getCurrPosition(),
                n = e - t;
                if (n > .1) {
                    if (CjsUtil.frameRate < 60) CjsUtil.setAniFrameRate(CjsUtil.frameRate + 1);
                    else if (n > 1.5 && !GameInfo.isApp && SoundManager.instance.soundChannel) {
                        var i = SoundManager.instance.soundChannel.audio;
                        i && i.playbackRate > .8 && (i.playbackRate -= .05)
                    }
                } else if ( - .1 > n && (CjsUtil.frameRate > 24 && CjsUtil.setAniFrameRate(CjsUtil.frameRate - 1), !GameInfo.isApp && SoundManager.instance.soundChannel)) {
                    var i = SoundManager.instance.soundChannel.audio;
                    i && (i.playbackRate = 1)
                }
            }
        },
        e.prototype.onResize = function() {
            this.animate && egret.lifecycle.stage.stageWidth > 1408 && (this.animate.x = .5 * egret.lifecycle.stage.stageWidth, this.animate.y = .5 * egret.lifecycle.stage.stageHeight, this.animate.scaleX = this.animate.scaleY = egret.lifecycle.stage.stageWidth / 1408, this.animate.y = .5 * egret.lifecycle.stage.stageHeight - 640 * (this.animate.scaleY - 1) * .5 * .7)
        },
        e
    } (t.GuideAction);
    t.SwfFullscreenMovieAction = e,
    __reflect(e.prototype, "newSeerGuide.SwfFullscreenMovieAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            var n = t.call(this, e) || this,
            i = new egret.RenderTexture;
            i.drawToTexture(LevelManager.topLevel);
            var a = new eui.Image;
            return a.texture = i,
            LevelManager.fightLevel.addChild(a),
            n
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            var n = +this.data.bossId,
            i = [0, 0, 0, 0, 0];
            if (this.data.skills) for (var a = this.data.skills.split(","), r = 0; r < a.length; r++) i[r] = +a[r];
            FightManager.tryFight(n, i),
            FightManager.closeClock = !0,
            t.call(e)
        },
        e
    } (t.GuideAction);
    t.TryFightAction = e,
    __reflect(e.prototype, "newSeerGuide.TryFightAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.data = e,
            n
        }
        return __extends(e, t),
        e.prototype.start = function(t, e) {
            var n = this.data.name,
            i = "resource/video/" + n;
            SoundManager.stopMusic(),
            SoundManager.instance.setMute(!0),
            GuideManager.step > 0 && LoadingManager.instance.showloading("正在加载资源，请稍候！"),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
            var a = new egret.Video;
            a.visible = !1,
            this.video = a,
            a.width = this.data.width,
            a.height = this.data.height,
            a.x = .5 * (egret.lifecycle.stage.stageWidth - a.width),
            a.y = .5 * (egret.lifecycle.stage.stageHeight - a.height),
            LevelManager.topLevel.addChild(a),
            a.load(i),
            a.addEventListener(egret.Event.COMPLETE,
            function() {
                a.position = 2,
                a.bitmapData,
                LoadingManager.instance.hideloading()
            },
            this),
            a.once(egret.Event.ENDED,
            function() {
                a.pause(),
                SoundManager.instance.setMute(!1),
                DisplayUtil.removeForParent(a),
                t.call(e)
            },
            this)
        },
        e.prototype.onResize = function() {},
        e
    } (t.GuideAction);
    t.VideoAction = e,
    __reflect(e.prototype, "newSeerGuide.VideoAction")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
newSeerGuide; !
function(t) {
    var e = function() {
        function t() {}
        return t.checkCondition = function(t) {
            if (t) {
                var e = t.split(",");
                if (1 == +e[0]) {
                    if (0 == +e[2]) return ModuleManager.currModule && ModuleManager.currModule.getModuleConfig() ? ModuleManager.currModule.getModuleConfig().id != +e[1] : !0;
                    if (1 == +e[2]) return ModuleManager.currModule && ModuleManager.currModule.getModuleConfig() ? ModuleManager.currModule.getModuleConfig().id == +e[1] : !1
                } else if (2 == +e[0]) {
                    var n = new egret.Event(e[1], !1, !0);
                    return EventManager.dispatchEvent(n)
                }
            }
            return ! 0
        },
        t
    } ();
    t.ActionCondition = e,
    __reflect(e.prototype, "newSeerGuide.ActionCondition")
} (newSeerGuide || (newSeerGuide = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
newSeerGuide; !
function(t) {
    var e = function(e) {
        function n(t) {
            return e.call(this, t) || this
        }
        return __extends(n, e),
        n.prototype.start = function(e, n) {
            if (!t.ActionCondition.checkCondition(this.data.condition)) return void e.call(n);
            this.callback = e,
            this.thisObj = n;
            var i = this.data.eventType;
            LevelManager.root.touchChildren = !1,
            EventManager.addEventListener(i, this.onListener, this)
        },
        n.prototype.onListener = function(t) {
            var e = this.data.eventType;
            EventManager.removeEventListener(e, this.onListener, this),
            LevelManager.root.touchChildren = !0,
            this.callback.call(this.thisObj),
            this.destroy()
        },
        n
    } (t.GuideAction);
    t.EventAction = e,
    __reflect(e.prototype, "newSeerGuide.EventAction")
} (newSeerGuide || (newSeerGuide = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/NewGuideTipSkin.exml"] = window.NewGuideTipSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["tip_bg", "tip_title_bg", "txtContent", "txtTitle", "guide_tip"],
        this.height = 106,
        this.width = 307,
        this.elementsContent = [this.guide_tip_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.guide_tip_i = function() {
        var t = new eui.Group;
        return this.guide_tip = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.tip_bg_i(), this.tip_title_bg_i(), this.txtContent_i(), this.txtTitle_i()],
        t
    },
    n.tip_bg_i = function() {
        var t = new eui.Image;
        return this.tip_bg = t,
        t.scale9Grid = new egret.Rectangle(102, 35, 103, 36),
        t.source = "new_guide_tip_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.tip_title_bg_i = function() {
        var t = new eui.Image;
        return this.tip_title_bg = t,
        t.source = "new_guide_tip_title_bg_png",
        t.x = 34,
        t.y = 8,
        t
    },
    n.txtContent_i = function() {
        var t = new eui.Label;
        return this.txtContent = t,
        t.fontFamily = "MFShangHei",
        t.multiline = !0,
        t.size = 16,
        t.text = "弹窗文字描述弹窗文字描述弹窗文字描述弹窗文字描述弹窗文字描述弹窗文字描述弹窗文字描述弹窗文字描述描述",
        t.textColor = 15135739,
        t.width = 272,
        t.x = 17,
        t.y = 37,
        t
    },
    n.txtTitle_i = function() {
        var t = new eui.Label;
        return this.txtTitle = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -.5,
        t.size = 18,
        t.text = "标题最多六字",
        t.textAlign = "center",
        t.textColor = 7072255,
        t.width = 200,
        t.y = 10,
        t
    },
    e
} (eui.Skin);