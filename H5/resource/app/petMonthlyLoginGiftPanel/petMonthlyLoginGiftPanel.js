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
petMonthlyLoginGiftPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.mainView = new t.PetMonthlyLoginMainPanel(null),
            PopViewManager.getInstance().openView(i.mainView, i.getPopStyle(), null),
            i.mainView.addEventListener("event_close_panel", i.onCloseAll, i),
            i.mainView.addEventListener("event_improve_panel", i.openImprovePanel, i),
            i
        }
        return __extends(i, e),
        i.prototype.destroy = function() {
            this.mainView && (this.mainView.removeEventListener("event_close_panel", this.onCloseAll, this), this.mainView.removeEventListener("event_improve_panel", this.openImprovePanel, this)),
            this.mainView = null,
            this.improveView && this.improveView.removeEventListener("event_close_panel", this.onCloseAll, this),
            this.improveView = null,
            e.prototype.destroy.call(this)
        },
        i.prototype.getPopStyle = function() {
            var t = PopViewManager.createDefaultStyleObject();
            return t.caller = this.mainView,
            t.maskShapeStyle.maskAlpha = .6,
            t.clickMaskHandler = this.mainView.clickMaskHandler,
            t
        },
        i.prototype.getPopStyle2 = function() {
            var t = PopViewManager.createDefaultStyleObject();
            return t.caller = this.improveView,
            t.maskShapeStyle.maskAlpha = .6,
            t.clickMaskHandler = this.improveView.clickMaskHandler,
            t
        },
        i.prototype.onCloseAll = function() {
            this.mainView && this.mainView.hide(),
            this.improveView && this.improveView.hide(),
            this.onClose()
        },
        i.prototype.openImprovePanel = function() {
            return 0 == PetManager.infos.length ? void BubblerManager.getInstance().showText("请在背包内放入精灵后再进行操作!") : (this.mainView.hide(), this.improveView = new t.PetMonthlyLoginImprovePanel(null), PopViewManager.getInstance().openView(this.improveView, this.getPopStyle2(), null), void this.improveView.addEventListener("event_close_panel", this.onCloseAll, this))
        },
        i
    } (BaseModule);
    t.PetMonthlyLoginGiftPanel = e,
    __reflect(e.prototype, "petMonthlyLoginGiftPanel.PetMonthlyLoginGiftPanel")
} (petMonthlyLoginGiftPanel || (petMonthlyLoginGiftPanel = {}));
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
petMonthlyLoginGiftPanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            i.skinName = "PetMonthlyLoginImprovePanel";
            var n = [1, 1, 1, 1, 1, 2, 3];
            return i.kind = n[i.index],
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            switch (this.title1.visible = !1, this.title2.visible = !1, this.title3.visible = !1, this.titleBg0.visible = !1, this.titleBg1.visible = !1, this.titleBg2.visible = !1, this.btn0.visible = !1, this.btn1.visible = !1, this.label3.visible = !1, this.btnImprove0.visible = !1, this.btnImprove1.visible = !1, this.btnImprove2.visible = !1, this.btnImprove3.visible = !1, this.btnImprove4.visible = !1, this.btnImprove5.visible = !1, this.kind) {
            case 1:
                this.title3.visible = !0,
                this.label3.visible = !0,
                this.btnImprove0.visible = !0,
                this.btnImprove1.visible = !0,
                this.btnImprove2.visible = !0,
                this.btnImprove3.visible = !0,
                this.btnImprove4.visible = !0,
                this.btnImprove5.visible = !0;
                break;
            case 2:
                this.title2.visible = !0,
                this.titleBg1.visible = !0,
                this.btn1.visible = !0;
                break;
            case 3:
                this.title1.visible = !0,
                this.titleBg2.visible = !0,
                this.btn0.visible = !0
            }
            var e = PetManager.infos;
            e.length > 0 ? (this.petInfo = e[0], this.frameHighlight.x = 80, this.showDetailedInfo()) : this.showEmptyInfo();
            for (var i = 0; 6 > i; i++) if (i < e.length) {
                var n = e[i];
                this["petIcon" + i].visible = !0,
                this["petIcon" + i].source = ClientConfig.getPetHeadPath(n.id)
            } else this["petIcon" + i].visible = !1;
            ImageButtonUtil.add(this.petIcon0,
            function() {
                t.petInfo = e[0],
                t.frameHighlight.x = 80,
                t.showDetailedInfo()
            },
            this),
            ImageButtonUtil.add(this.petIcon1,
            function() {
                t.petInfo = e[1],
                t.frameHighlight.x = 180,
                t.showDetailedInfo()
            },
            this),
            ImageButtonUtil.add(this.petIcon2,
            function() {
                t.petInfo = e[2],
                t.frameHighlight.x = 280,
                t.showDetailedInfo()
            },
            this),
            ImageButtonUtil.add(this.petIcon3,
            function() {
                t.petInfo = e[3],
                t.frameHighlight.x = 380,
                t.showDetailedInfo()
            },
            this),
            ImageButtonUtil.add(this.petIcon4,
            function() {
                t.petInfo = e[4],
                t.frameHighlight.x = 480,
                t.showDetailedInfo()
            },
            this),
            ImageButtonUtil.add(this.petIcon5,
            function() {
                t.petInfo = e[5],
                t.frameHighlight.x = 580,
                t.showDetailedInfo()
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.dispatchEventWith("event_close_panel")
            },
            this),
            ImageButtonUtil.add(this.btnPetBag,
            function() {
                t.dispatchEventWith("event_close_panel"),
                ModuleManager.showModuleByID(10)
            },
            this);
            for (var o = ["攻击", "防御", "特攻", "特防", "速度", "体力"], r = function() {
                var e = i;
                ImageButtonUtil.add(a["btnImprove" + e],
                function() {
                    var i = [t.petInfo.ev_attack, t.petInfo.ev_defence, t.petInfo.ev_sa, t.petInfo.ev_sd, t.petInfo.ev_sp, t.petInfo.ev_hp],
                    n = t.petInfo.ev_attack + t.petInfo.ev_defence + t.petInfo.ev_sa + t.petInfo.ev_sd + t.petInfo.ev_sp + t.petInfo.ev_hp,
                    r = i[e] + (t.index < 2 ? 20 : 50);
                    return r = r >= 255 ? 255 : r,
                    i[e] >= 255 || n >= 510 ? void BubblerManager.getInstance().showText("学习力已达到上限，无法提升！") : void Alert.show("是否将<font color='#ffd325'>" + t.petInfo.name + "</font>的" + o[e] + "学习力从" + i[e] + "提升到<font color='#5de75a'>" + r + "</font>？",
                    function() {
                        t.btnImprove0.visible = !1,
                        t.btnImprove1.visible = !1,
                        t.btnImprove2.visible = !1,
                        t.btnImprove3.visible = !1,
                        t.btnImprove4.visible = !1,
                        t.btnImprove5.visible = !1,
                        SocketConnection.sendWithCallback(CommandID.PET_DEV_GET_REWARD,
                        function(i) {
                            PetManager.upDateBagPetInfo(t.petInfo.catchTime,
                            function(i) {
                                t.petInfo = i,
                                t.showDetailedInfo();
                                var n = [t.petInfo.ev_attack, t.petInfo.ev_defence, t.petInfo.ev_sa, t.petInfo.ev_sd, t.petInfo.ev_sp, t.petInfo.ev_hp];
                                BubblerManager.getInstance().showText("<font color='#ffd325'>" + t.petInfo.name + "</font>的" + o[e] + "学习力已提升至<font color='#5de75a'>" + n[e] + "</font>", !0),
                                t.clickMaskHandler()
                            })
                        },
                        [t.index, t.petInfo.catchTime, e + 1])
                    })
                },
                a)
            },
            a = this, i = 0; 5 >= i; i++) r();
            ImageButtonUtil.add(this.btn1,
            function() {
                var e = NatureXMLInfo.getName(t.petInfo.nature),
                i = NatureXMLInfo.getDes2(t.petInfo.nature);
                Alert.show("是否重塑<font color='#ffd325'>" + t.petInfo.name + "</font>的性格？\n现有性格为：<font color='#5de75a'>" + e + "（" + i + "）</font>",
                function() {
                    t.btn1.visible = !1,
                    SocketConnection.sendWithCallback(CommandID.PET_DEV_GET_REWARD,
                    function(n) {
                        PetManager.upDateBagPetInfo(t.petInfo.catchTime,
                        function(n) {
                            t.petInfo = n,
                            t.showDetailedInfo(),
                            e = NatureXMLInfo.getName(t.petInfo.nature),
                            i = NatureXMLInfo.getDes2(t.petInfo.nature),
                            BubblerManager.getInstance().showText("<font color='#ffd325'>" + t.petInfo.name + "</font>的性格重塑为<font color='#5de75a'>" + e + "（" + i + "）</font>", !0),
                            t.clickMaskHandler()
                        })
                    },
                    [t.index, t.petInfo.catchTime, 0])
                })
            },
            this),
            ImageButtonUtil.add(this.btn0,
            function() {
                return t.petInfo.dv >= 31 ? void BubblerManager.getInstance().showText("天赋已达到上限，无法提升！") : void Alert.show("是否提升<font color='#ffd325'>" + t.petInfo.name + "</font>的天赋？",
                function() {
                    t.btn0.visible = !1,
                    SocketConnection.sendWithCallback(CommandID.PET_DEV_GET_REWARD,
                    function(e) {
                        PetManager.upDateBagPetInfo(t.petInfo.catchTime,
                        function(e) {
                            t.petInfo = e,
                            t.showDetailedInfo(),
                            BubblerManager.getInstance().showText("<font color='#ffd325'>" + t.petInfo.name + "</font>的天赋已提升至<font color='#5de75a'>" + t.petInfo.dv + "</font>", !0),
                            t.clickMaskHandler()
                        })
                    },
                    [t.index, t.petInfo.catchTime, 0])
                })
            },
            this)
        },
        e.prototype.showDetailedInfo = function() {
            this.txtLevel.text = "等级：" + this.petInfo.level + "/100";
            var t = NatureXMLInfo.getName(this.petInfo.nature),
            e = NatureXMLInfo.getDes2(this.petInfo.nature);
            this.txtNature.text = "性格：" + t + "（" + e + "）",
            this.txtAbility.text = "天赋：" + this.petInfo.dv + "/31",
            this.txtValue0.text = "" + this.petInfo.attack,
            this.txtLearn0.text = "" + this.petInfo.ev_attack,
            this.txtValue1.text = "" + this.petInfo.defence,
            this.txtLearn1.text = "" + this.petInfo.ev_defence,
            this.txtValue2.text = "" + this.petInfo.s_a,
            this.txtLearn2.text = "" + this.petInfo.ev_sa,
            this.txtValue3.text = "" + this.petInfo.s_d,
            this.txtLearn3.text = "" + this.petInfo.ev_sd,
            this.txtValue4.text = "" + this.petInfo.speed,
            this.txtLearn4.text = "" + this.petInfo.ev_sp,
            this.txtValue5.text = "" + this.petInfo.hp,
            this.txtLearn5.text = "" + this.petInfo.ev_hp;
            var i = this.petInfo.ev_attack + this.petInfo.ev_defence + this.petInfo.ev_sa + this.petInfo.ev_sd + this.petInfo.ev_sp + this.petInfo.ev_hp;
            this.txtCurLearn.text = i + "/510"
        },
        e.prototype.showEmptyInfo = function() {
            this.title1.visible = !1,
            this.title2.visible = !1,
            this.title3.visible = !1,
            this.titleBg0.visible = !1,
            this.titleBg1.visible = !1,
            this.titleBg2.visible = !1,
            this.btn0.visible = !1,
            this.btn1.visible = !1,
            this.label3.visible = !1,
            this.btnImprove0.visible = !1,
            this.btnImprove1.visible = !1,
            this.btnImprove2.visible = !1,
            this.btnImprove3.visible = !1,
            this.btnImprove4.visible = !1,
            this.btnImprove5.visible = !1,
            this.txtLevel.text = "等级：*",
            this.txtNature.text = "性格：*",
            this.txtAbility.text = "天赋：*",
            this.txtValue0.text = "*",
            this.txtLearn0.text = "*",
            this.txtValue1.text = "*",
            this.txtLearn1.text = "*",
            this.txtValue2.text = "*",
            this.txtLearn2.text = "*",
            this.txtValue3.text = "*",
            this.txtLearn3.text = "*",
            this.txtValue4.text = "*",
            this.txtLearn4.text = "*",
            this.txtValue5.text = "*",
            this.txtLearn5.text = "*",
            this.txtCurLearn.text = "*/510"
        },
        e.prototype.clickMaskHandler = function() {
            this.dispatchEventWith("event_close_panel")
        },
        Object.defineProperty(e.prototype, "index", {
            get: function() {
                var t = MainManager.actorInfo.monthLoginDay;
                return t > 0 && 3 > t ? 0 : 5 > t ? 1 : 7 > t ? 2 : 9 > t ? 3 : 12 > t ? 4 : 15 > t ? 5 : 6
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    } (PopView);
    t.PetMonthlyLoginImprovePanel = e,
    __reflect(e.prototype, "petMonthlyLoginGiftPanel.PetMonthlyLoginImprovePanel")
} (petMonthlyLoginGiftPanel || (petMonthlyLoginGiftPanel = {}));
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
petMonthlyLoginGiftPanel; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "PetMonthlyLoginMainPanel",
            i.num = MainManager.actorInfo.monthLoginDay,
            i.tFun = i.onTimer.bind(i),
            i.awakeFunc = function() {
                SystemTimerManager.removeTickFun(i.tFun),
                i.init()
            },
            i
        }
        return __extends(e, t),
        e.prototype.hideAllBtnState = function() {
            this.btn0.visible = !1,
            this.btn1.visible = !1,
            this.btn2.visible = !1,
            this.btn3.visible = !1,
            this.btn4.visible = !1,
            this.signWait.visible = !1,
            this.hasGot.visible = !1
        },
        e.prototype.childrenCreated = function() {
            var t = this;
            this.changeTaskTextColor(),
            this.txtSumDay.text = this.num + "天",
            this.barProgress.width = this.calBarLength(),
            this.highlight.y = 81 + 46 * this.index,
            ImageButtonUtil.add(this.btnClose, this.clickMaskHandler, this),
            ImageButtonUtil.add(this.btn0,
            function() {
                SocketConnection.sendWithCallback(CommandID.PET_DEV_START_TASK,
                function(e) {
                    t.onStartTask(e),
                    t.btn0.visible = !1
                },
                t.index)
            },
            this),
            ImageButtonUtil.add(this.btn4,
            function() {
                BubblerManager.getInstance().showText("背包内精灵已提升" + (t.index < 3 ? 10 : 30) + "级！"),
                t.hideAllBtnState(),
                t.hasGot.visible = !0,
                SocketConnection.send(CommandID.PET_DEV_GET_REWARD, t.index, 0, 0)
            },
            this),
            ImageButtonUtil.add(this.btn1,
            function() {
                t.dispatchEventWith("event_improve_panel")
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                t.dispatchEventWith("event_improve_panel")
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                t.dispatchEventWith("event_improve_panel")
            },
            this),
            this.init(),
            EventManager.addEventListener(LifeCycleManager.LIFE_CYCLE_RESUME, this.awakeFunc, this)
        },
        e.prototype.init = function() {
            var t = this;
            SocketConnection.sendWithCallback(CommandID.PET_DEV_GET_INFO,
            function(e) {
                t.onGetInfo(e)
            })
        },
        e.prototype.onGetInfo = function(t) {
            var e = t.data;
            if (e.readUnsignedInt(), this.flag = e.readUnsignedInt(), 1 == this.flag) if (this.leftTime = e.readUnsignedInt(), this.leftTime > 0) this.hideAllBtnState(),
            this.signWait.visible = !0,
            SystemTimerManager.addTickFun(this.tFun);
            else {
                var i = [0, 1, 4, 1, 4, 2, 3];
                this.hideAllBtnState(),
                this["btn" + i[this.index]].visible = !0
            } else 2 == this.flag ? (this.hideAllBtnState(), this.hasGot.visible = !0) : 0 == this.flag && (this.hideAllBtnState(), this.btn0.visible = !0)
        },
        e.prototype.onStartTask = function(t) {
            var e = t.data;
            if (e.readUnsignedInt(), this.flag = e.readUnsignedInt(), 1 == this.flag && (this.leftTime = e.readUnsignedInt(), this.leftTime > 0 && (this.hideAllBtnState(), this.signWait.visible = !0, SystemTimerManager.addTickFun(this.tFun))), this.num > 0 && this.num < 3) SocketConnection.send(CommandID.PET_DEV_GET_REWARD, this.index, 0, 0),
            BubblerManager.getInstance().showText("背包内精灵已提升1级！"),
            this.hideAllBtnState(),
            this.hasGot.visible = !0;
            else {
                var i = [0, 5, 10, 10, 10, 30, 30];
                BubblerManager.getInstance().showText("请等待<font color='#FFD700'>" + i[this.index] + "</font>分钟即可领取奖励", !0)
            }
        },
        e.prototype.onTimer = function() {
            if (this.leftTime <= 0) {
                var t = [0, 1, 4, 1, 4, 2, 3];
                return this.hideAllBtnState(),
                this["btn" + t[this.index]].visible = !0,
                void SystemTimerManager.removeTickFun(this.tFun)
            }
            this.showTime(this.leftTime--)
        },
        e.prototype.showTime = function(t) {
            var e = Math.floor(t / 60),
            i = Math.floor(t % 60),
            n = 10 > e ? "0" + e: "" + e,
            o = 10 > i ? "0" + i: "" + i;
            this.txtCD.text = n + ":" + o
        },
        e.prototype.changeTaskTextColor = function() {
            for (var t = 0; 6 >= t; t++) {
                var e = this["txtSumTitle" + t].text,
                i = e.match(/\d+/)[0];
                this["txtSumTitle" + t].textFlow = [{
                    text: "累计",
                    style: {
                        textColor: 14811135
                    }
                },
                {
                    text: i,
                    style: {
                        textColor: 16711680
                    }
                },
                {
                    text: "天",
                    style: {
                        textColor: 14811135
                    }
                }],
                e = this["txtDesc" + t].text;
                var n = e.match(/（(.+?)）/),
                o = "";
                null != n && (o = n[0], e = e.replace(o, " ")),
                this["txtDesc" + t].textFlow = [{
                    text: e,
                    style: {
                        textColor: 14811135
                    }
                },
                {
                    text: o,
                    style: {
                        textColor: 16766720
                    }
                }]
            }
        },
        e.prototype.calBarLength = function() {
            return this.num >= 15 ? 300 : this.num <= 1 ? 11 : this.num <= 9 ? 11 + 23.2 * (this.num - 1) : 197 + 15.7 * (this.num - 9)
        },
        e.prototype.clickMaskHandler = function() {
            SystemTimerManager.removeTickFun(this.tFun),
            this.dispatchEventWith("event_close_panel"),
            EventManager.removeEventListener(LifeCycleManager.LIFE_CYCLE_RESUME, this.awakeFunc, this)
        },
        Object.defineProperty(e.prototype, "index", {
            get: function() {
                return this.num > 0 && this.num < 3 ? 0 : this.num < 5 ? 1 : this.num < 7 ? 2 : this.num < 9 ? 3 : this.num < 12 ? 4 : this.num < 15 ? 5 : 6
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    } (PopView);
    t.PetMonthlyLoginMainPanel = e,
    __reflect(e.prototype, "petMonthlyLoginGiftPanel.PetMonthlyLoginMainPanel")
} (petMonthlyLoginGiftPanel || (petMonthlyLoginGiftPanel = {}));
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
generateEUI.paths["resource/eui_skins/PetMonthlyLoginImprovePanel.exml"] = window.PetMonthlyLoginImprovePanel = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petIcon0", "petIcon1", "petIcon2", "petIcon3", "petIcon4", "petIcon5", "titleBg0", "txtLevel", "titleBg1", "txtNature", "titleBg2", "txtAbility", "txtValue0", "txtLearn0", "btnImprove0", "att", "txtValue1", "txtLearn1", "btnImprove1", "def", "txtValue2", "txtLearn2", "btnImprove2", "sa", "txtValue3", "txtLearn3", "btnImprove3", "sd", "txtValue4", "txtLearn4", "btnImprove4", "sp", "txtValue5", "txtLearn5", "btnImprove5", "hp", "btn0", "btn1", "txtCurLearn", "label3", "btnPetBag", "bg", "btnClose", "frameHighlight", "title3", "title2", "title1"],
        this.height = 431,
        this.width = 754,
        this.elementsContent = [this.bg_i(), this.btnClose_i(), this.frameHighlight_i(), this.title3_i(), this.title2_i(), this.title1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group7_i(), this._Group11_i(), this.btn0_i(), this.btn1_i(), this.label3_i(), this.btnPetBag_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.scale9Grid = new egret.Rectangle(9, 7, 4, 4),
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 754,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 750,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 575,
        t.y = 60,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 25,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 90,
        t.y = 60,
        t.elementsContent = [this._Image3_i(), this.petIcon0_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 75,
        t.scale9Grid = new egret.Rectangle(7, 7, 1, 1),
        t.source = "pet_monthly_login_gift_panel_frameBG_png",
        t.width = 75,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petIcon0_i = function() {
        var t = new eui.Image;
        return this.petIcon0 = t,
        t.maxHeight = 70,
        t.maxWidth = 70,
        t.source = "pet_monthly_login_gift_panel_head_png",
        t.x = 2,
        t.y = 2.675,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 100,
        t.y = 70,
        t.elementsContent = [this._Image4_i(), this.petIcon1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 75,
        t.scale9Grid = new egret.Rectangle(7, 7, 1, 1),
        t.source = "pet_monthly_login_gift_panel_frameBG_png",
        t.width = 75,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petIcon1_i = function() {
        var t = new eui.Image;
        return this.petIcon1 = t,
        t.fillMode = "scale",
        t.maxHeight = 70,
        t.maxWidth = 70,
        t.source = "pet_monthly_login_gift_panel_head_png",
        t.x = 2,
        t.y = 2.531,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 110,
        t.y = 80,
        t.elementsContent = [this._Image5_i(), this.petIcon2_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 75,
        t.scale9Grid = new egret.Rectangle(7, 7, 1, 1),
        t.source = "pet_monthly_login_gift_panel_frameBG_png",
        t.width = 75,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petIcon2_i = function() {
        var t = new eui.Image;
        return this.petIcon2 = t,
        t.maxHeight = 70,
        t.maxWidth = 70,
        t.source = "pet_monthly_login_gift_panel_head_png",
        t.x = 2,
        t.y = 2.531,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 120,
        t.y = 90,
        t.elementsContent = [this._Image6_i(), this.petIcon3_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 75,
        t.scale9Grid = new egret.Rectangle(7, 7, 1, 1),
        t.source = "pet_monthly_login_gift_panel_frameBG_png",
        t.width = 75,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petIcon3_i = function() {
        var t = new eui.Image;
        return this.petIcon3 = t,
        t.maxHeight = 70,
        t.maxWidth = 70,
        t.source = "pet_monthly_login_gift_panel_head_png",
        t.x = 2,
        t.y = 2.531,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 130,
        t.y = 100,
        t.elementsContent = [this._Image7_i(), this.petIcon4_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 75,
        t.scale9Grid = new egret.Rectangle(7, 7, 1, 1),
        t.source = "pet_monthly_login_gift_panel_frameBG_png",
        t.width = 75,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petIcon4_i = function() {
        var t = new eui.Image;
        return this.petIcon4 = t,
        t.maxHeight = 70,
        t.maxWidth = 70,
        t.source = "pet_monthly_login_gift_panel_head_png",
        t.x = 2,
        t.y = 2.531,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.x = 140,
        t.y = 110,
        t.elementsContent = [this._Image8_i(), this.petIcon5_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 75,
        t.scale9Grid = new egret.Rectangle(7, 7, 1, 1),
        t.source = "pet_monthly_login_gift_panel_frameBG_png",
        t.width = 75,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petIcon5_i = function() {
        var t = new eui.Image;
        return this.petIcon5 = t,
        t.maxHeight = 70,
        t.maxWidth = 70,
        t.source = "pet_monthly_login_gift_panel_head_png",
        t.x = 2,
        t.y = 2.531,
        t
    },
    i._Group11_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 61,
        t.y = 155,
        t.elementsContent = [this._Image9_i(), this._Image10_i(), this._Group8_i(), this._Group9_i(), this._Group10_i(), this.att_i(), this.def_i(), this.sa_i(), this.sd_i(), this.sp_i(), this.hp_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 182,
        t.source = "pet_monthly_login_gift_panel_color1_png",
        t.top = 0,
        t.visible = !0,
        t.width = 633,
        t.x = 0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 45,
        t.source = "pet_monthly_login_gift_panel_color2_png",
        t.top = 0,
        t.visible = !0,
        t.width = 633,
        t.x = 0,
        t
    },
    i._Group8_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.titleBg0_i(), this.txtLevel_i()],
        t
    },
    i.titleBg0_i = function() {
        var t = new eui.Image;
        return this.titleBg0 = t,
        t.height = 45,
        t.source = "pet_monthly_login_gift_panel_color3_png",
        t.visible = !0,
        t.width = 160,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "MFShangHei",
        t.height = 33,
        t.horizontalCenter = 0,
        t.size = 17,
        t.text = "等级：100/100",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 156.76,
        t
    },
    i._Group9_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 160,
        t.y = 0,
        t.elementsContent = [this.titleBg1_i(), this.txtNature_i()],
        t
    },
    i.titleBg1_i = function() {
        var t = new eui.Image;
        return this.titleBg1 = t,
        t.height = 45,
        t.source = "pet_monthly_login_gift_panel_color3_png",
        t.visible = !0,
        t.width = 314,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNature_i = function() {
        var t = new eui.Label;
        return this.txtNature = t,
        t.fontFamily = "MFShangHei",
        t.height = 33,
        t.horizontalCenter = -22,
        t.size = 17,
        t.text = "性格：狂妄（特攻+10%，速度-10%）",
        t.textAlign = "center",
        t.verticalAlign = "middle",
        t.verticalCenter = 0,
        t.width = 332.019,
        t
    },
    i._Group10_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 473,
        t.y = 0,
        t.elementsContent = [this.titleBg2_i(), this.txtAbility_i()],
        t
    },
    i.titleBg2_i = function() {
        var t = new eui.Image;
        return this.titleBg2 = t,
        t.height = 45,
        t.source = "pet_monthly_login_gift_panel_color3_png",
        t.visible = !0,
        t.width = 160,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtAbility_i = function() {
        var t = new eui.Label;
        return this.txtAbility = t,
        t.fontFamily = "MFShangHei",
        t.height = 33,
        t.horizontalCenter = 0,
        t.size = 17,
        t.text = "天赋：30/30",
        t.textAlign = "center",
        t.verticalAlign = "middle",
        t.verticalCenter = 0,
        t.width = 163.731,
        t
    },
    i.att_i = function() {
        var t = new eui.Group;
        return this.att = t,
        t.visible = !0,
        t.x = 48,
        t.y = 53,
        t.elementsContent = [this._Image11_i(), this._Label1_i(), this.txtValue0_i(), this._Image12_i(), this.txtLearn0_i(), this.btnImprove0_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_monthly_login_gift_panel_gongji_png",
        t.verticalCenter = 0,
        t.width = 20,
        t.x = -30.121999999999986,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "攻击",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = -.996,
        t
    },
    i.txtValue0_i = function() {
        var t = new eui.Label;
        return this.txtValue0 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "199",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 44.837,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pet_monthly_login_gift_panel_star_png",
        t.verticalCenter = .5,
        t.width = 24,
        t.x = 86.735,
        t
    },
    i.txtLearn0_i = function() {
        var t = new eui.Label;
        return this.txtLearn0 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "255",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 116.714,
        t
    },
    i.btnImprove0_i = function() {
        var t = new eui.Image;
        return this.btnImprove0 = t,
        t.height = 34,
        t.source = "pet_monthly_login_gift_panel_btnImprove_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t.x = 161.068,
        t
    },
    i.def_i = function() {
        var t = new eui.Group;
        return this.def = t,
        t.x = 373,
        t.y = 53,
        t.elementsContent = [this._Image13_i(), this._Label2_i(), this.txtValue1_i(), this._Image14_i(), this.txtLearn1_i(), this.btnImprove1_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.scaleX = 1,
        t.scaleY = 1.1,
        t.source = "pet_monthly_login_gift_panel_fangyu_png",
        t.verticalCenter = 0,
        t.width = 20,
        t.x = -30.121999999999986,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "防御",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = -.996,
        t
    },
    i.txtValue1_i = function() {
        var t = new eui.Label;
        return this.txtValue1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "199",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 44.837,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pet_monthly_login_gift_panel_star_png",
        t.verticalCenter = .5,
        t.width = 24,
        t.x = 86.735,
        t
    },
    i.txtLearn1_i = function() {
        var t = new eui.Label;
        return this.txtLearn1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "255",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 116.714,
        t
    },
    i.btnImprove1_i = function() {
        var t = new eui.Image;
        return this.btnImprove1 = t,
        t.height = 34,
        t.source = "pet_monthly_login_gift_panel_btnImprove_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t.x = 161.068,
        t
    },
    i.sa_i = function() {
        var t = new eui.Group;
        return this.sa = t,
        t.x = 48,
        t.y = 95,
        t.elementsContent = [this._Image15_i(), this._Label3_i(), this.txtValue2_i(), this._Image16_i(), this.txtLearn2_i(), this.btnImprove2_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_monthly_login_gift_panel_tegong_png",
        t.verticalCenter = 0,
        t.width = 20,
        t.x = -30.121999999999986,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "特攻",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = -.996,
        t
    },
    i.txtValue2_i = function() {
        var t = new eui.Label;
        return this.txtValue2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "199",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 44.837,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pet_monthly_login_gift_panel_star_png",
        t.verticalCenter = .5,
        t.width = 24,
        t.x = 86.735,
        t
    },
    i.txtLearn2_i = function() {
        var t = new eui.Label;
        return this.txtLearn2 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "255",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 116.714,
        t
    },
    i.btnImprove2_i = function() {
        var t = new eui.Image;
        return this.btnImprove2 = t,
        t.height = 34,
        t.source = "pet_monthly_login_gift_panel_btnImprove_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t.x = 161.068,
        t
    },
    i.sd_i = function() {
        var t = new eui.Group;
        return this.sd = t,
        t.x = 373,
        t.y = 95,
        t.elementsContent = [this._Image17_i(), this._Label4_i(), this.txtValue3_i(), this._Image18_i(), this.txtLearn3_i(), this.btnImprove3_i()],
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_monthly_login_gift_panel_tefang_png",
        t.verticalCenter = 0,
        t.width = 20,
        t.x = -30.121999999999986,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "特防",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = -.996,
        t
    },
    i.txtValue3_i = function() {
        var t = new eui.Label;
        return this.txtValue3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "199",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 44.837,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pet_monthly_login_gift_panel_star_png",
        t.verticalCenter = .5,
        t.width = 24,
        t.x = 86.735,
        t
    },
    i.txtLearn3_i = function() {
        var t = new eui.Label;
        return this.txtLearn3 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "255",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 116.714,
        t
    },
    i.btnImprove3_i = function() {
        var t = new eui.Image;
        return this.btnImprove3 = t,
        t.height = 34,
        t.source = "pet_monthly_login_gift_panel_btnImprove_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t.x = 161.068,
        t
    },
    i.sp_i = function() {
        var t = new eui.Group;
        return this.sp = t,
        t.x = 48,
        t.y = 137,
        t.elementsContent = [this._Image19_i(), this._Label5_i(), this.txtValue4_i(), this._Image20_i(), this.txtLearn4_i(), this.btnImprove4_i()],
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_monthly_login_gift_panel_sudu_png",
        t.verticalCenter = 0,
        t.width = 20,
        t.x = -30.121999999999986,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "速度",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = -.996,
        t
    },
    i.txtValue4_i = function() {
        var t = new eui.Label;
        return this.txtValue4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "199",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 44.837,
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pet_monthly_login_gift_panel_star_png",
        t.verticalCenter = .5,
        t.width = 24,
        t.x = 86.735,
        t
    },
    i.txtLearn4_i = function() {
        var t = new eui.Label;
        return this.txtLearn4 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "255",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 116.714,
        t
    },
    i.btnImprove4_i = function() {
        var t = new eui.Image;
        return this.btnImprove4 = t,
        t.height = 34,
        t.source = "pet_monthly_login_gift_panel_btnImprove_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t.x = 161.068,
        t
    },
    i.hp_i = function() {
        var t = new eui.Group;
        return this.hp = t,
        t.x = 373,
        t.y = 137,
        t.elementsContent = [this._Image21_i(), this._Label6_i(), this.txtValue5_i(), this._Image22_i(), this.txtLearn5_i(), this.btnImprove5_i()],
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pet_monthly_login_gift_panel_tili_png",
        t.verticalCenter = 0,
        t.width = 20,
        t.x = -30.121999999999986,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "体力",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = -.996,
        t
    },
    i.txtValue5_i = function() {
        var t = new eui.Label;
        return this.txtValue5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "199",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 44.837,
        t
    },
    i._Image22_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pet_monthly_login_gift_panel_star_png",
        t.verticalCenter = .5,
        t.width = 24,
        t.x = 86.735,
        t
    },
    i.txtLearn5_i = function() {
        var t = new eui.Label;
        return this.txtLearn5 = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 18,
        t.text = "255",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.verticalCenter = .5,
        t.width = 70,
        t.x = 116.714,
        t
    },
    i.btnImprove5_i = function() {
        var t = new eui.Image;
        return this.btnImprove5 = t,
        t.height = 34,
        t.source = "pet_monthly_login_gift_panel_btnImprove_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t.x = 161.068,
        t
    },
    i.btn0_i = function() {
        var t = new eui.Group;
        return this.btn0 = t,
        t.visible = !0,
        t.x = 310,
        t.y = 360,
        t.elementsContent = [this._Image23_i(), this._Image24_i()],
        t
    },
    i._Image23_i = function() {
        var t = new eui.Image;
        return t.source = "common_btn_bg_yellow_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image24_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "pet_monthly_login_gift_panel_btn1_png",
        t.width = 78,
        t.x = 28,
        t.y = 16,
        t
    },
    i.btn1_i = function() {
        var t = new eui.Group;
        return this.btn1 = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 360,
        t.elementsContent = [this._Image25_i(), this._Image26_i()],
        t
    },
    i._Image25_i = function() {
        var t = new eui.Image;
        return t.source = "common_btn_bg_yellow_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image26_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "pet_monthly_login_gift_panel_btn2_png",
        t.width = 78,
        t.x = 28,
        t.y = 16,
        t
    },
    i.label3_i = function() {
        var t = new eui.Group;
        return this.label3 = t,
        t.horizontalCenter = 0,
        t.visible = !1,
        t.y = 355.5,
        t.elementsContent = [this._Label7_i(), this.txtCurLearn_i(), this._Label8_i()],
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "当前学习力：",
        t.textColor = 8764649,
        t.verticalAlign = "middle",
        t.width = 119.587,
        t.x = 14.793,
        t.y = 0,
        t
    },
    i.txtCurLearn_i = function() {
        var t = new eui.Label;
        return this.txtCurLearn = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "510/510",
        t.textColor = 4178899,
        t.verticalAlign = "middle",
        t.width = 78.858,
        t.x = 124.891,
        t.y = 0,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 34.954,
        t.horizontalCenter = -11.5,
        t.size = 15,
        t.text = "单项学习力上限255",
        t.textAlign = "center",
        t.textColor = 8233196,
        t.verticalAlign = "middle",
        t.width = 187.94,
        t.y = 20,
        t
    },
    i.btnPetBag_i = function() {
        var t = new eui.Image;
        return this.btnPetBag = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 68,
        t.source = "pet_monthly_login_gift_panel_btnPetBag_png",
        t.visible = !0,
        t.width = 73,
        t.x = 14.028,
        t.y = 346.196,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_pop_btn_close_png",
        t.visible = !0,
        t.x = 714,
        t.y = 0,
        t
    },
    i.frameHighlight_i = function() {
        var t = new eui.Image;
        return this.frameHighlight = t,
        t.anchorOffsetX = 0,
        t.height = 93,
        t.scale9Grid = new egret.Rectangle(21, 22, 4, 2),
        t.source = "pet_monthly_login_gift_panel_frameHighlight_png",
        t.visible = !0,
        t.width = 93,
        t.x = 180,
        t.y = 50,
        t
    },
    i.title3_i = function() {
        var t = new eui.Image;
        return this.title3 = t,
        t.height = 31,
        t.source = "pet_monthly_login_gift_panel_title3_png",
        t.visible = !0,
        t.width = 127,
        t.x = 37,
        t.y = 3,
        t
    },
    i.title2_i = function() {
        var t = new eui.Image;
        return this.title2 = t,
        t.height = 31,
        t.source = "pet_monthly_login_gift_panel_title2_png",
        t.visible = !1,
        t.width = 103,
        t.x = 37,
        t.y = 2,
        t
    },
    i.title1_i = function() {
        var t = new eui.Image;
        return this.title1 = t,
        t.height = 32,
        t.source = "pet_monthly_login_gift_panel_title1_png",
        t.visible = !0,
        t.width = 104,
        t.x = 37,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetMonthlyLoginMainPanel.exml"] = window.PetMonthlyLoginMainPanel = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "lineHighlight", "pointHighlight", "highlight", "txtSumDay", "btnClose", "btnWait", "btn0", "btnGot1", "btn1", "btnGot2", "btn2", "btnGot3", "btn3", "btnGot4", "btn4", "txtCD", "txtCDWord", "signWait", "hasGot", "barProgress", "txtSumTitle0", "txtDesc0", "txtSumTitle1", "txtDesc1", "txtSumTitle2", "txtDesc2", "txtSumTitle3", "txtDesc3", "txtSumTitle4", "txtDesc4", "txtSumTitle5", "txtDesc5", "txtSumTitle6", "txtDesc6"],
        this.height = 431,
        this.width = 754,
        this.elementsContent = [this.bg_i(), this.highlight_i(), this.txtSumDay_i(), this.btnClose_i(), this.btn0_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btn4_i(), this.signWait_i(), this.hasGot_i(), this._Group1_i(), this._Group9_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Label1_i(), this._Label2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.scale9Grid = new egret.Rectangle(9, 7, 4, 4),
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 754,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 750,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 31,
        t.source = "pet_monthly_login_gift_panel_jlxxjh_png",
        t.visible = !0,
        t.width = 152,
        t.x = 36,
        t.y = 2,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 325,
        t.source = "pet_monthly_login_gift_panel_contentbg_kb_png",
        t.visible = !0,
        t.width = 378,
        t.x = 151,
        t.y = 83,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "pet_monthly_login_gift_panel_juxing_901_png",
        t.visible = !0,
        t.width = 407,
        t.x = 195,
        t.y = 44,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 27,
        t.size = 18,
        t.text = "本月登录天数：",
        t.textAlign = "left",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.x = 278.579,
        t.y = 46,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.height = 100.393,
        t.scrollV = 1,
        t.size = 18,
        t.text = "每月累积登录达到一定天数即可领取对应奖励；\n每个奖励每月可领取1次",
        t.textAlign = "left",
        t.textColor = 8696819,
        t.verticalAlign = "middle",
        t.width = 206.67,
        t.x = 540.33,
        t.y = 185.061,
        t
    },
    i.highlight_i = function() {
        var t = new eui.Group;
        return this.highlight = t,
        t.x = 127,
        t.y = 81,
        t.elementsContent = [this.lineHighlight_i(), this.pointHighlight_i()],
        t
    },
    i.lineHighlight_i = function() {
        var t = new eui.Image;
        return this.lineHighlight = t,
        t.height = 49,
        t.source = "pet_monthly_login_gift_panel_lineHighlight_png",
        t.visible = !0,
        t.width = 382,
        t.x = 21,
        t.y = 0,
        t
    },
    i.pointHighlight_i = function() {
        var t = new eui.Image;
        return this.pointHighlight = t,
        t.height = 13,
        t.scaleY = 1.2,
        t.source = "pet_monthly_login_gift_panel_pointHighlight_png",
        t.visible = !0,
        t.width = 9,
        t.x = 1.736,
        t.y = 18.132,
        t
    },
    i.txtSumDay_i = function() {
        var t = new eui.Label;
        return this.txtSumDay = t,
        t.fontFamily = "MFShangHei",
        t.height = 27,
        t.size = 18,
        t.text = "99天",
        t.textAlign = "left",
        t.textColor = 5161956,
        t.verticalAlign = "middle",
        t.width = 157,
        t.x = 412,
        t.y = 47,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_pop_btn_close_png",
        t.visible = !0,
        t.x = 714,
        t.y = 0,
        t
    },
    i.btn0_i = function() {
        var t = new eui.Group;
        return this.btn0 = t,
        t.visible = !0,
        t.x = 571,
        t.y = 362,
        t.elementsContent = [this._Image6_i(), this.btnWait_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "common_btn_bg_yellow_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnWait_i = function() {
        var t = new eui.Image;
        return this.btnWait = t,
        t.height = 18,
        t.horizontalCenter = 0,
        t.source = "pet_monthly_login_gift_panel_btnWait_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t
    },
    i.btn1_i = function() {
        var t = new eui.Group;
        return this.btn1 = t,
        t.visible = !0,
        t.x = 571,
        t.y = 362,
        t.elementsContent = [this._Image7_i(), this.btnGot1_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "common_btn_bg_blue_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGot1_i = function() {
        var t = new eui.Image;
        return this.btnGot1 = t,
        t.height = 18,
        t.horizontalCenter = 0,
        t.source = "pet_monthly_login_gift_panel_btnGot1_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 90,
        t
    },
    i.btn2_i = function() {
        var t = new eui.Group;
        return this.btn2 = t,
        t.visible = !0,
        t.x = 571,
        t.y = 362,
        t.elementsContent = [this._Image8_i(), this.btnGot2_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "common_btn_bg_blue_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGot2_i = function() {
        var t = new eui.Image;
        return this.btnGot2 = t,
        t.height = 18,
        t.horizontalCenter = 0,
        t.source = "pet_monthly_login_gift_panel_btnGot2_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t
    },
    i.btn3_i = function() {
        var t = new eui.Group;
        return this.btn3 = t,
        t.visible = !0,
        t.x = 571,
        t.y = 362,
        t.elementsContent = [this._Image9_i(), this.btnGot3_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "common_btn_bg_blue_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGot3_i = function() {
        var t = new eui.Image;
        return this.btnGot3 = t,
        t.height = 18,
        t.horizontalCenter = 0,
        t.source = "pet_monthly_login_gift_panel_btnGot3_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t
    },
    i.btn4_i = function() {
        var t = new eui.Group;
        return this.btn4 = t,
        t.visible = !0,
        t.x = 571,
        t.y = 362,
        t.elementsContent = [this._Image10_i(), this.btnGot4_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "common_btn_bg_blue_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGot4_i = function() {
        var t = new eui.Image;
        return this.btnGot4 = t,
        t.height = 18,
        t.horizontalCenter = 0,
        t.source = "pet_monthly_login_gift_panel_btnGot4_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 86,
        t
    },
    i.signWait_i = function() {
        var t = new eui.Group;
        return this.signWait = t,
        t.visible = !0,
        t.x = 572.694,
        t.y = 369.38,
        t.elementsContent = [this.txtCD_i(), this.txtCDWord_i()],
        t
    },
    i.txtCD_i = function() {
        var t = new eui.Label;
        return this.txtCD = t,
        t.fontFamily = "MFShangHei",
        t.height = 27,
        t.size = 18,
        t.textAlign = "left",
        t.textColor = 5161956,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.width = 157,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtCDWord_i = function() {
        var t = new eui.Label;
        return this.txtCDWord = t,
        t.fontFamily = "MFShangHei",
        t.height = 27,
        t.size = 18,
        t.text = "后可领取",
        t.textAlign = "left",
        t.textColor = 5161956,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 58.878,
        t
    },
    i.hasGot_i = function() {
        var t = new eui.Group;
        return this.hasGot = t,
        t.visible = !0,
        t.x = 572.07,
        t.y = 360.85,
        t.elementsContent = [this._Image11_i(), this._Image12_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 45.343,
        t.scale9Grid = new egret.Rectangle(1, 1, 1, 1),
        t.source = "pet_monthly_login_gift_panel_color1_png",
        t.width = 133.889,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "pet_monthly_login_gift_panel_hasGot_png",
        t.x = 29.26,
        t.y = 9.69,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 130.172,
        t.y = 68,
        t.elementsContent = [this._Image13_i(), this.barProgress_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 16,
        t.rotation = 90,
        t.source = "pet_monthly_login_gift_panel_barProgressBG_png",
        t.visible = !0,
        t.width = 348,
        t.x = 0,
        t.y = 0,
        t
    },
    i.barProgress_i = function() {
        var t = new eui.Image;
        return this.barProgress = t,
        t.fillMode = "clip",
        t.height = 14,
        t.rotation = 90,
        t.scaleY = 1,
        t.source = "pet_monthly_login_gift_panel_barProgress_png",
        t.visible = !0,
        t.width = 266,
        t.x = -1,
        t.y = 31.38,
        t
    },
    i._Group9_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 36,
        t.y = 98,
        t.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.txtSumTitle0_i(), this.txtDesc0_i()],
        t
    },
    i.txtSumTitle0_i = function() {
        var t = new eui.Label;
        return this.txtSumTitle0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "累登1天",
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i.txtDesc0_i = function() {
        var t = new eui.Label;
        return this.txtDesc0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "背包内精灵全体提升1级",
        t.verticalCenter = 0,
        t.x = 131.228,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 46,
        t.elementsContent = [this.txtSumTitle1_i(), this.txtDesc1_i()],
        t
    },
    i.txtSumTitle1_i = function() {
        var t = new eui.Label;
        return this.txtSumTitle1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "累登3天",
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i.txtDesc1_i = function() {
        var t = new eui.Label;
        return this.txtDesc1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "选择一只精灵单属性增加20点学习力（5分钟）",
        t.verticalCenter = 0,
        t.x = 131.228,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 92,
        t.elementsContent = [this.txtSumTitle2_i(), this.txtDesc2_i()],
        t
    },
    i.txtSumTitle2_i = function() {
        var t = new eui.Label;
        return this.txtSumTitle2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "累登5天",
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i.txtDesc2_i = function() {
        var t = new eui.Label;
        return this.txtDesc2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "背包内精灵全体提升10级（5分钟）",
        t.verticalCenter = 0,
        t.x = 131.228,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 139,
        t.elementsContent = [this.txtSumTitle3_i(), this.txtDesc3_i()],
        t
    },
    i.txtSumTitle3_i = function() {
        var t = new eui.Label;
        return this.txtSumTitle3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "累登7天",
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i.txtDesc3_i = function() {
        var t = new eui.Label;
        return this.txtDesc3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "选择一只精灵单属性增加50点学习力（10分钟）",
        t.verticalCenter = 0,
        t.x = 131.228,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 186,
        t.elementsContent = [this.txtSumTitle4_i(), this.txtDesc4_i()],
        t
    },
    i.txtSumTitle4_i = function() {
        var t = new eui.Label;
        return this.txtSumTitle4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "累登9天",
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i.txtDesc4_i = function() {
        var t = new eui.Label;
        return this.txtDesc4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "背包内精灵全体提升30级（10分钟）",
        t.verticalCenter = 0,
        t.x = 131.228,
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 233,
        t.elementsContent = [this.txtSumTitle5_i(), this.txtDesc5_i()],
        t
    },
    i.txtSumTitle5_i = function() {
        var t = new eui.Label;
        return this.txtSumTitle5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "累登12天",
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i.txtDesc5_i = function() {
        var t = new eui.Label;
        return this.txtDesc5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "选择一只精灵重新塑造性格（30分钟）",
        t.verticalCenter = 0,
        t.x = 131.228,
        t
    },
    i._Group8_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 280,
        t.elementsContent = [this.txtSumTitle6_i(), this.txtDesc6_i()],
        t
    },
    i.txtSumTitle6_i = function() {
        var t = new eui.Label;
        return this.txtSumTitle6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "累登15天",
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i.txtDesc6_i = function() {
        var t = new eui.Label;
        return this.txtDesc6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "选择一只精灵100%提升天赋值（30分钟）",
        t.verticalCenter = 0,
        t.x = 131.228,
        t
    },
    e
} (eui.Skin);