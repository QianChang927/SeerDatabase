var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
mapModel; !
function(e) {
    var t = function() {
        function e(e) {
            this.mapUi = e
        }
        return e.prototype.init = function() {},
        e.prototype.destroy = function() {
            this.mapUi = null
        },
        e
    } ();
    e.BaseMapProcess = t,
    __reflect(t.prototype, "mapModel.BaseMapProcess")
} (mapModel || (mapModel = {}));
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
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    i.prototype = t.prototype,
    e.prototype = new i
},
mapModel; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i._width = 960,
            i._height = 560,
            i._gridSize = 10,
            i._allowData = [],
            i.skinName = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this);
            var i = this.bgLevel.width,
            o = this.bgLevel.height,
            n = egret.lifecycle.stage.stageWidth,
            r = egret.lifecycle.stage.stageHeight,
            a = n / i,
            s = r / o,
            u = Math.max(a, s);
            this.walkLevel.width = i,
            this.walkLevel.height = o,
            this.scaleX = this.scaleY = u,
            a > s ? this.y = (r - o * u) / 2 : this.x = (n - i * u) / 2,
            this._bottomLevel = new eui.Group,
            this._bottomLevel.percentWidth = 100,
            this._bottomLevel.percentHeight = 100,
            this._bottomLevel.touchEnabled = !1,
            this.walkLevel.touchEnabled = !1,
            this.bgLevel.touchEnabled = !1,
            this.addChild(this._bottomLevel),
            this.setChildIndex(this._bottomLevel, this.getChildIndex(this.bgLevel) + 1),
            this._topLevel = new eui.Group,
            this._topLevel.percentWidth = 100,
            this._topLevel.percentHeight = 100,
            this._topLevel.touchEnabled = !1,
            this.addChild(this._topLevel),
            this.roadLevel.visible = !1,
            this._gridX = Math.floor(this._width / this._gridSize),
            this._gridY = Math.floor(this._height / this._gridSize),
            this._gridTotal = this._gridX * this._gridY,
            this.makeMapArray(),
            this.dispatchEvent(new egret.Event(e.MapEvent.MAP_INITED))
        },
        i.prototype.destroy = function() {
            DisplayUtil.removeAllChild(this.topLevel),
            this._topLevel = null,
            DisplayUtil.removeAllChild(this.bottomLevel),
            this._bottomLevel = null
        },
        i.prototype.makeMapArray = function() {
            this.makeMapWalkFree()
        },
        i.prototype.makeMapNormal = function() {
            var e, t = 0,
            i = 0,
            o = new egret.Point,
            n = this.roadLevel.getChildAt(0),
            r = n.texture;
            for (this._data = new Array(this._gridX), e = Math.floor(Number(this._gridSize / 2)), t = 0; t < this._gridX; t++) for (this._data[t] = new Array(this._gridY), i = 0; i < this._gridY; i++) {
                var a = Math.floor(t * this._gridSize),
                s = Math.floor(i * this._gridSize);
                r.getPixels(a, s, this._gridSize, this._gridSize).reduce(function(e, t) {
                    return e + t
                },
                0) > 0 ? this._data[t][i] = !1 : (this._data[t][i] = !0, this._allowData.push(new egret.Point(t * this._gridSize, i * this._gridSize)))
            }
            o = null
        },
        i.prototype.setRoad = function(e) {
            this._data = e;
            var t, i;
            for (this._allowData = [], t = 0; t < this._data.length; t++) for (i = 0; i < this._data[t].length; i++) 1 == this._data[t][i] && this._allowData.push(new egret.Point(t * this._gridSize, i * this._gridSize))
        },
        i.prototype.makeMapWalkFree = function() {
            var e, t = 0,
            i = 0;
            for (this._data = new Array(this._gridX), e = Number(this._gridSize / 2), t = 0; t < this._gridX; t++) for (this._data[t] = new Array(this._gridY), i = 0; i < this._gridY; i++) this._data[t][i] = !0,
            this._allowData.push(new egret.Point(t * this._gridSize, i * this._gridSize))
        },
        Object.defineProperty(i.prototype, "bgLevel", {
            get: function() {
                return this.bg
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "walkLevel", {
            get: function() {
                return this.walk
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "roadLevel", {
            get: function() {
                return this.road
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "topLevel", {
            get: function() {
                return this._topLevel
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "bottomLevel", {
            get: function() {
                return this._bottomLevel
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "gridSize", {
            get: function() {
                return this._gridSize
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "gridX", {
            get: function() {
                return this._gridX
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "gridY", {
            get: function() {
                return this._gridY
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "gridTotal", {
            get: function() {
                return this._gridTotal
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "data", {
            get: function() {
                return this._data
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "allowData", {
            get: function() {
                return this._allowData
            },
            enumerable: !0,
            configurable: !0
        }),
        i
    } (eui.Component);
    e.MapModel = t,
    __reflect(t.prototype, "mapModel.MapModel", ["IMapModel"])
} (mapModel || (mapModel = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
mapModel; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAP_INITED = "map_inited",
        e
    } ();
    e.MapEvent = t,
    __reflect(t.prototype, "mapModel.MapEvent")
} (mapModel || (mapModel = {}));
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
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    i.prototype = t.prototype,
    e.prototype = new i
},
mapModel; !
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.init = function() {},
        t.prototype.touched = function(e) {
            Alarm.show("测试用")
        },
        t.prototype.destroy = function() {
            this.mapUi = null
        },
        t
    } (e.BaseMapProcess);
    e.MapProcess_10 = t,
    __reflect(t.prototype, "mapModel.MapProcess_10")
} (mapModel || (mapModel = {}));
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
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    i.prototype = t.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, o) {
    return new(i || (i = Promise))(function(n, r) {
        function a(e) {
            try {
                u(o.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                u(o["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function u(e) {
            e.done ? n(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
        }
        u((o = o.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return o([e, t])
        }
    }
    function o(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (n = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = i;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(i);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
        } catch(o) {
            i = [6, o],
            r = 0
        } finally {
            n = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var n, r, a, s, u = {
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
mapModel; !
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.init = function() {},
        t.prototype._createAni = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, o, n, r, a, s;
                return __generator(this,
                function(u) {
                    switch (u.label) {
                    case 0:
                        return [4, DragonbonesUtil.createEgretFactoryAsync("resource/assets/map/2001/effect/chuansongmen/chuansongmen_ske.json", "resource/assets/map/2001/effect/chuansongmen/chuansongmen_tex.json", "resource/assets/map/2001/effect/chuansongmen/chuansongmen_tex.png")];
                    case 1:
                        return e = u.sent(),
                        t = e.buildArmatureDisplay("chuansongmen"),
                        this._eq1unLockEgretArmatureDisplay = t,
                        t.x = this.mapUi.equip_1.x + 70,
                        t.y = this.mapUi.equip_1.y + 153,
                        this.mapUi.equip_1.parent.addChild(t),
                        t.name = "chuansongmenFactory1",
                        t.touchEnabled = !1,
                        t.visible = !1,
                        i = e.buildArmatureDisplay("chuansongmen"),
                        this._eq2unLockEgretArmatureDisplay = i,
                        i.x = this.mapUi.equip_2.x + 70,
                        i.y = this.mapUi.equip_2.y + 153,
                        i.scaleX = -1,
                        this.mapUi.equip_2.parent.addChild(i),
                        i.name = "chuansongmenFactory2",
                        i.touchEnabled = !1,
                        i.visible = !1,
                        [4, DragonbonesUtil.createEgretFactoryAsync("resource/assets/map/2001/effect/chuansongmenuUnLock/jiesuochuansongmen_ske.json", "resource/assets/map/2001/effect/chuansongmenuUnLock/jiesuochuansongmen_tex.json", "resource/assets/map/2001/effect/chuansongmenuUnLock/jiesuochuansongmen_tex.png")];
                    case 2:
                        return o = u.sent(),
                        n = o.buildArmatureDisplay("jiesuochuansongmen"),
                        this._eq1LockEgretArmatureDisplay = n,
                        n.x = this.mapUi.equip_1.x + 70,
                        n.y = this.mapUi.equip_1.y + 153,
                        this.mapUi.equip_1.parent.addChild(n),
                        n.name = "chuansongmenLockFactory1",
                        n.touchEnabled = !1,
                        n.visible = !1,
                        r = o.buildArmatureDisplay("jiesuochuansongmen"),
                        this._eq2LockEgretArmatureDisplay = r,
                        r.x = this.mapUi.equip_2.x + 70,
                        r.y = this.mapUi.equip_2.y + 153,
                        r.scaleX = -1,
                        this.mapUi.equip_2.parent.addChild(r),
                        r.name = "chuansongmenLockFactory1",
                        r.touchEnabled = !1,
                        r.visible = !1,
                        a = guideModule.CheckEvlLockState(),
                        a ? (this._eq1unLockEgretArmatureDisplay.visible = !0, DragonbonesUtil.play(t, "chuansongmen", 0)) : (this._eq1LockEgretArmatureDisplay.visible = !0, n.animation.gotoAndStopByFrame("jiesuochuansongmen", 0)),
                        s = guideModule.CheckBzLockState(),
                        s ? (this._eq2unLockEgretArmatureDisplay.visible = !0, DragonbonesUtil.play(i, "chuansongmen", 0)) : (this._eq2LockEgretArmatureDisplay.visible = !0, r.animation.gotoAndStopByFrame("jiesuochuansongmen", 0)),
                        [2]
                    }
                })
            })
        },
        t.prototype._onNewSeerGuideEvent = function(e) {
            var t = this,
            i = guideModule.simplifyEventType(e.type);
            switch (i) {
            case "seer_move_to_center":
                egret.lifecycle.stage.touchChildren = !1,
                MainManager.actorModel.x = 1010,
                MainManager.actorModel.y = 570,
                MainManager.actorModel.direction = "rightup",
                MapManager.SeerMove(egret.lifecycle.stage.stageWidth / 2, egret.lifecycle.stage.stageHeight / 2,
                function() {
                    egret.lifecycle.stage.touchChildren = !0,
                    guideModule.registerEventCompleted(i)
                },
                this);
                break;
            case "get_luojie_point_data":
                var o = NpcController.GetNpcById(1),
                n = o.touchEnabled,
                r = function() {
                    o.touchEnabled = n,
                    guideModule.dispatchCompItemTouchEvent("event_click_luojiechuanzhang_first")
                };
                o.touchEnabled = !0,
                o.once(egret.TouchEvent.TOUCH_TAP, r, this, !1, 999999999),
                guideModule.registerEventCompleted(i, o);
                break;
            case "event_guide_ready_unlock_jinhuazhilu":
                this._unLockEvl().then(function() {
                    t.mapUi.equip_1.touchEnabled = !0,
                    guideModule.registerEventCompleted(i)
                });
                break;
            case "event_guide_get_jhzl_rect":
                guideModule.registerEventCompleted(i, this.mapUi.equip_1);
                break;
            case "event_guide_get_changeMap_rect":
                guideModule.registerEventCompleted(i, this.mapUi.equip_2);
                break;
            case "event_guide_unlock_equip2":
                this._unLockEqu2().then(function() {
                    t.mapUi.equip_2.touchEnabled = !0,
                    guideModule.registerEventCompleted(i)
                });
                break;
            case "event_open_task_panel":
                guideModule.registerEventCompleted(i),
                ModuleManager.showModuleByID(41)
            }
        },
        t.prototype._unLockEvl = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, DragonbonesUtil.play(this._eq1LockEgretArmatureDisplay, "jiesuochuansongmen", 1)];
                    case 1:
                        return e.sent(),
                        this._eq1LockEgretArmatureDisplay.visible = !1,
                        this._eq1unLockEgretArmatureDisplay.visible = !0,
                        DragonbonesUtil.play(this._eq1unLockEgretArmatureDisplay, "chuansongmen", 0),
                        MapManager.showAllPaople(),
                        NpcController.hideAllNpc(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        t.prototype._unLockEqu2 = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, DragonbonesUtil.play(this._eq2LockEgretArmatureDisplay, "jiesuochuansongmen", 1)];
                    case 1:
                        return e.sent(),
                        this._eq2LockEgretArmatureDisplay.visible = !1,
                        this._eq2unLockEgretArmatureDisplay.visible = !0,
                        DragonbonesUtil.play(this._eq2unLockEgretArmatureDisplay, "chuansongmen", 0),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        t.prototype.touched = function(e) {
            Alarm.show("测试用")
        },
        t.prototype.destroy = function() {
            this.mapUi = null,
            this._eq1LockEgretArmatureDisplay.dispose(),
            this._eq2LockEgretArmatureDisplay.dispose(),
            this._eq1unLockEgretArmatureDisplay.dispose(),
            this._eq2unLockEgretArmatureDisplay.dispose(),
            DragonbonesUtil.removeEgretFactory("chuansongmen"),
            DragonbonesUtil.removeEgretFactory("jiesuochuansongmen")
        },
        t
    } (e.BaseMapProcess);
    e.MapProcess_2001 = t,
    __reflect(t.prototype, "mapModel.MapProcess_2001")
} (mapModel || (mapModel = {}));
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
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    i.prototype = t.prototype,
    e.prototype = new i
},
mapModel; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i._newSeerGuideEventList = ["event_show_MapProcess_2002_task1", "event_show_MapProcess_2002_task2", "event_show_buzhuotishi"],
            i
        }
        return __extends(t, e),
        t.prototype.init = function() {},
        t.prototype._onNewSeerGuideEvent = function(e) {
            var t = e.type;
            switch (t) {
            case "event_show_MapProcess_2002_task1":
            case "event_show_MapProcess_2002_task2":
                break;
            case "event_show_buzhuotishi":
            }
        },
        t.prototype.touched = function(e) {
            Alarm.show("测试用")
        },
        t.prototype.destroy = function() {
            for (var e = 0; e < this._newSeerGuideEventList.length; e++);
            this.mapUi = null
        },
        t
    } (e.BaseMapProcess);
    e.MapProcess_2002 = t,
    __reflect(t.prototype, "mapModel.MapProcess_2002")
} (mapModel || (mapModel = {}));