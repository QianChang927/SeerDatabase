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
roomToolBar; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.bottomBtn = [],
            t.rightBtn = [],
            t.isHide = !1,
            t.curName = "",
            t.isMe = !0,
            t.skinName = RoomToolbarSkin,
            IS_RELEASE || (window.RoomToolBar = t),
            t
        }
        return __extends(t, e),
        t.prototype.createChildren = function() {
            var t = this;
            e.prototype.createChildren.call(this);
            var i = DeviceInfoManager.adapterOffSetX;
            if (this.left = this.right = i > 0 ? i - 20 : 0, egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.resize, this), this.resize(), ImageButtonUtil.add(this.ima_show, this.setHide, this), ImageButtonUtil.add(this.ima_edit,
            function() {
                return t.dot.visible = !1,
                GameInfo.isSpecialTime ? void BubblerManager.getInstance().showText("编辑功能暂时关闭!") : (t.setHide(), void RoomManager.editMode(!0))
            },
            this), ImageButtonUtil.add(this.ima_shop,
            function() {
                StatLogger.log("20220923版本系统功能", "基地搬迁", "点击打开商店"),
                ModuleManager.showModuleByID(158)
            },
            this), ImageButtonUtil.add(this.ima_warehouse,
            function() {
                ModuleManager.showModuleByID(4)
            },
            this), ImageButtonUtil.add(this.ima_hatchery,
            function() {
                ModuleManager.showModuleByID(26, {
                    type: 1
                })
            },
            this), ImageButtonUtil.add(this.ima_main, RoomManager.leaveRoom, this), ImageButtonUtil.add(this.ima_goWho,
            function() {
                ModuleManager.showModuleByID(155)
            },
            this), ImageButtonUtil.add(this.ima_home,
            function() {
                RoomManager.changeRoom(MainManager.actorID)
            },
            this), ImageButtonUtil.add(this.ima_detail,
            function() {
                t.dot0.visible = !1,
                ModuleManager.showModuleByID(157, {
                    id: RoomManager.userId
                })
            },
            this), ImageButtonUtil.add(this.ima_detail_other,
            function() {
                ModuleManager.showModuleByID(157, {
                    id: RoomManager.userId
                })
            },
            this), ImageButtonUtil.add(this.ima_goWho_other,
            function() {
                ModuleManager.showModuleByID(155)
            },
            this), ImageButtonUtil.add(this.ima_main_other, RoomManager.leaveRoom, this), ImageButtonUtil.add(this.ima_good,
            function() {
                KTool.getMultiValue([200329, 200330, 200331, 200332, 200333],
                function(e) {
                    var t = e.indexOf(0) > -1;
                    t ? RoomManager.liked() : BubblerManager.getInstance().showText("今日点赞次数<font color='#ff4545'>已达到5次</font>，请明天再点赞！", !0)
                })
            },
            this), EventManager.addEventListener(roomModel.RoomEvent.LIKE_THIS_ROOM,
            function() {
                t.lock(t.ima_good, !1),
                KTool.getMultiValue([200329, 200330, 200331, 200332, 200333],
                function(e) {
                    var i = e.filter(function(e) {
                        return e > 0
                    });
                    BubblerManager.getInstance().showText("已为<font color='#ff4545'>" + t.curName + "</font>的基地点赞！今日已点赞<font color='#ff4545'>" + i.length + "/5</font>次", !0)
                })
            },
            this), EventManager.addEventListener(roomModel.RoomEvent.SHOW_HIDE_TOOLBAR,
            function() { ! t.isHide && t.setHide()
            },
            this), EventManager.addEventListener(roomModel.RoomEvent.BUY_FURNITURE, this.updateDot, this), EventManager.addEventListener(roomModel.RoomEvent.ROOM_MODEL_SCROLLER_CHANGE, this.updateSlider, this), this.vSlider.addEventListener(egret.Event.CHANGE, this.sliderChange, this), this.vSlider.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sliderAlpha, this), RoomManager.curRoomModel) {
                var o = Math.floor(RoomManager.curRoomModel.mainLevel.height * RoomManager.curRoomModel.mainLevel.scaleY - RoomManager.curRoomModel.scroller.height);
                this.vSlider.value = o,
                this.sliderAlpha()
            }
            this.isMe = RoomManager.userId == MainManager.actorID,
            this.isMe ? (this.bottomBtn = [this.ima_edit, this.dot, this.ima_shop, this.ima_warehouse, this.ima_hatchery], this.rightBtn = [this.ima_main, this.ima_goWho, this.ima_detail, this.dot0], this.rightMask.scaleY = .88) : (this.rightMask.scaleY = 1, this.bottomBtn = [], this.rightBtn = [this.ima_main_other, this.ima_home, this.ima_goWho_other, this.ima_good, this.ima_detail_other]),
            this.updateDot(),
            this.updateView(),
            GameInfo.isChecking && (this.ima_goWho.visible = this.ima_detail.visible = this.ima_detail_other.visible = this.ima_goWho_other.visible = !1),
            !this.isHide && this.setHide()
        },
        t.prototype.updateSlider = function(e) {
            if (this.vSlider.enabled = this.checkCanMove(), this.checkCanMove()) {
                var t = e.data.v;
                this.vSlider.value = t,
                this.sliderAlpha()
            }
        },
        t.prototype.sliderChange = function() {
            if (this.vSlider.enabled = this.checkCanMove(), this.checkCanMove()) {
                var e = +this.vSlider.value.toFixed(2);
                this.sliderAlpha(),
                EventManager.dispatchEventWith(roomModel.RoomEvent.ROOM_TOOLBAR_SLIDER_CHANGE, !1, {
                    v: e
                })
            }
        },
        t.prototype.sliderAlpha = function() {
            this.checkCanMove() && (this.tw ? this.tw.restart() : this.tw = gsap.fromTo(this.sliderGroup, {
                alpha: 1
            },
            {
                alpha: .5,
                duration: 5
            }))
        },
        t.prototype.checkCanMove = function() {
            return RoomManager.curRoomModel.scroller.scrollPolicyV != eui.ScrollPolicy.OFF
        },
        t.prototype.resize = function() {
            var e = egret.lifecycle.stage.stageWidth,
            t = egret.lifecycle.stage.stageHeight;
            this.width = e,
            this.height = t,
            this.sliderGroup.visible = RoomManager.curRoomModel && 1 != RoomManager.curRoomModel.mainLevel.scaleY
        },
        t.prototype.updateView = function() {
            var e = this;
            this.currentState = this.isMe ? "mine": "other",
            UserInfoManager.getInfo(RoomManager.userId,
            function(t) {
                e.curName = t.nick,
                e.mapName.textFlow = [{
                    text: e.curName,
                    style: {
                        textColor: 4187130
                    }
                },
                {
                    text: "的基地",
                    style: {
                        textColor: 16777215
                    }
                }],
                KTool.getMultiValue([200329, 200330, 200331, 200332, 200333],
                function(t) {
                    var i = t.indexOf(RoomManager.userId) < 0;
                    e.lock(e.ima_good, i)
                })
            })
        },
        t.prototype.setHide = function() {
            var e = this,
            t = function() {
                e.ima_show.source = e.isHide ? "room_toolbar_ima_hide_png": "room_toolbar_ima_show_png",
                e.isHide = !e.isHide,
                e.touchEnabled = e.touchChildren = !0,
                e.mineGroup.touchEnabled = e.mineGroup.touchChildren = e.isHide,
                e.otherGroup.touchEnabled = e.otherGroup.touchChildren = e.isHide
            };
            this.tl && this.tl.isActive() || (this.touchEnabled = this.touchChildren = !1, this.tl ? (this.tl.reversed(!this.tl.reversed()), this.tl.then(t)) : (this.tl = new gsap.core.Timeline, this.tl.from(this.bottomBtn, {
                x: 413,
                alpha: 0,
                stagger: .05,
                ease: Quad.easeOut
            },
            "<"), this.tl.from(this.rightBtn, {
                y: 413,
                alpha: 0,
                stagger: .05,
                ease: Quad.easeOut
            },
            "<"), this.tl.from(this.titleGroup, {
                top: -34,
                duration: .3
            },
            "<"), this.tl.from(this.sliderMoveGroup, {
                left: -49 - this.left,
                duration: .3
            },
            "<"), this.tl.from(this.rightMask, {
                scaleY: 0,
                duration: this.isMe ? .5 : .6
            },
            "<"), this.isMe && this.tl.from(this.bottomMask, {
                scaleX: 0,
                duration: .5
            },
            "<"), this.tl.then(t)))
        },
        t.prototype.updateDot = function() {
            var e = this;
            this.dot.visible = this.dot0.visible = !1;
            var t = RoomManager.getUnUsedItem().filter(function(e) {
                return e.isNew
            });
            this.dot.visible = t.length > 0,
            RoomManager.userId == MainManager.actorID && SocketConnection.sendByQueue(CommandID.CUR_MONTH_VISITOR_NUM, [],
            function(t) {
                var i = t.data,
                o = i.readUnsignedInt();
                e.localSt(o)
            })
        },
        t.prototype.localSt = function(e) {
            var t = SystemTimerManager.sysDate,
            i = "roomInformationPop_" + t.getFullYear() + "_" + t.getMonth() + "_" + MainManager.actorID;
            egret.localStorage.getItem(i) ? ~~egret.localStorage.getItem(i) != e ? this.dot0.visible = !0 : this.dot0.visible = !1 : this.dot0.visible = 0 != e
        },
        t.prototype.lock = function(e, t) {
            e.touchEnabled = t,
            e.source = t ? "room_toolbar_ima_liked_png": "room_toolbar_ima_liked_1_png"
        },
        t.prototype.destroy = function() {
            this.tl && this.tl.kill(),
            this.tl = null,
            this.tw && this.tw.kill(),
            this.tw = null,
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.resize, this),
            this.vSlider.removeEventListener(egret.Event.CHANGE, this.sliderChange, this),
            this.vSlider.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.sliderAlpha, this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            IS_RELEASE || (window.RoomToolBar = null)
        },
        t
    } (eui.Component);
    e.RoomToolBar = t,
    __reflect(t.prototype, "roomToolBar.RoomToolBar")
} (roomToolBar || (roomToolBar = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/RoomToolbarVScrollerBarSkin.exml"] = window.RoomToolbarVScrollerBarSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["track", "thumb"],
        this.height = 152,
        this.width = 20,
        this.elementsContent = [this.track_i(), this.thumb_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.track_i = function() {
        var e = new eui.Image;
        return this.track = e,
        e.height = 152,
        e.scale9Grid = new egret.Rectangle(2, 2, 23, 96),
        e.source = "room_toolbar_slider_bg_png",
        e.width = 14,
        e.x = 3,
        e.y = 0,
        e
    },
    i.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e,
        e.source = "room_toolbar_trumb_png",
        e.x = .399,
        e.y = 108,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/RoomToolbarSkin.exml"] = window.RoomToolbarSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["name_bg", "mapName", "titleGroup", "rightBg", "rightMask", "bottomBg", "bottomMask", "ima_edit", "ima_shop", "ima_warehouse", "ima_hatchery", "ima_main", "ima_goWho", "ima_detail", "dot", "dot0", "mineGroup", "ima_main_other", "ima_home", "ima_goWho_other", "ima_good", "ima_detail_other", "otherGroup", "ima_show", "vSlider", "sliderGroup", "sliderMoveGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.titleGroup_i(), this._Group1_i(), this.sliderMoveGroup_i()],
        this.dot0_i(),
        this.states = [new eui.State("mine", [new eui.AddItems("dot0", "mineGroup", 1, ""), new eui.SetProperty("dot", "visible", !1), new eui.SetProperty("mineGroup", "visible", !0), new eui.SetProperty("ima_main_other", "x", 414), new eui.SetProperty("ima_home", "x", 431), new eui.SetProperty("ima_goWho_other", "x", 430), new eui.SetProperty("ima_good", "x", 431), new eui.SetProperty("ima_detail_other", "x", 431), new eui.SetProperty("otherGroup", "visible", !1)]), new eui.State("other", [new eui.SetProperty("mineGroup", "visible", !1), new eui.SetProperty("ima_main_other", "y", 309.612), new eui.SetProperty("ima_main_other", "horizontalCenter", 205.5), new eui.SetProperty("ima_home", "source", "room_toolbar_ima_home_png"), new eui.SetProperty("ima_home", "y", 241), new eui.SetProperty("ima_home", "horizontalCenter", 206), new eui.SetProperty("ima_goWho_other", "y", 164), new eui.SetProperty("ima_goWho_other", "horizontalCenter", 206), new eui.SetProperty("ima_good", "y", 89.101), new eui.SetProperty("ima_good", "horizontalCenter", 205.5), new eui.SetProperty("ima_detail_other", "y", 16.328), new eui.SetProperty("ima_detail_other", "horizontalCenter", 205.5)])],
        eui.Binding.$bindProperties(this, ["rightMask"], [0], this.rightBg, "mask"),
        eui.Binding.$bindProperties(this, ["bottomMask"], [0], this.bottomBg, "mask")
    }
    __extends(t, e);
    var i = t.prototype;
    return i.titleGroup_i = function() {
        var e = new eui.Group;
        return this.titleGroup = e,
        e.horizontalCenter = 0,
        e.top = 0,
        e.elementsContent = [this.name_bg_i(), this.mapName_i()],
        e
    },
    i.name_bg_i = function() {
        var e = new eui.Image;
        return this.name_bg = e,
        e.horizontalCenter = 0,
        e.source = "room_toolbar_name_bg_png",
        e.touchEnabled = !1,
        e.y = 0,
        e
    },
    i.mapName_i = function() {
        var e = new eui.Label;
        return this.mapName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -.5,
        e.size = 18,
        e.text = "昵称最长六字的基地",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.y = 8,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.bottom = 8,
        e.height = 499,
        e.right = 20,
        e.touchThrough = !0,
        e.width = 485,
        e.elementsContent = [this.rightBg_i(), this.rightMask_i(), this.mineGroup_i(), this.otherGroup_i(), this.ima_show_i()],
        e
    },
    i.rightBg_i = function() {
        var e = new eui.Image;
        return this.rightBg = e,
        e.bottom = 80,
        e.source = "room_toolbar_rightbg_png",
        e.x = 409,
        e
    },
    i.rightMask_i = function() {
        var e = new eui.Rect;
        return this.rightMask = e,
        e.bottom = 80,
        e.height = 419,
        e.scaleX = 1,
        e.width = 75,
        e.x = 409,
        e
    },
    i.mineGroup_i = function() {
        var e = new eui.Group;
        return this.mineGroup = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.touchThrough = !0,
        e.visible = !0,
        e.elementsContent = [this.bottomBg_i(), this.bottomMask_i(), this.ima_edit_i(), this.ima_shop_i(), this.ima_warehouse_i(), this.ima_hatchery_i(), this.ima_main_i(), this.ima_goWho_i(), this.ima_detail_i(), this.dot_i()],
        e
    },
    i.bottomBg_i = function() {
        var e = new eui.Image;
        return this.bottomBg = e,
        e.right = 73,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_bottombg_png",
        e.x = 0,
        e.y = 424.0000000000001,
        e
    },
    i.bottomMask_i = function() {
        var e = new eui.Rect;
        return this.bottomMask = e,
        e.height = 75,
        e.right = 73,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 292,
        e.x = 0,
        e.y = 424.0000000000001,
        e
    },
    i.ima_edit_i = function() {
        var e = new eui.Image;
        return this.ima_edit = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_edit_png",
        e.x = 343.311,
        e.y = 432,
        e
    },
    i.ima_shop_i = function() {
        var e = new eui.Image;
        return this.ima_shop = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_shop_png",
        e.x = 282.5683333333333,
        e.y = 429,
        e
    },
    i.ima_warehouse_i = function() {
        var e = new eui.Image;
        return this.ima_warehouse = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_warehouse_png",
        e.x = 222.35066666666665,
        e.y = 431,
        e
    },
    i.ima_hatchery_i = function() {
        var e = new eui.Image;
        return this.ima_hatchery = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_hatchery_png",
        e.x = 162.742,
        e.y = 431,
        e
    },
    i.ima_main_i = function() {
        var e = new eui.Image;
        return this.ima_main = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_main_png",
        e.x = 414,
        e.y = 288.066,
        e
    },
    i.ima_goWho_i = function() {
        var e = new eui.Image;
        return this.ima_goWho = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_gowho_png",
        e.x = 430,
        e.y = 212.066,
        e
    },
    i.ima_detail_i = function() {
        var e = new eui.Image;
        return this.ima_detail = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_detal_png",
        e.x = 431,
        e.y = 136.066,
        e
    },
    i.dot_i = function() {
        var e = new eui.Image;
        return this.dot = e,
        e.height = 20,
        e.source = "dot_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 20,
        e.x = 359.234,
        e.y = 425.598,
        e
    },
    i.dot0_i = function() {
        var e = new eui.Image;
        return this.dot0 = e,
        e.height = 20,
        e.source = "dot_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 20,
        e.x = 450.522,
        e.y = 128.686,
        e
    },
    i.otherGroup_i = function() {
        var e = new eui.Group;
        return this.otherGroup = e,
        e.height = 499,
        e.touchThrough = !0,
        e.width = 485,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.ima_main_other_i(), this.ima_home_i(), this.ima_goWho_other_i(), this.ima_good_i(), this.ima_detail_other_i()],
        e
    },
    i.ima_main_other_i = function() {
        var e = new eui.Image;
        return this.ima_main_other = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_main_png",
        e.y = 309.612,
        e
    },
    i.ima_home_i = function() {
        var e = new eui.Image;
        return this.ima_home = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_detal_png",
        e.y = 241,
        e
    },
    i.ima_goWho_other_i = function() {
        var e = new eui.Image;
        return this.ima_goWho_other = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_gowho_png",
        e.y = 164,
        e
    },
    i.ima_good_i = function() {
        var e = new eui.Image;
        return this.ima_good = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_liked_png",
        e.y = 89.101,
        e
    },
    i.ima_detail_other_i = function() {
        var e = new eui.Image;
        return this.ima_detail_other = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "room_toolbar_ima_detal_png",
        e.y = 16.328,
        e
    },
    i.ima_show_i = function() {
        var e = new eui.Image;
        return this.ima_show = e,
        e.source = "room_toolbar_ima_show_png",
        e.x = 413,
        e.y = 413,
        e
    },
    i.sliderMoveGroup_i = function() {
        var e = new eui.Group;
        return this.sliderMoveGroup = e,
        e.bottom = 7,
        e.height = 245,
        e.left = 43,
        e.width = 49,
        e.elementsContent = [this.sliderGroup_i()],
        e
    },
    i.sliderGroup_i = function() {
        var e = new eui.Group;
        return this.sliderGroup = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.touchThrough = !0,
        e.elementsContent = [this._Image1_i(), this.vSlider_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "room_toolbar_cam_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.vSlider_i = function() {
        var e = new eui.VSlider;
        return this.vSlider = e,
        e.maximum = 10,
        e.minimum = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "RoomToolbarVScrollerBarSkin",
        e.slideDuration = 200,
        e.snapInterval = 0,
        e.x = 12.223,
        e.y = 61,
        e
    },
    t
} (eui.Skin);