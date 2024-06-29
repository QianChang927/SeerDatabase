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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
templeHeroesMain; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = TempleHeroesMainSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            t.prototype.initBtnClose.call(this, "temple_heroes_main_btnback_png", this),
            this.initBtnHelp(function() {
                StatLogger.log("20221216版本系统功能", "圣殿英雄团搬迁", "打开主界面Tips面板"),
                tipsPop.TipsPop.openHelpPopById(105)
            },
            this),
            this.adaptBgByScale(this.bg);
            var e = SpineUtil.createAnimate("main_anima");
            TempleHeroManager.checkCurrentHero(),
            ImageButtonUtil.add(this.imgBuy, this.buy, this);
            for (var i = [this.imgCurHero1, this.imgCurHero2, this.imgCurHero3, this.imgCurHero4, this.imgCurHero5], r = function(t) {
                n["ani" + (t + 1)] = SpineUtil.copy(e),
                n["heroGroup" + (t + 1)].addChild(n["ani" + (t + 1)]),
                n["ani" + (t + 1)].visible = !1,
                ImageButtonUtil.add(i[t],
                function() {
                    var e = TempleHeroManager.getCurrentHero();
                    if (TempleHeroManager.isAllShow()) {
                        var i = 2015 + t;
                        TempleHeroManager.curSelectYear = i,
                        ModuleManager.showModuleByID(169 + t, {
                            year: i
                        })
                    } else TempleHeroManager.curSelectYear = e,
                    ModuleManager.showModuleByID(169 + e - 2015, {
                        year: e
                    })
                },
                n, !1, !1)
            },
            n = this, o = 0; o < i.length; o++) r(o);
            ImageButtonUtil.add(this.imgNext, this.next, this),
            StatLogger.log("20221216版本系统功能", "圣殿英雄团搬迁", "进入活动主界面"),
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = [this.imgCurHero1, this.imgCurHero2, this.imgCurHero3, this.imgCurHero4, this.imgCurHero5];
            e.map(function(e) {
                e.alpha = 0
            }),
            this.tl || (this.tl = new gsap.core.Timeline);
            var t = TempleHeroManager.getCurrentHero();
            TempleHeroManager.isAllShow() ? (this.imgBuy.visible = !1, this.ani3.visible = !0, this.ani3.play("ani_loopbox2", 0)) : (this.imgBuy.visible = !0, this["ani" + (t - 2015 + 1)].play("ani_loopbox1", 0), this["ani" + (t - 2015 + 1)].visible = !0, this["imgCurHero" + (t - 2015 + 1)].visible = !0),
            this.curName.text = TempleHeroManager.getCurrentInfo().petName;
            var i = new Date(TempleHeroManager.getCurrentInfo().startTime.replace(/_/g, "/")).getTime(),
            r = new Date(TempleHeroManager.getCurrentInfo().endTime.replace(/_/g, "/")).getTime(),
            n = SystemTimerManager.sysBJDate.getTime();
            if (i > n) this.endTime.text = "巡回还未开始";
            else if (i > r) this.endTime.text = "巡回已结束";
            else {
                var o = (r - n) / 1e3,
                a = TimeUtil.countDownFormat(o, "dd/hh").split("/");
                this.endTime.textFlow = [{
                    text: "距巡回截止："
                },
                {
                    text: a[0],
                    style: {
                        textColor: 16765733
                    }
                },
                {
                    text: "天"
                },
                {
                    text: a[1],
                    style: {
                        textColor: 16765733
                    }
                },
                {
                    text: "时"
                }]
            }
            this.groupCache.cacheAsBitmap = !0
        },
        i.prototype.buy = function() {
            TempleHeroManager.curSelectYear = TempleHeroManager.getCurrentHero();
            var e = TempleHeroManager.curSelectYear;
            ModuleManager.showModuleByID(169 + e - 2015, {
                year: e
            });
            var t = ["圣光灵神", "重生之翼", "瀚宇星皇", "天启帝君", "混元天尊"];
            StatLogger.log("20221216版本系统功能", "圣殿英雄团搬迁", "进入【" + t[e - 2015] + "】界面")
        },
        i.prototype.next = function() {
            StatLogger.log("20221216版本系统功能", "圣殿英雄团搬迁", "打开【次位巡回】面板"),
            PopViewManager.getInstance().openView(new e.TempleHeroesMainPop)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.tl.clear()
        },
        i
    } (BaseModule);
    e.TempleHeroesMain = t,
    __reflect(t.prototype, "templeHeroesMain.TempleHeroesMain")
} (templeHeroesMain || (templeHeroesMain = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, r) {
    return new(i || (i = Promise))(function(n, o) {
        function a(e) {
            try {
                u(r.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                u(r["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function u(e) {
            e.done ? n(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
        }
        u((r = r.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return r([e, t])
        }
    }
    function r(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (n = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
        } catch(r) {
            i = [6, r],
            o = 0
        } finally {
            n = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var n, o, a, s, u = {
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
templeHeroesMain; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TempleHeroesMainPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return e.prototype.childrenCreated.call(this),
                        ImageButtonUtil.add(this.btnClose, this.hide, this),
                        ImageButtonUtil.add(this.next, this.showNext, this, !1, !1),
                        [4, RES.getResByUrl("resource/assets/templeNextHeroes/temple_heroes_main_pop_next.png",
                        function(e) {
                            t.hero.texture = e,
                            t.hero.alpha = 0
                        })];
                    case 1:
                        return i.sent(),
                        this.ani = SpineUtil.createAnimate("main_top_anima"),
                        this.aniGroup.addChild(this.ani),
                        this.ani.visible = !1,
                        [2]
                    }
                })
            })
        },
        t.prototype.showNext = function() {
            this.tl || (StatLogger.log("20221216版本系统功能", "圣殿英雄团搬迁", "点击【查看次位巡回】查看信息"), this.tl = !0, this.ani.visible = !0, this.ani.play("ani_fog", 1), GsapUtils.imageFadIn(this.next, this.hero))
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            DisplayUtil.removeForParent(this.ani),
            this.ani = null,
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.TempleHeroesMainPop = t,
    __reflect(t.prototype, "templeHeroesMain.TempleHeroesMainPop")
} (templeHeroesMain || (templeHeroesMain = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/TempleHeroesMainSkin.exml"] = window.TempleHeroesMainSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "imgCurHero1", "imgCurHero2", "imgCurHero3", "imgCurHero4", "imgCurHero5", "imgNext", "imgBuy", "curName", "endTime", "heroGroup1", "heroGroup2", "heroGroup3", "heroGroup4", "heroGroup5", "groupCache"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.groupCache_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "temple_heroes_main_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i.groupCache_i = function() {
        var e = new eui.Group;
        return this.groupCache = e,
        e.height = 640,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.visible = !0,
        e.width = 1136,
        e.elementsContent = [this._Image1_i(), this.imgCurHero1_i(), this.imgCurHero2_i(), this.imgCurHero3_i(), this.imgCurHero4_i(), this.imgCurHero5_i(), this.imgNext_i(), this.imgBuy_i(), this._Image2_i(), this.curName_i(), this.endTime_i(), this.heroGroup1_i(), this.heroGroup2_i(), this.heroGroup3_i(), this.heroGroup4_i(), this.heroGroup5_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_heros_png",
        e.visible = !0,
        e.y = 52,
        e
    },
    i.imgCurHero1_i = function() {
        var e = new eui.Image;
        return this.imgCurHero1 = e,
        e.alpha = 0,
        e.height = 447,
        e.scale9Grid = new egret.Rectangle(47, 73, 25, 100),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_img_curHero_png",
        e.visible = !0,
        e.width = 167,
        e.x = 120.76,
        e.y = 64,
        e
    },
    i.imgCurHero2_i = function() {
        var e = new eui.Image;
        return this.imgCurHero2 = e,
        e.alpha = 0,
        e.height = 447,
        e.scale9Grid = new egret.Rectangle(47, 73, 25, 100),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_img_curHero_png",
        e.visible = !0,
        e.width = 167,
        e.x = 303.644,
        e.y = 64,
        e
    },
    i.imgCurHero3_i = function() {
        var e = new eui.Image;
        return this.imgCurHero3 = e,
        e.alpha = 0,
        e.height = 447,
        e.scale9Grid = new egret.Rectangle(47, 73, 25, 100),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_img_curHero_png",
        e.visible = !0,
        e.width = 167,
        e.x = 484,
        e.y = 64,
        e
    },
    i.imgCurHero4_i = function() {
        var e = new eui.Image;
        return this.imgCurHero4 = e,
        e.alpha = 0,
        e.height = 447,
        e.scale9Grid = new egret.Rectangle(47, 73, 25, 100),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_img_curHero_png",
        e.visible = !0,
        e.width = 167,
        e.x = 664.332,
        e.y = 64,
        e
    },
    i.imgCurHero5_i = function() {
        var e = new eui.Image;
        return this.imgCurHero5 = e,
        e.alpha = 0,
        e.height = 447,
        e.scale9Grid = new egret.Rectangle(47, 73, 25, 100),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_img_curHero_png",
        e.visible = !0,
        e.width = 167,
        e.x = 847.33,
        e.y = 64,
        e
    },
    i.imgNext_i = function() {
        var e = new eui.Image;
        return this.imgNext = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_img_next_png",
        e.x = 13,
        e.y = 588,
        e
    },
    i.imgBuy_i = function() {
        var e = new eui.Image;
        return this.imgBuy = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_img_buy_png",
        e.x = 478,
        e.y = 516,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_herosbg_png",
        e.touchEnabled = !1,
        e.x = 27,
        e.y = 448,
        e
    },
    i.curName_i = function() {
        var e = new eui.Label;
        return this.curName = e,
        e.fontFamily = "REEJI",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 34.1477655944543,
        e.text = "天启帝君",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 38,
        e.y = 513,
        e
    },
    i.endTime_i = function() {
        var e = new eui.Label;
        return this.endTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 21,
        e.text = "巡回截止时间：XX天XX时",
        e.textColor = 12834813,
        e.touchEnabled = !1,
        e.x = 39,
        e.y = 560,
        e
    },
    i.heroGroup1_i = function() {
        var e = new eui.Group;
        return this.heroGroup1 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.touchThrough = !0,
        e.x = 204,
        e.y = 310,
        e
    },
    i.heroGroup2_i = function() {
        var e = new eui.Group;
        return this.heroGroup2 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.touchThrough = !0,
        e.x = 385.75,
        e.y = 310,
        e
    },
    i.heroGroup3_i = function() {
        var e = new eui.Group;
        return this.heroGroup3 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.touchThrough = !0,
        e.x = 567.5,
        e.y = 310,
        e
    },
    i.heroGroup4_i = function() {
        var e = new eui.Group;
        return this.heroGroup4 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.touchThrough = !0,
        e.x = 749.25,
        e.y = 310,
        e
    },
    i.heroGroup5_i = function() {
        var e = new eui.Group;
        return this.heroGroup5 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.touchThrough = !0,
        e.x = 931,
        e.y = 310,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TempleHerosPopSkin.exml"] = window.TempleHeroesMainPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["hero", "next", "btnClose", "aniGroup"],
        this.height = 299,
        this.width = 515,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.next_i(), this._Image2_i(), this.btnClose_i(), this.aniGroup_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 299,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_pop_bg_png",
        e.width = 515,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 299,
        e.width = 515,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.hero_i()],
        e
    },
    i.hero_i = function() {
        var e = new eui.Image;
        return this.hero = e,
        e.height = 182,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "temple_heroes_main_pop_next_png",
        e.verticalCenter = -10.5,
        e.width = 435,
        e
    },
    i.next_i = function() {
        var e = new eui.Image;
        return this.next = e,
        e.source = "temple_heroes_main_pop_next_png",
        e.x = 40,
        e.y = 48,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "temple_heroes_main_pop_title_png",
        e.x = 143,
        e.y = 6,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "temple_heroes_main_pop_btnclose_png",
        e.x = 191,
        e.y = 241,
        e
    },
    i.aniGroup_i = function() {
        var e = new eui.Group;
        return this.aniGroup = e,
        e.horizontalCenter = 0,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin);