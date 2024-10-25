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
applicationForSeerUnity; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._isSH = !1,
            t._hasApply_1 = !1,
            t._hasApply_2 = !1,
            t.skinName = "ApplicationforseerunitySkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                i.onClose()
            },
            this),
            ImageButtonUtil.add(this.btnApply_1,
            function() {
                var e = new t.ApplicationforseerunityPop1;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnApply_2,
            function() {
                var e = new t.ApplicationforseerunityPop2(i._isSH);
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://www.bilibili.com/opus/991756054439133184?spm_id_from=333.999.0.0")
            },
            this),
            ImageButtonUtil.add(this.btnLetter,
            function() {
                URLNavigationManager.NavigateTo(URLNavigationEnum.Custom, "https://www.bilibili.com/opus/991392762507034641?spm_id_from=333.999.0.0")
            },
            this),
            KTool.getMultiValue([124799, 124831, 124800, 121898],
            function(t) {
                var e = 0;
                e = t[0] > 0 ? KTool.subByte(t[1], 0, 16) : KTool.subByte(t[2], 0, 16),
                i._isSH = e >= 4,
                i._hasApply_1 = 1 == KTool.getBit(t[3], 1),
                i._hasApply_2 = 1 == KTool.getBit(t[3], 2),
                i.updateView()
            }),
            EventManager.addEventListener("applicationForSeerUnity.EVENT_HAS_APPLY_1",
            function(t) {
                i._hasApply_1 = !0,
                i.updateView()
            },
            this),
            EventManager.addEventListener("applicationForSeerUnity.EVENT_HAS_APPLY_2",
            function(t) {
                i._hasApply_2 = !0,
                i.updateView()
            },
            this),
            this._anim = SpineUtil.createAnimate("unityzhaomu"),
            this.addChildAt(this._anim, 1),
            this._anim.x = LevelManager.stage.stageWidth / 2,
            this._anim.y = LevelManager.stage.stageHeight / 2;
            var n = Math.max(egret.lifecycle.stage.stageWidth / this._anim.width, egret.lifecycle.stage.stageHeight / this._anim.height) + .1;
            this._anim.scaleX = n,
            this._anim.scaleY = n,
            this._anim.play("animation"),
            this.adaptBgByMask(this._anim)
        },
        i.prototype.updateView = function() {
            return this._hasApply_2 && (this._hasApply_1 = this._hasApply_2 = !0),
            this.btnApply_1.source = this._hasApply_1 ? "applicationForSeerUnity_hasApply_1_png": "applicationForSeerUnity_btnApply_1_png",
            this._hasApply_1 && ImageButtonUtil.remove(this.btnApply_1),
            this._hasApply_2 ? (this.btnApply_2.source = "applicationForSeerUnity_hasApply_2_png", void ImageButtonUtil.remove(this.btnApply_2)) : void(this._isSH ? this.btnApply_2.source = "applicationForSeerUnity_btnApply_2_png": (this.btnApply_2.source = "applicationForSeerUnity_cannotApply_2_png", ImageButtonUtil.remove(this.btnApply_2)))
        },
        i
    } (BaseModule);
    t.ApplicationForSeerUnity = e,
    __reflect(e.prototype, "applicationForSeerUnity.ApplicationForSeerUnity")
} (applicationForSeerUnity || (applicationForSeerUnity = {}));
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
applicationForSeerUnity; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "ApplicationforseerunityPop1Skin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnApplay,
            function() {
                SocketConnection.sendByQueue(41388, [78, 1],
                function() {
                    Alarm.show("申请成功！测试资格获取情况将在11月6日以游戏内邮件形式告知")
                }),
                EventManager.dispatchEventWith("applicationForSeerUnity.EVENT_HAS_APPLY_1"),
                e.hide()
            },
            this)
        },
        e
    } (PopView);
    t.ApplicationforseerunityPop1 = e,
    __reflect(e.prototype, "applicationForSeerUnity.ApplicationforseerunityPop1")
} (applicationForSeerUnity || (applicationForSeerUnity = {}));
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
applicationForSeerUnity; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._canApply = !1,
            i._canApply = e,
            i.skinName = "ApplicationforseerunityPop2Skin",
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            this._canApply ? (this.btnApply.source = "applicationForSeerUnity_pop2_btnApply_png", ImageButtonUtil.add(this.btnApply,
            function() {
                SocketConnection.sendByQueue(41388, [78, 2],
                function() {
                    Alarm.show("申请成功！测试资格获取情况将在11月6日以游戏内邮件形式告知")
                }),
                EventManager.dispatchEventWith("applicationForSeerUnity.EVENT_HAS_APPLY_2"),
                e.hide()
            },
            this)) : (ImageButtonUtil.remove(this.btnApply), this.btnApply.source = "applicationForSeerUnity_pop2_cannotApply_png")
        },
        e
    } (PopView);
    t.ApplicationforseerunityPop2 = e,
    __reflect(e.prototype, "applicationForSeerUnity.ApplicationforseerunityPop2")
} (applicationForSeerUnity || (applicationForSeerUnity = {}));
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
generateEUI.paths["resource/eui_skins/ApplicationforseerunityPop1Skin.exml"] = window.ApplicationforseerunityPop1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnApplay", "btnClose"],
        this.height = 242,
        this.width = 600,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnApplay_i(), this._Label1_i(), this._Label2_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 185,
        t.source = "applicationForSeerUnity_pop1_tanchuang_bg_png",
        t.width = 558,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.alpha = 0,
        t.height = 243.23,
        t.source = "applicationForSeerUnity_pop2_tanchuang_bg_2_png",
        t.width = 465.683,
        t.x = 41.246,
        t.y = 10,
        t
    },
    i.btnApplay_i = function() {
        var t = new eui.Image;
        return this.btnApplay = t,
        t.height = 43,
        t.source = "applicationForSeerUnity_pop1_btnApplay_png",
        t.width = 143,
        t.x = 208,
        t.y = 199,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 25,
        t.text = "无门槛通道",
        t.textColor = 16777215,
        t.x = 218,
        t.y = 9,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = -19.5,
        t.size = 23,
        t.text = "所有赛尔均可申请\n部分赛尔将获得测试资格",
        t.textAlign = "center",
        t.textColor = 4293583,
        t.width = 345,
        t.y = 83,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 34,
        t.x = 566,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ApplicationforseerunityPop2Skin.exml"] = window.ApplicationforseerunityPop2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnApply", "btnClose"],
        this.height = 242,
        this.width = 600,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnApply_i(), this._Label1_i(), this._Label2_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 185,
        t.source = "applicationForSeerUnity_pop2_tanchuang_bg_2_png",
        t.width = 558,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.alpha = 0,
        t.height = 243.23,
        t.source = "applicationForSeerUnity_pop2_tanchuang_bg_2_png",
        t.width = 465.683,
        t.x = 41.246,
        t.y = 10,
        t
    },
    i.btnApply_i = function() {
        var t = new eui.Image;
        return this.btnApply = t,
        t.height = 44,
        t.source = "applicationForSeerUnity_pop2_btnApply_png",
        t.width = 143,
        t.x = 208,
        t.y = 198,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 25,
        t.text = "圣皇通道",
        t.textColor = 12799263,
        t.x = 230,
        t.y = 8,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = -23,
        t.size = 23,
        t.text = "仅限【S3】赛季竞技模式达到过圣皇段位的赛尔申请，账号经过审核后，必定获得测试资格",
        t.textAlign = "center",
        t.textColor = 13596481,
        t.width = 488,
        t.y = 83,
        t.zIndex = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 34,
        t.x = 566,
        t.y = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ApplicationforseerunitySkin.exml"] = window.ApplicationforseerunitySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnLetter", "btnInfo", "btnApply_1", "btnApply_2", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this.btnLetter_i(), this.btnInfo_i(), this.btnApply_1_i(), this.btnApply_2_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.alpha = 0,
        t.height = 58,
        t.left = 38,
        t.source = "applicationForSeerUnity_logo_png",
        t.top = 30,
        t.visible = !0,
        t.width = 153,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 58,
        t.left = 38,
        t.source = "applicationForSeerUnity_logo_png",
        t.top = 30,
        t.visible = !0,
        t.width = 153,
        t.x = 48,
        t.y = 40,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = -4.5,
        t.size = 18,
        t.text = "测试招募期：10月25日--11月1日更新前",
        t.textAlign = "center",
        t.textColor = 11720447,
        t.top = 56,
        t.width = 345,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.bottom = 22,
        t.horizontalCenter = 0,
        t.source = "applicationForSeerUnityUU_hzsj·UIsj·gnyh·qxdfms_png",
        t.visible = !0,
        t.x = 132,
        t
    },
    i.btnLetter_i = function() {
        var t = new eui.Image;
        return this.btnLetter = t,
        t.bottom = 17,
        t.height = 73,
        t.left = 26,
        t.source = "applicationForSeerUnity_btnLetter_png",
        t.width = 150,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.bottom = 88,
        t.height = 73,
        t.left = 26,
        t.source = "applicationForSeerUnity_btnInfo_png",
        t.width = 150,
        t
    },
    i.btnApply_1_i = function() {
        var t = new eui.Image;
        return this.btnApply_1 = t,
        t.height = 56,
        t.horizontalCenter = -99.5,
        t.source = "applicationForSeerUnity_btnApply_1_png",
        t.verticalCenter = 32,
        t.width = 179,
        t
    },
    i.btnApply_2_i = function() {
        var t = new eui.Image;
        return this.btnApply_2 = t,
        t.height = 55,
        t.horizontalCenter = 114.5,
        t.source = "applicationForSeerUnity_btnApply_2_png",
        t.verticalCenter = 32.5,
        t.width = 179,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.right = 27,
        t.source = "common_pop_btn_close_png",
        t.top = 28,
        t.width = 33,
        t
    },
    e
} (eui.Skin);