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
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    i.prototype = e.prototype,
    t.prototype = new i
},
roomEditPop; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.justVip = !1,
            t.curArr = [],
            t.skinName = RoomEditPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.createChildren = function() {
            var i = this;
            e.prototype.createChildren.call(this),
            GameInfo.isChecking && (this.vip_bg.visible = !1),
            this.tabGroup = this.tab_1.group,
            this.tabGroup.selectedValue = 1,
            this.tab_1.selected = !0,
            this.to_big.visible = !1,
            this.gou.visible = !1,
            this._list.itemRenderer = t.roomEditPopItem,
            this.tabGroup.addEventListener(egret.Event.CHANGE, this.tabChange, this),
            ImageButtonUtil.add(this.to_small,
            function() {
                i.showTween()
            },
            this),
            ImageButtonUtil.add(this.to_big,
            function() {
                i.showTween(!0)
            },
            this),
            ImageButtonUtil.add(this.clear_all,
            function() {
                Alert.show("是否将所有家具放回仓库？",
                function() {
                    RoomManager.clearFurnitureGroup(),
                    i.updateView()
                })
            },
            this),
            ImageButtonUtil.add(this.save,
            function() {
                RoomManager.saveInfo(),
                i.onClose(),
                EventManager.dispatchEventWith(roomModel.RoomEvent.SHOW_HIDE_TOOLBAR)
            },
            this),
            ImageButtonUtil.add(this.close,
            function() {
                RoomManager.checkNeedSave() ? Alert.show("基地装扮有变化，确定不保存直接退出吗？",
                function() {
                    RoomManager.cancelEditFurniture(),
                    i.onClose(),
                    EventManager.dispatchEventWith(roomModel.RoomEvent.SHOW_HIDE_TOOLBAR)
                }) : (RoomManager.cancelEditFurniture(!1), i.onClose(), EventManager.dispatchEventWith(roomModel.RoomEvent.SHOW_HIDE_TOOLBAR))
            },
            this),
            ImageButtonUtil.add(this.vip_bg,
            function() {
                i.justVip = !i.justVip,
                i.gou.visible = i.justVip,
                i.updateView()
            },
            this),
            EventManager.addEventListener(roomModel.RoomEvent.ADD_NEW_FURNITURE, this.addFurniture, this),
            EventManager.addEventListener(roomModel.RoomEvent.BUY_FURNITURE, this.updateView, this),
            EventManager.addEventListener(roomModel.RoomEvent.REMOVE_FURNITURE, this.removeFurniture, this),
            EventManager.addEventListener(roomModel.RoomEvent.CHANGE_ROOM_TYPE, this.onClose, this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT,
            function() {
                RoomManager.cancelEditFurniture(RoomManager.checkNeedSave()),
                i.onClose(),
                EventManager.dispatchEventWith(roomModel.RoomEvent.SHOW_HIDE_TOOLBAR)
            },
            this),
            this.updateView()
        },
        i.prototype.tabChange = function() {
            this.updateView()
        },
        i.prototype.updateView = function() {
            this._scro.stopAnimation(),
            this._scro.viewport.scrollH = 0;
            var t = ~~this.tabGroup.selectedValue || 1,
            e = this.justVip;
            this.curArr = RoomManager.getUnUsedItem().filter(function(i) {
                var o = !1;
                if (i.type == t) {
                    var n = config.Furniture.getItem(i.id) || config.Room.getItem(i.id);
                    o = !!n,
                    ~~e && (o = n && ~~e == ~~n.vipOnly)
                }
                return o
            }),
            this.curArr.sort(function(t, e) {
                return~~e.isNew - ~~t.isNew
            }),
            this.curArr.length < 1 && this.curArr.push(null),
            this._list.dataProvider = new eui.ArrayCollection(this.curArr),
            this.updateDot()
        },
        i.prototype.addFurniture = function(t) {
            var e = this,
            i = t.data.id,
            o = -1;
            this.curArr.filter(function(t, e) {
                return t.id == i ? (o = e, !0) : void 0
            }),
            o > -1 && (this.curArr[o].isNew = !1, this.curArr[o].usedCount += 1, this.curArr[o].allCount <= this.curArr[o].usedCount && (this.curArr.splice(o, 1), o = -1)),
            this._list.dataProvider = new eui.ArrayCollection(this.curArr),
            this.once(egret.Event.RENDER,
            function() {
                e.updateViewPortH(o)
            },
            this),
            this.updateDot()
        },
        i.prototype.removeFurniture = function(t) {
            var e = this,
            i = ~~this.tabGroup.selectedValue || 1;
            if (!this.curArr[0] || i == this.curArr[0].type) {
                var o = t.data.id,
                n = -1;
                this.curArr.filter(function(t, e) {
                    return null != t && t.id == o ? (n = e, !0) : void 0
                }),
                n > -1 ? (this.curArr[n].usedCount -= 1, this._list.dataProvider = new eui.ArrayCollection(this.curArr), this.updateDot()) : (this.updateView(), this.curArr.filter(function(t, e) {
                    return null != t && t.id == o ? (n = e, !0) : void 0
                })),
                this.once(egret.Event.RENDER,
                function() {
                    1 != i && e.updateViewPortH(n)
                },
                this)
            }
        },
        i.prototype.showTween = function(t) {
            var e = this;
            void 0 === t && (t = !1),
            this.tw && this.tw.isActive() || (t ? (this.twGroup.touchEnabled = !this.tw, this.to_big.visible = !this.tw, this.tw && this.tw.reversed(!this.tw.reversed()).then(function() {
                e.twGroup.touchEnabled = !0
            })) : this.tw ? (this.tw.play(), this.tw.then(function() {
                e.twGroup.touchEnabled = !0,
                e.to_big.visible = !0
            })) : (this.twGroup.touchEnabled = !1, this.tw = gsap.to(this.twGroup, {
                bottom: -1 * this.twGroup.height,
                alpha: 0,
                duration: .5,
                ease: Quad.easeOut
            }), this.tw.then(function() {
                e.twGroup.touchEnabled = !0,
                e.to_big.visible = !0
            })))
        },
        i.prototype.updateDot = function() {
            this.dot1.visible = this.dot3.visible = this.dot2.visible = !1;
            for (var t = function(t) {
                var i = RoomManager.getUnUsedItem().filter(function(e) {
                    return e.type == t && e.isNew
                });
                e["dot" + t].visible = i.length > 0
            },
            e = this, i = 1; 4 > i; i++) t(i)
        },
        i.prototype.updateViewPortH = function(t) {
            void 0 === t && (t = 0);
            var e = Math.max(0, this._scro.viewport.contentWidth - this._scro.viewport.width),
            i = this._scro.viewport.layout.gap,
            o = 105,
            n = t > -1 ? (o + i) * t: 0;
            this._scro.viewport.scrollH = Math.min(n, e)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.tw = null,
            gsap.killTweensOf(this.twGroup),
            this.curArr.length = 0,
            this.tabGroup.removeEventListener(egret.Event.CHANGE, this.tabChange, this)
        },
        i
    } (BaseModule);
    t.RoomEditPop = e,
    __reflect(e.prototype, "roomEditPop.RoomEditPop")
} (roomEditPop || (roomEditPop = {}));
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
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    i.prototype = e.prototype,
    t.prototype = new i
},
roomEditPop; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.info = null,
            e.skinName = RoomEditPopItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.icon,
            function() {
                if (e.redDot.visible = !1, 1 == e.info.type) RoomManager.saveRoomType(e.info.id);
                else {
                    var t = config.Furniture.getItem(e.info.id);
                    t ? RoomManager.addFurniture(e.info.id) : BubblerManager.getInstance().showText("暂无配置"),
                    RoomManager.curRoomFurnitureMap.getValue(e.info.id).isNew = !1
                }
            },
            this),
            ImageButtonUtil.add(this.no,
            function() {
                RoomManager.checkNeedSave() ? Alert.show("基地装扮有变化，确定不保存直接退出吗？",
                function() {
                    RoomManager.cancelEditFurniture(),
                    ModuleManager.CloseAll(),
                    ModuleManager.showModuleByID(158)
                }) : (RoomManager.cancelEditFurniture(!1), ModuleManager.CloseAll(), ModuleManager.showModuleByID(158))
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.info = this.data,
            this.updateView()
        },
        e.prototype.updateView = function() {
            if (this.la_id.visible = !IS_RELEASE, this.info) {
                this.currentState = "have",
                this.icon.source = ClientConfig.getFurnitureIcon(this.info.id),
                this.la_id.text = this.info.id + "",
                this.redDot.visible = this.info.isNew;
                var t = config.Furniture.getItem(this.info.id) || config.Room.getItem(this.info.id);
                this.la_name.text = t ? t.name.length > 6 ? t.name.substring(0, 5) + "...": t.name: "没配表";
                var e = RoomManager.curRoomFurnitureMap.getValue(this.info.id);
                this.num.text = "" + (e.allCount - e.usedCount)
            } else this.currentState = "none";
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {
            this.info = null,
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.roomEditPopItem = e,
    __reflect(e.prototype, "roomEditPop.roomEditPopItem")
} (roomEditPop || (roomEditPop = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    i.prototype = e.prototype,
    t.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/RoomEditPopItemSkin.exml"] = window.RoomEditPopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["la_name", "icon", "redDot", "no", "num", "la_id"],
        this.height = 131,
        this.width = 105,
        this.elementsContent = [this._Image1_i(), this.la_name_i(), this.icon_i(), this.redDot_i(), this.no_i()],
        this.num_i(),
        this.la_id_i(),
        this.states = [new eui.State("have", [new eui.AddItems("num", "", 1, ""), new eui.AddItems("la_id", "", 1, ""), new eui.SetProperty("la_name", "textColor", 9025023), new eui.SetProperty("no", "visible", !1)]), new eui.State("none", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("la_name", "visible", !1), new eui.SetProperty("icon", "visible", !1), new eui.SetProperty("redDot", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.horizontalCenter = 0,
        t.source = "room_edit_pop_item_bg_png",
        t.verticalCenter = 0,
        t
    },
    i.la_name_i = function() {
        var t = new eui.Label;
        return this.la_name = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -.5,
        t.size = 16,
        t.text = "家居家具名字",
        t.textColor = 9025023,
        t.y = 108.324,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 80,
        t.horizontalCenter = -2,
        t.source = "room_edit_pop_jia_png",
        t.verticalCenter = -14,
        t.width = 80,
        t
    },
    i.redDot_i = function() {
        var t = new eui.Image;
        return this.redDot = t,
        t.left = 0,
        t.source = "room_edit_pop_reddot_png",
        t.y = 0,
        t
    },
    i.no_i = function() {
        var t = new eui.Image;
        return this.no = t,
        t.horizontalCenter = 0,
        t.source = "room_edit_pop_jia_png",
        t.verticalCenter = 0,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.right = 7,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 9025023,
        t.text = "1",
        t.textColor = 16579836,
        t.y = 80.898,
        t
    },
    i.la_id_i = function() {
        var t = new eui.Label;
        return this.la_id = t,
        t.fontFamily = "MFShangHei",
        t.right = 7,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 9025023,
        t.text = "1",
        t.textColor = 16579836,
        t.y = 4.013,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/RoomEditPopSkin.exml"] = window.RoomEditPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["to_small", "clear_all", "vip_bg", "gou", "close", "save", "tab_1", "tab_3", "tab_2", "dot1", "dot3", "dot2", "_list", "_scro", "twGroup", "to_big"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.twGroup_i(), this.to_big_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "room_edit_pop_tab_1_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "room_edit_pop_tab_1_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "room_edit_pop_tab_2_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "room_edit_pop_tab_2_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "room_edit_pop_tab_3_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "room_edit_pop_tab_3_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.twGroup_i = function() {
        var t = new eui.Group;
        return this.twGroup = t,
        t.bottom = 0,
        t.height = 250,
        t.horizontalCenter = 0,
        t.touchThrough = !0,
        t.percentWidth = 100,
        t.elementsContent = [this._Rect1_i(), this._Image1_i(), this.to_small_i(), this.clear_all_i(), this.vip_bg_i(), this.gou_i(), this.close_i(), this.save_i(), this.tab_1_i(), this.tab_3_i(), this.tab_2_i(), this.dot1_i(), this.dot3_i(), this.dot2_i(), this._scro_i()],
        t
    },
    r._Rect1_i = function() {
        var t = new eui.Rect;
        return t.bottom = 0,
        t.fillAlpha = 0,
        t.left = 0,
        t.right = 0,
        t.top = 44,
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.horizontalCenter = 0,
        t.source = "room_edit_pop_bg_png",
        t.touchEnabled = !1,
        t
    },
    r.to_small_i = function() {
        var t = new eui.Image;
        return this.to_small = t,
        t.bottom = 197,
        t.horizontalCenter = 519.5,
        t.source = "room_edit_pop_to_small_png",
        t
    },
    r.clear_all_i = function() {
        var t = new eui.Image;
        return this.clear_all = t,
        t.bottom = 169,
        t.horizontalCenter = 139.5,
        t.source = "room_edit_pop_clear_all_png",
        t
    },
    r.vip_bg_i = function() {
        var t = new eui.Image;
        return this.vip_bg = t,
        t.bottom = 175,
        t.horizontalCenter = -18,
        t.source = "room_edit_pop_vip_bg_png",
        t
    },
    r.gou_i = function() {
        var t = new eui.Image;
        return this.gou = t,
        t.bottom = 179,
        t.horizontalCenter = -68.5,
        t.source = "room_edit_pop_gou_png",
        t.touchEnabled = !1,
        t.visible = !1,
        t
    },
    r.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.bottom = 41,
        t.horizontalCenter = 498.5,
        t.source = "room_edit_pop_close_png",
        t
    },
    r.save_i = function() {
        var t = new eui.Image;
        return this.save = t,
        t.bottom = 102,
        t.horizontalCenter = 498.5,
        t.source = "room_edit_pop_save_png",
        t
    },
    r.tab_1_i = function() {
        var t = new eui.RadioButton;
        return this.tab_1 = t,
        t.bottom = 167,
        t.groupName = "tabGroup",
        t.horizontalCenter = -500.5,
        t.value = "1",
        t.skinName = i,
        t
    },
    r.tab_3_i = function() {
        var t = new eui.RadioButton;
        return this.tab_3 = t,
        t.bottom = 167,
        t.groupName = "tabGroup",
        t.horizontalCenter = -400.5,
        t.value = "3",
        t.skinName = o,
        t
    },
    r.tab_2_i = function() {
        var t = new eui.RadioButton;
        return this.tab_2 = t,
        t.bottom = 167,
        t.groupName = "tabGroup",
        t.horizontalCenter = -299.5,
        t.value = "2",
        t.skinName = n,
        t
    },
    r.dot1_i = function() {
        var t = new eui.Image;
        return this.dot1 = t,
        t.bottom = 193,
        t.horizontalCenter = -475.5,
        t.source = "room_edit_pop_reddot_png",
        t.touchEnabled = !1,
        t
    },
    r.dot3_i = function() {
        var t = new eui.Image;
        return this.dot3 = t,
        t.bottom = 193,
        t.horizontalCenter = -376.5,
        t.source = "room_edit_pop_reddot_png",
        t.touchEnabled = !1,
        t
    },
    r.dot2_i = function() {
        var t = new eui.Image;
        return this.dot2 = t,
        t.bottom = 193,
        t.horizontalCenter = -276.5,
        t.source = "room_edit_pop_reddot_png",
        t.touchEnabled = !1,
        t
    },
    r._scro_i = function() {
        var t = new eui.Scroller;
        return this._scro = t,
        t.bottom = 17,
        t.height = 132,
        t.horizontalCenter = -55.5,
        t.width = 963.245,
        t.viewport = this._list_i(),
        t
    },
    r._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    r._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 6,
        t
    },
    r.to_big_i = function() {
        var t = new eui.Image;
        return this.to_big = t,
        t.horizontalCenter = 519.5,
        t.source = "room_edit_pop_to_big_png",
        t.visible = !1,
        t.y = 599,
        t
    },
    e
} (eui.Skin);