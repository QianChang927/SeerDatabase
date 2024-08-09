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
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihadFreeWar; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._curChooseMode = 1,
            t._isOpenMatch = 1,
            t._isPlanner = !1,
            t.skinName = PeakJihadCreateARoomSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.gr_left),
            this.adaptRightContent(this.gr_right);
            var t = new ClothPreview;
            t.show(MainManager.actorInfo.clothes),
            this.petShow.addChild(t),
            this.Txt_name.text = MainManager.actorInfo.nick,
            e.prototype.initBtnClose.call(this, "PeakJihadCreateARoomPanel_title_chuangjianfangjian_png", this,
            function() {
                ModuleManager.CloseAll(),
                ModuleManager.showModule("peakJihadFirstPage", ["peakJihadFirstPage"], null, "PeakJihadFreeMode")
            },
            this),
            this.adaptBgByScale(this.bg),
            this.initEvents(),
            this.update()
        },
        t.prototype.initEvents = function() {
            for (var e = 0; 7 > e; e++) ImageButtonUtil.add(this["checkRule_" + e], this.oncheckHandler, this, !1);
            for (var t = 0; 2 > t; t++) ImageButtonUtil.add(this["checkMode_" + t], this.oncheckHandler, this, !1),
            ImageButtonUtil.add(this["checkMath_" + t], this.oncheckHandler, this, !1);
            ImageButtonUtil.add(this.creatRoomBtn, this.onCreatRoomHandler, this)
        },
        t.prototype.oncheckHandler = function(e) {
            var t = Number(e.currentTarget.name.split("_")[1]);
            switch (e.currentTarget.name) {
            case "checkRule_" + t: 4 == t ? BitUtil.getBit(this._originData, 5) > 0 ? Alarm.show("免疫物理攻击和免疫特殊攻击只能选择其中之一哦！") : this.setBit(t) : 5 == t && BitUtil.getBit(this._originData, 4) > 0 ? Alarm.show("免疫物理攻击和免疫特殊攻击只能选择其中之一哦！") : this.setBit(t),
                this.update();
                break;
            case "checkMode_" + t: this._curChooseMode = 0 == t ? 2 : 1,
                this.update();
                break;
            case "checkMath_" + t: this._isOpenMatch = 0 == t ? 2 : 1,
                this.update()
            }
        },
        t.prototype.onCreatRoomHandler = function(e) {
            SocketConnection.sendByQueue(45135, [1, this._curChooseMode, this._originData, this._isOpenMatch], this.onCreatRoomSuccess)
        },
        t.prototype.onCreatRoomSuccess = function(t) {
            var i = t.data;
            i.position = 0;
            var n = new Object;
            n.roomId = i.readUnsignedInt(),
            n.mode = i.readUnsignedInt(),
            n.rule = i.readUnsignedInt(),
            n.match = i.readUnsignedInt(),
            e.prototype.onClose.call(this),
            this._isPlanner ? (ModuleManager.showModule("peakJihadFreeWar", [], null, "PeakJihadRoomPanel"), Alarm.show("策划大大！~房间创建成功!你所创建的房间号为" + n.roomId + "，快去虐菜吧！")) : (ModuleManager.showModule("peakJihadFreeWar", [], null, "PeakJihadRoomPanel"), Alarm.show("房间创建成功!你所创建的房间号为" + n.roomId + "，快通知小伙伴通过指定加入从而快速进入你的房间跟你一起战斗吧！"))
        },
        t.prototype.onBlackBtnHandler = function(e) {
            ModuleManager.hideModule(this),
            ModuleManager.showModule("peakJihadFirstPage", ["peakJihadFirstPage"], null, "PeakJihadFreeMode")
        },
        t.prototype.update = function() {
            var e = this;
            1 == this._curChooseMode ? (this.checkMode_0.selected = !1, this.checkMode_1.selected = !0) : 2 == this._curChooseMode && (this.checkMode_0.selected = !0, this.checkMode_1.selected = !1),
            1 == this._isOpenMatch ? (this.checkMath_0.selected = !1, this.checkMath_1.selected = !0) : (this.checkMath_0.selected = !0, this.checkMath_1.selected = !1);
            for (var t = 0; 7 > t; t++) BitUtil.getBit(this._originData, t) > 0 ? this["checkRule_" + t].selected = !0 : this["checkRule_" + t].selected = !1;
            KTool.getMultiValue([100859],
            function(t) {
                e._isPlanner = Boolean(t[0])
            })
        },
        t.prototype.setBit = function(e) {
            BitUtil.getBit(this._originData, e) > 0 ? this._originData = BitUtil.setBit0(this._originData, e) : this._originData = BitUtil.setBit(this._originData, e)
        },
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.PeakJihadCreateARoomPanel = t,
    __reflect(t.prototype, "peakJihadFreeWar.PeakJihadCreateARoomPanel")
} (peakJihadFreeWar || (peakJihadFreeWar = {}));
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
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihadFreeWar; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            return 1 == i ? n.panel = new e.PeakJihadCreateARoomPanel: n.panel = new e.PeakJihadRoomPanel,
            n.addChild(n.panel),
            n
        }
        return __extends(i, t),
        i.prototype.destroy = function() {
            null != this.panel && this.removeChild(this.panel)
        },
        i
    } (BaseModule);
    e.PeakJihadFreeWar = t,
    __reflect(t.prototype, "peakJihadFreeWar.PeakJihadFreeWar")
} (peakJihadFreeWar || (peakJihadFreeWar = {}));
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
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihadFreeWar; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._isHomeowners = !1,
            t._pretime = 0,
            t._alltime = 0,
            t.skinName = PeakjihadroompanelSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.gr_left),
            this.adaptRightContent(this.gr_right),
            this.adaptBgByScale(this.bg),
            this.initBtnClose("PeakJihadRoomPanel_title_png", this, this.onBlackBtnHandler, this),
            this.initEvents(),
            this.update()
        },
        t.prototype.initEvents = function() {
            SocketConnection.addCmdListener(45140, this.onGoOutOnline, this),
            SocketConnection.addCmdListener(45142, this.onChallenger, this);
            for (var e = 0; 2 > e; e++) ImageButtonUtil.add(this["settingTeamBtn_" + e], this.onSettingTeamHandler, this);
            ImageButtonUtil.add(this.readyBtn, this.onReadyBtnHandler, this),
            ImageButtonUtil.add(this.startBtn, this.onStartBtnHandler, this),
            ImageButtonUtil.add(this.kickedChallengerBtn, this.onKickedChallengerHandler, this)
        },
        t.prototype.onSettingTeamHandler = function(e) {
            var t = Number(e.currentTarget.name.split("_")[1]);
            switch (e.currentTarget.name) {
            case "settingTeamBtn_" + t: ModuleManager.showModule("petBag", ["petBag"])
            }
        },
        t.prototype.onBlackBtnHandler = function(e) {
            this.tuichu(function() {})
        },
        t.prototype.tuichu = function(e) {
            var t = this;
            this._isHomeowners ? Alert.show("确定关闭此房间吗？",
            function() {
                FightManager.isFighting || SocketConnection.sendByQueue(45136, [5, 0],
                function() {
                    ModuleManager.hideModule(t),
                    ModuleManager.showModule("peakJihadFreeWar", [], null, "PeakJihadCreateARoomPanel"),
                    null != e && e()
                })
            }) : Alert.show("确定退出此房间吗？",
            function() {
                FightManager.isFighting || SocketConnection.sendByQueue(45136, [2, 0],
                function() {
                    ModuleManager.hideModule(t),
                    ModuleManager.showModule("peakJihadFirstPage", ["peakJihadFirstPage"], null, "PeakJihadFreeMode"),
                    null != e && e()
                })
            })
        },
        t.prototype.onReadyBtnHandler = function(e) {
            var t = this;
            PeakJihadController.getFristBagALLPetLvIsFull() ? SocketConnection.sendByQueue(45136, [3, 0],
            function() {
                t.update(),
                t.kickedChallengerBtn.filters = [ColorFilter.setGrayscale()],
                t.kickedChallengerBtn.touchEnabled = !1
            }) : Alarm.show("出战背包中的精灵还有未满级或者不满血的哦！点设置阵容按钮进行设置吧！")
        },
        t.prototype.onStartBtnHandler = function(e) {
            this._isHomeowners && (PeakJihadController.getFristBagALLPetLvIsFull() ? (PetFightModel.type = PetFightModel.PEAK_JIHAD_FREE, PetFightModel.enemyName = this.challengerNameTx.text, PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER, SocketConnection.send(CommandID.INVITE_TO_FIGHT, this._rivalUserID, this._fightMode), this.settingTeamBtn_0.visible = !1) : (this.settingTeamBtn_0.visible = !0, Alarm.show("出战背包中的精灵还有未满级或者不满血的哦！点设置阵容按钮进行设置吧！")))
        },
        t.prototype.onKickedChallengerHandler = function(e) {
            var t = this;
            SocketConnection.sendByQueue(45136, [4, this._rivalUserID],
            function() {
                t.update(),
                t.clearChallengerInfo()
            })
        },
        t.prototype.onGoOutOnline = function(e) {
            var t = e.data;
            t.position = 0;
            var i = (t.readUnsignedInt(), t.readUnsignedInt(), t.readUnsignedInt());
            this._isHomeowners ? (Alarm.show("对方中途退出了，不要灰心，再找一个对手吧！"), this.clearChallengerInfo(), this.update()) : 2 == i ? (Alarm.show("你被房主踢出了该房间"), this.onClose(), ModuleManager.showModule("peakJihadFirstPage", ["peakJihadFirstPage"], null, "PeakJihadFreeMode")) : 3 == i && (Alarm.show("对方中途退出了，不要灰心，再找一个对手吧！"), this.onClose(), ModuleManager.showModule("peakJihadFirstPage", ["peakJihadFirstPage"], null, "PeakJihadFreeMode"))
        },
        t.prototype.onChallenger = function(e) {
            this.update()
        },
        t.prototype.onStatusTimer = function(e) {
            var t = new Date;
            this._nowTime = t.getTime();
            var i = this._nowTime - this._pretime;
            this._alltime = this._alltime + i,
            this._alltime >= 1e3 && (this._alltime = 0, this._pretime = this._nowTime, this._surplusTime = 20 - Math.floor((this._nowTime - this._startTime) / 1e3), this._surplusTime <= 0 && (this.timeTx.text = "0", this._isHomeowners ? (this.onClose(), SocketConnection.sendByQueue(45136, [5, 0],
            function(e) {
                Alarm.show("由于房主未在20秒内开启对战，房间自动关闭！"),
                ModuleManager.showModule("peakJihadFirstPage", ["peakJihadFirstPage"], null, "PeakJihadFreeMode")
            })) : (this.onClose(), SocketConnection.sendByQueue(45136, [2, 0],
            function(e) {
                Alarm.show("由于房主未在20秒内开启对战，房间自动关闭！"),
                ModuleManager.showModule("peakJihadFirstPage", ["peakJihadFirstPage"], null, "PeakJihadFreeMode")
            }))), null != this.timeTx && (this.timeTx.textAlign = "center", this.timeTx.text = String(this._surplusTime)))
        },
        t.prototype.checkIdentity = function(e) {
            var t = this;
            if (1 == e) {
                this._isHomeowners = !0,
                this.settingTeamBtn_1.visible = !1,
                this.settingTeamBtn_0.visible = !0,
                this.startBtn.visible = !0,
                this.readyBtn.visible = !1,
                this.kickedChallengerBtn.visible = !1,
                this.homeownersNameTx.text = MainManager.actorInfo.nick,
                this.challengerNameTx.text = "";
                var i = new ClothPreview;
                i.show(MainManager.actorInfo.clothes),
                this.clothPos_0.addChild(i),
                KTool.getMultiValue([3314],
                function(e) {
                    t._rivalUserID = e[0],
                    0 == t._rivalUserID ? SocketConnection.addCmdListener(45141, t.onRivalComing, t) : t.showChallenger()
                })
            } else {
                this._isHomeowners = !1,
                this.settingTeamBtn_0.visible = !1,
                this.readyBtn.visible = !0,
                this.kickedChallengerBtn.visible = !1,
                this.startBtn.visible = !1,
                this.challengerNameTx.text = MainManager.actorInfo.nick,
                UserInfoManager.getInfo(this._rivalUserID,
                function(e) {
                    t.homeownersNameTx.text = e.nick;
                    var i = new ClothPreview;
                    i.show(e.clothes),
                    t.clothPos_0.addChild(i)
                });
                var i = new ClothPreview;
                i.show(MainManager.actorInfo.clothes),
                this.clothPos_1.addChild(i)
            }
            SocketConnection.addCmdListener(CommandID.NOTE_READY_TO_FIGHT, this.noteInviteToFight, this)
        },
        t.prototype.setRule = function(e) {
            for (var t = 0; 7 > t; t++) this["checkRlue_" + t].touchEnabled = !1,
            BitUtil.getBit(e, t) > 0 ? this["checkRlue_" + t].selected = !0 : this["checkRlue_" + t].selected = !1
        },
        t.prototype.setFreeStatus = function(e) {
            if (this._step = e, 2 == this._step) {
                this.settingTeamBtn_1.visible = !1,
                this.readyPng.visible = !0,
                this.readyBtn.touchEnabled = !1,
                this.startBtn.filters = null,
                this.startBtn.touchEnabled = !0;
                var t = new Date;
                this._startTime = t.getTime(),
                this._pretime = t.getTime(),
                this.addEventListener(egret.Event.ENTER_FRAME, this.onStatusTimer, this),
                Alarm.show("挑战者已经完成准备，房主如果不在20秒内开启对战，房间将自动关闭！")
            } else this.readyPng.visible = !1,
            this.startBtn.touchEnabled = !1,
            this.startBtn.filters = [ColorFilter.setGrayscale()],
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onStatusTimer, this),
            this.timeTx.text = "0"
        },
        t.prototype.update = function() {
            var t = this;
            this.touchChildren = this.touchEnabled = !1,
            KTool.getMultiValue([3305, 3314, 3315, 3313, 3316, 3317, 3318, 3312],
            function(i) {
                return t._rivalUserID = i[1],
                KTool.getOnlineUsersForeverOrDailyVal([t._rivalUserID, 3305],
                function(e) {}),
                t.homeIdTx.text = "房间号：" + i[2],
                0 == i[2] ? (e.prototype.onClose.call(t), void Alarm.show("对方已经退出房间，不要灰心，再找一个对手吧！")) : (t.checkIdentity(i[3]), t.setRule(i[4]), t.checkMode_0.touchEnabled = !1, t.checkMode_1.touchEnabled = !1, 1 == i[5] ? (t.checkMode_0.selected = !1, t.checkMode_1.selected = !0, t._fightMode = 2) : 2 == i[5] && (t.checkMode_0.selected = !0, t.checkMode_1.selected = !1, t._fightMode = 1), t.setFreeStatus(i[7]), void(t.touchChildren = t.touchEnabled = !0))
            })
        },
        t.prototype.clearChallengerInfo = function() {
            this.challengerNameTx.text = "",
            this.readyPng.visible = !1,
            DisplayUtil.removeAllChild(this.clothPos_1),
            this.timeTx.text = "",
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onStatusTimer, this)
        },
        t.prototype.onRivalComing = function(e) {
            var t = e.data;
            t.position = 0;
            var i = t.readUnsignedInt();
            this._rivalUserID = t.readUnsignedInt();
            var n = t.readUnsignedInt(),
            a = PeakJihadController.getRatingsNameByScore(n) + "级";
            3 == i ? Alarm.show("一位米米号为" + this._rivalUserID + "的" + a + "玩家通过快速加入进入你的房间") : 4 == i && Alarm.show("一位米米号为" + this._rivalUserID + "的" + a + "玩家通过指定加入进入你的房间"),
            this.showChallenger()
        },
        t.prototype.showChallenger = function() {
            var e = this;
            null != this && (this.kickedChallengerBtn.visible = !0),
            UserInfoManager.getInfo(this._rivalUserID,
            function(t) {
                e.challengerNameTx.text = t.nick;
                var i = new ClothPreview;
                i.show(t.clothes),
                e.clothPos_1.addChild(i)
            })
        },
        t.prototype.noteInviteToFight = function(t) {
            this._isHomeowners ? PetFightModel.enemyName = this.challengerNameTx.text: PetFightModel.enemyName = this.homeownersNameTx.text,
            PetFightModel.type = PetFightModel.PEAK_JIHAD_FREE,
            PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER,
            e.prototype.onClose.call(this)
        },
        t.prototype.onFightOver = function(e) {
            KTool.getMultiValue([3315],
            function(e) {
                0 != e[0] && PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE && PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER && (EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this), ModuleManager.showModule("peakJihadFreeWar", ["peakJihadFreeWar"], null, "PeakJihadRoomPanel"))
            })
        },
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onStatusTimer, this),
            SocketConnection.removeAll(this),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.PeakJihadRoomPanel = t,
    __reflect(t.prototype, "peakJihadFreeWar.PeakJihadRoomPanel")
} (peakJihadFreeWar || (peakJihadFreeWar = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/PeakJihadCreateARoomSkin.exml"] = window.PeakJihadCreateARoomSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "Txt_name", "petShow", "creatRoomBtn", "gr_left", "right_bg", "checkRule_0", "checkRule_1", "checkRule_2", "checkRule_3", "checkRule_4", "checkRule_5", "checkRule_6", "checkMode_0", "checkMode_1", "checkMath_0", "checkMath_1", "gr_right"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.gr_left_i(), this.gr_right_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 23,
            e.source = "PeakJihadCreateARoomPanel_check_down1_png",
            e.verticalCenter = 0,
            e.width = 23,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 40,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 195,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 23,
            e.source = "PeakJihadCreateARoomPanel_check_down1_png",
            e.verticalCenter = 0,
            e.width = 23,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 40,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 195,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 23,
            e.source = "PeakJihadCreateARoomPanel_check_down1_png",
            e.verticalCenter = 0,
            e.width = 23,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 40,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 195,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 23,
            e.source = "PeakJihadCreateARoomPanel_check_down1_png",
            e.verticalCenter = 0,
            e.width = 23,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 40,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 195,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 23,
            e.source = "PeakJihadCreateARoomPanel_check_down1_png",
            e.verticalCenter = 0,
            e.width = 23,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 40,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 195,
            e
        },
        t
    } (eui.Skin),
    h = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 23,
            e.source = "PeakJihadCreateARoomPanel_check_down1_png",
            e.verticalCenter = 0,
            e.width = 23,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 40,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 195,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up1_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 23,
            e.source = "PeakJihadCreateARoomPanel_check_down1_png",
            e.verticalCenter = 0,
            e.width = 23,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 40,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 195,
            e
        },
        t
    } (eui.Skin),
    l = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 15,
            e.source = "PeakJihadCreateARoomPanel_check_down_png",
            e.width = 15,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 15,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 114,
            e
        },
        t
    } (eui.Skin),
    c = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 15,
            e.source = "PeakJihadCreateARoomPanel_check_down_png",
            e.width = 15,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 15,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 114,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 15,
            e.source = "PeakJihadCreateARoomPanel_check_down_png",
            e.width = 15,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 15,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 114,
            e
        },
        i.labelDisplay_i = function() {
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
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadCreateARoomPanel_check_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 15,
            e.source = "PeakJihadCreateARoomPanel_check_down_png",
            e.width = 15,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.alpha = 0,
            e.height = 15,
            e.source = "peakjihadroompanel_dibu_png",
            e.width = 114,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    d = t.prototype;
    return d.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.scale9Grid = new egret.Rectangle(101, 70, 930, 547),
        e.source = "peakjihad_common_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    d.gr_left_i = function() {
        var e = new eui.Group;
        return this.gr_left = e,
        e.height = 466,
        e.horizontalCenter = -205.5,
        e.width = 447,
        e.y = 125,
        e.elementsContent = [this._Image1_i(), this.Txt_name_i(), this.petShow_i(), this.creatRoomBtn_i()],
        e
    },
    d._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadcreatearoompanel_leftbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    d.Txt_name_i = function() {
        var e = new eui.Label;
        return this.Txt_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -124.5,
        e.size = 20,
        e.text = "玩家名字玩家",
        e.textColor = 16514896,
        e.y = 326,
        e
    },
    d.petShow_i = function() {
        var e = new eui.Group;
        return this.petShow = e,
        e.bottom = 166,
        e.x = 206,
        e
    },
    d.creatRoomBtn_i = function() {
        var e = new eui.Image;
        return this.creatRoomBtn = e,
        e.source = "PeakJihadCreateARoomPanel_creatRoomBtn_png",
        e.x = 141,
        e.y = 420,
        e
    },
    d.gr_right_i = function() {
        var e = new eui.Group;
        return this.gr_right = e,
        e.height = 526,
        e.horizontalCenter = 272.5,
        e.width = 551,
        e.y = 61,
        e.elementsContent = [this.right_bg_i(), this.checkRule_0_i(), this.checkRule_1_i(), this.checkRule_2_i(), this.checkRule_3_i(), this.checkRule_4_i(), this.checkRule_5_i(), this.checkRule_6_i(), this.checkMode_0_i(), this.checkMode_1_i(), this.checkMath_0_i(), this.checkMath_1_i()],
        e
    },
    d.right_bg_i = function() {
        var e = new eui.Image;
        return this.right_bg = e,
        e.height = 526,
        e.source = "peakjihadcreatearoompanel_right_bg1_png",
        e.touchEnabled = !1,
        e.width = 551,
        e.x = 0,
        e.y = 0,
        e
    },
    d.checkRule_0_i = function() {
        var e = new eui.CheckBox;
        return this.checkRule_0 = e,
        e.height = 40,
        e.label = "",
        e.name = "checkRule_0",
        e.width = 195,
        e.x = 37,
        e.y = 47.258,
        e.skinName = i,
        e
    },
    d.checkRule_1_i = function() {
        var e = new eui.CheckBox;
        return this.checkRule_1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 40,
        e.label = "",
        e.name = "checkRule_1",
        e.width = 195,
        e.x = 315,
        e.y = 45,
        e.skinName = n,
        e
    },
    d.checkRule_2_i = function() {
        var e = new eui.CheckBox;
        return this.checkRule_2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 40,
        e.label = "",
        e.name = "checkRule_2",
        e.width = 195,
        e.x = 37,
        e.y = 161,
        e.skinName = a,
        e
    },
    d.checkRule_3_i = function() {
        var e = new eui.CheckBox;
        return this.checkRule_3 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 40,
        e.label = "",
        e.name = "checkRule_3",
        e.width = 195,
        e.x = 315,
        e.y = 161,
        e.skinName = r,
        e
    },
    d.checkRule_4_i = function() {
        var e = new eui.CheckBox;
        return this.checkRule_4 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 40,
        e.label = "",
        e.name = "checkRule_4",
        e.width = 195,
        e.x = 37,
        e.y = 103,
        e.skinName = o,
        e
    },
    d.checkRule_5_i = function() {
        var e = new eui.CheckBox;
        return this.checkRule_5 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 40,
        e.label = "",
        e.name = "checkRule_5",
        e.width = 195,
        e.x = 315,
        e.y = 103,
        e.skinName = h,
        e
    },
    d.checkRule_6_i = function() {
        var e = new eui.CheckBox;
        return this.checkRule_6 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 40,
        e.label = "",
        e.name = "checkRule_6",
        e.width = 195,
        e.x = 37,
        e.y = 218,
        e.skinName = s,
        e
    },
    d.checkMode_0_i = function() {
        var e = new eui.CheckBox;
        return this.checkMode_0 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.label = "",
        e.name = "checkMode_0",
        e.x = 43,
        e.y = 364,
        e.skinName = l,
        e
    },
    d.checkMode_1_i = function() {
        var e = new eui.CheckBox;
        return this.checkMode_1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.label = "",
        e.name = "checkMode_1",
        e.width = 114,
        e.x = 43,
        e.y = 427,
        e.skinName = c,
        e
    },
    d.checkMath_0_i = function() {
        var e = new eui.CheckBox;
        return this.checkMath_0 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.label = "",
        e.name = "checkMath_0",
        e.width = 114,
        e.x = 322,
        e.y = 364,
        e.skinName = u,
        e
    },
    d.checkMath_1_i = function() {
        var e = new eui.CheckBox;
        return this.checkMath_1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 15,
        e.label = "",
        e.name = "checkMath_1",
        e.width = 114,
        e.x = 322,
        e.y = 427,
        e.skinName = _,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadroompanelSkin.exml"] = window.PeakjihadroompanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "timeTx", "title_tiaofangzhu", "settingTeamBtn_0", "clothPos_0", "homeownersNameTx", "gr_left", "select", "checkMode_0", "checkMode_1", "checkRlue_0", "checkRlue_1", "checkRlue_4", "checkRlue_5", "checkRlue_6", "checkRlue_2", "checkRlue_3", "sysTx", "sysPg", "chatBg", "chatBtn", "readTx", "homeIdTx", "ima_1", "challengerNameTx", "clothPos_1", "settingTeamBtn_1", "kickedChallengerBtn", "readyPng", "readyBtn", "startBtn", "gr_right"],
        this.height = 640,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Group1_i(), this.gr_left_i(), this._Group2_i(), this.sysTx_i(), this.sysPg_i(), this.chatBg_i(), this.chatBtn_i(), this.readTx_i(), this._Group3_i(), this.gr_right_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadRoomPanel_checkUp_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "PeakJihadRoomPanel_checkDown_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadRoomPanel_checkUp_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "PeakJihadRoomPanel_checkDown_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadRoomPanel_checkUp_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "PeakJihadRoomPanel_checkDown_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadRoomPanel_checkUp_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "PeakJihadRoomPanel_checkDown_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadRoomPanel_checkUp_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "PeakJihadRoomPanel_checkDown_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadRoomPanel_checkUp_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "PeakJihadRoomPanel_checkDown_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadRoomPanel_checkUp_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "PeakJihadRoomPanel_checkDown_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadRoomPanel_checkUp_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "PeakJihadRoomPanel_checkDown_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "PeakJihadRoomPanel_checkUp_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "PeakJihadRoomPanel_checkDown_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    u = t.prototype;
    return u.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peakjihadroompanel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    u._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.height = 162,
        e.horizontalCenter = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(1, 1, 10, 10),
        e.source = "peakjihadroompanel_dibu_png",
        e.width = 1256,
        e
    },
    u._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 11,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.timeTx_i()],
        e
    },
    u._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 601,
        e.source = "peakjihadroompanel_img2_png",
        e.width = 108,
        e.x = 61,
        e.y = 0,
        e
    },
    u._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "peakJihadFreeWar_arrow_png",
        e.x = 0,
        e.y = 75,
        e
    },
    u._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadroompanel_numbg_png",
        e.x = 44,
        e.y = 224,
        e
    },
    u.timeTx_i = function() {
        var e = new eui.Label;
        return this.timeTx = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -.5,
        e.size = 48,
        e.text = "22",
        e.textColor = 16777215,
        e.y = 280,
        e
    },
    u.gr_left_i = function() {
        var e = new eui.Group;
        return this.gr_left = e,
        e.horizontalCenter = -322.5,
        e.visible = !0,
        e.y = 85,
        e.elementsContent = [this.title_tiaofangzhu_i(), this.settingTeamBtn_0_i(), this._Image5_i(), this.clothPos_0_i(), this.homeownersNameTx_i()],
        e
    },
    u.title_tiaofangzhu_i = function() {
        var e = new eui.Image;
        return this.title_tiaofangzhu = e,
        e.source = "peakJihadFreeWar_title_tiaofangzhu_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.settingTeamBtn_0_i = function() {
        var e = new eui.Image;
        return this.settingTeamBtn_0 = e,
        e.name = "settingTeamBtn_0",
        e.source = "PeakJihadRoomPanel_settingTeamBtn_0_png",
        e.x = 102,
        e.y = 335,
        e
    },
    u._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihadroompanel_ima_2_png",
        e.x = 37.118,
        e.y = 3,
        e
    },
    u.clothPos_0_i = function() {
        var e = new eui.Group;
        return this.clothPos_0 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.width = 0,
        e.x = 160.08,
        e.y = 330,
        e
    },
    u.homeownersNameTx_i = function() {
        var e = new eui.Label;
        return this.homeownersNameTx = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 10.5,
        e.size = 20,
        e.text = "用户名用户名",
        e.textColor = 16514896,
        e.y = 25,
        e
    },
    u._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -79.5,
        e.visible = !0,
        e.y = 505,
        e.elementsContent = [this.select_i(), this.checkMode_0_i(), this.checkMode_1_i(), this.checkRlue_0_i(), this.checkRlue_1_i(), this.checkRlue_4_i(), this.checkRlue_5_i(), this.checkRlue_6_i(), this.checkRlue_2_i(), this.checkRlue_3_i()],
        e
    },
    u.select_i = function() {
        var e = new eui.Image;
        return this.select = e,
        e.source = "peakjihadroompanel_select_png",
        e.x = 20,
        e.y = 0,
        e
    },
    u.checkMode_0_i = function() {
        var e = new eui.CheckBox;
        return this.checkMode_0 = e,
        e.label = "",
        e.rotation = 358.33,
        e.x = 0,
        e.y = 3,
        e.skinName = i,
        e
    },
    u.checkMode_1_i = function() {
        var e = new eui.CheckBox;
        return this.checkMode_1 = e,
        e.label = "",
        e.rotation = 358.33,
        e.x = 0,
        e.y = 39,
        e.skinName = n,
        e
    },
    u.checkRlue_0_i = function() {
        var e = new eui.CheckBox;
        return this.checkRlue_0 = e,
        e.label = "",
        e.rotation = 358.33,
        e.x = 0,
        e.y = 75,
        e.skinName = a,
        e
    },
    u.checkRlue_1_i = function() {
        var e = new eui.CheckBox;
        return this.checkRlue_1 = e,
        e.label = "",
        e.rotation = 358.33,
        e.x = 296,
        e.y = 3,
        e.skinName = r,
        e
    },
    u.checkRlue_4_i = function() {
        var e = new eui.CheckBox;
        return this.checkRlue_4 = e,
        e.label = "",
        e.rotation = 358.33,
        e.x = 632,
        e.y = 3,
        e.skinName = o,
        e
    },
    u.checkRlue_5_i = function() {
        var e = new eui.CheckBox;
        return this.checkRlue_5 = e,
        e.label = "",
        e.rotation = 358.33,
        e.x = 632,
        e.y = 39,
        e.skinName = h,
        e
    },
    u.checkRlue_6_i = function() {
        var e = new eui.CheckBox;
        return this.checkRlue_6 = e,
        e.label = "",
        e.rotation = 358.33,
        e.x = 632,
        e.y = 75,
        e.skinName = s,
        e
    },
    u.checkRlue_2_i = function() {
        var e = new eui.CheckBox;
        return this.checkRlue_2 = e,
        e.label = "",
        e.rotation = 358.33,
        e.x = 296,
        e.y = 39,
        e.skinName = l,
        e
    },
    u.checkRlue_3_i = function() {
        var e = new eui.CheckBox;
        return this.checkRlue_3 = e,
        e.label = "",
        e.rotation = 358.33,
        e.x = 296,
        e.y = 75,
        e.skinName = c,
        e
    },
    u.sysTx_i = function() {
        var e = new eui.Label;
        return this.sysTx = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "系统公告：这里是系统公告公告公告公告公告",
        e.textColor = 16777215,
        e.visible = !1,
        e.x = 34,
        e.y = 61,
        e
    },
    u.sysPg_i = function() {
        var e = new eui.Image;
        return this.sysPg = e,
        e.source = "PeakJihadRoomPanel_sysPg_png",
        e.visible = !1,
        e.x = 7,
        e.y = 57,
        e
    },
    u.chatBg_i = function() {
        var e = new eui.Image;
        return this.chatBg = e,
        e.source = "PeakJihadRoomPanel_chatBg_png",
        e.visible = !1,
        e.x = 475,
        e.y = 529,
        e
    },
    u.chatBtn_i = function() {
        var e = new eui.Image;
        return this.chatBtn = e,
        e.source = "PeakJihadRoomPanel_chatBtn_png",
        e.visible = !1,
        e.x = 448,
        e.y = 531,
        e
    },
    u.readTx_i = function() {
        var e = new eui.Label;
        return this.readTx = e,
        e.fontFamily = "黑体",
        e.size = 14,
        e.text = "昵称五个字：开局呀~~！",
        e.textColor = 16777215,
        e.visible = !1,
        e.x = 484,
        e.y = 534,
        e
    },
    u._Group3_i = function() {
        var e = new eui.Group;
        return e.right = 109,
        e.visible = !0,
        e.y = 15,
        e.elementsContent = [this._Image6_i(), this.homeIdTx_i()],
        e
    },
    u._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "PeakJihadRoomPanel_blacktoMainBtn_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.homeIdTx_i = function() {
        var e = new eui.Label;
        return this.homeIdTx = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "房间号：22281917",
        e.textColor = 12834813,
        e.x = 16,
        e.y = 2.86,
        e
    },
    u.gr_right_i = function() {
        var e = new eui.Group;
        return this.gr_right = e,
        e.horizontalCenter = 340,
        e.y = 85,
        e.elementsContent = [this._Image7_i(), this.ima_1_i(), this.challengerNameTx_i(), this.clothPos_1_i(), this.settingTeamBtn_1_i(), this.kickedChallengerBtn_i(), this.readyPng_i(), this.readyBtn_i(), this.startBtn_i()],
        e
    },
    u._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "peakJihadFreeWar_title_tiaofangzhu_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.ima_1_i = function() {
        var e = new eui.Image;
        return this.ima_1 = e,
        e.source = "peakjihadroompanel_ima_1_png",
        e.x = 28.34,
        e.y = 4,
        e
    },
    u.challengerNameTx_i = function() {
        var e = new eui.Label;
        return this.challengerNameTx = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -32,
        e.size = 20,
        e.text = "用户名用户名",
        e.textColor = 16514895,
        e.y = 25,
        e
    },
    u.clothPos_1_i = function() {
        var e = new eui.Group;
        return this.clothPos_1 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.width = 0,
        e.x = 165.73,
        e.y = 330,
        e
    },
    u.settingTeamBtn_1_i = function() {
        var e = new eui.Image;
        return this.settingTeamBtn_1 = e,
        e.name = "settingTeamBtn_1",
        e.source = "PeakJihadRoomPanel_settingTeamBtn_0_png",
        e.x = 102,
        e.y = 335,
        e
    },
    u.kickedChallengerBtn_i = function() {
        var e = new eui.Image;
        return this.kickedChallengerBtn = e,
        e.source = "PeakJihadRoomPanel_kickedChallengerBtn_png",
        e.x = 256.815,
        e.y = 114,
        e
    },
    u.readyPng_i = function() {
        var e = new eui.Image;
        return this.readyPng = e,
        e.source = "PeakJihadRoomPanel_readyPng_png",
        e.x = 181.89,
        e.y = 271.01,
        e
    },
    u.readyBtn_i = function() {
        var e = new eui.Image;
        return this.readyBtn = e,
        e.source = "PeakJihadRoomPanel_readyBtn_png",
        e.visible = !0,
        e.x = 238,
        e.y = 361,
        e
    },
    u.startBtn_i = function() {
        var e = new eui.Image;
        return this.startBtn = e,
        e.source = "PeakJihadRoomPanel_startBtn_png",
        e.x = 238,
        e.y = 361,
        e
    },
    t
} (eui.Skin);