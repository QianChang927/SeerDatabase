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
    return new(i || (i = Promise))(function(a, r) {
        function s(t) {
            try {
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function o(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, o)
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (a = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, s, o, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
newWorldMap; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            return i.sePanel = null,
            i._ary = [],
            i.lastSelectIdx = 0,
            i.worldType = 1,
            i.showStar = !1,
            i.skinName = "NewWorldmapstarSkin",
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            null != this.data && (Array.isArray(this.data) ? (this.worldType = this.data[0], this.lastSelectIdx = this.data[1], this._selectStar = this.lastSelectIdx, this.showStar = !0) : this.worldType = this.data),
            this.mapTip.visible = !1,
            this.stars.x = (egret.lifecycle.stage.stageWidth - this.stars.width) / 2,
            this.stars.y = (egret.lifecycle.stage.stageHeight - this.stars.height) / 2,
            this.starGroup = new eui.Group,
            this.starGroup.touchEnabled = !1,
            this.stars.addChild(this.starGroup),
            config.Starmaplist.load(function(e) {
                config.Starmap.load(function(e) {
                    t.enter()
                },
                t)
            },
            this)
        },
        i.prototype.enter = function() {
            this.starMapInfos = config.Starmap.getItems();
            var e = config.Starmaplist.getItemsByField("uni", ["=="], [this.worldType]);
            return this._ary = e,
            this.addEvent(),
            this.showStar || this.hide(),
            null == this.sePanel ? (this.sePanel = new t.NewWorldMapSelectGalaxy(this.worldType), LevelManager.appLevel.addChild(this.sePanel), void(this.showStar && (this.sePanel.hide(), this.setSelectStar(this.lastSelectIdx)))) : (this.sePanel.show(), this.isShow = !1, void this.setSelectStar(this.lastSelectIdx))
        },
        i.prototype.openMapTip = function(t, e) {
            if (void 0 === e && (e = 0), 2 != this.mapsOpenArr[t]) {
                var i = this._ary[this.selectStar];
                this._openType = e,
                this.starInfo = config.Starmap.getItemsByField("id", ["=="], [t])[0],
                this.mapTip.visible = !0,
                this.starName.text = this.starInfo.name;
                var n = ("        " + this.starInfo.intro).split("|");
                this.starDes1.text = n[0],
                this.starDes2.text = n[1] || "";
                var a = new eui.Image;
                a.texture = RES.getRes("group_star_sheet_" + i.id + ".map_start_" + this.starInfo.id + "_png"),
                this.starImage.width = a.width,
                this.starImage.height = a.height,
                a.texture = null,
                a = null,
                this.starImage.texture = RES.getRes("group_star_sheet_" + i.id + ".map_start_" + this.starInfo.id + "_png");
                var r = 85 / this.starImage.height,
                s = this.starImage.width * r;
                this.starImage.height = 85,
                this.starImage.width = s,
                this.starImage.x = 97.5 - this.starImage.width / 2,
                this.starImage.y = 124.5 - this.starImage.height / 2,
                this.imgNotOpen.visible = 0 == this.mapsOpenArr[t],
                this.imgBtnGo.visible = !this.imgNotOpen.visible
            }
        },
        i.prototype.onTouchTapImageButton = function(t) {
            var e = t.target.name,
            i = -1;
            if (e.split("_").length > 2) switch (i = Number(e.split("_")[2]), e) {
            case "map_star_" + i: e == "map_star_" + i ? (this.isShow && (this.isShow = !1), this.openMapTip(i)) : (this.isShow && (this.isShow = !1), this.openMapTip(i))
            } else switch (t.target) {
            case this.imgBtnClose:
                StatLogger.log("H5地图系统", "地图主界面", "在帕诺/卡兰/罗格等所有星系面板点击【X】"),
                this.hide(),
                this.sePanel.show();
                break;
            case this.imgBtnGo:
                this.onClose(),
                MapManager.changeMap(this.starInfo.Gotomap),
                ToolBarManager.SetBackToMapData(this.worldType, this._selectStar),
                ToolBarManager.SetToolBarState("map")
            }
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtnGo, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.imgBtnClose, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.btnTurnpagesleft,
            function() {
                t._selectStar--,
                t.setSelectStar(t._selectStar)
            },
            this),
            ImageButtonUtil.add(this.btnTurnpagesright,
            function() {
                t._selectStar++,
                t.setSelectStar(t._selectStar)
            },
            this),
            this.diBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideTipHandle, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapImageButton, this),
            EventManager.addEventListener("ChangeStar",
            function(e) {
                t.show(),
                t._selectStar = e.data,
                t.setSelectStar(e.data)
            },
            this),
            EventManager.addEventListener("onClose",
            function() {
                t.onClose(),
                ModuleManager.showModuleByID(config.ModuleConst.WORLD_MAP)
            },
            this)
        },
        i.prototype.hideTipHandle = function(t) {
            var e = this;
            this.mapTip.visible = !1,
            1 == this._openType && egret.Tween.get(this.stars).to({
                scaleX: 1,
                scaleY: 1
            },
            300).call(function() {
                e.stars.anchorOffsetX = 0,
                e.stars.anchorOffsetY = 0,
                e.stars.x = (egret.lifecycle.stage.stageWidth - e.stars.width) / 2 - 12.5,
                e.stars.y = (egret.lifecycle.stage.stageHeight - e.stars.height) / 2
            })
        },
        i.prototype.setSelectStar = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, a, r, s, o, h, l, p, g, u, c, _, d, m, y, f, w, x, v, S, I, b, C, M, T, B, E = this;
                return __generator(this,
                function(G) {
                    switch (G.label) {
                    case 0:
                        switch (this.btnTurnpagesleft.visible = 0 != this._selectStar, this.btnTurnpagesright.visible = this._selectStar != this._ary.length - 1, t) {
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
                        return this._selectStar = t,
                        this.sBg.source = null,
                        e = this._ary[this.selectStar],
                        "0" != e.StarBG && "" != e.StarBG && (this.sBg.source = ClientConfig.getStarMapBg(e.StarBG)),
                        0 == e.isopen ? (Alarm.show("暂未开放，敬请期待"), [2]) : (this.gName.text = e.name, 0 != RES.getGroupByName("newWorld_" + e.id).length ? [3, 3] : (LoadingManager.instance.showloading("正在加载资源，请稍候！"), [4, RES.loadConfig(ClientConfig.getStarMapRootUrl() + e.id + "/map.json", ClientConfig.getStarMapRootUrl() + e.id + "/")]));
                    case 1:
                        return G.sent(),
                        [4, RES.loadGroup("newWorld_" + e.id, 0)];
                    case 2:
                        G.sent(),
                        LoadingManager.instance.hideloading(),
                        G.label = 3;
                    case 3:
                        for (this.posJson = RES.getRes("posJson_" + e.id), i = this.posJson.group.x, n = this.posJson.group.y, a = e.StarID.split("_"), this.clearGroup(this.starGroup), this.starGroup.name = "stars_" + e.id, this.animas = [], s = 0; s < a.length; s++) r = ~~a[s],
                        o = new eui.Group,
                        o.touchEnabled = !1,
                        o.name = "star_" + r,
                        h = new eui.Image,
                        l = new eui.Image,
                        h.name = "map_star_" + r,
                        l.name = "map_starTitle_" + r,
                        o.addChild(h),
                        o.addChild(l),
                        o.touchThrough = !0,
                        h.pixelHitTest = !0,
                        l.touchEnabled = !1,
                        RES.hasRes("group_star_sheet_" + e.id + ".map_start_" + r + "_png") ? h.texture = RES.getRes("group_star_sheet_" + e.id + ".map_start_" + r + "_png") : console.log("缺少星球" + r + "素材"),
                        RES.hasRes("group_star_sheet_" + e.id + ".map_startTitle_" + r + "_png") ? l.texture = RES.getRes("group_star_sheet_" + e.id + ".map_startTitle_" + r + "_png") : console.log("缺少星球标题" + r + "素材"),
                        this.posJson["map_start_" + r + "_png"] && (p = this.posJson["map_start_" + r + "_png"].x, g = this.posJson["map_start_" + r + "_png"].y, h.x = p, h.y = g),
                        this.posJson["map_startTitle_" + r + "_png"] && (u = this.posJson["map_startTitle_" + r + "_png"].x, c = this.posJson["map_startTitle_" + r + "_png"].y, l.x = u, l.y = c),
                        o.x = i,
                        o.y = n,
                        this.starGroup.addChild(o);
                        for (_ = config.Starmaplist.getItemsByField("type", ["=="], [1]), d = config.Starmaplist.getItemsByField("type", ["=="], [2]), this.gName.text = e.name, this.mapsOpenArr = [], y = this.starGroup.numChildren, f = function(t) {
                            x = w.starGroup.getChildAt(t);
                            var e = x.getChildAt(0),
                            i = x.getChildAt(1);
                            if ( - 1 != e.name.indexOf("map_star_")) {
                                if (m = Number(e.name.split("_")[2]), w.mapsOpenArr[m] = w.getStartMapOpen(m), e.visible = !0, v = config.Starmap.getItemsByField("id", ["=="], [m])[0], 0 != v.anima && 1 == v.anima) {
                                    var n = DragonbonesUtil.createAnimate("xingqiu_ske_json", "xingqiu_tex_json", "xingqiu_tex_png", "xingqiuchuxian");
                                    n.x = e.x + e.width / 2 - 5,
                                    n.y = e.y + e.height / 2 + 5,
                                    e.parent.addChild(n),
                                    egret.lifecycle.stage.touchChildren = !1,
                                    w.animas.push(n),
                                    n.once(dragonBones.MovieEvent.COMPLETE,
                                    function() {
                                        var t = E.animas.indexOf(n); - 1 != t && E.animas.splice(t, 1),
                                        null != n.parent && n.parent.removeChild(n),
                                        n.dispose(),
                                        0 == E.animas.length && (egret.lifecycle.stage.touchChildren = !0)
                                    },
                                    w),
                                    n.animation.play("xingqiuchuxian", 1)
                                }
                                var a = e.y,
                                r = e.x,
                                s = i.y,
                                o = i.x;
                                if (S = 0, 0 != v.StarShow && 1 == v.StarShow && (I = v.StarContrl.split("_"), e.alpha = 0, S = ~~I[0], e.x += ~~I[1], e.y += ~~I[2], egret.Tween.get(e).to({
                                    x: r,
                                    y: a,
                                    alpha: 1
                                },
                                S)), 0 != v.TipShow) if (C = v.TipContrl.split("_"), 1 == v.TipShow) i.alpha = 0,
                                b = ~~C[0],
                                i.x += ~~C[1],
                                i.y += ~~C[2],
                                egret.Tween.get(i).wait(S).to({
                                    x: o,
                                    y: s,
                                    alpha: 1
                                },
                                b);
                                else if (2 == v.TipShow) {
                                    switch (M = new egret.Shape, M.graphics.beginFill(16777215, 1), M.graphics.drawRect(0, 0, i.width, i.height), M.graphics.endFill(), i.parent.addChild(M), i.mask = M, b = ~~C[0], T = ~~C[1]) {
                                    case 1:
                                        M.x = i.x - i.width,
                                        M.y = i.y;
                                        break;
                                    case 2:
                                        M.x = i.x + i.width,
                                        M.y = i.y;
                                        break;
                                    case 3:
                                        M.x = i.x,
                                        M.y = i.y - i.height;
                                        break;
                                    case 4:
                                        M.x = i.x,
                                        M.y = i.y + i.height;
                                        break;
                                    default:
                                        M.x = i.x + i.width,
                                        M.y = i.y
                                    }
                                    w.imgBtnClose.touchEnabled = !1,
                                    i.alpha = 1,
                                    egret.Tween.get(M).wait(S).to({
                                        x: i.x,
                                        y: i.y
                                    },
                                    b).call(function(t, e) {
                                        null != t.parent && t.parent.removeChild(t),
                                        e.mask = null,
                                        t = null,
                                        E.imgBtnClose.touchEnabled = !0
                                    },
                                    w, [M, i])
                                }
                            }
                        },
                        w = this, B = 0; y > B; B++) f(B);
                        return [2]
                    }
                })
            })
        },
        i.prototype.imgSourceComplete = function(t) {
            var e = t.currentTarget;
            e.removeEventListener(egret.Event.COMPLETE, this.imgSourceComplete, this);
            var i = ~~e.name.split("_")[2],
            n = (e.width, e.height),
            a = e.parent.getChildByName("map_starTitle_" + i);
            a && (a.y = n)
        },
        i.prototype.clearGroup = function(t) {
            for (; t.numChildren;) {
                var e = t.removeChildAt(0);
                e instanceof eui.Image ? (e.removeEventListener(egret.Event.COMPLETE, this.imgSourceComplete, this), e.texture = null) : e instanceof eui.Group && this.clearGroup(e),
                e = null
            }
        },
        i.prototype.getStartMapOpen = function(t) {
            for (var e, i = 0; i < this.starMapInfos.length; i++) if (e = this.starMapInfos[i], e.id == t) return e.isopen;
            return 0
        },
        Object.defineProperty(i.prototype, "selectStar", {
            get: function() {
                return this._selectStar
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.removeEvent = function() {
            this.diBg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hideTipHandle, this),
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapImageButton, this)
        },
        Object.defineProperty(i.prototype, "isShow", {
            get: function() {
                return this._isShow
            },
            set: function(t) {
                this._isShow = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.clearGroups = function() {
            if (this._ary) for (var t = 0; t < this._ary.length; t++) RES.destroyRes("newWorld_" + this._ary[t])
        },
        i.prototype.destroy = function() {
            this.sePanel && this.sePanel.destroy(),
            this.clearGroups(),
            this.starGroup && (this.clearGroup(this.starGroup), this.starGroup.parent && this.starGroup.parent.removeChild(this.starGroup), this.starGroup = null),
            this._ary = null,
            this.removeEvent(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.NewWorldMap = e,
    __reflect(e.prototype, "newWorldMap.NewWorldMap")
} (newWorldMap || (newWorldMap = {}));
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
newWorldMap; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = SelectgalaxyItemSkin,
            i.data = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initRes()
        },
        e.prototype.initRes = function() {
            var t = this.data;
            this.galaxyName.text = t.name,
            this.ItemImg.source = ClientConfig.getStarMapList(~~t.pic, 1),
            this.galaxyAnim = SpineUtil.createAnimate("quyuxingxi"),
            this.addChild(this.galaxyAnim),
            this.galaxyAnim.x = 100,
            this.galaxyAnim.y = 100,
            this.galaxyAnim.touchEnabled = !1,
            this.galaxyAnim.touchChildren = !1,
            this.galaxyAnim.play("xingxi_lizi", 0)
        },
        e
    } (eui.ItemRenderer);
    t.NewWorldMapGalaxyItem = e,
    __reflect(e.prototype, "newWorldMap.NewWorldMapGalaxyItem")
} (newWorldMap || (newWorldMap = {}));
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
newWorldMap; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.worldType = 1,
            i.starMapInfos = [],
            i.paddX = 300,
            i.skinName = SelectgalaxySkin,
            i.worldType = t,
            i
        }
        return __extends(i, e),
        i.prototype.initAnim = function() {
            this.galaxyAnim = SpineUtil.createAnimate("quyuxingxi"),
            this.addChild(this.galaxyAnim),
            this.galaxyAnim.x = egret.lifecycle.stage.stageWidth / 2,
            this.galaxyAnim.y = 320,
            this.galaxyAnim.visible = !1
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initGalagy(),
            this.initAnim(),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            for (var t = this,
            e = function(e) {
                ImageButtonUtil.add(i.galaxy.getChildAt(e - 1),
                function() {
                    t.galaxyAnim.visible = !0,
                    t.galaxyAnim.play("xingxi_chuanyue", 1, 0, {
                        playEnd: function() {
                            t.galaxyAnim.visible = !1,
                            t.hide(),
                            EventManager.dispatchEventWith("ChangeStar", !1, e - 1)
                        }
                    })
                },
                i)
            },
            i = this, n = 1; n <= this.galaxy.numChildren; n++) e(n);
            ImageButtonUtil.add(this.imgBtnClose,
            function() {
                EventManager.dispatchEventWith("onClose")
            },
            this),
            EventManager.addEventListener("NewWorldMapBackToStar",
            function(e) {
                t.galaxyAnim.visible = !0,
                t.galaxyAnim.play("xingxi_chuanyue", 1, 0, {
                    playEnd: function() {
                        t.galaxyAnim.visible = !1,
                        t.hide(),
                        EventManager.dispatchEventWith("ChangeStar", !1, e.data)
                    }
                })
            },
            this)
        },
        i.prototype.initGalagy = function() {
            for (var e = config.Starmaplist.getItemsByField("uni", ["=="], [this.worldType]), i = 1; i <= e.length; i++) {
                var n = new t.NewWorldMapGalaxyItem(e[i - 1]);
                this.galaxy.addChild(n),
                n.x = i % 2 == 1 ? 0 + this.paddX * Math.floor((i - 1) / 2) : 150 + this.paddX * Math.floor((i - 1) / 2),
                n.y = i % 2 == 1 ? 0 : 180,
                this.starMapInfos.push(n)
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.NewWorldMapSelectGalaxy = e,
    __reflect(e.prototype, "newWorldMap.NewWorldMapSelectGalaxy")
} (newWorldMap || (newWorldMap = {}));
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
newWorldMap; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = NewWorldmapstarItemRenderSkin,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            if (this.data) {
                var t = this.data;
                this.itemName.text = t.name,
                this.ItemImg.source = ClientConfig.getStarMapList(~~t.pic, 1),
                this.open = 1 == t.isopen,
                this.lockImg.visible = !this.open
            }
        },
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.NewWorldMapStarItemRender = e,
    __reflect(e.prototype, "newWorldMap.NewWorldMapStarItemRender")
} (newWorldMap || (newWorldMap = {}));
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
generateEUI.paths["resource/eui_skins/NewWorldmapstarItemRenderSkin.exml"] = window.NewWorldmapstarItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["ItemImg", "itemBg", "itemName", "selectImg", "lockImg"],
        this.height = 112,
        this.width = 262,
        this.elementsContent = [this.ItemImg_i(), this.itemBg_i(), this.itemName_i(), this.selectImg_i(), this.lockImg_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("selectImg", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.ItemImg_i = function() {
        var t = new eui.Image;
        return this.ItemImg = t,
        t.height = 112,
        t.source = "",
        t.width = 262,
        t.x = 0,
        t.y = 0,
        t
    },
    i.itemBg_i = function() {
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
    i.itemName_i = function() {
        var t = new eui.Label;
        return this.itemName = t,
        t.fontFamily = "MFShangHei",
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
    i.selectImg_i = function() {
        var t = new eui.Image;
        return this.selectImg = t,
        t.height = 112,
        t.source = "worldMap_select_png",
        t.width = 262,
        t.x = 0,
        t.y = 0,
        t
    },
    i.lockImg_i = function() {
        var t = new eui.Image;
        return this.lockImg = t,
        t.height = 112,
        t.source = "worldMap_lock_png",
        t.width = 262,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewWorldmapstarSkin.exml"] = window.NewWorldmapstarSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "sBg", "stars", "gBg", "gName", "leftbg", "rightbg", "imgBtnClose", "btnTurnpagesright", "btnTurnpagesleft", "diBg", "starpanelBg", "starImage", "starName", "imgBtnGo", "imgNotOpen", "starDes1", "starDes2", "panelG", "mapTip"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.stars_i(), this.gBg_i(), this.gName_i(), this.leftbg_i(), this.rightbg_i(), this.imgBtnClose_i(), this.btnTurnpagesright_i(), this.btnTurnpagesleft_i(), this.mapTip_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
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
    i.stars_i = function() {
        var t = new eui.Group;
        return this.stars = t,
        t.percentHeight = 100,
        t.touchEnabled = !1,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.sBg_i()],
        t
    },
    i.sBg_i = function() {
        var t = new eui.Image;
        return this.sBg = t,
        t.height = 640,
        t.visible = !0,
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    i.gBg_i = function() {
        var t = new eui.Image;
        return this.gBg = t,
        t.horizontalCenter = 0,
        t.source = "worldMapStar_gBg_png",
        t.touchEnabled = !1,
        t.y = 0,
        t
    },
    i.gName_i = function() {
        var t = new eui.Label;
        return this.gName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "帕诺星系—双子阿尔法星",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.width = 198,
        t.y = 11,
        t
    },
    i.leftbg_i = function() {
        var t = new eui.Image;
        return this.leftbg = t,
        t.left = -110,
        t.source = "worldMapStar_leftbg_png",
        t.touchEnabled = !1,
        t.y = 0,
        t
    },
    i.rightbg_i = function() {
        var t = new eui.Image;
        return this.rightbg = t,
        t.right = -110,
        t.source = "worldMapStar_rightbg_png",
        t.touchEnabled = !1,
        t.y = 0,
        t
    },
    i.imgBtnClose_i = function() {
        var t = new eui.Image;
        return this.imgBtnClose = t,
        t.right = 86,
        t.source = "worldMapStar_btnClose_2_png",
        t.visible = !0,
        t.y = 34,
        t
    },
    i.btnTurnpagesright_i = function() {
        var t = new eui.Image;
        return this.btnTurnpagesright = t,
        t.height = 68,
        t.right = 20,
        t.source = "worldMap_btnTurnpagesright_png",
        t.width = 45,
        t.y = 289,
        t
    },
    i.btnTurnpagesleft_i = function() {
        var t = new eui.Image;
        return this.btnTurnpagesleft = t,
        t.height = 68,
        t.left = 29,
        t.source = "worldMap_btnTurnpagesleft_png",
        t.width = 47,
        t.y = 289,
        t
    },
    i.mapTip_i = function() {
        var t = new eui.Group;
        return this.mapTip = t,
        t.percentHeight = 100,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.diBg_i(), this.panelG_i()],
        t
    },
    i.diBg_i = function() {
        var t = new eui.Image;
        return this.diBg = t,
        t.percentHeight = 100,
        t.source = "worldMapStar_diBg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.panelG_i = function() {
        var t = new eui.Group;
        return this.panelG = t,
        t.horizontalCenter = 0,
        t.y = 191,
        t.elementsContent = [this.starpanelBg_i(), this.starImage_i(), this.starName_i(), this.imgBtnGo_i(), this.imgNotOpen_i(), this._Group1_i()],
        t
    },
    i.starpanelBg_i = function() {
        var t = new eui.Image;
        return this.starpanelBg = t,
        t.height = 268,
        t.source = "worldMapStar_starpanelBg_png",
        t.width = 630,
        t.x = 0,
        t.y = 0,
        t
    },
    i.starImage_i = function() {
        var t = new eui.Image;
        return this.starImage = t,
        t.x = 55,
        t.y = 80,
        t
    },
    i.starName_i = function() {
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
    i.imgBtnGo_i = function() {
        var t = new eui.Image;
        return this.imgBtnGo = t,
        t.height = 40,
        t.source = "worldMapStar_imgBtnGo_png",
        t.width = 120,
        t.x = 314,
        t.y = 173,
        t
    },
    i.imgNotOpen_i = function() {
        var t = new eui.Image;
        return this.imgNotOpen = t,
        t.height = 56,
        t.source = "worldMapStar_imgNotOpen_png",
        t.width = 136,
        t.x = 306,
        t.y = 165,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 177,
        t.y = 68,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.starDes1_i(), this.starDes2_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    i.starDes1_i = function() {
        var t = new eui.Label;
        return this.starDes1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "left",
        t.textColor = 14674687,
        t.width = 400,
        t.x = 0,
        t.y = 0,
        t
    },
    i.starDes2_i = function() {
        var t = new eui.Label;
        return this.starDes2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textAlign = "right",
        t.textColor = 14674687,
        t.width = 400,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SelectgalaxyItemSkin.exml"] = window.SelectgalaxyItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["ItemImg", "selectImg", "galaxyName", "grp_name"],
        this.height = 240,
        this.width = 300,
        this.elementsContent = [this.ItemImg_i(), this.selectImg_i(), this.grp_name_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.ItemImg_i = function() {
        var t = new eui.Image;
        return this.ItemImg = t,
        t.source = "",
        t.x = 0,
        t.y = 0,
        t
    },
    i.selectImg_i = function() {
        var t = new eui.Image;
        return this.selectImg = t,
        t.source = "worldMap_select0_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_name_i = function() {
        var t = new eui.Group;
        return this.grp_name = t,
        t.visible = !1,
        t.x = 40,
        t.y = 160,
        t.elementsContent = [this._Image1_i(), this.galaxyName_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "worldMap_namebg_png",
        t.width = 136,
        t.x = 0,
        t.y = 0,
        t
    },
    i.galaxyName_i = function() {
        var t = new eui.Label;
        return this.galaxyName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "泰坦星系",
        t.textAlign = "center",
        t.textColor = 11269887,
        t.width = 80,
        t.x = 28,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SelectgalaxySkin.exml"] = window.SelectgalaxySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "galaxy", "imgBtnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.imgBtnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "worldMap_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 400,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 106,
        t.elementsContent = [this._Scroller1_i()],
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 400,
        t.horizontalCenter = 0,
        t.scrollPolicyV = "off",
        t.percentWidth = 100,
        t.viewport = this.galaxy_i(),
        t
    },
    i.galaxy_i = function() {
        var t = new eui.Group;
        return this.galaxy = t,
        t
    },
    i.imgBtnClose_i = function() {
        var t = new eui.Image;
        return this.imgBtnClose = t,
        t.right = 86,
        t.source = "worldMapStar_btnClose_2_png",
        t.visible = !0,
        t.y = 34,
        t
    },
    e
} (eui.Skin);