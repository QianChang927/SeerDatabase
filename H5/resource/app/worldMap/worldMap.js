var __reflect = this && this.__reflect ||
function(t, i, a) {
    t.__class__ = i,
    a ? a.push(i) : a = [i],
    t.__types__ = t.__types__ ? a.concat(t.__types__) : a
},
__extends = this && this.__extends ||
function(t, i) {
    function a() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    a.prototype = i.prototype,
    t.prototype = new a
},
worldMap; !
function(t) {
    var i = function(i) {
        function a() {
            var t = i.call(this) || this;
            return t.lastSelectIdx = -1,
            t.skinName = WorldmapstarSkin,
            t
        }
        return __extends(a, i),
        a.prototype.childrenCreated = function() {
            var a = this;
            i.prototype.childrenCreated.call(this),
            this.mapTip.visible = !1,
            this.stars.x = (egret.lifecycle.stage.stageWidth - this.stars.width) / 2,
            this.stars.y = (egret.lifecycle.stage.stageHeight - this.stars.height) / 2,
            this.imgBtnClose.right += DeviceInfoManager.adapterOffSetX,
            config.Starmaplist.load(function(i) {
                config.Starmap.load(function(i) {
                    a.starMapInfos = config.Starmap.getItems(),
                    a.scl_items.viewport = a.scl_items_viewport,
                    a._ary = new eui.ArrayCollection,
                    a.scl_items_viewport.dataProvider = a._ary,
                    a.scl_items_viewport.itemRenderer = t.WorldMapStarItemRender;
                    var e = config.Starmaplist.getItems();
                    a._ary.replaceAll(e),
                    a._ary.refresh(),
                    a.scl_items_viewport.validateNow(),
                    a.addEvent(),
                    a.isShow = !1,
                    a.lastSelectIdx = 0,
                    a.scl_items_viewport.selectedIndex = a.lastSelectIdx,
                    a.scl_items_viewport.validateNow(),
                    a.selectStar = a.lastSelectIdx
                },
                a)
            },
            this)
        },
        a.prototype.openMapTip = function(t, i) {
            void 0 === i && (i = 0),
            this._openType = i,
            this.starInfo = config.Starmap.getItemsByField("id", ["=="], [t])[0],
            this.mapTip.visible = !0,
            this.starName.text = this.starInfo.name,
            this.starDes.text = this.starInfo.intro,
            this.starImage.source = ClientConfig.getMaptipImage(~~this.starInfo.pic, this.starInfo.type),
            this.imgNotOpen.visible = !this.mapsOpenArr[t],
            this.imgBtnGo.visible = !this.imgNotOpen.visible
        },
        a.prototype.onTouchTapImageButton = function(t) {
            var i = t.target.name,
            a = -1;
            if (i.split("_").length > 2) switch (a = Number(i.split("_")[2]), i) {
            case "map_start_" + a: case "map_bstars_" + a: i == "map_start_" + a ? (this.isShow && (this.isShow = !1), this.openMapTip(a)) : (this.isShow && (this.isShow = !1), this.openMapTip(a))
            } else switch (t.target) {
            case this.imgBtnClose:
                StatLogger.log("H5地图系统", "地图主界面", "在帕诺/卡兰/罗格等所有星系面板点击【X】"),
                this.onClose(),
                ModuleManager.showModuleByID(config.ModuleConst.WORLD_MAP);
                break;
            case this.imgBtnGo:
                this.onClose(),
                MapManager.changeMap(this.starInfo.Gotomap);
                break;
            case this.imgOpenBtn:
                this.isShow = !0;
                break;
            case this.imgBtnHide:
                this.isShow = !1
            }
        },
        a.prototype.addEvent = function() {
            ImageButtonUtil.add(this.imgOpenBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.imgBtnGo, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.imgBtnHide, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.imgBtnClose, this.onTouchTapImageButton, this),
            this.diBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideTipHandle, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapImageButton, this),
            this.scl_items_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick, this)
        },
        a.prototype.hideTipHandle = function(t) {
            var i = this;
            this.mapTip.visible = !1,
            1 == this._openType && egret.Tween.get(this.stars).to({
                scaleX: 1,
                scaleY: 1
            },
            300).call(function() {
                i.stars.anchorOffsetX = 0,
                i.stars.anchorOffsetY = 0,
                i.stars.x = (egret.lifecycle.stage.stageWidth - i.stars.width) / 2 - 12.5,
                i.stars.y = (egret.lifecycle.stage.stageHeight - i.stars.height) / 2
            })
        },
        a.prototype.itemClick = function(t) {
            var i = (this.scl_items_viewport.selectedItem, t.itemRenderer);
            return i.open ? (this.lastSelectIdx = this.scl_items_viewport.selectedIndex, void(this.selectStar = this.scl_items_viewport.selectedIndex)) : void(this.scl_items_viewport.selectedIndex = this.lastSelectIdx)
        },
        Object.defineProperty(a.prototype, "selectStar", {
            get: function() {
                return this._selectStar
            },
            set: function(t) {
                var i = this;
                switch (t) {
                case 0:
                    StatLogger.log("H5地图系统", "地图主界面", "打开帕诺星系");
                    break;
                case 1:
                    StatLogger.log("H5地图系统", "地图主界面", "打开卡兰星系");
                    break;
                case 2:
                    StatLogger.log("H5地图系统", "地图主界面", "打开罗格星系");
                    break;
                case 3:
                    StatLogger.log("H5地图系统", "地图主界面", "打开裂空星系");
                    break;
                case 4:
                    StatLogger.log("H5地图系统", "地图主界面", "打开螺旋星系")
                }
                this._selectStar = t,
                this.Bstars.visible = !1,
                this.stars.visible = !1;
                var a = this._ary.getItemAt(this.selectStar),
                e = config.Starmaplist.getItemsByField("type", ["=="], [1]),
                r = config.Starmaplist.getItemsByField("type", ["=="], [2]);
                this.gName.text = a.name;
                var _, s;
                if (0 == a.isopen) return void Alarm.show("暂未开放，敬请期待");
                if (this.mapsOpenArr = [], 2 == a.type) {
                    this.Bstars.visible = !0;
                    for (var n = 0; n < r.length; n++) if (this["bstars_" + r[n].id]) {
                        this["bstars_" + r[n].id].visible = r[n].id == a.id;
                        for (var p = 0; p < this["bstars_" + r[n].id].numChildren; p++) this["bstars_" + r[n].id].getChildAt(p).touchThrough = !0,
                        s = this["bstars_" + r[n].id].getChildAt(p).getChildAt(0),
                        this["bstars_" + r[n].id].getChildAt(p).getChildAt(1).touchEnabled = !1,
                        -1 != s.name.indexOf("map_bstars_") && (_ = Number(s.name.split("_")[2]), this.mapsOpenArr[_] = this.getStartMapOpen(_))
                    }
                } else {
                    this.stars.visible = !0;
                    for (var h = 0; h < e.length; h++) if (this["stars_" + e[h].id]) {
                        if (e[h].id != a.id) {
                            this["stars_" + e[h].id].visible = !1;
                            continue
                        }
                        this["stars_" + e[h].id].visible = !0;
                        for (var o = function(t) {
                            var a = u["stars_" + e[h].id].getChildAt(t).getChildAt(0),
                            r = u["stars_" + e[h].id].getChildAt(t).getChildAt(1);
                            if ( - 1 != a.name.indexOf("map_start_")) {
                                _ = Number(a.name.split("_")[2]),
                                u.mapsOpenArr[_] = u.getStartMapOpen(_),
                                a.visible = !0;
                                var s = [20115, 20213, 20311, 20413, 20511, 20608, 20704, 20804];
                                if ( - 1 == s.indexOf(_)) {
                                    var n = DragonbonesUtil.createAnimate("xingqiu_ske_json", "xingqiu_tex_json", "xingqiu_tex_png", "xingqiuchuxian");
                                    n.x = a.x + a.width / 2 - 5,
                                    n.y = a.y + a.height / 2 + 5,
                                    a.parent.addChild(n),
                                    u.scl_items_viewport.touchEnabled = u.scl_items_viewport.touchChildren = !1,
                                    n.once(dragonBones.MovieEvent.COMPLETE,
                                    function() {
                                        n.parent.removeChild(n),
                                        n.dispose(),
                                        i.scl_items_viewport.touchEnabled = i.scl_items_viewport.touchChildren = !0
                                    },
                                    u),
                                    n.animation.play("xingqiuchuxian", 1)
                                }
                                a.alpha = 0,
                                r.alpha = 0;
                                var p = a.y;
                                a.y += 50,
                                egret.Tween.get(a).to({
                                    y: p,
                                    alpha: 1
                                },
                                500),
                                egret.Tween.get(r).wait(500).to({
                                    alpha: 1
                                },
                                500)
                            }
                        },
                        u = this, m = 0; m < this["stars_" + e[h].id].numChildren; m++) o(m)
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype.getStartMapOpen = function(t) {
            for (var i, a = 0; a < this.starMapInfos.length; a++) if (i = this.starMapInfos[a], i.id == t) return 1 == i.isopen;
            return ! 1
        },
        a.prototype.removeEvent = function() {
            this.diBg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hideTipHandle, this),
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapImageButton, this),
            this.scl_items_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick, this)
        },
        Object.defineProperty(a.prototype, "isShow", {
            get: function() {
                return this._isShow
            },
            set: function(t) {
                this._isShow = t,
                this.showG.visible = this.isShow,
                this.hideG.visible = !this.isShow
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype.destroy = function() {
            this.removeEvent(),
            i.prototype.destroy.call(this)
        },
        a
    } (BaseModule);
    t.UnknowWorldPanel = i,
    __reflect(i.prototype, "worldMap.UnknowWorldPanel")
} (worldMap || (worldMap = {}));
var __reflect = this && this.__reflect ||
function(t, i, a) {
    t.__class__ = i,
    a ? a.push(i) : a = [i],
    t.__types__ = t.__types__ ? a.concat(t.__types__) : a
},
__extends = this && this.__extends ||
function(t, i) {
    function a() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    a.prototype = i.prototype,
    t.prototype = new a
},
worldMap; !
function(t) {
    var i = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = WorldmapSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.imgBtnClose.right += DeviceInfoManager.adapterOffSetX,
            StatLogger.log("H5地图系统", "地图主界面", "打开地图主界面"),
            this.animPlay()
        },
        i.prototype.animPlay = function() {
            var t = this;
            this.animWeiyan = DragonbonesUtil.createAnimate("zhujiemian_ske_json", "zhujiemian_tex_json", "zhujiemian_tex_png", "zhujiemian"),
            this.animlanxuanwo = DragonbonesUtil.createAnimate("zhujiemian_ske_json", "zhujiemian_tex_json", "zhujiemian_tex_png", "zhujiemian"),
            this.animhongxuanwo = DragonbonesUtil.createAnimate("zhujiemian_ske_json", "zhujiemian_tex_json", "zhujiemian_tex_png", "zhujiemian"),
            this.animWeiyan.touchEnabled = !0,
            this.btnGroup.addChildAt(this.animWeiyan, 0),
            this.btnGroup.addChildAt(this.animhongxuanwo, 1),
            this.btnGroup.addChildAt(this.animlanxuanwo, 2),
            this.animWeiyan.x = 752,
            this.animWeiyan.y = 380,
            this.animlanxuanwo.x = 419,
            this.animlanxuanwo.y = 180,
            this.rectlan = new eui.Rect(180, 180, 16776960),
            this.btnGroup.addChild(this.rectlan),
            this.rectlan.x = 335,
            this.rectlan.y = 80,
            this.rectlan.alpha = 0,
            this.rectlan.name = "rectlan",
            this.rectzi = new eui.Rect(200, 170, 16776960),
            this.btnGroup.addChild(this.rectzi),
            this.rectzi.x = 25,
            this.rectzi.y = 246,
            this.rectzi.alpha = 0,
            this.rectzi.name = "rectzi",
            this.animhongxuanwo.x = 120,
            this.animhongxuanwo.y = 336,
            this.animWeiyan.animation.play("feichuan", 0),
            this.animlanxuanwo.animation.play("lanse", 0),
            this.animhongxuanwo.animation.play("zise", 0),
            this.animlanxuanwo.animation.timeScale = .1,
            this.animhongxuanwo.animation.timeScale = .1,
            this.shipTitle.alpha = 0,
            this.universeTitle.alpha = 0,
            this.unkownuniverseTitle.alpha = 0;
            var i = new eui.Rect(this.ship_line.width, this.ship_line.height, 16776960),
            a = new eui.Rect(this.universe_line.width, this.universe_line.height, 16776960),
            e = new eui.Rect(this.unkownuniverse_line.width, this.unkownuniverse_line.height, 16776960);
            this.ship.addChild(i),
            i.x = 100,
            i.y = 0,
            this.universe.addChild(a),
            a.x = 100,
            a.y = 0,
            this.unkownuniverse.addChild(e),
            e.x = 100,
            e.y = 0,
            this.ship_line.mask = i,
            this.universe_line.mask = a,
            this.unkownuniverse_line.mask = e;
            var r = this.animWeiyan.x,
            _ = this.animWeiyan.y;
            this.animWeiyan.x = this.animWeiyan.x + 200,
            this.animWeiyan.y = this.imgBtnShip.y + 200,
            this.animhongxuanwo.x = this.animhongxuanwo.x - 200,
            this.animhongxuanwo.y = this.animhongxuanwo.y - 100,
            this.animlanxuanwo.x = this.animlanxuanwo.x - 200,
            this.animlanxuanwo.y = this.animlanxuanwo.y - 100,
            egret.Tween.get(this.animWeiyan).to({
                x: r,
                y: _
            },
            800).call(function() {
                t.addEvent()
            }),
            egret.Tween.get(this.animhongxuanwo).to({
                x: this.animhongxuanwo.x + 200,
                y: this.animhongxuanwo.y + 100
            },
            800),
            egret.Tween.get(this.animlanxuanwo).to({
                x: this.animlanxuanwo.x + 200,
                y: this.animlanxuanwo.y + 100
            },
            800),
            egret.setTimeout(function() {
                egret.Tween.get(t.shipTitle).to({
                    alpha: 1
                },
                300),
                egret.Tween.get(t.universeTitle).to({
                    alpha: 1
                },
                300),
                egret.Tween.get(t.unkownuniverseTitle).to({
                    alpha: 1
                },
                300),
                egret.Tween.get(i).to({
                    y: 48
                },
                400),
                egret.Tween.get(i).wait(200).to({
                    x: 0
                },
                400),
                egret.Tween.get(a).to({
                    y: 48
                },
                400),
                egret.Tween.get(a).wait(200).to({
                    x: 0
                },
                400),
                egret.Tween.get(e).to({
                    y: 48
                },
                400),
                egret.Tween.get(e).wait(200).to({
                    x: 0
                },
                400)
            },
            this, 150),
            GameInfo.isChecking && (this.animWeiyan.visible = this.ship.visible = !1)
        },
        i.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.imgBtnClose:
                StatLogger.log("H5地图系统", "地图主界面", "在主界面点击【X】"),
                this.onClose();
                break;
            case this.animWeiyan:
                this.onClose(),
                StatLogger.log("H5地图系统", "地图主界面", "点击未知宇宙"),
                ModuleManager.showModule("worldMap", ["worldMap"], null, "WorldMapShipPanel")
            }
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.imgBtnClose, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.animWeiyan, this.onTouchTapImageButton, this, !0, !1),
            this.rectlan.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouckBegin, this),
            this.rectzi.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouckBegin, this)
        },
        i.prototype.onTouckBegin = function(t) {
            if (!this.currBtn) {
                var i = t.currentTarget;
                i.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
                i.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onOutSide, this),
                i.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onCanCel, this);
                var a = i.width,
                e = i.height,
                r = Math.max(a, e);
                r = Math.min(Math.max(90, r), 678);
                var _ = MathUtil.lerp(678, .98, 90, .95, r);
                switch (i.name) {
                case "rectlan":
                    this.animlanxuanwo.scaleX = this.animlanxuanwo.scaleX * _,
                    this.animlanxuanwo.scaleY = this.animlanxuanwo.scaleY * _;
                    break;
                case "rectzi":
                    this.animhongxuanwo.scaleX = this.animhongxuanwo.scaleX * _,
                    this.animhongxuanwo.scaleY = this.animhongxuanwo.scaleY * _
                }
                this.currBtn = i
            }
        },
        i.prototype.onCanCel = function(t) {
            var i = t.currentTarget;
            i.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onCanCel, this),
            i.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
            i.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onOutSide, this)
        },
        i.prototype.onOutSide = function(t) {
            var i = t.currentTarget;
            i.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
            i.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
            i.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onOutSide, this)
        },
        i.prototype.onTouchTap = function(t) {
            var i = t.currentTarget;
            switch (i.name) {
            case "rectlan":
                this.onClose(),
                StatLogger.log("H5地图系统", "地图主界面", "点击赛尔宇宙"),
                ModuleManager.showModuleByID(162, 1);
                break;
            case "rectzi":
                this.onClose(),
                StatLogger.log("H5地图系统", "地图主界面", "点击未知宇宙"),
                ModuleManager.showModuleByID(162, 2)
            }
            i.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
        },
        i.prototype.onTouchEnd = function(t) {
            if (this.currBtn) {
                switch (egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), this.currBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onOutSide, this), this.currBtn.name) {
                case "rectlan":
                    this.animlanxuanwo.scaleX = 1,
                    this.animlanxuanwo.scaleY = 1;
                    break;
                case "rectzi":
                    this.animhongxuanwo.scaleX = 1,
                    this.animhongxuanwo.scaleY = 1
                }
                this.currBtn = null
            }
        },
        i.prototype.removeEvent = function() {
            ImageButtonUtil.removeAll(this),
            this.rectlan.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouckBegin, this),
            this.rectzi.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouckBegin, this)
        },
        i.prototype.destroy = function() {
            this.animWeiyan.dispose(),
            this.animhongxuanwo.dispose(),
            this.animlanxuanwo.dispose(),
            this.removeEvent(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.WorldMap = i,
    __reflect(i.prototype, "worldMap.WorldMap")
} (worldMap || (worldMap = {}));
var __reflect = this && this.__reflect ||
function(t, i, a) {
    t.__class__ = i,
    a ? a.push(i) : a = [i],
    t.__types__ = t.__types__ ? a.concat(t.__types__) : a
},
__extends = this && this.__extends ||
function(t, i) {
    function a() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    a.prototype = i.prototype,
    t.prototype = new a
},
worldMap; !
function(t) {
    var i = function(t) {
        function i(i) {
            var a = t.call(this) || this;
            return a.skinName = WorldmapstarItemRenderSkin,
            a
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            if (this.data) {
                var t = this.data;
                this.itemName.text = t.name,
                this.ItemImg.source = ClientConfig.getStarMapList(~~t.pic, t.type),
                this.open = 1 == t.isopen,
                this.lockImg.visible = !this.open
            }
        },
        i.prototype.destroy = function() {},
        i
    } (eui.ItemRenderer);
    t.WorldMapStarItemRender = i,
    __reflect(i.prototype, "worldMap.WorldMapStarItemRender")
} (worldMap || (worldMap = {}));
var __reflect = this && this.__reflect ||
function(t, i, a) {
    t.__class__ = i,
    a ? a.push(i) : a = [i],
    t.__types__ = t.__types__ ? a.concat(t.__types__) : a
},
worldMap; !
function(t) {
    var i = function() {
        function t() {}
        return t.RenderPosX = [33, 15, 0, 0, 0, 15, 33, 808, 826, 850, 850, 0, 825, 810],
        t.RenderPosY = [2, 76, 154, 232, 307, 381, 453, -2, 91, 185, 278, 0, 367, 455],
        t.BtnShipX = [43, 45, 45, 46, 45, 45, 46, 28, 30, 51, 50, 26, 55, 4],
        t.BtnShipY = [2, 1, 1, 5, 3, 2, 5, 5, 2, 2, 3, 1, 2, 2],
        t.LockedPosX = [9, 9, 9, 11, 10, 11, 11, -11, -13, -12, -11, -13, -12, -12],
        t.LockedPosY = [13, 10, 13, 12, 11, 12, 11, 12, 11, 11, 8, 11, 13, 12],
        t.PopX = [33, 15, 0, 0, 0, 15, 33, 350, 367, 391, 391, 391, 367, 350],
        t.PopY = [1, 74, 153, 158, 163, 180, 200, 0, 74, 153, 159, 163, 236, 311],
        t
    } ();
    t.ShipBtnsPosition = i,
    __reflect(i.prototype, "worldMap.ShipBtnsPosition")
} (worldMap || (worldMap = {}));
var __reflect = this && this.__reflect ||
function(t, i, a) {
    t.__class__ = i,
    a ? a.push(i) : a = [i],
    t.__types__ = t.__types__ ? a.concat(t.__types__) : a
},
__extends = this && this.__extends ||
function(t, i) {
    function a() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    a.prototype = i.prototype,
    t.prototype = new a
},
worldMap; !
function(t) {
    var i = function(i) {
        function a(t) {
            var a = i.call(this) || this;
            return a.value = t,
            a.skinName = WorldmapshipItemRenderNewSkin,
            a
        }
        return __extends(a, i),
        a.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            this.initData(),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.dataChanged()
        },
        a.prototype.initData = function() {
            this.xuanzhong.visible = !1,
            this.currentState = this.value.index > 7 ? "right": "left",
            this.seerMapEnter.visible = MainManager.actorInfo.mapID == this.value.starMapInfo.Gotomap,
            this.btn_ship.source = ClientConfig.getMaptipImage(~~this.value.starMapInfo.pic, this.value.starMapInfo.type, this.value.starMapInfo.isopen),
            this.value.starMapInfo.isopen ? (this.btn_ship.x = t.ShipBtnsPosition.BtnShipX[this.value.index - 1], this.btn_ship.y = t.ShipBtnsPosition.BtnShipY[this.value.index - 1]) : (this.visible = !1, this.btn_ship.x = t.ShipBtnsPosition.BtnShipX[this.value.index - 1] + t.ShipBtnsPosition.LockedPosX[this.value.index - 1], this.btn_ship.y = t.ShipBtnsPosition.BtnShipY[this.value.index - 1] + t.ShipBtnsPosition.LockedPosY[this.value.index - 1])
        },
        a.prototype.touchHandle = function(t) {
            this.value.starMapInfo.isopen ? EventManager.dispatchEventWith("OtherTouch", !1, this.value.index) : BubblerManager.getInstance().showText("暂未开放，敬请期待！")
        },
        a.prototype.destroy = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        a
    } (eui.ItemRenderer);
    t.WorldmapshipItemRender = i,
    __reflect(i.prototype, "worldMap.WorldmapshipItemRender")
} (worldMap || (worldMap = {}));
var __reflect = this && this.__reflect ||
function(t, i, a) {
    t.__class__ = i,
    a ? a.push(i) : a = [i],
    t.__types__ = t.__types__ ? a.concat(t.__types__) : a
},
__extends = this && this.__extends ||
function(t, i) {
    function a() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    a.prototype = i.prototype,
    t.prototype = new a
},
worldMap; !
function(t) {
    var i = function(i) {
        function a() {
            var t = i.call(this) || this;
            return t.btns = [],
            t.animStr = ["appear", "chuanzhangshi", "jinglingzhongxin", "chuansongcang", "liaowangcang", "liaowanglutai", "vip", "rongyudating", "huodongzhongxin", "nengyuanzhongxin", "jixieshi", "ziliaoshi", "yinghang", "fangyingshi", "jiaoguanbangongshi"],
            t.maps = [],
            t.popShow = !1,
            t.skinName = WorlmapshipSkin,
            t
        }
        return __extends(a, i),
        a.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            this.initData(),
            this.imgbtnClose.right += DeviceInfoManager.adapterOffSetX
        },
        a.prototype.initData = function() {
            var i = this;
            this.initAnim(),
            config.Starmap.load(function(a) {
                i.maps = config.Starmap.getItemsByField("type", ["=="], [1]);
                for (var e = 1; e <= i.maps.length; e++) {
                    var r = {
                        starMapInfo: i.maps[e - 1],
                        index: e
                    },
                    _ = new t.WorldmapshipItemRender(r);
                    i.btns.push(_),
                    i.shipGroup.addChild(_),
                    _.x = t.ShipBtnsPosition.RenderPosX[e - 1],
                    _.y = t.ShipBtnsPosition.RenderPosY[e - 1]
                }
            },
            this)
        },
        a.prototype.initAnim = function() {
            var t = this;
            if (this.spaceAnim = SpineUtil.createAnimate("spaceshipmap"), this.grpShip.addChildAt(this.spaceAnim, 0), this.spaceAnim.touchEnabled = !1, this.spaceAnim.x = 604, this.spaceAnim.y = 334, this.spaceAnim.touchEnabled = !1, this.spaceAnim.touchChildren = !1, MapManager.hasEnterShip) this.spaceAnim.visible = !1,
            this.addEvent();
            else {
                MapManager.hasEnterShip = !0,
                this.grpContent.alpha = 0;
                var i = this.spaceAnim.play(this.animStr[0], 1);
                i.waitEvent().then(function(i) {
                    t.addEvent(),
                    console.log(i),
                    t.grpContent.alpha = 1
                }),
                i.on(1,
                function() {
                    t.spaceAnim.visible = !1
                })
            }
        },
        a.prototype.addEvent = function() {
            ImageButtonUtil.add(this.imgbtnClose, this.onTouchTapImageButton, this),
            EventManager.addEventListener("shipModuleClose", this.closePanel, this),
            EventManager.addEventListener("OtherTouch", this.otherTouch, this),
            this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closePop, this)
        },
        a.prototype.otherTouch = function(i) {
            this.popShow = !0,
            this.spaceAnim.visible = !1,
            this.pop.removeChildren();
            for (var a = 1; a <= this.btns.length; a++) this.shipGroup.getChildAt(a - 1).touchEnabled = i.data != a,
            this.shipGroup.getChildAt(a - 1).touchChildren = i.data != a,
            i.data == a && (this.spaceAnim.visible = !0, this.spaceAnim.play(this.animStr[a], 1)),
            this.btns[a - 1].xuanzhong.visible = i.data == a;
            var e = new t.WorldmapshipBtnPop(this.maps[i.data - 1]);
            this.pop.addChild(e),
            e.x = t.ShipBtnsPosition.PopX[i.data - 1],
            e.y = t.ShipBtnsPosition.PopY[i.data - 1]
        },
        a.prototype.closePop = function() {
            if (this.popShow) {
                this.popShow = !1,
                this.spaceAnim.visible = !1,
                this.pop.removeChildren();
                for (var t = 1; t <= this.btns.length; t++) this.btns[t - 1].xuanzhong.visible = !1,
                this.shipGroup.getChildAt(t - 1).touchEnabled = !0,
                this.shipGroup.getChildAt(t - 1).touchChildren = !0
            }
        },
        a.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.imgbtnClose:
                this.onClose(),
                ModuleManager.showModuleByID(config.ModuleConst.WORLD_MAP)
            }
        },
        a.prototype.closePanel = function() {
            this.onClose()
        },
        a.prototype.destroy = function() {
            this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closePop, this),
            i.prototype.destroy.call(this),
            EventManager.removeEventListener("OtherTouch", this.otherTouch, this),
            EventManager.removeEventListener("shipModuleClose", this.closePanel, this)
        },
        a
    } (BaseModule);
    t.WorldMapShipPanel = i,
    __reflect(i.prototype, "worldMap.WorldMapShipPanel")
} (worldMap || (worldMap = {}));
var __reflect = this && this.__reflect ||
function(t, i, a) {
    t.__class__ = i,
    a ? a.push(i) : a = [i],
    t.__types__ = t.__types__ ? a.concat(t.__types__) : a
},
__extends = this && this.__extends ||
function(t, i) {
    function a() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    a.prototype = i.prototype,
    t.prototype = new a
},
worldMap; !
function(t) {
    var i = function(t) {
        function i(i) {
            var a = t.call(this) || this;
            return a._data = i,
            a.skinName = worldMapShip.WorldmapShitBtnPopSkin,
            a
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGo,
            function() {
                1 == t._data.isopen ? (EventManager.dispatchEvent(new egret.Event("shipModuleClose")), MapManager.changeMap(t._data.Gotomap)) : Alarm.show("暂未开放，敬请期待！")
            },
            this)
        },
        i.prototype.startRemoveDialog = function(t) {
            t.target instanceof i || this.hide()
        },
        i.prototype.updateData = function() {
            this.title.text = this._data.name;
            var t = this._data.intro,
            i = this._data.fun;
            this.txt.textFlow = (new egret.HtmlTextParser).parser(t);
            var a = i.split("_");
            this.starName.visible = "" != a[0],
            this.starName.y = this.txt.y + this.txt.height + 32,
            this.grp_subTitle.y = this.starName.y + 24,
            this.btnGo.y = "" == a[0] ? this.txt.y + this.txt.height + 66 : this["grp_choose" + a.length].y + 88 + this.grp_subTitle.y,
            this.popBg.height = this.btnGo.y + 60;
            for (var e = 0; 3 > e; e++) e < a.length ? (this["grp_choose" + (e + 1)].visible = "" != a[e], this["txt_intro" + (e + 1)].text = a[e]) : this["grp_choose" + (e + 1)].visible = !1
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseModule);
    t.WorldmapshipBtnPop = i,
    __reflect(i.prototype, "worldMap.WorldmapshipBtnPop")
} (worldMap || (worldMap = {})),
window.worldMapShip = window.worldMapShip || {};
var __extends = this && this.__extends ||
function(t, i) {
    function a() {
        this.constructor = t
    }
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    a.prototype = i.prototype,
    t.prototype = new a
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/ship/WorldmapshipItemRenderNewSkin.exml"] = window.WorldmapshipItemRenderNewSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["xuanzhong", "seerMapEnter", "btn_ship", "grp_ship"],
        this.height = 58,
        this.width = 237,
        this.elementsContent = [this.grp_ship_i()],
        this.states = [new eui.State("left", [new eui.SetProperty("seerMapEnter", "source", "worlmapship_dingweiL_png")]), new eui.State("right", [new eui.SetProperty("xuanzhong", "x", 0), new eui.SetProperty("seerMapEnter", "x", 185), new eui.SetProperty("seerMapEnter", "source", "worlmapship_dingweiR_png")])]
    }
    __extends(i, t);
    var a = i.prototype;
    return a.grp_ship_i = function() {
        var t = new eui.Group;
        return this.grp_ship = t,
        t.elementsContent = [this.xuanzhong_i(), this.seerMapEnter_i(), this.btn_ship_i()],
        t
    },
    a.xuanzhong_i = function() {
        var t = new eui.Image;
        return this.xuanzhong = t,
        t.source = "worlmapship_xuanzhong_png",
        t.x = 38,
        t.y = 5,
        t
    },
    a.seerMapEnter_i = function() {
        var t = new eui.Image;
        return this.seerMapEnter = t,
        t.x = 0,
        t.y = 0,
        t
    },
    a.btn_ship_i = function() {
        var t = new eui.Image;
        return this.btn_ship = t,
        t.x = 45,
        t.y = 1,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ship/WorldmapshipItemRenderSkin.exml"] = window.WorldmapshipItemRenderSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["img"],
        this.height = 218,
        this.width = 193,
        this.elementsContent = [this.img_i()]
    }
    __extends(i, t);
    var a = i.prototype;
    return a.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.x = 98,
        t.y = 127,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ship/WorldmapShitBtnPopSkin.exml"] = window.worldMapShip.WorldmapShitBtnPopSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["popBg", "starName", "txt_intro1", "grp_choose1", "txt_intro2", "grp_choose2", "txt_intro3", "grp_choose3", "grp_subTitle", "txt", "title", "btnGo", "pop"],
        this.height = 439,
        this.width = 255,
        this.elementsContent = [this.pop_i()]
    }
    __extends(i, t);
    var a = i.prototype;
    return a.pop_i = function() {
        var t = new eui.Group;
        return this.pop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.popBg_i(), this.starName_i(), this.grp_subTitle_i(), this.txt_i(), this.title_i(), this.btnGo_i()],
        t
    },
    a.popBg_i = function() {
        var t = new eui.Image;
        return this.popBg = t,
        t.scale9Grid = new egret.Rectangle(85, 146, 85, 147),
        t.source = "wms_pop_starpanelbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.starName_i = function() {
        var t = new eui.Label;
        return this.starName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "场景功能：",
        t.textColor = 8631282,
        t.x = 44,
        t.y = 208,
        t
    },
    a.grp_subTitle_i = function() {
        var t = new eui.Group;
        return this.grp_subTitle = t,
        t.x = 45,
        t.y = 232,
        t.elementsContent = [this.grp_choose1_i(), this.grp_choose2_i(), this.grp_choose3_i()],
        t
    },
    a.grp_choose1_i = function() {
        var t = new eui.Group;
        return this.grp_choose1 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_intro1_i()],
        t
    },
    a._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "wms_pop_gongnengtiao_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.txt_intro1_i = function() {
        var t = new eui.Label;
        return this.txt_intro1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "主线剧情",
        t.textColor = 8631282,
        t.x = 14,
        t.y = 9,
        t
    },
    a.grp_choose2_i = function() {
        var t = new eui.Group;
        return this.grp_choose2 = t,
        t.x = 0,
        t.y = 38,
        t.elementsContent = [this._Image2_i(), this.txt_intro2_i()],
        t
    },
    a._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "wms_pop_gongnengtiao_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.txt_intro2_i = function() {
        var t = new eui.Label;
        return this.txt_intro2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "场景传送",
        t.textColor = 8631282,
        t.x = 14,
        t.y = 9,
        t
    },
    a.grp_choose3_i = function() {
        var t = new eui.Group;
        return this.grp_choose3 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 76,
        t.elementsContent = [this._Image3_i(), this.txt_intro3_i()],
        t
    },
    a._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "wms_pop_gongnengtiao_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.txt_intro3_i = function() {
        var t = new eui.Label;
        return this.txt_intro3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵学习计划",
        t.textColor = 8631282,
        t.x = 14,
        t.y = 10,
        t
    },
    a.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "飞船的驾驶室，罗杰\n船长的战略会议中心，\n赛尔号最大会议室，\n是飞船绝对的精神核\n心！",
        t.textColor = 6388143,
        t.width = 175,
        t.x = 46,
        t.y = 68,
        t
    },
    a.title_i = function() {
        var t = new eui.Label;
        return this.title = t,
        t.bold = !0,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "船长室",
        t.textAlign = "center",
        t.textColor = 4187130,
        t.width = 198,
        t.x = 28,
        t.y = 35,
        t
    },
    a.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "wms_pop_btnqw_png",
        t.x = 83,
        t.y = 366,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ship/WorlmapshipSkin.exml"] = window.WorlmapshipSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["bg", "feichuan", "ship", "shipGroup", "pop", "imgbtnClose", "grpContent", "grpShip", "btnShips"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grpShip_i(), this.btnShips_i()]
    }
    __extends(i, t);
    var a = i.prototype;
    return a.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "worlmapship_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    a.grpShip_i = function() {
        var t = new eui.Group;
        return this.grpShip = t,
        t.horizontalCenter = -6.5,
        t.touchEnabled = !1,
        t.y = 0,
        t.elementsContent = [this.grpContent_i()],
        t
    },
    a.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 30,
        t.y = 6,
        t.elementsContent = [this.ship_i(), this.shipGroup_i(), this.pop_i(), this.imgbtnClose_i()],
        t
    },
    a.ship_i = function() {
        var t = new eui.Group;
        return this.ship = t,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 223,
        t.y = 48,
        t.elementsContent = [this.feichuan_i()],
        t
    },
    a.feichuan_i = function() {
        var t = new eui.Image;
        return this.feichuan = t,
        t.source = "worlmapship_feichuan_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    a.shipGroup_i = function() {
        var t = new eui.Group;
        return this.shipGroup = t,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 0,
        t.y = 45,
        t
    },
    a.pop_i = function() {
        var t = new eui.Group;
        return this.pop = t,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 219,
        t.y = 34,
        t
    },
    a.imgbtnClose_i = function() {
        var t = new eui.Image;
        return this.imgbtnClose = t,
        t.height = 43,
        t.source = "common_pop_btn_close_png",
        t.visible = !0,
        t.width = 43,
        t.x = 1030,
        t.y = 0,
        t
    },
    a.btnShips_i = function() {
        var t = new eui.Group;
        return this.btnShips = t,
        t.height = 512,
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 999,
        t.x = 75,
        t.y = 53,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WorldmapSkin.exml"] = window.WorldmapSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["bg1", "bg", "imgBtnShip", "imgBtnWorld", "imgBtnuWorld", "tip1", "tip2", "tip3", "shipTitle", "ship_line", "ship", "universeTitle", "universe_line", "universe", "unkownuniverseTitle", "unkownuniverse_line", "unkownuniverse", "btnGroup", "img2", "img1", "imgBtnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg1_i(), this.bg_i(), this.btnGroup_i(), this.img2_i(), this.img1_i(), this.imgBtnClose_i()]
    }
    __extends(i, t);
    var a = i.prototype;
    return a.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t.source = "worldMap_bg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t.source = "worldMap_bg_jpg",
        t.x = 0,
        t.y = 0,
        t
    },
    a.btnGroup_i = function() {
        var t = new eui.Group;
        return this.btnGroup = t,
        t.height = 553,
        t.horizontalCenter = 24.5,
        t.verticalCenter = -5.5,
        t.visible = !0,
        t.width = 1047,
        t.elementsContent = [this.imgBtnShip_i(), this.imgBtnWorld_i(), this.imgBtnuWorld_i(), this.tip1_i(), this.tip2_i(), this.tip3_i(), this.ship_i(), this.universe_i(), this.unkownuniverse_i()],
        t
    },
    a.imgBtnShip_i = function() {
        var t = new eui.Image;
        return this.imgBtnShip = t,
        t.height = 333,
        t.source = "worldMap_imgBtnShip_png",
        t.visible = !1,
        t.width = 288,
        t.x = 622,
        t.y = 220,
        t
    },
    a.imgBtnWorld_i = function() {
        var t = new eui.Image;
        return this.imgBtnWorld = t,
        t.height = 271,
        t.source = "worldMap_imgBtnWorld_png",
        t.visible = !1,
        t.width = 254,
        t.x = 319,
        t.y = 0,
        t
    },
    a.imgBtnuWorld_i = function() {
        var t = new eui.Image;
        return this.imgBtnuWorld = t,
        t.height = 298,
        t.source = "worldMap_imgBtnuWorld_png",
        t.visible = !1,
        t.width = 279,
        t.x = 0,
        t.y = 136,
        t
    },
    a.tip1_i = function() {
        var t = new eui.Image;
        return this.tip1 = t,
        t.height = 94,
        t.source = "worldMap_tip1_png",
        t.visible = !1,
        t.width = 213,
        t.x = 834,
        t.y = 220,
        t
    },
    a.tip2_i = function() {
        var t = new eui.Image;
        return this.tip2 = t,
        t.height = 94,
        t.source = "worldMap_tip2_png",
        t.visible = !1,
        t.width = 209,
        t.x = 526,
        t.y = 120,
        t
    },
    a.tip3_i = function() {
        var t = new eui.Image;
        return this.tip3 = t,
        t.height = 94,
        t.source = "worldMap_tip3_png",
        t.visible = !1,
        t.width = 209,
        t.x = 224,
        t.y = 280,
        t
    },
    a.ship_i = function() {
        var t = new eui.Group;
        return this.ship = t,
        t.visible = !0,
        t.x = 834,
        t.y = 220,
        t.elementsContent = [this.shipTitle_i(), this.ship_line_i()],
        t
    },
    a.shipTitle_i = function() {
        var t = new eui.Image;
        return this.shipTitle = t,
        t.height = 50,
        t.source = "worldMap_tip1_png",
        t.visible = !0,
        t.width = 164,
        t.x = 49,
        t.y = 0,
        t
    },
    a.ship_line_i = function() {
        var t = new eui.Image;
        return this.ship_line = t,
        t.height = 45,
        t.source = "worldMap_tipLine_png",
        t.visible = !0,
        t.width = 135,
        t.x = 0,
        t.y = 49,
        t
    },
    a.universe_i = function() {
        var t = new eui.Group;
        return this.universe = t,
        t.x = 526,
        t.y = 120,
        t.elementsContent = [this.universeTitle_i(), this.universe_line_i()],
        t
    },
    a.universeTitle_i = function() {
        var t = new eui.Image;
        return this.universeTitle = t,
        t.height = 50,
        t.source = "worldMap_tip2_png",
        t.width = 164,
        t.x = 45,
        t.y = 0,
        t
    },
    a.universe_line_i = function() {
        var t = new eui.Image;
        return this.universe_line = t,
        t.height = 45,
        t.source = "worldMap_tipLine_png",
        t.width = 134,
        t.x = 0,
        t.y = 49,
        t
    },
    a.unkownuniverse_i = function() {
        var t = new eui.Group;
        return this.unkownuniverse = t,
        t.visible = !0,
        t.x = 224,
        t.y = 280,
        t.elementsContent = [this.unkownuniverseTitle_i(), this.unkownuniverse_line_i()],
        t
    },
    a.unkownuniverseTitle_i = function() {
        var t = new eui.Image;
        return this.unkownuniverseTitle = t,
        t.height = 50,
        t.source = "worldMap_tip3_png",
        t.width = 164,
        t.x = 45,
        t.y = 0,
        t
    },
    a.unkownuniverse_line_i = function() {
        var t = new eui.Image;
        return this.unkownuniverse_line = t,
        t.height = 45,
        t.source = "worldMap_tipLine_png",
        t.width = 134,
        t.x = 0,
        t.y = 49,
        t
    },
    a.img2_i = function() {
        var t = new eui.Image;
        return this.img2 = t,
        t.height = 48,
        t.horizontalCenter = 0,
        t.source = "worldMap_img2_png",
        t.width = 1016,
        t.y = 0,
        t
    },
    a.img1_i = function() {
        var t = new eui.Image;
        return this.img1 = t,
        t.height = 109,
        t.horizontalCenter = 1,
        t.source = "worldMap_img1_png",
        t.width = 1134,
        t.y = 531,
        t
    },
    a.imgBtnClose_i = function() {
        var t = new eui.Image;
        return this.imgBtnClose = t,
        t.height = 41,
        t.right = 7,
        t.source = "worldMap_imgBtnClose_png",
        t.top = 8,
        t.width = 41,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WorldmapstarItemRenderSkin.exml"] = window.WorldmapstarItemRenderSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["ItemImg", "itemBg", "itemName", "selectImg", "lockImg"],
        this.height = 112,
        this.width = 262,
        this.elementsContent = [this.ItemImg_i(), this.itemBg_i(), this.itemName_i(), this.selectImg_i(), this.lockImg_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("selectImg", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(i, t);
    var a = i.prototype;
    return a.ItemImg_i = function() {
        var t = new eui.Image;
        return this.ItemImg = t,
        t.height = 112,
        t.source = "",
        t.width = 262,
        t.x = 0,
        t.y = 0,
        t
    },
    a.itemBg_i = function() {
        var t = new eui.Image;
        return this.itemBg = t,
        t.height = 30,
        t.source = "worldMapStar_itemBg_png",
        t.visible = !1,
        t.width = 122,
        t.x = 138,
        t.y = 80,
        t
    },
    a.itemName_i = function() {
        var t = new eui.Label;
        return this.itemName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.height = 20,
        t.size = 20,
        t.text = "帕诺星系",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.visible = !1,
        t.width = 80,
        t.x = 168,
        t.y = 83,
        t
    },
    a.selectImg_i = function() {
        var t = new eui.Image;
        return this.selectImg = t,
        t.height = 112,
        t.source = "worldMap_select_png",
        t.width = 262,
        t.x = 0,
        t.y = 0,
        t
    },
    a.lockImg_i = function() {
        var t = new eui.Image;
        return this.lockImg = t,
        t.height = 112,
        t.source = "worldMap_lock_png",
        t.width = 262,
        t.x = 0,
        t.y = 0,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WorldmapstarSkin.exml"] = window.WorldmapstarSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["bg1", "bg", "sBg", "sBg1", "sBg2", "sBg3", "map_start_20101", "map_startTitle_20101", "start_20101", "map_start_20102", "map_startTitle_20102", "start_20102", "map_start_20103", "map_startTitle_20103", "start_20103", "map_start_20104", "map_startTitle_20104", "start_20104", "map_start_20105", "map_startTitle_20105", "start_20105", "map_start_20106", "map_startTitle_20106", "start_20106", "map_start_20107", "map_startTitle_20107", "start_20107", "map_start_20108", "map_startTitle_20108", "start_20108", "map_start_20109", "map_startTitle_20109", "start_20109", "map_start_20110", "map_startTitle_20110", "start_20110", "map_start_20111", "map_startTitle_20111", "start_20111", "map_start_20112", "map_startTitle_20112", "start_20112", "map_start_20113", "map_startTitle_20113", "start_20113", "map_start_20114", "map_startTitle_20114", "start_20114", "map_start_20115", "map_startTitle_20115", "start_20115", "stars_201", "map_start_20201", "map_startTitle_20201", "start_20201", "map_start_20202", "map_startTitle_20202", "start_20202", "map_start_20203", "map_startTitle_20203", "start_20203", "map_start_20204", "map_startTitle_20204", "start_20204", "map_start_20205", "map_startTitle_20205", "start_20205", "map_start_20206", "map_startTitle_20206", "start_20206", "map_start_20207", "map_startTitle_20207", "start_20207", "map_start_20208", "map_startTitle_20208", "start_20208", "map_start_20209", "map_startTitle_20209", "start_20209", "map_start_20210", "map_startTitle_20210", "start_20210", "map_start_20211", "map_startTitle_20211", "start_20211", "map_start_20212", "map_startTitle_20212", "start_20212", "map_start_20213", "map_startTitle_20213", "start_20213", "stars_202", "map_start_20301", "map_startTitle_20301", "start_20301", "map_start_20302", "map_startTitle_20302", "start_20302", "map_start_20303", "map_startTitle_20303", "start_20303", "map_start_20304", "map_startTitle_20304", "start_20304", "map_start_20305", "map_startTitle_20305", "start_20305", "map_start_20306", "map_startTitle_20306", "start_20306", "map_start_20307", "map_startTitle_20307", "start_20307", "map_start_20308", "map_startTitle_20308", "start_20308", "map_start_20309", "map_startTitle_20309", "start_20309", "map_start_20310", "map_startTitle_20310", "start_20310", "map_start_20311", "map_startTitle_20311", "start_20311", "stars_203", "map_start_20401", "map_startTitle_20401", "start_20401", "map_start_20402", "map_startTitle_20402", "start_20402", "map_start_20403", "map_startTitle_20403", "start_20403", "map_start_20404", "map_startTitle_20404", "start_20404", "map_start_20405", "map_startTitle_20405", "start_20405", "map_start_20406", "map_startTitle_20406", "start_20406", "map_start_20407", "map_startTitle_20407", "start_20407", "map_start_20408", "map_startTitle_20408", "start_20408", "map_start_20409", "map_startTitle_20409", "start_20409", "map_start_20410", "map_startTitle_20410", "start_20410", "map_start_20411", "map_startTitle_20411", "start_20411", "map_start_20412", "map_startTitle_20412", "start_20412", "map_start_20413", "map_startTitle_20413", "start_20413", "stars_204", "map_start_20501", "map_startTitle_20501", "start_20501", "map_start_20502", "map_startTitle_20502", "start_20502", "map_start_20503", "map_startTitle_20503", "start_20503", "map_start_20504", "map_startTitle_20504", "start_20504", "map_start_20505", "map_startTitle_20505", "start_20505", "map_start_20506", "map_startTitle_20506", "start_20506", "map_start_20507", "map_startTitle_20507", "start_20507", "map_start_20508", "map_startTitle_20508", "start_20508", "map_start_20509", "map_startTitle_20509", "start_20509", "map_start_20510", "map_startTitle_20510", "start_205010", "map_start_20511", "map_startTitle_20511", "start_205011", "stars_205", "map_start_20601", "map_startTitle_20601", "start_20601", "map_start_20602", "map_startTitle_20602", "start_20602", "map_start_20603", "map_startTitle_20603", "start_20603", "map_start_20604", "map_startTitle_20604", "start_20604", "map_start_20605", "map_startTitle_20605", "start_20605", "map_start_20606", "map_startTitle_20606", "start_20606", "map_start_20607", "map_startTitle_20607", "start_20607", "map_start_20608", "map_startTitle_20608", "start_20608", "map_start_20609", "map_startTitle_20609", "start_20609", "stars_206", "map_start_20701", "map_startTitle_20701", "start_20701", "map_start_20702", "map_startTitle_20702", "start_20702", "map_start_20703", "map_startTitle_20703", "start_20703", "map_start_20704", "map_startTitle_20704", "start_20704", "stars_207", "map_start_20801", "map_startTitle_20801", "start_20801", "map_start_20802", "map_startTitle_20802", "start_20802", "map_start_20803", "map_startTitle_20803", "start_20803", "map_start_20804", "map_startTitle_20804", "start_20804", "stars_208", "map_start_21001", "map_startTitle_21001", "start_21001", "map_start_21002", "map_startTitle_21002", "start_21002", "map_start_21003", "map_startTitle_21003", "start_21003", "map_start_21004", "map_startTitle_21004", "start_21004", "map_start_21005", "map_startTitle_21005", "start_21005", "map_start_21006", "map_startTitle_21006", "start_21006", "map_start_21007", "map_startTitle_21007", "start_21007", "map_start_21008", "map_startTitle_21008", "start_21008", "map_start_21009", "map_startTitle_21009", "start_21009", "map_start_21010", "map_startTitle_21010", "start_21010", "stars_210", "stars", "map_bstars_20901", "map_startTitle_20901", "bstars_20901", "map_bstars_20903", "map_startTitle_20903", "bstars_20903", "map_bstars_20902", "map_startTitle_20902", "bstars_20902", "map_bstars_20904", "map_startTitle_20904", "bstars_20904", "map_bstars_20906", "map_startTitle_20906", "bstars_20906", "map_bstars_20905", "map_startTitle_20905", "bstars_20905", "bstars_209", "map_bstars_21103", "map_startTitle_21103", "bstars_21103", "map_bstars_21104", "map_startTitle_21104", "bstars_21104", "map_bstars_21101", "map_startTitle_21101", "bstars_21101", "map_bstars_21102", "map_startTitle_21102", "bstars_21102", "map_bstars_21105", "map_startTitle_21105", "bstars_21105", "bstars_211", "map_bstars_21209", "map_startTitle_21209", "bstars_21209", "map_bstars_21207", "map_startTitle_21207", "bstars_21207", "map_bstars_21208", "map_startTitle_21208", "bstars_21208", "map_bstars_21202", "map_startTitle_21202", "bstars_21202", "map_bstars_21201", "map_startTitle_21201", "bstars_21201", "map_bstars_21206", "map_startTitle_21206", "bstars_21206", "map_bstars_21205", "map_startTitle_21205", "bstars_21205", "map_bstars_21204", "map_startTitle_21204", "bstars_21204", "map_bstars_21203", "map_startTitle_21203", "bstars_21203", "bstars_212", "map_bstars_21305", "map_startTitle_21305", "bstars_21305", "map_bstars_21302", "map_startTitle_21302", "bstars_21302", "map_bstars_21303", "map_startTitle_21303", "bstars_21303", "map_bstars_21304", "map_startTitle_21304", "bstars_21304", "map_bstars_21301", "map_startTitle_21301", "bstars_21301", "bstars_213", "map_bstars_21402", "map_startTitle_21402", "bstars_21402", "map_bstars_21401", "map_startTitle_21401", "bstars_21401", "map_bstars_21405", "map_startTitle_213405", "bstars_21405", "map_bstars_21403", "map_startTitle_21403", "bstars_21403", "map_bstars_21404", "map_startTitle_21404", "bstars_21404", "bstars_214", "Bstars", "tmp4", "tmp3", "imgBtnHide", "scl_items_viewport", "scl_items", "itemRen", "showG", "tmp1", "tmp", "imgOpenBtn", "hideG", "left", "gBg", "gName", "galaxy", "imgBtnClose", "diBg", "starpanelBg", "starName", "imgBtnGo", "imgNotOpen", "starDes", "starImage", "panelG", "mapTip"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg1_i(), this.bg_i(), this.stars_i(), this.Bstars_i(), this.left_i(), this.galaxy_i(), this.imgBtnClose_i(), this.mapTip_i()]
    }
    __extends(i, t);
    var a = i.prototype;
    return a.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.percentHeight = 100,
        t.source = "worldMapStar_bg1_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    a.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "worldMap_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    a.stars_i = function() {
        var t = new eui.Group;
        return this.stars = t,
        t.percentHeight = 100,
        t.touchEnabled = !1,
        t.visible = !1,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.sBg_i(), this.sBg1_i(), this.sBg2_i(), this.sBg3_i(), this.stars_201_i(), this.stars_202_i(), this.stars_203_i(), this.stars_204_i(), this.stars_205_i(), this.stars_206_i(), this.stars_207_i(), this.stars_208_i(), this.stars_210_i()],
        t
    },
    a.sBg_i = function() {
        var t = new eui.Image;
        return this.sBg = t,
        t.source = "worldMapStar_sBg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    a.sBg1_i = function() {
        var t = new eui.Image;
        return this.sBg1 = t,
        t.height = 18,
        t.source = "worldMapStar_sBg1_png",
        t.visible = !0,
        t.width = 18,
        t.x = 347,
        t.y = 429,
        t
    },
    a.sBg2_i = function() {
        var t = new eui.Image;
        return this.sBg2 = t,
        t.height = 18,
        t.source = "worldMapStar_sBg1_png",
        t.visible = !0,
        t.width = 18,
        t.x = 612,
        t.y = 564,
        t
    },
    a.sBg3_i = function() {
        var t = new eui.Image;
        return this.sBg3 = t,
        t.height = 18,
        t.source = "worldMapStar_sBg1_png",
        t.width = 18,
        t.x = 753,
        t.y = 96,
        t
    },
    a.stars_201_i = function() {
        var t = new eui.Group;
        return this.stars_201 = t,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 57,
        t.y = 71,
        t.elementsContent = [this.start_20101_i(), this.start_20102_i(), this.start_20103_i(), this.start_20104_i(), this.start_20105_i(), this.start_20106_i(), this.start_20107_i(), this.start_20108_i(), this.start_20109_i(), this.start_20110_i(), this.start_20111_i(), this.start_20112_i(), this.start_20113_i(), this.start_20114_i(), this.start_20115_i()],
        t
    },
    a.start_20101_i = function() {
        var t = new eui.Group;
        return this.start_20101 = t,
        t.x = 33,
        t.y = 140,
        t.elementsContent = [this.map_start_20101_i(), this.map_startTitle_20101_i()],
        t
    },
    a.map_start_20101_i = function() {
        var t = new eui.Image;
        return this.map_start_20101 = t,
        t.height = 89,
        t.name = "map_start_20101",
        t.source = "worldMapStar_map_start_20101_png",
        t.width = 90,
        t.x = 23,
        t.y = 0,
        t
    },
    a.map_startTitle_20101_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20101 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20101_png",
        t.width = 136,
        t.x = 0,
        t.y = 67,
        t
    },
    a.start_20102_i = function() {
        var t = new eui.Group;
        return this.start_20102 = t,
        t.x = 597,
        t.y = 0,
        t.elementsContent = [this.map_start_20102_i(), this.map_startTitle_20102_i()],
        t
    },
    a.map_start_20102_i = function() {
        var t = new eui.Image;
        return this.map_start_20102 = t,
        t.height = 94,
        t.name = "map_start_20102",
        t.source = "worldMapStar_map_start_20102_png",
        t.width = 95,
        t.x = 10,
        t.y = 0,
        t
    },
    a.map_startTitle_20102_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20102 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20102_png",
        t.width = 115,
        t.x = 0,
        t.y = 62,
        t
    },
    a.start_20103_i = function() {
        var t = new eui.Group;
        return this.start_20103 = t,
        t.x = 635,
        t.y = 407,
        t.elementsContent = [this.map_start_20103_i(), this.map_startTitle_20103_i()],
        t
    },
    a.map_start_20103_i = function() {
        var t = new eui.Image;
        return this.map_start_20103 = t,
        t.height = 79,
        t.name = "map_start_20103",
        t.source = "worldMapStar_map_start_20103_png",
        t.width = 104,
        t.x = 16,
        t.y = 0,
        t
    },
    a.map_startTitle_20103_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20103 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20103_png",
        t.width = 136,
        t.x = 0,
        t.y = 58,
        t
    },
    a.start_20104_i = function() {
        var t = new eui.Group;
        return this.start_20104 = t,
        t.x = 862,
        t.y = 102,
        t.elementsContent = [this.map_start_20104_i(), this.map_startTitle_20104_i()],
        t
    },
    a.map_start_20104_i = function() {
        var t = new eui.Image;
        return this.map_start_20104 = t,
        t.height = 90,
        t.name = "map_start_20104",
        t.source = "worldMapStar_map_start_20104_png",
        t.width = 90,
        t.x = 13,
        t.y = 0,
        t
    },
    a.map_startTitle_20104_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20104 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20104_png",
        t.width = 115,
        t.x = 0,
        t.y = 65,
        t
    },
    a.start_20105_i = function() {
        var t = new eui.Group;
        return this.start_20105 = t,
        t.x = 0,
        t.y = 330,
        t.elementsContent = [this.map_start_20105_i(), this.map_startTitle_20105_i()],
        t
    },
    a.map_start_20105_i = function() {
        var t = new eui.Image;
        return this.map_start_20105 = t,
        t.height = 88,
        t.name = "map_start_20105",
        t.source = "worldMapStar_map_start_20105_png",
        t.width = 87,
        t.x = 15,
        t.y = 0,
        t
    },
    a.map_startTitle_20105_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20105 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20105_png",
        t.width = 115,
        t.x = 0,
        t.y = 62,
        t
    },
    a.start_20106_i = function() {
        var t = new eui.Group;
        return this.start_20106 = t,
        t.x = 270,
        t.y = 26,
        t.elementsContent = [this.map_start_20106_i(), this.map_startTitle_20106_i()],
        t
    },
    a.map_start_20106_i = function() {
        var t = new eui.Image;
        return this.map_start_20106 = t,
        t.height = 83,
        t.name = "map_start_20106",
        t.source = "worldMapStar_map_start_20106_png",
        t.width = 84,
        t.x = 30,
        t.y = 0,
        t
    },
    a.map_startTitle_20106_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20106 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20106_png",
        t.width = 143,
        t.x = 0,
        t.y = 62,
        t
    },
    a.start_20107_i = function() {
        var t = new eui.Group;
        return this.start_20107 = t,
        t.x = 229,
        t.y = 175,
        t.elementsContent = [this.map_start_20107_i(), this.map_startTitle_20107_i()],
        t
    },
    a.map_start_20107_i = function() {
        var t = new eui.Image;
        return this.map_start_20107 = t,
        t.height = 89,
        t.name = "map_start_20107",
        t.source = "worldMapStar_map_start_20107_png",
        t.width = 89,
        t.x = 24,
        t.y = 0,
        t
    },
    a.map_startTitle_20107_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20107 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20107_png",
        t.width = 136,
        t.x = 0,
        t.y = 62,
        t
    },
    a.start_20108_i = function() {
        var t = new eui.Group;
        return this.start_20108 = t,
        t.x = 683,
        t.y = 152,
        t.elementsContent = [this.map_start_20108_i(), this.map_startTitle_20108_i()],
        t
    },
    a.map_start_20108_i = function() {
        var t = new eui.Image;
        return this.map_start_20108 = t,
        t.height = 89,
        t.name = "map_start_20108",
        t.source = "worldMapStar_map_start_20108_png",
        t.width = 89,
        t.x = 24,
        t.y = 0,
        t
    },
    a.map_startTitle_20108_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20108 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20108_png",
        t.width = 136,
        t.x = 0,
        t.y = 65,
        t
    },
    a.start_20109_i = function() {
        var t = new eui.Group;
        return this.start_20109 = t,
        t.x = 886,
        t.y = 211,
        t.elementsContent = [this.map_start_20109_i(), this.map_startTitle_20109_i()],
        t
    },
    a.map_start_20109_i = function() {
        var t = new eui.Image;
        return this.map_start_20109 = t,
        t.height = 114,
        t.name = "map_start_20109",
        t.source = "worldMapStar_map_start_20109_png",
        t.width = 77,
        t.x = 27,
        t.y = 0,
        t
    },
    a.map_startTitle_20109_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20109 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20109_png",
        t.width = 115,
        t.x = 0,
        t.y = 79,
        t
    },
    a.start_20110_i = function() {
        var t = new eui.Group;
        return this.start_20110 = t,
        t.x = 326,
        t.y = 309,
        t.elementsContent = [this.map_start_20110_i(), this.map_startTitle_20110_i()],
        t
    },
    a.map_start_20110_i = function() {
        var t = new eui.Image;
        return this.map_start_20110 = t,
        t.height = 91,
        t.name = "map_start_20110",
        t.source = "worldMapStar_map_start_20110_png",
        t.width = 102,
        t.x = 17,
        t.y = 0,
        t
    },
    a.map_startTitle_20110_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20110 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20110_png",
        t.width = 136,
        t.x = 0,
        t.y = 61,
        t
    },
    a.start_20111_i = function() {
        var t = new eui.Group;
        return this.start_20111 = t,
        t.x = 815,
        t.y = 340,
        t.elementsContent = [this.map_start_20111_i(), this.map_startTitle_20111_i()],
        t
    },
    a.map_start_20111_i = function() {
        var t = new eui.Image;
        return this.map_start_20111 = t,
        t.height = 85,
        t.name = "map_start_20111",
        t.source = "worldMapStar_map_start_20111_png",
        t.width = 96,
        t.x = 5,
        t.y = 0,
        t
    },
    a.map_startTitle_20111_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20111 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20111_png",
        t.width = 115,
        t.x = 0,
        t.y = 58,
        t
    },
    a.start_20112_i = function() {
        var t = new eui.Group;
        return this.start_20112 = t,
        t.x = 598,
        t.y = 297,
        t.elementsContent = [this.map_start_20112_i(), this.map_startTitle_20112_i()],
        t
    },
    a.map_start_20112_i = function() {
        var t = new eui.Image;
        return this.map_start_20112 = t,
        t.height = 59,
        t.name = "map_start_20112",
        t.source = "worldMapStar_map_start_20112_png",
        t.width = 97,
        t.x = 9,
        t.y = 0,
        t
    },
    a.map_startTitle_20112_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20112 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20112_png",
        t.width = 115,
        t.x = 0,
        t.y = 46,
        t
    },
    a.start_20113_i = function() {
        var t = new eui.Group;
        return this.start_20113 = t,
        t.x = 151,
        t.y = 428,
        t.elementsContent = [this.map_start_20113_i(), this.map_startTitle_20113_i()],
        t
    },
    a.map_start_20113_i = function() {
        var t = new eui.Image;
        return this.map_start_20113 = t,
        t.height = 94,
        t.name = "map_start_20113",
        t.source = "worldMapStar_map_start_20113_png",
        t.width = 109,
        t.x = 17,
        t.y = 0,
        t
    },
    a.map_startTitle_20113_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20113 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20113_png",
        t.width = 136,
        t.x = 0,
        t.y = 72,
        t
    },
    a.start_20114_i = function() {
        var t = new eui.Group;
        return this.start_20114 = t,
        t.x = 408,
        t.y = 431,
        t.elementsContent = [this.map_start_20114_i(), this.map_startTitle_20114_i()],
        t
    },
    a.map_start_20114_i = function() {
        var t = new eui.Image;
        return this.map_start_20114 = t,
        t.height = 99,
        t.name = "map_start_20114",
        t.source = "worldMapStar_map_start_20114_png",
        t.width = 114,
        t.x = 11,
        t.y = 0,
        t
    },
    a.map_startTitle_20114_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20114 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20114_png",
        t.width = 136,
        t.x = 0,
        t.y = 69,
        t
    },
    a.start_20115_i = function() {
        var t = new eui.Group;
        return this.start_20115 = t,
        t.x = 417,
        t.y = 146,
        t.elementsContent = [this.map_start_20115_i(), this.map_startTitle_20115_i()],
        t
    },
    a.map_start_20115_i = function() {
        var t = new eui.Image;
        return this.map_start_20115 = t,
        t.height = 149,
        t.name = "map_start_20115",
        t.source = "worldMapStar_map_start_20115_png",
        t.width = 200,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20115_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20115 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20115_png",
        t.width = 167,
        t.x = 17,
        t.y = 120,
        t
    },
    a.stars_202_i = function() {
        var t = new eui.Group;
        return this.stars_202 = t,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 79,
        t.y = 60,
        t.elementsContent = [this.start_20201_i(), this.start_20202_i(), this.start_20203_i(), this.start_20204_i(), this.start_20205_i(), this.start_20206_i(), this.start_20207_i(), this.start_20208_i(), this.start_20209_i(), this.start_20210_i(), this.start_20211_i(), this.start_20212_i(), this.start_20213_i()],
        t
    },
    a.start_20201_i = function() {
        var t = new eui.Group;
        return this.start_20201 = t,
        t.x = 0,
        t.y = 151,
        t.elementsContent = [this.map_start_20201_i(), this.map_startTitle_20201_i()],
        t
    },
    a.map_start_20201_i = function() {
        var t = new eui.Image;
        return this.map_start_20201 = t,
        t.height = 77,
        t.name = "map_start_20201",
        t.source = "worldMapStar_map_start_20201_png",
        t.width = 74,
        t.x = 31,
        t.y = 0,
        t
    },
    a.map_startTitle_20201_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20201 = t,
        t.height = 29,
        t.name = "map_startTitle_20201",
        t.source = "worldMapStar_map_startTitle_20201_png",
        t.width = 136,
        t.x = 0,
        t.y = 56,
        t
    },
    a.start_20202_i = function() {
        var t = new eui.Group;
        return this.start_20202 = t,
        t.x = 254,
        t.y = 31,
        t.elementsContent = [this.map_start_20202_i(), this.map_startTitle_20202_i()],
        t
    },
    a.map_start_20202_i = function() {
        var t = new eui.Image;
        return this.map_start_20202 = t,
        t.height = 76,
        t.name = "map_start_20202",
        t.source = "worldMapStar_map_start_20202_png",
        t.width = 77,
        t.x = 19,
        t.y = 0,
        t
    },
    a.map_startTitle_20202_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20202 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20202_png",
        t.width = 115,
        t.x = 0,
        t.y = 51,
        t
    },
    a.start_20203_i = function() {
        var t = new eui.Group;
        return this.start_20203 = t,
        t.x = 575,
        t.y = 0,
        t.elementsContent = [this.map_start_20203_i(), this.map_startTitle_20203_i()],
        t
    },
    a.map_start_20203_i = function() {
        var t = new eui.Image;
        return this.map_start_20203 = t,
        t.height = 70,
        t.name = "map_start_20203",
        t.source = "worldMapStar_map_start_20203_png",
        t.width = 104,
        t.x = 6,
        t.y = 0,
        t
    },
    a.map_startTitle_20203_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20203 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20203_png",
        t.width = 115,
        t.x = 0,
        t.y = 54,
        t
    },
    a.start_20204_i = function() {
        var t = new eui.Group;
        return this.start_20204 = t,
        t.x = 837,
        t.y = 114,
        t.elementsContent = [this.map_start_20204_i(), this.map_startTitle_20204_i()],
        t
    },
    a.map_start_20204_i = function() {
        var t = new eui.Image;
        return this.map_start_20204 = t,
        t.height = 86,
        t.name = "map_start_20204",
        t.source = "worldMapStar_map_start_20204_png",
        t.width = 92,
        t.x = 22,
        t.y = 0,
        t
    },
    a.map_startTitle_20204_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20204 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20204_png",
        t.width = 136,
        t.x = 0,
        t.y = 66,
        t
    },
    a.start_20205_i = function() {
        var t = new eui.Group;
        return this.start_20205 = t,
        t.x = 692,
        t.y = 358,
        t.elementsContent = [this.map_start_20205_i(), this.map_startTitle_20205_i()],
        t
    },
    a.map_start_20205_i = function() {
        var t = new eui.Image;
        return this.map_start_20205 = t,
        t.height = 103,
        t.name = "map_start_20205",
        t.source = "worldMapStar_map_start_20205_png",
        t.width = 80,
        t.x = 28,
        t.y = 0,
        t
    },
    a.map_startTitle_20205_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20205 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20205_png",
        t.width = 136,
        t.x = 0,
        t.y = 86,
        t
    },
    a.start_20206_i = function() {
        var t = new eui.Group;
        return this.start_20206 = t,
        t.x = 177,
        t.y = 423,
        t.elementsContent = [this.map_start_20206_i(), this.map_startTitle_20206_i()],
        t
    },
    a.map_start_20206_i = function() {
        var t = new eui.Image;
        return this.map_start_20206 = t,
        t.height = 81,
        t.name = "map_start_20206",
        t.source = "worldMapStar_map_start_20206_png",
        t.width = 81,
        t.x = 17,
        t.y = 0,
        t
    },
    a.map_startTitle_20206_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20206 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20206_png",
        t.width = 115,
        t.x = 0,
        t.y = 63,
        t
    },
    a.start_20207_i = function() {
        var t = new eui.Group;
        return this.start_20207 = t,
        t.x = 302,
        t.y = 309,
        t.elementsContent = [this.map_start_20207_i(), this.map_startTitle_20207_i()],
        t
    },
    a.map_start_20207_i = function() {
        var t = new eui.Image;
        return this.map_start_20207 = t,
        t.height = 97,
        t.name = "map_start_20207",
        t.source = "worldMapStar_map_start_20207_png",
        t.width = 146,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20207_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20207 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20207_png",
        t.width = 114,
        t.x = 16,
        t.y = 66,
        t
    },
    a.start_20208_i = function() {
        var t = new eui.Group;
        return this.start_20208 = t,
        t.x = 203,
        t.y = 186,
        t.elementsContent = [this.map_start_20208_i(), this.map_startTitle_20208_i()],
        t
    },
    a.map_start_20208_i = function() {
        var t = new eui.Image;
        return this.map_start_20208 = t,
        t.height = 84,
        t.name = "map_start_20208",
        t.source = "worldMapStar_map_start_20208_png",
        t.width = 85,
        t.x = 19,
        t.y = 0,
        t
    },
    a.map_startTitle_20208_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20208 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20208_png",
        t.width = 136,
        t.x = 0,
        t.y = 63,
        t
    },
    a.start_20209_i = function() {
        var t = new eui.Group;
        return this.start_20209 = t,
        t.x = 325,
        t.y = 105,
        t.elementsContent = [this.map_start_20209_i(), this.map_startTitle_20209_i()],
        t
    },
    a.map_start_20209_i = function() {
        var t = new eui.Image;
        return this.map_start_20209 = t,
        t.height = 84,
        t.name = "map_start_20209",
        t.source = "worldMapStar_map_start_20209_png",
        t.width = 78,
        t.x = 29,
        t.y = 0,
        t
    },
    a.map_startTitle_20209_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20209 = t,
        t.height = 24,
        t.source = "worldMapStar_map_startTitle_20209_png",
        t.width = 136,
        t.x = 0,
        t.y = 60,
        t
    },
    a.start_20210_i = function() {
        var t = new eui.Group;
        return this.start_20210 = t,
        t.x = 519,
        t.y = 96,
        t.elementsContent = [this.map_start_20210_i(), this.map_startTitle_20210_i()],
        t
    },
    a.map_start_20210_i = function() {
        var t = new eui.Image;
        return this.map_start_20210 = t,
        t.height = 81,
        t.name = "map_start_20210",
        t.source = "worldMapStar_map_start_20210_png",
        t.width = 79,
        t.x = 29,
        t.y = 0,
        t
    },
    a.map_startTitle_20210_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20210 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20210_png",
        t.width = 136,
        t.x = 0,
        t.y = 55,
        t
    },
    a.start_20211_i = function() {
        var t = new eui.Group;
        return this.start_20211 = t,
        t.x = 664,
        t.y = 174,
        t.elementsContent = [this.map_start_20211_i(), this.map_startTitle_20211_i()],
        t
    },
    a.map_start_20211_i = function() {
        var t = new eui.Image;
        return this.map_start_20211 = t,
        t.height = 86,
        t.name = "map_start_20211",
        t.source = "worldMapStar_map_start_20211_png",
        t.width = 85,
        t.x = 26,
        t.y = 0,
        t
    },
    a.map_startTitle_20211_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20211 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20211_png",
        t.visible = !0,
        t.width = 136,
        t.x = 0,
        t.y = 62,
        t
    },
    a.start_20212_i = function() {
        var t = new eui.Group;
        return this.start_20212 = t,
        t.x = 580,
        t.y = 300,
        t.elementsContent = [this.map_start_20212_i(), this.map_startTitle_20212_i()],
        t
    },
    a.map_start_20212_i = function() {
        var t = new eui.Image;
        return this.map_start_20212 = t,
        t.height = 76,
        t.name = "map_start_20212",
        t.source = "worldMapStar_map_start_20212_png",
        t.width = 78,
        t.x = 19,
        t.y = 0,
        t
    },
    a.map_startTitle_20212_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20212 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20212_png",
        t.visible = !0,
        t.width = 115,
        t.x = 0,
        t.y = 58,
        t
    },
    a.start_20213_i = function() {
        var t = new eui.Group;
        return this.start_20213 = t,
        t.x = 426,
        t.y = 168,
        t.elementsContent = [this.map_start_20213_i(), this.map_startTitle_20213_i()],
        t
    },
    a.map_start_20213_i = function() {
        var t = new eui.Image;
        return this.map_start_20213 = t,
        t.height = 146,
        t.name = "map_start_20213",
        t.source = "worldMapStar_map_start_20213_png",
        t.visible = !0,
        t.width = 140,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20213_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20213 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20213_png",
        t.width = 136,
        t.x = 2,
        t.y = 130,
        t
    },
    a.stars_203_i = function() {
        var t = new eui.Group;
        return this.stars_203 = t,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 72,
        t.y = 62,
        t.elementsContent = [this.start_20301_i(), this.start_20302_i(), this.start_20303_i(), this.start_20304_i(), this.start_20305_i(), this.start_20306_i(), this.start_20307_i(), this.start_20308_i(), this.start_20309_i(), this.start_20310_i(), this.start_20311_i()],
        t
    },
    a.start_20301_i = function() {
        var t = new eui.Group;
        return this.start_20301 = t,
        t.x = 0,
        t.y = 133,
        t.elementsContent = [this.map_start_20301_i(), this.map_startTitle_20301_i()],
        t
    },
    a.map_start_20301_i = function() {
        var t = new eui.Image;
        return this.map_start_20301 = t,
        t.height = 71,
        t.name = "map_start_20301",
        t.source = "worldMapStar_map_start_20301_png",
        t.width = 104,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20301_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20301 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20301_png",
        t.width = 115,
        t.x = 2,
        t.y = 57,
        t
    },
    a.start_20302_i = function() {
        var t = new eui.Group;
        return this.start_20302 = t,
        t.x = 252,
        t.y = 20,
        t.elementsContent = [this.map_start_20302_i(), this.map_startTitle_20302_i()],
        t
    },
    a.map_start_20302_i = function() {
        var t = new eui.Image;
        return this.map_start_20302 = t,
        t.height = 78,
        t.name = "map_start_20302",
        t.source = "worldMapStar_map_start_20302_png",
        t.width = 99,
        t.x = 19,
        t.y = 0,
        t
    },
    a.map_startTitle_20302_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20302 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20302_png",
        t.width = 136,
        t.x = 0,
        t.y = 60,
        t
    },
    a.start_20303_i = function() {
        var t = new eui.Group;
        return this.start_20303 = t,
        t.x = 584,
        t.y = 0,
        t.elementsContent = [this.map_start_20303_i(), this.map_startTitle_20303_i()],
        t
    },
    a.map_start_20303_i = function() {
        var t = new eui.Image;
        return this.map_start_20303 = t,
        t.height = 88,
        t.name = "map_start_20303",
        t.source = "worldMapStar_map_start_20303_png",
        t.width = 90,
        t.x = 23,
        t.y = 0,
        t
    },
    a.map_startTitle_20303_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20303 = t,
        t.height = 24,
        t.source = "worldMapStar_map_startTitle_20303_png",
        t.width = 136,
        t.x = 0,
        t.y = 65,
        t
    },
    a.start_20304_i = function() {
        var t = new eui.Group;
        return this.start_20304 = t,
        t.x = 851,
        t.y = 96,
        t.elementsContent = [this.map_start_20304_i(), this.map_startTitle_20304_i()],
        t
    },
    a.map_start_20304_i = function() {
        var t = new eui.Image;
        return this.map_start_20304 = t,
        t.height = 101,
        t.name = "map_start_20304",
        t.source = "worldMapStar_map_start_20304_png",
        t.width = 100,
        t.x = 8,
        t.y = 0,
        t
    },
    a.map_startTitle_20304_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20304 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20304_png",
        t.width = 114,
        t.x = 0,
        t.y = 75,
        t
    },
    a.start_20305_i = function() {
        var t = new eui.Group;
        return this.start_20305 = t,
        t.x = 774,
        t.y = 388,
        t.elementsContent = [this.map_start_20305_i(), this.map_startTitle_20305_i()],
        t
    },
    a.map_start_20305_i = function() {
        var t = new eui.Image;
        return this.map_start_20305 = t,
        t.height = 97,
        t.name = "map_start_20305",
        t.source = "worldMapStar_map_start_20305_png",
        t.width = 83,
        t.x = 10,
        t.y = 0,
        t
    },
    a.map_startTitle_20305_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20305 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20305_png",
        t.width = 115,
        t.x = 0,
        t.y = 70,
        t
    },
    a.start_20306_i = function() {
        var t = new eui.Group;
        return this.start_20306 = t,
        t.x = 121,
        t.y = 434,
        t.elementsContent = [this.map_start_20306_i(), this.map_startTitle_20306_i()],
        t
    },
    a.map_start_20306_i = function() {
        var t = new eui.Image;
        return this.map_start_20306 = t,
        t.height = 100,
        t.name = "map_start_20306",
        t.source = "worldMapStar_map_start_20306_png",
        t.width = 90,
        t.x = 29,
        t.y = 0,
        t
    },
    a.map_startTitle_20306_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20306 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20306_png",
        t.width = 136,
        t.x = 0,
        t.y = 74,
        t
    },
    a.start_20307_i = function() {
        var t = new eui.Group;
        return this.start_20307 = t,
        t.x = 667,
        t.y = 170,
        t.elementsContent = [this.map_start_20307_i(), this.map_startTitle_20307_i()],
        t
    },
    a.map_start_20307_i = function() {
        var t = new eui.Image;
        return this.map_start_20307 = t,
        t.height = 85,
        t.name = "map_start_20307",
        t.source = "worldMapStar_map_start_20307_png",
        t.width = 80,
        t.x = 22,
        t.y = 0,
        t
    },
    a.map_startTitle_20307_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20307 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20307_png",
        t.width = 136,
        t.x = 0,
        t.y = 63,
        t
    },
    a.start_20308_i = function() {
        var t = new eui.Group;
        return this.start_20308 = t,
        t.x = 573,
        t.y = 295,
        t.elementsContent = [this.map_start_20308_i(), this.map_startTitle_20308_i()],
        t
    },
    a.map_start_20308_i = function() {
        var t = new eui.Image;
        return this.map_start_20308 = t,
        t.height = 80,
        t.name = "map_start_20308",
        t.source = "worldMapStar_map_start_20308_png",
        t.width = 96,
        t.x = 20,
        t.y = 0,
        t
    },
    a.map_startTitle_20308_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20308 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20308_png",
        t.width = 136,
        t.x = 0,
        t.y = 61,
        t
    },
    a.start_20309_i = function() {
        var t = new eui.Group;
        return this.start_20309 = t,
        t.x = 286,
        t.y = 316,
        t.elementsContent = [this.map_start_20309_i(), this.map_startTitle_20309_i()],
        t
    },
    a.map_start_20309_i = function() {
        var t = new eui.Image;
        return this.map_start_20309 = t,
        t.height = 83,
        t.name = "map_start_20309",
        t.source = "worldMapStar_map_start_20309_png",
        t.width = 97,
        t.x = 22,
        t.y = 0,
        t
    },
    a.map_startTitle_20309_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20309 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20309_png",
        t.width = 136,
        t.x = 0,
        t.y = 70,
        t
    },
    a.start_20310_i = function() {
        var t = new eui.Group;
        return this.start_20310 = t,
        t.x = 215,
        t.y = 182,
        t.elementsContent = [this.map_start_20310_i(), this.map_startTitle_20310_i()],
        t
    },
    a.map_start_20310_i = function() {
        var t = new eui.Image;
        return this.map_start_20310 = t,
        t.height = 86,
        t.name = "map_start_20310",
        t.source = "worldMapStar_map_start_20310_png",
        t.width = 89,
        t.x = 13,
        t.y = 0,
        t
    },
    a.map_startTitle_20310_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20310 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20310_png",
        t.width = 115,
        t.x = 0,
        t.y = 65,
        t
    },
    a.start_20311_i = function() {
        var t = new eui.Group;
        return this.start_20311 = t,
        t.x = 421,
        t.y = 126,
        t.elementsContent = [this.map_start_20311_i(), this.map_startTitle_20311_i()],
        t
    },
    a.map_start_20311_i = function() {
        var t = new eui.Image;
        return this.map_start_20311 = t,
        t.height = 157,
        t.name = "map_start_20311",
        t.source = "worldMapStar_map_start_20311_png",
        t.width = 177,
        t.x = 1,
        t.y = 0,
        t
    },
    a.map_startTitle_20311_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20311 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20311_png",
        t.width = 174,
        t.x = 0,
        t.y = 133,
        t
    },
    a.stars_204_i = function() {
        var t = new eui.Group;
        return this.stars_204 = t,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 70,
        t.y = 51,
        t.elementsContent = [this.start_20401_i(), this.start_20402_i(), this.start_20403_i(), this.start_20404_i(), this.start_20405_i(), this.start_20406_i(), this.start_20407_i(), this.start_20408_i(), this.start_20409_i(), this.start_20410_i(), this.start_20411_i(), this.start_20412_i(), this.start_20413_i()],
        t
    },
    a.start_20401_i = function() {
        var t = new eui.Group;
        return this.start_20401 = t,
        t.x = 0,
        t.y = 157,
        t.elementsContent = [this.map_start_20401_i(), this.map_startTitle_20401_i()],
        t
    },
    a.map_start_20401_i = function() {
        var t = new eui.Image;
        return this.map_start_20401 = t,
        t.height = 78,
        t.name = "map_start_20401",
        t.source = "worldMapStar_map_start_20401_png",
        t.width = 77,
        t.x = 19,
        t.y = 0,
        t
    },
    a.map_startTitle_20401_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20401 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20401_png",
        t.width = 115,
        t.x = 0,
        t.y = 60,
        t
    },
    a.start_20402_i = function() {
        var t = new eui.Group;
        return this.start_20402 = t,
        t.x = 246,
        t.y = 15,
        t.elementsContent = [this.map_start_20402_i(), this.map_startTitle_20402_i()],
        t
    },
    a.map_start_20402_i = function() {
        var t = new eui.Image;
        return this.map_start_20402 = t,
        t.height = 77,
        t.name = "map_start_20402",
        t.source = "worldMapStar_map_start_20402_png",
        t.width = 81,
        t.x = 17,
        t.y = 0,
        t
    },
    a.map_startTitle_20402_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20402 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20402_png",
        t.width = 115,
        t.x = 0,
        t.y = 63,
        t
    },
    a.start_20403_i = function() {
        var t = new eui.Group;
        return this.start_20403 = t,
        t.x = 592,
        t.y = 0,
        t.elementsContent = [this.map_start_20403_i(), this.map_startTitle_20403_i()],
        t
    },
    a.map_start_20403_i = function() {
        var t = new eui.Image;
        return this.map_start_20403 = t,
        t.height = 83,
        t.name = "map_start_20403",
        t.source = "worldMapStar_map_start_20403_png",
        t.width = 79,
        t.x = 25,
        t.y = 0,
        t
    },
    a.map_startTitle_20403_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20403 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20403_png",
        t.width = 136,
        t.x = 0,
        t.y = 59,
        t
    },
    a.start_20404_i = function() {
        var t = new eui.Group;
        return this.start_20404 = t,
        t.x = 889,
        t.y = 106,
        t.elementsContent = [this.map_start_20404_i(), this.map_startTitle_20404_i()],
        t
    },
    a.map_start_20404_i = function() {
        var t = new eui.Image;
        return this.map_start_20404 = t,
        t.height = 74,
        t.name = "map_start_20404",
        t.source = "worldMapStar_map_start_20404_png",
        t.width = 95,
        t.x = 10,
        t.y = 0,
        t
    },
    a.map_startTitle_20404_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20404 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20404_png",
        t.width = 115,
        t.x = 0,
        t.y = 62,
        t
    },
    a.start_20405_i = function() {
        var t = new eui.Group;
        return this.start_20405 = t,
        t.x = 771,
        t.y = 403,
        t.elementsContent = [this.map_start_20405_i(), this.map_startTitle_20405_i()],
        t
    },
    a.map_start_20405_i = function() {
        var t = new eui.Image;
        return this.map_start_20405 = t,
        t.height = 91,
        t.name = "map_start_20405",
        t.source = "worldMapStar_map_start_20405_png",
        t.width = 95,
        t.x = 5,
        t.y = 0,
        t
    },
    a.map_startTitle_20405_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20405 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20405_png",
        t.width = 115,
        t.x = 0,
        t.y = 62,
        t
    },
    a.start_20406_i = function() {
        var t = new eui.Group;
        return this.start_20406 = t,
        t.x = 148,
        t.y = 446,
        t.elementsContent = [this.map_start_20406_i(), this.map_startTitle_20406_i()],
        t
    },
    a.map_start_20406_i = function() {
        var t = new eui.Image;
        return this.map_start_20406 = t,
        t.height = 81,
        t.name = "map_start_20406",
        t.source = "worldMapStar_map_start_20406_png",
        t.width = 87,
        t.x = 10,
        t.y = 0,
        t
    },
    a.map_startTitle_20406_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20406 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20406_png",
        t.width = 115,
        t.x = 0,
        t.y = 68,
        t
    },
    a.start_20407_i = function() {
        var t = new eui.Group;
        return this.start_20407 = t,
        t.x = 310,
        t.y = 336,
        t.elementsContent = [this.map_start_20407_i(), this.map_startTitle_20407_i()],
        t
    },
    a.map_start_20407_i = function() {
        var t = new eui.Image;
        return this.map_start_20407 = t,
        t.height = 84,
        t.name = "map_start_20407",
        t.source = "worldMapStar_map_start_20407_png",
        t.width = 97,
        t.x = 9,
        t.y = 0,
        t
    },
    a.map_startTitle_20407_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20407 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20407_png",
        t.width = 115,
        t.x = 0,
        t.y = 65,
        t
    },
    a.start_20408_i = function() {
        var t = new eui.Group;
        return this.start_20408 = t,
        t.x = 586,
        t.y = 301,
        t.elementsContent = [this.map_start_20408_i(), this.map_startTitle_20408_i()],
        t
    },
    a.map_start_20408_i = function() {
        var t = new eui.Image;
        return this.map_start_20408 = t,
        t.height = 81,
        t.name = "map_start_20408",
        t.source = "worldMapStar_map_start_20408_png",
        t.width = 92,
        t.x = 11,
        t.y = 0,
        t
    },
    a.map_startTitle_20408_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20408 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20408_png",
        t.width = 115,
        t.x = 0,
        t.y = 67,
        t
    },
    a.start_20409_i = function() {
        var t = new eui.Group;
        return this.start_20409 = t,
        t.x = 218,
        t.y = 201,
        t.elementsContent = [this.map_start_20409_i(), this.map_startTitle_20409_i()],
        t
    },
    a.map_start_20409_i = function() {
        var t = new eui.Image;
        return this.map_start_20409 = t,
        t.height = 86,
        t.name = "map_start_20409",
        t.source = "worldMapStar_map_start_20409_png",
        t.width = 78,
        t.x = 19,
        t.y = 0,
        t
    },
    a.map_startTitle_20409_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20409 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20409_png",
        t.width = 115,
        t.x = 0,
        t.y = 63,
        t
    },
    a.start_20410_i = function() {
        var t = new eui.Group;
        return this.start_20410 = t,
        t.x = 344,
        t.y = 118,
        t.elementsContent = [this.map_start_20410_i(), this.map_startTitle_20410_i()],
        t
    },
    a.map_start_20410_i = function() {
        var t = new eui.Image;
        return this.map_start_20410 = t,
        t.height = 86,
        t.name = "map_start_20410",
        t.source = "worldMapStar_map_start_20410_png",
        t.width = 91,
        t.x = 12,
        t.y = 0,
        t
    },
    a.map_startTitle_20410_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20410 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20410_png",
        t.width = 115,
        t.x = 0,
        t.y = 57,
        t
    },
    a.start_20411_i = function() {
        var t = new eui.Group;
        return this.start_20411 = t,
        t.x = 535,
        t.y = 107,
        t.elementsContent = [this.map_start_20411_i(), this.map_startTitle_20411_i()],
        t
    },
    a.map_start_20411_i = function() {
        var t = new eui.Image;
        return this.map_start_20411 = t,
        t.height = 81,
        t.name = "map_start_20411",
        t.source = "worldMapStar_map_start_20411_png",
        t.width = 99,
        t.x = 8,
        t.y = 0,
        t
    },
    a.map_startTitle_20411_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20411 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20411_png",
        t.width = 115,
        t.x = 0,
        t.y = 63,
        t
    },
    a.start_20412_i = function() {
        var t = new eui.Group;
        return this.start_20412 = t,
        t.x = 669,
        t.y = 158,
        t.elementsContent = [this.map_start_20412_i(), this.map_startTitle_20412_i()],
        t
    },
    a.map_start_20412_i = function() {
        var t = new eui.Image;
        return this.map_start_20412 = t,
        t.height = 99,
        t.name = "map_start_20412",
        t.source = "worldMapStar_map_start_20412_png",
        t.width = 91,
        t.x = 25,
        t.y = 0,
        t
    },
    a.map_startTitle_20412_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20412 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20412_png",
        t.width = 136,
        t.x = 0,
        t.y = 69,
        t
    },
    a.start_20413_i = function() {
        var t = new eui.Group;
        return this.start_20413 = t,
        t.x = 415,
        t.y = 188,
        t.elementsContent = [this.map_start_20413_i(), this.map_startTitle_20413_i()],
        t
    },
    a.map_start_20413_i = function() {
        var t = new eui.Image;
        return this.map_start_20413 = t,
        t.height = 134,
        t.name = "map_start_20413",
        t.source = "worldMapStar_map_start_20413_png",
        t.width = 185,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20413_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20413 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20413_png",
        t.width = 165,
        t.x = 12,
        t.y = 109,
        t
    },
    a.stars_205_i = function() {
        var t = new eui.Group;
        return this.stars_205 = t,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 83,
        t.y = 69,
        t.elementsContent = [this.start_20501_i(), this.start_20502_i(), this.start_20503_i(), this.start_20504_i(), this.start_20505_i(), this.start_20506_i(), this.start_20507_i(), this.start_20508_i(), this.start_20509_i(), this.start_205010_i(), this.start_205011_i()],
        t
    },
    a.start_20501_i = function() {
        var t = new eui.Group;
        return this.start_20501 = t,
        t.x = 583,
        t.y = 291,
        t.elementsContent = [this.map_start_20501_i(), this.map_startTitle_20501_i()],
        t
    },
    a.map_start_20501_i = function() {
        var t = new eui.Image;
        return this.map_start_20501 = t,
        t.name = "map_start_20501",
        t.source = "worldMapStar_map_start_20501_png",
        t.x = 14,
        t.y = 0,
        t
    },
    a.map_startTitle_20501_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20501 = t,
        t.source = "worldMapStar_map_startTitle_20501_png",
        t.x = 0,
        t.y = 63,
        t
    },
    a.start_20502_i = function() {
        var t = new eui.Group;
        return this.start_20502 = t,
        t.x = 567,
        t.y = 0,
        t.elementsContent = [this.map_start_20502_i(), this.map_startTitle_20502_i()],
        t
    },
    a.map_start_20502_i = function() {
        var t = new eui.Image;
        return this.map_start_20502 = t,
        t.name = "map_start_20502",
        t.source = "worldMapStar_map_start_20502_png",
        t.x = 4,
        t.y = 0,
        t
    },
    a.map_startTitle_20502_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20502 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20502_png",
        t.x = 0,
        t.y = 61,
        t
    },
    a.start_20503_i = function() {
        var t = new eui.Group;
        return this.start_20503 = t,
        t.x = 847,
        t.y = 81,
        t.elementsContent = [this.map_start_20503_i(), this.map_startTitle_20503_i()],
        t
    },
    a.map_start_20503_i = function() {
        var t = new eui.Image;
        return this.map_start_20503 = t,
        t.name = "map_start_20503",
        t.source = "worldMapStar_map_start_20503_png",
        t.x = 12,
        t.y = 0,
        t
    },
    a.map_startTitle_20503_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20503 = t,
        t.source = "worldMapStar_map_startTitle_20503_png",
        t.x = 0,
        t.y = 74,
        t
    },
    a.start_20504_i = function() {
        var t = new eui.Group;
        return this.start_20504 = t,
        t.x = 641,
        t.y = 140,
        t.elementsContent = [this.map_start_20504_i(), this.map_startTitle_20504_i()],
        t
    },
    a.map_start_20504_i = function() {
        var t = new eui.Image;
        return this.map_start_20504 = t,
        t.name = "map_start_20504",
        t.source = "worldMapStar_map_start_20504_png",
        t.x = 22,
        t.y = 0,
        t
    },
    a.map_startTitle_20504_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20504 = t,
        t.source = "worldMapStar_map_startTitle_20504_png",
        t.x = 0,
        t.y = 64,
        t
    },
    a.start_20505_i = function() {
        var t = new eui.Group;
        return this.start_20505 = t,
        t.x = 307,
        t.y = 309,
        t.elementsContent = [this.map_start_20505_i(), this.map_startTitle_20505_i()],
        t
    },
    a.map_start_20505_i = function() {
        var t = new eui.Image;
        return this.map_start_20505 = t,
        t.name = "map_start_20505",
        t.source = "worldMapStar_map_start_20505_png",
        t.x = 10,
        t.y = 0,
        t
    },
    a.map_startTitle_20505_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20505 = t,
        t.source = "worldMapStar_map_startTitle_20505_png",
        t.x = 0,
        t.y = 59,
        t
    },
    a.start_20506_i = function() {
        var t = new eui.Group;
        return this.start_20506 = t,
        t.x = 193,
        t.y = 186,
        t.elementsContent = [this.map_start_20506_i(), this.map_startTitle_20506_i()],
        t
    },
    a.map_start_20506_i = function() {
        var t = new eui.Image;
        return this.map_start_20506 = t,
        t.name = "map_start_20506",
        t.source = "worldMapStar_map_start_20506_png",
        t.x = 7,
        t.y = 0,
        t
    },
    a.map_startTitle_20506_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20506 = t,
        t.source = "worldMapStar_map_startTitle_20506_png",
        t.x = 0,
        t.y = 57,
        t
    },
    a.start_20507_i = function() {
        var t = new eui.Group;
        return this.start_20507 = t,
        t.x = 117,
        t.y = 427,
        t.elementsContent = [this.map_start_20507_i(), this.map_startTitle_20507_i()],
        t
    },
    a.map_start_20507_i = function() {
        var t = new eui.Image;
        return this.map_start_20507 = t,
        t.name = "map_start_20507",
        t.source = "worldMapStar_map_start_20507_png",
        t.x = 6,
        t.y = 0,
        t
    },
    a.map_startTitle_20507_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20507 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20507_png",
        t.width = 115,
        t.x = 0,
        t.y = 66,
        t
    },
    a.start_20508_i = function() {
        var t = new eui.Group;
        return this.start_20508 = t,
        t.x = 0,
        t.y = 125,
        t.elementsContent = [this.map_start_20508_i(), this.map_startTitle_20508_i()],
        t
    },
    a.map_start_20508_i = function() {
        var t = new eui.Image;
        return this.map_start_20508 = t,
        t.name = "map_start_20508",
        t.source = "worldMapStar_map_start_20508_png",
        t.x = 6,
        t.y = 0,
        t
    },
    a.map_startTitle_20508_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20508 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20508_png",
        t.width = 115,
        t.x = 0,
        t.y = 73,
        t
    },
    a.start_20509_i = function() {
        var t = new eui.Group;
        return this.start_20509 = t,
        t.x = 748,
        t.y = 397,
        t.elementsContent = [this.map_start_20509_i(), this.map_startTitle_20509_i()],
        t
    },
    a.map_start_20509_i = function() {
        var t = new eui.Image;
        return this.map_start_20509 = t,
        t.name = "map_start_20509",
        t.source = "worldMapStar_map_start_20509_png",
        t.x = 16,
        t.y = 0,
        t
    },
    a.map_startTitle_20509_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20509 = t,
        t.source = "worldMapStar_map_startTitle_20509_png",
        t.x = 0,
        t.y = 61,
        t
    },
    a.start_205010_i = function() {
        var t = new eui.Group;
        return this.start_205010 = t,
        t.x = 208,
        t.y = 1,
        t.elementsContent = [this.map_start_20510_i(), this.map_startTitle_20510_i()],
        t
    },
    a.map_start_20510_i = function() {
        var t = new eui.Image;
        return this.map_start_20510 = t,
        t.name = "map_start_20510",
        t.source = "worldMapStar_map_start_20510_png",
        t.x = 17,
        t.y = 0,
        t
    },
    a.map_startTitle_20510_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20510 = t,
        t.source = "worldMapStar_map_startTitle_20510_png",
        t.x = 0,
        t.y = 62,
        t
    },
    a.start_205011_i = function() {
        var t = new eui.Group;
        return this.start_205011 = t,
        t.x = 406,
        t.y = 149,
        t.elementsContent = [this.map_start_20511_i(), this.map_startTitle_20511_i()],
        t
    },
    a.map_start_20511_i = function() {
        var t = new eui.Image;
        return this.map_start_20511 = t,
        t.name = "map_start_20511",
        t.source = "worldMapStar_map_start_20511_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20511_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20511 = t,
        t.source = "worldMapStar_map_startTitle_20511_png",
        t.x = 8,
        t.y = 96,
        t
    },
    a.stars_206_i = function() {
        var t = new eui.Group;
        return this.stars_206 = t,
        t.visible = !1,
        t.x = 82,
        t.y = 64,
        t.elementsContent = [this.start_20601_i(), this.start_20602_i(), this.start_20603_i(), this.start_20604_i(), this.start_20605_i(), this.start_20606_i(), this.start_20607_i(), this.start_20608_i(), this.start_20609_i()],
        t
    },
    a.start_20601_i = function() {
        var t = new eui.Group;
        return this.start_20601 = t,
        t.x = 197,
        t.y = 176,
        t.elementsContent = [this.map_start_20601_i(), this.map_startTitle_20601_i()],
        t
    },
    a.map_start_20601_i = function() {
        var t = new eui.Image;
        return this.map_start_20601 = t,
        t.height = 92,
        t.name = "map_start_20601",
        t.source = "worldMapStar_map_start_20601_png",
        t.width = 100,
        t.x = 7,
        t.y = 0,
        t
    },
    a.map_startTitle_20601_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20601 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20601_png",
        t.width = 115,
        t.x = 0,
        t.y = 77,
        t
    },
    a.start_20602_i = function() {
        var t = new eui.Group;
        return this.start_20602 = t,
        t.x = 258,
        t.y = 10,
        t.elementsContent = [this.map_start_20602_i(), this.map_startTitle_20602_i()],
        t
    },
    a.map_start_20602_i = function() {
        var t = new eui.Image;
        return this.map_start_20602 = t,
        t.height = 96,
        t.name = "map_start_20602",
        t.source = "worldMapStar_map_start_20602_png",
        t.width = 90,
        t.x = 11,
        t.y = 0,
        t
    },
    a.map_startTitle_20602_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20602 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_20602_png",
        t.width = 115,
        t.x = 0,
        t.y = 80,
        t
    },
    a.start_20603_i = function() {
        var t = new eui.Group;
        return this.start_20603 = t,
        t.x = 732,
        t.y = 365,
        t.elementsContent = [this.map_start_20603_i(), this.map_startTitle_20603_i()],
        t
    },
    a.map_start_20603_i = function() {
        var t = new eui.Image;
        return this.map_start_20603 = t,
        t.height = 78,
        t.name = "map_start_20603",
        t.source = "worldMapStar_map_start_20603_png",
        t.width = 96,
        t.x = 10,
        t.y = 0,
        t
    },
    a.map_startTitle_20603_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20603 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_20603_png",
        t.width = 115,
        t.x = 0,
        t.y = 70,
        t
    },
    a.start_20604_i = function() {
        var t = new eui.Group;
        return this.start_20604 = t,
        t.x = 0,
        t.y = 138,
        t.elementsContent = [this.map_start_20604_i(), this.map_startTitle_20604_i()],
        t
    },
    a.map_start_20604_i = function() {
        var t = new eui.Image;
        return this.map_start_20604 = t,
        t.height = 73,
        t.name = "map_start_20604",
        t.source = "worldMapStar_map_start_20604_png",
        t.width = 100,
        t.x = 19,
        t.y = 0,
        t
    },
    a.map_startTitle_20604_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20604 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20604_png",
        t.width = 136,
        t.x = 0,
        t.y = 65,
        t
    },
    a.start_20605_i = function() {
        var t = new eui.Group;
        return this.start_20605 = t,
        t.x = 178,
        t.y = 424,
        t.elementsContent = [this.map_start_20605_i(), this.map_startTitle_20605_i()],
        t
    },
    a.map_start_20605_i = function() {
        var t = new eui.Image;
        return this.map_start_20605 = t,
        t.height = 98,
        t.name = "map_start_20605",
        t.source = "worldMapStar_map_start_20605_png",
        t.width = 102,
        t.x = 17,
        t.y = 0,
        t
    },
    a.map_startTitle_20605_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20605 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_20605_png",
        t.width = 136,
        t.x = 0,
        t.y = 77,
        t
    },
    a.start_20606_i = function() {
        var t = new eui.Group;
        return this.start_20606 = t,
        t.x = 689,
        t.y = 151,
        t.elementsContent = [this.map_start_20606_i(), this.map_startTitle_20606_i()],
        t
    },
    a.map_start_20606_i = function() {
        var t = new eui.Image;
        return this.map_start_20606 = t,
        t.height = 92,
        t.name = "map_start_20606",
        t.source = "worldMapStar_map_start_20606_png",
        t.width = 81,
        t.x = 17,
        t.y = 0,
        t
    },
    a.map_startTitle_20606_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20606 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20606_png",
        t.width = 115,
        t.x = 0,
        t.y = 78,
        t
    },
    a.start_20607_i = function() {
        var t = new eui.Group;
        return this.start_20607 = t,
        t.x = 573,
        t.y = 0,
        t.elementsContent = [this.map_start_20607_i(), this.map_startTitle_20607_i()],
        t
    },
    a.map_start_20607_i = function() {
        var t = new eui.Image;
        return this.map_start_20607 = t,
        t.height = 81,
        t.name = "map_start_20607",
        t.source = "worldMapStar_map_start_20607_png",
        t.width = 94,
        t.x = 11,
        t.y = 0,
        t
    },
    a.map_startTitle_20607_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20607 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20607_png",
        t.width = 115,
        t.x = 0,
        t.y = 67,
        t
    },
    a.start_20608_i = function() {
        var t = new eui.Group;
        return this.start_20608 = t,
        t.x = 412,
        t.y = 181,
        t.elementsContent = [this.map_start_20608_i(), this.map_startTitle_20608_i()],
        t
    },
    a.map_start_20608_i = function() {
        var t = new eui.Image;
        return this.map_start_20608 = t,
        t.height = 121,
        t.name = "map_start_20608",
        t.source = "worldMapStar_map_start_20608_png",
        t.width = 149,
        t.x = 12,
        t.y = 0,
        t
    },
    a.map_startTitle_20608_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20608 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20608_png",
        t.width = 167,
        t.x = 0,
        t.y = 101,
        t
    },
    a.start_20609_i = function() {
        var t = new eui.Group;
        return this.start_20609 = t,
        t.x = 870,
        t.y = 81,
        t.elementsContent = [this.map_start_20609_i(), this.map_startTitle_20609_i()],
        t
    },
    a.map_start_20609_i = function() {
        var t = new eui.Image;
        return this.map_start_20609 = t,
        t.height = 86,
        t.name = "map_start_20609",
        t.source = "worldMapStar_map_start_20609_png",
        t.width = 117,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20609_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20609 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20609_png",
        t.width = 115,
        t.x = 1,
        t.y = 74,
        t
    },
    a.stars_207_i = function() {
        var t = new eui.Group;
        return this.stars_207 = t,
        t.visible = !1,
        t.x = 116,
        t.y = 100,
        t.elementsContent = [this.start_20701_i(), this.start_20702_i(), this.start_20703_i(), this.start_20704_i()],
        t
    },
    a.start_20701_i = function() {
        var t = new eui.Group;
        return this.start_20701 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.map_start_20701_i(), this.map_startTitle_20701_i()],
        t
    },
    a.map_start_20701_i = function() {
        var t = new eui.Image;
        return this.map_start_20701 = t,
        t.height = 123,
        t.name = "map_start_20701",
        t.source = "worldMapStar_map_start_20701_png",
        t.width = 129,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20701_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20701 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_20701_png",
        t.width = 115,
        t.x = 7,
        t.y = 109,
        t
    },
    a.start_20702_i = function() {
        var t = new eui.Group;
        return this.start_20702 = t,
        t.x = 157,
        t.y = 212,
        t.elementsContent = [this.map_start_20702_i(), this.map_startTitle_20702_i()],
        t
    },
    a.map_start_20702_i = function() {
        var t = new eui.Image;
        return this.map_start_20702 = t,
        t.height = 131,
        t.name = "map_start_20702",
        t.source = "worldMapStar_map_start_20702_png",
        t.width = 138,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20702_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20702 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_20702_png",
        t.width = 115,
        t.x = 3,
        t.y = 113,
        t
    },
    a.start_20703_i = function() {
        var t = new eui.Group;
        return this.start_20703 = t,
        t.x = 481,
        t.y = 56,
        t.elementsContent = [this.map_start_20703_i(), this.map_startTitle_20703_i()],
        t
    },
    a.map_start_20703_i = function() {
        var t = new eui.Image;
        return this.map_start_20703 = t,
        t.height = 87,
        t.name = "map_start_20703",
        t.source = "worldMapStar_map_start_20703_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20703_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20703 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_20703_png",
        t.width = 115,
        t.x = 9,
        t.y = 73,
        t
    },
    a.start_20704_i = function() {
        var t = new eui.Group;
        return this.start_20704 = t,
        t.x = 581,
        t.y = 248,
        t.elementsContent = [this.map_start_20704_i(), this.map_startTitle_20704_i()],
        t
    },
    a.map_start_20704_i = function() {
        var t = new eui.Image;
        return this.map_start_20704 = t,
        t.height = 148,
        t.name = "map_start_20704",
        t.source = "worldMapStar_map_start_20704_png",
        t.width = 165,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20704_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20704 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20704_png",
        t.width = 136,
        t.x = 15,
        t.y = 111,
        t
    },
    a.stars_208_i = function() {
        var t = new eui.Group;
        return this.stars_208 = t,
        t.visible = !1,
        t.x = 243,
        t.y = 112,
        t.elementsContent = [this.start_20801_i(), this.start_20802_i(), this.start_20803_i(), this.start_20804_i()],
        t
    },
    a.start_20801_i = function() {
        var t = new eui.Group;
        return this.start_20801 = t,
        t.x = 67,
        t.y = 0,
        t.elementsContent = [this.map_start_20801_i(), this.map_startTitle_20801_i()],
        t
    },
    a.map_start_20801_i = function() {
        var t = new eui.Image;
        return this.map_start_20801 = t,
        t.height = 126,
        t.name = "map_start_20801",
        t.source = "worldMapStar_map_start_20801_png",
        t.width = 125,
        t.x = 1,
        t.y = 0,
        t
    },
    a.map_startTitle_20801_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20801 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20801_png",
        t.width = 136,
        t.x = 0,
        t.y = 98,
        t
    },
    a.start_20802_i = function() {
        var t = new eui.Group;
        return this.start_20802 = t,
        t.x = 727,
        t.y = 97,
        t.elementsContent = [this.map_start_20802_i(), this.map_startTitle_20802_i()],
        t
    },
    a.map_start_20802_i = function() {
        var t = new eui.Image;
        return this.map_start_20802 = t,
        t.height = 118,
        t.name = "map_start_20802",
        t.source = "worldMapStar_map_start_20802_png",
        t.width = 112,
        t.x = 12,
        t.y = 0,
        t
    },
    a.map_startTitle_20802_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20802 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_20802_png",
        t.width = 136,
        t.x = 0,
        t.y = 100,
        t
    },
    a.start_20803_i = function() {
        var t = new eui.Group;
        return this.start_20803 = t,
        t.x = 430,
        t.y = 217,
        t.elementsContent = [this.map_start_20803_i(), this.map_startTitle_20803_i()],
        t
    },
    a.map_start_20803_i = function() {
        var t = new eui.Image;
        return this.map_start_20803 = t,
        t.height = 123,
        t.name = "map_start_20803",
        t.source = "worldMapStar_map_start_20803_png",
        t.width = 139,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20803_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20803 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_20803_png",
        t.width = 136,
        t.x = 7,
        t.y = 109,
        t
    },
    a.start_20804_i = function() {
        var t = new eui.Group;
        return this.start_20804 = t,
        t.x = 0,
        t.y = 226,
        t.elementsContent = [this.map_start_20804_i(), this.map_startTitle_20804_i()],
        t
    },
    a.map_start_20804_i = function() {
        var t = new eui.Image;
        return this.map_start_20804 = t,
        t.height = 85,
        t.name = "map_start_20804",
        t.source = "worldMapStar_map_start_20804_png",
        t.width = 183,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20804_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20804 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_20804_png",
        t.width = 115,
        t.x = 34,
        t.y = 73,
        t
    },
    a.stars_210_i = function() {
        var t = new eui.Group;
        return this.stars_210 = t,
        t.visible = !1,
        t.x = 150,
        t.y = 35,
        t.elementsContent = [this.start_21001_i(), this.start_21002_i(), this.start_21003_i(), this.start_21004_i(), this.start_21005_i(), this.start_21006_i(), this.start_21007_i(), this.start_21008_i(), this.start_21009_i(), this.start_21010_i()],
        t
    },
    a.start_21001_i = function() {
        var t = new eui.Group;
        return this.start_21001 = t,
        t.x = 154,
        t.y = 0,
        t.elementsContent = [this.map_start_21001_i(), this.map_startTitle_21001_i()],
        t
    },
    a.map_start_21001_i = function() {
        var t = new eui.Image;
        return this.map_start_21001 = t,
        t.height = 96,
        t.name = "map_start_21001",
        t.source = "worldMapStar_map_start_21001_png",
        t.width = 102,
        t.x = 16,
        t.y = 0,
        t
    },
    a.map_startTitle_21001_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21001 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_21001_png",
        t.width = 136,
        t.x = 0,
        t.y = 76,
        t
    },
    a.start_21002_i = function() {
        var t = new eui.Group;
        return this.start_21002 = t,
        t.x = 0,
        t.y = 161,
        t.elementsContent = [this.map_start_21002_i(), this.map_startTitle_21002_i()],
        t
    },
    a.map_start_21002_i = function() {
        var t = new eui.Image;
        return this.map_start_21002 = t,
        t.height = 103,
        t.name = "map_start_21002",
        t.source = "worldMapStar_map_start_21002_png",
        t.width = 93,
        t.x = 22,
        t.y = 0,
        t
    },
    a.map_startTitle_21002_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21002 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_21002_png",
        t.width = 136,
        t.x = 0,
        t.y = 79,
        t
    },
    a.start_21003_i = function() {
        var t = new eui.Group;
        return this.start_21003 = t,
        t.x = 4,
        t.y = 398,
        t.elementsContent = [this.map_start_21003_i(), this.map_startTitle_21003_i()],
        t
    },
    a.map_start_21003_i = function() {
        var t = new eui.Image;
        return this.map_start_21003 = t,
        t.height = 90,
        t.name = "map_start_21003",
        t.source = "worldMapStar_map_start_21003_png",
        t.width = 114,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21003_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21003 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_21003_png",
        t.width = 115,
        t.x = 1,
        t.y = 77,
        t
    },
    a.start_21004_i = function() {
        var t = new eui.Group;
        return this.start_21004 = t,
        t.x = 249,
        t.y = 387,
        t.elementsContent = [this.map_start_21004_i(), this.map_startTitle_21004_i()],
        t
    },
    a.map_start_21004_i = function() {
        var t = new eui.Image;
        return this.map_start_21004 = t,
        t.height = 93,
        t.name = "map_start_21004",
        t.source = "worldMapStar_map_start_21004_png",
        t.width = 98,
        t.x = 21,
        t.y = 0,
        t
    },
    a.map_startTitle_21004_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21004 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_21004_png",
        t.width = 136,
        t.x = 0,
        t.y = 74,
        t
    },
    a.start_21005_i = function() {
        var t = new eui.Group;
        return this.start_21005 = t,
        t.x = 475,
        t.y = 473,
        t.elementsContent = [this.map_start_21005_i(), this.map_startTitle_21005_i()],
        t
    },
    a.map_start_21005_i = function() {
        var t = new eui.Image;
        return this.map_start_21005 = t,
        t.height = 99,
        t.name = "map_start_21005",
        t.source = "worldMapStar_map_start_21005_png",
        t.width = 101,
        t.x = 12,
        t.y = 0,
        t
    },
    a.map_startTitle_21005_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21005 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_21005_png",
        t.width = 115,
        t.x = 0,
        t.y = 83,
        t
    },
    a.start_21006_i = function() {
        var t = new eui.Group;
        return this.start_21006 = t,
        t.x = 613,
        t.y = 324,
        t.elementsContent = [this.map_start_21006_i(), this.map_startTitle_21006_i()],
        t
    },
    a.map_start_21006_i = function() {
        var t = new eui.Image;
        return this.map_start_21006 = t,
        t.height = 111,
        t.name = "map_start_21006",
        t.source = "worldMapStar_map_start_21006_png",
        t.width = 117,
        t.x = 2,
        t.y = 0,
        t
    },
    a.map_startTitle_21006_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21006 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_21006_png",
        t.width = 115,
        t.x = 0,
        t.y = 91,
        t
    },
    a.start_21007_i = function() {
        var t = new eui.Group;
        return this.start_21007 = t,
        t.x = 626,
        t.y = 138,
        t.elementsContent = [this.map_start_21007_i(), this.map_startTitle_21007_i()],
        t
    },
    a.map_start_21007_i = function() {
        var t = new eui.Image;
        return this.map_start_21007 = t,
        t.height = 121,
        t.name = "map_start_21007",
        t.source = "worldMapStar_map_start_21007_png",
        t.width = 84,
        t.x = 25,
        t.y = 0,
        t
    },
    a.map_startTitle_21007_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21007 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_21007_png",
        t.width = 136,
        t.x = 0,
        t.y = 96,
        t
    },
    a.start_21008_i = function() {
        var t = new eui.Group;
        return this.start_21008 = t,
        t.x = 467,
        t.y = 39,
        t.elementsContent = [this.map_start_21008_i(), this.map_startTitle_21008_i()],
        t
    },
    a.map_start_21008_i = function() {
        var t = new eui.Image;
        return this.map_start_21008 = t,
        t.height = 62,
        t.name = "map_start_21008",
        t.source = "worldMapStar_map_start_21008_png",
        t.width = 125,
        t.x = 5,
        t.y = 0,
        t
    },
    a.map_startTitle_21008_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21008 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_21008_png",
        t.width = 136,
        t.x = 0,
        t.y = 52,
        t
    },
    a.start_21009_i = function() {
        var t = new eui.Group;
        return this.start_21009 = t,
        t.x = 841,
        t.y = 163,
        t.elementsContent = [this.map_start_21009_i(), this.map_startTitle_21009_i()],
        t
    },
    a.map_start_21009_i = function() {
        var t = new eui.Image;
        return this.map_start_21009 = t,
        t.height = 111,
        t.name = "map_start_21009",
        t.source = "worldMapStar_map_start_21009_png",
        t.width = 108,
        t.x = 2,
        t.y = 0,
        t
    },
    a.map_startTitle_21009_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21009 = t,
        t.height = 29,
        t.source = "worldMapStar_map_startTitle_21009_png",
        t.width = 115,
        t.x = 0,
        t.y = 88,
        t
    },
    a.start_21010_i = function() {
        var t = new eui.Group;
        return this.start_21010 = t,
        t.x = 358,
        t.y = 186,
        t.elementsContent = [this.map_start_21010_i(), this.map_startTitle_21010_i()],
        t
    },
    a.map_start_21010_i = function() {
        var t = new eui.Image;
        return this.map_start_21010 = t,
        t.height = 139,
        t.name = "map_start_21010",
        t.source = "worldMapStar_map_start_21010_png",
        t.width = 175,
        t.x = 14,
        t.y = 0,
        t
    },
    a.map_startTitle_21010_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21010 = t,
        t.height = 28,
        t.source = "worldMapStar_map_startTitle_21010_png",
        t.width = 165,
        t.x = 0,
        t.y = 115,
        t
    },
    a.Bstars_i = function() {
        var t = new eui.Group;
        return this.Bstars = t,
        t.percentHeight = 100,
        t.touchEnabled = !1,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 14,
        t.y = 0,
        t.elementsContent = [this.bstars_209_i(), this.bstars_211_i(), this.bstars_212_i(), this.bstars_213_i(), this.bstars_214_i()],
        t
    },
    a.bstars_209_i = function() {
        var t = new eui.Group;
        return this.bstars_209 = t,
        t.visible = !1,
        t.x = 47,
        t.y = 100,
        t.elementsContent = [this.bstars_20901_i(), this.bstars_20903_i(), this.bstars_20902_i(), this.bstars_20904_i(), this.bstars_20906_i(), this.bstars_20905_i()],
        t
    },
    a.bstars_20901_i = function() {
        var t = new eui.Group;
        return this.bstars_20901 = t,
        t.x = 0,
        t.y = 93,
        t.elementsContent = [this.map_bstars_20901_i(), this.map_startTitle_20901_i()],
        t
    },
    a.map_bstars_20901_i = function() {
        var t = new eui.Image;
        return this.map_bstars_20901 = t,
        t.height = 188,
        t.name = "map_bstars_20901",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_20901_png",
        t.width = 187,
        t.x = 117,
        t.y = 0,
        t
    },
    a.map_startTitle_20901_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20901 = t,
        t.height = 64,
        t.source = "worldMapStar_map_startTitle_20901_png",
        t.touchEnabled = !0,
        t.width = 170,
        t.x = 0,
        t.y = 90,
        t
    },
    a.bstars_20903_i = function() {
        var t = new eui.Group;
        return this.bstars_20903 = t,
        t.x = 435,
        t.y = 0,
        t.elementsContent = [this.map_bstars_20903_i(), this.map_startTitle_20903_i()],
        t
    },
    a.map_bstars_20903_i = function() {
        var t = new eui.Image;
        return this.map_bstars_20903 = t,
        t.height = 254,
        t.name = "map_bstars_20903",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_20903_png",
        t.width = 209,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20903_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20903 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_20903_png",
        t.width = 201,
        t.x = 113,
        t.y = 36,
        t
    },
    a.bstars_20902_i = function() {
        var t = new eui.Group;
        return this.bstars_20902 = t,
        t.x = 114,
        t.y = 151,
        t.elementsContent = [this.map_bstars_20902_i(), this.map_startTitle_20902_i()],
        t
    },
    a.map_bstars_20902_i = function() {
        var t = new eui.Image;
        return this.map_bstars_20902 = t,
        t.height = 182,
        t.name = "map_bstars_20902",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_20902_png",
        t.width = 240,
        t.x = 106,
        t.y = 0,
        t
    },
    a.map_startTitle_20902_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20902 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_20902_png",
        t.width = 189,
        t.x = 0,
        t.y = 125,
        t
    },
    a.bstars_20904_i = function() {
        var t = new eui.Group;
        return this.bstars_20904 = t,
        t.x = 230,
        t.y = 258,
        t.elementsContent = [this.map_bstars_20904_i(), this.map_startTitle_20904_i()],
        t
    },
    a.map_bstars_20904_i = function() {
        var t = new eui.Image;
        return this.map_bstars_20904 = t,
        t.height = 183,
        t.name = "map_bstars_20904",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_20904_png",
        t.width = 257,
        t.x = 51,
        t.y = 0,
        t
    },
    a.map_startTitle_20904_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20904 = t,
        t.height = 70,
        t.source = "worldMapStar_map_startTitle_20904_png",
        t.width = 179,
        t.x = 0,
        t.y = 140,
        t
    },
    a.bstars_20906_i = function() {
        var t = new eui.Group;
        return this.bstars_20906 = t,
        t.visible = !0,
        t.x = 702,
        t.y = 107,
        t.elementsContent = [this.map_bstars_20906_i(), this.map_startTitle_20906_i()],
        t
    },
    a.map_bstars_20906_i = function() {
        var t = new eui.Image;
        return this.map_bstars_20906 = t,
        t.height = 259,
        t.name = "map_bstars_20906",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_20906_png",
        t.width = 224,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20906_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20906 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_20906_png",
        t.width = 179,
        t.x = 138,
        t.y = 202,
        t
    },
    a.bstars_20905_i = function() {
        var t = new eui.Group;
        return this.bstars_20905 = t,
        t.x = 511,
        t.y = 198,
        t.elementsContent = [this.map_bstars_20905_i(), this.map_startTitle_20905_i()],
        t
    },
    a.map_bstars_20905_i = function() {
        var t = new eui.Image;
        return this.map_bstars_20905 = t,
        t.height = 206,
        t.name = "map_bstars_20905",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_20905_png",
        t.width = 213,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_20905_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_20905 = t,
        t.height = 60,
        t.source = "worldMapStar_map_startTitle_20905_png",
        t.width = 202,
        t.x = 120,
        t.y = 167,
        t
    },
    a.bstars_211_i = function() {
        var t = new eui.Group;
        return this.bstars_211 = t,
        t.visible = !1,
        t.x = 111,
        t.y = 85,
        t.elementsContent = [this.bstars_21103_i(), this.bstars_21104_i(), this.bstars_21101_i(), this.bstars_21102_i(), this.bstars_21105_i()],
        t
    },
    a.bstars_21103_i = function() {
        var t = new eui.Group;
        return this.bstars_21103 = t,
        t.x = 174,
        t.y = 0,
        t.elementsContent = [this.map_bstars_21103_i(), this.map_startTitle_21103_i()],
        t
    },
    a.map_bstars_21103_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21103 = t,
        t.height = 202,
        t.name = "map_bstars_21103",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21103_png",
        t.width = 127,
        t.x = 111,
        t.y = 20,
        t
    },
    a.map_startTitle_21103_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21103 = t,
        t.height = 64,
        t.source = "worldMapStar_map_startTitle_21103_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    a.bstars_21104_i = function() {
        var t = new eui.Group;
        return this.bstars_21104 = t,
        t.x = 396,
        t.y = 44,
        t.elementsContent = [this.map_bstars_21104_i(), this.map_startTitle_21104_i()],
        t
    },
    a.map_bstars_21104_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21104 = t,
        t.height = 287,
        t.name = "map_bstars_21104",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21104_png",
        t.width = 318,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21104_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21104 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21104_png",
        t.width = 201,
        t.x = 228,
        t.y = 16,
        t
    },
    a.bstars_21101_i = function() {
        var t = new eui.Group;
        return this.bstars_21101 = t,
        t.x = 0,
        t.y = 98,
        t.elementsContent = [this.map_bstars_21101_i(), this.map_startTitle_21101_i()],
        t
    },
    a.map_bstars_21101_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21101 = t,
        t.height = 241,
        t.name = "map_bstars_21101",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21101_png",
        t.width = 320,
        t.x = 53,
        t.y = 0,
        t
    },
    a.map_startTitle_21101_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21101 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21101_png",
        t.width = 189,
        t.x = 0,
        t.y = 203,
        t
    },
    a.bstars_21102_i = function() {
        var t = new eui.Group;
        return this.bstars_21102 = t,
        t.x = 176,
        t.y = 208,
        t.elementsContent = [this.map_bstars_21102_i(), this.map_startTitle_21102_i()],
        t
    },
    a.map_bstars_21102_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21102 = t,
        t.height = 222,
        t.name = "map_bstars_21102",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21102_png",
        t.width = 360,
        t.x = 55,
        t.y = 0,
        t
    },
    a.map_startTitle_21102_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21102 = t,
        t.height = 70,
        t.source = "worldMapStar_map_startTitle_21102_png",
        t.width = 179,
        t.x = 0,
        t.y = 185,
        t
    },
    a.bstars_21105_i = function() {
        var t = new eui.Group;
        return this.bstars_21105 = t,
        t.x = 541,
        t.y = 186,
        t.elementsContent = [this.map_bstars_21105_i(), this.map_startTitle_21105_i()],
        t
    },
    a.map_bstars_21105_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21105 = t,
        t.height = 286,
        t.name = "map_bstars_21105",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21105_png",
        t.visible = !0,
        t.width = 314,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21105_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21105 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21105_png",
        t.width = 179,
        t.x = 215,
        t.y = 198,
        t
    },
    a.bstars_212_i = function() {
        var t = new eui.Group;
        return this.bstars_212 = t,
        t.visible = !1,
        t.x = 77,
        t.y = 53,
        t.elementsContent = [this.bstars_21209_i(), this.bstars_21207_i(), this.bstars_21208_i(), this.bstars_21202_i(), this.bstars_21201_i(), this.bstars_21206_i(), this.bstars_21205_i(), this.bstars_21204_i(), this.bstars_21203_i()],
        t
    },
    a.bstars_21209_i = function() {
        var t = new eui.Group;
        return this.bstars_21209 = t,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 107,
        t.y = 79,
        t.elementsContent = [this.map_bstars_21209_i(), this.map_startTitle_21209_i()],
        t
    },
    a.map_bstars_21209_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21209 = t,
        t.height = 475,
        t.name = "map_bstars_21209",
        t.source = "worldMapStar_map_bstars_21209_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 762,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21209_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21209 = t,
        t.name = "map_bstars_21209",
        t.source = "",
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 101,
        t.y = 79,
        t
    },
    a.bstars_21207_i = function() {
        var t = new eui.Group;
        return this.bstars_21207 = t,
        t.x = 581,
        t.y = 101,
        t.elementsContent = [this.map_bstars_21207_i(), this.map_startTitle_21207_i()],
        t
    },
    a.map_bstars_21207_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21207 = t,
        t.height = 307,
        t.name = "map_bstars_21207",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21207_png",
        t.width = 335,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21207_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21207 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21207_png",
        t.width = 179,
        t.x = 179,
        t.y = 245,
        t
    },
    a.bstars_21208_i = function() {
        var t = new eui.Group;
        return this.bstars_21208 = t,
        t.x = 121,
        t.y = 436,
        t.elementsContent = [this.map_bstars_21208_i(), this.map_startTitle_21208_i()],
        t
    },
    a.map_bstars_21208_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21208 = t,
        t.height = 123,
        t.name = "map_bstars_21208",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21208_png",
        t.width = 367,
        t.x = 49,
        t.y = 0,
        t
    },
    a.map_startTitle_21208_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21208 = t,
        t.height = 64,
        t.source = "worldMapStar_map_startTitle_21208_png",
        t.width = 170,
        t.x = 0,
        t.y = 25,
        t
    },
    a.bstars_21202_i = function() {
        var t = new eui.Group;
        return this.bstars_21202 = t,
        t.x = 170,
        t.y = 0,
        t.elementsContent = [this.map_bstars_21202_i(), this.map_startTitle_21202_i()],
        t
    },
    a.map_bstars_21202_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21202 = t,
        t.height = 157,
        t.name = "map_bstars_21202",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21202_png",
        t.width = 184,
        t.x = 88,
        t.y = 12,
        t
    },
    a.map_startTitle_21202_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21202 = t,
        t.height = 64,
        t.source = "worldMapStar_map_startTitle_21202_png",
        t.width = 170,
        t.x = 0,
        t.y = 0,
        t
    },
    a.bstars_21201_i = function() {
        var t = new eui.Group;
        return this.bstars_21201 = t,
        t.x = 0,
        t.y = 84,
        t.elementsContent = [this.map_bstars_21201_i(), this.map_startTitle_21201_i()],
        t
    },
    a.map_bstars_21201_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21201 = t,
        t.height = 136,
        t.name = "map_bstars_21201",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21201_png",
        t.width = 195,
        t.x = 116,
        t.y = 0,
        t
    },
    a.map_startTitle_21201_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21201 = t,
        t.height = 64,
        t.source = "worldMapStar_map_startTitle_21201_png",
        t.width = 170,
        t.x = 0,
        t.y = 46,
        t
    },
    a.bstars_21206_i = function() {
        var t = new eui.Group;
        return this.bstars_21206 = t,
        t.x = 417,
        t.y = 21,
        t.elementsContent = [this.map_bstars_21206_i(), this.map_startTitle_21206_i()],
        t
    },
    a.map_bstars_21206_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21206 = t,
        t.height = 136,
        t.name = "map_bstars_21206",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21206_png",
        t.width = 153,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21206_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21206 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21206_png",
        t.width = 201,
        t.x = 101,
        t.y = 28,
        t
    },
    a.bstars_21205_i = function() {
        var t = new eui.Group;
        return this.bstars_21205 = t,
        t.x = 364,
        t.y = 110,
        t.elementsContent = [this.map_bstars_21205_i(), this.map_startTitle_21205_i()],
        t
    },
    a.map_bstars_21205_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21205 = t,
        t.height = 153,
        t.name = "map_bstars_21205",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21205_png",
        t.width = 170,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21205_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21205 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21205_png",
        t.width = 181,
        t.x = 104,
        t.y = 52,
        t
    },
    a.bstars_21204_i = function() {
        var t = new eui.Group;
        return this.bstars_21204 = t,
        t.x = 301,
        t.y = 180,
        t.elementsContent = [this.map_bstars_21204_i(), this.map_startTitle_21204_i()],
        t
    },
    a.map_bstars_21204_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21204 = t,
        t.height = 110,
        t.name = "map_bstars_21204",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21204_png",
        t.width = 178,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21204_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21204 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21204_png",
        t.width = 179,
        t.x = 39,
        t.y = 86,
        t
    },
    a.bstars_21203_i = function() {
        var t = new eui.Group;
        return this.bstars_21203 = t,
        t.x = 34,
        t.y = 163,
        t.elementsContent = [this.map_bstars_21203_i(), this.map_startTitle_21203_i()],
        t
    },
    a.map_bstars_21203_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21203 = t,
        t.height = 139,
        t.name = "map_bstars_21203",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21203_png",
        t.width = 170,
        t.x = 130,
        t.y = 0,
        t
    },
    a.map_startTitle_21203_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21203 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21203_png",
        t.width = 189,
        t.x = 0,
        t.y = 80,
        t
    },
    a.bstars_213_i = function() {
        var t = new eui.Group;
        return this.bstars_213 = t,
        t.visible = !1,
        t.x = 121,
        t.y = 88,
        t.elementsContent = [this.bstars_21305_i(), this.bstars_21302_i(), this.bstars_21303_i(), this.bstars_21304_i(), this.bstars_21301_i()],
        t
    },
    a.bstars_21305_i = function() {
        var t = new eui.Group;
        return this.bstars_21305 = t,
        t.x = 548,
        t.y = 82,
        t.elementsContent = [this.map_bstars_21305_i(), this.map_startTitle_21305_i()],
        t
    },
    a.map_bstars_21305_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21305 = t,
        t.height = 257,
        t.source = "worldMapStar_map_bstars_21305_png",
        t.width = 266,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21305_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21305 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21305_png",
        t.width = 201,
        t.x = 197,
        t.y = 65,
        t
    },
    a.bstars_21302_i = function() {
        var t = new eui.Group;
        return this.bstars_21302 = t,
        t.x = 94,
        t.y = 0,
        t.elementsContent = [this.map_bstars_21302_i(), this.map_startTitle_21302_i()],
        t
    },
    a.map_bstars_21302_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21302 = t,
        t.height = 174,
        t.source = "worldMapStar_map_bstars_21302_png",
        t.width = 271,
        t.x = 105,
        t.y = 0,
        t
    },
    a.map_startTitle_21302_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21302 = t,
        t.height = 64,
        t.source = "worldMapStar_map_startTitle_21302_png",
        t.width = 170,
        t.x = 0,
        t.y = 58,
        t
    },
    a.bstars_21303_i = function() {
        var t = new eui.Group;
        return this.bstars_21303 = t,
        t.x = 311,
        t.y = 75,
        t.elementsContent = [this.map_bstars_21303_i(), this.map_startTitle_21303_i()],
        t
    },
    a.map_bstars_21303_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21303 = t,
        t.height = 234,
        t.source = "worldMapStar_map_bstars_21303_png",
        t.width = 300,
        t.x = 0,
        t.y = 42,
        t
    },
    a.map_startTitle_21303_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21303 = t,
        t.height = 82,
        t.source = "worldMapStar_map_startTitle_21303_png",
        t.width = 208,
        t.x = 164,
        t.y = 0,
        t
    },
    a.bstars_21304_i = function() {
        var t = new eui.Group;
        return this.bstars_21304 = t,
        t.x = 432,
        t.y = 294,
        t.elementsContent = [this.map_bstars_21304_i(), this.map_startTitle_21304_i()],
        t
    },
    a.map_bstars_21304_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21304 = t,
        t.height = 203,
        t.source = "worldMapStar_map_bstars_21304_png",
        t.width = 328,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21304_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21304 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21304_png",
        t.width = 179,
        t.x = 244,
        t.y = 90,
        t
    },
    a.bstars_21301_i = function() {
        var t = new eui.Group;
        return this.bstars_21301 = t,
        t.x = 0,
        t.y = 174,
        t.elementsContent = [this.map_bstars_21301_i(), this.map_startTitle_21301_i()],
        t
    },
    a.map_bstars_21301_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21301 = t,
        t.height = 277,
        t.source = "worldMapStar_map_bstars_21301_png",
        t.width = 314,
        t.x = 68,
        t.y = 0,
        t
    },
    a.map_startTitle_21301_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21301 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21301_png",
        t.width = 189,
        t.x = 0,
        t.y = 137,
        t
    },
    a.bstars_214_i = function() {
        var t = new eui.Group;
        return this.bstars_214 = t,
        t.visible = !1,
        t.x = 46,
        t.y = 98,
        t.elementsContent = [this.bstars_21402_i(), this.bstars_21401_i(), this.bstars_21405_i(), this.bstars_21403_i(), this.bstars_21404_i()],
        t
    },
    a.bstars_21402_i = function() {
        var t = new eui.Group;
        return this.bstars_21402 = t,
        t.x = 413,
        t.y = 0,
        t.elementsContent = [this.map_bstars_21402_i(), this.map_startTitle_21402_i()],
        t
    },
    a.map_bstars_21402_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21402 = t,
        t.height = 280,
        t.name = "map_bstars_21402",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21402_png",
        t.width = 277,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_21402_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21402 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21402_png",
        t.width = 201,
        t.x = 136,
        t.y = 4,
        t
    },
    a.bstars_21401_i = function() {
        var t = new eui.Group;
        return this.bstars_21401 = t,
        t.x = 75,
        t.y = 63,
        t.elementsContent = [this.map_bstars_21401_i(), this.map_startTitle_21401_i()],
        t
    },
    a.map_bstars_21401_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21401 = t,
        t.height = 236,
        t.name = "map_bstars_21401",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21401_png",
        t.width = 292,
        t.x = 133,
        t.y = 0,
        t
    },
    a.map_startTitle_21401_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21401 = t,
        t.height = 64,
        t.source = "worldMapStar_map_startTitle_21401_png",
        t.width = 200,
        t.x = 0,
        t.y = 42,
        t
    },
    a.bstars_21405_i = function() {
        var t = new eui.Group;
        return this.bstars_21405 = t,
        t.x = 569,
        t.y = 151,
        t.elementsContent = [this.map_bstars_21405_i(), this.map_startTitle_213405_i()],
        t
    },
    a.map_bstars_21405_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21405 = t,
        t.height = 215,
        t.name = "map_bstars_21405",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21405_png",
        t.width = 374,
        t.x = 0,
        t.y = 0,
        t
    },
    a.map_startTitle_213405_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_213405 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_213405_png",
        t.width = 181,
        t.x = 220,
        t.y = 26,
        t
    },
    a.bstars_21403_i = function() {
        var t = new eui.Group;
        return this.bstars_21403 = t,
        t.x = 0,
        t.y = 211,
        t.elementsContent = [this.map_bstars_21403_i(), this.map_startTitle_21403_i()],
        t
    },
    a.map_bstars_21403_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21403 = t,
        t.height = 222,
        t.name = "map_bstars_21403",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21403_png",
        t.width = 323,
        t.x = 96,
        t.y = 0,
        t
    },
    a.map_startTitle_21403_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21403 = t,
        t.height = 64,
        t.source = "worldMapStar_map_startTitle_21403_png",
        t.width = 180,
        t.x = 0,
        t.y = 5,
        t
    },
    a.bstars_21404_i = function() {
        var t = new eui.Group;
        return this.bstars_21404 = t,
        t.x = 342,
        t.y = 215,
        t.elementsContent = [this.map_bstars_21404_i(), this.map_startTitle_21404_i()],
        t
    },
    a.map_bstars_21404_i = function() {
        var t = new eui.Image;
        return this.map_bstars_21404 = t,
        t.height = 254,
        t.name = "map_bstars_21404",
        t.pixelHitTest = !0,
        t.source = "worldMapStar_map_bstars_21404_png",
        t.width = 396,
        t.x = 38,
        t.y = 0,
        t
    },
    a.map_startTitle_21404_i = function() {
        var t = new eui.Image;
        return this.map_startTitle_21404 = t,
        t.height = 61,
        t.source = "worldMapStar_map_startTitle_21404_png",
        t.width = 189,
        t.x = 0,
        t.y = 195,
        t
    },
    a.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.left = 0,
        t.touchEnabled = !1,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this.showG_i(), this.hideG_i()],
        t
    },
    a.showG_i = function() {
        var t = new eui.Group;
        return this.showG = t,
        t.touchEnabled = !1,
        t.touchThrough = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.tmp4_i(), this.tmp3_i(), this.imgBtnHide_i(), this.itemRen_i()],
        t
    },
    a.tmp4_i = function() {
        var t = new eui.Image;
        return this.tmp4 = t,
        t.height = 640,
        t.source = "worldMapStar_tmp4_png",
        t.width = 290,
        t.x = 0,
        t.y = 0,
        t
    },
    a.tmp3_i = function() {
        var t = new eui.Image;
        return this.tmp3 = t,
        t.height = 640,
        t.source = "worldMapStar_tmp3_png",
        t.width = 1,
        t.x = 289,
        t.y = 0,
        t
    },
    a.imgBtnHide_i = function() {
        var t = new eui.Image;
        return this.imgBtnHide = t,
        t.height = 80,
        t.source = "worldMapStar_imgBtnHide_png",
        t.width = 26,
        t.x = 289,
        t.y = 290,
        t
    },
    a.itemRen_i = function() {
        var t = new eui.Group;
        return this.itemRen = t,
        t.x = 15,
        t.y = 15,
        t.elementsContent = [this.scl_items_i()],
        t
    },
    a.scl_items_i = function() {
        var t = new eui.Scroller;
        return this.scl_items = t,
        t.anchorOffsetY = 0,
        t.height = 605,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "auto",
        t.width = 270,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group1_i(),
        t
    },
    a._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.scl_items_viewport_i()],
        t
    },
    a.scl_items_viewport_i = function() {
        var t = new eui.List;
        return this.scl_items_viewport = t,
        t.scrollEnabled = !1,
        t.width = 270,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    a._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 18,
        t
    },
    a.hideG_i = function() {
        var t = new eui.Group;
        return this.hideG = t,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.tmp1_i(), this.tmp_i(), this.imgOpenBtn_i()],
        t
    },
    a.tmp1_i = function() {
        var t = new eui.Image;
        return this.tmp1 = t,
        t.height = 640,
        t.source = "worldMapStar_tmp1_png",
        t.width = 20,
        t.x = 0,
        t.y = 0,
        t
    },
    a.tmp_i = function() {
        var t = new eui.Image;
        return this.tmp = t,
        t.height = 640,
        t.source = "worldMapStar_tmp_png",
        t.width = 1,
        t.x = 19,
        t.y = 0,
        t
    },
    a.imgOpenBtn_i = function() {
        var t = new eui.Image;
        return this.imgOpenBtn = t,
        t.height = 80,
        t.source = "worldMapStar_imgOpenBtn_png",
        t.width = 26,
        t.x = 19,
        t.y = 290,
        t
    },
    a.galaxy_i = function() {
        var t = new eui.Group;
        return this.galaxy = t,
        t.horizontalCenter = 0,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.visible = !1,
        t.percentWidth = 100,
        t.y = 0,
        t.elementsContent = [this.gBg_i(), this.gName_i(), this._Image1_i(), this._Image2_i()],
        t
    },
    a.gBg_i = function() {
        var t = new eui.Image;
        return this.gBg = t,
        t.horizontalCenter = 0,
        t.source = "worldMapStar_gBg_png",
        t.y = 0,
        t
    },
    a.gName_i = function() {
        var t = new eui.Label;
        return this.gName = t,
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "帕诺星系—双子阿尔法星",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 198,
        t.y = 11,
        t
    },
    a._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "worldMapStar_leftbg_png",
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    a._Image2_i = function() {
        var t = new eui.Image;
        return t.right = 0,
        t.source = "worldMapStar_rightbg_png",
        t.touchEnabled = !1,
        t.y = 0,
        t
    },
    a.imgBtnClose_i = function() {
        var t = new eui.Image;
        return this.imgBtnClose = t,
        t.right = 3,
        t.source = "worldMapStar_btnClose_2_png",
        t.visible = !0,
        t.y = 3,
        t
    },
    a.mapTip_i = function() {
        var t = new eui.Group;
        return this.mapTip = t,
        t.percentHeight = 100,
        t.visible = !1,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.diBg_i(), this.panelG_i()],
        t
    },
    a.diBg_i = function() {
        var t = new eui.Image;
        return this.diBg = t,
        t.percentHeight = 100,
        t.source = "worldMapStar_diBg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    a.panelG_i = function() {
        var t = new eui.Group;
        return this.panelG = t,
        t.horizontalCenter = 0,
        t.y = 191,
        t.elementsContent = [this.starpanelBg_i(), this.starName_i(), this.imgBtnGo_i(), this.imgNotOpen_i(), this.starDes_i(), this.starImage_i()],
        t
    },
    a.starpanelBg_i = function() {
        var t = new eui.Image;
        return this.starpanelBg = t,
        t.height = 268,
        t.source = "worldMapStar_starpanelBg_png",
        t.width = 630,
        t.x = 0,
        t.y = 0,
        t
    },
    a.starName_i = function() {
        var t = new eui.Label;
        return this.starName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "克洛斯星",
        t.textAlign = "center",
        t.textColor = 14674687,
        t.width = 120,
        t.x = 39,
        t.y = 188,
        t
    },
    a.imgBtnGo_i = function() {
        var t = new eui.Image;
        return this.imgBtnGo = t,
        t.height = 40,
        t.source = "worldMapStar_imgBtnGo_png",
        t.width = 120,
        t.x = 314,
        t.y = 173,
        t
    },
    a.imgNotOpen_i = function() {
        var t = new eui.Image;
        return this.imgNotOpen = t,
        t.height = 56,
        t.source = "worldMapStar_imgNotOpen_png",
        t.width = 136,
        t.x = 306,
        t.y = 165,
        t
    },
    a.starDes_i = function() {
        var t = new eui.Label;
        return this.starDes = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "星球说明九十个字以内星球说明九十个字以内星球说明九十个字以内星球说明九十个字以内星球说明九十个字以内星球说明九十个字以内星球说明九十个字以内星球说明九十个字以内星球说明九十个字以内",
        t.textAlign = "left",
        t.textColor = 14674687,
        t.width = 400,
        t.x = 177,
        t.y = 68,
        t
    },
    a.starImage_i = function() {
        var t = new eui.Image;
        return this.starImage = t,
        t.height = 85,
        t.source = "worldMapStar_starImage_png",
        t.width = 85,
        t.x = 55,
        t.y = 80,
        t
    },
    i
} (eui.Skin);