var __reflect = this && this.__reflect ||
function(e, t, o) {
    e.__class__ = t,
    o ? o.push(t) : o = [t],
    e.__types__ = e.__types__ ? o.concat(e.__types__) : o
},
__extends = this && this.__extends ||
function(e, t) {
    function o() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    o.prototype = t.prototype,
    e.prototype = new o
},
__awaiter = this && this.__awaiter ||
function(e, t, o, r) {
    return new(o || (o = Promise))(function(i, n) {
        function a(e) {
            try {
                h(r.next(e))
            } catch(t) {
                n(t)
            }
        }
        function s(e) {
            try {
                h(r["throw"](e))
            } catch(t) {
                n(t)
            }
        }
        function h(e) {
            e.done ? i(e.value) : new o(function(t) {
                t(e.value)
            }).then(a, s)
        }
        h((r = r.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function o(e) {
        return function(t) {
            return r([e, t])
        }
    }
    function r(o) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (i = 1, n && (a = n[2 & o[0] ? "return": o[0] ? "throw": "next"]) && !(a = a.call(n, o[1])).done) return a;
            switch (n = 0, a && (o = [0, a.value]), o[0]) {
            case 0:
            case 1:
                a = o;
                break;
            case 4:
                return h.label++,
                {
                    value: o[1],
                    done: !1
                };
            case 5:
                h.label++,
                n = o[1],
                o = [0];
                continue;
            case 7:
                o = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                    h = 0;
                    continue
                }
                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                    h.label = o[1];
                    break
                }
                if (6 === o[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = o;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(o);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            o = t.call(e, h)
        } catch(r) {
            o = [6, r],
            n = 0
        } finally {
            i = a = 0
        }
        if (5 & o[0]) throw o[1];
        return {
            value: o[0] ? o[1] : void 0,
            done: !0
        }
    }
    var i, n, a, s, h = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: o(0),
        "throw": o(1),
        "return": o(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
roomModel; !
function(e) {
    var t = function(t) {
        function o() {
            var o = t.call(this) || this;
            return o.icon = new eui.Image,
            o.lastPos = new egret.Point,
            o.addEventListener(egret.Event.REMOVED_FROM_STAGE, o.removeFurniture, o),
            o.icon.addEventListener(egret.TouchEvent.TOUCH_TAP, o.onTouchTap, o),
            o.addEventListener(egret.TouchEvent.TOUCH_BEGIN, o.onTouchBegin, o),
            EventManager.addEventListener(e.RoomEvent.REMOVE_ALL_FURNITURE, o.removeFurniture, o),
            EventManager.addEventListener(e.RoomEvent.ADD_NEW_FURNITURE, o.addNewFurniture, o),
            EventManager.addEventListener("TEST_FurnitureItem_ADD_SHAPE", o.test, o),
            EventManager.addEventListener(e.RoomEvent.CLEAR_FURNITURE_TWEEN, o.clearTween, o),
            o
        }
        return __extends(o, t),
        o.prototype.setFurniture = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, o = this;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return this.info = config.Furniture.getItem(e.id),
                        this.info ? (this.id = e.id, this.lastPos.x = e.pos.x, this.lastPos.y = e.pos.y, t = new egret.Point(e.pos.x, e.pos.y), this.name = "FurnitureItem_" + e.id, this.addChild(this.icon), this.redRect = new eui.Image("common_texture_004_png"), this.no = new eui.Image("furniture_no_png"), this.redRect.visible = this.no.visible = !1, this.redRect.scale9Grid = new egret.Rectangle(4, 4, 42, 42), [4, RES.getResByUrl(ClientConfig.getFurnitureItem(e.id),
                        function(r) {
                            if (r) {
                                o.icon.texture = r;
                                var i = RoomManager.curRoomModel.furnitureLevel,
                                n = RoomManager.roomJson["id" + e.id].x,
                                a = RoomManager.roomJson["id" + e.id].y;
                                o.width = o.icon.width / 2,
                                o.height = o.icon.height / 2,
                                o.icon.scaleX = o.icon.scaleY = .5,
                                o.icon.x = o.icon.y = 0,
                                o.anchorOffsetX = n / 2,
                                o.anchorOffsetY = a / 2,
                                o.x = t.x,
                                o.y = t.y,
                                i.addChild(o),
                                o.redRect.width = o.width,
                                o.redRect.height = o.height,
                                o.redRect.touchEnabled = !1,
                                o.no.touchEnabled = !1,
                                o.addChildAt(o.redRect, 100),
                                o.no.verticalCenter = o.no.horizontalCenter = 0,
                                o.addChildAt(o.no, 100),
                                o.cacheAsBitmap = !0;
                                var s = RoomManager.clone(e);
                                return RoomManager.curUsingFurnitureMap.add(o.hashCode, s),
                                Promise.resolve()
                            }
                        },
                        this, RES.ResourceItem.TYPE_IMAGE)]) : [3, 2];
                    case 1:
                        r.sent(),
                        r.label = 2;
                    case 2:
                        return [2]
                    }
                })
            })
        },
        o.prototype.addNewFurniture = function(e) {
            var t = e.data.hash;
            RoomManager.isEdit && t == this.hashCode && (this.checkHash(), this.updateFurRemove())
        },
        o.prototype.removeFurniture = function() {
            if (RoomManager.curUsingFurnitureMap.containsKey(this.hashCode)) {
                if (RoomManager.curRoomFurnitureMap.containsKey(this.info.id)) {
                    var t = RoomManager.curRoomFurnitureMap.getValue(this.info.id);
                    t.usedCount = Math.max(t.usedCount - 1, 0),
                    EventManager.dispatchEventWith(e.RoomEvent.REMOVE_FURNITURE, !1, {
                        id: this.info.id
                    })
                }
                RoomManager.curUsingFurnitureMap.remove(this.hashCode),
                DisplayUtil.removeForParent(this),
                this.destroy()
            }
        },
        o.prototype.checkHash = function() {
            gsap.fromTo(this.icon, {
                alpha: .3
            },
            {
                alpha: 1,
                duration: 1,
                repeat: -1,
                yoyo: !0
            }),
            RoomManager.curRoomModel.curEditFurnitureItem ? this.hashCode != RoomManager.curRoomModel.curEditFurnitureItem.hashCode && RoomManager.curRoomModel.curEditFurnitureItem && (gsap.killTweensOf(RoomManager.curRoomModel.curEditFurnitureItem.icon), RoomManager.curRoomModel.curEditFurnitureItem.icon.alpha = 1, RoomManager.curRoomModel.curEditFurnitureItem = this, RoomManager.curRoomModel.curEditFurnitureItem.parent.setChildIndex(RoomManager.curRoomModel.curEditFurnitureItem, 1e3)) : (RoomManager.curRoomModel.curEditFurnitureItem = this, RoomManager.curRoomModel.curEditFurnitureItem.parent.setChildIndex(RoomManager.curRoomModel.curEditFurnitureItem, 1e3))
        },
        o.prototype.onTouchTap = function() {
            if (RoomManager.isEdit) this.checkHash(),
            this.updateFurRemove();
            else if (1 == this.info.funcIdentity) {
                if (MainManager.actorID != RoomManager.userId) return;
                this.updateFurRemove(),
                this.parent && this.parent.setChildIndex(this, 1e3)
            } else if (2 == this.info.funcIdentity) this.updateFurRemove(),
            this.parent && this.parent.setChildIndex(this, 1e3);
            else if (RoomManager.curRoomModel.furRemove && RoomManager.curRoomModel.furRemove.destroy(), MainManager.actorID != RoomManager.userId) return
        },
        o.prototype.clearTween = function() {
            RoomManager.curRoomModel.curEditFurnitureItem && RoomManager.curRoomModel.curEditFurnitureItem.hashCode == this.hashCode && (gsap.killTweensOf(this.icon), RoomManager.curRoomModel.furRemove && RoomManager.curRoomModel.furRemove.destroy())
        },
        o.prototype.doFunc = function() {
            1 == this.info.func ? core.gameUtil.jumpTo(this.info.funcParam) : 2 == this.info.func ? new Function(this.info.funcParam)() : 3 == this.info.func
        },
        o.prototype.onTouchBegin = function(e) {
            if (RoomManager.isEdit) {
                RoomManager.curRoomModel.scroller.scrollPolicyV = eui.ScrollPolicy.OFF,
                this.checkHash(),
                this.updateFurRemove(),
                e.stopImmediatePropagation();
                var t = e.target.localToGlobal(e.localX, e.localY),
                o = RoomManager.curRoomModel.furnitureLevel.globalToLocal(t.x, t.y);
                this._offsetX = this.x - o.x,
                this._offsetY = this.y - o.y,
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this)
            }
        },
        o.prototype.onTouchMove = function(e) {
            if (RoomManager.isEdit) {
                e.stopImmediatePropagation();
                var t = e.target.localToGlobal(e.localX, e.localY),
                o = RoomManager.curRoomModel.furnitureLevel.globalToLocal(t.x, t.y);
                this.x = Math.round(o.x + this._offsetX),
                this.y = Math.round(o.y + this._offsetY),
                this.checkRedBorder()
            }
        },
        o.prototype.onTouchEnd = function(e) {
            RoomManager.isEdit && (RoomManager.curRoomModel.scroller.scrollPolicyV = eui.ScrollPolicy.AUTO, e.stopImmediatePropagation(), this.checkPosition(), this.updateFurRemove(), this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this))
        },
        o.prototype.checkPosition = function() {
            var e = RoomManager.curRoomModel.furnitureLevel,
            t = RoomManager.curRoomModel.isCheckInType(new egret.Point(this.x, this.y), this.info.type);
            if (this.x + this.width - this.anchorOffsetX > e.width || this.x - this.anchorOffsetX < 0 || this.y - this.anchorOffsetY < 0 || this.y + this.height - this.anchorOffsetY > e.height || !t ? (this.x = this.lastPos.x, this.y = this.lastPos.y) : (this.lastPos.x = this.x, this.lastPos.y = this.y), RoomManager.curUsingFurnitureMap.containsKey(this.hashCode)) {
                var o = RoomManager.curUsingFurnitureMap.getValue(this.hashCode);
                o.pos.x = this.lastPos.x,
                o.pos.y = this.lastPos.y
            }
            this.redRect.visible = this.no.visible = !1
        },
        o.prototype.checkRedBorder = function() {
            var e = RoomManager.curRoomModel.furnitureLevel,
            t = RoomManager.curRoomModel.isCheckInType(new egret.Point(this.x, this.y), this.info.type);
            this.x + this.width - this.anchorOffsetX > e.width || this.x - this.anchorOffsetX < 0 || this.y - this.anchorOffsetY < 0 || this.y + this.height - this.anchorOffsetY > e.height || !t ? this.redRect.visible = this.no.visible = !0 : this.redRect.visible = this.no.visible = !1
        },
        o.prototype.updateFurRemove = function() {
            RoomManager.curRoomModel.furRemove || (RoomManager.curRoomModel.furRemove = new e.FurnitureRemove),
            RoomManager.curRoomModel.furRemove.setData(this)
        },
        o.prototype.test = function() {
            IS_RELEASE || (this.shape || this.shapePoint ? (this.shape.graphics.clear(), this.shapePoint.graphics.clear(), this.shape = null, this.shapePoint = null) : (this.shape = new egret.Shape, this.shape.graphics.lineStyle(2, 39168), this.shape.graphics.beginFill(2236928, .2), this.shape.graphics.drawRect(0, 0, this.width, this.height), this.shape.graphics.endFill(), this.shape.alpha = .5, this.addChildAt(this.shape, 0), this.shapePoint = new egret.Shape, this.shapePoint.graphics.lineStyle(4, 16189705), this.shapePoint.graphics.beginFill(2236928, .2), this.shapePoint.graphics.drawCircle(this.anchorOffsetX, this.anchorOffsetY, 5), this.shapePoint.graphics.endFill(), this.shapePoint.alpha = 1, this.addChildAt(this.shapePoint, 100), this.cacheAsBitmap = !0))
        },
        o.prototype.destroy = function() {
            IS_RELEASE || (this.shape && this.shape.graphics.clear(), this.shapePoint && this.shapePoint.graphics.clear()),
            gsap.killTweensOf(this.icon),
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
            this.icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
            EventManager.removeEventListener(e.RoomEvent.REMOVE_ALL_FURNITURE, this.removeFurniture, this),
            EventManager.removeEventListener(e.RoomEvent.ADD_NEW_FURNITURE, this.addNewFurniture, this),
            EventManager.removeEventListener("TEST_FurnitureItem_ADD_SHAPE", this.test, this),
            EventManager.removeEventListener(e.RoomEvent.CLEAR_FURNITURE_TWEEN, this.clearTween, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFurniture, this)
        },
        o
    } (eui.Component);
    e.FurnitureItem = t,
    __reflect(t.prototype, "roomModel.FurnitureItem");
    var o = function() {
        function e() {
            this.isFixed = !1,
            this.pos = new egret.Point,
            this.usedCount = 0,
            this.isNew = !1
        }
        return Object.defineProperty(e.prototype, "type", {
            get: function() {
                var e = config.Furniture.getItem(this.id);
                return e ? e.type + 1 : 1
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    } ();
    e.FitmentInfo = o,
    __reflect(o.prototype, "roomModel.FitmentInfo");
    var r = function() {
        function e() {}
        return e
    } ();
    e.SolidType = r,
    __reflect(r.prototype, "roomModel.SolidType")
} (roomModel || (roomModel = {}));
var __reflect = this && this.__reflect ||
function(e, t, o) {
    e.__class__ = t,
    o ? o.push(t) : o = [t],
    e.__types__ = e.__types__ ? o.concat(e.__types__) : o
},
__extends = this && this.__extends ||
function(e, t) {
    function o() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    o.prototype = t.prototype,
    e.prototype = new o
},
roomModel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.removeIcon = new eui.Image("furniture_remove_png"),
            t.removeIconBg = new eui.Image("furniture_remove_bg_png"),
            t.addChild(t.removeIconBg),
            t.addChild(t.removeIcon),
            t.width = 57,
            t.height = 53,
            t.removeIconBg.horizontalCenter = 0,
            t.removeIconBg.verticalCenter = 0,
            t.removeIcon.horizontalCenter = 0,
            t.removeIcon.verticalCenter = -8,
            ImageButtonUtil.add(t,
            function() {
                RoomManager.isEdit ? (t.curObj && t.curObj.removeFurniture(), t.curObj = null) : t.curObj.doFunc()
            },
            t),
            t
        }
        return __extends(t, e),
        t.prototype.setData = function(e) {
            this.curObj = e,
            e.addChildAt(this, 100),
            this.horizontalCenter = 0,
            this.anchorOffsetX = this.anchorOffsetY = 0,
            this.y = e.y - e.anchorOffsetY - 53 < 0 ? e.anchorOffsetY - e.y: -53,
            this.removeIcon.source = RoomManager.isEdit ? "furniture_remove_png": "furniture_func_png",
            this.visible = !0,
            this.cacheAsBitmap = !0
        },
        t.prototype.destroy = function() {
            RoomManager.curRoomModel.furRemove = null,
            DisplayUtil.removeForParent(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.Component);
    e.FurnitureRemove = t,
    __reflect(t.prototype, "roomModel.FurnitureRemove");
    var o = function() {
        function e() {}
        return e
    } ();
    e.RoomVisitor = o,
    __reflect(o.prototype, "roomModel.RoomVisitor");
    var r = function() {
        function e() {}
        return e
    } ();
    e.RoomPetInfo = r,
    __reflect(r.prototype, "roomModel.RoomPetInfo")
} (roomModel || (roomModel = {}));
var __reflect = this && this.__reflect ||
function(e, t, o) {
    e.__class__ = t,
    o ? o.push(t) : o = [t],
    e.__types__ = e.__types__ ? o.concat(e.__types__) : o
},
roomModel; !
function(e) {
    var t = function() {
        function e() {}
        return e.REMOVE_ALL_FURNITURE = "REMOVE_ALL_FURNITURE",
        e.GET_ALL_FURNITURE = "GET_ALL_FURNITURE",
        e.SAVE_FURNITURE_INFO = "SAVE_FURNITURE_INFO",
        e.ADD_NEW_FURNITURE = "ADD_NEW_FURNITURE",
        e.BUY_FURNITURE = "BUY_FURNITURE",
        e.REMOVE_FURNITURE = "REMOVE_FURNITURE",
        e.CHANGE_ROOM_TYPE = "CHANGE_ROOM_TYPE",
        e.LIKE_THIS_ROOM = "LIKE_THIS_ROOM",
        e.SHOW_HIDE_TOOLBAR = "SHOW_HIDE_TOOLBAR",
        e.CLEAR_FURNITURE_TWEEN = "CLEAR_FURNITURE_TWEEN",
        e.ROOM_MODEL_SCROLLER_CHANGE = "ROOM_MODEL_SCROLLER_CHANGE",
        e.ROOM_TOOLBAR_SLIDER_CHANGE = "ROOM_TOOLBAR_SLIDER_CHANGE",
        e
    } ();
    e.RoomEvent = t,
    __reflect(t.prototype, "roomModel.RoomEvent")
} (roomModel || (roomModel = {}));
var __reflect = this && this.__reflect ||
function(e, t, o) {
    e.__class__ = t,
    o ? o.push(t) : o = [t],
    e.__types__ = e.__types__ ? o.concat(e.__types__) : o
},
__extends = this && this.__extends ||
function(e, t) {
    function o() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    o.prototype = t.prototype,
    e.prototype = new o
},
__awaiter = this && this.__awaiter ||
function(e, t, o, r) {
    return new(o || (o = Promise))(function(i, n) {
        function a(e) {
            try {
                h(r.next(e))
            } catch(t) {
                n(t)
            }
        }
        function s(e) {
            try {
                h(r["throw"](e))
            } catch(t) {
                n(t)
            }
        }
        function h(e) {
            e.done ? i(e.value) : new o(function(t) {
                t(e.value)
            }).then(a, s)
        }
        h((r = r.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function o(e) {
        return function(t) {
            return r([e, t])
        }
    }
    function r(o) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (i = 1, n && (a = n[2 & o[0] ? "return": o[0] ? "throw": "next"]) && !(a = a.call(n, o[1])).done) return a;
            switch (n = 0, a && (o = [0, a.value]), o[0]) {
            case 0:
            case 1:
                a = o;
                break;
            case 4:
                return h.label++,
                {
                    value: o[1],
                    done: !1
                };
            case 5:
                h.label++,
                n = o[1],
                o = [0];
                continue;
            case 7:
                o = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                    h = 0;
                    continue
                }
                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                    h.label = o[1];
                    break
                }
                if (6 === o[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = o;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(o);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            o = t.call(e, h)
        } catch(r) {
            o = [6, r],
            n = 0
        } finally {
            i = a = 0
        }
        if (5 & o[0]) throw o[1];
        return {
            value: o[0] ? o[1] : void 0,
            done: !0
        }
    }
    var i, n, a, s, h = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: o(0),
        "throw": o(1),
        "return": o(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
roomModel; !
function(e) {
    var t = function(t) {
        function o(e) {
            var o = t.call(this) || this;
            return o._width = 960,
            o._height = 560,
            o._gridSize = 10,
            o._putData = [],
            o.curEditFurnitureItem = null,
            o.furRemove = null,
            o.skinName = e,
            o
        }
        return __extends(o, t),
        o.prototype.childrenCreated = function() {
            var o = this;
            t.prototype.childrenCreated.call(this),
            this.name = "room_" + this.roomId;
            var r = egret.lifecycle.stage.stageWidth,
            i = egret.lifecycle.stage.stageHeight;
            this._scroller = new eui.Scroller;
            var n = new eui.Group;
            this._mainLevel = new eui.Group,
            this.addChildAt(this._scroller, 0),
            this._scroller.bounces = !1,
            this._scroller.width = r,
            this._scroller.height = i,
            this._scroller.viewport = n;
            var a = r / this._width;
            n.addChild(this._mainLevel),
            this._mainLevel.scaleX = a,
            this._mainLevel.scaleY = a,
            this._mainLevel.addChild(this.bgLevel),
            this.walkLevel.percentWidth = 100,
            this.walkLevel.percentHeight = 100,
            this.bgLevel.addChild(this.walkLevel),
            this.walkLevel.touchEnabled = !0,
            this.walkLevel.touchThrough = !1,
            this._furnitureLevel = new eui.Group,
            this._furnitureLevel.percentWidth = 100,
            this._furnitureLevel.percentHeight = 100,
            this._furnitureLevel.touchEnabled = !0,
            this._furnitureLevel.touchChildren = !0,
            this._furnitureLevel.touchThrough = !0,
            this.bgLevel.addChild(this._furnitureLevel);
            var s = egret.getDefinitionByName("roomToolBar.RoomToolBar"),
            h = {
                name: "room_tool_bar",
                param: "resource/assets/ui/",
                sheet: "room_tool_bar_sheet",
                url: "resource/assets/ui/room_tool_bar.json"
            };
            RES.hasRes(h.sheet) ? (this.toolbar = new s, LevelManager.toolsLevel.addChild(this.toolbar)) : RES.loadConfig(h.url, h.param).then(function() {
                RES.loadGroup(h.name).then(function() {
                    o.toolbar = new s,
                    LevelManager.toolsLevel.addChild(o.toolbar)
                },
                function() {
                    console.error("加载失败")
                })
            }),
            IS_RELEASE || (this.dataLevel = new eui.Group, this.dataLevel.percentWidth = 100, this.dataLevel.percentHeight = 100, this.dataLevel.name = "dataLevel", this.dataLevel.touchEnabled = !1, this.dataLevel.touchChildren = !1, this.dataLevel.touchThrough = !0, this.bgLevel.addChild(this.dataLevel)),
            this.road.visible = !1,
            this.setGroupName(),
            this._gridX = Math.floor(this._width / this._gridSize),
            this._gridY = Math.floor(this._height / this._gridSize),
            this._gridTotal = this._gridX * this._gridY,
            this.stage.addEventListener(egret.Event.RESIZE, this.resize, this),
            this._scroller.addEventListener(egret.Event.CHANGE, this.scrollerChange, this),
            EventManager.addEventListener(e.RoomEvent.SAVE_FURNITURE_INFO, this.saveFurniture, this),
            EventManager.addEventListener(e.RoomEvent.ROOM_TOOLBAR_SLIDER_CHANGE, this.sliderChange, this)
        },
        o.prototype.scrollerChange = function(t) {
            var o = this._scroller.viewport.scrollV,
            r = +(this._mainLevel.height * this._mainLevel.scaleY - this._scroller.viewport.height).toFixed(2),
            i = GsapUtils.mapRange(0, r, 0, 10, o);
            EventManager.dispatchEventWith(e.RoomEvent.ROOM_MODEL_SCROLLER_CHANGE, !1, {
                v: i
            })
        },
        o.prototype.sliderChange = function(e) {
            var t = e.data.v,
            o = +(this._mainLevel.height * this._mainLevel.scaleY - this._scroller.viewport.height).toFixed(2),
            r = GsapUtils.mapRange(0, 10, 0, o, t);
            this._scroller.viewport.scrollV = r
        },
        o.prototype.resize = function() {
            var e = egret.lifecycle.stage.stageWidth,
            t = egret.lifecycle.stage.stageHeight;
            this.width = e,
            this.height = t,
            this._scroller.width = e,
            this._scroller.height = t;
            var o = e / this._width;
            this._mainLevel.scaleX = o,
            this._mainLevel.scaleY = o
        },
        o.prototype.saveFurniture = function() {
            RoomManager.curRoomModel.curEditFurnitureItem && (gsap.killTweensOf(RoomManager.curRoomModel.curEditFurnitureItem.icon), RoomManager.curRoomModel.curEditFurnitureItem.icon.alpha = 1),
            RoomManager.curRoomModel.curEditFurnitureItem = null,
            this.furRemove && this.furRemove.destroy(),
            this.furRemove = null
        },
        o.prototype.destroy = function() {
            this.curEditFurnitureItem && this.curEditFurnitureItem.destroy(),
            this.curEditFurnitureItem = null,
            this.stage.removeEventListener(egret.Event.RESIZE, this.resize, this),
            this._scroller.addEventListener(egret.Event.CHANGE, this.scrollerChange, this),
            egret.Tween.removeTweens(this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            this.furnitureLevel.removeChildren(),
            DisplayUtil.removeForParent(this.toolbar),
            this.toolbar && this.toolbar.destroy(),
            this.toolbar = null,
            this.furRemove && this.furRemove.destroy(),
            this._data.length = 0,
            this._putData.length = 0
        },
        o.prototype.setRoad = function(e) {
            this._data = JSON.parse(JSON.stringify(e))
        },
        o.prototype.setPutObject = function(e) {
            e ? this._putData = JSON.parse(JSON.stringify(e)) : console.error("策划是不是导出工具用错了!!")
        },
        o.prototype.isCheckInType = function(e, t) {
            return void 0 === t && (t = 1),
            this.transPoint(e),
            this.isCheckIn(e, t)
        },
        o.prototype.transPoint = function(e) {
            return e.x = Math.floor(e.x / this.gridSize),
            e.y = Math.floor(e.y / this.gridSize),
            e
        },
        o.prototype.isCheckIn = function(e, t) {
            if (void 0 === t && (t = 1), e.x < 0 || e.x >= this.gridX || e.y < 0 || e.y >= this.gridY) return ! 1;
            var o = this._putData;
            return e.x > o.length - 1 || o[e.x].length - 1 < e.y ? (console.error("目标点超过范围"), !1) : o[e.x][e.y] && o[e.x][e.y] == t
        },
        o.prototype.setGroupName = function() {
            this.bg.name = "bgLevel",
            this.walk.name = "walkLevel",
            this._furnitureLevel.name = "furnitureLevel"
        },
        o.prototype.testData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        if (this.dataLevel.numChildren > 0) return this.dataLevel.removeChildren(),
                        [2];
                        LoadingManager.instance.showloading("正在加载数据，请稍后！"),
                        e = 0,
                        o.label = 1;
                    case 1:
                        if (! (e < this._putData.length)) return [3, 6];
                        t = 0,
                        o.label = 2;
                    case 2:
                        return t < this._putData[e].length ? [4, this.testAddLabel(e, t, this._putData[e][t])] : [3, 5];
                    case 3:
                        o.sent(),
                        o.label = 4;
                    case 4:
                        return t++,
                        [3, 2];
                    case 5:
                        return e++,
                        [3, 1];
                    case 6:
                        return this.dataLevel.cacheAsBitmap = !0,
                        LoadingManager.instance.hideloading(null),
                        [2]
                    }
                })
            })
        },
        o.prototype.testRoad = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        if (this.dataLevel.numChildren > 0) return this.dataLevel.removeChildren(),
                        [2];
                        LoadingManager.instance.showloading("正在加载数据，请稍后！"),
                        e = 0,
                        o.label = 1;
                    case 1:
                        if (! (e < this._data.length)) return [3, 6];
                        t = 0,
                        o.label = 2;
                    case 2:
                        return t < this._data[e].length ? [4, this.testAddLabel(e, t, this._data[e][t])] : [3, 5];
                    case 3:
                        o.sent(),
                        o.label = 4;
                    case 4:
                        return t++,
                        [3, 2];
                    case 5:
                        return e++,
                        [3, 1];
                    case 6:
                        return this.dataLevel.cacheAsBitmap = !0,
                        LoadingManager.instance.hideloading(null),
                        [2]
                    }
                })
            })
        },
        o.prototype.testAddLabel = function(e, t, o) {
            var r = new eui.Label;
            return r.text = o + "",
            r.x = e * this._gridSize,
            r.y = t * this._gridSize,
            r.size = 10,
            r.alpha = .5,
            r.textColor = 0,
            this.dataLevel.addChild(r),
            Promise.resolve()
        },
        Object.defineProperty(o.prototype, "bgLevel", {
            get: function() {
                return this.bg
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "walkLevel", {
            get: function() {
                return this.walk
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "mainLevel", {
            get: function() {
                return this._mainLevel
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "furnitureLevel", {
            get: function() {
                return this._furnitureLevel
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "gridSize", {
            get: function() {
                return this._gridSize
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "gridX", {
            get: function() {
                return this._gridX
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "gridY", {
            get: function() {
                return this._gridY
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "gridTotal", {
            get: function() {
                return this._gridTotal
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "data", {
            get: function() {
                return this._data
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "roomId", {
            get: function() {
                return this._roomId
            },
            set: function(e) {
                this._roomId = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "scroller", {
            get: function() {
                return this._scroller
            },
            enumerable: !0,
            configurable: !0
        }),
        o
    } (eui.Component);
    e.RoomModel = t,
    __reflect(t.prototype, "roomModel.RoomModel", ["IMapModel"])
} (roomModel || (roomModel = {}));