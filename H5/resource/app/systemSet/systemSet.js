var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
systemSet; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = SystemSetNewSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.content.removeChildren(),
            this.showCommonPanel(),
            GameInfo.isChecking && (this.btnCancel.visible = !0, this.btnContactUs.visible = !1, ImageButtonUtil.add(this.btnCancel,
            function() {
                window.open("https://account.61.com/user/preclose")
            },
            this)),
            StatLogger.log("20210108版本系统功能", "设置功能", "打开【设置功能】面板")
        },
        n.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.btnExitGame, this.onExitGame, this),
            ImageButtonUtil.add(this.btnContactUs, this.onContactUs, this),
            this.rb_common.group.addEventListener(egret.Event.CHANGE, this.changeHandle, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
            GameInfo.isApp
        },
        n.prototype.onResize = function(e) {
            this.x = egret.lifecycle.stage.stageWidth / 2,
            this.y = egret.lifecycle.stage.stageHeight / 2
        },
        n.prototype.onExitGame = function() {
            Alert.show("确认退出登录吗？",
            function() {
                location.reload()
            })
        },
        n.prototype.onContactUs = function() {
            TaomeeSDKManager.customer()
        },
        n.prototype.changeHandle = function() {
            var t = ~~this.rb_common.group.selectedValue;
            switch (this.content.removeChildren(), t) {
            case 0:
                this.showCommonPanel();
                break;
            case 1:
                this.fightSetPanel || (this.fightSetPanel = new e.FightSetNewPanel),
                StatLogger.log("20210108版本系统功能", "设置功能", "点击【对战设置】页签"),
                this.content.addChild(this.fightSetPanel)
            }
        },
        n.prototype.showCommonPanel = function() {
            this.commonSetPanel || (this.commonSetPanel = new e.CommonSetNewPanel),
            this.content.addChild(this.commonSetPanel)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.commonSetPanel && this.commonSetPanel.destroy(),
            this.fightSetPanel && this.fightSetPanel.destroy(),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this)
        },
        n
    } (BaseModule);
    e.SystemSet = t,
    __reflect(t.prototype, "systemSet.SystemSet")
} (systemSet || (systemSet = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
systemSet; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.thumbOffSetLeft = 10,
            t.thumbOffSetRight = 10,
            t
        }
        return __extends(t, e),
        t.prototype.getThumbRange1 = function() {
            var e = egret.$TempRectangle;
            this.track.getLayoutBounds(e);
            var t = e.width;
            return this.thumb.getLayoutBounds(e),
            t - e.width + this.thumbOffSetLeft + this.thumbOffSetRight
        },
        t.prototype.updateSkinDisplayList = function() {
            if (this.thumb && this.track) {
                var e = this.$Range,
                t = this.getThumbRange1(),
                n = e[0] - e[2],
                i = n > 0 ? (this.pendingValue - e[2]) / n * t: 0,
                s = this.track.localToGlobal(i, 0, egret.$TempPoint),
                r = s.x,
                o = s.y,
                a = this.thumb.$parent.globalToLocal(r, o, egret.$TempPoint).x,
                _ = egret.$TempRectangle;
                if (this.thumb.getLayoutBounds(_), this.thumb.setLayoutBoundsPosition(Math.round(a) - this.thumbOffSetLeft, _.y), this.trackHighlight && this.trackHighlight.$parent) {
                    var u = this.trackHighlight.$parent.globalToLocal(r, o, egret.$TempPoint).x - i;
                    this.trackHighlight.x = Math.round(u),
                    this.trackHighlight.width = Math.round(i)
                }
            }
        },
        t
    } (eui.HSlider);
    e.TMHSlider = t,
    __reflect(t.prototype, "systemSet.TMHSlider")
} (systemSet || (systemSet = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
systemSet; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.lastTime = 0,
            t.skinName = CommonSetNewSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.adaptSlide.currentState = "on";
            var t = egret.localStorage.getItem("sound_is_mute");
            this.ts_sound.selected = !0,
            void 0 != t && ~~t > 0 && (this.ts_sound.selected = !1),
            this.soundSlider.currentState = this.ts_sound.selected ? "on": "off";
            var n = egret.localStorage.getItem("volume");
            this.soundSlider.value = 100,
            void 0 != n && (this.soundSlider.value = Math.floor(100 * +n));
            var i = egret.localStorage.getItem("adaptNum"),
            s = 0;
            void 0 != i && (s = ~~i);
            var r = 1.775,
            o = window.innerWidth < window.innerHeight,
            a = o ? window.innerHeight / window.innerWidth: window.innerWidth / window.innerHeight;
            a > r ? this.adaptSlide.maximum = Math.floor((window.innerWidth - window.innerHeight * r) / 2) : .95 * r > a ? this.adaptSlide.maximum = Math.floor((window.innerHeight - window.innerWidth / r) / 2) : this.adaptSlide.maximum = 1,
            this.adaptSlide.value = s,
            this.adaptSlide.maximum < 5 && (this.adaptSlide.touchEnabled = !1, this.adaptSlide.touchChildren = !1, this.adaptSlide.currentState = "off", this.adaptSlide.value = 0, setTimeout(function() {
                BubblerManager.getInstance().showText("此设备无需适配！")
            },
            1e3), this.adaptSlide.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
            function() {},
            this)),
            this.txtNum0.text = this.soundSlider.value + "",
            this.txtNum1.text = this.adaptSlide.value + "",
            GameInfo.isChecking && (this.exchangeGroup.visible = !1);
            var _ = egret.Capabilities.renderMode;
            "webgl" == _ ? (this.rb_webgl.group.selectedValue = "webgl", this.rb_webgl.selected = !0) : (this.rb_canvas.group.selectedValue = "canvas", this.rb_canvas.selected = !0)
        },
        t.prototype.addEvent = function() {
            var e = this;
            this.ts_sound.addEventListener(egret.Event.CHANGE, this.onSoundOpen, this),
            this.soundSlider.addEventListener(egret.Event.CHANGE, this.onSoundSliderChange, this),
            this.adaptSlide.addEventListener(egret.Event.CHANGE, this.onAdaptSliderChange, this),
            this.rb_webgl.group.addEventListener(egret.Event.CHANGE, this.changeModeHandle, this),
            ImageButtonUtil.add(this.btnQA, this.onAdaptQA, this),
            ImageButtonUtil.add(this.btnQA2, this.onModeQA, this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                if (e.checkExchangeCode()) {
                    var t = String(e.txt_code.text);
                    e.isContainChinese(t) && (t = "#" + t);
                    for (var n = new egret.ByteArray,
                    i = 0; i < t.length && !(n.length > 999); i++) n.writeUTFBytes(t.charAt(i));
                    SocketConnection.sendByQueue(43267, [n.length, n],
                    function(t) {
                        e.onzuanshi(t),
                        SocketConnection.removeCmdListener(43267, e.onzuanshi, e)
                    })
                }
            },
            this)
        },
        t.prototype.checkExchangeCode = function() {
            if ("" == this.txt_code.text) return BubblerManager.getInstance().showText("请输入兑换码！"),
            !1;
            var e = new egret.ByteArray;
            return e.writeUTFBytes(this.txt_code.text),
            e.length > 34 ? (BubblerManager.getInstance().showText("很抱歉，兑换码长度太长不合规！"), !1) : !0
        },
        t.prototype.isContainChinese = function(e) {
            var t = !1;
            if (null == e) return t;
            for (var n = [], i = 0; i < e.length; i++) n.push(e.charCodeAt(i));
            for (var i = 0; i < n.length; i++) if (n[i] >= 19968 && n[i] <= 171941) return t = !0;
            return t
        },
        t.prototype.onzuanshi = function(e) {
            var t = e.data;
            t.position = 0;
            var n = t.readUnsignedInt();
            n > 0 && BubblerManager.getInstance().showText("恭喜你获得" + n + "钻石！")
        },
        t.prototype.onSoundOpen = function(e) {
            var t = this.ts_sound.selected;
            this.soundSlider.currentState = t ? "on": "off",
            SoundManager.instance.setMute(!t),
            egret.localStorage.setItem("sound_is_mute", "" + (1 - ~~t)),
            StatLogger.log("20210108版本系统功能", "设置功能", "关闭音乐")
        },
        t.prototype.onSoundSliderChange = function(e) {
            var t = this.soundSlider.value / 100;
            egret.localStorage.setItem("volume", "" + t),
            this.txtNum0.text = this.soundSlider.value + "",
            SoundManager.instance.setVolume(t)
        },
        t.prototype.onAdaptSliderChange = function(e) {
            if (this.adaptSlide.maximum < 5) return void(this.adaptSlide.value = 0);
            var t = this.adaptSlide.value;
            egret.Capabilities.isMobile ? (egret.localStorage.setItem("adaptNum", "" + t), this.setAdaptNum(t), this.txtNum1.text = t + "") : Date.now() - this.lastTime > 2e3 && (BubblerManager.getInstance().showText("非移动设备没有此功能！"), this.lastTime = Date.now())
        },
        t.prototype.setAdaptNum = function(e) {
            if (egret.Capabilities.isMobile) {
                var t = 1.775,
                n = window.innerWidth < window.innerHeight,
                i = n ? window.innerHeight / window.innerWidth: window.innerWidth / window.innerHeight;
                if (i > t) {
                    var s = document.getElementById("egret_player");
                    if (n) {
                        var r = window.innerHeight - 2 * e + "px";
                        s.style.height = r,
                        s.style.marginTop = e + "px"
                    } else {
                        var o = window.innerWidth - 2 * e + "px";
                        s.style.width = o,
                        s.style.marginLeft = e + "px"
                    }
                    s["egret-player"].updateScreenSize(),
                    StatLogger.log("20210108版本系统功能", "设置功能", "玩家成功调节异形UI")
                } else if (.95 * t > i) {
                    var s = document.getElementById("egret_player");
                    if (n) {
                        var o = window.innerWidth - 2 * e + "px";
                        s.style.width = o,
                        s.style.marginLeft = e + "px"
                    } else {
                        var r = window.innerHeight - 2 * e + "px";
                        s.style.height = r,
                        s.style.marginTop = e + "px"
                    }
                    s["egret-player"].updateScreenSize(),
                    StatLogger.log("20210108版本系统功能", "设置功能", "玩家成功调节异形UI")
                } else StatLogger.log("20210108版本系统功能", "设置功能", "此设备不支持异形UI调节")
            } else StatLogger.log("20210108版本系统功能", "设置功能", "此设备不支持异形UI调节"),
            BubblerManager.getInstance().showText("非移动设备不支持此功能！")
        },
        t.prototype.onAdaptQA = function() {
            var e = "调节异形UI适配的滑条可以控制游戏画面两侧与设备屏幕左右边框的距离，用于适配曲面屏/水滴屏等异形屏幕。（滑条调节置于最左端（长屏手机）或最右端（宽屏平板）时，即为默认初始设置）",
            t = {
                str: e,
                title: "系统设置",
                hideClose: !1,
                isHtml: !1
            };
            tipsPop.TipsPop.openHelpPop(t, null)
        },
        t.prototype.onModeQA = function() {
            var e = "移动设备上选择【常规模式】可以更流畅的运行；网页模式下选择【兼容模式】可以优化游戏运行性能。",
            t = {
                str: e,
                title: "系统设置",
                hideClose: !1,
                isHtml: !1
            };
            tipsPop.TipsPop.openHelpPop(t, null)
        },
        t.prototype.changeModeHandle = function(e) {
            var t = this,
            n = egret.localStorage.getItem("renderMode"),
            i = this.rb_webgl.group.selectedValue,
            s = "重新登陆后生效，将采用“常规模式”登录，选择立刻重新登陆吗？";
            "canvas" == i ? (s = "重新登陆后生效，将采用“兼容模式”登录，选择立刻重新登陆吗？", StatLogger.log("20210108版本系统功能", "设置功能", "选择兼容模式"), 0 == GameInfo.platform ? StatLogger.log("20210930版本系统功能", "设置", "在PC端中选择【兼容模式】") : GameInfo.isApp ? StatLogger.log("20210930版本系统功能", "设置", "在手机APP中选择【兼容模式】") : StatLogger.log("20210930版本系统功能", "设置", "在手机游览器中选择【兼容模式】")) : (StatLogger.log("20210108版本系统功能", "设置功能", "选择常规模式"), 0 == GameInfo.platform ? StatLogger.log("20210930版本系统功能", "设置", "在PC端中选择【常规模式】") : GameInfo.isApp ? StatLogger.log("20210930版本系统功能", "设置", "在手机APP中选择【常规模式】") : StatLogger.log("20210930版本系统功能", "设置", "在手机游览器中选择【常规模式】")),
            Alert.show(s,
            function() {
                egret.localStorage.setItem("renderMode", i),
                location.reload()
            },
            function() {
                t.rb_webgl.group.selectedValue = n
            })
        },
        t.prototype.destroy = function() {
            this.ts_sound.removeEventListener(egret.Event.CHANGE, this.onSoundOpen, this),
            this.soundSlider.removeEventListener(egret.Event.CHANGE, this.onSoundSliderChange, this),
            this.adaptSlide.removeEventListener(egret.Event.CHANGE, this.onAdaptSliderChange, this),
            this.rb_webgl.group.removeEventListener(egret.Event.CHANGE, this.changeModeHandle, this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.Component);
    e.CommonSetNewPanel = t,
    __reflect(t.prototype, "systemSet.CommonSetNewPanel")
} (systemSet || (systemSet = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
systemSet; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.currSpeed = 1,
            t.skinName = "FightSetNewSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            GameInfo.isChecking && this.battle.removeChild(this.group_set2),
            this.rb_1.group.addEventListener(egret.Event.CHANGE, this.changeSpeedHandle, this);
            var t = egret.localStorage.getItem("fight_speed"),
            n = 1;
            if (void 0 != t) {
                var i = ~~t;
                i > 0 && (n = i)
            }
            this.rb_1.selected = !1,
            this.rb_1.group.selectedValue = "" + n,
            this.currSpeed = n,
            this.rb_cjs.group.addEventListener(egret.Event.CHANGE, this.changeModeHandler, this);
            var s = FightManager.fightAnimateMode;
            this.rb_cjs.selected = !1,
            this.rb_cjs.group.selectedValue = "" + s;
            var r = +egret.localStorage.getItem("fight_report_content") || 1;
            this.rbSimpleReport.selected = 1 == r,
            this.rbDetailedReport.selected = 2 == r,
            this.rbSimpleReport.group.addEventListener(egret.Event.CHANGE, this.onReportContentChange, this);
            var o = +egret.localStorage.getItem("fight_report_position") || 1;
            this.rbTopReport.selected = 1 == o,
            this.rbBottomReport.selected = 2 == o,
            this.rbTopReport.group.addEventListener(egret.Event.CHANGE, this.onReportPositionChange, this)
        },
        t.prototype.onReportContentChange = function() {
            var e = +this.rbSimpleReport.group.selectedValue;
            egret.localStorage.setItem("fight_report_content", e + "")
        },
        t.prototype.onReportPositionChange = function() {
            var e = +this.rbTopReport.group.selectedValue;
            egret.localStorage.setItem("fight_report_position", e + "")
        },
        t.prototype.changeSpeedHandle = function(e) {
            var t = this;
            Alert.show("确定选择此档位速度模式播放对战动画吗？（实际效果将依据不同设备有所差异）",
            function() {
                var e = ~~t.rb_1.group.selectedValue;
                egret.localStorage.setItem("fight_speed", "" + e),
                t.currSpeed = e,
                StatLogger.log("20210108版本系统功能", "设置功能", "点击选择" + e + "倍速");
                var n = ["动画", "静态", "呼吸"];
                StatLogger.log("20210618版本系统功能", "设置", "玩家切换为" + n[e] + "对战模式")
            },
            function() {
                t.rb_1.selected = !1,
                t.rb_1.group.selectedValue = "" + t.currSpeed
            })
        },
        t.prototype.changeModeHandler = function(e) {
            FightManager.fightAnimateMode = ~~this.rb_cjs.group.selectedValue
        },
        t.prototype.destroy = function() {
            this.rb_1.group.removeEventListener(egret.Event.CHANGE, this.changeSpeedHandle, this),
            this.rb_cjs.group.removeEventListener(egret.Event.CHANGE, this.changeModeHandler, this)
        },
        t
    } (eui.Component);
    e.FightSetNewPanel = t,
    __reflect(t.prototype, "systemSet.FightSetNewPanel")
} (systemSet || (systemSet = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
systemSet; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.lastTime = 0,
            t.skinName = CommonSetSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent();
            var t = egret.localStorage.getItem("sound_is_mute");
            this.ts_sound.selected = !0,
            void 0 != t && ~~t > 0 && (this.ts_sound.selected = !1);
            var n = egret.localStorage.getItem("volume");
            this.soundSlider.value = 100,
            void 0 != n && (this.soundSlider.value = Math.floor(100 * +n));
            var i = egret.localStorage.getItem("adaptNum"),
            s = 0;
            void 0 != i && (s = ~~i);
            var r = 1.775,
            o = window.innerWidth < window.innerHeight,
            a = o ? window.innerHeight / window.innerWidth: window.innerWidth / window.innerHeight;
            a > r ? this.adaptSlide.maximum = Math.floor((window.innerWidth - window.innerHeight * r) / 2) : .95 * r > a ? this.adaptSlide.maximum = Math.floor((window.innerHeight - window.innerWidth / r) / 2) : this.adaptSlide.maximum = 1,
            this.adaptSlide.maximum < 5 && this.adaptSlide.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
            function() {
                BubblerManager.getInstance().showText("此设备无需适配！")
            },
            this),
            this.adaptSlide.value = s;
            var _ = egret.Capabilities.renderMode;
            "webgl" == _ ? (this.rb_webgl.group.selectedValue = "webgl", this.rb_webgl.selected = !0) : (this.rb_canvas.group.selectedValue = "canvas", this.rb_canvas.selected = !0)
        },
        t.prototype.addEvent = function() {
            var e = this;
            this.ts_sound.addEventListener(egret.Event.CHANGE, this.onSoundOpen, this),
            this.soundSlider.addEventListener(egret.Event.CHANGE, this.onSoundSliderChange, this),
            this.adaptSlide.addEventListener(egret.Event.CHANGE, this.onAdaptSliderChange, this),
            this.rb_webgl.group.addEventListener(egret.Event.CHANGE, this.changeModeHandle, this),
            ImageButtonUtil.add(this.btnQA, this.onAdaptQA, this),
            ImageButtonUtil.add(this.btnQA2, this.onModeQA, this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                if (e.checkExchangeCode()) {
                    var t = String(e.txt_code.text);
                    e.isContainChinese(t) && (t = "#" + t);
                    for (var n = new egret.ByteArray,
                    i = 0; i < t.length && !(n.length > 999); i++) n.writeUTFBytes(t.charAt(i));
                    SocketConnection.sendByQueue(43267, [n.length, n],
                    function(t) {
                        e.onzuanshi(t),
                        SocketConnection.removeCmdListener(43267, e.onzuanshi, e)
                    })
                }
            },
            this)
        },
        t.prototype.checkExchangeCode = function() {
            if ("" == this.txt_code.text) return BubblerManager.getInstance().showText("请输入兑换码！"),
            !1;
            var e = new egret.ByteArray;
            return e.writeUTFBytes(this.txt_code.text),
            e.length > 34 ? (BubblerManager.getInstance().showText("很抱歉，兑换码长度太长不合规！"), !1) : !0
        },
        t.prototype.isContainChinese = function(e) {
            var t = !1;
            if (null == e) return t;
            for (var n = [], i = 0; i < e.length; i++) n.push(e.charCodeAt(i));
            for (var i = 0; i < n.length; i++) if (n[i] >= 19968 && n[i] <= 171941) return t = !0;
            return t
        },
        t.prototype.onzuanshi = function(e) {
            var t = e.data;
            t.position = 0;
            var n = t.readUnsignedInt();
            n > 0 && BubblerManager.getInstance().showText("恭喜你获得" + n + "钻石！")
        },
        t.prototype.onSoundOpen = function(e) {
            var t = this.ts_sound.selected;
            SoundManager.instance.setMute(!t),
            egret.localStorage.setItem("sound_is_mute", "" + (1 - ~~t)),
            StatLogger.log("20210108版本系统功能", "设置功能", "关闭音乐")
        },
        t.prototype.onSoundSliderChange = function(e) {
            var t = this.soundSlider.value / 100;
            egret.localStorage.setItem("volume", "" + t),
            SoundManager.instance.setVolume(t)
        },
        t.prototype.onAdaptSliderChange = function(e) {
            if (this.adaptSlide.maximum < 5) return void(this.adaptSlide.value = 0);
            var t = this.adaptSlide.value;
            egret.Capabilities.isMobile ? (egret.localStorage.setItem("adaptNum", "" + t), this.setAdaptNum(t)) : Date.now() - this.lastTime > 2e3 && (BubblerManager.getInstance().showText("非移动设备没有此功能！"), this.lastTime = Date.now())
        },
        t.prototype.setAdaptNum = function(e) {
            if (egret.Capabilities.isMobile) {
                var t = 1.775,
                n = window.innerWidth < window.innerHeight,
                i = n ? window.innerHeight / window.innerWidth: window.innerWidth / window.innerHeight;
                if (i > t) {
                    var s = document.getElementById("egret_player");
                    if (n) {
                        var r = window.innerHeight - 2 * e + "px";
                        s.style.height = r,
                        s.style.marginTop = e + "px"
                    } else {
                        var o = window.innerWidth - 2 * e + "px";
                        s.style.width = o,
                        s.style.marginLeft = e + "px"
                    }
                    s["egret-player"].updateScreenSize(),
                    StatLogger.log("20210108版本系统功能", "设置功能", "玩家成功调节异形UI")
                } else if (.95 * t > i) {
                    var s = document.getElementById("egret_player");
                    if (n) {
                        var o = window.innerWidth - 2 * e + "px";
                        s.style.width = o,
                        s.style.marginLeft = e + "px"
                    } else {
                        var r = window.innerHeight - 2 * e + "px";
                        s.style.height = r,
                        s.style.marginTop = e + "px"
                    }
                    s["egret-player"].updateScreenSize(),
                    StatLogger.log("20210108版本系统功能", "设置功能", "玩家成功调节异形UI")
                } else StatLogger.log("20210108版本系统功能", "设置功能", "此设备不支持异形UI调节")
            } else StatLogger.log("20210108版本系统功能", "设置功能", "此设备不支持异形UI调节"),
            BubblerManager.getInstance().showText("非移动设备不支持此功能！")
        },
        t.prototype.onAdaptQA = function() {
            var e = "调节异形UI适配的滑条可以控制游戏画面两侧与设备屏幕左右边框的距离，用于适配曲面屏/水滴屏等异形屏幕。（滑条调节置于最左端（长屏手机）或最右端（宽屏平板）时，即为默认初始设置）",
            t = {
                str: e,
                title: "系统设置",
                hideClose: !1,
                isHtml: !1
            };
            tipsPop.TipsPop.openHelpPop(t, null)
        },
        t.prototype.onModeQA = function() {
            var e = "移动设备上选择【常规模式】可以更流畅的运行；网页模式下选择【兼容模式】可以优化游戏运行性能。",
            t = {
                str: e,
                title: "系统设置",
                hideClose: !1,
                isHtml: !1
            };
            tipsPop.TipsPop.openHelpPop(t, null)
        },
        t.prototype.changeModeHandle = function(e) {
            var t = this.rb_webgl.group.selectedValue;
            egret.localStorage.setItem("renderMode", t);
            var n = "重新登陆后生效，将采用“常规模式”登录，选择立刻重新登陆吗？";
            "canvas" == t ? (n = "重新登陆后生效，将采用“兼容模式”登录，选择立刻重新登陆吗？", StatLogger.log("20210108版本系统功能", "设置功能", "选择兼容模式"), 0 == GameInfo.platform ? StatLogger.log("20210930版本系统功能", "设置", "在PC端中选择【兼容模式】") : GameInfo.isApp ? StatLogger.log("20210930版本系统功能", "设置", "在手机APP中选择【兼容模式】") : StatLogger.log("20210930版本系统功能", "设置", "在手机游览器中选择【兼容模式】")) : (StatLogger.log("20210108版本系统功能", "设置功能", "选择常规模式"), 0 == GameInfo.platform ? StatLogger.log("20210930版本系统功能", "设置", "在PC端中选择【常规模式】") : GameInfo.isApp ? StatLogger.log("20210930版本系统功能", "设置", "在手机APP中选择【常规模式】") : StatLogger.log("20210930版本系统功能", "设置", "在手机游览器中选择【常规模式】")),
            Alert.show(n,
            function() {
                location.reload()
            })
        },
        t.prototype.destroy = function() {
            this.ts_sound.removeEventListener(egret.Event.CHANGE, this.onSoundOpen, this),
            this.soundSlider.removeEventListener(egret.Event.CHANGE, this.onSoundSliderChange, this),
            this.adaptSlide.removeEventListener(egret.Event.CHANGE, this.onAdaptSliderChange, this),
            this.rb_webgl.group.removeEventListener(egret.Event.CHANGE, this.changeModeHandle, this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.Component);
    e.CommonSetPanel = t,
    __reflect(t.prototype, "systemSet.CommonSetPanel")
} (systemSet || (systemSet = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
systemSet; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.currSpeed = 1,
            t.skinName = "FightSetSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.rb_1.group.addEventListener(egret.Event.CHANGE, this.changeSpeedHandle, this);
            var t = egret.localStorage.getItem("fight_speed"),
            n = 1;
            if (void 0 != t) {
                var i = ~~t;
                i > 0 && (n = i)
            }
            this.rb_1.selected = !1,
            this.rb_1.group.selectedValue = "" + n,
            this.currSpeed = n,
            this.rb_cjs.group.addEventListener(egret.Event.CHANGE, this.changeModeHandler, this);
            var s = FightManager.fightAnimateMode;
            this.rb_cjs.selected = !1,
            this.rb_cjs.group.selectedValue = "" + s;
            var r = +egret.localStorage.getItem("fight_report_content") || 1;
            this.rbSimpleReport.selected = 1 == r,
            this.rbDetailedReport.selected = 2 == r,
            this.rbSimpleReport.group.addEventListener(egret.Event.CHANGE, this.onReportContentChange, this);
            var o = +egret.localStorage.getItem("fight_report_position") || 1;
            this.rbTopReport.selected = 1 == o,
            this.rbBottomReport.selected = 2 == o,
            this.rbTopReport.group.addEventListener(egret.Event.CHANGE, this.onReportPositionChange, this)
        },
        t.prototype.onReportContentChange = function() {
            var e = +this.rbSimpleReport.group.selectedValue;
            egret.localStorage.setItem("fight_report_content", e + "")
        },
        t.prototype.onReportPositionChange = function() {
            var e = +this.rbTopReport.group.selectedValue;
            egret.localStorage.setItem("fight_report_position", e + "")
        },
        t.prototype.changeSpeedHandle = function(e) {
            var t = this;
            Alert.show("确定选择此档位速度模式播放对战动画吗？（实际效果将依据不同设备有所差异）",
            function() {
                var e = ~~t.rb_1.group.selectedValue;
                egret.localStorage.setItem("fight_speed", "" + e),
                t.currSpeed = e,
                StatLogger.log("20210108版本系统功能", "设置功能", "点击选择" + e + "倍速");
                var n = ["动画", "静态", "呼吸"];
                StatLogger.log("20210618版本系统功能", "设置", "玩家切换为" + n[e] + "对战模式")
            },
            function() {
                t.rb_1.selected = !1,
                t.rb_1.group.selectedValue = "" + t.currSpeed
            })
        },
        t.prototype.changeModeHandler = function(e) {
            FightManager.fightAnimateMode = ~~this.rb_cjs.group.selectedValue
        },
        t.prototype.destroy = function() {
            this.rb_1.group.removeEventListener(egret.Event.CHANGE, this.changeSpeedHandle, this),
            this.rb_cjs.group.removeEventListener(egret.Event.CHANGE, this.changeModeHandler, this)
        },
        t
    } (eui.Component);
    e.FightSetPanel = t,
    __reflect(t.prototype, "systemSet.FightSetPanel")
} (systemSet || (systemSet = {})),
window.systemSetNew = window.systemSetNew || {};
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/new/page/AccountSkin.exml"] = window.systemSetNew.AccountSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["contentbg", "content", "dlmmh", "iconId", "a_123456789", "id", "bdsj", "iconPhone", "a_13817953404", "phone", "bdyx", "iconEmail", "wbd", "emali", "smrz", "iconShiping", "wbd_2", "shiming", "btnyhzx", "btnbd", "btnbd_2", "yibangding", "btnbd_3", "yibangding_2", "btnbd_4", "yibangding_3", "zhanggao"],
        this.height = 276,
        this.width = 756,
        this.elementsContent = [this.content_i(), this.zhanggao_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.contentbg_i()],
        e
    },
    n.contentbg_i = function() {
        var e = new eui.Image;
        return this.contentbg = e,
        e.source = "ssn_common_set_new_contentbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.zhanggao_i = function() {
        var e = new eui.Group;
        return this.zhanggao = e,
        e.x = 46,
        e.y = 16,
        e.elementsContent = [this.id_i(), this.phone_i(), this.emali_i(), this.shiming_i(), this.btnyhzx_i(), this.btnbd_i(), this.btnbd_2_i(), this.yibangding_i(), this.btnbd_3_i(), this.yibangding_2_i(), this.btnbd_4_i(), this.yibangding_3_i()],
        e
    },
    n.id_i = function() {
        var e = new eui.Group;
        return this.id = e,
        e.x = 0,
        e.y = 2,
        e.elementsContent = [this.dlmmh_i(), this.iconId_i(), this.a_123456789_i()],
        e
    },
    n.dlmmh_i = function() {
        var e = new eui.Image;
        return this.dlmmh = e,
        e.source = "ssn_account_dlmmh_png",
        e.x = 49,
        e.y = 6,
        e
    },
    n.iconId_i = function() {
        var e = new eui.Image;
        return this.iconId = e,
        e.source = "ssn_account_iconid_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.a_123456789_i = function() {
        var e = new eui.Label;
        return this.a_123456789 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "123456789",
        e.textColor = 13361663,
        e.width = 87,
        e.x = 170,
        e.y = 9,
        e
    },
    n.phone_i = function() {
        var e = new eui.Group;
        return this.phone = e,
        e.x = 0,
        e.y = 72,
        e.elementsContent = [this.bdsj_i(), this.iconPhone_i(), this.a_13817953404_i()],
        e
    },
    n.bdsj_i = function() {
        var e = new eui.Image;
        return this.bdsj = e,
        e.source = "ssn_account_bdsj_png",
        e.x = 48,
        e.y = 5,
        e
    },
    n.iconPhone_i = function() {
        var e = new eui.Image;
        return this.iconPhone = e,
        e.source = "ssn_account_iconphone_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.a_13817953404_i = function() {
        var e = new eui.Label;
        return this.a_13817953404 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "13817953404",
        e.textColor = 13361663,
        e.width = 104,
        e.x = 170,
        e.y = 9,
        e
    },
    n.emali_i = function() {
        var e = new eui.Group;
        return this.emali = e,
        e.x = 0,
        e.y = 141,
        e.elementsContent = [this.bdyx_i(), this.iconEmail_i(), this.wbd_i()],
        e
    },
    n.bdyx_i = function() {
        var e = new eui.Image;
        return this.bdyx = e,
        e.source = "ssn_account_bdyx_png",
        e.x = 48,
        e.y = 5,
        e
    },
    n.iconEmail_i = function() {
        var e = new eui.Image;
        return this.iconEmail = e,
        e.source = "ssn_account_iconemail_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.wbd_i = function() {
        var e = new eui.Label;
        return this.wbd = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "未绑定",
        e.textColor = 13361663,
        e.x = 170,
        e.y = 6,
        e
    },
    n.shiming_i = function() {
        var e = new eui.Group;
        return this.shiming = e,
        e.x = 0,
        e.y = 211,
        e.elementsContent = [this.smrz_i(), this.iconShiping_i(), this.wbd_2_i()],
        e
    },
    n.smrz_i = function() {
        var e = new eui.Image;
        return this.smrz = e,
        e.source = "ssn_account_smrz_png",
        e.x = 49,
        e.y = 5,
        e
    },
    n.iconShiping_i = function() {
        var e = new eui.Image;
        return this.iconShiping = e,
        e.source = "ssn_account_iconshiping_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.wbd_2_i = function() {
        var e = new eui.Label;
        return this.wbd_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "未绑定",
        e.textColor = 13361663,
        e.x = 170,
        e.y = 6,
        e
    },
    n.btnyhzx_i = function() {
        var e = new eui.Image;
        return this.btnyhzx = e,
        e.source = "ssn_account_btnyhzx_png",
        e.x = 533,
        e.y = 0,
        e
    },
    n.btnbd_i = function() {
        var e = new eui.Image;
        return this.btnbd = e,
        e.source = "ssn_account_btnbd_png",
        e.x = 530,
        e.y = 66,
        e
    },
    n.btnbd_2_i = function() {
        var e = new eui.Image;
        return this.btnbd_2 = e,
        e.source = "ssn_account_btnbd_png",
        e.x = 533,
        e.y = 70,
        e
    },
    n.yibangding_i = function() {
        var e = new eui.Image;
        return this.yibangding = e,
        e.source = "ssn_account_yibangding_png",
        e.x = 546,
        e.y = 75,
        e
    },
    n.btnbd_3_i = function() {
        var e = new eui.Image;
        return this.btnbd_3 = e,
        e.source = "ssn_account_btnbd_png",
        e.x = 533,
        e.y = 140,
        e
    },
    n.yibangding_2_i = function() {
        var e = new eui.Image;
        return this.yibangding_2 = e,
        e.source = "ssn_account_yibangding_png",
        e.x = 546,
        e.y = 145,
        e
    },
    n.btnbd_4_i = function() {
        var e = new eui.Image;
        return this.btnbd_4 = e,
        e.source = "ssn_account_btnbd_png",
        e.x = 533,
        e.y = 209,
        e
    },
    n.yibangding_3_i = function() {
        var e = new eui.Image;
        return this.yibangding_3 = e,
        e.source = "ssn_account_yibangding_png",
        e.x = 546,
        e.y = 214,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/page/SetHSliderNewSkin.exml"] = window.SetHSliderNewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["track", "trackHighlight", "thumb", "txtNum"],
        this.height = 44,
        this.width = 405,
        this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i(), this.txtNum_i()],
        this.states = [new eui.State("off", []), new eui.State("on", [new eui.SetProperty("track", "visible", !0), new eui.SetProperty("trackHighlight", "width", 405), new eui.SetProperty("trackHighlight", "source", "ssn_common_set_new_trackhighlighton_png"), new eui.SetProperty("thumb", "source", "ssn_common_set_new_thumbon_png"), new eui.SetProperty("txtNum", "x", 405), new eui.SetProperty("txtNum", "y", 6)])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.track_i = function() {
        var e = new eui.Image;
        return this.track = e,
        e.source = "ssn_common_set_new_juxing_28_png",
        e.percentWidth = 100,
        e.y = 8,
        e
    },
    n.trackHighlight_i = function() {
        var e = new eui.Image;
        return this.trackHighlight = e,
        e.scale9Grid = new egret.Rectangle(4, 3, 97, 5),
        e.source = "ssn_common_set_new_trackhighlightoff_png",
        e.visible = !0,
        e.x = 2,
        e.y = 9,
        e
    },
    n.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e,
        e.anchorOffsetX = 0,
        e.source = "ssn_common_set_new_thumboff_png",
        e.y = -4,
        e
    },
    n.txtNum_i = function() {
        var e = new eui.Label;
        return this.txtNum = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "100",
        e.textAlign = "center",
        e.textColor = 13361663,
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 40,
        e.x = 200,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/page/CommonSetNewSkin.exml"] = window.CommonSetNewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["content_bg2", "ts_sound", "off", "on", "handleoff", "handleon", "toggleswitch", "soundSlider", "txtNum0", "soundNumber", "juxing_28", "trackHighlightoff", "thumboff", "soundslider", "txtNum1", "adaptSlide", "a_45", "juxing_28_2", "trackHighlighton", "thumbon", "shipeislider", "btnQA", "rb_webgl", "rb_canvas", "btnbg", "btndown1", "btndown2", "rb", "btnQA2", "btnExchange", "txt_code", "exchangeGroup"],
        this.height = 276,
        this.width = 756,
        this.elementsContent = [this.content_bg2_i(), this._Group4_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["off", "on", "handleoff", "handleon"],
            this.elementsContent = [this.off_i(), this.on_i(), this.handleoff_i(), this.handleon_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("off", "visible", !0), new eui.SetProperty("handleoff", "visible", !0)]), new eui.State("down", [new eui.SetProperty("on", "visible", !0), new eui.SetProperty("handleon", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.off_i = function() {
            var e = new eui.Image;
            return this.off = e,
            e.source = "ssn_common_set_new_off_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.on_i = function() {
            var e = new eui.Image;
            return this.on = e,
            e.source = "ssn_common_set_new_on_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.handleoff_i = function() {
            var e = new eui.Image;
            return this.handleoff = e,
            e.source = "ssn_common_set_new_handleoff_png",
            e.visible = !1,
            e.x = 1,
            e.y = 3,
            e
        },
        n.handleon_i = function() {
            var e = new eui.Image;
            return this.handleon = e,
            e.source = "ssn_common_set_new_handleon_png",
            e.visible = !1,
            e.x = 20,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay", "hitArea"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this.hitArea_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_common_set_new_btndown2_png"), new eui.SetProperty("hitArea", "fillAlpha", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_common_set_new_btnup2_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        n.hitArea_i = function() {
            var e = new eui.Rect;
            return this.hitArea = e,
            e.fillAlpha = 1,
            e.height = 23,
            e.visible = !1,
            e.width = 105,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "ssn_common_set_new_btnup1_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_common_set_new_btndown1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_common_set_new_btndown2_png",
            e.visible = !0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r.content_bg2_i = function() {
        var e = new eui.Image;
        return this.content_bg2 = e,
        e.source = "ssn_common_set_new_contentbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 45,
        e.y = 15,
        e.layout = this._VerticalLayout1_i(),
        e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this.exchangeGroup_i()],
        e
    },
    r._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 19,
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 48,
        e.verticalCenter = 0,
        e.x = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.ts_sound_i(), this.toggleswitch_i(), this.soundSlider_i(), this.txtNum0_i(), this.soundslider_i()],
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_yin_le_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 44,
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_icon_sound_png",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    r.ts_sound_i = function() {
        var e = new eui.ToggleSwitch;
        return this.ts_sound = e,
        e.label = "",
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 146,
        e.skinName = n,
        e
    },
    r.toggleswitch_i = function() {
        var e = new eui.Group;
        return this.toggleswitch = e,
        e.verticalCenter = 0,
        e.visible = !1,
        e.x = 146,
        e.elementsContent = [this.off_i(), this.on_i(), this.handleoff_i(), this.handleon_i()],
        e
    },
    r.off_i = function() {
        var e = new eui.Image;
        return this.off = e,
        e.source = "ssn_common_set_new_off_png",
        e.visible = !0,
        e.x = 0,
        e.y = 2,
        e
    },
    r.on_i = function() {
        var e = new eui.Image;
        return this.on = e,
        e.source = "ssn_common_set_new_on_png",
        e.visible = !0,
        e.x = 0,
        e.y = 2,
        e
    },
    r.handleoff_i = function() {
        var e = new eui.Image;
        return this.handleoff = e,
        e.source = "ssn_common_set_new_handleoff_png",
        e.visible = !0,
        e.x = 1,
        e.y = 3,
        e
    },
    r.handleon_i = function() {
        var e = new eui.Image;
        return this.handleon = e,
        e.source = "ssn_common_set_new_handleon_png",
        e.visible = !0,
        e.x = 20,
        e.y = 0,
        e
    },
    r.soundSlider_i = function() {
        var e = new systemSet.TMHSlider;
        return this.soundSlider = e,
        e.maximum = 100,
        e.minimum = 0,
        e.pendingValue = 1,
        e.skinName = "SetHSliderNewSkin",
        e.value = 100,
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 223,
        e
    },
    r.txtNum0_i = function() {
        var e = new eui.Label;
        return this.txtNum0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "100",
        e.textAlign = "center",
        e.textColor = 13361663,
        e.verticalCenter = 0,
        e.visible = !0,
        e.width = 40,
        e.x = 629,
        e
    },
    r.soundslider_i = function() {
        var e = new eui.Group;
        return this.soundslider = e,
        e.verticalCenter = 0,
        e.visible = !1,
        e.x = 223,
        e.elementsContent = [this.soundNumber_i(), this.juxing_28_i(), this.trackHighlightoff_i(), this.thumboff_i()],
        e
    },
    r.soundNumber_i = function() {
        var e = new eui.Label;
        return this.soundNumber = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "45",
        e.textColor = 13361663,
        e.x = 415,
        e.y = 13,
        e
    },
    r.juxing_28_i = function() {
        var e = new eui.Image;
        return this.juxing_28 = e,
        e.source = "ssn_common_set_new_juxing_28_png",
        e.x = 0,
        e.y = 12,
        e
    },
    r.trackHighlightoff_i = function() {
        var e = new eui.Image;
        return this.trackHighlightoff = e,
        e.source = "ssn_common_set_new_trackhighlightoff_png",
        e.x = 1,
        e.y = 13,
        e
    },
    r.thumboff_i = function() {
        var e = new eui.Image;
        return this.thumboff = e,
        e.source = "ssn_common_set_new_thumboff_png",
        e.x = 102,
        e.y = 0,
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 48,
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 0,
        e.elementsContent = [this.txtNum1_i(), this.adaptSlide_i(), this._Image3_i(), this._Image4_i(), this.shipeislider_i(), this.btnQA_i()],
        e
    },
    r.txtNum1_i = function() {
        var e = new eui.Label;
        return this.txtNum1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "100",
        e.textAlign = "center",
        e.textColor = 13361663,
        e.verticalCenter = 0,
        e.visible = !0,
        e.width = 40,
        e.x = 629,
        e
    },
    r.adaptSlide_i = function() {
        var e = new systemSet.TMHSlider;
        return this.adaptSlide = e,
        e.maximum = 100,
        e.minimum = 0,
        e.pendingValue = 1,
        e.skinName = "SetHSliderNewSkin",
        e.value = 100,
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 223,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_yxkp_png",
        e.verticalCenter = 0,
        e.x = 44,
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_icon_shipei_png",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    r.shipeislider_i = function() {
        var e = new eui.Group;
        return this.shipeislider = e,
        e.verticalCenter = 0,
        e.visible = !1,
        e.x = 223,
        e.elementsContent = [this.a_45_i(), this.juxing_28_2_i(), this.trackHighlighton_i(), this.thumbon_i()],
        e
    },
    r.a_45_i = function() {
        var e = new eui.Label;
        return this.a_45 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "45",
        e.textColor = 13361663,
        e.x = 415,
        e.y = 13,
        e
    },
    r.juxing_28_2_i = function() {
        var e = new eui.Image;
        return this.juxing_28_2 = e,
        e.source = "ssn_common_set_new_juxing_28_png",
        e.x = 0,
        e.y = 12,
        e
    },
    r.trackHighlighton_i = function() {
        var e = new eui.Image;
        return this.trackHighlighton = e,
        e.source = "ssn_common_set_new_trackhighlighton_png",
        e.x = 1,
        e.y = 13,
        e
    },
    r.thumbon_i = function() {
        var e = new eui.Image;
        return this.thumbon = e,
        e.source = "ssn_common_set_new_thumbon_png",
        e.x = 102,
        e.y = 0,
        e
    },
    r.btnQA_i = function() {
        var e = new eui.Image;
        return this.btnQA = e,
        e.source = "ssn_common_set_new_btnhelp_png",
        e.x = 154,
        e.y = 6,
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 48,
        e.verticalCenter = 0,
        e.x = 0,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.rb_i(), this.btnQA2_i()],
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_msxz_png",
        e.verticalCenter = 0,
        e.x = 44,
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_icon_model_png",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    r.rb_i = function() {
        var e = new eui.Group;
        return this.rb = e,
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 443,
        e.elementsContent = [this.rb_webgl_i(), this.rb_canvas_i(), this.btnbg_i(), this.btndown1_i(), this.btndown2_i()],
        e
    },
    r.rb_webgl_i = function() {
        var e = new eui.RadioButton;
        return this.rb_webgl = e,
        e.groupName = "renderMode",
        e.label = "",
        e.value = "webgl",
        e.visible = !0,
        e.skinName = i,
        e
    },
    r.rb_canvas_i = function() {
        var e = new eui.RadioButton;
        return this.rb_canvas = e,
        e.groupName = "renderMode",
        e.label = "",
        e.value = "canvas",
        e.visible = !0,
        e.width = 105,
        e.x = 105,
        e.skinName = s,
        e
    },
    r.btnbg_i = function() {
        var e = new eui.Image;
        return this.btnbg = e,
        e.source = "ssn_common_set_new_btnbg_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    r.btndown1_i = function() {
        var e = new eui.Image;
        return this.btndown1 = e,
        e.source = "ssn_common_set_new_btndown1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    r.btndown2_i = function() {
        var e = new eui.Image;
        return this.btndown2 = e,
        e.source = "ssn_common_set_new_btndown2_png",
        e.visible = !1,
        e.x = 105,
        e.y = 0,
        e
    },
    r.btnQA2_i = function() {
        var e = new eui.Image;
        return this.btnQA2 = e,
        e.source = "ssn_common_set_new_btnhelp_png",
        e.verticalCenter = 0,
        e.x = 154,
        e
    },
    r.exchangeGroup_i = function() {
        var e = new eui.Group;
        return this.exchangeGroup = e,
        e.height = 48,
        e.verticalCenter = 0,
        e.x = 0,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this.btnExchange_i(), this._Image9_i(), this.txt_code_i()],
        e
    },
    r._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_dhjl_png",
        e.verticalCenter = 0,
        e.x = 44,
        e
    },
    r._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_icon_gift_png",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    r.btnExchange_i = function() {
        var e = new eui.Image;
        return this.btnExchange = e,
        e.source = "ssn_common_set_new_btnget_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 533,
        e
    },
    r._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_yjjx_1_kb_2_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 223,
        e
    },
    r.txt_code_i = function() {
        var e = new eui.EditableText;
        return this.txt_code = e,
        e.fontFamily = "MFShangHei",
        e.prompt = "请输入兑换码",
        e.promptColor = 13361663,
        e.size = 20,
        e.textAlign = "center",
        e.textColor = 13361663,
        e.visible = !0,
        e.width = 253,
        e.x = 224,
        e.y = 14,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/page/FightSetNewSkin.exml"] = window.FightSetNewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["content", "rb_1", "rb_2", "rb_5", "rb_10", "btn1up1", "btn1up2", "btn1up3", "btn1up4", "btn1down1", "btn1down2", "btn1down3", "btn1down4", "rb1", "group_set1", "rb_cjs", "rb_preview", "rb_card", "btn2up1", "btn2up2", "btn2up3", "btn2down1", "btn2down2", "btn2down3", "rb2", "group_set2", "rbSimpleReport", "rbDetailedReport", "btn3up1", "btn3up2", "btn3down1", "btn3down2", "rb3", "group_set3", "rbTopReport", "rbBottomReport", "btn4up1", "btn4up2", "btn4down1", "btn4down2", "rb4", "group_set4", "battle"],
        this.height = 276,
        this.width = 755,
        this.elementsContent = [this.content_i(), this.battle_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn1down1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn1up1_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn1down2_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn1up2_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn1down3_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn1up3_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn1down4_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn1up4_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn2down3_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn2up3_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn2down2_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn2up2_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn2down1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn2up1_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn3down1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn3up1_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    l = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn3down2_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn3up2_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    h = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn4down1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn4up1_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    c = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image1", "source", "ssn_battle_new_btn4down2_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_battle_new_btn4up2_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    g = t.prototype;
    return g.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i()],
        e
    },
    g._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_contentbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    g.battle_i = function() {
        var e = new eui.Group;
        return this.battle = e,
        e.x = 45,
        e.y = 15,
        e.layout = this._VerticalLayout1_i(),
        e.elementsContent = [this.group_set1_i(), this.group_set2_i(), this.group_set3_i(), this.group_set4_i()],
        e
    },
    g._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 19,
        e
    },
    g.group_set1_i = function() {
        var e = new eui.Group;
        return this.group_set1 = e,
        e.height = 48,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.rb1_i()],
        e
    },
    g._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_battle_new_dzdhjs_png",
        e.verticalCenter = 0,
        e.x = 49,
        e
    },
    g._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_battle_new_icon1__png",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    g.rb1_i = function() {
        var e = new eui.Group;
        return this.rb1 = e,
        e.verticalCenter = 0,
        e.x = 236,
        e.elementsContent = [this.rb_1_i(), this.rb_2_i(), this.rb_5_i(), this.rb_10_i(), this.btn1up1_i(), this.btn1up2_i(), this.btn1up3_i(), this.btn1up4_i(), this.btn1down1_i(), this.btn1down2_i(), this.btn1down3_i(), this.btn1down4_i()],
        e
    },
    g.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "fight_speed",
        e.label = "",
        e.selected = !0,
        e.value = "1",
        e.skinName = n,
        e
    },
    g.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "fight_speed",
        e.label = "",
        e.value = "2",
        e.visible = !0,
        e.x = 105,
        e.skinName = i,
        e
    },
    g.rb_5_i = function() {
        var e = new eui.RadioButton;
        return this.rb_5 = e,
        e.groupName = "fight_speed",
        e.label = "",
        e.value = "5",
        e.visible = !0,
        e.x = 210,
        e.skinName = s,
        e
    },
    g.rb_10_i = function() {
        var e = new eui.RadioButton;
        return this.rb_10 = e,
        e.groupName = "fight_speed",
        e.label = "",
        e.value = "10",
        e.visible = !0,
        e.x = 315,
        e.skinName = r,
        e
    },
    g.btn1up1_i = function() {
        var e = new eui.Image;
        return this.btn1up1 = e,
        e.source = "ssn_battle_new_btn1up1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    g.btn1up2_i = function() {
        var e = new eui.Image;
        return this.btn1up2 = e,
        e.source = "ssn_battle_new_btn1up2_png",
        e.visible = !1,
        e.x = 105,
        e.y = 0,
        e
    },
    g.btn1up3_i = function() {
        var e = new eui.Image;
        return this.btn1up3 = e,
        e.source = "ssn_battle_new_btn1up3_png",
        e.visible = !1,
        e.x = 210,
        e.y = 0,
        e
    },
    g.btn1up4_i = function() {
        var e = new eui.Image;
        return this.btn1up4 = e,
        e.source = "ssn_battle_new_btn1up4_png",
        e.visible = !1,
        e.x = 315,
        e.y = 0,
        e
    },
    g.btn1down1_i = function() {
        var e = new eui.Image;
        return this.btn1down1 = e,
        e.source = "ssn_battle_new_btn1down1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    g.btn1down2_i = function() {
        var e = new eui.Image;
        return this.btn1down2 = e,
        e.source = "ssn_battle_new_btn1down2_png",
        e.visible = !1,
        e.x = 105,
        e.y = 0,
        e
    },
    g.btn1down3_i = function() {
        var e = new eui.Image;
        return this.btn1down3 = e,
        e.source = "ssn_battle_new_btn1down3_png",
        e.visible = !1,
        e.x = 210,
        e.y = 0,
        e
    },
    g.btn1down4_i = function() {
        var e = new eui.Image;
        return this.btn1down4 = e,
        e.source = "ssn_battle_new_btn1down4_png",
        e.visible = !1,
        e.x = 315,
        e.y = 0,
        e
    },
    g.group_set2_i = function() {
        var e = new eui.Group;
        return this.group_set2 = e,
        e.height = 48,
        e.visible = !0,
        e.x = 1,
        e.y = 67,
        e.elementsContent = [this._Image4_i(), this.rb2_i(), this._Image5_i()],
        e
    },
    g._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_battle_new_dzms_png",
        e.verticalCenter = 0,
        e.x = 48,
        e
    },
    g.rb2_i = function() {
        var e = new eui.Group;
        return this.rb2 = e,
        e.verticalCenter = 0,
        e.visible = !0,
        e.x = 235,
        e.elementsContent = [this.rb_cjs_i(), this.rb_preview_i(), this.rb_card_i(), this.btn2up1_i(), this.btn2up2_i(), this.btn2up3_i(), this.btn2down1_i(), this.btn2down2_i(), this.btn2down3_i()],
        e
    },
    g.rb_cjs_i = function() {
        var e = new eui.RadioButton;
        return this.rb_cjs = e,
        e.groupName = "fight_mode",
        e.label = "",
        e.value = "0",
        e.visible = !0,
        e.x = 0,
        e.skinName = o,
        e
    },
    g.rb_preview_i = function() {
        var e = new eui.RadioButton;
        return this.rb_preview = e,
        e.groupName = "fight_mode",
        e.label = "",
        e.value = "2",
        e.visible = !0,
        e.x = 105,
        e.skinName = a,
        e
    },
    g.rb_card_i = function() {
        var e = new eui.RadioButton;
        return this.rb_card = e,
        e.groupName = "fight_mode",
        e.label = "",
        e.value = "1",
        e.visible = !0,
        e.x = 210,
        e.skinName = _,
        e
    },
    g.btn2up1_i = function() {
        var e = new eui.Image;
        return this.btn2up1 = e,
        e.source = "ssn_battle_new_btn2up1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    g.btn2up2_i = function() {
        var e = new eui.Image;
        return this.btn2up2 = e,
        e.source = "ssn_battle_new_btn2up2_png",
        e.visible = !1,
        e.x = 105,
        e.y = 0,
        e
    },
    g.btn2up3_i = function() {
        var e = new eui.Image;
        return this.btn2up3 = e,
        e.source = "ssn_battle_new_btn2up3_png",
        e.visible = !1,
        e.x = 210,
        e.y = 0,
        e
    },
    g.btn2down1_i = function() {
        var e = new eui.Image;
        return this.btn2down1 = e,
        e.source = "ssn_battle_new_btn2down1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    g.btn2down2_i = function() {
        var e = new eui.Image;
        return this.btn2down2 = e,
        e.source = "ssn_battle_new_btn2down2_png",
        e.visible = !1,
        e.x = 105,
        e.y = 0,
        e
    },
    g.btn2down3_i = function() {
        var e = new eui.Image;
        return this.btn2down3 = e,
        e.source = "ssn_battle_new_btn2down3_png",
        e.visible = !1,
        e.x = 210,
        e.y = 0,
        e
    },
    g._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_battle_new_icon2_png",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    g.group_set3_i = function() {
        var e = new eui.Group;
        return this.group_set3 = e,
        e.height = 48,
        e.x = 0,
        e.y = 134,
        e.elementsContent = [this._Image6_i(), this._Image7_i(), this.rb3_i()],
        e
    },
    g._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_battle_new_icon3_png",
        e.x = 0,
        e.y = 9,
        e
    },
    g._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_battle_new_zbnr_png",
        e.x = 50,
        e.y = 15,
        e
    },
    g.rb3_i = function() {
        var e = new eui.Group;
        return this.rb3 = e,
        e.x = 236,
        e.y = 11,
        e.elementsContent = [this.rbSimpleReport_i(), this.rbDetailedReport_i(), this.btn3up1_i(), this.btn3up2_i(), this.btn3down1_i(), this.btn3down2_i()],
        e
    },
    g.rbSimpleReport_i = function() {
        var e = new eui.RadioButton;
        return this.rbSimpleReport = e,
        e.groupName = "reportContent",
        e.label = "",
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.skinName = u,
        e
    },
    g.rbDetailedReport_i = function() {
        var e = new eui.RadioButton;
        return this.rbDetailedReport = e,
        e.groupName = "reportContent",
        e.label = "",
        e.value = "2",
        e.visible = !0,
        e.x = 105,
        e.skinName = l,
        e
    },
    g.btn3up1_i = function() {
        var e = new eui.Image;
        return this.btn3up1 = e,
        e.source = "ssn_battle_new_btn3up1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    g.btn3up2_i = function() {
        var e = new eui.Image;
        return this.btn3up2 = e,
        e.source = "ssn_battle_new_btn3up2_png",
        e.visible = !1,
        e.x = 105,
        e.y = 0,
        e
    },
    g.btn3down1_i = function() {
        var e = new eui.Image;
        return this.btn3down1 = e,
        e.source = "ssn_battle_new_btn3down1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 1,
        e
    },
    g.btn3down2_i = function() {
        var e = new eui.Image;
        return this.btn3down2 = e,
        e.source = "ssn_battle_new_btn3down2_png",
        e.visible = !1,
        e.x = 105,
        e.y = 1,
        e
    },
    g.group_set4_i = function() {
        var e = new eui.Group;
        return this.group_set4 = e,
        e.height = 48,
        e.x = 0,
        e.y = 201,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this.rb4_i()],
        e
    },
    g._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_battle_new_icon4_png",
        e.x = 0,
        e.y = 9,
        e
    },
    g._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_battle_new_zbfw_png",
        e.x = 49,
        e.y = 15,
        e
    },
    g.rb4_i = function() {
        var e = new eui.Group;
        return this.rb4 = e,
        e.x = 236,
        e.y = 12,
        e.elementsContent = [this.rbTopReport_i(), this.rbBottomReport_i(), this.btn4up1_i(), this.btn4up2_i(), this.btn4down1_i(), this.btn4down2_i()],
        e
    },
    g.rbTopReport_i = function() {
        var e = new eui.RadioButton;
        return this.rbTopReport = e,
        e.groupName = "ReportPosition",
        e.label = "",
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.skinName = h,
        e
    },
    g.rbBottomReport_i = function() {
        var e = new eui.RadioButton;
        return this.rbBottomReport = e,
        e.groupName = "ReportPosition",
        e.label = "",
        e.value = "2",
        e.visible = !0,
        e.x = 105,
        e.skinName = c,
        e
    },
    g.btn4up1_i = function() {
        var e = new eui.Image;
        return this.btn4up1 = e,
        e.source = "ssn_battle_new_btn4up1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    g.btn4up2_i = function() {
        var e = new eui.Image;
        return this.btn4up2 = e,
        e.source = "ssn_battle_new_btn4up2_png",
        e.visible = !1,
        e.x = 105,
        e.y = 0,
        e
    },
    g.btn4down1_i = function() {
        var e = new eui.Image;
        return this.btn4down1 = e,
        e.source = "ssn_battle_new_btn4down1_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    g.btn4down2_i = function() {
        var e = new eui.Image;
        return this.btn4down2 = e,
        e.source = "ssn_battle_new_btn4down2_png",
        e.visible = !1,
        e.x = 105,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/page/NoticeSkin.exml"] = window.systemSetNew.NoticeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["content", "btnHelp", "notice"],
        this.height = 276,
        this.width = 756,
        this.elementsContent = [this.content_i(), this.notice_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["off", "on", "handleoff", "handleon"],
            this.elementsContent = [this.off_i(), this.on_i(), this.handleoff_i(), this.handleon_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("off", "visible", !0), new eui.SetProperty("handleoff", "visible", !0)]), new eui.State("down", [new eui.SetProperty("on", "visible", !0), new eui.SetProperty("handleon", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.off_i = function() {
            var e = new eui.Image;
            return this.off = e,
            e.source = "ssn_common_set_new_off_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.on_i = function() {
            var e = new eui.Image;
            return this.on = e,
            e.source = "ssn_common_set_new_on_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.handleoff_i = function() {
            var e = new eui.Image;
            return this.handleoff = e,
            e.source = "ssn_common_set_new_handleoff_png",
            e.visible = !1,
            e.x = 1,
            e.y = 3,
            e
        },
        n.handleon_i = function() {
            var e = new eui.Image;
            return this.handleon = e,
            e.source = "ssn_common_set_new_handleon_png",
            e.visible = !1,
            e.x = 20,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["off", "on", "handleoff", "handleon"],
            this.elementsContent = [this.off_i(), this.on_i(), this.handleoff_i(), this.handleon_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("off", "visible", !0), new eui.SetProperty("handleoff", "visible", !0)]), new eui.State("down", [new eui.SetProperty("on", "visible", !0), new eui.SetProperty("handleon", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.off_i = function() {
            var e = new eui.Image;
            return this.off = e,
            e.source = "ssn_common_set_new_off_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.on_i = function() {
            var e = new eui.Image;
            return this.on = e,
            e.source = "ssn_common_set_new_on_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.handleoff_i = function() {
            var e = new eui.Image;
            return this.handleoff = e,
            e.source = "ssn_common_set_new_handleoff_png",
            e.visible = !1,
            e.x = 1,
            e.y = 3,
            e
        },
        n.handleon_i = function() {
            var e = new eui.Image;
            return this.handleon = e,
            e.source = "ssn_common_set_new_handleon_png",
            e.visible = !1,
            e.x = 20,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["off", "on", "handleoff", "handleon"],
            this.elementsContent = [this.off_i(), this.on_i(), this.handleoff_i(), this.handleon_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("off", "visible", !0), new eui.SetProperty("handleoff", "visible", !0)]), new eui.State("down", [new eui.SetProperty("on", "visible", !0), new eui.SetProperty("handleon", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.off_i = function() {
            var e = new eui.Image;
            return this.off = e,
            e.source = "ssn_common_set_new_off_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.on_i = function() {
            var e = new eui.Image;
            return this.on = e,
            e.source = "ssn_common_set_new_on_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.handleoff_i = function() {
            var e = new eui.Image;
            return this.handleoff = e,
            e.source = "ssn_common_set_new_handleoff_png",
            e.visible = !1,
            e.x = 1,
            e.y = 3,
            e
        },
        n.handleon_i = function() {
            var e = new eui.Image;
            return this.handleon = e,
            e.source = "ssn_common_set_new_handleon_png",
            e.visible = !1,
            e.x = 20,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["off", "on", "handleoff", "handleon"],
            this.elementsContent = [this.off_i(), this.on_i(), this.handleoff_i(), this.handleon_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("off", "visible", !0), new eui.SetProperty("handleoff", "visible", !0)]), new eui.State("down", [new eui.SetProperty("on", "visible", !0), new eui.SetProperty("handleon", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.off_i = function() {
            var e = new eui.Image;
            return this.off = e,
            e.source = "ssn_common_set_new_off_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.on_i = function() {
            var e = new eui.Image;
            return this.on = e,
            e.source = "ssn_common_set_new_on_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.handleoff_i = function() {
            var e = new eui.Image;
            return this.handleoff = e,
            e.source = "ssn_common_set_new_handleoff_png",
            e.visible = !1,
            e.x = 1,
            e.y = 3,
            e
        },
        n.handleon_i = function() {
            var e = new eui.Image;
            return this.handleon = e,
            e.source = "ssn_common_set_new_handleon_png",
            e.visible = !1,
            e.x = 20,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["off", "on", "handleoff", "handleon"],
            this.elementsContent = [this.off_i(), this.on_i(), this.handleoff_i(), this.handleon_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("off", "visible", !0), new eui.SetProperty("handleoff", "visible", !0)]), new eui.State("down", [new eui.SetProperty("on", "visible", !0), new eui.SetProperty("handleon", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.off_i = function() {
            var e = new eui.Image;
            return this.off = e,
            e.source = "ssn_common_set_new_off_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.on_i = function() {
            var e = new eui.Image;
            return this.on = e,
            e.source = "ssn_common_set_new_on_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.handleoff_i = function() {
            var e = new eui.Image;
            return this.handleoff = e,
            e.source = "ssn_common_set_new_handleoff_png",
            e.visible = !1,
            e.x = 1,
            e.y = 3,
            e
        },
        n.handleon_i = function() {
            var e = new eui.Image;
            return this.handleon = e,
            e.source = "ssn_common_set_new_handleon_png",
            e.visible = !1,
            e.x = 20,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["off", "on", "handleoff", "handleon"],
            this.elementsContent = [this.off_i(), this.on_i(), this.handleoff_i(), this.handleon_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("off", "visible", !0), new eui.SetProperty("handleoff", "visible", !0)]), new eui.State("down", [new eui.SetProperty("on", "visible", !0), new eui.SetProperty("handleon", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.off_i = function() {
            var e = new eui.Image;
            return this.off = e,
            e.source = "ssn_common_set_new_off_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.on_i = function() {
            var e = new eui.Image;
            return this.on = e,
            e.source = "ssn_common_set_new_on_png",
            e.visible = !1,
            e.x = 0,
            e.y = 2,
            e
        },
        n.handleoff_i = function() {
            var e = new eui.Image;
            return this.handleoff = e,
            e.source = "ssn_common_set_new_handleoff_png",
            e.visible = !1,
            e.x = 1,
            e.y = 3,
            e
        },
        n.handleon_i = function() {
            var e = new eui.Image;
            return this.handleon = e,
            e.source = "ssn_common_set_new_handleon_png",
            e.visible = !1,
            e.x = 20,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    _ = t.prototype;
    return _.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i()],
        e
    },
    _._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_common_set_new_contentbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.notice_i = function() {
        var e = new eui.Group;
        return this.notice = e,
        e.x = 41,
        e.y = 19,
        e.elementsContent = [this._Image2_i(), this.btnHelp_i(), this._ToggleSwitch1_i(), this._ToggleSwitch2_i(), this._ToggleSwitch3_i(), this._ToggleSwitch4_i(), this._ToggleSwitch5_i(), this._ToggleSwitch6_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i()],
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_notice_jstzts_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "ssn_notice_btnhelp_png",
        e.x = 159,
        e.y = 1,
        e
    },
    _._ToggleSwitch1_i = function() {
        var e = new eui.ToggleSwitch;
        return e.label = "",
        e.visible = !0,
        e.x = 242,
        e.y = 4,
        e.skinName = n,
        e
    },
    _._ToggleSwitch2_i = function() {
        var e = new eui.ToggleSwitch;
        return e.label = "",
        e.visible = !0,
        e.x = 242,
        e.y = 74,
        e.skinName = i,
        e
    },
    _._ToggleSwitch3_i = function() {
        var e = new eui.ToggleSwitch;
        return e.label = "",
        e.visible = !0,
        e.x = 614,
        e.y = 74,
        e.skinName = s,
        e
    },
    _._ToggleSwitch4_i = function() {
        var e = new eui.ToggleSwitch;
        return e.label = "",
        e.visible = !0,
        e.x = 242,
        e.y = 144,
        e.skinName = r,
        e
    },
    _._ToggleSwitch5_i = function() {
        var e = new eui.ToggleSwitch;
        return e.label = "",
        e.visible = !0,
        e.x = 614,
        e.y = 144,
        e.skinName = o,
        e
    },
    _._ToggleSwitch6_i = function() {
        var e = new eui.ToggleSwitch;
        return e.label = "",
        e.visible = !0,
        e.x = 242,
        e.y = 214,
        e.skinName = a,
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_notice_df6v6kstz_png",
        e.x = 0,
        e.y = 70,
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_notice_dzyqtz_png",
        e.x = 373,
        e.y = 70,
        e
    },
    _._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_notice_hdkqtz_png",
        e.x = 0,
        e.y = 140,
        e
    },
    _._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_notice_zdyqtz_png",
        e.x = 372,
        e.y = 140,
        e
    },
    _._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_notice_hysltz_png",
        e.x = 0,
        e.y = 210,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/page/SoureSkin.exml"] = window.systemSetNew.SoureSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["contentbg", "content", "zyxf", "iconFix", "btnFix", "btnHelp", "fix", "jllhzy", "iconpet", "btnDownload", "btnUpdate", "yxz_kb", "petTexture", "dzdhzy", "iconBattle", "btnDownload_2", "btnUpdate_2", "yixiazai", "battle", "source"],
        this.height = 276,
        this.width = 756,
        this.elementsContent = [this.content_i(), this.source_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.contentbg_i()],
        e
    },
    n.contentbg_i = function() {
        var e = new eui.Image;
        return this.contentbg = e,
        e.source = "ssn_common_set_new_contentbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.source_i = function() {
        var e = new eui.Group;
        return this.source = e,
        e.x = 46,
        e.y = 16,
        e.elementsContent = [this.fix_i(), this.petTexture_i(), this.battle_i()],
        e
    },
    n.fix_i = function() {
        var e = new eui.Group;
        return this.fix = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.zyxf_i(), this.iconFix_i(), this.btnFix_i(), this.btnHelp_i()],
        e
    },
    n.zyxf_i = function() {
        var e = new eui.Image;
        return this.zyxf = e,
        e.source = "ssn_soure_zyxf_png",
        e.x = 44,
        e.y = 3,
        e
    },
    n.iconFix_i = function() {
        var e = new eui.Image;
        return this.iconFix = e,
        e.source = "ssn_soure_iconfix_png",
        e.x = 0,
        e.y = 2,
        e
    },
    n.btnFix_i = function() {
        var e = new eui.Image;
        return this.btnFix = e,
        e.source = "ssn_soure_btnfix_png",
        e.x = 533,
        e.y = 0,
        e
    },
    n.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "ssn_soure_btnhelp_png",
        e.x = 154,
        e.y = 4,
        e
    },
    n.petTexture_i = function() {
        var e = new eui.Group;
        return this.petTexture = e,
        e.x = 0,
        e.y = 70,
        e.elementsContent = [this.jllhzy_i(), this.iconpet_i(), this.btnDownload_i(), this.btnUpdate_i(), this.yxz_kb_i()],
        e
    },
    n.jllhzy_i = function() {
        var e = new eui.Image;
        return this.jllhzy = e,
        e.source = "ssn_soure_jllhzy_png",
        e.x = 44,
        e.y = 3,
        e
    },
    n.iconpet_i = function() {
        var e = new eui.Image;
        return this.iconpet = e,
        e.source = "ssn_soure_iconpet_png",
        e.x = 0,
        e.y = 2,
        e
    },
    n.btnDownload_i = function() {
        var e = new eui.Image;
        return this.btnDownload = e,
        e.source = "ssn_soure_btndownload_png",
        e.x = 533,
        e.y = 0,
        e
    },
    n.btnUpdate_i = function() {
        var e = new eui.Image;
        return this.btnUpdate = e,
        e.source = "ssn_soure_btnupdate_png",
        e.x = 533,
        e.y = 0,
        e
    },
    n.yxz_kb_i = function() {
        var e = new eui.Image;
        return this.yxz_kb = e,
        e.source = "ssn_soure_yxz_kb_png",
        e.x = 546,
        e.y = 5,
        e
    },
    n.battle_i = function() {
        var e = new eui.Group;
        return this.battle = e,
        e.x = 0,
        e.y = 140,
        e.elementsContent = [this.dzdhzy_i(), this.iconBattle_i(), this.btnDownload_2_i(), this.btnUpdate_2_i(), this.yixiazai_i()],
        e
    },
    n.dzdhzy_i = function() {
        var e = new eui.Image;
        return this.dzdhzy = e,
        e.source = "ssn_soure_dzdhzy_png",
        e.x = 45,
        e.y = 2,
        e
    },
    n.iconBattle_i = function() {
        var e = new eui.Image;
        return this.iconBattle = e,
        e.source = "ssn_soure_iconbattle_png",
        e.x = 0,
        e.y = 1,
        e
    },
    n.btnDownload_2_i = function() {
        var e = new eui.Image;
        return this.btnDownload_2 = e,
        e.source = "ssn_soure_btndownload_png",
        e.x = 533,
        e.y = 0,
        e
    },
    n.btnUpdate_2_i = function() {
        var e = new eui.Image;
        return this.btnUpdate_2 = e,
        e.source = "ssn_soure_btnupdate_png",
        e.x = 533,
        e.y = 0,
        e
    },
    n.yixiazai_i = function() {
        var e = new eui.Image;
        return this.yixiazai = e,
        e.source = "ssn_soure_yixiazai_png",
        e.x = 546,
        e.y = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/SystemSetNewSkin.exml"] = window.SystemSetNewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "rb_common", "rb_fight", "rb_account", "rb_res", "rb_notice", "menu", "content", "btnContactUs", "btnExitGame", "btnCancel"],
        this.height = 551,
        this.width = 1e3,
        this.elementsContent = [this._Group1_i(), this.btnClose_i(), this.menu_i(), this.content_i(), this.btnContactUs_i(), this.btnExitGame_i(), this.btnCancel_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "ssn_system_set_new_selected_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_system_set_new_selected_png",
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.size = 20,
            e.text = "常用",
            e.textColor = 15857151,
            e.visible = !0,
            e.x = 65,
            e.y = 21,
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.height = 63,
            e.width = 171,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "ssn_system_set_new_selected_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_system_set_new_selected_png",
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.size = 20,
            e.text = "对战",
            e.textColor = 15857151,
            e.visible = !0,
            e.x = 65,
            e.y = 21,
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.height = 63,
            e.width = 171,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "ssn_system_set_new_selected_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_system_set_new_selected_png",
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.size = 20,
            e.text = "账号",
            e.textColor = 15857151,
            e.visible = !0,
            e.x = 65,
            e.y = 21,
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.height = 63,
            e.width = 171,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "ssn_system_set_new_selected_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_system_set_new_selected_png",
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.size = 20,
            e.text = "资源",
            e.textColor = 15857151,
            e.visible = !0,
            e.x = 65,
            e.y = 21,
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.height = 63,
            e.width = 171,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "ssn_system_set_new_selected_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "ssn_system_set_new_selected_png",
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.size = 20,
            e.text = "通知",
            e.textColor = 15857151,
            e.visible = !0,
            e.x = 65,
            e.y = 21,
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.height = 63,
            e.width = 171,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()],
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_system_set_new_bg_png",
        e.x = 1,
        e.y = 4,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_system_set_new_title_png",
        e.x = 31,
        e.y = 0,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_system_set_new_leftbg_png",
        e.x = 0,
        e.y = 36,
        e
    },
    a.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "ssn_system_set_new_close_png",
        e.x = 957,
        e.y = 4,
        e
    },
    a.menu_i = function() {
        var e = new eui.Group;
        return this.menu = e,
        e.x = 1,
        e.y = 49,
        e.elementsContent = [this.rb_common_i(), this.rb_fight_i(), this.rb_account_i(), this.rb_res_i(), this.rb_notice_i()],
        e
    },
    a.rb_common_i = function() {
        var e = new eui.RadioButton;
        return this.rb_common = e,
        e.label = "",
        e.selected = !0,
        e.value = "0",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.skinName = n,
        e
    },
    a.rb_fight_i = function() {
        var e = new eui.RadioButton;
        return this.rb_fight = e,
        e.label = "",
        e.selected = !0,
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.y = 64,
        e.skinName = i,
        e
    },
    a.rb_account_i = function() {
        var e = new eui.RadioButton;
        return this.rb_account = e,
        e.label = "",
        e.selected = !0,
        e.value = "2",
        e.visible = !1,
        e.x = 0,
        e.y = 128,
        e.skinName = s,
        e
    },
    a.rb_res_i = function() {
        var e = new eui.RadioButton;
        return this.rb_res = e,
        e.label = "",
        e.selected = !0,
        e.value = "3",
        e.visible = !1,
        e.x = 0,
        e.y = 192,
        e.skinName = r,
        e
    },
    a.rb_notice_i = function() {
        var e = new eui.RadioButton;
        return this.rb_notice = e,
        e.label = "",
        e.selected = !0,
        e.value = "4",
        e.visible = !1,
        e.x = 0,
        e.y = 256,
        e.skinName = o,
        e
    },
    a.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 208,
        e.y = 81,
        e.elementsContent = [this._Image4_i()],
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "ssn_system_set_new_contentbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.btnContactUs_i = function() {
        var e = new eui.Image;
        return this.btnContactUs = e,
        e.source = "ssn_system_set_new_btnContactUs_png",
        e.x = 766,
        e.y = 446,
        e
    },
    a.btnExitGame_i = function() {
        var e = new eui.Image;
        return this.btnExitGame = e,
        e.source = "ssn_system_set_new_btnExitGame_png",
        e.x = 612,
        e.y = 446,
        e
    },
    a.btnCancel_i = function() {
        var e = new eui.Image;
        return this.btnCancel = e,
        e.source = "ssn_system_set_new_btnCancel_png",
        e.visible = !1,
        e.x = 460,
        e.y = 446,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/page/SetHSliderSkin.exml"] = window.SetHSliderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["track", "trackHighlight", "thumb", "txtNum"],
        this.height = 44,
        this.width = 200,
        this.elementsContent = [this.track_i(), this.trackHighlight_i(), this.thumb_i(), this.txtNum_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.track_i = function() {
        var e = new eui.Image;
        return this.track = e,
        e.source = "system_set_bar_bg_png",
        e.percentWidth = 100,
        e.y = 8,
        e
    },
    n.trackHighlight_i = function() {
        var e = new eui.Image;
        return this.trackHighlight = e,
        e.scale9Grid = new egret.Rectangle(53, 0, 324, 4),
        e.source = "system_set_sound_bar_png",
        e.y = 8,
        e
    },
    n.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e,
        e.anchorOffsetX = 0,
        e.source = "system_set_bar_handle_png",
        e.y = -4,
        e
    },
    n.txtNum_i = function() {
        var e = new eui.Label;
        return this.txtNum = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "100",
        e.textAlign = "center",
        e.textColor = 13361663,
        e.visible = !1,
        e.width = 40,
        e.x = 0,
        e.y = 24,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/page/CommonSetSkin.exml"] = window.CommonSetSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["content_bg2", "sound_bar", "bar_handle", "fix_bar", "bar_handle2", "btnQA", "txt_code", "btnQA2", "btnExchange", "ts_sound", "rb_webgl", "rb_canvas", "soundSlider", "adaptSlide"],
        this.height = 350,
        this.width = 703,
        this.elementsContent = [this.content_bg2_i(), this._Label1_i(), this._Image1_i(), this._Image2_i(), this.sound_bar_i(), this.bar_handle_i(), this._Image3_i(), this.fix_bar_i(), this.bar_handle2_i(), this.btnQA_i(), this._Label2_i(), this._Image4_i(), this._Label3_i(), this._Image5_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Image6_i(), this.txt_code_i(), this.btnQA2_i(), this._Image7_i(), this.btnExchange_i(), this.ts_sound_i(), this.rb_webgl_i(), this.rb_canvas_i(), this.soundSlider_i(), this.adaptSlide_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_sound_on_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_sound_of_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_selected_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_unselected_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_selected_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_unselected_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r.content_bg2_i = function() {
        var e = new eui.Image;
        return this.content_bg2 = e,
        e.height = 350,
        e.source = "system_set_content_bg_png",
        e.visible = !0,
        e.width = 703,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "音  乐",
        e.textColor = 13361663,
        e.x = 71,
        e.y = 24,
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "system_set_icon_sound_png",
        e.width = 35,
        e.x = 23,
        e.y = 19,
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 4,
        e.source = "system_set_bar_bg_png",
        e.visible = !1,
        e.width = 430,
        e.x = 248,
        e.y = 34,
        e
    },
    r.sound_bar_i = function() {
        var e = new eui.Image;
        return this.sound_bar = e,
        e.height = 4,
        e.source = "system_set_sound_bar_png",
        e.visible = !1,
        e.width = 430,
        e.x = 248,
        e.y = 34,
        e
    },
    r.bar_handle_i = function() {
        var e = new eui.Image;
        return this.bar_handle = e,
        e.height = 28,
        e.source = "system_set_bar_handle_png",
        e.visible = !1,
        e.width = 28,
        e.x = 657,
        e.y = 22,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 4,
        e.source = "system_set_bar_bg_png",
        e.visible = !1,
        e.width = 430,
        e.x = 248,
        e.y = 104,
        e
    },
    r.fix_bar_i = function() {
        var e = new eui.Image;
        return this.fix_bar = e,
        e.height = 4,
        e.source = "system_set_fix_bar_png",
        e.visible = !1,
        e.width = 200,
        e.x = 248,
        e.y = 104,
        e
    },
    r.bar_handle2_i = function() {
        var e = new eui.Image;
        return this.bar_handle2 = e,
        e.height = 28,
        e.source = "system_set_bar_handle_png",
        e.visible = !1,
        e.width = 28,
        e.x = 433,
        e.y = 92,
        e
    },
    r.btnQA_i = function() {
        var e = new eui.Image;
        return this.btnQA = e,
        e.height = 28,
        e.source = "system_set_btnQA_png",
        e.width = 28,
        e.x = 179,
        e.y = 92,
        e
    },
    r._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "异形适配",
        e.textColor = 13361663,
        e.x = 72,
        e.y = 94,
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "system_set_icon_adapt_png",
        e.width = 35,
        e.x = 23,
        e.y = 89,
        e
    },
    r._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "模式选择",
        e.textColor = 13361663,
        e.x = 71,
        e.y = 163,
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "system_set_icon_png",
        e.width = 35,
        e.x = 23,
        e.y = 158,
        e
    },
    r._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "常规模式",
        e.textColor = 13361663,
        e.x = 292,
        e.y = 166,
        e
    },
    r._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "兼容模式",
        e.textColor = 13361663,
        e.x = 514,
        e.y = 166,
        e
    },
    r._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "兑换奖励",
        e.textColor = 13361663,
        e.x = 71,
        e.y = 233,
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 30,
        e.source = "system_set_yjjx_1_kb_2_png",
        e.width = 254,
        e.x = 248,
        e.y = 230,
        e
    },
    r.txt_code_i = function() {
        var e = new eui.EditableText;
        return this.txt_code = e,
        e.prompt = "请输入兑换码",
        e.promptColor = 13361663,
        e.size = 20,
        e.textAlign = "center",
        e.textColor = 13361663,
        e.width = 247,
        e.x = 253,
        e.y = 235,
        e
    },
    r.btnQA2_i = function() {
        var e = new eui.Image;
        return this.btnQA2 = e,
        e.height = 28,
        e.source = "system_set_btnQA_png",
        e.width = 28,
        e.x = 179,
        e.y = 161,
        e
    },
    r._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "system_set_icon_exchange_png",
        e.width = 35,
        e.x = 23,
        e.y = 228,
        e
    },
    r.btnExchange_i = function() {
        var e = new eui.Group;
        return this.btnExchange = e,
        e.x = 558,
        e.y = 225,
        e.elementsContent = [this._Image8_i(), this._Label7_i()],
        e
    },
    r._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "common_btn_bg_style_orange_2_png",
        e.width = 120,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "兑换",
        e.textColor = 8341784,
        e.x = 40,
        e.y = 10,
        e
    },
    r.ts_sound_i = function() {
        var e = new eui.ToggleSwitch;
        return this.ts_sound = e,
        e.label = "",
        e.x = 171,
        e.y = 22,
        e.skinName = n,
        e
    },
    r.rb_webgl_i = function() {
        var e = new eui.RadioButton;
        return this.rb_webgl = e,
        e.groupName = "renderMode",
        e.label = "",
        e.value = "webgl",
        e.x = 248,
        e.y = 163,
        e.skinName = i,
        e
    },
    r.rb_canvas_i = function() {
        var e = new eui.RadioButton;
        return this.rb_canvas = e,
        e.groupName = "renderMode",
        e.label = "",
        e.value = "canvas",
        e.x = 470,
        e.y = 163,
        e.skinName = s,
        e
    },
    r.soundSlider_i = function() {
        var e = new TMHSlider;
        return this.soundSlider = e,
        e.height = 20,
        e.maximum = 100,
        e.minimum = 0,
        e.pendingValue = 1,
        e.skinName = "SetHSliderSkin",
        e.value = 100,
        e.width = 438,
        e.x = 248,
        e.y = 26,
        e
    },
    r.adaptSlide_i = function() {
        var e = new TMHSlider;
        return this.adaptSlide = e,
        e.height = 20,
        e.maximum = 50,
        e.skinName = "SetHSliderSkin",
        e.value = 100,
        e.width = 438,
        e.x = 248,
        e.y = 96,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/page/FightSetSkin.exml"] = window.FightSetSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["content_bg", "rb_1", "rb_2", "rb_5", "rb_10", "mode_icon", "rb_cjs", "rb_preview", "rb_card", "rbSimpleReport", "rbDetailedReport", "rbTopReport", "rbBottomReport"],
        this.height = 350,
        this.width = 703,
        this.elementsContent = [this.content_bg_i(), this._Image1_i(), this.rb_1_i(), this.rb_2_i(), this.rb_5_i(), this.rb_10_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_speed_1_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_speed_1_up_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_speed_2_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_speed_2_up_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_speed_5_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_speed_5_up_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_speed_10_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_speed_10_up_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "system_setcjs_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_setcjs_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "system_setpreview_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_setpreview_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "system_setcard_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_setcard_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_new_btn11up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_new_btn11down_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    l = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_new_btn12up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_new_btn12down_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    h = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_new_btn21up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_new_btn21down_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    c = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "system_set_new_btn22up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "system_set_new_btn22down_png",
            e.percentWidth = 100,
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    g = t.prototype;
    return g.content_bg_i = function() {
        var e = new eui.Image;
        return this.content_bg = e,
        e.height = 350,
        e.source = "system_set_content_bg_png",
        e.width = 703,
        e.x = -1,
        e.y = 0,
        e
    },
    g._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "system_set_fight_speed_icon_png",
        e.x = 23,
        e.y = 19,
        e
    },
    g.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "fight_speed",
        e.label = "",
        e.selected = !0,
        e.value = "1",
        e.x = 261,
        e.y = 20,
        e.skinName = n,
        e
    },
    g.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "fight_speed",
        e.label = "",
        e.value = "2",
        e.x = 371,
        e.y = 20,
        e.skinName = i,
        e
    },
    g.rb_5_i = function() {
        var e = new eui.RadioButton;
        return this.rb_5 = e,
        e.groupName = "fight_speed",
        e.label = "",
        e.value = "5",
        e.x = 481,
        e.y = 20,
        e.skinName = s,
        e
    },
    g.rb_10_i = function() {
        var e = new eui.RadioButton;
        return this.rb_10 = e,
        e.groupName = "fight_speed",
        e.label = "",
        e.value = "10",
        e.x = 591,
        e.y = 20,
        e.skinName = r,
        e
    },
    g._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 23,
        e.y = 90,
        e.elementsContent = [this.mode_icon_i(), this.rb_cjs_i(), this.rb_preview_i(), this.rb_card_i()],
        e
    },
    g.mode_icon_i = function() {
        var e = new eui.Image;
        return this.mode_icon = e,
        e.height = 35,
        e.source = "system_set_mode_icon_png",
        e.width = 131,
        e.x = 0,
        e.y = 0,
        e
    },
    g.rb_cjs_i = function() {
        var e = new eui.RadioButton;
        return this.rb_cjs = e,
        e.groupName = "fight_mode",
        e.selected = !1,
        e.value = "0",
        e.x = 238,
        e.y = 1,
        e.skinName = o,
        e
    },
    g.rb_preview_i = function() {
        var e = new eui.RadioButton;
        return this.rb_preview = e,
        e.groupName = "fight_mode",
        e.value = "2",
        e.x = 348,
        e.y = 1,
        e.skinName = a,
        e
    },
    g.rb_card_i = function() {
        var e = new eui.RadioButton;
        return this.rb_card = e,
        e.groupName = "fight_mode",
        e.value = "1",
        e.x = 458,
        e.y = 1,
        e.skinName = _,
        e
    },
    g._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 23,
        e.y = 158,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.rbSimpleReport_i(), this.rbDetailedReport_i()],
        e
    },
    g._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "system_set_new_imgicon1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    g._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "system_set_new_txt1_png",
        e.x = 47,
        e.y = 6,
        e
    },
    g.rbSimpleReport_i = function() {
        var e = new eui.RadioButton;
        return this.rbSimpleReport = e,
        e.groupName = "reportContent",
        e.value = "1",
        e.x = 238,
        e.y = 1,
        e.skinName = u,
        e
    },
    g.rbDetailedReport_i = function() {
        var e = new eui.RadioButton;
        return this.rbDetailedReport = e,
        e.groupName = "reportContent",
        e.value = "2",
        e.x = 348,
        e.y = 1,
        e.skinName = l,
        e
    },
    g._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 23,
        e.y = 226,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this.rbTopReport_i(), this.rbBottomReport_i()],
        e
    },
    g._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "system_set_new_imgicon2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    g._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "system_set_new_txt2_png",
        e.x = 47,
        e.y = 6,
        e
    },
    g.rbTopReport_i = function() {
        var e = new eui.RadioButton;
        return this.rbTopReport = e,
        e.groupName = "ReportPosition",
        e.value = "1",
        e.x = 238,
        e.y = 1,
        e.skinName = h,
        e
    },
    g.rbBottomReport_i = function() {
        var e = new eui.RadioButton;
        return this.rbBottomReport = e,
        e.groupName = "ReportPosition",
        e.value = "2",
        e.x = 348,
        e.y = 1,
        e.skinName = c,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SystemSetSkin.exml"] = window.SystemSetSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "rb_common", "rb_fight", "rb_account", "rb_res", "rb_notice", "menu", "content", "btnContactUs", "btnExitGame"],
        this.height = 528,
        this.width = 925,
        this.elementsContent = [this._Group1_i(), this.btnClose_i(), this.menu_i(), this.content_i(), this.btnContactUs_i(), this.btnExitGame_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "system_set_common1_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "system_set_common1_up_png",
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "system_set_fight_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "system_set_fight_up_png",
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "system_set_account_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "system_set_account_up_png",
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "system_set_resource_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "system_set_resource_up_png",
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "x", -2), new eui.SetProperty("_Image1", "source", "system_set_notice_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "system_set_notice_up_png",
            e
        },
        n.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 2,
        e.y = 22,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i()],
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 487,
        e.source = "common_pop_point_png",
        e.width = 753,
        e.x = 158,
        e.y = 19,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 479,
        e.source = "common_s9_pop_bg3_png",
        e.width = 163,
        e.x = 0,
        e.y = 23,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_pop_title_big_png",
        e.width = 907,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "system_set_title_png",
        e.width = 56,
        e.x = 35,
        e.y = 6,
        e
    },
    a.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 56,
        e.source = "common_close_1_png",
        e.width = 54,
        e.x = 871,
        e.y = 0,
        e
    },
    a.menu_i = function() {
        var e = new eui.Group;
        return this.menu = e,
        e.x = 0,
        e.y = 71,
        e.elementsContent = [this.rb_common_i(), this.rb_fight_i(), this.rb_account_i(), this.rb_res_i(), this.rb_notice_i()],
        e
    },
    a.rb_common_i = function() {
        var e = new eui.RadioButton;
        return this.rb_common = e,
        e.label = "",
        e.selected = !0,
        e.value = "0",
        e.x = 2,
        e.y = 0,
        e.skinName = n,
        e
    },
    a.rb_fight_i = function() {
        var e = new eui.RadioButton;
        return this.rb_fight = e,
        e.label = "",
        e.value = "1",
        e.x = 2,
        e.y = 54,
        e.skinName = i,
        e
    },
    a.rb_account_i = function() {
        var e = new eui.RadioButton;
        return this.rb_account = e,
        e.label = "",
        e.value = "2",
        e.visible = !1,
        e.x = 2,
        e.y = 109,
        e.skinName = s,
        e
    },
    a.rb_res_i = function() {
        var e = new eui.RadioButton;
        return this.rb_res = e,
        e.label = "",
        e.value = "3",
        e.visible = !1,
        e.x = 2,
        e.y = 163,
        e.skinName = r,
        e
    },
    a.rb_notice_i = function() {
        var e = new eui.RadioButton;
        return this.rb_notice = e,
        e.label = "",
        e.value = "4",
        e.visible = !1,
        e.x = 2,
        e.y = 217,
        e.skinName = o,
        e
    },
    a.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 185,
        e.y = 71,
        e.elementsContent = [this._Image5_i()],
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 350,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "system_set_content_bg_png",
        e.width = 703,
        e.x = 0,
        e.y = 0,
        e
    },
    a.btnContactUs_i = function() {
        var e = new eui.Image;
        return this.btnContactUs = e,
        e.source = "system_set_btnContactUs_png",
        e.x = 766,
        e.y = 446,
        e
    },
    a.btnExitGame_i = function() {
        var e = new eui.Image;
        return this.btnExitGame = e,
        e.source = "system_set_btnExitGame_png",
        e.x = 612,
        e.y = 446,
        e
    },
    t
} (eui.Skin);