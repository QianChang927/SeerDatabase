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
reconnectionPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.openPanel(),
            t
        }
        return __extends(t, e),
        t.prototype.openPanel = function() {
            var e = egret.getDefinitionByName("reconnectionPanel.ReconnectionPopPanel");
            try {
                this._view = new e,
                this._view.addEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this);
                var t = PopViewManager.createDefaultStyleObject();
                t.maskShapeStyle.maskAlpha = 0,
                t.ignoreMaskClick = !1,
                PopViewManager.getInstance().openView(this._view, t)
            } catch(n) {
                console.error(n)
            }
        },
        t.prototype._onClosePanelEvent = function(e) {
            this.onClose()
        },
        t.prototype.destroy = function() {
            this._view.removeEventListener(PopView.EVENT_DESTROY, this._onClosePanelEvent, this),
            this._view = null,
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.ReconnectionPanel = t,
    __reflect(t.prototype, "reconnectionPanel.ReconnectionPanel")
} (reconnectionPanel || (reconnectionPanel = {}));
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
reconnectionPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "ReconnectionpanelNewSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.connectTime = 0,
            this.loadAnim = SpineUtil.createAnimate("loading"),
            this.ani.addChild(this.loadAnim),
            this.loadAnim.play("await", 0),
            this.labelTween(),
            this.addEvent()
        },
        t.prototype.addEvent = function() {
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.reConnectSuc, this),
            EventManager.addEventListener("reConnect_times", this.reConnectTimes, this)
        },
        t.prototype.removeEvent = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.reConnectSuc = function(e) {
            this.ani.removeChildren(),
            this.hide(),
            this.dispatchEventWith("event_close_panel")
        },
        t.prototype.reConnectTimes = function(e) {
            this.connectTime = ~~e.data + 1,
            this.times.text = "（第" + this.connectTime + "/5次尝试）",
            this.connectTime > 5 && egret.Tween.removeTweens(this.loading)
        },
        t.prototype.labelTween = function() {
            var e = this;
            egret.Tween.get(this.loading, {
                loop: !0
            }).call(function() {
                e.loading.text = "重新连接中."
            }).wait(400).call(function() {
                e.loading.text = "重新连接中.."
            }).wait(400).call(function() {
                e.loading.text = "重新连接中..."
            }).wait(400)
        },
        t.prototype.destroy = function() {
            this.removeEvent(),
            egret.Tween.removeTweens(this.loading),
            ReconnectPanelManager.removeView()
        },
        t
    } (PopView);
    e.ReconnectionPopNewPanel = t,
    __reflect(t.prototype, "reconnectionPanel.ReconnectionPopNewPanel")
} (reconnectionPanel || (reconnectionPanel = {}));
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
reconnectionPanel; !
function(e) {
    var t = function(t) {
        function n(e) {
            var n = t.call(this) || this;
            return n.skinName = "ReconnectionpanelSkin",
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.lostC.visible = !1,
            this.lost.visible = !0,
            this.connetTime = 0,
            this.addEvent()
        },
        n.prototype.addEvent = function() {
            ImageButtonUtil.add(this.imgbtnFix, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.imgbtnCompose, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.imgbtnFix1, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.imgbtnKf, this.onTouchTapImageButton, this)
        },
        n.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.imgbtnCompose:
                this.hide(),
                StatLogger.log("20230818版本系统功能", "断线重连", "断线后可重连情况下玩家取消重连"),
                core.gameUtil.ReloaderGame();
                break;
            case this.imgbtnFix:
                StatLogger.log("20230818版本系统功能", "断线重连", "断线后可重连情况下玩家选择重连"),
                this.hide();
                var n = PopViewManager.createDefaultStyleObject();
                n.maskShapeStyle.maskAlpha = .8,
                n.ignoreMaskClick = !0,
                PopViewManager.getInstance().openView(new e.ReconnectionPopNewPanel, n),
                OnlineManager.getInstance().reconnect(!0);
                break;
            case this.imgbtnFix1:
                core.gameUtil.ReloaderGame();
                break;
            case this.imgbtnKf:
                core.gameUtil.OpenUrl("http://kf.61.com"),
                core.gameUtil.ReloaderGame()
            }
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.ReconnectionPopPanel = t,
    __reflect(t.prototype, "reconnectionPanel.ReconnectionPopPanel")
} (reconnectionPanel || (reconnectionPanel = {}));
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
generateEUI.paths["resource/eui_skins/ReconnectionpanelNewSkin.exml"] = window.ReconnectionpanelNewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["ani", "loading", "times", "load"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.load_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.load_i = function() {
        var e = new eui.Group;
        return this.load = e,
        e.horizontalCenter = 0,
        e.y = 243,
        e.elementsContent = [this.ani_i(), this.loading_i(), this.times_i()],
        e
    },
    n.ani_i = function() {
        var e = new eui.Group;
        return this.ani = e,
        e.x = 58,
        e.y = 100,
        e
    },
    n.loading_i = function() {
        var e = new eui.Label;
        return this.loading = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "重新连接中...",
        e.textColor = 15924223,
        e.width = 116,
        e.y = 118,
        e
    },
    n.times_i = function() {
        var e = new eui.Label;
        return this.times = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "（第1/3次尝试）",
        e.textColor = 15924223,
        e.width = 138,
        e.x = 0,
        e.y = 142,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ReconnectionpanelSkin.exml"] = window.ReconnectionpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt", "imgbtnCompose", "imgbtnFix", "lost", "txt1", "imgbtnKf", "imgbtnFix1", "lostC"],
        this.height = 210,
        this.width = 442,
        this.elementsContent = [this._Image1_i(), this.lost_i(), this.lostC_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 210,
        e.scale9Grid = new egret.Rectangle(3, 3, 2, 2),
        e.source = "alert_BG_s9_png",
        e.width = 442,
        e.x = 0,
        e.y = 0,
        e
    },
    n.lost_i = function() {
        var e = new eui.Group;
        return this.lost = e,
        e.visible = !0,
        e.x = 41,
        e.y = 57,
        e.elementsContent = [this.txt_i(), this.imgbtnCompose_i(), this.imgbtnFix_i()],
        e
    },
    n.txt_i = function() {
        var e = new eui.Label;
        return this.txt = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "与服务器连接丢失，是否尝试重新连接？",
        e.textColor = 13820671,
        e.visible = !0,
        e.wordWrap = !0,
        e
    },
    n.imgbtnCompose_i = function() {
        var e = new eui.Image;
        return this.imgbtnCompose = e,
        e.source = "alarm_btnCancel_small_png",
        e.visible = !0,
        e.x = 28,
        e.y = 66,
        e
    },
    n.imgbtnFix_i = function() {
        var e = new eui.Image;
        return this.imgbtnFix = e,
        e.source = "alarm_btnOk_small_png",
        e.visible = !0,
        e.x = 198,
        e.y = 66,
        e
    },
    n.lostC_i = function() {
        var e = new eui.Group;
        return this.lostC = e,
        e.visible = !1,
        e.x = 31,
        e.y = 57,
        e.elementsContent = [this.txt1_i(), this.imgbtnKf_i(), this.imgbtnFix1_i()],
        e
    },
    n.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "未知网络连接错误，请尝试重新登录游戏。",
        e.textColor = 13820671,
        e.visible = !0,
        e.wordWrap = !0,
        e
    },
    n.imgbtnKf_i = function() {
        var e = new eui.Group;
        return this.imgbtnKf = e,
        e.x = 38,
        e.y = 66,
        e.elementsContent = [this._Image2_i(), this._Label1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "common_btn_bg_blue_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "联系客服",
        e.textColor = 2976172,
        e.visible = !0,
        e.wordWrap = !0,
        e.x = 27,
        e.y = 13,
        e
    },
    n.imgbtnFix1_i = function() {
        var e = new eui.Image;
        return this.imgbtnFix1 = e,
        e.horizontalCenter = 85,
        e.source = "alarm_btnOk_small_png",
        e.y = 66,
        e
    },
    t
} (eui.Skin);