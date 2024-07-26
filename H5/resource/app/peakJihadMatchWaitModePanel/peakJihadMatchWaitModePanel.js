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
peakJihadMatchWaitModePanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            void 0 === e && (e = null);
            var i = t.call(this) || this;
            if (i._fightMod = 2, i.data = e, i.data) switch (i._curMode = i.data.fightMod, i._curMode) {
            case 1:
                i._fightMod = 1;
                break;
            case 2:
            case 3:
            case 4:
            case 8:
                i._fightMod = 2;
                break;
            default:
                i._fightMod = 2
            }
            return i.skinName = PeakjihadmatchwaitmodeSkin,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.wait.visible = !0,
            this.txt.text = "匹配对手中…0s",
            this.txt1.text = MainManager.actorInfo.nick,
            this.timePast = 0,
            this.headIcon.setData({
                headId: MainManager.actorInfo.head_id,
                headFrameId: MainManager.actorInfo.head_frame_id
            }),
            this._aniChenggong = DragonbonesUtil.createAnimate("pipei_ske_json", "pipei_tex_json", "pipei_tex_png", "pipei"),
            this._aniXunHuan = DragonbonesUtil.createAnimate("pipei_ske_json", "pipei_tex_json", "pipei_tex_png", "pipei"),
            this.group_ani.addChild(this._aniXunHuan),
            this.group_ani.addChild(this._aniChenggong),
            this._aniChenggong.visible = !1,
            this._aniXunHuan.animation.play("xunhuan", 0),
            this.startTimer(),
            this.initCmdEvent(),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT,
            function() {
                e.onClose()
            },
            this),
            ImageButtonUtil.add(this.imgBtnCancel, this._onClickImageTouch, this)
        },
        e.prototype.startTimer = function() {
            this.timer || (this.timer = new egret.Timer(1e3), this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandle, this), this.timer.start())
        },
        e.prototype.closeTimer = function() {
            this.timer && (this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHandle, this), this.timer.stop(), this.timer = null)
        },
        e.prototype.timerHandle = function(t) {
            void 0 === t && (t = null),
            this.timePast++,
            this.txt.text = "匹配对手中…" + this.timePast + "s"
        },
        e.prototype.breaklineSynchronizedData = function() {
            var t = this;
            KTool.getMultiValue([1046],
            function(e) {
                t._curStep = e[0],
                1 == t._curStep && 1 == e[1] ? SocketConnection.addCmdListener(45141, t.onMatchNotificationPacket, t) : 2 == t._curStep && (1 == t._fightMod ? ModuleManager.hideModule("peakJihad3V3BanPickModePanel") : ModuleManager.hideModule("peakJihad6V6BanPickModePanel"), t.enterFight())
            })
        },
        e.prototype._onClickImageTouch = function(e) {
            var i = this,
            n = e.currentTarget;
            switch (n) {
            case this.imgBtnCancel:
                SocketConnection.sendByQueue(45139, [2, this._fightMod, 0],
                function(e) {
                    t.prototype.onClose.call(i)
                })
            }
        },
        e.prototype.initCmdEvent = function() {
            var t = this;
            SocketConnection.sendByQueue(45139, [1, this._fightMod, 0],
            function(e) {
                var i = e.data;
                i.position = 0;
                var n = i.readUnsignedInt();
                0 != n ? t.enterFight() : SocketConnection.addCmdListener(45141, t.onMatchNotificationPacket, t)
            })
        },
        e.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([3307],
            function(e) {
                t._curStep = e[0]
            })
        },
        e.prototype.onMatchNotificationPacket = function(t) {
            var e = t.data;
            e.position = 0;
            e.readUnsignedInt(),
            e.readUnsignedInt(),
            e.readUnsignedInt();
            SocketConnection.removeCmdListener(45141, this.onMatchNotificationPacket, this),
            this.enterFight()
        },
        e.prototype.enterFight = function() {
            var t = this;
            this.closeTimer(),
            PeakJihadController.isInPvP = !0,
            this.wait.visible = !1,
            this._aniChenggong.visible = !0,
            DragonbonesUtil.play(this._aniChenggong, "chenggong", 1).then(function() {
                KTool.getMultiValue([3306],
                function(e) {
                    t._fightMod = e[0],
                    1 == t._fightMod ? (ModuleManager.CloseAll(), ModuleManager.showModule("peakJihad6V6BanPickModePanel", ["peakJihad6V6BanPickModePanel"], t._curMode, "PeakJihad3V3BanPickModePanel")) : 2 == t._fightMod && (ModuleManager.CloseAll(), ModuleManager.showModule("peakJihad6V6BanPickModePanel", ["peakJihad6V6BanPickModePanel"], t._curMode))
                })
            })
        },
        e.prototype.destroy = function() {
            this.headIcon.Destroy(),
            this.closeTimer(),
            SocketConnection.removeCmdListener(45141, this.onMatchNotificationPacket, this),
            this._alert && (DisplayUtil.removeForParent(this._alert), this._alert = null),
            clearTimeout(this._timeoutId),
            this._aniXunHuan.dispose(),
            this._aniChenggong.dispose(),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.PeakJihadMatchWaitModePanel = e,
    __reflect(e.prototype, "peakJihadMatchWaitModePanel.PeakJihadMatchWaitModePanel")
} (peakJihadMatchWaitModePanel || (peakJihadMatchWaitModePanel = {}));
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
generateEUI.paths["resource/eui_skins/PeakjihadmatchwaitmodeSkin.exml"] = window.PeakjihadmatchwaitmodeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "group_ani", "headIcon", "pet_head", "imgBtnCancel", "txt1", "txt", "wait"],
        this.height = 245,
        this.width = 1136,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.group_ani_i(), this.wait_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 245,
        t.source = "peakJihadMatchWaitModePanel_bg_png",
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_ani_i = function() {
        var t = new eui.Group;
        return this.group_ani = t,
        t.height = 0,
        t.width = 0,
        t.x = 568,
        t.y = 125,
        t
    },
    i.wait_i = function() {
        var t = new eui.Group;
        return this.wait = t,
        t.height = 228,
        t.width = 220,
        t.x = 459,
        t.y = 13,
        t.elementsContent = [this.pet_head_i(), this.imgBtnCancel_i(), this.txt1_i(), this.txt_i()],
        t
    },
    i.pet_head_i = function() {
        var t = new eui.Group;
        return this.pet_head = t,
        t.height = 100,
        t.width = 100,
        t.x = 59,
        t.y = 0,
        t.elementsContent = [this.headIcon_i()],
        t
    },
    i.headIcon_i = function() {
        var t = new core.component.AvatarIcon;
        return this.headIcon = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i.imgBtnCancel_i = function() {
        var t = new eui.Image;
        return this.imgBtnCancel = t,
        t.height = 42,
        t.source = "peakJihadMatchWaitModePanel_imgBtnCancel_png",
        t.width = 93,
        t.x = 63,
        t.y = 186,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "玩家昵称是多少个字来着",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 220,
        t.x = 0,
        t.y = 113,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.size = 18,
        t.text = "匹配对手中…90s",
        t.textAlign = "center",
        t.textColor = 4175861,
        t.width = 158,
        t.x = 32,
        t.y = 145,
        t
    },
    e
} (eui.Skin);