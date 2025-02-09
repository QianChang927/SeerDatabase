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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
comic; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.useTween = !1,
            e.curStep = 0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            for (t.prototype.childrenCreated.call(this), this.anchorOffsetX = this.width / 2, this.anchorOffsetY = this.height / 2, this.bg.addEventListener(egret.Event.COMPLETE, this.loadComplete, this), this.bg.source = "resource/assets/comic/" + this.comicName + "/bg.png", this.stepNum = 0; this["step_" + this.stepNum];) this["step_" + this.stepNum].source = "resource/assets/comic/" + this.comicName + "/step_" + this.stepNum + ".png",
            this["step_" + this.stepNum].visible = !1,
            this.stepNum++;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextStep, this)
        },
        e.prototype.nextStep = function() {
            return this.curStep >= this.stepNum ? void ModuleManager.hideModule("comic") : (this["step_" + (this.curStep - 1)] && (this["step_" + (this.curStep - 1)].visible = !1), this["step_" + this.curStep].visible = !0, this.useTween && (this["step_" + this.curStep].scaleX = this["step_" + this.curStep].scaleY = .5, egret.Tween.get(this["step_" + this.curStep]).to({
                scaleX: 1,
                scaleY: 1
            },
            100)), void this.curStep++)
        },
        e.prototype.onSkip = function() {
            ModuleManager.hideModule("comic")
        },
        e.prototype.loadComplete = function() {
            this.img_skip = new eui.Image("comic_img_skip_png"),
            this.img_skip.y = 5,
            this.img_skip.x = 1009,
            this.addChild(this.img_skip),
            ImageButtonUtil.add(this.img_skip, this.onSkip, this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextStep, this),
            this.bg.removeEventListener(egret.Event.COMPLETE, this.loadComplete, this),
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.ComicBaseModule = e,
    __reflect(e.prototype, "comic.ComicBaseModule")
} (comic || (comic = {}));
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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
comic; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.comicName = e.name,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this);
            var e = egret.getDefinitionByName("comic." + this.comicName);
            this.curPanel = new e,
            this.addChild(this.curPanel)
        },
        e.prototype.destroy = function() {
            this.curPanel && (this.curPanel.parent && this.curPanel.parent.removeChild(this.curPanel), this.curPanel.destroy()),
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.Comic = e,
    __reflect(e.prototype, "comic.Comic")
} (comic || (comic = {}));
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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
comic; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.comicName = "BreakBorder",
            e.useTween = !0,
            e.skinName = BreakBorderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.loadComplete = function() {
            t.prototype.loadComplete.call(this),
            this.img_tips = new eui.Image("comic_img_tips_png"),
            this.img_tips.x = 363,
            this.img_tips.y = 588,
            this.addChild(this.img_tips),
            egret.Tween.get(this.img_tips, {
                loop: !0
            }).to({
                alpha: 0
            },
            1e3).to({
                alpha: 1
            },
            1e3)
        },
        e.prototype.nextStep = function() {
            t.prototype.nextStep.call(this),
            this.img_tips.visible = !1
        },
        e.prototype.onSkip = function() {
            StatLogger.log("1218版本系统功能", "王之哈莫关卡", "观看漫画时点击【SKIP】跳过"),
            t.prototype.onSkip.call(this)
        },
        e.prototype.destroy = function() {
            egret.Tween.removeTweens(this.img_tips),
            t.prototype.destroy.call(this)
        },
        e
    } (t.ComicBaseModule);
    t.BreakBorder = e,
    __reflect(e.prototype, "comic.BreakBorder")
} (comic || (comic = {}));
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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
comic; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.comicName = "DragonNationalityRoot",
            e.useTween = !0,
            e.skinName = DragonNationalityRootSkin,
            e
        }
        return __extends(e, t),
        e.prototype.onSkip = function() {
            StatLogger.log("1218版本系统功能", "王之哈莫关卡", "观看漫画时点击【SKIP】跳过"),
            t.prototype.onSkip.call(this)
        },
        e
    } (t.ComicBaseModule);
    t.DragonNationalityRoot = e,
    __reflect(e.prototype, "comic.DragonNationalityRoot")
} (comic || (comic = {}));
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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
comic; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.comicName = "GetRidOfEvilIdeas",
            e.useTween = !0,
            e.skinName = GetRidOfEvilIdeasSkin,
            e
        }
        return __extends(e, t),
        e.prototype.onSkip = function() {
            StatLogger.log("1218版本系统功能", "王之哈莫关卡", "观看漫画时点击【SKIP】跳过"),
            t.prototype.onSkip.call(this)
        },
        e
    } (t.ComicBaseModule);
    t.GetRidOfEvilIdeas = e,
    __reflect(e.prototype, "comic.GetRidOfEvilIdeas")
} (comic || (comic = {}));
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
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
},
comic; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.comicName = "TrueDragonKing",
            e.useTween = !0,
            e.skinName = TrueDragonKingSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this);
            for (var e = 0; 5 > e; e++) this["role_" + e].source = "resource/assets/comic/" + this.comicName + "/role_" + e + ".png",
            this["role_" + e].visible = !1
        },
        e.prototype.nextStep = function() {
            return 0 != this.curStep || this.role_0.visible ? 1 != this.curStep || this.role_1.visible ? 1 != this.curStep || this.role_2.visible ? 2 != this.curStep || this.role_3.visible && this.role_4.visible ? void t.prototype.nextStep.call(this) : (this.step_1.visible = !1, void(this.role_3.visible = this.role_4.visible = !0)) : void(this.role_2.visible = !0) : (this.step_0.visible = !1, this.role_0.visible = !1, void(this.role_1.visible = !0)) : void(this.role_0.visible = !0)
        },
        e.prototype.onSkip = function() {
            StatLogger.log("1218版本系统功能", "王之哈莫关卡", "观看漫画时点击【SKIP】跳过"),
            t.prototype.onSkip.call(this)
        },
        e
    } (t.ComicBaseModule);
    t.TrueDragonKing = e,
    __reflect(e.prototype, "comic.TrueDragonKing")
} (comic || (comic = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/ComicBaseSkin.exml"] = window.ComicBaseSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_skip", "img_tips"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.img_skip_i(), this.img_tips_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_skip_i = function() {
        var t = new eui.Image;
        return this.img_skip = t,
        t.height = 42,
        t.source = "comic_img_skip_png",
        t.width = 114,
        t.x = 1009,
        t.y = 5,
        t
    },
    i.img_tips_i = function() {
        var t = new eui.Image;
        return this.img_tips = t,
        t.source = "comic_img_tips_png",
        t.x = 363,
        t.y = 588,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/BreakBorderSkin.exml"] = window.BreakBorderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "step_0", "step_1", "step_2", "step_3", "step_4", "step_5", "step_6", "step_7"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.step_0_i(), this.step_1_i(), this.step_2_i(), this.step_3_i(), this.step_4_i(), this.step_5_i(), this.step_6_i(), this.step_7_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    i.step_0_i = function() {
        var t = new eui.Image;
        return this.step_0 = t,
        t.anchorOffsetX = 179,
        t.anchorOffsetY = 118,
        t.height = 118,
        t.width = 179,
        t.x = 434,
        t.y = 427,
        t
    },
    i.step_1_i = function() {
        var t = new eui.Image;
        return this.step_1 = t,
        t.anchorOffsetX = 202,
        t.anchorOffsetY = 134,
        t.height = 134,
        t.width = 202,
        t.x = 415,
        t.y = 255,
        t
    },
    i.step_2_i = function() {
        var t = new eui.Image;
        return this.step_2 = t,
        t.anchorOffsetY = 134,
        t.height = 134,
        t.width = 202,
        t.x = 488,
        t.y = 289,
        t
    },
    i.step_3_i = function() {
        var t = new eui.Image;
        return this.step_3 = t,
        t.anchorOffsetX = 202,
        t.anchorOffsetY = 134,
        t.height = 134,
        t.width = 202,
        t.x = 439,
        t.y = 431,
        t
    },
    i.step_4_i = function() {
        var t = new eui.Image;
        return this.step_4 = t,
        t.anchorOffsetY = 134,
        t.height = 134,
        t.width = 202,
        t.x = 488,
        t.y = 289,
        t
    },
    i.step_5_i = function() {
        var t = new eui.Image;
        return this.step_5 = t,
        t.anchorOffsetX = 93,
        t.anchorOffsetY = 65,
        t.height = 130,
        t.width = 187,
        t.x = 339,
        t.y = 363,
        t
    },
    i.step_6_i = function() {
        var t = new eui.Image;
        return this.step_6 = t,
        t.anchorOffsetY = 134,
        t.height = 134,
        t.width = 202,
        t.x = 488,
        t.y = 289,
        t
    },
    i.step_7_i = function() {
        var t = new eui.Image;
        return this.step_7 = t,
        t.anchorOffsetX = 93,
        t.anchorOffsetY = 65,
        t.height = 130,
        t.width = 187,
        t.x = 337,
        t.y = 363,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/DragonNationalityRootSkin.exml"] = window.DragonNationalityRootSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "step_0", "step_1", "step_2", "step_3", "step_4", "step_5", "step_6"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.step_0_i(), this.step_1_i(), this.step_2_i(), this.step_3_i(), this.step_4_i(), this.step_5_i(), this.step_6_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    i.step_0_i = function() {
        var t = new eui.Image;
        return this.step_0 = t,
        t.anchorOffsetY = 175,
        t.height = 175,
        t.width = 264,
        t.x = 184,
        t.y = 494,
        t
    },
    i.step_1_i = function() {
        var t = new eui.Image;
        return this.step_1 = t,
        t.anchorOffsetY = 175,
        t.height = 175,
        t.width = 264,
        t.x = 457,
        t.y = 209,
        t
    },
    i.step_2_i = function() {
        var t = new eui.Image;
        return this.step_2 = t,
        t.anchorOffsetY = 175,
        t.height = 175,
        t.width = 264,
        t.x = 184,
        t.y = 494,
        t
    },
    i.step_3_i = function() {
        var t = new eui.Image;
        return this.step_3 = t,
        t.anchorOffsetY = 215,
        t.height = 215,
        t.width = 350,
        t.x = 174,
        t.y = 229,
        t
    },
    i.step_4_i = function() {
        var t = new eui.Image;
        return this.step_4 = t,
        t.anchorOffsetY = 154,
        t.height = 154,
        t.width = 227,
        t.x = 190,
        t.y = 492,
        t
    },
    i.step_5_i = function() {
        var t = new eui.Image;
        return this.step_5 = t,
        t.anchorOffsetX = 281,
        t.anchorOffsetY = 190,
        t.height = 190,
        t.width = 281,
        t.x = 721,
        t.y = 209,
        t
    },
    i.step_6_i = function() {
        var t = new eui.Image;
        return this.step_6 = t,
        t.anchorOffsetY = 174,
        t.height = 174,
        t.width = 256,
        t.x = 184,
        t.y = 494,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/GetRidOfEvilIdeasSkin.exml"] = window.GetRidOfEvilIdeasSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "step_0", "step_1", "step_2", "step_3", "step_4"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.step_0_i(), this.step_1_i(), this.step_2_i(), this.step_3_i(), this.step_4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    i.step_0_i = function() {
        var t = new eui.Image;
        return this.step_0 = t,
        t.anchorOffsetX = 112,
        t.anchorOffsetY = 78,
        t.height = 156,
        t.width = 225,
        t.x = 315,
        t.y = 377,
        t
    },
    i.step_1_i = function() {
        var t = new eui.Image;
        return this.step_1 = t,
        t.anchorOffsetX = 278,
        t.anchorOffsetY = 184,
        t.height = 184,
        t.width = 278,
        t.x = 515,
        t.y = 347,
        t
    },
    i.step_2_i = function() {
        var t = new eui.Image;
        return this.step_2 = t,
        t.anchorOffsetY = 198,
        t.height = 198,
        t.width = 300,
        t.x = 668,
        t.y = 377,
        t
    },
    i.step_3_i = function() {
        var t = new eui.Image;
        return this.step_3 = t,
        t.anchorOffsetX = 112,
        t.anchorOffsetY = 81,
        t.height = 162,
        t.width = 225,
        t.x = 314,
        t.y = 381,
        t
    },
    i.step_4_i = function() {
        var t = new eui.Image;
        return this.step_4 = t,
        t.anchorOffsetX = 357,
        t.anchorOffsetY = 198,
        t.height = 198,
        t.width = 357,
        t.x = 527,
        t.y = 347,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/TrueDragonKingSkin.exml"] = window.TrueDragonKingSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "role_0", "role_1", "role_2", "role_3", "role_4", "step_0", "step_1", "step_2", "step_3", "step_4", "step_5", "step_6", "step_7", "step_8", "step_9"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.role_0_i(), this.role_1_i(), this.role_2_i(), this.role_3_i(), this.role_4_i(), this.step_0_i(), this.step_1_i(), this.step_2_i(), this.step_3_i(), this.step_4_i(), this.step_5_i(), this.step_6_i(), this.step_7_i(), this.step_8_i(), this.step_9_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    i.role_0_i = function() {
        var t = new eui.Image;
        return this.role_0 = t,
        t.height = 218,
        t.width = 228,
        t.x = 249,
        t.y = 313,
        t
    },
    i.role_1_i = function() {
        var t = new eui.Image;
        return this.role_1 = t,
        t.height = 150,
        t.width = 236,
        t.x = 220,
        t.y = 415,
        t
    },
    i.role_2_i = function() {
        var t = new eui.Image;
        return this.role_2 = t,
        t.height = 60,
        t.width = 42,
        t.x = 721,
        t.y = 460,
        t
    },
    i.role_3_i = function() {
        var t = new eui.Image;
        return this.role_3 = t,
        t.height = 231,
        t.width = 278,
        t.x = 746,
        t.y = 115,
        t
    },
    i.role_4_i = function() {
        var t = new eui.Image;
        return this.role_4 = t,
        t.height = 224,
        t.width = 277,
        t.x = 95,
        t.y = 117,
        t
    },
    i.step_0_i = function() {
        var t = new eui.Image;
        return this.step_0 = t,
        t.anchorOffsetX = 186,
        t.anchorOffsetY = 117,
        t.height = 234,
        t.width = 372,
        t.x = 323,
        t.y = 306,
        t
    },
    i.step_1_i = function() {
        var t = new eui.Image;
        return this.step_1 = t,
        t.anchorOffsetX = 134,
        t.anchorOffsetY = 91,
        t.height = 182,
        t.width = 268,
        t.x = 772,
        t.y = 343,
        t
    },
    i.step_2_i = function() {
        var t = new eui.Image;
        return this.step_2 = t,
        t.anchorOffsetX = 290,
        t.anchorOffsetY = 192,
        t.height = 192,
        t.width = 290,
        t.x = 809,
        t.y = 230,
        t
    },
    i.step_3_i = function() {
        var t = new eui.Image;
        return this.step_3 = t,
        t.anchorOffsetY = 192,
        t.height = 192,
        t.width = 290,
        t.x = 299,
        t.y = 229,
        t
    },
    i.step_4_i = function() {
        var t = new eui.Image;
        return this.step_4 = t,
        t.anchorOffsetY = 178,
        t.height = 178,
        t.width = 269,
        t.x = 699,
        t.y = 439,
        t
    },
    i.step_5_i = function() {
        var t = new eui.Image;
        return this.step_5 = t,
        t.anchorOffsetX = 311,
        t.anchorOffsetY = 206,
        t.height = 206,
        t.width = 311,
        t.x = 814,
        t.y = 232,
        t
    },
    i.step_6_i = function() {
        var t = new eui.Image;
        return this.step_6 = t,
        t.anchorOffsetY = 206,
        t.height = 206,
        t.width = 311,
        t.x = 295,
        t.y = 231,
        t
    },
    i.step_7_i = function() {
        var t = new eui.Image;
        return this.step_7 = t,
        t.anchorOffsetY = 206,
        t.height = 206,
        t.width = 311,
        t.x = 690,
        t.y = 449,
        t
    },
    i.step_8_i = function() {
        var t = new eui.Image;
        return this.step_8 = t,
        t.anchorOffsetY = 206,
        t.height = 206,
        t.width = 311,
        t.x = 295,
        t.y = 232,
        t
    },
    i.step_9_i = function() {
        var t = new eui.Image;
        return this.step_9 = t,
        t.anchorOffsetX = 134,
        t.anchorOffsetY = 91,
        t.height = 182,
        t.width = 268,
        t.x = 773,
        t.y = 342,
        t
    },
    e
} (eui.Skin);